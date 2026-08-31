---
id: "sj-snt-07"
titre: "SNT — Acheter en ligne"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : Acheter en ligne

**Durée : 1 heure — Barème sur 20 points.**

On étudie une boutique en ligne : le Web et ses protocoles, le chargement d'une page, les données de commande et la sécurité du paiement.

---

## Exercice 1 — Le voyage d'une page Web (5 points)

Léa ouvre `https://boutique.exemple.fr/produit/384`. Le serveur a l'adresse IP publique **93.184.216.34**.

1. Décrire dans l'ordre les grandes étapes entre le moment où Léa tape l'adresse et l'affichage de la page (citer **DNS**, **requête**, **réponse**).
2. L'adresse **93.184.216.34** est-elle **publique** ou **privée** ? Pourquoi un serveur Web a-t-il besoin d'une telle adresse ?
3. À quoi sert le **cadenas HTTPS** au moment de payer ?

---

## Exercice 2 — Le temps de chargement (5 points)

La page produit pèse **4,5 Mo** (photos comprises). La connexion de Léa a un débit de **30 Mbit/s** (1 octet = 8 bits).

1. Convertir 4,5 Mo en mégabits.
2. Calculer le **temps de chargement** en secondes.
3. Le site réduit le poids des images à **1,5 Mo** au total (page = 2,5 Mo). Quel est le nouveau temps de chargement ? Pourquoi les sites optimisent-ils leurs images ?

---

## Exercice 3 — Le numéro de commande en binaire (4 points)

Un petit compteur code le nombre d'articles du panier sur **1 octet**.

1. Le panier contient un nombre codé **0001 1001**. Combien d'articles ?
2. Léa met **44** articles dans une liste d'envies. Écrire **44** en binaire sur 8 bits.
3. Combien de valeurs différentes ce compteur peut-il prendre sur 1 octet ?

---

## Exercice 4 — Données et confiance (6 points)

1. Citer **trois données personnelles** demandées lors d'une commande.
2. Le site propose « Payer avec mon compte enregistré ». Donner un **avantage** et un **risque** de la conservation des données bancaires.
3. Léa reçoit un e-mail « Votre colis est bloqué, cliquez ici pour payer 1 € ». Comment s'appelle cette arnaque, et citer **deux indices** qui doivent l'alerter.
4. Citer un droit du **RGPD** permettant à Léa de récupérer ou faire supprimer ses données du site.

---

## Corrigé

### Exercice 1
1. (1) Le navigateur demande au **DNS** l'IP de `boutique.exemple.fr` ; (2) il envoie une **requête HTTPS** au serveur (IP 93.184.216.34) ; (3) le serveur renvoie une **réponse** (page HTML + images) que le navigateur **affiche**.
2. **Publique** : elle est unique et **routable sur Internet**, donc joignable par n'importe quel client. Un serveur doit être atteignable de partout.
3. HTTPS **chiffre** les données échangées : le numéro de carte ne peut pas être lu ou modifié en chemin.

### Exercice 2
1. 4,5 Mo × 8 = **36 Mbit**.
2. 36 ÷ 30 = **1,2 s**.
3. 2,5 Mo × 8 = 20 Mbit ; 20 ÷ 30 ≈ **0,67 s**. Des images plus légères = **pages plus rapides**, moins de données consommées, meilleure expérience (et référencement).

### Exercice 3
1. 0001 1001 = 16 + 8 + 1 = **25 articles**.
2. 44 = 32 + 8 + 4 → **0010 1100**. (Vérif : 32+8=40, +4=44.)
3. 2⁸ = **256** valeurs (de 0 à 255).

### Exercice 4
1. Par exemple : **nom/prénom**, **adresse de livraison**, **e-mail**, **téléphone**, **coordonnées bancaires**.
2. Avantage : **paiement plus rapide** (pas à ressaisir la carte). Risque : en cas de **piratage du compte**, les données bancaires peuvent être **volées / utilisées**.
3. C'est de l'**hameçonnage (phishing)**. Indices : **adresse d'expéditeur suspecte**, **ton urgent/menaçant**, **lien douteux**, fautes, demande de paiement inhabituelle.
4. Par exemple le **droit d'accès** / à la **portabilité** (récupérer ses données) ou le **droit à l'effacement**.
