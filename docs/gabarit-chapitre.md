# Gabarit d'un chapitre — Kamal Campus

Ce document fige la structure que **tous** les chapitres doivent suivre. Il a été extrait du
chapitre pilote « Second degré » une fois celui-ci terminé et validé.

Objectif : que n'importe quel chapitre puisse être produit, relu et intégré sans redécider de
sa forme à chaque fois.

---

## 1. Arborescence

Un chapitre = un répertoire, trois fichiers.

```
contenu/<niveau>/<parcours>/<chapitre>/
├── fiche.md      le cours
├── qcm.json      les questions
└── outil.json    (optionnel) déclaration de l'outil de calcul associé
```

Règles de nommage : **minuscules, tirets, sans accents**. Ni espaces ni majuscules —
Gradle et CocoaPods échouent dessus.

Exemple : `contenu/premiere/maths-specialite/second-degre/`

---

## 2. `fiche.md`

### En-tête YAML — obligatoire

```yaml
---
id: 1spe-math-second-degre        # unique, sert de clé dans l'appli
titre: "Équations et fonctions polynômes du second degré"
voie: generale                    # generale | technologique
niveau: premiere                  # seconde | premiere
parcours: maths-specialite        # maths-specialite | maths-enseignement-scientifique
                                  # | physique-chimie | tronc-commun
matiere: mathematiques            # mathematiques | physique-chimie
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Fonction carré (Seconde)
statut: brouillon                 # brouillon | relu | publie
relu_par: null                    # nom du relecteur, ou null
---
```

⚠️ `statut: publie` **interdit** tant que `relu_par` est `null`. C'est la règle qui protège
l'appli d'une formule fausse en production.

### Corps — l'ordre des sections

1. **Définition** — la notion, avec sa condition d'existence
2. **Propriétés / théorèmes** — chacun suivi d'un exemple immédiat
3. **Démonstrations** exigibles au programme, séparées visuellement
4. **Méthodes / stratégies** — le « comment faire », dans l'ordre du programme officiel
5. **Cas particuliers** (signe, variations, représentation graphique…)
6. **Tableau récapitulatif** — tout ce qu'il faut savoir par cœur, en un écran
7. **Les erreurs qui coûtent des points** — 4 à 6 pièges concrets

### Règles de rédaction

- **Suivre l'ordre du programme officiel, pas celui des manuels.** Sur le second degré, le
  nouveau texte demande de factoriser en diversifiant les stratégies : le discriminant arrive
  en quatrième position, pas en premier.
- **Un exemple par propriété**, jamais une propriété nue.
- **Formules en LaTeX** entre `$...$` (en ligne) ou `$$...$$` (bloc), rendues par KaTeX.
- **Encadrer** les formules à mémoriser avec `\boxed{}`.
- Ton direct, tutoiement de l'élève, phrases courtes.
- **Aucun emprunt** à un manuel ou à un site. Source unique : le programme officiel du BO,
  qui est public.

### Bloc de notes de production

En fin de fichier, dans un commentaire HTML `<!-- ... -->` (donc invisible dans l'appli) :
la source exacte, ce qui reste à vérifier, et les points à soumettre au relecteur.

---

## 3. `qcm.json`

### Structure

```json
{
  "id": "1spe-math-second-degre-qcm",
  "chapitre": "1spe-math-second-degre",
  "titre": "QCM — Second degré",
  "voie": "generale",
  "niveau": "premiere",
  "parcours": "maths-specialite",
  "matiere": "mathematiques",
  "statut": "brouillon",
  "relu_par": null,
  "consigne": "Une seule réponse correcte par question.",
  "questions": [
    {
      "id": 1,
      "difficulte": "facile",        // facile | moyen | difficile
      "notion": "definition",        // sert au diagnostic des lacunes
      "enonce": "…",
      "choix": ["…", "…", "…", "…"], // exactement 4
      "reponse": 2,                  // index 0-based dans "choix"
      "explication": "…"             // obligatoire, explique le POURQUOI
    }
  ]
}
```

### Règles

- **10 questions** par chapitre, **4 choix** chacune, **une seule** bonne réponse.
- Répartition visée : **2 faciles / 5 moyennes / 3 difficiles**.
- Le champ `notion` doit correspondre à une section de la fiche — c'est ce qui permettra
  plus tard de dire à l'élève *quelle partie du cours* revoir.
- L'`explication` ne répète pas la réponse : elle explique le raisonnement **et nomme le piège**.
- Les distracteurs doivent être des **erreurs plausibles** (signe oublié, facteur $a$ omis,
  confusion somme/produit), jamais des réponses absurdes.

### Contrôle automatique avant intégration

```bash
jq empty qcm.json                                   # JSON valide
jq '.questions | length' qcm.json                   # = 10
jq -r '.questions[] | select(.reponse >= (.choix|length) or .reponse < 0) | .id' qcm.json
                                                     # doit ne rien renvoyer
jq -r '.questions[] | select((.choix|length) != 4) | .id' qcm.json
                                                     # doit ne rien renvoyer
```

---

## 4. Outil de calcul — quand et comment

Un chapitre n'a **pas forcément** d'outil. On en ajoute un seulement quand il y a un calcul
mécanique répétitif que l'élève doit pouvoir vérifier.

### Règle absolue

**Calcul déterministe uniquement.** Une bibliothèque de calcul, jamais un modèle de langage.
Un outil qui se trompe fait perdre des points à un élève et détruit la confiance dans l'appli.

`Ask Kamal` (l'IA) sert à **expliquer** en langage naturel — reformuler une notion, détailler
une étape — **jamais à calculer**.

### Conventions d'implémentation

Constatées sur `app/lib/second-degre.js`, à reprendre :

- **Résultats exacts en fractions réduites** quand c'est possible (`-1/2`, pas `-0.5`).
  Un élève écrit des fractions.
- Valeurs approchées **explicitement marquées** (`exact: false`).
- Renvoyer un tableau **`etapes`** — l'outil doit montrer le raisonnement, pas seulement
  le résultat. C'est ce qui le distingue d'une calculatrice.
- Refuser proprement les cas invalides, avec un message qui **enseigne**
  (« si a = 0, la fonction est affine »).
- **Tests obligatoires** couvrant tous les cas de figure avant intégration.

---

## 5. Cycle de vie d'un chapitre

| Étape | Qui | Sortie |
|---|---|---|
| 1. Extraire la section du programme officiel | — | citation exacte du BO |
| 2. Rédiger `fiche.md` | — | `statut: brouillon` |
| 3. Rédiger `qcm.json` | — | `statut: brouillon` |
| 4. Contrôles automatiques | script | JSON valide, bornes correctes |
| 5. **Relecture par un professeur de la matière** | humain | `relu_par` renseigné |
| 6. Corrections | — | — |
| 7. Passage en `statut: publie` | — | intégrable dans l'appli |

**L'étape 5 n'est pas négociable.** Je peux produire vite, je ne peux pas garantir l'exactitude
sans relecture humaine.

---

## 6. Ordre de production recommandé

Commencer par les chapitres qui servent de **prérequis** aux autres, et par ceux dont le
programme a le plus changé — ce sont ceux qu'aucun manuel ne couvre encore correctement.

**Première spécialité maths** — Second degré ✅ · Dérivation · Suites · Fonction exponentielle ·
Trigonométrie · Produit scalaire · Probabilités conditionnelles

**Seconde maths** — Fonctions de référence · Vecteurs · Repérage et droites · Statistiques ·
Probabilités · Algorithmique

Puis la physique-chimie des deux niveaux.

⚠️ **Ne rien écrire pour la Terminale avant 2027** : son programme change à la rentrée
2027-2028, tout contenu produit maintenant expirerait.
