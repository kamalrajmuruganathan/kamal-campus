---
id: 3e-math-translations-vecteurs
titre: "Translations et vecteurs"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Parallélogrammes — propriétés caractéristiques et diagonales (5e)
  - Symétrie axiale et demi-tour (5e)
  - Translation — effet et propriétés de conservation (4e)
  - Lien translation / parallélogramme (4e)
statut: brouillon
relu_par: null
---

# Translations et vecteurs

> En 4e, tu savais **reconnaître** une translation : un glissement, le même pour tous
> les points. Cette année, tu apprends à l'**écrire**. Un déplacement — direction,
> sens, longueur — devient un objet qu'on note, qu'on compare, et même qu'on
> **additionne** : le **vecteur**. C'est l'outil que tu utiliseras jusqu'au lycée.

---

## 1. La translation, enfin définie

En 4e, la translation était décrite par son **effet** : tout glisse pareil. C'était
une image. Voici maintenant la **définition**, point par point.

> **Définition.** Soient $A$ et $B$ deux points. La **translation qui transforme
> $A$ en $B$** associe à tout point $M$ du plan l'unique point $M'$ tel que
> $$\boxed{ABM'M \text{ est un parallélogramme}}$$

Autrement dit : pour trouver l'image de $M$, tu **fermes le parallélogramme**.

> **⚠️ L'ordre des lettres.** C'est $ABM'M$ : on parcourt le contour
> $A \to B \to M' \to M \to A$. Les côtés « glissés » $[AB]$ et $[MM']$ sont
> **opposés** dans la figure, jamais consécutifs.

> **Exemple.** Si $ABM'M$ est un parallélogramme, alors $MM' = AB$ et
> $(MM') \parallel (AB)$ : on retrouve exactement le glissement de la 4e, et toutes
> les conservations (longueurs, angles, aires, alignement) restent vraies.

---

## 2. Le vecteur

Une même translation peut être décrite par une infinité de couples de points : la
translation qui transforme $A$ en $B$ est aussi celle qui transforme $M$ en $M'$.
Ce qui compte, ce n'est donc pas le couple choisi, c'est le **déplacement**
lui-même. On lui donne un nom : le **vecteur**.

> **Définition.** Le **vecteur** $\overrightarrow{AB}$ est le déplacement qui mène de
> $A$ à $B$. Il est entièrement décrit par **trois** données :

| Caractéristique | Ce que c'est |
|---|---|
| **Direction** | celle de la droite $(AB)$ |
| **Sens** | de $A$ vers $B$ |
| **Longueur** | la longueur $AB$ |

$A$ est l'**origine** du vecteur, $B$ son **extrémité** ; on le dessine par une
flèche de $A$ vers $B$. On dit désormais « la **translation de vecteur**
$\overrightarrow{AB}$ » — c'est la même chose que « la translation qui transforme
$A$ en $B$ ».

> ⚠️ **Direction et sens ne sont pas la même chose.** La direction, c'est la droite
> (« celle de $(AB)$ »). Le sens, c'est le choix parmi les deux possibles sur cette
> droite (« vers la droite »). Deux vecteurs peuvent avoir la même direction et des
> sens **opposés**.

---

## 3. Deux vecteurs égaux

C'est le cœur du chapitre.

> **Définition.** Deux vecteurs sont **égaux** lorsqu'ils ont **même direction,
> même sens et même longueur**.

Les trois conditions à la fois : il en manque une, l'égalité est fausse.

### La traduction géométrique

$$\boxed{\overrightarrow{AB} = \overrightarrow{CD} \iff ABDC \text{ est un parallélogramme}}$$

Le symbole $\iff$ se lit **« si et seulement si »** : les deux phrases sont vraies
ensemble, ou fausses ensemble. Tu peux donc t'en servir dans **les deux sens** :
pour démontrer une égalité de vecteurs, comme pour démontrer qu'une figure est un
parallélogramme.

> **⚠️ $ABDC$, pas $ABCD$ !** C'est le piège numéro un de la 3e.
>
> | Écriture | Ce que ça donne |
> |---|---|
> | $ABDC$ | contour $A \to B \to D \to C \to A$ ✅ |
> | $ABCD$ | quadrilatère **croisé** ❌ |
>
> **Le réflexe qui sauve** : $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont les
> deux flèches, donc $[AB]$ et $[CD]$ sont des **côtés opposés**. Dans $ABDC$, les
> **diagonales** sont $[AD]$ et $[BC]$.
>
> **Le contrôle de secours** : $\overrightarrow{AB} = \overrightarrow{CD}$ équivaut
> aussi à « $[AD]$ et $[BC]$ ont le même milieu ».

> **Exemple.** $ABDC$ est un parallélogramme. Alors $\overrightarrow{AB} =
> \overrightarrow{CD}$, mais aussi $\overrightarrow{AC} = \overrightarrow{BD}$ —
> un parallélogramme donne **deux** égalités de vecteurs, une par paire de côtés
> opposés.

Remarque : $\overrightarrow{AB} = \overrightarrow{CD}$ ne dit **pas** que $A = C$ et
$B = D$. Un vecteur ne retient que le déplacement, pas l'endroit d'où on part — c'est
ce qui le distingue d'un segment.

---

## 4. Vecteur nul, vecteurs opposés

### Le vecteur nul

$$\overrightarrow{AA} = \vec{0}$$

C'est le déplacement qui ne déplace rien : la translation de vecteur $\vec{0}$ laisse
chaque point à sa place. Sa longueur vaut $0$, et sa direction n'est pas définie.

> **Exemple.** $\overrightarrow{MM} = \vec 0$ pour n'importe quel point $M$ : tous les
> vecteurs nuls sont égaux entre eux.

### L'opposé d'un vecteur

$$\boxed{\overrightarrow{BA} = -\overrightarrow{AB}}$$

Même direction, même longueur, mais **sens contraire** : c'est le déplacement qui
défait le premier.

> **Exemple.** Si $\overrightarrow{AB}$ mesure $5$ cm vers la droite, alors
> $\overrightarrow{BA}$ mesure $5$ cm vers la gauche.

---

## 5. Additionner deux vecteurs

### L'idée : enchaîner deux translations

Applique la translation de vecteur $\overrightarrow{AB}$, puis celle de vecteur
$\overrightarrow{BC}$. Tu es parti de $A$, tu es arrivé en $C$ : le résultat est la
translation de vecteur $\overrightarrow{AC}$. On écrit cet enchaînement comme une
**somme**.

### La relation de Chasles

$$\boxed{\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}}$$

> **La règle en un mot** : l'extrémité du premier doit être l'origine du second — et
> ce point commun **disparaît**.

> **Exemple.** $\overrightarrow{EF} + \overrightarrow{FG} = \overrightarrow{EG}$ ·
> $\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec 0$, ce qui
> redit que $\overrightarrow{BA}$ est l'opposé de $\overrightarrow{AB}$.

> ⚠️ $\overrightarrow{AB} + \overrightarrow{CD}$ ne se simplifie **pas** : il n'y a
> pas de point commun. Il faut d'abord remplacer $\overrightarrow{CD}$ par un vecteur
> qui lui est **égal** et qui part de $B$.

### Additionner deux vecteurs de même origine

Si les deux vecteurs partent du même point, on ferme le parallélogramme :

$$\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC} \quad
\text{où } ABCD \text{ est un parallélogramme}$$

> **Pourquoi ça marche.** $ABCD$ parallélogramme donne $\overrightarrow{AD} =
> \overrightarrow{BC}$. Donc $\overrightarrow{AB} + \overrightarrow{AD} =
> \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ par Chasles.
>
> ⚠️ **Ici l'ordre des lettres est $ABCD$**, parce que les deux vecteurs partent du
> **même point**. Ce n'est pas la même situation qu'au § 3.

---

## 6. Méthodes

### Construire l'image de $M$ par la translation de vecteur $\overrightarrow{AB}$

| Support | Comment faire |
|---|---|
| **Sur quadrillage** | compte le déplacement de $A$ vers $B$, refais-le à l'identique à partir de $M$ |
| **Sur feuille blanche** | ferme le parallélogramme $ABM'M$ : parallèle à $(AB)$ par $M$, puis report de $AB$ au compas, **dans le sens $A \to B$** |

> ⚠️ Le compas donne la bonne longueur mais **deux** points possibles. C'est le
> **sens** qui tranche.

### Démontrer que deux vecteurs sont égaux

Tu as deux voies. Choisis selon ce que l'énoncé te donne.

| L'énoncé te donne… | Tu démontres… |
|---|---|
| un **parallélogramme** $ABDC$ | $\overrightarrow{AB} = \overrightarrow{CD}$ directement |
| des **milieux**, des **longueurs**, du **parallélisme** | d'abord que $ABDC$ est un parallélogramme (5e), puis l'égalité |
| une **translation** ($D$ image de $C$) | $\overrightarrow{CD} = \overrightarrow{AB}$, par définition |

### Démontrer qu'un quadrilatère est un parallélogramme

C'est le sens inverse, et il rend le vecteur vraiment utile :

> **Modèle rédigé.** *Montrer que $ABDC$ est un parallélogramme.*
>
> **Je sais que** $\overrightarrow{AB} = \overrightarrow{CD}$.
> **Or** si $\overrightarrow{AB} = \overrightarrow{CD}$, alors $ABDC$ est un
> parallélogramme.
> **Donc** $ABDC$ est un parallélogramme. ∎

### Simplifier une somme de vecteurs

1. Repère les points communs (extrémité de l'un = origine du suivant).
2. Applique Chasles, le point commun disparaît.
3. Recommence tant que c'est possible.

> **Exemple.** $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD}
> = \overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}$.
>
> Et $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA}
> = \overrightarrow{AC} + \overrightarrow{CA} = \overrightarrow{AA} = \vec 0$ :
> une somme qui **revient au départ** vaut le vecteur nul.

---

## 7. Cas particuliers et pièges

### Quand $A$, $B$ et $C$ sont alignés

L'égalité $\overrightarrow{AB} = \overrightarrow{CD}$ garde tout son sens, mais la
figure $ABDC$ est un parallélogramme **aplati** : les quatre points sont sur une même
droite, il n'y a plus d'intérieur. C'est pourquoi l'énoncé de la propriété suppose en
général les points **non alignés**.

### Quand $A = B$

La translation de vecteur $\overrightarrow{AA} = \vec 0$ ne bouge rien : chaque point
est sa propre image. C'est la seule translation qui possède des points invariants —
et elle les a **tous**.

### Vecteur, segment, droite : trois objets différents

| Objet | Notation | $A$ et $B$ échangés ? |
|---|---|---|
| Droite | $(AB)$ | même objet |
| Segment | $[AB]$ | même objet |
| Longueur | $AB$ | même nombre |
| **Vecteur** | $\overrightarrow{AB}$ | **objet opposé** |

### Égalité de longueurs $\ne$ égalité de vecteurs

$AB = CD$ ne donne **pas** $\overrightarrow{AB} = \overrightarrow{CD}$ : deux segments
de même longueur peuvent être de travers l'un par rapport à l'autre. Il faut aussi la
direction **et** le sens.

---

## 8. À retenir absolument

| | |
|---|---|
| Définition de la translation | image $M'$ de $M$ : $ABM'M$ parallélogramme |
| Vecteur | direction · sens · longueur |
| Égalité | $\overrightarrow{AB} = \overrightarrow{CD} \iff ABDC$ parallélogramme |
| Ordre des lettres | $ABDC$ — **jamais** $ABCD$ |
| Diagonales de $ABDC$ | $[AD]$ et $[BC]$ |
| Vecteur nul | $\overrightarrow{AA} = \vec 0$ |
| Opposé | $\overrightarrow{BA} = -\overrightarrow{AB}$ |
| Chasles | $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ |
| Somme de même origine | $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$, $ABCD$ parallélogramme |
| Un aller-retour | $\overrightarrow{AB} + \overrightarrow{BA} = \vec 0$ |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire $ABCD$ au lieu de $ABDC$.** L'erreur numéro un du chapitre.
   $\overrightarrow{AB} = \overrightarrow{CD}$ donne le parallélogramme $ABDC$ ;
   $ABCD$ est un quadrilatère **croisé**, et toute la démonstration s'effondre.
   Contrôle : dans $ABDC$, les diagonales sont $[AD]$ et $[BC]$ — si tu écris $[AC]$
   et $[BD]$, tu t'es trompé de figure.
2. **Confondre direction et sens.** $\overrightarrow{AB}$ et $\overrightarrow{BA}$ ont
   la même direction ; ils ne sont **pas** égaux, ils sont opposés.
3. **Croire que $\overrightarrow{AB} = \overrightarrow{CD}$ dès que $AB = CD$.**
   L'égalité de deux vecteurs exige les **trois** conditions, pas seulement la
   longueur.
4. **Appliquer Chasles sans point commun.** $\overrightarrow{AB} +
   \overrightarrow{CD}$ ne se simplifie pas. Il faut d'abord déplacer l'un des deux.
5. **Se tromper de point qui disparaît.** Dans $\overrightarrow{AB} +
   \overrightarrow{BC}$, c'est $B$ qui saute : le résultat est $\overrightarrow{AC}$,
   surtout pas $\overrightarrow{CA}$.
6. **Traiter le vecteur comme un segment.** $[AB]$ et $[BA]$ sont le même segment,
   $\overrightarrow{AB}$ et $\overrightarrow{BA}$ sont deux vecteurs différents.
7. **Oublier le sens en construisant une image** : reporter $AB$ au compas du mauvais
   côté donne le symétrique, pas l'image.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »,
section « Troisième » (lignes 810 à 860), entrée « Translations et vecteurs »
(lignes 849 à 860).

CONTENU DE L'ENTRÉE, littéralement :
- Automatismes (l. 851) : « Mobiliser les connaissances sur la symétrie axiale, le
  demi-tour, la translation. »
- Objectifs d'apprentissage :
  · l. 853 « Définir et utiliser la translation : définition ponctuelle avec
    parallélogramme. » → § 1
  · l. 854 « Définir et utiliser les notions de vecteur, de vecteurs égaux, de vecteur
    nul, d'opposé d'un vecteur. » → § 2, § 3, § 4
  · l. 856 « Définir et utiliser la somme de deux vecteurs par enchainement de deux
    translations. » → § 5
  · l. 857 « Découvrir et utiliser la relation de Chasles. » → § 5
- Prolongements (l. 859-860) : hexagone à partir de triangles équilatéraux ; fractales
  (Von Koch, Sierpinski). NON traités : ce sont des prolongements culturels, et les
  fractales relèvent de l'homothétie, hors de cette entrée. À arbitrer.

PÉRIMÈTRE — CE QUI EST BIEN DE 3e (question posée en consigne)
La SOMME de deux vecteurs ET la relation de CHASLES sont explicitement au programme de
3e : lignes 856 et 857, vérifiées dans le fichier source. Elles sont donc traitées ici
(§ 5), et non renvoyées à la Seconde. C'est la principale nouveauté par rapport à ce
que laissaient supposer les notes de la fiche 4e « Transformations » (qui annonçait
seulement « la composée de deux translations est un objectif de 3e »).

CE QUI EST VOLONTAIREMENT LAISSÉ À LA SECONDE (cf.
contenu/seconde/maths/vecteurs/fiche.md, id 2nde-math-vecteurs) :
- coordonnées d'un vecteur dans un repère : l'entrée 3e « Repérage sur une droite et
  dans le plan » (l. 811-817) ne comporte QUE des automatismes sur les coordonnées de
  POINTS, aucun objectif sur les vecteurs. Rien n'est donc écrit en coordonnées ici.
- norme et notation ‖·‖, multiplication d'un vecteur par un réel, colinéarité et
  déterminant, milieu par les coordonnées : absents du programme de 3e.
La fiche de Seconde reprend exactement les mêmes conventions (ordre ABDC, Chasles),
la continuité est donc assurée sans recouvrement.

ARTICULATION AVEC LA 4e — POINT DIDACTIQUE STRUCTURANT
En 4e (contenu/quatrieme/maths/transformations/fiche.md et
contenu/quatrieme/maths/parallelogrammes-translations/fiche.md), la translation est
caractérisée PAR SON EFFET, le lien avec le parallélogramme étant posé comme propriété
caractéristique ADMISE, sans notation vectorielle. Le BO fait de la « définition
ponctuelle avec parallélogramme » un objectif de 3e (l. 853) : c'est donc cette fiche
qui la donne, au § 1. Les conservations (longueurs, angles, aires, alignement) ne sont
PAS reprises ici : elles sont acquises de 4e et rappelées en une phrase au § 1.

À TRANCHER PAR LE RELECTEUR
1. LA DATE DU BO. L'en-tête reprend « BO du 5 mars 2026 » (chaîne fournie en consigne
   et utilisée par toutes les fiches collège), mais ETAT.md et PASSATION.md annoncent
   « BO du 2 avril 2026 » pour le cycle 4, et aucune des deux dates n'apparaît dans le
   texte extrait. Problème déjà signalé sur les fiches 5e et 4e : à harmoniser.
2. NOTATION. J'écris $\overrightarrow{AB}$ (flèche pleine sur les deux lettres),
   comme la fiche de Seconde. Vérifier que c'est bien la notation attendue en 3e et
   qu'elle rend correctement sous KaTeX sur mobile.
3. § 5, DERNIER PARAGRAPHE — RÈGLE DU PARALLÉLOGRAMME. Le BO ne demande la somme que
   « par enchainement de deux translations » (l. 856), c'est-à-dire par Chasles. La
   somme de deux vecteurs de MÊME ORIGINE est une EXTENSION de ma part, justifiée
   parce que les exercices la réclament et qu'elle est ici DÉMONTRÉE à partir de
   Chasles. À valider ou à retirer. Attention : l'ordre des lettres y est ABCD, ce qui
   peut entrer en collision avec le « jamais ABCD » du § 3 — j'ai signalé la
   différence explicitement, mais c'est le passage le plus risqué de la fiche.
   Concerne aussi la question 9 du QCM.
4. L'OPPOSÉ est noté $-\overrightarrow{AB}$. Le signe « moins » devant un vecteur
   suppose une multiplication par $-1$, qui n'est PAS au programme de 3e. Vérifier que
   la notation est admise à ce niveau, ou s'il faut se limiter à la formulation
   « $\overrightarrow{BA}$ est l'opposé de $\overrightarrow{AB}$ ».
5. Le symbole $\iff$ : admis en 3e ? Il est ici systématiquement doublé de sa lecture
   « si et seulement si ».
6. § 7, cas aligné (« parallélogramme aplati ») : même doute qu'en 4e sur le niveau de
   précision attendu.
7. Le vecteur nul « n'a ni direction ni sens » (§ 4) : formulation usuelle mais que
   certains professeurs refusent (on dit parfois que sa direction est indéterminée).
   À trancher.

Rédaction originale à partir du seul programme officiel, qui est public. Aucun emprunt
à un manuel ni à un site de cours. Statut : brouillon, non relu.
-->
