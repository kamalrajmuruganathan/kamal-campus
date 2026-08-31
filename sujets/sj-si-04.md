---
id: sj-si-04
titre: "Sujet SI — Vélo à assistance électrique : bilan de puissance en côte"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : un **vélo à assistance électrique (VAE)** en montée. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Un vélo à assistance électrique aide le cycliste à pédaler. Un **moteur sans balais (BLDC)** logé dans le moyeu de la roue ajoute un couple à celui fourni par les jambes. Un **capteur de couple/cadence** au pédalier détecte l'effort du cycliste ; un **capteur de vitesse** à la roue permet de **couper l'assistance à 25 km·h⁻¹**, comme l'impose la réglementation. Un **contrôleur** module le courant envoyé au moteur depuis une **batterie 36 V**.

**Données (montée à vitesse stabilisée) :**

- Masse totale (vélo + cycliste + bagages) : $M = 90$ kg.
- Pente de la route : 5 % (on prendra $\sin\alpha \approx 0{,}050$).
- Vitesse stabilisée en montée : $v = 18$ km·h⁻¹ $= 5{,}0$ m·s⁻¹.
- Somme des résistances au roulement et à l'air à cette vitesse : $F_{\text{rés}} = 25$ N.
- Puissance mécanique fournie par le cycliste : $P_{\text{cycliste}} = 150$ W.
- Rendement de la chaîne électrique (contrôleur + moteur) : $\eta = 0{,}80$.
- Batterie : tension $U = 36$ V, capacité $Q = 14$ A·h.
- Accélération de la pesanteur : $g = 9{,}81$ m·s⁻².

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie** de l'assistance, en plaçant un composant à chaque bloc, choisi parmi : *batterie 36 V, contrôleur, moteur BLDC de moyeu, roue arrière*.

```
[ ALIMENTER ] → [ DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE ] → ACTION (faire avancer le vélo)
```

**Question A.2 (1 point).** Sur un VAE, deux « sources » de puissance mécanique s'additionnent à la roue. Les nommer.

**Question A.3 (2 points).** La **chaîne d'information** comporte le capteur de couple/cadence au pédalier, le capteur de vitesse à la roue, l'écran de commande et le contrôleur. Associer chaque élément à *ACQUÉRIR*, *TRAITER* ou *COMMUNIQUER*. Expliquer le rôle du capteur de vitesse vis-à-vis de la **réglementation** (coupure à 25 km·h⁻¹).

---

## Partie B — Bilan des forces et des puissances en côte (8 points)

On étudie la montée à **vitesse constante** $v = 5{,}0$ m·s⁻¹.

**Question B.1 (2 points).** Faire le bilan des forces s'exerçant sur l'ensemble {vélo + cycliste} dans la direction du mouvement. Calculer la **composante du poids** le long de la pente : $F_{\text{pente}} = M g \sin\alpha$.

**Question B.2 (2 points).** À vitesse constante, la force motrice totale (jambes + moteur, ramenée à la roue) équilibre les résistances. Montrer que cette force motrice vaut $F = F_{\text{pente}} + F_{\text{rés}}$ et donner sa valeur.

**Question B.3 (2 points).** Calculer la **puissance mécanique totale** $P_{\text{tot}} = F \cdot v$ nécessaire pour avancer.

**Question B.4 (2 points).** Le cycliste fournit $P_{\text{cycliste}} = 150$ W. En déduire la **puissance mécanique** $P_{\text{assist}}$ que le moteur doit apporter à la roue.

---

## Partie C — Puissance électrique et autonomie (7 points)

**Question C.1 (2 points).** En tenant compte du rendement $\eta = 0{,}80$ de la chaîne électrique, calculer la **puissance électrique** $P_{\text{elec}}$ absorbée par le moteur, puis le **courant** $I$ appelé sur la batterie 36 V.

**Question C.2 (3 points).** Calculer l'**énergie** stockée dans la batterie (en W·h). En supposant que tout le trajet se fasse dans ces conditions de montée, en déduire l'**autonomie** en durée ($t = E / P_{\text{elec}}$) puis en **distance** parcourue.

**Question C.3 (2 points).** Sur le plat, à 30 km·h⁻¹, le capteur de vitesse indique que la limite de 25 km·h⁻¹ est dépassée. Qu'ordonne le contrôleur ? Le cycliste peut-il continuer à rouler plus vite ? Justifier en termes de sécurité et de réglementation.

---

## Corrigé

### Partie A

**A.1.**

```
[ ALIMENTER ]  → [ DISTRIBUER ] → [ CONVERTIR ]        → [ TRANSMETTRE ] → ACTION
  Batterie 36 V    Contrôleur       Moteur BLDC de moyeu   Roue arrière      Faire avancer le vélo
```

**A.2.** À la roue s'additionnent la **puissance musculaire du cycliste** (via le pédalier et la chaîne) et la **puissance du moteur électrique** (dans le moyeu). Le VAE est un système à **deux sources d'énergie** complémentaires.

**A.3.** *ACQUÉRIR* : capteur de couple/cadence au pédalier et capteur de vitesse à la roue. *TRAITER* : contrôleur. *COMMUNIQUER* : écran de commande (choix du niveau d'assistance, information au cycliste). Le **capteur de vitesse** permet au contrôleur de **couper l'assistance dès 25 km·h⁻¹** : c'est une obligation légale (au-delà, l'engin serait requalifié en cyclomoteur). Il garantit que le moteur n'aide qu'en dessous de la vitesse réglementaire.

### Partie B

**B.1.** Forces dans l'axe du mouvement : composante du poids $F_{\text{pente}}$ (vers le bas de la pente), résistances $F_{\text{rés}}$ (opposées au mouvement), force motrice $F$ (vers le haut de la pente).

$$F_{\text{pente}} = M g \sin\alpha = 90 \times 9{,}81 \times 0{,}050 = 44 \text{ N}.$$

**B.2.** À vitesse constante, l'accélération est nulle : $F - F_{\text{pente}} - F_{\text{rés}} = 0$, donc

$$F = F_{\text{pente}} + F_{\text{rés}} = 44{,}1 + 25 = 69 \text{ N}.$$

**B.3.** $P_{\text{tot}} = F \cdot v = 69{,}1 \times 5{,}0 = 3{,}5 \times 10^{2}$ W $\approx 346$ W.

**B.4.** $P_{\text{assist}} = P_{\text{tot}} - P_{\text{cycliste}} = 345{,}7 - 150 = 196$ W. Le moteur apporte environ 196 W à la roue, soit un peu plus que le cycliste.

### Partie C

**C.1.** $P_{\text{elec}} = \dfrac{P_{\text{assist}}}{\eta} = \dfrac{195{,}7}{0{,}80} = 245$ W.
Courant : $I = \dfrac{P_{\text{elec}}}{U} = \dfrac{244{,}7}{36} = 6{,}8$ A.

**C.2.** Énergie : $E = U \cdot Q = 36 \times 14 = 504$ W·h.
Durée : $t = \dfrac{E}{P_{\text{elec}}} = \dfrac{504}{244{,}7} = 2{,}06$ h.
Distance : $d = v \cdot t = 5{,}0 \times 2{,}06 \times 3600$ m $= 3{,}7 \times 10^{4}$ m $\approx 37$ km (si toute la sortie se faisait dans ces conditions de montée soutenue ; sur le plat, l'assistance consomme beaucoup moins et l'autonomie réelle est nettement supérieure).

**C.3.** Le capteur de vitesse mesure 30 km·h⁻¹ > 25 km·h⁻¹ : le contrôleur **coupe l'assistance électrique** (le moteur ne fournit plus de couple). Le cycliste **peut** continuer à rouler plus vite, mais **uniquement à la force des jambes** : au-delà de 25 km·h⁻¹, la loi interdit toute aide du moteur pour que le VAE reste assimilé à un vélo.
