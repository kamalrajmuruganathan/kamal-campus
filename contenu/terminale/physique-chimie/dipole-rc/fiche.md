---
id: tale-spe-pc-dipole-rc
titre: "Dynamique d'un système électrique : le dipôle RC"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Ondes et signaux"
duree_lecture_min: 14
prerequis:
  - Loi d'Ohm et loi des mailles (Première)
  - Intensité et charge électrique (Première)
  - Dérivée d'une fonction, fonction exponentielle (maths)
statut: brouillon
relu_par: null
---

# Dynamique d'un système électrique : le dipôle RC

> Jusqu'ici tes circuits étaient en **régime permanent** : on ferme l'interrupteur, tout est
> déjà stable. Ici, on regarde ce qui se passe **pendant** les premiers instants, quand un
> condensateur se charge ou se décharge. La grandeur électrique n'est plus constante : elle
> **évolue dans le temps**, gouvernée par une équation différentielle. C'est le premier
> système dynamique du programme, et le modèle se retrouvera partout : flash d'appareil
> photo, écran tactile, temporisation d'un circuit.

---

## 1. Le condensateur

### Définition

Un **condensateur** est un dipôle formé de deux surfaces conductrices (les **armatures**)
séparées par un isolant (le **diélectrique**). Branché à un générateur, il **accumule** des
charges de signes opposés sur ses deux armatures : $+q$ sur l'une, $-q$ sur l'autre.

### Relation charge – tension

La charge $q$ portée par l'armature est **proportionnelle** à la tension $u$ à ses bornes :

$$\boxed{q = C \times u}$$

| Grandeur | Symbole | Unité (SI) |
|---|---|---|
| Charge | $q$ | coulomb (C) |
| Tension | $u$ | volt (V) |
| Capacité | $C$ | **farad (F)** |

La **capacité** $C$ mesure l'aptitude du condensateur à stocker des charges sous une tension
donnée. Le farad est une **très grande** unité : les condensateurs usuels valent quelques
microfarads, nanofarads ou picofarads.

$$1\ \mu\text{F} = 10^{-6}\ \text{F} \qquad 1\ \text{nF} = 10^{-9}\ \text{F} \qquad 1\ \text{pF} = 10^{-12}\ \text{F}$$

> **Exemple.** Un condensateur de capacité $C = 4{,}7\ \mu\text{F}$ est chargé sous
> $u = 5{,}0$ V. La charge stockée vaut
> $q = C\,u = 4{,}7\times 10^{-6} \times 5{,}0 = 2{,}35\times 10^{-5}$ C, soit $23{,}5\ \mu$C.
> Oublier de convertir $\mu$F en F donne un résultat un million de fois trop grand.

### Lien courant – tension

L'intensité qui traverse le condensateur est le **débit de charge** : $i = \dfrac{\mathrm{d}q}{\mathrm{d}t}$.
En dérivant $q = C\,u$ (avec $C$ constante), on obtient la relation clé du chapitre :

$$\boxed{i = C\,\frac{\mathrm{d}u}{\mathrm{d}t}}$$

> **À comprendre.** Le courant ne dépend pas de la tension elle-même, mais de sa **vitesse de
> variation**. Si $u$ est constante ($\mathrm{d}u/\mathrm{d}t = 0$), alors $i = 0$ : un
> condensateur **chargé sous tension constante ne laisse plus passer de courant**. Il se
> comporte alors comme un interrupteur ouvert.

⚠️ Cette relation suppose la **convention récepteur** : $i$ et $u$ fléchés en sens opposés sur
le dipôle. Avec la convention générateur, un signe $-$ apparaît. On garde la convention
récepteur dans tout ce chapitre.

---

## 2. Le circuit RC série

On associe en série un **résistor** de résistance $R$, un **condensateur** de capacité $C$ et
un générateur de tension continue de f.é.m. $E$, commandés par un interrupteur. La même
intensité $i$ traverse les deux dipôles.

### Établir l'équation différentielle (charge)

On applique la **loi des mailles** au circuit fermé sur le générateur :

$$E = u_R + u_C$$

- Loi d'Ohm sur le résistor : $u_R = R\,i$.
- Lien courant-condensateur : $i = C\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t}$.

En remplaçant $i$, il vient $u_R = RC\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t}$, d'où l'**équation
différentielle** vérifiée par la tension aux bornes du condensateur :

$$\boxed{RC\,\frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = E}$$

C'est une équation différentielle **linéaire du premier ordre à coefficients constants**, avec
un **second membre** constant $E$.

### Résoudre l'équation (charge)

La solution est la somme du régime permanent et d'un terme transitoire qui s'éteint. Avec la
**condition initiale** $u_C(0) = 0$ (condensateur déchargé au départ) :

$$\boxed{u_C(t) = E\left(1 - e^{-t/\tau}\right)} \qquad \text{avec } \tau = RC$$

> **Vérification.** À $t = 0$ : $u_C = E(1-1) = 0$ ✓. Quand $t \to \infty$ :
> $e^{-t/\tau}\to 0$, donc $u_C \to E$ : le condensateur atteint la tension du générateur. La
> courbe part de $0$ et monte **en s'aplatissant** vers l'asymptote $u_C = E$.

Le courant dans le circuit décroît alors exponentiellement :

$$i(t) = C\,\frac{\mathrm{d}u_C}{\mathrm{d}t} = \frac{E}{R}\,e^{-t/\tau}$$

À $t = 0$ le courant est **maximal** ($i_0 = E/R$, le condensateur vide se comporte comme un
fil) ; il tend vers $0$ une fois la charge terminée.

### La décharge

Le condensateur est d'abord chargé sous $E$, puis on l'isole du générateur pour le fermer sur
le seul résistor $R$. La loi des mailles donne $u_R + u_C = 0$, soit
$RC\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = 0$ (second membre **nul**). Avec la condition
initiale $u_C(0) = E$ :

$$\boxed{u_C(t) = E\,e^{-t/\tau}}$$

La tension part de $E$ et décroît vers $0$. Même constante de temps $\tau = RC$.

> **Exemple.** Un condensateur $C = 1{,}0\ \mu$F chargé sous $E = 6{,}0$ V se décharge dans
> $R = 2{,}0\ \text{k}\Omega$. À $t = \tau = RC = 2{,}0\times 10^{3}\times 1{,}0\times 10^{-6}
> = 2{,}0\times 10^{-3}$ s $= 2{,}0$ ms, la tension vaut
> $u_C = 6{,}0\,e^{-1} = 6{,}0 \times 0{,}37 = 2{,}2$ V.

---

## 3. Le temps caractéristique τ = RC

$$\boxed{\tau = R\,C}$$

C'est la durée qui fixe la **rapidité** du phénomène : plus $\tau$ est grand, plus la charge
(ou la décharge) est lente.

### τ est bien un temps

Une **analyse dimensionnelle** le confirme :
$[\,R\,] \times [\,C\,] = \Omega \times \text{F}
= \dfrac{\text{V}}{\text{A}} \times \dfrac{\text{C}}{\text{V}}
= \dfrac{\text{C}}{\text{A}} = \dfrac{\text{C}}{\text{C·s}^{-1}} = \text{s}$.

Donc **R en ohms** ($\Omega$), **C en farads** (F) $\Rightarrow$ **τ en secondes** (s). Il
faut convertir *avant* de multiplier.

> **Exemple.** $R = 10\ \text{k}\Omega = 1{,}0\times 10^{4}\ \Omega$ et
> $C = 100\ \text{nF} = 100\times 10^{-9}\ \text{F} = 1{,}0\times 10^{-7}\ \text{F}$ donnent
> $\tau = 1{,}0\times 10^{4} \times 1{,}0\times 10^{-7} = 1{,}0\times 10^{-3}$ s $= 1{,}0$ ms.

### Les repères à connaître

| Instant | Charge : $u_C$ | Décharge : $u_C$ |
|---|---|---|
| $t = \tau$ | $\approx 63\,\%$ de $E$ | $\approx 37\,\%$ de $E$ |
| $t = 3\tau$ | $\approx 95\,\%$ de $E$ | $\approx 5\,\%$ de $E$ |
| $t = 5\tau$ | $\approx 99\,\%$ de $E$ | $< 1\,\%$ de $E$ |

En pratique on considère le **régime permanent atteint au bout de $5\tau$**.

### Trois façons de déterminer τ sur une courbe expérimentale

1. **La règle des 63 % / 37 %.** Pour la charge, $\tau$ est l'abscisse du point où
   $u_C = 0{,}63\,E$. Pour la décharge, celle du point où $u_C = 0{,}37\,E$.
2. **La tangente à l'origine.** La tangente à la courbe en $t = 0$ coupe l'asymptote finale
   exactement à l'instant $t = \tau$. C'est le tracé le plus précis.
3. **Le calcul direct** $\tau = RC$ à partir des valeurs des composants (à comparer à la
   mesure).

---

## 4. Les capteurs capacitifs

La capacité d'un condensateur dépend de sa **géométrie** et de l'**isolant** entre ses
armatures. Toute grandeur physique qui modifie l'un de ces paramètres modifie $C$, donc $\tau$
ou la tension mesurée : c'est le principe du **capteur capacitif**.

> **Exemples.**
> - **Écran tactile** : ton doigt, conducteur, modifie localement la capacité de la dalle ; le
>   circuit détecte où.
> - **Capteur d'humidité** : le diélectrique absorbe l'eau, sa nature change, $C$ varie avec
>   le taux d'humidité.
> - **Jauge de carburant / niveau** : la hauteur de liquide entre les armatures change la
>   capacité, donc une mesure électrique donne un niveau.

L'électronique associée mesure $C$ (souvent via le temps de charge $\tau$) et la convertit en
la grandeur physique cherchée.

---

## 5. Tableau récapitulatif

| Notion | Formule / résultat |
|---|---|
| Charge d'un condensateur | $q = C\,u$ |
| Courant dans un condensateur | $i = C\,\dfrac{\mathrm{d}u}{\mathrm{d}t}$ |
| Éq. différentielle (charge) | $RC\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = E$ |
| Solution (charge) | $u_C(t) = E\left(1 - e^{-t/\tau}\right)$ |
| Éq. différentielle (décharge) | $RC\,\dfrac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = 0$ |
| Solution (décharge) | $u_C(t) = E\,e^{-t/\tau}$ |
| Temps caractéristique | $\tau = RC$ (s), avec $R$ en $\Omega$, $C$ en F |
| Repère charge / décharge | $63\,\%$ / $37\,\%$ à $t = \tau$ ; régime permanent à $5\tau$ |
| Unités | $1\ \mu$F $=10^{-6}$ F, $1\ $nF $=10^{-9}$ F, $1\ $pF $=10^{-12}$ F |

---

## 6. Les erreurs qui coûtent des points

1. **Ne pas convertir les unités.** $\mu$F, nF, pF, k$\Omega$, M$\Omega$ : tout doit passer en
   F et en $\Omega$ **avant** de calculer $\tau$. C'est le piège n°1 du chapitre.
2. **Confondre charge et décharge.** À $t = \tau$, la charge atteint $63\,\%$ de $E$ (elle
   monte), la décharge tombe à $37\,\%$ (elle descend). Vérifie le sens de la courbe.
3. **Se tromper de signe dans $i = C\,\mathrm{d}u/\mathrm{d}t$.** La relation vaut en
   **convention récepteur**. En convention générateur, il y a un signe moins.
4. **Croire qu'un courant traverse un condensateur chargé.** En régime permanent $u_C$ est
   constante, donc $i = C\,\mathrm{d}u_C/\mathrm{d}t = 0$.
5. **Oublier la condition initiale.** $u_C(0)=0$ pour la charge, $u_C(0)=E$ pour la décharge :
   c'est elle qui fixe la constante et distingue les deux solutions.
6. **Confondre $\tau$ avec la durée totale.** La charge n'est pas finie à $t=\tau$ (seulement
   $63\,\%$) : il faut environ $5\tau$ pour atteindre le régime permanent.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, classe terminale
de la voie générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019.
Fichier : docs/programme-terminale-physique-chimie-2019.txt, section « 4.3 Dynamique d'un
système électrique : le dipôle RC » (lignes 182-190 du .txt extrait).
Provenance : extraction via WebFetch depuis le PDF officiel education.gouv.fr / eduscol
(spe249_annexe_1158929.pdf). À confronter au PDF officiel avant publication.

Notions et contenus couverts (programme) : condensateur q = C·u et capacité C ; circuit RC
série charge et décharge ; temps caractéristique τ = RC ; capteurs capacitifs.
Capacités exigibles couvertes : établir et résoudre l'équation différentielle de u_C ;
étudier la réponse d'un dipôle RC ; déterminer τ = RC.

À CONFRONTER AU PROGRAMME / RELECTEUR :
- L'expression C = ε·S/e du condensateur plan n'est PAS exigible au programme de PC (elle
  relève de la physique post-bac) : je l'ai volontairement écartée, capteurs traités
  qualitativement. À valider.
- La résolution est donnée par la « forme de solution + vérification » (méthode attendue au
  lycée), pas par séparation des variables formelle. Confirmer que c'est la présentation
  souhaitée.
- L'énergie stockée E = ½C u² n'est pas dans cette section du BO 2019 : non incluse. Vérifier
  qu'elle n'est pas attendue ailleurs.
- Convention récepteur retenue partout ; à harmoniser avec la convention du manuel de classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
