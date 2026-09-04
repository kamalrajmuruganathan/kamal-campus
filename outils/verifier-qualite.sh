#!/usr/bin/env bash
# Contrôle qualité (rendu + cohérence) de tout le contenu Kamal Campus.
# Complète verifier-contenu.sh. Voir app/scripts/verifier-qualite.mjs.
#   usage : outils/verifier-qualite.sh
set -euo pipefail
cd "$(dirname "$0")/../app"
exec node scripts/verifier-qualite.mjs
