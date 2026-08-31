---
id: sj-nsi-08
titre: "Bac NSI — Dictionnaires, adressage réseau et récursivité"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants portant sur les dictionnaires, les réseaux et la récursivité.

---

## Exercice 1 — Dictionnaires et analyse de fréquences (9 points)

Un dictionnaire (table associative) associe à chaque **clé** une **valeur**, et permet un accès direct par la clé.

**Question 1.1 (3 points).** Écrire une fonction `table_frequences(texte)` qui reçoit une chaîne de mots séparés par des espaces et renvoie un dictionnaire associant à chaque mot son nombre d'occurrences. Par exemple, `table_frequences("le chat le chien le")` doit renvoyer `{'le': 3, 'chat': 1, 'chien': 1}`. On pourra utiliser la méthode `dict.get(cle, valeur_par_defaut)`.

**Question 1.2 (2 points).** À partir d'un dictionnaire de fréquences `freq`, écrire une expression (ou quelques lignes) renvoyant le mot le plus fréquent. On pourra utiliser `max` avec l'argument `key`.

**Question 1.3 (2 points).** Expliquer l'intérêt d'un dictionnaire par rapport à une liste de couples `(mot, compte)` pour compter des occurrences. Quelle est la complexité moyenne d'un accès à une clé dans un dictionnaire ?

**Question 1.4 (2 points).** On dispose du dictionnaire `notes = {'Ana': 15, 'Bilal': 9, 'Chloé': 12}`. Écrire une instruction qui construit la liste des noms des élèves ayant la moyenne (note ≥ 10).

---

## Exercice 2 — Adressage IPv4 et récursivité (11 points)

Une adresse IPv4 est constituée de 4 octets (nombres de 0 à 255) séparés par des points, par exemple `192.168.1.10`. Un **masque de sous-réseau** en notation CIDR `/p` signifie que les `p` premiers bits (parmi 32) identifient le réseau.

**Question 2.1 (2 points).** Le réseau `/24` réserve 24 bits pour la partie réseau et 8 bits pour la partie machine. Combien de machines différentes peut-on théoriquement adresser dans un réseau `/24` (avant de retirer les adresses réservées) ? Justifier.

**Question 2.2 (4 points).** Compléter la fonction `masque_binaire(prefixe)` qui renvoie le masque de sous-réseau en notation décimale pointée. Par exemple, `masque_binaire(24)` doit renvoyer `"255.255.255.0"`. On construit la chaîne de 32 bits, puis on convertit chaque groupe de 8 bits en entier.

```python
def masque_binaire(prefixe):
    bits = '1' * prefixe + '0' * (32 - prefixe)
    octets = []
    for i in range(0, 32, 8):
        # À compléter : convertir bits[i:i+8] en entier décimal
        ...
    return '.'.join(octets)
```

**Question 2.3 (2 points).** À l'aide de la fonction précédente (ou par le calcul), donner le masque correspondant au préfixe `/26`. Deux machines d'adresses `192.168.1.10` et `192.168.1.200` sont-elles dans le même réseau `/24` ? Justifier.

**Question 2.4 (3 points).** Une arborescence de fichiers est représentée par des listes imbriquées : un dossier est une liste dont les éléments sont des tailles de fichiers (entiers) ou d'autres dossiers (listes). Écrire une fonction **récursive** `somme_imbriquee(liste)` qui renvoie la somme de toutes les tailles de fichiers, à n'importe quelle profondeur. Par exemple, `somme_imbriquee([1, [2, 3], [4, [5, 6]]])` doit renvoyer `21`. On pourra tester le type d'un élément avec `isinstance(element, list)`.

---

## Corrigé

### Exercice 1

**1.1.**
```python
def table_frequences(texte):
    freq = {}
    for mot in texte.split():
        freq[mot] = freq.get(mot, 0) + 1
    return freq
```

`freq.get(mot, 0)` renvoie le compte courant du mot, ou `0` s'il n'a pas encore été rencontré.

**1.2.**
```python
mot_frequent = max(freq, key=freq.get)
```

`max` compare les clés d'après leur valeur `freq[cle]` ; il renvoie donc la clé de plus grande fréquence.

**1.3.** Avec une liste de couples, retrouver ou incrémenter le compte d'un mot impose de parcourir la liste, soit un coût linéaire O(k) par mot. Le dictionnaire offre un accès **direct** par la clé, en O(1) en moyenne (grâce au hachage), ce qui rend le comptage bien plus efficace sur de grands textes.

**1.4.**
```python
recus = [nom for nom in notes if notes[nom] >= 10]
```
Cette liste vaut `['Ana', 'Chloé']`.

### Exercice 2

**2.1.** Un réseau `/24` laisse 8 bits pour la partie machine, soit `2⁸ = 256` combinaisons possibles. On peut donc théoriquement adresser **256** machines (en pratique 254 utilisables, car l'adresse « tout à 0 » désigne le réseau et « tout à 1 » est l'adresse de diffusion).

**2.2.**
```python
def masque_binaire(prefixe):
    bits = '1' * prefixe + '0' * (32 - prefixe)
    octets = []
    for i in range(0, 32, 8):
        octets.append(str(int(bits[i:i+8], 2)))
    return '.'.join(octets)
```

`int(bits[i:i+8], 2)` convertit un groupe de 8 caractères binaires en entier ; `str(...)` le transforme en chaîne pour la jonction. Vérification : `masque_binaire(24)` donne `"255.255.255.0"`.

**2.3.** Pour `/26`, les 26 bits de réseau donnent `255.255.255.192` (le dernier octet `11000000` vaut 192). Pour le réseau `/24`, seules comptent les trois premières valeurs : `192.168.1.10` et `192.168.1.200` ont le même préfixe `192.168.1`, elles appartiennent donc **au même réseau** `/24`.

**2.4.**
```python
def somme_imbriquee(liste):
    total = 0
    for element in liste:
        if isinstance(element, list):
            total += somme_imbriquee(element)
        else:
            total += element
    return total
```

Pour chaque élément, s'il s'agit d'une liste (un sous-dossier), on additionne récursivement sa somme ; sinon on ajoute directement la taille. Ainsi `somme_imbriquee([1, [2, 3], [4, [5, 6]]])` renvoie `1 + 2 + 3 + 4 + 5 + 6 = 21`.
