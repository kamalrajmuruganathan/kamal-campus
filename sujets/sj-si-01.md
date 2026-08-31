---
id: sj-si-01
titre: "Sujet SI — Robot palettiseur : asservissement d'un axe vertical"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : l'**axe vertical (axe Z) d'un robot palettiseur** de fin de ligne. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Dans un atelier de conditionnement, un robot cartésien empile des colis sur une palette. Son **axe vertical** monte et descend une pince par l'intermédiaire d'un **moteur à courant continu**, d'un **réducteur** et d'une **vis à billes** qui transforme la rotation en translation. Un **codeur incrémental** monté sur l'arbre moteur mesure la position ; une **carte de commande** asservit la position de la pince à une consigne fournie par l'automate de ligne. Deux capteurs de fin de course limitent la course.

**Données constructeur :**

- Masse soulevée (pince + colis) : $m = 15$ kg.
- Vitesse de levée visée (régime établi) : $v = 0{,}20$ m·s⁻¹.
- Pas de la vis à billes : $p = 20$ mm $= 0{,}020$ m (la pince avance de $p$ par tour de vis).
- Rapport de réduction : $k = \dfrac{\omega_{\text{vis}}}{\omega_{\text{moteur}}} = \dfrac{1}{3}$.
- Rendement global de la chaîne mécanique (réducteur + vis à billes) : $\eta = 0{,}70$.
- Accélération de la pesanteur : $g = 9{,}81$ m·s⁻².
- Boucle de vitesse du moteur assimilée à un premier ordre : $\dfrac{\Omega(p)}{U(p)} = \dfrac{K}{1 + \tau p}$ avec $K = 20$ rad·s⁻¹·V⁻¹ et $\tau = 0{,}05$ s.

Les frottements dans les guidages sont négligés : en régime établi, l'effort à fournir se réduit au poids de la charge.

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie** de l'axe vertical en plaçant, dans l'ordre, un composant à chaque bloc, choisi parmi : *moteur à courant continu, réseau + carte de puissance (variateur), réducteur + vis à billes, pince en translation*.

```
[ ALIMENTER / DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE ] → ACTION (déplacer la pince)
```

**Question A.2 (1 point).** Préciser la nature (électrique / mécanique de rotation / mécanique de translation) des grandeurs en entrée et en sortie du bloc **TRANSMETTRE**.

**Question A.3 (2 points).** La **chaîne d'information** comporte le codeur incrémental, les capteurs de fin de course, la carte de commande et le bus de liaison avec l'automate. Associer chaque élément à l'une des fonctions *ACQUÉRIR*, *TRAITER*, *COMMUNIQUER*. Expliquer pourquoi le codeur est indispensable au fonctionnement en **boucle fermée**.

---

## Partie B — Étude mécanique de la chaîne d'énergie (8 points)

On étudie le régime **établi** (montée à vitesse constante $v = 0{,}20$ m·s⁻¹).

**Question B.1 (2 points).** La pince monte à vitesse constante. En appliquant le principe d'inertie à l'ensemble soulevé, montrer que l'effort $F$ que la vis doit exercer est égal au poids de la charge. Donner sa valeur.

**Question B.2 (2 points).** Calculer la **puissance mécanique** $P_c$ transmise à la charge, puis, en tenant compte du rendement $\eta = 0{,}70$, la puissance $P_{\text{mot}}$ que le moteur doit fournir en sortie d'arbre.

**Question B.3 (2 points).** La vis avance de $p$ par tour : $v = p \cdot n_{\text{vis}}$ où $n_{\text{vis}}$ est en tours par seconde. En déduire la vitesse de rotation de la vis $\omega_{\text{vis}}$ (en rad·s⁻¹), puis la vitesse de rotation du moteur $\omega_{\text{mot}}$ (en rad·s⁻¹ et en tr·min⁻¹).

**Question B.4 (2 points).** En déduire le **couple** $C_{\text{mot}}$ que le moteur doit développer sur son arbre.

---

## Partie C — Asservissement de position (7 points)

La carte de commande compare la position mesurée à la consigne et pilote le moteur. On modélise la **boucle de vitesse** par le premier ordre donné ($K = 20$, $\tau = 0{,}05$ s). On place un **correcteur proportionnel** de gain $C = 4$ en amont, et le retour est unitaire. La fonction de transfert en boucle ouverte est donc :

$$H(p) = \dfrac{C \cdot K}{1 + \tau p}.$$

**Question C.1 (2 points).** Calculer le gain statique $C \cdot K$ de la boucle ouverte. Écrire la **fonction de transfert en boucle fermée** $F(p) = \dfrac{H(p)}{1 + H(p)}$ et la mettre sous la forme canonique d'un premier ordre $\dfrac{F_0}{1 + \tau' p}$.

**Question C.2 (2 points).** En déduire le **gain statique** $F_0$ de la boucle fermée et l'**erreur statique** (écart relatif entre consigne et sortie pour un échelon unitaire) : $\varepsilon = 1 - F_0$. Exprimer le résultat en pourcentage.

**Question C.3 (2 points).** Donner la **constante de temps** $\tau'$ de la boucle fermée, puis le **temps de réponse à 5 %** ($t_r \approx 3\,\tau'$). Commenter la rapidité obtenue.

**Question C.4 (1 point).** On double le gain du correcteur ($C = 8$). Sans refaire tout le calcul, indiquer qualitativement comment évoluent l'erreur statique et le temps de réponse. Citer une limite pratique à l'augmentation du gain.

---

## Corrigé

### Partie A

**A.1.**

```
[ ALIMENTER / DISTRIBUER ]  → [ CONVERTIR ]        → [ TRANSMETTRE ]              → ACTION
  Réseau + carte de            Moteur à courant       Réducteur + vis à billes       Pince en
  puissance (variateur)        continu                                               translation
```

**A.2.** Le bloc **TRANSMETTRE** reçoit en entrée une énergie **mécanique de rotation** (couple, vitesse angulaire de l'arbre moteur) et fournit en sortie une énergie **mécanique de translation** (effort, vitesse linéaire de la pince). La vis à billes réalise la conversion rotation → translation.

**A.3.** *ACQUÉRIR* : le codeur incrémental et les capteurs de fin de course. *TRAITER* : la carte de commande (comparaison consigne/mesure, calcul de la correction). *COMMUNIQUER* : le bus de liaison avec l'automate. Le **codeur** fournit à chaque instant la position réelle : sans cette mesure, la carte ne pourrait pas calculer l'écart consigne − mesure, donc pas d'asservissement en boucle fermée (on serait en boucle ouverte, sans correction des perturbations).

### Partie B

**B.1.** À vitesse constante, l'accélération est nulle : la somme des forces verticales est nulle. S'exercent l'effort de la vis $F$ (vers le haut) et le poids $mg$ (vers le bas) : $F - mg = 0$, d'où

$$F = mg = 15 \times 9{,}81 = 147 \text{ N}.$$

**B.2.** $P_c = F \cdot v = 147{,}15 \times 0{,}20 = 29{,}4$ W.
Avec $\eta = \dfrac{P_c}{P_{\text{mot}}}$ : $P_{\text{mot}} = \dfrac{P_c}{\eta} = \dfrac{29{,}4}{0{,}70} = 42$ W.

**B.3.** $n_{\text{vis}} = \dfrac{v}{p} = \dfrac{0{,}20}{0{,}020} = 10$ tr·s⁻¹, donc $\omega_{\text{vis}} = 2\pi \times 10 = 62{,}8$ rad·s⁻¹.
Réducteur : $\omega_{\text{vis}} = k \cdot \omega_{\text{mot}}$ avec $k = 1/3$, d'où

$$\omega_{\text{mot}} = 3 \times 62{,}8 = 188{,}5 \text{ rad·s}^{-1}, \qquad N_{\text{mot}} = \dfrac{60 \times 188{,}5}{2\pi} = 1{,}8 \times 10^{3} \text{ tr·min}^{-1}.$$

**B.4.** $C_{\text{mot}} = \dfrac{P_{\text{mot}}}{\omega_{\text{mot}}} = \dfrac{42{,}0}{188{,}5} = 0{,}22$ N·m.

### Partie C

**C.1.** Gain statique de la boucle ouverte : $C \cdot K = 4 \times 20 = 80$.

$$F(p) = \dfrac{H(p)}{1 + H(p)} = \dfrac{\frac{80}{1+\tau p}}{1 + \frac{80}{1+\tau p}} = \dfrac{80}{1 + \tau p + 80} = \dfrac{80}{81 + 0{,}05\,p}.$$

Sous forme canonique :

$$F(p) = \dfrac{\frac{80}{81}}{1 + \frac{0{,}05}{81}\,p} = \dfrac{F_0}{1 + \tau' p}.$$

**C.2.** $F_0 = \dfrac{80}{81} = 0{,}988$. Erreur statique : $\varepsilon = 1 - F_0 = \dfrac{1}{81} = 0{,}0123 = 1{,}2\ \%$. La position finale atteint 98,8 % de la consigne : l'écart résiduel est faible mais non nul (correcteur proportionnel seul).

**C.3.** $\tau' = \dfrac{\tau}{1 + CK} = \dfrac{0{,}05}{81} = 6{,}2 \times 10^{-4}$ s.
Temps de réponse à 5 % : $t_r \approx 3\,\tau' = 1{,}9 \times 10^{-3}$ s $\approx 1{,}9$ ms. La boucle est très rapide : le retour unitaire et le gain élevé divisent la constante de temps par $1 + CK = 81$.

**C.4.** Avec $C = 8$, le gain de boucle devient $CK = 160$. L'erreur statique tombe à $\dfrac{1}{161} = 0{,}62\ \%$ (elle est **divisée par deux environ**) et le temps de réponse diminue encore ($\tau'$ passe à $3{,}1 \times 10^{-4}$ s) : l'asservissement est **plus précis et plus rapide**. Limite pratique : sur le système réel (ordre supérieur, retards, jeu de la vis), un gain trop grand rend la boucle **oscillante voire instable** et sature le moteur ; il faut donc un compromis stabilité / précision.
