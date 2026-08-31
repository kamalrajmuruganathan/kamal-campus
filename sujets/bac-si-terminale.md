---
id: bac-si-terminale
titre: "Bac blanc SI — Terminale (entraînement)"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : un **portail coulissant motorisé** de maison individuelle. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Un portail coulissant ferme l'entrée d'une propriété. Un moteur électrique à courant continu entraîne, par l'intermédiaire d'un réducteur puis d'un pignon, une **crémaillère** fixée sur le portail, ce qui le déplace en translation horizontale. Une carte électronique commande le moteur ; deux capteurs de fin de course (position « ouvert » et « fermé ») et une cellule photoélectrique (détection d'obstacle) renseignent la commande. L'utilisateur agit par une télécommande radio.

**Données constructeur :**

- Masse du portail : $M = 150$ kg.
- Course à parcourir (ouverture complète) : $L = 4{,}0$ m.
- Vitesse de déplacement du portail visée : $v = 0{,}20$ m·s⁻¹.
- Rayon primitif du pignon d'entraînement : $r = 40$ mm $= 0{,}040$ m.
- Rapport de réduction du réducteur : $k = \dfrac{\omega_{\text{pignon}}}{\omega_{\text{moteur}}} = \dfrac{1}{30}$.
- Rendement global de la chaîne mécanique (réducteur + pignon-crémaillère) : $\eta = 0{,}75$.
- Force résistante au déplacement (frottements de roulement + guidage), ramenée à la crémaillère : $F_r = 90$ N (en régime établi, portail sur terrain horizontal).
- Alimentation : batterie $24$ V ; le moteur est un MCC de rendement $\eta_m = 0{,}80$.
- Accélération de la pesanteur : $g = 9{,}81$ m·s⁻².

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie** du portail en plaçant, dans l'ordre, les blocs fonctionnels et le composant associé à chacun. On choisira parmi : *moteur à courant continu, batterie 24 V, réducteur + pignon-crémaillère, portail en translation, carte de puissance (variateur)*.

```
[ ALIMENTER ] → [ DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE ] → ACTION (déplacer le portail)
```

**Question A.2 (1 point).** Citer les grandeurs d'entrée et de sortie du bloc **CONVERTIR** en précisant leur nature (électrique / mécanique).

**Question A.3 (2 points).** La **chaîne d'information** comporte les capteurs de fin de course, la cellule photoélectrique, la carte de commande et la télécommande. Associer chacun de ces éléments à l'une des fonctions *ACQUÉRIR*, *TRAITER*, *COMMUNIQUER*. Expliquer le rôle de la cellule photoélectrique du point de vue de la sécurité.

---

## Partie B — Étude mécanique de la chaîne d'énergie (9 points)

On étudie le régime **établi** (vitesse constante $v = 0{,}20$ m·s⁻¹), portail sur terrain horizontal.

**Question B.1 (2 points).** Le portail se déplace à vitesse constante. En appliquant le principe fondamental de la dynamique (ou le principe d'inertie) au portail en translation, montrer que l'effort $F_p$ que le pignon-crémaillère doit exercer sur le portail est égal à la force résistante $F_r$. Donner sa valeur.

**Question B.2 (2 points).** Calculer la **puissance mécanique** $P_p$ transmise au portail en régime établi. On rappelle $P = F \cdot v$.

**Question B.3 (2 points).** En tenant compte du rendement mécanique $\eta = 0{,}75$, calculer la puissance mécanique $P_{\text{mot}}$ que le moteur doit fournir en sortie d'arbre.

**Question B.4 (1 point).** Déterminer la **vitesse de rotation** du pignon $\omega_{\text{pignon}}$ (en rad·s⁻¹) sachant que la crémaillère se déplace à la vitesse $v = r \cdot \omega_{\text{pignon}}$. En déduire la vitesse de rotation du moteur $\omega_{\text{mot}}$ (en rad·s⁻¹), puis en tr·min⁻¹.

**Question B.5 (2 points).** En déduire le **couple** $C_{\text{mot}}$ que le moteur doit développer sur son arbre ($P_{\text{mot}} = C_{\text{mot}} \cdot \omega_{\text{mot}}$).

---

## Partie C — Bilan énergétique et temps de manœuvre (6 points)

**Question C.1 (2 points).** En tenant compte du rendement du moteur $\eta_m = 0{,}80$, calculer la **puissance électrique** $P_{\text{elec}}$ absorbée par le moteur en régime établi, puis le **courant** $I$ appelé sur la batterie $24$ V.

**Question C.2 (2 points).** Calculer la **durée** $t$ d'une ouverture complète (course $L = 4{,}0$ m) en régime établi. En déduire l'**énergie électrique** $E$ (en joules puis en watt-heures) consommée pour une ouverture.

**Question C.3 (2 points).** Le rendement **global** du système (de la batterie jusqu'au portail) est le produit des rendements de la chaîne. Le calculer et commenter : où se perd principalement l'énergie ?

---

## Corrigé

### Partie A

**A.1.** De l'alimentation vers l'action :

```
[ ALIMENTER ]   → [ DISTRIBUER ]        → [ CONVERTIR ]          → [ TRANSMETTRE ]                  → ACTION
  Batterie 24 V    Carte de puissance      Moteur à courant         Réducteur + pignon-crémaillère     Portail en
                   (variateur)             continu                                                     translation
```

**A.2.** Le bloc **CONVERTIR** (le moteur) reçoit en entrée une **énergie électrique** (tension $U$, courant $I$) et fournit en sortie une **énergie mécanique** de rotation (couple $C_{\text{mot}}$, vitesse angulaire $\omega_{\text{mot}}$).

**A.3.** *ACQUÉRIR* : les deux capteurs de fin de course et la cellule photoélectrique (ils captent l'état physique du système). *TRAITER* : la carte de commande (elle décide d'alimenter, d'arrêter ou d'inverser le moteur). *COMMUNIQUER* : la liaison radio de la télécommande (transmission de l'ordre utilisateur ; on accepte aussi les signaux vers la carte de puissance). La **cellule photoélectrique** détecte la présence d'un obstacle (personne, véhicule) dans le passage : en cas de coupure du faisceau, la commande stoppe puis rouvre le portail, ce qui assure la **sécurité des personnes** (fonction anti-écrasement).

### Partie B

**B.1.** Le portail se déplace à **vitesse constante** : son accélération est nulle, donc la somme des forces extérieures horizontales est nulle (principe d'inertie). Horizontalement s'exercent l'effort moteur $F_p$ (pignon → portail) et la force résistante $F_r$ (opposée au mouvement) : $F_p - F_r = 0$, d'où

$$F_p = F_r = 90 \text{ N}.$$

**B.2.** $P_p = F_p \cdot v = 90 \times 0{,}20 = 18$ W.

**B.3.** Le rendement mécanique relie la puissance utile (au portail) à la puissance fournie par le moteur : $\eta = \dfrac{P_p}{P_{\text{mot}}}$, donc

$$P_{\text{mot}} = \dfrac{P_p}{\eta} = \dfrac{18}{0{,}75} = 24 \text{ W}.$$

**B.4.** Vitesse du pignon : $\omega_{\text{pignon}} = \dfrac{v}{r} = \dfrac{0{,}20}{0{,}040} = 5{,}0$ rad·s⁻¹.
Le réducteur donne $\omega_{\text{pignon}} = k \cdot \omega_{\text{mot}}$ avec $k = 1/30$, donc

$$\omega_{\text{mot}} = \dfrac{\omega_{\text{pignon}}}{k} = 30 \times 5{,}0 = 150 \text{ rad·s}^{-1}.$$

En tours par minute : $N = \dfrac{60 \, \omega_{\text{mot}}}{2\pi} = \dfrac{60 \times 150}{2\pi} \approx 1{,}4 \times 10^{3}$ tr·min⁻¹ ($\approx 1432$ tr·min⁻¹).

**B.5.** $C_{\text{mot}} = \dfrac{P_{\text{mot}}}{\omega_{\text{mot}}} = \dfrac{24}{150} = 0{,}16$ N·m.

### Partie C

**C.1.** Rendement du moteur : $\eta_m = \dfrac{P_{\text{mot}}}{P_{\text{elec}}}$, donc

$$P_{\text{elec}} = \dfrac{P_{\text{mot}}}{\eta_m} = \dfrac{24}{0{,}80} = 30 \text{ W}.$$

Courant appelé : $I = \dfrac{P_{\text{elec}}}{U} = \dfrac{30}{24} = 1{,}25$ A.

**C.2.** Durée : $t = \dfrac{L}{v} = \dfrac{4{,}0}{0{,}20} = 20$ s.
Énergie : $E = P_{\text{elec}} \cdot t = 30 \times 20 = 600$ J.
En watt-heures : $E = \dfrac{600}{3600} \approx 0{,}17$ Wh (soit environ $1{,}7 \times 10^{-1}$ Wh) : une manœuvre est très peu énergivore.

**C.3.** Le rendement global vaut le produit des rendements de la chaîne :

$$\eta_{\text{global}} = \eta_m \times \eta = 0{,}80 \times 0{,}75 = 0{,}60 = 60 \ \%.$$

On peut le vérifier directement : $\dfrac{P_p}{P_{\text{elec}}} = \dfrac{18}{30} = 0{,}60$. Sur les $30$ W absorbés, $18$ W servent réellement à déplacer le portail : les $12$ W perdus (40 %) le sont surtout dans le **moteur** (pertes Joule et magnétiques, $6$ W) et dans la **transmission mécanique** (frottements du réducteur et du couple pignon-crémaillère, $6$ W). La chaîne mécanique et le moteur pèsent ici à parts comparables ; améliorer le rendement passerait par un réducteur mieux lubrifié et un moteur de meilleur rendement.
