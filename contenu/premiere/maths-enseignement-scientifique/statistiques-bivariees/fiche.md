---
id: 1es-math-statistiques-bivariees
titre: "Statistiques à deux caractères"
voie: generale
niveau: premiere
parcours: maths-enseignement-scientifique
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques intégrées à l'enseignement scientifique"
duree_lecture_min: 13
prerequis:
  - Statistiques à un caractère (Seconde)
  - Fonctions affines (Seconde)
statut: brouillon
relu_par: null
---

# Statistiques à deux caractères

> On ne regarde plus une seule série, mais **deux caractères ensemble** : y a-t-il un
> lien entre la taille et la pointure ? entre l'année et la température moyenne ?
> C'est une première approche des bases de données — et le terrain où l'on confond
> le plus souvent lien et cause.

---

## 1. Deux caractères qualitatifs — le tableau croisé

Un **tableau croisé d'effectifs** répartit une population selon deux caractères
qualitatifs simultanément.

|  | Sport | Pas de sport | **Total** |
|---|---|---|---|
| Seconde | 180 | 120 | **300** |
| Première | 40 | 60 | **100** |
| **Total** | **220** | **180** | **400** |

### Les trois pourcentages d'une même case

La case « Seconde et sport » (180 élèves) permet **trois** lectures différentes :

| Base | Calcul | Lecture |
|---|---|---|
| Total général | $\frac{180}{400} = 45\,\%$ | des élèves sont en Seconde **et** font du sport |
| Total de la ligne | $\frac{180}{300} = 60\,\%$ | **des Secondes** font du sport |
| Total de la colonne | $\frac{180}{220} \approx 82\,\%$ | **des sportifs** sont en Seconde |

> ⚠️ Ces trois nombres décrivent la même case et n'ont pas le même sens. Toute
> question doit préciser la base, et toute réponse doit la rappeler.

### Représentations graphiques

Diagrammes en **barres** (groupées ou empilées) ou diagrammes **circulaires**, selon
qu'on veut comparer des effectifs ou des répartitions.

---

## 2. Deux caractères quantitatifs — le nuage de points

Chaque individu devient un **point** de coordonnées $(x_i\,;y_i)$. L'ensemble forme
un **nuage de points**.

On y observe :

- une **forme** — les points s'alignent-ils ? suivent-ils une courbe ?
- un **sens** — quand $x$ augmente, $y$ augmente-t-il aussi ?
- une **dispersion** — les points sont-ils resserrés autour d'une tendance ?

---

## 3. Le point moyen

$$\boxed{\mathrm{G}\left(\bar{x}\,;\bar{y}\right)}$$

où $\bar x$ et $\bar y$ sont les moyennes de chaque caractère. Le point moyen est le
« centre de gravité » du nuage — **toute droite d'ajustement doit y passer**.

---

## 4. Ajustement affine

Quand le nuage a une allure rectiligne, on l'approche par une **droite d'ajustement**
$y = ax + b$.

Le programme propose plusieurs méthodes :

| Méthode | Principe |
|---|---|
| **Au jugé** | on trace la droite qui semble le mieux suivre le nuage |
| **Droite de Mayer** | on sépare le nuage en deux moitiés, on relie leurs points moyens |
| **Moindres carrés** | calculée par la calculatrice ou le tableur |

> **La droite de Mayer, en pratique.** On ordonne les points selon $x$, on coupe en
> deux groupes de même effectif, on calcule le point moyen $\mathrm{G}_1$ du premier
> et $\mathrm{G}_2$ du second. La droite $(\mathrm{G}_1\mathrm{G}_2)$ est la droite de
> Mayer — et elle passe automatiquement par le point moyen $\mathrm{G}$ du nuage entier.

---

## 5. Interpoler et extrapoler

| | Sens | Fiabilité |
|---|---|---|
| **Interpoler** | estimer **à l'intérieur** de l'intervalle des données | raisonnable |
| **Extrapoler** | estimer **au-delà** des données observées | ⚠️ risquée |

> **Pourquoi l'extrapolation est risquée.** L'ajustement décrit ce qu'on a observé.
> Rien ne garantit que la tendance se prolonge : une croissance linéaire finit
> toujours par buter sur une limite physique. Extrapoler une courbe de température
> sur mille ans, ou une croissance de population à l'infini, n'a aucun sens.

---

## 6. Corrélation n'est pas causalité

C'est le point le plus important du chapitre, et le programme le vise explicitement
par le développement de l'esprit critique.

Deux caractères peuvent varier ensemble sans que l'un cause l'autre :

| Situation | Explication réelle |
|---|---|
| Ventes de glaces ↑ et noyades ↑ | une **cause commune** : la chaleur |
| Nombre de pompiers ↑ et dégâts ↑ | la **taille de l'incendie** cause les deux |
| Deux courbes qui montent depuis 1950 | simple **coïncidence** de tendance |

> **Les trois explications possibles d'une corrélation** : un lien de cause à effet,
> une cause commune (variable cachée), ou le hasard. Un nuage de points, à lui seul,
> ne permet jamais de trancher.

---

## 7. À retenir absolument

| | |
|---|---|
| Tableau croisé | trois pourcentages possibles par case |
| Nuage de points | un individu = un point $(x_i\,;y_i)$ |
| Point moyen | $\mathrm{G}(\bar x\,;\bar y)$, la droite d'ajustement y passe |
| Ajustement affine | $y = ax + b$ |
| Interpoler | à l'intérieur des données — raisonnable |
| Extrapoler | au-delà — à justifier avec prudence |
| Corrélation ≠ causalité | trois explications possibles |

---

## 8. Les erreurs qui coûtent des points

1. **Conclure à une cause depuis une corrélation.** C'est l'erreur de fond du
   chapitre.
2. **Additionner ou moyenner des pourcentages** issus de lignes différentes d'un
   tableau croisé.
3. **Oublier de préciser la base** d'un pourcentage : sur le total, sur la ligne ou
   sur la colonne ?
4. **Extrapoler loin des données** sans signaler que la validité n'est pas garantie.
5. **Tracer une droite d'ajustement qui ne passe pas par le point moyen.**
6. **Ajuster par une droite un nuage manifestement courbe.**
7. **Confondre $\bar x$ et $\bar y$** dans les coordonnées du point moyen.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques intégrées à
l'enseignement scientifique, première générale, partie « Analyse de l'information
chiffrée » — sous-parties « Analyse statistique de deux caractères qualitatifs »
et « Analyse statistique de deux caractères quantitatifs ».

Éléments explicitement lisibles dans l'extraction : tableau croisé d'effectifs,
diagrammes en barres et circulaires, nuage de points, ajustement affine, point moyen,
interpolation, extrapolation, usage du TABLEUR, et la mention « Plusieurs ajustements
sont proposés (au jugé, droite de Mayer, …) » — d'où la section 4.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La méthode des MOINDRES CARRÉS est-elle exigible (avec calculatrice) ou seulement
  citée ? L'extraction est coupée juste après « droite de Mayer ».
- Le COEFFICIENT DE CORRÉLATION est-il au programme ? Je ne l'ai PAS introduit,
  faute de trace dans l'extraction — point de périmètre à trancher.
- L'usage du tableur est mentionné dans les capacités attendues : faut-il détailler
  les manipulations (nuage de points, courbe de tendance) ?
- La distinction corrélation/causalité est-elle formalisée dans le texte, ou
  seulement implicite dans l'objectif d'esprit critique ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
