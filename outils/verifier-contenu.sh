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
  [ "$n" -eq 10 ] || signaler "$dossier/qcm.json : $n questions au lieu de 10"
  questions=$((questions + n))

  mauvais_choix=$(jq '[.questions[] | select((.choix|length) != 4)] | length' "$qcm")
  [ "$mauvais_choix" -eq 0 ] || signaler "$dossier/qcm.json : $mauvais_choix question(s) sans 4 choix"

  hors_bornes=$(jq '[.questions[] | select(.reponse >= (.choix|length) or .reponse < 0)] | length' "$qcm")
  [ "$hors_bornes" -eq 0 ] || signaler "$dossier/qcm.json : $hors_bornes réponse(s) hors bornes"

  sans_expl=$(jq '[.questions[] | select(.explication == null or .explication == "")] | length' "$qcm")
  [ "$sans_expl" -eq 0 ] || signaler "$dossier/qcm.json : $sans_expl explication(s) vide(s)"

  ids=$(jq -c '[.questions[].id] | sort' "$qcm")
  [ "$ids" = "[1,2,3,4,5,6,7,8,9,10]" ] || signaler "$dossier/qcm.json : ids des questions = $ids"

  doublons=$(jq '[.questions[] | select((.choix | unique | length) != (.choix | length))] | length' "$qcm")
  [ "$doublons" -eq 0 ] || signaler "$dossier/qcm.json : $doublons question(s) avec des choix en double"

  lien=$(jq -r '.chapitre' "$qcm")
  [ "$lien" = "$id_fiche" ] || signaler "$dossier/qcm.json : champ chapitre « $lien » ≠ id de la fiche « $id_fiche »"

  statut_qcm=$(jq -r '.statut' "$qcm")
  relu_qcm=$(jq -r '.relu_par' "$qcm")
  if [ "$statut_qcm" = "publie" ] && [ "$relu_qcm" = "null" ]; then
    signaler "$dossier/qcm.json : statut « publie » alors que relu_par est null — interdit"
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
