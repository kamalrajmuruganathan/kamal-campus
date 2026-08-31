---
id: snt-seconde-entrainement
titre: "Entraînement SNT — Seconde"
examen: "Seconde — SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — Sciences Numériques et Technologie (entraînement)

**Durée conseillée : 1 heure — Barème sur 20 points.**

Le sujet couvre plusieurs thèmes du programme : Internet, le Web, les données structurées et la localisation (GPS).

---

## Partie A — Internet (5 points)

**Question A.1 (2 points).** Expliquer ce qu'est une **adresse IP** et à quoi elle sert. Quelle est la différence entre une adresse IP et une adresse MAC ?

**Question A.2 (2 points).** Sur Internet, les données sont découpées en **paquets**. Citer deux avantages de cette commutation par paquets par rapport à l'envoi d'un fichier en un seul bloc.

**Question A.3 (1 point).** À quoi sert un **routeur** dans le réseau Internet ?

---

## Partie B — Le Web (5 points)

**Question B.1 (2 points).** Distinguer **Internet** et le **Web** : sont-ce deux termes équivalents ? Justifier.

**Question B.2 (2 points).** Dans l'URL `https://www.education.gouv.fr/lycee/programmes`, identifier : le protocole, le nom de domaine et le chemin de la ressource.

**Question B.3 (1 point).** Qu'est-ce qu'un **hyperlien** et quel rôle joue-t-il dans la navigation Web ?

---

## Partie C — Les données et leur traitement (5 points)

**Question C.1 (2 points).** Un fichier au format **CSV** contient les lignes suivantes :

```
nom,ville,age
Diallo,Lyon,15
Nguyen,Paris,17
Martin,Lyon,16
```

Combien de descripteurs (colonnes) et combien d'enregistrements (lignes de données) ce fichier contient-il ? Citer les descripteurs.

**Question C.2 (2 points).** Que signifie le fait qu'une donnée soit **structurée** ? Donner un exemple d'application concrète d'un traitement de données personnelles collectées par un service en ligne.

**Question C.3 (1 point).** Citer un principe important du **RGPD** concernant la protection des données personnelles.

---

## Partie D — Localisation et GPS (5 points)

**Question D.1 (2 points).** Le système **GPS** permet de se localiser sur Terre. Sur quel principe physique repose le calcul de la position par un récepteur GPS ?

**Question D.2 (2 points).** Combien de satellites, au minimum, un récepteur doit-il capter pour déterminer sa position (latitude, longitude, altitude) ? Expliquer pourquoi un seul satellite ne suffit pas.

**Question D.3 (1 point).** Citer une application concrète de la géolocalisation dans la vie quotidienne, autre que le guidage routier.

---

## Corrigé

### Partie A — Internet

**A.1.** Une **adresse IP** est un identifiant numérique attribué à chaque appareil connecté à un réseau ; elle permet de l'identifier et d'acheminer les données vers lui. L'**adresse MAC** est fixée matériellement à la carte réseau (identifiant physique unique), alors que l'adresse IP est logique et peut changer selon le réseau auquel on se connecte.

**A.2.** Avantages de la commutation par paquets : les paquets peuvent emprunter des chemins différents et être réacheminés en cas de panne d'un lien (robustesse) ; plusieurs communications partagent les mêmes câbles simultanément (meilleure utilisation du réseau) ; un paquet perdu peut être renvoyé sans retransmettre tout le fichier.

**A.3.** Un **routeur** reçoit les paquets et les dirige vers la bonne destination en choisissant le prochain nœud du réseau, de proche en proche jusqu'au destinataire.

### Partie B — Le Web

**B.1.** Non, ce ne sont pas des synonymes. **Internet** est le réseau physique mondial reliant les ordinateurs (l'infrastructure). Le **Web** est l'un des services qui fonctionnent sur Internet : un ensemble de pages reliées par des hyperliens, consultées avec un navigateur. La messagerie électronique est un autre service d'Internet distinct du Web.

**B.2.** Protocole : `https` ; nom de domaine : `www.education.gouv.fr` ; chemin de la ressource : `/lycee/programmes`.

**B.3.** Un **hyperlien** est un élément cliquable d'une page (texte ou image) qui pointe vers une autre ressource ou page ; il permet de naviguer d'une page à l'autre en suivant les liens.

### Partie C — Les données

**C.1.** Le fichier comporte **3 descripteurs** (colonnes) : `nom`, `ville`, `age`, et **3 enregistrements** (Diallo, Nguyen, Martin). La première ligne est l'en-tête décrivant les colonnes.

**C.2.** Une donnée **structurée** est organisée selon un format défini (descripteurs/valeurs, comme un tableau) permettant de la trier, filtrer ou rechercher automatiquement. Exemple : un site marchand collecte les achats des clients pour recommander des produits, ou une application de transport calcule des statistiques de fréquentation.

**C.3.** Exemples de principes du **RGPD** : consentement de la personne, finalité déterminée de la collecte, droit d'accès et de rectification, droit à l'effacement, minimisation des données collectées (on accepte une seule de ces réponses).

### Partie D — GPS

**D.1.** Le récepteur GPS mesure le **temps de propagation** des signaux émis par les satellites (qui se déplacent à la vitesse de la lumière) ; il en déduit sa distance à chaque satellite. C'est le principe de la **trilatération**.

**D.2.** Il faut au minimum **4 satellites** : trois pour déterminer les trois coordonnées spatiales (latitude, longitude, altitude) et un quatrième pour corriger le décalage de l'horloge du récepteur. Un seul satellite ne donne qu'une distance : le récepteur pourrait se trouver n'importe où sur une sphère centrée sur ce satellite.

**D.3.** Exemples : suivi d'un colis, applications sportives (course, randonnée), localisation d'un téléphone perdu, services de météo localisée, agriculture de précision (on accepte toute réponse pertinente autre que le guidage routier).
