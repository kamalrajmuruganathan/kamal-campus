# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "engagement-politique"
cid = "tale-ses-engagement-politique"
titre = "L'engagement politique dans les sociétés démocratiques"
prereq = ["Notion de vote et de participation", "Lecture de pourcentages et de taux"]

fiche = """# L'engagement politique dans les sociétés démocratiques

> Pourquoi et comment les citoyens s'engagent-ils ? Ce chapitre analyse les formes de l'engagement politique, ses déterminants et ses transformations.

## 1. Les formes de l'engagement politique
L'**engagement politique** désigne l'ensemble des activités par lesquelles les individus cherchent à influencer la vie politique. Il prend des formes variées :
- le **vote** (participation électorale) ;
- le **militantisme** (dans un parti, un syndicat) ;
- l'**engagement associatif** ;
- la **consommation engagée** (boycott, achats militants) et les mobilisations diverses.

## 2. Le paradoxe de l'action collective
Mancur Olson met en évidence un **paradoxe de l'action collective** : un individu rationnel peut être tenté de ne pas s'engager tout en profitant des résultats obtenus par les autres, car les bénéfices d'une mobilisation sont souvent des **biens collectifs**. C'est le problème du **passager clandestin** (free rider). Pour surmonter ce paradoxe, les organisations offrent des **incitations sélectives** (avantages réservés aux membres) et jouent sur les **rétributions symboliques** (reconnaissance, identité, sociabilité).

## 3. Les déterminants de l'engagement
La probabilité de s'engager varie selon plusieurs variables :
- des variables **sociodémographiques** : diplôme, catégorie sociale, âge, genre ;
- l'effet de l'**âge** et de la **génération** (effet de cycle de vie et effet générationnel dans la participation) ;
- la **socialisation politique** (famille, école, groupes de pairs) qui transmet des dispositions à l'engagement.

## 4. Les transformations de l'engagement
L'engagement politique se transforme :
- développement de **nouveaux mouvements sociaux** portant des enjeux comme l'environnement, le genre, les discriminations, au-delà du seul conflit du travail ;
- essor de formes **protestataires** et non conventionnelles (pétitions, manifestations, mobilisations en ligne) ;
- montée de l'**abstention** et des engagements plus ponctuels et individualisés.
Ces évolutions ne signifient pas la fin de l'engagement mais son **renouvellement**.

## À retenir
- L'engagement politique va au-delà du vote : militantisme, associations, consommation engagée.
- Olson : paradoxe de l'action collective et problème du passager clandestin.
- Incitations sélectives et rétributions symboliques favorisent l'engagement.
- Déterminants : diplôme, catégorie sociale, âge, génération, socialisation politique.
- Nouveaux mouvements sociaux et formes protestataires renouvellent l'engagement.
"""

qs = [
q(1,"facile","engagement","L'engagement politique désigne :",
  ["le seul fait de voter","l'ensemble des activités par lesquelles on cherche à influencer la vie politique","le paiement des impôts","la lecture des journaux"],1,
  "L'engagement politique regroupe toutes les activités visant à influencer la vie politique, dont le vote n'est qu'une forme."),
q(2,"facile","formes","Parmi ces éléments, lequel est une forme d'engagement politique ?",
  ["Regarder la télévision par distraction","le militantisme dans une association ou un parti","dormir","faire ses courses sans intention politique"],1,
  "Le militantisme associatif ou partisan est une forme d'engagement politique."),
q(3,"moyen","consommation-engagee","La consommation engagée correspond à :",
  ["acheter au hasard","utiliser ses achats (boycott, achats militants) pour peser sur des enjeux","ne jamais consommer","payer ses impôts"],1,
  "La consommation engagée mobilise les choix d'achat (boycott, achats militants) à des fins politiques."),
q(4,"difficile","olson","Le paradoxe de l'action collective, formulé par Mancur Olson, souligne que :",
  ["tous les individus s'engagent toujours","un individu rationnel peut préférer ne pas s'engager tout en profitant des résultats obtenus","l'engagement est impossible","le vote est obligatoire"],1,
  "Olson montre qu'un individu rationnel peut être tenté de ne pas participer tout en bénéficiant du bien collectif obtenu."),
q(5,"difficile","passager-clandestin","Le « passager clandestin » (free rider) désigne l'individu qui :",
  ["s'engage plus que les autres","profite d'un bien collectif sans contribuer à son obtention","refuse tout bénéfice","paie pour les autres"],1,
  "Le passager clandestin bénéficie du résultat d'une mobilisation sans y avoir contribué."),
q(6,"difficile","incitations-selectives","Les incitations sélectives sont :",
  ["des avantages réservés aux membres qui s'engagent","des sanctions pour tous","des biens collectifs accessibles à tous","des impôts"],1,
  "Les incitations sélectives sont des avantages réservés aux participants, pour surmonter le passager clandestin."),
q(7,"moyen","retributions","Les rétributions symboliques de l'engagement renvoient :",
  ["à un salaire","à la reconnaissance, l'identité et la sociabilité tirées de la participation","à une taxe","à un bien matériel unique"],1,
  "Les rétributions symboliques sont les gratifications non matérielles : reconnaissance, sentiment d'utilité, liens sociaux."),
q(8,"moyen","diplome","Toutes choses égales par ailleurs, un diplôme plus élevé est généralement associé à :",
  ["une participation politique plus faible","une participation politique plus forte","aucune différence","l'interdiction de voter"],1,
  "Le niveau de diplôme est un déterminant : plus il est élevé, plus la participation politique tend à être forte."),
q(9,"moyen","socialisation-politique","La socialisation politique désigne :",
  ["l'apprentissage des dispositions et opinions politiques (famille, école, pairs)","le vote obligatoire","le paiement des cotisations","la publicité électorale"],1,
  "La socialisation politique est le processus par lequel on acquiert des dispositions et opinions politiques."),
q(10,"difficile","cycle-vie","L'effet de cycle de vie sur la participation politique signifie que :",
  ["la participation ne varie jamais avec l'âge","la participation évolue selon l'âge (par exemple plus faible chez les plus jeunes puis croissante)","seule la génération compte","les jeunes votent le plus"],1,
  "L'effet de cycle de vie renvoie à l'évolution de la participation avec l'âge de l'individu."),
q(11,"difficile","effet-generation","L'effet de génération désigne le fait que :",
  ["tous les âges se comportent pareil","des personnes d'une même génération partagent durablement des comportements liés à leur socialisation","l'âge n'a aucun rôle","le vote est aléatoire"],1,
  "L'effet de génération : une cohorte conserve des comportements marqués par le contexte de sa socialisation."),
q(12,"moyen","nouveaux-mouvements","Les nouveaux mouvements sociaux portent surtout des enjeux comme :",
  ["uniquement le salaire","l'environnement, le genre, les discriminations, au-delà du seul conflit du travail","la seule fiscalité des entreprises","aucun enjeu"],1,
  "Les nouveaux mouvements sociaux investissent des causes (environnement, genre, discriminations) au-delà du conflit du travail."),
q(13,"moyen","protestataire","Les formes protestataires (non conventionnelles) d'engagement incluent :",
  ["le seul vote","les pétitions, manifestations et mobilisations en ligne","le paiement de l'impôt","l'abstention passive"],1,
  "Les formes protestataires regroupent pétitions, manifestations, boycotts et mobilisations en ligne."),
q(14,"facile","abstention","L'abstention électorale correspond au fait :",
  ["de voter blanc uniquement","de ne pas participer au vote","de se présenter à une élection","de militer"],1,
  "L'abstention est le fait de ne pas prendre part au vote lors d'une élection."),
q(15,"moyen","vote","Le vote est une forme d'engagement dite :",
  ["protestataire","conventionnelle","clandestine","illégale"],1,
  "Le vote est la forme la plus institutionnelle et conventionnelle de participation politique."),
q(16,"moyen","bien-collectif","Un bien collectif obtenu par une mobilisation se caractérise par le fait que :",
  ["il ne profite qu'aux militants","ses bénéfices profitent à tous, y compris à ceux qui ne se sont pas engagés","il est payant pour chacun","il disparaît immédiatement"],1,
  "Un bien collectif profite à tous, ce qui rend possible le comportement de passager clandestin."),
q(17,"difficile","paradoxe-solution","Pour dépasser le paradoxe de l'action collective, une organisation peut :",
  ["supprimer tout avantage","offrir des incitations sélectives et des rétributions symboliques","interdire l'engagement","augmenter les impôts"],1,
  "Incitations sélectives et rétributions symboliques motivent l'engagement malgré le paradoxe d'Olson."),
q(18,"moyen","renouvellement","La montée de l'abstention et des engagements ponctuels signifie plutôt :",
  ["la disparition de tout engagement","un renouvellement des formes d'engagement","le retour au vote obligatoire","la fin des associations"],1,
  "Ces évolutions traduisent un renouvellement des formes d'engagement, non sa disparition."),
q(19,"moyen","variables","Parmi ces variables, laquelle influence la probabilité de s'engager politiquement ?",
  ["La pointure de chaussures","la catégorie socioprofessionnelle","la couleur des cheveux","le prénom"],1,
  "La catégorie socioprofessionnelle, comme le diplôme ou l'âge, influence la participation politique."),
q(20,"facile","militantisme","Le militantisme se distingue du simple vote car il suppose :",
  ["une participation ponctuelle et anonyme","un engagement actif et durable dans une organisation","l'absence d'organisation","le seul paiement d'un impôt"],1,
  "Le militantisme implique un engagement actif et régulier au sein d'une organisation (parti, syndicat, association)."),
]

exos = [
e(1,"decouverte","formes","Classe ces actions en engagement conventionnel ou protestataire : (a) voter, (b) signer une pétition, (c) manifester, (d) adhérer à un parti.",
  ["Conventionnel : formes institutionnelles (vote, adhésion à un parti).","Protestataire : pétition, manifestation.","Conventionnel : a, d ; protestataire : b, c."],
  "Conventionnel : a, d ; protestataire : b, c."),
e(2,"decouverte","olson","Explique le problème du passager clandestin en une phrase.",
  ["Les résultats d'une mobilisation sont souvent des biens collectifs profitant à tous.","Un individu peut donc bénéficier de ces résultats sans s'engager : c'est le passager clandestin."],
  "C'est bénéficier d'un bien collectif sans avoir contribué à la mobilisation."),
e(3,"application","abstention","À une élection, 12 millions de personnes se sont abstenues sur 40 millions d'inscrits. Calcule le taux d'abstention.",
  ["Taux d'abstention = abstentionnistes / inscrits × 100.","12 / 40 × 100 = 0,30 × 100.","= 30 pour cent."],
  "30 pour cent."),
e(4,"application","participation","Si le taux d'abstention est de 30 pour cent, quel est le taux de participation ?",
  ["Participation = 100 pour cent − abstention.","100 − 30 = 70.","Le taux de participation est de 70 pour cent."],
  "70 pour cent."),
e(5,"decouverte","incitations","Comment une organisation peut-elle inciter des individus à s'engager malgré le paradoxe d'Olson ? Cite deux moyens.",
  ["Incitations sélectives : avantages réservés aux membres actifs.","Rétributions symboliques : reconnaissance, identité, sociabilité tirées de l'engagement."],
  "Par des incitations sélectives et des rétributions symboliques."),
e(6,"application","evolution-abstention","Le taux d'abstention passe de 25 pour cent à 34 pour cent entre deux scrutins. Exprime la variation en points.",
  ["Variation entre deux pourcentages = différence en points.","34 − 25 = 9.","L'abstention augmente de 9 points de pourcentage."],
  "Hausse de 9 points de pourcentage."),
e(7,"approfondissement","determinants","Cite deux déterminants sociaux de l'engagement politique et explique brièvement leur effet.",
  ["Le diplôme : un niveau plus élevé s'accompagne souvent d'une participation plus forte.","La socialisation politique (famille, école) : elle transmet des dispositions favorables ou non à l'engagement."],
  "Ex. le diplôme et la socialisation politique, qui accroissent la propension à s'engager."),
e(8,"decouverte","nouveaux-mouvements","Donne deux enjeux typiquement portés par les nouveaux mouvements sociaux.",
  ["Ces mouvements dépassent le seul conflit du travail.","Par exemple l'environnement et l'égalité de genre, ou la lutte contre les discriminations."],
  "Par exemple l'environnement et l'égalité de genre."),
e(9,"application","calcul-part","Dans une association de 800 membres, 200 participent activement aux actions. Calcule la part de membres actifs.",
  ["Part = actifs / total × 100.","200 / 800 × 100 = 0,25 × 100.","= 25 pour cent."],
  "25 pour cent."),
e(10,"approfondissement","cycle-generation","Distingue en deux lignes l'effet de cycle de vie et l'effet de génération sur la participation politique.",
  ["Effet de cycle de vie : la participation varie selon l'âge de l'individu (ex. plus faible chez les jeunes, puis croissante).","Effet de génération : une cohorte garde durablement des comportements marqués par le contexte de sa socialisation, quel que soit son âge."],
  "Cycle de vie : effet de l'âge ; génération : marque durable du contexte de socialisation d'une cohorte."),
]

cartes = [
{"recto":"Qu'est-ce que l'engagement politique ?","verso":"L'ensemble des activités par lesquelles les individus cherchent à influencer la vie politique."},
{"recto":"Cite quatre formes d'engagement politique.","verso":"Le vote, le militantisme, l'engagement associatif et la consommation engagée."},
{"recto":"Qu'est-ce que le paradoxe de l'action collective (Olson) ?","verso":"Un individu rationnel peut préférer ne pas s'engager tout en profitant des résultats obtenus par les autres."},
{"recto":"Qui est le passager clandestin (free rider) ?","verso":"Celui qui bénéficie d'un bien collectif sans avoir contribué à la mobilisation."},
{"recto":"Que sont les incitations sélectives ?","verso":"Des avantages réservés aux membres qui s'engagent, pour surmonter le passager clandestin."},
{"recto":"Que sont les rétributions symboliques ?","verso":"Les gratifications non matérielles de l'engagement : reconnaissance, identité, sociabilité."},
{"recto":"Cite trois déterminants de l'engagement politique.","verso":"Par exemple le diplôme, la catégorie sociale et l'âge (ou la socialisation politique)."},
{"recto":"Qu'est-ce que la socialisation politique ?","verso":"L'apprentissage des dispositions et opinions politiques, via la famille, l'école et les pairs."},
{"recto":"Effet de cycle de vie vs effet de génération ?","verso":"Cycle de vie : la participation varie avec l'âge. Génération : une cohorte garde des comportements liés à sa socialisation."},
{"recto":"Qu'apportent les nouveaux mouvements sociaux ?","verso":"Ils portent des enjeux comme l'environnement, le genre ou les discriminations, au-delà du conflit du travail."},
{"recto":"Formes protestataires d'engagement ?","verso":"Pétitions, manifestations, boycotts, mobilisations en ligne (non conventionnelles)."},
{"recto":"La hausse de l'abstention signe-t-elle la fin de l'engagement ?","verso":"Non : elle traduit surtout un renouvellement et une individualisation des formes d'engagement."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
