---
id: 2nde-pc-mouvement-interactions
titre: "Mouvement et interactions"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019"
theme: "Mouvement et interactions"
duree_lecture_min: 13
prerequis:
  - Vitesse et mouvement (cycle 4)
  - Vecteurs (Seconde, maths)
statut: brouillon
relu_par: null
---

# Mouvement et interactions

> Décrire un mouvement, puis l'**expliquer** par les forces. Le point de départ est toujours le
> même, et il est trop souvent oublié : **préciser le référentiel**.

---

## 1. Le référentiel — première étape obligatoire

Un mouvement n'existe **que par rapport à un référentiel**. Un passager assis dans un train est
immobile dans le référentiel du train, et en mouvement dans celui du sol.

| Référentiel | Usage |
|---|---|
| **Terrestre** | mouvements à la surface de la Terre |
| **Géocentrique** | satellites, Lune |
| **Héliocentrique** | planètes autour du Soleil |

> ⚠️ **Toute description de mouvement doit commencer par nommer le référentiel.** Une réponse
> qui l'omet est incomplète, même si le reste est juste.

---

## 2. Décrire un mouvement

### Nature de la trajectoire

| Trajectoire | Mouvement |
|---|---|
| Droite | rectiligne |
| Cercle | circulaire |
| Autre | curviligne |

### Évolution de la vitesse

**uniforme** (vitesse constante) · **accéléré** (vitesse croissante) · **décéléré** (vitesse
décroissante)

> On combine les deux : « rectiligne uniforme », « circulaire uniforme »…

### Vitesse moyenne

$$\boxed{v = \frac{d}{\Delta t}} \qquad \text{en m·s}^{-1}$$

> **Conversion utile** : $1$ m·s⁻¹ $= 3{,}6$ km·h⁻¹.
> Pour passer des km·h⁻¹ aux m·s⁻¹, on **divise** par $3{,}6$.

### Le vecteur vitesse

La vitesse est un **vecteur** : direction (tangente à la trajectoire), sens (celui du
mouvement), valeur.

> **Conséquence importante** : dans un mouvement **circulaire uniforme**, la valeur de la
> vitesse est constante mais le **vecteur** vitesse change en permanence, puisque sa direction
> tourne. Le mouvement n'est donc pas « sans changement ».

---

## 3. Les forces

Une **force** modélise une action mécanique. C'est un vecteur, caractérisé par son point
d'application, sa direction, son sens et sa valeur (en **newtons**, N).

### Le poids

$$\boxed{P = m \times g}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $P$ | poids | N |
| $m$ | masse | kg |
| $g$ | intensité de pesanteur | N·kg⁻¹ ($\approx 9{,}8$ sur Terre) |

> ⚠️ **Le poids n'est pas la masse.** La masse (en kg) est la même partout ; le poids (en N)
> dépend du lieu. Sur la Lune, $g \approx 1{,}6$ N·kg⁻¹ : la masse est inchangée, le poids
> divisé par six.

### Force d'interaction gravitationnelle

$$\boxed{F = G\,\frac{m_\mathrm{A} \times m_\mathrm{B}}{d^2}}$$

avec $G = 6{,}67 \times 10^{-11}$ N·m²·kg⁻².

> **La dépendance en $d^2$** : doubler la distance divise la force par **quatre**, pas par deux.
> C'est le piège classique.

Cette force est **toujours attractive**, et les deux corps la subissent avec la même valeur.

---

## 4. Le principe d'inertie

### Énoncé

Dans un référentiel galiléen, si les forces qui s'exercent sur un corps se **compensent** (ou
s'il n'y en a aucune), alors ce corps est **soit immobile, soit en mouvement rectiligne
uniforme** — et réciproquement.

### Ce qu'il permet de faire

| On observe | On en déduit |
|---|---|
| Immobile ou rectiligne uniforme | les forces se compensent |
| Toute autre situation | les forces **ne** se compensent **pas** |

> ⚠️ **L'erreur de fond** : croire qu'un mouvement nécessite une force pour se maintenir.
> Une force est nécessaire pour **changer** le mouvement, pas pour l'entretenir. Un objet
> lancé dans l'espace continue indéfiniment sans moteur.

> **Exemple.** Un parachutiste à vitesse constante : son poids est exactement compensé par
> les frottements de l'air. Les forces se compensent bien qu'il tombe.

---

## 5. À retenir absolument

| | |
|---|---|
| Première étape | préciser le **référentiel** |
| Vitesse | $v = \dfrac{d}{\Delta t}$ en m·s⁻¹ |
| Conversion | diviser par $3{,}6$ pour passer des km·h⁻¹ aux m·s⁻¹ |
| Poids | $P = mg$, en newtons |
| Gravitation | $F = G\dfrac{m_\mathrm{A}m_\mathrm{B}}{d^2}$ |
| Principe d'inertie | forces compensées $\iff$ immobile ou rectiligne uniforme |

---

## 6. Les erreurs qui coûtent des points

1. **Oublier de préciser le référentiel.**
2. **Confondre poids et masse** : kg pour la masse, N pour le poids.
3. **Croire qu'une force est nécessaire pour maintenir un mouvement.**
4. **Diviser la force gravitationnelle par $2$** quand la distance double : c'est par $4$.
5. **Oublier de convertir les km·h⁻¹** en m·s⁻¹ avant un calcul.
6. **Dire qu'un mouvement circulaire uniforme a un vecteur vitesse constant** : sa direction
   change en permanence.
7. **Confondre « les forces se compensent » et « il n'y a pas de force »** : ce sont deux
   situations différentes qui produisent le même effet.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de seconde générale et technologique,
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc2nde.pdf, thème « Mouvement et
interactions », ligne 1877 du .txt extrait ; « Mouvement rectiligne » ligne 2084).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La valeur de g à retenir : 9,8 ou 9,81 N·kg⁻¹ ? Vérifier ce que le programme et les sujets
  utilisent.
- La notion de référentiel galiléen est-elle explicitement au programme de seconde, ou
  introduite seulement en première ? Je l'ai mentionnée dans l'énoncé du principe d'inertie.
- Les frottements sont-ils modélisés quantitativement en seconde ?
- La troisième loi de Newton (actions réciproques) est-elle au programme de seconde ?
  Je l'ai seulement évoquée pour la gravitation.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
