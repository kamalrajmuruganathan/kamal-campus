---
id: 3e-math-probabilites
titre: "Probabilités"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Probabilités — évènement, réunion, intersection, complémentaire, ensemble vide (4e)
  - Probabilités — probabilité d'un évènement et de son contraire, expériences à deux épreuves (4e)
  - Probabilités — équiprobabilité, fréquence et probabilité (5e)
  - Statistiques — effectifs et fréquences (5e)
  - Fractions — additionner et soustraire (5e)
statut: brouillon
relu_par: null
---

# Probabilités

> En 4e, tu savais dire ce qu'est $A \cup B$, mais pour calculer sa probabilité il
> fallait lister les issues une par une. Cette année, tu reçois **la relation** qui
> relie les quatre probabilités entre elles. Plus besoin de tout énumérer : trois
> nombres connus en donnent un quatrième.

**Ce chapitre suppose la 4e acquise** : univers $\Omega$, évènement, $\overline{A}$,
$A \cup B$, $A \cap B$, $\varnothing$, $P(\overline{A}) = 1 - P(A)$, et les expériences
à deux épreuves traitées en listant les couples. Relis la fiche de 4e si un de ces
symboles est flou — rien n'est répété ici. Trois choses seulement sont nouvelles cette
année : **la relation d'addition**, la **simulation** d'expériences indépendantes, et la
**stabilisation** des fréquences quand le nombre de répétitions augmente.

---

## 1. La relation d'addition

C'est **la** formule de l'année. Retiens-la sous la forme du programme, celle où tout
est additionné — aucun signe moins à oublier :

$$\boxed{P(A \cup B) + P(A \cap B) = P(A) + P(B)}$$

### Pourquoi elle est vraie

Additionne $P(A)$ et $P(B)$ : les issues qui sont **dans les deux** évènements à la
fois sont comptées **deux fois**. Le total $P(A) + P(B)$ est donc égal à la probabilité
de la réunion, **plus** une fois de trop l'intersection. D'où l'égalité.

> **Vérification sur le dé à six faces.** Avec $A = \{2 \,;\, 4 \,;\, 6\}$ (« pair ») et
> $B = \{5 \,;\, 6\}$ (« au moins $5$ ») :
> $$P(A) + P(B) = \frac{3}{6} + \frac{2}{6} = \frac{5}{6}$$
> $$P(A \cup B) + P(A \cap B) = \frac{4}{6} + \frac{1}{6} = \frac{5}{6} \quad ✓$$
> Le $6$, seule issue commune, est bien ce qui explique l'écart entre $\frac{5}{6}$ et
> la vraie réunion $\frac{4}{6}$.

### La même relation, écrite pour calculer

Quand c'est $P(A \cup B)$ que tu cherches, fais passer l'intersection de l'autre côté :

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

> **Exemple immédiat.** $P(A) = 0{,}4$, $P(B) = 0{,}3$, $P(A \cap B) = 0{,}1$.
> $$P(A \cup B) = 0{,}4 + 0{,}3 - 0{,}1 = 0{,}6$$

---

## 2. Méthode : s'en servir dans les deux sens

La relation contient **quatre** probabilités. Dès que tu en connais **trois**, tu as la
quatrième. Toujours la même marche à suivre :

1. Nomme les deux évènements $A$ et $B$, en français d'abord.
2. Traduis l'énoncé : « et » $\rightarrow A \cap B$, « ou » $\rightarrow A \cup B$.
3. Écris la relation **complète**, sans rien enlever.
4. Remplace les trois valeurs connues, puis isole la quatrième.

### Sens 1 — trouver la réunion

> **Exemple.** Dans une classe de $30$ élèves, $14$ jouent d'un instrument, $19$ font du
> sport en club, et $8$ font **les deux**. On tire un élève au hasard.
>
> $A$ : « il joue d'un instrument », $B$ : « il fait du sport en club ».
> $$P(A) = \frac{14}{30} \qquad P(B) = \frac{19}{30} \qquad P(A \cap B) = \frac{8}{30}$$
> Probabilité qu'il pratique **au moins l'une** des deux activités :
> $$P(A \cup B) = \frac{14}{30} + \frac{19}{30} - \frac{8}{30} = \frac{25}{30} = \frac{5}{6}$$
>
> **Contrôle par les effectifs** : $14 + 19 - 8 = 25$ élèves concernés sur $30$ ✓, et
> les $5$ restants ne font ni l'un ni l'autre.

### Sens 2 — trouver l'intersection

C'est là que la relation est irremplaçable : l'énoncé ne donne aucune liste d'issues.

> **Exemple.** $P(A) = 0{,}6$, $P(B) = 0{,}5$, $P(A \cup B) = 0{,}8$. Combien vaut
> $P(A \cap B)$ ?
> $$P(A \cap B) = P(A) + P(B) - P(A \cup B) = 0{,}6 + 0{,}5 - 0{,}8 = 0{,}3$$

> ⚠️ **L'erreur de signe la plus fréquente.** En isolant, beaucoup écrivent
> $0{,}8 - 0{,}6 - 0{,}5 = -0{,}3$. Une probabilité **négative** n'existe pas : si tu
> tombes dessus, tu as inversé la soustraction. Repars de la forme encadrée, où tout
> est additionné.

---

## 3. Cas particuliers et contrôles

### Quand l'intersection est vide

Si $A \cap B = \varnothing$ (les deux évènements ne peuvent pas se produire ensemble),
alors $P(A \cap B) = 0$ et la relation se simplifie :

$$P(A \cup B) = P(A) + P(B)$$

> **Exemple.** Dé à six faces, $A = \{1 \,;\, 2\}$ et $B = \{5 \,;\, 6\}$. Aucune issue
> commune, donc $P(A \cup B) = \dfrac{2}{6} + \dfrac{2}{6} = \dfrac{4}{6} = \dfrac{2}{3}$.

> ⚠️ **Ce raccourci se mérite.** Vérifie **avant** que $A \cap B$ est bien l'évènement
> impossible : sur l'exemple du § 1, $A$ et $B$ partagent le $6$, et additionner donnait
> $\frac{5}{6}$ au lieu de $\frac{4}{6}$.

### Le contraire, retrouvé

Applique la relation à $B = \overline{A}$. Un évènement et son contraire remplissent
tout l'univers sans se chevaucher : $A \cup \overline{A} = \Omega$ et
$A \cap \overline{A} = \varnothing$. Donc :

$$\underbrace{P(\Omega)}_{=\,1} + \underbrace{P(\varnothing)}_{=\,0} = P(A) + P(\overline{A})
\qquad \text{soit} \qquad P(A) + P(\overline{A}) = 1$$

La formule de 4e n'est donc pas une règle à part : c'est un **cas particulier**.

### Trois contrôles qui repèrent une réponse absurde

| Contrôle | Pourquoi |
|---|---|
| $P(A \cap B) \leqslant P(A)$ et $\leqslant P(B)$ | l'intersection est **contenue** dans chacun |
| $P(A \cup B) \geqslant P(A)$ et $\geqslant P(B)$ | la réunion **contient** chacun |
| $P(A \cup B) \leqslant 1$ | c'est une probabilité |

> **Exemple d'usage.** Un élève annonce $P(A) = 0{,}4$, $P(B) = 0{,}5$ et
> $P(A \cup B) = 0{,}3$. Impossible : la réunion serait **moins** probable que $A$. La
> relation le confirme, elle donnerait $P(A \cap B) = 0{,}6$, plus grande que $P(A)$.

---

## 4. Simuler des expériences aléatoires indépendantes

**Simuler**, c'est remplacer l'expérience réelle par un dispositif qui obéit au **même
modèle** — tableur, calculatrice, générateur de nombres au hasard — pour pouvoir la
répéter des milliers de fois en quelques secondes.

**Indépendantes** veut dire que les répétitions n'ont **aucune influence** les unes sur
les autres : ce qui sort au $200^\text{e}$ tirage ne dépend pas du $199^\text{e}$. C'est
la pièce qui n'a pas de mémoire, vue en 5e.

### Le protocole en quatre étapes

1. **Choisir le modèle** : quelles issues, avec quelles probabilités.
2. **Coder les issues** par des nombres entiers.
3. **Répéter** $N$ fois, de façon indépendante.
4. **Compter**, calculer les **fréquences**, les comparer aux probabilités du modèle.

> **Exemple — un dé équilibré.** Dans un tableur, `=ALEA.ENTRE.BORNES(1;6)` recopiée
> sur $1\,000$ lignes donne $1\,000$ lancers indépendants ; un comptage par face fournit
> les fréquences, à comparer à $\frac{1}{6} \approx 0{,}167$. Pour une pièce,
> `=ALEA.ENTRE.BORNES(0;1)` avec $1 = $ pile — et **deux colonnes** côte à côte simulent
> une expérience à deux épreuves.

> ⚠️ **Une simulation ne démontre rien.** Elle **illustre** un modèle et permet de le
> confronter à l'expérience. Une probabilité se calcule par le raisonnement ; une
> simulation produit des fréquences, qui changent à chaque relance.

---

## 5. Stabilisation : le lien entre fréquence et probabilité

En 4e, tu observais la **fluctuation** : à nombre de lancers **fixé**, la fréquence
change d'une série à l'autre. En 3e, on fait varier ce nombre et on regarde ce qui se
passe quand il **augmente**. Simulation d'une pièce équilibrée, fréquence de « pile » :

| Nombre de lancers $N$ | $10$ | $50$ | $200$ | $1\,000$ | $10\,000$ |
|---|---|---|---|---|---|
| Nombre de piles | $7$ | $27$ | $95$ | $508$ | $4\,972$ |
| Fréquence | $0{,}70$ | $0{,}54$ | $0{,}475$ | $0{,}508$ | $0{,}497$ |
| Écart à $0{,}5$ | $0{,}20$ | $0{,}04$ | $0{,}025$ | $0{,}008$ | $0{,}003$ |

La fréquence **se stabilise** autour de $0{,}5$ : plus $N$ est grand, plus l'écart à la
probabilité devient petit. C'est la **loi des grands nombres**.

> ⚠️ **Stabilisation n'est pas égalité.** Même sur $10\,000$ lancers, la fréquence ne
> tombe pas exactement sur $0{,}5$, et l'écart ne diminue pas forcément à **chaque**
> étape. Ce qui se réduit, c'est son **ordre de grandeur**.

> ⚠️ **La probabilité, elle, ne bouge pas.** Elle appartient au **modèle** et vaut
> $0{,}5$ du début à la fin. Seules les fréquences observées se déplacent. On ne dit
> jamais que « la probabilité se rapproche de la fréquence ».

### Le sens inverse : construire un modèle à partir des fréquences

Pour un dé ou une pièce, l'équiprobabilité se justifie par la **symétrie** de l'objet.
Mais pour certaines expériences, aucune symétrie ne s'applique : le **sexe d'un enfant
à la naissance**, par exemple. On observe alors les fréquences sur un très grand nombre
de cas, et comme elles se stabilisent, on **prend cette valeur** comme probabilité du
modèle. Un grand nombre de répétitions sert donc dans les deux sens : **vérifier** un
modèle qu'on s'est donné, ou le **construire** quand on n'en a pas.

> ⚠️ **La situation réelle n'est pas le modèle.** Le modèle est une description
> simplifiée, choisie par toi. Une pièce réelle n'est jamais parfaitement équilibrée :
> $0{,}5$ est une décision de modélisation, pas une propriété de l'objet.

---

## 6. L'erreur de D'Alembert

Un problème historique, qui rassemble tout le chapitre. Au XVIII<sup>e</sup> siècle, le
mathématicien D'Alembert cherche la probabilité d'obtenir **au moins un pile** en
lançant deux fois une pièce équilibrée. Il raisonne ainsi : si pile sort au premier
lancer, c'est fini ; sinon on relance. Il ne voit donc que **trois cas** —
« $P$ », « $F$ puis $P$ », « $F$ puis $F$ » — et conclut $\dfrac{2}{3}$.

**C'est faux.** Ces trois cas ne sont **pas équiprobables**. Le premier, « $P$ »,
regroupe à lui seul deux issues, selon ce que donne le second lancer. En listant les
couples comme en 4e :

$$\Omega = \{(P\,;P) \,;\, (P\,;F) \,;\, (F\,;P) \,;\, (F\,;F)\}$$

Quatre issues équiprobables, trois favorables : $P(\text{au moins un pile}) = \dfrac{3}{4}$.

> **Le même résultat par la relation.** $A$ : « pile au premier lancer »,
> $B$ : « pile au second ». Chacun a la probabilité $\frac{1}{2}$, et l'intersection
> $A \cap B = \{(P\,;P)\}$ vaut $\frac{1}{4}$ (une issue sur quatre, obtenue **en
> comptant**). Alors :
> $$P(A \cup B) = \frac{1}{2} + \frac{1}{2} - \frac{1}{4} = \frac{3}{4} \quad ✓$$

> **Et la simulation tranche.** Deux colonnes de pile ou face sur $5\,000$ lignes : la
> fréquence des lignes contenant au moins un pile s'installe autour de $0{,}75$, pas de
> $0{,}67$. L'expérience désigne le bon modèle.

---

## 7. À retenir absolument

| | |
|---|---|
| **La relation** | $\boxed{P(A \cup B) + P(A \cap B) = P(A) + P(B)}$ |
| Pour la réunion | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Pour l'intersection | $P(A \cap B) = P(A) + P(B) - P(A \cup B)$ |
| Si $A \cap B = \varnothing$ | $P(A \cup B) = P(A) + P(B)$ — **à vérifier avant** |
| Si $B = \overline{A}$ | on retrouve $P(A) + P(\overline{A}) = 1$ |
| Contrôles | $P(A \cap B) \leqslant P(A) \leqslant P(A \cup B) \leqslant 1$ |
| Simuler | reproduire le modèle pour répéter beaucoup ; n'est pas une démonstration |
| Indépendantes | une répétition n'influence pas les suivantes |
| $N$ **fixé** (4e) | les fréquences **fluctuent** d'une série à l'autre |
| $N$ **augmente** (3e) | les fréquences se **stabilisent** autour de la probabilité |
| D'Alembert | $\dfrac{3}{4}$ et non $\dfrac{2}{3}$ : ses trois cas ne sont pas équiprobables |

---

## 8. Les erreurs qui coûtent des points

1. **Écrire $P(A \cup B) = P(A) + P(B)$ sans retirer l'intersection.** C'est valable
   uniquement si $A \cap B = \varnothing$. Sinon, les issues communes sont comptées deux
   fois et le résultat est trop grand — parfois même supérieur à $1$.
2. **Se tromper de signe en isolant.** $P(A \cap B) = P(A) + P(B) - P(A \cup B)$, jamais
   $P(A \cup B) - P(A) - P(B)$. Un résultat négatif signe cette erreur.
3. **Oublier de vérifier la vraisemblance.** Une intersection plus probable que $A$, ou
   une réunion moins probable que $A$ : la copie est fausse avant même la relecture du
   calcul.
4. **Prendre la fréquence d'une simulation pour la probabilité.** $0{,}178$ pour la face
   $6$ sur $5\,000$ tirages ne signifie pas que la probabilité vaut $0{,}178$ : le
   modèle donne $\frac{1}{6}$, et l'écart est une fluctuation normale.
5. **Dire que « la probabilité se rapproche de la fréquence ».** C'est l'inverse : la
   probabilité est fixée par le modèle, ce sont les fréquences observées qui se
   stabilisent autour d'elle quand $N$ augmente.
6. **Refaire l'erreur de D'Alembert** en regroupant des issues sans vérifier qu'elles
   restent équiprobables. Avant de diviser, demande-toi toujours : *mes cas ont-ils
   vraiment la même chance ?*

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « Organisation et gestion
de données et probabilités », section TROISIÈME, sous-section « Probabilités »,
LIGNES 960-967 (dans la plage 947-967 indiquée, dont 948-958 = Statistiques, hors sujet
ici). Chapeau du thème lu : LIGNES 861-885.
Créé le 2026-08-12 ; premier chapitre de 3e du dépôt (contenu/troisieme/ n'existait pas).

Le texte de 3e tient en QUATRE lignes d'objectifs. Couverture intégrale :
- « Connaitre et savoir appliquer la relation P(A ∪ B) + P(A ∩ B) = P(A) + P(B) » →
  § 1 (énoncé + justification), § 2 (les deux sens de calcul), § 3 (cas particuliers).
- « Simuler des expériences aléatoires indépendantes » → § 4.
- « Observer la stabilisation des fréquences lorsqu'on augmente le nombre de
  répétitions, faire le lien entre fréquence et probabilité selon le nombre de
  répétitions » → § 5.
- Prolongement « Problème de l'erreur de D'Alembert » → § 6 (c'est un PROLONGEMENT
  POSSIBLE, donc facultatif : à supprimer sans dommage si le relecteur le juge hors
  périmètre. Il a été gardé parce qu'il réutilise à la fois la relation, l'énumération
  des couples de 4e et la simulation).

=== LES DEUX POINTS LAISSÉS EN SUSPENS PAR LA FICHE DE 4e — VÉRIFIÉS ET TRANCHÉS ===

1) FORMULE DE LA RÉUNION : la 4e avait raison POUR LA 4e, et la 3e la RENVERSE. La
   section de 3e donne explicitement la relation (ligne 962), et c'est son PREMIER
   objectif d'apprentissage. C'est donc le cœur de cette fiche.
   ⚠️ FORME DE L'ÉCRITURE : le BO écrit la version ADDITIVE
   P(A ∪ B) + P(A ∩ B) = P(A) + P(B), pas la version soustractive
   P(A ∪ B) = P(A) + P(B) − P(A ∩ B). La fiche encadre la forme du BO et présente la
   seconde comme la même relation réécrite pour calculer. À VALIDER : si le relecteur
   préfère que seule la forme du BO soit mémorisée, il faut alléger le § 1.
   CONSÉQUENCE POUR LA 4e : la note de la fiche de 4e (« point de périmètre le plus
   sensible ») peut être close — la formule n'est pas au programme de 4e, elle arrive
   en 3e. Aucune modification de la fiche de 4e n'est nécessaire.

2) ARBRE ET TABLEAU À DOUBLE ENTRÉE : le constat de la 4e est CONFIRMÉ pour la 3e et
   pour tout le cycle 4. Recherche relancée sur l'intégralité du fichier de programme :
   « arbre » → 0 occurrence ; « double entrée » → 0 occurrence. Rien n'est donc ajouté
   ici : les expériences à deux épreuves restent traitées par ÉNUMÉRATION DES ISSUES
   (§ 6). Aucun arbre pondéré, aucune multiplication le long des branches.

=== PÉRIMÈTRE — CE QUE J'AI VOLONTAIREMENT ÉCARTÉ ===

- INDÉPENDANCE ET FORMULE P(A ∩ B) = P(A) × P(B) : le mot « indépendantes » figure
  UNE SEULE FOIS dans tout le cycle 4 (ligne 963), et il qualifie les EXPÉRIENCES QU'ON
  SIMULE, pas des évènements. Le programme ne définit pas l'indépendance et ne donne
  AUCUNE règle de multiplication. Non traitée, donc : au § 6, P(A ∩ B) = 1/4 est
  obtenue EN COMPTANT les issues, jamais par 1/2 × 1/2. POINT LE PLUS SENSIBLE DE LA
  FICHE — c'est la tentation naturelle du rédacteur comme du professeur.
- « ÉVÈNEMENTS INCOMPATIBLES » : le mot n'est nulle part dans le cycle 4 (« incompatible »
  et « disjoint » → 0 occurrence). Le cas est traité, puisqu'il découle de la relation,
  mais SANS LE NOMMER : la fiche dit « si A ∩ B = ∅ ». À valider — le vocabulaire est si
  répandu que son absence peut surprendre.
- PROBABILITÉS CONDITIONNELLES, arbres pondérés, dénombrement : hors cycle 4.

=== À CONFRONTER AU PDF PAR UN PROFESSEUR ===

- LA DATE DU BO : même réserve que pour la 5e et la 4e. L'en-tête dit « BO du 5 mars
  2026 » (chaîne imposée par la consigne), ETAT.md dit « BO du 2 avril 2026 », aucune
  des deux ne figure dans le texte extrait. À TRANCHER GLOBALEMENT sur tout le dépôt.
- ORTHOGRAPHE « ÉVÈNEMENT » : le BO 2026 écrit « évènement » (accent grave). Les fiches
  de 5e et de 4e écrivent « événement ». Cette fiche suit le BO, conformément à la
  consigne de vocabulaire — d'où une INCOHÉRENCE avec les deux fiches amont. Harmoniser
  dans un sens ou dans l'autre avant publication. Même remarque, plus mineure, sur le
  symbole de l'ensemble vide : la fiche de 4e utilise `\emptyset` (∅), celle-ci
  `\varnothing` (⌀). Les deux sont rendus par KaTeX, mais il faut choisir.
- LES DONNÉES CHIFFRÉES sont INVENTÉES à titre d'illustration plausible : la classe de
  30 élèves (§ 2), le tableau de stabilisation du § 5 (effectifs cohérents avec les
  fréquences affichées, arrondies au millième), les 5 000 lignes du § 6.
- LA FRÉQUENCE DES NAISSANCES (§ 5) : le programme cite l'exemple « sexe d'un enfant à
  la naissance » (ligne 883) mais NE DONNE AUCUNE VALEUR. La fiche n'en avance donc
  aucune non plus et reste qualitative. Si le relecteur veut un chiffre, il faudra une
  source démographique citée.
- LES NOMS DE FONCTIONS TABLEUR (§ 4) : `ALEA.ENTRE.BORNES` n'est pas dans le programme,
  qui dit seulement que le thème « est propice à l'utilisation du tableur » (ligne 871).
  Vérifier que la syntaxe correspond au tableur utilisé en classe, ou la remplacer par
  une formulation neutre (« la fonction de nombre aléatoire du tableur »).
- « LOI DES GRANDS NOMBRES » (§ 5) : l'expression vient du CHAPEAU du thème (ligne 884),
  pas de la section de 3e. Nommée une fois, sans énoncé formel. À valider.
- LE PROBLÈME DE D'ALEMBERT : la formulation historique retenue (la partie s'arrête dès
  qu'un pile sort, d'où trois cas) est celle qui rend l'erreur intelligible. Le
  programme cite le problème sans le décrire (ligne 967) : vérifier que cette version
  est bien celle attendue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
