---
id: 3e-math-triangles
titre: "Triangles"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 15
prerequis:
  - Théorème de Pythagore, sa réciproque, sa contraposée (4e)
  - Les trois théorèmes de la droite des milieux (4e)
  - Triangle rectangle et cercle circonscrit (4e)
  - Proportionnalité et égalité des produits en croix (5e)
  - Racine carrée, résoudre x² = a (3e)
statut: brouillon
relu_par: null
---

# Triangles

<!-- schema:auto -->
![Triangle rectangle : le côté opposé à l’angle droit est l’hypoténuse.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjkwLDIzNSAzNDAsMjM1IDkwLDcwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNIDkwIDIxOSBMIDEwNiAyMTkgTCAxMDYgMjM1IiBmaWxsPSJub25lIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iODAiIHk9IjI1NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QTwvdGV4dD48dGV4dCB4PSIzNTIiIHk9IjI1NSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QjwvdGV4dD48dGV4dCB4PSI3NiIgeT0iNzAiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+PHRleHQgeD0iMjE1IiB5PSIyNTkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+YjwvdGV4dD48dGV4dCB4PSI3NCIgeT0iMTUyLjUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+YTwvdGV4dD48dGV4dCB4PSIyMjkiIHk9IjE0Ni41IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPmM8L3RleHQ+PC9zdmc+)


> En 4e, Pythagore t'a donné une longueur — mais seulement dans un triangle
> rectangle, et seulement à partir d'autres **longueurs**. Cette année tu gagnes
> deux outils bien plus larges : **Thalès**, qui fait parler le parallélisme, et la
> **trigonométrie**, qui relie enfin longueurs et **angles**. C'est le premier
> chapitre où « je connais un angle » suffit à calculer un côté.

---

## 1. Ce que tu dois déjà savoir faire sans réfléchir

Le programme les classe en **automatismes** : ils ne sont plus enseignés, ils sont
**attendus**. Tout est dans la fiche **« Triangles » (4e)** — relis-la si l'un des
trois te résiste.

| Automatisme | Ce que tu dois écrire d'un trait |
|---|---|
| Égalité de Pythagore | $\mathrm{ABC}$ rectangle en $\mathrm{A}$ $\Rightarrow$ $\mathrm{BC}^2 = \mathrm{AB}^2 + \mathrm{AC}^2$ |
| Triangle rectangle et cercle circonscrit | centre = **milieu de l'hypoténuse** ; côté diamètre $\Rightarrow$ triangle rectangle |
| Droite des milieux | prouver un **parallélisme**, calculer une **longueur**, prouver qu'un point est un **milieu** |

> **Ils servent de déclencheur.** Un exercice de 3e commence souvent par un
> automatisme : la droite des milieux te **donne** un parallélisme, et ce
> parallélisme te permet ensuite d'appliquer Thalès.

---

## 2. Le théorème de Thalès — deux configurations

Thalès parle de **deux droites sécantes coupées par deux parallèles**. Le programme
te demande de reconnaitre deux figures, qui sont en réalité la même.

### Triangles emboités

Dans $\mathrm{ABC}$ : $\mathrm{M}$ sur $[\mathrm{AB}]$, $\mathrm{N}$ sur
$[\mathrm{AC}]$, et $(\mathrm{MN}) \parallel (\mathrm{BC})$.

$$\boxed{\frac{\mathrm{AM}}{\mathrm{AB}} = \frac{\mathrm{AN}}{\mathrm{AC}} = \frac{\mathrm{MN}}{\mathrm{BC}}}$$

Le petit triangle $\mathrm{AMN}$ est une **réduction** du grand : toutes les
longueurs sont multipliées par le même nombre.

> **Exemple.** $\mathrm{AM} = 3$, $\mathrm{AB} = 5$, $\mathrm{AC} = 10$,
> $\mathrm{BC} = 8$ (en cm), avec $(\mathrm{MN}) \parallel (\mathrm{BC})$.
> $$\frac{3}{5} = \frac{\mathrm{AN}}{10} \Rightarrow \mathrm{AN} = \frac{3 \times 10}{5} = 6 \text{ cm}
> \qquad \frac{3}{5} = \frac{\mathrm{MN}}{8} \Rightarrow \mathrm{MN} = \frac{3 \times 8}{5} = 4{,}8 \text{ cm}$$

### Papillon

Deux droites se coupent en $\mathrm{O}$, les points étant **de part et d'autre** de
$\mathrm{O}$ : $\mathrm{B}$, $\mathrm{O}$, $\mathrm{E}$ alignés, $\mathrm{C}$,
$\mathrm{O}$, $\mathrm{D}$ alignés, et $(\mathrm{BC}) \parallel (\mathrm{DE})$.

$$\frac{\mathrm{OB}}{\mathrm{OE}} = \frac{\mathrm{OC}}{\mathrm{OD}} = \frac{\mathrm{BC}}{\mathrm{DE}}$$

> **Exemple.** $\mathrm{OB} = 4$, $\mathrm{OE} = 6$, $\mathrm{OC} = 5$ :
> $\dfrac{4}{6} = \dfrac{5}{\mathrm{OD}}$ donc $\mathrm{OD} = \dfrac{5 \times 6}{4} = 7{,}5$ cm.

> **Même règle dans les deux cas.** Le point d'intersection ($\mathrm{A}$ ou
> $\mathrm{O}$) est le **sommet commun**, et chaque fraction se lit « du sommet vers
> le **petit** » en haut, « du sommet vers le **grand** » en bas. Toujours dans cet
> ordre : c'est ce qui évite de mélanger.

### Méthode — calculer une longueur

1. Vérifie la configuration : deux droites sécantes, **deux parallèles**.
2. Écris la **chaine des trois rapports avec les lettres**, avant tout nombre.
3. Garde les **deux rapports** contenant l'inconnue et trois longueurs connues.
4. **Produit en croix**, puis isole l'inconnue. Unité, et arrondi à la fin.

> ⚠️ Le rapport $\dfrac{\mathrm{MN}}{\mathrm{BC}}$ est à part : il compare les deux
> côtés **parallèles**, pas des longueurs portées par les sécantes. Il sert à
> **calculer** — mais il est interdit dans la réciproque (§3).

---

## 3. La réciproque de Thalès — démontrer un parallélisme

Elle part des **longueurs** et arrive au **parallélisme** : l'inverse du théorème.

**Si** $\mathrm{A}$, $\mathrm{M}$, $\mathrm{B}$ sont alignés, **si** $\mathrm{A}$,
$\mathrm{N}$, $\mathrm{C}$ sont alignés **dans le même ordre**, et **si**
$\dfrac{\mathrm{AM}}{\mathrm{AB}} = \dfrac{\mathrm{AN}}{\mathrm{AC}}$, **alors**
$(\mathrm{MN}) \parallel (\mathrm{BC})$.

**La méthode : deux calculs séparés.** Tu ne sais pas encore que l'égalité est
vraie, tu ne peux donc pas l'écrire. Tu calcules chaque rapport de son côté, puis tu
compares — exactement comme pour la réciproque de Pythagore (4e).

> **Exemple.** $\mathrm{AM} = 2$, $\mathrm{AB} = 3$, $\mathrm{AN} = 4$,
> $\mathrm{AC} = 6$, points dans le même ordre.
> D'un côté $\dfrac{\mathrm{AM}}{\mathrm{AB}} = \dfrac{2}{3}$ ; de l'autre
> $\dfrac{\mathrm{AN}}{\mathrm{AC}} = \dfrac{4}{6} = \dfrac{2}{3}$.
> Les deux rapports sont **égaux**, donc $(\mathrm{MN}) \parallel (\mathrm{BC})$.

> ⚠️ **Deux conditions, pas une.** L'égalité des rapports ne suffit pas :
> l'**ordre des points** doit être le même sur les deux droites.

> ⚠️ **$\dfrac{\mathrm{MN}}{\mathrm{BC}}$ n'entre pas ici.** Dans la réciproque on ne
> compare que des longueurs portées par les **deux droites sécantes**.

---

## 4. La contraposée — démontrer que ce n'est PAS parallèle

**Si** $\dfrac{\mathrm{AM}}{\mathrm{AB}}$ et $\dfrac{\mathrm{AN}}{\mathrm{AC}}$ sont
**différents**, **alors** $(\mathrm{MN})$ et $(\mathrm{BC})$ ne sont **pas
parallèles**. Même méthode : deux calculs séparés, puis on compare.

> **Exemple.** $\mathrm{AM} = 2$, $\mathrm{AB} = 3$, $\mathrm{AN} = 3$,
> $\mathrm{AC} = 5$. Or $\dfrac{2}{3} = \dfrac{10}{15}$ et
> $\dfrac{3}{5} = \dfrac{9}{15}$ : ils sont **différents**, les droites ne sont pas
> parallèles. Compare toujours au même dénominateur (ou en décimales), jamais
> « à l'œil ».

---

## 5. Théorème, réciproque, contraposée : ne pas les mélanger

| Énoncé | Ce que tu **sais** | Ce que tu **obtiens** |
|---|---|---|
| **Théorème** | les droites **sont** parallèles | une **longueur** |
| **Réciproque** | les longueurs, rapports **égaux** | les droites **sont** parallèles |
| **Contraposée** | les longueurs, rapports **différents** | les droites **ne sont pas** parallèles |

La question est toujours la même : *le parallélisme, l'énoncé me le **donne** ou me
le **demande** ?* Il te le donne → théorème, tu calcules. Il te le demande →
réciproque, tu compares.

> Théorème et contraposée disent la même chose, retournée : si l'un est vrai, l'autre
> l'est automatiquement. La **réciproque** est un énoncé **différent**, qu'il a fallu
> démontrer à part. Le §6 de la fiche 4e développe ce point sur Pythagore : la
> logique est identique.

---

## 6. Les lignes trigonométriques dans le triangle rectangle

Voilà l'outil qui manquait : il relie un **angle** à des **longueurs**.

**Condition d'existence** : on travaille **uniquement dans un triangle rectangle**,
et l'angle choisi est l'un des deux **angles aigus** — jamais l'angle droit.

### Nommer les côtés — par rapport à l'angle choisi

$\mathrm{ABC}$ rectangle en $\mathrm{A}$, angle de travail $\widehat{\mathrm{B}}$ :

| Côté | Définition | Ici |
|---|---|---|
| **Hypoténuse** | opposée à l'**angle droit** — elle ne bouge jamais | $[\mathrm{BC}]$ |
| **Opposé** | en face de l'angle choisi, il ne le touche pas | $[\mathrm{AC}]$ |
| **Adjacent** | il touche l'angle choisi, et ce n'est pas l'hypoténuse | $[\mathrm{AB}]$ |

> ⚠️ **Opposé et adjacent s'échangent quand on change d'angle.** Dans le même
> triangle, avec $\widehat{\mathrm{C}}$, $[\mathrm{AB}]$ devient l'opposé et
> $[\mathrm{AC}]$ l'adjacent. Seule l'hypoténuse reste $[\mathrm{BC}]$.
> **Écris l'angle de travail avant de nommer quoi que ce soit.**

### Les trois rapports

$$\boxed{\cos \widehat{\mathrm{B}} = \frac{\text{adjacent}}{\text{hypoténuse}}
\qquad
\sin \widehat{\mathrm{B}} = \frac{\text{opposé}}{\text{hypoténuse}}
\qquad
\tan \widehat{\mathrm{B}} = \frac{\text{opposé}}{\text{adjacent}}}$$

**Moyen mnémotechnique : SOH – CAH – TOA**, à lire comme un seul mot, *sohcahtoa*.
**S**inus = **O**pposé / **H**ypoténuse · **C**osinus = **A**djacent / **H**ypoténuse
· **T**angente = **O**pposé / **A**djacent.

> **Exemple sur le triangle $3$–$4$–$5$.** Rectangle en $\mathrm{A}$,
> $\mathrm{AB} = 3$, $\mathrm{AC} = 4$, $\mathrm{BC} = 5$. Avec $\widehat{\mathrm{B}}$ :
> $$\cos \widehat{\mathrm{B}} = \frac{3}{5} = 0{,}6 \qquad
> \sin \widehat{\mathrm{B}} = \frac{4}{5} = 0{,}8 \qquad
> \tan \widehat{\mathrm{B}} = \frac{4}{3} \approx 1{,}33$$

---

## 7. Choisir le bon rapport — la seule vraie difficulté

SOH-CAH-TOA te donne les formules, pas **laquelle prendre**. Voici la méthode, et
elle ne rate jamais : **ne pars pas de la formule, pars des deux côtés en jeu.**

1. Repère l'**angle droit**, puis entoure l'**angle de travail**.
2. Nomme les trois côtés **par rapport à cet angle**.
3. Identifie les **deux côtés concernés** : celui qui est **donné** et celui qui est
   **cherché**. (Si tu cherches un angle : les **deux longueurs données**.)
4. Prends le rapport qui contient **exactement ces deux côtés-là**.

| Les deux côtés en jeu | Rapport | Le côté absent |
|---|---|---|
| adjacent **et** hypoténuse | $\cos$ | l'opposé |
| opposé **et** hypoténuse | $\sin$ | l'adjacent |
| opposé **et** adjacent | $\tan$ | l'hypoténuse |

> **La lecture rapide** : *l'énoncé parle-t-il de l'hypoténuse ?*
> **Non** → c'est la **tangente**, sans hésiter.
> **Oui** → $\cos$ si l'autre côté **touche** l'angle, $\sin$ s'il lui **fait face**.

> **Le troisième côté est ton signal de contrôle.** Le côté que ton rapport n'utilise
> pas doit être exactement celui dont l'énoncé ne parle pas. Si ton rapport fait
> apparaitre une longueur que tu ne connais pas et qu'on ne te demande pas, tu t'es
> trompé de ligne : reprends à l'étape 3.

---

## 8. Calculer une LONGUEUR — l'angle est connu

Tu connais l'angle et **une** longueur, tu cherches une autre longueur : tu écris le
rapport, tu remplaces, tu résous.

> **Cas 1 — l'inconnue est au numérateur.** Rectangle en $\mathrm{A}$,
> $\widehat{\mathrm{B}} = 35°$, $\mathrm{BC} = 10$ cm ; on cherche $\mathrm{AB}$.
> Hypoténuse + adjacent → **cosinus**.
> $$\cos 35° = \frac{\mathrm{AB}}{10} \Rightarrow \mathrm{AB} = 10 \times \cos 35° \approx 8{,}2 \text{ cm}$$
> On **multiplie** : l'inconnue était en haut.

> **Cas 2 — l'inconnue est au dénominateur.** Rectangle en $\mathrm{A}$,
> $\widehat{\mathrm{B}} = 40°$, $\mathrm{AB} = 5$ cm ; on cherche $\mathrm{BC}$.
> Adjacent + hypoténuse → **cosinus** encore.
> $$\cos 40° = \frac{5}{\mathrm{BC}} \Rightarrow \mathrm{BC} = \frac{5}{\cos 40°} \approx 6{,}5 \text{ cm}$$
> On **divise** : l'inconnue était en bas.

> **Cas 3 — pas d'hypoténuse, donc tangente.** Rectangle en $\mathrm{A}$,
> $\widehat{\mathrm{B}} = 30°$, $\mathrm{AB} = 6$ cm ; on cherche $\mathrm{AC}$.
> $$\tan 30° = \frac{\mathrm{AC}}{6} \Rightarrow \mathrm{AC} = 6 \times \tan 30° \approx 3{,}5 \text{ cm}$$

> **Contrôle systématique** : l'**hypoténuse est le plus long** des trois côtés. Si
> ton résultat la rend plus courte qu'un autre côté, tu as multiplié au lieu de
> diviser.

---

## 9. Calculer un ANGLE — c'est l'opération inverse

Situation différente : on te donne **deux longueurs**, on te demande l'**angle**. Le
rapport te livre d'abord un **nombre**, et il faut ensuite **remonter** à l'angle.

C'est la **fonction inverse** : $\cos^{-1}$, $\sin^{-1}$, $\tan^{-1}$. Sur la
calculatrice, c'est la **seconde fonction** de la touche : `SHIFT` puis `cos`.

> **Exemple.** Rectangle en $\mathrm{A}$, $\mathrm{AB} = 3$ cm, $\mathrm{BC} = 5$ cm ;
> on cherche $\widehat{\mathrm{B}}$. Adjacent + hypoténuse → **cosinus**.
> $$\cos \widehat{\mathrm{B}} = \frac{3}{5} = 0{,}6 \Rightarrow
> \widehat{\mathrm{B}} = \cos^{-1}(0{,}6) \approx 53°$$
> Dans ce triangle $\mathrm{AC} = 4$ : on aurait aussi pu écrire
> $\tan \widehat{\mathrm{B}} = \frac{4}{3}$ puis
> $\tan^{-1}\!\left(\frac{4}{3}\right) \approx 53°$. **Même angle** — le rapport
> choisi ne change pas le résultat.

> ⚠️ **$\cos^{-1}$ n'est pas $\dfrac{1}{\cos}$.** Le $-1$ ne veut pas dire « inverse
> d'un nombre » ici, mais « opération qui annule le cosinus ». $1 \div 0{,}6 = 1{,}67$,
> ce qui n'est même pas un angle.

| Tu cherches… | Tu connais… | Tu tapes… |
|---|---|---|
| une **longueur** | l'angle **+ une** longueur | $\cos$, $\sin$ ou $\tan$ **de l'angle** |
| un **angle** | **deux** longueurs | $\cos^{-1}$, $\sin^{-1}$ ou $\tan^{-1}$ **du rapport** |

---

## 10. Cas particuliers et pièges de calcul

- **La calculatrice doit être en DEGRÉ** : cherche `DEG` ou `D` à l'écran. En `RAD`
  ou `GRAD`, tous tes résultats sont faux sans le moindre message d'alerte.
- **Cosinus et sinus d'un angle aigu sont entre $0$ et $1$** : le numérateur y est
  plus petit que l'hypoténuse. $\cos \widehat{\mathrm{B}} = 1{,}4$ signifie que tu as
  **inversé la fraction**. La **tangente**, elle, peut dépasser $1$.
- **Arrondir trop tôt** : garde $10 \times \cos 35°$ dans la calculatrice, arrondis
  au dernier affichage.
- **Thalès, Pythagore ou trigo ?** Pythagore : triangle **rectangle**, trois
  **longueurs**, aucun angle. Thalès : deux droites **parallèles**, des rapports.
  Trigonométrie : triangle **rectangle**, et un **angle** dans l'énoncé ou la question.
- **Quand Pythagore sort une racine non entière**, garde la valeur exacte :
  $\mathrm{BC}^2 = 13$ donne $\mathrm{BC} = \sqrt{13}$ cm. Résoudre $x^2 = a$, c'est
  le chapitre **« Racine carrée » (3e)** — ici seule la solution **positive** a un
  sens, une longueur n'étant jamais négative.
- **Les rapports de Thalès ne se soustraient pas** : pour $\mathrm{MB}$, calcule
  $\mathrm{AB} - \mathrm{AM}$ **sur le segment**, pas dans la fraction.

---

## 11. À retenir absolument

| | |
|---|---|
| Thalès, configurations | triangles **emboités** et **papillon** — mêmes rapports |
| Thalès, égalité | $\dfrac{\mathrm{AM}}{\mathrm{AB}} = \dfrac{\mathrm{AN}}{\mathrm{AC}} = \dfrac{\mathrm{MN}}{\mathrm{BC}}$ |
| Le théorème sert à | **calculer une longueur** (le parallélisme est donné) |
| La réciproque sert à | **prouver un parallélisme** (rapports égaux **+ même ordre**) |
| La contraposée sert à | **prouver un non-parallélisme** (rapports différents) |
| Interdit dans la réciproque | le rapport $\dfrac{\mathrm{MN}}{\mathrm{BC}}$ |
| Trigonométrie : où | triangle **rectangle**, angle **aigu** |
| SOH-CAH-TOA | $\sin = \frac{\text{opp}}{\text{hyp}}$, $\cos = \frac{\text{adj}}{\text{hyp}}$, $\tan = \frac{\text{opp}}{\text{adj}}$ |
| Choisir le rapport | pars des **deux côtés en jeu**, pas de la formule |
| Pas d'hypoténuse dans l'énoncé | c'est la **tangente** |
| Chercher un **angle** | $\cos^{-1}$, $\sin^{-1}$, $\tan^{-1}$ — jamais $\frac{1}{\cos}$ |
| Calculatrice | mode **DEG** |

---

## 12. Les erreurs qui coûtent des points

1. **Confondre le théorème de Thalès et sa réciproque.** Si on te demande de
   **prouver** un parallélisme, tu n'as pas le droit de partir de l'égalité des
   rapports comme si elle était acquise : tu les calcules **séparément**, puis tu
   compares. Écrire « les droites sont parallèles donc
   $\frac{\mathrm{AM}}{\mathrm{AB}} = \frac{\mathrm{AN}}{\mathrm{AC}}$ », c'est
   supposer exactement ce que tu dois démontrer.
2. **Oublier la condition d'ordre des points** dans la réciproque : l'égalité des
   rapports seule ne conclut pas.
3. **Mélanger les longueurs dans les rapports.** Chaque fraction part du **même
   sommet**. Écrire $\frac{\mathrm{AM}}{\mathrm{AB}} = \frac{\mathrm{AC}}{\mathrm{AN}}$
   retourne le second rapport et fausse tout.
4. **Prendre l'opposé pour l'adjacent** : ils dépendent de **l'angle choisi**, pas de
   la figure. Note l'angle, puis nomme les côtés — dans cet ordre.
5. **Appliquer la trigonométrie sans angle droit** : les trois formules ne veulent
   rien dire dans un triangle quelconque. Cherche l'angle droit, ou démontre-le
   d'abord (réciproque de Pythagore, cercle circonscrit).
6. **Utiliser $\cos$ au lieu de $\cos^{-1}$**, ou l'inverse. Tu cherches un **angle**
   → fonction inverse. Une **longueur** → fonction directe.
7. **Laisser la calculatrice en radians** et rendre une copie fausse avec un
   raisonnement pourtant juste.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.txt), thème « Espace et
géométrie », niveau TROISIÈME (qui commence l. 810), section « Triangles »,
LIGNES 836 à 848.

Capacités citées par le texte et couvertes ici :
- l. 838 (automatisme) « Utiliser la propriété du triangle rectangle et de son
  cercle circonscrit » → §1 (renvoi à la fiche 4e)
- l. 839 (automatisme) « Écrire l'égalité de Pythagore dans un triangle rectangle »
  → §1 (renvoi à la fiche 4e)
- l. 840-841 (automatisme) « Utiliser la droite des milieux pour prouver que des
  droites sont parallèles, pour calculer une longueur, pour prouver qu'un point est
  le milieu d'un côté » → §1
- l. 843-844 « Connaitre et appliquer le théorème de Thalès, sa réciproque, sa
  contraposée (configurations des triangles emboités et configuration dite du
  papillon) » → §2 à §6
- l. 845 « Connaitre et utiliser les lignes trigonométriques dans le triangle
  rectangle : cosinus, sinus, tangente » → §7 à §10
- l. 847 « Repères historiques autour du théorème de Thalès, qui n'est pas appelé
  comme cela dans les autres pays » : prolongement, NON développé (non exigible).
- l. 848 « Construction des polygones réguliers à la règle et au compas » :
  prolongement, NON développé.

PÉRIMÈTRE — points à trancher par le relecteur :

1. THALÈS EST BIEN AU PROGRAMME DE 3e (vérifié) : l. 843-844, objectif
   d'apprentissage, pas prolongement. Absent de la section 4e (l. 794-809).
   Le texte impose les DEUX configurations nommées (emboitées + papillon) : les
   deux sont traitées. Il n'emploie PAS l'expression « triangles semblables » ni
   « agrandissement-réduction » dans cette section — je n'ai donc pas construit le
   chapitre autour de ce vocabulaire, seulement mentionné « réduction » au §2 comme
   image intuitive. À CONFIRMER : est-ce acceptable, ou le mot est-il à retirer ?

2. FORMULATION DE LA RÉCIPROQUE : le texte cite « sa réciproque » sans l'énoncer.
   J'ai retenu la forme la plus sûre — égalité des DEUX rapports portés par les
   droites sécantes + condition d'ORDRE des points — et j'ai explicitement exclu le
   rapport MN/BC (§4). C'est mathématiquement nécessaire (sinon l'énoncé est faux),
   mais certaines rédactions de collège allègent la condition d'ordre en supposant
   la figure donnée. → À VALIDER : quel niveau d'exigence attendre d'un élève de 3e
   sur cette condition ?

3. TRIGONOMÉTRIE — apport central de la fiche, conformément à l. 845. Le texte dit
   « lignes trigonométriques », vocabulaire que j'ai repris en titre du §7. Il ne
   mentionne NI les relations cos² + sin² = 1, tan = sin/cos, NI les valeurs
   remarquables (30°, 45°, 60°), NI le cercle trigonométrique : je ne les ai donc
   PAS traités. → À CONFIRMER, c'est le point de périmètre le plus sensible.

4. NOTATION DES FONCTIONS INVERSES : j'ai retenu cos⁻¹/sin⁻¹/tan⁻¹ (ce qui est
   écrit sur les calculatrices des élèves) en signalant que ce n'est pas 1/cos.
   Le programme ne fixe aucune notation. → Le relecteur dira si « arccos » doit
   apparaitre aussi.

5. Aucun contenu sur les DEUX AUTRES automatismes du niveau (repérage, sphère et
   boule) : ils relèvent d'autres sections du programme (l. 811-835), pas de
   « Triangles ».

CONTINUITÉ AVEC LA 4e : la fiche 4e-math-triangles couvre Pythagore (théorème,
réciproque, contraposée), les trois théorèmes de la droite des milieux, le cercle
circonscrit du triangle rectangle et le travail de logique théorème/réciproque/
contraposée. Ces contenus sont des AUTOMATISMES en 3e (l. 838-841) : le §1 y renvoie
et ne les réexplique pas. Le §6 s'appuie explicitement sur le §6 de la fiche 4e.

ARTICULATION AVEC « RACINE CARRÉE » (3e) : chapitre 3e-math-racine-carree
(« Résoudre x² = a »). Cité au §11 pour le cas où Pythagore produit un carré non
parfait, avec le rappel que seule la solution positive a un sens pour une longueur.

À RELIRE EN PRIORITÉ — justesse des exemples chiffrés :
- Thalès emboités : 3/5 = AN/10 → AN = 6 ; 3/5 = MN/8 → MN = 4,8
- Thalès papillon : 4/6 = 5/OD → OD = 7,5
- Réciproque : 2/3 = 4/6 → parallèles ; contraposée : 2/3 ≠ 3/5 → non parallèles
- Trigo triangle 3-4-5 : cos = 0,6 ; sin = 0,8 ; tan ≈ 1,33 ; angle ≈ 53°
- 10 × cos 35° ≈ 8,2 ; 5 ÷ cos 40° ≈ 6,5 ; 6 × tan 30° ≈ 3,5

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
