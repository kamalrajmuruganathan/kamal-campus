import json, os

ID = "2nde-anglais-discours-rapporte"
SLUG = "discours-rapporte"
TITRE = "Le discours rapporté (reported speech)"
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
  - Les temps du présent et du passé
  - Les pronoms personnels et possessifs
statut: brouillon
relu_par: null
---

# {TITRE}

> Rapporter les paroles de quelqu'un, ce n'est pas seulement enlever les guillemets : c'est reculer les temps d'un cran, adapter les pronoms et déplacer les repères de temps et de lieu. Le *reported speech* est un jeu de transformations logiques.

## 1. Le principe : reculer les temps (backshift)

Quand le verbe introducteur est au passé (*said, told*), le temps de la phrase citée **recule d'un cran**.

| Discours direct | Discours rapporté | Traduction |
|---|---|---|
| "I **am** tired." | He said he **was** tired. | Il a dit qu'il était fatigué. |
| "I **work** here." | She said she **worked** there. | Elle a dit qu'elle travaillait là. |
| "I **saw** him." | He said he **had seen** him. | Il a dit qu'il l'avait vu. |
| "I **will** come." | She said she **would** come. | Elle a dit qu'elle viendrait. |
| "I **can** swim." | He said he **could** swim. | Il a dit qu'il savait nager. |

Résumé : *am/is → was*, *present → prétérit*, *prétérit/present perfect → past perfect (had + participe)*, *will → would*, *can → could*, *must → had to*.

## 2. Say et tell ; les questions rapportées

**say** n'a pas de complément de personne direct ; **tell** en a un obligatoirement.

| Correct | Incorrect |
|---|---|
| He **said** (that) he was late. | ~~He told that he was late.~~ |
| He **told me** (that) he was late. | ~~He said me that…~~ |

Pour les **questions rapportées**, on rétablit l'**ordre affirmatif** (sujet + verbe), sans point d'interrogation ni auxiliaire *do*.

| Question directe | Question rapportée |
|---|---|
| "Where **do you live**?" | She asked where **I lived**. |
| "**Are you** ready?" | He asked **if I was** ready. |

Pour les questions fermées (oui/non), on introduit par **if** ou **whether**.

## 3. Les changements de repères

Les pronoms et les marqueurs de temps et de lieu s'adaptent au nouveau point de vue.

| Direct | Rapporté |
|---|---|
| now | then |
| today | that day |
| tomorrow | the next day |
| yesterday | the day before |
| here | there |
| this | that |

Exemple : "I saw her **here yesterday**." → He said he had seen her **there the day before**.

## 4. Les erreurs à éviter

- Employer *tell* sans complément de personne : ~~She told that…~~ → **She told me that…** ou **She said that…**.
- Garder l'ordre interrogatif dans une question rapportée : ~~He asked where did I live~~ → **He asked where I lived**.
- Oublier le backshift après un introducteur au passé : ~~She said she is tired~~ → **She said she was tired**.
- Oublier d'adapter les pronoms : "I like **my** car." → He said he liked **his** car.
- Garder *do/does/did* dans la question rapportée : ~~He asked if I did like it~~ → **He asked if I liked it**.

## À retenir

- Introducteur au passé → **backshift** : le temps recule d'un cran.
- **say** = pas de complément direct ; **tell** = toujours un complément de personne.
- Question rapportée : **ordre affirmatif**, pas d'auxiliaire *do*, pas de « ? ».
- Questions fermées introduites par **if / whether**.
- On adapte **pronoms**, **temps** et **lieux** (*now → then, here → there, tomorrow → the next day*).
"""

with open(f"{BASE}/fiche.md","w") as f:
    f.write(fiche)

qcm = {
  "id": f"{ID}-qcm","chapitre": ID,"titre": f"QCM — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "consigne":"Une seule réponse correcte par question.",
  "questions":[
    {"id":1,"difficulte":"facile","notion":"backshift","enonce":"Rapporte : \"I am tired.\" He said he ___ tired.","choix":["is","was","were","has been"],"reponse":1,"explication":"Introducteur au passé → backshift : « am » devient « was »."},
    {"id":2,"difficulte":"facile","notion":"say-tell","enonce":"Choisis : She ___ me that she was busy.","choix":["said","told","says","asked"],"reponse":1,"explication":"Avec un complément de personne (me), on emploie « told »."},
    {"id":3,"difficulte":"facile","notion":"say-tell","enonce":"Choisis : He ___ that he would help.","choix":["told","said","told me not","asked"],"reponse":1,"explication":"Sans complément de personne, on emploie « said »."},
    {"id":4,"difficulte":"moyen","notion":"backshift","enonce":"Rapporte : \"I work in Paris.\" She said she ___ in Paris.","choix":["works","worked","had worked","is working"],"reponse":1,"explication":"Présent simple → prétérit : « worked »."},
    {"id":5,"difficulte":"moyen","notion":"backshift","enonce":"Rapporte : \"I will call you.\" He said he ___ call me.","choix":["will","would","can","could"],"reponse":1,"explication":"« will » devient « would » au discours rapporté."},
    {"id":6,"difficulte":"moyen","notion":"question","enonce":"Rapporte : \"Where do you live?\" She asked where I ___.","choix":["do live","lived","did live","live"],"reponse":1,"explication":"Question rapportée : ordre affirmatif, pas de « do », backshift → « lived »."},
    {"id":7,"difficulte":"moyen","notion":"question","enonce":"Rapporte : \"Are you happy?\" He asked ___ I was happy.","choix":["that","what","if","which"],"reponse":2,"explication":"Question fermée (oui/non) → introduite par « if » (ou whether)."},
    {"id":8,"difficulte":"facile","notion":"backshift","enonce":"Rapporte : \"I can swim.\" She said she ___ swim.","choix":["can","could","must","would"],"reponse":1,"explication":"Le modal « can » devient « could »."},
    {"id":9,"difficulte":"difficile","notion":"backshift","enonce":"Rapporte : \"I saw him.\" He said he ___ him.","choix":["saw","has seen","had seen","would see"],"reponse":2,"explication":"Le prétérit devient past perfect : « had seen »."},
    {"id":10,"difficulte":"moyen","notion":"say-tell","enonce":"Repère l'erreur : « She told that she was ill. »","choix":["told → said","was → is","ill → sick","that → what"],"reponse":0,"explication":"« Tell » exige un complément de personne ; sans lui, il faut « said »."},
    {"id":11,"difficulte":"difficile","notion":"question","enonce":"Repère l'erreur : « He asked me where did I go. »","choix":["asked → said","me → to me","did I go → I went","where → what"],"reponse":2,"explication":"Question rapportée : ordre affirmatif, sans « did » → « where I went »."},
    {"id":12,"difficulte":"moyen","notion":"reperes","enonce":"Rapporte : \"I'll see you tomorrow.\" He said he would see me ___.","choix":["tomorrow","the next day","yesterday","then"],"reponse":1,"explication":"« tomorrow » devient « the next day » au discours rapporté."},
    {"id":13,"difficulte":"moyen","notion":"reperes","enonce":"Rapporte : \"I am busy now.\" She said she was busy ___.","choix":["now","then","today","here"],"reponse":1,"explication":"« now » devient « then »."},
    {"id":14,"difficulte":"difficile","notion":"pronoms","enonce":"Rapporte : \"I like my job.\" He said he liked ___ job.","choix":["my","your","his","their"],"reponse":2,"explication":"Le pronom s'adapte : « my » (de lui) devient « his »."},
    {"id":15,"difficulte":"moyen","notion":"backshift","enonce":"Rapporte : \"I have finished.\" She said she ___ finished.","choix":["has","have","had","would have"],"reponse":2,"explication":"Le present perfect devient past perfect : « had finished »."},
    {"id":16,"difficulte":"difficile","notion":"backshift","enonce":"Rapporte : \"You must leave.\" He told me I ___ leave.","choix":["must","had to","would","can"],"reponse":1,"explication":"« must » (obligation) devient « had to » au discours rapporté."},
    {"id":17,"difficulte":"moyen","notion":"question","enonce":"Rapporte : \"What time is it?\" She asked what time ___.","choix":["is it","it was","was it","it is"],"reponse":1,"explication":"Ordre affirmatif + backshift : « what time it was »."},
    {"id":18,"difficulte":"difficile","notion":"reperes","enonce":"Rapporte : \"I met her here yesterday.\" He said he had met her ___ ___.","choix":["here / yesterday","there / the day before","there / yesterday","here / the day before"],"reponse":1,"explication":"« here » → « there » et « yesterday » → « the day before »."},
    {"id":19,"difficulte":"facile","notion":"say-tell","enonce":"Complète : He ___ me a secret.","choix":["said","told","asked","spoke"],"reponse":1,"explication":"Avec un complément de personne (me), on emploie « told »."},
    {"id":20,"difficulte":"difficile","notion":"question","enonce":"Rapporte : \"Do you speak English?\" She asked me ___ I ___ English.","choix":["that / spoke","if / spoke","what / spoke","if / speak"],"reponse":1,"explication":"Question fermée → « if » ; ordre affirmatif + backshift → « spoke »."}
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
    {"id":1,"difficulte":"decouverte","notion":"backshift","enonce":"Rapporte : \"I am hungry,\" she said.","corrige":["Introducteur au passé → backshift : am → was.","Le pronom « I » devient « she ».","She said (that) she **was** hungry."],"reponse":"She said (that) she was hungry."},
    {"id":2,"difficulte":"decouverte","notion":"say-tell","enonce":"Complète avec say ou tell : He ___ me that he was leaving.","corrige":["Il y a un complément de personne (me).","On emploie « told ».","He **told** me that he was leaving."],"reponse":"He told me that he was leaving."},
    {"id":3,"difficulte":"application","notion":"backshift","enonce":"Rapporte : \"I will help you,\" he said to me.","corrige":["will → would ; « you » (moi) devient « me ».","He said he **would** help me. / He told me he would help me."],"reponse":"He told me (that) he would help me."},
    {"id":4,"difficulte":"application","notion":"backshift","enonce":"Rapporte : \"I can drive,\" she said.","corrige":["Le modal « can » devient « could ».","She said (that) she **could** drive."],"reponse":"She said she could drive."},
    {"id":5,"difficulte":"application","notion":"question","enonce":"Rapporte la question : \"Where do you work?\" she asked.","corrige":["Question ouverte : on garde le mot interrogatif « where ».","Ordre affirmatif, pas de « do », backshift → worked.","She asked where I **worked**."],"reponse":"She asked where I worked."},
    {"id":6,"difficulte":"application","notion":"question","enonce":"Rapporte la question fermée : \"Are you tired?\" he asked.","corrige":["Question oui/non → introduite par « if » (ou whether).","Ordre affirmatif + backshift.","He asked **if** I **was** tired."],"reponse":"He asked if I was tired."},
    {"id":7,"difficulte":"approfondissement","notion":"backshift","enonce":"Rapporte : \"I have lost my keys,\" she said.","corrige":["present perfect → past perfect (had + participe).","« my » (à elle) devient « her ».","She said she **had lost her** keys."],"reponse":"She said she had lost her keys."},
    {"id":8,"difficulte":"approfondissement","notion":"reperes","enonce":"Rapporte : \"I saw him here yesterday,\" he said.","corrige":["saw → had seen ; here → there ; yesterday → the day before.","He said he **had seen** him **there the day before**."],"reponse":"He said he had seen him there the day before."},
    {"id":9,"difficulte":"approfondissement","notion":"correction","enonce":"Corrige : « He asked me where did I live. »","corrige":["Dans une question rapportée, on rétablit l'ordre affirmatif.","On supprime « did » et on applique le backshift.","He asked me where I **lived**."],"reponse":"He asked me where I lived."},
    {"id":10,"difficulte":"approfondissement","notion":"question","enonce":"Rapporte : \"Do you like coffee?\" she asked me.","corrige":["Question fermée → « if » ; ordre affirmatif, pas de « do ».","Backshift : like → liked.","She asked me **if** I **liked** coffee."],"reponse":"She asked me if I liked coffee."}
  ]
}
with open(f"{BASE}/exercice.json","w") as f:
    json.dump(exo,f,ensure_ascii=False,indent=2)

cartes = {
  "id": f"{ID}-cartes","chapitre": ID,"titre": f"Cartes — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "cartes":[
    {"recto":"Qu'est-ce que le backshift ?","verso":"Après un introducteur au passé (said, told), le temps de la phrase citée recule d'un cran."},
    {"recto":"Comment évoluent les temps ? (présent, prétérit, will, can)","verso":"présent → prétérit ; prétérit/present perfect → past perfect (had+PP) ; will → would ; can → could."},
    {"recto":"Différence entre say et tell ?","verso":"say : pas de complément de personne direct ; tell : toujours un complément (told **me**)."},
    {"recto":"Comment construit-on une question rapportée ?","verso":"Ordre affirmatif (sujet + verbe), sans auxiliaire « do », sans point d'interrogation."},
    {"recto":"Comment introduit-on une question fermée rapportée ?","verso":"Avec « if » ou « whether » : « He asked if I was ready. »"},
    {"recto":"Rapporte : \"I am tired,\" he said.","verso":"« He said (that) he **was** tired. »"},
    {"recto":"Que devient « will » au discours rapporté ?","verso":"« would » : \"I will go\" → He said he **would** go."},
    {"recto":"Que devient « must » (obligation) au discours rapporté ?","verso":"« had to » : \"You must leave\" → He said I **had to** leave."},
    {"recto":"Comment évoluent now, today, tomorrow, yesterday ?","verso":"now → then ; today → that day ; tomorrow → the next day ; yesterday → the day before."},
    {"recto":"Comment évoluent here et this ?","verso":"here → there ; this → that."},
    {"recto":"Corrige : « He asked where did I go. »","verso":"« He asked where I **went**. » (ordre affirmatif, pas de « did »)."},
    {"recto":"Rapporte : \"I have finished,\" she said.","verso":"« She said she **had finished**. » (present perfect → past perfect)."}
  ]
}
with open(f"{BASE}/flashcards.json","w") as f:
    json.dump(cartes,f,ensure_ascii=False,indent=2)

print("chapitre 4 OK")
