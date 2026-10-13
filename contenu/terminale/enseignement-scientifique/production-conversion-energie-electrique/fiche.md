---
id: tale-esc-production-conversion-energie-electrique
titre: "Production et conversion de l'énergie électrique"
voie: generale
niveau: terminale
parcours: enseignement-scientifique
matiere: physique-chimie
programme: "Enseignement scientifique — terminale générale, BO du 22 janvier 2019 (version aménagée 2023)"
theme: "Le futur des énergies"
duree_lecture_min: 15
prerequis:
  - Puissance et énergie ; le watt et le joule (Première)
  - Loi d'Ohm et effet Joule (Première / Seconde)
  - Champ magnétique, aimant et bobine (Première)
  - Énergie chimique d'une transformation (Première)
statut: brouillon
relu_par: null
---

# Production et conversion de l'énergie électrique

> L'électricité ne se trouve pas dans la nature toute prête : on ne l'extrait pas d'une mine.
> Il faut la **produire**, c'est-à-dire **convertir** une autre forme d'énergie — le mouvement
> de l'eau, le vent, la lumière du Soleil, une réaction chimique — en énergie électrique. Ce
> chapitre répond à deux questions : **comment** fait-on cette conversion sans rien brûler, et
> **quelle fraction** de l'énergie de départ arrive vraiment jusqu'à la prise ?

---

## 1. L'induction électromagnétique

### Définition

<!-- schema:induction -->
![Induction : un aimant qu'on déplace près d'une bobine fait varier le champ qui la traverse, et une tension apparaît aux bornes de la bobine.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48ZWxsaXBzZSBjeD0iMzIwIiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48ZWxsaXBzZSBjeD0iMzM2IiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48ZWxsaXBzZSBjeD0iMzUyIiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48ZWxsaXBzZSBjeD0iMzY4IiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48ZWxsaXBzZSBjeD0iMzg0IiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48ZWxsaXBzZSBjeD0iNDAwIiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48ZWxsaXBzZSBjeD0iNDE2IiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48ZWxsaXBzZSBjeD0iNDMyIiBjeT0iMTEwIiByeD0iOCIgcnk9IjQwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2I4NzkyZCIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48bGluZSB4MT0iMzIwIiB5MT0iMTUwIiB4Mj0iMzIwIiB5Mj0iMjAwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQzMiIgeTE9IjE1MCIgeDI9IjQzMiIgeTI9IjIwMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMzIwIDIwMCBMIDMyMCAyMjAgTCA0MzIgMjIwIEwgNDMyIDIwMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc2LDIyMCkiPjxyZWN0IHg9Ii0xNiIgeT0iLTMiIHdpZHRoPSIzMiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmZmZmZmIi8+PGNpcmNsZSByPSIxNCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PHRleHQgeD0iMzc2IiB5PSIyMjUuNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+VjwvdGV4dD48cmVjdCB4PSIxMTAiIHk9IjkyIiB3aWR0aD0iNzAiIGhlaWdodD0iMzYiIHJ4PSIwIiBmaWxsPSIjZTUzOTM1IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cmVjdCB4PSIxODAiIHk9IjkyIiB3aWR0aD0iNzAiIGhlaWdodD0iMzYiIHJ4PSIwIiBmaWxsPSIjMWU2M2M2IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxNDUiIHk9IjExNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TjwvdGV4dD48dGV4dCB4PSIyMTUiIHk9IjExNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+UzwvdGV4dD48bGluZSB4MT0iMTIwIiB5MT0iNzAiIHgyPSIyNDAiIHkyPSI3MCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNTAsNzAgMjQwLDY1IDI0MCw3NSIgZmlsbD0iIzFhN2Y0YiIvPjx0ZXh0IHg9IjE4NSIgeT0iNjAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmFpbWFudCBlbiBtb3V2ZW1lbnQ8L3RleHQ+PHRleHQgeD0iMzc2IiB5PSI1MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Ym9iaW5lPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iMjE0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnRlbnNpb24gaW5kdWl0ZTwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjI1MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YWltYW50IGltbW9iaWxlIDogYXVjdW5lIHRlbnNpb24gOyBsZSBjaGFtcCBkb2l0IHZhcmllcjwvdGV4dD48L3N2Zz4=)
*Induction : un aimant qu'on déplace près d'une bobine fait varier le champ qui la traverse, et une tension apparaît aux bornes de la bobine.*
<!-- /schema -->

L'**induction électromagnétique** est l'apparition d'une tension (et donc d'un courant, si le
circuit est fermé) dans une bobine lorsque le **champ magnétique qui la traverse varie au cours
du temps**.

Le point essentiel — et contre-intuitif — est le mot **varie** : un aimant immobile près d'une
bobine ne produit rien. C'est le **mouvement**, le **changement**, qui crée la tension.

> **Exemple.** Approche un aimant d'une bobine reliée à un voltmètre : l'aiguille dévie. Retire
> l'aimant : elle dévie dans l'autre sens. Laisse l'aimant immobile dans la bobine : l'aiguille
> revient à zéro. Aucune tension sans variation.

### Ce qui compte, c'est la vitesse de variation

Plus le champ magnétique varie **vite**, plus la tension induite est **grande** : on l'augmente
en déplaçant l'aimant plus rapidement, en le prenant plus puissant, ou en multipliant les spires
de la bobine. C'est pourquoi la dynamo d'un vélo brille davantage quand on pédale plus fort.

---

## 2. L'alternateur : convertir le mouvement en électricité

### Définition

Un **alternateur** est le dispositif qui exploite l'induction pour convertir de l'énergie
**mécanique** (un mouvement de rotation) en énergie **électrique**. Un aimant tourne devant des
bobines fixes : le champ qui les traverse change sans cesse de sens, ce qui induit une tension
**alternative** — d'où le nom.

$$\text{énergie mécanique (rotation)} \;\xrightarrow{\;\text{alternateur}\;}\; \text{énergie électrique}$$

> **Exemple.** Dans une centrale hydraulique, une turbine mise en rotation par l'eau entraîne
> l'aimant de l'alternateur. Dans une éolienne, ce sont les pales. Le principe est identique :
> **quelque chose tourne**, l'alternateur transforme cette rotation en courant.

### Produire « sans combustion »

Dans une centrale **thermique** ou **nucléaire**, on chauffe de l'eau pour faire de la vapeur
qui fait tourner la turbine : il y a **combustion** (ou fission). Mais l'alternateur, lui, peut
être entraîné **sans rien brûler** dès que le mouvement vient d'une source naturelle :

- l'eau d'un barrage ou d'un fleuve (**hydraulique**) ;
- le vent (**éolien**) ;
- les marées ou les courants marins (**hydrolien, marémoteur**).

> ⚠️ Ne confonds pas la **turbine** (elle fournit le mouvement) et l'**alternateur** (il
> transforme ce mouvement en électricité). C'est toujours l'alternateur qui produit le courant.

---

## 3. Les trois voies de production sans combustion

Produire de l'électricité sans brûler de combustible, c'est possible par **trois** voies, selon
la forme d'énergie de départ.

| Voie | Énergie de départ | Dispositif | Exemples |
|---|---|---|---|
| **Mécanique** | mouvement | alternateur | hydraulique, éolien, marémoteur |
| **Radiative** | lumière (rayonnement) | cellule photovoltaïque | panneaux solaires |
| **Électrochimique** | réaction chimique | pile / accumulateur | pile, batterie |

$$\boxed{\text{mécanique} \;\to\; \text{alternateur} \qquad \text{radiative} \;\to\; \text{photovoltaïque} \qquad \text{chimique} \;\to\; \text{pile}}$$

> **Ce qu'il faut retenir.** Seule la voie mécanique passe par un alternateur. Le
> photovoltaïque et la pile produisent l'électricité **directement**, sans aucune pièce en
> mouvement.

---

## 4. L'effet photovoltaïque

### Définition

L'**effet photovoltaïque** est la conversion **directe** de l'énergie d'un rayonnement
lumineux en énergie électrique, au sein d'un matériau **semi-conducteur** (le plus souvent le
**silicium**).

### Le principe, qualitativement

Un **semi-conducteur** est un matériau intermédiaire entre un conducteur et un isolant : ses
électrons ne circulent que si on leur apporte assez d'énergie. Lorsqu'un grain de lumière (un
**photon**) frappe la cellule et possède une énergie suffisante, il **libère un électron**. La
cellule est construite de façon à ce que ces électrons libérés partent tous dans le même sens :
il apparaît alors un courant électrique dans le circuit branché aux bornes.

> **Exemple.** Un panneau solaire éclairé alimente une calculatrice ou recharge une batterie.
> À l'ombre, aucun photon n'arrive : plus de courant. La lumière est **le** carburant, sans
> aucune pièce mobile ni combustion.

> ⚠️ « Photovoltaïque » n'est **pas** synonyme de « solaire thermique ». Un chauffe-eau
> solaire capte la **chaleur** du Soleil ; une cellule photovoltaïque produit de
> l'**électricité**. Ce sont deux technologies différentes.

---

## 5. Le rendement de conversion

### Définition

Aucune conversion d'énergie n'est parfaite : une partie de l'énergie de départ est toujours
perdue (le plus souvent en chaleur). Le **rendement** $\eta$ (lettre grecque « êta ») mesure la
fraction **utile** de l'énergie reçue :

$$\boxed{\eta = \frac{E_{\text{utile}}}{E_{\text{reçue}}}}$$

On peut aussi l'écrire avec les **puissances**, puisque le temps se simplifie :
$\eta = \dfrac{P_{\text{utile}}}{P_{\text{reçue}}}$.

### Ses propriétés

- Le rendement est un **nombre sans unité** : un joule divisé par un joule.
- Il est toujours **compris entre 0 et 1** ($0 \le \eta \le 1$), donc **jamais supérieur à
  100 %**. Une machine de rendement supérieur à 1 créerait de l'énergie à partir de rien : c'est
  impossible.
- On l'exprime souvent en **pourcentage** : $\eta = 0{,}20$ se lit **20 %**.

> **Exemple.** Une cellule photovoltaïque reçoit $1000$ J d'énergie lumineuse et en restitue
> $200$ J sous forme électrique. Son rendement vaut
> $\eta = \dfrac{200}{1000} = 0{,}20 = 20\ \%$. Les $800$ J manquants ont surtout été perdus en
> chaleur. Un rendement de $15$ à $20\ \%$ est typique d'un panneau solaire réel.

---

## 6. Le rendement global d'une chaîne énergétique

### La propriété

<!-- schema:rendement-global -->
![Chaîne de l'exemple : turbine (0,90), alternateur (0,95) et ligne (0,92) ; sur 100 J fournis par l'eau, environ 79 J arrivent à l'utilisateur.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyOTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMCIgeT0iOTIiIHdpZHRoPSIxNDAiIGhlaWdodD0iODAiIHJ4PSIwIiBmaWxsPSIjZjVjMjZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTIiIHk9IjgyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPsOpbmVyZ2llIGRlIGwnZWF1PC90ZXh0Pjx0ZXh0IHg9IjgwIiB5PSIxMzciIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEwMCwwIEo8L3RleHQ+PHJlY3QgeD0iMTc0IiB5PSI5MiIgd2lkdGg9IjEyNiIgaGVpZ2h0PSI3MiIgcng9IjAiIGZpbGw9IiNmNWMyNmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIyMzciIHk9IjEzMyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+OTAsMCBKPC90ZXh0PjxyZWN0IHg9IjE3NCIgeT0iMTY0IiB3aWR0aD0iOCIgaGVpZ2h0PSI2NCIgcng9IjAiIGZpbGw9IiNlN2EzYTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cG9seWdvbiBwb2ludHM9IjE3OCwyNDAgMTg0LDIyOCAxNzIsMjI4IiBmaWxsPSIjYzI2YjZiIi8+PHRleHQgeD0iMTc4IiB5PSIyNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBlcnRlcyA6IDEwLDAgSjwvdGV4dD48cmVjdCB4PSIxNTAiIHk9IjgyIiB3aWR0aD0iMjQiIGhlaWdodD0iMTAwIiByeD0iNCIgZmlsbD0iI2U5ZWVmNCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTYyIiB5PSI1NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+dHVyYmluZTwvdGV4dD48dGV4dCB4PSIxNjIiIHk9IjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7OtyA9IDkwICU8L3RleHQ+PHJlY3QgeD0iMzI0IiB5PSI5MiIgd2lkdGg9IjEyNiIgaGVpZ2h0PSI2OC40IiByeD0iMCIgZmlsbD0iI2Y1YzI2YiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjM4NyIgeT0iMTMxLjIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjg1LDUgSjwvdGV4dD48cmVjdCB4PSIzMjQiIHk9IjE2MC40IiB3aWR0aD0iMy42IiBoZWlnaHQ9IjY3LjYiIHJ4PSIwIiBmaWxsPSIjZTdhM2EzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBvbHlnb24gcG9pbnRzPSIzMjUuOCwyNDAgMzMxLjgsMjI4IDMxOS44LDIyOCIgZmlsbD0iI2MyNmI2YiIvPjx0ZXh0IHg9IjMyNS44IiB5PSIyNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBlcnRlcyA6IDQsNSBKPC90ZXh0PjxyZWN0IHg9IjMwMCIgeT0iODIiIHdpZHRoPSIyNCIgaGVpZ2h0PSI5MiIgcng9IjQiIGZpbGw9IiNlOWVlZjQiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNiIvPjx0ZXh0IHg9IjMxMiIgeT0iNTQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmFsdGVybmF0ZXVyPC90ZXh0Pjx0ZXh0IHg9IjMxMiIgeT0iNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPs63ID0gOTUgJTwvdGV4dD48cmVjdCB4PSI0NzQiIHk9IjkyIiB3aWR0aD0iMTU2IiBoZWlnaHQ9IjYyLjkzIiByeD0iMCIgZmlsbD0iI2Y1YzI2YiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjU1MiIgeT0iMTI4LjQ2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj43OCw3IEo8L3RleHQ+PHJlY3QgeD0iNDc0IiB5PSIxNTQuOTMiIHdpZHRoPSI1LjQ3IiBoZWlnaHQ9IjczLjA3IiByeD0iMCIgZmlsbD0iI2U3YTNhMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwb2x5Z29uIHBvaW50cz0iNDc2Ljc0LDI0MCA0ODIuNzQsMjI4IDQ3MC43NCwyMjgiIGZpbGw9IiNjMjZiNmIiLz48dGV4dCB4PSI0NzYuNzQiIHk9IjI2MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cGVydGVzIDogNiw4IEo8L3RleHQ+PHJlY3QgeD0iNDUwIiB5PSI4MiIgd2lkdGg9IjI0IiBoZWlnaHQ9Ijg4LjQiIHJ4PSI0IiBmaWxsPSIjZTllZWY0IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI0NjIiIHk9IjU0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5saWduZTwvdGV4dD48dGV4dCB4PSI0NjIiIHk9IjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7OtyA9IDkyICU8L3RleHQ+PHRleHQgeD0iNjI4IiB5PSI4MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzlhNmEwMCIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+dXRpbGlzYXRldXI8L3RleHQ+PC9zdmc+)
*Chaîne de l'exemple : turbine (0,90), alternateur (0,95) et ligne (0,92) ; sur 100 J fournis par l'eau, environ 79 J arrivent à l'utilisateur.*
<!-- /schema -->

Une chaîne énergétique enchaîne plusieurs conversions : chaque maillon a son propre rendement.
Le **rendement global** de la chaîne est le **produit** des rendements de chaque étape :

$$\boxed{\eta_{\text{global}} = \eta_1 \times \eta_2 \times \cdots \times \eta_n}$$

C'est un produit, **jamais une somme ni une moyenne**. Comme chaque $\eta$ est inférieur à 1,
le rendement global est toujours **plus petit que le plus faible** des rendements : les pertes
s'accumulent à chaque maillon.

> **Exemple.** Une chaîne comporte une turbine ($\eta_1 = 0{,}90$) puis un alternateur
> ($\eta_2 = 0{,}95$) puis une ligne de transport ($\eta_3 = 0{,}92$). Le rendement global vaut
> $$\eta_{\text{global}} = 0{,}90 \times 0{,}95 \times 0{,}92 \approx 0{,}79 = 79\ \%.$$
> Sur $100$ J fournis par l'eau, environ $79$ J arrivent à l'utilisateur.

> ⚠️ L'erreur classique est d'**additionner** les rendements (on obtiendrait $2{,}77$, soit
> $277\ \%$ : absurde). On les **multiplie**.

---

## 7. Les pertes par effet Joule

### Définition

Quand un courant d'intensité $I$ traverse un conducteur de résistance $R$, celui-ci **chauffe** :
de l'énergie électrique est convertie en chaleur. C'est l'**effet Joule**. La puissance
dissipée vaut :

$$\boxed{P = R \, I^2}$$

avec $P$ en **watts** (W), $R$ en **ohms** ($\Omega$) et $I$ en **ampères** (A).

> **Exemple.** Un câble de résistance $R = 2{,}0\ \Omega$ parcouru par $I = 10$ A dissipe
> $P = 2{,}0 \times 10^2 = 200$ W en pure chaleur. Cette énergie est **perdue** pour le transport.

### Pourquoi on transporte à très haute tension

L'effet Joule dépend du **carré** de l'intensité : diviser $I$ par 10 divise les pertes par
**100**. Or, pour transporter une même puissance $P = U \times I$, augmenter la tension $U$
permet de **réduire l'intensité** $I$. C'est pourquoi les lignes à haute tension fonctionnent à
plusieurs centaines de milliers de volts : moins d'intensité, donc beaucoup moins de pertes par
effet Joule.

> **Exemple.** Pour acheminer $P = 1{,}0 \times 10^6$ W : sous $1000$ V il faut $I = P/U = 1000$ A,
> mais sous $100\,000$ V il ne faut plus que $I = 10$ A — et comme les pertes varient en $I^2$,
> elles sont divisées par $100^2 = 10\,000$.

---

## 8. Le stockage de l'énergie

L'électricité produite par le vent ou le Soleil est **intermittente** : elle ne coïncide pas
toujours avec la demande. Comme l'électricité elle-même se stocke très mal, on la **convertit**
en une autre forme d'énergie qu'on saura restituer plus tard. Trois grandes familles :

| Type de stockage | Sous quelle forme | Exemples |
|---|---|---|
| **Chimique** | énergie de liaisons chimiques | batteries, accumulateurs, dihydrogène |
| **Mécanique** | énergie de position ou de mouvement | STEP (barrage), volant d'inertie, air comprimé |
| **Électromagnétique** | champ électrique ou magnétique | supercondensateurs, bobines supraconductrices |

> **Exemple (mécanique).** Une **STEP** (station de transfert d'énergie par pompage) pompe de
> l'eau vers un réservoir en hauteur quand l'électricité est abondante, puis la laisse
> redescendre dans une turbine quand la demande augmente. L'énergie est stockée sous forme
> d'**énergie de position** de l'eau.

> **Exemple (chimique).** Une batterie stocke l'énergie par une réaction chimique et la restitue
> sous forme électrique par la réaction inverse — le principe de la pile, mais **rechargeable**.

> ⚠️ Stocker, c'est convertir **deux fois** (aller puis retour) : chaque conversion a son
> rendement, donc le rendement global du stockage est **inférieur** à celui d'un seul maillon.

---

## 9. Tableau récapitulatif

| Notion | À retenir | Relation / unité |
|---|---|---|
| Induction | tension créée par un champ magnétique **qui varie** | plus la variation est rapide, plus la tension est grande |
| Alternateur | convertit un **mouvement** en électricité | mécanique $\to$ électrique |
| Trois voies sans combustion | mécanique, radiative, chimique | alternateur / photovoltaïque / pile |
| Effet photovoltaïque | lumière $\to$ électricité, **directe** | semi-conducteur (silicium) |
| Rendement | fraction utile | $\eta = \dfrac{E_{\text{utile}}}{E_{\text{reçue}}}$, sans unité, $0 \le \eta \le 1$ |
| Rendement global | **produit** des rendements | $\eta_{\text{g}} = \eta_1 \times \eta_2 \times \cdots$ |
| Effet Joule | pertes par échauffement | $P = R I^2$ (W) |
| Haute tension | réduit $I$, donc les pertes en $I^2$ | $P = U I$ |
| Stockage | chimique / mécanique / électromagnétique | conversion réversible |

**Unités utiles** : puissance en **watt** (W) ; énergie en **joule** (J) ou en
**kilowattheure** (kWh), avec $1\ \text{kWh} = 3{,}6 \times 10^6$ J ; rendement en **%** (sans
unité). Rappel : $1$ W $= 1$ J/s, donc $E = P \times t$.

---

## 10. Les erreurs qui coûtent des points

1. **Croire qu'un aimant immobile induit un courant.** Il faut une **variation** du champ
   magnétique. Sans mouvement, pas d'induction.
2. **Confondre turbine et alternateur.** La turbine fournit le mouvement ; c'est
   l'**alternateur** qui produit l'électricité.
3. **Additionner les rendements d'une chaîne.** On les **multiplie**. Une somme donnerait un
   rendement supérieur à 100 %, ce qui est impossible.
4. **Annoncer un rendement supérieur à 1** (ou à 100 %). Une conversion ne peut pas restituer
   plus qu'elle ne reçoit : $\eta \le 1$ toujours.
5. **Écrire $P = RI$ au lieu de $P = RI^2$** pour l'effet Joule. L'intensité est **au carré** —
   c'est tout l'intérêt de transporter à haute tension.
6. **Oublier les unités ou les conversions** : mélanger W et kW, ou J et kWh
   ($1$ kWh $= 3{,}6 \times 10^6$ J). Une puissance n'est pas une énergie.
7. **Confondre solaire photovoltaïque (électricité) et solaire thermique (chaleur).** Seul le
   photovoltaïque relève de ce chapitre.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel d'ENSEIGNEMENT SCIENTIFIQUE, tronc commun, terminale générale,
BO du 22 janvier 2019, version aménagée 2023 (docs/programme-terminale-enseignement-scientifique.txt,
section « Production et conversion de l'énergie électrique (physique) », thème 2 « Le futur des
énergies », lignes 30-35 du .txt extrait). Points du programme couverts :
  - Induction électromagnétique ; alternateur ; production sans combustion.
  - Rendement de conversion ; rendement global d'une chaîne énergétique.
  - Effet photovoltaïque (semi-conducteurs) ; pertes par effet Joule.
  - Stockage de l'énergie (chimique, mécanique, électromagnétique).

Provenance : extraction via WebFetch depuis le PDF officiel education.gouv.fr / eduscol
(https://www.education.gouv.fr/media/133235/download). À CONFRONTER AU PDF officiel avant
publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Niveau d'exigence sur l'induction : le programme d'enseignement scientifique reste QUALITATIF
  (pas de loi de Faraday e = -dΦ/dt, pas de calcul de flux). J'ai volontairement gardé le
  qualitatif. À confirmer qu'aucune expression quantitative n'est attendue.
- Les « trois voies » (mécanique/radiative/électrochimique) : cette structuration en trois voies
  est une reformulation pédagogique fidèle à l'esprit du thème ; vérifier la terminologie exacte
  attendue.
- P = RI² : l'effet Joule est explicitement au programme. Le lien « haute tension → moins de
  pertes » est classique et attendu ; confirmer qu'un calcul chiffré (comme l'exemple §7) est
  bien du niveau tronc commun terminale.
- Rendement global = produit des rendements : central au programme, exemples numériques fournis.
- Stockage : les trois familles (chimique/mécanique/électromagnétique) sont citées telles quelles
  par le programme. Le dihydrogène est-il à ranger en « chimique » (mon choix) — à valider.
- Ordres de grandeur cités (rendement PV 15-20 %, 1 kWh = 3,6 MJ) : exacts, mais vérifier qu'ils
  ne dépassent pas le périmètre attendu.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
