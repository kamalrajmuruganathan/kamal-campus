---
id: tale-sti2d-math-integration-composition
titre: "Composition, primitives et intégration"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 14
prerequis:
  - Dérivation (Première STI2D/STL)
  - Fonction exponentielle de base e (Terminale STI2D/STL)
  - Fonction logarithme népérien (Terminale STI2D/STL)
statut: brouillon
relu_par: null
---

# Composition, primitives et intégration

> Quelle est la tension **moyenne** d'un signal qui varie sans arrêt ? Quelle
> énergie a été consommée entre deux instants ? Ces questions de STI2D et de STL
> se résolvent avec l'**intégrale**, qui mesure une aire sous une courbe. Et pour
> calculer des intégrales, il faut savoir remonter une dérivée — donc d'abord
> savoir dériver des fonctions **composées** comme $e^{-2t}$ ou $\cos(\omega t)$,
> celles qui décrivent tous les signaux de tes autres cours. Ce chapitre enchaîne
> les trois maillons : composer, primitiver, intégrer.

---

## 1. Composée de deux fonctions

Composer deux fonctions, c'est les appliquer **l'une après l'autre**.

**Définition.** Si $u$ et $v$ sont deux fonctions, la **composée** $v \circ u$
(lire « $v$ rond $u$ ») est la fonction :

$$\boxed{(v \circ u)(x) = v\big(u(x)\big)}$$

On applique **d'abord $u$**, puis $v$ au résultat : $x \longmapsto u(x) \longmapsto v\big(u(x)\big)$.

> **Exemple.** $u(x) = 3x + 1$ et $v(x) = x^4$. Alors
> $(v \circ u)(x) = v(3x+1) = (3x+1)^4$. Dans l'autre sens,
> $(u \circ v)(x) = u(x^4) = 3x^4 + 1$ : **l'ordre compte** !

### Identifier une composée

C'est la capacité de base : devant $h(x) = e^{-2x}$, reconnaître la fonction
**intérieure** $u(x) = -2x$ et la fonction **extérieure** $v(x) = e^x$.

| Fonction | Intérieure $u$ | Extérieure $v$ |
|---|---|---|
| $(3x+1)^4$ | $3x + 1$ | $x^4$ |
| $e^{-2x}$ | $-2x$ | $e^x$ |
| $\cos(100\pi t)$ | $100\pi t$ | $\cos x$ |
| $\ln(x^2+1)$ | $x^2 + 1$ | $\ln x$ |

⚠️ $v \circ u$ n'est définie que si $u(x)$ est dans l'ensemble de définition de $v$ : pour $\ln\big(u(x)\big)$, il faut $u(x) > 0$.

---

## 2. Dériver une composée

### La formule générale

$$\boxed{(v \circ u)' = u' \times (v' \circ u)}$$

En clair : la dérivée de $v\big(u(x)\big)$ est $u'(x) \times v'\big(u(x)\big)$ —
la dérivée de l'**intérieure**, multipliée par la dérivée de l'**extérieure
évaluée en $u(x)$**.

> **Exemple.** $h(x) = (3x+1)^4$ : $u(x) = 3x+1$, $u'(x) = 3$, $v(x) = x^4$,
> $v'(x) = 4x^3$. Donc $h'(x) = 3 \times 4(3x+1)^3 = 12(3x+1)^3$.

### Les quatre cas du programme

Avec $u$ dérivable, $n$ entier $\geqslant 1$, et $u > 0$ pour le logarithme :

$$\boxed{(u^n)' = n\,u'\,u^{n-1} \qquad (\cos u)' = -u'\sin u \qquad (e^u)' = u'\,e^u \qquad (\ln u)' = \frac{u'}{u}}$$

> **Exemples.**
> - $\big(e^{-2x}\big)' = -2\,e^{-2x}$ (avec $u = -2x$, $u' = -2$).
> - $\big(\cos(100\pi t)\big)' = -100\pi \sin(100\pi t)$ — la dérivée d'un signal
>   sinusoïdal de pulsation $\omega$ est multipliée par $\omega$.
> - $\big(\ln(x^2+1)\big)' = \dfrac{2x}{x^2+1}$ (avec $u = x^2+1 > 0$ partout).

⚠️ Le facteur $u'$ est **le** réflexe du chapitre. $\big(e^{-2x}\big)' = e^{-2x}$
est faux : il manque le $-2$.

---

## 3. Primitives des fonctions composées

**Rappel.** $F$ est une **primitive** de $f$ sur un intervalle si $F' = f$.
Deux primitives d'une même fonction diffèrent d'une constante.

En lisant le tableau du §2 **à l'envers**, on obtient les trois formes du
programme. Si tu reconnais dans $f$ le produit $u' \times (\text{fonction de } u)$,
tu sais primitiver :

| Forme de $f$ | Une primitive $F$ |
|---|---|
| $u'\,u^n$ ($n \geqslant 1$) | $\dfrac{u^{n+1}}{n+1}$ |
| $u'\,e^{u}$ | $e^{u}$ |
| $u'\cos u$ | $\sin u$ |

$$\boxed{u'u^n \;\to\; \frac{u^{n+1}}{n+1} \qquad u'e^u \;\to\; e^u \qquad u'\cos u \;\to\; \sin u}$$

> **Exemple (forme $u'e^u$).** $f(x) = 2x\,e^{x^2}$ : on pose $u = x^2$, alors
> $u' = 2x$ est **exactement** le facteur devant l'exponentielle. Une primitive
> est $F(x) = e^{x^2}$. Vérification : $F'(x) = 2x\,e^{x^2} = f(x)$. ✓

### Méthode : ajuster la constante

Le facteur $u'$ n'est presque jamais servi tout cuit : il faut **ajuster par une
constante multiplicative** (et seulement par une constante !).

1. Repère $u$ et calcule $u'$.
2. Fais apparaître $u'$ de force : $f(x) = k \times u'(x) \times (\dots)$.
3. Primitive : $k \times$ (la primitive du tableau).

> **Exemple 1.** $f(x) = e^{3x}$. Ici $u = 3x$, $u' = 3$. On écrit
> $f(x) = \dfrac{1}{3} \times 3e^{3x}$, d'où $F(x) = \dfrac{1}{3}e^{3x}$.
>
> **Exemple 2.** $f(t) = \cos(100\pi t)$. Ici $u = 100\pi t$, $u' = 100\pi$ :
> $F(t) = \dfrac{1}{100\pi}\sin(100\pi t)$ — primitiver un signal de pulsation
> $\omega$ fait apparaître un facteur $\dfrac{1}{\omega}$.

⚠️ On ne peut ajuster que par une **constante**. Si le facteur manquant contient
$x$ (par exemple primitiver $e^{x^2}$ seul, sans le $2x$), les formules du
tableau ne s'appliquent pas.

---

## 4. L'intégrale : une aire sous une courbe

**Définition.** Soit $f$ **continue et positive** sur $[a\,;b]$. L'**intégrale**
$$\boxed{\int_a^b f(x)\,dx}$$
est l'**aire**, en unités d'aire, du domaine délimité par la courbe de $f$,
l'axe des abscisses et les droites verticales $x = a$ et $x = b$.

> **Exemple.** $f(x) = 3$ sur $[1\,;4]$ : le domaine est un rectangle de largeur
> $3$ et de hauteur $3$, donc $\displaystyle\int_1^4 3\,dx = 9$. La lettre
> d'intégration est **muette** : $\int_a^b f(x)\,dx = \int_a^b f(t)\,dt$.

### La méthode des rectangles

Quand le domaine n'est pas un rectangle ou un triangle, on **encadre** l'aire en
la pavant de rectangles. On découpe $[a\,;b]$ en $n$ tranches de même largeur ;
sur chaque tranche, un rectangle **sous** la courbe et un rectangle qui la
**dépasse**.

> **Exemple.** Aire sous $f(x) = x^2$ sur $[0\,;1]$, avec $n = 5$ tranches de
> largeur $0{,}2$. Comme $f$ est croissante :
> - rectangles bas (hauteur à gauche) : $0{,}2\,(0^2 + 0{,}2^2 + 0{,}4^2 + 0{,}6^2 + 0{,}8^2) = 0{,}24$ ;
> - rectangles hauts (hauteur à droite) : $0{,}2\,(0{,}2^2 + \dots + 1^2) = 0{,}44$.
>
> Donc $0{,}24 \leqslant \displaystyle\int_0^1 x^2\,dx \leqslant 0{,}44$. En
> augmentant $n$, l'encadrement se resserre vers la vraie valeur ($\frac{1}{3}$,
> voir §5). C'est ainsi que procèdent les calculatrices et les tableurs.

### Fonctions de signe quelconque

Pour une fonction **négative** sur $[a\,;b]$, l'intégrale compte l'aire **en
négatif** : $\int_a^b f(x)\,dx = -\mathcal{A}$, où $\mathcal{A}$ est l'aire
(positive) entre la courbe et l'axe. Si $f$ change de signe, l'intégrale fait la
**différence** entre l'aire au-dessus de l'axe et l'aire en dessous — elle peut
être nulle sans que les aires le soient (c'est le cas d'une sinusoïde sur une
période, voir §7).

---

## 5. Calculer une intégrale avec une primitive

### La fonction aire

**Théorème.** Si $f$ est continue sur $[a\,;b]$, la fonction
$$F(x) = \int_a^x f(t)\,dt$$
(l'aire accumulée de $a$ jusqu'à $x$) est **dérivable, et $F' = f$** : c'est la
primitive de $f$ qui s'annule en $a$. C'est le pont entre les deux moitiés du
chapitre : **dériver l'aire redonne la fonction**.

### La formule fondamentale

**Théorème.** Si $F$ est une primitive **quelconque** de $f$ sur $[a\,;b]$ :

$$\boxed{\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)}$$

> **Exemple 1.** $\displaystyle\int_0^1 x^2\,dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3} - 0 = \frac{1}{3}$
> — cohérent avec l'encadrement $0{,}24 \leqslant \frac13 \leqslant 0{,}44$ du §4. ✓
>
> **Exemple 2 (avec une composée).** $\displaystyle\int_0^1 x\,e^{x^2}\,dx$ :
> forme $u'e^u$ après ajustement, $F(x) = \frac{1}{2}e^{x^2}$, donc
> $$\int_0^1 x\,e^{x^2}\,dx = \frac{1}{2}e^{1} - \frac{1}{2}e^{0} = \frac{e-1}{2} \approx 0{,}86.$$

La constante de la primitive n'a aucune importance : elle disparaît dans la
soustraction. Et l'ordre est $F(b) - F(a)$, **borne du haut d'abord**.

---

## 6. Propriétés de l'intégrale

$f$ et $g$ sont continues sur les intervalles considérés, $a \leqslant b$.

### Linéarité

$$\boxed{\int_a^b \big(f + g\big) = \int_a^b f + \int_a^b g \qquad \int_a^b k f = k \int_a^b f}$$

> **Exemple.** Si $\int_0^2 f = 5$ et $\int_0^2 g = -1$, alors
> $\int_0^2 (3f + g) = 3 \times 5 + (-1) = 14$.

### Positivité et croissance

Si $f \geqslant 0$ sur $[a\,;b]$, alors $\int_a^b f \geqslant 0$.
Plus généralement, si $f \leqslant g$ sur $[a\,;b]$, alors
$\int_a^b f \leqslant \int_a^b g$ : **intégrer conserve les inégalités**.

> **Exemple.** Sur $[0\,;1]$, $x^2 \leqslant x$, donc
> $\int_0^1 x^2\,dx \leqslant \int_0^1 x\,dx$, soit $\frac13 \leqslant \frac12$. ✓

### Relation de Chasles

$$\boxed{\int_a^b f(x)\,dx + \int_b^c f(x)\,dx = \int_a^c f(x)\,dx}$$

On recolle deux aires côte à côte. Indispensable pour une fonction définie **par
morceaux** (signal en créneau, rampe…).

> **Exemple.** Si $\int_0^2 f = 3$ et $\int_2^5 f = 4$, alors $\int_0^5 f = 7$.

### Aire entre deux courbes

Si $f \geqslant g$ sur $[a\,;b]$, l'aire entre les deux courbes vaut
$\displaystyle\int_a^b \big(f(x) - g(x)\big)\,dx$ (la courbe du **haut** moins
celle du **bas**).

---

## 7. Valeur moyenne — l'application reine en STI2D/STL

**Définition.** La **valeur moyenne** de $f$ sur $[a\,;b]$ ($a < b$) est :

$$\boxed{\mu = \frac{1}{b-a}\int_a^b f(x)\,dx}$$

Géométriquement : $\mu$ est la hauteur du **rectangle** de base $[a\,;b]$ qui a
la même aire que le domaine sous la courbe — on « aplatit » le signal sans
changer l'aire.

> **Exemple simple.** Valeur moyenne de $f(x) = x^2$ sur $[0\,;3]$ :
> $\mu = \dfrac{1}{3}\displaystyle\int_0^3 x^2\,dx = \dfrac{1}{3} \times \dfrac{27}{3} = 3$.

### Application phare : valeur moyenne d'un signal

En électricité, la **valeur moyenne d'une tension** $u(t)$ sur une durée $T$ est
$\langle u \rangle = \dfrac{1}{T}\displaystyle\int_0^T u(t)\,dt$ : c'est ce
qu'affiche un voltmètre en position DC.

> **Exemple (signal redressé).** $u(t) = 10\sin(100\pi t)$ (en volts), signal
> $50$ Hz de période $T = 0{,}02$ s, redressé simple alternance : on le moyenne
> sur la demi-période $[0\,;0{,}01]$.
> Une primitive de $\sin(100\pi t)$ est $-\dfrac{1}{100\pi}\cos(100\pi t)$
> (ajustement de constante, §3). Donc
> $$\int_0^{0{,}01} 10\sin(100\pi t)\,dt = \left[-\frac{10}{100\pi}\cos(100\pi t)\right]_0^{0{,}01} = \frac{1}{10\pi}\big(-\cos\pi + \cos 0\big) = \frac{2}{10\pi} = \frac{1}{5\pi},$$
> et $\langle u \rangle = \dfrac{1}{0{,}01} \times \dfrac{1}{5\pi} = \dfrac{20}{\pi} \approx 6{,}37$ V.
> On retrouve la formule des cours d'électricité : $\langle u \rangle = \dfrac{2U_{\max}}{\pi}$.

⚠️ Sur une **période complète**, la valeur moyenne d'une sinusoïde pure est
**nulle** : l'aire de l'alternance positive compense exactement celle de
l'alternance négative. Ne confonds pas avec la **valeur efficace**
$\frac{U_{\max}}{\sqrt{2}}$, qui, elle, n'est pas nulle.

---

## 8. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Composée | $(v \circ u)(x) = v\big(u(x)\big)$ — d'abord $u$, puis $v$ |
| Dérivée d'une composée | $(v \circ u)' = u' \times (v' \circ u)$ |
| Dérivées usuelles | $(u^n)' = n u' u^{n-1}$ ; $(\cos u)' = -u'\sin u$ ; $(e^u)' = u'e^u$ ; $(\ln u)' = \frac{u'}{u}$ |
| Primitives usuelles | $u'u^n \to \frac{u^{n+1}}{n+1}$ ; $u'e^u \to e^u$ ; $u'\cos u \to \sin u$ |
| Intégrale ($f \geqslant 0$) | aire sous la courbe entre $x = a$ et $x = b$ |
| Méthode des rectangles | encadrement de l'aire, se resserre quand $n$ augmente |
| $f \leqslant 0$ | $\int_a^b f = -\mathcal{A}$ : l'aire est comptée en négatif |
| Calcul | $\int_a^b f(x)\,dx = F(b) - F(a)$, et $\big(\int_a^x f(t)\,dt\big)' = f(x)$ |
| Linéarité | $\int (kf + g) = k\int f + \int g$ |
| Chasles | $\int_a^b f + \int_b^c f = \int_a^c f$ |
| Valeur moyenne | $\mu = \frac{1}{b-a}\int_a^b f$ ; sinusoïde sur une période : $0$ |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier le facteur $u'$ en dérivant une composée.** $\big(e^{-2x}\big)' = -2e^{-2x}$,
   pas $e^{-2x}$. Même réflexe pour $\cos(\omega t)$ : le $\omega$ sort en facteur.
2. **Primitiver sans ajuster la constante.** Une primitive de $e^{3x}$ est
   $\frac{1}{3}e^{3x}$, pas $e^{3x}$ ni $3e^{3x}$. Vérifie **toujours** en
   redérivant ta primitive : tu dois retomber sur $f$.
3. **Ajuster par autre chose qu'une constante.** Écrire que la primitive de
   $e^{x^2}$ est $\frac{1}{2x}e^{x^2}$ est faux : on ne peut pas « diviser par
   $2x$ ». Sans le facteur $u'$ (à constante près), les formules ne s'appliquent pas.
4. **Écrire $F(a) - F(b)$** au lieu de $F(b) - F(a)$ : tout le résultat change de
   signe. Borne du **haut** d'abord.
5. **Confondre aire et intégrale pour une fonction négative.** Une aire est
   toujours positive ; si $f \leqslant 0$, l'aire vaut $-\int_a^b f$.
6. **Oublier le facteur $\frac{1}{b-a}$ dans la valeur moyenne** — l'intégrale
   seule est une aire, pas une moyenne. Et ne confonds pas valeur moyenne (nulle
   pour une sinusoïde sur une période) et valeur efficace.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programme officiel de physique-chimie et mathématiques, enseignement de
spécialité, classe terminale, séries STI2D et STL — BO spécial n°8 du 25 juillet
2019 (arrêté MENE1921261A), en vigueur. Fichier local :
docs/programme-terminale-sti2d-stl-pc-maths.txt (extraction WebFetch depuis le
PDF officiel cache.media.education.gouv.fr, cf. en-tête du fichier), partie
MATHÉMATIQUES, sections « Composition de fonctions » et « Intégration ».
À confronter au PDF officiel avant publication (l'extraction ne contient ni
préambule ni commentaires du BO).

Correspondance contenus du programme → sections de la fiche :
- Composée v∘u ; dérivée (v∘u)' = u'×(v'∘u) → §1, §2
- Capacité : identifier une composée ; dériver (u)^n, cos(u), e^u, ln(u) → §1, §2
- Primitives de u'·f(u) ; formes u'u^n, u'e^u, u'cos u → §3
- Intégrale d'une fonction positive comme aire ; méthode des rectangles ;
  extension aux fonctions négatives → §4
- F(x) = ∫ₐˣ f(t)dt et sa dérivée ; ∫ₐᵇ f = F(b) − F(a) → §5
- Linéarité, positivité, croissance, relation de Chasles → §6
- Valeur moyenne (capacité : calculer intégrale, valeur moyenne, aire sous ou
  entre deux courbes) → §6 (aire entre deux courbes) et §7

Choix de rédaction :
- Chapitre bâti dans l'ordre du programme : composition → primitives des
  composées → intégration, la composition servant d'outil aux deux suivants.
- Application phare (esprit du programme PCM : croisement avec la partie
  physique « Énergie électrique — régime sinusoïdal ») : valeur moyenne d'un
  signal, redressement simple alternance, ⟨u⟩ = 2U_max/π, et distinction valeur
  moyenne / valeur efficace U_max/√2.
- (u^n)' donné pour n entier ≥ 1 ; le cas des exposants négatifs n'est pas
  développé (à valider par le relecteur si le PDF l'inclut).
- La dérivée de sin(u) n'est pas dans la liste officielle : sin apparaît
  seulement via la primitive de u'cos u et, dans l'exemple du signal, via la
  primitive de sin(ωt) = −cos(ωt)/ω, vérifiée par dérivation d'une composée.
- Restriction u > 0 pour ln(u) systématiquement rappelée.

Vérifications numériques faites :
- Rectangles, x² sur [0;1], n=5 : bas 0,2·(0+0,04+0,16+0,36+0,64)=0,24 ;
  haut 0,2·(0,04+0,16+0,36+0,64+1)=0,44 ; exact 1/3 ∈ [0,24 ; 0,44]. ✓
- ∫₀¹ x e^{x²} dx = (e−1)/2 ≈ 0,859. ✓
- Signal : T=0,02 s, ω=100π ; ∫₀^{0,01} 10 sin(100πt) dt = (10/100π)(1−cos π)
  = 20/(100π) = 1/(5π) ; ⟨u⟩ = 100 × 1/(5π) = 20/π ≈ 6,37 V = 2·10/π. ✓
- Valeur moyenne de x² sur [0;3] : (1/3)(27/3) = 3. ✓

À SOUMETTRE AU RELECTEUR :
- Le PDF officiel donne-t-il « valeur moyenne d'un signal » comme exemple
  explicite (contexte PCM) ? Le vocabulaire électrique (DC, redressement,
  valeur efficace) est emprunté à la partie physique du même programme.
- Périmètre exact de la méthode des rectangles (encadrement à la main vs
  algorithme) — ici traitée en encadrement numérique simple.
- La notation [F(x)]ₐᵇ et la fonction x ↦ ∫ₐˣ f(t)dt : niveau de formalisme
  attendu en voie technologique.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
