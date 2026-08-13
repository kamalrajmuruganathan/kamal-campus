---
id: tale-spe-pc-titrages
titre: "Titrages"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 15
prerequis:
  - Concentration, quantité de matière et dilution (Seconde et Première)
  - Réaction acide-base et pH (Terminale, 1.1)
  - Conductance et conductivité, loi de Kohlrausch (Terminale, 1.2)
statut: brouillon
relu_par: null
---

# Titrages

> Un titrage, c'est mesurer une quantité de matière qu'on ne peut pas peser
> directement : on la fait réagir, goutte à goutte, avec une solution dont on connaît
> **tout**. Le secret tient en une seule idée — l'**équivalence** — et en une seule
> relation. Le reste, ce sont des unités qu'il ne faut pas rater.

---

## 1. La réaction de titrage

**Titrer** une espèce, c'est déterminer sa quantité de matière (ou sa concentration) en
la faisant réagir avec une solution de concentration connue, la **solution titrante**.

Pour qu'un titrage soit exploitable, la réaction support doit être :

- **totale** (elle se poursuit jusqu'à épuisement du réactif limitant) ;
- **rapide** (le résultat est instantané à chaque goutte) ;
- **unique** (une seule transformation, pas de réaction parasite).

| Terme | Ce qu'il désigne |
|---|---|
| Espèce **titrée** | celle dont on cherche la quantité (dans le bécher) |
| Solution **titrante** | celle de concentration connue (dans la burette) |
| **Volume à l'équivalence** $V_{\text{éq}}$ | volume de titrant versé à l'équivalence |

> **Exemple.** On titre l'acide chlorhydrique (ions $\mathrm{H_3O^+}$) d'un détartrant par
> une solution d'hydroxyde de sodium $(\mathrm{Na^+} + \mathrm{OH^-})$ de concentration
> connue. La réaction support est $\mathrm{H_3O^+} + \mathrm{OH^-} \rightarrow 2\,\mathrm{H_2O}$,
> totale et rapide : c'est un bon titrage.

---

## 2. L'équivalence et sa relation

À l'**équivalence**, les réactifs titré et titrant ont été introduits dans les
**proportions stœchiométriques** de la réaction : ils sont **tous les deux entièrement
consommés** au même instant.

- **Avant** l'équivalence, le titrant (versé en défaut) est le réactif limitant : il reste
  de l'espèce titrée.
- **À** l'équivalence, changement de réactif limitant : il ne reste ni l'un ni l'autre.
- **Après** l'équivalence, le titrant est en excès et s'accumule.

### La relation à l'équivalence

Pour une réaction $a\,\mathrm{A} + b\,\mathrm{B} \rightarrow \text{produits}$ où A est
l'espèce titrée et B le titrant, l'équivalence s'écrit :

$$\boxed{\dfrac{n_{\text{titré}}}{a} = \dfrac{n_{\text{titrant versé}}}{b}}$$

Dans le cas très fréquent où $a = b = 1$ (comme $\mathrm{H_3O^+} + \mathrm{OH^-}$), elle se
simplifie en la relation à connaître par cœur :

$$\boxed{n_{\text{titré}} = n_{\text{titrant versé à l'équivalence}}}$$

que l'on développe presque toujours sous la forme :

$$\boxed{C_{\text{titré}} \times V_{\text{titré}} = C_{\text{titrant}} \times V_{\text{éq}}}$$

> **Exemple.** On titre $V_A = 20{,}0$ mL d'acide chlorhydrique par de la soude à
> $C_B = 0{,}10$ mol·L⁻¹. L'équivalence est atteinte pour $V_{\text{éq}} = 15{,}0$ mL. Alors
> $C_A = \dfrac{C_B \, V_{\text{éq}}}{V_A} = \dfrac{0{,}10 \times 15{,}0}{20{,}0} = 7{,}5\times 10^{-2}$ mol·L⁻¹.
>
> Remarque : dans le rapport $V_{\text{éq}}/V_A$, les deux volumes sont en mL — le facteur
> de conversion mL→L se simplifie. Inutile de convertir, **à condition** que les deux volumes
> soient dans la **même** unité.

> ⚠️ **La relation ne porte pas sur les concentrations mais sur les quantités de matière.**
> Écrire $C_A = C_B$ n'a aucun sens : ce sont $n_A = C_A V_A$ et $n_B = C_B V_{\text{éq}}$
> qui sont égales (lorsque $a=b=1$).

---

## 3. La composition du système après un ajout

Le programme demande de savoir décrire le système **après avoir versé un volume $V$**
quelconque de titrant. On raisonne avec un tableau d'avancement, en comparant les quantités
introduites.

Reprenons $\mathrm{H_3O^+} + \mathrm{OH^-} \rightarrow 2\,\mathrm{H_2O}$, avec $n_A$ l'acide
initial et $n_B(V) = C_B \times V$ la base versée après un volume $V$.

| Étape | État du système |
|---|---|
| $V < V_{\text{éq}}$ | $\mathrm{OH^-}$ limitant : il reste $n_A - n_B(V)$ de $\mathrm{H_3O^+}$ ; le milieu est **acide** |
| $V = V_{\text{éq}}$ | ni $\mathrm{H_3O^+}$ ni $\mathrm{OH^-}$ en excès ; ici pH $= 7$ (acide fort / base forte) |
| $V > V_{\text{éq}}$ | $\mathrm{H_3O^+}$ épuisé : excès $n_B(V) - n_A$ de $\mathrm{OH^-}$ ; milieu **basique** |

> **Exemple.** Avec $n_A = 1{,}5\times 10^{-3}$ mol et $C_B = 0{,}10$ mol·L⁻¹, après avoir
> versé $V = 10{,}0$ mL : $n_B = 0{,}10 \times 10{,}0\times 10^{-3} = 1{,}0\times 10^{-3}$ mol.
> Comme $n_B < n_A$, il reste $1{,}5\times 10^{-3} - 1{,}0\times 10^{-3} = 5\times 10^{-4}$ mol
> d'ions $\mathrm{H_3O^+}$ : on est **avant** l'équivalence.

---

## 4. Le titrage pH-métrique

On suit le **pH** du bécher pendant l'ajout du titrant. La courbe $\mathrm{pH} = f(V)$
présente, au voisinage de l'équivalence, un **saut de pH** : une variation brutale pour un
très petit volume versé. C'est ce saut qui **repère l'équivalence**.

### Repérer $V_{\text{éq}}$ : deux méthodes

- **Méthode des tangentes.** On trace deux tangentes à la courbe, parallèles, de part et
  d'autre du saut. On trace la parallèle équidistante de ces deux tangentes : son
  intersection avec la courbe donne le point d'équivalence E, dont l'abscisse est
  $V_{\text{éq}}$.
- **Méthode de la dérivée.** On trace $\dfrac{\mathrm{d(pH)}}{\mathrm{d}V}$ en fonction de
  $V$ : elle passe par un **extrémum** (un pic) exactement à $V = V_{\text{éq}}$.

### Ce que vaut le pH à l'équivalence

| Type de titrage | pH à l'équivalence |
|---|---|
| Acide fort par base forte (ou l'inverse) | $= 7$ |
| Acide faible par base forte | $> 7$ (basique) |
| Base faible par acide fort | $< 7$ (acide) |

> **Exemple.** Le titrage de l'acide éthanoïque (acide faible) par la soude donne une
> équivalence à pH $\approx 8{,}5$ : le milieu est basique car il reste l'ion éthanoate, base
> conjuguée. Attendre pH $=7$ conduirait à sous-estimer $V_{\text{éq}}$.

> ⚠️ L'indicateur coloré n'est **pas** exigé pour repérer l'équivalence, mais s'il est
> utilisé, sa **zone de virage** doit encadrer le pH à l'équivalence.

---

## 5. Le titrage conductimétrique

On suit la **conductivité** $\sigma$ de la solution. La courbe $\sigma = f(V)$ est formée
de **segments de droite** ; l'équivalence est repérée par leur **rupture de pente** (le
point d'intersection des deux segments).

### Pourquoi une rupture de pente ?

La conductivité dépend des ions présents : $\sigma = \sum_i \lambda_i\,[X_i]$, où
$\lambda_i$ est la conductivité molaire ionique de chaque ion. Au fil de l'ajout, on
**remplace** certains ions par d'autres, dont les $\lambda_i$ diffèrent : la pente change.
À l'équivalence, l'ion remplacé change → la pente change **brutalement**.

> **Exemple** — titrage de $\mathrm{H_3O^+}$ (avec $\mathrm{Cl^-}$ spectateur) par
> $(\mathrm{Na^+} + \mathrm{OH^-})$ :
> - **Avant** l'équivalence, chaque $\mathrm{OH^-}$ versé consomme un $\mathrm{H_3O^+}$ (très
>   conducteur, $\lambda = 35{,}0$ mS·m²·mol⁻¹) et le remplace par un $\mathrm{Na^+}$ (peu
>   conducteur, $\lambda = 5{,}0$) : $\sigma$ **diminue**.
> - **Après** l'équivalence, on ajoute des $\mathrm{OH^-}$ (très conducteurs, $\lambda = 19{,}9$)
>   qui s'accumulent : $\sigma$ **augmente**.
>
> La courbe a une forme en **V**, dont la pointe est à $V_{\text{éq}}$.

> ⚠️ **Le piège de la dilution.** Verser du titrant dilue le contenu du bécher, ce qui
> abaisse toutes les concentrations. Pour que les segments restent bien **droits**, on ajoute
> souvent un **grand volume d'eau** dans le bécher au départ : ainsi la variation de volume
> due au titrant devient négligeable devant le volume total. L'eau ajoutée ne change **pas**
> $V_{\text{éq}}$, car elle n'ajoute aucune espèce titrée.

> **Quand choisir la conductimétrie ?** Quand il n'y a pas de saut de pH exploitable (titrage
> d'ions non acido-basiques, réactions de précipitation, solutions très diluées). La
> conductimétrie n'utilise **que** les points loin de l'équivalence pour tracer les droites —
> jamais les points de la zone de courbure autour de $V_{\text{éq}}$.

---

## 6. Titre massique et densité d'une solution

Ces grandeurs servent souvent de **point de départ** : une solution commerciale est décrite
par un pourcentage massique et une densité, qu'il faut convertir en concentration molaire.

| Grandeur | Définition | Unité |
|---|---|---|
| **Titre massique** $t$ | masse de soluté par litre de solution : $t = \dfrac{m_{\text{soluté}}}{V_{\text{solution}}}$ | g·L⁻¹ |
| **Pourcentage massique** $P$ | fraction de masse : $P = \dfrac{m_{\text{soluté}}}{m_{\text{solution}}}$ | sans unité (ou %) |
| **Masse volumique** $\rho$ | masse par unité de volume : $\rho = \dfrac{m}{V}$ | g·L⁻¹ ou g·mL⁻¹ |
| **Densité** $d$ | $d = \dfrac{\rho_{\text{solution}}}{\rho_{\text{eau}}}$, avec $\rho_{\text{eau}} = 1{,}00$ g·mL⁻¹ $= 1000$ g·L⁻¹ | sans unité |

### Les relations qui relient tout

Concentration molaire depuis le titre massique :

$$\boxed{C = \dfrac{t}{M}}$$

Pour une solution commerciale décrite par $P$ et $d$, la masse d'un litre de solution est
$\rho_{\text{solution}} = d \times \rho_{\text{eau}}$, dont la fraction $P$ est du soluté :

$$\boxed{C = \dfrac{P \times d \times \rho_{\text{eau}}}{M}}$$

> **Exemple.** Acide chlorhydrique commercial : $P = 37\% = 0{,}37$, $d = 1{,}19$,
> $M(\mathrm{HCl}) = 36{,}5$ g·mol⁻¹. Un litre pèse $\rho = 1{,}19 \times 1000 = 1190$ g,
> dont $0{,}37 \times 1190 = 4{,}4\times 10^{2}$ g de HCl : $t = 4{,}4\times 10^{2}$ g·L⁻¹.
> D'où $C = \dfrac{4{,}4\times 10^{2}}{36{,}5} \approx 12$ mol·L⁻¹. C'est la concentration
> typique d'un acide chlorhydrique concentré du commerce.

---

## 7. Enchaîner les dilutions

Une solution concentrée est presque toujours **diluée** avant d'être titrée. Le facteur de
dilution multiplie ou divise les concentrations — se tromper de sens fausse tout.

$$\boxed{F = \dfrac{C_{\text{mère}}}{C_{\text{fille}}} = \dfrac{V_{\text{fille}}}{V_{\text{mère prélevé}}}} \qquad\text{conservation : } C_{\text{mère}}\,V_{\text{mère}} = C_{\text{fille}}\,V_{\text{fille}}$$

> **Exemple.** On prélève $V_{\text{mère}} = 10{,}0$ mL de la solution à $12$ mol·L⁻¹ et on
> complète à $V_{\text{fille}} = 1{,}00$ L. Facteur $F = \dfrac{1000}{10{,}0} = 100$, donc
> $C_{\text{fille}} = \dfrac{12}{100} = 0{,}12$ mol·L⁻¹. C'est **cette** concentration diluée
> que le titrage mesure ; pour remonter à la solution commerciale, on **multiplie** le
> résultat par $F$.

> ⚠️ La dilution **divise** la concentration ($C$ diminue) mais **conserve** la quantité de
> matière prélevée. Multiplier au lieu de diviser est l'erreur la plus courante.

---

## 8. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Réaction support | totale, rapide, unique |
| Équivalence ($a=b=1$) | $n_{\text{titré}} = n_{\text{titrant}}$, soit $C_A V_A = C_B V_{\text{éq}}$ |
| Cas général | $\dfrac{n_{\text{titré}}}{a} = \dfrac{n_{\text{titrant}}}{b}$ |
| pH-métrie | saut de pH ; repérage par tangentes ou dérivée |
| pH à l'équivalence | $=7$ (fort/fort), $>7$ (acide faible/base forte) |
| Conductimétrie | segments de droite, **rupture de pente** à $V_{\text{éq}}$ |
| Diluer pour la conductimétrie | ajouter beaucoup d'eau → droites propres, $V_{\text{éq}}$ inchangé |
| Titre massique | $t = \dfrac{m}{V}$ (g·L⁻¹) ; $C = \dfrac{t}{M}$ |
| Densité | $d = \dfrac{\rho}{\rho_{\text{eau}}}$, $\rho_{\text{eau}} = 1000$ g·L⁻¹ |
| Solution commerciale | $C = \dfrac{P\,d\,\rho_{\text{eau}}}{M}$ |
| Dilution | $F = \dfrac{C_{\text{mère}}}{C_{\text{fille}}} = \dfrac{V_{\text{fille}}}{V_{\text{prélevé}}}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Égaler les concentrations au lieu des quantités de matière.** L'équivalence, c'est
   $n_{\text{titré}} = n_{\text{titrant}}$, jamais $C_A = C_B$.
2. **Oublier les coefficients stœchiométriques.** Si la réaction n'est pas 1:1, il faut
   $\dfrac{n_{\text{titré}}}{a} = \dfrac{n_{\text{titrant}}}{b}$ — un facteur 2 s'y glisse
   souvent.
3. **Mélanger mL et L.** Dans $C_A V_A = C_B V_{\text{éq}}$ les deux volumes doivent être dans
   la **même** unité ; dans $C = n/V$, le volume doit être en **litres**.
4. **Croire que pH $=7$ à toute équivalence.** C'est vrai seulement pour un titrage acide
   fort / base forte. Avec un acide faible, l'équivalence est à pH $>7$.
5. **Utiliser les points courbes en conductimétrie.** On trace les droites avec les points
   **éloignés** de l'équivalence ; la zone incurvée autour de $V_{\text{éq}}$ est ignorée.
6. **Se tromper de sens pour la dilution.** Diluer **divise** la concentration ; pour
   remonter à la solution mère, on **multiplie** par le facteur $F$.
7. **Confondre titre massique (g·L⁻¹) et pourcentage massique (sans unité).** Le premier est
   une masse par volume, le second une fraction de masse.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, classe
terminale générale — BO spécial n°8 du 25 juillet 2019 (arrêté du 19-7-2019).
Extrait via WebFetch depuis le PDF officiel education.gouv.fr / eduscol
(spe249_annexe_1158929.pdf), repris dans docs/programme-terminale-physique-chimie-2019.txt,
section « 1.3 Titrages » (lignes 43-50). À CONFRONTER AU PDF OFFICIEL avant publication.

Notions et contenus visés :
- Titre massique et densité d'une solution.
- Titrage avec suivi pH-métrique ; titrage avec suivi conductimétrique. Équivalence.
Capacités exigibles couvertes :
- Établir la composition du système après ajout d'un volume de solution titrante (§3).
- Exploiter un titrage pour déterminer une quantité de matière, une concentration ou une
  masse (§2, §6, exercices).
- Mettre en œuvre le suivi pH-métrique d'un titrage acide-base (§4).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme 2019 n'exige pas explicitement la méthode des tangentes ni la méthode de la
  dérivée : elles sont les pratiques standard de repérage de l'équivalence, à confirmer comme
  attendues à l'examen.
- Le pH à l'équivalence d'un titrage acide faible/base forte (>7) dépasse la stricte lettre
  du programme (les acides faibles sont au 1.1) ; conservé comme mise en garde utile mais à
  valider quant au niveau d'exigence.
- Valeurs des conductivités molaires ioniques (λ en mS·m²·mol⁻¹) : ordres de grandeur usuels
  à 25 °C, à vérifier avec la table fournie aux élèves le jour de l'épreuve.
- « Titre massique » : ici pris au sens masse de soluté par litre de solution (g·L⁻¹). Selon
  les manuels, le terme peut désigner une fraction massique ; distinction explicitée au §6 et
  dans les pièges, à trancher avec le relecteur selon l'usage retenu.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
