---
id: 2nde-snt-donnees-structurees
titre: "Les données structurées et leur traitement"
voie: generale
niveau: seconde
parcours: snt
matiere: snt
programme: "Seconde — SNT (programme officiel)"
duree_lecture_min: 7
prerequis:
  - Notion de fichier
  - Utilisation d'un tableur
statut: brouillon
relu_par: null
---

# Les données structurées et leur traitement

## Qu'est-ce qu'une donnée ?

Une **donnée** est une information élémentaire, par exemple un nom, une date de naissance, une température, un prix. Les données prennent tout leur sens quand elles sont **organisées**, c'est-à-dire **structurées**, pour pouvoir être facilement recherchées, triées et analysées.

## Données structurées : la table

La façon la plus courante d'organiser des données est la **table** (ou tableau de données) :

- Chaque **ligne** correspond à un **objet** (aussi appelé enregistrement ou entité), par exemple une personne, un livre, un film.
- Chaque **colonne** correspond à un **attribut** (aussi appelé descripteur), par exemple le nom, l'année, le prix.
- À l'intersection d'une ligne et d'une colonne se trouve une **valeur**.

Exemple d'une table de films :

| titre | année | durée (min) | genre |
|-------|-------|-------------|-------|
| Film A | 2015 | 120 | aventure |
| Film B | 2020 | 95 | comédie |

Ici, chaque ligne est un **objet** (un film) et chaque colonne un **attribut** (titre, année, durée, genre).

## Le type d'une donnée

Chaque attribut a un **type** :

- **texte** (chaîne de caractères) : un titre, un nom ;
- **nombre entier** : une année, un nombre de pages ;
- **nombre décimal** : un prix, une note ;
- **booléen** : vrai/faux (par exemple « disponible ») ;
- **date**.

Connaître le type est essentiel : on peut **calculer** sur des nombres, mais pas additionner des textes.

## Formats de fichiers pour données structurées

- Le format **CSV** (*Comma-Separated Values*) : un fichier texte simple où les valeurs d'une ligne sont **séparées par des virgules** (ou des points-virgules). La première ligne contient souvent les **noms des colonnes**.
- Le format **JSON**, utilisé pour échanger des données entre programmes.

Un fichier CSV s'ouvre dans un **tableur** (LibreOffice Calc, Excel…) ou se lit avec un programme.

## Traiter les données

À partir d'une table, on peut :

- **Rechercher** des objets répondant à un critère (ex. les films après 2018) ;
- **Trier** selon un attribut (ex. par année croissante) ;
- **Filtrer** selon une condition (ex. genre = comédie) ;
- **Calculer** : nombre d'objets, somme, moyenne, minimum, maximum d'un attribut ;
- **Croiser** plusieurs tables partageant un attribut commun.

Ces traitements se font avec un **tableur** ou par **programmation** (par exemple en Python).

## Le « Big Data » et les métadonnées

- Le **Big Data** (« mégadonnées ») désigne des ensembles de données **si volumineux** qu'ils exigent des outils spécifiques pour être stockés et analysés. Ils proviennent des sites, capteurs, objets connectés, réseaux sociaux…
- Les **métadonnées** sont des « données sur les données » : par exemple, pour une photo, la date, l'heure, le modèle d'appareil et parfois le lieu (coordonnées GPS). Elles sont très utiles mais peuvent poser des questions de **vie privée**.

## Le stockage : local ou dans le « cloud »

- **Stockage local** : sur l'ordinateur ou une clé USB.
- **Stockage distant (cloud)** : sur des serveurs accessibles par Internet, dans d'immenses **centres de données** (*data centers*). Pratique (accès partout, partage), mais soulève des questions de **confidentialité**, de **dépendance** et de **consommation d'énergie**.

## Enjeux : protection des données

Les données personnelles sont encadrées par la loi. En Europe, le **RGPD** (Règlement général sur la protection des données) impose des règles : consentement, droit d'accès, droit de rectification et de suppression. En France, la **CNIL** veille au respect de ces droits.

## Ce qu'il faut retenir

- Une donnée prend son sens quand elle est **structurée**, souvent dans une **table** : **lignes** (objets), **colonnes** (attributs), **valeurs**.
- Chaque attribut a un **type** (texte, entier, décimal, booléen, date).
- Le **CSV** est un format texte courant, ouvrable dans un **tableur**.
- On **recherche, trie, filtre et calcule** sur les données.
- **Big Data**, **métadonnées**, **cloud** et **RGPD** sont des notions clés liées aux données.

## Les erreurs à éviter

- « Ligne = attribut, colonne = objet » : c'est l'inverse — **une ligne = un objet**, **une colonne = un attribut**.
- « On peut additionner n'importe quelle colonne » : seulement les colonnes de type **nombre** ; on n'additionne pas des textes.
- « Le cloud, c'est un nuage magique sans lieu physique » : les données sont bien stockées sur des **serveurs réels** consommant de l'énergie.
- « Les métadonnées sont sans importance » : elles peuvent révéler le lieu et le moment d'une photo, donc des informations privées.
