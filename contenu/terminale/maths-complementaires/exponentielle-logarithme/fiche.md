---
id: tale-compl-math-exponentielle-logarithme
titre: "Fonctions logarithme et exponentielle"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 15
prerequis:
  - Fonction exponentielle (Première)
  - Dérivation et variations
  - Limites de fonctions
statut: brouillon
relu_par: null
---

# Fonctions logarithme et exponentielle

> Deux fonctions, un seul mécanisme. L'exponentielle transforme une somme en produit
> ($e^{a+b}=e^a\times e^b$) ; le logarithme fait le chemin inverse et transforme un produit
> en somme. Ce sont les **fonctions réciproques** l'une de l'autre : ce que l'une fait,
> l'autre le défait. En maths complémentaires, l'enjeu n'est pas la théorie mais l'**usage** :
> résoudre des équations, des inéquations, et modéliser des problèmes concrets.

---

## 1. Rappels sur la fonction exponentielle

La fonction exponentielle, notée $\exp$ ou $x\mapsto e^{x}$, est définie sur $\mathbb{R}$, à
valeurs **strictement positives** : pour tout réel $x$, $e^{x}>0$.

**Propriétés algébriques.** Pour tous réels $a$ et $b$, et tout entier $n$ :

$$\boxed{e^{a+b}=e^{a}\times e^{b} \qquad e^{-a}=\frac{1}{e^{a}} \qquad e^{a-b}=\frac{e^{a}}{e^{b}} \qquad (e^{a})^{n}=e^{na}}$$

> **Exemple.** $e^{5}\times e^{-2}=e^{5-2}=e^{3}$. On additionne les exposants, on ne
> multiplie jamais les $e^{a}$ « à la main ».

**Dérivée et variations.** $\exp$ est dérivable sur $\mathbb{R}$ et **égale à sa propre
dérivée** :

$$\boxed{(e^{x})'=e^{x}}$$

Comme $e^{x}>0$, la dérivée est strictement positive : $\exp$ est **strictement croissante**
sur $\mathbb{R}$. Valeur clé : $e^{0}=1$.

**Limites aux bornes :**

$$\boxed{\lim_{x\to -\infty}e^{x}=0^{+}} \qquad\qquad \boxed{\lim_{x\to +\infty}e^{x}=+\infty}$$

> En $-\infty$, la courbe s'écrase sur l'axe des abscisses : **la droite $y=0$ est asymptote
> horizontale**. Attention, $e^{x}$ ne devient jamais négatif ni nul.

**Dérivée de $e^{u}$.** Si $u$ est dérivable, alors $\big(e^{u}\big)'=u'\,e^{u}$.

> **Exemple.** Pour $f(x)=e^{-3x}$, $u=-3x$ et $u'=-3$, donc $f'(x)=-3e^{-3x}$.

---

## 2. Le logarithme népérien : définition

$\exp$ est continue, strictement croissante sur $\mathbb{R}$, à valeurs dans $]0\,;+\infty[$.
Tout réel $x>0$ possède donc **un unique** antécédent par $\exp$ : on l'appelle le
**logarithme népérien** de $x$, noté $\ln x$.

$$\boxed{\ln x = y \iff x = e^{y}} \qquad \text{avec } x>0 \text{ et } y\in\mathbb{R}$$

> **Ensemble de définition.** $\ln$ n'existe que pour $x>0$ : son domaine est $]0\,;+\infty[$.
> On ne calcule **jamais** le $\ln$ d'un nombre négatif ou nul. Réflexe de survie : **avant
> de manipuler un $\ln$, vérifie que son argument est strictement positif.**

Comme $\ln$ et $\exp$ sont réciproques, elles se **compensent** :

$$\boxed{\ln(e^{x}) = x \ \ (\forall x\in\mathbb{R}) \qquad e^{\ln x} = x \ \ (\forall x>0)}$$

> **Exemple.** $\ln(e^{4})=4$ et $e^{\ln 5}=5$. Demander $e^{\ln 5}$, c'est demander « quel
> nombre a pour logarithme $\ln 5$ ? » — c'est $5$ lui-même.

Deux valeurs à connaître par cœur : $e^{0}=1$ donne $\ln 1=0$, et $e^{1}=e$ donne $\ln e=1$.

$$\boxed{\ln 1 = 0} \qquad\qquad \boxed{\ln e = 1}$$

---

## 3. Propriétés algébriques du logarithme

C'est le cœur du chapitre. Toutes se lisent « à l'envers » de l'exponentielle. Pour $a>0$ et
$b>0$ :

**Logarithme d'un produit** — la relation fondamentale :

$$\boxed{\ln(a\times b) = \ln a + \ln b}$$

> **Exemple.** $\ln 15=\ln(3\times 5)=\ln 3+\ln 5$. Un produit devient une **somme**.

**Logarithme d'un quotient :**

$$\boxed{\ln\!\left(\frac{a}{b}\right) = \ln a - \ln b}$$

> **Exemple.** $\ln\!\left(\dfrac{1}{b}\right)=-\ln b$, donc $\ln\!\left(\dfrac{1}{4}\right)=-\ln 4$.

**Logarithme d'une puissance** — pour tout entier $n$ (et plus généralement tout réel) :

$$\boxed{\ln(a^{n}) = n\,\ln a}$$

> **Exemple.** $\ln 8=\ln(2^{3})=3\ln 2$. L'exposant « descend » devant le $\ln$.

**Logarithme d'une racine :** $\ln\!\left(\sqrt{a}\right)=\dfrac{1}{2}\ln a$, car $\sqrt{a}=a^{1/2}$.

> ⚠️ **Il n'existe AUCUNE formule pour $\ln(a+b)$.** En particulier
> $\ln(a+b)\neq\ln a+\ln b$. Le $\ln$ ne « rentre » que dans les **produits, quotients et
> puissances**, jamais dans les sommes.

---

## 4. Dérivée, variations et limites du logarithme

<!-- schema:exp-ln-symetrie -->
![Courbes de exp et de ln, symétriques par rapport à la droite y = x : ln est définie pour x strictement positif, croissante, avec l’axe des ordonnées pour asymptote ; ln 1 = 0 et ln e = 1.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgNDgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSI0ODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzguNiIgeTE9IjI4IiB4Mj0iMzguNiIgeTI9IjQ1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI5MS42IiB5MT0iMjgiIHgyPSI5MS42IiB5Mj0iNDUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0NC42IiB5MT0iMjgiIHgyPSIxNDQuNiIgeTI9IjQ1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxOTcuNiIgeTE9IjI4IiB4Mj0iMTk3LjYiIHkyPSI0NTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjUwLjYiIHkxPSIyOCIgeDI9IjI1MC42IiB5Mj0iNDUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwMy42IiB5MT0iMjgiIHgyPSIzMDMuNiIgeTI9IjQ1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTYuNiIgeTE9IjI4IiB4Mj0iMzU2LjYiIHkyPSI0NTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDA5LjYiIHkxPSIyOCIgeDI9IjQwOS42IiB5Mj0iNDUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iNDQxLjQiIHgyPSI0NTIiIHkyPSI0NDEuNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjM4OC40IiB4Mj0iNDUyIiB5Mj0iMzg4LjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIzMzUuNCIgeDI9IjQ1MiIgeTI9IjMzNS40IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjgyLjQiIHgyPSI0NTIiIHkyPSIyODIuNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIyOS40IiB4Mj0iNDUyIiB5Mj0iMjI5LjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxNzYuNCIgeDI9IjQ1MiIgeTI9IjE3Ni40IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTIzLjQiIHgyPSI0NTIiIHkyPSIxMjMuNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjcwLjQiIHgyPSI0NTIiIHkyPSI3MC40IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjgyLjQiIHgyPSI0NTEiIHkyPSIyODIuNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NjAsMjgyLjQgNDUxLDI3Ny45IDQ1MSwyODYuOSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIxOTcuNiIgeTE9IjQ1MiIgeDI9IjE5Ny42IiB5Mj0iMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTk3LjYsMjAgMTkzLjEsMjkgMjAyLjEsMjkiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSI0NTYiIHk9IjMwMC40IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPng8L3RleHQ+PHRleHQgeD0iMTg1LjYiIHk9IjI0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPnk8L3RleHQ+PHRleHQgeD0iMzguNiIgeT0iMjk4LjQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjM8L3RleHQ+PHRleHQgeD0iOTEuNiIgeT0iMjk4LjQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjI8L3RleHQ+PHRleHQgeD0iMTQ0LjYiIHk9IjI5OC40IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIxPC90ZXh0Pjx0ZXh0IHg9IjI1MC42IiB5PSIyOTguNCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSIzMDMuNiIgeT0iMjk4LjQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMzU2LjYiIHk9IjI5OC40IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0Pjx0ZXh0IHg9IjQwOS42IiB5PSIyOTguNCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NDwvdGV4dD48dGV4dCB4PSIxOTEuNiIgeT0iNDQ1LjQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjM8L3RleHQ+PHRleHQgeD0iMTkxLjYiIHk9IjM5Mi40IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIyPC90ZXh0Pjx0ZXh0IHg9IjE5MS42IiB5PSIzMzkuNCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMTwvdGV4dD48dGV4dCB4PSIxOTEuNiIgeT0iMjMzLjQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMTkxLjYiIHk9IjE4MC40IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjE5MS42IiB5PSIxMjcuNCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MzwvdGV4dD48dGV4dCB4PSIxOTEuNiIgeT0iNzQuNCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NDwvdGV4dD48dGV4dCB4PSIxODkuNiIgeT0iMjk4LjQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0MjQiIGhlaWdodD0iNDI0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxwYXRoIGQ9Ik0yOCAyODAuMkwzMC4xIDI4MC4yTDMyLjIgMjgwLjFMMzQuNCAyODBMMzYuNSAyNzkuOUwzOC42IDI3OS44TDQwLjcgMjc5LjdMNDIuOCAyNzkuNUw0NSAyNzkuNEw0Ny4xIDI3OS4zTDQ5LjIgMjc5LjJMNTEuMyAyNzlMNTMuNCAyNzguOUw1NS42IDI3OC44TDU3LjcgMjc4LjZMNTkuOCAyNzguNUw2MS45IDI3OC4zTDY0IDI3OC4xTDY2LjIgMjc4TDY4LjMgMjc3LjhMNzAuNCAyNzcuNkw3Mi41IDI3Ny40TDc0LjYgMjc3LjJMNzYuOCAyNzdMNzguOSAyNzYuOEw4MSAyNzYuNUw4My4xIDI3Ni4zTDg1LjIgMjc2TDg3LjQgMjc1LjhMODkuNSAyNzUuNUw5MS42IDI3NS4yTDkzLjcgMjc0LjlMOTUuOCAyNzQuNkw5OCAyNzQuM0wxMDAuMSAyNzRMMTAyLjIgMjczLjZMMTA0LjMgMjczLjNMMTA2LjQgMjcyLjlMMTA4LjYgMjcyLjVMMTEwLjcgMjcyLjFMMTEyLjggMjcxLjdMMTE0LjkgMjcxLjNMMTE3IDI3MC44TDExOS4yIDI3MC4zTDEyMS4zIDI2OS44TDEyMy40IDI2OS4zTDEyNS41IDI2OC44TDEyNy42IDI2OC4yTDEyOS44IDI2Ny43TDEzMS45IDI2Ny4xTDEzNCAyNjYuNEwxMzYuMSAyNjUuOEwxMzguMiAyNjUuMUwxNDAuNCAyNjQuNEwxNDIuNSAyNjMuN0wxNDQuNiAyNjIuOUwxNDYuNyAyNjIuMUwxNDguOCAyNjEuM0wxNTEgMjYwLjRMMTUzLjEgMjU5LjVMMTU1LjIgMjU4LjZMMTU3LjMgMjU3LjZMMTU5LjQgMjU2LjZMMTYxLjYgMjU1LjVMMTYzLjcgMjU0LjVMMTY1LjggMjUzLjNMMTY3LjkgMjUyLjFMMTcwIDI1MC45TDE3Mi4yIDI0OS42TDE3NC4zIDI0OC4zTDE3Ni40IDI0Ni45TDE3OC41IDI0NS40TDE4MC42IDI0My45TDE4Mi44IDI0Mi4zTDE4NC45IDI0MC43TDE4NyAyMzlMMTg5LjEgMjM3LjJMMTkxLjIgMjM1LjRMMTkzLjQgMjMzLjVMMTk1LjUgMjMxLjVMMTk3LjYgMjI5LjRMMTk5LjcgMjI3LjJMMjAxLjggMjI1TDIwNCAyMjIuNkwyMDYuMSAyMjAuMkwyMDguMiAyMTcuN0wyMTAuMyAyMTVMMjEyLjQgMjEyLjNMMjE0LjYgMjA5LjRMMjE2LjcgMjA2LjRMMjE4LjggMjAzLjNMMjIwLjkgMjAwLjFMMjIzIDE5Ni43TDIyNS4yIDE5My4zTDIyNy4zIDE4OS42TDIyOS40IDE4NS44TDIzMS41IDE4MS45TDIzMy42IDE3Ny44TDIzNS44IDE3My41TDIzNy45IDE2OS4xTDI0MCAxNjQuNEwyNDIuMSAxNTkuNkwyNDQuMiAxNTQuNkwyNDYuNCAxNDkuNEwyNDguNSAxNDRMMjUwLjYgMTM4LjNMMjUyLjcgMTMyLjVMMjU0LjggMTI2LjNMMjU3IDEyMEwyNTkuMSAxMTMuM0wyNjEuMiAxMDYuNEwyNjMuMyA5OS4zTDI2NS40IDkxLjhMMjY3LjYgODRMMjY5LjcgNzUuOUwyNzEuOCA2Ny41TDI3My45IDU4LjdMMjc2IDQ5LjZMMjc4LjIgNDAuMUwyODAuMyAzMC4yTDI4Mi40IDE5LjlMMjg0LjUgOS4yTDI4Ni42IC0yTDI4OC44IC0xMy42TDI5MC45IC0yNS43TDI5MyAtMzguMkwyOTUuMSAtNTEuM0wyOTcuMiAtNjQuOUwyOTkuNCAtNzkuMUwzMDEuNSAtOTMuOUwzMDMuNiAtMTA5LjJMMzA1LjcgLTEyNS4yTDMwNy44IC0xNDEuOEwzMTAgLTE1OS4yTDMxMi4xIC0xNzcuMkwzMTQuMiAtMTk1LjlMMzE2LjMgLTIxNS40TDMxOC40IC0yMzUuOEwzMjAuNiAtMjU2LjlMMzIyLjcgLTI3OC45TDMyNC44IC0zMDEuOEwzMjYuOSAtMzI1LjdMMzI5IC0zNTAuNUwzMzEuMiAtMzc2LjNMMzMzLjMgLTQwMy4yTDMzNS40IC00MzEuMkwzMzcuNSAtNDYwLjNMMzM5LjYgLTQ5MC42TDM0MS44IC01MjIuMkwzNDMuOSAtNTU1TDM0NiAtNTg5LjJMMzQ4LjEgLTYyNC43TDM1MC4yIC02NjEuOEwzNTIuNCAtNzAwLjNMMzU0LjUgLTc0MC40TDM1Ni42IC03ODIuMUwzNTguNyAtODI1LjZMMzYwLjggLTg3MC44TDM2MyAtOTE3LjlMMzY1LjEgLTk2Ni44TDM2Ny4yIC0xMDE3LjhMMzY5LjMgLTEwNzAuOUwzNzEuNCAtMTEyNi4xTDM3My42IC0xMTgzLjZMMzc1LjcgLTEyNDMuNEwzNzcuOCAtMTMwNS43TDM3OS45IC0xMzcwLjVMMzgyIC0xNDM4TDM4NC4yIC0xNTA4LjJMMzg2LjMgLTE1ODEuMkwzODguNCAtMTY1Ny4zTDM5MC41IC0xNzM2LjVMMzkyLjYgLTE4MTguOUwzOTQuOCAtMTkwNC42TDM5Ni45IC0xOTkzLjlMMzk5IC0yMDg2LjhMNDAxLjEgLTIxODMuNUw0MDMuMiAtMjI4NC4xTDQwNS40IC0yMzg4LjhMNDA3LjUgLTI0OTcuOEw0MDkuNiAtMjYxMS4zTDQxMS43IC0yNzI5LjRMNDEzLjggLTI4NTIuM0w0MTYgLTI5ODAuMkw0MTguMSAtMzExMy40TDQyMC4yIC0zMjUyTDQyMi4zIC0zMzk2LjJMNDI0LjQgLTM1NDYuM0w0MjYuNiAtMzcwMi42TDQyOC43IC0zODY1LjJMNDMwLjggLTQwMzQuNUw0MzIuOSAtNDIxMC43TDQzNSAtNDM5NEw0MzcuMiAtNDU4NC45TDQzOS4zIC00NzgzLjVMNDQxLjQgLTQ5OTAuM0w0NDMuNSAtNTIwNS41TDQ0NS42IC01NDI5LjRMNDQ3LjggLTU2NjIuNUw0NDkuOSAtNTkwNS4xTDQ1MiAtNjE1Ny43IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTk4LjEgNTI2LjVMMTk5LjQgNDYxLjdMMjAwLjcgNDMzLjRMMjAxLjkgNDE1LjFMMjAzLjIgNDAxLjRMMjA0LjUgMzkwLjZMMjA1LjcgMzgxLjdMMjA3IDM3NEwyMDguMyAzNjcuM0wyMDkuNiAzNjEuM0wyMTAuOCAzNTZMMjEyLjEgMzUxLjFMMjEzLjQgMzQ2LjdMMjE0LjYgMzQyLjZMMjE1LjkgMzM4LjhMMjE3LjIgMzM1LjJMMjE4LjQgMzMxLjlMMjE5LjcgMzI4LjdMMjIxIDMyNS44TDIyMi4yIDMyM0wyMjMuNSAzMjAuM0wyMjQuOCAzMTcuOEwyMjYuMSAzMTUuNEwyMjcuMyAzMTNMMjI4LjYgMzEwLjhMMjI5LjkgMzA4LjdMMjMxLjEgMzA2LjdMMjMyLjQgMzA0LjdMMjMzLjcgMzAyLjhMMjM0LjkgMzAxTDIzNi4yIDI5OS4yTDIzNy41IDI5Ny41TDIzOC43IDI5NS44TDI0MCAyOTQuMkwyNDEuMyAyOTIuNkwyNDIuNiAyOTEuMUwyNDMuOCAyODkuNkwyNDUuMSAyODguMkwyNDYuNCAyODYuOEwyNDcuNiAyODUuNUwyNDguOSAyODQuMUwyNTAuMiAyODIuOEwyNTEuNCAyODEuNkwyNTIuNyAyODAuM0wyNTQgMjc5LjFMMjU1LjMgMjc3LjlMMjU2LjUgMjc2LjhMMjU3LjggMjc1LjdMMjU5LjEgMjc0LjZMMjYwLjMgMjczLjVMMjYxLjYgMjcyLjRMMjYyLjkgMjcxLjRMMjY0LjEgMjcwLjNMMjY1LjQgMjY5LjNMMjY2LjcgMjY4LjRMMjY3LjkgMjY3LjRMMjY5LjIgMjY2LjRMMjcwLjUgMjY1LjVMMjcxLjggMjY0LjZMMjczIDI2My43TDI3NC4zIDI2Mi44TDI3NS42IDI2MS45TDI3Ni44IDI2MS4xTDI3OC4xIDI2MC4yTDI3OS40IDI1OS40TDI4MC42IDI1OC42TDI4MS45IDI1Ny44TDI4My4yIDI1N0wyODQuNCAyNTYuMkwyODUuNyAyNTUuNUwyODcgMjU0LjdMMjg4LjMgMjU0TDI4OS41IDI1My4yTDI5MC44IDI1Mi41TDI5Mi4xIDI1MS44TDI5My4zIDI1MS4xTDI5NC42IDI1MC40TDI5NS45IDI0OS43TDI5Ny4xIDI0OUwyOTguNCAyNDguM0wyOTkuNyAyNDcuN0wzMDAuOSAyNDdMMzAyLjIgMjQ2LjRMMzAzLjUgMjQ1LjdMMzA0LjggMjQ1LjFMMzA2IDI0NC41TDMwNy4zIDI0My44TDMwOC42IDI0My4yTDMwOS44IDI0Mi42TDMxMS4xIDI0MkwzMTIuNCAyNDEuNEwzMTMuNiAyNDAuOUwzMTQuOSAyNDAuM0wzMTYuMiAyMzkuN0wzMTcuNCAyMzkuMkwzMTguNyAyMzguNkwzMjAgMjM4TDMyMS4zIDIzNy41TDMyMi41IDIzN0wzMjMuOCAyMzYuNEwzMjUuMSAyMzUuOUwzMjYuMyAyMzUuNEwzMjcuNiAyMzQuOEwzMjguOSAyMzQuM0wzMzAuMSAyMzMuOEwzMzEuNCAyMzMuM0wzMzIuNyAyMzIuOEwzMzQgMjMyLjNMMzM1LjIgMjMxLjhMMzM2LjUgMjMxLjNMMzM3LjggMjMwLjlMMzM5IDIzMC40TDM0MC4zIDIyOS45TDM0MS42IDIyOS40TDM0Mi44IDIyOUwzNDQuMSAyMjguNUwzNDUuNCAyMjguMUwzNDYuNiAyMjcuNkwzNDcuOSAyMjcuMkwzNDkuMiAyMjYuN0wzNTAuNSAyMjYuM0wzNTEuNyAyMjUuOEwzNTMgMjI1LjRMMzU0LjMgMjI1TDM1NS41IDIyNC41TDM1Ni44IDIyNC4xTDM1OC4xIDIyMy43TDM1OS4zIDIyMy4zTDM2MC42IDIyMi45TDM2MS45IDIyMi40TDM2My4xIDIyMkwzNjQuNCAyMjEuNkwzNjUuNyAyMjEuMkwzNjcgMjIwLjhMMzY4LjIgMjIwLjRMMzY5LjUgMjIwTDM3MC44IDIxOS43TDM3MiAyMTkuM0wzNzMuMyAyMTguOUwzNzQuNiAyMTguNUwzNzUuOCAyMTguMUwzNzcuMSAyMTcuN0wzNzguNCAyMTcuNEwzNzkuNiAyMTdMMzgwLjkgMjE2LjZMMzgyLjIgMjE2LjNMMzgzLjUgMjE1LjlMMzg0LjcgMjE1LjVMMzg2IDIxNS4yTDM4Ny4zIDIxNC44TDM4OC41IDIxNC41TDM4OS44IDIxNC4xTDM5MS4xIDIxMy44TDM5Mi4zIDIxMy40TDM5My42IDIxMy4xTDM5NC45IDIxMi43TDM5Ni4xIDIxMi40TDM5Ny40IDIxMi4xTDM5OC43IDIxMS43TDQwMCAyMTEuNEw0MDEuMiAyMTEuMUw0MDIuNSAyMTAuN0w0MDMuOCAyMTAuNEw0MDUgMjEwLjFMNDA2LjMgMjA5LjhMNDA3LjYgMjA5LjRMNDA4LjggMjA5LjFMNDEwLjEgMjA4LjhMNDExLjQgMjA4LjVMNDEyLjcgMjA4LjJMNDEzLjkgMjA3LjlMNDE1LjIgMjA3LjVMNDE2LjUgMjA3LjJMNDE3LjcgMjA2LjlMNDE5IDIwNi42TDQyMC4zIDIwNi4zTDQyMS41IDIwNkw0MjIuOCAyMDUuN0w0MjQuMSAyMDUuNEw0MjUuMyAyMDUuMUw0MjYuNiAyMDQuOEw0MjcuOSAyMDQuNUw0MjkuMiAyMDQuM0w0MzAuNCAyMDRMNDMxLjcgMjAzLjdMNDMzIDIwMy40TDQzNC4yIDIwMy4xTDQzNS41IDIwMi44TDQzNi44IDIwMi41TDQzOCAyMDIuM0w0MzkuMyAyMDJMNDQwLjYgMjAxLjdMNDQxLjggMjAxLjRMNDQzLjEgMjAxLjFMNDQ0LjQgMjAwLjlMNDQ1LjcgMjAwLjZMNDQ2LjkgMjAwLjNMNDQ4LjIgMjAwLjFMNDQ5LjUgMTk5LjhMNDUwLjcgMTk5LjVMNDUyIDE5OS4zIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjggNDUyTDMwLjEgNDQ5LjlMMzIuMiA0NDcuOEwzNC40IDQ0NS42TDM2LjUgNDQzLjVMMzguNiA0NDEuNEw0MC43IDQzOS4zTDQyLjggNDM3LjJMNDUgNDM1TDQ3LjEgNDMyLjlMNDkuMiA0MzAuOEw1MS4zIDQyOC43TDUzLjQgNDI2LjZMNTUuNiA0MjQuNEw1Ny43IDQyMi4zTDU5LjggNDIwLjJMNjEuOSA0MTguMUw2NCA0MTZMNjYuMiA0MTMuOEw2OC4zIDQxMS43TDcwLjQgNDA5LjZMNzIuNSA0MDcuNUw3NC42IDQwNS40TDc2LjggNDAzLjJMNzguOSA0MDEuMUw4MSAzOTlMODMuMSAzOTYuOUw4NS4yIDM5NC44TDg3LjQgMzkyLjZMODkuNSAzOTAuNUw5MS42IDM4OC40TDkzLjcgMzg2LjNMOTUuOCAzODQuMkw5OCAzODJMMTAwLjEgMzc5LjlMMTAyLjIgMzc3LjhMMTA0LjMgMzc1LjdMMTA2LjQgMzczLjZMMTA4LjYgMzcxLjRMMTEwLjcgMzY5LjNMMTEyLjggMzY3LjJMMTE0LjkgMzY1LjFMMTE3IDM2M0wxMTkuMiAzNjAuOEwxMjEuMyAzNTguN0wxMjMuNCAzNTYuNkwxMjUuNSAzNTQuNUwxMjcuNiAzNTIuNEwxMjkuOCAzNTAuMkwxMzEuOSAzNDguMUwxMzQgMzQ2TDEzNi4xIDM0My45TDEzOC4yIDM0MS44TDE0MC40IDMzOS42TDE0Mi41IDMzNy41TDE0NC42IDMzNS40TDE0Ni43IDMzMy4zTDE0OC44IDMzMS4yTDE1MSAzMjlMMTUzLjEgMzI2LjlMMTU1LjIgMzI0LjhMMTU3LjMgMzIyLjdMMTU5LjQgMzIwLjZMMTYxLjYgMzE4LjRMMTYzLjcgMzE2LjNMMTY1LjggMzE0LjJMMTY3LjkgMzEyLjFMMTcwIDMxMEwxNzIuMiAzMDcuOEwxNzQuMyAzMDUuN0wxNzYuNCAzMDMuNkwxNzguNSAzMDEuNUwxODAuNiAyOTkuNEwxODIuOCAyOTcuMkwxODQuOSAyOTUuMUwxODcgMjkzTDE4OS4xIDI5MC45TDE5MS4yIDI4OC44TDE5My40IDI4Ni42TDE5NS41IDI4NC41TDE5Ny42IDI4Mi40TDE5OS43IDI4MC4zTDIwMS44IDI3OC4yTDIwNCAyNzZMMjA2LjEgMjczLjlMMjA4LjIgMjcxLjhMMjEwLjMgMjY5LjdMMjEyLjQgMjY3LjZMMjE0LjYgMjY1LjRMMjE2LjcgMjYzLjNMMjE4LjggMjYxLjJMMjIwLjkgMjU5LjFMMjIzIDI1N0wyMjUuMiAyNTQuOEwyMjcuMyAyNTIuN0wyMjkuNCAyNTAuNkwyMzEuNSAyNDguNUwyMzMuNiAyNDYuNEwyMzUuOCAyNDQuMkwyMzcuOSAyNDIuMUwyNDAgMjQwTDI0Mi4xIDIzNy45TDI0NC4yIDIzNS44TDI0Ni40IDIzMy42TDI0OC41IDIzMS41TDI1MC42IDIyOS40TDI1Mi43IDIyNy4zTDI1NC44IDIyNS4yTDI1NyAyMjNMMjU5LjEgMjIwLjlMMjYxLjIgMjE4LjhMMjYzLjMgMjE2LjdMMjY1LjQgMjE0LjZMMjY3LjYgMjEyLjRMMjY5LjcgMjEwLjNMMjcxLjggMjA4LjJMMjczLjkgMjA2LjFMMjc2IDIwNEwyNzguMiAyMDEuOEwyODAuMyAxOTkuN0wyODIuNCAxOTcuNkwyODQuNSAxOTUuNUwyODYuNiAxOTMuNEwyODguOCAxOTEuMkwyOTAuOSAxODkuMUwyOTMgMTg3TDI5NS4xIDE4NC45TDI5Ny4yIDE4Mi44TDI5OS40IDE4MC42TDMwMS41IDE3OC41TDMwMy42IDE3Ni40TDMwNS43IDE3NC4zTDMwNy44IDE3Mi4yTDMxMCAxNzBMMzEyLjEgMTY3LjlMMzE0LjIgMTY1LjhMMzE2LjMgMTYzLjdMMzE4LjQgMTYxLjZMMzIwLjYgMTU5LjRMMzIyLjcgMTU3LjNMMzI0LjggMTU1LjJMMzI2LjkgMTUzLjFMMzI5IDE1MUwzMzEuMiAxNDguOEwzMzMuMyAxNDYuN0wzMzUuNCAxNDQuNkwzMzcuNSAxNDIuNUwzMzkuNiAxNDAuNEwzNDEuOCAxMzguMkwzNDMuOSAxMzYuMUwzNDYgMTM0TDM0OC4xIDEzMS45TDM1MC4yIDEyOS44TDM1Mi40IDEyNy42TDM1NC41IDEyNS41TDM1Ni42IDEyMy40TDM1OC43IDEyMS4zTDM2MC44IDExOS4yTDM2MyAxMTdMMzY1LjEgMTE0LjlMMzY3LjIgMTEyLjhMMzY5LjMgMTEwLjdMMzcxLjQgMTA4LjZMMzczLjYgMTA2LjRMMzc1LjcgMTA0LjNMMzc3LjggMTAyLjJMMzc5LjkgMTAwLjFMMzgyIDk4TDM4NC4yIDk1LjhMMzg2LjMgOTMuN0wzODguNCA5MS42TDM5MC41IDg5LjVMMzkyLjYgODcuNEwzOTQuOCA4NS4yTDM5Ni45IDgzLjFMMzk5IDgxTDQwMS4xIDc4LjlMNDAzLjIgNzYuOEw0MDUuNCA3NC42TDQwNy41IDcyLjVMNDA5LjYgNzAuNEw0MTEuNyA2OC4zTDQxMy44IDY2LjJMNDE2IDY0TDQxOC4xIDYxLjlMNDIwLjIgNTkuOEw0MjIuMyA1Ny43TDQyNC40IDU1LjZMNDI2LjYgNTMuNEw0MjguNyA1MS4zTDQzMC44IDQ5LjJMNDMyLjkgNDcuMUw0MzUgNDVMNDM3LjIgNDIuOEw0MzkuMyA0MC43TDQ0MS40IDM4LjZMNDQzLjUgMzYuNUw0NDUuNiAzNC40TDQ0Ny44IDMyLjJMNDQ5LjkgMzAuMUw0NTIgMjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1kYXNoYXJyYXk9IjcgNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjx0ZXh0IHg9IjI1NS4xNSIgeT0iNzcuOTYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnkgPSBly6M8L3RleHQ+PHRleHQgeD0iNDI1LjUiIHk9IjE5My4wOSIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+eSA9IGxuIHg8L3RleHQ+PHRleHQgeD0iNDEyLjIiIHk9IjgxLjgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnkgPSB4PC90ZXh0PjxjaXJjbGUgY3g9IjE5Ny42IiBjeT0iMjI5LjQiIHI9IjQiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTg5LjYiIHk9IjIyMS40IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4oMCA7IDEpPC90ZXh0PjxjaXJjbGUgY3g9IjI1MC42IiBjeT0iMjgyLjQiIHI9IjQiIGZpbGw9IiNjMDJhMmEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMjU4LjYiIHk9IjMwMi40IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPigxIDsgMCk8L3RleHQ+PGNpcmNsZSBjeD0iMzQxLjY3IiBjeT0iMjI5LjQiIHI9IjQiIGZpbGw9IiNjMDJhMmEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMzQ5LjY3IiB5PSIyNDkuNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4oZSA7IDEpPC90ZXh0PjxjaXJjbGUgY3g9IjI1MC42IiBjeT0iMTM4LjMzIiByPSI0IiBmaWxsPSIjMWY2ZmViIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjI2MC42IiB5PSIxNDIuMzMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+KDEgOyBlKTwvdGV4dD48L3N2Zz4=)
*Courbes de exp et de ln, symétriques par rapport à la droite y = x : ln est définie pour x strictement positif, croissante, avec l’axe des ordonnées pour asymptote ; ln 1 = 0 et ln e = 1.*
<!-- /schema -->

$\ln$ est dérivable sur $]0\,;+\infty[$ et :

$$\boxed{\ (\ln x)' = \frac{1}{x}\ }$$

Sur $]0\,;+\infty[$, $\dfrac{1}{x}>0$ : la dérivée est strictement positive, donc

$$\boxed{\ln \text{ est strictement croissante sur } ]0\,;+\infty[}$$

> **Conséquence — le logarithme conserve l'ordre.** Pour $a>0$ et $b>0$ :
> $$a<b \iff \ln a<\ln b \qquad\qquad \ln a=\ln b \iff a=b$$
> C'est ce qui permet de résoudre les équations et inéquations (section 6).

**Dérivée de $\ln(u)$.** Si $u$ est dérivable et strictement positive :
$\big(\ln(u)\big)'=\dfrac{u'}{u}$.

> **Exemple.** Pour $f(x)=\ln(x^{2}+1)$, $u=x^2+1>0$ et $u'=2x$, donc $f'(x)=\dfrac{2x}{x^{2}+1}$.

**Limites aux bornes :**

$$\boxed{\lim_{x\to 0^{+}}\ln x = -\infty} \qquad\qquad \boxed{\lim_{x\to +\infty}\ln x = +\infty}$$

> En $0^{+}$, la courbe plonge le long de l'axe des ordonnées : **la droite $x=0$ est asymptote
> verticale**. En $+\infty$, $\ln$ tend vers $+\infty$ mais **très lentement**. Les courbes de
> $\ln$ et $\exp$ sont **symétriques par rapport à la droite $y=x$** (fonctions réciproques).

---

## 5. Croissances comparées

Face à une puissance de $x$, l'exponentielle **gagne toujours** et le logarithme **perd
toujours**. Pour tout entier $n\geqslant 1$ :

$$\boxed{\lim_{x\to +\infty}\frac{e^{x}}{x^{n}} = +\infty} \qquad\qquad
\boxed{\lim_{x\to -\infty}x^{n}e^{x} = 0}$$

$$\boxed{\lim_{x\to +\infty}\frac{\ln x}{x^{n}} = 0} \qquad\qquad
\boxed{\lim_{x\to 0^{+}} x^{n}\ln x = 0}$$

> **Exemple.** $\lim\limits_{x\to +\infty}\dfrac{e^{x}}{x}=+\infty$ : l'exponentielle « écrase »
> la puissance. À l'inverse $\lim\limits_{x\to +\infty}\dfrac{\ln x}{x}=0$ : la puissance écrase
> le logarithme. Règle à retenir : **en cas de conflit $\dfrac{\infty}{\infty}$, l'exponentielle
> l'emporte sur toute puissance, qui l'emporte elle-même sur le logarithme.**

---

## 6. Méthodes : équations et inéquations

Deux réflexes commandent tout : **condition d'existence d'abord**, puis on exploite la stricte
monotonie.

### Équation avec un logarithme

**Résoudre $\ln x = 3$.** Existence : $x>0$. On applique $\exp$ (réciproque) : $x=e^{3}$.
Comme $e^{3}>0$, la condition tient. **Solution : $x=e^{3}$.**

### Équation $\ln A = \ln B$

On utilise $\ln a=\ln b\iff a=b$, après les conditions d'existence.

> **Exemple.** $\ln(2x-1)=\ln(x+3)$. Existence : $2x-1>0$ **et** $x+3>0$, soit $x>\dfrac12$.
> On identifie : $2x-1=x+3\Rightarrow x=4$. Comme $4>\dfrac12$, **solution : $x=4$.**

### Équation avec une exponentielle

Pour isoler une inconnue placée en exposant, on applique $\ln$.

> **Exemple.** $e^{2x}=5\Rightarrow 2x=\ln 5\Rightarrow x=\dfrac{\ln 5}{2}$.

### Inéquation

$\ln$ et $\exp$ sont **strictement croissantes** : elles **conservent le sens** de l'inégalité.

> **Exemple.** $\ln x<2$. Existence : $x>0$. On applique $\exp$ : $x<e^{2}$. En croisant avec
> l'existence : **$0<x<e^{2}$**, soit $x\in\,]0\,;e^{2}[$.

---

## 7. Applications : utiliser log/exp dans un problème

Le logarithme est l'outil pour **résoudre en $n$** (ou en $t$) dès qu'une inconnue est en
exposant — seuils, doublements, temps de demi-vie.

> **Méthode type (seuil d'une suite géométrique).** On cherche le plus petit entier $n$ tel que
> $u_0\,q^{\,n}>S$ (avec $q>1$, $u_0>0$, $S>0$).
> 1. Isoler la puissance : $q^{\,n}>\dfrac{S}{u_0}$.
> 2. Appliquer $\ln$ (sens conservé car $\ln$ croissante) : $n\ln q>\ln\!\dfrac{S}{u_0}$.
> 3. Comme $q>1$, $\ln q>0$ : on divise sans changer le sens : $n>\dfrac{\ln(S/u_0)}{\ln q}$.
> 4. Conclure avec le plus petit entier au-dessus de cette valeur.

En **décroissance** ($0<q<1$, ex. désintégration radioactive), $\ln q<0$ : diviser par $\ln q$
**inverse** le sens de l'inégalité — c'est le piège classique de ces problèmes.

---

## 8. Cas particuliers et pièges de calcul

- $\ln$ d'un nombre entre $0$ et $1$ est **négatif** : $\ln(0{,}5)<0$ car $0{,}5<1$.
- $\ln x=0\iff x=1$ ; $e^{x}=1\iff x=0$.
- $-\ln a=\ln\!\left(\dfrac1a\right)$ : un signe moins peut se cacher dans un quotient.
- $\ln(a^{2})=2\ln a$ **seulement si $a>0$**. Pour $a$ non nul quelconque : $\ln(a^{2})=2\ln|a|$.
- Diviser une inéquation par $\ln q$ **inverse** le sens quand $0<q<1$ (car $\ln q<0$).

---

## 9. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Exp — algèbre | $e^{a+b}=e^a e^b$, $e^{-a}=\frac{1}{e^a}$, $(e^a)^n=e^{na}$ |
| Exp — dérivée | $(e^x)'=e^x$, $(e^u)'=u'e^u$ |
| Exp — limites | $\lim\limits_{-\infty}e^x=0^+$, $\lim\limits_{+\infty}e^x=+\infty$ |
| Ln — définition | $\ln x=y\iff x=e^y$, avec $x>0$ |
| Compensation | $\ln(e^x)=x$ et $e^{\ln x}=x$ |
| Valeurs clés | $\ln 1=0$, $\ln e=1$, $e^0=1$ |
| Produit / quotient | $\ln(ab)=\ln a+\ln b$ ; $\ln\!\frac ab=\ln a-\ln b$ |
| Puissance | $\ln(a^{n})=n\ln a$ |
| Ln — dérivée | $(\ln x)'=\frac1x$, $(\ln u)'=\frac{u'}{u}$ |
| Ln — variations | strictement **croissante** sur $]0\,;+\infty[$ |
| Ln — limites | $\lim\limits_{0^+}\ln=-\infty$, $\lim\limits_{+\infty}\ln=+\infty$ |
| Croissances comparées | $\frac{e^x}{x^n}\to+\infty$ ; $\frac{\ln x}{x^n}\to 0$ ; $x^n\ln x\to 0$ en $0^+$ |

---

## 10. Les erreurs qui coûtent des points

1. **Oublier la condition d'existence.** Avant de résoudre avec $\ln$, pose l'argument $>0$ —
   et **vérifie à la fin** que la solution la respecte. Une solution qui rend un argument
   négatif est à **rejeter**.
2. **Croire que $\ln(a+b)=\ln a+\ln b$.** FAUX : le $\ln$ ne rentre que dans les produits.
   $\ln(2+3)=\ln 5$, pas $\ln 6$.
3. **Écrire $e^{a}\times e^{b}=e^{ab}$ ou $e^{a}+e^{b}=e^{a+b}$.** Non : les exposants
   **s'additionnent dans un produit** ($e^{a}e^{b}=e^{a+b}$), une somme d'exponentielles ne se
   simplifie pas.
4. **Faire descendre la puissance de tout le contenu.** Dans $\ln(3x^{2})$, seul $x^2$ est au
   carré : $\ln(3x^{2})=\ln 3+2\ln x$, pas $2\ln(3x)$.
5. **Ne pas inverser le sens quand on divise par $\ln q$ avec $0<q<1$.** $\ln q<0$ : l'inégalité
   **change de sens**. C'est l'erreur reine des problèmes de décroissance.
6. **Confondre les croissances comparées.** L'exponentielle bat la puissance, la puissance bat
   le logarithme. Conclure « $\dfrac{\infty}{\infty}=1$ » est une faute : c'est une forme
   indéterminée que la règle tranche.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, en-tête (lignes 1 à 11) et
section « === Fonctions logarithme et exponentielle === » (lignes 71 à 74), rubriques
« Contenus » et « Capacités ». Programme des ENSEIGNEMENTS OPTIONNELS de mathématiques,
option MATHS COMPLÉMENTAIRES, terminale générale (arrêté du 19-7-2019, BO spécial n°8 du
25 juillet 2019). URL officielle : education.gouv.fr/bo/19/Special8/MENE1921265A.htm ;
PDF : cache.media.education.gouv.fr/.../spe265_annexe_1159134.pdf.

⚠️ PROVENANCE DE LA SOURCE : d'après l'en-tête du fichier, le texte a été extrait via WebFetch
depuis les PDF officiels. La reproduction n'est pas garantie exhaustive. AVANT PUBLICATION,
CONFRONTER AU PDF OFFICIEL (education.gouv.fr / éduscol) par un professeur.

CONTENU DU PROGRAMME (verbatim de la source) :
- Contenus : « fonction exponentielle (rappels) ; fonction logarithme népérien, propriétés
  algébriques, dérivée, variations, limites ; croissances comparées ».
- Capacités : « résoudre équations et inéquations ; utiliser log/exp dans un problème ».

CHOIX DE RÉDACTION À CONFRONTER AU RELECTEUR :
- « Rappels sur l'exponentielle » : le programme les cite sans les détailler (renvoi au
  programme de Première). J'ai retenu algèbre, dérivée, variations, limites, dérivée de e^u —
  périmètre standard. À valider selon le niveau d'exigence attendu en complémentaires.
- Croissances comparées : le programme dit seulement « croissances comparées » sans préciser
  les formes. J'ai inclus e^x/x^n → +∞, x^n e^x → 0 en -∞, ln x /x^n → 0, x^n ln x → 0 en 0⁺.
  Vérifier les formes exactes attendues (notamment si x^n e^x en -∞ est au programme complém.).
- Dérivées de composées (e^u)' et (ln u)' : indispensables aux exercices « utiliser dans un
  problème » ; incluses. Confirmer qu'elles sont exigibles en maths complémentaires.
- Section 7 « Applications » : traduit la capacité « utiliser log/exp dans un problème » par la
  méthode de seuil d'une suite géométrique (cohérent avec la section « Suites et modèles
  d'évolution » du même programme). Cadrage à valider.
- Aucune démonstration exigible n'a été supposée : la construction rigoureuse de ln comme
  réciproque est esquissée, non démontrée. Préciser si une démonstration est attendue.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
