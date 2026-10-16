---
id: 1es-math-phenomenes-aleatoires
titre: "Phénomènes aléatoires"
voie: generale
niveau: premiere
parcours: maths-enseignement-scientifique
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques intégrées à l'enseignement scientifique"
duree_lecture_min: 13
prerequis:
  - Probabilités (Seconde)
  - Statistiques à deux caractères (Première)
statut: brouillon
relu_par: null
---

# Phénomènes aléatoires

> Deux outils, un même objectif : lire correctement une information probabiliste.
> Le **tableau croisé** et l'**arbre pondéré** disent la même chose ; savoir passer
> de l'un à l'autre est la compétence centrale du chapitre.

---

## 1. Probabilité conditionnelle

### Définition

Pour deux événements $\mathrm{A}$ et $\mathrm{B}$ avec $P(\mathrm{A}) \neq 0$ :

$$\boxed{P_\mathrm{A}(\mathrm{B}) = \frac{P(\mathrm{A} \cap \mathrm{B})}{P(\mathrm{A})}}$$

On lit « probabilité de $\mathrm{B}$ **sachant** $\mathrm{A}$ ». On se restreint à
l'univers où $\mathrm{A}$ est réalisé.

> ⚠️ **$P_\mathrm{A}(\mathrm{B})$ et $P_\mathrm{B}(\mathrm{A})$ ne sont pas la même
> chose.** C'est l'erreur de raisonnement la plus coûteuse — et la plus fréquente
> dans les médias.

---

## 2. Lire un tableau croisé d'effectifs

C'est la voie la plus concrète pour calculer une conditionnelle : **on compte**.

|  | Malade | Sain | **Total** |
|---|---|---|---|
| Test positif | 95 | 90 | **185** |
| Test négatif | 5 | 810 | **815** |
| **Total** | **100** | **900** | **1000** |

| Question | Base | Calcul |
|---|---|---|
| $P(\text{positif})$ | tout l'effectif | $\frac{185}{1000} = 18{,}5\,\%$ |
| $P_{\text{malade}}(\text{positif})$ | colonne « Malade » | $\frac{95}{100} = 95\,\%$ |
| $P_{\text{positif}}(\text{malade})$ | ligne « Positif » | $\frac{95}{185} \approx 51\,\%$ |

> **Le résultat qui surprend tout le monde.** Le test détecte $95\,\%$ des malades,
> mais un test positif ne signifie être malade qu'une fois sur deux.
>
> *Pourquoi* : les personnes saines sont **neuf fois plus nombreuses**, donc même un
> faible taux de faux positifs ($10\,\%$ de $900$ = $90$ personnes) produit presque
> autant de positifs que la maladie elle-même.
>
> Cette illusion s'appelle le **paradoxe du dépistage**, et elle explique pourquoi on
> ne dépiste pas massivement une maladie rare.

---

## 3. L'arbre pondéré

<!-- schema:arbre-depistage -->
![Arbre du dépistage (M : malade, T : test positif). Les deux chemins qui mènent à T donnent P(T) = 0,095 + 0,09 = 0,185, comme dans le tableau croisé.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzQiIHkxPSIxNDAiIHgyPSIxNjQiIHkyPSI4MSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iOTkiIHk9IjEwMi41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDE8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI4NiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iODEiIHgyPSIzMTQiIHkyPSI1MS41IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNTUiIHk9IjU4LjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDk1PC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iNTYuNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+VDwvdGV4dD48dGV4dCB4PSIzNjAiIHk9IjU2LjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+UChNIOKIqSBUKSA9IDAsMSDDlyAwLDk1ID0gMCwwOTU8L3RleHQ+PGxpbmUgeDE9IjE5NiIgeTE9IjgxIiB4Mj0iMzE0IiB5Mj0iMTEwLjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1NSIgeT0iMTEyLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDA1PC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMTE1LjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjx0c3BhbiB0ZXh0LWRlY29yYXRpb249Im92ZXJsaW5lIj5UPC90c3Bhbj48L3RleHQ+PHRleHQgeD0iMzYwIiB5PSIxMTUuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5QKE0g4oipIDx0c3BhbiB0ZXh0LWRlY29yYXRpb249Im92ZXJsaW5lIj5UPC90c3Bhbj4pID0gMCwwMDU8L3RleHQ+PGxpbmUgeDE9IjM0IiB5MT0iMTQwIiB4Mj0iMTY0IiB5Mj0iMTk5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI5OSIgeT0iMTg2LjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsOTwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjIwNCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPk08L3RzcGFuPjwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iMTk5IiB4Mj0iMzE0IiB5Mj0iMTY5LjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1NSIgeT0iMTc2LjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDE8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxNzQuNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+VDwvdGV4dD48dGV4dCB4PSIzNjAiIHk9IjE3NC41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlAoPHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPk08L3RzcGFuPiDiiKkgVCkgPSAwLDkgw5cgMCwxID0gMCwwOTwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iMTk5IiB4Mj0iMzE0IiB5Mj0iMjI4LjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1NSIgeT0iMjMwLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDk8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIyMzMuNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPlQ8L3RzcGFuPjwvdGV4dD48dGV4dCB4PSIzNjAiIHk9IjIzMy41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlAoPHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPk08L3RzcGFuPiDiiKkgPHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPlQ8L3RzcGFuPikgPSAwLDgxPC90ZXh0Pjwvc3ZnPg==)
*Arbre du dépistage (M : malade, T : test positif). Les deux chemins qui mènent à T donnent P(T) = 0,095 + 0,09 = 0,185, comme dans le tableau croisé.*
<!-- /schema -->

### Les trois règles

1. La somme des probabilités des branches issues d'un même nœud vaut $1$
2. La probabilité d'un **chemin** est le **produit** des branches parcourues
3. La probabilité d'un événement est la **somme** des chemins qui le réalisent

```
                  P_A(B)
            ┌───────────── B      chemin : P(A) × P_A(B)
     P(A)   │
  ┌─────────┤ A
  │         │ P_A(B̄)
  │         └───────────── B̄
  │
  │ P(Ā)      P_Ā(B)
  └─────────┬───────────── B
            │ Ā
            └───────────── B̄
```

> **On multiplie le long d'un chemin, on additionne entre les chemins.**

### Formule des probabilités totales

$$P(\mathrm{B}) = P(\mathrm{A}) \times P_\mathrm{A}(\mathrm{B})
+ P(\overline{\mathrm{A}}) \times P_{\overline{\mathrm{A}}}(\mathrm{B})$$

---

## 4. Indépendance

$\mathrm{A}$ et $\mathrm{B}$ sont **indépendants** lorsque

$$\boxed{P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P(\mathrm{B})}$$

De façon équivalente : $P_\mathrm{A}(\mathrm{B}) = P(\mathrm{B})$ — savoir que
$\mathrm{A}$ s'est produit **ne change rien** à la probabilité de $\mathrm{B}$.

> ⚠️ **Indépendants n'est pas incompatibles.** Deux événements incompatibles de
> probabilités non nulles sont même toujours **dépendants** : si l'un se réalise,
> l'autre ne peut pas — c'est une information maximale.

---

## 5. Répétition d'épreuves de Bernoulli ($n \leqslant 4$)

Une **épreuve de Bernoulli** a deux issues : succès (probabilité $p$) ou échec
($1-p$). On la répète $n$ fois de façon **identique et indépendante**.

Le programme limite ce travail à $n \leqslant 4$ : tout se lit sur un arbre, sans
formule à mémoriser.

**Méthode** : dessiner l'arbre, repérer les chemins qui réalisent l'événement,
multiplier le long de chacun, additionner.

> **Exemple ($n = 3$, $p = 0{,}2$) — exactement un succès.**
>
> Trois chemins conviennent : SÉÉ, ÉSÉ, ÉÉS.
> Chacun vaut $0{,}2 \times 0{,}8 \times 0{,}8 = 0{,}128$.
>
> $P = 3 \times 0{,}128 = 0{,}384$

> ⚠️ Le facteur $3$ vient du **nombre de chemins**. L'oublier est l'erreur type.

---

## 6. À retenir absolument

| | |
|---|---|
| Conditionnelle | $P_\mathrm{A}(\mathrm{B}) = \dfrac{P(\mathrm{A} \cap \mathrm{B})}{P(\mathrm{A})}$ |
| Tableau croisé | la base du calcul est la ligne ou la colonne concernée |
| Sur un arbre | multiplier le long d'un chemin, additionner entre chemins |
| Probabilités totales | somme de tous les chemins menant à l'événement |
| Indépendance | $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A})P(\mathrm{B})$ |
| Bernoulli | compter les chemins, $n \leqslant 4$ |

---

## 7. Les erreurs qui coûtent des points

1. **Inverser le conditionnement** : « malade sachant positif » n'est pas « positif
   sachant malade ». C'est l'erreur de fond du chapitre.
2. **Se tromper de base** dans un tableau croisé : ligne, colonne ou total général ?
3. **Confondre indépendants et incompatibles.**
4. **Additionner le long d'un chemin** au lieu de multiplier.
5. **Oublier de compter les chemins** dans une répétition d'épreuves.
6. **Appliquer $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A})P(\mathrm{B})$** sans que
   l'indépendance soit établie.
7. **Conclure d'une forte probabilité conditionnelle à une causalité.**

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques intégrées à
l'enseignement scientifique, première générale, partie « Phénomènes aléatoires ».

Capacités attendues explicitement lisibles dans l'extraction :
« Calculer des probabilités conditionnelles à l'aide d'un TABLEAU CROISÉ D'EFFECTIFS
ou d'un ARBRE PONDÉRÉ » et « Représenter par un arbre de probabilités la répétition
de n épreuves aléatoires identiques et indépendantes de Bernoulli avec n ≤ 4 ».
Le tableau croisé est donc mis en avant à parité avec l'arbre — c'est une différence
notable avec le programme de spécialité, où l'arbre domine. La section 2 reflète ce
choix.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le vocabulaire attendu : le programme parle-t-il de « probabilités totales » ou
  reste-t-il sur une formulation par l'arbre ?
- La notation P_A(B) est-elle celle du programme, ou utilise-t-il P(B|A) ?
- Le paradoxe du dépistage (section 2) est un exemple que j'ai choisi : vérifier
  qu'il correspond bien à l'esprit du programme, qui privilégie les problématiques
  de santé publique et l'esprit critique.
- L'indépendance de deux VARIABLES ALÉATOIRES est-elle au programme, ou seulement
  celle de deux événements ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
