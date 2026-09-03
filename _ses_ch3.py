# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "marche-du-travail-chomage"
cid = "tale-ses-marche-du-travail-chomage"
titre = "Le fonctionnement du marché du travail et le chômage"
prereq = ["Mécanisme de l'offre et de la demande", "Notion de population active"]

fiche = """# Le fonctionnement du marché du travail et le chômage

> Le marché du travail n'est pas un marché comme les autres. Comprendre ses mécanismes éclaire les causes du chômage et les politiques de l'emploi.

## 1. Le marché du travail selon l'analyse néoclassique
Dans le modèle **néoclassique** de concurrence, le salaire est un prix qui équilibre l'**offre de travail** (par les travailleurs) et la **demande de travail** (par les entreprises). À l'équilibre, il n'existe qu'un **chômage volontaire** : ceux qui refusent de travailler au salaire d'équilibre. Un salaire maintenu au-dessus de l'équilibre (par exemple un **salaire minimum** élevé) peut créer un **chômage** en rendant l'offre supérieure à la demande.

## 2. Les limites de ce modèle
Le travail n'est pas une marchandise ordinaire :
- **asymétries d'information** entre employeur et salarié ;
- **salaire d'efficience** : payer au-dessus du marché augmente la productivité et la fidélité ;
- rôle des **institutions** : salaire minimum, conventions collectives, protection de l'emploi ;
- **négociation collective** et rapports de force (syndicats, employeurs).
Ces éléments expliquent que le salaire ne s'ajuste pas librement et qu'un **chômage involontaire** puisse persister.

## 3. Mesurer et distinguer le chômage
Selon le **Bureau international du travail (BIT)**, est chômeur une personne sans emploi, disponible et qui recherche activement un emploi. Le **taux de chômage** = nombre de chômeurs / population active × 100 (la **population active** = actifs occupés + chômeurs). Le **taux d'emploi** rapporte les personnes en emploi à la population en âge de travailler.

On distingue plusieurs types de chômage :

| Type | Origine |
|---|---|
| Conjoncturel (keynésien) | Insuffisance de la demande globale |
| Structurel | Inadéquation durable entre offre et demande de travail (qualifications, régions) |
| Frictionnel | Temps de recherche entre deux emplois |

## 4. Les politiques de l'emploi
Face au chômage conjoncturel, l'analyse **keynésienne** préconise de soutenir la demande globale. Face au chômage structurel, on agit sur : la **formation** (adapter les qualifications), la **flexibilité** du marché du travail, la baisse du **coût du travail** (allègements de cotisations), et la **lutte contre les rigidités**. Les débats opposent ceux qui insistent sur le coût du travail et ceux qui insistent sur l'insuffisance de la demande.

## À retenir
- Modèle néoclassique : le salaire équilibre offre et demande de travail ; seul un chômage volontaire subsiste à l'équilibre.
- Le travail n'est pas une marchandise ordinaire : salaire d'efficience, institutions, négociation.
- Chômeur au sens du BIT : sans emploi, disponible, en recherche active.
- Taux de chômage = chômeurs / population active × 100.
- Chômage conjoncturel (demande), structurel (inadéquation), frictionnel (transition).
"""

qs = [
q(1,"facile","population-active","La population active regroupe :",
  ["les seuls actifs occupés","les actifs occupés et les chômeurs","les retraités et les étudiants","toute la population"],1,
  "La population active = personnes en emploi (actifs occupés) + chômeurs."),
q(2,"facile","taux-chomage","Le taux de chômage se calcule ainsi :",
  ["chômeurs / population totale × 100","chômeurs / population active × 100","actifs occupés / population active × 100","chômeurs / actifs occupés × 100"],1,
  "Taux de chômage = nombre de chômeurs / population active × 100."),
q(3,"moyen","BIT","Au sens du BIT, un chômeur est une personne :",
  ["retraitée","sans emploi, disponible et recherchant activement un emploi","au foyer par choix","étudiante à temps plein"],1,
  "Le BIT définit le chômeur par trois critères : sans emploi, disponible, en recherche active."),
q(4,"moyen","neoclassique","Dans le modèle néoclassique de concurrence, le salaire :",
  ["est fixé arbitrairement par l'État","est un prix qui équilibre offre et demande de travail","n'a aucun effet sur l'emploi","est toujours nul"],1,
  "Le salaire y joue le rôle de prix d'équilibre entre offre et demande de travail."),
q(5,"difficile","chomage-volontaire","À l'équilibre du modèle néoclassique de base, le chômage restant est qualifié de :",
  ["involontaire","volontaire","conjoncturel","structurel"],1,
  "À l'équilibre, ne restent que ceux qui refusent de travailler au salaire d'équilibre : chômage volontaire."),
q(6,"moyen","salaire-minimum","Selon l'analyse néoclassique, un salaire minimum fixé au-dessus de l'équilibre peut :",
  ["supprimer tout chômage","créer du chômage en rendant l'offre de travail supérieure à la demande","augmenter la demande de travail","n'avoir aucun effet"],1,
  "Un salaire plancher supérieur à l'équilibre rend l'offre de travail supérieure à la demande, d'où du chômage."),
q(7,"difficile","salaire-efficience","Le salaire d'efficience désigne l'idée que :",
  ["baisser les salaires augmente toujours la productivité","payer au-dessus du marché accroît la productivité et la fidélité des salariés","le salaire n'influence pas l'effort","les salaires doivent être identiques partout"],1,
  "Le salaire d'efficience : une rémunération supérieure au marché motive, fidélise et augmente la productivité."),
q(8,"moyen","chomage-conjoncturel","Le chômage conjoncturel (keynésien) provient :",
  ["d'une inadéquation des qualifications","d'une insuffisance de la demande globale","du temps de recherche d'emploi","d'un excès d'innovation"],1,
  "Le chômage conjoncturel résulte d'un manque de demande globale, ralentissant l'activité et l'embauche."),
q(9,"moyen","chomage-structurel","Le chômage structurel est lié :",
  ["à une baisse temporaire des commandes","à une inadéquation durable entre offre et demande de travail","à un simple délai entre deux emplois","à une grève"],1,
  "Le chômage structurel tient à des déséquilibres durables : qualifications, localisation, organisation du marché."),
q(10,"moyen","chomage-frictionnel","Le chômage frictionnel correspond :",
  ["au chômage permanent","au temps nécessaire pour retrouver un emploi entre deux postes","à un manque de demande","à une crise financière"],1,
  "Le chômage frictionnel est le chômage de courte durée lié à la transition entre deux emplois."),
q(11,"facile","taux-emploi","Le taux d'emploi rapporte :",
  ["les chômeurs à la population active","les personnes en emploi à la population en âge de travailler","le PIB à la population","les salaires aux profits"],1,
  "Le taux d'emploi = personnes en emploi / population en âge de travailler × 100."),
q(12,"difficile","cout-travail","Le coût du travail pour l'employeur comprend :",
  ["le seul salaire net","le salaire brut plus les cotisations sociales patronales","les impôts sur le revenu","les dividendes"],1,
  "Le coût du travail = salaire brut + cotisations patronales : c'est ce que paie réellement l'employeur."),
q(13,"moyen","asymetrie","L'asymétrie d'information sur le marché du travail signifie que :",
  ["l'employeur et le salarié ont exactement la même information","l'employeur ne connaît pas parfaitement l'effort ou les capacités du salarié","le salaire est toujours optimal","il n'y a pas de contrat"],1,
  "L'employeur observe mal l'effort réel et les capacités du candidat : c'est une asymétrie d'information."),
q(14,"moyen","keynes","Face au chômage conjoncturel, l'analyse keynésienne recommande de :",
  ["réduire la demande globale","soutenir la demande globale","supprimer les allocations","augmenter les taux d'intérêt"],1,
  "Keynes préconise de relancer la demande globale pour réduire le chômage conjoncturel."),
q(15,"facile","actif-occupe","Un actif occupé est une personne :",
  ["au chômage","qui exerce un emploi rémunéré","retraitée","étudiante"],1,
  "Un actif occupé est une personne qui exerce effectivement un emploi."),
q(16,"difficile","flexibilite","La flexibilité du marché du travail désigne :",
  ["l'interdiction de licencier","la capacité à ajuster plus facilement l'emploi et les salaires aux besoins des entreprises","la fixation d'un salaire unique","la suppression des contrats"],1,
  "La flexibilité facilite l'ajustement de la quantité de travail et des rémunérations aux conditions de l'activité."),
q(17,"moyen","segmentation","La segmentation du marché du travail oppose souvent :",
  ["un marché unique et homogène","un marché primaire (emplois stables, protégés) et un marché secondaire (emplois précaires)","offre et demande","importations et exportations"],1,
  "Le marché du travail est segmenté entre emplois stables et protégés (primaire) et emplois précaires (secondaire)."),
q(18,"moyen","negociation","La négociation collective concerne :",
  ["chaque salarié seul face à son employeur","les discussions entre représentants des salariés et des employeurs (syndicats, patronat)","uniquement l'État","les seuls actionnaires"],1,
  "La négociation collective réunit syndicats et employeurs pour fixer salaires et conditions de travail."),
q(19,"difficile","calcul-population-active","Dans un pays, il y a 27 millions d'actifs occupés et 3 millions de chômeurs. La population active est de :",
  ["24 millions","30 millions","3 millions","27 millions"],1,
  "Population active = actifs occupés + chômeurs = 27 + 3 = 30 millions."),
q(20,"moyen","politique-structurelle","La formation professionnelle est surtout une réponse au chômage :",
  ["conjoncturel","structurel","frictionnel de très court terme","volontaire"],1,
  "La formation réduit l'inadéquation des qualifications : c'est une réponse au chômage structurel."),
]

exos = [
e(1,"application","taux-chomage","Un pays compte 3 millions de chômeurs pour une population active de 30 millions. Calcule le taux de chômage.",
  ["Taux de chômage = chômeurs / population active × 100.","3 / 30 × 100 = 0,1 × 100.","= 10 pour cent."],
  "10 pour cent."),
e(2,"decouverte","BIT","Parmi ces personnes, laquelle est chômeuse au sens du BIT : (a) un retraité, (b) une personne sans emploi qui cherche activement et est disponible, (c) un étudiant à temps plein sans recherche d'emploi ?",
  ["Le BIT exige : sans emploi, disponible, recherche active.","(a) et (c) ne remplissent pas ces critères.","Seule (b) est chômeuse au sens du BIT."],
  "La personne (b)."),
e(3,"application","population-active","Dans une ville, 4,5 millions d'actifs occupés et 500 000 chômeurs. Calcule la population active puis le taux de chômage.",
  ["Population active = 4 500 000 + 500 000 = 5 000 000.","Taux de chômage = 500 000 / 5 000 000 × 100.","= 10 pour cent."],
  "Population active : 5 millions ; taux de chômage : 10 pour cent."),
e(4,"decouverte","types-chomage","Associe chaque situation à un type de chômage : (a) baisse générale des commandes en récession, (b) délai de deux mois entre deux emplois, (c) compétences devenues obsolètes.",
  ["(a) manque de demande = conjoncturel.","(b) transition courte = frictionnel.","(c) inadéquation durable = structurel."],
  "(a) conjoncturel, (b) frictionnel, (c) structurel."),
e(5,"application","taux-emploi","Sur 40 millions de personnes en âge de travailler, 26 millions ont un emploi. Calcule le taux d'emploi.",
  ["Taux d'emploi = personnes en emploi / population en âge de travailler × 100.","26 / 40 × 100 = 0,65 × 100.","= 65 pour cent."],
  "65 pour cent."),
e(6,"application","variation-chomage","Le taux de chômage passe de 8 pour cent à 6 pour cent. Exprime la variation en points de pourcentage.",
  ["Une variation entre deux pourcentages s'exprime en points.","6 − 8 = −2.","Le taux baisse de 2 points de pourcentage."],
  "Baisse de 2 points de pourcentage."),
e(7,"approfondissement","salaire-efficience","Explique en deux lignes pourquoi une entreprise peut choisir de payer ses salariés au-dessus du prix du marché.",
  ["Un salaire plus élevé motive, fidélise et attire des candidats plus qualifiés.","Il réduit le turnover et augmente la productivité : c'est le salaire d'efficience, qui peut être rentable pour l'employeur."],
  "Pour augmenter la productivité et la fidélité : c'est le salaire d'efficience."),
e(8,"approfondissement","keynes","Un gouvernement veut réduire un chômage causé par une chute de la demande. Quelle logique keynésienne peut-il suivre ?",
  ["Le chômage est ici conjoncturel : la demande globale est insuffisante.","Logique keynésienne : soutenir la demande (dépenses publiques, soutien au pouvoir d'achat) pour relancer l'activité et l'emploi."],
  "Soutenir la demande globale pour relancer l'activité et l'emploi."),
e(9,"application","cout-travail","Un salarié touche un salaire brut de 2 000 euros ; les cotisations patronales représentent 40 pour cent du brut. Calcule le coût du travail pour l'employeur.",
  ["Coût du travail = salaire brut + cotisations patronales.","Cotisations = 40 pour cent de 2 000 = 800.","Coût = 2 000 + 800 = 2 800 euros."],
  "2 800 euros."),
e(10,"approfondissement","structurel","Le chômage d'un pays reste élevé même en période de croissance. Quel type de chômage cela suggère-t-il et quelles politiques adopter ?",
  ["Un chômage qui persiste malgré la croissance est surtout structurel.","Politiques : formation pour réduire l'inadéquation des qualifications, flexibilité, allègement du coût du travail, mobilité géographique."],
  "Chômage structurel ; politiques : formation, flexibilité, baisse du coût du travail."),
]

cartes = [
{"recto":"Que comprend la population active ?","verso":"Les actifs occupés (en emploi) et les chômeurs."},
{"recto":"Formule du taux de chômage ?","verso":"Nombre de chômeurs / population active × 100."},
{"recto":"Définition du chômeur au sens du BIT ?","verso":"Sans emploi, disponible pour travailler et recherchant activement un emploi."},
{"recto":"Rôle du salaire dans le modèle néoclassique ?","verso":"Un prix qui équilibre l'offre et la demande de travail ; à l'équilibre, seul un chômage volontaire subsiste."},
{"recto":"Qu'est-ce que le salaire d'efficience ?","verso":"Payer au-dessus du marché pour accroître la productivité et la fidélité des salariés."},
{"recto":"Chômage conjoncturel ?","verso":"Chômage dû à une insuffisance de la demande globale (analyse keynésienne)."},
{"recto":"Chômage structurel ?","verso":"Chômage lié à une inadéquation durable entre offre et demande de travail (qualifications, régions)."},
{"recto":"Chômage frictionnel ?","verso":"Chômage de courte durée lié à la transition entre deux emplois."},
{"recto":"Formule du taux d'emploi ?","verso":"Personnes en emploi / population en âge de travailler × 100."},
{"recto":"Que comprend le coût du travail ?","verso":"Le salaire brut plus les cotisations sociales patronales."},
{"recto":"Qu'est-ce qu'une asymétrie d'information sur le marché du travail ?","verso":"L'employeur connaît mal l'effort réel et les capacités du salarié."},
{"recto":"Que vise la formation professionnelle contre le chômage ?","verso":"Réduire le chômage structurel en adaptant les qualifications aux besoins."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
