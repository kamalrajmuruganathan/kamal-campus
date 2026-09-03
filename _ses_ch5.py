# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "monnaie-crises-financieres"
cid = "tale-ses-monnaie-crises-financieres"
titre = "La monnaie, le financement et les crises financières"
prereq = ["Fonctions de la monnaie", "Distinction financement interne et externe"]

fiche = """# La monnaie, le financement et les crises financières

> D'où vient la monnaie ? Comment l'économie se finance-t-elle ? Pourquoi surviennent les crises financières ? Ce chapitre relie création monétaire, financement et instabilité.

## 1. La monnaie et sa création
La monnaie remplit trois fonctions : **unité de compte**, **intermédiaire des échanges** et **réserve de valeur**. L'essentiel de la monnaie est aujourd'hui **scripturale** (inscriptions sur des comptes).

La monnaie est créée principalement par les **banques commerciales** lorsqu'elles accordent des **crédits** : « les crédits font les dépôts ». Cette création est encadrée par la **banque centrale**, qui fixe les **taux directeurs**, gère la liquidité et poursuit la **stabilité des prix**. Une création monétaire excessive peut nourrir l'**inflation**.

## 2. Le financement de l'économie
Les agents à besoin de financement peuvent recourir :
- au **financement interne** (autofinancement par l'épargne ou les profits) ;
- au **financement externe indirect** (crédit bancaire : intermédiation) ;
- au **financement externe direct** (émission de **titres** — actions, obligations — sur les **marchés financiers**).

Une **action** est un titre de propriété donnant droit à un dividende ; une **obligation** est un titre de créance donnant droit à un intérêt. Le taux d'intérêt est le prix de cet accès aux fonds.

## 3. Les crises financières
Une **crise financière** naît souvent d'un enchaînement : formation d'une **bulle spéculative** (hausse des prix d'actifs déconnectée de leur valeur réelle), alimentée par le **crédit** et des **comportements mimétiques**, puis **retournement** et **krach**. Les mécanismes aggravants :
- l'**aléa moral** (prendre plus de risques quand on se croit couvert) ;
- les **asymétries d'information** ;
- les effets de **panique** et de **contagion** (une faillite en entraîne d'autres) ;
- le **risque systémique** : la défaillance d'un acteur menace tout le système.

## 4. La régulation financière
Pour limiter l'instabilité, les autorités imposent une **régulation** : exigences de **fonds propres** pour les banques, **supervision**, rôle de **prêteur en dernier ressort** de la banque centrale (fournir des liquidités pour éviter l'effondrement). Le débat oppose la nécessité de financer l'économie et le contrôle des risques.

## À retenir
- La monnaie a trois fonctions : unité de compte, intermédiaire des échanges, réserve de valeur.
- Les banques créent la monnaie par le crédit ; la banque centrale encadre.
- Financement : interne, externe indirect (crédit), externe direct (marchés).
- Action = titre de propriété ; obligation = titre de créance.
- Crises : bulle, mimétisme, aléa moral, contagion, risque systémique.
"""

qs = [
q(1,"facile","fonctions-monnaie","Les trois fonctions de la monnaie sont : intermédiaire des échanges, réserve de valeur et :",
  ["moyen de production","unité de compte","facteur travail","titre de propriété"],1,
  "La monnaie sert d'unité de compte, d'intermédiaire des échanges et de réserve de valeur."),
q(2,"facile","scripturale","La monnaie scripturale correspond :",
  ["aux pièces et billets","aux inscriptions sur les comptes bancaires","à l'or uniquement","aux actions"],1,
  "La monnaie scripturale est la monnaie inscrite sur des comptes, aujourd'hui majoritaire."),
q(3,"moyen","creation-monetaire","La création monétaire résulte principalement :",
  ["de l'impression de billets par les ménages","de l'octroi de crédits par les banques commerciales","de la vente d'actions","des impôts"],1,
  "Les banques créent de la monnaie en accordant des crédits : « les crédits font les dépôts »."),
q(4,"moyen","banque-centrale","La banque centrale encadre la création monétaire notamment par :",
  ["la fixation des salaires","la fixation des taux directeurs et la gestion de la liquidité","le vote du budget","la fixation des dividendes"],1,
  "La banque centrale agit sur les taux directeurs et la liquidité pour encadrer la monnaie et viser la stabilité des prix."),
q(5,"moyen","inflation","Une création monétaire excessive par rapport à la production peut entraîner :",
  ["de la déflation certaine","de l'inflation","la disparition de la monnaie","une baisse des prix garantie"],1,
  "Trop de monnaie par rapport aux biens disponibles peut alimenter une hausse générale des prix : l'inflation."),
q(6,"facile","action","Une action est :",
  ["un titre de créance donnant droit à un intérêt","un titre de propriété donnant droit à un dividende","un crédit bancaire","une pièce de monnaie"],1,
  "L'action est un titre de propriété : son détenteur est associé et perçoit un dividende."),
q(7,"facile","obligation","Une obligation est :",
  ["un titre de propriété","un titre de créance donnant droit à un intérêt","une part de capital","un compte courant"],1,
  "L'obligation est un titre de créance : le détenteur a prêté et perçoit un intérêt."),
q(8,"moyen","financement-indirect","Le financement externe indirect passe par :",
  ["l'autofinancement","le crédit bancaire (intermédiation)","l'émission d'actions directement sur le marché","les impôts"],1,
  "Le financement externe indirect repose sur l'intermédiation bancaire : la banque prête après avoir collecté."),
q(9,"moyen","financement-direct","Le financement externe direct correspond à :",
  ["un prêt de la banque","l'émission de titres (actions, obligations) sur les marchés financiers","l'usage de ses propres profits","le paiement en espèces"],1,
  "Le financement direct met en relation prêteurs et emprunteurs via l'émission de titres sur les marchés."),
q(10,"moyen","autofinancement","L'autofinancement est un financement :",
  ["externe indirect","interne, par l'épargne ou les profits","direct sur les marchés","par la banque centrale"],1,
  "L'autofinancement est un financement interne : l'agent utilise sa propre épargne ou ses profits."),
q(11,"moyen","bulle","Une bulle spéculative désigne :",
  ["une baisse durable des prix d'actifs","une hausse des prix d'actifs déconnectée de leur valeur réelle","une stabilité parfaite des marchés","un excédent budgétaire"],1,
  "Une bulle est une envolée des prix d'actifs sans lien avec leur valeur fondamentale, avant un retournement."),
q(12,"difficile","alea-moral","L'aléa moral sur les marchés financiers signifie qu'un agent :",
  ["réduit ses risques par prudence","prend davantage de risques parce qu'il se croit protégé des conséquences","dispose de toute l'information","ne prend jamais de crédit"],1,
  "L'aléa moral pousse à prendre plus de risques quand on pense ne pas en supporter les pertes."),
q(13,"difficile","mimetisme","Les comportements mimétiques sur les marchés consistent à :",
  ["agir de façon totalement indépendante","imiter les autres investisseurs, ce qui amplifie les mouvements de prix","ignorer les prix","fixer les prix administrativement"],1,
  "Le mimétisme (suivre le comportement des autres) amplifie hausses et baisses, nourrissant bulles et krachs."),
q(14,"difficile","risque-systemique","Le risque systémique désigne le risque que :",
  ["une seule entreprise fasse faillite sans conséquence","la défaillance d'un acteur se propage et menace tout le système financier","les prix restent stables","la monnaie disparaisse"],1,
  "Le risque systémique est celui d'un effondrement en chaîne du système à partir de la défaillance d'un acteur."),
q(15,"moyen","contagion","La contagion financière correspond :",
  ["à l'isolement d'une crise","à la propagation d'une crise d'un acteur ou marché à d'autres","à une hausse des salaires","à la baisse de la dette"],1,
  "La contagion est la diffusion d'une crise d'un acteur, marché ou pays vers d'autres."),
q(16,"moyen","preteur-dernier-ressort","Le rôle de prêteur en dernier ressort de la banque centrale consiste à :",
  ["fixer les impôts","fournir des liquidités aux banques pour éviter un effondrement","émettre des actions","garantir les dividendes"],1,
  "En cas de crise, la banque centrale fournit des liquidités pour éviter l'effondrement du système bancaire."),
q(17,"moyen","fonds-propres","Exiger des banques davantage de fonds propres vise à :",
  ["augmenter les dividendes","renforcer leur capacité à absorber des pertes et limiter le risque","supprimer le crédit","fixer les taux"],1,
  "Des fonds propres plus élevés permettent aux banques d'absorber des pertes, réduisant le risque de faillite."),
q(18,"facile","taux-interet","Le taux d'intérêt peut se définir comme :",
  ["le prix de l'accès à des fonds prêtés","le montant des impôts","le dividende d'une action","le salaire minimum"],1,
  "Le taux d'intérêt est le prix payé pour disposer de fonds empruntés."),
q(19,"difficile","krach","Un krach boursier correspond :",
  ["à une hausse régulière des cours","à un effondrement brutal des cours après un retournement","à une stabilité des cours","à une création monétaire"],1,
  "Le krach est la chute brutale des cours qui suit l'éclatement d'une bulle."),
q(20,"moyen","asymetrie-info","Sur les marchés financiers, une asymétrie d'information existe quand :",
  ["tous les agents savent tout","une partie dispose de plus d'informations que l'autre (ex. l'emprunteur mieux informé que le prêteur)","les prix sont fixés par l'État","il n'y a pas d'échange"],1,
  "L'asymétrie d'information : une partie en sait plus que l'autre, source de sélection adverse et d'aléa moral."),
]

exos = [
e(1,"decouverte","fonctions-monnaie","Associe chaque situation à une fonction de la monnaie : (a) afficher un prix, (b) payer un achat, (c) épargner pour plus tard.",
  ["(a) exprimer une valeur = unité de compte.","(b) régler un échange = intermédiaire des échanges.","(c) conserver du pouvoir d'achat = réserve de valeur."],
  "(a) unité de compte, (b) intermédiaire des échanges, (c) réserve de valeur."),
e(2,"decouverte","action-obligation","Distingue une action d'une obligation en une phrase chacune.",
  ["Action : titre de propriété, l'investisseur devient associé et reçoit un dividende variable.","Obligation : titre de créance, l'investisseur a prêté et reçoit un intérêt."],
  "Action : titre de propriété (dividende) ; obligation : titre de créance (intérêt)."),
e(3,"application","interet","On emprunte 10 000 euros au taux d'intérêt annuel de 4 pour cent. Calcule l'intérêt dû la première année.",
  ["Intérêt = montant × taux.","10 000 × 0,04 = 400.","L'intérêt dû est de 400 euros."],
  "400 euros."),
e(4,"decouverte","modes-financement","Classe ces modes de financement : (a) l'entreprise utilise ses profits, (b) elle emprunte à sa banque, (c) elle émet des obligations sur le marché.",
  ["(a) ressources propres = financement interne.","(b) intermédiation bancaire = externe indirect.","(c) titres sur le marché = externe direct."],
  "(a) interne, (b) externe indirect, (c) externe direct."),
e(5,"application","rendement","Une action achetée 50 euros verse un dividende de 2 euros. Calcule le rendement en pourcentage.",
  ["Rendement = dividende / prix d'achat × 100.","2 / 50 × 100 = 0,04 × 100.","= 4 pour cent."],
  "4 pour cent."),
e(6,"application","variation-cours","Une action passe de 80 à 60 euros lors d'un krach. Calcule la variation en pourcentage.",
  ["(60 − 80) / 80 × 100.","−20 / 80 × 100 = −0,25 × 100.","= −25 pour cent."],
  "−25 pour cent."),
e(7,"decouverte","creation-monetaire","Explique la formule « les crédits font les dépôts » en une phrase.",
  ["Quand une banque accorde un crédit, elle inscrit la somme sur le compte du client : elle crée de la monnaie.","Ce nouveau dépôt n'existait pas auparavant : le crédit crée le dépôt, et non l'inverse."],
  "En accordant un crédit, la banque crée un dépôt, donc de la monnaie."),
e(8,"approfondissement","bulle","Décris en deux lignes l'enchaînement typique menant à une crise financière.",
  ["Hausse des prix d'un actif, alimentée par le crédit et le mimétisme, qui forme une bulle.","Un retournement provoque des ventes en chaîne, un krach, puis une possible contagion et un risque systémique."],
  "Bulle (crédit + mimétisme) → retournement → krach → contagion / risque systémique."),
e(9,"approfondissement","alea-moral","Explique pourquoi la certitude d'être sauvé peut accroître la prise de risque des banques (aléa moral).",
  ["Si une banque pense qu'elle sera secourue en cas de faillite, elle ne supporte pas pleinement le coût de ses pertes.","Elle est alors incitée à prendre plus de risques : c'est l'aléa moral, argument en faveur d'une régulation."],
  "Se croyant protégée des pertes, la banque prend plus de risques : c'est l'aléa moral."),
e(10,"approfondissement","regulation","Cite deux instruments de régulation financière et l'objectif poursuivi.",
  ["Exigences de fonds propres : absorber les pertes et limiter les faillites.","Supervision et rôle de prêteur en dernier ressort de la banque centrale : éviter la panique et la contagion.","Objectif : réduire l'instabilité et le risque systémique."],
  "Ex. fonds propres et supervision / prêteur en dernier ressort ; objectif : limiter le risque systémique."),
]

cartes = [
{"recto":"Quelles sont les trois fonctions de la monnaie ?","verso":"Unité de compte, intermédiaire des échanges, réserve de valeur."},
{"recto":"Qui crée l'essentiel de la monnaie et comment ?","verso":"Les banques commerciales, en accordant des crédits : « les crédits font les dépôts »."},
{"recto":"Quel est le rôle de la banque centrale sur la monnaie ?","verso":"Encadrer la création monétaire (taux directeurs, liquidité) et viser la stabilité des prix."},
{"recto":"Action vs obligation ?","verso":"Action : titre de propriété (dividende). Obligation : titre de créance (intérêt)."},
{"recto":"Les trois grands modes de financement ?","verso":"Interne (autofinancement), externe indirect (crédit bancaire), externe direct (marchés)."},
{"recto":"Qu'est-ce qu'une bulle spéculative ?","verso":"Une hausse des prix d'actifs déconnectée de leur valeur réelle, suivie d'un retournement."},
{"recto":"Qu'est-ce que l'aléa moral ?","verso":"Prendre davantage de risques parce qu'on se croit protégé des pertes."},
{"recto":"Qu'est-ce que le mimétisme financier ?","verso":"Imiter le comportement des autres investisseurs, ce qui amplifie les mouvements de prix."},
{"recto":"Qu'est-ce que le risque systémique ?","verso":"Le risque qu'une défaillance se propage et menace tout le système financier."},
{"recto":"Rôle de prêteur en dernier ressort ?","verso":"La banque centrale fournit des liquidités aux banques pour éviter un effondrement."},
{"recto":"À quoi servent les exigences de fonds propres ?","verso":"Permettre aux banques d'absorber des pertes et limiter le risque de faillite."},
{"recto":"Comment définit-on le taux d'intérêt ?","verso":"Le prix de l'accès à des fonds empruntés."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
