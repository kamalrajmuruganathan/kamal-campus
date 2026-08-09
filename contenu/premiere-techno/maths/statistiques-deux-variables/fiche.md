---
id: 1techno-math-statistiques-deux-variables
titre: "Statistiques à deux variables"
voie: technologique
niveau: premiere
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — première, voie technologique"
duree_lecture_min: 12
prerequis:
  - Statistiques à un caractère (Seconde)
  - Fonctions affines (Seconde)
statut: brouillon
relu_par: null
---

# Statistiques à deux variables

> Le programme est explicite sur un point : les situations doivent être **réelles**,
> en lien avec les enseignements de spécialité. L'exemple qu'il cite lui-même est
> parlant — des mesures d'intensité et de tension en physique-chimie, liées par une
> relation linéaire.

---

## 1. Le nuage de points

Une **série statistique à deux variables quantitatives** associe à chaque individu
deux mesures $(x_i\,;y_i)$. Chaque individu devient un **point** dans un repère.

L'ensemble des points forme le **nuage de points**.

On y observe :

- **la forme** — les points s'alignent-ils ?
- **le sens** — quand $x$ augmente, $y$ augmente-t-il aussi ?
- **la dispersion** — les points sont-ils resserrés autour d'une tendance ?

> **Exemple type du programme** : on mesure la tension $U$ aux bornes d'un conducteur
> ohmique pour différentes intensités $I$. Les points s'alignent — c'est la loi d'Ohm,
> et la pente de la droite donne la résistance $R$.

---

## 2. Le point moyen

$$\boxed{\mathrm{G}\left(\bar{x}\,;\bar{y}\right)}$$

où $\bar x$ et $\bar y$ sont les **moyennes** de chaque variable.

C'est le « centre de gravité » du nuage. **Toute droite d'ajustement passe par lui** —
c'est le contrôle le plus rapide d'un tracé.

> **Exemple.** Pour les couples $(1\,;3)$, $(2\,;5)$, $(3\,;8)$, $(4\,;10)$ :
> $\bar x = \dfrac{1+2+3+4}{4} = 2{,}5$ et $\bar y = \dfrac{3+5+8+10}{4} = 6{,}5$.
> Le point moyen est $\mathrm{G}(2{,}5\,;6{,}5)$.

---

## 3. Ajustement affine

Quand le nuage a une allure rectiligne, on l'approche par une **droite d'ajustement**

$$y = ax + b$$

### La méthode des moindres carrés

C'est la méthode retenue par le programme. Elle consiste à choisir la droite qui rend
**minimale la somme des carrés des écarts verticaux** entre les points et la droite.

```
     y │        ●
       │      ╱ │ écart
       │    ╱   ●
       │  ●╱
       │ ╱│ écart
       │╱ ●
       └──────────── x
```

> **Pourquoi les carrés ?** Élever au carré rend tous les écarts positifs — sinon les
> écarts au-dessus et en dessous se compenseraient — et pénalise fortement les points
> très éloignés de la droite.

En pratique, les coefficients $a$ et $b$ se calculent avec la **calculatrice** ou un
**tableur** : ce n'est pas un calcul à faire à la main.

---

## 4. Utiliser l'ajustement

Une fois la droite obtenue, elle sert à **estimer** des valeurs inconnues.

| | Sens | Fiabilité |
|---|---|---|
| **Interpoler** | estimer **à l'intérieur** des données observées | raisonnable |
| **Extrapoler** | estimer **au-delà** des données | ⚠️ à justifier |

> **Pourquoi l'extrapolation demande de la prudence.** L'ajustement décrit ce qui a
> été mesuré. Rien ne garantit que la relation se prolonge : un conducteur ohmique
> chauffe et sa résistance change, un rendement finit par plafonner.

---

## 5. Corrélation n'est pas causalité

Deux variables peuvent évoluer ensemble sans que l'une cause l'autre.

| Situation | Explication réelle |
|---|---|
| Ventes de glaces ↑ et noyades ↑ | une **cause commune** : la chaleur |
| Nombre de pompiers ↑ et dégâts ↑ | la **taille de l'incendie** cause les deux |

> **Les trois explications possibles d'une corrélation** : un lien de cause à effet,
> une cause commune (variable cachée), ou une simple coïncidence. Un nuage de points
> ne permet **jamais** de trancher à lui seul.

---

## 6. À retenir absolument

| | |
|---|---|
| Nuage de points | un individu = un point $(x_i\,;y_i)$ |
| Point moyen | $\mathrm{G}(\bar x\,;\bar y)$ |
| Propriété clé | la droite d'ajustement passe par $\mathrm{G}$ |
| Moindres carrés | minimise la somme des **carrés** des écarts verticaux |
| En pratique | calculatrice ou tableur |
| Interpoler / extrapoler | à l'intérieur / au-delà des données |
| Corrélation ≠ causalité | trois explications possibles |

---

## 7. Les erreurs qui coûtent des points

1. **Conclure à une cause depuis une corrélation.**
2. **Tracer une droite qui ne passe pas par le point moyen.**
3. **Confondre $\bar x$ et $\bar y$** dans les coordonnées de $\mathrm{G}$.
4. **Ajuster par une droite un nuage manifestement courbe.**
5. **Extrapoler loin des données** sans signaler que la validité n'est pas garantie.
6. **Oublier les unités** dans l'interprétation du coefficient directeur : dans
   $U = RI$, la pente est une résistance, en ohms.
7. **Interpréter $b$ sans contexte** : l'ordonnée à l'origine n'a parfois aucun sens
   physique.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Statistiques et
probabilités », section statistiques (ligne 2273 du .txt extrait).

Éléments explicitement lisibles : « Nuage de points associé à une série statistique à
deux variables quantitatives », « Ajustement affine, point moyen », capacités
« Représenter un nuage de points », « Savoir calculer les coordonnées du point
moyen », « Déterminer et utiliser un ajustement affine ».

⚠️ DIFFÉRENCE NOTABLE AVEC LES AUTRES PARCOURS : le commentaire du programme indique
explicitement « La méthode des moindres carrés est présentée », avec la formulation
d'un minimum. Les moindres carrés sont donc AU PROGRAMME en voie technologique, alors
que le parcours « enseignement scientifique » mentionne plutôt un ajustement au jugé
ou par la droite de Mayer. La section 3 reflète cette différence.

Le programme cite explicitement comme contexte les « mesures expérimentales de
grandeurs liées par une relation linéaire en physique-chimie (intensité et tension) »,
d'où l'exemple filé de la loi d'Ohm.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les FORMULES des coefficients des moindres carrés sont-elles exigibles, ou seulement
  l'usage de la calculatrice ? J'ai retenu la seconde lecture.
- Le COEFFICIENT DE CORRÉLATION est-il au programme ? Je ne l'ai PAS introduit.
- Le programme mentionne d'autres contextes avant « mesures expérimentales » que
  l'extraction a perdus : vérifier qu'aucun n'est structurant.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
