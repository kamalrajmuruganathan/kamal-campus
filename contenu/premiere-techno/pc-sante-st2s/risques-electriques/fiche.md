---
id: 1st2s-pc-risques-electriques
titre: "Risques électriques dans l'habitat"
voie: technologique
niveau: premiere-techno
parcours: pc-sante-st2s
matiere: physique-chimie
programme: "BO spécial n°1 du 22 janvier 2019 — physique-chimie pour la santé, série ST2S"
theme: "Prévenir et sécuriser"
duree_lecture_min: 15
prerequis:
  - Circuits électriques, tension et intensité (cycle 4)
  - Écriture scientifique et puissances de 10 (Seconde)
  - Conversions d'unités (préfixes milli-, kilo-)
statut: brouillon
relu_par: null
---

# Risques électriques dans l'habitat

> Le courant du secteur alimente tous les logements, mais il peut blesser ou tuer.
> Comme futur professionnel de la santé et du social, tu dois comprendre **pourquoi**
> le courant est dangereux pour le corps humain et **comment** l'installation
> domestique protège les personnes. Ce chapitre relie une grandeur physique — la
> tension alternative — à des gestes de sécurité concrets.

---

## 1. La tension alternative sinusoïdale

### Définition

Une tension **continue** garde toujours le même signe (une pile : borne + toujours
positive). La tension du **secteur** est **alternative** : elle change de signe
régulièrement, et sa courbe en fonction du temps a la forme d'une **sinusoïde**.

> **Exemple.** Sur l'écran d'un oscilloscope branché sur une prise, on ne voit pas une
> droite horizontale (ce serait du continu) mais une **vague** régulière qui monte
> au-dessus de zéro puis descend en dessous.

### Période et fréquence

La courbe se **répète** à l'identique. La durée d'un motif complet est la **période** $T$.

| Grandeur | Symbole | Unité |
|---|---|---|
| Période | $T$ | seconde (s) |
| Fréquence | $f$ | hertz (Hz) |

La **fréquence** est le nombre de périodes par seconde :

$$\boxed{f = \frac{1}{T}} \qquad\qquad T = \frac{1}{f}$$

> **Exemple — le secteur français.** Sa fréquence vaut $f = 50$ Hz : la tension
> effectue $50$ allers-retours par seconde. Sa période est donc
> $T = \dfrac{1}{f} = \dfrac{1}{50} = 0{,}020$ s $= 20$ ms.

### Valeurs maximale, minimale et efficace

Sur une période, la tension varie entre deux extrêmes symétriques :

- la **valeur maximale** $U_{max}$ (le sommet de la vague) ;
- la **valeur minimale** $U_{min} = -U_{max}$ (le creux, exactement opposé).

Mais un voltmètre en position « alternatif » (~) n'affiche **ni** l'une **ni** l'autre :
il affiche la **valeur efficace** $U$. C'est la tension continue qui produirait le
**même échauffement** dans un appareil. Elle est reliée à $U_{max}$ par :

$$\boxed{U = \frac{U_{max}}{\sqrt{2}}} \qquad\text{d'où}\qquad U_{max} = U \times \sqrt{2}$$

> **Exemple — le secteur français.** Le voltmètre affiche la valeur **efficace**
> $U = 230$ V. La valeur maximale est donc
> $U_{max} = U \times \sqrt{2} = 230 \times \sqrt{2} \approx 325$ V, et la valeur
> minimale $U_{min} = -325$ V. La tension du secteur monte donc en réalité jusqu'à
> environ $325$ V, bien au-dessus des $230$ V annoncés.

> ⚠️ **La valeur affichée est la valeur efficace, pas le maximum.** Quand on dit
> « le secteur, c'est $230$ V », ce $230$ est la valeur **efficace**. Pour obtenir le
> pic, on **multiplie** par $\sqrt{2}$ ; on ne divise pas.

---

## 2. L'intensité du courant électrique

### Définition

L'**intensité** $I$ mesure le **débit de charges électriques** : plus il passe de
charges par seconde dans un fil, plus l'intensité est grande. Elle se mesure avec un
**ampèremètre**, branché **en série**.

| Grandeur | Symbole | Unité |
|---|---|---|
| Intensité | $I$ | ampère (A) |

Sous-multiple très utilisé pour la sécurité : le **milliampère**,
$1\ \text{mA} = 10^{-3}$ A, soit $1$ A $= 1000$ mA.

> **Exemple.** Un sèche-cheveux de forte puissance appelle une intensité d'environ
> $I = 5$ A. Un courant de seulement $I = 0{,}030$ A $= 30$ mA traversant le corps
> est déjà **mortel** : en sécurité électrique, ce sont les **milliampères** qui comptent.

> **Ce qu'il faut comprendre.** Ce n'est pas la tension seule qui blesse : c'est
> **l'intensité qui traverse le corps**. La tension est la cause, l'intensité dans le
> corps est l'effet dangereux.

---

## 3. Les risques électriques pour le corps

### Électrisation et électrocution

Deux mots à ne **jamais** confondre :

| Terme | Sens |
|---|---|
| **Électrisation** | passage d'un courant électrique à travers le corps (avec ou sans blessure) |
| **Électrocution** | électrisation **mortelle** (elle entraîne la mort) |

> **Exemple.** Recevoir une décharge et sursauter, c'est une **électrisation**. Si le
> courant provoque un arrêt du cœur et le décès, on parle d'**électrocution**. Toute
> électrocution est une électrisation ; l'inverse est faux.

### Ce qui fixe l'intensité qui traverse le corps

Le corps se comporte comme une **résistance** $R$. Sous une tension $U$, l'intensité
qui le traverse est d'autant plus grande que cette résistance est **faible**.

La résistance dépend surtout de l'**humidité de la peau** :

- peau **sèche** : résistance élevée → intensité plus faible ;
- peau **mouillée** (sueur, salle de bain, mains humides) : résistance qui **chute**
  → intensité qui **augmente** → danger bien plus grand.

> **Exemple — santé/sécurité domestique.** C'est pourquoi il ne faut **jamais**
> toucher un appareil électrique avec les mains mouillées ni utiliser un sèche-cheveux
> au-dessus d'un lavabo rempli : l'eau fait chuter la résistance du corps.

### Les effets du courant selon son intensité

C'est la valeur de l'intensité qui traverse le corps qui décide de la gravité :

| Intensité (courant alternatif) | Effet sur le corps |
|---|---|
| $\approx 1$ mA | seuil de **perception** (léger picotement) |
| $\approx 10$ mA | **tétanisation** des muscles : la personne ne peut plus lâcher la prise |
| $\approx 30$ mA | atteinte des muscles respiratoires : risque d'**asphyxie** |
| $\geq 100$ mA | **fibrillation** du cœur : arrêt cardiaque, mort probable |

> **Exemple.** À $10$ mA déjà, la main se **contracte** et se referme sur le fil : la
> victime est « collée » au conducteur, ce qui prolonge le passage du courant et
> aggrave tout. La durée du contact compte autant que l'intensité.

> ⚠️ **Le seuil de $30$ mA n'est pas choisi au hasard.** C'est à partir de là que la
> respiration est menacée : c'est exactement le seuil de coupure des dispositifs qui
> protègent les personnes (voir §5).

---

## 4. La prise de courant : phase, neutre, terre

Une prise domestique comporte **trois** bornes, chacune reliée à un fil de couleur
normalisée. Ne jamais les confondre :

| Borne | Fil (couleur) | Rôle |
|---|---|---|
| **Phase** | rouge ou marron | fil **actif** ; c'est lui qui est porté à la tension (dangereux) |
| **Neutre** | bleu | fil de **retour**, référence de tension (proche de $0$ V) |
| **Terre** | vert / jaune | relie les **carcasses métalliques** des appareils au sol |

### À quoi sert la mise à la terre

La borne de **terre** ne sert **pas** à faire fonctionner l'appareil : elle sert à la
**sécurité**. Elle relie la carcasse métallique (par exemple le tambour d'un
lave-linge) directement au sol.

> **Exemple.** Si un fil de phase se dénude à l'intérieur et touche la carcasse
> métallique, celle-ci se retrouve « sous tension ». Sans terre, une personne qui la
> touche s'électrise. **Avec** la terre, le courant de défaut file vers le sol par le
> fil vert/jaune ; il crée une différence détectée par le disjoncteur différentiel,
> qui coupe aussitôt (voir §5). La terre et le différentiel travaillent **ensemble**.

> ⚠️ **Ne jamais neutraliser la broche de terre** d'une prise (avec un adaptateur
> « bricolé », par exemple) : on supprime la protection sans que rien ne le montre
> tant qu'il n'y a pas de défaut.

---

## 5. Les dispositifs de sécurité

Deux familles de dispositifs, qui ne protègent **pas la même chose**.

### Le fusible et le disjoncteur : protéger l'installation

Un **fusible** contient un fil fin qui **fond** dès que l'intensité dépasse une valeur
maximale (le **calibre**, par exemple $16$ A). Un **disjoncteur** joue le même rôle
mais se **réarme** au lieu de fondre.

- Ils coupent le circuit en cas de **surintensité** : court-circuit ou trop
  d'appareils branchés sur la même ligne.
- Une surintensité échauffe les fils : sans coupure, c'est le **risque d'incendie**.
- Ils protègent donc surtout le **matériel et l'habitation**, pas directement les personnes.

> **Exemple.** Tu branches four, bouilloire et grille-pain sur la même multiprise :
> l'intensité dépasse $16$ A, le disjoncteur de la ligne **saute** et coupe avant que
> les fils ne chauffent dangereusement.

### Le disjoncteur différentiel : protéger les personnes

En fonctionnement normal, **tout** le courant qui part par la phase revient par le
neutre : $I_{\text{phase}} = I_{\text{neutre}}$.

Le **disjoncteur différentiel** (DDR) **compare en permanence** ces deux intensités.
Si une partie du courant **fuit** ailleurs — par exemple à travers le corps d'une
personne vers la terre — alors $I_{\text{phase}} \neq I_{\text{neutre}}$. Dès que
cette différence dépasse **$30$ mA**, il **coupe** le circuit en une fraction de seconde.

> **Exemple — protection des personnes.** Une personne touche un fil sous tension : un
> courant s'écoule par son corps vers le sol. La phase « débite » plus que ce que le
> neutre « ramène ». L'écart atteint $30$ mA : le différentiel déclenche **avant** que
> l'intensité dans le corps n'atteigne le seuil mortel. C'est pourquoi le seuil est
> fixé à $30$ mA — le seuil de danger respiratoire du §3.

| Dispositif | Grandeur surveillée | Protège avant tout |
|---|---|---|
| Fusible / disjoncteur | l'**intensité totale** de la ligne (surintensité) | l'**installation** (incendie) |
| Disjoncteur différentiel | l'**écart** phase − neutre (courant de fuite) | les **personnes** (électrisation) |

---

## 6. À retenir absolument

| | |
|---|---|
| Fréquence ↔ période | $f = \dfrac{1}{T}$ (Hz ↔ s) |
| Secteur français | $f = 50$ Hz, $T = 20$ ms, $U = 230$ V (efficace) |
| Valeur efficace | $U = \dfrac{U_{max}}{\sqrt{2}}$, donc $U_{max} = U\sqrt{2} \approx 325$ V |
| Valeurs extrêmes | $U_{min} = -U_{max}$ (sinusoïde symétrique) |
| Intensité | $I$ en ampères (A) ; $1$ mA $= 10^{-3}$ A |
| Danger réel | l'**intensité** qui traverse le corps, pas la tension seule |
| Électrisation / électrocution | passage du courant / **mortel** |
| Seuil critique | $30$ mA (respiration) ; $\geq 100$ mA (fibrillation) |
| Prise | **phase** (actif) · **neutre** (retour) · **terre** (carcasses) |
| Fusible / disjoncteur | surintensité → protège l'**installation** |
| Différentiel $30$ mA | fuite phase ≠ neutre → protège les **personnes** |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre valeur efficace et valeur maximale.** Le secteur « $230$ V » est une
   valeur **efficace** ; le pic vaut $U_{max} = 230\sqrt{2} \approx 325$ V. On
   **multiplie** par $\sqrt{2}$ pour aller de l'efficace au max.
2. **Se tromper d'unité entre A et mA.** Les seuils de danger sont en **milliampères** :
   $30$ mA $= 0{,}030$ A. Écrire « $30$ A » est une faute physique énorme (c'est $1000$
   fois trop).
3. **Confondre électrisation et électrocution.** L'électrocution est **mortelle** ;
   toute électrisation ne l'est pas.
4. **Croire que c'est la tension qui tue.** C'est l'**intensité** traversant le corps
   qui blesse ; elle dépend de la résistance du corps, donc de l'humidité de la peau.
5. **Inverser les rôles des dispositifs.** Le fusible/disjoncteur protège
   l'**installation** contre les surintensités ; le **différentiel** protège les
   **personnes** en détectant une fuite phase ≠ neutre.
6. **Oublier de convertir la période.** $T = 20$ ms $= 0{,}020$ s : garder les
   millisecondes dans $f = 1/T$ donne une fréquence fausse d'un facteur $1000$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 1 « Prévenir et
sécuriser », section « Risques électriques dans l'habitat (1re) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 35-39 :
  - Tension alternative sinusoïdale : période, fréquence, valeurs max/min, valeur efficace.
  - Intensité du courant électrique.
  - Risques électriques ; électrisation et électrocution.
  - Prise de courant : phase, neutre, mise à la terre ; sécurité.
Le .txt précise (lignes 12-15) que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production). Les deux
  autres chapitres ST2S déjà écrits (securite-chimique-acide-base, oxydoreduction-
  desinfectants) portent niveau: "premiere". Incohérence à trancher pour tout le
  parcours pc-sante-st2s : harmoniser sur une seule valeur avant publication.
- La consigne « valeur efficace » est traitée par U = Umax/√2. Le programme cite la
  notion sans exiger de démonstration : l'expression est donnée comme relation à
  connaître/utiliser. À confirmer que la relation figure bien parmi les capacités
  exigibles (et non seulement en note).
- Les SEUILS d'intensité (1, 10, 30, 100 mA) et les effets associés sont des valeurs
  de référence standard en sécurité électrique. Le libellé exact du programme ne
  chiffre pas forcément ces seuils : vérifier le niveau d'exigence attendu (ordres de
  grandeur vs valeurs précises) et l'accord avec les documents d'accompagnement eduscol.
- Valeur du secteur : U = 230 V, f = 50 Hz, Umax ≈ 325 V (230×√2 = 325,27 V).
- Le rôle exact « courant de défaut → terre → détecté par le différentiel » est
  présenté de façon simplifiée (couplage terre + DDR 30 mA) : à valider par un
  professeur pour la rigueur du mécanisme.
- Couleurs des fils (phase marron/rouge, neutre bleu, terre vert-jaune) : normes NF ;
  vérifier qu'on reste dans l'attendu du programme (santé/sécurité domestique).

Statut : brouillon, non relu.
-->
