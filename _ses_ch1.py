# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "sources-croissance"
cid = "tale-ses-sources-croissance"
titre = "Les sources de la croissance économique (progrès technique)"
prereq = ["Notion de PIB et de valeur ajoutée", "Calcul d'un taux de variation en pourcentage"]

fiche = """# Les sources de la croissance économique (progrès technique)

> La croissance économique désigne l'augmentation durable de la production d'un pays. Comprendre ses sources, c'est comprendre pourquoi certains pays s'enrichissent plus vite que d'autres, et quel rôle joue l'innovation.

## 1. Mesurer la croissance
La croissance économique est l'augmentation soutenue de la production, mesurée par le taux de variation du **PIB en volume** (c'est-à-dire corrigé de l'inflation).

| Notion | Définition |
|---|---|
| PIB en valeur | Production aux prix courants de l'année |
| PIB en volume | Production à prix constants, qui isole l'évolution des quantités |
| Taux de croissance | Taux de variation du PIB en volume d'une année sur l'autre |

Le taux de variation se calcule ainsi : (valeur d'arrivée − valeur de départ) / valeur de départ, multiplié par 100. Un PIB passant de 2 000 à 2 060 milliards augmente de 3 pour cent.

## 2. Les facteurs de la croissance
La production dépend de deux facteurs :
- le **facteur travail** (quantité de travail : nombre d'actifs, durée du travail) ;
- le **facteur capital** (machines, bâtiments, infrastructures).

On distingue une croissance **extensive** (on augmente la quantité de facteurs) d'une croissance **intensive** (on produit plus avec la même quantité de facteurs, grâce aux gains de **productivité**). La part de la croissance qui ne s'explique ni par le travail ni par le capital est appelée **productivité globale des facteurs (PGF)** : c'est le « résidu » mis en évidence par Robert Solow, qui reflète surtout le **progrès technique**.

## 3. Le progrès technique, moteur de la croissance
Le progrès technique améliore l'efficacité de la combinaison productive. Joseph Schumpeter décrit l'innovation comme un processus de **destruction créatrice** : les innovations rendent obsolètes les anciennes activités tout en créant de nouvelles.

Les théories de la **croissance endogène** (Paul Romer, Robert Lucas) montrent que le progrès technique n'est pas « tombé du ciel » : il résulte d'investissements dans la **recherche-développement**, le **capital humain** (éducation, formation), le **capital public** (infrastructures) et le **capital technologique**. La connaissance est un bien qui produit des **externalités positives** : une innovation profite à d'autres que son inventeur, ce qui peut conduire à un sous-investissement privé et justifie l'intervention publique (brevets, subventions à la recherche).

## 4. Institutions et soutenabilité
Les **institutions** (droits de propriété, État de droit, stabilité) sécurisent l'investissement et l'innovation. Enfin, la croissance pose la question de sa **soutenabilité** : épuisement des ressources, externalités environnementales négatives. La distinction entre soutenabilité **faible** (le capital technologique peut remplacer le capital naturel) et **forte** (certains capitaux naturels sont irremplaçables) structure le débat.

## À retenir
- La croissance se mesure par le taux de variation du PIB en volume.
- Croissance extensive (plus de facteurs) contre croissance intensive (gains de productivité).
- La PGF (résidu de Solow) reflète le progrès technique.
- Croissance endogène : R&D, capital humain, capital public entretiennent le progrès technique.
- Schumpeter : l'innovation est une destruction créatrice.
"""

qs = [
q(1,"facile","croissance","La croissance économique se mesure principalement par le taux de variation du :",
  ["PIB en valeur","PIB en volume","niveau des prix","taux de chômage"],1,
  "Le PIB en volume est corrigé de l'inflation : il isole l'évolution réelle des quantités produites."),
q(2,"facile","facteurs","Parmi ces éléments, lequel relève du facteur capital ?",
  ["Le nombre d'heures travaillées","Les machines et équipements","Le salaire versé","Le nombre de chômeurs"],1,
  "Le facteur capital regroupe les biens durables de production : machines, bâtiments, équipements."),
q(3,"moyen","croissance-intensive","Une croissance intensive repose principalement sur :",
  ["l'augmentation du nombre d'actifs","l'accumulation de machines uniquement","les gains de productivité","la hausse des prix"],2,
  "La croissance intensive produit davantage avec la même quantité de facteurs, grâce aux gains de productivité."),
q(4,"moyen","PGF","La productivité globale des facteurs (PGF) correspond :",
  ["à la seule productivité du travail","à la part de croissance non expliquée par la hausse du travail et du capital","au PIB par habitant","au taux d'investissement"],1,
  "La PGF est le « résidu » : la croissance qui ne s'explique ni par plus de travail ni par plus de capital, attribuée au progrès technique."),
q(5,"moyen","solow","Le « résidu » mis en évidence par Robert Solow est généralement interprété comme reflétant :",
  ["l'inflation","le progrès technique","le déficit public","l'épargne des ménages"],1,
  "Le résidu de Solow, ou PGF, est interprété comme la contribution du progrès technique à la croissance."),
q(6,"moyen","schumpeter","L'expression « destruction créatrice » est associée à :",
  ["Adam Smith","Joseph Schumpeter","John Maynard Keynes","Karl Marx"],1,
  "Schumpeter décrit l'innovation comme une destruction créatrice : elle détruit d'anciennes activités et en crée de nouvelles."),
q(7,"difficile","croissance-endogene","Les théories de la croissance endogène soutiennent que le progrès technique :",
  ["est totalement extérieur à l'économie","résulte de décisions d'investissement (R&D, éducation)","dépend uniquement du hasard","n'a aucun effet sur la croissance"],1,
  "La croissance endogène montre que le progrès technique est produit par des investissements internes à l'économie : R&D, capital humain, capital public."),
q(8,"moyen","capital-humain","Le capital humain désigne :",
  ["le stock de machines","l'ensemble des compétences et connaissances des travailleurs","la population totale","les réserves de change"],1,
  "Le capital humain est l'ensemble des connaissances, qualifications et compétences accumulées par les individus."),
q(9,"difficile","externalites","La connaissance produit des externalités positives car :",
  ["elle profite uniquement à son inventeur","une innovation bénéficie aussi à d'autres agents sans qu'ils l'aient payée","elle fait toujours baisser la production","elle réduit la productivité"],1,
  "Une innovation diffuse ses effets bien au-delà de son inventeur : c'est une externalité positive, source de sous-investissement privé."),
q(10,"moyen","brevet","Un brevet vise principalement à :",
  ["interdire toute innovation","permettre à l'innovateur de rentabiliser sa recherche en protégeant temporairement son invention","augmenter les impôts","fixer les prix"],1,
  "Le brevet donne un monopole temporaire d'exploitation, incitant à investir dans la R&D malgré les externalités."),
q(11,"facile","taux-variation","Un PIB en volume passe de 500 à 515 milliards. Le taux de croissance est de :",
  ["1,5 pour cent","3 pour cent","15 pour cent","5 pour cent"],1,
  "(515 − 500) / 500 × 100 = 15 / 500 × 100 = 3 pour cent."),
q(12,"moyen","extensive-intensive","Un pays qui augmente sa production uniquement en embauchant plus de travailleurs connaît une croissance :",
  ["intensive","extensive","négative","nulle"],1,
  "Augmenter la production en augmentant la quantité de facteurs (ici le travail) est une croissance extensive."),
q(13,"difficile","institutions","Selon l'analyse économique, des droits de propriété bien définis favorisent la croissance car ils :",
  ["découragent l'investissement","sécurisent les investissements et incitent à innover","augmentent le chômage","suppriment le progrès technique"],1,
  "Des institutions solides (droits de propriété, État de droit) sécurisent l'investissement et l'innovation, soutenant la croissance."),
q(14,"moyen","productivite","La productivité du travail se calcule en rapportant :",
  ["le capital au travail","la production à la quantité de travail utilisée","les salaires au PIB","le PIB à la population"],1,
  "La productivité du travail = production / quantité de travail (par exemple par heure travaillée)."),
q(15,"moyen","innovation","Selon Schumpeter, l'agent central de l'innovation est :",
  ["le rentier","l'entrepreneur","l'épargnant passif","le fonctionnaire"],1,
  "Pour Schumpeter, l'entrepreneur innovateur est le moteur du capitalisme et de la dynamique de croissance."),
q(16,"difficile","soutenabilite","La soutenabilité « forte » de la croissance suppose que :",
  ["le capital technologique remplace tout le capital naturel","certains éléments du capital naturel sont irremplaçables","la croissance n'a aucune limite","la pollution est sans effet"],1,
  "La soutenabilité forte considère que certains capitaux naturels ne peuvent pas être remplacés par du capital produit."),
q(17,"facile","PIB-habitant","Le PIB par habitant est un meilleur indicateur du niveau de vie que le PIB total car il :",
  ["ignore la population","rapporte la production au nombre d'habitants","mesure l'inflation","compte les inégalités"],1,
  "Le PIB par habitant rapporte la production à la population et reflète mieux le niveau de vie moyen."),
q(18,"moyen","R&D","Les dépenses de recherche-développement (R&D) sont considérées comme :",
  ["une consommation immédiate sans effet","un investissement immatériel favorisant le progrès technique","un prélèvement obligatoire","une externalité négative"],1,
  "La R&D est un investissement immatériel qui alimente l'innovation et le progrès technique."),
q(19,"difficile","croissance-endogene","Dans les modèles de croissance endogène, l'accumulation de capital :",
  ["subit systématiquement des rendements décroissants qui stoppent la croissance","peut entretenir la croissance grâce aux externalités de connaissance","n'a aucun lien avec la croissance","fait toujours baisser la productivité"],1,
  "Les externalités de connaissance permettent d'échapper aux rendements décroissants et d'entretenir une croissance auto-entretenue."),
q(20,"moyen","destruction-creatrice","La destruction créatrice explique notamment :",
  ["l'absence de chômage","la disparition de certains emplois et l'apparition de nouveaux au fil des innovations","la stabilité totale des secteurs","la baisse continue de la productivité"],1,
  "Les innovations détruisent des emplois dans les secteurs dépassés et en créent dans les secteurs nouveaux : c'est la destruction créatrice."),
]

exos = [
e(1,"application","taux-variation","Le PIB en volume d'un pays passe de 1 800 à 1 854 milliards d'euros en un an. Calcule le taux de croissance.",
  ["Taux de variation = (arrivée − départ) / départ × 100.","(1 854 − 1 800) / 1 800 × 100 = 54 / 1 800 × 100.","54 / 1 800 = 0,03, soit 3 pour cent."],
  "3 pour cent."),
e(2,"decouverte","facteurs","Classe ces éléments en facteur travail ou facteur capital : (a) une usine, (b) les heures effectuées par les salariés, (c) un logiciel de production, (d) le nombre d'actifs employés.",
  ["Facteur capital = biens durables de production.","Facteur travail = quantité de main-d'œuvre mobilisée.","(a) capital, (b) travail, (c) capital, (d) travail."],
  "Capital : a, c ; Travail : b, d."),
e(3,"application","indice","La productivité horaire vaut 100 en base 2015 et atteint l'indice 112 quelques années plus tard. De combien a-t-elle augmenté en pourcentage ?",
  ["Un indice base 100 se lit directement en variation.","112 − 100 = 12.","La productivité a augmenté de 12 pour cent."],
  "12 pour cent."),
e(4,"application","productivite","Une entreprise produit 4 000 unités avec 2 000 heures de travail, puis 4 620 unités avec 2 100 heures. La productivité horaire a-t-elle progressé ?",
  ["Productivité horaire = production / heures.","Avant : 4 000 / 2 000 = 2 unités par heure. Après : 4 620 / 2 100 = 2,2 unités par heure.","2,2 > 2 : la productivité a progressé (de 10 pour cent)."],
  "Oui, elle passe de 2 à 2,2 unités/heure (+10 pour cent)."),
e(5,"approfondissement","PGF","Sur une période, la croissance annuelle du PIB est de 2,5 pour cent. La contribution du travail est de 0,5 point et celle du capital de 0,8 point. Quelle est la contribution de la PGF ?",
  ["La croissance se décompose en contributions du travail, du capital et de la PGF.","PGF = croissance totale − contribution travail − contribution capital.","2,5 − 0,5 − 0,8 = 1,2 point."],
  "1,2 point de pourcentage."),
e(6,"decouverte","schumpeter","Explique en une phrase ce qu'est la « destruction créatrice » et donne un exemple.",
  ["L'innovation détruit des activités anciennes et en crée de nouvelles.","Exemple : la photographie numérique a fait reculer la pellicule argentique tout en créant de nouveaux marchés."],
  "L'innovation remplace d'anciennes activités par de nouvelles (ex. numérique remplaçant l'argentique)."),
e(7,"application","PIB-habitant","Le PIB d'un pays est de 300 milliards d'euros pour 10 millions d'habitants. Calcule le PIB par habitant.",
  ["PIB par habitant = PIB / population.","300 milliards / 10 millions = 300 000 / 10 = 30 000.","Le PIB par habitant est de 30 000 euros."],
  "30 000 euros par habitant."),
e(8,"approfondissement","externalites","Pourquoi le marché seul tend-il à sous-financer la recherche fondamentale ? Cite un remède.",
  ["La connaissance produit des externalités positives : l'innovateur ne capte pas tout le bénéfice.","Les acteurs privés investissent donc moins que ce qui serait socialement optimal.","Remèdes : brevets, subventions publiques à la R&D, recherche publique."],
  "À cause des externalités positives ; remède : brevets ou subventions à la R&D."),
e(9,"application","taux-variation","Le PIB en volume recule de 1 040 à 1 019,2 milliards. Calcule le taux de variation et commente le signe.",
  ["(1 019,2 − 1 040) / 1 040 × 100.","−20,8 / 1 040 × 100 = −2 pour cent.","Le taux est négatif : c'est une récession (baisse du PIB)."],
  "−2 pour cent : récession."),
e(10,"approfondissement","croissance-endogene","En deux lignes, montre en quoi l'éducation peut être une source de croissance selon la croissance endogène.",
  ["L'éducation accroît le capital humain (compétences, savoir-faire).","Un capital humain plus élevé augmente la productivité et la capacité à innover, donc la croissance, avec des externalités pour toute la société."],
  "L'éducation augmente le capital humain, donc la productivité et l'innovation, sources de croissance."),
]

cartes = [
{"recto":"Comment mesure-t-on la croissance économique ?","verso":"Par le taux de variation du PIB en volume (corrigé de l'inflation)."},
{"recto":"Différence entre PIB en valeur et PIB en volume ?","verso":"En valeur : aux prix courants. En volume : à prix constants, il isole l'évolution des quantités."},
{"recto":"Quels sont les deux facteurs de production ?","verso":"Le facteur travail et le facteur capital."},
{"recto":"Croissance extensive vs intensive ?","verso":"Extensive : plus de facteurs. Intensive : gains de productivité (produire plus avec autant de facteurs)."},
{"recto":"Qu'est-ce que la PGF ?","verso":"La productivité globale des facteurs : la part de la croissance non expliquée par le travail et le capital (résidu de Solow), reflet du progrès technique."},
{"recto":"Qui a mis en évidence le « résidu » ?","verso":"Robert Solow."},
{"recto":"Qu'est-ce que la destruction créatrice ?","verso":"Processus décrit par Schumpeter : l'innovation détruit d'anciennes activités et en crée de nouvelles."},
{"recto":"Idée centrale de la croissance endogène ?","verso":"Le progrès technique est produit par l'économie elle-même : R&D, capital humain, capital public."},
{"recto":"Qu'est-ce que le capital humain ?","verso":"L'ensemble des compétences, connaissances et qualifications des travailleurs."},
{"recto":"Pourquoi la connaissance crée-t-elle des externalités positives ?","verso":"Une innovation profite à d'autres agents que son inventeur, d'où un risque de sous-investissement privé."},
{"recto":"Rôle des institutions dans la croissance ?","verso":"Droits de propriété et État de droit sécurisent l'investissement et l'innovation."},
{"recto":"Soutenabilité faible vs forte ?","verso":"Faible : le capital technique peut remplacer le capital naturel. Forte : certains capitaux naturels sont irremplaçables."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
