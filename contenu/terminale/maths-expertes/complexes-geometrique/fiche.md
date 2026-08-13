---
id: tale-exp-math-complexes-geometrique
titre: "Nombres complexes — point de vue géométrique"
voie: generale
niveau: terminale
parcours: maths-expertes
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths expertes, terminale générale"
duree_lecture_min: 15
prerequis:
  - Nombres complexes — point de vue algébrique (maths expertes)
  - Trigonométrie et cercle trigonométrique (Première)
  - Vecteurs et repérage du plan (Seconde)
statut: brouillon
relu_par: null
---

# Nombres complexes — point de vue géométrique

> Un nombre complexe, ce n'est pas qu'un objet de calcul $a+ib$. C'est aussi un **point du
> plan**, une **flèche** partant de l'origine. Sa longueur, c'est le **module** ; l'angle qu'il
> fait avec l'axe des abscisses, c'est l'**argument**. Tout le chapitre tient dans cette idée :
> **multiplier deux complexes, c'est multiplier les longueurs et additionner les angles.** La
> forme exponentielle $re^{i\theta}$ rend cette magie évidente.

---

## 1. Image et affixe : le plan complexe

On munit le plan d'un repère orthonormé direct $(O\,;\vec{u},\vec{v})$. À tout complexe
$z=a+ib$ (avec $a,b$ réels) on associe :

- le **point** $M$ de coordonnées $(a\,;b)$, appelé **image** de $z$ ;
- le **vecteur** $\overrightarrow{OM}$ de coordonnées $(a\,;b)$, appelé **vecteur image**.

Réciproquement, $z=a+ib$ est l'**affixe** du point $M$ et du vecteur $\overrightarrow{OM}$,
souvent noté $z_M$.

$$\boxed{M(a\,;b) \iff z_M=a+ib}$$

> **Exemple.** Le point $A$ d'affixe $z_A=3-2i$ a pour coordonnées $(3\,;-2)$. L'axe des
> abscisses est l'axe des **réels** ($b=0$), l'axe des ordonnées est l'axe des **imaginaires
> purs** ($a=0$).

**Affixe d'un vecteur défini par deux points.** Pour deux points $A$ et $B$ :

$$\boxed{z_{\overrightarrow{AB}}=z_B-z_A}$$

> **Exemple.** Si $z_A=1+i$ et $z_B=4+3i$, alors $z_{\overrightarrow{AB}}=(4+3i)-(1+i)=3+2i$ :
> le vecteur $\overrightarrow{AB}$ a pour coordonnées $(3\,;2)$.

**Affixe d'un milieu.** Le milieu $I$ de $[AB]$ a pour affixe $z_I=\dfrac{z_A+z_B}{2}$.

---

## 2. Module d'un complexe

Le **module** de $z=a+ib$ est le réel positif :

$$\boxed{|z|=\sqrt{a^2+b^2}}$$

Géométriquement, c'est la **distance** $OM$, la longueur du vecteur image.

> **Exemple.** $|3-4i|=\sqrt{3^2+(-4)^2}=\sqrt{9+16}=\sqrt{25}=5$.

**Lien fondamental avec le conjugué.** Comme $z\bar z=(a+ib)(a-ib)=a^2+b^2$ :

$$\boxed{|z|^2=z\bar z}$$

> C'est l'identité la plus utile du chapitre : elle transforme un module (avec sa racine
> carrée gênante) en un **produit**. On s'en sert pour calculer le module d'un quotient sans
> se battre avec les racines. **Exemple.** $|2+i|^2=(2+i)(2-i)=4+1=5$, donc $|2+i|=\sqrt5$.

**Distance entre deux points.** La longueur $AB$ est le module de l'affixe de
$\overrightarrow{AB}$ :

$$\boxed{AB=|z_B-z_A|}$$

> **Exemple.** Avec $z_A=1+i$ et $z_B=4+3i$ : $AB=|3+2i|=\sqrt{9+4}=\sqrt{13}$.

### Propriétés du module

Pour tous complexes $z,z'$ (et $z'\neq0$ pour le quotient) :

$$\boxed{|zz'|=|z|\,|z'| \qquad \left|\frac{z}{z'}\right|=\frac{|z|}{|z'|} \qquad |z^n|=|z|^n}$$

$$|\bar z|=|z| \qquad |-z|=|z| \qquad |z|=0 \iff z=0$$

> **Exemple.** $|(1+i)^{8}|=|1+i|^{8}=(\sqrt2)^{8}=2^{4}=16$ : on n'a pas eu à développer la
> puissance. Le module d'une **somme**, en revanche, ne se répartit pas :
> $|z+z'|\neq|z|+|z'|$ en général (on a seulement l'inégalité $|z+z'|\leqslant|z|+|z'|$).

---

## 3. L'ensemble 𝕌 des complexes de module 1

On note $\mathbb{U}$ l'ensemble des complexes de module $1$ :

$$\boxed{\mathbb{U}=\{\,z\in\mathbb{C}\ :\ |z|=1\,\}}$$

Ce sont exactement les affixes des points du **cercle trigonométrique** (centre $O$, rayon $1$).

**Propriétés.** $\mathbb{U}$ est **stable par produit** et par passage à l'inverse :
si $z,z'\in\mathbb{U}$, alors $zz'\in\mathbb{U}$ et $\dfrac1z\in\mathbb{U}$. De plus :

$$\boxed{z\in\mathbb{U}\iff |z|=1 \iff \frac1z=\bar z}$$

> **Pourquoi $\frac1z=\bar z$ ?** Parce que $z\bar z=|z|^2=1$ quand $z\in\mathbb U$. **Exemple.**
> $i\in\mathbb U$ car $|i|=1$, et effectivement $\dfrac1i=-i=\bar i$. Les nombres $1,-1,i,-i$
> sont dans $\mathbb U$.

---

## 4. Argument et forme trigonométrique

Soit $z\neq0$ d'image $M$. Un **argument** de $z$ est une mesure de l'angle orienté
$(\vec u\,,\overrightarrow{OM})$, noté $\arg(z)$. Il est défini **modulo $2\pi$**.

Avec $r=|z|$, les coordonnées de $M$ s'écrivent $a=r\cos\theta$ et $b=r\sin\theta$, d'où la
**forme trigonométrique** :

$$\boxed{z=r\big(\cos\theta+i\sin\theta\big)\quad\text{avec } r=|z|>0 \text{ et } \theta=\arg(z)}$$

> ⚠️ **Le nombre $0$ n'a pas d'argument** : sa direction n'est pas définie. On ne parle
> d'argument que pour $z\neq0$.

**Déterminer un argument.** On cherche $\theta$ tel que
$\cos\theta=\dfrac{a}{r}$ **et** $\sin\theta=\dfrac{b}{r}$. Les deux conditions ensemble
fixent $\theta$ (modulo $2\pi$).

> **Exemple.** $z=1+i$. Module : $r=\sqrt2$. Alors $\cos\theta=\dfrac{1}{\sqrt2}$ et
> $\sin\theta=\dfrac{1}{\sqrt2}$, donc $\theta=\dfrac{\pi}{4}$. Forme trigonométrique :
> $z=\sqrt2\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$.

> ⚠️ **Le seul cosinus ne suffit pas.** $\cos\theta=\dfrac12$ donne $\theta=\dfrac{\pi}3$ **ou**
> $\theta=-\dfrac{\pi}3$ : c'est le **signe de la partie imaginaire** (donc de $\sin\theta$) qui
> tranche. Toujours vérifier le sinus.

### Propriétés de l'argument

Pour $z,z'$ non nuls (égalités modulo $2\pi$) :

$$\boxed{\arg(zz')=\arg z+\arg z' \qquad \arg\!\left(\frac{z}{z'}\right)=\arg z-\arg z' \qquad \arg(z^n)=n\arg z}$$

$$\arg(\bar z)=-\arg z \qquad \arg(-z)=\arg z+\pi$$

> **Exemple.** $\arg\big((1+i)^2\big)=2\arg(1+i)=2\times\dfrac{\pi}4=\dfrac{\pi}2$. On vérifie :
> $(1+i)^2=2i$, dont l'argument est bien $\dfrac{\pi}2$. **Multiplier ajoute les angles.**

---

## 5. Forme exponentielle

Pour tout réel $\theta$, on **pose** la notation :

$$\boxed{e^{i\theta}=\cos\theta+i\sin\theta}$$

C'est un complexe de $\mathbb U$ (module $1$, argument $\theta$). Tout complexe non nul de
module $r$ et d'argument $\theta$ s'écrit alors sous **forme exponentielle** :

$$\boxed{z=re^{i\theta}\quad\text{avec } r=|z| \text{ et } \theta=\arg(z)}$$

> **Exemple.** $1+i=\sqrt2\,e^{i\pi/4}$. À connaître : $e^{i0}=1$, $e^{i\pi/2}=i$,
> $e^{i\pi}=-1$ (la célèbre relation $e^{i\pi}+1=0$), $e^{-i\pi/2}=-i$.

**Règles de calcul — celles des exposants.** Le grand intérêt de la notation : $e^{i\theta}$ se
manipule comme une vraie puissance.

$$\boxed{e^{i\theta}\times e^{i\theta'}=e^{i(\theta+\theta')} \qquad \frac{1}{e^{i\theta}}=e^{-i\theta} \qquad \overline{e^{i\theta}}=e^{-i\theta}}$$

> **Exemple — passer à l'exponentielle simplifie tout.** Soit $z=2e^{i\pi/3}$ et
> $z'=3e^{i\pi/6}$. Alors $zz'=6\,e^{i(\pi/3+\pi/6)}=6\,e^{i\pi/2}=6i$. On a multiplié les
> modules ($2\times3$) et ajouté les arguments ($\frac\pi3+\frac\pi6=\frac\pi2$).

**Passer d'une forme à l'autre.**
- Algébrique $\to$ exponentielle : calculer $r=|z|$, puis $\theta$ via $\cos\theta=\frac ar$,
  $\sin\theta=\frac br$.
- Exponentielle $\to$ algébrique : développer $re^{i\theta}=r\cos\theta+i\,r\sin\theta$.

> **Exemple.** $z=2e^{i2\pi/3}=2\left(\cos\dfrac{2\pi}3+i\sin\dfrac{2\pi}3\right)
> =2\left(-\dfrac12+i\dfrac{\sqrt3}2\right)=-1+i\sqrt3$.

---

## 6. Formules d'Euler et de Moivre

**Formules d'Euler.** En additionnant et soustrayant $e^{i\theta}=\cos\theta+i\sin\theta$ et
$e^{-i\theta}=\cos\theta-i\sin\theta$ :

$$\boxed{\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2} \qquad \sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}}$$

> Elles servent à **linéariser** : transformer $\cos^n\theta$ ou $\sin^n\theta$ en une somme de
> $\cos(k\theta)$ et $\sin(k\theta)$ (utile pour intégrer). **Exemple.**
> $\cos^2\theta=\left(\dfrac{e^{i\theta}+e^{-i\theta}}2\right)^2
> =\dfrac{e^{2i\theta}+2+e^{-2i\theta}}4=\dfrac{1+\cos(2\theta)}2$.

**Formule de Moivre.** Pour tout réel $\theta$ et tout entier $n$ :

$$\boxed{\big(\cos\theta+i\sin\theta\big)^n=\cos(n\theta)+i\sin(n\theta)}$$

soit, en exponentielle, simplement $\big(e^{i\theta}\big)^n=e^{in\theta}$.

> Elle sert à l'inverse d'Euler : **exprimer $\cos(n\theta)$ en fonction de $\cos\theta$**.
> **Exemple.** $\cos(2\theta)+i\sin(2\theta)=(\cos\theta+i\sin\theta)^2
> =\cos^2\theta-\sin^2\theta+2i\sin\theta\cos\theta$. En identifiant les parties réelles :
> $\cos(2\theta)=\cos^2\theta-\sin^2\theta$.

---

## 7. Interprétations géométriques

Le pont entre calcul complexe et géométrie tient en deux traductions. Pour des points
$A,B,C$ d'affixes $z_A,z_B,z_C$ :

**Longueur (module d'une différence) :**

$$\boxed{AB=|z_B-z_A|}$$

**Angle (argument d'une différence, puis d'un quotient) :**

$$\arg(z_B-z_A)=\big(\vec u\,,\overrightarrow{AB}\big) \qquad\qquad
\boxed{\big(\overrightarrow{AB}\,,\overrightarrow{AC}\big)=\arg\!\left(\frac{z_C-z_A}{z_B-z_A}\right)}$$

> **Exemple — ensemble de points.** L'ensemble des points $M$ d'affixe $z$ tels que
> $|z-z_A|=k$ (avec $k>0$) est le **cercle** de centre $A$ et de rayon $k$, car $|z-z_A|=AM$.
> De même $|z-z_A|=|z-z_B|$ décrit la **médiatrice** de $[AB]$ (points équidistants de $A$ et
> $B$).

> **Exemple — nature d'un triangle.** Le quotient $\dfrac{z_C-z_A}{z_B-z_A}$ contient tout :
> son **module** vaut $\dfrac{AC}{AB}$ et son **argument** vaut l'angle
> $\big(\overrightarrow{AB},\overrightarrow{AC}\big)$. S'il vaut $i$, alors $AC=AB$ et l'angle
> est $\dfrac\pi2$ : le triangle est **rectangle isocèle** en $A$.

---

## 8. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Affixe d'un point | $M(a\,;b)\iff z_M=a+ib$ |
| Affixe d'un vecteur | $z_{\overrightarrow{AB}}=z_B-z_A$ |
| Module | $|z|=\sqrt{a^2+b^2}=OM$ |
| Module et conjugué | $|z|^2=z\bar z$ |
| Distance | $AB=|z_B-z_A|$ |
| Produit / puissance | $|zz'|=|z||z'|$, $\ |z^n|=|z|^n$ |
| Ensemble $\mathbb U$ | $|z|=1\iff \frac1z=\bar z$ |
| Forme trigo | $z=r(\cos\theta+i\sin\theta)$ |
| Argument (produit) | $\arg(zz')=\arg z+\arg z'$ |
| Forme exponentielle | $z=re^{i\theta}$, $\ e^{i\theta}e^{i\theta'}=e^{i(\theta+\theta')}$ |
| Euler | $\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}2$, $\ \sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}$ |
| Moivre | $(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)$ |
| Angle de vecteurs | $\big(\overrightarrow{AB},\overrightarrow{AC}\big)=\arg\frac{z_C-z_A}{z_B-z_A}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Déterminer un argument avec le seul cosinus.** $\cos\theta=\frac12$ laisse deux
   possibilités ($\pm\frac\pi3$). Il faut **aussi** le signe du sinus (la partie imaginaire)
   pour choisir. Un argument se lit toujours sur $\cos$ **et** $\sin$.
2. **Oublier que $0$ n'a pas d'argument.** La forme trigonométrique et l'exponentielle
   n'existent que pour $z\neq0$. Ne jamais écrire $\arg(0)$.
3. **Croire que $|z+z'|=|z|+|z'|$.** FAUX en général : le module ne se répartit que sur les
   **produits, quotients et puissances**, jamais sur les sommes.
4. **Confondre module et argument dans un produit.** Sur $zz'$ : les modules se
   **multiplient**, les arguments s'**additionnent**. Additionner les modules ou multiplier
   les arguments est l'erreur classique.
5. **Se tromper de signe dans $e^{-i\theta}$.** $\overline{e^{i\theta}}=e^{-i\theta}$ et
   $\frac1{e^{i\theta}}=e^{-i\theta}$ : conjuguer ou inverser **change le signe** de l'angle,
   pas celui du module.
6. **Inverser le quotient d'angle.** L'angle $\big(\overrightarrow{AB},\overrightarrow{AC}\big)$
   est $\arg\dfrac{z_C-z_A}{z_B-z_A}$ : au numérateur l'affixe du vecteur d'**arrivée**
   ($\overrightarrow{AC}$), au dénominateur celui de **départ** ($\overrightarrow{AB}$).
   L'inverser change le signe de l'angle.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, section
« Nombres complexes — point de vue géométrique » (lignes 24 à 31), rubriques
« Contenus » et « Capacités ». En-tête de provenance du fichier lu (lignes 1 à 11) :
programmes des enseignements OPTIONNELS de mathématiques, terminale générale, arrêtés
du 19-7-2019, BO spécial n°8 du 25 juillet 2019 (option maths EXPERTES).

⚠️ PROVENANCE : d'après l'en-tête du fichier source, le programme a été extrait via
WebFetch depuis les PDF officiels (education.gouv.fr, MENE1921264A / annexe spe264).
À CONFRONTER AU PDF OFFICIEL avant publication, au même titre que la relecture pédagogique.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme cite « module d'un produit/quotient/puissance » : j'ai retenu les trois
  identités |zz'|, |z/z'|, |z^n|, plus |z̄|=|z| et |-z|=|z|. Standard du chapitre.
- Forme exponentielle : le programme la relie à l'équation fonctionnelle de exp. J'ai
  présenté e^{iθ} comme NOTATION posée (cos θ + i sin θ) et donné les règles d'exposants
  sans démontrer le lien avec la fonction exponentielle réelle. Vérifier le niveau
  d'exigence attendu (certains manuels démontrent (θ ↦ e^{iθ}) morphisme via dérivation).
- Euler / Moivre : le programme les cite sans préciser les applications. J'ai illustré
  Euler par la linéarisation (cos²θ) et Moivre par cos(2θ) ; confirmer si linéarisation
  et calcul de cos(nθ)/sin(nθ) sont explicitement exigibles à ce niveau.
- Interprétations géométriques : le programme demande « interpréter |z−z'| et arg ». J'ai
  ajouté l'angle (AB,AC) = arg((z_C−z_A)/(z_B−z_A)) et les ensembles de points (cercle,
  médiatrice), classiques mais à valider comme attendus.
- PRÉREQUIS : le chapitre « complexes — point de vue algébrique » (option expertes) est
  référencé mais son dossier est encore VIDE dans le dépôt à la date de rédaction. Vérifier
  qu'il sera publié avant celui-ci (conjugué, |z|²=z z̄ y sont supposés connus).

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
