# Kit web Kamal Campus

Tout ce qu'il faut pour mettre en ligne, sur **GitHub Pages** (gratuit), à la fois :
- le **site vitrine** (`index.html`) — à la racine,
- la **version web de l'appli** (export Expo) — dans le sous-dossier `/app`.

Résultat visé :
- `https://TONCOMPTE.github.io/NOM-DU-DEPOT/` → la vitrine
- `https://TONCOMPTE.github.io/NOM-DU-DEPOT/app/` → l'appli jouable
- le bouton « Lancer l'appli » de la vitrine pointe déjà vers `./app/`.

---

## Ce que contient ce kit

| Fichier | À quoi ça sert | Où le mettre |
|---|---|---|
| `web-vitrine/index.html` | Le site vitrine, fini et autonome | dossier `web-vitrine/` du dépôt |
| `web-vitrine/politique-confidentialite.html` | Politique de confidentialité (URL exigée par Google Play) | dossier `web-vitrine/` |
| `web-vitrine/parite-web-mobile.html` | Page de référence « parité web/mobile » | dossier `web-vitrine/` |
| `.nojekyll` | **Indispensable** : sans lui, GitHub Pages ignore les dossiers `_expo/` de l'appli → écran blanc | à la racine du site publié (le workflow le crée tout seul) |
| `VisionneuseFiche.web.js` | Version navigateur du lecteur de fiches (remplace la WebView, absente sur le web) | **à côté** de ton `VisionneuseFiche.js` |
| `web-head-katex.snippet.html` | Le CSS KaTeX à coller dans le `<head>` web pour afficher les formules | dans `web/index.html` (voir plus bas) |
| `.github/workflows/deploy-pages.yml` | Déploiement **automatique** à chaque `git push` | tel quel, dans le dépôt de l'appli |
| `scripts/assembler-site.sh` | Assemblage **manuel** du dossier `site/` (alternative au workflow) | `scripts/` du dépôt |

---

## Option 1 — Automatique (recommandé) : GitHub Actions

Une fois en place, chaque `git push` reconstruit et republie tout seul.

1. Dans ton dépôt d'appli, garde le dossier `web-vitrine/` fourni ici (il contient déjà `index.html`, `politique-confidentialite.html` et `parite-web-mobile.html`).
2. Copie `.github/workflows/deploy-pages.yml` dans le dépôt (garde le chemin exact).
3. Ouvre `deploy-pages.yml` et **adapte 2 lignes** :
   - la **branche** (`branches: [ main ]`) → ta branche de déploiement,
   - `working-directory: app` → le dossier qui contient ton `app.json` (mets `.` si Expo est à la racine).
4. Dans `app.json`, ajoute le **chemin de base** (l'appli est dans un sous-dossier) :
   ```jsonc
   "expo": {
     "experiments": { "baseUrl": "/NOM-DU-DEPOT/app" }
   }
   ```
5. Sur GitHub : **Settings → Pages → Source = "GitHub Actions"**.
6. Ajoute `VisionneuseFiche.web.js` (étape « code » ci-dessous), commit, push. Va voir l'onglet **Actions** : le déploiement tourne, puis ton site est en ligne. 🎉

## Option 2 — Manuel : le script

Si tu préfères tout faire à la main sans Actions :

```bash
# dans le dossier de l'appli
npx expo export --platform web        # produit app/dist/
# à la racine du dépôt
bash scripts/assembler-site.sh        # crée ./site (vitrine + app + .nojekyll)
```

Puis publie le dossier `site/` sur Pages (branche `gh-pages`, ou Settings → Pages → dossier).

---

## L'étape « code » à faire dans le Codespace (obligatoire une fois)

La version web ne marchera pas tant que ces 3 points ne sont pas faits :

1. **Le lecteur de fiches** — copie `VisionneuseFiche.web.js` **juste à côté** de ton `VisionneuseFiche.js`. React Native Web prendra automatiquement le `.web.js` sur le web et gardera la WebView sur mobile. Vérifie que le nom de la prop (`html` ou `source={{html}}`) correspond à ton appel — le composant accepte les deux.

2. **KaTeX** — génère le template web puis colle le CSS :
   ```bash
   npx expo customize web/index.html
   ```
   puis ouvre `web/index.html` et colle dans `<head>` le contenu de `web-head-katex.snippet.html`.

3. **Caméra / QR (Défi à distance)** — `expo-camera` ne scanne pas de QR sur le web. Entoure le bouton de scan d'un garde :
   ```js
   import { Platform } from 'react-native';
   // ...
   {Platform.OS !== 'web' && <BoutonScannerQR ... />}
   // (ou affiche « Disponible sur l'appli mobile » sur le web)
   ```

4. **AsyncStorage** — a un fallback web automatique (localStorage). Rien à faire ; teste juste qu'après un rechargement de page, ta progression est toujours là.

Dépendances web (si pas déjà installées) :
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

Test en local avant de pousser :
```bash
npx expo start --web
```

---

## Rappels utiles

- **Écran blanc après déploiement ?** → 9 fois sur 10 c'est le `baseUrl` mal réglé, ou le `.nojekyll` manquant. Les deux sont couverts par le workflow, mais vérifie le `baseUrl` dans `app.json`.
- **Domaine perso** (ex. `kamalcampus.fr`) → possible plus tard : un fichier `CNAME` dans `site/` + config DNS. Dis-le-moi, je t'accompagne.
- **La politique de confidentialité** (pour Google Play) sera à `.../NOM-DU-DEPOT/politique-confidentialite.html`.
