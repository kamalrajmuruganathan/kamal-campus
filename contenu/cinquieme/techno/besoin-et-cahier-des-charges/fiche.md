---
id: 5e-techno-besoin-et-cahier-des-charges
titre: Besoin et cahier des charges
voie: generale
niveau: cinquieme
parcours: techno
matiere: techno
programme: Cycle 4 — Technologie (programme officiel)
duree_lecture_min: 7
prerequis:
  - Objets techniques et leurs fonctions
  - Distinguer objet naturel et objet technique
statut: brouillon
relu_par: null
---

# Besoin et cahier des charges

Un **objet technique** est un objet **conçu et fabriqué par l'être humain** pour
**répondre à un besoin**. Avant de concevoir un objet, l'ingénieur ou le concepteur
doit se poser une question essentielle : **à quel besoin cet objet doit-il répondre ?**
Ce chapitre présente comment on passe d'un **besoin** à un **cahier des charges**,
étape indispensable de toute démarche de conception.

## Le besoin

<!-- schema:bete-a-cornes-parapluie -->
![Le diagramme « bête à cornes » du parapluie répond aux trois questions qui définissent le besoin.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDIiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iMTYiIHdpZHRoPSIyMzAiIGhlaWdodD0iNjQiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxMzUiIHk9IjQxLjQ1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7DgCBxdWkgcmVuZC1pbCBzZXJ2aWNlID88L3RleHQ+PHRleHQgeD0iMTM1IiB5PSI2MC40IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hdSBwacOpdG9uPC90ZXh0PjxyZWN0IHg9IjM3MCIgeT0iMTYiIHdpZHRoPSIyMzAiIGhlaWdodD0iNjQiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0ODUiIHk9IjQxLjQ1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5TdXIgcXVvaSBhZ2l0LWlsID88L3RleHQ+PHRleHQgeD0iNDg1IiB5PSI2MC40IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdXIgbGEgcGx1aWU8L3RleHQ+PHJlY3QgeD0iMjE1IiB5PSIxMDQiIHdpZHRoPSIxOTAiIGhlaWdodD0iNDYiIHJ4PSIyMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzEwIiB5PSIxMzIiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlBhcmFwbHVpZTwvdGV4dD48cGF0aCBkPSJNIDIzMCAxMTIgUSAxMzUgMTA4IDEzNSA4MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDM5MCAxMTIgUSA0ODUgMTA4IDQ4NSA4MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDYwIDgwIEMgNjAgMjAyIDU2MCAyMDIgNTYwIDgwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMTAiIHkxPSIxNzEuNSIgeDI9IjMxMCIgeTI9IjIxNiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzEwLDIyNiAzMTUsMjE2IDMwNSwyMTYiIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSIxNDAiIHk9IjIyOCIgd2lkdGg9IjM0MCIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjMxMCIgeT0iMjUxLjQ1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EYW5zIHF1ZWwgYnV0ID88L3RleHQ+PHRleHQgeD0iMzEwIiB5PSIyNzAuNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Z2FyZGVyIGxhIHBlcnNvbm5lIGF1IHNlYzwvdGV4dD48L3N2Zz4=)
*Le diagramme « bête à cornes » du parapluie répond aux trois questions qui définissent le besoin.*
<!-- /schema -->

Le **besoin** est ce qui **manque** à une personne (l'utilisateur) et que l'objet doit
**satisfaire**. Par exemple : se protéger de la pluie, se déplacer plus vite, conserver
des aliments au frais, communiquer à distance.

Pour bien identifier un besoin, on utilise souvent la question de la **« bête à cornes »** :

- **À qui l'objet rend-il service ?** (l'utilisateur)
- **Sur quoi agit-il ?** (la matière, l'énergie ou l'information concernée)
- **Dans quel but ?** (la fonction, le service attendu)

Exemple pour un parapluie : il rend service à un piéton, il agit sur la pluie, dans le
but de **garder la personne au sec**.

## La fonction d'usage et la fonction d'estime

- La **fonction d'usage** répond à la question **« À quoi sert l'objet ? »** : c'est le
  service technique rendu (un vélo sert à se déplacer).
- La **fonction d'estime** répond à **« Pourquoi l'utilisateur choisit-il cet objet-là ? »** :
  c'est ce qui plaît (la couleur, le design, la marque, le prix).

Deux objets peuvent avoir la **même fonction d'usage** mais des **fonctions d'estime**
différentes : deux téléphones servent à téléphoner, mais on en choisit un pour son
apparence ou son prix.

## Les contraintes

Un objet technique ne peut pas être conçu n'importe comment : il doit respecter des
**contraintes**, c'est-à-dire des **limites** ou des **exigences** à respecter. On
distingue par exemple :

- des contraintes de **sécurité** (ne pas blesser l'utilisateur) ;
- des contraintes d'**environnement** (ne pas trop polluer, être recyclable) ;
- des contraintes **économiques** (un prix de fabrication limité) ;
- des contraintes d'**usage** (facile à utiliser, résistant, léger) ;
- des contraintes de **normes** et de **réglementation** (respecter les lois).

## Le cahier des charges

Le **cahier des charges** est le **document** qui **rassemble toutes les exigences**
auxquelles l'objet à concevoir doit répondre. Il traduit le besoin en **fonctions** et
en **contraintes** précises et **mesurables**.

Pour chaque exigence, on cherche à donner un **critère** (ce que l'on mesure) et un
**niveau** (la valeur attendue), parfois avec une **flexibilité** (une marge acceptée).

Exemple pour une trottinette :

- Fonction : permettre de se déplacer en ville. Critère : vitesse. Niveau : jusqu'à
  25 km/h.
- Contrainte : masse. Critère : masse totale. Niveau : moins de 12 kg.
- Contrainte : sécurité. Critère : distance de freinage. Niveau : moins de 4 m à 20 km/h.

Un bon cahier des charges permet ensuite de **comparer** plusieurs solutions et de
**vérifier**, à la fin, si l'objet fabriqué répond bien au besoin.

## Ce qu'il faut retenir

- Un **objet technique** répond à un **besoin** exprimé par un utilisateur.
- La **fonction d'usage** dit à quoi sert l'objet ; la **fonction d'estime** dit
  pourquoi on le choisit.
- Les **contraintes** sont les exigences à respecter (sécurité, environnement, coût,
  usage, normes).
- Le **cahier des charges** est le document qui rassemble fonctions et contraintes,
  avec des **critères mesurables** et des **niveaux** attendus.

## Les erreurs à éviter

- **Confondre besoin et solution.** Le besoin, c'est « se protéger de la pluie » ; le
  parapluie n'est qu'une des solutions possibles.
- **Confondre fonction d'usage et fonction d'estime.** « Servir à se déplacer » est un
  usage ; « avoir une belle couleur » relève de l'estime.
- **Écrire un cahier des charges sans critères mesurables.** « Léger » ne suffit pas :
  il faut préciser une valeur, par exemple « moins de 12 kg ».
- **Oublier les contraintes de sécurité ou d'environnement**, qui sont obligatoires.
