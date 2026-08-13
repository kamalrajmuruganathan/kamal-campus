---
id: tale-compl-math-lois-densite-temps-attente
titre: "Lois à densité : temps d'attente"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 13
prerequis:
  - Calcul intégral (Terminale, chapitre voisin « Calcul intégral (calculs d'aires) »)
  - Fonction exponentielle (Terminale, chapitre « Fonctions logarithme et exponentielle »)
  - Probabilités conditionnelles (Terminale)
statut: brouillon
relu_par: null
---

# Lois à densité : temps d'attente

> Jusqu'ici, une variable aléatoire prenait des valeurs **isolées** : le résultat d'un dé,
> le nombre de succès dans un schéma de Bernoulli. Mais « combien de temps vais-je attendre
> le prochain bus ? » n'a pas de réponse en valeurs isolées : l'attente peut valoir
> $2{,}3$ min, $2{,}31$ min, n'importe quel réel. Pour ces grandeurs **continues**, on ne
> compte plus des cas : on **mesure une aire** sous une courbe. C'est tout le chapitre.

---

## 1. Définition : loi à densité

On dit qu'une variable aléatoire $X$ suit une **loi à densité** sur un intervalle $I$
lorsqu'il existe une fonction $f$, appelée **densité de probabilité**, telle que :

- $f$ est **continue et positive** sur $I$ ;
- l'**aire totale** sous la courbe vaut $1$ : $\displaystyle\int_I f(x)\,dx = 1$.

La probabilité que $X$ tombe dans un intervalle $[c\,;d] \subset I$ est alors l'**aire**
sous la courbe entre $c$ et $d$ :

$$\boxed{P(c \leqslant X \leqslant d) = \int_c^d f(x)\,dx}$$

> **Exemple.** Si $f(x) = 2x$ sur $[0\,;1]$, on a bien $\int_0^1 2x\,dx = \big[x^2\big]_0^1 = 1$ :
> c'est une densité. Alors $P(0 \leqslant X \leqslant 0{,}5) = \int_0^{0{,}5} 2x\,dx = \big[x^2\big]_0^{0{,}5} = 0{,}25.$

Deux conséquences à connaître par cœur :

- **La probabilité d'une valeur isolée est nulle** : $P(X = c) = \displaystyle\int_c^c f(x)\,dx = 0$.
- Du coup, les inégalités **strictes ou larges ne changent rien** :
  $$P(c \leqslant X \leqslant d) = P(c < X < d).$$

> ⚠️ C'est la grande différence avec le discret : ici $P(X=c)=0$, donc on ne « perd » aucune
> probabilité en passant de $\leqslant$ à $<$. Inutile de traquer les bornes une par une.

---

## 2. Espérance d'une loi à densité

L'**espérance** de $X$ (sa « valeur moyenne » à long terme) se calcule en remplaçant, dans
l'idée de moyenne pondérée, la somme discrète par une intégrale :

$$\boxed{E(X) = \int_I x\,f(x)\,dx}$$

> **Exemple.** Avec la densité $f(x)=2x$ sur $[0\,;1]$ :
> $E(X) = \displaystyle\int_0^1 x \cdot 2x\,dx = \int_0^1 2x^2\,dx = \left[\dfrac{2x^3}{3}\right]_0^1 = \dfrac{2}{3}.$

Les deux lois au programme — uniforme et exponentielle — sont deux cas particuliers de
cette définition. On les détaille maintenant.

---

## 3. La loi uniforme

C'est la loi du **« tout au hasard, sans zone privilégiée »** sur un intervalle $[a\,;b]$
(avec $a < b$).

**Définition.** $X$ suit la **loi uniforme** sur $[a\,;b]$ lorsque sa densité est
**constante** sur $[a\,;b]$ :

$$\boxed{f(x) = \dfrac{1}{b-a} \quad \text{pour } x \in [a\,;b]} \qquad (f(x)=0 \text{ ailleurs}).$$

La constante $\frac{1}{b-a}$ n'est pas un choix : c'est la **seule** hauteur qui donne au
rectangle une aire totale de $1$ (base $b-a$, hauteur $\frac{1}{b-a}$).

### Probabilité

Pour tout $[c\,;d] \subset [a\,;b]$, l'aire est celle d'un rectangle de hauteur $\frac{1}{b-a}$ :

$$\boxed{P(c \leqslant X \leqslant d) = \dfrac{d-c}{b-a}}$$

La probabilité est simplement le rapport de la **longueur** de l'intervalle visé à la
longueur totale.

> **Exemple.** Un bus passe « à heure uniforme » entre $10$ h et $10$ h $20$. Modélisons
> l'instant d'arrivée $X$ par une loi uniforme sur $[0\,;20]$ (en minutes). La probabilité
> d'attendre entre $5$ et $10$ min est $P(5 \leqslant X \leqslant 10) = \dfrac{10-5}{20-0} = \dfrac{5}{20} = 0{,}25.$

### Espérance

$$\boxed{E(X) = \dfrac{a+b}{2}}$$

C'est le **milieu** de l'intervalle — ce que l'intuition attend d'un tirage « au hasard
et sans biais ».

> **Exemple.** Sur $[0\,;20]$ : $E(X) = \dfrac{0+20}{2} = 10$. En moyenne, on arrive au
> milieu de la plage, soit $10$ min après $10$ h.
>
> **Vérification par le calcul :** $E(X)=\displaystyle\int_a^b x\cdot\dfrac{1}{b-a}\,dx
> = \dfrac{1}{b-a}\left[\dfrac{x^2}{2}\right]_a^b = \dfrac{b^2-a^2}{2(b-a)} = \dfrac{(b-a)(b+a)}{2(b-a)} = \dfrac{a+b}{2}.$

---

## 4. La loi exponentielle

C'est **la** loi des temps d'attente sans vieillissement (durée de vie d'un composant,
intervalle entre deux désintégrations, temps avant le prochain appel). Elle dépend d'un
**paramètre** $\lambda > 0$.

**Définition.** $X$ suit la **loi exponentielle de paramètre $\lambda$** ($\lambda>0$)
lorsque sa densité est :

$$\boxed{f(t) = \lambda\,e^{-\lambda t} \quad \text{pour } t \geqslant 0} \qquad (f(t)=0 \text{ pour } t<0).$$

Cette fonction est bien une densité : elle est positive, et l'aire totale vaut $1$
(voir la formule ci-dessous avec $t \to +\infty$).

### Probabilité

Une primitive de $\lambda e^{-\lambda t}$ est $-e^{-\lambda t}$. On en déduit, pour
$0 \leqslant a \leqslant b$ :

$$\int_a^b \lambda e^{-\lambda t}\,dt = \big[-e^{-\lambda t}\big]_a^b = e^{-\lambda a} - e^{-\lambda b}.$$

Deux cas particuliers **à mémoriser**, obtenus en prenant $a=0$ puis en faisant tendre
la borne vers $+\infty$ :

$$\boxed{P(X \leqslant t) = 1 - e^{-\lambda t}} \qquad \boxed{P(X > t) = e^{-\lambda t}}$$

Elles sont complémentaires : $P(X \leqslant t) + P(X > t) = 1$.

> **Exemple.** La durée de vie (en heures) d'un composant suit une loi exponentielle de
> paramètre $\lambda = 0{,}01$. La probabilité qu'il tienne plus de $100$ h est
> $P(X > 100) = e^{-0{,}01 \times 100} = e^{-1} \approx 0{,}368.$

### Espérance

$$\boxed{E(X) = \dfrac{1}{\lambda}}$$

Plus $\lambda$ est grand, plus l'événement arrive vite, donc plus l'attente moyenne est courte.

> **Exemple.** Avec $\lambda = 0{,}01$ h$^{-1}$, la durée de vie moyenne est
> $E(X) = \dfrac{1}{0{,}01} = 100$ h.

> **D'où vient le $\frac{1}{\lambda}$ (démonstration par parties).** Sur $[0\,;x]$, on pose
> $u(t)=t$, $v'(t)=\lambda e^{-\lambda t}$, d'où $u'(t)=1$ et $v(t)=-e^{-\lambda t}$ :
> $$\int_0^x t\,\lambda e^{-\lambda t}\,dt = \big[-t\,e^{-\lambda t}\big]_0^x + \int_0^x e^{-\lambda t}\,dt
> = -x e^{-\lambda x} + \left[-\dfrac{1}{\lambda}e^{-\lambda t}\right]_0^x
> = \dfrac{1}{\lambda} - \left(x+\dfrac{1}{\lambda}\right)e^{-\lambda x}.$$
> Quand $x \to +\infty$, $\left(x+\frac{1}{\lambda}\right)e^{-\lambda x} \to 0$ (l'exponentielle
> l'emporte), donc $E(X) = \dfrac{1}{\lambda}$.

---

## 5. La propriété d'absence de mémoire

C'est **la** propriété caractéristique de la loi exponentielle, celle qui la rend si utile
pour les temps d'attente.

**Propriété.** Si $X$ suit une loi exponentielle, alors pour tous réels $s \geqslant 0$ et
$t \geqslant 0$ :

$$\boxed{P_{X > s}(X > s + t) = P(X > t)}$$

**En clair :** sachant qu'on a **déjà attendu** $s$ (par exemple, que le composant a déjà
fonctionné $s$ heures), la probabilité d'attendre encore au moins $t$ de plus est **la même**
que celle d'attendre $t$ **au départ**. Le système ne « vieillit » pas, il n'a **aucune mémoire**
du temps déjà écoulé.

> **Démonstration.** Par définition d'une probabilité conditionnelle, et comme
> $\{X>s+t\}\subset\{X>s\}$ :
> $$P_{X>s}(X>s+t) = \dfrac{P\big((X>s+t)\cap(X>s)\big)}{P(X>s)} = \dfrac{P(X>s+t)}{P(X>s)}
> = \dfrac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X>t).$$

> **Exemple.** Une ampoule de durée de vie exponentielle a déjà brillé $1000$ h. La
> probabilité qu'elle brille encore $500$ h de plus est **la même** que pour une ampoule
> neuve de briller $500$ h. Attendre ne « rapproche » pas la panne.

---

## 6. Méthode : modéliser un temps d'attente

Face à un énoncé « temps d'attente / durée de vie », procède dans l'ordre :

1. **Choisir la loi.** Attente « au hasard sur une plage bornée » sans zone privilégiée
   $\Rightarrow$ **uniforme** sur $[a\,;b]$. Attente/durée de vie « sans vieillissement »,
   non bornée $\Rightarrow$ **exponentielle** sur $[0\,;+\infty[$.
2. **Trouver le paramètre.** Pour l'exponentielle, l'énoncé donne souvent la **moyenne** :
   comme $E(X)=\frac{1}{\lambda}$, on en tire $\lambda = \dfrac{1}{E(X)}$.
3. **Traduire la question en probabilité**, puis appliquer la bonne formule.

> **Exemple complet.** Le temps d'attente $X$ (en min) à un guichet suit une loi
> exponentielle de moyenne $4$ min.
> - Paramètre : $\lambda = \dfrac{1}{4} = 0{,}25$.
> - Probabilité d'attendre **plus de $6$ min** : $P(X>6)=e^{-0{,}25\times 6}=e^{-1{,}5}\approx 0{,}223.$
> - Probabilité d'attendre **au plus $4$ min** : $P(X\leqslant 4)=1-e^{-0{,}25\times 4}=1-e^{-1}\approx 0{,}632.$

---

## 7. Tableau récapitulatif

| Notion | Loi uniforme sur $[a\,;b]$ | Loi exponentielle ($\lambda>0$) |
|---|---|---|
| Densité | $f(x)=\dfrac{1}{b-a}$ sur $[a\,;b]$ | $f(t)=\lambda e^{-\lambda t}$ sur $[0\,;+\infty[$ |
| $P(c \leqslant X \leqslant d)$ | $\dfrac{d-c}{b-a}$ | $e^{-\lambda c}-e^{-\lambda d}$ |
| $P(X \leqslant t)$ | $\dfrac{t-a}{b-a}$ | $1-e^{-\lambda t}$ |
| $P(X > t)$ | $\dfrac{b-t}{b-a}$ | $e^{-\lambda t}$ |
| Espérance $E(X)$ | $\dfrac{a+b}{2}$ | $\dfrac{1}{\lambda}$ |
| Absence de mémoire | non | **oui** : $P_{X>s}(X>s+t)=P(X>t)$ |

| À retenir sur toute loi à densité | |
|---|---|
| Densité $f$ | continue, positive, d'aire totale $1$ |
| Probabilité = aire | $P(c\leqslant X\leqslant d)=\int_c^d f(x)\,dx$ |
| Valeur isolée | $P(X=c)=0$ ; $\leqslant$ et $<$ interchangeables |
| Espérance | $E(X)=\int_I x\,f(x)\,dx$ |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que $P(X=c)$ peut être non nulle.** Pour une loi à densité, $P(X=c)=0$
   toujours. On ne remplace donc **jamais** un $<$ par un « $\leqslant$ moins un cas ».
2. **Oublier le signe « moins » dans l'exponentielle.** La densité est $\lambda e^{-\lambda t}$
   et $P(X>t)=e^{-\lambda t}$ : c'est $e^{-\lambda t}$, pas $e^{\lambda t}$ (qui exploserait
   et ne pourrait pas être une probabilité).
3. **Confondre $P(X\leqslant t)$ et $P(X>t)$.** L'une vaut $1-e^{-\lambda t}$, l'autre
   $e^{-\lambda t}$. Un repère : quand $t$ grandit, attendre « encore plus » devient rare,
   donc $P(X>t)=e^{-\lambda t}$ **décroît** vers $0$.
4. **Prendre $\lambda$ pour l'espérance.** L'espérance est $\frac{1}{\lambda}$, pas $\lambda$.
   Si la moyenne annoncée est $4$, alors $\lambda=\frac14=0{,}25$, pas $4$.
5. **Écrire l'espérance de la loi uniforme comme $\frac{1}{b-a}$.** Ça, c'est la **densité**.
   L'espérance est le milieu $\frac{a+b}{2}$.
6. **Croire que « avoir déjà attendu » augmente la probabilité que ça arrive.** Faux pour
   l'exponentielle : c'est justement l'**absence de mémoire**, $P_{X>s}(X>s+t)=P(X>t)$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programmes des ENSEIGNEMENTS OPTIONNELS de mathématiques, terminale générale,
option MATHÉMATIQUES COMPLÉMENTAIRES (arrêté du 19-7-2019, BO spécial n°8 du 25 juillet
2019). Fichier docs/programme-terminale-maths-options-2019.txt, section
« Lois à densité : temps d'attente » (lignes 92 à 96), rubriques « Contenus » et
« Capacités ». En-tête de provenance du fichier : lignes 1 à 11.

Intitulé exact du programme :
  Contenus : lois à densité ; loi uniforme ; loi exponentielle ; propriété d'absence
  de mémoire ; espérance.
  Capacités : calculer une probabilité et une espérance pour une loi uniforme ou
  exponentielle ; modéliser un temps d'attente.

⚠️ SOURCE À CONFRONTER AU PDF OFFICIEL. Le fichier source est une EXTRACTION WebFetch
depuis les PDF officiels (education.gouv.fr, MENE1921265A pour les complémentaires,
PDF spe265_annexe_1159134.pdf). À confronter au PDF officiel avant publication : le
texte du BO est volontairement bref (une ligne de contenus + une ligne de capacités),
tout le développement mathématique de cette fiche est une reconstruction pédagogique
standard, à valider par le relecteur.

Correspondance contenus du programme -> sections de la fiche :
- « lois à densité » (densité, probabilité = aire, P(X=c)=0) -> §1 ; espérance générale -> §2
- « loi uniforme » (densité, probabilité, espérance) -> §3
- « loi exponentielle » (densité λe^{-λt}, probabilité, espérance 1/λ) -> §4
- « propriété d'absence de mémoire » -> §5
- « espérance » -> §2 (générale), §3 et §4 (cas particuliers)
- Capacités « calculer une probabilité et une espérance » -> §3, §4 ; « modéliser un
  temps d'attente » -> §6

CHOIX ET POINTS À SOUMETTRE AU RELECTEUR :
- Notation P(X>t) vs P(X⩾t) : identiques ici puisque P(X=t)=0 ; j'ai gardé « > » pour
  l'absence de mémoire, cohérent avec les manuels. À confirmer selon la convention
  attendue par le relecteur.
- Espérance de l'exponentielle : démontrée par IPP sur [0;x] puis passage à la limite.
  Le BO complémentaires n'exige pas cette démonstration (intégrale impropre) ; elle est
  donnée en « pour aller plus loin » et peut être admise. À arbitrer.
- Espérance générale E(X)=∫ x f(x) dx présentée comme définition ; niveau de formalisme
  (intervalle non borné) à valider.
- Convention d'écriture décimale : virgule française (0{,}25) conforme aux autres fiches.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel ou
à un site. Statut : brouillon, non relu.
-->
