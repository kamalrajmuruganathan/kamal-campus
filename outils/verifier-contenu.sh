#!/usr/bin/env bash
# Contrôle automatique de tout le contenu de Kamal Campus.
#
# Vérifie, pour chaque chapitre de contenu/<niveau>/<parcours>/<chapitre>/ :
#   - fiche.md   : présence, en-tête YAML complet, statut/relu_par cohérents
#   - qcm.json   : JSON valide, 10 questions, 4 choix, index de réponse dans les bornes,
#                  explications non vides, ids uniques de 1 à 10, cohérence avec la fiche
#
# Ces contrôles ne disent RIEN de l'exactitude mathématique : seule la relecture
# par un professeur de la matière le peut. Voir docs/relecture.md.
#
#   usage : outils/verifier-contenu.sh [chemin_racine_contenu]

set -uo pipefail

RACINE="${1:-contenu}"
erreurs=0
chapitres=0
questions=0

# Identifiants d'outils reconnus par l'écran Outils de l'application
# (app/src/ecrans/Outils.js). Un outil.json ne peut pointer que vers ceux-ci.
OUTILS_CONNUS='["second-degre","suite-arith","suite-geom","stats","derivee","masse-molaire","dilution","energie-cinetique","loi-ohm","geo-distance","geo-droite","geo-produit-scalaire","trigo-valeurs","trigo-equation","pgcd-euclide","congruences","decomposition-premiers","complexe-forme","complexe-operations","second-degre-complexe"]'

signaler() { printf '  ✗ %s\n' "$1"; erreurs=$((erreurs + 1)); }

command -v jq >/dev/null || { echo "jq est requis"; exit 2; }

for fiche in "$RACINE"/*/*/*/fiche.md; do
  [ -e "$fiche" ] || continue
  dossier=$(dirname "$fiche")
  qcm="$dossier/qcm.json"
  chapitres=$((chapitres + 1))

  # ---- en-tête YAML de la fiche ----
  entete=$(awk 'NR>1 && /^---$/{exit} NR>1{print}' "$fiche")
  for champ in id titre voie niveau parcours matiere programme statut relu_par; do
    grep -q "^$champ:" <<<"$entete" || signaler "$dossier/fiche.md : champ « $champ » absent de l'en-tête"
  done

  statut=$(grep -m1 '^statut:' <<<"$entete" | sed 's/^statut:[[:space:]]*//')
  relu=$(grep -m1 '^relu_par:' <<<"$entete" | sed 's/^relu_par:[[:space:]]*//')
  if [ "$statut" = "publie" ] && [ "$relu" = "null" ]; then
    signaler "$dossier/fiche.md : statut « publie » alors que relu_par est null — interdit"
  fi

  id_fiche=$(grep -m1 '^id:' <<<"$entete" | sed 's/^id:[[:space:]]*//' | tr -d '"')

  # ---- qcm.json ----
  if [ ! -f "$qcm" ]; then
    signaler "$dossier : qcm.json absent"
    continue
  fi
  if ! jq empty "$qcm" 2>/dev/null; then
    signaler "$dossier/qcm.json : JSON invalide"
    continue
  fi

  n=$(jq '.questions | length' "$qcm")
  { [ "$n" -ge 10 ] && [ "$n" -le 40 ]; } || signaler "$dossier/qcm.json : $n questions (attendu entre 10 et 40)"
  questions=$((questions + n))

  mauvais_choix=$(jq '[.questions[] | select((.choix|length) != 4)] | length' "$qcm")
  [ "$mauvais_choix" -eq 0 ] || signaler "$dossier/qcm.json : $mauvais_choix question(s) sans 4 choix"

  hors_bornes=$(jq '[.questions[] | select(.reponse >= (.choix|length) or .reponse < 0)] | length' "$qcm")
  [ "$hors_bornes" -eq 0 ] || signaler "$dossier/qcm.json : $hors_bornes réponse(s) hors bornes"

  sans_expl=$(jq '[.questions[] | select(.explication == null or .explication == "")] | length' "$qcm")
  [ "$sans_expl" -eq 0 ] || signaler "$dossier/qcm.json : $sans_expl explication(s) vide(s)"

  ids=$(jq -c '[.questions[].id] | sort' "$qcm")
  attendus="[$(seq -s, 1 "$n")]"
  [ "$ids" = "$attendus" ] || signaler "$dossier/qcm.json : ids des questions = $ids (attendu $attendus)"

  doublons=$(jq '[.questions[] | select((.choix | unique | length) != (.choix | length))] | length' "$qcm")
  [ "$doublons" -eq 0 ] || signaler "$dossier/qcm.json : $doublons question(s) avec des choix en double"

  lien=$(jq -r '.chapitre' "$qcm")
  [ "$lien" = "$id_fiche" ] || signaler "$dossier/qcm.json : champ chapitre « $lien » ≠ id de la fiche « $id_fiche »"

  statut_qcm=$(jq -r '.statut' "$qcm")
  relu_qcm=$(jq -r '.relu_par' "$qcm")
  if [ "$statut_qcm" = "publie" ] && [ "$relu_qcm" = "null" ]; then
    signaler "$dossier/qcm.json : statut « publie » alors que relu_par est null — interdit"
  fi

  # ---- exercice.json (optionnel) ----
  exos="$dossier/exercice.json"
  if [ -f "$exos" ]; then
    if ! jq empty "$exos" 2>/dev/null; then
      signaler "$dossier/exercice.json : JSON invalide"
    else
      ne=$(jq '.exercices | length' "$exos")
      [ "$ne" -ge 1 ] || signaler "$dossier/exercice.json : aucun exercice"
      sans_enonce=$(jq '[.exercices[] | select(.enonce == null or .enonce == "")] | length' "$exos")
      [ "$sans_enonce" -eq 0 ] || signaler "$dossier/exercice.json : $sans_enonce énoncé(s) vide(s)"
      sans_corrige=$(jq '[.exercices[] | select((.corrige == null) or ((.corrige | type) == "array" and (.corrige | length) == 0) or (.corrige == ""))] | length' "$exos")
      [ "$sans_corrige" -eq 0 ] || signaler "$dossier/exercice.json : $sans_corrige corrigé(s) vide(s)"
      lien_ex=$(jq -r '.chapitre // empty' "$exos")
      if [ -n "$lien_ex" ] && [ "$lien_ex" != "$id_fiche" ]; then
        signaler "$dossier/exercice.json : champ chapitre « $lien_ex » ≠ id de la fiche « $id_fiche »"
      fi
    fi
  fi

  # ---- outil.json (optionnel) ----
  outilf="$dossier/outil.json"
  if [ -f "$outilf" ]; then
    if ! jq empty "$outilf" 2>/dev/null; then
      signaler "$dossier/outil.json : JSON invalide"
    else
      no=$(jq '.outils | length' "$outilf" 2>/dev/null || echo 0)
      [ "$no" -ge 1 ] || signaler "$dossier/outil.json : liste d'outils vide"
      # les ids doivent exister dans l'écran Outils de l'application
      inconnus=$(jq -r --argjson ok "$OUTILS_CONNUS" '[.outils[] | select(. as $o | ($ok | index($o)) | not)] | join(", ")' "$outilf")
      [ -z "$inconnus" ] || signaler "$dossier/outil.json : outil(s) inconnu(s) de l'app : $inconnus"
    fi
  fi

  # ---- flashcards.json (optionnel) ----
  fc="$dossier/flashcards.json"
  if [ -f "$fc" ]; then
    if ! jq empty "$fc" 2>/dev/null; then
      signaler "$dossier/flashcards.json : JSON invalide"
    else
      ncc=$(jq '.cartes | length' "$fc" 2>/dev/null || echo 0)
      [ "$ncc" -ge 1 ] || signaler "$dossier/flashcards.json : aucune carte"
      vides=$(jq '[.cartes[] | select(.recto == null or .recto == "" or .verso == null or .verso == "")] | length' "$fc")
      [ "$vides" -eq 0 ] || signaler "$dossier/flashcards.json : $vides carte(s) avec recto ou verso vide"
      lien_fc=$(jq -r '.chapitre // empty' "$fc")
      if [ -n "$lien_fc" ] && [ "$lien_fc" != "$id_fiche" ]; then
        signaler "$dossier/flashcards.json : champ chapitre « $lien_fc » ≠ id de la fiche « $id_fiche »"
      fi
    fi
  fi
done

# ---- unicité des identifiants sur tout le corpus ----
dupes=$(grep -h '^id:' "$RACINE"/*/*/*/fiche.md 2>/dev/null | sed 's/^id:[[:space:]]*//' | sort | uniq -d)
if [ -n "$dupes" ]; then
  while IFS= read -r d; do signaler "identifiant de fiche en double : $d"; done <<<"$dupes"
fi

echo
echo "  $chapitres chapitres · $questions questions"
if [ "$erreurs" -eq 0 ]; then
  echo "  ✅ tous les contrôles automatiques passent"
  echo "  ⚠️  l'exactitude mathématique, elle, exige une relecture humaine"
  exit 0
fi
echo "  ❌ $erreurs erreur(s)"
exit 1
