---
id: "sj-snt-06"
titre: "SNT — Randonnée et GPS"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : Randonnée et GPS

**Durée : 1 heure — Barème sur 20 points.**

Une randonneuse utilise une montre GPS. On étudie la géolocalisation, l'altitude codée, le débit d'une carte téléchargée et les traces numériques.

---

## Exercice 1 — Se localiser par satellite (6 points)

La montre reçoit les signaux de plusieurs satellites. On modélise trois satellites projetés au sol dans un repère (unités : km).

- Satellite A projeté en (0 ; 0), distance mesurée **10**.
- Satellite B projeté en (12 ; 0), distance mesurée **10**.
- Satellite C projeté en (6 ; 20), distance mesurée **12**.

1. Comment s'appelle la méthode de calcul de position à partir de ces distances ?
2. Montrer par le calcul que la randonneuse se trouve au point **P(6 ; 8)**.
3. Le GPS a besoin d'au moins **4 satellites** en pratique (au lieu de 3). Expliquer pourquoi (indice : horloge).

---

## Exercice 2 — Coder l'altitude en binaire (4 points)

L'altitude (en dizaines de mètres, entier positif) est codée sur **1 octet**.

1. La randonneuse est à une valeur codée **1010 0011**. Quel entier décimal cela représente-t-il ?
2. Elle atteint la valeur **200**. Écrire **200** en binaire sur 8 bits.
3. Quelle est la plus grande valeur codable sur 1 octet ?

---

## Exercice 3 — Télécharger la carte (5 points)

Avant de partir, elle télécharge la carte de la région : **480 Mo**. Le débit est de **12 Mbit/s** (1 octet = 8 bits).

1. Convertir 480 Mo en mégabits.
2. Calculer la **durée du téléchargement** en secondes, puis en minutes.
3. Pourquoi est-il utile de **télécharger la carte à l'avance** avant une randonnée ?

---

## Exercice 4 — Traces GPS et vie privée (5 points)

La montre enregistre la trace du parcours (suite de points datés).

1. Citer **deux informations** contenues dans un point de la trace.
2. La randonneuse partage sa trace sur un réseau sportif. Quel **risque pour la vie privée** cela pose-t-il ?
3. Le GPS **ne fait que recevoir** les signaux : les satellites ne savent pas où se trouve la montre. Expliquer cette affirmation.

---

## Corrigé

### Exercice 1
1. C'est la **trilatération** (croisement de distances).
2. On cherche (x ; y).
   - A : x² + y² = 100.
   - B : (x−12)² + y² = 100 → x² −24x +144 + y² = 100. En soustrayant A : −24x + 144 = 0 → **x = 6**.
   - Avec A : 36 + y² = 100 → y² = 64 → y = 8 (positif). 
   - Vérif C : (6−6)² + (8−20)² = 144 = 12². ✔ Donc **P(6 ; 8)**.
3. Le calcul repose sur des **temps de trajet** très précis ; la montre n'a pas d'horloge atomique. Un **4ᵉ satellite** sert à corriger le **décalage de son horloge**, donc à fiabiliser distances et altitude.

### Exercice 2
1. 1010 0011 = 128 + 32 + 2 + 1 = **163**.
2. 200 = 128 + 64 + 8 → **1100 1000**. (Vérif : 128+64=192, +8=200.)
3. 2⁸ − 1 = **255**.

### Exercice 3
1. 480 × 8 = **3 840 Mbit**.
2. Durée = 3 840 ÷ 12 = **320 s**, soit 320 ÷ 60 ≈ **5,3 min** (5 min 20).
3. En montagne, le **réseau mobile est souvent absent** : avoir la carte hors-ligne permet de se repérer sans connexion (et économise la batterie / les données).

### Exercice 4
1. Par exemple : la **latitude et la longitude**, l'**altitude**, l'**heure/date**, parfois la vitesse.
2. Partager ses traces révèle ses **lieux et horaires habituels** (domicile, itinéraires) : cela peut être exploité (cambriolage, suivi).
3. Le GPS **écoute** les signaux émis par les satellites et calcule sa position **lui-même** ; il n'émet rien vers eux. Les satellites ne reçoivent donc aucune information sur la montre.
