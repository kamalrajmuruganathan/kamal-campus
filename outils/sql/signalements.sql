-- Kamal Campus : signalements d'erreurs envoyés par les élèves.
-- À coller UNE seule fois dans Supabase → SQL Editor → Run (on peut le relancer sans risque).
--
-- Effet :
--   • l'appli peut ENVOYER un signalement (« ⚠️ Signaler une erreur » sous une fiche,
--     une question de QCM ou un exercice), que l'élève soit connecté ou non ;
--   • PERSONNE ne peut relire les signalements depuis l'appli (aucune lecture publique) :
--     on les consulte dans Supabase → Table editor → signalements (ou SQL Editor) ;
--   • garde-fous : longueurs limitées, valeurs contrôlées, pas plus de 20 envois par
--     heure pour un même compte et 300 par heure pour l'ensemble des élèves non connectés.

-- 1. La table.
create table if not exists public.signalements (
  id          bigint generated always as identity primary key,
  cree_le     timestamptz not null default now(),
  chapitre_id text not null check (char_length(chapitre_id) between 1 and 200),
  niveau      text check (niveau is null or char_length(niveau) <= 40),
  type        text not null check (type in ('contenu', 'francais', 'autre')),
  cible       text not null check (cible ~ '^(fiche|qcm:[A-Za-z0-9_-]{1,64}|exo:[A-Za-z0-9_-]{1,64})$'),
  message     text not null check (char_length(btrim(message)) between 1 and 500),
  extrait     text check (extrait is null or char_length(extrait) <= 300),
  user_id     uuid references auth.users (id) on delete set null,
  -- Suivi par Kamal / le professeur (modifiable seulement depuis Supabase).
  traite      boolean not null default false,
  note        text
);

comment on table public.signalements is
  'Erreurs signalées par les élèves (fiche, QCM, exercice). Écriture seule depuis l''appli ; lecture réservée à Supabase (Table editor).';

-- 2. Index (consultation par chapitre, par date, et non traités d'abord).
create index if not exists signalements_chapitre_idx on public.signalements (chapitre_id, cree_le desc);
create index if not exists signalements_cree_le_idx on public.signalements (cree_le desc);
create index if not exists signalements_non_traites_idx on public.signalements (cree_le desc) where not traite;
create index if not exists signalements_user_idx on public.signalements (user_id, cree_le desc) where user_id is not null;

-- 3. Droits : l'appli (rôles anon et authenticated) peut seulement INSÉRER.
--    Pas de SELECT, UPDATE ni DELETE pour elle. Le rôle service et le tableau de bord
--    Supabase (rôle postgres) gardent l'accès complet.
alter table public.signalements enable row level security;
revoke all on table public.signalements from anon, authenticated;
grant insert (chapitre_id, niveau, type, cible, message, extrait, user_id)
  on table public.signalements to anon, authenticated;
grant all on table public.signalements to service_role;

drop policy if exists signalements_insertion on public.signalements;
create policy signalements_insertion on public.signalements
  for insert to anon, authenticated
  with check (
    -- Un élève connecté ne peut signer qu'à son propre nom ; un visiteur, sans nom.
    user_id is not distinct from auth.uid()
    and traite = false
    and note is null
  );
-- Aucune règle « for select » : la lecture est donc refusée à l'appli.

-- 4. Limite d'envois (contre les abus). La fonction tourne avec les droits du
--    propriétaire pour pouvoir compter les lignes que l'appli ne peut pas lire.
create or replace function public.signalements_limite()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  n integer;
begin
  if new.user_id is not null then
    select count(*) into n from public.signalements
      where user_id = new.user_id and cree_le > now() - interval '1 hour';
    if n >= 20 then
      raise exception 'Trop de signalements envoyés : réessaie plus tard.' using errcode = 'P0001';
    end if;
  else
    select count(*) into n from public.signalements
      where user_id is null and cree_le > now() - interval '1 hour';
    if n >= 300 then
      raise exception 'Trop de signalements envoyés : réessaie plus tard.' using errcode = 'P0001';
    end if;
  end if;
  new.cree_le := now();       -- la date est toujours celle du serveur
  new.message := btrim(new.message);
  return new;
end $$;

revoke all on function public.signalements_limite() from public, anon, authenticated;

drop trigger if exists signalements_limite on public.signalements;
create trigger signalements_limite
  before insert on public.signalements
  for each row execute function public.signalements_limite();

-- 5. Vue de comptage (pour Kamal / le professeur, dans le Table editor ou le SQL Editor) :
--    nombre de signalements par chapitre, dont non traités, et date du dernier.
--    security_invoker : la vue applique les droits de celui qui la lit → invisible pour l'appli.
create or replace view public.signalements_par_chapitre
with (security_invoker = true) as
  select chapitre_id,
         max(niveau) as niveau,
         count(*) as total,
         count(*) filter (where not traite) as non_traites,
         count(*) filter (where type = 'contenu') as contenu,
         count(*) filter (where type = 'francais') as francais,
         count(*) filter (where type = 'autre') as autre,
         max(cree_le) as dernier
  from public.signalements
  group by chapitre_id
  order by non_traites desc, dernier desc;

revoke all on public.signalements_par_chapitre from anon, authenticated;
grant select on public.signalements_par_chapitre to service_role;

-- 6. Vérifications (facultatif) :
-- select policyname, cmd, roles, with_check from pg_policies where tablename = 'signalements';
-- select * from public.signalements where not traite order by cree_le desc;
-- select * from public.signalements_par_chapitre;
-- Marquer un signalement comme traité :
-- update public.signalements set traite = true, note = 'corrigé le …' where id = 123;
