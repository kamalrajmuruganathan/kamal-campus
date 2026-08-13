---
id: 3e-math-puissances
titre: "Puissances : exposants négatifs et notation scientifique"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 14
prerequis:
  - "Puissances : carré et cube (5e)"
  - "Puissances d'exposant positif, produit de puissances (4e)"
  - "Inverse d'un nombre et sa notation (4e)"
  - "Multiplication et division de fractions (4e-3e)"
statut: brouillon
relu_par: null
---

# Puissances : exposants négatifs et notation scientifique

> Jusqu'ici l'exposant comptait des facteurs : $2^5$, c'est cinq fois le nombre $2$.
> Cette année il devient **négatif** — et un exposant négatif ne compte plus rien du
> tout. Il faut donc lui donner un autre sens : l'**inverse**. Une fois cette marche
> franchie, tu tiens l'écriture qui sert partout en sciences : la **notation scientifique**.

---

## Ce que tu sais déjà (5e et 4e)

Trois acquis sont supposés en place et **ne sont pas refaits ici** :

- la notation $a^n$, base, exposant, carré et cube — **« Puissances : carré et cube » (5e)** ;
- $\boxed{a^m \times a^n = a^{m+n}}$, $\boxed{a^n \times b^n = (a \times b)^n}$ et
  $10^n = 1$ suivi de $n$ zéros — **« Puissances d'exposant positif » (4e)** ;
- l'**inverse** d'un nombre non nul, $\dfrac{1}{a}$ — opérations sur les fractions **(4e)**.

Si $2^3 \times 2^4 = 2^7$ ne te vient pas tout seul, retourne à la fiche de 4e d'abord.

---

## 1. Les puissances d'exposant négatif

Pour un nombre $a$ **non nul** et un entier $n \geqslant 1$ :

$$\boxed{a^{-n} = \frac{1}{a^{\,n}}}$$

Un exposant négatif ne veut pas dire « nombre négatif » : il veut dire **inverse**.

> ⚠️ **Condition d'existence : $a \neq 0$.** $0^{-2}$ reviendrait à écrire
> $\dfrac{1}{0}$, qui n'existe pas. Avec un exposant négatif, la base n'est jamais nulle.

> **Exemple.** $2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8} = 0{,}125$ — un résultat
> **positif** : il n'y a aucun signe moins dedans.
>
> **Exemple.** $5^{-1} = \dfrac{1}{5} = 0{,}2$. L'exposant $-1$, c'est exactement
> l'inverse que tu connais depuis la 4e.

### L'exposant 0

$$\boxed{a^0 = 1 \qquad (a \neq 0)}$$

> **Pourquoi.** Un nombre divisé par lui-même vaut $1$ : $\dfrac{2^3}{2^3} = 1$.
> Mais la règle des quotients (section 2) donne $\dfrac{2^3}{2^3} = 2^{3-3} = 2^0$.
> Les deux calculs doivent s'accorder : donc $2^0 = 1$. Ce n'est pas une bizarrerie
> à apprendre par cœur, c'est la seule valeur qui rend les règles cohérentes.

### Les puissances de 10 négatives

$$\boxed{10^{-n} = \frac{1}{10^{\,n}}}
\qquad 10^{-1} = 0{,}1 \qquad 10^{-2} = 0{,}01 \qquad 10^{-3} = 0{,}001$$

**L'exposant, c'est le rang du $1$ après la virgule.** Et **multiplier par $10^{-n}$**, c'est
décaler la virgule de $n$ rangs vers la **gauche** : $47 \times 10^{-2} = 0{,}47$.

---

## 2. Multiplier et diviser des puissances

Les deux règles de 4e **restent vraies**, et elles valent désormais pour des exposants
**de n'importe quel signe**. La division en ajoute deux autres, symétriques.

$$\boxed{\frac{a^m}{a^n} = a^{\,m-n}} \ (a \neq 0)
\qquad\qquad
\boxed{\frac{a^n}{b^n} = \left(\frac{a}{b}\right)^{\!n}} \ (b \neq 0)$$

| Ce qui est commun | $\times$ | $\div$ |
|---|---|---|
| la **base** | on **additionne** les exposants | on **soustrait** les exposants |
| l'**exposant** | on **multiplie** les bases | on **divise** les bases |

> **Pourquoi la soustraction.** On simplifie les facteurs communs :
> $\dfrac{2^5}{2^3} = \dfrac{2\times2\times2\times2\times2}{2\times2\times2} = 2^2$.
> Il reste $5 - 3 = 2$ facteurs.

> **Exemple.** $\dfrac{10^7}{10^3} = 10^{7-3} = 10^4 = 10\,000$.
>
> **Exemple.** $\dfrac{3^2}{3^5} = 3^{2-5} = 3^{-3} = \dfrac{1}{27}$. L'exposant devient
> négatif tout seul : normal, on divise par plus grand.
>
> **Exemple.** $\dfrac{10^{-3}}{10^{-7}} = 10^{-3-(-7)} = 10^{-3+7} = 10^{4}$.
> **Soustraire un nombre négatif, c'est ajouter.** C'est ici qu'on perd le plus de points.
>
> **Exemple.** $10^{-4} \times 10^{7} = 10^{-4+7} = 10^{3}$, et
> $a^{n} \times a^{-n} = a^{0} = 1$ : un nombre multiplié par son inverse.
>
> **Exemple.** $\dfrac{6^3}{2^3} = \left(\dfrac{6}{2}\right)^{3} = 3^3 = 27$ —
> bien plus rapide que $216 \div 8$.

> ⚠️ **Si rien n'est commun, aucune règle ne s'applique.** $2^3 \times 5^4$ ne se
> simplifie pas : il faut calculer $8 \times 625 = 5\,000$.

### Méthode — réduire une expression à une seule puissance

1. Regarde **base par base** : regroupe ce qui a la même base.
2. Applique $+$ pour un produit, $-$ pour un quotient — **sur les exposants**.
3. Si l'exposant final est négatif et qu'on demande un nombre, passe à l'inverse.

> **Exemple.** $\dfrac{10^{5} \times 10^{-2}}{10^{-4}}$
> $$= \frac{10^{\,5+(-2)}}{10^{-4}} = \frac{10^{3}}{10^{-4}} = 10^{\,3-(-4)} = 10^{7}$$

---

## 3. La notation scientifique

C'est **l'écriture officielle des sciences** : tu la retrouveras en physique-chimie
toute ta scolarité. Un nombre y est écrit sous la forme

$$\boxed{a \times 10^{\,n}} \qquad \text{avec } 1 \leqslant a < 10
\ \text{ et } n \text{ entier relatif}$$

$a$ s'appelle la **mantisse**, ou plus simplement le nombre décimal de devant. La
condition $1 \leqslant a < 10$ signifie : **un seul chiffre, non nul, avant la virgule**.

> ✓ $3{,}2 \times 10^{4}$ · $1 \times 10^{-9}$ · $9{,}99 \times 10^{12}$
>
> ✗ $32 \times 10^{3}$ (deux chiffres devant) · $0{,}32 \times 10^{5}$ (un $0$ devant)
>
> Ces deux dernières écritures sont **numériquement justes**, mais ce ne sont **pas**
> des notations scientifiques. En contrôle, elles ne valent pas le point.

> ⚠️ **Le nombre $0$ n'a pas de notation scientifique** : aucun $a$ entre $1$ et $10$
> ne peut donner $0$. Pour un nombre **négatif**, le signe se met devant la mantisse :
> $-4\,500 = -4{,}5 \times 10^{3}$, et la condition porte alors sur $|a|$.

### Méthode — trouver la notation scientifique

1. Place la virgule pour n'avoir **qu'un seul chiffre non nul devant** : tu obtiens $a$.
2. Compte de **combien de rangs** la virgule a bougé : c'est $n$.
3. Nombre **grand** ($\geqslant 10$) → $n$ **positif** ; nombre **petit** ($< 1$) →
   $n$ **négatif**.
4. **Vérifie** : est-ce que $a \times 10^n$ redonne bien le nombre de départ ?

> **Grand nombre.** $32\,000$ : la virgule (invisible, à droite) recule de $4$ rangs.
> $$32\,000 = 3{,}2 \times 10^{4}$$
>
> **Petit nombre.** $0{,}00058$ : la virgule avance de $4$ rangs pour arriver après le $5$.
> $$0{,}00058 = 5{,}8 \times 10^{-4}$$
> Compte les **rangs**, pas les zéros : c'est la source d'erreur n°1.

**Pour revenir à l'écriture décimale**, on décale dans l'autre sens :
$6{,}1 \times 10^{5} = 610\,000$ et $6{,}1 \times 10^{-5} = 0{,}000061$.

### L'ordre de grandeur

C'est la puissance de 10 seule : elle dit **la taille** du nombre, sans le détail.
Pour **comparer** deux nombres en notation scientifique, on regarde donc d'abord les
**exposants** ; les mantisses ne départagent qu'à exposants égaux.

> La masse d'un électron est d'environ $9{,}1 \times 10^{-31}$ kg, celle d'un proton
> $1{,}7 \times 10^{-27}$ kg. Inutile de comparer $9{,}1$ et $1{,}7$ : $-27 > -31$, donc
> **le proton est le plus lourd**, sans poser aucune division. La puissance de 10 tranche.
> *(Le rapport exact, lui, demande les mantisses : $\frac{1{,}7}{9{,}1} \times 10^{4}
> \approx 1\,900$ fois.)*

---

## 4. Résoudre des problèmes avec la notation scientifique

### Multiplier ou diviser deux nombres écrits ainsi

On sépare : les mantisses ensemble, les puissances de 10 ensemble.

> **Exemple.** $(3 \times 10^{5}) \times (4 \times 10^{-8})
> = (3 \times 4) \times (10^{5} \times 10^{-8}) = 12 \times 10^{-3}$.
>
> **Ce n'est pas fini** : $12$ n'est pas entre $1$ et $10$. On réécrit
> $12 = 1{,}2 \times 10^{1}$, d'où $12 \times 10^{-3} = 1{,}2 \times 10^{-2}$.

> ⚠️ **Cette dernière étape s'oublie tout le temps.** Après un calcul, **relis ta
> mantisse** : si elle n'est pas entre $1$ et $10$, tu n'as pas répondu à la question.

### Les préfixes des unités

Ce sont des puissances de 10 déguisées : c'est ce qui fait le lien avec les
**conversions** et avec la physique-chimie.

| giga (G) | méga (M) | kilo (k) | milli (m) | micro (µ) | nano (n) |
|---|---|---|---|---|---|
| $10^{9}$ | $10^{6}$ | $10^{3}$ | $10^{-3}$ | $10^{-6}$ | $10^{-9}$ |

> **Exemple.** Un virus mesure $2 \times 10^{-7}$ m. Combien en faut-il alignés pour
> atteindre $1$ mm ? On convertit d'abord : $1$ mm $= 10^{-3}$ m.
> $$\frac{10^{-3}}{2 \times 10^{-7}} = 0{,}5 \times 10^{\,-3-(-7)}
> = 0{,}5 \times 10^{4} = 5 \times 10^{3}$$
> Soit **$5\,000$ virus**. On renormalise à la fin : $0{,}5$ n'est pas une mantisse valable.

### Méthode générale de problème

1. Écris chaque donnée en **notation scientifique**, avec son unité.
2. Convertis pour que **toutes les unités soient les mêmes**.
3. Calcule mantisses et puissances de 10 **séparément**.
4. **Renormalise** le résultat, puis contrôle l'ordre de grandeur : est-il plausible ?

---

## 5. Cas particuliers et pièges de calcul

| Écriture | Valeur | Pourquoi |
|---|---|---|
| $a^0$ ($a \neq 0$) | $1$ | seule valeur compatible avec $\frac{a^n}{a^n}=1$ |
| $a^{-1}$ | $\frac{1}{a}$ | c'est l'inverse |
| $10^{-3}$ | $0{,}001$ | le $1$ est au $3^\text{e}$ rang |
| $(-2)^{-2}$ | $\frac{1}{4}$ | exposant pair → positif, puis inverse |
| $(-2)^{-3}$ | $-\frac{1}{8}$ | exposant impair → négatif, puis inverse |
| $2^{-3}$ | $\frac{1}{8}$ | **positif** : l'exposant est négatif, pas le nombre |
| $0^{-2}$ | n'existe pas | division par zéro |

> ⚠️ **Le piège central du chapitre.** Un exposant négatif ne rend jamais le
> résultat négatif. $10^{-2} = 0{,}01$, un nombre **positif**, simplement **petit**.

> **Pour aller plus loin — hors programme du cycle 4.** L'écriture $(a^m)^n$
> (« puissance d'une puissance ») n'est demandée à aucun des trois niveaux du cycle 4.
> Si tu la croises, développe : $(10^2)^3 = 10^2 \times 10^2 \times 10^2 = 10^6$.

---

## 6. Un détour par l'histoire

- **L'échiquier de Sissa** — un grain sur la première case, deux sur la deuxième,
  quatre sur la troisième… La dernière en réclame $2^{63} \approx 9{,}2 \times 10^{18}$.
- **Le papyrus de Rhind**, l'un des plus vieux textes mathématiques connus, où l'on
  trouve déjà des multiplications par doublements successifs.

---

## 7. À retenir absolument

| | |
|---|---|
| Exposant négatif | $\boxed{a^{-n} = \dfrac{1}{a^n}}$, avec $a \neq 0$ |
| Exposant 0 | $\boxed{a^0 = 1}$, avec $a \neq 0$ |
| Puissance de 10 négative | $10^{-n} = 0{,}0\dots01$, le $1$ au rang $n$ |
| Même base, produit | $a^m \times a^n = a^{m+n}$ |
| Même base, quotient | $\boxed{\dfrac{a^m}{a^n} = a^{m-n}}$ |
| Même exposant | $a^n b^n = (ab)^n$ et $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$ |
| Notation scientifique | $\boxed{a \times 10^n}$ avec $1 \leqslant a < 10$ |
| Ordre de grandeur | la puissance de 10 seule |
| Comparer | l'**exposant** d'abord, la mantisse ensuite |
| Signe | $2^{-3}$ est **positif** ($= 0{,}125$) |

---

## 8. Les erreurs qui coûtent des points

1. **Croire qu'un exposant négatif donne un nombre négatif** : $10^{-3} = 0{,}001$,
   pas $-1\,000$ ni $-0{,}001$. Négatif dans l'exposant $\neq$ négatif dans le résultat.
2. **Oublier de renormaliser la mantisse** : $12 \times 10^{-3}$ n'est **pas** une
   notation scientifique — c'est $1{,}2 \times 10^{-2}$. L'erreur la plus fréquente
   en fin d'exercice.
3. **Se tromper de signe en soustrayant les exposants** : $\dfrac{10^{-3}}{10^{-7}}
   = 10^{-3+7} = 10^{4}$, pas $10^{-10}$. Recopie les parenthèses : $-3 - (-7)$.
4. **Compter les zéros au lieu des rangs de virgule** : dans $0{,}00058$, la virgule
   se déplace de $4$ rangs, même s'il n'y a que $3$ zéros. Compte les **sauts**.
5. **Comparer les mantisses avant les exposants** : $9{,}5 \times 10^{-6}$ est plus
   **petit** que $1{,}2 \times 10^{-5}$, bien que $9{,}5 > 1{,}2$.
6. **Additionner les mantisses dans un produit** : $(3 \times 10^5)(4 \times 10^{-8})$
   utilise $3 \times 4$, pas $3 + 4$. Seuls les **exposants** s'additionnent.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Nombres et calculs », section « Troisième » (lignes 581 à 644),
entrée « Puissances » : lignes 591 à 604.

Automatismes (l. 593-595), tous acquis de 4e -> bloc « Ce que tu sais déjà », non retraités :
- « Puissance comme multiplication itérée : 3 × 3 × 3 × 3 = 3^4 »
- « Multiplication de puissances d'exposant positif d'un nombre »
- « Multiplication de puissances de même exposant positif de deux nombres »

Objectifs d'apprentissage (l. 597-601), traités un par un et DANS L'ORDRE :
- « Définir les puissances d'exposant négatif d'un nombre » (l. 597) -> section 1
- « Multiplier et diviser des puissances » (l. 598) -> section 2
- « Déterminer la notation scientifique d'un nombre » (l. 600) -> section 3
- « Résoudre des problèmes notamment en utilisant la notation scientifique » (l. 601)
  -> section 4
Prolongements (l. 603-604) : « L'échiquier de Sissa », « Le papyrus de Rhind » -> section 6.
Commentaire général du thème (l. 348-353) : les exposants négatifs sont rattachés aux
sciences de l'atome, à la microbiologie et aux nanotechnologies ; « on introduit en
fonction des besoins les préfixes des puissances de dix de nano à giga » et « on fait
le lien avec les conversions » -> tableau des préfixes et exemples (électron, virus)
en section 4.

=== LES DEUX QUESTIONS OUVERTES LAISSÉES PAR L'AUTEUR DE LA 4e — VERDICTS ===

1. (a^m)^n — LA PUISSANCE D'UNE PUISSANCE. Revérifié, et TRANCHÉ : ce n'est PAS une
   omission d'extraction, c'est une absence réelle du texte.
   Méthode de vérification :
   - relevé exhaustif des occurrences de « puissance » / « exposant » dans le .txt :
     lignes 9, 14, 19, 346, 348, 350, 351, 353, 475, 480, 483-485, 544, 548, 552-555,
     591, 593-595, 597-598, 628. Aucune ne mentionne (a^m)^n ni « puissance d'une
     puissance ».
   - contre-vérification indépendante sur le PDF avec `pdftotext -layout` : l'entrée
     « Puissances » de 3e y apparaît intégralement (Automatismes puis 4 objectifs puis
     Prolongements) et est IDENTIQUE à l'extraction .txt. Aucune ligne perdue.
   - ATTENTION, point utile au relecteur : la ligne 599 du .txt est VIDE, entre
     « Multiplier et diviser des puissances » (598) et « Déterminer la notation
     scientifique » (600). Ce blanc pouvait laisser croire à un objectif perdu (c'est
     exactement là qu'on attendrait (a^m)^n). L'extraction -layout du PDF montre que
     non : c'est un simple saut de page, les deux objectifs se suivent directement.
   VERDICT : réellement hors des trois entrées « Puissances » du cycle 4. Je ne l'ai
   donc PAS enseignée comme règle. Elle figure uniquement en encadré « pour aller plus
   loin », explicitement signalé hors programme, avec la parade (développer le produit).
   RESTE AU RELECTEUR : décider si cette mention doit être conservée ou supprimée. Elle
   est utile (les élèves la rencontrent en exercices), mais elle n'est pas exigible.

2. EXPOSANT 0. TRANCHÉ dans l'autre sens qu'en 4e : je l'INTRODUIS ici (section 1),
   alors que la fiche de 4e l'avait délibérément écarté. Justification :
   - l'objectif l. 598 « Multiplier et diviser des puissances » impose la règle
     a^m / a^n = a^(m-n) ; appliquée à m = n elle produit mécaniquement a^0 ;
   - l'objectif l. 597 « puissances d'exposant négatif » suppose des exposants entiers
     relatifs, ensemble qui contient 0 ;
   - sans a^0 = 1, la règle du quotient a un trou et l'élève bute dessus dès le premier
     exercice.
   Le texte officiel ne l'écrit toutefois NULLE PART, à aucun niveau. Je l'ai donc
   présenté non comme un attendu mais comme une CONSÉQUENCE des règles, avec sa
   justification. À CONFIRMER PAR LE RELECTEUR : niveau d'exigence attendu (simple
   cohérence, ou résultat à connaître ?).

=== AUTRES POINTS À SOUMETTRE AU RELECTEUR ===

3. QUOTIENT DE MÊME EXPOSANT : (a/b)^n = a^n / b^n (section 2). Le texte dit seulement
   « Multiplier et diviser des puissances » (l. 598), sans préciser les cas. J'ai
   symétrisé les deux règles de 4e (même base / même exposant) dans les deux opérations,
   soit quatre règles. La règle du quotient de même exposant est donc une INFÉRENCE de
   symétrie, pas une citation. À valider ou à retirer.
4. BORNES DE LA MANTISSE : j'écris 1 <= a < 10, et pour les négatifs 1 <= |a| < 10.
   Le programme dit seulement « Déterminer la notation scientifique d'un nombre » sans
   définir la forme. La définition retenue est la convention usuelle ; le cas des nombres
   NÉGATIFS et le cas de ZÉRO (pas de notation scientifique) sont mes ajouts.
5. VOCABULAIRE « mantisse » : absent du programme. Employé une fois, immédiatement
   glosé (« le nombre décimal de devant »). À retirer si le relecteur le juge prématuré
   en 3e.
6. « ORDRE DE GRANDEUR » (section 3) : l'expression figure dans le commentaire général
   du thème (l. 351, « en lien avec les unités, les ordres de grandeur ») mais pas dans
   l'entrée « Puissances » elle-même. Poids donné à confirmer.
7. PRÉFIXES : le texte dit « on introduit EN FONCTION DES BESOINS les préfixes des
   puissances de dix de nano à giga » (l. 352-353). J'ai donné les six préfixes de
   nano à giga, sans centi/déci/déca/hecto. La formule « en fonction des besoins »
   suggère qu'aucune liste n'est exigible telle quelle : le tableau est un outil, pas
   une liste à mémoriser. Vérifier que la fiche ne laisse pas entendre l'inverse.
8. BASE NÉGATIVE avec exposant négatif ((-2)^-3, section 5) : prolongement du piège de
   signe traité en 4e. Non écrit dans l'entrée 3e. À confirmer.
9. Titre retenu : « Puissances : exposants négatifs et notation scientifique ». Le BO
   dit seulement « Puissances ». Choix fait pour distinguer des chapitres 5e et 4e.

Les fiches contenu/cinquieme/maths/puissances/ et contenu/quatrieme/maths/puissances/
sont citées en prérequis et leur contenu n'est PAS répété : notation a^n, carré, cube,
carrés de 0 à 12, 10^n positif, a^m x a^n, a^n x b^n, priorités opératoires. Seul le
strict rappel de repérage figure en tête de fiche, plus le rappel encadré des deux
règles de 4e nécessaires à la section 2.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
