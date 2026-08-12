---
id: 4e-math-triangles
titre: "Triangles"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 14
prerequis:
  - Angles et triangles, somme des angles (5e)
  - Médiatrice et cercle circonscrit (5e)
  - Propriétés des diagonales du rectangle (5e)
  - Racine carrée (4e)
statut: brouillon
relu_par: null
---

# Triangles

> Le théorème de Pythagore est le premier outil qui te permet de **calculer une
> longueur qu'on ne t'a pas donnée**. Sa réciproque fait l'inverse : elle prouve
> qu'un angle est droit sans jamais poser l'équerre. Deux énoncés proches, deux
> usages opposés — c'est tout l'enjeu du chapitre.

---

## 1. Les droites remarquables du triangle

| Droite | Définition |
|---|---|
| **Médiatrice** d'un côté | perpendiculaire à ce côté **et** passant par son milieu |
| **Médiane** issue d'un sommet | joint ce sommet au **milieu du côté opposé** |
| **Hauteur** issue d'un sommet | passe par ce sommet, **perpendiculaire au côté opposé** |
| **Bissectrice** d'un angle | partage cet angle en **deux angles égaux** |

Il y en a trois de chaque sorte. Les trois médiatrices se coupent au centre du
**cercle circonscrit**, qui passe par les trois sommets (vu en 5e) — le §7 s'en sert.

> **Le piège du vocabulaire** : la médiatrice concerne un **côté**, la médiane part
> d'un **sommet**. Dans un triangle **isocèle**, médiatrice de la base, médiane,
> hauteur et bissectrice issues du sommet principal sont **la même droite**.

---

## 2. La droite des milieux — trois théorèmes

Ils se ressemblent : lis bien ce que chacun **suppose** et ce qu'il **donne**.

**Théorème 1 — le parallélisme.** Si une droite passe par les **milieux de deux
côtés**, elle est **parallèle au troisième côté**.

> Dans $\mathrm{ABC}$, $\mathrm{I}$ milieu de $[\mathrm{AB}]$ et $\mathrm{J}$ milieu
> de $[\mathrm{AC}]$ : alors $(\mathrm{IJ}) \parallel (\mathrm{BC})$.

**Théorème 2 — la longueur.** Ce segment mesure **la moitié** du troisième côté.

$$\boxed{\mathrm{IJ} = \frac{\mathrm{BC}}{2}}$$

> Même figure avec $\mathrm{BC} = 9$ cm : $\mathrm{IJ} = 9 \div 2 = 4{,}5$ cm.

**Théorème 3 — celui qui démontre un milieu.** Si une droite passe par le **milieu
d'un côté** et est **parallèle à un deuxième côté**, alors elle coupe le
**troisième côté en son milieu**.

> $\mathrm{I}$ est le milieu de $[\mathrm{AB}]$. La parallèle à $(\mathrm{BC})$
> passant par $\mathrm{I}$ coupe $[\mathrm{AC}]$ en $\mathrm{J}$ : ce point est
> **forcément** le milieu de $[\mathrm{AC}]$.

> **Comment choisir** : 1 et 2 partent de **deux milieux** ; le 3 part d'**un seul
> milieu et d'un parallélisme**, et c'est le seul qui **prouve** qu'un point est un
> milieu.

---

## 3. Le théorème de Pythagore

### L'hypothèse : un triangle RECTANGLE

Le théorème ne dit **rien** d'un triangle quelconque : il lui faut un angle droit.
Le côté **opposé à l'angle droit** s'appelle l'**hypoténuse**, et c'est toujours le
**plus long** des trois côtés.

> Si $\mathrm{ABC}$ est rectangle **en $\mathrm{A}$**, l'hypoténuse est
> $[\mathrm{BC}]$ — le côté qui ne touche pas $\mathrm{A}$.

**Si** $\mathrm{ABC}$ est rectangle en $\mathrm{A}$, **alors** :

$$\boxed{\mathrm{BC}^2 = \mathrm{AB}^2 + \mathrm{AC}^2}$$

L'hypoténuse est **seule** d'un côté du signe $=$, les deux côtés de l'angle droit
ensemble de l'autre.

> **Exemple 1 — calculer l'hypoténuse.**
> $\mathrm{ABC}$ rectangle en $\mathrm{A}$, $\mathrm{AB} = 3$ cm, $\mathrm{AC} = 4$ cm.
> $$\mathrm{BC}^2 = 3^2 + 4^2 = 9 + 16 = 25 \qquad \mathrm{BC} = \sqrt{25} = 5 \text{ cm}$$

> **Exemple 2 — calculer un côté de l'angle droit.** Ici on **soustrait**, parce que
> l'inconnue n'est plus seule.
> $\mathrm{ABC}$ rectangle en $\mathrm{A}$, $\mathrm{BC} = 13$ cm, $\mathrm{AB} = 5$ cm.
> $$13^2 = 5^2 + \mathrm{AC}^2 \quad\Rightarrow\quad \mathrm{AC}^2 = 169 - 25 = 144$$
> $$\mathrm{AC} = \sqrt{144} = 12 \text{ cm}$$

> **Les triplets à reconnaitre** : $3$–$4$–$5$, $5$–$12$–$13$ et leurs multiples
> ($6$–$8$–$10$, $9$–$12$–$15$…). Les repérer fait gagner du temps, mais **écris
> quand même le calcul** : c'est lui qui est noté.

> **Exemple 3 — quand la racine n'est pas entière.** C'est le cas le plus fréquent
> en réalité.
> $\mathrm{ABC}$ rectangle en $\mathrm{A}$, $\mathrm{AB} = 2$ cm, $\mathrm{AC} = 3$ cm.
> $$\mathrm{BC}^2 = 2^2 + 3^2 = 4 + 9 = 13 \qquad \mathrm{BC} = \sqrt{13} \text{ cm}$$
>
> $13$ n'est pas un carré parfait : $\sqrt{13}$ est la **valeur exacte**, on la garde
> telle quelle. Comme $3^2 = 9 < 13 < 16 = 4^2$, on a $3 < \sqrt{13} < 4$, et la
> calculatrice donne $\mathrm{BC} \approx 3{,}6$ cm. Pour extraire et encadrer une
> racine, revois le chapitre **« Racine carrée » (4e)**.

### La méthode, dans l'ordre

1. Repère l'**angle droit**, puis l'**hypoténuse** : le côté opposé à cet angle.
2. Écris l'égalité de Pythagore avec les bonnes lettres.
3. Remplace par les nombres et calcule les carrés.
4. Isole l'inconnue au carré (addition ou **soustraction** selon le cas).
5. Prends la racine carrée. **N'oublie pas l'unité.**

---

## 4. La réciproque — pour démontrer qu'un angle est droit

Elle part des **longueurs** et arrive à l'**angle droit** : l'inverse du théorème.

**Si** dans $\mathrm{ABC}$ le côté $[\mathrm{BC}]$ est le **plus long** et **si**
$\mathrm{BC}^2 = \mathrm{AB}^2 + \mathrm{AC}^2$, **alors** $\mathrm{ABC}$ est
**rectangle en $\mathrm{A}$**.

**La méthode : deux calculs séparés.** Tu ne sais **pas encore** que l'égalité est
vraie, tu ne peux donc pas l'écrire. Tu calcules les deux membres chacun de son
côté, puis tu compares.

> **Exemple.** $\mathrm{RST}$ avec $\mathrm{RS} = 6$ cm, $\mathrm{ST} = 8$ cm,
> $\mathrm{RT} = 10$ cm. Le plus grand côté est $[\mathrm{RT}]$, le sommet opposé
> est $\mathrm{S}$.
> D'un côté : $\mathrm{RT}^2 = 10^2 = 100$. De l'autre :
> $\mathrm{RS}^2 + \mathrm{ST}^2 = 36 + 64 = 100$.
> Les deux sont **égaux**, donc $\mathrm{RST}$ est rectangle en $\mathrm{S}$.

> ⚠️ **L'angle droit est toujours au sommet opposé au plus grand côté.** Si tu testes
> le mauvais côté, le calcul ne tombera jamais juste.

---

## 5. La contraposée — pour démontrer qu'un angle n'est PAS droit

**Si** $\mathrm{BC}^2 \neq \mathrm{AB}^2 + \mathrm{AC}^2$, **alors** le triangle
n'est **pas** rectangle en $\mathrm{A}$. Même méthode : deux calculs séparés, puis
on compare — ici, ils diffèrent.

> **Exemple.** Un triangle de côtés $4$, $5$ et $6$ cm. Plus grand côté : $6$.
> D'un côté $6^2 = 36$, de l'autre $4^2 + 5^2 = 16 + 25 = 41$.
> $36 \neq 41$ : ce triangle **n'est pas rectangle**.

> **Pourquoi on conclut pour le triangle entier** : l'angle droit, s'il existait,
> serait opposé au **plus grand** côté. Tu as testé celui-là : le triangle n'est
> rectangle **nulle part**.

---

## 6. Le travail de logique : trois énoncés à ne pas mélanger

| Énoncé | Ce que tu **sais** | Ce que tu **obtiens** |
|---|---|---|
| **Théorème** | l'angle est droit | une **longueur** |
| **Réciproque** | les 3 longueurs, l'égalité est vraie | l'angle **est** droit |
| **Contraposée** | les 3 longueurs, l'égalité est fausse | l'angle **n'est pas** droit |

Un théorème et sa **contraposée** disent la même chose, retournée : si l'un est
vrai, l'autre l'est automatiquement. La **réciproque**, elle, est un énoncé
**différent** : elle n'est pas vraie d'office, c'est un théorème à part entière
qu'il a fallu démontrer.

> **La preuve que ce n'est pas un détail.** *« Équilatéral donc isocèle »* → **vrai**.
> Sa réciproque *« isocèle donc équilatéral »* → **faux** (côtés $5$, $5$, $8$). Une
> réciproque peut donc être fausse alors que l'énoncé de départ est vrai. Pour
> Pythagore elle se trouve être vraie — c'est un résultat, pas une évidence.

---

## 7. Triangle rectangle et cercle circonscrit

**Du triangle vers le cercle.** Si un triangle est **rectangle**, alors le centre de
son cercle circonscrit est le **milieu de l'hypoténuse**, et l'hypoténuse est un
**diamètre** du cercle.

$$\boxed{r = \frac{\text{hypoténuse}}{2}}$$

> $\mathrm{ABC}$ rectangle en $\mathrm{A}$, $\mathrm{BC} = 10$ cm : le centre est le
> milieu $\mathrm{O}$ de $[\mathrm{BC}]$, le rayon vaut $5$ cm. C'est le moyen le
> plus rapide de **placer ce centre** : inutile de tracer les trois médiatrices.

**Du cercle vers le triangle.** Si un triangle est **inscrit dans un cercle** et que
l'un de ses côtés est un **diamètre**, alors il est **rectangle**, l'angle droit
étant au sommet opposé au diamètre.

> $[\mathrm{BC}]$ est un diamètre et $\mathrm{A}$ un point quelconque du cercle :
> $\mathrm{ABC}$ est rectangle en $\mathrm{A}$, où que tu places $\mathrm{A}$.

> **Conséquence** : la médiane issue de l'angle droit mesure la **moitié de
> l'hypoténuse** — c'est un rayon. Ci-dessus, $\mathrm{OA} = 5$ cm.

---

## 8. Méthode — construire un rectangle sans équerre

Règle et compas suffisent : trace un cercle de centre $\mathrm{O}$, puis deux
**diamètres** quelconques $[\mathrm{AC}]$ et $[\mathrm{BD}]$, et relie $\mathrm{A}$,
$\mathrm{B}$, $\mathrm{C}$, $\mathrm{D}$ dans cet ordre. $\mathrm{ABCD}$ est un
rectangle.

> **Pourquoi ça marche.** Ses diagonales ont le même milieu $\mathrm{O}$ : c'est un
> parallélogramme. Et elles ont la même longueur, puisque ce sont deux diamètres du
> même cercle. Un parallélogramme à diagonales égales est un **rectangle** (5e).

> **La construction des géomètres de l'Antiquité** : la corde à $13$ nœuds délimite
> $12$ intervalles égaux, répartis en $3 + 4 + 5$. Le triangle obtenu vérifie
> $5^2 = 3^2 + 4^2$ : d'après la **réciproque**, il est rectangle — un angle droit
> avec une simple ficelle.

---

## 9. Les pièges de calcul

- **$\mathrm{BC}^2$ n'est pas $2 \times \mathrm{BC}$** : $5^2 = 25$, pas $10$.
- **Additionner quand il faut soustraire.** Tu cherches l'hypoténuse : tu
  **ajoutes**. Tu cherches un côté de l'angle droit : tu **soustrais**. Contrôle de
  bon sens — un côté de l'angle droit est plus court que l'hypoténuse.
- **Oublier la racine carrée** : $\mathrm{BC}^2 = 25$ ne veut pas dire $\mathrm{BC} = 25$.
- **La racine ne se distribue pas sur une somme** : $\sqrt{4+9} \neq \sqrt{4} +
  \sqrt{9}$, car $\sqrt{13} \approx 3{,}6$ alors que $2 + 3 = 5$.
- **Mélanger les unités**, ou **arrondir trop tôt** : convertis avant de calculer,
  garde la valeur exacte ($\sqrt{13}$) jusqu'au bout, arrondis à la fin avec $\approx$.

---

## 10. À retenir absolument

| | |
|---|---|
| Hypoténuse | côté **opposé à l'angle droit**, le plus long |
| Pythagore | rectangle en $\mathrm{A}$ $\Rightarrow$ $\mathrm{BC}^2 = \mathrm{AB}^2 + \mathrm{AC}^2$ |
| Le théorème sert à | **calculer une longueur** |
| La réciproque sert à | **démontrer un angle droit** (égalité vraie $\Rightarrow$ rectangle) |
| La contraposée sert à | **démontrer qu'il n'y a pas** d'angle droit |
| Théorème et contraposée | disent la même chose ; la réciproque est un énoncé **différent** |
| Droite des milieux | deux milieux $\Rightarrow$ parallèle, et **moitié** de la longueur ; un milieu + parallèle $\Rightarrow$ **milieu** |
| Cercle circonscrit | rectangle $\Rightarrow$ centre au **milieu de l'hypoténuse** ; côté = diamètre $\Rightarrow$ **rectangle** |

---

## 11. Les erreurs qui coûtent des points

1. **Confondre le théorème et sa réciproque.** C'est l'erreur n°1, et elle coûte
   tous les points de la question. L'énoncé te **donne** l'angle droit → théorème,
   tu cherches une longueur. Il te **donne trois longueurs** et demande si l'angle
   est droit → réciproque. Écrire « le triangle est rectangle donc
   $\mathrm{BC}^2 = \dots$ » quand c'est ce qu'on demande de prouver, c'est supposer
   ce que tu dois démontrer.
2. **Écrire l'égalité de Pythagore avant de l'avoir vérifiée**, dans un exercice de
   réciproque : les deux membres se calculent **séparément**, et on ne les relie
   qu'après comparaison.
3. **Se tromper d'hypoténuse.** Dans un triangle rectangle en $\mathrm{B}$, c'est
   $[\mathrm{AC}]$ qui est seul dans la formule. Repère l'angle droit **avant**
   d'écrire quoi que ce soit.
4. **Additionner au lieu de soustraire** quand l'inconnue est un côté de l'angle
   droit — repérable : tu trouves un côté plus long que l'hypoténuse.
5. **Oublier la racine carrée** et rendre $25$ cm au lieu de $5$ cm.
6. **Tester la réciproque sur le mauvais côté** : c'est toujours le **plus grand**
   qui joue le rôle de l'hypoténuse.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.txt), domaine « Espace et
géométrie », niveau QUATRIÈME, section « Triangles », LIGNES 794 à 809.

Capacités citées par le texte et couvertes ici :
- l. 796-797 (automatisme) « Reconnaitre des droites remarquables, y compris dans les
  triangles particuliers (médiatrices, médianes, hauteurs, bissectrices) » → §1
- l. 799 « Connaitre les trois théorèmes relatifs à la droite des milieux » → §2
- l. 800 « Connaitre le théorème de Pythagore, sa réciproque, sa contraposée » → §3-5
- l. 801 « Mener un travail de logique sur la réciproque et la contraposée » → §6
- l. 802-803 « Caractériser un triangle rectangle à l'aide de son cercle circonscrit,
  par son inscription dans un demi-cercle dont le diamètre est un côté » → §7
- l. 805 « Déterminer le centre du cercle circonscrit d'un triangle rectangle » → §7
- l. 806 « Construire des rectangles sans équerre » → §8
- l. 809 « Quelques repères historiques autour de Pythagore » → corde à 13 nœuds, §8

PÉRIMÈTRE — vérifications faites dans le texte, à confirmer par le relecteur :

1. TRIGONOMÉTRIE (cosinus, sinus, tangente) : NON traitée. Le texte la place en
   TROISIÈME — l. 845 « Connaitre et utiliser les lignes trigonométriques dans le
   triangle rectangle : cosinus, sinus, tangente », section « Triangles » du niveau
   Troisième (qui commence l. 810). Rien de trigonométrique dans la section 4e.

2. DISTANCE ENTRE DEUX POINTS D'UN REPÈRE : NON traitée. L'expression est ABSENTE de
   tout le document (recherche « distance » : seules occurrences l. 1004 et l. 1050,
   en proportionnalité/échelles, « distance réelle entre deux villes »). La section
   « Repérage sur une droite et dans le plan » de la 4e (l. 759-765) ne contient que
   des automatismes de lecture et de placement de coordonnées. Le calcul de distance
   par Pythagore dans un repère ne figure donc ni ici ni dans le repérage 4e.
   → À TRANCHER : omission de l'extraction, ou attendu réellement retiré ?

3. THÉORÈME DE THALÈS : en Troisième (l. 843-844), pas ici.

4. l. 808 « Théorème de Varignon : l'élève étudie la démonstration historique
   d'Euclide basée sur les aires » — ligne INCOHÉRENTE dans l'extraction : le
   théorème de Varignon (quadrilatère des milieux) n'a pas de rapport avec la
   démonstration de Pythagore par les aires. Deux prolongements semblent avoir
   fusionné. Je n'ai développé ni l'un ni l'autre (prolongements, pas attendus).
   → À CONFRONTER AU PDF.

5. Les « trois théorèmes de la droite des milieux » : le texte les cite sans les
   énoncer. J'ai retenu le triplet usuel (parallélisme / longueur moitié / réciproque
   du milieu). → À VALIDER : est-ce bien ce découpage qui est attendu ?

CONTINUITÉ AVEC LA 5e : la fiche 5e-math-triangles-angles couvre la somme des angles,
les triangles particuliers, l'inégalité triangulaire et la rédaction « On sait que /
Or / Donc » — non refaits ici. La médiatrice et le cercle circonscrit y sont posés
(programme 5e, l. 723 et 727) : le §7 les réutilise sans les redéfinir.

ARTICULATION AVEC « RACINE CARRÉE » (4e) : chapitre 4e-math-racine-carree produit en
parallèle. L'extraction et l'encadrement de la racine y sont traités (l. 560-561) ;
on s'y réfère explicitement (§3 et §9) sans les refaire. Le programme fait lui-même
le lien, l. 344-345 : « La racine carrée est introduite, en lien avec des situations
géométriques (…) théorème de Pythagore ».

À RELIRE EN PRIORITÉ : la justesse des exemples chiffrés (3-4-5 ; 13/5 → 12 ;
2 et 3 → √13 ≈ 3,6 ; 6-8-10 rectangle en S ; 4-5-6 non rectangle).

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
