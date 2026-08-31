---
id: 4e-techno-programmation-evenementielle
titre: "Programmation événementielle"
voie: generale
niveau: quatrieme
parcours: techno
matiere: techno
programme: "Cycle 4 — Technologie (programme officiel)"
theme: "L'informatique et la programmation"
duree_lecture_min: 12
prerequis:
  - Notions d'algorithme, boucle et condition (5e)
  - Chaîne d'information, capteurs et actionneurs (4e)
statut: brouillon
relu_par: null
---

# Programmation événementielle

> Quand tu appuies sur une touche, cliques sur un bouton ou secoues une manette, le
> programme **réagit tout de suite**. C'est le principe de la **programmation
> événementielle** : le programme **attend des événements** et **exécute** le code
> correspondant quand ils se produisent. C'est ainsi que fonctionnent les jeux, les applis
> et beaucoup d'objets techniques.

---

## 1. Qu'est-ce qu'un événement ?

Un **événement** est **quelque chose qui se produit** et auquel le programme peut réagir :

- une action de l'utilisateur : **clic**, **appui sur une touche**, toucher l'écran ;
- un signal d'un **capteur** : bouton pressé, détecteur activé, température dépassée ;
- un événement du système : le programme **démarre**, un **temps** est écoulé, deux objets
  se **touchent** (dans un jeu).

> **Programmation événementielle** = façon d'écrire un programme où l'on définit **quel
> bloc de code se déclenche quand tel événement arrive**.

On l'exprime souvent par la formule : **« QUAND … alors FAIRE … »**.

---

## 2. Le modèle « QUAND … FAIRE … »

Dans un logiciel comme **Scratch**, un programme événementiel est fait de **scripts** qui
commencent chacun par un **bloc-événement** (un « chapeau ») :

| Bloc-événement (QUAND) | Se déclenche… |
|---|---|
| *Quand le drapeau vert est cliqué* | au démarrage du programme |
| *Quand la touche [espace] est pressée* | quand on appuie sur cette touche |
| *Quand ce lutin est cliqué* | quand on clique dessus |
| *Quand je reçois [message]* | quand un autre script envoie ce message |

Sous chaque « chapeau », on place les **actions** (avancer, jouer un son, changer un
score…). Plusieurs scripts peuvent ainsi **attendre en même temps** des événements
différents et réagir **en parallèle**.

> **Exemple.** *Quand la touche → est pressée → avancer de 10 pas.* Le lutin ne bouge que
> lorsqu'on appuie sur la flèche : le mouvement est **déclenché par l'événement**.

---

## 3. Événementiel ≠ séquentiel

- Un programme **séquentiel** s'exécute **du début à la fin, dans l'ordre**, sans attendre.
- Un programme **événementiel** **attend** : il ne fait rien tant que l'événement prévu ne
  s'est pas produit, puis il exécute le bloc correspondant.

> **Image.** Le séquentiel, c'est une recette qu'on suit ligne par ligne. L'événementiel,
> c'est une sonnette : on attend que quelqu'un appuie, et **alors** on va ouvrir.

---

## 4. Les briques utiles avec les événements

La programmation événementielle se combine avec les notions de base de l'algorithmique :

- **Variables** : mémoriser une information qui change (un **score**, un nombre de vies).
- **Conditions (SI … ALORS)** : agir seulement dans certains cas (*si score = 10 → gagné*).
- **Boucles** : répéter des actions (*répéter 4 fois*, *répéter indéfiniment*).
- **Messages / diffusion** : un script **envoie** un message, un autre **le reçoit** et
  réagit — c'est un moyen de faire **communiquer** plusieurs parties du programme.

> **Exemple combiné.** *Quand le drapeau vert est cliqué → mettre score à 0 ; répéter
> indéfiniment : si le lutin touche la pièce → ajouter 1 au score.*

---

## 5. Programmer un objet technique

Sur une carte programmable (**micro:bit**, **Arduino**…), le principe est le même :

- **QUAND le bouton A est pressé → afficher un cœur** ;
- **QUAND on secoue la carte → jouer un son** ;
- **QUAND la température dépasse 30 °C → allumer une DEL**.

L'objet **acquiert** l'événement (capteur/bouton), le programme **traite** la condition,
puis **communique** ou **agit** : on retrouve la **chaîne d'information**.

---

## Ce qu'il faut retenir

- La **programmation événementielle** consiste à écrire un programme qui **réagit à des
  événements** (clic, touche, capteur, message, démarrage…).
- Chaque script commence par un **bloc-événement** : **« QUAND … alors FAIRE … »**.
- Elle se distingue du **séquentiel** : le programme **attend** l'événement avant d'agir,
  et plusieurs scripts peuvent réagir **en parallèle**.
- On la combine avec **variables**, **conditions**, **boucles** et **messages** ; sur un
  objet technique, elle relie **capteur → traitement → action** (chaîne d'information).

## Les erreurs à éviter

- **Confondre événementiel et séquentiel.** Le séquentiel se déroule dans l'ordre sans
  attendre ; l'événementiel **attend** un déclencheur.
- **Oublier le bloc-événement.** Sans « QUAND … », les actions ne savent pas **quand** se
  déclencher : le script ne démarre pas.
- **Croire qu'un seul script tourne à la fois.** Plusieurs scripts peuvent guetter des
  événements **en même temps** et s'exécuter en parallèle.
- **Confondre événement et action.** L'événement est le **déclencheur** (le clic) ;
  l'action est ce que le programme **fait ensuite** (avancer, jouer un son).
- **Confondre une variable et un événement.** Une variable **mémorise** une valeur (le
  score) ; un événement **déclenche** l'exécution d'un bloc.
