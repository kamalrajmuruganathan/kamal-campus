---
id: tale-spe-pc-cinetique-chimique
titre: "Cinétique chimique : évolution temporelle"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 14
prerequis:
  - Quantité de matière et concentration (Seconde)
  - Avancement d'une réaction et tableau d'avancement (Première)
  - Loi de Beer-Lambert et conductimétrie (Terminale, méthodes physiques d'analyse)
statut: brouillon
relu_par: null
---

# Cinétique chimique : évolution temporelle

> La thermodynamique dit **si** une transformation peut se produire et **jusqu'où** ;
> la cinétique dit **à quelle vitesse**. Deux réactions peuvent avoir le même bilan et le
> même état final tout en mettant l'une une fraction de seconde, l'autre plusieurs jours.
> Ce chapitre apprend à **mesurer** cette vitesse et à **agir** dessus.

---

## 1. Transformations lentes et rapides

### Définition

Une transformation est dite **rapide** si elle paraît **instantanée** à l'échelle de
l'observateur (moins d'une seconde) : on ne peut pas suivre son évolution à l'œil.
Elle est dite **lente** si son évolution s'étale sur une durée observable (secondes,
minutes, heures) : on peut alors en **suivre le déroulement** dans le temps.

> **Exemple.** La précipitation du chlorure d'argent (mélange de $\text{Ag}^+$ et
> $\text{Cl}^-$) est **rapide** : le trouble blanc apparaît aussitôt. L'oxydation d'un métal
> qui rouille, ou la fermentation, sont **lentes**.

Seules les transformations **lentes** relèvent de l'étude cinétique : ce sont elles dont on
peut tracer l'évolution d'une concentration en fonction du temps.

---

## 2. Suivre une transformation dans le temps

Pour étudier la cinétique, il faut **mesurer une grandeur qui évolue** avec l'avancement,
sans perturber le système. Les méthodes courantes :

| Méthode | Grandeur mesurée | Reliée à la concentration par |
|---|---|---|
| **Spectrophotométrie** | absorbance $A$ | loi de Beer-Lambert $A = \varepsilon \ell [X]$ |
| **Conductimétrie** | conductivité $\sigma$ | loi de Kohlrausch |
| **pH-métrie** | pH | $[\text{H}_3\text{O}^+] = 10^{-\text{pH}}$ |
| **Manométrie / volume gazeux** | pression ou volume | loi des gaz parfaits $PV = nRT$ |
| **Titrages successifs** | quantité de matière | prélèvements dosés à divers instants |

> **Astuce expérimentale — la trempe.** Pour titrer un prélèvement sans qu'il continue de
> réagir pendant le dosage, on le **refroidit brutalement** (ou on le dilue) : on utilise un
> facteur cinétique pour **bloquer** la réaction. C'est la trempe.

---

## 3. Vitesse volumique de disparition et d'apparition

On raisonne à **volume $V$ constant**. On note $[X]$ la concentration en mol·L⁻¹.

### Définition

La **vitesse volumique de disparition** d'un réactif $R$ est l'opposé de la variation
de sa concentration par unité de temps :

$$\boxed{v_{\text{disp}}(R) = -\frac{\mathrm{d}[R]}{\mathrm{d}t}}$$

La **vitesse volumique d'apparition** d'un produit $P$ est la variation de sa concentration
par unité de temps :

$$\boxed{v_{\text{app}}(P) = +\frac{\mathrm{d}[P]}{\mathrm{d}t}}$$

Le **signe** rend les deux vitesses **positives** : $[R]$ **diminue** (dérivée négative, donc
on met un « − »), $[P]$ **augmente** (dérivée positive).

> **Unité.** Une concentration se mesure en mol·L⁻¹, le temps en s :
> la vitesse volumique s'exprime en $\text{mol·L}^{-1}\text{·s}^{-1}$.
> (En minutes : mol·L⁻¹·min⁻¹ — convertis toujours en secondes si l'énoncé mélange.)

### Détermination graphique

Sur la courbe $[R] = f(t)$, la vitesse de disparition à l'instant $t$ est **l'opposé du
coefficient directeur de la tangente** à cette date.

> **Exemple.** Sur une courbe $[R] = f(t)$, la tangente à $t = 0$ passe de
> $[R] = 0{,}10\ \text{mol·L}^{-1}$ à $[R] = 0$ en $50\ \text{s}$. Sa pente vaut
> $\dfrac{0 - 0{,}10}{50} = -2{,}0\times 10^{-3}\ \text{mol·L}^{-1}\text{·s}^{-1}$.
> Donc $v_{\text{disp}} = 2{,}0\times 10^{-3}\ \text{mol·L}^{-1}\text{·s}^{-1}$.

### La vitesse décroît au cours du temps

Au fur et à mesure que les réactifs sont consommés, leur concentration baisse : la vitesse
**diminue**. La courbe $[R] = f(t)$ part avec une forte pente, puis s'aplatit. La vitesse est
**maximale au début** et **tend vers zéro** en fin de réaction.

---

## 4. Le temps de demi-réaction $t_{1/2}$

### Définition

Le **temps de demi-réaction** $t_{1/2}$ est la durée au bout de laquelle l'avancement atteint
la **moitié** de sa valeur finale. Pour une transformation totale, c'est la durée au bout de
laquelle la concentration du **réactif limitant** a été **divisée par deux** :

$$\boxed{[R]\big(t_{1/2}\big) = \frac{[R]_0}{2}}$$

> **Exemple.** Si $[R]_0 = 0{,}20\ \text{mol·L}^{-1}$, alors $t_{1/2}$ est la date où
> $[R] = 0{,}10\ \text{mol·L}^{-1}$. On la lit directement sur la courbe : on repère
> $[R]_0/2$ en ordonnée, on descend sur la courbe, on lit l'abscisse.

$t_{1/2}$ est un **ordre de grandeur commode** de la durée d'une réaction : au bout de
quelques $t_{1/2}$, la transformation est quasi terminée. C'est aussi le critère de choix
d'une durée d'expérience.

---

## 5. Loi de vitesse d'ordre 1

### Définition

Un réactif $R$ suit une **loi de vitesse d'ordre 1** lorsque sa vitesse de disparition est
**proportionnelle à sa propre concentration** :

$$\boxed{v_{\text{disp}}(R) = -\frac{\mathrm{d}[R]}{\mathrm{d}t} = k\,[R]}$$

La constante $k$ est la **constante de vitesse**. Pour un ordre 1, elle s'exprime en
$\text{s}^{-1}$ (pour que $k[R]$ ait bien l'unité d'une vitesse volumique).

### Solution : décroissance exponentielle

L'équation différentielle $\dfrac{\mathrm{d}[R]}{\mathrm{d}t} = -k[R]$ a pour solution

$$\boxed{[R](t) = [R]_0\, e^{-k t}}$$

La concentration décroît de façon **exponentielle**, exactement comme le nombre de noyaux
radioactifs. Elle ne s'annule jamais mathématiquement, mais devient rapidement négligeable.

### Le temps de demi-réaction ne dépend pas de $[R]_0$

En posant $[R](t_{1/2}) = [R]_0/2$ dans la solution :
$\dfrac{[R]_0}{2} = [R]_0\, e^{-k t_{1/2}}$, donc $e^{-k t_{1/2}} = \dfrac{1}{2}$, d'où

$$\boxed{t_{1/2} = \frac{\ln 2}{k} \approx \frac{0{,}69}{k}}$$

C'est la signature de l'ordre 1 : **$t_{1/2}$ est constant**, indépendant de la concentration
initiale. La concentration est divisée par deux à chaque durée $t_{1/2}$ écoulée.

> **Exemple.** Si $k = 0{,}046\ \text{s}^{-1}$, alors
> $t_{1/2} = \dfrac{0{,}69}{0{,}046} \approx 15\ \text{s}$. Partant de
> $[R]_0 = 0{,}80\ \text{mol·L}^{-1}$ : après 15 s il reste $0{,}40$, après 30 s $0{,}20$,
> après 45 s $0{,}10\ \text{mol·L}^{-1}$…

### Tester expérimentalement l'ordre 1

Trois tests équivalents, à partir d'un tableau de mesures $[R] = f(t)$ :

1. **Demi-vies successives.** On mesure plusieurs $t_{1/2}$ sur la courbe (de $[R]_0$ à
   $[R]_0/2$, puis de $[R]_0/2$ à $[R]_0/4$…). Si elles sont **toutes égales**, c'est l'ordre 1.
2. **Linéarisation.** On trace $\ln[R]$ en fonction de $t$. Si c'est une **droite**, l'ordre
   est 1, et sa **pente vaut $-k$** (car $\ln[R] = \ln[R]_0 - k t$).
3. **Proportionnalité.** On vérifie que la vitesse (pente de la tangente) est proportionnelle
   à $[R]$ au même instant : $v/[R]$ constant $= k$.

> **Exemple.** Le tracé de $\ln[R]$ contre $t$ donne une droite de pente
> $-0{,}046\ \text{s}^{-1}$ : la réaction est d'ordre 1 et $k = 0{,}046\ \text{s}^{-1}$.

---

## 6. Les facteurs cinétiques

Un **facteur cinétique** est une grandeur dont la variation modifie la **vitesse** d'une
transformation, sans changer son bilan ni son état final.

### La température

**Plus la température est élevée, plus la transformation est rapide.** L'agitation thermique
rend les chocs entre entités plus **fréquents** et plus **énergétiques**.

> **Exemple.** Le lait tourne en quelques heures à température ambiante, mais se conserve
> plusieurs jours au réfrigérateur : le froid **ralentit** les réactions de dégradation.
> C'est aussi le principe de la trempe (§2) pour figer une réaction.

### La concentration des réactifs

**Plus les réactifs sont concentrés, plus la transformation est rapide.** Des entités plus
nombreuses par unité de volume se rencontrent plus souvent : les chocs efficaces sont plus
fréquents.

> **Exemple.** Un morceau de métal réagit plus vivement dans un acide concentré que dilué.
> La vitesse est maximale au **début** (réactifs concentrés) et diminue à mesure qu'ils
> s'épuisent — ce qui explique la forme des courbes du §3.

---

## 7. Catalyse et catalyseur

### Définition

Un **catalyseur** est une espèce qui **accélère** une transformation sans figurer dans son
équation de bilan : il est **régénéré** en fin de réaction, donc consommé puis reformé.

Un catalyseur :
- **augmente la vitesse** (il ouvre un chemin réactionnel plus facile) ;
- **ne modifie pas l'état final** : ni le sens, ni l'avancement final, ni le rendement ;
- **n'apparaît pas** dans le bilan (mêmes réactifs, mêmes produits) ;
- agit **en faible quantité** et est **récupéré** intact.

> ⚠️ Un catalyseur change **la durée**, pas **la destination**. Il n'améliore pas un
> rendement : il fait arriver plus vite au **même** état final.

### Les trois types de catalyse

| Type | Catalyseur et réactifs | Exemple |
|---|---|---|
| **Homogène** | **même phase** (souvent tous en solution) | ions $\text{Fe}^{2+}$ catalysant une réaction en solution |
| **Hétérogène** | **phases différentes** (catalyseur solide, réactifs fluides) | pot catalytique (platine solide, gaz) |
| **Enzymatique** | **enzyme** (catalyseur biologique), très sélectif | catalase décomposant $\text{H}_2\text{O}_2$ |

> **Exemple.** La décomposition de l'eau oxygénée $\text{H}_2\text{O}_2$ est lente ; ajoutée
> aux ions $\text{Fe}^{3+}$ (homogène), au platine (hétérogène) ou à la catalase (enzymatique),
> elle devient rapide, mais donne toujours $\text{H}_2\text{O}$ et $\text{O}_2$.

---

## 8. Tableau récapitulatif

| Notion | Formule / règle | Unité |
|---|---|---|
| Vitesse de disparition | $v_{\text{disp}}(R) = -\dfrac{\mathrm{d}[R]}{\mathrm{d}t}$ | mol·L⁻¹·s⁻¹ |
| Vitesse d'apparition | $v_{\text{app}}(P) = +\dfrac{\mathrm{d}[P]}{\mathrm{d}t}$ | mol·L⁻¹·s⁻¹ |
| Lecture graphique | opposé de la pente de la tangente à $[R]=f(t)$ | — |
| Temps de demi-réaction | $[R](t_{1/2}) = \dfrac{[R]_0}{2}$ | s |
| Loi d'ordre 1 | $v_{\text{disp}} = k[R]$ ; $[R] = [R]_0 e^{-kt}$ | $k$ en s⁻¹ |
| $t_{1/2}$ (ordre 1) | $t_{1/2} = \dfrac{\ln 2}{k}$, **indépendant de $[R]_0$** | s |
| Test d'ordre 1 | $\ln[R] = f(t)$ droite de pente $-k$ | — |
| Facteurs cinétiques | température ↑, concentration ↑ ⟹ vitesse ↑ | — |
| Catalyseur | accélère, non consommé au bilan, état final inchangé | — |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier le signe « − »** dans la vitesse de disparition. $-\dfrac{\mathrm{d}[R]}{\mathrm{d}t}$
   est **positif** parce que $[R]$ diminue ; annoncer une vitesse négative est faux.
2. **Se tromper d'unité.** La vitesse volumique est en **mol·L⁻¹·s⁻¹**, pas en mol·s⁻¹ ni en
   mol·L⁻¹. Et $k$ d'ordre 1 est en **s⁻¹**. Convertis les minutes en secondes et les mL en L.
3. **Croire que $t_{1/2}$ dépend de $[R]_0$.** Pour l'ordre 1, il en est **indépendant** :
   $t_{1/2} = \ln 2/k$. C'est justement le test de l'ordre 1.
4. **Confondre concentration divisée par deux et réaction terminée.** À $t_{1/2}$, il reste
   encore **la moitié** du réactif ; la réaction est loin d'être finie.
5. **Penser qu'un catalyseur augmente le rendement.** Il change la **vitesse**, pas l'**état
   final** : même avancement final, même rendement.
6. **Lire une vitesse comme une valeur de la courbe** au lieu d'une **pente**. La vitesse est
   la dérivée : elle se lit sur la **tangente**, pas sur le point.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, ENSEIGNEMENT DE SPÉCIALITÉ, terminale
générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019.
Fichier interne : docs/programme-terminale-physique-chimie-2019.txt, section
« 1.4 Cinétique : évolution temporelle d'un système chimique » (lignes 52-61),
thème 1 « Constitution et transformations de la matière ».
Page BO : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction WebFetch depuis le PDF officiel — à CONFRONTER au PDF par un professeur.

Notions couvertes (toutes celles du BO 1.4) :
- transformations lentes/rapides ; facteurs cinétiques température et concentration ;
- catalyse / catalyseur (homogène, hétérogène, enzymatique) ;
- vitesse volumique de disparition d'un réactif et d'apparition d'un produit ;
- temps de demi-réaction ; loi de vitesse d'ordre 1.

Capacités exigibles visées : identifier les facteurs cinétiques (QCM/exos), déterminer une
vitesse volumique et un t1/2 (exos 1,2,3,5), tester une loi d'ordre 1 (exos 4,6).

⚠️ POINTS À CONFRONTER AU RELECTEUR / AU PDF OFFICIEL :
- Le BO 2019 a REMPLACÉ l'ancienne « vitesse de réaction » (avec coefficients
  stœchiométriques et v = (1/V)dξ/dt) par la « vitesse volumique de disparition/apparition ».
  J'ai volontairement écarté la vitesse de réaction avec facteur stœchiométrique : à confirmer
  qu'elle est bien HORS programme 2019.
- La loi d'ordre 1 et sa résolution exponentielle : le programme demande de « tester si une
  concentration suit une loi d'ordre 1 ». La forme [R]=[R]0·e^(-kt) et t1/2=ln2/k sont-elles
  exigibles ou seulement « fournies » ? Vérifier le niveau attendu.
- Vérifier que k (ordre 1) en s⁻¹ est la convention retenue par les sujets de bac.
- Parallèle avec la décroissance radioactive (§1.5) : cohérence à souligner en classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
