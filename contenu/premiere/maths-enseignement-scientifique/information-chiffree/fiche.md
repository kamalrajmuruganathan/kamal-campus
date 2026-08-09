---
id: 1es-math-information-chiffree
titre: "Analyse de l'information chiffrée"
voie: generale
niveau: premiere
parcours: maths-enseignement-scientifique
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques intégrées à l'enseignement scientifique"
duree_lecture_min: 13
prerequis:
  - Pourcentages et proportions (Seconde)
  - Fonctions affines (Seconde)
statut: brouillon
relu_par: null
---

# Analyse de l'information chiffrée

> Ce chapitre a un objectif que le programme énonce explicitement : **développer
> l'esprit critique**. Un pourcentage mal lu dans un article, une hausse annoncée
> qui n'en est pas une, un graphique tronqué — savoir le repérer est une compétence
> citoyenne autant que mathématique.

---

## 1. Proportion et pourcentage

Une **proportion** est un quotient : partie / total. Exprimée en pourcentage, on la
multiplie par 100.

$$p = \frac{\text{effectif de la partie}}{\text{effectif total}}$$

> ⚠️ **Un pourcentage n'a de sens que rapporté à sa base.** « 30 % » ne veut rien
> dire seul : 30 % de quoi ? C'est la première question à poser devant un chiffre.

---

## 2. Évolution : taux et coefficient multiplicateur

### Taux d'évolution

$$\boxed{t = \frac{V_{\text{finale}} - V_{\text{initiale}}}{V_{\text{initiale}}}}$$

Exprimé en pourcentage en multipliant par 100.

### Coefficient multiplicateur

$$\boxed{\mathrm{CM} = 1 + \frac{t}{100}}$$

| Évolution | Coefficient |
|---|---|
| $+20\,\%$ | $1{,}20$ |
| $-20\,\%$ | $0{,}80$ |
| $+100\,\%$ | $2$ |
| $-50\,\%$ | $0{,}5$ |

> ⚠️ Une **baisse** de $20\,\%$ donne un coefficient de $0{,}80$ — **jamais** $-0{,}20$.
> Multiplier par $0{,}8$, c'est bien retirer un cinquième.

---

## 3. Évolutions successives — le piège central du chapitre

Pour enchaîner deux évolutions, on **multiplie les coefficients** :

$$\mathrm{CM}_{\text{global}} = \mathrm{CM}_1 \times \mathrm{CM}_2$$

> ⚠️ **On n'additionne JAMAIS les taux.**

> **L'exemple qui démonte l'intuition.** Un prix augmente de $50\,\%$, puis baisse
> de $50\,\%$.
>
> $\mathrm{CM} = 1{,}5 \times 0{,}5 = 0{,}75$
>
> Le prix final vaut $75\,\%$ du prix de départ : on a **perdu $25\,\%$**, alors que
> l'addition naïve $+50 - 50$ donnerait $0\,\%$.
>
> *Pourquoi* : la hausse s'applique au prix initial, la baisse au prix déjà augmenté.
> Les deux pourcentages ne portent pas sur la même base.

---

## 4. Évolution réciproque

Pour **annuler** une évolution, on applique le coefficient **inverse** :

$$\mathrm{CM}_{\text{réciproque}} = \frac{1}{\mathrm{CM}}$$

> **Exemple.** Un prix a baissé de $20\,\%$ ($\mathrm{CM} = 0{,}8$). Pour revenir au
> prix initial, il faut le multiplier par $\dfrac{1}{0{,}8} = 1{,}25$, soit une hausse
> de **$25\,\%$** — et non de $20\,\%$.

---

## 5. Évolution moyenne

Si une grandeur subit $n$ évolutions successives de coefficient global $\mathrm{CM}$,
le **coefficient moyen** est

$$\mathrm{CM}_{\text{moyen}} = \sqrt[n]{\mathrm{CM}} = \mathrm{CM}^{1/n}$$

> **Exemple.** Une population augmente de $30\,\%$ en $3$ ans. Le taux annuel moyen
> vérifie $\mathrm{CM}^3 = 1{,}3$, donc $\mathrm{CM} = 1{,}3^{1/3} \approx 1{,}0914$ :
> environ $+9{,}14\,\%$ par an, et non $10\,\%$.

---

## 6. Points de pourcentage

Quand on compare deux pourcentages, il faut distinguer deux façons de dire l'écart.

> **Exemple.** Un taux de chômage passe de $8\,\%$ à $10\,\%$.
>
> - Il a augmenté de **2 points de pourcentage** (différence)
> - Il a augmenté de **25 %** (évolution relative : $\frac{10-8}{8} = 0{,}25$)
>
> Les deux affirmations sont vraies et décrivent la même chose. Confondre les deux
> — ou choisir celle qui arrange — est une manipulation classique de l'information.

---

## 7. Lire un graphique d'un œil critique

| À vérifier | Pourquoi |
|---|---|
| L'axe des ordonnées part-il de zéro ? | Un axe tronqué exagère visuellement les écarts |
| L'échelle est-elle régulière ? | Une échelle qui change fausse la pente perçue |
| Quelle est la base des pourcentages ? | Sans base, un pourcentage n'informe pas |
| L'effectif total est-il indiqué ? | $50\,\%$ sur $4$ personnes n'est pas $50\,\%$ sur $4000$ |
| La source et la date ? | Une donnée sans provenance ne se vérifie pas |

---

## 8. À retenir absolument

| | |
|---|---|
| Taux d'évolution | $t = \dfrac{V_f - V_i}{V_i}$ |
| Coefficient multiplicateur | $\mathrm{CM} = 1 + \dfrac{t}{100}$ |
| Évolutions successives | on **multiplie** les coefficients |
| Évolution réciproque | coefficient **inverse** |
| Évolution moyenne | racine $n$-ième du coefficient global |
| Points de pourcentage | différence, à ne pas confondre avec l'évolution relative |

---

## 9. Les erreurs qui coûtent des points

1. **Additionner des taux d'évolution successifs.** $+50\,\%$ puis $-50\,\%$ ne donne
   pas $0\,\%$ mais $-25\,\%$.
2. **Traduire une baisse de $20\,\%$ par $-0{,}20$** au lieu de $0{,}80$.
3. **Croire que l'évolution réciproque a le même taux** : annuler $-20\,\%$ demande
   $+25\,\%$.
4. **Confondre points de pourcentage et pourcentage d'évolution.**
5. **Diviser le taux global par $n$** pour trouver le taux moyen : il faut la racine
   $n$-ième du coefficient.
6. **Comparer des pourcentages calculés sur des bases différentes.**
7. **Oublier de préciser la base** d'un pourcentage dans une conclusion rédigée.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, « Programme de mathématiques intégré
à l'enseignement scientifique en classe de première générale »
(docs/programme-prem_gen_non_spe-2026.pdf), partie « Analyse de l'information chiffrée ».

Le programme insiste explicitement sur le développement de l'ESPRIT CRITIQUE et sur
l'ancrage dans des problématiques d'actualité (développement durable, changement
climatique, biodiversité, économie, démographie, santé publique). La section 7 traduit
cette intention.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des « Automatismes » : le programme comporte une rubrique dédiée
  dont l'extraction est trop dégradée pour être exploitée. Vérifier quelles capacités
  de calcul mental sont explicitement exigibles.
- L'évolution moyenne (racine n-ième) est-elle au programme de ce parcours, ou
  réservée à la spécialité ? Je l'ai incluse car classique, à confirmer.
- Les indices (base 100) sont-ils exigibles ? Je ne les ai PAS traités.
- Le programme mentionne l'usage du TABLEUR : vérifier s'il est attendu ici ou
  seulement dans la partie statistique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
