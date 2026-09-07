---
id: 5e-math-triangles-angles
titre: "Angles et triangles"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Angles et mesures (6e)
  - Droites parallèles et perpendiculaires (6e)
statut: brouillon
relu_par: null
---

# Angles et triangles

<!-- schema:auto -->
![Un angle est formé par deux demi-droites de même origine (le sommet).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iOTAiIHkxPSIyMDAiIHgyPSIzNDAiIHkyPSIyMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48bGluZSB4MT0iOTAiIHkxPSIyMDAiIHgyPSIxOTcuNzQiIHkyPSI2Mi4xIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40Ii8+PHBhdGggZD0iTSAxMzYgMjAwIEEgNDYgNDYgMCAwIDAgMTE4LjMyIDE2My43NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuMiIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iMjAwIiByPSIzLjUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI3NiIgeT0iMjA2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIj5PPC90ZXh0Pjx0ZXh0IHg9IjMzNCIgeT0iMjIwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjNWI2YjdhIj5BPC90ZXh0Pjx0ZXh0IHg9IjIwMy43NCIgeT0iNTguMSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzViNmI3YSI+QjwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjE4NCIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSI+YW5nbGUgw4JPQjwvdGV4dD48L3N2Zz4=)


> Ce chapitre marque un tournant : on ne se contente plus de **mesurer**, on commence
> à **démontrer**. Une propriété permet d'affirmer qu'un angle vaut $70°$ sans jamais
> sortir le rapporteur — et c'est cette bascule qui compte.

---

## 1. Vocabulaire des angles

| Nom | Mesure |
|---|---|
| **Nul** | $0°$ |
| **Aigu** | entre $0°$ et $90°$ |
| **Droit** | $90°$ |
| **Obtus** | entre $90°$ et $180°$ |
| **Plat** | $180°$ |

### Angles complémentaires et supplémentaires

| | Somme |
|---|---|
| **Complémentaires** | $90°$ |
| **Supplémentaires** | $180°$ |

> **Moyen de ne pas les confondre** : *c* comme *coin* droit ($90°$), *s* comme
> *straight*, la ligne droite ($180°$).

---

## 2. Angles opposés par le sommet

Deux droites sécantes forment quatre angles. Ceux qui se font face sont **opposés par
le sommet**, et ils sont **égaux**.

```
        \   1  /
         \    /
      4   \  /   2
    -------\/-------
           /\
      3   /  \   4'
         /    \
```

> Les angles $1$ et $3$ sont opposés par le sommet, donc égaux. Idem pour $2$ et $4$.

---

## 3. Droites parallèles et angles

C'est le résultat le plus utile du chapitre. Quand deux droites **parallèles** sont
coupées par une troisième — la **sécante** :

| Position | Propriété |
|---|---|
| **Angles alternes-internes** | ils sont **égaux** |
| **Angles correspondants** | ils sont **égaux** |

```
              ╱
    ═════════╱═════════   (d1)
            ╱ ⟋ a
           ╱
          ╱ b ⟋
    ═════╱═════════════   (d2)
        ╱
```

> Les angles $a$ et $b$ sont **alternes-internes** : ils sont de part et d'autre de la
> sécante, entre les deux parallèles. Ils sont égaux.

### La réciproque — pour démontrer un parallélisme

Si deux angles alternes-internes sont **égaux**, alors les droites **sont parallèles**.

> **C'est ce qui rend la propriété doublement utile** : dans un sens elle donne des
> mesures d'angles, dans l'autre elle prouve un parallélisme.

---

## 4. Somme des angles d'un triangle

$$\boxed{\widehat{\mathrm{A}} + \widehat{\mathrm{B}} + \widehat{\mathrm{C}} = 180°}$$

C'est vrai pour **tout** triangle, sans exception.

> **Exemple.** Un triangle a deux angles de $50°$ et $70°$. Le troisième vaut
> $180 - 50 - 70 = 60°$.

> **Conséquence immédiate** : un triangle ne peut avoir **qu'un seul** angle droit ou
> obtus. Deux angles droits feraient déjà $180°$, il ne resterait rien pour le
> troisième.

---

## 5. Triangles particuliers

| Triangle | Définition | Propriétés des angles |
|---|---|---|
| **Isocèle** | deux côtés égaux | les deux angles à la base sont **égaux** |
| **Équilatéral** | trois côtés égaux | les trois angles valent $60°$ |
| **Rectangle** | un angle droit | les deux autres angles sont **complémentaires** |

> **Pourquoi l'équilatéral a des angles de $60°$** : les trois angles sont égaux et
> leur somme vaut $180°$, donc chacun vaut $180 \div 3 = 60°$.

> **Pourquoi les angles aigus d'un rectangle sont complémentaires** : l'angle droit
> occupe $90°$, il reste $90°$ à partager entre les deux autres.

---

## 6. Inégalité triangulaire

Un triangle ne peut exister que si le côté le plus long est **plus court** que la
somme des deux autres.

$$\mathrm{BC} < \mathrm{AB} + \mathrm{AC}$$

> **Exemple.** Peut-on construire un triangle de côtés $3$, $4$ et $9$ cm ?
>
> $3 + 4 = 7 < 9$ : **non**. Les deux petits côtés sont trop courts pour se rejoindre.

> **La méthode rapide** : compare le **plus grand** côté à la somme des deux autres.
> Si le plus grand gagne, le triangle est impossible.

---

## 7. Rédiger une démonstration

Le programme attend une rédaction structurée en trois temps :

| Étape | Contenu |
|---|---|
| **On sait que** | les données de l'énoncé |
| **Or** | la propriété que l'on invoque |
| **Donc** | la conclusion |

> **Exemple rédigé.**
>
> *On sait que* le triangle $\mathrm{ABC}$ est isocèle en $\mathrm{A}$ et que
> $\widehat{\mathrm{B}} = 70°$.
> *Or* dans un triangle isocèle, les angles à la base sont égaux.
> *Donc* $\widehat{\mathrm{C}} = 70°$.
> *Or* la somme des angles d'un triangle vaut $180°$.
> *Donc* $\widehat{\mathrm{A}} = 180 - 70 - 70 = 40°$.

---

## 8. À retenir absolument

| | |
|---|---|
| Complémentaires / supplémentaires | $90°$ / $180°$ |
| Opposés par le sommet | égaux |
| Alternes-internes (parallèles) | égaux |
| Réciproque | angles égaux ⟹ droites parallèles |
| Somme des angles | $180°$ |
| Équilatéral | trois angles de $60°$ |
| Isocèle | angles à la base égaux |
| Inégalité triangulaire | plus grand côté < somme des deux autres |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre complémentaires et supplémentaires.**
2. **Mesurer au rapporteur** quand l'énoncé demande de **démontrer**.
3. **Oublier que la somme vaut $180°$** et non $360°$ — c'est pour les quadrilatères.
4. **Croire qu'un triangle peut avoir deux angles droits.**
5. **Appliquer la propriété des alternes-internes** sans vérifier que les droites sont
   parallèles.
6. **Vérifier l'inégalité triangulaire sur le mauvais côté** : c'est le plus grand
   qu'il faut comparer.
7. **Conclure sans citer la propriété utilisée** : le « Or » de la rédaction n'est pas
   optionnel.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Espace et
géométrie », niveau Cinquième, sections « Angles » et « Triangles ».

Le sommaire du niveau Cinquième liste : Repérage sur une droite et dans le plan,
Représentation de l'espace, Transformations, ANGLES, TRIANGLES, Parallélogrammes.
Cette fiche couvre les deux sections Angles et Triangles.

⚠️ FICHE À RELIRE EN PRIORITÉ : l'extraction du PDF est nettement moins exploitable
sur le domaine « Espace et géométrie » que sur « Nombres et calculs ». Le sommaire
est fiable (les intitulés de sections), mais je n'ai PAS pu lire les objectifs
d'apprentissage détaillés de ces deux sections. Le contenu s'appuie donc sur la
structure standard du niveau, pas sur des capacités citées.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR — points de périmètre à trancher :
- Les angles ALTERNES-INTERNES et CORRESPONDANTS sont-ils bien au programme de 5e
  dans le nouveau texte, ou déplacés à un autre niveau ?
- L'INÉGALITÉ TRIANGULAIRE est-elle en 5e ou en 6e ?
- La construction de triangles (aux instruments) est-elle attendue ici ?
- Les hauteurs, médianes, médiatrices et bissectrices sont-elles rattachées à cette
  section ou traitées à part ?
- La rédaction « On sait que / Or / Donc » est-elle la formulation attendue par le
  programme, ou une convention pédagogique locale ?

Le chapitre « Parallélogrammes », également au programme de 5e, n'est PAS traité
dans cette fiche — il mériterait sa propre fiche.

Rédaction originale. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
