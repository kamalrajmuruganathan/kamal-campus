import json, os

ID = "2nde-anglais-modaux"
SLUG = "modaux"
TITRE = "Les modaux : capacité, obligation, probabilité"
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
  - Les modaux can et must
  - Le présent simple et la base verbale
statut: brouillon
relu_par: null
---

# {TITRE}

> Un même verbe modal peut exprimer une capacité, une permission, une obligation ou une simple probabilité. Les modaux (*can, must, may, might, should…*) ne se conjuguent pas comme les autres verbes : leur grammaire particulière est aussi importante que leur sens.

## 1. La grammaire commune des modaux

Tous les modaux partagent les mêmes règles de construction :

| Règle | Exemple | À éviter |
|---|---|---|
| Suivi de la **base verbale** (sans *to*) | She **can swim**. | ~~She can to swim.~~ |
| **Pas de -s** à la 3e personne | He **must go**. | ~~He musts go.~~ |
| Négation = modal + *not* | You **must not** stay. | ~~You don't must stay.~~ |
| Question = inversion | **Can you** help? | ~~Do you can help?~~ |

Comme les modaux sont invariables, on utilise parfois des **équivalents** pour les temps manquants : *can → be able to*, *must → have to*.

## 2. Capacité, permission, obligation

| Sens | Modal | Exemple | Traduction |
|---|---|---|---|
| Capacité | can / could | I **can** drive. | Je sais conduire. |
| Permission | can / may | **May** I come in? | Puis-je entrer ? |
| Obligation | must / have to | You **must** wear a seatbelt. | Tu dois mettre ta ceinture. |
| Interdiction | must not (mustn't) | You **mustn't** smoke here. | Tu ne dois pas fumer ici. |
| Absence d'obligation | don't have to | You **don't have to** come. | Tu n'es pas obligé de venir. |
| Conseil | should | You **should** rest. | Tu devrais te reposer. |

Attention au contraste : **mustn't** (interdiction) ≠ **don't have to** (pas nécessaire). *You mustn't go* (interdit) ≠ *You don't have to go* (tu peux, mais ce n'est pas obligatoire).

## 3. La probabilité (déduction)

Les modaux expriment aussi le **degré de certitude** d'une hypothèse au présent.

| Certitude | Modal | Exemple | Traduction |
|---|---|---|---|
| Quasi-certain (positif) | must | He **must** be tired. | Il doit être fatigué. |
| Possible | may / might / could | She **might** be at home. | Elle est peut-être chez elle. |
| Quasi-certain (négatif) | can't | He **can't** be serious. | Il ne peut pas être sérieux. |

Ici *must* ne signifie pas l'obligation mais la **déduction logique** : « il est sûrement… ».

## 4. Les erreurs à éviter

- Ajouter *to* après un modal : ~~She can to sing~~ → **She can sing**.
- Mettre un -s à la 3e personne : ~~He cans~~ → **He can**.
- Employer *do* avec un modal : ~~Do you can…~~ → **Can you…**.
- Confondre *mustn't* et *don't have to* : *mustn't* = interdit ; *don't have to* = pas obligatoire.
- Utiliser *must* pour une déduction négative : la déduction négative se dit **can't**, pas *mustn't*.

## À retenir

- Modal + **base verbale**, **pas de -s**, négation avec *not*, question par **inversion**.
- **Capacité** : can/could ; **permission** : can/may ; **obligation** : must/have to.
- **mustn't** (interdiction) ≠ **don't have to** (pas nécessaire).
- **Conseil** : should.
- **Probabilité** : must (quasi-certain), may/might/could (possible), can't (impossible).
"""

with open(f"{BASE}/fiche.md","w") as f:
    f.write(fiche)

qcm = {
  "id": f"{ID}-qcm","chapitre": ID,"titre": f"QCM — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "consigne":"Une seule réponse correcte par question.",
  "questions":[
    {"id":1,"difficulte":"facile","notion":"grammaire","enonce":"Choisis la forme correcte : She can ___ very well.","choix":["to sing","sing","sings","singing"],"reponse":1,"explication":"Un modal est suivi de la base verbale sans « to » : « can sing »."},
    {"id":2,"difficulte":"facile","notion":"grammaire","enonce":"Repère l'erreur : « He cans play the guitar. »","choix":["He → She","cans → can","play → plays","guitar → the guitar"],"reponse":1,"explication":"Les modaux ne prennent pas de -s à la 3e personne : « can »."},
    {"id":3,"difficulte":"facile","notion":"capacite","enonce":"Complète : I ___ swim when I was five.","choix":["can","could","must","should"],"reponse":1,"explication":"Capacité dans le passé → « could »."},
    {"id":4,"difficulte":"moyen","notion":"obligation","enonce":"Complète : You ___ wear a helmet; it's the law.","choix":["must","should","might","can"],"reponse":0,"explication":"Obligation forte (loi) → « must »."},
    {"id":5,"difficulte":"moyen","notion":"conseil","enonce":"Complète : You look ill. You ___ see a doctor.","choix":["must not","should","might","can't"],"reponse":1,"explication":"Conseil → « should »."},
    {"id":6,"difficulte":"difficile","notion":"contraste","enonce":"Choisis : This is a secret. You ___ tell anyone (c'est interdit).","choix":["don't have to","mustn't","shouldn't have to","could"],"reponse":1,"explication":"Interdiction → « mustn't »."},
    {"id":7,"difficulte":"difficile","notion":"contraste","enonce":"Choisis : It's Sunday. You ___ get up early (ce n'est pas nécessaire).","choix":["mustn't","don't have to","can't","shouldn't"],"reponse":1,"explication":"Absence d'obligation → « don't have to »."},
    {"id":8,"difficulte":"moyen","notion":"probabilite","enonce":"Complète : He's been working all day. He ___ be exhausted.","choix":["can't","must","shouldn't","may not"],"reponse":1,"explication":"Déduction quasi-certaine (positif) → « must be »."},
    {"id":9,"difficulte":"moyen","notion":"probabilite","enonce":"Complète : I'm not sure, but she ___ be at work.","choix":["must","might","can't","should"],"reponse":1,"explication":"Simple possibilité → « might »."},
    {"id":10,"difficulte":"difficile","notion":"probabilite","enonce":"Complète : That ___ be true! It's impossible.","choix":["must","can't","should","might"],"reponse":1,"explication":"Déduction négative (impossible) → « can't »."},
    {"id":11,"difficulte":"facile","notion":"permission","enonce":"Choisis une demande de permission polie : ___ I use your phone?","choix":["Must","May","Should","Would have to"],"reponse":1,"explication":"Permission polie → « May I…? »."},
    {"id":12,"difficulte":"facile","notion":"grammaire","enonce":"Choisis la question correcte : ___ you speak French?","choix":["Do you can","Can you","You can","Can do you"],"reponse":1,"explication":"La question avec un modal se fait par inversion, sans « do » : « Can you…? »."},
    {"id":13,"difficulte":"moyen","notion":"grammaire","enonce":"Complète la négation : She ___ come tonight.","choix":["doesn't can","can't","not can","cann't"],"reponse":1,"explication":"Négation d'un modal = modal + not : « can't »."},
    {"id":14,"difficulte":"difficile","notion":"equivalent","enonce":"Complète (futur de « can ») : I ___ help you tomorrow.","choix":["will can","can will","will be able to","am can"],"reponse":2,"explication":"« can » n'a pas de futur : on utilise l'équivalent « will be able to »."},
    {"id":15,"difficulte":"moyen","notion":"obligation","enonce":"Complète (passé de « must ») : Yesterday I ___ work late.","choix":["musted","had to","must","should"],"reponse":1,"explication":"« must » n'a pas de passé : on emploie « had to »."},
    {"id":16,"difficulte":"difficile","notion":"contraste","enonce":"Quelle phrase signifie « c'est interdit » ?","choix":["You don't have to park here.","You mustn't park here.","You should park here.","You could park here."],"reponse":1,"explication":"« mustn't » exprime l'interdiction."},
    {"id":17,"difficulte":"moyen","notion":"probabilite","enonce":"Complète : The lights are off. They ___ be out.","choix":["must","can","should have to","don't have to"],"reponse":0,"explication":"Déduction logique (les lumières sont éteintes) → « must be out »."},
    {"id":18,"difficulte":"difficile","notion":"probabilite","enonce":"Repère l'erreur : « He mustn't be Spanish; he speaks perfect French only. »","choix":["mustn't → can't","be → is","Spanish → a Spaniard","speaks → speak"],"reponse":0,"explication":"La déduction négative se dit « can't », pas « mustn't » : « He can't be Spanish »."},
    {"id":19,"difficulte":"facile","notion":"conseil","enonce":"Complète : You ___ eat so much sugar (conseil négatif).","choix":["mustn't","shouldn't","can't","don't have to"],"reponse":1,"explication":"Conseil négatif → « shouldn't »."},
    {"id":20,"difficulte":"moyen","notion":"grammaire","enonce":"Choisis la traduction de « Elle sait nager. »","choix":["She knows to swim.","She can swim.","She cans swim.","She can to swim."],"reponse":1,"explication":"« Savoir faire quelque chose » = capacité → « can » + base verbale : « She can swim »."}
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
    {"id":1,"difficulte":"decouverte","notion":"grammaire","enonce":"Corrige : She can to drive a car.","corrige":["Un modal est suivi de la base verbale sans « to ».","She **can drive** a car."],"reponse":"She can drive a car."},
    {"id":2,"difficulte":"decouverte","notion":"capacite","enonce":"Complète avec can ou can't : Fish ___ live without water.","corrige":["Incapacité → can't.","Fish **can't** live without water."],"reponse":"Fish can't live without water."},
    {"id":3,"difficulte":"application","notion":"obligation","enonce":"Complète avec must ou should : Drivers ___ stop at a red light (obligation légale).","corrige":["Obligation forte, imposée par la loi → must.","Drivers **must** stop at a red light."],"reponse":"Drivers must stop at a red light."},
    {"id":4,"difficulte":"application","notion":"contraste","enonce":"mustn't ou don't have to ? : You ___ touch that wire; it's dangerous.","corrige":["Danger → interdiction → mustn't.","You **mustn't** touch that wire."],"reponse":"You mustn't touch that wire."},
    {"id":5,"difficulte":"application","notion":"contraste","enonce":"mustn't ou don't have to ? : It's free, so you ___ pay.","corrige":["Ce n'est pas nécessaire de payer → don't have to.","You **don't have to** pay."],"reponse":"You don't have to pay."},
    {"id":6,"difficulte":"application","notion":"conseil","enonce":"Donne un conseil avec should : « Tu es fatigué. »","corrige":["Conseil → should + base verbale.","You **should** get some rest."],"reponse":"You should get some rest."},
    {"id":7,"difficulte":"approfondissement","notion":"probabilite","enonce":"Complète avec must, might ou can't : The phone is ringing. It ___ be Anna, she said she would call.","corrige":["Déduction quasi-certaine (elle a dit qu'elle appellerait) → must.","It **must** be Anna."],"reponse":"It must be Anna."},
    {"id":8,"difficulte":"approfondissement","notion":"probabilite","enonce":"Complète avec must, might ou can't : He never studies, so he ___ pass the exam.","corrige":["Déduction négative (impossible) → can't.","He **can't** pass the exam."],"reponse":"He can't pass the exam."},
    {"id":9,"difficulte":"approfondissement","notion":"equivalent","enonce":"Mets au passé : I must finish my homework. (hier)","corrige":["« must » n'a pas de passé : on emploie « had to ».","Yesterday, I **had to** finish my homework."],"reponse":"Yesterday, I had to finish my homework."},
    {"id":10,"difficulte":"approfondissement","notion":"traduction","enonce":"Traduis : « Elle est peut-être malade, mais elle ne peut pas être à l'hôpital. »","corrige":["Possibilité → might ; déduction négative → can't.","She **might** be ill, but she **can't** be at the hospital."],"reponse":"She might be ill, but she can't be at the hospital."}
  ]
}
with open(f"{BASE}/exercice.json","w") as f:
    json.dump(exo,f,ensure_ascii=False,indent=2)

cartes = {
  "id": f"{ID}-cartes","chapitre": ID,"titre": f"Cartes — {TITRE}",
  "voie": VOIE,"niveau": NIV,"parcours":"anglais","matiere":"anglais",
  "statut":"brouillon","relu_par":None,
  "cartes":[
    {"recto":"Comment se construit un modal ?","verso":"Modal + base verbale (sans « to »), pas de -s à la 3e personne : « She can swim. »"},
    {"recto":"Comment forme-t-on la question et la négation d'un modal ?","verso":"Question : inversion (« Can you…? »). Négation : modal + not (« can't », « mustn't »)."},
    {"recto":"Quels modaux expriment la capacité ?","verso":"can (présent) et could (passé) : « I can drive. », « I could swim at five. »"},
    {"recto":"Quels modaux expriment la permission ?","verso":"can et may (plus poli) : « May I come in? »"},
    {"recto":"Quels modaux expriment l'obligation ?","verso":"must et have to : « You must wear a seatbelt. »"},
    {"recto":"Différence entre mustn't et don't have to ?","verso":"mustn't = interdiction ; don't have to = ce n'est pas nécessaire."},
    {"recto":"Quel modal pour donner un conseil ?","verso":"should : « You should rest. » (conseil négatif : shouldn't)."},
    {"recto":"Comment exprimer une déduction quasi-certaine (positive) ?","verso":"must : « He must be tired. » (il est sûrement fatigué)."},
    {"recto":"Comment exprimer une simple possibilité ?","verso":"may, might, could : « She might be at home. »"},
    {"recto":"Comment exprimer une déduction impossible ?","verso":"can't : « That can't be true! » (pas « mustn't »)."},
    {"recto":"Quel est le futur de « can » ? Le passé de « must » ?","verso":"Futur de can → will be able to ; passé de must → had to."},
    {"recto":"Corrige : « Do you can help me? »","verso":"« **Can** you help me? » (inversion, pas de « do » avec un modal)."}
  ]
}
with open(f"{BASE}/flashcards.json","w") as f:
    json.dump(cartes,f,ensure_ascii=False,indent=2)

print("chapitre 5 OK")
