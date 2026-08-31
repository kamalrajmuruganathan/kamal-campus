---
id: sj-si-02
titre: "Sujet SI — Drone quadrirotor : chaîne d'énergie et autonomie"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : un **drone quadrirotor** d'inspection. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Un drone quadrirotor est équipé de **quatre moteurs sans balais (BLDC)**, chacun entraînant une hélice. La commande module la vitesse des quatre hélices pour maintenir l'appareil en **vol stationnaire** (« vol en un point fixe ») puis le déplacer. Une **batterie lithium-polymère (LiPo)** alimente quatre **variateurs électroniques (ESC)**. Un contrôleur de vol reçoit les mesures d'une centrale inertielle (gyromètre + accéléromètre), d'un baromètre et d'un GPS, et pilote les ESC.

**Données constructeur :**

- Masse totale du drone en ordre de vol : $m = 1{,}2$ kg.
- Nombre d'hélices : 4 ; rayon d'une hélice : $R = 0{,}12$ m.
- Masse volumique de l'air : $\rho = 1{,}2$ kg·m⁻³.
- Batterie LiPo : tension nominale $U = 14{,}8$ V (4 éléments), capacité $Q = 5{,}0$ A·h.
- Profondeur de décharge admissible : 80 % de la capacité.
- Rendement global d'une hélice motorisée (ESC + moteur + hélice, en stationnaire) : $\eta = 0{,}35$.
- Accélération de la pesanteur : $g = 9{,}81$ m·s⁻².
- Puissance aérodynamique **idéale** induite par une hélice en vol stationnaire (théorie de Froude, fournie) : $P_i = \dfrac{F_1^{\,3/2}}{\sqrt{2\,\rho\,A}}$, où $F_1$ est la poussée d'une hélice et $A = \pi R^2$ l'aire du disque balayé.

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie** d'un des quatre moteurs, en plaçant un composant à chaque bloc, choisi parmi : *batterie LiPo, variateur ESC, moteur BLDC, hélice*.

```
[ ALIMENTER ] → [ DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE / AGIR ] → ACTION (poussée d'air)
```

**Question A.2 (1 point).** L'action mécanique produite par une hélice sur l'air est dirigée vers le bas ; en réaction, l'air pousse le drone vers le haut. Nommer le principe physique qui justifie que le drone soit soutenu par ces poussées.

**Question A.3 (2 points).** La **chaîne d'information** comporte le gyromètre-accéléromètre (centrale inertielle), le baromètre, le récepteur GPS, le contrôleur de vol et la liaison radio de la télécommande. Associer chaque élément à *ACQUÉRIR*, *TRAITER* ou *COMMUNIQUER*. Expliquer le rôle de la centrale inertielle pour la **stabilité** du drone.

---

## Partie B — Équilibre en vol stationnaire et puissance (8 points)

**Question B.1 (2 points).** En vol stationnaire, le drone est immobile : la somme des forces verticales est nulle. Écrire l'équilibre entre le poids du drone et la **poussée totale** $F_{\text{tot}}$ des quatre hélices. En déduire $F_{\text{tot}}$, puis la poussée $F_1$ d'une seule hélice (poussées supposées égales).

**Question B.2 (2 points).** Calculer l'aire $A$ du disque balayé par une hélice.

**Question B.3 (2 points).** À l'aide de la relation fournie, calculer la **puissance aérodynamique idéale** $P_i$ induite par **une** hélice, puis la puissance idéale totale $P_{i,\text{tot}} = 4\,P_i$.

**Question B.4 (2 points).** Le rendement global $\eta = 0{,}35$ tient compte des pertes de l'hélice réelle, du moteur et de l'ESC. En déduire la **puissance électrique** $P_{\text{elec}}$ réellement absorbée par le drone en vol stationnaire.

---

## Partie C — Autonomie de vol (7 points)

**Question C.1 (2 points).** Calculer l'**énergie** totale stockée dans la batterie (en W·h), puis l'énergie réellement **utilisable** compte tenu de la profondeur de décharge de 80 %.

**Question C.2 (3 points).** En déduire l'**autonomie** de vol stationnaire (durée, en minutes) : $t = \dfrac{E_{\text{util}}}{P_{\text{elec}}}$.

**Question C.3 (2 points).** Calculer le **courant** total $I$ débité par la batterie en vol stationnaire, puis le **régime de décharge** (« C-rate ») défini par $I / Q$. Commenter : la batterie doit-elle être capable de délivrer plusieurs fois sa capacité par heure ?

---

## Corrigé

### Partie A

**A.1.**

```
[ ALIMENTER ]  → [ DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE / AGIR ] → ACTION
  Batterie LiPo    Variateur ESC    Moteur BLDC     Hélice                    Poussée d'air
```

**A.2.** C'est le **principe des actions réciproques** (3ᵉ loi de Newton, action-réaction) : l'hélice accélère l'air vers le bas, l'air exerce sur l'hélice une force de réaction (la **poussée**) dirigée vers le haut, qui soutient le drone.

**A.3.** *ACQUÉRIR* : centrale inertielle (gyromètre + accéléromètre), baromètre, récepteur GPS. *TRAITER* : contrôleur de vol. *COMMUNIQUER* : liaison radio de la télécommande. La **centrale inertielle** mesure en permanence l'inclinaison et les vitesses de rotation du drone ; le contrôleur corrige aussitôt la vitesse des hélices pour rétablir l'assiette : c'est cet asservissement rapide qui **stabilise** le drone (sans lui, l'appareil basculerait).

### Partie B

**B.1.** En vol stationnaire (immobile), l'équilibre vertical s'écrit $F_{\text{tot}} = mg$ :

$$F_{\text{tot}} = 1{,}2 \times 9{,}81 = 11{,}8 \text{ N}.$$

Les quatre poussées étant égales : $F_1 = \dfrac{F_{\text{tot}}}{4} = \dfrac{11{,}77}{4} = 2{,}94$ N.

**B.2.** $A = \pi R^2 = \pi \times 0{,}12^2 = 4{,}52 \times 10^{-2}$ m².

**B.3.** $P_i = \dfrac{F_1^{\,3/2}}{\sqrt{2\rho A}}$.
Numérateur : $F_1^{\,3/2} = 2{,}943^{1{,}5} = 5{,}05$.
Dénominateur : $\sqrt{2 \times 1{,}2 \times 4{,}524\times10^{-2}} = \sqrt{0{,}1086} = 0{,}330$.
D'où $P_i = \dfrac{5{,}05}{0{,}330} = 15{,}3$ W par hélice, et $P_{i,\text{tot}} = 4 \times 15{,}3 = 61{,}3$ W.

**B.4.** $\eta = \dfrac{P_{i,\text{tot}}}{P_{\text{elec}}}$, donc

$$P_{\text{elec}} = \dfrac{P_{i,\text{tot}}}{\eta} = \dfrac{61{,}3}{0{,}35} = 1{,}75 \times 10^{2} \text{ W} \approx 175 \text{ W}.$$

### Partie C

**C.1.** Énergie stockée : $E = U \cdot Q = 14{,}8 \times 5{,}0 = 74$ W·h.
Énergie utilisable (80 %) : $E_{\text{util}} = 0{,}80 \times 74 = 59{,}2$ W·h.

**C.2.** $t = \dfrac{E_{\text{util}}}{P_{\text{elec}}} = \dfrac{59{,}2}{175} = 0{,}338$ h $= 0{,}338 \times 60 \approx 20$ min. L'autonomie en vol stationnaire est d'environ **20 minutes**, ce qui est cohérent avec un drone de cette catégorie.

**C.3.** Courant : $I = \dfrac{P_{\text{elec}}}{U} = \dfrac{175}{14{,}8} = 11{,}8$ A.
Régime de décharge : $\dfrac{I}{Q} = \dfrac{11{,}8}{5{,}0} = 2{,}4$ C. La batterie débite environ 2,4 fois sa capacité par heure : elle doit donc supporter un fort courant (les batteries LiPo de drone sont précisément choisies pour un « C-rate » élevé, typiquement 25 C et plus, afin d'encaisser les pointes lors des manœuvres).
