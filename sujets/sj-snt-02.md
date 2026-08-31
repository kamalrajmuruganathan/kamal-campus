---
id: "sj-snt-02"
titre: "SNT — Trottinettes en libre-service"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : Trottinettes électriques en libre-service

**Durée : 1 heure — Barème sur 20 points.**

Une application permet de louer des trottinettes électriques géolocalisées. On étudie la localisation, les données et l'électronique embarquée.

---

## Exercice 1 — Localiser une trottinette (6 points)

Une trottinette envoie sa position. Trois bornes fixes reçoivent son signal. On travaille dans un repère où les distances sont en centaines de mètres.

- Borne A est en (0 ; 0) et mesure une distance de **5** à la trottinette.
- Borne B est en (6 ; 0) et mesure une distance de **5**.
- Borne C est en (3 ; 8) et mesure une distance de **4**.

1. Comment s'appelle la méthode qui consiste à croiser plusieurs distances mesurées pour trouver une position ?
2. En résolvant le système, montrer que la trottinette est au point **P(3 ; 4)**.
3. Expliquer pourquoi **deux bornes seulement** ne suffisent pas toujours à trouver une position unique.

---

## Exercice 2 — Numéro d'inventaire en binaire (4 points)

Chaque trottinette porte un numéro codé sur **1 octet**.

1. La trottinette de Léa a le numéro **150**. Écrire **150 en binaire** sur 8 bits.
2. L'atelier lit l'étiquette **1000 1110**. Quel est le numéro décimal ?
3. Combien de trottinettes différentes peut-on numéroter avec 1 octet ?

---

## Exercice 3 — Autonomie et débit de données (5 points)

La trottinette envoie sa position au serveur **toutes les 10 secondes**. Chaque message pèse **120 octets**.

1. Combien de messages envoie-t-elle en **1 heure** ?
2. Quelle quantité de données (en kilo-octets, 1 ko = 1000 o) cela représente-t-il en 1 heure ?
3. Pourquoi l'application ne demande-t-elle pas la position **10 fois par seconde** ? Donner deux raisons.

---

## Exercice 4 — Système embarqué et sécurité (5 points)

La trottinette contient un microcontrôleur, un module GPS, un module 4G et une batterie.

1. Pourquoi dit-on que la trottinette est un **objet connecté** (IoT) ?
2. Citer une **donnée personnelle** collectée par l'application et un risque pour la vie privée.
3. Le module GPS **reçoit** mais **n'émet pas** de signal vers les satellites. Expliquer d'où vient alors la position calculée.

---

## Corrigé

### Exercice 1
1. C'est la **trilatération** (croisement de distances). À ne pas confondre avec la triangulation, qui utilise des angles.
2. On cherche (x ; y). 
   - A : x² + y² = 25.
   - B : (x−6)² + y² = 25 → x² −12x +36 + y² = 25. En soustrayant l'équation de A : −12x + 36 = 0 → **x = 3**.
   - Avec A : 9 + y² = 25 → y² = 16 → y = 4 (on garde y > 0). 
   - Vérif avec C : (3−3)² + (4−8)² = 0 + 16 = 16 = 4². ✔ Donc **P(3 ; 4)**.
3. Avec deux bornes, les deux cercles se coupent généralement en **deux points** : une troisième mesure lève l'ambiguïté.

### Exercice 2
1. 150 = 128 + 16 + 4 + 2 → **1001 0110**. (Vérif : 128+16=144, +4=148, +2=150.)
2. 1000 1110 = 128 + 8 + 4 + 2 = **142**.
3. 2⁸ = **256** numéros différents (de 0 à 255).

### Exercice 3
1. En 1 h = 3 600 s, un message toutes les 10 s → 3 600 ÷ 10 = **360 messages**.
2. 360 × 120 = 43 200 octets = **43,2 ko**.
3. Par exemple : cela **userait la batterie** et **saturerait le réseau / le serveur** inutilement, alors qu'une position toutes les 10 s suffit à suivre une trottinette.

### Exercice 4
1. Elle possède des **capteurs**, un **microcontrôleur** et se **connecte à Internet** (4G) pour échanger des données : c'est un objet connecté.
2. Par exemple la **position / les trajets** de l'utilisateur : on pourrait reconstituer ses habitudes de déplacement (domicile, travail).
3. Le GPS **reçoit** les signaux datés de plusieurs satellites, mesure les temps de trajet, en déduit les distances, puis calcule sa position **localement** par trilatération.
