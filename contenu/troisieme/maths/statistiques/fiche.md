---
id: 3e-math-statistiques
titre: "Statistiques : effectifs cumulés, quartiles et boite à moustaches"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Effectifs, fréquences, tableau d'effectifs et diagrammes (5e)
  - Moyenne pondérée, médiane sur données brutes, étendue (4e)
  - Ranger des nombres décimaux dans l'ordre croissant (6e)
statut: brouillon
relu_par: null
---

# Statistiques : effectifs cumulés, quartiles et boite à moustaches

> Jusqu'ici tu résumais une série par **un** nombre. Cette année tu apprends à la
> découper : en deux avec la médiane, en quatre avec les quartiles. Cinq nombres
> suffisent alors à dessiner toute la série d'un seul trait.

---

## 1. Ce que tu sais déjà

Relis **« Statistiques » (5e)** — effectif, effectif total, fréquence, tableau
d'effectifs, diagrammes — et **« Statistiques » (4e)** — moyenne pondérée, médiane sur
données brutes, étendue, effet d'une valeur extrême. Trois calculs doivent être
**automatiques** : une moyenne ($\frac{7+9+11+13}{4} = 10$), une médiane sur peu de
valeurs (sur $4$ ; $6$ ; $9$ ; $10$ ; $15$, c'est $9$), une étendue ($15-4 = 11$). Tu
ajoutes cette année les **effectifs cumulés croissants**, les **quartiles**, la **boite
à moustaches**, et la médiane lue dans un **tableau d'effectifs** — plus seulement sur
une liste de données brutes.

---

## 2. Les effectifs cumulés croissants

> **Définition.** L'effectif cumulé croissant d'une valeur, c'est le nombre de données
> **inférieures ou égales** à cette valeur : on additionne les effectifs depuis la
> gauche jusqu'à cette valeur incluse.

> **Exemple.** Notes sur $20$ obtenues par $25$ élèves. Chaque case des cumuls vaut
> « cumul précédent $+$ effectif » : $2$, puis $2+5 = 7$, puis $7+6 = 13$…
>
> | Note | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ |
> |---|---|---|---|---|---|---|
> | **Effectif** | $2$ | $5$ | $6$ | $7$ | $3$ | $2$ |
> | **Cumul croissant** | $2$ | $7$ | $13$ | $20$ | $23$ | $25$ |
>
> **Les deux contrôles** : la ligne des cumuls est **toujours croissante**, et la
> **dernière case vaut l'effectif total** ($25$). Si l'un des deux échoue, c'est une
> erreur d'addition — reprends avant d'aller plus loin.

**À quoi ça sert.** À répondre à « combien au plus ? » — $20$ élèves ont eu **au plus
$12$**, donc $25-20 = 5$ ont eu **plus de $12$**. Et surtout à trouver la valeur qui
occupe un **rang** donné sans réécrire les $25$ notes : c'est tout ce que demandent la
médiane et les quartiles.

---

## 3. La médiane d'une série donnée par un tableau

Dans un tableau d'effectifs, la série est **déjà rangée** et la ligne des cumuls dit à
quel rang tu es arrivé — inutile de réécrire la liste comme en 4e.

$$\boxed{\text{médiane} = \text{la valeur qui partage la série rangée en deux moitiés}}$$

**La méthode.** ① Calcule l'effectif total $n$ et la ligne des cumuls. ② Repère le
rang : $\dfrac{n+1}{2}$ si $n$ est **impair** ; les rangs $\dfrac{n}{2}$ et
$\dfrac{n}{2}+1$ si $n$ est **pair**. ③ Lis la **première valeur dont le cumul atteint
ou dépasse** ce rang.

> **$n$ impair.** Les $25$ notes : rang $\frac{25+1}{2} = 13$. Cumuls $2$ ; $7$ ;
> $\mathbf{13}$ ; $20$ ; $23$ ; $25$ — le premier qui atteint $13$ est celui de $10$.
> **Médiane $= 10$** : la moitié de la classe au moins a eu $10$ ou moins.

> **$n$ pair.** Livres empruntés au CDI par $20$ élèves : effectifs $4$ ; $6$ ; $4$ ;
> $4$ ; $2$ pour $0$ à $4$ livres, donc cumuls $4$ ; $10$ ; $14$ ; $18$ ; $20$. Rangs
> $10$ et $11$ : le rang $10$ tombe sur la valeur $1$ (cumul $10$), le rang $11$ sur la
> valeur $2$ (premier cumul $\geqslant 11$ : $14$).
> Médiane $= \dfrac{1+2}{2} = \mathbf{1{,}5}$ livre.

> ⚠️ **Convention à connaitre.** Personne n'a emprunté $1{,}5$ livre : la médiane n'est
> pas toujours une valeur de la série, elle marque une **frontière**. Quand $n$ est
> pair, tout nombre entre les deux valeurs centrales coupe la série en deux moitiés ;
> pour qu'elle soit **un seul nombre**, on prend toujours leur **demi-somme**. C'est une
> convention — mais c'est celle qu'attend le correcteur, et celle du tableur.

---

## 4. Les quartiles

<!-- schema:cumuls-quartiles -->
![Effectifs cumulés des 25 notes : la première barre qui atteint le rang 7 donne Q₁ = 8, le rang 13 la médiane 10, le rang 19 donne Q₃ = 12.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNjAiIHkxPSIyODAiIHgyPSI0MjAiIHkyPSIyODAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iMjg0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjIzMy44NSIgeDI9IjQyMCIgeTI9IjIzMy44NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIyMzcuODUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjU8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTg3LjY5IiB4Mj0iNDIwIiB5Mj0iMTg3LjY5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjE5MS42OSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTQxLjU0IiB4Mj0iNDIwIiB5Mj0iMTQxLjU0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjE0NS41NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTU8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iOTUuMzgiIHgyPSI0MjAiIHkyPSI5NS4zOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSI5OS4zOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MjA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iNDkuMjMiIHgyPSI0MjAiIHkyPSI0OS4yMyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSI1My4yMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MjU8L3RleHQ+PHJlY3QgeD0iNjgiIHk9IjI2MS41NCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjE4LjQ2IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI5MCIgeT0iMjk4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42PC90ZXh0Pjx0ZXh0IHg9IjkwIiB5PSIyNTYuNTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjI8L3RleHQ+PHJlY3QgeD0iMTI4IiB5PSIyMTUuMzgiIHdpZHRoPSI0NCIgaGVpZ2h0PSI2NC42MiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMTUwIiB5PSIyOTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjg8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyMTAuMzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjc8L3RleHQ+PHJlY3QgeD0iMTg4IiB5PSIxNjAiIHdpZHRoPSI0NCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjIxMCIgeT0iMjk4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDwvdGV4dD48dGV4dCB4PSIyMTAiIHk9IjE1NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTM8L3RleHQ+PHJlY3QgeD0iMjQ4IiB5PSI5NS4zOCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjE4NC42MiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMjcwIiB5PSIyOTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyPC90ZXh0Pjx0ZXh0IHg9IjI3MCIgeT0iOTAuMzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjIwPC90ZXh0PjxyZWN0IHg9IjMwOCIgeT0iNjcuNjkiIHdpZHRoPSI0NCIgaGVpZ2h0PSIyMTIuMzEiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjMzMCIgeT0iMjk4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNDwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjYyLjY5IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4yMzwvdGV4dD48cmVjdCB4PSIzNjgiIHk9IjQ5LjIzIiB3aWR0aD0iNDQiIGhlaWdodD0iMjMwLjc3IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzOTAiIHk9IjI5OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTY8L3RleHQ+PHRleHQgeD0iMzkwIiB5PSI0NC4yMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjU8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMjE1LjM4IiB4Mj0iMTcyIiB5Mj0iMjE1LjM4IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIyMTUuMzgiIHI9IjUiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSI0MzQiIHk9IjIyMC4zOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5yYW5nIDcg4oaSIFHigoEgPSA4PC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjE2MCIgeDI9IjIzMiIgeTI9IjE2MCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMjEwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iNDM0IiB5PSIxNjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+cmFuZyAxMyDihpIgbcOpZGlhbmUgPSAxMDwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIxMDQuNjIiIHgyPSIyOTIiIHkyPSIxMDQuNjIiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjI3MCIgY3k9IjEwNC42MiIgcj0iNSIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjQzNCIgeT0iMTA5LjYyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPnJhbmcgMTkg4oaSIFHigoMgPSAxMjwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyODAiIHgyPSI0MjAiIHkyPSIyODAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI4MCIgeDI9IjYwIiB5Mj0iMzIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjY2IiB5PSIyNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPmVmZmVjdGlmIGN1bXVsw6k8L3RleHQ+PHRleHQgeD0iMjQwIiB5PSIzMjAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+bm90ZTwvdGV4dD48L3N2Zz4=)
*Effectifs cumulés des 25 notes : la première barre qui atteint le rang 7 donne Q₁ = 8, le rang 13 la médiane 10, le rang 19 donne Q₃ = 12.*
<!-- /schema -->

La médiane coupe en deux, les quartiles coupent en **quatre**.

> **Définitions.** Le **premier quartile** $Q_1$ est la plus petite valeur de la série
> telle qu'**au moins un quart** des données lui soient inférieures ou égales. Le
> **troisième quartile** $Q_3$ est la plus petite valeur telle qu'**au moins trois
> quarts** des données lui soient inférieures ou égales. Contrairement à la médiane,
> $Q_1$ et $Q_3$ sont **toujours des valeurs de la série**.

**La méthode, en trois gestes.** ① Calcule $\dfrac{n}{4}$ pour $Q_1$, $\dfrac{3n}{4}$
pour $Q_3$. ② Si le résultat n'est **pas entier**, prends l'entier **juste au-dessus** ;
s'il est entier, garde-le. Tu tiens un **rang**. ③ Lis la première valeur dont le cumul
atteint ce rang.

> **Exemple.** Les $25$ notes, cumuls $2$ ; $7$ ; $13$ ; $20$ ; $23$ ; $25$.
> $Q_1$ : $\frac{25}{4} = 6{,}25$ → rang $7$ → premier cumul $\geqslant 7$ : celui de la
> note $8$, d'où $\boxed{Q_1 = 8}$.
> $Q_3$ : $\frac{3\times 25}{4} = 18{,}75$ → rang $19$ → premier cumul $\geqslant 19$ :
> celui de la note $12$, d'où $\boxed{Q_3 = 12}$.
> **Vérification** : $7$ élèves sur $25$ ont $\leqslant 8$, soit $28\ \%\geqslant25\ \%$
> ✓ ; avec la note juste en dessous, $6$, on n'aurait que $2$ élèves, soit $8\ \%$ ✗.
> $8$ est bien la **plus petite** valeur qui convient.

> ⚠️ **Ne confonds jamais le rang et la valeur.** $6{,}25$ est un rang — une place dans
> la file — pas une note. Personne n'a eu $6{,}25$ : la réponse est $8$.

**Interpréter.** Au moins un quart de la classe a eu $8$ ou moins ; au moins trois
quarts ont eu $12$ ou moins, donc **au plus un quart** a dépassé $12$. Entre $Q_1$ et
$Q_3$ se trouve la **moitié centrale** de la classe.

---

## 5. Si la série est donnée par un diagramme en barres

Un diagramme en barres est un tableau d'effectifs dessiné : **la hauteur d'une barre est
l'effectif** de la valeur écrite dessous. Recopie un tableau, ajoute la ligne des cumuls,
applique les méthodes — ne compte jamais sur le dessin.

> **Exemple.** Hauteurs $4$ ; $5$ ; $3$ ; $6$ ; $2$ pour les valeurs $1$ à $5$ : total
> $= 20$, cumuls $4$ ; $9$ ; $12$ ; $18$ ; $20$. Médiane : rangs $10$ et $11$, tous deux
> sur la valeur $3$. $Q_1$ : $\frac{20}{4} = 5$ → rang $5$ → valeur $2$. $Q_3$ :
> $\frac{3\times 20}{4} = 15$ → rang $15$ → valeur $4$.

> ⚠️ **L'effectif total n'est écrit nulle part** : additionne toutes les hauteurs. Et
> les quartiles se lisent sur les **valeurs** de l'axe horizontal, jamais sur les hauteurs.

---

## 6. Les cinq valeurs de position et la boite à moustaches

<!-- schema:boite -->
![La boite à moustaches des 25 notes : minimum 6, premier quartile 8, médiane 10, troisième quartile 12 et maximum 16.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMTYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTM4LjMzIiB5MT0iNjAiIHgyPSIyMjYuNjciIHkyPSI2MCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwMy4zMyIgeTE9IjYwIiB4Mj0iNTgwIiB5Mj0iNjAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMzguMzMiIHkxPSI1MCIgeDI9IjEzOC4zMyIgeTI9IjcwIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgwIiB5MT0iNTAiIHgyPSI1ODAiIHkyPSI3MCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMjI2LjY3IiB5PSI0MCIgd2lkdGg9IjE3Ni42NyIgaGVpZ2h0PSI0MCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjE4IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PGxpbmUgeDE9IjMxNSIgeTE9IjQwIiB4Mj0iMzE1IiB5Mj0iODAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTM4LjMzIiB5PSIzMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bWluPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyMjYuNjciIHk9IjMyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5R4oKBPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzMTUiIHk9IjMyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5tw6lkaWFuZTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDAzLjMzIiB5PSIzMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+UeKCgzwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNTgwIiB5PSIzMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bWF4PC90ZXh0PjxsaW5lIHgxPSI1MCIgeTE9IjEzMCIgeDI9IjU4MCIgeTI9IjEzMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTI2IiB4Mj0iNTAiIHkyPSIxMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwIiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+PGxpbmUgeDE9Ijk0LjE3IiB5MT0iMTI2IiB4Mj0iOTQuMTciIHkyPSIxMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijk0LjE3IiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjU8L3RleHQ+PGxpbmUgeDE9IjEzOC4zMyIgeTE9IjEyNiIgeDI9IjEzOC4zMyIgeTI9IjEzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTM4LjMzIiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjY8L3RleHQ+PGxpbmUgeDE9IjE4Mi41IiB5MT0iMTI2IiB4Mj0iMTgyLjUiIHkyPSIxMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE4Mi41IiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjc8L3RleHQ+PGxpbmUgeDE9IjIyNi42NyIgeTE9IjEyNiIgeDI9IjIyNi42NyIgeTI9IjEzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjI2LjY3IiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjg8L3RleHQ+PGxpbmUgeDE9IjI3MC44MyIgeTE9IjEyNiIgeDI9IjI3MC44MyIgeTI9IjEzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjcwLjgzIiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjk8L3RleHQ+PGxpbmUgeDE9IjMxNSIgeTE9IjEyNiIgeDI9IjMxNSIgeTI9IjEzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzE1IiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxsaW5lIHgxPSIzNTkuMTciIHkxPSIxMjYiIHgyPSIzNTkuMTciIHkyPSIxMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM1OS4xNyIgeT0iMTQ4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMTwvdGV4dD48bGluZSB4MT0iNDAzLjMzIiB5MT0iMTI2IiB4Mj0iNDAzLjMzIiB5Mj0iMTM0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MDMuMzMiIHk9IjE0OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PGxpbmUgeDE9IjQ0Ny41IiB5MT0iMTI2IiB4Mj0iNDQ3LjUiIHkyPSIxMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ0Ny41IiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEzPC90ZXh0PjxsaW5lIHgxPSI0OTEuNjciIHkxPSIxMjYiIHgyPSI0OTEuNjciIHkyPSIxMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ5MS42NyIgeT0iMTQ4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNDwvdGV4dD48bGluZSB4MT0iNTM1LjgzIiB5MT0iMTI2IiB4Mj0iNTM1LjgzIiB5Mj0iMTM0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MzUuODMiIHk9IjE0OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTU8L3RleHQ+PGxpbmUgeDE9IjU4MCIgeTE9IjEyNiIgeDI9IjU4MCIgeTI9IjEzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTgwIiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE2PC90ZXh0Pjwvc3ZnPg==)
*La boite à moustaches des 25 notes : minimum 6, premier quartile 8, médiane 10, troisième quartile 12 et maximum 16.*
<!-- /schema -->

Cinq nombres, dans l'ordre, résument toute la série :

$$\text{minimum} \quad Q_1 \quad \text{médiane} \quad Q_3 \quad \text{maximum}$$

**Construire.** ① Trace un **axe gradué régulier** — c'est lui qui porte l'échelle.
② Dessine la **boite**, de $Q_1$ à $Q_3$. ③ Trace le trait de la **médiane** dans la
boite. ④ Prolonge par deux **moustaches**, jusqu'au minimum et jusqu'au maximum.

> **Exemple.** Les $25$ notes : min $6$, $Q_1 = 8$, médiane $10$, $Q_3 = 12$, max $16$.
> ```
>   6      8     10     12                16
>   |------[======|======]----------------|
>   +--+--+--+--+--+--+--+--+--+--+--+--+--+
>   4  5  6  7  8  9 10 11 12 13 14 15 16
> ```

**Lire.** Les bouts des moustaches donnent le minimum et le maximum, donc la longueur
totale donne l'**étendue** ($16-6 = 10$). Les bords de la boite donnent $Q_1$ et $Q_3$,
donc sa **largeur** vaut $Q_3-Q_1$ ($4$ ici) : c'est là que tient la moitié centrale.
Le trait intérieur est la **médiane**.

> ⚠️ **Ni la moyenne ni les effectifs n'apparaissent** sur une boite : impossible d'y
> deviner la moyenne, ou de savoir si la série compte $20$ ou $2\,000$ données. C'est
> justement ce qui permet de comparer deux séries de tailles très différentes.

---

## 7. Utiliser une boite pour comparer et interpréter

<!-- schema:deux-boites -->
![Même médiane et même étendue, mais la boite de A est étroite (2) et celle de B large (9) : la moitié centrale de A est resserrée autour de 10.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iOTAiIHkxPSI2MCIgeDI9IjI5NC4xNyIgeTI9IjYwIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzc1LjgzIiB5MT0iNjAiIHgyPSI1ODAiIHkyPSI2MCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjkwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjcwIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgwIiB5MT0iNTAiIHgyPSI1ODAiIHkyPSI3MCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMjk0LjE3IiB5PSI0MCIgd2lkdGg9IjgxLjY3IiBoZWlnaHQ9IjQwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMTgiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz48bGluZSB4MT0iMzM1IiB5MT0iNDAiIHgyPSIzMzUiIHkyPSI4MCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjcwIiB5PSI2NSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD48dGV4dCB4PSIzMzUiIHk9IjEwMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bGFyZ2V1ciAyPC90ZXh0PjxsaW5lIHgxPSI5MCIgeTE9IjE1MCIgeDI9IjE3MS42NyIgeTI9IjE1MCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUzOS4xNyIgeTE9IjE1MCIgeDI9IjU4MCIgeTI9IjE1MCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjkwIiB5MT0iMTQwIiB4Mj0iOTAiIHkyPSIxNjAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1ODAiIHkxPSIxNDAiIHgyPSI1ODAiIHkyPSIxNjAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjE3MS42NyIgeT0iMTMwIiB3aWR0aD0iMzY3LjUiIGhlaWdodD0iNDAiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4xOCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIvPjxsaW5lIHgxPSIzMzUiIHkxPSIxMzAiIHgyPSIzMzUiIHkyPSIxNzAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI3MCIgeT0iMTU1IiBmb250LXNpemU9IjE2IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5CPC90ZXh0Pjx0ZXh0IHg9IjM1NS40MiIgeT0iMTkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5sYXJnZXVyIDk8L3RleHQ+PGxpbmUgeDE9IjkwIiB5MT0iMjIwIiB4Mj0iNTgwIiB5Mj0iMjIwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iOTAiIHkxPSIyMTYiIHgyPSI5MCIgeTI9IjIyNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iOTAiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDwvdGV4dD48bGluZSB4MT0iMTMwLjgzIiB5MT0iMjE2IiB4Mj0iMTMwLjgzIiB5Mj0iMjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMzAuODMiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD48bGluZSB4MT0iMTcxLjY3IiB5MT0iMjE2IiB4Mj0iMTcxLjY3IiB5Mj0iMjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNzEuNjciIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjwvdGV4dD48bGluZSB4MT0iMjEyLjUiIHkxPSIyMTYiIHgyPSIyMTIuNSIgeTI9IjIyNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjEyLjUiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NzwvdGV4dD48bGluZSB4MT0iMjUzLjMzIiB5MT0iMjE2IiB4Mj0iMjUzLjMzIiB5Mj0iMjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNTMuMzMiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODwvdGV4dD48bGluZSB4MT0iMjk0LjE3IiB5MT0iMjE2IiB4Mj0iMjk0LjE3IiB5Mj0iMjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyOTQuMTciIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+OTwvdGV4dD48bGluZSB4MT0iMzM1IiB5MT0iMjE2IiB4Mj0iMzM1IiB5Mj0iMjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMzUiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTA8L3RleHQ+PGxpbmUgeDE9IjM3NS44MyIgeTE9IjIxNiIgeDI9IjM3NS44MyIgeTI9IjIyNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzc1LjgzIiB5PSIyMzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjExPC90ZXh0PjxsaW5lIHgxPSI0MTYuNjciIHkxPSIyMTYiIHgyPSI0MTYuNjciIHkyPSIyMjQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQxNi42NyIgeT0iMjM4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMjwvdGV4dD48bGluZSB4MT0iNDU3LjUiIHkxPSIyMTYiIHgyPSI0NTcuNSIgeTI9IjIyNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDU3LjUiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTM8L3RleHQ+PGxpbmUgeDE9IjQ5OC4zMyIgeTE9IjIxNiIgeDI9IjQ5OC4zMyIgeTI9IjIyNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDk4LjMzIiB5PSIyMzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0PC90ZXh0PjxsaW5lIHgxPSI1MzkuMTciIHkxPSIyMTYiIHgyPSI1MzkuMTciIHkyPSIyMjQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUzOS4xNyIgeT0iMjM4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNTwvdGV4dD48bGluZSB4MT0iNTgwIiB5MT0iMjE2IiB4Mj0iNTgwIiB5Mj0iMjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1ODAiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTY8L3RleHQ+PC9zdmc+)
*Même médiane et même étendue, mais la boite de A est étroite (2) et celle de B large (9) : la moitié centrale de A est resserrée autour de 10.*
<!-- /schema -->

Deux boites tracées sur **le même axe** se comparent d'un coup d'œil.

> **Exemple.** Deux classes, même médiane ($10$) et même étendue ($12$). La boite de A
> est large de $2$, celle de B de $9$ : **la moitié centrale de A est resserrée autour
> de $10$, celle de B est éclatée.** A est homogène, B ne l'est pas.
>
> | | min | $Q_1$ | médiane | $Q_3$ | max |
> |---|---|---|---|---|---|
> | **A** | $4$ | $9$ | $10$ | $11$ | $16$ |
> | **B** | $4$ | $6$ | $10$ | $15$ | $16$ |

Conclure « même médiane, donc les deux classes se valent » est une faute
d'interprétation : l'étendue ne regarde que les **deux extrêmes**, la boite décrit le
**cœur** de la série. Le niveau général se lit sur la médiane, l'homogénéité sur la
**largeur de la boite**, les cas isolés sur la longueur des **moustaches**.

> ⚠️ **Une longue moustache ne veut pas dire « beaucoup d'élèves ».** Elle peut n'être
> due qu'à **une seule** donnée extrême : un quart des données au plus s'y trouve.

---

## 8. Au tableur

`=MOYENNE(A1:A20)` · `=MEDIANE(A1:A20)` · `=MAX(A1:A20)-MIN(A1:A20)` pour l'étendue.
Le tableur est surtout précieux ici pour les **cumuls** : une colonne d'additions
successives recopiée vers le bas se fait en une seconde et ne se trompe pas.

> ⚠️ **Méfie-toi des fonctions de quartile du tableur** : elles ne suivent pas la règle
> apprise ici et peuvent renvoyer un nombre qui n'est même pas une valeur de la série.
> Pour $Q_1$ et $Q_3$, applique la méthode du § 4.

---

## 9. Les pièges de calcul

| Situation | Le piège | Le bon geste |
|---|---|---|
| Effectifs cumulés | recopier les effectifs sans les additionner | cumul précédent $+$ effectif |
| Rang non entier | répondre $6{,}25$ | arrondir **au-dessus**, puis lire la **valeur** |
| Rang entier | arrondir quand même au-dessus | si $\frac{n}{4}$ est entier, on le **garde** |
| Médiane, $n$ pair | garder la valeur de gauche | **demi-somme** des deux valeurs centrales |
| Quartiles | les chercher sur la ligne des **effectifs** | ils sont sur la ligne des **valeurs** |
| Boite à moustaches | y placer la moyenne, ou dessiner sans axe | trait $=$ **médiane** ; axe gradué obligatoire |

---

## 10. À retenir absolument

| | |
|---|---|
| Effectif cumulé croissant | nombre de données $\leqslant$ à la valeur ; le dernier $=$ effectif total |
| Médiane, $n$ impair | valeur de rang $\dfrac{n+1}{2}$ |
| Médiane, $n$ pair | demi-somme des valeurs de rangs $\dfrac{n}{2}$ et $\dfrac{n}{2}+1$ |
| $Q_1$ | plus petite valeur avec **au moins $25\ \%$** des données en dessous ou égales |
| $Q_3$ | plus petite valeur avec **au moins $75\ \%$** des données en dessous ou égales |
| Rangs des quartiles | $\dfrac{n}{4}$ et $\dfrac{3n}{4}$, arrondis **au-dessus** si besoin |
| Valeurs de position | min · $Q_1$ · médiane · $Q_3$ · max |
| Boite à moustaches | boite $Q_1 \to Q_3$, trait à la médiane, moustaches aux extrêmes |
| Largeur de la boite | la **moitié centrale** de la série |
| Absents de la boite | la moyenne et les effectifs |

---

## 11. Les erreurs qui coûtent des points

1. **Donner le rang au lieu de la valeur.** « $Q_1 = 6{,}25$ » n'a aucun sens : $6{,}25$
   est une place dans la file, la réponse est la note qui l'occupe.
2. **Arrondir un rang déjà entier.** Si $\frac{n}{4} = 5$ tout rond, le rang est $5$.
3. **Lire les quartiles sur la ligne des effectifs.** Même erreur qu'avec l'étendue en
   4e : une valeur n'est pas un effectif.
4. **Oublier de cumuler**, ou cumuler en partant de la droite : les effectifs cumulés
   **croissants** partent de la plus petite valeur.
5. **Prendre la valeur de gauche quand $n$ est pair** : entre $1$ et $2$, c'est $1{,}5$.
6. **Tracer une boite sans axe gradué**, ou en espaçant les cinq nombres régulièrement :
   la position sur l'axe est toute l'information.
7. **Conclure « même médiane, donc mêmes séries ».** Regarde la largeur des boites.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt — chapeau du thème « Organisation et gestion
de données et probabilités » l. 861-885 (partie Statistiques : l. 861-872) ; section « Troisième » /
« Statistiques » l. 947-958 (titres 947-948, automatismes 949-952, objectifs 953-958).

CHAPITRE CRÉÉ LE 2026-08-12, premier du niveau 3e. Fait suite aux fiches 5e-math-statistiques et
4e-math-statistiques, citées en prérequis et NON répétées.

COUVERTURE, item par item — tout le contenu de la section est traité, rien d'autre.
- Automatismes (l. 950-952) → § 1, à l'état de rappel : acquis de 4e.
- « Calculer des effectifs cumulés croissants » (l. 954) → § 2.
- « Donner les quartiles et la médiane d'une série donnée sous forme de tableau d'effectifs ou de
  diagramme en barres » (l. 955) → § 3 (médiane), § 4 (quartiles), § 5 (les DEUX formes citées).
- « Construire et utiliser des boites à moustache pour représenter les valeurs de position »
  (l. 956) → § 6 (construire) et § 7 (utiliser) ; « valeurs de position » repris tel quel.
- « Comprendre et interpréter des données statistiques » (l. 957) → § 7, adossé au chapeau
  (« analyser et comparer », « esprit critique », l. 863-867).
- « Utiliser le tableur… » (l. 958) → § 8, court (formules déjà vues en 4e), alors que le chapeau
  le veut « aussi fréquemment que possible » (l. 871-872) : un professeur voudra peut-être plus.
APPORTS PROPRES À CETTE FICHE : effectifs cumulés, quartiles, boite à moustaches, et médiane lue
dans un TABLEAU ou un DIAGRAMME — la 4e la limitait aux données brutes (sa note n° 2 ; l. 928).

════ LES DEUX QUESTIONS LAISSÉES OUVERTES PAR LA 4e — ARBITRAGE RENDU ICI ════

1. DEMI-SOMME POUR UN EFFECTIF PAIR (question n° 1 de la 4e) → CONVENTION MAINTENUE, ET DÉSORMAIS
   NOMMÉE COMME TELLE À L'ÉLÈVE (§ 3). Motif tiré du texte : la 4e écrivait « déterminer UNE
   médiane » (l. 928, indéfini), ce qui laissait le choix ouvert ; la 3e écrit « les quartiles et
   LA médiane » (l. 955, défini) et exige une boite à moustaches — dessin qui réclame UN trait,
   donc UN nombre unique. La fiche 4e peut rester en l'état ; pour aligner les deux, y ajouter la
   même phrase suffit.
   ⚠️ EFFET DE BORD À TRANCHER : Q1 et Q3 sont définis par une règle de position, qui rend toujours
   une valeur de la série, alors que la médiane par demi-somme peut ne pas en être une (§ 3,
   exemple à 1,5). L'asymétrie est assumée et signalée à l'élève. Une autre progression cohérente
   définirait la médiane comme « deuxième quartile » avec la même règle de position — ce n'est pas
   l'usage attendu au brevet, d'où le choix retenu. À CONFIRMER.

2. MOYENNE À COEFFICIENTS, « devoir coefficient 3 » (question n° 3 de la 4e) → NON TRAITÉE, NI EN
   4e NI EN 3e. Motifs tirés du texte : la 3e ne mentionne la moyenne que comme automatisme
   (l. 950) et au tableur (l. 958), aucun objectif d'apprentissage ne l'étend ; et le seul endroit
   du cycle 4 où figure le mot « pondérée » (l. 924-925, 4e) lie les pondérations aux formes de
   présentation citées — données brutes, tableau, diagramme en barres — donc à des EFFECTIFS. La
   moyenne à coefficients n'est nulle part au programme du cycle 4 : le périmètre de la fiche 4e
   est confirmé et sa question n° 3 peut être close.
   ⚠️ RÉSERVE : les élèves de 3e lisent « coefficient » sur leur bulletin toute l'année. Un
   professeur peut vouloir deux lignes (« un coefficient se traite comme un effectif ») quelque
   part dans le parcours. Je ne les ai pas écrites — la consigne fait du programme la seule source.
   Décision à prendre au niveau du PARCOURS, pas d'une fiche.

════ AUTRES POINTS À CONFRONTER AU PDF PAR UN PROFESSEUR ════

3. CONVENTION DE CALCUL DES QUARTILES — le point le plus sensible. Le texte dit « donner les
   quartiles » (l. 955) sans les définir. Règle retenue : plus petite valeur telle qu'au moins un
   quart (resp. trois quarts) des données lui soient inférieures ou égales, mise en œuvre par le
   rang n/4 (resp. 3n/4) arrondi au-dessus s'il n'est pas entier, gardé tel quel s'il l'est.
   D'autres conventions (interpolation) donnent d'autres résultats. À VALIDER EN PRIORITÉ : les
   questions 4, 5 et 7 du QCM en dépendent.
4. ÉCART INTERQUARTILE : le texte ne le nomme pas. La fiche parle de « largeur de la boite » et
   écrit Q3 − Q1 sans en faire un indicateur encadré (§ 6, § 7). Volontaire — « utiliser » une
   boite suppose de lire cette largeur, mais le mot n'est pas introduit.
5. ORTHOGRAPHE : le BO écrit « boites à moustache » (l. 956) — « boite » sans accent circonflexe
   (rectifiée, conservée) et « moustache » au singulier ; la fiche met le pluriel, forme courante.
   Suivre le texte à la lettre, ou l'usage ?
6. LE SCHÉMA ASCII du § 6 est un pis-aller : il rend mal hors police à chasse fixe. À remplacer par
   une image ou un SVG à l'intégration — c'est LE dessin que l'élève doit savoir reproduire.
7. DATE DU BO : l'en-tête porte « BO du 5 mars 2026 » (chaine imposée, identique aux fiches 5e et
   4e) alors que ETAT.md attribue au cycle 4 le « BO du 2 avril 2026 ». Incohérence de dépôt, à
   trancher une fois pour toutes et à propager.
8. FORMULES TABLEUR en français, à aligner sur l'outil de la classe (comme en 4e). L'avertissement
   du § 8 sur les fonctions de quartile est délibérément non technique : vérifier qu'il ne dit rien
   de faux pour le tableur réellement utilisé en classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
