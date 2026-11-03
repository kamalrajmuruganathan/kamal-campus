-- Kamal Campus : durcissement des fonctions (novembre 2026).
-- Relançable sans risque. Appliqué le 03/11/2026.
--
-- Pourquoi : l'analyse de sécurité de Supabase signalait que 4 fonctions des défis entre amis pouvaient
-- être appelées par le rôle « anon » (personne connectée). Elles refusaient déjà l'appel (elles vérifient
-- auth.uid()), mais il est plus sûr de ne pas les exposer du tout aux visiteurs non connectés.
-- Les élèves connectés (rôle « authenticated ») gardent l'accès : rien ne change dans l'appli.

-- 1. Fonctions des défis entre amis : réservées aux comptes connectés.
revoke execute on function public.creer_defi_ami(text, uuid, jsonb, integer, integer, integer) from public, anon;
revoke execute on function public.repondre_defi_ami(uuid, integer, integer, integer) from public, anon;
revoke execute on function public.refuser_defi_ami(uuid) from public, anon;
revoke execute on function public.est_participant(uuid) from public, anon;

grant execute on function public.creer_defi_ami(text, uuid, jsonb, integer, integer, integer) to authenticated;
grant execute on function public.repondre_defi_ami(uuid, integer, integer, integer) to authenticated;
grant execute on function public.refuser_defi_ami(uuid) to authenticated;
grant execute on function public.est_participant(uuid) to authenticated;

-- 2. Déclencheur de mise à jour de la date : chemin de recherche fixé (bonne pratique Supabase).
alter function public.tg_defis_amis_touch() set search_path = public;
