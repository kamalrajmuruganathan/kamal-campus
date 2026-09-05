---
id: tale-sti2d-pc-ondes-signaux
titre: "Ondes et signaux (terminale)"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 14
prerequis:
  - Ondes et information (Première STI2D/STL — chapitre ondes-information, même parcours)
  - Nombres complexes et exponentielle complexe (Terminale STI2D/STL — transformer a·cos(ωt) + b·sin(ωt) en A·cos(ωt + φ))
  - Fonctions exponentielle et logarithme népérien (Terminale STI2D/STL — logarithme décimal)
statut: brouillon
relu_par: null
---

# Ondes et signaux (terminale)

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)


> En première, tu as appris ce qu'est une onde et comment elle transporte une
> information. En terminale, tu apprends à **regarder dedans** : un signal
> périodique se décompose en sinusoïdes — c'est le **spectre d'amplitude**, qui
> explique pourquoi une guitare et un piano jouant la même note ne sonnent pas
> pareil. Et tu chiffres enfin le « volume » d'un son avec le **niveau sonore en
> décibels**, une échelle logarithmique : le log décimal de ton cours de maths
> sert ici tous les jours.

---

## 1. Ce que tu dois déjà savoir (première)

Ce chapitre prolonge le chapitre « Ondes et information » de première, à relire
d'abord. En quatre lignes :

- une onde transporte de l'**énergie sans transporter de matière** ; mécanique
  (le son : milieu matériel indispensable) ou électromagnétique (se propage
  dans le vide à $c = 3{,}00 \times 10^8$ m·s⁻¹) ;
- $\lambda = v\,T = \dfrac{v}{f}$, et la **fréquence ne change pas** quand
  l'onde change de milieu ;
- l'**intensité acoustique** est une puissance par unité de surface :
  $I = \dfrac{P}{S}$, en W·m⁻² ;
- transmettre une information = propager une **onde modulée selon un code**
  entre un émetteur et un récepteur.

Rien de tout cela n'est redémontré ici : on le **réutilise**.

---

## 2. Le spectre d'amplitude d'un signal périodique

### Le signal sinusoïdal, brique élémentaire

Le signal périodique le plus simple est le signal **sinusoïdal** :

$$s(t) = A\cos(2\pi f t + \varphi)$$

avec $A$ l'**amplitude** (unité du signal : V, Pa…), $f$ la **fréquence** en Hz
et $\varphi$ la **phase à l'origine**. C'est exactement la forme
$A\cos(\omega t + \varphi)$, avec $\omega = 2\pi f$, que ton chapitre de maths
sur l'exponentielle complexe t'apprend à obtenir à partir de
$a\cos(\omega t) + b\sin(\omega t)$ : une somme de cosinus et de sinus **de même
fréquence** reste un signal sinusoïdal de cette fréquence.

### Fondamental et harmoniques

> **Propriété (admise).** Tout signal **périodique** de fréquence $f_1$ peut se
> décomposer en une somme de signaux **sinusoïdaux** de fréquences
> $f_1,\ 2f_1,\ 3f_1,\ \dots$
> - la sinusoïde de fréquence $f_1$ est le **fondamental** ;
> - celle de fréquence $n f_1$ est l'**harmonique de rang $n$**.

$$\boxed{f_n = n \times f_1 \qquad (n = 2,\ 3,\ \dots)}$$

> **Exemple.** Un signal périodique de fréquence $f_1 = 100$ Hz ne peut contenir
> que les fréquences $100$, $200$, $300$, $400$ Hz… L'harmonique de rang $3$ est
> à $3 \times 100 = 300$ Hz — pas à $103$ Hz.

### Le spectre d'amplitude

> **Définition.** Le **spectre d'amplitude** d'un signal est le graphique qui
> donne l'**amplitude de chaque composante sinusoïdale en fonction de sa
> fréquence**. Chaque composante y apparaît comme une **raie** verticale.

| Signal | Spectre d'amplitude |
|---|---|
| sinusoïdal pur (fréquence $f$) | **une seule raie**, à $f$ |
| périodique non sinusoïdal (fréquence $f_1$) | **plusieurs raies**, à $f_1$, $2f_1$, $3f_1$… |

> **Exemple.** $u(t) = 5{,}0\cos(2\pi \times 100\,t) + 1{,}5\cos(2\pi \times 300\,t)$
> (en V) : deux raies — $(100 \text{ Hz},\ 5{,}0 \text{ V})$ et
> $(300 \text{ Hz},\ 1{,}5 \text{ V})$. Fondamental à $100$ Hz, harmonique de
> rang $3$. La fréquence **du signal** est $100$ Hz, sa période
> $T = \dfrac{1}{100} = 10$ ms.

> ⚠️ **Bien lire les axes.** L'oscillogramme montre le signal **en fonction du
> temps** (axe en s) ; le spectre le montre **en fonction de la fréquence** (axe
> en Hz). Ce sont deux représentations du **même** signal.

---

## 3. Ondes sonores : hauteur et timbre

Un son musical est un signal périodique. Deux attributs perçus par l'oreille se
lisent directement sur son spectre :

| Perception | Ce qui la détermine |
|---|---|
| **Hauteur** (grave / aigu) | la **fréquence du fondamental** $f_1$ |
| **Timbre** (« couleur » du son) | la **composition en harmoniques** : nombre et amplitudes relatives des raies |

> **Exemple.** Un diapason et une guitare jouent le la à $440$ Hz.
> - Le diapason produit un **son pur** : une seule raie, à $440$ Hz.
> - La guitare produit un **son composé** : raies à $440$, $880$, $1320$ Hz…
> Même fondamental, donc **même hauteur** — mais des harmoniques différents,
> donc des **timbres** différents. C'est pour cela qu'on les distingue à
> l'oreille.

> ⚠️ Deux sons de même hauteur n'ont pas forcément le même spectre : ils
> partagent seulement la **raie du fondamental**. Le timbre, lui, est dans le
> reste du spectre.

---

## 4. Intensité acoustique et niveau sonore

### L'intensité acoustique (rappel élargi)

$$\boxed{I = \frac{P}{S}} \qquad I \text{ en W·m}^{-2},\ P \text{ en W},\ S \text{ en m}^2$$

Pour une source qui émet dans toutes les directions, à la distance $d$ la
puissance se répartit sur une sphère de surface $S = 4\pi d^2$ :

$$I = \frac{P}{4\pi d^2}$$

> **Exemple.** À deux fois plus loin, $d^2$ est multiplié par $4$ : l'intensité
> est **divisée par 4**. À dix fois plus loin, divisée par $100$.

### Pourquoi une échelle logarithmique ?

L'oreille perçoit des intensités de $I_0 = 1{,}0 \times 10^{-12}$ W·m⁻² (seuil
d'audibilité) à environ $1$ W·m⁻² (seuil de douleur) : **douze ordres de
grandeur**. Une échelle linéaire est inutilisable ; on comprime avec le
**logarithme décimal** — celui de ton chapitre de maths, $\log(10^n) = n$.

### Le niveau sonore ou niveau d'intensité sonore

$$\boxed{L = 10 \log\left(\frac{I}{I_0}\right)} \qquad
L \text{ en décibels (dB)},\ I \text{ et } I_0 \text{ en W·m}^{-2},\ I_0 = 1{,}0 \times 10^{-12} \text{ W·m}^{-2}$$

Dans l'autre sens :

$$\boxed{I = I_0 \times 10^{L/10}}$$

> **Exemple.** $I = 1{,}0 \times 10^{-5}$ W·m⁻² :
> $L = 10\log\left(\dfrac{10^{-5}}{10^{-12}}\right) = 10\log(10^{7}) = 70$ dB.
> Et réciproquement, $L = 70$ dB redonne
> $I = 10^{-12} \times 10^{7} = 1{,}0 \times 10^{-5}$ W·m⁻².

### Les deux réflexes « décibels »

| Sur l'intensité $I$ | Sur le niveau $L$ |
|---|---|
| $I \times 2$ | $L + 3$ dB (car $10\log 2 \approx 3{,}0$) |
| $I \times 10$ | $L + 10$ dB |
| $I \times 100$ | $L + 20$ dB |
| $I \div 100$ | $L - 20$ dB |

> **Exemple.** Deux machines identiques côte à côte : les **intensités**
> s'ajoutent, $I \to 2I$, donc le niveau passe de $80$ dB à $83$ dB — et
> sûrement pas à $160$ dB. **Les niveaux sonores ne s'additionnent jamais.**

### Ordres de grandeur à connaître pour situer

| Situation | Niveau sonore (indicatif) |
|---|---|
| seuil d'audibilité | $0$ dB |
| conversation | $\approx 60$ dB |
| risque auditif (exposition prolongée) | $\approx 85$ dB |
| concert, discothèque | $\approx 100$ dB |
| seuil de douleur | $\approx 120$ dB |

---

## 5. Ondes électromagnétiques et transmission d'informations

### La relation fréquence – longueur d'onde

Dans le vide (et en pratique dans l'air), toutes les ondes électromagnétiques
vont à $c = 3{,}00 \times 10^8$ m·s⁻¹ :

$$\boxed{c = \lambda \times f} \qquad \lambda \text{ en m},\ f \text{ en Hz},\ c \text{ en m·s}^{-1}$$

> **Exemple.** Radio FM à $f = 100$ MHz $= 1{,}00 \times 10^8$ Hz :
> $\lambda = \dfrac{c}{f} = \dfrac{3{,}00 \times 10^8}{1{,}00 \times 10^8} = 3{,}00$ m.
> Wi-Fi à $2{,}4$ GHz : $\lambda = \dfrac{3{,}0 \times 10^8}{2{,}4 \times 10^9} \approx 13$ cm.

> ⚠️ **Convertis d'abord** : MHz $= 10^6$ Hz, GHz $= 10^9$ Hz, nm $= 10^{-9}$ m.
> C'est là que se perdent les points, pas dans la formule.

### Le spectre électromagnétique (rappel de première)

Par fréquence croissante — donc longueur d'onde décroissante :
ondes radio · micro-ondes · infrarouge · **visible** ($\approx 400$ à $800$ nm) ·
ultraviolet · rayons X · rayons gamma. Les deux classements sont inverses l'un
de l'autre.

### Transmettre une information

Le principe reste celui de première : l'information **module** une onde
porteuse, le récepteur décode. Ce que la terminale ajoute, c'est le choix du
**canal de transmission** :

| Canal | Onde utilisée | Exemples |
|---|---|---|
| **Propagation libre** | onde électromagnétique dans l'air (ondes hertziennes) | radio, télévision, 4G/5G, Wi-Fi, Bluetooth |
| **Propagation guidée** | onde confinée dans un guide | câble coaxial (signal électrique), **fibre optique** (lumière, souvent infrarouge) |

Deux critères pour comparer les canaux :

- l'**atténuation** : l'amplitude du signal diminue au fil de la propagation
  (absorption par le milieu) — très faible dans une fibre optique, d'où son
  usage pour les longues distances ;
- la **fréquence de la porteuse** : plus elle est élevée, plus on peut
  transporter d'informations par seconde, mais plus l'onde est facilement
  absorbée par les obstacles (c'est le compromis des réseaux mobiles).

---

## 6. Méthodes

### Lire un spectre d'amplitude

1. Repère la raie de **plus basse fréquence** : c'est le fondamental $f_1$ —
   il donne la **fréquence du signal** et la **hauteur** du son.
2. Vérifie que les autres raies sont aux **multiples** $2f_1$, $3f_1$… et
   identifie le **rang** de chaque harmonique : $n = \dfrac{f_n}{f_1}$.
3. Une seule raie → son **pur** (sinusoïdal). Plusieurs raies → son
   **composé** ; les amplitudes relatives font le **timbre**.
4. La période du signal s'en déduit : $T = \dfrac{1}{f_1}$.

### Manier le niveau sonore sans se tromper

1. Toujours passer par l'**intensité** : c'est $I$ qui s'ajoute (plusieurs
   sources) et qui se calcule ($I = P/(4\pi d^2)$), jamais $L$.
2. $I \to L$ : $L = 10\log(I/I_0)$ — touche **log** de la calculatrice (log
   décimal), pas **ln**.
3. $L \to I$ : $I = I_0 \times 10^{L/10}$.
4. Contrôle l'ordre de grandeur : entre $0$ et $120$ dB pour un son ; un
   résultat de $840$ dB signale un oubli de $I_0$ ou une erreur de puissance
   de dix.

---

## 7. Tableau récapitulatif

| À savoir | Formule / règle | Unités |
|---|---|---|
| Signal sinusoïdal | $s(t) = A\cos(2\pi f t + \varphi)$ | $f$ en Hz |
| Harmonique de rang $n$ | $f_n = n\,f_1$ | Hz |
| Spectre d'amplitude | amplitude de chaque composante **en fonction de la fréquence** | — |
| Hauteur | fréquence du **fondamental** | Hz |
| Timbre | **harmoniques** (nombre, amplitudes relatives) | — |
| Intensité acoustique | $I = \dfrac{P}{S}$ ; source isotrope : $I = \dfrac{P}{4\pi d^2}$ | W·m⁻² |
| Niveau sonore | $L = 10\log\left(\dfrac{I}{I_0}\right)$, $I_0 = 1{,}0 \times 10^{-12}$ W·m⁻² | dB |
| Sens inverse | $I = I_0 \times 10^{L/10}$ | W·m⁻² |
| Réflexes dB | $I \times 2 \Rightarrow +3$ dB ; $I \times 10 \Rightarrow +10$ dB | — |
| Ondes électromagnétiques | $c = \lambda f$, $c = 3{,}00 \times 10^8$ m·s⁻¹ | $\lambda$ en m, $f$ en Hz |
| Transmission | porteuse **modulée** ; propagation **libre** ou **guidée** (fibre) | — |

---

## 8. Les erreurs qui coûtent des points

1. **Additionner les niveaux sonores** : deux sources de $60$ dB donnent
   $63$ dB, pas $120$ dB. Ce sont les **intensités** (en W·m⁻²) qui
   s'ajoutent, jamais les décibels.
2. **Utiliser ln au lieu de log** dans $L = 10\log(I/I_0)$ : le niveau sonore
   est défini avec le **logarithme décimal**. Avec ln, $10^{-5}/10^{-12}$
   donnerait $161$ dB au lieu de $70$ dB.
3. **Confondre hauteur et timbre** : la hauteur est la fréquence du
   **fondamental** ; le timbre vient des **harmoniques**. Supprimer les
   harmoniques change le timbre, pas la hauteur.
4. **Prendre la raie la plus haute (ou la dernière) pour la fréquence du
   signal** : la fréquence du signal est celle du fondamental, la raie de
   **plus basse fréquence** — même si un harmonique a une amplitude plus
   grande.
5. **Oublier les conversions** MHz/GHz → Hz et nm → m dans $c = \lambda f$ :
   une erreur de $10^3$ sur la fréquence déplace l'onde d'un domaine entier du
   spectre.
6. **Oublier que $I$ décroît en $1/d^2$** : doubler la distance divise $I$ par
   $4$ (soit $-6$ dB), pas par $2$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Ondes et signaux »),
extrait via WebFetch depuis le PDF officiel cache.media.education.gouv.fr
(spe261_annexe_1158935.pdf). À confronter au PDF avant publication.

Contenus couverts, tels que listés dans l'extraction :
- « Notion d'onde ; spectre d'amplitude ; transmission d'un signal » → § 1
  (rappel actif, le détail est dans le chapitre de première ondes-information
  du même parcours, cité en prérequis et non répété), § 2 (spectre), § 5
  (transmission).
- « Ondes sonores : hauteur, timbre, intensité acoustique, niveau sonore »
  → § 3-4.
- « Ondes électromagnétiques : spectre, transmission d'informations » → § 5.

Liens inter-chapitres assumés :
- § 2 renvoie au chapitre de maths complexes-exponentielle (même parcours) pour
  la forme A·cos(ωt+φ) obtenue à partir de a·cos(ωt) + b·sin(ωt) — le
  programme de maths cite explicitement cette capacité.
- § 4 renvoie au chapitre exponentielle-logarithme (lien ln / log décimal,
  explicitement au programme de maths).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La décomposition en fondamental + harmoniques est présentée comme propriété
  ADMISE (pas de série de Fourier nommée) : vérifier la formulation exacte du
  BO (« spectre d'amplitude ») et le niveau d'exigence attendu.
- I₀ = 1,0×10⁻¹² W·m⁻² : valeur conventionnelle du seuil d'audibilité à
  1 kHz ; l'extraction locale ne la donne pas. En sujet de bac elle est
  normalement fournie.
- § 5 « transmission » : propagation libre / guidée, atténuation et le
  compromis fréquence de porteuse / quantité d'information transmise sont la
  lecture usuelle de « transmission d'informations » en STI2D — vérifier sur
  le PDF les capacités exactes (le mot « débit » n'a volontairement pas été
  employé comme grandeur).
- Ordres de grandeur du tableau des niveaux sonores (60, 85, 100, 120 dB) :
  valeurs usuelles, non fournies par le texte.
- Bornes du visible 400–800 nm : reprises du chapitre de première (usage ;
  certains manuels retiennent 380–780).

Calculs vérifiés numériquement : 10·log(10⁷) = 70 dB ; 10⁻¹²×10⁷ = 10⁻⁵ ;
10·log 2 = 3,01 ; λ(FM 100 MHz) = 3,00 m ; λ(2,4 GHz) = 0,125 m ≈ 13 cm ;
T = 1/100 = 10 ms.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
