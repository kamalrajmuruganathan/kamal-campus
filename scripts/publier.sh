#!/usr/bin/env bash
# Publie la version actuelle de upgrade-sdk57 sur le site (via main -> Netlify)
set -e

# Refuse de publier seulement s'il y a des modifs SUIVIES non enregistrees
# (les fichiers non suivis / non commites sont ignores)
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "⚠️  Tu as des modifications non enregistrees."
  echo "    Fais d'abord :  git add -A && git commit -m \"ton message\""
  exit 1
fi

echo "→ Envoi de upgrade-sdk57..."
git checkout upgrade-sdk57
git push origin upgrade-sdk57

echo "→ Fusion dans main + publication..."
git checkout main
git merge upgrade-sdk57 --no-edit
git push origin main
git checkout upgrade-sdk57

echo ""
echo "✅ Publie ! Netlify redeploie dans ~2-4 min :"
echo "   https://kamal-campus.netlify.app"
