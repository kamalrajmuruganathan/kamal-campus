---
id: tale-sti2d-pc-matiere-materiaux
titre: "Matière et matériaux : états, radioactivité, combustions et acido-basique"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 16
prerequis:
  - Constitution de l'atome, écriture du noyau (Seconde)
  - Énergie, puissance, rendement (Première STI2D/STL)
  - Fonctions exponentielle et logarithme (Maths, Terminale STI2D/STL)
statut: brouillon
relu_par: null
---

# Matière et matériaux : états, radioactivité, combustions et acido-basique

> Choisir un matériau, le fondre, le souder, contrôler la soudure aux rayons gamma,
> décaper la pièce à l'acide, chauffer l'atelier au gaz : tout ce chapitre parle du
> **quotidien de l'industrie**. Quatre volets — matériaux et états, radioactivité,
> combustions, acido-basique — et à chaque fois la même exigence : un calcul simple,
> les bonnes unités, et la sécurité en tête.

---

## 1. Organisation de la matière et propriétés des matériaux

La matière est faite d'**atomes**, de **molécules** ou d'**ions**. La façon dont ces
entités s'assemblent explique les propriétés du matériau à notre échelle.

### Les grandes familles de matériaux

| Famille | Constitution | Propriétés typiques | Exemples |
|---|---|---|---|
| **Métaux et alliages** | atomes + électrons libres | conducteurs (électricité, chaleur), déformables | acier, aluminium, cuivre |
| **Polymères (plastiques)** | très longues molécules (macromolécules) | légers, isolants, peu résistants à la chaleur | PVC, polyéthylène |
| **Céramiques et verres** | ions ou oxydes | durs, isolants, **fragiles** (cassent net) | brique, verre, porcelaine |
| **Composites** | **matrice + renfort** | légers ET résistants | fibre de carbone + résine, béton armé |

> **Exemple.** Un câble électrique associe deux familles : le **cuivre** (métal,
> conducteur) pour le cœur, le **PVC** (polymère, isolant) pour la gaine. Chaque
> matériau est choisi pour sa propriété dominante.

### Structure ordonnée ou désordonnée

- Structure **cristalline** : les entités sont rangées de façon régulière et
  périodique (métaux, sel, glace).
- Structure **amorphe** : pas d'ordre à grande distance (verre, la plupart des
  plastiques).

### Les propriétés qu'on mesure

| Propriété | Grandeur / test | Unité |
|---|---|---|
| Masse volumique | $\rho = \dfrac{m}{V}$ | $\mathrm{kg/m^3}$ |
| Conductivité électrique | conducteur / isolant | — |
| Conductivité thermique | conduit ou non la chaleur | — |
| Tenue à la corrosion | oxydation, rouille | — |

> ⚠️ Pour $\rho = m/V$ : $m$ en **kg** et $V$ en **m³** donnent des $\mathrm{kg/m^3}$.
> Avec des g et des cm³, tu obtiens des $\mathrm{g/cm^3}$ — et
> $1\ \mathrm{g/cm^3} = 1000\ \mathrm{kg/m^3}$. C'est LA conversion piège du volet matériaux.

---

## 2. Les changements d'état

### Les six transitions

```
            fusion                vaporisation
   SOLIDE ──────────►  LIQUIDE ──────────────►  GAZ
   SOLIDE ◄──────────  LIQUIDE ◄──────────────  GAZ
          solidification            liquéfaction

   SOLIDE ──── sublimation ────► GAZ
   GAZ ──── condensation ────► SOLIDE
```

> **Repère industriel.** La **fonderie** = fusion puis solidification dans un moule.
> Le **soudage** = fusion locale des deux pièces. Le **zingage à chaud** = trempage
> dans du zinc fondu.

### Ce qu'il faut savoir sur un corps pur

Pendant le changement d'état d'un **corps pur**, la température reste **constante** :
c'est le **palier de température**. Toute l'énergie reçue sert à changer d'état, pas
à chauffer.

### L'énergie de changement d'état

$$\boxed{E = m \times L}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $E$ | énergie échangée | J |
| $m$ | masse | **kg** |
| $L$ | énergie massique de changement d'état (chaleur latente) | **J/kg** |

- Fusion, vaporisation : le matériau **reçoit** de l'énergie.
- Solidification, liquéfaction : il en **libère** autant.

> **Exemple.** Faire fondre $2{,}0$ kg de glace ($L_f = 334$ kJ/kg) demande
> $E = 2{,}0 \times 334 = 668$ kJ $= 6{,}68 \times 10^{5}$ J — sans que la température
> ne bouge de 0 °C tant qu'il reste de la glace.

---

## 3. La radioactivité

### Noyaux et isotopes

Un noyau se note $^{A}_{Z}\text{X}$ : $Z$ protons, $A$ nucléons (protons + neutrons).
Deux **isotopes** ont le même $Z$ mais des $A$ différents. Certains noyaux sont
**instables** : ils se désintègrent spontanément — c'est la **radioactivité**, un
phénomène **aléatoire** (on ne sait pas *quand* un noyau donné se désintègre) et
**inévitable** (rien ne l'accélère ni ne l'arrête).

| Rayonnement | Nature | Pouvoir de pénétration | Arrêté par |
|---|---|---|---|
| **α** | noyau d'hélium | très faible | une feuille de papier |
| **β** | électron | moyen | quelques mm d'aluminium |
| **γ** | photon très énergétique | très grand | forte épaisseur de plomb ou béton |

### L'activité

L'**activité** $A$ d'un échantillon est le **nombre de désintégrations par seconde** :

$$\boxed{A = \lambda \times N} \qquad A \text{ en becquerels (Bq), } 1\ \mathrm{Bq} = 1 \text{ désintégration/s}$$

$N$ est le nombre de noyaux radioactifs présents et $\lambda$ la **constante
radioactive** (en $\mathrm{s^{-1}}$) : plus $\lambda$ est grand, plus la
désintégration est rapide.

### La loi de décroissance — le lien avec tes maths

Le nombre de noyaux restants diminue de façon **exponentielle** :

$$\boxed{N(t) = N_0\, e^{-\lambda t}}$$

C'est exactement la fonction exponentielle de ton cours de maths : $N(t)$ est la
solution de l'équation différentielle $N' = -\lambda N$ (type $y' = ay$ avec
$a = -\lambda < 0$, d'où la décroissance). L'activité suit la même loi :
$A(t) = A_0\, e^{-\lambda t}$.

> **Exemple.** Une source de $\lambda = 0{,}010\ \mathrm{j^{-1}}$ contient
> $N_0 = 4{,}0 \times 10^{15}$ noyaux. Au bout de $t = 100$ jours :
> $N = 4{,}0 \times 10^{15} \times e^{-0{,}010 \times 100} = 4{,}0 \times 10^{15} \times e^{-1}
> \approx 1{,}5 \times 10^{15}$ noyaux.

### La demi-vie

La **demi-vie** $t_{1/2}$ est la durée au bout de laquelle la **moitié** des noyaux
s'est désintégrée. Elle est reliée à $\lambda$ (en écrivant $N_0/2 = N_0 e^{-\lambda t_{1/2}}$
puis en utilisant $\ln$) :

$$\boxed{t_{1/2} = \frac{\ln 2}{\lambda}}$$

| Temps écoulé | $t_{1/2}$ | $2\,t_{1/2}$ | $3\,t_{1/2}$ | $n\,t_{1/2}$ |
|---|---|---|---|---|
| Il reste | $N_0/2$ | $N_0/4$ | $N_0/8$ | $N_0/2^{\,n}$ |

> ⚠️ Après 2 demi-vies il reste le **quart**, pas zéro : on divise par 2 **à chaque
> fois**. La décroissance n'est jamais linéaire.

### Applications et radioprotection

- **Gammagraphie** : contrôle des soudures avec une source γ (iridium 192,
  $t_{1/2} = 74$ jours) — la « radio » des pièces métalliques.
- **Jauges radioactives** : mesure d'épaisseur ou de niveau sans contact.
- **Datation** au carbone 14 ; **détecteurs de fumée** (anciens, à américium).
- **Se protéger** : trois leviers — **durée** d'exposition minimale, **distance**
  maximale, **écrans** (plomb, béton).

---

## 4. Les combustions

### Ce qu'est une combustion

Une **combustion** est une réaction d'oxydation rapide entre un **combustible**
(gaz, essence, bois…) et un **comburant** (le dioxygène de l'air), déclenchée par une
**source d'énergie** (étincelle, flamme). Ces trois éléments forment le **triangle du
feu** : supprimer l'un d'eux éteint le feu.

### L'équation de combustion complète

Un combustible carboné brûle en donnant du **dioxyde de carbone** et de l'**eau**.
On ajuste les coefficients pour conserver chaque élément :

$$\boxed{\mathrm{CH_4 + 2\,O_2 \longrightarrow CO_2 + 2\,H_2O}} \qquad \text{(méthane)}$$

> **Exemple — méthode d'ajustement.** Pour le propane $\mathrm{C_3H_8}$ :
> 3 carbones → $3\,\mathrm{CO_2}$ ; 8 hydrogènes → $4\,\mathrm{H_2O}$ ; on compte
> alors $6 + 4 = 10$ oxygènes à droite, soit $5\,\mathrm{O_2}$ :
> $$\mathrm{C_3H_8 + 5\,O_2 \longrightarrow 3\,CO_2 + 4\,H_2O}$$

### L'énergie libérée : le pouvoir calorifique

L'énergie libérée par la combustion est proportionnelle à la masse brûlée :

$$\boxed{E = m \times PC}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $E$ | énergie libérée | J |
| $m$ | masse de combustible | **kg** |
| $PC$ | pouvoir calorifique | **J/kg** (souvent donné en MJ/kg) |

| Combustible | $PC$ (ordre de grandeur) |
|---|---|
| Dihydrogène | $\sim 120$ MJ/kg |
| Méthane (gaz naturel) | $\sim 50$ MJ/kg |
| Essence, gazole | $\sim 45$ MJ/kg |
| Charbon | $\sim 30$ MJ/kg |
| Bois sec | $\sim 15$ MJ/kg |

> **Exemple.** Brûler $3{,}0$ kg de gaz naturel libère
> $E = 3{,}0 \times 50 = 150$ MJ $= 1{,}5 \times 10^{8}$ J. Si la chaudière a un
> rendement de $0{,}90$, l'énergie utile est $0{,}90 \times 150 = 135$ MJ.

### Le danger de la combustion incomplète

Si le dioxygène manque, la combustion est **incomplète** : elle produit du
**monoxyde de carbone CO** — gaz **incolore, inodore et mortel** — et des suies
(carbone). D'où l'obligation d'**aérer** et d'entretenir les appareils à combustion.

---

## 5. Les réactions acido-basiques

### Acide, base, couple

- Un **acide** est une espèce capable de **céder** un ion hydrogène $\mathrm{H^+}$.
- Une **base** est une espèce capable de **capter** un ion $\mathrm{H^+}$.
- Un **couple acide/base** réunit les deux formes, qui ne diffèrent que d'**un**
  $\mathrm{H^+}$ : $\mathrm{CH_3COOH / CH_3COO^-}$, $\mathrm{NH_4^+ / NH_3}$,
  $\mathrm{H_3O^+ / H_2O}$, $\mathrm{H_2O / OH^-}$.

Une **réaction acido-basique** est un **transfert de $\mathrm{H^+}$** entre l'acide
d'un couple et la base d'un **autre** couple.

> **Exemple.** Neutralisation d'un bain acide par la soude :
> $$\mathrm{H_3O^+ + OH^- \longrightarrow 2\,H_2O}$$
> L'acide $\mathrm{H_3O^+}$ (couple $\mathrm{H_3O^+/H_2O}$) cède un proton à la base
> $\mathrm{OH^-}$ (couple $\mathrm{H_2O/OH^-}$).

### Le pH

Le **pH** mesure l'acidité à partir de la concentration en ions oxonium
$[\mathrm{H_3O^+}]$ (en mol/L) — c'est le logarithme décimal de ton cours de maths :

$$\boxed{\mathrm{pH} = -\log[\mathrm{H_3O^+}]} \qquad\qquad \boxed{[\mathrm{H_3O^+}] = 10^{-\mathrm{pH}}\ \mathrm{mol/L}}$$

| pH (à 25 °C) | Solution | Exemples |
|---|---|---|
| $< 7$ | **acide** | bain de décapage, jus de citron |
| $= 7$ | **neutre** | eau pure |
| $> 7$ | **basique** | soude, déboucheur, eau de chaux |

> ⚠️ **Une unité de pH = un facteur 10** sur $[\mathrm{H_3O^+}]$. Passer de pH 5 à
> pH 3, c'est **100 fois** plus d'ions oxonium. Et plus $[\mathrm{H_3O^+}]$ est
> grand, plus le pH est **petit**.

> **Exemple.** Un bain de décapage a $[\mathrm{H_3O^+}] = 1{,}0 \times 10^{-2}$ mol/L :
> $\mathrm{pH} = -\log(10^{-2}) = 2{,}0$. Une eau de rejet à pH $= 6{,}0$ contient
> $[\mathrm{H_3O^+}] = 10^{-6}$ mol/L, soit dix mille fois moins.

### Sécurité au laboratoire et à l'atelier

- Acides et bases concentrés sont **corrosifs** (pictogramme corrosion) : port de
  **gants, lunettes, blouse** obligatoire.
- Pour diluer un acide concentré : **toujours verser l'acide dans l'eau**, jamais
  l'inverse (l'ajout d'eau dans l'acide provoque un échauffement brutal et des
  projections).
- Les effluents acides ou basiques sont **neutralisés** (pH ramené vers 7) avant
  rejet — c'est une obligation industrielle.

---

## 6. Tableau récapitulatif

| Notion | Formule / règle | Unités |
|---|---|---|
| Masse volumique | $\rho = m/V$ | kg/m³ ($1$ g/cm³ $= 1000$ kg/m³) |
| Énergie de changement d'état | $E = m \times L$ | J, kg, J/kg |
| Corps pur | palier de température pendant le changement d'état | — |
| Activité | $A = \lambda N$ | Bq |
| Décroissance | $N(t) = N_0\, e^{-\lambda t}$ (solution de $N' = -\lambda N$) | — |
| Demi-vie | $t_{1/2} = \dfrac{\ln 2}{\lambda}$ ; après $n\,t_{1/2}$ il reste $N_0/2^{\,n}$ | s (ou j, ans) |
| Combustion du méthane | $\mathrm{CH_4 + 2\,O_2 \to CO_2 + 2\,H_2O}$ | — |
| Énergie de combustion | $E = m \times PC$ | J, kg, J/kg |
| Acide / base | cède / capte $\mathrm{H^+}$ ; réaction = transfert entre 2 couples | — |
| pH | $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$ ; $[\mathrm{H_3O^+}] = 10^{-\mathrm{pH}}$ | mol/L, pH sans unité |
| 1 unité de pH | facteur **10** sur $[\mathrm{H_3O^+}]$ | — |

---

## 7. Les erreurs qui coûtent des points

1. **Mélanger les unités de masse volumique** : $1$ g/cm³ $= 1000$ kg/m³, pas $1$ kg/m³.
2. **Croire qu'il ne reste rien après 2 demi-vies.** Il reste $N_0/4$ : on divise par
   $2$ à chaque demi-vie ($N_0/2^{\,n}$), jamais par $2n$.
3. **Oublier de convertir la demi-vie** (jours, années) **en secondes** quand on veut
   $\lambda$ en $\mathrm{s^{-1}}$ ou une activité en Bq.
4. **Mal ajuster l'équation de combustion** — vérifie C, puis H, puis O, dans cet
   ordre, et compte les O **en dernier**.
5. **Utiliser $E = m \times PC$ avec $m$ en grammes** : le PC est en J/**kg**. Un
   facteur 1000 d'écart, et tout le bilan est faux.
6. **Se tromper de sens sur le pH** : plus la solution est acide, plus le pH est
   **petit** ; et une unité de pH est un facteur **10**, pas une addition.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie et mathématiques, spécialité,
terminale STI2D et STL, arrêté MENE1921261A, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Matière et matériaux »,
lignes 46-49). Extraction via WebFetch depuis le PDF officiel
(cache.media.education.gouv.fr .../spe261_annexe_1158935.pdf) — à confronter au PDF
avant publication.

La section du programme extrait est TRÈS condensée (3 lignes) :
« Propriétés des matériaux ; organisation de la matière ; changements d'état. /
Radioactivité : activité, décroissance, demi-vie (approche STI2D/STL). /
Combustions ; réactions acido-basiques (pH, couples). »
Le développement (familles de matériaux, E = mL, PC, tableau des rayonnements,
sécurité chimique) suit l'esprit « approche techno, contextes industriels » mais
DOIT être confronté au détail des capacités exigibles du PDF officiel.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Périmètre exact du volet radioactivité STI2D/STL : les équations de désintégration
  (lois de Soddy) sont-elles exigibles, ou seulement activité/décroissance/demi-vie ?
  J'ai volontairement limité aux trois notions citées + tableau qualitatif α/β/γ.
- La relation A = λN et λ = ln2/t1/2 : exigibles ou données ? Je les ai incluses car
  elles font le lien avec l'exponentielle et le ln du programme de maths du parcours
  (fonctions exp/ln, équations différentielles y' = ay — même BO).
- Valeurs numériques choisies par moi (ordres de grandeur usuels, à vérifier en
  table) : L_f glace 334 kJ/kg ; PC (H2 ~120, CH4 ~50, essence/gazole ~45,
  charbon ~30, bois ~15 MJ/kg) ; t1/2 iridium 192 = 74 jours.
- Le pH est écrit pH = -log[H3O+] avec [H3O+] en mol/L (sans la division explicite
  par c° retenue dans la fiche de terminale générale) : simplification assumée pour
  la voie techno, à valider.
- La partie sécurité (EPI, acide dans l'eau, neutralisation avant rejet) répond à la
  demande « sécurité » de la commande ; vérifier qu'elle correspond bien à une
  capacité du programme officiel.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
