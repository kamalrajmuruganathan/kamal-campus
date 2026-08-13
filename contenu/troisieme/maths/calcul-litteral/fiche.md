---
id: 3e-math-calcul-litteral
titre: "Calcul littéral et algébrique"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 14
prerequis:
  - Calcul littéral — réduire, développer, factoriser (5e)
  - Distributivité simple $k(a+b) = ka + kb$ (5e)
  - Équations du premier degré $ax+b=c$ et $ax+b=cx+d$ (4e)
  - Démontrer avec le calcul algébrique (4e)
  - Carrés des entiers de 0 à 12 (3e)
statut: brouillon
relu_par: null
---

# Calcul littéral et algébrique

> En 5e, la lettre servait à **écrire**. En 4e, à **chercher** une inconnue. En 3e,
> elle sert à **transformer** : la même expression change de forme sans changer de
> valeur, et c'est toi qui choisis la forme utile. Développée pour comparer,
> factorisée pour résoudre. C'est le point d'arrivée du calcul littéral au collège.

---

## 1. Ce que tu sais déjà

Les fiches de 5e (`5e-math-calcul-litteral`) et de 4e (`4e-math-calcul-litteral`)
restent entièrement valables : conventions d'écriture, réduction, distributivité
**simple**, démonstration par le calcul, résolution de $ax+b=c$ et $ax+b=cx+d$.
**Relis-les si un de ces mots te fait hésiter** — cette fiche ne les répète pas.
Ce qu'elle ajoute : la **double distributivité** (§4), les **trois identités
remarquables** (§5), l'**équation produit nul** (§7), l'**inéquation** (§8).

---

## 2. Les automatismes de 3e

**Somme ou produit ?** Avant tout calcul, donne la **nature** de l'expression : c'est
la **dernière** opération qui décide.

| $3x + 2$ | $5(x+4)$ | $(x-3)(x+2)$ | $x^2 - 9$ |
|---|---|---|---|
| une **somme** | un **produit** | un **produit** | une **somme** (différence) |

> **Ça décide de tout.** Une équation ne se résout par le « produit nul » (§7) que si
> un membre est un **produit**. Sinon, il faut d'abord factoriser.

**L'opposé d'une expression.** Le signe $-$ change le signe de **chaque** terme, pas
seulement du premier.

$$\boxed{-(5 - 4x) = -5 + 4x} \qquad\text{ainsi}\qquad 7 - (2x - 3) = 7 - 2x + 3 = 10 - 2x$$

**Pair et impair**, avec $k$ entier : $\ \boxed{\text{pair} = 2k \qquad \text{impair} = 2k+1}$

---

## 3. Simplifier un produit ou un rapport

Dans un **produit**, on multiplie les nombres entre eux et les lettres entre elles :

$$3x \times 2x = 6x^2 \qquad x \times x^2 = x^3 \qquad (2x)^2 = 4x^2$$

> ⚠️ **$(2x)^2$ vaut $4x^2$, pas $2x^2$.** Le carré porte sur **tout** ce qui est dans
> la parenthèse. Teste avec $x=3$ : $(2\times3)^2 = 36$ et $4 \times 3^2 = 36$ ✓,
> alors que $2 \times 3^2 = 18$ ✗.

Dans un **rapport**, on barre un **facteur commun** au numérateur et au dénominateur,
à condition qu'il soit non nul.

$$\frac{4x(x+2)}{6x} = \frac{2(x+2)}{3} \ \ (x \neq 0)
\qquad \frac{(x-1)(x+5)}{(x-1)(x+2)} = \frac{x+5}{x+2} \ \ (x \neq 1 \text{ et } x \neq -2)$$

> ⚠️ **On simplifie des facteurs, jamais des termes.** Dans $\dfrac{x+2}{2}$, rien ne
> se barre : en haut, $2$ est un **terme** d'une somme. Teste avec $x = 4$ :
> $\dfrac{6}{2} = 3$, et sûrement pas $4$.
>
> **Condition d'existence** : un dénominateur n'est jamais nul, et le facteur qu'on
> barre non plus — d'où les « pour $x \neq \dots$ ».

---

## 4. La double distributivité

Pour multiplier **deux sommes**, chaque terme de la première multiplie chaque terme de
la seconde. **Quatre** produits, jamais moins.

$$\boxed{(a+b)(c+d) = ac + ad + bc + bd}$$

> **Développer.** $(x+3)(x-5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$
> On développe (4 produits), **puis** on réduit ($-5x + 3x = -2x$) : deux étapes
> distinctes, ne les mélange pas.

**Factoriser quand le facteur est apparent** — quand un même facteur **se voit** dans
les deux termes, on le met en évidence.

> $(x+2)(x-1) + (x+2)(3x+4) = (x+2)\big[(x-1) + (3x+4)\big] = (x+2)(4x+3)$
>
> **Avec une soustraction**, le cas qui coûte des points :
> $$(2x-1)(x+5) - (2x-1)(x-2) = (2x-1)\big[(x+5) - (x-2)\big] = (2x-1) \times 7 = 7(2x-1)$$
> ⚠️ Le $-$ devant la seconde parenthèse change **les deux** signes : $-(x-2) = -x+2$.

---

## 5. Les trois identités remarquables

Trois égalités **toujours vraies**, quels que soient $a$ et $b$. Elles se lisent dans
les deux sens : de gauche à droite pour **développer**, de droite à gauche pour
**factoriser**.

### Le carré d'une somme

$$\boxed{(a+b)^2 = a^2 + 2ab + b^2}$$

> **Développer.** $(x+3)^2 = x^2 + 2 \times x \times 3 + 3^2 = x^2 + 6x + 9$
>
> **Factoriser.** $x^2 + 10x + 25$ : je vois $x^2$ et $25 = 5^2$ ; le double produit
> devrait valoir $2 \times x \times 5 = 10x$, c'est bien ce qu'il y a.
> Donc $x^2 + 10x + 25 = (x+5)^2$.

### Le carré d'une différence

$$\boxed{(a-b)^2 = a^2 - 2ab + b^2}$$

Seul le **double produit** change de signe : $b^2$ reste positif, c'est un carré.

> **Développer.** $(2x-5)^2 = (2x)^2 - 2 \times 2x \times 5 + 5^2 = 4x^2 - 20x + 25$
>
> **Factoriser.** $x^2 - 14x + 49 = x^2 - 2 \times x \times 7 + 7^2 = (x-7)^2$

### La différence de deux carrés

$$\boxed{(a-b)(a+b) = a^2 - b^2}$$

La seule des trois où le double produit **disparaît** : $-ab + ab = 0$.

> **Développer.** $(x-4)(x+4) = x^2 - 16$
>
> **Factoriser.** $9x^2 - 25 = (3x)^2 - 5^2 = (3x-5)(3x+5)$

> ⚠️ **Il n'existe pas d'identité pour $a^2 + b^2$.** Une **somme** de deux carrés ne
> se factorise pas. Seule la **différence** se factorise.

---

## 6. Le sens de lecture : développer ↔ factoriser

C'est le vrai obstacle du chapitre. La formule est la même dans les deux sens ; ce qui
change, c'est **de quel côté tu pars**.

| | Développer | Factoriser |
|---|---|---|
| Sens | produit $\rightarrow$ somme | somme $\rightarrow$ produit |
| Tu pars de | $(x+5)^2$ | $x^2 + 10x + 25$ |
| Tu arrives à | $x^2 + 10x + 25$ | $(x+5)^2$ |
| Quand ? | réduire, comparer, calculer pour $x = 2$ | **résoudre une équation**, simplifier un rapport |

**Le réflexe de reconnaissance pour factoriser** : compte les termes, cherche les carrés.

| Ce que tu vois | Piste |
|---|---|
| Un facteur identique dans les deux termes | facteur commun (§4) |
| **Trois** termes : deux carrés et un double produit | $(a+b)^2$ ou $(a-b)^2$ |
| **Deux** termes : une **différence** de deux carrés | $(a-b)(a+b)$ |
| Deux termes : une **somme** de deux carrés | ça ne se factorise pas |

> **Le contrôle qui ne coûte rien.** Tu as factorisé ? **Redéveloppe** : tu dois
> retrouver l'expression de départ. Tu as développé ? Remplace $x$ par un nombre simple
> dans les deux expressions : même résultat obligatoire. Ce réflexe repère presque
> toutes les erreurs de signe.

---

## 7. L'équation produit nul

Un produit est nul **si et seulement si** l'un au moins de ses facteurs est nul.

$$\boxed{A \times B = 0 \iff A = 0 \ \text{ ou } \ B = 0}$$

> **Cas direct.** $(x-3)(2x+5) = 0$ donne $x - 3 = 0$ **ou** $2x + 5 = 0$, c'est-à-dire
> $x = 3$ **ou** $x = -\dfrac{5}{2}$ : deux solutions.
>
> **Quand il faut factoriser d'abord.** $4x^2 - 9 = 0$ : à gauche, une différence de
> carrés, $(2x)^2 - 3^2$.
> $$(2x-3)(2x+3) = 0 \quad\Longrightarrow\quad x = \frac{3}{2} \ \text{ ou } \ x = -\frac{3}{2}$$

> ⚠️ **Ce « ou » n'est pas un « et ».** Chaque facteur donne sa propre solution.
>
> ⚠️ **La règle ne vaut que pour $0$.** De $(x-1)(x+2) = 6$ on ne déduit **rien** : ni
> $x-1=6$, ni $x+2=6$.
>
> ⚠️ **Ne divise jamais par $x$.** Pour $x^2 = 3x$, diviser par $x$ donne $x = 3$ et
> **perd la solution $0$**. Factorise : $x^2 - 3x = 0$, donc $x(x-3) = 0$, donc $x=0$
> **ou** $x=3$.

---

## 8. L'inéquation du premier degré $ax \geqslant b$

Une **inéquation** compare deux expressions. La résoudre, c'est trouver **toutes** les
valeurs de $x$ qui la rendent vraie — en général une infinité. Les règles de l'équation
restent valables, avec **une exception majeure** :

$$\boxed{\text{Diviser ou multiplier par un nombre } \textbf{négatif} \text{ inverse le sens de l'inégalité.}}$$

> **Cas positif.** $3x \geqslant 12$ : on divise par $3 > 0$, le sens ne bouge pas,
> $x \geqslant 4$.
>
> **Cas négatif.** $-2x \geqslant 6$ : on divise par $-2 < 0$, le sens **s'inverse**,
> $x \leqslant -3$. **Vérifie** : pour $x=-4$, $-2\times(-4) = 8 \geqslant 6$ ✓ ; pour
> $x=-2$, $-2\times(-2) = 4$, qui n'est pas $\geqslant 6$ ✗. C'est bien $\leqslant$.

**Graphiquement.** Trace la droite $y = ax$ et la droite horizontale $y = b$ : les
solutions de $ax \geqslant b$ sont les abscisses des points où $y = ax$ est **au-dessus**
de $y = b$, ou au même niveau. Sur une **droite graduée**, place la valeur limite et
garde le bon côté : pour $x \geqslant 4$, tout ce qui est à droite de $4$, et $4$ **est**
solution. Attention, la lecture graphique donne souvent une valeur **approchée** : elle
confirme le calcul, elle ne le remplace pas.

---

## 9. Raisonner par analyse-synthèse

Résoudre une équation, c'est en réalité faire **deux choses différentes** :

1. **L'analyse.** *Si $x$ est une solution, alors…* — tu déduis les seules valeurs
   possibles. Tu obtiens des **candidats**.
2. **La synthèse.** Tu **vérifies** que chaque candidat est bien une solution.

> **Exemple.** Résoudre $x^2 = 3x$.
> *Analyse.* Si $x$ est solution, alors $x^2 - 3x = 0$, donc $x(x-3) = 0$, donc $x=0$
> ou $x=3$ : aucun autre candidat n'est possible.
> *Synthèse.* Pour $x=0$ : $0^2 = 0$ et $3\times0 = 0$ ✓. Pour $x=3$ : $3^2 = 9$ et
> $3\times3 = 9$ ✓. **Les solutions sont $0$ et $3$.**

> **La synthèse n'est pas une formalité.** L'analyse dit seulement « il n'y a rien
> d'autre à chercher ». C'est la synthèse qui prouve que ce que tu as trouvé
> fonctionne — et qui rattrape une erreur de calcul.

---

## 10. À retenir absolument

| | |
|---|---|
| Nature d'une expression | somme ou produit — la **dernière** opération décide |
| Opposé | $-(5-4x) = -5+4x$ |
| $(2x)^2$ | $4x^2$, pas $2x^2$ |
| Simplifier un rapport | seulement des **facteurs**, jamais des termes |
| Double distributivité | $(a+b)(c+d) = ac+ad+bc+bd$ — **4** produits |
| Identité 1 | $(a+b)^2 = a^2 + 2ab + b^2$ |
| Identité 2 | $(a-b)^2 = a^2 - 2ab + b^2$ |
| Identité 3 | $(a-b)(a+b) = a^2 - b^2$ |
| $a^2 + b^2$ | ne se factorise **pas** |
| Produit nul | $A \times B = 0 \iff A=0$ **ou** $B=0$ — et seulement avec $0$ |
| Inéquation | diviser par un **négatif** inverse le sens |
| Analyse-synthèse | trouver les candidats, **puis** les vérifier |

---

## 11. Les erreurs qui coûtent des points

1. **Écrire $(a+b)^2 = a^2 + b^2$.** L'erreur la plus fréquente du collège, et elle est
   fausse : il manque le **double produit** $2ab$. Preuve en trois secondes :
   $(3+4)^2 = 49$, alors que $3^2 + 4^2 = 25$ ; la bonne formule donne $9+24+16 = 49$ ✓.
2. **Se tromper sur le signe du double produit.** Dans $(a-b)^2$, c'est $-2ab$ qui change
   de signe, **pas** $b^2$ : $(x-7)^2 = x^2 - 14x + 49$, avec $+49$.
3. **Oublier un des quatre produits** de la double distributivité — presque toujours le
   troisième.
4. **Écrire $(2x)^2 = 2x^2$.** Le carré porte aussi sur le $2$ : c'est $4x^2$.
5. **Barrer un terme dans un rapport** : dans $\dfrac{x+2}{2}$, rien ne se simplifie.
6. **Appliquer le produit nul à autre chose que $0$** : de $(x-1)(x+2) = 6$, rien.
7. **Diviser une inéquation par un négatif sans inverser le sens** : $-2x \geqslant 6$
   donne $x \leqslant -3$, pas $x \geqslant -3$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : BO du 5 mars 2026, « Programme de mathématiques pour le cycle 4 »
(docs/programme-college-cycle4-maths-2026.txt), thème « Nombres et calculs », niveau
TROISIÈME (section ouverte l. 581), entrée « Calcul littéral et algébrique », l. 624-644.

Couverture ligne à ligne (aucun item de la source laissé de côté).
Automatismes l. 625-632 : 626 équations ax=c/x+b=c/ax+b=c → acquis 4e (§1) · 627
simplifier des expressions littérales → §3 · 628 calculer la valeur d'une expression
algébrique → §3 et §6 (contrôle par substitution) · 629 nature d'une expression, « 3x + 2
est une somme, 5 (x + 4) est un produit » → §2, exemples repris À L'IDENTIQUE · 630
développer/factoriser une expression simple → acquis 5e/4e (§1) · 631 pair/impair → §2 ·
632 opposé, « –(5 – 4x) = –5 + 4x » → §2, encadré avec l'exemple EXACT.
Objectifs l. 634-642 : 634 simplifier produits et rapports à facteurs communs → §3 ·
635 double distributivité, « dont le facteur est apparent » → §4 (le sous-titre reprend
la formule du texte) · 636 inéquation ax ⩾ b, analytiquement et graphiquement → §8 ·
637 équation produit nul → §7 · 638-641 les trois identités remarquables → §5 ·
642 raisonnement par analyse-synthèse → §9.

DEUX QUESTIONS DE PÉRIMÈTRE TRANCHÉES (à confirmer) :
- ÉQUATIONS-PRODUITS : OUI, au programme de 3e — l. 637, explicite. Traité §7.
- INÉQUATIONS : OUI, mais périmètre ÉTROIT. L. 636 dit « du type ax ⩾ b », à résoudre
  « analytiquement ET graphiquement ». Je m'y suis tenu. NON traités : ax + b ⩾ cx + d,
  tableaux de signes, notation par intervalles ([4 ; +∞[) et S = {…}, absents de la
  source. Beaucoup d'enseignants vont plus loin : À ARBITRER.

ÉCART ASSUMÉ AVEC L'ORDRE DU TEXTE — À VALIDER
Ordre littéral : 634 simplifier / 635 double distributivité / 636 inéquation / 637
produit nul / 638-641 identités remarquables / 642 analyse-synthèse. J'ai remonté les
IDENTITÉS REMARQUABLES (§5) AVANT le produit nul (§7) et l'inéquation (§8) : le produit
nul est inutilisable sans savoir factoriser une différence de carrés (4x² – 9 = 0), et
l'ordre littéral imposerait des renvois en avant. Blocs « transformer » (§3-§6) puis
« résoudre » (§7-§9). Retour à l'ordre littéral mécanique si le relecteur le préfère.
Second écart, mineur : le texte écrit les identités dans le SENS DE LA FACTORISATION
(a² + 2ab + b² = (a+b)²) ; je les encadre dans le sens du développement, plus lisible,
en insistant en §5 et §6 sur la double lecture.

CONTINUITÉ AVEC LA 4e — À TRANCHER CONJOINTEMENT
L'auteur de 4e-math-calcul-litteral a délibérément EXCLU la double distributivité et les
identités remarquables de la 4e (l. 575 dit « distributivité SIMPLE » ; l. 635 et
638-641 sont en Troisième). Cette fiche est écrite EN MIROIR : elle les introduit
intégralement ici comme apports centraux de la 3e. Si le relecteur introduisait la double
distributivité en 4e, §4 deviendrait un renvoi — mais les identités remarquables restent
en 3e dans tous les cas, le texte étant explicite.

Autres points pour le relecteur :
- §8 RÉSOLUTION GRAPHIQUE : le texte dit « graphiquement » sans préciser le support.
  J'ai retenu deux droites (y = ax et y = b) + droite graduée. Une lecture sur
  représentation de fonction affine est-elle attendue ? À harmoniser avec la future
  fiche 3e-math-fonctions.
- §9 ANALYSE-SYNTHÈSE : exigé (l. 642), non défini par le texte. Retenu : « conditions
  nécessaires, puis vérification ». Le vocabulaire est-il exigible des élèves en 3e, ou
  la pratique reste-t-elle implicite ? Point le plus incertain de la fiche.
- §3 CONDITIONS D'EXISTENCE : le texte parle de « rapports » sans mentionner les valeurs
  interdites. J'ai écrit les « pour x ≠ … », nécessaires mathématiquement. Exigibles ?
- IDENTITÉ DE SOPHIE GERMAIN (l. 644) : « prolongement possible », hors objectifs
  d'apprentissage. Non traitée ; pourrait faire un encadré culturel.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
