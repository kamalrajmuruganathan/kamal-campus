# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "commerce-mondialisation"
cid = "tale-ses-commerce-mondialisation"
titre = "Le commerce international et la mondialisation de la production"
prereq = ["Notion de spécialisation et d'échange", "Lecture de pourcentages et d'indices"]

fiche = """# Le commerce international et la mondialisation de la production

> Pourquoi les pays échangent-ils ? Qui gagne à l'ouverture ? Ce chapitre présente les fondements du commerce international et l'organisation mondiale de la production.

## 1. Les fondements de l'échange
David Ricardo montre, avec la théorie des **avantages comparatifs**, qu'un pays a intérêt à se spécialiser dans la production pour laquelle il dispose de l'avantage relatif le plus fort (ou du désavantage relatif le plus faible), même s'il est moins productif dans tous les domaines. L'échange devient alors mutuellement avantageux.

Les **dotations factorielles** (théorème HOS : Heckscher-Ohlin-Samuelson) complètent cette analyse : chaque pays exporte les biens qui utilisent intensivement le facteur dont il est le mieux doté (travail peu qualifié, capital, terres…).

## 2. Les nouvelles explications du commerce
Une grande partie du commerce est aujourd'hui **intra-branche** (échange de produits similaires, par exemple des voitures contre des voitures) et non inter-branche. On l'explique par :
- la **différenciation des produits** (variété recherchée par les consommateurs) ;
- les **économies d'échelle** (le coût unitaire baisse quand on produit en grande quantité) ;
- la **compétitivité prix** (jouer sur les coûts) et la **compétitivité hors prix** (qualité, innovation, image).

## 3. La mondialisation de la production
Les **firmes multinationales (FMN)** organisent une **division internationale du travail** en fragmentant leur production le long de **chaînes de valeur mondiales**. Chaque étape est localisée là où elle est la plus avantageuse. Cela passe par des **investissements directs à l'étranger (IDE)** et l'**externalisation**.

## 4. Gagnants, perdants et régulation
Le libre-échange accroît le bien-être global mais crée des **gagnants et des perdants** au sein de chaque pays : certains secteurs et travailleurs sont concurrencés. Cela peut justifier des **politiques protectionnistes** (droits de douane, quotas, normes) et des politiques de redistribution ou de formation. L'**Organisation mondiale du commerce (OMC)** vise à réguler et libéraliser les échanges. Le débat oppose les gains de l'ouverture (baisse des prix, choix, efficacité) à ses coûts (désindustrialisation locale, dépendance, inégalités).

## À retenir
- Ricardo : avantages comparatifs, gains mutuels à la spécialisation.
- HOS : les pays exportent selon leurs dotations factorielles.
- Commerce intra-branche : différenciation, économies d'échelle.
- FMN et chaînes de valeur mondiales fragmentent la production.
- Le libre-échange fait des gagnants et des perdants ; l'OMC régule les échanges.
"""

qs = [
q(1,"facile","ricardo","La théorie des avantages comparatifs est due à :",
  ["Adam Smith","David Ricardo","John Maynard Keynes","Milton Friedman"],1,
  "David Ricardo formule la théorie des avantages comparatifs au début du XIXe siècle."),
q(2,"moyen","avantage-comparatif","Selon Ricardo, un pays a intérêt à se spécialiser dans le bien pour lequel il a :",
  ["l'avantage absolu le plus faible","l'avantage relatif (comparatif) le plus fort","le coût le plus élevé","la population la plus nombreuse"],1,
  "Chaque pays se spécialise là où son avantage relatif est le plus grand (ou son désavantage le plus faible)."),
q(3,"difficile","avantage-comparatif","Un pays moins productif que ses partenaires dans tous les biens :",
  ["n'a jamais intérêt à échanger","a quand même intérêt à se spécialiser selon son avantage comparatif","doit rester en autarcie","doit produire tous les biens"],1,
  "Même sans aucun avantage absolu, un pays gagne à se spécialiser selon son avantage comparatif."),
q(4,"moyen","HOS","Le théorème HOS (Heckscher-Ohlin-Samuelson) explique la spécialisation par :",
  ["le hasard","les dotations factorielles des pays","la seule taille de la population","le taux d'inflation"],1,
  "Selon HOS, un pays exporte les biens utilisant intensivement le facteur dont il est abondamment doté."),
q(5,"moyen","intra-branche","Le commerce intra-branche désigne l'échange :",
  ["de produits totalement différents","de produits similaires entre pays (ex. voitures contre voitures)","uniquement de matières premières","sans aucune spécialisation"],1,
  "Le commerce intra-branche est l'échange de produits appartenant à la même branche, souvent différenciés."),
q(6,"moyen","economies-echelle","Les économies d'échelle correspondent à :",
  ["une hausse du coût unitaire quand la production augmente","une baisse du coût unitaire quand la production augmente","une baisse des ventes","une hausse des salaires"],1,
  "Avec les économies d'échelle, le coût moyen unitaire diminue à mesure que la quantité produite augmente."),
q(7,"facile","competitivite","La compétitivité hors prix repose notamment sur :",
  ["le seul prix bas","la qualité, l'innovation et l'image du produit","les droits de douane","le taux de change uniquement"],1,
  "La compétitivité hors prix joue sur des critères autres que le prix : qualité, innovation, marque, délais."),
q(8,"moyen","FMN","Une firme multinationale (FMN) est une entreprise qui :",
  ["ne produit que dans son pays d'origine","implante des unités de production dans plusieurs pays","ne fait que de l'import","n'emploie personne"],1,
  "Une FMN possède ou contrôle des unités de production dans au moins deux pays."),
q(9,"difficile","chaine-valeur","La fragmentation de la production le long des chaînes de valeur mondiales signifie que :",
  ["tout est produit dans un seul pays","les étapes de production sont réparties entre plusieurs pays selon leurs avantages","le commerce disparaît","les FMN cessent d'investir"],1,
  "Les chaînes de valeur mondiales répartissent chaque étape là où elle est la plus avantageuse."),
q(10,"moyen","IDE","Un investissement direct à l'étranger (IDE) consiste à :",
  ["acheter des obligations à court terme","prendre une participation durable dans une entreprise située à l'étranger","exporter un bien","importer une matière première"],1,
  "L'IDE est un investissement visant un contrôle durable d'une entreprise implantée à l'étranger."),
q(11,"moyen","gagnants-perdants","Le libre-échange, selon l'analyse économique, tend à :",
  ["ne faire que des gagnants","augmenter le bien-être global mais créer des perdants dans certains secteurs","appauvrir tous les pays","supprimer toute spécialisation"],1,
  "L'ouverture accroît le bien-être global mais concurrence certains secteurs et travailleurs : il y a des perdants."),
q(12,"facile","protectionnisme","Un droit de douane est :",
  ["une subvention aux importations","une taxe sur les produits importés","une baisse des prix intérieurs","une norme sanitaire"],1,
  "Le droit de douane est une taxe qui renchérit les produits importés pour protéger la production nationale."),
q(13,"facile","OMC","L'Organisation mondiale du commerce (OMC) a pour rôle principal de :",
  ["fixer les salaires mondiaux","réguler et favoriser la libéralisation des échanges","émettre la monnaie","gérer le chômage"],1,
  "L'OMC établit les règles du commerce international et arbitre les différends commerciaux."),
q(14,"moyen","protectionnisme","Le protectionnisme regroupe les mesures qui :",
  ["ouvrent totalement les frontières","limitent les importations pour protéger la production nationale","suppriment les impôts","interdisent les exportations uniquement"],1,
  "Le protectionnisme limite les importations (droits de douane, quotas, normes) pour protéger la production nationale."),
q(15,"difficile","competitivite-prix","La compétitivité prix d'un pays se dégrade si, toutes choses égales par ailleurs :",
  ["ses coûts de production baissent","sa monnaie s'apprécie fortement","ses prix baissent","ses gains de productivité augmentent"],1,
  "Une monnaie qui s'apprécie renchérit les produits exportés : la compétitivité prix se dégrade."),
q(16,"moyen","specialisation","La spécialisation internationale peut présenter le risque de :",
  ["diversifier totalement l'économie","rendre un pays très dépendant d'un secteur ou de partenaires","supprimer les échanges","augmenter l'autarcie"],1,
  "Une forte spécialisation peut créer une dépendance vis-à-vis d'un secteur ou de certains partenaires."),
q(17,"facile","balance-commerciale","La balance commerciale est excédentaire lorsque :",
  ["les importations dépassent les exportations","les exportations dépassent les importations","le PIB baisse","le chômage augmente"],1,
  "La balance commerciale est excédentaire quand les exportations de biens dépassent les importations."),
q(18,"moyen","differenciation","La différenciation des produits favorise le commerce intra-branche car :",
  ["les produits deviennent identiques","les consommateurs recherchent de la variété","les prix augmentent toujours","la production baisse"],1,
  "Les consommateurs veulent de la variété : ils achètent des produits différenciés d'origines diverses."),
q(19,"difficile","division-travail","La division internationale du travail contemporaine se caractérise surtout par :",
  ["une spécialisation par produits finis uniquement","une spécialisation par segments ou tâches au sein d'une même chaîne de production","la fin des échanges de services","l'absence de multinationales"],1,
  "Les pays se spécialisent désormais par tâches ou segments de production, et plus seulement par produits finis."),
q(20,"moyen","gains-echange","Un des gains du libre-échange pour les consommateurs est :",
  ["la hausse générale des prix","une plus grande variété de produits à des prix souvent plus bas","la réduction du choix","la disparition de la concurrence"],1,
  "L'ouverture élargit le choix des consommateurs et fait généralement baisser les prix grâce à la concurrence."),
]

exos = [
e(1,"application","balance","Un pays exporte pour 420 milliards et importe pour 390 milliards de biens. Calcule le solde de la balance commerciale et indique s'il est excédentaire.",
  ["Solde = exportations − importations.","420 − 390 = 30.","Le solde est de +30 milliards : la balance est excédentaire."],
  "+30 milliards, balance excédentaire."),
e(2,"decouverte","avantage-comparatif","Explique en une phrase pourquoi un pays plus performant dans tous les biens a quand même intérêt à échanger.",
  ["Il ne peut pas tout produire à la fois : son temps et ses facteurs sont limités.","En se concentrant sur son avantage comparatif le plus fort, il produit plus et échange le reste, ce qui profite aux deux pays."],
  "Il se spécialise selon son avantage comparatif et gagne à l'échange."),
e(3,"application","taux-couverture","Un pays exporte pour 250 et importe pour 200. Calcule le taux de couverture (exportations / importations × 100).",
  ["Taux de couverture = exportations / importations × 100.","250 / 200 × 100 = 1,25 × 100.","= 125 pour cent (supérieur à 100 : excédent)."],
  "125 pour cent."),
e(4,"decouverte","intra-branche","Un pays vend des voitures à l'étranger et en achète d'autres modèles. Comment nomme-t-on ce type d'échange ? Donne une cause.",
  ["Échange de produits d'une même branche = commerce intra-branche.","Cause : la différenciation des produits, les consommateurs recherchant la variété."],
  "Commerce intra-branche, dû à la différenciation des produits."),
e(5,"application","economies-echelle","Une entreprise produit 1 000 unités à un coût total de 50 000 euros, puis 5 000 unités à 200 000 euros. Le coût unitaire baisse-t-il ?",
  ["Coût unitaire = coût total / quantité.","1 000 unités : 50 000 / 1 000 = 50 euros. 5 000 unités : 200 000 / 5 000 = 40 euros.","40 < 50 : le coût unitaire baisse, il y a des économies d'échelle."],
  "Oui, il passe de 50 à 40 euros : économies d'échelle."),
e(6,"approfondissement","gagnants-perdants","Cite un gagnant et un perdant possibles, à l'intérieur d'un pays, de l'ouverture au commerce.",
  ["Gagnant : les consommateurs (prix plus bas) et les secteurs exportateurs compétitifs.","Perdant : les travailleurs d'un secteur concurrencé par les importations, qui peut se réduire."],
  "Gagnant : consommateurs/exportateurs ; perdant : secteur concurrencé par les importations."),
e(7,"application","competitivite","La monnaie d'un pays s'apprécie de 10 pour cent. Un produit exporté valait 100 en monnaie étrangère. Approximativement, son prix pour l'acheteur étranger devient-il plus ou moins élevé ?",
  ["Une appréciation renchérit les produits exportés pour l'étranger.","Le produit coûte environ 110 en monnaie étrangère.","Plus élevé : la compétitivité prix se dégrade."],
  "Plus élevé (environ 110) : compétitivité prix dégradée."),
e(8,"approfondissement","protectionnisme","Donne un argument pour et un argument contre l'instauration d'un droit de douane sur un produit importé.",
  ["Pour : protéger un secteur ou des emplois nationaux menacés, le temps qu'il se modernise.","Contre : renchérir les prix pour les consommateurs et risque de mesures de rétorsion des partenaires."],
  "Pour : protéger emplois/secteur ; contre : hausse des prix et risque de rétorsion."),
e(9,"application","part-marche","Les exportations mondiales valent 20 000 milliards, celles d'un pays 1 000 milliards. Calcule sa part de marché mondiale en pourcentage.",
  ["Part de marché = exportations du pays / exportations mondiales × 100.","1 000 / 20 000 × 100 = 0,05 × 100.","= 5 pour cent."],
  "5 pour cent."),
e(10,"approfondissement","chaine-valeur","Explique en deux lignes ce qu'est une chaîne de valeur mondiale à partir de l'exemple d'un smartphone.",
  ["La production est fragmentée : conception dans un pays, composants dans d'autres, assemblage ailleurs.","Chaque étape est localisée là où elle est la plus avantageuse ; le produit final résulte de cette division internationale du travail."],
  "La production d'un smartphone est répartie entre plusieurs pays selon leurs avantages (conception, composants, assemblage)."),
]

cartes = [
{"recto":"Qui a formulé la théorie des avantages comparatifs ?","verso":"David Ricardo."},
{"recto":"Principe de l'avantage comparatif ?","verso":"Chaque pays se spécialise dans la production où son avantage relatif est le plus fort ; l'échange profite alors aux deux."},
{"recto":"Qu'explique le théorème HOS ?","verso":"Un pays exporte les biens utilisant intensivement le facteur dont il est le mieux doté (dotations factorielles)."},
{"recto":"Qu'est-ce que le commerce intra-branche ?","verso":"L'échange de produits similaires d'une même branche entre pays (ex. voitures contre voitures)."},
{"recto":"Que sont les économies d'échelle ?","verso":"La baisse du coût unitaire lorsque la quantité produite augmente."},
{"recto":"Compétitivité prix vs hors prix ?","verso":"Prix : jouer sur les coûts. Hors prix : qualité, innovation, image, délais."},
{"recto":"Qu'est-ce qu'une firme multinationale ?","verso":"Une entreprise qui contrôle des unités de production dans au moins deux pays."},
{"recto":"Qu'est-ce qu'une chaîne de valeur mondiale ?","verso":"La fragmentation de la production entre plusieurs pays, chaque étape localisée là où elle est la plus avantageuse."},
{"recto":"Qu'est-ce qu'un IDE ?","verso":"Un investissement direct à l'étranger : prise de participation durable dans une entreprise située à l'étranger."},
{"recto":"Le libre-échange fait-il uniquement des gagnants ?","verso":"Non : il accroît le bien-être global mais crée des perdants (secteurs et travailleurs concurrencés)."},
{"recto":"Qu'est-ce qu'un droit de douane ?","verso":"Une taxe sur les produits importés, mesure protectionniste."},
{"recto":"Quel est le rôle de l'OMC ?","verso":"Réguler le commerce international, favoriser la libéralisation des échanges et arbitrer les différends."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
