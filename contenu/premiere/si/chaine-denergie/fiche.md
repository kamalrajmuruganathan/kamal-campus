---
id: 1si-chaine-denergie
titre: "La chaîne d'énergie"
voie: generale
niveau: premiere
parcours: si
matiere: si
programme: "Première — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 15
prerequis:
  - Analyse fonctionnelle des systèmes (Première SI)
  - Puissance électrique P = U × I (Seconde/collège)
statut: brouillon
relu_par: null
---

# La chaîne d'énergie

> La chaîne d'information décide ; la chaîne d'énergie **agit**. Elle prélève de
> l'énergie à une source, la met en forme, la convertit en énergie mécanique
> (le plus souvent) et la transmet jusqu'à l'effet final sur la matière d'œuvre.
> À chaque étape, une partie de l'énergie est perdue : le rendement mesure cette
> efficacité.

---

## 1. Les quatre fonctions de la chaîne d'énergie

La chaîne d'énergie s'organise en quatre fonctions successives :

- **ALIMENTER** : mettre à disposition l'énergie (secteur, batterie, air
  comprimé). Composants : batterie, alimentation, réseau ;
- **DISTRIBUER** : laisser passer ou non l'énergie vers l'actionneur, sur ordre
  de la chaîne d'information. Composants : **préactionneurs** (relais, contacteur,
  variateur, distributeur pneumatique) ;
- **CONVERTIR** : transformer l'énergie d'entrée en énergie mécanique. Composants :
  **actionneurs** (moteur, vérin, électroaimant) ;
- **TRANSMETTRE** : adapter et acheminer l'énergie mécanique vers l'effecteur.
  Composants : engrenages, poulies-courroie, réducteur, arbre, roue.

On termine par l'**effecteur**, qui agit directement sur la matière d'œuvre
(roue, pince, tapis).

---

## 2. Puissance et énergie

La **puissance** P est un débit d'énergie ; l'**énergie** E est la puissance
accumulée dans le temps.

- **E = P × t**  (avec E en joules J, P en watts W, t en secondes s) ;
- en électricité : **P = U × I**  (U en volts, I en ampères) ;
- en mécanique de rotation : **P = C × ω**  (C couple en N·m, ω vitesse
  angulaire en rad/s) ;
- en mécanique de translation : **P = F × v**  (F force en N, v vitesse en m/s).

Exemple : un moteur sous **U = 12 V** parcouru par **I = 3 A** reçoit une
puissance électrique **P = 12 × 3 = 36 W**.

---

## 3. Le rendement

Aucune conversion n'est parfaite : une partie de l'énergie est **dissipée**
(chaleur, frottements). Le **rendement η** compare l'énergie (ou la puissance)
**utile** en sortie à celle **absorbée** en entrée :

**η = P_utile / P_absorbée = E_utile / E_absorbée**

Le rendement est **sans unité**, compris entre 0 et 1 (souvent exprimé en %). Il
est **toujours inférieur à 1** : on ne crée pas d'énergie.

Exemple : un moteur absorbe **36 W** et fournit **28,8 W** de puissance mécanique :
**η = 28,8 / 36 = 0,8 = 80 %**. Les 20 % restants (7,2 W) sont perdus en chaleur.

---

## 4. Rendements en cascade

Une chaîne enchaîne plusieurs conversions (alimentation, moteur, réducteur…). Le
**rendement global** est le **produit** des rendements de chaque étage :

**η_global = η₁ × η₂ × η₃ × …**

Exemple : moteur η₁ = 0,80 puis réducteur η₂ = 0,90 :
**η_global = 0,80 × 0,90 = 0,72 = 72 %**. Le rendement global est donc toujours
**inférieur** à celui de chaque étage : les pertes s'ajoutent, elles ne se
compensent jamais.

---

## 5. Adapter l'énergie : la transmission

Un moteur tourne souvent trop vite et fournit peu de couple. La fonction
**TRANSMETTRE** adapte vitesse et couple à l'aide d'un **réducteur**. Pour un
engrenage idéal (sans pertes), la vitesse et le couple sont liés par le
**rapport de réduction** k :

- **ω_sortie = ω_entrée / k**  (on ralentit) ;
- **C_sortie = C_entrée × k**  (on augmente le couple, à puissance conservée).

En effet, si la puissance est conservée, **C × ω = constante** : ce que l'on perd
en vitesse, on le gagne en couple. C'est le principe du pignon de vélo ou de la
boîte de vitesses.

---

## Ce qu'il faut retenir

- La chaîne d'énergie enchaîne **ALIMENTER → DISTRIBUER → CONVERTIR → TRANSMETTRE**,
  avant l'**effecteur**.
- **Préactionneur** = distribue (relais, variateur) ; **actionneur** = convertit
  (moteur, vérin) ; **effecteur** = agit sur la matière d'œuvre.
- **E = P × t** ; **P = U × I** (élec.), **P = C × ω** (rotation), **P = F × v**
  (translation).
- **η = P_utile / P_absorbée**, sans unité, toujours **< 1**.
- Rendements en cascade : **η_global = η₁ × η₂ × …** (produit, donc plus faible).

## Les erreurs à éviter

- **Confondre puissance et énergie** : le watt est un débit, le joule une
  quantité ; E = P × t.
- **Additionner les rendements** : ils se **multiplient** (η₁ × η₂), jamais ne
  s'additionnent.
- **Oublier que η < 1** : un rendement supérieur à 1 signalerait une erreur de
  calcul, car on ne crée pas d'énergie.
- **Croire qu'un réducteur augmente la puissance** : il échange **vitesse contre
  couple** à puissance (au mieux) conservée.
