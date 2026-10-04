#!/usr/bin/env bash
# Netlify ne sert plus le site : il redirige vers GitHub Pages (voir netlify.toml).
# Build minimal (quelques secondes, sans npm) : une page de secours si la redirection
# serveur ne s'appliquait pas.
set -e
NOUVEAU="https://kamalrajmuruganathan.github.io/kamal-campus/"
rm -rf site && mkdir -p site
cat > site/index.html <<HTML
<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Kamal Campus a déménagé</title>
<meta http-equiv="refresh" content="0; url=${NOUVEAU}">
<link rel="canonical" href="${NOUVEAU}">
<style>body{font-family:system-ui,sans-serif;background:#f6f4ec;color:#16243a;display:grid;place-items:center;min-height:100vh;margin:0;padding:16px;text-align:center}a{color:#1f6feb}</style>
</head>
<body>
<p>Kamal Campus a déménagé.<br>Si la page ne s'ouvre pas toute seule : <a href="${NOUVEAU}">${NOUVEAU}</a></p>
</body>
</html>
HTML
echo "Page de redirection prête -> ${NOUVEAU}"
