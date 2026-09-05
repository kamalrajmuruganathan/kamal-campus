---
id: 5e-pc-signaux-sonores-lumineux
titre: "Signaux sonores et lumineux"
voie: college
niveau: cinquieme
parcours: physique-chimie
matiere: physique-chimie
programme: "Programme de physique-chimie du cycle 4 (BO) — classe de 5e"
duree_lecture_min: 12
prerequis:
  - Lire une graduation et un chronomètre (école, 6e)
  - Multiplier et diviser par 1000 (maths, 6e)
statut: brouillon
relu_par: null
---

# Signaux sonores et lumineux

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)


> Un **signal**, c'est une information qui voyage : le son d'une cloche, la lumière
> d'un phare. Dans ce chapitre, tu vas apprendre à **décrire** un son (sa fréquence, son
> niveau sonore) et à comprendre comment la **lumière se déplace** en ligne droite. Deux
> signaux très différents, mais qui nous renseignent tous les deux sur le monde.

---

## 1. Un signal sonore et sa source

Un **son** est produit par un objet qui **vibre** : une corde de guitare, un
haut-parleur, tes cordes vocales. Cette vibration fait trembler l'air tout autour, et
ce tremblement voyage jusqu'à ton oreille : c'est le **signal sonore**.

> **Exemple.** Pose ta main sur ta gorge et dis « aaaah » : tu sens ça vibrer. Arrête,
> la vibration s'arrête, le son aussi. Pas de vibration, pas de son.

> ⚠️ Un son a **toujours besoin de matière** pour se déplacer (l'air, l'eau, un mur).
> Dans le vide, il n'y a rien à faire vibrer : **le son ne s'y propage pas**.

---

## 2. La fréquence d'un son (en hertz)

Quand un objet vibre, il fait des allers-retours très rapides. La **fréquence** compte
**combien de vibrations ont lieu chaque seconde**.

- On la note $f$.
- Son unité est le **hertz**, symbole **Hz**.
- $1$ Hz veut dire **une vibration par seconde**.

Si tu connais le nombre de vibrations $N$ pendant une durée $\Delta t$ (en secondes) :

$$\boxed{f = \frac{N}{\Delta t}}$$

> **Exemple.** Un objet fait $600$ vibrations en $2$ secondes. Sa fréquence vaut
> $f = \dfrac{600}{2} = 300$ Hz. Il vibre donc $300$ fois par seconde.

### L'unité qui va avec : le kilohertz

Pour les grandes fréquences, on utilise le **kilohertz (kHz)** :

$$\boxed{1 \text{ kHz} = 1000 \text{ Hz}}$$

> Pour passer des **kHz aux Hz**, on multiplie par $1000$.
> Pour passer des **Hz aux kHz**, on divise par $1000$.
>
> $3$ kHz $= 3000$ Hz $\qquad$ $20$ kHz $= 20\,000$ Hz $\qquad$ $500$ Hz $= 0{,}5$ kHz

---

## 3. La hauteur d'un son : grave ou aigu

La **hauteur** dit si un son est **grave** (comme une grosse caisse) ou **aigu** (comme
un sifflet). Attention, ce n'est pas une question de « fort » ou « faible » ! La hauteur
dépend uniquement de la **fréquence**.

$$\boxed{\text{Plus la fréquence est } \textbf{grande}, \text{ plus le son est } \textbf{aigu}.}$$

| Fréquence | Hauteur du son | Exemple |
|---|---|---|
| **petite** (basse) | son **grave** | grosse caisse, voix d'homme |
| **grande** (élevée) | son **aigu** | sifflet, voix d'enfant |

> **Exemple.** Un son de $100$ Hz est **grave**. Un son de $4000$ Hz est **aigu**. C'est
> le même mot « hauteur » qu'en musique : les notes aiguës sont « en haut » de la portée.

> ⚠️ **Grave/aigu, ce n'est PAS fort/faible.** Un son grave peut être très fort, un son
> aigu très faible. La hauteur, c'est la **fréquence** ; le « fort ou faible », c'est le
> niveau sonore (partie 5). Deux choses différentes.

---

## 4. Infrasons, sons audibles, ultrasons

Notre oreille n'entend pas toutes les fréquences. Elle a des **limites**.

$$\boxed{\text{L'oreille humaine entend de } 20 \text{ Hz à } 20\,000 \text{ Hz } (20 \text{ kHz}).}$$

On range donc les sons en trois familles selon leur fréquence :

| Famille | Fréquence | Peut-on l'entendre ? |
|---|---|---|
| **Infrasons** | inférieure à $20$ Hz | **non**, trop grave |
| **Sons audibles** | de $20$ Hz à $20\,000$ Hz | **oui** |
| **Ultrasons** | supérieure à $20\,000$ Hz | **non**, trop aigu |

> **Exemple.** L'éléphant communique par **infrasons** (sous $20$ Hz), que nous ne
> percevons pas. La chauve-souris et le dauphin utilisent des **ultrasons** (au-dessus de
> $20\,000$ Hz) pour se repérer. Le chien, lui, entend des fréquences plus hautes que
> nous : c'est pourquoi un sifflet « silencieux » le fait réagir.

> ⚠️ **« Infra » veut dire en dessous, « ultra » veut dire au-dessus.** Les infrasons
> sont **trop graves** pour nous, les ultrasons **trop aigus**. Ne les inverse pas.

---

## 5. Le niveau sonore (en décibels)

Le **niveau sonore** indique si un son est **fort ou faible**. On le mesure avec un
**sonomètre**, en **décibels**, symbole **dB**.

| Niveau sonore | Situation |
|---|---|
| $0$ dB | seuil de l'audition (on commence à entendre) |
| $30$ dB | une chambre calme |
| $60$ dB | une conversation |
| $90$ dB | une rue très bruyante |
| $120$ dB | un concert, un avion au décollage (**douloureux**) |

> **Exemple.** Écouter de la musique à $100$ dB pendant longtemps **abîme l'oreille**, et
> les dégâts sont **définitifs**. C'est pour ça qu'on limite le volume du casque et qu'on
> fait des pauses.

> ⚠️ **Les décibels ne s'additionnent pas comme des nombres ordinaires.** Deux sons de
> $60$ dB **ne font pas** $120$ dB. L'échelle des décibels est spéciale : à ton niveau, il
> suffit de retenir que **plus il y a de décibels, plus le son est fort et dangereux**.

> **À retenir : au-delà de $85$ dB pendant longtemps, l'oreille est en danger.** Le son
> fort ne se mesure donc pas en Hz (ça, c'est la hauteur) mais bien en **dB**.

---

## 6. Un signal lumineux : source primaire ou objet diffusant

Passons à la lumière. Tout ce que ton œil voit lui envoie de la lumière. Mais cette
lumière peut avoir **deux origines** très différentes.

- Une **source primaire** **produit** sa propre lumière.
- Un **objet diffusant** ne produit **aucune** lumière : il **renvoie** dans toutes les
  directions la lumière qu'il reçoit d'ailleurs. On dit qu'il **diffuse** la lumière.

| Type | Ce qu'il fait | Exemples |
|---|---|---|
| **Source primaire** | fabrique sa lumière | Soleil, étoile, lampe allumée, flamme, écran |
| **Objet diffusant** | renvoie la lumière reçue | Lune, table, livre, mur, la plupart des objets |

> **Exemple.** Le **Soleil** est une source primaire : il produit sa lumière. La **Lune**
> n'en produit aucune : elle nous paraît brillante seulement parce qu'elle **renvoie** la
> lumière du Soleil. C'est un objet diffusant.

> ⚠️ **Un objet qu'on voit n'est pas forcément une source de lumière.** Ton cahier est
> visible parce qu'il **diffuse** la lumière de la lampe. Éteins toute lumière dans une
> pièce sans fenêtre : tu ne vois plus rien, car il n'y a plus rien à diffuser.

---

## 7. La propagation rectiligne de la lumière

Dans l'air (ou tout **milieu transparent et homogène** : l'eau claire, le verre), la
lumière se déplace **en ligne droite**. C'est la **propagation rectiligne** de la lumière.

$$\boxed{\text{Dans un milieu transparent et homogène, la lumière se propage en ligne droite.}}$$

> **Exemple.** Dans une pièce poussiéreuse, un rayon de soleil qui passe par la fenêtre
> dessine un **trait bien droit**. Les faisceaux d'un projecteur, eux aussi, sont droits.

### Le rayon lumineux

Pour représenter le chemin suivi par la lumière, on trace un **rayon lumineux** : un
**trait droit** muni d'une **flèche** qui indique le **sens** dans lequel la lumière
voyage. C'est un modèle, un dessin qui aide à raisonner.

> **Exemple — l'ombre.** Comme la lumière va tout droit, un objet opaque **arrête** les
> rayons et laisse derrière lui une zone sans lumière : c'est l'**ombre**. Si la lumière
> tournait, il n'y aurait pas d'ombre nette. L'ombre est donc une **preuve** que la
> lumière se propage en ligne droite.

> ⚠️ La lumière ne va tout droit que dans un milieu **homogène** (partout le même). Si le
> milieu change (elle passe de l'air à l'eau), le trajet peut se **casser** — mais ça,
> c'est pour plus tard.

---

## 8. Son et lumière : deux signaux, deux vitesses

Le son et la lumière ne voyagent **pas du tout** à la même vitesse.

| | Son | Lumière |
|---|---|---|
| A besoin de matière ? | **oui** (air, eau…) | **non** (voyage même dans le vide) |
| Vitesse | « lente » (~$340$ m/s dans l'air) | **énorme** (quasi instantanée) |

> **Exemple — l'orage.** Tu vois l'**éclair** tout de suite, mais tu entends le
> **tonnerre** quelques secondes plus tard. Pourtant les deux sont produits en même
> temps ! C'est parce que la **lumière va beaucoup plus vite** que le son.

---

## 9. À retenir absolument

| | |
|---|---|
| Son | produit par un objet qui **vibre**, a besoin de **matière** |
| Fréquence | nombre de vibrations par seconde, en **hertz (Hz)** |
| $1$ kHz | $= 1000$ Hz |
| Hauteur | **grave** ↔ basse fréquence ; **aigu** ↔ haute fréquence |
| Oreille humaine | entend de **$20$ Hz à $20\,000$ Hz** |
| Infrasons / ultrasons | **sous** $20$ Hz / **au-dessus** de $20$ kHz (inaudibles) |
| Niveau sonore | force du son, en **décibels (dB)**, danger au-delà de ~$85$ dB |
| Source primaire | **produit** sa lumière (Soleil, lampe) |
| Objet diffusant | **renvoie** la lumière reçue (Lune, table) |
| Propagation | la lumière va **en ligne droite** (milieu transparent homogène) |
| Rayon lumineux | trait droit + **flèche** (sens de la lumière) |

---

## 10. Les erreurs qui coûtent des points

1. **Confondre hauteur et niveau sonore.** La **hauteur** (grave/aigu) dépend de la
   **fréquence en Hz**. Le **fort/faible** dépend du **niveau sonore en dB**. Ce ne sont
   pas les mêmes grandeurs ni les mêmes unités.
2. **Se tromper d'unité : Hz ou kHz.** $20$ kHz, c'est $20\,000$ Hz. Avant de comparer
   deux fréquences, mets-les dans la **même unité** ($3$ kHz $= 3000$ Hz $>$ $500$ Hz).
3. **Inverser infrasons et ultrasons.** *Infra* = en dessous de $20$ Hz (trop grave),
   *ultra* = au-dessus de $20$ kHz (trop aigu).
4. **Croire que le son se propage dans le vide.** Non : il lui faut de la **matière**.
   La lumière, elle, traverse le vide.
5. **Croire que tout objet visible produit de la lumière.** La Lune, une table, un mur ne
   **produisent** rien : ils **diffusent** la lumière reçue.
6. **Additionner les décibels comme des nombres normaux.** Deux sons de $60$ dB ne font
   pas $120$ dB : l'échelle des décibels ne fonctionne pas ainsi.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : Programme de physique-chimie du cycle 4 (BO), classe de 5e, thème
« Des signaux pour observer et communiquer ».
Fichier : docs/programme-college-physique-chimie-cycle4.txt, section
« Signaux sonores et lumineux (5e) », lignes 51-53 :
  - « Signal sonore : fréquence (Hz), niveau sonore (dB) ; infrasons/audible/ultrasons ; hauteur. »
  - « Signal lumineux : source primaire, objet diffusant ; propagation rectiligne ; rayon lumineux. »
Extraction officielle via WebFetch depuis education.gouv.fr / eduscol
(cf. en-tête du fichier programme). À CONFRONTER AU PDF OFFICIEL avant publication.

⚠️ PÉRIMÈTRE — points à confronter au relecteur :
- FRÉQUENCE : j'ai introduit la relation f = N/Δt (nombre de vibrations par seconde) pour
  donner du sens au hertz et travailler les conversions Hz/kHz. À CONFIRMER qu'elle est
  attendue en 5e, ou seulement l'idée qualitative « nombre de vibrations par seconde ».
  Je n'ai PAS introduit la période T ni la relation T = 1/f (plutôt lycée / 4e-3e).
- La relation hauteur ↔ fréquence est traitée qualitativement (plus f grand → plus aigu),
  sans courbe ni mesure sur oscillogramme. À CONFIRMER que l'oscillogramme n'est pas exigé.
- NIVEAU SONORE en dB : traité qualitativement (échelle, seuil de danger ~85 dB, non-additivité).
  Aucune formule logarithmique (hors programme collège). Les valeurs (30/60/90/120 dB) sont
  des ordres de grandeur usuels À VÉRIFIER. Le seuil de danger « ~85 dB » suit les repères
  santé courants ; à confirmer avec le relecteur / repères officiels.
- Bornes de l'audible 20 Hz – 20 kHz : valeurs conventionnelles standard.
- VITESSE du son (~340 m/s) et exemple de l'orage : ajoutés comme culture/lien avec le thème
  « Propagation d'un signal (4e) ». Le calcul v = d/t relève de la 4e (ligne 68 et 84-86 du
  programme), je ne l'ai donc PAS introduit comme formule ici — seulement l'idée qualitative.
- La RÉFLEXION, l'ombre/pénombre détaillée, la vitesse de la lumière chiffrée et l'année-lumière
  relèvent de niveaux ultérieurs (3e, ligne 113-114) : non développés. L'ombre est citée
  uniquement comme conséquence de la propagation rectiligne.

⚠️ UNITÉS (piège n°1) : Hz/kHz (× ou ÷ 1000) — cohérence vérifiée (20 kHz = 20 000 Hz,
3 kHz = 3000 Hz). dB non additifs signalé explicitement. Aucune puissance de 10 introduite
(hors périmètre 5e), écriture des milliers avec espace fine.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
