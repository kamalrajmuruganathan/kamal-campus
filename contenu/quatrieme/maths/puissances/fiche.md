---
id: 4e-math-puissances
titre: "Puissances d'exposant positif"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - "Puissances : carré et cube (5e)"
  - Priorités opératoires (5e)
  - Multiplication et division de nombres relatifs (4e)
  - Multiplier et diviser par 10, 100, 1 000 (6e)
statut: brouillon
relu_par: null
---

# Puissances d'exposant positif

> En Cinquième, tu t'es arrêté à l'exposant $3$ : le carré et le cube. Cette année,
> l'exposant monte aussi haut que tu veux. Et surtout, tu apprends à **calculer avec**
> les puissances sans jamais les développer : deux règles suffisent pour remplacer une
> ligne entière de multiplications.

---

## Ce que tu sais déjà (5e)

La notation $a^n$, la base, l'exposant, le carré $a^2$, le cube $a^3$, les carrés des
entiers de $0$ à $12$, et $10^2 = 100$, $10^3 = 1\,000$ : tout ça vient du chapitre
**« Puissances : carré et cube » (5e)**. Ce chapitre-ci ne le refait pas. Si les carrés
parfaits ou $2^3 = 8$ et $3^3 = 27$ ne tombent pas tout seuls, retournes-y d'abord.

---

## 1. Définir une puissance d'exposant positif

Pour un nombre $a$ et un entier $n \geqslant 1$ :

$$\boxed{a^n = \underbrace{a \times a \times \dots \times a}_{n \text{ facteurs}}}$$

- $a$ est la **base**
- $n$ est l'**exposant** : il compte **combien de facteurs** $a$ on écrit

On lit « $a$ puissance $n$ ».

> **Exemple.** $2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32$.
> Cinq facteurs $2$, donc l'exposant est $5$.

> **Exemple.** $3^4 = 3 \times 3 \times 3 \times 3 = 81$.

Le seul vrai changement par rapport à la 5e : **l'exposant n'est plus limité à $2$ ou $3$**.

### L'exposant 1

$$\boxed{a^1 = a}$$

Un seul facteur, donc le nombre lui-même. $7^1 = 7$.

### Quand la base est négative

Cette année tu sais multiplier des nombres relatifs : la base peut donc être négative.
Le signe du résultat dépend alors de la **parité de l'exposant**.

$$(-2)^3 = (-2) \times (-2) \times (-2) = -8
\qquad\qquad
(-2)^4 = (-2) \times (-2) \times (-2) \times (-2) = 16$$

| Exposant | Signe de $(-a)^n$ (avec $a>0$) |
|---|---|
| **pair** | positif |
| **impair** | négatif |

> ⚠️ **Les parenthèses changent tout.**
> $$(-2)^4 = 16 \qquad \text{mais} \qquad -2^4 = -16$$
> Dans $-2^4$, la puissance porte **seulement sur le $2$** ; le signe $-$ reste devant.
> Dans $(-2)^4$, c'est le nombre $-2$ tout entier qu'on élève à la puissance $4$.

---

## 2. Les puissances de 10

Elles suivent la même définition, mais elles ont une lecture directe :

$$\boxed{10^n = 1\underbrace{00\dots0}_{n \text{ zéros}}}$$

$$10^1 = 10 \qquad 10^2 = 100 \qquad 10^3 = 1\,000 \qquad 10^6 = 1\,000\,000$$

**L'exposant, c'est le nombre de zéros.** Rien de plus à retenir.

> **Multiplier par $10^n$**, c'est décaler la virgule de $n$ rangs vers la droite.
> $$3{,}47 \times 10^3 = 3\,470$$

### Écrire un nombre avec un facteur puissance de 10

C'est l'écriture qui rend les grands nombres lisibles :

$$1\,200 = 1{,}2 \times 10^3 \qquad\qquad 45\,000 = 4{,}5 \times 10^4$$

> **Exemple.** La distance Terre–Soleil est d'environ $150\,000\,000$ km.
> On écrit $1{,}5 \times 10^8$ km : c'est plus court, et on lit tout de suite
> l'ordre de grandeur.

> **À savoir.** Cette écriture ressemble à la *notation scientifique*, mais ce n'est
> pas encore elle : la notation scientifique a des règles précises que tu verras en
> **Troisième**. Ici, on s'en sert juste comme d'un outil de calcul.

---

## 3. Multiplier deux puissances d'un même nombre

$$\boxed{a^m \times a^n = a^{m+n}}$$

**Même base** : on garde la base et on **additionne** les exposants.

> **Pourquoi ça marche.** Il suffit de compter les facteurs :
> $$2^3 \times 2^4 = \underbrace{(2 \times 2 \times 2)}_{3} \times \underbrace{(2 \times 2 \times 2 \times 2)}_{4}$$
> Au total, $3 + 4 = 7$ facteurs $2$. Donc $2^3 \times 2^4 = 2^7 = 128$.

> **Exemple.** $3^2 \times 3^5 = 3^{2+5} = 3^7$.
>
> **Exemple.** $10^2 \times 10^5 = 10^{2+5} = 10^7 = 10\,000\,000$.
> Sept zéros — l'exposant te les compte.
>
> **Exemple.** $5^2 \times 5 = 5^2 \times 5^1 = 5^3 = 125$.
> Un nombre seul, c'est une puissance d'exposant $1$.

> ⚠️ **La base ne bouge pas.** $2^3 \times 2^4$ vaut $2^7$, **pas** $4^7$.
> On ne multiplie pas les bases entre elles.

> ⚠️ **On additionne les exposants, on ne les multiplie pas.**
> $2^3 \times 2^4 = 2^7$, pas $2^{12}$.

---

## 4. Multiplier deux puissances de même exposant

$$\boxed{a^n \times b^n = (a \times b)^n}$$

**Même exposant** : on garde l'exposant et on **multiplie les bases**.

> **Pourquoi ça marche.** On réorganise le produit :
> $$2^3 \times 5^3 = (2 \times 2 \times 2) \times (5 \times 5 \times 5)
> = (2\times5) \times (2\times5) \times (2\times5) = 10^3$$
> Chaque $2$ est apparié à un $5$ : il y a bien $3$ paquets identiques.

> **Exemple.** $2^3 \times 5^3 = 10^3 = 1\,000$.
> Beaucoup plus rapide que $8 \times 125$.
>
> **Exemple.** $4^2 \times 25^2 = 100^2 = 10\,000$.
>
> **Exemple.** $2^3 \times 3^3 = 6^3 = 216$.

> ⚠️ **Cette règle exige le même exposant.** $2^3 \times 5^4$ ne se simplifie
> avec aucune des deux règles : ni la base ni l'exposant ne sont communs. Il faut
> calculer $8 \times 625 = 5\,000$.

### Les deux règles côte à côte

| Ce qui est commun | Ce qu'on fait | Formule |
|---|---|---|
| la **base** | on additionne les exposants | $a^m \times a^n = a^{m+n}$ |
| l'**exposant** | on multiplie les bases | $a^n \times b^n = (ab)^n$ |
| rien | aucune règle : on calcule | — |

---

## 5. Résoudre un problème avec des puissances

### Repérer un produit qui se répète

Dès qu'une quantité est **multipliée par le même nombre à chaque étape**, une puissance
apparaît.

> **Exemple.** Une population de bactéries double toutes les heures. Elle est de $500$
> au départ. Combien après $10$ heures ?
>
> Doubler $10$ fois, c'est multiplier par $2$ dix fois, soit par $2^{10} = 1\,024$.
> $$500 \times 2^{10} = 500 \times 1\,024 = 512\,000$$

### Calculer avec de grands nombres

Sépare le nombre « simple » et la puissance de 10, puis regroupe.

> **Exemple.** $300 \times 4\,000$.
> $$300 \times 4\,000 = (3 \times 10^2) \times (4 \times 10^3)
> = (3 \times 4) \times (10^2 \times 10^3) = 12 \times 10^5 = 1\,200\,000$$
>
> On a utilisé la règle de la **même base** sur les puissances de 10.

### Méthode générale

1. Repère si les puissances ont la **même base** ou le **même exposant**.
2. Applique la règle correspondante — **sans développer**.
3. Calcule la valeur seulement **à la fin**, si on te la demande.

---

## 6. Cas particuliers et pièges de calcul

| Écriture | Valeur | Pourquoi |
|---|---|---|
| $a^1$ | $a$ | un seul facteur |
| $1^n$ | $1$ | $1 \times 1 \times \dots = 1$ |
| $0^n$ ($n \geqslant 1$) | $0$ | un facteur nul annule tout |
| $(-3)^2$ | $9$ | exposant pair → positif |
| $(-3)^3$ | $-27$ | exposant impair → négatif |
| $-3^2$ | $-9$ | le carré porte sur $3$, pas sur $-3$ |

### Les puissances dans les priorités

Rien de nouveau depuis la 5e : **parenthèses → puissances → $\times$ et $\div$ → $+$ et $-$**.

> $$2 + 3 \times 10^2 = 2 + 3 \times 100 = 302$$

### On n'additionne pas des puissances comme on les multiplie

$$2^3 + 2^4 = 8 + 16 = 24$$

Ce n'est **pas** $2^7 = 128$. Les règles des sections 3 et 4 valent pour un **produit**,
jamais pour une somme.

> **Ce qui t'attend en Troisième** : les exposants **négatifs**, la **division** de
> puissances et la **notation scientifique**. Ce n'est pas au programme de cette année :
> si un exercice te propose $10^{-3}$, il sort du cadre de la 4e.

---

## 7. À retenir absolument

| | |
|---|---|
| Définition | $a^n = a \times a \times \dots \times a$ ($n$ facteurs, $n \geqslant 1$) |
| Exposant 1 | $a^1 = a$ |
| Puissance de 10 | $10^n = 1$ suivi de $n$ **zéros** |
| Grands nombres | $1\,200 = 1{,}2 \times 10^3$ |
| **Même base** | $\boxed{a^m \times a^n = a^{m+n}}$ — on **additionne** les exposants |
| **Même exposant** | $\boxed{a^n \times b^n = (a \times b)^n}$ — on **multiplie** les bases |
| Base négative | exposant **pair** → positif ; **impair** → négatif |
| Parenthèses | $(-2)^4 = 16$ mais $-2^4 = -16$ |
| Priorités | parenthèses → puissances → $\times \div$ → $+ -$ |

---

## 8. Les erreurs qui coûtent des points

1. **Multiplier les exposants au lieu de les additionner** : $2^3 \times 2^4 = 2^7$,
   jamais $2^{12}$. On compte les facteurs, on les empile.
2. **Multiplier les bases quand elles sont identiques** : $2^3 \times 2^4$ donne $2^7$,
   pas $4^7$. La base commune se garde telle quelle.
3. **Appliquer une règle sans vérifier ce qui est commun** : $2^3 \times 5^4$ n'a ni
   base ni exposant commun. Aucune règle ne s'applique — il faut calculer.
4. **Oublier les parenthèses sur une base négative** : $-2^4$ vaut $-16$, alors que
   $(-2)^4$ vaut $16$. C'est le piège de signe le plus rentable pour un correcteur.
5. **Additionner les exposants dans une somme** : $2^3 + 2^4$ vaut $24$, pas $2^7$.
   Les deux règles ne concernent que les **produits**.
6. **Se tromper de nombre de zéros** : $10^6$ a **six** zéros. Recompte plutôt que de
   te fier à l'œil.
7. **Développer alors qu'on demande une puissance** : si la question dit « écris sous
   la forme $a^n$ », répondre $128$ au lieu de $2^7$ ne rapporte pas le point.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Nombres et calculs », section « Quatrième » (lignes 509 à 580),
entrée « Puissances » : lignes 544 à 555.

Automatismes (lignes 546-549) :
- « Connaitre et reconnaitre les carrés parfaits des entiers de 0 à 12 »
- « Puissances simples : 2² = 4 ; 2³ = 8 ; 3³ = 27 »
  (ces deux-là relèvent du chapitre 5e -> bloc « Ce que tu sais déjà », non retraités)
- « Multiplier et diviser par 10, 100, 1 000 ; savoir compléter 1 200 = 1,2 × … »
  et « 10² = 100 ; 10³ = 1 000 » -> section 2

Objectifs d'apprentissage (lignes 552-555), traités un par un et DANS L'ORDRE :
- « Définir les puissances d'exposant positif d'un nombre a » -> section 1
- « Multiplier des puissances d'exposant entier naturel d'un même nombre entre
  elles » -> section 3 (a^m x a^n = a^(m+n))
- « Multiplier des puissances d'un même exposant entier naturel de deux nombres
  entre elles » -> section 4 (a^n x b^n = (ab)^n)
- « Résoudre des problèmes faisant intervenir des puissances » -> section 5

⚠️ PÉRIMÈTRE — POINT LE PLUS IMPORTANT DE CETTE FICHE :
Trois notions qu'on attribue spontanément à la 4e ne sont PAS dans l'entrée 4e.
Le texte les place explicitement en TROISIÈME (entrée « Puissances », l. 591-601) :
- « Définir les puissances d'exposant négatif d'un nombre » (l. 597) -> 3e
- « Multiplier et diviser des puissances » (l. 598) : la DIVISION est en 3e
- « Déterminer la notation scientifique d'un nombre » (l. 600) et « Résoudre des
  problèmes notamment en utilisant la notation scientifique » (l. 601) -> 3e
Confirmation : les automatismes de 3e (l. 593-595) sont exactement les deux règles
de multiplication enseignées ici — c'est bien l'acquis de 4e remobilisé en 3e.
=> Cette fiche s'arrête aux EXPOSANTS POSITIFS et à la MULTIPLICATION. Aucun
exposant négatif, aucune division de puissances, aucune notation scientifique.
La section 6 le dit explicitement à l'élève.

⚠️ POINTS À TRANCHER PAR LE RELECTEUR :
1. (a^m)^n — la puissance d'une puissance — n'apparaît DANS AUCUNE des trois
   entrées « Puissances » (5e, 4e, 3e) du texte. Je ne l'ai donc pas traitée.
   À confirmer : est-ce une omission du texte, ou est-elle réellement hors cycle 4 ?
2. EXPOSANT 0. Le texte dit « exposant positif » (552) et « exposant entier
   naturel » (553-554) — en convention française, les deux incluent 0. La règle
   a^m x a^n = a^(m+n) appliquée à m = 0 impose a^0 = 1. J'ai malgré tout
   DÉLIBÉRÉMENT ÉCARTÉ a^0 de la fiche (définition posée pour n >= 1), parce que
   la définition par produit itéré ne le donne pas et qu'aucun automatisme ne le
   mentionne. À TRANCHER : faut-il l'ajouter ?
3. PUISSANCES DE 10 (section 2). Ce n'est PAS un objectif d'apprentissage de 4e :
   c'est un automatisme (549) plus « 1 200 = 1,2 × … » (547). Je lui ai donné une
   section entière parce qu'elle sert d'appui à « Résoudre des problèmes » (555)
   et que le commentaire général du thème (lignes 348-353) rattache explicitement
   les puissances de dix à exposant POSITIF aux grands nombres de l'astronomie,
   de la physique et de l'informatique. Vérifier que le poids donné est le bon.
4. BASE NÉGATIVE (section 1 et pièges 4). Le texte dit « puissances d'exposant
   positif d'un nombre a », sans restreindre a aux positifs, et « Multiplier deux
   nombres relatifs » est un objectif 4e du même thème (ligne 519). J'en ai déduit
   que (-2)^4 et le piège -2^4 sont dans le périmètre. À confirmer : c'est mon
   inférence, elle n'est pas écrite noir sur blanc dans l'entrée « Puissances ».
5. La PLACE DES PUISSANCES DANS LES PRIORITÉS (section 6) n'est pas écrite dans
   l'entrée 4e (elle est reprise du chapitre 5e). Convention standard, non citée.
6. Titre retenu : « Puissances d'exposant positif ». Le BO dit seulement
   « Puissances ». Choix fait pour distinguer du chapitre 5e et de celui de 3e.

Le chapitre 5e (contenu/cinquieme/maths/puissances/fiche.md) est cité en prérequis
et son contenu n'est pas répété : notation a^n, carré, cube, carrés de 0 à 12,
10^2 et 10^3, priorités. Seul le strict rappel de repérage figure en tête de fiche.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
