---
id: 3e-math-puissances
titre: "Puissances : exposants négatifs et notation scientifique"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 14
prerequis:
  - "Puissances : carré et cube (5e)"
  - "Puissances d'exposant positif, produit de puissances (4e)"
  - "Inverse d'un nombre et sa notation (4e)"
  - "Multiplication et division de fractions (4e-3e)"
statut: brouillon
relu_par: null
---

# Puissances : exposants négatifs et notation scientifique

> Jusqu'ici l'exposant comptait des facteurs : $2^5$, c'est cinq fois le nombre $2$.
> Cette année il devient **négatif** — et un exposant négatif ne compte plus rien du
> tout. Il faut donc lui donner un autre sens : l'**inverse**. Une fois cette marche
> franchie, tu tiens l'écriture qui sert partout en sciences : la **notation scientifique**.

---

## Ce que tu sais déjà (5e et 4e)

Trois acquis sont supposés en place et **ne sont pas refaits ici** :

- la notation $a^n$, base, exposant, carré et cube — **« Puissances : carré et cube » (5e)** ;
- $\boxed{a^m \times a^n = a^{m+n}}$, $\boxed{a^n \times b^n = (a \times b)^n}$ et
  $10^n = 1$ suivi de $n$ zéros — **« Puissances d'exposant positif » (4e)** ;
- l'**inverse** d'un nombre non nul, $\dfrac{1}{a}$ — opérations sur les fractions **(4e)**.

Si $2^3 \times 2^4 = 2^7$ ne te vient pas tout seul, retourne à la fiche de 4e d'abord.

---

## 1. Les puissances d'exposant négatif

Pour un nombre $a$ **non nul** et un entier $n \geqslant 1$ :

$$\boxed{a^{-n} = \frac{1}{a^{\,n}}}$$

Un exposant négatif ne veut pas dire « nombre négatif » : il veut dire **inverse**.

> ⚠️ **Condition d'existence : $a \neq 0$.** $0^{-2}$ reviendrait à écrire
> $\dfrac{1}{0}$, qui n'existe pas. Avec un exposant négatif, la base n'est jamais nulle.

> **Exemple.** $2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8} = 0{,}125$ — un résultat
> **positif** : il n'y a aucun signe moins dedans.
>
> **Exemple.** $5^{-1} = \dfrac{1}{5} = 0{,}2$. L'exposant $-1$, c'est exactement
> l'inverse que tu connais depuis la 4e.

### L'exposant 0

$$\boxed{a^0 = 1 \qquad (a \neq 0)}$$

> **Pourquoi.** Un nombre divisé par lui-même vaut $1$ : $\dfrac{2^3}{2^3} = 1$.
> Mais la règle des quotients (section 2) donne $\dfrac{2^3}{2^3} = 2^{3-3} = 2^0$.
> Les deux calculs doivent s'accorder : donc $2^0 = 1$. Ce n'est pas une bizarrerie
> à apprendre par cœur, c'est la seule valeur qui rend les règles cohérentes.

### Les puissances de 10 négatives

$$\boxed{10^{-n} = \frac{1}{10^{\,n}}}
\qquad 10^{-1} = 0{,}1 \qquad 10^{-2} = 0{,}01 \qquad 10^{-3} = 0{,}001$$

**L'exposant, c'est le rang du $1$ après la virgule.** Et **multiplier par $10^{-n}$**, c'est
décaler la virgule de $n$ rangs vers la **gauche** : $47 \times 10^{-2} = 0{,}47$.

---

## 2. Multiplier et diviser des puissances

Les deux règles de 4e **restent vraies**, et elles valent désormais pour des exposants
**de n'importe quel signe**. La division en ajoute deux autres, symétriques.

$$\boxed{\frac{a^m}{a^n} = a^{\,m-n}} \ (a \neq 0)
\qquad\qquad
\boxed{\frac{a^n}{b^n} = \left(\frac{a}{b}\right)^{\!n}} \ (b \neq 0)$$

| Ce qui est commun | $\times$ | $\div$ |
|---|---|---|
| la **base** | on **additionne** les exposants | on **soustrait** les exposants |
| l'**exposant** | on **multiplie** les bases | on **divise** les bases |

> **Pourquoi la soustraction.** On simplifie les facteurs communs :
> $\dfrac{2^5}{2^3} = \dfrac{2\times2\times2\times2\times2}{2\times2\times2} = 2^2$.
> Il reste $5 - 3 = 2$ facteurs.

> **Exemple.** $\dfrac{10^7}{10^3} = 10^{7-3} = 10^4 = 10\,000$.
>
> **Exemple.** $\dfrac{3^2}{3^5} = 3^{2-5} = 3^{-3} = \dfrac{1}{27}$. L'exposant devient
> négatif tout seul : normal, on divise par plus grand.
>
> **Exemple.** $\dfrac{10^{-3}}{10^{-7}} = 10^{-3-(-7)} = 10^{-3+7} = 10^{4}$.
> **Soustraire un nombre négatif, c'est ajouter.** C'est ici qu'on perd le plus de points.
>
> **Exemple.** $10^{-4} \times 10^{7} = 10^{-4+7} = 10^{3}$, et
> $a^{n} \times a^{-n} = a^{0} = 1$ : un nombre multiplié par son inverse.
>
> **Exemple.** $\dfrac{6^3}{2^3} = \left(\dfrac{6}{2}\right)^{3} = 3^3 = 27$ —
> bien plus rapide que $216 \div 8$.

> ⚠️ **Si rien n'est commun, aucune règle ne s'applique.** $2^3 \times 5^4$ ne se
> simplifie pas : il faut calculer $8 \times 625 = 5\,000$.

### Méthode — réduire une expression à une seule puissance

1. Regarde **base par base** : regroupe ce qui a la même base.
2. Applique $+$ pour un produit, $-$ pour un quotient — **sur les exposants**.
3. Si l'exposant final est négatif et qu'on demande un nombre, passe à l'inverse.

> **Exemple.** $\dfrac{10^{5} \times 10^{-2}}{10^{-4}}$
> $$= \frac{10^{\,5+(-2)}}{10^{-4}} = \frac{10^{3}}{10^{-4}} = 10^{\,3-(-4)} = 10^{7}$$

---

## 3. La notation scientifique

C'est **l'écriture officielle des sciences** : tu la retrouveras en physique-chimie
toute ta scolarité. Un nombre y est écrit sous la forme

$$\boxed{a \times 10^{\,n}} \qquad \text{avec } 1 \leqslant a < 10
\ \text{ et } n \text{ entier relatif}$$

$a$ s'appelle la **mantisse**, ou plus simplement le nombre décimal de devant. La
condition $1 \leqslant a < 10$ signifie : **un seul chiffre, non nul, avant la virgule**.

> ✓ $3{,}2 \times 10^{4}$ · $1 \times 10^{-9}$ · $9{,}99 \times 10^{12}$
>
> ✗ $32 \times 10^{3}$ (deux chiffres devant) · $0{,}32 \times 10^{5}$ (un $0$ devant)
>
> Ces deux dernières écritures sont **numériquement justes**, mais ce ne sont **pas**
> des notations scientifiques. En contrôle, elles ne valent pas le point.

> ⚠️ **Le nombre $0$ n'a pas de notation scientifique** : aucun $a$ entre $1$ et $10$
> ne peut donner $0$. Pour un nombre **négatif**, le signe se met devant la mantisse :
> $-4\,500 = -4{,}5 \times 10^{3}$, et la condition porte alors sur $|a|$.

### Méthode — trouver la notation scientifique

<!-- schema:virgule -->
![On déplace la virgule pour garder un seul chiffre non nul devant : 32 000 = 3,2 × 10⁴ et 0,00058 = 5,8 × 10⁻⁴.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxNTAiIHk9IjUwIiB3aWR0aD0iMjYiIGhlaWdodD0iMzQiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTYzIiB5PSI3Mi45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48cmVjdCB4PSIxODAiIHk9IjUwIiB3aWR0aD0iMjYiIGhlaWdodD0iMzQiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTkzIiB5PSI3Mi45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD48cmVjdCB4PSIyMTAiIHk9IjUwIiB3aWR0aD0iMjYiIGhlaWdodD0iMzQiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjIzIiB5PSI3Mi45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48cmVjdCB4PSIyNDAiIHk9IjUwIiB3aWR0aD0iMjYiIGhlaWdodD0iMzQiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjUzIiB5PSI3Mi45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48cmVjdCB4PSIyNzAiIHk9IjUwIiB3aWR0aD0iMjYiIGhlaWdodD0iMzQiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjgzIiB5PSI3Mi45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48dGV4dCB4PSIyOTgiIHk9IjEwMCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+LDwvdGV4dD48Y2lyY2xlIGN4PSIxNzgiIGN5PSI5MCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjxwYXRoIGQ9Ik0gMjk4IDQ2IFEgMjgzIDI2IDI3My40IDM4LjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIyNjgsNDYgMjc3LDQxLjUgMjY5LjgsMzYuMSIgZmlsbD0iIzFmNmZlYiIvPjxwYXRoIGQ9Ik0gMjY4IDQ2IFEgMjUzIDI2IDI0My40IDM4LjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIyMzgsNDYgMjQ3LDQxLjUgMjM5LjgsMzYuMSIgZmlsbD0iIzFmNmZlYiIvPjxwYXRoIGQ9Ik0gMjM4IDQ2IFEgMjIzIDI2IDIxMy40IDM4LjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIyMDgsNDYgMjE3LDQxLjUgMjA5LjgsMzYuMSIgZmlsbD0iIzFmNmZlYiIvPjxwYXRoIGQ9Ik0gMjA4IDQ2IFEgMTkzIDI2IDE4My40IDM4LjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIxNzgsNDYgMTg3LDQxLjUgMTc5LjgsMzYuMSIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjIwIiB5PSI3MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj4zMiAwMDA8L3RleHQ+PHRleHQgeD0iNjIwIiB5PSI3MiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+PSAzLDIgw5cgMTDigbQ8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmxhIHZpcmd1bGUgcmVjdWxlIGRlIDQgcmFuZ3Mg4oaSIGV4cG9zYW50IDQ8L3RleHQ+PHJlY3QgeD0iMTUwIiB5PSIxNjAiIHdpZHRoPSIyNiIgaGVpZ2h0PSIzNCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxNjMiIHk9IjE4Mi45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48cmVjdCB4PSIxODAiIHk9IjE2MCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjM0IiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE5MyIgeT0iMTgyLjk1IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxyZWN0IHg9IjIxMCIgeT0iMTYwIiB3aWR0aD0iMjYiIGhlaWdodD0iMzQiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjIzIiB5PSIxODIuOTUiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHJlY3QgeD0iMjQwIiB5PSIxNjAiIHdpZHRoPSIyNiIgaGVpZ2h0PSIzNCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIyNTMiIHk9IjE4Mi45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48cmVjdCB4PSIyNzAiIHk9IjE2MCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjM0IiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI4MyIgeT0iMTgyLjk1IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41PC90ZXh0PjxyZWN0IHg9IjMwMCIgeT0iMTYwIiB3aWR0aD0iMjYiIGhlaWdodD0iMzQiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzEzIiB5PSIxODIuOTUiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjg8L3RleHQ+PHRleHQgeD0iMTc4IiB5PSIyMTAiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPiw8L3RleHQ+PGNpcmNsZSBjeD0iMjk4IiBjeT0iMjAwIiByPSI1IiBmaWxsPSIjYzI1ZTAwIi8+PHBhdGggZD0iTSAxNzggMTU2IFEgMTkzIDEzNiAyMDIuNiAxNDguOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48cG9seWdvbiBwb2ludHM9IjIwOCwxNTYgMjA2LjIsMTQ2LjEgMTk5LDE1MS41IiBmaWxsPSIjYzI1ZTAwIi8+PHBhdGggZD0iTSAyMDggMTU2IFEgMjIzIDEzNiAyMzIuNiAxNDguOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48cG9seWdvbiBwb2ludHM9IjIzOCwxNTYgMjM2LjIsMTQ2LjEgMjI5LDE1MS41IiBmaWxsPSIjYzI1ZTAwIi8+PHBhdGggZD0iTSAyMzggMTU2IFEgMjUzIDEzNiAyNjIuNiAxNDguOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48cG9seWdvbiBwb2ludHM9IjI2OCwxNTYgMjY2LjIsMTQ2LjEgMjU5LDE1MS41IiBmaWxsPSIjYzI1ZTAwIi8+PHBhdGggZD0iTSAyNjggMTU2IFEgMjgzIDEzNiAyOTIuNiAxNDguOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48cG9seWdvbiBwb2ludHM9IjI5OCwxNTYgMjk2LjIsMTQ2LjEgMjg5LDE1MS41IiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iMjAiIHk9IjE4MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj4wLDAwMDU4PC90ZXh0Pjx0ZXh0IHg9IjYyMCIgeT0iMTgyIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj49IDUsOCDDlyAxMOKBu+KBtDwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjIzOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bGEgdmlyZ3VsZSBhdmFuY2UgZGUgNCByYW5ncyDihpIgZXhwb3NhbnQg4oiSNDwvdGV4dD48L3N2Zz4=)
*On déplace la virgule pour garder un seul chiffre non nul devant : 32 000 = 3,2 × 10⁴ et 0,00058 = 5,8 × 10⁻⁴.*
<!-- /schema -->

1. Place la virgule pour n'avoir **qu'un seul chiffre non nul devant** : tu obtiens $a$.
2. Compte de **combien de rangs** la virgule a bougé : c'est $n$.
3. Nombre **grand** ($\geqslant 10$) → $n$ **positif** ; nombre **petit** ($< 1$) →
   $n$ **négatif**.
4. **Vérifie** : est-ce que $a \times 10^n$ redonne bien le nombre de départ ?

> **Grand nombre.** $32\,000$ : la virgule (invisible, à droite) recule de $4$ rangs.
> $$32\,000 = 3{,}2 \times 10^{4}$$
>
> **Petit nombre.** $0{,}00058$ : la virgule avance de $4$ rangs pour arriver après le $5$.
> $$0{,}00058 = 5{,}8 \times 10^{-4}$$
> Compte les **rangs**, pas les zéros : c'est la source d'erreur n°1.

**Pour revenir à l'écriture décimale**, on décale dans l'autre sens :
$6{,}1 \times 10^{5} = 610\,000$ et $6{,}1 \times 10^{-5} = 0{,}000061$.

### L'ordre de grandeur

C'est la puissance de 10 seule : elle dit **la taille** du nombre, sans le détail.
Pour **comparer** deux nombres en notation scientifique, on regarde donc d'abord les
**exposants** ; les mantisses ne départagent qu'à exposants égaux.

> La masse d'un électron est d'environ $9{,}1 \times 10^{-31}$ kg, celle d'un proton
> $1{,}7 \times 10^{-27}$ kg. Inutile de comparer $9{,}1$ et $1{,}7$ : $-27 > -31$, donc
> **le proton est le plus lourd**, sans poser aucune division. La puissance de 10 tranche.
> *(Le rapport exact, lui, demande les mantisses : $\frac{1{,}7}{9{,}1} \times 10^{4}
> \approx 1\,900$ fois.)*

---

## 4. Résoudre des problèmes avec la notation scientifique

### Multiplier ou diviser deux nombres écrits ainsi

On sépare : les mantisses ensemble, les puissances de 10 ensemble.

> **Exemple.** $(3 \times 10^{5}) \times (4 \times 10^{-8})
> = (3 \times 4) \times (10^{5} \times 10^{-8}) = 12 \times 10^{-3}$.
>
> **Ce n'est pas fini** : $12$ n'est pas entre $1$ et $10$. On réécrit
> $12 = 1{,}2 \times 10^{1}$, d'où $12 \times 10^{-3} = 1{,}2 \times 10^{-2}$.

> ⚠️ **Cette dernière étape s'oublie tout le temps.** Après un calcul, **relis ta
> mantisse** : si elle n'est pas entre $1$ et $10$, tu n'as pas répondu à la question.

### Les préfixes des unités

<!-- schema:prefixes -->
![Les préfixes des unités sont des puissances de 10 : de nano (10⁻⁹) à giga (10⁹), on multiplie par 1 000 d’un préfixe au suivant.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMTkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIxOTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSI5MCIgeDI9IjYzMCIgeTI9IjkwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjY0MCw5MCA2MzAsODUgNjMwLDk1IiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjUwIiB5MT0iODYiIHgyPSI1MCIgeTI9Ijk0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjgxLjExIiB5MT0iODYiIHgyPSI4MS4xMSIgeTI9Ijk0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMi4yMiIgeTE9Ijg2IiB4Mj0iMTEyLjIyIiB5Mj0iOTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTQzLjMzIiB5MT0iODYiIHgyPSIxNDMuMzMiIHkyPSI5NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNzQuNDQiIHkxPSI4NiIgeDI9IjE3NC40NCIgeTI9Ijk0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwNS41NiIgeTE9Ijg2IiB4Mj0iMjA1LjU2IiB5Mj0iOTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjM2LjY3IiB5MT0iODYiIHgyPSIyMzYuNjciIHkyPSI5NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNjcuNzgiIHkxPSI4NiIgeDI9IjI2Ny43OCIgeTI9Ijk0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI5OC44OSIgeTE9Ijg2IiB4Mj0iMjk4Ljg5IiB5Mj0iOTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzMwIiB5MT0iODYiIHgyPSIzMzAiIHkyPSI5NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNjEuMTEiIHkxPSI4NiIgeDI9IjM2MS4xMSIgeTI9Ijk0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM5Mi4yMiIgeTE9Ijg2IiB4Mj0iMzkyLjIyIiB5Mj0iOTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDIzLjMzIiB5MT0iODYiIHgyPSI0MjMuMzMiIHkyPSI5NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NTQuNDQiIHkxPSI4NiIgeDI9IjQ1NC40NCIgeTI9Ijk0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ4NS41NiIgeTE9Ijg2IiB4Mj0iNDg1LjU2IiB5Mj0iOTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTE2LjY3IiB5MT0iODYiIHgyPSI1MTYuNjciIHkyPSI5NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NDcuNzgiIHkxPSI4NiIgeDI9IjU0Ny43OCIgeTI9Ijk0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU3OC44OSIgeTE9Ijg2IiB4Mj0iNTc4Ljg5IiB5Mj0iOTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjEwIiB5MT0iODYiIHgyPSI2MTAiIHkyPSI5NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjgwIiB4Mj0iNTAiIHkyPSIxMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iOTAiIHI9IjUiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSI1MCIgeT0iNjYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEw4oG74oG5PC90ZXh0Pjx0ZXh0IHg9IjUwIiB5PSIxMjIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm5hbm8gKG4pPC90ZXh0PjxsaW5lIHgxPSIxNDMuMzMiIHkxPSI4MCIgeDI9IjE0My4zMyIgeTI9IjEwMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTQzLjMzIiBjeT0iOTAiIHI9IjUiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIxNDMuMzMiIHk9IjY2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMOKBu+KBtjwvdGV4dD48dGV4dCB4PSIxNDMuMzMiIHk9IjEyMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bWljcm8gKMK1KTwvdGV4dD48bGluZSB4MT0iMjM2LjY3IiB5MT0iODAiIHgyPSIyMzYuNjciIHkyPSIxMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjIzNi42NyIgY3k9IjkwIiByPSI1IiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iMjM2LjY3IiB5PSI2NiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTDigbvCszwvdGV4dD48dGV4dCB4PSIyMzYuNjciIHk9IjEyMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bWlsbGkgKG0pPC90ZXh0PjxsaW5lIHgxPSIzMzAiIHkxPSI4MCIgeDI9IjMzMCIgeTI9IjEwMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMzMwIiBjeT0iOTAiIHI9IjUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIzMzAiIHk9IjY2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMOKBsCA9IDE8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxMjIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnVuaXTDqTwvdGV4dD48bGluZSB4MT0iNDIzLjMzIiB5MT0iODAiIHgyPSI0MjMuMzMiIHkyPSIxMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjQyMy4zMyIgY3k9IjkwIiByPSI1IiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iNDIzLjMzIiB5PSI2NiIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTDCszwvdGV4dD48dGV4dCB4PSI0MjMuMzMiIHk9IjEyMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+a2lsbyAoayk8L3RleHQ+PGxpbmUgeDE9IjUxNi42NyIgeTE9IjgwIiB4Mj0iNTE2LjY3IiB5Mj0iMTAwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI1MTYuNjciIGN5PSI5MCIgcj0iNSIgZmlsbD0iI2MyNWUwMCIvPjx0ZXh0IHg9IjUxNi42NyIgeT0iNjYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEw4oG2PC90ZXh0Pjx0ZXh0IHg9IjUxNi42NyIgeT0iMTIyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5tw6lnYSAoTSk8L3RleHQ+PGxpbmUgeDE9IjYxMCIgeTE9IjgwIiB4Mj0iNjEwIiB5Mj0iMTAwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI2MTAiIGN5PSI5MCIgcj0iNSIgZmlsbD0iI2MyNWUwMCIvPjx0ZXh0IHg9IjYxMCIgeT0iNjYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEw4oG5PC90ZXh0Pjx0ZXh0IHg9IjYxMCIgeT0iMTIyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5naWdhIChHKTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjE2NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ROKAmXVuIHByw6lmaXhlIGF1IHN1aXZhbnQgOiDDlyAxIDAwMCA9IMOXIDEwwrM8L3RleHQ+PC9zdmc+)
*Les préfixes des unités sont des puissances de 10 : de nano (10⁻⁹) à giga (10⁹), on multiplie par 1 000 d’un préfixe au suivant.*
<!-- /schema -->

Ce sont des puissances de 10 déguisées : c'est ce qui fait le lien avec les
**conversions** et avec la physique-chimie.

| giga (G) | méga (M) | kilo (k) | milli (m) | micro (µ) | nano (n) |
|---|---|---|---|---|---|
| $10^{9}$ | $10^{6}$ | $10^{3}$ | $10^{-3}$ | $10^{-6}$ | $10^{-9}$ |

> **Exemple.** Un virus mesure $2 \times 10^{-7}$ m. Combien en faut-il alignés pour
> atteindre $1$ mm ? On convertit d'abord : $1$ mm $= 10^{-3}$ m.
> $$\frac{10^{-3}}{2 \times 10^{-7}} = 0{,}5 \times 10^{\,-3-(-7)}
> = 0{,}5 \times 10^{4} = 5 \times 10^{3}$$
> Soit **$5\,000$ virus**. On renormalise à la fin : $0{,}5$ n'est pas une mantisse valable.

### Méthode générale de problème

1. Écris chaque donnée en **notation scientifique**, avec son unité.
2. Convertis pour que **toutes les unités soient les mêmes**.
3. Calcule mantisses et puissances de 10 **séparément**.
4. **Renormalise** le résultat, puis contrôle l'ordre de grandeur : est-il plausible ?

---

## 5. Cas particuliers et pièges de calcul

| Écriture | Valeur | Pourquoi |
|---|---|---|
| $a^0$ ($a \neq 0$) | $1$ | seule valeur compatible avec $\frac{a^n}{a^n}=1$ |
| $a^{-1}$ | $\frac{1}{a}$ | c'est l'inverse |
| $10^{-3}$ | $0{,}001$ | le $1$ est au $3^\text{e}$ rang |
| $(-2)^{-2}$ | $\frac{1}{4}$ | exposant pair → positif, puis inverse |
| $(-2)^{-3}$ | $-\frac{1}{8}$ | exposant impair → négatif, puis inverse |
| $2^{-3}$ | $\frac{1}{8}$ | **positif** : l'exposant est négatif, pas le nombre |
| $0^{-2}$ | n'existe pas | division par zéro |

> ⚠️ **Le piège central du chapitre.** Un exposant négatif ne rend jamais le
> résultat négatif. $10^{-2} = 0{,}01$, un nombre **positif**, simplement **petit**.

> **Pour aller plus loin — hors programme du cycle 4.** L'écriture $(a^m)^n$
> (« puissance d'une puissance ») n'est demandée à aucun des trois niveaux du cycle 4.
> Si tu la croises, développe : $(10^2)^3 = 10^2 \times 10^2 \times 10^2 = 10^6$.

---

## 6. Un détour par l'histoire

- **L'échiquier de Sissa** — un grain sur la première case, deux sur la deuxième,
  quatre sur la troisième… La dernière en réclame $2^{63} \approx 9{,}2 \times 10^{18}$.
- **Le papyrus de Rhind**, l'un des plus vieux textes mathématiques connus, où l'on
  trouve déjà des multiplications par doublements successifs.

---

## 7. À retenir absolument

| | |
|---|---|
| Exposant négatif | $\boxed{a^{-n} = \dfrac{1}{a^n}}$, avec $a \neq 0$ |
| Exposant 0 | $\boxed{a^0 = 1}$, avec $a \neq 0$ |
| Puissance de 10 négative | $10^{-n} = 0{,}0\dots01$, le $1$ au rang $n$ |
| Même base, produit | $a^m \times a^n = a^{m+n}$ |
| Même base, quotient | $\boxed{\dfrac{a^m}{a^n} = a^{m-n}}$ |
| Même exposant | $a^n b^n = (ab)^n$ et $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$ |
| Notation scientifique | $\boxed{a \times 10^n}$ avec $1 \leqslant a < 10$ |
| Ordre de grandeur | la puissance de 10 seule |
| Comparer | l'**exposant** d'abord, la mantisse ensuite |
| Signe | $2^{-3}$ est **positif** ($= 0{,}125$) |

---

## 8. Les erreurs qui coûtent des points

1. **Croire qu'un exposant négatif donne un nombre négatif** : $10^{-3} = 0{,}001$,
   pas $-1\,000$ ni $-0{,}001$. Négatif dans l'exposant $\neq$ négatif dans le résultat.
2. **Oublier de renormaliser la mantisse** : $12 \times 10^{-3}$ n'est **pas** une
   notation scientifique — c'est $1{,}2 \times 10^{-2}$. L'erreur la plus fréquente
   en fin d'exercice.
3. **Se tromper de signe en soustrayant les exposants** : $\dfrac{10^{-3}}{10^{-7}}
   = 10^{-3+7} = 10^{4}$, pas $10^{-10}$. Recopie les parenthèses : $-3 - (-7)$.
4. **Compter les zéros au lieu des rangs de virgule** : dans $0{,}00058$, la virgule
   se déplace de $4$ rangs, même s'il n'y a que $3$ zéros après la virgule. Compte les **sauts**.
5. **Comparer les mantisses avant les exposants** : $9{,}5 \times 10^{-6}$ est plus
   **petit** que $1{,}2 \times 10^{-5}$, bien que $9{,}5 > 1{,}2$.
6. **Additionner les mantisses dans un produit** : $(3 \times 10^5)(4 \times 10^{-8})$
   utilise $3 \times 4$, pas $3 + 4$. Seuls les **exposants** s'additionnent.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Nombres et calculs », section « Troisième » (lignes 581 à 644),
entrée « Puissances » : lignes 591 à 604.

Automatismes (l. 593-595), tous acquis de 4e -> bloc « Ce que tu sais déjà », non retraités :
- « Puissance comme multiplication itérée : 3 × 3 × 3 × 3 = 3^4 »
- « Multiplication de puissances d'exposant positif d'un nombre »
- « Multiplication de puissances de même exposant positif de deux nombres »

Objectifs d'apprentissage (l. 597-601), traités un par un et DANS L'ORDRE :
- « Définir les puissances d'exposant négatif d'un nombre » (l. 597) -> section 1
- « Multiplier et diviser des puissances » (l. 598) -> section 2
- « Déterminer la notation scientifique d'un nombre » (l. 600) -> section 3
- « Résoudre des problèmes notamment en utilisant la notation scientifique » (l. 601)
  -> section 4
Prolongements (l. 603-604) : « L'échiquier de Sissa », « Le papyrus de Rhind » -> section 6.
Commentaire général du thème (l. 348-353) : les exposants négatifs sont rattachés aux
sciences de l'atome, à la microbiologie et aux nanotechnologies ; « on introduit en
fonction des besoins les préfixes des puissances de dix de nano à giga » et « on fait
le lien avec les conversions » -> tableau des préfixes et exemples (électron, virus)
en section 4.

=== LES DEUX QUESTIONS OUVERTES LAISSÉES PAR L'AUTEUR DE LA 4e — VERDICTS ===

1. (a^m)^n — LA PUISSANCE D'UNE PUISSANCE. Revérifié, et TRANCHÉ : ce n'est PAS une
   omission d'extraction, c'est une absence réelle du texte.
   Méthode de vérification :
   - relevé exhaustif des occurrences de « puissance » / « exposant » dans le .txt :
     lignes 9, 14, 19, 346, 348, 350, 351, 353, 475, 480, 483-485, 544, 548, 552-555,
     591, 593-595, 597-598, 628. Aucune ne mentionne (a^m)^n ni « puissance d'une
     puissance ».
   - contre-vérification indépendante sur le PDF avec `pdftotext -layout` : l'entrée
     « Puissances » de 3e y apparaît intégralement (Automatismes puis 4 objectifs puis
     Prolongements) et est IDENTIQUE à l'extraction .txt. Aucune ligne perdue.
   - ATTENTION, point utile au relecteur : la ligne 599 du .txt est VIDE, entre
     « Multiplier et diviser des puissances » (598) et « Déterminer la notation
     scientifique » (600). Ce blanc pouvait laisser croire à un objectif perdu (c'est
     exactement là qu'on attendrait (a^m)^n). L'extraction -layout du PDF montre que
     non : c'est un simple saut de page, les deux objectifs se suivent directement.
   VERDICT : réellement hors des trois entrées « Puissances » du cycle 4. Je ne l'ai
   donc PAS enseignée comme règle. Elle figure uniquement en encadré « pour aller plus
   loin », explicitement signalé hors programme, avec la parade (développer le produit).
   RESTE AU RELECTEUR : décider si cette mention doit être conservée ou supprimée. Elle
   est utile (les élèves la rencontrent en exercices), mais elle n'est pas exigible.

2. EXPOSANT 0. TRANCHÉ dans l'autre sens qu'en 4e : je l'INTRODUIS ici (section 1),
   alors que la fiche de 4e l'avait délibérément écarté. Justification :
   - l'objectif l. 598 « Multiplier et diviser des puissances » impose la règle
     a^m / a^n = a^(m-n) ; appliquée à m = n elle produit mécaniquement a^0 ;
   - l'objectif l. 597 « puissances d'exposant négatif » suppose des exposants entiers
     relatifs, ensemble qui contient 0 ;
   - sans a^0 = 1, la règle du quotient a un trou et l'élève bute dessus dès le premier
     exercice.
   Le texte officiel ne l'écrit toutefois NULLE PART, à aucun niveau. Je l'ai donc
   présenté non comme un attendu mais comme une CONSÉQUENCE des règles, avec sa
   justification. À CONFIRMER PAR LE RELECTEUR : niveau d'exigence attendu (simple
   cohérence, ou résultat à connaître ?).

=== AUTRES POINTS À SOUMETTRE AU RELECTEUR ===

3. QUOTIENT DE MÊME EXPOSANT : (a/b)^n = a^n / b^n (section 2). Le texte dit seulement
   « Multiplier et diviser des puissances » (l. 598), sans préciser les cas. J'ai
   symétrisé les deux règles de 4e (même base / même exposant) dans les deux opérations,
   soit quatre règles. La règle du quotient de même exposant est donc une INFÉRENCE de
   symétrie, pas une citation. À valider ou à retirer.
4. BORNES DE LA MANTISSE : j'écris 1 <= a < 10, et pour les négatifs 1 <= |a| < 10.
   Le programme dit seulement « Déterminer la notation scientifique d'un nombre » sans
   définir la forme. La définition retenue est la convention usuelle ; le cas des nombres
   NÉGATIFS et le cas de ZÉRO (pas de notation scientifique) sont mes ajouts.
5. VOCABULAIRE « mantisse » : absent du programme. Employé une fois, immédiatement
   glosé (« le nombre décimal de devant »). À retirer si le relecteur le juge prématuré
   en 3e.
6. « ORDRE DE GRANDEUR » (section 3) : l'expression figure dans le commentaire général
   du thème (l. 351, « en lien avec les unités, les ordres de grandeur ») mais pas dans
   l'entrée « Puissances » elle-même. Poids donné à confirmer.
7. PRÉFIXES : le texte dit « on introduit EN FONCTION DES BESOINS les préfixes des
   puissances de dix de nano à giga » (l. 352-353). J'ai donné les six préfixes de
   nano à giga, sans centi/déci/déca/hecto. La formule « en fonction des besoins »
   suggère qu'aucune liste n'est exigible telle quelle : le tableau est un outil, pas
   une liste à mémoriser. Vérifier que la fiche ne laisse pas entendre l'inverse.
8. BASE NÉGATIVE avec exposant négatif ((-2)^-3, section 5) : prolongement du piège de
   signe traité en 4e. Non écrit dans l'entrée 3e. À confirmer.
9. Titre retenu : « Puissances : exposants négatifs et notation scientifique ». Le BO
   dit seulement « Puissances ». Choix fait pour distinguer des chapitres 5e et 4e.

Les fiches contenu/cinquieme/maths/puissances/ et contenu/quatrieme/maths/puissances/
sont citées en prérequis et leur contenu n'est PAS répété : notation a^n, carré, cube,
carrés de 0 à 12, 10^n positif, a^m x a^n, a^n x b^n, priorités opératoires. Seul le
strict rappel de repérage figure en tête de fiche, plus le rappel encadré des deux
règles de 4e nécessaires à la section 2.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
