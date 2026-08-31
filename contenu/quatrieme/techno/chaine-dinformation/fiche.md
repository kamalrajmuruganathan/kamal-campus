---
id: 4e-techno-chaine-dinformation
titre: "La chaîne d'information"
voie: generale
niveau: quatrieme
parcours: techno
matiere: techno
programme: "Cycle 4 — Technologie (programme officiel)"
theme: "Les objets techniques, les services et les changements induits dans la société"
duree_lecture_min: 11
prerequis:
  - Fonctions d'un objet technique (5e)
  - Notion de capteur et d'actionneur (5e)
statut: brouillon
relu_par: null
---

# La chaîne d'information

> Comment une porte automatique « sait-elle » que tu arrives ? Comment un radiateur
> connecté « sait-il » qu'il fait trop froid ? Dans un objet technique, l'information
> suit un chemin bien organisé : la **chaîne d'information**. Elle collabore avec la
> **chaîne d'énergie** pour que l'objet fasse ce qu'on attend de lui.

---

## 1. Deux chaînes dans un objet technique

Un objet technique automatisé possède deux chaînes qui travaillent ensemble :

- La **chaîne d'énergie** *fournit la puissance* pour agir (alimenter, distribuer,
  convertir, transmettre l'énergie).
- La **chaîne d'information** *gère les informations* : elle acquiert, traite et
  communique les données qui pilotent l'objet.

> **Image simple.** La chaîne d'énergie, ce sont les « muscles » de l'objet ; la chaîne
> d'information, c'est son « cerveau et ses sens ».

---

## 2. Les trois maillons de la chaîne d'information

La chaîne d'information se décrit toujours en **trois fonctions** : **ACQUÉRIR → TRAITER →
COMMUNIQUER**.

| Fonction | Rôle | Exemples de composants |
|---|---|---|
| **Acquérir** | Recueillir une information sur l'objet ou son environnement | capteur, bouton, clavier, antenne |
| **Traiter** | Analyser l'information et décider | microcontrôleur, carte programmable, processeur |
| **Communiquer** | Transmettre l'information (à l'utilisateur ou à la chaîne d'énergie) | écran, DEL, buzzer, émetteur radio, fil |

> **Exemple : un portail automatique.** La **télécommande** (acquérir) envoie un signal →
> la **carte électronique** (traiter) vérifie le code → elle **communique** l'ordre à la
> chaîne d'énergie qui alimente le **moteur**. L'information et l'énergie coopèrent.

---

## 3. Comment circule l'information : le signal

L'information voyage sous forme de **signal**. Un signal est une grandeur physique
(tension électrique, lumière, onde radio, son) qui **porte une information**.

On distingue deux types de signaux :

- **Signal analogique** : il varie de façon **continue** et peut prendre une infinité de
  valeurs (ex. la tension qui suit la température).
- **Signal numérique** : il ne prend que des valeurs **discrètes**, le plus souvent **0**
  ou **1** (courant absent / présent). C'est le langage des ordinateurs.

> **À retenir.** Dans un objet numérique, l'information finit toujours par être codée en
> **binaire** : des suites de **0** et de **1** appelés **bits**.

---

## 4. Information et énergie : ne pas confondre

C'est un point d'examen important :

| | Chaîne d'énergie | Chaîne d'information |
|---|---|---|
| **Transporte** | de la puissance (pour agir) | des données (pour décider) |
| **Grandeur** | forte (watts, ampères) | faible (petits signaux) |
| **Composants** | moteur, résistance chauffante, pile, transformateur | capteur, microcontrôleur, écran |
| **Rôle** | faire *bouger / chauffer / éclairer* | *renseigner / commander* |

Le microcontrôleur (chaîne d'information) ne fournit pas assez de puissance pour faire
tourner un moteur : il **donne l'ordre**, et c'est la chaîne d'énergie qui **exécute**.

---

## 5. Représenter la chaîne d'information

On la représente par un **schéma en blocs** (aussi appelé chaîne fonctionnelle) :

```
   Information       ┌───────────┐   ┌───────────┐   ┌──────────────┐   Information
   d'entrée   ─────► │ ACQUÉRIR  │──►│  TRAITER  │──►│  COMMUNIQUER │ ─────► sortie
   (grandeur)        │ (capteur) │   │ (µcontrôl.)│   │ (écran, DEL) │      (message,
                     └───────────┘   └───────────┘   └──────────────┘       ordre)
```

Chaque bloc porte le **nom de la fonction** (verbe à l'infinitif) et, en dessous, le
**composant** qui la réalise.

---

## Ce qu'il faut retenir

- Un objet technique automatisé possède une **chaîne d'énergie** (les muscles) et une
  **chaîne d'information** (le cerveau et les sens).
- La chaîne d'information comporte trois fonctions : **ACQUÉRIR → TRAITER → COMMUNIQUER**.
- L'information circule sous forme de **signal** ; il peut être **analogique** (continu)
  ou **numérique** (0 / 1, en **bits**).
- La chaîne d'information **décide et commande** ; la chaîne d'énergie **fournit la
  puissance** pour agir.

## Les erreurs à éviter

- **Confondre les deux chaînes.** L'énergie fait agir ; l'information renseigne et commande.
  Un moteur appartient à la chaîne d'énergie, pas à la chaîne d'information.
- **Oublier un maillon.** Il y a bien **trois** fonctions : acquérir, traiter, communiquer.
  « Traiter » (la décision) est souvent oublié.
- **Croire qu'analogique = ancien et numérique = moderne.** La différence n'est pas l'âge :
  l'analogique varie en continu, le numérique par valeurs discrètes (0 / 1).
- **Écrire les fonctions comme des noms.** On nomme les fonctions par des **verbes** :
  *acquérir, traiter, communiquer*.
