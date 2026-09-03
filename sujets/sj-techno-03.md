---
id: sj-techno-03
titre: "Brevet — Technologie : programmation et robotique (algorithme, capteurs, actionneurs)"
examen: "Brevet — épreuve de sciences (technologie)"
niveau: troisieme
matiere: techno
statut: brouillon
relu_par: null
---

# Brevet des collèges — Épreuve de sciences : partie technologie (entraînement)

**Durée : 1 h 00 pour la partie technologie** — **Barème indicatif : 50 points** —
**Calculatrice autorisée.**

Cette partie comporte **trois exercices indépendants** portant sur l'algorithme,
la programmation et la robotique. Toutes les réponses doivent être **justifiées**
en s'appuyant sur les documents (décrits en mots) et sur les connaissances. Le
soin, la clarté et la maîtrise de la langue sont valorisés.

| Exercice | 1 | 2 | 3 | Total |
|---|---|---|---|---|
| Points | 18 | 16 | 16 | 50 |

Support d'étude : un **petit robot suiveur de ligne** programmé en classe avec des
blocs de type Scratch.

---

## Exercice 1 — Capteurs, actionneurs et algorithme (18 points)

**Contexte.** Le robot doit suivre une **ligne noire** tracée sur un sol blanc,
grâce à des capteurs, et s'arrêter s'il rencontre un obstacle.

**Document 1 — Équipement du robot.**
- Deux **capteurs de lumière** placés sous le robot : ils renvoient « noir » ou
  « blanc » selon la couleur du sol.
- Un **capteur de distance** à l'avant (ultrasons) : il mesure la distance à
  l'obstacle en centimètres.
- Deux **moteurs**, un pour la roue gauche, un pour la roue droite.

**Document 2 — Vocabulaire.**
Un **capteur** acquiert une information sur l'environnement. Un **actionneur**
agit sur l'environnement (il produit un mouvement, de la lumière, du son…). Un
**algorithme** est une suite d'instructions ordonnées permettant de résoudre un
problème.

**Document 3 — Règle de suivi de ligne.**
- Si les deux capteurs voient « noir », le robot est sur la ligne : il **avance
  tout droit**.
- Si seul le capteur **gauche** voit « noir », le robot dévie à droite : il doit
  **tourner à gauche**.
- Si seul le capteur **droit** voit « noir », il doit **tourner à droite**.

### Questions

1. Dans la liste du document 1, classer chaque élément en **capteur** ou
   **actionneur**. **(4 points)**
2. Le capteur de distance renvoie une valeur en centimètres. Le capteur de
   lumière renvoie « noir » ou « blanc ». Lequel donne une information de type
   **« vrai/faux »** (deux états seulement) ? **(2 points)**
3. À l'aide du document 3, indiquer ce que fait le robot dans chacun de ces cas :
   (a) gauche = noir, droite = blanc ; (b) gauche = noir, droite = noir.
   **(4 points)**
4. Expliquer avec vos mots ce qu'est un **algorithme** (document 2). **(3 points)**
5. Pourquoi dit-on que le robot **réagit à son environnement** ? Illustrer avec un
   exemple pris dans l'énoncé. **(3 points)**
6. Citer une **grandeur** que le capteur de distance permet de connaître.
   **(2 points)**

---

## Exercice 2 — Lire et comprendre un programme (16 points)

**Contexte.** Voici l'algorithme du robot, écrit en langage courant (pseudo-code
inspiré des blocs Scratch).

**Document 1 — Algorithme du robot.**
```
Répéter indéfiniment :
    Si distance_obstacle < 10 cm alors
        arrêter les deux moteurs
    Sinon
        Si capteur_gauche = noir ET capteur_droit = noir alors
            avancer tout droit
        Sinon si capteur_gauche = noir alors
            tourner à gauche
        Sinon si capteur_droit = noir alors
            tourner à droite
        Sinon
            arrêter les deux moteurs   (ligne perdue)
```

### Questions

1. Quelle **structure de contrôle** est utilisée pour que le robot répète sans
   cesse le même comportement ? **(2 points)**
2. Que fait le robot si un obstacle se trouve à **6 cm** devant lui ? Justifier en
   citant la ligne du programme. **(3 points)**
3. Le robot avance sur la ligne (les deux capteurs voient « noir ») et un obstacle
   apparaît à 8 cm. Quelle instruction est exécutée en priorité ? Pourquoi ?
   **(4 points)**
4. Que se passe-t-il si **aucun** des deux capteurs ne voit « noir » (les deux
   voient blanc) ? À quoi sert ce cas ? **(4 points)**
5. On veut qu'au lieu de simplement s'arrêter devant un obstacle, le robot **émette
   un bip sonore** puis s'arrête. Indiquer où (avant ou après « arrêter les deux
   moteurs ») ajouter l'instruction « jouer un son ». **(3 points)**

---

## Exercice 3 — Modifier le comportement du robot (16 points)

**Contexte.** L'équipe veut améliorer le robot pour une démonstration.

**Document 1 — Objectif.**
Le robot doit désormais, quand il rencontre un obstacle proche (moins de 10 cm),
**s'arrêter, reculer 1 seconde, puis tourner à droite** pour contourner
l'obstacle, au lieu de rester bloqué.

### Questions

1. Le comportement souhaité est une **suite d'actions ordonnées**. Écrire, en
   langage courant, la suite des trois actions à exécuter, **dans le bon ordre**,
   lorsque distance_obstacle < 10 cm. **(3 points)**

2. **Développement construit (10 points).** En une dizaine de lignes, expliquer la
   **démarche** pour modifier puis vérifier le programme du robot. Votre texte
   devra :
   - dire quelle partie du programme du document 1 (exercice 2) doit être modifiée ;
   - expliquer pourquoi il est important de **tester** le robot après modification ;
   - proposer un test simple permettant de vérifier que le nouveau comportement
     fonctionne (quelle situation créer, quel résultat observer) ;
   - indiquer ce qu'on fait si le test échoue (notion de correction / débogage).

3. Le robot fonctionne parfaitement en salle éclairée mais confond « noir » et
   « blanc » en plein soleil. Quel **capteur** est en cause, et pourquoi la lumière
   ambiante peut-elle le perturber ? **(3 points)**

---

## Corrigé

### Exercice 1 — Capteurs, actionneurs et algorithme

**1.** Capteurs : les **deux capteurs de lumière** et le **capteur de distance**
(ultrasons). Actionneurs : les **deux moteurs** (roue gauche, roue droite).

**2.** Le **capteur de lumière** donne une information de type « vrai/faux » : il
ne renvoie que **deux états** (« noir » ou « blanc »). Le capteur de distance,
lui, renvoie une valeur numérique (des centimètres).

**3.** (a) Gauche = noir, droite = blanc : seul le capteur gauche voit noir, donc
le robot **tourne à gauche**. (b) Gauche = noir, droite = noir : les deux voient
noir, donc le robot **avance tout droit**.

**4.** Un algorithme est une **suite d'instructions ordonnées** (les étapes à
suivre dans un ordre précis) qui permet de résoudre un problème ou d'accomplir une
tâche — ici, suivre la ligne.

**5.** Le robot réagit à son environnement parce qu'il **acquiert des informations
avec ses capteurs et adapte son action** en conséquence. Exemple : s'il voit un
obstacle proche avec le capteur de distance, il s'arrête ; selon la couleur vue
par les capteurs de lumière, il tourne à gauche ou à droite.

**6.** Le capteur de distance permet de connaître la **distance** (en centimètres)
entre le robot et l'obstacle situé devant lui.

### Exercice 2 — Lire et comprendre un programme

**1.** C'est la structure **« Répéter indéfiniment »** (une boucle infinie) qui
fait répéter sans cesse le même comportement.

**2.** À 6 cm, la condition `distance_obstacle < 10 cm` est **vraie** (6 < 10),
donc le robot exécute **« arrêter les deux moteurs »** : il s'arrête.

**3.** L'instruction exécutée en priorité est **« arrêter les deux moteurs »**
(car l'obstacle est à 8 cm, donc < 10 cm). En effet, le test de l'obstacle est
placé **en premier** (dans le « Si… alors »), avant le suivi de ligne : la
sécurité passe donc avant l'avance sur la ligne.

**4.** Si les deux capteurs voient blanc, aucune condition « noir » n'est vraie :
on tombe dans le dernier **« Sinon »** et le robot **arrête les deux moteurs**
(« ligne perdue »). Ce cas sert à **arrêter le robot quand il n'est plus sur la
ligne**, pour qu'il ne parte pas n'importe où.

**5.** Il faut ajouter « jouer un son » **avant** « arrêter les deux moteurs »
dans le bloc de l'obstacle : ainsi le robot **bipe d'abord, puis s'arrête**. (Si
on le place après l'arrêt, le bip a lieu une fois le robot immobile, ce qui reste
acceptable ; l'important est qu'il soit dans le bloc « distance < 10 cm ».)

### Exercice 3 — Modifier le comportement du robot

**1.** Lorsque distance_obstacle < 10 cm :
1) arrêter les deux moteurs ;
2) reculer pendant 1 seconde ;
3) tourner à droite.
(Dans cet ordre.)

**2.** Éléments attendus :
- On modifie le **bloc « Si distance_obstacle < 10 cm alors »** : au lieu de la
  seule instruction « arrêter les deux moteurs », on y met la suite arrêter →
  reculer 1 s → tourner à droite.
- Il faut **tester** parce qu'un programme peut contenir une erreur (mauvais
  ordre, mauvais sens de rotation, durée trop courte) qu'on ne voit qu'à
  l'exécution ; on vérifie que le robot fait vraiment ce qu'on attend.
- Test simple : placer un **obstacle sur la trajectoire** du robot et observer
  qu'il s'arrête, recule environ 1 seconde puis tourne à droite pour le
  contourner.
- Si le test échoue, on **corrige le programme** (débogage) : on repère l'étape
  fautive, on modifie l'instruction (ordre, durée, sens), puis on **teste à
  nouveau** jusqu'à obtenir le bon comportement.

**3.** Le capteur en cause est le **capteur de lumière**. Il distingue « noir » et
« blanc » d'après la quantité de lumière réfléchie par le sol ; en plein soleil,
la **lumière ambiante très forte** vient s'ajouter et fausse la mesure, si bien
que le capteur peut prendre du blanc éclairé pour autre chose et **confondre les
deux couleurs**.
