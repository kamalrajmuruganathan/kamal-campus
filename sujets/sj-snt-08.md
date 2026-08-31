---
id: "sj-snt-08"
titre: "SNT — La voiture connectée"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : La voiture connectée

**Durée : 1 heure — Barème sur 20 points.**

On étudie une voiture moderne bardée de capteurs : informatique embarquée, navigation GPS, transmission des données et codage.

---

## Exercice 1 — Se repérer avec le GPS (6 points)

Le calculateur de navigation utilise trois satellites (projetés au sol, unités en km) :

- Satellite A en (0 ; 0), distance **5**.
- Satellite B en (8 ; 0), distance **5**.
- Satellite C en (4 ; 10), distance **7**.

1. Nommer la méthode utilisée pour calculer la position.
2. Montrer par le calcul que la voiture est au point **P(4 ; 3)**.
3. Dans un tunnel, le GPS ne fonctionne plus. Expliquer pourquoi, et citer un capteur embarqué qui aide à **estimer** la position sans GPS.

---

## Exercice 2 — Coder la vitesse (4 points)

Le tableau de bord code la vitesse (en km/h, entier) sur **1 octet**.

1. La voiture roule à **130 km/h**. Écrire **130** en binaire sur 8 bits.
2. Le bus de données transmet **0101 1010**. Quelle vitesse cela représente-t-il ?
3. Un octet suffit-il pour coder toutes les vitesses d'une voiture de série ? Justifier.

---

## Exercice 3 — Envoyer les données au constructeur (5 points)

Après un trajet, la voiture envoie **25 Mo** de données de diagnostic via la 4G, à un débit de **10 Mbit/s** (1 octet = 8 bits).

1. Convertir 25 Mo en mégabits.
2. Calculer la **durée de l'envoi** en secondes.
3. Citer **une donnée utile** au constructeur et **un risque** pour la vie privée du conducteur.

---

## Exercice 4 — Capteurs, actionneurs, embarqué (5 points)

1. Classer en **capteur** ou **actionneur** : (a) radar de recul, (b) moteur d'essuie-glace, (c) caméra de recul, (d) frein commandé électroniquement.
2. On parle de plusieurs **calculateurs embarqués** reliés par un réseau interne. Donner deux caractéristiques d'un système embarqué.
3. Une voiture connectée peut recevoir des mises à jour à distance. Citer un **avantage** et un **risque de sécurité** de cette possibilité.

---

## Corrigé

### Exercice 1
1. C'est la **trilatération**.
2. On cherche (x ; y).
   - A : x² + y² = 25.
   - B : (x−8)² + y² = 25 → x² −16x +64 + y² = 25. En soustrayant A : −16x + 64 = 0 → **x = 4**.
   - Avec A : 16 + y² = 25 → y² = 9 → y = 3 (positif). 
   - Vérif C : (4−4)² + (3−10)² = 49 = 7². ✔ Donc **P(4 ; 3)**.
3. Dans un tunnel, les **signaux satellites sont bloqués** (pas de vue du ciel). Un **capteur de vitesse/roues (odomètre)** ou un **accéléromètre/gyroscope** permet d'estimer le déplacement (navigation à l'estime).

### Exercice 2
1. 130 = 128 + 2 → **1000 0010**.
2. 0101 1010 = 64 + 16 + 8 + 2 = **90 km/h**.
3. Oui : 1 octet code jusqu'à **255**, or aucune voiture de série ne dépasse 255 km/h de façon utile ici ; c'est donc suffisant.

### Exercice 3
1. 25 Mo × 8 = **200 Mbit**.
2. 200 ÷ 10 = **20 s**.
3. Donnée utile : **usure / pannes / kilométrage** (maintenance prédictive). Risque : les **trajets et habitudes** du conducteur sont transmis et pourraient être exploités.

### Exercice 4
1. (a) **capteur**, (b) **actionneur**, (c) **capteur**, (d) **actionneur**.
2. Un système embarqué est **dédié à une tâche**, aux **ressources limitées**, souvent **temps réel** et **autonome**, intégré dans l'objet.
3. Avantage : **corriger un défaut ou ajouter une fonction sans passer au garage**. Risque : si la mise à jour est **piratée**, un attaquant pourrait prendre le **contrôle** de fonctions de la voiture.
