---
id: sj-si-03
titre: "Sujet SI — Store banne motorisé : couple d'enroulement et sécurité vent"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : un **store banne motorisé** de terrasse, avec sécurité anti-vent. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Un store banne protège une terrasse du soleil. La toile est enroulée sur un **tube d'enroulement** entraîné par un **moteur tubulaire** (moteur + réducteur intégrés). Deux **bras articulés** à ressort tendent la toile vers l'avant lorsqu'elle est déployée. Un **anémomètre** mesure la vitesse du vent : au-delà d'un seuil, la commande **replie automatiquement** le store pour éviter qu'il ne soit endommagé.

**Données constructeur :**

- Rayon d'enroulement moyen du tube : $R = 40$ mm $= 0{,}040$ m.
- Vitesse de rotation du tube (sortie du moteur tubulaire) : $N = 15$ tr·min⁻¹.
- Tension totale exercée par les deux bras à ressort sur la toile : $T = 300$ N (elle s'oppose à l'enroulement lors du repli).
- Longueur de toile à enrouler pour replier complètement : $L = 3{,}0$ m.
- Rendement global du moteur tubulaire (moteur + réducteur) : $\eta = 0{,}55$.
- Sécurité vent — surface de toile exposée : $S = 8{,}0$ m² ; coefficient de traînée : $C_x = 1{,}2$ ; masse volumique de l'air : $\rho = 1{,}2$ kg·m⁻³ ; seuil de vent réglé : $v_{\text{seuil}} = 50$ km·h⁻¹.
- Pression dynamique du vent (fournie) : $q = \tfrac{1}{2}\,\rho\,v^2$ ; effort du vent sur la toile : $F_{\text{vent}} = C_x \cdot q \cdot S$.
- L'anémomètre délivre une fréquence d'impulsions proportionnelle à la vitesse du vent : $f = k \cdot v$ avec $k = 4{,}0$ Hz par (m·s⁻¹).

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie** du store, en plaçant un composant à chaque bloc, choisi parmi : *réseau 230 V, carte de commande (relais), moteur tubulaire, tube + toile*.

```
[ ALIMENTER ] → [ DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE ] → ACTION (enrouler / dérouler la toile)
```

**Question A.2 (1 point).** Le moteur tubulaire intègre déjà un réducteur. Justifier l'intérêt d'un réducteur ici, en raisonnant sur la vitesse et le couple.

**Question A.3 (2 points).** La **chaîne d'information** comporte l'anémomètre, la télécommande, la carte de commande et le capteur de fin de course. Associer chaque élément à *ACQUÉRIR*, *TRAITER* ou *COMMUNIQUER*. Expliquer, du point de vue de la sécurité, pourquoi le repli sur vent fort doit être **automatique** (et non laissé à l'utilisateur).

---

## Partie B — Étude mécanique de l'enroulement (8 points)

On étudie le **repli** du store à vitesse constante (le moteur enroule la toile contre la tension des bras).

**Question B.1 (2 points).** Calculer la **vitesse de rotation** du tube $\omega$ (en rad·s⁻¹) à partir de $N = 15$ tr·min⁻¹. En déduire la **vitesse linéaire** $v_{\text{toile}}$ d'enroulement de la toile ($v_{\text{toile}} = R \cdot \omega$).

**Question B.2 (2 points).** Le brin de toile est tendu par les bras avec la tension $T$. Montrer que le **couple** $C$ que le tube doit exercer pour enrouler vaut $C = T \cdot R$ et calculer sa valeur.

**Question B.3 (2 points).** Calculer la **puissance mécanique** $P_{\text{méca}} = C \cdot \omega$ fournie en sortie du moteur tubulaire, puis, avec $\eta = 0{,}55$, la **puissance électrique** $P_{\text{elec}}$ absorbée.

**Question B.4 (2 points).** Calculer la **durée** du repli complet (enroulement de $L = 3{,}0$ m de toile à la vitesse $v_{\text{toile}}$).

---

## Partie C — Sécurité anti-vent (7 points)

**Question C.1 (2 points).** Convertir le seuil de vent $v_{\text{seuil}} = 50$ km·h⁻¹ en m·s⁻¹, puis calculer la **pression dynamique** $q$ correspondante.

**Question C.2 (2 points).** En déduire l'**effort** $F_{\text{vent}}$ que le vent exerce sur la toile au seuil. Commenter l'ordre de grandeur : cet effort justifie-t-il le repli automatique ?

**Question C.3 (2 points).** Calculer la **fréquence** $f$ des impulsions délivrées par l'anémomètre au seuil de déclenchement. La carte compare $f$ à un seuil programmé : quelle valeur de seuil (en Hz) faut-il programmer ?

**Question C.4 (1 point).** L'effort du vent croît comme le **carré** de la vitesse. Si le vent double (de 50 à 100 km·h⁻¹), par quel facteur l'effort sur la toile est-il multiplié ? Conclure sur l'importance d'un seuil bas.

---

## Corrigé

### Partie A

**A.1.**

```
[ ALIMENTER ] → [ DISTRIBUER ]          → [ CONVERTIR ]      → [ TRANSMETTRE ] → ACTION
  Réseau 230 V   Carte de commande        Moteur tubulaire     Tube + toile      Enrouler /
                 (relais)                                                          dérouler la toile
```

**A.2.** Le moteur tourne vite avec un faible couple ; le tube doit tourner **lentement** (15 tr·min⁻¹) mais avec un **couple important** pour vaincre la tension des bras. Le réducteur **diminue la vitesse** et **augmente le couple** dans le même rapport : il adapte le moteur à la charge.

**A.3.** *ACQUÉRIR* : anémomètre et capteur de fin de course. *TRAITER* : carte de commande. *COMMUNIQUER* : télécommande (ordre de l'utilisateur). Le repli doit être **automatique** car un coup de vent peut survenir en l'absence de l'utilisateur (nuit, absence) : attendre une action humaine exposerait la toile et la structure à la rupture. La sécurité est donc confiée à un capteur permanent, indépendant de la présence de l'usager.

### Partie B

**B.1.** $\omega = \dfrac{2\pi N}{60} = \dfrac{2\pi \times 15}{60} = 1{,}57$ rad·s⁻¹.
$v_{\text{toile}} = R \cdot \omega = 0{,}040 \times 1{,}571 = 6{,}3 \times 10^{-2}$ m·s⁻¹ (soit $\approx 6{,}3$ cm·s⁻¹).

**B.2.** La toile exerce sur le tube une tension $T$ appliquée au rayon $R$ ; le moment de cette force par rapport à l'axe du tube est $T \cdot R$. Pour enrouler à vitesse constante, le tube doit fournir un couple opposé de même valeur :

$$C = T \cdot R = 300 \times 0{,}040 = 12 \text{ N·m}.$$

**B.3.** $P_{\text{méca}} = C \cdot \omega = 12 \times 1{,}571 = 18{,}8$ W.
$P_{\text{elec}} = \dfrac{P_{\text{méca}}}{\eta} = \dfrac{18{,}85}{0{,}55} = 34$ W.

**B.4.** $t = \dfrac{L}{v_{\text{toile}}} = \dfrac{3{,}0}{0{,}0628} = 48$ s.

### Partie C

**C.1.** $v_{\text{seuil}} = \dfrac{50}{3{,}6} = 13{,}9$ m·s⁻¹.
$q = \tfrac{1}{2}\rho v^2 = 0{,}5 \times 1{,}2 \times 13{,}89^2 = 0{,}6 \times 192{,}9 = 116$ Pa.

**C.2.** $F_{\text{vent}} = C_x \cdot q \cdot S = 1{,}2 \times 115{,}7 \times 8{,}0 = 1{,}11 \times 10^{3}$ N $\approx 1{,}1$ kN.
Un effort supérieur à 1 kN (l'équivalent du poids d'environ 110 kg) s'exerce sur la toile : il peut arracher la toile ou plier les bras. Le repli automatique est donc pleinement justifié.

**C.3.** $f = k \cdot v_{\text{seuil}} = 4{,}0 \times 13{,}89 = 55{,}6$ Hz. Il faut programmer un seuil de l'ordre de **56 Hz** (déclenchement du repli dès que $f$ dépasse cette valeur).

**C.4.** Comme $F_{\text{vent}} \propto v^2$, doubler la vitesse multiplie l'effort par $2^2 = 4$. À 100 km·h⁻¹, l'effort atteindrait $\approx 4{,}4$ kN : il est donc essentiel de replier le store **avant** que le vent ne devienne trop fort, d'où un seuil de déclenchement volontairement bas.
