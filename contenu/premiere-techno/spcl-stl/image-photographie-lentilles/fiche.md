---
id: 1stl-spcl-image-photographie-lentilles
titre: "Image : photographie et lentilles"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 16
prerequis:
  - Image d'un objet à travers une lentille convergente (Seconde)
  - Propagation rectiligne de la lumière, rayon lumineux (Seconde)
  - Image : couleur et vision (SPCL, 1re) — modèle optique de l'œil
  - Grandeurs, unités et puissances de 10 (Seconde)
statut: brouillon
relu_par: null
---

# Image : photographie et lentilles

> Comment un appareil photo, un œil ou un simple carton percé fabriquent-ils une **image** ?
> Ce chapitre part du dispositif le plus rudimentaire — la **chambre noire** — puis introduit
> la **lentille mince convergente**, l'outil optique central. Tu apprendras à prévoir **où** se
> forme l'image, sa **taille** et son **sens**, grâce à **deux relations** : la conjugaison de
> **Descartes** et le **grandissement**. Le fil rouge et le vrai piège : ce sont des **mesures
> algébriques** — les **signes** portent tout le sens physique.

---

## 1. La chambre noire et le sténopé

Une **chambre noire** est une boîte fermée, opaque, percée d'un **petit trou** (le **sténopé**,
*pinhole* en anglais) sur une face. Sur la face opposée, qui sert d'**écran**, se forme une
**image réelle** de la scène éclairée placée devant le trou.

Le principe repose uniquement sur la **propagation rectiligne de la lumière** : chaque point de
l'objet envoie un rayon qui traverse le trou en ligne droite et vient marquer un point sur
l'écran. Le haut de l'objet se projette **en bas** de l'écran : l'image est **réelle** et
**renversée** (retournée haut-bas *et* gauche-droite).

Avec le théorème de Thalès, la taille de l'image se déduit des distances :

$$\boxed{\dfrac{\overline{A'B'}}{\overline{AB}} = \dfrac{d'}{d}}$$

où $d$ est la distance objet–trou et $d'$ la distance trou–écran (profondeur de la boîte).

> **Exemple.** Un objet de $\overline{AB} = 20\ \text{cm}$ est à $d = 2{,}0\ \text{m}$ du trou.
> La boîte a une profondeur $d' = 10\ \text{cm} = 0{,}10\ \text{m}$. La hauteur de l'image vaut
> $\overline{A'B'} = \overline{AB}\times \dfrac{d'}{d} = 0{,}20 \times \dfrac{0{,}10}{2{,}0} = 1{,}0\ \text{cm}$.
> L'image est **10 fois plus petite** et renversée.

> ⚠️ **Compromis du sténopé.** Un trou **plus petit** donne une image plus **nette** mais plus
> **sombre** (il laisse passer peu de lumière). Un trou **plus grand** est plus **lumineux**
> mais **flou**. C'est ce compromis que la **lentille** vient résoudre : elle concentre beaucoup
> de lumière **tout en** restant nette.

---

## 2. La lentille mince convergente

Une **lentille** est un bloc transparent (verre, plastique) à faces courbes. Elle est
**convergente** quand elle est plus **épaisse au centre** qu'au bord : elle fait **converger** un
faisceau de rayons parallèles vers un point. On la dit **mince** quand son épaisseur est
négligeable devant les distances mises en jeu — on la représente alors par un simple trait
fléché aux deux bouts (les flèches vers l'extérieur = convergente).

Éléments caractéristiques, tous sur l'**axe optique** (l'axe de symétrie horizontal) :

| Élément | Symbole | Définition |
|---|---|---|
| **Centre optique** | $O$ | centre de la lentille ; tout rayon passant par $O$ n'est **pas dévié** |
| **Foyer image** | $F'$ | point où convergent les rayons entrés **parallèles** à l'axe |
| **Foyer objet** | $F$ | point d'où partent les rayons qui ressortent **parallèles** à l'axe |
| **Distance focale** | $f'$ | $f' = \overline{OF'}$ ; pour une lentille convergente, $f' > 0$ |

Les deux foyers sont **symétriques** par rapport à $O$ : $\overline{OF} = -\,\overline{OF'} = -f'$.

**Les trois rayons particuliers** (pour construire une image) :

1. Un rayon **parallèle à l'axe** ressort en passant par le foyer image $F'$.
2. Un rayon passant par le **centre optique** $O$ n'est **pas dévié**.
3. Un rayon passant par le **foyer objet** $F$ ressort **parallèle à l'axe**.

> **Exemple.** Une lentille de distance focale $f' = 5{,}0\ \text{cm}$. Un faisceau de rayons du
> Soleil (venu « de l'infini », donc **parallèle** à l'axe) converge en un point situé à
> $5{,}0\ \text{cm}$ derrière la lentille : c'est le **foyer image** $F'$. C'est ainsi qu'une
> loupe peut enflammer une feuille — elle concentre la lumière solaire en $F'$.

---

## 3. La vergence

La **vergence** $V$ mesure le pouvoir de convergence d'une lentille : plus elle est **bombée**,
plus elle converge, plus $f'$ est **court**, plus $V$ est **grande**.

$$\boxed{V = \dfrac{1}{f'}}$$

- $f'$ en **mètres** ($\text{m}$), $V$ en **dioptries** ($\delta$, soit des $\text{m}^{-1}$).
- Lentille **convergente** : $f' > 0$ donc $V > 0$.

> **Exemple.** $f' = 5{,}0\ \text{cm} = 0{,}050\ \text{m}$ donne
> $V = \dfrac{1}{0{,}050} = 20\ \delta$. Inversement, une lentille de $V = 8{,}0\ \delta$ a une
> distance focale $f' = \dfrac{1}{V} = \dfrac{1}{8{,}0} = 0{,}125\ \text{m} = 12{,}5\ \text{cm}$.

> ⚠️ **Le piège d'unité n°1.** Pour obtenir des **dioptries**, $f'$ doit être en **mètres**. Si
> tu poses $f' = 5\ \text{cm}$ dans $1/f'$, tu obtiens $0{,}2$… qui n'est **pas** $0{,}2\ \delta$.
> Convertis d'abord : $5\ \text{cm} = 0{,}05\ \text{m}$.

---

## 4. La focométrie : mesurer $f'$

**Focométrie** = ensemble des méthodes pour **déterminer la distance focale** d'une lentille
convergente. Trois approches courantes en TP :

**a) Objet à l'infini.** On vise un objet très **lointain** (fenêtre au fond de la salle,
Soleil). Ses rayons arrivent quasi **parallèles** : l'image nette se forme dans le **plan
focal image**. On mesure alors directement $f' = \overline{OF'}$ = distance lentille–écran.

**b) Méthode de conjugaison (Bessel simplifiée).** On forme l'image nette d'un objet à distance
finie, on mesure $\overline{OA}$ et $\overline{OA'}$, et on **calcule** $f'$ avec la relation de
conjugaison (section 6).

**c) Méthode d'autocollimation.** On accole un **miroir** plan derrière la lentille et on
déplace l'objet jusqu'à ce que son image se forme **dans son propre plan**, nette et
renversée : l'objet est alors **dans le plan focal objet**, et la distance objet–lentille vaut
exactement $f'$.

> **Exemple.** Objet lointain : l'image nette d'un arbre se forme sur un écran situé à
> $10{,}0\ \text{cm}$ de la lentille. Alors $f' \approx 10{,}0\ \text{cm} = 0{,}100\ \text{m}$,
> soit $V \approx 10\ \delta$.

---

## 5. Les mesures algébriques : la convention des signes

C'est **le** point à maîtriser. Sur l'axe optique, on **oriente** l'axe dans le **sens de
propagation de la lumière** (de la gauche vers la droite). Toute distance devient une **mesure
algébrique**, notée avec une barre : $\overline{OA}$, $\overline{OA'}$, $\overline{AB}$…

| Grandeur | Signe | Interprétation |
|---|---|---|
| $\overline{OA}$ | **négatif** ($<0$) | objet **réel**, placé **avant** (à gauche de) la lentille |
| $\overline{OA'} > 0$ | positif | image **réelle**, **après** (à droite de) la lentille, sur un écran |
| $\overline{OA'} < 0$ | négatif | image **virtuelle**, du **même côté** que l'objet |
| $\overline{AB} > 0$ | positif | flèche objet dirigée **vers le haut** |
| $\overline{A'B'} > 0 / <0$ | selon | image **droite** ($>0$) ou **renversée** ($<0$) |

> ⚠️ Un **objet réel** que tu poses devant la lentille a **toujours** $\overline{OA} < 0$. Si tu
> écris $\overline{OA} = +30\ \text{cm}$ « parce que c'est une distance », toute la suite est
> fausse. La barre veut dire : **compte le signe**.

---

## 6. La relation de conjugaison de Descartes

Elle relie la position de l'image à celle de l'objet, avec le centre optique $O$ comme origine :

$$\boxed{\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'} = V}$$

« Conjuguer » un objet, c'est trouver **où** se forme son image. Toutes les longueurs sont des
**mesures algébriques** exprimées dans la **même unité** (idéalement le **mètre**).

**Méthode pour placer l'image :**
1. Repère l'objet réel : $\overline{OA} < 0$ (compte le signe).
2. Isole $\dfrac{1}{\overline{OA'}} = \dfrac{1}{f'} + \dfrac{1}{\overline{OA}}$.
3. Calcule, puis **inverse** pour obtenir $\overline{OA'}$.
4. **Lis le signe** : $\overline{OA'} > 0$ → image réelle ; $< 0$ → image virtuelle.

> **Exemple (image réelle).** Lentille $f' = 10\ \text{cm} = 0{,}10\ \text{m}$, objet réel à
> $30\ \text{cm}$ devant : $\overline{OA} = -0{,}30\ \text{m}$.
> $$\dfrac{1}{\overline{OA'}} = \dfrac{1}{0{,}10} + \dfrac{1}{-0{,}30} = 10 - 3{,}33 = 6{,}67\ \text{m}^{-1}$$
> $$\overline{OA'} = \dfrac{1}{6{,}67} = +0{,}15\ \text{m} = +15\ \text{cm}.$$
> $\overline{OA'} > 0$ : image **réelle**, à $15\ \text{cm}$ **derrière** la lentille — on peut
> la recueillir sur un écran.

> ⚠️ La relation contient un **signe moins** : c'est $\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}}$,
> **pas** une somme. Comme $\overline{OA}$ est négatif, $-\dfrac{1}{\overline{OA}}$ redevient
> positif dans le calcul — mais seulement si tu as gardé le signe de $\overline{OA}$ !

---

## 7. Le grandissement

Le **grandissement** $\gamma$ (gamma) compare la taille de l'image à celle de l'objet :

$$\boxed{\gamma = \dfrac{\overline{A'B'}}{\overline{AB}} = \dfrac{\overline{OA'}}{\overline{OA}}}$$

C'est un **nombre sans unité**, dont le **signe** et la **valeur absolue** se lisent :

| Lecture de $\gamma$ | Conclusion sur l'image |
|---|---|
| $\gamma > 0$ | image **droite** (même sens que l'objet) |
| $\gamma < 0$ | image **renversée** |
| $|\gamma| > 1$ | image **agrandie** |
| $|\gamma| < 1$ | image **réduite** |
| $|\gamma| = 1$ | image de **même taille** |

> **Exemple (suite du §6).** Avec $\overline{OA'} = +0{,}15\ \text{m}$ et
> $\overline{OA} = -0{,}30\ \text{m}$ :
> $$\gamma = \dfrac{0{,}15}{-0{,}30} = -0{,}50.$$
> $\gamma < 0$ → image **renversée** ; $|\gamma| = 0{,}5 < 1$ → **deux fois plus petite**. Un
> objet de $\overline{AB} = 4{,}0\ \text{cm}$ donne $\overline{A'B'} = \gamma \times \overline{AB} = -2{,}0\ \text{cm}$
> (le signe $-$ confirme le renversement).

---

## 8. Image réelle ou virtuelle : le rôle de la position de l'objet

Pour une lentille **convergente**, la nature de l'image dépend de la place de l'objet réel par
rapport au foyer objet $F$ :

| Position de l'objet réel | Image | Sens | Taille |
|---|---|---|---|
| Au-delà de $2F$ (loin) | **réelle** (entre $F'$ et $2F'$) | renversée | réduite |
| En $2F$ exactement | **réelle** (en $2F'$) | renversée | même taille |
| Entre $F$ et $2F$ | **réelle** (au-delà de $2F'$) | renversée | agrandie |
| En $F$ | **rejetée à l'infini** | — | — |
| Entre $O$ et $F$ | **virtuelle** (même côté) | droite | agrandie → **loupe** |

- Une **image réelle** peut être recueillie sur un **écran** ($\overline{OA'} > 0$) : c'est le
  cas de l'appareil photo, du sténopé, de l'œil (image sur la rétine).
- Une **image virtuelle** ne peut **pas** être projetée ; on ne la voit qu'**à travers** la
  lentille ($\overline{OA'} < 0$) : c'est le cas de la loupe.

> **Exemple (appareil photo).** L'objectif est une lentille convergente ; le capteur est
> l'écran. L'objet (loin, au-delà de $2F$) donne une image **réelle, renversée, réduite** sur le
> capteur. Pour faire la **mise au point**, on **déplace l'objectif** afin que $\overline{OA'}$
> tombe pile sur le capteur — exactement ce que prévoit la relation de conjugaison.

---

## 9. Le principe de la loupe

Une **loupe** est une lentille convergente utilisée avec l'objet placé **entre le centre
optique $O$ et le foyer objet $F$**, c'est-à-dire $\;-f' < \overline{OA} < 0$ (objet plus près
que la distance focale). L'image obtenue est alors :

- **virtuelle** ($\overline{OA'} < 0$),
- **droite** ($\gamma > 0$),
- **agrandie** ($|\gamma| > 1$),
- située **du même côté** que l'objet, mais **plus loin** et **plus grande** : l'œil la perçoit
  comme un gros objet.

> **Exemple.** Loupe $f' = 5{,}0\ \text{cm} = 0{,}050\ \text{m}$ ($V = 20\ \delta$), objet à
> $3{,}0\ \text{cm}$ : $\overline{OA} = -0{,}030\ \text{m}$ (bien **entre** $O$ et $F$, car
> $3 < 5$ cm).
> $$\dfrac{1}{\overline{OA'}} = \dfrac{1}{0{,}050} + \dfrac{1}{-0{,}030} = 20 - 33{,}3 = -13{,}3\ \text{m}^{-1}$$
> $$\overline{OA'} = \dfrac{1}{-13{,}3} = -0{,}075\ \text{m} = -7{,}5\ \text{cm}\ (<0 \Rightarrow \text{virtuelle}).$$
> $$\gamma = \dfrac{\overline{OA'}}{\overline{OA}} = \dfrac{-0{,}075}{-0{,}030} = +2{,}5\ (>0,\ >1 \Rightarrow \text{droite et} \times 2{,}5).$$
> L'image est **virtuelle, droite, 2,5 fois plus grande** : c'est bien l'effet loupe.

> ⚠️ Si tu poses l'objet **au-delà** de $F$ (plus loin que $f'$), tu n'as **plus** une loupe :
> l'image redevient **réelle et renversée**. La condition « objet **entre** $O$ et $F$ » est
> essentielle.

---

## 10. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Chambre noire / sténopé | image **réelle**, **renversée** ; $\dfrac{\overline{A'B'}}{\overline{AB}}=\dfrac{d'}{d}$ ; petit trou = net mais sombre |
| Lentille convergente | épaisse au centre ; $O$ (non dévié), $F$, $F'$ ; $\overline{OF}=-f'$ |
| Distance focale | $f' = \overline{OF'} > 0$, en **mètres** |
| Vergence | $\boxed{V = \dfrac{1}{f'}}$, en **dioptries** ($\delta$), $f'$ en m |
| Mesures algébriques | axe orienté sens lumière ; objet réel $\overline{OA}<0$ ; image réelle $\overline{OA'}>0$ |
| Conjugaison (Descartes) | $\boxed{\dfrac{1}{\overline{OA'}}-\dfrac{1}{\overline{OA}}=\dfrac{1}{f'}}$ |
| Grandissement | $\boxed{\gamma=\dfrac{\overline{A'B'}}{\overline{AB}}=\dfrac{\overline{OA'}}{\overline{OA}}}$ ; signe = sens, $|\gamma|$ = taille |
| Image réelle / virtuelle | réelle = sur écran ($\overline{OA'}>0$) ; virtuelle = à travers ($\overline{OA'}<0$) |
| Loupe | objet **entre $O$ et $F$** → image virtuelle, droite, agrandie |

---

## 11. Les erreurs qui coûtent des points

1. **Oublier le signe de $\overline{OA}$.** Un objet réel a $\overline{OA} < 0$. Poser
   $\overline{OA} = +30\ \text{cm}$ fausse la conjugaison **et** le grandissement. La barre
   $\overline{\,\ }$ signifie « mesure algébrique » : compte le signe.
2. **Transformer le « − » de Descartes en « + ».** La relation est
   $\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'}$. Le signe moins est
   là ; c'est le signe **négatif de $\overline{OA}$** qui le fait « redevenir » positif dans le
   calcul, pas une réécriture.
3. **Mélanger les unités.** Ne pas additionner des cm et des m dans $1/\overline{OA'}$. Et pour
   la vergence, $f'$ **doit** être en mètres pour donner des dioptries : $5\ \text{cm}\to0{,}05\ \text{m}$.
4. **Confondre $f'$ et $V$.** $f'$ est une **longueur** (m), $V$ une **vergence** (δ), inverses
   l'une de l'autre. Une grande vergence = une **courte** focale, pas l'inverse.
5. **Croire qu'une image virtuelle se projette.** Une image virtuelle ($\overline{OA'}<0$, ex.
   la loupe) ne se recueille **pas** sur un écran : on la voit seulement à travers la lentille.
6. **Utiliser la loupe hors condition.** L'effet loupe (image droite agrandie) n'existe que si
   l'objet est **entre $O$ et $F$**. Au-delà de $F$, l'image redevient réelle et renversée.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe de première.
BO spécial n° 1 du 22 janvier 2019.
Fichier de référence interne : docs/programme-stl-spcl.txt, section « Image : photographie et
lentilles (1re) » :
  - Chambre noire, sténopé ; lentilles minces convergentes.
  - Foyers, distance focale, focométrie ; vergence.
  - Relation de conjugaison et grandissement ; image réelle/virtuelle ; loupe.
Extrait via WebFetch depuis le PDF officiel education.gouv.fr :
Programme de sciences physiques et chimiques en laboratoire de première STL-251820.pdf.

Prérequis « Image : couleur et vision » cité (modèle optique de l'œil : cristallin = lentille,
rétine = écran), conformément à la consigne (chapitre du même parcours spcl-stl).

CONVENTIONS DE SIGNES RETENUES (à confronter au PDF et à l'usage de l'équipe) :
- Axe optique orienté dans le sens de propagation de la lumière (gauche → droite).
- Origine des mesures algébriques : centre optique O.
- Objet réel : OA < 0 ; image réelle : OA' > 0 ; image virtuelle : OA' < 0.
- f' = OF' > 0 (convergente) ; OF = -f'.
- Relation de conjugaison de Descartes (origine O) : 1/OA' - 1/OA = 1/f'.
- Grandissement : gamma = OA'/OA = A'B'/AB.
Ces conventions sont les plus répandues au lycée ; vérifier qu'elles correspondent à celles
adoptées dans les TP et sujets d'examen de l'établissement (certaines ressources notent la
conjugaison avec origine au foyer — Newton — non exigible ici).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Niveau d'exigence sur la focométrie : les trois méthodes (objet à l'infini, conjugaison,
  autocollimation) sont-elles toutes attendues, ou seulement le principe de la mesure de f' ?
- Le sténopé : la relation A'B'/AB = d'/d (Thalès) est-elle explicitement au programme, ou
  seulement la description qualitative (image réelle renversée, compromis netteté/luminosité) ?
- Vérifier les valeurs numériques et arrondis des exemples (conjugaison, loupe) et l'homogénéité
  des chiffres significatifs.
- Lien avec « Appareil photo numérique et image numérique » (mise au point, capteur = écran) :
  évoqué en §8 pour préparer le chapitre suivant, sans empiéter sur nombre d'ouverture / temps
  de pose qui y sont traités.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
