# -*- coding: utf-8 -*-
from gen_ses_tale import q, e, emit

slug = "mobilite-sociale"
cid = "tale-ses-mobilite-sociale"
titre = "La mobilité sociale"
prereq = ["Nomenclature des PCS", "Lecture d'un tableau à double entrée et de pourcentages"]

fiche = """# La mobilité sociale

> La position sociale se transmet-elle de génération en génération ? La mobilité sociale mesure les mouvements entre positions et interroge l'égalité des chances.

## 1. Définir la mobilité sociale
La **mobilité sociale** désigne le changement de position sociale des individus. On distingue :
- la mobilité **intergénérationnelle** : comparaison entre la position de l'enfant et celle de ses parents (souvent le père, parfois les deux) ;
- la mobilité **intragénérationnelle** : évolution de la position d'un individu au cours de sa propre vie active.

On distingue aussi la mobilité **verticale** (ascendante ou descendante) de la mobilité **horizontale** (changement de position sans changement de niveau hiérarchique), et l'**immobilité** ou **reproduction** sociale (rester dans la position d'origine).

## 2. Les tables de mobilité
On étudie la mobilité intergénérationnelle à l'aide des **tables de mobilité**, tableaux à double entrée croisant la PCS d'origine (parents) et la PCS d'arrivée (individus). Deux lectures :
- la **table de destinée** : que deviennent les enfants d'une origine donnée ? (lecture en ligne) ;
- la **table de recrutement** : d'où viennent les personnes d'une position donnée ? (lecture en colonne).
Les pourcentages se lisent avec attention à la base de calcul.

## 3. Mobilité observée, structurelle et fluidité
La mobilité **observée** (ou brute) additionne deux composantes :
- la mobilité **structurelle** : liée à la transformation de la structure des emplois (par exemple la hausse des emplois qualifiés, qui « fait de la place ») ;
- la mobilité **nette** ou **d'échange** : mouvements indépendants des changements de structure.
La **fluidité sociale** mesure l'égalité des chances d'accès aux différentes positions, indépendamment de la structure. Une société peut connaître une forte mobilité (surtout structurelle) tout en restant peu fluide.

## 4. Reproduction et déterminants
La transmission des positions repose sur plusieurs ressources : le **capital économique**, le **capital culturel** et le **capital social** (Pierre Bourdieu). L'**école** joue un rôle ambivalent : elle peut favoriser la mobilité mais aussi reproduire les inégalités. Le **diplôme** est devenu central, tout en connaissant des phénomènes de **déclassement** (occuper une position inférieure à celle attendue au regard de son diplôme). Le **genre** et l'origine sociale continuent de peser sur les trajectoires.

## À retenir
- Mobilité intergénérationnelle (entre générations) vs intragénérationnelle (au cours de la vie).
- Mobilité verticale (ascendante/descendante), horizontale, et immobilité/reproduction.
- Tables de mobilité : destinée (en ligne) et recrutement (en colonne).
- Mobilité observée = structurelle + nette ; la fluidité mesure l'égalité des chances.
- Bourdieu : capitaux économique, culturel, social ; rôle ambivalent de l'école.
"""

qs = [
q(1,"facile","definition","La mobilité sociale intergénérationnelle compare la position d'un individu :",
  ["à celle de ses voisins","à celle de ses parents","à son revenu de départ","à la moyenne nationale"],1,
  "La mobilité intergénérationnelle compare la position sociale de l'individu à celle de ses parents."),
q(2,"facile","intragenerationnelle","La mobilité intragénérationnelle désigne :",
  ["le changement de position entre parents et enfants","l'évolution de la position d'un individu au cours de sa vie active","l'absence de mobilité","le changement de pays"],1,
  "La mobilité intragénérationnelle concerne l'évolution de la position d'un même individu au fil de sa carrière."),
q(3,"moyen","verticale","Une mobilité ascendante est une mobilité :",
  ["horizontale","verticale vers une position plus élevée","descendante","nulle"],1,
  "La mobilité verticale ascendante correspond à l'accès à une position socialement plus élevée que celle d'origine."),
q(4,"moyen","horizontale","Une mobilité horizontale correspond à :",
  ["une hausse de position","un changement de position sans changement de niveau hiérarchique","une baisse de position","l'immobilité"],1,
  "La mobilité horizontale change la catégorie sans modifier le niveau dans la hiérarchie sociale."),
q(5,"moyen","reproduction","La reproduction sociale (immobilité) désigne le fait :",
  ["de changer de position","d'occuper la même position sociale que ses parents","de monter dans la hiérarchie","d'émigrer"],1,
  "La reproduction sociale est le maintien de l'individu dans la position sociale de ses parents."),
q(6,"difficile","destinee","Une table de destinée répond à la question :",
  ["d'où viennent les personnes d'une position donnée ?","que deviennent les enfants issus d'une origine sociale donnée ?","quel est le revenu médian ?","quel est le taux de chômage ?"],1,
  "La table de destinée (lecture en ligne) indique ce que deviennent les enfants d'une origine donnée."),
q(7,"difficile","recrutement","Une table de recrutement répond à la question :",
  ["que deviennent les enfants d'une origine donnée ?","d'où viennent (quelle origine) les individus occupant une position donnée ?","quel est le PIB ?","combien y a-t-il de classes ?"],1,
  "La table de recrutement (lecture en colonne) indique l'origine sociale des occupants d'une position."),
q(8,"moyen","structurelle","La mobilité structurelle est due :",
  ["à la seule volonté des individus","à la transformation de la structure des emplois","à l'immobilité","à la baisse de la population"],1,
  "La mobilité structurelle résulte de l'évolution de la structure des emplois (ex. plus d'emplois qualifiés)."),
q(9,"difficile","fluidite","La fluidité sociale mesure :",
  ["le nombre total de mobiles","l'égalité des chances d'accès aux positions, indépendamment de la structure","le revenu moyen","la taille des classes"],1,
  "La fluidité renvoie à l'égalité des chances entre origines, une fois neutralisés les effets de structure."),
q(10,"difficile","observee","La mobilité observée (brute) se décompose en :",
  ["mobilité structurelle et mobilité nette (d'échange)","revenus et patrimoine","chômage et emploi","import et export"],1,
  "La mobilité observée = mobilité structurelle + mobilité nette (ou d'échange)."),
q(11,"moyen","bourdieu-capitaux","Selon Bourdieu, la transmission des positions repose notamment sur :",
  ["le seul capital économique","les capitaux économique, culturel et social","le hasard uniquement","la taille des individus"],1,
  "Bourdieu distingue les capitaux économique, culturel et social, transmis et convertibles."),
q(12,"moyen","capital-culturel","Le capital culturel comprend notamment :",
  ["le patrimoine financier","les savoirs, diplômes et pratiques culturelles","les relations professionnelles","les revenus salariaux"],1,
  "Le capital culturel regroupe savoirs, diplômes et dispositions culturelles, transmis surtout par la famille."),
q(13,"moyen","capital-social","Le capital social désigne :",
  ["le montant du salaire","le réseau de relations mobilisables","le diplôme","le logement"],1,
  "Le capital social est l'ensemble des relations et réseaux qu'un individu peut mobiliser."),
q(14,"difficile","declassement","Le déclassement désigne la situation où un individu :",
  ["occupe une position supérieure à celle de ses parents","occupe une position inférieure à celle attendue au regard de son diplôme ou de son origine","n'a pas de diplôme","change de région"],1,
  "Le déclassement, c'est occuper une position inférieure à celle qu'on pouvait attendre (par le diplôme ou l'origine)."),
q(15,"moyen","role-ecole","Concernant la mobilité sociale, l'école joue un rôle :",
  ["exclusivement de reproduction","ambivalent : elle peut favoriser la mobilité mais aussi reproduire les inégalités","nul","uniquement économique"],1,
  "L'école a un rôle ambivalent : facteur de mobilité par le diplôme, mais aussi de reproduction des inégalités."),
q(16,"facile","diplome","Dans les sociétés contemporaines, le diplôme est devenu :",
  ["sans importance pour la position sociale","un déterminant central de la position sociale","réservé aux plus âgés","interdit aux femmes"],1,
  "Le diplôme est devenu un déterminant central de l'accès aux positions sociales."),
q(17,"moyen","lecture-table","Dans une table de destinée, une cellule indique par exemple que 40 pour cent des enfants d'ouvriers sont devenus ouvriers. Cette valeur relève :",
  ["du recrutement","de la destinée","du revenu médian","du coefficient de Gini"],1,
  "Lire « parmi les enfants d'ouvriers, 40 pour cent sont ouvriers » est une lecture de destinée (par origine)."),
q(18,"difficile","mobilite-structurelle-limite","Une société peut afficher une forte mobilité observée tout en restant peu fluide car :",
  ["la mobilité est alors surtout structurelle, sans réelle égalité des chances","la fluidité et la mobilité sont identiques","il n'y a jamais de reproduction","les emplois ne changent jamais"],1,
  "Une mobilité liée surtout aux changements de structure peut coexister avec une faible égalité des chances (faible fluidité)."),
q(19,"moyen","descendante","La mobilité descendante correspond au fait :",
  ["d'accéder à une position plus élevée que ses parents","d'occuper une position moins élevée que ses parents","de rester immobile","de changer de secteur au même niveau"],1,
  "La mobilité descendante désigne l'accès à une position socialement inférieure à celle des parents."),
q(20,"moyen","genre","Concernant les trajectoires sociales, le genre :",
  ["n'a aucun effet","continue d'influencer les parcours (accès aux positions, carrières)","détermine à lui seul la position","concerne uniquement les revenus"],1,
  "Le genre pèse sur les trajectoires (accès aux positions, carrières, salaires), aux côtés de l'origine sociale."),
]

exos = [
e(1,"decouverte","types","Associe chaque cas au bon type de mobilité : (a) fils d'ouvrier devenu cadre, (b) cadre devenu ouvrier, (c) enfant d'employé resté employé.",
  ["(a) accès à une position plus élevée = mobilité verticale ascendante.","(b) position plus basse = mobilité descendante.","(c) même position que le parent = immobilité (reproduction)."],
  "(a) ascendante, (b) descendante, (c) immobilité."),
e(2,"decouverte","tables","Explique la différence entre table de destinée et table de recrutement en une phrase chacune.",
  ["Destinée (en ligne) : ce que deviennent les enfants d'une origine donnée.","Recrutement (en colonne) : quelle est l'origine sociale des personnes d'une position donnée."],
  "Destinée : ce que deviennent les enfants d'une origine ; recrutement : d'où viennent les occupants d'une position."),
e(3,"application","lecture-destinee","Parmi 500 enfants de cadres, 300 sont devenus cadres. Quelle part cela représente-t-il ? S'agit-il de reproduction ?",
  ["Part = 300 / 500 × 100 = 60 pour cent.","Ces enfants occupent la même position que leurs parents.","Il s'agit de reproduction sociale (immobilité)."],
  "60 pour cent ; c'est de la reproduction sociale."),
e(4,"application","recrutement","Parmi 1 000 cadres, 400 ont un père cadre. Calcule la part et précise le type de lecture.",
  ["Part = 400 / 1 000 × 100 = 40 pour cent.","On regarde l'origine des occupants d'une position : c'est une lecture de recrutement."],
  "40 pour cent ; lecture de recrutement."),
e(5,"decouverte","decomposition","Dans quelles deux composantes décompose-t-on la mobilité observée ?",
  ["La mobilité observée additionne deux parties.","La mobilité structurelle (liée aux changements de la structure des emplois) et la mobilité nette (d'échange)."],
  "Mobilité structurelle et mobilité nette (d'échange)."),
e(6,"application","structurelle","La mobilité observée d'un pays est de 65 pour cent ; la mobilité structurelle est estimée à 25 points. Quelle est la part de la mobilité nette ?",
  ["Mobilité nette = mobilité observée − mobilité structurelle.","65 − 25 = 40.","La mobilité nette représente 40 points de pourcentage."],
  "40 points de pourcentage."),
e(7,"approfondissement","fluidite","Explique pourquoi une forte mobilité observée ne signifie pas forcément une forte égalité des chances.",
  ["Une part de la mobilité vient des changements de structure des emplois (plus de postes qualifiés), pas de l'égalité des chances.","Une fois neutralisé cet effet de structure, la fluidité peut rester faible : les chances d'accès restent inégales selon l'origine."],
  "Parce qu'une part de la mobilité est structurelle ; la fluidité (égalité des chances) peut rester faible."),
e(8,"decouverte","bourdieu","Cite les trois formes de capital identifiées par Bourdieu.",
  ["Bourdieu analyse la transmission par plusieurs ressources.","Capital économique, capital culturel et capital social."],
  "Capital économique, culturel et social."),
e(9,"application","declassement","Un diplômé du supérieur occupe un emploi habituellement tenu par des non-diplômés. Comment nomme-t-on cette situation ?",
  ["La position occupée est inférieure à celle attendue au vu du diplôme.","On parle de déclassement."],
  "Un déclassement."),
e(10,"approfondissement","ecole","Explique en deux lignes le rôle ambivalent de l'école dans la mobilité sociale.",
  ["D'un côté, l'école délivre des diplômes qui permettent l'ascension sociale, favorisant la mobilité.","De l'autre, la réussite dépend en partie du capital culturel transmis par la famille, ce qui reproduit les inégalités."],
  "L'école favorise la mobilité par le diplôme mais reproduit aussi les inégalités via le capital culturel familial."),
]

cartes = [
{"recto":"Qu'est-ce que la mobilité intergénérationnelle ?","verso":"La comparaison de la position sociale d'un individu avec celle de ses parents."},
{"recto":"Mobilité intragénérationnelle ?","verso":"L'évolution de la position d'un même individu au cours de sa vie active."},
{"recto":"Mobilité verticale vs horizontale ?","verso":"Verticale : changement de niveau (ascendante/descendante). Horizontale : changement sans changement de niveau."},
{"recto":"Qu'est-ce que la reproduction sociale ?","verso":"Le fait d'occuper la même position sociale que ses parents (immobilité)."},
{"recto":"Table de destinée ?","verso":"Lecture en ligne : ce que deviennent les enfants d'une origine sociale donnée."},
{"recto":"Table de recrutement ?","verso":"Lecture en colonne : l'origine sociale des personnes occupant une position donnée."},
{"recto":"Qu'est-ce que la mobilité structurelle ?","verso":"La mobilité liée à la transformation de la structure des emplois."},
{"recto":"Décomposition de la mobilité observée ?","verso":"Mobilité observée = mobilité structurelle + mobilité nette (d'échange)."},
{"recto":"Que mesure la fluidité sociale ?","verso":"L'égalité des chances d'accès aux positions, indépendamment des changements de structure."},
{"recto":"Les trois capitaux de Bourdieu ?","verso":"Capital économique, capital culturel et capital social."},
{"recto":"Qu'est-ce que le déclassement ?","verso":"Occuper une position inférieure à celle attendue au regard de son diplôme ou de son origine."},
{"recto":"Rôle de l'école dans la mobilité ?","verso":"Ambivalent : elle favorise la mobilité par le diplôme mais reproduit aussi les inégalités."},
]

emit(slug, cid, titre, prereq, fiche, qs, exos, cartes)
