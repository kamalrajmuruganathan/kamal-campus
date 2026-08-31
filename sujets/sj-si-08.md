---
id: sj-si-08
titre: "Sujet SI — Barrière de parking : flexion de la lisse et motorisation"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : une **barrière levante automatique** de parking. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

À l'entrée d'un parking, une **barrière levante** contrôle l'accès. Un **moteur à courant continu** entraîne, via un **réducteur**, un axe qui fait pivoter la **lisse** (le bras horizontal) de la position fermée (horizontale) à la position ouverte (verticale). Une **boucle magnétique** au sol détecte les véhicules ; un **capteur d'obstacle** et une **cellule** assurent la sécurité ; la vitesse du moteur est **asservie** pour un démarrage et un arrêt en douceur.

**Données constructeur :**

- Lisse : longueur $L = 3{,}0$ m, tube aluminium de masse linéique $\mu = 1{,}5$ kg·m⁻¹ (masse totale $4{,}5$ kg), répartie uniformément.
- Section du tube : diamètre extérieur $D = 80$ mm, diamètre intérieur $d = 74$ mm.
- Aluminium : limite élastique $R_e = 250$ MPa, module d'Young $E = 70$ GPa.
- Motorisation : moteur tournant à $N_{\text{mot}} = 1500$ tr·min⁻¹ ; on veut ouvrir la lisse de $90°$ ($\pi/2$ rad) en $t_{\text{ouv}} = 3{,}0$ s.
- Rendement du réducteur : $\eta = 0{,}70$.
- Asservissement de vitesse : boucle fermée assimilée à un premier ordre de constante de temps $\tau = 0{,}10$ s ; correcteur proportionnel de gain $K_p = 3$ sur un moteur de gain $K = 15$ rad·s⁻¹·V⁻¹, retour unitaire.
- Accélération de la pesanteur : $g = 9{,}81$ m·s⁻².
- Moment quadratique d'un tube : $I = \dfrac{\pi (D^4 - d^4)}{64}$ ; module de flexion $\dfrac{I}{v}$ avec $v = \dfrac{D}{2}$.

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie**, en plaçant un composant à chaque bloc, choisi parmi : *alimentation + carte de puissance, moteur à courant continu, réducteur + axe, lisse en rotation*.

```
[ ALIMENTER / DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE ] → ACTION (lever / baisser la lisse)
```

**Question A.2 (1 point).** Préciser la nature du mouvement de sortie du bloc **TRANSMETTRE** (translation ou rotation) et la grandeur qui la caractérise.

**Question A.3 (2 points).** La **chaîne d'information** comporte la boucle magnétique au sol, le capteur d'obstacle, la cellule photoélectrique, la carte de commande et le lecteur de badge. Associer chaque élément à *ACQUÉRIR*, *TRAITER* ou *COMMUNIQUER*. Expliquer le rôle du capteur d'obstacle vis-à-vis de la **sécurité** (anti-écrasement d'un véhicule ou d'un piéton).

---

## Partie B — Flexion de la lisse (RDM, 9 points)

En position **fermée** (lisse horizontale), la lisse se comporte comme une **poutre encastrée** à une extrémité (l'axe), soumise à son propre poids réparti $w = \mu g$ (par mètre).

**Question B.1 (2 points).** Calculer le poids réparti $w = \mu g$ (en N·m⁻¹). Le moment de flexion maximal, à l'encastrement, vaut $M = \dfrac{w L^2}{2}$ : calculer $M$.

**Question B.2 (2 points).** Calculer le **moment quadratique** $I$ de la section tubulaire.
*Indications : $D = 0{,}080$ m, $d = 0{,}074$ m ; $D^4 = 4{,}10\times10^{-5}$ m⁴, $d^4 = 3{,}00\times10^{-5}$ m⁴.*

**Question B.3 (2 points).** En déduire le **module de flexion** $\dfrac{I}{v}$ (avec $v = D/2 = 0{,}040$ m), puis la **contrainte maximale** de flexion $\sigma = \dfrac{M}{I/v}$ (en MPa).

**Question B.4 (2 points).** Calculer le **coefficient de sécurité** $n = \dfrac{R_e}{\sigma}$. Commenter : la lisse est-elle sur-dimensionnée en résistance ? Si oui, quel autre critère justifie ce choix de section ?

**Question B.5 (1 point).** La **flèche** en bout de lisse (poutre encastrée sous poids réparti) vaut $f = \dfrac{w L^4}{8 E I}$. La calculer (en mm).

---

## Partie C — Motorisation et asservissement (6 points)

**Question C.1 (2 points).** Calculer la **vitesse de rotation** de la lisse $\omega_{\text{lisse}}$ (en rad·s⁻¹) pour parcourir $\pi/2$ rad en $3{,}0$ s. En déduire le **rapport de réduction** $k = \dfrac{\omega_{\text{lisse}}}{\omega_{\text{mot}}}$ nécessaire (avec $\omega_{\text{mot}}$ déduit de $N_{\text{mot}} = 1500$ tr·min⁻¹).

**Question C.2 (2 points).** Le cas le plus défavorable pour le moteur est le **démarrage lisse horizontale** : le couple de pesanteur à vaincre sur l'axe vaut $C_g = W \cdot \dfrac{L}{2}$ où $W = \mu L g$ est le poids total. Calculer $C_g$, puis le couple moteur nécessaire $C_{\text{mot}} = \dfrac{C_g \cdot k}{\eta}$.

**Question C.3 (2 points).** La vitesse du moteur est asservie (premier ordre, $\tau = 0{,}10$ s, $K = 15$, $K_p = 3$, retour unitaire). Calculer l'**erreur statique** $\varepsilon = \dfrac{1}{1 + K_p K}$ (en %) et le **temps de réponse à 5 %** ($t_r \approx 3\tau$). Expliquer en quoi cet asservissement contribue à un mouvement « en douceur ».

---

## Corrigé

### Partie A

**A.1.**

```
[ ALIMENTER / DISTRIBUER ]   → [ CONVERTIR ]        → [ TRANSMETTRE ] → ACTION
  Alimentation + carte           Moteur à courant       Réducteur + axe    Lever / baisser
  de puissance                   continu                                    la lisse
```

**A.2.** Le mouvement de sortie est une **rotation** (la lisse pivote autour de l'axe) ; il est caractérisé par la **vitesse angulaire** $\omega_{\text{lisse}}$ (rad·s⁻¹) et l'angle balayé ($90°$).

**A.3.** *ACQUÉRIR* : boucle magnétique au sol, capteur d'obstacle, cellule photoélectrique. *TRAITER* : carte de commande. *COMMUNIQUER* : lecteur de badge (échange avec l'usager). Le **capteur d'obstacle** (ou la cellule) détecte la présence d'un véhicule ou d'un piéton sous la lisse : si un obstacle est détecté pendant la descente, la commande **stoppe et relève** la lisse, évitant l'écrasement. C'est une fonction de sécurité des personnes et des biens.

### Partie B

**B.1.** $w = \mu g = 1{,}5 \times 9{,}81 = 14{,}7$ N·m⁻¹.
$M = \dfrac{w L^2}{2} = \dfrac{14{,}715 \times 3{,}0^2}{2} = \dfrac{14{,}715 \times 9}{2} = 66{,}2$ N·m.

**B.2.** $I = \dfrac{\pi (D^4 - d^4)}{64} = \dfrac{\pi (4{,}10\times10^{-5} - 3{,}00\times10^{-5})}{64} = \dfrac{\pi \times 1{,}10\times10^{-5}}{64} = 5{,}39 \times 10^{-7}$ m⁴.

**B.3.** $\dfrac{I}{v} = \dfrac{5{,}387\times10^{-7}}{0{,}040} = 1{,}35 \times 10^{-5}$ m³.
$\sigma = \dfrac{M}{I/v} = \dfrac{66{,}2}{1{,}347\times10^{-5}} = 4{,}92 \times 10^{6}$ Pa $= 4{,}9$ MPa.

**B.4.** $n = \dfrac{R_e}{\sigma} = \dfrac{250}{4{,}9} = 51$. Le coefficient de sécurité est énorme ($\approx 51$) : la lisse est **très sur-dimensionnée en résistance**. Le choix de la section n'est donc pas dicté par la contrainte, mais par la **rigidité** (limiter la flèche pour que la lisse reste bien droite) et par la **tenue aux chocs** (une voiture peut heurter la lisse).

**B.5.** $f = \dfrac{w L^4}{8 E I} = \dfrac{14{,}715 \times 3{,}0^4}{8 \times 70\times10^{9} \times 5{,}387\times10^{-7}}$.
Numérateur : $14{,}715 \times 81 = 1192$. Dénominateur : $8 \times 70\times10^{9} \times 5{,}387\times10^{-7} = 3{,}02\times10^{5}$.
$f = \dfrac{1192}{3{,}02\times10^{5}} = 3{,}9 \times 10^{-3}$ m $\approx 4$ mm. La flèche en bout est faible (4 mm sur 3 m), ce qui confirme que la section assure surtout la **rigidité**.

### Partie C

**C.1.** $\omega_{\text{lisse}} = \dfrac{\pi/2}{3{,}0} = \dfrac{1{,}571}{3{,}0} = 0{,}52$ rad·s⁻¹.
$\omega_{\text{mot}} = \dfrac{2\pi \times 1500}{60} = 157$ rad·s⁻¹.
$k = \dfrac{\omega_{\text{lisse}}}{\omega_{\text{mot}}} = \dfrac{0{,}5236}{157{,}1} = 3{,}3 \times 10^{-3} = \dfrac{1}{300}$.

**C.2.** $W = \mu L g = 1{,}5 \times 3{,}0 \times 9{,}81 = 44{,}1$ N.
$C_g = W \cdot \dfrac{L}{2} = 44{,}145 \times 1{,}5 = 66{,}2$ N·m (couple de pesanteur, lisse horizontale — maximal dans cette position).
$C_{\text{mot}} = \dfrac{C_g \cdot k}{\eta} = \dfrac{66{,}2 \times \frac{1}{300}}{0{,}70} = \dfrac{0{,}2207}{0{,}70} = 0{,}32$ N·m. Le moteur doit fournir environ 0,32 N·m au démarrage.

**C.3.** Erreur statique : $\varepsilon = \dfrac{1}{1 + K_p K} = \dfrac{1}{1 + 3 \times 15} = \dfrac{1}{46} = 0{,}022 = 2{,}2\ \%$.
Temps de réponse à 5 % : $t_r \approx 3\tau = 3 \times 0{,}10 = 0{,}30$ s.
L'asservissement de vitesse permet au moteur de **suivre une consigne de vitesse progressive** (rampe d'accélération puis de décélération) : la lisse démarre et s'arrête sans à-coup, ce qui limite les efforts sur la mécanique, l'usure et le bruit, et améliore la sécurité (pas de mouvement brutal).
