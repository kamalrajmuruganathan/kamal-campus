import json, os

ID = "2nde-anglais-temps-du-present"
SLUG = "temps-du-present"
TITRE = "Les temps du présent : simple et continu"
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
  - Le présent simple et le -s de la 3e personne
  - Le présent continu (be + -ing)
statut: brouillon
relu_par: null
---

# {TITRE}

> En anglais, choisir entre présent simple et présent continu, ce n'est pas choisir un « moment » mais un **regard** sur l'action : une habitude et une vérité générale d'un côté, une action en cours et un changement de l'autre. Bien maîtriser ce contraste, c'est parler un anglais naturel.

## 1. Le présent simple : habitudes et vérités générales

Le présent simple sert à parler de ce qui est **habituel, permanent ou toujours vrai**. On l'emploie avec les adverbes de fréquence (*always, usually, often, sometimes, never*) et les expressions comme *every day, on Mondays*.

À la **3e personne du singulier** (he, she, it), le verbe prend un **-s** (ou *-es* après *o, ch, sh, ss, x* ; *-ies* si le verbe finit par consonne + *y*).

| Forme | Exemple | Traduction |
|---|---|---|
| Affirmative | She **works** in London. | Elle travaille à Londres. |
| Négative | She **doesn't work** on Sundays. | Elle ne travaille pas le dimanche. |
| Interrogative | **Do** you **work** here? | Est-ce que tu travailles ici ? |
| 3e pers. en -es | He **watches** the news. | Il regarde les informations. |
| 3e pers. en -ies | She **studies** biology. | Elle étudie la biologie. |

On l'utilise aussi pour les **vérités générales** : *Water boils at 100°C.* (L'eau bout à 100°C.)

## 2. Le présent continu : action en cours et changement

Le présent continu se forme avec **be (am/is/are) + verbe-ing**. Il décrit une action **en train de se dérouler maintenant**, une situation **temporaire**, ou un **changement**.

| Forme | Exemple | Traduction |
|---|---|---|
| Affirmative | She **is working** right now. | Elle travaille en ce moment. |
| Négative | They **aren't listening**. | Ils n'écoutent pas. |
| Interrogative | **Are** you **coming**? | Est-ce que tu viens ? |
| Changement | Prices **are rising**. | Les prix augmentent. |

Marqueurs typiques : *now, right now, at the moment, currently, today, Look!, Listen!*.

Le présent continu sert aussi à parler d'un **futur planifié** : *I'm meeting Tom tomorrow.* (Je vois Tom demain.)

## 3. Les verbes d'état (state verbs)

Certains verbes décrivent un **état** et non une action : ils s'emploient **rarement au continu**. Ce sont notamment *know, understand, believe, want, like, love, hate, need, prefer, seem, belong, own*.

| À éviter | Correct | Traduction |
|---|---|---|
| ~~I am knowing~~ | I **know** the answer. | Je connais la réponse. |
| ~~She is wanting~~ | She **wants** a coffee. | Elle veut un café. |

Attention : *have* et *think* changent de sens. *I think it's true* (opinion) mais *I'm thinking about it* (réflexion en cours).

## 4. Les erreurs à éviter

- Oublier le **-s** de la 3e personne : ~~He work~~ → **He works**.
- Utiliser le présent simple pour une action en cours : ~~Look! It rains~~ → **Look! It's raining.**
- Mettre un verbe d'état au continu : ~~I am liking~~ → **I like**.
- Traduire le présent français par un continu systématique : « Je travaille tous les jours » = *I work every day* (habitude), pas *I am working*.
- Double marque à la négation/question : ~~She doesn't works~~ → **She doesn't work**.

## À retenir

- **Présent simple** = habitude, vérité générale, permanence (+ **-s** à la 3e personne).
- **Présent continu** = *be + -ing* = action en cours, situation temporaire, changement.
- Les **verbes d'état** (know, want, like...) restent au présent simple.
- Repère les marqueurs : *every day / usually* → simple ; *now / Look!* → continu.
- Le continu peut aussi exprimer un **futur planifié**.
"""

with open(f"{BASE}/fiche.md", "w") as f:
    f.write(fiche)

qcm = {
  "id": f"{ID}-qcm", "chapitre": ID, "titre": f"QCM — {TITRE}",
  "voie": VOIE, "niveau": NIV, "parcours": "anglais", "matiere": "anglais",
  "statut": "brouillon", "relu_par": None,
  "consigne": "Une seule réponse correcte par question.",
  "questions": [
    {"id":1,"difficulte":"facile","notion":"present-simple","enonce":"Complète : She ___ to work by train every morning.","choix":["go","goes","going","is go"],"reponse":1,"explication":"Habitude à la 3e personne du singulier (she) : présent simple avec -s, « goes »."},
    {"id":2,"difficulte":"facile","notion":"present-continu","enonce":"Complète : Listen! The baby ___.","choix":["cries","cry","is crying","cried"],"reponse":2,"explication":"« Listen! » marque une action en cours : présent continu « is crying »."},
    {"id":3,"difficulte":"facile","notion":"present-simple","enonce":"Complète : Water ___ at 100 degrees.","choix":["boil","boils","is boiling","boiling"],"reponse":1,"explication":"Vérité générale : présent simple, 3e personne « boils »."},
    {"id":4,"difficulte":"moyen","notion":"state-verbs","enonce":"Choisis la forme correcte : I ___ what you mean.","choix":["am understanding","understand","understanding","understands"],"reponse":1,"explication":"« Understand » est un verbe d'état : on ne le met pas au continu, donc « I understand »."},
    {"id":5,"difficulte":"facile","notion":"present-simple","enonce":"Complète la négation : He ___ coffee.","choix":["doesn't like","don't like","doesn't likes","isn't like"],"reponse":0,"explication":"À la 3e personne, négation avec « doesn't » + base verbale : « doesn't like »."},
    {"id":6,"difficulte":"moyen","notion":"present-continu","enonce":"Complète : Prices ___ this year; everything is more expensive.","choix":["rise","rises","are rising","risen"],"reponse":2,"explication":"Changement en cours : présent continu « are rising »."},
    {"id":7,"difficulte":"facile","notion":"present-simple","enonce":"Trouve la 3e personne correcte : He ___ TV in the evening.","choix":["watch","watchs","watches","watching"],"reponse":2,"explication":"Après -ch, on ajoute -es : « watches »."},
    {"id":8,"difficulte":"moyen","notion":"present-simple","enonce":"Complète : She ___ biology at university.","choix":["studys","studies","study","is study"],"reponse":1,"explication":"Consonne + y → -ies à la 3e personne : « studies »."},
    {"id":9,"difficulte":"moyen","notion":"present-continu","enonce":"Complète : ___ you ___ to me right now?","choix":["Do / listen","Are / listening","Is / listening","Does / listen"],"reponse":1,"explication":"« Right now » = action en cours : « Are you listening? »."},
    {"id":10,"difficulte":"moyen","notion":"contraste","enonce":"Choisis : Every summer we ___ to Spain, but this year we ___ in France.","choix":["go / stay","are going / stay","go / are staying","are going / are staying"],"reponse":2,"explication":"« Every summer » = habitude (go) ; « this year » = situation temporaire (are staying)."},
    {"id":11,"difficulte":"facile","notion":"present-simple","enonce":"Repère l'erreur : « My brother don't play tennis. »","choix":["My brother → he","don't → doesn't","play → plays","tennis → the tennis"],"reponse":1,"explication":"À la 3e personne du singulier, la négation est « doesn't », pas « don't »."},
    {"id":12,"difficulte":"moyen","notion":"state-verbs","enonce":"Choisis la forme correcte : This book ___ to my sister.","choix":["is belonging","belongs","belong","belonging"],"reponse":1,"explication":"« Belong » est un verbe d'état : présent simple « belongs »."},
    {"id":13,"difficulte":"difficile","notion":"think","enonce":"Choisis : I ___ about your idea; give me a minute.","choix":["think","am thinking","thinks","thought"],"reponse":1,"explication":"Ici « think » = réfléchir (action en cours) : « I'm thinking about it »."},
    {"id":14,"difficulte":"moyen","notion":"present-continu","enonce":"Complète : They ___ a new house at the moment.","choix":["build","builds","are building","built"],"reponse":2,"explication":"« At the moment » = présent continu « are building »."},
    {"id":15,"difficulte":"facile","notion":"present-simple","enonce":"Complète : ___ your parents speak English?","choix":["Do","Does","Are","Is"],"reponse":0,"explication":"« Parents » est pluriel : question avec « Do »."},
    {"id":16,"difficulte":"difficile","notion":"futur-planifie","enonce":"Que signifie « I'm meeting Sarah tomorrow » ?","choix":["Une habitude quotidienne","Une action en cours maintenant","Un projet futur planifié","Une vérité générale"],"reponse":2,"explication":"Le présent continu peut exprimer un futur déjà organisé : un rendez-vous prévu."},
    {"id":17,"difficulte":"moyen","notion":"contraste","enonce":"Choisis la traduction de « En ce moment, je lis un bon roman. »","choix":["At the moment, I read a good novel.","At the moment, I am reading a good novel.","At the moment, I reads a good novel.","At the moment, I am read a good novel."],"reponse":1,"explication":"« En ce moment » + action en cours = présent continu : « I am reading »."},
    {"id":18,"difficulte":"moyen","notion":"present-simple","enonce":"Choisis : She usually ___ up at seven.","choix":["get","gets","is getting","getting"],"reponse":1,"explication":"« Usually » = habitude : présent simple, 3e personne « gets »."},
    {"id":19,"difficulte":"difficile","notion":"state-verbs","enonce":"Repère la phrase INCORRECTE.","choix":["I want a coffee.","She knows the answer.","I am wanting a coffee.","They need help."],"reponse":2,"explication":"« Want » est un verbe d'état : « I am wanting » est incorrect, il faut « I want »."},
    {"id":20,"difficulte":"difficile","notion":"contraste","enonce":"Choisis : Normally he ___ calm, but today he ___ very nervous.","choix":["is / is being","is being / is","is / is","is being / is being"],"reponse":0,"explication":"« Normally » = trait permanent (is) ; « today » = comportement temporaire (is being)."}
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
    {"id":1,"difficulte":"decouverte","notion":"present-simple","enonce":"Mets au présent simple : My sister (to play) the piano every day.","corrige":["3e personne du singulier (my sister = she) → on ajoute -s.","My sister **plays** the piano every day."],"reponse":"My sister plays the piano every day."},
    {"id":2,"difficulte":"decouverte","notion":"present-continu","enonce":"Mets au présent continu : Look! It (to rain).","corrige":["« Look! » = action en cours → be + -ing.","It **is raining**."],"reponse":"Look! It is raining."},
    {"id":3,"difficulte":"application","notion":"present-simple","enonce":"Écris la 3e personne : He (to watch) a film / She (to study) hard / It (to fly) away.","corrige":["watch + -es (après -ch) → watches.","study : consonne + y → studies.","fly : consonne + y → flies.","He **watches** a film. She **studies** hard. It **flies** away."],"reponse":"He watches / She studies / It flies."},
    {"id":4,"difficulte":"application","notion":"negation","enonce":"Mets à la forme négative : She likes horror films.","corrige":["3e personne → doesn't + base verbale (sans -s).","She **doesn't like** horror films."],"reponse":"She doesn't like horror films."},
    {"id":5,"difficulte":"application","notion":"question","enonce":"Pose la question (présent simple) : ___ your friends / live / near here?","corrige":["Sujet pluriel → Do + sujet + base verbale.","**Do** your friends **live** near here?"],"reponse":"Do your friends live near here?"},
    {"id":6,"difficulte":"application","notion":"contraste","enonce":"Choisis le bon temps : Every morning I (to drink) tea, but today I (to drink) coffee.","corrige":["« Every morning » = habitude → présent simple.","« Today » = temporaire → présent continu.","Every morning I **drink** tea, but today I **am drinking** coffee."],"reponse":"Every morning I drink tea, but today I am drinking coffee."},
    {"id":7,"difficulte":"application","notion":"state-verbs","enonce":"Corrige si nécessaire : I am knowing the answer.","corrige":["« Know » est un verbe d'état : pas de continu.","On repasse au présent simple.","I **know** the answer."],"reponse":"I know the answer."},
    {"id":8,"difficulte":"approfondissement","notion":"contraste","enonce":"Complète avec le bon temps : Sarah usually ___ (to wear) jeans, but look, today she ___ (to wear) a dress.","corrige":["« Usually » = habitude → présent simple (wears).","« Look, today » = action visible maintenant → présent continu (is wearing).","Sarah usually **wears** jeans, but look, today she **is wearing** a dress."],"reponse":"Sarah usually wears jeans, but today she is wearing a dress."},
    {"id":9,"difficulte":"approfondissement","notion":"traduction","enonce":"Traduis : « Les prix augmentent en ce moment. »","corrige":["Changement en cours → présent continu.","« Prices » est pluriel → are.","Prices **are rising** at the moment."],"reponse":"Prices are rising at the moment."},
    {"id":10,"difficulte":"approfondissement","notion":"think","enonce":"Explique la différence entre : « I think you are right » et « I am thinking about it ».","corrige":["« I think you are right » : think = opinion (verbe d'état) → présent simple.","« I am thinking about it » : think = réfléchir (action en cours) → présent continu.","Le sens du verbe change avec la forme."],"reponse":"I think = opinion (simple) ; I am thinking = réflexion en cours (continu)."}
  ]
}
with open(f"{BASE}/exercice.json","w") as f:
    json.dump(exo,f,ensure_ascii=False,indent=2)

cartes = {
  "id": f"{ID}-cartes","chapitre": ID,"titre": f"Cartes — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "cartes":[
    {"recto":"À quoi sert le présent simple ?","verso":"Aux habitudes, aux vérités générales et à ce qui est permanent : « She works in Paris. », « Water boils at 100°C. »"},
    {"recto":"À quoi sert le présent continu ?","verso":"À une action en cours, une situation temporaire ou un changement : « She is working now. », « Prices are rising. »"},
    {"recto":"Comment forme-t-on le présent continu ?","verso":"be (am/is/are) + verbe-ing : « They are playing. »"},
    {"recto":"Quelle marque prend le verbe à la 3e personne du présent simple ?","verso":"Un -s : he play**s**, she watch**es**, it stud**ies**, it go**es**."},
    {"recto":"Comment forme-t-on la négation du présent simple à la 3e personne ?","verso":"doesn't + base verbale (sans -s) : « She **doesn't work**. »"},
    {"recto":"Cite quatre verbes d'état qui ne se mettent pas au continu.","verso":"know, want, like, need (aussi : love, hate, believe, understand, belong, seem)."},
    {"recto":"Corrige : « I am knowing the answer. »","verso":"« I **know** the answer. » (know est un verbe d'état)."},
    {"recto":"Quels marqueurs annoncent le présent continu ?","verso":"now, right now, at the moment, today, Look!, Listen!"},
    {"recto":"Quels marqueurs annoncent le présent simple ?","verso":"always, usually, often, sometimes, never, every day, on Mondays."},
    {"recto":"Quelle est la différence entre « I think it's true » et « I'm thinking about it » ?","verso":"« I think » = opinion (état, présent simple) ; « I'm thinking » = réflexion en cours (action, continu)."},
    {"recto":"Le présent continu peut-il parler du futur ?","verso":"Oui, pour un projet planifié : « I'm meeting Tom tomorrow. » (rendez-vous prévu)."},
    {"recto":"Traduis en anglais naturel : « Je travaille tous les jours. »","verso":"« I work every day. » (habitude → présent simple, pas de continu)."}
  ]
}
with open(f"{BASE}/flashcards.json","w") as f:
    json.dump(cartes,f,ensure_ascii=False,indent=2)

print("chapitre 1 OK")
