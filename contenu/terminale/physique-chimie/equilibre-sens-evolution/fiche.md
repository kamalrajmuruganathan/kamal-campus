---
id: tale-spe-pc-equilibre-sens-evolution
titre: "Sens d'évolution spontanée et équilibre chimique"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 15
prerequis:
  - Réaction chimique et tableau d'avancement (Première)
  - Concentration et quantité de matière (Seconde)
  - Transformations acide-base et pH (Terminale)
  - Fonction logarithme décimal $\log$ (Maths, Terminale)
statut: brouillon
relu_par: null
---

# Sens d'évolution spontanée et équilibre chimique

> Jusqu'ici, tu supposais qu'une réaction allait « jusqu'au bout » : le réactif limitant
> disparaissait entièrement. C'est faux pour beaucoup de transformations. Très souvent, la
> réaction **s'arrête avant la fin** : réactifs et produits coexistent, plus rien n'évolue à
> l'œil, et pourtant les transformations se poursuivent dans les deux sens à la même vitesse.
> C'est l'**état d'équilibre**. Ce chapitre te donne l'outil qui prédit ce point d'arrêt —
> le **quotient de réaction** $Q_r$ — et le critère qui dit **dans quel sens** un système va
> spontanément évoluer.

---

## 1. L'état d'équilibre chimique

### Définition

Une transformation chimique atteint un **état d'équilibre** lorsque les quantités de tous les
réactifs et de tous les produits **n'évoluent plus** au cours du temps, alors qu'il **reste
des réactifs**. La transformation est alors **non totale**.

On écrit l'équation de réaction avec un signe **=** (double sens), et non une flèche simple :

$$\mathrm{a\,A} + \mathrm{b\,B} \;=\; \mathrm{c\,C} + \mathrm{d\,D}$$

> **Exemple.** Dans l'eau, l'acide éthanoïque ne se dissocie que partiellement :
> $\mathrm{CH_3COOH + H_2O = CH_3COO^- + H_3O^+}$. À l'équilibre, il reste une grande partie
> de l'acide sous forme $\mathrm{CH_3COOH}$ : les quatre espèces coexistent.

### Un équilibre dynamique

À l'équilibre, rien ne bouge **à l'échelle macroscopique** (les concentrations sont
constantes), mais **à l'échelle microscopique**, la réaction directe ($\rightarrow$) et la
réaction inverse ($\leftarrow$) se produisent **à la même vitesse**. Les deux se compensent
exactement : l'équilibre est **dynamique**, pas figé.

> ⚠️ « Il reste des réactifs » ne veut pas dire « la réaction n'a pas eu lieu ». Elle a eu
> lieu, mais elle s'est arrêtée avant l'épuisement du réactif limitant.

---

## 2. Le quotient de réaction $Q_r$

### Définition

Pour une transformation $\mathrm{a\,A} + \mathrm{b\,B} = \mathrm{c\,C} + \mathrm{d\,D}$ en
solution aqueuse, le **quotient de réaction** est le nombre, **sans unité**, défini à un
instant donné par :

$$\boxed{\ Q_r = \dfrac{\left(\dfrac{[\mathrm{C}]}{c^\circ}\right)^{c}\left(\dfrac{[\mathrm{D}]}{c^\circ}\right)^{d}}{\left(\dfrac{[\mathrm{A}]}{c^\circ}\right)^{a}\left(\dfrac{[\mathrm{B}]}{c^\circ}\right)^{b}}\ }
\qquad c^\circ = 1\ \text{mol·L}^{-1}$$

Les **produits** sont au numérateur, les **réactifs** au dénominateur, chacun élevé à la
puissance de son **nombre stœchiométrique**. La division par $c^\circ = 1\ \text{mol·L}^{-1}$
rend $Q_r$ sans dimension ; en pratique, on écrit les concentrations en $\text{mol·L}^{-1}$ et
on « oublie » $c^\circ$.

### Les espèces qui ne comptent pas

- Le **solvant** (l'**eau** dans une solution aqueuse) **n'apparaît pas** dans $Q_r$.
- Un **solide** en présence **n'apparaît pas** non plus (on lui attribue la valeur 1).

Seules figurent les espèces **dissoutes** (et, hors de ce chapitre, les gaz).

> **Exemple.** Pour $\mathrm{CH_3COOH + H_2O = CH_3COO^- + H_3O^+}$, l'eau est le solvant, donc
> $$Q_r = \dfrac{[\mathrm{CH_3COO^-}]\,[\mathrm{H_3O^+}]}{[\mathrm{CH_3COOH}]}.$$
> Pour la dissolution $\mathrm{AgCl_{(s)} = Ag^+_{(aq)} + Cl^-_{(aq)}}$, le solide est absent :
> $Q_r = [\mathrm{Ag^+}]\,[\mathrm{Cl^-}]$.

> ⚠️ **Le piège n°1** : mettre l'eau ou un solide dans $Q_r$. Ils n'y sont jamais. Et
> n'oublie pas les **exposants** : un nombre stœchiométrique de 2 devient un carré.

---

## 3. La constante d'équilibre $K(T)$

### Définition

Quand le système atteint l'**équilibre**, le quotient de réaction prend une valeur
particulière qui ne dépend que de la **température** : c'est la **constante d'équilibre**
$K(T)$.

$$\boxed{\ Q_{r,\text{éq}} = K(T)\ }$$

$K$ est **sans unité** et **caractéristique** de la réaction à une température donnée. Elle ne
dépend **ni** des concentrations initiales, **ni** du volume, **ni** de la façon dont on a
préparé le mélange — **seulement** de $T$.

> **Exemple.** Pour l'acide éthanoïque à 25 °C, $K = 1{,}8 \times 10^{-5}$. Quelle que soit la
> concentration initiale d'acide versée, une fois l'équilibre atteint le quotient
> $\dfrac{[\mathrm{CH_3COO^-}]\,[\mathrm{H_3O^+}]}{[\mathrm{CH_3COOH}]}$ vaut toujours
> $1{,}8\times10^{-5}$.

### Ce que la valeur de $K$ indique

- $K$ **très grand** ($K \gg 1$, par ex. $10^{10}$) : à l'équilibre il ne reste presque plus
  de réactifs → transformation **quasi totale**.
- $K$ **très petit** ($K \ll 1$, par ex. $10^{-5}$) : la réaction avance à peine → réactifs
  largement majoritaires, transformation **très peu avancée**.

> ⚠️ $K$ renseigne sur l'**état final**, jamais sur la **vitesse**. Une réaction avec un $K$
> énorme peut être extrêmement lente (cinétique) : $K$ et vitesse sont deux questions
> indépendantes.

---

## 4. Le critère d'évolution spontanée

### La comparaison $Q_{r,i}$ / $K$

On calcule le quotient de réaction **dans l'état initial**, noté $Q_{r,i}$, puis on le compare
à $K(T)$. Le système évolue **spontanément dans le sens qui rapproche $Q_r$ de $K$** :

| Situation | Sens d'évolution | Ce qui se passe |
|---|---|---|
| $Q_{r,i} < K$ | sens **direct** ($\rightarrow$) | $Q_r$ **augmente** : formation de produits |
| $Q_{r,i} > K$ | sens **indirect** ($\leftarrow$) | $Q_r$ **diminue** : formation de réactifs |
| $Q_{r,i} = K$ | **aucune** | le système est déjà à l'équilibre |

$$\boxed{\ Q_{r,i} < K \Rightarrow \text{sens direct} \qquad Q_{r,i} > K \Rightarrow \text{sens indirect}\ }$$

> **Exemple.** Réaction $\mathrm{A_{(aq)} + B_{(aq)} = C_{(aq)} + D_{(aq)}}$ de constante
> $K = 10$. On mélange les quatre espèces telles que
> $Q_{r,i} = \dfrac{[\mathrm{C}][\mathrm{D}]}{[\mathrm{A}][\mathrm{B}]} = 2$. Comme
> $Q_{r,i} = 2 < 10 = K$, le système évolue dans le **sens direct** : $\mathrm{A}$ et
> $\mathrm{B}$ sont consommés, $Q_r$ monte jusqu'à atteindre $10$.

> **Méthode.** L'évolution rapproche **toujours** $Q_r$ de $K$. Retiens l'image : $Q_r$
> « poursuit » $K$. S'il est en dessous, il monte (on fabrique des produits) ; s'il est
> au-dessus, il descend (on refabrique des réactifs).

> ⚠️ Compare bien $Q_{r,i}$ à $K$, jamais $Q_{r,i}$ à $1$. Un système avec $Q_{r,i} = 5$ peut
> évoluer dans un sens **ou** dans l'autre selon que $K$ vaut $2$ ou $100$.

---

## 5. Le taux d'avancement final $\tau$

### Définition

Le **taux d'avancement final** $\tau$ mesure jusqu'où la réaction est allée. C'est le rapport
de l'avancement **final** (à l'équilibre) $x_f$ sur l'avancement **maximal** $x_{max}$ (celui
qu'on aurait si la transformation était totale, c'est-à-dire quand le réactif limitant est
entièrement consommé) :

$$\boxed{\ \tau = \dfrac{x_f}{x_{max}}\ }$$

$\tau$ est un nombre **sans unité**, compris entre $0$ et $1$ (souvent exprimé en %). On le
détermine à l'aide d'un **tableau d'avancement**, dans lequel $x_f$ se lit sur une grandeur
mesurable (concentration d'une espèce, pH, conductivité…).

> **Exemple.** Acide éthanoïque à $c = 1{,}0\times10^{-2}\ \text{mol·L}^{-1}$, pH mesuré $= 3{,}4$.
> À l'équilibre $[\mathrm{H_3O^+}]_f = 10^{-3{,}4} = 4{,}0\times10^{-4}\ \text{mol·L}^{-1}$.
> Dans un volume $V$ : $x_f = [\mathrm{H_3O^+}]_f \times V$ et $x_{max} = c \times V$ (si tout
> l'acide s'était dissocié). Donc
> $$\tau = \dfrac{[\mathrm{H_3O^+}]_f\,V}{c\,V} = \dfrac{4{,}0\times10^{-4}}{1{,}0\times10^{-2}} = 0{,}040 = 4{,}0\ \%.$$
> Seuls 4 % de l'acide ont réagi : la transformation est très peu avancée.

---

## 6. Lien entre $\tau$ et le caractère total de la transformation

### La règle

| Valeur de $\tau$ | Transformation | État final |
|---|---|---|
| $\tau = 1$ (100 %) | **totale** | le réactif limitant a **entièrement** disparu |
| $\tau < 1$ | **non totale** | il reste des réactifs, le système est à l'**équilibre** |

$$\boxed{\ \tau = 1 \Leftrightarrow \text{transformation totale} \qquad \tau < 1 \Leftrightarrow \text{équilibre chimique}\ }$$

> **Exemple.** Pour l'acide éthanoïque ci-dessus, $\tau = 4{,}0\ \% \ll 1$ : transformation
> **non totale**, il reste énormément d'acide non dissocié (acide **faible**). Pour l'acide
> chlorhydrique, on mesurerait $\tau \approx 1$ : dissociation **totale** (acide **fort**).

### De quoi dépend $\tau$ ?

$\tau$ n'est **pas** une caractéristique figée de la réaction : contrairement à $K$, il
dépend des **conditions initiales**.

- Plus $K$ est **grand**, plus $\tau$ est proche de $1$ (transformation d'autant plus avancée).
- Pour une même réaction, **diluer** (baisser $c$) modifie $\tau$ : par exemple pour un acide
  faible, une dilution **augmente** le taux d'avancement final.

> ⚠️ Ne confonds pas $K$ et $\tau$. $K$ ne dépend **que de $T$** ; $\tau$ dépend de $K$
> **et** des concentrations initiales. Deux solutions du même acide, à des concentrations
> différentes, ont le **même $K$** mais des **$\tau$ différents**.

---

## 7. Méthode — prévoir le sens et l'état final

1. **Écrire l'équation** de réaction (signe $=$) et repérer réactifs / produits.
2. **Exprimer $Q_r$** : produits au numérateur, réactifs au dénominateur, avec les exposants
   stœchiométriques ; **exclure** le solvant et les solides.
3. **Calculer $Q_{r,i}$** avec les concentrations **initiales** (en $\text{mol·L}^{-1}$).
4. **Comparer à $K$** : $Q_{r,i} < K \Rightarrow$ sens direct ; $Q_{r,i} > K \Rightarrow$ sens
   indirect ; $Q_{r,i} = K \Rightarrow$ équilibre.
5. Pour l'**état final**, dresser le **tableau d'avancement**, lire $x_f$ sur une grandeur
   mesurée, calculer $x_{max}$ (réactif limitant), puis $\tau = x_f / x_{max}$.
6. **Conclure** : $\tau = 1$ transformation totale ; $\tau < 1$ équilibre.

> **Exemple complet.** Système $\mathrm{A + B = C + D}$, $K = 4{,}0$. Initialement (en
> $\text{mol·L}^{-1}$) : $[\mathrm{A}]_i = 0{,}10$, $[\mathrm{B}]_i = 0{,}10$,
> $[\mathrm{C}]_i = 0{,}20$, $[\mathrm{D}]_i = 0{,}20$.
> $Q_{r,i} = \dfrac{0{,}20\times0{,}20}{0{,}10\times0{,}10} = \dfrac{0{,}040}{0{,}010} = 4{,}0$.
> Ici $Q_{r,i} = K$ : le système est **déjà à l'équilibre**, il n'évolue pas.

---

## 8. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| État d'équilibre | quantités constantes **et** réactifs restants → transformation non totale |
| Équilibre dynamique | sens direct et inverse à la **même vitesse** |
| Quotient de réaction | $Q_r = \dfrac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}$ (÷ $c^\circ$), sans unité |
| Espèces exclues de $Q_r$ | **solvant** (eau) et **solides** |
| Constante d'équilibre | $Q_{r,\text{éq}} = K(T)$ ; dépend **seulement de $T$** |
| Critère d'évolution | $Q_{r,i} < K$ : sens direct ; $Q_{r,i} > K$ : sens indirect |
| Taux d'avancement final | $\tau = \dfrac{x_f}{x_{max}}$, entre $0$ et $1$ |
| Total / non total | $\tau = 1$ total ; $\tau < 1$ équilibre |
| $\tau$ dépend de… | $K$ **et** des concentrations initiales (pas $K$) |

---

## 9. Les erreurs qui coûtent des points

1. **Mettre l'eau ou un solide dans $Q_r$.** Le solvant et les solides n'y figurent **jamais**.
   Seules les espèces dissoutes (et les gaz) comptent.
2. **Oublier les exposants stœchiométriques.** Un coefficient $2$ dans l'équation donne un
   **carré** dans $Q_r$ ; l'omettre change complètement la valeur.
3. **Comparer $Q_{r,i}$ à $1$ au lieu de $K$.** Le critère d'évolution est
   $Q_{r,i}$ **vs** $K$. Comparer à $1$ n'a aucun sens.
4. **Confondre $K$ et $\tau$.** $K$ ne dépend que de la température ; $\tau$ dépend aussi des
   concentrations initiales. Diluer ne change pas $K$, mais change $\tau$.
5. **Croire que « il reste des réactifs » = « la réaction est bloquée par la cinétique ».**
   Non : un équilibre est un état final **thermodynamique**, atteint même après un temps
   infini. C'est $K$, pas la lenteur, qui l'impose.
6. **Oublier de convertir les concentrations en $\text{mol·L}^{-1}$** (ou les volumes en L)
   avant de calculer $Q_r$ et $\tau$ : un facteur $10^3$ oublié fausse le sens d'évolution.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait de travail :
docs/programme-terminale-physique-chimie-2019.txt, section « 1.6 Sens d'évolution
spontanée et équilibre » (lignes 74-81). Page BO : education.gouv.fr/bo/19/Special8/
MENE1921249A.htm ; PDF officiel spe249_annexe_1158929.pdf. À confronter au PDF officiel
avant publication (extrait initial obtenu par WebFetch).

Périmètre STRICTEMENT limité à la section 1.6 :
- état d'équilibre chimique, transformation non totale, équilibre dynamique ;
- quotient de réaction Qr (expression, exclusion solvant/solides, exposants) ;
- constante d'équilibre K(T), Qr,éq = K, dépendance à T seule ;
- critère d'évolution spontanée par comparaison Qr,i / K ;
- taux d'avancement final τ = x_f/x_max et lien total (τ=1) / non total (τ<1).
Volontairement EXCLUS (relèvent de 1.1, 1.3, 1.7 ou du supérieur) : Ka/pKa comme objet
d'étude, diagrammes de prédominance, produit ionique Ke, titrages, électrolyse,
expression de Qr pour les gaz avec pressions partielles, loi de Le Chatelier /
déplacement d'équilibre, relation ΔrG = -RT ln K. La valeur K = 1,8e-5 pour
CH3COOH/CH3COO- est utilisée comme illustration numérique (constante d'acidité), sans
introduire le formalisme Ka.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme parle de « quotient de réaction » : la forme rigoureuse divise chaque
  concentration par c° = 1 mol/L. J'ai gardé cette écriture (comme pour le pH en 1.1) puis
  autorisé l'écriture allégée. À valider comme convention retenue.
- L'exclusion des solides et du solvant de Qr : conforme au programme du supérieur et à
  l'usage lycée ; vérifier que l'exemple AgCl(s) (produit de solubilité implicite) reste
  dans le périmètre attendu en terminale, sinon le remplacer par un exemple tout-aqueux.
- Affirmation « diluer un acide faible augmente τ » : exacte (loi de dilution d'Ostwald),
  mais donnée ici sans démonstration — à présenter comme résultat admis / observé.
- Vérifier la cohérence numérique de l'exemple acide éthanoïque (c=1,0e-2, pH=3,4 →
  τ=4,0 %, K≈1,7e-5 recalculable), arrondi à 2 chiffres significatifs.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
