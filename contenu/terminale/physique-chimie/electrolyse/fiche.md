---
id: tale-spe-pc-electrolyse
titre: "Électrolyse : forcer le sens d'évolution"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 14
prerequis:
  - Oxydoréduction et demi-équations électroniques (Première)
  - Sens d'évolution spontanée et quotient de réaction (Terminale)
  - Quantité de matière, masse molaire, volume molaire
statut: brouillon
relu_par: null
---

# Électrolyse : forcer le sens d'évolution

> Un système chimique évolue **spontanément** dans un seul sens, celui qui rapproche $Q_r$
> de $K$. L'électrolyse est le procédé qui **inverse** cette évolution : en imposant un
> courant avec un générateur, on force la transformation à se produire dans le sens
> **non spontané**. C'est ainsi qu'on recharge une batterie, qu'on dépose une couche de
> métal (galvanoplastie) ou qu'on produit du dihydrogène.

---

## 1. Évolution spontanée ou forcée

Une **pile** transforme de l'énergie chimique en énergie électrique : le système évolue
**tout seul**, dans le sens spontané, et débite un courant.

Une **électrolyse** fait l'inverse. Un **générateur** externe impose le passage d'un
courant qui **force** le système à évoluer dans le sens **contraire du sens spontané**.

| | Pile | Électrolyseur |
|---|---|---|
| Sens d'évolution | spontané | **forcé** (non spontané) |
| Rôle électrique | générateur | **récepteur** |
| Énergie | chimique → électrique | électrique → chimique |
| Qui fournit le courant ? | la pile elle-même | un générateur extérieur |

> **Exemple.** Une batterie de téléphone qui alimente l'appareil fonctionne en **pile**
> (décharge, spontanée). Quand tu la branches au chargeur, celui-ci impose un courant en
> sens inverse : c'est une **électrolyse** qui reconstitue les réactifs.

---

## 2. L'électrolyseur

Un **électrolyseur** est constitué de deux **électrodes** (conducteurs solides) plongées
dans un **électrolyte** (solution ou liquide contenant des ions mobiles), le tout relié
aux deux bornes d'un **générateur**.

Le générateur joue le rôle de « pompe à électrons » : il **arrache** des électrons à une
électrode et les **pousse** vers l'autre. Ce sont ces électrons, forcés de circuler, qui
provoquent les réactions chimiques aux électrodes.

$$\boxed{\text{générateur} \;+\; \text{2 électrodes} \;+\; \text{électrolyte}}$$

> **Exemple.** Deux tiges de graphite dans une solution de chlorure de sodium reliées à
> une pile de $9$ V : le courant impose la formation de dichlore d'un côté et de
> dihydrogène de l'autre — deux espèces qui **ne se seraient jamais formées seules**.

---

## 3. Anode et cathode : les transferts d'électrons

La règle est **universelle** et ne dépend jamais du signe des électrodes :

$$\boxed{\text{Anode} : \text{oxydation} \qquad\qquad \text{Cathode} : \text{réduction}}$$

- À l'**anode**, une espèce **cède** des électrons : c'est une **oxydation**. Les électrons
  libérés partent dans le fil vers le générateur.
- À la **cathode**, une espèce **capte** des électrons : c'est une **réduction**. Les
  électrons arrivent du générateur par le fil.

Un moyen mnémotechnique : **anode / oxydation** commencent par une voyelle,
**cathode / réduction**... non, retiens plutôt « **red-cat** » (RÉDuction à la CAThode).

### Les signes, eux, changent

Dans un électrolyseur, l'anode est reliée à la borne **+** du générateur et la cathode à
la borne **−**. C'est **l'inverse d'une pile** ! D'où le piège : ne jamais identifier une
électrode par son signe. On l'identifie **par la réaction** qui s'y produit.

| Électrode | Réaction | Reçoit/cède les e⁻ | Borne du générateur |
|---|---|---|---|
| **Anode** | oxydation | cède les électrons | **+** |
| **Cathode** | réduction | capte les électrons | **−** |

> **Exemple.** Électrolyse d'une solution de sulfate de cuivre avec électrodes de cuivre.
> À la cathode (−) : $\text{Cu}^{2+} + 2\,\text{e}^- \rightarrow \text{Cu}$ (dépôt de cuivre,
> **réduction**). À l'anode (+) : $\text{Cu} \rightarrow \text{Cu}^{2+} + 2\,\text{e}^-$
> (le métal se dissout, **oxydation**).

---

## 4. La charge électrique : $Q = I\cdot\Delta t$

Le courant transporte une **charge électrique** $Q$. Pour un courant d'intensité constante :

$$\boxed{Q = I \times \Delta t}$$

| Grandeur | Symbole | Unité (SI) |
|---|---|---|
| Charge électrique | $Q$ | coulomb (**C**) |
| Intensité du courant | $I$ | ampère (**A**) |
| Durée | $\Delta t$ | seconde (**s**) |

> ⚠️ **Le piège des unités.** $\Delta t$ doit être en **secondes**, pas en minutes ni en
> heures. $1$ min $= 60$ s ; $1$ h $= 3600$ s. Une intensité donnée en mA doit être
> convertie en A ($1$ mA $= 10^{-3}$ A).

> **Exemple.** Un courant $I = 0{,}50$ A pendant $\Delta t = 30$ min $= 1800$ s transporte
> $Q = 0{,}50 \times 1800 = 900$ C.

---

## 5. La constante de Faraday : $n(\text{e}^-) = \dfrac{Q}{F}$

Une mole d'électrons transporte une charge bien précise, appelée **constante de Faraday** :

$$\boxed{F = \mathcal{N}_A \times e \approx 96500 \ \text{C·mol}^{-1}}$$

(produit du nombre d'Avogadro $\mathcal{N}_A \approx 6{,}02\times10^{23}$ mol⁻¹ par la charge
élémentaire $e \approx 1{,}60\times10^{-19}$ C).

On en déduit la **quantité d'électrons** échangés :

$$\boxed{n(\text{e}^-) = \frac{Q}{F} = \frac{I\,\Delta t}{F}}$$

avec $n(\text{e}^-)$ en mol, $Q$ en C, $F$ en C·mol⁻¹.

> **Exemple.** Avec $Q = 900$ C (exemple précédent) :
> $n(\text{e}^-) = \dfrac{900}{96500} = 9{,}3\times10^{-3}$ mol d'électrons.

---

## 6. Méthode : quantité de matière transformée

C'est **le** calcul attendu au bac. On relie la durée et l'intensité à la quantité (ou la
masse, ou le volume) d'espèce formée ou consommée.

1. **Écrire la demi-équation** à l'électrode concernée, équilibrée en électrons.
2. **Calculer la charge** $Q = I\,\Delta t$ (convertir $\Delta t$ en s, $I$ en A).
3. **Quantité d'électrons** : $n(\text{e}^-) = \dfrac{Q}{F}$.
4. **Stœchiométrie** : lire le rapport entre e⁻ et l'espèce dans la demi-équation.
5. **Conclure** : masse $m = n\times M$, ou volume de gaz $V = n\times V_m$.

> **Exemple complet — dépôt de cuivre.**
> Demi-équation à la cathode : $\text{Cu}^{2+} + 2\,\text{e}^- \rightarrow \text{Cu}$.
> Il faut donc **2** électrons pour **1** atome de cuivre :
> $$n(\text{Cu}) = \frac{n(\text{e}^-)}{2}.$$
> Avec $I = 0{,}50$ A pendant $30$ min : $Q = 900$ C, $n(\text{e}^-) = 9{,}3\times10^{-3}$ mol,
> donc $n(\text{Cu}) = 4{,}7\times10^{-3}$ mol.
> Masse déposée : $m = n(\text{Cu})\times M(\text{Cu}) = 4{,}7\times10^{-3}\times 63{,}5
> \approx 0{,}30$ g.

> **Exemple — dégagement gazeux.** À la cathode lors de l'électrolyse de l'eau :
> $2\,\text{H}_2\text{O} + 2\,\text{e}^- \rightarrow \text{H}_2 + 2\,\text{HO}^-$, donc
> $n(\text{H}_2) = \dfrac{n(\text{e}^-)}{2}$. Le volume se lit alors avec le **volume molaire**
> des gaz $V_m$ : $V(\text{H}_2) = n(\text{H}_2)\times V_m$.

---

## 7. Cas particuliers et pièges

- **Stœchiométrie ≠ 1.** Le rapport entre e⁻ et espèce dépend de la demi-équation. Pour
  $\text{Al}^{3+} + 3\,\text{e}^- \rightarrow \text{Al}$ il faut **3** électrons par atome :
  $n(\text{Al}) = n(\text{e}^-)/3$. Ne jamais supposer un rapport $1{:}1$.
- **Deux électrodes travaillent en même temps.** La **même** quantité d'électrons passe
  aux deux électrodes (même courant, même durée). Mais les quantités de matière formées de
  chaque côté peuvent différer si les demi-équations n'ont pas le même nombre d'électrons.
- **Intensité variable.** Si $I$ n'est pas constant, $Q$ est l'**aire sous la courbe**
  $I(t)$, et non un simple produit.
- **$F$ n'est pas $\mathcal{N}_A$.** La constante de Faraday ($96500$ C·mol⁻¹) est la charge
  d'une mole d'électrons ; le nombre d'Avogadro ($6{,}02\times10^{23}$ mol⁻¹) est un nombre
  d'entités. Ils sont liés par $F = \mathcal{N}_A\,e$ mais n'ont ni la même valeur ni la même unité.

---

## 8. Tableau récapitulatif

| | |
|---|---|
| Électrolyse | évolution **forcée**, sens **non spontané** |
| Électrolyseur | récepteur : convertit énergie électrique → chimique |
| Anode | **oxydation** ; borne **+** ; cède les e⁻ |
| Cathode | **réduction** ; borne **−** ; capte les e⁻ |
| Charge | $Q = I\,\Delta t$ ($Q$ en C, $I$ en A, $\Delta t$ en **s**) |
| Faraday | $F = \mathcal{N}_A\,e \approx 96500$ C·mol⁻¹ |
| Quantité d'électrons | $n(\text{e}^-) = \dfrac{Q}{F} = \dfrac{I\,\Delta t}{F}$ |
| Espèce formée | via la **stœchiométrie** de la demi-équation |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier de convertir $\Delta t$ en secondes.** $30$ min, ce n'est pas $30$ dans la
   formule mais $1800$ s. Erreur d'un facteur $60$ garantie.
2. **Identifier l'électrode par son signe.** Dans un électrolyseur la cathode est **−**
   (l'inverse d'une pile). Toujours raisonner par la réaction : anode = oxydation,
   cathode = réduction.
3. **Confondre $F$ et $\mathcal{N}_A$.** $F = 96500$ C·mol⁻¹, $\mathcal{N}_A = 6{,}02\times10^{23}$
   mol⁻¹. Diviser $Q$ par $\mathcal{N}_A$ donne un résultat absurde.
4. **Oublier le coefficient stœchiométrique** des électrons : prendre $n(\text{Cu}) = n(\text{e}^-)$
   au lieu de $n(\text{e}^-)/2$.
5. **Mélanger les unités de $I$** : une intensité en mA employée telle quelle dans $Q = I\,\Delta t$
   donne un $Q$ mille fois trop grand.
6. **Croire que l'électrolyse est spontanée.** Sans générateur, rien ne se passe : c'est le
   courant imposé qui force la transformation.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, spécialité, terminale générale,
BO spécial n°8 du 25 juillet 2019 — section « 1.7 Forcer le sens : électrolyse »
(docs/programme-terminale-physique-chimie-2019.txt, lignes 83-88).
Notions et contenus retenus : « Passage forcé d'un courant pour réaliser une
transformation. Électrolyseur. »
Capacités exigibles couvertes : « Modéliser les transferts d'électrons aux électrodes » ;
« Déterminer les variations de quantité de matière à partir de la durée et de l'intensité
(Q = I·Δt) ». La relation n(e-) = Q/F et la constante de Faraday sont demandées dans la
consigne de production ; à confronter à l'énoncé exact du BO (F parfois seulement « fourni »).

⚠️ À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- La constante de Faraday F = 96500 C/mol est-elle exigible / à connaître, ou fournie ?
  Le programme cite Q = I·Δt explicitement mais pas F ; je l'ai introduite car demandée
  par la consigne. Valeur exacte 96485 C/mol arrondie à 96500.
- L'électrolyse de l'eau et le sulfate de cuivre sont des exemples classiques mais non
  nommés dans le BO ; vérifier qu'ils restent dans le périmètre attendu.
- M(Cu) = 63,5 g/mol utilisé dans l'exemple ; à fournir en énoncé le jour de l'épreuve.
- ⚠️ Le gabarit (docs/gabarit-chapitre.md §6) déconseille de produire de la Terminale
  avant 2027 (programme susceptible de changer). Chapitre produit sur demande explicite ;
  vérifier la validité du programme 2019 à la date de publication.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
