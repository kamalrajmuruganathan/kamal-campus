---
id: "sj-snt-05"
titre: "SNT — Réseaux sociaux et influence"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : Réseaux sociaux et influence

**Durée : 1 heure — Barème sur 20 points.**

On étudie le fonctionnement d'un réseau social de partage de vidéos courtes : publication, données, algorithme du fil et vie privée.

---

## Exercice 1 — Publier une vidéo (5 points)

Un créateur met en ligne une vidéo qui pèse **500 Mo**. Sa connexion offre un débit **montant** de **20 Mbit/s** (1 octet = 8 bits).

1. Convertir la taille de la vidéo en **mégabits (Mbit)**.
2. Calculer la **durée de l'envoi** (upload) en secondes.
3. Expliquer la différence entre le débit **montant** et le débit **descendant**, et pourquoi le montant compte ici.

---

## Exercice 2 — Le compteur d'abonnés (4 points)

Le tableau de bord code certains compteurs sur **1 octet**.

1. Écrire **210** en binaire sur 8 bits.
2. Le compteur de notifications affiche **0011 1110** : quelle valeur décimale ?
3. Un compte dépasse **255** abonnés. Pourquoi 1 octet ne suffit plus, et que faut-il faire ?

---

## Exercice 3 — L'algorithme du fil d'actualité (6 points)

Le fil (« pour toi ») n'affiche pas les vidéos par ordre chronologique.

1. Citer **deux données** de comportement utilisées par l'algorithme pour choisir les vidéos à montrer.
2. Expliquer en une ou deux phrases ce qu'est une **bulle de filtres**.
3. Donner un risque de la **désinformation** amplifiée par ces algorithmes.
4. Le réseau affiche des vidéos qui retiennent longtemps l'attention. Quel est l'**objectif économique** derrière ce choix ?

---

## Exercice 4 — Identité numérique et droit (5 points)

1. Qu'appelle-t-on l'**identité numérique** (ou « e-réputation ») d'une personne ?
2. Une photo publiée puis supprimée peut réapparaître. Expliquer pourquoi (deux raisons possibles).
3. Le créateur est mineur. Citer un droit du **RGPD** qui le protège, et le rôle du **signalement** face à un contenu haineux.

---

## Corrigé

### Exercice 1
1. 500 Mo × 8 = **4 000 Mbit**.
2. Durée = 4 000 ÷ 20 = **200 s** (3 min 20).
3. Le débit **montant** sert à **envoyer** des données (upload), le **descendant** à en **recevoir** (download). Publier une vidéo, c'est envoyer : c'est donc le débit montant qui limite, souvent plus faible que le descendant.

### Exercice 2
1. 210 = 128 + 64 + 16 + 2 → **1101 0010**. (Vérif : 128+64=192, +16=208, +2=210.)
2. 0011 1110 = 32 + 16 + 8 + 4 + 2 = **62**.
3. 1 octet code jusqu'à **255** ; au-delà il y a **débordement**. Il faut coder sur **plus de bits** (2 octets → jusqu'à 65 535).

### Exercice 3
1. Par exemple : **temps de visionnage** de chaque vidéo, **likes / partages / commentaires**, vidéos regardées en entier, recherches, abonnements.
2. La **bulle de filtres** : à force de personnaliser, l'algorithme montre surtout du contenu qui **confirme les goûts et opinions** de l'utilisateur, qui voit de moins en moins d'idées différentes.
3. Une fausse information « accrocheuse » est **beaucoup partagée**, donc mise en avant : elle se **diffuse plus vite** qu'un démenti.
4. Retenir l'attention = plus de temps passé = **plus de publicités vues**, donc **plus de revenus** pour la plateforme.

### Exercice 4
1. C'est l'**ensemble des traces et informations** associées à une personne en ligne (publications, photos, commentaires, ce que d'autres disent d'elle).
2. Parce qu'elle a pu être **copiée / téléchargée / partagée** par d'autres, ou **conservée en cache / sauvegarde** par des serveurs : on ne maîtrise plus sa diffusion.
3. Droit du RGPD : par exemple le **droit à l'effacement** (« droit à l'oubli ») ou le consentement renforcé pour les mineurs. Le **signalement** permet d'alerter la plateforme (ou la justice) pour faire **retirer** un contenu illégal.
