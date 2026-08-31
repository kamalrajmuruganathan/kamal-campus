---
id: premiere-maths-specialite
titre: "Formulaire — Première Mathématiques"
niveau: premiere
matiere: mathematiques
statut: brouillon
relu_par: null
---

Aide-mémoire — spécialité mathématiques de première. Formules incontournables.

## Second degré

- Forme : $f(x) = ax^2+bx+c$, $\boxed{a\neq 0}$. Discriminant : $\boxed{\Delta = b^2 - 4ac}$.
- $\Delta > 0$ : deux racines $\boxed{x_{1,2} = \dfrac{-b\pm\sqrt{\Delta}}{2a}}$, forme factorisée $a(x-x_1)(x-x_2)$.
- $\Delta = 0$ : racine double $\boxed{x_0 = \dfrac{-b}{2a}}$, forme $a(x-x_0)^2$.
- $\Delta < 0$ : aucune racine réelle.
- Somme / produit : $\boxed{S = x_1+x_2 = -\dfrac{b}{a}} \qquad \boxed{P = x_1 x_2 = \dfrac{c}{a}}$
- Signe : « signe de $a$ à l'extérieur des racines », signe de $-a$ entre les racines.

## Suites numériques

- **Arithmétique** (raison $r$) : $\boxed{u_{n+1} = u_n + r}$, terme général $\boxed{u_n = u_0 + nr}$.
- **Géométrique** (raison $q$) : $\boxed{u_{n+1} = q\,u_n}$, terme général $\boxed{u_n = u_0\,q^n}$.
- Sommes : $\boxed{1+2+\cdots+n = \dfrac{n(n+1)}{2}} \qquad \boxed{1+q+\cdots+q^n = \dfrac{1-q^{n+1}}{1-q}}$

## Dérivation

- Nombre dérivé : $\boxed{f'(a) = \lim\limits_{h\to 0}\dfrac{f(a+h)-f(a)}{h}}$
- Tangente en $a$ : $\boxed{y = f'(a)(x-a) + f(a)}$

| $f(x)$ | $k$ | $x^n$ | $\dfrac{1}{x}$ | $\sqrt{x}$ | $\mathrm{e}^x$ |
|---|---|---|---|---|---|
| $f'(x)$ | $0$ | $n\,x^{n-1}$ | $-\dfrac{1}{x^2}$ | $\dfrac{1}{2\sqrt{x}}$ | $\mathrm{e}^x$ |

- Opérations : $(uv)' = \boxed{u'v + uv'} \qquad \left(\dfrac{u}{v}\right)' = \boxed{\dfrac{u'v - uv'}{v^2}}$

## Variations et courbes

- $f$ croissante $\iff f'\geqslant 0$ ; décroissante $\iff f'\leqslant 0$.
- Extremum local en $a$ : $\boxed{f'(a) = 0}$ avec changement de signe de $f'$.

## Fonction exponentielle

- Définition : $\boxed{f' = f \text{ et } f(0) = 1}$ ; $\boxed{\mathrm{e}^x > 0}$ pour tout $x$.
- $\boxed{\mathrm{e}^{a+b} = \mathrm{e}^a\times\mathrm{e}^b} \qquad \mathrm{e}^{-a} = \dfrac{1}{\mathrm{e}^a} \qquad (\mathrm{e}^{ax+b})' = \boxed{a\,\mathrm{e}^{ax+b}}$

## Produit scalaire

$$\boxed{\vec{u}\cdot\vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos\theta} \qquad \boxed{\vec{u}\cdot\vec{v} = xx' + yy'}$$

- Orthogonalité : $\boxed{\vec{u}\perp\vec{v} \iff \vec{u}\cdot\vec{v} = 0}$
- $\boxed{\|\vec{u}+\vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u}\cdot\vec{v} + \|\vec{v}\|^2}$
- Al-Kashi : $\boxed{a^2 = b^2 + c^2 - 2bc\cos\widehat{A}}$

## Géométrie repérée (repère orthonormé)

- Distance : $\boxed{AB = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}}$
- Milieu de $[AB]$ : $\left(\dfrac{x_A+x_B}{2}\,;\,\dfrac{y_A+y_B}{2}\right)$
- Droite $ax+by+c=0$ : vecteur normal $\vec{n}\begin{pmatrix}a\\b\end{pmatrix}$.
- Cercle de centre $(x_0;y_0)$, rayon $R$ : $\boxed{(x-x_0)^2 + (y-y_0)^2 = R^2}$

## Trigonométrie

- Cercle trigonométrique : point $\boxed{M(\cos x\,;\sin x)}$. Radians $= \text{degrés}\times\dfrac{\pi}{180}$.
- $\boxed{\cos^2 x + \sin^2 x = 1}$ ; $\cos(x+2k\pi) = \cos x$, $\sin(x+2k\pi) = \sin x$.
- Tangente : $\boxed{\tan x = \dfrac{\sin x}{\cos x}}$ (si $\cos x \neq 0$) ; $\tan(x+k\pi)=\tan x$.

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ |
| $\sin x$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |
| $\tan x$ | $0$ | $\dfrac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | $\times$ |

**Angles associés** (se retrouvent en tournant sur le cercle) :

- Opposé : $\boxed{\cos(-x)=\cos x, \quad \sin(-x)=-\sin x}$
- Supplémentaire : $\boxed{\cos(\pi-x)=-\cos x, \quad \sin(\pi-x)=\sin x}$
- Décalé de $\pi$ : $\boxed{\cos(\pi+x)=-\cos x, \quad \sin(\pi+x)=-\sin x}$
- Complémentaire : $\boxed{\cos\!\left(\tfrac{\pi}{2}-x\right)=\sin x, \quad \sin\!\left(\tfrac{\pi}{2}-x\right)=\cos x}$
- Décalé de $\tfrac{\pi}{2}$ : $\boxed{\cos\!\left(\tfrac{\pi}{2}+x\right)=-\sin x, \quad \sin\!\left(\tfrac{\pi}{2}+x\right)=\cos x}$

## Probabilités conditionnelles

$$\boxed{P_A(B) = \frac{P(A\cap B)}{P(A)}} \qquad \boxed{P(A\cap B) = P(A)\times P_A(B)}$$

- Probabilités totales : $\boxed{P(B) = P(A\cap B) + P(\overline{A}\cap B)}$
- Indépendance : $\boxed{P(A\cap B) = P(A)\times P(B)}$

## Variables aléatoires

- Loi : $\boxed{\sum_{i=1}^n p_i = 1}$. Espérance : $\boxed{E(X) = \sum x_i p_i}$.
- Variance : $\boxed{V(X) = E(X^2) - (E(X))^2}$ ; écart-type $\sigma(X) = \sqrt{V(X)}$.
- $\boxed{E(aX+b) = a\,E(X)+b} \qquad V(aX+b) = a^2 V(X) \qquad \sigma(aX+b) = |a|\,\sigma(X)$
- Échantillon : $m$ approche $\mu$ à environ $\boxed{\dfrac{2\sigma}{\sqrt{n}}}$ près.

<!-- notes de production : source = contenu/premiere/maths-specialite/*/fiche.md, formules repérées via grep "boxed" + titres de section et tableaux (dérivées usuelles, valeurs trigo, discriminant). Points à confronter : distance point-droite non traitée dans la fiche géométrie-reperée ; fonction ln hors programme de première spé (seule l'exponentielle figure). -->
