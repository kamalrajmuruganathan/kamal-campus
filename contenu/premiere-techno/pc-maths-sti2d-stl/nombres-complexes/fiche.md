---
id: 1sti2d-nombres-complexes
titre: "Nombres complexes"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 14
prerequis:
  - Trigonométrie (Première STI2D/STL)
  - Vecteurs et repérage (Seconde)
statut: brouillon
relu_par: null
---

# Nombres complexes

> Un chapitre que **seuls les élèves de STI2D et STL abordent en Première** — en voie
> générale, les complexes n'arrivent qu'en Terminale, et encore, en maths expertes.
>
> Ils existent pour une raison simple : $x^2 = -1$ n'a pas de solution réelle. On
> invente donc un nombre dont le carré vaut $-1$. Ce n'est pas un artifice : en
> électricité, les complexes décrivent les circuits en régime sinusoïdal bien plus
> simplement que la trigonométrie.

---

## 1. Le nombre $\mathrm{i}$

On pose un nombre, noté $\mathrm{i}$, tel que

$$\boxed{\mathrm{i}^2 = -1}$$

> ⚠️ En sciences physiques, on écrit souvent $\mathrm{j}$ au lieu de $\mathrm{i}$,
> pour éviter la confusion avec l'intensité du courant. Les deux notations désignent
> le même objet.

---

## 2. Forme algébrique

Tout nombre complexe $z$ s'écrit de façon **unique** :

$$\boxed{z = a + \mathrm{i}b} \qquad \text{avec } a, b \in \mathbb{R}$$

| Élément | Notation | Nature |
|---|---|---|
| **Partie réelle** | $\mathrm{Re}(z) = a$ | un réel |
| **Partie imaginaire** | $\mathrm{Im}(z) = b$ | un réel |

> ⚠️ **La partie imaginaire est un nombre RÉEL.** Pour $z = 3 + 5\mathrm{i}$, la
> partie imaginaire vaut $5$, et non $5\mathrm{i}$. C'est l'erreur la plus fréquente.

### Cas particuliers

- $b = 0$ : $z$ est **réel**
- $a = 0$ : $z$ est **imaginaire pur**

---

## 3. Représentation géométrique

Dans un repère orthonormé direct, on associe à $z = a + \mathrm{i}b$ le point
$\mathrm{M}(a\,;b)$, appelé **image** de $z$. Réciproquement, $z$ est l'**affixe**
de $\mathrm{M}$.

- L'axe des abscisses porte les **réels**
- L'axe des ordonnées porte les **imaginaires purs**

Ce plan s'appelle le **plan complexe**.

---

## 4. Conjugué

$$\boxed{\bar{z} = a - \mathrm{i}b}$$

Géométriquement, l'image de $\bar z$ est le **symétrique** de celle de $z$ par rapport
à l'axe des abscisses.

### Propriété décisive

$$z \times \bar{z} = a^2 + b^2 \qquad \text{— un nombre RÉEL positif}$$

> C'est cette propriété qui permet de **diviser** : on multiplie numérateur et
> dénominateur par le conjugué du dénominateur, exactement comme on rend rationnel
> un dénominateur contenant une racine carrée.

---

## 5. Module

$$\boxed{|z| = \sqrt{a^2 + b^2}}$$

C'est la **distance** de l'origine au point image — donc toujours un réel **positif**.

| Propriété | Formule |
|---|---|
| Lien avec le conjugué | $|z|^2 = z\bar{z}$ |
| Produit | $|zz'| = |z| \times |z'|$ |
| Quotient | $\left|\dfrac{z}{z'}\right| = \dfrac{|z|}{|z'|}$ |

---

## 6. Opérations

### Somme

On additionne parties réelles et parties imaginaires séparément :

$$(a + \mathrm{i}b) + (c + \mathrm{i}d) = (a+c) + \mathrm{i}(b+d)$$

### Produit

On développe **comme en algèbre**, puis on remplace $\mathrm{i}^2$ par $-1$ :

$$(a+\mathrm{i}b)(c+\mathrm{i}d) = ac + \mathrm{i}ad + \mathrm{i}bc + \mathrm{i}^2bd
= (ac - bd) + \mathrm{i}(ad + bc)$$

> **Exemple.** $(2 + 3\mathrm{i})(1 - \mathrm{i}) = 2 - 2\mathrm{i} + 3\mathrm{i} - 3\mathrm{i}^2
> = 2 + \mathrm{i} + 3 = 5 + \mathrm{i}$
>
> Le $-3\mathrm{i}^2$ devient $+3$ : c'est là que tout se joue.

### Quotient — la méthode du conjugué

$$\frac{z}{z'} = \frac{z \times \overline{z'}}{z' \times \overline{z'}}
= \frac{z \times \overline{z'}}{|z'|^2}$$

> **Exemple.** $\dfrac{1}{2+\mathrm{i}} = \dfrac{2-\mathrm{i}}{(2+\mathrm{i})(2-\mathrm{i})}
> = \dfrac{2-\mathrm{i}}{4+1} = \dfrac{2}{5} - \dfrac{1}{5}\mathrm{i}$

---

## 7. Argument et forme trigonométrique

Pour $z \neq 0$, l'**argument** $\theta$ est l'angle orienté entre l'axe des abscisses
et le vecteur allant de l'origine au point image.

$$\boxed{z = r\left(\cos\theta + \mathrm{i}\sin\theta\right)} \qquad \text{avec } r = |z|$$

### Passer d'une forme à l'autre

| Sens | Méthode |
|---|---|
| **Algébrique → trigonométrique** | calculer $r = \sqrt{a^2+b^2}$, puis $\cos\theta = \dfrac{a}{r}$ et $\sin\theta = \dfrac{b}{r}$ |
| **Trigonométrique → algébrique** | $a = r\cos\theta$ et $b = r\sin\theta$ |

> **Exemple.** $z = 1 + \mathrm{i}$ : $r = \sqrt{2}$, puis
> $\cos\theta = \sin\theta = \dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{2}$, donc
> $\theta = \dfrac{\pi}{4}$.
>
> $z = \sqrt{2}\left(\cos\dfrac{\pi}{4} + \mathrm{i}\sin\dfrac{\pi}{4}\right)$

> ⚠️ **Il faut les DEUX équations** pour déterminer $\theta$. Le cosinus seul laisse
> deux possibilités — c'est le sinus qui tranche entre elles.

---

## 8. À retenir absolument

| | |
|---|---|
| Définition | $\mathrm{i}^2 = -1$ |
| Forme algébrique | $z = a + \mathrm{i}b$, unique |
| Partie imaginaire | $b$, un **réel** |
| Conjugué | $\bar z = a - \mathrm{i}b$ |
| Propriété clé | $z\bar z = a^2 + b^2$, réel positif |
| Module | $|z| = \sqrt{a^2+b^2}$ |
| Diviser | multiplier par le **conjugué du dénominateur** |
| Forme trigonométrique | $z = r(\cos\theta + \mathrm{i}\sin\theta)$ |

---

## 9. Les erreurs qui coûtent des points

1. **Dire que la partie imaginaire de $3+5\mathrm{i}$ est $5\mathrm{i}$.** C'est $5$.
2. **Oublier de remplacer $\mathrm{i}^2$ par $-1$** dans un produit.
3. **Écrire $|z| = a + b$** au lieu de $\sqrt{a^2+b^2}$.
4. **Annoncer un module négatif** : c'est une distance, toujours positive.
5. **Multiplier par le conjugué du numérateur** au lieu de celui du dénominateur.
6. **Déterminer l'argument avec le seul cosinus** : il faut aussi le sinus.
7. **Confondre affixe et image** : l'affixe est le nombre, l'image est le point.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
mathématiques », section « Nombres complexes ».

⚠️ POINT REMARQUABLE : les nombres complexes ne figurent PAS au programme de première
générale (ni en spécialité, ni en enseignement scientifique) — ils y apparaissent
seulement en terminale, en maths expertes. C'est un contenu propre à STI2D/STL, lié
aux besoins de l'électricité en régime sinusoïdal.

Contenus explicitement lisibles dans l'extraction : « Forme algébrique : définition,
conjugué, module ; représentation dans un repère orthonormé direct ; somme, produit,
quotient ; module ; quotient. Argument et forme trigonométrique. »
Capacités : « Calculer et interpréter géométriquement la partie réelle, la partie
imaginaire, le [module] », « Passer de la forme algébrique à la forme trigonométrique
et vice versa ».

⚠️ LIMITE EXPLICITE DU PROGRAMME, respectée dans cette fiche : le commentaire officiel
précise que « La notation exponentielle et les opérations entre nombres complexes sous
forme trigonométrique sont étudiées en CLASSE TERMINALE ». Je n'ai donc introduit
NI la notation re^(iθ), NI la multiplication/division sous forme trigonométrique.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les équations du second degré à discriminant négatif sont-elles au programme de
  première ici ? Je ne les ai PAS traitées, faute de trace dans l'extraction.
- L'interprétation géométrique du module comme DISTANCE ENTRE DEUX POINTS
  (|z_B − z_A| = AB) est-elle exigible ?
- Le programme utilise-t-il la notation i ou j ? J'ai retenu i en signalant j.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
