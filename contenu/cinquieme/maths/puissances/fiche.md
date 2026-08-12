---
id: 5e-math-puissances
titre: "Puissances : carré et cube"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 10
prerequis:
  - Tables de multiplication (CM1-CM2-6e)
  - Priorités opératoires (5e)
  - Unités d'aire et de volume (6e)
statut: brouillon
relu_par: null
---

# Puissances : carré et cube

> Écrire $5 \times 5 \times 5$, c'est long. Écrire $5^3$, c'est la même chose en trois
> signes. Une puissance, ce n'est pas un calcul nouveau : c'est une **écriture courte**
> d'une multiplication où le même nombre revient plusieurs fois.

---

## 1. La notation puissance

Quand un même nombre est multiplié plusieurs fois par lui-même, on note :

$$\boxed{a^n = \underbrace{a \times a \times \dots \times a}_{n \text{ facteurs}}}$$

- $a$ s'appelle la **base** — le nombre qu'on multiplie
- $n$ s'appelle l'**exposant** — **combien de fois** on écrit ce nombre dans le produit

L'exposant est un nombre entier, et il vaut au moins $1$.

> **Exemple.** $2^4 = 2 \times 2 \times 2 \times 2 = 16$.
> La base est $2$, l'exposant est $4$ : il y a **quatre** facteurs $2$.

> ⚠️ **L'exposant n'est pas un facteur.** $2^4$ ne vaut pas $2 \times 4 = 8$.
> L'exposant compte les facteurs, il n'en est pas un.

En Cinquième, deux exposants t'intéressent avant tout : **$2$ et $3$**.

---

## 2. Le carré

$$\boxed{a^2 = a \times a}$$

On lit « $a$ au carré », ou « $a$ puissance $2$ ».

> **Exemple.** $6^2 = 6 \times 6 = 36$.

### Pourquoi « carré » ?

Parce que c'est l'**aire d'un carré**. Un carré de côté $c$ a pour aire :

$$\mathcal{A} = c \times c = c^2$$

> **Exemple.** Un carré de côté $5$ cm a une aire de $5^2 = 25$ cm$^2$.
>
> Tu retrouves l'exposant $2$ dans l'unité : cm$^2$ se lit « centimètre carré ».

---

## 3. Le cube

$$\boxed{a^3 = a \times a \times a}$$

On lit « $a$ au cube », ou « $a$ puissance $3$ ».

> **Exemple.** $2^3 = 2 \times 2 \times 2 = 8$.

### Pourquoi « cube » ?

Parce que c'est le **volume d'un cube**. Un cube d'arête $a$ a pour volume :

$$\mathcal{V} = a \times a \times a = a^3$$

> **Exemple.** Un cube d'arête $10$ cm a un volume de $10^3 = 1\,000$ cm$^3$.
>
> Là encore, l'unité porte l'exposant : cm$^3$ se lit « centimètre cube ».

### Le cube de 10 — à connaître par cœur

$$\boxed{10^3 = 1\,000}$$

Et au passage : $10^2 = 100$. L'exposant te donne le **nombre de zéros**.

---

## 4. Les carrés à connaître par cœur

De $0$ à $12$. Tu dois pouvoir les donner sans réfléchir, dans les deux sens.

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|---|
| $n^2$ | $0$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ |

| $n$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
|---|---|---|---|---|---|---|
| $n^2$ | $49$ | $64$ | $81$ | $100$ | $121$ | $144$ |

> **Dans les deux sens** veut dire : si on te donne $81$, tu dois penser $9^2$
> immédiatement. C'est ce qui te servira pour retrouver le côté d'un carré à partir
> de son aire.

---

## 5. Écrire un nombre sous la forme d'une puissance

Il s'agit de reconnaître un nombre **dans le tableau** ou dans les cubes simples.

> **Exemple 1.** $49 = 7 \times 7 = 7^2$.
>
> **Exemple 2.** $27 = 3 \times 3 \times 3 = 3^3$.
>
> **Exemple 3.** $1\,000 = 10^3$.

### Un même nombre, plusieurs écritures

$$64 = 8 \times 8 = 8^2 \qquad \text{et} \qquad 64 = 4 \times 4 \times 4 = 4^3$$

Les deux sont justes. Lis bien la question : elle te demande souvent **une puissance
$2$** ou **une puissance $3$** précisément.

---

## 6. Calculer une expression avec des puissances

Les priorités opératoires que tu connais s'enrichissent d'un étage : **les puissances
se calculent avant les multiplications et les divisions**, et donc bien avant les
additions et les soustractions.

**L'ordre complet :**

1. Ce qui est entre **parenthèses**
2. Les **puissances**
3. Les **multiplications** et **divisions**, de gauche à droite
4. Les **additions** et **soustractions**, de gauche à droite

> **Exemple 1.** $5 + 3^2 = 5 + 9 = 14$.
>
> On calcule $3^2$ **d'abord**. Attention : ce n'est pas $(5+3)^2 = 64$.

> **Exemple 2.** $2 \times 4^2 = 2 \times 16 = 32$.
>
> Le carré ne porte que sur le $4$. Ce n'est pas $(2 \times 4)^2 = 64$.

> **Exemple 3.** $3 + 2 \times 5^2 = 3 + 2 \times 25 = 3 + 50 = 53$.

> **Exemple 4.** $(2 + 3)^2 = 5^2 = 25$.
>
> Ici les parenthèses passent devant : on additionne, **puis** on élève au carré.

---

## 7. Puissances et expressions littérales

Quand une lettre est en jeu, tu **remplaces** la lettre par sa valeur, puis tu calcules
en respectant les priorités.

> **Exemple.** Calcule $3x^2$ pour $x = 4$.
>
> $$3 \times 4^2 = 3 \times 16 = 48$$
>
> ⚠️ Le carré porte sur $x$ seulement, pas sur $3x$. Ce n'est **pas** $(3 \times 4)^2 = 144$.

> **Exemple.** Le volume d'un cube d'arête $a$ est $a^3$. Pour $a = 3$ cm :
> $$3^3 = 27 \text{ cm}^3$$

---

## 8. Cas particuliers et pièges de calcul

| Écriture | Valeur | À ne pas confondre |
|---|---|---|
| $0^2 = 0$ et $0^3 = 0$ | $0$ | — |
| $1^2 = 1$ et $1^3 = 1$ | $1$ | $1$ à n'importe quelle puissance vaut $1$ |
| $2^2 = 4$ | $4$ | ici $2 \times 2$ et $2^2$ donnent le même résultat : **c'est un hasard** |
| $3^2 = 9$ | $9$ | $3 \times 2 = 6$ ❌ |
| $2^3 = 8$ | $8$ | $3^2 = 9$ — l'ordre base/exposant change tout |

> ⚠️ **$a^2$ et $2a$ ne sont pas la même chose.** $a^2$, c'est $a \times a$ ;
> $2a$, c'est $a + a$. Pour $a = 5$ : $25$ d'un côté, $10$ de l'autre.

> ⚠️ **Une puissance ne se distribue pas sur une somme.**
> $$3^2 + 4^2 = 9 + 16 = 25 \qquad \text{mais} \qquad (3+4)^2 = 7^2 = 49$$
> Les deux résultats sont différents : on ne peut pas « faire entrer » l'exposant
> dans une parenthèse.

---

## 9. À retenir absolument

| | |
|---|---|
| Notation | $a^n$ : $a$ est la **base**, $n$ l'**exposant** (nombre de facteurs) |
| Carré | $a^2 = a \times a$ — aire d'un carré de côté $a$ |
| Cube | $a^3 = a \times a \times a$ — volume d'un cube d'arête $a$ |
| À savoir par cœur | les carrés de $0$ à $12$, et $10^3 = 1\,000$ |
| Priorités | parenthèses → **puissances** → $\times$ et $\div$ → $+$ et $-$ |
| Piège n°1 | $3^2 \neq 3 \times 2$ |
| Piège n°2 | $2 \times 4^2 \neq (2 \times 4)^2$ |
| Unités | cm$^2$ pour une aire, cm$^3$ pour un volume |

---

## 10. Les erreurs qui coûtent des points

1. **Multiplier la base par l'exposant** : $5^3$ vaut $125$, pas $15$. L'exposant
   compte les facteurs, il n'est pas un facteur.
2. **Inverser base et exposant** : $2^3 = 8$ alors que $3^2 = 9$. Le nombre en haut
   n'est jamais celui qu'on multiplie.
3. **Oublier que la puissance passe avant la multiplication** : dans $2 \times 4^2$,
   on élève $4$ au carré d'abord. Écrire $8^2$ coûte le point.
4. **Élever au carré tout ce qui traîne devant** : dans $3x^2$, le carré porte sur
   $x$ seulement.
5. **Distribuer l'exposant sur une somme** : $(3+4)^2$ n'est pas $3^2 + 4^2$.
   Dans une parenthèse, on calcule la somme d'abord.
6. **Se tromper d'unité** : l'aire s'exprime en cm$^2$, le volume en cm$^3$. Un
   volume répondu en cm$^2$ est faux.
7. **Confondre $a^2$ et $2a$** : le carré n'est pas le double.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-college-cycle4-maths-2026.txt,
thème « Nombres et calculs », section « Cinquième », entrée « Puissances »,
lignes 475 à 485. Complément : entrée « Opérations » (Cinquième), ligne 390,
« Connaitre et utiliser les priorités opératoires ».

Objectifs d'apprentissage repris un par un (lignes 480-485) :
- « Découvrir la notion de puissance d'un nombre et sa notation dans le cas du carré
  et du cube » -> sections 1, 2 et 3
- « Connaitre les carrés des entiers de 0 à 12 » -> section 4 (tableau)
- « Connaitre le cube de 10 » -> section 3
- « Savoir écrire un nombre sous la forme d'une puissance 2 ou 3 » -> section 5
- « Calculer la valeur numérique d'expressions contenant des puissances simples,
  additions, soustractions et produits » -> section 6
- « Calculer la valeur d'une expression littérale contenant une puissance simple »
  -> section 7
Automatismes associés (lignes 477-478) : tables de multiplication ; « Connaitre les
unités d'aires et de volume » -> d'où le lien systématique carré/aire (cm²) et
cube/volume (cm³), et le piège n°6.

⚠️ PÉRIMÈTRE VOLONTAIREMENT LIMITÉ — à confirmer par le relecteur :
- Les PUISSANCES DE 10 en tant que telles, les EXPOSANTS NÉGATIFS et la NOTATION
  SCIENTIFIQUE ne figurent PAS dans l'entrée 5e : ils relèvent de la Quatrième
  (chapitre produit séparément). Seul 10^3 (et 10^2 comme appui) est mentionné ici,
  parce que « Connaitre le cube de 10 » est explicitement au programme de 5e.
- Les FORMULES DE CALCUL SUR LES PUISSANCES (a^m x a^n, (a^m)^n, quotients) ne sont
  pas au programme de 5e : elles ne sont pas traitées, même en remarque.
- Le programme dit « dans le cas du carré et du cube ». J'ai malgré tout donné la
  notation générale a^n avec exposant entier positif (section 1, exemple 2^4), parce
  que la notation ne se comprend pas sans elle. À TRANCHER : faut-il la restreindre
  strictement aux exposants 2 et 3 ?
- Aucune puissance de nombre NÉGATIF n'apparaît (ni (-3)^2, ni -3^2) : en 5e le
  programme limite les relatifs à l'addition et la soustraction, la multiplication
  de relatifs étant en 4e. Le piège classique du signe est donc volontairement absent.

⚠️ AUTRES POINTS À CONFRONTER AU TEXTE OFFICIEL :
- La PLACE DES PUISSANCES DANS LES PRIORITÉS opératoires (section 6) n'est pas
  détaillée dans le texte : celui-ci dit seulement « Connaitre et utiliser les
  priorités opératoires » (Opérations) et « Calculer la valeur numérique
  d'expressions contenant des puissances simples, additions, soustractions et
  produits » (Puissances). La hiérarchie que j'énonce (parenthèses > puissances >
  produits > sommes) est la convention mathématique standard, mais elle n'est pas
  écrite telle quelle dans le programme.
- Les cubes autres que 10^3 (2^3 = 8, 3^3 = 27, 4^3 = 64) sont utilisés comme
  exemples, pas présentés comme à mémoriser. Vérifier le niveau d'exigence affiché.
- Titre retenu : « Puissances : carré et cube ». Le BO dit seulement « Puissances ».

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
