---
id: 3e-math-proportionnalite
titre: "Proportionnalité : ratios, échelles et taux d'évolution"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Proportionnalité — reconnaître, coefficient, retour à l'unité, linéarité (5e)
  - Échelles et vitesse (5e)
  - Grandeurs quotients, rapports et ratios (4e)
  - Quatrième proportionnelle et produit en croix (4e)
  - Coefficient multiplicateur d'une augmentation ou d'une diminution (4e)
  - Théorème de Thalès dans les triangles emboités (4e)
statut: brouillon
relu_par: null
---

# Proportionnalité : ratios, échelles et taux d'évolution

> Jusqu'ici, on te donnait toujours le taux et tu appliquais. Cette année, on inverse
> la question : on te donne **deux valeurs**, et c'est à toi de dire de combien de
> pour cent on est passé de l'une à l'autre. C'est le vrai saut de la 3e — celui qui
> sert à lire un journal, une facture ou un résultat d'élection.

---

## 0. Ce que tu gardes de la 5e et de la 4e

Rien de tout cela n'est réexpliqué ici, mais tout est réutilisé :

- **5e** — reconnaître une situation proportionnelle *avant* de calculer, le
  coefficient de proportionnalité, le retour à l'unité, la linéarité, le produit en
  croix, la définition d'une échelle, la vitesse.
  → fiche `5e — Proportionnalité`
- **4e** — les grandeurs quotients et leurs unités « par », le rapport et le ratio,
  la quatrième proportionnelle, le calcul avec des pourcentages, le **coefficient
  multiplicateur** ($\times 1{,}07$ pour $+7\,\%$), le partage proportionnel.
  → fiche `4e — Proportionnalité`

Si un de ces mots ne te dit rien, relis la fiche concernée avant de continuer.

---

## 1. Partager selon un ratio

<!-- schema:ratio-3-4 -->
![Partage de 350 € selon le ratio 3 : 4 : 7 parts de 50 €, soit 150 € et 200 €.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMTUzIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxNTMiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMTAiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iMzQiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjEzOCIgeT0iNDQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjUwIOKCrDwvdGV4dD48cmVjdCB4PSIxNjYiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iMzQiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE5NCIgeT0iNDQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjUwIOKCrDwvdGV4dD48cmVjdCB4PSIyMjIiIHk9IjIyIiB3aWR0aD0iNTYiIGhlaWdodD0iMzQiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI1MCIgeT0iNDQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjUwIOKCrDwvdGV4dD48dGV4dCB4PSI5OCIgeT0iNDQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPjMgcGFydHM8L3RleHQ+PHRleHQgeD0iMjkwIiB5PSI0NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj4xNTAg4oKsPC90ZXh0PjxyZWN0IHg9IjExMCIgeT0iNzIiIHdpZHRoPSI1NiIgaGVpZ2h0PSIzNCIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTM4IiB5PSI5NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NTAg4oKsPC90ZXh0PjxyZWN0IHg9IjE2NiIgeT0iNzIiIHdpZHRoPSI1NiIgaGVpZ2h0PSIzNCIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTk0IiB5PSI5NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NTAg4oKsPC90ZXh0PjxyZWN0IHg9IjIyMiIgeT0iNzIiIHdpZHRoPSI1NiIgaGVpZ2h0PSIzNCIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjUwIiB5PSI5NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NTAg4oKsPC90ZXh0PjxyZWN0IHg9IjI3OCIgeT0iNzIiIHdpZHRoPSI1NiIgaGVpZ2h0PSIzNCIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzA2IiB5PSI5NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NTAg4oKsPC90ZXh0Pjx0ZXh0IHg9Ijk4IiB5PSI5NCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+NCBwYXJ0czwvdGV4dD48dGV4dCB4PSIzNDYiIHk9Ijk0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPjIwMCDigqw8L3RleHQ+PHBhdGggZD0iTSA0MTQgMjIgUSA0MjQgMjIgNDI0IDMyIEwgNDI0IDU0IFEgNDI0IDY0IDQzNCA2NCBRIDQyNCA2NCA0MjQgNzQgTCA0MjQgOTYgUSA0MjQgMTA2IDQxNCAxMDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI0NDIiIHk9IjUyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPjM1MCDigqw8L3RleHQ+PHRleHQgeD0iNDQyIiB5PSI2OS41IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPj0gNyBwYXJ0czwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjEzNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dW5lIHBhcnQgOiAzNTAgw7cgNyA9IDUwIOKCrDwvdGV4dD48L3N2Zz4=)
*Partage de 350 € selon le ratio 3 : 4 : 7 parts de 50 €, soit 150 € et 200 €.*
<!-- /schema -->

Tu sais déjà partager proportionnellement à des nombres. En 3e, l'énoncé te le
demande directement **sous forme de ratio**, et tu dois savoir le faire de tête.

> **Méthode.** Partager selon le ratio $a : b$ (ou $a : b : c$) :
> 1. **Additionne** les termes du ratio → le nombre total de parts.
> 2. **Divise** la quantité par ce total → la valeur d'**une** part.
> 3. **Multiplie** par le nombre de parts de chacun.
> 4. **Contrôle** : la somme doit retomber sur la quantité de départ.

> **Deux parts.** Partager $350$ € selon le ratio $3 : 4$.
> $3 + 4 = 7$ parts, donc $350 \div 7 = 50$ € la part.
> $3 \times 50 = 150$ € et $4 \times 50 = 200$ €. Contrôle : $150 + 200 = 350$ ✓

> **Trois parts.** Partager $2{,}4$ kg selon le ratio $1 : 2 : 3$.
> $1 + 2 + 3 = 6$ parts, donc $2400 \div 6 = 400$ g la part.
> $400$ g, $800$ g et $1\,200$ g. Contrôle : $400 + 800 + 1200 = 2400$ ✓

### Partager proportionnellement à une grandeur

Le programme demande le cas type : partager une somme entre deux personnes
**proportionnellement à leur âge**. Les âges jouent exactement le rôle du ratio.

> **Exemple.** Partager $750$ € entre une personne de $20$ ans et une de $30$ ans.
> $20 + 30 = 50$, donc $750 \div 50 = 15$ € par année d'âge.
> $20 \times 15 = 300$ € et $30 \times 15 = 450$ €. Contrôle : $300 + 450 = 750$ ✓

> ⚠️ **Ne divise jamais par un seul terme du ratio.** Ici $750 \div 20$ ne veut rien
> dire. Et la part de la plus jeune est $\dfrac{20}{50}$ du total, **pas**
> $\dfrac{20}{30}$ : $\dfrac{20}{30}$ compare les deux personnes entre elles.

---

## 2. Le pourcentage d'une quantité

$$\boxed{t\,\% \text{ de } N = \frac{t}{100} \times N}$$

Ce calcul doit sortir **sans hésiter**.

> **Exemple.** $18\,\%$ de $4\,500$ : $\dfrac{18}{100} \times 4500 = 810$.
>
> **De tête** : $10\,\%$ de $4500 = 450$, $1\,\%$ de $4500 = 45$.
> Donc $18\,\% = 450 + 8 \times 45 = 450 + 360 = 810$.

> ⚠️ **Un pourcentage se multiplie, il ne se divise pas.** $4500 \div 18$ n'a rien à
> voir avec $18\,\%$ de $4500$.

---

## 3. Échelles : de la carte au terrain

Une échelle est un **coefficient de proportionnalité** entre la carte et la réalité :

$$\text{échelle} = \frac{\text{distance sur la carte}}{\text{distance réelle}}
\qquad \text{(les deux dans la même unité)}$$

L'automatisme attendu en 3e est celui de la **carte routière** : passer d'une mesure
sur la carte à une distance entre deux villes.

> **La lecture qui évite toutes les erreurs.** Une échelle $\dfrac{1}{250\,000}$ se lit :
> *« $1$ cm sur la carte représente $250\,000$ cm en vrai »*, soit $2{,}5$ km.

> **Exemple — de la carte au terrain.** Deux villes sont à $7{,}2$ cm sur cette carte.
> $$7{,}2 \times 2{,}5 = 18\ \text{km}$$
> Ou en restant en centimètres : $7{,}2 \times 250\,000 = 1\,800\,000$ cm, et comme
> $1$ km $= 100\,000$ cm, cela fait $18$ km. ✓

> **Exemple — du terrain à la carte.** Deux villes distantes de $45$ km.
> $45$ km $= 4\,500\,000$ cm, donc $4\,500\,000 \div 250\,000 = 18$ cm sur la carte.

> ⚠️ **Le vrai piège est la conversion, pas la proportionnalité.**
> $1$ km $= 1\,000$ m $= 100\,000$ cm. Une division par $1\,000$ au lieu de
> $100\,000$ te donne un résultat $100$ fois trop grand — et personne ne va de Lyon à
> Dijon en parcourant $1\,800$ km.

---

## 4. Appliquer une augmentation ou une diminution

Le programme demande de savoir le faire **avec ou sans** coefficient multiplicateur.
Les deux chemins sont justes : choisis selon les nombres.

| Chemin | Comment | Quand le préférer |
|---|---|---|
| **Sans coefficient** | calculer la variation, puis l'ajouter ou la retrancher | taux « ronds » ($10\,\%$, $25\,\%$, $50\,\%$) |
| **Avec coefficient** | une seule multiplication par $1 \pm \dfrac{t}{100}$ | taux quelconques, ou calculs en chaîne |

> **Augmentation.** Un loyer de $720$ € augmente de $4\,\%$.
> *Sans* : $4\,\%$ de $720 = 28{,}80$ €, puis $720 + 28{,}80 = 748{,}80$ €.
> *Avec* : $720 \times 1{,}04 = 748{,}80$ € — **une seule opération**. ✓

> **Diminution.** Un article à $80$ € baisse de $12\,\%$.
> *Sans* : $12\,\%$ de $80 = 9{,}60$ €, puis $80 - 9{,}60 = 70{,}40$ €.
> *Avec* : $80 \times 0{,}88 = 70{,}40$ €. ✓

---

## 5. Traduire une évolution en pourcentages

**C'est l'objectif nouveau de l'année.** On ne te donne plus le taux : on te donne la
valeur de départ et la valeur d'arrivée, et tu dois retrouver le taux.

> **Définition.** Le **taux d'évolution** de $V_d$ (départ) à $V_a$ (arrivée), avec
> $V_d \neq 0$, est
> $$\boxed{t = \frac{V_a - V_d}{V_d} \times 100}$$
> Il est **positif** pour une hausse, **négatif** pour une baisse.

**Condition d'existence** : la valeur de départ doit être **non nulle**. On ne peut pas
dire de combien de pour cent on a augmenté à partir de zéro.

> **Hausse.** Un prix passe de $40$ € à $46$ €.
> $$\frac{46 - 40}{40} = \frac{6}{40} = 0{,}15 \quad\Longrightarrow\quad +15\,\%$$
> Vérification : $40 \times 1{,}15 = 46$ ✓

> **Baisse.** Une population passe de $1\,250$ à $1\,100$ habitants.
> $$\frac{1100 - 1250}{1250} = \frac{-150}{1250} = -0{,}12 \quad\Longrightarrow\quad -12\,\%$$
> Vérification : $1250 \times 0{,}88 = 1100$ ✓

### L'autre chemin : par le coefficient multiplicateur

$$\mathrm{CM} = \frac{V_a}{V_d} \qquad\text{puis}\qquad
\boxed{t = (\mathrm{CM} - 1) \times 100}$$

> **Même exemple.** $\dfrac{1100}{1250} = 0{,}88$, puis $(0{,}88 - 1) \times 100 = -12$.
> On retrouve $-12\,\%$. ✓

> ⚠️ **Le coefficient n'est pas le taux.** $0{,}88$ ne se lit pas « $-88\,\%$ » : c'est
> ce qui **reste**. Le taux, c'est ce qui **change**, donc $0{,}88 - 1 = -0{,}12$.

> ⚠️ **On divise toujours par la valeur de DÉPART.** De $40$ à $46$, écrire
> $\dfrac{6}{46} \approx 13\,\%$ est faux. Cette division-là répond à une autre
> question : *quelle part de l'arrivée la hausse représente-t-elle ?*

### Une évolution et son retour ne s'annoncent pas avec le même taux

De $40$ à $46$, c'est $+15\,\%$. Mais de $46$ à $40$, c'est
$\dfrac{40-46}{46} \approx -13{,}0\,\%$, **pas** $-15\,\%$.

C'est normal : les deux taux ne se calculent pas sur la même base.

---

## 6. Enchaîner deux évolutions, et revenir en arrière

<!-- schema:deux-evolutions -->
![Une hausse de 20 % suivie d’une baisse de 10 % : on multiplie les coefficients, 1,20 × 0,90 = 1,08, soit une hausse globale de 8 %.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMTc5IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxNzkiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNjIiIHk9IjQ3IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj7DqXRhcGUgcGFyIMOpdGFwZTwvdGV4dD48cmVjdCB4PSIxODAiIHk9IjIyIiB3aWR0aD0iODQiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjIyIiB5PSI0Ny42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMDAg4oKsPC90ZXh0PjxyZWN0IHg9IjM2OCIgeT0iMjIiIHdpZHRoPSI4NCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0MTAiIHk9IjQ3LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEyMCDigqw8L3RleHQ+PHJlY3QgeD0iNTU2IiB5PSIyMiIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjU5OCIgeT0iNDcuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTA4IOKCrDwvdGV4dD48bGluZSB4MT0iMjcwIiB5MT0iNDIiIHgyPSIzNTIiIHkyPSI0MiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNjIsNDIgMzUyLDM3IDM1Miw0NyIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjMxNiIgeT0iMzMiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPsOXIDEsMjA8L3RleHQ+PGxpbmUgeDE9IjQ1OCIgeTE9IjQyIiB4Mj0iNTQwIiB5Mj0iNDIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTUwLDQyIDU0MCwzNyA1NDAsNDciIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSI1MDQiIHk9IjMzIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7DlyAwLDkwPC90ZXh0Pjx0ZXh0IHg9IjE2MiIgeT0iMTEzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5lbiB1bmUgZm9pczwvdGV4dD48cmVjdCB4PSIxODAiIHk9Ijg4IiB3aWR0aD0iODQiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjIyIiB5PSIxMTMuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTAwIOKCrDwvdGV4dD48cmVjdCB4PSIzNjgiIHk9Ijg4IiB3aWR0aD0iODQiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDEwIiB5PSIxMTMuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTA4IOKCrDwvdGV4dD48bGluZSB4MT0iMjcwIiB5MT0iMTA4IiB4Mj0iMzUyIiB5Mj0iMTA4IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM2MiwxMDggMzUyLDEwMyAzNTIsMTEzIiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMzE2IiB5PSI5OSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+w5cgMSwwODwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjE2MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+KzIwICUgcHVpcyDiiJIxMCAlIDogw5cgMSwyMCDDlyAwLDkwID0gw5cgMSwwOCwgc29pdCArOCAlPC90ZXh0Pjwvc3ZnPg==)
*Une hausse de 20 % suivie d’une baisse de 10 % : on multiplie les coefficients, 1,20 × 0,90 = 1,08, soit une hausse globale de 8 %.*
<!-- /schema -->

Quand deux évolutions se suivent, **on multiplie les coefficients** — on n'additionne
jamais les taux. Puis on traduit le coefficient obtenu en pourcentage (§ 5).

> **Exemple.** Un prix augmente de $20\,\%$, puis baisse de $10\,\%$.
> $$1{,}20 \times 0{,}90 = 1{,}08 \quad\Longrightarrow\quad +8\,\% \text{ au total}$$
> Sur $100$ € : $100 \to 120 \to 108$. ✓ Ce n'est **pas** $+10\,\%$.

> **Revenir au point de départ.** Un abonnement baisse de $20\,\%$. De combien doit-il
> augmenter pour retrouver son prix initial ?
> Il faut un coefficient global égal à $1$ :
> $$0{,}80 \times \mathrm{CM} = 1 \quad\Longrightarrow\quad \mathrm{CM} = \frac{1}{0{,}80} = 1{,}25
> \quad\Longrightarrow\quad +25\,\%$$
> Une baisse de $20\,\%$ s'annule par une hausse de $25\,\%$, pas de $20\,\%$.

---

## 7. Le graphique et le théorème de Thalès

<!-- schema:thales-graphique -->
![Les points A(2 ; 5) et B(6 ; 15) sont alignés avec l’origine : les triangles OHA et OH′B sont emboîtés et Thalès donne 2/6 = 5/15.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzNjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTAiIHkxPSIzMjAiIHgyPSI1MCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEwMCIgeTE9IjMyMCIgeDI9IjEwMCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1MCIgeTE9IjMyMCIgeDI9IjE1MCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMCIgeTE9IjMyMCIgeDI9IjIwMCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI1MCIgeTE9IjMyMCIgeDI9IjI1MCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwMCIgeTE9IjMyMCIgeDI9IjMwMCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1MCIgeTE9IjMyMCIgeDI9IjM1MCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwMCIgeTE9IjMyMCIgeDI9IjQwMCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMzIwIiB4Mj0iNDAwIiB5Mj0iMzIwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMzAyLjk0IiB4Mj0iNDAwIiB5Mj0iMzAyLjk0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjg1Ljg4IiB4Mj0iNDAwIiB5Mj0iMjg1Ljg4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjY4LjgyIiB4Mj0iNDAwIiB5Mj0iMjY4LjgyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjUxLjc2IiB4Mj0iNDAwIiB5Mj0iMjUxLjc2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjM0LjcxIiB4Mj0iNDAwIiB5Mj0iMjM0LjcxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjE3LjY1IiB4Mj0iNDAwIiB5Mj0iMjE3LjY1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjAwLjU5IiB4Mj0iNDAwIiB5Mj0iMjAwLjU5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTgzLjUzIiB4Mj0iNDAwIiB5Mj0iMTgzLjUzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTY2LjQ3IiB4Mj0iNDAwIiB5Mj0iMTY2LjQ3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTQ5LjQxIiB4Mj0iNDAwIiB5Mj0iMTQ5LjQxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTMyLjM1IiB4Mj0iNDAwIiB5Mj0iMTMyLjM1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTE1LjI5IiB4Mj0iNDAwIiB5Mj0iMTE1LjI5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iOTguMjQiIHgyPSI0MDAiIHkyPSI5OC4yNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjgxLjE4IiB4Mj0iNDAwIiB5Mj0iODEuMTgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSI2NC4xMiIgeDI9IjQwMCIgeTI9IjY0LjEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iNDcuMDYiIHgyPSI0MDAiIHkyPSI0Ny4wNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjMwIiB4Mj0iNDAwIiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSIzMjAiIHgyPSI0MDciIHkyPSIzMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDE2LDMyMCA0MDcsMzE1LjUgNDA3LDMyNC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjUwIiB5MT0iMzIwIiB4Mj0iNTAiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MCwxNCA0NS41LDIzIDU0LjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iMTAwIiB5MT0iMzE2IiB4Mj0iMTAwIiB5Mj0iMzI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMDAiIHk9IjMzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48bGluZSB4MT0iMTUwIiB5MT0iMzE2IiB4Mj0iMTUwIiB5Mj0iMzI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNTAiIHk9IjMzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD48bGluZSB4MT0iMjAwIiB5MT0iMzE2IiB4Mj0iMjAwIiB5Mj0iMzI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMDAiIHk9IjMzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48bGluZSB4MT0iMjUwIiB5MT0iMzE2IiB4Mj0iMjUwIiB5Mj0iMzI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNTAiIHk9IjMzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDwvdGV4dD48bGluZSB4MT0iMzAwIiB5MT0iMzE2IiB4Mj0iMzAwIiB5Mj0iMzI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMDAiIHk9IjMzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD48bGluZSB4MT0iMzUwIiB5MT0iMzE2IiB4Mj0iMzUwIiB5Mj0iMzI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNTAiIHk9IjMzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjwvdGV4dD48bGluZSB4MT0iNDAwIiB5MT0iMzE2IiB4Mj0iNDAwIiB5Mj0iMzI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MDAiIHk9IjMzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NzwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIyMzQuNzEiIHgyPSI1NCIgeTI9IjIzNC43MSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDIiIHk9IjIzOC43MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NTwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIxNDkuNDEiIHgyPSI1NCIgeTI9IjE0OS40MSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDIiIHk9IjE1My40MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTA8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iNjQuMTIiIHgyPSI1NCIgeTI9IjY0LjEyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MiIgeT0iNjguMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjE1PC90ZXh0Pjx0ZXh0IHg9IjQyIiB5PSIzMzciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+PHRleHQgeD0iNDE0IiB5PSIzMTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+bWFzc2UgKGtnKTwvdGV4dD48dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zdHlsZT0iaXRhbGljIj5wcml4ICjigqwpPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNTAsMzIwIDM1MCwzMjAgMzUwLDY0LjEyIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUwLDMyMCAxNTAsMzIwIDE1MCwyMzQuNzEiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNTAgMzIwIEwgNTEuMzggMzE4LjgzIEwgNTIuNzUgMzE3LjY1IEwgNTQuMTMgMzE2LjQ4IEwgNTUuNSAzMTUuMzEgTCA1Ni44OCAzMTQuMTQgTCA1OC4yNSAzMTIuOTYgTCA1OS42MyAzMTEuNzkgTCA2MSAzMTAuNjIgTCA2Mi4zOCAzMDkuNDQgTCA2My43NSAzMDguMjcgTCA2NS4xMyAzMDcuMSBMIDY2LjUgMzA1LjkzIEwgNjcuODggMzA0Ljc1IEwgNjkuMjUgMzAzLjU4IEwgNzAuNjMgMzAyLjQxIEwgNzIgMzAxLjI0IEwgNzMuMzggMzAwLjA2IEwgNzQuNzUgMjk4Ljg5IEwgNzYuMTMgMjk3LjcyIEwgNzcuNSAyOTYuNTQgTCA3OC44OCAyOTUuMzcgTCA4MC4yNSAyOTQuMiBMIDgxLjYzIDI5My4wMyBMIDgzIDI5MS44NSBMIDg0LjM4IDI5MC42OCBMIDg1Ljc1IDI4OS41MSBMIDg3LjEzIDI4OC4zMyBMIDg4LjUgMjg3LjE2IEwgODkuODggMjg1Ljk5IEwgOTEuMjUgMjg0LjgyIEwgOTIuNjMgMjgzLjY0IEwgOTQgMjgyLjQ3IEwgOTUuMzggMjgxLjMgTCA5Ni43NSAyODAuMTMgTCA5OC4xMyAyNzguOTUgTCA5OS41IDI3Ny43OCBMIDEwMC44NyAyNzYuNjEgTCAxMDIuMjUgMjc1LjQzIEwgMTAzLjYzIDI3NC4yNiBMIDEwNSAyNzMuMDkgTCAxMDYuMzggMjcxLjkyIEwgMTA3Ljc1IDI3MC43NCBMIDEwOS4xMyAyNjkuNTcgTCAxMTAuNSAyNjguNCBMIDExMS44OCAyNjcuMjIgTCAxMTMuMjUgMjY2LjA1IEwgMTE0LjYzIDI2NC44OCBMIDExNiAyNjMuNzEgTCAxMTcuMzcgMjYyLjUzIEwgMTE4Ljc1IDI2MS4zNiBMIDEyMC4xMyAyNjAuMTkgTCAxMjEuNSAyNTkuMDEgTCAxMjIuODcgMjU3Ljg0IEwgMTI0LjI1IDI1Ni42NyBMIDEyNS42MyAyNTUuNSBMIDEyNyAyNTQuMzIgTCAxMjguMzggMjUzLjE1IEwgMTI5Ljc1IDI1MS45OCBMIDEzMS4xMyAyNTAuODEgTCAxMzIuNSAyNDkuNjMgTCAxMzMuODggMjQ4LjQ2IEwgMTM1LjI1IDI0Ny4yOSBMIDEzNi42MyAyNDYuMTEgTCAxMzggMjQ0Ljk0IEwgMTM5LjM4IDI0My43NyBMIDE0MC43NSAyNDIuNiBMIDE0Mi4xMyAyNDEuNDIgTCAxNDMuNSAyNDAuMjUgTCAxNDQuODggMjM5LjA4IEwgMTQ2LjI1IDIzNy45IEwgMTQ3LjYzIDIzNi43MyBMIDE0OSAyMzUuNTYgTCAxNTAuMzggMjM0LjM5IEwgMTUxLjc1IDIzMy4yMSBMIDE1My4xMyAyMzIuMDQgTCAxNTQuNSAyMzAuODcgTCAxNTUuODggMjI5LjY5IEwgMTU3LjI1IDIyOC41MiBMIDE1OC42MyAyMjcuMzUgTCAxNjAgMjI2LjE4IEwgMTYxLjM4IDIyNSBMIDE2Mi43NSAyMjMuODMgTCAxNjQuMTMgMjIyLjY2IEwgMTY1LjUgMjIxLjQ5IEwgMTY2Ljg4IDIyMC4zMSBMIDE2OC4yNSAyMTkuMTQgTCAxNjkuNjMgMjE3Ljk3IEwgMTcxIDIxNi43OSBMIDE3Mi4zOCAyMTUuNjIgTCAxNzMuNzUgMjE0LjQ1IEwgMTc1LjEzIDIxMy4yOCBMIDE3Ni41IDIxMi4xIEwgMTc3Ljg4IDIxMC45MyBMIDE3OS4yNSAyMDkuNzYgTCAxODAuNjIgMjA4LjU4IEwgMTgyIDIwNy40MSBMIDE4My4zNyAyMDYuMjQgTCAxODQuNzUgMjA1LjA3IEwgMTg2LjEzIDIwMy44OSBMIDE4Ny41IDIwMi43MiBMIDE4OC44NyAyMDEuNTUgTCAxOTAuMjUgMjAwLjM4IEwgMTkxLjYzIDE5OS4yIEwgMTkzIDE5OC4wMyBMIDE5NC4zOCAxOTYuODYgTCAxOTUuNzUgMTk1LjY4IEwgMTk3LjEzIDE5NC41MSBMIDE5OC41IDE5My4zNCBMIDE5OS44OCAxOTIuMTcgTCAyMDEuMjUgMTkwLjk5IEwgMjAyLjYzIDE4OS44MiBMIDIwNCAxODguNjUgTCAyMDUuMzggMTg3LjQ3IEwgMjA2Ljc1IDE4Ni4zIEwgMjA4LjEzIDE4NS4xMyBMIDIwOS41IDE4My45NiBMIDIxMC44OCAxODIuNzggTCAyMTIuMjUgMTgxLjYxIEwgMjEzLjYzIDE4MC40NCBMIDIxNSAxNzkuMjYgTCAyMTYuMzcgMTc4LjA5IEwgMjE3Ljc1IDE3Ni45MiBMIDIxOS4xMyAxNzUuNzUgTCAyMjAuNSAxNzQuNTcgTCAyMjEuODggMTczLjQgTCAyMjMuMjUgMTcyLjIzIEwgMjI0LjYzIDE3MS4wNiBMIDIyNiAxNjkuODggTCAyMjcuMzggMTY4LjcxIEwgMjI4Ljc1IDE2Ny41NCBMIDIzMC4xMiAxNjYuMzYgTCAyMzEuNSAxNjUuMTkgTCAyMzIuODggMTY0LjAyIEwgMjM0LjI1IDE2Mi44NSBMIDIzNS42MyAxNjEuNjcgTCAyMzcgMTYwLjUgTCAyMzguMzcgMTU5LjMzIEwgMjM5Ljc1IDE1OC4xNSBMIDI0MS4xMyAxNTYuOTggTCAyNDIuNSAxNTUuODEgTCAyNDMuODcgMTU0LjY0IEwgMjQ1LjI1IDE1My40NiBMIDI0Ni42MiAxNTIuMjkgTCAyNDggMTUxLjEyIEwgMjQ5LjM4IDE0OS45NCBMIDI1MC43NSAxNDguNzcgTCAyNTIuMTIgMTQ3LjYgTCAyNTMuNSAxNDYuNDMgTCAyNTQuODggMTQ1LjI1IEwgMjU2LjI1IDE0NC4wOCBMIDI1Ny42MyAxNDIuOTEgTCAyNTkgMTQxLjc0IEwgMjYwLjM4IDE0MC41NiBMIDI2MS43NSAxMzkuMzkgTCAyNjMuMTMgMTM4LjIyIEwgMjY0LjUgMTM3LjA0IEwgMjY1Ljg4IDEzNS44NyBMIDI2Ny4yNSAxMzQuNyBMIDI2OC42MyAxMzMuNTMgTCAyNzAgMTMyLjM1IEwgMjcxLjM4IDEzMS4xOCBMIDI3Mi43NSAxMzAuMDEgTCAyNzQuMTMgMTI4LjgzIEwgMjc1LjUgMTI3LjY2IEwgMjc2Ljg4IDEyNi40OSBMIDI3OC4yNSAxMjUuMzIgTCAyNzkuNjMgMTI0LjE0IEwgMjgxIDEyMi45NyBMIDI4Mi4zOCAxMjEuOCBMIDI4My43NSAxMjAuNjMgTCAyODUuMTMgMTE5LjQ1IEwgMjg2LjUgMTE4LjI4IEwgMjg3Ljg4IDExNy4xMSBMIDI4OS4yNSAxMTUuOTMgTCAyOTAuNjMgMTE0Ljc2IEwgMjkyIDExMy41OSBMIDI5My4zOCAxMTIuNDIgTCAyOTQuNzUgMTExLjI0IEwgMjk2LjEzIDExMC4wNyBMIDI5Ny41IDEwOC45IEwgMjk4Ljg4IDEwNy43MiBMIDMwMC4yNSAxMDYuNTUgTCAzMDEuNjMgMTA1LjM4IEwgMzAzIDEwNC4yMSBMIDMwNC4zOCAxMDMuMDMgTCAzMDUuNzUgMTAxLjg2IEwgMzA3LjEzIDEwMC42OSBMIDMwOC41IDk5LjUxIEwgMzA5Ljg4IDk4LjM0IEwgMzExLjI1IDk3LjE3IEwgMzEyLjYzIDk2IEwgMzE0IDk0LjgyIEwgMzE1LjM4IDkzLjY1IEwgMzE2Ljc1IDkyLjQ4IEwgMzE4LjEzIDkxLjMxIEwgMzE5LjUgOTAuMTMgTCAzMjAuODggODguOTYgTCAzMjIuMjUgODcuNzkgTCAzMjMuNjIgODYuNjEgTCAzMjUgODUuNDQgTCAzMjYuMzggODQuMjcgTCAzMjcuNzUgODMuMSBMIDMyOS4xMyA4MS45MiBMIDMzMC41IDgwLjc1IEwgMzMxLjg4IDc5LjU4IEwgMzMzLjI1IDc4LjQgTCAzMzQuNjIgNzcuMjMgTCAzMzYgNzYuMDYgTCAzMzcuMzggNzQuODkgTCAzMzguNzUgNzMuNzEgTCAzNDAuMTMgNzIuNTQgTCAzNDEuNSA3MS4zNyBMIDM0Mi44OCA3MC4xOSBMIDM0NC4yNSA2OS4wMiBMIDM0NS42MyA2Ny44NSBMIDM0NyA2Ni42OCBMIDM0OC4zOCA2NS41IEwgMzQ5Ljc1IDY0LjMzIEwgMzUxLjEyIDYzLjE2IEwgMzUyLjUgNjEuOTkgTCAzNTMuODggNjAuODEgTCAzNTUuMjUgNTkuNjQgTCAzNTYuNjMgNTguNDcgTCAzNTggNTcuMjkgTCAzNTkuMzggNTYuMTIgTCAzNjAuNzUgNTQuOTUgTCAzNjIuMTIgNTMuNzggTCAzNjMuNSA1Mi42IEwgMzY0Ljg4IDUxLjQzIEwgMzY2LjI1IDUwLjI2IEwgMzY3LjYzIDQ5LjA4IEwgMzY5IDQ3LjkxIEwgMzcwLjM4IDQ2Ljc0IEwgMzcxLjc1IDQ1LjU3IEwgMzczLjEzIDQ0LjM5IEwgMzc0LjUgNDMuMjIgTCAzNzUuODcgNDIuMDUgTCAzNzcuMjUgNDAuODggTCAzNzguNjMgMzkuNyBMIDM4MCAzOC41MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSIxNTAiIHkxPSIzMjAiIHgyPSIxNTAiIHkyPSIyMzQuNzEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTAiIHkxPSIzMjAiIHgyPSIzNTAiIHkyPSI2NC4xMiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMjM0LjcxIiByPSI1IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iMzUwIiBjeT0iNjQuMTIiIHI9IjUiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTQyIiB5PSIyMjQuNzEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPkEoMiA7IDUpPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzNDIiIHk9IjU0LjEyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5CKDYgOyAxNSk8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjE1MCIgeT0iMzUyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5IPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzNTAiIHk9IjM1MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+SOKAsjwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzQiIHk9IjM1MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TzwvdGV4dD48dGV4dCB4PSI0MjAiIHk9IjExMCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5PSC9PSOKAsiA9IEhBL0jigLJCPC90ZXh0Pjx0ZXh0IHg9IjQyMCIgeT0iMTM2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPjIvNiA9IDUvMTUgPSAxLzM8L3RleHQ+PHRleHQgeD0iNDIwIiB5PSIxNzIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+cHJpeCDDtyBtYXNzZTwvdGV4dD48dGV4dCB4PSI0MjAiIHk9IjE5MiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj49IDIsNSDigqwva2cgcGFydG91dDwvdGV4dD48L3N2Zz4=)
*Les points A(2 ; 5) et B(6 ; 15) sont alignés avec l’origine : les triangles OHA et OH′B sont emboîtés et Thalès donne 2/6 = 5/15.*
<!-- /schema -->

Tu sais depuis la 5e que le graphique d'une situation de proportionnalité est fait de
points **alignés avec l'origine**. Voici *pourquoi*.

Place deux points de la situation, $M(x\,;\,y)$ et $M'(x'\,;\,y')$, et leurs projetés
$H(x\,;\,0)$ et $H'(x'\,;\,0)$ sur l'axe des abscisses. Les segments $[HM]$ et
$[H'M']$ sont tous deux verticaux, donc **parallèles**, et les triangles $OHM$ et
$OH'M'$ sont **emboités**.

Le théorème de Thalès donne alors :

$$\frac{OH}{OH'} = \frac{HM}{H'M'}
\qquad\text{c'est-à-dire}\qquad \boxed{\frac{x}{x'} = \frac{y}{y'}}$$

Autrement dit $\dfrac{y}{x} = \dfrac{y'}{x'}$ : **le quotient est le même partout**,
et ce quotient commun est le coefficient de proportionnalité.

> **Exemple.** $2$ kg de pommes coûtent $5$ €, $6$ kg coûtent $15$ €. Les points
> $A(2\,;\,5)$ et $B(6\,;\,15)$ sont alignés avec l'origine, car
> $\dfrac{2}{6} = \dfrac{5}{15} = \dfrac{1}{3}$.

> **Lire un point manquant.** Sur une droite passant par l'origine, on lit
> $M(3\,;\,7{,}5)$. Quelle est l'ordonnée du point d'abscisse $8$ ?
> $$\frac{3}{8} = \frac{7{,}5}{y'} \quad\Longrightarrow\quad y' = \frac{8 \times 7{,}5}{3} = 20$$

> ⚠️ **Sur une droite passant par l'origine, on multiplie, on n'ajoute pas.** Passer
> de $3$ à $8$ en abscisse, ce n'est pas ajouter $5$ à l'ordonnée.

Et dans l'autre sens, c'est la **réciproque** de Thalès : si tous les quotients
$\dfrac{y}{x}$ sont égaux, les points sont alignés avec l'origine. Un alignement qui
**rate l'origine** n'est donc pas de la proportionnalité.

---

## 8. Proportionnalité et fonction linéaire : deux points de vue

Une situation de proportionnalité de coefficient $a$ et une **fonction linéaire** de
coefficient $a$ sont **la même chose**, dite dans deux langages.

| Point de vue **grandeurs** (ce chapitre) | Point de vue **fonction** (chapitre « Fonctions ») |
|---|---|
| deux grandeurs proportionnelles | une grandeur exprimée en fonction de l'autre |
| coefficient de proportionnalité $a$ | coefficient de la fonction linéaire |
| tableau de proportionnalité | tableau de valeurs |
| points alignés avec l'origine | représentation graphique de la fonction |
| $\text{grandeur d'arrivée} = a \times \text{grandeur de départ}$ | l'écriture $f(x)$, l'image, l'antécédent |

> **Retiens surtout ceci.** Toute évolution en pourcentages est une situation de
> proportionnalité : appliquer $+15\,\%$, c'est multiplier par $1{,}15$, donc le prix
> payé est **proportionnel** au prix affiché, de coefficient $1{,}15$. Doubler le prix
> affiché double le prix payé.

> 📎 **Le formalisme est dans l'autre chapitre.** La notation $f(x) = ax$, les mots
> *image* et *antécédent*, la résolution graphique d'équations et d'inéquations :
> tout cela est traité dans la fiche `3e — Fonctions`. Ici, on reste sur les
> **grandeurs et leur coefficient**.

---

## 9. Cas particuliers et pièges de calcul

- **Un taux d'évolution peut dépasser $100\,\%$ à la hausse.** Doubler, c'est
  $+100\,\%$ ; tripler, c'est $+200\,\%$.
- **Une baisse ne peut pas dépasser $-100\,\%$.** À $-100\,\%$ il ne reste rien, et on
  ne peut pas retirer plus que tout.
- **Une évolution nulle donne $t = 0\,\%$**, donc $\mathrm{CM} = 1$. Un coefficient
  égal à $1$ n'est pas une erreur : c'est « rien n'a changé ».
- **Points de pourcentage $\neq$ pourcentage.** Passer de $20\,\%$ à $25\,\%$, c'est
  $+5$ **points**, mais une hausse de $\dfrac{25-20}{20} = 25\,\%$.
- **Un ratio n'est pas une fraction du total.** Dans un partage $2 : 3$, la première
  part vaut $\dfrac{2}{5}$ du total.

---

## 10. À retenir absolument

| | |
|---|---|
| Partage selon $a : b$ | diviser par $a + b$, puis multiplier — et contrôler la somme |
| $t\,\%$ de $N$ | $\dfrac{t}{100} \times N$ |
| Échelle $\dfrac{1}{n}$ | $1$ cm sur la carte $=$ $n$ cm en vrai ; $1$ km $= 100\,000$ cm |
| Appliquer $\pm t\,\%$ | $\times \left(1 \pm \dfrac{t}{100}\right)$, ou variation puis somme |
| **Traduire une évolution** | $t = \dfrac{V_a - V_d}{V_d} \times 100$ — on divise par le **départ** |
| Du coefficient au taux | $t = (\mathrm{CM} - 1) \times 100$ |
| Deux évolutions | on **multiplie** les coefficients |
| Revenir au départ | $\mathrm{CM}' = \dfrac{1}{\mathrm{CM}}$ |
| Graphique | points alignés **avec l'origine** — Thalès donne $\dfrac{y}{x} = \dfrac{y'}{x'}$ |
| Fonction linéaire | même notion, autre langage : coefficient $a$ des deux côtés |

---

## 11. Les erreurs qui coûtent des points

1. **Diviser par la valeur d'arrivée** pour trouver un taux d'évolution. De $40$ à
   $46$, c'est $\dfrac{6}{40}$, jamais $\dfrac{6}{46}$. Le dénominateur, c'est
   **d'où l'on part**.
2. **Annoncer le coefficient à la place du taux.** $\times 1{,}15$ se dit
   « $+15\,\%$ », pas « $+115\,\%$ » ; $\times 0{,}88$ se dit « $-12\,\%$ », pas
   « $-88\,\%$ ».
3. **Additionner deux taux successifs.** $+20\,\%$ puis $-10\,\%$ ne fait pas
   $+10\,\%$ mais $+8\,\%$. Multiplie les coefficients.
4. **Croire qu'une baisse de $20\,\%$ s'annule par une hausse de $20\,\%$.** Il faut
   $+25\,\%$ : les deux taux ne portent pas sur la même base.
5. **Rater la conversion d'une échelle.** $1$ km vaut $100\,000$ cm. Un facteur $100$
   oublié transforme $18$ km en $1\,800$ km.
6. **Diviser par un terme du ratio** au lieu de la somme des termes, ou confondre
   $\dfrac{20}{30}$ (comparaison des deux parts) et $\dfrac{20}{50}$ (part du total).
7. **Oublier l'origine** en lisant un graphique : des points alignés sur une droite
   qui ne passe pas par $O$ ne sont **pas** proportionnels.
