-- ============================================================================
-- Kamal Campus : ESPACE PARENT, version 2 (bilan de la semaine).
-- À coller une seule fois dans Supabase → SQL Editor → Run,
-- APRÈS outils/sql/espace_parent.sql (déjà exécuté).
-- Le script peut être relancé sans danger : il ne fait que remplacer la
-- fonction suivi_enfant par sa nouvelle version.
--
-- Ce qui change : en plus des champs de la version 1, le parent reçoit de quoi
-- afficher le « bilan de la semaine » :
--   - le carnet d'erreurs, SANS le texte des questions (chapitre, matière,
--     étape de révision, dates) et le nombre d'erreurs maîtrisées par jour ;
--   - les derniers « Examens sur mesure » (date, matière, note sur 20,
--     chapitres à revoir) ;
--   - les plans « Je révise mon contrôle » (date, matière, chapitres, tâches
--     cochées) ;
--   - « version » = 2 (l'appli sait ainsi que ces champs sont disponibles).
--
-- Sécurité : inchangée. La fonction ne renvoie rien si le compte qui appelle
-- n'est pas lié à cet enfant (table liens_parents) ; seuls les comptes connectés
-- peuvent l'appeler ; on ne renvoie que des champs choisis, jamais tout le profil
-- (ni réglages, ni favoris, ni messages, ni texte des questions ratées).
--
-- Tant que ce script n'est pas exécuté, l'appli fonctionne avec la version 1 :
-- les nouvelles rubriques du bilan sont simplement masquées.
-- ============================================================================

create or replace function public.suivi_enfant(p_enfant uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'version',             2,
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
    'dernierChapitre',     p.data->'dernierChapitre',

    -- Carnet d'erreurs : une ligne par erreur, sans l'énoncé de la question.
    'carnet', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'type',       e->'type',
        'chapitreId', e->'chapitreId',
        'titre',      e->'titre',
        'matiere',    e->'matiere',
        'etape',      e->'etape',
        'prochaine',  e->'prochaine',
        'ajoute',     e->'ajoute'
      )), '[]'::jsonb)
      from jsonb_array_elements(
        case when jsonb_typeof(p.data->'carnet') = 'array' then p.data->'carnet' else '[]'::jsonb end
      ) e
      where jsonb_typeof(e) = 'object'
    ),
    'carnetMaitrisees',      p.data->'carnetMaitrisees',
    'carnetMaitriseesJours', p.data->'carnetMaitriseesJours',

    -- Examens sur mesure (30 au plus dans le profil).
    'examens', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id',        x->'id',
        'date',      x->'date',
        'matiere',   x->'matiere',
        'niveau',    x->'niveau',
        'format',    x->'format',
        'note20',    x->'note20',
        'chapitres', x->'chapitres',
        'aRevoir',   x->'aRevoir'
      )), '[]'::jsonb)
      from jsonb_array_elements(
        case when jsonb_typeof(p.data->'examens') = 'array' then p.data->'examens' else '[]'::jsonb end
      ) x
      where jsonb_typeof(x) = 'object'
    ),

    -- Plans « Je révise mon contrôle ».
    'controles', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id',          c->'id',
        'niveau',      c->'niveau',
        'matiere',     c->'matiere',
        'matiereNom',  c->'matiereNom',
        'dateControle', c->'dateControle',
        'creeLe',      c->'creeLe',
        'chapitres',   c->'chapitres',
        'titres',      c->'titres',
        'jours',       c->'jours',
        'faites',      c->'faites'
      )), '[]'::jsonb)
      from jsonb_array_elements(
        case when jsonb_typeof(p.data->'controles') = 'array' then p.data->'controles' else '[]'::jsonb end
      ) c
      where jsonb_typeof(c) = 'object'
    )
  )
  from public.profils p
  where p.user_id = p_enfant
    and exists (
      select 1 from public.liens_parents l
      where l.parent = auth.uid() and l.enfant = p_enfant
    );
$$;

-- Droits : inchangés (seuls les comptes connectés peuvent appeler la fonction).
revoke all on function public.suivi_enfant(uuid) from public, anon;
grant execute on function public.suivi_enfant(uuid) to authenticated;
