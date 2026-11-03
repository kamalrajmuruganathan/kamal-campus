-- ============================================================================
-- Kamal Campus : ESPACE ENSEIGNANT (un professeur crée une classe, donne des
-- devoirs et voit les résultats de ses élèves à ces devoirs).
-- À coller une seule fois dans Supabase → SQL Editor → Run.
-- Le script peut être relancé sans danger (il ne recrée que ce qui manque
-- et remplace les fonctions par leur dernière version).
--
-- Comment ça marche, en bref :
--   1. L'enseignant (connecté avec un compte Kamal Campus ordinaire) crée une
--      CLASSE : il reçoit un CODE de 6 caractères (sans 0/O ni 1/I/L).
--   2. Il donne ce code à ses élèves. Chaque élève (connecté avec SON compte)
--      tape le code et choisit le PSEUDO que l'enseignant verra.
--   3. L'enseignant donne des DEVOIRS : un chapitre, un type (« fiche » = lire
--      la fiche puis faire le QCM, « qcm », ou « exercices »), une date limite
--      et une consigne courte.
--   4. Quand l'élève fait le QCM ou des exercices de ce chapitre, l'appli envoie
--      son RÉSULTAT (score sur total) : la fonction vérifie qu'il est bien
--      membre de la classe et borne les valeurs.
--   5. L'enseignant voit le tableau de sa classe : pseudos, devoirs, résultats.
--
-- Données minimales : l'enseignant ne voit QUE le pseudo choisi par l'élève et
-- ses résultats aux devoirs de SA classe. Jamais son adresse, son prénom, son
-- profil, ses XP, ses amis, ses messages ni son identifiant de compte.
-- L'élève peut quitter la classe à tout moment : sa ligne et ses résultats
-- sont alors effacés. L'enseignant peut aussi retirer un élève.
--
-- Sécurité : RLS activée sur toutes les tables, SANS aucune règle de lecture :
-- personne ne lit ni n'écrit les tables directement. Tout passe par les
-- fonctions ci-dessous (security definer), qui vérifient qui appelle
-- (auth.uid()). Les visiteurs non connectés (anon) n'ont accès à rien.
--
-- Limites anti-abus : 20 classes actives (40 en tout) par enseignant,
-- 60 élèves par classe, 10 classes par élève, 150 devoirs par classe,
-- 30 devoirs créés par jour et par enseignant, 10 codes faux par heure.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. Les classes.
-- ----------------------------------------------------------------------------
create table if not exists public.classes_enseignant (
  id             uuid primary key default gen_random_uuid(),
  enseignant     uuid not null references auth.users(id) on delete cascade,
  nom            text not null check (char_length(nom) between 1 and 60),
  niveau         text check (niveau is null or niveau in (
                   'cp', 'ce1', 'ce2', 'cm1', 'cm2', 'sixieme', 'cinquieme', 'quatrieme',
                   'troisieme', 'seconde', 'premiere', 'premiere-techno', 'terminale',
                   'terminale-techno')),
  -- Nom affiché aux élèves (« Mme Martin »), facultatif.
  enseignant_nom text not null default '' check (char_length(enseignant_nom) <= 40),
  code           text not null unique check (code ~ '^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$'),
  archivee       boolean not null default false,
  cree_le        timestamptz not null default now()
);
create index if not exists classes_enseignant_enseignant_idx on public.classes_enseignant (enseignant);
alter table public.classes_enseignant enable row level security;


-- ----------------------------------------------------------------------------
-- 2. Les membres (élèves) d'une classe.
--    « id » sert à désigner l'élève auprès de l'enseignant : son identifiant
--    de compte n'est jamais envoyé à l'enseignant.
-- ----------------------------------------------------------------------------
create table if not exists public.membres_classes (
  id         uuid primary key default gen_random_uuid(),
  classe     uuid not null references public.classes_enseignant(id) on delete cascade,
  eleve      uuid not null references auth.users(id) on delete cascade,
  pseudo     text not null check (char_length(pseudo) between 2 and 24),
  rejoint_le timestamptz not null default now(),
  unique (classe, eleve)
);
create index if not exists membres_classes_eleve_idx on public.membres_classes (eleve);
-- Deux élèves d'une même classe ne peuvent pas avoir le même pseudo.
create unique index if not exists membres_classes_pseudo_idx on public.membres_classes (classe, lower(pseudo));
alter table public.membres_classes enable row level security;


-- ----------------------------------------------------------------------------
-- 3. Les devoirs.
--    type : 'fiche' (lire la fiche puis faire le QCM), 'qcm', 'exercices'.
--    nb_exercices : nombre d'exercices à faire (devoirs « exercices » seulement).
-- ----------------------------------------------------------------------------
create table if not exists public.devoirs_classes (
  id           uuid primary key default gen_random_uuid(),
  classe       uuid not null references public.classes_enseignant(id) on delete cascade,
  chapitre_id  text not null check (chapitre_id ~ '^[a-z0-9-]{1,120}$'),
  type         text not null check (type in ('fiche', 'qcm', 'exercices')),
  nb_exercices smallint not null default 5 check (nb_exercices between 1 and 20),
  pour_le      date not null,
  consigne     text not null default '' check (char_length(consigne) <= 300),
  cree_le      timestamptz not null default now()
);
create index if not exists devoirs_classes_classe_idx on public.devoirs_classes (classe);
create index if not exists devoirs_classes_chapitre_idx on public.devoirs_classes (chapitre_id);
alter table public.devoirs_classes enable row level security;


-- ----------------------------------------------------------------------------
-- 4. Les résultats : une ligne par élève et par devoir.
--    QCM / fiche : meilleur score obtenu (fait_le = date du premier envoi).
--    Exercices : exos = { "<id de l'exercice>": réussi (vrai/faux) } ;
--    score = exercices réussis, total = exercices faits ; fait_le est rempli
--    quand le nombre d'exercices demandé est atteint.
-- ----------------------------------------------------------------------------
create table if not exists public.resultats_devoirs (
  devoir     uuid not null references public.devoirs_classes(id) on delete cascade,
  membre     uuid not null references public.membres_classes(id) on delete cascade,
  score      smallint not null default 0,
  total      smallint not null default 0,
  tentatives int not null default 0,
  exos       jsonb not null default '{}'::jsonb,
  fait_le    timestamptz,
  maj_le     timestamptz not null default now(),
  primary key (devoir, membre),
  check (score >= 0 and score <= total and total <= 100)
);
create index if not exists resultats_devoirs_membre_idx on public.resultats_devoirs (membre);
alter table public.resultats_devoirs enable row level security;


-- ----------------------------------------------------------------------------
-- 5. Anti-devinette : codes de classe faux tapés par chaque compte.
-- ----------------------------------------------------------------------------
create table if not exists public.essais_codes_classes (
  compte uuid not null references auth.users(id) on delete cascade,
  le     timestamptz not null default now()
);
create index if not exists essais_codes_classes_idx on public.essais_codes_classes (compte, le);
alter table public.essais_codes_classes enable row level security;


-- Personne ne touche aux tables directement (ni lecture, ni écriture).
revoke all on public.classes_enseignant   from anon, authenticated;
revoke all on public.membres_classes      from anon, authenticated;
revoke all on public.devoirs_classes      from anon, authenticated;
revoke all on public.resultats_devoirs    from anon, authenticated;
revoke all on public.essais_codes_classes from anon, authenticated;


-- ----------------------------------------------------------------------------
-- 6. Petites fonctions internes (non appelables depuis l'appli).
-- ----------------------------------------------------------------------------

-- Texte nettoyé : caractères de contrôle retirés, espaces multiples réduits.
create or replace function public.ens_nettoyer(p text)
returns text
language sql
immutable
set search_path = public
as $$
  select btrim(regexp_replace(regexp_replace(coalesce(p, ''), '[[:cntrl:]]', ' ', 'g'), '\s+', ' ', 'g'));
$$;

-- Pseudo valide : 2 à 24 caractères, lettres (accentuées comprises), chiffres,
-- espace, point, tiret, trait bas, apostrophe.
create or replace function public.ens_pseudo_valide(p text)
returns boolean
language sql
immutable
set search_path = public
as $$
  select char_length(p) between 2 and 24 and p ~ '^[A-Za-z0-9À-ÖØ-öø-ÿŒœ ._''’-]+$';
$$;

-- Nouveau code de classe libre (6 caractères faciles à lire).
create or replace function public.ens_code_libre()
returns text
language plpgsql
volatile
set search_path = public
as $$
declare
  alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  octets   bytea;
  nouveau  text;
  i        int;
begin
  loop
    octets := uuid_send(gen_random_uuid());
    nouveau := '';
    for i in 0..5 loop
      nouveau := nouveau || substr(alphabet, 1 + (get_byte(octets, i) % length(alphabet)), 1);
    end loop;
    exit when not exists (select 1 from public.classes_enseignant c where c.code = nouveau);
  end loop;
  return nouveau;
end;
$$;

revoke all on function public.ens_nettoyer(text)      from public, anon, authenticated;
revoke all on function public.ens_pseudo_valide(text) from public, anon, authenticated;
revoke all on function public.ens_code_libre()        from public, anon, authenticated;


-- ============================================================================
-- CÔTÉ ENSEIGNANT
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 7. creer_classe(nom, niveau, nom affiché) → { id, code }
-- ----------------------------------------------------------------------------
create or replace function public.creer_classe(p_nom text, p_niveau text, p_enseignant_nom text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  moi     uuid := auth.uid();
  v_nom     text := public.ens_nettoyer(p_nom);
  v_affiche text := public.ens_nettoyer(p_enseignant_nom);
  niv     text := nullif(public.ens_nettoyer(p_niveau), '');
  nouveau public.classes_enseignant%rowtype;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;
  if char_length(v_nom) < 1 or char_length(v_nom) > 60 then
    raise exception 'Le nom de la classe doit faire entre 1 et 60 caractères.' using errcode = 'P0001';
  end if;
  if char_length(v_affiche) > 40 then
    raise exception 'Le nom affiché aux élèves doit faire 40 caractères au plus.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.classes_enseignant c where c.enseignant = moi and not c.archivee) >= 20 then
    raise exception 'Limite atteinte : 20 classes actives au plus. Archivez une ancienne classe.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.classes_enseignant c where c.enseignant = moi) >= 40 then
    raise exception 'Limite atteinte : 40 classes au plus. Supprimez une classe archivée.' using errcode = 'P0001';
  end if;

  insert into public.classes_enseignant (enseignant, nom, niveau, enseignant_nom, code)
  values (moi, v_nom, niv, v_affiche, public.ens_code_libre())
  returning * into nouveau;

  return jsonb_build_object('id', nouveau.id, 'code', nouveau.code);
end;
$$;


-- ----------------------------------------------------------------------------
-- 8. mes_classes_enseignant() : les classes que j'ai créées.
-- ----------------------------------------------------------------------------
create or replace function public.mes_classes_enseignant()
returns table (id uuid, nom text, niveau text, enseignant_nom text, code text,
               archivee boolean, cree_le timestamptz, nb_eleves int, nb_devoirs int)
language sql
stable
security definer
set search_path = public
as $$
  select c.id, c.nom, c.niveau, c.enseignant_nom, c.code, c.archivee, c.cree_le,
         (select count(*)::int from public.membres_classes m where m.classe = c.id),
         (select count(*)::int from public.devoirs_classes d where d.classe = c.id)
  from public.classes_enseignant c
  where c.enseignant = auth.uid()
  order by c.archivee, c.cree_le desc;
$$;


-- ----------------------------------------------------------------------------
-- 9. modifier_classe : renommer, changer le nom affiché, archiver / rouvrir.
--    (Une classe archivée n'accepte plus de nouveaux élèves, devoirs ni résultats.)
-- ----------------------------------------------------------------------------
create or replace function public.modifier_classe(p_classe uuid, p_nom text, p_enseignant_nom text, p_archivee boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  moi     uuid := auth.uid();
  v_nom     text := public.ens_nettoyer(p_nom);
  v_affiche text := public.ens_nettoyer(p_enseignant_nom);
  ligne   public.classes_enseignant%rowtype;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;
  select * into ligne from public.classes_enseignant c where c.id = p_classe and c.enseignant = moi;
  if not found then
    raise exception 'Classe introuvable.' using errcode = 'P0001';
  end if;
  if char_length(v_nom) < 1 or char_length(v_nom) > 60 then
    raise exception 'Le nom de la classe doit faire entre 1 et 60 caractères.' using errcode = 'P0001';
  end if;
  if char_length(v_affiche) > 40 then
    raise exception 'Le nom affiché aux élèves doit faire 40 caractères au plus.' using errcode = 'P0001';
  end if;
  if ligne.archivee and not coalesce(p_archivee, false)
     and (select count(*) from public.classes_enseignant c where c.enseignant = moi and not c.archivee) >= 20 then
    raise exception 'Limite atteinte : 20 classes actives au plus.' using errcode = 'P0001';
  end if;
  update public.classes_enseignant c
     set nom = v_nom, enseignant_nom = v_affiche, archivee = coalesce(p_archivee, c.archivee)
   where c.id = p_classe;
end;
$$;


-- ----------------------------------------------------------------------------
-- 10. nouveau_code_classe : change le code (l'ancien ne marche plus ;
--     les élèves déjà inscrits restent dans la classe).
-- ----------------------------------------------------------------------------
create or replace function public.nouveau_code_classe(p_classe uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  nouveau text;
begin
  if auth.uid() is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;
  if not exists (select 1 from public.classes_enseignant c where c.id = p_classe and c.enseignant = auth.uid()) then
    raise exception 'Classe introuvable.' using errcode = 'P0001';
  end if;
  nouveau := public.ens_code_libre();
  update public.classes_enseignant c set code = nouveau where c.id = p_classe;
  return nouveau;
end;
$$;


-- ----------------------------------------------------------------------------
-- 11. supprimer_classe : efface la classe, ses membres, devoirs et résultats.
-- ----------------------------------------------------------------------------
create or replace function public.supprimer_classe(p_classe uuid)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.classes_enseignant c where c.id = p_classe and c.enseignant = auth.uid();
$$;


-- ----------------------------------------------------------------------------
-- 12. retirer_eleve(membre) : l'enseignant retire un élève de SA classe
--     (ses résultats sont effacés avec lui).
-- ----------------------------------------------------------------------------
create or replace function public.retirer_eleve(p_membre uuid)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.membres_classes m
  using public.classes_enseignant c
  where m.id = p_membre and c.id = m.classe and c.enseignant = auth.uid();
$$;


-- ----------------------------------------------------------------------------
-- 13. creer_devoir / supprimer_devoir.
-- ----------------------------------------------------------------------------
create or replace function public.creer_devoir(
  p_classe uuid, p_chapitre text, p_type text, p_nb_exercices int, p_pour_le date, p_consigne text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  moi      uuid := auth.uid();
  v_consigne text := btrim(regexp_replace(coalesce(p_consigne, ''), '[[:cntrl:]]', ' ', 'g'));
  chap     text := lower(btrim(coalesce(p_chapitre, '')));
  ligne    public.classes_enseignant%rowtype;
  nouveau  uuid;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;
  select * into ligne from public.classes_enseignant c where c.id = p_classe and c.enseignant = moi;
  if not found then
    raise exception 'Classe introuvable.' using errcode = 'P0001';
  end if;
  if ligne.archivee then
    raise exception 'Cette classe est archivée : rouvrez-la pour donner un devoir.' using errcode = 'P0001';
  end if;
  if chap !~ '^[a-z0-9-]{1,120}$' then
    raise exception 'Chapitre inconnu.' using errcode = 'P0001';
  end if;
  if p_type is null or p_type not in ('fiche', 'qcm', 'exercices') then
    raise exception 'Type de devoir inconnu.' using errcode = 'P0001';
  end if;
  if p_pour_le is null or p_pour_le < current_date or p_pour_le > current_date + 365 then
    raise exception 'La date limite doit être comprise entre aujourd’hui et dans un an.' using errcode = 'P0001';
  end if;
  if char_length(v_consigne) > 300 then
    raise exception 'La consigne doit faire 300 caractères au plus.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.devoirs_classes d where d.classe = p_classe) >= 150 then
    raise exception 'Limite atteinte : 150 devoirs par classe. Supprimez d’anciens devoirs.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.devoirs_classes d
        join public.classes_enseignant c on c.id = d.classe
       where c.enseignant = moi and d.cree_le > now() - interval '1 day') >= 30 then
    raise exception 'Limite atteinte : 30 devoirs par jour. Réessayez demain.' using errcode = 'P0001';
  end if;

  insert into public.devoirs_classes (classe, chapitre_id, type, nb_exercices, pour_le, consigne)
  values (p_classe, chap, p_type, least(greatest(coalesce(p_nb_exercices, 5), 1), 20), p_pour_le, v_consigne)
  returning id into nouveau;
  return nouveau;
end;
$$;

create or replace function public.supprimer_devoir(p_devoir uuid)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.devoirs_classes d
  using public.classes_enseignant c
  where d.id = p_devoir and c.id = d.classe and c.enseignant = auth.uid();
$$;


-- ----------------------------------------------------------------------------
-- 14. tableau_classe(classe) : tout ce qu'il faut pour le tableau de bord.
--     Élèves : identifiant de membre, pseudo, date d'arrivée (RIEN d'autre).
--     Résultats : score, total, tentatives, dates (pas le détail des exercices).
--     Renvoie null si la classe n'est pas à l'enseignant qui appelle.
-- ----------------------------------------------------------------------------
create or replace function public.tableau_classe(p_classe uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'classe', jsonb_build_object(
      'id', c.id, 'nom', c.nom, 'niveau', c.niveau, 'enseignant_nom', c.enseignant_nom,
      'code', c.code, 'archivee', c.archivee, 'cree_le', c.cree_le),
    'eleves', coalesce((
      select jsonb_agg(jsonb_build_object('id', m.id, 'pseudo', m.pseudo, 'rejoint_le', m.rejoint_le)
                       order by lower(m.pseudo))
      from public.membres_classes m where m.classe = c.id), '[]'::jsonb),
    'devoirs', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', d.id, 'chapitre_id', d.chapitre_id, 'type', d.type, 'nb_exercices', d.nb_exercices,
               'pour_le', d.pour_le, 'consigne', d.consigne, 'cree_le', d.cree_le)
             order by d.pour_le desc, d.cree_le desc)
      from public.devoirs_classes d where d.classe = c.id), '[]'::jsonb),
    'resultats', coalesce((
      select jsonb_agg(jsonb_build_object(
               'devoir', r.devoir, 'membre', r.membre, 'score', r.score, 'total', r.total,
               'tentatives', r.tentatives, 'fait_le', r.fait_le, 'maj_le', r.maj_le))
      from public.resultats_devoirs r
      join public.devoirs_classes d on d.id = r.devoir
      where d.classe = c.id), '[]'::jsonb)
  )
  from public.classes_enseignant c
  where c.id = p_classe and c.enseignant = auth.uid();
$$;


-- ============================================================================
-- CÔTÉ ÉLÈVE
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 15. rejoindre_classe(code, pseudo) → { id, nom } ou null si le code est inconnu.
-- ----------------------------------------------------------------------------
create or replace function public.rejoindre_classe(p_code text, p_pseudo text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  moi    uuid := auth.uid();
  propre text := upper(regexp_replace(coalesce(p_code, ''), '[^A-Za-z0-9]', '', 'g'));
  v_pseudo text := public.ens_nettoyer(p_pseudo);
  ligne  public.classes_enseignant%rowtype;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;

  delete from public.essais_codes_classes e where e.le < now() - interval '1 hour';
  if (select count(*) from public.essais_codes_classes e where e.compte = moi) >= 10 then
    raise exception 'Trop d’essais : réessaie dans une heure.' using errcode = 'P0001';
  end if;

  select * into ligne from public.classes_enseignant c where c.code = propre;
  if not found then
    -- Essai raté noté, puis « vide » (sans erreur, sinon l'essai serait annulé).
    insert into public.essais_codes_classes (compte) values (moi);
    return null;
  end if;

  if ligne.enseignant = moi then
    raise exception 'C’est ta propre classe : elle se gère dans l’espace enseignant.' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.membres_classes m where m.classe = ligne.id and m.eleve = moi) then
    return jsonb_build_object('id', ligne.id, 'nom', ligne.nom, 'deja', true);
  end if;
  if ligne.archivee then
    raise exception 'Cette classe est fermée : elle n’accepte plus de nouveaux élèves.' using errcode = 'P0001';
  end if;
  if not public.ens_pseudo_valide(v_pseudo) then
    raise exception 'Choisis un pseudo de 2 à 24 caractères (lettres, chiffres, espace, point ou tiret).' using errcode = 'P0001';
  end if;
  if (select count(*) from public.membres_classes m where m.eleve = moi) >= 10 then
    raise exception 'Tu fais déjà partie de 10 classes : quittes-en une d’abord.' using errcode = 'P0001';
  end if;
  if (select count(*) from public.membres_classes m where m.classe = ligne.id) >= 60 then
    raise exception 'Cette classe est complète (60 élèves au plus).' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.membres_classes m where m.classe = ligne.id and lower(m.pseudo) = lower(v_pseudo)) then
    raise exception 'Ce pseudo est déjà pris dans cette classe : choisis-en un autre.' using errcode = 'P0001';
  end if;

  insert into public.membres_classes (classe, eleve, pseudo) values (ligne.id, moi, v_pseudo);
  return jsonb_build_object('id', ligne.id, 'nom', ligne.nom, 'deja', false);
end;
$$;


-- ----------------------------------------------------------------------------
-- 16. quitter_classe : l'élève quitte une classe (ses résultats sont effacés).
--     changer_pseudo_classe : l'élève change le pseudo vu par l'enseignant.
-- ----------------------------------------------------------------------------
create or replace function public.quitter_classe(p_classe uuid)
returns void
language sql
security definer
set search_path = public
as $$
  delete from public.membres_classes m where m.classe = p_classe and m.eleve = auth.uid();
$$;

create or replace function public.changer_pseudo_classe(p_classe uuid, p_pseudo text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  moi    uuid := auth.uid();
  v_pseudo text := public.ens_nettoyer(p_pseudo);
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;
  if not public.ens_pseudo_valide(v_pseudo) then
    raise exception 'Choisis un pseudo de 2 à 24 caractères (lettres, chiffres, espace, point ou tiret).' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.membres_classes m
             where m.classe = p_classe and m.eleve <> moi and lower(m.pseudo) = lower(v_pseudo)) then
    raise exception 'Ce pseudo est déjà pris dans cette classe : choisis-en un autre.' using errcode = 'P0001';
  end if;
  update public.membres_classes m set pseudo = v_pseudo where m.classe = p_classe and m.eleve = moi;
end;
$$;


-- ----------------------------------------------------------------------------
-- 17. mes_classes_eleve() : mes classes et mes devoirs (avec MON résultat).
--     Les classes archivées sont signalées ; leurs devoirs ne sont pas renvoyés.
--     Les devoirs dont la date est passée depuis plus de 60 jours non plus.
-- ----------------------------------------------------------------------------
create or replace function public.mes_classes_eleve()
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'classes', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', c.id, 'nom', c.nom, 'niveau', c.niveau, 'enseignant_nom', c.enseignant_nom,
               'archivee', c.archivee, 'pseudo', m.pseudo, 'rejoint_le', m.rejoint_le)
             order by m.rejoint_le)
      from public.membres_classes m
      join public.classes_enseignant c on c.id = m.classe
      where m.eleve = auth.uid()), '[]'::jsonb),
    'devoirs', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', d.id, 'classe', d.classe, 'chapitre_id', d.chapitre_id, 'type', d.type,
               'nb_exercices', d.nb_exercices, 'pour_le', d.pour_le, 'consigne', d.consigne,
               'cree_le', d.cree_le, 'score', r.score, 'total', r.total, 'fait_le', r.fait_le)
             order by d.pour_le, d.cree_le)
      from public.membres_classes m
      join public.classes_enseignant c on c.id = m.classe and not c.archivee
      join public.devoirs_classes d on d.classe = c.id
      left join public.resultats_devoirs r on r.devoir = d.id and r.membre = m.id
      where m.eleve = auth.uid() and d.pour_le >= current_date - 60), '[]'::jsonb)
  );
$$;


-- ----------------------------------------------------------------------------
-- 18. rendre_devoir_qcm(chapitre, score, total) : appelée par l'appli à la fin
--     d'un QCM de ce chapitre. Met à jour les devoirs « fiche » et « qcm » de ce
--     chapitre dans les classes de l'élève (non archivées). On garde le MEILLEUR
--     score ; fait_le = date du premier envoi. Renvoie le nombre de devoirs touchés.
-- ----------------------------------------------------------------------------
create or replace function public.rendre_devoir_qcm(p_chapitre text, p_score int, p_total int)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  moi uuid := auth.uid();
  n   int;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;
  if p_total is null or p_score is null or p_total < 1 or p_total > 40 or p_score < 0 or p_score > p_total then
    raise exception 'Résultat invalide.' using errcode = 'P0001';
  end if;

  insert into public.resultats_devoirs as r (devoir, membre, score, total, tentatives, fait_le, maj_le)
  select d.id, m.id, p_score, p_total, 1, now(), now()
  from public.membres_classes m
  join public.classes_enseignant c on c.id = m.classe and not c.archivee
  join public.devoirs_classes d on d.classe = c.id
  where m.eleve = moi and d.chapitre_id = p_chapitre and d.type in ('fiche', 'qcm')
  on conflict (devoir, membre) do update set
    -- Meilleur taux de réussite (comparaison sans division).
    score = case when excluded.score * r.total > r.score * excluded.total or r.total = 0
                 then excluded.score else r.score end,
    total = case when excluded.score * r.total > r.score * excluded.total or r.total = 0
                 then excluded.total else r.total end,
    tentatives = least(r.tentatives + 1, 1000),
    fait_le = coalesce(r.fait_le, now()),
    maj_le = now();
  get diagnostics n = row_count;
  return n;
end;
$$;


-- ----------------------------------------------------------------------------
-- 19. rendre_devoir_exercice(chapitre, exercice, réussi) : appelée par l'appli
--     après chaque exercice vérifié de ce chapitre. Met à jour les devoirs
--     « exercices » de ce chapitre. Un exercice réussi une fois reste réussi ;
--     100 exercices au plus par devoir. Renvoie le nombre de devoirs touchés.
-- ----------------------------------------------------------------------------
create or replace function public.rendre_devoir_exercice(p_chapitre text, p_exo text, p_juste boolean)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  moi  uuid := auth.uid();
  n    int := 0;
  d    record;
  v_exos jsonb;
  sc   int;
  tot  int;
begin
  if moi is null then
    raise exception 'Il faut être connecté.' using errcode = '28000';
  end if;
  if p_exo is null or p_exo !~ '^[A-Za-z0-9_.-]{1,40}$' or p_juste is null then
    raise exception 'Résultat invalide.' using errcode = 'P0001';
  end if;

  for d in
    select dv.id as devoir, m.id as membre, dv.nb_exercices
    from public.membres_classes m
    join public.classes_enseignant c on c.id = m.classe and not c.archivee
    join public.devoirs_classes dv on dv.classe = c.id
    where m.eleve = moi and dv.chapitre_id = p_chapitre and dv.type = 'exercices'
  loop
    insert into public.resultats_devoirs (devoir, membre) values (d.devoir, d.membre)
      on conflict (devoir, membre) do nothing;
    select r.exos into v_exos from public.resultats_devoirs r
      where r.devoir = d.devoir and r.membre = d.membre for update;
    if v_exos ? p_exo or (select count(*) from jsonb_object_keys(v_exos)) < 100 then
      v_exos := v_exos || jsonb_build_object(p_exo, coalesce((v_exos ->> p_exo)::boolean, false) or p_juste);
      select count(*) filter (where v::boolean), count(*) into sc, tot from jsonb_each_text(v_exos) as e(k, v);
      update public.resultats_devoirs r
         set exos = v_exos, score = sc, total = tot,
             tentatives = least(r.tentatives + 1, 1000),
             fait_le = case when r.fait_le is null and tot >= d.nb_exercices then now() else r.fait_le end,
             maj_le = now()
       where r.devoir = d.devoir and r.membre = d.membre;
      n := n + 1;
    end if;
  end loop;
  return n;
end;
$$;


-- ----------------------------------------------------------------------------
-- 20. Droits : seuls les comptes connectés peuvent appeler ces fonctions.
-- ----------------------------------------------------------------------------
revoke all on function public.creer_classe(text, text, text)                       from public, anon;
revoke all on function public.mes_classes_enseignant()                             from public, anon;
revoke all on function public.modifier_classe(uuid, text, text, boolean)           from public, anon;
revoke all on function public.nouveau_code_classe(uuid)                            from public, anon;
revoke all on function public.supprimer_classe(uuid)                               from public, anon;
revoke all on function public.retirer_eleve(uuid)                                  from public, anon;
revoke all on function public.creer_devoir(uuid, text, text, int, date, text)      from public, anon;
revoke all on function public.supprimer_devoir(uuid)                               from public, anon;
revoke all on function public.tableau_classe(uuid)                                 from public, anon;
revoke all on function public.rejoindre_classe(text, text)                         from public, anon;
revoke all on function public.quitter_classe(uuid)                                 from public, anon;
revoke all on function public.changer_pseudo_classe(uuid, text)                    from public, anon;
revoke all on function public.mes_classes_eleve()                                  from public, anon;
revoke all on function public.rendre_devoir_qcm(text, int, int)                    from public, anon;
revoke all on function public.rendre_devoir_exercice(text, text, boolean)          from public, anon;

grant execute on function public.creer_classe(text, text, text)                    to authenticated;
grant execute on function public.mes_classes_enseignant()                          to authenticated;
grant execute on function public.modifier_classe(uuid, text, text, boolean)        to authenticated;
grant execute on function public.nouveau_code_classe(uuid)                         to authenticated;
grant execute on function public.supprimer_classe(uuid)                            to authenticated;
grant execute on function public.retirer_eleve(uuid)                               to authenticated;
grant execute on function public.creer_devoir(uuid, text, text, int, date, text)   to authenticated;
grant execute on function public.supprimer_devoir(uuid)                            to authenticated;
grant execute on function public.tableau_classe(uuid)                              to authenticated;
grant execute on function public.rejoindre_classe(text, text)                      to authenticated;
grant execute on function public.quitter_classe(uuid)                              to authenticated;
grant execute on function public.changer_pseudo_classe(uuid, text)                 to authenticated;
grant execute on function public.mes_classes_eleve()                               to authenticated;
grant execute on function public.rendre_devoir_qcm(text, int, int)                 to authenticated;
grant execute on function public.rendre_devoir_exercice(text, text, boolean)       to authenticated;
