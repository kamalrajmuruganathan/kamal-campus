---
id: 4e-pc-mouvement-vitesse
titre: "Mouvement : la relation v = d/t"
voie: college
niveau: quatrieme
parcours: physique-chimie
matiere: physique-chimie
programme: "Programme de physique-chimie du cycle 4 (BO) — classe de 4e"
theme: "Mouvement et interactions"
duree_lecture_min: 11
prerequis:
  - Caractériser un mouvement (5e)
  - Trajectoire rectiligne, circulaire, curviligne (5e)
  - Mesure de durées (5e)
statut: brouillon
relu_par: null
---

# Mouvement : la relation v = d/t

> En 5e, tu as appris à **décrire** un mouvement : sa trajectoire, sa vitesse qui augmente ou
> diminue. En 4e, on passe au **calcul**. Une seule relation, $v = \dfrac{d}{t}$, relie la
> distance, la durée et la vitesse. Simple à écrire… mais le vrai piège, ce sont les **unités**.

---

## 1. La vitesse

### Définition

La **vitesse** d'un objet indique la distance qu'il parcourt pendant une durée donnée. On la
calcule en divisant la **distance parcourue** $d$ par la **durée** $t$ mise pour la parcourir :

$$\boxed{v = \frac{d}{t}}$$

| Grandeur | Symbole | Unité du système international |
|---|---|---|
| distance parcourue | $d$ | mètre (m) |
| durée du parcours | $t$ | seconde (s) |
| vitesse | $v$ | mètre par seconde (m/s) |

> **Exemple.** Un cycliste parcourt $d = 100$ m en $t = 20$ s.
> Sa vitesse vaut $v = \dfrac{d}{t} = \dfrac{100}{20} = 5$ m/s.
> Autrement dit, il avance de $5$ mètres chaque seconde.

### La vitesse est une vitesse *moyenne*

La relation $v = \dfrac{d}{t}$ donne la vitesse **moyenne** sur tout le trajet. Pendant le
parcours, l'objet a pu aller plus ou moins vite : le compteur d'une voiture, lui, affiche la
vitesse **instantanée**, à un moment précis. Les deux ne sont pas forcément égales.

> **Exemple.** Tu mets $30$ min pour faire $30$ km en voiture : ta vitesse moyenne est de
> $60$ km/h. Pourtant tu t'es peut-être arrêté à un feu (0 km/h) et tu as roulé à 90 km/h
> ailleurs. La moyenne lisse tout cela.

---

## 2. Les trois formes de la relation

Une seule relation, mais on cherche parfois la distance ou la durée. Il suffit de la
réarranger :

$$\boxed{v = \frac{d}{t}} \qquad \boxed{d = v \times t} \qquad \boxed{t = \frac{d}{v}}$$

Pour les retrouver sans se tromper, un moyen simple : le **triangle**. On place $d$ en haut,
$v$ et $t$ en bas. On cache la grandeur cherchée, et on lit ce qui reste.

| Ce que tu cherches | Ce que tu lis | Formule |
|---|---|---|
| la vitesse $v$ | $d$ au-dessus de $t$ | $v = \dfrac{d}{t}$ |
| la distance $d$ | $v$ à côté de $t$ | $d = v \times t$ |
| la durée $t$ | $d$ au-dessus de $v$ | $t = \dfrac{d}{v}$ |

> **Exemple.** Un train roule à $v = 30$ m/s pendant $t = 120$ s.
> Distance parcourue : $d = v \times t = 30 \times 120 = 3600$ m, soit $3{,}6$ km.

---

## 3. Les unités : le piège n°1

Deux unités de vitesse cohabitent : le **mètre par seconde** (m/s) des physiciens et le
**kilomètre par heure** (km/h) des panneaux routiers. Il faut savoir passer de l'une à l'autre.

### Convertir km/h ↔ m/s

Tout part de la définition : $1$ km $= 1000$ m et $1$ h $= 3600$ s. Donc

$$1\ \text{m/s} = \frac{1\ \text{m}}{1\ \text{s}} = \frac{0{,}001\ \text{km}}{\tfrac{1}{3600}\ \text{h}} = 3{,}6\ \text{km/h}.$$

On en tire la règle à retenir :

$$\boxed{\text{km/h} \xrightarrow{\ \div\, 3{,}6\ } \text{m/s}} \qquad
\boxed{\text{m/s} \xrightarrow{\ \times\, 3{,}6\ } \text{km/h}}$$

> **Exemple 1.** Une voiture roule à $90$ km/h.
> En m/s : $\dfrac{90}{3{,}6} = 25$ m/s.

> **Exemple 2.** Un sprinteur court à $10$ m/s.
> En km/h : $10 \times 3{,}6 = 36$ km/h.

> ⚠️ **Le sens de la conversion.** La vitesse en m/s est toujours **plus petite** que la même
> vitesse en km/h (car une seconde est bien plus courte qu'une heure). Si tu trouves un nombre
> plus grand en m/s, tu as multiplié au lieu de diviser.

### Utiliser des unités cohérentes dans v = d/t

La relation $v = \dfrac{d}{t}$ ne fonctionne que si les unités **vont ensemble** :

- si tu veux $v$ en **m/s**, mets $d$ en **mètres** et $t$ en **secondes** ;
- si tu veux $v$ en **km/h**, mets $d$ en **kilomètres** et $t$ en **heures**.

> **Exemple.** Un marcheur fait $6$ km en $1$ h $30$.
> D'abord, $1$ h $30 = 1{,}5$ h (et **pas** $1{,}30$ h !).
> $v = \dfrac{d}{t} = \dfrac{6}{1{,}5} = 4$ km/h.

> ⚠️ **Les minutes ne se convertissent pas comme des centimes.** $1$ h $30$ min, c'est
> $1{,}5$ h, car $30$ min $= \dfrac{30}{60}$ h $= 0{,}5$ h. Pour passer des minutes aux
> secondes : $\times 60$. Une durée de $2$ min $= 120$ s.

---

## 4. La nature de la trajectoire

La **trajectoire**, c'est l'ensemble des positions successives occupées par l'objet au cours
du mouvement — la « ligne » qu'il dessine. On la classe par sa forme :

| Trajectoire | Forme | Exemple |
|---|---|---|
| **rectiligne** | une droite | une bille qui roule sur une table plane |
| **circulaire** | un cercle | une cabine de grande roue, un point sur un CD |
| **curviligne** | une courbe quelconque | un ballon lancé, une voiture dans un virage |

> ⚠️ La trajectoire **dépend du point observé**. Une valve de roue de vélo décrit une courbe
> compliquée par rapport au sol, alors que le cadre, lui, avance en ligne droite.

---

## 5. L'évolution de la vitesse

Un mouvement se décrit par **deux** informations : la nature de sa trajectoire **et** la façon
dont sa vitesse évolue. On distingue trois cas :

| Mouvement | La vitesse… | Exemple |
|---|---|---|
| **uniforme** | reste **constante** | un escalator, un tapis roulant |
| **accéléré** | **augmente** | une voiture qui démarre, un objet qui tombe |
| **ralenti** (ou décéléré) | **diminue** | un vélo qui freine, une balle qui remonte |

On combine toujours les deux descriptions. On dira par exemple : « mouvement **rectiligne
uniforme** » (droite + vitesse constante) ou « mouvement **rectiligne accéléré** » (droite +
vitesse qui augmente).

> **Exemple.** Une bille lâchée en haut d'un plan incliné a un mouvement **rectiligne
> accéléré** : sa trajectoire est une droite et elle va de plus en plus vite.

---

## 6. Le mouvement circulaire uniforme

C'est un cas important et un peu piégeux. Un mouvement est **circulaire uniforme** quand :

- la **trajectoire** est un **cercle**, et
- la **vitesse** garde toujours la **même valeur**.

> **Exemple astronomique.** La Lune tourne autour de la Terre, et les planètes autour du
> Soleil, sur des trajectoires quasi circulaires parcourues à vitesse pratiquement constante :
> ce sont de bons exemples de mouvement circulaire uniforme. Une cabine de manège ou un point
> sur un disque qui tourne à régime constant en sont d'autres.

> ⚠️ **« Uniforme » veut dire *valeur* constante, pas mouvement figé.** Même si la valeur de la
> vitesse ne change pas, la **direction** du déplacement, elle, change en permanence (l'objet
> tourne). Un mouvement circulaire uniforme n'est donc **pas** un mouvement sans changement.

---

## 7. Tableau récapitulatif

| | À retenir par cœur |
|---|---|
| Relation | $\boxed{v = \dfrac{d}{t}}$ |
| Formes dérivées | $d = v \times t$ ; $t = \dfrac{d}{v}$ |
| Unité SI de la vitesse | le mètre par seconde (m/s) |
| km/h → m/s | diviser par $3{,}6$ |
| m/s → km/h | multiplier par $3{,}6$ |
| Durées | $1$ h $= 60$ min $= 3600$ s ; $1$ min $= 60$ s |
| Trajectoires | rectiligne · circulaire · curviligne |
| Évolution de $v$ | uniforme · accéléré · ralenti |
| Circulaire uniforme | cercle + valeur de $v$ constante (mais direction qui change) |

---

## 8. Les erreurs qui coûtent des points

1. **Mélanger les unités dans $v = d/t$.** Des mètres avec des heures ne donnent rien de bon :
   mets tout en m et s, ou tout en km et h, avant de calculer.
2. **Se tromper de sens dans la conversion km/h ↔ m/s.** On **divise** par $3{,}6$ pour aller
   vers les m/s, on **multiplie** pour aller vers les km/h.
3. **Écrire $1$ h $30$ min $= 1{,}30$ h.** C'est $1{,}5$ h. Trente minutes, c'est une
   demi-heure, donc $0{,}5$ h.
4. **Oublier de convertir les minutes en secondes.** $2$ min ne valent pas $2$ s mais $120$ s.
5. **Croire qu'un mouvement circulaire uniforme « ne change pas ».** Sa direction change sans
   arrêt ; seule la *valeur* de la vitesse reste constante.
6. **Confondre trajectoire et vitesse.** Décrire un mouvement, c'est donner **les deux** : la
   forme de la trajectoire ET la façon dont la vitesse évolue.

---

<!--
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
-->
