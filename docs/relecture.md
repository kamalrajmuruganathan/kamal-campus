# Kamal Campus — Dossier de relecture

> Mis à jour le 2026-08-10, après réextraction propre des neuf programmes officiels.

## À qui s'adresse ce document

Au **professeur de la matière** qui accepte de relire. Il n'y a rien à installer : chaque
fiche est un fichier Markdown lisible tel quel dans le dépôt.

La règle du gabarit est non négociable :

> `statut: publie` est **interdit** tant que `relu_par` est `null`.

**Les 50 chapitres sont aujourd'hui en `statut: brouillon`.** Aucun n'a été relu.

## Comment relire une fiche

Chaque `fiche.md` se termine par un bloc `<!-- NOTES DE PRODUCTION -->`, invisible dans
l'application. Il indique la source exacte utilisée et **la liste des points incertains**.
C'est le point d'entrée : la relecture consiste d'abord à trancher ces points-là.

Une fois la fiche validée, renseigner dans l'en-tête YAML :

```yaml
statut: publie
relu_par: "Prénom Nom — professeur de <matière>"
```

## Ce qui a changé le 2026-08-10 — à lire avant de commencer

Les sept fiches ci-dessous étaient classées prioritaires parce que **l'extraction du texte
officiel était lacunaire ou corrompue**. Cette cause a disparu : les neuf PDF ont été
réextraits avec `app/scripts/extraire-pdf.mjs` (pdfjs-dist, table ToUnicode appliquée).
Le programme de spécialité maths a récupéré **74 %** de texte, celui de STI2D/STL **35 %**.

J'ai donc repassé les questions ouvertes au crible du texte neuf. **Quatre sont tranchées,
et deux écarts au programme apparaissent** — ils n'étaient pas visibles avant.

⚠️ Ces verdicts restent des lectures du texte officiel, pas une validation pédagogique.
Ils réduisent le travail du relecteur ; ils ne le remplacent pas.

---

## Les sept fiches prioritaires

### 1. `premiere/maths-specialite/variables-aleatoires`

Source désormais complète (section « Variables aléatoires réelles »).

| Question ouverte | Verdict |
|---|---|
| Espérance, variance, écart-type sont-ils au programme ? | ✅ **Oui** — listés tels quels dans les contenus. Ils avaient été reconstitués par déduction ; la déduction était juste. |
| E(aX+b) et V(aX+b) sont-ils exigibles ? | ⚠️ **Écart** — le programme ne liste que la « linéarité de l'espérance ». **La variance d'une transformation affine n'y figure pas.** La fiche va au-delà. |
| L'échantillonnage relève-t-il de cette section ? | ⚠️ **Manque** — oui : la sous-section « Expérimentations » en fait partie (simulation d'échantillons, moyenne d'un échantillon de taille n). **La fiche ne la traite pas.** |
| Y a-t-il une démonstration exigible ? | ❔ Non listée dans la section. À confirmer. |

À décider par le relecteur : retirer V(aX+b) ou le marquer « hors programme, pour aller plus
loin » ; et créer ou non la partie échantillonnage.

### 2. `premiere/physique-chimie/mouvement-interactions`

| Question ouverte | Verdict |
|---|---|
| Formulation vectorielle qualitative, ou deuxième loi de Newton ? | ✅ **Tranché** — « principe fondamental » : zéro occurrence. Le texte impose « une formulation **approchée de la deuxième loi de Newton** ». |

### 3. `seconde/physique-chimie/modelisation-microscopique`

| Question ouverte | Verdict |
|---|---|
| Sous-couches (1s² 2s²…) ou couches (K)(L) ? | ✅ **Tranché — aucune des deux.** Le mot « couche » n'apparaît en 2de PC que dans « chromatographie sur couche mince ». Le programme dit seulement « modèle du cortège électronique pour les trois premières lignes de la classification périodique ». Aucune notation n'est prescrite : la fiche ne doit pas en présenter une comme exigée. |

### 4. `seconde/maths/fonctions-de-reference`

| Question ouverte | Verdict |
|---|---|
| La fonction cube est-elle au programme de seconde ? | ✅ **Oui** — « Pour les fonctions affines, valeur absolue, carré, inverse, racine carrée **et cube**, résoudre graphiquement ou algébriquement une équation ou une inéquation du type ƒ(𝑥) = k ». |

### 5. `premiere/maths-enseignement-scientifique/phenomenes-evolution`

| Question ouverte | Verdict |
|---|---|
| L'exponentielle est-elle formalisée, ou seulement vue via les suites géométriques ? | ✅ **Statut intermédiaire, à refléter exactement** — « Les fonctions exponentielles sont présentées comme un **prolongement des suites géométriques** de raison positive à des valeurs non entières positives », et « les propriétés algébriques sont **admises** ». Ni construction formelle, ni simple détour. |

### 6. `premiere-techno/pc-maths-sti2d-stl/mesure-incertitudes` — ✅ réécrite

La note de production signalait « un seul marqueur lisible dans le texte officiel ». La
section est aujourd'hui **intégralement lisible** : 14 occurrences d'« incertitude », dont
6 d'« incertitude-type ». **La fiche et son QCM ont été réécrits contre cette source.**

| Ce qu'exige le programme | État avant | Correction |
|---|---|---|
| « Citer les **sept** unités de base » | cinq données, deux écartées | les sept, avec mole et candela |
| **Justesse et fidélité** | absentes | section 4 ajoutée, avec l'image de la cible |
| **Incertitude-type**, évaluation de **type A** ; estimation sur **mesure unique** | terme jamais employé, méthodes absentes | section 6 ajoutée, $u = s/\sqrt{n}$ |
| Série de mesures : **histogramme**, moyenne, écart-type | écart-type mentionné en passant | section 5 ajoutée |
| Validité par comparaison à une **valeur de référence**, en **nombre d'incertitudes-types** | enseignait le **recouvrement d'intervalles** entre deux mesures — méthode répandue, mais absente du programme et sans valeur de référence | section 8 réécrite |
| Incertitude relative | traitée comme un contenu | reléguée en section 9, signalée **hors programme** |

QCM : 4 questions sur 10 réécrites (`unites-si` teste désormais les sept, plus
`incertitude-type-a`, `justesse-fidelite`, `valeur-reference`).

**Restent à valider par le relecteur** : le seuil de 2 incertitudes-types (le texte dit
« évalué en nombre d'incertitudes-types » sans fixer de seuil) ; la formule $u = s/\sqrt{n}$
(le texte demande « une approche statistique de type A » sans l'écrire) ; les estimations
sur mesure unique (demi-graduation), qui relèvent de l'usage.

### 7. `premiere-techno/pc-maths-sti2d-stl/ondes-information` — ✅ réécrite

Source passée de lacunaire à complète. Les trois sous-parties du programme — notion d'onde,
ondes sonores, ondes électromagnétiques — sont désormais lisibles. **Fiche et QCM réécrits ;
les sections 1 à 5, déjà bien adossées au texte, sont conservées.**

| Ce qu'exige le programme | État avant | Correction |
|---|---|---|
| **Sources lumineuses** : solaire, corps chauffés, DEL, lasers, lampes spectrales et UV ; caractéristiques d'un laser ; **risques et précautions** | **bloc entier absent** | section 8 ajoutée |
| Transport de l'information par une onde **modulée selon un code donné** | traitait **bande passante** et **atténuation**, absentes du texte ; modulation jamais mentionnée | section 9 réécrite |
| « Exploiter la relation entre **puissance et intensité** acoustiques » | mentionnait le **décibel**, absent du texte | $I = P/S$ ajouté, décibel retiré |
| « **Les deux** grandeurs de la perception : amplitude et fréquence » | en listait trois, avec le **timbre** | timbre retiré |
| « Évaluer la célérité du son dans **air, eau, métal** » | air seulement | table des trois milieux |
| Distances « avec **ou sans** réflexion » | écho seulement | cas sans réflexion ajouté |
| Bornes du spectre « **non exigibles** », sauf le visible | présentées sans distinction | distinction explicite |

QCM : 3 questions sur 10 réécrites (`transport-information`, `intensite-acoustique`,
`sources-lumineuses`).

**Deux questions ouvertes de la version précédente sont tranchées** : la modulation **est**
au programme — c'est même le cœur de la capacité — mais AM et FM ne sont pas nommées ; et le
décibel **n'est pas** la grandeur attendue, ni quantitativement ni qualitativement.

**Restent à valider par le relecteur** : la forme exacte de la relation puissance/intensité
(le texte ne l'écrit pas) ; les bornes du visible (400–800 nm est l'usage, certains manuels
retiennent 380–780) ; les ordres de grandeur de célérité dans l'eau et l'acier.

---

## Un écart entre le gabarit et la pratique

Le gabarit impose une répartition de **2 questions faciles / 5 moyennes / 3 difficiles**.
Dans les faits, **47 QCM sur 50 sont en 2 / 4 / 4**. Ce n'est donc pas 47 erreurs, mais un
gabarit désaligné de la production. À trancher : corriger le gabarit, ou les 47 fichiers.
Rien n'a été modifié à ce titre.

## Les 43 autres fiches

Elles n'ont pas de doute documenté au-delà de leur bloc de notes de production. L'ordre de
relecture conseillé suit le risque pour l'élève :

1. **Les fiches calculatoires** — une formule fausse s'y propage dans les QCM et les outils.
2. **La physique-chimie** — programme de 2019, stable, donc relecture qui ne périmera pas.
3. **Les mathématiques** — programmes du BO 2026, applicables à la rentrée 2026-2027.

## Contrôles automatiques déjà passés

Ils ne disent rien de la justesse mathématique, seulement de la forme :

```bash
for q in contenu/*/*/*/qcm.json; do
  jq empty "$q"                                                               # JSON valide
  jq '.questions|length' "$q"                                                 # = 10
  jq '[.questions[]|select(.reponse>=(.choix|length) or .reponse<0)]|length'  # = 0
  jq '[.questions[]|select((.choix|length)!=4)]|length'                       # = 0
  jq '[.questions[]|select(.explication==null or .explication=="")]|length'   # = 0
done
```

Et côté outils de calcul : `cd app && npm test` → **234 tests, tous au vert**.
