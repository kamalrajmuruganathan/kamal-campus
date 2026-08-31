---
id: si-premiere-entrainement
titre: "Entraînement SI — Première"
examen: "Première — spécialité SI"
niveau: premiere
matiere: si
statut: brouillon
relu_par: null
---

# Première — spécialité SI (entraînement)

**Durée conseillée : 1 h 30 — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants. On soignera les schémas et les applications numériques. Prendre $g = 9{,}81$ m·s⁻².

---

## Exercice 1 — Statique : étude d'une potence (10 points)

Une **potence murale** supporte une charge à l'aide d'un bras horizontal articulé au mur. On modélise le bras comme une barre rigide horizontale $OA$ de longueur $\ell = 1{,}2$ m, articulée en $O$ (liaison pivot avec le mur). Une charge de masse $m = 60$ kg est suspendue à l'extrémité $A$. Un câble incliné, accroché au mur en un point $B$ situé à la verticale au-dessus de $O$, retient le bras : le câble fait un angle $\alpha = 30°$ avec le bras horizontal et exerce sur le point $A$ une tension $\vec{T}$.

On néglige le poids propre du bras devant la charge.

```
   B
   |\
   | \  câble (tension T, angle α = 30° avec OA)
   |  \
   O---A ----> charge P
   |<-- ℓ = 1,2 m -->|
```

**Question 1.1 (1 point).** Calculer le **poids** $P$ de la charge suspendue en $A$.

**Question 1.2 (2 points).** Faire l'inventaire des actions mécaniques extérieures s'exerçant sur le bras $OA$ : les nommer et préciser leur point d'application.

**Question 1.3 (3 points).** On applique le **théorème du moment** par rapport à l'axe de l'articulation $O$. Écrire l'équation d'équilibre des moments en $O$ (on rappelle que le moment d'une force par rapport à un axe est le produit de son intensité par le bras de levier, et que le poids $\vec{P}$ et la composante verticale de $\vec{T}$ ont des effets opposés).

**Question 1.4 (2 points).** En déduire la valeur de la **tension** $T$ du câble. On utilisera le fait que seule la composante verticale $T\sin\alpha$ de la tension crée un moment par rapport à $O$ opposé à celui du poids.

**Question 1.5 (2 points).** La charge de rupture du câble annoncée par le fabricant est de $2000$ N. Le câble convient-il ? Justifier en calculant le coefficient de sécurité $s = \dfrac{\text{charge de rupture}}{T}$.

---

## Exercice 2 — Chaîne d'énergie et rendement d'un vélo à assistance électrique (10 points)

Un **vélo à assistance électrique** (VAE) comporte une batterie, un moteur électrique et une transmission entraînant la roue. On étudie une montée à vitesse constante.

**Données :**

- Masse totale (vélo + cycliste) : $m = 90$ kg.
- Pente : montée régulière de dénivelé $10\ \%$ (le vélo s'élève de $10$ m tous les $100$ m parcourus).
- Vitesse : $v = 5{,}0$ m·s⁻¹ (soit $18$ km·h⁻¹), constante.
- La batterie fournit une puissance électrique $P_{\text{elec}} = 350$ W.
- On néglige les frottements de l'air et du roulement (seul compte l'effort pour monter).
- Tension de la batterie : $36$ V.

**Question 2.1 (1 point).** À vitesse constante sur une pente, la puissance utile à fournir sert à **élever** l'ensemble. La vitesse verticale (vitesse d'ascension) vaut $v_{\text{vert}} = v \times 0{,}10$. Calculer $v_{\text{vert}}$.

**Question 2.2 (3 points).** Calculer la **puissance mécanique utile** $P_{\text{utile}}$ nécessaire pour élever l'ensemble à cette vitesse verticale ($P_{\text{utile}} = m \, g \, v_{\text{vert}}$).

**Question 2.3 (2 points).** Calculer le **rendement global** $\eta = \dfrac{P_{\text{utile}}}{P_{\text{elec}}}$ de la chaîne d'énergie (moteur + transmission). L'exprimer en pourcentage.

**Question 2.4 (2 points).** Calculer le **courant** $I$ débité par la batterie ($36$ V) pour fournir les $350$ W électriques.

**Question 2.5 (2 points).** La batterie stocke une énergie de $500$ Wh. En supposant que le moteur fonctionne en permanence à $350$ W, pendant combien de temps (en heures puis en minutes) la batterie peut-elle assurer l'assistance ? Commenter la cohérence avec l'autonomie annoncée d'un VAE.

---

## Corrigé

### Exercice 1

**1.1.** $P = m \, g = 60 \times 9{,}81 = 588{,}6 \approx 5{,}9 \times 10^{2}$ N.

**1.2.** Le bras $OA$ est soumis à :
- l'action de la charge en $A$ : le poids $\vec{P}$, vertical vers le bas, appliqué en $A$ (transmis par la suspension) ;
- la tension $\vec{T}$ du câble, appliquée en $A$, dirigée de $A$ vers $B$ (vers le haut et vers le mur), faisant $30°$ avec le bras ;
- l'action de l'articulation en $O$ (liaison pivot), appliquée en $O$ : cette réaction passe par l'axe $O$, son **moment par rapport à $O$ est donc nul**.

**1.3.** On écrit l'équilibre des moments par rapport à l'axe $O$. La réaction en $O$ a un moment nul. Le poids $\vec{P}$ (vertical, bras de levier $\ell$) tend à faire tourner le bras dans un sens ; la composante verticale de la tension $T\sin\alpha$ (bras de levier $\ell$ également, puisque appliquée en $A$) le fait tourner en sens opposé. La composante horizontale $T\cos\alpha$, dirigée le long de $OA$, passe par l'axe... non : elle est portée par la droite $OA$ qui contient $O$, son moment par rapport à $O$ est donc nul. À l'équilibre :

$$T\sin\alpha \times \ell - P \times \ell = 0.$$

**1.4.** On simplifie par $\ell$ :

$$T\sin\alpha = P \quad\Rightarrow\quad T = \dfrac{P}{\sin\alpha} = \dfrac{588{,}6}{\sin 30°} = \dfrac{588{,}6}{0{,}50} = 1177 \approx 1{,}2 \times 10^{3} \text{ N}.$$

**1.5.** Coefficient de sécurité : $s = \dfrac{2000}{1177} \approx 1{,}7$. La charge de rupture ($2000$ N) est supérieure à la tension de service ($1177$ N), donc le câble **résiste**. Toutefois un coefficient de sécurité de $1{,}7$ est modeste pour un dispositif suspendant une charge au-dessus d'une zone de passage ; on recommande en général $s \geq 4$ à $5$. Le câble convient mécaniquement mais offre une marge de sécurité **insuffisante** : il faudrait un câble plus résistant.

### Exercice 2

**2.1.** $v_{\text{vert}} = v \times 0{,}10 = 5{,}0 \times 0{,}10 = 0{,}50$ m·s⁻¹.

**2.2.** $P_{\text{utile}} = m \, g \, v_{\text{vert}} = 90 \times 9{,}81 \times 0{,}50 = 441{,}45 \approx 4{,}4 \times 10^{2}$ W.

**2.3.** $\eta = \dfrac{P_{\text{utile}}}{P_{\text{elec}}} = \dfrac{441{,}45}{350} \approx 1{,}26$… soit **126 %** : ce résultat, supérieur à $100\ \%$, est **impossible**. Il signifie que la seule batterie ne suffit pas : le cycliste **pédale aussi**. La puissance mécanique nécessaire ($441$ W) dépasse la puissance électrique disponible ($350$ W). L'assistance couvre au mieux $350$ W (moins les pertes) ; le complément est fourni par les jambes du cycliste. C'est le principe même du VAE : l'assistance **complète** l'effort humain, elle ne le remplace pas. (Si l'on demandait le rendement du moteur seul, il faudrait connaître la part réellement transmise à la roue ; ici la conclusion physique est que $\eta$ « batterie → utile » ne peut pas être défini ainsi car la batterie n'est pas la seule source.)

**2.4.** $I = \dfrac{P_{\text{elec}}}{U} = \dfrac{350}{36} \approx 9{,}7$ A.

**2.5.** Durée : $t = \dfrac{E}{P} = \dfrac{500}{350} \approx 1{,}43$ h, soit environ $1$ h $26$ min. En pratique le moteur ne débite pas $350$ W en continu (descentes, plat, coups de pédale du cycliste) : l'autonomie réelle est donc **bien supérieure** (souvent $2$ à $5$ h, soit plusieurs dizaines de kilomètres). L'ordre de grandeur d'environ $1$ h $30$ correspond au cas extrême d'une assistance maximale permanente.
