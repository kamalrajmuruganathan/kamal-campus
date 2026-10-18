---
id: sciences-brevet-pc-techno
titre: "Brevet — Sciences : physique-chimie (détartrage) et technologie (arrosage connecté)"
examen: "Brevet — épreuve de sciences (physique-chimie et technologie)"
niveau: troisieme
matiere: physique-chimie
statut: brouillon
relu_par: null
---

# Diplôme national du brevet — Épreuve de sciences (sujet d'entraînement)

**Durée : 1 h 00** (30 min par discipline) — **Barème indicatif : 50 points** (25 + 25) —
**Calculatrice autorisée.**

Le sujet comporte deux parties indépendantes : **physique-chimie** et **technologie**. Les
documents sont décrits en mots. La rédaction, les **unités** et la justification des réponses
sont évaluées. Toute trace de recherche est valorisée.

| Partie | Physique-chimie | Technologie | Total |
|---|---|---|---|
| Points | 25 | 25 | 50 |

---

# Partie 1 — Physique-chimie : détartrer une bouilloire (25 points)

Au fond d'une bouilloire se forme un dépôt blanc : le **calcaire**, constitué de carbonate
de calcium, de formule $\mathrm{CaCO_3}$. Pour l'éliminer, on utilise du vinaigre blanc.

**Document 1 — Le vinaigre blanc.** C'est une solution aqueuse d'acide acétique. Son pH est
voisin de $2{,}5$.

**Document 2 — Une expérience.** Dans un bécher **ouvert** posé sur une balance, on verse
du vinaigre blanc, puis on ajoute $2{,}0$ g de poudre de calcaire. Il se produit une
effervescence : un gaz se dégage. La balance indique $252{,}0$ g juste après l'ajout de la
poudre, et $251{,}2$ g lorsque l'effervescence s'arrête.

**Document 3 — Quelques tests chimiques.**

| Espèce testée | Réactif | Observation si le test est positif |
|---|---|---|
| Dioxyde de carbone $\mathrm{CO_2}$ | eau de chaux | l'eau de chaux se trouble |
| Ion calcium $\mathrm{Ca^{2+}}$ | oxalate d'ammonium | précipité blanc |
| Ion chlorure $\mathrm{Cl^-}$ | nitrate d'argent | précipité blanc qui noircit à la lumière |
| Ion cuivre $\mathrm{Cu^{2+}}$ | hydroxyde de sodium | précipité bleu |

**Donnée** : numéro atomique du calcium $Z = 20$.

1. Le vinaigre blanc est-il acide, neutre ou basique ? Justifier. **(2 pts)**
2. On veut identifier le gaz qui se dégage. Décrire le test à réaliser et le résultat
   attendu si ce gaz est du dioxyde de carbone. **(3 pts)**
3. a. Calculer la variation de masse indiquée par la balance au cours de l'expérience.
   b. Cette diminution de masse contredit-elle la conservation de la masse au cours d'une
      transformation chimique ? Expliquer.
   c. Proposer une modification de l'expérience qui permettrait de vérifier la conservation
      de la masse. **(5 pts)**
4. a. Combien de protons contient le noyau d'un atome de calcium ? Combien d'électrons
      possède cet atome ? Justifier.
   b. L'ion calcium a pour formule $\mathrm{Ca^{2+}}$. Comment cet ion est-il formé à partir de
      l'atome ? Combien d'électrons possède-t-il ? **(5 pts)**
5. Après la réaction, on veut montrer que le liquide contient des ions calcium. Quel test
   faut-il réaliser ? Qu'observe-t-on si le test est positif ? **(4 pts)**
6. On dilue le vinaigre blanc en y ajoutant beaucoup d'eau. Comment évolue son pH ? Peut-il
   devenir supérieur à $7$ ? **(4 pts)**
7. Citer deux précautions de sécurité à prendre lors de la manipulation d'un produit
   détartrant acide. **(2 pts)**

---

# Partie 2 — Technologie : un arrosage automatique connecté (25 points)

Une famille équipe son potager d'un système d'arrosage automatique.

**Document 4 — Description du système.**
- Un **capteur d'humidité** planté dans la terre mesure l'humidité du sol (de $0\,\%$, sol
  très sec, à $100\,\%$, sol gorgé d'eau).
- Un **capteur de luminosité** indique s'il fait jour ou nuit (de $0\,\%$, obscurité totale,
  à $100\,\%$, plein soleil).
- Une **carte programmable** lit les capteurs et commande une **électrovanne** $12$ V qui
  ouvre ou ferme l'arrivée d'eau.
- Un **module Wi-Fi** envoie l'état du potager vers une application sur smartphone, par
  l'intermédiaire de la box Internet de la maison.
- Le tout est alimenté par un petit **panneau solaire** qui recharge une **batterie** $12$ V.

**Document 5 — Règle de fonctionnement.** L'arrosage dure $15$ minutes. Il se déclenche
seulement si le sol est sec (humidité **inférieure à $30\,\%$**) **et** s'il fait nuit
(luminosité **inférieure à $20\,\%$**), afin de limiter l'évaporation.

**Données** : débit d'eau quand l'électrovanne est ouverte : $4$ L/min ; puissance de
l'électrovanne ouverte : $6$ W ; prix de l'eau du robinet : $4{,}30$ € par m³ ;
$1$ m³ $= 1\,000$ L.

1. Énoncer la fonction d'usage de ce système. **(2 pts)**
2. Classer les éléments suivants dans la chaîne d'information ou dans la chaîne d'énergie,
   en précisant la fonction de chacun (acquérir, traiter, communiquer, alimenter,
   distribuer, convertir) : capteur d'humidité, carte programmable, module Wi-Fi,
   panneau solaire et batterie, électrovanne. **(6 pts)**
3. a. Recopier et compléter l'algorithme suivant à l'aide du document 5.
      ```
      répéter indéfiniment
          lire humidité
          lire luminosité
          si ( ……… ) et ( ……… ) alors
              ouvrir l'électrovanne
              attendre ……… minutes
              fermer l'électrovanne
          fin si
          attendre 30 minutes
      fin répéter
      ```
   b. Pour chacune des situations suivantes, dire si l'arrosage se déclenche :
      (humidité $25\,\%$ ; luminosité $10\,\%$), (humidité $25\,\%$ ; luminosité $70\,\%$),
      (humidité $45\,\%$ ; luminosité $5\,\%$). **(6 pts)**
4. Calculer le volume d'eau utilisé lors d'un arrosage. Le système arrose $5$ nuits par
   semaine : calculer le volume d'eau consommé en une semaine, puis son coût. **(4 pts)**
5. Calculer l'énergie électrique, en wattheures (Wh), consommée par l'électrovanne lors
   d'un arrosage. **(3 pts)**
6. a. Par quel moyen les informations du potager parviennent-elles jusqu'au smartphone ?
   b. Citer un risque lié à l'utilisation d'un objet connecté et une précaution à prendre. **(4 pts)**

---

# Corrigé

## Partie 1 — Physique-chimie

**1.** Le pH du vinaigre blanc ($2{,}5$) est **inférieur à $7$** : c'est une solution **acide**.

**2.** On fait barboter le gaz dans de l'**eau de chaux** : si l'eau de chaux se **trouble**, le
gaz est du dioxyde de carbone (document 3).

**3.** a. Variation de masse : $251{,}2 - 252{,}0 = -0{,}8$ g. La masse a diminué de $0{,}8$ g.
   b. Non. Le bécher est **ouvert** : le dioxyde de carbone formé s'échappe dans l'air et n'est
      plus pesé. La masse totale (y compris celle du gaz) se conserve, mais la balance ne pèse
      pas le gaz qui est parti.
   c. Il faut réaliser l'expérience dans un **récipient fermé** (par exemple un flacon bouché
      ou une bouteille fermée par un ballon de baudruche) : la masse indiquée reste alors la
      même avant et après la transformation.

**4.** a. Le numéro atomique $Z = 20$ est le nombre de protons du noyau : **$20$ protons**.
      Un atome est électriquement neutre, il possède donc autant d'électrons que de protons :
      **$20$ électrons**.
   b. L'ion $\mathrm{Ca^{2+}}$ porte deux charges positives : il provient d'un atome de calcium
      qui a **perdu $2$ électrons**. Il possède donc $20 - 2 = 18$ électrons (et toujours
      $20$ protons).

**5.** On prélève un peu du liquide et on ajoute quelques gouttes d'**oxalate d'ammonium** :
s'il se forme un **précipité blanc**, le liquide contient des ions calcium (document 3).

**6.** Quand on dilue une solution acide, elle devient moins acide : son pH **augmente** et se
rapproche de $7$. Mais il ne peut pas dépasser $7$ : en ajoutant de l'eau (neutre), on ne
rend pas la solution basique.

**7.** Par exemple : porter des **lunettes de protection** et des **gants** ; travailler dans
une pièce aérée ; ne jamais mélanger le détartrant avec un autre produit ménager (comme l'eau
de Javel) ; respecter les pictogrammes de danger de l'étiquette.

## Partie 2 — Technologie

**1.** Fonction d'usage : **arroser automatiquement le potager** quand le sol est sec, sans
intervention humaine (et en économisant l'eau).

**2.**

| Élément | Chaîne | Fonction |
|---|---|---|
| Capteur d'humidité | information | acquérir |
| Carte programmable | information | traiter |
| Module Wi-Fi | information | communiquer |
| Panneau solaire et batterie | énergie | alimenter |
| Électrovanne | énergie | convertir (énergie électrique → mouvement d'ouverture de la vanne) |

*(La carte programmable, en commandant l'électrovanne, joue aussi le rôle de « distribuer »
l'énergie : on acceptera cette réponse si elle est justifiée.)*

**3.** a.
```
répéter indéfiniment
    lire humidité
    lire luminosité
    si (humidité < 30) et (luminosité < 20) alors
        ouvrir l'électrovanne
        attendre 15 minutes
        fermer l'électrovanne
    fin si
    attendre 30 minutes
fin répéter
```
   b. Il faut que **les deux conditions** soient vraies en même temps.
   - Humidité $25\,\%$, luminosité $10\,\%$ : $25 < 30$ et $10 < 20$ → l'arrosage **se déclenche**.
   - Humidité $25\,\%$, luminosité $70\,\%$ : il fait jour ($70 \geqslant 20$) → **pas d'arrosage**.
   - Humidité $45\,\%$, luminosité $5\,\%$ : le sol n'est pas assez sec ($45 \geqslant 30$) → **pas d'arrosage**.

**4.** Un arrosage : $4 \times 15 = 60$ L. En une semaine : $5 \times 60 = 300$ L $= 0{,}3$ m³.
Coût : $0{,}3 \times 4{,}30 = 1{,}29$ € par semaine.

**5.** $E = P \times t = 6 \text{ W} \times 0{,}25 \text{ h} = 1{,}5$ Wh (car $15$ min $= 0{,}25$ h).

**6.** a. Le module Wi-Fi transmet les données par **ondes radio** à la **box Internet** ; la box
les envoie sur le **réseau Internet** jusqu'à un serveur, puis jusqu'à l'application du smartphone.
   b. Risque : piratage de l'objet ou du réseau Wi-Fi de la maison, collecte de données
      personnelles. Précaution : changer le mot de passe par défaut, utiliser un mot de passe
      robuste, mettre à jour l'application et l'objet.

<!-- notes : sujet original. PC conforme au cycle 4 (docs/programme-college-physique-chimie-cycle4.txt) : pH et acidité,
atomes et ions, tests caractéristiques d'ions (3e) ; conservation de la masse (4e) ; transformations chimiques (3e).
Le test à l'oxalate d'ammonium est donné dans le document 3 (aucune connaissance exigée). Calcul de cohérence :
2,0 g de CaCO3 (M ≈ 100 g/mol) libèrent au plus 0,88 g de CO2 ; la perte de 0,8 g est donc réaliste.
Technologie : chapitres « objets-connectes », « programmation-et-robotique », « internet-et-reseaux » de 3e.
Calculs vérifiés : 60 L, 300 L, 1,29 €, 1,5 Wh. Prix de l'eau ≈ 4,30 €/m³ (ordre de grandeur du prix moyen en France). -->
