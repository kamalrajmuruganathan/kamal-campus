---
id: tale-spe-pc-gaz-parfait
titre: "Modèle du gaz parfait"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "L'énergie : conversions et transferts"
duree_lecture_min: 14
prerequis:
  - Quantité de matière et mole (Seconde)
  - Pression et forces pressantes (Seconde)
  - Écriture scientifique et conversions d'unités (Seconde)
statut: brouillon
relu_par: null
---

# Modèle du gaz parfait

> Un gaz, c'est du vide presque partout et quelques milliards de milliards de particules qui
> filent dans tous les sens. Le **modèle du gaz parfait** fait le pari qu'on peut oublier la
> taille de ces particules et les forces entre elles, et malgré tout **prévoir** la pression,
> la température et le volume d'un gaz par une seule relation : $PV = nRT$. Simple, et
> redoutablement efficace tant que le gaz n'est ni trop froid ni trop comprimé.

---

## 1. Le modèle du gaz parfait

### Définition

Le **gaz parfait** est un modèle microscopique dans lequel :

- les particules (atomes ou molécules) sont **ponctuelles** : leur volume propre est négligeable
  devant le volume offert au gaz ;
- elles n'ont **aucune interaction à distance** entre elles (ni attraction, ni répulsion) ;
- elles sont en **agitation permanente et désordonnée** (l'agitation thermique) ;
- les seuls chocs sont **parfaitement élastiques** : ils conservent l'énergie cinétique.

> **Exemple.** L'air de la salle à température et pression ordinaires se comporte très bien
> comme un gaz parfait : les molécules $\mathrm{N_2}$ et $\mathrm{O_2}$ occupent moins d'un
> millième du volume disponible, et passent l'essentiel de leur temps loin les unes des autres.

### Pourquoi un modèle ?

Un vrai gaz est trop compliqué pour être décrit particule par particule (un litre d'air en
contient environ $3 \times 10^{22}$). Le modèle remplace cette foule par quelques **grandeurs
macroscopiques** mesurables, reliées entre elles par une loi unique.

---

## 2. Les grandeurs macroscopiques

Trois grandeurs décrivent l'état d'un gaz, plus la quantité de matière. **En physique, on
travaille dans les unités du Système international (SI).**

| Grandeur | Symbole | Unité SI | Symbole d'unité |
|---|---|---|---|
| Pression | $P$ | pascal | Pa |
| Volume | $V$ | mètre cube | m³ |
| Température **thermodynamique** | $T$ | kelvin | K |
| Quantité de matière | $n$ | mole | mol |
| Masse volumique | $\rho$ | kilogramme par mètre cube | kg·m⁻³ |

### La pression

La **pression** est le quotient de la force pressante exercée perpendiculairement à une surface
par l'aire de cette surface :

$$\boxed{P = \frac{F}{S}}$$

avec $F$ en newtons (N), $S$ en m² et $P$ en pascals (Pa). Un pascal, c'est une pression très
faible : la pression atmosphérique moyenne vaut environ $1{,}013 \times 10^{5}$ Pa.

> **Exemple.** Une force pressante de $20$ N répartie sur $S = 4{,}0 \times 10^{-3}$ m² donne
> $P = \dfrac{20}{4{,}0 \times 10^{-3}} = 5{,}0 \times 10^{3}$ Pa.

### La température thermodynamique

La **température thermodynamique** $T$ se mesure en **kelvins (K)**. Son zéro, le **zéro absolu**
($0$ K), est la température la plus basse concevable : l'agitation thermique y est minimale.

La conversion avec la température Celsius $\theta$ (en °C) est **une addition**, pas un facteur :

$$\boxed{T\,(\text{K}) = \theta\,(\text{°C}) + 273{,}15}$$

> **Exemple.** $\theta = 25$ °C correspond à $T = 25 + 273{,}15 = 298{,}15$ K $\approx 298$ K.
> Et $0$ °C correspond à $273{,}15$ K, pas à $0$ K.

### La masse volumique

La **masse volumique** relie la masse $m$ de gaz au volume $V$ qu'il occupe :

$$\boxed{\rho = \frac{m}{V}}$$

en kg·m⁻³. Pour un gaz elle est petite (l'air : $\rho \approx 1{,}2$ kg·m⁻³ dans les conditions
usuelles), mille fois plus faible que celle d'un liquide.

---

## 3. Interprétation microscopique

Le programme demande de **relier qualitativement** les grandeurs macroscopiques aux propriétés
microscopiques. Deux idées suffisent.

### La pression vient des chocs

Chaque particule qui heurte une paroi lui communique une petite poussée. La **pression** est le
résultat macroscopique de ces **milliards de chocs par seconde** sur la paroi.

- Plus il y a de particules dans un volume donné, plus il y a de chocs → **pression plus grande**.
- Plus les particules vont vite, plus les chocs sont violents et fréquents → **pression plus grande**.

> **Exemple.** En comprimant un gaz (volume plus petit à quantité de matière fixée), on augmente
> le nombre de chocs par unité de surface : la pression monte. C'est ce qu'on ressent en bouchant
> l'orifice d'une pompe à vélo qu'on enfonce.

### La température mesure l'agitation

La **température thermodynamique** est l'image de l'**agitation thermique** : plus $T$ est
élevée, plus la **vitesse moyenne** des particules — et donc leur énergie cinétique moyenne —
est grande.

- Chauffer un gaz, c'est accélérer ses particules.
- Au zéro absolu ($T = 0$ K), l'agitation serait minimale : c'est pour cela que $T$ ne peut pas
  être négative.

> **Exemple.** À volume constant, chauffer un gaz augmente la vitesse des particules, donc la
> violence des chocs, donc la pression. Un aérosol laissé au soleil voit sa pression interne
> grimper : c'est l'agitation thermique qui augmente.

> ⚠️ La température **n'est pas** une quantité de chaleur ni une énergie : c'est une mesure de
> l'agitation moyenne. Un dé à coudre d'eau bouillante contient moins d'énergie qu'une baignoire
> tiède, alors qu'il est plus chaud.

---

## 4. L'équation d'état PV = nRT

### La loi

Pour un gaz parfait, les quatre grandeurs $P$, $V$, $n$ et $T$ sont liées par l'**équation
d'état** :

$$\boxed{PV = nRT}$$

où $R$ est la **constante des gaz parfaits** :

$$\boxed{R = 8{,}314\ \text{J·K}^{-1}\text{·mol}^{-1}}$$

**Impératif : chaque grandeur dans son unité SI.** Avec $R = 8{,}314$, l'équation n'est vraie que si

$$P\ \text{en Pa} \qquad V\ \text{en m}^3 \qquad T\ \text{en K} \qquad n\ \text{en mol}.$$

> **Exemple.** Quel volume occupe $n = 1{,}0$ mol de gaz parfait à $\theta = 0$ °C sous
> $P = 1{,}013 \times 10^{5}$ Pa ?
> On convertit d'abord : $T = 0 + 273{,}15 = 273{,}15$ K.
> $V = \dfrac{nRT}{P} = \dfrac{1{,}0 \times 8{,}314 \times 273{,}15}{1{,}013 \times 10^{5}}
> = 2{,}24 \times 10^{-2}$ m³, soit **22,4 L** — le volume molaire bien connu des conditions
> normales de température et de pression.

### Isoler l'inconnue

L'équation se réarrange selon ce qu'on cherche :

$$P = \frac{nRT}{V} \qquad V = \frac{nRT}{P} \qquad n = \frac{PV}{RT} \qquad T = \frac{PV}{nR}$$

> **Exemple.** Une bouteille de $V = 5{,}0$ L contient $n = 0{,}20$ mol de gaz à $T = 300$ K.
> Convertir le volume : $V = 5{,}0$ L $= 5{,}0 \times 10^{-3}$ m³.
> $P = \dfrac{nRT}{V} = \dfrac{0{,}20 \times 8{,}314 \times 300}{5{,}0 \times 10^{-3}}
> = 1{,}0 \times 10^{5}$ Pa.

### Transformations à quantité de matière constante

Si $n$ ne change pas, alors $\dfrac{PV}{T} = nR$ est **constant** entre un état 1 et un état 2 :

$$\boxed{\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}}$$

C'est pratique quand on ne connaît ni $n$ ni $R$, mais qu'on compare deux états du **même** gaz.

> **Exemple.** À température constante, si on divise le volume par deux, la pression double
> ($P_1 V_1 = P_2 V_2$) : c'est la loi de Boyle-Mariotte, cas particulier de l'équation d'état.

---

## 5. Les conversions à ne jamais rater

C'est le cœur des erreurs en physique. Avant toute application numérique, on convertit.

| Ce que donne l'énoncé | Ce que veut $PV = nRT$ | Conversion |
|---|---|---|
| $\theta$ en °C | $T$ en K | $T = \theta + 273{,}15$ |
| $V$ en L | $V$ en m³ | $\div 1000$ (soit $\times 10^{-3}$) |
| $V$ en mL | $V$ en m³ | $\times 10^{-6}$ |
| $P$ en bar | $P$ en Pa | $\times 10^{5}$ |
| $P$ en hPa | $P$ en Pa | $\times 10^{2}$ |
| $m$ en g | $m$ en kg (pour $\rho$) | $\div 1000$ |

> **Exemple.** $V = 250$ mL $= 250 \times 10^{-6}$ m³ $= 2{,}50 \times 10^{-4}$ m³.
> Et $P = 1{,}02$ bar $= 1{,}02 \times 10^{5}$ Pa. On ne mélange jamais litres et pascals.

---

## 6. Les limites du modèle

Le gaz parfait est un modèle : il **cesse d'être valable** dans certaines conditions, où les
hypothèses microscopiques tombent.

- **À haute pression** (gaz très comprimé), le volume propre des particules n'est plus
  négligeable : on ne peut plus les traiter comme ponctuelles.
- **À basse température** (proche de la liquéfaction), les interactions attractives entre
  particules ne sont plus négligeables : le gaz peut se **liquéfier**, ce qu'aucun gaz parfait
  ne fait jamais.
- Un vrai gaz est décrit plus finement par des modèles de **gaz réels** (par exemple l'équation
  de van der Waals, hors programme), qui réintroduisent volume propre et interactions.

> **En pratique.** Dans les conditions courantes (autour de $10^{5}$ Pa et de la température
> ambiante), l'air, l'azote, l'oxygène ou le dioxyde de carbone obéissent très bien à
> $PV = nRT$. Le modèle est excellent tant qu'on reste loin de la liquéfaction et des très
> hautes pressions.

---

## 7. Tableau récapitulatif

| | |
|---|---|
| Modèle | particules ponctuelles, sans interaction, chocs élastiques |
| Pression | $P = \dfrac{F}{S}$ — en **Pa**, image des **chocs** sur les parois |
| Température | $T$ en **K**, image de l'**agitation thermique** |
| Conversion °C → K | $T = \theta + 273{,}15$ |
| Masse volumique | $\rho = \dfrac{m}{V}$ en kg·m⁻³ |
| Équation d'état | $\boxed{PV = nRT}$ avec $R = 8{,}314$ J·K⁻¹·mol⁻¹ |
| Unités SI obligatoires | $P$ en Pa, $V$ en m³, $T$ en K, $n$ en mol |
| Deux états, même gaz | $\dfrac{P_1 V_1}{T_1} = \dfrac{P_2 V_2}{T_2}$ |
| Limites | haute pression, basse température (liquéfaction) |

---

## 8. Les erreurs qui coûtent des points

1. **Laisser la température en degrés Celsius.** $PV = nRT$ exige des **kelvins**. Oublier le
   $+273{,}15$ fausse tout — et à $\theta = 0$ °C, mettre $T = 0$ dans la formule donne $PV = 0$,
   ce qui est absurde.
2. **Garder le volume en litres.** Avec $R = 8{,}314$, le volume doit être en **m³** :
   $1$ L $= 10^{-3}$ m³, $1$ mL $= 10^{-6}$ m³.
3. **Oublier de convertir la pression.** Une pression donnée en **bar** ou en **hPa** doit passer
   en pascals ($1$ bar $= 10^{5}$ Pa, $1$ hPa $= 100$ Pa) avant tout calcul.
4. **Confondre température et énergie (ou chaleur).** La température mesure l'agitation moyenne,
   pas une quantité d'énergie stockée.
5. **Croire le modèle toujours valable.** À très haute pression ou très basse température, le gaz
   parfait ne décrit plus le gaz réel : il peut même se liquéfier.
6. **Multiplier au lieu de diviser en isolant l'inconnue.** Pour trouver $V$, on écrit
   $V = \dfrac{nRT}{P}$ : la pression est **au dénominateur**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019, thème 3 « L'énergie : conversions et transferts »,
section 3.1 « Modèle du gaz parfait » (docs/programme-terminale-physique-chimie-2019.txt,
lignes 136-143). Extrait à confronter au PDF officiel education.gouv.fr / eduscol avant
publication.

Contenu couvert, conforme aux « Notions et contenus » et « Capacités exigibles » :
- modèle du gaz parfait (§1),
- grandeurs macroscopiques : masse volumique, température thermodynamique, pression (§2),
- interprétation microscopique qualitative (§3, capacité « relier qualitativement »),
- équation d'état PV = nRT et son exploitation (§4, capacité « exploiter PV = nRT »),
- limites du modèle (§6, capacité « identifier quelques limites »).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Valeur de R retenue : 8,314 J·K⁻¹·mol⁻¹ (imposée par l'énoncé de la commande). Le BO ne fixe
  pas la valeur ; vérifier la précision attendue (8,31 vs 8,314).
- La relation P1V1/T1 = P2V2/T2 (§4) n'est pas nommée explicitement dans le programme : elle
  découle de PV=nRT à n constant. Vérifier qu'on peut la mobiliser au bac ou s'en tenir à PV=nRT.
- Loi de Boyle-Mariotte citée comme cas particulier : à confirmer comme attendue.
- Le lien quantitatif température ↔ énergie cinétique moyenne (E_c = (3/2) k_B T) est HORS
  programme de terminale spé (relève du supérieur) : volontairement laissé au niveau qualitatif.
- Volume molaire 22,4 L (CNTP) donné en exemple : vérifier la valeur/conditions attendues (22,4 L
  à 0 °C sous 1,013 bar ; 24,0 L à 20 °C — selon convention du manuel de l'établissement).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
