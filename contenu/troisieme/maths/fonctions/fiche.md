---
id: 3e-math-fonctions
titre: "Fonctions : image, antécédent, fonctions linéaires et affines"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 14
prerequis:
  - Fonctions — dépendance entre deux grandeurs, « en fonction de » (5e)
  - Fonctions — programme de calcul, variable, notation $P(n)$ (4e)
  - Proportionnalité et coefficient de proportionnalité (5e puis 4e)
  - Calcul littéral — substituer, résoudre $ax + b = c$ (4e)
  - Repérage et lecture graphique dans un repère (5e)
statut: brouillon
relu_par: null
---

# Fonctions : image, antécédent, fonctions linéaires et affines

> En 5e, tu disais « le prix dépend **en fonction du** nombre de séances ». En 4e, tu
> l'écrivais : $P(n) = 5 + 2n$, sans jamais nommer l'objet lui-même. Cette année, on lui
> donne enfin son nom — une **fonction** — et le vocabulaire qui l'accompagne : **image**,
> **antécédent**, **courbe représentative**. Le fond, tu le connais déjà. On pose juste
> les mots définitifs, ceux que tu retrouveras en Seconde.

---

## 1. Ce qu'est une fonction

> **Définition.** Une **fonction** est un procédé qui, à un nombre, associe **un seul**
> autre nombre.

On note souvent la fonction $f$. Le nombre associé à $x$ se note $f(x)$, qui se lit
« $f$ **de** $x$ ». On écrit aussi, avec la flèche déjà vue en 4e :

$$\boxed{f : x \longmapsto f(x)}$$

C'est exactement l'écriture $P(n)$ de la 4e, mais on parle maintenant de **la fonction
$f$** comme d'un objet à part entière.

> **Exemple.** Soit $f$ la fonction définie par $f(x) = 2x + 3$.
> Pour $x = 4$ : $f(4) = 2 \times 4 + 3 = 11$.

**La condition, la même depuis la 5e.** À chaque nombre de départ ne correspond qu'**une
seule** valeur d'arrivée. C'est ce qui autorise à parler de fonction.

> ⚠️ **$f(4)$ n'est pas $f \times 4$.** Les parenthèses disent « la valeur donnée à $x$ »,
> pas une multiplication. Le piège n°1 de la notation, déjà signalé en 4e.

---

## 2. Image et antécédent — le cœur du chapitre

Deux mots nouveaux, deux calculs **opposés**. C'est la difficulté principale de l'année :
prends le temps de la régler ici.

> **Définitions.** Soit $f$ une fonction.
> - Le nombre $f(x)$ est l'**image** de $x$ par $f$.
> - Si $f(x) = y$, alors $x$ est un **antécédent** de $y$ par $f$.

> **Exemple.** Avec $f(x) = 2x + 3$, on a $f(4) = 11$. Donc :
> $11$ est l'**image** de $4$, et $4$ est un **antécédent** de $11$.

### Deux sens de calcul à ne jamais confondre

| Tu cherches… | Tu connais… | Tu fais… |
|---|---|---|
| une **image** | le nombre de départ $x$ | tu **calcules** $f(x)$ — un simple remplacement |
| un **antécédent** | le nombre d'arrivée $y$ | tu **résous l'équation** $f(x) = y$ |

> **Chercher une image (direct).** Image de $5$ par $f$ : $f(5) = 2 \times 5 + 3 = 13$.

> **Chercher un antécédent (à l'envers).** Antécédent de $7$ par $f$ : on résout
> $2x + 3 = 7$, d'où $2x = 4$ et $x = 2$. On remonte le programme de calcul de la 4e.

### La grande asymétrie

> **Règle.** L'**image** d'un nombre est **unique** : un seul $f(x)$. Un **antécédent**,
> lui, peut **ne pas exister**, être **unique**, ou être **multiple**.

> **Exemple.** Pour la fonction $g(x) = x^2$ : $g(3) = 9$ **et** $g(-3) = 9$. Le nombre
> $9$ a donc **deux** antécédents, $3$ et $-3$. En revanche $-4$ n'a **aucun** antécédent
> par $g$ : un carré n'est jamais négatif.

> ⚠️ **Le piège image / antécédent.** « Image de $4$ » et « antécédent de $4$ » ne se
> calculent pas dans le même sens. Image de $4$ : on **remplace** $x$ par $4$. Antécédent
> de $4$ : on **résout** $f(x) = 4$. Inverser les deux est l'erreur qui coûte le plus de
> points de l'année.

---

## 3. Les différentes représentations d'une fonction

Une même fonction se dit de **trois** façons — comme les trois outils de la 4e, avec un
nom précis pour le graphique.

| Représentation | Ce qu'elle donne |
|---|---|
| une **formule** | toutes les valeurs, exactement : $f(x) = 2x + 3$ |
| un **tableau de valeurs** | quelques images choisies |
| une **courbe représentative** | l'allure d'ensemble, tous les points d'un coup |

> **Définition.** La **courbe représentative** de $f$ est l'ensemble des points de
> coordonnées $\big(x \,;\, f(x)\big)$ : en abscisse un nombre, en ordonnée son image.

### Lire une image, lire un antécédent sur la courbe

C'est la section 2, version graphique. Le **point de départ** change tout.

> **Image de $a$ — lecture verticale.** Pars de $a$ sur l'axe **horizontal** (les
> abscisses), monte jusqu'à la courbe, puis va lire à gauche sur l'axe **vertical**.

> **Antécédent de $b$ — lecture horizontale.** Pars de $b$ sur l'axe **vertical** (les
> ordonnées), rejoins la courbe, puis **descends** vers l'axe horizontal.

> ⚠️ **Le sens de lecture.** Pour une **image**, tu pars de l'axe des **abscisses**. Pour
> un **antécédent**, tu pars de l'axe des **ordonnées**. Si une droite horizontale coupe
> la courbe en **plusieurs** points, le nombre a **plusieurs** antécédents — c'est normal.

---

## 4. Les fonctions linéaires

> **Définition.** Une fonction **linéaire** est une fonction de la forme
> $$\boxed{f(x) = ax}$$
> où $a$ est un nombre fixe, appelé **coefficient** de la fonction.

> **Exemple.** $f(x) = 3x$ est linéaire, de coefficient $3$. Alors $f(5) = 15$ et
> $f(-2) = -6$.

### Le lien avec la proportionnalité

> **Règle.** Dire « $y$ est **proportionnel** à $x$, de coefficient $a$ » et dire
> « $y = f(x)$ avec $f$ **linéaire** de coefficient $a$ » signifient **la même chose**.
> Le coefficient de la fonction **est** le coefficient de proportionnalité.

> **Exemple.** Un tissu coûte $6$ € le mètre. Le prix est proportionnel à la longueur :
> $f(x) = 6x$. Pour $4$ m : $f(4) = 24$ €. C'est la situation de proportionnalité de la
> 5e, écrite comme une fonction.

### Représentation et coefficient

> **Propriété.** La courbe d'une fonction linéaire est une **droite passant par
> l'origine** — exactement la caractérisation graphique de la proportionnalité vue en 5e.

Pour retrouver le coefficient à partir d'une image, on divise :

> **Exemple.** Si $f$ est linéaire et $f(2) = 6$, alors $a = \dfrac{f(2)}{2} = \dfrac{6}{2} = 3$,
> donc $f(x) = 3x$.

---

## 5. Résoudre graphiquement une équation ou une inéquation linéaire

Tout se ramène à la lecture d'**images** et d'**antécédents** de la section 3.

> **Résoudre $f(x) = k$**, c'est chercher **le(s) antécédent(s)** de $k$ : lecture
> horizontale à partir de $k$ sur l'axe vertical.

> **Exemple.** Avec $f(x) = 2x$, résoudre $2x = 6$ revient à chercher l'antécédent de $6$.
> Par le calcul : $x = 3$. Sur le graphique : depuis $6$ en ordonnée, on rejoint la
> droite, on descend, on lit $3$.

> **Résoudre une inéquation $f(x) < k$**, c'est repérer les $x$ pour lesquels la courbe
> est **en dessous** de la droite horizontale $y = k$.

> **Exemple.** $2x < 6$ : la droite $y = 2x$ est en dessous de $y = 6$ tant que $x < 3$.
> La solution est l'ensemble des nombres **inférieurs à $3$**.

---

## 6. Les fonctions affines

> **Définition.** Une fonction **affine** est une fonction de la forme
> $$\boxed{f(x) = ax + b}$$
> où $a$ est le **coefficient directeur** et $b$ l'**ordonnée à l'origine**.

> **Exemple.** $f(x) = 2x + 3$ est affine : $a = 2$, $b = 3$. Une fonction linéaire est
> le **cas particulier** $b = 0$ (et c'est alors, et seulement alors, une
> proportionnalité).

### Représentation

> **Propriété.** La courbe d'une fonction affine est une **droite**. Elle passe par
> l'origine **uniquement si** $b = 0$.

### Déterminer graphiquement les deux coefficients

> **Méthode.**
> 1. **$b$** se lit là où la droite **coupe l'axe vertical** : c'est $f(0)$, l'ordonnée à
>    l'origine.
> 2. **$a$** se lit sur la pente : quand on avance de $1$ en abscisse, la droite **monte
>    de $a$** (ou descend, si $a$ est négatif).

> **Exemple.** Une droite coupe l'axe vertical en $1$ et, quand $x$ augmente de $1$,
> l'ordonnée augmente de $2$. Alors $b = 1$, $a = 2$, donc $f(x) = 2x + 1$.
> Avec deux points $(0\,;1)$ et $(2\,;5)$ : $a = \dfrac{5 - 1}{2 - 0} = 2$. ✓

---

## 7. La fonction carré

> **Définition.** La fonction **carré** est la fonction $f(x) = x^2$.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $x^2$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |

> **Propriété.** Sa courbe est une **parabole** : elle passe par l'origine, elle est
> **toujours au-dessus** de l'axe horizontal (un carré est positif ou nul), et elle est
> **symétrique** par rapport à l'axe vertical.

Cette symétrie explique la section 2 : deux nombres opposés ont **la même image**. Donc
un nombre positif a **deux** antécédents, et un nombre négatif **aucun**.

> **Exemple.** Image de $-4$ par la fonction carré : $(-4)^2 = 16$. Antécédents de $16$ :
> $4$ et $-4$. Antécédents de $-9$ : **aucun**.

---

## 8. À retenir absolument

| | |
|---|---|
| Fonction $f$ | à un nombre, associe **un seul** nombre |
| $f(x)$ | se lit « $f$ de $x$ » — **pas** $f \times x$ |
| Image de $x$ | le nombre $f(x)$ : on **calcule** (unique) |
| Antécédent de $y$ | un $x$ tel que $f(x) = y$ : on **résout** (0, 1 ou plusieurs) |
| Lire une image | partir de l'axe des **abscisses** (vertical) |
| Lire un antécédent | partir de l'axe des **ordonnées** (horizontal) |
| Fonction linéaire | $f(x) = ax$ · droite par l'**origine** · **proportionnalité** |
| Fonction affine | $f(x) = ax + b$ · $a$ = coeff. directeur, $b$ = ordonnée à l'origine |
| Coeff. directeur $a$ | avance de $1$ → monte de $a$ |
| Fonction carré | $f(x) = x^2$ · **parabole**, toujours positive, symétrique |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre image et antécédent.** Image de $4$ : on **remplace** $x$ par $4$.
   Antécédent de $4$ : on **résout** $f(x) = 4$. Deux calculs opposés — c'est l'erreur
   n°1 de l'année.
2. **Chercher un antécédent par un calcul direct.** Un antécédent ne se « calcule » pas
   en remplaçant : il faut **résoudre une équation**.
3. **Croire que tout nombre a un antécédent, et un seul.** L'**image** est unique, pas
   l'antécédent : $9$ en a deux par la fonction carré, $-4$ n'en a aucun.
4. **Se tromper d'axe sur le graphique.** Pour une image on part des **abscisses**, pour
   un antécédent des **ordonnées**. Partir du mauvais axe donne une réponse fausse.
5. **Confondre $a$ et $b$ dans $ax + b$.** $a$ est la **pente** (coefficient directeur),
   $b$ l'endroit où la droite **coupe l'axe vertical**. Les inverser fait tracer la
   mauvaise droite.
6. **Oublier le carré d'un négatif.** $(-3)^2 = 9$, pas $-9$ : c'est pour cela qu'un
   nombre positif a deux antécédents par la fonction carré.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
(PDF correspondant : docs/programme-college-cycle4-maths-2026.pdf)
Thème « Proportionnalité, fonctions », entrée « Fonctions », niveau TROISIÈME :
lignes 1058 à 1068 (l. 1058 titre « Fonctions », l. 1059 « Objectifs d'apprentissage »,
l. 1060-1068 les objectifs). Chapeau du thème lu également : lignes 968 à 986.
L'entrée « Proportionnalité » de la 3e (l. 1044-1057) a aussi été lue : elle contient
l. 1057 « Connaitre et utiliser les fonctions linéaires » — objectif partagé avec
l'entrée Fonctions, traité ici du point de vue fonctionnel.

LES OBJECTIFS (l. 1060-1068) ET LEUR SECTION
- l.1060 « Utiliser les différentes représentations d'une fonction. »   -> sections 1 et 3
- l.1061 « Définir et connaitre le vocabulaire : image, antécédents. »   -> section 2
- l.1063 « Définir et utiliser les fonctions linéaires. »                -> section 4
- l.1064 « Résoudre graphiquement des équations et des inéquations linéaires. » -> section 5
- l.1065 « Relier fonctions linéaires et proportionnalité. »             -> section 4
- l.1066 « Définir et utiliser les fonctions affines. »                  -> section 6
- l.1067 « Déterminer graphiquement les coefficients d'une fonction affine. » -> section 6
- l.1068 « Représenter la fonction carré. »                              -> section 7
Ordre du BO respecté. La section 1 (définition « fonction » + notation f(x)) précède le
vocabulaire image/antécédent parce que le gabarit impose d'ouvrir sur une définition et
parce que « image » se définit à partir de f(x). À valider.

CADRE — « SANS ÉTUDE GÉNÉRALE DE LA NOTION DE FONCTION » (chapeau, l. 984)
Le chapeau (l. 980-984) précise : « Des exemples de fonctions sont étudiés en troisième,
sans étude générale de la notion de fonction. » J'ai donc VOLONTAIREMENT EXCLU :
ensemble de définition, variations (croissance/décroissance) comme propriété formalisée,
notation intervalle, tableau de variation, la notion générale d'image/antécédent
au-delà des exemples. La fonction est présentée par ses EXEMPLES (linéaire, affine,
carré), comme le demande le texte.

INTRODUCTION DU VOCABULAIRE FONCTIONNEL COMPLET
Conformément à la consigne et aux notes de production des fiches 5e et 4e :
- « image », « antécédent », « f(x) », « la fonction f », « courbe représentative »
  sont ABSENTS des entrées 5e (l. 1011-1020) et 4e (l. 1036-1042). Ils apparaissent
  pour la première fois en 3e (l. 1061 pour image/antécédent). C'est donc ICI qu'ils
  sont introduits.
- La fiche 4e a introduit la notation P(n) (« P de n ») sur la seule foi du chapeau
  l. 985-986. La section 1 s'appuie dessus explicitement (« c'est l'écriture P(n) de la
  4e ») et la généralise en « la fonction f » et f(x). Si le relecteur a finalement
  RETIRÉ la notation P(n) de la 4e (elle y est signalée comme « point le plus
  discutable »), la phrase de continuité de la section 1 est à réécrire, mais la
  section reste autonome.

POINT DE SOIN — IMAGE / ANTÉCÉDENT (difficulté n°1)
Traité en section 2 (définitions + tableau des deux sens de calcul + asymétrie
unicité) ET en section 3 (sens de lecture graphique : abscisses pour l'image,
ordonnées pour l'antécédent). Deux pièges dédiés (⚠️ fin de section 2 et fin de
section 3) + erreurs 1, 2, 3, 4. L'exemple de la fonction carré (9 a deux antécédents,
-4 n'en a aucun) sert de fil rouge entre les sections 2 et 7.

FONCTIONS LINÉAIRES ET AFFINES — VÉRIFICATION DEMANDÉE
Présentes explicitement : l.1063 « Définir et utiliser les fonctions linéaires »,
l.1066 « Définir et utiliser les fonctions affines ». Vocabulaire du BO employé tel
quel : « fonction linéaire », « fonction affine », « coefficient » (linéaire),
« coefficients » d'une affine (l.1067) — j'ai nommé les deux « coefficient directeur »
et « ordonnée à l'origine », termes usuels non écrits mot à mot dans l'extraction :
À CONFIRMER que ces deux appellations sont attendues en 3e (le BO dit seulement
« les coefficients d'une fonction affine », l. 1067).
Lien proportionnalité : l.1065 « Relier fonctions linéaires et proportionnalité » ->
section 4, relié à la caractérisation graphique de la proportionnalité de la 5e
(droite par l'origine) et au coefficient de proportionnalité.

À CONFRONTER AU PROGRAMME PAR LE RELECTEUR
1. « coefficient directeur » et « ordonnée à l'origine » (section 6) : appellations
   usuelles, non littérales dans l'extraction (l. 1067 dit « les coefficients »).
   Confirmer qu'on les attend dès la 3e ou s'il faut rester à « le coefficient a » et
   « le nombre b ».
2. Section 5 « équations et inéquations LINÉAIRES » (l. 1064) : j'ai illustré avec
   f(x)=2x (équation ax=k et inéquation ax<k). Faut-il aussi traiter le cas affine
   ax+b=k ? Le mot « linéaire » du BO plaide pour ax=k, mais la résolution graphique
   vaut aussi pour une affine. À trancher.
3. Section 7 « Représenter la fonction carré » (l. 1068) : le BO demande de la
   REPRÉSENTER. J'ai donné tableau + description de la parabole (symétrie, positivité).
   Les mots « parabole » et « symétrique » ne sont pas dans l'extraction : vérifier
   qu'ils sont admis en 3e (usuels, mais à confirmer).
4. Thalès : l.1056 « Relier la représentation graphique d'une situation de
   proportionnalité avec le théorème de Thalès » relève de l'entrée Proportionnalité de
   la 3e, pas de Fonctions. NON traité ici volontairement -> renvoyer à
   contenu/troisieme/maths/proportionnalite/. À confirmer qu'il n'y a pas de trou.
5. Prérequis cités : contenu/cinquieme/maths/fonctions/fiche.md (« en fonction de »,
   lecture graphique, caractérisation de la proportionnalité) et
   contenu/quatrieme/maths/fonctions/fiche.md (programme de calcul, variable, notation
   P(n), résolution ax+b=c pour les antécédents). Continuité assumée et signalée dans
   le corps.

Rédaction entièrement originale à partir du seul texte du BO. Aucun emprunt à un manuel
ni à un site de cours. Tous les exemples chiffrés ont été inventés et recalculés à la
main.
Statut : brouillon, non relu.
-->
