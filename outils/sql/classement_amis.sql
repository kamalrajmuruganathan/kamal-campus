-- Kamal Campus : classement de la semaine entre amis.
-- À coller une seule fois dans Supabase → SQL Editor → Run (on peut le relancer sans risque).
-- Effet : chaque élève publie ses XP de la semaine dans « profils_publics » ;
-- l'écran « Classement » compare alors l'élève et ses amis.

-- 1. Deux nouvelles colonnes (ajoutées seulement si elles n'existent pas encore).
alter table public.profils_publics add column if not exists xp_semaine integer not null default 0;
alter table public.profils_publics add column if not exists semaine text; -- lundi de la semaine, ex. « 2026-10-05 »

-- Garde-fous : pas de valeurs négatives, format de date respecté.
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'profils_publics_xp_semaine_positif') then
    alter table public.profils_publics
      add constraint profils_publics_xp_semaine_positif check (xp_semaine >= 0);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'profils_publics_semaine_format') then
    alter table public.profils_publics
      add constraint profils_publics_semaine_format check (semaine is null or semaine ~ '^\d{4}-\d{2}-\d{2}$');
  end if;
end $$;

-- 2. RLS : chacun ne peut modifier QUE sa propre ligne.
-- L'appli le fait déjà pour le pseudo (definirPseudo) ; on ne crée la règle que si
-- aucune règle de modification n'existe encore sur la table.
alter table public.profils_publics enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profils_publics' and cmd in ('UPDATE', 'ALL')
  ) then
    create policy profils_publics_maj_soi on public.profils_publics
      for update to authenticated
      using (auth.uid() = id)
      with check (auth.uid() = id);
  end if;
end $$;

-- 3. Vérification (facultatif) : affiche les règles de la table.
-- select policyname, cmd, qual, with_check from pg_policies where tablename = 'profils_publics';
