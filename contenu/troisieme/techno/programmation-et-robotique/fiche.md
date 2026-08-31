---
id: 3e-techno-programmation-et-robotique
titre: Programmation et robotique
voie: generale
niveau: troisieme
parcours: techno
matiere: techno
programme: Cycle 4 — Technologie (programme officiel)
duree_lecture_min: 8
prerequis:
  - Notions de base de Scratch
  - Chaîne d'information (capteurs, actionneurs)
statut: brouillon
relu_par: null
---

# Programmation et robotique

Faire fonctionner un objet technique programmable, comme un **robot**, c'est lui donner
une suite d'instructions à exécuter : un **programme**. Cette partie relève du thème
« L'informatique et la programmation » du cycle 4. En classe, on utilise souvent un
**langage par blocs** comme **Scratch**.

## Algorithme et programme

- Un **algorithme** est une **suite ordonnée d'instructions** qui permet de résoudre un
  problème ou d'accomplir une tâche (comme une recette de cuisine).
- Un **programme** est l'écriture de cet algorithme dans un **langage** compris par la
  machine (Scratch, Python…).

L'ordinateur (ou le robot) exécute les instructions **dans l'ordre**, l'une après l'autre.

## Les instructions de base

Un programme s'appuie sur quelques structures fondamentales :

- la **séquence** : des instructions exécutées **l'une après l'autre**, dans l'ordre ;
- la **boucle** (répétition) : on répète des instructions, soit un **nombre de fois** connu
  (« répéter 4 fois »), soit **tant qu'une condition** est vraie (« répéter jusqu'à… ») ;
- la **condition** (test) : « **si** … **alors** … **sinon** … » ; l'action dépend d'un test
  (par exemple : *si* un obstacle est détecté, *alors* tourner).

## Les variables

Une **variable** est une **case mémoire** qui porte un nom et **retient une valeur** que le
programme peut lire et modifier (un score, un compteur, une distance mesurée). On peut
l'augmenter, la diminuer ou la comparer.

## Programmer un robot

Un **robot** est un objet technique programmable qui **perçoit** son environnement, **décide**
et **agit**. Il relie directement la programmation à la chaîne d'information :

- il **acquiert** des informations grâce à ses **capteurs** (distance, ligne, lumière, contact) ;
- son programme **traite** ces informations et prend des **décisions** (souvent avec des
  conditions) ;
- il **agit** grâce à ses **actionneurs** (moteurs, roues, LED, buzzer).

> Exemple : *un robot qui suit une ligne noire.* **Si** le capteur voit la ligne, **alors**
> avancer ; **sinon**, tourner pour la retrouver. Cette instruction est **répétée en boucle**.

## Événements et entrées

Beaucoup de programmes réagissent à des **événements** : « quand le drapeau vert est cliqué »,
« quand une touche est pressée », « quand le capteur est activé ». Le programme attend un
événement puis exécute les instructions associées.

## Tester et corriger : le débogage

Un programme fonctionne rarement du premier coup. On le **teste**, on repère les erreurs
(**bogues**) et on les **corrige** : c'est le **débogage**. On procède par essais et
améliorations successifs, exactement comme dans la démarche de projet.

## Décomposer un problème

Pour programmer une tâche compliquée, on la **décompose** en tâches plus simples. On peut créer
des **blocs** (ou fonctions) que l'on réutilise : cela rend le programme plus clair et plus
court.

## Ce qu'il faut retenir

- Un **algorithme** est une suite ordonnée d'instructions ; un **programme** l'écrit dans un
  langage compris par la machine.
- Trois structures de base : la **séquence**, la **boucle** (répétition) et la **condition**
  (si… alors… sinon).
- Une **variable** retient une valeur (score, compteur…) que le programme peut modifier.
- Un **robot** perçoit (capteurs), décide (programme, conditions) et agit (actionneurs).
- On **teste** et on **corrige** son programme : c'est le **débogage**.

## Les erreurs à éviter

- **Croire que l'ordre des instructions n'a pas d'importance.** Un programme s'exécute dans
  l'ordre : changer l'ordre change le résultat.
- **Confondre boucle et condition.** La boucle **répète** ; la condition **choisit** selon un test.
- **Oublier la condition d'arrêt d'une boucle « tant que ».** Sans elle, le programme tourne
  sans fin (boucle infinie).
- **Confondre capteur et actionneur sur un robot.** Le capteur perçoit ; l'actionneur agit.
- **Penser qu'un programme marche toujours du premier coup.** Il faut le tester et le déboguer.
