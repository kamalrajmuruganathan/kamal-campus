---
id: sj-si-07
titre: "Sujet SI — Imprimante 3D : résolution et dynamique d'un axe"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : l'**axe X d'une imprimante 3D** à dépôt de filament. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Une imprimante 3D construit un objet couche par couche. La **tête d'impression** se déplace selon l'axe X grâce à un **moteur pas à pas** qui entraîne une **courroie crantée** enroulée sur une **poulie**. Un **microcontrôleur** interprète le fichier G-code et pilote un **driver** de moteur (avec micro-pas). Un **capteur de fin de course** (butée) permet la prise d'origine ; une **thermistance** surveille la buse.

**Données constructeur :**

- Moteur pas à pas : $200$ pas par tour ($1{,}8°$ par pas).
- Réglage du driver : micro-pas au $1/16$ (soit $16$ micro-pas par pas).
- Poulie crantée GT2 : $20$ dents, pas de la courroie $2$ mm (la courroie avance de $2$ mm par dent).
- Vitesse d'impression visée : $v = 100$ mm·s⁻¹.
- Masse mobile (chariot + tête) : $m = 0{,}50$ kg.
- Accélération programmée : $a = 1000$ mm·s⁻² $= 1{,}0$ m·s⁻².
- Force de frottement du guidage : $F_f = 2{,}0$ N.
- Couple de maintien du moteur : $C_{\text{moteur}} = 0{,}40$ N·m.

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie** de l'axe X, en plaçant un composant à chaque bloc, choisi parmi : *alimentation continue, driver de moteur, moteur pas à pas, poulie + courroie*.

```
[ ALIMENTER ] → [ DISTRIBUER ] → [ CONVERTIR ] → [ TRANSMETTRE ] → ACTION (déplacer la tête)
```

**Question A.2 (1 point).** La courroie crantée transforme un mouvement de **rotation** (poulie) en mouvement de **translation** (chariot). Citer un avantage de la courroie crantée par rapport à une courroie lisse pour cette application de précision.

**Question A.3 (2 points).** La **chaîne d'information** comporte le capteur de fin de course, la thermistance, le microcontrôleur (lecture du G-code) et le driver. Associer chaque élément à *ACQUÉRIR*, *TRAITER* ou *COMMUNIQUER*. Expliquer pourquoi la **prise d'origine** (butée) est nécessaire alors que le moteur pas à pas « compte » déjà ses pas.

---

## Partie B — Résolution de l'axe (8 points)

**Question B.1 (2 points).** Calculer le nombre de **micro-pas par tour** de moteur (200 pas/tour au $1/16$).

**Question B.2 (2 points).** La poulie a 20 dents, la courroie avance de 2 mm par dent : quelle **distance** la courroie parcourt-elle pour **un tour** complet de poulie ?

**Question B.3 (2 points).** En déduire la **résolution** de l'axe X sous deux formes : le nombre de **micro-pas par millimètre**, puis la **distance parcourue par micro-pas** (en µm). Commenter la finesse obtenue.

**Question B.4 (2 points).** À la vitesse d'impression $v = 100$ mm·s⁻¹, calculer la **fréquence** des micro-pas (en pas·s⁻¹) que le driver doit générer. En déduire la vitesse de rotation du moteur $\omega$ (en rad·s⁻¹) et en tr·min⁻¹.

---

## Partie C — Dynamique de l'axe (7 points)

On étudie la phase d'**accélération** du chariot (démarrage à $a = 1{,}0$ m·s⁻²).

**Question C.1 (2 points).** Calculer la force nécessaire pour **accélérer** la masse mobile : $F_a = m \cdot a$. Puis la **force totale** que la courroie doit transmettre, en ajoutant le frottement : $F_{\text{tot}} = F_a + F_f$.

**Question C.2 (2 points).** Calculer le **rayon** de la poulie à partir de son périmètre (distance par tour $= 2\pi R$). En déduire le **couple** $C$ que le moteur doit fournir : $C = F_{\text{tot}} \cdot R$.

**Question C.3 (2 points).** Comparer ce couple au **couple de maintien** du moteur ($C_{\text{moteur}} = 0{,}40$ N·m). Le moteur est-il largement suffisant ? Justifier par le rapport des deux valeurs.

**Question C.4 (1 point).** Si l'on augmente trop la vitesse d'impression, la fréquence des pas devient très élevée et le couple disponible d'un moteur pas à pas **chute**. Quelle conséquence cela peut-il avoir sur la qualité de la pièce (indice : « pas perdus ») ?

---

## Corrigé

### Partie A

**A.1.**

```
[ ALIMENTER ]       → [ DISTRIBUER ]    → [ CONVERTIR ]        → [ TRANSMETTRE ] → ACTION
  Alimentation          Driver de           Moteur pas à pas       Poulie + courroie  Déplacer
  continue              moteur                                                         la tête
```

**A.2.** La courroie crantée engrène ses dents dans celles de la poulie : il n'y a **pas de glissement**, donc la position du chariot correspond exactement au nombre de pas effectués. Une courroie lisse patinerait et l'on perdrait la correspondance pas ↔ position, incompatible avec la précision demandée.

**A.3.** *ACQUÉRIR* : capteur de fin de course et thermistance. *TRAITER* : microcontrôleur (lecture et interprétation du G-code). *COMMUNIQUER* : le driver (il transmet au moteur les impulsions de commande). La **prise d'origine** est nécessaire car un moteur pas à pas est piloté en **boucle ouverte** : à la mise sous tension, la commande ignore où se trouve réellement le chariot. La butée fournit une **référence absolue** (le « zéro ») à partir de laquelle le comptage des pas devient exploitable.

### Partie B

**B.1.** Micro-pas par tour : $200 \times 16 = 3200$ micro-pas/tour.

**B.2.** Distance par tour de poulie : $20 \text{ dents} \times 2 \text{ mm} = 40$ mm.

**B.3.** Résolution : $\dfrac{3200 \text{ micro-pas}}{40 \text{ mm}} = 80$ micro-pas/mm.
Distance par micro-pas : $\dfrac{40 \text{ mm}}{3200} = 0{,}0125$ mm $= 12{,}5$ µm. Chaque micro-pas déplace la tête de 12,5 µm : la résolution mécanique est bien plus fine que la précision réellement atteignable (limitée par la buse et le filament), ce qui est recherché pour un mouvement fluide.

**B.4.** Fréquence des micro-pas : $f = v \times 80 = 100 \times 80 = 8000$ pas·s⁻¹ $= 8$ kHz.
Vitesse de rotation : $\omega = \dfrac{v}{R} $... plus simplement, la poulie fait $\dfrac{v}{40} = \dfrac{100}{40} = 2{,}5$ tr·s⁻¹, donc $\omega = 2{,}5 \times 2\pi = 15{,}7$ rad·s⁻¹, soit $N = 2{,}5 \times 60 = 150$ tr·min⁻¹.

### Partie C

**C.1.** $F_a = m \cdot a = 0{,}50 \times 1{,}0 = 0{,}50$ N.
$F_{\text{tot}} = F_a + F_f = 0{,}50 + 2{,}0 = 2{,}5$ N.

**C.2.** Périmètre $= 2\pi R = 40$ mm, donc $R = \dfrac{40}{2\pi} = 6{,}37$ mm $= 6{,}37 \times 10^{-3}$ m.
$C = F_{\text{tot}} \cdot R = 2{,}5 \times 6{,}366\times10^{-3} = 1{,}6 \times 10^{-2}$ N·m $= 16$ mN·m.

**C.3.** Rapport : $\dfrac{C_{\text{moteur}}}{C} = \dfrac{0{,}40}{0{,}0159} = 25$. Le couple de maintien est **environ 25 fois** supérieur au couple requis : le moteur est **largement suffisant** en phase d'accélération.

**C.4.** À très haute vitesse, la fréquence des pas est telle que le couple utile du moteur pas à pas chute en dessous du couple demandé : le moteur **« saute » des pas** (pas perdus). La position réelle ne correspond alors plus à la position commandée, ce qui provoque un **décalage des couches** et une pièce déformée (défaut de « layer shift »).
