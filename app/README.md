# Kamal Campus — application Expo

Application mobile (Android et iOS) construite avec **Expo / React Native**.

---

## Démarrer

Prérequis : **Node.js 18 ou plus**. Ni Android Studio ni configuration Xcode ne
sont nécessaires — les compilations passent par le cloud d'Expo (EAS Build).

```bash
cd app
npm install
npm start
```

Un QR code s'affiche : scanne-le avec l'application **Expo Go** sur ton téléphone.

`npm start` lance automatiquement `npm run preparer`, qui exécute deux scripts.

---

## Les deux scripts de préparation

### `scripts/generer-index.mjs`

Scanne `../contenu/` et écrit `src/contenu-index.js`.

**Pourquoi il existe** : le bundler React Native (Metro) résout les imports
*statiquement*. Il ne sait pas lire un fichier dont le chemin est calculé à
l'exécution — impossible donc de parcourir `contenu/` depuis l'application.
Ce script produit un module contenant un import explicite par fiche et par QCM.

➡️ **À relancer après tout ajout ou suppression de chapitre.**

### `scripts/preparer-katex.mjs`

Fabrique `src/visionneuse.js` : un document HTML autonome embarquant KaTeX.

**Pourquoi cette approche** : les fiches sont denses en LaTeX. Aucune
bibliothèque React Native native ne le rend de façon fiable ; KaTeX, lui, est
éprouvé. On l'embarque donc dans une `WebView`.

Le CSS, le JavaScript **et les polices en base64** sont inlinés : aucune requête
réseau, l'application fonctionne **entièrement hors ligne** — un lycéen révise
dans le métro.

➡️ **À relancer après `npm install`.**

---

## Architecture

```
app/
├── index.js                 point d'entrée Expo
├── App.js                   navigation (pile)
├── lib/                     ⚙️ 9 modules de calcul + 234 tests
├── scripts/                 génération de l'index et de la visionneuse
└── src/
    ├── theme.js             couleurs, espacements (clair et sombre)
    ├── contenu-index.js     GÉNÉRÉ — ne pas modifier
    ├── visionneuse.js       GÉNÉRÉ — ne pas modifier
    ├── composants/
    │   ├── VisionneuseFiche.js   Markdown + LaTeX dans une WebView
    │   └── communs.js            carte, étiquette, bandeau
    └── ecrans/
        ├── Accueil.js       niveau → parcours
        ├── Chapitres.js     liste d'un parcours
        ├── Chapitre.js      fiche de cours
        ├── Qcm.js           lecteur de QCM
        └── Outils.js        outils de calcul
```

### Rendu du Markdown

Le Markdown est converti **côté React Native** (markdown-it), les formules sont
rendues **côté WebView** (KaTeX).

Deux traitements sont appliqués avant affichage :

1. l'en-tête YAML est retiré — il ne concerne que l'outillage ;
2. **les commentaires HTML sont retirés** — c'est là que vivent les *notes de
   production*, qui ne doivent jamais être vues par un élève.

markdown-it est de plus configuré avec `html: false`, ce qui neutralise
définitivement tout HTML brut présent dans une fiche.

---

## Choix de conception

**On ne demande jamais « ta filière ».** Les filières S/ES/L n'existent plus.
L'élève choisit son **niveau** puis son **parcours** — en Première générale, deux
programmes de maths coexistent selon qu'il suit la spécialité ou les maths
intégrées à l'enseignement scientifique.

**La correction du QCM s'affiche immédiatement**, avant de passer à la question
suivante. Un QCM dont on découvre le score à la fin n'apprend rien : c'est
l'explication du piège qui fait progresser. L'écran final liste les *notions* à
revoir, qui correspondent aux sections de la fiche.

**Les fiches non relues sont signalées** par un bandeau, dans la liste des
chapitres comme en tête de fiche. Tant que `relu_par` vaut `null`, l'élève est
prévenu.

**Les outils affichent le raisonnement, pas seulement le résultat.** L'écran
`Outils` ne calcule rien lui-même : il appelle les modules de `lib/`, qui sont
testés, et affiche leur tableau d'étapes. C'est ce qui les distingue d'une
calculatrice.

---

## ⚠️ Ce qui n'a jamais été exécuté

Ce code a été écrit **sans que Node.js soit disponible** sur la machine de
développement. Par conséquent :

- `npm install` n'a jamais tourné ;
- les 234 tests de `lib/` sont écrits mais **jamais exécutés** ;
- l'application n'a **jamais été lancée ni affichée** sur un appareil.

La logique des modules de calcul a été vérifiée par **portage Perl indépendant**,
et les valeurs recoupent les réponses des QCM. Mais l'assemblage React Native
lui-même est **non vérifié**.

### À contrôler au premier lancement

| Point | Pourquoi c'est risqué |
|---|---|
| Versions des dépendances | figées à la main ; `npx expo install --fix` les alignera |
| `transformer-md.cjs` | l'API des transformers Metro change entre versions d'Expo |
| `watchFolders` vers `../contenu` | Metro doit accepter de sortir de `app/` |
| Hauteur des WebView | mesurée par message ; à surveiller sur les fiches longues |
| Polices KaTeX | vérifier que les formules ne s'affichent pas en caractères de secours |

Commence par `npm install`, puis `npm run preparer` seul : les deux scripts
affichent un compte rendu (30 chapitres, 300 questions) qui confirme que
l'indexation fonctionne avant même de lancer l'interface.
