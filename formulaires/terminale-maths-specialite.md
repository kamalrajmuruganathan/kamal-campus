---
id: terminale-maths-specialite
titre: "Formulaire — Terminale Mathématiques (spécialité)"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

Aide-mémoire — spécialité mathématiques de terminale. Formules incontournables, par thème.

## Suites : limites et récurrence

- Convergence : $\boxed{\lim\limits_{n\to+\infty} u_n = \ell}$ ; divergence vers l'infini : $\boxed{\lim\limits_{n\to+\infty} u_n = +\infty}$.
- Formes indéterminées : $\boxed{\infty-\infty \quad 0\times\infty \quad \dfrac{\infty}{\infty} \quad \dfrac{0}{0}}$
- Suite géométrique $(q^n)$ : converge vers $0$ si $-1<q<1$ ; $\to+\infty$ si $q>1$ ; pas de limite si $q\leqslant -1$.
- Convergence monotone : toute suite croissante majorée (décroissante minorée) converge.
- Récurrence : $\boxed{\text{Initialisation} \Rightarrow \text{Hérédité} \Rightarrow \text{vrai pour tout } n\geqslant n_0}$
- Si $u_{n+1}=f(u_n)$ converge vers $\ell$ et $f$ continue : $\boxed{f(\ell)=\ell}$.

## Limites de fonctions

- Asymptote horizontale : $\boxed{\lim\limits_{x\to+\infty} f(x)=\ell \iff y=\ell \text{ asymptote}}$ ; verticale : $\lim\limits_{x\to a} f(x)=\pm\infty \iff x=a$ asymptote.
- $\boxed{\lim\limits_{x\to+\infty} e^x = +\infty \qquad \lim\limits_{x\to-\infty} e^x = 0}$
- Formes indéterminées : $\boxed{\infty-\infty \quad 0\times\infty \quad \dfrac{\infty}{\infty} \quad \dfrac{0}{0}}$
- Croissances comparées : $\boxed{\lim\limits_{x\to+\infty} \dfrac{e^x}{x^n} = +\infty \qquad \lim\limits_{x\to-\infty} x^n e^x = 0}$

## Continuité et TVI

- $\boxed{f \text{ continue en } a \iff \lim\limits_{x\to a} f(x)=f(a)}$ ; $\boxed{f \text{ dérivable} \Rightarrow f \text{ continue}}$.
- Si $u_n\to\ell$ et $f$ continue : $\boxed{\lim f(u_n)=f(\ell)}$.
- TVI : $f$ continue sur $[a;b]$, $k$ entre $f(a)$ et $f(b)$ $\Rightarrow \exists\, c\in[a;b],\ f(c)=k$.
- Corollaire (strictement monotone) : existence ET unicité de $c$.

## Dérivation et convexité

- Composée : $\boxed{(v\circ u)' = (v'\circ u)\times u'}$.
- $\boxed{f \text{ convexe} \iff f''\geqslant 0 \iff f' \text{ croissante}}$ ; $\boxed{f \text{ concave} \iff f''\leqslant 0}$.
- Point d'inflexion : $f''$ s'annule en changeant de signe (la courbe traverse sa tangente).

## Fonction logarithme népérien

- $\boxed{\ln x = y \iff x = e^y}$ ($x>0$) ; $\boxed{\ln(e^x)=x, \quad e^{\ln x}=x}$ ; $\boxed{\ln 1 = 0, \quad \ln e = 1}$.
- $\boxed{\ln(ab)=\ln a+\ln b \qquad \ln\!\left(\tfrac{a}{b}\right)=\ln a-\ln b \qquad \ln(a^n)=n\ln a}$
- Dérivée : $\boxed{(\ln x)'=\dfrac{1}{x}}$, strictement croissante sur $]0;+\infty[$.
- $\boxed{\lim\limits_{x\to 0^+}\ln x = -\infty \qquad \lim\limits_{x\to+\infty}\ln x = +\infty}$
- Croissances comparées : $\boxed{\lim\limits_{x\to+\infty}\dfrac{\ln x}{x^n}=0 \qquad \lim\limits_{x\to 0^+} x^n\ln x = 0}$

## Fonctions trigonométriques

- $\boxed{\cos(-x)=\cos x, \quad \sin(-x)=-\sin x}$ ; $\boxed{\cos(x+2\pi)=\cos x, \quad \sin(x+2\pi)=\sin x}$.
- Limites en 0 : $\boxed{\lim\limits_{x\to 0}\dfrac{\sin x}{x}=1 \qquad \lim\limits_{x\to 0}\dfrac{\cos x-1}{x}=0}$
- Dérivées : $\boxed{\sin'x=\cos x, \quad \cos'x=-\sin x}$ ; $\boxed{(\sin(ax+b))'=a\cos(ax+b), \quad (\cos(ax+b))'=-a\sin(ax+b)}$

## Primitives et équations différentielles

- $\boxed{F \text{ primitive de } f \iff F'=f}$ ; deux primitives diffèrent d'une constante $C$.
- $\boxed{y'=ay \iff y(x)=Ce^{ax}}$ ; $\boxed{y'=ay+b \iff y(x)=Ce^{ax}-\dfrac{b}{a}}$.
- $\boxed{y'=ay+g(x) : y(x)=g_\text{part}(x)+Ce^{ax}}$

## Calcul intégral

- $\boxed{\displaystyle\int_a^b f(x)\,dx = F(b)-F(a)}$ (aire algébrique sous la courbe).
- Linéarité : $\boxed{\displaystyle\int_a^b (f+g) = \int_a^b f + \int_a^b g}$ ; relation de Chasles : $\boxed{\displaystyle\int_a^b f + \int_b^c f = \int_a^c f}$.
- Valeur moyenne : $\boxed{\mu = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,dx}$.
- Intégration par parties : $\boxed{\displaystyle\int_a^b u\,v' = [uv]_a^b - \int_a^b u'v}$.
- Aire entre deux courbes : $\boxed{\mathcal{A}=\displaystyle\int_a^b (f-g)\,dx}$ (avec $f\geqslant g$).

## Combinatoire et dénombrement

- Somme (ensembles disjoints) : $\mathrm{Card}(A\cup B)=\mathrm{Card}(A)+\mathrm{Card}(B)$ ; principe multiplicatif.
- $\boxed{n! = 1\times 2\times\cdots\times n}$, $0!=1$.
- $p$-listes : $\boxed{n^p}$ ; permutations : $\boxed{n!}$ ; arrangements : $\boxed{A_n^p=\dfrac{n!}{(n-p)!}}$.
- Combinaisons : $\boxed{\dbinom{n}{p}=\dfrac{n!}{p!(n-p)!}}$ ; $\boxed{\dbinom{n}{p}=\dbinom{n}{n-p}}$ ; Pascal : $\boxed{\dbinom{n}{p}=\dbinom{n-1}{p-1}+\dbinom{n-1}{p}}$.

## Loi binomiale

- Bernoulli : $\boxed{P(X=1)=p, \quad P(X=0)=1-p}$.
- Loi binomiale $B(n,p)$ : $\boxed{P(X=k)=\dbinom{n}{k}p^k(1-p)^{n-k}}$.
- $\boxed{P(X\geqslant k)=1-P(X\leqslant k-1)}$ ; $\boxed{P(k\leqslant X\leqslant k')=P(X\leqslant k')-P(X\leqslant k-1)}$.

## Sommes de variables, concentration, LGN

- Linéarité : $\boxed{E(X+Y)=E(X)+E(Y)}$, $\boxed{E(aX)=aE(X)}$.
- Variance (si indépendance) : $\boxed{V(X+Y)=V(X)+V(Y)}$ ; $\boxed{V(aX)=a^2V(X)}$.
- Loi binomiale : $\boxed{E(X)=np}$, $\boxed{V(X)=np(1-p)}$, $\boxed{\sigma(X)=\sqrt{np(1-p)}}$.
- Échantillon (moyenne $M_n$) : $\boxed{E(M_n)=\mu, \quad V(M_n)=\dfrac{V}{n}, \quad \sigma(M_n)=\dfrac{\sigma}{\sqrt n}}$.
- Bienaymé-Tchebychev : $\boxed{P(|X-\mu|\geqslant\delta)\leqslant\dfrac{V(X)}{\delta^2}}$ ; concentration : $\boxed{P(|M_n-\mu|\geqslant\delta)\leqslant\dfrac{V}{n\delta^2}}$.

## Produit scalaire dans l'espace

- $\boxed{\vec{u}\cdot\vec{v}=\|\vec{u}\|\,\|\vec{v}\|\cos\theta}$ ; en base orthonormée : $\boxed{\vec{u}\cdot\vec{v}=xx'+yy'+zz'}$.
- $\boxed{\vec{u}\cdot\vec{u}=\|\vec{u}\|^2}$ ; $\boxed{\|\vec{u}\|=\sqrt{x^2+y^2+z^2}}$ ; $\boxed{AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}}$.
- Orthogonalité : $\boxed{\vec{u}\perp\vec{v}\iff\vec{u}\cdot\vec{v}=0}$.
- $\boxed{\|\vec{u}+\vec{v}\|^2=\|\vec{u}\|^2+2\vec{u}\cdot\vec{v}+\|\vec{v}\|^2}$.

## Vecteurs, droites et plans de l'espace

- Droite : $\boxed{\overrightarrow{AM}=t\,\vec{u}}$ ; plan : $\boxed{\overrightarrow{AM}=s\,\vec{u}+t\,\vec{v}}$.
- Vecteur normal $\vec n$ à $\mathcal P$ : $\boxed{\vec n\cdot\vec u=0 \text{ et } \vec n\cdot\vec v=0}$ ; $\boxed{M\in\mathcal P\iff\overrightarrow{AM}\cdot\vec n=0}$.
- Représentation paramétrique : $\boxed{\begin{cases}x=x_A+ta\\y=y_A+tb\\z=z_A+tc\end{cases}}$ ; équation cartésienne du plan : $\boxed{ax+by+cz+d=0}$ (avec $\vec n(a,b,c)$).
- Distance point-plan : $\boxed{d(M,\mathcal P)=MH}$ ($H$ projeté orthogonal) ; plans perpendiculaires : $\vec n\cdot\vec{n'}=0$.

## Logique et ensembles

- $\boxed{A\subset B\iff (\forall x,\ x\in A\Rightarrow x\in B)}$.
- Négation des quantificateurs : $\boxed{\text{non}(\forall x, P)\iff\exists x,\text{ non }P}$ ; $\boxed{\text{non}(\exists x, P)\iff\forall x,\text{ non }P}$.
- $\boxed{\text{non}(P\Rightarrow Q)\iff(P \text{ et non } Q)}$ ; contraposée : $\boxed{(P\Rightarrow Q)\iff(\text{non }Q\Rightarrow\text{non }P)}$.

## Algorithmique (listes Python)

- Définition : `L = [1, 2, 3, 4, 5]` ; en compréhension : `L = [f(x) for x in ...]`.
- Indices à partir de 0 ; `range`, parcours par `for`, ajout par `append`.

<!-- notes de production : source = contenu/terminale/maths-specialite/*/fiche.md (14 chapitres), formules repérées via grep "boxed" + titres ## et tableaux. Points à confronter : tables de dérivées/primitives usuelles présentées en tableaux non-boxed dans les fiches (calcul-integral §8, primitives §3, derivation) — résumées ici par les formules encadrées ; projeté orthogonal en coordonnées (produit-scalaire §11) non détaillé, aide-mémoire volontairement compact. -->
