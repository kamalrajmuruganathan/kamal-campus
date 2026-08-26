---
id: terminale-maths-expertes
titre: "Formulaire — Terminale Mathématiques expertes"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

Aide-mémoire — option mathématiques expertes de terminale. L'essentiel, par thème.

## Arithmétique : divisibilité et congruences

- Divisibilité : $\boxed{b\mid a \iff \exists\, k\in\mathbb{Z},\ a=bk}$.
- Division euclidienne : $\boxed{a=bq+r, \quad 0\leqslant r<|b|}$.
- Congruences : $\boxed{a\equiv b\ [n] \iff n\mid(a-b)}$ ; compatibilité : $\boxed{a+c\equiv b+d\ [n], \quad ac\equiv bd\ [n]}$ ; $\boxed{a^k\equiv b^k\ [n]}$.
- Euclide : $\boxed{\mathrm{pgcd}(a,b)=\mathrm{pgcd}(b,r)}$ ($r$ reste de $a$ par $b$).
- Bézout : $\boxed{\mathrm{pgcd}(a,b)=1 \iff \exists\,(u,v),\ au+bv=1}$ ; Gauss : $\boxed{a\mid bc \text{ et } \mathrm{pgcd}(a,b)=1 \Rightarrow a\mid c}$.
- Décomposition en facteurs premiers : $\boxed{n=p_1^{\alpha_1}\cdots p_k^{\alpha_k}}$.
- Petit théorème de Fermat ($p$ premier, $p\nmid a$) : $\boxed{a^{p-1}\equiv 1\ [p]}$.

## Nombres complexes — forme algébrique

- $\boxed{i^2=-1}$ ; $\boxed{z=a+ib}$ ; $\boxed{\operatorname{Re}(z)=a, \ \operatorname{Im}(z)=b}$.
- Égalité : $\boxed{a+ib=a'+ib' \iff a=a' \text{ et } b=b'}$.
- Conjugué : $\boxed{\overline z=a-ib}$ ; $\boxed{z\overline z=a^2+b^2\geqslant 0}$.
- $\boxed{z \text{ réel} \iff z=\overline z}$ ; $\boxed{z \text{ imaginaire pur} \iff \overline z=-z}$.
- Inverse : $\boxed{\dfrac{1}{z}=\dfrac{\overline z}{z\overline z}=\dfrac{a-ib}{a^2+b^2}}$.
- Second degré à coefficients réels ($\Delta<0$) : racines complexes conjuguées $\dfrac{-b\pm i\sqrt{-\Delta}}{2a}$.

## Nombres complexes — forme géométrique

- Affixe : $\boxed{M(a;b)\iff z_M=a+ib}$ ; $\boxed{z_{\overrightarrow{AB}}=z_B-z_A}$.
- Module : $\boxed{|z|=\sqrt{a^2+b^2}}$ ; $\boxed{|z|^2=z\overline z}$ ; $\boxed{AB=|z_B-z_A|}$.
- $\boxed{|zz'|=|z|\,|z'| \qquad \left|\tfrac{z}{z'}\right|=\tfrac{|z|}{|z'|} \qquad |z^n|=|z|^n}$
- Ensemble $\mathbb U$ : $\boxed{z\in\mathbb U \iff |z|=1 \iff \tfrac{1}{z}=\overline z}$.
- Forme trigonométrique : $\boxed{z=r(\cos\theta+i\sin\theta)}$, $r=|z|$, $\theta=\arg z$.
- $\boxed{\arg(zz')=\arg z+\arg z' \qquad \arg\!\left(\tfrac{z}{z'}\right)=\arg z-\arg z' \qquad \arg(z^n)=n\arg z}$
- Forme exponentielle : $\boxed{e^{i\theta}=\cos\theta+i\sin\theta}$ ; $\boxed{z=re^{i\theta}}$ ; $\boxed{e^{i\theta}e^{i\theta'}=e^{i(\theta+\theta')}, \ \tfrac{1}{e^{i\theta}}=e^{-i\theta}, \ \overline{e^{i\theta}}=e^{-i\theta}}$.
- Euler : $\boxed{\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}{2}, \quad \sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}}$ ; Moivre : $\boxed{(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)}$.
- Angle : $\boxed{(\overrightarrow{AB},\overrightarrow{AC})=\arg\!\left(\dfrac{z_C-z_A}{z_B-z_A}\right)}$.

## Graphes et matrices

- Graphe : $\boxed{\text{ordre}=\text{nb de sommets}, \quad \deg(S)=\text{nb d'arêtes en } S}$ ; $\boxed{\sum_S \deg(S)=2\times\text{nb d'arêtes}}$.
- Longueur d'une chaîne = nombre d'arêtes.
- Produit matriciel : $\boxed{(AB)_{ij}=\sum_k a_{ik}b_{kj}}$.
- Inverse : $\boxed{AA^{-1}=A^{-1}A=I}$ ; $2\times2$ : $\boxed{A^{-1}=\dfrac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}}$.
- Matrice d'adjacence : $\boxed{(M^k)_{ij}=\text{nb de chemins de longueur } k \text{ de } i \text{ à } j}$.
- Suite de matrices $\boxed{U_{n+1}=AU_n+C}$ ; état stable : $\boxed{U=AU+C \iff U=(I-A)^{-1}C}$.
- Chaîne de Markov : chaque ligne de $P$ somme à $1$ ; $\boxed{\pi_{n+1}=\pi_n P, \quad \pi_n=\pi_0 P^n}$ ; état stable : $\boxed{\pi=\pi P}$ avec $x+y=1$.

<!-- notes de production : source = contenu/terminale/maths-expertes/*/fiche.md (4 chapitres : arithmetique, complexes-algebrique, complexes-geometrique, graphes-matrices), formules repérées via grep "boxed" + titres ##. Point à confronter : le détail de la résolution du second degré dans C (complexes-algebrique §6) est en bloc aligned encadré, résumé ici en une ligne. -->
