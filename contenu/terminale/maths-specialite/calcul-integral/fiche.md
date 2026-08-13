---
id: tale-spe-math-calcul-integral
titre: "Calcul intégral"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 14
prerequis:
  - Primitives d'une fonction continue (Terminale, chapitre voisin « Primitives, équations différentielles »)
  - Continuité et dérivation (Terminale)
statut: brouillon
relu_par: null
---

# Calcul intégral

> Intégrer, c'est **mesurer une aire**. Le point de départ n'est pas une formule,
> c'est une surface : celle qui se trouve sous une courbe. Tout le reste — le calcul
> avec les primitives, la linéarité, la valeur moyenne — découle de cette idée
> géométrique.

---

## 1. Définition : l'intégrale comme aire

On se place dans un repère orthogonal. Soit $f$ une fonction **continue et positive**
sur un segment $[a\,;b]$ (avec $a \leqslant b$).

L'**intégrale de $f$ sur $[a\,;b]$** est l'**aire**, exprimée en unités d'aire, du
domaine délimité par :

- la courbe représentative de $f$,
- l'axe des abscisses,
- les deux droites verticales d'équations $x = a$ et $x = b$.

On la note :

$$\boxed{\int_a^b f(x)\,dx}$$

- $a$ et $b$ sont les **bornes** de l'intégrale ($a$ borne inférieure, $b$ borne supérieure) ;
- $f(x)\,dx$ se lit « $f$ de $x$, $dx$ » ; la lettre $x$ est **muette** : $\int_a^b f(x)\,dx$
  et $\int_a^b f(t)\,dt$ désignent le même nombre.

> **À quoi ça sert.** Si $f(x) = 2$ sur $[0\,;3]$, le domaine est un rectangle de largeur $3$ et de hauteur $2$ : $\int_0^3 2\,dx = 3 \times 2 = 6$. L'intégrale retrouve bien l'aire du rectangle.

> ⚠️ Pour l'instant, la définition **exige** que $f$ soit positive. Le cas d'un signe quelconque viendra plus loin, par les primitives.

---

## 2. Le lien avec les primitives

C'est le résultat central du chapitre : il transforme un problème d'aire en un simple calcul de primitive (voir le chapitre voisin **« Primitives »**).

### La fonction $F_a$

**Théorème.** Si $f$ est continue et positive sur $[a\,;b]$, alors la fonction
$$F_a(x) = \int_a^x f(t)\,dt$$
est **la primitive de $f$ qui s'annule en $a$**.

> **Exemple.** $F_a(a) = \displaystyle\int_a^a f(t)\,dt = 0$ : l'aire sur un segment
> réduit à un point est nulle. C'est ce qui fixe la constante et rend cette primitive
> unique.

**Conséquence (admise, plus générale).** *Toute fonction continue sur un intervalle
admet des primitives.*

### La formule de calcul

**Théorème.** Si $F$ est **une primitive quelconque** de $f$ sur $[a\,;b]$, alors :

$$\boxed{\int_a^b f(x)\,dx = F(b) - F(a)}$$

On note aussi ce nombre $\big[F(x)\big]_a^b = F(b) - F(a)$.

> **Exemple.** Calcul de $\displaystyle\int_0^2 x\,dx$. Une primitive de $x$ est
> $\dfrac{x^2}{2}$, donc
> $$\int_0^2 x\,dx = \left[\dfrac{x^2}{2}\right]_0^2 = \dfrac{4}{2} - \dfrac{0}{2} = 2.$$
> Peu importe la primitive choisie : la constante ajoutée s'élimine dans la soustraction.

---

## 3. Extension à un signe quelconque

Grâce aux primitives, on **définit** l'intégrale même quand $f$ change de signe.

**Définition.** Si $f$ est continue sur un intervalle contenant $a$ et $b$, et si $F$ est
une primitive de $f$, on pose :

$$\int_a^b f(x)\,dx = F(b) - F(a).$$

Cette définition **contient** la précédente (elle coïncide avec l'aire quand $f \geqslant 0$) mais s'applique à toute fonction continue et à des bornes dans n'importe quel ordre.

> **Deux conséquences immédiates :**
> $$\int_a^a f(x)\,dx = 0 \qquad\text{et}\qquad \int_b^a f(x)\,dx = -\int_a^b f(x)\,dx.$$
> Échanger les bornes **change le signe** du résultat.

---

## 4. Propriétés de l'intégrale

Dans tout ce qui suit, $f$ et $g$ sont continues sur l'intervalle considéré.

### Linéarité

$$\boxed{\int_a^b \big(f(x) + g(x)\big)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx}
\qquad \int_a^b k\,f(x)\,dx = k\int_a^b f(x)\,dx$$

> **Exemple.** Si $\int_0^1 f = 2$ et $\int_0^1 g = 5$, alors $\int_0^1 (3f + g) = 3 \times 2 + 5 = 11$.

### Positivité

Si $f \geqslant 0$ sur $[a\,;b]$ (avec $a \leqslant b$), alors $\displaystyle\int_a^b f(x)\,dx \geqslant 0$.

> **Exemple.** $\int_0^1 x^2\,dx = \left[\frac{x^3}{3}\right]_0^1 = \frac13 \geqslant 0$ : normal, $x^2 \geqslant 0$.

### Intégration des inégalités

Si $f \leqslant g$ sur $[a\,;b]$ (avec $a \leqslant b$), alors :

$$\int_a^b f(x)\,dx \leqslant \int_a^b g(x)\,dx.$$

> **Exemple.** Sur $[0\,;1]$, $x^2 \leqslant x$, donc $\int_0^1 x^2\,dx \leqslant \int_0^1 x\,dx$, soit $\frac13 \leqslant \frac12$. ✓
> C'est l'outil pour **majorer ou minorer** une intégrale qu'on ne sait pas calculer.

### Relation de Chasles

$$\boxed{\int_a^b f(x)\,dx + \int_b^c f(x)\,dx = \int_a^c f(x)\,dx}$$

> **Exemple.** Si $\int_0^1 f = 3$ et $\int_1^4 f = 5$, alors $\int_0^4 f = 3 + 5 = 8$ : on recolle deux morceaux d'aire côte à côte.

---

## 5. Valeur moyenne

La **valeur moyenne** de $f$ sur $[a\,;b]$ (avec $a < b$) est le nombre :

$$\boxed{\mu = \dfrac{1}{b-a}\int_a^b f(x)\,dx}$$

C'est la hauteur du rectangle de base $[a\,;b]$ qui aurait **la même aire** que le domaine sous la courbe.

> **Exemple.** Valeur moyenne de $f(x) = x$ sur $[0\,;2]$ : $\mu = \dfrac{1}{2-0}\int_0^2 x\,dx = \dfrac{1}{2}\times 2 = 1.$

---

## 6. Méthodes de calcul

### Méthode 1 — Calculer avec une primitive

1. Trouve une primitive $F$ de $f$ (chapitre **Primitives**).
2. Écris $\big[F(x)\big]_a^b$, puis calcule $F(b) - F(a)$.

> **Exemple.** $\displaystyle\int_1^2 \dfrac{1}{x}\,dx = \big[\ln x\big]_1^2 = \ln 2 - \ln 1 = \ln 2.$

### Méthode 2 — Intégration par parties

Pour $u$ et $v$ dérivables, de dérivées continues :

$$\boxed{\int_a^b u(x)\,v'(x)\,dx = \big[u(x)\,v(x)\big]_a^b - \int_a^b u'(x)\,v(x)\,dx}$$

On l'utilise quand l'intégrande est un **produit** dont une partie se simplifie en dérivant.

> **Exemple.** $\displaystyle\int_0^1 x\,e^x\,dx$ : on pose $u = x$ ($u' = 1$) et $v' = e^x$ ($v = e^x$), d'où
> $$\int_0^1 x e^x\,dx = \big[x e^x\big]_0^1 - \int_0^1 e^x\,dx = e - \big[e^x\big]_0^1 = e - (e - 1) = 1.$$

### Méthode 3 — Aire entre deux courbes

Si, sur $[a\,;b]$, la courbe de $f$ est **au-dessus** de celle de $g$ (donc $f \geqslant g$),
l'aire comprise entre les deux courbes vaut :

$$\boxed{\mathcal{A} = \int_a^b \big(f(x) - g(x)\big)\,dx}$$

> **Exemple.** Entre $f(x) = x$ et $g(x) = x^2$ sur $[0\,;1]$ (où $x \geqslant x^2$) :
> $$\mathcal{A} = \int_0^1 (x - x^2)\,dx = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1
> = \dfrac{1}{2} - \dfrac{1}{3} = \dfrac{1}{6}.$$

### Méthode 4 — Étudier une suite d'intégrales

Une suite peut être définie par $I_n = \displaystyle\int_a^b f_n(x)\,dx$. On étudie alors
son sens de variation (souvent par intégration des inégalités), une éventuelle
**relation de récurrence** (souvent obtenue par intégration par parties), puis sa limite.

> **Exemple.** $I_n = \displaystyle\int_0^1 x^n\,dx = \left[\dfrac{x^{n+1}}{n+1}\right]_0^1
> = \dfrac{1}{n+1}$. La suite $(I_n)$ est décroissante et tend vers $0$.

---

## 7. Cas particuliers et pièges de calcul

### Une fonction négative : aire ≠ intégrale

Si $f$ est **négative** sur $[a\,;b]$, alors $\int_a^b f(x)\,dx$ est un nombre **négatif**.
Une aire, elle, est **toujours positive**. Le lien est :

$$\mathcal{A} = -\int_a^b f(x)\,dx \qquad (\text{quand } f \leqslant 0).$$

> **Exemple.** Si $\int_a^b f = -6$ avec $f \leqslant 0$, l'aire du domaine vaut $+6$
> unités d'aire. L'intégrale « compte » l'aire **en négatif** sous l'axe.

> Si $f$ change de signe, l'intégrale fait la **différence** entre l'aire au-dessus de
> l'axe et l'aire en dessous : elle peut être nulle sans que l'aire le soit.

### L'ordre des bornes

$$\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx.$$

Inverser les bornes sans changer le signe est l'erreur la plus fréquente du chapitre.

---

## 8. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Définition ($f \geqslant 0$) | $\int_a^b f(x)\,dx$ = aire sous la courbe |
| Primitive qui s'annule en $a$ | $F_a(x) = \int_a^x f(t)\,dt$, et $F_a(a) = 0$ |
| Calcul | $\int_a^b f(x)\,dx = \big[F(x)\big]_a^b = F(b) - F(a)$ |
| Bornes égales | $\int_a^a f = 0$ |
| Bornes échangées | $\int_b^a f = -\int_a^b f$ |
| Linéarité | $\int (kf + g) = k\int f + \int g$ |
| Chasles | $\int_a^b f + \int_b^c f = \int_a^c f$ |
| Inégalités | $f \leqslant g \Rightarrow \int_a^b f \leqslant \int_a^b g$ |
| Valeur moyenne | $\mu = \frac{1}{b-a}\int_a^b f$ |
| Par parties | $\int_a^b uv' = [uv]_a^b - \int_a^b u'v$ |
| Aire entre courbes ($f \geqslant g$) | $\int_a^b (f - g)$ |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre aire et intégrale pour une fonction négative.** Une aire est positive ;
   si $f \leqslant 0$, l'aire vaut $-\int_a^b f$, pas $\int_a^b f$.
2. **Oublier d'échanger le signe en inversant les bornes.** $\int_b^a f = -\int_a^b f$.
3. **Écrire $F(a) - F(b)$ au lieu de $F(b) - F(a)$** : c'est l'opposé du bon résultat.
4. **Oublier le facteur $\frac{1}{b-a}$** dans la valeur moyenne (ce n'est pas juste l'intégrale).
5. **Inverser $f$ et $g$** dans l'aire entre deux courbes : intégrer $g - f$ quand $f$ est
   au-dessus donne une aire… négative, donc fausse.
6. **Se tromper de facteur en intégration par parties** : le terme tout intégré est bien
   $[uv]_a^b$, et l'intégrale restante porte sur $u'v$, pas $uv'$.
7. **Croire que la lettre d'intégration compte** : $\int_a^b f(x)\,dx = \int_a^b f(t)\,dt$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programme officiel de spécialité mathématiques, Terminale générale,
applicable à la rentrée 2027. Fichier docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — CALCUL INTÉGRAL » (lignes 260 à 283), rubriques « Contenus » et
« Capacités attendues ». En-tête de provenance : lignes 1 à 20.

⚠️ MENTION 1 — SOURCE À CONFRONTER AU PDF OFFICIEL. La source est une EXTRACTION
WebFetch : d'après son en-tête, le texte a été reconstitué via l'outil WebFetch depuis
un miroir (xm1math.net), le proxy du sandbox bloquant le téléchargement du PDF. Avant
publication, cette extraction doit être confrontée au PDF officiel (education.gouv.fr /
éduscol). Préambules, exemples et notes de bas de page du BO ne figurent pas dans la source.

⚠️ MENTION 2 — CHAPITRE DE TERMINALE PRODUIT SUR LE PROGRAMME RENTRÉE 2027, À LA DEMANDE
DE L'UTILISATEUR. Le gabarit (§6) déconseillait d'écrire pour la Terminale avant 2027 ;
nous sommes en 2026, mais l'utilisateur a explicitement commandé ce chapitre sur le
programme déjà publié de la rentrée 2027. Calendrier de publication à valider par le relecteur.

Correspondance contenus du programme → sections de la fiche :
- Définition (f continue positive), aire, notation ∫ₐᵇ f(x) dx → §1
- Fₐ(x)=∫ₐˣ f primitive qui s'annule en a ; toute f continue admet des primitives → §2
- Relation ∫ₐᵇ f = F(b)−F(a), notation [F(x)]ₐᵇ → §2
- Définition par les primitives pour f de signe quelconque → §3
- Linéarité, positivité, intégration des inégalités, Chasles → §4
- Valeur moyenne → §5 ; intégration par parties → §6
- Capacités (encadrer, calculer via primitive/IPP, majorer/minorer, aire entre deux
  courbes, suite d'intégrales, interprétation interdisciplinaire) → §4, §6, §7

À SOUMETTRE AU RELECTEUR : condition a < b pour la valeur moyenne ; forme/notation de
l'IPP ; niveau de détail attendu sur les suites d'intégrales (§6) ; id/titre définitif
du chapitre voisin « Primitives » cité en prérequis.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
-->
