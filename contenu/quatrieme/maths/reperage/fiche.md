---
id: 4e-math-reperage
titre: "Repérage sur une droite et dans le plan"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 9
prerequis:
  - Repérage sur une droite et dans le plan (5e) — c'est le socle, relis-le d'abord
  - Nombres relatifs : comparaison et repérage sur une droite graduée (5e)
  - Opérations sur les nombres relatifs (4e)
  - Nombres rationnels et fractions (4e)
statut: brouillon
relu_par: null
---

# Repérage sur une droite et dans le plan

> En 4e, le repérage ne t'apprend rien de neuf : il te demande d'être **rapide et sûr**.
> Ce que tu construisais lentement en 5e doit maintenant sortir tout seul — parce que
> tu vas t'en servir ailleurs, dans des chapitres où le repère n'est plus le sujet mais
> l'outil.

---

## 1. Ce que le programme de 4e demande vraiment

Sois averti tout de suite, ça t'évitera de chercher une nouveauté qui n'existe pas :
dans le programme de 4e, cette entrée ne contient **que des automatismes**. Aucun nouvel
objectif d'apprentissage. Ce qui était à *découvrir* en 5e est désormais à *savoir faire
sans réfléchir*.

| | En 5e | En 4e |
|---|---|---|
| Statut au programme | objectif d'apprentissage | **automatisme** |
| Sur une droite | demi-droite graduée, nombres **décimaux** | droite graduée, nombres **relatifs** |
| Dans le plan | lire et placer (on apprend) | lire et placer (on maitrise) |
| Ce qu'on attend de toi | comprendre la méthode | l'appliquer **vite et sans erreur** |

Deux vrais élargissements se cachent dans ce tableau :

1. **La demi-droite devient une droite.** En 5e, l'automatisme ne portait que sur la
   demi-droite graduée (donc uniquement des nombres positifs). En 4e, il porte sur la
   droite entière : **la moitié gauche, celle des négatifs, fait partie du réflexe**.
2. **Le décimal devient le relatif.** On ne te demande plus de placer $2{,}4$ mais
   $-2{,}4$, $-\dfrac{7}{4}$, $-18$.

> 📎 **Toutes les définitions sont dans la fiche de 5e** — droite graduée, origine, sens,
> unité, abscisse, repère orthogonal, coordonnées. Elles ne sont pas répétées ici.
> Si l'un de ces mots te fait hésiter, arrête-toi et va la relire : cette fiche-ci
> suppose qu'ils sont acquis.

---

## 2. Le mémo minimum (à vérifier en 30 secondes)

$$\boxed{A(x)} \text{ sur une droite} \qquad\qquad \boxed{A(x\,;y)} \text{ dans le plan}$$

- $x$ = **abscisse**, on la lit sur l'axe **horizontal** ;
- $y$ = **ordonnée**, on la lit sur l'axe **vertical** ;
- **abscisse toujours en premier** ;
- un repère **orthogonal** = deux axes gradués **perpendiculaires**, de même origine.

Si ces quatre lignes ne te viennent pas immédiatement, l'automatisme n'est pas là.

---

## 3. Automatisme n°1 — droite graduée et nombres relatifs

> *Programme : « Placer sur une droite graduée un point dont l'abscisse est un nombre
> relatif. » « Repérer un nombre relatif sur une droite graduée. »*

### Le réflexe en trois temps

1. **Que vaut une graduation ?** Prends deux nombres écrits sur la droite, calcule leur
   écart, divise par le nombre d'intervalles qui les séparent.
2. **De quel côté ?** Le nombre cherché est-il plus grand ou plus petit que mon point de
   départ ? Plus petit $\Rightarrow$ **vers la gauche**.
3. **Combien de graduations ?** Je compte les **intervalles**, pas les traits.

> **Exemple 1 — décimal négatif.** Entre $-3$ et $-2$, la droite est partagée en $5$
> parts égales : une graduation vaut $\dfrac{1}{5} = 0{,}2$.
> Le point situé $2$ graduations **à droite** de $-3$ a pour abscisse
> $-3 + 0{,}4 = -2{,}6$.
>
> Vérifie que c'est cohérent : $-2{,}6$ est bien **entre** $-3$ et $-2$. ✓

> **Exemple 2 — fraction négative.** Unité $1$, chaque unité partagée en $4$ : une
> graduation vaut $\dfrac{1}{4}$.
> Le point situé $3$ graduations **à gauche** de $-1$ a pour abscisse
> $-1 - \dfrac{3}{4} = -\dfrac{7}{4}$.
>
> Contrôle : $-\dfrac{7}{4} = -1{,}75$, donc entre $-2$ et $-1$. ✓

> **Exemple 3 — grande unité.** Deux traits portent $-10$ et $-5$ et sont séparés par
> $5$ intervalles : une graduation vaut $\dfrac{5}{5} = 1$.
> Trois graduations **à droite** de $-10$ : $-10 + 3 = -7$.

### Le contrôle qui sauve

Avant d'écrire ta réponse, encadre-la : **entre quels deux entiers doit-elle tomber ?**
Si tu trouves $-3{,}4$ alors que le point est visiblement entre $-3$ et $-2$, tu t'es
trompé de sens. Ce contrôle prend deux secondes et attrape la majorité des erreurs.

---

## 4. Automatisme n°2 — lire et placer dans le plan

> *Programme : « Dans le plan muni d'un repère orthogonal : lire les coordonnées d'un
> point donné ; placer un point de coordonnées données. »*

### Lire les coordonnées

1. Depuis le point, **verticalement** jusqu'à l'axe horizontal : tu lis $x$.
2. Depuis le point, **horizontalement** jusqu'à l'axe vertical : tu lis $y$.
3. Écris $(x\,;y)$ — dans cet ordre.

### Placer un point

1. Pars de l'origine $O$.
2. **Horizontalement** de $x$ : à droite si $x > 0$, à gauche si $x < 0$.
3. Puis **verticalement** de $y$ : vers le haut si $y > 0$, vers le bas si $y < 0$.

> **Exemple.** $M(-4\,;3)$ : $4$ vers la gauche, puis $3$ vers le haut.
> $N(3\,;-4)$ : $3$ vers la droite, puis $4$ vers le bas.
>
> Ce sont **deux points très différents**, alors qu'on y écrit les mêmes chiffres.

### La lecture des signes, d'un coup d'œil

| Le point est… | Signe de $x$ | Signe de $y$ |
|---|---|---|
| en haut à droite | $x > 0$ | $y > 0$ |
| en haut à gauche | $x < 0$ | $y > 0$ |
| en bas à gauche | $x < 0$ | $y < 0$ |
| en bas à droite | $x > 0$ | $y < 0$ |

Avant même de lire les nombres, **regarde où est le point** : tu connais déjà les deux
signes. Un point en bas à gauche ne peut pas avoir de coordonnée positive.

---

## 5. À quoi ça sert en 4e : représenter une grandeur en fonction d'une autre

C'est là que l'automatisme devient rentable. Le programme de 4e demande, en fonctions,
de **représenter par un graphique** l'expression d'une grandeur en fonction d'une autre.
Autrement dit : le repère cesse d'être l'exercice, il devient le support.

**La démarche.**

1. Écris la formule qui relie les deux grandeurs.
2. Construis un **tableau de valeurs**.
3. Choisis les **unités des deux axes** — elles n'ont aucune raison d'être les mêmes.
4. Place chaque colonne du tableau comme un point $(x\,;y)$.

> **Exemple 1 — un tarif.** Un taxi facture $3$ € de prise en charge, puis $2$ € par
> kilomètre. Le prix $p$ en fonction de la distance $d$ : $p = 3 + 2 \times d$.
>
> | $d$ (km) | $0$ | $1$ | $2$ | $3$ | $4$ |
> |---|---|---|---|---|---|
> | $p$ (€) | $3$ | $5$ | $7$ | $9$ | $11$ |
>
> On place $(0\,;3)$, $(1\,;5)$, $(2\,;7)$, $(3\,;9)$, $(4\,;11)$.
> Les points sont alignés, mais la droite **ne passe pas par l'origine** : à $0$ km on
> paie déjà $3$ €. Ce n'est donc **pas** une situation de proportionnalité.

> **Exemple 2 — des ordonnées négatives.** Un congélateur à $-18$ °C est débranché ; sa
> température monte de $4$ °C par heure.
>
> | $t$ (h) | $0$ | $1$ | $2$ | $3$ |
> |---|---|---|---|---|
> | $T$ (°C) | $-18$ | $-14$ | $-10$ | $-6$ |
>
> Ici l'axe vertical doit descendre jusqu'à $-18$ : gradue-le **de $2$ en $2$**, sinon
> ta feuille n'y suffira pas. Les points $(0\,;-18)$, $(1\,;-14)$, $(2\,;-10)$,
> $(3\,;-6)$ sont **sous** l'axe horizontal.

> ⚠️ **Le choix de la graduation fait partie du travail.** Un graphique où tous les
> points sont écrasés dans un coin est un graphique raté, même si les points sont justes.

---

## 6. Cas particuliers et pièges de lecture

| Situation | Ce qu'il faut en déduire |
|---|---|
| Le point est sur l'axe horizontal | son ordonnée est nulle : $(x\,;0)$ |
| Le point est sur l'axe vertical | son abscisse est nulle : $(0\,;y)$ |
| Le point est l'origine | $(0\,;0)$ |
| Les deux axes n'ont pas la même unité | c'est normal : « orthogonal » ne dit rien des unités |
| L'axe vertical monte de $5$ en $5$ | $3$ graduations au-dessus de $O$, c'est $15$, pas $3$ |
| La droite est graduée en quarts | une graduation vaut $\dfrac{1}{4}$, pas $1$ |

> ⚠️ **« Orthogonal » n'est pas « orthonormé ».** Les axes sont perpendiculaires, rien
> de plus. Rien n'oblige l'unité de l'axe vertical à valoir celle de l'axe
> horizontal — et dans un graphique concret (des heures contre des degrés), elles sont
> presque toujours différentes.

> ⚠️ **Un repère peut être « décalé ».** Rien n'oblige un axe à commencer à $0$ en bas à
> gauche de la feuille. Cherche toujours **où se croisent les deux axes** : c'est là
> qu'est l'origine.

---

## 7. À retenir absolument

| | |
|---|---|
| Statut en 4e | **automatisme** : rien de nouveau, mais rien d'hésitant |
| Sur une droite | placer et lire un nombre **relatif** (négatifs compris) |
| Notation | $A(x)$ sur une droite, $A(x\,;y)$ dans le plan |
| Ordre | **abscisse d'abord**, ordonnée ensuite |
| Axe horizontal | axe des **abscisses** |
| Axe vertical | axe des **ordonnées** |
| Repère orthogonal | axes **perpendiculaires**, même origine, unités libres |
| Valeur d'une graduation | à recalculer sur **chaque** axe, chaque fois |
| Sur l'axe des abscisses | $y = 0$ |
| Sur l'axe des ordonnées | $x = 0$ |
| Usage en 4e | représenter une grandeur en fonction d'une autre |

---

## 8. Les erreurs qui coûtent des points

1. **Aller du mauvais côté dans les négatifs.** À gauche de $-3$ on trouve des nombres
   **plus petits** que $-3$ (une graduation de $0{,}2$ donne $-3{,}2$), jamais $-2{,}8$.
   Quand on s'éloigne de zéro vers la gauche, le nombre diminue : $-4 < -3$. C'est
   l'erreur n°1 de la 4e, héritée du réflexe de 6e « plus loin = plus grand ».

2. **Inverser abscisse et ordonnée.** $(3\,;-4)$ et $(-4\,;3)$ ne sont pas le même
   point : l'un est en bas à droite, l'autre en haut à gauche. Horizontale d'abord,
   toujours.

3. **Supposer qu'une graduation vaut $1$.** Sur un axe gradué de $5$ en $5$, un point
   $3$ graduations au-dessus de l'origine a pour ordonnée $15$. Lis **les nombres
   écrits sur l'axe**, jamais les traits seuls.

4. **Croire que les deux axes ont la même unité.** Ils sont perpendiculaires, pas
   identiques. Chaque axe se lit pour lui-même : deux calculs de graduation, pas un.

5. **Compter les traits au lieu des intervalles.** Entre $0$ et $1$ partagés en $4$, il
   y a $4$ intervalles mais seulement $3$ traits intermédiaires. C'est **l'intervalle**
   qui vaut $\dfrac{1}{4}$.

6. **Oublier le signe une fois le comptage fini.** Tu as bien compté $3$ graduations à
   gauche… et tu écris $3$. Le comptage donne la distance, le **côté** donne le signe :
   les deux sont nécessaires.

---

<!--
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
-->
