-- Kamal Campus : demandes d'amis en temps réel.
-- À coller une seule fois dans Supabase → SQL Editor → Run.
-- Effet : la table « amities » envoie ses changements en direct à l'appli
-- (chaque élève ne reçoit que les lignes qu'il a le droit de voir, grâce aux règles RLS).
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'amities'
  ) then
    alter publication supabase_realtime add table public.amities;
  end if;
end $$;

-- Pour que les suppressions (« Retirer un ami ») transmettent aussi les deux pseudos :
alter table public.amities replica identity full;
