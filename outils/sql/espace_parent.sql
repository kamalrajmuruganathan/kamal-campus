-- ============================================================================
-- Kamal Campus : ESPACE PARENT (un parent suit la progression de son enfant).
-- À coller une seule fois dans Supabase → SQL Editor → Run.
-- Le script peut être relancé sans danger (il ne recrée que ce qui manque
-- et remplace les fonctions par leur dernière version).
--
-- Comment ça marche, en bref :
--   1. L'élève (connecté) demande un CODE de 6 caractères, valable 24 heures.
--   2. Il donne ce code à son parent (à l'oral, par SMS…).
--   3. Le parent (connecté avec SON propre compte) tape le code : les deux
--      comptes sont alors liés et le code est effacé (il ne sert qu'une fois).
--   4. Le parent peut lire un RÉSUMÉ de la progression de l'enfant (XP, série,
--      QCM, chapitres travaillés…) et rien d'autre : ni ses messages, ni ses
--      amis, ni ses réglages.
--   5. L'élève voit qui le suit et peut retirer un parent à tout moment ;
--      le parent peut aussi arrêter de suivre un enfant.
--
-- Sécurité : les tables sont protégées par RLS (Row Level Security). Personne ne
-- peut y écrire directement : tout passe par les fonctions ci-dessous, qui
-- vérifient qui appelle (auth.uid()). Les visiteurs non connectés n'ont accès à rien.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. Table des codes temporaires.
--    Une ligne = un code donné par un élève. Un élève n'a qu'un code à la fois.
-- ----------------------------------------------------------------------------
create table if not exists public.codes_parents (
  code      text primary key,
  enfant    uuid not null references auth.users(id) on delete cascade,
  expire_le timestamptz not null
);
create index if not exists codes_parents_enfant_idx on public.codes_parents (enfant);

alter table public.codes_parents enable row level security;

-- L'élève peut relire SON code (pour le réafficher en rouvrant l'écran).
-- Aucune autre lecture, aucune écriture directe (tout passe par les fonctions).
drop policy if exists "codes_parents : l'élève lit son code" on public.codes_parents;
create policy "codes_parents : l'élève lit son code"
  on public.codes_parents for select to authenticated
  using (enfant = auth.uid());


-- ----------------------------------------------------------------------------
-- 2. Table des liens parent → enfant.
--    Une ligne = « ce parent suit cet enfant ».
-- ----------------------------------------------------------------------------
create table if not exists public.liens_parents (
  parent  uuid not null references auth.users(id) on delete cascade,
  enfant  uuid not null references auth.users(id) on delete cascade,
  cree_le timestamptz not null default now(),
  primary key (parent, enfant),
  check (parent <> enfant)
);
create index if not exists liens_parents_enfant_idx on public.liens_parents (enfant);

alter table public.liens_parents enable row level security;

-- Chacun ne voit que les liens qui le concernent (en tant que parent OU enfant).
drop policy if exists "liens_parents : je vois mes liens" on public.liens_parents;
create policy "liens_parents : je vois mes liens"
  on public.liens_parents for select to authenticated
  using (parent = auth.uid() or enfant = auth.uid());


-- ----------------------------------------------------------------------------
-- 3. Anti-devinette : on note les codes faux tapés par chaque compte.
--    Au-delà de 10 essais ratés en une heure, la saisie est bloquée un moment.
--    (Personne ne peut lire cette table : RLS activée sans aucune règle.)
-- ----------------------------------------------------------------------------
create table if not exists public.essais_codes_parents (
  parent uuid not null references auth.users(id) on delete cascade,
  le     timestamptz not null default now()
);
create index if not exists essais_codes_parents_idx on public.essais_codes_parents (parent, le);
alter table public.essais_codes_parents enable row level security;


-- ----------------------------------------------------------------------------
-- 4. creer_code_parent() — appelée par l'ÉLÈVE.
--    Fabrique un code de 6 caractères faciles à lire (pas de 0/O, 1/I/L),
--    valable 24 h. L'ancien code de l'élève est supprimé.
--    Renvoie : le code et sa date d'expiration.
-- ----------------------------------------------------------------------------
create or replace function public.creer_code_parent()
returns table (code text, expire_le timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  moi       uuid := auth.uid();
  alphabet  constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  octets    bytea;
  nouveau   text;
  fin       timestamptz := now() + interval '24 hours';
  i         int;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;

  -- Ménage : l'ancien code de l'élève et les codes expirés de tout le monde.
  delete from public.codes_parents c where c.enfant = moi or c.expire_le < now();

  loop
    -- Hasard de qualité (gen_random_uuid est intégré à Postgres).
    octets := uuid_send(gen_random_uuid());
    nouveau := '';
    for i in 0..5 loop
      nouveau := nouveau || substr(alphabet, 1 + (get_byte(octets, i) % length(alphabet)), 1);
    end loop;
    exit when not exists (select 1 from public.codes_parents c where c.code = nouveau);
  end loop;

  insert into public.codes_parents (code, enfant, expire_le) values (nouveau, moi, fin);
  return query select nouveau, fin;
end;
$$;


-- ----------------------------------------------------------------------------
-- 5. lier_enfant(code) — appelée par le PARENT.
--    Vérifie le code (existe, pas expiré, pas le sien), crée le lien et efface
--    le code. Renvoie l'identifiant de l'enfant, ou « vide » si le code est inconnu.
-- ----------------------------------------------------------------------------
create or replace function public.lier_enfant(p_code text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  moi    uuid := auth.uid();
  propre text := upper(regexp_replace(coalesce(p_code, ''), '[^A-Za-z0-9]', '', 'g'));
  ligne  public.codes_parents%rowtype;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;

  -- Trop d'essais ratés dans la dernière heure ?
  delete from public.essais_codes_parents e where e.le < now() - interval '1 hour';
  if (select count(*) from public.essais_codes_parents e where e.parent = moi) >= 10 then
    raise exception 'Trop d’essais : réessayez dans une heure.' using errcode = 'P0001';
  end if;

  select * into ligne from public.codes_parents c where c.code = propre;

  if not found then
    -- On note l'essai raté puis on renvoie « vide » (sans erreur, sinon l'essai
    -- noté serait annulé) : l'appli affiche alors « Code inconnu ».
    insert into public.essais_codes_parents (parent) values (moi);
    return null;
  end if;
  if ligne.expire_le < now() then
    delete from public.codes_parents c where c.code = propre;
    raise exception 'Ce code a expiré : demandez un nouveau code à votre enfant.' using errcode = 'P0001';
  end if;
  if ligne.enfant = moi then
    raise exception 'Ce code a été créé par ce compte : il doit être saisi sur le compte du parent.' using errcode = 'P0001';
  end if;

  insert into public.liens_parents (parent, enfant) values (moi, ligne.enfant)
    on conflict (parent, enfant) do nothing;
  delete from public.codes_parents c where c.code = propre; -- code consommé
  return ligne.enfant;
end;
$$;


-- ----------------------------------------------------------------------------
-- 6. delier_enfant(enfant) — le PARENT arrête de suivre un enfant.
--    retirer_parent(parent) — l'ÉLÈVE retire un parent qui le suit.
-- ----------------------------------------------------------------------------
create or replace function public.delier_enfant(p_enfant uuid)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.liens_parents l where l.parent = auth.uid() and l.enfant = p_enfant;
$$;

create or replace function public.retirer_parent(p_parent uuid)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.liens_parents l where l.enfant = auth.uid() and l.parent = p_parent;
$$;


-- ----------------------------------------------------------------------------
-- 7. Listes avec les pseudos.
--    mes_enfants() : les enfants que je suis (parent).
--    mes_parents() : les parents qui me suivent (élève).
--    Le pseudo vient de « profils_publics » (déjà public dans l'appli) ;
--    pour l'enfant, on ajoute aussi le prénom saisi à l'accueil, s'il existe.
-- ----------------------------------------------------------------------------
create or replace function public.mes_enfants()
returns table (id uuid, pseudo text, prenom text, cree_le timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select l.enfant, pp.pseudo::text, nullif(p.data->>'prenom', ''), l.cree_le
  from public.liens_parents l
  left join public.profils_publics pp on pp.id = l.enfant
  left join public.profils p on p.user_id = l.enfant
  where l.parent = auth.uid()
  order by l.cree_le;
$$;

create or replace function public.mes_parents()
returns table (id uuid, pseudo text, cree_le timestamptz)
language sql
stable
security definer
set search_path = public
as $$
  select l.parent, pp.pseudo::text, l.cree_le
  from public.liens_parents l
  left join public.profils_publics pp on pp.id = l.parent
  where l.enfant = auth.uid()
  order by l.cree_le;
$$;


-- ----------------------------------------------------------------------------
-- 8. suivi_enfant(enfant) — le PARENT lit la progression de son enfant.
--    Plutôt qu'ouvrir toute la ligne « profils » de l'enfant (qui contient aussi
--    ses réglages, ses favoris, ses erreurs…), on ne renvoie QUE les champs utiles
--    au suivi. Si le compte n'est pas lié à cet enfant : rien n'est renvoyé.
-- ----------------------------------------------------------------------------
create or replace function public.suivi_enfant(p_enfant uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'prenom',              p.data->'prenom',
    'xp',                  p.data->'xp',
    'xpParMatiere',        p.data->'xpParMatiere',
    'qcmTermines',         p.data->'qcmTermines',
    'reponsesJustes',      p.data->'reponsesJustes',
    'reponsesTotal',       p.data->'reponsesTotal',
    'sansFautes',          p.data->'sansFautes',
    'flashcardsRevues',    p.data->'flashcardsRevues',
    'flashcardsConnues',   p.data->'flashcardsConnues',
    'enigmesResolues',     p.data->'enigmesResolues',
    'exosReussis',         p.data->'exosReussis',
    'chapitres',           p.data->'chapitres',
    'historique',          p.data->'historique',
    'objectifQuotidien',   p.data->'objectifQuotidien',
    'jourCourant',         p.data->'jourCourant',
    'xpDuJour',            p.data->'xpDuJour',
    'serieJours',          p.data->'serieJours',
    'meilleureSerieJours', p.data->'meilleureSerieJours',
    'dernierJourValide',   p.data->'dernierJourValide',
    'niveauParDefaut',     p.data->'niveauParDefaut',
    'dernierChapitre',     p.data->'dernierChapitre'
  )
  from public.profils p
  where p.user_id = p_enfant
    and exists (
      select 1 from public.liens_parents l
      where l.parent = auth.uid() and l.enfant = p_enfant
    );
$$;


-- ----------------------------------------------------------------------------
-- 9. Droits : seuls les comptes connectés peuvent appeler ces fonctions.
-- ----------------------------------------------------------------------------
revoke all on function public.creer_code_parent()      from public, anon;
revoke all on function public.lier_enfant(text)         from public, anon;
revoke all on function public.delier_enfant(uuid)       from public, anon;
revoke all on function public.retirer_parent(uuid)      from public, anon;
revoke all on function public.mes_enfants()             from public, anon;
revoke all on function public.mes_parents()             from public, anon;
revoke all on function public.suivi_enfant(uuid)        from public, anon;

grant execute on function public.creer_code_parent()    to authenticated;
grant execute on function public.lier_enfant(text)       to authenticated;
grant execute on function public.delier_enfant(uuid)     to authenticated;
grant execute on function public.retirer_parent(uuid)    to authenticated;
grant execute on function public.mes_enfants()           to authenticated;
grant execute on function public.mes_parents()           to authenticated;
grant execute on function public.suivi_enfant(uuid)      to authenticated;

-- Les tables ne sont jamais modifiées directement depuis l'appli.
revoke insert, update, delete on public.codes_parents        from anon, authenticated;
revoke insert, update, delete on public.liens_parents        from anon, authenticated;
revoke all                    on public.essais_codes_parents from anon, authenticated;
grant select on public.codes_parents to authenticated;
grant select on public.liens_parents to authenticated;
