import json, os

ID = "2nde-anglais-temps-du-passe"
SLUG = "temps-du-passe"
TITRE = "Les temps du passé : prétérit et present perfect"
VOIE = "generale"
NIV = "seconde"
BASE = f"/tmp/kamal-campus/contenu/{NIV}/anglais/{SLUG}"
os.makedirs(BASE, exist_ok=True)

fiche = f"""---
id: {ID}
titre: "{TITRE}"
voie: {VOIE}
niveau: {NIV}
parcours: anglais
matiere: anglais
programme: "Programme de langues vivantes — classe de seconde, CECRL B1"
duree_lecture_min: 12
prerequis:
  - Le prétérit simple (verbes réguliers et irréguliers)
  - Le present perfect (have + participe passé)
statut: brouillon
relu_par: null
---

# {TITRE}

> En français, un seul passé composé recouvre beaucoup de situations. En anglais, il faut choisir : le **prétérit** raconte un fait terminé et daté, le **present perfect** relie le passé au présent. Ce choix change tout le sens de la phrase.

## 1. Le prétérit simple : le passé révolu

Le prétérit décrit une action **terminée**, souvent **datée**, sans lien explicite avec le présent. C'est le temps du **récit**.

Verbes réguliers : base + **-ed** (*worked, played, studied*). Verbes irréguliers : forme à apprendre (*go → went, see → saw, buy → bought*).

| Forme | Exemple | Traduction |
|---|---|---|
| Affirmative | I **visited** London last year. | J'ai visité Londres l'an dernier. |
| Négative | She **didn't come** yesterday. | Elle n'est pas venue hier. |
| Interrogative | **Did** you **see** the film? | As-tu vu le film ? |

Marqueurs typiques : *yesterday, last week, in 2010, two days ago, when I was young*.

## 2. Le present perfect : le passé qui touche le présent

Le present perfect se forme avec **have/has + participe passé**. Il relie une action passée au **présent** : bilan, expérience de vie, résultat encore visible, action récente.

| Emploi | Exemple | Traduction |
|---|---|---|
| Expérience | I **have visited** London. | J'ai (déjà) visité Londres. |
| Résultat présent | She **has lost** her keys. | Elle a perdu ses clés (elle ne les a plus). |
| Action récente | They **have just arrived**. | Ils viennent d'arriver. |

Marqueurs typiques : *ever, never, already, yet, just, recently, so far, this week*.

## 3. Bien choisir : prétérit ou present perfect ?

La règle d'or : dès qu'un **moment passé précis** est indiqué (ou sous-entendu), on emploie le **prétérit**.

| Question à se poser | Temps | Exemple |
|---|---|---|
| Quand ? précisé ? | Prétérit | I **saw** her **yesterday**. |
| Lien avec maintenant ? | Present perfect | I **have** just **seen** her. |
| ~~I have seen her yesterday~~ | Incorrect | « yesterday » impose le prétérit. |

*Been* vs *gone* : *He has been to Rome* (il y est allé et revenu) ≠ *He has gone to Rome* (il y est parti, il y est encore).

## 4. Les erreurs à éviter

- Associer *yesterday, last week, ago* au present perfect : ~~I have seen him yesterday~~ → **I saw him yesterday**.
- Oublier la base verbale après *did/didn't* : ~~She didn't came~~ → **She didn't come**.
- Confondre le **prétérit** et le **participe passé** des irréguliers : *I saw* (prétérit) / *I have seen* (participe).
- Traduire mécaniquement le passé composé français : « Je l'ai vu hier » = *I saw him yesterday*, pas *I have seen*.
- Mettre *have* au lieu de *has* à la 3e personne : ~~She have finished~~ → **She has finished**.

## À retenir

- **Prétérit** = action terminée, souvent datée (*yesterday, in 2010*). Temps du récit.
- **Present perfect** = *have/has + participe passé* = lien avec le présent (bilan, expérience, résultat).
- Un **marqueur de temps passé précis** impose le **prétérit**.
- *ever, never, already, yet, just* → present perfect.
- Distingue *been* (aller et revenir) de *gone* (parti, encore là-bas).
"""

with open(f"{BASE}/fiche.md","w") as f:
    f.write(fiche)

qcm = {
  "id": f"{ID}-qcm","chapitre": ID,"titre": f"QCM — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "consigne":"Une seule réponse correcte par question.",
  "questions":[
    {"id":1,"difficulte":"facile","notion":"preterit","enonce":"Complète : I ___ my grandmother last weekend.","choix":["visit","visited","have visited","was visiting"],"reponse":1,"explication":"« Last weekend » = moment passé précis → prétérit « visited »."},
    {"id":2,"difficulte":"facile","notion":"present-perfect","enonce":"Complète : She ___ her keys; she can't open the door.","choix":["lost","has lost","loses","was losing"],"reponse":1,"explication":"Résultat présent (elle ne peut pas ouvrir) → present perfect « has lost »."},
    {"id":3,"difficulte":"facile","notion":"preterit-irregulier","enonce":"Prétérit de « go » : They ___ to Spain in 2019.","choix":["goed","gone","went","goes"],"reponse":2,"explication":"« Go » est irrégulier : prétérit « went »."},
    {"id":4,"difficulte":"moyen","notion":"choix","enonce":"Choisis : ___ you ever ___ sushi?","choix":["Did / eat","Have / eaten","Have / eat","Did / eaten"],"reponse":1,"explication":"« Ever » (expérience de vie) → present perfect « Have you ever eaten? »."},
    {"id":5,"difficulte":"facile","notion":"preterit-negation","enonce":"Complète : He ___ to the party yesterday.","choix":["didn't come","didn't came","hasn't come","doesn't come"],"reponse":0,"explication":"« Yesterday » → prétérit ; négation « didn't » + base verbale « come »."},
    {"id":6,"difficulte":"moyen","notion":"present-perfect","enonce":"Complète : We ___ just ___ the news.","choix":["have / heard","did / hear","have / hear","has / heard"],"reponse":0,"explication":"« Just » (action récente) + « we » → « have just heard »."},
    {"id":7,"difficulte":"moyen","notion":"choix","enonce":"Repère la phrase INCORRECTE.","choix":["I have visited Rome twice.","I visited Rome last summer.","I have visited Rome last summer.","I visited Rome in 2018."],"reponse":2,"explication":"« Last summer » (date passée) est incompatible avec le present perfect : il faut le prétérit."},
    {"id":8,"difficulte":"moyen","notion":"present-perfect","enonce":"Complète : ___ you finished your homework ___?","choix":["Did / yet","Have / yet","Have / ago","Did / already"],"reponse":1,"explication":"« Yet » (encore ? pas encore) → present perfect « Have you finished... yet? »."},
    {"id":9,"difficulte":"moyen","notion":"preterit-irregulier","enonce":"Prétérit de « buy » : She ___ a new phone last week.","choix":["buyed","bought","buy","has bought"],"reponse":1,"explication":"« Buy » est irrégulier : prétérit « bought » ; « last week » impose le prétérit."},
    {"id":10,"difficulte":"difficile","notion":"been-gone","enonce":"Choisis : Tom isn't here; he ___ to the shop (il y est encore).","choix":["has been","has gone","went","goes"],"reponse":1,"explication":"« Gone » = il est parti et il y est encore ; « been » signifierait qu'il est revenu."},
    {"id":11,"difficulte":"facile","notion":"present-perfect","enonce":"Complète : I ___ never ___ to Japan.","choix":["have / been","did / be","have / gone","has / been"],"reponse":0,"explication":"Expérience de vie avec « never » → « I have never been »."},
    {"id":12,"difficulte":"moyen","notion":"preterit","enonce":"Complète : When I ___ young, I ___ in a village.","choix":["was / lived","have been / lived","was / have lived","were / live"],"reponse":0,"explication":"« When I was young » = passé daté → prétérit « was » et « lived »."},
    {"id":13,"difficulte":"difficile","notion":"choix","enonce":"Choisis : I ___ him in 2015 and we ___ friends ever since.","choix":["met / have been","have met / were","met / were","have met / have been"],"reponse":0,"explication":"« In 2015 » → prétérit « met » ; « ever since » (jusqu'à maintenant) → present perfect « have been »."},
    {"id":14,"difficulte":"facile","notion":"preterit-regulier","enonce":"Prétérit de « study » : She ___ all night.","choix":["studyed","studied","studed","has studied"],"reponse":1,"explication":"Consonne + y → -ied : « studied »."},
    {"id":15,"difficulte":"moyen","notion":"present-perfect","enonce":"Complète : They ___ already ___ dinner.","choix":["have / had","did / have","have / have","has / had"],"reponse":0,"explication":"« Already » + « they » → « have already had » (participe passé de have = had)."},
    {"id":16,"difficulte":"difficile","notion":"traduction","enonce":"Traduis : « Je l'ai rencontré il y a deux jours. »","choix":["I have met him two days ago.","I met him two days ago.","I meet him two days ago.","I have met him for two days."],"reponse":1,"explication":"« Ago » = moment passé précis → prétérit « met », jamais le present perfect."},
    {"id":17,"difficulte":"moyen","notion":"question","enonce":"Complète : ___ she call you last night?","choix":["Has","Did","Have","Does"],"reponse":1,"explication":"« Last night » → prétérit ; question avec « Did »."},
    {"id":18,"difficulte":"difficile","notion":"choix","enonce":"Choisis : I can't find my glasses. I ___ them.","choix":["lost","have lost","was losing","lose"],"reponse":1,"explication":"Résultat présent (je ne les trouve pas) → present perfect « have lost »."},
    {"id":19,"difficulte":"moyen","notion":"preterit-irregulier","enonce":"Participe passé de « see » : I have ___ that film three times.","choix":["saw","seen","seed","see"],"reponse":1,"explication":"Prétérit « saw », participe passé « seen » : après have, on emploie le participe."},
    {"id":20,"difficulte":"difficile","notion":"3e-personne","enonce":"Repère l'erreur : « She have finished her project. »","choix":["She → He","have → has","finished → finish","project → the project"],"reponse":1,"explication":"À la 3e personne du singulier, le present perfect emploie « has » : « She has finished »."}
  ]
}
with open(f"{BASE}/qcm.json","w") as f:
    json.dump(qcm,f,ensure_ascii=False,indent=2)

exo = {
  "id": f"{ID}-exos","chapitre": ID,"titre": f"Exercices — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "consigne":"Cherche chaque exercice au brouillon avant d'ouvrir le corrigé.",
  "exercices":[
    {"id":1,"difficulte":"decouverte","notion":"preterit-regulier","enonce":"Mets au prétérit : Yesterday, we (to watch) a film.","corrige":["Verbe régulier → base + -ed.","« Yesterday » confirme le prétérit.","Yesterday, we **watched** a film."],"reponse":"Yesterday, we watched a film."},
    {"id":2,"difficulte":"decouverte","notion":"present-perfect","enonce":"Mets au present perfect : She (to finish) her homework (résultat : c'est fait).","corrige":["3e personne → has + participe passé.","She **has finished** her homework."],"reponse":"She has finished her homework."},
    {"id":3,"difficulte":"application","notion":"preterit-irregulier","enonce":"Donne le prétérit de : go, buy, see, come.","corrige":["Ce sont des verbes irréguliers à mémoriser.","go → went ; buy → bought ; see → saw ; come → came."],"reponse":"went, bought, saw, came"},
    {"id":4,"difficulte":"application","notion":"negation","enonce":"Mets à la forme négative (prétérit) : He came to school.","corrige":["Prétérit : didn't + base verbale.","He **didn't come** to school."],"reponse":"He didn't come to school."},
    {"id":5,"difficulte":"application","notion":"choix","enonce":"Prétérit ou present perfect ? I ___ (to lose) my wallet; I can't pay now.","corrige":["Résultat présent (je ne peux pas payer) → present perfect.","I **have lost** my wallet."],"reponse":"I have lost my wallet."},
    {"id":6,"difficulte":"application","notion":"choix","enonce":"Prétérit ou present perfect ? They ___ (to move) to Paris in 2020.","corrige":["« In 2020 » = date précise → prétérit.","They **moved** to Paris in 2020."],"reponse":"They moved to Paris in 2020."},
    {"id":7,"difficulte":"application","notion":"question","enonce":"Pose la question avec « ever » : you / visit / New York?","corrige":["Expérience de vie avec « ever » → present perfect.","**Have** you **ever visited** New York?"],"reponse":"Have you ever visited New York?"},
    {"id":8,"difficulte":"approfondissement","notion":"been-gone","enonce":"Complète avec « been » ou « gone » : Anna isn't home; she has ___ to London (elle y est encore). / I have ___ to London twice (j'y suis allé et revenu).","corrige":["« gone » = partie et encore là-bas.","« been » = allé et revenu (expérience).","She has **gone** to London. / I have **been** to London twice."],"reponse":"gone ; been"},
    {"id":9,"difficulte":"approfondissement","notion":"correction","enonce":"Corrige : « I have seen her yesterday. »","corrige":["« Yesterday » impose le prétérit.","On supprime « have » et on met le prétérit.","I **saw** her yesterday."],"reponse":"I saw her yesterday."},
    {"id":10,"difficulte":"approfondissement","notion":"traduction","enonce":"Traduis : « Ils viennent d'arriver et ils sont fatigués. »","corrige":["« Viennent de » = action récente → present perfect avec « just ».","« Are » pour l'état présent.","They **have just arrived** and they **are** tired."],"reponse":"They have just arrived and they are tired."}
  ]
}
with open(f"{BASE}/exercice.json","w") as f:
    json.dump(exo,f,ensure_ascii=False,indent=2)

cartes = {
  "id": f"{ID}-cartes","chapitre": ID,"titre": f"Cartes — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "cartes":[
    {"recto":"À quoi sert le prétérit simple ?","verso":"À raconter une action terminée, souvent datée : « I visited London last year. »"},
    {"recto":"Comment forme-t-on le prétérit des verbes réguliers ?","verso":"Base + -ed : work → worked, play → played, study → studied."},
    {"recto":"À quoi sert le present perfect ?","verso":"À relier une action passée au présent : bilan, expérience, résultat visible : « She has lost her keys. »"},
    {"recto":"Comment forme-t-on le present perfect ?","verso":"have / has + participe passé : « I have finished. », « She has gone. »"},
    {"recto":"Quels marqueurs imposent le prétérit ?","verso":"yesterday, last week, in 2010, two days ago, when I was young."},
    {"recto":"Quels marqueurs annoncent le present perfect ?","verso":"ever, never, already, yet, just, recently, so far."},
    {"recto":"Peut-on dire « I have seen him yesterday » ?","verso":"Non. « Yesterday » impose le prétérit : « I **saw** him yesterday. »"},
    {"recto":"Quelle est la différence entre « been » et « gone » ?","verso":"« He has been to Rome » = allé et revenu ; « He has gone to Rome » = parti, encore là-bas."},
    {"recto":"Prétérit et participe passé de : go, see, buy.","verso":"go → went / gone ; see → saw / seen ; buy → bought / bought."},
    {"recto":"Comment forme-t-on la négation au prétérit ?","verso":"didn't + base verbale (sans -ed) : « She **didn't come**. »"},
    {"recto":"Quel auxiliaire à la 3e personne du singulier au present perfect ?","verso":"has : « She **has** finished. » (pas « have »)."},
    {"recto":"Traduis : « Je l'ai rencontré il y a deux jours. »","verso":"« I **met** him two days ago. » (ago → prétérit)."}
  ]
}
with open(f"{BASE}/flashcards.json","w") as f:
    json.dump(cartes,f,ensure_ascii=False,indent=2)

print("chapitre 2 OK")
