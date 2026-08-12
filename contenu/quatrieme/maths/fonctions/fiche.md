---
id: 4e-math-fonctions
titre: "Fonctions : programmes de calcul et dépendance"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Fonctions — dépendance entre deux grandeurs, « en fonction de » (5e)
  - Tableau de valeurs et lecture graphique (5e)
  - Calcul littéral — substituer, réduire, développer (5e puis 4e)
  - Priorités opératoires et enchaînements d'opérations (5e)
  - Opérations sur les nombres relatifs (4e)
statut: brouillon
relu_par: null
---

# Fonctions : programmes de calcul et dépendance

> En 5e, tu as appris à dire « le prix varie **en fonction du** nombre de séances ».
> Cette année, tu apprends à **écrire** cette dépendance : une suite d'instructions
> appliquée non plus à un nombre, mais à une **lettre**. Et surtout à faire le chemin
> **dans les deux sens** — du nombre de départ vers le résultat, et du résultat vers le
> nombre de départ.

---

## 1. La dépendance entre deux grandeurs

C'est le point de départ, déjà rencontré en 5e.

> **Définition.** Une grandeur dépend d'une autre — elle varie **en fonction d'**une
> autre — lorsque, dès qu'on connaît la première, on peut déterminer la seconde.

- La grandeur qu'on **choisit** s'appelle la **variable**.
- La grandeur qu'on **obtient** en dépend.

> **La condition à ne pas oublier.** À **chaque** valeur de la variable doit correspondre
> **une seule** valeur d'arrivée. Sinon, on n'a pas le droit de dire « en fonction de ».

En 4e, une nouveauté : cette dépendance, on la décrit avec **trois outils** qui disent la
même chose.

| Outil | Ce qu'il donne |
|---|---|
| Une **formule** | toutes les valeurs, exactement |
| Un **tableau de valeurs** | quelques valeurs, choisies |
| Un **graphique** | l'allure d'ensemble, d'un coup d'œil |

> **Exemple.** Une piscine facture $5$ € d'abonnement, puis $2$ € par séance. Le prix
> dépend du nombre de séances : la variable est le **nombre de séances**, la grandeur qui
> en dépend est le **prix**.

---

## 2. Appliquer un programme de calcul à un nombre

> **Définition.** Un **programme de calcul** est une suite d'instructions, exécutées
> **dans l'ordre**, à partir d'un nombre choisi au départ.

> **Programme A**
> 1. Choisis un nombre.
> 2. Multiplie-le par $3$.
> 3. Ajoute $4$.

> **Exemple.** Avec $5$ : $5 \times 3 = 15$, puis $15 + 4 = 19$. Le programme A renvoie
> $19$.

> **Exemple avec un relatif.** Avec $-4$ : $-4 \times 3 = -12$, puis $-12 + 4 = -8$.

> ⚠️ **Une étape à la fois, dans l'ordre écrit.** Chaque ligne travaille sur le résultat
> de la ligne précédente, jamais sur le nombre du départ.

---

## 3. Appliquer un programme de calcul à une variable

C'est le vrai saut de la 4e : au lieu d'un nombre, on met une **lettre**. Le programme
devient alors une **expression littérale**, valable pour tous les nombres à la fois.

> **Méthode.**
> 1. Note $x$ le nombre choisi.
> 2. Écris le résultat de chaque étape, l'un sous l'autre.
> 3. **Réduis** l'expression finale.

> **Exemple — programme A.**
>
> | Étape | Avec $5$ | Avec $x$ |
> |---|---|---|
> | Nombre choisi | $5$ | $x$ |
> | Multiplier par $3$ | $15$ | $3x$ |
> | Ajouter $4$ | $19$ | $3x + 4$ |
>
> Le programme A se résume donc à $\boxed{3x + 4}$.

> **Programme B**
> 1. Choisis un nombre.
> 2. Ajoute $2$.
> 3. Multiplie par $5$.
>
> Avec $x$ : après l'étape 2 on a $x + 2$ ; on multiplie **ce résultat entier** par $5$.
> $$5 \times (x + 2) = 5x + 10$$

> ⚠️ **Les parenthèses ne sont pas décoratives.** « Ajoute $2$ **puis** multiplie par
> $5$ » donne $5(x+2)$, c'est-à-dire $5x + 10$ — **pas** $5x + 2$. Contrôle avec $x = 3$ :
> le programme donne $3 + 2 = 5$ puis $5 \times 5 = 25$ ; et $5 \times 3 + 10 = 25$ ✓,
> alors que $5 \times 3 + 2 = 17$ ✗. Ce contrôle sur un nombre simple, fais-le
> systématiquement : le programme pas à pas et l'expression réduite doivent coïncider.

---

## 4. Nommer le résultat : l'écriture $P(x)$

Quand une grandeur dépend d'une autre, on peut lui donner un **nom** et écrire, entre
parenthèses, la valeur de la variable.

> **Notation.** Si le prix $P$ dépend du nombre $n$ de séances, on écrit :
> $$\boxed{P(n) = 5 + 2 \times n}$$
> et on lit « $P$ **de** $n$ ».

> **Exemple.** $P(3) = 5 + 2 \times 3 = 11$ : pour $3$ séances, le prix est de $11$ €.
> De même $P(0) = 5$ : sans aucune séance, on paie quand même l'abonnement.

On rencontre aussi la **flèche**, qui se lit « à … on associe … » :
$$n \longrightarrow 5 + 2 \times n$$

La lettre choisie rappelle en général la grandeur : $P$ pour un prix, $A$ pour une aire,
$t$ pour un temps.

> ⚠️ **$P(3)$ n'est PAS $P \times 3$.** Les parenthèses ne sont pas une multiplication
> ici : elles indiquent **quelle valeur on donne à la variable**. C'est l'erreur n°1 sur
> cette notation.

> **Exemple complet.** Le programme A de la section 2 donne un résultat $R$ qui dépend du
> nombre choisi $x$ : $R(x) = 3x + 4$. Alors $R(5) = 19$ et $R(-4) = -8$ — ce sont
> exactement les calculs déjà faits.

---

## 5. Remonter un programme de calcul

On connaît le résultat, on cherche **le nombre de départ**. On refait le chemin à
l'envers.

> **Méthode.**
> 1. Reprends les étapes **de la dernière vers la première**.
> 2. Remplace chaque opération par son **opération inverse**.
> 3. Applique-les au résultat connu.

| Opération de l'aller | Opération du retour |
|---|---|
| $+\,a$ | $-\,a$ |
| $-\,a$ | $+\,a$ |
| $\times\,a$ (avec $a \neq 0$) | $\div\,a$ |
| $\div\,a$ | $\times\,a$ |

> **Exemple — programme A ($\times 3$ puis $+4$), résultat $19$.**
> - Dernière étape à défaire : « ajouter $4$ » → $19 - 4 = 15$.
> - Étape précédente : « multiplier par $3$ » → $15 \div 3 = 5$.
>
> Le nombre de départ était $5$. **Vérification obligatoire** : $5 \times 3 + 4 = 19$ ✓

> **Exemple — programme B ($+2$ puis $\times 5$), résultat $40$.**
> - $40 \div 5 = 8$, puis $8 - 2 = 6$.
> - Vérification : $6 + 2 = 8$, $8 \times 5 = 40$ ✓

> ⚠️ **Deux choses s'inversent en même temps** : l'**ordre** des étapes *et* chaque
> **opération**. N'en inverser qu'une seule sur les deux donne un résultat faux.

Avec la notation de la section 4, cela revient à chercher le nombre $x$ tel que
$R(x) = 19$.

---

## 6. Produire une formule littérale

Ici, on part d'une **situation** décrite avec des mots, et on écrit la formule.

> **Méthode.**
> 1. Choisis une lettre pour la variable et **écris ce qu'elle représente**, avec son
>    unité.
> 2. Repère ce qui est **fixe** et ce qui **varie**.
> 3. Écris le calcul que tu ferais avec un nombre, puis remplace ce nombre par la lettre.
> 4. **Teste** la formule sur une valeur simple.

> **Exemple 1 — un forfait.** $8$ € par mois, plus $0{,}15$ € par minute d'appel. Soit $t$
> la durée d'appel en minutes et $C$ le coût en euros :
> $$\boxed{C(t) = 8 + 0{,}15\,t}$$
> Test avec $t = 20$ : $0{,}15 \times 20 = 3$, donc $C(20) = 11$ €. ✓

> **Exemple 2 — une aire.** Un rectangle a une largeur $\ell$ (en cm) et une longueur qui
> dépasse la largeur de $3$ cm. Son aire :
> $$\boxed{A(\ell) = \ell \times (\ell + 3)}$$
> Test avec $\ell = 4$ : longueur $7$ cm, aire $28$ cm². Et $4 \times 7 = 28$ ✓

> **Exemple 3 — un carré.** Aire d'un carré de côté $c$ : $\boxed{A(c) = c \times c}$.

> ⚠️ **Une formule sans phrase ne vaut rien.** « $C(t) = 8 + 0{,}15\,t$, où $t$ est la
> durée en minutes et $C$ le coût en euros » : c'est la phrase qui rend la formule
> lisible.

---

## 7. Représenter la dépendance par un graphique

> **Méthode.**
> 1. Construis un **tableau de valeurs** à partir de la formule.
> 2. Trace un repère : **horizontal** = la variable, **vertical** = la grandeur qui en
>    dépend. Nomme les axes, indique les **unités**.
> 3. Place les points de coordonnées (valeur de la variable ; valeur obtenue).
> 4. Relie — ou non.

> **Exemple 1 — le prix de la piscine, $P(n) = 5 + 2n$.**
>
> | Séances $n$ | 0 | 1 | 2 | 3 | 4 |
> |---|---|---|---|---|---|
> | Prix $P(n)$ (€) | 5 | 7 | 9 | 11 | 13 |
>
> Points : $(0\,;5)$, $(1\,;7)$, $(2\,;9)$, $(3\,;11)$, $(4\,;13)$. Ils sont **alignés**,
> mais on ne les relie **pas** : $2{,}5$ séances n'existe pas. C'est un **nuage de
> points**.

> **Exemple 2 — l'aire du carré, $A(c) = c \times c$.**
>
> | Côté $c$ (cm) | 0 | 1 | 2 | 3 | 4 |
> |---|---|---|---|---|---|
> | Aire $A(c)$ (cm²) | 0 | 1 | 4 | 9 | 16 |
>
> Ici on **relie** : un côté de $2{,}5$ cm a un sens. Les points ne sont **pas alignés**,
> la représentation est une **courbe** qui monte de plus en plus vite.

> **La lecture inverse.** Lire sur un graphique le nombre de départ à partir du résultat,
> c'est la version graphique de la section 5 : on part de l'axe **vertical**, on rejoint
> la courbe, puis on **descend** vers l'axe horizontal.

---

## 8. Les pièges de calcul

- **Priorités opératoires.** Dans $5 + 2n$ avec $n = 3$, on calcule $2 \times 3 = 6$
  **puis** $5 + 6 = 11$. Jamais $5 + 2 = 7$ puis $7 \times 3$.
- **Substituer un nombre négatif : mets des parenthèses.** Dans $3x + 4$ avec $x = -4$,
  on écrit $3 \times (-4) + 4$.
- **Le carré d'un négatif est positif.** Programme « multiplie le nombre par lui-même » :
  avec $-3$ on obtient $(-3) \times (-3) = 9$, et non $-9$.
- **Un seul essai ne prouve rien.** Les programmes « $\times 3$ puis $+4$ » et
  « $\times 2$ puis $+4$ » donnent tous les deux $4$ pour le nombre $0$ — et pourtant
  $3x + 4$ et $2x + 4$ ne sont pas la même expression. Pour prouver que deux programmes
  sont identiques, il faut **réduire les deux expressions littérales** et les comparer.
- **Multiplier par $0$ efface tout.** Un tel programme ne se remonte pas : tous les
  nombres de départ donnent $0$, et on ne pourra jamais retrouver lequel — c'est pour cela
  que le tableau des opérations inverses exige $a \neq 0$.

---

## 9. À retenir absolument

| | |
|---|---|
| Variable | la grandeur qu'on **choisit** |
| Condition | une seule valeur d'arrivée par valeur de départ |
| Trois outils | formule · tableau de valeurs · graphique |
| Programme de calcul | des étapes exécutées **dans l'ordre** |
| Appliqué à une lettre | on obtient une **expression littérale**, valable pour tous les nombres |
| « Ajoute $2$ puis $\times 5$ » | $5(x + 2) = 5x + 10$ — parenthèses **obligatoires** |
| Notation | $P(n)$ se lit « $P$ de $n$ » — **pas** $P \times n$ |
| Flèche | $n \longrightarrow 5 + 2n$ : « à $n$ on associe $5 + 2n$ » |
| Remonter | ordre **inversé** *et* opérations **inversées** |
| Toujours | **vérifier** en refaisant le programme à l'endroit |
| Graphique | horizontal = variable ; on relie seulement si l'entre-deux a un sens |

---

## 10. Les erreurs qui coûtent des points

1. **Oublier les parenthèses en traduisant un programme.** « Ajoute $2$, multiplie par
   $5$ » donne $5(x+2)$. Écrire $5x + 2$ change complètement le programme : c'est
   l'erreur la plus fréquente du chapitre.
2. **Lire $P(3)$ comme une multiplication.** $P(3)$ est le résultat obtenu **pour**
   $n = 3$. Écrire $P(3) = 3P$ n'a aucun sens.
3. **Remonter en ne changeant que l'ordre**, ou en ne changeant que les opérations. Les
   **deux** s'inversent. Le réflexe qui sauve : recalculer le programme à l'endroit avec
   le nombre trouvé.
4. **Substituer un relatif sans parenthèses** : $3 \times -4$ s'écrit $3 \times (-4)$, et
   $(-3)^2 = 9$ alors que $-3^2 = -9$.
5. **Conclure que deux programmes sont les mêmes après un seul essai.** Un exemple ne
   démontre rien ; seule la comparaison des expressions réduites le fait.
6. **Relier les points quand les valeurs intermédiaires n'existent pas** (nombre de
   séances, nombre d'objets), ou oublier de nommer les axes et leurs unités.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
(PDF correspondant : docs/programme-college-cycle4-maths-2026.pdf)
Thème « Proportionnalité, fonctions », entrée « Fonctions », niveau QUATRIÈME :
lignes 1036 à 1042 (l. 1036 titre « Fonctions », l. 1037 « Objectifs
d'apprentissage », l. 1038-1042 les cinq objectifs).
Chapeau du thème lu également : lignes 968 à 986.

LES CINQ OBJECTIFS (l. 1038-1042) ET LEUR SECTION
- l.1038 « Savoir appliquer un programme de calcul à deux (plusieurs) étapes à un
  nombre simple puis à une variable. »            -> sections 2 et 3
- l.1039 « Savoir retrouver le nombre de départ après avoir remonté un programme de
  calcul simple. »                                -> section 5
- l.1040 « Produire une formule littérale représentant la dépendance d'une grandeur en
  fonction d'une autre. »                         -> section 6
- l.1041 « Représenter l'expression d'une grandeur en fonction d'une autre par un
  graphique. »                                    -> section 7
- l.1042 « Comprendre la dépendance d'une grandeur en fonction d'une autre. »
                                                  -> section 1
Écart à l'ordre du BO : l'objectif l.1042 est traité en PREMIER (section 1). Motif :
le gabarit (docs/gabarit-chapitre.md, § « Corps ») impose d'ouvrir sur une
définition, et la dépendance est le cadre dans lequel tout le reste prend sens. Les
objectifs 1038 -> 1041 se suivent ensuite dans l'ordre exact du BO. À valider.

DÉCISION PRINCIPALE À TRANCHER — LA NOTATION FONCTIONNELLE (section 4)
Vérification faite mot à mot dans le texte de QUATRIÈME (l. 1036-1042) :
- « programme de calcul » : PRÉSENT (l. 1038 et 1039).
- « variable » : PRÉSENT (l. 1038).
- « formule littérale » : PRÉSENT (l. 1040).
- « graphique » : PRÉSENT (l. 1041).
- « image » : ABSENT. « antécédent » : ABSENT. « f(x) » : ABSENT. « fonction » comme
  objet mathématique nommé : ABSENT (le mot n'apparaît qu'en titre d'entrée l. 1036
  et dans la locution « en fonction de », l. 1040 et 1042).
Ces deux mots-clés apparaissent pour la première fois en TROISIÈME, l. 1061 :
« Définir et connaitre le vocabulaire : image, antécédents. »
=> Je n'ai donc PAS introduit « image » ni « antécédent », ni la locution « la
   fonction f », ni « courbe représentative », ni « ensemble de définition ». La
   section 5 dit « retrouver le nombre de départ », exactement les mots du BO l. 1039,
   là où un manuel dirait « déterminer un antécédent ».

=> EN REVANCHE, la section 4 (notation P(n), lecture « P de n », flèche
   n -> 5 + 2n) est introduite SUR LA SEULE FOI DES LIGNES 985-986 du chapeau :
   « Les notations fonctionnelles de type P(A), p(t) ainsi que la flèche -> sont
   utilisées progressivement dans tous les chapitres du programme. »
   AUCUNE mention explicite dans l'entrée 4e ne la demande. C'EST LE POINT LE PLUS
   DISCUTABLE DE LA FICHE, à trancher par un professeur.
   Trois arguments qui m'ont fait choisir OUI :
   (a) « progressivement » suppose une entrée quelque part entre la 5e et la 3e ; la
       fiche de 5e (contenu/cinquieme/maths/fonctions/fiche.md, notes de production,
       point 1) a explicitement écarté la notation en 5e et renvoyé la décision à la
       4e/3e ;
   (b) l'objectif l. 1038 « appliquer un programme de calcul […] à une variable »
       produit précisément l'objet qu'il faut savoir nommer ;
   (c) en 3e (l. 1061) le vocabulaire image/antécédent est supposé se poser sur une
       notation déjà rencontrée.
   J'ai suivi la forme donnée en exemple par le BO lui-même (P(A), p(t)) : une lettre
   qui NOMME LA GRANDEUR appliquée à la variable, jamais « la fonction f ». Si le
   relecteur juge la notation prématurée en 4e, la section 4 est supprimable telle
   quelle : les sections 5, 6 et 7 y font référence mais restent lisibles sans elle
   (il suffit de réécrire P(n) en P et A(x) en « le résultat »).

CONTINUITÉ AVEC LA 5e
Prérequis explicite : contenu/cinquieme/maths/fonctions/fiche.md (« en fonction de »,
tableau de valeurs, repère, lecture graphique). La section 1 reprend sa définition de
la dépendance et sa condition d'unicité, la section 7 reprend son exemple de la
piscine (5 € + 2 € par séance) et sa règle « on relie ou pas » — volontairement, pour
que l'élève reconnaisse la situation et voie ce que la notation ajoute.
Point 2 des notes de production de la 5e (« programme de calcul » réservé à la 4e) :
confirmé ici, l'expression est bien en 4e (l. 1038-1039). La 5e ne l'a pas traité, il
n'y a donc ni doublon ni trou.

À CONFRONTER AU PROGRAMME PAR LE RELECTEUR
1. La notation fonctionnelle (voir ci-dessus). Décision n°1.
2. Le mot « variable » (section 1) est bien celui du BO (l. 1038), mais il est aussi
   employé en 4e au sens INFORMATIQUE dans « La pensée informatique » (l. 1089, 1095).
   Vérifier que la coexistence des deux sens ne gêne pas, la fiche
   contenu/quatrieme/maths/pensee-informatique/ existant déjà.
3. Recouvrement avec contenu/quatrieme/maths/calcul-litteral/ : « produire des
   formules » figure aussi dans l'entrée Calcul littéral de la 4e (l. 574), et
   « programme de calcul » dans l'entrée Opérations sur les nombres relatifs de la 4e
   (l. 523-524). Les sections 3 et 6 supposent acquis substituer/réduire/développer et
   ne les réenseignent pas. Vérifier l'absence de contradiction et de doublon gênant.
4. Section 5, dernier paragraphe : j'ai relié « remonter un programme » à la recherche
   du x tel que R(x) = 19. Le BO de 4e demande par ailleurs de résoudre ax + b = c
   (l. 577). J'ai délibérément gardé la méthode des OPÉRATIONS INVERSES, qui est ce
   que dit l. 1039 (« après avoir remonté un programme de calcul »), et non la
   résolution d'équation. À confirmer : faut-il faire le lien plus explicitement ?
5. Section 8, dernier point (multiplier par 0 rend le programme non remontable) : ce
   n'est pas dans le BO. Ajouté parce que le gabarit impose une section « cas
   particuliers / pièges de calcul » et parce que le tableau des opérations inverses
   exige a ≠ 0. Supprimable si jugé hors sujet en 4e.
6. La caractérisation graphique de la proportionnalité n'est PAS reprise : elle est un
   objectif de 5e (l. 1020), traité dans la fiche de 5e. La section 7 s'en tient à
   « représenter par un graphique » (l. 1041). À confirmer.

Rédaction entièrement originale à partir du seul texte du BO. Aucun emprunt à un
manuel ni à un site de cours. Tous les exemples chiffrés ont été inventés et
recalculés à la main.
Statut : brouillon, non relu.
-->
