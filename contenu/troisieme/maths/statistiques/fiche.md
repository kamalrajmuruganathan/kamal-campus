---
id: 3e-math-statistiques
titre: "Statistiques : effectifs cumulés, quartiles et boite à moustaches"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Effectifs, fréquences, tableau d'effectifs et diagrammes (5e)
  - Moyenne pondérée, médiane sur données brutes, étendue (4e)
  - Ranger des nombres décimaux dans l'ordre croissant (6e)
statut: brouillon
relu_par: null
---

# Statistiques : effectifs cumulés, quartiles et boite à moustaches

> Jusqu'ici tu résumais une série par **un** nombre. Cette année tu apprends à la
> découper : en deux avec la médiane, en quatre avec les quartiles. Cinq nombres
> suffisent alors à dessiner toute la série d'un seul trait.

---

## 1. Ce que tu sais déjà

Relis **« Statistiques » (5e)** — effectif, effectif total, fréquence, tableau
d'effectifs, diagrammes — et **« Statistiques » (4e)** — moyenne pondérée, médiane sur
données brutes, étendue, effet d'une valeur extrême. Trois calculs doivent être
**automatiques** : une moyenne ($\frac{7+9+11+13}{4} = 10$), une médiane sur peu de
valeurs (sur $4$ ; $6$ ; $9$ ; $10$ ; $15$, c'est $9$), une étendue ($15-4 = 11$). Tu
ajoutes cette année les **effectifs cumulés croissants**, les **quartiles**, la **boite
à moustaches**, et la médiane lue dans un **tableau d'effectifs** — plus seulement sur
une liste de données brutes.

---

## 2. Les effectifs cumulés croissants

> **Définition.** L'effectif cumulé croissant d'une valeur, c'est le nombre de données
> **inférieures ou égales** à cette valeur : on additionne les effectifs depuis la
> gauche jusqu'à cette valeur incluse.

> **Exemple.** Notes sur $20$ obtenues par $25$ élèves. Chaque case des cumuls vaut
> « cumul précédent $+$ effectif » : $2$, puis $2+5 = 7$, puis $7+6 = 13$…
>
> | Note | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ |
> |---|---|---|---|---|---|---|
> | **Effectif** | $2$ | $5$ | $6$ | $7$ | $3$ | $2$ |
> | **Cumul croissant** | $2$ | $7$ | $13$ | $20$ | $23$ | $25$ |
>
> **Les deux contrôles** : la ligne des cumuls est **toujours croissante**, et la
> **dernière case vaut l'effectif total** ($25$). Si l'un des deux échoue, c'est une
> erreur d'addition — reprends avant d'aller plus loin.

**À quoi ça sert.** À répondre à « combien au plus ? » — $20$ élèves ont eu **au plus
$12$**, donc $25-20 = 5$ ont eu **plus de $12$**. Et surtout à trouver la valeur qui
occupe un **rang** donné sans réécrire les $25$ notes : c'est tout ce que demandent la
médiane et les quartiles.

---

## 3. La médiane d'une série donnée par un tableau

Dans un tableau d'effectifs, la série est **déjà rangée** et la ligne des cumuls dit à
quel rang tu es arrivé — inutile de réécrire la liste comme en 4e.

$$\boxed{\text{médiane} = \text{la valeur qui partage la série rangée en deux moitiés}}$$

**La méthode.** ① Calcule l'effectif total $n$ et la ligne des cumuls. ② Repère le
rang : $\dfrac{n+1}{2}$ si $n$ est **impair** ; les rangs $\dfrac{n}{2}$ et
$\dfrac{n}{2}+1$ si $n$ est **pair**. ③ Lis la **première valeur dont le cumul atteint
ou dépasse** ce rang.

> **$n$ impair.** Les $25$ notes : rang $\frac{25+1}{2} = 13$. Cumuls $2$ ; $7$ ;
> $\mathbf{13}$ ; $20$ ; $23$ ; $25$ — le premier qui atteint $13$ est celui de $10$.
> **Médiane $= 10$** : la moitié de la classe au moins a eu $10$ ou moins.

> **$n$ pair.** Livres empruntés au CDI par $20$ élèves : effectifs $4$ ; $6$ ; $4$ ;
> $4$ ; $2$ pour $0$ à $4$ livres, donc cumuls $4$ ; $10$ ; $14$ ; $18$ ; $20$. Rangs
> $10$ et $11$ : le rang $10$ tombe sur la valeur $1$ (cumul $10$), le rang $11$ sur la
> valeur $2$ (premier cumul $\geqslant 11$ : $14$).
> Médiane $= \dfrac{1+2}{2} = \mathbf{1{,}5}$ livre.

> ⚠️ **Convention à connaitre.** Personne n'a emprunté $1{,}5$ livre : la médiane n'est
> pas toujours une valeur de la série, elle marque une **frontière**. Quand $n$ est
> pair, tout nombre entre les deux valeurs centrales coupe la série en deux moitiés ;
> pour qu'elle soit **un seul nombre**, on prend toujours leur **demi-somme**. C'est une
> convention — mais c'est celle qu'attend le correcteur, et celle du tableur.

---

## 4. Les quartiles

La médiane coupe en deux, les quartiles coupent en **quatre**.

> **Définitions.** Le **premier quartile** $Q_1$ est la plus petite valeur de la série
> telle qu'**au moins un quart** des données lui soient inférieures ou égales. Le
> **troisième quartile** $Q_3$ est la plus petite valeur telle qu'**au moins trois
> quarts** des données lui soient inférieures ou égales. Contrairement à la médiane,
> $Q_1$ et $Q_3$ sont **toujours des valeurs de la série**.

**La méthode, en trois gestes.** ① Calcule $\dfrac{n}{4}$ pour $Q_1$, $\dfrac{3n}{4}$
pour $Q_3$. ② Si le résultat n'est **pas entier**, prends l'entier **juste au-dessus** ;
s'il est entier, garde-le. Tu tiens un **rang**. ③ Lis la première valeur dont le cumul
atteint ce rang.

> **Exemple.** Les $25$ notes, cumuls $2$ ; $7$ ; $13$ ; $20$ ; $23$ ; $25$.
> $Q_1$ : $\frac{25}{4} = 6{,}25$ → rang $7$ → premier cumul $\geqslant 7$ : celui de la
> note $8$, d'où $\boxed{Q_1 = 8}$.
> $Q_3$ : $\frac{3\times 25}{4} = 18{,}75$ → rang $19$ → premier cumul $\geqslant 19$ :
> celui de la note $12$, d'où $\boxed{Q_3 = 12}$.
> **Vérification** : $7$ élèves sur $25$ ont $\leqslant 8$, soit $28\ \%\geqslant25\ \%$
> ✓ ; avec la note juste en dessous, $6$, on n'aurait que $2$ élèves, soit $8\ \%$ ✗.
> $8$ est bien la **plus petite** valeur qui convient.

> ⚠️ **Ne confonds jamais le rang et la valeur.** $6{,}25$ est un rang — une place dans
> la file — pas une note. Personne n'a eu $6{,}25$ : la réponse est $8$.

**Interpréter.** Au moins un quart de la classe a eu $8$ ou moins ; au moins trois
quarts ont eu $12$ ou moins, donc **au plus un quart** a dépassé $12$. Entre $Q_1$ et
$Q_3$ se trouve la **moitié centrale** de la classe.

---

## 5. Si la série est donnée par un diagramme en barres

Un diagramme en barres est un tableau d'effectifs dessiné : **la hauteur d'une barre est
l'effectif** de la valeur écrite dessous. Recopie un tableau, ajoute la ligne des cumuls,
applique les méthodes — ne compte jamais sur le dessin.

> **Exemple.** Hauteurs $4$ ; $5$ ; $3$ ; $6$ ; $2$ pour les valeurs $1$ à $5$ : total
> $= 20$, cumuls $4$ ; $9$ ; $12$ ; $18$ ; $20$. Médiane : rangs $10$ et $11$, tous deux
> sur la valeur $3$. $Q_1$ : $\frac{20}{4} = 5$ → rang $5$ → valeur $2$. $Q_3$ :
> $\frac{3\times 20}{4} = 15$ → rang $15$ → valeur $4$.

> ⚠️ **L'effectif total n'est écrit nulle part** : additionne toutes les hauteurs. Et
> les quartiles se lisent sur les **valeurs** de l'axe horizontal, jamais sur les hauteurs.

---

## 6. Les cinq valeurs de position et la boite à moustaches

Cinq nombres, dans l'ordre, résument toute la série :

$$\text{minimum} \quad Q_1 \quad \text{médiane} \quad Q_3 \quad \text{maximum}$$

**Construire.** ① Trace un **axe gradué régulier** — c'est lui qui porte l'échelle.
② Dessine la **boite**, de $Q_1$ à $Q_3$. ③ Trace le trait de la **médiane** dans la
boite. ④ Prolonge par deux **moustaches**, jusqu'au minimum et jusqu'au maximum.

> **Exemple.** Les $25$ notes : min $6$, $Q_1 = 8$, médiane $10$, $Q_3 = 12$, max $16$.
> ```
>   6      8     10     12                16
>   |------[======|======]----------------|
>   +--+--+--+--+--+--+--+--+--+--+--+--+--+
>   4  5  6  7  8  9 10 11 12 13 14 15 16
> ```

**Lire.** Les bouts des moustaches donnent le minimum et le maximum, donc la longueur
totale donne l'**étendue** ($16-6 = 10$). Les bords de la boite donnent $Q_1$ et $Q_3$,
donc sa **largeur** vaut $Q_3-Q_1$ ($4$ ici) : c'est là que tient la moitié centrale.
Le trait intérieur est la **médiane**.

> ⚠️ **Ni la moyenne ni les effectifs n'apparaissent** sur une boite : impossible d'y
> deviner la moyenne, ou de savoir si la série compte $20$ ou $2\,000$ données. C'est
> justement ce qui permet de comparer deux séries de tailles très différentes.

---

## 7. Utiliser une boite pour comparer et interpréter

Deux boites tracées sur **le même axe** se comparent d'un coup d'œil.

> **Exemple.** Deux classes, même médiane ($10$) et même étendue ($12$). La boite de A
> est large de $2$, celle de B de $9$ : **la moitié centrale de A est resserrée autour
> de $10$, celle de B est éclatée.** A est homogène, B ne l'est pas.
>
> | | min | $Q_1$ | médiane | $Q_3$ | max |
> |---|---|---|---|---|---|
> | **A** | $4$ | $9$ | $10$ | $11$ | $16$ |
> | **B** | $4$ | $6$ | $10$ | $15$ | $16$ |

Conclure « même médiane, donc les deux classes se valent » est une faute
d'interprétation : l'étendue ne regarde que les **deux extrêmes**, la boite décrit le
**cœur** de la série. Le niveau général se lit sur la médiane, l'homogénéité sur la
**largeur de la boite**, les cas isolés sur la longueur des **moustaches**.

> ⚠️ **Une longue moustache ne veut pas dire « beaucoup d'élèves ».** Elle peut n'être
> due qu'à **une seule** donnée extrême : un quart des données au plus s'y trouve.

---

## 8. Au tableur

`=MOYENNE(A1:A20)` · `=MEDIANE(A1:A20)` · `=MAX(A1:A20)-MIN(A1:A20)` pour l'étendue.
Le tableur est surtout précieux ici pour les **cumuls** : une colonne d'additions
successives recopiée vers le bas se fait en une seconde et ne se trompe pas.

> ⚠️ **Méfie-toi des fonctions de quartile du tableur** : elles ne suivent pas la règle
> apprise ici et peuvent renvoyer un nombre qui n'est même pas une valeur de la série.
> Pour $Q_1$ et $Q_3$, applique la méthode du § 4.

---

## 9. Les pièges de calcul

| Situation | Le piège | Le bon geste |
|---|---|---|
| Effectifs cumulés | recopier les effectifs sans les additionner | cumul précédent $+$ effectif |
| Rang non entier | répondre $6{,}25$ | arrondir **au-dessus**, puis lire la **valeur** |
| Rang entier | arrondir quand même au-dessus | si $\frac{n}{4}$ est entier, on le **garde** |
| Médiane, $n$ pair | garder la valeur de gauche | **demi-somme** des deux valeurs centrales |
| Quartiles | les chercher sur la ligne des **effectifs** | ils sont sur la ligne des **valeurs** |
| Boite à moustaches | y placer la moyenne, ou dessiner sans axe | trait $=$ **médiane** ; axe gradué obligatoire |

---

## 10. À retenir absolument

| | |
|---|---|
| Effectif cumulé croissant | nombre de données $\leqslant$ à la valeur ; le dernier $=$ effectif total |
| Médiane, $n$ impair | valeur de rang $\dfrac{n+1}{2}$ |
| Médiane, $n$ pair | demi-somme des valeurs de rangs $\dfrac{n}{2}$ et $\dfrac{n}{2}+1$ |
| $Q_1$ | plus petite valeur avec **au moins $25\ \%$** des données en dessous ou égales |
| $Q_3$ | plus petite valeur avec **au moins $75\ \%$** des données en dessous ou égales |
| Rangs des quartiles | $\dfrac{n}{4}$ et $\dfrac{3n}{4}$, arrondis **au-dessus** si besoin |
| Valeurs de position | min · $Q_1$ · médiane · $Q_3$ · max |
| Boite à moustaches | boite $Q_1 \to Q_3$, trait à la médiane, moustaches aux extrêmes |
| Largeur de la boite | la **moitié centrale** de la série |
| Absents de la boite | la moyenne et les effectifs |

---

## 11. Les erreurs qui coûtent des points

1. **Donner le rang au lieu de la valeur.** « $Q_1 = 6{,}25$ » n'a aucun sens : $6{,}25$
   est une place dans la file, la réponse est la note qui l'occupe.
2. **Arrondir un rang déjà entier.** Si $\frac{n}{4} = 5$ tout rond, le rang est $5$.
3. **Lire les quartiles sur la ligne des effectifs.** Même erreur qu'avec l'étendue en
   4e : une valeur n'est pas un effectif.
4. **Oublier de cumuler**, ou cumuler en partant de la droite : les effectifs cumulés
   **croissants** partent de la plus petite valeur.
5. **Prendre la valeur de gauche quand $n$ est pair** : entre $1$ et $2$, c'est $1{,}5$.
6. **Tracer une boite sans axe gradué**, ou en espaçant les cinq nombres régulièrement :
   la position sur l'axe est toute l'information.
7. **Conclure « même médiane, donc mêmes séries ».** Regarde la largeur des boites.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt — chapeau du thème « Organisation et gestion
de données et probabilités » l. 861-885 (partie Statistiques : l. 861-872) ; section « Troisième » /
« Statistiques » l. 947-958 (titres 947-948, automatismes 949-952, objectifs 953-958).

CHAPITRE CRÉÉ LE 2026-08-12, premier du niveau 3e. Fait suite aux fiches 5e-math-statistiques et
4e-math-statistiques, citées en prérequis et NON répétées.

COUVERTURE, item par item — tout le contenu de la section est traité, rien d'autre.
- Automatismes (l. 950-952) → § 1, à l'état de rappel : acquis de 4e.
- « Calculer des effectifs cumulés croissants » (l. 954) → § 2.
- « Donner les quartiles et la médiane d'une série donnée sous forme de tableau d'effectifs ou de
  diagramme en barres » (l. 955) → § 3 (médiane), § 4 (quartiles), § 5 (les DEUX formes citées).
- « Construire et utiliser des boites à moustache pour représenter les valeurs de position »
  (l. 956) → § 6 (construire) et § 7 (utiliser) ; « valeurs de position » repris tel quel.
- « Comprendre et interpréter des données statistiques » (l. 957) → § 7, adossé au chapeau
  (« analyser et comparer », « esprit critique », l. 863-867).
- « Utiliser le tableur… » (l. 958) → § 8, court (formules déjà vues en 4e), alors que le chapeau
  le veut « aussi fréquemment que possible » (l. 871-872) : un professeur voudra peut-être plus.
APPORTS PROPRES À CETTE FICHE : effectifs cumulés, quartiles, boite à moustaches, et médiane lue
dans un TABLEAU ou un DIAGRAMME — la 4e la limitait aux données brutes (sa note n° 2 ; l. 928).

════ LES DEUX QUESTIONS LAISSÉES OUVERTES PAR LA 4e — ARBITRAGE RENDU ICI ════

1. DEMI-SOMME POUR UN EFFECTIF PAIR (question n° 1 de la 4e) → CONVENTION MAINTENUE, ET DÉSORMAIS
   NOMMÉE COMME TELLE À L'ÉLÈVE (§ 3). Motif tiré du texte : la 4e écrivait « déterminer UNE
   médiane » (l. 928, indéfini), ce qui laissait le choix ouvert ; la 3e écrit « les quartiles et
   LA médiane » (l. 955, défini) et exige une boite à moustaches — dessin qui réclame UN trait,
   donc UN nombre unique. La fiche 4e peut rester en l'état ; pour aligner les deux, y ajouter la
   même phrase suffit.
   ⚠️ EFFET DE BORD À TRANCHER : Q1 et Q3 sont définis par une règle de position, qui rend toujours
   une valeur de la série, alors que la médiane par demi-somme peut ne pas en être une (§ 3,
   exemple à 1,5). L'asymétrie est assumée et signalée à l'élève. Une autre progression cohérente
   définirait la médiane comme « deuxième quartile » avec la même règle de position — ce n'est pas
   l'usage attendu au brevet, d'où le choix retenu. À CONFIRMER.

2. MOYENNE À COEFFICIENTS, « devoir coefficient 3 » (question n° 3 de la 4e) → NON TRAITÉE, NI EN
   4e NI EN 3e. Motifs tirés du texte : la 3e ne mentionne la moyenne que comme automatisme
   (l. 950) et au tableur (l. 958), aucun objectif d'apprentissage ne l'étend ; et le seul endroit
   du cycle 4 où figure le mot « pondérée » (l. 924-925, 4e) lie les pondérations aux formes de
   présentation citées — données brutes, tableau, diagramme en barres — donc à des EFFECTIFS. La
   moyenne à coefficients n'est nulle part au programme du cycle 4 : le périmètre de la fiche 4e
   est confirmé et sa question n° 3 peut être close.
   ⚠️ RÉSERVE : les élèves de 3e lisent « coefficient » sur leur bulletin toute l'année. Un
   professeur peut vouloir deux lignes (« un coefficient se traite comme un effectif ») quelque
   part dans le parcours. Je ne les ai pas écrites — la consigne fait du programme la seule source.
   Décision à prendre au niveau du PARCOURS, pas d'une fiche.

════ AUTRES POINTS À CONFRONTER AU PDF PAR UN PROFESSEUR ════

3. CONVENTION DE CALCUL DES QUARTILES — le point le plus sensible. Le texte dit « donner les
   quartiles » (l. 955) sans les définir. Règle retenue : plus petite valeur telle qu'au moins un
   quart (resp. trois quarts) des données lui soient inférieures ou égales, mise en œuvre par le
   rang n/4 (resp. 3n/4) arrondi au-dessus s'il n'est pas entier, gardé tel quel s'il l'est.
   D'autres conventions (interpolation) donnent d'autres résultats. À VALIDER EN PRIORITÉ : les
   questions 4, 5 et 7 du QCM en dépendent.
4. ÉCART INTERQUARTILE : le texte ne le nomme pas. La fiche parle de « largeur de la boite » et
   écrit Q3 − Q1 sans en faire un indicateur encadré (§ 6, § 7). Volontaire — « utiliser » une
   boite suppose de lire cette largeur, mais le mot n'est pas introduit.
5. ORTHOGRAPHE : le BO écrit « boites à moustache » (l. 956) — « boite » sans accent circonflexe
   (rectifiée, conservée) et « moustache » au singulier ; la fiche met le pluriel, forme courante.
   Suivre le texte à la lettre, ou l'usage ?
6. LE SCHÉMA ASCII du § 6 est un pis-aller : il rend mal hors police à chasse fixe. À remplacer par
   une image ou un SVG à l'intégration — c'est LE dessin que l'élève doit savoir reproduire.
7. DATE DU BO : l'en-tête porte « BO du 5 mars 2026 » (chaine imposée, identique aux fiches 5e et
   4e) alors que ETAT.md attribue au cycle 4 le « BO du 2 avril 2026 ». Incohérence de dépôt, à
   trancher une fois pour toutes et à propager.
8. FORMULES TABLEUR en français, à aligner sur l'outil de la classe (comme en 4e). L'avertissement
   du § 8 sur les fonctions de quartile est délibérément non technique : vérifier qu'il ne dit rien
   de faux pour le tableur réellement utilisé en classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
