---
id: tale-stl-spcl-systemes-procedes-flux
titre: "Systèmes et procédés : flux d'information, d'énergie et de matière"
voie: technologique
niveau: terminale-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — SPCL, série STL, classe terminale"
duree_lecture_min: 20
prerequis:
  - "Instrumentation : la chaîne de mesure (Première STL SPCL)"
  - Capteur, conditionneur, régulation tout ou rien, hystérésis (Première STL SPCL)
  - Puissance, énergie et relation $E = P\,t$ (Première STL)
  - Masse volumique $\rho$, grandeurs et unités du SI, conversions (Seconde / Première)
statut: brouillon
relu_par: null
---

# Systèmes et procédés : flux d'information, d'énergie et de matière

> Une station d'épuration, une chaudière, un fermenteur de laboratoire, un bras
> robotisé : tous sont des **systèmes** qui échangent avec l'extérieur trois choses,
> et trois seulement — de l'**information**, de l'**énergie** et de la **matière**.
> Analyser un procédé, c'est suivre ces trois **flux** : d'où ils viennent, comment
> ils sont transformés, où ils partent. La Première t'a appris à lire un capteur ;
> ici tu apprends à décrire la **chaîne complète** qui va de la consigne à l'action,
> et à faire le **bilan** de ce qui entre et de ce qui sort. Le vrai piège reste le
> même qu'en Première : les **unités** (W, kg/s, m³/s) et les conversions.

---

## 1. Le flux d'information : la chaîne d'information

### Définition

Un **système** est un ensemble organisé qui reçoit des flux (information, énergie,
matière), les transforme, et produit une action ou un résultat. La partie qui **traite
l'information**, c'est la **chaîne d'information**.

Elle se décompose en **trois fonctions**, toujours dans cet ordre :

$$\boxed{\text{ACQUÉRIR} \longrightarrow \text{TRAITER} \longrightarrow \text{COMMUNIQUER}}$$

| Fonction | Rôle | Composant type |
|---|---|---|
| **Acquérir** | prélever une grandeur physique | **capteur** |
| **Traiter** | comparer, calculer, décider | unité de traitement / **correcteur** |
| **Communiquer** | transmettre la décision ou l'info | afficheur, voyant, bus, réseau |

> **Exemple.** Dans un thermostat de four : la sonde de température **acquiert**, le
> circuit **traite** (compare à la consigne), l'afficheur et l'ordre envoyé au chauffage
> **communiquent** le résultat.

### Boucle ouverte, boucle fermée

- **Boucle ouverte** : le système agit sans vérifier le résultat. Un radiateur réglé sur
  « position 3 » chauffe pareil, que la pièce soit à 15 °C ou à 25 °C.
- **Boucle fermée** (régulation) : le système **mesure** en permanence le résultat et
  **corrige** son action pour se rapprocher de la valeur voulue.

> ⚠️ La boucle fermée se reconnaît à un seul détail : une **mesure qui revient** vers
> l'entrée. C'est le **retour** (ou *feedback*). Sans retour, pas de régulation.

### La régulation en boucle fermée

Quatre organes reviennent toujours dans une boucle de régulation :

| Organe | Rôle |
|---|---|
| **Consigne** | la valeur que l'on veut atteindre (température voulue, débit voulu…) |
| **Capteur** | mesure la valeur réelle de la grandeur réglée |
| **Correcteur** | compare mesure et consigne, décide de l'action à mener |
| **Actionneur** | agit physiquement sur le système (chauffage, vanne, moteur) |

Le correcteur travaille sur l'**écart** (ou erreur) :

$$\boxed{\varepsilon = \text{consigne} - \text{mesure}}$$

Tant que $\varepsilon \neq 0$, le correcteur agit. Quand $\varepsilon = 0$, la grandeur
réglée a atteint sa consigne.

> **Exemple.** Chauffage d'un bain thermostaté. Consigne : 37,0 °C. Le capteur mesure
> 34,5 °C. L'écart vaut $\varepsilon = 37{,}0 - 34{,}5 = +2{,}5\ \text{°C}$ : positif, donc
> le correcteur commande à l'actionneur (résistance) de **chauffer**. À 37,0 °C, l'écart
> s'annule et l'ordre de chauffe cesse.

### Régulation tout ou rien (TOR) vs proportionnelle

C'est le cœur du chapitre côté information : **comment** le correcteur répond à l'écart.

| | **Tout ou rien (TOR)** | **Proportionnelle (P)** |
|---|---|---|
| Action de l'actionneur | deux états seulement : **ON / OFF** | dosée : **proportionnelle à $\varepsilon$** |
| Loi de commande | selon le signe de $\varepsilon$ | $S = k \times \varepsilon$ |
| Comportement | oscille autour de la consigne | se stabilise, sans à-coups |
| Exemple | thermostat de fer à repasser, frigo | vanne modulante, variateur de moteur |

En TOR, on ajoute un **hystérésis** (vu en Première) : l'actionneur démarre à un seuil
bas et s'arrête à un seuil haut, pour éviter qu'il ne claque en permanence autour de la
consigne.

En proportionnel, plus l'écart est grand, plus l'action est forte ; le facteur $k$ est le
**gain** du correcteur.

> **Exemple.** Régulation de niveau d'une cuve. En TOR, la pompe est à fond ou à l'arrêt.
> En proportionnel, on ouvre la vanne d'autant plus que le niveau est loin de la consigne :
> le remplissage ralentit tout seul en approchant, sans dépassement.

---

## 2. Le flux d'énergie : la chaîne d'énergie

### Définition

La **chaîne d'énergie** décrit le trajet de l'énergie dans le système, depuis sa source
jusqu'à l'action utile. Elle a **quatre** fonctions :

$$\boxed{\text{ALIMENTER} \to \text{DISTRIBUER} \to \text{CONVERTIR} \to \text{TRANSMETTRE}}$$

| Fonction | Rôle | Composant type |
|---|---|---|
| **Alimenter** | fournir l'énergie d'entrée | réseau, batterie, carburant |
| **Distribuer** | l'orienter, la doser sur ordre de la chaîne d'info | relais, variateur, distributeur |
| **Convertir** | changer sa forme | moteur, résistance, pompe |
| **Transmettre** | l'amener à l'effecteur | engrenages, courroie, arbre |

> C'est la chaîne d'**information** qui **commande** la chaîne d'**énergie** : le
> correcteur (info) pilote le distributeur (énergie). Les deux chaînes travaillent
> ensemble.

### Puissance et bilan de puissance

La **puissance** $P$ est l'énergie échangée par unité de temps :

$$\boxed{P = \frac{E}{\Delta t}} \qquad P \text{ en watts (W)}, \; E \text{ en joules (J)}, \; \Delta t \text{ en secondes (s)}$$

Dans un convertisseur (un moteur par exemple), toute la puissance absorbée ne ressort pas
en puissance utile : une partie est **perdue** (chaleur, frottements). D'où le **bilan de
puissance** :

$$\boxed{P_{\text{absorbée}} = P_{\text{utile}} + P_{\text{pertes}}}$$

> **Exemple.** Un moteur absorbe $P_{\text{a}} = 1500\ \text{W}$ sur le réseau et fournit
> $P_{\text{u}} = 1200\ \text{W}$ sur son arbre. Les pertes valent
> $P_{\text{pertes}} = 1500 - 1200 = 300\ \text{W}$, dissipées en chaleur.

### Le rendement

Le **rendement** $\eta$ (lettre grecque « êta ») compare ce qu'on récupère à ce qu'on a
fourni :

$$\boxed{\eta = \frac{P_{\text{utile}}}{P_{\text{absorbée}}}}$$

C'est un **nombre sans unité**, toujours compris entre **0 et 1** (soit 0 % à 100 %). On
peut aussi l'écrire avec les énergies : $\eta = E_{\text{utile}}/E_{\text{absorbée}}$.

> **Exemple.** Le moteur ci-dessus a pour rendement
> $\eta = \dfrac{1200}{1500} = 0{,}80 = 80\,\%$. Autrement dit, 80 % de l'électricité
> devient du mouvement utile, 20 % part en chaleur.

> ⚠️ Un rendement **ne dépasse jamais 100 %**. Si ton calcul donne $\eta > 1$, tu as
> interverti utile et absorbée. La puissance absorbée est **toujours la plus grande**.

### Pertes en chaîne

Quand plusieurs convertisseurs se suivent, les rendements se **multiplient** :

$$\eta_{\text{total}} = \eta_1 \times \eta_2 \times \dots$$

> **Exemple.** Une chaîne à deux étages de rendements $0{,}90$ et $0{,}85$ a un rendement
> global $\eta = 0{,}90 \times 0{,}85 = 0{,}77$, soit 77 % — inférieur à chacun des deux.

---

## 3. Le flux de matière : débits et bilans

### Débit volumique et débit massique

Un **procédé** fait circuler de la matière (eau, air, réactif, produit). On mesure ce flux
par un **débit** : la quantité qui traverse une section par unité de temps.

$$\boxed{Q_V = \frac{V}{\Delta t}} \qquad \text{débit volumique, en m}^3\cdot\text{s}^{-1}$$

$$\boxed{Q_m = \frac{m}{\Delta t}} \qquad \text{débit massique, en kg}\cdot\text{s}^{-1}$$

Les deux sont reliés par la **masse volumique** $\rho$ du fluide :

$$\boxed{Q_m = \rho \times Q_V}$$

avec $\rho$ en $\text{kg}\cdot\text{m}^{-3}$. C'est la même logique que $m = \rho V$, mais
« par seconde ».

> **Exemple.** De l'eau ($\rho = 1000\ \text{kg}\cdot\text{m}^{-3}$) circule à
> $Q_V = 2{,}0\ \text{L}\cdot\text{s}^{-1}$. On convertit :
> $2{,}0\ \text{L}\cdot\text{s}^{-1} = 2{,}0\times 10^{-3}\ \text{m}^3\cdot\text{s}^{-1}$.
> Le débit massique vaut
> $Q_m = 1000 \times 2{,}0\times 10^{-3} = 2{,}0\ \text{kg}\cdot\text{s}^{-1}$.

> ⚠️ **Convertir avant de multiplier.** Un litre vaut $10^{-3}\ \text{m}^3$ ; une minute
> vaut $60\ \text{s}$. Un débit de $30\ \text{L}\cdot\text{min}^{-1}$ n'est pas 30 en SI :
> $30\ \text{L}\cdot\text{min}^{-1} = \dfrac{30\times 10^{-3}}{60} = 5{,}0\times 10^{-4}\ \text{m}^3\cdot\text{s}^{-1}$.

### Bilan de matière et conservation

Dans un procédé, la matière ne se crée ni ne disparaît : c'est le principe de
**conservation de la masse**. Sur un système en **régime permanent** (les stocks
n'évoluent plus), tout ce qui entre ressort :

$$\boxed{\sum Q_{m,\text{entrant}} = \sum Q_{m,\text{sortant}}}$$

Si le système accumule (le stock augmente), on écrit le bilan complet :

$$Q_{m,\text{entrant}} = Q_{m,\text{sortant}} + \frac{\Delta m_{\text{stockée}}}{\Delta t}$$

> **Exemple.** Un mélangeur reçoit deux entrées : $Q_1 = 3{,}0\ \text{kg}\cdot\text{s}^{-1}$
> et $Q_2 = 1{,}5\ \text{kg}\cdot\text{s}^{-1}$. En régime permanent, le débit de sortie vaut
> $Q_s = 3{,}0 + 1{,}5 = 4{,}5\ \text{kg}\cdot\text{s}^{-1}$ : rien ne se perd.

> **Méthode — faire un bilan.** 1) Délimite le système (une cuve, un réacteur). 2) Repère
> **toutes** les entrées et **toutes** les sorties. 3) Mets tous les débits dans la **même
> unité** (kg/s de préférence). 4) Écris entrées = sorties (+ accumulation s'il y en a).

---

## 4. Tableau récapitulatif

| Notion | Formule / clé | Unité |
|---|---|---|
| Chaîne d'information | acquérir → traiter → communiquer | — |
| Écart de régulation | $\varepsilon = \text{consigne} - \text{mesure}$ | (celle de la grandeur) |
| Correcteur TOR | actionneur ON/OFF selon le signe de $\varepsilon$ | — |
| Correcteur proportionnel | $S = k\,\varepsilon$ | — |
| Chaîne d'énergie | alimenter → distribuer → convertir → transmettre | — |
| Puissance | $P = E/\Delta t$ | W |
| Bilan de puissance | $P_{\text{abs}} = P_{\text{utile}} + P_{\text{pertes}}$ | W |
| Rendement | $\eta = P_{\text{utile}}/P_{\text{abs}}$ | sans unité ($\le 1$) |
| Débit volumique | $Q_V = V/\Delta t$ | m³·s⁻¹ |
| Débit massique | $Q_m = m/\Delta t$ | kg·s⁻¹ |
| Lien débits | $Q_m = \rho\,Q_V$ | — |
| Bilan de matière (régime permanent) | $\sum Q_{m,\text{ent}} = \sum Q_{m,\text{sort}}$ | kg·s⁻¹ |

---

## 5. Les erreurs qui coûtent des points

1. **Confondre boucle ouverte et boucle fermée.** Pas de mesure qui revient = pas de
   régulation. Le retour (*feedback*) est la signature de la boucle fermée.
2. **Confondre consigne et mesure.** La consigne est ce qu'on **veut** ; la mesure est ce
   qui **est**. L'écart, c'est consigne moins mesure — dans cet ordre.
3. **Confondre TOR et proportionnel.** En TOR l'actionneur n'a que deux états ; en
   proportionnel son action est **dosée** selon l'écart.
4. **Un rendement supérieur à 1 (ou à 100 %).** Impossible : c'est le signe qu'on a mis la
   puissance utile en dénominateur. L'absorbée est toujours la plus grande.
5. **Oublier de convertir les débits en unités SI.** Des L/min ou des L/s dans une formule
   avec $\rho$ en kg·m⁻³ donnent un résultat faux d'un facteur 1000 ou 60. Passe en m³/s
   **avant** de multiplier.
6. **Écrire $Q_m = Q_V/\rho$.** C'est $Q_m = \rho\,Q_V$ : un fluide dense a un plus **grand**
   débit massique à débit volumique égal, pas l'inverse.
7. **Croire qu'un procédé « perd » de la matière.** La masse se conserve : ce qui entre
   ressort (ou s'accumule). Un bilan qui ne boucle pas signale une entrée ou une sortie
   oubliée.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe terminale — BO spécial n°8 du
25 juillet 2019. Fichier docs/programme-stl-spcl.txt, section « Systèmes et procédés :
flux d'information, d'énergie et de matière (Tale) » :
  - Analyse et contrôle des flux d'information (chaîne, régulation).
  - Conversions et transferts des flux d'énergie (rendement, bilan).
  - Transport et transformation des flux de matière (procédés).
PDF officiel Terminale SPCL :
  https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extraction via WebFetch depuis le PDF officiel — à CONFRONTER au PDF pour les capacités
exigibles détaillées avant publication.

Prérequis « Instrumentation : la chaîne de mesure » (Première STL SPCL) cité comme demandé :
capteur, conditionneur, régulation tout ou rien, hystérésis y sont introduits.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA SPÉCIALITÉ :
- Découpage exact des chaînes : la chaîne d'information « acquérir/traiter/communiquer » et
  la chaîne d'énergie « alimenter/distribuer/convertir/transmettre » suivent le vocabulaire
  STI2D/SysML usuel. Vérifier que c'est bien la nomenclature attendue en SPCL 2019 (le PDF
  peut employer un autre découpage, ex. « stocker »).
- Le correcteur proportionnel : la loi S = k·ε et le vocabulaire « gain » sont-ils
  exigibles, ou seulement l'opposition qualitative TOR / proportionnel ? Le PID
  (intégral, dérivé) est volontairement EXCLU (hors programme à ce niveau).
- Bilan de matière : le régime permanent (entrées = sorties) est présenté comme cas central ;
  le terme d'accumulation est donné en complément — confirmer le niveau d'exigence.
- Vérifier que l'expression du rendement en chaîne (produit des rendements) est attendue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
