---
id: tale-si-energie-dans-les-systemes
titre: "L'énergie dans les systèmes"
voie: generale
niveau: terminale
parcours: si
matiere: si
programme: "Terminale — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Grandeurs électriques (tension, courant)
  - Puissance et énergie (Première SI)
  - Mouvement et forces (Physique)
statut: brouillon
relu_par: null
---

# L'énergie dans les systèmes

> Tout système technique **reçoit**, **transforme**, **stocke** puis **restitue**
> de l'énergie. L'ingénieur analyse cette chaîne énergétique pour choisir les
> composants, dimensionner une source et surtout **améliorer le rendement**, car
> une partie de l'énergie est toujours perdue (le plus souvent en chaleur).

---

# 1. Énergie, travail et puissance

- L'**énergie** $E$ se mesure en **joules** ($\mathrm{J}$). C'est la capacité à
  produire une action (mettre en mouvement, chauffer, éclairer…).
- La **puissance** $P$ est l'énergie **par unité de temps**, en **watts**
  ($\mathrm{W}$) :
  $$P = \frac{E}{t}, \qquad \text{donc} \qquad E = P \times t.$$
- $1\ \mathrm{W} = 1\ \mathrm{J\cdot s^{-1}}$. Une unité usuelle d'énergie est le
  **wattheure** : $1\ \mathrm{Wh} = 3600\ \mathrm{J}$.

**Exemple.** Un moteur de $500\ \mathrm{W}$ fonctionne pendant $2\ \mathrm{h}$. Il
consomme $E = P \times t = 500 \times 2 = 1000\ \mathrm{Wh} = 1\ \mathrm{kWh}$.

---

# 2. Puissances mécanique et électrique

## Puissance électrique

$$P = U \times I,$$
avec $U$ la tension (volts, $\mathrm{V}$) et $I$ l'intensité (ampères,
$\mathrm{A}$). En courant continu, c'est direct.

**Exemple.** Sous $U = 12\ \mathrm{V}$ avec $I = 5\ \mathrm{A}$ :
$P = 12 \times 5 = 60\ \mathrm{W}$.

## Puissance mécanique

- En **translation** : $P = F \times v$ (force × vitesse).
- En **rotation** : $P = \mathcal{C} \times \omega$ (couple × vitesse angulaire),
  avec $\mathcal{C}$ en $\mathrm{N\cdot m}$ et $\omega$ en $\mathrm{rad\cdot
  s^{-1}}$.

**Exemple.** Un moteur fournit un couple $\mathcal{C} = 3\ \mathrm{N\cdot m}$ à
$\omega = 100\ \mathrm{rad\cdot s^{-1}}$ :
$P = 3 \times 100 = 300\ \mathrm{W}$.

---

# 3. La chaîne d'énergie

Le programme structure un système technique en **chaîne d'énergie**, articulée
avec la chaîne d'information :

```
   SOURCE → ALIMENTER → DISTRIBUER → CONVERTIR → TRANSMETTRE → agir/sortie
 (secteur,   (réguler)   (relais,     (moteur,     (réducteur,
  batterie…)             variateur)   vérin…)      poulie…)
```

- **Alimenter** : fournir l'énergie utile (secteur, batterie, air comprimé).
- **Distribuer** : orienter/moduler l'énergie vers l'actionneur (relais,
  variateur, distributeur).
- **Convertir** : transformer une forme d'énergie en une autre (le moteur
  convertit électrique → mécanique).
- **Transmettre** : adapter et transporter l'énergie mécanique (engrenages,
  courroies, réducteurs).

---

# 4. Le rendement

À chaque conversion, une part de l'énergie est **perdue** (chaleur, frottements,
bruit). Le **rendement** $\eta$ compare l'énergie **utile** en sortie à l'énergie
**absorbée** en entrée :
$$\eta = \frac{P_{\text{utile}}}{P_{\text{absorbée}}} = \frac{E_{\text{utile}}}{E_{\text{absorbée}}}.$$

- $\eta$ est un nombre **sans unité**, compris entre 0 et 1 (souvent exprimé en
  %).
- $\eta$ est **toujours inférieur à 1** : on ne crée pas d'énergie (conservation),
  et il y a toujours des pertes.

**Exemple de calcul.** Un moteur absorbe $P_{\text{abs}} = 500\ \mathrm{W}$ et
fournit $P_{\text{utile}} = 400\ \mathrm{W}$. Son rendement vaut
$$\eta = \frac{400}{500} = 0{,}8 = 80\ \%.$$
Les $100\ \mathrm{W}$ manquants sont dissipés (chaleur, frottements).

## Rendement d'une chaîne

Pour plusieurs conversions en série, les rendements se **multiplient** :
$$\eta_{\text{total}} = \eta_1 \times \eta_2 \times \dots$$

**Exemple.** Une chaîne moteur ($\eta_1 = 0{,}9$) + réducteur ($\eta_2 = 0{,}8$) a
un rendement $\eta = 0{,}9 \times 0{,}8 = 0{,}72 = 72\ \%$.

---

# 5. Stocker l'énergie

Un système peut **stocker** de l'énergie pour la restituer plus tard :

- **Batterie / accumulateur** : énergie chimique → électrique. Capacité souvent en
  $\mathrm{A\cdot h}$ ; énergie $E = U \times Q$ (avec $Q$ en $\mathrm{A\cdot h}$).
- **Condensateur** : stocke une petite énergie électrique, restituée très vite.
- **Volant d'inertie / ressort** : stocke de l'énergie mécanique (cinétique ou
  élastique).

**Énergie cinétique** d'un solide en translation :
$E_c = \tfrac{1}{2}\,m\,v^2$ (en $\mathrm{J}$, avec $m$ en kg et $v$ en
$\mathrm{m\cdot s^{-1}}$).

**Exemple.** Une masse de $2\ \mathrm{kg}$ à $3\ \mathrm{m\cdot s^{-1}}$ possède
$E_c = \tfrac12 \times 2 \times 3^2 = 9\ \mathrm{J}$.

---

# Ce qu'il faut retenir

- **Énergie** en joules (J), **puissance** en watts (W) ; $E = P \times t$ ;
  $1\ \mathrm{Wh} = 3600\ \mathrm{J}$.
- Puissance **électrique** $P = U I$ ; **mécanique** $P = F v$ (translation) ou
  $P = \mathcal{C}\,\omega$ (rotation).
- Chaîne d'énergie : **alimenter → distribuer → convertir → transmettre**.
- **Rendement** $\eta = \dfrac{P_{\text{utile}}}{P_{\text{absorbée}}}$, sans
  unité, **toujours < 1**.
- Rendements en série : ils se **multiplient**.
- Énergie cinétique : $E_c = \tfrac12 m v^2$.

# Les erreurs à éviter

- Confondre **énergie** (J, capacité totale) et **puissance** (W, débit
  d'énergie).
- Croire qu'un rendement peut dépasser 100 % : impossible, il y a toujours des
  pertes.
- Additionner les rendements d'une chaîne au lieu de les **multiplier**.
- Oublier les unités cohérentes : $\omega$ en rad/s (pas en tr/min) pour
  $P = \mathcal{C}\,\omega$.
