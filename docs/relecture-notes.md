# Dossier de relecture — notes de production de toutes les fiches

> Document GÉNÉRÉ par `outils/generer-dossier-relecture.sh` — ne pas éditer à la main.
> Régénéré le 2026-08-22. Il assemble les blocs de notes de production
> (invisibles dans l'application) de chaque fiche du corpus.
>
> **Mode d'emploi pour le relecteur** : chaque entrée liste la source
> officielle utilisée et les points que le rédacteur lui-même signale
> comme à confronter au programme. La relecture reste entière — ces notes
> disent où regarder en premier, pas où s'arrêter.

---

# cinquieme

## cinquieme / maths

### calcul-litteral  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Nombres et
calculs », niveau Cinquième, section « Calcul littéral et algébrique ».

Éléments explicitement lisibles dans l'extraction :
- « k(a + b) = ka + kb ou k(a − b) = ka − kb pour factoriser, ou développer une
  expression littérale »
- « Réduire une expression littérale de la forme a … b, où a et b sont des nombres
  décimaux »
- « DÉMONTRER UNE PROPRIÉTÉ GÉNÉRALE PAR LE CALCUL LITTÉRAL » — d'où la section 7,
  qui est l'objectif le plus ambitieux du chapitre
- « Utiliser un contre-exemple pour démontrer qu'une assertion est fausse »
- « Formuler des conjectures en s'appuyant sur un langage algorithmique ou un
  tableur »
- « Donner à la lettre le statut d'inconnue » — d'où la distinction variable/inconnue
  de la section 1
- « Modéliser des problèmes relevant des opérations à trous par des équations du
  type [...] »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La RÉSOLUTION d'équations est-elle attendue en 5e, ou seulement la MISE EN
  ÉQUATION et le test d'une valeur ? L'extraction mentionne « Modéliser des problèmes
  relevant des opérations à trous par des équations du type... » sans que la suite
  soit lisible. Je me suis limité au TEST d'une égalité, sans méthode de résolution —
  c'est le point de périmètre le plus sensible de cette fiche.
- La capacité « Formuler des conjectures en s'appuyant sur un langage algorithmique
  ou un tableur » n'est pas traitée ici : elle relève sans doute du chapitre
  « pensée informatique ». À arbitrer.
- Les identités remarquables ne sont PAS au programme de 5e (elles apparaissent plus
  tard) : je ne les ai pas introduites.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonctions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
(PDF correspondant : docs/programme-college-cycle4-maths-2026.pdf)
Thème « Proportionnalité, fonctions », niveau Cinquième.
Plage lue : lignes 987 à 1020. L'entrée « Fonctions » de la Cinquième occupe
précisément les lignes 1011 à 1020 (l. 1011 titre « Fonctions », l. 1012
« Objectifs d'apprentissage », l. 1013-1020 les huit objectifs).
Les lignes 987 à 1010 de la plage relèvent de l'entrée « Proportionnalité » de la
Cinquième, déjà traitée dans contenu/cinquieme/maths/proportionnalite/.

LES HUIT OBJECTIFS (l. 1013-1020) ET LEUR SECTION DANS LA FICHE
- l.1013 « Introduire l'expression : "en fonction de"… »            -> section 1
- l.1014 « Produire un tableau de valeurs. »                        -> section 2
- l.1015 « Lire et interpréter un tableau de valeurs. »             -> section 2
- l.1016 « Placer dans un repère orthogonal donné des points… »     -> section 5
- l.1017 « Lire et interpréter un graphique cartésien… »            -> section 6
- l.1018 « Traduire la relation de dépendance… à partir d'une formule. » -> section 3
- l.1019 « Produire une formule simple… »                           -> section 4
- l.1020 « Caractériser graphiquement la proportionnalité. »        -> section 7
Seul écart à l'ordre du BO : les sections 3 et 4 sont inversées (formule -> tableau
avant situation -> formule), pour des raisons pédagogiques (remplacer une lettre est
plus simple que fabriquer une formule). À valider, ou à remettre dans l'ordre du BO.

PÉRIMÈTRE — POINT DE VIGILANCE PRINCIPAL
En Cinquième la notion de fonction est NAISSANTE. Le chapeau du thème le dit
(l. 981-984) : « La notion de fonction apparait d'abord dans le cadre des grandeurs
[...] Dès la cinquième, on emploie l'expression "en fonction de". En quatrième, on
donne des exemples où on utilise une formule, un graphique ou un tableau de valeurs
[...] Des exemples de fonctions sont étudiés en troisième, sans étude générale de la
notion de fonction. »
J'ai donc VOLONTAIREMENT EXCLU de cette fiche : le mot « fonction » employé comme
objet mathématique (« la fonction f ») ; la notation f(x) et toute notation
fonctionnelle ; le vocabulaire image / antécédent ; la flèche x -> f(x) ; les mots
ensemble de définition, variable, courbe représentative ; et les mots croissante /
décroissante comme propriétés d'une fonction (la section 6 dit « augmente » et
« diminue », en langue courante).
Le titre « Fonctions » est celui du BO (l. 1011) ; le sous-titre « dépendance entre
deux grandeurs » sert à ne pas laisser croire à l'élève qu'on étudie f(x).

À CONFRONTER AU PROGRAMME PAR LE RELECTEUR
1. AMBIGUÏTÉ RÉELLE, lignes 985-986 (juste HORS de la plage 987-1020 fournie) :
   « Les notations fonctionnelles de type P(A), p(t) ainsi que la flèche -> sont
   utilisées progressivement dans tous les chapitres du programme. » Ce chapeau vaut
   pour tout le cycle 4. Faut-il en introduire une trace dès la 5e (par exemple
   écrire P(c) pour le périmètre) ? J'ai choisi NON — « progressivement » et
   l'entrée 5e qui n'en dit rien plaident pour la 4e/3e — mais c'est le point le
   plus discutable de la fiche. À trancher par un professeur.
2. « Programme de calcul » : la consigne de production le citait comme attendu en 5e.
   Vérification faite, l'expression n'apparaît PAS dans l'entrée « Fonctions » de la
   Cinquième. Elle apparaît en 5e uniquement dans « Nombres et calculs » (l. 387,
   « Traduire un problème, une succession donnée d'opérations, un programme de
   calcul, en une seule expression »), et dans « Fonctions » seulement en QUATRIÈME
   (l. 1038-1039). Je n'ai donc PAS fait de section « programme de calcul » ici, pour
   ne pas empiéter sur la 4e. À confirmer.
3. Recouvrement avec le chapitre Proportionnalité (5e) : l'objectif l. 1020
   « Caractériser graphiquement la proportionnalité » figure dans les deux entrées du
   BO (voir aussi l. 1006-1009). La section 7 le traite du point de vue « fonctions »
   (points issus d'un tableau de valeurs). Vérifier qu'il n'y a pas de contradiction
   avec contenu/cinquieme/maths/proportionnalite/fiche.md, ni de doublon gênant.
4. Condition d'unicité (section 1) : le BO ne l'énonce nulle part en 5e. Je l'ai
   formulée en langue courante (« une seule valeur ») parce que la consigne de
   production impose une « condition d'existence » dans la section Définition, et
   parce que sans elle « en fonction de » n'a pas de sens. Formulation à valider :
   elle ne doit pas devenir une définition formelle de fonction.
5. Le repère orthogonal est un prérequis acquis en 5e : « Espace et géométrie »,
   Cinquième, « Repérage sur une droite et dans le plan », l. 667-678. La section 5
   suppose donc connu « placer un point de coordonnées données ». Cohérent.

Rédaction entièrement originale à partir du seul texte du BO. Aucun emprunt à un
manuel ni à un site de cours. Tous les exemples chiffrés ont été inventés et
recalculés à la main.
Statut : brouillon, non relu.
```

### fractions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Nombres et
calculs », niveau Cinquième, section « Nombres rationnels ».

Éléments explicitement lisibles dans l'extraction :
- « Faire vivre la notion de nombre quotient en complétant des multiplications à
  trou » — d'où la section 1 sur la fraction comme quotient
- « Lire l'abscisse d'un point sur une droite graduée en tiers, en quarts, en
  moitiés, en dixièmes »
- « Reconnaitre des fractions égales »
- « Comparer deux fractions » ; « Comparer des fractions »
- « Écrire une fraction sous la forme d'une somme d'un nombre entier et d'une
  fraction inférieure à 1 » — d'où la section 7
- « Addition et soustraction de fractions simples »
- « Additionner et soustraire des fractions de dénominateurs quelconques »
- « Résoudre des problèmes avec des additions et soustractions de fractions »
- « Prendre une fraction simple d'un nombre »
- « Prendre 1 %, 10 % ou 50 % d'un nombre, en lien avec la proportionnalité » —
  d'où la section 6
- « Écrire un même nombre sous de multiples formes »

⚠️ PÉRIMÈTRE : le programme de 5e mentionne l'ADDITION et la SOUSTRACTION de
fractions, ainsi que « prendre une fraction d'un nombre ». La MULTIPLICATION de deux
fractions entre elles et la DIVISION par une fraction ne figurent pas dans
l'extraction du niveau 5e — je ne les ai donc PAS traitées comme opérations
générales. À CONFIRMER par un professeur : c'est le point de périmètre le plus
sensible de cette fiche.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le vocabulaire « nombre rationnel » est-il introduit en 5e, ou seulement
  « fraction » ? Le sommaire dit « Nombres rationnels », d'où le titre — mais
  vérifier ce qui est attendu des élèves.
- Le PGCD est-il mobilisé pour simplifier, ou seulement des divisions successives ?
  (« Multiples et diviseurs » apparait au sommaire de la 3e, pas de la 5e.)

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### nombres-relatifs  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Nombres et
calculs », niveau Cinquième, section « Nombres relatifs ».

⚠️ CALENDRIER : le nouveau programme du cycle 4 s'applique en 5e dès la rentrée
2026-2027 (en 4e en 2027, en 3e en 2028). Cette fiche est donc IMMÉDIATEMENT
applicable, contrairement à celles de 4e et 3e qui seront légèrement en avance.

Objectifs d'apprentissage explicitement lisibles dans l'extraction :
- « Définir les nombres relatifs »
- « Définir l'opposé et la valeur absolue d'un nombre »
- « Définir la notion de nombre positif, strictement positif, négatif, strictement
  négatif »
- « Utiliser les nombres relatifs pour représenter des grandeurs observables qui
  peuvent prendre des valeurs inférieures à zéro (température, temps, altitude,
  etc.), en particulier dans le cadre de la résolution de problèmes » — d'où les
  exemples concrets de la fiche
- « Lire l'abscisse d'un nombre relatif sur une droite graduée et placer un nombre
  relatif d'abscisse donnée »
- « Comparer et ranger dans l'ordre croissant et décroissant des nombres décimaux
  relatifs »
- « Additionner deux nombres décimaux relatifs » (l. 411)
- « Additionner plusieurs nombres décimaux relatifs » (l. 412)
- « Soustraire deux nombres décimaux relatifs » (l. 413)
- « Connaitre et justifier les situations dans lesquelles des parenthèses sont
  indispensables au sens des écritures » (l. 414)
- « Simplifier l'écriture de sommes comportant des parenthèses » (l. 415)
- « Enchainer additions et soustractions de décimaux relatifs » (l. 416)
- « Résoudre des problèmes mobilisant addition et soustraction de nombres décimaux
  relatifs » (l. 417)

⚠️ CORRECTION DU 2026-08-12 — NON-CONFORMITÉ CORRIGÉE
La version précédente de cette fiche affirmait ici que « le programme de 5e ne
mentionne que l'ADDITION » et renvoyait la soustraction en 4e. C'était FAUX.
Les lignes 413 à 417 de docs/programme-college-cycle4-maths-2026.txt, dans l'entrée
« Nombres relatifs » de la section Cinquième, exigent explicitement :
la soustraction de deux décimaux relatifs (l. 413), la justification et la
simplification des parenthèses (l. 414-415), l'enchaînement additions-soustractions
(l. 416) et la résolution de problèmes mobilisant les deux opérations (l. 417).
Manquaient donc à la fiche : soustraction, parenthèses, enchaînement.
Ajoutés dans les sections 7, 8 et 9 ; tableau récapitulatif et liste d'erreurs
complétés en conséquence ; duree_lecture_min portée de 11 à 15.
Aggravant : en Quatrième, « Opérations sur les nombres relatifs » ne reprend sommes
et différences que dans les AUTOMATISMES (l. 512, « Manipulation de sommes et
différences de nombre relatifs »), ses objectifs d'apprentissage (l. 519-522) ne
portant que sur la multiplication, la division et l'enchaînement d'opérations. La
soustraction de relatifs n'était donc enseignée nulle part dans le corpus.
Ce qui relève bien de la 4e et reste EXCLU ici : multiplication et division de
relatifs. Périmètre à revalider par un professeur.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La notation |x| de la valeur absolue est-elle attendue en 5e, ou seulement la
  notion ? J'ai employé les mots sans introduire la notation.
- Section 8 : jusqu'où pousser la « justification » des parenthèses exigée par la
  l. 414 ? J'ai retenu l'argument « deux signes ne se suivent pas » ; un professeur
  jugera s'il faut aussi traiter les parenthèses de groupement type $5 - (3 - 8)$,
  que je n'ai PAS abordées faute de mention explicite dans le programme.
- Section 9 : le programme dit « enchainer », sans fixer le nombre de termes ni
  autoriser explicitement la commutativité pour regrouper par signe. La méthode de
  regroupement est présentée comme un confort, la méthode de proche en proche
  (section 6) restant valable.
- Le repérage dans le plan (coordonnées négatives) est traité dans une section
  distincte « Repérage sur une droite et dans le plan » — vérifier le partage.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### operations  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt
Thème « Nombres et calculs », niveau Cinquième, entrée « Opérations » :
LIGNES 373 à 397 (l'entrée suivante, « Nombres relatifs », commence ligne 398).
Deux passages du préambule général du cycle 4 ont également été mobilisés pour la
section 10 : lignes 180-182 (« Le calcul mental, le calcul réfléchi et le calcul posé
restent des objectifs majeurs du cycle 4 ») et lignes 184-186 (« la vérification de la
cohérence des résultats à travers la maitrise des ordres de grandeurs »).

CORRESPONDANCE SECTION -> LIGNE DU BO
§1  Nommer un calcul .................. l.389 (sommes/produits, termes/facteurs)
§2  Sens des opérations ............... l.383-384 (sens et situations d'emploi)
§3  Division euclidienne .............. l.376 (automatisme ; « 17 = 3 × 5 + 2 »)
    NB : le BO écrit « 17 = 3 × 5 + 2 » ; la fiche écrit « 17 = 5 × 3 + 2 » pour aligner
    les facteurs sur la forme a = b × q + r (b diviseur, q quotient) et éviter que
    l'élève prenne 3 pour le diviseur. Produit identique — signaler si l'on préfère la
    graphie littérale du BO.
§4  Multiples et diviseurs ............ l.392 + l.377-378 (factoriser, « 21 = 3 × 7 »)
§5  Critères de divisibilité .......... l.375 (2, 5, 10 : rappel CM1-CM2) + l.393 (3 et 9)
§6  Priorités opératoires ............. l.386 (enchainer) + l.390 (priorités)
§7  Programme de calcul ............... l.387-388 (une seule expression, parenthèses)
§8  Distributivité .................... l.391 (« sur des exemples numériques »)
§9  ×/÷ par 10, 100, 1000 ; décimal ... l.380 + l.385 + l.379 + l.381
§10 Vraisemblance ..................... l.383 (« contrôler la vraisemblance »)
Encadré « Pour aller plus loin » ...... l.396-397 (prolongement historique et culturel :
    nombres premiers, Ératosthène) — marqué hors évaluation dans la fiche.

PÉRIMÈTRE — LAISSÉ AUX CHAPITRES VOISINS (qui ont leur propre entrée au BO)
- Nombres relatifs (l.398-419) : tous les exemples de la fiche sont donc en nombres
  positifs ; priorités avec relatifs et parenthèses de signe relèvent de ce chapitre-là.
- Nombres rationnels (l.420-474) : aucune opération sur les fractions ici.
- Puissances (l.475-485) : les priorités n'incluent donc PAS le niveau « puissances »,
  absent de l'entrée Opérations de 5e.
- Calcul littéral (l.486-508) : §8 s'en tient aux « exemples numériques » (l.391) ; la
  forme littérale k(a+b)=ka+kb pour développer/factoriser est rangée en Calcul littéral
  (l.498), comme les équations ax=c et x+b=c (l.504-505). En §7 la lettre sert seulement
  à écrire un programme de calcul, jamais à développer ni résoudre.
  ⚠️ FRONTIÈRE LA PLUS FINE DE LA FICHE — à confirmer par le relecteur.

À TRANCHER PAR LE RELECTEUR
1. « Ordre de grandeur » n'apparait PAS dans l'entrée Opérations de 5e, qui dit seulement
   « contrôler la vraisemblance de son résultat » (l.383). L'expression figure au
   préambule général (l.186) et à propos des puissances de dix (l.351). Je l'ai donc
   présentée comme la MÉTHODE de contrôle, sans en faire un objectif nommé. À valider.
2. « Calcul instrumenté » : mot absent du texte. Le BO écrit « calcul mental, calcul
   réfléchi et calcul posé » (l.181) — j'ai repris ce vocabulaire exact ; la calculatrice
   vient de l.166-189. Ces lignes sont au préambule du cycle, pas dans l'entrée 5e : dire
   si ce contenu a sa place ici.
3. Critères de divisibilité : le texte ne nomme QUE 2, 5, 10 puis 3 et 9. Je n'ai
   volontairement pas ajouté 4, 6 ni 25, courants en manuel mais absents du BO.
4. ⚠️ POINT LE PLUS INCERTAIN — « Mobiliser un algorithme dans le cadre du calcul
   numérique » (l.394) n'est couvert qu'INDIRECTEMENT (division euclidienne §3, procédure
   de division par un décimal §9, programme de calcul §7). Le texte ne précise pas ce
   qu'il entend par « algorithme » ici. Si une section dédiée (langage algorithmique,
   tableur) est attendue, elle reste à écrire.
5. « Dividende / diviseur » (§1, §3) n'est pas listé tel quel dans l'entrée Opérations,
   contrairement à « termes » et « facteurs » (l.389). Attendu en 5e ?
6. Le préambule fixe : « on appelle quotient le résultat d'une division ou l'expression
   d'une division » (l.331-332). J'emploie « quotient » dans ces deux sens (§1 et §3),
   conformément au texte — à relire.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
```

### parallelogrammes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel du cycle 4, thème « Espace et géométrie », niveau
Cinquième, section « Parallélogrammes »
(docs/programme-college-cycle4-maths-2026.txt).

CHAPITRE CRÉÉ LE 2026-08-11, premier d'un lot destiné à compléter la 5e (5 chapitres
écrits sur 16 au programme).

Correspondance objectif par objectif — tous les objectifs d'apprentissage de la section
sont couverts :

- « Définir le parallélogramme » → § 1.
- « Construire des parallélogrammes » → § 5, trois méthodes.
- « Connaitre les propriétés caractéristiques des côtés opposés et des diagonales »
  → § 3 et § 4. La distinction propriété / propriété CARACTÉRISTIQUE (qui fonctionne
  dans les deux sens) est le point pédagogique central : c'est elle qui permet de
  démontrer plutôt que de constater.
- « Utiliser une propriété caractéristique sur les diagonales ou les côtés pour les
  construire ou donner la nature du quadrilatère » → § 4 avec un exemple rédigé, et
  § 6 avec la table des diagonales.
- « Définir les parallélogrammes particuliers (rectangle, losange, carré). Connaitre
  les propriétés caractéristiques » → § 6.
- « Savoir calculer l'aire d'un parallélogramme et de figures complexes » → § 7.
- « Résoudre des problèmes faisant appel à des conversions d'unités de longueur et
  d'unités d'aires » → § 8.

Les automatismes de la section (reconnaitre un quadrilatère dans une figure complexe,
exploiter un codage) sont supposés acquis et non retraités : ils relèvent du travail
en classe plutôt que d'une fiche de révision.

Le CENTRE DE SYMÉTRIE (§ 2) n'est pas nommé dans la section « Parallélogrammes », mais
la section « Transformations » du même niveau demande de « définir le demi-tour, ou
symétrie centrale » et d'en « connaitre les propriétés ». Le lien est fait ici parce
qu'il explique d'un coup toutes les propriétés du parallélogramme, au lieu de les faire
apprendre par cœur séparément.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- LA DATE DU BO. L'en-tête reprend « BO du 5 mars 2026 » des cinq fiches de 5e
  existantes, mais ETAT.md annonce « BO du 2 avril 2026 » pour le même cycle 4, et
  AUCUNE des deux dates n'apparaît dans le texte extrait. L'une au moins est fausse.
  À trancher et à harmoniser sur les six fiches.
- Le § 2 (centre de symétrie) est un choix de progression : il suppose que la symétrie
  centrale a été vue avant. Si l'ordre retenu en classe est inverse, il faudrait le
  déplacer ou l'alléger.
- Les angles opposés égaux et les angles consécutifs supplémentaires (§ 3) ne sont pas
  explicitement listés dans les objectifs, qui ne citent que « côtés opposés et
  diagonales ». Conservés car classiques et utiles, mais à valider.
- La formule de l'aire du losange par les diagonales (D × d)/2 n'est pas dans le texte :
  seule l'aire du parallélogramme est demandée. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### pensee-informatique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt — thème « La pensée informatique »,
introduction lignes 1071-1075, section « Cinquième » lignes 1076-1087 (seule source des
contenus), cadrage général lignes 302-321. Prérequis vérifiés dans
programme-college-cycle3-maths-2025.txt, section « Sixième » (lignes 1543-1552) :
instruction, séquence d'instructions, entrées, sorties, répétitions.

Les 7 objectifs de la section Cinquième sont tous couverts : séquencer des instructions →
1 et 2.1 · entrées et sorties → 2.2 · formule en expression informatique → 2.4 et méthode 2
· calculer une formule par une suite d'instructions → méthode 3 · prévoir la valeur avant
exécution → méthode 1 · modifier les paramètres d'un programme → méthode 4 · boucle
inconditionnelle → 2.5 et méthode 5. Variable « vue uniquement sous l'angle de la
manipulation en lecture d'une donnée saisie » → 2.3, volontairement restrictive.

⚠️ PÉRIMÈTRE — le point le plus sensible, à trancher par le relecteur.
La commande de production demandait le **test (instruction conditionnelle)** parmi les
notions clés. Le texte officiel le place en **Quatrième** (« Représenter des conditions
simples », « Écrire des instructions conditionnelles », lignes 1093-1094) et la boucle
conditionnelle en Troisième (ligne 1104) ; la section Cinquième ne mentionne aucune
condition. Le test n'est donc PAS traité ici, ni dans le QCM. Faut-il l'introduire quand
même ? Le dépistage du 2026-08-10 (docs/relecture.md) traite ce type d'ajout comme un écart.

⚠️ Même logique : écrire un programme en autonomie et modifier le *comportement* d'un
programme relèvent de la 4e. En 5e le texte ne demande que de modifier ses **paramètres**
(d'où la méthode 4, limitée aux valeurs numériques). Aucun accumulateur (compteur incrémenté
dans une boucle) n'apparaît nulle part : cela supposerait de modifier une variable.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le texte dit « langage de programmation par blocs » sans nommer Scratch (0 occurrence en
  cycle 4 ; le nom n'apparaît qu'en cycle 3, ligne 1539). La fiche ne nomme donc aucun
  logiciel et figure les blocs par du pseudo-code indenté (fiche et QCM) : à valider comme
  représentation acceptable d'un empilement de blocs. La syntaxe employée (`*`, `/`,
  `répéter n fois`, `fin répéter`) est une convention de rédaction, le programme n'en
  prescrit aucune : vérifier qu'elle ne heurte pas l'usage.
- Le tracé de polygone (carré, triangle) suppose l'angle de rotation **extérieur** et
  $360 \div n$ : cohérence à vérifier avec la progression de géométrie de 5e (QCM q. 7).
- « Prévoir la valeur d'une expression informatique » : le programme ne dit pas si les
  priorités opératoires sont réactivées à cette occasion. La fiche fait ce choix (2.4,
  erreurs 2 et 3) car c'est le point de contact direct avec le calcul de 6e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
```

### probabilites  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel du cycle 4, thème « Organisation et gestion de données et
probabilités », niveau Cinquième, section « Probabilités »
(docs/programme-college-cycle4-maths-2026.txt).

CHAPITRE CRÉÉ LE 2026-08-11, troisième d'un lot destiné à compléter la 5e.

Correspondance objectif par objectif — tous les objectifs d'apprentissage de la section
sont couverts :

- « Aborder les questions relatives au hasard à partir de problèmes simples » → § 1
  et exemples concrets tout au long (dé, pièce, urne), conformément aux automatismes
  listés dans le texte.
- « Utiliser le vocabulaire des probabilités dans des contextes concrets : expérience
  aléatoire, issue, évènement » → § 1. Les TROIS termes du texte, définis et distingués.
- « Attribuer des probabilités dans des cas simples (équiprobabilité) » → § 4. Le mot
  « équiprobabilité » figure entre parenthèses dans le texte : la fiche en fait une
  condition explicite, et signale que la formule ne s'applique pas sinon.
- « Répéter matériellement une expérience aléatoire simple. Enregistrer les résultats
  observés dans un tableau d'effectifs et de fréquences » → § 6, avec un tableau de
  60 lancers. C'est le lien avec le chapitre Statistiques du même niveau.

Les automatismes de la section sont repris dans le § 2 (échelle des probabilités) et le
§ 3 : le texte cite nommément l'événement impossible, l'événement certain, pile ou face,
le dé, le tirage dans une urne, le loto, « 10 fois de suite la valeur 1 », les trois
écritures, et l'expression « une chance sur quatre ». Tous figurent dans la fiche.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- LA DATE DU BO, comme pour les autres fiches de 5e (voir la note de
  « parallelogrammes »).
- La NOTATION P(événement) est utilisée dès le § 2. Le texte de 5e ne l'introduit pas
  explicitement — il parle de « donner la probabilité » sans fixer de notation.
  Vérifier qu'elle est bien attendue à ce niveau, ou l'alléger.
- L'« erreur du joueur » (§ 6) et l'idée que la fréquence se rapproche de la
  probabilité quand on répète beaucoup relèvent de la loi des grands nombres, qui
  n'est pas au programme de 5e. Traitées de façon purement qualitative, sans la
  nommer : à valider.
- Le programme demande de « répéter MATÉRIELLEMENT une expérience » : c'est une
  activité de classe. La fiche la restitue par un tableau de résultats, ce qui en
  conserve l'idée mais pas la manipulation.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### proportionnalite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Proportionnalité,
fonctions », niveau Cinquième, section « Proportionnalité ».

Éléments explicitement lisibles dans l'extraction (rubrique « Automatismes ») :
- « Reconnaitre si une situation donnée entre dans le cadre de la proportionnalité ou
  non » — d'où la section 1, placée en tête
- « Dans des situations simples, mobiliser une PROCÉDURE ADAPTÉE (propriété de
  linéarité pour la multiplication ou l'addition, retour à l'unité) pour résoudre un
  problème lié à la proportionnalité » — d'où les quatre méthodes de la section 3
- Exemples cités TELS QUELS par le programme :
  · « à partir d'une recette pour 4 personnes, on sait donner (ou verbaliser la
    procédure) les quantités lorsque l'on passe à 2, 8 ou 6 personnes »
  · « si l'on connait le prix d'un kilogramme de tomates, on sait comment calculer le
    prix de 3 kg ou de 4,3 kg de tomates »
  · « lors de l'élection des délégués de la classe, 4 élèves se présentent... »
  Les exemples de la fiche (recette, tomates) reprennent ceux du programme.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le PRODUIT EN CROIX est-il explicitement au programme de 5e, ou introduit plus
  tard ? Il ne figure pas dans la partie « Automatismes » extraite. Je l'ai inclus
  car classique, mais c'est un point de périmètre à vérifier.
- Les ÉCHELLES et la VITESSE sont-elles rattachées à ce chapitre ? Elles ne sont pas
  visibles dans l'extraction du niveau 5e.
- Les pourcentages : le programme les mentionne dans « Nombres rationnels »
  (« prendre 1 %, 10 % ou 50 % d'un nombre, en lien avec la proportionnalité »).
  Il y a donc un recouvrement à arbitrer avec la fiche « fractions ».
- Le troisième exemple du programme (élection des délégués) suggère un lien avec les
  statistiques : à explorer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### puissances  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Nombres et calculs », section « Cinquième », entrée « Puissances »,
lignes 475 à 485. Complément : entrée « Opérations » (Cinquième), ligne 390,
« Connaitre et utiliser les priorités opératoires ».

Objectifs d'apprentissage repris un par un (lignes 480-485) :
- « Découvrir la notion de puissance d'un nombre et sa notation dans le cas du carré
  et du cube » -> sections 1, 2 et 3
- « Connaitre les carrés des entiers de 0 à 12 » -> section 4 (tableau)
- « Connaitre le cube de 10 » -> section 3
- « Savoir écrire un nombre sous la forme d'une puissance 2 ou 3 » -> section 5
- « Calculer la valeur numérique d'expressions contenant des puissances simples,
  additions, soustractions et produits » -> section 6
- « Calculer la valeur d'une expression littérale contenant une puissance simple »
  -> section 7
Automatismes associés (lignes 477-478) : tables de multiplication ; « Connaitre les
unités d'aires et de volume » -> d'où le lien systématique carré/aire (cm²) et
cube/volume (cm³), et le piège n°6.

⚠️ PÉRIMÈTRE VOLONTAIREMENT LIMITÉ — à confirmer par le relecteur :
- Les PUISSANCES DE 10 en tant que telles, les EXPOSANTS NÉGATIFS et la NOTATION
  SCIENTIFIQUE ne figurent PAS dans l'entrée 5e : ils relèvent de la Quatrième
  (chapitre produit séparément). Seul 10^3 (et 10^2 comme appui) est mentionné ici,
  parce que « Connaitre le cube de 10 » est explicitement au programme de 5e.
- Les FORMULES DE CALCUL SUR LES PUISSANCES (a^m x a^n, (a^m)^n, quotients) ne sont
  pas au programme de 5e : elles ne sont pas traitées, même en remarque.
- Le programme dit « dans le cas du carré et du cube ». J'ai malgré tout donné la
  notation générale a^n avec exposant entier positif (section 1, exemple 2^4), parce
  que la notation ne se comprend pas sans elle. À TRANCHER : faut-il la restreindre
  strictement aux exposants 2 et 3 ?
- Aucune puissance de nombre NÉGATIF n'apparaît (ni (-3)^2, ni -3^2) : en 5e le
  programme limite les relatifs à l'addition et la soustraction, la multiplication
  de relatifs étant en 4e. Le piège classique du signe est donc volontairement absent.

⚠️ AUTRES POINTS À CONFRONTER AU TEXTE OFFICIEL :
- La PLACE DES PUISSANCES DANS LES PRIORITÉS opératoires (section 6) n'est pas
  détaillée dans le texte : celui-ci dit seulement « Connaitre et utiliser les
  priorités opératoires » (Opérations) et « Calculer la valeur numérique
  d'expressions contenant des puissances simples, additions, soustractions et
  produits » (Puissances). La hiérarchie que j'énonce (parenthèses > puissances >
  produits > sommes) est la convention mathématique standard, mais elle n'est pas
  écrite telle quelle dans le programme.
- Les cubes autres que 10^3 (2^3 = 8, 3^3 = 27, 4^3 = 64) sont utilisés comme
  exemples, pas présentés comme à mémoriser. Vérifier le niveau d'exigence affiché.
- Titre retenu : « Puissances : carré et cube ». Le BO dit seulement « Puissances ».

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### reperage  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source principale : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Espace et géométrie », section Cinquième, entrée « Repérage sur une droite et
dans le plan », lignes 668 à 678 (la plage 667-754 fournie couvre aussi Représentation
de l'espace, Transformations, Angles, Triangles, Parallélogrammes : NON traités ici,
ce sont des chapitres distincts).

Contenu textuel exact de l'entrée (lignes 668-678) :
- Automatismes : « Placer sur une demi-droite graduée un point dont l'abscisse est un
  nombre décimal. » / « Repérer un nombre décimal sur une demi-droite graduée. »
- Objectifs : « Sur une droite graduée : lire l'abscisse d'un point donné ; placer un
  point d'abscisse donnée. » / « Dans le plan muni d'un repère orthogonal : lire les
  coordonnées d'un point donné ; placer un point de coordonnées données. »

=> D'où les sections 1-3 (droite graduée, lecture, placement) et 5-7 (repère du plan,
lecture et placement des coordonnées). L'ordre des sections suit celui du programme :
la droite AVANT le plan.

Éléments repris d'autres entrées du MÊME niveau 5e (à valider par le relecteur) :
- ligne 409 (« Nombres et calculs » / « Nombres relatifs ») : « Lire l'abscisse d'un
  nombre relatif sur une droite graduée et placer un nombre relatif d'abscisse
  donnée. » => exemple 2 de la section 2, abscisses négatives.
- ligne 435 (« Nombres rationnels », automatismes) : « Lire l'abscisse d'un point sur
  une droite graduée en tiers, en quarts, en moitiés, en dixièmes. » => exemples 3 et 4.
Ces deux points relèvent formellement du thème « Nombres et calculs », pas de l'entrée
« Repérage » : RECOUVREMENT assumé avec 5e-math-nombres-relatifs et 5e-math-fractions.
À ARBITRER : garder, alléger, ou renvoyer vers ces fiches.

⚠️ POINT DE CONFORMITÉ LE PLUS SENSIBLE — les DISTANCES (section 4).
La consigne de production demandait de traiter les « distances ». Or le mot ne figure
NI dans l'entrée « Repérage » de 5e (lignes 668-678), NI ailleurs dans la section
Cinquième du programme (recherche plein texte : « distance » n'apparait qu'aux lignes
1004 et 1050, sur la proportionnalité et les échelles). La section 4 se limite donc
volontairement à l'écart entre deux abscisses sur une DROITE graduée, qui n'est qu'une
soustraction de relatifs de 5e. La distance entre deux points du PLAN n'est PAS
traitée : elle suppose le théorème de Pythagore (4e). Le relecteur doit trancher :
supprimer la section 4, ou la conserver comme prolongement.

⚠️ VOCABULAIRE À VALIDER : le programme écrit « repère orthogonal » et « coordonnées »,
mais ne nomme pas explicitement en 5e « axe des abscisses », « axe des ordonnées »,
« ordonnée » ni la notation $A(x\,;y)$. Ce vocabulaire est introduit ici car il est
indispensable pour formuler les objectifs — à confirmer qu'il est bien exigible en 5e
et pas seulement en 4e (l'entrée « Repérage » de 4e, lignes 759-765, reprend les mêmes
objectifs).

⚠️ Le programme ne dit pas si le repère de 5e peut avoir des UNITÉS DIFFÉRENTES sur
les deux axes. J'ai insisté sur ce cas (sections 5 et 8) parce qu'« orthogonal » ne
signifie pas « orthonormé » — à confirmer que ce niveau d'exigence est attendu en 5e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### representation-espace  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie », niveau
Cinquième, entrée « Représentation de l'espace », LIGNES 679 à 695 (plage fournie : 667-754).

Correspondance littérale source -> fiche :
- Automatismes
  « Reconnaitre des vues (de dessus, dessous…) d'empilements de cubes. »   -> §3
  « Dénombrer des cubes dans des empilements. »                           -> §3
  « Reconnaitre un cube, un pavé représenté en perspective cavalière. »   -> §1, §2
  « Reconnaitre un patron d'un cube. »                                    -> §4
- Objectifs d'apprentissage
  « Construire et mettre en relation différentes représentations en perspectives cavalières
    des solides suivants : pavé droit, cube, cylindre de révolution, prisme droit. » -> §1, §2
  « Savoir mettre en relation une représentation en perspective cavalière et un patron d'un
    pavé, d'un prisme droit ou d'un cylindre de révolution. »             -> §4
  « Calculer le volume du cube, du pavé droit, du prisme droit. »         -> §6
  « Connaitre et convertir des unités usuelles (volume et capacité). »    -> §7
  « Calculer l'aire du disque, le volume du cylindre de révolution. »     -> §5, §6
- Prolongements possibles : « Solides de Platon, formule d'Euler » / « Tableaux d'Escher ».
  Seule la formule d'Euler a été reprise (encadré culture §1), sans exigence.

PÉRIMÈTRE VOLONTAIREMENT EXCLU
- Pyramide et cône de révolution : entrée de QUATRIÈME (l. 773-776).
- Boule, sphère, sections de solides : TROISIÈME (l. 824-828).
- Repérage, Transformations, Angles, Triangles, Parallélogrammes : autres entrées de la
  même page, hors sujet.

À TRANCHER PAR LE RELECTEUR
1. AIRE LATÉRALE / TOTALE. Le programme de 5e demande l'aire du DISQUE et les VOLUMES,
   jamais « aire latérale » ni « aire totale ». Je n'ai donc pas posé la formule d'aire
   latérale du cylindre comme résultat à mémoriser : elle n'apparait que descriptivement,
   via les dimensions du rectangle du patron (§4). Bon dosage, ou à retirer ?
2. « parallélépipède rectangle » : le BO n'emploie que « pavé droit ». J'ai finalement retiré
   le synonyme du corps de la fiche — à confirmer qu'il ne doit pas y figurer.
3. NOMBRES DE FACES/ARÊTES/SOMMETS et la règle n+2 / 3n / 2n (§1) : non exigibles à la lettre
   en 5e (l'automatisme « reconnaitre la base d'un prisme » figure en 4e). Conservés comme
   aide à la description, et évalués en Q1 du QCM. À valider.
4. FORMULE D'EULER (§1) : « prolongement possible » du BO, pas un objectif. Donnée en encadré
   culture, non évaluée au QCM. À valider.
5. VALEUR DE π : partout π ≈ 3,14, avec le caractère approché signalé. Vérifier que c'est la
   convention du projet en 5e, plutôt que la touche π de la calculatrice.
6. PATRONS DU CUBE : j'ai donné un critère pratique (§4) plutôt que l'énumération des
   11 patrons, que le programme ne mentionne pas. À valider.
7. ANGLE DE FUITE ET COEFFICIENT (§2) : le BO n'en fixe aucun. Écrit « souvent 30° ou 45° » et
   « souvent 0,5 ou 0,7 », présenté comme un usage et non comme une règle. À vérifier.

CONTRAINTE FIGURES : chapitre de géométrie dans l'espace produit SANS illustration. Compensé
par des descriptions pas-à-pas et des exemples chiffrés récurrents (cube 4 cm, pavé 5x3x2,
prisme 3-4-5 de hauteur 10, cylindre r=5 h=12, aquarium 60x30x40). Si des figures sont
ajoutées, les points d'insertion sont §2, §3 et §4.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### statistiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel du cycle 4, thème « Organisation et gestion de données et
probabilités », niveau Cinquième, section « Statistiques »
(docs/programme-college-cycle4-maths-2026.txt).

CHAPITRE CRÉÉ LE 2026-08-11, deuxième d'un lot destiné à compléter la 5e.

Correspondance objectif par objectif — tous les objectifs d'apprentissage de la section
sont couverts :

- « Recueillir et organiser des données » → § 2, tableau d'effectifs.
- « Calculer des effectifs et des fréquences (exprimées sous forme décimale,
  fractionnaire ou de pourcentage) » → § 3. Les TROIS écritures sont traitées, comme le
  texte le demande explicitement.
- « Lire et interpréter des informations présentées sous forme de tableaux, de
  diagrammes et de graphiques » → § 6.
- « Représenter [...] des données sous la forme d'un tableau, d'un diagramme
  (diagramme en barres, diagramme circulaire) ou d'un graphique cartésien » → § 4. Les
  trois types nommés dans le texte, ni plus ni moins : ni histogramme, ni diagramme en
  boîte, qui relèvent du lycée.
- « Choisir une représentation adaptée à ce qu'il convient de mettre en avant » → § 4,
  table des usages. C'est un objectif à part entière du programme, souvent négligé :
  traité comme tel.
- « Calculer et interpréter la moyenne simple d'une série de données » → § 5. Le mot
  « interpréter » justifie le passage sur ce que la moyenne ne dit pas.

Le texte mentionne « sur papier ou à l'aide d'un tableur-grapheur ». L'usage du tableur
n'est pas détaillé : il relève de la manipulation en classe plutôt que d'une fiche de
révision.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- LA DATE DU BO, comme pour les autres fiches de 5e (voir la note de
  « parallelogrammes »).
- Le programme dit « moyenne SIMPLE ». Le § 5 traite le calcul par les effectifs, qui
  est une moyenne pondérée par les effectifs — mais qui reste le calcul de la moyenne
  simple d'une série où des valeurs se répètent, pas une moyenne à coefficients.
  Vérifier que la présentation ne prête pas à confusion avec la moyenne pondérée, qui
  n'est pas au programme de 5e.
- Le calcul des ANGLES d'un diagramme circulaire (§ 4) n'est pas explicitement demandé :
  le texte dit « représenter [...] sous la forme d'un diagramme circulaire », ce qui le
  suppose. À confirmer.
- La lecture critique d'un graphique (§ 6, axe ne partant pas de zéro) va au-delà de
  « lire et interpréter ». Conservée car elle sert l'esprit critique, explicitement
  cité dans les objectifs majeurs du cycle 4, mais à valider.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformations  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »,
section « Cinquième », entrée « Transformations », lignes 696-707 (intro du thème :
lignes 645-666).

TOUT le contenu de l'entrée, littéralement. Automatismes : « Reconnaitre et
construire le symétrique d'une figure par symétrie axiale, dont l'axe est vertical,
horizontal, ou en diagonale sur quadrillage. » / « Construire le symétrique, par
rapport à un axe, d'un point, d'une figure, sur feuille blanche. » — Objectifs :
« Définir le demi-tour, ou symétrie centrale. » / « Connaitre les propriétés du
demi-tour. » — Prolongements : rosaces et pavages du Moyen Âge ; flocon, alvéoles.

PÉRIMÈTRE — vérifié, texte NON ambigu. La 5e ne comporte que deux transformations :
symétrie axiale (en automatisme, donc réactivation des acquis de 6e) et demi-tour /
symétrie centrale (seul objectif nouveau). Recherche faite sur tout le fichier :
- TRANSLATION : apparait seulement en 4e (« Parallélogrammes et translations »,
  lignes 779-793) et en 3e (« Translations et vecteurs », lignes 849-856).
- ROTATION (autre que le demi-tour) et HOMOTHÉTIE : AUCUNE occurrence dans tout le
  programme de cycle 4.
Aucune des trois n'est traitée ici. Le demi-tour reparait en automatisme en 4e
(lignes 758 et 781-784) : notion bien installée en 5e, cohérent. NB : le mot
« rotation » est évité dans la fiche, la rotation générale n'étant pas au programme.

À TRANCHER PAR LE RELECTEUR
1. PRINCIPAL — « Connaitre les propriétés du demi-tour » : le BO ne les LISTE PAS.
   La section 4 est mon interprétation du niveau d'exigence de 5e (conservation des
   longueurs, angles, aires, alignement ; image d'une droite parallèle ; conservation
   du sens ; involution). Deux doutes précis : (a) la conservation des AIRES est-elle
   exigible ? Incluse parce que l'intro du thème (lignes 661-664) fait des « preuves
   utilisant les aires » un fil rouge et insiste sur « l'identification
   d'invariants ». (b) L'involution est-elle attendue, ou hors-programme ?
2. VOCABULAIRE : le BO écrit « le demi-tour, ou symétrie centrale », dans cet ordre.
   « Demi-tour » est donc le terme principal ici, à rebours de l'usage des manuels.
3. Section 5, lien avec le parallélogramme : de moi. Les deux notions sont en 5e
   (entrée « Parallélogrammes », lignes 740-753), mais le BO ne relie explicitement
   transformations et parallélogrammes qu'en 4e (ligne 790). À retirer si c'est jugé
   anticiper. Même remarque pour la notion de « centre de symétrie d'une figure »,
   non nommée en 5e : je ne l'ai pas érigée en section, seulement évoquée.
4. Section 5, image d'une droite par symétrie axiale : le cas d'une droite
   PERPENDICULAIRE à l'axe (image = elle-même) est volontairement passé sous
   silence, jugé trop subtil pour la 5e. À valider.
5. Médiatrice : automatisme de 5e (ligne 723), mais cette fiche la suppose déjà vue
   — vérifier la progression annuelle. Enfin, les prolongements culturels du BO ne
   sont pas exploités faute de figures : à prévoir si des illustrations arrivent.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel
ni à un site de cours. Statut : brouillon, non relu.
```

### triangles-angles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Espace et
géométrie », niveau Cinquième, sections « Angles » et « Triangles ».

Le sommaire du niveau Cinquième liste : Repérage sur une droite et dans le plan,
Représentation de l'espace, Transformations, ANGLES, TRIANGLES, Parallélogrammes.
Cette fiche couvre les deux sections Angles et Triangles.

⚠️ FICHE À RELIRE EN PRIORITÉ : l'extraction du PDF est nettement moins exploitable
sur le domaine « Espace et géométrie » que sur « Nombres et calculs ». Le sommaire
est fiable (les intitulés de sections), mais je n'ai PAS pu lire les objectifs
d'apprentissage détaillés de ces deux sections. Le contenu s'appuie donc sur la
structure standard du niveau, pas sur des capacités citées.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR — points de périmètre à trancher :
- Les angles ALTERNES-INTERNES et CORRESPONDANTS sont-ils bien au programme de 5e
  dans le nouveau texte, ou déplacés à un autre niveau ?
- L'INÉGALITÉ TRIANGULAIRE est-elle en 5e ou en 6e ?
- La construction de triangles (aux instruments) est-elle attendue ici ?
- Les hauteurs, médianes, médiatrices et bissectrices sont-elles rattachées à cette
  section ou traitées à part ?
- La rédaction « On sait que / Or / Donc » est-elle la formulation attendue par le
  programme, ou une convention pédagogique locale ?

Le chapitre « Parallélogrammes », également au programme de 5e, n'est PAS traité
dans cette fiche — il mériterait sa propre fiche.

Rédaction originale. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## cinquieme / physique-chimie

### corps-purs-melanges  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : Programme de physique-chimie du cycle 4 (BO), classe de 5e, thème
« Organisation et transformations de la matière ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Corps purs et mélanges (5e) », lignes 31-34 :
  - « La matière est constituée d'espèces chimiques. »
  - « Corps pur / mélange ; mélange homogène / hétérogène. »
  - « Solvant, soluté, solution ; solubilité ; miscibilité. »
Extraction officielle via WebFetch depuis education.gouv.fr / eduscol
(cf. en-tête du fichier programme). À CONFRONTER AU PDF OFFICIEL avant publication.

⚠️ PÉRIMÈTRE — points à confronter au relecteur :
- SOLUBILITÉ : je l'ai définie comme la masse max de soluté par litre de solvant (g/L),
  à température donnée, avec la notion de solution SATURÉE. À CONFIRMER que le niveau de
  formalisation (g/L + saturation) est attendu en 5e, ou s'il faut rester purement
  qualitatif (« il y a une limite, la température l'augmente »). Aucun calcul de
  solubilité n'est imposé par le texte ; je l'introduis surtout pour ancrer l'unité g/L.
- Les ATOMES et MOLÉCULES ne sont PAS au programme de 5e (ils arrivent en 4e, ligne 60-61
  du fichier programme). J'ai donc parlé d'« espèces chimiques » et de « petits morceaux
  invisibles » SANS employer le mot molécule ni schéma particulaire. À CONFIRMER.
- La MASSE VOLUMIQUE / DENSITÉ relève de la 3e (ρ = m/V, ligne 91). Je l'évoque juste
  qualitativement pour expliquer pourquoi l'huile flotte (couche du haut), sans formule
  ni valeur. À CONFIRMER que cette mention qualitative est acceptable.
- Techniques de SÉPARATION (décantation, filtration, distillation) : NON traitées, car
  le texte fourni ne les liste pas explicitement dans cette section. À CONFIRMER si le
  relecteur souhaite les ajouter (elles figurent souvent dans les manuels de 5e).

⚠️ UNITÉS : solubilité en g/L ; conversions mL↔L (÷ ou × 1000) rappelées et utilisées
dans les exercices (piège n°1). Conservation de la masse lors d'une dissolution vérifiée
(105 g = 100 g + 5 g). Valeurs numériques citées (sel ~360 g/L à 20 °C, fusion du sucre
~186 °C) = ordres de grandeur à vérifier au relecteur.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### energie-electricite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), extrait
docs/programme-college-physique-chimie-cycle4.txt, section « Énergie et électricité (5e) »
(lignes 45-49) :
  - L'énergie se mesure en joule ; stocks et transferts d'énergie.
  - Un transfert d'énergie est nécessaire pour modifier un système.
  - Circuit électrique (ouvert/fermé, série/dérivation).
  - Tension aux bornes (volt) ; intensité du courant (ampère). Sécurité électrique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.

⚠️ À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- BORNE DE NIVEAU : en 5e, PAS de loi d'Ohm (U = R·I) ni de puissance P = U·I ni de
  relation E = P·t — ce sont des notions de 4e/3e/lycée. Elles ont été volontairement
  EXCLUES. À vérifier qu'aucune n'a fui dans le texte.
- Les lois qualitatives de l'intensité (unicité en série, additivité en dérivation) et
  de la tension (additivité en série, unicité en dérivation) sont présentées SANS calcul,
  uniquement de façon qualitative. Confirmer que ce niveau qualitatif est bien attendu en
  5e dans la progression de l'établissement (parfois réparti 5e/4e selon les collèges).
- Valeurs numériques d'illustration (10 J pour soulever une brique, 4,5 V pour une pile
  plate, 0,2 A pour une lampe de poche) : ordres de grandeur à valider.
- Le programme cycle 4 n'est pas toujours ventilé par niveau dans le BO : la ventilation
  « (5e) » suit le fichier source fourni. À confirmer avec la progression officielle.
```

### mouvement-vitesse  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : Programme de physique-chimie du cycle 4 (BO), classe de 5e, thème
« Mouvement et interactions ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Mouvement et vitesse (5e) », lignes 40-43 :
  - « Caractériser un mouvement : trajectoire (rectiligne, circulaire, curviligne). »
  - « Relativité du mouvement par rapport à un observateur/référentiel. »
  - « Mesure de durées. »
Extraction officielle via WebFetch depuis education.gouv.fr / eduscol
(cf. en-tête du fichier programme). À CONFRONTER AU PDF OFFICIEL avant publication.

⚠️ PÉRIMÈTRE — points à confronter au relecteur :
- La relation v = d/t est explicitement au programme de 4e (ligne 68-69 du fichier
  programme : « Mouvement : la relation v = d/t (4e) »). Elle n'est donc PAS introduite
  ici : la vitesse est traitée QUALITATIVEMENT (comparaison à durée ou distance égale).
  À CONFIRMER que le calcul de vitesse n'est pas attendu en 5e.
- De même, le vocabulaire « mouvement uniforme / accéléré / ralenti » et le « mouvement
  circulaire uniforme » relèvent de la 4e (lignes 70-71). Ils ne sont PAS traités ici.
  À CONFIRMER.
- « Mesure de durées » : j'ai inclus la définition durée = instant final - instant
  initial et les conversions h/min/s (base 60), qui sont le principal piège d'unités du
  chapitre. À CONFIRMER que ce périmètre convient (certains manuels y ajoutent la notion
  d'incertitude de mesure / temps de réaction au chronomètre — non traité ici).
- Le mot « référentiel » est donné comme synonyme d'« objet de référence / observateur ».
  À CONFIRMER que le terme est exigible en 5e ou seulement « objet de référence ».

⚠️ UNITÉS : temps en base 60 (1 min = 60 s, 1 h = 60 min = 3600 s). Vérifier que les
conversions et exemples numériques (2 min 30 s = 150 s ; 10 h 42 - 10 h 15 = 27 min)
sont exacts. Aucune puissance de 10 introduite (hors périmètre 5e). Pas de v = d/t.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### proprietes-matiere  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : Programme de physique-chimie du cycle 4 (BO), classe de 5e, thème
« Organisation et transformations de la matière ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Propriétés de la matière (5e) », lignes 26-29 :
  - « Caractériser un échantillon de matière : masse, volume, température. »
  - « Changements d'état physique ; conservation de la masse, variation du volume. »
  - « Température de changement d'état, caractéristique d'une espèce. »
Extraction officielle via WebFetch depuis education.gouv.fr / eduscol
(cf. en-tête du fichier programme). À CONFRONTER AU PDF OFFICIEL avant publication.

⚠️ PÉRIMÈTRE — points à confronter au relecteur :
- La MASSE VOLUMIQUE (ρ = m/V) relève de la 3e (ligne 91 du programme), PAS de la 5e.
  Je ne l'ai donc PAS introduite comme formule. À CONFIRMER qu'on ne l'attend pas ici.
- Les 6 changements d'état sont nommés (fusion, solidification, vaporisation,
  liquéfaction, sublimation, condensation). À CONFIRMER que « sublimation » et
  « condensation (gaz→solide) » sont exigibles en 5e, ou seulement les 4 principaux
  autour de l'eau. Selon les manuels, le vocabulaire des deux derniers varie
  (certains disent « condensation » pour gaz→liquide). J'ai retenu la convention :
  liquéfaction = gaz→liquide, condensation = gaz→solide.
- Dilatation/contraction thermique (variation du volume avec la température, hors
  changement d'état) : non traitée, car le programme 5e la mentionne surtout via les
  changements d'état ; la masse volumique en fonction de T est explicitement en 3e.
- Vérifier les valeurs numériques citées (fer fond ~1500 °C, contenances de canette)
  qui sont des ordres de grandeur illustratifs.

⚠️ UNITÉS : g/kg (×/÷ 1000), mL/L (×/÷ 1000), passage par cL vérifié
(1 L = 100 cL = 1000 mL). Pas de puissances de 10 introduites (hors périmètre 5e).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### signaux-sonores-lumineux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : Programme de physique-chimie du cycle 4 (BO), classe de 5e, thème
« Des signaux pour observer et communiquer ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Signaux sonores et lumineux (5e) », lignes 51-53 :
  - « Signal sonore : fréquence (Hz), niveau sonore (dB) ; infrasons/audible/ultrasons ; hauteur. »
  - « Signal lumineux : source primaire, objet diffusant ; propagation rectiligne ; rayon lumineux. »
Extraction officielle via WebFetch depuis education.gouv.fr / eduscol
(cf. en-tête du fichier programme). À CONFRONTER AU PDF OFFICIEL avant publication.

⚠️ PÉRIMÈTRE — points à confronter au relecteur :
- FRÉQUENCE : j'ai introduit la relation f = N/Δt (nombre de vibrations par seconde) pour
  donner du sens au hertz et travailler les conversions Hz/kHz. À CONFIRMER qu'elle est
  attendue en 5e, ou seulement l'idée qualitative « nombre de vibrations par seconde ».
  Je n'ai PAS introduit la période T ni la relation T = 1/f (plutôt lycée / 4e-3e).
- La relation hauteur ↔ fréquence est traitée qualitativement (plus f grand → plus aigu),
  sans courbe ni mesure sur oscillogramme. À CONFIRMER que l'oscillogramme n'est pas exigé.
- NIVEAU SONORE en dB : traité qualitativement (échelle, seuil de danger ~85 dB, non-additivité).
  Aucune formule logarithmique (hors programme collège). Les valeurs (30/60/90/120 dB) sont
  des ordres de grandeur usuels À VÉRIFIER. Le seuil de danger « ~85 dB » suit les repères
  santé courants ; à confirmer avec le relecteur / repères officiels.
- Bornes de l'audible 20 Hz – 20 kHz : valeurs conventionnelles standard.
- VITESSE du son (~340 m/s) et exemple de l'orage : ajoutés comme culture/lien avec le thème
  « Propagation d'un signal (4e) ». Le calcul v = d/t relève de la 4e (ligne 68 et 84-86 du
  programme), je ne l'ai donc PAS introduit comme formule ici — seulement l'idée qualitative.
- La RÉFLEXION, l'ombre/pénombre détaillée, la vitesse de la lumière chiffrée et l'année-lumière
  relèvent de niveaux ultérieurs (3e, ligne 113-114) : non développés. L'ombre est citée
  uniquement comme conséquence de la propagation rectiligne.

⚠️ UNITÉS (piège n°1) : Hz/kHz (× ou ÷ 1000) — cohérence vérifiée (20 kHz = 20 000 Hz,
3 kHz = 3000 Hz). dB non additifs signalé explicitement. Aucune puissance de 10 introduite
(hors périmètre 5e), écriture des milliers avec espace fine.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformation-chimique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : Programme de physique-chimie du cycle 4 (BO), classe de 5e, thème
« Organisation et transformations de la matière ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Transformation chimique (5e) », lignes 36-38 :
  - « Distinguer transformation chimique et transformation physique. »
  - « Identifier réactifs et produits. »
Extraction officielle via WebFetch depuis education.gouv.fr / eduscol
(cf. en-tête du fichier programme). À CONFRONTER AU PDF OFFICIEL avant publication.

⚠️ PÉRIMÈTRE — points à confronter au relecteur :
- Niveau 5e : PAS d'équation de réaction formelle (elle relève de la 4e, ligne 66 du
  programme : « équation de réaction (approche) »). J'utilise donc seulement des mots
  (« carbone + dioxygène → dioxyde de carbone »), jamais de formules chimiques (C, O2,
  CO2). À CONFIRMER que ce niveau de formulation (flèche + noms d'espèces) est accepté
  en 5e ; certains manuels réservent même la flèche à la 4e.
- La CONSERVATION DE LA MASSE lors d'une transformation chimique relève explicitement de
  la 4e (ligne 64-66 du programme), PAS de la 5e. Je ne l'ai donc PAS traitée ici.
- La notion d'ATOMES et de MOLÉCULES (redistribution, symboles) est de la 4e/3e : non
  abordée. Je reste sur « espèces chimiques » (vocabulaire 5e, cf. corps purs et
  mélanges).
- Les signes d'une transformation chimique (dégagement gazeux, changement de couleur,
  apparition d'un solide, flamme) sont présentés comme des INDICES, pas des preuves.
  À CONFIRMER que cette liste de signes correspond aux attendus 5e du relecteur.
- Vérifier que les exemples (combustion du carbone, rouille du fer, comprimé
  effervescent) sont bien ceux privilégiés en 5e et non réservés à la 3e (combustions,
  réactions acide-métal en 3e, ligne 103).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# premiere-techno

## premiere-techno / maths

### derivation  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Analyse », section
« Dérivation » (ligne 2071 du .txt extrait).

Le découpage de la fiche suit EXACTEMENT celui du programme, dont l'extraction est
lisible sur ce point : « Point de vue local : approche graphique de la notion de
nombre dérivé ; Sécantes à une courbe passant par un point donné ; taux de variation
en un point ; Tangente à une courbe en un point, définie comme position limite des
sécantes passant par ce point ; Nombre dérivé en un point défini comme limite du taux
de variation en ce point ; Équation réduite de la tangente en un point » puis
« Point de vue global : Fonction dérivée ; Fonctions dérivées de : … ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La LISTE EXACTE des dérivées usuelles exigibles : l'extraction s'interrompt sur
  « Fonctions dérivées de : 2 ». J'ai retenu k, x, x², x³, 1/x et √x — à vérifier,
  notamment la présence de √x et de x³.
- La dérivée d'un QUOTIENT est-elle au programme de la voie technologique, ou
  seulement somme et produit ? Point de périmètre à trancher.
- La dérivée de x ↦ f(ax+b) est-elle exigible ?
- Les démonstrations éventuellement exigibles.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonctions-variable-reelle  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Analyse », section
« Fonctions de la variable réelle » (ligne 1830 du .txt extrait).

Éléments explicitement lisibles dans l'extraction : « expression littérale,
représentation graphique », « Taux de variation entre deux valeurs de la variable »,
« Fonctions monotones sur un intervalle, LIEN AVEC LE SIGNE DU TAUX DE VARIATION »,
et pour le second degré : « allure, axe de symétrie, coordonnées du sommet en lien
avec la symétrie et tableau de variation de la fonction », « Racines ».

Le programme insiste sur le TAUX DE VARIATION comme notion charnière — la fiche est
construite autour, plutôt que sur une simple liste de fonctions de référence.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le DISCRIMINANT est-il au programme de la voie technologique, ou les racines sont-
  elles obtenues autrement (forme factorisée, lecture graphique, calculatrice) ?
  Je ne l'ai PAS introduit — point de périmètre décisif à trancher.
- La forme canonique est-elle exigible, ou seulement les coordonnées du sommet ?
- Quelles fonctions de référence sont au programme de première technologique ?
  L'extraction est coupée après « Fonctions dérivées de : » dans la section suivante.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### probabilites-variables-aleatoires  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Statistiques et
probabilités », sections « Modèle associé à une expérience aléatoire à plusieurs
épreuves indépendantes » (ligne 2467) et « Variables aléatoires » (ligne 2493).

Éléments explicitement lisibles :
- « Représenter par un arbre de probabilités la répétition de n épreuves aléatoires
  identiques et indépendantes de Bernoulli afin de calculer des probabilités »
- « Variable aléatoire discrète : loi de probabilité, ESPÉRANCE »
- « Loi de Bernoulli (0,1) de paramètre p, ESPÉRANCE »
- capacités : « Interpréter en situation les écritures … », « Calculer et interpréter
  en contexte l'espérance d'une variable aléatoire discrète », « Reconnaître … »

⚠️ DIFFÉRENCE NOTABLE AVEC LA SPÉCIALITÉ : le programme technologique mentionne la
LOI DE PROBABILITÉ et l'ESPÉRANCE, mais l'extraction ne fait apparaître NI VARIANCE
NI ÉCART-TYPE, ni la formule de König-Huygens — contrairement au programme de
spécialité. Je ne les ai donc PAS introduits. C'est un point de périmètre à
CONFIRMER : si la variance est bien hors programme ici, l'absence est correcte ;
sinon il faudra ajouter une section.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La borne sur n dans la répétition d'épreuves : l'extraction montre « avec » suivi
  d'un blanc. En spécialité et en enseignement scientifique la limite est n ≤ 4 ;
  vérifier qu'elle est identique ici.
- La capacité « Reconnaître … » est tronquée : reconnaître une situation de
  Bernoulli, probablement — à confirmer.
- Les probabilités conditionnelles sont-elles au programme de la voie technologique
  en première ? Je ne les ai PAS traitées, faute de trace dans l'extraction.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### statistiques-deux-variables  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Statistiques et
probabilités », section statistiques (ligne 2273 du .txt extrait).

Éléments explicitement lisibles : « Nuage de points associé à une série statistique à
deux variables quantitatives », « Ajustement affine, point moyen », capacités
« Représenter un nuage de points », « Savoir calculer les coordonnées du point
moyen », « Déterminer et utiliser un ajustement affine ».

⚠️ DIFFÉRENCE NOTABLE AVEC LES AUTRES PARCOURS : le commentaire du programme indique
explicitement « La méthode des moindres carrés est présentée », avec la formulation
d'un minimum. Les moindres carrés sont donc AU PROGRAMME en voie technologique, alors
que le parcours « enseignement scientifique » mentionne plutôt un ajustement au jugé
ou par la droite de Mayer. La section 3 reflète cette différence.

Le programme cite explicitement comme contexte les « mesures expérimentales de
grandeurs liées par une relation linéaire en physique-chimie (intensité et tension) »,
d'où l'exemple filé de la loi d'Ohm.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les FORMULES des coefficients des moindres carrés sont-elles exigibles, ou seulement
  l'usage de la calculatrice ? J'ai retenu la seconde lecture.
- Le COEFFICIENT DE CORRÉLATION est-il au programme ? Je ne l'ai PAS introduit.
- Le programme mentionne d'autres contextes avant « mesures expérimentales » que
  l'extraction a perdus : vérifier qu'aucun n'est structurant.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### suites-numeriques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, « Programme de mathématiques de la
classe de première de la voie technologique »
(docs/programme-premiere-techno-2026.pdf), partie « Analyse », section « Suites
numériques » (ligne 1684 du .txt extrait).

⚠️ POINT DE PÉRIMÈTRE IMPORTANT : ce programme est COMMUN à toutes les séries
technologiques (STI2D, STL, STMG, ST2S, STD2A, STHR, S2TMD). Seules deux rubriques
varient : « Algorithmique et programmation » (sauf STD2A) et « Activités
géométriques » (uniquement STD2A). Il n'existe donc PAS sept programmes de maths
distincts en première technologique.

Éléments lisibles dans l'extraction : sens de variation, représentation graphique
par NUAGE DE POINTS, allure exponentielle, relation de récurrence, explicitation du
terme de rang n, capacité « Reconnaître… ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les SOMMES de termes (1+2+...+n, ou somme géométrique) sont-elles au programme de
  la voie technologique ? Je ne les ai PAS incluses, faute de trace dans
  l'extraction — point de périmètre net à trancher.
- La notion de limite est-elle abordée, même intuitivement ?
- Le programme mentionne un lien avec les algorithmes (calcul de termes par boucle) :
  faut-il l'intégrer ici ou dans le chapitre Algorithmique ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## premiere-techno / pc-maths-sti2d-stl

### energie  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », thème « Énergie ».

⚠️ MÉTHODE D'EXTRACTION — cette fiche a été rendue possible par une SECONDE
extraction du PDF exploitant les tables ToUnicode (CMap) du document, qui récupère
des passages que la première extraction perdait. Les deux extractions sont
PARTIELLES ET COMPLÉMENTAIRES : la v1 restitue mieux la structure (« Notions et
contenu », « Capacités exigibles »), la v2 mieux le texte courant. La fiche est
construite sur leur UNION.

Éléments explicitement lisibles (union v1 + v2) :
- « Énergie et puissance » ; « Énoncer et exploiter la relation entre puissance,
  énergie et durée » ; « Évaluer et citer des ordres de grandeur des puissances mises
  en jeu dans les secteurs [de l'industrie], des transports, des communications »
- « Les conversions et les chaînes énergétiques » ; « électromécanique,
  photoélectrique, électrochimique, thermodynamique (conversions réalisées par une
  machine thermique) » ; « Schématiser une chaîne énergétique ou une conversion »
- « Identifier les principales conversions d'énergie »
- « Principe de la conservation de [l'énerg]ie pour un système isolé »
- « Rendement » ; « Déterminer le rendement d'une chaîne énergétique ou [d'un
  convertisseur] » ; « déterminer le rendement d'un panneau photovoltaïque »
- « Stockage de l'énergie » ; « Stockage de l'énergie de freinage par volant
  d'inertie » (exemple cité TEL QUEL par le programme)
- « Loi d'Ohm. Effet Joule » ; « Calculer la puissance moyenne et l'énergi[e] » ;
  « Exploiter la relation entre la puissance et l'intensité »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les ordres de grandeur du tableau §1 et les rendements typiques du §6 sont des
  valeurs usuelles que j'ai choisies : le programme demande de « citer des ordres de
  grandeur » sans les lister. Vérifier qu'ils correspondent aux attendus.
- Le bilan énergétique d'une machine thermique est-il quantitatif en première ?
- Les énergies mécaniques (cinétique, potentielle) sont-elles traitées dans ce thème
  ou renvoyées à un autre ? Le programme mentionne « L'étude de l'énergie mécanique
  aborde explicitement [...] » sans que la suite soit lisible.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### mesure-incertitudes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », section « Mesure et incertitudes ».

RÉÉCRITURE DU 2026-08-10. La version précédente avait été rédigée alors que
l'extraction du PDF ne laissait lisible qu'un seul marqueur (« Grandeurs et unités »).
Le PDF a été réextrait avec app/scripts/extraire-pdf.mjs : la section est désormais
intégralement lisible, et la fiche est adossée mot à mot à ses contenus et capacités.

Ce que la relecture du texte officiel a changé :

- SEPT unités de base exigées (« Citer les sept unités de base du système
  international »). La version précédente n'en donnait que cinq, en écartant
  explicitement les deux autres. Corrigé.
- JUSTESSE et FIDÉLITÉ sont des notions du programme, nommées dans les contenus et
  dans la capacité « comparer plusieurs méthodes de mesure [...] en termes de justesse
  et de fidélité ». Elles étaient totalement absentes. Section 4 ajoutée.
- INCERTITUDE-TYPE est le terme du programme, avec deux capacités distinctes :
  « procéder à une évaluation par une approche statistique (type A) » et « estimer une
  incertitude-type sur une mesure unique ». La version précédente parlait d'une
  « incertitude » générique sans jamais introduire ni le terme ni les deux méthodes.
  Section 6 ajoutée.
- HISTOGRAMME, moyenne et écart-type sont explicitement cités comme outils
  d'exploitation d'une série de mesures. Section 5 ajoutée.
- VALEUR DE RÉFÉRENCE : le programme demande de « discuter de la validité d'un résultat
  en comparant la différence entre le résultat d'une mesure et la valeur de référence
  d'une part et l'incertitude-type d'autre part », et les repères précisent que l'écart
  « peut être évalué en nombre d'incertitudes-types ». La version précédente enseignait
  à la place le RECOUVREMENT D'INTERVALLES entre deux mesures — méthode répandue, mais
  qui n'est pas celle du programme, et qui ne fait pas intervenir de valeur de
  référence. Section 8 réécrite.
- INCERTITUDE RELATIVE n'apparaît pas dans le programme. Conservée, mais reléguée en
  section 9 et explicitement signalée hors programme.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le seuil de 2 incertitudes-types (§ 8) : le texte officiel dit « écart maximal
  raisonnable [...] évalué en nombre d'incertitudes-types » SANS fixer de seuil
  numérique. Le 2 est l'usage courant, pas une exigence du texte — à confirmer, ou à
  formuler de façon plus prudente.
- La formule u = s/√n (§ 6) : le texte demande « une évaluation par une approche
  statistique (type A) » sans écrire la formule. Vérifier qu'elle est bien celle
  attendue en STI2D/STL, et non l'écart-type seul.
- Les estimations pour une mesure unique (demi-graduation) sont un usage, non un
  contenu du texte : à valider.
- La liste des préfixes n'est pas dans cette section du programme ; conservée comme
  outil pratique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### nombres-complexes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
mathématiques », section « Nombres complexes ».

⚠️ POINT REMARQUABLE : les nombres complexes ne figurent PAS au programme de première
générale (ni en spécialité, ni en enseignement scientifique) — ils y apparaissent
seulement en terminale, en maths expertes. C'est un contenu propre à STI2D/STL, lié
aux besoins de l'électricité en régime sinusoïdal.

Contenus explicitement lisibles dans l'extraction : « Forme algébrique : définition,
conjugué, module ; représentation dans un repère orthonormé direct ; somme, produit,
quotient ; module ; quotient. Argument et forme trigonométrique. »
Capacités : « Calculer et interpréter géométriquement la partie réelle, la partie
imaginaire, le [module] », « Passer de la forme algébrique à la forme trigonométrique
et vice versa ».

⚠️ LIMITE EXPLICITE DU PROGRAMME, respectée dans cette fiche : le commentaire officiel
précise que « La notation exponentielle et les opérations entre nombres complexes sous
forme trigonométrique sont étudiées en CLASSE TERMINALE ». Je n'ai donc introduit
NI la notation re^(iθ), NI la multiplication/division sous forme trigonométrique.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les équations du second degré à discriminant négatif sont-elles au programme de
  première ici ? Je ne les ai PAS traitées, faute de trace dans l'extraction.
- L'interprétation géométrique du module comme DISTANCE ENTRE DEUX POINTS
  (|z_B − z_A| = AB) est-elle exigible ?
- Le programme utilise-t-il la notation i ou j ? J'ai retenu i en signalant j.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### ondes-information  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », thème « Ondes et information » — trois sous-parties : « Notion
d'onde », « Ondes sonores », « Ondes électromagnétiques ».

RÉÉCRITURE DU 2026-08-10. La version précédente avait été bâtie sur l'UNION de deux
extractions partielles du PDF. Celui-ci a été réextrait avec app/scripts/extraire-pdf.mjs :
les trois sous-parties sont désormais intégralement lisibles. Les sections 1 à 5, déjà
bien adossées au texte, sont conservées ; la suite est réécrite.

Ce que la relecture du texte officiel a changé :

- SOURCES LUMINEUSES : bloc de contenus entier, totalement absent de la version
  précédente. Le programme liste « rayonnement solaire, corps chauffés, diodes
  électroluminescentes, lasers, lampes spectrales, lampes UV », exige d'« extraire
  d'une documentation fournie et exploiter les principales caractéristiques (longueur
  d'onde, puissance, directivité) d'un laser », et de « citer les risques et les
  précautions associés à l'utilisation de sources lumineuses variées ». Section 8
  ajoutée.
- TRANSPORT DE L'INFORMATION : la version précédente traitait BANDE PASSANTE et
  ATTÉNUATION, qui n'apparaissent nulle part dans le texte, et ne mentionnait pas la
  modulation. Le programme demande d'« associer le transport de l'information à la
  propagation entre l'émetteur et le récepteur d'une onde MODULÉE SELON UN CODE
  DONNÉ ». Section 9 réécrite autour de la modulation. La question ouverte de la
  version précédente — « la modulation est-elle au programme ? » — est donc tranchée :
  oui, c'est même le cœur de la capacité. En revanche AM et FM ne sont pas nommées :
  le principe est exigible, pas la typologie.
- INTENSITÉ ACOUSTIQUE : le programme exige d'« exploiter la relation entre la
  puissance et l'intensité acoustiques ». C'est une relation QUANTITATIVE, absente de
  la version précédente, qui mentionnait à la place le niveau en DÉCIBELS — lequel
  n'apparaît nulle part dans le texte. Le décibel a été retiré, I = P/S ajouté.
  La question ouverte « décibels quantitatifs ou qualitatifs ? » est tranchée : ni
  l'un ni l'autre, ce n'est pas la grandeur du programme.
- PERCEPTION DU SON : le texte impose « identifier et citer LES DEUX grandeurs
  influençant la perception sensorielle d'un son : amplitude et fréquence ». La
  version précédente en listait trois, en ajoutant le TIMBRE (harmoniques), qui n'est
  pas dans le texte. Retiré.
- CÉLÉRITÉ DU SON : le programme demande d'« évaluer la célérité du son dans quelques
  milieux : air, eau, métal ». Seul l'air était traité. Table ajoutée.
- DISTANCES PAR PROPAGATION : la capacité vise « avec OU SANS réflexion ». Le cas sans
  réflexion (pas de facteur 2) a été ajouté.
- SPECTRE ÉLECTROMAGNÉTIQUE : les repères pour l'enseignement précisent que « les
  valeurs limites des différentes plages [...] NE SONT PAS EXIGIBLES ». En revanche
  « citer les longueurs d'ondes perceptibles par l'œil humain » l'est. La fiche
  distingue désormais explicitement les deux, ce qui répond à la question ouverte de
  la version précédente.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La forme exacte attendue pour « la relation entre puissance et intensité
  acoustiques » (§ 6) : le texte ne l'écrit pas. I = P/S, et le cas sphérique
  I = P/(4πd²), sont la lecture la plus naturelle — à confirmer.
- Les bornes du visible (400–800 nm) : le programme demande de les citer sans donner
  de valeurs. 400–800 est l'usage ; certains manuels retiennent 380–780.
- Les ordres de grandeur de célérité (eau 1500, acier 5000 m·s⁻¹) sont des valeurs
  usuelles, non fournies par le texte.
- Le programme mentionne « mettre en œuvre un guide d'onde » comme activité
  expérimentale : vérifier si la fiche doit en dire davantage que le § 5.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### produit-scalaire  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
mathématiques », section « Géométrie dans le plan — Produit scalaire ».

⚠️ MÉTHODE : fiche construite sur l'UNION de deux extractions du PDF. Voir la note de
la fiche « energie ».

Éléments explicitement lisibles :
- « si [u] ou [v] est nul, alors [le produit scalaire est nul] »
- « Interprétation du produit scalaire en termes de PROJECTIONS ORTHOGONALES (du
  vecteur [u] ou du vecteur [v]) » — d'où la section 1c
- « Propriétés du produit scalaire : bilinéarité, symétrie »
- « Expressions, dans une base orthonormée, du produit scalaire de deux vecteurs, de
  la [norme] »
- « [Théorème d'Al-]Kashi, ÉGALITÉ DU PARALLÉLOGRAMME »
- Capacités : « Interpréter en termes de projection », « Utiliser un produit scalaire
  pour démontrer [une orthogonalité,] calculer un angle non orienté », « Utiliser un
  produit scalaire pour calculer des longueurs »
- Commentaires : « Les situations de géométrie repérée sont traitées UNIQUEMENT dans
  un repère orthonormé » ; « [Al-]Kashi est présenté comme une GÉNÉRALISATION DU
  THÉORÈME DE PYTHAGORE »
- Lien avec la physique-chimie, cité tel quel : « [le travail d'une] force
  perpendiculaire à la trajectoire est nul ou encore que le travail de la force
  résultante est la somme des travaux des forces en présence (illustration de la
  propriété de BILINÉARITÉ du produit scalaire) » — la section 7 reprend exactement
  ces deux illustrations.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'ensemble des points M tels que MA·MB = 0 (cercle de diamètre [AB]) est-il au
  programme ici ? Je ne l'ai PAS traité, faute de trace dans l'extraction — alors
  qu'il figure au programme de première générale.
- L'expression du produit scalaire avec le vecteur normal d'une droite est-elle
  attendue ?
- La formule de l'égalité du parallélogramme est nommée par le programme : est-elle
  exigible en tant que telle, ou seulement citée ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### trigonometrie  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
mathématiques », section « Géométrie dans le plan — Trigonométrie ».

Contenus explicitement lisibles dans l'extraction : « Cercle trigonométrique,
radian », « Fonctions circulaires sinus et cosinus : périodicité, variations,
parité. Valeurs remarquables en 0, [π/6, π/4, π/3, π/2] », et surtout
« Fonctions t ↦ A cos(ωt + φ) et t ↦ A sin(ωt + φ) : amplitude, périodicité, phase à
[l'origine] » — c'est ce dernier point qui distingue ce programme de celui de la voie
générale, et la section 6 lui est consacrée.

Capacités attendues lisibles : « Effectuer des conversions de degré en radian, de
radian en degré », « Résoudre, par lecture sur le cercle trigonométrique, des
équations du type cos(x) = a et sin(x) = a », « Connaître et utiliser les relations
entre sinus et cosinus des angles associés : −x ; π−x ; π+x ; π/2−x ; π/2+x ».
La liste des angles associés de la section 4 suit exactement cette énumération.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La DÉRIVÉE des fonctions sinus et cosinus est-elle au programme de première ici ?
  Je ne l'ai PAS traitée — le programme comporte une section « Analyse — Dérivées »
  distincte dont l'extraction est trop dégradée pour trancher.
- La représentation graphique des fonctions sinusoïdales (tracé complet avec
  décalage de phase) est-elle exigible, ou seulement la lecture des paramètres ?
- L'exemple du réseau électrique (325 V, 50 Hz) est un choix personnel : vérifier
  qu'il correspond aux contextes visés par le programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## premiere-techno / pc-sante-st2s

### infrarouge-securite-routiere  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 1 « Prévenir et sécuriser ».
Chapitre réunissant DEUX sections courtes du programme, extraites de
docs/programme-st2s-physique-chimie-sante.txt :
  - « Rayonnement infrarouge et détection (1re) », lignes 41-44 :
      · Domaine des ondes électromagnétiques.
      · Température d'un corps et rayonnement émis ; loi de Wien (λmax·T = constante).
      · Émission d'infrarouges par le corps humain ; systèmes de détection.
  - « Sécurité routière : vitesse et distance d'arrêt (1re) », lignes 46-48 :
      · Vitesse d'un corps ; énergie cinétique de translation Ec = ½mv².
      · Distance de freinage, distance de réaction, distance d'arrêt.
Le .txt précise (lignes 12-15) que la répartition 1re/Tale suit la progression usuelle et
reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Source à confronter au PDF officiel via WebFetch avant publication.
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production, cohérent avec le
  chapitre ST2S risques-electriques). Les chapitres securite-chimique-acide-base et
  oxydoreduction-desinfectants portent niveau: "premiere" : incohérence à harmoniser sur
  tout le parcours pc-sante-st2s avant publication.
- Constante de Wien : valeur exacte 2,898×10⁻³ m·K, arrondie à 2,9×10⁻³ m·K comme demandé.
  T(K) = θ(°C) + 273 (arrondi ; 273,15 rigoureux). Vérifier l'arrondi attendu au programme.
- Loi de Wien : le programme la cite comme relation « λmax·T = constante » à utiliser ;
  vérifier si l'expression est fournie le jour de l'épreuve ou exigible de mémoire.
- Bornes du spectre EM : ordres de grandeur usuels (visible 0,4–0,8 µm). Le programme
  n'exige probablement pas de mémoriser les bornes précises de chaque domaine : vérifier
  le niveau d'exigence (savoir situer l'IR par rapport au visible suffit sans doute).
- Corps humain : θ = 37 °C → T = 310 K → λmax ≈ 9,4 µm (IR moyen). Valeur robuste.
- Sécurité routière : t_r = 1 s est une valeur de référence standard (temps de réaction).
  Les valeurs chiffrées de d_f (route sèche) dépendent de la décélération (a ≈ 7–8 m·s⁻²) :
  présentées comme ordres de grandeur cohérents (d_f ∝ v²), NON comme valeurs officielles.
  Le message exigible est la PROPORTIONNALITÉ (d_r ∝ v, d_f ∝ v²), à confirmer au relecteur.
- Le lien travail de la force de freinage / Ec (F·d_f = ½mv²) est utilisé pour justifier
  d_f ∝ v². Vérifier que ce niveau de justification énergétique est attendu en ST2S (le
  programme peut se contenter du constat qualitatif). Le théorème de l'énergie cinétique
  n'est pas nommé dans la fiche pour rester au niveau ST2S.

Statut : brouillon, non relu.
```

### lumiere-vision-lentilles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — à confronter au relecteur (professeur de physique-chimie ST2S)

Source : programme officiel ST2S, BO spécial n°1 du 22 janvier 2019 — « Physique-chimie
pour la santé », série ST2S. Section « Lumière, vision et lentilles (1re) », Thème 2
« Analyser et diagnostiquer ». Contenu extrait de docs/programme-st2s-physique-chimie-sante.txt
(lignes 58-64). À confronter au PDF officiel education.gouv.fr / eduscol avant publication.

Programme (recopié) : propagation de la lumière ; mécanisme sommaire de la vision ;
lentilles minces convergentes/divergentes, centre optique, foyers F et F' ; distance
focale f' et vergence V = 1/f' ; formation d'une image, caractère réel/virtuel,
grandissement, principe de la loupe ; accommodation ; myopie, hypermétropie, presbytie ;
verres correcteurs ; vergence de deux lentilles accolées (V = V1 + V2).

Points à trancher / confirmer :
- CONVENTION niveau : les premiers chapitres ST2S écrits (securite-chimique-acide-base,
  oxydoreduction-desinfectants) portent niveau: "premiere" ; risques-electriques,
  infrarouge-securite-routiere et ondes-sonores-audition portent "premiere-techno".
  Cette fiche suit "premiere-techno" (comme demandé). Incohérence de parcours à harmoniser
  avant publication sur l'ensemble de pc-sante-st2s.
- CONVENTION DE SIGNE : le programme 2019 mentionne « distance focale f' et vergence
  V = 1/f' ». J'ai utilisé la convention algébrique (f' = OF' > 0 convergente, < 0 divergente)
  qui rend V = 1/f' cohérente avec les signes des verres correcteurs. Vérifier que ce niveau
  d'algébrisation (mesures algébriques OA', notation gamma) est bien celui attendu en ST2S,
  et non une simple approche qualitative + calcul de V en valeur.
- RELATION DE CONJUGAISON : volontairement NON introduite (1/OA' − 1/OA = 1/f'). Le grandissement
  est présenté comme mesure sur une construction (γ = A'B'/AB). Les exercices ne l'exigent pas.
  Confirmer que le programme ST2S ne demande PAS la relation de Descartes (a priori hors programme
  à ce niveau — approche géométrique/graphique privilégiée). Si un exercice de conjugaison est
  attendu, l'ajouter comme outil admis.
- VÉRIFS NUMÉRIQUES faites : f'=5 cm → V=20 δ ; f'=−25 cm → V=−4 δ ; V1=+8 et V2=−3 → V=+5 δ,
  f'=0,20 m ; V=+5 δ → f'=0,20 m ; γ = −6,0/2,0 = −3,0. Ordres de grandeur : punctum proximum ≈ 25 cm,
  cristallin ≈ +60 δ au repos (non chiffré dans la fiche, à confirmer si attendu).
- ANATOMIE de l'œil (cornée, iris/pupille, cristallin, rétine, cônes/bâtonnets, nerf optique) :
  présentée de façon « sommaire » comme le demande le programme. Possible recoupement avec la
  SVT / biologie et physiopathologie humaines : vérifier la profondeur attendue.
- PRESBYTIE corrigée « pour la vision de près » par verre convergent : correct. Ne pas laisser
  entendre qu'un seul verre corrige presbytie ET myopie (verres progressifs = hors programme).

Statut : brouillon, non relu.
```

### ondes-sonores-audition  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 2 « Analyser et
diagnostiquer », section « Ondes sonores et audition (1re) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 53-56 :
  - Fréquence et hauteur d'un son ; sons audibles.
  - Niveau d'intensité sonore (dB).
  - Perception d'un son par l'oreille ; risques auditifs ; amplification (compensation).
Le .txt (lignes 12-15) précise que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production). Les deux
  premiers chapitres ST2S écrits (securite-chimique-acide-base, oxydoreduction-
  desinfectants) portent niveau: "premiere" ; risques-electriques et
  infrarouge-securite-routiere portent "premiere-techno". Incohérence à trancher pour
  tout le parcours pc-sante-st2s : harmoniser sur une seule valeur avant publication.
- Formule L = 10·log(I/I0) avec I0 = 10^-12 W/m² : valeur standard du seuil d'audibilité,
  conforme à l'énoncé de la consigne. Vérifier que le programme exige bien la manipulation
  du logarithme décimal (log(10^n)=n) à ce niveau, et son articulation avec le cours de
  maths ST2S (le log est parfois vu APRÈS ce chapitre) — sinon donner log comme outil admis.
- Bornes audibles 20 Hz – 20 kHz : ordre de grandeur standard (oreille jeune). À valider
  comme valeurs à connaître (et non seulement ordres de grandeur).
- Seuils de risque : 85 dB / 8 h et règle « +3 dB → durée /2 » = valeurs de référence en
  santé au travail (INRS / Code du travail). Le programme cite « risques auditifs » sans
  forcément chiffrer : confirmer le niveau d'exigence attendu (valeurs précises vs principe).
  Seuil de douleur ≈ 120 dB (I = 1 W/m²).
- Anatomie de l'oreille (externe/moyenne/interne, osselets, cochlée, cellules ciliées) :
  présentée de façon simplifiée. Vérifier la profondeur attendue par le programme ST2S
  (possible recoupement avec la SVT / biologie et physiopathologie humaines).
- Prothèse auditive (micro + ampli + haut-parleur) et « amplification » comme compensation :
  conforme à la consigne. Confirmer qu'aucune notion supplémentaire (implant cochléaire)
  n'est exigée au programme de Première.
- Vérifs numériques faites : 60 dB ↔ 10^-6 W/m² ; 100 dB ↔ 10^-2 W/m² ; 120 dB ↔ 1 W/m² ;
  ×10 sur I → +10 dB ; ×2 sur I → +10·log(2) ≈ 3,01 dB.

Statut : brouillon, non relu.
```

### oxydoreduction-desinfectants  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de PHYSIQUE-CHIMIE POUR LA SANTÉ, série ST2S, BO spécial n°1 du
22 janvier 2019 (réforme du lycée). Section « Oxydoréduction : désinfectants et antiseptiques
(1re) », thème 1 « Prévenir et sécuriser ».
Fichier de travail : docs/programme-st2s-physique-chimie-sante.txt (lignes 29-32), extrait via
WebFetch depuis le PDF officiel education.gouv.fr (https://www.education.gouv.fr/media/25040/download)
et eduscol ST2S. À CONFRONTER AU PDF OFFICIEL avant publication.

Notions couvertes, telles que listées par le programme :
- oxydant, réducteur ; couple oxydant/réducteur ; demi-équation d'oxydoréduction ;
- réaction d'oxydoréduction ; propriétés oxydantes (eau de Javel, eau oxygénée) ;
- action antiseptique qualitative d'un oxydant sur un micro-organisme ;
- dilution d'une solution ; règles de sécurité (produits oxydants).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le champ YAML « niveau » vaut ici « premiere-techno » (consigne explicite de production).
  ATTENTION : le chapitre voisin « securite-chimique-acide-base » du MÊME dossier utilise
  « niveau: premiere ». Incohérence à trancher par le relecteur : soit aligner ce chapitre sur
  « premiere », soit migrer l'autre vers « premiere-techno ». Le segment de chemin
  « premiere-techno/pc-sante-st2s » est identique dans les deux cas.
- Les demi-équations sont écrites en MILIEU ACIDE (H+). Le programme ST2S 1re attend-il la
  méthode complète d'équilibrage (O par H2O, H par H+, charges par e-), ou seulement des
  demi-équations fournies à exploiter ? J'ai enseigné la méthode ; à confirmer selon le niveau.
- Couples retenus : Cu2+/Cu, I2/I-, H2O2/H2O, ClO-/Cl-, Fe3+/Fe2+. Vérifier lesquels sont
  explicitement au programme (les deux oxydants cités par le BO sont bien eau de Javel = ClO-
  et eau oxygénée = H2O2).
- La demi-équation ClO-/Cl- retenue est : ClO- + 2H+ + 2e- = Cl- + H2O (équilibrée en éléments
  et charges, vérifiée). Certains manuels passent par ClO-/Cl2 ou HClO ; à harmoniser avec le
  manuel de la classe.
- La notion d'eau oxygénée « en volumes » est mentionnée qualitativement ; est-elle exigible ?
- Distinction antiseptique (vivant) / désinfectant (surfaces) : standard, mais vérifier le
  vocabulaire attendu par le programme (« action antiseptique » y figure explicitement).
- Concentrations et volumes des exemples/exercices choisis pour tomber « ronds » ; valeurs
  pédagogiques, pas des données réelles de produits commerciaux.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### risques-electriques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 1 « Prévenir et
sécuriser », section « Risques électriques dans l'habitat (1re) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 35-39 :
  - Tension alternative sinusoïdale : période, fréquence, valeurs max/min, valeur efficace.
  - Intensité du courant électrique.
  - Risques électriques ; électrisation et électrocution.
  - Prise de courant : phase, neutre, mise à la terre ; sécurité.
Le .txt précise (lignes 12-15) que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production). Les deux
  autres chapitres ST2S déjà écrits (securite-chimique-acide-base, oxydoreduction-
  desinfectants) portent niveau: "premiere". Incohérence à trancher pour tout le
  parcours pc-sante-st2s : harmoniser sur une seule valeur avant publication.
- La consigne « valeur efficace » est traitée par U = Umax/√2. Le programme cite la
  notion sans exiger de démonstration : l'expression est donnée comme relation à
  connaître/utiliser. À confirmer que la relation figure bien parmi les capacités
  exigibles (et non seulement en note).
- Les SEUILS d'intensité (1, 10, 30, 100 mA) et les effets associés sont des valeurs
  de référence standard en sécurité électrique. Le libellé exact du programme ne
  chiffre pas forcément ces seuils : vérifier le niveau d'exigence attendu (ordres de
  grandeur vs valeurs précises) et l'accord avec les documents d'accompagnement eduscol.
- Valeur du secteur : U = 230 V, f = 50 Hz, Umax ≈ 325 V (230×√2 = 325,27 V).
- Le rôle exact « courant de défaut → terre → détecté par le différentiel » est
  présenté de façon simplifiée (couplage terre + DDR 30 mA) : à valider par un
  professeur pour la rigueur du mécanisme.
- Couleurs des fils (phase marron/rouge, neutre bleu, terre vert-jaune) : normes NF ;
  vérifier qu'on reste dans l'attendu du programme (santé/sécurité domestique).

Statut : brouillon, non relu.
```

### securite-chimique-acide-base  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de PHYSIQUE-CHIMIE POUR LA SANTÉ, série ST2S, BO spécial n°1 du
22 janvier 2019 (réforme du lycée). Section « Sécurité chimique : acides, bases et pH (1re) »,
thème 1 « Prévenir et sécuriser ».
Fichier de travail : docs/programme-st2s-physique-chimie-sante.txt (lignes 21-27), extrait via
WebFetch depuis le PDF officiel education.gouv.fr (https://www.education.gouv.fr/media/25040/download)
et eduscol ST2S. À CONFRONTER AU PDF OFFICIEL avant publication.

Notions couvertes, telles que listées par le programme :
- n = m/M ; soluté/solvant/solution ; Cm et C ; pH et [H3O+]=10^(-pH) ;
  acides/bases, couples, réaction acido-basique, échelles d'acidité ;
  autoprotolyse, produit ionique, [H3O+] et [HO-] ; pictogrammes et règles de sécurité.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le champ YAML « niveau » est mis à « premiere » (et non « premiere-techno ») pour rester
  homogène avec tous les autres chapitres du dépôt (voie technologique) ; le segment de chemin
  reste bien « premiere-techno/pc-sante-st2s ». À valider par le relecteur si une convention
  différente est souhaitée.
- La définition de Brønsted (acide/base = céder/capter H+) est-elle explicitement au programme
  ST2S 1re, ou seulement la notion qualitative de couple ? J'ai retenu Brønsted, standard au lycée.
- Le logarithme : le programme demande-t-il pH = -log[H3O+] (fonction log), ou seulement la
  relation directe [H3O+] = 10^(-pH) ? Les deux sont données ; à confirmer selon le niveau de maths ST2S.
- Le produit ionique est-il exigible avec sa valeur numérique (1,0e-14 à 25 °C), ou seulement
  qualitativement ? J'ai donné la valeur, usuelle mais à confirmer pour la série.
- Vérifier les valeurs de pH « milieux biologiques » citées (sang 7,4 ; suc gastrique ~2) —
  ordres de grandeur usuels, contextes ST2S, mais à valider.
- Masses molaires atomiques utilisées : H 1,0 ; C 12,0 ; N 14,0 ; O 16,0 ; Na 23,0 ; Cl 35,5 g·mol⁻¹.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## premiere-techno / spcl-stl

### analyses-spectroscopies-dosages  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « Sciences physiques et chimiques en laboratoire » (SPCL),
série STL, classe de première — BO du 22 janvier 2019.
Extrait : docs/programme-stl-spcl.txt, section « Analyses physico-chimiques :
spectroscopies et dosages (1re) » (ligne 34), qui liste :
  - Tests d'identification ; propriétés physiques des espèces.
  - Spectroscopies UV-visible et infrarouge (identification de groupes).
  - Dosage par étalonnage spectrophotométrique (loi de Beer-Lambert).
  - Dosage direct par titrage.
Le programme de référence est très synthétique ; le contenu détaillé (valeurs de bandes IR,
étoile des couleurs, protocole d'étalonnage) a été rédigé à partir des attendus usuels du
niveau. À CONFRONTER AU PDF/BO OFFICIEL par un professeur avant publication (le .txt fourni
ne donne que les intitulés, pas le détail des capacités exigibles).

⚠️ POINTS À CONFRONTER AU RELECTEUR :
- Les valeurs de bandes IR (tableau §3) sont des ordres de grandeur usuels ; vérifier
  qu'elles correspondent à la table de référence utilisée en STL SPCL.
- Le coefficient ε est-il nommé « coefficient d'absorption molaire » ou « absorptivité
  molaire » dans le référentiel STL ? Unité L·mol⁻¹·cm⁻¹ retenue.
- Le titrage : le programme dit « dosage direct par titrage » sans préciser suivi (coloré /
  pH-métrique / conductimétrique). J'ai présenté l'équivalence de façon générale sans fixer
  le type de suivi. À valider.
- Faut-il traiter le titrage colorimétrique par un exemple d'oxydoréduction (permanganate)
  plutôt qu'acide-base ? Choix acide-base fait pour rester sur du 1–1 simple.
- λmax de CuSO4 (~800 nm, proche IR) : exemple correct mais à la limite du visible ;
  un relecteur préférera peut-être un exemple pleinement visible.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### appareil-photo-image-numerique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe de première.
BO du 22 janvier 2019 (BO spécial n° 1 du 22 janvier 2019 ; repris au BO spécial n° 8 du
25 juillet 2019).
Fichier de référence interne : docs/programme-stl-spcl.txt, section
« Appareil photo numérique et image numérique (1re) » :
  - Modèle de l'appareil : nombre d'ouverture, temps de pose, profondeur de champ.
  - Capteur CCD/CMOS : sensibilité, résolution ; pixel et ses dimensions.
  - Codage RVB, niveaux de gris ; capacité mémoire, formats ; débit binaire.
Extrait via WebFetch depuis le PDF officiel education.gouv.fr :
« Programme de sciences physiques et chimiques en laboratoire de première STL-251820.pdf ».
À confronter au PDF officiel avant publication.

Prérequis cités conformément à la consigne :
  - « Image : photographie et lentilles » (SPCL, 1re) — objectif = lentille convergente,
    capteur = écran, image réelle sur écran, mise au point (relation de conjugaison).
  - « Image : couleur et vision » (SPCL, 1re) — modèle colorimétrique RVB.

CONVENTIONS RETENUES (à confronter au PDF et à l'usage de l'équipe) :
- 1 octet = 8 bits (ferme).
- Unités de taille : convention DÉCIMALE (SI) 1 ko = 10^3 o, 1 Mo = 10^6 o, 1 Go = 10^9 o,
  employée pour tous les calculs de poids/débit. La convention binaire (1 kio = 1024 o,
  1 Mio = 2^20 o) est signalée comme piège (§9). Vérifier laquelle est attendue dans les sujets
  et TP de l'établissement — les manuels hésitent encore.
- Débit binaire donné en bit/s (avec conversion octet → bit par ×8).
- Profondeur de couleur RVB = 24 bits = 3 octets/pixel ; niveaux de gris = 8 bits = 1 octet.

À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Niveau d'exigence sur le nombre d'ouverture : la relation lumière ∝ 1/N^2 et la notion de
  « stop » (facteur √2) sont-elles attendues, ou seulement N = f'/D et le sens (grand N = peu
  de lumière) ?
- Profondeur de champ : traitement uniquement qualitatif (aucune formule au programme), à
  confirmer ; dépendance à f' et à la distance présentée sans calcul.
- Sensibilité ISO (§5) : présentée comme troisième réglage de l'exposition ; vérifier si le
  « triangle d'exposition » est explicitement au programme ou seulement la notion de sensibilité.
- Distinction définition / résolution : formulation à valider (certaines ressources emploient
  « résolution » pour la définition — usage à trancher avec l'équipe).
- Valeurs numériques et arrondis des exemples (poids 6,2 Mo ; débit vidéo 1,24 Gbit/s ;
  taille de pixel 6,0 µm) recalculés et vérifiés ; homogénéité des chiffres significatifs à
  confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### image-couleur-vision  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe de première.
BO spécial n° 1 du 22 janvier 2019 (et BO spécial n° 8 du 25 juillet 2019).
Fichier de référence interne : docs/programme-stl-spcl.txt, section « Image : couleur et
vision (1re) » (modèle optique de l'œil ; vision des couleurs, daltonisme ; synthèse additive
RVB et soustractive CMJ, filtres ; modèle colorimétrique RVB).
Extrait via WebFetch depuis le PDF officiel education.gouv.fr :
Programme de sciences physiques et chimiques en laboratoire de première STL-251820.pdf.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Longueurs d'onde de sensibilité des cônes (S≈420, M≈530, L≈560 nm) : valeurs communément
  admises ; le programme exige-t-il des valeurs chiffrées ou seulement l'ordre S<M<L ?
- Bornes du domaine visible : j'ai retenu ~400–800 nm (cohérent avec le programme de Seconde).
  Certains manuels écrivent 380–780 nm. À harmoniser avec la convention retenue par l'équipe.
- Le codage RVB sur 8 bits (0–255) et le code hexadécimal figurent explicitement au programme
  de première SPCL (module « Image ») — confirmer le niveau d'exigence sur la conversion
  décimal↔hexadécimal (méthode par division, ou simple lecture ?).
- La notion d'accommodation du cristallin : incluse ici comme lien avec le chapitre
  « Photographie et lentilles ». Vérifier qu'elle relève bien de ce module et n'empiète pas.
- Prévoir le lien avec « Appareil photo numérique et image numérique » (codage RVB, niveaux
  de gris) pour éviter les redites entre les deux chapitres du thème Image.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### image-photographie-lentilles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe de première.
BO spécial n° 1 du 22 janvier 2019.
Fichier de référence interne : docs/programme-stl-spcl.txt, section « Image : photographie et
lentilles (1re) » :
  - Chambre noire, sténopé ; lentilles minces convergentes.
  - Foyers, distance focale, focométrie ; vergence.
  - Relation de conjugaison et grandissement ; image réelle/virtuelle ; loupe.
Extrait via WebFetch depuis le PDF officiel education.gouv.fr :
Programme de sciences physiques et chimiques en laboratoire de première STL-251820.pdf.

Prérequis « Image : couleur et vision » cité (modèle optique de l'œil : cristallin = lentille,
rétine = écran), conformément à la consigne (chapitre du même parcours spcl-stl).

CONVENTIONS DE SIGNES RETENUES (à confronter au PDF et à l'usage de l'équipe) :
- Axe optique orienté dans le sens de propagation de la lumière (gauche → droite).
- Origine des mesures algébriques : centre optique O.
- Objet réel : OA < 0 ; image réelle : OA' > 0 ; image virtuelle : OA' < 0.
- f' = OF' > 0 (convergente) ; OF = -f'.
- Relation de conjugaison de Descartes (origine O) : 1/OA' - 1/OA = 1/f'.
- Grandissement : gamma = OA'/OA = A'B'/AB.
Ces conventions sont les plus répandues au lycée ; vérifier qu'elles correspondent à celles
adoptées dans les TP et sujets d'examen de l'établissement (certaines ressources notent la
conjugaison avec origine au foyer — Newton — non exigible ici).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Niveau d'exigence sur la focométrie : les trois méthodes (objet à l'infini, conjugaison,
  autocollimation) sont-elles toutes attendues, ou seulement le principe de la mesure de f' ?
- Le sténopé : la relation A'B'/AB = d'/d (Thalès) est-elle explicitement au programme, ou
  seulement la description qualitative (image réelle renversée, compromis netteté/luminosité) ?
- Vérifier les valeurs numériques et arrondis des exemples (conjugaison, loupe) et l'homogénéité
  des chiffres significatifs.
- Lien avec « Appareil photo numérique et image numérique » (mise au point, capteur = écran) :
  évoqué en §8 pour préparer le chapitre suivant, sans empiéter sur nombre d'ouverture / temps
  de pose qui y sont traités.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### instrumentation-chaine-mesure  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel SPCL, série STL, classe de première — BO du 22 janvier 2019
(docs/programme-stl-spcl.txt, section « Instrumentation : chaîne de mesure (1re) », lignes 55-59) :
« Caractéristiques d'un instrument : résolution, étendue, temps de réponse ; chaîne de mesure :
capteur, conditionneur, caractéristique de transfert ; CAN : quantum, résolution ; chaîne en
tout ou rien : alerte, régulation, hystérésis. »
Extraction via WebFetch depuis le PDF officiel education.gouv.fr (spe260_annexe... / première STL),
à CONFRONTER au PDF avant publication.

CONVENTIONS DE CALCUL RETENUES (à valider par le relecteur) :
- Quantum q = calibre / 2^n, conformément à l'intitulé fourni. Certaines ressources écrivent
  q = étendue / (2^n − 1) (nombre d'intervalles). J'ai suivi calibre/2^n de bout en bout, y
  compris dans les exercices. À trancher avec l'équipe pour homogénéité inter-chapitres.
- Valeur numérique N = partie entière de U_e / q (troncature, pas arrondi). Convention courante ;
  à confirmer si l'épreuve attend un arrondi.
- « calibre » = étendue de tension d'entrée du CAN ; supposé de 0 à V_max (unipolaire) dans tous
  les exemples et exercices. Aucun CAN bipolaire n'est traité.

À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le temps de réponse est-il défini quantitativement au programme (t_90 / t_95 %) ou seulement
  qualitativement ? J'ai retenu l'approche qualitative.
- « précision » : le programme distingue-t-il explicitement justesse/fidélité dans CE module, ou
  seulement dans « Mesure et incertitudes » ? J'ai fait le lien avec le chapitre incertitudes.
- L'écriture U = S·G + U0 de la caractéristique linéaire est-elle attendue, ou seulement la
  lecture graphique de la pente ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel. Statut : brouillon, non relu.
```

### mesure-incertitudes-labo  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SCIENCES PHYSIQUES ET CHIMIQUES EN LABORATOIRE (SPCL),
enseignement de spécialité de la série STL, classe de première.
Fichier : docs/programme-stl-spcl.txt, section « Mesure et incertitudes en laboratoire
(1re) » :
  - Sources d'erreurs et variabilité ; justesse et fidélité.
  - Évaluation des incertitudes-types (type A statistique, type B).
  - Expression d'un résultat de mesure avec son incertitude et ses chiffres significatifs.
Le fichier renvoie aux PDF officiels education.gouv.fr (Première SPCL). Le fichier source
cite le BO spécial n°8 du 25 juillet 2019 ET le BO spécial n°1 du 22 janvier 2019.
Extraits via WebFetch, À CONFRONTER AUX PDF OFFICIELS avant publication.

Champ « programme » de l'en-tête : renseigné à l'identique de la consigne de production
(« BO du 22 janvier 2019 — SPCL, série STL, classe de première »).
⚠️ À FAIRE VÉRIFIER AU RELECTEUR : l'intitulé exact du BO à afficher (22 janvier 2019 vs
25 juillet 2019) — même remarque que pour le chapitre « syntheses-extraction-purification ».

POINTS À CONFRONTER AU RELECTEUR / CONVENTIONS DE MÉTROLOGIE :
- CONVENTION TYPE B (POINT LE PLUS SENSIBLE). La consigne de production impose
  explicitement les formules u = graduation/√3 et u = tolérance/√3, retenues telles
  quelles dans la fiche. ATTENTION : les conventions varient selon les manuels/référentiels.
  Pour une RÉSOLUTION (demi-largeur = graduation/2), la loi uniforme rigoureuse donne
  plutôt u = graduation/(2√3) = graduation/√12. La formule u = graduation/√3 retenue ici
  suppose que « graduation » désigne la demi-largeur de l'intervalle de doute (loi
  rectangulaire de demi-largeur = graduation). À FAIRE TRANCHER par le relecteur selon le
  référentiel STL retenu par l'établissement / le PDF officiel. Les exemples chiffrés
  (burette 0,1 mL → u ≈ 0,06 mL) suivent la convention de la consigne.
- Pour la TOLÉRANCE (verrerie jaugée ± t), u = t/√3 fait l'hypothèse d'une loi uniforme de
  demi-largeur t : convention standard et cohérente avec la consigne.
- TYPE A : u(x̄) = s/√n avec s = écart-type expérimental (σ_{n-1}). Convention GUM/lycée
  standard. L'exemple (5 mesures, s ≈ 0,24 s, u ≈ 0,11 s) a été recalculé à la main :
  moyenne 20,12 s ; Σ(écarts²) = 0,228 ; s = √(0,228/4) = 0,239 s ; u = 0,239/√5 = 0,107 s.
- INCERTITUDE COMPOSÉE : formules de propagation en quadrature (somme → absolues ;
  produit/quotient → relatives). Présentées « formule fournie » conformément à la
  consigne ; au niveau première STL elles sont données, non démontrées.
- Facteur d'élargissement / intervalle de confiance : volontairement NON abordé (hors
  programme de première ; « valeur ± u » = incertitude-type, k=1). La phrase de lecture au
  §9 (« très probablement entre… ») reste qualitative pour cette raison. À valider.
- Arrondi de l'incertitude à 1 c.s. PAR EXCÈS et valeur au même rang : convention
  pédagogique répandue ; certains référentiels tolèrent 2 c.s. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### securite-chimie-verte  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, spécialité SPCL, série STL, classe de
première, BO du 22 janvier 2019. Section « Sécurité au laboratoire et chimie verte
(1re) » du fichier docs/programme-stl-spcl.txt (lignes 24-27) :
- Règles de laboratoire ; équipements de protection (EPI).
- Pictogrammes, fiches de données de sécurité (FDS), règlement CLP, stockage.
- Chimie verte : principes, économie d'atomes, impact environnemental.
Extrait à confronter au PDF officiel eduscol/education.gouv.fr avant publication.

À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les 9 pictogrammes SGH/CLP et leurs intitulés : vérifier la formulation exacte
  attendue (SGH08 « danger pour la santé » / CMR ; SGH05 corrosif peau ET métaux).
- Les 12 principes de la chimie verte sont donnés « en substance » (reformulés) : le
  programme demande-t-il de les connaître par cœur, ou seulement les grands axes
  (prévention, économie d'atomes, solvants, énergie) ? J'ai supposé « en substance ».
- Économie d'atomes : la formule attendue est-elle bien M(produit)/ΣM(réactifs)×100 ?
  Certains manuels pondèrent par les coefficients stœchiométriques — à confirmer.
  Vérifs numériques : EA hydratation éthène = 46/46 = 100 %. EA élimination =
  28/149 = 18,8 % ≈ 19 %. M(C2H5Br)=2·12+5·1+80=109 ; M(NaOH)=40 ; somme 149.
- Facteur E : E = m_déchets/m_produit, sans unité. Exemple élimination :
  déchets NaBr(103)+H2O(18)=121 ; produit 28 ; E=121/28=4,32. OK.
- La FDS « 16 rubriques » : nombre normalisé (règlement REACH) — à confirmer au niveau
  première STL (parfois seulement évoqué).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### syntheses-extraction-purification  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SCIENCES PHYSIQUES ET CHIMIQUES EN LABORATOIRE (SPCL),
enseignement de spécialité de la série STL, classe de première.
Fichier : docs/programme-stl-spcl.txt, section « Synthèses chimiques : extraction et
purification (1re) » :
  - Synthèse d'un composé organique ; réactif limitant, rendement.
  - Extraction liquide-liquide, filtration, distillation, recristallisation.
  - Contrôles de pureté : chromatographie sur couche mince (CCM), température de fusion.
Le fichier renvoie aux PDF officiels education.gouv.fr (Première SPCL, BO spécial n°8 du
25 juillet 2019, et BO spécial n°1 du 22 janvier 2019). Extraits via WebFetch, À
CONFRONTER AUX PDF OFFICIELS avant publication.

Champ « programme » de l'en-tête : renseigné à l'identique de la consigne de production
(« BO du 22 janvier 2019 — SPCL, série STL, classe de première »). ⚠️ À FAIRE VÉRIFIER
AU RELECTEUR : le fichier source cite pour la Première SPCL le BO spécial n°8 du 25
juillet 2019 (le 22 janvier 2019 étant l'autre référence mentionnée). L'intitulé exact
du BO à afficher est à confirmer sur le PDF officiel.

POINTS À CONFRONTER AU RELECTEUR / PROGRAMME DÉTAILLÉ :
- Formule du rendement : la consigne et l'usage STL retiennent η = n_obtenu / n_théorique
  (en quantités de matière). Certains énoncés le définissent sur les masses,
  η = m_obtenue / m_théorique ; les deux coïncident quand il s'agit du même produit
  (même M). La fiche a choisi la définition en quantités de matière, la plus générale.
  À valider comme formulation attendue.
- Seuils chiffrés « rendement de TP entre 60 et 90 % » : ordre de grandeur pédagogique,
  pas une donnée du programme.
- Densité de la phase organique « en bas / en haut » : illustré avec dichlorométhane
  (d≈1,33) et éther/cyclohexane (d<1). Valeurs de densité usuelles, à vérifier si des
  valeurs officielles sont imposées.
- Le seuil « une impureté abaisse et étale θ_fus » est un fait de laboratoire classique,
  non chiffré ici : conforme au niveau première.
- Détails de gestes (Büchner, Vigreux, banc Kofler, révélation UV) : matériel usuel de
  laboratoire STL, cohérent avec le contexte « contrôles de pureté » du programme, mais
  la liste précise du matériel exigible est à confirmer sur le PDF.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# premiere

## premiere / maths-enseignement-scientifique

### information-chiffree  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, « Programme de mathématiques intégré
à l'enseignement scientifique en classe de première générale »
(docs/programme-prem_gen_non_spe-2026.pdf), partie « Analyse de l'information chiffrée ».

Le programme insiste explicitement sur le développement de l'ESPRIT CRITIQUE et sur
l'ancrage dans des problématiques d'actualité (développement durable, changement
climatique, biodiversité, économie, démographie, santé publique). La section 7 traduit
cette intention.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des « Automatismes » : le programme comporte une rubrique dédiée
  dont l'extraction est trop dégradée pour être exploitée. Vérifier quelles capacités
  de calcul mental sont explicitement exigibles.
- L'évolution moyenne (racine n-ième) est-elle au programme de ce parcours, ou
  réservée à la spécialité ? Je l'ai incluse car classique, à confirmer.
- Les indices (base 100) sont-ils exigibles ? Je ne les ai PAS traités.
- Le programme mentionne l'usage du TABLEUR : vérifier s'il est attendu ici ou
  seulement dans la partie statistique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### phenomenes-aleatoires  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques intégrées à
l'enseignement scientifique, première générale, partie « Phénomènes aléatoires ».

Capacités attendues explicitement lisibles dans l'extraction :
« Calculer des probabilités conditionnelles à l'aide d'un TABLEAU CROISÉ D'EFFECTIFS
ou d'un ARBRE PONDÉRÉ » et « Représenter par un arbre de probabilités la répétition
de n épreuves aléatoires identiques et indépendantes de Bernoulli avec n ≤ 4 ».
Le tableau croisé est donc mis en avant à parité avec l'arbre — c'est une différence
notable avec le programme de spécialité, où l'arbre domine. La section 2 reflète ce
choix.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le vocabulaire attendu : le programme parle-t-il de « probabilités totales » ou
  reste-t-il sur une formulation par l'arbre ?
- La notation P_A(B) est-elle celle du programme, ou utilise-t-il P(B|A) ?
- Le paradoxe du dépistage (section 2) est un exemple que j'ai choisi : vérifier
  qu'il correspond bien à l'esprit du programme, qui privilégie les problématiques
  de santé publique et l'esprit critique.
- L'indépendance de deux VARIABLES ALÉATOIRES est-elle au programme, ou seulement
  celle de deux événements ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### phenomenes-evolution  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques intégrées à
l'enseignement scientifique, première générale, partie « Phénomènes d'évolution,
modélisation par des fonctions ».

Les applications de la section 5 sont TOUTES explicitement nommées dans le programme,
telles que lues dans l'extraction :
- « Modélisation de l'offre et de la demande par des fonctions affines, point
  d'équilibre » (Économie)
- « Modélisation du barème de l'impôt sur le revenu par une fonction affine par
  morceaux (taux marginal, taux moyen) » (EMC)
- « Modèle linéaire de l'évolution du niveau moyen des océans » (Sciences de la Terre)
- « Analyse comparée de l'accroissement d'une population et des ressources
  alimentaires (modèle de Malthus) »
- « Nombre de noyaux radioactifs présents dans un échantillon au bout d'une fraction
  de demi-vie. Applications à la médecine et à la datation par le carbone 14 »
- « Taux de reproduction R0 d'un virus lors d'une épidémie » (Sciences de la vie)
- « Modélisation simplifiée de la propagation d'une rumeur (cascades verticales) »
  (Sciences sociales) — NON TRAITÉE dans cette fiche, à ajouter si le relecteur
  la juge exigible.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La fonction exponentielle est-elle introduite formellement dans ce parcours, ou
  seulement à travers les suites géométriques ? J'ai retenu une écriture q^n, plus
  proche de l'esprit du programme que la notation e^x. À CONFIRMER — c'est le point
  de périmètre le plus important de cette fiche.
- Le second degré : quelle profondeur est attendue ? Discriminant et racines, ou
  seulement le sommet et l'optimum ? J'ai retenu la seconde lecture.
- La propagation d'une rumeur (cascades verticales) est absente de cette fiche.
- Le programme mentionne « Fonctions » à la fin de l'extraction sans que le contexte
  soit lisible : vérifier qu'aucune sous-partie n'a été omise.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### statistiques-bivariees  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques intégrées à
l'enseignement scientifique, première générale, partie « Analyse de l'information
chiffrée » — sous-parties « Analyse statistique de deux caractères qualitatifs »
et « Analyse statistique de deux caractères quantitatifs ».

Éléments explicitement lisibles dans l'extraction : tableau croisé d'effectifs,
diagrammes en barres et circulaires, nuage de points, ajustement affine, point moyen,
interpolation, extrapolation, usage du TABLEUR, et la mention « Plusieurs ajustements
sont proposés (au jugé, droite de Mayer, …) » — d'où la section 4.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La méthode des MOINDRES CARRÉS est-elle exigible (avec calculatrice) ou seulement
  citée ? L'extraction est coupée juste après « droite de Mayer ».
- Le COEFFICIENT DE CORRÉLATION est-il au programme ? Je ne l'ai PAS introduit,
  faute de trace dans l'extraction — point de périmètre à trancher.
- L'usage du tableur est mentionné dans les capacités attendues : faut-il détailler
  les manipulations (nuage de points, courbe de tendance) ?
- La distinction corrélation/causalité est-elle formalisée dans le texte, ou
  seulement implicite dans l'objectif d'esprit critique ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## premiere / maths-specialite

### derivation  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale,
section « Dérivation » (docs/programme-premiere-specialite-maths-2026.txt, ligne 1830).

L'extraction PDF est fortement dégradée sur cette section : les formules éclatent en fragments
à cause des polices mathématiques. La STRUCTURE est fiable (point de vue local, limite des
sécantes, pente, tangente, approximation affine) mais les formulations exactes ne le sont pas.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des dérivées usuelles exigibles (exp est-elle traitée ici ou seulement
  dans le chapitre « Fonction exponentielle » ?)
- La dérivée de x ↦ f(ax+b) est-elle au programme de première, ou réservée à la terminale ?
- Les démonstrations exigibles (probablement : dérivée de x², de 1/x, formule du produit)
- Le lien dérivée/variations est traité dans le chapitre séparé « Variations et courbes
  représentatives des fonctions » — vérifier qu'il n'y a pas de recouvrement à arbitrer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonction-exponentielle  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale,
section « Fonction exponentielle » (ligne 2155 du .txt extrait).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La DÉFINITION retenue par le nouveau programme. Deux entrées coexistent selon les
  programmes : (a) l'unique fonction dérivable telle que f' = f et f(0) = 1, (b) le
  prolongement continu des suites géométriques. J'ai retenu (a), qui est l'entrée classique
  en première — à confirmer, car le programme insiste ailleurs sur le lien avec les suites
  géométriques, ce qui pourrait signaler l'entrée (b).
- La relation fonctionnelle e^(a+b) = e^a · e^b est-elle démontrée (démonstration exigible)
  ou admise ?
- La dérivée de e^u en toute généralité est-elle au programme de première, ou seulement
  e^(ax+b) ? J'ai mis les deux, en mettant e^(ax+b) en évidence.
- La notion de limite en ±∞ n'est traitée qu'intuitivement en première : ne pas formaliser.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### geometrie-reperee  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Géométrie repérée » (ligne 2585 du .txt extrait). Le programme précise en tête :
« Dans cette section, le plan est rapporté à un repère orthonormé. »

Éléments lisibles : vecteur normal à une droite, le vecteur de coordonnées (a,b) normal à
ax+by+c=0, équation de cercle, reconnaître une équation de cercle et déterminer centre et
rayon, utiliser un repère pour étudier une configuration. Approfondissement possible mentionné :
intersection d'une parabole y = ax²+bx+c avec une droite parallèle à un axe.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La distance d'un point à une droite est-elle au programme de première ? Je ne l'ai PAS
  incluse, l'extraction ne la mentionne pas — à vérifier car c'est un classique.
- L'approfondissement « intersection parabole / droite parallèle à un axe » n'est pas traité,
  à ajouter si le choix pédagogique le retient.
- Les démonstrations exigibles éventuelles de cette section.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### probabilites-conditionnelles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Probabilités conditionnelles et indépendance » (ligne 2811 du .txt extrait).

Éléments lisibles : indépendance de deux évènements, formule des probabilités totales,
succession de deux épreuves indépendantes avec représentation par arbre ou tableau,
et « pour n ≤ 4, répétition de n épreuves de Bernoulli indépendantes et identiques ».
La limite n ≤ 4 est explicite dans le programme — je l'ai respectée et signalée.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction a perdu une partie du bloc « Contenus » (fragment « è nements ). » avant la
  formule des probabilités totales) : vérifier qu'aucune notion n'est omise, notamment
  l'indépendance de deux variables aléatoires.
- La loi binomiale n'est PAS mentionnée pour la première (elle relève de la terminale) :
  je ne l'ai pas introduite, mais la limite n ≤ 4 le confirme indirectement — à valider.
- Le coefficient binomial n'est donc pas utilisé : les chemins se comptent à la main sur
  l'arbre. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### produit-scalaire  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Calcul vectoriel et produit scalaire » (ligne 2500 du .txt extrait).

Éléments explicitement lisibles dans l'extraction : bilinéarité, symétrie, expression du
produit scalaire et de la norme en base orthonormée, critère d'orthogonalité, expression des
coordonnées en termes de produits scalaires avec les vecteurs de la base, développement de
‖u+v‖², théorème d'Al-Kashi. Deux DÉMONSTRATIONS exigibles sont nommées : Al-Kashi avec le
produit scalaire, et l'ensemble des points M tels que MA·MB = 0. Approfondissement possible
mentionné : la loi des sinus.
Le programme précise aussi : « Les élèves doivent conserver une pratique du calcul vectoriel
en géométrie non repérée. »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'expression des coordonnées via les produits scalaires avec les vecteurs de la base
  (x = u·i et y = u·j) est au programme — je ne l'ai pas développée, à ajouter.
- La définition retenue en premier par le programme (normes et angle, ou coordonnées ?)
- La loi des sinus est en approfondissement possible : à ajouter ou non selon le choix
  pédagogique.
- Les démonstrations que j'esquisse doivent être rédigées en entier pour être exploitables.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### second-degre  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale
(docs/programme-premiere-specialite-maths-2026.pdf), section « Équations, fonctions polynômes
du second degré ».

Rédaction 100 % originale à partir du programme officiel — aucun emprunt à un manuel.

⚠️ À FAIRE VÉRIFIER PAR UN PROFESSEUR DE MATHÉMATIQUES avant publication :
- Les §6 (forme canonique) et §5 (tableau de signes) ne sont pas explicitement cités dans
  l'extrait du programme que j'ai pu lire ; ils sont classiques et nécessaires, mais confirmer
  qu'ils sont bien attendus en première spécialité dans le nouveau texte.
- Le mot « discriminant » n'apparaît pas dans le programme extrait. Confirmer en ouvrant le PDF
  que ce n'est pas un artefact d'extraction.
- Vérifier qu'aucune démonstration exigible n'est omise (le programme mentionne une section
  « Démonstration » que mon extraction n'a pas restituée entièrement).

Statut : brouillon, non relu.
```

### suites-numeriques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale,
section « Suites numériques, modèles discrets » (ligne 1275 du .txt extrait).

Éléments du programme lisibles dans l'extraction : modes de génération (explicite, récurrence,
algorithme, motifs géométriques), notations, suites arithmétiques (accroissements constants,
lien fonctions affines, calcul de 1+2+...+n), suites géométriques (rapport constant, lien
fonction exponentielle, calcul de 1+q+...+q^n), introduction intuitive de la limite finie ou
infinie sur des exemples.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les capacités attendues exactes (l'extraction s'interrompt en milieu de phrase)
- Les démonstrations exigibles (probablement la somme des n premiers entiers, et la somme
  géométrique)
- Le programme mentionne aussi « Somme des n premiers carrés, des n premiers cubes »
  juste avant la section second degré — vérifier si cela relève de ce chapitre ou des
  approfondissements possibles
- Le raisonnement par récurrence n'est PAS au programme de première : ne pas l'introduire

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### trigonometrie  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Trigonométrie » (ligne 2368 du .txt extrait).

Éléments lisibles dans l'extraction : enroulement de la droite numérique, cosinus et sinus
d'un réel, lien avec le triangle rectangle, valeurs remarquables, placer un point sur le
cercle trigonométrique, déterminer par lecture du cercle les angles associés.
Une DÉMONSTRATION est explicitement mentionnée : « Calcul de cos, sin » pour les angles
associés.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme mentionne une « Approximation de … » dont l'extraction a perdu l'objet.
  Il s'agit probablement de sin(x) ≈ x au voisinage de 0 — à vérifier et à ajouter si c'est
  le cas, car c'est une capacité attendue distinctive.
- Les fonctions cosinus et sinus comme fonctions (courbes représentatives, périodicité
  graphique, dérivées) sont-elles au programme de première ou de terminale ? Je ne les ai
  pas traitées ici.
- La résolution d'équations trigonométriques (cos x = a) est-elle exigible en première ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### variables-aleatoires  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Variables aléatoires réelles ».

Éléments explicitement lisibles : « Variable aléatoire réelle : formalisation comme fonction »,
« Formule de König-Huygens », et la capacité « Interpréter en situation et utiliser les
notations {X = a}, {X ≤ a}, P(X = a) ». J'ai construit la fiche autour de ces trois points,
qui sont les marqueurs distinctifs de cette section.

RÉVISION DU 2026-08-10, après réextraction propre du PDF (app/scripts/extraire-pdf.mjs).
Le programme de spécialité maths a récupéré 74 % de texte : la section « Variables
aléatoires réelles » est désormais intégralement lisible, ainsi que sa sous-section
« Expérimentations ». Les quatre questions ouvertes de la version précédente sont tranchées.

- ESPÉRANCE, VARIANCE, ÉCART TYPE : confirmés, listés tels quels dans les contenus. Ils
  avaient été reconstitués par déduction — la déduction était juste.
- LINÉARITÉ DE L'ESPÉRANCE : au programme, nommée explicitement. E(aX+b) = aE(X)+b est donc
  légitime et reste en section 5.
- VARIANCE D'UNE TRANSFORMATION AFFINE : le texte ne mentionne la linéarité QUE pour
  l'espérance. V(aX+b) et σ(aX+b) ne sont pas exigibles en première. Conservées pour leur
  utilité, mais déplacées dans un encadré « pour aller plus loin » explicitement signalé
  hors programme, et retirées du récapitulatif. Les erreurs 4 et 5 de la version précédente
  portaient dessus : refondues en une erreur 8 conditionnelle.
- ÉCHANTILLONNAGE : oui, il relève bien de cette section. La sous-section
  « Expérimentations » du programme demande de simuler une variable aléatoire, d'écrire une
  fonction Python renvoyant la moyenne d'un échantillon de taille n, et de calculer la
  proportion des cas où |m − μ| ⩽ 2σ/√n. Rien de tout cela n'était traité : section 6
  ajoutée.
- NOTATION P(X ⩽ a) : le texte exige les quatre notations {X = a}, {X ⩽ a}, P(X = a),
  P(X ⩽ a). La quatrième manquait au tableau du § 1. Ajoutée.
- ALGORITHMES : le programme cite un algorithme renvoyant espérance, variance ou écart-type.
  Mentionné en fin de section 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- DÉMONSTRATION EXIGIBLE : la section n'en liste aucune explicitement. König-Huygens reste
  la candidate naturelle, mais rien ne l'impose dans le texte. À trancher.
- L'approfondissement possible « pour X variable aléatoire, étude de la fonction du second
  degré x ↦ E((X − x)²) » figure au programme comme APPROFONDISSEMENT. Non traité ici :
  décider s'il a sa place dans la fiche.
- La formulation « l'écart est le plus souvent inférieur à 2σ/√n » (§ 6) reste qualitative :
  le texte demande de CALCULER cette proportion sur des simulations, sans énoncer de
  résultat. Vérifier que la fiche ne laisse pas croire à une règle démontrée.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### variations-courbes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Variations et courbes représentatives des fonctions » (ligne 2077 du .txt).

Éléments lisibles dans l'extraction : fonctions paires/impaires avec traduction géométrique,
caractérisation des fonctions constantes, nombre dérivé en un extrémum, tangente à la courbe
représentative, et « étudier en lien avec la dérivation une fonction polynôme du second degré ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le théorème « f' > 0 ⟹ f croissante » est-il admis ou démontré ?
- La notion de point d'inflexion est-elle au programme de première ou de terminale ?
  Je l'ai seulement nommée en passant sur le contre-exemple x³, sans la développer.
- Le périmètre exact des capacités attendues (l'extraction est tronquée en fin de section).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## premiere / physique-chimie

### chimie-organique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, physique-chimie de
première générale, thème « Constitution et transformations de la matière », partie
« 2. De la structure des entités organiques à leurs propriétés et à leur synthèse »
— sous-parties A) Structure des entités organiques, B) Synthèses d'espèces chimiques
organiques, C) Conversion de l'énergie stockée dans la matière organique
(docs/programme-pc1re.txt).

CHAPITRE CRÉÉ LE 2026-08-10. Le dépistage de conformité du même jour a montré que cette
partie entière du programme n'était traitée par aucune fiche : les cinq chapitres de
première physique-chimie couvraient les transformations (avancement, titrage), la
mécanique, l'énergie et les ondes, mais pas la chimie organique. C'est ce qui a motivé
sa création.

Correspondance capacité par capacité :

A) Structure
- « Identifier, à partir d'une formule semi-développée, les groupes caractéristiques
  associés aux familles : alcool, aldéhyde, cétone et acide carboxylique » → § 2. Les
  QUATRE familles du texte, ni plus ni moins : ni ester, ni amine, ni amide, qui
  relèvent de la terminale.
- « Justifier le nom associé à la formule semi-développée [...] et inversement » → § 3,
  dans les deux sens comme le demande le texte, en se limitant aux molécules « simples
  possédant un seul groupe caractéristique ».
- « Exploiter, à partir de valeurs de référence, un spectre d'absorption infrarouge »
  → § 4. Les valeurs sont présentées comme FOURNIES, conformément au texte.

B) Synthèses
- « Identifier, dans un protocole, les étapes de transformation des réactifs,
  d'isolement, de purification et d'analyse » → § 5, les quatre étapes nommées comme
  dans le texte.
- « Justifier, à partir des propriétés physico-chimiques, le choix de méthodes » → § 5.
- « Déterminer [...] le rendement d'une synthèse » → § 5.

C) Énergie
- « Écrire l'équation de réaction de combustion complète d'un alcane et d'un alcool »
  → § 6, avec un exemple de chaque, comme le texte les cite tous les deux.
- « Estimer l'énergie molaire de réaction pour une transformation en phase gazeuse à
  partir de la donnée des énergies des liaisons » → § 6.
- « Citer des exemples de combustibles usuels », « citer des applications [...] et les
  risques associés », « citer des axes d'étude [...] développement durable » → § 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- CONVENTION DE SIGNE de Δr E. Le texte dit seulement « estimer l'énergie molaire de
  réaction [...] à partir de la donnée des énergies des liaisons », sans écrire la
  relation ni fixer la convention. J'ai retenu Δr E = Σ(rompues) − Σ(formées), donc
  négatif pour une réaction exothermique. Certains manuels adoptent la convention
  inverse. À VÉRIFIER EN PRIORITÉ : une convention inversée rendrait tout le § 6 faux.
- Les VALEURS DE RÉFÉRENCE IR (bornes des bandes O–H, C=O) sont des valeurs usuelles :
  le programme précise qu'elles sont fournies, sans les donner. Vérifier qu'elles
  correspondent aux tables utilisées dans l'établissement.
- Le POUVOIR CALORIFIQUE MASSIQUE est nommé dans les contenus mais aucune capacité ne
  demande de le calculer, seulement de « mettre en œuvre une expérience pour l'estimer ».
  Traité brièvement : vérifier que c'est le bon niveau d'exigence.
- Le texte mentionne aussi « utiliser des modèles moléculaires ou des logiciels pour
  visualiser la géométrie de molécules organiques » : capacité expérimentale, non
  traitée dans une fiche de cours. À confirmer.
- Le découpage en UN chapitre couvrant A, B et C est un choix. Un professeur peut
  préférer scinder structure/nomenclature d'une part, synthèse et énergie d'autre part.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### energie-phenomenes-electriques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « L'énergie : conversions
et transferts », section « Aspects énergétiques des phénomènes électriques », ligne 2377 du
.txt extrait).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le modèle du générateur réel U = E - rI est-il explicitement au programme de première, ou
  seulement le bilan de puissance ? Point de périmètre à vérifier.
- Les capacités expérimentales attendues (mesure de rendement, caractéristique d'un dipôle).
- La notion de puissance nominale et les plaques signalétiques sont-elles exigibles ?
- Le programme mentionne aussi « Énergie » à la ligne 2029 et 2448 : vérifier qu'aucun
  sous-thème n'a été omis entre les phénomènes électriques et mécaniques.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### energie-phenomenes-mecaniques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « L'énergie : conversions
et transferts », section « Aspects énergétiques des phénomènes mécaniques », ligne 2527 du
.txt extrait ; « Énergie cinétique, énergie potentielle (dépendant de la position) » ligne
2557 ; « Énergie mécanique » ligne 2611).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le théorème de l'énergie cinétique est-il exigible en première, ou introduit en terminale ?
  Point de périmètre important — je l'ai inclus car il est classique en première, mais à
  vérifier.
- Le programme mentionne « énergie potentielle (dépendant de la position) » : cela inclut-il
  l'énergie potentielle élastique d'un ressort, ou seulement la pesanteur ?
- La puissance mécanique (P = W/Δt) est-elle au programme de cette section ?
- Les capacités expérimentales attendues (étude d'une chute, exploitation d'une vidéo).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### mouvement-interactions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « Mouvement et
interactions », lignes 274, 1958 et 2532 du .txt extrait).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La formulation exacte attendue en première : le programme de 2019 introduit une version
  qualitative/vectorielle du principe fondamental (lien entre somme des forces et variation
  du vecteur vitesse), la deuxième loi de Newton avec l'accélération étant réservée à la
  terminale. J'ai retenu cette lecture — à CONFIRMER, c'est le point de périmètre le plus
  important de cette fiche.
- L'accélération est-elle introduite en première, même qualitativement ?
- La quantité de mouvement est-elle au programme de première ?
- Les capacités expérimentales attendues (pointage vidéo, tableur).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### ondes-signaux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « Ondes et signaux »,
ligne 2676 du .txt extrait ; « Ondes mécaniques » ligne 2680 ; « Ondes mécaniques
périodiques. Ondes sinusoïdales » lignes 2773-2774 ; second bloc ligne 3347).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La lunette astronomique est-elle bien au programme de PREMIÈRE ? Elle y figurait dans le
  programme 2019 — à confirmer.
- Le programme mentionne « Ondes sinusoïdales » : l'expression mathématique d'une onde
  sinusoïdale est-elle exigible, ou seulement l'approche graphique ?
- La diffraction et les interférences relèvent-elles de la première ou de la terminale ?
  Je ne les ai PAS incluses.
- Le niveau d'intensité sonore avec la formule logarithmique est-il exigible en première ?
- La relation de conjugaison des lentilles est-elle au programme de première ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformations-matiere  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « Constitution et
transformations de la matière », ligne 1025 du .txt extrait ; « Énergie molaire de
réaction » ligne 1899).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des titrages : titrage colorimétrique seulement, ou aussi
  conductimétrique et pH-métrique ? J'ai mentionné les trois.
- La constante d'acidité Ka et le pKa sont-ils au programme de première, ou de terminale ?
  Je ne les ai PAS inclus — point de périmètre à trancher.
- Les réactions d'oxydoréduction sont-elles traitées dans ce thème en première ?
  Je ne les ai pas développées.
- La notion de dosage par étalonnage (droite d'étalonnage) est-elle exigible ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# quatrieme

## quatrieme / maths

### calcul-litteral  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.txt), thème « Nombres et calculs »,
niveau QUATRIÈME, entrée « Calcul littéral et algébrique », LIGNES 565 à 580.
(La section Quatrième du thème commence ligne 509.)

Contenu de la source, repris intégralement :

Automatismes (l. 566-572) :
- « Donner la valeur d'expressions numériques simples. » → §2
- « Résoudre des équations du type ax = c et x + b = c » ; « Écrire 3 × x sous la forme
  3x… » → acquis de 5e, en prérequis et renvoi §1
- « Connaitre et utiliser : 1 × x = x ; x + x = 2x ; x × x = x² ; 3x + 2x = 5x ;
  3x × 2x = 6x². » → §2, encadré tel quel
- « Donner le double, le triple, la moitié, le prédécesseur, le successeur, le carré
  d'un nombre. » → §2, tableau de traduction
- « Tester si un nombre vérifie une égalité. » → étape de vérification (§6, §7)

Objectifs d'apprentissage (l. 573-580), dans l'ordre du texte :
- « Produire des formules et tester leur vraisemblance : aires de formes géométriques
  simples, nombres pairs/impairs, etc. » → §3
- « Connaitre et utiliser la distributivité SIMPLE pour développer et factoriser une
  expression algébrique. » → §4
- « Utiliser le calcul algébrique pour produire des démonstrations. » → §5
- « Résoudre une équation du premier degré du type ax + b = c. » → §6
- « Mettre en équation un problème et le résoudre à l'aide d'une équation du premier
  degré du type ax + b = cx + d. » → §7
- « Formuler des conjectures à l'aide d'un algorithme ou d'un tableur pour résoudre de
  manière exacte ou approchée une équation. » → §8
(L'ordre des sections de la fiche suit exactement cette liste.)

⚠️ POINT DE PÉRIMÈTRE LE PLUS IMPORTANT — À TRANCHER PAR LE RELECTEUR
La double distributivité et les identités remarquables ne sont PAS au programme de 4e
dans ce texte. La ligne 575 dit explicitement « distributivité SIMPLE ». Les deux
notions apparaissent dans la section TROISIÈME du même document :
  - l. 635 : « Utiliser la double distributivité pour développer et factoriser des
    expressions dont le facteur est apparent. »
  - l. 638-641 : « Manipuler les trois identités remarquables pour développer et
    factoriser : a² + 2ab + b² = (a+b)² ; a² − 2ab + b² = (a−b)² ; a² − b² = (a−b)(a+b). »
Je ne les ai donc NI l'une NI l'autre traitées ici, contrairement à l'usage des manuels
et à la pratique de nombreux enseignants qui placent (a+b)(c+d) en 4e. C'est un écart
assumé avec la tradition, fondé sur la lettre du texte. À valider explicitement : si le
relecteur estime que la double distributivité doit être introduite en 4e, il faut
ajouter une section — mais alors la fiche de 3e devra être ajustée en miroir.

Autres points à soumettre au relecteur :
- MÉTHODE DE RÉSOLUTION : le texte de 4e dit seulement « Résoudre une équation du
  premier degré du type ax + b = c », sans prescrire de méthode. J'ai retenu les règles
  d'équivalence (« la balance »), alors que le texte de 5e (l. 505) parlait de
  « méthodes arithmétiques s'appuyant sur les opérations inverses ». Le passage de
  l'une à l'autre est-il attendu en 4e ? Le vocabulaire « équations équivalentes » n'est
  employé nulle part dans la source : je ne l'ai donc pas introduit.
- ÉQUATIONS SANS SOLUTION / TOUJOURS VRAIES (§9) : cas non mentionné dans la source,
  mais qui surgit mécaniquement dès qu'on traite ax + b = cx + d avec a = c. Traité en
  deux lignes comme « cas particulier ». À confirmer, ou à retirer si hors programme.
- Notation ensembliste S = {…} : absente de la source, donc non introduite. J'emploie
  seulement le mot « solution ».
- §8 (tableur/algorithme) : recoupe le chapitre « pensée informatique ». Vérifier qu'il
  n'y a pas de doublon entre les deux fiches.
- Le chapitre de 5e (5e-math-calcul-litteral) est cité en §1 et en prérequis ; son
  contenu n'est pas répété. Vérifier que le renvoi reste valable si la 5e évolue.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonctions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
(PDF correspondant : docs/programme-college-cycle4-maths-2026.pdf)
Thème « Proportionnalité, fonctions », entrée « Fonctions », niveau QUATRIÈME :
lignes 1036 à 1042 (l. 1036 titre « Fonctions », l. 1037 « Objectifs
d'apprentissage », l. 1038-1042 les cinq objectifs).
Chapeau du thème lu également : lignes 968 à 986.

LES CINQ OBJECTIFS (l. 1038-1042) ET LEUR SECTION
- l.1038 « Savoir appliquer un programme de calcul à deux (plusieurs) étapes à un
  nombre simple puis à une variable. »            -> sections 2 et 3
- l.1039 « Savoir retrouver le nombre de départ après avoir remonté un programme de
  calcul simple. »                                -> section 5
- l.1040 « Produire une formule littérale représentant la dépendance d'une grandeur en
  fonction d'une autre. »                         -> section 6
- l.1041 « Représenter l'expression d'une grandeur en fonction d'une autre par un
  graphique. »                                    -> section 7
- l.1042 « Comprendre la dépendance d'une grandeur en fonction d'une autre. »
                                                  -> section 1
Écart à l'ordre du BO : l'objectif l.1042 est traité en PREMIER (section 1). Motif :
le gabarit (docs/gabarit-chapitre.md, § « Corps ») impose d'ouvrir sur une
définition, et la dépendance est le cadre dans lequel tout le reste prend sens. Les
objectifs 1038 -> 1041 se suivent ensuite dans l'ordre exact du BO. À valider.

DÉCISION PRINCIPALE À TRANCHER — LA NOTATION FONCTIONNELLE (section 4)
Vérification faite mot à mot dans le texte de QUATRIÈME (l. 1036-1042) :
- « programme de calcul » : PRÉSENT (l. 1038 et 1039).
- « variable » : PRÉSENT (l. 1038).
- « formule littérale » : PRÉSENT (l. 1040).
- « graphique » : PRÉSENT (l. 1041).
- « image » : ABSENT. « antécédent » : ABSENT. « f(x) » : ABSENT. « fonction » comme
  objet mathématique nommé : ABSENT (le mot n'apparaît qu'en titre d'entrée l. 1036
  et dans la locution « en fonction de », l. 1040 et 1042).
Ces deux mots-clés apparaissent pour la première fois en TROISIÈME, l. 1061 :
« Définir et connaitre le vocabulaire : image, antécédents. »
=> Je n'ai donc PAS introduit « image » ni « antécédent », ni la locution « la
   fonction f », ni « courbe représentative », ni « ensemble de définition ». La
   section 5 dit « retrouver le nombre de départ », exactement les mots du BO l. 1039,
   là où un manuel dirait « déterminer un antécédent ».

=> EN REVANCHE, la section 4 (notation P(n), lecture « P de n », flèche
   n -> 5 + 2n) est introduite SUR LA SEULE FOI DES LIGNES 985-986 du chapeau :
   « Les notations fonctionnelles de type P(A), p(t) ainsi que la flèche -> sont
   utilisées progressivement dans tous les chapitres du programme. »
   AUCUNE mention explicite dans l'entrée 4e ne la demande. C'EST LE POINT LE PLUS
   DISCUTABLE DE LA FICHE, à trancher par un professeur.
   Trois arguments qui m'ont fait choisir OUI :
   (a) « progressivement » suppose une entrée quelque part entre la 5e et la 3e ; la
       fiche de 5e (contenu/cinquieme/maths/fonctions/fiche.md, notes de production,
       point 1) a explicitement écarté la notation en 5e et renvoyé la décision à la
       4e/3e ;
   (b) l'objectif l. 1038 « appliquer un programme de calcul […] à une variable »
       produit précisément l'objet qu'il faut savoir nommer ;
   (c) en 3e (l. 1061) le vocabulaire image/antécédent est supposé se poser sur une
       notation déjà rencontrée.
   J'ai suivi la forme donnée en exemple par le BO lui-même (P(A), p(t)) : une lettre
   qui NOMME LA GRANDEUR appliquée à la variable, jamais « la fonction f ». Si le
   relecteur juge la notation prématurée en 4e, la section 4 est supprimable telle
   quelle : les sections 5, 6 et 7 y font référence mais restent lisibles sans elle
   (il suffit de réécrire P(n) en P et A(x) en « le résultat »).

CONTINUITÉ AVEC LA 5e
Prérequis explicite : contenu/cinquieme/maths/fonctions/fiche.md (« en fonction de »,
tableau de valeurs, repère, lecture graphique). La section 1 reprend sa définition de
la dépendance et sa condition d'unicité, la section 7 reprend son exemple de la
piscine (5 € + 2 € par séance) et sa règle « on relie ou pas » — volontairement, pour
que l'élève reconnaisse la situation et voie ce que la notation ajoute.
Point 2 des notes de production de la 5e (« programme de calcul » réservé à la 4e) :
confirmé ici, l'expression est bien en 4e (l. 1038-1039). La 5e ne l'a pas traité, il
n'y a donc ni doublon ni trou.

À CONFRONTER AU PROGRAMME PAR LE RELECTEUR
1. La notation fonctionnelle (voir ci-dessus). Décision n°1.
2. Le mot « variable » (section 1) est bien celui du BO (l. 1038), mais il est aussi
   employé en 4e au sens INFORMATIQUE dans « La pensée informatique » (l. 1089, 1095).
   Vérifier que la coexistence des deux sens ne gêne pas, la fiche
   contenu/quatrieme/maths/pensee-informatique/ existant déjà.
3. Recouvrement avec contenu/quatrieme/maths/calcul-litteral/ : « produire des
   formules » figure aussi dans l'entrée Calcul littéral de la 4e (l. 574), et
   « programme de calcul » dans l'entrée Opérations sur les nombres relatifs de la 4e
   (l. 523-524). Les sections 3 et 6 supposent acquis substituer/réduire/développer et
   ne les réenseignent pas. Vérifier l'absence de contradiction et de doublon gênant.
4. Section 5, dernier paragraphe : j'ai relié « remonter un programme » à la recherche
   du x tel que R(x) = 19. Le BO de 4e demande par ailleurs de résoudre ax + b = c
   (l. 577). J'ai délibérément gardé la méthode des OPÉRATIONS INVERSES, qui est ce
   que dit l. 1039 (« après avoir remonté un programme de calcul »), et non la
   résolution d'équation. À confirmer : faut-il faire le lien plus explicitement ?
5. Section 8, dernier point (multiplier par 0 rend le programme non remontable) : ce
   n'est pas dans le BO. Ajouté parce que le gabarit impose une section « cas
   particuliers / pièges de calcul » et parce que le tableau des opérations inverses
   exige a ≠ 0. Supprimable si jugé hors sujet en 4e.
6. La caractérisation graphique de la proportionnalité n'est PAS reprise : elle est un
   objectif de 5e (l. 1020), traité dans la fiche de 5e. La section 7 s'en tient à
   « représenter par un graphique » (l. 1041). À confirmer.

Rédaction entièrement originale à partir du seul texte du BO. Aucun emprunt à un
manuel ni à un site de cours. Tous les exemples chiffrés ont été inventés et
recalculés à la main.
Statut : brouillon, non relu.
```

### nombres-rationnels  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Nombres et calculs »,
section « Quatrième », entrée « Nombres rationnels » — lignes 525 à 543 (dans la plage
509-580 fournie en consigne).

CORRESPONDANCE OBJECTIF → SECTION (ordre du texte officiel, lignes 534-543)
« Simplifier une fraction » → §3 · « Définir la notion de nombre rationnel : le quotient
de deux nombres entiers relatifs » → §1 (définition + sous-partie « Son signe ») ·
« Exprimer l'opposé d'un nombre rationnel » → §2 · « Calculer le produit de nombres
rationnels » → §5 · « Calculer et représenter la fraction d'une fraction, d'un nombre,
d'une quantité » → §6 (le « représenter » = le rectangle en grille) · « Définir l'inverse
d'un nombre et connaitre sa notation » + « Déterminer l'inverse d'une fraction » → §7 ·
« Diviser des fractions » → §8 · « Calculer la valeur d'expressions comportant plusieurs
opérations avec des fractions » → §9 · « Résoudre des problèmes mobilisant les opérations
sur les fractions : addition, soustraction, multiplication, division, inverse » → §10.

Automatismes du bloc (lignes 527-532) traités en RAPPEL COURT (§4 et §6) : ce sont des
automatismes à entretenir, pas des objectifs nouveaux du niveau.

ARTICULATION AVEC LA 5e (contenu/cinquieme/maths/fractions/fiche.md) — volontairement
NON redéveloppé ici car déjà traité : vocabulaire numérateur/dénominateur, fractions
égales, comparaison, addition/soustraction détaillée, « fraction d'un nombre » comme
notion neuve, pourcentages, décomposition entier + fraction inférieure à 1. La 5e est
citée en prérequis. Apport propre de la 4e : le SIGNE, l'opposé, le produit, l'inverse,
la division, les expressions à plusieurs opérations.

⚠️ POINTS À TRANCHER PAR LE RELECTEUR
1. NOTATION DE L'INVERSE. Le programme dit « connaitre sa notation » sans la préciser.
   J'ai retenu $\frac{1}{a}$ SEULEMENT et écarté $a^{-1}$ : le bloc « Puissances » de la
   4e (lignes 544-555) ne parle que d'exposants positifs. À confirmer.
2. NOTATION DES ENSEMBLES. Ni Z ni Q : la « notation des ensembles […] des rationnels »
   figure en prolongement de la TROISIÈME, pas de la 4e. J'écris « entiers relatifs » en
   toutes lettres. Acceptable ?
3. FORME IRRÉDUCTIBLE. La 4e dit « Simplifier une fraction » ; c'est la 3e qui demande
   « Mettre une fraction sous forme irréductible ». D'où « simplifie tant que c'est
   possible », sans le mot « irréductible » ni le PGCD. Trop prudent ?
4. RÈGLE DES SIGNES (§1). Elle vient du bloc voisin « Opérations sur les nombres relatifs »
   de la 4e (lignes 510-524, « Diviser deux nombres relatifs »), pas du bloc « Nombres
   rationnels ». Indispensable à mes yeux pour donner un sens à « quotient de deux entiers
   relatifs ». Rappel ici, ou simple renvoi à l'autre chapitre ?
5. COMPARAISON DE FRACTIONS. Listée en automatisme (ligne 528) mais absente des objectifs
   de 4e : non développée. À confirmer.
6. À CONFRONTER AU PDF : la source est une extraction texte où les fractions sont cassées
   sur deux lignes (529-531). Vérifier qu'aucun objectif du bloc n'a été perdu.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
```

### operations-nombres-relatifs  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : docs/programme-college-cycle4-maths-2026.txt, thème « Nombres et
calculs », niveau Quatrième, entrée « Opérations sur les nombres relatifs »,
lignes 509 à 524 (le bloc va de la ligne 510 « Opérations sur les nombres
relatifs » à la ligne 524, la ligne 525 ouvrant l'entrée suivante « Nombres
rationnels »).

Couverture du programme, item par item :
AUTOMATISMES (lignes 511-517)
- « Manipulation de sommes et différences de nombre relatifs » -> §1
- « Opposé d'un nombre, somme des opposés » -> §1, réinvesti en §3 pour la démo
- « Entretien des tables de multiplication » -> implicite, non rédigé
- « Multiplier et diviser par 10, 100, 1 000 » -> §1
- « Compléter des multiplications à trou ; faire le lien entre multiplication et
  division » -> §1 et §5 (c'est l'argument qui justifie que la division hérite de
  la règle des signes)
- « Multiplication comme addition itérée » -> §1, réinvesti en §2
OBJECTIFS D'APPRENTISSAGE (lignes 519-524)
- « Multiplier deux nombres relatifs : d'abord dans le cas où un seul des facteurs
  est négatif, puis, grâce à la distributivité, dans le cas où les deux facteurs
  sont négatifs » -> §2 puis §3, dans CET ordre, avec la démonstration par la
  distributivité, explicitement demandée par le texte
- « Diviser deux nombres relatifs » -> §5
- « Savoir calculer un enchainement d'opérations » -> §6
- « Utiliser le vocabulaire (somme, quotient, etc.) [...] et inversement » -> §7,
  traité dans les DEUX sens comme le demande « et inversement »

NON-RECOUVREMENT AVEC LA 5e : la fiche contenu/cinquieme/maths/nombres-relatifs/
fiche.md est citée en prérequis. Définition des relatifs, opposé, valeur absolue,
comparaison et addition ne sont PAS refaits — seulement rappelés en §1.

⚠️ POINTS À TRANCHER PAR LE RELECTEUR

1. TROU DANS LE CORPUS 5e (le plus important). Le programme de 5e demande
   explicitement, lignes 413 à 417 : « Soustraire deux nombres décimaux relatifs »,
   « Connaitre et justifier les situations dans lesquelles des parenthèses sont
   indispensables », « Simplifier l'écriture de sommes comportant des parenthèses »,
   « Enchainer additions et soustractions de décimaux relatifs ». Or la fiche 5e
   existante ne traite QUE l'addition, et sa note de production affirme à tort que
   « le programme de 5e ne mentionne que l'ADDITION ». En 4e, sommes et différences
   ne sont plus qu'un AUTOMATISME (ligne 512), donc je ne les ré-enseigne pas ici :
   si personne ne corrige la fiche 5e, la soustraction de relatifs n'est enseignée
   nulle part dans le corpus. À arbitrer : corriger la fiche 5e (recommandé) ou
   étendre celle-ci.

2. PRODUIT DE PLUSIEURS FACTEURS (§4, raccourci pair/impair). Le programme n'écrit
   que « multiplier DEUX nombres relatifs ». Le cas de trois facteurs ou plus n'est
   couvert qu'indirectement par « enchainement d'opérations » (ligne 522). J'ai
   gardé le raccourci parce qu'il est utile et qu'il découle du texte, mais c'est le
   seul point de la fiche qui dépasse la lettre du programme. À valider ou couper.

3. ÉCRITURE DU QUOTIENT. J'ai utilisé la barre de fraction en §7
   ($\frac{-18}{-4+1}$) comme simple notation de division. La définition du nombre
   rationnel comme « quotient de deux nombres entiers relatifs » et les opérations
   sur les fractions relèvent de l'entrée suivante, « Nombres rationnels » 4e
   (lignes 525-543) : je n'y touche pas. Vérifier que cette notation en avance est
   acceptable ici, ou la remplacer par le signe $\div$.

4. VALEUR ABSOLUE. La méthode « le signe d'abord, les valeurs absolues ensuite »
   emploie l'expression « valeur absolue », définie en 5e mais dont la NOTATION
   $|x|$ n'a pas été introduite (voir la note de la fiche 5e). Je n'emploie que les
   mots, jamais la notation. À confirmer.

5. CALENDRIER. Le nouveau programme s'applique en 5e à la rentrée 2026, donc en 4e
   à la rentrée 2027. La chaîne « programme » de l'en-tête a été recopiée telle
   quelle depuis la consigne de production ; à confronter au BO par le relecteur.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel
ni à un site de cours.
Statut : brouillon, non relu.
```

### parallelogrammes-translations  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »
(intro : lignes 645-666), section « Quatrième » (lignes 755 à 809), entrée
« Parallélogrammes et translations », lignes 779 à 793.

CONTENU DE L'ENTRÉE, littéralement :
- Automatismes : « Dire si des figures planes sont images l'une de l'autre par une
  symétrie axiale (dont on identifie l'axe) ou par un demi-tour (dont on identifie le
  centre). » / « Dans une configuration donnée, déterminer les images de figures, de
  droites, de segments, de points par une symétrie axiale ou un demi-tour. » /
  « Reconnaitre un parallélogramme à l'aide de sa définition ou d'une propriété
  caractéristique grâce aux codages. » / « Reconnaitre un parallélogramme particulier
  à partir de ses propriétés caractéristiques, notamment à partir des propriétés de
  ses diagonales. »
- Objectifs : « Comprendre l'effet d'une translation. » / « Faire le lien avec les
  parallélogrammes, les angles. » (ligne 790, le lien explicite) / « Connaitre et
  utiliser les propriétés de conservations des translations. »
- Prolongements : « Pavage d'Escher ou de l'Alhambra. » → § 6, dernier paragraphe.

Correspondance : § 1 = « comprendre l'effet » ; § 2, § 3, § 4 = « faire le lien avec
les parallélogrammes » ; § 5 = « les conservations » + « les angles » ; § 6 =
automatismes de reconnaissance et de construction ; § 7 = cas limites.

PÉRIMÈTRE ET ARTICULATION AVEC LES CHAPITRES VOISINS
- Les VECTEURS ne sont PAS utilisés, ni la notation fléchée : « Translations et
  vecteurs » est une entrée de TROISIÈME (lignes 849-856), qui introduit aussi la
  « définition ponctuelle avec parallélogramme » de la translation. En 4e le lien
  parallélogramme/translation est donc posé comme PROPRIÉTÉ CARACTÉRISTIQUE ADMISE,
  pas comme définition, et les preuves du § 4 l'utilisent comme « or ». À valider :
  c'est le choix didactique structurant de la fiche.
- PRÉREQUIS 5e cité et non répété : contenu/cinquieme/maths/parallelogrammes/fiche.md
  (définition, propriétés, propriétés caractéristiques, diagonales) et
  contenu/cinquieme/maths/transformations/fiche.md (demi-tour, conservations).
  La distinction propriété / propriété CARACTÉRISTIQUE est reprise au § 3 et étendue
  au nouveau cas, conformément à la demande.
- ⚠️ RECOUVREMENT À ARBITRER avec le chapitre 4e « Transformations » produit en
  parallèle : dans le BO, l'entrée 4e « Transformations » (lignes 756-758) ne contient
  QU'UN automatisme (« Construire le symétrique d'un point par demi-tour ») ; les
  objectifs sur la translation appartiennent tous à l'entrée « Parallélogrammes et
  translations ». Le § 1 (effet de la translation) et le § 5 (conservations) sont donc
  ici chez eux au sens du programme, mais peuvent faire doublon avec le chapitre
  voisin. Ils sont volontairement traités de façon COMPACTE, avec renvoi explicite.
  Le relecteur doit trancher qui porte quoi, et vérifier que le renvoi du préambule
  correspond bien au titre retenu pour l'autre chapitre.

À TRANCHER PAR LE RELECTEUR
1. LA DATE DU BO. L'en-tête reprend « BO du 5 mars 2026 », comme les autres fiches de
   4e et de 5e, mais ETAT.md et PASSATION.md annoncent « BO du 2 avril 2026 » pour le
   même cycle 4, et AUCUNE des deux dates n'apparaît dans le texte extrait. Problème
   déjà signalé sur la fiche 5e « Parallélogrammes » : à trancher une fois pour toutes
   et à harmoniser sur l'ensemble des fiches collège.
2. L'ÉQUIVALENCE du § 2 est énoncée avec l'hypothèse « A, B, C non alignés », et le
   cas aligné est traité au § 7 comme parallélogramme aplati. Vérifier que ce niveau
   de précision est celui attendu en 4e, ou s'il faut se contenter du cas générique.
3. Le symbole $\iff$ : est-il admis en 4e, ou faut-il n'écrire que « si et seulement
   si » en toutes lettres ? Il est ici systématiquement doublé par sa lecture.
4. § 5, dernier paragraphe : la conclusion sur les angles supplémentaires mobilise les
   angles formés par deux parallèles et une sécante (5e). Vérifier que le vocabulaire
   attendu (alternes-internes / correspondants) n'est pas exigé explicitement — il est
   ici contourné.
5. La conservation des AIRES par la translation n'est pas listée dans le BO, qui dit
   seulement « les propriétés de conservations » sans les énumérer. Incluse par
   cohérence avec l'intro du thème (« preuves utilisant les aires » en fil rouge,
   lignes 661-664) et avec la fiche 5e sur le demi-tour. Même doute que là-bas.
6. § 7, « translation nulle » : formulation évitée dans le corps du texte (le « vecteur
   nul » est une notion de 3e). Vérifier que la mention « sauf translation nulle » du
   tableau ne dépasse pas le niveau.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni
à un site de cours. Statut : brouillon, non relu.
```

### pensee-informatique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « La pensée informatique » — chapeau
l. 1071-1075, section « Quatrième » l. 1088-1097 (seule source des contenus), cadrage général
l. 302-321. Chapitre de 5e lu intégralement (contenu/cinquieme/maths/pensee-informatique/
fiche.md) : conventions de pseudo-code, vocabulaire et découpage repris à l'identique, prérequis
cités en en-tête et au § 1, contenus de 5e NON répétés.

Couverture des 5 objectifs de la section Quatrième : « conditions simples » → § 2.1-2.2 et
méthode 1 · « instructions conditionnelles » → § 2.3 et méthode 1 · « manipuler une variable » →
§ 2.4 (affectation puis compteur) et méthode 2 · « écrire un programme simple … pour réaliser un
objectif » → méthode 3 · « modifier un programme donné pour changer son comportement » →
méthode 4. Chapeau de niveau (l. 1089-1091) : variable « progressivement introduite » → § 2.4,
sans aller plus loin ; « modifier des programmes fournis plus complexes » → méthodes 2 et 4.

⚠️ PÉRIMÈTRE, à trancher par le relecteur. Conditions COMPOSÉES (et / ou) et boucle
CONDITIONNELLE sont en Troisième (l. 1103-1104) : non traitées ; le § 4 aborde deux `si`
successifs indépendants — piège de lecture, pas condition composée, mais la frontière mérite un
avis. Le compteur (fin du § 2.4) n'est pas nommé par le texte : il découle de « manipuler une
variable » croisé avec la boucle de 5e, dont les notes de la fiche de 5e signalaient l'absence à
ce niveau ; à valider comme attendu de 4e.

⚠️ L'objectif l. 1096 est écrit « Écrire un programme simple DONNÉ pour réaliser un objectif »
(idem l. 1109 en 3e) : « donné » contredit « écrire », formulation probablement fautive dans le
texte source ou dans l'extraction. Lu ici comme « écrire un programme simple pour réaliser un
objectif » (méthode 3), en cohérence avec le chapeau « les élèves commencent à écrire des
programmes simples en autonomie ». À CONFRONTER AU PDF : conformité la plus incertaine.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR. (1) Aucun logiciel nommé (« programmation impérative
par blocs », l. 1072 ; « Scratch » : 0 occurrence en cycle 4) : blocs figurés par du pseudo-code
indenté, `si / alors / sinon / fin si` prolongeant le `répéter / fin répéter` de 5e — convention
de rédaction, non prescrite. Idem pour l'affectation `mettre … dans …`, prolongement du
« demander … et mettre la réponse dans age » de 5e, quand « x prend la valeur v » est plus
répandu à l'écrit : à trancher pour tout le parcours (à répercuter en 3e). (2) La fiche donne les
six comparaisons, dont `≤`, `≥`, `≠`, quand beaucoup de langages par blocs n'offrent que `<`,
`=`, `>` ; choix de ne PAS montrer la reformulation (« `n ≤ 12` s'écrit `n < 13` pour un
entier »), aucun langage n'étant prescrit. (3) § 2.3 : `0 − n` calcule la distance à zéro sans
nommer la valeur absolue (hors cycle 4) — vérifier la cohérence avec la notation de l'opposé vue
en nombres relatifs.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
```

### probabilites  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « Organisation et gestion
de données et probabilités », section QUATRIÈME, sous-section « Probabilités »,
LIGNES 936-946. Chapeau du thème lu : LIGNES 861-885.
Créé le 2026-08-12 ; premier chapitre de 4e du dépôt (contenu/quatrieme/ n'existait pas).

ARTICULATION AVEC LA 5e : la fiche 5e (contenu/cinquieme/maths/probabilites/fiche.md)
couvre expérience aléatoire, issue, événement, échelle 0-1, trois écritures,
équiprobabilité, somme = 1, fréquence vs probabilité. CITÉS EN PRÉREQUIS et non repris,
sauf la formule d'équiprobabilité (§ 3), rappelée car tout le chapitre s'appuie dessus.

Les cinq objectifs de la section sont couverts, dans l'ordre du texte :
- notations ensemblistes / définir un évènement → § 1
- définir complémentaire, réunion, intersection, ensemble vide → § 2 (les 4 termes)
- calculer la probabilité d'un évènement et de l'évènement contraire → § 3 et § 4
- expériences à deux épreuves → § 5 (les 3 exemples nommés : deux pièces, pièce et dé,
  deux dés)
- comparer distributions fréquentielle/probabiliste + fluctuation à n fixé → § 6

⚠️ PÉRIMÈTRE — VOLONTAIREMENT ÉCARTÉ, à valider :

- ARBRE DE PROBABILITÉS : le mot « arbre » n'apparaît NULLE PART dans le fichier de
  programme (recherche sur tout le texte). Pas d'arbre pondéré ni de multiplication le
  long des branches : les expériences à deux épreuves sont traitées par ÉNUMÉRATION DES
  ISSUES, suffisante dans les cas équiprobables demandés. À CONFIRMER — si l'arbre est
  attendu en 4e par ailleurs, il faudra ajouter un paragraphe.
- TABLEAU À DOUBLE ENTRÉE : expression absente du texte elle aussi. J'en utilise un au
  § 5 (somme de deux dés) comme simple support de dénombrement, pas comme objet de
  cours. À valider ou supprimer.
- FORMULE P(A ∪ B) = P(A) + P(B) − P(A ∩ B) : le texte demande de DÉFINIR réunion et
  intersection, mais de ne CALCULER que « la probabilité d'un évènement et de
  l'évènement contraire ». Non énoncée, donc : réunion et intersection sont obtenues en
  listant puis comptant les issues, et le § 3 signale l'erreur d'addition sans donner la
  correction générale. POINT DE PÉRIMÈTRE LE PLUS SENSIBLE DE LA FICHE.
- ÉVÉNEMENTS INCOMPATIBLES / INDÉPENDANCE : non nommés en 4e, non traités.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :

- LA DATE DU BO. Même réserve que les fiches de 5e (voir « parallelogrammes ») :
  l'en-tête dit « BO du 5 mars 2026 », ETAT.md dit « BO du 2 avril 2026 », aucune des
  deux ne figure dans le texte extrait. À trancher globalement.
- LES NOTATIONS Ω, ∪, ∩, ∅, A-barre : le texte dit « notations ensemblistes » sans les
  lister. Ω et la barre du complémentaire sont les plus discutables à ce niveau.
- « FLUCTUATION D'ÉCHANTILLONNAGE » (§ 6) : le programme écrit seulement « observer la
  fluctuation des fréquences ». Employé une fois ; à alléger si jugé prématuré.
- LES DONNÉES CHIFFRÉES du § 6 (120 lancers ; 4 séries de 50) sont INVENTÉES à titre
  d'illustration plausible. Fréquences arrondies au centième, somme arrondie = 1,00.
- Le programme demande de COMPARER DES GRAPHIQUES : la fiche donne les distributions en
  TABLEAU et décrit les diagrammes en barres sans les afficher (pas de support graphique
  dans le format actuel). Deux diagrammes côte à côte seraient plus fidèles.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### proportionnalite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
Thème « Proportionnalité, fonctions ».
- Entrée « Quatrième > Proportionnalité » : lignes 1021 à 1035
  (l. 1021 « Quatrième », l. 1022 « Proportionnalité », l. 1023 « Automatismes »,
   l. 1024-1026 les automatismes, l. 1027 « Objectifs d'apprentissage »,
   l. 1028-1035 les huit objectifs).
- Les lignes 1036 à 1042 relèvent de l'entrée « Fonctions » de la Quatrième :
  HORS de cette fiche, à traiter dans contenu/quatrieme/maths/fonctions/.
- Chapeau du thème lu : lignes 968 à 986.

COUVERTURE DES OBJECTIFS — chacun a sa section
- l. 1024-1026 automatismes (a % de c pour a = 100, 50, 25, 10, 1 ; calculs à trou) -> § 1
- l. 1028 « Utiliser des grandeurs quotients, avec ou sans unités. »        -> § 2
- l. 1029 « Comparer deux nombres ou deux grandeurs à l'aide de leur rapport
  ou ratio. »                                                              -> § 3
- l. 1030 « Exprimer la proportionnalité entre deux suites de nombres par des
  égalités de rapports ou sous forme de ratio. »                           -> § 4
- l. 1031 « Déterminer une quatrième proportionnelle. »                     -> § 5
- l. 1032 « Calculer avec des pourcentages. »                               -> § 6
- l. 1033 « Rendre compte d'une augmentation ou une diminution exprimée en
  pourcentages au moyen d'un coefficient multiplicateur »                   -> § 7
- l. 1034 « Définir le coefficient multiplicateur. »                         -> § 7
- l. 1035 « Résoudre des problèmes de partage proportionnel. »               -> § 8
L'ordre des sections 1 à 8 est exactement celui du BO.

PÉRIMÈTRE — CE QUE J'AI VOLONTAIREMENT EXCLU, ET POURQUOI
- ÉCHELLES : absentes de l'entrée 4e. Elles figurent en 5e (l. 1005, « échelle »
  citée dans les contextes du coefficient de proportionnalité) et en 3e
  (l. 1050-1051, automatisme « calculer la distance réelle […] carte routière »).
  Déjà traitées dans la fiche 5e, § 6. Non reprises ici.
- VITESSE comme notion nouvelle : « vitesse moyenne » est nommée en CINQUIÈME
  (l. 1005) et la fiche 5e a un § 7 dessus. En 4e le texte dit « grandeurs
  quotients, avec ou sans unités » (l. 1028) : la vitesse n'est donc plus qu'un
  EXEMPLE parmi d'autres, et l'apport 4e est le quotient + l'unité composée.
  C'est ainsi que le § 2 la traite — pas comme une notion neuve.
- « GRANDEURS COMPOSÉES » / grandeurs produits : l'expression n'apparaît NULLE PART
  dans le fichier du programme. Vérifié par recherche. Aucune section là-dessus.
- FONCTIONS LINÉAIRES : TROISIÈME (l. 1057 « Connaitre et utiliser les fonctions
  linéaires », l. 1063, l. 1065). Le chapeau les cite (l. 976) mais comme
  application du cycle 4 dans son ensemble. Rien en 4e.
- « TRADUIRE une augmentation ou une diminution en pourcentages » (retrouver le TAUX
  à partir de deux valeurs) est un objectif de TROISIÈME (l. 1055). En 4e le texte ne
  demande que le sens taux -> coefficient (l. 1033-1034). Je n'ai donc PAS enseigné la
  méthode « taux d'évolution = (arrivée - départ) / départ ». Le § 7 « Le lire à
  l'envers » se limite à interpréter un coefficient donné, ce qui relève de
  « définir le coefficient multiplicateur ». LIMITE FINE : à valider par le relecteur.
- PARTAGE selon un RATIO : automatisme de TROISIÈME (l. 1046-1047). Mais « résoudre
  des problèmes de partage proportionnel » est bien un objectif de QUATRIÈME
  (l. 1035). Le § 8 partage proportionnellement à des nombres donnés, sans employer
  l'écriture ratio dans la consigne, pour ne pas empiéter sur la 3e. À arbitrer.

POINTS À TRANCHER PAR LE RELECTEUR
1. NOTATIONS FONCTIONNELLES — l. 985-986 : « Les notations fonctionnelles de type
   P(A), p(t) ainsi que la flèche -> sont utilisées progressivement dans tous les
   chapitres du programme. » La fiche 5e « Fonctions » a signalé cette ambiguïté et
   a tranché NON pour la 5e, en argumentant que « progressivement » plaidait pour la
   4e/3e (voir son bloc de notes, point 1).
   MON CHOIX ICI, pour rester cohérent avec elle : j'introduis UNE SEULE trace, la
   FLÈCHE, au § 7 (« valeur de départ --x CM
```

### puissances  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Nombres et calculs », section « Quatrième » (lignes 509 à 580),
entrée « Puissances » : lignes 544 à 555.

Automatismes (lignes 546-549) :
- « Connaitre et reconnaitre les carrés parfaits des entiers de 0 à 12 »
- « Puissances simples : 2² = 4 ; 2³ = 8 ; 3³ = 27 »
  (ces deux-là relèvent du chapitre 5e -> bloc « Ce que tu sais déjà », non retraités)
- « Multiplier et diviser par 10, 100, 1 000 ; savoir compléter 1 200 = 1,2 × … »
  et « 10² = 100 ; 10³ = 1 000 » -> section 2

Objectifs d'apprentissage (lignes 552-555), traités un par un et DANS L'ORDRE :
- « Définir les puissances d'exposant positif d'un nombre a » -> section 1
- « Multiplier des puissances d'exposant entier naturel d'un même nombre entre
  elles » -> section 3 (a^m x a^n = a^(m+n))
- « Multiplier des puissances d'un même exposant entier naturel de deux nombres
  entre elles » -> section 4 (a^n x b^n = (ab)^n)
- « Résoudre des problèmes faisant intervenir des puissances » -> section 5

⚠️ PÉRIMÈTRE — POINT LE PLUS IMPORTANT DE CETTE FICHE :
Trois notions qu'on attribue spontanément à la 4e ne sont PAS dans l'entrée 4e.
Le texte les place explicitement en TROISIÈME (entrée « Puissances », l. 591-601) :
- « Définir les puissances d'exposant négatif d'un nombre » (l. 597) -> 3e
- « Multiplier et diviser des puissances » (l. 598) : la DIVISION est en 3e
- « Déterminer la notation scientifique d'un nombre » (l. 600) et « Résoudre des
  problèmes notamment en utilisant la notation scientifique » (l. 601) -> 3e
Confirmation : les automatismes de 3e (l. 593-595) sont exactement les deux règles
de multiplication enseignées ici — c'est bien l'acquis de 4e remobilisé en 3e.
=> Cette fiche s'arrête aux EXPOSANTS POSITIFS et à la MULTIPLICATION. Aucun
exposant négatif, aucune division de puissances, aucune notation scientifique.
La section 6 le dit explicitement à l'élève.

⚠️ POINTS À TRANCHER PAR LE RELECTEUR :
1. (a^m)^n — la puissance d'une puissance — n'apparaît DANS AUCUNE des trois
   entrées « Puissances » (5e, 4e, 3e) du texte. Je ne l'ai donc pas traitée.
   À confirmer : est-ce une omission du texte, ou est-elle réellement hors cycle 4 ?
2. EXPOSANT 0. Le texte dit « exposant positif » (552) et « exposant entier
   naturel » (553-554) — en convention française, les deux incluent 0. La règle
   a^m x a^n = a^(m+n) appliquée à m = 0 impose a^0 = 1. J'ai malgré tout
   DÉLIBÉRÉMENT ÉCARTÉ a^0 de la fiche (définition posée pour n >= 1), parce que
   la définition par produit itéré ne le donne pas et qu'aucun automatisme ne le
   mentionne. À TRANCHER : faut-il l'ajouter ?
3. PUISSANCES DE 10 (section 2). Ce n'est PAS un objectif d'apprentissage de 4e :
   c'est un automatisme (549) plus « 1 200 = 1,2 × … » (547). Je lui ai donné une
   section entière parce qu'elle sert d'appui à « Résoudre des problèmes » (555)
   et que le commentaire général du thème (lignes 348-353) rattache explicitement
   les puissances de dix à exposant POSITIF aux grands nombres de l'astronomie,
   de la physique et de l'informatique. Vérifier que le poids donné est le bon.
4. BASE NÉGATIVE (section 1 et pièges 4). Le texte dit « puissances d'exposant
   positif d'un nombre a », sans restreindre a aux positifs, et « Multiplier deux
   nombres relatifs » est un objectif 4e du même thème (ligne 519). J'en ai déduit
   que (-2)^4 et le piège -2^4 sont dans le périmètre. À confirmer : c'est mon
   inférence, elle n'est pas écrite noir sur blanc dans l'entrée « Puissances ».
5. La PLACE DES PUISSANCES DANS LES PRIORITÉS (section 6) n'est pas écrite dans
   l'entrée 4e (elle est reprise du chapitre 5e). Convention standard, non citée.
6. Titre retenu : « Puissances d'exposant positif ». Le BO dit seulement
   « Puissances ». Choix fait pour distinguer du chapitre 5e et de celui de 3e.

Le chapitre 5e (contenu/cinquieme/maths/puissances/fiche.md) est cité en prérequis
et son contenu n'est pas répété : notation a^n, carré, cube, carrés de 0 à 12,
10^2 et 10^3, priorités. Seul le strict rappel de repérage figure en tête de fiche.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### racine-carree  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt — « Annexe 2 – Programme de mathématiques
pour le cycle 4 », domaine « Nombres et calculs », niveau QUATRIÈME, entrée
« Racine carrée », lignes 556 à 564.

Contenu littéral de l'entrée — c'est TOUT ce que le texte donne pour la 4e :
- l. 558 (automatismes) : « Donner les carrés des nombres entiers compris entre 0 et 12. »
- l. 560 : « Comprendre et connaitre la définition de la racine carrée d'un nombre positif. »
- l. 561 : « Encadrer la racine carrée d'un entier par deux nombres entiers consécutifs. »
- l. 563 (prolongement) : « Découverte de l'existence de nombres irrationnels (lien entre
  l'aire d'un carré et la longueur d'un de ses côtés). »
- l. 564 (prolongement) : « √2 n'est pas décimal (démonstration par l'absurde en
  considérant le chiffre des unités). »

Cadrage du domaine, l. 344-345 : « La racine carrée est introduite, en lien avec des
situations géométriques (longueur du côté d'un carré d'aire donnée, théorème de
Pythagore). » — justifie le §5. Pythagore n'est PAS traité ici : il relève de l'entrée
« Triangles » (Espace et géométrie, Quatrième, l. 800). Le §5 annonce seulement le lien.

PÉRIMÈTRE — CE QUI A ÉTÉ VOLONTAIREMENT EXCLU
- √(ab) = √a × √b et √(a/b) = √a/√b : ces règles n'apparaissent NULLE PART dans le texte
  du cycle 4 — ni en 4e (l. 556-564), ni en 3e (l. 605-614). Vérifié par recherche sur
  tout le fichier : « racine » n'apparait qu'aux lignes 15, 20, 344, 556, 560, 561, 564,
  605, 610, 614. Elles ne sont donc pas dans la fiche.
  ⚠️ POINT N°1 À TRANCHER : confirmer sur le PDF que ces règles ont bien disparu du
  collège (ou qu'elles passent en Seconde). C'est le choix de périmètre le plus lourd.
- √(a²) = |a| : hors programme (la valeur absolue n'est pas au cycle 4). La propriété 2
  est donc énoncée UNIQUEMENT pour a positif, avec avertissement explicite dans la fiche.
- Résolution de x² = a : le texte la place en TROISIÈME (l. 609). Absente.
- Simplification de radicaux (√50 = 5√2) : absente du texte, absente de la fiche.

POINTS À SOUMETTRE AU RELECTEUR
1. (ci-dessus) √(ab) = √a√b : absence confirmée dans l'extraction, à confronter au PDF.
2. Propriété 3 (croissance : a < b ⟹ √a < √b). Non énoncée telle quelle dans le texte,
   mais l'objectif « encadrer… par deux entiers consécutifs » ne se justifie pas sans
   elle. Introduite comme outil, sans démonstration. Bon niveau de formalisme pour une
   4e, ou faut-il rester purement intuitif ?
3. Le §6 (√2 non décimal) est un « prolongement possible », donc NON exigible : isolé
   sous « Pour aller plus loin ». À garder, alléger, ou sortir ? La démonstration suit
   l'indication du BO (« chiffre des unités ») en version simplifiée ; le passage « son
   dernier chiffre n'est pas 0 » suppose l'écriture décimale réduite, implicite ici.
4. Le mot « irrationnel » est-il à donner en 4e ? Le texte dit « découverte de
   l'existence de nombres irrationnels » : je l'ai nommé, sans le définir.
5. Le §2 lit la table des carrés de 0 à 12 dans les DEUX sens (carré → racine). Le texte
   n'exige littéralement que « donner les carrés ». Le sens inverse me parait
   indispensable pour l'encadrement — à confirmer.
6. Racines de décimaux (√0,09) : non traitées, le texte dit seulement « un nombre
   positif ». Vérifier qu'elles ne sont pas attendues.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
```

### reperage  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE
/tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt, thème « Espace et
géométrie », section Quatrième, entrée « Repérage sur une droite et dans le plan »,
lignes 759 à 765. (La plage 755-809 fournie couvre aussi Transformations,
Représentation de l'espace, Parallélogrammes et translations, Triangles : NON traités
ici, ce sont des chapitres distincts.)

CONTENU TEXTUEL EXACT DE L'ENTRÉE 4e (lignes 759-765) — intégralité, rien d'omis :
  « Repérage sur une droite et dans le plan / Automatismes
    − Placer sur une droite graduée un point dont l'abscisse est un nombre relatif.
    − Repérer un nombre relatif sur une droite graduée.
    − Dans le plan muni d'un repère orthogonal :
      • lire les coordonnées d'un point donné ;
      • placer un point de coordonnées données. »

⚠️ POINT LE PLUS IMPORTANT POUR LE RELECTEUR — L'APPORT DE LA 4e EST QUASI NUL,
ET C'EST ASSUMÉ.
L'entrée 4e ne comporte AUCUNE ligne « Objectifs d'apprentissage » : uniquement des
automatismes. Vérifié ligne à ligne — la rubrique suivante, « Représentation de
l'espace », commence en 766. Formellement, aucune notion nouvelle à enseigner en 4e.

Cela CORRIGE la note laissée par l'auteur de la fiche de 5e
(/tmp/kamal-campus/contenu/cinquieme/maths/reperage/fiche.md, bloc de notes) :
« l'entrée Repérage de 4e, lignes 759-765, reprend les mêmes objectifs ». Inexact :
la 4e ne reprend pas les objectifs de 5e, elle les DÉCLASSE en automatismes.
  - 5e automatismes (l. 670-671) : demi-droite graduée + nombres DÉCIMAUX.
  - 5e objectifs (l. 673-678)    : droite graduée (lire/placer) + plan repéré
                                   (lire/placer les coordonnées).
  - 4e automatismes (l. 761-765) : droite graduée + nombres RELATIFS, ET plan repéré
                                   (lire/placer les coordonnées).
Autrement dit : les objectifs de 5e deviennent mot pour mot les automatismes de 4e, et
l'automatisme de droite s'élargit (demi-droite → droite, décimal → relatif). C'est
l'axe autour duquel toute la fiche est construite (section 1).
=> À VALIDER : assumer dans l'appli l'angle « chapitre de consolidation, pas de
   nouveauté » ? Alternative pour le relecteur : fusionner avec le chapitre de 5e et ne
   garder en 4e qu'un renvoi + une batterie d'exercices d'automatisation.
=> À ANTICIPER : l'entrée de 3e (l. 811-817) est le COPIER-COLLER STRICT de celle de
   4e. Le futur 3e-math-reperage se heurtera au même constat, en pire.

⚠️ LATITUDE / LONGITUDE / SPHÈRE TERRESTRE : ABSENTS DU PROGRAMME.
La consigne de production suggérait de les couvrir « si le texte les mentionne ».
Recherche plein texte sur tout le fichier (« latitude », « longitude », « sphère
terrestre », « méridien », « parallèle terrestre », « globe ») : AUCUNE occurrence, à
aucun niveau du cycle 4 — le seul résultat était « englobe » (l. 303, pensée
informatique), sans rapport. NON TRAITÉS : les inventer aurait été hors programme.
À confirmer si l'appli veut malgré tout une fiche « bonus » là-dessus.

USAGES RETENUS À LA PLACE (section 5) — RECOUVREMENT INTER-THÈMES À ARBITRER.
Faute d'apport propre, la fiche s'appuie sur le seul emploi du repère attesté en 4e
ailleurs dans le programme : thème « Proportionnalité, fonctions », section Quatrième,
entrée « Fonctions », l. 1069 : « Représenter l'expression d'une grandeur en fonction
d'une autre par un graphique. » S'y ajoutent deux objectifs de 5e réactivés en amont
(l. 1016 « Placer dans un repère orthogonal donné des points correspondant à un tableau
de valeurs » et l. 1017 « Lire et interpréter un graphique cartésien »).
=> Ces lignes relèvent FORMELLEMENT d'un autre thème qu'« Espace et géométrie » :
   RECOUVREMENT ASSUMÉ avec le futur 4e-math-fonctions. Garder ici, alléger, ou
   renvoyer ? À arbitrer.
=> La remarque « ce n'est pas de la proportionnalité, la droite ne passe pas par
   l'origine » (exemple 1) mobilise un acquis de 5e (l. 1018-1019). Le terme « fonction
   affine » a été volontairement ÉVITÉ : c'est du programme de 3e (l. 1084).

EXCLUSIONS VOLONTAIRES (ne pas les lire comme des oublis) :
- DISTANCE ENTRE DEUX POINTS DU PLAN. Pythagore est bien au programme de 4e (l. 800) et
  la tentation de croiser les deux est forte, mais l'entrée « Repérage » de 4e ne
  mentionne ni distance ni longueur, et aucune formule de distance en repère n'apparait
  nulle part dans le fichier. NON TRAITÉ. (La fiche de 5e a une section 4 « Écart entre
  deux points d'une droite graduée » que son auteur signalait déjà comme hors
  programme : ni reprise ni prolongée ici. Si le relecteur la supprime en 5e, rien à
  corriger dans cette fiche-ci.)
- MILIEU D'UN SEGMENT et SYMÉTRIQUE D'UN POINT en coordonnées : absents du texte. Les
  entrées « Transformations » (l. 756-758) et « Parallélogrammes et translations »
  (l. 779-791) de 4e ne mentionnent jamais de coordonnées. NON TRAITÉS.
- REPÈRE ORTHONORMÉ : le programme n'écrit que « repère orthogonal », à tous les
  niveaux. La fiche insiste donc sur orthogonal ≠ orthonormé (sections 4 et 6), en
  cohérence avec la fiche de 5e — mais le mot « orthonormé » n'est jamais employé.

VOCABULAIRE À VALIDER (même réserve qu'en 5e) : « axe des abscisses », « axe des
ordonnées », « ordonnée » et la notation $A(x\,;y)$ ne figurent nulle part dans le
programme, qui se contente de « repère orthogonal » et « coordonnées ». Employés ici
parce qu'indispensables et parce que la fiche de 5e les a déjà introduits — cohérence
inter-fiches assurée. À confirmer une fois pour les deux fiches.

Durée de lecture (9 min) volontairement basse : fiche courte, adossée à celle de 5e.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
```

### representation-espace  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie », niveau
Quatrième, entrée « Représentation de l'espace », LIGNES 766 à 778 (plage fournie : 755-809).

Texte source, correspondance littérale -> fiche :
- Automatismes
  « Reconnaitre les solides : cube, pavé, cylindre, prisme droit. »              -> §1
  « Connaitre et utiliser les formules du volume d'un cube, d'un pavé, d'un
    prisme, d'un cylindre. »                                                    -> §1
  « Reconnaitre la base d'un prisme donné en perspective cavalière. »           -> §1
  « Savoir calculer l'aire des figures planes usuelles : triangle, rectangle,
    disque. »                                                                   -> §1 (tableau)
- Objectifs d'apprentissage
  « Reconnaitre des solides (pyramide, cône de révolution). »                   -> §2, §3
  « Construire et mettre en relation différentes représentations des solides
    (pavé droit, cube, cylindre de révolution, prisme droit, pyramides et cônes
    de révolution). »                                                           -> §4, §5
  « Connaitre le volume de la pyramide et du cône de révolution. »              -> §6
- Prolongements possibles : « Lien avec la pyramide du Louvre, les pyramides égyptiennes. »
  -> encadré culture §6 (pyramide du Louvre uniquement).

ARTICULATION AVEC LA 5e — VÉRIFIÉE
La fiche 5e (contenu/cinquieme/maths/representation-espace/fiche.md) couvre pavé, cube,
prisme droit, cylindre : perspective cavalière, vues/empilements, patrons, aire du disque,
volumes, unités. Ses notes de production annoncent explicitement « Pyramide et cône de
révolution : entrée de QUATRIÈME (l. 773-776) ». Le texte du BO le confirme : ces deux
solides n'apparaissent qu'en 4e. La présente fiche ne réexplique donc PAS les règles de la
perspective cavalière ni les conversions d'unités — elle les rappelle en une ligne (§1, §4,
§6) et renvoie à la fiche de 5e, citée en prérequis. L'apport réel de la 4e = pyramide,
cône, et la règle du tiers.
Convention π ≈ 3,14 reprise de la 5e. Exemples chiffrés volontairement recyclés de la 5e
(cylindre r=5 / h=12 -> 942 cm³) pour rendre le rapport 1/3 immédiatement visible
(cône identique = 314 cm³).

À TRANCHER PAR LE RELECTEUR
1. « Différentes représentations » (l. 774) : le BO de 4e ne dit plus « en perspectives
   cavalières » comme celui de 5e, il dit seulement « différentes représentations ». J'ai
   traité perspective cavalière (§4) ET patrons (§5). Faut-il aussi traiter les VUES
   (de face/dessus/côté) d'une pyramide ? Non traitées ici : elles relèvent des automatismes
   de 5e et rien ne les rattache explicitement à la 4e.
2. PATRON DU CÔNE (§5) : le secteur angulaire. Le BO ne le mentionne pas nommément (les
   patrons de pyramides sont cités en TROISIÈME, l. 823). Je l'ai gardé descriptivement,
   avec la formule de l'angle 360° × r/g placée hors encadré et étiquetée « hors programme ».
   À valider, ou à supprimer si jugé trop lourd en 4e.
3. VOCABULAIRE NON PRÉSENT DANS LE BO : « apothème » (évité, remplacé par « hauteur d'une
   face »), « génératrice » (évité, remplacé par « segment du sommet au bord de la base »),
   « pyramide régulière », « tétraèdre ». Ces deux derniers sont conservés car nécessaires
   pour parler des faces isocèles et des patrons. À confirmer.
4. DÉNOMBREMENT n+1 / 2n / n+1 (§2) : non exigible à la lettre, ajouté par symétrie avec la
   règle n+2 / 3n / 2n donnée en 5e pour le prisme. Évalué en Q8 du QCM. À valider.
5. RECOURS À PYTHAGORE (§7 et Q9 du QCM) : le théorème est au programme de 4e (entrée
   « Triangles », l. 800), mais rien n'impose de le croiser avec les solides. C'est le point
   le plus exigeant de la fiche. Le garder en 4e, ou le réserver à la 3e ?
6. PYRAMIDE DU LOUVRE (§6) : dimensions données comme approximatives (35 m de côté, 21,6 m
   de haut) — elles ne viennent PAS du BO, qui suggère seulement le lien culturel. À faire
   vérifier ou à remplacer par un énoncé sans chiffres.
7. AIRE LATÉRALE / AIRE TOTALE : jamais demandées par le BO de 4e (pas plus qu'en 5e). Non
   posées comme formules. Cohérent avec le choix fait en 5e.
8. VALEUR DE π : π ≈ 3,14 partout, comme en 5e. Vérifier que c'est bien la convention du
   projet et non la touche π de la calculatrice.

CONTRAINTE FIGURES : chapitre de géométrie dans l'espace produit SANS illustration, comme
en 5e. Compensé par deux constructions pas-à-pas numérotées (§4) et un fil d'exemples
chiffrés récurrents (pyramide base 6 / h 10 -> 120 cm³ ; cône r=5 / h=12 -> 314 cm³ ;
pyramide 6 / face 5 -> h=4 -> 48 cm³ ; entonnoir r=10 / h=30 -> 3,14 L).
Points d'insertion si des figures sont ajoutées plus tard : §4 (les deux constructions),
§5 (les deux patrons), §7 (le triangle rectangle des trois hauteurs).
Le tracé décrit au §4 a été vérifié : avec une fuite vers le haut-droite, le sommet caché
d'une base carrée ABCD est bien D, l'arrière-gauche (image de A par la fuyante) — c'est le
seul sommet intérieur au contour du dessin. Cohérent avec la fiche de 5e.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### statistiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : docs/programme-college-cycle4-maths-2026.txt — chapeau du thème
« Organisation et gestion de données et probabilités » l. 861-885 (partie statistiques du
chapeau : l. 861-872) ; section « Quatrième » / « Statistiques » l. 918-935 (automatismes
920-923, objectifs 924-933, prolongements 934-935).

CHAPITRE CRÉÉ LE 2026-08-12. Premier chapitre du niveau 4e du dépôt.

Couverture, item par item — tout ce que contient la section est traité, rien d'autre.
Automatismes (l. 920-923) → § 1 (fréquence seulement rappelée : traitée en entier en 5e).
Objectifs (l. 924-933) : moyenne pondérée en données brutes / tableau / diagramme en barres
→ § 3 (les TROIS formes, dans l'ordre du texte) ; médiane + interprétation → § 4 ; étendue +
interprétation en données brutes / tableau / diagramme en barres / diagramme circulaire → § 5
(les QUATRE formes) ; ajout d'une valeur extrême → § 6 ; problèmes avec les différents
indicateurs et comparaison de séries → § 7 ; tableur → § 8. Chapeau (l. 863-872) : « esprit
critique [...] présentations trompeuses » → § 6 et § 7 ; « tableur » → § 8.

PÉRIMÈTRE — EXCLU car relevant de la 3e (l. 947-958) : quartiles, effectifs cumulés
croissants, boites à moustache, médiane depuis un tableau d'effectifs ou un diagramme.
L'ÉTENDUE, elle, est bien un objectif de 4e (l. 928-929) : traitée.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :

1. MÉDIANE, EFFECTIF PAIR. Le texte dit « déterminer UNE médiane » : au sens strict, toute
   valeur entre les deux centrales partage la série en deux. La fiche enseigne la convention
   de la demi-somme (§ 4). Faut-il dire à l'élève que c'est une convention ?

2. MÉDIANE LIMITÉE AUX DONNÉES BRUTES. Le texte de 4e la restreint aux séries « présentée[s]
   sous forme de données brutes » ; la médiane depuis un tableau d'effectifs n'apparait qu'en
   3e. La fiche s'y tient — plus strict que beaucoup de progressions. À confirmer.

3. SENS DE « PONDÉRÉE ». Les formes de présentation citées par le texte imposent des poids
   = EFFECTIFS. La fiche ne traite donc PAS la moyenne à coefficients (« devoir coefficient
   3 »), pourtant l'acception courante du mot. À trancher.

4. ARTICULATION AVEC LA 5e. La fiche 5e traite déjà le calcul « valeur × effectif » sous le
   nom de moyenne simple ; la 4e le renomme moyenne pondérée. Le § 3 assume ce recouvrement
   et insiste sur les trois formes de présentation. Progression lisible ?

5. DATE DU BO, comme pour toutes les fiches du cycle 4 (voir la note de la fiche 5e). Et
   FORMULES TABLEUR en français (MOYENNE, MEDIANE, MAX, MIN) : à aligner sur l'outil de la
   classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformations  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »
(intro du thème : l. 645-666), section « Quatrième », l. 755-809.

⚠️ PÉRIMÈTRE — LE POINT À TRANCHER EN PRIORITÉ. L'entrée « Transformations » de la 4e
(l. 756-758) ne contient RIEN d'autre qu'UN automatisme : « − Construire le symétrique
d'un point par demi-tour. » Aucun objectif d'apprentissage ne lui est rattaché, et la
translation n'y figure PAS : elle est dans l'entrée SUIVANTE, « Parallélogrammes et
translations » (l. 779-793), objet du chapitre produit en parallèle. Cette fiche a donc
été construite, selon la consigne, comme le chapitre « la transformation elle-même » :
l. 758 (automatisme demi-tour) → §1 ; l. 781-784 (dire si deux figures sont images l'une
de l'autre par symétrie axiale ou demi-tour en identifiant l'axe ou le centre ;
déterminer les images) → §1 et §6 ; l. 789 « Comprendre l'effet d'une translation. » →
§2-§3 ; l. 791 « Connaitre et utiliser les propriétés de conservations des
translations. » → §4-§5 ; l. 790 « Faire le lien avec les parallélogrammes, les
angles. » → SEULE la partie « angles » est traitée (§4), le parallélogramme est laissé à
l'autre chapitre. LE DÉCOUPAGE ENTRE LES DEUX CHAPITRES EST DONC ÉDITORIAL, PAS CELUI DU
BO : risque qu'un objectif soit traité deux fois, ou aucune. À relire conjointement.

Recherche refaite sur tout le fichier (confirme la vérification faite en 5e) : ROTATION (autre
que le demi-tour) et HOMOTHÉTIE : AUCUNE occurrence dans le cycle 4 — non introduites, le mot
« rotation » est même évité. TRANSLATION : l. 35, 41, 779, 789, 791 (4e) et 849-856 (3e).
VECTEUR : 3e seulement (l. 854-857) — aucune notation vectorielle, le mot n'apparait pas.

À TRANCHER PAR LE RELECTEUR
1. NIVEAU D'EXIGENCE. Le BO de 4e dit « Comprendre l'EFFET d'une translation » ; la
   définition ponctuelle avec parallélogramme est un objectif de 3e (l. 853). D'où l'absence
   de définition formelle : caractérisation par l'effet, entrée par « la translation qui
   transforme A en A' ». Bon curseur ?
2. VOCABULAIRE « direction / sens / longueur » (§2) et mot « glissement » : PAS dans le BO de
   4e, et c'est le vocabulaire du vecteur en 3e. Retenu faute d'alternative. À valider.
3. CONSTRUIRE l'image par translation (§3) : EXTENSION de ma part — le BO de 4e ne demande
   de construire que le symétrique par demi-tour (l. 758) et l'automatisme « déterminer
   les images » (l. 783-784) ne cite que symétrie axiale et demi-tour. Jugé indispensable
   pour « comprendre l'effet ». À confirmer, surtout sur feuille blanche (parallèle +
   compas), plus exigeant que sur quadrillage.
4. LISTE DES CONSERVATIONS (§4) : le BO écrit « les propriétés de conservations » sans les
   énumérer. Ma liste : longueurs, angles, aires, alignement, parallélisme, sens de lecture.
   Doute : les AIRES sont-elles exigibles ? Incluses par cohérence avec la 5e et parce que
   l'intro du thème (l. 661-664) fait des « preuves utilisant les aires » un fil rouge et
   insiste sur « l'identification d'invariants ».
5. §5 « La refaire deux fois… » + dernière ligne du tableau récapitulatif : l'enchainement
   de deux translations est un objectif de 3e (l. 856). Présenté ici sans formalisme, comme
   simple CONTRASTE avec le demi-tour (involutif, vu en 5e). À retirer si c'est jugé
   anticiper — de même que la translation nulle (§5). Concerne aussi la question 10 du QCM.
6. §6, critère « les segments [MM'] sont parallèles, de même longueur et de même sens » :
   caractérisation que le BO n'énonce pas en 4e (elle relève de la définition de 3e).
   Utilisée UNIQUEMENT comme critère visuel, pour servir l'automatisme des l. 781-784
   étendu à la translation. Le plus discutable après le n°1 ; cf. questions 6 et 9 du QCM.
7. Prolongement culturel (l. 793, Escher / Alhambra) : deux lignes, faute de figures.

ARTICULATION AVEC LA 5e : le chapitre 5e « Transformations : symétrie axiale et demi-tour »
est cité en prérequis et n'est pas réexpliqué (§1 = tableau de rappel, pas un cours).
Vocabulaire « demi-tour, ou symétrie centrale » repris tel quel, dans l'ordre du BO.
Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à un
site de cours. Statut : brouillon, non relu.
```

### triangles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.txt), domaine « Espace et
géométrie », niveau QUATRIÈME, section « Triangles », LIGNES 794 à 809.

Capacités citées par le texte et couvertes ici :
- l. 796-797 (automatisme) « Reconnaitre des droites remarquables, y compris dans les
  triangles particuliers (médiatrices, médianes, hauteurs, bissectrices) » → §1
- l. 799 « Connaitre les trois théorèmes relatifs à la droite des milieux » → §2
- l. 800 « Connaitre le théorème de Pythagore, sa réciproque, sa contraposée » → §3-5
- l. 801 « Mener un travail de logique sur la réciproque et la contraposée » → §6
- l. 802-803 « Caractériser un triangle rectangle à l'aide de son cercle circonscrit,
  par son inscription dans un demi-cercle dont le diamètre est un côté » → §7
- l. 805 « Déterminer le centre du cercle circonscrit d'un triangle rectangle » → §7
- l. 806 « Construire des rectangles sans équerre » → §8
- l. 809 « Quelques repères historiques autour de Pythagore » → corde à 13 nœuds, §8

PÉRIMÈTRE — vérifications faites dans le texte, à confirmer par le relecteur :

1. TRIGONOMÉTRIE (cosinus, sinus, tangente) : NON traitée. Le texte la place en
   TROISIÈME — l. 845 « Connaitre et utiliser les lignes trigonométriques dans le
   triangle rectangle : cosinus, sinus, tangente », section « Triangles » du niveau
   Troisième (qui commence l. 810). Rien de trigonométrique dans la section 4e.

2. DISTANCE ENTRE DEUX POINTS D'UN REPÈRE : NON traitée. L'expression est ABSENTE de
   tout le document (recherche « distance » : seules occurrences l. 1004 et l. 1050,
   en proportionnalité/échelles, « distance réelle entre deux villes »). La section
   « Repérage sur une droite et dans le plan » de la 4e (l. 759-765) ne contient que
   des automatismes de lecture et de placement de coordonnées. Le calcul de distance
   par Pythagore dans un repère ne figure donc ni ici ni dans le repérage 4e.
   → À TRANCHER : omission de l'extraction, ou attendu réellement retiré ?

3. THÉORÈME DE THALÈS : en Troisième (l. 843-844), pas ici.

4. l. 808 « Théorème de Varignon : l'élève étudie la démonstration historique
   d'Euclide basée sur les aires » — ligne INCOHÉRENTE dans l'extraction : le
   théorème de Varignon (quadrilatère des milieux) n'a pas de rapport avec la
   démonstration de Pythagore par les aires. Deux prolongements semblent avoir
   fusionné. Je n'ai développé ni l'un ni l'autre (prolongements, pas attendus).
   → À CONFRONTER AU PDF.

5. Les « trois théorèmes de la droite des milieux » : le texte les cite sans les
   énoncer. J'ai retenu le triplet usuel (parallélisme / longueur moitié / réciproque
   du milieu). → À VALIDER : est-ce bien ce découpage qui est attendu ?

CONTINUITÉ AVEC LA 5e : la fiche 5e-math-triangles-angles couvre la somme des angles,
les triangles particuliers, l'inégalité triangulaire et la rédaction « On sait que /
Or / Donc » — non refaits ici. La médiatrice et le cercle circonscrit y sont posés
(programme 5e, l. 723 et 727) : le §7 les réutilise sans les redéfinir.

ARTICULATION AVEC « RACINE CARRÉE » (4e) : chapitre 4e-math-racine-carree produit en
parallèle. L'extraction et l'encadrement de la racine y sont traités (l. 560-561) ;
on s'y réfère explicitement (§3 et §9) sans les refaire. Le programme fait lui-même
le lien, l. 344-345 : « La racine carrée est introduite, en lien avec des situations
géométriques (…) théorème de Pythagore ».

À RELIRE EN PRIORITÉ : la justesse des exemples chiffrés (3-4-5 ; 13/5 → 12 ;
2 et 3 → √13 ≈ 3,6 ; 6-8-10 rectangle en S ; 4-5-6 non rectangle).

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## quatrieme / physique-chimie

### interactions-forces  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO, education.gouv.fr / eduscol),
thème « Mouvement et interactions », section « Interactions et forces (4e) »
(docs/programme-college-physique-chimie-cycle4.txt, lignes 73-76). Contenu couvert :
  - interactions contact / à distance ;
  - modélisation d'une action par une force : point d'application, direction, sens,
    valeur en newton ;
  - interactions magnétiques (pôles, attraction/répulsion) ;
  - champ magnétique terrestre.
Extraction via WebFetch depuis le programme officiel — à confronter au PDF officiel avant
publication (le .txt est un extrait des « connaissances et compétences associées »).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le POIDS (P = m × g) et la valeur g ≈ 10 N/kg figurent au programme de 3e
  (« Poids, gravitation et forces », lignes 105-108), PAS en 4e. Je ne l'ai donc PAS traité
  ici et j'ai remplacé « poids » par des ordres de grandeur qualitatifs (≈ 1 N pour 100 g).
  Vérifier que ce parti pris convient à la progression choisie.
- Subtilité passée sous silence volontairement (niveau 4e) : le Nord géographique de la Terre
  correspond en réalité à un pôle SUD magnétique — c'est pourquoi le pôle Nord de l'aiguille
  y est attiré. J'ai gardé la formulation simple « l'aiguille pointe vers le Nord » sans
  entrer dans cette inversion, source de confusion à ce niveau. À valider.
- Notion de « champ » : au collège on reste qualitatif (la Terre agit comme un aimant). Le
  spectre du champ (lignes de champ, limaille de fer) est-il attendu en 4e ? Non inclus.
- Vocabulaire « ferromagnétique » : peut-être trop savant pour la 4e ; à alléger si besoin.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### mouvement-vitesse  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), thème « Mouvement et
interactions », section « Mouvement : la relation v = d/t (4e) »
(docs/programme-college-physique-chimie-cycle4.txt, lignes 68-71) :
  - Connaître et exploiter la relation v = d/t.
  - Nature de la trajectoire et évolution de la vitesse (uniforme, accéléré, ralenti).
  - Mouvement circulaire uniforme (exemples astronomiques).
Prérequis pris dans la même source, section « Mouvement et vitesse (5e) », lignes 40-43.

⚠️ À CONFRONTER AU BO PDF PAR UN PROFESSEUR :
- Le facteur de conversion 3,6 (km/h ↔ m/s) et la « règle du triangle » sont des outils
  pédagogiques usuels, non des exigences littérales du texte : à valider comme aide.
- La distinction vitesse moyenne / vitesse instantanée est-elle attendue explicitement en 4e,
  ou seulement effleurée ? Je l'ai introduite brièvement pour justifier « vitesse moyenne ».
- Le vocabulaire « ralenti / décéléré » : le programme écrit « ralenti ». J'ai gardé ce terme
  et signalé « décéléré » comme synonyme.
- Aucune notion vectorielle (vecteur vitesse) : réservée au lycée, volontairement exclue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### organisation-matiere  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : Programme de physique-chimie du cycle 4 (BO), classe de 4e, thème
« Organisation et transformations de la matière », sous-partie « Organisation de la
matière : atomes et molécules ». Extrait officiel dans
docs/programme-college-physique-chimie-cycle4.txt, section QUATRIÈME, lignes 58-62 :
- Échelles macroscopique et microscopique.
- États physiques (compact ordonné, compact désordonné, dispersé désordonné).
- La matière est constituée d'atomes et de molécules ; symboles, formules (O2, H2O, CO2).
- Solubilité selon soluté et solvant.
Origine indiquée dans l'en-tête du fichier source : education.gouv.fr, programme cycle 4
(https://www.education.gouv.fr/media/228616/download), BO MENE1530367A, extrait via WebFetch.
À CONFRONTER AU PDF OFFICIEL avant publication.

⚠️ POINTS À SOUMETTRE AU RELECTEUR (professeur de physique-chimie) :
- Ordre de grandeur de la taille d'un atome (~0,1 nm) : donné à titre indicatif ; est-il
  attendu/exigible en 4e, ou seulement une illustration ? À trancher.
- Valeur de solubilité du sel (~360 g/L à 20 °C) : ordre de grandeur usuel, à vérifier ; sert
  uniquement de support au calcul m_max = s × V. La formule/notion de solubilité chiffrée en
  g/L est-elle explicitement au programme de 4e ou relève-t-elle d'un approfondissement ? Le
  programme dit « solubilité selon soluté et solvant » — l'aspect quantitatif (g/L, saturation)
  est ici ajouté comme support calculatoire ; à valider.
- Exemples de solvants (cyclohexane) et de soluté (diiode) : classiques au collège, à confirmer
  comme acceptables au niveau 4e.
- Vocabulaire « compact/dispersé, ordonné/désordonné » repris tel quel du programme.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### propagation-signal  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du CYCLE 4 (classe de 4e),
education.gouv.fr / BO (MENE1530367A), extrait dans
docs/programme-college-physique-chimie-cycle4.txt, section « Propagation d'un signal (4e) »
(lignes 83-86 du .txt). Contenu du programme couvert :
- transmission d'un signal par propagation d'une onde, sans transport de matière ;
- vitesse de propagation v = d/t ;
- ondes sonores (milieux matériels) et lumineuses (vide et milieux transparents),
  vitesses caractéristiques (son ~340 m/s dans l'air, lumière 3×10⁸ m/s).

Rédaction originale à partir du programme, ton collège (~13 ans). Aucun emprunt à un manuel.

⚠️ À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- Valeurs numériques secondaires (son dans l'eau ~1500 m/s, acier ~5000 m/s) données à
  titre indicatif : à conserver ou non selon le niveau d'exigence retenu en 4e ?
- L'écriture scientifique 3×10⁸ est-elle attendue en 4e, ou faut-il privilégier
  300 000 km/s ? (les puissances de 10 sont vues en maths 4e — prérequis déclaré).
- Le vocabulaire « célérité » est-il souhaité dès la 4e, ou réservé au lycée ?
- La chaîne émetteur/milieu/récepteur est un cadre pédagogique, pas un attendu explicite
  du BO : à valider.
Statut : brouillon, non relu.
```

### puissance-energie  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), classe de 4e, section
« Puissance et énergie (4e) » du fichier docs/programme-college-physique-chimie-cycle4.txt
(lignes 78-81). Attendus retenus :
  - Modes de transfert (électrique, thermique, rayonnement, mécanique).
  - Relation P = E/t.
  - Puissance électrique P = U × I ; puissance du générateur = somme des puissances des dipôles.
Le texte de référence utilisé est l'extrait fourni dans le dépôt ; à confronter au PDF officiel
du BO (programme de cycle 4) par un professeur avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La relation E = P × t (retournement de P = E/t) est ici présentée en 4e ; le programme la
  situe explicitement en 3e (chaîne d'énergie, ligne 112). Je l'ai incluse comme simple
  réécriture de P = E/t car elle est indispensable aux exercices, mais à valider quant au niveau.
- Le kilowattheure et sa conversion en joules : présenté en culture (facture) ; vérifier s'il
  est exigible en 4e ou attendu plus tard.
- La relation P = U × I est-elle attendue seulement en courant continu, ou aussi évoquée en
  alternatif (secteur 230 V) ? J'ai utilisé 230 V comme valeur réaliste sans entrer dans
  l'alternatif ; à trancher.
- Les valeurs numériques (lampe 60 W, radiateur 1000 W, grille-pain 1150 W) sont réalistes mais
  arbitraires : aucune n'est imposée par le programme.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformation-conservation-masse  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), extrait
docs/programme-college-physique-chimie-cycle4.txt, section « Transformation chimique et
conservation de la masse (4e) » (ligne 64), qui liste :
  - Conservation de la masse lors d'une transformation chimique.
  - Réactifs et produits ; équation de réaction (approche).
Le prérequis « atomes, molécules, symboles et formules O2/H2O/CO2 » vient de la section 5e du
même fichier (lignes 60-61). L'approfondissement « redistribution des atomes / conservation
des éléments » et l'ajustement systématique relèvent formellement de la 3e (ligne 102) : en 4e
on reste sur une APPROCHE (comptage d'atomes sur des exemples simples). J'ai gardé des
équations très classiques (C + O2, 2 H2 + O2, CH4 + 2 O2) pour cette approche.

⚠️ À CONFRONTER AU PROGRAMME/PDF PAR UN PROFESSEUR :
- Jusqu'où va l'« approche » de l'équation de réaction en 4e ? L'ajustement de CH4 (méthode §5,
  exemple) est-il attendu en 4e, ou seulement en 3e ? À arbitrer ; il est ici donné comme
  exemple guidé, pas comme exigence.
- Le vocabulaire « réactif limitant » (§2) est-il souhaité en 4e, ou trop avancé ? Je l'ai
  mentionné brièvement sans le formaliser.
- Vérifier que le couple de valeurs de l'exemple carbone (12 g + 32 g = 44 g) est acceptable
  pédagogiquement à ce niveau (ce sont les proportions réelles C + O2 -> CO2).

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# seconde

## seconde / maths

### algorithmique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Algorithmique et programmation » (lignes 33, 594,
818 du .txt extrait). L'extraction fait apparaître « Variables et instructions élémentaires »
(ligne 892) et « Fonctions à un ou plusieurs arguments » (ligne 950), ainsi que
« Déterminer par balayage un encadrement de … », d'où la section 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les listes sont-elles au programme de seconde ? Je les utilise dans un exemple — à vérifier,
  car c'est un point de périmètre.
- Le programme précise-t-il les modules autorisés (random, math) ?
- Les fonctions à plusieurs arguments sont explicitement mentionnées : le périmètre exact
  (récursivité exclue ? portée des variables ?) reste à confirmer.
- Le programme mentionne (ligne 1761) une restriction « Toute autre utilisation est hors
  programme » : vérifier qu'elle ne concerne pas ce bloc.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### arithmetique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde, partie « Nombres et
calculs, algèbre », section « Arithmétique »
(docs/programme-seconde-2026.txt).

RÉÉCRITURE DU 2026-08-10, à la suite d'un dépistage systématique des 50 fiches contre
les programmes réextraits. Quatre sections de la version précédente ont été signalées
comme n'ayant aucun mot-clé commun avec le programme de seconde ; vérification faite,
le diagnostic était fondé.

Contenu réel de la section « Arithmétique » du programme de seconde :
- Contenus : notations ℕ et ℤ ; définitions de multiple, diviseur, nombre pair, nombre
  impair, avec la formulation « a est multiple de b s'il existe un entier k tel que
  a = kb ».
- Capacités attendues : modéliser et résoudre des problèmes mobilisant ces notions ;
  présenter les fractions sous forme irréductible.
- Démonstrations : « pour une valeur numérique de a, la somme de deux multiples de a est
  multiple de a » ; « le carré d'un nombre impair est impair ».
- Exemples d'algorithme : déterminer si a est multiple de b ; pour a et b donnés,
  déterminer le plus grand multiple de a inférieur ou égal à b.

Ce que cela change :

- HORS PROGRAMME DE SECONDE : critères de divisibilité, division euclidienne, nombres
  premiers, test de primalité par les diviseurs jusqu'à √n, décomposition en facteurs
  premiers. Aucun de ces termes n'apparaît dans le programme de seconde — vérifié :
  « euclidienne » 0 occurrence, « nombre premier » 0, « PGCD » 0. Ces notions relèvent
  du cycle 4. Elles occupaient les sections 1 à 3, soit l'essentiel de la fiche.
  Regroupées en section 9, explicitement signalées comme rappels hors programme, plutôt
  que supprimées : elles restent utiles et l'élève les rencontrera.
- MANQUAIENT : les notations ℕ et ℤ, la définition officielle du multiple par
  l'existence de k, la mise sous forme irréductible d'une fraction, les DEUX
  DÉMONSTRATIONS EXIGIBLES, et les deux algorithmes. Tous ajoutés.
- Les anciennes sections 4 et 5 (raisonnement type, contre-exemple) étaient justes et
  sont conservées, l'exemple de la section 7 ayant été changé pour ne plus reposer sur
  la notion de nombre premier.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le choix de conserver les rappels du cycle 4 en section 9 : un professeur peut
  préférer les retirer complètement pour ne pas surcharger.
- La formulation de la démonstration exigible n° 1 : le texte dit « pour une valeur
  numérique de a ». J'ai pris a = 7 puis signalé la généralisation. Vérifier que c'est
  bien l'attendu, et non une démonstration littérale.
- « Présenter les fractions sous forme irréductible » est traité sans nommer le PGCD,
  absent du programme de seconde. À valider.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### calcul-numerique-algebrique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), blocs « Nombres et calculs » et « Calcul numérique et
algébrique ». Le programme comporte une rubrique « Automatismes » explicite, dont s'inspire
l'insistance de cette fiche sur les réflexes de calcul.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme contient une section « Arithmétique » distincte (ligne 1656 du .txt) :
  divisibilité, nombres premiers, décomposition. Elle fait l'objet d'une fiche séparée —
  vérifier qu'il n'y a pas de recouvrement à arbitrer.
- La valeur absolue et les intervalles : périmètre exact à confirmer (distance sur la droite
  réelle, encadrements, approximation).
- Les « Démonstrations » exigibles de ce bloc (l'irrationalité de √2 en est une candidate
  classique).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### droites-du-plan  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Géométrie », section repérée à la ligne 2584 du
.txt extrait (« équations de droite »). L'extraction montre aussi un intitulé « Droites du
plan ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les systèmes de deux équations à deux inconnues relèvent-ils de ce chapitre ou du bloc
  « Algèbre » ? Je les ai rattachés ici pour l'interprétation géométrique, à arbitrer.
- La méthode du pivot / combinaison linéaire est-elle exigible, ou seulement la substitution ?
- Les démonstrations exigibles de cette section.
- La distance d'un point à une droite n'est PAS traitée (elle relève de la première).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### equations-inequations  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Algèbre » (ligne 1941 du .txt extrait).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des inéquations en seconde : les inéquations produit et quotient
  sont-elles exigibles, ou seulement le premier degré ? J'ai inclus les deux, ce qui est
  l'usage courant, mais à vérifier sur le nouveau texte.
- Les systèmes de deux équations à deux inconnues relèvent-ils de ce chapitre ou de la
  section « Droites du plan » ? Je ne les ai pas traités ici.
- Le programme mentionne « Déterminer par balayage un encadrement de … » (visible dans
  l'extraction) : cette méthode approchée est-elle rattachée aux équations ? À vérifier et
  à ajouter le cas échéant.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonctions-de-reference  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Fonctions ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La fonction CUBE est-elle bien au programme de seconde dans le nouveau texte ? Elle y
  figurait dans le programme précédent, mais je ne l'ai pas vue explicitement dans mon
  extraction — à vérifier avant publication, c'est un point de périmètre net.
- La fonction valeur absolue est-elle une fonction de référence en seconde ?
- Les fonctions homographiques relèvent-elles de la seconde ou de la première ?
- Les démonstrations exigibles sur les variations (par exemple la décroissance de l'inverse
  démontrée par le calcul de f(b) - f(a)).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### notion-de-fonction  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), sections « Notion de fonction » (ligne 945 du .txt) et
« Fonctions et représentations » (ligne 1419). Le programme mentionne explicitement les
représentations « par des programmes de calcul, par des tableaux de valeurs » (ligne 2773)
et les « extrémums » (ligne 2996) — j'ai structuré la fiche autour de ces marqueurs.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les définitions formelles de croissance/décroissance sont-elles exigibles en seconde, ou
  seulement l'approche par tableau et lecture graphique ?
- La résolution graphique d'inéquations est-elle explicitement au programme ?
- Le programme mentionne « Déterminer par balayage un encadrement de … » : cette méthode
  se rattache-t-elle à ce chapitre (résolution approchée de f(x) = k) ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### probabilites  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Probabilités » (lignes 67 et 1521 du .txt).
L'extraction fait apparaître « Calculer des probabilités » et « A et de B » (traces de la
formule d'inclusion-exclusion).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'échantillonnage et la fluctuation : quel est leur périmètre exact en seconde ? J'en donne
  une approche qualitative seulement. L'intervalle de fluctuation est-il exigible ?
- Les probabilités conditionnelles ne sont PAS en seconde (elles sont en première) : je ne les
  ai pas introduites.
- Le dénombrement est-il formalisé (arbres, tableaux uniquement) ou va-t-il plus loin ?
- La simulation avec Python est-elle rattachée à ce chapitre ou au bloc « Algorithmique » ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### statistiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Statistiques » (lignes 1475 et 3241 du .txt).
L'extraction fait apparaître explicitement « Croisement de deux variables qualitatives » et
« Dresser le tableau croisé de deux variables », d'où la section 5.
Le programme met aussi en garde (ligne 3606) : « leur utilisation inappropriée mène facilement
à de fausses affirmations » — j'ai traduit cet avertissement dans les erreurs à éviter.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'écart-type est-il au programme de seconde, ou seulement en première ? Je ne l'ai PAS
  inclus — à vérifier, c'est un point de périmètre net.
- Les diagrammes en boîte (boîtes à moustaches) sont-ils exigibles ?
- La convention de calcul des quartiles varie selon les manuels : celle retenue par le
  programme doit être confirmée, car elle change les résultats numériques.
- Les démonstrations ou capacités liées à la linéarité de la moyenne.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### vecteurs  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Géométrie ». L'extraction fait apparaître un
intitulé « Caractérisations de la colinéarité de deux vecteurs », ce qui confirme que le
déterminant est bien au programme.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le mot « déterminant » est-il employé par le programme, ou parle-t-on seulement de
  « critère de colinéarité » ? Le vocabulaire attendu compte pour la notation.
- Les démonstrations exigibles de cette section.
- La décomposition d'un vecteur dans une base est-elle au programme de seconde ?
- Le produit scalaire n'est PAS en seconde (il est en première) : je ne l'ai pas introduit.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## seconde / physique-chimie

### description-matiere  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de la classe de seconde générale et
technologique, BO spécial n° 1 du 22 janvier 2019
(docs/programme-pc2nde.pdf, thème « Constitution et transformations de la matière »,
sections « Description et caractérisation de la matière » et « Corps purs et mélanges »).

⚠️ IMPORTANT — DATE DU PROGRAMME : contrairement aux mathématiques, la physique-chimie n'a
PAS été réformée pour la rentrée 2026. Le programme applicable reste celui de 2019. Ce contenu
n'expirera donc pas en 2027, contrairement à ce qui vaut pour les maths de terminale.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Confirmer qu'aucun arrêté postérieur à 2019 n'a modifié ce programme.
- Le périmètre exact des techniques de séparation exigibles (chromatographie sur couche mince ?).
- La constante d'Avogadro est-elle à connaître par cœur ou fournie ?
- Les valeurs numériques de masses molaires sont-elles fournies (tableau périodique autorisé) ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### modelisation-microscopique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de seconde générale et technologique,
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc2nde.pdf, thème « Constitution et
transformations de la matière », section « Modélisation microscopique », ligne 1695 du .txt).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La notation des configurations électroniques : le programme de seconde utilise-t-il la
  notation en sous-couches (1s² 2s² 2p⁴) ou l'ancienne notation en couches (K)²(L)⁶ ?
  C'est un point de périmètre décisif — j'ai retenu la notation en sous-couches, usuelle
  depuis 2019, mais à confirmer impérativement.
- Le remplissage est-il limité aux 18 premiers éléments ?
- Les représentations de Lewis sont-elles exigibles en seconde ou en première ?
- L'électronégativité et la polarité des liaisons relèvent-elles de la seconde ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### mouvement-interactions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de seconde générale et technologique,
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc2nde.pdf, thème « Mouvement et
interactions », ligne 1877 du .txt extrait ; « Mouvement rectiligne » ligne 2084).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La valeur de g à retenir : 9,8 ou 9,81 N·kg⁻¹ ? Vérifier ce que le programme et les sujets
  utilisent.
- La notion de référentiel galiléen est-elle explicitement au programme de seconde, ou
  introduite seulement en première ? Je l'ai mentionnée dans l'énoncé du principe d'inertie.
- Les frottements sont-ils modélisés quantitativement en seconde ?
- La troisième loi de Newton (actions réciproques) est-elle au programme de seconde ?
  Je l'ai seulement évoquée pour la gravitation.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### ondes-signaux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de seconde générale et technologique,
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc2nde.pdf, thème « Ondes et signaux »,
ligne 2273 du .txt extrait ; « Signaux et capteurs » ligne 2648).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La relation de conjugaison des lentilles et le grandissement sont-ils au programme de
  SECONDE ou seulement de première ? Je ne les ai PAS inclus, me limitant à la construction
  géométrique — point de périmètre à trancher.
- Le programme de seconde couvre-t-il la réflexion totale et l'angle limite ?
- Les lois de Snell-Descartes sont-elles exigibles en seconde, ou introduites en première ?
- Le niveau d'intensité sonore en décibels est-il quantitatif (formule logarithmique) ou
  seulement qualitatif en seconde ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformations-matiere  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de seconde générale et technologique,
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc2nde.pdf, section « Modélisation des
transformations », ligne 1542 du .txt extrait). Le programme mentionne explicitement
« l'éthane et du méthane » dans un fragment extrait, cohérent avec les exemples de combustion.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le tableau d'avancement est-il au programme de SECONDE, ou introduit seulement en
  PREMIÈRE ? Je ne l'ai PAS développé ici, me limitant à la notion qualitative de réactif
  limitant — point de périmètre à trancher.
- La radioactivité β⁺ est-elle exigible en seconde, ou seulement α et β⁻ ?
- Les énergies molaires de réaction relèvent-elles de la seconde ou de la première ?
  (L'extraction du programme de première mentionne « Énergie molaire de réaction ».)
- La demi-vie et la décroissance radioactive sont-elles au programme de seconde ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# sixieme

## sixieme / maths

### configurations-planes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source unique : /tmp/kamal-campus/docs/programme-college-cycle3-maths-2025.txt, thème
« Espace et géométrie », niveau Sixième, « Étude de configurations planes », l.1210-1292.
Correspondances : distance + milieu (l.1242-1243) → §2 ; cercle/disque/rayon/diamètre/
corde (l.1246-1247) → §3 ; médiatrice + propriété caractéristique (l.1251-1253) → §4 ;
lexique + mesurer + construire un angle (l.1256-1259) → §5 ; bissectrice d'un angle
saillant (l.1260-1263) → §6 ; triangles, somme des angles, médiatrices concourantes,
cercle circonscrit (l.1264-1274) → §7 ; symétrique + propriétés (l.1275-1280) → §8 ;
cubes (l.1281-1292) → §9.

À trancher par le relecteur :
- §1 (point/droite/segment/demi-droite + notations) n'est PAS un objectif explicite de la
  section 6e ; relève des acquis CM (l.1212-1214) et automatismes (l.1234), ajouté à la
  demande de la consigne comme rappel — garder ou alléger ?
- « Angles opposés par le sommet égaux » : le programme ne liste que le lexique (l.1257) ;
  propriété d'égalité ajoutée par moi — confirmer qu'elle est attendue en 6e.
- Inégalité triangulaire : le programme dit seulement « trois longueurs ne permettent pas
  toujours un triangle » (l.1266-1267) sans critère formel ; critère (plus grand côté <
  somme des deux autres) ajouté — valider en 6e.
- Périmètre cycle 4 exclu (symétrie centrale = 5e, angles alternes-internes…) ; sans
  figures, vérifier chaque protocole de construction comme exact et exécutable tel quel.

Rédaction originale à partir du seul programme officiel. Aucun emprunt. Brouillon non relu.
```

### durees  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel, docs/programme-college-cycle3-maths-2025.txt,
« Programme de cycle 3 (2025) », domaine « Grandeurs et mesures », section Sixième
(en-tête ligne 1021), entrée « Le repérage dans le temps et les durées »,
lignes 1080 à 1098.

Éléments explicitement lisibles dans la source :
- « L'élève lit l'heure sur un cadran à aiguilles ou sur un affichage digital
  (heures, minutes et secondes) » -> section 4
- « L'élève place les aiguilles pour qu'une horloge indique une heure donnée »
  -> évoqué en section 4 (lecture du cadran)
- « L'élève connaît les unités de mesure de durées jour, heure, minute et seconde
  et les relations qui les lient » -> sections 1 et 2
- « combien de jours il y a dans une année (bissextile ou non), combien d'années
  il y a dans un siècle, et dans un millénaire » -> section 2 et tableau
- « une demi-heure c'est 30 minutes, qu'un quart d'heure c'est 15 minutes, que
  trois quarts d'heure c'est 45 minutes » -> section 3
- « Effectuer des calculs sur des horaires et des durées » -> sections 5 et 6
- « Résoudre des problèmes impliquant des horaires et des durées » -> section 8
- « Convertir des durées » -> section 7

POINTS À SOUMETTRE AU RELECTEUR :
- Le système sexagésimal (60 s = 1 min, 60 min = 1 h) et la « retenue de 60 » sont
  au cœur de la fiche, conformément à la consigne. La source ne cite pas
  explicitement « 60 s = 1 min » mais parle des « relations qui les lient » : à
  confirmer que la formulation retenue est conforme à l'attendu de 6e.
- La convention « ajouter 12 h l'après-midi » (format 24 h vs 12 h) n'est pas
  explicitement dans la plage citée : je l'ai ajoutée car indispensable à la lecture
  de l'heure et aux problèmes. À valider.
- La « semaine = 7 jours » n'est pas dans la plage citée non plus (la source cite
  jour/heure/minute/seconde, année, siècle, millénaire). Ajoutée par cohérence du
  tableau — à trancher : la garder ou la retirer pour coller strictement au texte.
- Les « mises en perspective historiques » (calendriers julien/grégorien, année
  tropique, clepsydres, lignes 1094-1098) sont culturelles et non calculatoires :
  je ne les ai pas traitées dans le cours (hors objectifs de calcul/conversion).
  À confirmer que c'est le bon périmètre.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fractions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle3-maths-2025.txt,
« Programme de cycle 3 (2025) », section Sixième, entrée « Les fractions »,
lignes 758 à 884.

Éléments explicitement lisibles dans la source, et où ils sont traités :
- « partie d'un tout » / partage en parts égales (l.762-765) → section 1
- fraction unitaire 1/4 comme nouvelle unité de mesure ; 7/4 = somme de sept 1/4 ;
  fractions supérieures à 1 (l.766-784) → section 2
- « Placer une fraction sur une demi-droite graduée dans des cas simples » /
  « Graduer un segment de longueur donnée » (l.855-856) → section 3
- sens quotient : a/b = a÷b, définition du quotient de a par b non nul,
  « égalités à trous » multiplicatives (l.785-799, 852-854) → section 4
- « Savoir que la fraction a/b peut représenter un nombre entier, un nombre décimal
  non entier ou un nombre non décimal » (l.857-858) → sections 4 et 8
- passage écriture fractionnaire ↔ décimale : 1/4=0,25 ; 1/2=0,5 ; 3/4=0,75 ;
  3/2=1,5 ; 4/2=2 ; 5/2=2,5 (l.836-843) ; lien numération décimale / fractions
  décimales (l.756-757) → section 5
- « Établir des égalités de fractions » / « Reconnaitre des fractions égales »
  (l.811, 867) → section 6
- « Comparer et encadrer des fractions » / « Ordonner une liste de nombres » /
  connaître les relations entre 1/4, 1/2, 3/4 et 1 (l.817-820, 868-869) → section 7

⚠️ PÉRIMÈTRE — POINT À TRANCHER PAR LE RELECTEUR (le plus sensible) :
La consigne de production demande de NE PAS déborder sur le cycle 4 (opérations sur
les fractions et rationnels négatifs = 5e/4e) et de ne pas empiéter sur la fiche 5e
existante (contenu/cinquieme/maths/fractions/fiche.md), qui traite déjà : addition
et soustraction, « prendre une fraction d'un nombre », pourcentages, simplification,
somme entier + fraction inférieure à 1.
OR la section Sixième du programme cycle 3 (2025) liste AUSSI, sous 6e :
  - « Additionner et soustraire des fractions » (l.872)
  - « Multiplier une fraction par un nombre entier » (l.873) / fraction opérateur
    multiplicatif (l.859-863)
  - « Pourcentages » : sens, proportion, appliquer un pourcentage (l.876-880)
  - simplification évoquée dans les automatismes (l.844-845)
Ces items ont été VOLONTAIREMENT laissés de côté ici pour respecter la consigne et
éviter le doublon avec la fiche 5e. Décision de périmètre à confirmer par un
professeur : faut-il, pour la 6e, introduire au moins l'addition/soustraction de
fractions de MÊME dénominateur et l'application d'un pourcentage simple, qui figurent
bien au programme officiel de 6e ? À défaut, la fiche 6e est conforme mais partielle
par rapport à la lettre du programme.

Autres points à vérifier par le relecteur :
- Profondeur attendue en 6e sur les « fractions égales » : simple reconnaissance
  (choix retenu ici) ou déjà simplification par un diviseur commun ?
- Le « guide-âne » / réseau de droites parallèles (l.794-795) n'a pas été détaillé
  (outil de classe, difficile à rendre sans schéma) — à confirmer.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### gestion-donnees  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle3-maths-2025.txt,
thème « Organisation et gestion de données et probabilités », niveau Sixième,
entrée « Organisation et gestion de données », lignes 1377 à 1399.

Éléments explicitement lisibles dans la section (lignes 1377-1399) :
- Rappel élémentaire (l. 1379-1382) : « tableaux à simple ou double entrée,
  diagrammes en barres ou courbes » ; lecture/interprétation d'« un tableau à double
  entrée, un diagramme en barres, un diagramme circulaire et d'une courbe » ;
  « problèmes en une ou deux étapes ».
- « consolide ces notions, en menant lui-même les différentes phases d'une enquête
  statistique » (l. 1383).
- Automatismes (l. 1391-1392) : « lire un tableau, un diagramme en barres, un
  diagramme circulaire ou une courbe dans des cas adaptés à une lecture immédiate ».
- Objectifs d'apprentissage (l. 1395-1398) : « Planifier une enquête et recueillir
  des données » ; « Réaliser des mesures et les consigner dans un tableau » ;
  « Construire un tableau simple pour présenter des données (observations,
  caractères) » ; « Faire un choix en filtrant les données d'un tableau selon un
  critère ».

PÉRIMÈTRE : la section « Les probabilités » commence l. 1399 et constitue un
chapitre distinct — volontairement NON traitée ici, conformément à la consigne.

POINTS À SOUMETTRE AU RELECTEUR :
1. VOCABULAIRE. La consigne de production parlait de « diagrammes en bâtons » et de
   « graphiques cartésiens simples ». Le programme officiel dit « diagramme en
   barres », « diagramme circulaire » et « courbe ». J'ai suivi le vocabulaire du
   PROGRAMME (règle : ordre et vocabulaire du programme, pas des manuels), en
   signalant « parfois appelé diagramme en bâtons ». À valider.
2. Le mot « moyenne » n'apparaît pas dans la section 6e : je ne l'ai donc PAS
   introduit. Les calculs proposés se limitent à des sommes, différences et
   pourcentages simples (« problèmes en une ou deux étapes »). À confirmer que la
   moyenne relève bien du cycle 4 et non de la 6e.
3. Programme = construction ET lecture. Les deux sont couvertes, mais l'appli étant
   en lecture seule, la partie « construire » reste théorique (pas d'interactif).
4. Contexte « données d'actualité (climat, pollution, biodiversité) » (l. 1384-1385)
   évoqué via l'exemple de la cantine ; un exemple climat plus explicite est possible.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### initiation-algebre  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : /tmp/kamal-campus/docs/programme-college-cycle3-maths-2025.txt,
« Programme de cycle 3 (2025) », niveau Sixième, entrée « Algèbre », lignes 885 à 901.

Éléments explicitement lisibles dans la source et repris tels quels :
- « raisonner sur les relations entre des quantités plutôt que sur les valeurs
  elles-mêmes » (l. 890-891) → section 1
- « représentations visuelles et des outils […] tels que les motifs évolutifs et les
  schémas en barre » (l. 892-893) → sections 2 et 3
- « les quantités inconnues sont exprimées à l'aide de mots, de dessins ou
  éventuellement de lettres » (l. 894-895) → notion « quantité inconnue »
- « Ce n'est qu'au cycle 4 que les lettres seront introduites de manière formelle […]
  ce n'est pas un objectif prioritaire en 6e » (l. 895-896) → encadrés d'avertissement
- Objectifs (l. 898-901) : « Résoudre des problèmes mettant en jeu des nombres inconnus »,
  « Utiliser des modèles pré-algébriques pour résoudre des problèmes algébriques »,
  « Identifier la structure d'un motif évolutif en repérant une régularité et en
  identifiant une structure » → sections 3 (stratégies) et titres des notions.

BRIÈVETÉ VOULUE ET CONFORME : ce chapitre est délibérément court et concret. La source
officielle est brève (17 lignes), insiste sur le caractère non prioritaire de
l'abstraction en 6e et interdit le calcul littéral formel. Étendre artificiellement la
fiche reviendrait à sortir du périmètre du programme. La longueur est donc en dessous de
la fourchette habituelle (180-280 lignes) de façon assumée.

À CONFRONTER AU PROGRAMME / À SOUMETTRE AU RELECTEUR :
- PÉRIMÈTRE CENTRAL : aucun calcul littéral (pas de x). Confirmer qu'aucun des exemples
  (structure « triple du numéro + 1 », remontée d'opérations) n'est perçu comme du calcul
  littéral déguisé — tout est formulé en mots, conformément à la source.
- La « stratégie 3 » (retrouver un nombre inconnu en remontant les opérations) n'est pas
  nommée explicitement dans la source ; elle découle de « Résoudre des problèmes mettant
  en jeu des nombres inconnus » (l. 898). À valider : est-ce dans l'esprit du programme
  ou faut-il la retirer ?
- Vocabulaire « motif évolutif », « régularité », « structure » : repris mot pour mot de
  la source. Vérifier qu'on n'attend pas un vocabulaire d'accompagnement plus précis.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### longueurs-aires-volumes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle3-maths-2025.txt
« Programme de cycle 3 (2025) », thème « Grandeurs et mesures », niveau Sixième.
- Intro de la section Sixième : lignes 1021-1035 (contexte et périmètre du champ).
- « Les longueurs » : lignes 1036-1054.
- « Les aires » : lignes 1055-1073.
- « Les volumes » : lignes 1074-1079.

CE QUE LE TEXTE ATTRIBUE VRAIMENT À LA 6e (vérifié ligne à ligne)
- Longueurs : préfixes kilo→milli, relations entre unités successives (×10),
  conversions vers/depuis le mètre, compas comme report, périmètre = longueur du
  contour, périmètre du CARRÉ et du RECTANGLE (l. 1046-1047).
- NOUVEAU en 6e : périmètre du DISQUE — « proportionnel au diamètre », « connaître la
  formule », « calculer » (l. 1050-1052). Le texte tolère « périmètre du cercle » comme
  abus de langage (l. 1025). Périmètres de figures composées (l. 1053).
- Aires : comparer sans mesure, 1 cm²/dm²/m² = aire du carré d'1 cm/dm/m de côté,
  1 m² = 100 dm², 1 dm² = 100 cm², 1 cm² = 0,01 dm² (l. 1058-1067) ; conversions d'aire,
  formule et calcul de l'aire du CARRÉ et du RECTANGLE (l. 1070-1072).
- Volumes : UNIQUEMENT « connaître l'unité centimètre cube », « comparer des volumes »,
  « déterminer un volume » (l. 1077-1079) ; intro : découverte de l'unité cm³ et
  détermination de volumes « en lien avec le dénombrement d'assemblages de cubes »
  (l. 1030-1031).

FORMULES QUE J'AI INTRODUITES (NON écrites littéralement dans le texte)
Le programme demande de « connaître la formule » mais ne l'écrit pas. J'ai donc rédigé :
- P_carré = c×4, P_rectangle = (L+l)×2  → le texte impose seulement « savoir calculer ».
- P_disque = π×D = 2πr, avec π ≈ 3,14  → le texte dit « connaître la formule du périmètre
  du disque » et « proportionnel au diamètre » mais ne donne NI la formule NI la valeur de
  π. À faire valider : est-ce π×D ou 2πr qui est attendu en 6e, et quelle valeur de π
  (3,14 ? 3,14159 ? touche π de la calculatrice ?).
- A_rectangle = L×l, A_carré = c×c  → le texte demande « connaître la formule » sans
  l'écrire.

POINTS À SOUMETTRE AU RELECTEUR (périmètre / conformité)
1. TRIANGLE : la consigne de production mentionnait « aire du triangle », mais le texte de
   6e ne parle QUE de l'aire du carré et du rectangle. Je n'ai donc PAS traité l'aire du
   triangle (elle relève d'un niveau ultérieur). À confirmer.
2. VOLUME DU PAVÉ : la consigne mentionnait « volume du pavé » et « formule ». Le texte de
   6e ne donne AUCUNE formule de volume ni le mot « pavé » : il se limite à l'unité cm³,
   comparer, et déterminer un volume par dénombrement de cubes. J'ai donc décrit la
   détermination par comptage de cubes (avec un exemple 4×3×2) SANS énoncer la formule
   V = L×l×h comme formule à mémoriser. À confirmer : peut-on introduire V = L×l×h en 6e
   ou faut-il rester au dénombrement ?
3. UNITÉS / CONVERSIONS DE VOLUME : la consigne évoquait « unités de volume » et
   « conversions ». Le texte de 6e ne nomme QUE le cm³ et ne demande AUCUNE conversion de
   volume (contrairement aux aires). Je n'ai donc pas mis de tableau de conversion de
   volumes. À confirmer.
4. CYLINDRE : hors 6e (relève de la 5e) — non traité, conforme à la consigne.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### nombres-entiers-decimaux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle3-maths-2025.txt
« Programme de cycle 3 (2025) », section Sixième, entrée « Les nombres entiers et
décimaux », lignes 657 à 757.

Éléments explicitement lisibles dans la source et utilisés ici :
- « le milliard est introduit » (l. 662) → section 3, grands nombres.
- « écriture sous forme de pourcentage » / « connaître la définition d'un
  pourcentage » (l. 666, 722) → section 4.
- Automatismes l. 682-702 : relations entre 1/1000, 1/100, 1/10 et 1 ;
  équivalences 1/10 = 0,1 ; 1/100 = 0,01 ; 1/1000 = 0,001 → section 2.
- Exemple des quatre écritures de 4,107 (l. 703-709) : repris tel quel en
  section 5 (4107/1000 ; 4 + 107/1000 ; 4 + 1/10 + 7/1000 ; 4,107).
- Multiplication / division d'un décimal par 1, 10, 100, 1000 et par 0,1 / 0,01
  (l. 710-712, 732) → section 6, traitée UNIQUEMENT comme procédure de
  numération (déplacement de la virgule), pas comme opération générale.
- Objectifs d'apprentissage l. 718-730 : valeur des chiffres selon le rang ;
  unités de numération ; grands nombres ; reconnaître un décimal ; différentes
  écritures (virgule, fraction, nombre mixte, pourcentage) ; demi-droite graduée
  (placer / repérer, abscisse) ; comparer / ordonner ; arrondi à l'unité, au
  dixième, au centième, y compris nombres non décimaux ; encadrer / intercaler.

PÉRIMÈTRE (décision à confirmer par le relecteur) :
- La consigne demandait de couvrir : numération de position, lecture/écriture des
  grands nombres et des décimaux, demi-droite graduée, comparaison, encadrement,
  arrondi, décomposition. La fiche s'y tient.
- Les OPÉRATIONS présentes dans la source mais HORS de cette liste n'ont PAS été
  traitées comme telles : addition/soustraction de décimaux (l. 731), sens et
  calcul de la multiplication de deux décimaux (l. 734-737), division décimale
  et division euclidienne (l. 738-741), ordre de grandeur pour contrôler (l. 736).
  À confirmer : ces opérations relèvent-elles d'un chapitre séparé ?

POINTS À SOUMETTRE AU RELECTEUR :
- Définition de « nombre décimal » (section 4) : la source dit « reconnaître un
  nombre décimal » sans donner de définition formelle. J'ai retenu « écriture à
  virgule finie / fraction décimale », cohérent avec l'opposition « nombres non
  décimaux » de la source (l. 729). À valider.
- « Nombre mixte » (section 5) : la source le cite comme écriture (l. 723) sans
  le définir ; je l'ai présenté comme « entier + fraction inférieure à 1 ».
- Exemple d'arrondi d'un non-décimal : j'ai pris 2 ÷ 3 ≈ 0,67. La division n'est
  pas l'objet du chapitre ; vérifier que l'exemple reste acceptable en 6e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### pensee-informatique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle3-maths-2025.txt — thème « Initiation à la pensée
informatique ». Chapeau du thème lignes 1484-1498 (contexte cycle 2/3 : codages de
déplacements, programmes de calcul, programmes de construction géométrique) ; rappels CM1/CM2
lignes 1499-1542 (programmes de calcul « choisir un nombre / ajouter / multiplier / écrire »,
programmes de construction). Section « Sixième » lignes 1543-1552 (SEULE source des contenus
propres au niveau).

Les 4 objectifs d'apprentissage de la section Sixième sont couverts :
- « Identifier une instruction ou une séquence d'instructions » → § 1 et 2.1
- « Produire et exécuter une séquence d'instructions » → méthodes 1 et 2
- « Répéter à la main une séquence d'instructions pour accomplir une tâche imposée » → 2.3 et
  méthode 3
- « Programmer la construction d'un chemin simple » → 2.4 et méthode 4
Les notions annoncées dans le chapeau de la section 6e (instructions, séquences, entrées,
sorties, répétitions) sont toutes présentes : § 1, 2.1, 2.2, 2.3.

CONTINUITÉ AVEC LA 5e (contenu/cinquieme/maths/pensee-informatique/fiche.md) :
conventions de pseudo-code reprises À L'IDENTIQUE — blocs indentés, `avancer de 50`,
`tourner de 90°`, programme de calcul `choisir / ajouter / multiplier / afficher`,
`répéter n fois … fin répéter`, exemple carré A/B (25 vs 17). Objectif : que l'élève retrouve
la même écriture d'une année sur l'autre. La 5e ajoute ENSUITE variable (lecture), expression
informatique et priorités, boucle « inconditionnelle » nommée : VOLONTAIREMENT ABSENTS ici.

PÉRIMÈTRE 6e — ce qui n'est PAS traité, à confirmer par le relecteur :
- Pas de variable formelle (nom désignant une donnée) : le texte de 6e ne l'introduit pas ;
  les programmes de calcul manipulent « le nombre » sans le nommer. C'est en 5e que la
  variable apparaît (en lecture).
- Pas de priorités opératoires ni d'« expression informatique » : un programme de calcul de
  6e se déroule étape par étape (séquentiel), il n'est pas une expression à parenthéser.
  C'est ce qui justifie le § 2.1 et l'erreur 2.
- « Répétitions » est présenté comme le fait de répéter une séquence (et de la dérouler à la
  main) ; le terme « boucle inconditionnelle » et la notation formelle relèvent de la 5e. Le
  bloc `répéter n fois` est ici une simple écriture abrégée, cohérente avec la 5e.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le texte cite « robot ou logiciel de programmation graphique par blocs comme Scratch » : la
  fiche ne nomme aucun logiciel et figure les blocs par du pseudo-code indenté. À valider comme
  représentation acceptable, cohérente avec le choix fait en 5e.
- Sortie d'un programme de calcul écrite `afficher` (comme en 5e) alors que le BO écrit « écrire
  le nombre obtenu ». Choix de continuité ; à valider.
- Angle `tourner de 90°` / `180°` pour le carré et le demi-tour : cohérence à vérifier avec la
  progression de géométrie de 6e (angles droits, demi-tours). Le raccourci 360 ÷ n n'est PAS
  posé ici (il l'est en 5e), pour rester au niveau 6e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
```

### probabilites  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source EXACTE : docs/programme-college-cycle3-maths-2025.txt, thème « Organisation et
gestion de données et probabilités », niveau Sixième, entrée « Les probabilités »,
lignes 1399 à 1421.

Objectifs d'apprentissage 6e (lignes 1419-1421) — couverture :
- « Savoir que la probabilité d'un évènement est un nombre compris entre 0 et 1 » → § 3
  (échelle des probabilités, encadrement encadré).
- « Calculer des probabilités dans des situations simples d'équiprobabilité » → § 4
  (compter a chances sur b) et § 5 (écriture en nombre a/b). Exemples : dé, sac de
  boules — tous en équiprobabilité simple.
- « Comparer des résultats d'une expérience aléatoire répétée à une probabilité
  calculée » → § 6 (tableau de 60 lancers, comparaison fréquence observée / probabilité
  calculée = approche fréquentiste des lignes 1413-1414).

Passage central de la 6e (lignes 1409-1412) : « passer de la traduction d'une
probabilité en termes de chances (a chances sur b) à son expression par le nombre égal
au quotient a/b, qui peut s'exprimer comme une fraction, un nombre décimal ou un
pourcentage » → § 4 puis § 5, avec les trois écritures. C'est le fil directeur choisi
pour la fiche.

Vocabulaire (lignes 1415-1416) : le texte précise qu'il « n'est PAS attendu que l'élève
utilise le vocabulaire spécifique (expérience, issue, univers, évènement) de manière
autonome, mais le professeur peut l'employer ». D'où § 1 qui introduit expérience /
issue / évènement AVEC une note explicite disant à l'élève qu'il n'a pas à les réciter.
« Univers » n'est volontairement PAS introduit (jugé trop abstrait pour la 6e et non
exigible). À valider par le relecteur.

QUESTION POSÉE PAR LA CONSIGNE — l'expérience à deux étapes (tableau/arbre) figure-t-elle
dans le texte de 6e ? RÉPONSE : oui, mais UNIQUEMENT dans le paragraphe de continuité
comme ACQUIS DU CM2 (lignes 1404-1408 : « Au CM2… les élèves ont appris à utiliser des
tableaux à double entrée ou des arbres… pour une expérience constituée de deux épreuves
indépendantes »). Elle NE figure PAS dans les « Connaissances et capacités attendues »
de la 6e (lignes 1417-1421). Elle n'est donc PAS traitée comme un objectif 6e : seule
une mention légère en § 4 rappelle le tableau/arbre comme outil de dénombrement déjà vu
au CM2. À CONFIRMER par le relecteur : faut-il en dire plus, ou est-ce hors périmètre 6e ?

PÉRIMÈTRE / CONTINUITÉ AVEC LA 5e (contenu/cinquieme/maths/probabilites/fiche.md) :
tension à trancher. La consigne du chapitre évoquait « ne pas déborder sur le cycle 4,
le calcul formel cas favorables/cas possibles se structurant en 5e ». Or le texte
officiel de 6e demande EXPLICITEMENT de « calculer des probabilités dans des situations
simples d'équiprobabilité » et d'exprimer a/b. Le calcul EST donc au programme de 6e.
Choix retenu pour préparer la continuité sans empiéter :
  • 6e (cette fiche) : langage « a chances sur b » → nombre a/b, échelle du langage
    courant, situations simples, approche fréquentiste qualitative.
  • réservé à la 5e (déjà rédigé) : la NOTATION formelle P(évènement), la formule encadrée
    P = favorables/total, le contrôle « somme des probabilités = 1 », l'« erreur du
    joueur » nommée. Ces éléments sont volontairement ABSENTS ici pour ne pas doublonner.
À VALIDER par le relecteur : ce partage 6e/5e est-il le bon, ou faut-il alléger encore
la 6e (par ex. retirer le § 6 fréquentiste s'il est jugé trop proche de la 5e) ?

Rédaction 100 % originale à partir du seul texte du BO. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### proportionnalite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « Programme de cycle 3 (2025) »
(docs/programme-college-cycle3-maths-2025.txt), thème « La proportionnalité »,
section Sixième, lignes 1455 à 1483.

Éléments explicitement lisibles dans l'extraction (repris fidèlement) :
- « Au cours moyen, la proportionnalité était exclusivement abordée dans le cadre des
  grandeurs et elle était identifiée par l'effet sur la seconde grandeur de la
  multiplication de la première par un nombre donné » — d'où la section 1, qui
  s'appuie explicitement sur la vision du primaire (consigne du parent).
- « La définition de la proportionnalité entre deux grandeurs est formalisée et reliée
  à l'utilisation d'expression du type "prix au kilo" » — d'où la définition + le fil
  « prix au kilo » / grandeur "par unité" constante (sections 1, 5).
- « Il résout des problèmes qui en relèvent en utilisant la procédure la mieux adaptée
  aux nombres mis en jeu : linéarité multiplicative ou additive, retour à l'unité » —
  d'où les TROIS procédures de la section 4, dans l'ordre du texte.
- « il est encouragé à laisser apparaître à l'intérieur des calculs les unités des
  grandeurs manipulées » — d'où l'insistance sur les unités (sections 5, 7, 8, 9).
- « Plusieurs outils permettent de représenter une situation : tableau, flèches,
  parenthèses (qui anticipent la notation fonctionnelle). Lorsqu'il s'agit d'un
  tableau, le nom de chaque grandeur, accompagné de son unité, y figure
  explicitement » — d'où la section 5 (tableau + flèches). La notation "parenthèses"
  n'a PAS été introduite : jugée trop en avance pour une entrée de 6e (à trancher).
- « la recherche de données manquantes... verbalise les relations entre les mesures
  (2 fois plus, 3 fois moins) ou s'appuie sur la constance d'une grandeur telle que
  "prix au kilo" ou "nombre de battements du cœur par minute" » — d'où la section 3
  (langage n fois plus/moins) et l'exemple du cœur (section 2).
- Automatismes : « double, quadruple, moitié, tiers, quart » ; « 4 fois plus grand,
  4 fois plus petit... à une multiplication ou à une division » — d'où le tableau de
  la section 3.
- « S'initier à la résolution de problèmes d'échelles » — d'où la section 6, tenue au
  niveau d'une simple initiation.
- « la technique du "produit en croix" n'est pas enseignée » — produit en croix
  VOLONTAIREMENT ABSENT.

⚠️ PÉRIMÈTRE / À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- COEFFICIENT DE PROPORTIONNALITÉ : la consigne du parent le cite entre parenthèses,
  MAIS le texte 6e ne le nomme pas comme procédure (il liste seulement linéarité
  mult./add. et retour à l'unité). Le CM interdit même explicitement le coefficient.
  J'ai donc choisi de NE PAS formaliser le coefficient en 6e : je m'en tiens à l'idée
  de grandeur « par unité » constante (prix au kilo), qui l'anticipe. Le coefficient
  formel est traité en 5e (contenu/cinquieme/maths/proportionnalite/fiche.md). POINT
  À TRANCHER par le relecteur.
- CONTINUITÉ 5e : la fiche 5e ajoute le coefficient de proportionnalité formel, le
  produit en croix, les échelles approfondies, la vitesse et les pourcentages. La
  fiche 6e s'arrête volontairement avant tout cela (reconnaissance + 3 procédures +
  tableau/flèches + initiation échelles). Vérifier qu'il n'y a ni trou ni doublon.
- POURCENTAGES / VITESSE : hors périmètre 6e ici (relèvent d'autres sections ou du
  cycle 4). Non traités.
- Représentation « parenthèses » (notation fonctionnelle anticipée) : omise ici, à
  décider si on l'introduit dès la 6e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# terminale-techno

## terminale-techno / maths

### activites-geometriques-std2a  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028. Fichier :
docs/programme-terminale-techno-2027.txt (extrait du PDF officiel
education.gouv.fr via WebFetch), section « ACTIVITÉS GÉOMÉTRIQUES (STD2A
uniquement) » (lignes 123-126). À confronter au PDF officiel avant publication.

Le texte officiel extrait est très bref : « Sections planes d'un cône de
révolution ; notion de tangente à une conique. Perspective centrale. » Le
développement (classification par l'angle plan/axe, vocabulaire des coniques,
propriétés de la perspective : point de fuite, ligne d'horizon, images de droites
parallèles, invariants) suit la commande éditoriale et l'esprit des anciens
programmes STD2A ; le PDF complet contient probablement des capacités attendues
détaillées non reprises dans l'extraction — LE RELECTEUR DOIT VÉRIFIER le
périmètre exact (notamment : constructions de tangentes exigibles ? perspective à
un ou deux points de fuite ? éléments dégénérés au programme ?).

Ce chapitre remplace « Algorithmique et programmation » pour la seule série
STD2A (le programme le dit explicitement : algorithmique « toutes séries SAUF
STD2A ») — avertissement placé en tête de fiche comme demandé.

Choix de rédaction :
- Aucune image disponible dans l'application : toutes les figures sont décrites
  verbalement (lampe torche, sablier, applique murale, voie ferrée, façade).
- Classification par l'angle β entre plan et AXE comparé au demi-angle au sommet
  α : convention la plus fréquente ; l'erreur n°1 avertit sur les conventions
  concurrentes (angle avec une génératrice, angle au sommet 2α).
- Tangente définie « touche sans traverser » + position limite de sécantes ;
  contre-exemple de la droite parallèle à l'axe d'une parabole (1 point mais
  sécante) ; asymptotes ≠ tangentes.
- Perspective : conservation (alignement, intersection, contact), non-conservation
  (longueurs, milieux, parallélisme, angles), frontales, point de fuite,
  ligne d'horizon = hauteur de l'œil, point de fuite principal, méthode des
  diagonales pour les milieux. Perspective à deux points de fuite seulement
  effleurée en exercice (approfondissement).
- « Image d'un cercle = ellipse » : le cône des rayons visuels est en général un
  cône OBLIQUE (non de révolution) ; formulation prudente dans la fiche (« le
  résultat s'étend à ce cas »). Le relecteur peut préférer supprimer la parenthèse.

Vérifications numériques : √(13²−5²) = 12 ; 6·tan30° = 2√3 ≈ 3,46 ≈ 3,5 cm.

Points à soumettre au relecteur :
- Périmètre exact des capacités attendues STD2A dans le PDF complet.
- La propriété « tangente au sommet de la parabole ⊥ axe » et « tangentes aux
  sommets de l'ellipse ∥ aux axes » : exigibles ou culture de tracé ?
- La note culturelle foyers/propriétés optiques : hors programme strict, gardée
  comme ouverture design clairement signalée.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### algorithmique-programmation  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028. Fichier :
docs/programme-terminale-techno-2027.txt (extrait du PDF officiel education.gouv.fr
via WebFetch), section « ALGORITHMIQUE ET PROGRAMMATION (toutes séries SAUF STD2A) »
(lignes 117-120). À confronter au PDF officiel avant publication : l'extraction ne
donne qu'une ligne de Contenus (« Variables, affectation ; fonctions ; listes
(génération, parcours) ; sélection de données ») et AUCUNE rubrique « Capacités
attendues » — vérifier sur le PDF si des capacités détaillées existent.

⚠️ PÉRIMÈTRE SÉRIES : ce chapitre vaut pour toutes les séries technologiques SAUF
STD2A, qui le remplace par « ACTIVITÉS GÉOMÉTRIQUES » (sections planes d'un cône de
révolution, tangente à une conique, perspective centrale — lignes 123-126 du même
fichier). Mention faite dans le corps de la fiche (avertissement en tête). Le
chapitre STD2A de remplacement n'existe pas encore dans le dépôt.

Couverture, mappée sur la ligne de Contenus :
- « Variables, affectation » -> §1 (affectation, écrasement, = vs ==, déroulé à la main)
- « fonctions » -> §2 (def / return en Python, appel, return vs print)
- « listes (génération, parcours) » -> §3 (extension, ajouts successifs par append)
  et §4 (parcours sur les éléments / par les indices, accumulateur)
- « sélection de données » -> §5 (filtrage par condition : parcours + if + append,
  variante compteur, variante sélection de rangs)

Choix de rédaction :
- Python retenu comme langage (usage établi au lycée) ; le texte extrait ne
  prescrit pas de langage — à confirmer sur le PDF.
- La génération EN COMPRÉHENSION ([f(x) for x in ...]) n'est PAS traitée : le
  programme techno dit seulement « génération », sans détail ; le choix ici est de
  s'en tenir à extension + ajouts successifs, plus accessibles. Comparer avec la
  fiche de spécialité générale (contenu/terminale/maths-specialite/listes/) qui,
  elle, traite la compréhension. Le relecteur tranchera si elle doit être ajoutée.
- Exemples reliés aux autres chapitres du même programme : termes de suites
  arithmétiques et géométriques (§1, §2, §3), capital à intérêts composés (§2),
  moyenne d'une liste (§4, lien statistiques), seuil sur une suite géométrique (§5).
- Les notions non exigées (insert, del, remove, tri, while, dictionnaires) sont
  volontairement absentes.

Vérifications numériques faites : terme(4) = 17 ; 200×1,04² = 216,32 ;
100×1,05⁹ ≈ 155,133 ; 12+15+8+17 = 52, moyenne 13 ; filtre [12,15,17] et compte 3 ;
8000×1,06^n > 10000 ⇔ 1,06^n > 1,25, or 1,06³ ≈ 1,191 < 1,25 < 1,06⁴ ≈ 1,262,
donc rangs 4 à 9 sur range(10).

POINTS À SOUMETTRE AU RELECTEUR :
- Vérifier sur le PDF officiel si la section comporte des capacités attendues
  détaillées (l'extraction n'a que les Contenus).
- Trancher : la génération en compréhension fait-elle partie de « génération » ?
- Prérequis « Variables, boucle for et range (Seconde) » : le chapitre
  contenu/seconde/maths/algorithmique/ existe ; vérifier la cohérence des
  conventions (indices, range) entre les deux fiches.
- Le float Python (1.04, résultats du type 216.32000000000002) est passé sous
  silence : les valeurs affichées sont arrondies. À valider comme simplification
  acceptable.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à
un site. Statut : brouillon, non relu.
```

### fonction-inverse  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTION INVERSE » (lignes 75-82).

Couverture, calée sur le texte officiel :
- Contenus : comportement de la fonction inverse aux bornes de son ensemble de
  définition (§2) ; dérivée, sens de variation (§3) ; courbe représentative,
  asymptotes (§2 et §4).
- Capacité : étudier et représenter des fonctions obtenues par combinaisons
  linéaires simples faisant intervenir la fonction inverse (§5, forme
  f(x) = ax + b + c/x, avec méthode et exemple complet).

Choix de rédaction :
- Comportement aux bornes décrit par tableaux de valeurs et vocabulaire
  « aussi proche/grand que l'on veut », SANS le formalisme des limites (le mot
  « limite » n'apparaît pas dans le corps) — conforme à l'esprit du programme
  techno, où les limites ne sont pas un objet d'étude.
- « La courbe se rapproche de la droite y = ax + b » : formulé en termes de
  proximité graphique et de tableau de valeurs, sans parler d'asymptote oblique
  (notion hors programme a priori).
- Prérequis : chapitre Dérivation de Première techno
  (contenu/premiere-techno/maths/derivation/) — la dérivée de 1/x y figure déjà
  dans le tableau des dérivées usuelles, ainsi que l'équation de tangente
  y = f'(a)(x-a) + f(a) réutilisée dans les exercices. Également Fonctions de la
  variable réelle (contenu/premiere-techno/maths/fonctions-variable-reelle/).

Vérifications numériques faites : f(2) = 2·2+1+8/2 = 9 ; 2x²−8 = 2(x−2)(x+2) ;
f(0,01) = 0,02+1+800 = 801,02 (≈ 800 annoncé « environ ») ; f(100) = 201,08 ;
coût moyen 0,1x²+5x+90 sur x → 0,1x+5+90/x.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La symétrie de l'hyperbole par rapport à l'origine (fonction impaire, §4) n'est
  pas citée dans l'extraction du programme : gardée comme aide au tracé, sans le
  mot « impaire ». Vérifier qu'elle n'est pas hors périmètre.
- La forme exacte des « combinaisons linéaires simples » : j'ai retenu
  ax + b + c/x (et le cas particulier b + c/x, exercice 4). Vérifier si le PDF
  donne des exemples types différents.
- Le mot « asymptote » est bien dans les contenus officiels (« Courbe
  représentative ; asymptotes ») : employé sans définition formelle par limite.
- L'étude sur ]−∞;0[ (exercice 5) : vérifier que le programme n'attend pas
  uniquement des études sur ]0;+∞[ en contexte.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonctions-exponentielles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTIONS EXPONENTIELLES x ↦ a^x (a > 0) » (lignes 53-62).
À confronter au PDF officiel avant publication.

Couverture, calée sur le texte officiel :
- Contenus : définition de x ↦ a^x pour x positif comme prolongement de n ↦ a^n
  (§1) ; sens de variation et allure de la courbe selon a (§2) ; propriétés
  algébriques a^(x+y), a^(x−y), a^(nx) (§3) ; exposant 1/n et taux moyen
  équivalent à n évolutions (§4).
- Capacités : sens de variation des fonctions k·a^x (§2) ; utiliser les
  propriétés algébriques (§3) ; calculer le taux d'évolution moyen équivalent à
  n évolutions successives (§4). La modélisation (§5) illustre ces capacités
  dans les contextes de la voie technologique (capital, dépréciation, croissance).

Prérequis : chapitre « Suites arithmétiques et géométriques » de Terminale
technologique (contenu/terminale-techno/maths/suites-arithmetiques-geometriques/) —
le taux moyen prolonge la moyenne géométrique de deux coefficients (n = 2) vue
dans ce chapitre, comme annoncé dans ses propres notes de production ; le lien
a^(x+1) = a·a^x renvoie à la raison d'une suite géométrique. Également : suites
numériques de Première techno, puissances et racine carrée, automatismes
pourcentages.

Choix de rédaction :
- « Défini pour x positif » selon le texte officiel ; l'extension à x négatif
  via a^(−x) = 1/a^x est mentionnée en passant (utile pour les propriétés
  algébriques), à confirmer au PDF si c'est hors périmètre.
- a = 1 traité en remarque (fonction constante), le programme ne le cite pas.
- k < 0 dans k·a^x : traité (une ligne + exemple) car la capacité dit « les
  fonctions k·a^x » sans restreindre k ; en contexte techno, k > 0 domine.
- Comportement en +∞ décrit qualitativement (« s'approche de 0 sans
  l'atteindre ») sans le vocabulaire des limites, absent du programme.

Vérifications numériques faites : 3^2,5 ≈ 15,59 ; 1,03^10 ≈ 1,343916 →
6 719,58 € ; √1,03 ≈ 1,014889 → 5 074,44 € ; 0,85^5 = 0,4437053125 →
5 324,46 € et −55,6 % ; 1,44^(1/2) = 1,2 exact ; 1,22² = 1,4884 ;
0,9³ = 0,729 exact ; 2^(1+2) = 8 ≠ 2^1 + 2^2 = 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact de la définition (x positif seulement ? extension à ℝ ?).
- La place de la remarque « a^x jamais nul » : formulation sans limites à valider.
- Le taux moyen : le texte dit « taux moyen équivalent à n évolutions » — ici
  n évolutions QUELCONQUES sont résumées via le coefficient global ; vérifier
  que le PDF n'attend que le cas d'évolutions données une à une.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### logarithme-decimal  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTION LOGARITHME DÉCIMAL » (lignes 65-72).
À confronter au PDF officiel avant publication.

Couverture, calée sur le texte officiel :
- Contenus : définition de log(b), pour b > 0, comme solution de 10^x = b (§1) ;
  sens de variation (§2) ; propriétés algébriques log(ab) = log a + log b et
  log(a^n) = n·log a (§3).
- Capacités : résoudre les équations du type a^x = b à l'aide du logarithme
  décimal (§4, avec l'application phare du doublement de capital) ; transformer
  des expressions avec les propriétés algébriques (§5).
- Les contextes technologiques (§6 : pH, décibels, magnitude, doublement de
  capital) illustrent les capacités dans l'esprit de la voie techno ; les
  formules pH/dB/magnitude ne sont PAS exigibles en maths, elles sont
  présentées comme données par les énoncés.

Prérequis : chapitre « Fonctions exponentielles x ↦ aˣ » de Terminale
technologique (contenu/terminale-techno/maths/fonctions-exponentielles/) —
le log est présenté comme l'outil réciproque (l'inconnue en exposant), les
propriétés algébriques comme le miroir de a^(x+y) = a^x·a^y, et √a = a^(1/2)
y a été établi. Également : suites arithmétiques et géométriques (modélisation
par q^n), puissances de 10 (Seconde), automatismes pourcentages.

Choix de rédaction :
- Le programme ne cite ni la dérivée, ni les limites, ni la courbe de log :
  rien de tout cela dans la fiche (comportement décrit qualitativement).
- log(a^n) énoncé pour n entier comme dans le BO ; les conséquences
  log(1/a), log(a/b) et log(√a) = ½log a sont présentées comme conséquences
  (√a = a^(1/2) vient du chapitre exponentielles). Vérifier au PDF si
  l'extension à un exposant réel est attendue.
- Résolution de a^x = b : cas a ≠ 1 précisé (sinon division par log 1 = 0) ;
  cas b ≤ 0 traité explicitement (pas de solution). Les INÉQUATIONS a^x < b
  ne sont pas traitées : le BO ne cite que les équations — à confirmer.
- Doublement de capital : convention « arrondir à l'année supérieure » pour la
  réponse en années entières, justifiée par encadrement (1,04^17 < 2 < 1,04^18).

Vérifications numériques faites : log 2 ≈ 0,30103 ; log 3 ≈ 0,47712 ;
log 450 ≈ 2,653 (100 < 450 < 1000) ; log 200 = 2 + log 2 ≈ 2,301 ;
10·log 3 ≈ 4,771 et 3^10 = 59 049 ∈ [10^4 ; 10^5] ; log 50 = 2 − log 2 ≈ 1,699 ;
−3 log 2 ≈ −0,903 ; log 2/log 1,04 = 0,30103/0,017033 ≈ 17,67 avec
1,04^17 ≈ 1,948 et 1,04^18 ≈ 2,026 ; log 0,5/log 0,85 = (−0,30103)/(−0,07058)
≈ 4,27 ; 2 log 2 + 5 ≈ 5,602 ; 2 log 2 + log 3 ≈ 1,079 ; 3 log 2 − log 4 =
log 2 ; pH = 4 − log 2 ≈ 3,70 ; 10 log 2 ≈ 3,0 dB ; log(2/1,04) ≈ 0,284.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- log(a^n) : n entier seulement, ou extension aux exposants réels (nécessaire
  pour résoudre a^x = b — la fiche fait descendre un exposant réel x) ?
  Le passage log(a^x) = x log a est admis ici sans commentaire.
- La place des contextes pH/dB/magnitude : le BO maths ne les impose pas,
  ils relèvent des programmes de spécialité ; vérifier qu'ils figurent bien
  dans le préambule ou les exemples du PDF.
- La convention d'arrondi (année supérieure) pour le doublement.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### logique-ensembles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« VOCABULAIRE ENSEMBLISTE ET LOGIQUE » (ligne 21).

Couverture, dans l'ordre du programme : éléments d'un ensemble, sous-ensemble,
appartenance et inclusion, réunion, intersection et complémentaire (§1-3) ; notion de
couple et produit cartésien de deux ensembles (§4) ; connecteurs « et », « ou » (§5) ;
statut d'une égalité (§6) ; contre-exemple (§7) ; proposition et réciproque (§8) ;
conditions nécessaire / suffisante (§9).

Choix de rédaction pour la voie technologique : exemples concrets (cantine, bus,
menu, permis de conduire) avant les exemples numériques ; pas de tables de vérité,
pas de quantificateurs formels (∀, ∃), pas de notation en compréhension
{x ∈ E | P(x)} — le texte extrait du programme ne les mentionne pas.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction ne donne pas la rubrique « Capacités attendues » de cette section
  (contrairement aux autres sections du fichier) : vérifier sur le PDF s'il en
  existe une et si elle exige des capacités non couvertes ici (par exemple les lois
  de De Morgan, la négation d'une proposition, ou l'écriture en compréhension).
- La notation retenue pour le complémentaire ($\bar{A}$, cohérente avec les
  probabilités) : le PDF utilise peut-être $\complement_E A$.
- Le point de vocabulaire « ou inclusif » et le lien affectation Python / statut du
  signe égal : présents dans les préambules habituels, à confirmer sur ce programme.
- L'exemple du permis à 18 ans (candidat libre) : simplification assumée d'une règle
  administrative, à valider comme illustration.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### probabilites-conditionnelles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« PROBABILITÉS — PROBABILITÉS CONDITIONNELLES » (lignes 94-102).

Couverture, calée sur le texte officiel :
- Contenus : probabilité conditionnelle (§1-2) ; formule des probabilités totales
  pour une partition de l'univers (§4).
- Capacités : construire un arbre de probabilités et interpréter les pondérations
  des branches (§3) ; faire le lien avec la définition des probabilités
  conditionnelles (§3, règle des chemins = formule du produit) ; utiliser un arbre
  pour calculer des probabilités, dont la probabilité d'un événement connaissant
  ses probabilités conditionnelles relatives à une partition (§4-5).

Prérequis : chapitre « Probabilités et variables aléatoires » de Première techno
(contenu/premiere-techno/maths/probabilites-variables-aleatoires/), qui pose les
règles de l'arbre pour des épreuves indépendantes ; ses notes signalent que les
probabilités conditionnelles n'y sont PAS traitées — elles arrivent bien ici.
Le vocabulaire ensembliste (intersection, complémentaire) est au programme de
Terminale techno (chapitre logique-ensembles du même niveau).

Choix de rédaction : contextes voie techno demandés (contrôle qualité à deux
machines, dépistage, clientèle) ; le piège n°1 (P_A(B) vs P(A∩B), et P_A(B) vs
P_B(A)) est traité trois fois : §2 (tableau des trois nombres), §5 (exemple
dépistage 0,95 vs ≈0,19) et erreurs 1-2. La notation retenue est P_A(B) (indice),
usuelle en voie technologique ; la notation P(B|A) n'est pas introduite.
L'indépendance de deux événements n'apparaît pas dans l'extraction du programme :
NON traitée, à confirmer par le relecteur.

Vérifications numériques faites :
- clientèle : 60/120 = 0,5 ; 60/80 = 0,75 ; 60/200 = 0,3.
- fidélité : 0,3 × 0,4 = 0,12.
- contrôle qualité : 0,6×0,02 = 0,012 ; 0,4×0,05 = 0,02 ; P(D) = 0,032 ;
  P_D(M2) = 0,02/0,032 = 0,625.
- fournisseurs : 0,02 + 0,03 + 0,01 = 0,06.
- dépistage : 0,01×0,95 = 0,0095 ; 0,99×0,04 = 0,0396 ; P(T) = 0,0491 ;
  0,0095/0,0491 = 0,19348… ≈ 0,19.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction ne mentionne ni l'indépendance ni la notation P(B|A) : vérifier
  sur le PDF que ces points sont bien absents du programme commun.
- La lecture dans un tableau croisé (§6, dernier paragraphe) n'est pas citée
  explicitement dans l'extraction : gardée comme support de traduction naturel
  en voie techno, à valider.
- Le mot « partition » : vérifier la définition exacte donnée par le préambule
  du PDF (événements non vides ? P(A_i) ≠ 0 exigé ?).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### statistiques-deux-variables  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« STATISTIQUE — SÉRIES À DEUX VARIABLES QUANTITATIVES » (lignes 85-91) :
- Contenus : « Changement de variable dans l'étude graphique d'une série
  statistique » ; « Ajustement se ramenant, par changement de variable, à un
  ajustement affine ».
- Capacités : « Représenter un nuage de points en effectuant un changement de
  variable donné » ; « Utiliser un ajustement pour interpoler ou extrapoler ».

Articulation avec la Première : le chapitre
contenu/premiere-techno/maths/statistiques-deux-variables/ (nuage, point moyen,
moindres carrés à la calculatrice, interpolation/extrapolation) est le prérequis
direct ; ici on n'introduit AUCUN nouveau calcul d'ajustement, seulement la
transformation préalable. Le retour à y depuis z = log(y) s'appuie sur le
chapitre « fonction logarithme décimal » de Terminale (définition 10^x = b,
propriétés log(ab), log(a^n)) et sur les fonctions exponentielles x ↦ a^x
(écriture 10^(ax+b) = 10^b·(10^a)^x). Ces deux chapitres sont cités en prérequis.

Choix de rédaction :
- Les changements retenus (log y, 1/y, y², et X = x² sur l'abscisse) sont les
  classiques du sujet ; le texte du BO ne donne pas de liste — le libellé
  « changement de variable donné » a été traduit par l'avertissement §2 : au bac
  le changement est fourni par l'énoncé.
- La capacité « représenter le nuage transformé » est traitée par les tableaux
  et la description de l'allure ; l'appli n'affiche pas de graphique dans la
  fiche.
- Le « taux caché dans la pente » (10^a − 1) est une interprétation directe des
  propriétés de log ; il fait le lien avec les automatismes (évolutions).

Vérifications numériques faites (Python) :
- §4 : log(2000, 3000, 4400, 6700, 10100) = 3,30 / 3,48 / 3,64 / 3,83 / 4,00
  (arrondis 10^-2) ; moindres carrés sur ces z arrondis : z = 0,175x + 3,30
  EXACTEMENT (x̄ = 2, z̄ = 3,65, Sxz = 1,75, Sxx = 10) ; 10^0,175 ≈ 1,4962 ;
  10^3,30 ≈ 1995 ; extrapolation x = 6 : 10^4,35 ≈ 22 387 ≈ 22 400 ;
  seuil 10^5 : x = 1,7/0,175 ≈ 9,71.
- §5 : z = 1/y = 0,33/0,50/0,67/1,00 ; moindres carrés ≈ 0,167x (b ≈ 0) ;
  y ≈ 6/x ; y(5) = 1,2 A.
- §6 : z = y² = 1,00/2,02(=1,42²)/2,99(=1,73²)/4,00 ; moindres carrés :
  a ≈ 3,988, b ≈ 0,01 → z ≈ 4x ; y = 2√x ; y(0,64) = 1,6 s.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La liste effective des changements de variable illustrés dans le préambule ou
  les commentaires du PDF officiel (l'extraction .txt ne conserve que
  Contenus/Capacités) : vérifier que log y, 1/y, y² sont bien les exemples
  visés et qu'aucun autre (√y, ln ?) n'est privilégié.
- Le logarithme utilisé : le programme de terminale techno ne définit que le
  log DÉCIMAL — toute la fiche est en log base 10, à confirmer.
- Le point moyen du nuage transformé n'est pas mentionné dans la fiche (la
  droite passe par G(x̄ ; z̄), pas par l'image de G(x̄ ; ȳ)) : point délicat,
  laissé hors fiche volontairement — valider ce choix.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### suites-arithmetiques-geometriques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — SUITES ARITHMÉTIQUES ET GÉOMÉTRIQUES » (lignes 40-50).

Couverture, calée sur le texte officiel :
- Contenus : moyenne arithmétique de deux nombres (§2), expression du terme de
  rang n (§4), somme des n premiers termes d'une suite arithmétique (§5) ;
  suites géométriques à termes strictement positifs : moyenne géométrique de deux
  nombres positifs (§2), terme de rang n (§4), somme des n premiers termes (§6).
- Capacités : prouver que trois nombres sont (ou non) des termes consécutifs (§3) ;
  déterminer la raison, exprimer le terme général (§4) ; calculer la somme des n
  premiers termes et reconnaître une situation de somme (§5-7).

Prérequis : chapitre « Suites numériques » de Première technologique
(contenu/premiere-techno/maths/suites-numeriques/), qui pose définitions, terme
général, reconnaissance des deux modèles et lien pourcentages/raison. Les sommes
n'y figurent pas (point de périmètre noté dans ses notes de production) : elles
sont bien du ressort de la Terminale d'après ce programme — cohérent.

Choix de rédaction : contextes voie techno (loyer, épargne, chiffre d'affaires,
salaires) ; restriction aux suites géométriques à termes strictement positifs,
conformément au texte (pas de raison négative) ; convention « n premiers termes »
= u_0 à u_{n-1}, avec l'avertissement systématique de compter les termes.

Vérifications numériques faites : √2,16 ≈ 1,4697 ; 1+…+100 = 5050 ;
12×(50+160)/2 = 1260 ; 2^10−1 = 1023 ; 1,1^4 = 1,4641 → 46 410 ;
1800×(1,02^12−1)/0,02 = 24 143,4 → ≈ 24 143 €.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La convention « n premiers termes » (u_0 à u_{n-1} vs u_1 à u_n) : le PDF donne
  peut-être une écriture de référence, à aligner.
- L'exemple « taux moyen » via moyenne géométrique : le calcul du taux moyen
  équivalent est officiellement dans la section FONCTIONS EXPONENTIELLES
  (exposant 1/n) — ici il n'illustre que la moyenne géométrique de deux
  coefficients, sans exposant fractionnaire. Vérifier que ce n'est pas prématuré.
- La formule 1+2+…+n = n(n+1)/2 n'est pas citée explicitement dans l'extraction :
  gardée comme cas particulier classique de la somme arithmétique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### variables-aleatoires-binomiale  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« PROBABILITÉS — VARIABLES ALÉATOIRES ET LOI BINOMIALE » (lignes 105-115).

Couverture, calée sur le texte officiel :
- Contenus : espérance d'une variable aléatoire discrète finie (§1-2) ;
  coefficients binomiaux et triangle de Pascal (§3) ; loi binomiale B(n, p) et
  son espérance (§4-6).
- Capacités : calculer et interpréter l'espérance (§2, exemples + erreur 6) ;
  calculer des coefficients binomiaux À L'AIDE DU TRIANGLE DE PASCAL (§3 —
  conformément au programme, la formule factorielle n!/(k!(n-k)!) n'est PAS
  introduite ; tout passe par le triangle, donné en tableau jusqu'à n = 8) ;
  reconnaître une situation binomiale (§4, trois conditions + contre-exemples) ;
  interpréter {X = k} (§4) ; calculer P(X = k) à l'aide des coefficients
  binomiaux (§5).

Prérequis : la notion de variable aléatoire et de loi de probabilité vient de
Première techno (probabilites-variables-aleatoires) ; le §1 la rappelle car
l'espérance n'était pas au programme de Première techno. L'indépendance des
répétitions s'appuie sur les arbres du chapitre probabilites-conditionnelles
du même niveau.

Choix de rédaction : contextes voie techno (contrôle qualité, jeu de stand,
lancers francs) ; notation binom(n,k) avec lecture « k parmi n » ; le triangle
est présenté en tableau ligne n / colonne k pour coller à la lecture demandée
aux élèves. Variance et écart-type ABSENTS de l'extraction du programme : non
traités. P(X <= k), intervalles de fluctuation, échantillonnage : absents de
l'extraction, non traités (seul P(X = k) est exigible).

Vérifications numériques faites :
- jeu de stand : E(X) = -2(0,5) + 1(0,3) + 5(0,2) = -1 + 0,3 + 1 = 0,3.
- triangle : lignes 0 à 8 recalculées de proche en proche ; C(5,2) = 4 + 6 = 10 ;
  C(8,6) = C(8,2) = 28 ; C(7,5) = C(7,2) = 21.
- lancers francs : C(4,3) = 4 ; 0,6^3 = 0,216 ; 4 × 0,216 × 0,4 = 0,3456 ;
  E = 4 × 0,6 = 2,4.
- contrôle qualité : E = 10 × 0,04 = 0,4.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Vérifier que la variance/l'écart-type sont bien absents du programme commun
  (l'extraction ne les mentionne pas).
- Vérifier la notation officielle du coefficient binomial dans le préambule du
  PDF (binom(n,k) vs C(n,k)) et l'éventuelle mention de la calculatrice.
- La justification « production assez grande pour assimiler à des tirages
  indépendants » (§4) est l'argument standard : vérifier la formulation
  attendue par le programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## terminale-techno / pc-maths-sti2d-stl

### complexes-exponentielle  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « BO spécial n°8 du 25 juillet 2019 — spécialité
physique-chimie et mathématiques, classe terminale STI2D/STL »
(docs/programme-terminale-sti2d-stl-pc-maths.txt), section « Nombres complexes
(terminale) ». Extraction texte du PDF officiel education.gouv.fr, obtenue via
WebFetch — à confronter au PDF officiel avant publication.

Contenus couverts, exactement ceux listés dans l'extraction :
- e^(iθ) = cos θ + i sin θ ; forme r·e^(iθ), r > 0 (§1-2)
- passage algébrique ↔ exponentielle (§3, capacité explicite)
- formules d'addition et de duplication (§5)
- linéarisation de cos² et sin², application aux primitives (§6)
- a·cos(ωt) + b·sin(ωt) → A·cos(ωt + φ) (§7, capacité explicite)
- équations du premier degré et z² = a (§8, capacité explicite)
- interprétation géométrique de z ↦ z + b et z ↦ az ; expressions complexes
  des translations, rotations, homothéties (§9)

Articulation avec la Première (contenu/premiere-techno/pc-maths-sti2d-stl/
nombres-complexes/) : forme algébrique, conjugué, module, argument, forme
trigonométrique déjà traités là-bas — cités en prérequis, non répétés ici.
La note de Première signalait explicitement que la notation exponentielle et
les opérations sous forme trigonométrique étaient réservées à la Terminale :
c'est ce chapitre-ci qui les prend en charge (§1 et §4).

Choix de rédaction à valider par le relecteur :
- Convention de phase : le programme demande A·cos(ωt + φ) ; j'ai donc
  cos φ = a/A et sin φ = −b/A (signe moins). Beaucoup de manuels utilisent
  A·cos(ωt − φ) avec sin φ = +b/A : vérifier la cohérence avec le cours de
  physique (Fresnel) de l'établissement.
- z² = a : traité pour a RÉEL uniquement, conformément à la lettre du
  programme (« du type z² = a ») ; le cas a complexe non abordé.
- Formules d'addition présentées comme conséquences de e^(ia)·e^(ib) :
  la démonstration est esquissée, pas entièrement rédigée — le programme
  n'exige pas de démonstration ici, à confirmer.
- Notation i (pas j) conservée, comme dans la fiche de Première, avec le
  lien électricité signalé en accroche.
- La composée « rotation puis homothétie » pour z ↦ az est présentée sans
  le mot « similitude », hors programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### energie-electrique-thermique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, sections « Énergie
électrique », « Énergie interne », « Énergie chimique » (volet piles/
accumulateurs uniquement) et « Énergie transportée par la lumière »), extrait
via WebFetch depuis le PDF officiel cache.media.education.gouv.fr
(spe261_annexe_1158935.pdf). À confronter au PDF avant publication.

Correspondance rubriques → sections :
- « Régime sinusoïdal : valeur efficace, fréquence, période, déphasage » → § 1.
- « Transport et distribution de l'énergie électrique ; pertes en ligne » → § 2.
- « Énergie interne ; capacité thermique » → § 3.
- « Flux thermique ; conduction ; résistance thermique » → § 4.
- « Piles, accumulateurs ; pile à combustible » → § 5 (le volet oxydoréduction
  de la rubrique « Énergie chimique » — couples, demi-équations — n'est PAS
  traité ici : il relève d'un chapitre de chimie dédié).
- « Photon, énergie E = hν ; conversion photovoltaïque » → § 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La formule P = U·I·cosφ (facteur de puissance) : l'extraction locale dit
  seulement « déphasage ». Elle est standard en STI2D et présente dans les
  sujets, mais vérifier si le texte officiel l'exige ou si la seule NOTION de
  déphasage suffit ; le cas échéant, la rétrograder en simple remarque.
- La formule Rth = e/(λS) : l'extraction dit « conduction ; résistance
  thermique » sans expliciter la formule. C'est la formule d'usage des sujets
  STI2D (souvent fournie) ; vérifier son statut exact (exigible ou fournie).
- L'additivité des résistances thermiques en série : prolongement naturel de
  l'analogie électrique, utilisée dans les sujets ; à confirmer.
- La convention d'écriture de l'éclairement (E_écl en W·m⁻², parfois noté E ou
  φ surfacique selon les manuels) : choisir la notation du sujet type.
- Valeurs numériques utilisées : c_eau = 4185 J·kg⁻¹·K⁻¹ (certains sujets
  prennent 4180 ou 4,18 kJ), λ laine de verre 0,040 et béton 1,5 W·m⁻¹·K⁻¹
  (ordres de grandeur constructeurs), h = 6,63×10⁻³⁴ J·s, c = 3,00×10⁸ m·s⁻¹.

Calculs vérifiés numériquement : 230√2 ≈ 325 V ; T = 1/50 = 20 ms ; pertes
5,0 Ω / 20 MW : 5,0 MW sous 20 kV (I = 1000 A) et 12,5 kW sous 400 kV
(I = 50 A) ; bouilloire : 1,5×4185×80 = 502 200 J ≈ 5,0×10⁵ J, t ≈ 251 s ;
Rth = 0,20/(0,040×10) = 0,50 K·W⁻¹, Φ = 20/0,50 = 40 W ; batterie 12 V 60 Ah :
720 Wh = 2,592×10⁶ J ; photon 500 nm : 3,978×10⁻¹⁹ J ; panneau 1,6 m² :
η = 320/1600 = 20 %.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### energie-mecanique-fluides  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Énergie mécanique » :
« Dynamique : forces, deuxième loi (approche), moment d'une force, rotation. /
Statique des fluides : pression, principe fondamental de l'hydrostatique »,
complétée par l'encart « Énergie : enjeux, puissance, rendement » pour le lien
puissance/rendement du § 4), extrait via WebFetch depuis le PDF officiel
cache.media.education.gouv.fr (spe261_annexe_1158935.pdf). À confronter au PDF
avant publication.

Prérequis cité : chapitre « Énergie : conversions, chaînes et rendement »
(contenu/premiere-techno/pc-maths-sti2d-stl/energie/, id 1sti2d-energie) — les
relations E = PΔt et η = Pu/Pa y sont établies et sont seulement réutilisées ici.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- « Deuxième loi (approche) » : j'ai retenu une application le long d'un axe,
  sans formalisme vectoriel, conformément à l'esprit techno de l'extraction.
  Vérifier sur le PDF le niveau d'exigence exact (somme vectorielle ou non).
- La formule P = Mω figure-t-elle explicitement au programme ou est-elle donnée
  dans les sujets ? L'extraction dit seulement « moment d'une force, rotation » ;
  P = Mω est systématique dans les sujets de bac STI2D — à vérifier.
- La relation v = rω et la presse hydraulique (F1/S1 = F2/S2, transmission de la
  pression / principe de Pascal) sont présentées comme applications industrielles ;
  l'extraction dit « pression, principe fondamental de l'hydrostatique » et la
  commande demandait explicitement vérins/hydraulique. Vérifier que ce
  prolongement est bien dans l'esprit du texte officiel (contextes STI2D).
- Convention Δp = ρgh donnée avec h = dénivellation, B plus bas que A ; certains
  manuels écrivent p_A + ρg z_A = p_B + ρg z_B. Choix fait pour la simplicité.
- g = 9,81 N·kg⁻¹ partout ; certains sujets prennent 10 : les corrigés des
  exercices le signalent quand c'est utile.

Calculs vérifiés numériquement :
- a = 500/250 = 2,0 m·s⁻² ; P(50 kg) = 490,5 ≈ 491 N ;
- M = 200 × 0,25 = 50 N·m ;
- ω(1500 tr/min) = 157,08 rad/s ; P = 12 × 157,08 = 1885 W ≈ 1,9 kW ;
- p = 600/3,0e-4 = 2,0e6 Pa = 20 bar ; Δp(10 m d'eau) = 9,81e4 Pa ≈ 1 bar ;
- F(vérin) = 2,0e7 × 5,0e-3 = 1,0e5 N (≈ 10,2 t) ; F2 = 100 × 50/2 = 2500 N.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### equations-differentielles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-sti2d-stl-pc-maths.txt,
partie MATHÉMATIQUES, section « Équations différentielles » (lignes 96-102) :
- Contenus : notion d'équation différentielle et de solution ; équations y' = ay
  et y' = ay + b.
- Capacités : vérifier qu'une fonction est solution ; déterminer toutes les
  solutions de y' = ay + b ; la solution vérifiant y(x0) donné.
Programme officiel : BO spécial n°8 du 25 juillet 2019 (arrêté MENE1921261A),
spécialité physique-chimie et mathématiques, terminale STI2D/STL, extrait via
WebFetch depuis le PDF officiel education.gouv.fr — à confronter au PDF avant
publication.

Couverture : §1 notion et solution ; §2 vérifier une solution ; §3 y'=ay ;
§4 y'=ay+b (solution particulière constante puis solution générale) ;
§5 condition initiale y(x0)=y0. Applications techno §6 (charge RC) et §7
(refroidissement de Newton) : contextes portés par la partie physique du même
programme (dipôle RC / flux thermique) et par l'esprit « co-intervention » de la
spécialité PCM ; les équations physiques (loi des mailles RC, loi de Newton) sont
données, pas démontrées.

Prérequis : chapitre exponentielle-logarithme du même parcours
(dérivée de e^(kx), résolution de e^(ax) = b avec ln) — la résolution
« au bout de combien de temps » du §7 utilise ln, conforme à la section
« Fonction logarithme népérien » du même programme.

Choix de rédaction :
- Capacité du BO limitée à « déterminer toutes les solutions de y' = ay + b » :
  l'équivalence y'=ay ⟺ Ce^(ax) est ADMISE (pas de démonstration d'unicité),
  conformément au niveau techno.
- Dans §6, la capacité du condensateur est notée C_0 pour éviter la collision
  avec la constante d'intégration C ; la constante d'intégration y est notée K.
- Vocabulaire physique (régime transitoire/permanent, constante de temps τ,
  valeur d'équilibre) introduit volontairement : c'est le cœur de la spécialité
  PC et maths.

Vérifications numériques faites :
- §5 : y(x) = 5 − 4e^(−2x), y(0)=1, y' = 8e^(−2x) = −2y+10 ✓.
- §6 : τ = 10^4 Ω × 10^−4 F = 1,0 s ; 1 − e^(−1) ≈ 0,6321 → u ≈ 3,79 ≈ 3,8 V.
- §7 : 360 e^(−0,05t) = 40 ⟺ t = 20 ln 9 ≈ 43,9 ≈ 44 min.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'intitulé exact des rubriques de la section (l'extraction résume les contenus).
- La présence éventuelle, dans le BO, d'exemples imposés (RC, radioactivité…)
  au sein de la rubrique équations différentielles elle-même.
- Le niveau d'exigence sur la justification de « toutes les solutions »
  (admis ici).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### exponentielle-logarithme  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie et mathématiques, enseignement
de spécialité, classe terminale, séries STI2D et STL — arrêté MENE1921261A,
BO spécial n°8 du 25 juillet 2019 (education.gouv.fr, annexe PDF
spe261_annexe_1158935.pdf, extrait via WebFetch). Fichier local :
docs/programme-terminale-sti2d-stl-pc-maths.txt, sections
« Fonction exponentielle de base e » (lignes 59-66) et
« Fonction logarithme népérien » (lignes 68-77).
À confronter au PDF officiel avant publication.

Couverture, calée sur le texte officiel :
- Exponentielle : nombre e, fonction x ↦ e^x et sa dérivée (§1, §3), dérivée
  de x ↦ e^(kx) (§3), courbe, limites en ±∞ et croissance comparée (§4) ;
  capacités : transformer des expressions (§2), étudier sommes/produits/
  quotients mêlant exponentielles et polynômes et leurs limites (§4, §8).
- Logarithme népérien : ln(a), a > 0, unique solution de e^x = a (§5),
  propriétés algébriques et lien avec le logarithme décimal (§6), courbe et
  limites en 0 et +∞ (§5) ; capacités : transformer des expressions (§6),
  résoudre e^(ax) = b, ln x = b, ln x > b (§7), étudier des fonctions mêlant
  ln (§8, évoqué avec g(x) = x − ln x).
- Applications technologiques (charge/décharge d'un condensateur,
  décroissance radioactive, demi-vie) : modèles fournis, renvoi explicite au
  cours de physique-chimie (le programme PCM est co-disciplinaire ; la
  radioactivité et le condensateur figurent dans la partie PC du même BO).

Choix de rédaction à faire valider par le relecteur :
- Le nombre e est introduit comme base de l'unique exponentielle égale à sa
  dérivée (cohérent avec « nombre e ; fonction x ↦ e^x ; dérivée » du BO) ;
  pas de construction par la méthode d'Euler ni par les suites.
- ln(a^n) énoncé pour n entier comme dans le BO ; le passage ln(e^(ax)) = ax
  (exposant réel) est utilisé sans commentaire pour résoudre e^(ax) = b.
- La dérivée de ln (1/x) est mentionnée en une ligne au §8 pour la capacité
  « étudier des fonctions mêlant ln » — vérifier si le BO terminale STI2D/STL
  l'exige explicitement ou si elle relève du chapitre composition.
- Croissance comparée énoncée en +∞ pour e^x/x^n et en −∞ pour x^n·e^x ;
  pas de croissance comparée pour ln (absente du texte du programme).
- Inéquation traitée : ln x > b (celle du BO), avec un exemple ln x ≤ 0 ;
  les inéquations e^(ax) < b ne sont pas développées — à confirmer.

Vérifications numériques faites : e ≈ 2,71828 ; e² ≈ 7,389 ; e⁻¹ ≈ 0,3679 ;
e⁻³ ≈ 0,0498 ; e⁻⁵ ≈ 0,0067 (d'où 1 − e⁻¹ ≈ 0,632 et 1 − e⁻⁵ ≈ 0,993) ;
ln 2 ≈ 0,6931 ; ln 10 ≈ 2,3026 ; ln 5/2 ≈ 0,805 ; 0,5·ln 2 ≈ 0,347 s ;
e³ ≈ 20,09 ; ln 8 = 3 ln 2 ≈ 2,079 ; 2 ln 6 − ln 4 = ln 9 ; ln(2e) = ln 2 + 1
≈ 1,693 ; ln 6/2 ≈ 0,896 et ln 3 ≈ 1,099 ; max de x·e⁻ˣ en x = 1, valeur
1/e ≈ 0,368.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### integration-composition  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programme officiel de physique-chimie et mathématiques, enseignement de
spécialité, classe terminale, séries STI2D et STL — BO spécial n°8 du 25 juillet
2019 (arrêté MENE1921261A), en vigueur. Fichier local :
docs/programme-terminale-sti2d-stl-pc-maths.txt (extraction WebFetch depuis le
PDF officiel cache.media.education.gouv.fr, cf. en-tête du fichier), partie
MATHÉMATIQUES, sections « Composition de fonctions » et « Intégration ».
À confronter au PDF officiel avant publication (l'extraction ne contient ni
préambule ni commentaires du BO).

Correspondance contenus du programme → sections de la fiche :
- Composée v∘u ; dérivée (v∘u)' = u'×(v'∘u) → §1, §2
- Capacité : identifier une composée ; dériver (u)^n, cos(u), e^u, ln(u) → §1, §2
- Primitives de u'·f(u) ; formes u'u^n, u'e^u, u'cos u → §3
- Intégrale d'une fonction positive comme aire ; méthode des rectangles ;
  extension aux fonctions négatives → §4
- F(x) = ∫ₐˣ f(t)dt et sa dérivée ; ∫ₐᵇ f = F(b) − F(a) → §5
- Linéarité, positivité, croissance, relation de Chasles → §6
- Valeur moyenne (capacité : calculer intégrale, valeur moyenne, aire sous ou
  entre deux courbes) → §6 (aire entre deux courbes) et §7

Choix de rédaction :
- Chapitre bâti dans l'ordre du programme : composition → primitives des
  composées → intégration, la composition servant d'outil aux deux suivants.
- Application phare (esprit du programme PCM : croisement avec la partie
  physique « Énergie électrique — régime sinusoïdal ») : valeur moyenne d'un
  signal, redressement simple alternance, ⟨u⟩ = 2U_max/π, et distinction valeur
  moyenne / valeur efficace U_max/√2.
- (u^n)' donné pour n entier ≥ 1 ; le cas des exposants négatifs n'est pas
  développé (à valider par le relecteur si le PDF l'inclut).
- La dérivée de sin(u) n'est pas dans la liste officielle : sin apparaît
  seulement via la primitive de u'cos u et, dans l'exemple du signal, via la
  primitive de sin(ωt) = −cos(ωt)/ω, vérifiée par dérivation d'une composée.
- Restriction u > 0 pour ln(u) systématiquement rappelée.

Vérifications numériques faites :
- Rectangles, x² sur [0;1], n=5 : bas 0,2·(0+0,04+0,16+0,36+0,64)=0,24 ;
  haut 0,2·(0,04+0,16+0,36+0,64+1)=0,44 ; exact 1/3 ∈ [0,24 ; 0,44]. ✓
- ∫₀¹ x e^{x²} dx = (e−1)/2 ≈ 0,859. ✓
- Signal : T=0,02 s, ω=100π ; ∫₀^{0,01} 10 sin(100πt) dt = (10/100π)(1−cos π)
  = 20/(100π) = 1/(5π) ; ⟨u⟩ = 100 × 1/(5π) = 20/π ≈ 6,37 V = 2·10/π. ✓
- Valeur moyenne de x² sur [0;3] : (1/3)(27/3) = 3. ✓

À SOUMETTRE AU RELECTEUR :
- Le PDF officiel donne-t-il « valeur moyenne d'un signal » comme exemple
  explicite (contexte PCM) ? Le vocabulaire électrique (DC, redressement,
  valeur efficace) est emprunté à la partie physique du même programme.
- Périmètre exact de la méthode des rectangles (encadrement à la main vs
  algorithme) — ici traitée en encadrement numérique simple.
- La notation [F(x)]ₐᵇ et la fonction x ↦ ∫ₐˣ f(t)dt : niveau de formalisme
  attendu en voie technologique.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### matiere-materiaux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie et mathématiques, spécialité,
terminale STI2D et STL, arrêté MENE1921261A, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Matière et matériaux »,
lignes 46-49). Extraction via WebFetch depuis le PDF officiel
(cache.media.education.gouv.fr .../spe261_annexe_1158935.pdf) — à confronter au PDF
avant publication.

La section du programme extrait est TRÈS condensée (3 lignes) :
« Propriétés des matériaux ; organisation de la matière ; changements d'état. /
Radioactivité : activité, décroissance, demi-vie (approche STI2D/STL). /
Combustions ; réactions acido-basiques (pH, couples). »
Le développement (familles de matériaux, E = mL, PC, tableau des rayonnements,
sécurité chimique) suit l'esprit « approche techno, contextes industriels » mais
DOIT être confronté au détail des capacités exigibles du PDF officiel.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Périmètre exact du volet radioactivité STI2D/STL : les équations de désintégration
  (lois de Soddy) sont-elles exigibles, ou seulement activité/décroissance/demi-vie ?
  J'ai volontairement limité aux trois notions citées + tableau qualitatif α/β/γ.
- La relation A = λN et λ = ln2/t1/2 : exigibles ou données ? Je les ai incluses car
  elles font le lien avec l'exponentielle et le ln du programme de maths du parcours
  (fonctions exp/ln, équations différentielles y' = ay — même BO).
- Valeurs numériques choisies par moi (ordres de grandeur usuels, à vérifier en
  table) : L_f glace 334 kJ/kg ; PC (H2 ~120, CH4 ~50, essence/gazole ~45,
  charbon ~30, bois ~15 MJ/kg) ; t1/2 iridium 192 = 74 jours.
- Le pH est écrit pH = -log[H3O+] avec [H3O+] en mol/L (sans la division explicite
  par c° retenue dans la fiche de terminale générale) : simplification assumée pour
  la voie techno, à valider.
- La partie sécurité (EPI, acide dans l'eau, neutralisation avant rejet) répond à la
  demande « sécurité » de la commande ; vérifier qu'elle correspond bien à une
  capacité du programme officiel.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### mesure-incertitudes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie et
mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Mesure et incertitudes
(terminale) »), extrait via WebFetch depuis le PDF officiel
cache.media.education.gouv.fr (spe261_annexe_1158935.pdf). À confronter au PDF
avant publication.

Contenus couverts, tels que listés dans l'extraction :
- « Dispersion des mesures ; incertitude-type » → rappel actif § 1-2 (le détail est
  dans le chapitre de première du même parcours, cité en prérequis, non répété).
- « Incertitude-type COMPOSÉE (propagation sur un résultat calculé) » → § 2-4.
  L'extraction précise que la formule est fournie dans les énoncés ; la fiche et
  tous les exercices respectent ce cadre (formules toujours rappelées).
- « Validité d'un résultat ; écriture avec un nombre de chiffres significatifs
  adapté » → § 5-6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le TERME « écart normalisé » (et la notation z) n'apparaît PAS dans l'extraction
  locale du programme, qui dit seulement « validité d'un résultat ». La MÉTHODE
  (écart comparé à l'incertitude-type) prolonge celle du programme de première
  (« écart évalué en nombre d'incertitudes-types »). J'ai introduit le nom « écart
  normalisé » comme appellation usuelle : vérifier sur le PDF si le terme figure
  dans le texte officiel de terminale ; sinon, le présenter explicitement comme
  vocabulaire d'usage.
- Le SEUIL de 2 : usage courant, pas une prescription du texte extrait. La fiche
  le présente comme « ordre de grandeur d'écart maximal raisonnable » — formulation
  à valider.
- Les formules de propagation retenues (quadrature des absolues pour somme/
  différence, quadrature des relatives pour produit/quotient, |k|u(a), |n|u(a)/a)
  sont les formules standard (GUM) données dans les sujets de bac STI2D/STL ;
  le programme dit seulement « formule fournie ». Vérifier qu'aucune variante
  (somme simple majorante) n'est attendue.
- L'arrondi de l'incertitude « par excès en cas de doute » et à 1 chiffre
  significatif : convention d'usage (certains sujets en gardent 2). À valider.

Calculs vérifiés numériquement (R = U/I : 48 ± 1 Ω ; différence de masses :
u = 0,07 g ; ρ : 7,90 ± 0,07 g·cm⁻³ ; vitesse du son : z = 1,0).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### ondes-signaux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Ondes et signaux »),
extrait via WebFetch depuis le PDF officiel cache.media.education.gouv.fr
(spe261_annexe_1158935.pdf). À confronter au PDF avant publication.

Contenus couverts, tels que listés dans l'extraction :
- « Notion d'onde ; spectre d'amplitude ; transmission d'un signal » → § 1
  (rappel actif, le détail est dans le chapitre de première ondes-information
  du même parcours, cité en prérequis et non répété), § 2 (spectre), § 5
  (transmission).
- « Ondes sonores : hauteur, timbre, intensité acoustique, niveau sonore »
  → § 3-4.
- « Ondes électromagnétiques : spectre, transmission d'informations » → § 5.

Liens inter-chapitres assumés :
- § 2 renvoie au chapitre de maths complexes-exponentielle (même parcours) pour
  la forme A·cos(ωt+φ) obtenue à partir de a·cos(ωt) + b·sin(ωt) — le
  programme de maths cite explicitement cette capacité.
- § 4 renvoie au chapitre exponentielle-logarithme (lien ln / log décimal,
  explicitement au programme de maths).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La décomposition en fondamental + harmoniques est présentée comme propriété
  ADMISE (pas de série de Fourier nommée) : vérifier la formulation exacte du
  BO (« spectre d'amplitude ») et le niveau d'exigence attendu.
- I₀ = 1,0×10⁻¹² W·m⁻² : valeur conventionnelle du seuil d'audibilité à
  1 kHz ; l'extraction locale ne la donne pas. En sujet de bac elle est
  normalement fournie.
- § 5 « transmission » : propagation libre / guidée, atténuation et le
  compromis fréquence de porteuse / quantité d'information transmise sont la
  lecture usuelle de « transmission d'informations » en STI2D — vérifier sur
  le PDF les capacités exactes (le mot « débit » n'a volontairement pas été
  employé comme grandeur).
- Ordres de grandeur du tableau des niveaux sonores (60, 85, 100, 120 dB) :
  valeurs usuelles, non fournies par le texte.
- Bornes du visible 400–800 nm : reprises du chapitre de première (usage ;
  certains manuels retiennent 380–780).

Calculs vérifiés numériquement : 10·log(10⁷) = 70 dB ; 10⁻¹²×10⁷ = 10⁻⁵ ;
10·log 2 = 3,01 ; λ(FM 100 MHz) = 3,00 m ; λ(2,4 GHz) = 0,125 m ≈ 13 cm ;
T = 1/100 = 10 ms.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## terminale-techno / pc-sante-st2s

### besoins-energetiques-alimentation  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — à confronter au relecteur avant publication.

Source unique : programme officiel PHYSIQUE-CHIMIE POUR LA SANTÉ, série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Fichier local :
docs/programme-st2s-physique-chimie-sante.txt, section « Besoins énergétiques et
alimentation (Tale) », THÈME 3 « Faire des choix autonomes et responsables ».
Notions et contenus couverts par l'intitulé officiel :
« Dépense énergétique journalière. Transferts thermiques : rayonnement, convection,
conduction ; application au corps humain. Conversion d'énergie ; activité musculaire.
Transformations endothermique et exothermique. Aliments, combustibles du corps ;
valeur énergétique des aliments. Aspect énergétique des transformations biochimiques ;
combustion ; hydrolyse. »
Extraction du programme via WebFetch depuis le PDF officiel education.gouv.fr —
À CONFRONTER au PDF officiel avant publication.

Points à confirmer par le relecteur :
1. Valeur de conversion : la fiche fixe 1 cal = 4,18 J (valeur usuelle en lycée).
   Certains manuels utilisent 4,184 J ou 4,1855 J. Confirmer la valeur attendue par
   l'appli pour la cohérence des exercices (tous les calculs de la fiche et des exos
   utilisent 4,18).
2. Coefficients énergétiques : 17 / 38 / 17 kJ·g⁻¹ (glucides / lipides / protides),
   valeurs standard du programme. Équivalents kcal donnés : 4 / 9 / 4 kcal·g⁻¹.
   Vérifier que ces arrondis sont ceux attendus (17 kJ ≈ 4,07 kcal, 38 kJ ≈ 9,09 kcal).
   L'alcool (~29 kJ·g⁻¹) et les fibres ne sont pas traités : hors périmètre nutriments
   énergétiques principaux — confirmer.
3. Rendement musculaire : la fiche annonce ≈ 25 % (valeur physiologique classique,
   fourchette réelle 20–25 %). Confirmer la valeur retenue pour les exercices.
4. Métabolisme de base : présenté qualitativement (60–70 % de la DEJ, ordres de
   grandeur 6000–7500 kJ/jour). AUCUNE formule chiffrée type Harris-Benedict n'est
   donnée car non exigible en ST2S — confirmer que ce niveau d'exigence convient et
   qu'aucune formule de MB n'est attendue à l'examen.
5. Évaporation de la sueur : présentée comme mécanisme complémentaire aux 3 modes de
   transfert. Ce n'est PAS un 4e mode de transfert thermique au sens strict (c'est un
   changement d'état endothermique) — la fiche le distingue explicitement. Confirmer
   ce choix de présentation.
6. Respiration cellulaire : équation C6H12O6 + 6 O2 → 6 CO2 + 6 H2O donnée comme
   « même bilan qu'une combustion ». Vérifier le niveau d'exigence sur l'équation
   (ajustée, exothermique) attendu en ST2S.
7. Hydrolyse : présentée comme réaction de la digestion (amidon→glucose,
   triglycérides→acides gras + glycérol, protéines→acides aminés). Fait le lien avec
   le chapitre « Glucides : classification et transformations (Tale) » et
   « Biomolécules et eau (Tale) ». Confirmer la profondeur attendue.
```

### biomolecules-eau  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de PHYSIQUE-CHIMIE POUR LA SANTÉ, série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée), thème 2 « Analyser et
diagnostiquer », section « Biomolécules et eau (Tale) » :
  docs/programme-st2s-physique-chimie-sante.txt (bloc « === Biomolécules et eau (Tale) === »).
  Notions listées : « Glucides ; lipides (acides gras saturés/insaturés, triglycérides,
  stérols) ; acides α-aminés, protéines, liaison peptidique ; urée ; vitamines. Eau,
  molécule polaire ; liaison hydrogène ; états physiques. Solubilité ; hydrophilie et
  hydrophobie ; miscibilité ; phases aqueuse et organique. »
Extraction via WebFetch du PDF officiel (https://www.education.gouv.fr/media/25040/download).
À CONFRONTER au PDF officiel avant publication (capacités exigibles détaillées).

Prérequis cité : chapitre « molecules-organiques » du même parcours (esters, amides,
acide carboxylique, amine, alcool réutilisés ici).

Points à confirmer par le relecteur :
1. Profondeur exigible en ST2S sur les glucides : la fiche distingue oses / diosides /
   polyosides et donne des exemples (saccharose, amidon, glycogène, cellulose). La
   classification « simples/complexes » figure explicitement dans le thème 3
   (« Glucides : classification et transformations ») ; vérifier le partage exact
   entre ce chapitre (thème 2) et le chapitre glucides du thème 3 pour éviter les
   redites — j'ai gardé ici la vue d'ensemble et laissé hydrolyse/condensation
   détaillées au thème 3.
2. Représentations LaTeX : la formule de l'acide aminé (§3) utilise un \underset pour
   figurer la chaîne latérale R ; le zwitterion et la liaison peptidique sont écrits en
   ligne. Vérifier le rendu KaTeX et idéalement remplacer par des schémas dans l'appli.
3. Zwitterion / caractère amphotère de l'acide aminé (§3) : à confirmer comme exigible
   en ST2S ou à présenter seulement comme complément.
4. Liste des vitamines : classification hydrosolubles (B, C) / liposolubles (A, D, E, K)
   donnée à titre d'exemple ; confirmer le niveau d'exigence (le programme dit seulement
   « vitamines »).
5. Densité des phases (§8) : exemples eau/cyclohexane (organique au-dessus) et
   eau/dichlorométhane (organique en dessous) — confirmer que l'extraction
   liquide-liquide et l'ampoule à décanter sont au périmètre ST2S (elles relèvent des
   techniques de chimie ; à vérifier au PDF).
6. Urée présentée comme diamide de l'acide carbonique — vérifier que ce niveau de détail
   structural est attendu, ou s'en tenir à « déchet azoté, formule CO(NH2)2 ».

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fluides-pression-sanguine  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 2 « Analyser et
diagnostiquer », section « Propriétés des fluides et pression sanguine (Tale) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 66-71 :
  - Débit ; relation débit = vitesse × section.
  - Débit cardiaque DC = fC × VES (fréquence cardiaque × volume d'éjection systolique).
  - Force pressante et pression ; unités (Pa, cmHg).
  - Variation de la pression avec la profondeur ; loi fondamentale de la statique des fluides.
  - Tension artérielle systolique et diastolique ; principe de la mesure.
Le .txt (lignes 11-15) précise que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "terminale-techno" (imposé par la consigne de production), cohérent
  avec le chapitre de forme de référence 1st2s "premiere-techno". À harmoniser sur
  tout le parcours pc-sante-st2s si d'autres chapitres portent "premiere"/"terminale"
  sans suffixe.
- CONVERSION 1 mmHg : valeur exacte 133,322 Pa ; arrondie à 133 Pa dans toute la fiche
  et les exercices. 760 mmHg = 1 atm = 101 325 Pa (1,013×10^5). Vérifier le niveau
  d'arrondi attendu (133 Pa vs 133,3 Pa) et l'usage cmHg (usage clinique français) vs
  mmHg (unité SI-adjacente internationale) — le programme cite explicitement « Pa, cmHg ».
- MASSE VOLUMIQUE DU SANG : ρ ≈ 1060 kg/m³ (valeur physiologique courante 1050–1060).
  g pris à 10 N/kg pour rester en cohérence avec les autres chapitres PC ; certains
  sujets prennent 9,81. À harmoniser.
- LOI FONDAMENTALE : énoncée sous forme Δp = ρgh (différence entre deux points) et
  p_bas = p_haut + ρgh. Le programme parle de « variation de la pression avec la
  profondeur » : formulation simplifiée retenue (pas de convention d'axe z orienté),
  à valider par un professeur pour la rigueur (signe/orientation).
- DÉBIT CARDIAQUE : DC exprimé en L/min ; valeurs repos ~5 L/min (fC=70, VES=70 mL) et
  effort ~15 L/min standard. Ordres de grandeur physiologiques, à confirmer au niveau
  d'exigence du programme (valeurs vs ordres de grandeur).
- PRINCIPE DE MESURE : méthode auscultatoire (bruits de Korotkoff) décrite simplement ;
  les tensiomètres électroniques usuels sont oscillométriques. Vérifier le degré de
  détail attendu (le programme demande « le principe de la mesure »).
- RELATION D = v×S : donnée comme relation à utiliser ; le programme ne demande pas de
  démonstration. À confirmer parmi les capacités exigibles.

Statut : brouillon, non relu.
```

### glucides-ressources-naturelles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de PHYSIQUE-CHIMIE POUR LA SANTÉ, série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 3 « Faire des choix
autonomes et responsables ». Extrait via WebFetch depuis le PDF officiel
education.gouv.fr (https://www.education.gouv.fr/media/25040/download) et
eduscol ST2S. Fichier local : docs/programme-st2s-physique-chimie-sante.txt,
sections « Glucides : classification et transformations (Tale) » ET
« Gestion des ressources naturelles (Tale) ».

Notions du programme couvertes :
- Glucides : classification (simples/complexes ; oses/diholosides/polyosides),
  isomérie, hydrolyse acide et enzymatique, condensation du glucose en glycogène.
- Ressources : critères chimiques de potabilité, origines de la pollution de l'eau,
  sols comme milieux d'échange de matière, engrais N-P-K.

Chapitre réunissant les DEUX sous-parties « glucides » et « ressources naturelles »
du même thème, comme demandé. Prérequis « biomolecules-eau » cité : ce chapitre-là
introduit déjà les glucides au niveau des familles et exemples ; on suppose donc
acquises les définitions ose/diholoside/polyoside et on approfondit ici l'isomérie,
l'hydrolyse (deux voies) et la condensation.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA MATIÈRE :
- Répartition Première/Terminale : le .txt indique que la progression est « à confirmer
  au PDF ». Vérifier que « Glucides : transformations » et « Ressources naturelles »
  relèvent bien de la TERMINALE ST2S et non de la Première.
- Profondeur exigible sur l'ISOMÉRIE : la fiche distingue isomérie de constitution
  (glucose aldose / fructose cétose) et évoque la stéréoisomérie (galactose). Confirmer
  si la stéréoisomérie est au programme ST2S ou seulement « même formule brute, structures
  différentes » sans le vocabulaire.
- Équation de CONDENSATION du glycogène : présentée en (n-1) H2O pour n oses (exact pour
  une chaîne de n unités), la formule idéalisée du polymère (C6H10O5)n correspondant à
  n H2O (approximation grand n). Vérifier le niveau de rigueur attendu ; l'étape élémentaire
  2 glucose → maltose + H2O est, elle, sans ambiguïté.
- Valeurs de POTABILITÉ : limites réglementaires (nitrates 50 mg/L, nitrites 0,5 mg/L,
  pesticides 0,1 µg/L par substance, plomb 10 µg/L, pH 6,5-9) tirées de la réglementation
  française/UE sur les eaux de consommation. Vérifier lesquelles sont exigibles et si des
  valeurs chiffrées sont attendues à l'examen, ou seulement les paramètres.
- Indice NPK exprimé en N / P2O5 / K2O : convention agronomique standard. Confirmer que
  le programme attend cette précision ou se contente de « teneurs en N, P, K ».

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### molecules-organiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — à confronter au relecteur avant publication.

Source unique : programme officiel PHYSIQUE-CHIMIE POUR LA SANTÉ, série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Fichier local :
docs/programme-st2s-physique-chimie-sante.txt, section « Molécules organiques :
description (Tale) », THÈME 2 « Analyser et diagnostiquer ». Notions et contenus :
« Formules brute, développée, semi-développée, topologique ; liaisons covalentes.
Squelette carboné ; fonctions chimiques ; isomérie de constitution ; nomenclature. »
Extraction du programme via WebFetch depuis le PDF officiel education.gouv.fr
(https://www.education.gouv.fr/media/25040/download) — À CONFRONTER au PDF officiel
avant publication, notamment la LISTE EXACTE des fonctions exigibles en ST2S.

Points à confirmer par le relecteur :
1. Périmètre des fonctions : la fiche traite alcool, aldéhyde, cétone, acide
   carboxylique, amine, ester, amide (les 7 demandées par la consigne interne).
   Vérifier lesquelles sont RÉELLEMENT exigibles en ST2S (le programme dit seulement
   « fonctions chimiques »). L'ester et l'amide préparent les liaisons du vivant
   (triglycérides = esters, liaison peptidique = amide) : à garder pour amorcer le
   chapitre biomolécules, mais confirmer le niveau d'exigence.
2. Nomenclature : profondeur attendue en ST2S. La fiche se limite aux alcanes C1–C6,
   aux alcools et au repérage des principaux suffixes/ramifications simples. Confirmer
   qu'on n'exige pas la nomenclature complète des ramifications multiples ni des
   stéréodescripteurs (non au programme ST2S).
3. Isomérie : seule l'isomérie DE CONSTITUTION est au programme (pas la
   stéréoisomérie). Vérifié dans l'intitulé. Les 3 sous-types (chaîne, position,
   fonction) sont un ajout pédagogique classique — confirmer qu'ils ne dépassent pas
   l'exigence.
4. Représentations LaTeX : la formule développée de l'éthanol (§2) est rendue avec un
   array approximatif faute de dessin ; à remplacer idéalement par un schéma vectoriel
   dans l'appli. De même la topologique de l'éthanol est décrite en toutes lettres.
   Vérifier le rendu KaTeX de \equiv, \mathrm et de l'array.
5. Prépare explicitement le chapitre « Biomolécules et eau (Tale) » : acides gras
   saturés/insaturés (§3), esters (triglycérides) et amides (liaison peptidique) au §4.
```

## terminale-techno / spcl-stl

### composition-systemes-chimiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « Sciences physiques et chimiques en laboratoire » (SPCL),
enseignement de spécialité, série STL, classe terminale — BO spécial n°8 du 25 juillet 2019.
PDF officiel Terminale SPCL :
https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extrait : docs/programme-stl-spcl.txt, section « Composition des systèmes chimiques (Tale) »,
qui liste :
  - Solubilité, dissolution, précipitation.
  - Acides et bases ; pH ; couples ; conductivité et conductimétrie.
  - Oxydoréduction ; piles.
Le .txt fourni ne donne que les intitulés (pas le détail des capacités exigibles) : contenu
détaillé (Ks/Qr, relation s–Ks, force des acides, σ=Σλc, potentiels, f.é.m.) rédigé à partir
des attendus usuels du niveau terminale. À CONFRONTER AU PDF/BO OFFICIEL par un professeur
avant publication.

⚠️ POINTS À CONFRONTER AU RELECTEUR :
- Ks est ici manipulé via les concentrations en mol/L (échelle du niveau). Formellement Ks est
  défini avec des activités et donc sans dimension : vérifier la convention retenue en STL SPCL
  et l'homogénéité voulue (avec/sans c° de référence).
- Constante d'acidité Ka / pKa : présentée brièvement. Confirmer que Ka est au programme
  terminale STL SPCL (relation de Henderson NON incluse volontairement, à valider si attendue).
- Potentiels standards E° : valeurs Cu²⁺/Cu = +0,34 V et Zn²⁺/Zn = −0,76 V (tables usuelles).
  Vérifier que le référentiel STL utilise bien E° (et non une simple comparaison qualitative
  des pouvoirs oxydants sans valeurs chiffrées). Relation de Nernst NON introduite.
- Valeurs de conductivités molaires ioniques λ (Na⁺ 5,0e-3 ; Cl⁻ 7,6e-3 ; H₃O⁺ ~35e-3 ;
  HO⁻ ~20e-3 S·m²·mol⁻¹) : ordres de grandeur usuels à 25 °C, à recaler sur la table STL.
- Ks(AgCl) = 1,8e-10 et pH(CH₃COOH 1e-2) ≈ 3,4 : valeurs standard, à confirmer sur les tables
  de référence du niveau.
- Le programme dit « dosage » sans détailler pH-métrique vs conductimétrique vs colorimétrique :
  les trois suivis sont évoqués. À valider selon les capacités exigibles du BO.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### ondes-mecaniques-em-spectres  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SPCL (Sciences physiques et chimiques en laboratoire),
enseignement de spécialité de la série STL, classe terminale — BO spécial n°8 du 25 juillet
2019. Fichier docs/programme-stl-spcl.txt, section « Ondes : mécaniques, électromagnétiques
et spectres (Tale) » :
  - Ondes mécaniques et électromagnétiques ; célérité, longueur d'onde, fréquence.
  - Des ondes pour mesurer (échographie, télémétrie) et pour observer (spectroscopies).
  - Spectres ; analyse spectrale.
PDF officiel Terminale SPCL :
https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extraction résumée via WebFetch — À CONFRONTER AU PDF OFFICIEL avant publication pour les
capacités exigibles détaillées.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA MATIÈRE :
- Bornes du visible : j'ai retenu 400–800 nm (convention fréquente en STL). Certaines
  références utilisent 380–780 nm. À aligner sur la référence retenue par l'établissement.
- Effet Doppler : le programme le veut-il seulement QUALITATIF, ou la relation quantitative
  (Δf/f = v/c pour source lente) est-elle exigible en Tale SPCL ? Je suis resté qualitatif,
  conformément à la consigne.
- Beer-Lambert : rappelée ici comme prérequis de Première STL. Est-elle re-mobilisée en
  Terminale (dosage spectrophotométrique) ou seulement citée ? À confirmer.
- Bandes IR : valeurs INDICATIVES (O–H, C=O ~1700, C–H). En épreuve, une table est fournie —
  vérifier qu'aucune valeur numérique n'est présentée comme « à connaître par cœur ».
- Célérité des ultrasons dans les tissus : valeur usuelle 1540 m/s ; j'ai arrondi à
  1,5×10³ m·s⁻¹ pour les exemples. Cohérent avec les corrigés du QCM et des exercices.
- Vérifier que « radar / télémétrie laser » (ondes EM) est bien admis comme illustration au
  même titre que l'échographie et le sonar (ondes mécaniques).

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
```

### ondes-transmission-stockage  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SPCL (Sciences physiques et chimiques en laboratoire),
enseignement de spécialité de la série STL, classe terminale — BO spécial n°8 du 25 juillet
2019. Fichier docs/programme-stl-spcl.txt, section « Ondes : transmettre, stocker, lire et
afficher (Tale) » (lignes 82-84) :
  - Numérisation d'un signal ; débit binaire.
  - Transmission (guidée, libre), stockage optique, affichage.
Le libellé du programme est TRÈS condensé : le détail des capacités exigibles
(échantillonnage/quantification, atténuation en dB, cuvettes/plats, sous-pixels RVB) a été
reconstitué à partir de la consigne de production et des usages STL, à CONFRONTER au document
d'accompagnement / au PDF officiel avant publication.
PDF officiel Terminale SPCL :
https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extraction résumée via WebFetch — À CONFRONTER AU PDF OFFICIEL.
Prérequis cité : chapitre « Ondes : mécaniques, électromagnétiques et spectres » du même
parcours (id tale-stl-spcl-ondes-mecaniques-em-spectres), pour λ = c/f et le spectre EM.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA MATIÈRE :
- Pas de quantification : j'ai retenu q = U / 2^n (convention STL dominante). Certaines
  références écrivent q = U / (2^n − 1) (les 2^n niveaux bornent la plage aux extrémités).
  À aligner sur la convention de l'établissement — impacte les corrigés (exo 3, QCM Q6).
- Critère de Shannon : formulé fe ≥ 2 fmax. Vérifier s'il est exigible quantitativement en
  Tale SPCL ou seulement cité qualitativement (notion de repliement).
- Atténuation : formule 10 log(Pe/Ps) pour un rapport de PUISSANCES. Si l'épreuve raisonne
  en amplitudes/tensions, le facteur est 20 log — à vérifier. Coefficient linéique α en dB/km
  supposé exigible (calcul fibre).
- Convention préfixes : j'ai posé k/M/G = 10^3/10^6/10^9 par défaut, kio/Mio/Gio = 2^10/2^20.
  Confirmer que c'est bien la convention attendue (télécom décimal vs stockage binaire).
- Capacités des disques (700 Mo / 4,7 Go / 25 Go) et longueurs d'onde des lasers
  (780/650/405 nm) : valeurs usuelles, à vérifier comme « ordres de grandeur » et non comme
  valeurs à connaître par cœur.
- Débit CD audio : 44,1 kHz × 16 bits × 2 voies = 1 411 200 bit/s ≈ 1,41 Mbit/s (vérifié).
  Taille d'un morceau de 3 min ≈ 32 Mo non compressé (vérifié, ÷8 pour les octets).
- Codage couleur 24 bits (8 bits/sous-pixel, 16,7 M de couleurs) : standard, à confirmer
  exigible.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
```

### syntheses-mecanismes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — à confronter au relecteur / au PDF officiel avant publication.

Source : programme officiel SPCL, série STL, classe terminale.
  BO spécial n°8 du 25 juillet 2019.
  PDF officiel Terminale SPCL :
  https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Section utilisée : « Synthèses chimiques et mécanismes (Tale) » du fichier
  docs/programme-stl-spcl.txt (extrait via WebFetch du PDF officiel education.gouv.fr).
Intitulés couverts : aspects macroscopiques (rendement, sélectivité, chimiosélectivité,
  contrôle des conditions), catalyse (homogène/hétérogène/enzymatique), cinétique appliquée
  (facteurs cinétiques, temps de demi-réaction) ; mécanismes réactionnels (liaison covalente
  et doublets liants/non liants, sites donneurs et accepteurs de doublet, flèche courbe,
  étape élémentaire, types substitution/addition/élimination). Contexte : synthèse au
  laboratoire, dans la continuité de la Première (extraction et purification).

Prérequis cités : chapitre Première STL SPCL « Synthèses chimiques : extraction et
  purification » (contenu/premiere-techno/spcl-stl/syntheses-extraction-purification/) —
  rendement, réactif limitant, quantité de matière y sont établis.

Points à confronter au relecteur :
  - Périmètre exact des « aspects macroscopiques » attendus : la sélectivité et la
    chimiosélectivité doivent-elles être chiffrées (rapport de quantités) ou rester
    qualitatives au niveau STL SPCL ? Choix retenu : présentation qualitative + mention
    d'un rapport de quantités, sans formule imposée.
  - Cinétique : le programme demande-t-il l'expression d'une vitesse de réaction/de
    disparition (v = -d[R]/dt) ou se limite-t-il aux facteurs cinétiques et à t1/2 ?
    Choix prudent retenu : facteurs cinétiques + temps de demi-réaction, sans dérivée,
    pour rester au niveau technologique. À confirmer.
  - Vocabulaire mécanismes : le programme parle-t-il de « nucléophile/électrophile » ou
    reste-t-il à « site donneur / site accepteur de doublet » ? Choix retenu : uniquement
    « site donneur/accepteur » (formulation du programme rénové). À valider.
  - Vérifier que le contrôle des conditions n'exige PAS de notion d'équilibre chimique /
    déplacement d'équilibre (K, quotient de réaction) à ce niveau. Rédigé sans, à confirmer.
  - Confirmer les exemples de catalyseurs (Fe3+/Pt sur H2O2, H+ sur estérification,
    catalase) comme conformes aux attendus STL.
```

### systemes-procedes-flux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe terminale — BO spécial n°8 du
25 juillet 2019. Fichier docs/programme-stl-spcl.txt, section « Systèmes et procédés :
flux d'information, d'énergie et de matière (Tale) » :
  - Analyse et contrôle des flux d'information (chaîne, régulation).
  - Conversions et transferts des flux d'énergie (rendement, bilan).
  - Transport et transformation des flux de matière (procédés).
PDF officiel Terminale SPCL :
  https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extraction via WebFetch depuis le PDF officiel — à CONFRONTER au PDF pour les capacités
exigibles détaillées avant publication.

Prérequis « Instrumentation : la chaîne de mesure » (Première STL SPCL) cité comme demandé :
capteur, conditionneur, régulation tout ou rien, hystérésis y sont introduits.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA SPÉCIALITÉ :
- Découpage exact des chaînes : la chaîne d'information « acquérir/traiter/communiquer » et
  la chaîne d'énergie « alimenter/distribuer/convertir/transmettre » suivent le vocabulaire
  STI2D/SysML usuel. Vérifier que c'est bien la nomenclature attendue en SPCL 2019 (le PDF
  peut employer un autre découpage, ex. « stocker »).
- Le correcteur proportionnel : la loi S = k·ε et le vocabulaire « gain » sont-ils
  exigibles, ou seulement l'opposition qualitative TOR / proportionnel ? Le PID
  (intégral, dérivé) est volontairement EXCLU (hors programme à ce niveau).
- Bilan de matière : le régime permanent (entrées = sorties) est présenté comme cas central ;
  le terme d'accumulation est donné en complément — confirmer le niveau d'exigence.
- Vérifier que l'expression du rendement en chaîne (produit des rendements) est attendue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# terminale

## terminale / enseignement-scientifique

### atmosphere-effet-de-serre-climat  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel d'ENSEIGNEMENT SCIENTIFIQUE (tronc commun), terminale générale —
BO du 22 janvier 2019, version aménagée (2023). Thème 1 « Science, climat et société »,
sujets 1.1, 1.2, 1.3.
  Programme (PDF) : https://www.education.gouv.fr/media/133235/download
  eduscol : https://eduscol.education.gouv.fr/5790/programmes-et-ressources-en-enseignement-scientifique-voie-g
Section reprise dans docs/programme-terminale-enseignement-scientifique.txt (lignes 21-28) :
composition de l'atmosphère (primitive/actuelle) et ozone stratosphérique (absorption UV) ;
bilan radiatif terrestre, GES et forçage radiatif ; rétroactions positives/négatives et rôle
des océans (absorption, dilatation thermique) ; indicateurs, modèles numériques, projections.
Extraction via WebFetch depuis le PDF officiel. À CONFRONTER AU PDF avant publication.

⚠️ À CONFRONTER AU PDF / À SOUMETTRE AU RELECTEUR :
- Valeurs numériques (ordres de grandeur pédagogiques) : S0 ≈ 1360 W/m² (parfois 1361 ou 1367
  selon les sources), P_moy = S0/4 ≈ 340 W/m², albédo A ≈ 0,30, P_abs ≈ 240 W/m²,
  T_eff ≈ 255 K ≈ -18 °C (calcul : (238/5,67e-8)^0,25 = 254,5 K). Température réelle ≈ 15 °C,
  écart de serre ≈ +33 °C. Toutes à valider par le relecteur ; le programme n'impose pas de
  valeurs chiffrées, il attend surtout la compréhension du bilan.
- Loi de Stefan-Boltzmann : le programme d'ENSEIGNEMENT SCIENTIFIQUE la veut « qualitative /
  simple » (dépendance en T^4). J'ai donné la formule P = σT^4 encadrée mais insisté sur le
  qualitatif. Vérifier que le niveau de calcul demandé dans les exercices (résolution de
  (1-A)S0/4 = σT^4 pour T) reste dans le périmètre attendu du tronc commun — l'exercice 4
  fait ce calcul avec racine 4e ; à trancher (peut être fourni sous forme guidée).
- Forçage radiatif : donné en ordre de grandeur +2 à +3 W/m² depuis le préindustriel
  (GIEC AR6 : ~+2,7 W/m² pour les GES bien mélangés). À confirmer/actualiser.
- Coefficient de dilatation de l'eau de mer α ≈ 2e-4 K⁻¹ (dépend fortement de T et de la
  salinité) : valeur pédagogique pour l'exercice 6 ; l'énoncé fournit la valeur. À valider.
- Concentration CO2 : 280 ppm préindustriel → ~420 ppm (années 2020). À actualiser à la date
  de publication.
- Périmètre : l'atmosphère primitive et la photosynthèse touchent à la SVT ; traitées ici de
  façon minimale (dominante PC : rayonnement, bilan d'énergie). Conforme à la note de
  périmètre en tête du fichier programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### energie-carbone-transition  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme d'ENSEIGNEMENT SCIENTIFIQUE, tronc commun, terminale générale,
BO du 22 janvier 2019 (version aménagée 2023). Thème 2 « Le futur des énergies »,
sous-partie 2.3 « Énergie, carbone et transition ».
Fichier de travail : docs/programme-terminale-enseignement-scientifique.txt, section
« === Énergie, carbone et transition (physique-chimie et maths) === ».
Extraction via WebFetch depuis le PDF officiel (https://www.education.gouv.fr/media/133235/download).
À CONFRONTER AU PDF OFFICIEL avant publication.

Chiffres d'ordres de grandeur (à faire valider par le relecteur) :
- Réservoirs de carbone (Gt C) : atmosphère ~870 ; biosphère (végétation+sols) ~2000-3000 ;
  océans ~38 000 ; lithosphère ~10^7-10^8. Valeurs GIEC/usuelles, arrondies en puissances de 10
  dans la fiche. Vérifier que le manuel de référence retient les mêmes bornes.
- Émissions anthropiques ~10 Gt C/an <=> ~37 Gt CO2/an (facteur 44/12 exact = 3,67).
  « Moitié réabsorbée » = airborne fraction ~50 %, à confirmer.
- 1 tep = 41,868 GJ exactement -> arrondi à 42 GJ / 4,2e10 J / ~1,16e4 kWh.
- Essence modélisée par l'octane C8H18 (M=114) : 2,3 kg CO2/L pour rho=0,75 kg/L. Le diesel
  (~2,6 kg/L) n'est pas traité ; à ajouter si le programme l'exige.
- Empreinte carbone France ~9-10 t CO2eq/hab/an (avec importations, données ~2019) ;
  objectif ~2 t. Monde ~6-7 t. Vol Paris-NY ~1 t CO2eq/passager (ordre de grandeur).
- Part des fossiles dans le mix mondial ~80 %.

POINTS À TRANCHER AVEC LE RELECTEUR :
- Le programme attend-il l'équilibrage complet des équations de combustion (octane), ou seulement
  le raisonnement C -> CO2 avec le facteur 44/12 ? J'ai mis les deux.
- Faut-il chiffrer les flux naturels (photosynthèse ~120 Gt C/an, océan ~90) ? Non inclus pour
  ne pas alourdir ; à ajouter si exigible.
- Le vocabulaire « budget carbone » est-il attendu explicitement ?
- Distinction t CO2 / t CO2eq : niveau d'exigence attendu à confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### modeles-demographiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-enseignement-scientifique.txt, section
« Modèles démographiques (mathématiques) » [Thème 3 — Une histoire du vivant : 3.4] :
  - Variation absolue et modèle linéaire (suite arithmétique).
  - Variation relative et modèle exponentiel (suite géométrique) ; modèle de Malthus.
  - Temps de doublement ; ajustement d'une courbe de tendance ; validation d'un modèle.
Programme : Enseignement scientifique (tronc commun), terminale générale, BO du 22 janvier
2019, version aménagée 2023. Extraction WebFetch depuis le PDF officiel
(education.gouv.fr : https://www.education.gouv.fr/media/133235/download ; eduscol).
À CONFRONTER AU PDF OFFICIEL avant publication.

PÉRIMÈTRE / CHOIX DIDACTIQUES (à confirmer par un relecteur) :
  - Chapitre traité en MATHÉMATIQUES au sein de l'enseignement scientifique (pluridisciplinaire).
    Champ « matiere: mathematiques », « parcours: enseignement-scientifique », « theme:
    Une histoire du vivant » — conventions reprises des chapitres ES déjà écrits
    (tale-esc-atmosphere-effet-de-serre-climat, tale-esc-energie-carbone-transition).
  - Formalisation par SUITES (u_{n+1} = u_n + r ; u_{n+1} = u_n × q) conforme au niveau
    terminale, en prolongement du chapitre de Première ES « Phénomènes d'évolution »
    (1es-math-phenomenes-evolution) qui, lui, restait au niveau des fonctions f(n)=f(0)q^n.
    Ce chapitre de Première est cité comme prérequis principal.
  - Temps de doublement : introduit N = ln2/ln q (utilise ln, prérequis Terminale) + la
    « règle de 70 » comme ordre de grandeur. Vérifier que le niveau d'exigence attendu en
    ES tolère l'usage de ln ; sinon, le doublement peut être présenté uniquement par
    lecture graphique / tableur. À TRANCHER PAR LE RELECTEUR.
  - Ajustement / courbe de tendance : présenté par la méthode différences vs quotients
    (démarche tableur), sans régression formelle (moindres carrés hors programme ES).

CONTRÔLES CHIFFRÉS (relus) :
  §1 : 20500−20000 = 500 ; 500/20000 = 0,025 = 2,5 %. OK.
  §2 : u_10 = 8000 + 500×10 = 13000. OK.
  §3 : 1,03^10 ≈ 1,3439 ; 20000×1,3439 ≈ 26878. OK.
  §4 : quotients 1100/1000 = 1210/1100 = 1331/1210 = 1,1 ; 1000×1,1^3 = 1331. OK.
  §6 : ln2/ln1,02 = 0,6931/0,019803 ≈ 35,0 ans ; ln2/ln1,03 ≈ 23,4 ans ; règle 70/2=35,
       70/3≈23,3. OK.
  §7 : 55000/50000 = 60500/55000 = 1,1 ; 50000×1,1 = 55000, ×1,1 = 60500. OK.
  §8 : 20000×1,03^5 = 20000×1,159274 ≈ 23185 ; écart à 23100 ≈ 85/23185 ≈ 0,37 % < 0,4 %. OK.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### probabilites-bayes-ia  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-enseignement-scientifique.txt,
section « === Probabilités, Bayes et intelligence artificielle (mathématiques) === »
(lignes 50-57), rattachée au Thème 3 « Une histoire du vivant » (3.5, et 3.1 pour
l'intervalle de confiance). Programme d'enseignement scientifique, terminale
générale, BO du 22 janvier 2019 (version aménagée 2023).

⚠️ PROVENANCE : le fichier .txt du programme a été extrait des PDF officiels
education.gouv.fr / eduscol via WebFetch. Cette extraction doit être CONFRONTÉE au
PDF officiel du BO avant publication.

Contenus du programme couverts :
- Numérisation des données texte/image/son ; données massives ; corrélation et
  causalité ; biais dans les données (§1-4).
- Probabilités conditionnelles ; formule de Bayes ; application au diagnostic,
  faux positifs/négatifs (§5-7). Sensibilité, spécificité, VPP et paradoxe des
  tests rares développés via arbre pondéré.
- Estimation : fréquence, intervalle de confiance (échantillonnage) et
  capture-marquage-recapture (§8-9).

CHOIX DE PÉRIMÈTRE / À SOUMETTRE AU RELECTEUR :
- Intervalle de confiance retenu : la forme simplifiée [f - 1/√n ; f + 1/√n] au
  niveau 95 %, cohérente avec l'enseignement scientifique et le programme de
  Seconde. Vérifier que c'est bien la formule attendue (et non l'intervalle
  asymptotique 1,96·√(f(1-f)/n) réservé à la spécialité).
- La condition de validité usuelle (n ≥ 30, nf ≥ 5, n(1-f) ≥ 5) n'a pas été
  détaillée pour ne pas alourdir ; à ajouter si le relecteur le souhaite.
- Notation Se / Sp introduite bien qu'elle ne figure pas littéralement dans
  l'intitulé : elle structure le diagnostic médical demandé (faux positifs/négatifs)
  et est d'usage courant. À valider.
- Le coefficient de corrélation est cité sans être calculé (hors capacités
  attendues en ES) ; l'accent est mis sur l'interprétation corrélation/causalité.

VÉRIFICATIONS NUMÉRIQUES (refaites à la main, cohérentes) :
- Bayes/VPP : P(T+) = 0,01·0,99 + 0,99·0,02 = 0,0099 + 0,0198 = 0,0297 ;
  VPP = 0,0099/0,0297 = 1/3 ≈ 0,33. Comptage sur 10 000 : 99 vrais positifs,
  198 faux positifs — cohérent.
- IC sondage : 1/√1000 ≈ 0,0316 → [0,488 ; 0,552], contient 0,50.
- Capture-recapture : N ≈ 60·50/15 = 200 ; 1/√50 ≈ 0,1414 → f ∈ [0,159 ; 0,441] ;
  N ∈ [60/0,441 ; 60/0,159] ≈ [136 ; 377].

Rédaction originale à partir du seul programme officiel, aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### production-conversion-energie-electrique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel d'ENSEIGNEMENT SCIENTIFIQUE, tronc commun, terminale générale,
BO du 22 janvier 2019, version aménagée 2023 (docs/programme-terminale-enseignement-scientifique.txt,
section « Production et conversion de l'énergie électrique (physique) », thème 2 « Le futur des
énergies », lignes 30-35 du .txt extrait). Points du programme couverts :
  - Induction électromagnétique ; alternateur ; production sans combustion.
  - Rendement de conversion ; rendement global d'une chaîne énergétique.
  - Effet photovoltaïque (semi-conducteurs) ; pertes par effet Joule.
  - Stockage de l'énergie (chimique, mécanique, électromagnétique).

Provenance : extraction via WebFetch depuis le PDF officiel education.gouv.fr / eduscol
(https://www.education.gouv.fr/media/133235/download). À CONFRONTER AU PDF officiel avant
publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Niveau d'exigence sur l'induction : le programme d'enseignement scientifique reste QUALITATIF
  (pas de loi de Faraday e = -dΦ/dt, pas de calcul de flux). J'ai volontairement gardé le
  qualitatif. À confirmer qu'aucune expression quantitative n'est attendue.
- Les « trois voies » (mécanique/radiative/électrochimique) : cette structuration en trois voies
  est une reformulation pédagogique fidèle à l'esprit du thème ; vérifier la terminologie exacte
  attendue.
- P = RI² : l'effet Joule est explicitement au programme. Le lien « haute tension → moins de
  pertes » est classique et attendu ; confirmer qu'un calcul chiffré (comme l'exemple §7) est
  bien du niveau tronc commun terminale.
- Rendement global = produit des rendements : central au programme, exemples numériques fournis.
- Stockage : les trois familles (chimique/mécanique/électromagnétique) sont citées telles quelles
  par le programme. Le dihydrogène est-il à ranger en « chimique » (mon choix) — à valider.
- Ordres de grandeur cités (rendement PV 15-20 %, 1 kWh = 3,6 MJ) : exacts, mais vérifier qu'ils
  ne dépassent pas le périmètre attendu.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## terminale / maths-complementaires

### calcul-integral  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : Programmes des ENSEIGNEMENTS OPTIONNELS de mathématiques, terminale générale,
arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019 — option MATHÉMATIQUES
COMPLÉMENTAIRES. Fichier docs/programme-terminale-maths-options-2019.txt, section
« Calcul intégral (calculs d'aires) » (lignes 81 à 84), rubriques « Contenus » et
« Capacités ». En-tête de provenance : lignes 1 à 11.
Références officielles : education.gouv.fr, arrêté MENE1921265A (complémentaires),
PDF spe265_annexe_1159134.pdf.

⚠️ SOURCE À CONFRONTER AU PDF OFFICIEL. La source est une EXTRACTION WebFetch depuis le
PDF officiel (voir en-tête du fichier programme). Avant publication, confronter au PDF
officiel education.gouv.fr / éduscol. Préambules, exemples et notes de bas de page du BO
ne figurent pas dans la source.

PÉRIMÈTRE — MATHS COMPLÉMENTAIRES (enseignement plus léger que la spécialité). Le programme
complémentaires liste comme CONTENUS : intégrale d'une fonction continue positive (aire) ;
lien primitive-intégrale ; linéarité, positivité ; valeur moyenne. CAPACITÉS : calculer une
intégrale à l'aide d'une primitive ; une aire ; une valeur moyenne.
Volontairement EXCLUS car hors programme complémentaires (présents en spécialité seulement) :
- intégration par parties (IPP) ;
- suites d'intégrales et relations de récurrence ;
- relation de Chasles (non citée dans les contenus complémentaires — À CONFIRMER par le
  relecteur : certains manuels complémentaires l'introduisent tout de même comme outil de
  découpage d'aires ; ici omise par fidélité au texte).
Inclus au titre de la capacité « calculer une aire » : aire d'un domaine sous l'axe (f ≤ 0)
et aire entre deux courbes — usages standard, à valider par le relecteur.

Correspondance contenus du programme → sections de la fiche :
- Définition (f continue positive), aire, notation ∫ₐᵇ f(x) dx → §1
- Fₐ(x)=∫ₐˣ f primitive qui s'annule en a ; toute f continue admet des primitives → §2
- Relation ∫ₐᵇ f = F(b)−F(a), notation [F(x)]ₐᵇ → §2
- Extension au signe quelconque (nécessaire pour l'aire d'un domaine sous l'axe) → §3
- Linéarité, positivité (+ comparaison, conséquence) → §4
- Valeur moyenne → §5
- Capacités (calculer intégrale via primitive, aire, valeur moyenne) → §6

À SOUMETTRE AU RELECTEUR : opportunité d'inclure/exclure la relation de Chasles en
complémentaires ; condition a < b pour la valeur moyenne ; niveau de détail attendu sur
l'extension au signe quelconque (§3) ; id/titre définitif du chapitre voisin « Primitives
et équations différentielles » cité en prérequis.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
```

### continuite-tvi  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
section « MATHÉMATIQUES COMPLÉMENTAIRES » > « Continuité et théorème des valeurs
intermédiaires », lignes 54 à 57.
Verbatim du programme :
- Contenus : continuité d'une fonction ; théorème des valeurs intermédiaires ; cas
  strictement monotone (existence et unicité d'une solution de f(x)=k).
- Capacités : justifier l'existence/l'unicité d'une solution ; l'encadrer.

Nature de la source : programme des ENSEIGNEMENTS OPTIONNELS de mathématiques, terminale
générale (arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019), enseignement de maths
COMPLÉMENTAIRES. Extraction via WebFetch depuis le PDF officiel education.gouv.fr
(spe265_annexe_1159134.pdf). À CONFRONTER au PDF officiel avant toute publication ; la
reproduction verbatim des rubriques n'est pas garantie exhaustive.

Différences assumées avec le chapitre de spécialité (tale-spe-math-continuite) :
- L'enseignement complémentaire est « plus léger que la spécialité, organisé autour de
  thèmes d'étude » (l. 51). Le programme complémentaire NE MENTIONNE PAS l'image d'une
  suite convergente par une fonction continue, ni les suites récurrentes u_{n+1}=f(u_n).
  Ces deux points, présents en spécialité, ont donc été VOLONTAIREMENT RETIRÉS ici.
- Ton allégé, moins de formalisme, accent mis sur la capacité pratique (justifier
  existence/unicité + encadrer), conformément à la consigne « niveau complémentaires ».

Choix de rédaction à soumettre au relecteur :
- Contre-exemple valeur absolue, fonction partie entière, convention « flèche = continue
  + strictement monotone », prolongement aux intervalles ouverts/infinis (limites aux
  bornes) : compléments standards, non verbatim dans le programme, à valider.
- Balayage/dichotomie : lien avec l'algorithmique ; pseudo-code de dichotomie à vérifier.
- Valeurs numériques de l'exemple x^3+x-1 : f(0,6) ≈ -0,184 et f(0,7) ≈ 0,043 (arrondis),
  changement de signe correct → 0,6 < α < 0,7. À revérifier au calcul.
- Id « tale-compl-math-continuite-tvi » et préfixe « tale- » fournis par la consigne.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### derivation-convexite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
bloc « MATHÉMATIQUES COMPLÉMENTAIRES », section « Dérivation, variations et
convexité » (lignes 59 à 63) :
  Contenus : dérivée, sens de variation, extremums ; fonctions de référence ;
  convexité, point d'inflexion (lecture graphique).
  Capacités : étudier les variations ; exploiter la convexité pour des inégalités
  ou l'allure d'une courbe.
En-tête de provenance du fichier lu (lignes 1 à 11) : arrêtés du 19-7-2019,
BO spécial n°8 du 25 juillet 2019 ; extraction via WebFetch depuis les PDF
officiels education.gouv.fr (option complémentaires : MENE1921265A / spe265).

MENTION 1 — NATURE DE LA SOURCE : le programme a été extrait par WebFetch depuis
le PDF officiel (éduscol / education.gouv.fr) selon l'en-tête du fichier source.
Cette extraction DOIT être confrontée au PDF officiel avant publication : le texte
des « Contenus/Capacités » du BO est bref et a pu être condensé (les préambules,
exemples et attendus détaillés du programme complémentaires ne sont pas repris).

MENTION 2 — CONTEXTE DE PRODUCTION : chapitre de TERMINALE. Le gabarit
(docs/gabarit-chapitre.md, §6) recommande de « ne rien écrire pour la Terminale
avant 2027 » ; cette consigne vise le programme de SPÉCIALITÉ (qui change à la
rentrée 2027). Le programme des OPTIONS (complémentaires/expertes) traité ici est
celui de 2019, actuellement EN VIGUEUR. Chapitre produit à la demande explicite de
l'utilisateur. Arbitrage calendrier à confirmer par le relecteur.

PÉRIMÈTRE / À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Différence avec la spécialité : le programme complémentaires n'inclut PAS la
  dérivée d'une fonction composée. Ce chapitre s'en tient donc à : variations,
  extremums, fonctions de référence, convexité/inflexion, inégalité de la tangente.
  Le chapitre spécialité (tale-spe-math-derivation-convexite) couvre en plus la
  composée : les deux ne doivent pas être fusionnés.
- Le mot « concave » n'apparaît pas mot pour mot dans les « Contenus » extraits
  mais découle de « exploiter la convexité pour l'allure d'une courbe » : traité
  comme l'opposé de convexe.
- La caractérisation « f convexe <=> f'' >= 0 » et l'inégalité de la tangente sont
  les attendus classiques mobilisés par la capacité « exploiter la convexité pour
  des inégalités ». Le programme complémentaires mentionne « lecture graphique »
  pour la convexité : le niveau visé reste plus léger que la spécialité ; garder
  les calculs de f'' simples (polynômes, quotients élémentaires).
- Fonctions de référence : la table reprend les dérivées usuelles de Première (la
  fonction ln relève d'un chapitre ultérieur du programme complémentaires ; elle
  n'est volontairement pas utilisée ici). Exponentielle supposée acquise (Première).
- L'exemple d'inégalité e^x >= 1+x suppose l'exponentielle connue : cohérent avec
  le prérequis Première spécialité.

POINTS À SOUMETTRE AU RELECTEUR :
- Justesse du sens des inégalités de convexité (vérifié une par une).
- Niveau attendu en complémentaires pour la dérivée seconde (le mot f'' figure-t-il
  explicitement, ou seulement la « lecture graphique » de la convexité ?).
- Prérequis pointant vers Première spécialité (public typique des complémentaires :
  élèves ayant suivi la spécialité en Première puis l'ayant abandonnée en Terminale).

Rédaction 100% originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu (relu_par: null).
```

### exponentielle-logarithme  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, en-tête (lignes 1 à 11) et
section « === Fonctions logarithme et exponentielle === » (lignes 71 à 74), rubriques
« Contenus » et « Capacités ». Programme des ENSEIGNEMENTS OPTIONNELS de mathématiques,
option MATHS COMPLÉMENTAIRES, terminale générale (arrêté du 19-7-2019, BO spécial n°8 du
25 juillet 2019). URL officielle : education.gouv.fr/bo/19/Special8/MENE1921265A.htm ;
PDF : cache.media.education.gouv.fr/.../spe265_annexe_1159134.pdf.

⚠️ PROVENANCE DE LA SOURCE : d'après l'en-tête du fichier, le texte a été extrait via WebFetch
depuis les PDF officiels. La reproduction n'est pas garantie exhaustive. AVANT PUBLICATION,
CONFRONTER AU PDF OFFICIEL (education.gouv.fr / éduscol) par un professeur.

CONTENU DU PROGRAMME (verbatim de la source) :
- Contenus : « fonction exponentielle (rappels) ; fonction logarithme népérien, propriétés
  algébriques, dérivée, variations, limites ; croissances comparées ».
- Capacités : « résoudre équations et inéquations ; utiliser log/exp dans un problème ».

CHOIX DE RÉDACTION À CONFRONTER AU RELECTEUR :
- « Rappels sur l'exponentielle » : le programme les cite sans les détailler (renvoi au
  programme de Première). J'ai retenu algèbre, dérivée, variations, limites, dérivée de e^u —
  périmètre standard. À valider selon le niveau d'exigence attendu en complémentaires.
- Croissances comparées : le programme dit seulement « croissances comparées » sans préciser
  les formes. J'ai inclus e^x/x^n → +∞, x^n e^x → 0 en -∞, ln x /x^n → 0, x^n ln x → 0 en 0⁺.
  Vérifier les formes exactes attendues (notamment si x^n e^x en -∞ est au programme complém.).
- Dérivées de composées (e^u)' et (ln u)' : indispensables aux exercices « utiliser dans un
  problème » ; incluses. Confirmer qu'elles sont exigibles en maths complémentaires.
- Section 7 « Applications » : traduit la capacité « utiliser log/exp dans un problème » par la
  méthode de seuil d'une suite géométrique (cohérent avec la section « Suites et modèles
  d'évolution » du même programme). Cadrage à valider.
- Aucune démonstration exigible n'a été supposée : la construction rigoureuse de ln comme
  réciproque est esquissée, non démontrée. Préciser si une démonstration est attendue.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### lois-densite-temps-attente  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programmes des ENSEIGNEMENTS OPTIONNELS de mathématiques, terminale générale,
option MATHÉMATIQUES COMPLÉMENTAIRES (arrêté du 19-7-2019, BO spécial n°8 du 25 juillet
2019). Fichier docs/programme-terminale-maths-options-2019.txt, section
« Lois à densité : temps d'attente » (lignes 92 à 96), rubriques « Contenus » et
« Capacités ». En-tête de provenance du fichier : lignes 1 à 11.

Intitulé exact du programme :
  Contenus : lois à densité ; loi uniforme ; loi exponentielle ; propriété d'absence
  de mémoire ; espérance.
  Capacités : calculer une probabilité et une espérance pour une loi uniforme ou
  exponentielle ; modéliser un temps d'attente.

⚠️ SOURCE À CONFRONTER AU PDF OFFICIEL. Le fichier source est une EXTRACTION WebFetch
depuis les PDF officiels (education.gouv.fr, MENE1921265A pour les complémentaires,
PDF spe265_annexe_1159134.pdf). À confronter au PDF officiel avant publication : le
texte du BO est volontairement bref (une ligne de contenus + une ligne de capacités),
tout le développement mathématique de cette fiche est une reconstruction pédagogique
standard, à valider par le relecteur.

Correspondance contenus du programme -> sections de la fiche :
- « lois à densité » (densité, probabilité = aire, P(X=c)=0) -> §1 ; espérance générale -> §2
- « loi uniforme » (densité, probabilité, espérance) -> §3
- « loi exponentielle » (densité λe^{-λt}, probabilité, espérance 1/λ) -> §4
- « propriété d'absence de mémoire » -> §5
- « espérance » -> §2 (générale), §3 et §4 (cas particuliers)
- Capacités « calculer une probabilité et une espérance » -> §3, §4 ; « modéliser un
  temps d'attente » -> §6

CHOIX ET POINTS À SOUMETTRE AU RELECTEUR :
- Notation P(X>t) vs P(X⩾t) : identiques ici puisque P(X=t)=0 ; j'ai gardé « > » pour
  l'absence de mémoire, cohérent avec les manuels. À confirmer selon la convention
  attendue par le relecteur.
- Espérance de l'exponentielle : démontrée par IPP sur [0;x] puis passage à la limite.
  Le BO complémentaires n'exige pas cette démonstration (intégrale impropre) ; elle est
  donnée en « pour aller plus loin » et peut être admise. À arbitrer.
- Espérance générale E(X)=∫ x f(x) dx présentée comme définition ; niveau de formalisme
  (intervalle non borné) à valider.
- Convention d'écriture décimale : virgule française (0{,}25) conforme aux autres fiches.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel ou
à un site. Statut : brouillon, non relu.
```

### primitives-equations-differentielles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
bloc « MATHÉMATIQUES COMPLÉMENTAIRES », section « Primitives et équations
différentielles » (lignes 76-79) :
  Contenus : primitives des fonctions usuelles ; équation différentielle y' = a·y + b.
  Capacités : déterminer des primitives ; résoudre y' = ay + b ; exploiter une
  solution particulière.

Programme officiel : arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019,
enseignement optionnel « mathématiques complémentaires », terminale générale.
PDF officiel : cache.media.education.gouv.fr .../spe265_annexe_1159134.pdf
Le fichier .txt a été extrait via WebFetch depuis le PDF officiel education.gouv.fr.
À CONFRONTER AU PDF OFFICIEL avant publication (extraction non garantie exhaustive).

CALENDRIER : programme des options 2019 TOUJOURS EN VIGUEUR (pas de refonte 2027
côté options complémentaires/expertes, contrairement à la spécialité). Aucun
avertissement de calendrier nécessaire ici.

PÉRIMÈTRE VOLONTAIREMENT PLUS LÉGER que la spécialité (chapitre jumeau
tale-spe-math-primitives-equations-differentielles). Différences ASSUMÉES et à
confirmer par le relecteur :
- PAS de section « formes composées (v'∘u)×u' » : le programme complémentaires ne
  liste que « primitives des fonctions usuelles ». Écarté volontairement.
- PAS de cas général « y'=ay+f à partir d'une solution particulière » : le programme
  s'arrête à « y'=ay+b » ; la capacité « exploiter une solution particulière » est
  traitée via la solution constante de y'=ay+b (§5.3) et la modélisation (§6).
- Tableau des primitives usuelles (§3) : inclut 1/x → ln x (les fonctions log/exp
  sont au programme complémentaires). sin/cos NON inclus : la trigonométrie n'est
  pas un thème du programme complémentaires 2019. À valider par le relecteur.
- Intervalle des primitives de 1/x² et 1/x : formulé pour x>0 pour rester simple au
  niveau élève. À vérifier.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### probabilites-bayes-binomiale  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
section « === Probabilités : conditionnelles, Bayes et loi binomiale === »
(############ MATHÉMATIQUES COMPLÉMENTAIRES ############), rubriques Contenus et
Capacités. Programme des enseignements optionnels de mathématiques, terminale
générale, arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019.

⚠️ PROVENANCE : le fichier .txt du programme a été extrait via WebFetch depuis les PDF
officiels education.gouv.fr (voir en-tête « SOURCE OFFICIELLE » du .txt : PDF
spe265_annexe pour les maths complémentaires). Cette extraction doit être CONFRONTÉE au
PDF officiel avant publication.

Contenus du programme couverts : probabilités conditionnelles (§1) ; arbre pondéré
(§2) ; formule des probabilités totales (§3) ; formule de Bayes (§4) ; épreuve et loi
de Bernoulli (§5) ; schéma de Bernoulli (§6) ; loi binomiale (§7). Capacités traitées :
représenter par un arbre (§2), appliquer Bayes (§4), calculer des probabilités avec la
loi binomiale (§8), espérance de la loi binomiale E(X)=np (§7).

CHOIX DE PÉRIMÈTRE / À SOUMETTRE AU RELECTEUR :
- Le programme maths complémentaires cite « espérance de la loi binomiale » mais PAS la
  variance : V(X)=np(1-p) n'est donc PAS mentionnée (contrairement au chapitre de
  spécialité). À confirmer avec le relecteur que ce périmètre est le bon.
- La notation du coefficient binomial retenue est $\binom{n}{k}$ (cohérente avec les
  usages BO 2019) plutôt que $C_n^k$. À harmoniser après relecture.
- Le programme complémentaire ne demande PAS explicitement les problèmes de seuil ni les
  démonstrations : la fiche reste au niveau « appliquer/calculer » des capacités.
- Valeurs numériques à revérifier : exemple Bayes dépistage (P(T)=0,0288 ; P_T(M)≈0,66),
  P(X=3)≈0,201 pour B(10;0,2). Calculs refaits à la main, cohérents.

Rédaction originale à partir du seul programme officiel, aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### suites-evolution  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-maths-options-2019.txt, section « MATHÉMATIQUES
COMPLÉMENTAIRES » > « Suites et modèles d'évolution » (lignes 65 à 69).
  Contenus : suites récurrentes ; suites géométriques ; suites arithmético-géométriques ;
  limites de suites.
  Capacités : étudier le comportement d'une suite ; modéliser une évolution ; déterminer
  une limite.
Ce fichier programme est issu d'une extraction WebFetch depuis les PDF officiels
(education.gouv.fr, arrêtés du 19-7-2019, BO spécial n°8 du 25 juillet 2019 ; PDF
complémentaires : spe265_annexe_1159134.pdf). L'en-tête du fichier source (lignes 1-11)
précise « À confronter au PDF ; source officielle ». Cette extraction DOIT être confrontée
au PDF officiel avant publication.

⚠️ PÉRIMÈTRE MATHS COMPLÉMENTAIRES (option, terminale générale) : programme allégé,
organisé par thèmes d'étude. J'ai volontairement :
  - NON traité le raisonnement par récurrence comme MÉTHODE de démonstration (il relève de
    la spécialité, pas de l'option complémentaire) ; les suites « récurrentes » sont ici les
    suites définies par récurrence u_{n+1}=f(u_n), au sens du contenu du BO.
  - traité les limites de façon INTUITIVE (pas de définition formelle par intervalles /
    seuils), conforme au niveau de l'option.
  - centré les arithmético-géométriques sur la méthode du point fixe + suite auxiliaire
    v_n = u_n - ℓ, seule attendue à ce niveau.

À CONFRONTER AU PROGRAMME OFFICIEL PAR UN PROFESSEUR :
  - Vérifier le niveau d'exigence exact sur les limites (le BO complémentaires ne détaille
    pas de théorèmes de comparaison / gendarmes ; je ne les ai donc pas introduits — à
    confirmer).
  - Vérifier que la somme des termes d'une suite géométrique (§2) est bien attendue en
    complémentaires (présente au titre des rappels de Première ; laissée en encadré léger).
  - Formule du terme général arith.-géo. u_n = (u_0 − ℓ)a^n + ℓ : cohérente avec ℓ = b/(1−a).
  - Prérequis cités : suites arithmétiques/géométriques et taux d'évolution (Première).

CONTRÔLES CHIFFRÉS (relus) :
  §4 exemple : ℓ = 3/(1−0,5) = 6 ; v_0 = 4 ; u_n = 4×0,5^n + 6 → 6. OK.
  §5 lac : ℓ = 50/(1−0,8) = 250 ; u_1 = 0,8×200+50 = 210 ; u_2 = 0,8×210+50 = 218 ;
    u_3 = 0,8×218+50 = 224,4. OK.
  §1 exemple : u_0=3, u_{n+1}=2u_n−1 → 5, 9, 17. OK.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## terminale / maths-expertes

### arithmetique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, bloc
« MATHÉMATIQUES EXPERTES », section « Arithmétique (divisibilité et congruences) »
(lignes 33 à 39), rubriques « Contenus » et « Capacités ». Programme des enseignements
optionnels de mathématiques, terminale générale : arrêté du 19-7-2019, BO spécial n°8
du 25 juillet 2019.

⚠️ PROVENANCE DE LA SOURCE : d'après l'en-tête du fichier source (lignes 1 à 11), le texte
du programme a été extrait via WebFetch depuis les PDF officiels education.gouv.fr
(MENE1921264A / spe264_annexe_1158825.pdf pour les maths expertes). La reproduction n'est
pas garantie exhaustive. AVANT TOUTE PUBLICATION, confronter au PDF officiel
(education.gouv.fr / éduscol) par un professeur, au même titre que la relecture pédagogique.

⚠️ CHAPITRE DE TERMINALE : le gabarit (docs/gabarit-chapitre.md, §6) recommande de
« ne rien écrire pour la Terminale avant 2027 ». Ici il s'agit de l'OPTION maths expertes,
dont le programme est celui de 2019 (BO spécial n°8), stable et toujours en vigueur — la
réserve « rentrée 2027 » vise la spécialité, pas cette option. Chapitre produit à la DEMANDE
EXPLICITE de l'utilisateur. À signaler tout de même au relecteur.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme liste les contenus sans fixer le niveau de formalisme. J'ai retenu la
  présentation standard de l'option (divisibilité, division euclidienne, congruences et
  compatibilité, PGCD/Euclide, Bézout, Gauss, premiers/infinitude/décomposition, petit
  Fermat) et les capacités citées (diviseurs et PGCD, résoudre ax≡b[n], inverse modulo n,
  tests de divisibilité, diophantiennes simples).
- Preuve de l'infinitude des premiers : esquissée (idée d'Euclide), non entièrement rédigée.
  Préciser si une démonstration complète est exigible.
- Petit théorème de Fermat : énoncé sous les deux formes (a^{p-1}≡1 si p∤a, et a^p≡a pour
  tout a). Démonstration non incluse — vérifier si elle est attendue.
- Description complète des solutions d'une diophantienne (paramétrage par k) : incluse car
  citée par « équations diophantiennes simples » ; confirmer le degré d'exigence.
- Congruences notées a ≡ b [n] (notation crochets). Vérifier la notation privilégiée par
  l'établissement (certains manuels écrivent mod n ou (mod n)).

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### complexes-algebrique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, section
« Nombres complexes — point de vue algébrique » (lignes 16 à 23), rubriques
« Contenus » et « Capacités ». En-tête de provenance du fichier lu (lignes 1 à 10) :
programmes des enseignements optionnels de mathématiques, terminale générale, arrêtés
du 19-7-2019, BO spécial n°8 du 25 juillet 2019, option MATHS EXPERTES.
URL officielle citée : education.gouv.fr/bo/19/Special8/MENE1921264A.htm
PDF : cache.media.education.gouv.fr/.../spe264_annexe_1158825.pdf

⚠️ PROVENANCE À CONFRONTER AU PDF OFFICIEL : d'après l'en-tête du fichier source, le
texte a été extrait « via WebFetch depuis les PDF officiels » d'education.gouv.fr. La
reproduction n'est pas garantie exhaustive. AVANT PUBLICATION, confronter ce contenu au
PDF officiel (spe264_annexe_1158825.pdf) et à la relecture pédagogique.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme liste en « Contenus » : ensemble ℂ, partie réelle/imaginaire, opérations ;
  conjugaison et propriétés ; inverse d'un complexe non nul ; FORMULE DU BINÔME dans ℂ ;
  équations du second degré à coefficients réels. La formule du binôme figure au
  programme algébrique : incluse ici en section 7, brève, sans démonstration ni lien
  explicite avec le triangle de Pascal / les coefficients binomiaux — vérifier le niveau
  d'exigence attendu (peut relever d'un chapitre « combinatoire » distinct selon la
  progression choisie).
- Capacités visées et couvertes : calculs algébriques (§2), résoudre az=b (§5), résoudre
  une équation en z et z̄ (§5), résoudre un second degré à coefficients réels dans ℂ (§6).
- Somme/produit des racines et factorisation a(z−z1)(z−z2) : ajoutés en §6 car standards
  et utiles ; le programme ne les cite pas explicitement dans cette section — à valider.
- Le module |z| et |z|²=z·z̄ relèvent du chapitre « point de vue géométrique » (lignes
  24+ du programme) : volontairement NON traités ici, sauf z·z̄=a²+b² utilisé pour
  l'inverse (contenu algébrique légitime). Vérifier la frontière algébrique/géométrique
  retenue dans la progression de l'établissement.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### complexes-geometrique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, section
« Nombres complexes — point de vue géométrique » (lignes 24 à 31), rubriques
« Contenus » et « Capacités ». En-tête de provenance du fichier lu (lignes 1 à 11) :
programmes des enseignements OPTIONNELS de mathématiques, terminale générale, arrêtés
du 19-7-2019, BO spécial n°8 du 25 juillet 2019 (option maths EXPERTES).

⚠️ PROVENANCE : d'après l'en-tête du fichier source, le programme a été extrait via
WebFetch depuis les PDF officiels (education.gouv.fr, MENE1921264A / annexe spe264).
À CONFRONTER AU PDF OFFICIEL avant publication, au même titre que la relecture pédagogique.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme cite « module d'un produit/quotient/puissance » : j'ai retenu les trois
  identités |zz'|, |z/z'|, |z^n|, plus |z̄|=|z| et |-z|=|z|. Standard du chapitre.
- Forme exponentielle : le programme la relie à l'équation fonctionnelle de exp. J'ai
  présenté e^{iθ} comme NOTATION posée (cos θ + i sin θ) et donné les règles d'exposants
  sans démontrer le lien avec la fonction exponentielle réelle. Vérifier le niveau
  d'exigence attendu (certains manuels démontrent (θ ↦ e^{iθ}) morphisme via dérivation).
- Euler / Moivre : le programme les cite sans préciser les applications. J'ai illustré
  Euler par la linéarisation (cos²θ) et Moivre par cos(2θ) ; confirmer si linéarisation
  et calcul de cos(nθ)/sin(nθ) sont explicitement exigibles à ce niveau.
- Interprétations géométriques : le programme demande « interpréter |z−z'| et arg ». J'ai
  ajouté l'angle (AB,AC) = arg((z_C−z_A)/(z_B−z_A)) et les ensembles de points (cercle,
  médiatrice), classiques mais à valider comme attendus.
- PRÉREQUIS : le chapitre « complexes — point de vue algébrique » (option expertes) est
  référencé mais son dossier est encore VIDE dans le dépôt à la date de rédaction. Vérifier
  qu'il sera publié avant celui-ci (conjugué, |z|²=z z̄ y sont supposés connus).

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### graphes-matrices  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-maths-options-2019.txt, section « Graphes et
matrices » (lignes 41 à 47), rubriques « Contenus » et « Capacités ». En-tête de
provenance du fichier : lignes 1 à 11.

Texte officiel repris (Contenus) : « graphe (sommets, arêtes, ordre, degré), chaîne,
longueur, connexité ; matrices (carrée, ligne, colonne), opérations, inverse,
puissances ; matrice d'adjacence ; suites Uₙ₊₁ = A·Uₙ + C ; chaîne de Markov à 2 ou 3
états, matrice de transition, distribution invariante. »
Capacités : « modéliser par un graphe ou une matrice ; calculer inverse et puissances
d'une matrice ; compter les chemins de longueur donnée ; étudier une chaîne de Markov. »

⚠️ PROVENANCE DE LA SOURCE : le fichier programme indique une extraction via WebFetch
depuis les PDF officiels (education.gouv.fr, BO spécial n°8 du 25/7/2019). AVANT TOUTE
PUBLICATION, CONFRONTER AU PDF OFFICIEL (arrêté du 19-7-2019, MENE1921264A) par un
professeur, au même titre que la relecture pédagogique.

⚠️ PROGRAMME 2019 TOUJOURS EN VIGUEUR : contrairement à la spécialité (qui change en
2027), l'option « maths expertes » relève encore du programme 2019. À revalider au
moment de la publication.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme cite les contenus sans fixer le niveau de détail. Choix retenus, standard
  du chapitre : théorème des degrés (« poignées de main »), formule d'inverse 2×2 via
  ad−bc, état stable via (I−A)⁻¹C. Vérifier que le déterminant/ad−bc est bien au niveau
  d'exigence attendu (le mot « déterminant » n'est PAS employé dans la fiche, seul
  ad−bc l'est — à confirmer).
- Convention Markov : distribution en matrice LIGNE et évolution πₙ₊₁ = πₙ P (produit à
  droite). C'est la convention la plus répandue au lycée, mais certains manuels utilisent
  des colonnes avec P à gauche. À harmoniser avec le manuel de référence de l'établissement.
- Comptage de chemins : énoncé pour graphe non orienté (M symétrique) ; l'exemple du
  triangle est vérifié à la main. Le théorème vaut aussi pour graphes orientés — préciser
  le cadre attendu.
- Existence/convergence vers la distribution invariante : admise, non démontrée
  (hypothèses de régularité hors programme lycée). Préciser si une justification est exigible.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## terminale / maths-specialite

### calcul-integral  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programme officiel de spécialité mathématiques, Terminale générale,
applicable à la rentrée 2027. Fichier docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — CALCUL INTÉGRAL » (lignes 260 à 283), rubriques « Contenus » et
« Capacités attendues ». En-tête de provenance : lignes 1 à 20.

⚠️ MENTION 1 — SOURCE À CONFRONTER AU PDF OFFICIEL. La source est une EXTRACTION
WebFetch : d'après son en-tête, le texte a été reconstitué via l'outil WebFetch depuis
un miroir (xm1math.net), le proxy du sandbox bloquant le téléchargement du PDF. Avant
publication, cette extraction doit être confrontée au PDF officiel (education.gouv.fr /
éduscol). Préambules, exemples et notes de bas de page du BO ne figurent pas dans la source.

⚠️ MENTION 2 — CHAPITRE DE TERMINALE PRODUIT SUR LE PROGRAMME RENTRÉE 2027, À LA DEMANDE
DE L'UTILISATEUR. Le gabarit (§6) déconseillait d'écrire pour la Terminale avant 2027 ;
nous sommes en 2026, mais l'utilisateur a explicitement commandé ce chapitre sur le
programme déjà publié de la rentrée 2027. Calendrier de publication à valider par le relecteur.

Correspondance contenus du programme → sections de la fiche :
- Définition (f continue positive), aire, notation ∫ₐᵇ f(x) dx → §1
- Fₐ(x)=∫ₐˣ f primitive qui s'annule en a ; toute f continue admet des primitives → §2
- Relation ∫ₐᵇ f = F(b)−F(a), notation [F(x)]ₐᵇ → §2
- Définition par les primitives pour f de signe quelconque → §3
- Linéarité, positivité, intégration des inégalités, Chasles → §4
- Valeur moyenne → §5 ; intégration par parties → §6
- Capacités (encadrer, calculer via primitive/IPP, majorer/minorer, aire entre deux
  courbes, suite d'intégrales, interprétation interdisciplinaire) → §4, §6, §7

À SOUMETTRE AU RELECTEUR : condition a < b pour la valeur moyenne ; forme/notation de
l'IPP ; niveau de détail attendu sur les suites d'intégrales (§6) ; id/titre définitif
du chapitre voisin « Primitives » cité en prérequis.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
```

### combinatoire-denombrement  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt, section « ALGÈBRE ET
GÉOMÉTRIE — COMBINATOIRE ET DÉNOMBREMENT », lignes 51-58. Rubrique « Capacités
attendues » uniquement (pas de rubrique « Contenus » : le texte est volontairement
sobre). « Représentation adaptée (ensembles, arbres, tableaux, diagrammes) » →
sections 1 et 6 ; « dénombrements simples dans divers domaines » → exemples.

⚠️ MENTION OBLIGATOIRE 1 — SOURCE À CONFRONTER AU PDF : ce programme n'a PAS été
obtenu par la chaîne d'extraction habituelle ; son texte est une EXTRACTION WebFetch
depuis le miroir xm1math.net (en-tête de provenance du fichier source, lignes 6-17).
AVANT PUBLICATION il DOIT être confronté au PDF officiel (education.gouv.fr /
éduscol) ; reproduction verbatim non garantie exhaustive.

⚠️ MENTION OBLIGATOIRE 2 — PÉRIMÈTRE PROJET : chapitre de TERMINALE produit sur le
programme RENTRÉE 2027 à la demande explicite de l'utilisateur, alors que le projet
EXCLUAIT initialement la Terminale (gabarit ligne 197 : « Ne rien écrire pour la
Terminale avant 2027 »). Contrainte levée car le programme 2027 est publié ; à
signaler au relecteur, ainsi que le préfixe d'id « tale- » non documenté dans les
consignes collège (6e/5e/4e/3e), à valider comme convention Terminale.

⚠️ AU-DELÀ DE LA LETTRE « DÉNOMBREMENTS SIMPLES » — à trancher par le relecteur.
J'ai INTRODUIT, au-delà du texte, les FORMULES de p-listes ($n^p$), d'ARRANGEMENTS
($A_n^p$) et de PERMUTATIONS ($n!$) : ces objets ne sont pas nommés dans la
sous-section « combinatoire », ils relèvent de l'usage classique de Terminale — à
décider s'ils sont exigibles ou seulement illustratifs (et la notation $A_n^p$
n'est plus exigée par certaines éditions). En revanche COMBINAISONS et COEFFICIENTS
BINOMIAUX (factorielle, k parmi n, symétrie, Pascal, triangle) sont justifiés : la
sous-section « schéma de Bernoulli » (lignes 294-296) mobilise « l'expression de la
loi binomiale à l'aide des coefficients binomiaux ». Traités à ce titre.

À CONFRONTER AU PDF : notation $\binom{n}{p}$ vs $C_n^p$ retenue par le BO 2027 ;
niveau d'exigence sur p-listes / arrangements ; formule du crible
$\mathrm{Card}(A\cup B)$ avec intersection (à confirmer comme attendue).

Rédaction 100 % originale, aucun emprunt à un manuel ou site. Brouillon, non relu.
```

### continuite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — CONTINUITÉ DES FONCTIONS D'UNE VARIABLE RÉELLE », lignes 190 à 201.
Rubriques utilisées :
- Contenus (l. 193-196) : continuité en un point (déf. par les limites) et sur un
  intervalle ; « Toute fonction dérivable est continue » ; image d'une suite convergente
  par une fonction continue ; théorème des valeurs intermédiaires, cas des fonctions
  continues strictement monotones.
- Capacités attendues (l. 199-201) : étudier les solutions d'une équation f(x)=k
  (existence, unicité, encadrement) ; pour f continue d'un intervalle dans lui-même,
  étudier une suite u_{n+1}=f(u_n).

MENTION OBLIGATOIRE 1 — nature de la source : ce programme provient d'une EXTRACTION
WebFetch (miroir xm1math.net), voir l'en-tête de provenance du fichier source (l. 1-20).
Il DOIT être confronté au PDF officiel education.gouv.fr / éduscol avant toute
publication. La reproduction verbatim des rubriques n'est pas garantie exhaustive.

MENTION OBLIGATOIRE 2 — dérogation au calendrier : le gabarit (docs/gabarit-chapitre.md,
l. 197-198) demande de « ne rien écrire pour la Terminale avant 2027 ». Ce chapitre de
Terminale est produit sur le PROGRAMME RENTRÉE 2027 À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le relecteur doit valider cette dérogation.

Choix de rédaction à soumettre au relecteur :
- Contre-exemple valeur absolue et convention « flèche = continue + strictement monotone »
  ne sont pas verbatim dans l'extraction (préambules non repris) : compléments standards.
- Balayage/dichotomie : lien avec l'algorithmique ; pseudo-code de dichotomie à vérifier.
- Prolongement du corollaire aux intervalles ouverts/infinis (limites aux bornes) : à
  confirmer sur le texte officiel.
- Id « tale-spe-math-continuite » (fourni par la consigne) : le préfixe « tale- » n'est
  pas listé dans les conventions du fichier consignes (6e/5e/4e/3e), à entériner.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### derivation-convexite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — COMPLÉMENTS SUR LA DÉRIVATION » (lignes 168 à 187),
rubriques « Contenus » et « Capacités attendues ». En-tête de provenance du
fichier lu (lignes 1 à 20).

MENTION 1 — NATURE DE LA SOURCE : ce programme n'a PAS été extrait par la chaîne
habituelle. D'après l'en-tête de provenance, son texte a été reconstitué via
l'outil WebFetch depuis un miroir (xm1math.net), et non depuis le PDF officiel
(le proxy du sandbox bloquant le téléchargement direct). Cette extraction WebFetch
DOIT être confrontée au PDF officiel (education.gouv.fr / éduscol) avant toute
publication. Reproduction non garantie exhaustive (préambules, exemples et notes
non repris).

MENTION 2 — CONTEXTE DE PRODUCTION : chapitre de TERMINALE produit sur le
programme applicable à la RENTRÉE 2027, à la demande explicite de l'utilisateur.
Le gabarit (docs/gabarit-chapitre.md, §6) recommandait de « ne rien écrire pour
la Terminale avant 2027 » ; l'utilisateur a explicitement commandé ce chapitre
sur le programme 2027 déjà publié. À signaler au relecteur (arbitrage calendrier).

PÉRIMÈTRE / À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction ne liste, en « Contenus », que la définition de la convexité PAR
  LA POSITION COURBE/SÉCANTES et le « point d'inflexion ». Les caractérisations
  par « f'' >= 0 » et par « f' croissante », ainsi que la notion de tangente
  au-dessus/en dessous, sont des attendus classiques du chapitre et découlent des
  capacités (« démontrer des inégalités en utilisant la convexité », « lire les
  intervalles où f est convexe ou concave »). Elles ont été ajoutées pour la
  cohérence pédagogique, à VÉRIFIER telles quelles dans le texte officiel.
- Le mot « concave » n'apparaît pas mot pour mot dans les « Contenus » extraits
  mais figure dans les « Capacités attendues » (« intervalles où f est convexe
  ou concave ») : traité en conséquence.
- La fonction exponentielle et le logarithme sont mobilisés dans les exemples
  (inégalités e^x >= 1+x, ln x <= x-1). Vérifier l'ordre de progression : dans ce
  programme, « Compléments sur la dérivation » précède « Fonction logarithme » ;
  l'exemple ln peut donc être déplacé/annoté si le chapitre est étudié avant le
  logarithme. Exponentielle supposée acquise (Première).

POINTS À SOUMETTRE AU RELECTEUR :
- Justesse du sens des inégalités de convexité (sens vérifié une par une).
- Formulation de la définition par sécantes vs. par tangentes (les deux données
  comme équivalentes ; la version tangente est admise ici).
- Prérequis pointant vers contenu/premiere/maths-specialite/derivation/.

Rédaction 100% originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu (relu_par: null).
```

### fonction-logarithme  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-specialite-maths-2027.txt, section
« ANALYSE — FONCTION LOGARITHME » (lignes 204 à 219), rubriques « Contenus » et
« Capacités attendues ». En-tête de provenance du fichier lu (lignes 1 à 20).

⚠️ MENTION 1 — PROVENANCE DE LA SOURCE : ce programme n'a PAS été obtenu par la chaîne
d'extraction habituelle. D'après son en-tête, le texte a été reconstitué via l'outil
WebFetch depuis un miroir (xm1math.net), le proxy du sandbox bloquant le téléchargement
direct du PDF officiel. La reproduction n'est donc pas garantie exhaustive. AVANT TOUTE
PUBLICATION, ce contenu doit être CONFRONTÉ AU PDF OFFICIEL (education.gouv.fr / éduscol)
par un professeur — au même titre que la relecture pédagogique.

⚠️ MENTION 2 — CHAPITRE DE TERMINALE / PROGRAMME RENTRÉE 2027 : le gabarit
(docs/gabarit-chapitre.md, §6) recommande de « ne rien écrire pour la Terminale avant
2027 » car son programme change à la rentrée 2027-2028. Ce chapitre a été produit
SCIEMMENT, à la DEMANDE EXPLICITE de l'utilisateur, sur le programme applicable à la
rentrée 2027 (déjà publié selon l'en-tête de la source). À signaler au relecteur : vérifier
que ce programme est bien la version en vigueur au moment de la publication.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Périmètre des « propriétés algébriques » : le programme les cite sans les détailler.
  J'ai retenu produit, quotient, puissance (entière et racine) — standard du chapitre.
  La formule ln(aⁿ)=n ln a est énoncée pour n entier puis étendue « à tout réel » : à
  confirmer selon le niveau d'exigence attendu.
- Croissances comparées : le programme dit « ln et x ↦ xⁿ en 0 et en +∞ ». J'ai traduit
  par lim (ln x)/xⁿ = 0 en +∞ et lim xⁿ ln x = 0 en 0⁺. Vérifier la forme exacte attendue.
- Dérivée (ln u)' = u'/u : relève des « compléments sur la dérivation » (composée) ; incluse
  ici car indispensable aux exercices. À valider comme attendu à ce stade.
- La construction rigoureuse de ln comme réciproque (existence/unicité via TVI et stricte
  monotonie de exp) est esquissée, non démontrée : préciser si une démonstration est exigible.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonctions-trigonometriques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt, section
« ANALYSE — FONCTIONS SINUS ET COSINUS » (lignes 222 à 237).
⚠️ Cette source est une EXTRACTION via WebFetch (miroir xm1math.net du PDF), et NON
le PDF officiel : voir l'en-tête de provenance du fichier (lignes 1 à 20). Elle doit
être CONFRONTÉE AU PDF OFFICIEL (education.gouv.fr / éduscol) avant toute publication,
au même titre que la relecture par un professeur.

CONTEXTE DE COMMANDE : chapitre de TERMINALE produit sur le programme de la RENTRÉE
2027, À LA DEMANDE EXPLICITE DE L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md,
§6) recommandait de « ne rien écrire pour la Terminale avant 2027 » car le programme
changeait ; le programme 2027 étant désormais publié et le chapitre explicitement
demandé, la production est faite en connaissance de cette consigne. À SOULIGNER AU
RELECTEUR.

Éléments explicitement lisibles dans l'extraction du programme :
- « Fonctions trigonométriques sinus et cosinus. Parité, périodicité. Courbes
  représentatives. » -> sections 1, 2, 3.
- « Dérivées, variations. » -> sections 5, 6.
- « Lier la représentation graphique [...] et le cercle trigonométrique. » -> sections
  1 et 6 (lecture des variations sur le cercle).
- « Traduire graphiquement la parité et la périodicité. » -> sections 2, 3.
- « Résoudre une équation du type cos(x)=a, une inéquation de la forme cos(x) ⩽ a sur
  [−π, π]. » -> section 7 (méthodes).
- « [...] étudier une fonction simple définie à partir de fonctions trigonométriques,
  pour déterminer des variations, un optimum. » -> section 7, exemple f=sin+cos.

CHOIX DE RÉDACTION À CONFRONTER AU PROGRAMME / SOUMETTRE AU RELECTEUR :
- Les limites lim sin(x)/x = 1 et lim (cos x −1)/x = 0 (section 4) ne sont pas citées
  explicitement dans l'extraction, mais sont le support usuel de « Dérivées » et sont
  demandées par l'utilisateur. Vérifier leur statut (exigible / admis / démonstration)
  dans le préambule du PDF officiel, non repris par l'extraction.
- La dérivée de la composée sin(ax+b) / cos(ax+b) (section 5) s'appuie sur le chapitre
  « Compléments sur la dérivation » (composée) — prérequis Terminale supposé traité
  avant. Confirmer l'ordre de progression retenu par l'établissement.
- Prérequis « Trigonométrie (Première spécialité) » pointant vers
  contenu/premiere/maths-specialite/trigonometrie/ : lien à vérifier une fois ce
  chapitre stabilisé.
- Convention d'intervalle des tableaux de variation ([0;2π] pour cos, [−π/2;3π/2] pour
  sin) : choix pédagogique, à valider.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu (statut/relu_par inchangés, conformément à la règle du projet).
```

### limites-fonctions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-terminale-specialite-maths-2027.txt, section « ANALYSE —
LIMITES DES FONCTIONS » (lignes 151 à 165), rubriques « Contenus » et « Capacités
attendues ». En-tête de provenance du fichier lu (lignes 1 à 20).

⚠️ MENTION OBLIGATOIRE 1 — PROVENANCE DE LA SOURCE : le fichier programme n'a PAS été
produit par la chaîne d'extraction habituelle. Son texte a été reconstitué via WebFetch
depuis un miroir (xm1math.net), sous-section par sous-section. Cette extraction DOIT être
confrontée au PDF officiel (education.gouv.fr / éduscol) avant toute publication. La
reproduction n'est pas garantie exhaustive.

⚠️ MENTION OBLIGATOIRE 2 — CHAPITRE DE TERMINALE / PROGRAMME 2027 : ce chapitre de
Terminale a été produit sur le programme de la rentrée 2027 À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md, §6) porte l'avertissement « Ne rien
écrire pour la Terminale avant 2027 : son programme change à la rentrée 2027-2028 ». La
date du jour étant 2026-08-13, ce contenu anticipe donc la mise en œuvre. À faire trancher
par le relecteur / responsable projet : opportunité de produire ce chapitre maintenant.

Éléments explicitement lisibles dans l'extraction du programme :
- « Limite finie ou infinie d'une fonction en +∞, en –∞, en un point. Asymptote
  parallèle à un axe de coordonnées. » → sections 1 et 2.
- « Limites faisant intervenir les fonctions de référence de première : puissances
  entières, racine carrée, fonction exponentielle. » → section 3.
- « Limites et comparaison. » → section 6, méthode 4 (comparaison, gendarmes).
- « Opérations sur les limites. » → section 4.
- « Déterminer [...] la limite [...] en utilisant les limites usuelles, les croissances
  comparées. » → sections 3 et 7.
- « Faire le lien entre l'existence d'une asymptote parallèle à un axe et celle de la
  limite correspondante. » → section 2 (lien asymptote ↔ limite, rendu explicite).

Points de PÉRIMÈTRE / à confronter au PDF officiel par un professeur :
- Les 4 formes indéterminées et les techniques de levée (facteur dominant, conjugué,
  simplification) ne sont pas nommées telles quelles dans l'extraction « Contenus » ;
  elles découlent de « Opérations sur les limites » et sont un standard du niveau. La
  consigne utilisateur demande explicitement de les nommer (∞−∞, 0×∞, ∞/∞, 0/0). À
  valider comme conforme à l'esprit du programme.
- Le théorème des gendarmes est nommé dans la section SUITES du programme, pas dans
  LIMITES DES FONCTIONS ; je l'ai transposé aux fonctions au titre de « Limites et
  comparaison ». À confirmer.
- Croissances comparées AVEC LOGARITHME volontairement EXCLUES ici (elles relèvent de la
  fiche logarithme, où le programme place la « croissance comparée du logarithme et de
  x↦xⁿ »). Ici : exponentielle / puissances uniquement, conformément à la consigne.
- Asymptotes obliques NON traitées : le programme ne mentionne que les asymptotes
  « parallèles à un axe ».

Prérequis retenus : dérivation et fonctions de référence de Première (puissances, racine,
exponentielle), conformément à la consigne.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### listes  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programme officiel de spécialité mathématiques, Terminale générale,
applicable à la rentrée 2027. Fichier :
docs/programme-terminale-specialite-maths-2027.txt, section « ALGORITHMIQUE ET
PROGRAMMATION — NOTION DE LISTE » (lignes 38-48). En-tête de provenance du fichier
source : lignes 1-20.

⚠️ MENTION 1 — NATURE DE LA SOURCE : ce programme n'a PAS été obtenu par la chaîne
d'extraction habituelle. Le proxy du sandbox bloquant le PDF, le texte a été
reconstitué via WebFetch depuis le miroir xm1math.net/reforme/term_gen_spe.pdf
(voir en-tête lignes 6-17 du fichier source). L'extraction est fiable dans l'esprit
et la lettre mais NON garantie exhaustive : elle DOIT être confrontée au PDF
officiel (education.gouv.fr / éduscol) avant toute publication.

⚠️ MENTION 2 — CONTEXTE DE PRODUCTION : chapitre de TERMINALE produit sur le
programme de la RENTRÉE 2027, à la demande explicite de l'utilisateur. Le gabarit
(docs/gabarit-chapitre.md, §6) déconseille par défaut d'écrire de la Terminale
avant 2027 ; cette fiche est une exception assumée et demandée, le nouveau
programme 2027 étant déjà publié.

BRIÈVETÉ ASSUMÉE : la section du programme est très courte (1 ligne de « Contenus »,
4 « Capacités attendues »). Le gabarit standard (définition / propriétés-théorèmes
/ démonstrations) a été ADAPTÉ à un chapitre d'algorithmique pratique : « notions
clés » au lieu de théorèmes, « méthodes = lire et écrire du code » au lieu de
démonstrations. Pas de section « démonstration » (rien à démontrer ici).

CONTENU COUVERT, mappé aux capacités attendues du programme :
- « Générer une liste (extension / ajouts successifs / compréhension) » -> §2
- « lien avec la notion d'ensemble » -> encadrés §1 et §2
- « Manipuler des éléments et leurs indices (ajouter, supprimer) » -> §4, §5
- « Parcourir une liste » -> §6 (parcours par indices)
- « Itérer sur les éléments » -> §6 (itération directe)
- Lien combinatoire (demande utilisateur, cohérent avec la section « COMBINATOIRE
  ET DÉNOMBREMENT » du même programme) -> §7

POINTS À SOUMETTRE AU RELECTEUR :
- Python est le langage de référence retenu ; à confirmer que le PDF officiel
  n'impose pas une syntaxe/pseudo-code neutre plutôt que Python explicitement.
- Le programme ne mentionne pas nommément `range`, `append`, la compréhension avec
  `if`, les indices négatifs ni `insert`/`del`/`remove` : ce sont des choix de
  mise en œuvre Python usuels au lycée, à valider comme conformes à l'esprit du
  texte (« ajouter, supprimer, etc. »).
- Vérifier que le niveau de détail sur `range` (borne exclue) est jugé pertinent
  et non hors-sujet pour la Terminale.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à un
site. Statut : brouillon, non relu.
```

### logique-ensembles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

CHAPITRE TRANSVERSAL / GABARIT ADAPTÉ : ce chapitre est un chapitre de vocabulaire et de
méthode, sans calcul mécanique propre. Il est volontairement PLUS COURT que la moyenne des
fiches de spécialité (~200 lignes ; ici ~190). Les sections « Démonstrations exigibles » et
« Cas particuliers de calcul » du gabarit standard ont été fondues : les démonstrations
servent ici d'exemples aux types de raisonnement (section 5), et les « pièges » sont portés
par la section 7. Aucun outil.json (rien de déterministe à calculer). À VALIDER par le
relecteur : cet écart au gabarit est-il accepté pour un chapitre transversal ?

SOURCE DU PROGRAMME — PROVENANCE PARTICULIÈRE (mention obligatoire n°1) :
Fichier docs/programme-terminale-specialite-maths-2027.txt, section « VOCABULAIRE
ENSEMBLISTE ET LOGIQUE » (lignes 23 à 35). ⚠️ Ce fichier n'a PAS été obtenu par la chaîne
d'extraction habituelle : son texte a été RECONSTITUÉ VIA WebFetch depuis un miroir
(xm1math.net), le proxy du sandbox bloquant le téléchargement du PDF officiel. AVANT TOUTE
PUBLICATION, ce texte DOIT être confronté au PDF officiel (education.gouv.fr / éduscol).
Voir l'en-tête de provenance du fichier source (lignes 1 à 20).

NIVEAU TERMINALE — HORS PÉRIMÈTRE INITIAL DU PROJET (mention obligatoire n°2) :
Le gabarit (docs/gabarit-chapitre.md, ligne ~197) interdisait d'écrire pour la Terminale
avant 2027, son programme changeant. Ce chapitre est produit à la DEMANDE EXPLICITE de
l'utilisateur, qui veut couvrir TOUT le programme, et repose sur le NOUVEAU programme
applicable à la RENTRÉE 2027, déjà publié. Le relecteur doit confirmer que ce périmètre
Terminale 2027 est désormais bien dans le champ du projet.

CONTENU couvert (recopié du programme) : élément, sous-ensemble, ensemble vide,
appartenance, inclusion et symboles ; proposition mathématique ; connecteurs et
quantificateurs ; négation de propositions simples ; implication, équivalence ; raisonnement
par disjonction de cas, par l'absurde, par contraposée.

RÉCURRENCE : mentionnée volontairement en section 5 comme prérequis du chapitre « Suites »,
mais NON développée ici (traitée à fond dans Suites), conformément à la consigne.

POINTS À TRANCHER PAR LE RELECTEUR :
- Union (∪) et intersection (∩) : NON traitées, car absentes de la rubrique « Contenus » de
  cette section (le programme ne cite que appartenance/inclusion/vide). Elles apparaissent
  plutôt dans « Combinatoire et dénombrement ». Confirmer ce choix de périmètre.
- Notation de l'inclusion : le fichier source ne précise pas si le programme distingue ⊂ et
  ⊆. J'ai retenu ⊂ (inclusion au sens large, usage lycée courant). À vérifier sur le PDF.
- Lois de De Morgan et négation de l'implication : ajoutées comme outils de la négation ;
  vérifier qu'elles sont dans l'esprit du niveau attendu (le programme ne cite explicitement
  que « formuler la négation de propositions simples »).

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### loi-binomiale  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « PROBABILITÉS — SUCCESSION D'ÉPREUVES INDÉPENDANTES, SCHÉMA DE BERNOULLI »
(rubriques Contenus et Capacités attendues).

⚠️ MENTION 1 — PROVENANCE DE LA SOURCE : ce programme n'a PAS été produit par la chaîne
d'extraction habituelle. Son texte a été reconstitué via l'outil WebFetch depuis le miroir
https://www.xm1math.net/reforme/term_gen_spe.pdf (voir en-tête « SOURCE ET PROVENANCE »).
Cette extraction WebFetch doit être CONFRONTÉE au PDF officiel (education.gouv.fr / éduscol)
avant toute publication : reproduction non garantie exhaustive.

⚠️ MENTION 2 — PÉRIMÈTRE TEMPOREL : chapitre de TERMINALE produit sur le programme de la
rentrée 2027, à la demande explicite de l'utilisateur. Le gabarit (§6) demande par défaut
de ne rien écrire pour la Terminale avant 2027 ; le programme 2027 étant publié et la
demande explicite, le chapitre est rédigé en brouillon.

Éléments lisibles dans l'extraction et traités : produit des probabilités d'une issue (§1) ;
succession de 2-3 épreuves quelconques, prob. conditionnelles/totales (§1) ; épreuve et loi
de Bernoulli (§2) ; schéma de Bernoulli (§3) ; loi binomiale B(n,p) via coefficients
binomiaux (§4) ; calcul de P(X=k), P(X⩽k), P(k⩽X⩽k'), intervalle-seuil (§5). E(X)=np et
V(X)=np(1−p) figurent dans la section « SOMMES DE VARIABLES ALÉATOIRES » : cités SANS
démonstration, avec renvoi à ce chapitre (consigne respectée).

À CONFRONTER AU PDF / À SOUMETTRE AU RELECTEUR :
- Notation du coefficient binomial retenue par le BO 2027 : $\binom{n}{k}$ (choisie ici,
  cohérente avec le chapitre Combinatoire) vs $C_n^k$. À harmoniser après relecture.
- Valeurs numériques à revérifier : seuil §5d (B(50 ; 0,1), s = 9), P(X=3)≈0,201.
- Vérifier que « produit cartésien » est bien attendu des élèves au sens du BO.
Rédaction originale à partir du programme, aucun emprunt à un manuel. Statut : brouillon, non relu.
```

### primitives-equations-differentielles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — PRIMITIVES, ÉQUATIONS DIFFÉRENTIELLES » (lignes 240-257),
rubriques « Contenus » et « Capacités attendues ».

⚠️ MENTION 1 — PROVENANCE DE LA SOURCE : ce fichier programme n'est PAS issu de la
chaîne d'extraction habituelle. Son texte a été reconstitué via WebFetch depuis un
miroir (xm1math.net/reforme/term_gen_spe.pdf), le proxy du sandbox bloquant le PDF
officiel. AVANT PUBLICATION, il DOIT être confronté au PDF officiel
(education.gouv.fr / éduscol). La reproduction n'est pas garantie exhaustive.

⚠️ MENTION 2 — CONFORMITÉ AU CALENDRIER : ce chapitre de TERMINALE a été produit
sur le programme de la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE L'UTILISATEUR. Le
gabarit (docs/gabarit-chapitre.md, §6) recommande de « ne rien écrire pour la
Terminale avant 2027 » car le programme change à la rentrée 2027-2028 ; la demande
utilisateur porte précisément sur ce nouveau programme déjà publié. À signaler au
relecteur pour arbitrage éditorial.

Éléments explicitement lisibles dans l'extraction et couverts :
- « Notion de primitive d'une fonction continue sur un intervalle » — §1
- « Deux primitives d'une même fonction continue sur un intervalle diffèrent d'une
  constante » — §2
- « Primitives des fonctions de référence : x^n pour n∈ℤ, 1/√x, exp, sin, cos » — §3
- « Calculer une primitive en utilisant [...] les fonctions de la forme (v'∘u)×u' » — §4
- « Équation différentielle y'=f » — §5.1
- « Équation différentielle y'=ay ; allure des courbes » — §5.2
- « Équation différentielle y'=ay+b (a≠0) : solution particulière constante ;
  toutes les solutions » — §5.3
- « Équation différentielle y'=ay+f : à partir d'une solution particulière,
  déterminer toutes les solutions » — §5.4

POINTS À SOUMETTRE AU RELECTEUR :
- Cas n=-1 (fonction 1/x → ln|x|) : traité comme EXCLU de la formule des puissances
  et RENVOYÉ au chapitre logarithme. Le programme liste « x^n pour n∈ℤ » sans
  exclure explicitement n=-1 ; vérifier l'intention (probable renvoi au ln).
- Formes u'cos u et u'sin u ajoutées au tableau §4 : cohérentes avec « (v'∘u)×u' »
  mais pas nommées explicitement dans la consigne. À valider.
- Intervalles de définition des primitives de x^n pour n≤-2 (intervalle ne contenant
  pas 0) : formulation à vérifier pour le niveau élève.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### produit-scalaire-espace  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt
- Section « ALGÈBRE ET GÉOMÉTRIE — ORTHOGONALITÉ ET DISTANCES DANS L'ESPACE »
  (lignes 83 à 107).
- Section « ALGÈBRE ET GÉOMÉTRIE — REPRÉSENTATIONS PARAMÉTRIQUES ET ÉQUATIONS
  CARTÉSIENNES » (lignes 110 à 129).
- En-tête de provenance du fichier (lignes 1 à 20).

⚠️ MENTION OBLIGATOIRE 1 — PROVENANCE DE LA SOURCE : ce texte de programme n'a PAS
été produit par la chaîne d'extraction habituelle. Le proxy du sandbox bloquant le
téléchargement du PDF, il a été reconstitué via l'outil WebFetch depuis le miroir
xm1math.net (term_gen_spe.pdf), rubrique par rubrique. AVANT TOUTE PUBLICATION, cette
extraction doit être CONFRONTÉE AU PDF OFFICIEL (education.gouv.fr / éduscol) par le
relecteur : la reproduction verbatim n'est pas garantie exhaustive.

⚠️ MENTION OBLIGATOIRE 2 — CALENDRIER : ce chapitre de TERMINALE est produit sur le
programme applicable à la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE L'UTILISATEUR. Le
gabarit (docs/gabarit-chapitre.md, §6) déconseille d'écrire pour la Terminale avant
2027 ; la demande utilisateur lève cette réserve pour ce programme déjà publié. À
confirmer au relecteur que ce contenu est bien destiné à la rentrée 2027.

PÉRIMÈTRE / POINTS À TRANCHER PAR LE RELECTEUR :
- La FORMULE explicite de distance point-plan d = |ax_M+by_M+cz_M+d| / √(a²+b²+c²)
  n'a PAS été donnée comme formule à mémoriser : le programme demande d'utiliser la
  PROJECTION ORTHOGONALE pour la distance (capacité attendue, ligne 100-101). J'ai
  donc traité la distance uniquement par la méthode du projeté. À confirmer : faut-il
  ajouter la formule directe en complément hors-programme ?
- La démonstration « le projeté réalise la distance minimale » (section 7) est donnée
  de façon intuitive (Pythagore) ; le programme ne la liste pas comme démonstration
  exigible. À valider comme complément pédagogique.
- Vocabulaire « orthogonales / perpendiculaires » pour les droites de l'espace :
  distinction insistée car classiquement source d'erreurs ; vérifier qu'elle est
  formulée conformément aux attentes du BO.
- Le « plan médiateur de deux points » (lieu géométrique, ligne 107) n'a pas été
  développé faute de place ; il pourrait faire l'objet d'un exercice. À signaler.
- Prérequis « Vecteurs, droites et plans de l'espace » cité comme chapitre de
  Terminale : ce chapitre n'existe pas encore dans contenu/terminale/maths-specialite/
  au moment de la production. À créer / relier.

LONGUEUR : fiche dense (~environ 370 lignes avec le LaTeX), au-dessus de la cible de
180-280 lignes du gabarit. Choix ASSUMÉ et SIGNALÉ : la consigne annonce « un gros
chapitre, reste dense mais complet ». Le dépassement vient surtout des blocs LaTeX en
display (une formule = plusieurs lignes) et des deux sections de programme réunies. Si
le relecteur préfère respecter la borne, pistes de coupe : fusionner les §11 et §12,
alléger le tableau §13.

Rédaction 100 % originale à partir du seul programme officiel. Aucun emprunt à un
manuel ou à un site de cours.
Statut : brouillon, non relu.
```

### sommes-variables-concentration  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-terminale-specialite-maths-2027.txt, DEUX sections utilisées
verbatim comme périmètre :
- « PROBABILITÉS — SOMMES DE VARIABLES ALÉATOIRES » (lignes 311 à 328)
- « PROBABILITÉS — CONCENTRATION, LOI DES GRANDS NOMBRES » (lignes 330 à 343)
En-tête de provenance du fichier source : lignes 1 à 20.

⚠️ MENTION 1 — PROVENANCE À CONFRONTER AU PDF OFFICIEL : le fichier source n'a PAS été
produit par la chaîne d'extraction habituelle. Son texte a été reconstitué via l'outil
WebFetch depuis le miroir xm1math.net (term_gen_spe.pdf), rubrique par rubrique. Avant
toute publication, ce contenu DOIT être confronté au PDF officiel (education.gouv.fr /
éduscol). La reproduction n'est pas garantie exhaustive (préambules, exemples et notes
non repris).

⚠️ MENTION 2 — CHAPITRE DE TERMINALE / PROGRAMME RENTRÉE 2027 : cette fiche est un
chapitre de Terminale produit sur le programme applicable à la rentrée 2027, à la
demande explicite de l'utilisateur. Le gabarit (docs/gabarit-chapitre.md, point 6)
déconseille par défaut d'écrire pour la Terminale avant 2027 ; programme 2027 déjà
publié et demande explicite, d'où production en brouillon non relu.

Correspondance extraction → fiche : linéarité E (§2) ; indépendance et V(X+Y),
V(aX)=a²V (§3) ; binomiale E=np, V=np(1-p), σ via somme de Bernoulli (§4) ; échantillon
Sₙ et Mₙ (§5) ; Bienaymé-Tchebychev (§6) ; concentration (§7) ; LGN (§8) ; capacité
« taille d'échantillon selon précision et risque » → dimensionnement (§7).

POINTS À SOUMETTRE AU RELECTEUR :
- Prérequis loi binomiale → contenu/terminale/maths-specialite/loi-binomiale/ : chapitre
  absent du dépôt à la production. Créer / vérifier le slug avant publication.
- Vérifier les valeurs numériques des exemples (dont V = 35/12 pour un dé, section 3).
- Confirmer que la variance binomiale par somme de Bernoulli indépendantes est la voie
  attendue (le texte dit « application »). Notation V conservée (comme le programme).

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### suites  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt, section « ANALYSE — SUITES »
(lignes 132 à 148 : rubriques « Contenus » et « Capacités attendues »).
Chapitre couvrant : limite +∞ / −∞ (définition par intervalles [A;+∞[), suites
croissantes non majorées, convergence vers ℓ (définition par intervalle ouvert),
limites et comparaison + théorème des gendarmes, opérations sur les limites (formes
indéterminées), comportement de (qⁿ), théorème de convergence monotone (admis), et
raisonnement par récurrence (capacité attendue « Raisonner par récurrence pour établir
une propriété d'une suite »).

⚠️ MENTION OBLIGATOIRE 1 — PROVENANCE DE LA SOURCE : le fichier programme utilisé n'a
PAS été produit par la chaîne d'extraction habituelle. Son texte a été reconstitué via
WebFetch depuis un MIROIR (xm1math.net), le proxy du sandbox bloquant le PDF officiel
(voir l'en-tête de provenance, lignes 1-20 du fichier source). Cette extraction WebFetch
DOIT être confrontée au PDF officiel (education.gouv.fr / éduscol) avant toute
publication. La reproduction n'est pas garantie exhaustive (préambules, exemples et
notes non repris).

⚠️ MENTION OBLIGATOIRE 2 — PÉRIMÈTRE TERMINALE / RENTRÉE 2027 : ce chapitre de TERMINALE
a été produit sur le programme applicable à la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md, §6) recommandait de « ne rien
écrire pour la Terminale avant 2027 » ; la demande utilisateur lève cette réserve
puisque le nouveau programme 2027 est désormais publié. À signaler au relecteur pour
traçabilité.

À CONFRONTER AU PROGRAMME OFFICIEL PAR UN PROFESSEUR :
- Formulation exacte des définitions par intervalles (« à partir d'un certain rang »),
  qui doit coller au libellé du BO.
- Le tableau détaillé des opérations sur les limites (somme/produit/quotient) n'est pas
  explicité dans l'extraction : j'ai retenu les 4 formes indéterminées et renvoyé à la
  transformation d'écriture, sans reproduire un tableau que le BO ne détaille pas ici.
- Vérifier que la « démonstration » exigible (le cas échéant) figure bien : l'extraction
  ne liste pas de démonstration exigible pour les suites, je n'en ai donc pas isolé une
  au sens du gabarit §Corps-3 ; la récurrence est traitée comme MÉTHODE, conformément à
  la capacité attendue.
- Prérequis cités : chapitre de Première spé « Suites numériques, modèles discrets »
  (contenu/premiere/maths-specialite/suites-numeriques/), notamment suites géométriques
  et approche intuitive de la limite.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### vecteurs-droites-plans-espace  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

⚠️ MENTION OBLIGATOIRE 1 — SOURCE / PROVENANCE : le contenu est rédigé à partir de
docs/programme-terminale-specialite-maths-2027.txt, section « ALGÈBRE ET GÉOMÉTRIE —
MANIPULATION DES VECTEURS, DES DROITES ET DES PLANS DE L'ESPACE » (lignes 60-80 du
fichier source ; rubriques Contenus et Capacités attendues). Ce fichier source est une
EXTRACTION via l'outil WebFetch depuis un MIROIR (xm1math.net), le proxy du sandbox
bloquant le PDF officiel (voir l'en-tête de provenance, lignes 1-20 du fichier source).
Cette extraction WebFetch DOIT être CONFRONTÉE AU PDF OFFICIEL (education.gouv.fr /
éduscol) avant toute publication. La reproduction n'est pas garantie exhaustive
(préambules, exemples et notes de bas de page non repris).

⚠️ MENTION OBLIGATOIRE 2 — PÉRIMÈTRE TERMINALE / RENTRÉE 2027 : ce chapitre de TERMINALE
a été produit sur le programme applicable à la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md, §6) recommandait de « ne rien
écrire pour la Terminale avant 2027 » ; la demande utilisateur lève cette réserve
puisque le nouveau programme 2027 est désormais publié. À signaler au relecteur.

PÉRIMÈTRE VOLONTAIREMENT RESTREINT :
- PAS de produit scalaire, PAS d'orthogonalité, PAS de norme/distance : ils relèvent de
  la section suivante du programme (« ORTHOGONALITÉ ET DISTANCES DANS L'ESPACE »,
  chapitre produit-scalaire-espace).
- PAS de représentation paramétrique de droite ni d'équation cartésienne de plan :
  section « REPRÉSENTATIONS PARAMÉTRIQUES ET ÉQUATIONS CARTÉSIENNES » du programme, hors
  de ce chapitre. La caractérisation vectorielle (AM = t·u ; AM = s·u + t·v) est incluse
  car elle figure explicitement dans les Contenus de CE chapitre ; la forme paramétrée
  coordonnée par coordonnée est délibérément laissée au chapitre suivant.

À CONFRONTER AU PROGRAMME OFFICIEL PAR UN PROFESSEUR :
- Le repère (A; AB, AD, AE) et les coordonnées des 8 sommets du cube sont un support
  pédagogique ajouté : vérifier que l'introduction des COORDONNÉES dans une base
  quelconque (non orthonormée) est bien attendue ici, la base orthonormée n'arrivant
  qu'au chapitre « orthogonalité ». J'ai fait le choix de rester en base quelconque,
  conforme au contenu « Bases et repères de l'espace. Décomposition d'un vecteur sur
  une base ».
- Vocabulaire « droites non coplanaires » : le BO parle de « position relative de deux
  droites » sans forcément nommer ce cas ; le terme est standard mais à valider.
- Aucune démonstration exigible n'est listée dans l'extraction pour cette section : je
  n'ai donc pas isolé de démonstration au sens du gabarit ; les justifications (Chasles)
  sont traitées comme méthodes.

Prérequis mobilisés : vecteurs et colinéarité du plan (Seconde/Première), repérage plan.
Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## terminale / physique-chimie

### acide-base-ph  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait de travail :
docs/programme-terminale-physique-chimie-2019.txt, section « 1.1 Transformations
acide-base et pH » (lignes 21-31). À confronter au PDF officiel education.gouv.fr /
eduscol avant publication (extrait initial obtenu par WebFetch).

Périmètre STRICTEMENT limité à la section 1.1 :
- acide/base de Brönsted, couple, réaction acide-base ;
- couples de l'eau, acide carbonique, acides carboxyliques, amines ; espèce amphotère ;
- pH = -log([H3O+]/c°) et relation inverse [H3O+] = c°·10^(-pH).
Volontairement EXCLUS (relèvent de 1.2, 1.3, 1.5 ou de la partie « équilibre ») :
Ka / pKa, constante d'acidité, force des acides (fort/faible), diagramme de
prédominance, titrages, produit ionique Ke. NE PAS les ajouter ici.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La relation d'autoprotolyse / le produit ionique Ke et la valeur pH=7 à 25 °C : le
  BO 1.1 ne mentionne que pH = -log([H3O+]/c°). J'ai mentionné la neutralité à 25 °C
  ([H3O+]=1e-7) comme repère de lecture d'échelle — à valider comme « admis » et non
  comme exigible dans cette sous-partie.
- Notation de l'acide carbonique : « CO2,H2O » (usage lycée) vs « H2CO3 ». J'ai retenu
  CO2,H2O, conforme à l'usage eduscol. À confirmer.
- Nombre de chiffres significatifs attendu sur le pH (1 décimale) : convention, à valider.
- Schéma de Lewis du carboxyle rendu en LaTeX simplifié (doublet C=O + O-H) ; vérifier
  le rendu KaTeX de la structure empilée, sinon remplacer par un texte descriptif.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### cinetique-chimique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, ENSEIGNEMENT DE SPÉCIALITÉ, terminale
générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019.
Fichier interne : docs/programme-terminale-physique-chimie-2019.txt, section
« 1.4 Cinétique : évolution temporelle d'un système chimique » (lignes 52-61),
thème 1 « Constitution et transformations de la matière ».
Page BO : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction WebFetch depuis le PDF officiel — à CONFRONTER au PDF par un professeur.

Notions couvertes (toutes celles du BO 1.4) :
- transformations lentes/rapides ; facteurs cinétiques température et concentration ;
- catalyse / catalyseur (homogène, hétérogène, enzymatique) ;
- vitesse volumique de disparition d'un réactif et d'apparition d'un produit ;
- temps de demi-réaction ; loi de vitesse d'ordre 1.

Capacités exigibles visées : identifier les facteurs cinétiques (QCM/exos), déterminer une
vitesse volumique et un t1/2 (exos 1,2,3,5), tester une loi d'ordre 1 (exos 4,6).

⚠️ POINTS À CONFRONTER AU RELECTEUR / AU PDF OFFICIEL :
- Le BO 2019 a REMPLACÉ l'ancienne « vitesse de réaction » (avec coefficients
  stœchiométriques et v = (1/V)dξ/dt) par la « vitesse volumique de disparition/apparition ».
  J'ai volontairement écarté la vitesse de réaction avec facteur stœchiométrique : à confirmer
  qu'elle est bien HORS programme 2019.
- La loi d'ordre 1 et sa résolution exponentielle : le programme demande de « tester si une
  concentration suit une loi d'ordre 1 ». La forme [R]=[R]0·e^(-kt) et t1/2=ln2/k sont-elles
  exigibles ou seulement « fournies » ? Vérifier le niveau attendu.
- Vérifier que k (ordre 1) en s⁻¹ est la convention retenue par les sujets de bac.
- Parallèle avec la décroissance radioactive (§1.5) : cohérence à souligner en classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### decrire-mouvement  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, classe
terminale générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-physique-chimie-2019.txt, thème 2 « Mouvement et interactions »,
section « 2.1 Décrire un mouvement », lignes 103-111).
Page BO : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction via WebFetch depuis le PDF officiel, à confronter au PDF avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Notations : le programme utilise-t-il $\vec{u_t}/\vec{u_n}$ ou $\vec{\tau}/\vec{n}$ pour le
  repère de Frenet ? J'ai retenu $\vec{u_t}, \vec{u_n}$ (usage manuel le plus fréquent).
- Le rayon de courbure est ici noté $R$ (rayon du cercle en circulaire) ; vérifier qu'on ne
  demande pas la notion générale de rayon de courbure hors trajectoire circulaire.
- L'estimation numérique de la vitesse par M_{i-1}M_{i+1}/(2τ) relève de la démarche
  expérimentale : confirmer qu'elle est bien attendue à ce niveau (elle l'est en pratique).
- La relation v = 2πR/T (circulaire uniforme) est ajoutée comme lien utile ; vérifier
  qu'elle n'excède pas le périmètre de 2.1 (vitesse angulaire ω non introduite ici,
  volontairement, car non listée dans les capacités exigibles de 2.1).
- g pris à 9,8 m·s⁻² dans les exemples ; harmoniser avec la valeur retenue par le relecteur.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### dipole-rc  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, classe terminale
de la voie générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019.
Fichier : docs/programme-terminale-physique-chimie-2019.txt, section « 4.3 Dynamique d'un
système électrique : le dipôle RC » (lignes 182-190 du .txt extrait).
Provenance : extraction via WebFetch depuis le PDF officiel education.gouv.fr / eduscol
(spe249_annexe_1158929.pdf). À confronter au PDF officiel avant publication.

Notions et contenus couverts (programme) : condensateur q = C·u et capacité C ; circuit RC
série charge et décharge ; temps caractéristique τ = RC ; capteurs capacitifs.
Capacités exigibles couvertes : établir et résoudre l'équation différentielle de u_C ;
étudier la réponse d'un dipôle RC ; déterminer τ = RC.

À CONFRONTER AU PROGRAMME / RELECTEUR :
- L'expression C = ε·S/e du condensateur plan n'est PAS exigible au programme de PC (elle
  relève de la physique post-bac) : je l'ai volontairement écartée, capteurs traités
  qualitativement. À valider.
- La résolution est donnée par la « forme de solution + vérification » (méthode attendue au
  lycée), pas par séparation des variables formelle. Confirmer que c'est la présentation
  souhaitée.
- L'énergie stockée E = ½C u² n'est pas dans cette section du BO 2019 : non incluse. Vérifier
  qu'elle n'est pas attendue ailleurs.
- Convention récepteur retenue partout ; à harmoniser avec la convention du manuel de classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### ecoulement-fluide  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019, thème 2 « Mouvement et interactions »,
section « 2.3 Modéliser l'écoulement d'un fluide »
(docs/programme-terminale-physique-chimie-2019.txt, lignes 124-131).
Notions retenues du texte : « Poussée d'Archimède. Écoulement en régime permanent.
Débit volumique. Relation de Bernoulli. Effet Venturi. »
Capacités : « Utiliser l'expression de la poussée d'Archimède » ; « Exploiter la
conservation du débit volumique » ; « Exploiter la relation de Bernoulli (fournie)
pour un fluide incompressible en régime permanent ».

⚠️ ATTENTION — le gabarit (docs/gabarit-chapitre.md, ligne 264) recommande de NE PAS
produire de contenu Terminale avant 2027 car le programme change à la rentrée 2027-2028.
Ce chapitre a été demandé explicitement sur le programme 2019 encore en vigueur en 2026 ;
à revalider si publication après la réforme.

À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- La relation de Bernoulli est « fournie » : forme retenue ici avec les trois termes
  homogènes à une pression (½ρv² + ρgz + P). Vérifier que c'est bien la forme donnée aux
  élèves (certaines sources la divisent par ρg et l'écrivent en « hauteurs »).
- Le théorème de Torricelli (v = √(2gh)) est donné comme EXEMPLE d'exploitation de Bernoulli,
  pas comme résultat exigible en soi — confirmer qu'il reste dans le champ « exploiter ».
- L'expression vectorielle F_A = -ρV g avec le signe moins : convention de signe à confirmer
  selon l'orientation de g choisie en classe.
- g = 9,81 N·kg⁻¹ utilisé partout ; certains sujets prennent 9,8 ou 10. Sans incidence sur la
  méthode.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### electrolyse  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, spécialité, terminale générale,
BO spécial n°8 du 25 juillet 2019 — section « 1.7 Forcer le sens : électrolyse »
(docs/programme-terminale-physique-chimie-2019.txt, lignes 83-88).
Notions et contenus retenus : « Passage forcé d'un courant pour réaliser une
transformation. Électrolyseur. »
Capacités exigibles couvertes : « Modéliser les transferts d'électrons aux électrodes » ;
« Déterminer les variations de quantité de matière à partir de la durée et de l'intensité
(Q = I·Δt) ». La relation n(e-) = Q/F et la constante de Faraday sont demandées dans la
consigne de production ; à confronter à l'énoncé exact du BO (F parfois seulement « fourni »).

⚠️ À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- La constante de Faraday F = 96500 C/mol est-elle exigible / à connaître, ou fournie ?
  Le programme cite Q = I·Δt explicitement mais pas F ; je l'ai introduite car demandée
  par la consigne. Valeur exacte 96485 C/mol arrondie à 96500.
- L'électrolyse de l'eau et le sulfate de cuivre sont des exemples classiques mais non
  nommés dans le BO ; vérifier qu'ils restent dans le périmètre attendu.
- M(Cu) = 63,5 g/mol utilisé dans l'exemple ; à fournir en énoncé le jour de l'épreuve.
- ⚠️ Le gabarit (docs/gabarit-chapitre.md §6) déconseille de produire de la Terminale
  avant 2027 (programme susceptible de changer). Chapitre produit sur demande explicite ;
  vérifier la validité du programme 2019 à la date de publication.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### equilibre-sens-evolution  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait de travail :
docs/programme-terminale-physique-chimie-2019.txt, section « 1.6 Sens d'évolution
spontanée et équilibre » (lignes 74-81). Page BO : education.gouv.fr/bo/19/Special8/
MENE1921249A.htm ; PDF officiel spe249_annexe_1158929.pdf. À confronter au PDF officiel
avant publication (extrait initial obtenu par WebFetch).

Périmètre STRICTEMENT limité à la section 1.6 :
- état d'équilibre chimique, transformation non totale, équilibre dynamique ;
- quotient de réaction Qr (expression, exclusion solvant/solides, exposants) ;
- constante d'équilibre K(T), Qr,éq = K, dépendance à T seule ;
- critère d'évolution spontanée par comparaison Qr,i / K ;
- taux d'avancement final τ = x_f/x_max et lien total (τ=1) / non total (τ<1).
Volontairement EXCLUS (relèvent de 1.1, 1.3, 1.7 ou du supérieur) : Ka/pKa comme objet
d'étude, diagrammes de prédominance, produit ionique Ke, titrages, électrolyse,
expression de Qr pour les gaz avec pressions partielles, loi de Le Chatelier /
déplacement d'équilibre, relation ΔrG = -RT ln K. La valeur K = 1,8e-5 pour
CH3COOH/CH3COO- est utilisée comme illustration numérique (constante d'acidité), sans
introduire le formalisme Ka.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme parle de « quotient de réaction » : la forme rigoureuse divise chaque
  concentration par c° = 1 mol/L. J'ai gardé cette écriture (comme pour le pH en 1.1) puis
  autorisé l'écriture allégée. À valider comme convention retenue.
- L'exclusion des solides et du solvant de Qr : conforme au programme du supérieur et à
  l'usage lycée ; vérifier que l'exemple AgCl(s) (produit de solubilité implicite) reste
  dans le périmètre attendu en terminale, sinon le remplacer par un exemple tout-aqueux.
- Affirmation « diluer un acide faible augmente τ » : exacte (loi de dilution d'Ostwald),
  mais donnée ici sans démonstration — à présenter comme résultat admis / observé.
- Vérifier la cohérence numérique de l'exemple acide éthanoïque (c=1,0e-2, pH=3,4 →
  τ=4,0 %, K≈1,7e-5 recalculable), arrondi à 2 chiffres significatifs.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### gaz-parfait  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019, thème 3 « L'énergie : conversions et transferts »,
section 3.1 « Modèle du gaz parfait » (docs/programme-terminale-physique-chimie-2019.txt,
lignes 136-143). Extrait à confronter au PDF officiel education.gouv.fr / eduscol avant
publication.

Contenu couvert, conforme aux « Notions et contenus » et « Capacités exigibles » :
- modèle du gaz parfait (§1),
- grandeurs macroscopiques : masse volumique, température thermodynamique, pression (§2),
- interprétation microscopique qualitative (§3, capacité « relier qualitativement »),
- équation d'état PV = nRT et son exploitation (§4, capacité « exploiter PV = nRT »),
- limites du modèle (§6, capacité « identifier quelques limites »).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Valeur de R retenue : 8,314 J·K⁻¹·mol⁻¹ (imposée par l'énoncé de la commande). Le BO ne fixe
  pas la valeur ; vérifier la précision attendue (8,31 vs 8,314).
- La relation P1V1/T1 = P2V2/T2 (§4) n'est pas nommée explicitement dans le programme : elle
  découle de PV=nRT à n constant. Vérifier qu'on peut la mobiliser au bac ou s'en tenir à PV=nRT.
- Loi de Boyle-Mariotte citée comme cas particulier : à confirmer comme attendue.
- Le lien quantitatif température ↔ énergie cinétique moyenne (E_c = (3/2) k_B T) est HORS
  programme de terminale spé (relève du supérieur) : volontairement laissé au niveau qualitatif.
- Volume molaire 22,4 L (CNTP) donné en exemple : vérifier la valeur/conditions attendues (22,4 L
  à 0 °C sous 1,013 bar ; 24,0 L à 20 °C — selon convention du manuel de l'établissement).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### lois-newton-champs  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019 (education.gouv.fr, arrêté MENE1921249A).
Extrait via le fichier docs/programme-terminale-physique-chimie-2019.txt, section
« 2.2 Deuxième loi de Newton et mouvements dans un champ » (lignes 113-122) :
- Notions : deuxième loi de Newton, centre de masse, référentiel galiléen, équilibre ;
  mouvement dans un champ de pesanteur uniforme ; champ électrique d'un condensateur plan
  et mouvement d'une particule chargée ; mouvement des satellites et planètes, orbite,
  lois de Kepler, satellite géostationnaire.
- Capacités exigibles : utiliser la 2e loi pour déduire a (et réciproquement) ; montrer que
  le mouvement dans un champ uniforme est plan, établir/exploiter les équations horaires,
  établir l'équation de la trajectoire ; établir et exploiter la 3e loi de Kepler dans le
  cas du mouvement circulaire.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La démonstration de la 3e loi de Kepler n'est exigible QUE dans le cas circulaire : la
  fiche ne démontre pas le cas elliptique (les 1re et 2e lois sont énoncées, pas démontrées).
  À confirmer conforme.
- Le programme parle de « champ de pesanteur uniforme » : j'ai supposé les frottements
  négligés (chute libre). C'est la convention du programme mais à valider.
- Valeurs numériques utilisées : g = 9,81 m·s⁻², G = 6,67e-11, masse/charge de l'électron,
  altitude géostationnaire ≈ 36 000 km, jour sidéral ≈ 86 164 s. À revérifier au CRC/formulaire
  officiel avant publication.
- Vérifier que la notation « a » pour le demi-grand axe (Kepler) et « a » pour l'accélération
  ne prête pas à confusion pour l'élève : dans la fiche, a = r en circulaire, précisé.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### lunette-photons  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, ENSEIGNEMENT DE SPÉCIALITÉ, classe terminale
générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019.
Fichier extrait : docs/programme-terminale-physique-chimie-2019.txt, thème 4 « Ondes et
signaux », section 4.2 « Lunette astronomique et modèle du photon » (Notions et contenus +
Capacités exigibles). Page BO : education.gouv.fr/bo/19/Special8/MENE1921249A.htm ;
PDF officiel : cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf.
Extraction via WebFetch depuis le PDF officiel — à CONFRONTER au PDF avant publication.

À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Capacité « établir l'expression du grossissement » : la démonstration par les deux angles
  (§3) est le raisonnement attendu ; vérifier que la convention F'1 = F2 et la distance
  O1O2 = f'1 + f'2 sont énoncées comme dans le manuel de référence de l'établissement.
- Le programme demande une interprétation QUALITATIVE de l'effet photoélectrique (§5) et un
  bilan d'énergie Ec = hν − W (§6) : confirmer que la détermination du seuil λ0 = hc/W est
  bien attendue (elle découle directement du bilan) et non hors-programme.
- Absorption/émission (§7) figure aux « Notions et contenus » mais sans capacité chiffrée
  associée dans l'extrait : maintenu en approche qualitative, à valider.
- Valeurs numériques des exemples (W = 2,3 eV proche du sodium) : illustratives, non tirées
  d'un document officiel ; vérifier leur cohérence pédagogique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel. Statut : brouillon, non relu.
```

### methodes-physiques-analyse  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait de travail :
docs/programme-terminale-physique-chimie-2019.txt, section « 1.2 Méthodes physiques
d'analyse » (lignes 33-41). À confronter au PDF officiel education.gouv.fr / eduscol
(MENE1921249A / spe249_annexe_1158929.pdf) avant publication — extrait initial via WebFetch.

Périmètre limité à la section 1.2 telle qu'annoncée :
- absorbance, loi de Beer-Lambert (A = ε·ℓ·c et forme A = k·c), courbe d'étalonnage ;
- conductance, conductivité, loi de Kohlrausch (σ = Σ λi·ci) ;
- spectroscopies IR et UV-visible, groupes caractéristiques, nombre d'onde.
L'équation d'état du gaz parfait (PV = nRT), citée dans la capacité « Exploiter la loi de
Beer-Lambert, la loi de Kohlrausch OU l'équation d'état du gaz parfait », est traitée dans le
thème 3 (3.1) : volontairement NON reprise ici.

⚠️ À CONFRONTER AU PDF / VALIDER PAR UN PROFESSEUR :
- Valeurs numériques des conductivités molaires ioniques λ (Na+, Cl-, K+…) : ordres de grandeur
  usuels lycée (en S·m²·mol⁻¹) ; à revérifier sur la table de données officielle fournie le jour
  de l'épreuve (souvent données en mS·m²·mol⁻¹). Les exercices donnent les λ dans l'énoncé.
- Coefficients ε et k des exemples/exos : valeurs pédagogiques, non tirées d'une espèce précise.
- Constante de cellule k_cell : présentée comme grandeur d'étalonnage (unité m) ; certains
  manuels écrivent G = σ·(S/L). Formulation à valider.
- Table IR (fourchettes de nombres d'onde) : valeurs usuelles ; à aligner sur la table de
  données que l'établissement distribue.
- Position de λmax du diiode/permanganate : ordres de grandeur illustratifs, à confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### phenomenes-ondulatoires  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait local :
docs/programme-terminale-physique-chimie-2019.txt, section « 4.1 Caractériser les phénomènes
ondulatoires » (lignes 160-170). Capacités exigibles retenues :
- Exploiter le niveau d'intensité sonore : L = 10 log(I/I0), I0 = 1,0e-12 W/m².
- Exploiter θ = λ/a (angle de diffraction).
- Établir les conditions d'interférences constructives (δ = kλ) et destructives (δ = (k+½)λ)
  via la différence de marche.
- Établir l'expression du décalage Doppler (observateur fixe, source mobile).

À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- θ = λ/a : le programme donne l'« angle caractéristique ». Je l'ai présenté comme le
  demi-angle d'ouverture de la tache centrale (écart angulaire au premier minimum). Confirmer
  la convention attendue (demi-angle vs angle total) et l'usage de ℓ = 2λD/a, non explicitement
  exigé mais classique.
- Interfrange i = λD/b : hors capacités exigibles strictes (ajout « pour aller plus loin »).
  Vérifier qu'on souhaite le garder, et la notation b pour l'écart entre fentes.
- Effet Doppler : dérivation faite dans le cas « observateur fixe, source mobile », conforme au
  BO. Les expressions f_R = f_E·c/(c∓v) sont établies, pas seulement fournies.
- Vérifier l'intensité de référence I0 = 1,0×10⁻¹² W·m⁻² et les valeurs d'exemples (seuil de
  douleur 120 dB → I = 1 W·m⁻²).

Rédaction originale à partir du programme officiel (public). Aucun emprunt à un manuel.
Statut : brouillon, non relu — étape de relecture par un professeur obligatoire.
```

### premier-principe-thermique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, ENSEIGNEMENT DE SPÉCIALITÉ, terminale
générale — BO spécial n°8 du 25 juillet 2019, arrêté du 19-7-2019.
  Page BO   : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
  PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Section 3.2 « Premier principe et transferts thermiques » (thème 3 « L'énergie :
conversions et transferts »). Extraction via WebFetch depuis le PDF officiel, reprise dans
docs/programme-terminale-physique-chimie-2019.txt (lignes 145-155). À confronter au PDF
officiel avant publication.

⚠️ À CONFRONTER AU PDF / À SOUMETTRE AU RELECTEUR :
- Le programme écrit strictement « ΔU = C·ΔT pour un système incompressible ». La forme
  m·c·ΔT (capacité thermique massique) est-elle explicitement exigible, ou seulement C
  globale ? Je l'ai incluse car omniprésente en calorimétrie — à valider.
- L'expression φ = ΔT/Rth est « fournie » (capacité : exploiter, expression fournie). Bien
  vérifié.
- La loi de Newton du refroidissement : la forme φ = h·S·(T − T_ext) est-elle attendue avec
  le coefficient h et la surface S, ou seulement la proportionnalité φ ∝ (T − T_ext) ? Le BO
  parle de « loi de Newton du refroidissement » sans détailler. J'ai donné la forme complète
  encadrée mais insisté sur la proportionnalité — à trancher par le relecteur.
- Valeur c_eau = 4,18e3 J·kg⁻¹·K⁻¹ (usuelle 4185) : arrondi pédagogique, à confirmer.
- Convention de signe W (reçu > 0) : conforme au programme actuel (thermodynamique « du
  système »). Vérifier qu'aucune convention « travail fourni » n'est attendue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### synthese-organique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019, thème 1 « Constitution et transformations de la matière »,
section 1.8 « Stratégies en synthèse organique ».
Fichier extrait : docs/programme-terminale-physique-chimie-2019.txt, lignes 90-98.
Extrait attendu via eduscol / education.gouv.fr, à CONFRONTER AU PDF OFFICIEL avant publication.

Notions et contenus retenus (verbatim programme) :
- Optimisation de la vitesse de formation et du rendement.
- Modification de groupe caractéristique, modification de chaîne carbonée. Protection/déprotection.
- Réactions de substitution, addition, élimination. Sites donneurs/accepteurs de doublet.
Capacités : identifier les opérations optimisant vitesse et rendement ; élaborer une séquence
réactionnelle et justifier une protection/déprotection ; identifier le type de réaction.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le mécanisme par flèches courbes est-il exigible en tant que TRACÉ à produire, ou seulement
  à interpréter ? J'ai présenté la règle (donneur → accepteur) sans exiger le tracé complet.
- Faut-il détailler les mécanismes SN1/SN2, E1/E2 ? Ils ne figurent PAS explicitement au
  programme 2019 ; je les ai volontairement ÉCARTÉS (hors programme de terminale).
- Les exemples chimiques (oxydation des alcools, estérification, hydratation d'alcène,
  déshydratation, synthèse peptidique) servent d'illustration : vérifier qu'ils correspondent
  bien aux acquis de Première/Terminale attendus des élèves.
- Le rendement η est donné en notation ratio (≤ 1) ET en % : harmoniser avec la convention
  retenue par le reste du corpus terminale.

⚠️ Le gabarit (docs/gabarit-chapitre.md §6) recommandait de ne PAS produire de contenu
terminale avant 2027 (changement de programme rentrée 2027-2028). Chapitre produit sur
demande explicite ; à revalider si le programme évolue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### titrages  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, classe
terminale générale — BO spécial n°8 du 25 juillet 2019 (arrêté du 19-7-2019).
Extrait via WebFetch depuis le PDF officiel education.gouv.fr / eduscol
(spe249_annexe_1158929.pdf), repris dans docs/programme-terminale-physique-chimie-2019.txt,
section « 1.3 Titrages » (lignes 43-50). À CONFRONTER AU PDF OFFICIEL avant publication.

Notions et contenus visés :
- Titre massique et densité d'une solution.
- Titrage avec suivi pH-métrique ; titrage avec suivi conductimétrique. Équivalence.
Capacités exigibles couvertes :
- Établir la composition du système après ajout d'un volume de solution titrante (§3).
- Exploiter un titrage pour déterminer une quantité de matière, une concentration ou une
  masse (§2, §6, exercices).
- Mettre en œuvre le suivi pH-métrique d'un titrage acide-base (§4).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme 2019 n'exige pas explicitement la méthode des tangentes ni la méthode de la
  dérivée : elles sont les pratiques standard de repérage de l'équivalence, à confirmer comme
  attendues à l'examen.
- Le pH à l'équivalence d'un titrage acide faible/base forte (>7) dépasse la stricte lettre
  du programme (les acides faibles sont au 1.1) ; conservé comme mise en garde utile mais à
  valider quant au niveau d'exigence.
- Valeurs des conductivités molaires ioniques (λ en mS·m²·mol⁻¹) : ordres de grandeur usuels
  à 25 °C, à vérifier avec la table fournie aux élèves le jour de l'épreuve.
- « Titre massique » : ici pris au sens masse de soluté par litre de solution (g·L⁻¹). Selon
  les manuels, le terme peut désigner une fraction massique ; distinction explicitée au §6 et
  dans les pièges, à trancher avec le relecteur selon l'usage retenu.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformations-nucleaires  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, terminale
générale, arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-physique-chimie-2019.txt, section « 1.5 Transformation nucléaire »,
lignes 63-72). Page BO : education.gouv.fr/bo/19/Special8/MENE1921249A.htm ;
PDF officiel : cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction via WebFetch depuis le PDF officiel — à confronter au PDF avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme cite « Radioactivité α et β » sans préciser explicitement β⁺ ni γ. J'ai
  distingué β⁻ et β⁺ (usage courant en terminale) et ajouté un paragraphe court sur le γ
  comme désexcitation. Vérifier le niveau d'exigence attendu : le γ et le positron sont-ils
  au programme, ou seulement α et β⁻ ?
- Le programme ne mentionne PAS explicitement la fission/fusion ni l'énergie de liaison
  (E = mc²) dans cette section 1.5 — je ne les ai PAS traitées. À confirmer qu'elles ne
  relèvent pas de ce chapitre.
- L'équation différentielle dN/dt = -λN est présentée en encadré « pour aller plus loin » :
  vérifier si son établissement est exigible ou seulement l'exploitation de N(t)=N0 e^(-λt).
- Constantes numériques des exemples (t1/2 iode 131 = 8,0 j ; U238→Th234 ; Ra226→Rn222 ;
  C14→N14 ; F18→O18) : valeurs standard à revérifier dans une table.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

# troisieme

## troisieme / maths

### calcul-litteral  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : BO du 5 mars 2026, « Programme de mathématiques pour le cycle 4 »
(docs/programme-college-cycle4-maths-2026.txt), thème « Nombres et calculs », niveau
TROISIÈME (section ouverte l. 581), entrée « Calcul littéral et algébrique », l. 624-644.

Couverture ligne à ligne (aucun item de la source laissé de côté).
Automatismes l. 625-632 : 626 équations ax=c/x+b=c/ax+b=c → acquis 4e (§1) · 627
simplifier des expressions littérales → §3 · 628 calculer la valeur d'une expression
algébrique → §3 et §6 (contrôle par substitution) · 629 nature d'une expression, « 3x + 2
est une somme, 5 (x + 4) est un produit » → §2, exemples repris À L'IDENTIQUE · 630
développer/factoriser une expression simple → acquis 5e/4e (§1) · 631 pair/impair → §2 ·
632 opposé, « –(5 – 4x) = –5 + 4x » → §2, encadré avec l'exemple EXACT.
Objectifs l. 634-642 : 634 simplifier produits et rapports à facteurs communs → §3 ·
635 double distributivité, « dont le facteur est apparent » → §4 (le sous-titre reprend
la formule du texte) · 636 inéquation ax ⩾ b, analytiquement et graphiquement → §8 ·
637 équation produit nul → §7 · 638-641 les trois identités remarquables → §5 ·
642 raisonnement par analyse-synthèse → §9.

DEUX QUESTIONS DE PÉRIMÈTRE TRANCHÉES (à confirmer) :
- ÉQUATIONS-PRODUITS : OUI, au programme de 3e — l. 637, explicite. Traité §7.
- INÉQUATIONS : OUI, mais périmètre ÉTROIT. L. 636 dit « du type ax ⩾ b », à résoudre
  « analytiquement ET graphiquement ». Je m'y suis tenu. NON traités : ax + b ⩾ cx + d,
  tableaux de signes, notation par intervalles ([4 ; +∞[) et S = {…}, absents de la
  source. Beaucoup d'enseignants vont plus loin : À ARBITRER.

ÉCART ASSUMÉ AVEC L'ORDRE DU TEXTE — À VALIDER
Ordre littéral : 634 simplifier / 635 double distributivité / 636 inéquation / 637
produit nul / 638-641 identités remarquables / 642 analyse-synthèse. J'ai remonté les
IDENTITÉS REMARQUABLES (§5) AVANT le produit nul (§7) et l'inéquation (§8) : le produit
nul est inutilisable sans savoir factoriser une différence de carrés (4x² – 9 = 0), et
l'ordre littéral imposerait des renvois en avant. Blocs « transformer » (§3-§6) puis
« résoudre » (§7-§9). Retour à l'ordre littéral mécanique si le relecteur le préfère.
Second écart, mineur : le texte écrit les identités dans le SENS DE LA FACTORISATION
(a² + 2ab + b² = (a+b)²) ; je les encadre dans le sens du développement, plus lisible,
en insistant en §5 et §6 sur la double lecture.

CONTINUITÉ AVEC LA 4e — À TRANCHER CONJOINTEMENT
L'auteur de 4e-math-calcul-litteral a délibérément EXCLU la double distributivité et les
identités remarquables de la 4e (l. 575 dit « distributivité SIMPLE » ; l. 635 et
638-641 sont en Troisième). Cette fiche est écrite EN MIROIR : elle les introduit
intégralement ici comme apports centraux de la 3e. Si le relecteur introduisait la double
distributivité en 4e, §4 deviendrait un renvoi — mais les identités remarquables restent
en 3e dans tous les cas, le texte étant explicite.

Autres points pour le relecteur :
- §8 RÉSOLUTION GRAPHIQUE : le texte dit « graphiquement » sans préciser le support.
  J'ai retenu deux droites (y = ax et y = b) + droite graduée. Une lecture sur
  représentation de fonction affine est-elle attendue ? À harmoniser avec la future
  fiche 3e-math-fonctions.
- §9 ANALYSE-SYNTHÈSE : exigé (l. 642), non défini par le texte. Retenu : « conditions
  nécessaires, puis vérification ». Le vocabulaire est-il exigible des élèves en 3e, ou
  la pratique reste-t-elle implicite ? Point le plus incertain de la fiche.
- §3 CONDITIONS D'EXISTENCE : le texte parle de « rapports » sans mentionner les valeurs
  interdites. J'ai écrit les « pour x ≠ … », nécessaires mathématiquement. Exigibles ?
- IDENTITÉ DE SOPHIE GERMAIN (l. 644) : « prolongement possible », hors objectifs
  d'apprentissage. Non traitée ; pourrait faire un encadré culturel.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### fonctions  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
(PDF correspondant : docs/programme-college-cycle4-maths-2026.pdf)
Thème « Proportionnalité, fonctions », entrée « Fonctions », niveau TROISIÈME :
lignes 1058 à 1068 (l. 1058 titre « Fonctions », l. 1059 « Objectifs d'apprentissage »,
l. 1060-1068 les objectifs). Chapeau du thème lu également : lignes 968 à 986.
L'entrée « Proportionnalité » de la 3e (l. 1044-1057) a aussi été lue : elle contient
l. 1057 « Connaitre et utiliser les fonctions linéaires » — objectif partagé avec
l'entrée Fonctions, traité ici du point de vue fonctionnel.

LES OBJECTIFS (l. 1060-1068) ET LEUR SECTION
- l.1060 « Utiliser les différentes représentations d'une fonction. »   -> sections 1 et 3
- l.1061 « Définir et connaitre le vocabulaire : image, antécédents. »   -> section 2
- l.1063 « Définir et utiliser les fonctions linéaires. »                -> section 4
- l.1064 « Résoudre graphiquement des équations et des inéquations linéaires. » -> section 5
- l.1065 « Relier fonctions linéaires et proportionnalité. »             -> section 4
- l.1066 « Définir et utiliser les fonctions affines. »                  -> section 6
- l.1067 « Déterminer graphiquement les coefficients d'une fonction affine. » -> section 6
- l.1068 « Représenter la fonction carré. »                              -> section 7
Ordre du BO respecté. La section 1 (définition « fonction » + notation f(x)) précède le
vocabulaire image/antécédent parce que le gabarit impose d'ouvrir sur une définition et
parce que « image » se définit à partir de f(x). À valider.

CADRE — « SANS ÉTUDE GÉNÉRALE DE LA NOTION DE FONCTION » (chapeau, l. 984)
Le chapeau (l. 980-984) précise : « Des exemples de fonctions sont étudiés en troisième,
sans étude générale de la notion de fonction. » J'ai donc VOLONTAIREMENT EXCLU :
ensemble de définition, variations (croissance/décroissance) comme propriété formalisée,
notation intervalle, tableau de variation, la notion générale d'image/antécédent
au-delà des exemples. La fonction est présentée par ses EXEMPLES (linéaire, affine,
carré), comme le demande le texte.

INTRODUCTION DU VOCABULAIRE FONCTIONNEL COMPLET
Conformément à la consigne et aux notes de production des fiches 5e et 4e :
- « image », « antécédent », « f(x) », « la fonction f », « courbe représentative »
  sont ABSENTS des entrées 5e (l. 1011-1020) et 4e (l. 1036-1042). Ils apparaissent
  pour la première fois en 3e (l. 1061 pour image/antécédent). C'est donc ICI qu'ils
  sont introduits.
- La fiche 4e a introduit la notation P(n) (« P de n ») sur la seule foi du chapeau
  l. 985-986. La section 1 s'appuie dessus explicitement (« c'est l'écriture P(n) de la
  4e ») et la généralise en « la fonction f » et f(x). Si le relecteur a finalement
  RETIRÉ la notation P(n) de la 4e (elle y est signalée comme « point le plus
  discutable »), la phrase de continuité de la section 1 est à réécrire, mais la
  section reste autonome.

POINT DE SOIN — IMAGE / ANTÉCÉDENT (difficulté n°1)
Traité en section 2 (définitions + tableau des deux sens de calcul + asymétrie
unicité) ET en section 3 (sens de lecture graphique : abscisses pour l'image,
ordonnées pour l'antécédent). Deux pièges dédiés (⚠️ fin de section 2 et fin de
section 3) + erreurs 1, 2, 3, 4. L'exemple de la fonction carré (9 a deux antécédents,
-4 n'en a aucun) sert de fil rouge entre les sections 2 et 7.

FONCTIONS LINÉAIRES ET AFFINES — VÉRIFICATION DEMANDÉE
Présentes explicitement : l.1063 « Définir et utiliser les fonctions linéaires »,
l.1066 « Définir et utiliser les fonctions affines ». Vocabulaire du BO employé tel
quel : « fonction linéaire », « fonction affine », « coefficient » (linéaire),
« coefficients » d'une affine (l.1067) — j'ai nommé les deux « coefficient directeur »
et « ordonnée à l'origine », termes usuels non écrits mot à mot dans l'extraction :
À CONFIRMER que ces deux appellations sont attendues en 3e (le BO dit seulement
« les coefficients d'une fonction affine », l. 1067).
Lien proportionnalité : l.1065 « Relier fonctions linéaires et proportionnalité » ->
section 4, relié à la caractérisation graphique de la proportionnalité de la 5e
(droite par l'origine) et au coefficient de proportionnalité.

À CONFRONTER AU PROGRAMME PAR LE RELECTEUR
1. « coefficient directeur » et « ordonnée à l'origine » (section 6) : appellations
   usuelles, non littérales dans l'extraction (l. 1067 dit « les coefficients »).
   Confirmer qu'on les attend dès la 3e ou s'il faut rester à « le coefficient a » et
   « le nombre b ».
2. Section 5 « équations et inéquations LINÉAIRES » (l. 1064) : j'ai illustré avec
   f(x)=2x (équation ax=k et inéquation ax<k). Faut-il aussi traiter le cas affine
   ax+b=k ? Le mot « linéaire » du BO plaide pour ax=k, mais la résolution graphique
   vaut aussi pour une affine. À trancher.
3. Section 7 « Représenter la fonction carré » (l. 1068) : le BO demande de la
   REPRÉSENTER. J'ai donné tableau + description de la parabole (symétrie, positivité).
   Les mots « parabole » et « symétrique » ne sont pas dans l'extraction : vérifier
   qu'ils sont admis en 3e (usuels, mais à confirmer).
4. Thalès : l.1056 « Relier la représentation graphique d'une situation de
   proportionnalité avec le théorème de Thalès » relève de l'entrée Proportionnalité de
   la 3e, pas de Fonctions. NON traité ici volontairement -> renvoyer à
   contenu/troisieme/maths/proportionnalite/. À confirmer qu'il n'y a pas de trou.
5. Prérequis cités : contenu/cinquieme/maths/fonctions/fiche.md (« en fonction de »,
   lecture graphique, caractérisation de la proportionnalité) et
   contenu/quatrieme/maths/fonctions/fiche.md (programme de calcul, variable, notation
   P(n), résolution ax+b=c pour les antécédents). Continuité assumée et signalée dans
   le corps.

Rédaction entièrement originale à partir du seul texte du BO. Aucun emprunt à un manuel
ni à un site de cours. Tous les exemples chiffrés ont été inventés et recalculés à la
main.
Statut : brouillon, non relu.
```

### multiples-diviseurs  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt
Thème « Nombres et calculs », niveau Troisième (l.581-644), entrée « Multiples et
diviseurs » : LIGNES 615 à 623. L'entrée suivante, « Calcul littéral et algébrique »,
commence l.624.

⚠️⚠️ POINT LE PLUS IMPORTANT POUR LE RELECTEUR — L'ENTRÉE NE CONTIENT QUE DES AUTOMATISMES
« Multiples et diviseurs » (3e) n'a **aucune** rubrique « Objectifs d'apprentissage », ni
« Prolongements possibles ». C'est la seule entrée de Nombres et calculs dans ce cas.
Le texte intégral de l'entrée tient en quatre puces (l.617-623) :
  − Factoriser un nombre entier positif : 60 = 2² × 3 × 5.
  − Simplifier une fraction dont le numérateur et le dénominateur sont dans une même table
    de multiplication, par exemple 15/35 et 63/14.
  − Trouver un dénominateur commun à deux fractions pour les additionner, les soustraire
    ou les comparer.
  − Appliquer les critères de divisibilité par 2, 3, 5, 9.
Le statut « automatisme » (défini l.313-314 : « compétences fondamentales devant être
acquises de manière fluide et durable ») change la nature du chapitre : c'est un chapitre
d'ENTRAINEMENT, pas d'introduction de notions nouvelles. La fiche est calibrée là-dessus
(peu de théorie, beaucoup de méthode). À valider.

CORRESPONDANCE SECTION -> LIGNE DU BO
§1 Vocabulaire multiple/diviseur .... titre de l'entrée l.615 + l.392 (5e) ; RAPPEL
§2 Critères de divisibilité ......... l.623 (2, 3, 5, 9)
§3 Factoriser un entier ............. l.617, exemple « 60 = 2² × 3 × 5 » repris tel quel
§4 Simplifier une fraction .......... l.618-621, les deux exemples 15/35 et 63/14 sont
   ceux du BO ; forme irréductible : l.586-587 (entrée « Nombres rationnels », 3e)
§5 Dénominateur commun .............. l.622 (additionner, soustraire, comparer)
§6 Applications ..................... l.342 (« utilisés en lien avec les fractions, mais
   également dans le cadre de résolution de problèmes ») et l.357-359 (« calendrier,
   informatique, engrenages, conjonction de phénomènes périodiques, cycles d'éclosion »)
   — ces deux passages sont au préambule du THÈME, pas dans l'entrée 3e. Signalé.
§7-§9 .............................. pas de source directe : mise en forme pédagogique

⚠️ TROIS ATTENDUS SUPPOSÉS QUI NE SONT PAS DANS LE TEXTE — comptages sur le fichier entier
1. « PGCD » : ZÉRO occurrence dans tout le programme du cycle 4. Idem « PPCM ».
   « Euclide » n'apparait qu'en géométrie (l.718, l.808) ; « division euclidienne »
   seulement en 5e (l.376), et l'ALGORITHME d'Euclide nulle part.
   → La fiche n'enseigne donc PAS le PGCD comme notion, ni l'algorithme d'Euclide.
   Elle expose en revanche la MÉTHODE complète de mise sous forme irréductible par
   décomposition (§4), puisque « Mettre une fraction sous forme irréductible » /
   « Rendre irréductible une fraction » sont bien exigés (l.586-587) et que le chapitre
   3e « Nombres rationnels » renvoie ici. Le sigle PGCD est mentionné dans un encadré de
   §4 explicitement signalé hors programme, parce que les élèves l'entendront en classe.
   ➡️ ARBITRAGE À TRANCHER : faut-il aller jusqu'à enseigner le PGCD comme notion nommée,
   au risque d'ajouter du hors-programme, ou s'en tenir à la méthode ? J'ai choisi la
   méthode. Le chapitre « Nombres rationnels » (3e) doit être relu en cohérence : il ne
   doit pas supposer un PGCD nommé.
2. « nombre premier » : ZÉRO occurrence dans l'entrée 3e. Le terme n'apparait qu'une fois
   dans tout le cycle 4, en 5e et en « Prolongement possible : mise en perspective
   HISTORIQUE ET CULTURELLE » (l.396-397 : infinité des premiers, crible d'Ératosthène).
   Or l'exemple imposé « 60 = 2² × 3 × 5 » EST une décomposition en facteurs premiers :
   le texte demande la chose sans la nommer. J'ai donc introduit le mot (§3), sans lequel
   la méthode ne se formule pas.
   ➡️ À TRANCHER : le vocabulaire « nombre premier » est-il exigible en 3e, ou seulement
   la capacité à factoriser ? Le chapitre 5e « Opérations » range déjà les premiers en
   encadré « hors évaluation » (l.396-397). Si le relecteur veut la même prudence ici,
   il faut retirer l'encadré de §3 et parler de « facteurs qu'on ne peut plus casser ».
3. « le plus petit dénominateur commun » : le BO écrit « trouver UN dénominateur commun »
   (l.622), pas « le plus petit ». La fiche respecte cette formulation (§5 : le produit
   marche toujours, un multiple plus petit est plus confortable) et ne fait pas du PPCM
   un attendu. ⚠️ Mais la question 5 du QCM demande « le plus petit dénominateur commun » :
   à valider ou à reformuler en « le plus commode ».

PÉRIMÈTRE — FRONTIÈRES AVEC LES CHAPITRES VOISINS
- `cinquieme/maths/operations` §4 et §5 : multiples, diviseurs, critères 2/5/10 puis 3/9.
  Cité en prérequis, RAPPELÉ SOUS FORME DE TABLEAU SANS JUSTIFICATION en §2, jamais
  réexpliqué. ⚠️ NOTER L'ÉCART : la liste de 3e est « 2, 3, 5, 9 » (l.623) — le 10, présent
  en 5e (l.375), n'y figure plus. La fiche suit la liste de 3e. Volontaire ou coquille du
  BO ? À signaler.
- `troisieme/maths/nombres-rationnels` (produit en parallèle) : les OPÉRATIONS sur les
  fractions (l.584) et la résolution de problèmes (l.588) lui reviennent. Ici, l'addition
  de §5 ne sert QUE d'illustration du dénominateur commun (l.622). Éviter le doublon à la
  relecture croisée.
- `quatrieme/maths/puissances` : la notation $2^2$ est utilisée sans être introduite.

⚠️ LIEN AVEC LA PENSÉE INFORMATIQUE — NON FAIT, VOLONTAIREMENT
Il avait été envisagé de relier la décomposition en facteurs premiers au chapitre
« pensée informatique » (boucle, test de divisibilité). Vérification faite, l'entrée
« Multiples et diviseurs » de 3e ne mentionne NI algorithme NI programme. Le mot
« algorithme » apparait en 5e (l.394, « mobiliser un algorithme dans le cadre du calcul
numérique ») et à propos des racines carrées (l.614, prolongement culturel), jamais ici.
La section « Pensée informatique » de 3e (l.1098-1106) demande boucle conditionnelle,
conditions composées et structuration de programmes, sans aucun exemple arithmétique.
Seul indice indirect : « à l'informatique » dans la liste interdisciplinaire l.358, qui
relève du préambule du thème. J'ai donc renoncé au lien plutôt que de l'inventer.
➡️ Si le relecteur juge le rapprochement pédagogiquement utile, il devra être signalé
comme enrichissement, pas comme attendu.

AUTRES POINTS À TRANCHER
4. Longueur : l'entrée fait quatre lignes de BO. La fiche est volontairement resserrée
   (pas de crible d'Ératosthène, pas de dénombrement des diviseurs, pas de critère par 4,
   6, 11 ou 25 — tous absents du texte). Dire si c'est trop court ou juste.
5. L'unicité de la décomposition en facteurs premiers est UTILISÉE (§3, « carte
   d'identité ») mais jamais énoncée comme théorème, et encore moins démontrée : rien
   dans le texte ne l'exige. À confirmer.
6. §6 (engrenages, clignotants) s'appuie sur l.357-359, qui sont au préambule du thème et
   concernent l'ensemble « Nombres et calculs ». Le rattachement aux multiples communs est
   une interprétation de ma part — plausible (calendrier, engrenages et phénomènes
   périodiques sont des contextes de multiples communs), mais à valider.
7. La fiche emploie « facteur » et « produit » au sens fixé en 5e (l.389). Cohérent.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
```

### nombres-rationnels  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Nombres et calculs »,
section « Troisième » (ligne 581), entrée « Nombres rationnels » — lignes 582 à 590.
Contenu intégral de l'entrée dans l'extraction :
  583  Automatismes
  584  − Additionner, soustraire, multiplier et diviser des fractions.
  585  Objectifs d'apprentissage
  586  Mettre une fraction sous forme irréductible.
  587  Rendre irréductible une fraction.
  588  Résoudre des problèmes faisant appel à des fractions.
  589  Prolongements possibles : mises en perspective historiques et culturelles
  590  − Notation des ensembles des entiers naturels, des entiers relatifs, des décimaux,
       des rationnels.

CORRESPONDANCE OBJECTIF → SECTION
« Mettre une fraction sous forme irréductible » / « Rendre irréductible une fraction »
→ §2 (définition, unicité) et §3 (les trois méthodes) · « Résoudre des problèmes faisant
appel à des fractions » → §5 · Automatisme des quatre opérations → §4, en RAPPEL
condensé · Prolongement « notation des ensembles » → §6.

Vocabulaire de §1 (quotient / fraction / nombre rationnel) : repris du chapeau du thème
« Nombres et calculs », lignes 330-336, en particulier ligne 335 — « un nombre rationnel
est un nombre égal au quotient de deux entiers, SANS RÉFÉRENCE À UNE ÉCRITURE
PARTICULIÈRE ». C'est ce qui justifie tout le chapitre : la forme irréductible est
l'écriture canonique d'un nombre qui en a une infinité.

ARTICULATION AVEC LES NIVEAUX PRÉCÉDENTS — volontairement NON redéveloppé ici
- 5e (contenu/cinquieme/maths/fractions/fiche.md) : numérateur/dénominateur, fractions
  égales, comparaison, addition/soustraction, fraction d'un nombre, pourcentages.
- 4e (contenu/quatrieme/maths/nombres-rationnels/fiche.md) : définition du rationnel
  comme quotient de deux entiers relatifs, règle des signes, opposé, inverse, produit,
  division, priorités opératoires, choix de l'opération dans un problème.
Les deux sont cités en prérequis. Apport propre de la 3e : l'IRRÉDUCTIBILITÉ (définition,
unicité, méthodes, contrôle d'arrêt), la réduction systématique de tout résultat, et le
prolongement sur les ensembles de nombres.

FRONTIÈRE AVEC « MULTIPLES ET DIVISEURS » (3e, lignes 615-623), produit en parallèle :
je traite le nombre rationnel (écriture, irréductibilité, opérations, problèmes) et je
RENVOIE à cet autre chapitre pour la mécanique du plus grand diviseur commun et des
nombres premiers (§3, méthode 3). À harmoniser entre les deux fiches à la relecture.

⚠️ POINTS À TRANCHER PAR LE RELECTEUR

1. LE MOT « PGCD » N'EXISTE NULLE PART DANS LE TEXTE OFFICIEL EXTRAIT. Recherche faite
   sur tout le fichier : ni « PGCD », ni « plus grand diviseur commun », ni « premiers
   entre eux ». La note de l'auteur de la 4e (« forme irréductible ET PGCD relèvent de
   la 3e ») n'est donc vérifiée qu'à MOITIÉ : la forme irréductible est bien un objectif
   de 3e (lignes 586-587), le PGCD n'est PAS attesté dans l'extraction. J'ai en
   conséquence écrit « plus grand diviseur commun » en toutes lettres, une seule fois,
   comme raccourci de calcul et non comme notion à savoir, avec renvoi au chapitre
   « Multiples et diviseurs ». Le sigle PGCD n'apparaît que dans ce renvoi. À CONFRONTER
   AU PDF : si le PDF le mentionne (probablement dans les objectifs manquants ci-dessous),
   il faudra décider lequel des deux chapitres porte la définition.

2. LE BLOC « MULTIPLES ET DIVISEURS » DE 3e EST TRONQUÉ DANS L'EXTRACTION. Lignes 615-623 :
   il ne comporte QUE des « Automatismes », sans « Objectifs d'apprentissage » ni
   « Prolongements », alors que tous les autres blocs du programme en ont. Une perte à
   l'extraction est très probable (les lignes 618-621 montrent des fractions cassées sur
   plusieurs lignes, signe d'un problème de mise en page). C'est là que se trouvent
   vraisemblablement PGCD et nombres premiers. À VÉRIFIER SUR LE PDF avant de figer la
   frontière entre les deux chapitres.

3. DOUBLON APPARENT LIGNES 586-587. « Mettre une fraction sous forme irréductible » et
   « Rendre irréductible une fraction » disent la même chose et se suivent sous le même
   intertitre. Hypothèse : dans le PDF, l'une des deux appartient à la colonne
   « Automatismes » et l'autre aux « Objectifs d'apprentissage ». Sans importance pour le
   contenu produit, mais à noter pour l'extraction.

4. NOTATIONS D'ENSEMBLES (§6). Le programme dit « Notation des ensembles des entiers
   naturels, des entiers relatifs, des décimaux, des rationnels » — mais en
   PROLONGEMENT POSSIBLE, rubrique « mises en perspective historiques et culturelles »,
   donc NON EXIGIBLE. C'est bien la 3e, comme le supposait l'auteur de la 4e : ce point-là
   est confirmé. J'ai marqué la section « Culture mathématique — prolongement possible ».
   Deux réserves : (a) les symboles eux-mêmes ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{D}$,
   $\mathbb{Q}$) ne sont pas écrits dans l'extraction, seul le mot « notation » l'est ;
   (b) $\mathbb{D}$ pour les décimaux est une notation d'usage scolaire français, moins
   universelle que les trois autres. Garder, ou s'en tenir à N, Z, Q ?

5. LA CHAÎNE D'INCLUSIONS et le symbole $\subset$ ne figurent pas dans le programme :
   je les ai ajoutés parce qu'ils sont ce qui donne du sens à la liste des quatre
   notations. Le QCM ne teste ce point qu'en langage naturel (question 10), pas le
   symbole. Acceptable ?

6. COMPARAISON DE FRACTIONS (§4, fin). N'est PAS dans le bloc « Nombres rationnels » de
   3e. Elle figure ligne 622 comme automatisme du bloc « Multiples et diviseurs » de 3e
   (« Trouver un dénominateur commun à deux fractions pour les additionner, les soustraire
   ou les comparer »). Traitée ici en rappel court parce qu'elle est indissociable de
   l'addition. Doublon possible avec l'autre chapitre — à arbitrer.

7. PHRASE SUR LES ÉCRITURES DÉCIMALES FINIES (§6) : « seuls les dénominateurs fabriqués
   avec des 2 et des 5 » — mathématiquement exact pour une fraction irréductible, mais
   hors programme explicite. Une phrase, sans démonstration. Garder ou couper ?

8. CRITÈRES DE DIVISIBILITÉ (§3, méthode 1) : mobilisés comme outils. Ils sont listés
   ligne 623 en automatisme de 3e et lignes 375/393 en 5e. Cités en prérequis 5e.

Rédaction originale à partir du seul programme officiel du BO, qui est public. Aucun
emprunt à un manuel ni à un site de cours. Statut : brouillon, non relu.
```

### pensee-informatique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « La pensée informatique » — chapeau
l. 1071-1075, section « Troisième » l. 1098-1106 (seule source des contenus), cadrage l. 302-321.
Chapitres de 5e et de 4e lus intégralement, notes de production comprises : conventions de
pseudo-code, vocabulaire et découpage repris à l'identique, prérequis cités en en-tête et au § 1,
contenus de 5e et de 4e NON répétés (aucune redéfinition d'instruction, séquence, entrée/sortie,
expression informatique, condition simple, `si … alors … sinon`, `répéter n fois`, affectation).

Couverture des 5 objectifs : « approfondir la notion de variables » (l. 1102) → § 2.1 (variables
simultanées, échange avec temporaire, compteur vs accumulateur) · « conditions composées »
(l. 1103) → § 2.2 et méthode 2 · « boucle conditionnelle » (l. 1104) → § 2.3 et 2.4, méthodes 1
et 2, traitée comme l'apport central du niveau conformément à la vérification faite en 4e ·
« structurer des programmes » (l. 1105) → § 2.5 · « écrire un programme … pour réaliser un
objectif » (l. 1106) → méthode 3. Chapeau l. 1099-1100 : « approfondis » → aucune notion nouvelle
hors ces cinq ; « autonomie d'écriture » → § 2.5 et méthode 3.

⚠️ CONVENTION `tant que … faire` / `fin tant que` : prolongement direct de `répéter … / fin
répéter` (5e) et `si … alors … sinon / fin si` (4e). Le programme ne prescrit aucune syntaxe et ne
nomme aucun logiciel (« programmation impérative par blocs », l. 1072 ; « Scratch » : 0 occurrence
en cycle 4). L'auteur de la 4e demandait que le choix de `mettre … dans …` (plutôt que « x prend la
valeur v ») soit RÉPERCUTÉ EN 3e : c'est fait à l'identique, y compris `demander … et le mettre
dans …`, `afficher`, l'indentation de 4 espaces et les six comparateurs dont `≤`, `≥`, `≠`. Ces
trois conventions forment un ensemble : à trancher en une fois pour le parcours 5e-4e-3e.

⚠️ L'objectif l. 1106 est écrit « Écrire un programme DONNÉ pour réaliser un objectif » (même
formulation qu'en 4e, l. 1096, où elle est déjà signalée) : « donné » contredit « écrire ». Lu ici,
comme en 4e, comme « écrire un programme pour réaliser un objectif » (méthode 3), en cohérence avec
« autonomie d'écriture de programme ». À CONFRONTER AU PDF : même anomalie aux deux niveaux.

⚠️ PÉRIMÈTRE, à trancher par le relecteur. (1) « Structurer des programmes » (l. 1105) n'est pas
explicité par le texte. Lecture retenue : découpage préparation / traitement / conclusion,
imbrication d'un `si` dans une boucle, nommage des variables (§ 2.5). Lecture NON retenue faute
d'appui : les sous-programmes (« définir un bloc » réutilisable), autre interprétation naturelle que
proposent certains langages par blocs — s'ils sont attendus, il manque une sous-section. (2) La
TERMINAISON (§ 2.4) n'est pas nommée par le programme : elle est déduite de « utiliser une boucle
conditionnelle », dont c'est la difficulté propre. Traitée à fond (deux causes : condition jamais
modifiée, valeur d'arrêt enjambée) à la demande de la commande de production ; à valider comme
attendu de 3e et non comme un ajout. (3) La négation d'une condition composée (De Morgan) n'est PAS
abordée — jugée hors périmètre du cycle 4, frontière à confirmer. (4) § 2.2 : le caractère INCLUSIF
du `ou` est affirmé alors qu'aucun langage n'est prescrit ; même réserve qu'en 4e sur `≤`, `≥`,
`≠`, absents de beaucoup de langages par blocs. (5) Méthode 1 : la division par soustractions
successives fait le lien avec la division euclidienne (quotient et reste) — cohérence à vérifier
avec la progression « nombres et calculs » de 3e ; ce vocabulaire est employé sans être redéfini.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
```

### probabilites  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « Organisation et gestion
de données et probabilités », section TROISIÈME, sous-section « Probabilités »,
LIGNES 960-967 (dans la plage 947-967 indiquée, dont 948-958 = Statistiques, hors sujet
ici). Chapeau du thème lu : LIGNES 861-885.
Créé le 2026-08-12 ; premier chapitre de 3e du dépôt (contenu/troisieme/ n'existait pas).

Le texte de 3e tient en QUATRE lignes d'objectifs. Couverture intégrale :
- « Connaitre et savoir appliquer la relation P(A ∪ B) + P(A ∩ B) = P(A) + P(B) » →
  § 1 (énoncé + justification), § 2 (les deux sens de calcul), § 3 (cas particuliers).
- « Simuler des expériences aléatoires indépendantes » → § 4.
- « Observer la stabilisation des fréquences lorsqu'on augmente le nombre de
  répétitions, faire le lien entre fréquence et probabilité selon le nombre de
  répétitions » → § 5.
- Prolongement « Problème de l'erreur de D'Alembert » → § 6 (c'est un PROLONGEMENT
  POSSIBLE, donc facultatif : à supprimer sans dommage si le relecteur le juge hors
  périmètre. Il a été gardé parce qu'il réutilise à la fois la relation, l'énumération
  des couples de 4e et la simulation).

=== LES DEUX POINTS LAISSÉS EN SUSPENS PAR LA FICHE DE 4e — VÉRIFIÉS ET TRANCHÉS ===

1) FORMULE DE LA RÉUNION : la 4e avait raison POUR LA 4e, et la 3e la RENVERSE. La
   section de 3e donne explicitement la relation (ligne 962), et c'est son PREMIER
   objectif d'apprentissage. C'est donc le cœur de cette fiche.
   ⚠️ FORME DE L'ÉCRITURE : le BO écrit la version ADDITIVE
   P(A ∪ B) + P(A ∩ B) = P(A) + P(B), pas la version soustractive
   P(A ∪ B) = P(A) + P(B) − P(A ∩ B). La fiche encadre la forme du BO et présente la
   seconde comme la même relation réécrite pour calculer. À VALIDER : si le relecteur
   préfère que seule la forme du BO soit mémorisée, il faut alléger le § 1.
   CONSÉQUENCE POUR LA 4e : la note de la fiche de 4e (« point de périmètre le plus
   sensible ») peut être close — la formule n'est pas au programme de 4e, elle arrive
   en 3e. Aucune modification de la fiche de 4e n'est nécessaire.

2) ARBRE ET TABLEAU À DOUBLE ENTRÉE : le constat de la 4e est CONFIRMÉ pour la 3e et
   pour tout le cycle 4. Recherche relancée sur l'intégralité du fichier de programme :
   « arbre » → 0 occurrence ; « double entrée » → 0 occurrence. Rien n'est donc ajouté
   ici : les expériences à deux épreuves restent traitées par ÉNUMÉRATION DES ISSUES
   (§ 6). Aucun arbre pondéré, aucune multiplication le long des branches.

=== PÉRIMÈTRE — CE QUE J'AI VOLONTAIREMENT ÉCARTÉ ===

- INDÉPENDANCE ET FORMULE P(A ∩ B) = P(A) × P(B) : le mot « indépendantes » figure
  UNE SEULE FOIS dans tout le cycle 4 (ligne 963), et il qualifie les EXPÉRIENCES QU'ON
  SIMULE, pas des évènements. Le programme ne définit pas l'indépendance et ne donne
  AUCUNE règle de multiplication. Non traitée, donc : au § 6, P(A ∩ B) = 1/4 est
  obtenue EN COMPTANT les issues, jamais par 1/2 × 1/2. POINT LE PLUS SENSIBLE DE LA
  FICHE — c'est la tentation naturelle du rédacteur comme du professeur.
- « ÉVÈNEMENTS INCOMPATIBLES » : le mot n'est nulle part dans le cycle 4 (« incompatible »
  et « disjoint » → 0 occurrence). Le cas est traité, puisqu'il découle de la relation,
  mais SANS LE NOMMER : la fiche dit « si A ∩ B = ∅ ». À valider — le vocabulaire est si
  répandu que son absence peut surprendre.
- PROBABILITÉS CONDITIONNELLES, arbres pondérés, dénombrement : hors cycle 4.

=== À CONFRONTER AU PDF PAR UN PROFESSEUR ===

- LA DATE DU BO : même réserve que pour la 5e et la 4e. L'en-tête dit « BO du 5 mars
  2026 » (chaîne imposée par la consigne), ETAT.md dit « BO du 2 avril 2026 », aucune
  des deux ne figure dans le texte extrait. À TRANCHER GLOBALEMENT sur tout le dépôt.
- ORTHOGRAPHE « ÉVÈNEMENT » : le BO 2026 écrit « évènement » (accent grave). Les fiches
  de 5e et de 4e écrivent « événement ». Cette fiche suit le BO, conformément à la
  consigne de vocabulaire — d'où une INCOHÉRENCE avec les deux fiches amont. Harmoniser
  dans un sens ou dans l'autre avant publication. Même remarque, plus mineure, sur le
  symbole de l'ensemble vide : la fiche de 4e utilise `\emptyset` (∅), celle-ci
  `\varnothing` (⌀). Les deux sont rendus par KaTeX, mais il faut choisir.
- LES DONNÉES CHIFFRÉES sont INVENTÉES à titre d'illustration plausible : la classe de
  30 élèves (§ 2), le tableau de stabilisation du § 5 (effectifs cohérents avec les
  fréquences affichées, arrondies au millième), les 5 000 lignes du § 6.
- LA FRÉQUENCE DES NAISSANCES (§ 5) : le programme cite l'exemple « sexe d'un enfant à
  la naissance » (ligne 883) mais NE DONNE AUCUNE VALEUR. La fiche n'en avance donc
  aucune non plus et reste qualitative. Si le relecteur veut un chiffre, il faudra une
  source démographique citée.
- LES NOMS DE FONCTIONS TABLEUR (§ 4) : `ALEA.ENTRE.BORNES` n'est pas dans le programme,
  qui dit seulement que le thème « est propice à l'utilisation du tableur » (ligne 871).
  Vérifier que la syntaxe correspond au tableur utilisé en classe, ou la remplacer par
  une formulation neutre (« la fonction de nombre aléatoire du tableur »).
- « LOI DES GRANDS NOMBRES » (§ 5) : l'expression vient du CHAPEAU du thème (ligne 884),
  pas de la section de 3e. Nommée une fois, sans énoncé formel. À valider.
- LE PROBLÈME DE D'ALEMBERT : la formulation historique retenue (la partie s'arrête dès
  qu'un pile sort, d'où trois cas) est celle qui rend l'erreur intelligible. Le
  programme cite le problème sans le décrire (ligne 967) : vérifier que cette version
  est bien celle attendue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### proportionnalite  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
Thème « Proportionnalité, fonctions ».
- Entrée « Troisième > Proportionnalité » : lignes 1043 à 1057
  (l. 1043 « Troisième », l. 1044 « Proportionnalité », l. 1045 « Automatismes »,
   l. 1046-1053 les six automatismes, l. 1054 « Objectifs d'apprentissage »,
   l. 1055-1057 les trois objectifs).
- Les lignes 1058 à 1068 relèvent de l'entrée « Fonctions » de la Troisième :
  HORS de cette fiche (voir « FRONTIÈRE » plus bas).
- Chapeau du thème lu : lignes 968 à 986.

COUVERTURE — chaque item du BO a sa section
- l. 1046 « Partager une somme en deux parts selon un certain ratio. »        -> § 1
- l. 1047 « Partager une masse en trois parts selon un certain ratio. »       -> § 1
- l. 1048 « Partager une somme entre deux personnes âgées de 20 et 30 ans
  proportionnellement à leur âge. » (exemple repris tel quel du BO)           -> § 1
- l. 1049 « Calculer le pourcentage d'une quantité. »                          -> § 2
- l. 1050-1051 « Calculer la distance réelle entre deux villes, connaissant la
  distance entre ces villes sur une carte routière dont l'échelle est connue. » -> § 3
- l. 1052-1053 « Appliquer, dans des cas simples, une augmentation ou une
  diminution exprimée en pourcentages, en utilisant ou non le coefficient
  multiplicateur. » -> § 4 (les DEUX chemins sont donnés, comme le demande le texte)
- l. 1055 « Traduire une augmentation ou une diminution en pourcentages. »     -> § 5
- l. 1056 « Relier la représentation graphique d'une situation de
  proportionnalité avec le théorème de Thalès. »                              -> § 7
- l. 1057 « Connaitre et utiliser les fonctions linéaires. »                   -> § 8
L'ordre des sections 1 à 8 est celui du BO : automatismes d'abord, objectifs ensuite.

APPORT DE CETTE FICHE PAR RAPPORT À LA 4e
Le § 5 est le cœur : retrouver le TAUX à partir de deux valeurs. La fiche 4e s'était
explicitement interdit cette méthode (voir son bloc de notes, point « TRADUIRE ») en
la renvoyant à la 3e sur la foi de la l. 1055. Ce choix est confirmé : la 4e ne
demande que le sens taux -> coefficient (l. 1033-1034), la 3e demande l'inverse
(l. 1055). Rien de la 4e n'est réexpliqué : le § 0 renvoie aux deux fiches amont.
ÉCHELLES : mentionnées en 3e par l'automatisme l. 1050-1051, comme la fiche 4e
l'avait noté. La définition est en 5e (§ 6 de sa fiche) ; le § 3 ici n'y revient pas,
il traite le cas d'usage « carte routière » et la conversion cm/km, qui est le vrai
obstacle.

⚠️ LES DEUX POINTS LAISSÉS EN SUSPENS PAR LA FICHE 4e — RÉPONSE
La fiche 4e demandait si les ÉVOLUTIONS SUCCESSIVES et le RETOUR À LA VALEUR INITIALE
sont explicites en 3e, afin de pouvoir l'alléger.
RÉPONSE : NON. Ni l'un ni l'autre n'est écrit dans l'entrée « Troisième >
Proportionnalité » (l. 1043-1057). Recherche faite sur TOUT le fichier du programme :
les mots « augmentation » et « diminution » n'apparaissent qu'aux l. 1033, 1052 et
1055 ; « successives », « évolutions successives » et « valeur initiale »
n'apparaissent NULLE PART. Le seul « évolution » du fichier est l. 930 et concerne la
médiane et la moyenne en statistiques.
➡️ Conséquence : la 4e NE PEUT PAS être allégée en invoquant une reprise en 3e. Ces
deux points ne sont explicites à AUCUN des deux niveaux.
➡️ CE QUE J'AI FAIT MALGRÉ TOUT, et pourquoi c'est un partage défendable :
  - la 4e traite le point QUALITATIF (« on n'additionne pas deux pourcentages »),
    conséquence directe de la définition du coefficient multiplicateur (l. 1034) ;
  - le § 6 ici traite le point QUANTITATIF : calculer le TAUX GLOBAL de deux
    évolutions (1,20 x 0,90 = 1,08 -> +8 %) et le TAUX DE RETOUR (1/0,80 = 1,25 ->
    +25 %). Ces deux calculs ne sont possibles qu'avec l. 1055 : ils consistent
    précisément à « traduire en pourcentages » un coefficient obtenu par calcul.
    Le § 6 ne redit donc pas la 4e, il la prolonge.
  - la 4e « Revenir en arrière » cherche la VALEUR de départ (division par le
    coefficient) ; le § 6 ici cherche le TAUX qui ramène au départ. Ce sont deux
    questions différentes, aucune n'est en doublon.
➡️ À TRANCHER PAR LE RELECTEUR, GLOBALEMENT sur les deux fiches, pas fiche par fiche :
  (a) valider ce partage 4e qualitatif / 3e quantitatif ; ou
  (b) tout remonter en 3e, et supprimer alors la 2e puce du § 9 et la question 2 du
      QCM de 4e ; ou
  (c) juger l'ensemble hors programme au collège, et supprimer le § 6 ici, la
      question 8 du présent QCM, et l'avant-dernier paragraphe du § 5.
  Mon avis : (a). Une remise « -20 % puis -10 % » est trop courante pour être
  passée sous silence, et le § 6 est le seul endroit du cycle où l'élève apprend à
  CHIFFRER l'effet cumulé.

FRONTIÈRE AVEC LE CHAPITRE « Fonctions » DE 3e (produit en parallèle)
Les fonctions linéaires apparaissent DES DEUX CÔTÉS du programme : l. 1057 dans
l'entrée « Proportionnalité », l. 1063 et l. 1065 dans l'entrée « Fonctions ». Il ne
faut donc ni les omettre ici, ni les traiter deux fois.
RÉPARTITION RETENUE, à confirmer avec l'auteur de la fiche « Fonctions » :
  - ICI (l. 1057, point de vue GRANDEURS) : la fonction linéaire comme autre nom du
    coefficient de proportionnalité ; le tableau des deux points de vue (§ 8) ; le
    fait qu'une évolution en pourcentages EST une situation de proportionnalité.
    AUCUNE notation f(x) n'est employée dans cette fiche.
  - LÀ-BAS (l. 1060-1065) : la définition formelle f(x) = ax, le vocabulaire image /
    antécédent (l. 1061), les différentes représentations (l. 1060), la résolution
    graphique d'équations et d'inéquations linéaires (l. 1064), « Relier fonctions
    linéaires et proportionnalité » (l. 1065) — le renvoi symétrique du § 8.
  ⚠️ Le § 8 contient un renvoi explicite à la fiche `3e — Fonctions`. Si cette fiche
  change de titre ou de découpage, le renvoi est à corriger.
  ⚠️ NOTATIONS FONCTIONNELLES (l. 985-986) : la chaîne 5e -> 4e a tranché que la
  notation entre en 4e PAR LE CHAPITRE « Fonctions » (voir les notes de la fiche 4e
  Proportionnalité, point 1). Je reste cohérent : aucune notation p(t) ni f(x) ici.

AUTRES POINTS À TRANCHER PAR LE RELECTEUR
1. § 7 (Thalès) — la l. 1056 demande de « relier », sans préciser le sens. J'ai
   écrit la justification DIRECTE (triangles emboités OHM et OH'M', (HM) // (H'M'),
   donc x/x' = y/y') puis évoqué la RÉCIPROQUE (quotients égaux -> points alignés
   avec O). La configuration « triangles emboités » est bien celle citée l. 843 pour
   Thalès. À valider : le niveau d'exigence attendu est-il cette justification, ou
   une simple lecture graphique ? Je n'ai pas rédigé cela comme une démonstration
   exigible.
2. § 9, puce « points de pourcentage ». Non écrite dans le BO. Je l'ai gardée parce
   qu'elle relève directement de « traduire une évolution en pourcentages » (l. 1055)
   et qu'elle est la source d'erreur n°1 sur les taux dans les médias. À arbitrer.
3. § 1 — le partage proportionnel est un objectif de QUATRIÈME (l. 1035) ; en 3e il
   revient comme AUTOMATISME et sous forme de RATIO (l. 1046-1048). La fiche 4e avait
   volontairement évité l'écriture ratio dans ses consignes de partage pour ne pas
   empiéter ici. Le partage est donc bien à deux endroits, mais avec deux statuts
   différents (objectif en 4e, automatisme en 3e). Confirmer que ce n'est pas un
   doublon gênant.
4. Le § 2 est court à dessein : « calculer le pourcentage d'une quantité » (l. 1049)
   est un automatisme, déjà construit en 4e (l. 1032) et en 5e. Vérifier que cette
   brièveté convient.
5. PRÉREQUIS « Théorème de Thalès dans les triangles emboités (4e) » : le BO cite
   Thalès et ses configurations l. 843. Vérifier à quel niveau exact cette ligne
   appartient avant publication — je ne l'ai pas confirmé sur le découpage par
   niveau du domaine géométrie.

Rédaction entièrement originale à partir du seul texte du BO. Aucun emprunt à un
manuel ni à un site de cours. Tous les exemples chiffrés ont été inventés et
recalculés à la main.
Statut : brouillon, non relu.
```

### puissances  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Nombres et calculs », section « Troisième » (lignes 581 à 644),
entrée « Puissances » : lignes 591 à 604.

Automatismes (l. 593-595), tous acquis de 4e -> bloc « Ce que tu sais déjà », non retraités :
- « Puissance comme multiplication itérée : 3 × 3 × 3 × 3 = 3^4 »
- « Multiplication de puissances d'exposant positif d'un nombre »
- « Multiplication de puissances de même exposant positif de deux nombres »

Objectifs d'apprentissage (l. 597-601), traités un par un et DANS L'ORDRE :
- « Définir les puissances d'exposant négatif d'un nombre » (l. 597) -> section 1
- « Multiplier et diviser des puissances » (l. 598) -> section 2
- « Déterminer la notation scientifique d'un nombre » (l. 600) -> section 3
- « Résoudre des problèmes notamment en utilisant la notation scientifique » (l. 601)
  -> section 4
Prolongements (l. 603-604) : « L'échiquier de Sissa », « Le papyrus de Rhind » -> section 6.
Commentaire général du thème (l. 348-353) : les exposants négatifs sont rattachés aux
sciences de l'atome, à la microbiologie et aux nanotechnologies ; « on introduit en
fonction des besoins les préfixes des puissances de dix de nano à giga » et « on fait
le lien avec les conversions » -> tableau des préfixes et exemples (électron, virus)
en section 4.

=== LES DEUX QUESTIONS OUVERTES LAISSÉES PAR L'AUTEUR DE LA 4e — VERDICTS ===

1. (a^m)^n — LA PUISSANCE D'UNE PUISSANCE. Revérifié, et TRANCHÉ : ce n'est PAS une
   omission d'extraction, c'est une absence réelle du texte.
   Méthode de vérification :
   - relevé exhaustif des occurrences de « puissance » / « exposant » dans le .txt :
     lignes 9, 14, 19, 346, 348, 350, 351, 353, 475, 480, 483-485, 544, 548, 552-555,
     591, 593-595, 597-598, 628. Aucune ne mentionne (a^m)^n ni « puissance d'une
     puissance ».
   - contre-vérification indépendante sur le PDF avec `pdftotext -layout` : l'entrée
     « Puissances » de 3e y apparaît intégralement (Automatismes puis 4 objectifs puis
     Prolongements) et est IDENTIQUE à l'extraction .txt. Aucune ligne perdue.
   - ATTENTION, point utile au relecteur : la ligne 599 du .txt est VIDE, entre
     « Multiplier et diviser des puissances » (598) et « Déterminer la notation
     scientifique » (600). Ce blanc pouvait laisser croire à un objectif perdu (c'est
     exactement là qu'on attendrait (a^m)^n). L'extraction -layout du PDF montre que
     non : c'est un simple saut de page, les deux objectifs se suivent directement.
   VERDICT : réellement hors des trois entrées « Puissances » du cycle 4. Je ne l'ai
   donc PAS enseignée comme règle. Elle figure uniquement en encadré « pour aller plus
   loin », explicitement signalé hors programme, avec la parade (développer le produit).
   RESTE AU RELECTEUR : décider si cette mention doit être conservée ou supprimée. Elle
   est utile (les élèves la rencontrent en exercices), mais elle n'est pas exigible.

2. EXPOSANT 0. TRANCHÉ dans l'autre sens qu'en 4e : je l'INTRODUIS ici (section 1),
   alors que la fiche de 4e l'avait délibérément écarté. Justification :
   - l'objectif l. 598 « Multiplier et diviser des puissances » impose la règle
     a^m / a^n = a^(m-n) ; appliquée à m = n elle produit mécaniquement a^0 ;
   - l'objectif l. 597 « puissances d'exposant négatif » suppose des exposants entiers
     relatifs, ensemble qui contient 0 ;
   - sans a^0 = 1, la règle du quotient a un trou et l'élève bute dessus dès le premier
     exercice.
   Le texte officiel ne l'écrit toutefois NULLE PART, à aucun niveau. Je l'ai donc
   présenté non comme un attendu mais comme une CONSÉQUENCE des règles, avec sa
   justification. À CONFIRMER PAR LE RELECTEUR : niveau d'exigence attendu (simple
   cohérence, ou résultat à connaître ?).

=== AUTRES POINTS À SOUMETTRE AU RELECTEUR ===

3. QUOTIENT DE MÊME EXPOSANT : (a/b)^n = a^n / b^n (section 2). Le texte dit seulement
   « Multiplier et diviser des puissances » (l. 598), sans préciser les cas. J'ai
   symétrisé les deux règles de 4e (même base / même exposant) dans les deux opérations,
   soit quatre règles. La règle du quotient de même exposant est donc une INFÉRENCE de
   symétrie, pas une citation. À valider ou à retirer.
4. BORNES DE LA MANTISSE : j'écris 1 <= a < 10, et pour les négatifs 1 <= |a| < 10.
   Le programme dit seulement « Déterminer la notation scientifique d'un nombre » sans
   définir la forme. La définition retenue est la convention usuelle ; le cas des nombres
   NÉGATIFS et le cas de ZÉRO (pas de notation scientifique) sont mes ajouts.
5. VOCABULAIRE « mantisse » : absent du programme. Employé une fois, immédiatement
   glosé (« le nombre décimal de devant »). À retirer si le relecteur le juge prématuré
   en 3e.
6. « ORDRE DE GRANDEUR » (section 3) : l'expression figure dans le commentaire général
   du thème (l. 351, « en lien avec les unités, les ordres de grandeur ») mais pas dans
   l'entrée « Puissances » elle-même. Poids donné à confirmer.
7. PRÉFIXES : le texte dit « on introduit EN FONCTION DES BESOINS les préfixes des
   puissances de dix de nano à giga » (l. 352-353). J'ai donné les six préfixes de
   nano à giga, sans centi/déci/déca/hecto. La formule « en fonction des besoins »
   suggère qu'aucune liste n'est exigible telle quelle : le tableau est un outil, pas
   une liste à mémoriser. Vérifier que la fiche ne laisse pas entendre l'inverse.
8. BASE NÉGATIVE avec exposant négatif ((-2)^-3, section 5) : prolongement du piège de
   signe traité en 4e. Non écrit dans l'entrée 3e. À confirmer.
9. Titre retenu : « Puissances : exposants négatifs et notation scientifique ». Le BO
   dit seulement « Puissances ». Choix fait pour distinguer des chapitres 5e et 4e.

Les fiches contenu/cinquieme/maths/puissances/ et contenu/quatrieme/maths/puissances/
sont citées en prérequis et leur contenu n'est PAS répété : notation a^n, carré, cube,
carrés de 0 à 12, 10^n positif, a^m x a^n, a^n x b^n, priorités opératoires. Seul le
strict rappel de repérage figure en tête de fiche, plus le rappel encadré des deux
règles de 4e nécessaires à la section 2.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### racine-carree  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE — docs/programme-college-cycle4-maths-2026.txt, « Annexe 2 – Programme de
mathématiques pour le cycle 4 », « Nombres et calculs », TROISIÈME (l. 581-644), entrée
« Racine carrée », l. 605-614. Contenu littéral, c'est TOUT ce que le texte donne pour la 3e :
- l. 607 (automatisme) « Donner les carrés des nombres entiers compris entre 0 et 12. » —
  identique à la 4e (l. 558) → §0, volontairement bref.
- l. 609 (objectif) « Résoudre analytiquement et graphiquement des équations de la forme
  x² = a. » → §2 (analytique) + §3 (graphique). Cœur du chapitre.
- l. 610 (objectif) « Résoudre des problèmes utilisant la racine carrée. » → §5
- l. 612-614 (prolongements) parabole / foyer / antennes, et « Algorithmes d'extraction de
  racines carrées. » → encadré « Culture, non exigible » du §3.
Cadrage l. 344-345 : « La racine carrée est introduite, en lien avec des situations
géométriques (longueur du côté d'un carré d'aire donnée, théorème de Pythagore). » → §5.
Rien d'autre dans le texte de 3e : pas de calcul sur les radicaux, pas de simplification.

APPUIS PRIS AILLEURS, TOUS VÉRIFIÉS EN 3e
- l. 1068 (Fonctions) « Représenter la fonction carré. » → autorise le §3 et « parabole ».
- l. 637 + l. 641 (Calcul littéral) produit nul ; a² – b² = (a – b)(a + b) → justifient le
  « pourquoi exactement deux solutions » du §2.
- l. 839 (Triangles, automatisme) « Écrire l'égalité de Pythagore. » → exemple du §5. Le
  théorème est un objectif de 4e (l. 800) ; en 3e c'est un automatisme, donc mobilisable.
- l. 626 (Calcul littéral, automatisme) équations ax = c, x + b = c → §4.

ARTICULATION AVEC LA 4e (contenu/quatrieme/maths/racine-carree/) — non reprises ici, citées
en prérequis et renvoyées au §0 : définition de √a, condition a ⩾ 0, (√a)² = a, √(a²) = a,
croissance, encadrement par deux entiers, √(a+b) ≠ √a + √b, irrationalité de √2. Le §1 est
le pivot : la 4e martèle « une racine ne donne jamais deux réponses », la 3e ajoute « mais
une équation, si ». Divergence de ton volontaire, traitée frontalement (§1, erreurs 1-2) —
à valider en relecture croisée des deux fiches.

⚠️ POINT N°1 — VÉRIFICATION REFAITE, JE CONFIRME L'AUTEUR DE LA 4e. √(ab) = √a × √b et
√(a/b) = √a/√b n'apparaissent nulle part dans le cycle 4. Recherche indépendante :
- « racine(s) » apparait sur 9 lignes — 15, 20 (sommaire), 344 (cadrage), 556, 560, 561
  (4e), 605, 610, 614 (3e) : aucune ne parle de produit ni de quotient de racines ;
- le symbole « √ » n'apparait qu'une fois, l. 564 (√2 non décimal), en 4e ;
- « produit de deux racines », « racine d'un produit / d'un quotient » : aucun résultat ;
- l'entrée de 3e (l. 605-614) est complète et structurée (Automatismes / Objectifs /
  Prolongements) : rien ne manque au milieu.
JE TRANCHE dans le même sens : hors programme, donc absentes de la fiche — y compris là où
elles tenteraient (§5 : √50 reste √50, PAS simplifié en 5√2).
Rectification mineure : la 4e annonce « dix occurrences du mot racine, l. 15, 20, 344, 556,
560, 561, 564, 605, 610, 614 ». Il y en a NEUF — la l. 564 porte le symbole √, pas le mot.
Le décompte change, la conclusion non.
RÉSERVE à lever sur le PDF : le .txt est une extraction, et elle abime les formules empilées
(l. 618-621 : deux fractions réduites à « 15 / 35 et 63 / 14 »). Un radical composé aurait pu
subir le même sort. Les identités remarquables (l. 638-641) et « 60 = 2² × 3 × 5 » (l. 617)
ont survécu, ce qui rend l'hypothèse peu probable — mais seul le PDF la ferme.

AUTRES POINTS POUR LE RELECTEUR
2. Notation « ± » : écartée de la rédaction des solutions (j'écris « x = √a ou x = -√a ») ;
   elle n'apparait qu'au §1 et à l'erreur 2, pour être dénoncée. Bon choix en 3e, ou faut-il
   l'introduire comme abréviation ?
3. La factorisation du §2 dépasse la lettre du l. 609 (qui dit seulement « résoudre »). Elle
   n'utilise que des outils de 3e et donne l'unicité des deux solutions, sinon admise. À
   garder, ou à isoler en encadré facultatif ?
4. Le §3 décrit la parabole sans figure (le gabarit ne prévoit pas d'image) : tableau de
   valeurs + symétrie. Une illustration serait nettement préférable — à arbitrer.
5. Périmètre du §5 : le l. 610 est très ouvert ; je m'en tiens aux deux situations nommées
   au l. 344-345. En ajouter (volumes, agrandissement-réduction) ou non ?
6. Le l. 609 dit « de la forme x² = a » : le §4 (s'y ramener, type 3x² = 75) est-il inclus ou
   est-ce du dépassement ? Supposé inclus, les automatismes l. 626 couvrant ax = c.
7. Non traités, faute de mention dans le texte : racines de non-entiers (x² = 0,25) — à
   confirmer qu'elles ne sont pas attendues au brevet ; et l'irrationalité de √a quand a
   n'est pas un carré parfait, qui est un prolongement de 4e (l. 563-564). Volontaire.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
```

### reperage  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE
/tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt, thème « Espace et
géométrie », section Troisième (débute l. 810), entrée « Repérage sur une droite et
dans le plan », lignes 811 à 817. La plage 810-860 fournie couvre aussi
« Représentation de l'espace » (l. 818-836), « Triangles » (l. 837-848) et
« Translations et vecteurs » (l. 849-858) : NON traités ici, ce sont des chapitres
distincts.

CONTENU TEXTUEL EXACT DE L'ENTRÉE 3e (l. 811-817) — intégralité, rien d'omis :
  « Repérage sur une droite et dans le plan / Automatismes
    − Placer sur une droite graduée un point dont l'abscisse est un nombre relatif.
    − Repérer un nombre relatif sur une droite graduée.
    − Dans le plan muni d'un repère orthogonal :
      • lire les coordonnées d'un point donné ;
      • placer un point de coordonnées données. »

⚠️ POINT N°1 POUR LE RELECTEUR — L'ENTRÉE DE 3e N'A AUCUN APPORT PROPRE.
Deux constats, vérifiés moi-même et NON repris sur parole de la fiche de 4e :
  (a) L'entrée ne comporte AUCUNE ligne « Objectifs d'apprentissage », uniquement des
      automatismes. Vérifié ligne à ligne : la rubrique suivante, « Représentation de
      l'espace », commence en 818.
  (b) L'entrée 3e est le COPIER-COLLER STRICT de l'entrée 4e (l. 759-765). Vérifié par
      comparaison automatique des deux plages :
        diff <(sed -n '759,765p' F) <(sed -n '811,817p' F)  →  aucune différence.
      La prévision laissée dans les notes de la fiche 4e est donc CONFIRMÉE.
Formellement : rien à enseigner de neuf en 3e, et pas même l'élargissement
demi-droite→droite / décimal→relatif qui justifiait encore la fiche de 4e.

CE QUE J'AI CHOISI DE FAIRE FACE À UNE ENTRÉE SANS OBJECTIF PROPRE — À ARBITRER.
Option écartée : gonfler le chapitre avec des contenus non attestés (distance entre
deux points, milieu d'un segment, coordonnées de vecteurs, latitude/longitude). Ce
serait du hors-programme déguisé en nouveauté.
Option retenue : assumer un chapitre de CONSOLIDATION AVANT LA SECONDE, annoncé comme
tel à l'élève dès l'accroche et argumenté en section 1 (tableau 5e/4e/3e). La valeur
ajoutée n'est pas dans le repérage lui-même mais dans son EMPLOI en 3e (section 5).
La fiche est volontairement plus courte et moins « nouvelle » que la moyenne du corpus.
=> DÉCISION DE FOND À VALIDER. Alternative pour le relecteur : ne pas publier de
   chapitre 3e du tout et faire pointer le parcours de 3e vers la fiche de 4e, en ne
   gardant qu'une batterie d'exercices d'automatisation. Même question que celle déjà
   posée en 4e (fusion avec la 5e) — il serait cohérent de la trancher UNE fois pour
   les trois niveaux 5e/4e/3e.

RECOUVREMENT AVEC 3e-math-fonctions (produit en parallèle) — À ARBITRER.
Section 5 entière. Faute d'apport propre, elle s'appuie sur les seuls emplois du repère
attestés ailleurs en 3e, thème « Proportionnalité, fonctions », section Troisième :
  - l. 1060 « Utiliser les différentes représentations d'une fonction. »
  - l. 1061 « Définir et connaitre le vocabulaire : image, antécédents. »
  - l. 1064 « Résoudre graphiquement des équations et des inéquations linéaires. »
  - l. 1066 « Définir et utiliser les fonctions affines. »
  - l. 1067 « Déterminer graphiquement les coefficients d'une fonction affine. »
  - l. 1068 « Représenter la fonction carré. »
  - l. 1056 (Proportionnalité 3e) « Relier la représentation graphique d'une situation
    de proportionnalité avec le théorème de Thalès. » — CITÉ NULLE PART dans la fiche,
    volontairement : c'est du ressort de 3e-math-fonctions / proportionnalité.
Ces lignes relèvent FORMELLEMENT d'un autre thème qu'« Espace et géométrie ».
RECOUVREMENT ASSUMÉ ET REVENDIQUÉ : c'est ce qui donne sa valeur au chapitre. Mais il
faut décider qui porte quoi. Ma proposition : cette fiche traite le GESTE DE LECTURE
dans le repère (où se lit une image, où se lit un antécédent, comment on lit $a$ et
$b$), 3e-math-fonctions traite la NOTION (définition d'une fonction, linéaire/affine,
lien avec la proportionnalité, résolution). Si le relecteur préfère, la section 5 peut
être réduite à un renvoi — la fiche tomberait alors sous les 180 lignes, ce qui
poserait la question de son existence même (voir ci-dessus).
Attention : le vocabulaire « image / antécédent » est employé ici alors qu'il est
DÉFINI en 3e-math-fonctions. Ordre de lecture à fixer dans le parcours.

VECTEURS (section 6) — RÉPONSE À LA CONSIGNE : LE PROGRAMME NE LE PERMET PAS.
Il m'était demandé d'orienter la fiche vers « les coordonnées au service des vecteurs
SI l'entrée Translations et vecteurs (l. 849-856) le permet ». Elle ne le permet pas.
Texte intégral des objectifs (l. 852-857) : « Définir et utiliser la translation :
définition ponctuelle avec parallélogramme. » / « Définir et utiliser les notions de
vecteur, de vecteurs égaux, de vecteur nul, d'opposé d'un vecteur. » / « Définir et
utiliser la somme de deux vecteurs par enchainement de deux translations. » /
« Découvrir et utiliser la relation de Chasles. » — AUCUNE mention de coordonnées, de
repère ni de calcul. Recherche plein texte confirmée sur tout le fichier : le mot
« coordonnées » n'apparait QU'AUX l. 677-678 (5e), 764-765 (4e), 816-817 (3e), toutes
dans les entrées « Repérage », plus « repère orthogonal » l. 676, 763, 815 et 1016.
DONC : aucune section « coordonnées de vecteurs » n'a été écrite. La section 6 se borne
à CONSTATER cette absence pour l'élève et à la situer (« ce sera la Seconde »), ce qui
relève de l'information sur le programme, pas de l'enseignement d'un contenu.
=> À VALIDER : est-il souhaitable de dire explicitement à un élève ce qui n'est PAS
   exigible ? J'ai jugé que oui pour un chapitre de consolidation, mais c'est un parti
   pris de ton. Idem pour la question 6 du QCM, qui porte sur ce périmètre.
=> RECOUVREMENT avec 3e-math-translations-vecteurs (produit en parallèle) : limité à
   cette section 6, qui n'enseigne aucun contenu vectoriel. Aucun conflit attendu, mais
   à vérifier que l'autre fiche ne présente PAS non plus de coordonnées de vecteurs.

EXCLUSIONS VOLONTAIRES (ne pas les lire comme des oublis) :
- DISTANCE ENTRE DEUX POINTS DU PLAN et MILIEU D'UN SEGMENT en coordonnées : aucune
  formule de ce type nulle part dans le fichier, à aucun niveau. Pythagore et Thalès
  sont bien au programme de 3e (l. 843-846) mais l'entrée « Repérage » ne mentionne ni
  distance ni longueur. NON TRAITÉS. (La fiche de 5e a une section 4 « Écart entre deux
  points d'une droite graduée » que son auteur signalait déjà comme hors programme :
  ni reprise ni prolongée ici.)
- LATITUDE / LONGITUDE / SPHÈRE TERRESTRE : absents du programme. Recherche plein texte
  refaite (« latitude », « longitude », « méridien », « sphère ») : aucune occurrence
  utile, y compris dans l'entrée « Représentation de l'espace » de 3e (l. 818-836) qui
  définit pourtant boule, sphère et grands cercles — sans jamais les repérer. NON
  TRAITÉS.
- REPÈRE ORTHONORMÉ : le programme n'écrit que « repère orthogonal », à tous les
  niveaux. La fiche insiste donc sur orthogonal ≠ orthonormé (sections 2 et 7), en
  cohérence avec les fiches de 5e et 4e — le mot « orthonormé » n'est jamais employé.
  Ce point devient critique en 3e : c'est lui qui interdit de lire le coefficient
  directeur en comptant les carreaux (section 5 et erreur n°1).

VOCABULAIRE À VALIDER (même réserve qu'en 5e et en 4e, à trancher UNE fois pour les
trois fiches) : « axe des abscisses », « axe des ordonnées », « ordonnée » et la
notation $A(x\,;y)$ ne figurent nulle part dans le programme, qui se contente de
« repère orthogonal » et « coordonnées ». Employés ici par nécessité et par cohérence
inter-fiches.

Durée de lecture (10 min) : fiche courte, adossée aux fiches de 5e et 4e.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours, ni recopie des fiches 5e/4e (angle et exemples différents).
Statut : brouillon, non relu.
```

### representation-espace  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie », niveau
Troisième, entrée « Représentation de l'espace », LIGNES 818 à 835 (plage fournie : 810-860).

Texte source, correspondance littérale -> fiche :
- Automatismes (l. 819-823)
  « Reconnaitre des solides (pavé droit, cube, prisme droit, cylindre, pyramide, cône). » -> §1
  « Connaitre et utiliser les formules du volume d'une pyramide ou d'un cône. »           -> §1
  « Donner la nature d'une face d'une pyramide représentée en perspective cavalière. »    -> §1
  « Identifier les patrons de pyramides données (par exemple inscrites dans un cube). »   -> §2
- Objectifs d'apprentissage (l. 824-829)
  « Définir la boule et la sphère. »                                                      -> §3
  « Définir les grands cercles, le diamètre. »                                            -> §3
  « Visualiser et réaliser des sections de pavé parallèlement à une face, de cylindre
    parallèlement ou perpendiculairement à son axe, d'une boule. »                        -> §4
  « Connaitre et utiliser la formule du volume d'une boule de rayon donné. »              -> §5
- Prolongements possibles (l. 830-835) : intuition d'Archimède (boule = 2/3 du cylindre qui
  la contient), démonstration de Newton ; cinq polyèdres réguliers et Léonard de Vinci.
  -> encadré culture §5 (Archimède + Newton). Les polyèdres réguliers / De Vinci n'ont PAS
  été repris (aucun objectif ne s'y rattache).

ARTICULATION AVEC LA 5e ET LA 4e — VÉRIFIÉE
Fiches lues : contenu/cinquieme/maths/representation-espace/fiche.md (pavé, cube, prisme,
cylindre : perspective, vues, patrons, aire du disque, volumes, unités) et
contenu/quatrieme/maths/representation-espace/fiche.md (pyramide, cône, règle du tiers).
Les deux sont citées en prérequis (§ prerequis) et rappelées en une ligne au §1, jamais
réexpliquées. Convention π ≈ 3,14 reprise. Fil d'exemples chiffrés recyclé : cylindre
r=5 / h=12 -> 942 cm³ (déjà présent en 5e et 4e), et base carrée de 6 cm (reprise de la
pyramide de 4e). L'apport réel de la 3e = boule/sphère, grands cercles/diamètre, sections,
volume de la boule, et patron de pyramide inscrite dans un cube.

>>> DEUX POINTS DE PÉRIMÈTRE MAJEURS À TRANCHER PAR LE RELECTEUR <<<

A. AGRANDISSEMENT-RÉDUCTION (effet d'un coefficient k : longueurs ×k, aires ×k², volumes ×k³).
   ABSENT de la section 3e « Représentation de l'espace » (l. 818-835) ET introuvable dans
   TOUT le fichier programme (recherche « agrandissement / réduction / coefficient k /
   semblable / échelle » sur l'ensemble du document : aucune occurrence rattachée aux solides ;
   « échelle » n'apparait que pour la proportionnalité, l. 1004-1050). C'est pourtant un
   attendu classique de 3e dans les anciens programmes. J'ai donc, CONFORMÉMENT à la règle
   « le programme est la seule source de contenu », NE PAS créé de section agrandissement-
   réduction et NE PAS mis l'erreur « multiplier le volume par k » comme telle. J'ai seulement
   conservé l'effet du cube via la formule elle-même (« doubler le rayon multiplie le volume
   par 8 », §7 pt 5 et QCM Q10), ce qui découle directement de V = 4/3 πR³ sans importer le
   chapitre absent. -> Le relecteur doit confirmer que ce thème ne figure effectivement PAS
   au programme 2026 (ou indiquer la section/le niveau où il a migré) : c'est LE point de
   conformité le plus sensible de cette fiche.

B. AIRE DE LA SPHÈRE (A = 4πR²). ABSENTE du programme : l. 829 ne demande QUE « la formule du
   volume d'une boule ». Je ne l'ai donc PAS posée comme formule à mémoriser (ni au §5, ni au
   tableau, ni au QCM). -> À confirmer par le relecteur : est-ce bien hors attendu en 3e 2026 ?

AUTRES POINTS À VALIDER
1. PATRON DE LA PYRAMIDE INSCRITE DANS UN CUBE (§2) : j'ai choisi la pyramide sommet-au-dessus-
   d'un-coin (hauteur = arête, volume = 1/3 du cube, dissection en 3 pyramides). Faces : 1 carré
   + 2 triangles rectangles (6;6) + 2 triangles rectangles (6 ; 6√2). Tracé/longueurs vérifiés
   par coordonnées (A=(0,0,0), base z=0, S=(0,0,6)). Le BO dit « par exemple inscrites dans un
   cube » sans figer LAQUELLE : une autre pyramide inscrite (ex. sommet au centre du cube) est
   possible. Choix à valider.
2. SECTION DE BOULE HORS-CENTRE, r = √(R²−d²) (§4, QCM Q7) : mobilise Pythagore (au programme
   de 4e, réactivé en 3e l. 838-839). Le BO demande « visualiser et réaliser des sections
   d'une boule » sans exiger explicitement le calcul du rayon de section. Je l'ai traité car
   c'est l'usage chiffré naturel et il tombe souvent au brevet. À arbitrer : garder le calcul,
   ou s'en tenir à « la section est un disque » ?
3. SECTION DE CYLINDRE PARALLÈLE À L'AXE (§4) : le BO le liste ; j'ai précisé « rectangle, de
   largeur 2r si le plan passe par l'axe ». La précision « passant par l'axe » va un cran au-
   delà du texte (qui dit seulement « parallèlement à l'axe »). À valider.
4. VALEUR DE π : π ≈ 3,14 partout, comme en 5e/4e. Vérifier que c'est la convention du projet
   plutôt que la touche π de la calculatrice.
5. NOMBRES DES EXEMPLES CHIFFRÉS (113,04 ; 904,32 ; section 5/3 -> 4 ; cube 6 -> pyramide 72) :
   recalculés un par un, cohérents. À revérifier en relecture.

CONTRAINTE FIGURES : chapitre de géométrie dans l'espace produit SANS illustration, comme en
5e et 4e. Compensé par des descriptions pas-à-pas (patron §2, sections §4) et un fil
d'exemples chiffrés (boule R=3 -> 113,04 cm³ ; boule d=12 -> 904,32 cm³ ; section boule
R=5/d=3 -> r=4 ; pyramide dans cube d'arête 6 -> 72 cm³). Points d'insertion si des figures
sont ajoutées : §2 (patron), §3 (sphère/grand cercle), §4 (les trois sections).

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### statistiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt — chapeau du thème « Organisation et gestion
de données et probabilités » l. 861-885 (partie Statistiques : l. 861-872) ; section « Troisième » /
« Statistiques » l. 947-958 (titres 947-948, automatismes 949-952, objectifs 953-958).

CHAPITRE CRÉÉ LE 2026-08-12, premier du niveau 3e. Fait suite aux fiches 5e-math-statistiques et
4e-math-statistiques, citées en prérequis et NON répétées.

COUVERTURE, item par item — tout le contenu de la section est traité, rien d'autre.
- Automatismes (l. 950-952) → § 1, à l'état de rappel : acquis de 4e.
- « Calculer des effectifs cumulés croissants » (l. 954) → § 2.
- « Donner les quartiles et la médiane d'une série donnée sous forme de tableau d'effectifs ou de
  diagramme en barres » (l. 955) → § 3 (médiane), § 4 (quartiles), § 5 (les DEUX formes citées).
- « Construire et utiliser des boites à moustache pour représenter les valeurs de position »
  (l. 956) → § 6 (construire) et § 7 (utiliser) ; « valeurs de position » repris tel quel.
- « Comprendre et interpréter des données statistiques » (l. 957) → § 7, adossé au chapeau
  (« analyser et comparer », « esprit critique », l. 863-867).
- « Utiliser le tableur… » (l. 958) → § 8, court (formules déjà vues en 4e), alors que le chapeau
  le veut « aussi fréquemment que possible » (l. 871-872) : un professeur voudra peut-être plus.
APPORTS PROPRES À CETTE FICHE : effectifs cumulés, quartiles, boite à moustaches, et médiane lue
dans un TABLEAU ou un DIAGRAMME — la 4e la limitait aux données brutes (sa note n° 2 ; l. 928).

════ LES DEUX QUESTIONS LAISSÉES OUVERTES PAR LA 4e — ARBITRAGE RENDU ICI ════

1. DEMI-SOMME POUR UN EFFECTIF PAIR (question n° 1 de la 4e) → CONVENTION MAINTENUE, ET DÉSORMAIS
   NOMMÉE COMME TELLE À L'ÉLÈVE (§ 3). Motif tiré du texte : la 4e écrivait « déterminer UNE
   médiane » (l. 928, indéfini), ce qui laissait le choix ouvert ; la 3e écrit « les quartiles et
   LA médiane » (l. 955, défini) et exige une boite à moustaches — dessin qui réclame UN trait,
   donc UN nombre unique. La fiche 4e peut rester en l'état ; pour aligner les deux, y ajouter la
   même phrase suffit.
   ⚠️ EFFET DE BORD À TRANCHER : Q1 et Q3 sont définis par une règle de position, qui rend toujours
   une valeur de la série, alors que la médiane par demi-somme peut ne pas en être une (§ 3,
   exemple à 1,5). L'asymétrie est assumée et signalée à l'élève. Une autre progression cohérente
   définirait la médiane comme « deuxième quartile » avec la même règle de position — ce n'est pas
   l'usage attendu au brevet, d'où le choix retenu. À CONFIRMER.

2. MOYENNE À COEFFICIENTS, « devoir coefficient 3 » (question n° 3 de la 4e) → NON TRAITÉE, NI EN
   4e NI EN 3e. Motifs tirés du texte : la 3e ne mentionne la moyenne que comme automatisme
   (l. 950) et au tableur (l. 958), aucun objectif d'apprentissage ne l'étend ; et le seul endroit
   du cycle 4 où figure le mot « pondérée » (l. 924-925, 4e) lie les pondérations aux formes de
   présentation citées — données brutes, tableau, diagramme en barres — donc à des EFFECTIFS. La
   moyenne à coefficients n'est nulle part au programme du cycle 4 : le périmètre de la fiche 4e
   est confirmé et sa question n° 3 peut être close.
   ⚠️ RÉSERVE : les élèves de 3e lisent « coefficient » sur leur bulletin toute l'année. Un
   professeur peut vouloir deux lignes (« un coefficient se traite comme un effectif ») quelque
   part dans le parcours. Je ne les ai pas écrites — la consigne fait du programme la seule source.
   Décision à prendre au niveau du PARCOURS, pas d'une fiche.

════ AUTRES POINTS À CONFRONTER AU PDF PAR UN PROFESSEUR ════

3. CONVENTION DE CALCUL DES QUARTILES — le point le plus sensible. Le texte dit « donner les
   quartiles » (l. 955) sans les définir. Règle retenue : plus petite valeur telle qu'au moins un
   quart (resp. trois quarts) des données lui soient inférieures ou égales, mise en œuvre par le
   rang n/4 (resp. 3n/4) arrondi au-dessus s'il n'est pas entier, gardé tel quel s'il l'est.
   D'autres conventions (interpolation) donnent d'autres résultats. À VALIDER EN PRIORITÉ : les
   questions 4, 5 et 7 du QCM en dépendent.
4. ÉCART INTERQUARTILE : le texte ne le nomme pas. La fiche parle de « largeur de la boite » et
   écrit Q3 − Q1 sans en faire un indicateur encadré (§ 6, § 7). Volontaire — « utiliser » une
   boite suppose de lire cette largeur, mais le mot n'est pas introduit.
5. ORTHOGRAPHE : le BO écrit « boites à moustache » (l. 956) — « boite » sans accent circonflexe
   (rectifiée, conservée) et « moustache » au singulier ; la fiche met le pluriel, forme courante.
   Suivre le texte à la lettre, ou l'usage ?
6. LE SCHÉMA ASCII du § 6 est un pis-aller : il rend mal hors police à chasse fixe. À remplacer par
   une image ou un SVG à l'intégration — c'est LE dessin que l'élève doit savoir reproduire.
7. DATE DU BO : l'en-tête porte « BO du 5 mars 2026 » (chaine imposée, identique aux fiches 5e et
   4e) alors que ETAT.md attribue au cycle 4 le « BO du 2 avril 2026 ». Incohérence de dépôt, à
   trancher une fois pour toutes et à propager.
8. FORMULES TABLEUR en français, à aligner sur l'outil de la classe (comme en 4e). L'avertissement
   du § 8 sur les fonctions de quartile est délibérément non technique : vérifier qu'il ne dit rien
   de faux pour le tableur réellement utilisé en classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### translations-vecteurs  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »,
section « Troisième » (lignes 810 à 860), entrée « Translations et vecteurs »
(lignes 849 à 860).

CONTENU DE L'ENTRÉE, littéralement :
- Automatismes (l. 851) : « Mobiliser les connaissances sur la symétrie axiale, le
  demi-tour, la translation. »
- Objectifs d'apprentissage :
  · l. 853 « Définir et utiliser la translation : définition ponctuelle avec
    parallélogramme. » → § 1
  · l. 854 « Définir et utiliser les notions de vecteur, de vecteurs égaux, de vecteur
    nul, d'opposé d'un vecteur. » → § 2, § 3, § 4
  · l. 856 « Définir et utiliser la somme de deux vecteurs par enchainement de deux
    translations. » → § 5
  · l. 857 « Découvrir et utiliser la relation de Chasles. » → § 5
- Prolongements (l. 859-860) : hexagone à partir de triangles équilatéraux ; fractales
  (Von Koch, Sierpinski). NON traités : ce sont des prolongements culturels, et les
  fractales relèvent de l'homothétie, hors de cette entrée. À arbitrer.

PÉRIMÈTRE — CE QUI EST BIEN DE 3e (question posée en consigne)
La SOMME de deux vecteurs ET la relation de CHASLES sont explicitement au programme de
3e : lignes 856 et 857, vérifiées dans le fichier source. Elles sont donc traitées ici
(§ 5), et non renvoyées à la Seconde. C'est la principale nouveauté par rapport à ce
que laissaient supposer les notes de la fiche 4e « Transformations » (qui annonçait
seulement « la composée de deux translations est un objectif de 3e »).

CE QUI EST VOLONTAIREMENT LAISSÉ À LA SECONDE (cf.
contenu/seconde/maths/vecteurs/fiche.md, id 2nde-math-vecteurs) :
- coordonnées d'un vecteur dans un repère : l'entrée 3e « Repérage sur une droite et
  dans le plan » (l. 811-817) ne comporte QUE des automatismes sur les coordonnées de
  POINTS, aucun objectif sur les vecteurs. Rien n'est donc écrit en coordonnées ici.
- norme et notation ‖·‖, multiplication d'un vecteur par un réel, colinéarité et
  déterminant, milieu par les coordonnées : absents du programme de 3e.
La fiche de Seconde reprend exactement les mêmes conventions (ordre ABDC, Chasles),
la continuité est donc assurée sans recouvrement.

ARTICULATION AVEC LA 4e — POINT DIDACTIQUE STRUCTURANT
En 4e (contenu/quatrieme/maths/transformations/fiche.md et
contenu/quatrieme/maths/parallelogrammes-translations/fiche.md), la translation est
caractérisée PAR SON EFFET, le lien avec le parallélogramme étant posé comme propriété
caractéristique ADMISE, sans notation vectorielle. Le BO fait de la « définition
ponctuelle avec parallélogramme » un objectif de 3e (l. 853) : c'est donc cette fiche
qui la donne, au § 1. Les conservations (longueurs, angles, aires, alignement) ne sont
PAS reprises ici : elles sont acquises de 4e et rappelées en une phrase au § 1.

À TRANCHER PAR LE RELECTEUR
1. LA DATE DU BO. L'en-tête reprend « BO du 5 mars 2026 » (chaîne fournie en consigne
   et utilisée par toutes les fiches collège), mais ETAT.md et PASSATION.md annoncent
   « BO du 2 avril 2026 » pour le cycle 4, et aucune des deux dates n'apparaît dans le
   texte extrait. Problème déjà signalé sur les fiches 5e et 4e : à harmoniser.
2. NOTATION. J'écris $\overrightarrow{AB}$ (flèche pleine sur les deux lettres),
   comme la fiche de Seconde. Vérifier que c'est bien la notation attendue en 3e et
   qu'elle rend correctement sous KaTeX sur mobile.
3. § 5, DERNIER PARAGRAPHE — RÈGLE DU PARALLÉLOGRAMME. Le BO ne demande la somme que
   « par enchainement de deux translations » (l. 856), c'est-à-dire par Chasles. La
   somme de deux vecteurs de MÊME ORIGINE est une EXTENSION de ma part, justifiée
   parce que les exercices la réclament et qu'elle est ici DÉMONTRÉE à partir de
   Chasles. À valider ou à retirer. Attention : l'ordre des lettres y est ABCD, ce qui
   peut entrer en collision avec le « jamais ABCD » du § 3 — j'ai signalé la
   différence explicitement, mais c'est le passage le plus risqué de la fiche.
   Concerne aussi la question 9 du QCM.
4. L'OPPOSÉ est noté $-\overrightarrow{AB}$. Le signe « moins » devant un vecteur
   suppose une multiplication par $-1$, qui n'est PAS au programme de 3e. Vérifier que
   la notation est admise à ce niveau, ou s'il faut se limiter à la formulation
   « $\overrightarrow{BA}$ est l'opposé de $\overrightarrow{AB}$ ».
5. Le symbole $\iff$ : admis en 3e ? Il est ici systématiquement doublé de sa lecture
   « si et seulement si ».
6. § 7, cas aligné (« parallélogramme aplati ») : même doute qu'en 4e sur le niveau de
   précision attendu.
7. Le vecteur nul « n'a ni direction ni sens » (§ 4) : formulation usuelle mais que
   certains professeurs refusent (on dit parfois que sa direction est indéterminée).
   À trancher.

Rédaction originale à partir du seul programme officiel, qui est public. Aucun emprunt
à un manuel ni à un site de cours. Statut : brouillon, non relu.
```

### triangles  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.txt), thème « Espace et
géométrie », niveau TROISIÈME (qui commence l. 810), section « Triangles »,
LIGNES 836 à 848.

Capacités citées par le texte et couvertes ici :
- l. 838 (automatisme) « Utiliser la propriété du triangle rectangle et de son
  cercle circonscrit » → §1 (renvoi à la fiche 4e)
- l. 839 (automatisme) « Écrire l'égalité de Pythagore dans un triangle rectangle »
  → §1 (renvoi à la fiche 4e)
- l. 840-841 (automatisme) « Utiliser la droite des milieux pour prouver que des
  droites sont parallèles, pour calculer une longueur, pour prouver qu'un point est
  le milieu d'un côté » → §1
- l. 843-844 « Connaitre et appliquer le théorème de Thalès, sa réciproque, sa
  contraposée (configurations des triangles emboités et configuration dite du
  papillon) » → §2 à §6
- l. 845 « Connaitre et utiliser les lignes trigonométriques dans le triangle
  rectangle : cosinus, sinus, tangente » → §7 à §10
- l. 847 « Repères historiques autour du théorème de Thalès, qui n'est pas appelé
  comme cela dans les autres pays » : prolongement, NON développé (non exigible).
- l. 848 « Construction des polygones réguliers à la règle et au compas » :
  prolongement, NON développé.

PÉRIMÈTRE — points à trancher par le relecteur :

1. THALÈS EST BIEN AU PROGRAMME DE 3e (vérifié) : l. 843-844, objectif
   d'apprentissage, pas prolongement. Absent de la section 4e (l. 794-809).
   Le texte impose les DEUX configurations nommées (emboitées + papillon) : les
   deux sont traitées. Il n'emploie PAS l'expression « triangles semblables » ni
   « agrandissement-réduction » dans cette section — je n'ai donc pas construit le
   chapitre autour de ce vocabulaire, seulement mentionné « réduction » au §2 comme
   image intuitive. À CONFIRMER : est-ce acceptable, ou le mot est-il à retirer ?

2. FORMULATION DE LA RÉCIPROQUE : le texte cite « sa réciproque » sans l'énoncer.
   J'ai retenu la forme la plus sûre — égalité des DEUX rapports portés par les
   droites sécantes + condition d'ORDRE des points — et j'ai explicitement exclu le
   rapport MN/BC (§4). C'est mathématiquement nécessaire (sinon l'énoncé est faux),
   mais certaines rédactions de collège allègent la condition d'ordre en supposant
   la figure donnée. → À VALIDER : quel niveau d'exigence attendre d'un élève de 3e
   sur cette condition ?

3. TRIGONOMÉTRIE — apport central de la fiche, conformément à l. 845. Le texte dit
   « lignes trigonométriques », vocabulaire que j'ai repris en titre du §7. Il ne
   mentionne NI les relations cos² + sin² = 1, tan = sin/cos, NI les valeurs
   remarquables (30°, 45°, 60°), NI le cercle trigonométrique : je ne les ai donc
   PAS traités. → À CONFIRMER, c'est le point de périmètre le plus sensible.

4. NOTATION DES FONCTIONS INVERSES : j'ai retenu cos⁻¹/sin⁻¹/tan⁻¹ (ce qui est
   écrit sur les calculatrices des élèves) en signalant que ce n'est pas 1/cos.
   Le programme ne fixe aucune notation. → Le relecteur dira si « arccos » doit
   apparaitre aussi.

5. Aucun contenu sur les DEUX AUTRES automatismes du niveau (repérage, sphère et
   boule) : ils relèvent d'autres sections du programme (l. 811-835), pas de
   « Triangles ».

CONTINUITÉ AVEC LA 4e : la fiche 4e-math-triangles couvre Pythagore (théorème,
réciproque, contraposée), les trois théorèmes de la droite des milieux, le cercle
circonscrit du triangle rectangle et le travail de logique théorème/réciproque/
contraposée. Ces contenus sont des AUTOMATISMES en 3e (l. 838-841) : le §1 y renvoie
et ne les réexplique pas. Le §6 s'appuie explicitement sur le §6 de la fiche 4e.

ARTICULATION AVEC « RACINE CARRÉE » (3e) : chapitre 3e-math-racine-carree
(« Résoudre x² = a »). Cité au §11 pour le cas où Pythagore produit un carré non
parfait, avec le rappel que seule la solution positive a un sens pour une longueur.

À RELIRE EN PRIORITÉ — justesse des exemples chiffrés :
- Thalès emboités : 3/5 = AN/10 → AN = 6 ; 3/5 = MN/8 → MN = 4,8
- Thalès papillon : 4/6 = 5/OD → OD = 7,5
- Réciproque : 2/3 = 4/6 → parallèles ; contraposée : 2/3 ≠ 3/5 → non parallèles
- Trigo triangle 3-4-5 : cos = 0,6 ; sin = 0,8 ; tan ≈ 1,33 ; angle ≈ 53°
- 10 × cos 35° ≈ 8,2 ; 5 ÷ cos 40° ≈ 6,5 ; 6 × tan 30° ≈ 3,5

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

## troisieme / physique-chimie

### atomes-ions-ph  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), classe de 3e —
docs/programme-college-physique-chimie-cycle4.txt, section « Atomes, ions et pH (3e) »
(ligne 95 du .txt), qui liste : structure de l'atome (noyau : protons, neutrons ; électrons) ;
entités chargées : les ions ; tableau périodique des éléments ; tests caractéristiques d'ions ;
pH, acidité et basicité. Extrait initial issu du programme, à confronter au PDF/BO officiel
(eduscol) avant publication.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Niveau 3e : la définition du pH par pH = -log[H3O+] est HORS PROGRAMME. Je m'en suis tenu à
  l'échelle 0-14 et à la comparaison qualitative acide/neutre/basique. À valider.
- Liste des tests d'ions retenue (Cu2+ bleu, Fe2+ vert, Fe3+ rouille, Zn2+ blanc à la soude ;
  Cl- au nitrate d'argent) : conforme aux attendus courants du cycle 4, mais le programme ne
  fixe pas la liste exacte. Vérifier ceux effectivement exigés dans l'établissement.
- Notation de l'ion hydroxyde : j'ai retenu HO- (notation collège fréquente) ; certains manuels
  écrivent OH-. À harmoniser avec le manuel utilisé.
- Ordres de grandeur (atome ~1e-10 m, noyau ~1e-15 m, facteur 100 000) : donnés en culture
  scientifique ; leur caractère exigible en 3e est à confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel. Tutoiement, ~14 ans.
Statut : brouillon, non relu.
```

### conversions-energie-signaux  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme de physique-chimie du cycle 4 (BO), classe de 3e, thème
« Conversions d'énergie et signaux pour mesurer ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Conversions d'énergie et signaux pour mesurer (3e) » (lignes 110-114), extraite du
programme officiel eduscol/education.gouv.fr — À CONFRONTER AU PDF OFFICIEL avant publication.

Points programme couverts :
- Convertisseurs (alternateur, cellule photovoltaïque) ; ressources renouvelables/non → §1
- Chaîne d'énergie ; E = P × t ; conservation et bilans ; rendement → §2-5
- Réflexion des ondes ; télémétrie (écho, sonar, échographie, radar) → §6
- Année-lumière ; « voir loin, c'est voir dans le passé » → §7

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le calcul complet de l'année-lumière (9,5 × 10^15 m) est-il exigible en 3e, ou seulement
  l'idée que c'est une grande distance ? Je l'ai donné en ordre de grandeur.
- Le rendement doit-il être introduit avec les puissances ou seulement les énergies au cycle 4 ?
  J'ai mis l'énergie en principal, la puissance en astuce.
- Vérifier la valeur de célérité des ultrasons dans les tissus (≈ 1540 m/s) retenue localement ;
  340 m/s (air) et 1500 m/s (eau de mer) et c = 3,0×10^8 m/s sont standards.
- Confirmer que le facteur aller-retour (÷2) est attendu explicitement en 3e (radar/sonar).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### masse-volumique  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), classe de 3e, section
« Masse volumique (3e) » du fichier docs/programme-college-physique-chimie-cycle4.txt
(lignes 91-93) : « Relation ρ = m/V. » et « Influence de la température sur la masse
volumique. » Extrait à confronter au PDF officiel eduscol/education.gouv.fr du programme
de cycle 4 avant publication (le .txt de travail n'est pas la source primaire).

Le programme officiel n'énonce explicitement que deux points (ρ = m/V ; influence de la
température). Les compléments suivants ont été ajoutés parce qu'ils font partie du
traitement usuel de la notion au cycle 4 et sont demandés dans la consigne de production —
À FAIRE VALIDER PAR LE RELECTEUR :
- unités g/cm³ / kg/m³ et conversion ×1000 : conforme à l'usage, à confirmer comme exigible ;
- méthode par déplacement d'eau pour le volume d'un solide : méthode expérimentale standard ;
- critère flotte/coule par comparaison des masses volumiques : rattaché au thème mais la
  formulation officielle passe parfois par la notion de densité (rapport à l'eau) — vérifier
  si « densité » doit apparaître, ou si « masse volumique comparée à l'eau » suffit en 3e.

Valeurs numériques utilisées (à 20 °C environ, arrondies) : fer 7,9 ; aluminium 2,7 ;
cuivre 8,9 ; or 19,3 ; liège 0,24 ; glace 0,92 ; huile 0,92 ; eau 1,0 g/cm³. À vérifier
sur une table de référence.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### poids-gravitation-forces  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme de physique-chimie du cycle 4 (BO), classe de 3e, thème « Mouvement et
interactions », section « Poids, gravitation et forces » —
docs/programme-college-physique-chimie-cycle4.txt, lignes 105-108 :
  - Définir le poids : force exercée par la Terre ; relation P = m × g.
  - Vecteur vitesse ; mouvements rectiligne et circulaire uniformes.
  - Équilibre d'un objet : somme des forces nulle.
Extrait de programme fourni dans le dépôt (à confronter au PDF officiel eduscol/BO avant
publication).

⚠️ À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- Valeur de g retenue au collège : j'ai donné g ≈ 9,8 N/kg avec l'arrondi usuel 10 N/kg.
  Vérifier la convention retenue dans l'établissement (certains manuels 3e utilisent
  systématiquement 10 N/kg).
- Valeurs de g pour la Lune (1,6), Mars (3,7), Jupiter (25) : ordres de grandeur usuels des
  manuels, à confirmer. Jupiter n'a pas de « surface » : le g de surface est conventionnel.
- Le programme dit « force exercée par la Terre » ; j'ai étendu au « poids sur d'autres
  astres » car c'est explicitement au programme (P dépend de l'astre) et présent dans tous
  les manuels 3e. À valider.
- La notion de « centre de gravité » comme point d'application : j'ai écrit « centre de
  l'objet » pour rester au niveau 3e. Vérifier le vocabulaire attendu.
- Je n'ai PAS introduit la loi de gravitation universelle de Newton (formule en G·m·m'/d²) :
  hors programme de collège. À confirmer.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

### transformations-chimiques  `brouillon` (relu par : null)

```

NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), classe de 3e,
fichier docs/programme-college-physique-chimie-cycle4.txt, section « Transformations
chimiques (3e) » (lignes 101-103 du .txt extrait) :
  - Redistribution des atomes à l'échelle microscopique ; conservation des éléments.
  - Combustions ; réactions entre acides et métaux ; synthèse chimique.
Contenu à confronter au PDF officiel eduscol / education.gouv.fr avant publication
(extrait de travail, non vérifié ligne à ligne sur le BO source).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'équation acide-métal a été écrite en notation ionique (Fe + 2 H+ -> Fe2+ + H2).
  Le programme de 3e attend-il l'écriture ionique, ou une écriture globale du type
  « fer + acide chlorhydrique -> chlorure de fer + dihydrogène » sans formules ?
  À trancher selon le niveau d'exigence de l'établissement.
- La notion de coefficient « stœchiométrique » est nommée : le mot est-il exigible en
  3e, ou seulement l'idée d'« ajuster les nombres » ? J'ai gardé le mot avec une
  paraphrase.
- La combustion incomplète et le monoxyde de carbone (CO) : au programme de 3e ou
  hors-programme (culture/sécurité) ? Ajouté comme encart de vigilance.
- Les tests (eau de chaux, sulfate de cuivre anhydre, détonation du dihydrogène) sont
  supposés vus en activité expérimentale ; à confirmer qu'ils sont attendus au contrôle.
- Vérifier les valeurs de masses de l'exemple Lavoisier (12 g C + 32 g O2 = 44 g CO2) :
  elles sont exactes en masses molaires mais présentées ici sans introduire la mole,
  volontairement (hors programme 3e).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
```

---

_208 fiches assemblées._
