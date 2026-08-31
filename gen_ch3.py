import json, os

ID = "2nde-anglais-hypotheses-if"
SLUG = "hypotheses-if"
TITRE = "Les hypothèses : les phrases en if"
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
  - Le présent simple
  - Le prétérit simple et le futur (will)
statut: brouillon
relu_par: null
---

# {TITRE}

> « Si tu chauffes de la glace, elle fond », « Si j'ai le temps, je viendrai », « Si j'étais riche, je voyagerais » : trois hypothèses, trois constructions différentes en anglais. Les phrases en *if* obéissent à une mécanique de temps très précise.

## 1. Le type 0 : la vérité générale

On l'emploie pour ce qui est **toujours vrai** : lois de la nature, automatismes. Structure : **if + présent simple, … présent simple**. On peut remplacer *if* par *when*.

| Structure | Exemple | Traduction |
|---|---|---|
| if + présent, présent | If you **heat** ice, it **melts**. | Si tu chauffes la glace, elle fond. |
| if + présent, présent | If it **rains**, the ground **gets** wet. | S'il pleut, le sol devient mouillé. |

## 2. Le type 1 : l'hypothèse réelle (futur possible)

On l'emploie pour une condition **réalisable** dans le présent ou le futur. Structure : **if + présent simple, … will + base verbale**.

| Structure | Exemple | Traduction |
|---|---|---|
| if + présent, will + BV | If it **rains**, we **will stay** home. | S'il pleut, nous resterons à la maison. |
| if + présent, will + BV | If you **study**, you **will pass**. | Si tu travailles, tu réussiras. |

Point clé : **jamais de *will* après *if*** dans la subordonnée. ~~If it will rain~~ → **If it rains**.

## 3. Le type 2 : l'hypothèse irréelle ou improbable

On l'emploie pour une situation **imaginaire, improbable ou contraire à la réalité** dans le présent. Structure : **if + prétérit, … would + base verbale**.

| Structure | Exemple | Traduction |
|---|---|---|
| if + prétérit, would + BV | If I **had** more money, I **would travel**. | Si j'avais plus d'argent, je voyagerais. |
| if + prétérit, would + BV | If I **were** you, I **would apologize**. | Si j'étais toi, je m'excuserais. |

Remarque : au type 2, on emploie **were** pour toutes les personnes (*If I were, if he were*), surtout dans l'expression figée *If I were you*.

## 4. Les erreurs à éviter

- Mettre *will* après *if* (type 1) : ~~If it will rain~~ → **If it rains**.
- Mettre *would* après *if* (type 2) : ~~If I would have money~~ → **If I had money**.
- Confondre type 1 (réel) et type 2 (irréel) : *If I have time* (c'est possible) ≠ *If I had time* (je n'ai pas le temps).
- Oublier la base verbale après *will/would* : ~~I will to stay~~ → **I will stay**.
- Traduire *would* par un imparfait : *would travel* = « voyagerais » (conditionnel), pas « voyageais ».

## À retenir

- **Type 0** : *if + présent, présent* → vérité générale.
- **Type 1** : *if + présent, will + BV* → condition réelle, futur possible.
- **Type 2** : *if + prétérit, would + BV* → hypothèse irréelle ou improbable.
- **Jamais *will* ni *would* juste après *if***.
- Au type 2, *were* pour toutes les personnes : *If I were you…*.
"""

with open(f"{BASE}/fiche.md","w") as f:
    f.write(fiche)

qcm = {
  "id": f"{ID}-qcm","chapitre": ID,"titre": f"QCM — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "consigne":"Une seule réponse correcte par question.",
  "questions":[
    {"id":1,"difficulte":"facile","notion":"type0","enonce":"Complète (type 0) : If you heat water, it ___.","choix":["will boil","boils","would boil","boiled"],"reponse":1,"explication":"Vérité générale (type 0) : if + présent, présent → « boils »."},
    {"id":2,"difficulte":"facile","notion":"type1","enonce":"Complète (type 1) : If it rains tomorrow, we ___ at home.","choix":["stay","stayed","will stay","would stay"],"reponse":2,"explication":"Type 1 : if + présent, will + base verbale → « will stay »."},
    {"id":3,"difficulte":"moyen","notion":"type1","enonce":"Complète : If you ___ hard, you will pass the exam.","choix":["will study","study","studied","would study"],"reponse":1,"explication":"Après « if » (type 1), on met le présent, jamais « will » : « study »."},
    {"id":4,"difficulte":"moyen","notion":"type2","enonce":"Complète (type 2) : If I had more time, I ___ a new language.","choix":["will learn","learn","would learn","learned"],"reponse":2,"explication":"Type 2 : if + prétérit, would + base verbale → « would learn »."},
    {"id":5,"difficulte":"moyen","notion":"type2","enonce":"Complète : If I ___ you, I would apologize.","choix":["am","was","were","will be"],"reponse":2,"explication":"Au type 2, on emploie « were » pour toutes les personnes : « If I were you »."},
    {"id":6,"difficulte":"facile","notion":"type1","enonce":"Repère l'erreur : « If it will snow, we will ski. »","choix":["it → the weather","will snow → snows","will ski → ski","we → they"],"reponse":1,"explication":"On ne met jamais « will » après « if » : il faut « If it snows »."},
    {"id":7,"difficulte":"moyen","notion":"contraste","enonce":"Choisis : If I ___ rich, I would buy a castle (mais je ne le suis pas).","choix":["am","was","were","will be"],"reponse":2,"explication":"Hypothèse irréelle (type 2) → prétérit ; avec « I », on privilégie « were »."},
    {"id":8,"difficulte":"difficile","notion":"contraste","enonce":"Choisis le type correct : « Si j'ai le temps ce soir (c'est possible), je t'appellerai. »","choix":["If I had time, I would call you.","If I have time, I will call you.","If I have time, I would call you.","If I had time, I will call you."],"reponse":1,"explication":"Condition réaliste (type 1) : if + présent, will + BV → « If I have time, I will call you »."},
    {"id":9,"difficulte":"difficile","notion":"contraste","enonce":"Choisis le type correct : « Si j'étais toi (mais je ne le suis pas), je partirais. »","choix":["If I am you, I will leave.","If I was you, I will leave.","If I were you, I would leave.","If I were you, I will leave."],"reponse":2,"explication":"Hypothèse irréelle (type 2) : if + prétérit (were), would + BV."},
    {"id":10,"difficulte":"facile","notion":"type2","enonce":"Repère l'erreur : « If I would have a car, I would drive. »","choix":["would have → had","would drive → drove","car → a car","drive → to drive"],"reponse":0,"explication":"Après « if » au type 2, on met le prétérit, pas « would » : « If I had a car »."},
    {"id":11,"difficulte":"moyen","notion":"type1","enonce":"Complète : If she ___ the bus, she will be late.","choix":["will miss","misses","missed","would miss"],"reponse":1,"explication":"Type 1 : présent après « if » → « misses » (3e personne)."},
    {"id":12,"difficulte":"moyen","notion":"type0","enonce":"Complète : Ice ___ if the temperature rises above zero.","choix":["will melt","melts","would melt","melted"],"reponse":1,"explication":"Vérité générale (type 0) : présent dans les deux parties → « melts »."},
    {"id":13,"difficulte":"difficile","notion":"type2","enonce":"Complète : If they ___ harder, they would win.","choix":["will train","train","trained","would train"],"reponse":2,"explication":"Type 2 : if + prétérit → « trained » ; l'autre partie a « would »."},
    {"id":14,"difficulte":"moyen","notion":"traduction","enonce":"Traduis (type 1) : « Si tu viens, je serai content. »","choix":["If you will come, I will be happy.","If you come, I will be happy.","If you came, I would be happy.","If you come, I am happy."],"reponse":1,"explication":"Condition réelle → if + présent (come), will + BV (will be)."},
    {"id":15,"difficulte":"difficile","notion":"traduction","enonce":"Traduis (type 2) : « Si je parlais chinois, je travaillerais en Chine. »","choix":["If I speak Chinese, I will work in China.","If I spoke Chinese, I would work in China.","If I spoke Chinese, I will work in China.","If I would speak Chinese, I would work in China."],"reponse":1,"explication":"Hypothèse irréelle → if + prétérit (spoke), would + BV (would work)."},
    {"id":16,"difficulte":"facile","notion":"type1","enonce":"Complète : If you don't hurry, you ___ the train.","choix":["miss","will miss","missed","would miss"],"reponse":1,"explication":"Type 1 : conséquence future → « will miss »."},
    {"id":17,"difficulte":"moyen","notion":"type2","enonce":"Complète : What ___ you do if you won the lottery?","choix":["will","would","did","do"],"reponse":1,"explication":"Hypothèse improbable (won = prétérit) → « would » dans la principale."},
    {"id":18,"difficulte":"difficile","notion":"contraste","enonce":"Quelle phrase décrit une situation IRRÉELLE (peu probable) ?","choix":["If it rains, I will take an umbrella.","If I have money, I will buy it.","If I had wings, I would fly.","If you heat ice, it melts."],"reponse":2,"explication":"« If I had wings » (type 2) décrit une situation imaginaire, contraire à la réalité."},
    {"id":19,"difficulte":"moyen","notion":"type1","enonce":"Complète : She will help you if you ___ her.","choix":["will ask","ask","asked","would ask"],"reponse":1,"explication":"L'ordre est inversé mais c'est du type 1 : après « if », présent → « ask »."},
    {"id":20,"difficulte":"difficile","notion":"contraste","enonce":"Repère la phrase INCORRECTE.","choix":["If I were you, I would rest.","If it rains, we will cancel.","If I had time, I will help.","If you heat metal, it expands."],"reponse":2,"explication":"« If I had time » (type 2) doit être suivi de « would », pas de « will » : mélange de types incorrect."}
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
    {"id":1,"difficulte":"decouverte","notion":"type0","enonce":"Complète (type 0) : If you (to mix) blue and yellow, you (to get) green.","corrige":["Vérité générale → if + présent, présent.","If you **mix** blue and yellow, you **get** green."],"reponse":"If you mix blue and yellow, you get green."},
    {"id":2,"difficulte":"decouverte","notion":"type1","enonce":"Complète (type 1) : If it (to be) sunny tomorrow, we (to go) to the beach.","corrige":["Type 1 : if + présent, will + base verbale.","If it **is** sunny tomorrow, we **will go** to the beach."],"reponse":"If it is sunny tomorrow, we will go to the beach."},
    {"id":3,"difficulte":"application","notion":"type1","enonce":"Corrige : If you will call me, I will answer.","corrige":["Pas de « will » après « if ».","On met le présent dans la subordonnée.","If you **call** me, I will answer."],"reponse":"If you call me, I will answer."},
    {"id":4,"difficulte":"application","notion":"type2","enonce":"Complète (type 2) : If I (to have) a car, I (to drive) to work.","corrige":["Type 2 : if + prétérit, would + base verbale.","If I **had** a car, I **would drive** to work."],"reponse":"If I had a car, I would drive to work."},
    {"id":5,"difficulte":"application","notion":"type2","enonce":"Complète avec « were » : If I ___ you, I would tell the truth.","corrige":["Au type 2, on emploie « were » pour toutes les personnes.","If I **were** you, I would tell the truth."],"reponse":"If I were you, I would tell the truth."},
    {"id":6,"difficulte":"application","notion":"contraste","enonce":"Type 1 ou type 2 ? « Si je gagne au loto (c'est possible), j'achèterai une maison. »","corrige":["Condition réaliste → type 1 : if + présent, will + BV.","If I **win** the lottery, I **will buy** a house."],"reponse":"If I win the lottery, I will buy a house."},
    {"id":7,"difficulte":"application","notion":"contraste","enonce":"Type 1 ou type 2 ? « Si je gagnais au loto (c'est peu probable), j'arrêterais de travailler. »","corrige":["Condition improbable → type 2 : if + prétérit, would + BV.","If I **won** the lottery, I **would stop** working."],"reponse":"If I won the lottery, I would stop working."},
    {"id":8,"difficulte":"approfondissement","notion":"correction","enonce":"Corrige : If I would know the answer, I would tell you.","corrige":["Après « if » au type 2, on met le prétérit, pas « would ».","If I **knew** the answer, I would tell you."],"reponse":"If I knew the answer, I would tell you."},
    {"id":9,"difficulte":"approfondissement","notion":"traduction","enonce":"Traduis (type 1) : « Si tu ne pars pas maintenant, tu rateras le bus. »","corrige":["Condition réelle → if + présent, will + BV.","If you **don't leave** now, you **will miss** the bus."],"reponse":"If you don't leave now, you will miss the bus."},
    {"id":10,"difficulte":"approfondissement","notion":"traduction","enonce":"Traduis (type 2) : « Si j'étais toi, je ne dirais rien. »","corrige":["Hypothèse irréelle → if + prétérit (were), would + BV.","If I **were** you, I **wouldn't say** anything."],"reponse":"If I were you, I wouldn't say anything."}
  ]
}
with open(f"{BASE}/exercice.json","w") as f:
    json.dump(exo,f,ensure_ascii=False,indent=2)

cartes = {
  "id": f"{ID}-cartes","chapitre": ID,"titre": f"Cartes — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "cartes":[
    {"recto":"Structure du type 0 (vérité générale) ?","verso":"if + présent simple, … présent simple : « If you heat ice, it melts. »"},
    {"recto":"Structure du type 1 (condition réelle) ?","verso":"if + présent simple, … will + base verbale : « If it rains, we will stay home. »"},
    {"recto":"Structure du type 2 (hypothèse irréelle) ?","verso":"if + prétérit, … would + base verbale : « If I had money, I would travel. »"},
    {"recto":"Peut-on mettre « will » juste après « if » ?","verso":"Non, jamais. « If it will rain » est faux → « If it rains »."},
    {"recto":"Peut-on mettre « would » juste après « if » ?","verso":"Non. Au type 2, on met le prétérit : « If I had » et non « If I would have »."},
    {"recto":"Quelle forme de « be » emploie-t-on au type 2 ?","verso":"were pour toutes les personnes : « If I were you… », « If he were here… »"},
    {"recto":"Différence entre « If I have time » et « If I had time » ?","verso":"« If I have time » = c'est possible (type 1) ; « If I had time » = ce n'est pas le cas (type 2)."},
    {"recto":"Traduis « If I were you, I would apologize. »","verso":"« Si j'étais toi, je m'excuserais. »"},
    {"recto":"À quoi sert le type 1 ?","verso":"À exprimer une condition réalisable dans le présent ou le futur."},
    {"recto":"À quoi sert le type 2 ?","verso":"À exprimer une hypothèse imaginaire, improbable ou contraire à la réalité."},
    {"recto":"« would travel » se traduit par ?","verso":"« voyagerais » (conditionnel), pas « voyageais » (imparfait)."},
    {"recto":"Complète le type 2 : « If they trained harder, they ___ win. »","verso":"« would » : « they would win »."}
  ]
}
with open(f"{BASE}/flashcards.json","w") as f:
    json.dump(cartes,f,ensure_ascii=False,indent=2)

print("chapitre 3 OK")
