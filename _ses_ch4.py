# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "politiques-economiques"
cid = "tale-ses-politiques-economiques"
titre = "Les politiques économiques (conjoncturelles et structurelles)"
prereq = ["Notion de demande globale", "Distinction déficit et dette publics"]

fiche = """# Les politiques économiques (conjoncturelles et structurelles)

> Comment l'État et la banque centrale agissent-ils sur l'économie ? Ce chapitre distingue les politiques de court terme (conjoncturelles) et de long terme (structurelles).

## 1. Objectifs et « carré magique »
Les politiques économiques poursuivent plusieurs objectifs, résumés par le **carré magique** de Nicholas Kaldor : croissance forte, plein emploi, stabilité des prix, équilibre extérieur. Ces objectifs peuvent entrer en **conflit** (par exemple relancer l'activité peut raviver l'inflation).

## 2. La politique conjoncturelle
Elle vise à agir à court terme sur la **demande globale** pour lisser les fluctuations. Elle comprend :
- la **politique budgétaire** : l'État module ses **dépenses** et ses **prélèvements**. Une politique de **relance** (hausse des dépenses ou baisse des impôts) soutient la demande, souvent au prix d'un **déficit** et d'une hausse de la **dette**. Une politique de **rigueur** freine la demande pour limiter déficit et inflation. Keynes met en avant l'effet **multiplicateur** : une dépense publique génère un surcroît d'activité supérieur à la dépense initiale ;
- la **politique monétaire** : la **banque centrale** agit sur les **taux d'intérêt** et la **quantité de monnaie**. Baisser les taux stimule le crédit et la demande ; les relever freine l'inflation.

## 3. La politique structurelle
Elle agit à long terme sur les **structures** de l'économie pour améliorer sa croissance potentielle et son fonctionnement : politique de la **concurrence**, d'**innovation** et de recherche, de **formation** et d'emploi, d'**environnement**, politique **industrielle**. Elle ne cherche pas à corriger la conjoncture mais à renforcer les capacités productives.

## 4. Contraintes et débats
Les politiques économiques rencontrent des **contraintes** : niveau de la dette, règles européennes, ouverture (une relance peut « fuir » vers les importations), risque d'inflation, anticipations des agents. En union monétaire, la **politique monétaire est commune** tandis que les politiques budgétaires restent largement nationales, ce qui pose la question de leur **coordination**. Le débat oppose les partisans d'une intervention active (inspiration keynésienne) et ceux qui privilégient la stabilité et les réformes de l'offre.

## À retenir
- Carré magique (Kaldor) : croissance, plein emploi, stabilité des prix, équilibre extérieur.
- Conjoncturel = court terme sur la demande ; structurel = long terme sur les structures.
- Politique budgétaire : dépenses et prélèvements ; effet multiplicateur (Keynes).
- Politique monétaire : taux d'intérêt et quantité de monnaie (banque centrale).
- Contraintes : dette, ouverture, règles communes, coordination en union monétaire.
"""

qs = [
q(1,"facile","carre-magique","Le « carré magique » de Kaldor regroupe quatre objectifs : croissance, plein emploi, stabilité des prix et :",
  ["hausse des impôts","équilibre extérieur","déficit public","inflation forte"],1,
  "Le carré magique associe croissance, plein emploi, stabilité des prix et équilibre extérieur (échanges)."),
q(2,"facile","conjoncturel","Une politique conjoncturelle vise à agir :",
  ["sur les structures à long terme","à court terme sur la demande globale","uniquement sur la démographie","sur le climat"],1,
  "La politique conjoncturelle agit à court terme sur la demande pour lisser les fluctuations."),
q(3,"moyen","budgetaire","La politique budgétaire repose sur :",
  ["les taux d'intérêt de la banque centrale","les dépenses publiques et les prélèvements obligatoires","le taux de change fixé par les marchés","le salaire minimum"],1,
  "La politique budgétaire module les dépenses publiques et les prélèvements (impôts, cotisations)."),
q(4,"moyen","relance","Une politique de relance budgétaire consiste notamment à :",
  ["augmenter les impôts et baisser les dépenses","augmenter les dépenses publiques ou baisser les impôts","relever les taux d'intérêt","réduire la masse monétaire"],1,
  "La relance soutient la demande en augmentant les dépenses publiques ou en baissant les prélèvements."),
q(5,"difficile","multiplicateur","L'effet multiplicateur keynésien signifie qu'une dépense publique :",
  ["réduit toujours l'activité","engendre un surcroît d'activité supérieur à la dépense initiale","n'a aucun effet","fait baisser le PIB"],1,
  "La dépense initiale se diffuse en revenus et consommations successifs : l'effet sur le PIB dépasse la dépense de départ."),
q(6,"moyen","monetaire","La politique monétaire est conduite par :",
  ["le Parlement","la banque centrale","les entreprises","les syndicats"],1,
  "La politique monétaire relève de la banque centrale, qui agit sur les taux et la quantité de monnaie."),
q(7,"moyen","taux-interet","Pour stimuler l'activité, la banque centrale peut :",
  ["augmenter fortement les taux d'intérêt","baisser les taux d'intérêt pour favoriser le crédit","supprimer la monnaie","interdire les prêts"],1,
  "Des taux plus bas rendent le crédit moins cher, ce qui soutient l'investissement et la consommation."),
q(8,"difficile","inflation","Pour freiner une inflation trop forte, une banque centrale a tendance à :",
  ["baisser les taux d'intérêt","relever les taux d'intérêt","distribuer de la monnaie","supprimer les impôts"],1,
  "Relever les taux renchérit le crédit, freine la demande et donc les tensions inflationnistes."),
q(9,"moyen","structurel","Une politique structurelle vise à :",
  ["corriger les fluctuations de court terme","améliorer à long terme le fonctionnement et le potentiel de l'économie","fixer le taux de change chaque jour","équilibrer le budget en un an"],1,
  "La politique structurelle agit à long terme sur les structures : concurrence, innovation, formation, industrie."),
q(10,"facile","exemples-structurel","Parmi ces mesures, laquelle est structurelle ?",
  ["Une relance budgétaire ponctuelle","Une réforme de la formation professionnelle","Une baisse temporaire de la TVA","Une hausse conjoncturelle des dépenses"],1,
  "Une réforme de la formation agit durablement sur les structures : c'est une politique structurelle."),
q(11,"moyen","deficit","Le déficit public correspond :",
  ["au stock total des emprunts de l'État","au fait que les dépenses publiques dépassent les recettes sur une année","à un excédent budgétaire","au PIB"],1,
  "Le déficit est un flux annuel : dépenses supérieures aux recettes. La dette en est le cumul."),
q(12,"moyen","dette","La dette publique est :",
  ["un flux annuel","le stock accumulé des déficits passés financés par emprunt","toujours nulle","le PIB par habitant"],1,
  "La dette publique est le stock cumulé des emprunts, résultat des déficits successifs."),
q(13,"difficile","contrainte-exterieure","Une relance budgétaire dans une économie très ouverte peut être limitée car :",
  ["elle profite uniquement à la production nationale","une partie de la demande supplémentaire se porte sur les importations","elle réduit toujours le déficit","elle fait baisser les prix"],1,
  "Dans une économie ouverte, une part de la relance « fuit » vers les importations, réduisant l'effet intérieur."),
q(14,"moyen","rigueur","Une politique de rigueur (ou d'austérité) budgétaire vise surtout à :",
  ["augmenter le déficit","réduire le déficit et freiner l'inflation en limitant la demande","distribuer plus de subventions","baisser les impôts massivement"],1,
  "La rigueur réduit dépenses ou augmente impôts pour limiter déficit et inflation, en freinant la demande."),
q(15,"difficile","union-monetaire","Dans une union monétaire comme la zone euro :",
  ["chaque pays a sa propre monnaie","la politique monétaire est commune mais les politiques budgétaires restent largement nationales","il n'y a plus de politique budgétaire","la banque centrale fixe les impôts"],1,
  "La monnaie et la politique monétaire sont communes, mais chaque État conserve sa politique budgétaire, d'où un enjeu de coordination."),
q(16,"facile","banque-centrale","La stabilité des prix est un objectif prioritaire assigné à :",
  ["la banque centrale","le ministère de la Culture","les entreprises privées","les ménages"],1,
  "La banque centrale a généralement pour mandat prioritaire la stabilité des prix."),
q(17,"moyen","politique-offre","Les politiques dites « de l'offre » cherchent surtout à :",
  ["soutenir directement la demande des ménages","améliorer les conditions de production des entreprises (coûts, innovation)","augmenter les allocations","relever les taux d'intérêt"],1,
  "Les politiques de l'offre visent la compétitivité et les capacités de production (coûts, innovation, formation)."),
q(18,"moyen","conflit-objectifs","Un conflit d'objectifs classique en politique économique oppose :",
  ["croissance et éducation","lutte contre l'inflation et soutien de l'emploi à court terme","impôts et dépenses identiques","import et export identiques"],1,
  "Freiner l'inflation peut peser sur l'activité et l'emploi à court terme : les objectifs peuvent s'opposer."),
q(19,"difficile","stabilisateurs","Les stabilisateurs automatiques (impôts, allocations) :",
  ["aggravent toujours les crises","atténuent spontanément les fluctuations sans décision nouvelle","n'existent pas","fixent le taux de change"],1,
  "En récession, les recettes fiscales baissent et les allocations augmentent automatiquement, soutenant la demande."),
q(20,"moyen","coordination","La coordination des politiques économiques est nécessaire en union monétaire car :",
  ["chaque pays émet sa propre monnaie","une politique nationale a des effets sur les partenaires partageant la même monnaie","la politique monétaire est nationale","il n'y a pas d'échanges"],1,
  "Avec une monnaie commune, les décisions budgétaires nationales affectent les partenaires, d'où le besoin de coordination."),
]

exos = [
e(1,"decouverte","classer","Classe ces mesures en conjoncturelle ou structurelle : (a) plan de relance ponctuel, (b) réforme du système de formation, (c) baisse temporaire d'impôt, (d) politique d'innovation de long terme.",
  ["Conjoncturel = court terme sur la demande ; structurel = long terme sur les structures.","(a) et (c) agissent sur la demande à court terme.","(b) et (d) agissent durablement sur les structures.","Conjoncturelles : a, c ; structurelles : b, d."],
  "Conjoncturelles : a, c ; structurelles : b, d."),
e(2,"application","multiplicateur","L'État dépense 10 milliards. Avec un multiplicateur de 1,5, quel est l'effet total attendu sur le PIB ?",
  ["Effet total = dépense initiale × multiplicateur.","10 × 1,5 = 15.","L'effet attendu sur le PIB est de 15 milliards."],
  "15 milliards."),
e(3,"application","deficit","Un État a des recettes de 480 milliards et des dépenses de 520 milliards. Calcule le solde public et précise s'il s'agit d'un déficit.",
  ["Solde = recettes − dépenses.","480 − 520 = −40.","Le solde est de −40 milliards : c'est un déficit."],
  "−40 milliards : déficit."),
e(4,"application","dette-PIB","La dette publique s'élève à 2 500 milliards et le PIB à 2 500 milliards également. Calcule le ratio dette / PIB en pourcentage.",
  ["Ratio = dette / PIB × 100.","2 500 / 2 500 × 100 = 1 × 100.","= 100 pour cent."],
  "100 pour cent."),
e(5,"decouverte","monetaire","La banque centrale veut freiner l'inflation. Doit-elle relever ou baisser ses taux directeurs ? Justifie.",
  ["Pour freiner l'inflation, il faut réduire la demande.","Relever les taux renchérit le crédit, freine consommation et investissement, donc l'inflation.","Elle doit relever ses taux."],
  "Relever les taux directeurs."),
e(6,"application","point-pib","Un déficit passe de 3 pour cent à 4,5 pour cent du PIB. Exprime cette variation en points de PIB.",
  ["Variation entre deux ratios = différence en points.","4,5 − 3 = 1,5.","Le déficit augmente de 1,5 point de PIB."],
  "Hausse de 1,5 point de PIB."),
e(7,"approfondissement","contrainte-exterieure","Explique en deux lignes pourquoi une relance budgétaire peut être moins efficace dans une économie très ouverte.",
  ["Une part de la demande supplémentaire s'oriente vers des produits importés.","Cette « fuite » vers les importations réduit l'effet de la relance sur la production et l'emploi nationaux, tout en creusant le déficit extérieur."],
  "Parce qu'une partie de la relance se porte sur les importations et « fuit » à l'étranger."),
e(8,"approfondissement","stabilisateurs","En récession, comment les stabilisateurs automatiques soutiennent-ils la demande sans décision nouvelle ?",
  ["Quand l'activité ralentit, les recettes fiscales baissent (moins d'impôts prélevés).","Les dépenses sociales (allocations chômage) augmentent automatiquement.","Ce soutien du revenu limite la chute de la demande, sans mesure discrétionnaire."],
  "Les impôts baissent et les allocations augmentent automatiquement, soutenant le revenu."),
e(9,"decouverte","carre-magique","Cite les quatre sommets du carré magique de Kaldor.",
  ["Le carré magique résume les objectifs des politiques économiques.","Croissance forte, plein emploi, stabilité des prix, équilibre extérieur."],
  "Croissance, plein emploi, stabilité des prix, équilibre extérieur."),
e(10,"approfondissement","conflit","Un gouvernement relance l'activité et voit l'inflation monter. Nomme le conflit d'objectifs illustré.",
  ["Soutenir la demande favorise l'emploi mais peut créer des tensions sur les prix.","Il y a un conflit entre l'objectif de plein emploi/croissance et celui de stabilité des prix."],
  "Conflit entre soutien de l'activité (emploi) et stabilité des prix."),
]

cartes = [
{"recto":"Quels sont les quatre objectifs du carré magique ?","verso":"Croissance, plein emploi, stabilité des prix, équilibre extérieur (Kaldor)."},
{"recto":"Politique conjoncturelle vs structurelle ?","verso":"Conjoncturelle : court terme sur la demande. Structurelle : long terme sur les structures de l'économie."},
{"recto":"En quoi consiste la politique budgétaire ?","verso":"L'État module ses dépenses publiques et ses prélèvements obligatoires."},
{"recto":"Qu'est-ce que l'effet multiplicateur (Keynes) ?","verso":"Une dépense publique engendre un surcroît d'activité supérieur à la dépense initiale."},
{"recto":"Qui conduit la politique monétaire ?","verso":"La banque centrale, via les taux d'intérêt et la quantité de monnaie."},
{"recto":"Comment freiner l'inflation par la politique monétaire ?","verso":"En relevant les taux d'intérêt pour renchérir le crédit et freiner la demande."},
{"recto":"Différence entre déficit et dette publics ?","verso":"Le déficit est un flux annuel (dépenses > recettes) ; la dette est le stock cumulé des déficits."},
{"recto":"Donne un exemple de politique structurelle.","verso":"Politique de concurrence, d'innovation, de formation, industrielle ou environnementale."},
{"recto":"Que sont les stabilisateurs automatiques ?","verso":"Des mécanismes (impôts, allocations) qui atténuent spontanément les fluctuations sans nouvelle décision."},
{"recto":"Pourquoi une relance est-elle limitée en économie ouverte ?","verso":"Une partie de la demande supplémentaire part vers les importations (fuite)."},
{"recto":"Particularité des politiques en union monétaire ?","verso":"Politique monétaire commune, politiques budgétaires nationales : d'où un besoin de coordination."},
{"recto":"Qu'est-ce qu'un conflit d'objectifs ?","verso":"Situation où deux objectifs s'opposent, par exemple lutter contre l'inflation et soutenir l'emploi à court terme."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
