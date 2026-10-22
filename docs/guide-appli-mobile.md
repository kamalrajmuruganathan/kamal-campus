# Kamal Campus sur Android et iPhone : le guide

Aujourd'hui, Kamal Campus n'est publiée que sur le web (GitHub Pages). L'appli est maintenant
**prête à être construite** pour Android et iPhone : la configuration est dans `app/app.json` et
`app/eas.json`. Les paquets de l'appli pour Android et pour iPhone ont été construits sans erreur dans le Codespace.

**Ce qui n'a pas pu être fait** : l'appli n'a jamais tourné sur un vrai téléphone. Il faut donc la
tester (voir la partie 5) avant de la proposer aux élèves.

Le service utilisé s'appelle **EAS** (Expo Application Services). Il construit l'appli sur ses
propres ordinateurs : pas besoin d'Android Studio, ni de Mac pour l'iPhone.

> 🔒 **Sécurité** : ne colle jamais un mot de passe, un jeton (« token ») ou une clé dans la
> discussion avec Claude. Tape-les seulement dans le terminal, quand la commande les demande.

---

## 1. Créer un compte Expo (une seule fois, gratuit)

1. Sur ton téléphone ou ton ordinateur, ouvre **https://expo.dev/signup**.
2. Choisis une adresse e-mail, un nom d'utilisateur et un mot de passe.
3. Confirme ton adresse avec l'e-mail reçu.

Le compte gratuit suffit pour les essais. Il donne droit à un nombre limité de constructions par
mois, et elles passent dans une file d'attente parfois lente (de quelques minutes à plus d'une heure).

## 2. Construire un APK Android de test (depuis le Codespace)

Un **APK** est un fichier d'installation Android. Celui-ci sert aux tests : il s'installe
directement, sans passer par le Play Store.

1. Ouvre ton Codespace, puis le terminal (menu ☰ → *Terminal* → *New Terminal*).
2. Va sur la bonne branche et dans le dossier de l'appli :
   ```bash
   git checkout upgrade-sdk57
   git pull
   cd app
   ```
3. Connecte-toi à Expo (la commande demande ton e-mail et ton mot de passe ; les caractères du mot
   de passe ne s'affichent pas, c'est normal) :
   ```bash
   npx eas-cli login
   ```
4. Lance la construction :
   ```bash
   npx eas-cli build -p android --profile preview
   ```
5. La première fois, EAS pose quelques questions. Réponds ainsi :
   - « Would you like to create a project for … ? » → **Y** (oui) ;
   - « Generate a new Android Keystore? » → **Y** (oui). Le *keystore* est la « signature » de
     l'appli ; EAS le garde pour toi en lieu sûr. Ne le supprime jamais : sans lui, on ne peut plus
     mettre à jour l'appli sur le Play Store.
6. Attends la fin (souvent 10 à 30 minutes ; tu peux fermer le terminal, la construction continue
   chez Expo). Le lien du résultat s'affiche à la fin, et il est aussi sur
   **https://expo.dev** → ton projet → *Builds*.
7. La première construction ajoute dans `app/app.json` deux lignes (`owner` et `projectId`). Demande
   à Claude de les enregistrer dans un commit (ce ne sont pas des secrets).

Avant de construire, EAS lance tout seul `npm run preparer` (script `eas-build-post-install`) :
les fiches, exercices et dictées sont donc recréés à partir de `contenu/` et `dictees/`.

## 3. Installer l'APK sur ton téléphone Android

1. Sur le téléphone, ouvre le lien de la construction (ou scanne le QR code affiché sur expo.dev).
2. Touche **Install** / **Télécharger** : le fichier `.apk` se télécharge.
3. Ouvre-le. Android demande d'autoriser l'installation d'« applis inconnues » pour ton navigateur :
   accepte (*Paramètres* → *Autoriser cette source*), puis reviens et touche **Installer**.
4. Si Google Play Protect affiche un avertissement, choisis *Installer quand même* : c'est normal
   pour une appli qui ne vient pas du Play Store.
5. Ouvre **Kamal Campus** depuis l'écran d'accueil.

Pour une nouvelle version : refais la partie 2 (étapes 4 et 6), puis installe le nouvel APK
par-dessus l'ancien (la progression est gardée).

## 4. Publier sur les magasins d'applications (plus tard)

### Google Play Store (Android)

1. Crée un **compte développeur Google Play** : https://play.google.com/console — **25 $ une seule
   fois**. Google vérifie ton identité (pièce d'identité), cela peut prendre quelques jours.
2. Construis la version « magasin » (un fichier `.aab`, pas un APK) :
   ```bash
   npx eas-cli build -p android --profile production
   ```
3. Dans la Play Console : *Créer une application*, remplis la fiche (description, captures
   d'écran, icône 512 × 512 : `app/public/icone-512.png`), la **politique de confidentialité** (une
   page web obligatoire, surtout pour une appli utilisée par des enfants), le questionnaire de
   classification et la rubrique « Public cible » (moins de 13 ans → règles « Familles » de Google).
4. Envoie le fichier `.aab` (à la main dans la Play Console, ou avec `npx eas-cli submit -p android`).
5. ⚠️ Pour un **compte personnel récent**, Google exige d'abord un **test fermé avec au moins
   12 testeurs pendant 14 jours** avant de pouvoir publier pour tout le monde.

### App Store (iPhone)

1. Il faut un compte **Apple Developer** : https://developer.apple.com/programs — **99 $ par an**.
2. **Pas besoin de Mac** : EAS construit l'appli iPhone sur ses Mac et s'occupe des certificats
   (il te demandera de te connecter à ton compte Apple dans le terminal) :
   ```bash
   npx eas-cli build -p ios --profile production
   npx eas-cli submit -p ios
   ```
3. Dans **App Store Connect** (https://appstoreconnect.apple.com) : fiche de l'appli, captures
   d'écran, politique de confidentialité, puis **TestFlight** pour l'essayer sur ton iPhone avant de
   l'envoyer à la vérification d'Apple (souvent 1 à 3 jours).
4. Sans compte Apple payant, on ne peut pas installer l'appli sur un iPhone (sauf avec l'appli
   *Expo Go* pendant le développement).

## 5. Ce qu'il reste à tester sur un vrai téléphone

Ces points ont été écrits pour le téléphone mais **jamais essayés sur un appareil** :

1. **Démarrage** : l'appli s'ouvre, l'écran de démarrage bleu puis l'accueil s'affichent ; le mode
   sombre suit le réglage du téléphone.
2. **Fiches** : ouvrir plusieurs fiches (maths avec formules, langues, schémas) ; vérifier que le
   texte, les accents et les formules s'affichent bien. Les fiches sont **dans l'appli**, elles
   doivent marcher **en mode avion**.
3. **Zoom sur les schémas** : toucher un schéma → plein écran, pincer pour zoomer, bouton
   « ✕ Fermer » et bouton « retour » d'Android.
4. **Exercices** : saisie d'une réponse, « Vérifier », grille d'idées, « Voir le corrigé ».
5. **QCM, examens, carnet d'erreurs, contrôle** : faire un QCM, rater des questions, les retrouver
   dans le carnet.
6. **Dictées et lecture à voix haute** : le bouton « Écouter » parle (voix française, anglaise…) ;
   vérifier que le son n'est pas coupé par le mode silencieux.
7. **Rappels (notifications)** : dans le Profil, activer le rappel quotidien → Android 13 et plus
   demande l'autorisation ; vérifier que la notification arrive à l'heure choisie, appli fermée.
8. **Connexion et amis** : créer un compte / se connecter, retrouver sa progression du web, ajouter
   un ami, envoyer et jouer un défi.
9. **Caméra** : scanner le QR code d'un défi (l'autorisation caméra doit être demandée).
10. **Partage** : partager une carte de résultats (image) et le bilan de l'espace parent.
11. **Confirmations** : « Refuser » un défi, « Retirer » un ami → la fenêtre de confirmation
    s'affiche.
12. **Taille et vitesse** : l'appli fait environ 90 Mo une fois installée (voir ci-dessous) ;
    vérifier qu'elle démarre en quelques secondes sur un téléphone d'entrée de gamme.

## 6. Bon à savoir (partie technique)

- **Taille** : les 959 fiches et leurs exercices sont dans l'appli (pour marcher sans internet).
  Le paquet JavaScript (Hermes) fait environ **63 Mo**, dont environ 40 Mo de fiches et d'exercices.
  Chaque fiche n'est lue qu'à l'ouverture du chapitre, donc la mémoire du téléphone n'est pas
  remplie au démarrage. Les textes sont stockés en ASCII (é → `é`) : sans cette astuce, Hermes
  les aurait stockés sur 2 octets par caractère (81 Mo au lieu de 63 Mo).
  Fichiers générés par `npm run preparer` : `app/src/contenu-lourd.native.js` et le dossier
  `app/donnees-natif/` (ignoré par git).
- **Profils de `app/eas.json`** : `preview` = APK de test ; `production` = fichier `.aab` pour le
  Play Store et version App Store, numéro de version augmenté automatiquement par EAS ;
  `development` = version de développement (demande d'installer `expo-dev-client` avant, inutile
  pour toi).
- **Numéro de version** : `version` dans `app/app.json` (actuellement 0.1.0) est le numéro montré aux
  utilisateurs ; change-le pour chaque nouvelle version publiée dans les magasins.
- **Autorisations demandées** : caméra (QR des défis) et notifications. Le micro et l'accès aux
  fichiers du téléphone sont volontairement bloqués.
- Le lien de confirmation de l'e-mail (inscription) s'ouvre dans le navigateur, sur le site web :
  il suffit ensuite de se connecter dans l'appli avec son e-mail et son mot de passe.
