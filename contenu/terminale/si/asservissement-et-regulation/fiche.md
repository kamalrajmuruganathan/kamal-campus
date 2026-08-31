---
id: tale-si-asservissement-et-regulation
titre: "Asservissement et régulation"
voie: generale
niveau: terminale
parcours: si
matiere: si
programme: "Terminale — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Modélisation des systèmes par schéma-blocs (Première SI)
  - Notion de fonction et de proportionnalité
  - Grandeurs physiques et unités
statut: brouillon
relu_par: null
---

# Asservissement et régulation

> Un système **asservi** est un système capable de **mesurer** sa propre sortie,
> de la **comparer** à la consigne demandée, puis de **corriger** son action pour
> réduire l'écart. C'est le principe du *retour d'information* (la boucle de
> **rétroaction**), au cœur du pilotage automatique des systèmes techniques :
> régulateur de vitesse, thermostat, drone, machine-outil…

---

# 1. Système en boucle ouverte vs boucle fermée

## Boucle ouverte (commande)

En **boucle ouverte**, la commande est envoyée à l'actionneur sans jamais
vérifier le résultat obtenu. Exemple : un four réglé à « puissance 5 » chauffe
toujours pareil, quelle que soit la température réelle atteinte.

- Avantage : simple, pas de capteur.
- Inconvénient : sensible aux **perturbations** (porte ouverte, tension qui
  varie…). Aucune correction n'est possible.

## Boucle fermée (asservissement)

En **boucle fermée**, un **capteur** mesure la grandeur de sortie. Cette mesure
est renvoyée vers l'entrée et **comparée** à la **consigne**. La différence est
l'**écart** (ou erreur) $\varepsilon$. Le **correcteur** exploite cet écart pour
commander l'actionneur.

Chaîne fonctionnelle typique :

```
consigne → [comparateur] → écart → [correcteur] → [actionneur] → SORTIE
                 ▲                                                  │
                 └────────────── [capteur] ◄────────────────────────┘
                              (chaîne de retour)
```

On distingue deux vocabulaires proches :

- **Asservissement** : la consigne varie et la sortie doit la **suivre** (ex.
  suivi de trajectoire).
- **Régulation** : la consigne est **constante** et le système doit la
  **maintenir** malgré les perturbations (ex. maintenir 20 °C dans une pièce).

---

# 2. Les grandeurs d'un système asservi

- **Consigne** : valeur souhaitée pour la sortie (ce qu'on demande).
- **Mesure** : valeur réelle de la sortie, fournie par le capteur.
- **Écart** $\varepsilon =$ consigne $-$ mesure. C'est lui qui pilote la
  correction : si $\varepsilon = 0$, le système est **au repos** sur sa cible.
- **Perturbation** : grandeur extérieure non désirée qui éloigne la sortie de la
  consigne (vent, charge, frottement, ouverture d'une porte…).

**À retenir** : sans capteur, pas de boucle fermée, donc pas d'asservissement.

---

# 3. Schéma-blocs et fonction de transfert

On modélise chaque composant par un **bloc** portant sa **fonction de transfert**
$H = \dfrac{\text{grandeur de sortie}}{\text{grandeur d'entrée}}$ (dans le domaine
de Laplace, notée $H(p)$).

## Blocs en série (cascade)

Deux blocs $H_1$ et $H_2$ en série se multiplient :
$$H = H_1 \times H_2.$$

## Fonction de transfert en boucle fermée (FTBF)

Avec une chaîne directe $H$ et une chaîne de retour $K$, la fonction de transfert
en boucle fermée s'écrit (retour négatif) :
$$\text{FTBF} = \frac{H}{1 + H\,K}.$$

Si le retour est **unitaire** ($K = 1$, la sortie est mesurée directement) :
$$\text{FTBF} = \frac{H}{1 + H}.$$

**Exemple de calcul.** Un moteur de gain statique $H = 4$ est asservi avec un
retour unitaire. Le gain de l'ensemble en boucle fermée vaut
$$\frac{4}{1 + 4} = \frac{4}{5} = 0{,}8.$$
Le système « écrase » le gain vers 1 : c'est l'effet stabilisant de la boucle
fermée.

---

# 4. Les performances d'un système asservi

On juge un asservissement sur trois qualités, mesurées sur la **réponse à un
échelon** (on change brusquement la consigne et on observe la sortie) :

1. **Stabilité** : la sortie doit converger vers une valeur finie, sans osciller
   indéfiniment ni diverger. Un système instable est inutilisable (voire
   dangereux).
2. **Précision** : l'**écart statique** (l'écart qui subsiste une fois le régime
   permanent atteint) doit être le plus petit possible. Précision parfaite ⇔
   écart statique nul.
3. **Rapidité** : elle se mesure par le **temps de réponse à 5 %** — durée au
   bout de laquelle la sortie reste dans une bande de $\pm 5\,\%$ autour de sa
   valeur finale.

Un quatrième critère surveille la stabilité relative : le **dépassement**,
pourcentage dont la sortie dépasse sa valeur finale avant de s'y stabiliser. Un
dépassement trop grand annonce un système « nerveux », proche de l'instabilité.

---

# 5. Le correcteur (régulateur PID)

Le correcteur transforme l'écart en commande. Le plus courant est le **PID**, qui
combine trois actions :

- **Proportionnelle (P)** : commande proportionnelle à l'écart. Augmente la
  rapidité et réduit l'écart, mais un gain trop fort déstabilise (oscillations).
- **Intégrale (I)** : agit sur l'**accumulation** de l'écart dans le temps. Son
  rôle clé : **annuler l'écart statique** (améliore la précision).
- **Dérivée (D)** : agit sur la **vitesse de variation** de l'écart. Elle
  **anticipe**, amortit les oscillations et limite le dépassement.

Régler un PID, c'est faire un **compromis** : plus rapide ↔ moins stable, plus
précis ↔ risque d'oscillation.

---

# Ce qu'il faut retenir

- Boucle **ouverte** = commande sans vérification ; boucle **fermée** = mesure +
  comparaison + correction (**rétroaction**).
- **Écart** $\varepsilon =$ consigne $-$ mesure ; il pilote le correcteur et vaut
  $0$ quand la cible est atteinte.
- **Asservissement** = suivre une consigne variable ; **régulation** = maintenir
  une consigne constante malgré les perturbations.
- Blocs en série : on **multiplie** ; boucle fermée à retour unitaire :
  $\text{FTBF} = \dfrac{H}{1+H}$.
- Trois performances : **stabilité, précision** (écart statique),
  **rapidité** (temps de réponse à 5 %).
- Le correcteur **I** annule l'écart statique ; le correcteur **D** amortit et
  anticipe ; le **P** accélère mais peut déstabiliser.

# Les erreurs à éviter

- Confondre **consigne** (ce qu'on demande) et **mesure** (ce qu'on obtient).
- Croire qu'un système en boucle ouverte peut se corriger : il ne le peut pas,
  il n'a pas de capteur.
- Penser que « plus le gain est grand, mieux c'est » : un gain trop élevé rend le
  système instable.
- Additionner les fonctions de transfert de blocs en série alors qu'on les
  **multiplie**.
