---
id: 1es-math-information-chiffree
titre: "Analyse de l'information chiffrée"
voie: generale
niveau: premiere
parcours: maths-enseignement-scientifique
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques intégrées à l'enseignement scientifique"
duree_lecture_min: 13
prerequis:
  - Pourcentages et proportions (Seconde)
  - Fonctions affines (Seconde)
statut: brouillon
relu_par: null
---

# Analyse de l'information chiffrée

> Ce chapitre a un objectif que le programme énonce explicitement : **développer
> l'esprit critique**. Un pourcentage mal lu dans un article, une hausse annoncée
> qui n'en est pas une, un graphique tronqué — savoir le repérer est une compétence
> citoyenne autant que mathématique.

---

## 1. Proportion et pourcentage

Une **proportion** est un quotient : partie / total. Exprimée en pourcentage, on la
multiplie par 100.

$$p = \frac{\text{effectif de la partie}}{\text{effectif total}}$$

> ⚠️ **Un pourcentage n'a de sens que rapporté à sa base.** « 30 % » ne veut rien
> dire seul : 30 % de quoi ? C'est la première question à poser devant un chiffre.

---

## 2. Évolution : taux et coefficient multiplicateur

### Taux d'évolution

$$\boxed{t = \frac{V_{\text{finale}} - V_{\text{initiale}}}{V_{\text{initiale}}}}$$

Exprimé en pourcentage en multipliant par 100.

### Coefficient multiplicateur

$$\boxed{\mathrm{CM} = 1 + \frac{t}{100}}$$

| Évolution | Coefficient |
|---|---|
| $+20\,\%$ | $1{,}20$ |
| $-20\,\%$ | $0{,}80$ |
| $+100\,\%$ | $2$ |
| $-50\,\%$ | $0{,}5$ |

> ⚠️ Une **baisse** de $20\,\%$ donne un coefficient de $0{,}80$ — **jamais** $-0{,}20$.
> Multiplier par $0{,}8$, c'est bien retirer un cinquième.

---

## 3. Évolutions successives — le piège central du chapitre

<!-- schema:evolutions-successives -->
![Une hausse de 50 % puis une baisse de 50 % : on multiplie les coefficients, 1,5 × 0,5 = 0,75. Le prix final vaut 75 % du prix de départ, soit une baisse de 25 %.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iNzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNTIiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNzUiIHk9IjEwMS45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTAwIOKCrDwvdGV4dD48cmVjdCB4PSIyMjUiIHk9IjcwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjUyIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI4MCIgeT0iMTAxLjk1IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xNTAg4oKsPC90ZXh0PjxyZWN0IHg9IjQzMCIgeT0iNzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNTIiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDg1IiB5PSIxMDEuOTUiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjc1IOKCrDwvdGV4dD48bGluZSB4MT0iMTM2IiB5MT0iOTYiIHgyPSIyMDkiIHkyPSI5NiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjE5LDk2IDIwOSw5MSAyMDksMTAxIiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMTc3LjUiIHk9Ijg2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7DlyAxLDU8L3RleHQ+PHRleHQgeD0iMTc3LjUiIHk9IjExOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+KzUwICU8L3RleHQ+PGxpbmUgeDE9IjM0MSIgeTE9Ijk2IiB4Mj0iNDE0IiB5Mj0iOTYiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQyNCw5NiA0MTQsOTEgNDE0LDEwMSIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjM4Mi41IiB5PSI4NiIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+w5cgMCw1PC90ZXh0Pjx0ZXh0IHg9IjM4Mi41IiB5PSIxMTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjUwICU8L3RleHQ+PHBhdGggZD0iTSA3NSAxMjYgUSAyODAgMjAwIDQ4NSAxMjYiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iNDcwIiB5MT0iMTMzIiB4Mj0iNDc2Ljg0IiB5Mj0iMTI5LjgxIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0ODUsMTI2IDQ3NC45NCwxMjUuNzMgNDc4Ljc1LDEzMy44OCIgZmlsbD0iIzdhM2ZiMCIvPjx0ZXh0IHg9IjI4MCIgeT0iMTg2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5nbG9iYWwgOiDDlyAwLDc1LCBzb2l0IOKIkjI1ICUgKGV0IG5vbiAwICUpPC90ZXh0Pjx0ZXh0IHg9IjI4MCIgeT0iMzYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlBvdXIgdW4gcHJpeCBkZSBkw6lwYXJ0IGRlIDEwMCDigqw8L3RleHQ+PC9zdmc+)
*Une hausse de 50 % puis une baisse de 50 % : on multiplie les coefficients, 1,5 × 0,5 = 0,75. Le prix final vaut 75 % du prix de départ, soit une baisse de 25 %.*
<!-- /schema -->

Pour enchaîner deux évolutions, on **multiplie les coefficients** :

$$\mathrm{CM}_{\text{global}} = \mathrm{CM}_1 \times \mathrm{CM}_2$$

> ⚠️ **On n'additionne JAMAIS les taux.**

> **L'exemple qui démonte l'intuition.** Un prix augmente de $50\,\%$, puis baisse
> de $50\,\%$.
>
> $\mathrm{CM} = 1{,}5 \times 0{,}5 = 0{,}75$
>
> Le prix final vaut $75\,\%$ du prix de départ : on a **perdu $25\,\%$**, alors que
> l'addition naïve $+50 - 50$ donnerait $0\,\%$.
>
> *Pourquoi* : la hausse s'applique au prix initial, la baisse au prix déjà augmenté.
> Les deux pourcentages ne portent pas sur la même base.

---

## 4. Évolution réciproque

<!-- schema:evolution-reciproque -->
![Après une baisse de 20 % (× 0,8), il faut multiplier par 1 ÷ 0,8 = 1,25, c’est-à-dire augmenter de 25 %, pour revenir au prix initial.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMTUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iMzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNTIiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNzUiIHk9IjYxLjk1IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMDAg4oKsPC90ZXh0PjxyZWN0IHg9IjIyNSIgeT0iMzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNTIiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjgwIiB5PSI2MS45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+ODAg4oKsPC90ZXh0PjxyZWN0IHg9IjQzMCIgeT0iMzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNTIiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDg1IiB5PSI2MS45NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTAwIOKCrDwvdGV4dD48bGluZSB4MT0iMTM2IiB5MT0iNTYiIHgyPSIyMDkiIHkyPSI1NiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjE5LDU2IDIwOSw1MSAyMDksNjEiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSIxNzcuNSIgeT0iNDYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPsOXIDAsODwvdGV4dD48dGV4dCB4PSIxNzcuNSIgeT0iNzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjIwICU8L3RleHQ+PGxpbmUgeDE9IjM0MSIgeTE9IjU2IiB4Mj0iNDE0IiB5Mj0iNTYiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQyNCw1NiA0MTQsNTEgNDE0LDYxIiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMzgyLjUiIHk9IjQ2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7DlyAxLDI1PC90ZXh0Pjx0ZXh0IHg9IjM4Mi41IiB5PSI3OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+KzI1ICU8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIxMjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjEsMjUgPSAxIMO3IDAsOCA6IHBvdXIgcmV2ZW5pciBhdSBwcml4IGluaXRpYWwsIGlsIGZhdXQgKzI1ICU8L3RleHQ+PC9zdmc+)
*Après une baisse de 20 % (× 0,8), il faut multiplier par 1 ÷ 0,8 = 1,25, c’est-à-dire augmenter de 25 %, pour revenir au prix initial.*
<!-- /schema -->

Pour **annuler** une évolution, on applique le coefficient **inverse** :

$$\mathrm{CM}_{\text{réciproque}} = \frac{1}{\mathrm{CM}}$$

> **Exemple.** Un prix a baissé de $20\,\%$ ($\mathrm{CM} = 0{,}8$). Pour revenir au
> prix initial, il faut le multiplier par $\dfrac{1}{0{,}8} = 1{,}25$, soit une hausse
> de **$25\,\%$** — et non de $20\,\%$.

---

## 5. Évolution moyenne

Si une grandeur subit $n$ évolutions successives de coefficient global $\mathrm{CM}$,
le **coefficient moyen** est

$$\mathrm{CM}_{\text{moyen}} = \sqrt[n]{\mathrm{CM}} = \mathrm{CM}^{1/n}$$

> **Exemple.** Une population augmente de $30\,\%$ en $3$ ans. Le taux annuel moyen
> vérifie $\mathrm{CM}^3 = 1{,}3$, donc $\mathrm{CM} = 1{,}3^{1/3} \approx 1{,}0914$ :
> environ $+9{,}14\,\%$ par an, et non $10\,\%$.

---

## 6. Points de pourcentage

Quand on compare deux pourcentages, il faut distinguer deux façons de dire l'écart.

> **Exemple.** Un taux de chômage passe de $8\,\%$ à $10\,\%$.
>
> - Il a augmenté de **2 points de pourcentage** (différence)
> - Il a augmenté de **25 %** (évolution relative : $\frac{10-8}{8} = 0{,}25$)
>
> Les deux affirmations sont vraies et décrivent la même chose. Confondre les deux
> — ou choisir celle qui arrange — est une manipulation classique de l'information.

---

## 7. Lire un graphique d'un œil critique

<!-- schema:axe-tronque -->
![Les mêmes données, 50 puis 52 : avec un axe qui part de 0, la hausse paraît modeste ; avec un axe tronqué, elle semble énorme, alors qu’elle n’est que de 4 %.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48c3ZnIHg9IjAiIHk9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDQiIHkxPSIyNjgiIHgyPSIyOTAiIHkyPSIyNjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iMjcyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjIzMCIgeDI9IjI5MCIgeTI9IjIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIyMzQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjEwPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjE5MiIgeDI9IjI5MCIgeTI9IjE5MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIxOTYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjIwPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjE1NCIgeDI9IjI5MCIgeTI9IjE1NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIxNTgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjMwPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjExNiIgeDI9IjI5MCIgeTI9IjExNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQwPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9Ijc4IiB4Mj0iMjkwIiB5Mj0iNzgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iODIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjUwPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjQwIiB4Mj0iMjkwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iNDQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjYwPC90ZXh0PjxyZWN0IHg9IjY4LjYiIHk9Ijc4IiB3aWR0aD0iNzMuOCIgaGVpZ2h0PSIxOTAiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC44Ii8+PHRleHQgeD0iMTA1LjUiIHk9IjI4NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QW5uw6llIDE8L3RleHQ+PHJlY3QgeD0iMTkxLjYiIHk9IjcwLjQiIHdpZHRoPSI3My44IiBoZWlnaHQ9IjE5Ny42IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuOCIvPjx0ZXh0IHg9IjIyOC41IiB5PSIyODYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFubsOpZSAyPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjI2OCIgeDI9IjI5MCIgeTI9IjI2OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ0IiB5MT0iMjY4IiB4Mj0iNDQiIHkyPSIzMiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTUwIiB5PSIyMiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QXhlIHBhcnRhbnQgZGUgMDwvdGV4dD48L3N2Zz48c3ZnIHg9IjMyMCIgeT0iMCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLFNlZ29lIFVJLFJvYm90byxzYW5zLXNlcmlmIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2ZmZmZmZiIvPjxsaW5lIHgxPSI0NCIgeTE9IjI2OCIgeDI9IjI5MCIgeTI9IjI2OCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQ5PC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjIzNS40MyIgeDI9IjI5MCIgeTI9IjIzNS40MyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIyMzkuNDMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQ5LDU8L3RleHQ+PGxpbmUgeDE9IjQ0IiB5MT0iMjAyLjg2IiB4Mj0iMjkwIiB5Mj0iMjAyLjg2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzgiIHk9IjIwNi44NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NTA8L3RleHQ+PGxpbmUgeDE9IjQ0IiB5MT0iMTcwLjI5IiB4Mj0iMjkwIiB5Mj0iMTcwLjI5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzgiIHk9IjE3NC4yOSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NTAsNTwvdGV4dD48bGluZSB4MT0iNDQiIHkxPSIxMzcuNzEiIHgyPSIyOTAiIHkyPSIxMzcuNzEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iMTQxLjcxIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj41MTwvdGV4dD48bGluZSB4MT0iNDQiIHkxPSIxMDUuMTQiIHgyPSIyOTAiIHkyPSIxMDUuMTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iMTA5LjE0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj41MSw1PC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjcyLjU3IiB4Mj0iMjkwIiB5Mj0iNzIuNTciIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iNzYuNTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjUyPC90ZXh0PjxsaW5lIHgxPSI0NCIgeTE9IjQwIiB4Mj0iMjkwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iNDQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjUyLDU8L3RleHQ+PHJlY3QgeD0iNjguNiIgeT0iMjAyLjg2IiB3aWR0aD0iNzMuOCIgaGVpZ2h0PSI2NS4xNCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjgiLz48dGV4dCB4PSIxMDUuNSIgeT0iMjg2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bbm7DqWUgMTwvdGV4dD48cmVjdCB4PSIxOTEuNiIgeT0iNzIuNTciIHdpZHRoPSI3My44IiBoZWlnaHQ9IjE5NS40MyIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjgiLz48dGV4dCB4PSIyMjguNSIgeT0iMjg2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Bbm7DqWUgMjwvdGV4dD48bGluZSB4MT0iNDQiIHkxPSIyNjgiIHgyPSIyOTAiIHkyPSIyNjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NCIgeTE9IjI2OCIgeDI9IjQ0IiB5Mj0iMzIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE1MCIgeT0iMjIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkF4ZSB0cm9ucXXDqSAow6AgcGFydGlyIGRlIDQ5KTwvdGV4dD48L3N2Zz48L3N2Zz4=)
*Les mêmes données, 50 puis 52 : avec un axe qui part de 0, la hausse paraît modeste ; avec un axe tronqué, elle semble énorme, alors qu’elle n’est que de 4 %.*
<!-- /schema -->

| À vérifier | Pourquoi |
|---|---|
| L'axe des ordonnées part-il de zéro ? | Un axe tronqué exagère visuellement les écarts |
| L'échelle est-elle régulière ? | Une échelle qui change fausse la pente perçue |
| Quelle est la base des pourcentages ? | Sans base, un pourcentage n'informe pas |
| L'effectif total est-il indiqué ? | $50\,\%$ sur $4$ personnes n'est pas $50\,\%$ sur $4000$ |
| La source et la date ? | Une donnée sans provenance ne se vérifie pas |

---

## 8. À retenir absolument

| | |
|---|---|
| Taux d'évolution | $t = \dfrac{V_f - V_i}{V_i}$ |
| Coefficient multiplicateur | $\mathrm{CM} = 1 + \dfrac{t}{100}$ |
| Évolutions successives | on **multiplie** les coefficients |
| Évolution réciproque | coefficient **inverse** |
| Évolution moyenne | racine $n$-ième du coefficient global |
| Points de pourcentage | différence, à ne pas confondre avec l'évolution relative |

---

## 9. Les erreurs qui coûtent des points

1. **Additionner des taux d'évolution successifs.** $+50\,\%$ puis $-50\,\%$ ne donne
   pas $0\,\%$ mais $-25\,\%$.
2. **Traduire une baisse de $20\,\%$ par $-0{,}20$** au lieu de $0{,}80$.
3. **Croire que l'évolution réciproque a le même taux** : annuler $-20\,\%$ demande
   $+25\,\%$.
4. **Confondre points de pourcentage et pourcentage d'évolution.**
5. **Diviser le taux global par $n$** pour trouver le taux moyen : il faut la racine
   $n$-ième du coefficient.
6. **Comparer des pourcentages calculés sur des bases différentes.**
7. **Oublier de préciser la base** d'un pourcentage dans une conclusion rédigée.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, « Programme de mathématiques intégré
à l'enseignement scientifique en classe de première générale »
(docs/programme-prem_gen_non_spe-2026.pdf), partie « Analyse de l'information chiffrée ».

Le programme insiste explicitement sur le développement de l'ESPRIT CRITIQUE et sur
l'ancrage dans des problématiques d'actualité (développement durable, changement
climatique, biodiversité, économie, démographie, santé publique). La section 7 traduit
cette intention.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des « Automatismes » : le programme comporte une rubrique dédiée
  dont l'extraction est trop dégradée pour être exploitée. Vérifier quelles capacités
  de calcul mental sont explicitement exigibles.
- L'évolution moyenne (racine n-ième) est-elle au programme de ce parcours, ou
  réservée à la spécialité ? Je l'ai incluse car classique, à confirmer.
- Les indices (base 100) sont-ils exigibles ? Je ne les ai PAS traités.
- Le programme mentionne l'usage du TABLEUR : vérifier s'il est attendu ici ou
  seulement dans la partie statistique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
