#!/usr/bin/env bash
# Génère docs/relecture.html : tableau de bord de l'avancement de la relecture.
#   usage : outils/etat-relecture.sh
set -euo pipefail
cd "$(dirname "$0")/../app"
exec node scripts/etat-relecture.mjs
