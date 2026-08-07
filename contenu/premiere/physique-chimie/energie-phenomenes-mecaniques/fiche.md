---
id: 1spe-pc-energie-mecanique
titre: "Aspects énergétiques des phénomènes mécaniques"
voie: generale
niveau: premiere
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019"
theme: "L'énergie : conversions et transferts"
duree_lecture_min: 13
prerequis:
  - Mouvement et interactions (Seconde)
  - Énergie électrique (Première)
statut: brouillon
relu_par: null
---

# Aspects énergétiques des phénomènes mécaniques

> L'approche énergétique évite souvent de résoudre les équations du mouvement. Une bille qui
> dévale une piste : plutôt que de suivre sa trajectoire, on compare son énergie au départ et
> à l'arrivée. Beaucoup plus court, et souvent plus sûr.

---

## 1. Travail d'une force

$$\boxed{W_{\mathrm{AB}}\!\left(\vec{F}\right) = \vec{F} \cdot \overrightarrow{\mathrm{AB}} = F \times \mathrm{AB} \times \cos\alpha}$$

où $\alpha$ est l'angle entre la force et le déplacement. Le travail s'exprime en **joules**.

| Signe de $W$ | Nom | Effet sur la vitesse |
|---|---|---|
| $W > 0$ | travail **moteur** | accélère |
| $W < 0$ | travail **résistant** | freine |
| $W = 0$ | force ne travaille pas | aucun effet |

> ⚠️ **Une force perpendiculaire au déplacement ne travaille pas.** Le poids d'un objet
> déplacé horizontalement effectue un travail **nul** — ce qui surprend souvent.

### Travail du poids

$$\boxed{W\!\left(\vec{P}\right) = m\,g\,(z_\mathrm{A} - z_\mathrm{B})}$$

> **Propriété remarquable** : il ne dépend **que de la différence d'altitude**, pas du chemin
> suivi. Monter par un escalier ou par une rampe demande le même travail contre le poids.

---

## 2. Les énergies mécaniques

### Énergie cinétique

$$\boxed{E_c = \frac{1}{2}\,m\,v^2}$$

> **La dépendance en $v^2$** : doubler la vitesse **quadruple** l'énergie cinétique. C'est
> l'argument physique central de la sécurité routière — et une question de bac récurrente.

### Énergie potentielle de pesanteur

$$\boxed{E_{pp} = m\,g\,z}$$

Elle dépend de l'altitude $z$, mesurée depuis une **origine choisie librement**. Seules les
**variations** ont un sens physique.

### Énergie mécanique

$$\boxed{E_m = E_c + E_{pp}}$$

---

## 3. Conservation de l'énergie mécanique

### Sans frottements

$$E_m = \text{constante}$$

L'énergie se convertit d'une forme à l'autre : en descendant, $E_{pp}$ diminue et $E_c$
augmente d'autant.

> **Exemple.** Une bille lâchée sans vitesse d'une hauteur $h$ :
> $$mgh = \frac{1}{2}mv^2 \quad\Longrightarrow\quad v = \sqrt{2gh}$$
> **La masse se simplifie** : tous les corps arrivent à la même vitesse, indépendamment de
> leur masse.

### Avec frottements

$$\Delta E_m = W\!\left(\vec{f}\right) < 0$$

L'énergie mécanique **diminue** ; la différence est dissipée sous forme de chaleur.

---

## 4. Théorème de l'énergie cinétique

$$\boxed{\Delta E_c = \sum W\!\left(\vec{F}\right)}$$

La variation d'énergie cinétique est égale à la **somme des travaux** de toutes les forces
appliquées.

> **Sa force** : il relie directement les forces à la vitesse, sans passer par l'accélération
> ni le temps. Idéal quand l'énoncé donne des positions et demande une vitesse.

---

## 5. Méthode — choisir son approche

| L'énoncé donne… et demande… | Utiliser |
|---|---|
| positions et vitesses, sans frottements | conservation de $E_m$ |
| forces et distances, une vitesse | théorème de l'énergie cinétique |
| une durée ou une accélération | les lois du mouvement |

> **Le réflexe** : s'il n'est question ni de temps ni d'accélération, l'approche énergétique
> est presque toujours la plus rapide.

---

## 6. À retenir absolument

| | |
|---|---|
| Travail | $W = F \times d \times \cos\alpha$, en joules |
| Force $\perp$ déplacement | $W = 0$ |
| Travail du poids | $mg(z_\mathrm{A} - z_\mathrm{B})$, indépendant du chemin |
| Énergie cinétique | $E_c = \dfrac12 mv^2$ |
| Énergie potentielle | $E_{pp} = mgz$ |
| Énergie mécanique | $E_m = E_c + E_{pp}$ |
| Sans frottements | $E_m$ constante |
| Théorème | $\Delta E_c = \sum W$ |

---

## 7. Les erreurs qui coûtent des points

1. **Écrire $E_c = \dfrac12 mv$** en oubliant le carré.
2. **Oublier le facteur $\dfrac12$.**
3. **Croire qu'une force perpendiculaire au déplacement travaille.** Son travail est nul.
4. **Se tromper de signe dans le travail du poids** : c'est $z_\mathrm{A} - z_\mathrm{B}$,
   donc positif à la descente.
5. **Appliquer la conservation de $E_m$ en présence de frottements.**
6. **Utiliser des km·h⁻¹ dans $E_c$** : la vitesse doit être en m·s⁻¹.
7. **Croire que la masse influence la vitesse d'arrivée** en chute libre : elle se simplifie.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « L'énergie : conversions
et transferts », section « Aspects énergétiques des phénomènes mécaniques », ligne 2527 du
.txt extrait ; « Énergie cinétique, énergie potentielle (dépendant de la position) » ligne
2557 ; « Énergie mécanique » ligne 2611).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le théorème de l'énergie cinétique est-il exigible en première, ou introduit en terminale ?
  Point de périmètre important — je l'ai inclus car il est classique en première, mais à
  vérifier.
- Le programme mentionne « énergie potentielle (dépendant de la position) » : cela inclut-il
  l'énergie potentielle élastique d'un ressort, ou seulement la pesanteur ?
- La puissance mécanique (P = W/Δt) est-elle au programme de cette section ?
- Les capacités expérimentales attendues (étude d'une chute, exploitation d'une vidéo).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
