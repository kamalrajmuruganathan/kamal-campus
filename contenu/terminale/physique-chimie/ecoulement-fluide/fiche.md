---
id: tale-spe-pc-ecoulement-fluide
titre: "Écoulement d'un fluide"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Mouvement et interactions"
duree_lecture_min: 14
prerequis:
  - Masse volumique et pression (Seconde)
  - Forces et principe d'inertie (Première)
  - Énergie cinétique et énergie potentielle (Première)
statut: brouillon
relu_par: null
---

# Écoulement d'un fluide

> Un bateau d'acier flotte, un avion se soulève, une trompe à eau aspire : trois faits qui
> semblent défier le bon sens. Ce chapitre te donne les trois outils qui les expliquent — la
> **poussée d'Archimède**, la **conservation du débit** et la **relation de Bernoulli** — et
> t'apprend à les manier sans te tromper d'unité.

---

## 1. Fluide, masse volumique, pression

Un **fluide** est un corps qui n'a pas de forme propre : il épouse son contenant. Les
**liquides** et les **gaz** sont des fluides. On les décrit par deux grandeurs de base :

| Grandeur | Symbole | Relation | Unité SI |
|---|---|---|---|
| Masse volumique | $\rho$ | $\rho = \dfrac{m}{V}$ | kg·m⁻³ |
| Pression | $P$ | $P = \dfrac{F}{S}$ | pascal (Pa) |

> **Exemple.** L'eau liquide a une masse volumique $\rho_{\text{eau}} = 1{,}0 \times 10^{3}$
> kg·m⁻³. L'air, dans les conditions usuelles, vaut environ $\rho_{\text{air}} = 1{,}2$
> kg·m⁻³ : presque mille fois moins. Un pascal, c'est une pression très faible ; la pression
> atmosphérique vaut $P_{\text{atm}} \approx 1{,}0 \times 10^{5}$ Pa, soit $1{,}0$ bar.

> ⚠️ **Unités.** Dans **toutes** les formules de ce chapitre, on travaille en unités SI :
> masse volumique en **kg·m⁻³**, volume en **m³**, pression en **Pa**, vitesse en **m·s⁻¹**.
> Un volume donné en litres ou en cm³ doit être converti **avant** tout calcul.

---

## 2. La poussée d'Archimède

### Énoncé

Tout corps plongé dans un fluide au repos subit de la part de ce fluide une force verticale,
**dirigée vers le haut**, appelée **poussée d'Archimède**. Sa valeur est égale au **poids du
fluide déplacé** par le corps.

### Expression

$$\boxed{\vec{F}_{A} = -\,\rho_{\text{fluide}} \; V_{\text{immergé}} \; \vec{g}}$$

Le signe **moins** traduit une chose simple : la poussée est dirigée **à l'opposé** de
$\vec{g}$, donc **vers le haut**. En valeur (norme) :

$$\boxed{F_{A} = \rho_{\text{fluide}} \; V_{\text{immergé}} \; g}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $F_A$ | valeur de la poussée | N |
| $\rho_{\text{fluide}}$ | masse volumique du **fluide** (pas du corps !) | kg·m⁻³ |
| $V_{\text{immergé}}$ | volume de fluide **déplacé** = volume de la partie immergée | m³ |
| $g$ | intensité de la pesanteur ($\approx 9{,}81$ N·kg⁻¹) | N·kg⁻¹ |

> **Exemple.** Un cube d'arête $10$ cm entièrement immergé dans l'eau. Son volume est
> $V = (0{,}10)^3 = 1{,}0 \times 10^{-3}$ m³. La poussée vaut
> $F_A = 1000 \times 1{,}0 \times 10^{-3} \times 9{,}81 = 9{,}8$ N.
> Remarque : elle ne dépend **pas** de la nature du cube, seulement du volume immergé et du
> fluide.

### Flotter ou couler

On compare la poussée $F_A$ au poids $P = m g = \rho_{\text{corps}} V g$ du corps :

| Situation | Condition | Résultat |
|---|---|---|
| $\rho_{\text{corps}} < \rho_{\text{fluide}}$ | poussée > poids si tout immergé | le corps **remonte et flotte** |
| $\rho_{\text{corps}} = \rho_{\text{fluide}}$ | équilibre | le corps est en **équilibre indifférent** |
| $\rho_{\text{corps}} > \rho_{\text{fluide}}$ | poids > poussée | le corps **coule** |

> **Exemple — le bateau d'acier.** L'acier est huit fois plus dense que l'eau, pourtant un
> bateau flotte : sa coque creuse déplace un **énorme volume** d'eau, si bien que le volume
> immergé nécessaire pour que $F_A = P$ reste inférieur au volume total. C'est le volume
> déplacé, pas le matériau, qui commande.

---

## 3. Écoulement en régime permanent et débit volumique

### Régime permanent

Un écoulement est en **régime permanent** (ou stationnaire) lorsqu'en chaque point la vitesse
du fluide **ne dépend pas du temps**. L'eau qui coule à débit constant dans une conduite en est
un exemple : en un point donné, elle passe toujours à la même vitesse.

### Débit volumique

Le **débit volumique** $D_v$ est le volume de fluide qui traverse une section par unité de
temps :

$$\boxed{D_{v} = \frac{V}{\Delta t} = S \times v}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $D_v$ | débit volumique | **m³·s⁻¹** |
| $V$ | volume écoulé | m³ |
| $\Delta t$ | durée de l'écoulement | s |
| $S$ | aire de la section de la conduite | m² |
| $v$ | vitesse moyenne du fluide | m·s⁻¹ |

> **Exemple.** Un robinet remplit un seau de $10$ L en $20$ s.
> $D_v = \dfrac{V}{\Delta t} = \dfrac{10 \times 10^{-3}}{20} = 5{,}0 \times 10^{-4}$ m³·s⁻¹.
> On a converti $10$ L $= 10 \times 10^{-3}$ m³ **avant** le calcul : $1$ L $= 1$ dm³ $=
> 10^{-3}$ m³.

> ⚠️ **La relation $D_v = S \times v$ relie l'aspect « temps » et l'aspect « géométrie » d'un
> même débit.** Pendant $\Delta t$, le fluide avance de $\ell = v\,\Delta t$ ; le volume qui
> passe est le cylindre $V = S\,\ell = S\,v\,\Delta t$, d'où $D_v = V/\Delta t = S v$.

### Conservation du débit

Pour un fluide **incompressible** ($\rho$ constante) en régime permanent, il ne s'accumule
nulle part : **le débit volumique est le même dans toutes les sections** de la conduite.

$$\boxed{D_{v} = S_1 v_1 = S_2 v_2}$$

Conséquence directe : **là où la conduite se rétrécit, le fluide accélère.**

$$v_2 = v_1 \times \frac{S_1}{S_2}$$

> **Exemple.** Une conduite de section $S_1 = 20$ cm² où l'eau va à $v_1 = 1{,}0$ m·s⁻¹ se
> rétrécit à $S_2 = 5{,}0$ cm². La section est divisée par $4$, donc la vitesse est multipliée
> par $4$ : $v_2 = 1{,}0 \times \dfrac{20}{5{,}0} = 4{,}0$ m·s⁻¹. C'est ce qui se passe quand tu
> pinces l'embout d'un tuyau d'arrosage : le jet gicle plus vite.

> ⚠️ Dans un rapport de sections $\dfrac{S_1}{S_2}$, les deux aires doivent être dans la
> **même unité** : le rapport est sans dimension, inutile de convertir les cm² en m² tant
> qu'elles sont **toutes deux** en cm².

---

## 4. La relation de Bernoulli

### Énoncé (formule fournie)

Pour un fluide **incompressible**, en **régime permanent** et sans frottement (fluide
parfait), la quantité suivante se conserve le long d'une ligne de courant :

$$\boxed{\frac{1}{2}\,\rho\,v^{2} + \rho\,g\,z + P = \text{constante}}$$

Entre deux points $1$ et $2$ d'une même ligne de courant :

$$\frac{1}{2}\rho\,v_1^{2} + \rho\,g\,z_1 + P_1 = \frac{1}{2}\rho\,v_2^{2} + \rho\,g\,z_2 + P_2$$

Cette relation est **fournie** le jour de l'épreuve : ce qu'on attend de toi, c'est de savoir
**l'exploiter**, pas de la retrouver.

| Terme | Nom | Homogène à |
|---|---|---|
| $\tfrac{1}{2}\rho v^2$ | terme **cinétique** (lié à la vitesse) | une pression (Pa) |
| $\rho g z$ | terme de **pesanteur** (lié à l'altitude $z$) | une pression (Pa) |
| $P$ | **pression** du fluide | Pa |

> **Ce qu'il faut comprendre** : les **trois** termes ont la dimension d'une **pression** et
> s'expriment en **pascals**. C'est un bilan d'énergie par unité de volume. Si l'un des trois
> augmente, un autre doit diminuer pour que la somme reste constante.

> **Exemple — vidange (théorème de Torricelli).** Un réservoir ouvert se vide par un petit
> trou situé à une profondeur $h$ sous la surface. En haut et au trou la pression vaut
> $P_{\text{atm}}$, et la surface descend très lentement ($v_1 \approx 0$). Bernoulli donne
> $\rho g h = \tfrac{1}{2}\rho v_2^2$, d'où $v_2 = \sqrt{2 g h}$. Pour $h = 2{,}0$ m :
> $v_2 = \sqrt{2 \times 9{,}81 \times 2{,}0} \approx 6{,}3$ m·s⁻¹.

---

## 5. L'effet Venturi

C'est l'application la plus importante de Bernoulli : le cas d'une conduite **horizontale**.

Si la conduite est horizontale, $z_1 = z_2$ : le terme de pesanteur $\rho g z$ disparaît du
bilan. Il reste :

$$P_1 + \frac{1}{2}\rho v_1^{2} = P_2 + \frac{1}{2}\rho v_2^{2}
\quad\Longrightarrow\quad
\boxed{P_1 - P_2 = \frac{1}{2}\rho\,\big(v_2^{2} - v_1^{2}\big)}$$

Combine avec la conservation du débit : au rétrécissement, **la vitesse augmente**
($v_2 > v_1$), donc d'après la relation ci-dessus **la pression diminue** ($P_2 < P_1$).

$$\boxed{\text{section} \searrow \;\Rightarrow\; \text{vitesse} \nearrow \;\Rightarrow\;
\text{pression} \searrow}$$

> **Exemple.** De l'eau ($\rho = 1000$ kg·m⁻³) passe de $v_1 = 1{,}0$ m·s⁻¹ à $v_2 = 4{,}0$
> m·s⁻¹ dans un rétrécissement horizontal. La chute de pression vaut
> $P_1 - P_2 = \tfrac{1}{2}\times 1000 \times (4{,}0^2 - 1{,}0^2) = 500 \times 15 = 7{,}5 \times
> 10^{3}$ Pa. Le fluide est donc **moins pressé là où il va le plus vite** — c'est
> contre-intuitif mais c'est bien ce que dit Bernoulli.

> **À quoi ça sert.** Le débitmètre Venturi (on mesure $P_1 - P_2$ pour en déduire le débit),
> la trompe à eau du laboratoire, le carburateur, le pulvérisateur, et — de la même famille
> d'idées — la portance d'une aile d'avion : l'air va plus vite au-dessus qu'en dessous, donc
> la pression y est plus faible, ce qui soulève l'aile.

---

## 6. Méthodes

### Choisir la bonne loi

| Question posée | Outil |
|---|---|
| Un corps flotte-t-il ? Quelle force le pousse vers le haut ? | **Poussée d'Archimède** |
| Une vitesse ou une section change dans une conduite | **Conservation du débit** $S_1 v_1 = S_2 v_2$ |
| Une pression est liée à une vitesse ou à une altitude | **Relation de Bernoulli** |
| Conduite **horizontale**, pression vs vitesse | **Effet Venturi** (cas particulier de Bernoulli) |

### Résoudre un problème de Bernoulli

1. Repère **deux points** sur une même ligne de courant, là où tu connais le plus de choses.
2. Écris la relation de Bernoulli entre ces deux points.
3. **Simplifie** : conduite horizontale → $z_1 = z_2$ ; surface libre ou sortie à l'air →
   $P = P_{\text{atm}}$ ; grand réservoir → $v \approx 0$.
4. Si des sections interviennent, ajoute la **conservation du débit** $S_1 v_1 = S_2 v_2$.
5. Isole l'inconnue, **convertis en unités SI**, calcule, vérifie l'homogénéité (des Pa avec
   des Pa).

---

## 7. Tableau récapitulatif

| Notion | Formule | Unités |
|---|---|---|
| Masse volumique | $\rho = \dfrac{m}{V}$ | kg·m⁻³ |
| Poussée d'Archimède | $\vec{F}_A = -\rho_{\text{fluide}} V \vec{g}$ ; $F_A = \rho V g$ | N |
| Débit volumique | $D_v = \dfrac{V}{\Delta t} = S v$ | m³·s⁻¹ |
| Conservation du débit | $S_1 v_1 = S_2 v_2$ | — |
| Bernoulli | $\tfrac{1}{2}\rho v^2 + \rho g z + P = \text{cte}$ | Pa |
| Effet Venturi | $P_1 - P_2 = \tfrac{1}{2}\rho(v_2^2 - v_1^2)$ | Pa |

**Ordres de grandeur utiles** : $\rho_{\text{eau}} = 1{,}0\times10^{3}$ kg·m⁻³ ·
$\rho_{\text{air}} \approx 1{,}2$ kg·m⁻³ · $g \approx 9{,}81$ N·kg⁻¹ ·
$P_{\text{atm}} \approx 1{,}0\times10^{5}$ Pa · $1$ L $= 10^{-3}$ m³.

---

## 8. Les erreurs qui coûtent des points

1. **Prendre $\rho$ du corps au lieu de $\rho$ du fluide** dans la poussée d'Archimède. La
   poussée dépend du **fluide déplacé**, jamais de la nature de l'objet.
2. **Oublier le signe / la direction de la poussée.** $\vec{F}_A$ est **vers le haut**, opposée
   à $\vec{g}$ — d'où le signe moins dans l'expression vectorielle.
3. **Ne pas convertir les volumes et les sections.** $1$ L $= 10^{-3}$ m³, $1$ cm³ $= 10^{-6}$
   m³, $1$ cm² $= 10^{-4}$ m². Un débit doit finir en **m³·s⁻¹**.
4. **Confondre débit et vitesse.** $D_v$ (en m³·s⁻¹) n'est pas $v$ (en m·s⁻¹) : ils sont reliés
   par $D_v = S v$.
5. **Croire que « plus la conduite est étroite, plus la pression est forte ».** C'est
   l'inverse : section étroite → vitesse grande → **pression faible** (effet Venturi).
6. **Oublier que les trois termes de Bernoulli sont des pressions (Pa).** Mélanger un terme en
   pascals avec une vitesse en m·s⁻¹ rend l'équation non homogène : le calcul est forcément
   faux.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019, thème 2 « Mouvement et interactions »,
section « 2.3 Modéliser l'écoulement d'un fluide »
(docs/programme-terminale-physique-chimie-2019.txt, lignes 124-131).
Notions retenues du texte : « Poussée d'Archimède. Écoulement en régime permanent.
Débit volumique. Relation de Bernoulli. Effet Venturi. »
Capacités : « Utiliser l'expression de la poussée d'Archimède » ; « Exploiter la
conservation du débit volumique » ; « Exploiter la relation de Bernoulli (fournie)
pour un fluide incompressible en régime permanent ».

⚠️ ATTENTION — le gabarit (docs/gabarit-chapitre.md, ligne 264) recommande de NE PAS
produire de contenu Terminale avant 2027 car le programme change à la rentrée 2027-2028.
Ce chapitre a été demandé explicitement sur le programme 2019 encore en vigueur en 2026 ;
à revalider si publication après la réforme.

À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- La relation de Bernoulli est « fournie » : forme retenue ici avec les trois termes
  homogènes à une pression (½ρv² + ρgz + P). Vérifier que c'est bien la forme donnée aux
  élèves (certaines sources la divisent par ρg et l'écrivent en « hauteurs »).
- Le théorème de Torricelli (v = √(2gh)) est donné comme EXEMPLE d'exploitation de Bernoulli,
  pas comme résultat exigible en soi — confirmer qu'il reste dans le champ « exploiter ».
- L'expression vectorielle F_A = -ρV g avec le signe moins : convention de signe à confirmer
  selon l'orientation de g choisie en classe.
- g = 9,81 N·kg⁻¹ utilisé partout ; certains sujets prennent 9,8 ou 10. Sans incidence sur la
  méthode.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
