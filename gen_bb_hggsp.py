# -*- coding: utf-8 -*-
import json, os

OUT = "/tmp/kamal-campus/quiz"

# Chaque question : (difficulte, notion, enonce, bonne_reponse, [d1,d2,d3], index_cible)
# Les choix sont construits en insérant la bonne réponse à index_cible.

def build(qs):
    out = []
    for i, (diff, notion, enonce, bonne, distract, idx) in enumerate(qs, start=1):
        choix = list(distract)
        choix.insert(idx, bonne)
        assert len(choix) == 4, enonce
        assert len(set(choix)) == 4, enonce
        out.append({
            "id": i,
            "difficulte": diff,
            "notion": notion,
            "enonce": enonce,
            "choix": choix,
            "reponse": idx,
            "explication": ""  # rempli plus bas via expl
        })
    return out

# Structure : liste de 10 fichiers, chacun : (niveau, [ (q..., expl) x12 ])
# On sépare l'explication pour la lisibilité.

FILES = []

# ---------- Fichier 11 (premiere) ----------
FILES.append(("premiere", [
    ("facile","frontieres","Les traités de Westphalie, qui posent les bases de l'État souverain moderne, datent de :","1648",["1492","1789","1815"],1,
     "Les traités de Westphalie (1648) mettent fin à la guerre de Trente Ans et consacrent la souveraineté des États."),
    ("moyen","guerre-paix","Selon Clausewitz, la guerre est la continuation de la politique par :","d'autres moyens",["la diplomatie","le droit","l'économie"],0,
     "Clausewitz définit la guerre comme « la continuation de la politique par d'autres moyens »."),
    ("facile","espace-schengen","L'accord de Schengen, qui prévoit la libre circulation des personnes, a été signé en :","1985",["1957","1992","2007"],2,
     "L'accord de Schengen est signé en 1985 ; la convention d'application entre en vigueur plus tard."),
    ("moyen","onu","Le Conseil de sécurité de l'ONU compte combien de membres permanents disposant d'un droit de veto ?","5",["3","10","15"],1,
     "Cinq membres permanents (États-Unis, Russie, Chine, France, Royaume-Uni) disposent du droit de veto."),
    ("moyen","frontieres","Le « rideau de fer », expression popularisée par Churchill en 1946, désigne :","la coupure de l'Europe entre blocs",["la frontière franco-allemande","le mur de Berlin uniquement","la ligne de front de 1918"],0,
     "L'expression désigne la ligne séparant l'Europe de l'Ouest de l'Europe de l'Est sous influence soviétique."),
    ("facile","guerre-paix","Le traité qui met fin à la Première Guerre mondiale avec l'Allemagne est signé à :","Versailles",["Vienne","Utrecht","Aix-la-Chapelle"],0,
     "Le traité de Versailles (1919) met fin à la Première Guerre mondiale avec l'Allemagne."),
    ("moyen","democratie","La distinction entre démocratie « directe » et « représentative » repose sur :","le mode d'exercice du pouvoir par les citoyens",["le nombre d'habitants","la présence d'une monarchie","la taille du territoire"],2,
     "En démocratie directe les citoyens votent les lois eux-mêmes ; en démocratie représentative ils élisent des représentants."),
    ("difficile","frontieres","Le terme « limes » désignait, dans l'Antiquité romaine :","une frontière fortifiée de l'Empire",["une cité-État grecque","un traité de paix","une route commerciale"],1,
     "Le limes désignait les frontières fortifiées de l'Empire romain."),
    ("moyen","guerre-paix","Le « maintien de la paix » (casques bleus) relève principalement de quelle organisation ?","l'ONU",["l'OTAN","l'Union européenne","le G20"],3,
     "Les opérations de maintien de la paix (casques bleus) sont conduites sous mandat de l'ONU."),
    ("facile","democratie","La Déclaration des droits de l'homme et du citoyen a été adoptée en France en :","1789",["1776","1848","1958"],2,
     "La Déclaration des droits de l'homme et du citoyen est adoptée le 26 août 1789."),
    ("moyen","frontieres","Une frontière « naturelle » s'appuie sur :","un élément géographique comme un fleuve ou une montagne",["un accord commercial","une langue commune","une monnaie unique"],0,
     "Une frontière naturelle correspond à un obstacle géographique (fleuve, montagne, mer)."),
    ("difficile","guerre-paix","La paix de Westphalie introduit le principe selon lequel :","chaque État est souverain sur son territoire",["la religion doit être unique en Europe","l'empereur domine tous les royaumes","les frontières sont abolies"],1,
     "Westphalie consacre la souveraineté territoriale des États, principe fondateur des relations internationales modernes."),
]))

# ---------- Fichier 12 (premiere) ----------
FILES.append(("premiere", [
    ("facile","mer-oceans","La convention de Montego Bay, qui fixe le droit de la mer, a été signée en :","1982",["1972","1994","2001"],3,
     "La convention de Montego Bay sur le droit de la mer est signée en 1982."),
    ("moyen","mer-oceans","La Zone économique exclusive (ZEE) s'étend au maximum jusqu'à :","200 milles marins",["12 milles marins","100 milles marins","350 milles marins"],1,
     "La ZEE s'étend jusqu'à 200 milles marins des lignes de base."),
    ("facile","mer-oceans","La largeur maximale des eaux territoriales d'un État côtier est de :","12 milles marins",["3 milles marins","24 milles marins","50 milles marins"],0,
     "Les eaux territoriales s'étendent jusqu'à 12 milles marins."),
    ("moyen","guerre-paix","Le tribunal chargé de juger les grands criminels nazis après 1945 siégeait à :","Nuremberg",["La Haye","Rome","Genève"],2,
     "Le procès de Nuremberg (1945-1946) juge les principaux responsables nazis."),
    ("moyen","mer-oceans","Un « point de passage stratégique » maritime comme le détroit d'Ormuz est important car :","il concentre le trafic et peut être contrôlé",["il produit du pétrole","il sépare deux continents identiques","il n'a aucune valeur militaire"],0,
     "Les détroits stratégiques concentrent le trafic maritime et constituent des points de contrôle sensibles."),
    ("facile","onu","L'Organisation des Nations unies a été créée en :","1945",["1919","1948","1957"],1,
     "L'ONU est fondée en 1945 à la fin de la Seconde Guerre mondiale."),
    ("difficile","mer-oceans","Le plateau continental étendu peut, sous conditions, atteindre :","350 milles marins",["200 milles marins","12 milles marins","500 milles marins"],3,
     "Le plateau continental peut être étendu jusqu'à 350 milles marins sous conditions géologiques reconnues."),
    ("moyen","guerre-paix","La Société des Nations (SDN) a été créée après :","la Première Guerre mondiale",["la Seconde Guerre mondiale","la guerre froide","la guerre de Sécession"],1,
     "La SDN est créée en 1920, après la Première Guerre mondiale."),
    ("facile","mer-oceans","La « haute mer » désigne les espaces maritimes :","n'appartenant à aucun État",["situés à moins de 12 milles","couverts de glace","réservés à la pêche nationale"],1,
     "La haute mer échappe à la souveraineté des États et relève d'un principe de liberté."),
    ("moyen","democratie","Le suffrage universel masculin est instauré durablement en France en :","1848",["1789","1875","1944"],0,
     "Le suffrage universel masculin est instauré en 1848 sous la Deuxième République."),
    ("moyen","mer-oceans","La maritimisation de l'économie désigne :","la dépendance croissante des échanges à la voie maritime",["la baisse du commerce mondial","la disparition des ports","l'interdiction du transport maritime"],2,
     "La maritimisation désigne le rôle croissant de la mer dans les échanges mondialisés."),
    ("difficile","guerre-paix","Le concept de « guerre asymétrique » désigne un conflit :","entre adversaires de puissance très inégale",["entre deux États de même taille","limité à la mer","sans usage d'armes"],0,
     "La guerre asymétrique oppose des acteurs aux moyens très inégaux (ex. armée régulière contre groupe irrégulier)."),
]))

# ---------- Fichier 13 (premiere) ----------
FILES.append(("premiere", [
    ("facile","patrimoine","La convention de l'UNESCO sur la protection du patrimoine mondial date de :","1972",["1945","1985","2003"],0,
     "La convention pour la protection du patrimoine mondial est adoptée par l'UNESCO en 1972."),
    ("facile","patrimoine","L'UNESCO est une institution spécialisée rattachée à :","l'ONU",["l'Union européenne","l'OTAN","l'OMC"],1,
     "L'UNESCO est une institution spécialisée de l'ONU pour l'éducation, la science et la culture."),
    ("moyen","patrimoine","La notion de « patrimoine immatériel » a été reconnue par une convention UNESCO de :","2003",["1972","1954","1992"],2,
     "La convention pour la sauvegarde du patrimoine culturel immatériel date de 2003."),
    ("moyen","memoires","Le « devoir de mémoire » désigne :","l'obligation morale de se souvenir de certains faits",["l'oubli volontaire du passé","la réécriture de l'histoire","l'interdiction des commémorations"],3,
     "Le devoir de mémoire renvoie à l'obligation morale de commémorer et transmettre certains événements."),
    ("facile","patrimoine","La restauration d'un monument historique vise principalement à :","conserver et transmettre un héritage",["le détruire","le vendre","le cacher"],0,
     "La restauration vise à conserver le patrimoine et à le transmettre aux générations futures."),
    ("moyen","memoires","La distinction entre « histoire » et « mémoire » tient à ce que l'histoire est :","une démarche critique et méthodique",["un souvenir personnel affectif","une fiction","une commémoration"],0,
     "L'histoire est une reconstruction critique et méthodique, distincte de la mémoire, plus subjective."),
    ("difficile","patrimoine","La destruction des bouddhas de Bâmiyân en 2001 illustre :","la mise en danger du patrimoine par les conflits",["une catastrophe naturelle","une restauration réussie","un classement UNESCO"],1,
     "La destruction des bouddhas de Bâmiyân par les talibans illustre la vulnérabilité du patrimoine face aux conflits."),
    ("moyen","patrimoine","Le tourisme de masse constitue pour le patrimoine :","à la fois une ressource et une menace",["seulement un avantage","seulement un inconvénient","un phénomène sans effet"],0,
     "Le tourisme apporte des ressources mais peut dégrader les sites patrimoniaux."),
    ("facile","patrimoine","Un site inscrit au patrimoine mondial de l'UNESCO doit présenter :","une valeur universelle exceptionnelle",["une rentabilité commerciale","une population nombreuse","une frontière contestée"],2,
     "L'inscription repose sur la reconnaissance d'une « valeur universelle exceptionnelle »."),
    ("moyen","memoires","Les « lieux de mémoire », concept de Pierre Nora, désignent :","des repères symboliques du souvenir collectif",["uniquement des cimetières","des archives secrètes","des frontières militaires"],1,
     "Pierre Nora désigne par « lieux de mémoire » les repères matériels et symboliques de la mémoire collective."),
    ("difficile","patrimoine","La convention de La Haye de 1954 protège le patrimoine en cas de :","conflit armé",["catastrophe climatique","crise économique","épidémie"],0,
     "La convention de La Haye (1954) vise la protection des biens culturels en cas de conflit armé."),
    ("moyen","patrimoine","Le patrimoine peut être un instrument de puissance car il :","renforce le prestige et l'attractivité d'un État",["diminue le tourisme","supprime les frontières","empêche la diplomatie"],0,
     "La valorisation du patrimoine participe au soft power et au rayonnement des États."),
]))

# ---------- Fichier 14 (premiere) ----------
FILES.append(("premiere", [
    ("facile","environnement","La COP21, qui a abouti à l'accord de Paris sur le climat, s'est tenue en :","2015",["2009","2012","2018"],1,
     "La COP21 se tient à Paris en 2015 et aboutit à l'accord de Paris sur le climat."),
    ("moyen","environnement","L'accord de Paris (2015) vise à limiter le réchauffement bien en dessous de :","2 °C",["1 °C","5 °C","10 °C"],0,
     "L'accord de Paris vise à contenir le réchauffement bien en dessous de 2 °C, si possible 1,5 °C."),
    ("facile","environnement","Le premier Sommet de la Terre, marquant l'essor des enjeux environnementaux, s'est tenu à Rio en :","1992",["1972","2002","2015"],2,
     "Le Sommet de la Terre de Rio se tient en 1992 et popularise le développement durable."),
    ("moyen","environnement","Le « développement durable » articule trois piliers :","économique, social et environnemental",["militaire, culturel, religieux","urbain, rural, maritime","local, national, mondial"],0,
     "Le développement durable articule les dimensions économique, sociale et environnementale."),
    ("moyen","connaissance","La notion d'« anthropocène » désigne :","une ère marquée par l'impact humain sur la planète",["une période glaciaire","un traité climatique","une organisation internationale"],3,
     "L'anthropocène désigne une période géologique marquée par l'influence déterminante de l'humain sur l'environnement."),
    ("facile","environnement","Le protocole de Kyoto, portant sur les gaz à effet de serre, a été adopté en :","1997",["1987","2005","2015"],0,
     "Le protocole de Kyoto est adopté en 1997 (entré en vigueur en 2005)."),
    ("difficile","environnement","Le protocole de Montréal (1987) visait à protéger :","la couche d'ozone",["les forêts tropicales","les océans","la biodiversité marine"],1,
     "Le protocole de Montréal (1987) organise la réduction des substances appauvrissant la couche d'ozone."),
    ("moyen","environnement","Une « COP » climatique désigne :","une Conférence des Parties à la convention climat",["une cour pénale","un traité commercial","une agence spatiale"],0,
     "COP signifie « Conference of the Parties », réunion des États parties à la convention-cadre sur le climat."),
    ("facile","environnement","La déforestation contribue au changement climatique car elle :","réduit l'absorption du CO2",["refroidit l'atmosphère","augmente la couche d'ozone","supprime les océans"],0,
     "Les forêts absorbent le CO2 ; leur destruction réduit ce puits de carbone."),
    ("moyen","connaissance","La « transition énergétique » désigne le passage vers :","des sources d'énergie moins émettrices de carbone",["une énergie exclusivement fossile","l'arrêt de toute énergie","une monnaie unique"],1,
     "La transition énergétique vise à réduire la dépendance aux énergies fossiles au profit d'énergies décarbonées."),
    ("difficile","environnement","Le principe de « précaution » implique :","d'agir face à un risque même en l'absence de certitude scientifique totale",["d'attendre une preuve absolue avant d'agir","d'ignorer les risques","de privilégier l'économie"],0,
     "Le principe de précaution justifie des mesures préventives face à un risque grave, même sans certitude scientifique complète."),
    ("moyen","environnement","Les « réfugiés climatiques » sont des personnes déplacées en raison :","de dégradations environnementales",["de conflits religieux uniquement","de crises boursières","de frontières fermées"],0,
     "Les réfugiés climatiques fuient des dégradations environnementales (sécheresses, montée des eaux, etc.)."),
]))

# ---------- Fichier 15 (premiere) ----------
FILES.append(("premiere", [
    ("facile","connaissance","L'Encyclopédie de Diderot et d'Alembert est une œuvre majeure de quel mouvement ?","les Lumières",["la Renaissance","le romantisme","le classicisme"],1,
     "L'Encyclopédie (XVIIIe s.) est une œuvre emblématique du mouvement des Lumières."),
    ("moyen","connaissance","La méthode scientifique moderne, fondée sur l'expérimentation, est notamment associée à :","Galilée",["Aristote","Platon","Ptolémée"],0,
     "Galilée est une figure clé de la démarche expérimentale au début du XVIIe siècle."),
    ("moyen","connaissance","La théorie de l'évolution par sélection naturelle a été formulée par :","Charles Darwin",["Isaac Newton","Louis Pasteur","Gregor Mendel"],2,
     "Charles Darwin formule la théorie de l'évolution par sélection naturelle (1859)."),
    ("facile","connaissance","L'imprimerie à caractères mobiles, qui diffuse le savoir, est attribuée en Europe à :","Gutenberg",["Copernic","Descartes","Voltaire"],1,
     "Gutenberg met au point l'imprimerie à caractères mobiles au XVe siècle en Europe."),
    ("moyen","connaissance","Le « big data » désigne :","l'exploitation de très grandes masses de données",["une frontière maritime","un traité climatique","une organisation militaire"],3,
     "Le big data désigne l'analyse de très grands volumes de données numériques."),
    ("difficile","connaissance","L'affaire Lyssenko, en URSS, illustre :","l'instrumentalisation politique de la science",["une découverte médicale majeure","un accord de paix","une convention patrimoniale"],0,
     "L'affaire Lyssenko illustre la soumission de la science à l'idéologie sous Staline."),
    ("facile","democratie","La liberté de la presse est un pilier :","de la démocratie",["de la monarchie absolue","de la dictature","de l'autarcie"],0,
     "La liberté de la presse est une condition essentielle du débat démocratique."),
    ("moyen","connaissance","Le CERN, situé près de Genève, est un centre majeur de recherche en :","physique des particules",["histoire de l'art","droit maritime","sciences politiques"],1,
     "Le CERN est le laboratoire européen de recherche en physique des particules."),
    ("moyen","connaissance","La « société de la connaissance » valorise avant tout :","le savoir et l'innovation comme ressources",["les matières premières agricoles","la puissance militaire seule","l'isolement des États"],0,
     "La société de la connaissance repose sur le savoir, la recherche et l'innovation."),
    ("difficile","connaissance","Le brevet est un instrument juridique qui :","protège une invention pour une durée limitée",["interdit toute recherche","supprime la propriété intellectuelle","garantit la gratuité des savoirs"],0,
     "Le brevet confère à l'inventeur un droit exclusif temporaire d'exploitation."),
    ("moyen","connaissance","La diffusion des « fake news » constitue un enjeu pour :","la fiabilité de l'information et le débat démocratique",["la navigation maritime","la restauration du patrimoine","la biodiversité"],0,
     "Les fausses informations menacent la qualité de l'information et le fonctionnement démocratique."),
    ("facile","connaissance","La cartographie ancienne servait notamment à :","représenter et maîtriser l'espace",["mesurer le temps","juger les criminels","fixer les impôts maritimes"],0,
     "La carte est un instrument de connaissance et de pouvoir permettant de représenter et maîtriser l'espace."),
]))

# ---------- Fichier 16 (terminale) ----------
FILES.append(("terminale", [
    ("moyen","puissance","Le « soft power », concept de Joseph Nye, désigne la capacité d'un État à :","influencer par l'attractivité plutôt que la contrainte",["imposer par la force militaire","fermer ses frontières","contrôler les mers"],0,
     "Le soft power désigne l'influence par la culture, les valeurs et l'attractivité, par opposition au hard power."),
    ("moyen","guerre-froide","La crise des missiles de Cuba, point culminant de la guerre froide, a eu lieu en :","1962",["1948","1956","1972"],1,
     "La crise de Cuba (1962) marque un sommet des tensions entre les États-Unis et l'URSS."),
    ("facile","guerre-froide","Le mur de Berlin est tombé en :","1989",["1961","1975","1991"],2,
     "La chute du mur de Berlin survient en novembre 1989."),
    ("moyen","puissance","La « guerre froide » oppose principalement :","les États-Unis et l'URSS",["la France et l'Allemagne","la Chine et le Japon","le Royaume-Uni et l'Inde"],0,
     "La guerre froide oppose les blocs dirigés par les États-Unis et l'URSS de 1947 à 1991."),
    ("difficile","puissance","La théorie du « containment », doctrine américaine, visait à :","endiguer l'expansion du communisme",["envahir l'URSS","abolir l'ONU","développer le commerce maritime"],0,
     "Le containment (endiguement) vise à contenir l'expansion de l'influence soviétique."),
    ("moyen","guerre-froide","Le plan Marshall (1947) consistait en :","une aide économique américaine à l'Europe",["une alliance militaire asiatique","un traité de désarmement","une convention environnementale"],3,
     "Le plan Marshall est une aide économique américaine à la reconstruction de l'Europe."),
    ("facile","puissance","L'OTAN est une alliance :","militaire",["commerciale","culturelle","environnementale"],0,
     "L'OTAN est une alliance politico-militaire créée en 1949."),
    ("moyen","puissance","Une « puissance » se mesure notamment par ses capacités :","militaires, économiques et culturelles",["uniquement démographiques","uniquement religieuses","uniquement sportives"],0,
     "La puissance combine des dimensions militaires (hard power) et d'influence (soft power)."),
    ("difficile","guerre-froide","La « détente » des années 1960-1970 désigne :","une phase d'apaisement relatif entre les blocs",["une guerre ouverte","la fin de l'ONU","un embargo maritime"],1,
     "La détente désigne une période d'apaisement relatif des relations Est-Ouest."),
    ("moyen","puissance","La dissuasion nucléaire repose sur :","la menace de représailles pour éviter l'agression",["l'usage systématique de l'arme","le désarmement unilatéral","la fermeture des ambassades"],0,
     "La dissuasion nucléaire vise à décourager toute agression par la menace de représailles massives."),
    ("facile","guerre-froide","L'URSS a disparu en tant qu'État en :","1991",["1985","1989","1993"],2,
     "L'URSS est dissoute en décembre 1991."),
    ("moyen","puissance","Les « puissances émergentes » comme les BRICS désignent des États :","à croissance rapide contestant l'ordre établi",["en déclin économique","sans population","dépourvus d'industrie"],0,
     "Les puissances émergentes (BRICS) connaissent une croissance rapide et pèsent davantage dans la gouvernance mondiale."),
]))

# ---------- Fichier 17 (terminale) ----------
FILES.append(("terminale", [
    ("moyen","proche-orient","Le partage de la Palestine proposé par l'ONU date de :","1947",["1917","1948","1967"],1,
     "Le plan de partage de la Palestine est voté par l'ONU en 1947."),
    ("moyen","proche-orient","La guerre des Six Jours a opposé Israël à ses voisins arabes en :","1967",["1948","1956","1973"],2,
     "La guerre des Six Jours se déroule en 1967."),
    ("facile","proche-orient","La déclaration Balfour (1917) soutenait l'idée d'un « foyer national juif » en :","Palestine",["Égypte","Syrie","Liban"],0,
     "La déclaration Balfour (1917) exprime le soutien britannique à un foyer national juif en Palestine."),
    ("difficile","proche-orient","Les accords de Camp David (1978) ont conduit à la paix entre :","l'Égypte et Israël",["l'Iran et l'Irak","la Syrie et le Liban","la Jordanie et l'Arabie saoudite"],0,
     "Les accords de Camp David (1978) débouchent sur la paix israélo-égyptienne de 1979."),
    ("moyen","proche-orient","Le conflit au Proche-Orient met en jeu, entre autres, la question :","des ressources en eau",["des glaciers arctiques","du commerce du café","des routes polaires"],3,
     "L'eau est une ressource stratégique et un enjeu majeur des tensions au Proche et Moyen-Orient."),
    ("moyen","proche-orient","La ville revendiquée comme capitale par Israéliens et Palestiniens est :","Jérusalem",["Le Caire","Amman","Damas"],0,
     "Jérusalem est revendiquée comme capitale par les deux parties, ce qui en fait un enjeu central."),
    ("facile","proche-orient","L'OLP, organisation de libération de la Palestine, a longtemps été dirigée par :","Yasser Arafat",["Gamal Abdel Nasser","Anouar el-Sadate","Hafez el-Assad"],1,
     "Yasser Arafat a dirigé l'OLP pendant plusieurs décennies."),
    ("difficile","proche-orient","Les accords d'Oslo (1993) prévoyaient :","une reconnaissance mutuelle et une autonomie palestinienne",["l'annexion totale du territoire","la fin de l'ONU","un traité maritime"],0,
     "Les accords d'Oslo (1993) instaurent une reconnaissance mutuelle et une autonomie palestinienne partielle."),
    ("moyen","proche-orient","Le canal de Suez, enjeu stratégique majeur, a été nationalisé par Nasser en :","1956",["1948","1967","1979"],1,
     "La nationalisation du canal de Suez par Nasser en 1956 déclenche une crise internationale."),
    ("moyen","proche-orient","Le terme « intifada » désigne :","un soulèvement populaire palestinien",["un traité de paix","une monnaie régionale","une alliance militaire"],0,
     "L'intifada désigne un soulèvement populaire palestinien contre l'occupation."),
    ("facile","proche-orient","Le Proche et Moyen-Orient est une région clé notamment pour :","les hydrocarbures",["la production de riz","les routes polaires","le tourisme de neige"],0,
     "La région concentre une part majeure des réserves mondiales de pétrole et de gaz."),
    ("difficile","proche-orient","La notion de « poudrière » appliquée au Proche-Orient renvoie à :","l'accumulation de tensions susceptibles d'éclater",["une richesse minière","un désarmement réussi","une paix durable"],0,
     "L'image de la « poudrière » souligne l'accumulation de conflits et de tensions dans la région."),
]))

# ---------- Fichier 18 (terminale) ----------
FILES.append(("terminale", [
    ("moyen","memoires","Le régime de Vichy a collaboré avec l'Allemagne nazie entre :","1940 et 1944",["1914 et 1918","1936 et 1939","1945 et 1949"],0,
     "Le régime de Vichy, dirigé par Pétain, collabore avec l'Allemagne de 1940 à 1944."),
    ("moyen","memoires","Le discours de 1995 par lequel Jacques Chirac reconnaît la responsabilité de l'État français dans la déportation concerne :","la rafle du Vél d'Hiv",["la guerre d'Algérie","la Commune de Paris","la guerre de 1870"],1,
     "En 1995, Chirac reconnaît la responsabilité de l'État français dans la rafle du Vél d'Hiv (1942)."),
    ("facile","memoires","La Seconde Guerre mondiale s'achève en Europe en :","1945",["1918","1939","1949"],2,
     "La Seconde Guerre mondiale s'achève en Europe en mai 1945."),
    ("difficile","memoires","L'historien Henry Rousso a analysé la mémoire de Vichy à travers la notion de :","syndrome de Vichy",["devoir d'oubli","paix armée","guerre totale"],0,
     "Henry Rousso analyse l'évolution de la mémoire de Vichy sous le nom de « syndrome de Vichy »."),
    ("moyen","memoires","Le génocide des Juifs d'Europe pendant la Seconde Guerre mondiale est désigné par le terme :","Shoah",["Anschluss","Blitzkrieg","Détente"],0,
     "Le terme Shoah désigne le génocide des Juifs d'Europe perpétré par l'Allemagne nazie."),
    ("moyen","memoires","La guerre d'Algérie, dont la mémoire reste sensible, s'est déroulée de :","1954 à 1962",["1939 à 1945","1946 à 1954","1962 à 1970"],3,
     "La guerre d'Algérie se déroule de 1954 à 1962 et aboutit à l'indépendance de l'Algérie."),
    ("facile","memoires","Un « procès pour crimes contre l'humanité » relève d'une justice :","internationale ou d'exception",["commerciale","sportive","administrative ordinaire"],0,
     "Les crimes contre l'humanité relèvent d'une justice spécifique, internationale ou d'exception."),
    ("difficile","memoires","La Cour pénale internationale (CPI), créée par le statut de Rome, siège à :","La Haye",["New York","Genève","Vienne"],1,
     "La CPI, instituée par le statut de Rome (1998), siège à La Haye."),
    ("moyen","memoires","Le « négationnisme » consiste à :","nier la réalité de crimes historiques établis",["étudier les archives","commémorer les victimes","restaurer le patrimoine"],0,
     "Le négationnisme nie des faits historiques établis, notamment le génocide des Juifs."),
    ("moyen","memoires","La justice « transitionnelle » vise, après un conflit, à :","concilier vérité, justice et réconciliation",["punir sans jugement","effacer toute mémoire","interdire les élections"],0,
     "La justice transitionnelle cherche à établir la vérité et à favoriser la réconciliation après des violences de masse."),
    ("facile","memoires","La commémoration du 8 mai en France marque :","la fin de la guerre en Europe en 1945",["l'armistice de 1918","la prise de la Bastille","la Libération de Paris"],0,
     "Le 8 mai commémore la capitulation allemande et la fin de la Seconde Guerre mondiale en Europe (1945)."),
    ("difficile","memoires","La commission « Vérité et Réconciliation » est un modèle de justice transitionnelle appliqué notamment en :","Afrique du Sud",["Suisse","Norvège","Canada"],0,
     "La Commission Vérité et Réconciliation d'Afrique du Sud (post-apartheid) est un modèle de justice transitionnelle."),
]))

# ---------- Fichier 19 (terminale) ----------
FILES.append(("terminale", [
    ("moyen","etats-unis-chine","La rivalité contemporaine entre grandes puissances oppose surtout :","les États-Unis et la Chine",["la France et l'Italie","le Brésil et l'Argentine","la Suède et la Finlande"],0,
     "La rivalité sino-américaine structure une part importante des relations internationales actuelles."),
    ("facile","etats-unis-chine","La politique chinoise des « nouvelles routes de la soie » est aussi appelée :","Belt and Road Initiative",["plan Marshall","doctrine Monroe","pacte de Varsovie"],0,
     "Les « nouvelles routes de la soie » (Belt and Road Initiative) sont un projet chinois d'infrastructures et d'influence."),
    ("moyen","etats-unis-chine","La Chine est devenue membre de l'Organisation mondiale du commerce (OMC) en :","2001",["1979","1991","2010"],1,
     "La Chine adhère à l'OMC en 2001, accélérant son intégration commerciale mondiale."),
    ("difficile","puissance","La « doctrine Monroe » (1823) affirmait :","l'opposition américaine à l'ingérence européenne dans les Amériques",["l'ouverture totale des frontières","l'abolition des armées","le libre-échange maritime mondial"],0,
     "La doctrine Monroe (1823) s'oppose à l'ingérence européenne dans les affaires du continent américain."),
    ("moyen","etats-unis-chine","Taïwan est un enjeu majeur de tension car :","son statut est revendiqué par la Chine",["il est situé en Europe","il est inhabité","il appartient à la Russie"],2,
     "La question du statut de Taïwan est un point de tension central entre la Chine et les États-Unis."),
    ("moyen","puissance","La mondialisation désigne :","l'intensification des échanges à l'échelle planétaire",["la fermeture des marchés","la fin du commerce","l'isolement des États"],3,
     "La mondialisation désigne l'intensification et l'interconnexion des échanges mondiaux."),
    ("facile","etats-unis-chine","Le dollar américain joue un rôle central comme :","monnaie de référence internationale",["monnaie locale sans usage","métal précieux","langue diplomatique"],0,
     "Le dollar demeure la principale monnaie de réserve et d'échange à l'échelle mondiale."),
    ("difficile","puissance","La notion de « puissance hégémonique » désigne un État qui :","exerce une domination d'ensemble sur le système international",["se limite à son territoire","refuse tout commerce","n'a pas d'armée"],0,
     "Une puissance hégémonique exerce une prépondérance globale (militaire, économique, culturelle)."),
    ("moyen","etats-unis-chine","La « guerre commerciale » entre les États-Unis et la Chine s'est notamment traduite par :","des hausses de droits de douane réciproques",["une union monétaire","la suppression des frontières","un traité climatique"],0,
     "La guerre commerciale s'est traduite par des droits de douane croissants imposés de part et d'autre."),
    ("moyen","puissance","La mer de Chine méridionale est un espace de tensions en raison :","de revendications territoriales et maritimes concurrentes",["de son absence de ressources","de son isolement total","de l'absence de trafic"],0,
     "La mer de Chine méridionale concentre des revendications rivales sur des îlots et des routes maritimes stratégiques."),
    ("facile","puissance","Un « embargo » est :","une interdiction d'échanges commerciaux imposée à un État",["une alliance militaire","une monnaie commune","un traité de paix"],1,
     "Un embargo est une mesure interdisant le commerce avec un pays visé."),
    ("difficile","puissance","Le « multilatéralisme » désigne un mode de gouvernance fondé sur :","la coopération entre de nombreux États",["l'action isolée d'un seul État","la suppression des institutions internationales","la guerre permanente"],0,
     "Le multilatéralisme privilégie la coopération entre de nombreux États au sein d'institutions communes."),
]))

# ---------- Fichier 20 (terminale) ----------
FILES.append(("terminale", [
    ("moyen","democratie","La démocratie « athénienne » de l'Antiquité était :","directe et réservée aux citoyens",["représentative et universelle","une monarchie héréditaire","une théocratie"],0,
     "La démocratie athénienne était directe mais limitée aux seuls citoyens (hommes libres)."),
    ("facile","democratie","La Ve République française a été instaurée en :","1958",["1848","1875","1946"],1,
     "La Ve République est instaurée en 1958 sous l'impulsion de Charles de Gaulle."),
    ("moyen","democratie","Le principe de « séparation des pouvoirs » est notamment théorisé par :","Montesquieu",["Machiavel","Bossuet","Hobbes"],2,
     "Montesquieu théorise la séparation des pouvoirs (législatif, exécutif, judiciaire) dans « De l'esprit des lois »."),
    ("difficile","democratie","Le terme « populisme » désigne, en science politique :","un discours opposant le peuple aux élites",["un régime monarchique","une doctrine économique libérale","une alliance militaire"],0,
     "Le populisme se caractérise par une opposition rhétorique entre un « peuple » et des « élites »."),
    ("moyen","democratie","L'Union européenne élit son Parlement au suffrage universel direct depuis :","1979",["1957","1992","2004"],1,
     "Le Parlement européen est élu au suffrage universel direct depuis 1979."),
    ("moyen","democratie","Le traité de Maastricht, qui crée l'Union européenne, date de :","1992",["1957","1979","2007"],3,
     "Le traité de Maastricht (1992) institue l'Union européenne et prépare la monnaie unique."),
    ("facile","democratie","L'euro est mis en circulation sous forme de pièces et billets en :","2002",["1992","1999","2007"],2,
     "L'euro fiduciaire (pièces et billets) est mis en circulation le 1er janvier 2002."),
    ("difficile","democratie","La notion d'« État de droit » implique que :","les pouvoirs publics sont soumis au droit",["le dirigeant est au-dessus des lois","la justice est facultative","les élections sont interdites"],0,
     "Dans un État de droit, les pouvoirs publics eux-mêmes sont soumis à des règles de droit."),
    ("moyen","democratie","Le « régime parlementaire » se caractérise par :","la responsabilité du gouvernement devant le parlement",["l'absence d'élections","un pouvoir judiciaire unique","la suppression du parlement"],0,
     "Dans un régime parlementaire, le gouvernement est responsable devant le parlement."),
    ("moyen","democratie","La « société civile » désigne :","l'ensemble des acteurs organisés hors de l'État",["l'armée nationale","le gouvernement seul","les tribunaux uniquement"],0,
     "La société civile regroupe les acteurs organisés (associations, syndicats, ONG) distincts de l'État."),
    ("facile","democratie","Le référendum est un procédé permettant :","aux citoyens de se prononcer directement par un vote",["au juge de rendre un verdict","au roi de nommer un ministre","à l'armée de gouverner"],0,
     "Le référendum permet aux citoyens de trancher directement une question par le vote."),
    ("difficile","democratie","La « désinformation » en ligne fragilise la démocratie car elle :","altère la qualité de l'information et la formation de l'opinion",["renforce la fiabilité des sources","supprime les élections","protège le patrimoine"],0,
     "La désinformation altère le débat public en dégradant la qualité de l'information disponible."),
]))

# --- Écriture ---
os.makedirs(OUT, exist_ok=True)
for offset, (niveau, qs) in enumerate(FILES):
    nn = 11 + offset
    questions = []
    for i, (diff, notion, enonce, bonne, distract, idx, expl) in enumerate(qs, start=1):
        choix = list(distract)
        choix.insert(idx, bonne)
        assert len(choix) == 4 and len(set(choix)) == 4, (nn, i, enonce)
        assert 0 <= idx < 4
        assert expl.strip()
        questions.append({
            "id": i,
            "difficulte": diff,
            "notion": notion,
            "enonce": enonce,
            "choix": choix,
            "reponse": idx,
            "explication": expl,
        })
    assert len(questions) == 12, nn
    positions = [q["reponse"] for q in questions]
    for p in range(4):
        assert p in positions, (nn, "position manquante", p)
    data = {
        "id": f"bb-hggsp-{nn}",
        "titre": f"Bac blanc — HGGSP (n° {nn})",
        "examen": "Bac blanc",
        "niveau": niveau,
        "matiere": "hggsp",
        "statut": "brouillon",
        "relu_par": None,
        "consigne": "Une seule réponse correcte par question. Géopolitique, sciences politiques, histoire.",
        "questions": questions,
    }
    path = os.path.join(OUT, f"bb-hggsp-{nn}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("écrit", path, "niveau", niveau, "positions", sorted(positions))
print("OK génération")
