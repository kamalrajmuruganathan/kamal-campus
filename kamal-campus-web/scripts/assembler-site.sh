#!/usr/bin/env bash
# Assemble le dossier "site/" à publier : vitrine à la racine + appli web dans /app.
# À lancer depuis la RACINE du dépôt, après avoir exporté l'appli.
#
#   bash scripts/assembler-site.sh
#
# Pré-requis : avoir déjà fait, dans le dossier de l'appli :
#   npx expo export --platform web        (produit app/dist/)
#
# Adapte APP_DIR si ton dossier Expo n'est pas "app".
set -e

APP_DIR="app"          # ← dossier contenant app.json (mets "." si Expo est à la racine)
VITRINE_DIR="web-vitrine"

echo "→ Nettoyage de site/"
rm -rf site
mkdir -p site/app

echo "→ Copie de la vitrine (toutes les pages html)"
cp "$VITRINE_DIR"/*.html site/

echo "→ Copie de l'appli web (depuis $APP_DIR/dist)"
if [ ! -d "$APP_DIR/dist" ]; then
  echo "✗ $APP_DIR/dist introuvable. Lance d'abord : (cd $APP_DIR && npx expo export --platform web)"
  exit 1
fi
cp -r "$APP_DIR"/dist/* site/app/

echo "→ Marqueurs .nojekyll (indispensable pour les dossiers _expo/)"
touch site/.nojekyll site/app/.nojekyll

echo "✓ Terminé. Dossier prêt : ./site"
echo "  Publie ce dossier sur GitHub Pages (ou laisse le workflow GitHub Actions le faire)."
