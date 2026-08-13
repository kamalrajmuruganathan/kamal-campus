---
id: tale-spe-pc-premier-principe-thermique
titre: "Premier principe et transferts thermiques"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "L'énergie : conversions et transferts"
duree_lecture_min: 15
prerequis:
  - Énergie mécanique et travail d'une force (Première)
  - Modèle du gaz parfait, température thermodynamique (Terminale)
  - Puissance et énergie (Première)
statut: brouillon
relu_par: null
---

# Premier principe et transferts thermiques

> La thermodynamique répond à une question simple : où passe l'énergie ? Quand tu chauffes
> de l'eau, l'énergie apportée ne disparaît pas, elle s'accumule dans le liquide sous une
> forme invisible — l'**énergie interne**. Le premier principe n'est rien d'autre que la
> **comptabilité** rigoureuse de ces échanges. Un mot d'ordre pour tout le chapitre :
> surveille les **unités** (J, W, K) et le **signe** de chaque transfert.

---

## 1. Énergie interne d'un système

### Définition

L'**énergie interne** $U$ d'un système est la somme de toutes les énergies stockées à
l'échelle microscopique : l'énergie **cinétique d'agitation** des particules (liée à la
température) et l'énergie **potentielle d'interaction** entre elles.

C'est une **grandeur d'état** : elle ne dépend que de l'état actuel du système (température,
quantité de matière…), pas du chemin suivi pour y arriver. Elle s'exprime en **joules (J)**.

> **Exemple.** Un litre d'eau à $80\ \text{°C}$ possède une énergie interne plus grande que
> le même litre à $20\ \text{°C}$ : ses molécules s'agitent davantage. On ne « voit » pas
> cette énergie, mais elle est bien là.

### Le cas du système incompressible

Un **système incompressible** (un solide, un liquide) a un volume qui ne varie
pratiquement pas. Pour un tel système, l'énergie interne ne dépend que de la
**température** : la faire varier, c'est uniquement changer $T$.

---

## 2. Le premier principe de la thermodynamique

### Énoncé

La variation d'énergie interne d'un système entre deux états est égale à la somme des
énergies échangées avec l'extérieur, sous forme de **transfert thermique** $Q$ et de
**travail** $W$ :

$$\boxed{\Delta U = Q + W}$$

Toutes les grandeurs sont en **joules (J)**. C'est un **bilan** : l'énergie ne se crée pas
et ne se détruit pas, elle ne fait que se transférer.

### La convention de signe (le cœur du chapitre)

On se place toujours **du point de vue du système**. Un transfert est compté :

| Transfert | Signe |
|---|---|
| **reçu** par le système (il gagne de l'énergie) | **positif** ($> 0$) |
| **cédé** par le système (il en perd) | **négatif** ($< 0$) |

> **Exemple.** De l'eau qu'on chauffe **reçoit** de l'énergie : $Q > 0$. La même eau qui
> refroidit en **cède** au milieu : $Q < 0$.

### Variation du système ≠ transfert avec l'extérieur

$\Delta U$ décrit **l'état interne** du système ; $Q$ et $W$ décrivent ce qui **traverse la
frontière**. Ce sont deux choses distinctes qu'une capacité exigible te demande de ne pas
confondre. Un système peut recevoir de la chaleur ($Q > 0$) et **ne pas** changer de
température si, en même temps, il fournit du travail.

### Le cas usuel : $\Delta U = Q$

Pour un système **incompressible** qui n'échange **pas de travail** utile avec l'extérieur
(pas de piston, pas de moteur), le travail des forces de pression est négligeable et le
premier principe se réduit à :

$$\boxed{\Delta U = Q}$$

C'est la situation de presque tous les exercices de calorimétrie : chauffer, refroidir,
mélanger des liquides.

---

## 3. Capacité thermique

### Définition et relation

Pour un système incompressible, la variation d'énergie interne est **proportionnelle** à la
variation de température :

$$\boxed{\Delta U = C \times \Delta T}$$

- $C$ est la **capacité thermique** du système, en **joules par kelvin (J·K⁻¹)**.
- $\Delta T = T_{\text{final}} - T_{\text{initial}}$ est la variation de température.

Comme $C$ dépend de la quantité de matière, on l'exprime souvent à partir de la
**capacité thermique massique** $c$ (en **J·kg⁻¹·K⁻¹**) :

$$\boxed{\Delta U = m \times c \times \Delta T}$$

où $m$ est la masse (en kg). Pour l'eau liquide, $c_{\text{eau}} \approx 4{,}18 \times 10^{3}\
\text{J·kg}^{-1}\text{·K}^{-1}$.

> **Exemple.** Chauffer $m = 0{,}50$ kg d'eau de $20\ \text{°C}$ à $80\ \text{°C}$ :
> $\Delta T = 80 - 20 = 60\ \text{°C} = 60\ \text{K}$ (un **écart** de température est
> identique en °C et en K).
> $\Delta U = m\,c\,\Delta T = 0{,}50 \times 4{,}18\times 10^{3} \times 60 = 1{,}3\times 10^{5}\
> \text{J}$.
> Comme $\Delta U = Q$, il faut apporter environ $1{,}3\times 10^{5}$ J, soit $130$ kJ.

> ⚠️ **Écart de température.** Dans $\Delta T$, °C et K donnent le **même nombre** : une hausse
> de $60\ \text{°C}$ vaut une hausse de $60$ K. La conversion $T(\text{K}) = \theta(\text{°C})
> + 273{,}15$ ne concerne que les températures **absolues**, pas les écarts.

---

## 4. Sens spontané d'un transfert thermique

Un transfert thermique se fait **spontanément du corps le plus chaud vers le corps le plus
froid**, jamais l'inverse. Il s'arrête quand les deux corps atteignent la **même
température** (équilibre thermique).

> **Exemple.** Un glaçon dans un verre d'eau : l'énergie va de l'eau (chaude) vers le glaçon
> (froid). L'eau se refroidit, le glaçon fond. Jamais l'eau ne gèle davantage en réchauffant
> le glaçon.

C'est une capacité exigible : savoir **prévoir le sens** d'un transfert à partir des
températures.

---

## 5. Les trois modes de transfert thermique

| Mode | Mécanisme | Milieu | Exemple |
|---|---|---|---|
| **Conduction** | de proche en proche, **sans déplacement de matière** | solides surtout | manche d'une casserole qui chauffe |
| **Convection** | par **déplacement de matière** (mouvement du fluide) | liquides, gaz | radiateur qui chauffe une pièce |
| **Rayonnement** | par **ondes électromagnétiques**, **sans milieu matériel** | même le vide | chaleur du Soleil, braises |

> **Exemple.** Au coin d'un feu de bois : le tisonnier chauffe par **conduction**, l'air chaud
> qui monte relève d'une **convection**, et la chaleur qui te frappe le visage sans contact
> arrive par **rayonnement**. Les trois modes coexistent.

> ⚠️ Le rayonnement est le **seul** mode qui traverse le **vide** : c'est ainsi que l'énergie
> du Soleil atteint la Terre à travers l'espace.

---

## 6. Flux thermique et résistance thermique

### Flux thermique

Le **flux thermique** $\varphi$ mesure la **puissance** transférée, c'est-à-dire l'énergie
échangée par unité de temps :

$$\boxed{\varphi = \frac{Q}{\Delta t}}$$

Il s'exprime en **watts (W)**, avec $1\ \text{W} = 1\ \text{J·s}^{-1}$. Un flux, c'est une
énergie **par seconde**.

### Résistance thermique

À travers une paroi, le flux est d'autant plus grand que l'écart de température de part et
d'autre est élevé, et d'autant plus faible que la paroi **isole** bien. On modélise cela par
la **résistance thermique** $R_{th}$ (analogie avec la loi d'Ohm) :

$$\boxed{\varphi = \frac{\Delta T}{R_{th}}} \qquad \text{soit} \qquad R_{th} = \frac{\Delta T}{\varphi}$$

- $\varphi$ en **W**, $\Delta T$ en **K** (l'écart entre les deux faces), donc $R_{th}$ en
  **kelvins par watt (K·W⁻¹)**.
- Cette expression est **fournie** le jour de l'épreuve : on attend que tu saches l'exploiter.

> **Exemple.** Un mur sépare l'intérieur ($19\ \text{°C}$) de l'extérieur ($4\ \text{°C}$) ;
> sa résistance thermique vaut $R_{th} = 0{,}030\ \text{K·W}^{-1}$.
> $\Delta T = 19 - 4 = 15\ \text{K}$, donc $\varphi = \dfrac{\Delta T}{R_{th}} =
> \dfrac{15}{0{,}030} = 5{,}0 \times 10^{2}\ \text{W}$ : le mur laisse fuir $500$ W.
> Un mur mieux isolé (plus grand $R_{th}$) laisserait passer **moins** de puissance.

> ⚠️ **Grand $R_{th}$ = bon isolant.** Plus la résistance thermique est élevée, plus le flux
> est faible : c'est l'inverse d'une intuition rapide. Une bonne isolation cherche à
> **maximiser** $R_{th}$.

---

## 7. Bilan Terre-atmosphère et effet de serre

La Terre **reçoit** de l'énergie du Soleil par **rayonnement** et en **réémet** vers l'espace,
elle aussi par rayonnement. À l'équilibre, l'énergie reçue égale l'énergie émise : la
température moyenne reste stable.

L'**effet de serre** : certains gaz de l'atmosphère (vapeur d'eau, $\text{CO}_2$, méthane…)
**absorbent** une partie du rayonnement infrarouge réémis par le sol et le **renvoient** vers
la surface. Résultat : la Terre est plus chaude qu'elle ne le serait sans atmosphère
(environ $+15\ \text{°C}$ au lieu de $-18\ \text{°C}$). L'augmentation de ces gaz **renforce**
l'effet de serre et **déplace l'équilibre** vers une température moyenne plus élevée.

> **À comprendre.** L'effet de serre n'est pas un défaut : sans lui, la Terre serait gelée.
> Le problème est son **renforcement** par les émissions humaines de gaz.

---

## 8. Loi de Newton du refroidissement

Un corps chaud placé dans un milieu plus froid perd de l'énergie par un flux **proportionnel
à l'écart de température** avec ce milieu :

$$\boxed{\varphi = h\, S\, (T - T_{\text{ext}})}$$

Plus le corps est proche de la température extérieure, plus il se refroidit **lentement** :
l'écart $T - T_{\text{ext}}$ diminue, donc le flux aussi. La température tend vers
$T_{\text{ext}}$ selon une **décroissance exponentielle** (jamais brutalement).

> **Exemple.** Un café brûlant se refroidit vite au début, puis de plus en plus lentement à
> mesure qu'il approche de la température de la pièce. Il ne descend jamais **en dessous** de
> $T_{\text{ext}}$.

---

## 9. Tableau récapitulatif

| Grandeur | Relation | Unité |
|---|---|---|
| Énergie interne | grandeur d'état $U$ | J |
| Premier principe | $\Delta U = Q + W$ | J |
| Cas incompressible sans travail | $\Delta U = Q$ | J |
| Capacité thermique | $\Delta U = C\,\Delta T = m\,c\,\Delta T$ | J |
| Capacité thermique massique | $c$ | J·kg⁻¹·K⁻¹ |
| Flux thermique | $\varphi = \dfrac{Q}{\Delta t}$ | W |
| Résistance thermique | $\varphi = \dfrac{\Delta T}{R_{th}}$ | $R_{th}$ en K·W⁻¹ |
| Sens spontané | du **chaud** vers le **froid** | — |
| Modes | conduction / convection / rayonnement | — |
| Refroidissement | $\varphi \propto (T - T_{\text{ext}})$ | — |

---

## 10. Les erreurs qui coûtent des points

1. **Se tromper de signe.** $Q > 0$ si le système **reçoit**, $Q < 0$ s'il **cède**. Un
   corps qui refroidit a $\Delta U < 0$ et $Q < 0$.
2. **Confondre °C et K sur un écart.** Dans $\Delta T$, une hausse de $60\ \text{°C}$ vaut
   $60$ K. On n'ajoute $273{,}15$ que pour une température **absolue**, jamais pour un écart.
3. **Oublier de convertir les masses en kg** avant d'utiliser $c$ en J·kg⁻¹·K⁻¹ (une masse
   en grammes fausse le résultat d'un facteur $1000$).
4. **Confondre flux et énergie.** $\varphi$ est une **puissance** en watts (J·s⁻¹) ; pour
   obtenir l'énergie $Q$, il faut multiplier par la durée : $Q = \varphi \times \Delta t$.
5. **Croire que grand $R_{th}$ = grand flux.** C'est l'inverse : $\varphi = \Delta T / R_{th}$,
   donc une grande résistance thermique **réduit** le flux (bon isolant).
6. **Confondre les modes de transfert.** La convection suppose un **déplacement de matière** ;
   le rayonnement est le seul à traverser le **vide**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, ENSEIGNEMENT DE SPÉCIALITÉ, terminale
générale — BO spécial n°8 du 25 juillet 2019, arrêté du 19-7-2019.
  Page BO   : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
  PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Section 3.2 « Premier principe et transferts thermiques » (thème 3 « L'énergie :
conversions et transferts »). Extraction via WebFetch depuis le PDF officiel, reprise dans
docs/programme-terminale-physique-chimie-2019.txt (lignes 145-155). À confronter au PDF
officiel avant publication.

⚠️ À CONFRONTER AU PDF / À SOUMETTRE AU RELECTEUR :
- Le programme écrit strictement « ΔU = C·ΔT pour un système incompressible ». La forme
  m·c·ΔT (capacité thermique massique) est-elle explicitement exigible, ou seulement C
  globale ? Je l'ai incluse car omniprésente en calorimétrie — à valider.
- L'expression φ = ΔT/Rth est « fournie » (capacité : exploiter, expression fournie). Bien
  vérifié.
- La loi de Newton du refroidissement : la forme φ = h·S·(T − T_ext) est-elle attendue avec
  le coefficient h et la surface S, ou seulement la proportionnalité φ ∝ (T − T_ext) ? Le BO
  parle de « loi de Newton du refroidissement » sans détailler. J'ai donné la forme complète
  encadrée mais insisté sur la proportionnalité — à trancher par le relecteur.
- Valeur c_eau = 4,18e3 J·kg⁻¹·K⁻¹ (usuelle 4185) : arrondi pédagogique, à confirmer.
- Convention de signe W (reçu > 0) : conforme au programme actuel (thermodynamique « du
  système »). Vérifier qu'aucune convention « travail fourni » n'est attendue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
