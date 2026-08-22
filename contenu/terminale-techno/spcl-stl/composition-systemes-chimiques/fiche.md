---
id: tale-stl-spcl-composition-systemes-chimiques
titre: "Composition des systèmes chimiques"
voie: technologique
niveau: terminale-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — SPCL, série STL, classe terminale"
duree_lecture_min: 20
prerequis:
  - Concentration en quantité de matière, dilution (Seconde / Première)
  - Réactions acide-base et d'oxydoréduction, écriture d'équations (Première)
  - Quantité de matière, tableau d'avancement (Première)
  - Dosage direct par titrage, équivalence (Première STL)
statut: brouillon
relu_par: null
---

# Composition des systèmes chimiques

> Au laboratoire, une solution n'est jamais « pleine » sans limite : au-delà d'un certain
> seuil, le solide **ne se dissout plus** et précipite. Une solution acide n'est pas
> seulement « acide » : elle a un **pH** chiffré, et cet acide est plus ou moins **fort**.
> Ce chapitre te donne les quatre outils pour décrire *ce qu'il y a vraiment* dans un
> système chimique : **solubilité**, **pH et acidité**, **conductivité**, et
> **oxydoréduction dans une pile**.

---

## 1. Solubilité et produit de solubilité

### Dissolution, saturation, précipitation

Quand on ajoute un solide ionique à de l'eau, il se **dissout** en libérant ses ions. Mais
la dissolution a une **limite** : à partir d'un certain point, le solide ajouté ne se
dissout plus et reste au fond. La solution est alors **saturée**, en **équilibre** avec le
solide.

La **solubilité** $s$ d'un solide est la quantité maximale que l'on peut dissoudre par litre
de solution **à saturation**, à une température donnée.

$$\boxed{s = \frac{n_{\text{dissous max}}}{V_{\text{solution}}}}\qquad s \text{ en } \text{mol·L}^{-1}\ (\text{ou } \text{g·L}^{-1})$$

> **Exemple.** Si $1{,}3\times 10^{-5}\ \text{mol}$ de chlorure d'argent au maximum se
> dissolvent dans $1{,}0\ \text{L}$ d'eau, alors $s(\text{AgCl}) = 1{,}3\times 10^{-5}\ \text{mol·L}^{-1}$.

### Le produit de solubilité $K_s$

Pour un solide de formule $A_a B_b$ qui se dissout selon
$A_aB_b(\text{s}) \rightleftharpoons a\,A^{n+} + b\,B^{m-}$, la solution saturée vérifie une
constante d'équilibre appelée **produit de solubilité** :

$$\boxed{K_s = [A^{n+}]^{a}\,[B^{m-}]^{b}}$$

où les concentrations sont celles **à saturation** (en $\text{mol·L}^{-1}$). $K_s$ ne dépend
que de la **température**. Plus $K_s$ est petit, moins le solide est soluble. On l'exprime
souvent par $\text{p}K_s = -\log K_s$.

> **Exemple.** Pour $\text{AgCl}(\text{s}) \rightleftharpoons \text{Ag}^+ + \text{Cl}^-$,
> $K_s = [\text{Ag}^+][\text{Cl}^-]$. À $25\ \text{°C}$, $K_s = 1{,}8\times 10^{-10}$.

### Relier $s$ et $K_s$

Il faut **relire l'équation de dissolution** pour compter les ions. Pour un solide $AB$
(type $1$–$1$, comme AgCl), dissoudre $s$ mol produit $s$ mol de chaque ion :

$$K_s = [A^{n+}][B^{m-}] = s\times s = s^2 \quad\Longrightarrow\quad s = \sqrt{K_s}$$

Pour un solide $AB_2$ (type $1$–$2$, comme $\text{CaF}_2$), dissoudre $s$ mol produit $s$ mol
de $A$ et $2s$ mol de $B$ :

$$K_s = [A^{2+}][B^-]^2 = s\times(2s)^2 = 4s^3 \quad\Longrightarrow\quad s = \left(\frac{K_s}{4}\right)^{1/3}$$

> **Exemple.** $K_s(\text{AgCl}) = 1{,}8\times 10^{-10}$ donne
> $s = \sqrt{1{,}8\times 10^{-10}} = 1{,}3\times 10^{-5}\ \text{mol·L}^{-1}$.

### Précipiter ou non : le quotient de réaction

Pour savoir si un précipité **se forme**, on calcule le **quotient de réaction**
$Q_r = [A^{n+}]^a[B^{m-}]^b$ avec les concentrations **réellement présentes**, et on compare à
$K_s$ :

| Situation | Comparaison | Conclusion |
|---|---|---|
| Solution non saturée | $Q_r < K_s$ | tout est dissous, on peut encore dissoudre |
| Solution saturée | $Q_r = K_s$ | équilibre solide / solution |
| Sursaturation | $Q_r > K_s$ | **précipitation** jusqu'à revenir à $Q_r = K_s$ |

> ⚠️ $s$ et $K_s$ ne sont **pas** la même chose. $s$ est une concentration ($\text{mol·L}^{-1}$),
> $K_s$ un produit de concentrations. On passe de l'un à l'autre **via l'équation de
> dissolution**, jamais par $s = K_s$.

---

## 2. Acides, bases et pH

### Couples acide / base

Un **acide** de Brønsted est une espèce capable de **céder** un proton $\text{H}^+$ ; une
**base** est capable d'en **capter** un. À tout acide correspond une base **conjuguée**,
formant un **couple acide/base** $\text{AH}/\text{A}^-$ :

$$\text{AH} \rightleftharpoons \text{A}^- + \text{H}^+$$

> **Exemple.** Couples usuels : $\text{CH}_3\text{COOH}/\text{CH}_3\text{COO}^-$ (acide
> éthanoïque / ion éthanoate), $\text{NH}_4^+/\text{NH}_3$, et pour l'eau
> $\text{H}_3\text{O}^+/\text{H}_2\text{O}$ ainsi que $\text{H}_2\text{O}/\text{HO}^-$.

### Le pH

Le **pH** mesure l'acidité par la concentration en ions oxonium $\text{H}_3\text{O}^+$ :

$$\boxed{\text{pH} = -\log\left(\frac{[\text{H}_3\text{O}^+]}{c^\circ}\right) \approx -\log[\text{H}_3\text{O}^+]}\qquad
[\text{H}_3\text{O}^+] = 10^{-\text{pH}}\ \text{mol·L}^{-1}$$

avec $[\text{H}_3\text{O}^+]$ en $\text{mol·L}^{-1}$ ($c^\circ = 1\ \text{mol·L}^{-1}$). Plus le
pH est **petit**, plus la solution est **acide**.

> **Exemple.** Une solution à $[\text{H}_3\text{O}^+] = 1{,}0\times 10^{-3}\ \text{mol·L}^{-1}$
> a $\text{pH} = -\log(10^{-3}) = 3{,}0$. Inversement, $\text{pH} = 5{,}2$ donne
> $[\text{H}_3\text{O}^+] = 10^{-5{,}2} = 6{,}3\times 10^{-6}\ \text{mol·L}^{-1}$.

### Produit ionique de l'eau

L'eau réagit un peu sur elle-même (autoprotolyse). À toute température,

$$\boxed{K_e = [\text{H}_3\text{O}^+]\,[\text{HO}^-]}\qquad K_e = 1{,}0\times 10^{-14}\ \text{à } 25\ \text{°C},\ \text{soit } \text{p}K_e = 14{,}0$$

À $25\ \text{°C}$ : solution **neutre** si $\text{pH} = 7{,}0$, **acide** si $\text{pH} < 7{,}0$,
**basique** si $\text{pH} > 7{,}0$.

### Acide fort, acide faible

Un acide **fort** réagit **totalement** avec l'eau : tout l'acide est transformé, donc
$[\text{H}_3\text{O}^+] = c$ (concentration apportée) et $\text{pH} = -\log c$. Un acide
**faible** ne réagit que **partiellement** : $[\text{H}_3\text{O}^+] < c$, donc son pH est
**plus grand** que celui d'un acide fort de même concentration.

$$\text{Acide fort de concentration } c :\quad \boxed{\text{pH} = -\log c}$$

> **Exemple.** $\text{HCl}$ (acide fort) à $c = 1{,}0\times 10^{-2}\ \text{mol·L}^{-1}$ :
> $\text{pH} = -\log(10^{-2}) = 2{,}0$. L'acide éthanoïque (faible) à la **même**
> concentration a un $\text{pH} \approx 3{,}4 > 2{,}0$ : il est moins dissocié.

La force d'un couple faible se chiffre par sa **constante d'acidité**
$K_a = \dfrac{[\text{A}^-][\text{H}_3\text{O}^+]}{[\text{AH}]}$, souvent donnée par
$\text{p}K_a = -\log K_a$ : plus $\text{p}K_a$ est **petit**, plus l'acide est **fort**.

---

## 3. Dosage acide-base

**Doser** un acide (ou une base), c'est déterminer sa concentration en le faisant réagir
**totalement** avec un titrant de concentration connue, versé à la burette. Le suivi peut
être **pH-métrique** (saut de pH) ou **colorimétrique** (virage d'un indicateur).

À l'**équivalence**, les réactifs sont introduits dans les **proportions stœchiométriques**.
Pour un dosage acide-base $1$ pour $1$ ($\text{H}_3\text{O}^+ + \text{HO}^- \rightarrow 2\,\text{H}_2\text{O}$) :

$$\boxed{C_A\,V_A = C_B\,V_E}\qquad\Longrightarrow\qquad C_A = \frac{C_B\,V_E}{V_A}$$

où $V_E$ est le **volume à l'équivalence**, repéré par le saut brutal de pH (point
d'inflexion de la courbe $\text{pH} = f(V)$).

> **Exemple.** On dose $V_A = 20{,}0\ \text{mL}$ d'acide fort par une base à
> $C_B = 0{,}10\ \text{mol·L}^{-1}$. Le saut de pH est centré sur $V_E = 15{,}0\ \text{mL}$.
> Alors $C_A = \dfrac{0{,}10 \times 15{,}0}{20{,}0} = 0{,}075\ \text{mol·L}^{-1}$.

> ⚠️ À l'équivalence d'un dosage acide fort / base forte, $\text{pH} = 7$ à $25\ \text{°C}$ ;
> mais pour un acide **faible** dosé par une base forte, l'équivalence est **basique**
> ($\text{pH} > 7$). Le volume $V_E$, lui, se lit toujours au saut de pH.

---

## 4. Conductivité et conductimétrie

### La conductivité d'une solution

Une solution ionique **conduit le courant** grâce à ses ions. Sa **conductivité** $\sigma$
(en $\text{S·m}^{-1}$) est la somme des contributions de tous les ions présents :

$$\boxed{\sigma = \sum_i \lambda_i\,c_i}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $\sigma$ | conductivité de la solution | $\text{S·m}^{-1}$ |
| $\lambda_i$ | conductivité molaire ionique de l'ion $i$ | $\text{S·m}^2\text{·mol}^{-1}$ |
| $c_i$ | concentration de l'ion $i$ | $\text{mol·m}^{-3}$ |

> **Exemple.** Solution de chlorure de sodium à $c = 1{,}0\times 10^{-2}\ \text{mol·L}^{-1}$,
> soit $c = 10\ \text{mol·m}^{-3}$ pour chaque ion. Avec
> $\lambda(\text{Na}^+) = 5{,}0\times 10^{-3}$ et $\lambda(\text{Cl}^-) = 7{,}6\times 10^{-3}\ \text{S·m}^2\text{·mol}^{-1}$ :
> $\sigma = (5{,}0 + 7{,}6)\times 10^{-3} \times 10 = 0{,}13\ \text{S·m}^{-1}$.

> ⚠️ **Les unités SI de $\sigma = \sum \lambda_i c_i$ exigent $c_i$ en $\text{mol·m}^{-3}$**,
> pas en $\text{mol·L}^{-1}$. Rappel : $1\ \text{mol·L}^{-1} = 10^{3}\ \text{mol·m}^{-3}$. C'est
> le piège n°1 de la conductimétrie : un facteur $1000$ oublié.

### Conductance et cellule

Le conductimètre mesure une **conductance** $G$ (en siemens, $\text{S}$), reliée à $\sigma$
par la géométrie de la cellule de mesure : $G = k\,\sigma$, où $k$ (en $\text{m}$) est la
**constante de cellule** (rapport surface/distance des électrodes). À cellule fixée, $G$ est
**proportionnelle** à $\sigma$.

### Dosage conductimétrique

On suit $\sigma$ (ou $G$) pendant qu'on verse le titrant. À chaque instant on remplace
certains ions par d'autres, de conductivités **différentes** : la courbe
$\sigma = f(V)$ est faite de **segments de droite** qui **changent de pente** à
l'**équivalence**. On repère $V_E$ à l'**intersection** des deux droites.

> **Exemple.** Dosage de $\text{HCl}$ par $\text{NaOH}$. Avant l'équivalence, les
> $\text{H}_3\text{O}^+$ (très conducteurs) sont remplacés par des $\text{Na}^+$ : $\sigma$
> **diminue**. Après l'équivalence, on ajoute des $\text{HO}^-$ en excès : $\sigma$
> **augmente**. La courbe forme un **V**, dont la pointe donne $V_E$.

> ⚠️ En conductimétrie, on ne cherche **pas** un saut : on prolonge deux **droites** et on
> lit leur intersection. Il faut donc des points **avant et après** l'équivalence. Penser
> aussi à **diluer peu** (ajouter de l'eau) pour que les segments restent bien droits.

---

## 5. Oxydoréduction et piles

### Couples et demi-équations

Une réaction d'**oxydoréduction** est un transfert d'**électrons**. Un **oxydant** capte des
électrons, un **réducteur** en cède. À chaque couple **Ox/Red** correspond une
**demi-équation électronique** :

$$\text{Ox} + n\,\text{e}^- \rightleftharpoons \text{Red}$$

> **Exemple.** $\text{Cu}^{2+} + 2\,\text{e}^- \rightleftharpoons \text{Cu}$ (couple
> $\text{Cu}^{2+}/\text{Cu}$) et $\text{Zn}^{2+} + 2\,\text{e}^- \rightleftharpoons \text{Zn}$
> (couple $\text{Zn}^{2+}/\text{Zn}$).

Une équation d'oxydoréduction combine **deux** demi-équations en **équilibrant les
électrons** (autant cédés que captés) : le réducteur d'un couple réduit l'oxydant de l'autre.

### La pile

Une **pile** convertit une réaction d'oxydoréduction **spontanée** en énergie électrique.
Elle est faite de **deux demi-piles** reliées par un **pont salin**. Dans chaque demi-pile,
un couple Ox/Red ; les électrons circulent dans le circuit extérieur.

- À l'**anode** (borne $\ominus$) : **oxydation**, le réducteur cède des électrons.
- À la **cathode** (borne $\oplus$) : **réduction**, l'oxydant capte des électrons.

### Potentiel et force électromotrice

Chaque électrode possède un **potentiel** $E$ (en volts), d'autant plus grand que le couple
est **oxydant**. On tabule des **potentiels standards** $E^\circ$. La **force électromotrice**
(f.é.m.) de la pile est la différence des potentiels des deux bornes, **toujours positive** :

$$\boxed{E_{\text{pile}} = E_{\oplus} - E_{\ominus} > 0}\qquad E_{\text{pile}} \text{ en } \text{V}$$

Le couple de **plus haut** potentiel impose sa **réduction** (borne $\oplus$) ; celui de plus
**bas** potentiel subit l'**oxydation** (borne $\ominus$).

> **Exemple (pile Daniell).** Couples $\text{Cu}^{2+}/\text{Cu}$
> ($E^\circ = +0{,}34\ \text{V}$) et $\text{Zn}^{2+}/\text{Zn}$ ($E^\circ = -0{,}76\ \text{V}$).
> Le cuivre, plus oxydant, est la borne $\oplus$ (réduction $\text{Cu}^{2+}\to\text{Cu}$) ;
> le zinc est la borne $\ominus$ (oxydation $\text{Zn}\to\text{Zn}^{2+}$). f.é.m. :
> $E_{\text{pile}} = 0{,}34 - (-0{,}76) = 1{,}10\ \text{V}$. Bilan :
> $\text{Cu}^{2+} + \text{Zn} \rightarrow \text{Cu} + \text{Zn}^{2+}$.

> ⚠️ La f.é.m. se calcule $E_{\oplus} - E_{\ominus}$ et doit sortir **positive**. Si ton
> résultat est négatif, tu as **inverti** les bornes : c'est l'autre couple qui est la
> cathode.

---

## 6. Tableau récapitulatif

| | |
|---|---|
| Solubilité | $s = \dfrac{n_{\max}}{V}$ en $\text{mol·L}^{-1}$ ; saturation quand le solide ne se dissout plus |
| Produit de solubilité | $K_s = [A^{n+}]^a[B^{m-}]^b$ ; type $1$–$1$ : $s=\sqrt{K_s}$ ; type $1$–$2$ : $s=(K_s/4)^{1/3}$ |
| Précipitation | $Q_r > K_s$ précipite ; $Q_r < K_s$ tout dissous ; $Q_r = K_s$ saturé |
| pH | $\text{pH} = -\log[\text{H}_3\text{O}^+]$ ; $[\text{H}_3\text{O}^+] = 10^{-\text{pH}}$ ; acide fort : $\text{pH}=-\log c$ |
| Eau | $K_e = [\text{H}_3\text{O}^+][\text{HO}^-] = 10^{-14}$ à $25\ \text{°C}$ ; neutre $\text{pH}=7$ |
| Dosage acide-base | à l'équivalence ($1$–$1$) : $C_A V_A = C_B V_E$ |
| Conductivité | $\sigma = \sum \lambda_i c_i$ ; $\sigma$ en $\text{S·m}^{-1}$, $\lambda$ en $\text{S·m}^2\text{·mol}^{-1}$, $c$ en $\text{mol·m}^{-3}$ |
| Dosage conductimétrique | intersection de deux droites $\sigma=f(V)$ ; pas un saut |
| Pile | f.é.m. $E_{\text{pile}} = E_\oplus - E_\ominus > 0$ ; anode $\ominus$ oxydation, cathode $\oplus$ réduction |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre solubilité $s$ et produit de solubilité $K_s$.** $s$ est une concentration
   ($\text{mol·L}^{-1}$), $K_s$ un produit de concentrations. On relie les deux **par
   l'équation de dissolution** : pour $AB_2$, $K_s = 4s^3$, pas $K_s = s$.
2. **Se tromper de concentration d'ion.** Dans $K_s$ et dans $\sigma$, un ion présent avec un
   coefficient $2$ compte pour $2s$ (ou $2c$) : $\text{CaF}_2$ donne $[\text{F}^-] = 2s$.
3. **Oublier de convertir $c$ en $\text{mol·m}^{-3}$ dans $\sigma = \sum \lambda_i c_i$.**
   Les $\lambda_i$ tabulés sont en $\text{S·m}^2\text{·mol}^{-1}$ : il faut
   $c$ en $\text{mol·m}^{-3}$ ($1\ \text{mol·L}^{-1} = 10^3\ \text{mol·m}^{-3}$). Sinon
   $\sigma$ est faux d'un facteur $1000$.
4. **Prendre $[\text{H}_3\text{O}^+] = c$ pour un acide faible.** Ça n'est vrai que pour un
   acide **fort** (réaction totale). Un acide faible est moins dissocié : $\text{pH} > -\log c$.
5. **Chercher un « saut » en conductimétrie.** La conductimétrie donne des **droites** qui
   changent de pente : on lit $V_E$ à leur **intersection**, pas à un saut de $\sigma$.
6. **Écrire une f.é.m. négative.** $E_{\text{pile}} = E_\oplus - E_\ominus$ est **positive**
   par construction. Un signe $-$ signale que tu as inversé anode et cathode.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « Sciences physiques et chimiques en laboratoire » (SPCL),
enseignement de spécialité, série STL, classe terminale — BO spécial n°8 du 25 juillet 2019.
PDF officiel Terminale SPCL :
https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extrait : docs/programme-stl-spcl.txt, section « Composition des systèmes chimiques (Tale) »,
qui liste :
  - Solubilité, dissolution, précipitation.
  - Acides et bases ; pH ; couples ; conductivité et conductimétrie.
  - Oxydoréduction ; piles.
Le .txt fourni ne donne que les intitulés (pas le détail des capacités exigibles) : contenu
détaillé (Ks/Qr, relation s–Ks, force des acides, σ=Σλc, potentiels, f.é.m.) rédigé à partir
des attendus usuels du niveau terminale. À CONFRONTER AU PDF/BO OFFICIEL par un professeur
avant publication.

⚠️ POINTS À CONFRONTER AU RELECTEUR :
- Ks est ici manipulé via les concentrations en mol/L (échelle du niveau). Formellement Ks est
  défini avec des activités et donc sans dimension : vérifier la convention retenue en STL SPCL
  et l'homogénéité voulue (avec/sans c° de référence).
- Constante d'acidité Ka / pKa : présentée brièvement. Confirmer que Ka est au programme
  terminale STL SPCL (relation de Henderson NON incluse volontairement, à valider si attendue).
- Potentiels standards E° : valeurs Cu²⁺/Cu = +0,34 V et Zn²⁺/Zn = −0,76 V (tables usuelles).
  Vérifier que le référentiel STL utilise bien E° (et non une simple comparaison qualitative
  des pouvoirs oxydants sans valeurs chiffrées). Relation de Nernst NON introduite.
- Valeurs de conductivités molaires ioniques λ (Na⁺ 5,0e-3 ; Cl⁻ 7,6e-3 ; H₃O⁺ ~35e-3 ;
  HO⁻ ~20e-3 S·m²·mol⁻¹) : ordres de grandeur usuels à 25 °C, à recaler sur la table STL.
- Ks(AgCl) = 1,8e-10 et pH(CH₃COOH 1e-2) ≈ 3,4 : valeurs standard, à confirmer sur les tables
  de référence du niveau.
- Le programme dit « dosage » sans détailler pH-métrique vs conductimétrique vs colorimétrique :
  les trois suivis sont évoqués. À valider selon les capacités exigibles du BO.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
