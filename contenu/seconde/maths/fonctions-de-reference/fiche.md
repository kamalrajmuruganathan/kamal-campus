---
id: 2nde-math-fonctions-de-reference
titre: "Fonctions de référence"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 13
prerequis:
  - Notion de fonction (Seconde)
  - Calcul numérique et algébrique (Seconde)
statut: brouillon
relu_par: null
---

# Fonctions de référence

> Cinq fonctions à connaître par cœur : leur courbe, leurs variations, leur signe. Toutes les
> fonctions rencontrées ensuite se ramènent, d'une façon ou d'une autre, à celles-ci.

---

## 1. Fonctions affines

$$f(x) = ax + b \qquad \text{définie sur } \mathbb{R}$$

- $a$ est le **coefficient directeur**, $b$ l'**ordonnée à l'origine**
- La courbe est une **droite**

| Signe de $a$ | Variations |
|---|---|
| $a > 0$ | croissante |
| $a = 0$ | constante |
| $a < 0$ | décroissante |

### Calculer le coefficient directeur

$$a = \frac{y_\mathrm{B} - y_\mathrm{A}}{x_\mathrm{B} - x_\mathrm{A}}$$

> **Cas particulier** : si $b = 0$, la fonction $x \mapsto ax$ est **linéaire** et sa droite
> passe par l'origine.

---

## 2. Fonction carré

$$f(x) = x^2 \qquad \text{définie sur } \mathbb{R}$$

- Courbe : une **parabole**, sommet à l'origine, ouverte vers le haut
- Fonction **paire** : symétrie par rapport à l'axe des ordonnées
- **Toujours positive ou nulle**

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|
| $x^2$ | | $\searrow$ | $0$ | $\nearrow$ | |

> ⚠️ **La fonction carré n'est PAS croissante sur $\mathbb{R}$.** Elle décroît sur les négatifs
> et croît sur les positifs. Conséquence directe : si $a < b$, on **ne peut pas** conclure
> $a^2 < b^2$. Contre-exemple : $-5 < 2$ mais $25 > 4$.

---

## 3. Fonction inverse

$$f(x) = \frac{1}{x} \qquad \text{définie sur } \mathbb{R}^*$$

- Courbe : une **hyperbole**, deux branches
- Fonction **impaire** : symétrie par rapport à l'origine
- **Décroissante sur $]-\infty\,;0[$ et sur $]0\,;+\infty[$**, jamais sur $\mathbb{R}^*$
- Du signe de $x$

> ⚠️ Elle n'est **pas** décroissante sur $\mathbb{R}^*$ : $f(-1) = -1$ et $f(1) = 1$, donc
> l'image augmente alors que $x$ augmente. Il faut toujours annoncer les variations
> **intervalle par intervalle**.

---

## 4. Fonction racine carrée

$$f(x) = \sqrt{x} \qquad \text{définie sur } [0\,;+\infty[$$

- **Croissante** sur son ensemble de définition
- Toujours positive ou nulle
- Courbe : une demi-parabole couchée, partant de l'origine

> **Comparaison utile** : sur $[0\,;1]$, $\sqrt{x} \geqslant x \geqslant x^2$.
> Sur $[1\,;+\infty[$, l'ordre s'inverse : $x^2 \geqslant x \geqslant \sqrt{x}$.

---

## 5. Fonction cube

$$f(x) = x^3 \qquad \text{définie sur } \mathbb{R}$$

- **Croissante sur $\mathbb{R}$ tout entier**
- Fonction **impaire**
- Du signe de $x$

> C'est la seule des fonctions de référence non affine qui soit monotone sur $\mathbb{R}$.
> Conséquence : si $a < b$, alors $a^3 < b^3$ — contrairement au carré.

---

## 6. Tableau de synthèse

| Fonction | Domaine | Variations | Signe | Parité |
|---|---|---|---|---|
| $ax+b$ | $\mathbb{R}$ | selon le signe de $a$ | change en $-\frac ba$ | — |
| $x^2$ | $\mathbb{R}$ | $\searrow$ puis $\nearrow$ en $0$ | $\geqslant 0$ | paire |
| $\dfrac{1}{x}$ | $\mathbb{R}^*$ | $\searrow$ sur chaque intervalle | signe de $x$ | impaire |
| $\sqrt{x}$ | $[0\,;+\infty[$ | $\nearrow$ | $\geqslant 0$ | — |
| $x^3$ | $\mathbb{R}$ | $\nearrow$ sur $\mathbb{R}$ | signe de $x$ | impaire |

---

## 7. Comparer des nombres avec ces fonctions

Le raisonnement type : *« la fonction $\ldots$ est croissante sur $\ldots$, donc l'ordre est
conservé »*.

> **Exemple.** Comparer $\sqrt{7}$ et $\sqrt{5}$.
> La fonction racine est croissante sur $[0\,;+\infty[$ et $5 < 7$, donc
> $\sqrt{5} < \sqrt{7}$.

> **Exemple piège.** Comparer $(-3)^2$ et $(-2)^2$.
> La fonction carré est **décroissante** sur les négatifs. Comme $-3 < -2$, on obtient
> $(-3)^2 > (-2)^2$, soit $9 > 4$. L'ordre s'est **inversé**.

---

## 8. Les erreurs qui coûtent des points

1. **Dire que la fonction carré est croissante.** Elle ne l'est que sur $[0\,;+\infty[$.
2. **Déduire $a^2 < b^2$ de $a < b$** sans vérifier les signes.
3. **Annoncer la décroissance de l'inverse sur $\mathbb{R}^*$.** C'est sur chacun des deux
   intervalles séparément.
4. **Oublier que $\sqrt{x}$ n'existe pas pour $x < 0$.**
5. **Confondre la parabole du carré et l'hyperbole de l'inverse** dans une lecture graphique.
6. **Croire que $x^3$ se comporte comme $x^2$.** Le cube est croissant sur $\mathbb{R}$ et
   prend des valeurs négatives.
7. **Utiliser $\dfrac{1}{x}$ en oubliant la valeur interdite $x = 0$.**

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Fonctions ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La fonction CUBE est-elle bien au programme de seconde dans le nouveau texte ? Elle y
  figurait dans le programme précédent, mais je ne l'ai pas vue explicitement dans mon
  extraction — à vérifier avant publication, c'est un point de périmètre net.
- La fonction valeur absolue est-elle une fonction de référence en seconde ?
- Les fonctions homographiques relèvent-elles de la seconde ou de la première ?
- Les démonstrations exigibles sur les variations (par exemple la décroissance de l'inverse
  démontrée par le calcul de f(b) - f(a)).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
