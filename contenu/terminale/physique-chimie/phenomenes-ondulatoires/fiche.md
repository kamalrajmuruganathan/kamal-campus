---
id: tale-spe-pc-phenomenes-ondulatoires
titre: "Phénomènes ondulatoires : diffraction, interférences, Doppler"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Ondes et signaux"
duree_lecture_min: 15
prerequis:
  - Ondes et signaux (Première spécialité)
  - Relation fondamentale λ = v·T = v/f (Première)
  - Fonction logarithme décimal (Maths spécialité)
statut: brouillon
relu_par: null
---

# Phénomènes ondulatoires : diffraction, interférences, Doppler

> La Première décrivait une onde qui se propage tout droit. La Terminale montre ce qui arrive
> quand plusieurs ondes se rencontrent, quand une onde franchit un trou, ou quand la source
> bouge. Trois phénomènes, trois formules — et un piège commun : les **puissances de 10** et
> les **unités**.

---

## 1. Intensité et niveau d'intensité sonore

### Définitions

L'**intensité sonore** $I$ mesure la puissance transportée par le son par unité de surface.
Elle s'exprime en **watts par mètre carré** ($\text{W·m}^{-2}$).

L'oreille perçoit un domaine énorme : du plus faible son audible au seuil de douleur, $I$
est multipliée par mille milliards. On rapporte donc $I$ à une **intensité de référence**

$$\boxed{I_0 = 1{,}0 \times 10^{-12}\ \text{W·m}^{-2}}$$

qui correspond au seuil d'audibilité à $1000$ Hz. On définit alors le **niveau d'intensité
sonore** $L$, en **décibels** (dB) :

$$\boxed{L = 10 \log\!\left(\frac{I}{I_0}\right)}$$

où $\log$ est le **logarithme décimal** (base 10).

> **Exemple.** Une conversation correspond à $I = 1{,}0 \times 10^{-6}\ \text{W·m}^{-2}$.
> Alors $\dfrac{I}{I_0} = \dfrac{10^{-6}}{10^{-12}} = 10^{6}$, donc
> $L = 10 \log(10^{6}) = 10 \times 6 = 60$ dB.

### Propriétés à connaître

Le logarithme transforme les multiplications en additions. Deux réflexes :

- **Multiplier $I$ par 10 ajoute 10 dB.** $\log(10 \times x) = 1 + \log x$.
- **Multiplier $I$ par 2 ajoute environ 3 dB.** $10\log 2 \approx 3{,}0$ dB.

> **Exemple.** Deux violons identiques jouant ensemble délivrent **deux fois** l'intensité d'un
> seul : le niveau ne double pas, il augmente de $3$ dB seulement. Pour gagner $10$ dB, il
> faudrait **dix** violons.

### Retrouver l'intensité à partir du niveau

On inverse la formule en appliquant $10^{(\cdots)}$ :

$$\boxed{I = I_0 \times 10^{\,L/10}}$$

> **Exemple.** Un seuil de douleur à $L = 120$ dB donne
> $I = 10^{-12} \times 10^{120/10} = 10^{-12} \times 10^{12} = 1{,}0\ \text{W·m}^{-2}$.

---

## 2. Diffraction par une ouverture

### Le phénomène

Quand une onde rencontre une **ouverture** (ou un obstacle) dont la taille $a$ est du même
ordre de grandeur que sa longueur d'onde $\lambda$, elle **s'étale** au-delà : c'est la
**diffraction**. Le phénomène est d'autant plus marqué que l'ouverture est **petite** devant
$\lambda$.

> **Exemple.** On entend une personne derrière l'angle d'un mur sans la voir : le son
> ($\lambda \sim 1$ m) est fortement diffracté par une ouverture de porte, la lumière
> ($\lambda \sim 0{,}5\ \mu$m) ne l'est presque pas.

### L'angle caractéristique

La diffraction concentre l'essentiel de l'énergie dans une **tache centrale**. Son
**demi-angle d'ouverture** $\theta$ (l'écart angulaire entre le centre et le premier
minimum) vaut :

$$\boxed{\theta = \frac{\lambda}{a}}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $\theta$ | demi-angle de diffraction | **radian** (rad) |
| $\lambda$ | longueur d'onde | mètre (m) |
| $a$ | largeur de l'ouverture | mètre (m) |

> ⚠️ $\theta$ est en **radians**, et $\lambda$ et $a$ doivent être dans la **même unité**
> (souvent des mètres) pour que le rapport soit correct. Plus la fente est fine, plus $\theta$
> est grand : la tache s'élargit.

### Mesure sur un écran

<!-- schema:diffraction -->
![Diffraction d'un laser par une fente de largeur a : la tache centrale, de largeur ℓ = 2λD/a sur l'écran, est vue sous le demi-angle θ = λ/a.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjk0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyOTQiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iMTI4IiB3aWR0aD0iNjAiIGhlaWdodD0iMjQiIHJ4PSIwIiBmaWxsPSIjZTU3MzczIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI1MCIgeT0iMTcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sYXNlcjwvdGV4dD48bGluZSB4MT0iODAiIHkxPSIxNDAiIHgyPSIyMDAiIHkyPSIxNDAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIxOTYiIHk9IjMwIiB3aWR0aD0iOCIgaGVpZ2h0PSIxMDIiIHJ4PSIwIiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iMTk2IiB5PSIxNDgiIHdpZHRoPSI4IiBoZWlnaHQ9IjEwMiIgcng9IjAiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIyMDAiIHk9IjI3MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmVudGUgZGUgbGFyZ2V1ciBhPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMjAwLDEzNCA1NjAsODAgNTYwLDIwMCAyMDAsMTQ2IiBmaWxsPSIjZjZjN2M3IiBmaWxsLW9wYWNpdHk9IjAuNiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMjAwIiB5MT0iMTQwIiB4Mj0iNTYwIiB5Mj0iODAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMCIgeTE9IjE0MCIgeDI9IjU2MCIgeTI9IjE0MCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzMTAgMTQwIEEgMTEwIDExMCAwIDAgMCAzMDguNSAxMjEuOTIiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyNCIgeT0iMTMyIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPs64PC90ZXh0PjxsaW5lIHgxPSI1NjAiIHkxPSIzMCIgeDI9IjU2MCIgeTI9IjI1MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU2MCIgeT0iMjcwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7DqWNyYW48L3RleHQ+PHBhdGggZD0iTSA1NjYuNTMgMzAgTCA1NjYuNjQgMzEgTCA1NjYuNzYgMzIgTCA1NjYuODggMzMgTCA1NjcuMDIgMzQgTCA1NjcuMTYgMzUgTCA1NjcuMyAzNiBMIDU2Ny40NSAzNyBMIDU2Ny42MSAzOCBMIDU2Ny43NiAzOSBMIDU2Ny45MSA0MCBMIDU2OC4wNyA0MSBMIDU2OC4yMiA0MiBMIDU2OC4zNyA0MyBMIDU2OC41MSA0NCBMIDU2OC42NCA0NSBMIDU2OC43NiA0NiBMIDU2OC44OCA0NyBMIDU2OC45OCA0OCBMIDU2OS4wNyA0OSBMIDU2OS4xNSA1MCBMIDU2OS4yMSA1MSBMIDU2OS4yNiA1MiBMIDU2OS4yOSA1MyBMIDU2OS4zIDU0IEwgNTY5LjMgNTUgTCA1NjkuMjcgNTYgTCA1NjkuMjMgNTcgTCA1NjkuMTcgNTggTCA1NjkuMDkgNTkgTCA1NjguOTkgNjAgTCA1NjguODggNjEgTCA1NjguNzUgNjIgTCA1NjguNiA2MyBMIDU2OC40NCA2NCBMIDU2OC4yNyA2NSBMIDU2OC4wOSA2NiBMIDU2Ny45IDY3IEwgNTY3LjcgNjggTCA1NjcuNSA2OSBMIDU2Ny4zIDcwIEwgNTY3LjExIDcxIEwgNTY2LjkxIDcyIEwgNTY2LjczIDczIEwgNTY2LjU2IDc0IEwgNTY2LjQgNzUgTCA1NjYuMjcgNzYgTCA1NjYuMTYgNzcgTCA1NjYuMDcgNzggTCA1NjYuMDIgNzkgTCA1NjYgODAgTCA1NjYuMDIgODEgTCA1NjYuMDggODIgTCA1NjYuMTkgODMgTCA1NjYuMzUgODQgTCA1NjYuNTcgODUgTCA1NjYuODQgODYgTCA1NjcuMTcgODcgTCA1NjcuNTYgODggTCA1NjguMDIgODkgTCA1NjguNTUgOTAgTCA1NjkuMTUgOTEgTCA1NjkuODMgOTIgTCA1NzAuNTggOTMgTCA1NzEuNCA5NCBMIDU3Mi4zIDk1IEwgNTczLjI4IDk2IEwgNTc0LjM0IDk3IEwgNTc1LjQ3IDk4IEwgNTc2LjY4IDk5IEwgNTc3Ljk3IDEwMCBMIDU3OS4zMyAxMDEgTCA1ODAuNzYgMTAyIEwgNTgyLjI2IDEwMyBMIDU4My44MiAxMDQgTCA1ODUuNDUgMTA1IEwgNTg3LjEzIDEwNiBMIDU4OC44NyAxMDcgTCA1OTAuNjYgMTA4IEwgNTkyLjUgMTA5IEwgNTk0LjM3IDExMCBMIDU5Ni4yOCAxMTEgTCA1OTguMjEgMTEyIEwgNjAwLjE3IDExMyBMIDYwMi4xNCAxMTQgTCA2MDQuMTIgMTE1IEwgNjA2LjEgMTE2IEwgNjA4LjA3IDExNyBMIDYxMC4wMyAxMTggTCA2MTEuOTYgMTE5IEwgNjEzLjg3IDEyMCBMIDYxNS43NSAxMjEgTCA2MTcuNTggMTIyIEwgNjE5LjM2IDEyMyBMIDYyMS4wOCAxMjQgTCA2MjIuNzQgMTI1IEwgNjI0LjMzIDEyNiBMIDYyNS44NCAxMjcgTCA2MjcuMjYgMTI4IEwgNjI4LjU5IDEyOSBMIDYyOS44MyAxMzAgTCA2MzAuOTcgMTMxIEwgNjMyIDEzMiBMIDYzMi45MiAxMzMgTCA2MzMuNzMgMTM0IEwgNjM0LjQyIDEzNSBMIDYzNC45OCAxMzYgTCA2MzUuNDMgMTM3IEwgNjM1Ljc0IDEzOCBMIDYzNS45NCAxMzkgTCA2MzYgMTQwIEwgNjM1Ljk0IDE0MSBMIDYzNS43NCAxNDIgTCA2MzUuNDMgMTQzIEwgNjM0Ljk4IDE0NCBMIDYzNC40MiAxNDUgTCA2MzMuNzMgMTQ2IEwgNjMyLjkyIDE0NyBMIDYzMiAxNDggTCA2MzAuOTcgMTQ5IEwgNjI5LjgzIDE1MCBMIDYyOC41OSAxNTEgTCA2MjcuMjYgMTUyIEwgNjI1Ljg0IDE1MyBMIDYyNC4zMyAxNTQgTCA2MjIuNzQgMTU1IEwgNjIxLjA4IDE1NiBMIDYxOS4zNiAxNTcgTCA2MTcuNTggMTU4IEwgNjE1Ljc1IDE1OSBMIDYxMy44NyAxNjAgTCA2MTEuOTYgMTYxIEwgNjEwLjAzIDE2MiBMIDYwOC4wNyAxNjMgTCA2MDYuMSAxNjQgTCA2MDQuMTIgMTY1IEwgNjAyLjE0IDE2NiBMIDYwMC4xNyAxNjcgTCA1OTguMjEgMTY4IEwgNTk2LjI4IDE2OSBMIDU5NC4zNyAxNzAgTCA1OTIuNSAxNzEgTCA1OTAuNjYgMTcyIEwgNTg4Ljg3IDE3MyBMIDU4Ny4xMyAxNzQgTCA1ODUuNDUgMTc1IEwgNTgzLjgyIDE3NiBMIDU4Mi4yNiAxNzcgTCA1ODAuNzYgMTc4IEwgNTc5LjMzIDE3OSBMIDU3Ny45NyAxODAgTCA1NzYuNjggMTgxIEwgNTc1LjQ3IDE4MiBMIDU3NC4zNCAxODMgTCA1NzMuMjggMTg0IEwgNTcyLjMgMTg1IEwgNTcxLjQgMTg2IEwgNTcwLjU4IDE4NyBMIDU2OS44MyAxODggTCA1NjkuMTUgMTg5IEwgNTY4LjU1IDE5MCBMIDU2OC4wMiAxOTEgTCA1NjcuNTYgMTkyIEwgNTY3LjE3IDE5MyBMIDU2Ni44NCAxOTQgTCA1NjYuNTcgMTk1IEwgNTY2LjM1IDE5NiBMIDU2Ni4xOSAxOTcgTCA1NjYuMDggMTk4IEwgNTY2LjAyIDE5OSBMIDU2NiAyMDAgTCA1NjYuMDIgMjAxIEwgNTY2LjA3IDIwMiBMIDU2Ni4xNiAyMDMgTCA1NjYuMjcgMjA0IEwgNTY2LjQgMjA1IEwgNTY2LjU2IDIwNiBMIDU2Ni43MyAyMDcgTCA1NjYuOTEgMjA4IEwgNTY3LjExIDIwOSBMIDU2Ny4zIDIxMCBMIDU2Ny41IDIxMSBMIDU2Ny43IDIxMiBMIDU2Ny45IDIxMyBMIDU2OC4wOSAyMTQgTCA1NjguMjcgMjE1IEwgNTY4LjQ0IDIxNiBMIDU2OC42IDIxNyBMIDU2OC43NSAyMTggTCA1NjguODggMjE5IEwgNTY4Ljk5IDIyMCBMIDU2OS4wOSAyMjEgTCA1NjkuMTcgMjIyIEwgNTY5LjIzIDIyMyBMIDU2OS4yNyAyMjQgTCA1NjkuMyAyMjUgTCA1NjkuMyAyMjYgTCA1NjkuMjkgMjI3IEwgNTY5LjI2IDIyOCBMIDU2OS4yMSAyMjkgTCA1NjkuMTUgMjMwIEwgNTY5LjA3IDIzMSBMIDU2OC45OCAyMzIgTCA1NjguODggMjMzIEwgNTY4Ljc2IDIzNCBMIDU2OC42NCAyMzUgTCA1NjguNTEgMjM2IEwgNTY4LjM3IDIzNyBMIDU2OC4yMiAyMzggTCA1NjguMDcgMjM5IEwgNTY3LjkxIDI0MCBMIDU2Ny43NiAyNDEgTCA1NjcuNjEgMjQyIEwgNTY3LjQ1IDI0MyBMIDU2Ny4zIDI0NCBMIDU2Ny4xNiAyNDUgTCA1NjcuMDIgMjQ2IEwgNTY2Ljg4IDI0NyBMIDU2Ni43NiAyNDggTCA1NjYuNjQgMjQ5IEwgNTY2LjUzIDI1MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUzOCIgeTE9IjgwIiB4Mj0iNTM4IiB5Mj0iMTkyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUzOCwyMDAgNTQyLDE5MiA1MzQsMTkyIiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjUzOCIgeTE9IjIwMCIgeDI9IjUzOCIgeTI9Ijg4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUzOCw4MCA1MzQsODggNTQyLDg4IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNTMyIiB5PSIxNDUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPuKEkzwvdGV4dD48bGluZSB4MT0iMjAwIiB5MT0iMjQiIHgyPSI1NTIiIHkyPSIyNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1NjAsMjQgNTUyLDIwIDU1MiwyOCIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI1NjAiIHkxPSIyNCIgeDI9IjIwOCIgeTI9IjI0IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIwMCwyNCAyMDgsMjggMjA4LDIwIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzgwIiB5PSIxOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RDwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjI4MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+zrggPSDOuyAvIGEgOyDihJMgPSAyIM67IEQgLyBhPC90ZXh0Pjwvc3ZnPg==)
*Diffraction d'un laser par une fente de largeur a : la tache centrale, de largeur ℓ = 2λD/a sur l'écran, est vue sous le demi-angle θ = λ/a.*
<!-- /schema -->

Pour un faisceau laser diffracté par une fente, la tache centrale a une **largeur** $\ell$ sur
un écran placé à la distance $D$. Comme $\theta$ est petit, $\tan\theta \approx \theta$, et la
demi-largeur vaut $\ell/2 = D\,\theta$ :

$$\ell = 2 D \theta = \frac{2 \lambda D}{a}$$

> **Exemple.** Laser $\lambda = 633$ nm $= 6{,}33 \times 10^{-7}$ m, fente
> $a = 0{,}10$ mm $= 1{,}0 \times 10^{-4}$ m, écran à $D = 2{,}0$ m.
> $\theta = \dfrac{6{,}33 \times 10^{-7}}{1{,}0 \times 10^{-4}} = 6{,}3 \times 10^{-3}$ rad, et
> $\ell = 2 \times 2{,}0 \times 6{,}3 \times 10^{-3} = 2{,}5 \times 10^{-2}$ m, soit $2{,}5$ cm.

> **La diffraction ne change ni la fréquence ni la longueur d'onde** : elle ne fait que
> redistribuer les directions de propagation.

---

## 3. Interférences de deux ondes

### Condition et différence de marche

Deux ondes de **même fréquence** issues de deux sources **synchrones** (en phase) se
superposent. En un point M, elles ont parcouru des distances $d_1$ et $d_2$ ; ce qui compte
est la **différence de marche** :

$$\boxed{\delta = d_2 - d_1}$$

Selon la valeur de $\delta$ comparée à $\lambda$, les deux ondes arrivent en phase ou en
opposition de phase.

### Interférences constructives

Les ondes sont **en phase**, les amplitudes s'**ajoutent** (maximum) lorsque la différence de
marche est un **multiple entier** de $\lambda$ :

$$\boxed{\delta = k\,\lambda \qquad k \in \mathbb{Z}}$$

> **Exemple.** $\lambda = 3$ cm. En un point où $d_1 = 12$ cm et $d_2 = 18$ cm,
> $\delta = 6$ cm $= 2\lambda$ : $k = 2$, entier → interférence **constructive**, le signal
> est renforcé (son fort, frange brillante).

### Interférences destructives

<!-- schema:superposition -->
![Deux ondes de même fréquence s'ajoutent si elles arrivent en phase (δ = kλ) et s'annulent si elles arrivent en opposition de phase (δ = (k + ½)λ).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzA0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDQiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNjAiIHk9IjI2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5pbnRlcmbDqXJlbmNlcyBjb25zdHJ1Y3RpdmVzPC90ZXh0PjxwYXRoIGQ9Ik0gMzAgNzAgTCAzMiA2OC4wNyBMIDM0IDY2LjE2IEwgMzYgNjQuMjggTCAzOCA2Mi40NiBMIDQwIDYwLjcxIEwgNDIgNTkuMDQgTCA0NCA1Ny40OCBMIDQ2IDU2LjAzIEwgNDggNTQuNzEgTCA1MCA1My41NCBMIDUyIDUyLjUyIEwgNTQgNTEuNjYgTCA1NiA1MC45OCBMIDU4IDUwLjQ3IEwgNjAgNTAuMTUgTCA2MiA1MC4wMSBMIDY0IDUwLjA1IEwgNjYgNTAuMjkgTCA2OCA1MC43IEwgNzAgNTEuMyBMIDcyIDUyLjA3IEwgNzQgNTMuMDEgTCA3NiA1NC4xMSBMIDc4IDU1LjM1IEwgODAgNTYuNzQgTCA4MiA1OC4yNCBMIDg0IDU5Ljg2IEwgODYgNjEuNTcgTCA4OCA2My4zNiBMIDkwIDY1LjIxIEwgOTIgNjcuMTEgTCA5NCA2OS4wMyBMIDk2IDcwLjk3IEwgOTggNzIuODkgTCAxMDAgNzQuNzkgTCAxMDIgNzYuNjQgTCAxMDQgNzguNDMgTCAxMDYgODAuMTQgTCAxMDggODEuNzYgTCAxMTAgODMuMjYgTCAxMTIgODQuNjUgTCAxMTQgODUuODkgTCAxMTYgODYuOTkgTCAxMTggODcuOTMgTCAxMjAgODguNyBMIDEyMiA4OS4zIEwgMTI0IDg5LjcxIEwgMTI2IDg5Ljk1IEwgMTI4IDg5Ljk5IEwgMTMwIDg5Ljg1IEwgMTMyIDg5LjUzIEwgMTM0IDg5LjAyIEwgMTM2IDg4LjM0IEwgMTM4IDg3LjQ4IEwgMTQwIDg2LjQ2IEwgMTQyIDg1LjI5IEwgMTQ0IDgzLjk3IEwgMTQ2IDgyLjUyIEwgMTQ4IDgwLjk2IEwgMTUwIDc5LjI5IEwgMTUyIDc3LjU0IEwgMTU0IDc1LjcyIEwgMTU2IDczLjg0IEwgMTU4IDcxLjkzIEwgMTYwIDcwIEwgMTYyIDY4LjA3IEwgMTY0IDY2LjE2IEwgMTY2IDY0LjI4IEwgMTY4IDYyLjQ2IEwgMTcwIDYwLjcxIEwgMTcyIDU5LjA0IEwgMTc0IDU3LjQ4IEwgMTc2IDU2LjAzIEwgMTc4IDU0LjcxIEwgMTgwIDUzLjU0IEwgMTgyIDUyLjUyIEwgMTg0IDUxLjY2IEwgMTg2IDUwLjk4IEwgMTg4IDUwLjQ3IEwgMTkwIDUwLjE1IEwgMTkyIDUwLjAxIEwgMTk0IDUwLjA1IEwgMTk2IDUwLjI5IEwgMTk4IDUwLjcgTCAyMDAgNTEuMyBMIDIwMiA1Mi4wNyBMIDIwNCA1My4wMSBMIDIwNiA1NC4xMSBMIDIwOCA1NS4zNSBMIDIxMCA1Ni43NCBMIDIxMiA1OC4yNCBMIDIxNCA1OS44NiBMIDIxNiA2MS41NyBMIDIxOCA2My4zNiBMIDIyMCA2NS4yMSBMIDIyMiA2Ny4xMSBMIDIyNCA2OS4wMyBMIDIyNiA3MC45NyBMIDIyOCA3Mi44OSBMIDIzMCA3NC43OSBMIDIzMiA3Ni42NCBMIDIzNCA3OC40MyBMIDIzNiA4MC4xNCBMIDIzOCA4MS43NiBMIDI0MCA4My4yNiBMIDI0MiA4NC42NSBMIDI0NCA4NS44OSBMIDI0NiA4Ni45OSBMIDI0OCA4Ny45MyBMIDI1MCA4OC43IEwgMjUyIDg5LjMgTCAyNTQgODkuNzEgTCAyNTYgODkuOTUgTCAyNTggODkuOTkgTCAyNjAgODkuODUgTCAyNjIgODkuNTMgTCAyNjQgODkuMDIgTCAyNjYgODguMzQgTCAyNjggODcuNDggTCAyNzAgODYuNDYgTCAyNzIgODUuMjkgTCAyNzQgODMuOTcgTCAyNzYgODIuNTIgTCAyNzggODAuOTYgTCAyODAgNzkuMjkgTCAyODIgNzcuNTQgTCAyODQgNzUuNzIgTCAyODYgNzMuODQgTCAyODggNzEuOTMgTCAyOTAgNzAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMzAgMTQwIEwgMzIgMTM4LjA3IEwgMzQgMTM2LjE2IEwgMzYgMTM0LjI4IEwgMzggMTMyLjQ2IEwgNDAgMTMwLjcxIEwgNDIgMTI5LjA0IEwgNDQgMTI3LjQ4IEwgNDYgMTI2LjAzIEwgNDggMTI0LjcxIEwgNTAgMTIzLjU0IEwgNTIgMTIyLjUyIEwgNTQgMTIxLjY2IEwgNTYgMTIwLjk4IEwgNTggMTIwLjQ3IEwgNjAgMTIwLjE1IEwgNjIgMTIwLjAxIEwgNjQgMTIwLjA1IEwgNjYgMTIwLjI5IEwgNjggMTIwLjcgTCA3MCAxMjEuMyBMIDcyIDEyMi4wNyBMIDc0IDEyMy4wMSBMIDc2IDEyNC4xMSBMIDc4IDEyNS4zNSBMIDgwIDEyNi43NCBMIDgyIDEyOC4yNCBMIDg0IDEyOS44NiBMIDg2IDEzMS41NyBMIDg4IDEzMy4zNiBMIDkwIDEzNS4yMSBMIDkyIDEzNy4xMSBMIDk0IDEzOS4wMyBMIDk2IDE0MC45NyBMIDk4IDE0Mi44OSBMIDEwMCAxNDQuNzkgTCAxMDIgMTQ2LjY0IEwgMTA0IDE0OC40MyBMIDEwNiAxNTAuMTQgTCAxMDggMTUxLjc2IEwgMTEwIDE1My4yNiBMIDExMiAxNTQuNjUgTCAxMTQgMTU1Ljg5IEwgMTE2IDE1Ni45OSBMIDExOCAxNTcuOTMgTCAxMjAgMTU4LjcgTCAxMjIgMTU5LjMgTCAxMjQgMTU5LjcxIEwgMTI2IDE1OS45NSBMIDEyOCAxNTkuOTkgTCAxMzAgMTU5Ljg1IEwgMTMyIDE1OS41MyBMIDEzNCAxNTkuMDIgTCAxMzYgMTU4LjM0IEwgMTM4IDE1Ny40OCBMIDE0MCAxNTYuNDYgTCAxNDIgMTU1LjI5IEwgMTQ0IDE1My45NyBMIDE0NiAxNTIuNTIgTCAxNDggMTUwLjk2IEwgMTUwIDE0OS4yOSBMIDE1MiAxNDcuNTQgTCAxNTQgMTQ1LjcyIEwgMTU2IDE0My44NCBMIDE1OCAxNDEuOTMgTCAxNjAgMTQwIEwgMTYyIDEzOC4wNyBMIDE2NCAxMzYuMTYgTCAxNjYgMTM0LjI4IEwgMTY4IDEzMi40NiBMIDE3MCAxMzAuNzEgTCAxNzIgMTI5LjA0IEwgMTc0IDEyNy40OCBMIDE3NiAxMjYuMDMgTCAxNzggMTI0LjcxIEwgMTgwIDEyMy41NCBMIDE4MiAxMjIuNTIgTCAxODQgMTIxLjY2IEwgMTg2IDEyMC45OCBMIDE4OCAxMjAuNDcgTCAxOTAgMTIwLjE1IEwgMTkyIDEyMC4wMSBMIDE5NCAxMjAuMDUgTCAxOTYgMTIwLjI5IEwgMTk4IDEyMC43IEwgMjAwIDEyMS4zIEwgMjAyIDEyMi4wNyBMIDIwNCAxMjMuMDEgTCAyMDYgMTI0LjExIEwgMjA4IDEyNS4zNSBMIDIxMCAxMjYuNzQgTCAyMTIgMTI4LjI0IEwgMjE0IDEyOS44NiBMIDIxNiAxMzEuNTcgTCAyMTggMTMzLjM2IEwgMjIwIDEzNS4yMSBMIDIyMiAxMzcuMTEgTCAyMjQgMTM5LjAzIEwgMjI2IDE0MC45NyBMIDIyOCAxNDIuODkgTCAyMzAgMTQ0Ljc5IEwgMjMyIDE0Ni42NCBMIDIzNCAxNDguNDMgTCAyMzYgMTUwLjE0IEwgMjM4IDE1MS43NiBMIDI0MCAxNTMuMjYgTCAyNDIgMTU0LjY1IEwgMjQ0IDE1NS44OSBMIDI0NiAxNTYuOTkgTCAyNDggMTU3LjkzIEwgMjUwIDE1OC43IEwgMjUyIDE1OS4zIEwgMjU0IDE1OS43MSBMIDI1NiAxNTkuOTUgTCAyNTggMTU5Ljk5IEwgMjYwIDE1OS44NSBMIDI2MiAxNTkuNTMgTCAyNjQgMTU5LjAyIEwgMjY2IDE1OC4zNCBMIDI2OCAxNTcuNDggTCAyNzAgMTU2LjQ2IEwgMjcyIDE1NS4yOSBMIDI3NCAxNTMuOTcgTCAyNzYgMTUyLjUyIEwgMjc4IDE1MC45NiBMIDI4MCAxNDkuMjkgTCAyODIgMTQ3LjU0IEwgMjg0IDE0NS43MiBMIDI4NiAxNDMuODQgTCAyODggMTQxLjkzIEwgMjkwIDE0MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTYwIiB5PSIxMDgiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPis8L3RleHQ+PGxpbmUgeDE9IjMwIiB5MT0iMjMwIiB4Mj0iMjkwIiB5Mj0iMjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzMCAyMzAgTCAzMiAyMjYuMTQgTCAzNCAyMjIuMzEgTCAzNiAyMTguNTYgTCAzOCAyMTQuOTIgTCA0MCAyMTEuNDEgTCA0MiAyMDguMDggTCA0NCAyMDQuOTUgTCA0NiAyMDIuMDYgTCA0OCAxOTkuNDMgTCA1MCAxOTcuMDggTCA1MiAxOTUuMDQgTCA1NCAxOTMuMzMgTCA1NiAxOTEuOTYgTCA1OCAxOTAuOTQgTCA2MCAxOTAuMjkgTCA2MiAxOTAuMDEgTCA2NCAxOTAuMTEgTCA2NiAxOTAuNTcgTCA2OCAxOTEuNCBMIDcwIDE5Mi42IEwgNzIgMTk0LjE0IEwgNzQgMTk2LjAyIEwgNzYgMTk4LjIyIEwgNzggMjAwLjcxIEwgODAgMjAzLjQ4IEwgODIgMjA2LjQ5IEwgODQgMjA5LjcyIEwgODYgMjEzLjE0IEwgODggMjE2LjcyIEwgOTAgMjIwLjQzIEwgOTIgMjI0LjIyIEwgOTQgMjI4LjA3IEwgOTYgMjMxLjkzIEwgOTggMjM1Ljc4IEwgMTAwIDIzOS41NyBMIDEwMiAyNDMuMjggTCAxMDQgMjQ2Ljg2IEwgMTA2IDI1MC4yOCBMIDEwOCAyNTMuNTEgTCAxMTAgMjU2LjUyIEwgMTEyIDI1OS4yOSBMIDExNCAyNjEuNzggTCAxMTYgMjYzLjk4IEwgMTE4IDI2NS44NiBMIDEyMCAyNjcuNCBMIDEyMiAyNjguNiBMIDEyNCAyNjkuNDMgTCAxMjYgMjY5Ljg5IEwgMTI4IDI2OS45OSBMIDEzMCAyNjkuNzEgTCAxMzIgMjY5LjA2IEwgMTM0IDI2OC4wNCBMIDEzNiAyNjYuNjcgTCAxMzggMjY0Ljk2IEwgMTQwIDI2Mi45MiBMIDE0MiAyNjAuNTcgTCAxNDQgMjU3Ljk0IEwgMTQ2IDI1NS4wNSBMIDE0OCAyNTEuOTIgTCAxNTAgMjQ4LjU5IEwgMTUyIDI0NS4wOCBMIDE1NCAyNDEuNDQgTCAxNTYgMjM3LjY5IEwgMTU4IDIzMy44NiBMIDE2MCAyMzAgTCAxNjIgMjI2LjE0IEwgMTY0IDIyMi4zMSBMIDE2NiAyMTguNTYgTCAxNjggMjE0LjkyIEwgMTcwIDIxMS40MSBMIDE3MiAyMDguMDggTCAxNzQgMjA0Ljk1IEwgMTc2IDIwMi4wNiBMIDE3OCAxOTkuNDMgTCAxODAgMTk3LjA4IEwgMTgyIDE5NS4wNCBMIDE4NCAxOTMuMzMgTCAxODYgMTkxLjk2IEwgMTg4IDE5MC45NCBMIDE5MCAxOTAuMjkgTCAxOTIgMTkwLjAxIEwgMTk0IDE5MC4xMSBMIDE5NiAxOTAuNTcgTCAxOTggMTkxLjQgTCAyMDAgMTkyLjYgTCAyMDIgMTk0LjE0IEwgMjA0IDE5Ni4wMiBMIDIwNiAxOTguMjIgTCAyMDggMjAwLjcxIEwgMjEwIDIwMy40OCBMIDIxMiAyMDYuNDkgTCAyMTQgMjA5LjcyIEwgMjE2IDIxMy4xNCBMIDIxOCAyMTYuNzIgTCAyMjAgMjIwLjQzIEwgMjIyIDIyNC4yMiBMIDIyNCAyMjguMDcgTCAyMjYgMjMxLjkzIEwgMjI4IDIzNS43OCBMIDIzMCAyMzkuNTcgTCAyMzIgMjQzLjI4IEwgMjM0IDI0Ni44NiBMIDIzNiAyNTAuMjggTCAyMzggMjUzLjUxIEwgMjQwIDI1Ni41MiBMIDI0MiAyNTkuMjkgTCAyNDQgMjYxLjc4IEwgMjQ2IDI2My45OCBMIDI0OCAyNjUuODYgTCAyNTAgMjY3LjQgTCAyNTIgMjY4LjYgTCAyNTQgMjY5LjQzIEwgMjU2IDI2OS44OSBMIDI1OCAyNjkuOTkgTCAyNjAgMjY5LjcxIEwgMjYyIDI2OS4wNiBMIDI2NCAyNjguMDQgTCAyNjYgMjY2LjY3IEwgMjY4IDI2NC45NiBMIDI3MCAyNjIuOTIgTCAyNzIgMjYwLjU3IEwgMjc0IDI1Ny45NCBMIDI3NiAyNTUuMDUgTCAyNzggMjUxLjkyIEwgMjgwIDI0OC41OSBMIDI4MiAyNDUuMDggTCAyODQgMjQxLjQ0IEwgMjg2IDIzNy42OSBMIDI4OCAyMzMuODYgTCAyOTAgMjMwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNjAiIHk9IjE4NCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+PTwvdGV4dD48dGV4dCB4PSIxNjAiIHk9IjI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrQgPSBrIM67IDogYW1wbGl0dWRlcyBxdWkgcydham91dGVudDwvdGV4dD48dGV4dCB4PSI0ODAiIHk9IjI2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5pbnRlcmbDqXJlbmNlcyBkZXN0cnVjdGl2ZXM8L3RleHQ+PHBhdGggZD0iTSAzNTAgNzAgTCAzNTIgNjguMDcgTCAzNTQgNjYuMTYgTCAzNTYgNjQuMjggTCAzNTggNjIuNDYgTCAzNjAgNjAuNzEgTCAzNjIgNTkuMDQgTCAzNjQgNTcuNDggTCAzNjYgNTYuMDMgTCAzNjggNTQuNzEgTCAzNzAgNTMuNTQgTCAzNzIgNTIuNTIgTCAzNzQgNTEuNjYgTCAzNzYgNTAuOTggTCAzNzggNTAuNDcgTCAzODAgNTAuMTUgTCAzODIgNTAuMDEgTCAzODQgNTAuMDUgTCAzODYgNTAuMjkgTCAzODggNTAuNyBMIDM5MCA1MS4zIEwgMzkyIDUyLjA3IEwgMzk0IDUzLjAxIEwgMzk2IDU0LjExIEwgMzk4IDU1LjM1IEwgNDAwIDU2Ljc0IEwgNDAyIDU4LjI0IEwgNDA0IDU5Ljg2IEwgNDA2IDYxLjU3IEwgNDA4IDYzLjM2IEwgNDEwIDY1LjIxIEwgNDEyIDY3LjExIEwgNDE0IDY5LjAzIEwgNDE2IDcwLjk3IEwgNDE4IDcyLjg5IEwgNDIwIDc0Ljc5IEwgNDIyIDc2LjY0IEwgNDI0IDc4LjQzIEwgNDI2IDgwLjE0IEwgNDI4IDgxLjc2IEwgNDMwIDgzLjI2IEwgNDMyIDg0LjY1IEwgNDM0IDg1Ljg5IEwgNDM2IDg2Ljk5IEwgNDM4IDg3LjkzIEwgNDQwIDg4LjcgTCA0NDIgODkuMyBMIDQ0NCA4OS43MSBMIDQ0NiA4OS45NSBMIDQ0OCA4OS45OSBMIDQ1MCA4OS44NSBMIDQ1MiA4OS41MyBMIDQ1NCA4OS4wMiBMIDQ1NiA4OC4zNCBMIDQ1OCA4Ny40OCBMIDQ2MCA4Ni40NiBMIDQ2MiA4NS4yOSBMIDQ2NCA4My45NyBMIDQ2NiA4Mi41MiBMIDQ2OCA4MC45NiBMIDQ3MCA3OS4yOSBMIDQ3MiA3Ny41NCBMIDQ3NCA3NS43MiBMIDQ3NiA3My44NCBMIDQ3OCA3MS45MyBMIDQ4MCA3MCBMIDQ4MiA2OC4wNyBMIDQ4NCA2Ni4xNiBMIDQ4NiA2NC4yOCBMIDQ4OCA2Mi40NiBMIDQ5MCA2MC43MSBMIDQ5MiA1OS4wNCBMIDQ5NCA1Ny40OCBMIDQ5NiA1Ni4wMyBMIDQ5OCA1NC43MSBMIDUwMCA1My41NCBMIDUwMiA1Mi41MiBMIDUwNCA1MS42NiBMIDUwNiA1MC45OCBMIDUwOCA1MC40NyBMIDUxMCA1MC4xNSBMIDUxMiA1MC4wMSBMIDUxNCA1MC4wNSBMIDUxNiA1MC4yOSBMIDUxOCA1MC43IEwgNTIwIDUxLjMgTCA1MjIgNTIuMDcgTCA1MjQgNTMuMDEgTCA1MjYgNTQuMTEgTCA1MjggNTUuMzUgTCA1MzAgNTYuNzQgTCA1MzIgNTguMjQgTCA1MzQgNTkuODYgTCA1MzYgNjEuNTcgTCA1MzggNjMuMzYgTCA1NDAgNjUuMjEgTCA1NDIgNjcuMTEgTCA1NDQgNjkuMDMgTCA1NDYgNzAuOTcgTCA1NDggNzIuODkgTCA1NTAgNzQuNzkgTCA1NTIgNzYuNjQgTCA1NTQgNzguNDMgTCA1NTYgODAuMTQgTCA1NTggODEuNzYgTCA1NjAgODMuMjYgTCA1NjIgODQuNjUgTCA1NjQgODUuODkgTCA1NjYgODYuOTkgTCA1NjggODcuOTMgTCA1NzAgODguNyBMIDU3MiA4OS4zIEwgNTc0IDg5LjcxIEwgNTc2IDg5Ljk1IEwgNTc4IDg5Ljk5IEwgNTgwIDg5Ljg1IEwgNTgyIDg5LjUzIEwgNTg0IDg5LjAyIEwgNTg2IDg4LjM0IEwgNTg4IDg3LjQ4IEwgNTkwIDg2LjQ2IEwgNTkyIDg1LjI5IEwgNTk0IDgzLjk3IEwgNTk2IDgyLjUyIEwgNTk4IDgwLjk2IEwgNjAwIDc5LjI5IEwgNjAyIDc3LjU0IEwgNjA0IDc1LjcyIEwgNjA2IDczLjg0IEwgNjA4IDcxLjkzIEwgNjEwIDcwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDM1MCAxNDAgTCAzNTIgMTQxLjkzIEwgMzU0IDE0My44NCBMIDM1NiAxNDUuNzIgTCAzNTggMTQ3LjU0IEwgMzYwIDE0OS4yOSBMIDM2MiAxNTAuOTYgTCAzNjQgMTUyLjUyIEwgMzY2IDE1My45NyBMIDM2OCAxNTUuMjkgTCAzNzAgMTU2LjQ2IEwgMzcyIDE1Ny40OCBMIDM3NCAxNTguMzQgTCAzNzYgMTU5LjAyIEwgMzc4IDE1OS41MyBMIDM4MCAxNTkuODUgTCAzODIgMTU5Ljk5IEwgMzg0IDE1OS45NSBMIDM4NiAxNTkuNzEgTCAzODggMTU5LjMgTCAzOTAgMTU4LjcgTCAzOTIgMTU3LjkzIEwgMzk0IDE1Ni45OSBMIDM5NiAxNTUuODkgTCAzOTggMTU0LjY1IEwgNDAwIDE1My4yNiBMIDQwMiAxNTEuNzYgTCA0MDQgMTUwLjE0IEwgNDA2IDE0OC40MyBMIDQwOCAxNDYuNjQgTCA0MTAgMTQ0Ljc5IEwgNDEyIDE0Mi44OSBMIDQxNCAxNDAuOTcgTCA0MTYgMTM5LjAzIEwgNDE4IDEzNy4xMSBMIDQyMCAxMzUuMjEgTCA0MjIgMTMzLjM2IEwgNDI0IDEzMS41NyBMIDQyNiAxMjkuODYgTCA0MjggMTI4LjI0IEwgNDMwIDEyNi43NCBMIDQzMiAxMjUuMzUgTCA0MzQgMTI0LjExIEwgNDM2IDEyMy4wMSBMIDQzOCAxMjIuMDcgTCA0NDAgMTIxLjMgTCA0NDIgMTIwLjcgTCA0NDQgMTIwLjI5IEwgNDQ2IDEyMC4wNSBMIDQ0OCAxMjAuMDEgTCA0NTAgMTIwLjE1IEwgNDUyIDEyMC40NyBMIDQ1NCAxMjAuOTggTCA0NTYgMTIxLjY2IEwgNDU4IDEyMi41MiBMIDQ2MCAxMjMuNTQgTCA0NjIgMTI0LjcxIEwgNDY0IDEyNi4wMyBMIDQ2NiAxMjcuNDggTCA0NjggMTI5LjA0IEwgNDcwIDEzMC43MSBMIDQ3MiAxMzIuNDYgTCA0NzQgMTM0LjI4IEwgNDc2IDEzNi4xNiBMIDQ3OCAxMzguMDcgTCA0ODAgMTQwIEwgNDgyIDE0MS45MyBMIDQ4NCAxNDMuODQgTCA0ODYgMTQ1LjcyIEwgNDg4IDE0Ny41NCBMIDQ5MCAxNDkuMjkgTCA0OTIgMTUwLjk2IEwgNDk0IDE1Mi41MiBMIDQ5NiAxNTMuOTcgTCA0OTggMTU1LjI5IEwgNTAwIDE1Ni40NiBMIDUwMiAxNTcuNDggTCA1MDQgMTU4LjM0IEwgNTA2IDE1OS4wMiBMIDUwOCAxNTkuNTMgTCA1MTAgMTU5Ljg1IEwgNTEyIDE1OS45OSBMIDUxNCAxNTkuOTUgTCA1MTYgMTU5LjcxIEwgNTE4IDE1OS4zIEwgNTIwIDE1OC43IEwgNTIyIDE1Ny45MyBMIDUyNCAxNTYuOTkgTCA1MjYgMTU1Ljg5IEwgNTI4IDE1NC42NSBMIDUzMCAxNTMuMjYgTCA1MzIgMTUxLjc2IEwgNTM0IDE1MC4xNCBMIDUzNiAxNDguNDMgTCA1MzggMTQ2LjY0IEwgNTQwIDE0NC43OSBMIDU0MiAxNDIuODkgTCA1NDQgMTQwLjk3IEwgNTQ2IDEzOS4wMyBMIDU0OCAxMzcuMTEgTCA1NTAgMTM1LjIxIEwgNTUyIDEzMy4zNiBMIDU1NCAxMzEuNTcgTCA1NTYgMTI5Ljg2IEwgNTU4IDEyOC4yNCBMIDU2MCAxMjYuNzQgTCA1NjIgMTI1LjM1IEwgNTY0IDEyNC4xMSBMIDU2NiAxMjMuMDEgTCA1NjggMTIyLjA3IEwgNTcwIDEyMS4zIEwgNTcyIDEyMC43IEwgNTc0IDEyMC4yOSBMIDU3NiAxMjAuMDUgTCA1NzggMTIwLjAxIEwgNTgwIDEyMC4xNSBMIDU4MiAxMjAuNDcgTCA1ODQgMTIwLjk4IEwgNTg2IDEyMS42NiBMIDU4OCAxMjIuNTIgTCA1OTAgMTIzLjU0IEwgNTkyIDEyNC43MSBMIDU5NCAxMjYuMDMgTCA1OTYgMTI3LjQ4IEwgNTk4IDEyOS4wNCBMIDYwMCAxMzAuNzEgTCA2MDIgMTMyLjQ2IEwgNjA0IDEzNC4yOCBMIDYwNiAxMzYuMTYgTCA2MDggMTM4LjA3IEwgNjEwIDE0MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDgwIiB5PSIxMDgiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPis8L3RleHQ+PGxpbmUgeDE9IjM1MCIgeTE9IjIzMCIgeDI9IjYxMCIgeTI9IjIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTAiIHkxPSIyMzAiIHgyPSI2MTAiIHkyPSIyMzAiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0ODAiIHk9IjE4NCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+PTwvdGV4dD48dGV4dCB4PSI0ODAiIHk9IjI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrQgPSAoayArIMK9KSDOuyA6IGFtcGxpdHVkZXMgcXVpIHMnYW5udWxlbnQ8L3RleHQ+PC9zdmc+)
*Deux ondes de même fréquence s'ajoutent si elles arrivent en phase (δ = kλ) et s'annulent si elles arrivent en opposition de phase (δ = (k + ½)λ).*
<!-- /schema -->

Les ondes sont **en opposition de phase**, les amplitudes se **retranchent** (minimum, parfois
nul) lorsque la différence de marche est un **demi-entier** de $\lambda$ :

$$\boxed{\delta = \left(k + \tfrac{1}{2}\right)\lambda \qquad k \in \mathbb{Z}}$$

> **Exemple.** Même dispositif, point où $\delta = 4{,}5$ cm $= 1{,}5\,\lambda = (1 + \tfrac12)\lambda$ :
> interférence **destructive**, le signal s'annule (silence, frange sombre).

### Lumière : franges et interfrange

Avec deux fentes distantes de $b$ éclairées par un laser, on observe sur un écran à distance
$D$ des franges régulières. La distance entre deux franges brillantes voisines, l'**interfrange**,
vaut

$$i = \frac{\lambda D}{b}$$

> ⚠️ Ne confonds pas $a$ (largeur d'**une** fente, diffraction) et $b$ (**écart entre deux**
> fentes, interférences) : ce sont deux longueurs différentes.

---

## 4. Effet Doppler

### Le phénomène

Quand la source d'une onde et l'observateur sont en **mouvement relatif**, la fréquence
**perçue** $f_R$ diffère de la fréquence **émise** $f_E$. C'est l'**effet Doppler**.

- Source qui **se rapproche** → fréquence perçue **plus grande** (son plus **aigu**).
- Source qui **s'éloigne** → fréquence perçue **plus petite** (son plus **grave**).

> **Exemple.** La sirène d'une ambulance semble plus aiguë quand elle vient vers toi, puis
> chute brusquement vers le grave dès qu'elle t'a dépassé.

### Établir le décalage (observateur fixe, source mobile)

<!-- schema:doppler -->
![Source en mouvement : les fronts d'onde sont resserrés devant elle, la longueur d'onde perçue y est plus petite et la fréquence plus grande.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSIzMjAiIGN5PSIxNDUiIHI9IjI2IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48Y2lyY2xlIGN4PSIzMTAiIGN5PSIxNDUiIHI9IjUyIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxNDUiIHI9Ijc4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48Y2lyY2xlIGN4PSIyOTAiIGN5PSIxNDUiIHI9IjEwNCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGNpcmNsZSBjeD0iMjgwIiBjeT0iMTQ1IiByPSIxMzAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxjaXJjbGUgY3g9IjMzMCIgY3k9IjE0NSIgcj0iOSIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjOGIxYTFhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxsaW5lIHgxPSIzNDIiIHkxPSIxNDUiIHgyPSIzODAiIHkyPSIxNDUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzkwLDE0NSAzODAsMTQwIDM4MCwxNTAiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSIzNzAiIHk9IjEzNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+djwvdGV4dD48dGV4dCB4PSI2MjAiIHk9IjQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5kZXZhbnQgbGEgc291cmNlIDo8L3RleHQ+PHJlY3QgeD0iNDAwLjk2IiB5PSI0NiIgd2lkdGg9IjIyMy4wNCIgaGVpZ2h0PSIxOSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjYyMCIgeT0iNTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPmZyb250cyByZXNzZXJyw6lzLCDOuyBwbHVzIHBldGl0ZSw8L3RleHQ+PHJlY3QgeD0iNTI4LjY0IiB5PSI2MiIgd2lkdGg9Ijk1LjM2IiBoZWlnaHQ9IjE5IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjkyIi8+PHRleHQgeD0iNjIwIiB5PSI3NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+c29uIHBsdXMgYWlndTwvdGV4dD48dGV4dCB4PSIyMCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+ZGVycmnDqHJlIGxhIHNvdXJjZSA6PC90ZXh0PjxyZWN0IHg9IjE2IiB5PSI0NiIgd2lkdGg9IjIwOS42IiBoZWlnaHQ9IjE5IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjkyIi8+PHRleHQgeD0iMjAiIHk9IjU4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmZyb250cyBlc3BhY8OpcywgzrsgcGx1cyBncmFuZGUsPC90ZXh0PjxyZWN0IHg9IjE2IiB5PSI2MiIgd2lkdGg9IjEwMi4wOCIgaGVpZ2h0PSIxOSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjIwIiB5PSI3NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5zb24gcGx1cyBncmF2ZTwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjI4OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c291cmNlIHF1aSBzZSBkw6lwbGFjZSB2ZXJzIGxhIGRyb2l0ZSA6IGNoYXF1ZSBmcm9udCBlc3Qgw6ltaXMgZCd1biBwb2ludCBwbHVzIGF2YW5jw6k8L3RleHQ+PC9zdmc+)
*Source en mouvement : les fronts d'onde sont resserrés devant elle, la longueur d'onde perçue y est plus petite et la fréquence plus grande.*
<!-- /schema -->

La source, de fréquence $f_E$ et de période $T_E = 1/f_E$, se déplace à la vitesse $v$ vers
l'observateur. Pendant une période, l'onde avance de $c\,T_E$ mais la source avance de
$v\,T_E$ : les fronts d'onde sont **resserrés** devant elle. La longueur d'onde perçue est

$$\lambda_R = (c - v)\,T_E \quad\Rightarrow\quad
f_R = \frac{c}{\lambda_R} = f_E \, \frac{c}{c - v}.$$

$$\boxed{f_R = f_E\,\dfrac{c}{c - v}\ \text{(rapprochement)} \qquad
f_R = f_E\,\dfrac{c}{c + v}\ \text{(éloignement)}}$$

Le **décalage Doppler** est la différence des fréquences :

$$\boxed{\Delta f = f_R - f_E}$$

> **Exemple.** Une source émet $f_E = 1000$ Hz et fonce à $v = 34\ \text{m·s}^{-1}$ vers toi
> ($c = 340\ \text{m·s}^{-1}$). $f_R = 1000 \times \dfrac{340}{340 - 34} = 1000 \times \dfrac{340}{306} \approx 1111$ Hz,
> soit $\Delta f \approx +111$ Hz : le son est plus aigu.

### À quoi ça sert

Mesure de vitesse (radar routier, échographie Doppler des flux sanguins), et en astronomie le
**décalage vers le rouge** : les galaxies qui s'éloignent voient leurs raies décalées vers les
grandes longueurs d'onde, preuve de l'expansion de l'Univers.

---

## 5. Tableau récapitulatif

| Notion | Formule | Points de vigilance |
|---|---|---|
| Niveau sonore | $L = 10\log\!\left(\dfrac{I}{I_0}\right)$ | $I_0 = 10^{-12}\ \text{W·m}^{-2}$ ; $I$ en $\text{W·m}^{-2}$ |
| $\times 10$ sur $I$ | $+10$ dB | $\times 2$ sur $I$ → $+3$ dB |
| Intensité inverse | $I = I_0\,10^{L/10}$ | bien mettre $10^{-12}$ en facteur |
| Diffraction | $\theta = \dfrac{\lambda}{a}$ | $\theta$ en **rad** ; $\lambda$ et $a$ même unité |
| Interf. constructive | $\delta = k\lambda$ | $k$ entier |
| Interf. destructive | $\delta = \left(k+\tfrac12\right)\lambda$ | demi-entier |
| Doppler (approche) | $f_R = f_E\dfrac{c}{c-v}$ | approche → $f_R > f_E$ (aigu) |
| Décalage Doppler | $\Delta f = f_R - f_E$ | signe = sens du mouvement |

---

## 6. Les erreurs qui coûtent des points

1. **Oublier de convertir $I$ ou d'utiliser $I_0 = 10^{-12}$.** Le rapport $I/I_0$ doit être un
   nombre **sans unité** ; une erreur de puissance de 10 sur $I_0$ fait rater tout le calcul.
2. **Prendre $\log$ pour $\ln$.** Le niveau sonore utilise le logarithme **décimal** (base 10),
   pas le logarithme népérien.
3. **Croire que doubler l'intensité double le niveau en dB.** Doubler $I$ ajoute seulement
   $\approx 3$ dB, pas $\times 2$.
4. **Laisser $\theta$ en degrés** dans $\theta = \lambda/a$, ou mélanger les unités de $\lambda$
   et $a$ (nm avec mm). Tout en mètres, $\theta$ en radians.
5. **Confondre $a$ et $b$** : $a$ est la largeur d'une fente (diffraction), $b$ l'écart entre
   deux fentes (interférences).
6. **Se tromper de condition d'interférences** : constructive pour $\delta = k\lambda$,
   destructive pour $\delta = (k+\tfrac12)\lambda$ — ne pas les inverser.
7. **Mauvais signe en Doppler** : rapprochement → dénominateur $c - v$ et fréquence **plus
   grande** ; éloignement → $c + v$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait local :
docs/programme-terminale-physique-chimie-2019.txt, section « 4.1 Caractériser les phénomènes
ondulatoires » (lignes 160-170). Capacités exigibles retenues :
- Exploiter le niveau d'intensité sonore : L = 10 log(I/I0), I0 = 1,0e-12 W/m².
- Exploiter θ = λ/a (angle de diffraction).
- Établir les conditions d'interférences constructives (δ = kλ) et destructives (δ = (k+½)λ)
  via la différence de marche.
- Établir l'expression du décalage Doppler (observateur fixe, source mobile).

À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- θ = λ/a : le programme donne l'« angle caractéristique ». Je l'ai présenté comme le
  demi-angle d'ouverture de la tache centrale (écart angulaire au premier minimum). Confirmer
  la convention attendue (demi-angle vs angle total) et l'usage de ℓ = 2λD/a, non explicitement
  exigé mais classique.
- Interfrange i = λD/b : hors capacités exigibles strictes (ajout « pour aller plus loin »).
  Vérifier qu'on souhaite le garder, et la notation b pour l'écart entre fentes.
- Effet Doppler : dérivation faite dans le cas « observateur fixe, source mobile », conforme au
  BO. Les expressions f_R = f_E·c/(c∓v) sont établies, pas seulement fournies.
- Vérifier l'intensité de référence I0 = 1,0×10⁻¹² W·m⁻² et les valeurs d'exemples (seuil de
  douleur 120 dB → I = 1 W·m⁻²).

Rédaction originale à partir du programme officiel (public). Aucun emprunt à un manuel.
Statut : brouillon, non relu — étape de relecture par un professeur obligatoire.
-->
