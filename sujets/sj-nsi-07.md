---
id: sj-nsi-07
titre: "Bac NSI — Piles, expressions et base de données commerciale"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants. La qualité de la rédaction sera prise en compte.

---

## Exercice 1 — Piles et évaluation d'expressions (11 points)

On dispose d'une classe `Pile` implémentant une structure LIFO :

```python
class Pile:
    def __init__(self):
        self.elements = []

    def est_vide(self):
        return self.elements == []

    def empiler(self, valeur):
        self.elements.append(valeur)

    def depiler(self):
        return self.elements.pop()
```

### Partie A — Notation polonaise inverse

En **notation polonaise inverse** (NPI), l'opérateur est écrit *après* ses deux opérandes : l'expression usuelle `3 + 4` s'écrit `3 4 +`. On évalue une expression en NPI à l'aide d'une pile : chaque nombre est empilé ; à chaque opérateur, on dépile les deux derniers opérandes, on effectue le calcul et on empile le résultat.

**Question 1.1 (2 points).** Traduire en NPI l'expression `(5 + 3) * 2`. Justifier.

**Question 1.2 (4 points).** Compléter la fonction `evaluer_npi(expression)` ci-dessous. `expression` est une chaîne dont les jetons (nombres et opérateurs) sont séparés par des espaces ; on se limite aux opérateurs `+`, `-`, `*` et `/` (division entière `//`). **Attention à l'ordre des opérandes** pour la soustraction et la division.

```python
def evaluer_npi(expression):
    pile = Pile()
    for jeton in expression.split():
        if jeton in ('+', '-', '*', '/'):
            b = pile.depiler()
            a = pile.depiler()
            # À compléter : calculer selon l'opérateur et empiler le résultat
            ...
        else:
            pile.empiler(int(jeton))
    return pile.depiler()
```

**Question 1.3 (1 point).** Donner la valeur renvoyée par `evaluer_npi("5 1 2 + 4 * + 3 -")`.

### Partie B — Bon parenthésage

**Question 1.4 (4 points).** Écrire une fonction `bien_parenthese(chaine)` qui renvoie `True` si la chaîne est **correctement parenthésée** (avec les paires `()`, `[]` et `{}`), `False` sinon. On empile chaque parenthèse ouvrante ; à chaque parenthèse fermante, on vérifie qu'elle correspond au sommet de la pile. On pourra utiliser le dictionnaire `{')': '(', ']': '[', '}': '{'}`.

---

## Exercice 2 — Base de données d'une boutique en ligne (9 points)

Une boutique gère ses ventes avec la base suivante (`PK` : clé primaire, `FK` : clé étrangère) :

```
Client(id_client PK, nom, ville)
Produit(id_produit PK, libelle, prix)
Commande(id_commande PK, id_client FK, id_produit FK, quantite)
```

**Question 2.1 (2 points).** Expliquer pourquoi le prix d'un produit est stocké dans la table `Produit` et non dans la table `Commande`. Quel serait le risque de le dupliquer dans `Commande` ?

**Question 2.2 (2 points).** Écrire une requête SQL affichant le libellé et le prix des produits dont le prix dépasse `20` euros, triés par prix décroissant.

**Question 2.3 (2 points).** Écrire une requête SQL affichant, pour chaque commande, son identifiant et le **montant** de la commande (prix du produit multiplié par la quantité), triés par identifiant de commande.

**Question 2.4 (3 points).** Écrire une requête SQL affichant, pour chaque client de la ville de `'Lyon'`, son nom et le **chiffre d'affaires total** qu'il a généré (somme des montants de ses commandes), trié par chiffre d'affaires décroissant.

---

## Corrigé

### Exercice 1

**1.1.** `(5 + 3) * 2` s'écrit `5 3 + 2 *` en NPI : on évalue d'abord la somme `5 3 +` (qui vaut 8), puis on multiplie le résultat par `2` en plaçant l'opérateur `*` après les deux opérandes.

**1.2.** On respecte l'ordre : `a` est l'opérande dépilée en second (le plus profond), `b` la première dépilée (le sommet). Pour `-` et `/`, le calcul est `a - b` et `a // b`.

```python
def evaluer_npi(expression):
    pile = Pile()
    for jeton in expression.split():
        if jeton in ('+', '-', '*', '/'):
            b = pile.depiler()
            a = pile.depiler()
            if jeton == '+':
                pile.empiler(a + b)
            elif jeton == '-':
                pile.empiler(a - b)
            elif jeton == '*':
                pile.empiler(a * b)
            else:
                pile.empiler(a // b)
        else:
            pile.empiler(int(jeton))
    return pile.depiler()
```

**1.3.** `evaluer_npi("5 1 2 + 4 * + 3 -")` : `1 2 +` = 3, `3 4 *` = 12, `5 12 +` = 17, `17 3 -` = **14**.

**1.4.**
```python
def bien_parenthese(chaine):
    pile = Pile()
    paires = {')': '(', ']': '[', '}': '{'}
    for c in chaine:
        if c in '([{':
            pile.empiler(c)
        elif c in ')]}':
            if pile.est_vide() or pile.depiler() != paires[c]:
                return False
    return pile.est_vide()
```

Par exemple, `bien_parenthese("([]{()})")` renvoie `True`, tandis que `bien_parenthese("([)]")` renvoie `False` (mauvais imbriquement) et `bien_parenthese("(((")` renvoie `False` (pile non vide à la fin).

### Exercice 2

**2.1.** Le prix est une caractéristique du produit, pas de la commande. En le stockant une seule fois dans `Produit`, on évite la **redondance** : dupliquer le prix dans chaque commande risquerait de produire des incohérences (deux commandes du même produit avec des prix différents) et compliquerait toute mise à jour tarifaire. *(Dans un système réel, on conserve parfois un prix historique dans la commande ; ce n'est pas l'objet ici.)*

**2.2.**
```sql
SELECT libelle, prix
FROM Produit
WHERE prix > 20
ORDER BY prix DESC;
```

**2.3.**
```sql
SELECT Commande.id_commande, Produit.prix * Commande.quantite AS montant
FROM Commande
JOIN Produit ON Commande.id_produit = Produit.id_produit
ORDER BY Commande.id_commande;
```

**2.4.**
```sql
SELECT Client.nom, SUM(Produit.prix * Commande.quantite) AS chiffre_affaires
FROM Client
JOIN Commande ON Client.id_client = Commande.id_client
JOIN Produit ON Commande.id_produit = Produit.id_produit
WHERE Client.ville = 'Lyon'
GROUP BY Client.id_client
ORDER BY chiffre_affaires DESC;
```
