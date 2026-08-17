#!/usr/bin/env bash
# Génère docs/relecture-notes.md : le dossier de relecture COMPLET, assemblé
# automatiquement depuis les blocs de notes de production de toutes les fiches.
#
# Chaque fiche porte, en commentaire HTML final, ses notes de production :
# source exacte, correspondance au programme, et points à trancher. Ce script
# les extrait toutes et les organise par niveau puis par parcours, pour donner
# au professeur relecteur un document de travail unique.
#
# À relancer après tout ajout de chapitre :  outils/generer-dossier-relecture.sh

set -euo pipefail
cd "$(dirname "$0")/.."

SORTIE="docs/relecture-notes.md"

{
  echo "# Dossier de relecture — notes de production de toutes les fiches"
  echo
  echo "> Document GÉNÉRÉ par \`outils/generer-dossier-relecture.sh\` — ne pas éditer à la main."
  echo "> Régénéré le $(date +%F). Il assemble les blocs de notes de production"
  echo "> (invisibles dans l'application) de chaque fiche du corpus."
  echo ">"
  echo "> **Mode d'emploi pour le relecteur** : chaque entrée liste la source"
  echo "> officielle utilisée et les points que le rédacteur lui-même signale"
  echo "> comme à confronter au programme. La relecture reste entière — ces notes"
  echo "> disent où regarder en premier, pas où s'arrêter."
  echo
  total=0

  for niveau_dir in contenu/*/; do
    niveau=$(basename "$niveau_dir")
    imprime_niveau=0
    for parcours_dir in "$niveau_dir"*/; do
      [ -d "$parcours_dir" ] || continue
      parcours=$(basename "$parcours_dir")
      imprime_parcours=0
      for fiche in "$parcours_dir"*/fiche.md; do
        [ -f "$fiche" ] || continue
        chapitre=$(basename "$(dirname "$fiche")")
        # extrait le PREMIER commentaire HTML (le bloc de notes) — de <!-- à -->
        notes=$(awk '/<!--/{flag=1; sub(/.*<!--/, ""); } flag{print} /-->/{if(flag){exit}}' "$fiche" | sed 's/-->.*//')
        [ -n "$(echo "$notes" | tr -d '[:space:]')" ] || continue
        if [ "$imprime_niveau" -eq 0 ]; then
          echo "---"
          echo
          echo "# ${niveau}"
          echo
          imprime_niveau=1
        fi
        if [ "$imprime_parcours" -eq 0 ]; then
          echo "## ${niveau} / ${parcours}"
          echo
          imprime_parcours=1
        fi
        statut=$(awk 'NR>1 && /^---$/{exit} /^statut:/{print $2}' "$fiche")
        relu=$(awk 'NR>1 && /^---$/{exit} /^relu_par:/{sub(/^relu_par:[[:space:]]*/, ""); print}' "$fiche")
        echo "### ${chapitre}  \`${statut:-?}\` (relu par : ${relu:-null})"
        echo
        echo '```'
        echo "$notes" | sed 's/[[:space:]]*$//'
        echo '```'
        echo
        total=$((total + 1))
      done
    done
  done

  echo "---"
  echo
  echo "_${total} fiches assemblées._"
} > "$SORTIE"

echo "✓ $(grep -c '^### ' "$SORTIE") blocs de notes → $SORTIE ($(wc -l < "$SORTIE") lignes)"
