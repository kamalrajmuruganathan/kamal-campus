---
id: tale-esc-modeles-demographiques
titre: "Modèles démographiques"
voie: generale
niveau: terminale
parcours: enseignement-scientifique
matiere: mathematiques
programme: "Enseignement scientifique — terminale générale, BO du 22 janvier 2019 (version aménagée 2023)"
theme: "Une histoire du vivant"
duree_lecture_min: 16
prerequis:
  - Phénomènes d'évolution, modélisation par des fonctions (Enseignement scientifique, Première)
  - Suites arithmétiques et géométriques (Première)
  - Taux d'évolution et coefficient multiplicateur (Première)
  - Fonction logarithme népérien pour le temps de doublement (Terminale)
statut: brouillon
relu_par: null
---

# Modèles démographiques

> Combien serons-nous en 2100 ? La question paraît hors de portée, et pourtant on y
> répond avec deux idées simples. Soit une population gagne **le même nombre**
> d'individus chaque année, soit elle gagne **le même pourcentage**. Ces deux façons de
> grandir n'ont rien à voir : la première trace une **droite**, la seconde une courbe qui
> **s'emballe**. Tout le chapitre tient dans cette distinction — et dans la prudence qu'il
> faut garder face à un modèle, aussi bien ajusté soit-il.

On modélise l'évolution d'une population année après année : c'est le terrain naturel des
**suites**. Assure-toi de savoir reconnaître une suite arithmétique et une suite
géométrique, et de manier le coefficient multiplicateur d'un taux en pourcentage.

---

## 1. Deux façons de mesurer une évolution

On note $u_n$ l'effectif d'une population à l'année $n$ (l'année de départ est $n = 0$).
Pour passer d'une année à la suivante, on peut regarder **deux** quantités.

**La variation absolue** est la différence entre deux effectifs consécutifs :
$$\boxed{\text{variation absolue} = u_{n+1} - u_n}$$
Elle se mesure **dans l'unité de la population** (des individus, des habitants) : « la
ville a gagné $500$ habitants cette année ».

**La variation relative** (ou **taux d'évolution**) rapporte cette variation à l'effectif
de départ ; on l'exprime en pourcentage :
$$\boxed{t = \frac{u_{n+1} - u_n}{u_n} \qquad (\text{en } \%,\ \text{multiplier par } 100)}$$
« la ville a gagné $2{,}5\,\%$ d'habitants cette année ».

> **Exemple.** Une ville passe de $u_0 = 20\,000$ à $u_1 = 20\,500$ habitants.
> Variation absolue : $20\,500 - 20\,000 = 500$ habitants.
> Variation relative : $\dfrac{500}{20\,000} = 0{,}025 = 2{,}5\,\%$.

L'idée du chapitre : selon que c'est la variation **absolue** ou la variation
**relative** qui reste **constante**, on obtient deux modèles radicalement différents.

---

## 2. Variation absolue constante — le modèle linéaire

**Définition.** Si la population gagne (ou perd) le **même nombre** d'individus $r$ à
chaque période, alors $(u_n)$ est une **suite arithmétique de raison $r$** :
$$\boxed{u_{n+1} = u_n + r}$$
On parle de **modèle linéaire** (ou modèle arithmétique).

**Terme général.** En ajoutant $r$ à chaque étape depuis $u_0$ :
$$\boxed{u_n = u_0 + n\,r}$$
La représentation des points $(n\,;\,u_n)$ est **alignée** : c'est une droite de
coefficient directeur $r$.

> **Exemple.** Un village de $u_0 = 8\,000$ habitants gagne $r = 500$ habitants par an.
> Alors $u_{n+1} = u_n + 500$ et $u_n = 8\,000 + 500\,n$. Au bout de $10$ ans :
> $u_{10} = 8\,000 + 500 \times 10 = 13\,000$ habitants.

> ⚠️ Ici $r$ a une **unité** : des habitants **par an**. Ce n'est pas un pourcentage.
> Une raison de $+500$ n'est pas « une hausse de $500\,\%$ ».

---

## 3. Variation relative constante — le modèle exponentiel

**Définition.** Si la population est **multipliée par le même coefficient** $q$ à chaque
période — autrement dit si le **taux d'évolution** $t$ reste constant — alors $(u_n)$ est
une **suite géométrique de raison $q$** :
$$\boxed{u_{n+1} = u_n \times q \qquad \text{avec} \qquad q = 1 + \frac{t}{100}}$$
On parle de **modèle exponentiel** (ou modèle géométrique). Le nombre $q$ est le
**coefficient multiplicateur**.

**Terme général.** En multipliant par $q$ à chaque étape depuis $u_0$ :
$$\boxed{u_n = u_0 \times q^{\,n}}$$

**Du taux au coefficient.** Une hausse de $t\,\%$ donne $q = 1 + \dfrac{t}{100}$ ; une
baisse de $t\,\%$ donne $q = 1 - \dfrac{t}{100}$.

> **Exemple.** Une population de $u_0 = 20\,000$ habitants croît de $t = 3\,\%$ par an.
> Coefficient : $q = 1 + \dfrac{3}{100} = 1{,}03$. Donc $u_{n+1} = 1{,}03\,u_n$ et
> $u_n = 20\,000 \times 1{,}03^{\,n}$. Au bout de $10$ ans :
> $u_{10} = 20\,000 \times 1{,}03^{\,10} \approx 20\,000 \times 1{,}344 \approx 26\,878$
> habitants.

**Comportement.** Pour une population ($u_0 > 0$) :

| Coefficient $q$ | Taux $t$ | Évolution |
|---|---|---|
| $q > 1$ | $t > 0$ | croissance, de plus en plus rapide |
| $q = 1$ | $t = 0$ | population constante |
| $0 < q < 1$ | $t < 0$ | décroissance vers $0$ |

> ⚠️ Une baisse de $20\,\%$, c'est $q = 1 - 0{,}20 = 0{,}8$, **pas** $q = 0{,}2$. On
> **conserve** $80\,\%$ de la population : on multiplie par $0{,}8$.

---

## 4. Linéaire ou exponentiel ? Le réflexe de comparaison

Face à un énoncé ou à un tableau de valeurs, une seule question : **qu'est-ce qui est
constant ?**

- La **différence** $u_{n+1} - u_n$ est constante $\Rightarrow$ **modèle linéaire**
  (arithmétique).
- Le **quotient** $\dfrac{u_{n+1}}{u_n}$ est constant $\Rightarrow$ **modèle exponentiel**
  (géométrique).

> **Exemple.** Effectifs observés : $1\,000$, puis $1\,100$, puis $1\,210$, puis $1\,331$.
> Différences : $+100$, $+110$, $+121$ — **pas** constantes, donc pas linéaire.
> Quotients : $\dfrac{1\,100}{1\,000} = 1{,}1$ ; $\dfrac{1\,210}{1\,100} = 1{,}1$ ;
> $\dfrac{1\,331}{1\,210} = 1{,}1$ — **constants**. C'est un modèle exponentiel de
> raison $q = 1{,}1$ (une hausse de $10\,\%$), et $u_n = 1\,000 \times 1{,}1^{\,n}$.

La grande différence de long terme : le modèle linéaire progresse à vitesse fixe, tandis
que l'exponentiel **finit toujours par le dépasser**, aussi petit soit son taux.

---

## 5. Le modèle de Malthus

À la fin du XVIII$^\text{e}$ siècle, **Thomas Malthus** formule un principe resté célèbre :
une population laissée à elle-même croît de façon **géométrique** (exponentielle), alors
que les **ressources** (la production agricole) ne croissent que de façon **arithmétique**
(linéaire).

$$\boxed{\text{Population : } u_n = u_0\,q^{\,n} \ (q>1) \qquad \text{Ressources : } R_n = R_0 + n\,r}$$

**La conclusion de Malthus.** Quelle que soit l'avance initiale des ressources, une
croissance **exponentielle** finit **toujours** par dépasser une croissance **linéaire**.
Malthus en déduisait une pénurie inévitable.

> **Exemple.** Population $u_n = 1\,000 \times 1{,}03^{\,n}$ (croissance $+3\,\%$/an) et
> ressources $R_n = 5\,000 + 100\,n$ (aptes à nourrir $5\,000$ personnes au départ,
> $+100$/an). Les ressources dominent longtemps, mais l'exponentielle rattrape puis
> dépasse la droite : le modèle prédit une crise. C'est le raisonnement mathématique
> derrière la thèse de Malthus.

> ⚠️ Le modèle de Malthus est un **modèle**, pas une prophétie. La croissance illimitée
> qu'il suppose n'est jamais tenable dans la réalité (voir §7).

---

## 6. Le temps de doublement

Dans un modèle exponentiel de croissance ($q > 1$), le **temps de doublement** $N$ est le
nombre de périodes au bout duquel la population a **doublé** :
$$u_N = 2\,u_0 \iff u_0\,q^{\,N} = 2\,u_0 \iff q^{\,N} = 2.$$
En prenant le logarithme népérien de $q^{\,N} = 2$ :
$$\boxed{N = \frac{\ln 2}{\ln q}}$$

> **Exemple.** Croissance de $t = 2\,\%$ par an, soit $q = 1{,}02$.
> $N = \dfrac{\ln 2}{\ln 1{,}02} \approx \dfrac{0{,}693}{0{,}0198} \approx 35$ ans : la
> population double tous les $35$ ans environ.

**Un ordre de grandeur utile : la « règle de 70 ».** Pour un taux $t$ (en %) pas trop
grand, le temps de doublement en années vaut approximativement
$$N \approx \frac{70}{t}.$$

> **Exemple.** À $t = 3\,\%$ : $N \approx \dfrac{70}{3} \approx 23$ ans (le calcul exact
> $\ln 2 / \ln 1{,}03 \approx 23{,}4$ ans confirme). Retiens surtout que **le temps de
> doublement ne dépend pas de l'effectif de départ** : il ne dépend que du taux.

---

## 7. Ajuster un modèle à des données

Dans la pratique, on part de **relevés** (recensements année après année) et on cherche le
modèle qui les décrit le mieux : c'est l'**ajustement** d'une **courbe de tendance**.

**La démarche.**
1. Placer les points $(n\,;\,u_n)$ observés dans un repère (nuage de points).
2. Repérer la forme : différences quasi constantes $\Rightarrow$ tendance **linéaire** ;
   quotients quasi constants $\Rightarrow$ tendance **exponentielle**.
3. Déterminer les paramètres ($r$, ou $q$ et $u_0$) — au tableur, à la calculatrice, ou
   « à la main » sur des données propres.
4. Tracer la **courbe de tendance** obtenue et la superposer au nuage.

> **Exemple.** Recensements : $50\,000$ en $2000$, $55\,000$ en $2005$, $60\,500$ en
> $2010$. Les quotients valent $\dfrac{55\,000}{50\,000} = 1{,}1$ et
> $\dfrac{60\,500}{55\,000} = 1{,}1$ (constants sur des pas de $5$ ans) : la tendance est
> exponentielle, de coefficient $1{,}1$ par période de $5$ ans. Le modèle ajusté est
> $u_n = 50\,000 \times 1{,}1^{\,n}$, où $n$ compte les périodes de $5$ ans.

> ⚠️ La courbe de tendance ne passe presque jamais **exactement** par tous les points :
> un modèle **approche** les données, il ne les reproduit pas au chiffre près.

---

## 8. Valider — ou invalider — un modèle

Un modèle n'a de valeur que **confronté au réel**. Deux réflexes.

**Comparer prédiction et observation.** On calcule ce que le modèle prévoit pour une année
**dont on connaît déjà la vraie valeur**, et on regarde l'écart. Un modèle qui colle au
passé est **crédible** pour le futur proche ; un modèle qui s'en écarte doit être
**abandonné ou corrigé**.

> **Exemple.** Le modèle $u_n = 20\,000 \times 1{,}03^{\,n}$ prévoit $u_5 \approx 23\,185$.
> Si le recensement réel de l'année $5$ donne $23\,100$, l'écart est minime ($< 0{,}4\,\%$)
> : le modèle est **validé** sur cette période. S'il donnait $19\,000$, le modèle serait
> à rejeter.

**Connaître les limites du modèle exponentiel.** Une croissance à taux constant est
**illimitée** : elle finit par prévoir des effectifs absurdes (plus d'habitants que la
planète n'en peut nourrir). Aucune population réelle ne croît indéfiniment : les
ressources, l'espace, la natalité imposent un **plafond**. Le modèle exponentiel n'est
donc **valable que sur un domaine limité** — souvent la phase de démarrage d'une
croissance. C'est précisément la limite du raisonnement de Malthus : la réalité freine
la croissance bien avant la catastrophe annoncée.

$$\boxed{\text{Un modèle est valable sur un domaine, jamais partout ni pour toujours.}}$$

---

## 9. Tableau récapitulatif

| Situation | Ce qui est constant | Modèle | Relation | Terme général |
|---|---|---|---|---|
| Même nombre ajouté | variation **absolue** $u_{n+1}-u_n = r$ | linéaire (arithmétique) | $u_{n+1} = u_n + r$ | $u_n = u_0 + n\,r$ |
| Même pourcentage | variation **relative** $t$ | exponentiel (géométrique) | $u_{n+1} = q\,u_n$ | $u_n = u_0\,q^{\,n}$ |
| Taux $\to$ coefficient | — | — | $q = 1 + \dfrac{t}{100}$ | hausse $q>1$, baisse $0<q<1$ |
| Population vs ressources | — | Malthus | pop. géométrique, ressources arithmétiques | l'exponentielle dépasse la droite |
| Doublement (si $q>1$) | — | — | $q^{\,N} = 2$ | $N = \dfrac{\ln 2}{\ln q} \approx \dfrac{70}{t}$ |
| Choisir le modèle | différence const. $\to$ linéaire ; quotient const. $\to$ exponentiel | ajustement | courbe de tendance | à confronter au réel |

---

## 10. Les erreurs qui coûtent des points

1. **Confondre variation absolue et variation relative.** $+500$ habitants (absolue, en
   individus) n'est pas $+2{,}5\,\%$ (relative, sans unité). Différence constante $\to$
   linéaire ; **quotient** constant $\to$ exponentiel. Ne mélange jamais les deux tests.
2. **Se tromper de coefficient multiplicateur.** Une hausse de $t\,\%$ donne
   $q = 1 + \dfrac{t}{100}$, une baisse $q = 1 - \dfrac{t}{100}$. Une baisse de $20\,\%$,
   c'est $\times 0{,}8$, **pas** $\times 0{,}2$ ni $-0{,}2$.
3. **Écrire $u_0 \times n\,q$ ou $u_0 \times q \times n$ pour un modèle exponentiel.** Le
   terme général est $u_n = u_0 \times q^{\,n}$ : $q$ est **élevé à la puissance $n$**, il
   n'est pas multiplié par $n$ (ça, c'est le modèle linéaire).
4. **Croire que le temps de doublement dépend de l'effectif de départ.** $N = \dfrac{\ln
   2}{\ln q}$ ne dépend **que du taux**. Une grande et une petite population au même taux
   doublent dans le même temps.
5. **Oublier les unités de temps.** Un taux « par an » et un taux « par période de $5$
   ans » ne donnent pas le même $n$. Précise toujours ce que compte $n$ (années ?
   décennies ?) avant de conclure.
6. **Prendre un modèle exponentiel pour la vérité définitive.** Il n'est valable que sur
   un **domaine limité** : à long terme, aucune population ne croît indéfiniment. Un modèle
   se **valide en le comparant au réel**, et s'abandonne dès qu'il s'en écarte.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-enseignement-scientifique.txt, section
« Modèles démographiques (mathématiques) » [Thème 3 — Une histoire du vivant : 3.4] :
  - Variation absolue et modèle linéaire (suite arithmétique).
  - Variation relative et modèle exponentiel (suite géométrique) ; modèle de Malthus.
  - Temps de doublement ; ajustement d'une courbe de tendance ; validation d'un modèle.
Programme : Enseignement scientifique (tronc commun), terminale générale, BO du 22 janvier
2019, version aménagée 2023. Extraction WebFetch depuis le PDF officiel
(education.gouv.fr : https://www.education.gouv.fr/media/133235/download ; eduscol).
À CONFRONTER AU PDF OFFICIEL avant publication.

PÉRIMÈTRE / CHOIX DIDACTIQUES (à confirmer par un relecteur) :
  - Chapitre traité en MATHÉMATIQUES au sein de l'enseignement scientifique (pluridisciplinaire).
    Champ « matiere: mathematiques », « parcours: enseignement-scientifique », « theme:
    Une histoire du vivant » — conventions reprises des chapitres ES déjà écrits
    (tale-esc-atmosphere-effet-de-serre-climat, tale-esc-energie-carbone-transition).
  - Formalisation par SUITES (u_{n+1} = u_n + r ; u_{n+1} = u_n × q) conforme au niveau
    terminale, en prolongement du chapitre de Première ES « Phénomènes d'évolution »
    (1es-math-phenomenes-evolution) qui, lui, restait au niveau des fonctions f(n)=f(0)q^n.
    Ce chapitre de Première est cité comme prérequis principal.
  - Temps de doublement : introduit N = ln2/ln q (utilise ln, prérequis Terminale) + la
    « règle de 70 » comme ordre de grandeur. Vérifier que le niveau d'exigence attendu en
    ES tolère l'usage de ln ; sinon, le doublement peut être présenté uniquement par
    lecture graphique / tableur. À TRANCHER PAR LE RELECTEUR.
  - Ajustement / courbe de tendance : présenté par la méthode différences vs quotients
    (démarche tableur), sans régression formelle (moindres carrés hors programme ES).

CONTRÔLES CHIFFRÉS (relus) :
  §1 : 20500−20000 = 500 ; 500/20000 = 0,025 = 2,5 %. OK.
  §2 : u_10 = 8000 + 500×10 = 13000. OK.
  §3 : 1,03^10 ≈ 1,3439 ; 20000×1,3439 ≈ 26878. OK.
  §4 : quotients 1100/1000 = 1210/1100 = 1331/1210 = 1,1 ; 1000×1,1^3 = 1331. OK.
  §6 : ln2/ln1,02 = 0,6931/0,019803 ≈ 35,0 ans ; ln2/ln1,03 ≈ 23,4 ans ; règle 70/2=35,
       70/3≈23,3. OK.
  §7 : 55000/50000 = 60500/55000 = 1,1 ; 50000×1,1 = 55000, ×1,1 = 60500. OK.
  §8 : 20000×1,03^5 = 20000×1,159274 ≈ 23185 ; écart à 23100 ≈ 85/23185 ≈ 0,37 % < 0,4 %. OK.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
