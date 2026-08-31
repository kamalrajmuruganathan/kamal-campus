---
id: sj-si-05
titre: "Sujet SI — Monte-charge à contrepoids : résistance du câble"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : un **monte-charge à contrepoids** desservant deux niveaux d'un entrepôt. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Un monte-charge élève des marchandises entre deux niveaux. Une **cabine** est suspendue à un **câble d'acier** qui passe sur une **poulie de traction** entraînée par un **motoréducteur** ; de l'autre côté du câble, un **contrepoids** équilibre en partie la charge. Des **capteurs d'étage**, un **capteur de surcharge** et un **variateur** assurent la commande ; un **parachute** (dispositif de sécurité) bloque la cabine en cas de survitesse.

**Données constructeur :**

- Masse de la cabine vide : $m_{\text{cab}} = 300$ kg ; charge utile maximale : $m_{\text{ch}} = 200$ kg.
- Masse du contrepoids : $m_{\text{cp}} = 400$ kg.
- Accélération maximale en démarrage (montée) : $a = 1{,}0$ m·s⁻².
- Vitesse nominale de levage : $v = 0{,}50$ m·s⁻¹.
- Câble : section métallique résistante $S = 30$ mm² ; longueur suspendue maximale $L_c = 15$ m.
- Acier du câble : contrainte de rupture $R_r = 1600$ MPa ; module d'Young effectif $E = 100$ GPa.
- Coefficient de sécurité minimal exigé pour ce monte-charge de marchandises : $n_{\min} = 8$.
- Accélération de la pesanteur : $g = 9{,}81$ m·s⁻².

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie**, en plaçant un composant à chaque bloc, choisi parmi : *réseau + variateur, moteur asynchrone + réducteur, poulie de traction + câble, cabine en translation*.

```
[ ALIMENTER / DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE ] → ACTION (déplacer la cabine)
```

**Question A.2 (1 point).** Expliquer, en une phrase, à quoi sert le **contrepoids** du point de vue de l'énergie dépensée par le moteur.

**Question A.3 (2 points).** La **chaîne d'information** comporte les capteurs d'étage, le capteur de surcharge, les boutons d'appel, le variateur et le limiteur de vitesse (parachute). Associer chaque élément à *ACQUÉRIR*, *TRAITER* ou *COMMUNIQUER*. Décrire le rôle du **parachute** pour la sécurité.

---

## Partie B — Résistance du câble (RDM, 9 points)

On dimensionne le câble dans le **cas le plus défavorable** : cabine chargée au maximum, en phase de **démarrage vers le haut** (accélération $a$).

**Question B.1 (2 points).** À l'arrêt (ou à vitesse constante), calculer la **tension statique** $T_{\text{stat}}$ dans le brin de câble côté cabine chargée : $T_{\text{stat}} = (m_{\text{cab}} + m_{\text{ch}})\,g$.

**Question B.2 (2 points).** Lors du démarrage vers le haut, la cabine subit une accélération $a$. En appliquant le principe fondamental de la dynamique à l'ensemble {cabine + charge}, montrer que la tension devient $T_{\max} = (m_{\text{cab}} + m_{\text{ch}})(g + a)$ et calculer sa valeur.

**Question B.3 (2 points).** Calculer la **contrainte de traction** $\sigma = \dfrac{T_{\max}}{S}$ dans le câble (en MPa). *(Attention aux unités : $1$ mm² $= 10^{-6}$ m².)*

**Question B.4 (2 points).** Calculer le **coefficient de sécurité** réel $n = \dfrac{R_r}{\sigma}$. Le comparer à la valeur minimale exigée $n_{\min} = 8$ : le câble convient-il ?

**Question B.5 (1 point).** Calculer l'**allongement** du câble sous la tension $T_{\max}$ : $\Delta L = \dfrac{T_{\max}\,L_c}{E\,S}$.

---

## Partie C — Rôle énergétique du contrepoids (6 points)

On étudie la montée à **vitesse constante** de la cabine chargée.

**Question C.1 (2 points).** Grâce au contrepoids, le moteur ne soulève que le **déséquilibre** de masse. Calculer la **force nette** que le moteur doit fournir : $F_{\text{net}} = (m_{\text{cab}} + m_{\text{ch}} - m_{\text{cp}})\,g$.

**Question C.2 (2 points).** En déduire la **puissance mécanique** $P_{\text{avec}} = F_{\text{net}} \cdot v$ que le moteur fournit avec contrepoids.

**Question C.3 (2 points).** Calculer la puissance $P_{\text{sans}}$ qu'il faudrait **sans** contrepoids (le moteur soulèverait alors tout le poids cabine + charge). Comparer $P_{\text{avec}}$ et $P_{\text{sans}}$ : quel est l'intérêt du contrepoids ?

---

## Corrigé

### Partie A

**A.1.**

```
[ ALIMENTER / DISTRIBUER ]  → [ CONVERTIR ]              → [ TRANSMETTRE ]            → ACTION
  Réseau + variateur           Moteur asynchrone +          Poulie de traction + câble    Cabine en
                               réducteur                                                   translation
```

**A.2.** Le contrepoids équilibre en grande partie le poids de la cabine et de sa charge, de sorte que le moteur ne fournit d'énergie que pour le **déséquilibre** : il réduit fortement la puissance et l'énergie à dépenser.

**A.3.** *ACQUÉRIR* : capteurs d'étage, capteur de surcharge, limiteur de vitesse. *TRAITER* : variateur (armoire de commande). *COMMUNIQUER* : boutons d'appel et voyants. Le **parachute** est déclenché par le limiteur de vitesse : si la cabine descend trop vite (rupture de câble, survitesse), des mâchoires se serrent sur les rails de guidage et **bloquent mécaniquement la cabine**, ce qui protège les personnes et le matériel.

### Partie B

**B.1.** $T_{\text{stat}} = (m_{\text{cab}} + m_{\text{ch}})\,g = (300 + 200) \times 9{,}81 = 4{,}9 \times 10^{3}$ N $= 4905$ N.

**B.2.** PFD sur {cabine + charge}, axe vertical vers le haut : $T_{\max} - (m_{\text{cab}}+m_{\text{ch}})g = (m_{\text{cab}}+m_{\text{ch}})\,a$, d'où

$$T_{\max} = (m_{\text{cab}}+m_{\text{ch}})(g + a) = 500 \times (9{,}81 + 1{,}0) = 500 \times 10{,}81 = 5{,}41 \times 10^{3} \text{ N} = 5405 \text{ N}.$$

**B.3.** $S = 30 \text{ mm}^2 = 30 \times 10^{-6}$ m². 
$$\sigma = \dfrac{T_{\max}}{S} = \dfrac{5405}{30\times10^{-6}} = 1{,}80 \times 10^{8} \text{ Pa} = 180 \text{ MPa}.$$

**B.4.** $n = \dfrac{R_r}{\sigma} = \dfrac{1600}{180} = 8{,}9$. Comme $n = 8{,}9 > n_{\min} = 8$, le câble **convient** (avec une marge modeste : le dimensionnement est correct pour un monte-charge de marchandises).

**B.5.** $\Delta L = \dfrac{T_{\max}\,L_c}{E\,S} = \dfrac{5405 \times 15}{100\times10^{9} \times 30\times10^{-6}} = \dfrac{81075}{3{,}0\times10^{6}} = 2{,}7 \times 10^{-2}$ m $= 27$ mm.

### Partie C

**C.1.** $F_{\text{net}} = (m_{\text{cab}} + m_{\text{ch}} - m_{\text{cp}})\,g = (300 + 200 - 400) \times 9{,}81 = 100 \times 9{,}81 = 981$ N.

**C.2.** $P_{\text{avec}} = F_{\text{net}} \cdot v = 981 \times 0{,}50 = 4{,}9 \times 10^{2}$ W $\approx 490$ W.

**C.3.** Sans contrepoids : $P_{\text{sans}} = (m_{\text{cab}} + m_{\text{ch}})\,g \cdot v = 4905 \times 0{,}50 = 2{,}45 \times 10^{3}$ W $\approx 2450$ W.
Le rapport est $\dfrac{P_{\text{sans}}}{P_{\text{avec}}} = \dfrac{2452}{490} = 5$ : le contrepoids **divise par 5** la puissance à fournir par le moteur. Il permet donc un moteur bien plus petit et une consommation d'énergie très réduite (au prix d'une masse à déplacer plus grande, mais équilibrée).
