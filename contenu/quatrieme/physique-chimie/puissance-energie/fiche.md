---
id: 4e-pc-puissance-energie
titre: "Puissance et énergie"
voie: college
niveau: quatrieme
parcours: physique-chimie
matiere: physique-chimie
programme: "Programme de physique-chimie du cycle 4 (BO) — classe de 4e"
duree_lecture_min: 12
prerequis:
  - L'énergie se mesure en joule ; stocks et transferts (5e)
  - Tension (volt) et intensité (ampère) dans un circuit (5e)
statut: brouillon
relu_par: null
---

# Puissance et énergie

> Une bouilloire et un chargeur de téléphone reçoivent tous les deux de l'électricité.
> Pourtant la bouilloire chauffe un litre d'eau en trois minutes, quand le chargeur mettrait
> des heures. Ce qui les sépare, ce n'est pas l'**énergie** : c'est la **vitesse** à laquelle
> elle est transférée. Cette vitesse, on l'appelle la **puissance**.

---

## 1. Les modes de transfert d'énergie

L'énergie ne disparaît jamais et n'apparaît jamais toute seule : elle est **transférée** d'un
objet (ou système) à un autre. Il existe **quatre modes** de transfert au programme.

| Mode de transfert | Comment l'énergie voyage | Exemple |
|---|---|---|
| **Électrique** | par un courant électrique dans des fils | une pile qui alimente une lampe |
| **Thermique** | par la chaleur, du chaud vers le froid | un radiateur qui réchauffe une pièce |
| **Rayonnement** | par la lumière ou les ondes, sans contact | le Soleil qui chauffe ta peau |
| **Mécanique** | par une force qui agit, un mouvement | une main qui remonte un seau au bout d'une corde |

> **Exemple.** Une lampe branchée sur une pile reçoit de l'énergie par transfert
> **électrique** (les fils), puis la redonne à la pièce par **rayonnement** (la lumière) et par
> voie **thermique** (elle chauffe). Un même objet peut donc recevoir et donner de l'énergie par
> des modes différents.

> ⚠️ **Ne confonds pas le mode et l'énergie.** « Électrique », « thermique », « mécanique »
> décrivent **comment** l'énergie passe, pas une sorte d'énergie à part. La grandeur transférée
> reste l'**énergie**, toujours mesurée en **joule**.

---

## 2. L'énergie et son unité

L'**énergie** mesure la capacité à produire un changement : chauffer, éclairer, mettre en
mouvement. Son unité dans le système international est le **joule**, de symbole **J**.

Le joule est une **petite** unité. Pour les gros transferts, on utilise ses multiples :

| Unité | Symbole | Valeur en joules |
|---|---|---|
| kilojoule | kJ | $1\ \text{kJ} = 10^{3}\ \text{J} = 1000\ \text{J}$ |
| mégajoule | MJ | $1\ \text{MJ} = 10^{6}\ \text{J}$ |
| kilowattheure | kWh | $1\ \text{kWh} = 3\,600\,000\ \text{J} = 3{,}6 \times 10^{6}\ \text{J}$ |

Le **kilowattheure** (kWh) est l'unité qui apparaît sur ta facture d'électricité. On verra plus
bas d'où il vient.

---

## 3. La puissance : une énergie par seconde

### Définition

La **puissance** indique **à quelle vitesse** l'énergie est transférée : c'est l'énergie
transférée **pendant une seconde**. Elle se mesure en **watt**, de symbole **W**.

$$\boxed{P = \dfrac{E}{t}}$$

| Grandeur | Symbole | Unité | Symbole d'unité |
|---|---|---|---|
| Puissance | $P$ | watt | W |
| Énergie | $E$ | joule | J |
| Durée | $t$ | seconde | s |

Autrement dit : **1 watt = 1 joule transféré chaque seconde**. Une puissance de $60$ W
signifie que l'appareil transfère $60$ J d'énergie à chaque seconde qui passe.

> **Exemple.** Une lampe transfère $E = 1200$ J en $t = 20$ s.
> Sa puissance vaut $P = \dfrac{E}{t} = \dfrac{1200}{20} = 60$ W.

### Retrouver l'énergie à partir de la puissance

La relation $P = \dfrac{E}{t}$ peut se retourner. Si tu connais la puissance et la durée,
l'énergie transférée vaut :

$$\boxed{E = P \times t}$$

> **Exemple.** Un radiateur de puissance $P = 1000$ W fonctionne pendant $t = 30$ s.
> Il transfère $E = P \times t = 1000 \times 30 = 30\,000$ J $= 30$ kJ.

> ⚠️ **Dans $P = \dfrac{E}{t}$, la durée est en SECONDES.** Si l'énoncé donne des minutes ou des
> heures, convertis d'abord : $1\ \text{min} = 60\ \text{s}$, $1\ \text{h} = 3600\ \text{s}$.
> Oublier cette conversion est l'erreur numéro un du chapitre.

### D'où vient le kilowattheure ?

Reprends $E = P \times t$ mais garde la puissance en **kilowatts** et la durée en **heures** :
l'énergie sort alors en **kilowattheures**. Un appareil de $2$ kW pendant $3$ h consomme
$E = 2 \times 3 = 6$ kWh. C'est pratique pour les factures, mais **ce n'est pas l'unité SI** :
pour un calcul en joules, il faut repasser en watts et en secondes.

---

## 4. La puissance électrique

Pour un appareil branché sur le courant, on peut calculer sa puissance directement à partir de
la **tension** $U$ (en volts) et de l'**intensité** $I$ (en ampères) — deux grandeurs vues en 5e.

$$\boxed{P = U \times I}$$

| Grandeur | Symbole | Unité | Symbole d'unité |
|---|---|---|---|
| Puissance | $P$ | watt | W |
| Tension | $U$ | volt | V |
| Intensité | $I$ | ampère | A |

> **Exemple.** Une lampe est soumise à une tension $U = 230$ V et parcourue par une intensité
> $I = 0{,}26$ A. Sa puissance vaut $P = U \times I = 230 \times 0{,}26 = 59{,}8 \approx 60$ W.

> ⚠️ **L'intensité est souvent donnée en milliampères (mA).** Convertis en ampères avant de
> multiplier : $1\ \text{mA} = 0{,}001\ \text{A}$, donc $250\ \text{mA} = 0{,}250\ \text{A}$.
> Multiplier par $250$ au lieu de $0{,}250$ donne un résultat mille fois trop grand.

### Retrouver l'intensité à partir de la puissance

La relation se retourne aussi : $I = \dfrac{P}{U}$. C'est utile pour savoir si un appareil
risque de faire disjoncter une prise.

> **Exemple.** Un grille-pain de puissance $P = 1150$ W sur une prise à $U = 230$ V est parcouru
> par $I = \dfrac{P}{U} = \dfrac{1150}{230} = 5{,}0$ A.

---

## 5. La puissance du générateur

Dans un circuit, le **générateur** (pile, batterie, prise) est la source d'énergie. Chaque
**dipôle** branché (lampe, moteur, résistance…) reçoit une part de cette puissance.

**La puissance fournie par le générateur est égale à la somme des puissances reçues par tous les
dipôles du circuit.**

$$\boxed{P_{\text{générateur}} = P_1 + P_2 + P_3 + \dots}$$

C'est une traduction de la **conservation de l'énergie** : le générateur ne peut pas fournir
moins que ce que les dipôles consomment, ni plus.

> **Exemple.** Un générateur alimente une lampe de $P_1 = 40$ W et un moteur de $P_2 = 25$ W.
> Il fournit donc $P_{\text{générateur}} = 40 + 25 = 65$ W. Si on ajoute un troisième dipôle, la
> puissance du générateur augmente d'autant.

> ⚠️ **On additionne des puissances, jamais des tensions et des intensités au hasard.** Chaque
> dipôle a sa propre puissance $P = U \times I$ ; c'est cette puissance-là que l'on additionne.

---

## 6. Méthode : résoudre un problème de puissance et d'énergie

1. **Repère la grandeur cherchée** : une puissance $P$, une énergie $E$ ou une durée $t$ ?
2. **Choisis la bonne relation** : $P = \dfrac{E}{t}$ (ou $E = P \times t$) pour lier énergie et
   temps ; $P = U \times I$ pour un appareil électrique.
3. **Convertis toutes les unités** avant de calculer : durée en **secondes**, intensité en
   **ampères**, énergie en **joules**.
4. **Calcule**, puis **écris l'unité** du résultat (W, J ou s).
5. **Vérifie l'ordre de grandeur** : une lampe fait quelques dizaines de watts, une bouilloire
   quelques milliers. Un résultat à $60\,000$ W pour une lampe doit t'alerter.

---

## 7. Tableau récapitulatif

| Ce qu'il faut savoir | Formule / valeur |
|---|---|
| Modes de transfert | électrique, thermique, rayonnement, mécanique |
| Énergie | en **joule** (J) |
| Puissance | en **watt** (W), = énergie par seconde |
| Puissance et énergie | $P = \dfrac{E}{t}$ et $E = P \times t$ |
| Durée dans $P = E/t$ | en **secondes** ($1$ h $= 3600$ s) |
| Puissance électrique | $P = U \times I$ (W, V, A) |
| Générateur | $P_{\text{gén}} = P_1 + P_2 + \dots$ |
| Kilowattheure | $1$ kWh $= 3{,}6 \times 10^{6}$ J |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier de convertir la durée en secondes** dans $P = \dfrac{E}{t}$. Des minutes ou des
   heures faussent tout le calcul.
2. **Laisser l'intensité en milliampères** dans $P = U \times I$. Il faut des ampères : $1$ mA
   $= 0{,}001$ A.
3. **Confondre puissance et énergie.** La puissance (W) est une énergie **par seconde** ;
   l'énergie (J), c'est le total transféré. Ce ne sont ni les mêmes unités ni la même chose.
4. **Confondre le mode de transfert et une « sorte d'énergie ».** « Thermique » ou « mécanique »
   décrivent le **chemin** de l'énergie, pas une grandeur différente : l'énergie reste en joules.
5. **Oublier une unité au résultat.** Un nombre sans W, J ou s ne veut rien dire en physique.
6. **Croire que le générateur fournit une puissance fixe.** Il fournit la **somme** des
   puissances des dipôles : ajouter un appareil augmente la puissance fournie.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du cycle 4 (BO), classe de 4e, section
« Puissance et énergie (4e) » du fichier docs/programme-college-physique-chimie-cycle4.txt
(lignes 78-81). Attendus retenus :
  - Modes de transfert (électrique, thermique, rayonnement, mécanique).
  - Relation P = E/t.
  - Puissance électrique P = U × I ; puissance du générateur = somme des puissances des dipôles.
Le texte de référence utilisé est l'extrait fourni dans le dépôt ; à confronter au PDF officiel
du BO (programme de cycle 4) par un professeur avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La relation E = P × t (retournement de P = E/t) est ici présentée en 4e ; le programme la
  situe explicitement en 3e (chaîne d'énergie, ligne 112). Je l'ai incluse comme simple
  réécriture de P = E/t car elle est indispensable aux exercices, mais à valider quant au niveau.
- Le kilowattheure et sa conversion en joules : présenté en culture (facture) ; vérifier s'il
  est exigible en 4e ou attendu plus tard.
- La relation P = U × I est-elle attendue seulement en courant continu, ou aussi évoquée en
  alternatif (secteur 230 V) ? J'ai utilisé 230 V comme valeur réaliste sans entrer dans
  l'alternatif ; à trancher.
- Les valeurs numériques (lampe 60 W, radiateur 1000 W, grille-pain 1150 W) sont réalistes mais
  arbitraires : aucune n'est imposée par le programme.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
