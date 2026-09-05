---
id: 4e-pc-propagation-signal
titre: "Propagation d'un signal"
voie: college
niveau: quatrieme
parcours: physique-chimie
matiere: physique-chimie
programme: "Programme de physique-chimie du cycle 4 (BO) — classe de 4e"
duree_lecture_min: 11
prerequis:
  - Grandeurs et mesures, unités (6e-5e)
  - Vitesse et relation distance-durée (maths, 4e)
statut: brouillon
relu_par: null
---

# Propagation d'un signal

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)


> Quand tu appelles un ami, ta voix voyage jusqu'à son oreille. Quand tu regardes
> une étoile, sa lumière voyage jusqu'à ton œil. Dans les deux cas, quelque chose
> se déplace d'un point à un autre : un **signal**. Mais attention, ce qui voyage
> n'est **pas** de la matière, c'est une **information** transportée par une **onde**.

---

## 1. Un signal transporte une information

Un **signal** est ce qui permet de transmettre une **information** d'un endroit à un
autre : un son, une image, une lumière qui clignote, une onde radio.

> **Exemple.** Un phare envoie un signal lumineux aux bateaux. Le son d'une cloche
> est un signal sonore qui annonce la fin du cours. Ces deux signaux transportent une
> information, mais aucun objet ne voyage de l'émetteur au récepteur.

Une chaîne de transmission a toujours trois parties :

| Élément | Rôle | Exemple |
|---|---|---|
| **Émetteur** | fabrique le signal | une voix, un haut-parleur, une lampe |
| **Milieu** | laisse le signal se propager | l'air, l'eau, le verre, le vide |
| **Récepteur** | reçoit le signal | une oreille, un œil, un micro |

---

## 2. La propagation : une onde sans transport de matière

Le signal se propage grâce à une **onde**. Une onde, c'est une **perturbation** qui
se déplace de proche en proche dans un milieu.

L'idée essentielle, et la plus surprenante :

$$\boxed{\text{Une onde transporte de l'énergie et une information, mais PAS de matière.}}$$

> **Exemple.** Un bouchon flotte sur l'eau. Une vague arrive : le bouchon **monte et
> descend sur place**, il n'est pas emporté vers le bord. C'est la vague (la
> perturbation) qui avance, pas l'eau.

> **Exemple.** Quand tu parles, l'air n'est pas soufflé de ta bouche jusqu'à l'oreille
> de ton voisin. Chaque petite tranche d'air vibre sur place et transmet la vibration
> à la suivante, comme une file de dominos.

Autrement dit : le milieu **vibre sur place**, seule la perturbation **avance**.

---

## 3. La vitesse de propagation

Un signal ne se propage pas instantanément : il met une certaine **durée** pour
parcourir une **distance**. On définit sa **vitesse de propagation** (aussi appelée
**célérité**) :

$$\boxed{v = \frac{d}{t}}$$

| Grandeur | Symbole | Unité | Instrument / repère |
|---|---|---|---|
| Distance parcourue | $d$ | mètre (m) | règle, carte |
| Durée du trajet | $t$ | seconde (s) | chronomètre |
| Vitesse | $v$ | mètre par seconde (m/s) | — |

À partir de cette relation, on retrouve les deux autres formes :

$$d = v \times t \qquad\qquad t = \frac{d}{v}$$

> **Exemple.** Un son parcourt $d = 680$ m en $t = 2{,}0$ s. Sa vitesse vaut
> $v = \dfrac{d}{t} = \dfrac{680}{2{,}0} = 340$ m/s.

### La méthode pour un calcul

1. **Repère** la grandeur cherchée ($v$, $d$ ou $t$).
2. **Écris** la bonne forme de la relation.
3. **Convertis** toutes les valeurs dans les bonnes unités (m et s) **avant** de calculer.
4. **Calcule**, puis écris le résultat avec son **unité**.

> ⚠️ **Toujours dans le Système International** : distance en **mètres**, durée en
> **secondes**, vitesse en **m/s**. Si l'énoncé donne des km ou des minutes, convertis
> d'abord. C'est l'erreur numéro un du chapitre.

---

## 4. Les ondes sonores

Un **son** est une onde produite par un objet qui **vibre** (une corde, un haut-parleur,
tes cordes vocales). Cette vibration fait vibrer l'air autour, de proche en proche.

**Propriété essentielle : le son a besoin d'un milieu matériel pour se propager.**

$$\boxed{\text{Le son se propage dans les milieux matériels (air, eau, solides), mais PAS dans le vide.}}$$

> **Exemple.** Sous une cloche à vide dont on a retiré l'air, une sonnette qui fonctionne
> ne s'entend plus : sans matière, le son ne peut pas voyager. Dans l'espace, le vide,
> aucun bruit ne se propage.

La vitesse du son **dépend du milieu**. Elle est plus grande dans les solides et les
liquides que dans l'air :

| Milieu | Vitesse du son (valeur à connaître) |
|---|---|
| **Air** | $\approx 340$ m/s |
| Eau | $\approx 1500$ m/s |
| Acier | $\approx 5000$ m/s |

> **Exemple.** À un orage, tu vois l'éclair puis tu entends le tonnerre plus tard. La
> lumière arrive presque instantanément, mais le son met environ $3$ secondes pour
> parcourir $1$ km : compter les secondes te donne la distance de l'orage.

---

## 5. Les ondes lumineuses

La **lumière** est aussi une onde, mais très différente du son.

**Propriété essentielle : la lumière se propage dans le vide** (c'est pour cela que la
lumière du Soleil et des étoiles nous parvient) **et dans les milieux transparents**
(l'air, l'eau, le verre).

$$\boxed{\text{La lumière se propage dans le vide ET dans les milieux transparents.}}$$

> **Exemple.** La lumière du Soleil traverse le vide de l'espace pendant des minutes
> avant d'éclairer la Terre. Elle traverse ensuite l'air, puis la vitre de ta fenêtre
> (milieu transparent) pour arriver jusqu'à toi.

La vitesse de la lumière est une valeur à connaître par cœur. **Dans le vide** :

$$\boxed{c \approx 3 \times 10^{8}\ \text{m/s} = 300\,000\ \text{km/s}}$$

C'est la plus grande vitesse qui existe : rien ne va plus vite que la lumière. Elle est
**environ un million de fois plus rapide que le son**.

> ⚠️ **Écriture des grandes valeurs.** $3 \times 10^{8}$ m/s se lit « trois fois dix
> puissance huit ». Cela vaut $300\,000\,000$ m/s, soit $300\,000$ km/s. Ne confonds pas
> $10^{8}$ (huit zéros) avec $10^{6}$ ou $10^{3}$.

---

## 6. Comparer le son et la lumière

| | **Son** | **Lumière** |
|---|---|---|
| Nature | onde sonore | onde lumineuse |
| Se propage dans le vide ? | **NON** | **OUI** |
| Se propage dans un milieu matériel ? | oui (air, eau, solides) | oui, s'il est **transparent** |
| Vitesse dans l'air | $\approx 340$ m/s | $\approx 3 \times 10^{8}$ m/s |
| La plus rapide des deux | | **la lumière** |

Dans les deux cas, c'est bien une onde : elle transporte l'information **sans déplacer
la matière** du milieu.

---

## 7. Tableau récapitulatif

| | |
|---|---|
| Signal | transporte une **information** d'un émetteur à un récepteur |
| Onde | perturbation qui se propage, transporte de l'énergie **pas de matière** |
| Vitesse | $v = \dfrac{d}{t}$ ; aussi $d = v \times t$ et $t = \dfrac{d}{v}$ |
| Unités SI | $d$ en m, $t$ en s, $v$ en **m/s** |
| Son | milieu **matériel** obligatoire, **pas dans le vide**, $\approx 340$ m/s dans l'air |
| Lumière | **vide** et milieux **transparents**, $\approx 3 \times 10^{8}$ m/s |
| Le plus rapide | la **lumière** (environ un million de fois plus vite que le son) |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que l'onde emporte la matière.** Le bouchon reste sur place, l'air ne se
   déplace pas d'un bout à l'autre : seule la perturbation avance.
2. **Oublier de convertir avant de calculer.** Une distance en km ou une durée en
   minutes doivent devenir des **m** et des **s** avant d'utiliser $v = \dfrac{d}{t}$.
3. **Penser que le son se propage dans le vide.** Faux : sans matière, pas de son. Dans
   l'espace, aucun bruit. La lumière, elle, traverse le vide.
4. **Se tromper de puissance de dix** pour la lumière : c'est $3 \times 10^{8}$ m/s
   (huit zéros), pas $10^{6}$ ni $10^{3}$.
5. **Confondre les deux vitesses** : $340$ m/s c'est le **son**, $3 \times 10^{8}$ m/s
   c'est la **lumière**. Les inverser rend tout calcul absurde.
6. **Oublier l'unité** dans la réponse : un nombre seul (« $340$ ») ne veut rien dire,
   il faut « $340$ m/s ».

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie du CYCLE 4 (classe de 4e),
education.gouv.fr / BO (MENE1530367A), extrait dans
docs/programme-college-physique-chimie-cycle4.txt, section « Propagation d'un signal (4e) »
(lignes 83-86 du .txt). Contenu du programme couvert :
- transmission d'un signal par propagation d'une onde, sans transport de matière ;
- vitesse de propagation v = d/t ;
- ondes sonores (milieux matériels) et lumineuses (vide et milieux transparents),
  vitesses caractéristiques (son ~340 m/s dans l'air, lumière 3×10⁸ m/s).

Rédaction originale à partir du programme, ton collège (~13 ans). Aucun emprunt à un manuel.

⚠️ À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- Valeurs numériques secondaires (son dans l'eau ~1500 m/s, acier ~5000 m/s) données à
  titre indicatif : à conserver ou non selon le niveau d'exigence retenu en 4e ?
- L'écriture scientifique 3×10⁸ est-elle attendue en 4e, ou faut-il privilégier
  300 000 km/s ? (les puissances de 10 sont vues en maths 4e — prérequis déclaré).
- Le vocabulaire « célérité » est-il souhaité dès la 4e, ou réservé au lycée ?
- La chaîne émetteur/milieu/récepteur est un cadre pédagogique, pas un attendu explicite
  du BO : à valider.
Statut : brouillon, non relu.
-->
