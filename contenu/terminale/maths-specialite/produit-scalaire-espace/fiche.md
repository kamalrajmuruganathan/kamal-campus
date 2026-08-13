---
id: tale-spe-math-produit-scalaire-espace
titre: "Produit scalaire, orthogonalité et géométrie repérée dans l'espace"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 15
prerequis:
  - Vecteurs, droites et plans de l'espace (Terminale spé — chapitre « Vecteurs, droites et plans de l'espace »)
  - Produit scalaire dans le plan (Première spé)
  - Colinéarité et bases de l'espace (Terminale spé)
statut: brouillon
relu_par: null
---

# Produit scalaire, orthogonalité et géométrie repérée dans l'espace

> Dans le plan, le produit scalaire mesurait des angles et des longueurs. Dans
> l'espace, il fait exactement la même chose — mais il te donne en plus l'outil qui
> manquait : un **vecteur normal** pour décrire un plan par une équation, et une
> **projection orthogonale** pour calculer des distances. Tout le chapitre tient dans
> ce prolongement.

Ce chapitre suppose acquis le chapitre **« Vecteurs, droites et plans de l'espace »** :
combinaisons linéaires, vecteurs directeurs, bases et repères. On y ajoute une seule
idée nouvelle, l'**orthogonalité**, et on en tire toute la géométrie repérée.

---

## 1. Produit scalaire dans l'espace

### Définition

Le produit scalaire de deux vecteurs $\vec{u}$ et $\vec{v}$ de l'espace, noté
$\vec{u}\cdot\vec{v}$, est un **nombre réel**. On peut le définir par les longueurs et
l'angle $\theta$ entre les deux vecteurs :

$$\boxed{\vec{u}\cdot\vec{v} = \|\vec{u}\|\times\|\vec{v}\|\times\cos\theta}$$

Deux vecteurs de l'espace sont toujours **coplanaires** (on peut toujours les
représenter à partir d'un même point dans un même plan) : le produit scalaire de
l'espace se ramène donc à celui du plan que tu connais depuis la Première.

> **Exemple.** Si $\|\vec{u}\|=2$, $\|\vec{v}\|=3$ et $\theta=60°$, alors
> $\vec{u}\cdot\vec{v}=2\times 3\times\cos 60°=6\times\tfrac12=3$.

### Cas du vecteur nul

Si $\vec{u}=\vec{0}$ ou $\vec{v}=\vec{0}$, alors $\vec{u}\cdot\vec{v}=0$ par convention :
l'angle n'est plus défini, mais la longueur nulle rend le produit nul.

---

## 2. Propriétés : symétrie et bilinéarité

Le produit scalaire est **symétrique** et **bilinéaire**. Retiens ces deux mots : ils
autorisent à développer les produits scalaires comme des produits ordinaires.

**Symétrie** — l'ordre n'a aucune importance :

$$\boxed{\vec{u}\cdot\vec{v}=\vec{v}\cdot\vec{u}}$$

> **Exemple.** $\vec{AB}\cdot\vec{AC}=\vec{AC}\cdot\vec{AB}$ : tu peux toujours
> permuter.

**Bilinéarité** — on développe et on sort les nombres :

$$\vec{u}\cdot(\vec{v}+\vec{w})=\vec{u}\cdot\vec{v}+\vec{u}\cdot\vec{w}
\qquad (k\vec{u})\cdot\vec{v}=k(\vec{u}\cdot\vec{v})$$

> **Exemple.** $\vec{u}\cdot(2\vec{v}+\vec{w})=2\,\vec{u}\cdot\vec{v}+\vec{u}\cdot\vec{w}$.
> On traite $\vec{u}\cdot\vec{v}$ comme un bloc, et le facteur $2$ ressort.

**Lien norme / produit scalaire** — le produit d'un vecteur par lui-même donne le carré
de sa norme :

$$\boxed{\vec{u}\cdot\vec{u}=\|\vec{u}\|^2}$$

> **Exemple.** Si $\|\vec{u}\|=5$, alors $\vec{u}\cdot\vec{u}=25$.

---

## 3. Orthogonalité et sa caractérisation

Deux vecteurs sont **orthogonaux** lorsqu'ils sont portés par des directions
perpendiculaires. La caractérisation par le produit scalaire est **le** critère de
calcul du chapitre :

$$\boxed{\vec{u}\perp\vec{v}\iff\vec{u}\cdot\vec{v}=0}$$

En effet, si $\vec{u}$ et $\vec{v}$ sont non nuls, $\vec{u}\cdot\vec{v}=0$ équivaut à
$\cos\theta=0$, c'est-à-dire $\theta=90°$. Le vecteur nul est orthogonal à tout vecteur.

> **Exemple.** Pour montrer que $\vec{AB}$ et $\vec{CD}$ sont orthogonaux, il suffit de
> calculer $\vec{AB}\cdot\vec{CD}$ et de trouver $0$.

**Deux mots de vocabulaire à ne pas confondre :**

- **Orthogonales** : deux droites de l'espace sont *orthogonales* si leurs vecteurs
  directeurs sont orthogonaux — même si elles ne se coupent pas.
- **Perpendiculaires** : deux droites *perpendiculaires* sont orthogonales **et**
  sécantes (elles se croisent).

> ⚠️ Dans l'espace, deux droites peuvent être orthogonales **sans** se couper. Dans le
> plan, la distinction n'existait pas.

---

## 4. Base orthonormée et expression en coordonnées

Une **base orthonormée** $(\vec{i},\vec{j},\vec{k})$ est formée de trois vecteurs de
norme $1$, deux à deux orthogonaux. Un **repère orthonormé** $(O;\vec{i},\vec{j},\vec{k})$
en découle. C'est le cadre dans lequel tous les calculs deviennent simples.

Dans une base orthonormée, si $\vec{u}\begin{pmatrix}x\\y\\z\end{pmatrix}$ et
$\vec{v}\begin{pmatrix}x'\\y'\\z'\end{pmatrix}$ :

$$\boxed{\vec{u}\cdot\vec{v}=xx'+yy'+zz'}$$

> **Exemple.** $\vec{u}\begin{pmatrix}1\\2\\-1\end{pmatrix}$ et
> $\vec{v}\begin{pmatrix}3\\0\\2\end{pmatrix}$ :
> $\vec{u}\cdot\vec{v}=1\times 3+2\times 0+(-1)\times 2=3+0-2=1$.

**Norme d'un vecteur** — c'est la racine du produit scalaire par lui-même :

$$\boxed{\|\vec{u}\|=\sqrt{x^2+y^2+z^2}}$$

> **Exemple.** $\vec{u}\begin{pmatrix}2\\-1\\2\end{pmatrix}$ :
> $\|\vec{u}\|=\sqrt{4+1+4}=\sqrt{9}=3$.

**Distance entre deux points** — pour $A(x_A,y_A,z_A)$ et $B(x_B,y_B,z_B)$, c'est la
norme de $\vec{AB}$ :

$$\boxed{AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}}$$

> **Exemple.** $A(1,0,2)$ et $B(3,1,4)$ :
> $AB=\sqrt{2^2+1^2+2^2}=\sqrt{4+1+4}=3$.

> **Test rapide d'orthogonalité en coordonnées.** $\vec{u}\begin{pmatrix}1\\2\\1\end{pmatrix}$
> et $\vec{v}\begin{pmatrix}2\\-1\\0\end{pmatrix}$ :
> $1\times2+2\times(-1)+1\times0=0$ → ils sont orthogonaux.

---

## 5. Développement de $\|\vec{u}+\vec{v}\|^2$ et polarisation

En développant $\|\vec{u}+\vec{v}\|^2=(\vec{u}+\vec{v})\cdot(\vec{u}+\vec{v})$ par
bilinéarité :

$$\boxed{\|\vec{u}+\vec{v}\|^2=\|\vec{u}\|^2+2\,\vec{u}\cdot\vec{v}+\|\vec{v}\|^2}$$
$$\|\vec{u}-\vec{v}\|^2=\|\vec{u}\|^2-2\,\vec{u}\cdot\vec{v}+\|\vec{v}\|^2$$

> **Exemple.** Avec $\|\vec{u}\|=3$, $\|\vec{v}\|=4$ et $\vec{u}\cdot\vec{v}=5$ :
> $\|\vec{u}+\vec{v}\|^2=9+2\times5+16=35$, donc $\|\vec{u}+\vec{v}\|=\sqrt{35}$.

**Formules de polarisation** — elles font l'inverse : elles donnent le produit scalaire
à partir des normes. Utiles quand on connaît des longueurs mais pas de coordonnées.

$$\boxed{\vec{u}\cdot\vec{v}=\tfrac12\left(\|\vec{u}+\vec{v}\|^2-\|\vec{u}\|^2-\|\vec{v}\|^2\right)}$$
$$\vec{u}\cdot\vec{v}=\tfrac12\left(\|\vec{u}\|^2+\|\vec{v}\|^2-\|\vec{u}-\vec{v}\|^2\right)
\qquad\vec{u}\cdot\vec{v}=\tfrac14\left(\|\vec{u}+\vec{v}\|^2-\|\vec{u}-\vec{v}\|^2\right)$$

> **Exemple.** Si $\|\vec{u}\|=2$, $\|\vec{v}\|=3$ et $\|\vec{u}+\vec{v}\|=4$ :
> $\vec{u}\cdot\vec{v}=\tfrac12(16-4-9)=\tfrac32$.

---

## 6. Vecteur normal à un plan

C'est **la** nouveauté qui débloque toute la géométrie repérée.

### Définition

Un vecteur $\vec{n}$ non nul est **normal** à un plan $\mathcal{P}$ s'il est orthogonal
à **tous** les vecteurs directeurs de ce plan.

### Propriété-clé (à mémoriser)

Il suffit de vérifier l'orthogonalité avec **deux vecteurs directeurs non colinéaires**
du plan :

$$\boxed{\vec{n}\text{ normal à }\mathcal{P}\iff\vec{n}\cdot\vec{u}=0\ \text{ et }\ \vec{n}\cdot\vec{v}=0}$$

pour $\vec{u},\vec{v}$ deux vecteurs non colinéaires dirigeant $\mathcal{P}$.

> **Exemple.** Un plan est dirigé par $\vec{u}\begin{pmatrix}1\\0\\1\end{pmatrix}$ et
> $\vec{v}\begin{pmatrix}0\\1\\-1\end{pmatrix}$. Cherchons $\vec{n}\begin{pmatrix}a\\b\\c\end{pmatrix}$
> tel que $\vec{n}\cdot\vec{u}=0$ et $\vec{n}\cdot\vec{v}=0$ :
> $$a+c=0\qquad b-c=0.$$
> En choisissant $c=1$ : $a=-1$, $b=1$. Donc $\vec{n}\begin{pmatrix}-1\\1\\1\end{pmatrix}$
> convient.

### Plan défini par un point et un vecteur normal

Étant donnés un point $A$ et un vecteur non nul $\vec{n}$, il existe **un seul** plan
passant par $A$ et normal à $\vec{n}$. Un point $M$ lui appartient si et seulement si :

$$\boxed{M\in\mathcal{P}\iff\vec{AM}\cdot\vec{n}=0}$$

> **Exemple.** C'est cette caractérisation qui va donner l'équation cartésienne du plan
> (section 9).

---

## 7. Projeté orthogonal et distances

### Projeté orthogonal d'un point

- Le **projeté orthogonal** de $M$ sur une droite $d$ est le point $H$ de $d$ tel que
  $\vec{MH}$ soit orthogonal à la direction de $d$.
- Le **projeté orthogonal** de $M$ sur un plan $\mathcal{P}$ est le point $H$ de
  $\mathcal{P}$ tel que $\vec{MH}$ soit **normal** à $\mathcal{P}$ (donc colinéaire à
  $\vec{n}$).

### Propriété : le projeté réalise la distance minimale

Parmi tous les points de la droite (ou du plan), le projeté orthogonal $H$ est celui le
**plus proche** de $M$. La distance de $M$ à la droite (ou au plan) est donc :

$$\boxed{d(M,\mathcal{P})=MH}\qquad\text{avec }H\text{ le projeté orthogonal de }M.$$

> **Pourquoi c'est le plus court.** Pour tout autre point $K$, le triangle $MHK$ est
> rectangle en $H$, donc $MK^2=MH^2+HK^2\geqslant MH^2$ : dès que $K\neq H$, $MK>MH$.

---

## 8. Plans perpendiculaires

Deux plans sont **perpendiculaires** lorsque leurs vecteurs normaux sont orthogonaux.

$$\boxed{\mathcal{P}\perp\mathcal{P}'\iff\vec{n}\cdot\vec{n'}=0}$$

où $\vec{n}$ et $\vec{n'}$ sont des vecteurs normaux respectifs.

> **Exemple.** $\vec{n}\begin{pmatrix}1\\1\\0\end{pmatrix}$ et
> $\vec{n'}\begin{pmatrix}1\\-1\\3\end{pmatrix}$ :
> $\vec{n}\cdot\vec{n'}=1-1+0=0$ → les deux plans sont perpendiculaires.

> ⚠️ **Ne confonds pas.** Deux plans dont les normaux sont *colinéaires* sont
> **parallèles**, pas perpendiculaires. Perpendiculaire ↔ produit scalaire nul ;
> parallèle ↔ normaux colinéaires.

---

## 9. Représentation paramétrique d'une droite

Une droite $d$ passant par $A(x_A,y_A,z_A)$ et de vecteur directeur
$\vec{u}\begin{pmatrix}a\\b\\c\end{pmatrix}$ est l'ensemble des points $M$ tels que
$\vec{AM}=t\,\vec{u}$ avec $t\in\mathbb{R}$. En coordonnées :

$$\boxed{\begin{cases}x=x_A+ta\\ y=y_A+tb\\ z=z_A+tc\end{cases}\quad t\in\mathbb{R}}$$

Le réel $t$ est le **paramètre** : à chaque valeur de $t$ correspond un point de la
droite.

> **Exemple.** Droite passant par $A(1,2,0)$ et dirigée par $\vec{u}\begin{pmatrix}2\\-1\\3\end{pmatrix}$ :
> $$\begin{cases}x=1+2t\\ y=2-t\\ z=3t\end{cases}$$
> Pour $t=1$, on obtient le point $(3,1,3)$.

**Reconnaître une droite donnée sous forme paramétrique** : le point $A$ se lit dans les
constantes, le vecteur directeur $\vec{u}$ dans les **coefficients du paramètre**.

> **Exemple.** $\begin{cases}x=4-t\\ y=1\\ z=2+t\end{cases}$ : point $A(4,1,2)$, vecteur
> directeur $\vec{u}\begin{pmatrix}-1\\0\\1\end{pmatrix}$.

---

## 10. Équation cartésienne d'un plan

### Le résultat

Tout plan de l'espace admet une **équation cartésienne** de la forme :

$$\boxed{ax+by+cz+d=0}\qquad\text{où }\vec{n}\begin{pmatrix}a\\b\\c\end{pmatrix}\text{ est un vecteur normal.}$$

Réciproquement, toute équation $ax+by+cz+d=0$ (avec $(a,b,c)\neq(0,0,0)$) est celle d'un
plan de vecteur normal $\vec{n}\begin{pmatrix}a\\b\\c\end{pmatrix}$ : les **coefficients
de $x,y,z$ sont directement les coordonnées d'un vecteur normal**.

### Méthode : équation à partir d'un point et d'un vecteur normal

1. Écris $M\in\mathcal{P}\iff\vec{AM}\cdot\vec{n}=0$.
2. Développe : $a(x-x_A)+b(y-y_A)+c(z-z_A)=0$.
3. Regroupe sous la forme $ax+by+cz+d=0$, avec $d=-(ax_A+by_A+cz_A)$.

> **Exemple.** Plan passant par $A(1,2,-1)$ et normal à $\vec{n}\begin{pmatrix}3\\-1\\2\end{pmatrix}$ :
> $$3(x-1)-1(y-2)+2(z+1)=0$$
> $$3x-y+2z+(-3+2+2)=0\ \Longrightarrow\ 3x-y+2z+1=0.$$

> **Vérification** que $A$ est dans le plan : $3(1)-2+2(-1)+1=3-2-2+1=0$ ✓

---

## 11. Projeté orthogonal en coordonnées

### Projeté d'un point $M$ sur un plan $\mathcal{P}:ax+by+cz+d=0$

$\vec{n}\begin{pmatrix}a\\b\\c\end{pmatrix}$ est normal au plan. La droite passant par
$M$ dirigée par $\vec{n}$ a pour équation paramétrique $x=x_M+ta$, etc. On cherche la
valeur de $t$ pour laquelle ce point tombe dans $\mathcal{P}$ : on **remplace** dans
l'équation du plan et on résout en $t$. Le point obtenu est le projeté $H$.

> **Exemple.** $M(1,1,1)$, plan $\mathcal{P}:x+y+z-6=0$, $\vec{n}\begin{pmatrix}1\\1\\1\end{pmatrix}$.
> Droite : $x=1+t,\ y=1+t,\ z=1+t$. On injecte :
> $(1+t)+(1+t)+(1+t)-6=0\Rightarrow 3+3t-6=0\Rightarrow t=1$.
> Donc $H(2,2,2)$, et $d(M,\mathcal{P})=MH=\sqrt{1^2+1^2+1^2}=\sqrt{3}$.

### Projeté d'un point $M$ sur une droite $d$ de point $A$ et directeur $\vec{u}$

On écrit $H=A+t\,\vec{u}$ (point courant de $d$) et on impose $\vec{MH}\cdot\vec{u}=0$.
On résout en $t$, on obtient $H$, puis $d(M,d)=MH$.

> **Exemple.** $M(0,0,0)$, droite passant par $A(1,0,0)$ dirigée par $\vec{u}\begin{pmatrix}0\\1\\0\end{pmatrix}$.
> $H(1,t,0)$, $\vec{MH}\begin{pmatrix}1\\t\\0\end{pmatrix}$, $\vec{MH}\cdot\vec{u}=t=0$.
> Donc $H(1,0,0)=A$ et $d(M,d)=1$.

---

## 12. Traduire une configuration par un système linéaire

Dans un repère, beaucoup de questions de configuration se ramènent à **résoudre un
système d'équations linéaires** :

| Question | Traduction |
|---|---|
| Trois vecteurs forment-ils une base ? | le système « $\alpha\vec{u}+\beta\vec{v}+\gamma\vec{w}=\vec{0}$ » n'a que la solution nulle |
| Coordonnées d'un vecteur dans une base | résoudre $\vec{w}=\alpha\vec{u}+\beta\vec{v}+\gamma\vec{t}$ |
| Point d'intersection droite / plan | injecter la paramétrique dans l'équation du plan |
| Intersection de deux plans | résoudre le système des deux équations cartésiennes |
| Alignement, coplanarité, parallélisme | colinéarité ⇒ proportionnalité des coordonnées |

> **Exemple (intersection droite/plan).** Droite $x=t,\ y=1+t,\ z=2-t$ et plan
> $x+y+z-3=0$. On injecte : $t+(1+t)+(2-t)-3=0\Rightarrow t=0$. Un seul point
> d'intersection : $(0,1,2)$.

> **Interprétation géométrique des solutions.** Un système peut avoir **une** solution
> (droite et plan sécants), **aucune** solution (droite parallèle au plan, non incluse)
> ou une **infinité** (droite incluse dans le plan). Toujours conclure par une phrase
> géométrique.

---

## 13. Tableau récapitulatif

| Notion | Formule à connaître |
|---|---|
| Produit scalaire (angle) | $\vec{u}\cdot\vec{v}=\|\vec{u}\|\,\|\vec{v}\|\cos\theta$ |
| En base orthonormée | $\vec{u}\cdot\vec{v}=xx'+yy'+zz'$ |
| Norme | $\|\vec{u}\|=\sqrt{x^2+y^2+z^2}$ |
| Distance | $AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$ |
| Orthogonalité | $\vec{u}\perp\vec{v}\iff\vec{u}\cdot\vec{v}=0$ |
| Développement | $\|\vec{u}+\vec{v}\|^2=\|\vec{u}\|^2+2\vec{u}\cdot\vec{v}+\|\vec{v}\|^2$ |
| Polarisation | $\vec{u}\cdot\vec{v}=\tfrac12(\|\vec{u}+\vec{v}\|^2-\|\vec{u}\|^2-\|\vec{v}\|^2)$ |
| Vecteur normal | $\vec{n}\cdot\vec{u}=0$ et $\vec{n}\cdot\vec{v}=0$ ($\vec{u},\vec{v}$ non colinéaires) |
| Plan (point + normal) | $\vec{AM}\cdot\vec{n}=0$ |
| Équation cartésienne | $ax+by+cz+d=0$, normal $\vec{n}(a,b,c)$ |
| Paramétrique de droite | $x=x_A+ta,\ y=y_A+tb,\ z=z_A+tc$ |
| Plans perpendiculaires | $\vec{n}\cdot\vec{n'}=0$ |
| Distance point → plan/droite | $d=MH$, $H$ projeté orthogonal |

---

## 14. Les erreurs qui coûtent des points

1. **Croire que le produit scalaire est un vecteur.** $\vec{u}\cdot\vec{v}$ est un
   **nombre**. Écrire « $\vec{u}\cdot\vec{v}\begin{pmatrix}\dots\end{pmatrix}$ » n'a
   aucun sens.
2. **Confondre orthogonal et perpendiculaire.** Dans l'espace, deux droites peuvent être
   orthogonales sans se couper ; perpendiculaires = orthogonales **et** sécantes.
3. **Confondre parallèle et perpendiculaire pour deux plans.** Normaux *colinéaires* →
   plans **parallèles** ; normaux *orthogonaux* (produit scalaire nul) → plans
   **perpendiculaires**.
4. **Oublier la racine carrée dans la norme**, ou l'oublier dans la distance : $\sqrt{9}=3$,
   pas $9$.
5. **Lire le vecteur normal dans une paramétrique**, ou le directeur dans une équation
   cartésienne. Dans $ax+by+cz+d=0$, $(a,b,c)$ est le vecteur **normal** ; dans une
   paramétrique, les coefficients de $t$ donnent le vecteur **directeur**.
6. **Oublier de conclure par une phrase géométrique** après avoir résolu un système : un
   nombre de solutions se traduit toujours par une position relative (sécants, parallèles,
   confondus, inclus…).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt
- Section « ALGÈBRE ET GÉOMÉTRIE — ORTHOGONALITÉ ET DISTANCES DANS L'ESPACE »
  (lignes 83 à 107).
- Section « ALGÈBRE ET GÉOMÉTRIE — REPRÉSENTATIONS PARAMÉTRIQUES ET ÉQUATIONS
  CARTÉSIENNES » (lignes 110 à 129).
- En-tête de provenance du fichier (lignes 1 à 20).

⚠️ MENTION OBLIGATOIRE 1 — PROVENANCE DE LA SOURCE : ce texte de programme n'a PAS
été produit par la chaîne d'extraction habituelle. Le proxy du sandbox bloquant le
téléchargement du PDF, il a été reconstitué via l'outil WebFetch depuis le miroir
xm1math.net (term_gen_spe.pdf), rubrique par rubrique. AVANT TOUTE PUBLICATION, cette
extraction doit être CONFRONTÉE AU PDF OFFICIEL (education.gouv.fr / éduscol) par le
relecteur : la reproduction verbatim n'est pas garantie exhaustive.

⚠️ MENTION OBLIGATOIRE 2 — CALENDRIER : ce chapitre de TERMINALE est produit sur le
programme applicable à la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE L'UTILISATEUR. Le
gabarit (docs/gabarit-chapitre.md, §6) déconseille d'écrire pour la Terminale avant
2027 ; la demande utilisateur lève cette réserve pour ce programme déjà publié. À
confirmer au relecteur que ce contenu est bien destiné à la rentrée 2027.

PÉRIMÈTRE / POINTS À TRANCHER PAR LE RELECTEUR :
- La FORMULE explicite de distance point-plan d = |ax_M+by_M+cz_M+d| / √(a²+b²+c²)
  n'a PAS été donnée comme formule à mémoriser : le programme demande d'utiliser la
  PROJECTION ORTHOGONALE pour la distance (capacité attendue, ligne 100-101). J'ai
  donc traité la distance uniquement par la méthode du projeté. À confirmer : faut-il
  ajouter la formule directe en complément hors-programme ?
- La démonstration « le projeté réalise la distance minimale » (section 7) est donnée
  de façon intuitive (Pythagore) ; le programme ne la liste pas comme démonstration
  exigible. À valider comme complément pédagogique.
- Vocabulaire « orthogonales / perpendiculaires » pour les droites de l'espace :
  distinction insistée car classiquement source d'erreurs ; vérifier qu'elle est
  formulée conformément aux attentes du BO.
- Le « plan médiateur de deux points » (lieu géométrique, ligne 107) n'a pas été
  développé faute de place ; il pourrait faire l'objet d'un exercice. À signaler.
- Prérequis « Vecteurs, droites et plans de l'espace » cité comme chapitre de
  Terminale : ce chapitre n'existe pas encore dans contenu/terminale/maths-specialite/
  au moment de la production. À créer / relier.

LONGUEUR : fiche dense (~environ 370 lignes avec le LaTeX), au-dessus de la cible de
180-280 lignes du gabarit. Choix ASSUMÉ et SIGNALÉ : la consigne annonce « un gros
chapitre, reste dense mais complet ». Le dépassement vient surtout des blocs LaTeX en
display (une formule = plusieurs lignes) et des deux sections de programme réunies. Si
le relecteur préfère respecter la borne, pistes de coupe : fusionner les §11 et §12,
alléger le tableau §13.

Rédaction 100 % originale à partir du seul programme officiel. Aucun emprunt à un
manuel ou à un site de cours.
Statut : brouillon, non relu.
-->
