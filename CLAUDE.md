# CLAUDE.md — Kamal Campus

Contexte de reprise (discussion Cowork du 03/10/2026). À lire en entier avant d'agir.

## 1. Le projet
- **Kamal Campus** : application de révision scolaire (CP → Terminale), Expo / React Native,
  publiée sur **GitHub Pages** depuis le 04/10/2026 : https://kamalrajmuruganathan.github.io/kamal-campus/
  (appli : …/kamal-campus/app/). L'ancien site Netlify (https://kamal-campus.netlify.app) n'est plus mis à jour.
- 956 chapitres, 21 matières. Dépôt `kamalrajmuruganathan/kamal-campus`.
- Branche de travail : **`upgrade-sdk57`**. Publier = fusionner `upgrade-sdk57` dans `main`
  (`bash scripts/publier.sh`, ou sur github.com : Compare `main...upgrade-sdk57` → Pull request → Merge).
  Le workflow `.github/workflows/pages.yml` construit et publie alors le site (≈ 3 min). Dépôt **public**.
- Backend : Supabase (Postgres + RLS + RPC `security definer` + Realtime).
- L'utilisateur (Kamal) code dans un Codespace (VS Code web) et souvent depuis son téléphone.
  Il n'est pas développeur de métier : explications simples, étapes numérotées, en français.

## 2. Règles absolues
1. **Exactitude** : ne jamais inventer une réponse ou une valeur fausse. Appli scolaire → le
   **français doit être correct** (accents, élisions, accords) et les valeurs physiquement réalistes.
2. **Crédits Netlify ÉPUISÉS (mail du 03/10/2026, 15:20)** : les déploiements de production sont **en pause
   jusqu'au 16/10/2026** (ou abonnement payant). Le site reste en ligne avec le dernier build réussi.
   → **Ne plus pousser sur `main`** d'ici là : tout s'accumule sur `upgrade-sdk57`, publication groupée après le 16/10.
   (Le compteur « ≈ 44 » était faux : un build coûte plus d'un crédit.) **1 commit publié = 1 build**.
   **Ne jamais pousser sur `main`, ne jamais lancer `publier.sh`, ne jamais créer de PR** sans l'accord
   explicite de Kamal (les deploy previews peuvent consommer des crédits).
3. **Sécurité** : ne jamais afficher ni committer la clé Supabase `sb_secret_…` (la clé publishable et
   l'URL sont publiques, protégées par RLS). Ne jamais demander de token GitHub dans le chat.
4. Ne modifier un fichier existant que si c'est demandé ; sinon créer à côté.

## 3. Pipeline des exercices
- `scripts/generer-exos.py` : contient `REGISTRE` + un hook `import gen_extra; REGISTRE.update(gen_extra.EXTRA)`.
  Il parcourt `contenu/<niveau>/{maths,physique-chimie}/<slug>/exercice.json` et **réécrit** les
  exercices des chapitres qui ont un générateur (fonction `choisir(niveau, matiere, slug)`).
- `scripts/gen_extra.py` : dict `EXTRA = {(niveau, slug): générateur → liste de 50 exos}`.
- Format d'un exo : `{id, difficulte (application|intermediaire|approfondissement|probleme), notion,
  enonce, corrige: [...], reponse}`. LaTeX entre `$…$`, virgule décimale `{,}`, milliers `\,`.
- Commandes : `python3 scripts/generer-exos.py` puis `cd app && npm run preparer && npm run qualite`.
- Le CI ne bloque que sur : `$` impair, double échappement `\\`, champ vide, nombre d'exos ≠ 10 ou 50.
  Les doublons d'énoncés ne sont que des avertissements (mais on vise 0).
- Fichiers générés à committer avec `-f` : `app/src/contenu-index.js`, `app/src/visionneuse.js`.

## 4. L'app (repères techniques)
- Navigation : `createNativeStackNavigator` dans `app/App.js` (`<Pile.Screen …>`).
- Thème : `useTheme()` → `t.couleur.{fond,texte,attenue,accent,accentTexte,surface,trait,succes,
  succesFond,erreur,erreurFond}`, `t.espace`, `t.police`, `t.rayon`.
- Rendu LaTeX : composant `VisionneuseFiche`.
- `app/src/contenu-index.js` exporte `CHAPITRES, chapitreParId, LIBELLES_NIVEAU, chapitresDe, niveaux`
  (chapitre : `{id, niveau, parcours, titre, matiere, qcm:{questions:[{enonce, choix, reponse, explication}]}}`).
- QCM générés : `aGenerateur` / `genererQuestions` (`app/lib/generateurs`), `melanger` (`app/lib/quizmix`).
- **Piège web** : sur react-native-web, `Alert.alert` est une fonction vide (rien ne s'affiche).

## 5. Déjà fait et EN LIGNE
- **Défis entre amis** (duel 1v1 asynchrone sur le QCM d'un chapitre ; les 10 questions jouées par le
  créateur sont figées et stockées pour que l'adversaire rejoue exactement les mêmes) :
  - SQL exécuté dans Supabase : table **`defis_amis`** (une table `defis` différente existait déjà),
    RLS, RPC `creer_defi_ami`, `repondre_defi_ami`, `refuser_defi_ami`, publication realtime.
  - `app/src/cloud/defis.js`, `app/src/defisContenu.js`, écran `app/src/ecrans/Defis.js`
    (onglets À jouer / Envoyés / Terminés), bouton dans `Defi.js`, route `Defis` dans `App.js`.
  - Vérifié en ligne (commit main `aa8ee479`).

## 6. Prêt mais PAS ENCORE publié : le paquet v7
Kamal a le zip `paquet_v7.zip` (dossier `paquet_v7/`). Contenu :
- `scripts/gen_extra.py` v7 (≈ 3 400 lignes) : **112 chapitres × 50 exos, 0 doublon, 0 anomalie**,
  validé avec `verifier_exos` du dépôt. Il contient notamment :
  - suppression des 556 doublons d'énoncés ; CP « le temps qui passe », solides, figures, symétrie,
    chimie 4e (NaCl n'est plus présenté comme une molécule), nucléaire, acide-base refaits ;
  - une couche d'accentuation automatique (≈ 3 400 mots corrigés, à/où contextuels, « de le » → « du ») ;
  - réécriture des chapitres aux valeurs irréalistes : Terminale premier principe, titrages, dipôle RC,
    Terminale techno probabilités conditionnelles, 5e masse volumique, et les exos de vitesse/son
    (5e, 4e, 2de, 1re, Terminale) remplacés par des situations réelles ;
  - unités kΩ/µF du dipôle RC passées en mode mathématique.
- `app/src/ecrans/Defis.js` : bouton « + Nouveau défi » remonté au-dessus du badge Netlify (web),
  confirmation « Refuser » et messages d'erreur via `window.confirm/alert` sur le web.
- `outils/patch_app.py` + `outils/polyfill_alert.js` : ajoute dans `App.js` un remplacement global de
  `Alert.alert` pour le web (toute l'appli). S'arrête si la ligne d'import attendue n'est pas trouvée.
- `outils/chapitres_sans_generateur.py` : liste les chapitres maths/PC sans générateur.
- `poser.sh` : écrit pour le Codespace (`cd /workspaces/kamal-campus`) **et il publie à la fin** →
  dans cette session, **ne pas l'exécuter tel quel**.

## 7. Ce qu'il faut faire maintenant (dans l'ordre)
1. Créer `CLAUDE.md` à partir de ce fichier.
2. Vérifier si le paquet v7 est déjà appliqué : `grep -c "def r_titrages" scripts/gen_extra.py`.
   - Si **oui** : passer à l'étape 4.
   - Si **non** : demander à Kamal de déposer `paquet_v7/` à la racine du dépôt (ou de le pousser sur
     `upgrade-sdk57`), puis appliquer **à la main** les étapes 2 à 4 de `poser.sh`
     (copie de `gen_extra.py` et `Defis.js`, `python3 paquet_v7/outils/patch_app.py`, ménage
     `patch.py` / `patch_kamal.py` / `scripts/__pycache__` + `.gitignore` avec `paquet_v7/`,
     génération, `npm run preparer`, `npm run qualite`). **Ne pas committer `paquet_v7/`.**
3. Commit unique sur `upgrade-sdk57` (message : « Exos v7 : 0 doublon, accents, valeurs réalistes ;
   alertes web ; Défis : bouton »), push sur `upgrade-sdk57` seulement, puis **demander à Kamal**
   s'il veut publier (`bash scripts/publier.sh` = 1 build).
4. Lancer `python3 paquet_v7/outils/chapitres_sans_generateur.py` (ou reproduire sa logique) : un
   chapitre était « ignoré » à la dernière génération. Lui écrire un générateur de 50 exos exacts.
5. Chercher les autres `Alert.alert` de l'appli (Amis, Discussion, Qcm, Duel, Defi…) et vérifier
   qu'ils marchent avec le correctif web.

## 8. Pistes suivantes (si Kamal le demande)
- Beaucoup de chapitres n'ont que 1 ou 2 notions (ex. 2de vecteurs, 1re dérivation, Terminale gaz parfait,
  électrolyse, lunette, etc.) → les enrichir avec des types de questions variés, valeurs réalistes.
- Petites coquilles restantes possibles : « Une urne a 4 jetons » (correct mais « contient » serait mieux),
  « g = 10 N/kg » au lycée (souvent 9,8).
- Rendu LaTeX à vérifier sur téléphone : 4e racine carrée, 2de vecteurs.

## 9. Tests à faire par Kamal après publication
- Défis : en envoyer un, y jouer avec un 2e compte, en refuser un (la fenêtre de confirmation doit s'ouvrir).
- Amis / Discussion : les confirmations doivent s'afficher sur le web.
- Exos : Terminale > Titrages, Dipôle RC, Premier principe ; 5e > Masse volumique ;
  4e > Propagation du signal ; Terminale > Cinétique chimique (texte entièrement accentué).


## 10. État au 03/10/2026 (session Claude Code)
- Étapes 1 à 5 du § 7 **faites et publiées** (main `3b8cbe6`, CI verte). Relecture faite après publication :
  Titrages, Dipôle RC, Premier principe, CP quadrillage, CM1 grands nombres justes ; 5e masse volumique
  corrigée sur `upgrade-sdk57` (« de l'aluminium », « échantillon », « a une masse de » au lieu de « pèse »).
- Paquet v7 appliqué ; générateur ajouté pour `cp/se-reperer-et-quadrillage` (fin de `gen_extra.py`,
  `r_quadrillage_cp`) → plus aucun chapitre maths/PC sans générateur.
- `generer-exos.py` : 3e atomes-ions-pH réécrit (élisions, 0 doublon, 6 questions de pH),
  élisions « d'euros », « d'obtenir »… corrigées.
- Accents corrigés dans Amis.js, Discussion.js, cloud/social.js (messages visibles sur le web).
- Les 8 écrans à `Alert.alert` utilisent 0 ou 2 boutons (dont un `cancel`) : compatibles avec le correctif web.
- **0 doublon d'énoncé sur tout le site** : les générateurs primaire de `generer-exos.py` passent par
  `_uniques()` (50 énoncés distincts, sinon erreur) ; fractions décalées par niveau (CE2, CM1, CM2, 6e
  n'ont plus les mêmes exos) ; arrondis scolaires (120 500 → 121 000) et espaces des milliers.
- Défis : bug corrigé sur `upgrade-sdk57` (non publié) — l'envoi du résultat se faisait dans un « updater »
  `setJeu`, que React peut exécuter deux fois → risque de défi créé en double. Désormais `jeuRef` + verrou `envoiRef`.
- Correctif `Alert.alert` web testé dans Chromium (message simple, confirmation OK / Annuler) : OK.
- Tests Défis / Amis avec 2 comptes : **en attente** (à faire par Kamal sur le site en ligne).
- **Exercices enrichis (03/10, non publiés)** : 162 chapitres maths/PC réécrits par lots dans
  `scripts/gen_enrichi_{a,b1,b2,c1,c2,d,e,f}.py` (chargés en dernier par `generer-exos.py`, ils remplacent
  les anciens générateurs). Chaque chapitre : 50 exos, ≥ 6 notions, ≤ 15 par notion, ≥ 3 difficultés.
  Avant d'intégrer un générateur : `python3 scripts/verifier_gen.py scripts/<fichier>.py` (0 problème exigé).
  Formules : `node outils/verifier-katex.cjs` (0 erreur sur ~119 000 formules).
- Points pédagogiques à faire valider par Kamal : voir le message de synthèse de la session du 03/10
  (notions retirées car hors fiche, constantes K données, prix du kWh 0,25 €, dérivée du quotient en 1re techno…).
- **Autres matières (04/10, non publiées)** : 97 chapitres à 10 exos rééquilibrés (≥ 4 notions, ≤ 4 par notion) ;
  vérificateur `python3 scripts/verifier_json.py <niveau/matiere/slug>`. Relecture approfondie des 8 100 exos
  maths/PC : 0 erreur de calcul, 146 corrections de fond. Philosophie : accents rétablis (fiches, QCM, exos,
  flashcards) + attributions corrigées (« conquis, construit, constaté » = Bourdieu et al. ; adage scolastique ≠ Hume).
  218 « \n » littéraux remplacés par de vrais retours à la ligne (29 fichiers).
- **GitHub Pages** : `.github/workflows/pages.yml` (publie à chaque push sur `main`, adresse
  https://kamalrajmuruganathan.github.io/kamal-campus/). Testé localement. **Bloquant** : le dépôt est privé →
  Pages exige un dépôt public (gratuit) ou GitHub Pro. Ensuite : Settings → Pages → Source « GitHub Actions »,
  et ajouter l'URL dans Supabase (Authentication → URL Configuration → Redirect URLs).
- **04/10/2026 : passage à GitHub Pages réussi.** Dépôt rendu public, Pages activé (Source : GitHub Actions),
  fusion PR #1 `upgrade-sdk57` → `main` (b402d83), CI verte, déploiement OK. Pas de limite de crédits.
  Claude ne peut pas pousser sur `main` lui-même (bloqué par la sécurité) : c'est Kamal qui fusionne.
- **Netlify → redirection** (préparé le 04/10, sur `upgrade-sdk57`) : `netlify.toml` redirige tout
  (`/*` → GitHub Pages, 301) avec un build de quelques secondes (`scripts/build-redirection-netlify.sh`).
  S'activera au premier build Netlify après le 16/10 (crédits revenus). Ensuite, Kamal peut couper les builds
  Netlify (Site configuration → Build & deploy → Stop builds) : la redirection reste en ligne.
