---
id: 1spe-pc-energie-electrique
titre: "Aspects énergétiques des phénomènes électriques"
voie: generale
niveau: premiere
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019"
theme: "L'énergie : conversions et transferts"
duree_lecture_min: 12
prerequis:
  - Loi d'Ohm et circuits (Seconde)
  - Puissances de dix (Seconde)
statut: brouillon
relu_par: null
---

# Aspects énergétiques des phénomènes électriques

> L'électricité vue comme un **transfert d'énergie**. Un générateur en fournit, un récepteur en
> consomme, et une partie se dissipe toujours en chaleur. La question centrale : **où va
> l'énergie ?**

---

## 1. Puissance et énergie

$$\boxed{P = U \times I} \qquad\qquad \boxed{E = P \times \Delta t}$$

| Symbole | Grandeur | Unité SI |
|---|---|---|
| $P$ | puissance | watt (W) |
| $E$ | énergie | joule (J) |
| $U$ | tension | volt (V) |
| $I$ | intensité | ampère (A) |
| $\Delta t$ | durée | seconde (s) |

> ⚠️ **La durée doit être en secondes** pour obtenir des joules. C'est l'oubli le plus fréquent.

### Le kilowattheure

$$1\ \text{kWh} = 1000\ \text{W} \times 3600\ \text{s} = 3{,}6 \times 10^{6}\ \text{J}$$

C'est une unité **d'énergie**, pas de puissance — malgré le « watt » dans son nom. C'est celle
qu'utilisent les factures d'électricité.

---

## 2. Générateurs et récepteurs

| | Rôle | Convention |
|---|---|---|
| **Générateur** | fournit l'énergie électrique | $U$ et $I$ de **même** sens |
| **Récepteur** | convertit l'énergie électrique | $U$ et $I$ de sens **opposés** |

### Modèle du générateur réel

$$\boxed{U = E - r\,I}$$

où $E$ est la **force électromotrice** (fem, en volts) et $r$ la **résistance interne** (en ohms).

> **Interprétation** : $rI$ est la tension « perdue » à l'intérieur du générateur, dissipée
> en chaleur. Un générateur idéal aurait $r = 0$ et délivrerait toujours $E$.

> **Conséquence** : plus on demande de courant, plus la tension aux bornes **chute**.

---

## 3. Effet Joule

Toute résistance parcourue par un courant **dissipe de l'énergie sous forme de chaleur** :

$$\boxed{P_\mathrm{J} = R\,I^2} \qquad \text{ou} \qquad P_\mathrm{J} = \frac{U^2}{R}$$

> **La dépendance en $I^2$** est essentielle : doubler l'intensité **quadruple** les pertes.
> C'est pourquoi le transport de l'électricité se fait à très haute tension — à puissance
> égale, une tension élevée signifie une intensité faible, donc des pertes réduites.

L'effet Joule est **utile** dans un radiateur ou un grille-pain, **parasite** dans un câble ou
un moteur.

---

## 4. Rendement

$$\boxed{\eta = \frac{E_{\text{utile}}}{E_{\text{fournie}}}}$$

Grandeur **sans unité**, comprise entre $0$ et $1$ (souvent exprimée en pourcentage).

> ⚠️ **Un rendement ne peut jamais dépasser $1$.** Obtenir $\eta > 1$ signale une erreur de
> calcul ou d'identification de l'énergie utile.

> **Exemple.** Un moteur reçoit $500$ J et fournit $400$ J de travail mécanique :
> $\eta = \dfrac{400}{500} = 0{,}8$, soit $80\,\%$. Les $100$ J manquants sont dissipés par
> effet Joule et frottements.

---

## 5. Conservation de l'énergie

L'énergie ne se crée ni ne se détruit : elle se **convertit** et se **transfère**.

$$E_{\text{fournie}} = E_{\text{utile}} + E_{\text{dissipée}}$$

> C'est le principe qui permet de vérifier tout bilan énergétique : la somme doit être exacte.

---

## 6. À retenir absolument

| | |
|---|---|
| Puissance électrique | $P = UI$ |
| Énergie | $E = P\Delta t$, en joules, $\Delta t$ en **secondes** |
| $1$ kWh | $3{,}6 \times 10^6$ J — une **énergie** |
| Générateur réel | $U = E - rI$ |
| Effet Joule | $P_\mathrm{J} = RI^2$ |
| Doubler $I$ | pertes Joule $\times 4$ |
| Rendement | $\eta = \dfrac{E_{\text{utile}}}{E_{\text{fournie}}} \leqslant 1$ |

---

## 7. Les erreurs qui coûtent des points

1. **Oublier de convertir la durée en secondes** avant de calculer une énergie en joules.
2. **Confondre puissance et énergie** : le watt est une puissance, le joule et le kWh sont
   des énergies.
3. **Prendre le kilowattheure pour une puissance.**
4. **Annoncer un rendement supérieur à $1$** sans réagir : c'est un signal d'erreur.
5. **Écrire $P_\mathrm{J} = RI$** au lieu de $RI^2$.
6. **Oublier la résistance interne** et confondre la tension aux bornes $U$ avec la fem $E$.
7. **Négliger l'énergie dissipée** dans un bilan : elle existe toujours.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « L'énergie : conversions
et transferts », section « Aspects énergétiques des phénomènes électriques », ligne 2377 du
.txt extrait).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le modèle du générateur réel U = E - rI est-il explicitement au programme de première, ou
  seulement le bilan de puissance ? Point de périmètre à vérifier.
- Les capacités expérimentales attendues (mesure de rendement, caractéristique d'un dipôle).
- La notion de puissance nominale et les plaques signalétiques sont-elles exigibles ?
- Le programme mentionne aussi « Énergie » à la ligne 2029 et 2448 : vérifier qu'aucun
  sous-thème n'a été omis entre les phénomènes électriques et mécaniques.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
