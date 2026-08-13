---
id: 3e-math-nombres-rationnels
titre: "Nombres rationnels"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Fractions et nombres rationnels (5e)
  - Critères de divisibilité par 2, 3, 5, 9 (5e)
  - Nombre rationnel, opposé, inverse (4e)
  - Additionner, soustraire, multiplier, diviser des fractions (4e)
statut: brouillon
relu_par: null
---

# Nombres rationnels

> $\dfrac{6}{8}$, $\dfrac{3}{4}$, $\dfrac{75}{100}$, $0{,}75$ : quatre écritures,
> **un seul nombre**. Cette année, tu apprends à choisir celle qui le dit le plus
> simplement — la **forme irréductible**. C'est la carte d'identité du nombre.

---

## 1. Le nombre et son écriture

Le programme fixe un vocabulaire précis. Retiens ces trois mots :

| Mot | Ce que c'est |
|---|---|
| **Quotient** | le résultat d'une division, ou l'expression de cette division |
| **Fraction** | un quotient de **deux entiers** : un numérateur, un dénominateur |
| **Nombre rationnel** | un nombre **égal** au quotient de deux entiers, *sans référence à une écriture particulière* |

Cette dernière phrase est le cœur du chapitre. Un nombre rationnel n'est pas une
écriture : c'est un **nombre**, et il possède une infinité d'écritures fractionnaires.

$$\frac{3}{4} = \frac{6}{8} = \frac{9}{12} = \frac{75}{100} = \frac{-3}{-4} = \dots$$

> **Pourquoi une infinité ?** Parce que multiplier le numérateur **et** le dénominateur
> par un même nombre non nul ne change pas le nombre (vu en 5e).
> $$\boxed{\frac{a}{b} = \frac{a \times k}{b \times k} \qquad (b \neq 0,\ k \neq 0)}$$

Parmi toutes ces écritures, une seule ne peut plus être réduite. C'est celle-là qu'on
demande.

---

## 2. Fraction irréductible — la définition

Une fraction est **irréductible** lorsque son numérateur et son dénominateur n'ont
**aucun diviseur commun autre que $1$** : on ne peut plus la simplifier.

$$\boxed{\frac{a}{b} \text{ est irréductible} \iff \text{le seul diviseur commun à } a \text{ et } b \text{ est } 1}$$

> **Exemples.** $\dfrac{3}{4}$ est irréductible : les diviseurs de $3$ sont $1$ et $3$,
> ceux de $4$ sont $1$, $2$, $4$ — seul $1$ est commun.
> $\dfrac{6}{8}$ ne l'est **pas** : $2$ divise $6$ et $8$.
> $\dfrac{15}{28}$ est irréductible : $15 = 3 \times 5$ et $28 = 2 \times 2 \times 7$,
> aucun facteur en commun.

### Propriété : elle est unique

Un nombre rationnel a une infinité d'écritures fractionnaires, mais **une seule forme
irréductible à dénominateur positif**.

> **À quoi ça sert.** Deux calculs différents donnent $\dfrac{30}{42}$ et $\dfrac{25}{35}$ :
> impossible de dire à l'œil s'il s'agit du même nombre. Réduits, ils donnent tous les deux
> $\dfrac{5}{7}$ : **c'est le même nombre**. La forme irréductible est le seul moyen sûr
> de comparer deux résultats.

### Où se met le signe

Un nombre rationnel peut être négatif. On écrit le signe **devant** la fraction et on
garde un dénominateur **positif**.

$$\frac{-45}{60} = \frac{45}{-60} = -\frac{45}{60} = -\frac{3}{4}$$

> **Le réflexe.** Le signe se range en premier, avant toute simplification. Il ne se
> simplifie pas : il se transporte.

---

## 3. Rendre une fraction irréductible — trois méthodes

### Méthode 1 — divisions successives (les critères de divisibilité)

Tu cherches un diviseur commun **évident**, tu divises haut et bas, et tu **recommences**
tant que c'est possible. Les critères de divisibilité par $2$, $3$, $5$ et $9$ sont tes
outils.

> **Exemple.** $\dfrac{126}{294}$
>
> - $126$ et $294$ sont **pairs** → on divise par $2$ : $\dfrac{63}{147}$
> - $6+3 = 9$ et $1+4+7 = 12$ sont multiples de $3$ → on divise par $3$ : $\dfrac{21}{49}$
> - $21 = 3 \times 7$ et $49 = 7 \times 7$ → on divise par $7$ : $\dfrac{3}{7}$
>
> $$\frac{126}{294} = \frac{3}{7}$$
> **Vérification** : $3 \times 42 = 126$ et $7 \times 42 = 294$ ✓

### Méthode 2 — décomposer en produit de facteurs

Tu écris le numérateur et le dénominateur en **produits**, et tu barres ce qui est commun.

> **Exemple.** $\dfrac{60}{84}$
>
> $$60 = 2 \times 2 \times 3 \times 5 \qquad 84 = 2 \times 2 \times 3 \times 7$$
> Facteurs communs : $2 \times 2 \times 3 = 12$.
> $$\frac{60}{84} = \frac{12 \times 5}{12 \times 7} = \frac{5}{7}$$
> **Vérification** : $5 \times 12 = 60$ et $7 \times 12 = 84$ ✓

Cette méthode a un avantage : elle te montre **d'un coup** tout ce qui est simplifiable.
Tu ne risques pas de t'arrêter trop tôt.

### Méthode 3 — diviser en une fois par le plus grand diviseur commun

Si tu connais le **plus grand diviseur commun** au numérateur et au dénominateur, une
seule division suffit. Dans l'exemple précédent, ce diviseur est $12$ — et
$\dfrac{60 \div 12}{84 \div 12} = \dfrac{5}{7}$ tombe directement.

> 📎 **La mécanique pour le trouver** (décomposition, PGCD, nombres premiers) est traitée
> dans le chapitre **« Multiples et diviseurs »** de 3e. Ici, ce qui compte est le
> **résultat** : une fraction réduite au maximum.

### Comment savoir que tu as fini

Reprends la fraction obtenue et cherche un diviseur commun. Deux contrôles rapides :

- **Un numérateur égal à $1$** → toujours irréductible.
- **Un dénominateur qui ne se divise que par $1$ et lui-même** (comme $7$, $11$, $13$) →
  irréductible, sauf si ce dénominateur divise aussi le numérateur.

> **Exemple.** $\dfrac{3}{7}$ : $7$ ne se divise que par $1$ et $7$, et $7$ ne divise pas
> $3$. C'est fini.

---

## 4. Les quatre opérations — le résultat se rend irréductible

Additionner, soustraire, multiplier et diviser des fractions est un **automatisme** de 3e :
tu l'as appris en 5e et en 4e, tu dois maintenant le faire vite et **sans oublier de
réduire le résultat**.

| Opération | La règle | Exemple, réduit |
|---|---|---|
| $+$ et $-$ | **même dénominateur** d'abord | $\dfrac{5}{12} + \dfrac{7}{18} = \dfrac{15}{36} + \dfrac{14}{36} = \dfrac{29}{36}$ |
| $\times$ | haut $\times$ haut, bas $\times$ bas | $\dfrac{14}{15} \times \dfrac{25}{21} = \dfrac{10}{9}$ |
| $\div$ | $\times$ **l'inverse** de la deuxième | $\dfrac{9}{10} \div \dfrac{6}{5} = \dfrac{9}{10} \times \dfrac{5}{6} = \dfrac{3}{4}$ |

> **Le détail de la multiplication.** Simplifie **avant** de multiplier : dans
> $\dfrac{14}{15} \times \dfrac{25}{21}$, le $14$ et le $21$ se divisent par $7$, le $25$
> et le $15$ par $5$.
> $$\frac{14}{15} \times \frac{25}{21} = \frac{2 \times 5}{3 \times 3} = \frac{10}{9}$$
> Multiplier d'abord donnerait $\dfrac{350}{315}$ — même nombre, mais bien plus pénible
> à réduire ensuite.

> ⚠️ **Le dénominateur commun ne sert qu'à additionner et soustraire.** Jamais à
> multiplier, jamais à diviser.

### Comparer deux fractions

Même outil que pour l'addition : on les met au **même dénominateur**, puis on compare
les numérateurs.

> **Exemple.** $\dfrac{7}{12}$ et $\dfrac{5}{8}$ — dénominateur commun $24$ :
> $$\frac{7}{12} = \frac{14}{24} \qquad \frac{5}{8} = \frac{15}{24} \qquad \text{donc } \frac{5}{8} > \frac{7}{12}$$
> ⚠️ Comparer les numérateurs bruts ($7 > 5$) donne la **réponse inverse**.

---

## 5. Résoudre un problème avec des fractions

La difficulté n'est presque jamais le calcul : c'est de choisir **la bonne opération**.

> **Problème 1.** Dans un club, $\dfrac{3}{8}$ des membres jouent au tennis et
> $\dfrac{5}{12}$ au badminton. Quelle fraction ne pratique aucun des deux ?
>
> Les deux fractions portent sur le **même tout** → on les additionne. Dénominateur $24$ :
> $$\frac{3}{8} + \frac{5}{12} = \frac{9}{24} + \frac{10}{24} = \frac{19}{24}$$
> Le reste, c'est le tout moins ça : $1 - \dfrac{19}{24} = \dfrac{24}{24} - \dfrac{19}{24}
> = \dfrac{5}{24}$. Irréductible ✓

> **Problème 2.** Un réservoir est plein aux $\dfrac{3}{4}$. On utilise les $\dfrac{2}{3}$
> **de ce qu'il contient**. Quelle fraction du réservoir reste-t-il ?
>
> « Les $\dfrac{2}{3}$ **de** » se traduit par $\times$ :
> $$\text{utilisé} = \frac{2}{3} \times \frac{3}{4} = \frac{6}{12} = \frac{1}{2} \text{ du réservoir}$$
> $$\text{reste} = \frac{3}{4} - \frac{1}{2} = \frac{3}{4} - \frac{2}{4} = \frac{1}{4}$$
> ⚠️ **Le piège** : soustraire directement $\dfrac{3}{4} - \dfrac{2}{3} = \dfrac{1}{12}$.
> Faux — les $\dfrac{2}{3}$ ne portent pas sur le réservoir, mais sur **son contenu**.

> **Le contrôle de vraisemblance.** $\dfrac{3}{4} = 0{,}75$ et il en reste le tiers :
> $0{,}25$, soit $\dfrac{1}{4}$ ✓. Fais toujours cette vérification en décimal : elle
> repère les erreurs grossières en dix secondes.

---

## 6. Prolongement : la notation des ensembles de nombres

*Culture mathématique — au programme comme prolongement possible.*

Chaque famille de nombres porte un symbole :

| Symbole | Ensemble | Exemples |
|---|---|---|
| $\mathbb{N}$ | entiers **naturels** | $0$, $7$, $2026$ |
| $\mathbb{Z}$ | entiers **relatifs** | $-4$, $0$, $7$ |
| $\mathbb{D}$ | nombres **décimaux** | $-2{,}5$ ; $0{,}75$ ; $7$ |
| $\mathbb{Q}$ | nombres **rationnels** | $\dfrac{1}{3}$ ; $-\dfrac{3}{4}$ ; $0{,}75$ ; $7$ |

Chaque famille contient la précédente :

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q}$$

> **Comment le lire.** Tout entier naturel est un entier relatif ; tout entier relatif est
> décimal ; tout décimal est rationnel. **L'inverse est faux** : $\dfrac{1}{3}$ est
> rationnel mais **pas** décimal — son écriture décimale ne s'arrête jamais
> ($0{,}333\dots$). Seuls les dénominateurs fabriqués avec des $2$ et des $5$ donnent
> des écritures décimales finies.

> **D'où viennent les lettres.** $\mathbb{Z}$ vient de l'allemand *Zahlen* (« nombres »),
> $\mathbb{Q}$ de *quotient*. Ces notations ont à peine un siècle — les nombres, eux, sont
> bien plus vieux.

---

## 7. Cas particuliers et pièges de calcul

| Écriture | Forme irréductible | Pourquoi |
|---|---|---|
| $\dfrac{12}{4}$ | $3$, c'est-à-dire $\dfrac{3}{1}$ | un entier est un rationnel de dénominateur $1$ |
| $\dfrac{7}{7}$ | $1$ | tout nombre non nul divisé par lui-même |
| $\dfrac{0}{5}$ | $0$ | zéro part, donc rien |
| $\dfrac{5}{0}$ | **impossible** | on ne divise jamais par zéro |
| $\dfrac{1}{9}$ | déjà irréductible | numérateur $1$ : rien à simplifier |
| $\dfrac{3+5}{5}$ | $\dfrac{8}{5}$ | on **calcule** le numérateur, on ne barre rien |

> ⚠️ **La ligne de fraction est une parenthèse invisible.** Dans $\dfrac{3+5}{5}$, on ne
> peut pas barrer les $5$ : il faut d'abord effectuer $3+5$. Simplifier ne s'applique
> qu'à des **produits**, jamais à des sommes.

---

## 8. À retenir absolument

| | |
|---|---|
| Nombre rationnel | quotient de deux entiers — un **nombre**, pas une écriture |
| Écritures | une **infinité** ; une seule irréductible (dénominateur positif) |
| Irréductible | plus aucun diviseur commun autre que $1$ |
| Simplifier | diviser haut **et** bas par un diviseur commun, et recommencer |
| Le raccourci | diviser une seule fois par le **plus grand** diviseur commun |
| Signe | devant la fraction, dénominateur positif |
| Tout résultat | se rend irréductible **avant** d'être écrit |
| Dénominateur commun | obligatoire pour $+$ et $-$, **inutile** pour $\times$ et $\div$ |
| Ensembles | $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q}$ |

---

## 9. Les erreurs qui coûtent des points

1. **S'arrêter trop tôt.** $\dfrac{24}{36}$ divisé par $2$ donne $\dfrac{12}{18}$ : ce
   n'est pas fini, $6$ divise encore les deux. La bonne réponse est $\dfrac{2}{3}$.
   Après chaque simplification, **repose-toi la question**.
2. **Ne diviser qu'en haut ou qu'en bas.** $\dfrac{6}{8}$ ne vaut pas $\dfrac{3}{8}$.
   Ce qui se fait au numérateur se fait au dénominateur, **toujours**.
3. **Barrer dans une somme.** Dans $\dfrac{3+5}{5}$, aucun $5$ ne se barre : la ligne de
   fraction est une parenthèse.
4. **Croire que simplifier change le nombre.** $\dfrac{60}{84}$ et $\dfrac{5}{7}$ sont le
   **même nombre** : on change l'écriture, pas la valeur.
5. **Perdre le signe** en simplifiant, ou le laisser au dénominateur. Range-le devant la
   fraction dès la première ligne.
6. **Rendre une réponse non réduite** — ou chercher un dénominateur commun pour
   multiplier. Le premier coûte des points, le second coûte du temps.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Nombres et calculs »,
section « Troisième » (ligne 581), entrée « Nombres rationnels » — lignes 582 à 590.
Contenu intégral de l'entrée dans l'extraction :
  583  Automatismes
  584  − Additionner, soustraire, multiplier et diviser des fractions.
  585  Objectifs d'apprentissage
  586  Mettre une fraction sous forme irréductible.
  587  Rendre irréductible une fraction.
  588  Résoudre des problèmes faisant appel à des fractions.
  589  Prolongements possibles : mises en perspective historiques et culturelles
  590  − Notation des ensembles des entiers naturels, des entiers relatifs, des décimaux,
       des rationnels.

CORRESPONDANCE OBJECTIF → SECTION
« Mettre une fraction sous forme irréductible » / « Rendre irréductible une fraction »
→ §2 (définition, unicité) et §3 (les trois méthodes) · « Résoudre des problèmes faisant
appel à des fractions » → §5 · Automatisme des quatre opérations → §4, en RAPPEL
condensé · Prolongement « notation des ensembles » → §6.

Vocabulaire de §1 (quotient / fraction / nombre rationnel) : repris du chapeau du thème
« Nombres et calculs », lignes 330-336, en particulier ligne 335 — « un nombre rationnel
est un nombre égal au quotient de deux entiers, SANS RÉFÉRENCE À UNE ÉCRITURE
PARTICULIÈRE ». C'est ce qui justifie tout le chapitre : la forme irréductible est
l'écriture canonique d'un nombre qui en a une infinité.

ARTICULATION AVEC LES NIVEAUX PRÉCÉDENTS — volontairement NON redéveloppé ici
- 5e (contenu/cinquieme/maths/fractions/fiche.md) : numérateur/dénominateur, fractions
  égales, comparaison, addition/soustraction, fraction d'un nombre, pourcentages.
- 4e (contenu/quatrieme/maths/nombres-rationnels/fiche.md) : définition du rationnel
  comme quotient de deux entiers relatifs, règle des signes, opposé, inverse, produit,
  division, priorités opératoires, choix de l'opération dans un problème.
Les deux sont cités en prérequis. Apport propre de la 3e : l'IRRÉDUCTIBILITÉ (définition,
unicité, méthodes, contrôle d'arrêt), la réduction systématique de tout résultat, et le
prolongement sur les ensembles de nombres.

FRONTIÈRE AVEC « MULTIPLES ET DIVISEURS » (3e, lignes 615-623), produit en parallèle :
je traite le nombre rationnel (écriture, irréductibilité, opérations, problèmes) et je
RENVOIE à cet autre chapitre pour la mécanique du plus grand diviseur commun et des
nombres premiers (§3, méthode 3). À harmoniser entre les deux fiches à la relecture.

⚠️ POINTS À TRANCHER PAR LE RELECTEUR

1. LE MOT « PGCD » N'EXISTE NULLE PART DANS LE TEXTE OFFICIEL EXTRAIT. Recherche faite
   sur tout le fichier : ni « PGCD », ni « plus grand diviseur commun », ni « premiers
   entre eux ». La note de l'auteur de la 4e (« forme irréductible ET PGCD relèvent de
   la 3e ») n'est donc vérifiée qu'à MOITIÉ : la forme irréductible est bien un objectif
   de 3e (lignes 586-587), le PGCD n'est PAS attesté dans l'extraction. J'ai en
   conséquence écrit « plus grand diviseur commun » en toutes lettres, une seule fois,
   comme raccourci de calcul et non comme notion à savoir, avec renvoi au chapitre
   « Multiples et diviseurs ». Le sigle PGCD n'apparaît que dans ce renvoi. À CONFRONTER
   AU PDF : si le PDF le mentionne (probablement dans les objectifs manquants ci-dessous),
   il faudra décider lequel des deux chapitres porte la définition.

2. LE BLOC « MULTIPLES ET DIVISEURS » DE 3e EST TRONQUÉ DANS L'EXTRACTION. Lignes 615-623 :
   il ne comporte QUE des « Automatismes », sans « Objectifs d'apprentissage » ni
   « Prolongements », alors que tous les autres blocs du programme en ont. Une perte à
   l'extraction est très probable (les lignes 618-621 montrent des fractions cassées sur
   plusieurs lignes, signe d'un problème de mise en page). C'est là que se trouvent
   vraisemblablement PGCD et nombres premiers. À VÉRIFIER SUR LE PDF avant de figer la
   frontière entre les deux chapitres.

3. DOUBLON APPARENT LIGNES 586-587. « Mettre une fraction sous forme irréductible » et
   « Rendre irréductible une fraction » disent la même chose et se suivent sous le même
   intertitre. Hypothèse : dans le PDF, l'une des deux appartient à la colonne
   « Automatismes » et l'autre aux « Objectifs d'apprentissage ». Sans importance pour le
   contenu produit, mais à noter pour l'extraction.

4. NOTATIONS D'ENSEMBLES (§6). Le programme dit « Notation des ensembles des entiers
   naturels, des entiers relatifs, des décimaux, des rationnels » — mais en
   PROLONGEMENT POSSIBLE, rubrique « mises en perspective historiques et culturelles »,
   donc NON EXIGIBLE. C'est bien la 3e, comme le supposait l'auteur de la 4e : ce point-là
   est confirmé. J'ai marqué la section « Culture mathématique — prolongement possible ».
   Deux réserves : (a) les symboles eux-mêmes ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{D}$,
   $\mathbb{Q}$) ne sont pas écrits dans l'extraction, seul le mot « notation » l'est ;
   (b) $\mathbb{D}$ pour les décimaux est une notation d'usage scolaire français, moins
   universelle que les trois autres. Garder, ou s'en tenir à N, Z, Q ?

5. LA CHAÎNE D'INCLUSIONS et le symbole $\subset$ ne figurent pas dans le programme :
   je les ai ajoutés parce qu'ils sont ce qui donne du sens à la liste des quatre
   notations. Le QCM ne teste ce point qu'en langage naturel (question 10), pas le
   symbole. Acceptable ?

6. COMPARAISON DE FRACTIONS (§4, fin). N'est PAS dans le bloc « Nombres rationnels » de
   3e. Elle figure ligne 622 comme automatisme du bloc « Multiples et diviseurs » de 3e
   (« Trouver un dénominateur commun à deux fractions pour les additionner, les soustraire
   ou les comparer »). Traitée ici en rappel court parce qu'elle est indissociable de
   l'addition. Doublon possible avec l'autre chapitre — à arbitrer.

7. PHRASE SUR LES ÉCRITURES DÉCIMALES FINIES (§6) : « seuls les dénominateurs fabriqués
   avec des 2 et des 5 » — mathématiquement exact pour une fraction irréductible, mais
   hors programme explicite. Une phrase, sans démonstration. Garder ou couper ?

8. CRITÈRES DE DIVISIBILITÉ (§3, méthode 1) : mobilisés comme outils. Ils sont listés
   ligne 623 en automatisme de 3e et lignes 375/393 en 5e. Cités en prérequis 5e.

Rédaction originale à partir du seul programme officiel du BO, qui est public. Aucun
emprunt à un manuel ni à un site de cours. Statut : brouillon, non relu.
-->
