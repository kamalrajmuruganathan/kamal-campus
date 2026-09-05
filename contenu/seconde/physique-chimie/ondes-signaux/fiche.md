---
id: 2nde-pc-ondes-signaux
titre: "Ondes et signaux"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019"
theme: "Ondes et signaux"
duree_lecture_min: 13
prerequis:
  - Lumière et vision (cycle 4)
  - Circuits électriques (cycle 4)
statut: brouillon
relu_par: null
---

# Ondes et signaux

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)


> Trois sujets réunis par une idée commune : **transporter de l'information**. La lumière qui
> traverse une lentille, le son qui se propage, le courant qui parcourt un capteur — chacun
> porte un signal.

---

## 1. Propagation de la lumière

La lumière se propage **en ligne droite** dans un milieu homogène, et sa vitesse dans le vide
vaut

$$\boxed{c = 3{,}00 \times 10^{8}\ \text{m·s}^{-1}}$$

### Distances astronomiques

$$d = c \times \Delta t$$

L'**année-lumière** (a.l.) est la distance parcourue par la lumière en un an.
C'est une **distance**, pas une durée.

> **Exemple.** Une étoile à $4$ a.l. : sa lumière a mis $4$ ans à nous parvenir. On la voit
> telle qu'elle était il y a $4$ ans.

---

## 2. Réfraction et lentilles

### Lois de Snell-Descartes

Lorsqu'un rayon passe d'un milieu à un autre :

$$\boxed{n_1 \sin i_1 = n_2 \sin i_2}$$

où $n$ est l'**indice de réfraction** du milieu (sans unité, $n \geqslant 1$).

> Les angles se mesurent **par rapport à la normale**, jamais par rapport à la surface.

### Lentilles convergentes

| Grandeur | Symbole | Relation |
|---|---|---|
| Distance focale | $f'$ | en mètres |
| Vergence | $C$ | $C = \dfrac{1}{f'}$, en dioptries (δ) |

**Les trois rayons particuliers** :
1. Un rayon passant par le **centre optique** n'est pas dévié
2. Un rayon **parallèle à l'axe** ressort en passant par le **foyer image** $\mathrm{F}'$
3. Un rayon passant par le **foyer objet** $\mathrm{F}$ ressort **parallèle à l'axe**

Deux rayons suffisent pour construire l'image ; le troisième sert de vérification.

---

## 3. Signaux sonores

Le son est une **onde mécanique** : il a besoin d'un **milieu matériel** pour se propager.

> ⚠️ **Le son ne se propage pas dans le vide.** La lumière, si. C'est la différence essentielle
> entre les deux.

$$v_{\text{son dans l'air}} \approx 340\ \text{m·s}^{-1}$$

| Grandeur | Symbole | Unité | Perception |
|---|---|---|---|
| Période | $T$ | s | — |
| Fréquence | $f = \dfrac{1}{T}$ | Hz | **hauteur** du son |
| Niveau d'intensité | $L$ | dB | **force** du son |

$$\boxed{f = \frac{1}{T}}$$

> **Domaine audible** : environ $20$ Hz à $20\,000$ Hz.
> En dessous : infrasons. Au-dessus : ultrasons.

---

## 4. Signaux et capteurs

### Loi d'Ohm

$$\boxed{U = R \times I}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $U$ | tension | volt (V) |
| $R$ | résistance | ohm (Ω) |
| $I$ | intensité | ampère (A) |

### Lois des circuits

| Montage | Tension | Intensité |
|---|---|---|
| **Série** | $U = U_1 + U_2$ | $I$ **identique** partout |
| **Dérivation** | $U$ **identique** | $I = I_1 + I_2$ |

### Capteurs

Un **capteur** convertit une grandeur physique en grandeur électrique.

| Capteur | Grandeur mesurée |
|---|---|
| Thermistance | température |
| Photorésistance | éclairement |
| Microphone | pression acoustique |

On utilise sa **courbe d'étalonnage** pour remonter à la grandeur mesurée à partir de la
tension ou de la résistance lue.

---

## 5. À retenir absolument

| | |
|---|---|
| Vitesse de la lumière | $c = 3{,}00 \times 10^8$ m·s⁻¹ |
| Année-lumière | une **distance** |
| Snell-Descartes | $n_1 \sin i_1 = n_2 \sin i_2$ |
| Vergence | $C = \dfrac{1}{f'}$ en dioptries |
| Son | onde **mécanique**, ne se propage pas dans le vide |
| Fréquence | $f = \dfrac{1}{T}$, en hertz |
| Loi d'Ohm | $U = RI$ |
| Série / dérivation | $I$ constant / $U$ constante |

---

## 6. Les erreurs qui coûtent des points

1. **Croire que le son se propage dans le vide.** Seules les ondes électromagnétiques le font.
2. **Prendre l'année-lumière pour une durée.** C'est une distance.
3. **Mesurer les angles par rapport à la surface** au lieu de la normale, en réfraction.
4. **Confondre fréquence et niveau sonore** : la fréquence donne la **hauteur** (grave ou
   aigu), les décibels donnent la **force**.
5. **Oublier de convertir** les millimètres en mètres avant de calculer une vergence.
6. **Intervertir les lois série et dérivation.**
7. **Oublier les unités** — un résultat sans unité est faux en physique-chimie.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de seconde générale et technologique,
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc2nde.pdf, thème « Ondes et signaux »,
ligne 2273 du .txt extrait ; « Signaux et capteurs » ligne 2648).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La relation de conjugaison des lentilles et le grandissement sont-ils au programme de
  SECONDE ou seulement de première ? Je ne les ai PAS inclus, me limitant à la construction
  géométrique — point de périmètre à trancher.
- Le programme de seconde couvre-t-il la réflexion totale et l'angle limite ?
- Les lois de Snell-Descartes sont-elles exigibles en seconde, ou introduites en première ?
- Le niveau d'intensité sonore en décibels est-il quantitatif (formule logarithmique) ou
  seulement qualitatif en seconde ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
