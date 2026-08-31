---
id: 5e-techno-programmation-et-capteurs
titre: Programmation et capteurs
voie: generale
niveau: cinquieme
parcours: techno
matiere: techno
programme: Cycle 4 — Technologie (programme officiel)
duree_lecture_min: 8
prerequis:
  - Chaîne d'énergie
  - Notion d'objet technique programmable
statut: brouillon
relu_par: null
---

# Programmation et capteurs

Une porte de magasin qui s'ouvre toute seule, un lampadaire qui s'allume à la nuit
tombée, un robot qui évite un obstacle : ces objets **prennent des informations** sur
leur environnement grâce à des **capteurs**, puis **décident** quoi faire grâce à un
**programme**. Ce chapitre présente la **chaîne d'information** et les bases de la
**programmation**.

## La chaîne d'information

À côté de la chaîne d'énergie, un objet technique possède souvent une **chaîne
d'information** qui **acquiert**, **traite** et **communique** des informations. Elle
comporte trois fonctions :

1. **Acquérir** : recueillir une information sur l'environnement grâce à un **capteur**
   (température, lumière, présence, distance...).
2. **Traiter** : décider quoi faire à partir de cette information, grâce à un
   **programme** exécuté par une carte ou un microcontrôleur.
3. **Communiquer / agir** : transmettre une consigne pour déclencher une action, souvent
   sur la chaîne d'énergie (allumer un moteur, une lampe, un signal).

## Les capteurs

Un **capteur** est un composant qui **détecte une grandeur physique** et la transforme
en une **information** utilisable (souvent un signal électrique). Exemples :

- capteur de **lumière** (photorésistance) : mesure la luminosité ;
- capteur de **température** : mesure la chaleur ;
- capteur de **présence** ou de **mouvement** : détecte quelqu'un qui approche ;
- capteur de **distance** (ultrason) : mesure la distance d'un obstacle ;
- **bouton-poussoir** : détecte un appui.

On distingue deux types d'informations :

- une information **logique** (ou « tout ou rien ») : deux états seulement, **oui/non**,
  **0/1**, appuyé/relâché ;
- une information **analogique** : une valeur qui varie de façon continue (une
  température de 19,3 °C, une luminosité plus ou moins forte).

Attention : un capteur **détecte** une information (c'est une entrée), alors qu'un
**actionneur** (moteur, lampe, LED, buzzer) **produit une action** (c'est une sortie).

## Le programme et l'algorithme

Un **algorithme** est une **suite d'instructions ordonnées** qui décrit comment
résoudre un problème. Un **programme** est la traduction de cet algorithme dans un
**langage** compris par la machine (par exemple un langage à blocs comme Scratch, ou du
texte).

Les instructions s'enchaînent selon des **structures** :

- la **séquence** : les instructions s'exécutent **l'une après l'autre**, dans l'ordre ;
- le **test** (structure conditionnelle) : **SI** une condition est vraie **ALORS** on
  fait une action, **SINON** une autre ;
- la **boucle** (répétition) : on **répète** des instructions (un nombre de fois donné,
  ou **tant que** une condition reste vraie).

## Un exemple : l'éclairage automatique

Programme d'un lampadaire à détecteur de lumière :

- **Acquérir** : lire le capteur de luminosité.
- **Traiter (test)** : **SI** la luminosité est faible (il fait nuit) **ALORS** allumer
  la lampe, **SINON** l'éteindre.
- **Agir** : commander la lampe (actionneur).
- **Boucle** : répéter cette vérification en permanence.

Ce petit programme combine un **capteur** (entrée), un **test** (traitement) et un
**actionneur** (sortie) : c'est exactement une chaîne d'information.

## Ce qu'il faut retenir

- La **chaîne d'information** comporte trois fonctions : **acquérir**, **traiter**,
  **communiquer/agir**.
- Un **capteur** détecte une grandeur (entrée) ; un **actionneur** produit une action
  (sortie). Il ne faut pas les confondre.
- Une information peut être **logique** (tout ou rien, 0/1) ou **analogique** (valeur
  continue).
- Un **programme** traduit un **algorithme** ; il utilise la **séquence**, le **test**
  (SI... ALORS... SINON) et la **boucle** (répétition).

## Les erreurs à éviter

- **Confondre capteur et actionneur.** Le capteur détecte (entrée) ; l'actionneur agit
  (sortie).
- **Confondre chaîne d'énergie et chaîne d'information.** L'énergie fait fonctionner ;
  l'information commande et décide.
- **Oublier la condition d'un test.** Un « SI » a besoin d'une condition claire
  (vraie ou fausse) pour choisir l'action.
- **Croire qu'une boucle tourne « pour toujours » par hasard.** La répétition est
  décidée par le programme (nombre de fois ou condition).
