---
id: 1st2s-pc-ondes-sonores-audition
titre: "Ondes sonores et audition"
voie: technologique
niveau: premiere-techno
parcours: pc-sante-st2s
matiere: physique-chimie
programme: "BO spécial n°1 du 22 janvier 2019 — physique-chimie pour la santé, série ST2S"
theme: "Analyser et diagnostiquer"
duree_lecture_min: 15
prerequis:
  - Fréquence et période d'un signal, relation f = 1/T (cycle 4)
  - Écriture scientifique et puissances de 10 (Seconde)
  - Logarithme décimal : log(10^n) = n (introduit ici, en lien avec les maths)
statut: brouillon
relu_par: null
---

# Ondes sonores et audition

> Un son trop aigu qu'on n'entend plus, un baladeur poussé trop fort qui abîme
> l'oreille, une prothèse qui redonne l'audition : derrière ces situations de santé,
> deux grandeurs physiques suffisent à tout comprendre — la **fréquence** (le son est-il
> grave ou aigu ?) et le **niveau d'intensité sonore** en **décibels** (est-il faible,
> fort, ou dangereux ?). Comme futur professionnel du soin, tu dois savoir lire un
> audiogramme, reconnaître un son à risque et expliquer comment une prothèse compense
> une déficience. Ce chapitre relie l'onde sonore à l'oreille qui la reçoit.

---

## 1. Le son est une onde

### Définition

Un **son** est une onde : une vibration qui se propage de proche en proche dans un
milieu **matériel** (l'air le plus souvent, mais aussi l'eau ou les os). La source
(corde vocale, haut-parleur, diapason) fait vibrer l'air, qui transmet la vibration
jusqu'au tympan.

> **Exemple.** Dans le vide, aucun son ne se propage : sans matière à faire vibrer,
> il n'y a pas de son. C'est pourquoi, dans l'espace, deux astronautes ne peuvent pas
> se parler directement.

Le son se propage dans l'air à une **célérité** (vitesse) d'environ $v = 340$ m·s⁻¹.

---

## 2. Fréquence et hauteur d'un son

### La fréquence

Un son pur est une vibration qui se **répète**. La durée d'un motif complet est la
**période** $T$ (en secondes). La **fréquence** $f$ est le nombre de vibrations par
seconde :

$$\boxed{f = \frac{1}{T}} \qquad\qquad T = \frac{1}{f}$$

| Grandeur | Symbole | Unité |
|---|---|---|
| Période | $T$ | seconde (s) |
| Fréquence | $f$ | hertz (Hz) |

> **Exemple.** Le « la » du diapason vibre $440$ fois par seconde : sa fréquence est
> $f = 440$ Hz. Sa période vaut $T = \dfrac{1}{f} = \dfrac{1}{440} \approx 2{,}3 \times 10^{-3}$ s,
> soit environ $2{,}3$ ms.

Multiple très utile : le **kilohertz**, $1\ \text{kHz} = 10^{3}$ Hz $= 1000$ Hz.

### La hauteur

La **hauteur** d'un son, c'est le fait qu'il soit **grave** ou **aigu**. Elle est fixée
**uniquement par la fréquence** :

- son **grave** → **basse** fréquence (peu de vibrations par seconde) ;
- son **aigu** → **haute** fréquence (beaucoup de vibrations par seconde).

> **Exemple — santé.** La voix d'un homme adulte est plus **grave** (fréquences autour
> de $100$–$150$ Hz) que celle d'un enfant, plus **aiguë** (autour de $300$ Hz). Ce
> n'est pas une question de « force » : à volume égal, c'est bien la fréquence qui
> change.

> ⚠️ **Hauteur ≠ intensité.** « Monter le son » d'une chaîne hi-fi ne rend pas le son
> plus aigu : ça le rend plus **fort**. La hauteur (grave/aigu) dépend de $f$ ;
> l'impression de « fort/faible » dépend de l'intensité (§4). Ne confonds jamais les deux.

---

## 3. Les sons audibles, les infrasons et les ultrasons

L'oreille humaine ne perçoit qu'une **plage** de fréquences limitée. Un jeune adulte
entend les sons dont la fréquence est comprise, en gros, entre :

$$\boxed{20\ \text{Hz} \ \leq\ f \ \leq\ 20\ 000\ \text{Hz} = 20\ \text{kHz}}$$

En dehors de cette plage, la vibration existe toujours, mais l'oreille humaine ne la
**perçoit pas** :

| Domaine | Fréquence | Perçu par l'humain ? |
|---|---|---|
| **Infrasons** | $f < 20$ Hz | non |
| **Sons audibles** | $20$ Hz $\leq f \leq 20$ kHz | oui |
| **Ultrasons** | $f > 20$ kHz | non |

> **Exemple — santé/imagerie.** L'**échographie** utilise des **ultrasons** (plusieurs
> **mégahertz**, donc bien au-dessus de $20$ kHz) : inaudibles pour le patient, ils
> traversent les tissus et permettent d'observer un organe ou un fœtus sans rayons X.

> **Exemple — animaux.** Un chien entend jusqu'à environ $40$ kHz : le « sifflet à
> ultrasons » émet un son que le chien perçoit et que le maître, lui, n'entend pas.

> ⚠️ **La borne haute recule avec l'âge.** À $20$ kHz correspond l'oreille d'un **jeune**.
> En vieillissant (ou après une exposition au bruit), on perd d'abord les **aigus** : une
> personne âgée peut ne plus entendre au-delà de $8$–$10$ kHz. C'est ce que révèle un
> audiogramme.

---

## 4. Le niveau d'intensité sonore (en décibels)

### De l'intensité sonore au niveau en décibels

Un son transporte de l'énergie. On mesure cette énergie reçue par l'**intensité sonore**
$I$, exprimée en **watts par mètre carré** ($\text{W·m}^{-2}$). Mais l'oreille est
sensible sur une **plage énorme** : entre le son le plus faible audible et le seuil de
douleur, l'intensité est multipliée par **mille milliards** ($10^{12}$). Des nombres
pareils sont impossibles à manipuler.

On définit donc une grandeur plus commode, le **niveau d'intensité sonore** $L$,
exprimé en **décibels (dB)**, qui **compresse** cette plage grâce au **logarithme
décimal** :

$$\boxed{L = 10 \times \log\!\left(\frac{I}{I_0}\right)} \qquad\text{avec}\qquad I_0 = 10^{-12}\ \text{W·m}^{-2}$$

| Grandeur | Symbole | Unité |
|---|---|---|
| Intensité sonore | $I$ | watt par mètre carré ($\text{W·m}^{-2}$) |
| Intensité de référence | $I_0$ | $10^{-12}\ \text{W·m}^{-2}$ (seuil d'audibilité) |
| Niveau d'intensité sonore | $L$ | décibel (dB) |

$I_0 = 10^{-12}\ \text{W·m}^{-2}$ est le **seuil d'audibilité** : le plus petit son
qu'une oreille normale peut détecter. Pour ce son, $I = I_0$, donc
$L = 10\log(1) = 0$ dB.

### Le logarithme décimal, juste ce qu'il faut

Le logarithme décimal $\log$ répond à la question : *« $10$ à la puissance combien ? »*

$$\log(10^{n}) = n \qquad\text{par exemple}\qquad \log(1) = 0,\quad \log(10) = 1,\quad \log(10^{6}) = 6$$

Deux règles suffisent pour ce chapitre :

- $\log(10^{n}) = n$ ;
- $\log(a \times b) = \log(a) + \log(b)$, donc **multiplier $I$ par $10$ ajoute $10$ dB**
  au niveau ($\log(10\times I) = \log(10)+\log(I) = 1 + \log(I)$).

> **Exemple — calcul direct.** Une conversation correspond à $I = 10^{-6}\ \text{W·m}^{-2}$.
> Son niveau vaut :
> $$L = 10\log\!\left(\frac{10^{-6}}{10^{-12}}\right) = 10\log(10^{6}) = 10 \times 6 = 60\ \text{dB}.$$

> **Exemple — calcul inverse.** Quelle intensité correspond à $L = 100$ dB (concert) ?
> On isole $I$ : $\dfrac{I}{I_0} = 10^{L/10} = 10^{100/10} = 10^{10}$, donc
> $I = 10^{10} \times 10^{-12} = 10^{-2}\ \text{W·m}^{-2}$. Retiens la forme utile :
> $$\boxed{I = I_0 \times 10^{\,L/10}}$$

### Quelques repères à connaître

| Situation | Niveau $L$ | Intensité $I$ ($\text{W·m}^{-2}$) |
|---|---|---|
| Seuil d'audibilité | $0$ dB | $10^{-12}$ |
| Chuchotement | $\approx 30$ dB | $10^{-9}$ |
| Conversation normale | $\approx 60$ dB | $10^{-6}$ |
| Rue passante, seuil de risque | $\approx 85$ dB | $\approx 3 \times 10^{-4}$ |
| Concert, boîte de nuit | $\approx 100$ dB | $10^{-2}$ |
| Seuil de douleur | $\approx 120$ dB | $1$ |

> ⚠️ **Les décibels ne s'additionnent pas comme des watts.** Deux haut-parleurs de
> $80$ dB chacun ne font **pas** $160$ dB. On double l'**intensité** ($I \to 2I$), ce qui
> ajoute $10\log(2) \approx 3$ dB : on obtient environ **$83$ dB**, pas $160$. Doubler
> l'intensité, c'est **+3 dB** ; la multiplier par $10$, c'est **+10 dB**.

---

## 5. La perception d'un son par l'oreille

L'oreille transforme une vibration de l'air en un signal nerveux envoyé au cerveau. Elle
comporte **trois** parties :

| Partie | Éléments | Rôle |
|---|---|---|
| **Oreille externe** | pavillon, conduit auditif | **capte** et canalise le son vers le tympan |
| **Oreille moyenne** | tympan, osselets (marteau, enclume, étrier) | **transmet** et amplifie mécaniquement la vibration |
| **Oreille interne** | cochlée (limaçon) et ses cellules ciliées | **convertit** la vibration en signal nerveux |

Le trajet : le son fait vibrer le **tympan** ; les **osselets** transmettent cette
vibration à la **cochlée** ; à l'intérieur, les **cellules ciliées** vibrent et créent
un **message nerveux** transmis au cerveau par le nerf auditif.

> **Exemple — santé.** Les **cellules ciliées** de la cochlée sont **fragiles et ne se
> régénèrent pas** : détruites par un bruit trop fort, elles le sont **définitivement**.
> C'est la cause principale des surdités dues au bruit.

L'oreille n'est pas sensible de la même façon à toutes les fréquences : elle perçoit le
mieux les fréquences de la **voix** (autour de $1$ à $4$ kHz) et beaucoup moins bien les
graves très bas et les aigus très hauts.

---

## 6. Les risques auditifs : niveau ET durée

Un son endommage l'oreille selon **deux** facteurs qui comptent **ensemble** : le
**niveau** $L$ (en dB) **et** la **durée d'exposition**.

- En dessous de **$80$ dB**, l'exposition prolongée reste sans danger.
- À partir de **$85$ dB**, le risque apparaît : c'est le **seuil de danger** retenu en
  santé au travail, pour une exposition de **$8$ heures** par jour.
- **Plus le niveau monte, plus la durée sans danger s'effondre.** La règle usuelle :
  chaque **+3 dB** (soit une intensité **doublée**) **divise par deux** la durée
  d'exposition tolérable.
- Vers **$120$ dB**, c'est le **seuil de douleur** : le danger est **immédiat**, même
  pour une exposition brève.

| Niveau | Durée d'exposition « à risque » |
|---|---|
| $85$ dB | $8$ h |
| $88$ dB | $4$ h |
| $91$ dB | $2$ h |
| $94$ dB | $1$ h |
| $\geq 120$ dB | danger immédiat |

> **Exemple — santé publique.** Un concert à $100$ dB dépasse largement $85$ dB : même
> une heure d'exposition présente un risque réel pour les cellules ciliées. D'où les
> **bouchons d'oreille** distribués à l'entrée, qui abaissent le niveau reçu de $15$ à
> $25$ dB.

> ⚠️ **Un son peut abîmer sans faire mal.** Les dégâts commencent **bien avant** le
> seuil de douleur ($120$ dB). Un baladeur à $95$ dB pendant des heures, sans aucune
> gêne ressentie, use progressivement l'audition. « Ça ne fait pas mal » ne veut pas dire
> « c'est sans danger ».

---

## 7. Compenser une déficience auditive

Quand l'audition est diminuée (cellules ciliées abîmées, vieillissement), on **compense**
la perte par une **amplification** : on augmente le niveau du son reçu pour ramener les
sons faibles au-dessus du seuil que l'oreille perçoit encore.

Une **prothèse auditive** (appareil auditif) réalise cela en trois étapes :

1. un **microphone** capte le son extérieur ;
2. un **amplificateur** électronique **augmente** son niveau (en dB) ;
3. un **haut-parleur** miniature restitue le son amplifié dans le conduit auditif.

> **Exemple — santé.** Une personne dont le seuil d'audition est monté à $40$ dB (elle
> n'entend plus rien en dessous) n'entend plus une conversation normale à $60$ dB
> confortablement. Une prothèse réglée pour **ajouter** de l'ordre de $+30$ dB ramène la
> parole à un niveau nettement audible pour elle.

> **Exemple — réglage fin.** Les prothèses modernes **amplifient surtout les
> fréquences** perdues (souvent les **aigus**) et laissent les graves, déjà bien perçus,
> presque inchangés : on corrige la déficience mesurée sur l'**audiogramme**, fréquence
> par fréquence.

> ⚠️ **Amplifier n'est pas réparer.** La prothèse **compense** en montant le volume ;
> elle ne **répare pas** les cellules ciliées détruites. D'où l'importance de la
> **prévention** (limiter niveau et durée) : ce qui est perdu ne revient pas.

---

## 8. À retenir absolument

| | |
|---|---|
| Son | onde nécessitant un milieu **matériel** (pas de son dans le vide) |
| Fréquence ↔ période | $f = \dfrac{1}{T}$ (Hz ↔ s) ; $1$ kHz $= 10^{3}$ Hz |
| Hauteur | grave = **basse** $f$ ; aigu = **haute** $f$ (≠ intensité) |
| Plage audible | $20$ Hz $\leq f \leq 20$ kHz |
| Infrasons / ultrasons | $f < 20$ Hz / $f > 20$ kHz (échographie) |
| Niveau sonore | $L = 10\log\!\left(\dfrac{I}{I_0}\right)$, en **dB** |
| Référence | $I_0 = 10^{-12}\ \text{W·m}^{-2}$ → $L = 0$ dB |
| Calcul inverse | $I = I_0 \times 10^{\,L/10}$ |
| Règles dB | $\times 10$ sur $I$ → $+10$ dB ; $\times 2$ sur $I$ → $+3$ dB |
| Oreille | externe (capte) · moyenne (transmet) · interne = cochlée (convertit) |
| Cellules ciliées | fragiles, **non régénérées** : dégâts définitifs |
| Risque auditif | dépend du **niveau ET de la durée** ; seuil $85$ dB / $8$ h |
| Seuil de douleur | $\approx 120$ dB |
| Compensation | **amplification** ; prothèse = micro + ampli + haut-parleur |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre hauteur et intensité.** La hauteur (grave/aigu) dépend de la
   **fréquence** ; « fort/faible » dépend du **niveau sonore** en dB. Monter le son ne
   rend pas le son plus aigu.
2. **Oublier $I_0$ ou se tromper de puissance de 10.** La référence est
   $I_0 = 10^{-12}\ \text{W·m}^{-2}$. Dans $L = 10\log(I/I_0)$, c'est bien le **rapport**
   $I/I_0$ qui est dans le log, jamais $I$ seul.
3. **Additionner les décibels.** Deux sons de $80$ dB ne font pas $160$ dB. On additionne
   les **intensités** (en W·m⁻²), puis on recalcule $L$. Doubler $I$ n'ajoute que
   **+3 dB**.
4. **Oublier le facteur $10$ dans la formule.** C'est $L = \mathbf{10}\log(I/I_0)$ : un
   son à $I = 10^{-6}$ donne $L = 10 \times 6 = 60$ dB, pas $6$ dB. Sans le $\times 10$,
   on est en **bels**, jamais en décibels.
5. **Croire que « sans douleur = sans danger ».** Les dégâts auditifs commencent dès
   $85$ dB, bien avant le seuil de douleur de $120$ dB. C'est la **durée** d'exposition
   qui achève les cellules ciliées.
6. **Confondre les bornes de l'audible.** Audible = $20$ Hz à $20$ kHz. En dessous =
   **infrasons**, au-dessus = **ultrasons**. Ne pas inverser, et se souvenir que
   $20$ kHz $= 20\,000$ Hz.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 2 « Analyser et
diagnostiquer », section « Ondes sonores et audition (1re) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 53-56 :
  - Fréquence et hauteur d'un son ; sons audibles.
  - Niveau d'intensité sonore (dB).
  - Perception d'un son par l'oreille ; risques auditifs ; amplification (compensation).
Le .txt (lignes 12-15) précise que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production). Les deux
  premiers chapitres ST2S écrits (securite-chimique-acide-base, oxydoreduction-
  desinfectants) portent niveau: "premiere" ; risques-electriques et
  infrarouge-securite-routiere portent "premiere-techno". Incohérence à trancher pour
  tout le parcours pc-sante-st2s : harmoniser sur une seule valeur avant publication.
- Formule L = 10·log(I/I0) avec I0 = 10^-12 W/m² : valeur standard du seuil d'audibilité,
  conforme à l'énoncé de la consigne. Vérifier que le programme exige bien la manipulation
  du logarithme décimal (log(10^n)=n) à ce niveau, et son articulation avec le cours de
  maths ST2S (le log est parfois vu APRÈS ce chapitre) — sinon donner log comme outil admis.
- Bornes audibles 20 Hz – 20 kHz : ordre de grandeur standard (oreille jeune). À valider
  comme valeurs à connaître (et non seulement ordres de grandeur).
- Seuils de risque : 85 dB / 8 h et règle « +3 dB → durée /2 » = valeurs de référence en
  santé au travail (INRS / Code du travail). Le programme cite « risques auditifs » sans
  forcément chiffrer : confirmer le niveau d'exigence attendu (valeurs précises vs principe).
  Seuil de douleur ≈ 120 dB (I = 1 W/m²).
- Anatomie de l'oreille (externe/moyenne/interne, osselets, cochlée, cellules ciliées) :
  présentée de façon simplifiée. Vérifier la profondeur attendue par le programme ST2S
  (possible recoupement avec la SVT / biologie et physiopathologie humaines).
- Prothèse auditive (micro + ampli + haut-parleur) et « amplification » comme compensation :
  conforme à la consigne. Confirmer qu'aucune notion supplémentaire (implant cochléaire)
  n'est exigée au programme de Première.
- Vérifs numériques faites : 60 dB ↔ 10^-6 W/m² ; 100 dB ↔ 10^-2 W/m² ; 120 dB ↔ 1 W/m² ;
  ×10 sur I → +10 dB ; ×2 sur I → +10·log(2) ≈ 3,01 dB.

Statut : brouillon, non relu.
-->
