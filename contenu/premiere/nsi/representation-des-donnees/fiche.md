---
id: 1nsi-representation-des-donnees
titre: "Représentation des données (binaire, entiers, texte)"
voie: generale
niveau: premiere
parcours: nsi
matiere: nsi
programme: "Première — spécialité NSI (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Notion de nombre entier et de base de numération (collège)
  - Bases de la programmation Python (variables, types)
statut: brouillon
relu_par: null
---

# Représentation des données (binaire, entiers, texte)

> Dans une machine, **tout est codé en binaire** : une suite de 0 et de 1.
> Ce chapitre explique comment on représente les entiers (naturels puis relatifs),
> pourquoi les réels ne sont qu'**approchés**, et comment un texte devient une
> suite d'octets.

---

# 1. Bit, octet et binaire

Un **bit** (*binary digit*) est la plus petite information : il vaut **0 ou 1**.
Un **octet** (*byte* en anglais) est un groupe de **8 bits**. Avec 8 bits, on
peut représenter $2^8 = 256$ valeurs différentes (de 0 à 255).

Le système **binaire** est un système de numération en **base 2** : chaque
position vaut une puissance de 2, exactement comme en base 10 chaque position
vaut une puissance de 10.

$$1011_2 = 1\times 8 + 0\times 4 + 1\times 2 + 1\times 1 = 11_{10}$$

**Retenir les puissances de 2 utiles :** 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.

---

# 2. Représenter un entier naturel

## Convertir binaire → décimal

On additionne les puissances de 2 correspondant aux bits à 1.

## Convertir décimal → binaire

Méthode des **divisions successives par 2** : on note les restes, puis on les lit
**de bas en haut**.

Exemple pour 13 : 13/2 = 6 reste **1** ; 6/2 = 3 reste **0** ; 3/2 = 1 reste **1** ;
1/2 = 0 reste **1**. On lit de bas en haut : $13_{10} = 1101_2$.

En Python :

```python
bin(13)   # '0b1101'
int('1101', 2)  # 13
```

## Nombre de valeurs codables

Avec $n$ bits, on code $2^n$ valeurs, soit les entiers de $0$ à $2^n - 1$.
Avec 4 bits : de 0 à 15. Avec 8 bits : de 0 à 255.

---

# 3. L'hexadécimal (base 16)

L'**hexadécimal** utilise 16 symboles : `0 1 2 3 4 5 6 7 8 9 A B C D E F`
(A vaut 10, …, F vaut 15). Son intérêt : **un chiffre hexadécimal code exactement
4 bits**, donc un octet tient sur **2 chiffres hexa**. C'est plus court et plus
lisible pour les humains (couleurs web `#FF8800`, adresses mémoire…).

$$\text{A2}_{16} = 10\times 16 + 2 = 162_{10} = 1010\,0010_2$$

En Python : `hex(162)` renvoie `'0xa2'`.

---

# 4. Représenter un entier relatif : le complément à deux

Pour coder les nombres **négatifs**, on utilise la méthode du **complément à
deux** sur un nombre fixe de bits (par exemple 8). Le bit le plus à gauche (bit
de **poids fort**) sert de **signe** : 0 pour positif, 1 pour négatif.

Pour obtenir le codage de $-x$ sur 8 bits : on part du codage de $x$, on **inverse
tous les bits**, puis on **ajoute 1**.

Exemple, coder $-5$ sur 8 bits : $5 = 0000\,0101$ → inversion $1111\,1010$ →
+1 → $1111\,1011$.

Sur 8 bits en complément à deux, on représente les entiers de **$-128$ à $+127$**.

---

# 5. Dépassement de capacité (overflow)

Le nombre de bits est **fixe**. Si un calcul dépasse la plus grande valeur
codable, on obtient un **dépassement de capacité** (*overflow*) et un résultat
faux. Sur 8 bits non signés, $255 + 1$ « repasse » à 0.

> En Python, le type `int` a une **précision illimitée** (il n'y a pas
> d'overflow), mais ce n'est pas le cas dans la plupart des langages ni au niveau
> matériel : la notion reste essentielle.

---

# 6. Booléens et représentation des réels

Un **booléen** ne prend que deux valeurs, `True` (1) et `False` (0). On les combine
avec les opérateurs logiques `and`, `or`, `not`.

Les nombres **réels** sont représentés en machine par des **nombres à virgule
flottante** (`float`), sur un nombre fini de bits. Cette représentation est
**approchée** : certains nombres décimaux simples ne se codent pas exactement.

```python
0.1 + 0.2      # 0.30000000000000004
0.1 + 0.2 == 0.3   # False
```

**Conséquence :** on ne teste jamais l'égalité stricte entre deux flottants ; on
vérifie que leur différence est très petite.

---

# 7. Représenter un texte

Un ordinateur ne stocke pas des lettres mais des **nombres**. Une **table de
codage** associe à chaque caractère un nombre entier.

- **ASCII** : table historique sur **7 bits**, soit 128 caractères (lettres non
  accentuées, chiffres, ponctuation). Exemple : `'A'` vaut 65, `'a'` vaut 97,
  `'0'` vaut 48. Les majuscules et minuscules sont décalées de 32.
- **Unicode** : table universelle qui attribue un numéro (*code point*) à
  **tous** les caractères de toutes les langues (accents, `é`, `€`, emojis…).
- **UTF-8** : la manière la plus courante d'**encoder** Unicode en octets. Il est
  compatible ASCII (un caractère ASCII tient sur 1 octet) et utilise 1 à 4 octets
  selon le caractère.

En Python :

```python
ord('A')   # 65
chr(97)    # 'a'
```

---

# Ce qu'il faut retenir

- Un **bit** vaut 0 ou 1 ; un **octet** = 8 bits code $2^8 = 256$ valeurs.
- Avec $n$ bits, on code les naturels de $0$ à $2^n - 1$.
- On convertit décimal → binaire par **divisions successives par 2**.
- L'**hexadécimal** : 1 chiffre = 4 bits, 1 octet = 2 chiffres hexa.
- Les **entiers relatifs** se codent en **complément à deux** ; sur 8 bits :
  de $-128$ à $+127$.
- Les **float** sont **approchés** : jamais de test d'égalité stricte.
- Texte : **ASCII** (7 bits, 128 caractères), **Unicode** (numéro universel),
  **UTF-8** (encodage en octets, compatible ASCII).

# Les erreurs à éviter

- Confondre **bit** et **octet** (1 octet = 8 bits).
- Croire qu'avec $n$ bits on code jusqu'à $2^n$ : le **maximum est $2^n - 1$**
  (le 0 compte).
- Écrire `if x == 0.3` avec des flottants.
- Confondre **Unicode** (la table de numéros) et **UTF-8** (une façon de coder
  ces numéros en octets).
