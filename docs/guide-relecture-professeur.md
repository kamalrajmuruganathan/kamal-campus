# Guide du professeur relecteur — Kamal Campus

Merci d'accepter de relire ! Ce guide explique, pas à pas, comment relire un chapitre de
l'appli Kamal Campus, comment indiquer qu'il est relu, et comment lire les erreurs signalées
par les élèves.

> **Règle d'or : seul un professeur peut déclarer un chapitre « relu ».**
> Aujourd'hui, les 959 chapitres sont en `statut: brouillon` : l'appli affiche donc
> « ⚠️ Fiche non relue par un professeur » en haut de chaque fiche, des exercices et des cartes.
> Ni Kamal ni un outil automatique ne doivent lever ce statut à votre place.

---

## 1. Où se trouve un chapitre ?

Chaque chapitre est un dossier du dépôt :

```
contenu/<niveau>/<matière>/<chapitre>/
├── fiche.md          ← la fiche de cours (texte + formules entre $…$)
├── qcm.json          ← les 20 questions de QCM
├── flashcards.json   ← les 12 cartes de révision
├── exercice.json     ← les 50 exercices (énoncé, corrigé, réponse)
└── attendus.json     ← les réponses courtes acceptées par l'appli (correction automatique)
```

Exemple : `contenu/quatrieme/maths/calcul-litteral/fiche.md`.

Le plus simple pour relire est d'ouvrir **l'appli** (https://kamalrajmuruganathan.github.io/kamal-campus/app/)
à côté du fichier : on voit le rendu réel (formules, schémas), et on corrige dans le fichier.

Les programmes officiels utilisés sont dans `docs/programme-*.txt`. **Le programme officiel fait
foi**, puis la fiche du chapitre.

À la fin de chaque `fiche.md`, un bloc `<!-- NOTES DE PRODUCTION -->` (invisible dans l'appli),
quand il existe, donne la source utilisée et les points incertains : commencez par lui.

---

## 2. Liste de vérification

Cochez mentalement chaque point. Un seul « non » suffit pour ne pas marquer le chapitre relu.

### La fiche (`fiche.md`)
- [ ] **Exactitude** : définitions, propriétés, formules, dates, noms, valeurs numériques, unités.
      Les valeurs sont réalistes (vitesses, masses, prix, températures…).
- [ ] **Programme** : rien d'important ne manque pour ce niveau ; rien n'est hors programme
      (ou alors c'est clairement signalé « pour aller plus loin »). Vocabulaire et notations
      du programme officiel.
- [ ] **Français** : orthographe, accents (y compris sur les majuscules : « À », « É »),
      accords, élisions (« d'eau », pas « de eau »), ponctuation, phrases claires pour l'âge des élèves.
- [ ] **Exemples** : chaque exemple est juste, utile et adapté au niveau ; dans les langues
      vivantes, les phrases sont naturelles et correctes.
- [ ] **Schémas** : la légende correspond au dessin, les grandeurs sont justes.
      ⚠️ Ne modifiez pas à la main ce qui se trouve entre `<!-- schema:… -->` et `<!-- /schema -->` :
      signalez le problème à Kamal (ces blocs sont recréés par un outil).

### Le QCM (`qcm.json`)
- [ ] Chaque question a **une seule** bonne réponse, et c'est bien celle indiquée
      (`"reponse"` = numéro du bon choix, **en comptant à partir de 0** : 0 = premier choix).
- [ ] Les mauvaises réponses sont plausibles mais clairement fausses.
- [ ] L'explication est juste et ne dit pas « choix A » (l'appli mélange l'ordre des choix).
- [ ] Il reste **exactement 20 questions** (le contrôle qualité l'exige).

### Les cartes (`flashcards.json`)
- [ ] Recto et verso justes et cohérents avec la fiche ; **exactement 12 cartes**.

### Les exercices (`exercice.json`)
- [ ] L'énoncé est clair et complet (toutes les données nécessaires sont là).
- [ ] Le corrigé est juste, étape par étape, et mène bien à la réponse indiquée.
- [ ] Les valeurs sont réalistes ; les unités sont présentes.
- ⚠️ En **maths** et **physique-chimie**, la plupart des `exercice.json` sont **fabriqués par
  un programme** (`scripts/`) : une correction faite à la main serait effacée à la génération
  suivante. Dans ces matières, notez l'erreur (numéro de l'exercice + correction) et
  transmettez-la à Kamal plutôt que de modifier le fichier.
- Si vous changez la `reponse` d'un exercice, la ligne correspondante de `attendus.json`
  devient inutile : prévenez Kamal pour qu'il la mette à jour.

---

## 3. Marquer le chapitre comme relu

Quand **tout** le chapitre (fiche, QCM, cartes, exercices) vous paraît juste, ouvrez `fiche.md`.
En haut se trouve l'en-tête, entre deux lignes `---` :

```yaml
statut: brouillon
relu_par: null
```

Remplacez ces deux lignes par :

```yaml
statut: relu
relu_par: "Mme Claire Martin, professeure de mathématiques"
relu_le: 2026-11-02
```

- `statut: relu` : le chapitre est validé.
- `relu_par` : **votre nom et votre matière**, entre guillemets (obligatoire : sans nom,
  l'appli continue d'afficher l'avertissement).
- `relu_le` : la date de votre relecture, sous la forme **année-mois-jour** (`2026-11-02`).

Après la prochaine publication de l'appli, l'avertissement disparaît et l'élève voit à la place :

> ✅ Relu par Mme Claire Martin, professeure de mathématiques, le 2 novembre 2026.

(cette mention apparaît en haut de la fiche et des exercices ; l'avertissement disparaît aussi
des cartes de révision et de la liste des chapitres).

Si vous avez relu seulement une partie, **laissez `statut: brouillon`** et indiquez à Kamal ce
qui reste à revoir.

Pour suivre l'avancement de la relecture : `cd app && npm run relecture` crée la page
`docs/relecture.html` (tableau de tous les chapitres, relus ou non).

---

## 4. Lire les erreurs signalées par les élèves

Dans l'appli, l'élève peut appuyer sur **« ⚠️ Signaler une erreur »** :
- en bas de chaque fiche ;
- sous chaque question de QCM, après avoir répondu ;
- sous chaque exercice, après avoir vu le corrigé.

Il choisit un type (erreur de contenu, faute de français, autre) et écrit un message
(500 caractères au plus). Les élèves ne peuvent **pas** lire les signalements : seuls Kamal
et les personnes qui ont accès au projet Supabase le peuvent.

> Prérequis (une seule fois, par Kamal) : exécuter `outils/sql/signalements.sql` dans
> Supabase → SQL Editor → Run. Avant cela, l'appli répond à l'élève
> « Merci ! Le signalement n'a pas pu être envoyé : réessaie plus tard. »

### Consulter les signalements
1. Ouvrez https://supabase.com/dashboard et le projet de Kamal Campus.
2. Menu de gauche : **Table editor** → table **`signalements`**.
3. Chaque ligne contient :

| Colonne | Contenu |
|---|---|
| `cree_le` | date et heure de l'envoi |
| `chapitre_id` | identifiant du chapitre (le même que `id:` en haut de `fiche.md`) |
| `niveau` | classe (ex. `quatrieme`) |
| `type` | `contenu`, `francais` ou `autre` |
| `cible` | `fiche`, `qcm:<numéro>` (champ `id` de la question dans `qcm.json`), `qcm:gen-<n>` (question fabriquée par l'appli : se fier à l'extrait), ou `exo:<numéro>` (champ `id` dans `exercice.json`) |
| `message` | le texte de l'élève |
| `extrait` | le début de l'énoncé de la question ou de l'exercice concerné |
| `user_id` | identifiant du compte de l'élève (vide s'il n'était pas connecté) |
| `traite` / `note` | pour votre suivi : cochez `traite` et écrivez une `note` une fois l'erreur corrigée |

4. Pour trier : cliquez sur l'en-tête `cree_le` ; pour filtrer : bouton **Filter**
   (par exemple `traite` = `false`, ou `chapitre_id` = `4e-math-calcul-litteral`).
5. La vue **`signalements_par_chapitre`** donne, pour chaque chapitre, le nombre de
   signalements (dont non traités) : pratique pour savoir quels chapitres relire en premier.
6. Pour garder une copie ou l'envoyer à un collègue : bouton **Export → CSV**.

Les messages viennent d'élèves : ils peuvent se tromper. Vérifiez toujours avec le programme
avant de corriger.

Si vous n'avez pas accès à Supabase, demandez à Kamal de vous envoyer l'export CSV.

---

## 5. En résumé

1. Ouvrir le chapitre dans l'appli et le dossier `contenu/<niveau>/<matière>/<chapitre>/`.
2. Relire avec la liste du § 2 ; corriger (ou noter pour Kamal en maths / physique-chimie).
3. Regarder les signalements de ce chapitre dans Supabase.
4. Quand tout est juste : `statut: relu`, `relu_par: "…"`, `relu_le: AAAA-MM-JJ`.
5. Prévenir Kamal, qui publie la nouvelle version.
