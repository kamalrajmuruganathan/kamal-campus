---
id: tale-si-resistance-des-structures
titre: "Résistance des structures"
voie: generale
niveau: terminale
parcours: si
matiere: si
programme: "Terminale — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Forces et actions mécaniques (Première SI)
  - Aires et unités
  - Proportionnalité
statut: brouillon
relu_par: null
---

# Résistance des structures

> Une structure (poutre, câble, châssis, pont…) doit **supporter des efforts sans
> se rompre ni se déformer excessivement**. La **résistance des matériaux (RDM)**
> permet de vérifier qu'une pièce tiendra : on calcule la **contrainte** qu'elle
> subit et on la compare à ce que le matériau peut supporter, avec une **marge de
> sécurité**.

---

# 1. Les sollicitations d'une structure

Selon la façon dont les efforts s'appliquent, une pièce subit une **sollicitation**
différente :

- **Traction** : la pièce est **tirée** dans le sens de sa longueur (ex. un
  câble d'ascenseur). Elle tend à s'allonger.
- **Compression** : la pièce est **poussée** (ex. un pilier de pont). Elle tend à
  se raccourcir (risque de flambage si elle est élancée).
- **Flexion** : la pièce **plie** sous une charge transversale (ex. une étagère
  chargée, une poutre de plancher).
- **Cisaillement** : deux forces opposées tendent à **trancher** la pièce (ex. un
  boulon, une goupille).
- **Torsion** : la pièce est **vrillée** autour de son axe (ex. un arbre de
  transmission).

---

# 2. La contrainte

La **contrainte** $\sigma$ (sigma) mesure l'effort **rapporté à la surface** qui
le subit. En traction ou compression simple :
$$\sigma = \frac{F}{S},$$

- $F$ : effort normal (en newtons, $\mathrm{N}$),
- $S$ : aire de la section (en $\mathrm{m^2}$),
- $\sigma$ : contrainte en **pascals** ($\mathrm{Pa}$), avec
  $1\ \mathrm{Pa} = 1\ \mathrm{N/m^2}$. En pratique on utilise le **mégapascal** :
  $1\ \mathrm{MPa} = 10^6\ \mathrm{Pa} = 1\ \mathrm{N/mm^2}$.

**Idée clé** : à effort égal, plus la section est **grande**, plus la contrainte
est **faible**. C'est pourquoi on épaissit une pièce trop sollicitée.

**Exemple de calcul.** Un câble de section $S = 20\ \mathrm{mm^2}$ supporte
$F = 4000\ \mathrm{N}$. La contrainte vaut
$$\sigma = \frac{F}{S} = \frac{4000}{20} = 200\ \mathrm{N/mm^2} = 200\ \mathrm{MPa}.$$

---

# 3. Déformation et loi de Hooke

Sous l'effort, la pièce se déforme. En traction, l'**allongement relatif**
(déformation) est :
$$\varepsilon = \frac{\Delta L}{L_0},$$
où $\Delta L$ est l'allongement et $L_0$ la longueur initiale. $\varepsilon$ est
**sans unité**.

Dans le domaine **élastique** (la pièce revient à sa forme initiale quand on
relâche), la contrainte est **proportionnelle** à la déformation : c'est la **loi
de Hooke** :
$$\sigma = E \times \varepsilon.$$

$E$ est le **module de Young** (ou module d'élasticité), en MPa ou GPa. Il traduit
la **rigidité** du matériau : plus $E$ est grand, moins le matériau se déforme.
(Ex. acier $\approx 210\ \mathrm{GPa}$, aluminium $\approx 70\ \mathrm{GPa}$.)

**Exemple.** Un acier ($E = 200\ 000\ \mathrm{MPa}$) subit une déformation
$\varepsilon = 0{,}001$. La contrainte vaut $\sigma = 200\,000 \times 0{,}001 =
200\ \mathrm{MPa}$.

---

# 4. Limite élastique et coefficient de sécurité

Chaque matériau a une **limite élastique** $R_e$ : au-delà, il se déforme de façon
**permanente** (déformation plastique), puis se rompt. Pour rester en sécurité,
l'ingénieur impose que la contrainte de travail reste **bien en dessous** de cette
limite, en appliquant un **coefficient de sécurité** $s$ :
$$\sigma_{\text{admissible}} = \frac{R_e}{s}.$$

Une structure est **validée** si la contrainte réelle respecte :
$$\sigma \le \sigma_{\text{admissible}} = \frac{R_e}{s}.$$

**Exemple de calcul.** Un acier a $R_e = 300\ \mathrm{MPa}$ ; on choisit un
coefficient de sécurité $s = 3$. La contrainte admissible vaut
$$\sigma_{\text{admissible}} = \frac{300}{3} = 100\ \mathrm{MPa}.$$
Si la pièce subit $\sigma = 80\ \mathrm{MPa}$, elle est **validée** (80 ≤ 100). Si
elle subit $120\ \mathrm{MPa}$, elle est **refusée** (il faut augmenter la
section).

---

# 5. Choisir et dimensionner

Dimensionner une pièce, c'est déterminer sa **section minimale** pour tenir un
effort donné :
$$S_{\min} = \frac{F}{\sigma_{\text{admissible}}}.$$

Le choix du **matériau** dépend aussi de la **masse**, du **coût**, de la
**tenue à la corrosion**, etc. On compare souvent les matériaux par leur rapport
**résistance / masse** (important en aéronautique).

**Exemple.** Pour tenir $F = 5000\ \mathrm{N}$ avec
$\sigma_{\text{admissible}} = 100\ \mathrm{MPa} = 100\ \mathrm{N/mm^2}$ :
$$S_{\min} = \frac{5000}{100} = 50\ \mathrm{mm^2}.$$

---

# Ce qu'il faut retenir

- Cinq sollicitations : **traction, compression, flexion, cisaillement, torsion**.
- **Contrainte** : $\sigma = \dfrac{F}{S}$, en pascals (1 MPa = 1 N/mm²) ; plus la
  section est grande, plus $\sigma$ est faible.
- **Déformation** $\varepsilon = \dfrac{\Delta L}{L_0}$ (sans unité) ; loi de
  Hooke dans le domaine élastique : $\sigma = E\,\varepsilon$.
- Le **module de Young** $E$ mesure la rigidité (grand $E$ = peu déformable).
- **Sécurité** : $\sigma_{\text{admissible}} = \dfrac{R_e}{s}$ ; structure validée
  si $\sigma \le \sigma_{\text{admissible}}$.
- **Section minimale** : $S_{\min} = \dfrac{F}{\sigma_{\text{admissible}}}$.

# Les erreurs à éviter

- Confondre **force** (N) et **contrainte** (N/mm² = MPa) : la contrainte tient
  compte de la surface.
- Oublier la cohérence des unités : mélanger mm² et m² fausse tout le calcul.
- Confondre **limite élastique** $R_e$ et **contrainte admissible** (celle-ci est
  $R_e$ divisée par le coefficient de sécurité).
- Croire qu'un coefficient de sécurité de 3 signifie « 3 fois plus solide » sans
  vérifier la contrainte réelle par le calcul.
