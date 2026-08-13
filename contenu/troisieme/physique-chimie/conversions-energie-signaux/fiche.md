---
id: 3e-pc-conversions-energie-signaux
titre: "Conversions d'énergie et signaux pour mesurer"
voie: college
niveau: troisieme
parcours: physique-chimie
matiere: physique-chimie
programme: "Programme de physique-chimie du cycle 4 (BO) — classe de 3e"
duree_lecture_min: 15
prerequis:
  - "Énergie et ses formes, circuit électrique (5e)"
  - "Signaux sonores et lumineux, vitesse d'un signal (5e-4e)"
  - "Puissances de 10 et notation scientifique (3e maths)"
  - "Proportionnalité et grandeurs-produits (cycle 4)"
statut: brouillon
relu_par: null
---

# Conversions d'énergie et signaux pour mesurer

> Deux grandes idées dans ce chapitre. D'abord, l'énergie ne disparaît jamais : elle change
> seulement de forme, et on sait faire les comptes. Ensuite, une onde qui rebondit sur un
> obstacle et revient nous permet de **mesurer une distance sans bouger** — c'est comme ça
> qu'un bateau connaît la profondeur de la mer et qu'on connaît la distance des étoiles.

---

## 1. Convertir l'énergie d'une forme à une autre

### Définition

Un **convertisseur d'énergie** est un objet qui reçoit de l'énergie sous une forme et la
restitue sous une **autre forme**. Il ne fabrique pas d'énergie : il la **transforme**.

> **Exemple.** Une lampe reçoit de l'énergie électrique et la transforme en énergie lumineuse
> (et, hélas, en chaleur).

### Deux convertisseurs à connaître

| Convertisseur | Énergie reçue | Énergie fournie |
|---|---|---|
| **Alternateur** | mécanique (un mouvement) | électrique |
| **Cellule photovoltaïque** | lumineuse (rayonnante) | électrique |

> **Exemple.** Dans une éolienne, le vent fait tourner les pales : cette énergie **mécanique**
> entraîne un **alternateur** qui produit de l'énergie **électrique**. Sur le toit d'une
> maison, les **cellules photovoltaïques** transforment la lumière du Soleil directement en
> électricité.

### Ressources renouvelables ou non

Une ressource d'énergie est **renouvelable** si elle se reconstitue à l'échelle humaine, et
**non renouvelable** si son stock met des millions d'années à se former (donc s'épuise).

| Renouvelables | Non renouvelables |
|---|---|
| Soleil, vent, eau (hydraulique) | Charbon, pétrole, gaz naturel |
| Biomasse, géothermie | Uranium (nucléaire) |

> ⚠️ **Renouvelable ne veut pas dire « propre » ou « gratuit ».** Cela veut dire que la
> ressource **ne s'épuise pas** à notre échelle. Le nucléaire n'émet presque pas de CO₂, mais
> l'uranium **n'est pas renouvelable**.

---

## 2. La chaîne d'énergie

Pour décrire un système, on dessine sa **chaîne d'énergie** : d'où vient l'énergie, ce qui la
transforme, et à quoi elle sert.

$$\text{Source} \;\longrightarrow\; \text{Convertisseur(s)} \;\longrightarrow\; \text{Utilisation}$$

> **Exemple — un barrage hydroélectrique.** L'eau du lac (source) tombe et fait tourner une
> turbine (énergie mécanique), qui entraîne un alternateur (→ énergie électrique) ; cette
> électricité alimente les maisons (utilisation).

À chaque flèche, une partie de l'énergie part sous une forme **non voulue**, presque toujours
de la **chaleur** (énergie thermique) à cause des frottements. On la représente par une flèche
qui « fuit » sur le côté : c'est l'énergie **perdue** (ou dissipée).

---

## 3. Énergie, puissance et durée : E = P × t

### La relation

L'énergie transférée dépend de la **puissance** de l'appareil et de la **durée** de
fonctionnement :

$$\boxed{E = P \times t}$$

| Grandeur | Symbole | Unité (système international) |
|---|---|---|
| Énergie | $E$ | joule (J) |
| Puissance | $P$ | watt (W) |
| Durée | $t$ | seconde (s) |

Le **watt** dit combien de joules sont transférés **chaque seconde** : $1\ \text{W} = 1\ \text{J/s}$.

> **Exemple.** Un radiateur de $P = 1000$ W allumé pendant $t = 60$ s transfère
> $E = 1000 \times 60 = 60\,000$ J $= 6{,}0 \times 10^{4}$ J.

### Le kilowattheure (kWh)

Le joule est minuscule à l'échelle d'une maison. Sur une facture d'électricité, on utilise le
**kilowattheure** : l'énergie d'un appareil de **1 kW** qui fonctionne **1 h**.

$$\boxed{E\,(\text{kWh}) = P\,(\text{kW}) \times t\,(\text{h})}$$

Conversion en joules : $1\ \text{kWh} = 1000\ \text{W} \times 3600\ \text{s} = 3{,}6 \times 10^{6}\ \text{J} = 3{,}6\ \text{MJ}$.

> **Exemple.** Un four de $P = 2{,}0$ kW utilisé pendant $t = 0{,}5$ h consomme
> $E = 2{,}0 \times 0{,}5 = 1{,}0$ kWh, soit $3{,}6 \times 10^{6}$ J.

> ⚠️ **Le piège des unités.** Dans $E = P \times t$, on **ne mélange pas** : soit tout en
> unités SI (W, s → J), soit tout en unités « facture » (kW, h → kWh). Utiliser des watts avec
> des heures, ou des kilowatts avec des secondes, donne un résultat **faux**.

---

## 4. Conservation de l'énergie et bilans

### Le grand principe

**L'énergie ne se crée pas et ne se détruit pas : elle se transforme et se transfère.** La
quantité totale se **conserve**. C'est pour ça qu'on peut faire des « comptes » d'énergie,
comme des comptes d'argent.

### Le bilan d'un convertisseur

Toute l'énergie reçue se retrouve à la sortie, répartie entre l'énergie **utile** (celle qu'on
voulait) et l'énergie **perdue** (dissipée, en général en chaleur) :

$$\boxed{E_{\text{reçue}} = E_{\text{utile}} + E_{\text{perdue}}}$$

> **Exemple.** Une lampe reçoit $100$ J d'énergie électrique et fournit $5$ J d'énergie
> lumineuse utile. Le reste, $E_{\text{perdue}} = 100 - 5 = 95$ J, part en chaleur : voilà
> pourquoi une vieille ampoule chauffe.

---

## 5. Le rendement

### Définition

Le **rendement** compare l'énergie **utile** à l'énergie **reçue**. C'est un nombre **sans
unité** :

$$\boxed{\eta = \frac{E_{\text{utile}}}{E_{\text{reçue}}}}$$

On l'exprime souvent en **pourcentage** (on multiplie par 100). Comme il y a toujours des
pertes, on a **toujours** $\eta < 1$, c'est-à-dire $\eta < 100\,\%$.

> **Exemple.** Pour la lampe précédente : $\eta = \dfrac{5}{100} = 0{,}05 = 5\,\%$. Seuls 5 %
> de l'électricité deviennent de la lumière ; 95 % sont gaspillés en chaleur.

> **Astuce.** On peut aussi calculer le rendement avec les **puissances** :
> $\eta = \dfrac{P_{\text{utile}}}{P_{\text{reçue}}}$. Le résultat est le même, à condition que
> les deux puissances soient dans la **même unité**.

> ⚠️ Un rendement **supérieur à 100 %** est **impossible** : cela reviendrait à fabriquer de
> l'énergie à partir de rien. Si tu trouves $\eta > 1$, tu as inversé la fraction.

---

## 6. Réflexion des ondes et télémétrie

### La réflexion

Quand une onde (son, ultrason, lumière, onde radio) rencontre un **obstacle**, une partie
**repart en arrière** : c'est la **réflexion**. L'onde renvoyée s'appelle un **écho**.

> **Exemple.** Tu cries face à une falaise : le son se réfléchit et te revient quelques
> instants plus tard. Cet écho, c'est le principe de toute la télémétrie.

### Mesurer une distance : la télémétrie

La **télémétrie** consiste à mesurer une distance à partir de la **durée d'un aller-retour** de
l'onde. On mesure le temps $\Delta t$ entre l'émission et le retour de l'écho.

Pendant $\Delta t$, l'onde parcourt la distance $d = v \times \Delta t$. Mais ce trajet
comprend **l'aller ET le retour** : la distance jusqu'à l'obstacle est donc **la moitié** :

$$\boxed{d_{\text{obstacle}} = \frac{v \times \Delta t}{2}}$$

| Technique | Onde utilisée | Milieu | Vitesse approximative |
|---|---|---|---|
| **Écho** | son | air | $340$ m·s⁻¹ |
| **Sonar** | ultrasons | eau (mer) | $1500$ m·s⁻¹ |
| **Échographie** | ultrasons | corps humain | $\approx 1540$ m·s⁻¹ |
| **Radar** | ondes électromagnétiques | air / vide | $3{,}0 \times 10^{8}$ m·s⁻¹ |

> **Exemple — le sonar.** Un bateau émet un ultrason vers le fond. L'écho revient
> $\Delta t = 0{,}2$ s plus tard, dans l'eau ($v = 1500$ m·s⁻¹). Le son parcourt en tout
> $d = 1500 \times 0{,}2 = 300$ m (aller-retour). La profondeur est donc
> $h = \dfrac{300}{2} = 150$ m.

> ⚠️ **Le piège de l'aller-retour.** L'oubli du facteur $\div 2$ est l'erreur numéro un : on
> annoncerait alors une profondeur **double** de la vraie. La durée mesurée correspond toujours
> à **deux** trajets.

---

## 7. Voir loin, c'est voir dans le passé

### L'année-lumière

Les distances entre les étoiles sont gigantesques : le mètre et le kilomètre ne suffisent plus.
On utilise l'**année-lumière** (a.l.), la **distance** parcourue par la lumière **en un an**
dans le vide, où $c = 3{,}0 \times 10^{8}$ m·s⁻¹.

$$1\ \text{a.l.} = c \times t_{\text{1 an}} = 3{,}0 \times 10^{8} \times (365{,}25 \times 24 \times 3600) \approx 9{,}5 \times 10^{15}\ \text{m}$$

> ⚠️ **L'année-lumière est une DISTANCE, pas une durée**, malgré le mot « année » dans son nom.
> C'est une longueur, elle se mesure en mètres.

### « Voir dans le passé »

La lumière voyage vite, mais **pas instantanément**. Quand tu observes une étoile à
$100$ années-lumière, sa lumière a mis **100 ans** à t'atteindre : tu la vois **telle qu'elle
était il y a 100 ans**.

> **Exemple.** La lumière du Soleil met environ $8$ minutes à nous parvenir. Tu vois donc
> toujours le Soleil tel qu'il était **8 minutes plus tôt**. Plus un astre est loin, plus on
> le voit « vieux » : observer le ciel lointain, c'est regarder le **passé** de l'Univers.

---

## 8. À retenir absolument

| | |
|---|---|
| Convertisseur | transforme une forme d'énergie en une autre |
| Alternateur | mécanique → électrique |
| Cellule photovoltaïque | lumineuse → électrique |
| Énergie–puissance–durée | $E = P \times t$ (J = W × s) |
| Kilowattheure | $1\ \text{kWh} = 3{,}6 \times 10^{6}$ J |
| Conservation | $E_{\text{reçue}} = E_{\text{utile}} + E_{\text{perdue}}$ |
| Rendement | $\eta = \dfrac{E_{\text{utile}}}{E_{\text{reçue}}} < 1$ |
| Télémétrie | $d_{\text{obstacle}} = \dfrac{v \times \Delta t}{2}$ |
| Année-lumière | distance, $\approx 9{,}5 \times 10^{15}$ m |

---

## 9. Les erreurs qui coûtent des points

1. **Croire qu'un convertisseur « crée » de l'énergie.** Il ne fait que la **transformer** ;
   l'énergie totale se conserve.
2. **Mélanger les unités dans $E = P \times t$.** W avec s donne des joules ; kW avec h donne
   des kWh. Jamais W avec h.
3. **Oublier le facteur $\div 2$ en télémétrie.** La durée mesurée est celle d'un
   **aller-retour** : la distance à l'obstacle est la moitié de $v \times \Delta t$.
4. **Annoncer un rendement supérieur à 100 %.** Impossible : on a inversé la fraction, ou
   confondu énergie utile et énergie reçue.
5. **Prendre l'année-lumière pour une durée.** C'est une **distance** (en mètres).
6. **Confondre « renouvelable » et « sans pollution ».** Renouvelable = qui ne s'épuise pas ;
   l'uranium et le pétrole, eux, ne se renouvellent pas.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme de physique-chimie du cycle 4 (BO), classe de 3e, thème
« Conversions d'énergie et signaux pour mesurer ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Conversions d'énergie et signaux pour mesurer (3e) » (lignes 110-114), extraite du
programme officiel eduscol/education.gouv.fr — À CONFRONTER AU PDF OFFICIEL avant publication.

Points programme couverts :
- Convertisseurs (alternateur, cellule photovoltaïque) ; ressources renouvelables/non → §1
- Chaîne d'énergie ; E = P × t ; conservation et bilans ; rendement → §2-5
- Réflexion des ondes ; télémétrie (écho, sonar, échographie, radar) → §6
- Année-lumière ; « voir loin, c'est voir dans le passé » → §7

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le calcul complet de l'année-lumière (9,5 × 10^15 m) est-il exigible en 3e, ou seulement
  l'idée que c'est une grande distance ? Je l'ai donné en ordre de grandeur.
- Le rendement doit-il être introduit avec les puissances ou seulement les énergies au cycle 4 ?
  J'ai mis l'énergie en principal, la puissance en astuce.
- Vérifier la valeur de célérité des ultrasons dans les tissus (≈ 1540 m/s) retenue localement ;
  340 m/s (air) et 1500 m/s (eau de mer) et c = 3,0×10^8 m/s sont standards.
- Confirmer que le facteur aller-retour (÷2) est attendu explicitement en 3e (radar/sonar).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
