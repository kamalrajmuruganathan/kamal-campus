---
id: tale-st2s-pc-fluides-pression-sanguine
titre: "Propriétés des fluides et pression sanguine"
voie: technologique
niveau: terminale-techno
parcours: pc-sante-st2s
matiere: physique-chimie
programme: "BO spécial n°1 du 22 janvier 2019 — physique-chimie pour la santé, série ST2S"
theme: "Analyser et diagnostiquer"
duree_lecture_min: 16
prerequis:
  - Écriture scientifique et puissances de 10 (Seconde)
  - Conversions d'unités (préfixes milli-, centi-, kilo-)
  - Aire d'un disque et d'un rectangle (collège)
  - Masse volumique ρ = m/V (Seconde)
statut: brouillon
relu_par: null
---

# Propriétés des fluides et pression sanguine

> Le sang est un **fluide** qui circule dans un réseau de vaisseaux, poussé par le
> cœur. Pour comprendre ce que mesure un professionnel de santé quand il prend une
> **tension** ou parle de **débit cardiaque**, il faut d'abord deux grandeurs de
> physique : le **débit** (quelle quantité de fluide passe par seconde) et la
> **pression** (avec quelle force le fluide pousse sur une paroi). Ce chapitre relie
> ces grandeurs physiques aux mesures que tu croiseras en stage.

---

## 1. Le débit d'un fluide

### Définition

Le **débit volumique** $D$ mesure le **volume de fluide** qui traverse une section
pendant une durée donnée. Plus il passe de fluide par seconde, plus le débit est grand.

$$\boxed{D = \frac{V}{\Delta t}}$$

| Grandeur | Symbole | Unité de base |
|---|---|---|
| Volume écoulé | $V$ | mètre cube (m³) |
| Durée de l'écoulement | $\Delta t$ | seconde (s) |
| Débit volumique | $D$ | mètre cube par seconde (m³/s) |

En santé, on l'exprime souvent en **litres par minute (L/min)** ou en
**millilitres par minute (mL/min)**, plus parlants que les m³/s.

> **Exemple — une perfusion.** Une poche de $500$ mL est perfusée en $2$ h $= 120$ min.
> Le débit vaut $D = \dfrac{V}{\Delta t} = \dfrac{500}{120} \approx 4{,}2$ mL/min : un
> peu plus de $4$ mL passent dans la veine chaque minute.

### Relation débit = vitesse × section

Le même débit peut aussi s'écrire à partir de la **vitesse** $v$ du fluide et de
l'**aire de la section** $S$ du tuyau (ou du vaisseau) traversé :

$$\boxed{D = v \times S}$$

| Grandeur | Symbole | Unité de base |
|---|---|---|
| Vitesse du fluide | $v$ | mètre par seconde (m/s) |
| Aire de la section | $S$ | mètre carré (m²) |
| Débit volumique | $D$ | mètre cube par seconde (m³/s) |

Vérifie les unités : $\text{m/s} \times \text{m}^2 = \text{m}^3/\text{s}$. Tout est cohérent.

> **Exemple.** De l'eau circule à $v = 0{,}5$ m/s dans un tube de section
> $S = 2$ cm² $= 2 \times 10^{-4}$ m². Le débit vaut
> $D = v \times S = 0{,}5 \times 2 \times 10^{-4} = 1 \times 10^{-4}$ m³/s, soit
> $0{,}1$ L/s ou encore $6$ L/min.

> ⚠️ **Convertis la section en m² AVANT de multiplier.** Une section « $2$ cm² » n'est
> pas « $2 \times 10^{-2}$ m² » : comme c'est une **aire**, $1$ cm² $= 10^{-4}$ m²
> ($(10^{-2})^2$). Oublier le carré fausse le débit d'un facteur $100$.

### Conséquence : vitesse et section varient en sens inverse

Si le débit se conserve, là où la section **diminue**, la vitesse **augmente** (le
fluide accélère dans un rétrécissement), et inversement.

> **Exemple — santé.** Le sang circule lentement dans l'ensemble des capillaires
> (section totale énorme) et vite dans l'aorte (section unique et étroite), alors que
> le débit reste le même : c'est ce qui laisse le temps aux échanges dans les capillaires.

---

## 2. Le débit cardiaque

### Définition

Le **débit cardiaque** $DC$ est le volume de sang que le cœur éjecte **par minute**.
Il se calcule à partir de deux grandeurs mesurables :

$$\boxed{DC = f_C \times VES}$$

| Grandeur | Symbole | Unité usuelle |
|---|---|---|
| Fréquence cardiaque | $f_C$ | battements par minute (bpm) |
| Volume d'éjection systolique | $VES$ | millilitre (mL) — volume envoyé à **chaque** battement |
| Débit cardiaque | $DC$ | mL/min (souvent converti en L/min) |

Le $VES$ est le volume chassé par le ventricule à **chaque** contraction ; $f_C$ est
le **nombre de contractions par minute**. Leur produit donne bien un volume par minute.

> **Exemple — au repos.** Pour $f_C = 70$ bpm et $VES = 70$ mL :
> $DC = 70 \times 70 = 4900$ mL/min $= 4{,}9$ L/min. Le cœur fait circuler près de
> $5$ litres de sang par minute — soit à peu près **tout** le sang du corps.

> **Exemple — à l'effort.** À l'effort, $f_C$ et $VES$ augmentent tous les deux. Pour
> $f_C = 150$ bpm et $VES = 100$ mL : $DC = 150 \times 100 = 15000$ mL/min $= 15$ L/min.
> Le débit est multiplié par $3$ pour alimenter les muscles.

> ⚠️ **Un débit cardiaque est un volume PAR MINUTE, pas un volume.** Le $VES$
> ($\approx 70$ mL) est le volume d'**un** battement ; le $DC$ ($\approx 5$ L/min) est
> le volume de **tous** les battements d'une minute. Ne les confonds pas.

---

## 3. Force pressante et pression

### Définition

Un fluide (ou un solide) qui appuie sur une surface exerce une **force pressante**
$F$, toujours **perpendiculaire** à la surface. La **pression** $p$ mesure comment
cette force se **répartit** sur l'aire $S$ :

$$\boxed{p = \frac{F}{S}}$$

| Grandeur | Symbole | Unité de base |
|---|---|---|
| Force pressante | $F$ | newton (N) |
| Aire de la surface pressée | $S$ | mètre carré (m²) |
| Pression | $p$ | pascal (Pa) |

Par définition, $1\ \text{Pa} = 1\ \text{N/m}^2$ : une pression d'un pascal, c'est une
force d'un newton répartie sur un mètre carré.

> **Exemple — la même force, deux pressions.** Une personne pèse $F = 600$ N. Debout
> sur des semelles plates ($S = 0{,}03$ m²), elle exerce
> $p = \dfrac{600}{0{,}03} = 20\,000$ Pa. En équilibre sur un talon aiguille
> ($S = 1$ cm² $= 1 \times 10^{-4}$ m²), la **même** force donne
> $p = \dfrac{600}{1 \times 10^{-4}} = 6 \times 10^{6}$ Pa : $300$ fois plus, car la
> surface est $300$ fois plus petite. À force égale, plus la surface est petite, plus
> la pression est grande.

### Unités de pression et conversions

À côté du pascal, la santé utilise des unités liées à la hauteur d'une colonne de
mercure (Hg), car les premiers manomètres étaient des tubes de mercure :

| Unité | Équivaut à | En pascals |
|---|---|---|
| pascal (Pa) | $1$ N/m² | $1$ Pa |
| millimètre de mercure (mmHg) | — | $1$ mmHg $\approx 133$ Pa |
| centimètre de mercure (cmHg) | $10$ mmHg | $1$ cmHg $\approx 1\,330$ Pa |
| atmosphère (atm) | $760$ mmHg $= 76$ cmHg | $1$ atm $\approx 1{,}01 \times 10^{5}$ Pa |

Retiens les deux ponts utiles :

$$\boxed{1\ \text{cmHg} = 10\ \text{mmHg}} \qquad\qquad \boxed{1\ \text{mmHg} \approx 133\ \text{Pa}}$$

> **Exemple — une tension.** Une tension systolique de $120$ mmHg vaut
> $120 = 12 \times 10$, soit $12$ cmHg (on **divise** les mmHg par $10$ pour obtenir
> des cmHg). En pascals : $120 \times 133 \approx 16\,000$ Pa $= 1{,}6 \times 10^{4}$ Pa.

> ⚠️ **mmHg et cmHg ne se valent pas.** $1$ cmHg $= 10$ mmHg, donc « $12$ » en cmHg et
> « $120$ » en mmHg désignent la **même** tension. Comparer un « $8$ » (cmHg) à un
> « $80$ » (mmHg) sans convertir, c'est comparer des mètres à des centimètres.

---

## 4. La pression augmente avec la profondeur

### Le constat

Dans un fluide au repos, la pression n'est pas la même partout : elle **augmente
quand on descend**. C'est pour cela qu'on ressent une gêne aux oreilles en plongeant
au fond d'une piscine — le fluide au-dessus appuie sur ce qui est en dessous.

### La loi fondamentale de la statique des fluides

Entre deux points d'un même fluide au repos séparés d'une **hauteur** $h$ (le point
bas est plus profond), la différence de pression vaut :

$$\boxed{\Delta p = \rho \times g \times h}$$

| Grandeur | Symbole | Unité de base |
|---|---|---|
| Masse volumique du fluide | $\rho$ (rhô) | kilogramme par mètre cube (kg/m³) |
| Intensité de la pesanteur | $g$ | newton par kilogramme (N/kg), $g \approx 10$ N/kg |
| Différence de hauteur | $h$ | mètre (m) |
| Différence de pression | $\Delta p$ | pascal (Pa) |

Vérifie les unités : $\text{kg/m}^3 \times \text{N/kg} \times \text{m} = \text{N/m}^2 = \text{Pa}$.
La pression au point bas est celle du point haut **augmentée** de $\Delta p$ :
$p_{\text{bas}} = p_{\text{haut}} + \rho g h$.

> **Exemple — sous l'eau.** Eau : $\rho = 1000$ kg/m³, $g = 10$ N/kg. À une profondeur
> $h = 10$ m : $\Delta p = 1000 \times 10 \times 10 = 100\,000$ Pa $= 1{,}0 \times 10^{5}$ Pa,
> soit environ **une atmosphère de plus**. À $10$ m sous l'eau, la pression est
> quasiment le double de celle en surface.

> **Exemple — santé.** Le sang a une masse volumique $\rho \approx 1060$ kg/m³. Debout,
> les pieds sont à environ $h = 1{,}3$ m sous le cœur. La pression du sang y est plus
> forte de $\Delta p = 1060 \times 10 \times 1{,}3 \approx 13\,800$ Pa, soit
> $\dfrac{13\,800}{133} \approx 104$ mmHg de plus qu'au niveau du cœur. C'est pourquoi
> la pression sanguine dépend de la **position** du corps.

> ⚠️ **La différence de pression ne dépend PAS de la forme du récipient**, seulement de
> la hauteur $h$, de $\rho$ et de $g$. Un tube fin et une large cuve remplis à la même
> hauteur ont la même pression au fond.

---

## 5. La tension artérielle

### Définition

La **tension artérielle** (ou pression artérielle) est la pression du sang sur la
paroi des artères. Elle **varie au rythme du cœur** entre deux valeurs :

| Terme | Quand ? | Ce qu'elle mesure |
|---|---|---|
| Pression **systolique** | pendant la **systole** (le cœur se **contracte** et éjecte le sang) | la pression **maximale** |
| Pression **diastolique** | pendant la **diastole** (le cœur se **relâche** et se remplit) | la pression **minimale** |

On note la tension « systolique / diastolique ». En France on l'exprime souvent en
**cmHg** : une tension normale est de l'ordre de **$12/8$** (cmHg), c'est-à-dire
**$120/80$** en mmHg.

> **Exemple.** « $12/8$ » signifie : pression systolique $= 12$ cmHg $= 120$ mmHg (le
> cœur pousse) et pression diastolique $= 8$ cmHg $= 80$ mmHg (le cœur se repose). Le
> premier nombre est toujours le plus grand.

### Le principe de la mesure (tensiomètre)

Le **tensiomètre** (ou sphygmomanomètre) comprend un **brassard** gonflable relié à un
**manomètre** gradué en mmHg :

1. On gonfle le brassard autour du bras jusqu'à **écraser l'artère** : le sang ne passe
   plus, on n'entend rien.
2. On **dégonfle** lentement. Quand la pression du brassard descend juste **en dessous
   de la pression systolique**, le sang force le passage par à-coups : on entend les
   premiers bruits (bruits de Korotkoff). Le manomètre indique alors la **systolique**.
3. On continue à dégonfler. Quand la pression du brassard passe **sous la pression
   diastolique**, le sang coule librement en permanence, les bruits **disparaissent** :
   le manomètre indique la **diastolique**.

> **Exemple.** Les bruits apparaissent quand le manomètre lit $120$ mmHg et
> disparaissent à $80$ mmHg : la tension mesurée est $120/80$ mmHg, soit $12/8$ cmHg.

> ⚠️ **On compare la pression du BRASSARD à celle du SANG.** La mesure repose sur le
> moment où la pression appliquée par le brassard égale la pression du sang — d'où une
> lecture directe en mmHg sur le manomètre.

---

## 6. À retenir absolument

| | |
|---|---|
| Débit volumique | $D = \dfrac{V}{\Delta t}$ (m³/s ; souvent L/min ou mL/min) |
| Débit et vitesse | $D = v \times S$ (attention : $S$ en m², $1$ cm² $= 10^{-4}$ m²) |
| Débit cardiaque | $DC = f_C \times VES$ (volume PAR minute) ; repos $\approx 5$ L/min |
| Pression | $p = \dfrac{F}{S}$, en pascals ; $1$ Pa $= 1$ N/m² |
| Conversions Hg | $1$ cmHg $= 10$ mmHg ; $1$ mmHg $\approx 133$ Pa ; $1$ atm $= 760$ mmHg |
| Statique des fluides | $\Delta p = \rho g h$ (Pa) ; la pression **monte** avec la profondeur |
| Tension artérielle | **systolique** (max, cœur contracté) / **diastolique** (min, cœur relâché) |
| Normale | $\approx 12/8$ cmHg $= 120/80$ mmHg |
| Mesure | brassard + manomètre ; systolique = apparition des bruits, diastolique = disparition |

---

## 7. Les erreurs qui coûtent des points

1. **Oublier le carré dans la conversion des aires.** Pour une section,
   $1$ cm² $= 10^{-4}$ m² (et non $10^{-2}$). Utiliser $10^{-2}$ dans $D = vS$ ou
   $p = F/S$ fausse le résultat d'un facteur $100$.
2. **Confondre débit cardiaque et volume d'éjection.** Le $VES$ ($\approx 70$ mL) est
   le volume d'**un seul** battement ; le $DC$ ($\approx 5$ L/min) est le volume de
   **tous** les battements d'une minute. $DC = f_C \times VES$.
3. **Mélanger mmHg et cmHg.** $1$ cmHg $= 10$ mmHg. Une tension « $12/8$ » (cmHg) est
   la même que « $120/80$ » (mmHg) : pour passer des mmHg aux cmHg on **divise par 10**.
4. **Inverser systolique et diastolique.** La **systolique** (cœur qui se contracte)
   est la valeur la **plus grande** ; la **diastolique** (cœur relâché) la plus petite.
   Le premier nombre écrit est toujours le plus grand.
5. **Croire que $\Delta p = \rho g h$ dépend de la forme du récipient.** Seules
   comptent $\rho$, $g$ et la hauteur $h$. Et $h$ est une **hauteur** en mètres, pas un
   volume : ne pas y glisser un débit ou une section.
6. **Garder des unités mixtes dans $p = F/S$.** Pour obtenir des pascals, il faut $F$
   en **newtons** et $S$ en **mètres carrés**. Des cm², des grammes ou des mmHg donnent
   un résultat qui n'est pas en Pa.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 2 « Analyser et
diagnostiquer », section « Propriétés des fluides et pression sanguine (Tale) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 66-71 :
  - Débit ; relation débit = vitesse × section.
  - Débit cardiaque DC = fC × VES (fréquence cardiaque × volume d'éjection systolique).
  - Force pressante et pression ; unités (Pa, cmHg).
  - Variation de la pression avec la profondeur ; loi fondamentale de la statique des fluides.
  - Tension artérielle systolique et diastolique ; principe de la mesure.
Le .txt (lignes 11-15) précise que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "terminale-techno" (imposé par la consigne de production), cohérent
  avec le chapitre de forme de référence 1st2s "premiere-techno". À harmoniser sur
  tout le parcours pc-sante-st2s si d'autres chapitres portent "premiere"/"terminale"
  sans suffixe.
- CONVERSION 1 mmHg : valeur exacte 133,322 Pa ; arrondie à 133 Pa dans toute la fiche
  et les exercices. 760 mmHg = 1 atm = 101 325 Pa (1,013×10^5). Vérifier le niveau
  d'arrondi attendu (133 Pa vs 133,3 Pa) et l'usage cmHg (usage clinique français) vs
  mmHg (unité SI-adjacente internationale) — le programme cite explicitement « Pa, cmHg ».
- MASSE VOLUMIQUE DU SANG : ρ ≈ 1060 kg/m³ (valeur physiologique courante 1050–1060).
  g pris à 10 N/kg pour rester en cohérence avec les autres chapitres PC ; certains
  sujets prennent 9,81. À harmoniser.
- LOI FONDAMENTALE : énoncée sous forme Δp = ρgh (différence entre deux points) et
  p_bas = p_haut + ρgh. Le programme parle de « variation de la pression avec la
  profondeur » : formulation simplifiée retenue (pas de convention d'axe z orienté),
  à valider par un professeur pour la rigueur (signe/orientation).
- DÉBIT CARDIAQUE : DC exprimé en L/min ; valeurs repos ~5 L/min (fC=70, VES=70 mL) et
  effort ~15 L/min standard. Ordres de grandeur physiologiques, à confirmer au niveau
  d'exigence du programme (valeurs vs ordres de grandeur).
- PRINCIPE DE MESURE : méthode auscultatoire (bruits de Korotkoff) décrite simplement ;
  les tensiomètres électroniques usuels sont oscillométriques. Vérifier le degré de
  détail attendu (le programme demande « le principe de la mesure »).
- RELATION D = v×S : donnée comme relation à utiliser ; le programme ne demande pas de
  démonstration. À confirmer parmi les capacités exigibles.

Statut : brouillon, non relu.
-->
