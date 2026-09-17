#!/usr/bin/env bash
# Build du site pour Netlify (servi a la RACINE du domaine, pas sous /kamal-campus/).
set -e

# 1) baseUrl = /app pour Netlify, en restaurant app.json a la fin (ne casse pas GitHub Pages)
cp app/app.json /tmp/app.json.bak
trap 'cp /tmp/app.json.bak app/app.json 2>/dev/null || true' EXIT
node -e "const fs=require('fs');const p='app/app.json';const j=JSON.parse(fs.readFileSync(p,'utf8'));j.expo.experiments=Object.assign({},j.expo.experiments,{baseUrl:'/app'});fs.writeFileSync(p,JSON.stringify(j,null,2));console.log('baseUrl -> /app');"

# 2) Installer et exporter l'appli web
( cd app && npm ci && npx expo export --platform web )

# 3) Assembler : vitrine a la racine + appli dans /app
rm -rf site
mkdir -p site/app
cp web-vitrine/*.html site/
sed -i 's#/kamal-campus/#/#g' site/*.html
cp -r app/dist/* site/app/
echo "Build Netlify OK : $(find site -type f | wc -l) fichiers"
