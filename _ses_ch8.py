# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "ecole-et-inegalites"
cid = "tale-ses-ecole-et-inegalites"
titre = "L'école : démocratisation et inégalités"
prereq = ["Notion de capital culturel", "Lecture de pourcentages et de taux"]

fiche = """# L'école : démocratisation et inégalités

> L'école a-t-elle tenu sa promesse d'égalité des chances ? Ce chapitre analyse la massification scolaire, ses limites et les mécanismes des inégalités de réussite.

## 1. Massification et démocratisation
La **massification** scolaire désigne l'augmentation du nombre d'élèves et de l'accès aux différents niveaux (allongement des études, hausse du taux d'accès au baccalauréat, développement du supérieur).

Il faut la distinguer de la **démocratisation**, qui suppose une réduction des inégalités d'accès et de réussite selon l'origine sociale. On parle de **démocratisation quantitative** (plus d'élèves de toutes origines accèdent aux diplômes) et de **démocratisation qualitative** (réduction des écarts entre groupes). La massification n'entraîne pas automatiquement la démocratisation : les inégalités peuvent se déplacer vers des filières ou des diplômes plus valorisés (« démocratisation ségrégative »).

## 2. Les inégalités de réussite
Malgré la massification, la réussite scolaire reste corrélée à l'**origine sociale**. Plusieurs mécanismes l'expliquent :
- l'inégale dotation en **capital culturel** (Pierre Bourdieu) : la culture transmise par les familles favorisées est proche de celle valorisée par l'école ;
- les **stratégies éducatives** des familles et l'inégal accès à l'information sur les filières ;
- des effets liés au fonctionnement de l'école elle-même (attentes des enseignants, orientation).

## 3. Reproduction et méritocratie
Pour Bourdieu et Passeron, l'école tend à **reproduire** les inégalités tout en les légitimant par l'idéologie du **mérite** : les inégalités de réussite paraissent tenir aux « dons » ou aux efforts individuels, alors qu'elles dépendent largement de l'origine sociale. L'école affirme la **méritocratie** (récompenser le mérite) mais peut masquer des inégalités sociales.

## 4. Genre, politiques et enjeux
Les inégalités scolaires ont aussi une dimension de **genre** : les filles réussissent en moyenne bien à l'école mais s'orientent différemment, ce qui pèse sur les carrières. Des **politiques** visent à réduire les inégalités : éducation prioritaire, aides, ouverture sociale des filières sélectives. L'enjeu est de concilier massification et égalité réelle des chances.

## À retenir
- Massification (plus d'élèves) ≠ démocratisation (réduction des inégalités selon l'origine).
- La réussite reste corrélée à l'origine sociale ; rôle du capital culturel (Bourdieu).
- Bourdieu et Passeron : l'école reproduit et légitime les inégalités.
- Méritocratie : idéal qui peut masquer des inégalités sociales.
- Inégalités de genre : réussite féminine mais orientations différenciées.
"""

qs = [
q(1,"facile","massification","La massification scolaire désigne :",
  ["la baisse du nombre d'élèves","l'augmentation du nombre d'élèves et de l'accès aux différents niveaux d'études","la fin de l'école","la suppression du baccalauréat"],1,
  "La massification est la hausse des effectifs scolarisés et de l'accès aux niveaux supérieurs d'enseignement."),
q(2,"moyen","democratisation","La démocratisation scolaire suppose :",
  ["seulement plus d'élèves","une réduction des inégalités d'accès et de réussite selon l'origine sociale","la sélection par l'argent","la baisse du niveau"],1,
  "La démocratisation implique une réduction des inégalités selon l'origine sociale, au-delà du seul nombre d'élèves."),
q(3,"difficile","massification-democratisation","La massification n'entraîne pas automatiquement la démocratisation car :",
  ["le nombre d'élèves baisse","les inégalités peuvent se déplacer vers des filières ou diplômes plus valorisés","l'école a disparu","les diplômes n'existent plus"],1,
  "Les inégalités peuvent se reporter sur les filières ou diplômes les plus prestigieux : c'est la démocratisation ségrégative."),
q(4,"moyen","capital-culturel","Le capital culturel favorise la réussite scolaire car :",
  ["il n'a aucun lien avec l'école","la culture transmise par certaines familles est proche de celle valorisée par l'école","il remplace les diplômes","il concerne seulement l'argent"],1,
  "La culture des familles favorisées est proche des attentes scolaires, ce qui avantage leurs enfants (Bourdieu)."),
q(5,"difficile","reproduction","Pour Bourdieu et Passeron, l'école tend à :",
  ["supprimer toutes les inégalités","reproduire les inégalités sociales tout en les légitimant","ignorer l'origine sociale","favoriser uniquement les pauvres"],1,
  "Selon Bourdieu et Passeron, l'école reproduit les inégalités sociales et les légitime par le mérite."),
q(6,"moyen","meritocratie","La méritocratie désigne l'idée de :",
  ["distribuer les positions selon la naissance","récompenser les positions selon le mérite (efforts, résultats)","supprimer les diplômes","tirer au sort les élèves"],1,
  "La méritocratie prétend distribuer les positions selon le mérite individuel plutôt que l'origine."),
q(7,"difficile","legitimation","Selon l'analyse de la reproduction, l'idéologie du mérite peut :",
  ["révéler toutes les inégalités sociales","masquer des inégalités sociales en les faisant apparaître comme des différences de dons ou d'efforts","supprimer les inégalités","empêcher toute réussite"],1,
  "Le discours du mérite fait paraître les inégalités comme individuelles, masquant leur origine sociale."),
q(8,"moyen","correlation","Malgré la massification, la réussite scolaire reste :",
  ["indépendante de l'origine sociale","corrélée à l'origine sociale","identique pour tous","déterminée par le hasard"],1,
  "La réussite scolaire demeure fortement corrélée à l'origine sociale des élèves."),
q(9,"moyen","genre","Concernant le genre à l'école, on observe surtout que :",
  ["les filles échouent massivement","les filles réussissent en moyenne bien mais s'orientent différemment","le genre n'a aucun effet","les garçons ne sont jamais scolarisés"],1,
  "Les filles réussissent en moyenne bien à l'école mais leurs orientations diffèrent, ce qui pèse ensuite sur les carrières."),
q(10,"moyen","strategies","Les stratégies éducatives des familles renvoient :",
  ["à l'absence de choix","aux choix d'établissements, de filières et d'options pour favoriser la réussite des enfants","à la seule chance","aux impôts"],1,
  "Les stratégies éducatives sont les choix des familles (filières, options, établissements) inégalement maîtrisés selon l'origine."),
q(11,"facile","education-prioritaire","L'éducation prioritaire vise à :",
  ["sélectionner les meilleurs élèves","donner plus de moyens aux établissements de milieux défavorisés","supprimer les aides","augmenter les frais de scolarité"],1,
  "L'éducation prioritaire alloue davantage de moyens aux zones défavorisées pour réduire les inégalités."),
q(12,"difficile","democratisation-segregative","La « démocratisation ségrégative » désigne le fait que :",
  ["tous accèdent aux mêmes filières","l'accès s'élargit mais les inégalités se reportent sur les filières les plus valorisées","les inégalités disparaissent","l'école devient payante"],1,
  "L'accès aux études s'élargit, mais les inégalités se déplacent vers les filières et diplômes les plus prestigieux."),
q(13,"moyen","bourdieu","Le concept de capital culturel est associé à :",
  ["Émile Durkheim","Pierre Bourdieu","Adam Smith","Max Weber"],1,
  "Le capital culturel est un concept central de l'œuvre de Pierre Bourdieu."),
q(14,"facile","diplome-role","Dans les sociétés contemporaines, le diplôme :",
  ["n'a aucune valeur sur le marché du travail","joue un rôle important dans l'accès à l'emploi et aux positions sociales","est réservé aux riches uniquement","est interdit"],1,
  "Le diplôme conditionne largement l'accès à l'emploi et aux positions sociales."),
q(15,"moyen","orientation","L'orientation scolaire peut renforcer les inégalités lorsque :",
  ["elle est identique pour tous quelle que soit l'origine","les choix de filières varient selon l'origine sociale et l'information disponible","elle supprime les filières","elle ignore les résultats"],1,
  "Des choix d'orientation inégaux selon l'origine et l'information disponible peuvent renforcer les inégalités."),
q(16,"moyen","taux-acces","Le taux d'accès au baccalauréat d'une génération a fortement augmenté : cela illustre surtout :",
  ["la démocratisation qualitative","la massification scolaire","la fin des inégalités","la baisse des effectifs"],1,
  "La hausse du taux d'accès au bac illustre d'abord la massification (élargissement de l'accès)."),
q(17,"difficile","qualitative","La démocratisation qualitative correspond à :",
  ["l'augmentation du nombre d'élèves","la réduction des écarts de réussite entre groupes sociaux","la hausse des frais","la sélection accrue"],1,
  "La démocratisation qualitative désigne la réduction des écarts de réussite entre groupes sociaux."),
q(18,"moyen","attentes","Les attentes différenciées des enseignants selon les élèves peuvent :",
  ["n'avoir aucun effet","influencer les résultats et donc participer aux inégalités","supprimer les notes","garantir l'égalité"],1,
  "Des attentes différentes des enseignants peuvent influencer les résultats et alimenter les inégalités."),
q(19,"facile","objectif-politique","Une politique d'ouverture sociale des filières sélectives vise à :",
  ["réserver ces filières aux plus favorisés","élargir l'accès de ces filières à des élèves d'origines modestes","supprimer ces filières","augmenter la sélection"],1,
  "L'ouverture sociale cherche à diversifier l'origine sociale des élèves des filières sélectives."),
q(20,"moyen","enjeu","L'enjeu central du chapitre est de :",
  ["opposer école et emploi","concilier massification et égalité réelle des chances","supprimer les diplômes","réduire le nombre d'élèves"],1,
  "L'enjeu est de rendre la massification compatible avec une réelle égalité des chances."),
]

exos = [
e(1,"decouverte","distinction","Explique en une phrase la différence entre massification et démocratisation scolaires.",
  ["Massification : hausse du nombre d'élèves et de l'accès aux études.","Démocratisation : réduction des inégalités d'accès et de réussite selon l'origine sociale ; la première n'implique pas la seconde."],
  "Massification = plus d'élèves ; démocratisation = réduction des inégalités selon l'origine."),
e(2,"application","taux-acces","Le taux d'accès au baccalauréat d'une génération passe de 60 pour cent à 78 pour cent. Exprime la hausse en points de pourcentage.",
  ["Variation entre deux pourcentages = différence en points.","78 − 60 = 18.","Le taux augmente de 18 points de pourcentage."],
  "Hausse de 18 points de pourcentage."),
e(3,"application","comparaison-origine","Dans une filière, 30 pour cent des élèves sont enfants de cadres et 10 pour cent enfants d'ouvriers. Calcule le rapport entre les deux parts.",
  ["Rapport = 30 / 10.","= 3.","Les enfants de cadres sont proportionnellement trois fois plus présents que les enfants d'ouvriers."],
  "3 (trois fois plus)."),
e(4,"decouverte","capital-culturel","Explique en une phrase pourquoi le capital culturel familial avantage certains élèves.",
  ["La culture transmise par les familles favorisées (langage, pratiques, savoirs) est proche des attentes de l'école.","Ces élèves sont donc plus à l'aise avec les codes scolaires et réussissent plus souvent."],
  "Parce que la culture familiale favorisée est proche de celle valorisée par l'école."),
e(5,"application","evolution","La part d'une génération obtenant un diplôme du supérieur passe de l'indice 100 à l'indice 150. De combien a-t-elle augmenté ?",
  ["Un indice base 100 se lit directement.","150 − 100 = 50.","Elle a augmenté de 50 pour cent."],
  "50 pour cent."),
e(6,"approfondissement","meritocratie","Explique en deux lignes comment l'idéologie du mérite peut masquer des inégalités sociales.",
  ["Le mérite attribue la réussite ou l'échec aux efforts et aux dons individuels.","Cela occulte le poids de l'origine sociale (capital culturel, stratégies familiales), faisant paraître « justes » des inégalités socialement construites."],
  "Elle attribue la réussite au mérite individuel, occultant le poids de l'origine sociale."),
e(7,"decouverte"," segregative","Qu'appelle-t-on démocratisation ségrégative ?",
  ["L'accès aux études s'élargit à toutes les origines.","Mais les inégalités se déplacent vers les filières et diplômes les plus valorisés : c'est la démocratisation ségrégative."],
  "L'élargissement de l'accès avec report des inégalités sur les filières les plus valorisées."),
e(8,"application","genre","Les filles réussissent en moyenne aussi bien que les garçons, mais sont moins nombreuses dans certaines filières scientifiques sélectives. Quel type d'inégalité cela illustre-t-il ?",
  ["La réussite est comparable, mais l'orientation diffère selon le genre.","Il s'agit d'une inégalité d'orientation liée au genre, qui pèse ensuite sur les carrières."],
  "Une inégalité de genre dans l'orientation."),
e(9,"approfondissement","reproduction","Résume en deux lignes la thèse de Bourdieu et Passeron sur l'école.",
  ["L'école valorise le capital culturel des familles favorisées, ce qui avantage leurs enfants.","Elle reproduit ainsi les inégalités sociales tout en les légitimant par le mérite, les faisant apparaître comme naturelles."],
  "L'école reproduit les inégalités sociales et les légitime par le mérite."),
e(10,"approfondissement","politiques","Cite deux politiques visant à réduire les inégalités scolaires et leur objectif.",
  ["Éducation prioritaire : plus de moyens aux établissements défavorisés.","Ouverture sociale des filières sélectives et aides : diversifier l'origine sociale des élèves et lever les obstacles financiers.","Objectif : rapprocher massification et égalité réelle des chances."],
  "Ex. éducation prioritaire et ouverture sociale des filières, pour l'égalité des chances."),
]

cartes = [
{"recto":"Qu'est-ce que la massification scolaire ?","verso":"L'augmentation du nombre d'élèves et de l'accès aux différents niveaux d'études."},
{"recto":"Massification ou démocratisation : quelle différence ?","verso":"Massification = plus d'élèves ; démocratisation = réduction des inégalités selon l'origine sociale."},
{"recto":"Pourquoi la massification n'entraîne-t-elle pas forcément la démocratisation ?","verso":"Les inégalités peuvent se déplacer vers les filières et diplômes les plus valorisés (démocratisation ségrégative)."},
{"recto":"Pourquoi le capital culturel favorise-t-il la réussite ?","verso":"La culture des familles favorisées est proche de celle valorisée par l'école."},
{"recto":"Thèse de Bourdieu et Passeron sur l'école ?","verso":"L'école reproduit les inégalités sociales et les légitime par l'idéologie du mérite."},
{"recto":"Qu'est-ce que la méritocratie ?","verso":"L'idée de distribuer les positions selon le mérite individuel ; elle peut masquer des inégalités sociales."},
{"recto":"La réussite scolaire est-elle indépendante de l'origine sociale ?","verso":"Non : malgré la massification, elle reste fortement corrélée à l'origine sociale."},
{"recto":"Inégalités de genre à l'école ?","verso":"Les filles réussissent en moyenne bien mais s'orientent différemment, ce qui pèse sur les carrières."},
{"recto":"Que sont les stratégies éducatives des familles ?","verso":"Les choix d'établissements, filières et options, inégalement maîtrisés selon l'origine."},
{"recto":"But de l'éducation prioritaire ?","verso":"Donner davantage de moyens aux établissements de milieux défavorisés pour réduire les inégalités."},
{"recto":"Démocratisation quantitative vs qualitative ?","verso":"Quantitative : plus d'élèves accèdent aux diplômes. Qualitative : réduction des écarts de réussite entre groupes."},
{"recto":"Quel est l'enjeu central de l'école aujourd'hui ?","verso":"Concilier massification et égalité réelle des chances."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
