# Kamal Campus — Document de passation

> **Rédigé le 2026-08-07** sur le PC de travail (accès restreint).
> À ajouter comme **fichier de contexte** dans le projet Claude, pour reprise sur iMac.
> L'historique de conversation ne se transfère pas — ce document le remplace.

---

## 0. Comment reprendre

Colle ce fichier dans le projet Claude côté iMac et dis simplement :
*« On reprend Kamal Campus, voici le contexte. »*

Rien de ce qui suit ne doit être rediscuté : ce sont des décisions déjà prises, ou des faits
déjà vérifiés à la source. Le seul travail de reprise est de **régénérer les fichiers**.

---

## 1. Le projet

**Kamal Campus** — application mobile de révision pour lycéens.
Matières : **Mathématiques** et **Physique-Chimie**.

Trois briques :
1. **Fiches de cours** — définition, propriété, théorème, formule, exemple
2. **QCM d'assimilation** — 10 questions par chapitre, avec correction expliquée
3. **Outils de calcul** — résolution assistée

La fonction IA interne s'appelle **« Ask Kamal »**.

Nom technique : `kamal-campus` · Nom public : **Kamal Campus**
Identifiants d'app suggérés : `com.kamalcampus.app`

⚠️ **Jamais d'espace ni d'accent dans les chemins** — Gradle et CocoaPods échouent dessus.

---

## 2. Faits vérifiés à la source — ne pas redécouvrir

### Les filières S / ES / L n'existent plus

Supprimées par la réforme de 2019. Le modèle de données correct est :

```
VOIE (générale | technologique)
 └── NIVEAU (seconde | première | terminale)
      └── PARCOURS
           ├── maths-specialite                    (Première/Terminale générale)
           ├── maths-enseignement-scientifique      (Première générale sans spé maths)
           ├── physique-chimie
           └── tronc-commun                         (Seconde)
```

En **Première générale**, deux programmes de maths distincts coexistent : l'élève suit soit la
**spécialité maths**, soit les **maths intégrées à l'enseignement scientifique**. Ce n'est pas
le même contenu. Si l'arborescence ne le reflète pas, l'élève ne trouve pas son cours.

### Calendrier des programmes — décisif pour le périmètre

Nouveaux programmes publiés au **BO du 2 avril 2026**.

| Niveau | Nouveau programme applicable |
|---|---|
| Seconde | **rentrée 2026-2027** |
| Première (générale et techno) | **rentrée 2026-2027** |
| Terminale | rentrée 2027-2028 |

S'ajoute une **nouvelle épreuve anticipée de mathématiques en Première**, pour tous les élèves
quelle que soit leur voie, dès la session 2026 du bac.

➡️ **DÉCISION : v1 = Seconde + Première uniquement.**
Écrire du contenu Terminale maintenant produirait quelque chose qui expire en septembre 2027.

➡️ **Opportunité** : tous les manuels et applis existants deviennent périmés en septembre 2026.
Construire sur les nouveaux programmes donne une avance réelle.

### Le second degré n'entre plus par le discriminant

Vérifié dans le texte officiel : **le mot « discriminant » n'y apparaît pas**.

> *Contenus* — « Fonction polynôme du second degré donnée sous forme **factorisée**. Racines,
> signe, expression de la **somme et du produit des racines**. »
>
> *Capacités attendues* — « **Factoriser** une fonction polynôme du second degré, en
> **diversifiant les stratégies** : racine évidente, détection des racines par leur somme et
> leur produit, identité remarquable, application des formules générales. »

Le Δ existe toujours, sous « application des formules générales » — mais c'est **une stratégie
parmi quatre**, plus le point d'entrée. Les fiches doivent suivre l'ordre du programme, pas
celui des anciens manuels.

### Où récupérer les programmes officiels

`education.gouv.fr` renvoie **403** aux requêtes automatisées. Passer par ce miroir :

- Index : `https://www.xm1math.net/reforme/index.html`
- Première spé maths : `https://www.xm1math.net/reforme/prem_gen_spe.pdf`

**Extraction du texte** : aucun outil PDF n'est installé (`pdftotext`, `pdftoppm`, Homebrew
absents) et la licence Xcode bloque `strings` et `python3`. La méthode qui marche est un script
**Perl + Compress::Zlib** qui décompresse les flux `stream…endstream` et lit les opérateurs
`Tj` / `TJ`, en insérant une espace quand le crénage est inférieur à −100. Gérer aussi les flux
**non compressés** (certains PDF n'utilisent pas FlateDecode).

---

## 3. Décisions techniques

| Sujet | Décision | Raison |
|---|---|---|
| Framework | **Expo (React Native)** | une base de code iOS + Android ; EAS Build compile dans le cloud, donc pas besoin du SDK Android ni de configurer Xcode |
| Contenu | **hors du code**, en Markdown + JSON | relisible sans toucher au code, mise à jour sans repasser par les stores, réutilisable pour un site web |
| Formules | **KaTeX** | des maths mal rendues tuent la crédibilité |
| Hors ligne | **obligatoire** | on révise dans le métro et au CDI |
| Outils de calcul | **déterministes**, jamais un LLM | un résultat faux fait perdre des points et détruit la confiance |
| Ask Kamal (IA) | **explication en langage naturel uniquement** | un LLM se trompe en arithmétique ; une bibliothèque de calcul, non |

### Arborescence

```
kamal-campus/
├── README.md                 cadrage complet
├── PASSATION.md              ce document
├── docs/
│   ├── gabarit-chapitre.md   modèle de production
│   └── programme-*.pdf/.txt  sources officielles
├── contenu/
│   ├── seconde/{maths,physique-chimie}/
│   └── premiere/{maths-specialite,maths-enseignement-scientifique,physique-chimie}/
├── app/                      Expo / React Native
│   ├── package.json          type: module
│   └── lib/                  outils de calcul + tests
└── design/                   logo, icône, palette
```

---

## 4. Gabarit d'un chapitre — résumé

Un chapitre = un répertoire, trois fichiers : `fiche.md`, `qcm.json`, `outil.json` (optionnel).

### `fiche.md` — en-tête YAML obligatoire

```yaml
id, titre, voie, niveau, parcours, matiere, programme,
duree_lecture_min, prerequis[], statut, relu_par
```

**Sections, dans cet ordre** : définition → propriétés et théorèmes (chacun suivi d'un exemple)
→ démonstrations exigibles → méthodes et stratégies (ordre du programme) → cas particuliers
→ tableau récapitulatif → « les erreurs qui coûtent des points ».

Formules en LaTeX, `\boxed{}` pour ce qui est à mémoriser. Tutoiement de l'élève.
Notes de production en commentaire HTML en fin de fichier.

### `qcm.json`

10 questions · 4 choix chacune · une seule bonne réponse · `reponse` en index 0-based.
Répartition **2 faciles / 4 moyennes / 4 difficiles** (voir `docs/gabarit-chapitre.md`).
Champ `notion` aligné sur une section de la fiche (servira au diagnostic des lacunes).
`explication` obligatoire : elle explique le raisonnement **et nomme le piège**.
Distracteurs = erreurs plausibles (signe oublié, facteur `a` omis), jamais des absurdités.

Contrôles avant intégration :
```bash
jq empty qcm.json
jq '.questions|length' qcm.json                                    # = 10
jq -r '[.questions[]|select(.reponse >= (.choix|length) or .reponse < 0)]|length'   # = 0
jq -r '[.questions[]|select((.choix|length) != 4)]|length'                          # = 0
```

### Conventions des outils de calcul

- **Fractions exactes réduites** quand c'est possible (`-1/2`, jamais `-0.5`) — un élève écrit
  des fractions ; approximations explicitement marquées `exact: false`
- Renvoyer un tableau **`etapes`** : l'outil montre le raisonnement, sinon c'est une calculatrice
- Refuser en **enseignant** (« si a = 0, la fonction est affine, pas du second degré »)
- Tests obligatoires couvrant tous les cas avant intégration

### Règle non négociable

`statut: publie` **interdit** tant que `relu_par` est `null`.
**Toute fiche doit être relue par un professeur de la matière.** Une formule fausse fait perdre
des points à un élève.

---

## 5. État au 2026-08-07 — à régénérer sur l'iMac

| Fichier | État | À refaire |
|---|---|---|
| `README.md` | cadrage complet | régénérer |
| `docs/gabarit-chapitre.md` | complet | régénérer |
| `contenu/premiere/maths-specialite/second-degre/fiche.md` | 8 sections, brouillon | régénérer |
| `contenu/premiere/maths-specialite/second-degre/qcm.json` | 10 questions validées | régénérer |
| `app/lib/second-degre.js` | solveur complet | régénérer |
| `app/lib/second-degre.test.js` | 17 tests écrits, **jamais exécutés** | régénérer + exécuter |
| `docs/programme-*.pdf` | téléchargé depuis xm1math.net | retélécharger |

**Le solveur `second-degre.js`** expose `resoudreSecondDegre(a,b,c)` (Δ, nature, racines,
somme, produit, forme factorisée, forme canonique, sommet, tableau de signes, étapes),
`racineEvidente(a,b,c)` et `deTelsNombres(s,p)` — ces deux dernières correspondant aux
stratégies 1 et 2 du programme, à proposer **avant** le discriminant.

Sa logique a été vérifiée par un **portage Perl indépendant** sur 11 cas (les trois natures de Δ,
racines fractionnaires, coefficients négatifs, cas invalide `a = 0`). Node n'étant pas installé
sur le PC de travail, les tests JS n'ont **jamais tourné** — à faire en premier sur l'iMac.

---

## 6. Prérequis machine sur l'iMac

```bash
sudo xcodebuild -license accept     # sinon git, python3 et strings restent cassés
```

Puis **Node.js 18+** depuis nodejs.org (installeur, Homebrew inutile).
Ensuite : `cd app && npm test` doit afficher 17 tests au vert.

Android Studio et le SDK Android ne sont **pas** nécessaires si on passe par EAS Build.

Pour publier plus tard : compte Apple Developer 99 €/an, Google Play Console 25 $ une fois.

---

## 7. Le vrai risque du projet

**Le contenu, pas le code.** Environ **45 à 55 chapitres**, soit **500 à 600 questions**.
Mesure prise sur le chapitre pilote : de l'ordre d'une **demi-journée par chapitre**, relecture
comprise.

➡️ Septembre 2026 est **hors d'atteinte**. La Toussaint est l'échéance réaliste — ou sortir avec
un seul niveau complet.

**Droit d'auteur** : interdiction absolue de recopier Nathan, Hachette, Bordas ou un site de
cours. Les **programmes officiels du BO sont publics** : c'est la seule source légitime, et tout
doit être rédigé de façon originale à partir de là.

---

## 8. Ordre de production recommandé

**Première spécialité maths** — Second degré ✅ · **Dérivation** (prérequis de presque tout) ·
Suites · Fonction exponentielle · Trigonométrie · Produit scalaire · Probabilités conditionnelles

**Seconde maths** — Fonctions de référence · Vecteurs · Repérage et droites · Statistiques ·
Probabilités · Algorithmique

Puis la physique-chimie des deux niveaux.

⚠️ **Rien pour la Terminale avant 2027.**

---

## 9. Questions encore ouvertes

1. **Qui est l'utilisateur ?** Tes enfants, tes élèves de cours particuliers, ou un produit
   commercial ? Ça change le soin de l'interface, le modèle économique et la nécessité d'un
   compte utilisateur.
2. **Gratuit ou payant ?** Si payant : freemium par chapitre, abonnement, ou achat unique ?
3. **Qui relit le contenu ?** Toi seul, ou un professeur de la matière ?
4. **Quelle échéance visée ?**

---

## 10. Prochaine étape

Au choix : le chapitre **Dérivation** (prérequis de presque tout le reste), ou la **coquille
Expo** de l'application pour voir les fiches s'afficher sur un vrai téléphone.
