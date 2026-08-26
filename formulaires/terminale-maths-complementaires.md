---
id: terminale-maths-complementaires
titre: "Formulaire — Terminale Mathématiques complémentaires"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

Aide-mémoire — option mathématiques complémentaires de terminale. L'essentiel, par thème.

## Suites et modèles d'évolution

- Récurrence : $\boxed{u_0 \text{ donné}, \quad u_{n+1}=f(u_n)}$.
- Géométrique : $\boxed{u_{n+1}=q\,u_n}$, $\boxed{u_n=u_0\,q^n}$.
- Arithmético-géométrique $\boxed{u_{n+1}=a\,u_n+b}$ : point fixe $\boxed{\ell=\dfrac{b}{1-a}}$, terme général $\boxed{u_n=(u_0-\ell)a^n+\ell}$.
- Limite : si $|a|<1$, $u_n\to\ell$ ; si $a>1$ (et $u_0\neq\ell$), $u_n\to\pm\infty$.

## Continuité et TVI

- $\boxed{f \text{ continue en } a \iff \lim\limits_{x\to a} f(x)=f(a)}$ ; $\boxed{f \text{ dérivable} \Rightarrow f \text{ continue}}$.
- TVI : $f$ continue sur $[a;b]$, $k$ entre $f(a)$ et $f(b)$ $\Rightarrow \exists\, c\in[a;b],\ f(c)=k$.
- Cas strictement monotone : existence ET unicité de $c$.

## Dérivation, variations et convexité

- Tangente en $a$ : $\boxed{y=f'(a)(x-a)+f(a)}$.
- Extremum local : $f'$ s'annule en changeant de signe.
- $\boxed{f \text{ convexe} \iff f''\geqslant 0}$ ; $\boxed{f \text{ concave} \iff f''\leqslant 0}$. Point d'inflexion : $f''$ change de signe.

## Exponentielle et logarithme

- Exp : $\boxed{e^{a+b}=e^a e^b, \quad e^{-a}=\tfrac{1}{e^a}, \quad e^{a-b}=\tfrac{e^a}{e^b}, \quad (e^a)^n=e^{na}}$ ; $\boxed{(e^x)'=e^x}$.
- $\boxed{\lim\limits_{x\to-\infty}e^x=0^+ \qquad \lim\limits_{x\to+\infty}e^x=+\infty}$
- Ln : $\boxed{\ln x=y\iff x=e^y}$ ($x>0$) ; $\boxed{\ln(e^x)=x, \quad e^{\ln x}=x}$ ; $\boxed{\ln 1=0, \quad \ln e=1}$.
- $\boxed{\ln(ab)=\ln a+\ln b \qquad \ln\!\left(\tfrac{a}{b}\right)=\ln a-\ln b \qquad \ln(a^n)=n\ln a}$
- $\boxed{(\ln x)'=\dfrac{1}{x}}$, croissante sur $]0;+\infty[$ ; $\boxed{\lim\limits_{x\to 0^+}\ln x=-\infty, \quad \lim\limits_{x\to+\infty}\ln x=+\infty}$.
- Croissances comparées : $\boxed{\lim\limits_{x\to+\infty}\dfrac{e^x}{x^n}=+\infty, \quad \lim\limits_{x\to-\infty}x^n e^x=0}$ ; $\boxed{\lim\limits_{x\to+\infty}\dfrac{\ln x}{x^n}=0, \quad \lim\limits_{x\to 0^+}x^n\ln x=0}$.

## Primitives et équations différentielles

- $\boxed{F \text{ primitive de } f \iff F'=f}$ ; deux primitives diffèrent d'une constante $C$.
- Linéarité : $F+G$ primitive de $f+g$, $kF$ primitive de $kf$.
- $\boxed{y'=ay \iff y(x)=Ce^{ax}}$ ; $\boxed{y'=ay+b \iff y(x)=Ce^{ax}-\dfrac{b}{a}}$.

## Calcul intégral (aires)

- $\boxed{\displaystyle\int_a^b f(x)\,dx = F(b)-F(a)}$.
- Linéarité : $\boxed{\displaystyle\int_a^b (f+g)=\int_a^b f+\int_a^b g}$ ; valeur moyenne : $\boxed{\mu=\dfrac{1}{b-a}\displaystyle\int_a^b f}$.
- Si $f\leqslant 0$ : $\boxed{\mathcal A=-\displaystyle\int_a^b f}$ ; entre deux courbes : $\boxed{\mathcal A=\displaystyle\int_a^b (f-g)}$ ($f\geqslant g$).

## Probabilités : conditionnelles, Bayes, binomiale

- Conditionnelle : $\boxed{P_A(B)=\dfrac{P(A\cap B)}{P(A)}}$ ; produit : $\boxed{P(A\cap B)=P(A)\,P_A(B)}$.
- Probabilités totales : $\boxed{P(B)=\sum_{i} P(A_i)\,P_{A_i}(B)}$.
- Bayes : $\boxed{P_B(A)=\dfrac{P(A)\,P_A(B)}{P(B)}}$.
- Bernoulli : $\boxed{P(X=1)=p, \quad P(X=0)=1-p}$.
- Binomiale $B(n,p)$ : $\boxed{P(X=k)=\dbinom{n}{k}p^k(1-p)^{n-k}}$ ; $\boxed{E(X)=np}$.
- $\boxed{P(X\geqslant k)=1-P(X\leqslant k-1)}$ ; $\boxed{P(k\leqslant X\leqslant k')=P(X\leqslant k')-P(X\leqslant k-1)}$.

## Lois à densité (temps d'attente)

- $\boxed{P(c\leqslant X\leqslant d)=\displaystyle\int_c^d f(x)\,dx}$ ; espérance : $\boxed{E(X)=\displaystyle\int_I x\,f(x)\,dx}$.
- Loi uniforme sur $[a;b]$ : $\boxed{f(x)=\dfrac{1}{b-a}}$ ; $\boxed{P(c\leqslant X\leqslant d)=\dfrac{d-c}{b-a}}$ ; $\boxed{E(X)=\dfrac{a+b}{2}}$.
- Loi exponentielle : $\boxed{f(t)=\lambda e^{-\lambda t}}$ ($t\geqslant 0$) ; $\boxed{P(X\leqslant t)=1-e^{-\lambda t}, \quad P(X>t)=e^{-\lambda t}}$ ; $\boxed{E(X)=\dfrac{1}{\lambda}}$.
- Absence de mémoire : $\boxed{P_{X>s}(X>s+t)=P(X>t)}$.

<!-- notes de production : source = contenu/terminale/maths-complementaires/*/fiche.md (8 chapitres), formules repérées via grep "boxed" + titres ##. Points à confronter : tables de dérivées/primitives usuelles en tableaux non-boxed (derivation-convexite §3, primitives §3) résumées par les formules encadrées. -->
