# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "structure-sociale-classes"
cid = "tale-ses-structure-sociale-classes"
titre = "La structure sociale et les inégalités"
prereq = ["Notion de groupe social", "Lecture de tableaux et de coefficients"]

fiche = """# La structure sociale et les inégalités

> Comment décrire la société et ses divisions ? Ce chapitre présente les grandes analyses de la stratification sociale et les outils de mesure des inégalités.

## 1. Analyser la structure sociale
La **structure sociale** désigne la manière dont une société est organisée en groupes hiérarchisés. Deux grandes traditions l'analysent :
- **Karl Marx** : la société se divise en **classes sociales** définies par la place dans les rapports de production (bourgeoisie détenant les moyens de production / prolétariat vendant sa force de travail). Il distingue la classe « en soi » (position objective) et la classe « pour soi » (conscience de classe et mobilisation) ;
- **Max Weber** : la stratification est **multidimensionnelle**. Il distingue l'ordre économique (**classes**), l'ordre social (**groupes de statut**, liés au prestige) et l'ordre politique (**partis**). Les hiérarchies ne se superposent pas nécessairement.

## 2. Des catégories pour décrire
En pratique, on utilise des **nomenclatures socioprofessionnelles** (les PCS) qui regroupent les individus selon la profession, le statut et la qualification. Elles permettent de décrire la structure sociale et son évolution (par exemple la salarisation, la tertiarisation, la montée des professions intermédiaires et des cadres).

## 3. Les facteurs de structuration et l'individualisation
La position sociale ne se réduit pas à la seule profession. D'autres facteurs structurent l'espace social : le **niveau de diplôme**, le **genre**, l'**âge** et la **génération**, le **lieu de vie**. Certains sociologues insistent sur un mouvement d'**individualisation** et de **moyennisation** (constitution d'une vaste classe moyenne, atténuation des frontières de classe) ; d'autres soulignent le maintien et le **renouvellement des distances** entre groupes.

## 4. Mesurer les inégalités
Les inégalités sont des différences porteuses d'un avantage ou d'un désavantage (revenus, patrimoine, mais aussi accès à l'éducation, à la santé…). Outils courants :
- les **déciles** (partage en dix groupes de même effectif) et le **rapport interdécile** (D9/D1) ;
- la **médiane** ;
- la **courbe de Lorenz** et le **coefficient de Gini** (0 = égalité parfaite, 1 = inégalité maximale) ;
- le **patrimoine**, généralement plus concentré que les revenus.

## À retenir
- Marx : classes définies par les rapports de production ; classe en soi / pour soi.
- Weber : stratification multidimensionnelle (classes, statut, partis).
- Les PCS décrivent la structure sociale et son évolution.
- Genre, diplôme, âge structurent aussi l'espace social.
- Inégalités mesurées par déciles, rapport interdécile, Gini (0 à 1).
"""

qs = [
q(1,"facile","marx","Pour Karl Marx, les classes sociales se définissent principalement par :",
  ["le niveau de prestige","la place dans les rapports de production","le lieu d'habitation","l'âge"],1,
  "Chez Marx, la classe se définit par la position dans les rapports de production (détenir ou non les moyens de production)."),
q(2,"moyen","marx-conscience","La distinction marxiste entre classe « en soi » et classe « pour soi » renvoie à :",
  ["la richesse et la pauvreté","la position objective et la conscience de classe mobilisée","la ville et la campagne","le public et le privé"],1,
  "La classe « en soi » est une position objective ; « pour soi » suppose une conscience de classe et une mobilisation."),
q(3,"moyen","weber","Contrairement à Marx, Max Weber propose une analyse de la stratification :",
  ["uniquement économique","multidimensionnelle (classes, statut, partis)","fondée sur le seul âge","sans hiérarchie"],1,
  "Weber distingue trois ordres : économique (classes), social (statut) et politique (partis)."),
q(4,"moyen","weber-statut","Chez Weber, les groupes de statut reposent surtout sur :",
  ["la seule propriété","le prestige et le mode de vie","le nombre d'enfants","la région"],1,
  "Les groupes de statut se définissent par le prestige social et le style de vie, distincts de la seule richesse."),
q(5,"facile","PCS","Les PCS (professions et catégories socioprofessionnelles) servent à :",
  ["mesurer l'inflation","classer la population selon la profession, le statut et la qualification","calculer le PIB","fixer les salaires"],1,
  "Les PCS regroupent les individus selon la profession, le statut et la qualification pour décrire la structure sociale."),
q(6,"moyen","evolution","La tertiarisation de l'emploi désigne :",
  ["la hausse de l'emploi agricole","le poids croissant des emplois de services","la baisse des services","la disparition du salariat"],1,
  "La tertiarisation est la montée de la part des emplois du secteur des services dans l'emploi total."),
q(7,"moyen","salarisation","La salarisation de la société correspond à :",
  ["la hausse de la part des salariés dans la population active","la baisse du nombre de salariés","la disparition des entreprises","la fin du travail"],1,
  "La salarisation est l'augmentation de la part des salariés parmi les actifs occupés."),
q(8,"facile","inegalites","Une inégalité sociale est :",
  ["toute différence entre individus","une différence porteuse d'un avantage ou d'un désavantage, hiérarchisée","une opinion politique","un revenu médian"],1,
  "L'inégalité est une différence d'accès à des ressources valorisées, source d'avantage ou de désavantage."),
q(9,"difficile","gini","Le coefficient de Gini est égal à 0 lorsque :",
  ["les inégalités sont maximales","la répartition est parfaitement égalitaire","le patrimoine est nul","la population est nulle"],1,
  "Un Gini de 0 correspond à l'égalité parfaite ; il tend vers 1 quand les inégalités augmentent."),
q(10,"difficile","gini","Plus le coefficient de Gini se rapproche de 1, plus :",
  ["la répartition est égalitaire","la répartition est inégalitaire","les revenus sont identiques","le patrimoine est partagé"],1,
  "Le Gini varie de 0 (égalité parfaite) à 1 (inégalité maximale) : proche de 1, la concentration est forte."),
q(11,"moyen","decile","Le premier décile (D1) d'une distribution de revenus est le niveau en dessous duquel se situent :",
  ["50 pour cent des individus","10 pour cent des individus","90 pour cent des individus","tous les individus"],1,
  "D1 est le seuil sous lequel se trouvent les 10 pour cent aux revenus les plus faibles."),
q(12,"moyen","interdecile","Le rapport interdécile D9/D1 mesure :",
  ["le revenu moyen","l'écart entre le haut et le bas de la distribution","le patrimoine total","le taux de chômage"],1,
  "Le rapport D9/D1 compare le seuil des 10 pour cent les plus aisés à celui des 10 pour cent les plus modestes."),
q(13,"facile","mediane","Le revenu médian est le revenu tel que :",
  ["la moitié de la population gagne moins et l'autre moitié plus","tous gagnent la même chose","10 pour cent gagnent moins","personne ne gagne plus"],1,
  "La médiane partage la population en deux moitiés égales : autant au-dessus qu'en dessous."),
q(14,"moyen","patrimoine","Par rapport aux revenus, le patrimoine est généralement :",
  ["moins concentré","plus concentré","toujours nul","identique pour tous"],1,
  "Le patrimoine est en général plus inégalement réparti (plus concentré) que les revenus."),
q(15,"difficile","lorenz","La courbe de Lorenz représente :",
  ["l'évolution du PIB","la concentration d'une distribution (ex. des revenus) par rapport à l'égalité parfaite","le taux d'inflation","le nombre de classes"],1,
  "La courbe de Lorenz montre l'écart entre la répartition observée et la droite d'égalité parfaite."),
q(16,"moyen","moyennisation","La thèse de la moyennisation soutient que :",
  ["les classes se renforcent","une vaste classe moyenne se développe et les frontières de classe s'atténuent","la société se réduit à deux classes","les inégalités disparaissent totalement"],1,
  "La moyennisation désigne l'essor d'une large classe moyenne et l'atténuation des frontières de classe."),
q(17,"moyen","facteurs","Parmi ces éléments, lequel structure aussi l'espace social au-delà de la profession ?",
  ["La couleur des yeux","le genre","le prénom uniquement","la taille"],1,
  "Le genre, comme le diplôme ou l'âge, structure l'espace social au-delà de la seule profession."),
q(18,"difficile","individualisation","L'individualisation des trajectoires renvoie à l'idée que :",
  ["chacun est totalement déterminé par sa classe","les parcours dépendent davantage de choix individuels et moins de l'appartenance de classe","les classes ont disparu par décret","le revenu n'existe plus"],1,
  "L'individualisation souligne le poids croissant des trajectoires individuelles face aux appartenances collectives."),
q(19,"moyen","classe-pour-soi","Une classe « pour soi » suppose :",
  ["seulement une position économique","une conscience commune et une capacité de mobilisation","l'absence de tout conflit","une répartition égalitaire"],1,
  "La classe « pour soi » implique une conscience de classe partagée et une action collective."),
q(20,"facile","structure-sociale","La structure sociale désigne :",
  ["le PIB d'un pays","la façon dont une société est organisée en groupes hiérarchisés","le taux de change","le nombre d'habitants"],1,
  "La structure sociale est l'organisation d'une société en groupes hiérarchisés et leurs relations."),
]

exos = [
e(1,"decouverte","marx-weber","En une phrase chacune, oppose l'analyse de Marx et celle de Weber sur la stratification.",
  ["Marx : la société se divise en classes définies par les rapports de production (surtout économique).","Weber : la stratification est multidimensionnelle (classes, statut, partis) et les hiérarchies ne se superposent pas forcément."],
  "Marx : classes économiques ; Weber : stratification multidimensionnelle (classes, statut, partis)."),
e(2,"application","interdecile","Dans un pays, D9 = 40 000 euros et D1 = 10 000 euros. Calcule le rapport interdécile D9/D1.",
  ["Rapport interdécile = D9 / D1.","40 000 / 10 000 = 4.","Le rapport interdécile est de 4 : les 10 pour cent les plus aisés gagnent au moins 4 fois plus que les plus modestes."],
  "4."),
e(3,"decouverte","gini","Deux pays ont un coefficient de Gini de 0,25 et 0,45. Lequel est le plus inégalitaire ?",
  ["Le Gini varie de 0 (égalité parfaite) à 1 (inégalité maximale).","0,45 > 0,25.","Le pays avec un Gini de 0,45 est le plus inégalitaire."],
  "Celui dont le Gini est de 0,45."),
e(4,"application","part","Les 10 pour cent les plus riches détiennent 300 sur un patrimoine total de 1 000. Calcule leur part en pourcentage.",
  ["Part = patrimoine du groupe / total × 100.","300 / 1 000 × 100 = 0,3 × 100.","= 30 pour cent."],
  "30 pour cent."),
e(5,"decouverte","PCS","À quoi servent les PCS et cite deux évolutions qu'elles permettent d'observer.",
  ["Les PCS classent la population selon la profession, le statut et la qualification.","Elles permettent de suivre des évolutions comme la salarisation, la tertiarisation ou la montée des cadres."],
  "Décrire la structure sociale ; ex. salarisation et tertiarisation."),
e(6,"application","mediane","Cinq revenus mensuels : 1 200, 1 500, 1 800, 2 400 et 5 000 euros. Indique le revenu médian.",
  ["La médiane est la valeur centrale d'une série ordonnée.","La série est déjà classée ; la valeur centrale (3e sur 5) est 1 800.","Le revenu médian est de 1 800 euros."],
  "1 800 euros."),
e(7,"application","comparaison","Le rapport D9/D1 passe de 3,5 à 4,2. Les inégalités de revenus ont-elles augmenté ou diminué ?",
  ["Un rapport interdécile plus élevé signale un écart plus grand entre haut et bas.","4,2 > 3,5.","Les inégalités de revenus ont augmenté."],
  "Elles ont augmenté."),
e(8,"approfondissement","moyennisation","Oppose en deux lignes la thèse de la moyennisation et celle du maintien des distances sociales.",
  ["Moyennisation : essor d'une large classe moyenne, atténuation des frontières de classe.","Maintien des distances : les écarts et les frontières entre groupes persistent, voire se renouvellent (patrimoine, modes de vie)."],
  "Moyennisation : classe moyenne dominante ; thèse opposée : les distances de classe persistent."),
e(9,"application","patrimoine-revenu","Le Gini des revenus vaut 0,30 et celui du patrimoine 0,65. Que peut-on en conclure ?",
  ["Un Gini plus élevé signale une répartition plus concentrée.","0,65 > 0,30.","Le patrimoine est nettement plus concentré (plus inégalement réparti) que les revenus."],
  "Le patrimoine est plus concentré que les revenus."),
e(10,"approfondissement","facteurs","Cite deux facteurs, autres que la profession, qui structurent l'espace social et explique brièvement pourquoi.",
  ["Le diplôme : il conditionne l'accès aux positions et aux revenus.","Le genre : à profession comparable, des inégalités subsistent (salaires, carrières).","Ces facteurs se combinent avec la profession pour situer les individus dans l'espace social."],
  "Ex. diplôme et genre, qui conditionnent l'accès aux ressources et aux positions."),
]

cartes = [
{"recto":"Comment Marx définit-il les classes sociales ?","verso":"Par la place dans les rapports de production (propriétaires des moyens de production / travailleurs)."},
{"recto":"Classe « en soi » vs « pour soi » (Marx) ?","verso":"En soi : position objective. Pour soi : conscience de classe et capacité de mobilisation."},
{"recto":"En quoi l'analyse de Weber diffère-t-elle de celle de Marx ?","verso":"Elle est multidimensionnelle : classes (économie), groupes de statut (prestige), partis (politique)."},
{"recto":"À quoi servent les PCS ?","verso":"À classer la population selon profession, statut et qualification pour décrire la structure sociale."},
{"recto":"Qu'est-ce que la tertiarisation ?","verso":"La montée de la part des emplois de services dans l'emploi total."},
{"recto":"Qu'est-ce qu'une inégalité sociale ?","verso":"Une différence hiérarchisée, porteuse d'un avantage ou d'un désavantage (revenu, éducation, santé…)."},
{"recto":"Que mesure le coefficient de Gini ?","verso":"La concentration d'une distribution : 0 = égalité parfaite, 1 = inégalité maximale."},
{"recto":"Que compare le rapport interdécile D9/D1 ?","verso":"Le seuil des 10 pour cent les plus aisés au seuil des 10 pour cent les plus modestes."},
{"recto":"Qu'est-ce que le revenu médian ?","verso":"Le revenu qui partage la population en deux moitiés égales."},
{"recto":"Revenus ou patrimoine : lequel est le plus concentré ?","verso":"Le patrimoine est en général plus concentré que les revenus."},
{"recto":"Qu'est-ce que la moyennisation ?","verso":"L'essor d'une vaste classe moyenne et l'atténuation des frontières de classe."},
{"recto":"Cite deux facteurs de structuration sociale au-delà de la profession.","verso":"Par exemple le diplôme, le genre, l'âge ou le lieu de vie."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
