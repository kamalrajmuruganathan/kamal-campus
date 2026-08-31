---
id: 1nsi-architecture-et-systeme
titre: "Architecture machine et système d'exploitation"
voie: generale
niveau: premiere
parcours: nsi
matiere: nsi
programme: "Première — spécialité NSI (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Représentation binaire des données
  - Notion de programme et d'instruction
statut: brouillon
relu_par: null
---

# Architecture machine et système d'exploitation

> Comment une machine exécute-t-elle un programme ? Ce chapitre décrit
> l'**architecture de von Neumann**, les **portes logiques** qui composent le
> processeur, le rôle du **système d'exploitation** et quelques **commandes** de
> base pour dialoguer avec lui.

---

# 1. Le modèle de von Neumann

Depuis les années 1940, la quasi-totalité des ordinateurs suivent le **modèle de
von Neumann**. Il distingue quatre parties reliées par des **bus** (des « fils »
qui transportent les données) :

- l'**unité de commande** (*control unit*) : elle **lit** et **décode** les
  instructions ;
- l'**unité arithmétique et logique** (**UAL** / *ALU*) : elle **effectue les
  calculs** (additions, comparaisons, opérations logiques) ;
- la **mémoire** : elle stocke à la fois les **données** ET le **programme**
  (c'est l'idée clé de von Neumann : programme et données au même endroit) ;
- les **entrées-sorties** (clavier, écran, disque) : les échanges avec
  l'extérieur.

L'unité de commande et l'UAL forment le **processeur** (**CPU**, *Central
Processing Unit*).

---

# 2. Le cycle d'exécution d'une instruction

Le processeur répète sans cesse le même cycle :

1. **Charger** l'instruction depuis la mémoire (*fetch*),
2. **Décoder** l'instruction (*decode*),
3. **Exécuter** l'opération, souvent dans l'UAL (*execute*).

La vitesse est cadencée par une **horloge** ; sa **fréquence** (en gigahertz, GHz)
donne le nombre de cycles par seconde. 3 GHz ≈ 3 milliards de cycles/seconde.

---

# 3. Des transistors aux portes logiques

Un processeur est fabriqué à partir de milliards de **transistors**, de minuscules
interrupteurs commandés électriquement (passant ou bloqué → 1 ou 0).

En les combinant, on réalise des **portes logiques**, briques du calcul binaire :

| Porte | Rôle | Exemple |
|---|---|---|
| **NON** (NOT) | inverse | NON 0 = 1 |
| **ET** (AND) | 1 si les deux entrées valent 1 | 1 ET 0 = 0 |
| **OU** (OR) | 1 si au moins une entrée vaut 1 | 1 OU 0 = 1 |

En assemblant des portes, on construit des circuits capables d'**additionner**,
de **comparer**, bref d'effectuer les opérations de l'UAL.

Aujourd'hui, processeur, mémoire et périphériques peuvent être regroupés sur une
seule puce : un **système sur puce** (*System on Chip*, SoC), courant dans les
smartphones.

---

# 4. Le système d'exploitation

Le **système d'exploitation** (*Operating System*, OS) est le programme qui
**gère la machine** et fait l'**interface** entre le matériel et les applications.
Exemples : **Linux**, Windows, macOS, Android.

Ses grands rôles :

- **gérer les processus** : un **processus** est un programme en cours
  d'exécution ; l'OS répartit le temps du processeur entre eux (plusieurs
  programmes semblent tourner « en même temps ») ;
- **gérer la mémoire** : attribuer et protéger la mémoire de chaque programme ;
- **gérer les ressources et périphériques** : disque, réseau, clavier… ;
- **gérer les fichiers** : organiser les données sur le disque.

---

# 5. Dialoguer avec le système : quelques commandes

On peut piloter l'OS par un **terminal** en tapant des **commandes** (courant sous
Linux). Quelques commandes de base :

| Commande | Rôle |
|---|---|
| `pwd` | affiche le dossier courant |
| `ls` | liste le contenu d'un dossier |
| `cd dossier` | change de dossier |
| `mkdir dossier` | crée un dossier |
| `cat fichier` | affiche le contenu d'un fichier |
| `rm fichier` | supprime un fichier |

Les fichiers sont organisés en **arborescence** : des dossiers contenant des
dossiers et des fichiers, à partir d'une **racine**.

---

# 6. Le réseau, en bref

Pour communiquer, les machines suivent des **protocoles** (des règles communes).
Sur Internet, chaque machine possède une **adresse IP** qui l'identifie. Les
données sont découpées en **paquets** acheminés à travers le réseau, puis
réassemblées à l'arrivée.

---

# Ce qu'il faut retenir

- Le **modèle de von Neumann** : unité de commande, **UAL**, **mémoire** (données
  ET programme au même endroit), entrées-sorties, reliés par des **bus**.
- Le **processeur** (CPU) répète le cycle **charger → décoder → exécuter**, cadencé
  par une **horloge**.
- Les **transistors** réalisent des **portes logiques** (NON, ET, OU) qui
  composent l'UAL.
- Le **système d'exploitation** gère processus, mémoire, ressources et fichiers ;
  un **processus** est un programme en cours d'exécution.
- Commandes de base : `ls`, `cd`, `pwd`, `mkdir`, `cat`, `rm`.
- Chaque machine sur Internet a une **adresse IP** ; les données circulent en
  **paquets**.

# Les erreurs à éviter

- Confondre **mémoire** et **processeur** : le processeur calcule, la mémoire
  stocke.
- Croire que la mémoire de von Neumann sépare programme et données : c'est
  justement le contraire, ils y **cohabitent**.
- Confondre **programme** (fichier sur le disque) et **processus** (programme
  **en cours d'exécution**).
- Penser que la fréquence en GHz mesure une quantité de mémoire : c'est un nombre
  de **cycles par seconde**.
