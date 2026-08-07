# Kamal Campus

> Application mobile de révision — **Maths & Physique-Chimie**, lycée.
> Fiches de cours · QCM d'assimilation · Outils de calcul
> Fonction IA interne : **« Ask Kamal »**

Document de cadrage — 2026-08-07.

---

## 1. Le point le plus important : ton modèle de données

Ton brief parlait de « filière, catégorisée par classe ». **Les filières S / ES / L n'existent
plus** depuis la réforme de 2019. Construire l'arborescence dessus rendrait l'appli inutilisable.

La structure réelle du lycée en 2026 :

```
VOIE
├── Générale
│   ├── Seconde générale et technologique   ← tronc commun, PAS de filière
│   ├── Première générale
│   │   ├── Maths — spécialité              ← programme A
│   │   ├── Maths — enseignement scientifique ← programme B (différent !)
│   │   └── Physique-Chimie — spécialité
│   └── Terminale générale
│       ├── Maths — spécialité
│       ├── Maths complémentaires
│       ├── Maths expertes
│       └── Physique-Chimie — spécialité
└── Technologique
    ├── STI2D, STL, STMG, ST2S, STD2A, STHR, S2TMD
    └── programmes de maths et physique-chimie propres à chaque série
```

**Conséquence de conception** : un élève de Première ne choisit pas « une filière ». Il déclare
sa **voie**, son **niveau**, et son **parcours maths** (spécialité ou enseignement scientifique).
C'est ce triplet qui détermine le contenu affiché.

Le répertoire `contenu/` est déjà organisé selon ce modèle.

---

## 2. Le calendrier des programmes — l'opportunité et le piège

Les nouveaux programmes ont été publiés au **BO du 2 avril 2026**.

| Niveau | Nouveau programme applicable |
|---|---|
| **Seconde** | **rentrée 2026-2027** — dans un mois |
| **Première** (générale et techno) | **rentrée 2026-2027** — dans un mois |
| Terminale | rentrée 2027-2028 |

S'ajoute une **nouvelle épreuve anticipée de mathématiques en Première**, pour tous les élèves
quelle que soit leur voie, dès la session 2026 du baccalauréat. Trois sujets distincts selon
le parcours de l'élève.

**L'opportunité** : tous les manuels et applis de révision existants deviennent périmés en
septembre. Construire directement sur les nouveaux programmes met Kamal Campus à jour dès le
premier jour, pendant que les autres rattrapent.

**Le piège** : écrire du contenu Terminale maintenant, c'est produire quelque chose qui expire
en septembre 2027.

➡️ **Décision : v1 = Seconde + Première uniquement.** C'est là que se croisent le nouveau
programme et la nouvelle épreuve.

---

## 3. Périmètre de la v1

### Inclus

- **Seconde** : Maths, Physique-Chimie
- **Première générale** : Maths spécialité, Maths enseignement scientifique, Physique-Chimie
- Fiches de cours structurées : définition, propriété, théorème, formule, exemple, piège classique
- QCM par chapitre, avec correction expliquée
- Outils de calcul (voir §5)
- Fonctionnement **hors ligne** — un lycéen révise dans le métro, au CDI, en cours

### Exclu de la v1

- Terminale (programme change en 2027)
- Voie technologique (7 séries × 2 matières = volume disproportionné pour une v1)
- Comptes utilisateurs, synchronisation, classement, social
- Paiement

### Volume de contenu à produire

Estimation : **~45 à 55 chapitres**, chacun avec une fiche et un QCM d'une dizaine de questions.
Soit de l'ordre de **500 à 600 questions** au total.

⚠️ **C'est ici que se trouve 80 % du travail réel du projet.** Le code de l'application est
la partie facile et prévisible. Le contenu est long, exigeant, et ne se délègue pas sans
contrôle — voir §6.

---

## 4. Architecture technique proposée

**Expo (React Native)** — une seule base de code pour Android et iOS.

Raison principale : les compilations se font dans le cloud d'Expo (EAS Build), donc pas besoin
d'installer le SDK Android ni de configurer Xcode en local. Test immédiat sur ton téléphone en
scannant un QR code.

**Convention de nommage** — deux noms, à ne pas confondre :

| | Valeur | Où |
|---|---|---|
| Nom technique | `kamal-campus` | répertoire, paquet npm, bundle id, dépôt Git |
| Nom public | **Kamal Campus** | écran d'accueil, stores, communication |

⚠️ **Jamais d'espace ni d'accent dans les chemins.** Gradle (Android) et CocoaPods (iOS)
échouent régulièrement dessus, avec des messages d'erreur peu explicites. Le sous-répertoire
`contenu/` suit la même règle : minuscules, tirets, sans accents.

Identifiants d'application suggérés : `com.kamalcampus.app` (iOS et Android).

```
kamal-campus/
├── app/         code de l'application (Expo / React Native)
├── contenu/     fiches et QCM, en Markdown + JSON — versionnés, relisibles
├── docs/        cadrage, programmes officiels, décisions
└── design/      logo, icône, palette
```

**Le contenu vit hors du code**, en fichiers Markdown et JSON. Trois avantages : tu peux le
relire et le corriger sans toucher au code, il se met à jour sans repasser par la validation
des stores, et il reste réutilisable si tu fais un site web plus tard.

**Rendu des formules** : KaTeX ou MathJax. Non négociable — des maths mal rendues tuent la
crédibilité immédiatement.

---

## 5. Les outils de calcul

Prudence sur ce bloc. Un outil qui donne un résultat **faux** est bien pire que pas d'outil :
il détruit la confiance et, pour un élève, il fait perdre des points.

**Approche déterministe recommandée en v1** — calcul symbolique fiable, pas de génération libre :
équations du second degré avec discriminant, dérivées, primitives usuelles, systèmes linéaires,
conversions d'unités, calcul vectoriel.

**« Ask Kamal » (IA)** : à réserver à l'explication en langage naturel — reformuler une notion,
expliquer une étape de correction — **jamais au calcul lui-même**. Un modèle de langage se
trompe sur l'arithmétique ; une bibliothèque de calcul formel, non.

---

## 6. Les risques réels du projet

**Le contenu, et rien d'autre.** 50 chapitres de fiches justes, conformes au programme et bien
écrites, c'est plusieurs mois de travail sérieux. C'est ce qui fera vivre ou mourir l'appli.

**Le droit d'auteur.** Interdiction absolue de recopier Nathan, Hachette, Bordas ou un site de
cours existant. En revanche les **programmes officiels du BO sont publics** : ils sont la source
légitime. Tout le contenu doit être rédigé de façon originale à partir de là.

**L'exactitude.** Une seule formule fausse et un élève perd des points à un contrôle. Tout
contenu généré avec mon aide doit être **relu par quelqu'un qui maîtrise la matière** avant
publication. Je peux produire vite ; je ne peux pas garantir l'exactitude sans relecture.

**Les stores.** Compte Apple Developer 99 €/an, Google Play Console 25 $ une fois. Comptes
liés à une identité, avec vérification. Apple pratique une revue humaine.

---

## 7. Prérequis sur ta machine

| | État au 2026-08-07 | Action |
|---|---|---|
| Licence Xcode | **non acceptée** — casse `git`, `python3`, `strings` | `sudo xcodebuild -license accept` |
| Node.js / npm | absent | installeur depuis nodejs.org (pas besoin de Homebrew) |
| Xcode | installé | ✅ |
| macOS 26.4, Apple Silicon | ✅ | — |
| Android Studio / SDK | absent | **non nécessaire** avec EAS Build |

---

## 8. Décisions en attente

1. **Qui est l'utilisateur ?** Tes propres enfants, tes élèves des cours particuliers, ou un
   produit commercial ? Ça change tout : le soin de l'interface, le modèle économique, la
   nécessité d'un compte utilisateur.
2. **Gratuit ou payant ?** Et si payant, à quel moment — freemium par chapitre, abonnement,
   achat unique ?
3. **Qui relit le contenu ?** Toi seul, ou un professeur de la matière ?
4. **Quelle échéance ?** La rentrée de septembre 2026 est la fenêtre naturelle, mais elle est
   dans un mois — trop court pour 50 chapitres. Viser plutôt les vacances de la Toussaint,
   ou sortir avec un seul niveau complet.

---

## 9. Prochaine étape proposée

Produire **un chapitre complet de bout en bout** — par exemple « Second degré » en Seconde :
la fiche, le QCM, et l'outil de résolution associé. Un seul chapitre, mais fini.

Ça donne le gabarit de tout le reste, ça permet de mesurer le temps réel par chapitre, et ça
te donne quelque chose à montrer avant d'écrire une ligne d'application.
