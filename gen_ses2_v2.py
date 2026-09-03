# -*- coding: utf-8 -*-
"""Generateur du contenu SES - niveau seconde - Kamal Campus (6 chapitres)."""
import json, os

BASE = "/tmp/kamal-campus/contenu/seconde/ses"
PROG = "Programme de SES — seconde"

def q(id, diff, notion, enonce, choix, rep, expl):
    return {"id": id, "difficulte": diff, "notion": notion, "enonce": enonce,
            "choix": choix, "reponse": rep, "explication": expl}

def ex(id, diff, notion, enonce, corrige, reponse):
    return {"id": id, "difficulte": diff, "notion": notion, "enonce": enonce,
            "corrige": corrige, "reponse": reponse}

def c(recto, verso):
    return {"recto": recto, "verso": verso}

def write_chapter(slug, cid, titre, prereq, fiche_body, questions, exos, cartes):
    d = os.path.join(BASE, slug)
    os.makedirs(d, exist_ok=True)
    # fiche.md
    front = (
        "---\n"
        f"id: {cid}\n"
        f'titre: "{titre}"\n'
        "voie: generale\n"
        "niveau: seconde\n"
        "parcours: ses\n"
        "matiere: ses\n"
        f'programme: "{PROG}"\n'
        "duree_lecture_min: 13\n"
        "prerequis:\n"
        + "".join(f"  - {p}\n" for p in prereq) +
        "statut: brouillon\n"
        "relu_par: null\n"
        "---\n\n"
    )
    with open(os.path.join(d, "fiche.md"), "w", encoding="utf-8") as f:
        f.write(front + fiche_body.strip() + "\n")
    # qcm
    assert len(questions) == 20, f"{slug}: {len(questions)} questions"
    qcm = {"id": f"{cid}-qcm", "chapitre": cid, "titre": f"QCM — {titre}",
           "voie": "generale", "niveau": "seconde", "parcours": "ses", "matiere": "ses",
           "statut": "brouillon", "relu_par": None,
           "consigne": "Une seule réponse correcte par question.", "questions": questions}
    with open(os.path.join(d, "qcm.json"), "w", encoding="utf-8") as f:
        json.dump(qcm, f, ensure_ascii=False, indent=2)
    # exercices
    assert len(exos) == 10, f"{slug}: {len(exos)} exos"
    exo = {"id": f"{cid}-exos", "chapitre": cid, "titre": f"Exercices — {titre}",
           "voie": "generale", "niveau": "seconde", "parcours": "ses", "matiere": "ses",
           "statut": "brouillon", "relu_par": None,
           "consigne": "Cherche chaque exercice au brouillon avant d'ouvrir le corrigé.",
           "exercices": exos}
    with open(os.path.join(d, "exercice.json"), "w", encoding="utf-8") as f:
        json.dump(exo, f, ensure_ascii=False, indent=2)
    # flashcards
    assert len(cartes) == 12, f"{slug}: {len(cartes)} cartes"
    fc = {"id": f"{cid}-cartes", "chapitre": cid, "titre": f"Cartes — {titre}",
          "voie": "generale", "niveau": "seconde", "parcours": "ses", "matiere": "ses",
          "statut": "brouillon", "relu_par": None, "cartes": cartes}
    with open(os.path.join(d, "flashcards.json"), "w", encoding="utf-8") as f:
        json.dump(fc, f, ensure_ascii=False, indent=2)
    print("OK", slug)


# =====================================================================
# CHAPITRE 1 : production-richesses
# =====================================================================
cid1 = "2nde-ses-production-richesses"
fiche1 = r"""
# Comment crée-t-on des richesses ? (production, valeur ajoutée)

> Une entreprise de meubles achète du bois, y ajoute du travail et des machines, puis vend une table plus chère que le bois de départ. Cette « richesse ajoutée » est au cœur de l'activité économique.

## 1. Qu'est-ce que produire ?
La **production** est l'activité qui consiste à créer des biens et des services destinés à satisfaire des besoins, en combinant des **facteurs de production**. Un **bien** est matériel et stockable (une chaise, un ordinateur) ; un **service** est immatériel et généralement consommé au moment où il est réalisé (une coupe de cheveux, un cours).

On distingue :
- la **production marchande** : biens et services vendus sur un marché à un prix qui couvre au moins les coûts de production (une baguette, un billet de train) ;
- la **production non marchande** : services fournis gratuitement ou à un prix inférieur à la moitié de leur coût de production (l'école publique, la justice), financés surtout par l'impôt et assurés par les administrations publiques ou les associations.

Le travail bénévole ou le travail domestique (cuisiner chez soi) ne sont pas comptés dans la production au sens de la comptabilité nationale.

## 2. Les facteurs de production
Pour produire, on combine deux facteurs principaux :

| Facteur | Définition | Exemple |
|---|---|---|
| Travail | Activité humaine mobilisée pour produire | Les heures de travail des salariés |
| Capital fixe | Biens durables utilisés plusieurs fois pour produire | Machines, bâtiments, ordinateurs |

On ajoute les **consommations intermédiaires** : les biens et services entièrement détruits ou transformés au cours de la production (matières premières, électricité). Elles ne sont pas un facteur durable : elles disparaissent dans le processus.

Le **progrès technique** et l'organisation du travail permettent d'augmenter la **productivité**, c'est-à-dire la quantité produite pour une quantité donnée de facteurs.

## 3. La valeur ajoutée
La richesse réellement créée par un producteur n'est pas son chiffre d'affaires, mais sa **valeur ajoutée** :

**Valeur ajoutée = valeur de la production − consommations intermédiaires.**

Exemple : une boulangerie vend pour 300 000 euros de pain sur l'année et a acheté pour 110 000 euros de farine, d'électricité et d'autres consommations intermédiaires. Sa valeur ajoutée est de 300 000 − 110 000 = 190 000 euros. C'est cette somme qui sert ensuite à rémunérer les salariés, l'État (impôts), les prêteurs et l'entreprise elle-même.

## 4. Qui produit ?
Plusieurs types d'organisations produisent :
- les **entreprises** (production marchande, but lucratif) ;
- les **administrations publiques** (production non marchande : éducation, sécurité) ;
- les **associations** et organisations à but non lucratif ;
- les **ménages**, quand ils produisent pour le marché (un artisan) ou pour eux-mêmes (autoconsommation agricole).

## À retenir
- Produire, c'est créer des biens et services en combinant travail et capital.
- Production marchande (vendue à un prix couvrant les coûts) ≠ production non marchande (gratuite ou quasi gratuite).
- Valeur ajoutée = production − consommations intermédiaires : c'est la richesse réellement créée.
- Les consommations intermédiaires sont détruites dans la production ; le capital fixe sert plusieurs fois.
- Le travail domestique et le bénévolat ne sont pas comptés dans la production.
"""
q1 = [
 q(1,"facile","production","Produire, c'est :",
   ["Consommer des biens et des services","Créer des biens et des services en combinant des facteurs de production","Épargner une partie de son revenu","Échanger de la monnaie contre des devises"],1,
   "La production consiste à créer des biens et services pour satisfaire des besoins, en combinant des facteurs de production."),
 q(2,"facile","bien-service","Lequel de ces éléments est un service ?",
   ["Une paire de chaussures","Un ordinateur portable","Une consultation chez le médecin","Une bouteille d'eau"],2,
   "Un service est immatériel : la consultation médicale est un service ; les trois autres sont des biens matériels."),
 q(3,"facile","marchand","Une production marchande est une production :",
   ["Fournie gratuitement par l'État","Vendue sur un marché à un prix couvrant au moins les coûts","Réservée à l'autoconsommation","Réalisée uniquement par des associations"],1,
   "La production marchande est vendue sur un marché à un prix qui couvre au moins les coûts de production."),
 q(4,"facile","non-marchand","L'enseignement public gratuit relève de la production :",
   ["Marchande","Non marchande","Domestique","Illégale"],1,
   "L'école publique est un service non marchand : fourni gratuitement ou quasi gratuitement, financé par l'impôt."),
 q(5,"moyen","valeur-ajoutee","La valeur ajoutée se calcule par :",
   ["Production + consommations intermédiaires","Production − consommations intermédiaires","Production × 2","Chiffre d'affaires + salaires"],1,
   "Valeur ajoutée = valeur de la production − consommations intermédiaires."),
 q(6,"moyen","valeur-ajoutee","Une entreprise produit pour 500 000 euros et utilise 200 000 euros de consommations intermédiaires. Sa valeur ajoutée est de :",
   ["700 000 euros","300 000 euros","200 000 euros","250 000 euros"],1,
   "500 000 − 200 000 = 300 000 euros."),
 q(7,"moyen","consommation-intermediaire","Les consommations intermédiaires sont :",
   ["Des biens durables utilisés plusieurs années","Des biens et services détruits ou transformés au cours de la production","Les salaires versés aux employés","Les impôts payés par l'entreprise"],1,
   "Les consommations intermédiaires (matières premières, énergie) sont entièrement utilisées dans le processus de production."),
 q(8,"facile","capital-fixe","Le capital fixe désigne :",
   ["Les matières premières consommées","Les biens durables servant plusieurs fois à produire","L'argent placé en banque","Les heures de travail"],1,
   "Le capital fixe (machines, bâtiments) est un facteur durable utilisé lors de plusieurs cycles de production."),
 q(9,"facile","facteurs","Les deux facteurs de production principaux sont :",
   ["Le travail et le capital","La monnaie et l'or","Le prix et la quantité","L'offre et la demande"],0,
   "Produire combine le facteur travail et le facteur capital."),
 q(10,"moyen","productivite","La productivité mesure :",
   ["Le prix de vente d'un produit","La quantité produite pour une quantité donnée de facteurs","Le total des salaires versés","Le nombre d'entreprises d'un pays"],1,
   "La productivité rapporte la production aux facteurs utilisés (par exemple par heure de travail)."),
 q(11,"moyen","non-comptabilise","Lequel de ces éléments n'est PAS compté dans la production au sens économique ?",
   ["Le pain vendu par une boulangerie","Une coupe de cheveux payante","Le repas cuisiné bénévolement chez soi","Un billet de train acheté"],2,
   "Le travail domestique (cuisiner pour soi) n'est pas comptabilisé dans la production."),
 q(12,"moyen","marchand","Un prix qui couvre au moins les coûts caractérise :",
   ["Un service non marchand","Un service marchand","Un don","Une subvention"],1,
   "Le service marchand est vendu à un prix couvrant au moins les coûts de production."),
 q(13,"difficile","valeur-ajoutee","Le chiffre d'affaires d'une entreprise (300 000 euros) est supérieur à sa valeur ajoutée (190 000 euros) parce que :",
   ["Elle paie des impôts","Elle a des consommations intermédiaires (110 000 euros)","Elle réalise des bénéfices","Elle emploie des salariés"],1,
   "Chiffre d'affaires − valeur ajoutée = consommations intermédiaires : 300 000 − 190 000 = 110 000 euros."),
 q(14,"facile","producteurs","Les administrations publiques produisent essentiellement :",
   ["Des biens marchands","Des services non marchands","De la monnaie","Des matières premières"],1,
   "Les administrations publiques fournissent surtout des services non marchands (éducation, sécurité, justice)."),
 q(15,"moyen","repartition","La valeur ajoutée sert notamment à :",
   ["Rémunérer les salariés, l'État et l'entreprise","Payer uniquement les fournisseurs","Acheter les consommations intermédiaires","Financer les importations"],0,
   "La valeur ajoutée est répartie entre les salariés, l'État (impôts), les prêteurs et l'entreprise."),
 q(16,"facile","bien-service","Un bien se distingue d'un service parce qu'il est :",
   ["Toujours gratuit","Matériel et stockable","Toujours produit par l'État","Immatériel"],1,
   "Un bien est matériel et stockable ; un service est immatériel."),
 q(17,"moyen","associations","Une association qui fournit des repas gratuits réalise une production :",
   ["Marchande","Non marchande","Domestique","Impossible à classer"],1,
   "Les services rendus gratuitement par une association relèvent de la production non marchande."),
 q(18,"difficile","valeur-ajoutee","Deux entreprises ont le même chiffre d'affaires (400 000 euros). L'une a 100 000 euros de consommations intermédiaires, l'autre 250 000. Laquelle crée le plus de valeur ajoutée ?",
   ["Celle avec 250 000 euros de consommations intermédiaires","Celle avec 100 000 euros de consommations intermédiaires","Les deux créent autant","On ne peut pas savoir"],1,
   "VA = 400 000 − consommations. 400 000 − 100 000 = 300 000 > 400 000 − 250 000 = 150 000."),
 q(19,"moyen","autoconsommation","Un agriculteur qui garde une partie de sa récolte pour se nourrir pratique :",
   ["L'exportation","L'autoconsommation","La spéculation","La production non marchande de l'État"],1,
   "Consommer soi-même sa propre production est de l'autoconsommation."),
 q(20,"difficile","progres-technique","Le progrès technique permet surtout d'augmenter :",
   ["Le nombre de consommations intermédiaires détruites","La productivité, donc la quantité produite avec les mêmes facteurs","Les impôts payés","Le prix des matières premières"],1,
   "Le progrès technique améliore la productivité : on produit davantage avec une même quantité de facteurs."),
]
ex1 = [
 ex(1,"decouverte","bien-service","Classe en biens ou services : (a) une pizza, (b) un cours de piano, (c) un vélo, (d) une assurance.",
   ["Un bien est matériel et stockable ; un service est immatériel.","(a) pizza = bien ; (c) vélo = bien.","(b) cours de piano = service ; (d) assurance = service."],
   "Biens : pizza, vélo. Services : cours de piano, assurance."),
 ex(2,"application","valeur-ajoutee","Une menuiserie produit pour 250 000 euros et consomme 90 000 euros de bois et d'électricité. Calcule sa valeur ajoutée.",
   ["VA = production − consommations intermédiaires.","250 000 − 90 000 = 160 000."],
   "160 000 euros."),
 ex(3,"application","valeur-ajoutee","Une entreprise a une valeur ajoutée de 180 000 euros et des consommations intermédiaires de 120 000 euros. Quelle est la valeur de sa production ?",
   ["Production = VA + consommations intermédiaires.","180 000 + 120 000 = 300 000."],
   "300 000 euros."),
 ex(4,"decouverte","marchand","Indique si ces productions sont marchandes ou non marchandes : (a) un billet de cinéma, (b) la police nationale, (c) un abonnement téléphonique.",
   ["Marchand = vendu à un prix couvrant les coûts ; non marchand = gratuit ou quasi gratuit.","(a) cinéma = marchand ; (c) téléphonie = marchand.","(b) police = non marchand."],
   "Marchand : cinéma, abonnement téléphonique. Non marchand : police."),
 ex(5,"application","consommation-intermediaire","Une entreprise a un chiffre d'affaires de 500 000 euros et une valeur ajoutée de 320 000 euros. Retrouve le montant de ses consommations intermédiaires.",
   ["Consommations intermédiaires = production − valeur ajoutée.","500 000 − 320 000 = 180 000."],
   "180 000 euros."),
 ex(6,"application","facteurs","Pour chaque élément, indique s'il s'agit de capital fixe ou de consommation intermédiaire : (a) une machine à coudre, (b) le tissu utilisé, (c) le bâtiment de l'atelier, (d) le fil.",
   ["Capital fixe = durable, sert plusieurs fois ; consommation intermédiaire = détruite dans la production.","(a) machine et (c) bâtiment = capital fixe.","(b) tissu et (d) fil = consommations intermédiaires."],
   "Capital fixe : machine à coudre, bâtiment. Consommations intermédiaires : tissu, fil."),
 ex(7,"approfondissement","valeur-ajoutee","Trois entreprises interviennent dans une filière : A vend du blé à B pour 100, B vend de la farine à C pour 180, C vend du pain pour 300. Calcule la valeur ajoutée de chaque entreprise (on suppose que A n'a pas de consommations intermédiaires).",
   ["VA = ventes − achats de consommations intermédiaires.","A : 100 − 0 = 100.","B : 180 − 100 = 80.","C : 300 − 180 = 120."],
   "A : 100 ; B : 80 ; C : 120."),
 ex(8,"approfondissement","valeur-ajoutee","À partir de l'exercice précédent, calcule la valeur ajoutée totale de la filière. Que remarques-tu par rapport au prix final du pain ?",
   ["On additionne les valeurs ajoutées.","100 + 80 + 120 = 300.","La somme des valeurs ajoutées (300) est égale au prix final du pain (300) : on évite ainsi de compter deux fois les consommations intermédiaires."],
   "300, soit le prix final du pain."),
 ex(9,"application","productivite","Un atelier produit 400 pièces avec 200 heures de travail, puis 480 pièces avec 200 heures après l'achat d'une nouvelle machine. Calcule la productivité horaire avant et après.",
   ["Productivité horaire = pièces / heures.","Avant : 400 / 200 = 2 pièces par heure.","Après : 480 / 200 = 2,4 pièces par heure."],
   "2 pièces/heure puis 2,4 pièces/heure."),
 ex(10,"approfondissement","synthese","Explique pourquoi le travail domestique (cuisiner, ménage pour soi) n'est pas compté dans la production, alors que le même service acheté à une entreprise l'est.",
   ["La production comptabilisée suppose un échange sur un marché ou un service fourni par une administration/association.","Le travail domestique n'est ni vendu ni fourni par une administration : il n'est pas mesuré.","Le même service acheté à une entreprise donne lieu à un paiement : il est marchand et donc comptabilisé."],
   "Parce qu'il n'y a ni transaction marchande ni service fourni par une administration."),
]
cards1 = [
 c("Qu'est-ce que produire ?","Créer des biens et des services pour satisfaire des besoins, en combinant des facteurs de production."),
 c("Bien ou service ?","Bien = matériel et stockable ; service = immatériel, souvent consommé au moment de sa réalisation."),
 c("Production marchande","Biens/services vendus sur un marché à un prix couvrant au moins les coûts de production."),
 c("Production non marchande","Services gratuits ou quasi gratuits, financés par l'impôt (école publique, justice)."),
 c("Formule de la valeur ajoutée","Valeur ajoutée = production − consommations intermédiaires."),
 c("Consommations intermédiaires","Biens et services détruits ou transformés pendant la production (matières premières, énergie)."),
 c("Capital fixe","Biens durables utilisés plusieurs fois pour produire (machines, bâtiments)."),
 c("Les deux facteurs de production","Le travail et le capital."),
 c("Productivité","Quantité produite pour une quantité donnée de facteurs (ex. par heure de travail)."),
 c("Qui produit ?","Entreprises, administrations publiques, associations, ménages."),
 c("Travail domestique et production","Le travail domestique et le bénévolat ne sont pas comptés dans la production."),
 c("À quoi sert la valeur ajoutée ?","À rémunérer les salariés, l'État (impôts), les prêteurs et l'entreprise."),
]
write_chapter("production-richesses", cid1,
 "Comment crée-t-on des richesses ? (production, valeur ajoutée)",
 ["Notion de bien et de service","Savoir calculer un pourcentage"], fiche1, q1, ex1, cards1)


# =====================================================================
# CHAPITRE 2 : mesure-production-pib
# =====================================================================
cid2 = "2nde-ses-mesure-production-pib"
fiche2 = r"""
# Comment mesure-t-on la production ? (PIB, limites)

> Comment savoir si un pays produit plus que l'an dernier ? Les économistes additionnent la richesse créée par tous les producteurs : c'est le produit intérieur brut (PIB).

## 1. Le PIB : la somme des valeurs ajoutées
Le **produit intérieur brut (PIB)** mesure la richesse créée sur un territoire pendant une année. Pour éviter de compter plusieurs fois les mêmes biens, on n'additionne pas les chiffres d'affaires mais les **valeurs ajoutées** :

**PIB = somme des valeurs ajoutées de tous les producteurs (+ certains impôts sur les produits).**

Le PIB additionne :
- la valeur ajoutée **marchande** (entreprises) ;
- la valeur ajoutée **non marchande** (administrations), évaluée par ses coûts de production (notamment les salaires versés), faute de prix de marché.

## 2. PIB nominal et PIB réel
Le **PIB nominal** (ou en valeur) est calculé aux prix de l'année. Problème : si les prix augmentent, le PIB nominal augmente même si les quantités produites n'ont pas bougé. Pour mesurer la vraie évolution de la production, on calcule le **PIB réel** (ou en volume), qui neutralise l'effet de l'**inflation** (la hausse générale des prix).

- Si le PIB nominal augmente de 4 pour cent et les prix de 2 pour cent, le PIB réel augmente d'environ 2 pour cent.
- La **croissance économique** est la hausse du PIB réel d'une année sur l'autre.

## 3. Calculer un taux de variation
Pour comparer deux années, on calcule un **taux de variation** :

**Taux de variation (en pour cent) = ((valeur d'arrivée − valeur de départ) / valeur de départ) × 100.**

Exemple : un PIB passe de 2 000 à 2 060 milliards. Taux = ((2 060 − 2 000) / 2 000) × 100 = (60 / 2 000) × 100 = 3 pour cent. La croissance est de 3 pour cent.

Le **PIB par habitant** (PIB / population) donne une idée du niveau de vie moyen : il permet de comparer des pays de tailles différentes.

## 4. Les limites du PIB
Le PIB est utile mais imparfait :
- il **ignore** de nombreuses activités : travail domestique, bénévolat, production non déclarée ;
- il ne dit rien de la **répartition** des richesses : un PIB par habitant élevé peut cacher de fortes inégalités ;
- il ne mesure pas le **bien-être** ni la **qualité de vie** (santé, temps libre, éducation) ;
- il ne tient pas compte des **dégâts environnementaux** : une pollution qui oblige à dépenser pour se soigner peut faire augmenter le PIB.

D'autres indicateurs complètent le PIB, comme l'**indice de développement humain (IDH)**, qui combine le revenu, l'espérance de vie et le niveau d'éducation.

## À retenir
- PIB = somme des valeurs ajoutées produites sur un territoire pendant un an.
- PIB nominal (aux prix courants) ≠ PIB réel (corrigé de l'inflation).
- Croissance économique = taux de variation du PIB réel.
- Taux de variation = ((arrivée − départ) / départ) × 100.
- Le PIB ignore le travail domestique, les inégalités, le bien-être et l'environnement ; l'IDH le complète.
"""
q2 = [
 q(1,"facile","pib","Le PIB mesure :",
   ["Le total des salaires d'un pays","La richesse créée sur un territoire pendant une année","Le nombre d'habitants d'un pays","La quantité de monnaie en circulation"],1,
   "Le produit intérieur brut mesure la richesse (valeur ajoutée) créée sur un territoire en un an."),
 q(2,"facile","pib","Pour calculer le PIB, on additionne :",
   ["Les chiffres d'affaires de toutes les entreprises","Les valeurs ajoutées de tous les producteurs","Les salaires uniquement","Les importations"],1,
   "On additionne les valeurs ajoutées pour éviter de compter plusieurs fois les mêmes biens."),
 q(3,"moyen","double-compte","On additionne les valeurs ajoutées plutôt que les chiffres d'affaires pour :",
   ["Payer moins d'impôts","Éviter de compter plusieurs fois les consommations intermédiaires","Augmenter le PIB artificiellement","Mesurer la population"],1,
   "Additionner les chiffres d'affaires compterait plusieurs fois les consommations intermédiaires."),
 q(4,"moyen","pib-non-marchand","La valeur ajoutée non marchande (administrations) est évaluée :",
   ["Par son prix de vente sur le marché","Par ses coûts de production (surtout les salaires)","À zéro","Par le nombre d'usagers"],1,
   "Faute de prix de marché, on évalue la production non marchande par ses coûts de production."),
 q(5,"moyen","pib-reel","Le PIB réel se distingue du PIB nominal parce qu'il :",
   ["Est toujours plus élevé","Neutralise l'effet de l'inflation","Compte la population","Inclut les importations"],1,
   "Le PIB réel (en volume) corrige la hausse des prix pour mesurer les quantités produites."),
 q(6,"difficile","pib-reel","Si le PIB nominal augmente de 5 pour cent et les prix de 3 pour cent, le PIB réel augmente d'environ :",
   ["8 pour cent","5 pour cent","2 pour cent","3 pour cent"],2,
   "On retire l'inflation : environ 5 − 3 = 2 pour cent."),
 q(7,"facile","croissance","La croissance économique correspond à :",
   ["La hausse des prix","La hausse du PIB réel d'une année sur l'autre","La hausse de la population","La baisse du chômage"],1,
   "La croissance économique est l'augmentation du PIB réel d'une période à l'autre."),
 q(8,"moyen","taux-variation","Le taux de variation se calcule par :",
   ["(arrivée − départ) / départ × 100","(arrivée + départ) / 2","arrivée / départ","départ − arrivée"],0,
   "Taux de variation = ((valeur d'arrivée − valeur de départ) / valeur de départ) × 100."),
 q(9,"moyen","taux-variation","Un PIB passe de 2 000 à 2 060 milliards. Le taux de variation est de :",
   ["6 pour cent","0,3 pour cent","3 pour cent","60 pour cent"],2,
   "((2 060 − 2 000) / 2 000) × 100 = (60 / 2 000) × 100 = 3 pour cent."),
 q(10,"difficile","taux-variation","Une valeur passe de 500 à 450. Le taux de variation est de :",
   ["+10 pour cent","−10 pour cent","−50 pour cent","−5 pour cent"],1,
   "((450 − 500) / 500) × 100 = (−50 / 500) × 100 = −10 pour cent."),
 q(11,"facile","pib-habitant","Le PIB par habitant s'obtient en :",
   ["Multipliant le PIB par la population","Divisant le PIB par la population","Additionnant PIB et population","Divisant la population par le PIB"],1,
   "PIB par habitant = PIB / population ; il approche le niveau de vie moyen."),
 q(12,"moyen","pib-habitant","Le PIB par habitant est surtout utile pour :",
   ["Comparer des pays de tailles différentes","Compter les entreprises","Mesurer l'inflation","Calculer les impôts"],0,
   "Rapporter le PIB à la population permet de comparer des pays de populations différentes."),
 q(13,"facile","limites-pib","Le PIB ne compte PAS :",
   ["La production des entreprises","Le travail domestique non rémunéré","Les services publics","La valeur ajoutée marchande"],1,
   "Le travail domestique, le bénévolat et la production non déclarée échappent au PIB."),
 q(14,"moyen","limites-pib","Une limite importante du PIB est qu'il ne renseigne pas sur :",
   ["La richesse totale créée","La répartition des richesses entre les habitants","La production marchande","La valeur ajoutée"],1,
   "Le PIB (et le PIB par habitant) ne dit rien des inégalités de répartition."),
 q(15,"difficile","limites-pib","Pourquoi une catastrophe qui provoque des dépenses de réparation peut-elle faire augmenter le PIB ?",
   ["Parce qu'elle détruit des richesses","Parce que les dépenses de réparation sont de la production comptée dans le PIB","Parce qu'elle réduit la population","Parce qu'elle baisse les prix"],1,
   "Les dépenses de reconstruction sont de la production supplémentaire, donc comptées, même si le bien-être diminue."),
 q(16,"facile","inflation","L'inflation désigne :",
   ["La hausse générale et durable des prix","La baisse de la production","La hausse de la population","La hausse des salaires uniquement"],0,
   "L'inflation est la hausse générale et durable du niveau des prix."),
 q(17,"moyen","idh","L'indice de développement humain (IDH) combine :",
   ["Uniquement le revenu","Le revenu, l'espérance de vie et l'éducation","Le PIB et la population","Les prix et les salaires"],1,
   "L'IDH combine niveau de vie (revenu), santé (espérance de vie) et éducation."),
 q(18,"moyen","idh","L'IDH a été créé pour :",
   ["Remplacer totalement le PIB","Compléter le PIB en tenant compte du développement humain","Mesurer l'inflation","Calculer la croissance"],1,
   "L'IDH complète le PIB en intégrant des dimensions de bien-être (santé, éducation)."),
 q(19,"difficile","pib-reel","Deux années de suite, un pays produit exactement les mêmes quantités mais les prix ont augmenté de 2 pour cent. Que peut-on dire ?",
   ["Le PIB réel augmente","Le PIB nominal augmente alors que le PIB réel est stable","Les deux PIB baissent","Le PIB par habitant double"],1,
   "À quantités identiques, seule la hausse des prix fait monter le PIB nominal ; le PIB réel ne bouge pas."),
 q(20,"difficile","taux-variation","Le PIB par habitant passe de 40 000 à 41 000 euros. Le taux de variation est de :",
   ["1 pour cent","2,5 pour cent","10 pour cent","0,25 pour cent"],1,
   "((41 000 − 40 000) / 40 000) × 100 = (1 000 / 40 000) × 100 = 2,5 pour cent."),
]
ex2 = [
 ex(1,"decouverte","pib","Explique en une phrase pourquoi on additionne les valeurs ajoutées et non les chiffres d'affaires pour calculer le PIB.",
   ["Le chiffre d'affaires inclut les consommations intermédiaires, déjà comptées chez d'autres producteurs.","Additionner les valeurs ajoutées évite de compter plusieurs fois les mêmes biens."],
   "Pour éviter le double compte des consommations intermédiaires."),
 ex(2,"application","pib","Dans un pays imaginaire, trois entreprises créent respectivement 120, 300 et 80 milliards de valeur ajoutée. Calcule le PIB (on ignore les impôts sur les produits).",
   ["PIB = somme des valeurs ajoutées.","120 + 300 + 80 = 500."],
   "500 milliards."),
 ex(3,"application","taux-variation","Le PIB réel passe de 1 500 à 1 545 milliards. Calcule le taux de croissance.",
   ["Taux = ((arrivée − départ) / départ) × 100.","((1 545 − 1 500) / 1 500) × 100 = (45 / 1 500) × 100 = 3 pour cent."],
   "3 pour cent."),
 ex(4,"application","taux-variation","Une valeur passe de 800 à 760. Calcule le taux de variation et dis s'il s'agit d'une hausse ou d'une baisse.",
   ["Taux = ((760 − 800) / 800) × 100.","= (−40 / 800) × 100 = −5 pour cent.","Le taux est négatif : c'est une baisse."],
   "−5 pour cent (une baisse)."),
 ex(5,"application","pib-reel","Le PIB nominal augmente de 6 pour cent et l'inflation est de 2 pour cent. Estime la hausse du PIB réel.",
   ["On retire l'inflation de la hausse nominale.","6 − 2 = 4 pour cent environ."],
   "Environ 4 pour cent."),
 ex(6,"application","pib-habitant","Un pays a un PIB de 2 400 milliards d'euros et 60 millions d'habitants. Calcule le PIB par habitant.",
   ["PIB par habitant = PIB / population.","2 400 milliards / 60 millions = 40 000 euros par habitant."],
   "40 000 euros par habitant."),
 ex(7,"approfondissement","pib-habitant","Le pays A a un PIB de 1 200 milliards et 30 millions d'habitants ; le pays B un PIB de 1 200 milliards et 40 millions d'habitants. Lequel a le PIB par habitant le plus élevé ?",
   ["PIB par habitant = PIB / population.","A : 1 200 / 30 = 40 000 euros.","B : 1 200 / 40 = 30 000 euros.","A a le PIB par habitant le plus élevé."],
   "Le pays A (40 000 contre 30 000 euros)."),
 ex(8,"approfondissement","limites-pib","Cite trois activités ou réalités que le PIB ne prend pas en compte, et explique pourquoi c'est une limite.",
   ["Le PIB ne mesure que la production marchande et non marchande comptabilisée.","Exemples : travail domestique, bénévolat, inégalités de répartition, dégâts environnementaux.","C'est une limite car ces éléments affectent le bien-être sans apparaître dans le PIB."],
   "Ex. : travail domestique, inégalités, environnement — non mesurés par le PIB."),
 ex(9,"approfondissement","idh","Un pays a un PIB par habitant élevé mais une espérance de vie faible et un accès limité à l'éducation. Quel indicateur permet de nuancer son niveau de développement, et pourquoi ?",
   ["L'IDH combine revenu, espérance de vie et éducation.","Il nuance le PIB par habitant en intégrant la santé et l'éducation.","Ce pays aurait un IDH plus faible que ne le laisse penser son seul PIB par habitant."],
   "L'IDH, car il tient compte de la santé et de l'éducation, pas seulement du revenu."),
 ex(10,"approfondissement","pib-reel","Un pays produit 100 voitures à 20 000 euros l'année 1, puis 100 voitures à 21 000 euros l'année 2. Calcule le PIB nominal des deux années puis explique ce qu'il advient du PIB réel.",
   ["PIB nominal = quantités × prix de l'année.","Année 1 : 100 × 20 000 = 2 000 000 euros.","Année 2 : 100 × 21 000 = 2 100 000 euros.","Le PIB nominal augmente de 5 pour cent, mais les quantités sont identiques : le PIB réel est stable."],
   "PIB nominal 2 000 000 puis 2 100 000 euros ; PIB réel stable."),
]
cards2 = [
 c("Que mesure le PIB ?","La richesse (valeur ajoutée) créée sur un territoire pendant une année."),
 c("Comment calcule-t-on le PIB ?","En additionnant les valeurs ajoutées de tous les producteurs (+ certains impôts sur les produits)."),
 c("Pourquoi pas les chiffres d'affaires ?","Pour éviter de compter plusieurs fois les consommations intermédiaires (double compte)."),
 c("PIB nominal vs PIB réel","Nominal = aux prix de l'année ; réel = corrigé de l'inflation (mesure les quantités)."),
 c("Croissance économique","Le taux de variation du PIB réel d'une année sur l'autre."),
 c("Formule du taux de variation","((valeur d'arrivée − valeur de départ) / valeur de départ) × 100."),
 c("PIB par habitant","PIB / population ; approche le niveau de vie moyen et permet de comparer des pays."),
 c("Inflation","La hausse générale et durable du niveau des prix."),
 c("Production non marchande dans le PIB","Évaluée par ses coûts de production (surtout les salaires), faute de prix de marché."),
 c("Trois limites du PIB","Ignore le travail domestique, les inégalités et les dégâts environnementaux."),
 c("Le PIB et le bien-être","Le PIB ne mesure ni le bien-être, ni la qualité de vie, ni la répartition des richesses."),
 c("Qu'est-ce que l'IDH ?","Un indice qui combine revenu, espérance de vie et éducation, pour compléter le PIB."),
]
write_chapter("mesure-production-pib", cid2,
 "Comment mesure-t-on la production ? (PIB, limites)",
 ["Notion de valeur ajoutée","Savoir calculer un pourcentage et un taux de variation"], fiche2, q2, ex2, cards2)


# =====================================================================
# CHAPITRE 3 : marche-formation-prix
# =====================================================================
cid3 = "2nde-ses-marche-formation-prix"
fiche3 = r"""
# Comment se forment les prix sur un marché ? (offre et demande)

> Pourquoi le prix des fraises baisse-t-il en été et grimpe-t-il en hiver ? Sur un marché, le prix résulte de la rencontre entre ce que les vendeurs offrent et ce que les acheteurs demandent.

## 1. Le marché et le prix
Un **marché** est un lieu (réel ou virtuel) de rencontre entre des **offreurs** (vendeurs) et des **demandeurs** (acheteurs), où s'échange un bien ou un service à un **prix**. Le prix est un signal : il informe sur la rareté et oriente les décisions des uns et des autres.

## 2. La demande
La **demande** est la quantité qu'un ou plusieurs acheteurs souhaitent acheter à un prix donné. En général, la **loi de la demande** dit que la demande est **décroissante** avec le prix : plus le prix est élevé, moins on achète ; plus le prix baisse, plus on achète.

| Prix (euros) | Quantité demandée |
|---|---|
| 10 | 20 |
| 8 | 40 |
| 6 | 60 |

D'autres facteurs déplacent la demande : le revenu des ménages, les goûts, le prix des autres biens.

## 3. L'offre
L'**offre** est la quantité que les vendeurs proposent à un prix donné. La **loi de l'offre** dit que l'offre est **croissante** avec le prix : plus le prix est élevé, plus il est intéressant de produire et de vendre.

| Prix (euros) | Quantité offerte |
|---|---|
| 10 | 60 |
| 8 | 40 |
| 6 | 20 |

## 4. L'équilibre du marché
Le **prix d'équilibre** est le prix pour lequel la quantité offerte est égale à la quantité demandée. Dans les tableaux ci-dessus, à 8 euros l'offre (40) est égale à la demande (40) : le prix d'équilibre est 8 euros et la quantité d'équilibre 40.

- Si le prix est **trop élevé** (par exemple 10 euros), l'offre (60) dépasse la demande (20) : il y a un **excédent** (surplus), qui pousse les prix à la baisse.
- Si le prix est **trop bas** (par exemple 6 euros), la demande (60) dépasse l'offre (20) : il y a une **pénurie** (rareté), qui pousse les prix à la hausse.

Le marché tend ainsi spontanément vers l'équilibre.

## 5. Les déplacements de l'équilibre
Quand l'offre ou la demande change, l'équilibre se déplace :
- une **hausse de la demande** (nouveau produit à la mode) fait augmenter le prix et la quantité échangée ;
- une **hausse de l'offre** (récolte abondante) fait baisser le prix et augmenter la quantité échangée.

## À retenir
- Un marché est la rencontre entre offreurs et demandeurs, d'où résulte un prix.
- Demande décroissante avec le prix ; offre croissante avec le prix.
- Prix d'équilibre : offre = demande.
- Prix trop haut → excédent (baisse des prix) ; prix trop bas → pénurie (hausse des prix).
- Une hausse de la demande augmente le prix ; une hausse de l'offre le fait baisser.
"""
q3 = [
 q(1,"facile","marche","Un marché est :",
   ["Un lieu où l'État fixe les prix","La rencontre entre offreurs et demandeurs d'un bien ou service","Uniquement un supermarché","Un synonyme d'entreprise"],1,
   "Un marché est la rencontre entre offreurs (vendeurs) et demandeurs (acheteurs)."),
 q(2,"facile","demande","D'après la loi de la demande, quand le prix augmente, la quantité demandée :",
   ["Augmente","Diminue","Reste constante","Devient nulle immédiatement"],1,
   "La demande est décroissante avec le prix : plus c'est cher, moins on achète."),
 q(3,"facile","offre","D'après la loi de l'offre, quand le prix augmente, la quantité offerte :",
   ["Diminue","Augmente","Reste constante","Devient nulle"],1,
   "L'offre est croissante avec le prix : un prix élevé incite à produire et vendre davantage."),
 q(4,"moyen","equilibre","Le prix d'équilibre est le prix pour lequel :",
   ["L'offre est maximale","La quantité offerte est égale à la quantité demandée","La demande est nulle","Le vendeur fait le plus de bénéfice"],1,
   "À l'équilibre, la quantité offerte est égale à la quantité demandée."),
 q(5,"moyen","equilibre","À 10 euros, l'offre est de 60 et la demande de 20. On est en situation de :",
   ["Pénurie","Excédent (surplus)","Équilibre","Prix d'équilibre"],1,
   "L'offre (60) dépasse la demande (20) : il y a un excédent, qui pousse les prix à la baisse."),
 q(6,"moyen","equilibre","À 6 euros, la demande est de 60 et l'offre de 20. On est en situation de :",
   ["Excédent","Pénurie","Équilibre","Surproduction"],1,
   "La demande (60) dépasse l'offre (20) : il y a pénurie, qui pousse les prix à la hausse."),
 q(7,"difficile","equilibre","À 8 euros, l'offre est de 40 et la demande de 40. Le prix d'équilibre est :",
   ["6 euros","8 euros","10 euros","40 euros"],1,
   "Offre = demande = 40 à 8 euros : le prix d'équilibre est 8 euros."),
 q(8,"moyen","excedent","Un excédent d'offre pousse le prix à :",
   ["Augmenter","Baisser","Rester stable","Doubler"],1,
   "Quand l'offre dépasse la demande, les vendeurs baissent leurs prix pour écouler leurs stocks."),
 q(9,"moyen","penurie","Une pénurie (demande supérieure à l'offre) pousse le prix à :",
   ["Baisser","Augmenter","Rester stable","Devenir nul"],1,
   "Quand la demande dépasse l'offre, la rareté fait monter les prix."),
 q(10,"moyen","deplacement-demande","Une hausse de la demande (produit à la mode) entraîne :",
   ["Une baisse du prix et de la quantité","Une hausse du prix et de la quantité échangée","Aucun changement","Une hausse de l'offre uniquement"],1,
   "Une demande plus forte fait augmenter le prix d'équilibre et la quantité échangée."),
 q(11,"moyen","deplacement-offre","Une récolte abondante (hausse de l'offre) entraîne :",
   ["Une hausse du prix","Une baisse du prix et une hausse de la quantité échangée","Une pénurie","Une baisse de la demande"],1,
   "Une offre plus abondante fait baisser le prix d'équilibre et augmenter la quantité échangée."),
 q(12,"facile","prix-signal","Le prix sur un marché joue le rôle de :",
   ["Signal qui informe et oriente les décisions","Impôt versé à l'État","Salaire des vendeurs","Monnaie officielle"],0,
   "Le prix est un signal renseignant sur la rareté et orientant offreurs et demandeurs."),
 q(13,"facile","offreur-demandeur","Sur un marché, l'acheteur est :",
   ["L'offreur","Le demandeur","L'État","Le producteur"],1,
   "L'acheteur exprime une demande ; le vendeur exprime une offre."),
 q(14,"difficile","demande","Prix : à 10 euros la demande est 20, à 6 euros elle est 60. Cette relation illustre :",
   ["Une demande croissante avec le prix","Une demande décroissante avec le prix","Une offre croissante","L'équilibre"],1,
   "Quand le prix baisse de 10 à 6, la demande passe de 20 à 60 : la demande est décroissante avec le prix."),
 q(15,"difficile","offre","Prix : à 6 euros l'offre est 20, à 10 euros elle est 60. Cette relation illustre :",
   ["Une offre décroissante avec le prix","Une offre croissante avec le prix","Une demande décroissante","Une pénurie permanente"],1,
   "Quand le prix monte de 6 à 10, l'offre passe de 20 à 60 : l'offre est croissante avec le prix."),
 q(16,"moyen","facteurs-demande","Lequel de ces éléments déplace la demande (hors prix du bien) ?",
   ["Le revenu des ménages","Le nombre de machines de l'usine","Le coût de l'électricité pour produire","Le prix des matières premières"],0,
   "Le revenu des ménages, les goûts et le prix des autres biens déplacent la demande."),
 q(17,"difficile","equilibre","Si, à l'équilibre initial, la demande augmente sans que l'offre change, alors :",
   ["Le prix baisse","Le prix augmente","La quantité échangée diminue","Rien ne change"],1,
   "Une demande plus forte crée d'abord une pénurie, qui fait monter le prix jusqu'au nouvel équilibre."),
 q(18,"moyen","surplus","Un vendeur constate que ses stocks ne s'écoulent pas au prix affiché. Cela signale :",
   ["Une pénurie","Un excédent d'offre (prix trop élevé)","Un prix d'équilibre atteint","Une hausse de la demande"],1,
   "Des invendus signalent que l'offre dépasse la demande : le prix est trop élevé."),
 q(19,"facile","penurie","Une pénurie correspond à une situation où :",
   ["L'offre dépasse la demande","La demande dépasse l'offre","Offre et demande sont égales","Il n'y a ni offre ni demande"],1,
   "Une pénurie est un excès de demande par rapport à l'offre disponible."),
 q(20,"difficile","deplacement","En hiver, l'offre de fraises est faible et la demande stable. Par rapport à l'été, le prix est plutôt :",
   ["Plus bas","Plus élevé","Identique","Nul"],1,
   "Une offre plus faible pour une demande donnée fait monter le prix d'équilibre."),
]
ex3 = [
 ex(1,"decouverte","offre-demande","Complète : sur un marché, l'acheteur exprime la ___ et le vendeur exprime l'___.",
   ["L'acheteur souhaite acheter : c'est la demande.","Le vendeur propose de vendre : c'est l'offre."],
   "la demande ; l'offre."),
 ex(2,"application","equilibre","Tableau : à 6 euros, offre 20 et demande 60 ; à 8 euros, offre 40 et demande 40 ; à 10 euros, offre 60 et demande 20. Trouve le prix et la quantité d'équilibre.",
   ["Le prix d'équilibre est celui où offre = demande.","À 8 euros : offre = demande = 40.","Prix d'équilibre = 8 euros, quantité d'équilibre = 40."],
   "8 euros pour 40 unités."),
 ex(3,"application","excedent","Avec le tableau de l'exercice 2, que se passe-t-il si le prix est fixé à 10 euros ?",
   ["On compare offre et demande à ce prix.","À 10 euros : offre 60, demande 20.","L'offre dépasse la demande : excédent de 40 unités, le prix va baisser."],
   "Excédent de 40 unités ; le prix tend à baisser."),
 ex(4,"application","penurie","Avec le même tableau, que se passe-t-il si le prix est fixé à 6 euros ?",
   ["On compare offre et demande à ce prix.","À 6 euros : demande 60, offre 20.","La demande dépasse l'offre : pénurie de 40 unités, le prix va monter."],
   "Pénurie de 40 unités ; le prix tend à monter."),
 ex(5,"decouverte","loi-demande","Vrai ou faux : « Quand le prix d'un bien augmente, la quantité demandée augmente aussi. » Justifie.",
   ["La loi de la demande dit l'inverse : la demande est décroissante avec le prix.","Quand le prix augmente, la quantité demandée diminue."],
   "Faux : la demande diminue quand le prix augmente."),
 ex(6,"application","deplacement-demande","Un nouveau produit devient à la mode : la demande augmente fortement, l'offre ne change pas dans l'immédiat. Indique le sens de variation du prix et de la quantité échangée.",
   ["Une hausse de la demande décale l'équilibre.","Le prix d'équilibre augmente.","La quantité échangée augmente."],
   "Le prix augmente et la quantité échangée augmente."),
 ex(7,"application","deplacement-offre","Une récolte de tomates exceptionnelle fait fortement augmenter l'offre, la demande restant stable. Indique le sens de variation du prix et de la quantité échangée.",
   ["Une hausse de l'offre décale l'équilibre.","Le prix d'équilibre baisse.","La quantité échangée augmente."],
   "Le prix baisse et la quantité échangée augmente."),
 ex(8,"approfondissement","raisonnement","Explique pourquoi un excédent d'offre finit par disparaître sans intervention extérieure.",
   ["Un excédent signifie des invendus.","Pour écouler leurs stocks, les vendeurs baissent leurs prix.","La baisse du prix réduit l'offre et augmente la demande jusqu'à l'égalité : l'équilibre est rétabli."],
   "La baisse des prix rapproche offre et demande jusqu'à l'équilibre."),
 ex(9,"approfondissement","variation-prix","Le prix d'un bien passe de 8 à 10 euros. Calcule le taux de variation du prix.",
   ["Taux = ((arrivée − départ) / départ) × 100.","((10 − 8) / 8) × 100 = (2 / 8) × 100 = 25 pour cent."],
   "+25 pour cent."),
 ex(10,"approfondissement","synthese","En hiver, l'offre de fraises est rare. Explique, à l'aide de l'offre et de la demande, pourquoi les fraises coûtent plus cher qu'en été.",
   ["La demande de fraises reste relativement stable ou existe toute l'année.","En hiver, l'offre est faible : l'offre est inférieure à la demande au prix d'été.","La rareté relative fait monter le prix d'équilibre par rapport à l'été, où l'offre est abondante."],
   "Offre faible pour une demande donnée → prix d'équilibre plus élevé."),
]
cards3 = [
 c("Qu'est-ce qu'un marché ?","La rencontre entre offreurs (vendeurs) et demandeurs (acheteurs) d'un bien ou service."),
 c("Loi de la demande","La quantité demandée diminue quand le prix augmente (demande décroissante)."),
 c("Loi de l'offre","La quantité offerte augmente quand le prix augmente (offre croissante)."),
 c("Prix d'équilibre","Le prix pour lequel la quantité offerte est égale à la quantité demandée."),
 c("Excédent (surplus)","Offre supérieure à la demande : le prix est trop élevé et tend à baisser."),
 c("Pénurie","Demande supérieure à l'offre : le prix est trop bas et tend à monter."),
 c("Effet d'une hausse de la demande","Le prix d'équilibre et la quantité échangée augmentent."),
 c("Effet d'une hausse de l'offre","Le prix d'équilibre baisse et la quantité échangée augmente."),
 c("Le prix comme signal","Le prix informe sur la rareté et oriente les décisions des offreurs et demandeurs."),
 c("Offreur / demandeur","Offreur = vendeur ; demandeur = acheteur."),
 c("Qu'est-ce qui déplace la demande (hors prix) ?","Le revenu des ménages, les goûts, le prix des autres biens."),
 c("Pourquoi l'équilibre se rétablit-il ?","Excédent → baisse des prix ; pénurie → hausse des prix, jusqu'à offre = demande."),
]
write_chapter("marche-formation-prix", cid3,
 "Comment se forment les prix sur un marché ? (offre et demande)",
 ["Notion de bien, de service et de prix","Lecture d'un tableau de données"], fiche3, q3, ex3, cards3)


# =====================================================================
# CHAPITRE 4 : consommation-revenu
# =====================================================================
cid4 = "2nde-ses-consommation-revenu"
fiche4 = r"""
# La consommation et le revenu des ménages

> Avec le même revenu, deux ménages ne consomment pas la même chose. Le niveau et la structure de la consommation dépendent du revenu, mais aussi de bien d'autres facteurs.

## 1. Le revenu des ménages
Le **revenu** d'un ménage a plusieurs origines :
- les **revenus du travail** (salaires) ;
- les **revenus du capital** (loyers, intérêts, dividendes) ;
- les **revenus de transfert** (prestations sociales : allocations, retraites), redistribués par l'État.

On distingue le **revenu disponible** : ce qui reste au ménage pour consommer et épargner, une fois les impôts directs payés et les prestations reçues.

**Revenu disponible = revenus d'activité + revenus du capital + revenus de transfert − impôts directs.**

## 2. Consommer ou épargner
Le revenu disponible se partage entre :
- la **consommation** : l'utilisation de biens et services pour satisfaire des besoins ;
- l'**épargne** : la partie du revenu qui n'est pas consommée.

La **propension à consommer** est la part du revenu consacrée à la consommation :

**Propension à consommer = consommation / revenu disponible.**

Exemple : un ménage a un revenu disponible de 3 000 euros et consomme 2 400 euros. Sa propension à consommer est 2 400 / 3 000 = 0,8, soit 80 pour cent. Il épargne les 600 euros restants (20 pour cent).

## 3. Les facteurs de la consommation
La consommation ne dépend pas seulement du revenu :
- le **prix** des biens et le **pouvoir d'achat** (ce que le revenu permet d'acheter) ;
- l'**âge** et la composition du ménage ;
- la **catégorie sociale**, les habitudes et la culture ;
- la **publicité** et les effets de mode ;
- les **effets d'imitation** : consommer comme les autres pour montrer son appartenance à un groupe (consommation ostentatoire, analysée par Thorstein Veblen).

Selon la **loi d'Engel** (XIXe siècle), quand le revenu augmente, la part consacrée à l'alimentation diminue, tandis que celle consacrée aux loisirs, à la santé ou aux transports augmente. La **structure** de la consommation évolue donc avec le revenu.

## 4. Consommation et identité sociale
Consommer, ce n'est pas seulement satisfaire un besoin : c'est aussi envoyer un **signe** aux autres. Les biens ont une **valeur d'usage** (leur utilité concrète) et une **valeur symbolique** (ce qu'ils disent de nous). La consommation participe ainsi à la construction de l'**identité sociale** et peut marquer une **distinction** entre groupes.

## À retenir
- Trois sources de revenu : travail, capital, transferts.
- Revenu disponible = revenus + transferts − impôts directs.
- Le revenu disponible se partage entre consommation et épargne.
- Propension à consommer = consommation / revenu disponible.
- La consommation dépend du revenu mais aussi de l'âge, de la catégorie sociale, de la mode et des effets d'imitation ; loi d'Engel : la part de l'alimentation baisse quand le revenu augmente.
"""
q4 = [
 q(1,"facile","revenu","Un salaire est un revenu :",
   ["Du capital","Du travail","De transfert","Illégal"],1,
   "Le salaire rémunère le travail : c'est un revenu du travail (ou d'activité)."),
 q(2,"facile","revenu","Un loyer perçu par un propriétaire est un revenu :",
   ["Du travail","Du capital","De transfert","De la consommation"],1,
   "Les loyers, intérêts et dividendes sont des revenus du capital (du patrimoine)."),
 q(3,"facile","revenu-transfert","Une allocation familiale versée par l'État est un revenu :",
   ["Du travail","Du capital","De transfert","Marchand"],2,
   "Les prestations sociales (allocations, retraites) sont des revenus de transfert."),
 q(4,"moyen","revenu-disponible","Le revenu disponible est ce qui reste au ménage :",
   ["Avant de payer les impôts","Pour consommer et épargner, après impôts directs et transferts reçus","Après avoir tout consommé","Uniquement issu du travail"],1,
   "Le revenu disponible = revenus + transferts − impôts directs ; il sert à consommer et épargner."),
 q(5,"moyen","revenu-disponible","Un ménage gagne 2 500 euros de salaire, reçoit 300 euros de prestations et paie 400 euros d'impôts directs. Son revenu disponible est :",
   ["2 800 euros","2 400 euros","3 200 euros","2 100 euros"],1,
   "2 500 + 300 − 400 = 2 400 euros."),
 q(6,"facile","epargne","L'épargne correspond :",
   ["À la partie du revenu qui n'est pas consommée","Aux impôts payés","Aux dépenses alimentaires","Aux revenus du travail"],0,
   "L'épargne est la part du revenu disponible qui n'est pas consommée."),
 q(7,"moyen","propension","La propension à consommer se calcule par :",
   ["Revenu / consommation","Consommation / revenu disponible","Épargne / consommation","Consommation × revenu"],1,
   "Propension à consommer = consommation / revenu disponible."),
 q(8,"moyen","propension","Un ménage a un revenu disponible de 3 000 euros et consomme 2 400 euros. Sa propension à consommer est :",
   ["0,6","0,8","1,25","0,2"],1,
   "2 400 / 3 000 = 0,8, soit 80 pour cent."),
 q(9,"difficile","epargne","Avec un revenu de 3 000 euros et une consommation de 2 400 euros, l'épargne est de :",
   ["600 euros","2 400 euros","3 000 euros","400 euros"],0,
   "Épargne = revenu − consommation = 3 000 − 2 400 = 600 euros."),
 q(10,"moyen","engel","D'après la loi d'Engel, quand le revenu augmente, la part consacrée à l'alimentation :",
   ["Augmente","Diminue","Reste identique","Devient nulle"],1,
   "La loi d'Engel : la part de l'alimentation diminue quand le revenu augmente."),
 q(11,"facile","facteurs","Lequel de ces facteurs influence la consommation en plus du revenu ?",
   ["L'âge et la catégorie sociale","La couleur des billets de banque","Le nombre d'entreprises du pays","Le taux de change"],0,
   "L'âge, la catégorie sociale, les habitudes, la mode influencent aussi la consommation."),
 q(12,"moyen","pouvoir-achat","Le pouvoir d'achat désigne :",
   ["La quantité de biens et services qu'un revenu permet d'acheter","Le montant total des impôts","Le nombre de magasins","La valeur de l'épargne uniquement"],0,
   "Le pouvoir d'achat est ce que le revenu permet concrètement d'acheter, compte tenu des prix."),
 q(13,"difficile","pouvoir-achat","Si le revenu d'un ménage augmente de 2 pour cent et les prix de 2 pour cent, son pouvoir d'achat :",
   ["Augmente fortement","Reste à peu près stable","Diminue de moitié","Double"],1,
   "Revenu et prix augmentant au même rythme, le pouvoir d'achat reste à peu près stable."),
 q(14,"moyen","ostentatoire","La consommation ostentatoire (montrer sa richesse) a été analysée par :",
   ["Adam Smith","Thorstein Veblen","David Ricardo","John Keynes"],1,
   "Thorstein Veblen a analysé la consommation ostentatoire, destinée à afficher un statut social."),
 q(15,"moyen","valeur-symbolique","Quand on achète un vêtement de marque surtout pour l'image qu'il renvoie, on privilégie sa :",
   ["Valeur d'usage","Valeur symbolique","Valeur ajoutée","Valeur nulle"],1,
   "La valeur symbolique est ce que le bien dit de nous ; la valeur d'usage est son utilité concrète."),
 q(16,"facile","valeur-usage","La valeur d'usage d'un bien est :",
   ["Son utilité concrète pour satisfaire un besoin","Le message social qu'il envoie","Son prix de revente","Sa marque"],0,
   "La valeur d'usage est l'utilité concrète du bien pour satisfaire un besoin."),
 q(17,"moyen","imitation","Consommer comme les membres de son groupe pour montrer son appartenance illustre :",
   ["Un effet d'imitation","La loi de l'offre","Le calcul du PIB","Le revenu de transfert"],0,
   "Les effets d'imitation poussent à consommer comme les autres pour marquer une appartenance."),
 q(18,"difficile","engel","Un ménage voit son revenu augmenter fortement. D'après la loi d'Engel, quelle évolution est la plus probable ?",
   ["La part des dépenses alimentaires augmente","La part des dépenses de loisirs et de transports augmente","Il cesse toute consommation","Il n'épargne plus jamais"],1,
   "Avec un revenu plus élevé, la part de l'alimentation baisse et celle des loisirs, transports, santé augmente."),
 q(19,"moyen","revenu-disponible","Les revenus de transfert servent surtout à :",
   ["Payer les consommations intermédiaires des entreprises","Redistribuer des revenus via les prestations sociales","Fixer les prix des marchés","Mesurer le PIB"],1,
   "Les revenus de transfert (prestations sociales) redistribuent des revenus aux ménages."),
 q(20,"difficile","propension","Un ménage a une propension à consommer de 0,9. Cela signifie qu'il :",
   ["Épargne 90 pour cent de son revenu","Consomme 90 pour cent de son revenu et épargne 10 pour cent","Consomme la totalité de son revenu","Ne consomme rien"],1,
   "Une propension à consommer de 0,9 signifie 90 pour cent consommés et 10 pour cent épargnés."),
]
ex4 = [
 ex(1,"decouverte","revenu","Classe ces revenus (travail, capital ou transfert) : (a) un salaire, (b) une pension de retraite, (c) des intérêts d'un livret, (d) une allocation logement.",
   ["Travail = rémunère une activité ; capital = rémunère le patrimoine ; transfert = prestation sociale.","(a) salaire = travail ; (c) intérêts = capital.","(b) retraite et (d) allocation = transferts."],
   "Travail : salaire. Capital : intérêts. Transfert : retraite, allocation."),
 ex(2,"application","revenu-disponible","Un ménage a 2 000 euros de salaire, 100 euros d'intérêts, reçoit 200 euros de prestations et paie 300 euros d'impôts directs. Calcule son revenu disponible.",
   ["Revenu disponible = revenus + transferts − impôts directs.","2 000 + 100 + 200 − 300 = 2 000."],
   "2 000 euros."),
 ex(3,"application","propension","Un ménage a un revenu disponible de 2 500 euros et consomme 2 000 euros. Calcule sa propension à consommer.",
   ["Propension à consommer = consommation / revenu disponible.","2 000 / 2 500 = 0,8, soit 80 pour cent."],
   "0,8 (80 pour cent)."),
 ex(4,"application","epargne","Avec le ménage de l'exercice 3, calcule le montant épargné et la part épargnée.",
   ["Épargne = revenu − consommation.","2 500 − 2 000 = 500 euros.","Part épargnée = 500 / 2 500 = 0,2, soit 20 pour cent."],
   "500 euros épargnés, soit 20 pour cent."),
 ex(5,"decouverte","valeur","Pour un smartphone, distingue sa valeur d'usage et sa valeur symbolique.",
   ["Valeur d'usage = utilité concrète ; valeur symbolique = image renvoyée.","Valeur d'usage : téléphoner, envoyer des messages, prendre des photos.","Valeur symbolique : afficher un certain statut ou appartenir à un groupe."],
   "Usage : communiquer/photographier ; symbolique : image et statut."),
 ex(6,"application","engel","Deux ménages : l'un a un faible revenu et consacre 30 pour cent de son budget à l'alimentation, l'autre a un revenu élevé et 12 pour cent. Quelle loi cela illustre-t-il ?",
   ["Quand le revenu augmente, la part de l'alimentation diminue.","C'est la loi d'Engel."],
   "La loi d'Engel."),
 ex(7,"application","pouvoir-achat","Le salaire d'un ménage augmente de 3 pour cent tandis que les prix augmentent de 1 pour cent. Que peut-on dire de son pouvoir d'achat ?",
   ["Le pouvoir d'achat progresse si le revenu augmente plus vite que les prix.","3 pour cent − 1 pour cent : environ +2 pour cent.","Le pouvoir d'achat augmente d'environ 2 pour cent."],
   "Il augmente d'environ 2 pour cent."),
 ex(8,"approfondissement","facteurs","Cite trois facteurs, autres que le revenu, qui expliquent que deux ménages de même revenu consomment différemment.",
   ["La consommation dépend de multiples facteurs sociaux et culturels.","Exemples : l'âge, la catégorie sociale, les habitudes/culture, la mode, les effets d'imitation.","Trois facteurs suffisent : par exemple l'âge, la catégorie sociale et les effets de mode."],
   "Ex. : âge, catégorie sociale, effets de mode/imitation."),
 ex(9,"approfondissement","propension","Un ménage a une propension à consommer de 0,75 et un revenu disponible de 2 400 euros. Calcule sa consommation et son épargne.",
   ["Consommation = propension × revenu.","0,75 × 2 400 = 1 800 euros.","Épargne = 2 400 − 1 800 = 600 euros."],
   "Consommation 1 800 euros, épargne 600 euros."),
 ex(10,"approfondissement","synthese","Explique en quoi consommer peut être un moyen de marquer une appartenance ou une distinction sociale.",
   ["Les biens ont une valeur symbolique en plus de leur valeur d'usage.","En consommant certains biens, on envoie un signe aux autres (goûts, statut).","On peut ainsi montrer son appartenance à un groupe ou se distinguer d'un autre : la consommation participe à l'identité sociale."],
   "Les biens ont une valeur symbolique : ils signalent un statut ou une appartenance."),
]
cards4 = [
 c("Les trois sources de revenu","Revenus du travail, revenus du capital, revenus de transfert."),
 c("Revenu du capital : exemples","Loyers, intérêts, dividendes."),
 c("Revenu de transfert : exemples","Prestations sociales : allocations, retraites."),
 c("Formule du revenu disponible","Revenus d'activité + du capital + de transfert − impôts directs."),
 c("Que devient le revenu disponible ?","Il se partage entre consommation et épargne."),
 c("Épargne","La partie du revenu disponible qui n'est pas consommée."),
 c("Formule de la propension à consommer","Consommation / revenu disponible."),
 c("Loi d'Engel","Quand le revenu augmente, la part consacrée à l'alimentation diminue."),
 c("Pouvoir d'achat","La quantité de biens et services qu'un revenu permet d'acheter, compte tenu des prix."),
 c("Valeur d'usage / valeur symbolique","Usage = utilité concrète ; symbolique = ce que le bien dit de nous."),
 c("Consommation ostentatoire","Consommer pour afficher un statut social (analysée par Veblen)."),
 c("La consommation dépend-elle seulement du revenu ?","Non : âge, catégorie sociale, mode, culture, effets d'imitation jouent aussi."),
]
write_chapter("consommation-revenu", cid4,
 "La consommation et le revenu des ménages",
 ["Notion de revenu et de prix","Savoir calculer un pourcentage"], fiche4, q4, ex4, cards4)


# =====================================================================
# CHAPITRE 5 : socialisation-introduction
# =====================================================================
cid5 = "2nde-ses-socialisation-introduction"
fiche5 = r"""
# La socialisation : comment devient-on un être social ?

> On ne naît pas en sachant dire bonjour, tenir sa fourchette ou respecter un feu rouge : tout cela s'apprend. Ce long apprentissage des règles et des façons d'agir s'appelle la socialisation.

## 1. Qu'est-ce que la socialisation ?
La **socialisation** est le processus par lequel un individu apprend et intériorise les **normes**, les **valeurs** et les **rôles** de la société ou du groupe auquel il appartient. Grâce à elle, il devient capable de vivre en société.

- Une **norme** est une règle de conduite, explicite ou implicite (se laver les mains, respecter le code de la route).
- Une **valeur** est un idéal, un principe jugé important par un groupe (l'égalité, le respect, la solidarité).
- Un **rôle** est un ensemble de comportements attendus d'une personne selon sa position (le rôle d'élève, de parent).

La socialisation se fait par plusieurs mécanismes : l'**inculcation** (on transmet explicitement une règle), l'**imitation** (on reproduit ce que font les autres) et l'**interaction** (on apprend au contact des autres).

## 2. Les instances de socialisation
Les **instances (ou agents) de socialisation** sont les groupes et institutions qui participent à cet apprentissage :
- la **famille** : première instance, essentielle dans l'enfance ;
- l'**école** : transmet des savoirs mais aussi des règles de vie collective ;
- les **groupes de pairs** (amis, camarades du même âge) ;
- les **médias** et aujourd'hui les réseaux sociaux ;
- le **monde du travail**, les associations, etc.

## 3. Socialisation primaire et secondaire
On distingue deux temps :
- la **socialisation primaire** : celle de l'enfance, assurée surtout par la famille et l'école ; elle pose les bases (langage, premières normes) ;
- la **socialisation secondaire** : celle de l'âge adulte, liée notamment au travail, à la vie de couple ou aux groupes fréquentés ; elle peut prolonger ou transformer la socialisation primaire.

## 4. Une socialisation différenciée
La socialisation n'est pas la même pour tous : elle est **différenciée** selon le milieu social et le genre.
- Selon le **milieu social** : les familles ne transmettent pas les mêmes pratiques ni les mêmes attentes (loisirs, langage, rapport à l'école). Pierre Bourdieu parle d'**habitus** pour désigner l'ensemble des dispositions intériorisées qui orientent nos façons d'agir.
- Selon le **genre** : dès l'enfance, filles et garçons sont souvent orientés vers des jeux, des attitudes et des attentes différents (socialisation genrée).

Émile Durkheim a montré que la société « s'impose » à l'individu à travers l'éducation ; la socialisation explique ainsi comment les manières d'agir collectives deviennent des habitudes individuelles.

## À retenir
- Socialisation : apprentissage et intériorisation des normes, valeurs et rôles.
- Mécanismes : inculcation, imitation, interaction.
- Instances : famille, école, pairs, médias, travail.
- Socialisation primaire (enfance) et secondaire (âge adulte).
- La socialisation est différenciée selon le milieu social et le genre ; Bourdieu parle d'habitus.
"""
q5 = [
 q(1,"facile","socialisation","La socialisation est le processus par lequel un individu :",
   ["Gagne un revenu","Apprend et intériorise les normes, valeurs et rôles de la société","Achète des biens","Crée une entreprise"],1,
   "La socialisation est l'apprentissage et l'intériorisation des normes, valeurs et rôles."),
 q(2,"facile","norme","Une norme est :",
   ["Un idéal abstrait","Une règle de conduite","Un revenu","Un prix de marché"],1,
   "Une norme est une règle de conduite, explicite ou implicite."),
 q(3,"facile","valeur","Une valeur est :",
   ["Une règle précise à suivre","Un idéal, un principe jugé important par un groupe","Le prix d'un bien","Un rôle social"],1,
   "Une valeur est un idéal ou un principe (égalité, respect, solidarité)."),
 q(4,"moyen","norme-valeur","« Respecter le code de la route » est plutôt :",
   ["Une valeur","Une norme","Un rôle","Une instance"],1,
   "C'est une règle de conduite précise : une norme. La valeur associée serait par exemple la sécurité."),
 q(5,"moyen","norme-valeur","« La solidarité » est plutôt :",
   ["Une norme","Une valeur","Un rôle","Une sanction"],1,
   "La solidarité est un idéal, un principe : c'est une valeur."),
 q(6,"facile","role","Un rôle social désigne :",
   ["Le salaire d'une personne","L'ensemble des comportements attendus selon la position occupée","Une règle juridique","Un bien de consommation"],1,
   "Un rôle est l'ensemble des comportements attendus d'une personne selon sa position (élève, parent...)."),
 q(7,"facile","instances","Laquelle est une instance de socialisation ?",
   ["La famille","Le PIB","Le marché des changes","La valeur ajoutée"],0,
   "La famille est la première instance de socialisation."),
 q(8,"facile","instance-primaire","La première instance de socialisation dans l'enfance est en général :",
   ["Le monde du travail","La famille","Les médias","L'entreprise"],1,
   "La famille est la première et principale instance de socialisation de l'enfant."),
 q(9,"moyen","primaire-secondaire","La socialisation primaire se déroule surtout :",
   ["À l'âge adulte, au travail","Pendant l'enfance, surtout via la famille et l'école","Uniquement via les médias","Après la retraite"],1,
   "La socialisation primaire est celle de l'enfance, assurée surtout par la famille et l'école."),
 q(10,"moyen","primaire-secondaire","La socialisation secondaire concerne surtout :",
   ["La petite enfance","L'âge adulte (travail, couple, groupes fréquentés)","Les nourrissons","Les animaux"],1,
   "La socialisation secondaire se produit à l'âge adulte, liée au travail, au couple, etc."),
 q(11,"moyen","mecanismes","Reproduire les gestes d'un adulte que l'on observe relève surtout de :",
   ["L'inculcation","L'imitation","La sanction","Le calcul économique"],1,
   "Reproduire ce que font les autres relève de l'imitation."),
 q(12,"moyen","mecanismes","Quand un parent explique explicitement une règle à son enfant, il s'agit surtout d' :",
   ["Imitation","Inculcation","Interaction marchande","Autoconsommation"],1,
   "Transmettre explicitement une règle relève de l'inculcation."),
 q(13,"moyen","pairs","Le groupe de pairs désigne :",
   ["Les parents","Les personnes de statut ou d'âge proche (amis, camarades)","Les enseignants","Les employeurs"],1,
   "Les pairs sont les personnes de même âge ou de statut proche (camarades, amis)."),
 q(14,"difficile","differenciee","Dire que la socialisation est « différenciée » signifie qu'elle :",
   ["Est identique pour tout le monde","Varie selon le milieu social et le genre","Ne concerne que les adultes","N'existe pas"],1,
   "La socialisation est différenciée : elle varie selon le milieu social et le genre."),
 q(15,"difficile","habitus","Le concept d'habitus (dispositions intériorisées orientant nos actions) est dû à :",
   ["Émile Durkheim","Pierre Bourdieu","Max Weber","Adam Smith"],1,
   "Pierre Bourdieu a forgé le concept d'habitus."),
 q(16,"moyen","genre","La socialisation genrée désigne le fait que :",
   ["Filles et garçons sont souvent orientés vers des jeux et attentes différents","Tout le monde reçoit la même éducation","Le genre n'a aucun effet","Seuls les adultes sont socialisés"],0,
   "La socialisation genrée oriente dès l'enfance filles et garçons vers des rôles différents."),
 q(17,"facile","durkheim","Selon Émile Durkheim, la société s'impose à l'individu notamment par :",
   ["Le marché","L'éducation","Le prix","La monnaie"],1,
   "Durkheim insiste sur le rôle de l'éducation, par laquelle la société façonne l'individu."),
 q(18,"moyen","instances","Les réseaux sociaux et la télévision sont des instances de socialisation de type :",
   ["Familial","Médiatique","Scolaire","Professionnel"],1,
   "Médias et réseaux sociaux constituent une instance de socialisation médiatique."),
 q(19,"difficile","primaire-secondaire","La socialisation secondaire peut :",
   ["Effacer immédiatement toute la socialisation primaire","Prolonger ou transformer la socialisation primaire","Se produire uniquement chez les enfants","Remplacer la famille par le PIB"],1,
   "La socialisation secondaire prolonge ou transforme les acquis de la socialisation primaire."),
 q(20,"difficile","milieu-social","Que deux enfants de milieux sociaux différents aient des loisirs et un rapport à l'école différents illustre :",
   ["Une socialisation identique","Une socialisation différenciée selon le milieu social","L'absence de socialisation","La loi de l'offre"],1,
   "Ces écarts illustrent la socialisation différenciée selon le milieu social."),
]
ex5 = [
 ex(1,"decouverte","norme-valeur","Classe en norme ou valeur : (a) « dire bonjour en entrant », (b) « le respect d'autrui », (c) « ne pas tricher aux examens », (d) « l'égalité ».",
   ["Norme = règle de conduite précise ; valeur = idéal, principe.","(a) et (c) sont des normes.","(b) et (d) sont des valeurs."],
   "Normes : dire bonjour, ne pas tricher. Valeurs : respect, égalité."),
 ex(2,"decouverte","socialisation","Définis la socialisation en une phrase.",
   ["Reprends l'idée d'apprentissage et d'intériorisation.","La socialisation est le processus par lequel un individu apprend et intériorise les normes, valeurs et rôles de sa société."],
   "Le processus d'apprentissage et d'intériorisation des normes, valeurs et rôles."),
 ex(3,"application","instances","Pour chaque situation, indique l'instance de socialisation principale : (a) un enfant apprend à parler chez lui, (b) un élève apprend à lever la main en classe, (c) un adolescent adopte le vocabulaire de ses amis.",
   ["Repère l'institution ou le groupe en jeu.","(a) la famille ; (b) l'école ; (c) le groupe de pairs."],
   "(a) famille ; (b) école ; (c) pairs."),
 ex(4,"application","mecanismes","Associe chaque situation à un mécanisme (inculcation, imitation, interaction) : (a) un parent répète « on dit merci », (b) un enfant copie la façon de marcher d'un adulte.",
   ["Inculcation = transmission explicite ; imitation = reproduction de ce qu'on observe.","(a) inculcation ; (b) imitation."],
   "(a) inculcation ; (b) imitation."),
 ex(5,"decouverte","primaire-secondaire","Indique s'il s'agit de socialisation primaire ou secondaire : (a) apprendre à parler dans l'enfance, (b) apprendre les codes d'une entreprise à l'âge adulte.",
   ["Primaire = enfance ; secondaire = âge adulte.","(a) primaire ; (b) secondaire."],
   "(a) primaire ; (b) secondaire."),
 ex(6,"application","role","Décris deux comportements attendus dans le rôle d'élève.",
   ["Un rôle = comportements attendus selon la position.","Exemples : arriver à l'heure, écouter en classe, faire ses devoirs, respecter les enseignants et camarades."],
   "Ex. : arriver à l'heure et faire ses devoirs."),
 ex(7,"application","differenciee","Explique ce que signifie l'idée de « socialisation différenciée » et donne un exemple.",
   ["Différenciée = variable selon le milieu social et le genre.","La socialisation n'est pas la même pour tous.","Exemple : selon le milieu social, les loisirs proposés aux enfants diffèrent (sport, musique, lecture...)."],
   "Elle varie selon le milieu social et le genre (ex. : loisirs différents selon le milieu)."),
 ex(8,"approfondissement","genre","Donne deux exemples de socialisation genrée observables dès l'enfance.",
   ["La socialisation genrée oriente filles et garçons différemment.","Exemples : jouets différents proposés (poupées / voitures), couleurs associées, attentes de comportement (calme / turbulence)."],
   "Ex. : jouets différents et attentes de comportement différentes selon le sexe."),
 ex(9,"approfondissement","habitus","Explique brièvement ce que Pierre Bourdieu désigne par le terme habitus.",
   ["L'habitus renvoie à des dispositions intériorisées.","Ce sont les manières de penser, de sentir et d'agir intériorisées au cours de la socialisation.","Elles orientent nos comportements souvent sans qu'on en ait conscience et reflètent notre milieu social d'origine."],
   "L'ensemble des dispositions intériorisées qui orientent nos façons d'agir."),
 ex(10,"approfondissement","durkheim","Explique l'idée d'Émile Durkheim selon laquelle « la société s'impose à l'individu » à travers l'éducation.",
   ["Durkheim voit la socialisation comme la transmission des façons d'agir collectives.","Par l'éducation, l'enfant intériorise des règles et des manières d'agir qui existaient avant lui.","Ces façons d'agir collectives deviennent des habitudes individuelles : la société façonne l'individu."],
   "Par l'éducation, l'individu intériorise des règles collectives qui le précèdent."),
]
cards5 = [
 c("Qu'est-ce que la socialisation ?","Le processus par lequel un individu apprend et intériorise les normes, valeurs et rôles de sa société."),
 c("Qu'est-ce qu'une norme ?","Une règle de conduite, explicite ou implicite (ex. : respecter le code de la route)."),
 c("Qu'est-ce qu'une valeur ?","Un idéal, un principe jugé important par un groupe (ex. : l'égalité, la solidarité)."),
 c("Qu'est-ce qu'un rôle ?","L'ensemble des comportements attendus d'une personne selon sa position (élève, parent)."),
 c("Les mécanismes de la socialisation","Inculcation, imitation, interaction."),
 c("Les instances de socialisation","Famille, école, groupes de pairs, médias, monde du travail."),
 c("Socialisation primaire","Celle de l'enfance, assurée surtout par la famille et l'école."),
 c("Socialisation secondaire","Celle de l'âge adulte (travail, couple, groupes) ; prolonge ou transforme la primaire."),
 c("Socialisation différenciée","Elle varie selon le milieu social et le genre."),
 c("L'habitus (Bourdieu)","L'ensemble des dispositions intériorisées qui orientent nos façons d'agir."),
 c("Socialisation genrée","Filles et garçons sont orientés dès l'enfance vers des rôles et attentes différents."),
 c("La thèse de Durkheim","La société s'impose à l'individu par l'éducation : les façons d'agir collectives deviennent individuelles."),
]
write_chapter("socialisation-introduction", cid5,
 "La socialisation : comment devient-on un être social ?",
 ["Notion de groupe social","Vocabulaire : norme, règle, valeur"], fiche5, q5, ex5, cards5)


# =====================================================================
# CHAPITRE 6 : opinion-publique
# =====================================================================
cid6 = "2nde-ses-opinion-publique"
fiche6 = r"""
# Comment se forme et s'exprime l'opinion publique ?

> Avant chaque élection, les sondages annoncent ce que « pense l'opinion ». Mais qu'est-ce que l'opinion publique, comment se forme-t-elle, et que valent vraiment les sondages ?

## 1. Qu'est-ce que l'opinion publique ?
L'**opinion publique** désigne l'ensemble des jugements et des attitudes partagés, à un moment donné, par une population sur des questions d'intérêt commun (une réforme, un sujet de société). Ce n'est pas une réalité figée : elle est diverse, changeante et parfois contradictoire.

L'opinion publique s'exprime de multiples façons : le **vote**, les **manifestations** et pétitions, les **débats** dans les médias et sur les réseaux sociaux, et les **sondages**.

## 2. Comment se forme l'opinion ?
L'opinion de chacun se construit sous l'influence de plusieurs facteurs :
- la **socialisation** (famille, milieu social, école) ;
- les **médias**, qui sélectionnent et hiérarchisent l'information : en choisissant les sujets mis en avant, ils contribuent à fixer l'**agenda** (les thèmes dont on parle) ;
- les **discussions** avec l'entourage et les groupes d'appartenance ;
- les **réseaux sociaux**, qui accélèrent la circulation des messages mais peuvent enfermer chacun dans une **bulle** d'informations conformes à ses idées.

## 3. Les sondages d'opinion
Un **sondage** est une enquête menée auprès d'un **échantillon** (un petit groupe) censé représenter une population plus large. Comme on n'interroge pas tout le monde, le résultat est une **estimation**, assortie d'une **marge d'erreur**.

Pour qu'un sondage soit fiable, l'échantillon doit être **représentatif** : sa composition (âge, sexe, catégorie sociale, région...) doit refléter celle de la population, souvent par la **méthode des quotas**.

Exemple de lecture : si un sondage donne 52 pour cent pour une réponse avec une marge d'erreur de 3 points, la « vraie » valeur se situe environ entre 49 et 55 pour cent : on ne peut donc pas conclure avec certitude.

## 4. Sondages : intérêts et limites
Les sondages sont utiles : ils donnent une photographie de l'opinion à un instant donné et nourrissent le débat démocratique. Mais ils ont des **limites** :
- la **formulation** de la question peut orienter les réponses ;
- un échantillon mal construit ou trop petit fausse le résultat ;
- les sondages ne mesurent qu'une opinion **à un instant t**, qui peut changer ;
- ils peuvent influencer l'opinion elle-même (effet d'entraînement vers le favori, ou au contraire mobilisation en faveur de l'outsider).

Le sociologue Pierre Bourdieu a critiqué l'idée qu'il existerait une opinion publique unique et homogène, en soulignant que tout le monde n'a pas d'avis sur toutes les questions et que les opinions n'ont pas toutes le même poids.

## À retenir
- Opinion publique : jugements partagés par une population sur des questions d'intérêt commun ; diverse et changeante.
- Elle se forme via la socialisation, les médias (effet d'agenda) et les discussions.
- Un sondage interroge un échantillon représentatif : le résultat est une estimation avec une marge d'erreur.
- Limites : formulation de la question, taille et représentativité de l'échantillon, opinion mesurée à un instant t.
- Bourdieu conteste l'idée d'une opinion publique unique et homogène.
"""
q6 = [
 q(1,"facile","opinion","L'opinion publique désigne :",
   ["Le résultat officiel d'une élection","Les jugements et attitudes partagés par une population sur des questions d'intérêt commun","La loi votée par le Parlement","Le PIB d'un pays"],1,
   "L'opinion publique est l'ensemble des jugements partagés à un moment donné sur des questions d'intérêt commun."),
 q(2,"facile","opinion","L'opinion publique est :",
   ["Figée et unanime","Diverse et changeante","Toujours mesurable avec certitude","Fixée par l'État"],1,
   "L'opinion publique est diverse, changeante et parfois contradictoire."),
 q(3,"facile","expression","Lequel de ces éléments est un mode d'expression de l'opinion ?",
   ["Le vote","La valeur ajoutée","Le prix d'équilibre","La consommation intermédiaire"],0,
   "Le vote, les manifestations, les débats et les sondages expriment l'opinion."),
 q(4,"facile","sondage","Un sondage interroge :",
   ["Toute la population","Un échantillon censé représenter la population","Uniquement des experts","Les seuls élus"],1,
   "Un sondage interroge un échantillon censé représenter une population plus large."),
 q(5,"moyen","echantillon","Un échantillon est dit représentatif quand :",
   ["Il contient le plus de personnes possible","Sa composition reflète celle de la population","Il ne comprend que des volontaires","Tout le monde y répond la même chose"],1,
   "Un échantillon est représentatif si sa composition (âge, sexe, catégorie sociale...) reflète la population."),
 q(6,"moyen","quotas","La méthode des quotas sert à :",
   ["Fixer le prix d'un sondage","Construire un échantillon représentatif","Empêcher les gens de voter","Mesurer le PIB"],1,
   "La méthode des quotas construit un échantillon dont la structure reflète celle de la population."),
 q(7,"moyen","marge-erreur","Un résultat de sondage est :",
   ["Une valeur exacte et certaine","Une estimation assortie d'une marge d'erreur","Toujours faux","Un vote officiel"],1,
   "Comme on n'interroge qu'un échantillon, le résultat est une estimation avec une marge d'erreur."),
 q(8,"difficile","marge-erreur","Un sondage donne 52 pour cent avec une marge d'erreur de 3 points. La « vraie » valeur est probablement :",
   ["Exactement 52 pour cent","Entre 49 et 55 pour cent environ","Exactement 55 pour cent","Impossible à situer"],1,
   "52 pour cent ± 3 points : la vraie valeur se situe environ entre 49 et 55 pour cent."),
 q(9,"difficile","marge-erreur","Avec 52 pour cent et une marge d'erreur de 3 points, peut-on affirmer avec certitude que la réponse est majoritaire (plus de 50 pour cent) ?",
   ["Oui, à coup sûr","Non, car la fourchette (49 à 55) inclut des valeurs sous 50 pour cent","Oui, car 52 dépasse 50","Non, le sondage est forcément faux"],1,
   "La fourchette 49 à 55 inclut des valeurs inférieures à 50 : on ne peut pas conclure avec certitude."),
 q(10,"moyen","medias","En choisissant les sujets qu'ils mettent en avant, les médias contribuent à :",
   ["Fixer l'agenda (les thèmes dont on parle)","Calculer le PIB","Fixer les prix","Voter à la place des citoyens"],0,
   "L'effet d'agenda : les médias influencent les thèmes dont on discute en les sélectionnant."),
 q(11,"moyen","formation","Lequel de ces facteurs contribue à former l'opinion d'un individu ?",
   ["La socialisation (famille, milieu social)","Le taux de variation du PIB","La loi de l'offre","La marge d'erreur"],0,
   "L'opinion se forme via la socialisation, les médias et les discussions."),
 q(12,"moyen","reseaux","Les réseaux sociaux peuvent enfermer un utilisateur dans une « bulle » lorsqu' :",
   ["Ils lui montrent surtout des contenus conformes à ses idées","Ils suppriment toute information","Ils augmentent les prix","Ils calculent le PIB"],0,
   "La bulle informationnelle expose surtout à des contenus qui confortent les idées de l'utilisateur."),
 q(13,"difficile","limites","Pourquoi la formulation d'une question de sondage est-elle importante ?",
   ["Elle n'a aucun effet","Elle peut orienter les réponses des personnes interrogées","Elle fixe le prix du sondage","Elle change la population totale"],1,
   "Une question formulée de façon orientée peut influencer les réponses et biaiser le résultat."),
 q(14,"moyen","limites","Un sondage mesure l'opinion :",
   ["Pour toujours","À un instant donné, susceptible de changer","Uniquement dans le futur","Sans aucune limite"],1,
   "Un sondage est une photographie à un instant t : l'opinion peut ensuite évoluer."),
 q(15,"difficile","effet-sondage","Les sondages peuvent influencer l'opinion, par exemple par :",
   ["Un effet d'entraînement vers le candidat favori","Une hausse du PIB","La méthode des quotas","La valeur ajoutée"],0,
   "Publier un sondage peut créer un effet d'entraînement vers le favori (ou mobiliser pour l'outsider)."),
 q(16,"moyen","bourdieu","Pierre Bourdieu a notamment critiqué :",
   ["L'idée d'une opinion publique unique et homogène","La théorie des avantages comparatifs","La loi de l'offre","Le calcul du PIB"],0,
   "Bourdieu conteste l'idée d'une opinion publique unique : tout le monde n'a pas d'avis, et les avis ne se valent pas tous."),
 q(17,"facile","expression","Une manifestation est :",
   ["Un mode d'expression de l'opinion","Un impôt","Un sondage","Une consommation intermédiaire"],0,
   "La manifestation est l'un des modes d'expression de l'opinion publique."),
 q(18,"difficile","echantillon","À résultat égal, un sondage réalisé sur un échantillon très petit est :",
   ["Plus fiable","Moins fiable (marge d'erreur plus grande)","Toujours exact","Sans marge d'erreur"],1,
   "Plus l'échantillon est petit, plus la marge d'erreur est grande et le résultat incertain."),
 q(19,"moyen","utilite","Un intérêt reconnu des sondages est de :",
   ["Donner une photographie de l'opinion à un instant donné","Remplacer les élections","Supprimer le débat","Fixer les lois"],0,
   "Les sondages fournissent une photographie de l'opinion et nourrissent le débat, sans remplacer le vote."),
 q(20,"difficile","interpretation","Deux sondages sur le même sujet donnent 48 et 51 pour cent, avec une marge d'erreur de 3 points chacun. On peut conclure que :",
   ["Les résultats sont contradictoires","Les résultats sont compatibles compte tenu des marges d'erreur","Le premier sondage est faux","L'opinion a forcément changé"],1,
   "Les fourchettes (45 à 51 et 48 à 54) se recouvrent : les résultats sont compatibles, pas contradictoires."),
]
ex6 = [
 ex(1,"decouverte","opinion","Définis l'opinion publique en une phrase.",
   ["Reprends l'idée de jugements partagés sur des questions communes.","L'opinion publique est l'ensemble des jugements et attitudes partagés par une population sur des questions d'intérêt commun."],
   "Les jugements partagés par une population sur des questions d'intérêt commun."),
 ex(2,"decouverte","expression","Cite trois modes d'expression de l'opinion publique.",
   ["Pense aux façons dont les citoyens font connaître leur avis.","Exemples : le vote, les manifestations et pétitions, les débats dans les médias, les sondages."],
   "Ex. : le vote, les manifestations, les sondages."),
 ex(3,"application","sondage","Explique pourquoi le résultat d'un sondage n'est pas une valeur exacte.",
   ["On n'interroge qu'un échantillon, pas toute la population.","Le résultat est donc une estimation, assortie d'une marge d'erreur."],
   "Parce qu'il repose sur un échantillon : c'est une estimation avec une marge d'erreur."),
 ex(4,"application","marge-erreur","Un sondage donne 47 pour cent avec une marge d'erreur de 2 points. Donne la fourchette de la « vraie » valeur.",
   ["On applique la marge de part et d'autre : 47 − 2 et 47 + 2.","La fourchette va d'environ 45 à 49 pour cent."],
   "Environ 45 à 49 pour cent."),
 ex(5,"application","marge-erreur","Un candidat est crédité de 51 pour cent avec une marge d'erreur de 3 points. Peut-on affirmer qu'il sera élu ? Justifie.",
   ["On calcule la fourchette : 48 à 54 pour cent.","Elle inclut des valeurs inférieures à 50 pour cent.","On ne peut donc pas l'affirmer avec certitude."],
   "Non : la fourchette (48 à 54) inclut des valeurs sous 50 pour cent."),
 ex(6,"decouverte","echantillon","Explique ce qu'est un échantillon représentatif.",
   ["Représentatif = sa composition reflète celle de la population.","Un échantillon représentatif reproduit la structure de la population (âge, sexe, catégorie sociale, région...)."],
   "Un échantillon dont la composition reflète celle de la population."),
 ex(7,"application","medias","Explique en quoi consiste l'« effet d'agenda » des médias.",
   ["Les médias sélectionnent et hiérarchisent l'information.","En choisissant les sujets mis en avant, ils influencent les thèmes dont l'opinion débat.","Ils contribuent ainsi à fixer l'agenda : de quoi on parle."],
   "En sélectionnant les sujets, les médias fixent les thèmes dont on parle."),
 ex(8,"approfondissement","limites","Cite trois limites des sondages d'opinion.",
   ["Pense à la question, à l'échantillon et au moment.","La formulation de la question peut orienter les réponses.","Un échantillon mal construit ou trop petit fausse le résultat.","Le sondage ne mesure l'opinion qu'à un instant t, qui peut changer."],
   "Ex. : formulation de la question, échantillon peu fiable, opinion mesurée à un instant t."),
 ex(9,"approfondissement","interpretation","Deux sondages donnent 49 et 52 pour cent, avec une marge d'erreur de 3 points. Ces résultats sont-ils vraiment contradictoires ?",
   ["On calcule les fourchettes : 46 à 52 et 49 à 55.","Les fourchettes se recouvrent (entre 49 et 52).","Les résultats sont donc compatibles, pas contradictoires."],
   "Non : les fourchettes se recouvrent, les résultats sont compatibles."),
 ex(10,"approfondissement","bourdieu","Résume la critique de Pierre Bourdieu à l'égard de l'idée d'« opinion publique ».",
   ["Bourdieu conteste l'existence d'une opinion publique unique et homogène.","Tout le monde n'a pas d'avis sur toutes les questions.","Et toutes les opinions n'ont pas le même poids : parler d'UNE opinion publique masque cette diversité."],
   "Il conteste l'idée d'une opinion unique : les avis diffèrent et ne pèsent pas tous pareil."),
]
cards6 = [
 c("Qu'est-ce que l'opinion publique ?","Les jugements et attitudes partagés par une population sur des questions d'intérêt commun."),
 c("L'opinion publique est-elle stable ?","Non : elle est diverse, changeante et parfois contradictoire."),
 c("Comment s'exprime l'opinion ?","Par le vote, les manifestations et pétitions, les débats, les médias et les sondages."),
 c("Comment se forme l'opinion ?","Par la socialisation, les médias (effet d'agenda) et les discussions avec l'entourage."),
 c("Qu'est-ce qu'un sondage ?","Une enquête menée auprès d'un échantillon censé représenter une population."),
 c("Échantillon représentatif","Un échantillon dont la composition reflète celle de la population (souvent par la méthode des quotas)."),
 c("Qu'est-ce que la marge d'erreur ?","L'intervalle d'incertitude autour du résultat : le sondage donne une estimation, pas une valeur exacte."),
 c("Lire 52 pour cent ± 3 points","La vraie valeur est probablement entre 49 et 55 pour cent : conclusion incertaine."),
 c("L'effet d'agenda des médias","En sélectionnant les sujets mis en avant, les médias fixent les thèmes dont on parle."),
 c("Trois limites des sondages","Formulation de la question, échantillon peu fiable, opinion mesurée à un instant t."),
 c("Les sondages peuvent-ils influencer l'opinion ?","Oui : effet d'entraînement vers le favori, ou mobilisation pour l'outsider."),
 c("La critique de Bourdieu","Il conteste l'idée d'une opinion publique unique et homogène."),
]
write_chapter("opinion-publique", cid6,
 "Comment se forme et s'exprime l'opinion publique ?",
 ["Notion de média et de citoyenneté","Savoir lire un pourcentage"], fiche6, q6, ex6, cards6)

print("--- Tous les chapitres generes ---")
