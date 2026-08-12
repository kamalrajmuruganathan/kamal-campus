---
id: 4e-math-statistiques
titre: "Statistiques : moyenne pondérée, médiane, étendue"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Effectifs, fréquences et moyenne simple (5e)
  - Tableaux d'effectifs, diagrammes en barres et circulaires (5e)
  - Ranger des nombres décimaux dans l'ordre croissant (6e)
statut: brouillon
relu_par: null
---

# Statistiques : moyenne pondérée, médiane, étendue

> Une série de données ne se raconte pas valeur par valeur : on la **résume**. Tu apprends
> cette année trois nombres pour le faire — et surtout qu'aucun ne suffit tout seul.

---

## 1. Ce que tu sais déjà

Tout vient de la 5e — relis la fiche **« Statistiques » (5e)** si un mot te manque :
**effectif**, **effectif total**, **fréquence** ($\frac{\text{effectif}}{\text{effectif total}}$),
**moyenne simple**, et les représentations (tableau, diagrammes, graphique). Trois calculs
doivent devenir **automatiques** cette année :

> - une moyenne sur très peu de valeurs, de tête : $\dfrac{6+8+10}{3} = 8$ ;
> - un **effectif manquant** : si le total vaut $25$ et que les effectifs connus font
>   $4+7+8+1 = 20$, il manque $25-20 = 5$ ;
> - une **fréquence simple** : $6$ sur $24$, c'est $\dfrac{6}{24} = 0{,}25 = 25\ \%$.

---

## 2. Trois indicateurs, trois questions

| Indicateur | La question à laquelle il répond | Condition |
|---|---|---|
| **Moyenne pondérée** | *et si on répartissait tout également ?* | effectif total non nul |
| **Médiane** | *quelle valeur coupe la série en deux moitiés ?* | série **rangée** |
| **Étendue** | *les données sont-elles resserrées ou dispersées ?* | au moins une valeur |

---

## 3. La moyenne pondérée

Quand une valeur apparaît plusieurs fois, elle doit **peser** autant de fois. C'est ce que
veut dire « pondérée » : chaque valeur est multipliée par son effectif.

$$\boxed{\text{moyenne} = \frac{\text{somme des } (\text{valeur} \times \text{effectif})}{\text{effectif total}}}$$

### À partir d'un tableau

> **Exemple.** Livres lus pendant les vacances par $25$ élèves.
>
> | Livres lus | $0$ | $1$ | $2$ | $3$ | $5$ | **Total** |
> |---|---|---|---|---|---|---|
> | **Effectif** | $4$ | $7$ | $8$ | $5$ | $1$ | $25$ |
>
> $\text{moyenne} = \dfrac{0 \times 4 + 1 \times 7 + 2 \times 8 + 3 \times 5 + 5 \times 1}{25}
> = \dfrac{43}{25} = 1{,}72$ livre par élève.

> **Le contrôle qui sauve** : la moyenne est toujours **entre la plus petite et la plus
> grande valeur**. Ici entre $0$ et $5$ : $1{,}72$ passe le test. Si tu trouves $8{,}6$,
> c'est que tu as divisé par $5$ (le nombre de colonnes) au lieu de $25$.

### À partir de données brutes

Même calcul, mais commence par **construire le tableau d'effectifs**.

> **Exemple.** $7$ ; $9$ ; $7$ ; $12$ ; $9$ ; $7$ ; $10$ ; $9$ ; $7$ ; $12$ → effectifs $4$
> pour $7$, $3$ pour $9$, $1$ pour $10$, $2$ pour $12$ (total $10$), d'où
> $\text{moyenne} = \dfrac{28 + 27 + 10 + 24}{10} = 8{,}9$.

### À partir d'un diagramme en barres

Un diagramme en barres est un tableau d'effectifs dessiné : **la hauteur d'une barre est
l'effectif** de la valeur écrite dessous. Lis les hauteurs, recopie un tableau, applique la
formule — ne calcule jamais sur le dessin.

> ⚠️ L'**effectif total** n'est pas écrit sur un diagramme : tu dois **additionner toutes
> les hauteurs** pour l'obtenir.

---

## 4. La médiane

> **Définition.** La médiane d'une série rangée dans l'**ordre croissant** est une valeur
> qui partage la série en **deux groupes de même effectif** : autant de données en dessous
> qu'au-dessus. Donc on **range d'abord**, toujours.

### Effectif impair : la valeur du milieu

> **Exemple.** $12$ ; $8$ ; $15$ ; $9$ ; $14$ ; $8$ ; $11$ — soit $7$ valeurs.
> Rangées : $8$ ; $8$ ; $9$ ; $\mathbf{11}$ ; $12$ ; $14$ ; $15$.
> $3$ valeurs avant, $3$ après : **médiane $= 11$**. Avec $n$ impair, elle occupe le rang
> $\dfrac{n+1}{2}$, ici $\dfrac{7+1}{2} = 4$.

### Effectif pair : deux valeurs au milieu

On prend la **demi-somme des deux valeurs centrales**.

> **Exemple.** On ajoute $6$, soit $8$ valeurs : $6$ ; $8$ ; $8$ ; $\mathbf{9}$ ;
> $\mathbf{11}$ ; $12$ ; $14$ ; $15$. Médiane $= \dfrac{9 + 11}{2} = 10$.

### Interpréter une médiane

> Médiane $= 11$ sur un contrôle signifie : **la moitié de la classe au moins a eu $11$ ou
> moins, l'autre moitié $11$ ou plus.** ⚠️ La médiane **ne se calcule pas, elle se repère** :
> c'est une position dans la liste rangée, pas une somme. Ce n'est pas la moyenne.

---

## 5. L'étendue

C'est l'indicateur de **dispersion** : il dit sur quelle largeur les données s'étalent.

$$\boxed{\text{étendue} = \text{plus grande valeur} - \text{plus petite valeur}}$$

> **Exemples.** Sur $8$ ; $8$ ; $9$ ; $11$ ; $12$ ; $14$ ; $15$ : $15 - 8 = 7$. Sur le
> tableau des livres lus, les valeurs vont de $0$ à $5$ : étendue $= 5$ livres.

> **Sur un diagramme en barres ou circulaire**, tu lis les **valeurs présentes**, pas les
> hauteurs ni les angles. Le plus gros secteur du diagramme des livres est celui de
> « $2$ livres », mais l'étendue reste $5 - 0 = 5$ : les effectifs n'y entrent pas.

> **Interpréter.** Deux séries de moyenne $10$ : $9$ ; $10$ ; $10$ ; $10$ ; $11$ a une
> étendue de $2$ (notes resserrées), $2$ ; $6$ ; $10$ ; $14$ ; $18$ une étendue de $16$
> (notes très dispersées). ⚠️ L'étendue est **un nombre**, avec l'unité des données, et elle
> ne regarde que les **deux extrêmes** : une donnée bizarre suffit à la faire exploser.

---

## 6. Quand on ajoute une valeur extrême

L'expérience à connaître par cœur : **la moyenne bouge beaucoup, la médiane presque pas.**

> **Départ.** $8$ ; $9$ ; $10$ ; $11$ ; $12$ → moyenne $= \dfrac{50}{5} = 10$, médiane
> $= 10$, étendue $= 4$. **On ajoute $20$** → moyenne $= \dfrac{70}{6} \approx 11{,}7$,
> médiane $= \dfrac{10+11}{2} = 10{,}5$, étendue $= 12$.

| Indicateur | Avant | Après | Variation |
|---|---|---|---|
| Moyenne | $10$ | $\approx 11{,}7$ | $+1{,}7$ — **forte** |
| Médiane | $10$ | $10{,}5$ | $+0{,}5$ — faible |
| Étendue | $4$ | $12$ | $\times 3$ — **énorme** |

> **Pourquoi.** La moyenne fait entrer le $20$ dans une **somme** : elle en subit tout le
> poids. La médiane ne regarde qu'une **position** : que la dernière valeur soit $20$ ou
> $200$ ne change rien. Une série avec une valeur très à l'écart ? La médiane la décrit mieux.

---

## 7. Comparer deux séries

On prend l'indicateur qui répond à la question posée, et souvent **plusieurs**.

> **Exemple.** Classe **A** : $9$ ; $10$ ; $10$ ; $10$ ; $11$ — moyenne $10$, médiane $10$,
> étendue $2$. Classe **B** : $2$ ; $6$ ; $10$ ; $14$ ; $18$ — moyenne $10$, médiane $10$,
> étendue $16$. Même moyenne, même médiane, et pourtant rien à voir : seule l'**étendue**
> les distingue. A est homogène, B est éclatée.

| La question | L'indicateur |
|---|---|
| Quel est le niveau général ? | moyenne |
| Quelle valeur coupe le groupe en deux ? | médiane |
| Le groupe est-il homogène ? | étendue |
| Une valeur fausse-t-elle le tableau ? | comparer moyenne **et** médiane |

> ⚠️ Deux séries d'**effectifs différents** se comparent quand même : moyenne, médiane et
> étendue ne dépendent pas de la taille du groupe. Ce sont les **effectifs bruts** qui ne se
> comparent pas — pour eux, passe par les fréquences (vu en 5e).

---

## 8. Au tableur

| Ce que tu veux | La formule |
|---|---|
| Moyenne des cellules $A1$ à $A20$ | `=MOYENNE(A1:A20)` |
| Médiane | `=MEDIANE(A1:A20)` |
| Étendue | `=MAX(A1:A20)-MIN(A1:A20)` |

> ⚠️ Il n'existe **pas** de fonction « ÉTENDUE » : on la fabrique avec `MAX` et `MIN`. Et le
> tableur range les données tout seul pour la médiane — à la main, non.

---

## 9. Les pièges de calcul

| Situation | Le piège | Le bon geste |
|---|---|---|
| Moyenne depuis un tableau | diviser par le nombre de colonnes | diviser par l'**effectif total** |
| Médiane | chercher le milieu de la liste **non rangée** | ranger d'abord |
| Médiane, effectif pair | garder une seule valeur centrale | en faire la **demi-somme** |
| Médiane | oublier les valeurs **répétées** | $8$ ; $8$ compte pour deux données |
| Étendue | soustraire les deux effectifs extrêmes | soustraire les deux **valeurs** extrêmes |

---

## 10. À retenir absolument

| | |
|---|---|
| Moyenne pondérée | $\dfrac{\text{somme des }(\text{valeur}\times\text{effectif})}{\text{effectif total}}$ |
| Contrôle de la moyenne | comprise entre la plus petite et la plus grande valeur |
| Médiane | partage la série **rangée** en deux groupes de même effectif |
| Médiane, $n$ impair | la valeur de rang $\dfrac{n+1}{2}$ |
| Médiane, $n$ pair | demi-somme des deux valeurs centrales |
| Étendue | plus grande valeur $-$ plus petite valeur |
| Ce que mesure l'étendue | la **dispersion**, pas le niveau |
| Valeur extrême ajoutée | la moyenne bouge beaucoup, la médiane très peu |
| Tableur | `=MOYENNE()` · `=MEDIANE()` · `=MAX()-MIN()` |

---

## 11. Les erreurs qui coûtent des points

1. **Chercher la médiane sans ranger la série.** L'erreur n°1 de l'année.
2. **Prendre la valeur de gauche quand l'effectif est pair** : avec $9$ et $11$, c'est $10$.
3. **Confondre valeur et effectif dans l'étendue** : $5-0=5$ livres, pas $8-1=7$ élèves.
4. **Diviser par le nombre de valeurs distinctes** au lieu de l'effectif total.
5. **Juger une série sur la seule moyenne** : regarde aussi la médiane et l'étendue.
6. **Croire qu'une valeur extrême décale la médiane autant que la moyenne.** Non : la
   médiane est une position, elle encaisse à peine.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : docs/programme-college-cycle4-maths-2026.txt — chapeau du thème
« Organisation et gestion de données et probabilités » l. 861-885 (partie statistiques du
chapeau : l. 861-872) ; section « Quatrième » / « Statistiques » l. 918-935 (automatismes
920-923, objectifs 924-933, prolongements 934-935).

CHAPITRE CRÉÉ LE 2026-08-12. Premier chapitre du niveau 4e du dépôt.

Couverture, item par item — tout ce que contient la section est traité, rien d'autre.
Automatismes (l. 920-923) → § 1 (fréquence seulement rappelée : traitée en entier en 5e).
Objectifs (l. 924-933) : moyenne pondérée en données brutes / tableau / diagramme en barres
→ § 3 (les TROIS formes, dans l'ordre du texte) ; médiane + interprétation → § 4 ; étendue +
interprétation en données brutes / tableau / diagramme en barres / diagramme circulaire → § 5
(les QUATRE formes) ; ajout d'une valeur extrême → § 6 ; problèmes avec les différents
indicateurs et comparaison de séries → § 7 ; tableur → § 8. Chapeau (l. 863-872) : « esprit
critique [...] présentations trompeuses » → § 6 et § 7 ; « tableur » → § 8.

PÉRIMÈTRE — EXCLU car relevant de la 3e (l. 947-958) : quartiles, effectifs cumulés
croissants, boites à moustache, médiane depuis un tableau d'effectifs ou un diagramme.
L'ÉTENDUE, elle, est bien un objectif de 4e (l. 928-929) : traitée.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :

1. MÉDIANE, EFFECTIF PAIR. Le texte dit « déterminer UNE médiane » : au sens strict, toute
   valeur entre les deux centrales partage la série en deux. La fiche enseigne la convention
   de la demi-somme (§ 4). Faut-il dire à l'élève que c'est une convention ?

2. MÉDIANE LIMITÉE AUX DONNÉES BRUTES. Le texte de 4e la restreint aux séries « présentée[s]
   sous forme de données brutes » ; la médiane depuis un tableau d'effectifs n'apparait qu'en
   3e. La fiche s'y tient — plus strict que beaucoup de progressions. À confirmer.

3. SENS DE « PONDÉRÉE ». Les formes de présentation citées par le texte imposent des poids
   = EFFECTIFS. La fiche ne traite donc PAS la moyenne à coefficients (« devoir coefficient
   3 »), pourtant l'acception courante du mot. À trancher.

4. ARTICULATION AVEC LA 5e. La fiche 5e traite déjà le calcul « valeur × effectif » sous le
   nom de moyenne simple ; la 4e le renomme moyenne pondérée. Le § 3 assume ce recouvrement
   et insiste sur les trois formes de présentation. Progression lisible ?

5. DATE DU BO, comme pour toutes les fiches du cycle 4 (voir la note de la fiche 5e). Et
   FORMULES TABLEUR en français (MOYENNE, MEDIANE, MAX, MIN) : à aligner sur l'outil de la
   classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
