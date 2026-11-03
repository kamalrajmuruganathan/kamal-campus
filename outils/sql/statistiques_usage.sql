-- Kamal Campus : statistiques d'usage ANONYMES (novembre 2026) + maintien en activité du projet.
-- Relançable sans risque. Appliqué le 03/11/2026.
--
-- Ce qui est compté : des TOTAUX par jour (« 12 visites le 05/11 », « 30 ouvertures de l'écran Qcm »,
-- « 4 ouvertures du chapitre quatrieme-maths-racine-carree »). Aucune donnée personnelle : pas d'identifiant
-- d'élève, pas d'adresse IP, pas de cookie, pas d'appareil. Impossible de savoir QUI a fait quoi.
-- Lecture : Supabase → Table editor → stats_usage (ou la vue stats_resume_7j). L'appli ne peut rien lire.

-- 1. La table des compteurs (une ligne par jour × événement × détail).
create table if not exists public.stats_usage (
  jour       date not null default (now() at time zone 'Europe/Paris')::date,
  evenement  text not null check (evenement in ('visite', 'ecran', 'chapitre', 'qcm', 'exercice', 'dictee', 'epreuve')),
  detail     text not null default '' check (detail ~ '^[A-Za-z0-9_-]{0,80}$'),
  nb         integer not null default 0 check (nb >= 0),
  primary key (jour, evenement, detail)
);

comment on table public.stats_usage is
  'Compteurs d''usage anonymes par jour (aucune donnée personnelle). Écriture seulement via compter_usage().';

-- Personne ne lit ni n'écrit directement la table depuis l'appli : seulement via la fonction ci-dessous.
alter table public.stats_usage enable row level security;
revoke all on public.stats_usage from anon, authenticated;

-- 2. Ajouter 1 à un compteur. Valeurs contrôlées ; un compteur ne dépasse pas 1 000 000 par jour.
create or replace function public.compter_usage(p_evenement text, p_detail text default '')
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  d text := coalesce(p_detail, '');
begin
  if p_evenement not in ('visite', 'ecran', 'chapitre', 'qcm', 'exercice', 'dictee', 'epreuve') then
    return;
  end if;
  if d !~ '^[A-Za-z0-9_-]{0,80}$' then
    return;
  end if;
  insert into public.stats_usage as s (jour, evenement, detail, nb)
  values ((now() at time zone 'Europe/Paris')::date, p_evenement, d, 1)
  on conflict (jour, evenement, detail)
  do update set nb = least(s.nb + 1, 1000000);
end;
$$;

revoke execute on function public.compter_usage(text, text) from public;
grant execute on function public.compter_usage(text, text) to anon, authenticated;

-- 3. « Ping » appelé tous les 2 jours par GitHub (.github/workflows/supabase-actif.yml) :
--    un projet Supabase gratuit se met en pause après 7 jours sans activité.
create or replace function public.ping()
returns text
language sql
stable
security invoker
set search_path = public
as $$ select 'ok'::text $$;

revoke execute on function public.ping() from public;
grant execute on function public.ping() to anon, authenticated;

-- 4. Vue de lecture pour Kamal (Table editor) : les 7 derniers jours, du plus fréquent au moins fréquent.
create or replace view public.stats_resume_7j
with (security_invoker = true) as
  select evenement, detail, sum(nb)::integer as total
  from public.stats_usage
  where jour >= (now() at time zone 'Europe/Paris')::date - 6
  group by evenement, detail
  order by evenement, total desc;

revoke all on public.stats_resume_7j from anon, authenticated;
