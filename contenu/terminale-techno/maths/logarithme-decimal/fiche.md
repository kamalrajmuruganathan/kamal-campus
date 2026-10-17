---
id: tale-techno-math-logarithme-decimal
titre: "Fonction logarithme décimal"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 12
prerequis:
  - Fonctions exponentielles x ↦ aˣ (Terminale technologique)
  - Suites arithmétiques et géométriques (Terminale technologique)
  - Puissances de 10 (Seconde)
  - Pourcentages et évolutions successives (automatismes)
statut: brouillon
relu_par: null
---

# Fonction logarithme décimal

> Au chapitre sur les fonctions exponentielles, tu sais calculer un capital au
> bout de $x$ années : $C(x) = 5000 \times 1{,}04^x$. Mais la question inverse,
> « **au bout de combien d'années** le capital aura-t-il doublé ? », revient à
> résoudre $1{,}04^x = 2$ : l'inconnue est **dans l'exposant**, et aucun outil
> vu jusqu'ici ne l'en fait sortir. Le **logarithme décimal** est exactement
> cet outil. C'est aussi lui qui se cache derrière le pH en chimie, les
> décibels en acoustique et la magnitude des séismes.

---

## 1. Définition : log(b), la solution de $10^x = b$

### L'équation $10^x = b$

La fonction $x \mapsto 10^x$ est une exponentielle de base $10 > 1$ : elle est
**strictement croissante** et ne prend que des valeurs **strictement
positives**. Conséquence : pour tout nombre $b > 0$, l'équation

$$10^x = b$$

admet **une unique solution**. C'est cette solution qu'on appelle le
logarithme décimal de $b$.

$$\boxed{\text{Pour } b > 0,\ \log(b) \text{ est l'unique solution de } 10^x = b, \text{ c'est-à-dire } 10^{\log b} = b}$$

Autrement dit : $\log(b)$ répond à la question « **10 puissance combien donne
$b$ ?** ». Sur la calculatrice, c'est la touche `log`.

> **Exemple.** $\log(1000) = 3$ car $10^3 = 1000$. $\log(0{,}01) = -2$ car
> $10^{-2} = 0{,}01$. Et $\log(450) \approx 2{,}653$ : cohérent, car $450$ est
> entre $10^2 = 100$ et $10^3 = 1000$, donc son log est entre $2$ et $3$.

### Les valeurs à connaître par cœur

$$\boxed{\log 1 = 0 \qquad \log 10 = 1 \qquad \log(10^n) = n \text{ pour tout entier } n}$$

| $b$ | $0{,}001$ | $0{,}01$ | $0{,}1$ | $1$ | $10$ | $100$ | $1000$ |
|---|---|---|---|---|---|---|---|
| $\log b$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

**Le log compte les puissances de 10** : c'est pour ça qu'il mesure si bien les
grandeurs qui s'étalent sur plusieurs ordres de grandeur (concentrations,
intensités sonores, énergies des séismes).

### Condition d'existence : $b > 0$, obligatoire

⚠️ $\log(b)$ n'existe que pour $b > 0$. En effet $10^x$ est **toujours
strictement positif** : l'équation $10^x = -5$ ou $10^x = 0$ n'a **aucune**
solution. $\log(-5)$ et $\log(0)$ n'ont pas de sens — la calculatrice affiche
d'ailleurs une erreur.

---

## 2. Sens de variation

<!-- schema:courbe-log -->
![Courbe de la fonction log, définie pour x strictement positif et croissante : log x est négatif entre 0 et 1, nul en 1, positif après ; log 10 = 1 et log 0,1 = −1.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTcuMTEiIHkxPSIyOCIgeDI9IjU3LjExIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjkzLjUiIHkxPSIyOCIgeDI9IjkzLjUiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTI5Ljg5IiB5MT0iMjgiIHgyPSIxMjkuODkiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTY2LjI5IiB5MT0iMjgiIHgyPSIxNjYuMjkiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAyLjY4IiB5MT0iMjgiIHgyPSIyMDIuNjgiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjM5LjA3IiB5MT0iMjgiIHgyPSIyMzkuMDciIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjc1LjQ2IiB5MT0iMjgiIHgyPSIyNzUuNDYiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzExLjg1IiB5MT0iMjgiIHgyPSIzMTEuODUiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQ4LjI0IiB5MT0iMjgiIHgyPSIzNDguMjQiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzg0LjYzIiB5MT0iMjgiIHgyPSIzODQuNjMiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDIxLjAyIiB5MT0iMjgiIHgyPSI0MjEuMDIiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDU3LjQxIiB5MT0iMjgiIHgyPSI0NTcuNDEiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDkzLjgiIHkxPSIyOCIgeDI9IjQ5My44IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjgzLjc1IiB4Mj0iNTEyIiB5Mj0iMjgzLjc1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjQyLjUiIHgyPSI1MTIiIHkyPSIyNDIuNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIwMS4yNSIgeDI9IjUxMiIgeTI9IjIwMS4yNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE2MCIgeDI9IjUxMiIgeTI9IjE2MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjExOC43NSIgeDI9IjUxMiIgeTI9IjExOC43NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9Ijc3LjUiIHgyPSI1MTIiIHkyPSI3Ny41IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzYuMjUiIHgyPSI1MTIiIHkyPSIzNi4yNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE2MCIgeDI9IjUxMSIgeTI9IjE2MCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MjAsMTYwIDUxMSwxNTUuNSA1MTEsMTY0LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTcuMTEiIHkxPSIyOTIiIHgyPSI1Ny4xMSIgeTI9IjI5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU3LjExLDIwIDUyLjYxLDI5IDYxLjYxLDI5IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNTE2IiB5PSIxNzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eDwvdGV4dD48dGV4dCB4PSI0NS4xMSIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eTwvdGV4dD48dGV4dCB4PSI5My41IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMTI5Ljg5IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMTY2LjI5IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHRleHQgeD0iMjAyLjY4IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PHRleHQgeD0iMjM5LjA3IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjU8L3RleHQ+PHRleHQgeD0iMjc1LjQ2IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjY8L3RleHQ+PHRleHQgeD0iMzExLjg1IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjc8L3RleHQ+PHRleHQgeD0iMzQ4LjI0IiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PHRleHQgeD0iMzg0LjYzIiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjk8L3RleHQ+PHRleHQgeD0iNDIxLjAyIiB5PSIxNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEwPC90ZXh0Pjx0ZXh0IHg9IjQ1Ny40MSIgeT0iMTc2IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xMTwvdGV4dD48dGV4dCB4PSI0OTMuOCIgeT0iMTc2IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xMjwvdGV4dD48dGV4dCB4PSI1MS4xMSIgeT0iMjg3Ljc1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIxLDU8L3RleHQ+PHRleHQgeD0iNTEuMTEiIHk9IjI0Ni41IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIxPC90ZXh0Pjx0ZXh0IHg9IjUxLjExIiB5PSIyMDUuMjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjAsNTwvdGV4dD48dGV4dCB4PSI1MS4xMSIgeT0iMTIyLjc1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDU8L3RleHQ+PHRleHQgeD0iNTEuMTEiIHk9IjgxLjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iNDkuMTEiIHk9IjE3NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48Y2xpcFBhdGggaWQ9InpvbmUiPjxyZWN0IHg9IjI4IiB5PSIyOCIgd2lkdGg9IjQ4NCIgaGVpZ2h0PSIyNjQiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lKSI+PHJlY3QgeD0iNTcuMTEiIHk9IjE2MCIgd2lkdGg9IjM2LjM5IiBoZWlnaHQ9IjEzMiIgZmlsbD0iI2MwMmEyYSIgZmlsbC1vcGFjaXR5PSIwLjA3IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMCIvPjxsaW5lIHgxPSI0MjEuMDIiIHkxPSIxNjAiIHgyPSI0MjEuMDIiIHkyPSI3Ny41IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1Ny4xMSIgeTE9Ijc3LjUiIHgyPSI0MjEuMDIiIHkyPSI3Ny41IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MC43NSIgeTE9IjE2MCIgeDI9IjYwLjc1IiB5Mj0iMjQyLjUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU3LjExIiB5MT0iMjQyLjUiIHgyPSI2MC43NSIgeTI9IjI0Mi41IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik01Ny44IDMwMC4yTDYwLjEgMjQ5LjRMNjIuNCAyMjkuMkw2NC43IDIxNi40TDY2LjkgMjA3TDY5LjIgMTk5LjVMNzEuNSAxOTMuM0w3My43IDE4OC4xTDc2IDE4My41TDc4LjMgMTc5LjRMODAuNSAxNzUuOEw4Mi44IDE3Mi41TDg1LjEgMTY5LjRMODcuNCAxNjYuNkw4OS42IDE2NEw5MS45IDE2MS42TDk0LjIgMTU5LjNMOTYuNCAxNTcuMkw5OC43IDE1NS4yTDEwMSAxNTMuM0wxMDMuMyAxNTEuNUwxMDUuNSAxNDkuOEwxMDcuOCAxNDguMUwxMTAuMSAxNDYuNkwxMTIuMyAxNDUuMUwxMTQuNiAxNDMuNkwxMTYuOSAxNDIuMkwxMTkuMiAxNDAuOUwxMjEuNCAxMzkuNkwxMjMuNyAxMzguNEwxMjYgMTM3LjJMMTI4LjIgMTM2TDEzMC41IDEzNC45TDEzMi44IDEzMy44TDEzNSAxMzIuN0wxMzcuMyAxMzEuN0wxMzkuNiAxMzAuN0wxNDEuOSAxMjkuN0wxNDQuMSAxMjguOEwxNDYuNCAxMjcuOEwxNDguNyAxMjYuOUwxNTAuOSAxMjYuMUwxNTMuMiAxMjUuMkwxNTUuNSAxMjQuNEwxNTcuOCAxMjMuNkwxNjAgMTIyLjhMMTYyLjMgMTIyTDE2NC42IDEyMS4yTDE2Ni44IDEyMC41TDE2OS4xIDExOS43TDE3MS40IDExOUwxNzMuNyAxMTguM0wxNzUuOSAxMTcuNkwxNzguMiAxMTYuOUwxODAuNSAxMTYuM0wxODIuNyAxMTUuNkwxODUgMTE1TDE4Ny4zIDExNC4zTDE4OS41IDExMy43TDE5MS44IDExMy4xTDE5NC4xIDExMi41TDE5Ni40IDExMS45TDE5OC42IDExMS4zTDIwMC45IDExMC44TDIwMy4yIDExMC4yTDIwNS40IDEwOS43TDIwNy43IDEwOS4xTDIxMCAxMDguNkwyMTIuMyAxMDhMMjE0LjUgMTA3LjVMMjE2LjggMTA3TDIxOS4xIDEwNi41TDIyMS4zIDEwNkwyMjMuNiAxMDUuNUwyMjUuOSAxMDVMMjI4LjIgMTA0LjZMMjMwLjQgMTA0LjFMMjMyLjcgMTAzLjZMMjM1IDEwMy4yTDIzNy4yIDEwMi43TDIzOS41IDEwMi4yTDI0MS44IDEwMS44TDI0NCAxMDEuNEwyNDYuMyAxMDAuOUwyNDguNiAxMDAuNUwyNTAuOSAxMDAuMUwyNTMuMSA5OS43TDI1NS40IDk5LjNMMjU3LjcgOTguOEwyNTkuOSA5OC40TDI2Mi4yIDk4TDI2NC41IDk3LjdMMjY2LjggOTcuM0wyNjkgOTYuOUwyNzEuMyA5Ni41TDI3My42IDk2LjFMMjc1LjggOTUuN0wyNzguMSA5NS40TDI4MC40IDk1TDI4Mi42IDk0LjZMMjg0LjkgOTQuM0wyODcuMiA5My45TDI4OS41IDkzLjZMMjkxLjcgOTMuMkwyOTQgOTIuOUwyOTYuMyA5Mi41TDI5OC41IDkyLjJMMzAwLjggOTEuOUwzMDMuMSA5MS41TDMwNS40IDkxLjJMMzA3LjYgOTAuOUwzMDkuOSA5MC42TDMxMi4yIDkwLjJMMzE0LjQgODkuOUwzMTYuNyA4OS42TDMxOSA4OS4zTDMyMS4zIDg5TDMyMy41IDg4LjdMMzI1LjggODguNEwzMjguMSA4OC4xTDMzMC4zIDg3LjhMMzMyLjYgODcuNUwzMzQuOSA4Ny4yTDMzNy4xIDg2LjlMMzM5LjQgODYuNkwzNDEuNyA4Ni4zTDM0NCA4NkwzNDYuMiA4NS43TDM0OC41IDg1LjVMMzUwLjggODUuMkwzNTMgODQuOUwzNTUuMyA4NC42TDM1Ny42IDg0LjRMMzU5LjkgODQuMUwzNjIuMSA4My44TDM2NC40IDgzLjZMMzY2LjcgODMuM0wzNjguOSA4M0wzNzEuMiA4Mi44TDM3My41IDgyLjVMMzc1LjggODIuM0wzNzggODJMMzgwLjMgODEuOEwzODIuNiA4MS41TDM4NC44IDgxLjNMMzg3LjEgODFMMzg5LjQgODAuOEwzOTEuNiA4MC41TDM5My45IDgwLjNMMzk2LjIgODBMMzk4LjUgNzkuOEw0MDAuNyA3OS42TDQwMyA3OS4zTDQwNS4zIDc5LjFMNDA3LjUgNzguOUw0MDkuOCA3OC42TDQxMi4xIDc4LjRMNDE0LjQgNzguMkw0MTYuNiA3Ny45TDQxOC45IDc3LjdMNDIxLjIgNzcuNUw0MjMuNCA3Ny4zTDQyNS43IDc3TDQyOCA3Ni44TDQzMC4zIDc2LjZMNDMyLjUgNzYuNEw0MzQuOCA3Ni4yTDQzNy4xIDc2TDQzOS4zIDc1LjdMNDQxLjYgNzUuNUw0NDMuOSA3NS4zTDQ0Ni4xIDc1LjFMNDQ4LjQgNzQuOUw0NTAuNyA3NC43TDQ1MyA3NC41TDQ1NS4yIDc0LjNMNDU3LjUgNzQuMUw0NTkuOCA3My45TDQ2MiA3My43TDQ2NC4zIDczLjVMNDY2LjYgNzMuM0w0NjguOSA3My4xTDQ3MS4xIDcyLjlMNDczLjQgNzIuN0w0NzUuNyA3Mi41TDQ3Ny45IDcyLjNMNDgwLjIgNzIuMUw0ODIuNSA3MS45TDQ4NC44IDcxLjdMNDg3IDcxLjVMNDg5LjMgNzEuM0w0OTEuNiA3MS4yTDQ5My44IDcxTDQ5Ni4xIDcwLjhMNDk4LjQgNzAuNkw1MDAuNiA3MC40TDUwMi45IDcwLjJMNTA1LjIgNzBMNTA3LjUgNjkuOUw1MDkuNyA2OS43TDUxMiA2OS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PHRleHQgeD0iNDU3LjQxIiB5PSI2Mi4wOSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+eSA9IGxvZyB4PC90ZXh0PjxjaXJjbGUgY3g9IjkzLjUiIGN5PSIxNjAiIHI9IjQiIGZpbGw9IiNjMDJhMmEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTAzLjUiIHk9IjE5NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5sb2cgMSA9IDA8L3RleHQ+PGNpcmNsZSBjeD0iNDIxLjAyIiBjeT0iNzcuNSIgcj0iNCIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSI0MTEuMDIiIHk9IjY3LjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmxvZyAxMCA9IDE8L3RleHQ+PGNpcmNsZSBjeD0iNjAuNzUiIGN5PSIyNDIuNSIgcj0iNCIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSI3Mi43NSIgeT0iMjQ3LjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+bG9nIDAsMSA9IOKIkjE8L3RleHQ+PC9zdmc+)
*Courbe de la fonction log, définie pour x strictement positif et croissante : log x est négatif entre 0 et 1, nul en 1, positif après ; log 10 = 1 et log 0,1 = −1.*
<!-- /schema -->

La fonction $\log$ est définie sur $]0\ ;+\infty[$ et

$$\boxed{\log \text{ est strictement croissante sur } ]0\ ;+\infty[}$$

C'est l'héritage direct de la croissance de $x \mapsto 10^x$ : plus $b$ est
grand, plus il faut un exposant élevé pour l'atteindre.

Deux conséquences à savoir utiliser :

**1. Le signe de $\log b$** se lit par rapport à $1$ (car $\log 1 = 0$) :

| $0 < b < 1$ | $b = 1$ | $b > 1$ |
|---|---|---|
| $\log b < 0$ | $\log b = 0$ | $\log b > 0$ |

**2. Le log conserve l'ordre** : pour $a > 0$ et $b > 0$,

$$a < b \iff \log a < \log b$$

C'est ce qui autorisera à « prendre le log » des deux côtés d'une équation ou
d'une comparaison sans rien casser.

> **Exemple.** Sans calculatrice : $\log(0{,}2) < 0$ car $0{,}2 < 1$, et
> $\log 7 < \log 20$ car $7 < 20$ et le log est croissant. Par contre
> $\log(0{,}2) \neq -5$ : le log de $0{,}2$ n'est pas « moins cinq » mais
> $\approx -0{,}7$ (c'est $\log(0{,}1) = -1 < \log(0{,}2) < 0$).

---

## 3. Propriétés algébriques : le log transforme les produits en sommes

Pour tous $a > 0$, $b > 0$ et tout entier $n$ :

$$\boxed{\log(ab) = \log a + \log b \qquad \qquad \log(a^n) = n \log a}$$

C'est le miroir exact des propriétés de l'exponentielle
($10^{x+y} = 10^x \times 10^y$) : **l'exponentielle transforme les sommes en
produits, le log transforme les produits en sommes.**

> **Exemple (produit).** $\log 200 = \log(2 \times 100) = \log 2 + \log 100 = \log 2 + 2 \approx 0{,}301 + 2 = 2{,}301$.

> **Exemple (puissance).** $\log(3^{10}) = 10 \log 3 \approx 10 \times 0{,}477 = 4{,}77$.
> Donc $3^{10}$ est entre $10^4$ et $10^5$ — en effet $3^{10} = 59\,049$.

### Conséquences directes

$$\log\!\left(\frac{1}{a}\right) = -\log a \qquad \log\!\left(\frac{a}{b}\right) = \log a - \log b \qquad \log\sqrt{a} = \frac{1}{2}\log a$$

La première vient de $\log(a^{-1}) = -\log a$ ; la deuxième de
$\dfrac{a}{b} = a \times \dfrac{1}{b}$ ; la troisième de $\sqrt{a} = a^{1/2}$
(vu au chapitre exponentielles).

> **Exemple (quotient).** $\log 50 = \log\dfrac{100}{2} = \log 100 - \log 2 = 2 - \log 2 \approx 1{,}699$.

> **Exemple (inverse).** $\log\dfrac{1}{8} = -\log 8 = -\log(2^3) = -3\log 2 \approx -0{,}903$.

---

## 4. La méthode phare : résoudre $a^x = b$

C'est LA capacité attendue du chapitre. Pour $a > 0$ (avec $a \neq 1$) et
$b > 0$, l'équation $a^x = b$ se résout en **trois étapes** :

1. **Prendre le log des deux membres** (autorisé : les deux sont strictement
   positifs, et le log conserve l'ordre) : $\log(a^x) = \log b$.
2. **Faire descendre l'exposant** avec $\log(a^n) = n\log a$ :
   $x \log a = \log b$.
3. **Isoler $x$** en divisant par $\log a$ (non nul car $a \neq 1$) :

$$\boxed{a^x = b \iff x = \frac{\log b}{\log a}}$$

### Application phare : au bout de combien d'années le capital double-t-il ?

<!-- schema:doublement-capital -->
![Un capital placé à 4 % est multiplié par 1,04ˣ au bout de x années : il double quand 1,04ˣ = 2, soit x = log 2 ÷ log 1,04 ≈ 17,7, donc au cours de la 18e année.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTQuNCIgeTE9IjI4IiB4Mj0iNTQuNCIgeTI9IjI5MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI4OS42IiB5MT0iMjgiIHgyPSI4OS42IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEyNC44IiB5MT0iMjgiIHgyPSIxMjQuOCIgeTI9IjI5MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNjAiIHkxPSIyOCIgeDI9IjE2MCIgeTI9IjI5MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxOTUuMiIgeTE9IjI4IiB4Mj0iMTk1LjIiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjMwLjQiIHkxPSIyOCIgeDI9IjIzMC40IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI2NS42IiB5MT0iMjgiIHgyPSIyNjUuNiIgeTI9IjI5MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMDAuOCIgeTE9IjI4IiB4Mj0iMzAwLjgiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzM2IiB5MT0iMjgiIHgyPSIzMzYiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzcxLjIiIHkxPSIyOCIgeDI9IjM3MS4yIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwNi40IiB5MT0iMjgiIHgyPSI0MDYuNCIgeTI9IjI5MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NDEuNiIgeTE9IjI4IiB4Mj0iNDQxLjYiIHkyPSIyOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDc2LjgiIHkxPSIyOCIgeDI9IjQ3Ni44IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUxMiIgeTE9IjI4IiB4Mj0iNTEyIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjc0Ljk3IiB4Mj0iNTEyIiB5Mj0iMjc0Ljk3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjMyLjM5IiB4Mj0iNTEyIiB5Mj0iMjMyLjM5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTg5LjgxIiB4Mj0iNTEyIiB5Mj0iMTg5LjgxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTQ3LjIzIiB4Mj0iNTEyIiB5Mj0iMTQ3LjIzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTA0LjY1IiB4Mj0iNTEyIiB5Mj0iMTA0LjY1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iNjIuMDYiIHgyPSI1MTIiIHkyPSI2Mi4wNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjI3NC45NyIgeDI9IjUxMSIgeTI9IjI3NC45NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MjAsMjc0Ljk3IDUxMSwyNzAuNDcgNTExLDI3OS40NyIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI1NC40IiB5MT0iMjkyIiB4Mj0iNTQuNCIgeTI9IjI5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU0LjQsMjAgNDkuOSwyOSA1OC45LDI5IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNTE2IiB5PSIyOTIuOTciIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eDwvdGV4dD48dGV4dCB4PSI0Mi40IiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj55PC90ZXh0Pjx0ZXh0IHg9Ijg5LjYiIHk9IjI5MC45NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjwvdGV4dD48dGV4dCB4PSIxMjQuOCIgeT0iMjkwLjk3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj40PC90ZXh0Pjx0ZXh0IHg9IjE2MCIgeT0iMjkwLjk3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj42PC90ZXh0Pjx0ZXh0IHg9IjE5NS4yIiB5PSIyOTAuOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PHRleHQgeD0iMjMwLjQiIHk9IjI5MC45NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTA8L3RleHQ+PHRleHQgeD0iMjY1LjYiIHk9IjI5MC45NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTI8L3RleHQ+PHRleHQgeD0iMzAwLjgiIHk9IjI5MC45NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTQ8L3RleHQ+PHRleHQgeD0iMzM2IiB5PSIyOTAuOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE2PC90ZXh0Pjx0ZXh0IHg9IjM3MS4yIiB5PSIyOTAuOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE4PC90ZXh0Pjx0ZXh0IHg9IjQwNi40IiB5PSIyOTAuOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIwPC90ZXh0Pjx0ZXh0IHg9IjQ0MS42IiB5PSIyOTAuOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIyPC90ZXh0Pjx0ZXh0IHg9IjQ3Ni44IiB5PSIyOTAuOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI0PC90ZXh0Pjx0ZXh0IHg9IjQ4LjQiIHk9IjIzNi4zOSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCw1PC90ZXh0Pjx0ZXh0IHg9IjQ4LjQiIHk9IjE5My44MSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSI0OC40IiB5PSIxNTEuMjMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEsNTwvdGV4dD48dGV4dCB4PSI0OC40IiB5PSIxMDguNjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iNDguNCIgeT0iNjYuMDYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIsNTwvdGV4dD48dGV4dCB4PSI0Ni40IiB5PSIyOTAuOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0ODQiIGhlaWdodD0iMjY0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxsaW5lIHgxPSIzNjUuNDQiIHkxPSIyNzQuOTciIHgyPSIzNjUuNDQiIHkyPSIxMDQuNjUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTU0LjQgMTg5LjhMNTYuNyAxODkuNEw1OSAxODguOUw2MS4zIDE4OC41TDYzLjYgMTg4LjFMNjUuOCAxODcuNkw2OC4xIDE4Ny4yTDcwLjQgMTg2LjdMNzIuNyAxODYuM0w3NSAxODUuOEw3Ny4zIDE4NS40TDc5LjYgMTg0LjlMODEuOSAxODQuNEw4NC4xIDE4NEw4Ni40IDE4My41TDg4LjcgMTgzTDkxIDE4Mi42TDkzLjMgMTgyLjFMOTUuNiAxODEuNkw5Ny45IDE4MS4xTDEwMC4yIDE4MC43TDEwMi40IDE4MC4yTDEwNC43IDE3OS43TDEwNyAxNzkuMkwxMDkuMyAxNzguN0wxMTEuNiAxNzguMkwxMTMuOSAxNzcuN0wxMTYuMiAxNzcuMkwxMTguNSAxNzYuN0wxMjAuOCAxNzYuMkwxMjMgMTc1LjdMMTI1LjMgMTc1LjJMMTI3LjYgMTc0LjdMMTI5LjkgMTc0LjJMMTMyLjIgMTczLjdMMTM0LjUgMTczLjJMMTM2LjggMTcyLjZMMTM5LjEgMTcyLjFMMTQxLjMgMTcxLjZMMTQzLjYgMTcxLjFMMTQ1LjkgMTcwLjVMMTQ4LjIgMTcwTDE1MC41IDE2OS41TDE1Mi44IDE2OC45TDE1NS4xIDE2OC40TDE1Ny40IDE2Ny44TDE1OS42IDE2Ny4zTDE2MS45IDE2Ni43TDE2NC4yIDE2Ni4yTDE2Ni41IDE2NS42TDE2OC44IDE2NS4xTDE3MS4xIDE2NC41TDE3My40IDE2NEwxNzUuNyAxNjMuNEwxNzggMTYyLjhMMTgwLjIgMTYyLjJMMTgyLjUgMTYxLjdMMTg0LjggMTYxLjFMMTg3LjEgMTYwLjVMMTg5LjQgMTU5LjlMMTkxLjcgMTU5LjNMMTk0IDE1OC43TDE5Ni4zIDE1OC4xTDE5OC41IDE1Ny41TDIwMC44IDE1Ni45TDIwMy4xIDE1Ni4zTDIwNS40IDE1NS43TDIwNy43IDE1NS4xTDIxMCAxNTQuNUwyMTIuMyAxNTMuOUwyMTQuNiAxNTMuM0wyMTYuOCAxNTIuN0wyMTkuMSAxNTJMMjIxLjQgMTUxLjRMMjIzLjcgMTUwLjhMMjI2IDE1MC4xTDIyOC4zIDE0OS41TDIzMC42IDE0OC45TDIzMi45IDE0OC4yTDIzNS4yIDE0Ny42TDIzNy40IDE0Ni45TDIzOS43IDE0Ni4zTDI0MiAxNDUuNkwyNDQuMyAxNDQuOUwyNDYuNiAxNDQuM0wyNDguOSAxNDMuNkwyNTEuMiAxNDIuOUwyNTMuNSAxNDIuM0wyNTUuNyAxNDEuNkwyNTggMTQwLjlMMjYwLjMgMTQwLjJMMjYyLjYgMTM5LjVMMjY0LjkgMTM4LjhMMjY3LjIgMTM4LjFMMjY5LjUgMTM3LjRMMjcxLjggMTM2LjdMMjc0IDEzNkwyNzYuMyAxMzUuM0wyNzguNiAxMzQuNkwyODAuOSAxMzMuOUwyODMuMiAxMzMuMkwyODUuNSAxMzIuNEwyODcuOCAxMzEuN0wyOTAuMSAxMzFMMjkyLjQgMTMwLjJMMjk0LjYgMTI5LjVMMjk2LjkgMTI4LjhMMjk5LjIgMTI4TDMwMS41IDEyNy4zTDMwMy44IDEyNi41TDMwNi4xIDEyNS44TDMwOC40IDEyNUwzMTAuNyAxMjQuMkwzMTIuOSAxMjMuNUwzMTUuMiAxMjIuN0wzMTcuNSAxMjEuOUwzMTkuOCAxMjEuMUwzMjIuMSAxMjAuM0wzMjQuNCAxMTkuNUwzMjYuNyAxMTguN0wzMjkgMTE3LjlMMzMxLjIgMTE3LjFMMzMzLjUgMTE2LjNMMzM1LjggMTE1LjVMMzM4LjEgMTE0LjdMMzQwLjQgMTEzLjlMMzQyLjcgMTEzLjFMMzQ1IDExMi4yTDM0Ny4zIDExMS40TDM0OS42IDExMC42TDM1MS44IDEwOS43TDM1NC4xIDEwOC45TDM1Ni40IDEwOEwzNTguNyAxMDcuMkwzNjEgMTA2LjNMMzYzLjMgMTA1LjVMMzY1LjYgMTA0LjZMMzY3LjkgMTAzLjdMMzcwLjEgMTAyLjlMMzcyLjQgMTAyTDM3NC43IDEwMS4xTDM3NyAxMDAuMkwzNzkuMyA5OS4zTDM4MS42IDk4LjRMMzgzLjkgOTcuNUwzODYuMiA5Ni42TDM4OC40IDk1LjdMMzkwLjcgOTQuOEwzOTMgOTMuOEwzOTUuMyA5Mi45TDM5Ny42IDkyTDM5OS45IDkxLjFMNDAyLjIgOTAuMUw0MDQuNSA4OS4yTDQwNi44IDg4LjJMNDA5IDg3LjNMNDExLjMgODYuM0w0MTMuNiA4NS4zTDQxNS45IDg0LjRMNDE4LjIgODMuNEw0MjAuNSA4Mi40TDQyMi44IDgxLjRMNDI1LjEgODAuNEw0MjcuMyA3OS41TDQyOS42IDc4LjVMNDMxLjkgNzcuNEw0MzQuMiA3Ni40TDQzNi41IDc1LjRMNDM4LjggNzQuNEw0NDEuMSA3My40TDQ0My40IDcyLjNMNDQ1LjYgNzEuM0w0NDcuOSA3MC4zTDQ1MC4yIDY5LjJMNDUyLjUgNjguMkw0NTQuOCA2Ny4xTDQ1Ny4xIDY2LjFMNDU5LjQgNjVMNDYxLjcgNjMuOUw0NjQgNjIuOEw0NjYuMiA2MS44TDQ2OC41IDYwLjdMNDcwLjggNTkuNkw0NzMuMSA1OC41TDQ3NS40IDU3LjRMNDc3LjcgNTYuMkw0ODAgNTUuMUw0ODIuMyA1NEw0ODQuNSA1Mi45TDQ4Ni44IDUxLjdMNDg5LjEgNTAuNkw0OTEuNCA0OS41TDQ5My43IDQ4LjNMNDk2IDQ3LjFMNDk4LjMgNDZMNTAwLjYgNDQuOEw1MDIuOCA0My42TDUwNS4xIDQyLjRMNTA3LjQgNDEuM0w1MDkuNyA0MC4xTDUxMiAzOC45IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjggMTA0LjZMMzAuNCAxMDQuNkwzMi44IDEwNC42TDM1LjMgMTA0LjZMMzcuNyAxMDQuNkw0MC4xIDEwNC42TDQyLjUgMTA0LjZMNDQuOSAxMDQuNkw0Ny40IDEwNC42TDQ5LjggMTA0LjZMNTIuMiAxMDQuNkw1NC42IDEwNC42TDU3IDEwNC42TDU5LjUgMTA0LjZMNjEuOSAxMDQuNkw2NC4zIDEwNC42TDY2LjcgMTA0LjZMNjkuMSAxMDQuNkw3MS42IDEwNC42TDc0IDEwNC42TDc2LjQgMTA0LjZMNzguOCAxMDQuNkw4MS4yIDEwNC42TDgzLjcgMTA0LjZMODYuMSAxMDQuNkw4OC41IDEwNC42TDkwLjkgMTA0LjZMOTMuMyAxMDQuNkw5NS44IDEwNC42TDk4LjIgMTA0LjZMMTAwLjYgMTA0LjZMMTAzIDEwNC42TDEwNS40IDEwNC42TDEwNy45IDEwNC42TDExMC4zIDEwNC42TDExMi43IDEwNC42TDExNS4xIDEwNC42TDExNy41IDEwNC42TDEyMCAxMDQuNkwxMjIuNCAxMDQuNkwxMjQuOCAxMDQuNkwxMjcuMiAxMDQuNkwxMjkuNiAxMDQuNkwxMzIuMSAxMDQuNkwxMzQuNSAxMDQuNkwxMzYuOSAxMDQuNkwxMzkuMyAxMDQuNkwxNDEuNyAxMDQuNkwxNDQuMiAxMDQuNkwxNDYuNiAxMDQuNkwxNDkgMTA0LjZMMTUxLjQgMTA0LjZMMTUzLjggMTA0LjZMMTU2LjMgMTA0LjZMMTU4LjcgMTA0LjZMMTYxLjEgMTA0LjZMMTYzLjUgMTA0LjZMMTY1LjkgMTA0LjZMMTY4LjQgMTA0LjZMMTcwLjggMTA0LjZMMTczLjIgMTA0LjZMMTc1LjYgMTA0LjZMMTc4IDEwNC42TDE4MC41IDEwNC42TDE4Mi45IDEwNC42TDE4NS4zIDEwNC42TDE4Ny43IDEwNC42TDE5MC4xIDEwNC42TDE5Mi42IDEwNC42TDE5NSAxMDQuNkwxOTcuNCAxMDQuNkwxOTkuOCAxMDQuNkwyMDIuMiAxMDQuNkwyMDQuNyAxMDQuNkwyMDcuMSAxMDQuNkwyMDkuNSAxMDQuNkwyMTEuOSAxMDQuNkwyMTQuMyAxMDQuNkwyMTYuOCAxMDQuNkwyMTkuMiAxMDQuNkwyMjEuNiAxMDQuNkwyMjQgMTA0LjZMMjI2LjQgMTA0LjZMMjI4LjkgMTA0LjZMMjMxLjMgMTA0LjZMMjMzLjcgMTA0LjZMMjM2LjEgMTA0LjZMMjM4LjUgMTA0LjZMMjQxIDEwNC42TDI0My40IDEwNC42TDI0NS44IDEwNC42TDI0OC4yIDEwNC42TDI1MC42IDEwNC42TDI1My4xIDEwNC42TDI1NS41IDEwNC42TDI1Ny45IDEwNC42TDI2MC4zIDEwNC42TDI2Mi43IDEwNC42TDI2NS4yIDEwNC42TDI2Ny42IDEwNC42TDI3MCAxMDQuNkwyNzIuNCAxMDQuNkwyNzQuOCAxMDQuNkwyNzcuMyAxMDQuNkwyNzkuNyAxMDQuNkwyODIuMSAxMDQuNkwyODQuNSAxMDQuNkwyODYuOSAxMDQuNkwyODkuNCAxMDQuNkwyOTEuOCAxMDQuNkwyOTQuMiAxMDQuNkwyOTYuNiAxMDQuNkwyOTkgMTA0LjZMMzAxLjUgMTA0LjZMMzAzLjkgMTA0LjZMMzA2LjMgMTA0LjZMMzA4LjcgMTA0LjZMMzExLjEgMTA0LjZMMzEzLjYgMTA0LjZMMzE2IDEwNC42TDMxOC40IDEwNC42TDMyMC44IDEwNC42TDMyMy4yIDEwNC42TDMyNS43IDEwNC42TDMyOC4xIDEwNC42TDMzMC41IDEwNC42TDMzMi45IDEwNC42TDMzNS4zIDEwNC42TDMzNy44IDEwNC42TDM0MC4yIDEwNC42TDM0Mi42IDEwNC42TDM0NSAxMDQuNkwzNDcuNCAxMDQuNkwzNDkuOSAxMDQuNkwzNTIuMyAxMDQuNkwzNTQuNyAxMDQuNkwzNTcuMSAxMDQuNkwzNTkuNSAxMDQuNkwzNjIgMTA0LjZMMzY0LjQgMTA0LjZMMzY2LjggMTA0LjZMMzY5LjIgMTA0LjZMMzcxLjYgMTA0LjZMMzc0LjEgMTA0LjZMMzc2LjUgMTA0LjZMMzc4LjkgMTA0LjZMMzgxLjMgMTA0LjZMMzgzLjcgMTA0LjZMMzg2LjIgMTA0LjZMMzg4LjYgMTA0LjZMMzkxIDEwNC42TDM5My40IDEwNC42TDM5NS44IDEwNC42TDM5OC4zIDEwNC42TDQwMC43IDEwNC42TDQwMy4xIDEwNC42TDQwNS41IDEwNC42TDQwNy45IDEwNC42TDQxMC40IDEwNC42TDQxMi44IDEwNC42TDQxNS4yIDEwNC42TDQxNy42IDEwNC42TDQyMCAxMDQuNkw0MjIuNSAxMDQuNkw0MjQuOSAxMDQuNkw0MjcuMyAxMDQuNkw0MjkuNyAxMDQuNkw0MzIuMSAxMDQuNkw0MzQuNiAxMDQuNkw0MzcgMTA0LjZMNDM5LjQgMTA0LjZMNDQxLjggMTA0LjZMNDQ0LjIgMTA0LjZMNDQ2LjcgMTA0LjZMNDQ5LjEgMTA0LjZMNDUxLjUgMTA0LjZMNDUzLjkgMTA0LjZMNDU2LjMgMTA0LjZMNDU4LjggMTA0LjZMNDYxLjIgMTA0LjZMNDYzLjYgMTA0LjZMNDY2IDEwNC42TDQ2OC40IDEwNC42TDQ3MC45IDEwNC42TDQ3My4zIDEwNC42TDQ3NS43IDEwNC42TDQ3OC4xIDEwNC42TDQ4MC41IDEwNC42TDQ4MyAxMDQuNkw0ODUuNCAxMDQuNkw0ODcuOCAxMDQuNkw0OTAuMiAxMDQuNkw0OTIuNiAxMDQuNkw0OTUuMSAxMDQuNkw0OTcuNSAxMDQuNkw0OTkuOSAxMDQuNkw1MDIuMyAxMDQuNkw1MDQuNyAxMDQuNkw1MDcuMiAxMDQuNkw1MDkuNiAxMDQuNkw1MTIgMTA0LjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjcgNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjx0ZXh0IHg9IjQ2My4yIiB5PSI5NS4wNyIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+eSA9IDEsMDQ8dHNwYW4gZm9udC1zaXplPSIxMC44IiBkeT0iLTYuMyI+eDwvdHNwYW4+PHRzcGFuIGR5PSI2LjMiPuKAizwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjEwNy4yIiB5PSI5Ni42NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+eSA9IDI8L3RleHQ+PGNpcmNsZSBjeD0iMzY1LjQ0IiBjeT0iMTA0LjY1IiByPSI0IiBmaWxsPSIjYzAyYTJhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjM1My40NCIgeT0iOTQuNjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPngg4omIIDE3LDc8L3RleHQ+PGNpcmNsZSBjeD0iMzUzLjYiIGN5PSIxMDkuMDgiIHI9IjMiIGZpbGw9IiM1YjZiN2EiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwIi8+PGNpcmNsZSBjeD0iMzcxLjIiIGN5PSIxMDIuNDUiIHI9IjMiIGZpbGw9IiM1YjZiN2EiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9zdmc+)
*Un capital placé à 4 % est multiplié par 1,04ˣ au bout de x années : il double quand 1,04ˣ = 2, soit x = log 2 ÷ log 1,04 ≈ 17,7, donc au cours de la 18e année.*
<!-- /schema -->

> **Exemple.** Un capital est placé à $4\,\%$ par an : il est multiplié par
> $1{,}04^x$ au bout de $x$ années. Il a doublé lorsque
> $$1{,}04^x = 2 \iff x = \frac{\log 2}{\log 1{,}04} \approx \frac{0{,}30103}{0{,}01703} \approx 17{,}7.$$
> Le capital double donc **au cours de la 18ᵉ année** : au bout de $17$ ans il
> n'a pas encore doublé ($1{,}04^{17} \approx 1{,}948$), au bout de $18$ ans
> oui ($1{,}04^{18} \approx 2{,}026$). En années entières, on **arrondit au
> supérieur** : réponse, $18$ ans.

> **Exemple (base plus petite que 1).** Une machine perd $15\,\%$ par an :
> valeur multipliée par $0{,}85^x$. Elle vaut la moitié de son prix quand
> $$0{,}85^x = 0{,}5 \iff x = \frac{\log 0{,}5}{\log 0{,}85} \approx \frac{-0{,}301}{-0{,}0706} \approx 4{,}27.$$
> Les deux logs sont **négatifs** (bases et membres $< 1$) : le quotient est
> positif, tout va bien. La valeur passe sous la moitié au cours de la 5ᵉ année.

⚠️ Si $b \leqslant 0$, l'équation $a^x = b$ n'a **pas de solution** : une
exponentielle est toujours strictement positive. Réponds-le explicitement,
c'est un point facile.

---

## 5. Transformer des expressions (capacité attendue)

L'autre capacité du programme : réécrire une expression avec les propriétés
algébriques, dans les deux sens.

**Développer** (faire apparaître des logs simples) :

> **Exemple.** $\log(4 \times 10^5) = \log 4 + \log(10^5) = \log(2^2) + 5 = 2\log 2 + 5 \approx 5{,}602$.

> **Exemple.** Exprimer $\log 12$ avec $\log 2$ et $\log 3$ :
> $\log 12 = \log(4 \times 3) = \log(2^2) + \log 3 = 2\log 2 + \log 3 \approx 1{,}079$.

**Regrouper** (rassembler en un seul log) :

> **Exemple.** $\log 50 + \log 2 = \log(50 \times 2) = \log 100 = 2$. Sans
> calculatrice, et le résultat est exact.

> **Exemple.** $3\log 2 - \log 4 = \log(2^3) - \log 4 = \log\dfrac{8}{4} = \log 2$.

**Le réflexe** : un produit ou une puissance **dans** le log peut sortir en
somme ou en multiple ; une somme de logs peut rentrer en produit. Mais une
somme **dans** le log, elle, ne se simplifie pas : $\log(a+b)$ ne s'écrit pas
avec $\log a$ et $\log b$.

---

## 6. Le log dans les autres disciplines : pH, décibels, magnitude

Le log est partout où une grandeur varie sur plusieurs puissances de 10. Ces
formules te sont **données** dans les énoncés, mais tu dois savoir les
manipuler avec les propriétés du chapitre.

| Contexte | Formule | Ce que dit le log |
|---|---|---|
| Chimie (ST2S, STL) | $\text{pH} = -\log[\mathrm{H_3O^+}]$ | concentration $\times 10$ $\Rightarrow$ pH $-1$ |
| Acoustique (STI2D) | $L = 10\log\dfrac{I}{I_0}$ (en dB) | intensité $\times 10$ $\Rightarrow$ $+10$ dB ; $\times 2$ $\Rightarrow$ $+3$ dB |
| Séismes | $M = \log\dfrac{A}{A_0}$ (magnitude) | $+1$ en magnitude $=$ amplitude $\times 10$ |
| Finance (STMG) | $a^x = 2$ | doublement au bout de $x = \dfrac{\log 2}{\log a}$ |

> **Exemple (pH).** Une solution a une concentration
> $[\mathrm{H_3O^+}] = 2 \times 10^{-4}$ mol/L. Son pH :
> $$\text{pH} = -\log(2 \times 10^{-4}) = -(\log 2 - 4) = 4 - \log 2 \approx 3{,}7.$$

> **Exemple (décibels).** Si l'intensité sonore double,
> $L' = 10\log\dfrac{2I}{I_0} = 10\log 2 + 10\log\dfrac{I}{I_0} \approx L + 3$ :
> **doubler le son n'ajoute que $3$ dB**. C'est la propriété
> $\log(ab) = \log a + \log b$ en action.

---

## 7. Tableau récapitulatif

| À savoir | Formule / résultat |
|---|---|
| Définition | $\log b$ = unique solution de $10^x = b$, pour $b > 0$ |
| Traduction | $10^{\log b} = b$ ; $\log(10^n) = n$ |
| Valeurs clés | $\log 1 = 0$ ; $\log 10 = 1$ ; $\log 100 = 2$ ; $\log 0{,}1 = -1$ |
| Existence | $\log b$ n'existe que pour $b > 0$ |
| Variations | strictement croissante sur $]0\ ;+\infty[$ |
| Signe | $\log b < 0$ si $0 < b < 1$ ; $\log b > 0$ si $b > 1$ |
| Produit | $\log(ab) = \log a + \log b$ |
| Puissance | $\log(a^n) = n\log a$ |
| Conséquences | $\log\frac{1}{a} = -\log a$ ; $\log\frac{a}{b} = \log a - \log b$ ; $\log\sqrt{a} = \frac{1}{2}\log a$ |
| Équation $a^x = b$ | $x = \dfrac{\log b}{\log a}$ (pour $a, b > 0$, $a \neq 1$) |
| Doublement | $a^x = 2 \iff x = \dfrac{\log 2}{\log a}$, puis arrondir à l'année **supérieure** |

---

## 8. Les erreurs qui coûtent des points

1. **Écrire $\log(a+b) = \log a + \log b$.** Le log transforme les
   **produits** en sommes, pas les sommes : $\log(ab) = \log a + \log b$.
   Vérifie : $\log(10 + 10) = \log 20 \approx 1{,}3$ alors que
   $\log 10 + \log 10 = 2$.
2. **Confondre $\dfrac{\log b}{\log a}$ et $\log\dfrac{b}{a}$.** La solution de
   $a^x = b$ est le **quotient des logs**, pas le log du quotient :
   $\dfrac{\log 2}{\log 1{,}04} \approx 17{,}7$ mais
   $\log\dfrac{2}{1{,}04} \approx 0{,}28$. Rien à voir.
3. **Prendre le log d'un nombre négatif ou nul.** $\log(-5)$ et $\log 0$
   n'existent pas ; l'équation $10^x = -5$ n'a pas de solution. Avant tout
   calcul, vérifie que ce qui est dans le log est $> 0$.
4. **Confondre $\log 1 = 0$ et $\log 10 = 1$.** Le log répond à « 10 puissance
   combien ? » : $10^0 = 1$ et $10^1 = 10$. Croire que $\log 1 = 1$ fait
   dérailler toutes les transformations d'expressions.
5. **Arrondir le doublement à l'année inférieure.** $x \approx 17{,}7$ ans :
   au bout de $17$ ans le capital n'a **pas encore** doublé. La réponse à « au
   bout de combien d'années entières ? » est $18$, l'arrondi **supérieur**.
6. **Croire que $\log b$ est négatif dès que « b est petit ».** Le seuil est
   $1$, pas $0$ : $\log(0{,}5) < 0$ mais $\log 5 > 0$. Et pour une base
   $0 < a < 1$, $\log a < 0$ : dans $\dfrac{\log b}{\log a}$, surveille les
   signes des deux logs.
