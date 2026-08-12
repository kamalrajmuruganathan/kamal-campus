---
id: 5e-math-fonctions
titre: "Fonctions : dépendance entre deux grandeurs"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Proportionnalité (5e)
  - Repérage sur une droite et dans le plan (5e)
  - Calcul littéral, écrire une expression avec une lettre (5e)
statut: brouillon
relu_par: null
---

# Fonctions : dépendance entre deux grandeurs

> Ce chapitre ne parle pas encore de « la fonction $f$ ». Il parle d'une chose plus
> simple et beaucoup plus utile : **quand une grandeur en commande une autre**. Le
> côté d'un carré commande son périmètre. Le nombre de séances commande le prix payé.
> Tout le chapitre tient dans ces trois mots : **en fonction de**.

---

## 1. « En fonction de » : la dépendance

Deux grandeurs sont en jeu. L'une, tu la **choisis**. L'autre, tu l'**obtiens**.

> **Définition.** On dit qu'une grandeur varie **en fonction d'**une autre lorsque,
> dès qu'on connaît la première, on peut déterminer la seconde.

- La grandeur qu'on choisit : la grandeur **de départ**.
- La grandeur qu'on obtient : celle qui **dépend** de la première.

> **Exemple.** Le périmètre d'un carré varie **en fonction de** son côté. Tu choisis
> le côté, le périmètre suit tout seul.

### La condition à ne pas oublier

Pour pouvoir dire « en fonction de », il faut qu'à **chaque** valeur de la grandeur de
départ corresponde **une seule** valeur de l'autre.

> **Exemple qui marche.** Le prix d'essence en fonction du nombre de litres : pour
> $10$ L, il y a un seul prix possible. ✓
>
> **Exemple qui ne marche pas.** La taille d'un élève en fonction de son âge : deux
> élèves de $12$ ans n'ont pas la même taille. On ne peut pas dire que la taille est
> déterminée en fonction de l'âge. ✗

### L'ordre des mots compte

« Le périmètre en fonction du côté » et « le côté en fonction du périmètre » ne
disent **pas** la même chose. La grandeur nommée **après** « en fonction de » est
toujours celle qu'on choisit.

---

## 2. Le tableau de valeurs

### Produire un tableau

Deux lignes. **En haut** la grandeur de départ, **en bas** celle qui dépend.

> **Exemple.** Périmètre $P$ d'un carré de côté $c$, en centimètres.

| Côté $c$ (cm) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Périmètre $P$ (cm) | 4 | 8 | 12 | 16 | 20 |

### Lire et interpréter un tableau

On lit **une colonne entière** : elle forme un couple.

> **Exemple.** La colonne $3 \mid 12$ se lit : « pour un côté de $3$ cm, le périmètre
> vaut $12$ cm ». Une phrase complète, avec les **unités**.

Un tableau se lit aussi **à l'envers** : si le périmètre vaut $16$ cm, on remonte à la
ligne du haut et on trouve un côté de $4$ cm.

> ⚠️ Un tableau ne contient que **quelques** valeurs, celles qu'on a choisies. Le côté
> $2{,}5$ cm existe bien, il n'est simplement pas dans le tableau.

---

## 3. D'une formule vers un tableau

Quand la dépendance est donnée par une **formule**, on remplit le tableau en trois
étapes.

> **Méthode.**
> 1. Choisis les valeurs de la ligne du haut.
> 2. **Remplace** la lettre par chaque valeur.
> 3. Calcule, et écris le résultat dans la case du dessous.

> **Exemple.** Une piscine facture $5$ € d'abonnement, puis $2$ € par séance. Le prix
> $P$ en euros, en fonction du nombre $n$ de séances :
> $$P = 5 + 2 \times n$$
>
> - $n = 0$ : $P = 5 + 2 \times 0 = 5$
> - $n = 1$ : $P = 5 + 2 \times 1 = 7$
> - $n = 3$ : $P = 5 + 2 \times 3 = 11$

| Séances $n$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Prix $P$ (€) | 5 | 7 | 9 | 11 | 13 |

> ⚠️ **Priorités opératoires.** Pour $n = 3$, on calcule d'abord $2 \times 3 = 6$,
> **puis** $5 + 6 = 11$. Faire $5 + 2 = 7$ puis $7 \times 3 = 21$ est faux.

---

## 4. Produire une formule

L'exercice inverse : une situation est décrite avec des mots, tu écris la formule.

> **Méthode.**
> 1. Donne une **lettre** à chaque grandeur, et écris ce qu'elle représente.
> 2. Repère ce qui est **fixe** et ce qui **varie**.
> 3. Écris le calcul que tu ferais avec un nombre — puis remplace ce nombre par la lettre.

> **Exemple 1.** Un cahier coûte $2$ €. Prix $P$ de $n$ cahiers :
> $$\boxed{P = 2 \times n}$$
> Ici rien n'est fixe au départ : on paie uniquement les cahiers.

> **Exemple 2.** Un taxi prend $4$ € au départ, puis $3$ € par kilomètre. Prix $P$
> pour $d$ kilomètres :
> $$\boxed{P = 4 + 3 \times d}$$
> Le $4$ est **fixe** : on le paie même pour $0$ km.

> **Exemple 3.** Périmètre $P$ d'un carré de côté $c$ : $\boxed{P = 4 \times c}$.

> **Le test qui sauve.** Prends une valeur simple et vérifie « à la main ». Pour
> $d = 2$ : la formule donne $4 + 6 = 10$ €, et le raisonnement direct donne
> $4 + 3 + 3 = 10$ €. ✓

---

## 5. Placer les points dans un repère

Chaque colonne du tableau devient **un point**.

> **Méthode.**
> 1. Axe **horizontal** : la grandeur de départ. Axe **vertical** : celle qui dépend.
> 2. Nomme les axes et indique les **unités**.
> 3. Pour chaque colonne, place le point de coordonnées (valeur du haut ; valeur du bas).

> **Exemple.** Avec le tableau du carré, on place les points
> $(1\,;4)$, $(2\,;8)$, $(3\,;12)$, $(4\,;16)$, $(5\,;20)$.

> ⚠️ **L'abscisse d'abord.** $(3\,;12)$ et $(12\,;3)$ sont deux points totalement
> différents. On avance **puis** on monte, jamais l'inverse.

Le repère est **orthogonal** : les deux axes sont perpendiculaires. En revanche les
graduations des deux axes n'ont aucune raison d'être les mêmes — ici $1$ cm de côté
peut occuper $1$ carreau, et $4$ cm de périmètre aussi.

---

## 6. Lire et interpréter un graphique

Le graphique peut être une **courbe** (un trait continu) ou un **nuage de points**
(des points isolés).

### Lire une valeur

> **Méthode.** Pars de l'axe horizontal à la valeur cherchée, monte jusqu'à la courbe,
> puis va **horizontalement** vers l'axe vertical. Lis.
>
> À l'envers : pars de l'axe vertical, va jusqu'à la courbe, puis **descends**.

### Interpréter

Interpréter, c'est raconter le graphique **en français**, avec les grandeurs.

> **Exemple.** Un graphique donne la température en fonction de l'heure. On lit :
> $16$ °C à $10$ h, $24$ °C à $14$ h, $18$ °C à $18$ h.
>
> Interprétation : « la température **augmente** jusqu'à $14$ h, où elle atteint son
> **maximum** ($24$ °C), puis elle **diminue** ». Trois mots suffisent : augmente,
> diminue, maximum.

### Courbe ou nuage : on relie ou pas ?

- On **relie** quand les valeurs intermédiaires existent : une température à $10$ h $30$
  a un sens.
- On **ne relie pas** quand elles n'existent pas : $2{,}5$ cahiers ou $3{,}7$ séances de
  piscine n'ont aucun sens. On laisse un **nuage de points**.

---

## 7. Caractériser graphiquement la proportionnalité

C'est le point le plus important du chapitre.

> **Règle.** Deux grandeurs sont proportionnelles **si et seulement si** les points du
> graphique sont :
> $$\boxed{\text{alignés} \quad \textbf{et} \quad \text{sur une droite passant par l'origine}}$$

Les **deux** conditions, pas une seule.

> **Exemple 1 — proportionnel.** $P = 4 \times c$. Les points $(1\,;4)$, $(2\,;8)$,
> $(3\,;12)$ sont alignés, et pour $c = 0$ on a $P = 0$ : la droite passe par
> l'origine. ✓

> **Exemple 2 — alignés, mais NON proportionnel.** $P = 5 + 2 \times n$. Les points
> sont bien alignés… mais pour $n = 0$ le prix vaut $5$ €, pas $0$. La droite **ne
> passe pas** par l'origine. ✗

> **Exemple 3 — non alignés.** L'aire d'un carré, $A = c \times c$ : $1$, $4$, $9$,
> $16$. Les points montent de plus en plus vite, ils ne sont pas alignés. ✗

### Le contrôle dans le tableau

Sur le tableau, la proportionnalité se voit aux **quotients** : ils doivent tous être
égaux.

> $\dfrac{4}{1} = 4$, $\dfrac{8}{2} = 4$, $\dfrac{12}{3} = 4$ → proportionnel, de
> coefficient $4$.
>
> $\dfrac{7}{1} = 7$ mais $\dfrac{9}{2} = 4{,}5$ → **pas** proportionnel.

---

## 8. Les pièges de lecture

- **Deux grandeurs qui augmentent ensemble ne sont pas forcément proportionnelles.**
  L'aire du carré augmente quand le côté augmente, et pourtant elle n'est pas
  proportionnelle au côté.
- **Un axe qui ne commence pas à zéro** déforme l'impression : une courbe peut sembler
  bondir alors qu'elle varie de $2$ °C. Regarde toujours les **graduations** avant de
  conclure.
- **Deux points alignés, ça ne prouve rien** : par deux points passe toujours une
  droite. Il en faut au moins trois pour parler d'alignement.
- **Lire entre deux points d'un nuage** n'a pas de sens si les valeurs intermédiaires
  n'existent pas.

---

## 9. À retenir absolument

| | |
|---|---|
| « $y$ en fonction de $x$ » | on choisit $x$, on obtient $y$ |
| Condition | une seule valeur d'arrivée pour chaque valeur de départ |
| Tableau | ligne du haut = grandeur de départ |
| Formule → tableau | on **remplace** la lettre, on calcule |
| Situation → formule | repérer ce qui est **fixe** et ce qui **varie** |
| Repère | horizontal = départ, vertical = ce qui dépend |
| Point | (abscisse ; ordonnée) — **abscisse d'abord** |
| Proportionnalité | points **alignés** **et** droite passant par **l'origine** |
| Dans le tableau | tous les quotients **égaux** |

---

## 10. Les erreurs qui coûtent des points

1. **Inverser les deux grandeurs** dans le tableau ou dans le repère. La grandeur
   nommée après « en fonction de » va **en haut** du tableau et **en horizontal** sur
   le graphique.
2. **Écrire $(12\,;3)$ au lieu de $(3\,;12)$.** L'abscisse se lit toujours en premier.
3. **Conclure « c'est proportionnel » parce que les points sont alignés**, sans
   vérifier que la droite passe par l'origine. C'est l'erreur la plus fréquente du
   chapitre : $P = 5 + 2 \times n$ donne des points parfaitement alignés et n'est
   **pas** une situation de proportionnalité.
4. **Oublier les priorités opératoires** en remplissant un tableau : dans
   $5 + 2 \times n$, la multiplication passe avant l'addition.
5. **Relier les points d'un nuage** quand les valeurs intermédiaires n'ont pas de sens
   (nombre d'objets, nombre de séances).
6. **Répondre par un nombre nu.** Une lecture graphique se rédige en phrase, avec la
   grandeur et son **unité** : « à $14$ h, la température vaut $24$ °C ».

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
Fichier : docs/programme-college-cycle4-maths-2026.txt
(PDF correspondant : docs/programme-college-cycle4-maths-2026.pdf)
Thème « Proportionnalité, fonctions », niveau Cinquième.
Plage lue : lignes 987 à 1020. L'entrée « Fonctions » de la Cinquième occupe
précisément les lignes 1011 à 1020 (l. 1011 titre « Fonctions », l. 1012
« Objectifs d'apprentissage », l. 1013-1020 les huit objectifs).
Les lignes 987 à 1010 de la plage relèvent de l'entrée « Proportionnalité » de la
Cinquième, déjà traitée dans contenu/cinquieme/maths/proportionnalite/.

LES HUIT OBJECTIFS (l. 1013-1020) ET LEUR SECTION DANS LA FICHE
- l.1013 « Introduire l'expression : "en fonction de"… »            -> section 1
- l.1014 « Produire un tableau de valeurs. »                        -> section 2
- l.1015 « Lire et interpréter un tableau de valeurs. »             -> section 2
- l.1016 « Placer dans un repère orthogonal donné des points… »     -> section 5
- l.1017 « Lire et interpréter un graphique cartésien… »            -> section 6
- l.1018 « Traduire la relation de dépendance… à partir d'une formule. » -> section 3
- l.1019 « Produire une formule simple… »                           -> section 4
- l.1020 « Caractériser graphiquement la proportionnalité. »        -> section 7
Seul écart à l'ordre du BO : les sections 3 et 4 sont inversées (formule -> tableau
avant situation -> formule), pour des raisons pédagogiques (remplacer une lettre est
plus simple que fabriquer une formule). À valider, ou à remettre dans l'ordre du BO.

PÉRIMÈTRE — POINT DE VIGILANCE PRINCIPAL
En Cinquième la notion de fonction est NAISSANTE. Le chapeau du thème le dit
(l. 981-984) : « La notion de fonction apparait d'abord dans le cadre des grandeurs
[...] Dès la cinquième, on emploie l'expression "en fonction de". En quatrième, on
donne des exemples où on utilise une formule, un graphique ou un tableau de valeurs
[...] Des exemples de fonctions sont étudiés en troisième, sans étude générale de la
notion de fonction. »
J'ai donc VOLONTAIREMENT EXCLU de cette fiche : le mot « fonction » employé comme
objet mathématique (« la fonction f ») ; la notation f(x) et toute notation
fonctionnelle ; le vocabulaire image / antécédent ; la flèche x -> f(x) ; les mots
ensemble de définition, variable, courbe représentative ; et les mots croissante /
décroissante comme propriétés d'une fonction (la section 6 dit « augmente » et
« diminue », en langue courante).
Le titre « Fonctions » est celui du BO (l. 1011) ; le sous-titre « dépendance entre
deux grandeurs » sert à ne pas laisser croire à l'élève qu'on étudie f(x).

À CONFRONTER AU PROGRAMME PAR LE RELECTEUR
1. AMBIGUÏTÉ RÉELLE, lignes 985-986 (juste HORS de la plage 987-1020 fournie) :
   « Les notations fonctionnelles de type P(A), p(t) ainsi que la flèche -> sont
   utilisées progressivement dans tous les chapitres du programme. » Ce chapeau vaut
   pour tout le cycle 4. Faut-il en introduire une trace dès la 5e (par exemple
   écrire P(c) pour le périmètre) ? J'ai choisi NON — « progressivement » et
   l'entrée 5e qui n'en dit rien plaident pour la 4e/3e — mais c'est le point le
   plus discutable de la fiche. À trancher par un professeur.
2. « Programme de calcul » : la consigne de production le citait comme attendu en 5e.
   Vérification faite, l'expression n'apparaît PAS dans l'entrée « Fonctions » de la
   Cinquième. Elle apparaît en 5e uniquement dans « Nombres et calculs » (l. 387,
   « Traduire un problème, une succession donnée d'opérations, un programme de
   calcul, en une seule expression »), et dans « Fonctions » seulement en QUATRIÈME
   (l. 1038-1039). Je n'ai donc PAS fait de section « programme de calcul » ici, pour
   ne pas empiéter sur la 4e. À confirmer.
3. Recouvrement avec le chapitre Proportionnalité (5e) : l'objectif l. 1020
   « Caractériser graphiquement la proportionnalité » figure dans les deux entrées du
   BO (voir aussi l. 1006-1009). La section 7 le traite du point de vue « fonctions »
   (points issus d'un tableau de valeurs). Vérifier qu'il n'y a pas de contradiction
   avec contenu/cinquieme/maths/proportionnalite/fiche.md, ni de doublon gênant.
4. Condition d'unicité (section 1) : le BO ne l'énonce nulle part en 5e. Je l'ai
   formulée en langue courante (« une seule valeur ») parce que la consigne de
   production impose une « condition d'existence » dans la section Définition, et
   parce que sans elle « en fonction de » n'a pas de sens. Formulation à valider :
   elle ne doit pas devenir une définition formelle de fonction.
5. Le repère orthogonal est un prérequis acquis en 5e : « Espace et géométrie »,
   Cinquième, « Repérage sur une droite et dans le plan », l. 667-678. La section 5
   suppose donc connu « placer un point de coordonnées données ». Cohérent.

Rédaction entièrement originale à partir du seul texte du BO. Aucun emprunt à un
manuel ni à un site de cours. Tous les exemples chiffrés ont été inventés et
recalculés à la main.
Statut : brouillon, non relu.
-->
