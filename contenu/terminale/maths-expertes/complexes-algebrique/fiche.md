---
id: tale-exp-math-complexes-algebrique
titre: "Nombres complexes — point de vue algébrique"
voie: generale
niveau: terminale
parcours: maths-expertes
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths expertes, terminale générale"
duree_lecture_min: 14
prerequis:
  - Équations du second degré et discriminant (Première)
  - Identités remarquables (Seconde)
  - Calcul littéral et fractions (collège / Seconde)
statut: brouillon
relu_par: null
---

# Nombres complexes — point de vue algébrique

> Dans $\mathbb{R}$, l'équation $x^{2}=-1$ n'a pas de solution : aucun carré de réel
> n'est négatif. Les nombres complexes règlent le problème en **fabriquant** un nombre
> dont le carré vaut $-1$, noté $i$. À partir de ce seul ingrédient, on construit un
> ensemble où tout s'additionne, se multiplie… et où **toute** équation du second
> degré admet des solutions. Ce chapitre, c'est l'algèbre de ce nouveau monde.

---

## 1. L'ensemble $\mathbb{C}$ et la forme algébrique

Il existe un ensemble de nombres, noté $\mathbb{C}$, qui **contient** $\mathbb{R}$ et
un nombre particulier $i$ vérifiant :

$$\boxed{\,i^{2}=-1\,}$$

Tout élément $z$ de $\mathbb{C}$ s'écrit de **manière unique** sous la forme :

$$\boxed{z = a + ib \qquad \text{avec } a\in\mathbb{R} \text{ et } b\in\mathbb{R}}$$

C'est la **forme algébrique** de $z$. Le réel $a$ est la **partie réelle**, le réel $b$
la **partie imaginaire** :

$$\boxed{\operatorname{Re}(z)=a \qquad\qquad \operatorname{Im}(z)=b}$$

> ⚠️ **La partie imaginaire est un RÉEL.** Pour $z = 3 + 5i$, on a
> $\operatorname{Im}(z)=5$, **pas** $5i$. Le $i$ ne fait pas partie de la partie
> imaginaire : celle-ci est le coefficient qui multiplie $i$.

**Vocabulaire.**
- Si $b=0$, alors $z=a$ est un **réel** : $\mathbb{R}$ est bien inclus dans $\mathbb{C}$.
- Si $a=0$, alors $z=ib$ est dit **imaginaire pur** (l'ensemble se note $i\mathbb{R}$).

> **Exemple.** $z_1 = 2 - 3i$ : $\operatorname{Re}(z_1)=2$, $\operatorname{Im}(z_1)=-3$.
> $z_2 = 7$ est réel. $z_3 = -4i$ est imaginaire pur ($\operatorname{Re}(z_3)=0$).

**Égalité de deux complexes.** L'unicité de la forme algébrique donne un outil
essentiel : deux complexes sont égaux si et seulement si ils ont **même partie réelle
et même partie imaginaire**.

$$\boxed{a+ib = a'+ib' \iff a=a' \ \text{ et } \ b=b'} \qquad (a,b,a',b'\in\mathbb{R})$$

En particulier : $\ z=0 \iff \operatorname{Re}(z)=0 \ \text{ et } \ \operatorname{Im}(z)=0.$

---

## 2. Opérations dans $\mathbb{C}$

On calcule dans $\mathbb{C}$ **comme dans $\mathbb{R}$**, avec la seule règle
supplémentaire $i^{2}=-1$.

**Addition** — on ajoute parties réelles entre elles, parties imaginaires entre elles :

$$(a+ib)+(a'+ib') = (a+a') + i\,(b+b')$$

> **Exemple.** $(2+3i)+(5-7i) = (2+5)+i(3-7) = 7-4i$.

**Multiplication** — on développe, puis on remplace $i^{2}$ par $-1$ :

$$(a+ib)(a'+ib') = aa' + iab' + iba' + i^{2}bb' = (aa'-bb') + i\,(ab'+a'b)$$

> **Exemple.** $(2+3i)(1-4i) = 2 - 8i + 3i - 12i^{2} = 2 - 5i +12 = 14 - 5i$,
> car $-12i^{2}=-12\times(-1)=+12$. **C'est là que tout se joue** : le terme en
> $i^{2}$ redevient un réel et change de signe.

**Puissances de $i$** — elles tournent en cycle de période $4$ :

$$i^{0}=1,\quad i^{1}=i,\quad i^{2}=-1,\quad i^{3}=-i,\quad i^{4}=1,\quad \dots$$

> **Exemple.** $i^{15}=i^{12}\times i^{3}=(i^{4})^{3}\times i^{3}=1\times(-i)=-i$.
> Méthode : on divise l'exposant par $4$ et on ne garde que le reste.

**Identités remarquables.** Elles restent valables dans $\mathbb{C}$. Attention,
$i^{2}=-1$ transforme l'une d'elles en une factorisation nouvelle :

$$a^{2}+b^{2} = a^{2}-(ib)^{2} = (a+ib)(a-ib)$$

> Une somme de deux carrés, impossible à factoriser dans $\mathbb{R}$, se factorise
> dans $\mathbb{C}$. On s'en resservira pour l'inverse et le second degré.

---

## 3. Conjugué et ses propriétés

Le **conjugué** de $z=a+ib$ est le complexe :

$$\boxed{\overline{z} = a - ib}$$

On change simplement le signe de la partie imaginaire.

> **Exemple.** $\overline{3+5i}=3-5i$ ; $\overline{-2-7i}=-2+7i$ ; $\overline{4}=4$
> (le conjugué d'un réel est lui-même) ; $\overline{6i}=-6i$.

**Le produit $z\overline{z}$ est un réel positif** — la propriété la plus utile du
chapitre :

$$\boxed{z\,\overline{z} = (a+ib)(a-ib) = a^{2}+b^{2}} \ \geqslant 0$$

> **Exemple.** Pour $z=2+3i$ : $z\overline{z}=2^{2}+3^{2}=13$. Aucun $i$ ne subsiste :
> multiplier par le conjugué est **le** moyen de faire disparaître les $i$ d'un
> dénominateur (section 4).

**Somme et différence avec le conjugué :**

$$z+\overline{z} = 2\operatorname{Re}(z) \qquad\qquad z-\overline{z} = 2i\operatorname{Im}(z)$$

**Caractérisations** (très utiles pour les équations en $z$ et $\overline z$) :

$$\boxed{z \text{ réel} \iff z=\overline{z}} \qquad\qquad
\boxed{z \text{ imaginaire pur} \iff \overline{z}=-z}$$

**Règles de calcul** — le conjugué « traverse » toutes les opérations :

$$\overline{\overline{z}}=z, \quad \overline{z+z'}=\overline{z}+\overline{z'}, \quad
\overline{z\,z'}=\overline{z}\;\overline{z'}, \quad
\overline{\left(\tfrac{z}{z'}\right)}=\tfrac{\overline{z}}{\overline{z'}}, \quad
\overline{z^{\,n}}=\left(\overline{z}\right)^{n}$$

> **Exemple.** $\overline{(2+i)(3-i)}=\overline{2+i}\times\overline{3-i}=(2-i)(3+i)$.
> On peut conjuguer **avant** ou **après** de développer, le résultat est le même.

---

## 4. Inverse et quotient

Tout complexe **non nul** admet un inverse. La technique : multiplier haut et bas par
le **conjugué du dénominateur**, ce qui rend le dénominateur réel.

Pour $z=a+ib\neq 0$ :

$$\boxed{\dfrac{1}{z} = \dfrac{\overline{z}}{z\,\overline{z}} = \dfrac{a-ib}{a^{2}+b^{2}}}$$

> **Exemple.** $\dfrac{1}{2+3i}=\dfrac{2-3i}{2^{2}+3^{2}}=\dfrac{2-3i}{13}
> =\dfrac{2}{13}-\dfrac{3}{13}i$. On termine **toujours** en séparant partie réelle
> et partie imaginaire : c'est la forme algébrique attendue.

**Quotient de deux complexes** — même réflexe, on multiplie par le conjugué du
dénominateur :

$$\dfrac{z}{z'} = \dfrac{z\,\overline{z'}}{z'\,\overline{z'}}
= \dfrac{z\,\overline{z'}}{|\,\text{dénominateur réel}\,|}$$

> **Exemple.** $\dfrac{3+i}{1-2i}=\dfrac{(3+i)(1+2i)}{(1-2i)(1+2i)}
> =\dfrac{3+6i+i+2i^{2}}{1^{2}+2^{2}}=\dfrac{3+7i-2}{5}=\dfrac{1+7i}{5}
> =\dfrac{1}{5}+\dfrac{7}{5}i$.

---

## 5. Méthodes : équations $az=b$ et équations en $z$ et $\overline{z}$

### Équation du premier degré $az=b$

Avec $a\neq 0$, on isole $z=\dfrac{b}{a}$, puis on met le résultat sous forme
algébrique en multipliant par le conjugué.

> **Exemple.** $(2+i)z = 3-i$. Alors $z=\dfrac{3-i}{2+i}
> =\dfrac{(3-i)(2-i)}{(2+i)(2-i)}=\dfrac{6-3i-2i+i^{2}}{4+1}
> =\dfrac{5-5i}{5}=1-i.$

### Équation faisant intervenir $z$ et $\overline{z}$

Méthode systématique : on **pose $z=x+iy$** (avec $x,y$ réels), donc
$\overline{z}=x-iy$. On remplace, on développe, puis on **identifie** partie réelle et
partie imaginaire des deux membres (grâce à l'égalité de la section 1).

> **Exemple.** Résoudre $2z + \overline{z} = 6 - i$.
> Pose $z=x+iy$ : $2(x+iy)+(x-iy)=6-i$, soit $(2x+x)+i(2y-y)=6-i$,
> c'est-à-dire $3x + iy = 6 - i$.
> Identification : $\ 3x=6\ $ et $\ y=-1$, donc $x=2$ et $y=-1$.
> **Solution : $z=2-i$.**

> **Deuxième exemple (caractérisation).** « Déterminer les $z$ tels que $z^{2}$ soit
> réel » revient à écrire $z^{2}=\overline{z^{2}}=(\overline z)^{2}$, ou à poser
> $z=x+iy$ et à imposer $\operatorname{Im}(z^{2})=0$, ici $2xy=0$ : $z$ réel **ou**
> $z$ imaginaire pur.

---

## 6. Équation du second degré à coefficients réels dans $\mathbb{C}$

Soit $az^{2}+bz+c=0$ avec $a,b,c$ **réels** et $a\neq 0$. On calcule le discriminant
**réel** $\Delta = b^{2}-4ac$. Trois cas :

$$\boxed{\begin{aligned}
\Delta>0 &: \text{ deux racines réelles } z=\dfrac{-b\pm\sqrt{\Delta}}{2a}\\[2pt]
\Delta=0 &: \text{ une racine réelle double } z=\dfrac{-b}{2a}\\[2pt]
\Delta<0 &: \text{ deux racines complexes conjuguées } z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}
\end{aligned}}$$

Le cas nouveau est $\Delta<0$ : comme $\Delta<0$, on a $-\Delta>0$ et $\sqrt{-\Delta}$
existe ; le $i$ vient de $\sqrt{\Delta}=\sqrt{-(-\Delta)}=i\sqrt{-\Delta}$.

> **Exemple.** $z^{2}-2z+5=0$. Ici $\Delta=(-2)^{2}-4\times1\times5=4-20=-16<0$.
> Donc $\sqrt{-\Delta}=\sqrt{16}=4$ et
> $z=\dfrac{2\pm 4i}{2}=1\pm 2i$. Les deux solutions sont $1+2i$ et $1-2i$ :
> **conjuguées l'une de l'autre**, comme toujours quand les coefficients sont réels.

**Factorisation.** Dans tous les cas, $az^{2}+bz+c = a\,(z-z_1)(z-z_2)$ où $z_1,z_2$
sont les racines. Et comme dans $\mathbb{R}$ :

$$z_1+z_2 = -\dfrac{b}{a} \qquad\qquad z_1\,z_2 = \dfrac{c}{a}$$

> **Vérification sur l'exemple.** $z_1+z_2=(1+2i)+(1-2i)=2=-\dfrac{-2}{1}$ ✔ et
> $z_1 z_2=(1+2i)(1-2i)=1+4=5=\dfrac{5}{1}$ ✔.

---

## 7. La formule du binôme dans $\mathbb{C}$

La formule du binôme de Newton reste valable dans $\mathbb{C}$ : pour tout entier
$n\geqslant 0$,
$$(z+z')^{n}=\sum_{k=0}^{n}\binom{n}{k}z^{k}z'^{\,n-k}.$$

> **Exemple.** $(1+i)^{2}=1+2i+i^{2}=2i$. On en déduit vite les puissances élevées :
> $(1+i)^{4}=\big((1+i)^{2}\big)^{2}=(2i)^{2}=4i^{2}=-4$.

---

## 8. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Nombre $i$ | $i^{2}=-1$ |
| Forme algébrique | $z=a+ib$, $\operatorname{Re}(z)=a$, $\operatorname{Im}(z)=b$ (réels) |
| Égalité | $a+ib=a'+ib'\iff a=a'$ et $b=b'$ |
| Réel / imaginaire pur | $b=0$ / $a=0$ |
| Produit | remplacer $i^{2}$ par $-1$ après développement |
| Conjugué | $\overline{z}=a-ib$ |
| Produit conjugué | $z\overline{z}=a^{2}+b^{2}\geqslant 0$ (réel) |
| Re et Im via conjugué | $z+\overline z=2\operatorname{Re}(z)$, $z-\overline z=2i\operatorname{Im}(z)$ |
| Caractérisations | $z$ réel $\iff z=\overline z$ ; imaginaire pur $\iff \overline z=-z$ |
| Inverse | $\dfrac{1}{z}=\dfrac{\overline z}{a^{2}+b^{2}}$ |
| Quotient | multiplier par le conjugué du dénominateur |
| Équation en $z,\overline z$ | poser $z=x+iy$, puis identifier |
| Second degré, $\Delta<0$ | $z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}$, racines conjuguées |
| Somme / produit racines | $z_1+z_2=-\dfrac ba$, $z_1z_2=\dfrac ca$ |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre partie imaginaire et « $ib$ ».** $\operatorname{Im}(3+5i)=5$, un réel,
   **pas** $5i$. Écrire $\operatorname{Im}(z)=5i$ est une faute de définition.
2. **Oublier que $i^{2}=-1$ change le signe.** Dans un produit, le terme en $i^{2}$
   redevient réel **et négatif** : $(2i)(3i)=6i^{2}=-6$, pas $+6$ ni $6i^2$ laissé tel quel.
3. **Ne pas finir sous forme algébrique.** Une réponse comme $\dfrac{1}{2+3i}$ n'est
   pas terminée : il faut multiplier par le conjugué et écrire $\dfrac{2}{13}-\dfrac{3}{13}i$.
4. **Multiplier par le conjugué du numérateur.** Pour un quotient, on multiplie haut
   et bas par le conjugué du **dénominateur** — c'est lui qu'on veut rendre réel.
5. **Écrire $\sqrt{\Delta}$ quand $\Delta<0$.** $\sqrt{\Delta}$ n'existe pas pour
   $\Delta<0$ ; la bonne écriture est $\pm\,i\sqrt{-\Delta}$ avec $-\Delta>0$.
6. **Croire qu'un second degré à $\Delta<0$ n'a « pas de solution ».** C'est vrai dans
   $\mathbb{R}$, faux dans $\mathbb{C}$ : il y a **deux** solutions, complexes conjuguées.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, section
« Nombres complexes — point de vue algébrique » (lignes 16 à 23), rubriques
« Contenus » et « Capacités ». En-tête de provenance du fichier lu (lignes 1 à 10) :
programmes des enseignements optionnels de mathématiques, terminale générale, arrêtés
du 19-7-2019, BO spécial n°8 du 25 juillet 2019, option MATHS EXPERTES.
URL officielle citée : education.gouv.fr/bo/19/Special8/MENE1921264A.htm
PDF : cache.media.education.gouv.fr/.../spe264_annexe_1158825.pdf

⚠️ PROVENANCE À CONFRONTER AU PDF OFFICIEL : d'après l'en-tête du fichier source, le
texte a été extrait « via WebFetch depuis les PDF officiels » d'education.gouv.fr. La
reproduction n'est pas garantie exhaustive. AVANT PUBLICATION, confronter ce contenu au
PDF officiel (spe264_annexe_1158825.pdf) et à la relecture pédagogique.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme liste en « Contenus » : ensemble ℂ, partie réelle/imaginaire, opérations ;
  conjugaison et propriétés ; inverse d'un complexe non nul ; FORMULE DU BINÔME dans ℂ ;
  équations du second degré à coefficients réels. La formule du binôme figure au
  programme algébrique : incluse ici en section 7, brève, sans démonstration ni lien
  explicite avec le triangle de Pascal / les coefficients binomiaux — vérifier le niveau
  d'exigence attendu (peut relever d'un chapitre « combinatoire » distinct selon la
  progression choisie).
- Capacités visées et couvertes : calculs algébriques (§2), résoudre az=b (§5), résoudre
  une équation en z et z̄ (§5), résoudre un second degré à coefficients réels dans ℂ (§6).
- Somme/produit des racines et factorisation a(z−z1)(z−z2) : ajoutés en §6 car standards
  et utiles ; le programme ne les cite pas explicitement dans cette section — à valider.
- Le module |z| et |z|²=z·z̄ relèvent du chapitre « point de vue géométrique » (lignes
  24+ du programme) : volontairement NON traités ici, sauf z·z̄=a²+b² utilisé pour
  l'inverse (contenu algébrique légitime). Vérifier la frontière algébrique/géométrique
  retenue dans la progression de l'établissement.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
