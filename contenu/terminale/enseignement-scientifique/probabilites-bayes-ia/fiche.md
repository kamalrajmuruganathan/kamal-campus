---
id: tale-esc-probabilites-bayes-ia
titre: "Probabilités, Bayes et intelligence artificielle"
voie: generale
niveau: terminale
parcours: enseignement-scientifique
matiere: mathematiques
programme: "Enseignement scientifique — terminale générale, BO du 22 janvier 2019 (version aménagée 2023)"
theme: "Une histoire du vivant"
duree_lecture_min: 16
prerequis:
  - Probabilités, événements et arbres pondérés (Première)
  - Probabilité conditionnelle (Terminale, enseignement scientifique)
  - Fréquence et fluctuation d'échantillonnage (Seconde)
  - Proportions et pourcentages (Seconde)
statut: brouillon
relu_par: null
---

# Probabilités, Bayes et intelligence artificielle

> Une intelligence artificielle qui « lit » une radio, un test qui dépiste une
> maladie, un sondage qui annonce un résultat à $\pm 2$ points : derrière ces trois
> objets, les mêmes outils. Tout part de **données numérisées**, tout se juge avec
> des **probabilités**. Ce chapitre relie le monde des données massives au
> raisonnement de **Bayes** et à l'**estimation** d'une proportion inconnue.

---

## 1. La numérisation des données

Un ordinateur ne manipule que deux symboles, $0$ et $1$ : le **bit** (*binary
digit*). Huit bits forment un **octet**, capable de coder $2^8 = 256$ valeurs.
Numériser, c'est **transformer une information en une suite de bits**.

| Type | Comment on numérise | Exemple de codage |
|---|---|---|
| **Texte** | un nombre (donc des bits) par caractère | ASCII : `A` $= 65$ ; Unicode pour les accents et emojis |
| **Image** | une grille de **pixels**, chacun décrit par ses composantes de couleur | RVB : $3$ octets/pixel, chaque canal de $0$ à $255$ |
| **Son** | on relève l'amplitude à intervalles réguliers (**échantillonnage**) | CD audio : $44\,100$ mesures par seconde, sur $16$ bits |

> **Exemple (poids d'une image).** Une photo de $1\,000 \times 800$ pixels en RVB
> pèse $1\,000 \times 800 \times 3 = 2\,400\,000$ octets, soit environ $2{,}4$ Mo
> **avant compression**.

> **Ce qu'il faut comprendre.** La numérisation est toujours une
> **approximation** : on remplace un signal continu (le son, la lumière) par un
> nombre fini de mesures. Plus l'échantillonnage est fin (plus de pixels, plus de
> mesures par seconde), plus le fichier est fidèle... et **lourd**.

Ordres de grandeur à connaître : $1$ ko $= 10^3$ octets, $1$ Mo $= 10^6$,
$1$ Go $= 10^9$, $1$ To $= 10^{12}$.

---

## 2. Données massives et intelligence artificielle

Les **données massives** (*big data*) désignent des ensembles de données trop
volumineux pour être traités « à la main ». On les caractérise par trois **V** :

- **Volume** : des téraoctets, voire des pétaoctets ;
- **Vélocité** : elles arrivent en continu (capteurs, réseaux sociaux) ;
- **Variété** : textes, images, sons, positions GPS mélangés.

Une **intelligence artificielle** par apprentissage s'**entraîne** sur ces
données : on lui montre des milliers d'exemples déjà étiquetés (« ceci est un
chat », « cette tumeur est bénigne ») et elle en extrait des régularités
statistiques pour **prédire** sur de nouveaux cas.

> **Idée clé.** Une IA d'apprentissage n'applique pas des règles écrites par un
> humain : elle **reproduit ce qu'elle a vu dans ses données**. Sa qualité ne
> dépasse donc jamais celle des données qui l'ont formée — d'où l'importance des
> deux sections suivantes.

---

## 3. Corrélation n'est pas causalité

Deux grandeurs sont **corrélées** quand elles varient ensemble : quand l'une
augmente, l'autre augmente (corrélation positive) ou diminue (corrélation
négative). On mesure cette liaison par un **coefficient de corrélation** compris
entre $-1$ et $1$.

$$\boxed{\text{corrélation} \neq \text{causalité}}$$

Une corrélation forte **ne prouve pas** qu'une grandeur est la **cause** de
l'autre. Trois explications concurrentes sont toujours possibles :

1. **le hasard** (corrélation fallacieuse sur peu de données) ;
2. **la causalité inverse** ($B$ cause $A$ et non l'inverse) ;
3. un **facteur de confusion** $C$ qui influe sur $A$ **et** sur $B$.

> **Exemple.** Les ventes de glaces et le nombre de noyades sont fortement
> corrélées. La glace ne cause pas la noyade : le **facteur de confusion** est la
> **chaleur estivale**, qui augmente les deux à la fois.

> ⚠️ Une IA repère très bien les corrélations, mais elle **ne comprend pas les
> causes**. Elle peut donc « apprendre » un lien trompeur si les données le
> suggèrent.

Seule une **expérience contrôlée** (comparaison d'un groupe test et d'un groupe
témoin tirés au hasard) permet d'établir une véritable causalité.

---

## 4. Les biais dans les données

Un **biais** est une distorsion systématique des données par rapport à la réalité
que l'on veut décrire. Ce n'est **pas** le hasard : le hasard se corrige en
augmentant la taille de l'échantillon, **un biais, non**.

| Biais | Ce qui se passe |
|---|---|
| **d'échantillonnage** | l'échantillon ne représente pas la population (sondage en ligne = internautes) |
| **de sélection** | on ne garde que certains cas (patients guéris, clients satisfaits) |
| **historique** | les données passées portent les inégalités du passé |

> **Exemple.** Une IA de recrutement entraînée sur les embauches passées d'une
> entreprise majoritairement masculine « apprend » à défavoriser les
> candidatures féminines : elle **reproduit un biais historique** présent dans ses
> données. Le problème n'est pas l'algorithme, ce sont **les données**.

> **À retenir.** *Garbage in, garbage out* : des données biaisées produisent une IA
> biaisée, aussi sophistiquée soit-elle.

---

## 5. Probabilité conditionnelle et arbre pondéré

La **probabilité conditionnelle** de $B$ **sachant** $A$ mesure la probabilité de
$B$ quand on sait déjà $A$ réalisé. On la note $P_A(B)$ :

$$\boxed{P_A(B) = \frac{P(A \cap B)}{P(A)}} \qquad P(A) \neq 0$$

On en tire la probabilité d'une intersection, qui fait « descendre » un arbre :

$$\boxed{P(A \cap B) = P(A) \times P_A(B)}$$

Un **arbre pondéré** organise l'expérience en étapes. Trois règles :

1. **le long d'un chemin, on multiplie** les probabilités des branches ;
2. une branche de 2ᵉ niveau est une **probabilité conditionnelle** ;
3. pour un événement atteint par plusieurs chemins, **on additionne** les chemins
   (formule des **probabilités totales**).

Pour un événement $A$ et son contraire $\overline{A}$, qui forment toujours une
partition de l'univers :

$$\boxed{P(B) = P(A)\,P_A(B) + P(\overline{A})\,P_{\overline{A}}(B)}$$

> **Exemple.** Une maladie touche $1\,\%$ de la population. Un test est positif
> chez $99\,\%$ des malades et chez $2\,\%$ des non-malades. La probabilité qu'un
> individu pris au hasard soit testé positif est
> $$P(T^+) = 0{,}01 \times 0{,}99 + 0{,}99 \times 0{,}02 = 0{,}0099 + 0{,}0198 = 0{,}0297.$$

---

## 6. La formule de Bayes

L'arbre donne facilement $P_M(T^+)$ (positif **sachant** malade). Bayes répond à la
question **inverse** : le test est positif, quelle est la probabilité d'être
**réellement** malade, c'est-à-dire $P_{T^+}(M)$ ?

$$\boxed{P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)\,P_A(B)}{P(B)}}$$

où $P(B)$ se calcule au besoin par la formule des probabilités totales. **On descend
l'arbre pour obtenir $P(B)$, puis on remonte.**

> ⚠️ **L'erreur reine.** $P_A(B)$ et $P_B(A)$ ne sont **pas** égaux. « Positif
> sachant malade » (une qualité du test) et « malade sachant positif » (ce qui
> intéresse le patient) sont deux nombres différents. C'est exactement ce que Bayes
> corrige.

---

## 7. Application phare : le diagnostic médical

C'est le cœur du chapitre. Un test de dépistage se décrit par deux nombres :

| Grandeur | Définition | Formule |
|---|---|---|
| **Sensibilité** $\text{Se}$ | proportion de **malades** détectés positifs | $\text{Se} = P_M(T^+)$ |
| **Spécificité** $\text{Sp}$ | proportion de **sains** détectés négatifs | $\text{Sp} = P_{\overline{M}}(T^-)$ |

Elles se lisent aux **branches** de l'arbre. On en déduit les erreurs du test :

- un **faux positif** : test positif alors qu'on est sain, de probabilité
  $P_{\overline{M}}(T^+) = 1 - \text{Sp}$ ;
- un **faux négatif** : test négatif alors qu'on est malade, de probabilité
  $P_M(T^-) = 1 - \text{Se}$.

Ce qui intéresse vraiment le patient, c'est la **valeur prédictive positive** :

$$\boxed{\text{VPP} = P_{T^+}(M) = \frac{P(M)\,\text{Se}}{P(M)\,\text{Se} + P(\overline{M})\,(1-\text{Sp})}}$$

### Le paradoxe des tests rares

> **Exemple complet.** Maladie rare : $P(M) = 0{,}01$. Test **excellent** :
> $\text{Se} = 0{,}99$ et $\text{Sp} = 0{,}98$ (donc $2\,\%$ de faux positifs).
> L'arbre pondéré :
>
> - chemin malade $\to$ positif : $0{,}01 \times 0{,}99 = 0{,}0099$ ;
> - chemin sain $\to$ positif : $0{,}99 \times 0{,}02 = 0{,}0198$.
>
> D'où $P(T^+) = 0{,}0099 + 0{,}0198 = 0{,}0297$, puis
> $$\text{VPP} = \frac{0{,}0099}{0{,}0297} = \frac{1}{3} \approx 0{,}33.$$
>
> **Un test positif ne signifie que $33\,\%$ de chances d'être malade**, malgré un
> test à $99\,\%$ de sensibilité !

Pourquoi ? La maladie est si rare que les **vrais positifs** ($99$ malades sur
$10\,000$ personnes) sont **noyés** sous les **faux positifs** ($198$ sains testés
positifs). Sur $10\,000$ personnes : $99$ vrais positifs contre $198$ faux
positifs — deux fois plus de faux que de vrais.

> **Conséquence.** Sur une maladie rare, on ne dépiste pas la population entière :
> on cible les personnes à risque, chez qui $P(M)$ est plus élevée, ce qui remonte
> la VPP. C'est le raisonnement de santé publique derrière tout dépistage.

---

## 8. Estimation par intervalle de confiance

On ne connaît presque jamais une proportion $p$ dans une population entière ; on
l'**estime** à partir d'un **échantillon**. Sur un échantillon de taille $n$, on
mesure la **fréquence observée** $f$. Un **intervalle de confiance au niveau
$95\,\%$** est alors :

$$\boxed{\left[\, f - \frac{1}{\sqrt{n}} \;;\; f + \frac{1}{\sqrt{n}} \,\right]}$$

C'est un intervalle qui contient la vraie proportion $p$ dans **environ $95\,\%$
des échantillons**. Son **amplitude** vaut $\dfrac{2}{\sqrt{n}}$.

> **Exemple.** Un sondage sur $n = 1\,000$ personnes donne $f = 52\,\%$ d'intentions
> de vote. L'intervalle de confiance est
> $$\left[0{,}52 - \tfrac{1}{\sqrt{1000}} \;;\; 0{,}52 + \tfrac{1}{\sqrt{1000}}\right]
> \approx [0{,}52 - 0{,}032 \;;\; 0{,}52 + 0{,}032] = [0{,}488 \;;\; 0{,}552].$$
> Comme l'intervalle contient $0{,}50$, on **ne peut pas** conclure que ce candidat
> l'emportera : la « victoire » est dans la marge d'erreur.

> **La taille d'échantillon commande la précision.** Comme l'amplitude est
> $\dfrac{2}{\sqrt{n}}$, il faut **multiplier $n$ par $4$** pour diviser la marge
> d'erreur par $2$ (car $\sqrt{4} = 2$). La précision coûte cher.

---

## 9. Capture – marquage – recapture

Comment compter des poissons dans un lac sans les compter tous ? On **estime** un
effectif total $N$ inconnu :

1. on **capture** et on **marque** $M$ individus, qu'on relâche ;
2. plus tard, on **recapture** un échantillon de taille $n$ ;
3. on compte les marqués parmi eux : $m$.

La proportion de marqués dans la recapture, $f = \dfrac{m}{n}$, **estime** la
proportion de marqués dans la population, $\dfrac{M}{N}$. En égalant :

$$\frac{m}{n} \approx \frac{M}{N} \quad\Longrightarrow\quad \boxed{N \approx \frac{M \times n}{m}}$$

> **Exemple.** On marque $M = 60$ poissons. À la recapture, sur $n = 50$ poissons,
> $m = 15$ portent la marque. Alors $f = \dfrac{15}{50} = 0{,}3$ et
> $$N \approx \frac{60 \times 50}{15} = 200 \text{ poissons}.$$
> On peut encadrer $f$ par un intervalle de confiance
> ($\left[0{,}3 - \tfrac{1}{\sqrt{50}} \,;\, 0{,}3 + \tfrac{1}{\sqrt{50}}\right]
> \approx [0{,}159 \,;\, 0{,}441]$), puis en déduire une fourchette pour $N$ :
> de $\dfrac{60}{0{,}441} \approx 136$ à $\dfrac{60}{0{,}159} \approx 377$ poissons.

> **Hypothèse cachée.** La méthode suppose que les marqués **se mélangent** à la
> population et que celle-ci **ne change pas** entre les deux captures. Sinon,
> l'estimation est biaisée — encore un biais.

---

## 10. Tableau récapitulatif

| Objet | Formule / idée clé |
|---|---|
| Numérisation | tout devient des bits ; $1$ octet $= 8$ bits $= 2^8 = 256$ valeurs |
| Poids d'une image | largeur $\times$ hauteur $\times$ octets par pixel |
| Corrélation vs causalité | corréler $\neq$ causer ; méfiance : facteur de confusion |
| Biais | distorsion **systématique** ; ne se corrige pas en augmentant $n$ |
| Conditionnelle | $P_A(B) = \dfrac{P(A \cap B)}{P(A)}$ |
| Probabilités totales | $P(B) = P(A)P_A(B) + P(\overline{A})P_{\overline{A}}(B)$ |
| Formule de Bayes | $P_B(A) = \dfrac{P(A)\,P_A(B)}{P(B)}$ |
| Sensibilité | $\text{Se} = P_M(T^+)$ (malades bien détectés) |
| Spécificité | $\text{Sp} = P_{\overline{M}}(T^-)$ (sains bien détectés) |
| Faux positif / négatif | $1 - \text{Sp}$ / $1 - \text{Se}$ |
| VPP | $P_{T^+}(M) = \dfrac{P(M)\,\text{Se}}{P(T^+)}$ |
| Intervalle de confiance $95\,\%$ | $\left[f - \tfrac{1}{\sqrt{n}} \,;\, f + \tfrac{1}{\sqrt{n}}\right]$, amplitude $\tfrac{2}{\sqrt{n}}$ |
| Capture-recapture | $N \approx \dfrac{M \times n}{m}$ |

---

## 11. Les erreurs qui coûtent des points

1. **Inverser le conditionnement.** $P_{T^+}(M) \neq P_M(T^+)$. « Malade sachant
   positif » (la VPP) n'est **pas** la sensibilité « positif sachant malade ».
   C'est l'erreur reine, celle que Bayes existe pour corriger.
2. **Confondre corrélation et causalité.** Deux courbes qui montent ensemble ne
   prouvent aucun lien de cause à effet : cherche le **facteur de confusion**.
3. **Croire qu'un grand jeu de données efface les biais.** Le hasard se dilue avec
   $n$, un **biais systématique non** : $1$ million de sondages en ligne restent
   biaisés vers les internautes.
4. **Oublier de pondérer par $P(M)$ dans la VPP.** La rareté de la maladie fait
   chuter la VPP même avec un excellent test : sans le terme $P(M)\,\text{Se}$ au
   numérateur et $P(\overline{M})(1-\text{Sp})$ au dénominateur, le résultat est
   faux.
5. **Se tromper de $1/\sqrt{n}$ dans l'intervalle.** L'amplitude est
   $\dfrac{2}{\sqrt{n}}$ (deux fois $1/\sqrt{n}$), pas $1/n$ ni $2/n$. Diviser la
   marge par $2$ demande de multiplier $n$ par $4$.
6. **Inverser $M$ et $m$ dans la recapture.** L'effectif estimé est
   $N \approx \dfrac{M \times n}{m}$ : le **petit** nombre de marqués recapturés
   ($m$) est au **dénominateur**. L'inverser donne un effectif absurde.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-enseignement-scientifique.txt,
section « === Probabilités, Bayes et intelligence artificielle (mathématiques) === »
(lignes 50-57), rattachée au Thème 3 « Une histoire du vivant » (3.5, et 3.1 pour
l'intervalle de confiance). Programme d'enseignement scientifique, terminale
générale, BO du 22 janvier 2019 (version aménagée 2023).

⚠️ PROVENANCE : le fichier .txt du programme a été extrait des PDF officiels
education.gouv.fr / eduscol via WebFetch. Cette extraction doit être CONFRONTÉE au
PDF officiel du BO avant publication.

Contenus du programme couverts :
- Numérisation des données texte/image/son ; données massives ; corrélation et
  causalité ; biais dans les données (§1-4).
- Probabilités conditionnelles ; formule de Bayes ; application au diagnostic,
  faux positifs/négatifs (§5-7). Sensibilité, spécificité, VPP et paradoxe des
  tests rares développés via arbre pondéré.
- Estimation : fréquence, intervalle de confiance (échantillonnage) et
  capture-marquage-recapture (§8-9).

CHOIX DE PÉRIMÈTRE / À SOUMETTRE AU RELECTEUR :
- Intervalle de confiance retenu : la forme simplifiée [f - 1/√n ; f + 1/√n] au
  niveau 95 %, cohérente avec l'enseignement scientifique et le programme de
  Seconde. Vérifier que c'est bien la formule attendue (et non l'intervalle
  asymptotique 1,96·√(f(1-f)/n) réservé à la spécialité).
- La condition de validité usuelle (n ≥ 30, nf ≥ 5, n(1-f) ≥ 5) n'a pas été
  détaillée pour ne pas alourdir ; à ajouter si le relecteur le souhaite.
- Notation Se / Sp introduite bien qu'elle ne figure pas littéralement dans
  l'intitulé : elle structure le diagnostic médical demandé (faux positifs/négatifs)
  et est d'usage courant. À valider.
- Le coefficient de corrélation est cité sans être calculé (hors capacités
  attendues en ES) ; l'accent est mis sur l'interprétation corrélation/causalité.

VÉRIFICATIONS NUMÉRIQUES (refaites à la main, cohérentes) :
- Bayes/VPP : P(T+) = 0,01·0,99 + 0,99·0,02 = 0,0099 + 0,0198 = 0,0297 ;
  VPP = 0,0099/0,0297 = 1/3 ≈ 0,33. Comptage sur 10 000 : 99 vrais positifs,
  198 faux positifs — cohérent.
- IC sondage : 1/√1000 ≈ 0,0316 → [0,488 ; 0,552], contient 0,50.
- Capture-recapture : N ≈ 60·50/15 = 200 ; 1/√50 ≈ 0,1414 → f ∈ [0,159 ; 0,441] ;
  N ∈ [60/0,441 ; 60/0,159] ≈ [136 ; 377].

Rédaction originale à partir du seul programme officiel, aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
