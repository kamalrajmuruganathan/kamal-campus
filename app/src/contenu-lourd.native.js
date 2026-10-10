/**
 * FICHIER GÉNÉRÉ par scripts/generer-index.mjs — NE PAS MODIFIER À LA MAIN.
 * Fiches et exercices, chargés à la demande : chargerFiche(id) et chargerExercices(id)
 * renvoient une promesse (texte Markdown / objet exercice.json, ou null).
 */

import { fusionnerAttendus } from '../lib/autocorrection';
import fiche0 from './../../contenu/cp/allemand/begrussungen/fiche.md';
import exercice0 from './../../contenu/cp/allemand/begrussungen/exercice.json';
import fiche1 from './../../contenu/cp/allemand/zahlen/fiche.md';
import exercice1 from './../../contenu/cp/allemand/zahlen/exercice.json';
import fiche2 from './../../contenu/cp/allemand/farben/fiche.md';
import exercice2 from './../../contenu/cp/allemand/farben/exercice.json';
import fiche3 from './../../contenu/cp/allemand/tiere/fiche.md';
import exercice3 from './../../contenu/cp/allemand/tiere/exercice.json';
import fiche4 from './../../contenu/cp/anglais/greetings/fiche.md';
import exercice4 from './../../contenu/cp/anglais/greetings/exercice.json';
import fiche5 from './../../contenu/cp/anglais/numbers/fiche.md';
import exercice5 from './../../contenu/cp/anglais/numbers/exercice.json';
import fiche6 from './../../contenu/cp/anglais/colours/fiche.md';
import exercice6 from './../../contenu/cp/anglais/colours/exercice.json';
import fiche7 from './../../contenu/cp/anglais/animals/fiche.md';
import exercice7 from './../../contenu/cp/anglais/animals/exercice.json';
import fiche8 from './../../contenu/cp/espagnol/saludos/fiche.md';
import exercice8 from './../../contenu/cp/espagnol/saludos/exercice.json';
import fiche9 from './../../contenu/cp/espagnol/numeros/fiche.md';
import exercice9 from './../../contenu/cp/espagnol/numeros/exercice.json';
import fiche10 from './../../contenu/cp/espagnol/colores/fiche.md';
import exercice10 from './../../contenu/cp/espagnol/colores/exercice.json';
import fiche11 from './../../contenu/cp/espagnol/animales/fiche.md';
import exercice11 from './../../contenu/cp/espagnol/animales/exercice.json';
import fiche12 from './../../contenu/cp/francais/sons-voyelles/fiche.md';
import exercice12 from './../../contenu/cp/francais/sons-voyelles/exercice.json';
import fiche13 from './../../contenu/cp/francais/syllabes/fiche.md';
import exercice13 from './../../contenu/cp/francais/syllabes/exercice.json';
import fiche14 from './../../contenu/cp/francais/sons-complexes/fiche.md';
import exercice14 from './../../contenu/cp/francais/sons-complexes/exercice.json';
import fiche15 from './../../contenu/cp/francais/nom-determinant/fiche.md';
import exercice15 from './../../contenu/cp/francais/nom-determinant/exercice.json';
import fiche16 from './../../contenu/cp/francais/la-phrase/fiche.md';
import exercice16 from './../../contenu/cp/francais/la-phrase/exercice.json';
import fiche17 from './../../contenu/cp/hist-geo/vivre-ensemble/fiche.md';
import exercice17 from './../../contenu/cp/hist-geo/vivre-ensemble/exercice.json';
import fiche18 from './../../contenu/cp/hist-geo/le-temps-qui-passe/fiche.md';
import exercice18 from './../../contenu/cp/hist-geo/le-temps-qui-passe/exercice.json';
import fiche19 from './../../contenu/cp/hist-geo/se-reperer-espace/fiche.md';
import exercice19 from './../../contenu/cp/hist-geo/se-reperer-espace/exercice.json';
import fiche20 from './../../contenu/cp/hist-geo/ecole-autrefois/fiche.md';
import exercice20 from './../../contenu/cp/hist-geo/ecole-autrefois/exercice.json';
import fiche21 from './../../contenu/cp/italien/saluti/fiche.md';
import exercice21 from './../../contenu/cp/italien/saluti/exercice.json';
import fiche22 from './../../contenu/cp/italien/numeri/fiche.md';
import exercice22 from './../../contenu/cp/italien/numeri/exercice.json';
import fiche23 from './../../contenu/cp/italien/colori/fiche.md';
import exercice23 from './../../contenu/cp/italien/colori/exercice.json';
import fiche24 from './../../contenu/cp/italien/animali/fiche.md';
import exercice24 from './../../contenu/cp/italien/animali/exercice.json';
import fiche25 from './../../contenu/cp/maths/nombres-jusqu-a-20/fiche.md';
import exercice25 from './../../contenu/cp/maths/nombres-jusqu-a-20/exercice.json';
import fiche26 from './../../contenu/cp/maths/comparer-ranger/fiche.md';
import exercice26 from './../../contenu/cp/maths/comparer-ranger/exercice.json';
import fiche27 from './../../contenu/cp/maths/addition/fiche.md';
import exercice27 from './../../contenu/cp/maths/addition/exercice.json';
import fiche28 from './../../contenu/cp/maths/se-reperer-et-quadrillage/fiche.md';
import exercice28 from './../../contenu/cp/maths/se-reperer-et-quadrillage/exercice.json';
import fiche29 from './../../contenu/cp/maths/dizaines-et-unites/fiche.md';
import exercice29 from './../../contenu/cp/maths/dizaines-et-unites/exercice.json';
import fiche30 from './../../contenu/cp/maths/soustraction/fiche.md';
import exercice30 from './../../contenu/cp/maths/soustraction/exercice.json';
import fiche31 from './../../contenu/cp/maths/formes-geometriques/fiche.md';
import exercice31 from './../../contenu/cp/maths/formes-geometriques/exercice.json';
import fiche32 from './../../contenu/cp/maths/calcul-mental/fiche.md';
import exercice32 from './../../contenu/cp/maths/calcul-mental/exercice.json';
import fiche33 from './../../contenu/cp/maths/longueurs-et-masses/fiche.md';
import exercice33 from './../../contenu/cp/maths/longueurs-et-masses/exercice.json';
import fiche34 from './../../contenu/cp/maths/le-temps-qui-passe/fiche.md';
import exercice34 from './../../contenu/cp/maths/le-temps-qui-passe/exercice.json';
import fiche35 from './../../contenu/cp/maths/problemes/fiche.md';
import exercice35 from './../../contenu/cp/maths/problemes/exercice.json';
import fiche36 from './../../contenu/cp/sciences/le-corps-et-les-cinq-sens/fiche.md';
import exercice36 from './../../contenu/cp/sciences/le-corps-et-les-cinq-sens/exercice.json';
import fiche37 from './../../contenu/cp/sciences/le-vivant-animaux-et-vegetaux/fiche.md';
import exercice37 from './../../contenu/cp/sciences/le-vivant-animaux-et-vegetaux/exercice.json';
import fiche38 from './../../contenu/cp/sciences/les-objets-du-quotidien/fiche.md';
import exercice38 from './../../contenu/cp/sciences/les-objets-du-quotidien/exercice.json';
import fiche39 from './../../contenu/cp/sciences/solides-et-liquides/fiche.md';
import exercice39 from './../../contenu/cp/sciences/solides-et-liquides/exercice.json';
import fiche40 from './../../contenu/cp/sciences/le-temps-et-les-saisons/fiche.md';
import exercice40 from './../../contenu/cp/sciences/le-temps-et-les-saisons/exercice.json';
import fiche41 from './../../contenu/ce1/allemand/wochentage/fiche.md';
import exercice41 from './../../contenu/ce1/allemand/wochentage/exercice.json';
import fiche42 from './../../contenu/ce1/allemand/familie/fiche.md';
import exercice42 from './../../contenu/ce1/allemand/familie/exercice.json';
import fiche43 from './../../contenu/ce1/allemand/koerper/fiche.md';
import exercice43 from './../../contenu/ce1/allemand/koerper/exercice.json';
import fiche44 from './../../contenu/ce1/allemand/essen/fiche.md';
import exercice44 from './../../contenu/ce1/allemand/essen/exercice.json';
import fiche45 from './../../contenu/ce1/anglais/days/fiche.md';
import exercice45 from './../../contenu/ce1/anglais/days/exercice.json';
import fiche46 from './../../contenu/ce1/anglais/family/fiche.md';
import exercice46 from './../../contenu/ce1/anglais/family/exercice.json';
import fiche47 from './../../contenu/ce1/anglais/body/fiche.md';
import exercice47 from './../../contenu/ce1/anglais/body/exercice.json';
import fiche48 from './../../contenu/ce1/anglais/food/fiche.md';
import exercice48 from './../../contenu/ce1/anglais/food/exercice.json';
import fiche49 from './../../contenu/ce1/espagnol/dias/fiche.md';
import exercice49 from './../../contenu/ce1/espagnol/dias/exercice.json';
import fiche50 from './../../contenu/ce1/espagnol/familia/fiche.md';
import exercice50 from './../../contenu/ce1/espagnol/familia/exercice.json';
import fiche51 from './../../contenu/ce1/espagnol/cuerpo/fiche.md';
import exercice51 from './../../contenu/ce1/espagnol/cuerpo/exercice.json';
import fiche52 from './../../contenu/ce1/espagnol/comida/fiche.md';
import exercice52 from './../../contenu/ce1/espagnol/comida/exercice.json';
import fiche53 from './../../contenu/ce1/francais/types-de-phrases/fiche.md';
import exercice53 from './../../contenu/ce1/francais/types-de-phrases/exercice.json';
import fiche54 from './../../contenu/ce1/francais/noms-propres-communs/fiche.md';
import exercice54 from './../../contenu/ce1/francais/noms-propres-communs/exercice.json';
import fiche55 from './../../contenu/ce1/francais/singulier-pluriel/fiche.md';
import exercice55 from './../../contenu/ce1/francais/singulier-pluriel/exercice.json';
import fiche56 from './../../contenu/ce1/francais/le-verbe/fiche.md';
import exercice56 from './../../contenu/ce1/francais/le-verbe/exercice.json';
import fiche57 from './../../contenu/ce1/francais/present-etre-avoir/fiche.md';
import exercice57 from './../../contenu/ce1/francais/present-etre-avoir/exercice.json';
import fiche58 from './../../contenu/ce1/hist-geo/regles-et-droits/fiche.md';
import exercice58 from './../../contenu/ce1/hist-geo/regles-et-droits/exercice.json';
import fiche59 from './../../contenu/ce1/hist-geo/calendrier-frise/fiche.md';
import exercice59 from './../../contenu/ce1/hist-geo/calendrier-frise/exercice.json';
import fiche60 from './../../contenu/ce1/hist-geo/plans-et-cartes/fiche.md';
import exercice60 from './../../contenu/ce1/hist-geo/plans-et-cartes/exercice.json';
import fiche61 from './../../contenu/ce1/hist-geo/la-france-paysages/fiche.md';
import exercice61 from './../../contenu/ce1/hist-geo/la-france-paysages/exercice.json';
import fiche62 from './../../contenu/ce1/italien/giorni/fiche.md';
import exercice62 from './../../contenu/ce1/italien/giorni/exercice.json';
import fiche63 from './../../contenu/ce1/italien/famiglia/fiche.md';
import exercice63 from './../../contenu/ce1/italien/famiglia/exercice.json';
import fiche64 from './../../contenu/ce1/italien/corpo/fiche.md';
import exercice64 from './../../contenu/ce1/italien/corpo/exercice.json';
import fiche65 from './../../contenu/ce1/italien/cibo/fiche.md';
import exercice65 from './../../contenu/ce1/italien/cibo/exercice.json';
import fiche66 from './../../contenu/ce1/maths/nombres-jusqu-a-1000/fiche.md';
import exercice66 from './../../contenu/ce1/maths/nombres-jusqu-a-1000/exercice.json';
import fiche67 from './../../contenu/ce1/maths/addition-posee/fiche.md';
import exercice67 from './../../contenu/ce1/maths/addition-posee/exercice.json';
import fiche68 from './../../contenu/ce1/maths/calcul-mental/fiche.md';
import exercice68 from './../../contenu/ce1/maths/calcul-mental/exercice.json';
import fiche69 from './../../contenu/ce1/maths/soustraction-posee/fiche.md';
import exercice69 from './../../contenu/ce1/maths/soustraction-posee/exercice.json';
import fiche70 from './../../contenu/ce1/maths/figures-planes/fiche.md';
import exercice70 from './../../contenu/ce1/maths/figures-planes/exercice.json';
import fiche71 from './../../contenu/ce1/maths/moities-et-doubles/fiche.md';
import exercice71 from './../../contenu/ce1/maths/moities-et-doubles/exercice.json';
import fiche72 from './../../contenu/ce1/maths/tables-de-multiplication/fiche.md';
import exercice72 from './../../contenu/ce1/maths/tables-de-multiplication/exercice.json';
import fiche73 from './../../contenu/ce1/maths/symetrie-et-quadrillage/fiche.md';
import exercice73 from './../../contenu/ce1/maths/symetrie-et-quadrillage/exercice.json';
import fiche74 from './../../contenu/ce1/maths/solides/fiche.md';
import exercice74 from './../../contenu/ce1/maths/solides/exercice.json';
import fiche75 from './../../contenu/ce1/maths/mesures-et-monnaie/fiche.md';
import exercice75 from './../../contenu/ce1/maths/mesures-et-monnaie/exercice.json';
import fiche76 from './../../contenu/ce1/maths/problemes/fiche.md';
import exercice76 from './../../contenu/ce1/maths/problemes/exercice.json';
import fiche77 from './../../contenu/ce1/sciences/se-reperer-dans-le-temps/fiche.md';
import exercice77 from './../../contenu/ce1/sciences/se-reperer-dans-le-temps/exercice.json';
import fiche78 from './../../contenu/ce1/sciences/les-etats-de-leau/fiche.md';
import exercice78 from './../../contenu/ce1/sciences/les-etats-de-leau/exercice.json';
import fiche79 from './../../contenu/ce1/sciences/cycles-de-vie-des-etres-vivants/fiche.md';
import exercice79 from './../../contenu/ce1/sciences/cycles-de-vie-des-etres-vivants/exercice.json';
import fiche80 from './../../contenu/ce1/sciences/alimentation-et-hygiene/fiche.md';
import exercice80 from './../../contenu/ce1/sciences/alimentation-et-hygiene/exercice.json';
import fiche81 from './../../contenu/ce1/sciences/materiaux-et-objets-techniques/fiche.md';
import exercice81 from './../../contenu/ce1/sciences/materiaux-et-objets-techniques/exercice.json';
import fiche82 from './../../contenu/ce2/allemand/zahlen-alter/fiche.md';
import exercice82 from './../../contenu/ce2/allemand/zahlen-alter/exercice.json';
import fiche83 from './../../contenu/ce2/allemand/gefuehle/fiche.md';
import exercice83 from './../../contenu/ce2/allemand/gefuehle/exercice.json';
import fiche84 from './../../contenu/ce2/allemand/kleidung/fiche.md';
import exercice84 from './../../contenu/ce2/allemand/kleidung/exercice.json';
import fiche85 from './../../contenu/ce2/allemand/wetter-jahreszeiten/fiche.md';
import exercice85 from './../../contenu/ce2/allemand/wetter-jahreszeiten/exercice.json';
import fiche86 from './../../contenu/ce2/anglais/numbers-age/fiche.md';
import exercice86 from './../../contenu/ce2/anglais/numbers-age/exercice.json';
import fiche87 from './../../contenu/ce2/anglais/feelings/fiche.md';
import exercice87 from './../../contenu/ce2/anglais/feelings/exercice.json';
import fiche88 from './../../contenu/ce2/anglais/clothes/fiche.md';
import exercice88 from './../../contenu/ce2/anglais/clothes/exercice.json';
import fiche89 from './../../contenu/ce2/anglais/weather-seasons/fiche.md';
import exercice89 from './../../contenu/ce2/anglais/weather-seasons/exercice.json';
import fiche90 from './../../contenu/ce2/espagnol/numeros-edad/fiche.md';
import exercice90 from './../../contenu/ce2/espagnol/numeros-edad/exercice.json';
import fiche91 from './../../contenu/ce2/espagnol/sentimientos/fiche.md';
import exercice91 from './../../contenu/ce2/espagnol/sentimientos/exercice.json';
import fiche92 from './../../contenu/ce2/espagnol/ropa/fiche.md';
import exercice92 from './../../contenu/ce2/espagnol/ropa/exercice.json';
import fiche93 from './../../contenu/ce2/espagnol/tiempo-estaciones/fiche.md';
import exercice93 from './../../contenu/ce2/espagnol/tiempo-estaciones/exercice.json';
import fiche94 from './../../contenu/ce2/francais/classes-de-mots/fiche.md';
import exercice94 from './../../contenu/ce2/francais/classes-de-mots/exercice.json';
import fiche95 from './../../contenu/ce2/francais/passe-present-futur/fiche.md';
import exercice95 from './../../contenu/ce2/francais/passe-present-futur/exercice.json';
import fiche96 from './../../contenu/ce2/francais/present-premier-groupe/fiche.md';
import exercice96 from './../../contenu/ce2/francais/present-premier-groupe/exercice.json';
import fiche97 from './../../contenu/ce2/francais/accord-sujet-verbe/fiche.md';
import exercice97 from './../../contenu/ce2/francais/accord-sujet-verbe/exercice.json';
import fiche98 from './../../contenu/ce2/francais/homophones-a-et/fiche.md';
import exercice98 from './../../contenu/ce2/francais/homophones-a-et/exercice.json';
import fiche99 from './../../contenu/ce2/hist-geo/prehistoire/fiche.md';
import exercice99 from './../../contenu/ce2/hist-geo/prehistoire/exercice.json';
import fiche100 from './../../contenu/ce2/hist-geo/gaulois-romains/fiche.md';
import exercice100 from './../../contenu/ce2/hist-geo/gaulois-romains/exercice.json';
import fiche101 from './../../contenu/ce2/hist-geo/terre-continents-oceans/fiche.md';
import exercice101 from './../../contenu/ce2/hist-geo/terre-continents-oceans/exercice.json';
import fiche102 from './../../contenu/ce2/hist-geo/symboles-republique/fiche.md';
import exercice102 from './../../contenu/ce2/hist-geo/symboles-republique/exercice.json';
import fiche103 from './../../contenu/ce2/italien/numeri-eta/fiche.md';
import exercice103 from './../../contenu/ce2/italien/numeri-eta/exercice.json';
import fiche104 from './../../contenu/ce2/italien/sentimenti/fiche.md';
import exercice104 from './../../contenu/ce2/italien/sentimenti/exercice.json';
import fiche105 from './../../contenu/ce2/italien/vestiti/fiche.md';
import exercice105 from './../../contenu/ce2/italien/vestiti/exercice.json';
import fiche106 from './../../contenu/ce2/italien/tempo-stagioni/fiche.md';
import exercice106 from './../../contenu/ce2/italien/tempo-stagioni/exercice.json';
import fiche107 from './../../contenu/ce2/maths/nombres-jusqu-a-10000/fiche.md';
import exercice107 from './../../contenu/ce2/maths/nombres-jusqu-a-10000/exercice.json';
import fiche108 from './../../contenu/ce2/maths/calcul-mental/fiche.md';
import exercice108 from './../../contenu/ce2/maths/calcul-mental/exercice.json';
import fiche109 from './../../contenu/ce2/maths/multiplication-posee/fiche.md';
import exercice109 from './../../contenu/ce2/maths/multiplication-posee/exercice.json';
import fiche110 from './../../contenu/ce2/maths/angles-et-polygones/fiche.md';
import exercice110 from './../../contenu/ce2/maths/angles-et-polygones/exercice.json';
import fiche111 from './../../contenu/ce2/maths/sens-de-la-division/fiche.md';
import exercice111 from './../../contenu/ce2/maths/sens-de-la-division/exercice.json';
import fiche112 from './../../contenu/ce2/maths/perimetre-et-mesures/fiche.md';
import exercice112 from './../../contenu/ce2/maths/perimetre-et-mesures/exercice.json';
import fiche113 from './../../contenu/ce2/maths/symetrie-axiale/fiche.md';
import exercice113 from './../../contenu/ce2/maths/symetrie-axiale/exercice.json';
import fiche114 from './../../contenu/ce2/maths/fractions-simples/fiche.md';
import exercice114 from './../../contenu/ce2/maths/fractions-simples/exercice.json';
import fiche115 from './../../contenu/ce2/maths/solides-et-patrons/fiche.md';
import exercice115 from './../../contenu/ce2/maths/solides-et-patrons/exercice.json';
import fiche116 from './../../contenu/ce2/maths/tableaux-et-graphiques/fiche.md';
import exercice116 from './../../contenu/ce2/maths/tableaux-et-graphiques/exercice.json';
import fiche117 from './../../contenu/ce2/maths/problemes/fiche.md';
import exercice117 from './../../contenu/ce2/maths/problemes/exercice.json';
import fiche118 from './../../contenu/ce2/sciences/classer-les-animaux/fiche.md';
import exercice118 from './../../contenu/ce2/sciences/classer-les-animaux/exercice.json';
import fiche119 from './../../contenu/ce2/sciences/plantes-et-milieux-de-vie/fiche.md';
import exercice119 from './../../contenu/ce2/sciences/plantes-et-milieux-de-vie/exercice.json';
import fiche120 from './../../contenu/ce2/sciences/melanges-et-solutions/fiche.md';
import exercice120 from './../../contenu/ce2/sciences/melanges-et-solutions/exercice.json';
import fiche121 from './../../contenu/ce2/sciences/circuits-electriques-simples/fiche.md';
import exercice121 from './../../contenu/ce2/sciences/circuits-electriques-simples/exercice.json';
import fiche122 from './../../contenu/ce2/sciences/la-terre-le-soleil-la-lune/fiche.md';
import exercice122 from './../../contenu/ce2/sciences/la-terre-le-soleil-la-lune/exercice.json';
import fiche123 from './../../contenu/cm1/allemand/laender-nationalitaeten/fiche.md';
import exercice123 from './../../contenu/cm1/allemand/laender-nationalitaeten/exercice.json';
import fiche124 from './../../contenu/cm1/allemand/haus/fiche.md';
import exercice124 from './../../contenu/cm1/allemand/haus/exercice.json';
import fiche125 from './../../contenu/cm1/allemand/uhrzeit-tagesablauf/fiche.md';
import exercice125 from './../../contenu/cm1/allemand/uhrzeit-tagesablauf/exercice.json';
import fiche126 from './../../contenu/cm1/allemand/sport-hobbys/fiche.md';
import exercice126 from './../../contenu/cm1/allemand/sport-hobbys/exercice.json';
import fiche127 from './../../contenu/cm1/anglais/countries-nationalities/fiche.md';
import exercice127 from './../../contenu/cm1/anglais/countries-nationalities/exercice.json';
import fiche128 from './../../contenu/cm1/anglais/house-rooms/fiche.md';
import exercice128 from './../../contenu/cm1/anglais/house-rooms/exercice.json';
import fiche129 from './../../contenu/cm1/anglais/time-routine/fiche.md';
import exercice129 from './../../contenu/cm1/anglais/time-routine/exercice.json';
import fiche130 from './../../contenu/cm1/anglais/sports-hobbies/fiche.md';
import exercice130 from './../../contenu/cm1/anglais/sports-hobbies/exercice.json';
import fiche131 from './../../contenu/cm1/espagnol/paises-nacionalidades/fiche.md';
import exercice131 from './../../contenu/cm1/espagnol/paises-nacionalidades/exercice.json';
import fiche132 from './../../contenu/cm1/espagnol/casa/fiche.md';
import exercice132 from './../../contenu/cm1/espagnol/casa/exercice.json';
import fiche133 from './../../contenu/cm1/espagnol/hora-rutina/fiche.md';
import exercice133 from './../../contenu/cm1/espagnol/hora-rutina/exercice.json';
import fiche134 from './../../contenu/cm1/espagnol/deportes-ocio/fiche.md';
import exercice134 from './../../contenu/cm1/espagnol/deportes-ocio/exercice.json';
import fiche135 from './../../contenu/cm1/francais/accords-groupe-nominal/fiche.md';
import exercice135 from './../../contenu/cm1/francais/accords-groupe-nominal/exercice.json';
import fiche136 from './../../contenu/cm1/francais/complement-objet/fiche.md';
import exercice136 from './../../contenu/cm1/francais/complement-objet/exercice.json';
import fiche137 from './../../contenu/cm1/francais/futur-simple/fiche.md';
import exercice137 from './../../contenu/cm1/francais/futur-simple/exercice.json';
import fiche138 from './../../contenu/cm1/francais/imparfait/fiche.md';
import exercice138 from './../../contenu/cm1/francais/imparfait/exercice.json';
import fiche139 from './../../contenu/cm1/francais/passe-compose/fiche.md';
import exercice139 from './../../contenu/cm1/francais/passe-compose/exercice.json';
import fiche140 from './../../contenu/cm1/hist-geo/moyen-age/fiche.md';
import exercice140 from './../../contenu/cm1/hist-geo/moyen-age/exercice.json';
import fiche141 from './../../contenu/cm1/hist-geo/temps-modernes/fiche.md';
import exercice141 from './../../contenu/cm1/hist-geo/temps-modernes/exercice.json';
import fiche142 from './../../contenu/cm1/hist-geo/habiter-ville-campagne/fiche.md';
import exercice142 from './../../contenu/cm1/hist-geo/habiter-ville-campagne/exercice.json';
import fiche143 from './../../contenu/cm1/hist-geo/egalite-discriminations/fiche.md';
import exercice143 from './../../contenu/cm1/hist-geo/egalite-discriminations/exercice.json';
import fiche144 from './../../contenu/cm1/italien/paesi-nazionalita/fiche.md';
import exercice144 from './../../contenu/cm1/italien/paesi-nazionalita/exercice.json';
import fiche145 from './../../contenu/cm1/italien/casa/fiche.md';
import exercice145 from './../../contenu/cm1/italien/casa/exercice.json';
import fiche146 from './../../contenu/cm1/italien/ora-routine/fiche.md';
import exercice146 from './../../contenu/cm1/italien/ora-routine/exercice.json';
import fiche147 from './../../contenu/cm1/italien/sport-tempo-libero/fiche.md';
import exercice147 from './../../contenu/cm1/italien/sport-tempo-libero/exercice.json';
import fiche148 from './../../contenu/cm1/maths/grands-nombres/fiche.md';
import exercice148 from './../../contenu/cm1/maths/grands-nombres/exercice.json';
import fiche149 from './../../contenu/cm1/maths/multiplication-posee/fiche.md';
import exercice149 from './../../contenu/cm1/maths/multiplication-posee/exercice.json';
import fiche150 from './../../contenu/cm1/maths/division-euclidienne/fiche.md';
import exercice150 from './../../contenu/cm1/maths/division-euclidienne/exercice.json';
import fiche151 from './../../contenu/cm1/maths/angles/fiche.md';
import exercice151 from './../../contenu/cm1/maths/angles/exercice.json';
import fiche152 from './../../contenu/cm1/maths/fractions/fiche.md';
import exercice152 from './../../contenu/cm1/maths/fractions/exercice.json';
import fiche153 from './../../contenu/cm1/maths/nombres-decimaux/fiche.md';
import exercice153 from './../../contenu/cm1/maths/nombres-decimaux/exercice.json';
import fiche154 from './../../contenu/cm1/maths/operations-decimaux/fiche.md';
import exercice154 from './../../contenu/cm1/maths/operations-decimaux/exercice.json';
import fiche155 from './../../contenu/cm1/maths/symetrie-axiale/fiche.md';
import exercice155 from './../../contenu/cm1/maths/symetrie-axiale/exercice.json';
import fiche156 from './../../contenu/cm1/maths/durees/fiche.md';
import exercice156 from './../../contenu/cm1/maths/durees/exercice.json';
import fiche157 from './../../contenu/cm1/maths/cercle-triangles-perimetre-aire/fiche.md';
import exercice157 from './../../contenu/cm1/maths/cercle-triangles-perimetre-aire/exercice.json';
import fiche158 from './../../contenu/cm1/maths/proportionnalite/fiche.md';
import exercice158 from './../../contenu/cm1/maths/proportionnalite/exercice.json';
import fiche159 from './../../contenu/cm1/maths/tableaux-et-graphiques/fiche.md';
import exercice159 from './../../contenu/cm1/maths/tableaux-et-graphiques/exercice.json';
import fiche160 from './../../contenu/cm1/sciences/la-matiere-et-ses-transformations/fiche.md';
import exercice160 from './../../contenu/cm1/sciences/la-matiere-et-ses-transformations/exercice.json';
import fiche161 from './../../contenu/cm1/sciences/les-fonctions-du-vivant-la-nutrition/fiche.md';
import exercice161 from './../../contenu/cm1/sciences/les-fonctions-du-vivant-la-nutrition/exercice.json';
import fiche162 from './../../contenu/cm1/sciences/chaines-alimentaires-et-ecosystemes/fiche.md';
import exercice162 from './../../contenu/cm1/sciences/chaines-alimentaires-et-ecosystemes/exercice.json';
import fiche163 from './../../contenu/cm1/sciences/energie-et-circuits-electriques/fiche.md';
import exercice163 from './../../contenu/cm1/sciences/energie-et-circuits-electriques/exercice.json';
import fiche164 from './../../contenu/cm1/sciences/le-systeme-solaire/fiche.md';
import exercice164 from './../../contenu/cm1/sciences/le-systeme-solaire/exercice.json';
import fiche165 from './../../contenu/cm2/allemand/personen-beschreiben/fiche.md';
import exercice165 from './../../contenu/cm2/allemand/personen-beschreiben/exercice.json';
import fiche166 from './../../contenu/cm2/allemand/alltag-praesens/fiche.md';
import exercice166 from './../../contenu/cm2/allemand/alltag-praesens/exercice.json';
import fiche167 from './../../contenu/cm2/allemand/essen-mahlzeiten/fiche.md';
import exercice167 from './../../contenu/cm2/allemand/essen-mahlzeiten/exercice.json';
import fiche168 from './../../contenu/cm2/allemand/stadt-wegbeschreibung/fiche.md';
import exercice168 from './../../contenu/cm2/allemand/stadt-wegbeschreibung/exercice.json';
import fiche169 from './../../contenu/cm2/anglais/describing-people/fiche.md';
import exercice169 from './../../contenu/cm2/anglais/describing-people/exercice.json';
import fiche170 from './../../contenu/cm2/anglais/daily-habits/fiche.md';
import exercice170 from './../../contenu/cm2/anglais/daily-habits/exercice.json';
import fiche171 from './../../contenu/cm2/anglais/food-meals/fiche.md';
import exercice171 from './../../contenu/cm2/anglais/food-meals/exercice.json';
import fiche172 from './../../contenu/cm2/anglais/town-directions/fiche.md';
import exercice172 from './../../contenu/cm2/anglais/town-directions/exercice.json';
import fiche173 from './../../contenu/cm2/espagnol/describir-personas/fiche.md';
import exercice173 from './../../contenu/cm2/espagnol/describir-personas/exercice.json';
import fiche174 from './../../contenu/cm2/espagnol/presente-rutinas/fiche.md';
import exercice174 from './../../contenu/cm2/espagnol/presente-rutinas/exercice.json';
import fiche175 from './../../contenu/cm2/espagnol/comida-comidas/fiche.md';
import exercice175 from './../../contenu/cm2/espagnol/comida-comidas/exercice.json';
import fiche176 from './../../contenu/cm2/espagnol/ciudad-direcciones/fiche.md';
import exercice176 from './../../contenu/cm2/espagnol/ciudad-direcciones/exercice.json';
import fiche177 from './../../contenu/cm2/francais/sens-des-mots/fiche.md';
import exercice177 from './../../contenu/cm2/francais/sens-des-mots/exercice.json';
import fiche178 from './../../contenu/cm2/francais/complements-circonstanciels/fiche.md';
import exercice178 from './../../contenu/cm2/francais/complements-circonstanciels/exercice.json';
import fiche179 from './../../contenu/cm2/francais/homophones-ces-ses/fiche.md';
import exercice179 from './../../contenu/cm2/francais/homophones-ces-ses/exercice.json';
import fiche180 from './../../contenu/cm2/francais/accord-participe-passe/fiche.md';
import exercice180 from './../../contenu/cm2/francais/accord-participe-passe/exercice.json';
import fiche181 from './../../contenu/cm2/francais/plus-que-parfait/fiche.md';
import exercice181 from './../../contenu/cm2/francais/plus-que-parfait/exercice.json';
import fiche182 from './../../contenu/cm2/hist-geo/revolution-empire/fiche.md';
import exercice182 from './../../contenu/cm2/hist-geo/revolution-empire/exercice.json';
import fiche183 from './../../contenu/cm2/hist-geo/republique-democratie/fiche.md';
import exercice183 from './../../contenu/cm2/hist-geo/republique-democratie/exercice.json';
import fiche184 from './../../contenu/cm2/hist-geo/se-deplacer-communiquer/fiche.md';
import exercice184 from './../../contenu/cm2/hist-geo/se-deplacer-communiquer/exercice.json';
import fiche185 from './../../contenu/cm2/hist-geo/citoyennete-engagement/fiche.md';
import exercice185 from './../../contenu/cm2/hist-geo/citoyennete-engagement/exercice.json';
import fiche186 from './../../contenu/cm2/italien/descrivere-persone/fiche.md';
import exercice186 from './../../contenu/cm2/italien/descrivere-persone/exercice.json';
import fiche187 from './../../contenu/cm2/italien/presente-routine/fiche.md';
import exercice187 from './../../contenu/cm2/italien/presente-routine/exercice.json';
import fiche188 from './../../contenu/cm2/italien/cibo-pasti/fiche.md';
import exercice188 from './../../contenu/cm2/italien/cibo-pasti/exercice.json';
import fiche189 from './../../contenu/cm2/italien/citta-indicazioni/fiche.md';
import exercice189 from './../../contenu/cm2/italien/citta-indicazioni/exercice.json';
import fiche190 from './../../contenu/cm2/maths/grands-nombres/fiche.md';
import exercice190 from './../../contenu/cm2/maths/grands-nombres/exercice.json';
import fiche191 from './../../contenu/cm2/maths/calcul-mental/fiche.md';
import exercice191 from './../../contenu/cm2/maths/calcul-mental/exercice.json';
import fiche192 from './../../contenu/cm2/maths/fractions-et-operations/fiche.md';
import exercice192 from './../../contenu/cm2/maths/fractions-et-operations/exercice.json';
import fiche193 from './../../contenu/cm2/maths/operations-sur-les-decimaux/fiche.md';
import exercice193 from './../../contenu/cm2/maths/operations-sur-les-decimaux/exercice.json';
import fiche194 from './../../contenu/cm2/maths/division-posee/fiche.md';
import exercice194 from './../../contenu/cm2/maths/division-posee/exercice.json';
import fiche195 from './../../contenu/cm2/maths/angles-et-mesures/fiche.md';
import exercice195 from './../../contenu/cm2/maths/angles-et-mesures/exercice.json';
import fiche196 from './../../contenu/cm2/maths/symetrie-axiale/fiche.md';
import exercice196 from './../../contenu/cm2/maths/symetrie-axiale/exercice.json';
import fiche197 from './../../contenu/cm2/maths/proportionnalite-et-pourcentages/fiche.md';
import exercice197 from './../../contenu/cm2/maths/proportionnalite-et-pourcentages/exercice.json';
import fiche198 from './../../contenu/cm2/maths/aires-perimetres-volumes/fiche.md';
import exercice198 from './../../contenu/cm2/maths/aires-perimetres-volumes/exercice.json';
import fiche199 from './../../contenu/cm2/maths/solides-et-patrons/fiche.md';
import exercice199 from './../../contenu/cm2/maths/solides-et-patrons/exercice.json';
import fiche200 from './../../contenu/cm2/maths/graphiques-et-donnees/fiche.md';
import exercice200 from './../../contenu/cm2/maths/graphiques-et-donnees/exercice.json';
import fiche201 from './../../contenu/cm2/maths/problemes/fiche.md';
import exercice201 from './../../contenu/cm2/maths/problemes/exercice.json';
import fiche202 from './../../contenu/cm2/sciences/corps-humain-digestion-et-respiration/fiche.md';
import exercice202 from './../../contenu/cm2/sciences/corps-humain-digestion-et-respiration/exercice.json';
import fiche203 from './../../contenu/cm2/sciences/reproduction-des-etres-vivants/fiche.md';
import exercice203 from './../../contenu/cm2/sciences/reproduction-des-etres-vivants/exercice.json';
import fiche204 from './../../contenu/cm2/sciences/mouvements-et-forces/fiche.md';
import exercice204 from './../../contenu/cm2/sciences/mouvements-et-forces/exercice.json';
import fiche205 from './../../contenu/cm2/sciences/objets-programmes-et-informatique/fiche.md';
import exercice205 from './../../contenu/cm2/sciences/objets-programmes-et-informatique/exercice.json';
import fiche206 from './../../contenu/cm2/sciences/environnement-et-developpement-durable/fiche.md';
import exercice206 from './../../contenu/cm2/sciences/environnement-et-developpement-durable/exercice.json';
import fiche207 from './../../contenu/sixieme/allemand/phonetik-laute/fiche.md';
import exercice207 from './../../contenu/sixieme/allemand/phonetik-laute/exercice.json';
import fiche208 from './../../contenu/sixieme/allemand/personalpronomen/fiche.md';
import exercice208 from './../../contenu/sixieme/allemand/personalpronomen/exercice.json';
import fiche209 from './../../contenu/sixieme/allemand/sein-haben/fiche.md';
import exercice209 from './../../contenu/sixieme/allemand/sein-haben/exercice.json';
import fiche210 from './../../contenu/sixieme/allemand/artikel-genus/fiche.md';
import exercice210 from './../../contenu/sixieme/allemand/artikel-genus/exercice.json';
import fiche211 from './../../contenu/sixieme/allemand/wortschatz-schule/fiche.md';
import exercice211 from './../../contenu/sixieme/allemand/wortschatz-schule/exercice.json';
import fiche212 from './../../contenu/sixieme/allemand/praesens-regelmaessig/fiche.md';
import exercice212 from './../../contenu/sixieme/allemand/praesens-regelmaessig/exercice.json';
import fiche213 from './../../contenu/sixieme/allemand/satzstellung/fiche.md';
import exercice213 from './../../contenu/sixieme/allemand/satzstellung/exercice.json';
import fiche214 from './../../contenu/sixieme/allemand/fragesaetze/fiche.md';
import exercice214 from './../../contenu/sixieme/allemand/fragesaetze/exercice.json';
import fiche215 from './../../contenu/sixieme/allemand/wortschatz-essen/fiche.md';
import exercice215 from './../../contenu/sixieme/allemand/wortschatz-essen/exercice.json';
import fiche216 from './../../contenu/sixieme/allemand/landeskunde-deutschland/fiche.md';
import exercice216 from './../../contenu/sixieme/allemand/landeskunde-deutschland/exercice.json';
import fiche217 from './../../contenu/sixieme/anglais/phonetique-sons/fiche.md';
import exercice217 from './../../contenu/sixieme/anglais/phonetique-sons/exercice.json';
import fiche218 from './../../contenu/sixieme/anglais/se-presenter/fiche.md';
import exercice218 from './../../contenu/sixieme/anglais/se-presenter/exercice.json';
import fiche219 from './../../contenu/sixieme/anglais/articles-pluriels/fiche.md';
import exercice219 from './../../contenu/sixieme/anglais/articles-pluriels/exercice.json';
import fiche220 from './../../contenu/sixieme/anglais/vocabulaire-ecole/fiche.md';
import exercice220 from './../../contenu/sixieme/anglais/vocabulaire-ecole/exercice.json';
import fiche221 from './../../contenu/sixieme/anglais/have-got/fiche.md';
import exercice221 from './../../contenu/sixieme/anglais/have-got/exercice.json';
import fiche222 from './../../contenu/sixieme/anglais/there-is-there-are/fiche.md';
import exercice222 from './../../contenu/sixieme/anglais/there-is-there-are/exercice.json';
import fiche223 from './../../contenu/sixieme/anglais/present-simple/fiche.md';
import exercice223 from './../../contenu/sixieme/anglais/present-simple/exercice.json';
import fiche224 from './../../contenu/sixieme/anglais/questions-auxiliaires/fiche.md';
import exercice224 from './../../contenu/sixieme/anglais/questions-auxiliaires/exercice.json';
import fiche225 from './../../contenu/sixieme/anglais/vocabulaire-nourriture-repas/fiche.md';
import exercice225 from './../../contenu/sixieme/anglais/vocabulaire-nourriture-repas/exercice.json';
import fiche226 from './../../contenu/sixieme/anglais/civilisation-royaume-uni/fiche.md';
import exercice226 from './../../contenu/sixieme/anglais/civilisation-royaume-uni/exercice.json';
import fiche227 from './../../contenu/sixieme/arts/langage-plastique/fiche.md';
import exercice227 from './../../contenu/sixieme/arts/langage-plastique/exercice.json';
import fiche228 from './../../contenu/sixieme/arts/prehistoire-antiquite/fiche.md';
import exercice228 from './../../contenu/sixieme/arts/prehistoire-antiquite/exercice.json';
import fiche229 from './../../contenu/sixieme/espagnol/fonetica-sonidos/fiche.md';
import exercice229 from './../../contenu/sixieme/espagnol/fonetica-sonidos/exercice.json';
import fiche230 from './../../contenu/sixieme/espagnol/pronombres-personales/fiche.md';
import exercice230 from './../../contenu/sixieme/espagnol/pronombres-personales/exercice.json';
import fiche231 from './../../contenu/sixieme/espagnol/ser-estar/fiche.md';
import exercice231 from './../../contenu/sixieme/espagnol/ser-estar/exercice.json';
import fiche232 from './../../contenu/sixieme/espagnol/articulos-genero/fiche.md';
import exercice232 from './../../contenu/sixieme/espagnol/articulos-genero/exercice.json';
import fiche233 from './../../contenu/sixieme/espagnol/plural/fiche.md';
import exercice233 from './../../contenu/sixieme/espagnol/plural/exercice.json';
import fiche234 from './../../contenu/sixieme/espagnol/articulos-contractos/fiche.md';
import exercice234 from './../../contenu/sixieme/espagnol/articulos-contractos/exercice.json';
import fiche235 from './../../contenu/sixieme/espagnol/vocabulario-escuela/fiche.md';
import exercice235 from './../../contenu/sixieme/espagnol/vocabulario-escuela/exercice.json';
import fiche236 from './../../contenu/sixieme/espagnol/presente-regular/fiche.md';
import exercice236 from './../../contenu/sixieme/espagnol/presente-regular/exercice.json';
import fiche237 from './../../contenu/sixieme/espagnol/vocabulario-comida/fiche.md';
import exercice237 from './../../contenu/sixieme/espagnol/vocabulario-comida/exercice.json';
import fiche238 from './../../contenu/sixieme/espagnol/civilizacion-espana/fiche.md';
import exercice238 from './../../contenu/sixieme/espagnol/civilizacion-espana/exercice.json';
import fiche239 from './../../contenu/sixieme/francais/classes-grammaticales/fiche.md';
import exercice239 from './../../contenu/sixieme/francais/classes-grammaticales/exercice.json';
import fiche240 from './../../contenu/sixieme/francais/phrase-simple/fiche.md';
import exercice240 from './../../contenu/sixieme/francais/phrase-simple/exercice.json';
import fiche241 from './../../contenu/sixieme/francais/present-indicatif/fiche.md';
import exercice241 from './../../contenu/sixieme/francais/present-indicatif/exercice.json';
import fiche242 from './../../contenu/sixieme/francais/homophones-grammaticaux/fiche.md';
import exercice242 from './../../contenu/sixieme/francais/homophones-grammaticaux/exercice.json';
import fiche243 from './../../contenu/sixieme/francais/imparfait-passe-simple/fiche.md';
import exercice243 from './../../contenu/sixieme/francais/imparfait-passe-simple/exercice.json';
import fiche244 from './../../contenu/sixieme/francais/passe-compose-accord/fiche.md';
import exercice244 from './../../contenu/sixieme/francais/passe-compose-accord/exercice.json';
import fiche245 from './../../contenu/sixieme/francais/recit-conte-fable/fiche.md';
import exercice245 from './../../contenu/sixieme/francais/recit-conte-fable/exercice.json';
import fiche246 from './../../contenu/sixieme/hist-geo/premiers-etats-ecritures/fiche.md';
import exercice246 from './../../contenu/sixieme/hist-geo/premiers-etats-ecritures/exercice.json';
import fiche247 from './../../contenu/sixieme/hist-geo/monde-grec/fiche.md';
import exercice247 from './../../contenu/sixieme/hist-geo/monde-grec/exercice.json';
import fiche248 from './../../contenu/sixieme/hist-geo/rome-republique-empire/fiche.md';
import exercice248 from './../../contenu/sixieme/hist-geo/rome-republique-empire/exercice.json';
import fiche249 from './../../contenu/sixieme/hist-geo/judaisme-christianisme/fiche.md';
import exercice249 from './../../contenu/sixieme/hist-geo/judaisme-christianisme/exercice.json';
import fiche250 from './../../contenu/sixieme/hist-geo/habiter-metropole/fiche.md';
import exercice250 from './../../contenu/sixieme/hist-geo/habiter-metropole/exercice.json';
import fiche251 from './../../contenu/sixieme/hist-geo/habiter-espaces-contraintes/fiche.md';
import exercice251 from './../../contenu/sixieme/hist-geo/habiter-espaces-contraintes/exercice.json';
import fiche252 from './../../contenu/sixieme/hist-geo/emc-college-droits/fiche.md';
import exercice252 from './../../contenu/sixieme/hist-geo/emc-college-droits/exercice.json';
import fiche253 from './../../contenu/sixieme/italien/fonetica-suoni/fiche.md';
import exercice253 from './../../contenu/sixieme/italien/fonetica-suoni/exercice.json';
import fiche254 from './../../contenu/sixieme/italien/pronomi-personali/fiche.md';
import exercice254 from './../../contenu/sixieme/italien/pronomi-personali/exercice.json';
import fiche255 from './../../contenu/sixieme/italien/essere-avere/fiche.md';
import exercice255 from './../../contenu/sixieme/italien/essere-avere/exercice.json';
import fiche256 from './../../contenu/sixieme/italien/articoli-genere/fiche.md';
import exercice256 from './../../contenu/sixieme/italien/articoli-genere/exercice.json';
import fiche257 from './../../contenu/sixieme/italien/plurale/fiche.md';
import exercice257 from './../../contenu/sixieme/italien/plurale/exercice.json';
import fiche258 from './../../contenu/sixieme/italien/preposizioni-articolate/fiche.md';
import exercice258 from './../../contenu/sixieme/italien/preposizioni-articolate/exercice.json';
import fiche259 from './../../contenu/sixieme/italien/vocabolario-scuola/fiche.md';
import exercice259 from './../../contenu/sixieme/italien/vocabolario-scuola/exercice.json';
import fiche260 from './../../contenu/sixieme/italien/presente-regolare/fiche.md';
import exercice260 from './../../contenu/sixieme/italien/presente-regolare/exercice.json';
import fiche261 from './../../contenu/sixieme/italien/vocabolario-cibo/fiche.md';
import exercice261 from './../../contenu/sixieme/italien/vocabolario-cibo/exercice.json';
import fiche262 from './../../contenu/sixieme/italien/civilta-italia/fiche.md';
import exercice262 from './../../contenu/sixieme/italien/civilta-italia/exercice.json';
import fiche263 from './../../contenu/sixieme/maths/nombres-entiers-decimaux/fiche.md';
import exercice263 from './../../contenu/sixieme/maths/nombres-entiers-decimaux/exercice.json';
import fiche264 from './../../contenu/sixieme/maths/configurations-planes/fiche.md';
import exercice264 from './../../contenu/sixieme/maths/configurations-planes/exercice.json';
import fiche265 from './../../contenu/sixieme/maths/fractions/fiche.md';
import exercice265 from './../../contenu/sixieme/maths/fractions/exercice.json';
import fiche266 from './../../contenu/sixieme/maths/longueurs-aires-volumes/fiche.md';
import exercice266 from './../../contenu/sixieme/maths/longueurs-aires-volumes/exercice.json';
import fiche267 from './../../contenu/sixieme/maths/durees/fiche.md';
import exercice267 from './../../contenu/sixieme/maths/durees/exercice.json';
import fiche268 from './../../contenu/sixieme/maths/proportionnalite/fiche.md';
import exercice268 from './../../contenu/sixieme/maths/proportionnalite/exercice.json';
import fiche269 from './../../contenu/sixieme/maths/initiation-algebre/fiche.md';
import exercice269 from './../../contenu/sixieme/maths/initiation-algebre/exercice.json';
import fiche270 from './../../contenu/sixieme/maths/gestion-donnees/fiche.md';
import exercice270 from './../../contenu/sixieme/maths/gestion-donnees/exercice.json';
import fiche271 from './../../contenu/sixieme/maths/probabilites/fiche.md';
import exercice271 from './../../contenu/sixieme/maths/probabilites/exercice.json';
import fiche272 from './../../contenu/sixieme/maths/pensee-informatique/fiche.md';
import exercice272 from './../../contenu/sixieme/maths/pensee-informatique/exercice.json';
import fiche273 from './../../contenu/sixieme/svt/caracteristiques-du-vivant/fiche.md';
import exercice273 from './../../contenu/sixieme/svt/caracteristiques-du-vivant/exercice.json';
import fiche274 from './../../contenu/sixieme/svt/classification-des-etres-vivants/fiche.md';
import exercice274 from './../../contenu/sixieme/svt/classification-des-etres-vivants/exercice.json';
import fiche275 from './../../contenu/sixieme/svt/besoins-des-vegetaux/fiche.md';
import exercice275 from './../../contenu/sixieme/svt/besoins-des-vegetaux/exercice.json';
import fiche276 from './../../contenu/sixieme/svt/origine-de-la-matiere-organique/fiche.md';
import exercice276 from './../../contenu/sixieme/svt/origine-de-la-matiere-organique/exercice.json';
import fiche277 from './../../contenu/sixieme/svt/peuplement-des-milieux/fiche.md';
import exercice277 from './../../contenu/sixieme/svt/peuplement-des-milieux/exercice.json';
import fiche278 from './../../contenu/sixieme/techno/objets-techniques-et-besoins/fiche.md';
import exercice278 from './../../contenu/sixieme/techno/objets-techniques-et-besoins/exercice.json';
import fiche279 from './../../contenu/sixieme/techno/fonctionnement-dun-objet/fiche.md';
import exercice279 from './../../contenu/sixieme/techno/fonctionnement-dun-objet/exercice.json';
import fiche280 from './../../contenu/sixieme/techno/materiaux-et-familles/fiche.md';
import exercice280 from './../../contenu/sixieme/techno/materiaux-et-familles/exercice.json';
import fiche281 from './../../contenu/sixieme/techno/representation-dun-objet/fiche.md';
import exercice281 from './../../contenu/sixieme/techno/representation-dun-objet/exercice.json';
import fiche282 from './../../contenu/sixieme/techno/initiation-programmation/fiche.md';
import exercice282 from './../../contenu/sixieme/techno/initiation-programmation/exercice.json';
import fiche283 from './../../contenu/cinquieme/allemand/negation/fiche.md';
import exercice283 from './../../contenu/cinquieme/allemand/negation/exercice.json';
import fiche284 from './../../contenu/cinquieme/allemand/akkusativ/fiche.md';
import exercice284 from './../../contenu/cinquieme/allemand/akkusativ/exercice.json';
import fiche285 from './../../contenu/cinquieme/allemand/possessivartikel/fiche.md';
import exercice285 from './../../contenu/cinquieme/allemand/possessivartikel/exercice.json';
import fiche286 from './../../contenu/cinquieme/allemand/wortschatz-stadt-reisen/fiche.md';
import exercice286 from './../../contenu/cinquieme/allemand/wortschatz-stadt-reisen/exercice.json';
import fiche287 from './../../contenu/cinquieme/allemand/trennbare-verben/fiche.md';
import exercice287 from './../../contenu/cinquieme/allemand/trennbare-verben/exercice.json';
import fiche288 from './../../contenu/cinquieme/allemand/modalverben/fiche.md';
import exercice288 from './../../contenu/cinquieme/allemand/modalverben/exercice.json';
import fiche289 from './../../contenu/cinquieme/allemand/wortschatz-natur-tiere/fiche.md';
import exercice289 from './../../contenu/cinquieme/allemand/wortschatz-natur-tiere/exercice.json';
import fiche290 from './../../contenu/cinquieme/allemand/praeteritum-sein-haben/fiche.md';
import exercice290 from './../../contenu/cinquieme/allemand/praeteritum-sein-haben/exercice.json';
import fiche291 from './../../contenu/cinquieme/allemand/landeskunde-oesterreich-schweiz/fiche.md';
import exercice291 from './../../contenu/cinquieme/allemand/landeskunde-oesterreich-schweiz/exercice.json';
import fiche292 from './../../contenu/cinquieme/anglais/present-continu/fiche.md';
import exercice292 from './../../contenu/cinquieme/anglais/present-continu/exercice.json';
import fiche293 from './../../contenu/cinquieme/anglais/prepositions/fiche.md';
import exercice293 from './../../contenu/cinquieme/anglais/prepositions/exercice.json';
import fiche294 from './../../contenu/cinquieme/anglais/vocabulaire-ville-voyages/fiche.md';
import exercice294 from './../../contenu/cinquieme/anglais/vocabulaire-ville-voyages/exercice.json';
import fiche295 from './../../contenu/cinquieme/anglais/preterit-simple/fiche.md';
import exercice295 from './../../contenu/cinquieme/anglais/preterit-simple/exercice.json';
import fiche296 from './../../contenu/cinquieme/anglais/comparatifs-superlatifs/fiche.md';
import exercice296 from './../../contenu/cinquieme/anglais/comparatifs-superlatifs/exercice.json';
import fiche297 from './../../contenu/cinquieme/anglais/vocabulaire-nature-animaux/fiche.md';
import exercice297 from './../../contenu/cinquieme/anglais/vocabulaire-nature-animaux/exercice.json';
import fiche298 from './../../contenu/cinquieme/anglais/modaux-can-must/fiche.md';
import exercice298 from './../../contenu/cinquieme/anglais/modaux-can-must/exercice.json';
import fiche299 from './../../contenu/cinquieme/anglais/futur-will-going-to/fiche.md';
import exercice299 from './../../contenu/cinquieme/anglais/futur-will-going-to/exercice.json';
import fiche300 from './../../contenu/cinquieme/anglais/civilisation-etats-unis/fiche.md';
import exercice300 from './../../contenu/cinquieme/anglais/civilisation-etats-unis/exercice.json';
import fiche301 from './../../contenu/cinquieme/arts/la-couleur/fiche.md';
import exercice301 from './../../contenu/cinquieme/arts/la-couleur/exercice.json';
import fiche302 from './../../contenu/cinquieme/arts/moyen-age/fiche.md';
import exercice302 from './../../contenu/cinquieme/arts/moyen-age/exercice.json';
import fiche303 from './../../contenu/cinquieme/espagnol/interrogacion-negacion/fiche.md';
import exercice303 from './../../contenu/cinquieme/espagnol/interrogacion-negacion/exercice.json';
import fiche304 from './../../contenu/cinquieme/espagnol/ser-estar-usos/fiche.md';
import exercice304 from './../../contenu/cinquieme/espagnol/ser-estar-usos/exercice.json';
import fiche305 from './../../contenu/cinquieme/espagnol/hay-estar/fiche.md';
import exercice305 from './../../contenu/cinquieme/espagnol/hay-estar/exercice.json';
import fiche306 from './../../contenu/cinquieme/espagnol/posesivos/fiche.md';
import exercice306 from './../../contenu/cinquieme/espagnol/posesivos/exercice.json';
import fiche307 from './../../contenu/cinquieme/espagnol/vocabulario-ciudad-viajes/fiche.md';
import exercice307 from './../../contenu/cinquieme/espagnol/vocabulario-ciudad-viajes/exercice.json';
import fiche308 from './../../contenu/cinquieme/espagnol/presente-irregular/fiche.md';
import exercice308 from './../../contenu/cinquieme/espagnol/presente-irregular/exercice.json';
import fiche309 from './../../contenu/cinquieme/espagnol/gustar/fiche.md';
import exercice309 from './../../contenu/cinquieme/espagnol/gustar/exercice.json';
import fiche310 from './../../contenu/cinquieme/espagnol/vocabulario-naturaleza-animales/fiche.md';
import exercice310 from './../../contenu/cinquieme/espagnol/vocabulario-naturaleza-animales/exercice.json';
import fiche311 from './../../contenu/cinquieme/espagnol/civilizacion-mexico-latinoamerica/fiche.md';
import exercice311 from './../../contenu/cinquieme/espagnol/civilizacion-mexico-latinoamerica/exercice.json';
import fiche312 from './../../contenu/cinquieme/francais/expansions-du-nom/fiche.md';
import exercice312 from './../../contenu/cinquieme/francais/expansions-du-nom/exercice.json';
import fiche313 from './../../contenu/cinquieme/francais/propositions/fiche.md';
import exercice313 from './../../contenu/cinquieme/francais/propositions/exercice.json';
import fiche314 from './../../contenu/cinquieme/francais/temps-composes/fiche.md';
import exercice314 from './../../contenu/cinquieme/francais/temps-composes/exercice.json';
import fiche315 from './../../contenu/cinquieme/francais/futur-conditionnel/fiche.md';
import exercice315 from './../../contenu/cinquieme/francais/futur-conditionnel/exercice.json';
import fiche316 from './../../contenu/cinquieme/francais/champ-lexical-connotation/fiche.md';
import exercice316 from './../../contenu/cinquieme/francais/champ-lexical-connotation/exercice.json';
import fiche317 from './../../contenu/cinquieme/francais/discours-direct-indirect/fiche.md';
import exercice317 from './../../contenu/cinquieme/francais/discours-direct-indirect/exercice.json';
import fiche318 from './../../contenu/cinquieme/francais/texte-de-theatre/fiche.md';
import exercice318 from './../../contenu/cinquieme/francais/texte-de-theatre/exercice.json';
import fiche319 from './../../contenu/cinquieme/hist-geo/islam-debuts-expansion/fiche.md';
import exercice319 from './../../contenu/cinquieme/hist-geo/islam-debuts-expansion/exercice.json';
import fiche320 from './../../contenu/cinquieme/hist-geo/occident-feodal/fiche.md';
import exercice320 from './../../contenu/cinquieme/hist-geo/occident-feodal/exercice.json';
import fiche321 from './../../contenu/cinquieme/hist-geo/roi-et-ville-moyen-age/fiche.md';
import exercice321 from './../../contenu/cinquieme/hist-geo/roi-et-ville-moyen-age/exercice.json';
import fiche322 from './../../contenu/cinquieme/hist-geo/renaissance-humanisme-reformes/fiche.md';
import exercice322 from './../../contenu/cinquieme/hist-geo/renaissance-humanisme-reformes/exercice.json';
import fiche323 from './../../contenu/cinquieme/hist-geo/demographie-developpement/fiche.md';
import exercice323 from './../../contenu/cinquieme/hist-geo/demographie-developpement/exercice.json';
import fiche324 from './../../contenu/cinquieme/hist-geo/ressources-eau-alimentation-energie/fiche.md';
import exercice324 from './../../contenu/cinquieme/hist-geo/ressources-eau-alimentation-energie/exercice.json';
import fiche325 from './../../contenu/cinquieme/hist-geo/emc-egalite-developpement-durable/fiche.md';
import exercice325 from './../../contenu/cinquieme/hist-geo/emc-egalite-developpement-durable/exercice.json';
import fiche326 from './../../contenu/cinquieme/italien/interrogazione-negazione/fiche.md';
import exercice326 from './../../contenu/cinquieme/italien/interrogazione-negazione/exercice.json';
import fiche327 from './../../contenu/cinquieme/italien/essere-esserci/fiche.md';
import exercice327 from './../../contenu/cinquieme/italien/essere-esserci/exercice.json';
import fiche328 from './../../contenu/cinquieme/italien/ce-ci-sono/fiche.md';
import exercice328 from './../../contenu/cinquieme/italien/ce-ci-sono/exercice.json';
import fiche329 from './../../contenu/cinquieme/italien/possessivi/fiche.md';
import exercice329 from './../../contenu/cinquieme/italien/possessivi/exercice.json';
import fiche330 from './../../contenu/cinquieme/italien/vocabolario-citta-viaggi/fiche.md';
import exercice330 from './../../contenu/cinquieme/italien/vocabolario-citta-viaggi/exercice.json';
import fiche331 from './../../contenu/cinquieme/italien/presente-irregolare/fiche.md';
import exercice331 from './../../contenu/cinquieme/italien/presente-irregolare/exercice.json';
import fiche332 from './../../contenu/cinquieme/italien/piacere/fiche.md';
import exercice332 from './../../contenu/cinquieme/italien/piacere/exercice.json';
import fiche333 from './../../contenu/cinquieme/italien/vocabolario-natura-animali/fiche.md';
import exercice333 from './../../contenu/cinquieme/italien/vocabolario-natura-animali/exercice.json';
import fiche334 from './../../contenu/cinquieme/italien/civilta-regioni-citta/fiche.md';
import exercice334 from './../../contenu/cinquieme/italien/civilta-regioni-citta/exercice.json';
import fiche335 from './../../contenu/cinquieme/langues-anciennes/latin-decouverte/fiche.md';
import exercice335 from './../../contenu/cinquieme/langues-anciennes/latin-decouverte/exercice.json';
import fiche336 from './../../contenu/cinquieme/langues-anciennes/latin-present/fiche.md';
import exercice336 from './../../contenu/cinquieme/langues-anciennes/latin-present/exercice.json';
import fiche337 from './../../contenu/cinquieme/maths/operations/fiche.md';
import exercice337 from './../../contenu/cinquieme/maths/operations/exercice.json';
import fiche338 from './../../contenu/cinquieme/maths/fractions/fiche.md';
import exercice338 from './../../contenu/cinquieme/maths/fractions/exercice.json';
import fiche339 from './../../contenu/cinquieme/maths/nombres-relatifs/fiche.md';
import exercice339 from './../../contenu/cinquieme/maths/nombres-relatifs/exercice.json';
import fiche340 from './../../contenu/cinquieme/maths/reperage/fiche.md';
import exercice340 from './../../contenu/cinquieme/maths/reperage/exercice.json';
import fiche341 from './../../contenu/cinquieme/maths/calcul-litteral/fiche.md';
import exercice341 from './../../contenu/cinquieme/maths/calcul-litteral/exercice.json';
import fiche342 from './../../contenu/cinquieme/maths/puissances/fiche.md';
import exercice342 from './../../contenu/cinquieme/maths/puissances/exercice.json';
import fiche343 from './../../contenu/cinquieme/maths/proportionnalite/fiche.md';
import exercice343 from './../../contenu/cinquieme/maths/proportionnalite/exercice.json';
import fiche344 from './../../contenu/cinquieme/maths/triangles-angles/fiche.md';
import exercice344 from './../../contenu/cinquieme/maths/triangles-angles/exercice.json';
import fiche345 from './../../contenu/cinquieme/maths/parallelogrammes/fiche.md';
import exercice345 from './../../contenu/cinquieme/maths/parallelogrammes/exercice.json';
import fiche346 from './../../contenu/cinquieme/maths/transformations/fiche.md';
import exercice346 from './../../contenu/cinquieme/maths/transformations/exercice.json';
import fiche347 from './../../contenu/cinquieme/maths/representation-espace/fiche.md';
import exercice347 from './../../contenu/cinquieme/maths/representation-espace/exercice.json';
import fiche348 from './../../contenu/cinquieme/maths/fonctions/fiche.md';
import exercice348 from './../../contenu/cinquieme/maths/fonctions/exercice.json';
import fiche349 from './../../contenu/cinquieme/maths/statistiques/fiche.md';
import exercice349 from './../../contenu/cinquieme/maths/statistiques/exercice.json';
import fiche350 from './../../contenu/cinquieme/maths/probabilites/fiche.md';
import exercice350 from './../../contenu/cinquieme/maths/probabilites/exercice.json';
import fiche351 from './../../contenu/cinquieme/maths/pensee-informatique/fiche.md';
import exercice351 from './../../contenu/cinquieme/maths/pensee-informatique/exercice.json';
import fiche352 from './../../contenu/cinquieme/physique-chimie/proprietes-matiere/fiche.md';
import exercice352 from './../../contenu/cinquieme/physique-chimie/proprietes-matiere/exercice.json';
import fiche353 from './../../contenu/cinquieme/physique-chimie/corps-purs-melanges/fiche.md';
import exercice353 from './../../contenu/cinquieme/physique-chimie/corps-purs-melanges/exercice.json';
import fiche354 from './../../contenu/cinquieme/physique-chimie/transformation-chimique/fiche.md';
import exercice354 from './../../contenu/cinquieme/physique-chimie/transformation-chimique/exercice.json';
import fiche355 from './../../contenu/cinquieme/physique-chimie/mouvement-vitesse/fiche.md';
import exercice355 from './../../contenu/cinquieme/physique-chimie/mouvement-vitesse/exercice.json';
import fiche356 from './../../contenu/cinquieme/physique-chimie/energie-electricite/fiche.md';
import exercice356 from './../../contenu/cinquieme/physique-chimie/energie-electricite/exercice.json';
import fiche357 from './../../contenu/cinquieme/physique-chimie/signaux-sonores-lumineux/fiche.md';
import exercice357 from './../../contenu/cinquieme/physique-chimie/signaux-sonores-lumineux/exercice.json';
import fiche358 from './../../contenu/cinquieme/svt/respiration-et-milieux-de-vie/fiche.md';
import exercice358 from './../../contenu/cinquieme/svt/respiration-et-milieux-de-vie/exercice.json';
import fiche359 from './../../contenu/cinquieme/svt/nutrition-et-systeme-digestif/fiche.md';
import exercice359 from './../../contenu/cinquieme/svt/nutrition-et-systeme-digestif/exercice.json';
import fiche360 from './../../contenu/cinquieme/svt/circulation-et-sang/fiche.md';
import exercice360 from './../../contenu/cinquieme/svt/circulation-et-sang/exercice.json';
import fiche361 from './../../contenu/cinquieme/svt/reproduction-et-puberte/fiche.md';
import exercice361 from './../../contenu/cinquieme/svt/reproduction-et-puberte/exercice.json';
import fiche362 from './../../contenu/cinquieme/svt/roches-erosion-et-paysages/fiche.md';
import exercice362 from './../../contenu/cinquieme/svt/roches-erosion-et-paysages/exercice.json';
import fiche363 from './../../contenu/cinquieme/techno/besoin-et-cahier-des-charges/fiche.md';
import exercice363 from './../../contenu/cinquieme/techno/besoin-et-cahier-des-charges/exercice.json';
import fiche364 from './../../contenu/cinquieme/techno/proprietes-des-materiaux/fiche.md';
import exercice364 from './../../contenu/cinquieme/techno/proprietes-des-materiaux/exercice.json';
import fiche365 from './../../contenu/cinquieme/techno/structures-et-stabilite/fiche.md';
import exercice365 from './../../contenu/cinquieme/techno/structures-et-stabilite/exercice.json';
import fiche366 from './../../contenu/cinquieme/techno/chaine-denergie/fiche.md';
import exercice366 from './../../contenu/cinquieme/techno/chaine-denergie/exercice.json';
import fiche367 from './../../contenu/cinquieme/techno/programmation-et-capteurs/fiche.md';
import exercice367 from './../../contenu/cinquieme/techno/programmation-et-capteurs/exercice.json';
import fiche368 from './../../contenu/quatrieme/allemand/dativ/fiche.md';
import exercice368 from './../../contenu/quatrieme/allemand/dativ/exercice.json';
import fiche369 from './../../contenu/quatrieme/allemand/pronomen-akkusativ-dativ/fiche.md';
import exercice369 from './../../contenu/quatrieme/allemand/pronomen-akkusativ-dativ/exercice.json';
import fiche370 from './../../contenu/quatrieme/allemand/wechselpraepositionen/fiche.md';
import exercice370 from './../../contenu/quatrieme/allemand/wechselpraepositionen/exercice.json';
import fiche371 from './../../contenu/quatrieme/allemand/wortschatz-sport-freizeit/fiche.md';
import exercice371 from './../../contenu/quatrieme/allemand/wortschatz-sport-freizeit/exercice.json';
import fiche372 from './../../contenu/quatrieme/allemand/perfekt/fiche.md';
import exercice372 from './../../contenu/quatrieme/allemand/perfekt/exercice.json';
import fiche373 from './../../contenu/quatrieme/allemand/imperativ/fiche.md';
import exercice373 from './../../contenu/quatrieme/allemand/imperativ/exercice.json';
import fiche374 from './../../contenu/quatrieme/allemand/wortschatz-gesundheit-koerper/fiche.md';
import exercice374 from './../../contenu/quatrieme/allemand/wortschatz-gesundheit-koerper/exercice.json';
import fiche375 from './../../contenu/quatrieme/allemand/komparativ-superlativ/fiche.md';
import exercice375 from './../../contenu/quatrieme/allemand/komparativ-superlativ/exercice.json';
import fiche376 from './../../contenu/quatrieme/allemand/landeskunde-staedte/fiche.md';
import exercice376 from './../../contenu/quatrieme/allemand/landeskunde-staedte/exercice.json';
import fiche377 from './../../contenu/quatrieme/allemand/landeskunde-feste-traditionen/fiche.md';
import exercice377 from './../../contenu/quatrieme/allemand/landeskunde-feste-traditionen/exercice.json';
import fiche378 from './../../contenu/quatrieme/anglais/word-order/fiche.md';
import exercice378 from './../../contenu/quatrieme/anglais/word-order/exercice.json';
import fiche379 from './../../contenu/quatrieme/anglais/quantifieurs/fiche.md';
import exercice379 from './../../contenu/quatrieme/anglais/quantifieurs/exercice.json';
import fiche380 from './../../contenu/quatrieme/anglais/vocabulaire-sport-loisirs/fiche.md';
import exercice380 from './../../contenu/quatrieme/anglais/vocabulaire-sport-loisirs/exercice.json';
import fiche381 from './../../contenu/quatrieme/anglais/present-perfect/fiche.md';
import exercice381 from './../../contenu/quatrieme/anglais/present-perfect/exercice.json';
import fiche382 from './../../contenu/quatrieme/anglais/preterit-vs-present-perfect/fiche.md';
import exercice382 from './../../contenu/quatrieme/anglais/preterit-vs-present-perfect/exercice.json';
import fiche383 from './../../contenu/quatrieme/anglais/vocabulaire-sante-corps/fiche.md';
import exercice383 from './../../contenu/quatrieme/anglais/vocabulaire-sante-corps/exercice.json';
import fiche384 from './../../contenu/quatrieme/anglais/propositions-relatives/fiche.md';
import exercice384 from './../../contenu/quatrieme/anglais/propositions-relatives/exercice.json';
import fiche385 from './../../contenu/quatrieme/anglais/discours-indirect/fiche.md';
import exercice385 from './../../contenu/quatrieme/anglais/discours-indirect/exercice.json';
import fiche386 from './../../contenu/quatrieme/anglais/civilisation-londres/fiche.md';
import exercice386 from './../../contenu/quatrieme/anglais/civilisation-londres/exercice.json';
import fiche387 from './../../contenu/quatrieme/anglais/civilisation-australie/fiche.md';
import exercice387 from './../../contenu/quatrieme/anglais/civilisation-australie/exercice.json';
import fiche388 from './../../contenu/quatrieme/arts/langage-musical/fiche.md';
import exercice388 from './../../contenu/quatrieme/arts/langage-musical/exercice.json';
import fiche389 from './../../contenu/quatrieme/arts/renaissance/fiche.md';
import exercice389 from './../../contenu/quatrieme/arts/renaissance/exercice.json';
import fiche390 from './../../contenu/quatrieme/espagnol/muy-mucho/fiche.md';
import exercice390 from './../../contenu/quatrieme/espagnol/muy-mucho/exercice.json';
import fiche391 from './../../contenu/quatrieme/espagnol/comparativos-superlativos/fiche.md';
import exercice391 from './../../contenu/quatrieme/espagnol/comparativos-superlativos/exercice.json';
import fiche392 from './../../contenu/quatrieme/espagnol/estar-gerundio/fiche.md';
import exercice392 from './../../contenu/quatrieme/espagnol/estar-gerundio/exercice.json';
import fiche393 from './../../contenu/quatrieme/espagnol/vocabulario-deporte-ocio/fiche.md';
import exercice393 from './../../contenu/quatrieme/espagnol/vocabulario-deporte-ocio/exercice.json';
import fiche394 from './../../contenu/quatrieme/espagnol/preterito-perfecto/fiche.md';
import exercice394 from './../../contenu/quatrieme/espagnol/preterito-perfecto/exercice.json';
import fiche395 from './../../contenu/quatrieme/espagnol/preterito-indefinido/fiche.md';
import exercice395 from './../../contenu/quatrieme/espagnol/preterito-indefinido/exercice.json';
import fiche396 from './../../contenu/quatrieme/espagnol/vocabulario-salud-cuerpo/fiche.md';
import exercice396 from './../../contenu/quatrieme/espagnol/vocabulario-salud-cuerpo/exercice.json';
import fiche397 from './../../contenu/quatrieme/espagnol/futuro/fiche.md';
import exercice397 from './../../contenu/quatrieme/espagnol/futuro/exercice.json';
import fiche398 from './../../contenu/quatrieme/espagnol/civilizacion-ciudades/fiche.md';
import exercice398 from './../../contenu/quatrieme/espagnol/civilizacion-ciudades/exercice.json';
import fiche399 from './../../contenu/quatrieme/espagnol/civilizacion-argentina/fiche.md';
import exercice399 from './../../contenu/quatrieme/espagnol/civilizacion-argentina/exercice.json';
import fiche400 from './../../contenu/quatrieme/francais/propositions-subordonnees/fiche.md';
import exercice400 from './../../contenu/quatrieme/francais/propositions-subordonnees/exercice.json';
import fiche401 from './../../contenu/quatrieme/francais/voix-active-passive/fiche.md';
import exercice401 from './../../contenu/quatrieme/francais/voix-active-passive/exercice.json';
import fiche402 from './../../contenu/quatrieme/francais/valeurs-des-temps/fiche.md';
import exercice402 from './../../contenu/quatrieme/francais/valeurs-des-temps/exercice.json';
import fiche403 from './../../contenu/quatrieme/francais/present-subjonctif/fiche.md';
import exercice403 from './../../contenu/quatrieme/francais/present-subjonctif/exercice.json';
import fiche404 from './../../contenu/quatrieme/francais/figures-de-style/fiche.md';
import exercice404 from './../../contenu/quatrieme/francais/figures-de-style/exercice.json';
import fiche405 from './../../contenu/quatrieme/francais/recit-realiste-fantastique/fiche.md';
import exercice405 from './../../contenu/quatrieme/francais/recit-realiste-fantastique/exercice.json';
import fiche406 from './../../contenu/quatrieme/francais/la-lettre/fiche.md';
import exercice406 from './../../contenu/quatrieme/francais/la-lettre/exercice.json';
import fiche407 from './../../contenu/quatrieme/hist-geo/commerce-traite-lumieres/fiche.md';
import exercice407 from './../../contenu/quatrieme/hist-geo/commerce-traite-lumieres/exercice.json';
import fiche408 from './../../contenu/quatrieme/hist-geo/revolution-francaise-empire/fiche.md';
import exercice408 from './../../contenu/quatrieme/hist-geo/revolution-francaise-empire/exercice.json';
import fiche409 from './../../contenu/quatrieme/hist-geo/revolution-industrielle/fiche.md';
import exercice409 from './../../contenu/quatrieme/hist-geo/revolution-industrielle/exercice.json';
import fiche410 from './../../contenu/quatrieme/hist-geo/conquetes-colonisation/fiche.md';
import exercice410 from './../../contenu/quatrieme/hist-geo/conquetes-colonisation/exercice.json';
import fiche411 from './../../contenu/quatrieme/hist-geo/urbanisation-du-monde/fiche.md';
import exercice411 from './../../contenu/quatrieme/hist-geo/urbanisation-du-monde/exercice.json';
import fiche412 from './../../contenu/quatrieme/hist-geo/mobilites-humaines/fiche.md';
import exercice412 from './../../contenu/quatrieme/hist-geo/mobilites-humaines/exercice.json';
import fiche413 from './../../contenu/quatrieme/hist-geo/emc-libertes-et-loi/fiche.md';
import exercice413 from './../../contenu/quatrieme/hist-geo/emc-libertes-et-loi/exercice.json';
import fiche414 from './../../contenu/quatrieme/italien/molto-troppo/fiche.md';
import exercice414 from './../../contenu/quatrieme/italien/molto-troppo/exercice.json';
import fiche415 from './../../contenu/quatrieme/italien/comparativi-superlativi/fiche.md';
import exercice415 from './../../contenu/quatrieme/italien/comparativi-superlativi/exercice.json';
import fiche416 from './../../contenu/quatrieme/italien/stare-gerundio/fiche.md';
import exercice416 from './../../contenu/quatrieme/italien/stare-gerundio/exercice.json';
import fiche417 from './../../contenu/quatrieme/italien/vocabolario-sport-tempo-libero/fiche.md';
import exercice417 from './../../contenu/quatrieme/italien/vocabolario-sport-tempo-libero/exercice.json';
import fiche418 from './../../contenu/quatrieme/italien/passato-prossimo/fiche.md';
import exercice418 from './../../contenu/quatrieme/italien/passato-prossimo/exercice.json';
import fiche419 from './../../contenu/quatrieme/italien/imperfetto/fiche.md';
import exercice419 from './../../contenu/quatrieme/italien/imperfetto/exercice.json';
import fiche420 from './../../contenu/quatrieme/italien/vocabolario-salute-corpo/fiche.md';
import exercice420 from './../../contenu/quatrieme/italien/vocabolario-salute-corpo/exercice.json';
import fiche421 from './../../contenu/quatrieme/italien/futuro/fiche.md';
import exercice421 from './../../contenu/quatrieme/italien/futuro/exercice.json';
import fiche422 from './../../contenu/quatrieme/italien/civilta-firenze-venezia/fiche.md';
import exercice422 from './../../contenu/quatrieme/italien/civilta-firenze-venezia/exercice.json';
import fiche423 from './../../contenu/quatrieme/italien/civilta-cucina-tradizioni/fiche.md';
import exercice423 from './../../contenu/quatrieme/italien/civilta-cucina-tradizioni/exercice.json';
import fiche424 from './../../contenu/quatrieme/langues-anciennes/latin-declinaisons/fiche.md';
import exercice424 from './../../contenu/quatrieme/langues-anciennes/latin-declinaisons/exercice.json';
import fiche425 from './../../contenu/quatrieme/langues-anciennes/latin-temps-passe/fiche.md';
import exercice425 from './../../contenu/quatrieme/langues-anciennes/latin-temps-passe/exercice.json';
import fiche426 from './../../contenu/quatrieme/maths/operations-nombres-relatifs/fiche.md';
import exercice426 from './../../contenu/quatrieme/maths/operations-nombres-relatifs/exercice.json';
import fiche427 from './../../contenu/quatrieme/maths/nombres-rationnels/fiche.md';
import exercice427 from './../../contenu/quatrieme/maths/nombres-rationnels/exercice.json';
import fiche428 from './../../contenu/quatrieme/maths/puissances/fiche.md';
import exercice428 from './../../contenu/quatrieme/maths/puissances/exercice.json';
import fiche429 from './../../contenu/quatrieme/maths/calcul-litteral/fiche.md';
import exercice429 from './../../contenu/quatrieme/maths/calcul-litteral/exercice.json';
import fiche430 from './../../contenu/quatrieme/maths/reperage/fiche.md';
import exercice430 from './../../contenu/quatrieme/maths/reperage/exercice.json';
import fiche431 from './../../contenu/quatrieme/maths/proportionnalite/fiche.md';
import exercice431 from './../../contenu/quatrieme/maths/proportionnalite/exercice.json';
import fiche432 from './../../contenu/quatrieme/maths/racine-carree/fiche.md';
import exercice432 from './../../contenu/quatrieme/maths/racine-carree/exercice.json';
import fiche433 from './../../contenu/quatrieme/maths/triangles/fiche.md';
import exercice433 from './../../contenu/quatrieme/maths/triangles/exercice.json';
import fiche434 from './../../contenu/quatrieme/maths/parallelogrammes-translations/fiche.md';
import exercice434 from './../../contenu/quatrieme/maths/parallelogrammes-translations/exercice.json';
import fiche435 from './../../contenu/quatrieme/maths/transformations/fiche.md';
import exercice435 from './../../contenu/quatrieme/maths/transformations/exercice.json';
import fiche436 from './../../contenu/quatrieme/maths/representation-espace/fiche.md';
import exercice436 from './../../contenu/quatrieme/maths/representation-espace/exercice.json';
import fiche437 from './../../contenu/quatrieme/maths/fonctions/fiche.md';
import exercice437 from './../../contenu/quatrieme/maths/fonctions/exercice.json';
import fiche438 from './../../contenu/quatrieme/maths/statistiques/fiche.md';
import exercice438 from './../../contenu/quatrieme/maths/statistiques/exercice.json';
import fiche439 from './../../contenu/quatrieme/maths/probabilites/fiche.md';
import exercice439 from './../../contenu/quatrieme/maths/probabilites/exercice.json';
import fiche440 from './../../contenu/quatrieme/maths/pensee-informatique/fiche.md';
import exercice440 from './../../contenu/quatrieme/maths/pensee-informatique/exercice.json';
import fiche441 from './../../contenu/quatrieme/physique-chimie/organisation-matiere/fiche.md';
import exercice441 from './../../contenu/quatrieme/physique-chimie/organisation-matiere/exercice.json';
import fiche442 from './../../contenu/quatrieme/physique-chimie/transformation-conservation-masse/fiche.md';
import exercice442 from './../../contenu/quatrieme/physique-chimie/transformation-conservation-masse/exercice.json';
import fiche443 from './../../contenu/quatrieme/physique-chimie/mouvement-vitesse/fiche.md';
import exercice443 from './../../contenu/quatrieme/physique-chimie/mouvement-vitesse/exercice.json';
import fiche444 from './../../contenu/quatrieme/physique-chimie/interactions-forces/fiche.md';
import exercice444 from './../../contenu/quatrieme/physique-chimie/interactions-forces/exercice.json';
import fiche445 from './../../contenu/quatrieme/physique-chimie/puissance-energie/fiche.md';
import exercice445 from './../../contenu/quatrieme/physique-chimie/puissance-energie/exercice.json';
import fiche446 from './../../contenu/quatrieme/physique-chimie/propagation-signal/fiche.md';
import exercice446 from './../../contenu/quatrieme/physique-chimie/propagation-signal/exercice.json';
import fiche447 from './../../contenu/quatrieme/svt/seismes-et-volcans/fiche.md';
import exercice447 from './../../contenu/quatrieme/svt/seismes-et-volcans/exercice.json';
import fiche448 from './../../contenu/quatrieme/svt/tectonique-des-plaques/fiche.md';
import exercice448 from './../../contenu/quatrieme/svt/tectonique-des-plaques/exercice.json';
import fiche449 from './../../contenu/quatrieme/svt/energie-dans-lorganisme/fiche.md';
import exercice449 from './../../contenu/quatrieme/svt/energie-dans-lorganisme/exercice.json';
import fiche450 from './../../contenu/quatrieme/svt/systeme-nerveux-et-comportement/fiche.md';
import exercice450 from './../../contenu/quatrieme/svt/systeme-nerveux-et-comportement/exercice.json';
import fiche451 from './../../contenu/quatrieme/svt/reproduction-et-transmission-de-la-vie/fiche.md';
import exercice451 from './../../contenu/quatrieme/svt/reproduction-et-transmission-de-la-vie/exercice.json';
import fiche452 from './../../contenu/quatrieme/techno/chaine-dinformation/fiche.md';
import exercice452 from './../../contenu/quatrieme/techno/chaine-dinformation/exercice.json';
import fiche453 from './../../contenu/quatrieme/techno/modelisation-volumique/fiche.md';
import exercice453 from './../../contenu/quatrieme/techno/modelisation-volumique/exercice.json';
import fiche454 from './../../contenu/quatrieme/techno/reseaux-informatiques/fiche.md';
import exercice454 from './../../contenu/quatrieme/techno/reseaux-informatiques/exercice.json';
import fiche455 from './../../contenu/quatrieme/techno/programmation-evenementielle/fiche.md';
import exercice455 from './../../contenu/quatrieme/techno/programmation-evenementielle/exercice.json';
import fiche456 from './../../contenu/quatrieme/techno/confort-et-domotique/fiche.md';
import exercice456 from './../../contenu/quatrieme/techno/confort-et-domotique/exercice.json';
import fiche457 from './../../contenu/troisieme/allemand/phonetik-betonung-umlaute/fiche.md';
import exercice457 from './../../contenu/troisieme/allemand/phonetik-betonung-umlaute/exercice.json';
import fiche458 from './../../contenu/troisieme/allemand/praepositionen-zeit/fiche.md';
import exercice458 from './../../contenu/troisieme/allemand/praepositionen-zeit/exercice.json';
import fiche459 from './../../contenu/troisieme/allemand/wechselpraepositionen-vertiefung/fiche.md';
import exercice459 from './../../contenu/troisieme/allemand/wechselpraepositionen-vertiefung/exercice.json';
import fiche460 from './../../contenu/troisieme/allemand/praeteritum/fiche.md';
import exercice460 from './../../contenu/troisieme/allemand/praeteritum/exercice.json';
import fiche461 from './../../contenu/troisieme/allemand/wortschatz-technik-internet/fiche.md';
import exercice461 from './../../contenu/troisieme/allemand/wortschatz-technik-internet/exercice.json';
import fiche462 from './../../contenu/troisieme/allemand/nebensaetze-weil-dass/fiche.md';
import exercice462 from './../../contenu/troisieme/allemand/nebensaetze-weil-dass/exercice.json';
import fiche463 from './../../contenu/troisieme/allemand/wortstellung-nebensatz/fiche.md';
import exercice463 from './../../contenu/troisieme/allemand/wortstellung-nebensatz/exercice.json';
import fiche464 from './../../contenu/troisieme/allemand/futur/fiche.md';
import exercice464 from './../../contenu/troisieme/allemand/futur/exercice.json';
import fiche465 from './../../contenu/troisieme/allemand/wortschatz-umwelt/fiche.md';
import exercice465 from './../../contenu/troisieme/allemand/wortschatz-umwelt/exercice.json';
import fiche466 from './../../contenu/troisieme/allemand/landeskunde-persoenlichkeiten/fiche.md';
import exercice466 from './../../contenu/troisieme/allemand/landeskunde-persoenlichkeiten/exercice.json';
import fiche467 from './../../contenu/troisieme/allemand/landeskunde-deutschsprachige-welt/fiche.md';
import exercice467 from './../../contenu/troisieme/allemand/landeskunde-deutschsprachige-welt/exercice.json';
import fiche468 from './../../contenu/troisieme/anglais/phonetique-accentuation/fiche.md';
import exercice468 from './../../contenu/troisieme/anglais/phonetique-accentuation/exercice.json';
import fiche469 from './../../contenu/troisieme/anglais/present-perfect-since-for/fiche.md';
import exercice469 from './../../contenu/troisieme/anglais/present-perfect-since-for/exercice.json';
import fiche470 from './../../contenu/troisieme/anglais/preterit-continu/fiche.md';
import exercice470 from './../../contenu/troisieme/anglais/preterit-continu/exercice.json';
import fiche471 from './../../contenu/troisieme/anglais/question-tags/fiche.md';
import exercice471 from './../../contenu/troisieme/anglais/question-tags/exercice.json';
import fiche472 from './../../contenu/troisieme/anglais/vocabulaire-technologie/fiche.md';
import exercice472 from './../../contenu/troisieme/anglais/vocabulaire-technologie/exercice.json';
import fiche473 from './../../contenu/troisieme/anglais/modaux-deduction-conseil/fiche.md';
import exercice473 from './../../contenu/troisieme/anglais/modaux-deduction-conseil/exercice.json';
import fiche474 from './../../contenu/troisieme/anglais/voix-passive/fiche.md';
import exercice474 from './../../contenu/troisieme/anglais/voix-passive/exercice.json';
import fiche475 from './../../contenu/troisieme/anglais/conditionnel-if/fiche.md';
import exercice475 from './../../contenu/troisieme/anglais/conditionnel-if/exercice.json';
import fiche476 from './../../contenu/troisieme/anglais/vocabulaire-environnement/fiche.md';
import exercice476 from './../../contenu/troisieme/anglais/vocabulaire-environnement/exercice.json';
import fiche477 from './../../contenu/troisieme/anglais/civilisation-canada/fiche.md';
import exercice477 from './../../contenu/troisieme/anglais/civilisation-canada/exercice.json';
import fiche478 from './../../contenu/troisieme/anglais/civilisation-monde-anglophone/fiche.md';
import exercice478 from './../../contenu/troisieme/anglais/civilisation-monde-anglophone/exercice.json';
import fiche479 from './../../contenu/troisieme/arts/art-moderne/fiche.md';
import exercice479 from './../../contenu/troisieme/arts/art-moderne/exercice.json';
import fiche480 from './../../contenu/troisieme/arts/art-contemporain/fiche.md';
import exercice480 from './../../contenu/troisieme/arts/art-contemporain/exercice.json';
import fiche481 from './../../contenu/troisieme/espagnol/fonetica-acentuacion/fiche.md';
import exercice481 from './../../contenu/troisieme/espagnol/fonetica-acentuacion/exercice.json';
import fiche482 from './../../contenu/troisieme/espagnol/preposiciones/fiche.md';
import exercice482 from './../../contenu/troisieme/espagnol/preposiciones/exercice.json';
import fiche483 from './../../contenu/troisieme/espagnol/indefinido-irregular/fiche.md';
import exercice483 from './../../contenu/troisieme/espagnol/indefinido-irregular/exercice.json';
import fiche484 from './../../contenu/troisieme/espagnol/imperfecto-indefinido/fiche.md';
import exercice484 from './../../contenu/troisieme/espagnol/imperfecto-indefinido/exercice.json';
import fiche485 from './../../contenu/troisieme/espagnol/vocabulario-tecnologia/fiche.md';
import exercice485 from './../../contenu/troisieme/espagnol/vocabulario-tecnologia/exercice.json';
import fiche486 from './../../contenu/troisieme/espagnol/pronombres-cod-coi/fiche.md';
import exercice486 from './../../contenu/troisieme/espagnol/pronombres-cod-coi/exercice.json';
import fiche487 from './../../contenu/troisieme/espagnol/imperativo/fiche.md';
import exercice487 from './../../contenu/troisieme/espagnol/imperativo/exercice.json';
import fiche488 from './../../contenu/troisieme/espagnol/por-para/fiche.md';
import exercice488 from './../../contenu/troisieme/espagnol/por-para/exercice.json';
import fiche489 from './../../contenu/troisieme/espagnol/vocabulario-medioambiente/fiche.md';
import exercice489 from './../../contenu/troisieme/espagnol/vocabulario-medioambiente/exercice.json';
import fiche490 from './../../contenu/troisieme/espagnol/civilizacion-fiestas-tradiciones/fiche.md';
import exercice490 from './../../contenu/troisieme/espagnol/civilizacion-fiestas-tradiciones/exercice.json';
import fiche491 from './../../contenu/troisieme/espagnol/civilizacion-mundo-hispanohablante/fiche.md';
import exercice491 from './../../contenu/troisieme/espagnol/civilizacion-mundo-hispanohablante/exercice.json';
import fiche492 from './../../contenu/troisieme/francais/phrase-complexe/fiche.md';
import exercice492 from './../../contenu/troisieme/francais/phrase-complexe/exercice.json';
import fiche493 from './../../contenu/troisieme/francais/connecteurs-logiques/fiche.md';
import exercice493 from './../../contenu/troisieme/francais/connecteurs-logiques/exercice.json';
import fiche494 from './../../contenu/troisieme/francais/modes-et-valeurs/fiche.md';
import exercice494 from './../../contenu/troisieme/francais/modes-et-valeurs/exercice.json';
import fiche495 from './../../contenu/troisieme/francais/lexique-melioratif-pejoratif/fiche.md';
import exercice495 from './../../contenu/troisieme/francais/lexique-melioratif-pejoratif/exercice.json';
import fiche496 from './../../contenu/troisieme/francais/autobiographie/fiche.md';
import exercice496 from './../../contenu/troisieme/francais/autobiographie/exercice.json';
import fiche497 from './../../contenu/troisieme/francais/argumentation/fiche.md';
import exercice497 from './../../contenu/troisieme/francais/argumentation/exercice.json';
import fiche498 from './../../contenu/troisieme/francais/poesie-engagee/fiche.md';
import exercice498 from './../../contenu/troisieme/francais/poesie-engagee/exercice.json';
import fiche499 from './../../contenu/troisieme/hist-geo/premiere-guerre-mondiale/fiche.md';
import exercice499 from './../../contenu/troisieme/hist-geo/premiere-guerre-mondiale/exercice.json';
import fiche500 from './../../contenu/troisieme/hist-geo/totalitarismes/fiche.md';
import exercice500 from './../../contenu/troisieme/hist-geo/totalitarismes/exercice.json';
import fiche501 from './../../contenu/troisieme/hist-geo/seconde-guerre-mondiale/fiche.md';
import exercice501 from './../../contenu/troisieme/hist-geo/seconde-guerre-mondiale/exercice.json';
import fiche502 from './../../contenu/troisieme/hist-geo/france-depuis-1945-ve-republique/fiche.md';
import exercice502 from './../../contenu/troisieme/hist-geo/france-depuis-1945-ve-republique/exercice.json';
import fiche503 from './../../contenu/troisieme/hist-geo/aires-urbaines-espaces-productifs/fiche.md';
import exercice503 from './../../contenu/troisieme/hist-geo/aires-urbaines-espaces-productifs/exercice.json';
import fiche504 from './../../contenu/troisieme/hist-geo/france-union-europeenne-monde/fiche.md';
import exercice504 from './../../contenu/troisieme/hist-geo/france-union-europeenne-monde/exercice.json';
import fiche505 from './../../contenu/troisieme/hist-geo/emc-defense-citoyennete/fiche.md';
import exercice505 from './../../contenu/troisieme/hist-geo/emc-defense-citoyennete/exercice.json';
import fiche506 from './../../contenu/troisieme/italien/fonetica-accento/fiche.md';
import exercice506 from './../../contenu/troisieme/italien/fonetica-accento/exercice.json';
import fiche507 from './../../contenu/troisieme/italien/preposizioni/fiche.md';
import exercice507 from './../../contenu/troisieme/italien/preposizioni/exercice.json';
import fiche508 from './../../contenu/troisieme/italien/passato-prossimo-ausiliari/fiche.md';
import exercice508 from './../../contenu/troisieme/italien/passato-prossimo-ausiliari/exercice.json';
import fiche509 from './../../contenu/troisieme/italien/imperfetto-vs-passato/fiche.md';
import exercice509 from './../../contenu/troisieme/italien/imperfetto-vs-passato/exercice.json';
import fiche510 from './../../contenu/troisieme/italien/vocabolario-tecnologia/fiche.md';
import exercice510 from './../../contenu/troisieme/italien/vocabolario-tecnologia/exercice.json';
import fiche511 from './../../contenu/troisieme/italien/pronomi-diretti-indiretti/fiche.md';
import exercice511 from './../../contenu/troisieme/italien/pronomi-diretti-indiretti/exercice.json';
import fiche512 from './../../contenu/troisieme/italien/particella-ne-ci/fiche.md';
import exercice512 from './../../contenu/troisieme/italien/particella-ne-ci/exercice.json';
import fiche513 from './../../contenu/troisieme/italien/imperativo/fiche.md';
import exercice513 from './../../contenu/troisieme/italien/imperativo/exercice.json';
import fiche514 from './../../contenu/troisieme/italien/vocabolario-ambiente/fiche.md';
import exercice514 from './../../contenu/troisieme/italien/vocabolario-ambiente/exercice.json';
import fiche515 from './../../contenu/troisieme/italien/civilta-feste-tradizioni/fiche.md';
import exercice515 from './../../contenu/troisieme/italien/civilta-feste-tradizioni/exercice.json';
import fiche516 from './../../contenu/troisieme/italien/civilta-mondo-italofono/fiche.md';
import exercice516 from './../../contenu/troisieme/italien/civilta-mondo-italofono/exercice.json';
import fiche517 from './../../contenu/troisieme/langues-anciennes/civilisation-romaine/fiche.md';
import exercice517 from './../../contenu/troisieme/langues-anciennes/civilisation-romaine/exercice.json';
import fiche518 from './../../contenu/troisieme/langues-anciennes/latin-propositions/fiche.md';
import exercice518 from './../../contenu/troisieme/langues-anciennes/latin-propositions/exercice.json';
import fiche519 from './../../contenu/troisieme/langues-anciennes/grec-decouverte/fiche.md';
import exercice519 from './../../contenu/troisieme/langues-anciennes/grec-decouverte/exercice.json';
import fiche520 from './../../contenu/troisieme/maths/multiples-diviseurs/fiche.md';
import exercice520 from './../../contenu/troisieme/maths/multiples-diviseurs/exercice.json';
import fiche521 from './../../contenu/troisieme/maths/nombres-rationnels/fiche.md';
import exercice521 from './../../contenu/troisieme/maths/nombres-rationnels/exercice.json';
import fiche522 from './../../contenu/troisieme/maths/puissances/fiche.md';
import exercice522 from './../../contenu/troisieme/maths/puissances/exercice.json';
import fiche523 from './../../contenu/troisieme/maths/calcul-litteral/fiche.md';
import exercice523 from './../../contenu/troisieme/maths/calcul-litteral/exercice.json';
import fiche524 from './../../contenu/troisieme/maths/reperage/fiche.md';
import exercice524 from './../../contenu/troisieme/maths/reperage/exercice.json';
import fiche525 from './../../contenu/troisieme/maths/proportionnalite/fiche.md';
import exercice525 from './../../contenu/troisieme/maths/proportionnalite/exercice.json';
import fiche526 from './../../contenu/troisieme/maths/fonctions/fiche.md';
import exercice526 from './../../contenu/troisieme/maths/fonctions/exercice.json';
import fiche527 from './../../contenu/troisieme/maths/racine-carree/fiche.md';
import exercice527 from './../../contenu/troisieme/maths/racine-carree/exercice.json';
import fiche528 from './../../contenu/troisieme/maths/triangles/fiche.md';
import exercice528 from './../../contenu/troisieme/maths/triangles/exercice.json';
import fiche529 from './../../contenu/troisieme/maths/translations-vecteurs/fiche.md';
import exercice529 from './../../contenu/troisieme/maths/translations-vecteurs/exercice.json';
import fiche530 from './../../contenu/troisieme/maths/representation-espace/fiche.md';
import exercice530 from './../../contenu/troisieme/maths/representation-espace/exercice.json';
import fiche531 from './../../contenu/troisieme/maths/statistiques/fiche.md';
import exercice531 from './../../contenu/troisieme/maths/statistiques/exercice.json';
import fiche532 from './../../contenu/troisieme/maths/probabilites/fiche.md';
import exercice532 from './../../contenu/troisieme/maths/probabilites/exercice.json';
import fiche533 from './../../contenu/troisieme/maths/pensee-informatique/fiche.md';
import exercice533 from './../../contenu/troisieme/maths/pensee-informatique/exercice.json';
import fiche534 from './../../contenu/troisieme/physique-chimie/masse-volumique/fiche.md';
import exercice534 from './../../contenu/troisieme/physique-chimie/masse-volumique/exercice.json';
import fiche535 from './../../contenu/troisieme/physique-chimie/atomes-ions-ph/fiche.md';
import exercice535 from './../../contenu/troisieme/physique-chimie/atomes-ions-ph/exercice.json';
import fiche536 from './../../contenu/troisieme/physique-chimie/transformations-chimiques/fiche.md';
import exercice536 from './../../contenu/troisieme/physique-chimie/transformations-chimiques/exercice.json';
import fiche537 from './../../contenu/troisieme/physique-chimie/poids-gravitation-forces/fiche.md';
import exercice537 from './../../contenu/troisieme/physique-chimie/poids-gravitation-forces/exercice.json';
import fiche538 from './../../contenu/troisieme/physique-chimie/conversions-energie-signaux/fiche.md';
import exercice538 from './../../contenu/troisieme/physique-chimie/conversions-energie-signaux/exercice.json';
import fiche539 from './../../contenu/troisieme/svt/genetique-et-heredite/fiche.md';
import exercice539 from './../../contenu/troisieme/svt/genetique-et-heredite/exercice.json';
import fiche540 from './../../contenu/troisieme/svt/evolution-des-especes/fiche.md';
import exercice540 from './../../contenu/troisieme/svt/evolution-des-especes/exercice.json';
import fiche541 from './../../contenu/troisieme/svt/immunite-et-defenses/fiche.md';
import exercice541 from './../../contenu/troisieme/svt/immunite-et-defenses/exercice.json';
import fiche542 from './../../contenu/troisieme/svt/hormones-et-reproduction/fiche.md';
import exercice542 from './../../contenu/troisieme/svt/hormones-et-reproduction/exercice.json';
import fiche543 from './../../contenu/troisieme/svt/activites-humaines-et-environnement/fiche.md';
import exercice543 from './../../contenu/troisieme/svt/activites-humaines-et-environnement/exercice.json';
import fiche544 from './../../contenu/troisieme/techno/demarche-de-projet/fiche.md';
import exercice544 from './../../contenu/troisieme/techno/demarche-de-projet/exercice.json';
import fiche545 from './../../contenu/troisieme/techno/evolution-des-objets-techniques/fiche.md';
import exercice545 from './../../contenu/troisieme/techno/evolution-des-objets-techniques/exercice.json';
import fiche546 from './../../contenu/troisieme/techno/internet-et-reseaux/fiche.md';
import exercice546 from './../../contenu/troisieme/techno/internet-et-reseaux/exercice.json';
import fiche547 from './../../contenu/troisieme/techno/objets-connectes/fiche.md';
import exercice547 from './../../contenu/troisieme/techno/objets-connectes/exercice.json';
import fiche548 from './../../contenu/troisieme/techno/programmation-et-robotique/fiche.md';
import exercice548 from './../../contenu/troisieme/techno/programmation-et-robotique/exercice.json';
import fiche549 from './../../contenu/seconde/allemand/konnektoren/fiche.md';
import exercice549 from './../../contenu/seconde/allemand/konnektoren/exercice.json';
import fiche550 from './../../contenu/seconde/allemand/adjektivdeklination/fiche.md';
import exercice550 from './../../contenu/seconde/allemand/adjektivdeklination/exercice.json';
import fiche551 from './../../contenu/seconde/allemand/genitiv/fiche.md';
import exercice551 from './../../contenu/seconde/allemand/genitiv/exercice.json';
import fiche552 from './../../contenu/seconde/allemand/verben-mit-dativ/fiche.md';
import exercice552 from './../../contenu/seconde/allemand/verben-mit-dativ/exercice.json';
import fiche553 from './../../contenu/seconde/allemand/wortschatz-medien-technik/fiche.md';
import exercice553 from './../../contenu/seconde/allemand/wortschatz-medien-technik/exercice.json';
import fiche554 from './../../contenu/seconde/allemand/relativsaetze/fiche.md';
import exercice554 from './../../contenu/seconde/allemand/relativsaetze/exercice.json';
import fiche555 from './../../contenu/seconde/allemand/konjunktiv-2/fiche.md';
import exercice555 from './../../contenu/seconde/allemand/konjunktiv-2/exercice.json';
import fiche556 from './../../contenu/seconde/allemand/wortschatz-kultur-kunst/fiche.md';
import exercice556 from './../../contenu/seconde/allemand/wortschatz-kultur-kunst/exercice.json';
import fiche557 from './../../contenu/seconde/allemand/landeskunde-institutionen-deutschland/fiche.md';
import exercice557 from './../../contenu/seconde/allemand/landeskunde-institutionen-deutschland/exercice.json';
import fiche558 from './../../contenu/seconde/allemand/landeskunde-musik-kunst/fiche.md';
import exercice558 from './../../contenu/seconde/allemand/landeskunde-musik-kunst/exercice.json';
import fiche559 from './../../contenu/seconde/anglais/temps-du-present/fiche.md';
import exercice559 from './../../contenu/seconde/anglais/temps-du-present/exercice.json';
import fiche560 from './../../contenu/seconde/anglais/temps-du-passe/fiche.md';
import exercice560 from './../../contenu/seconde/anglais/temps-du-passe/exercice.json';
import fiche561 from './../../contenu/seconde/anglais/modaux/fiche.md';
import exercice561 from './../../contenu/seconde/anglais/modaux/exercice.json';
import fiche562 from './../../contenu/seconde/anglais/phrasal-verbs/fiche.md';
import exercice562 from './../../contenu/seconde/anglais/phrasal-verbs/exercice.json';
import fiche563 from './../../contenu/seconde/anglais/vocabulaire-medias-numerique/fiche.md';
import exercice563 from './../../contenu/seconde/anglais/vocabulaire-medias-numerique/exercice.json';
import fiche564 from './../../contenu/seconde/anglais/hypotheses-if/fiche.md';
import exercice564 from './../../contenu/seconde/anglais/hypotheses-if/exercice.json';
import fiche565 from './../../contenu/seconde/anglais/discours-rapporte/fiche.md';
import exercice565 from './../../contenu/seconde/anglais/discours-rapporte/exercice.json';
import fiche566 from './../../contenu/seconde/anglais/vocabulaire-culture-arts/fiche.md';
import exercice566 from './../../contenu/seconde/anglais/vocabulaire-culture-arts/exercice.json';
import fiche567 from './../../contenu/seconde/anglais/civilisation-institutions-uk/fiche.md';
import exercice567 from './../../contenu/seconde/anglais/civilisation-institutions-uk/exercice.json';
import fiche568 from './../../contenu/seconde/anglais/civilisation-irlande/fiche.md';
import exercice568 from './../../contenu/seconde/anglais/civilisation-irlande/exercice.json';
import fiche569 from './../../contenu/seconde/arts/grands-courants/fiche.md';
import exercice569 from './../../contenu/seconde/arts/grands-courants/exercice.json';
import fiche570 from './../../contenu/seconde/espagnol/tiempos-pasado/fiche.md';
import exercice570 from './../../contenu/seconde/espagnol/tiempos-pasado/exercice.json';
import fiche571 from './../../contenu/seconde/espagnol/ser-estar-haber/fiche.md';
import exercice571 from './../../contenu/seconde/espagnol/ser-estar-haber/exercice.json';
import fiche572 from './../../contenu/seconde/espagnol/verbos-pronominales/fiche.md';
import exercice572 from './../../contenu/seconde/espagnol/verbos-pronominales/exercice.json';
import fiche573 from './../../contenu/seconde/espagnol/vocabulario-medios-tecnologia/fiche.md';
import exercice573 from './../../contenu/seconde/espagnol/vocabulario-medios-tecnologia/exercice.json';
import fiche574 from './../../contenu/seconde/espagnol/condicional/fiche.md';
import exercice574 from './../../contenu/seconde/espagnol/condicional/exercice.json';
import fiche575 from './../../contenu/seconde/espagnol/subjuntivo-presente/fiche.md';
import exercice575 from './../../contenu/seconde/espagnol/subjuntivo-presente/exercice.json';
import fiche576 from './../../contenu/seconde/espagnol/oraciones-condicionales/fiche.md';
import exercice576 from './../../contenu/seconde/espagnol/oraciones-condicionales/exercice.json';
import fiche577 from './../../contenu/seconde/espagnol/vocabulario-cultura-arte/fiche.md';
import exercice577 from './../../contenu/seconde/espagnol/vocabulario-cultura-arte/exercice.json';
import fiche578 from './../../contenu/seconde/espagnol/civilizacion-instituciones-espana/fiche.md';
import exercice578 from './../../contenu/seconde/espagnol/civilizacion-instituciones-espana/exercice.json';
import fiche579 from './../../contenu/seconde/espagnol/civilizacion-arte-pintura/fiche.md';
import exercice579 from './../../contenu/seconde/espagnol/civilizacion-arte-pintura/exercice.json';
import fiche580 from './../../contenu/seconde/francais/grammaire-seconde/fiche.md';
import exercice580 from './../../contenu/seconde/francais/grammaire-seconde/exercice.json';
import fiche581 from './../../contenu/seconde/francais/procedes-analyse/fiche.md';
import exercice581 from './../../contenu/seconde/francais/procedes-analyse/exercice.json';
import fiche582 from './../../contenu/seconde/francais/genres-et-registres/fiche.md';
import exercice582 from './../../contenu/seconde/francais/genres-et-registres/exercice.json';
import fiche583 from './../../contenu/seconde/francais/la-poesie/fiche.md';
import exercice583 from './../../contenu/seconde/francais/la-poesie/exercice.json';
import fiche584 from './../../contenu/seconde/francais/le-theatre/fiche.md';
import exercice584 from './../../contenu/seconde/francais/le-theatre/exercice.json';
import fiche585 from './../../contenu/seconde/francais/le-roman/fiche.md';
import exercice585 from './../../contenu/seconde/francais/le-roman/exercice.json';
import fiche586 from './../../contenu/seconde/francais/litterature-idees/fiche.md';
import exercice586 from './../../contenu/seconde/francais/litterature-idees/exercice.json';
import fiche587 from './../../contenu/seconde/hist-geo/mediterranee-antique/fiche.md';
import exercice587 from './../../contenu/seconde/hist-geo/mediterranee-antique/exercice.json';
import fiche588 from './../../contenu/seconde/hist-geo/mediterranee-medievale/fiche.md';
import exercice588 from './../../contenu/seconde/hist-geo/mediterranee-medievale/exercice.json';
import fiche589 from './../../contenu/seconde/hist-geo/humanisme-renaissance/fiche.md';
import exercice589 from './../../contenu/seconde/hist-geo/humanisme-renaissance/exercice.json';
import fiche590 from './../../contenu/seconde/hist-geo/revolutions-angleterre-amerique/fiche.md';
import exercice590 from './../../contenu/seconde/hist-geo/revolutions-angleterre-amerique/exercice.json';
import fiche591 from './../../contenu/seconde/hist-geo/environnement-developpement-durable/fiche.md';
import exercice591 from './../../contenu/seconde/hist-geo/environnement-developpement-durable/exercice.json';
import fiche592 from './../../contenu/seconde/hist-geo/territoires-villes-mondialisation/fiche.md';
import exercice592 from './../../contenu/seconde/hist-geo/territoires-villes-mondialisation/exercice.json';
import fiche593 from './../../contenu/seconde/hist-geo/emc-la-liberte/fiche.md';
import exercice593 from './../../contenu/seconde/hist-geo/emc-la-liberte/exercice.json';
import fiche594 from './../../contenu/seconde/italien/tempi-del-passato/fiche.md';
import exercice594 from './../../contenu/seconde/italien/tempi-del-passato/exercice.json';
import fiche595 from './../../contenu/seconde/italien/essere-stare-esserci/fiche.md';
import exercice595 from './../../contenu/seconde/italien/essere-stare-esserci/exercice.json';
import fiche596 from './../../contenu/seconde/italien/verbi-riflessivi/fiche.md';
import exercice596 from './../../contenu/seconde/italien/verbi-riflessivi/exercice.json';
import fiche597 from './../../contenu/seconde/italien/vocabolario-media-tecnologia/fiche.md';
import exercice597 from './../../contenu/seconde/italien/vocabolario-media-tecnologia/exercice.json';
import fiche598 from './../../contenu/seconde/italien/condizionale/fiche.md';
import exercice598 from './../../contenu/seconde/italien/condizionale/exercice.json';
import fiche599 from './../../contenu/seconde/italien/congiuntivo-presente/fiche.md';
import exercice599 from './../../contenu/seconde/italien/congiuntivo-presente/exercice.json';
import fiche600 from './../../contenu/seconde/italien/periodo-ipotetico/fiche.md';
import exercice600 from './../../contenu/seconde/italien/periodo-ipotetico/exercice.json';
import fiche601 from './../../contenu/seconde/italien/vocabolario-cultura-arte/fiche.md';
import exercice601 from './../../contenu/seconde/italien/vocabolario-cultura-arte/exercice.json';
import fiche602 from './../../contenu/seconde/italien/civilta-istituzioni-italia/fiche.md';
import exercice602 from './../../contenu/seconde/italien/civilta-istituzioni-italia/exercice.json';
import fiche603 from './../../contenu/seconde/italien/civilta-arte-pittura/fiche.md';
import exercice603 from './../../contenu/seconde/italien/civilta-arte-pittura/exercice.json';
import fiche604 from './../../contenu/seconde/langues-anciennes/latin-syntaxe/fiche.md';
import exercice604 from './../../contenu/seconde/langues-anciennes/latin-syntaxe/exercice.json';
import fiche605 from './../../contenu/seconde/langues-anciennes/grec-morphologie/fiche.md';
import exercice605 from './../../contenu/seconde/langues-anciennes/grec-morphologie/exercice.json';
import fiche606 from './../../contenu/seconde/maths/calcul-numerique-algebrique/fiche.md';
import exercice606 from './../../contenu/seconde/maths/calcul-numerique-algebrique/exercice.json';
import fiche607 from './../../contenu/seconde/maths/arithmetique/fiche.md';
import exercice607 from './../../contenu/seconde/maths/arithmetique/exercice.json';
import fiche608 from './../../contenu/seconde/maths/equations-inequations/fiche.md';
import exercice608 from './../../contenu/seconde/maths/equations-inequations/exercice.json';
import fiche609 from './../../contenu/seconde/maths/notion-de-fonction/fiche.md';
import exercice609 from './../../contenu/seconde/maths/notion-de-fonction/exercice.json';
import fiche610 from './../../contenu/seconde/maths/fonctions-de-reference/fiche.md';
import exercice610 from './../../contenu/seconde/maths/fonctions-de-reference/exercice.json';
import fiche611 from './../../contenu/seconde/maths/vecteurs/fiche.md';
import exercice611 from './../../contenu/seconde/maths/vecteurs/exercice.json';
import fiche612 from './../../contenu/seconde/maths/droites-du-plan/fiche.md';
import exercice612 from './../../contenu/seconde/maths/droites-du-plan/exercice.json';
import fiche613 from './../../contenu/seconde/maths/statistiques/fiche.md';
import exercice613 from './../../contenu/seconde/maths/statistiques/exercice.json';
import fiche614 from './../../contenu/seconde/maths/probabilites/fiche.md';
import exercice614 from './../../contenu/seconde/maths/probabilites/exercice.json';
import fiche615 from './../../contenu/seconde/maths/algorithmique/fiche.md';
import exercice615 from './../../contenu/seconde/maths/algorithmique/exercice.json';
import fiche616 from './../../contenu/seconde/physique-chimie/description-matiere/fiche.md';
import exercice616 from './../../contenu/seconde/physique-chimie/description-matiere/exercice.json';
import fiche617 from './../../contenu/seconde/physique-chimie/modelisation-microscopique/fiche.md';
import exercice617 from './../../contenu/seconde/physique-chimie/modelisation-microscopique/exercice.json';
import fiche618 from './../../contenu/seconde/physique-chimie/transformations-matiere/fiche.md';
import exercice618 from './../../contenu/seconde/physique-chimie/transformations-matiere/exercice.json';
import fiche619 from './../../contenu/seconde/physique-chimie/mouvement-interactions/fiche.md';
import exercice619 from './../../contenu/seconde/physique-chimie/mouvement-interactions/exercice.json';
import fiche620 from './../../contenu/seconde/physique-chimie/ondes-signaux/fiche.md';
import exercice620 from './../../contenu/seconde/physique-chimie/ondes-signaux/exercice.json';
import fiche621 from './../../contenu/seconde/ses/production-richesses/fiche.md';
import exercice621 from './../../contenu/seconde/ses/production-richesses/exercice.json';
import fiche622 from './../../contenu/seconde/ses/mesure-production-pib/fiche.md';
import exercice622 from './../../contenu/seconde/ses/mesure-production-pib/exercice.json';
import fiche623 from './../../contenu/seconde/ses/consommation-revenu/fiche.md';
import exercice623 from './../../contenu/seconde/ses/consommation-revenu/exercice.json';
import fiche624 from './../../contenu/seconde/ses/marche-formation-prix/fiche.md';
import exercice624 from './../../contenu/seconde/ses/marche-formation-prix/exercice.json';
import fiche625 from './../../contenu/seconde/ses/socialisation-introduction/fiche.md';
import exercice625 from './../../contenu/seconde/ses/socialisation-introduction/exercice.json';
import fiche626 from './../../contenu/seconde/ses/opinion-publique/fiche.md';
import exercice626 from './../../contenu/seconde/ses/opinion-publique/exercice.json';
import fiche627 from './../../contenu/seconde/snt/internet/fiche.md';
import exercice627 from './../../contenu/seconde/snt/internet/exercice.json';
import fiche628 from './../../contenu/seconde/snt/le-web/fiche.md';
import exercice628 from './../../contenu/seconde/snt/le-web/exercice.json';
import fiche629 from './../../contenu/seconde/snt/reseaux-sociaux/fiche.md';
import exercice629 from './../../contenu/seconde/snt/reseaux-sociaux/exercice.json';
import fiche630 from './../../contenu/seconde/snt/donnees-structurees/fiche.md';
import exercice630 from './../../contenu/seconde/snt/donnees-structurees/exercice.json';
import fiche631 from './../../contenu/seconde/snt/localisation-cartographie-gps/fiche.md';
import exercice631 from './../../contenu/seconde/snt/localisation-cartographie-gps/exercice.json';
import fiche632 from './../../contenu/seconde/snt/informatique-embarquee-objets-connectes/fiche.md';
import exercice632 from './../../contenu/seconde/snt/informatique-embarquee-objets-connectes/exercice.json';
import fiche633 from './../../contenu/seconde/snt/photographie-numerique/fiche.md';
import exercice633 from './../../contenu/seconde/snt/photographie-numerique/exercice.json';
import fiche634 from './../../contenu/seconde/svt/la-cellule-unite-du-vivant/fiche.md';
import exercice634 from './../../contenu/seconde/svt/la-cellule-unite-du-vivant/exercice.json';
import fiche635 from './../../contenu/seconde/svt/adn-et-information-genetique/fiche.md';
import exercice635 from './../../contenu/seconde/svt/adn-et-information-genetique/exercice.json';
import fiche636 from './../../contenu/seconde/svt/metabolisme-des-cellules/fiche.md';
import exercice636 from './../../contenu/seconde/svt/metabolisme-des-cellules/exercice.json';
import fiche637 from './../../contenu/seconde/svt/biodiversite-et-evolution/fiche.md';
import exercice637 from './../../contenu/seconde/svt/biodiversite-et-evolution/exercice.json';
import fiche638 from './../../contenu/seconde/svt/la-terre-dans-le-systeme-solaire/fiche.md';
import exercice638 from './../../contenu/seconde/svt/la-terre-dans-le-systeme-solaire/exercice.json';
import fiche639 from './../../contenu/seconde/svt/corps-humain-et-effort-physique/fiche.md';
import exercice639 from './../../contenu/seconde/svt/corps-humain-et-effort-physique/exercice.json';
import fiche640 from './../../contenu/premiere/allemand/verben-mit-praepositionen/fiche.md';
import exercice640 from './../../contenu/premiere/allemand/verben-mit-praepositionen/exercice.json';
import fiche641 from './../../contenu/premiere/allemand/infinitiv-mit-zu/fiche.md';
import exercice641 from './../../contenu/premiere/allemand/infinitiv-mit-zu/exercice.json';
import fiche642 from './../../contenu/premiere/allemand/nebensaetze-obwohl-damit/fiche.md';
import exercice642 from './../../contenu/premiere/allemand/nebensaetze-obwohl-damit/exercice.json';
import fiche643 from './../../contenu/premiere/allemand/wortschatz-arbeit-studium/fiche.md';
import exercice643 from './../../contenu/premiere/allemand/wortschatz-arbeit-studium/exercice.json';
import fiche644 from './../../contenu/premiere/allemand/passiv/fiche.md';
import exercice644 from './../../contenu/premiere/allemand/passiv/exercice.json';
import fiche645 from './../../contenu/premiere/allemand/konjunktiv-2-vertiefung/fiche.md';
import exercice645 from './../../contenu/premiere/allemand/konjunktiv-2-vertiefung/exercice.json';
import fiche646 from './../../contenu/premiere/allemand/wortschatz-gesellschaft-engagement/fiche.md';
import exercice646 from './../../contenu/premiere/allemand/wortschatz-gesellschaft-engagement/exercice.json';
import fiche647 from './../../contenu/premiere/allemand/landeskunde-deutsche-geschichte/fiche.md';
import exercice647 from './../../contenu/premiere/allemand/landeskunde-deutsche-geschichte/exercice.json';
import fiche648 from './../../contenu/premiere/allemand/landeskunde-literatur/fiche.md';
import exercice648 from './../../contenu/premiere/allemand/landeskunde-literatur/exercice.json';
import fiche649 from './../../contenu/premiere/anglais/aspects-simple-continu/fiche.md';
import exercice649 from './../../contenu/premiere/anglais/aspects-simple-continu/exercice.json';
import fiche650 from './../../contenu/premiere/anglais/gerondif-infinitif/fiche.md';
import exercice650 from './../../contenu/premiere/anglais/gerondif-infinitif/exercice.json';
import fiche651 from './../../contenu/premiere/anglais/relatives-determinatives-explicatives/fiche.md';
import exercice651 from './../../contenu/premiere/anglais/relatives-determinatives-explicatives/exercice.json';
import fiche652 from './../../contenu/premiere/anglais/vocabulaire-travail-etudes/fiche.md';
import exercice652 from './../../contenu/premiere/anglais/vocabulaire-travail-etudes/exercice.json';
import fiche653 from './../../contenu/premiere/anglais/voix-passive-emplois/fiche.md';
import exercice653 from './../../contenu/premiere/anglais/voix-passive-emplois/exercice.json';
import fiche654 from './../../contenu/premiere/anglais/futur-et-hypotheses/fiche.md';
import exercice654 from './../../contenu/premiere/anglais/futur-et-hypotheses/exercice.json';
import fiche655 from './../../contenu/premiere/anglais/vocabulaire-societe-engagement/fiche.md';
import exercice655 from './../../contenu/premiere/anglais/vocabulaire-societe-engagement/exercice.json';
import fiche656 from './../../contenu/premiere/anglais/civilisation-histoire-usa/fiche.md';
import exercice656 from './../../contenu/premiere/anglais/civilisation-histoire-usa/exercice.json';
import fiche657 from './../../contenu/premiere/anglais/civilisation-litterature/fiche.md';
import exercice657 from './../../contenu/premiere/anglais/civilisation-litterature/exercice.json';
import fiche658 from './../../contenu/premiere/arts/architecture/fiche.md';
import exercice658 from './../../contenu/premiere/arts/architecture/exercice.json';
import fiche659 from './../../contenu/premiere/arts/histoire-musique/fiche.md';
import exercice659 from './../../contenu/premiere/arts/histoire-musique/exercice.json';
import fiche660 from './../../contenu/premiere/enseignement-scientifique/une-longue-histoire-de-la-matiere/fiche.md';
import exercice660 from './../../contenu/premiere/enseignement-scientifique/une-longue-histoire-de-la-matiere/exercice.json';
import fiche661 from './../../contenu/premiere/enseignement-scientifique/le-soleil-notre-source-denergie/fiche.md';
import exercice661 from './../../contenu/premiere/enseignement-scientifique/le-soleil-notre-source-denergie/exercice.json';
import fiche662 from './../../contenu/premiere/enseignement-scientifique/la-terre-un-astre-singulier/fiche.md';
import exercice662 from './../../contenu/premiere/enseignement-scientifique/la-terre-un-astre-singulier/exercice.json';
import fiche663 from './../../contenu/premiere/enseignement-scientifique/la-biodiversite-et-son-evolution/fiche.md';
import exercice663 from './../../contenu/premiere/enseignement-scientifique/la-biodiversite-et-son-evolution/exercice.json';
import fiche664 from './../../contenu/premiere/enseignement-scientifique/son-et-musique/fiche.md';
import exercice664 from './../../contenu/premiere/enseignement-scientifique/son-et-musique/exercice.json';
import fiche665 from './../../contenu/premiere/espagnol/subjuntivo-usos/fiche.md';
import exercice665 from './../../contenu/premiere/espagnol/subjuntivo-usos/exercice.json';
import fiche666 from './../../contenu/premiere/espagnol/relativos/fiche.md';
import exercice666 from './../../contenu/premiere/espagnol/relativos/exercice.json';
import fiche667 from './../../contenu/premiere/espagnol/perifrasis/fiche.md';
import exercice667 from './../../contenu/premiere/espagnol/perifrasis/exercice.json';
import fiche668 from './../../contenu/premiere/espagnol/vocabulario-trabajo-estudios/fiche.md';
import exercice668 from './../../contenu/premiere/espagnol/vocabulario-trabajo-estudios/exercice.json';
import fiche669 from './../../contenu/premiere/espagnol/voz-pasiva/fiche.md';
import exercice669 from './../../contenu/premiere/espagnol/voz-pasiva/exercice.json';
import fiche670 from './../../contenu/premiere/espagnol/estilo-indirecto/fiche.md';
import exercice670 from './../../contenu/premiere/espagnol/estilo-indirecto/exercice.json';
import fiche671 from './../../contenu/premiere/espagnol/vocabulario-sociedad-ciudadania/fiche.md';
import exercice671 from './../../contenu/premiere/espagnol/vocabulario-sociedad-ciudadania/exercice.json';
import fiche672 from './../../contenu/premiere/espagnol/civilizacion-historia-latinoamerica/fiche.md';
import exercice672 from './../../contenu/premiere/espagnol/civilizacion-historia-latinoamerica/exercice.json';
import fiche673 from './../../contenu/premiere/espagnol/civilizacion-literatura/fiche.md';
import exercice673 from './../../contenu/premiere/espagnol/civilizacion-literatura/exercice.json';
import fiche674 from './../../contenu/premiere/francais/grammaire-premiere/fiche.md';
import exercice674 from './../../contenu/premiere/francais/grammaire-premiere/exercice.json';
import fiche675 from './../../contenu/premiere/francais/commentaire-litteraire/fiche.md';
import exercice675 from './../../contenu/premiere/francais/commentaire-litteraire/exercice.json';
import fiche676 from './../../contenu/premiere/francais/roman-et-recit/fiche.md';
import exercice676 from './../../contenu/premiere/francais/roman-et-recit/exercice.json';
import fiche677 from './../../contenu/premiere/francais/poesie-19-21/fiche.md';
import exercice677 from './../../contenu/premiere/francais/poesie-19-21/exercice.json';
import fiche678 from './../../contenu/premiere/francais/contraction-essai/fiche.md';
import exercice678 from './../../contenu/premiere/francais/contraction-essai/exercice.json';
import fiche679 from './../../contenu/premiere/francais/litterature-idees-16-18/fiche.md';
import exercice679 from './../../contenu/premiere/francais/litterature-idees-16-18/exercice.json';
import fiche680 from './../../contenu/premiere/francais/dissertation/fiche.md';
import exercice680 from './../../contenu/premiere/francais/dissertation/exercice.json';
import fiche681 from './../../contenu/premiere/francais/theatre-17-21/fiche.md';
import exercice681 from './../../contenu/premiere/francais/theatre-17-21/exercice.json';
import fiche682 from './../../contenu/premiere/francais/epreuve-orale/fiche.md';
import exercice682 from './../../contenu/premiere/francais/epreuve-orale/exercice.json';
import fiche683 from './../../contenu/premiere/hggsp/democratie/fiche.md';
import exercice683 from './../../contenu/premiere/hggsp/democratie/exercice.json';
import fiche684 from './../../contenu/premiere/hggsp/puissances-internationales/fiche.md';
import exercice684 from './../../contenu/premiere/hggsp/puissances-internationales/exercice.json';
import fiche685 from './../../contenu/premiere/hggsp/frontieres/fiche.md';
import exercice685 from './../../contenu/premiere/hggsp/frontieres/exercice.json';
import fiche686 from './../../contenu/premiere/hggsp/s-informer/fiche.md';
import exercice686 from './../../contenu/premiere/hggsp/s-informer/exercice.json';
import fiche687 from './../../contenu/premiere/hggsp/etats-et-religions/fiche.md';
import exercice687 from './../../contenu/premiere/hggsp/etats-et-religions/exercice.json';
import fiche688 from './../../contenu/premiere/hist-geo/revolution-francaise-empire/fiche.md';
import exercice688 from './../../contenu/premiere/hist-geo/revolution-francaise-empire/exercice.json';
import fiche689 from './../../contenu/premiere/hist-geo/nations-nationalites-europe/fiche.md';
import exercice689 from './../../contenu/premiere/hist-geo/nations-nationalites-europe/exercice.json';
import fiche690 from './../../contenu/premiere/hist-geo/industrialisation-19e/fiche.md';
import exercice690 from './../../contenu/premiere/hist-geo/industrialisation-19e/exercice.json';
import fiche691 from './../../contenu/premiere/hist-geo/premiere-guerre-et-consequences/fiche.md';
import exercice691 from './../../contenu/premiere/hist-geo/premiere-guerre-et-consequences/exercice.json';
import fiche692 from './../../contenu/premiere/hist-geo/metropolisation-france/fiche.md';
import exercice692 from './../../contenu/premiere/hist-geo/metropolisation-france/exercice.json';
import fiche693 from './../../contenu/premiere/hist-geo/espaces-productifs-et-ruraux/fiche.md';
import exercice693 from './../../contenu/premiere/hist-geo/espaces-productifs-et-ruraux/exercice.json';
import fiche694 from './../../contenu/premiere/hist-geo/emc-republique-laicite/fiche.md';
import exercice694 from './../../contenu/premiere/hist-geo/emc-republique-laicite/exercice.json';
import fiche695 from './../../contenu/premiere/italien/congiuntivo-usi/fiche.md';
import exercice695 from './../../contenu/premiere/italien/congiuntivo-usi/exercice.json';
import fiche696 from './../../contenu/premiere/italien/pronomi-relativi/fiche.md';
import exercice696 from './../../contenu/premiere/italien/pronomi-relativi/exercice.json';
import fiche697 from './../../contenu/premiere/italien/perifrasi/fiche.md';
import exercice697 from './../../contenu/premiere/italien/perifrasi/exercice.json';
import fiche698 from './../../contenu/premiere/italien/vocabolario-lavoro-studi/fiche.md';
import exercice698 from './../../contenu/premiere/italien/vocabolario-lavoro-studi/exercice.json';
import fiche699 from './../../contenu/premiere/italien/forma-passiva/fiche.md';
import exercice699 from './../../contenu/premiere/italien/forma-passiva/exercice.json';
import fiche700 from './../../contenu/premiere/italien/discorso-indiretto/fiche.md';
import exercice700 from './../../contenu/premiere/italien/discorso-indiretto/exercice.json';
import fiche701 from './../../contenu/premiere/italien/vocabolario-societa-cittadinanza/fiche.md';
import exercice701 from './../../contenu/premiere/italien/vocabolario-societa-cittadinanza/exercice.json';
import fiche702 from './../../contenu/premiere/italien/civilta-rinascimento/fiche.md';
import exercice702 from './../../contenu/premiere/italien/civilta-rinascimento/exercice.json';
import fiche703 from './../../contenu/premiere/italien/civilta-letteratura/fiche.md';
import exercice703 from './../../contenu/premiere/italien/civilta-letteratura/exercice.json';
import fiche704 from './../../contenu/premiere/langues-anciennes/mythologie/fiche.md';
import exercice704 from './../../contenu/premiere/langues-anciennes/mythologie/exercice.json';
import fiche705 from './../../contenu/premiere/langues-anciennes/latin-auteurs/fiche.md';
import exercice705 from './../../contenu/premiere/langues-anciennes/latin-auteurs/exercice.json';
import fiche706 from './../../contenu/premiere/maths-enseignement-scientifique/information-chiffree/fiche.md';
import exercice706 from './../../contenu/premiere/maths-enseignement-scientifique/information-chiffree/exercice.json';
import fiche707 from './../../contenu/premiere/maths-enseignement-scientifique/phenomenes-evolution/fiche.md';
import exercice707 from './../../contenu/premiere/maths-enseignement-scientifique/phenomenes-evolution/exercice.json';
import fiche708 from './../../contenu/premiere/maths-enseignement-scientifique/statistiques-bivariees/fiche.md';
import exercice708 from './../../contenu/premiere/maths-enseignement-scientifique/statistiques-bivariees/exercice.json';
import fiche709 from './../../contenu/premiere/maths-enseignement-scientifique/phenomenes-aleatoires/fiche.md';
import exercice709 from './../../contenu/premiere/maths-enseignement-scientifique/phenomenes-aleatoires/exercice.json';
import fiche710 from './../../contenu/premiere/maths-specialite/second-degre/fiche.md';
import exercice710 from './../../contenu/premiere/maths-specialite/second-degre/exercice.json';
import fiche711 from './../../contenu/premiere/maths-specialite/suites-numeriques/fiche.md';
import exercice711 from './../../contenu/premiere/maths-specialite/suites-numeriques/exercice.json';
import fiche712 from './../../contenu/premiere/maths-specialite/derivation/fiche.md';
import exercice712 from './../../contenu/premiere/maths-specialite/derivation/exercice.json';
import fiche713 from './../../contenu/premiere/maths-specialite/variations-courbes/fiche.md';
import exercice713 from './../../contenu/premiere/maths-specialite/variations-courbes/exercice.json';
import fiche714 from './../../contenu/premiere/maths-specialite/fonction-exponentielle/fiche.md';
import exercice714 from './../../contenu/premiere/maths-specialite/fonction-exponentielle/exercice.json';
import fiche715 from './../../contenu/premiere/maths-specialite/trigonometrie/fiche.md';
import exercice715 from './../../contenu/premiere/maths-specialite/trigonometrie/exercice.json';
import fiche716 from './../../contenu/premiere/maths-specialite/produit-scalaire/fiche.md';
import exercice716 from './../../contenu/premiere/maths-specialite/produit-scalaire/exercice.json';
import fiche717 from './../../contenu/premiere/maths-specialite/geometrie-reperee/fiche.md';
import exercice717 from './../../contenu/premiere/maths-specialite/geometrie-reperee/exercice.json';
import fiche718 from './../../contenu/premiere/maths-specialite/probabilites-conditionnelles/fiche.md';
import exercice718 from './../../contenu/premiere/maths-specialite/probabilites-conditionnelles/exercice.json';
import fiche719 from './../../contenu/premiere/maths-specialite/variables-aleatoires/fiche.md';
import exercice719 from './../../contenu/premiere/maths-specialite/variables-aleatoires/exercice.json';
import fiche720 from './../../contenu/premiere/nsi/representation-des-donnees/fiche.md';
import exercice720 from './../../contenu/premiere/nsi/representation-des-donnees/exercice.json';
import fiche721 from './../../contenu/premiere/nsi/types-construits/fiche.md';
import exercice721 from './../../contenu/premiere/nsi/types-construits/exercice.json';
import fiche722 from './../../contenu/premiere/nsi/traitement-de-donnees-en-tables/fiche.md';
import exercice722 from './../../contenu/premiere/nsi/traitement-de-donnees-en-tables/exercice.json';
import fiche723 from './../../contenu/premiere/nsi/interactions-web-client-serveur/fiche.md';
import exercice723 from './../../contenu/premiere/nsi/interactions-web-client-serveur/exercice.json';
import fiche724 from './../../contenu/premiere/nsi/architecture-et-systeme/fiche.md';
import exercice724 from './../../contenu/premiere/nsi/architecture-et-systeme/exercice.json';
import fiche725 from './../../contenu/premiere/nsi/algorithmique-tris-et-recherche/fiche.md';
import exercice725 from './../../contenu/premiere/nsi/algorithmique-tris-et-recherche/exercice.json';
import fiche726 from './../../contenu/premiere/physique-chimie/transformations-matiere/fiche.md';
import exercice726 from './../../contenu/premiere/physique-chimie/transformations-matiere/exercice.json';
import fiche727 from './../../contenu/premiere/physique-chimie/chimie-organique/fiche.md';
import exercice727 from './../../contenu/premiere/physique-chimie/chimie-organique/exercice.json';
import fiche728 from './../../contenu/premiere/physique-chimie/mouvement-interactions/fiche.md';
import exercice728 from './../../contenu/premiere/physique-chimie/mouvement-interactions/exercice.json';
import fiche729 from './../../contenu/premiere/physique-chimie/energie-phenomenes-mecaniques/fiche.md';
import exercice729 from './../../contenu/premiere/physique-chimie/energie-phenomenes-mecaniques/exercice.json';
import fiche730 from './../../contenu/premiere/physique-chimie/energie-phenomenes-electriques/fiche.md';
import exercice730 from './../../contenu/premiere/physique-chimie/energie-phenomenes-electriques/exercice.json';
import fiche731 from './../../contenu/premiere/physique-chimie/ondes-signaux/fiche.md';
import exercice731 from './../../contenu/premiere/physique-chimie/ondes-signaux/exercice.json';
import fiche732 from './../../contenu/premiere/ses/marche-concurrentiel/fiche.md';
import exercice732 from './../../contenu/premiere/ses/marche-concurrentiel/exercice.json';
import fiche733 from './../../contenu/premiere/ses/marches-imparfaits/fiche.md';
import exercice733 from './../../contenu/premiere/ses/marches-imparfaits/exercice.json';
import fiche734 from './../../contenu/premiere/ses/defaillances-de-marche/fiche.md';
import exercice734 from './../../contenu/premiere/ses/defaillances-de-marche/exercice.json';
import fiche735 from './../../contenu/premiere/ses/monnaie-et-financement/fiche.md';
import exercice735 from './../../contenu/premiere/ses/monnaie-et-financement/exercice.json';
import fiche736 from './../../contenu/premiere/ses/socialisation-primaire-secondaire/fiche.md';
import exercice736 from './../../contenu/premiere/ses/socialisation-primaire-secondaire/exercice.json';
import fiche737 from './../../contenu/premiere/ses/liens-sociaux/fiche.md';
import exercice737 from './../../contenu/premiere/ses/liens-sociaux/exercice.json';
import fiche738 from './../../contenu/premiere/ses/deviance-controle-social/fiche.md';
import exercice738 from './../../contenu/premiere/ses/deviance-controle-social/exercice.json';
import fiche739 from './../../contenu/premiere/ses/voter-participation/fiche.md';
import exercice739 from './../../contenu/premiere/ses/voter-participation/exercice.json';
import fiche740 from './../../contenu/premiere/si/analyse-fonctionnelle-des-systemes/fiche.md';
import exercice740 from './../../contenu/premiere/si/analyse-fonctionnelle-des-systemes/exercice.json';
import fiche741 from './../../contenu/premiere/si/chaine-denergie/fiche.md';
import exercice741 from './../../contenu/premiere/si/chaine-denergie/exercice.json';
import fiche742 from './../../contenu/premiere/si/chaine-dinformation/fiche.md';
import exercice742 from './../../contenu/premiere/si/chaine-dinformation/exercice.json';
import fiche743 from './../../contenu/premiere/si/comportement-des-materiaux/fiche.md';
import exercice743 from './../../contenu/premiere/si/comportement-des-materiaux/exercice.json';
import fiche744 from './../../contenu/premiere/si/mecanique-des-solides/fiche.md';
import exercice744 from './../../contenu/premiere/si/mecanique-des-solides/exercice.json';
import fiche745 from './../../contenu/premiere/svt/mutations-et-variabilite/fiche.md';
import exercice745 from './../../contenu/premiere/svt/mutations-et-variabilite/exercice.json';
import fiche746 from './../../contenu/premiere/svt/expression-du-patrimoine-genetique/fiche.md';
import exercice746 from './../../contenu/premiere/svt/expression-du-patrimoine-genetique/exercice.json';
import fiche747 from './../../contenu/premiere/svt/dynamique-interne-de-la-terre/fiche.md';
import exercice747 from './../../contenu/premiere/svt/dynamique-interne-de-la-terre/exercice.json';
import fiche748 from './../../contenu/premiere/svt/ecosystemes-et-services/fiche.md';
import exercice748 from './../../contenu/premiere/svt/ecosystemes-et-services/exercice.json';
import fiche749 from './../../contenu/premiere/svt/variation-genetique-et-sante/fiche.md';
import exercice749 from './../../contenu/premiere/svt/variation-genetique-et-sante/exercice.json';
import fiche750 from './../../contenu/premiere-techno/maths/suites-numeriques/fiche.md';
import exercice750 from './../../contenu/premiere-techno/maths/suites-numeriques/exercice.json';
import fiche751 from './../../contenu/premiere-techno/maths/fonctions-variable-reelle/fiche.md';
import exercice751 from './../../contenu/premiere-techno/maths/fonctions-variable-reelle/exercice.json';
import fiche752 from './../../contenu/premiere-techno/maths/derivation/fiche.md';
import exercice752 from './../../contenu/premiere-techno/maths/derivation/exercice.json';
import fiche753 from './../../contenu/premiere-techno/maths/statistiques-deux-variables/fiche.md';
import exercice753 from './../../contenu/premiere-techno/maths/statistiques-deux-variables/exercice.json';
import fiche754 from './../../contenu/premiere-techno/maths/probabilites-variables-aleatoires/fiche.md';
import exercice754 from './../../contenu/premiere-techno/maths/probabilites-variables-aleatoires/exercice.json';
import fiche755 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/mesure-incertitudes/fiche.md';
import exercice755 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/mesure-incertitudes/exercice.json';
import fiche756 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/trigonometrie/fiche.md';
import exercice756 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/trigonometrie/exercice.json';
import fiche757 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/energie/fiche.md';
import exercice757 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/energie/exercice.json';
import fiche758 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/produit-scalaire/fiche.md';
import exercice758 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/produit-scalaire/exercice.json';
import fiche759 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/nombres-complexes/fiche.md';
import exercice759 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/nombres-complexes/exercice.json';
import fiche760 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/ondes-information/fiche.md';
import exercice760 from './../../contenu/premiere-techno/pc-maths-sti2d-stl/ondes-information/exercice.json';
import fiche761 from './../../contenu/premiere-techno/pc-sante-st2s/securite-chimique-acide-base/fiche.md';
import exercice761 from './../../contenu/premiere-techno/pc-sante-st2s/securite-chimique-acide-base/exercice.json';
import fiche762 from './../../contenu/premiere-techno/pc-sante-st2s/oxydoreduction-desinfectants/fiche.md';
import exercice762 from './../../contenu/premiere-techno/pc-sante-st2s/oxydoreduction-desinfectants/exercice.json';
import fiche763 from './../../contenu/premiere-techno/pc-sante-st2s/risques-electriques/fiche.md';
import exercice763 from './../../contenu/premiere-techno/pc-sante-st2s/risques-electriques/exercice.json';
import fiche764 from './../../contenu/premiere-techno/pc-sante-st2s/ondes-sonores-audition/fiche.md';
import exercice764 from './../../contenu/premiere-techno/pc-sante-st2s/ondes-sonores-audition/exercice.json';
import fiche765 from './../../contenu/premiere-techno/pc-sante-st2s/lumiere-vision-lentilles/fiche.md';
import exercice765 from './../../contenu/premiere-techno/pc-sante-st2s/lumiere-vision-lentilles/exercice.json';
import fiche766 from './../../contenu/premiere-techno/pc-sante-st2s/infrarouge-securite-routiere/fiche.md';
import exercice766 from './../../contenu/premiere-techno/pc-sante-st2s/infrarouge-securite-routiere/exercice.json';
import fiche767 from './../../contenu/premiere-techno/spcl-stl/securite-chimie-verte/fiche.md';
import exercice767 from './../../contenu/premiere-techno/spcl-stl/securite-chimie-verte/exercice.json';
import fiche768 from './../../contenu/premiere-techno/spcl-stl/mesure-incertitudes-labo/fiche.md';
import exercice768 from './../../contenu/premiere-techno/spcl-stl/mesure-incertitudes-labo/exercice.json';
import fiche769 from './../../contenu/premiere-techno/spcl-stl/instrumentation-chaine-mesure/fiche.md';
import exercice769 from './../../contenu/premiere-techno/spcl-stl/instrumentation-chaine-mesure/exercice.json';
import fiche770 from './../../contenu/premiere-techno/spcl-stl/analyses-spectroscopies-dosages/fiche.md';
import exercice770 from './../../contenu/premiere-techno/spcl-stl/analyses-spectroscopies-dosages/exercice.json';
import fiche771 from './../../contenu/premiere-techno/spcl-stl/syntheses-extraction-purification/fiche.md';
import exercice771 from './../../contenu/premiere-techno/spcl-stl/syntheses-extraction-purification/exercice.json';
import fiche772 from './../../contenu/premiere-techno/spcl-stl/image-couleur-vision/fiche.md';
import exercice772 from './../../contenu/premiere-techno/spcl-stl/image-couleur-vision/exercice.json';
import fiche773 from './../../contenu/premiere-techno/spcl-stl/image-photographie-lentilles/fiche.md';
import exercice773 from './../../contenu/premiere-techno/spcl-stl/image-photographie-lentilles/exercice.json';
import fiche774 from './../../contenu/premiere-techno/spcl-stl/appareil-photo-image-numerique/fiche.md';
import exercice774 from './../../contenu/premiere-techno/spcl-stl/appareil-photo-image-numerique/exercice.json';
import fiche775 from './../../contenu/terminale/allemand/komplexe-satzgefuege/fiche.md';
import exercice775 from './../../contenu/terminale/allemand/komplexe-satzgefuege/exercice.json';
import fiche776 from './../../contenu/terminale/allemand/konnektoren-argumentation/fiche.md';
import exercice776 from './../../contenu/terminale/allemand/konnektoren-argumentation/exercice.json';
import fiche777 from './../../contenu/terminale/allemand/partizipialkonstruktionen/fiche.md';
import exercice777 from './../../contenu/terminale/allemand/partizipialkonstruktionen/exercice.json';
import fiche778 from './../../contenu/terminale/allemand/wortschatz-wirtschaft-globalisierung/fiche.md';
import exercice778 from './../../contenu/terminale/allemand/wortschatz-wirtschaft-globalisierung/exercice.json';
import fiche779 from './../../contenu/terminale/allemand/konjunktiv-1-indirekte-rede/fiche.md';
import exercice779 from './../../contenu/terminale/allemand/konjunktiv-1-indirekte-rede/exercice.json';
import fiche780 from './../../contenu/terminale/allemand/nominalstil/fiche.md';
import exercice780 from './../../contenu/terminale/allemand/nominalstil/exercice.json';
import fiche781 from './../../contenu/terminale/allemand/wortschatz-gesellschaft-welt/fiche.md';
import exercice781 from './../../contenu/terminale/allemand/wortschatz-gesellschaft-welt/exercice.json';
import fiche782 from './../../contenu/terminale/allemand/landeskunde-deutsch-in-der-welt/fiche.md';
import exercice782 from './../../contenu/terminale/allemand/landeskunde-deutsch-in-der-welt/exercice.json';
import fiche783 from './../../contenu/terminale/anglais/systeme-verbal/fiche.md';
import exercice783 from './../../contenu/terminale/anglais/systeme-verbal/exercice.json';
import fiche784 from './../../contenu/terminale/anglais/modalite/fiche.md';
import exercice784 from './../../contenu/terminale/anglais/modalite/exercice.json';
import fiche785 from './../../contenu/terminale/anglais/irreel-hypotheses/fiche.md';
import exercice785 from './../../contenu/terminale/anglais/irreel-hypotheses/exercice.json';
import fiche786 from './../../contenu/terminale/anglais/vocabulaire-economie-mondialisation/fiche.md';
import exercice786 from './../../contenu/terminale/anglais/vocabulaire-economie-mondialisation/exercice.json';
import fiche787 from './../../contenu/terminale/anglais/discours-rapporte-concordance/fiche.md';
import exercice787 from './../../contenu/terminale/anglais/discours-rapporte-concordance/exercice.json';
import fiche788 from './../../contenu/terminale/anglais/structures-complexes/fiche.md';
import exercice788 from './../../contenu/terminale/anglais/structures-complexes/exercice.json';
import fiche789 from './../../contenu/terminale/anglais/vocabulaire-sciences-societe/fiche.md';
import exercice789 from './../../contenu/terminale/anglais/vocabulaire-sciences-societe/exercice.json';
import fiche790 from './../../contenu/terminale/anglais/civilisation-anglais-monde/fiche.md';
import exercice790 from './../../contenu/terminale/anglais/civilisation-anglais-monde/exercice.json';
import fiche791 from './../../contenu/terminale/arts/cinema/fiche.md';
import exercice791 from './../../contenu/terminale/arts/cinema/exercice.json';
import fiche792 from './../../contenu/terminale/enseignement-scientifique/atmosphere-effet-de-serre-climat/fiche.md';
import exercice792 from './../../contenu/terminale/enseignement-scientifique/atmosphere-effet-de-serre-climat/exercice.json';
import fiche793 from './../../contenu/terminale/enseignement-scientifique/energie-carbone-transition/fiche.md';
import exercice793 from './../../contenu/terminale/enseignement-scientifique/energie-carbone-transition/exercice.json';
import fiche794 from './../../contenu/terminale/enseignement-scientifique/production-conversion-energie-electrique/fiche.md';
import exercice794 from './../../contenu/terminale/enseignement-scientifique/production-conversion-energie-electrique/exercice.json';
import fiche795 from './../../contenu/terminale/enseignement-scientifique/une-histoire-du-vivant/fiche.md';
import exercice795 from './../../contenu/terminale/enseignement-scientifique/une-histoire-du-vivant/exercice.json';
import fiche796 from './../../contenu/terminale/enseignement-scientifique/evolution-et-biodiversite/fiche.md';
import exercice796 from './../../contenu/terminale/enseignement-scientifique/evolution-et-biodiversite/exercice.json';
import fiche797 from './../../contenu/terminale/enseignement-scientifique/du-genotype-au-phenotype/fiche.md';
import exercice797 from './../../contenu/terminale/enseignement-scientifique/du-genotype-au-phenotype/exercice.json';
import fiche798 from './../../contenu/terminale/enseignement-scientifique/modeles-demographiques/fiche.md';
import exercice798 from './../../contenu/terminale/enseignement-scientifique/modeles-demographiques/exercice.json';
import fiche799 from './../../contenu/terminale/enseignement-scientifique/probabilites-bayes-ia/fiche.md';
import exercice799 from './../../contenu/terminale/enseignement-scientifique/probabilites-bayes-ia/exercice.json';
import fiche800 from './../../contenu/terminale/espagnol/ser-estar-avanzado/fiche.md';
import exercice800 from './../../contenu/terminale/espagnol/ser-estar-avanzado/exercice.json';
import fiche801 from './../../contenu/terminale/espagnol/subjuntivo-imperfecto/fiche.md';
import exercice801 from './../../contenu/terminale/espagnol/subjuntivo-imperfecto/exercice.json';
import fiche802 from './../../contenu/terminale/espagnol/concordancia-tiempos/fiche.md';
import exercice802 from './../../contenu/terminale/espagnol/concordancia-tiempos/exercice.json';
import fiche803 from './../../contenu/terminale/espagnol/vocabulario-economia-globalizacion/fiche.md';
import exercice803 from './../../contenu/terminale/espagnol/vocabulario-economia-globalizacion/exercice.json';
import fiche804 from './../../contenu/terminale/espagnol/conectores-argumentacion/fiche.md';
import exercice804 from './../../contenu/terminale/espagnol/conectores-argumentacion/exercice.json';
import fiche805 from './../../contenu/terminale/espagnol/estructuras-enfaticas/fiche.md';
import exercice805 from './../../contenu/terminale/espagnol/estructuras-enfaticas/exercice.json';
import fiche806 from './../../contenu/terminale/espagnol/vocabulario-sociedad-mundo/fiche.md';
import exercice806 from './../../contenu/terminale/espagnol/vocabulario-sociedad-mundo/exercice.json';
import fiche807 from './../../contenu/terminale/espagnol/civilizacion-espanol-mundo/fiche.md';
import exercice807 from './../../contenu/terminale/espagnol/civilizacion-espanol-mundo/exercice.json';
import fiche808 from './../../contenu/terminale/grand-oral/comprendre-l-epreuve/fiche.md';
import exercice808 from './../../contenu/terminale/grand-oral/comprendre-l-epreuve/exercice.json';
import fiche809 from './../../contenu/terminale/grand-oral/choisir-formuler-ses-questions/fiche.md';
import exercice809 from './../../contenu/terminale/grand-oral/choisir-formuler-ses-questions/exercice.json';
import fiche810 from './../../contenu/terminale/grand-oral/construire-l-expose/fiche.md';
import exercice810 from './../../contenu/terminale/grand-oral/construire-l-expose/exercice.json';
import fiche811 from './../../contenu/terminale/grand-oral/voix-posture-et-stress/fiche.md';
import exercice811 from './../../contenu/terminale/grand-oral/voix-posture-et-stress/exercice.json';
import fiche812 from './../../contenu/terminale/grand-oral/l-echange-avec-le-jury/fiche.md';
import exercice812 from './../../contenu/terminale/grand-oral/l-echange-avec-le-jury/exercice.json';
import fiche813 from './../../contenu/terminale/grand-oral/le-projet-d-orientation/fiche.md';
import exercice813 from './../../contenu/terminale/grand-oral/le-projet-d-orientation/exercice.json';
import fiche814 from './../../contenu/terminale/grand-oral/criteres-et-erreurs/fiche.md';
import exercice814 from './../../contenu/terminale/grand-oral/criteres-et-erreurs/exercice.json';
import fiche815 from './../../contenu/terminale/grand-oral/s-entrainer-et-checklist/fiche.md';
import exercice815 from './../../contenu/terminale/grand-oral/s-entrainer-et-checklist/exercice.json';
import fiche816 from './../../contenu/terminale/hggsp/nouveaux-espaces-conquete/fiche.md';
import exercice816 from './../../contenu/terminale/hggsp/nouveaux-espaces-conquete/exercice.json';
import fiche817 from './../../contenu/terminale/hggsp/faire-la-guerre-faire-la-paix/fiche.md';
import exercice817 from './../../contenu/terminale/hggsp/faire-la-guerre-faire-la-paix/exercice.json';
import fiche818 from './../../contenu/terminale/hggsp/histoire-et-memoires/fiche.md';
import exercice818 from './../../contenu/terminale/hggsp/histoire-et-memoires/exercice.json';
import fiche819 from './../../contenu/terminale/hggsp/patrimoine/fiche.md';
import exercice819 from './../../contenu/terminale/hggsp/patrimoine/exercice.json';
import fiche820 from './../../contenu/terminale/hggsp/environnement/fiche.md';
import exercice820 from './../../contenu/terminale/hggsp/environnement/exercice.json';
import fiche821 from './../../contenu/terminale/hggsp/enjeu-de-la-connaissance/fiche.md';
import exercice821 from './../../contenu/terminale/hggsp/enjeu-de-la-connaissance/exercice.json';
import fiche822 from './../../contenu/terminale/hist-geo/seconde-guerre-mondiale-genocides/fiche.md';
import exercice822 from './../../contenu/terminale/hist-geo/seconde-guerre-mondiale-genocides/exercice.json';
import fiche823 from './../../contenu/terminale/hist-geo/guerre-froide/fiche.md';
import exercice823 from './../../contenu/terminale/hist-geo/guerre-froide/exercice.json';
import fiche824 from './../../contenu/terminale/hist-geo/decolonisation/fiche.md';
import exercice824 from './../../contenu/terminale/hist-geo/decolonisation/exercice.json';
import fiche825 from './../../contenu/terminale/hist-geo/monde-depuis-1990/fiche.md';
import exercice825 from './../../contenu/terminale/hist-geo/monde-depuis-1990/exercice.json';
import fiche826 from './../../contenu/terminale/hist-geo/mers-oceans-mondialisation/fiche.md';
import exercice826 from './../../contenu/terminale/hist-geo/mers-oceans-mondialisation/exercice.json';
import fiche827 from './../../contenu/terminale/hist-geo/puissances-et-france-dans-le-monde/fiche.md';
import exercice827 from './../../contenu/terminale/hist-geo/puissances-et-france-dans-le-monde/exercice.json';
import fiche828 from './../../contenu/terminale/hist-geo/emc-democratie-engagement/fiche.md';
import exercice828 from './../../contenu/terminale/hist-geo/emc-democratie-engagement/exercice.json';
import fiche829 from './../../contenu/terminale/italien/usi-avanzati/fiche.md';
import exercice829 from './../../contenu/terminale/italien/usi-avanzati/exercice.json';
import fiche830 from './../../contenu/terminale/italien/congiuntivo-imperfetto/fiche.md';
import exercice830 from './../../contenu/terminale/italien/congiuntivo-imperfetto/exercice.json';
import fiche831 from './../../contenu/terminale/italien/concordanza-tempi/fiche.md';
import exercice831 from './../../contenu/terminale/italien/concordanza-tempi/exercice.json';
import fiche832 from './../../contenu/terminale/italien/vocabolario-economia-globalizzazione/fiche.md';
import exercice832 from './../../contenu/terminale/italien/vocabolario-economia-globalizzazione/exercice.json';
import fiche833 from './../../contenu/terminale/italien/connettivi-argomentazione/fiche.md';
import exercice833 from './../../contenu/terminale/italien/connettivi-argomentazione/exercice.json';
import fiche834 from './../../contenu/terminale/italien/strutture-enfatiche/fiche.md';
import exercice834 from './../../contenu/terminale/italien/strutture-enfatiche/exercice.json';
import fiche835 from './../../contenu/terminale/italien/vocabolario-societa-mondo/fiche.md';
import exercice835 from './../../contenu/terminale/italien/vocabolario-societa-mondo/exercice.json';
import fiche836 from './../../contenu/terminale/italien/civilta-italiano-nel-mondo/fiche.md';
import exercice836 from './../../contenu/terminale/italien/civilta-italiano-nel-mondo/exercice.json';
import fiche837 from './../../contenu/terminale/langues-anciennes/civilisation-antique/fiche.md';
import exercice837 from './../../contenu/terminale/langues-anciennes/civilisation-antique/exercice.json';
import fiche838 from './../../contenu/terminale/maths-complementaires/suites-evolution/fiche.md';
import exercice838 from './../../contenu/terminale/maths-complementaires/suites-evolution/exercice.json';
import fiche839 from './../../contenu/terminale/maths-complementaires/probabilites-bayes-binomiale/fiche.md';
import exercice839 from './../../contenu/terminale/maths-complementaires/probabilites-bayes-binomiale/exercice.json';
import fiche840 from './../../contenu/terminale/maths-complementaires/derivation-convexite/fiche.md';
import exercice840 from './../../contenu/terminale/maths-complementaires/derivation-convexite/exercice.json';
import fiche841 from './../../contenu/terminale/maths-complementaires/continuite-tvi/fiche.md';
import exercice841 from './../../contenu/terminale/maths-complementaires/continuite-tvi/exercice.json';
import fiche842 from './../../contenu/terminale/maths-complementaires/exponentielle-logarithme/fiche.md';
import exercice842 from './../../contenu/terminale/maths-complementaires/exponentielle-logarithme/exercice.json';
import fiche843 from './../../contenu/terminale/maths-complementaires/primitives-equations-differentielles/fiche.md';
import exercice843 from './../../contenu/terminale/maths-complementaires/primitives-equations-differentielles/exercice.json';
import fiche844 from './../../contenu/terminale/maths-complementaires/calcul-integral/fiche.md';
import exercice844 from './../../contenu/terminale/maths-complementaires/calcul-integral/exercice.json';
import fiche845 from './../../contenu/terminale/maths-complementaires/lois-densite-temps-attente/fiche.md';
import exercice845 from './../../contenu/terminale/maths-complementaires/lois-densite-temps-attente/exercice.json';
import fiche846 from './../../contenu/terminale/maths-expertes/complexes-algebrique/fiche.md';
import exercice846 from './../../contenu/terminale/maths-expertes/complexes-algebrique/exercice.json';
import fiche847 from './../../contenu/terminale/maths-expertes/complexes-geometrique/fiche.md';
import exercice847 from './../../contenu/terminale/maths-expertes/complexes-geometrique/exercice.json';
import fiche848 from './../../contenu/terminale/maths-expertes/arithmetique/fiche.md';
import exercice848 from './../../contenu/terminale/maths-expertes/arithmetique/exercice.json';
import fiche849 from './../../contenu/terminale/maths-expertes/graphes-matrices/fiche.md';
import exercice849 from './../../contenu/terminale/maths-expertes/graphes-matrices/exercice.json';
import fiche850 from './../../contenu/terminale/maths-specialite/logique-ensembles/fiche.md';
import exercice850 from './../../contenu/terminale/maths-specialite/logique-ensembles/exercice.json';
import fiche851 from './../../contenu/terminale/maths-specialite/suites/fiche.md';
import exercice851 from './../../contenu/terminale/maths-specialite/suites/exercice.json';
import fiche852 from './../../contenu/terminale/maths-specialite/limites-fonctions/fiche.md';
import exercice852 from './../../contenu/terminale/maths-specialite/limites-fonctions/exercice.json';
import fiche853 from './../../contenu/terminale/maths-specialite/continuite/fiche.md';
import exercice853 from './../../contenu/terminale/maths-specialite/continuite/exercice.json';
import fiche854 from './../../contenu/terminale/maths-specialite/derivation-convexite/fiche.md';
import exercice854 from './../../contenu/terminale/maths-specialite/derivation-convexite/exercice.json';
import fiche855 from './../../contenu/terminale/maths-specialite/fonction-logarithme/fiche.md';
import exercice855 from './../../contenu/terminale/maths-specialite/fonction-logarithme/exercice.json';
import fiche856 from './../../contenu/terminale/maths-specialite/fonctions-trigonometriques/fiche.md';
import exercice856 from './../../contenu/terminale/maths-specialite/fonctions-trigonometriques/exercice.json';
import fiche857 from './../../contenu/terminale/maths-specialite/primitives-equations-differentielles/fiche.md';
import exercice857 from './../../contenu/terminale/maths-specialite/primitives-equations-differentielles/exercice.json';
import fiche858 from './../../contenu/terminale/maths-specialite/calcul-integral/fiche.md';
import exercice858 from './../../contenu/terminale/maths-specialite/calcul-integral/exercice.json';
import fiche859 from './../../contenu/terminale/maths-specialite/vecteurs-droites-plans-espace/fiche.md';
import exercice859 from './../../contenu/terminale/maths-specialite/vecteurs-droites-plans-espace/exercice.json';
import fiche860 from './../../contenu/terminale/maths-specialite/produit-scalaire-espace/fiche.md';
import exercice860 from './../../contenu/terminale/maths-specialite/produit-scalaire-espace/exercice.json';
import fiche861 from './../../contenu/terminale/maths-specialite/combinatoire-denombrement/fiche.md';
import exercice861 from './../../contenu/terminale/maths-specialite/combinatoire-denombrement/exercice.json';
import fiche862 from './../../contenu/terminale/maths-specialite/listes/fiche.md';
import exercice862 from './../../contenu/terminale/maths-specialite/listes/exercice.json';
import fiche863 from './../../contenu/terminale/maths-specialite/loi-binomiale/fiche.md';
import exercice863 from './../../contenu/terminale/maths-specialite/loi-binomiale/exercice.json';
import fiche864 from './../../contenu/terminale/maths-specialite/sommes-variables-concentration/fiche.md';
import exercice864 from './../../contenu/terminale/maths-specialite/sommes-variables-concentration/exercice.json';
import fiche865 from './../../contenu/terminale/nsi/programmation-et-complexite/fiche.md';
import exercice865 from './../../contenu/terminale/nsi/programmation-et-complexite/exercice.json';
import fiche866 from './../../contenu/terminale/nsi/recursivite-et-diviser-pour-regner/fiche.md';
import exercice866 from './../../contenu/terminale/nsi/recursivite-et-diviser-pour-regner/exercice.json';
import fiche867 from './../../contenu/terminale/nsi/structures-de-donnees/fiche.md';
import exercice867 from './../../contenu/terminale/nsi/structures-de-donnees/exercice.json';
import fiche868 from './../../contenu/terminale/nsi/bases-de-donnees-et-sql/fiche.md';
import exercice868 from './../../contenu/terminale/nsi/bases-de-donnees-et-sql/exercice.json';
import fiche869 from './../../contenu/terminale/nsi/reseaux-et-routage/fiche.md';
import exercice869 from './../../contenu/terminale/nsi/reseaux-et-routage/exercice.json';
import fiche870 from './../../contenu/terminale/nsi/algorithmes-de-graphes/fiche.md';
import exercice870 from './../../contenu/terminale/nsi/algorithmes-de-graphes/exercice.json';
import fiche871 from './../../contenu/terminale/philosophie/methode-dissertation/fiche.md';
import exercice871 from './../../contenu/terminale/philosophie/methode-dissertation/exercice.json';
import fiche872 from './../../contenu/terminale/philosophie/methode-explication-texte/fiche.md';
import exercice872 from './../../contenu/terminale/philosophie/methode-explication-texte/exercice.json';
import fiche873 from './../../contenu/terminale/philosophie/reperes-conceptuels/fiche.md';
import exercice873 from './../../contenu/terminale/philosophie/reperes-conceptuels/exercice.json';
import fiche874 from './../../contenu/terminale/philosophie/conscience/fiche.md';
import exercice874 from './../../contenu/terminale/philosophie/conscience/exercice.json';
import fiche875 from './../../contenu/terminale/philosophie/inconscient/fiche.md';
import exercice875 from './../../contenu/terminale/philosophie/inconscient/exercice.json';
import fiche876 from './../../contenu/terminale/philosophie/temps/fiche.md';
import exercice876 from './../../contenu/terminale/philosophie/temps/exercice.json';
import fiche877 from './../../contenu/terminale/philosophie/langage/fiche.md';
import exercice877 from './../../contenu/terminale/philosophie/langage/exercice.json';
import fiche878 from './../../contenu/terminale/philosophie/raison/fiche.md';
import exercice878 from './../../contenu/terminale/philosophie/raison/exercice.json';
import fiche879 from './../../contenu/terminale/philosophie/verite/fiche.md';
import exercice879 from './../../contenu/terminale/philosophie/verite/exercice.json';
import fiche880 from './../../contenu/terminale/philosophie/science/fiche.md';
import exercice880 from './../../contenu/terminale/philosophie/science/exercice.json';
import fiche881 from './../../contenu/terminale/philosophie/technique/fiche.md';
import exercice881 from './../../contenu/terminale/philosophie/technique/exercice.json';
import fiche882 from './../../contenu/terminale/philosophie/travail/fiche.md';
import exercice882 from './../../contenu/terminale/philosophie/travail/exercice.json';
import fiche883 from './../../contenu/terminale/philosophie/art/fiche.md';
import exercice883 from './../../contenu/terminale/philosophie/art/exercice.json';
import fiche884 from './../../contenu/terminale/philosophie/nature/fiche.md';
import exercice884 from './../../contenu/terminale/philosophie/nature/exercice.json';
import fiche885 from './../../contenu/terminale/philosophie/religion/fiche.md';
import exercice885 from './../../contenu/terminale/philosophie/religion/exercice.json';
import fiche886 from './../../contenu/terminale/philosophie/liberte/fiche.md';
import exercice886 from './../../contenu/terminale/philosophie/liberte/exercice.json';
import fiche887 from './../../contenu/terminale/philosophie/devoir/fiche.md';
import exercice887 from './../../contenu/terminale/philosophie/devoir/exercice.json';
import fiche888 from './../../contenu/terminale/philosophie/bonheur/fiche.md';
import exercice888 from './../../contenu/terminale/philosophie/bonheur/exercice.json';
import fiche889 from './../../contenu/terminale/philosophie/justice/fiche.md';
import exercice889 from './../../contenu/terminale/philosophie/justice/exercice.json';
import fiche890 from './../../contenu/terminale/philosophie/etat/fiche.md';
import exercice890 from './../../contenu/terminale/philosophie/etat/exercice.json';
import fiche891 from './../../contenu/terminale/physique-chimie/acide-base-ph/fiche.md';
import exercice891 from './../../contenu/terminale/physique-chimie/acide-base-ph/exercice.json';
import fiche892 from './../../contenu/terminale/physique-chimie/methodes-physiques-analyse/fiche.md';
import exercice892 from './../../contenu/terminale/physique-chimie/methodes-physiques-analyse/exercice.json';
import fiche893 from './../../contenu/terminale/physique-chimie/titrages/fiche.md';
import exercice893 from './../../contenu/terminale/physique-chimie/titrages/exercice.json';
import fiche894 from './../../contenu/terminale/physique-chimie/cinetique-chimique/fiche.md';
import exercice894 from './../../contenu/terminale/physique-chimie/cinetique-chimique/exercice.json';
import fiche895 from './../../contenu/terminale/physique-chimie/transformations-nucleaires/fiche.md';
import exercice895 from './../../contenu/terminale/physique-chimie/transformations-nucleaires/exercice.json';
import fiche896 from './../../contenu/terminale/physique-chimie/equilibre-sens-evolution/fiche.md';
import exercice896 from './../../contenu/terminale/physique-chimie/equilibre-sens-evolution/exercice.json';
import fiche897 from './../../contenu/terminale/physique-chimie/electrolyse/fiche.md';
import exercice897 from './../../contenu/terminale/physique-chimie/electrolyse/exercice.json';
import fiche898 from './../../contenu/terminale/physique-chimie/synthese-organique/fiche.md';
import exercice898 from './../../contenu/terminale/physique-chimie/synthese-organique/exercice.json';
import fiche899 from './../../contenu/terminale/physique-chimie/decrire-mouvement/fiche.md';
import exercice899 from './../../contenu/terminale/physique-chimie/decrire-mouvement/exercice.json';
import fiche900 from './../../contenu/terminale/physique-chimie/lois-newton-champs/fiche.md';
import exercice900 from './../../contenu/terminale/physique-chimie/lois-newton-champs/exercice.json';
import fiche901 from './../../contenu/terminale/physique-chimie/ecoulement-fluide/fiche.md';
import exercice901 from './../../contenu/terminale/physique-chimie/ecoulement-fluide/exercice.json';
import fiche902 from './../../contenu/terminale/physique-chimie/gaz-parfait/fiche.md';
import exercice902 from './../../contenu/terminale/physique-chimie/gaz-parfait/exercice.json';
import fiche903 from './../../contenu/terminale/physique-chimie/premier-principe-thermique/fiche.md';
import exercice903 from './../../contenu/terminale/physique-chimie/premier-principe-thermique/exercice.json';
import fiche904 from './../../contenu/terminale/physique-chimie/dipole-rc/fiche.md';
import exercice904 from './../../contenu/terminale/physique-chimie/dipole-rc/exercice.json';
import fiche905 from './../../contenu/terminale/physique-chimie/phenomenes-ondulatoires/fiche.md';
import exercice905 from './../../contenu/terminale/physique-chimie/phenomenes-ondulatoires/exercice.json';
import fiche906 from './../../contenu/terminale/physique-chimie/lunette-photons/fiche.md';
import exercice906 from './../../contenu/terminale/physique-chimie/lunette-photons/exercice.json';
import fiche907 from './../../contenu/terminale/ses/sources-croissance/fiche.md';
import exercice907 from './../../contenu/terminale/ses/sources-croissance/exercice.json';
import fiche908 from './../../contenu/terminale/ses/commerce-mondialisation/fiche.md';
import exercice908 from './../../contenu/terminale/ses/commerce-mondialisation/exercice.json';
import fiche909 from './../../contenu/terminale/ses/marche-du-travail-chomage/fiche.md';
import exercice909 from './../../contenu/terminale/ses/marche-du-travail-chomage/exercice.json';
import fiche910 from './../../contenu/terminale/ses/monnaie-crises-financieres/fiche.md';
import exercice910 from './../../contenu/terminale/ses/monnaie-crises-financieres/exercice.json';
import fiche911 from './../../contenu/terminale/ses/politiques-economiques/fiche.md';
import exercice911 from './../../contenu/terminale/ses/politiques-economiques/exercice.json';
import fiche912 from './../../contenu/terminale/ses/structure-sociale-classes/fiche.md';
import exercice912 from './../../contenu/terminale/ses/structure-sociale-classes/exercice.json';
import fiche913 from './../../contenu/terminale/ses/mobilite-sociale/fiche.md';
import exercice913 from './../../contenu/terminale/ses/mobilite-sociale/exercice.json';
import fiche914 from './../../contenu/terminale/ses/ecole-et-inegalites/fiche.md';
import exercice914 from './../../contenu/terminale/ses/ecole-et-inegalites/exercice.json';
import fiche915 from './../../contenu/terminale/ses/engagement-politique/fiche.md';
import exercice915 from './../../contenu/terminale/ses/engagement-politique/exercice.json';
import fiche916 from './../../contenu/terminale/si/modelisation-des-mouvements/fiche.md';
import exercice916 from './../../contenu/terminale/si/modelisation-des-mouvements/exercice.json';
import fiche917 from './../../contenu/terminale/si/energie-dans-les-systemes/fiche.md';
import exercice917 from './../../contenu/terminale/si/energie-dans-les-systemes/exercice.json';
import fiche918 from './../../contenu/terminale/si/resistance-des-structures/fiche.md';
import exercice918 from './../../contenu/terminale/si/resistance-des-structures/exercice.json';
import fiche919 from './../../contenu/terminale/si/transmission-de-linformation/fiche.md';
import exercice919 from './../../contenu/terminale/si/transmission-de-linformation/exercice.json';
import fiche920 from './../../contenu/terminale/si/asservissement-et-regulation/fiche.md';
import exercice920 from './../../contenu/terminale/si/asservissement-et-regulation/exercice.json';
import fiche921 from './../../contenu/terminale/svt/brassage-genetique-et-meiose/fiche.md';
import exercice921 from './../../contenu/terminale/svt/brassage-genetique-et-meiose/exercice.json';
import fiche922 from './../../contenu/terminale/svt/evolution-et-speciation/fiche.md';
import exercice922 from './../../contenu/terminale/svt/evolution-et-speciation/exercice.json';
import fiche923 from './../../contenu/terminale/svt/geothermie-et-flux-de-chaleur/fiche.md';
import exercice923 from './../../contenu/terminale/svt/geothermie-et-flux-de-chaleur/exercice.json';
import fiche924 from './../../contenu/terminale/svt/climats-passes-et-actuels/fiche.md';
import exercice924 from './../../contenu/terminale/svt/climats-passes-et-actuels/exercice.json';
import fiche925 from './../../contenu/terminale/svt/reflexe-et-motricite/fiche.md';
import exercice925 from './../../contenu/terminale/svt/reflexe-et-motricite/exercice.json';
import fiche926 from './../../contenu/terminale/svt/glycemie-et-diabete/fiche.md';
import exercice926 from './../../contenu/terminale/svt/glycemie-et-diabete/exercice.json';
import fiche927 from './../../contenu/terminale-techno/maths/logique-ensembles/fiche.md';
import exercice927 from './../../contenu/terminale-techno/maths/logique-ensembles/exercice.json';
import fiche928 from './../../contenu/terminale-techno/maths/suites-arithmetiques-geometriques/fiche.md';
import exercice928 from './../../contenu/terminale-techno/maths/suites-arithmetiques-geometriques/exercice.json';
import fiche929 from './../../contenu/terminale-techno/maths/fonction-inverse/fiche.md';
import exercice929 from './../../contenu/terminale-techno/maths/fonction-inverse/exercice.json';
import fiche930 from './../../contenu/terminale-techno/maths/fonctions-exponentielles/fiche.md';
import exercice930 from './../../contenu/terminale-techno/maths/fonctions-exponentielles/exercice.json';
import fiche931 from './../../contenu/terminale-techno/maths/logarithme-decimal/fiche.md';
import exercice931 from './../../contenu/terminale-techno/maths/logarithme-decimal/exercice.json';
import fiche932 from './../../contenu/terminale-techno/maths/statistiques-deux-variables/fiche.md';
import exercice932 from './../../contenu/terminale-techno/maths/statistiques-deux-variables/exercice.json';
import fiche933 from './../../contenu/terminale-techno/maths/probabilites-conditionnelles/fiche.md';
import exercice933 from './../../contenu/terminale-techno/maths/probabilites-conditionnelles/exercice.json';
import fiche934 from './../../contenu/terminale-techno/maths/variables-aleatoires-binomiale/fiche.md';
import exercice934 from './../../contenu/terminale-techno/maths/variables-aleatoires-binomiale/exercice.json';
import fiche935 from './../../contenu/terminale-techno/maths/algorithmique-programmation/fiche.md';
import exercice935 from './../../contenu/terminale-techno/maths/algorithmique-programmation/exercice.json';
import fiche936 from './../../contenu/terminale-techno/maths/activites-geometriques-std2a/fiche.md';
import exercice936 from './../../contenu/terminale-techno/maths/activites-geometriques-std2a/exercice.json';
import fiche937 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/mesure-incertitudes/fiche.md';
import exercice937 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/mesure-incertitudes/exercice.json';
import fiche938 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/exponentielle-logarithme/fiche.md';
import exercice938 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/exponentielle-logarithme/exercice.json';
import fiche939 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/matiere-materiaux/fiche.md';
import exercice939 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/matiere-materiaux/exercice.json';
import fiche940 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/integration-composition/fiche.md';
import exercice940 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/integration-composition/exercice.json';
import fiche941 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/equations-differentielles/fiche.md';
import exercice941 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/equations-differentielles/exercice.json';
import fiche942 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/energie-mecanique-fluides/fiche.md';
import exercice942 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/energie-mecanique-fluides/exercice.json';
import fiche943 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/energie-electrique-thermique/fiche.md';
import exercice943 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/energie-electrique-thermique/exercice.json';
import fiche944 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/complexes-exponentielle/fiche.md';
import exercice944 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/complexes-exponentielle/exercice.json';
import fiche945 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/ondes-signaux/fiche.md';
import exercice945 from './../../contenu/terminale-techno/pc-maths-sti2d-stl/ondes-signaux/exercice.json';
import fiche946 from './../../contenu/terminale-techno/pc-sante-st2s/molecules-organiques/fiche.md';
import exercice946 from './../../contenu/terminale-techno/pc-sante-st2s/molecules-organiques/exercice.json';
import fiche947 from './../../contenu/terminale-techno/pc-sante-st2s/biomolecules-eau/fiche.md';
import exercice947 from './../../contenu/terminale-techno/pc-sante-st2s/biomolecules-eau/exercice.json';
import fiche948 from './../../contenu/terminale-techno/pc-sante-st2s/glucides-ressources-naturelles/fiche.md';
import exercice948 from './../../contenu/terminale-techno/pc-sante-st2s/glucides-ressources-naturelles/exercice.json';
import fiche949 from './../../contenu/terminale-techno/pc-sante-st2s/besoins-energetiques-alimentation/fiche.md';
import exercice949 from './../../contenu/terminale-techno/pc-sante-st2s/besoins-energetiques-alimentation/exercice.json';
import fiche950 from './../../contenu/terminale-techno/pc-sante-st2s/fluides-pression-sanguine/fiche.md';
import exercice950 from './../../contenu/terminale-techno/pc-sante-st2s/fluides-pression-sanguine/exercice.json';
import fiche951 from './../../contenu/terminale-techno/spcl-stl/composition-systemes-chimiques/fiche.md';
import exercice951 from './../../contenu/terminale-techno/spcl-stl/composition-systemes-chimiques/exercice.json';
import fiche952 from './../../contenu/terminale-techno/spcl-stl/syntheses-mecanismes/fiche.md';
import exercice952 from './../../contenu/terminale-techno/spcl-stl/syntheses-mecanismes/exercice.json';
import fiche953 from './../../contenu/terminale-techno/spcl-stl/ondes-mecaniques-em-spectres/fiche.md';
import exercice953 from './../../contenu/terminale-techno/spcl-stl/ondes-mecaniques-em-spectres/exercice.json';
import fiche954 from './../../contenu/terminale-techno/spcl-stl/ondes-transmission-stockage/fiche.md';
import exercice954 from './../../contenu/terminale-techno/spcl-stl/ondes-transmission-stockage/exercice.json';
import fiche955 from './../../contenu/terminale-techno/spcl-stl/systemes-procedes-flux/fiche.md';
import exercice955 from './../../contenu/terminale-techno/spcl-stl/systemes-procedes-flux/exercice.json';

const FICHES = {
  "cp-allemand-begrussungen": fiche0,
  "cp-allemand-zahlen": fiche1,
  "cp-allemand-farben": fiche2,
  "cp-allemand-tiere": fiche3,
  "cp-anglais-greetings": fiche4,
  "cp-anglais-numbers": fiche5,
  "cp-anglais-colours": fiche6,
  "cp-anglais-animals": fiche7,
  "cp-espagnol-saludos": fiche8,
  "cp-espagnol-numeros": fiche9,
  "cp-espagnol-colores": fiche10,
  "cp-espagnol-animales": fiche11,
  "cp-francais-sons-voyelles": fiche12,
  "cp-francais-syllabes": fiche13,
  "cp-francais-sons-complexes": fiche14,
  "cp-francais-nom-determinant": fiche15,
  "cp-francais-la-phrase": fiche16,
  "cp-hist-geo-vivre-ensemble": fiche17,
  "cp-hist-geo-le-temps-qui-passe": fiche18,
  "cp-hist-geo-se-reperer-espace": fiche19,
  "cp-hist-geo-ecole-autrefois": fiche20,
  "cp-italien-saluti": fiche21,
  "cp-italien-numeri": fiche22,
  "cp-italien-colori": fiche23,
  "cp-italien-animali": fiche24,
  "cp-math-nombres-jusqu-a-20": fiche25,
  "cp-math-comparer-ranger": fiche26,
  "cp-math-addition": fiche27,
  "cp-math-se-reperer-et-quadrillage": fiche28,
  "cp-math-dizaines-et-unites": fiche29,
  "cp-math-soustraction": fiche30,
  "cp-math-formes-geometriques": fiche31,
  "cp-math-calcul-mental": fiche32,
  "cp-math-longueurs-et-masses": fiche33,
  "cp-math-le-temps-qui-passe": fiche34,
  "cp-math-problemes": fiche35,
  "cp-sciences-le-corps-et-les-cinq-sens": fiche36,
  "cp-sciences-le-vivant-animaux-et-vegetaux": fiche37,
  "cp-sciences-les-objets-du-quotidien": fiche38,
  "cp-sciences-solides-et-liquides": fiche39,
  "cp-sciences-le-temps-et-les-saisons": fiche40,
  "ce1-allemand-wochentage": fiche41,
  "ce1-allemand-familie": fiche42,
  "ce1-allemand-koerper": fiche43,
  "ce1-allemand-essen": fiche44,
  "ce1-anglais-days": fiche45,
  "ce1-anglais-family": fiche46,
  "ce1-anglais-body": fiche47,
  "ce1-anglais-food": fiche48,
  "ce1-espagnol-dias": fiche49,
  "ce1-espagnol-familia": fiche50,
  "ce1-espagnol-cuerpo": fiche51,
  "ce1-espagnol-comida": fiche52,
  "ce1-francais-types-de-phrases": fiche53,
  "ce1-francais-noms-propres-communs": fiche54,
  "ce1-francais-singulier-pluriel": fiche55,
  "ce1-francais-le-verbe": fiche56,
  "ce1-francais-present-etre-avoir": fiche57,
  "ce1-hist-geo-regles-et-droits": fiche58,
  "ce1-hist-geo-calendrier-frise": fiche59,
  "ce1-hist-geo-plans-et-cartes": fiche60,
  "ce1-hist-geo-la-france-paysages": fiche61,
  "ce1-italien-giorni": fiche62,
  "ce1-italien-famiglia": fiche63,
  "ce1-italien-corpo": fiche64,
  "ce1-italien-cibo": fiche65,
  "ce1-math-nombres-jusqu-a-1000": fiche66,
  "ce1-math-addition-posee": fiche67,
  "ce1-math-calcul-mental": fiche68,
  "ce1-math-soustraction-posee": fiche69,
  "ce1-math-figures-planes": fiche70,
  "ce1-math-moities-et-doubles": fiche71,
  "ce1-math-tables-de-multiplication": fiche72,
  "ce1-math-symetrie-et-quadrillage": fiche73,
  "ce1-math-solides": fiche74,
  "ce1-math-mesures-et-monnaie": fiche75,
  "ce1-math-problemes": fiche76,
  "ce1-sciences-se-reperer-dans-le-temps": fiche77,
  "ce1-sciences-les-etats-de-leau": fiche78,
  "ce1-sciences-cycles-de-vie-des-etres-vivants": fiche79,
  "ce1-sciences-alimentation-et-hygiene": fiche80,
  "ce1-sciences-materiaux-et-objets-techniques": fiche81,
  "ce2-allemand-zahlen-alter": fiche82,
  "ce2-allemand-gefuehle": fiche83,
  "ce2-allemand-kleidung": fiche84,
  "ce2-allemand-wetter-jahreszeiten": fiche85,
  "ce2-anglais-numbers-age": fiche86,
  "ce2-anglais-feelings": fiche87,
  "ce2-anglais-clothes": fiche88,
  "ce2-anglais-weather-seasons": fiche89,
  "ce2-espagnol-numeros-edad": fiche90,
  "ce2-espagnol-sentimientos": fiche91,
  "ce2-espagnol-ropa": fiche92,
  "ce2-espagnol-tiempo-estaciones": fiche93,
  "ce2-francais-classes-de-mots": fiche94,
  "ce2-francais-passe-present-futur": fiche95,
  "ce2-francais-present-premier-groupe": fiche96,
  "ce2-francais-accord-sujet-verbe": fiche97,
  "ce2-francais-homophones-a-et": fiche98,
  "ce2-hist-geo-prehistoire": fiche99,
  "ce2-hist-geo-gaulois-romains": fiche100,
  "ce2-hist-geo-terre-continents-oceans": fiche101,
  "ce2-hist-geo-symboles-republique": fiche102,
  "ce2-italien-numeri-eta": fiche103,
  "ce2-italien-sentimenti": fiche104,
  "ce2-italien-vestiti": fiche105,
  "ce2-italien-tempo-stagioni": fiche106,
  "ce2-math-nombres-jusqu-a-10000": fiche107,
  "ce2-math-calcul-mental": fiche108,
  "ce2-math-multiplication-posee": fiche109,
  "ce2-math-angles-et-polygones": fiche110,
  "ce2-math-sens-de-la-division": fiche111,
  "ce2-math-perimetre-et-mesures": fiche112,
  "ce2-math-symetrie-axiale": fiche113,
  "ce2-math-fractions-simples": fiche114,
  "ce2-math-solides-et-patrons": fiche115,
  "ce2-math-tableaux-et-graphiques": fiche116,
  "ce2-math-problemes": fiche117,
  "ce2-sciences-classer-les-animaux": fiche118,
  "ce2-sciences-plantes-et-milieux-de-vie": fiche119,
  "ce2-sciences-melanges-et-solutions": fiche120,
  "ce2-sciences-circuits-electriques-simples": fiche121,
  "ce2-sciences-la-terre-le-soleil-la-lune": fiche122,
  "cm1-allemand-laender-nationalitaeten": fiche123,
  "cm1-allemand-haus": fiche124,
  "cm1-allemand-uhrzeit-tagesablauf": fiche125,
  "cm1-allemand-sport-hobbys": fiche126,
  "cm1-anglais-countries-nationalities": fiche127,
  "cm1-anglais-house-rooms": fiche128,
  "cm1-anglais-time-routine": fiche129,
  "cm1-anglais-sports-hobbies": fiche130,
  "cm1-espagnol-paises-nacionalidades": fiche131,
  "cm1-espagnol-casa": fiche132,
  "cm1-espagnol-hora-rutina": fiche133,
  "cm1-espagnol-deportes-ocio": fiche134,
  "cm1-francais-accords-groupe-nominal": fiche135,
  "cm1-francais-complement-objet": fiche136,
  "cm1-francais-futur-simple": fiche137,
  "cm1-francais-imparfait": fiche138,
  "cm1-francais-passe-compose": fiche139,
  "cm1-hist-geo-moyen-age": fiche140,
  "cm1-hist-geo-temps-modernes": fiche141,
  "cm1-hist-geo-habiter-ville-campagne": fiche142,
  "cm1-hist-geo-egalite-discriminations": fiche143,
  "cm1-italien-paesi-nazionalita": fiche144,
  "cm1-italien-casa": fiche145,
  "cm1-italien-ora-routine": fiche146,
  "cm1-italien-sport-tempo-libero": fiche147,
  "cm1-math-grands-nombres": fiche148,
  "cm1-math-multiplication-posee": fiche149,
  "cm1-math-division-euclidienne": fiche150,
  "cm1-math-angles": fiche151,
  "cm1-math-fractions": fiche152,
  "cm1-math-nombres-decimaux": fiche153,
  "cm1-math-operations-decimaux": fiche154,
  "cm1-math-symetrie-axiale": fiche155,
  "cm1-math-durees": fiche156,
  "cm1-math-cercle-triangles-perimetre-aire": fiche157,
  "cm1-math-proportionnalite": fiche158,
  "cm1-math-tableaux-et-graphiques": fiche159,
  "cm1-sciences-la-matiere-et-ses-transformations": fiche160,
  "cm1-sciences-les-fonctions-du-vivant-la-nutrition": fiche161,
  "cm1-sciences-chaines-alimentaires-et-ecosystemes": fiche162,
  "cm1-sciences-energie-et-circuits-electriques": fiche163,
  "cm1-sciences-le-systeme-solaire": fiche164,
  "cm2-allemand-personen-beschreiben": fiche165,
  "cm2-allemand-alltag-praesens": fiche166,
  "cm2-allemand-essen-mahlzeiten": fiche167,
  "cm2-allemand-stadt-wegbeschreibung": fiche168,
  "cm2-anglais-describing-people": fiche169,
  "cm2-anglais-daily-habits": fiche170,
  "cm2-anglais-food-meals": fiche171,
  "cm2-anglais-town-directions": fiche172,
  "cm2-espagnol-describir-personas": fiche173,
  "cm2-espagnol-presente-rutinas": fiche174,
  "cm2-espagnol-comida-comidas": fiche175,
  "cm2-espagnol-ciudad-direcciones": fiche176,
  "cm2-francais-sens-des-mots": fiche177,
  "cm2-francais-complements-circonstanciels": fiche178,
  "cm2-francais-homophones-ces-ses": fiche179,
  "cm2-francais-accord-participe-passe": fiche180,
  "cm2-francais-plus-que-parfait": fiche181,
  "cm2-hist-geo-revolution-empire": fiche182,
  "cm2-hist-geo-republique-democratie": fiche183,
  "cm2-hist-geo-se-deplacer-communiquer": fiche184,
  "cm2-hist-geo-citoyennete-engagement": fiche185,
  "cm2-italien-descrivere-persone": fiche186,
  "cm2-italien-presente-routine": fiche187,
  "cm2-italien-cibo-pasti": fiche188,
  "cm2-italien-citta-indicazioni": fiche189,
  "cm2-math-grands-nombres": fiche190,
  "cm2-math-calcul-mental": fiche191,
  "cm2-math-fractions-et-operations": fiche192,
  "cm2-math-operations-sur-les-decimaux": fiche193,
  "cm2-math-division-posee": fiche194,
  "cm2-math-angles-et-mesures": fiche195,
  "cm2-math-symetrie-axiale": fiche196,
  "cm2-math-proportionnalite-et-pourcentages": fiche197,
  "cm2-math-aires-perimetres-volumes": fiche198,
  "cm2-math-solides-et-patrons": fiche199,
  "cm2-math-graphiques-et-donnees": fiche200,
  "cm2-math-problemes": fiche201,
  "cm2-sciences-corps-humain-digestion-et-respiration": fiche202,
  "cm2-sciences-reproduction-des-etres-vivants": fiche203,
  "cm2-sciences-mouvements-et-forces": fiche204,
  "cm2-sciences-objets-programmes-et-informatique": fiche205,
  "cm2-sciences-environnement-et-developpement-durable": fiche206,
  "6e-allemand-phonetik-laute": fiche207,
  "6e-allemand-personalpronomen": fiche208,
  "6e-allemand-sein-haben": fiche209,
  "6e-allemand-artikel-genus": fiche210,
  "6e-allemand-wortschatz-schule": fiche211,
  "6e-allemand-praesens-regelmaessig": fiche212,
  "6e-allemand-satzstellung": fiche213,
  "6e-allemand-fragesaetze": fiche214,
  "6e-allemand-wortschatz-essen": fiche215,
  "6e-allemand-landeskunde-deutschland": fiche216,
  "6e-anglais-phonetique-sons": fiche217,
  "6e-anglais-se-presenter": fiche218,
  "6e-anglais-articles-pluriels": fiche219,
  "6e-anglais-vocabulaire-ecole": fiche220,
  "6e-anglais-have-got": fiche221,
  "6e-anglais-there-is-there-are": fiche222,
  "6e-anglais-present-simple": fiche223,
  "6e-anglais-questions-auxiliaires": fiche224,
  "6e-anglais-vocabulaire-nourriture-repas": fiche225,
  "6e-anglais-civilisation-royaume-uni": fiche226,
  "6e-arts-langage-plastique": fiche227,
  "6e-arts-prehistoire-antiquite": fiche228,
  "6e-espagnol-fonetica-sonidos": fiche229,
  "6e-espagnol-pronombres-personales": fiche230,
  "6e-espagnol-ser-estar": fiche231,
  "6e-espagnol-articulos-genero": fiche232,
  "6e-espagnol-plural": fiche233,
  "6e-espagnol-articulos-contractos": fiche234,
  "6e-espagnol-vocabulario-escuela": fiche235,
  "6e-espagnol-presente-regular": fiche236,
  "6e-espagnol-vocabulario-comida": fiche237,
  "6e-espagnol-civilizacion-espana": fiche238,
  "6e-francais-classes-grammaticales": fiche239,
  "6e-francais-phrase-simple": fiche240,
  "6e-francais-present-indicatif": fiche241,
  "6e-francais-homophones-grammaticaux": fiche242,
  "6e-francais-imparfait-passe-simple": fiche243,
  "6e-francais-passe-compose-accord": fiche244,
  "6e-francais-recit-conte-fable": fiche245,
  "6e-hist-geo-premiers-etats-ecritures": fiche246,
  "6e-hist-geo-monde-grec": fiche247,
  "6e-hist-geo-rome-republique-empire": fiche248,
  "6e-hist-geo-judaisme-christianisme": fiche249,
  "6e-hist-geo-habiter-metropole": fiche250,
  "6e-hist-geo-habiter-espaces-contraintes": fiche251,
  "6e-hist-geo-emc-college-droits": fiche252,
  "6e-italien-fonetica-suoni": fiche253,
  "6e-italien-pronomi-personali": fiche254,
  "6e-italien-essere-avere": fiche255,
  "6e-italien-articoli-genere": fiche256,
  "6e-italien-plurale": fiche257,
  "6e-italien-preposizioni-articolate": fiche258,
  "6e-italien-vocabolario-scuola": fiche259,
  "6e-italien-presente-regolare": fiche260,
  "6e-italien-vocabolario-cibo": fiche261,
  "6e-italien-civilta-italia": fiche262,
  "6e-math-nombres-entiers-decimaux": fiche263,
  "6e-math-configurations-planes": fiche264,
  "6e-math-fractions": fiche265,
  "6e-math-longueurs-aires-volumes": fiche266,
  "6e-math-durees": fiche267,
  "6e-math-proportionnalite": fiche268,
  "6e-math-initiation-algebre": fiche269,
  "6e-math-gestion-donnees": fiche270,
  "6e-math-probabilites": fiche271,
  "6e-math-pensee-informatique": fiche272,
  "6e-svt-caracteristiques-du-vivant": fiche273,
  "6e-svt-classification-des-etres-vivants": fiche274,
  "6e-svt-besoins-des-vegetaux": fiche275,
  "6e-svt-origine-de-la-matiere-organique": fiche276,
  "6e-svt-peuplement-des-milieux": fiche277,
  "6e-techno-objets-techniques-et-besoins": fiche278,
  "6e-techno-fonctionnement-dun-objet": fiche279,
  "6e-techno-materiaux-et-familles": fiche280,
  "6e-techno-representation-dun-objet": fiche281,
  "6e-techno-initiation-programmation": fiche282,
  "5e-allemand-negation": fiche283,
  "5e-allemand-akkusativ": fiche284,
  "5e-allemand-possessivartikel": fiche285,
  "5e-allemand-wortschatz-stadt-reisen": fiche286,
  "5e-allemand-trennbare-verben": fiche287,
  "5e-allemand-modalverben": fiche288,
  "5e-allemand-wortschatz-natur-tiere": fiche289,
  "5e-allemand-praeteritum-sein-haben": fiche290,
  "5e-allemand-landeskunde-oesterreich-schweiz": fiche291,
  "5e-anglais-present-continu": fiche292,
  "5e-anglais-prepositions": fiche293,
  "5e-anglais-vocabulaire-ville-voyages": fiche294,
  "5e-anglais-preterit-simple": fiche295,
  "5e-anglais-comparatifs-superlatifs": fiche296,
  "5e-anglais-vocabulaire-nature-animaux": fiche297,
  "5e-anglais-modaux-can-must": fiche298,
  "5e-anglais-futur-will-going-to": fiche299,
  "5e-anglais-civilisation-etats-unis": fiche300,
  "5e-arts-la-couleur": fiche301,
  "5e-arts-moyen-age": fiche302,
  "5e-espagnol-interrogacion-negacion": fiche303,
  "5e-espagnol-ser-estar-usos": fiche304,
  "5e-espagnol-hay-estar": fiche305,
  "5e-espagnol-posesivos": fiche306,
  "5e-espagnol-vocabulario-ciudad-viajes": fiche307,
  "5e-espagnol-presente-irregular": fiche308,
  "5e-espagnol-gustar": fiche309,
  "5e-espagnol-vocabulario-naturaleza-animales": fiche310,
  "5e-espagnol-civilizacion-mexico-latinoamerica": fiche311,
  "5e-francais-expansions-du-nom": fiche312,
  "5e-francais-propositions": fiche313,
  "5e-francais-temps-composes": fiche314,
  "5e-francais-futur-conditionnel": fiche315,
  "5e-francais-champ-lexical-connotation": fiche316,
  "5e-francais-discours-direct-indirect": fiche317,
  "5e-francais-texte-de-theatre": fiche318,
  "5e-hist-geo-islam-debuts-expansion": fiche319,
  "5e-hist-geo-occident-feodal": fiche320,
  "5e-hist-geo-roi-et-ville-moyen-age": fiche321,
  "5e-hist-geo-renaissance-humanisme-reformes": fiche322,
  "5e-hist-geo-demographie-developpement": fiche323,
  "5e-hist-geo-ressources-eau-alimentation-energie": fiche324,
  "5e-hist-geo-emc-egalite-developpement-durable": fiche325,
  "5e-italien-interrogazione-negazione": fiche326,
  "5e-italien-essere-esserci": fiche327,
  "5e-italien-ce-ci-sono": fiche328,
  "5e-italien-possessivi": fiche329,
  "5e-italien-vocabolario-citta-viaggi": fiche330,
  "5e-italien-presente-irregolare": fiche331,
  "5e-italien-piacere": fiche332,
  "5e-italien-vocabolario-natura-animali": fiche333,
  "5e-italien-civilta-regioni-citta": fiche334,
  "5e-lca-latin-decouverte": fiche335,
  "5e-lca-latin-present": fiche336,
  "5e-math-operations": fiche337,
  "5e-math-fractions": fiche338,
  "5e-math-nombres-relatifs": fiche339,
  "5e-math-reperage": fiche340,
  "5e-math-calcul-litteral": fiche341,
  "5e-math-puissances": fiche342,
  "5e-math-proportionnalite": fiche343,
  "5e-math-triangles-angles": fiche344,
  "5e-math-parallelogrammes": fiche345,
  "5e-math-transformations": fiche346,
  "5e-math-representation-espace": fiche347,
  "5e-math-fonctions": fiche348,
  "5e-math-statistiques": fiche349,
  "5e-math-probabilites": fiche350,
  "5e-math-pensee-informatique": fiche351,
  "5e-pc-proprietes-matiere": fiche352,
  "5e-pc-corps-purs-melanges": fiche353,
  "5e-pc-transformation-chimique": fiche354,
  "5e-pc-mouvement-vitesse": fiche355,
  "5e-pc-energie-electricite": fiche356,
  "5e-pc-signaux-sonores-lumineux": fiche357,
  "5e-svt-respiration-et-milieux-de-vie": fiche358,
  "5e-svt-nutrition-et-systeme-digestif": fiche359,
  "5e-svt-circulation-et-sang": fiche360,
  "5e-svt-reproduction-et-puberte": fiche361,
  "5e-svt-roches-erosion-et-paysages": fiche362,
  "5e-techno-besoin-et-cahier-des-charges": fiche363,
  "5e-techno-proprietes-des-materiaux": fiche364,
  "5e-techno-structures-et-stabilite": fiche365,
  "5e-techno-chaine-denergie": fiche366,
  "5e-techno-programmation-et-capteurs": fiche367,
  "4e-allemand-dativ": fiche368,
  "4e-allemand-pronomen-akkusativ-dativ": fiche369,
  "4e-allemand-wechselpraepositionen": fiche370,
  "4e-allemand-wortschatz-sport-freizeit": fiche371,
  "4e-allemand-perfekt": fiche372,
  "4e-allemand-imperativ": fiche373,
  "4e-allemand-wortschatz-gesundheit-koerper": fiche374,
  "4e-allemand-komparativ-superlativ": fiche375,
  "4e-allemand-landeskunde-staedte": fiche376,
  "4e-allemand-landeskunde-feste-traditionen": fiche377,
  "4e-anglais-word-order": fiche378,
  "4e-anglais-quantifieurs": fiche379,
  "4e-anglais-vocabulaire-sport-loisirs": fiche380,
  "4e-anglais-present-perfect": fiche381,
  "4e-anglais-preterit-vs-present-perfect": fiche382,
  "4e-anglais-vocabulaire-sante-corps": fiche383,
  "4e-anglais-propositions-relatives": fiche384,
  "4e-anglais-discours-indirect": fiche385,
  "4e-anglais-civilisation-londres": fiche386,
  "4e-anglais-civilisation-australie": fiche387,
  "4e-arts-langage-musical": fiche388,
  "4e-arts-renaissance": fiche389,
  "4e-espagnol-muy-mucho": fiche390,
  "4e-espagnol-comparativos-superlativos": fiche391,
  "4e-espagnol-estar-gerundio": fiche392,
  "4e-espagnol-vocabulario-deporte-ocio": fiche393,
  "4e-espagnol-preterito-perfecto": fiche394,
  "4e-espagnol-preterito-indefinido": fiche395,
  "4e-espagnol-vocabulario-salud-cuerpo": fiche396,
  "4e-espagnol-futuro": fiche397,
  "4e-espagnol-civilizacion-ciudades": fiche398,
  "4e-espagnol-civilizacion-argentina": fiche399,
  "4e-francais-propositions-subordonnees": fiche400,
  "4e-francais-voix-active-passive": fiche401,
  "4e-francais-valeurs-des-temps": fiche402,
  "4e-francais-present-subjonctif": fiche403,
  "4e-francais-figures-de-style": fiche404,
  "4e-francais-recit-realiste-fantastique": fiche405,
  "4e-francais-la-lettre": fiche406,
  "4e-hist-geo-commerce-traite-lumieres": fiche407,
  "4e-hist-geo-revolution-francaise-empire": fiche408,
  "4e-hist-geo-revolution-industrielle": fiche409,
  "4e-hist-geo-conquetes-colonisation": fiche410,
  "4e-hist-geo-urbanisation-du-monde": fiche411,
  "4e-hist-geo-mobilites-humaines": fiche412,
  "4e-hist-geo-emc-libertes-et-loi": fiche413,
  "4e-italien-molto-troppo": fiche414,
  "4e-italien-comparativi-superlativi": fiche415,
  "4e-italien-stare-gerundio": fiche416,
  "4e-italien-vocabolario-sport-tempo-libero": fiche417,
  "4e-italien-passato-prossimo": fiche418,
  "4e-italien-imperfetto": fiche419,
  "4e-italien-vocabolario-salute-corpo": fiche420,
  "4e-italien-futuro": fiche421,
  "4e-italien-civilta-firenze-venezia": fiche422,
  "4e-italien-civilta-cucina-tradizioni": fiche423,
  "4e-lca-latin-declinaisons": fiche424,
  "4e-lca-latin-temps-passe": fiche425,
  "4e-math-operations-nombres-relatifs": fiche426,
  "4e-math-nombres-rationnels": fiche427,
  "4e-math-puissances": fiche428,
  "4e-math-calcul-litteral": fiche429,
  "4e-math-reperage": fiche430,
  "4e-math-proportionnalite": fiche431,
  "4e-math-racine-carree": fiche432,
  "4e-math-triangles": fiche433,
  "4e-math-parallelogrammes-translations": fiche434,
  "4e-math-transformations": fiche435,
  "4e-math-representation-espace": fiche436,
  "4e-math-fonctions": fiche437,
  "4e-math-statistiques": fiche438,
  "4e-math-probabilites": fiche439,
  "4e-math-pensee-informatique": fiche440,
  "4e-pc-organisation-matiere": fiche441,
  "4e-pc-transformation-conservation-masse": fiche442,
  "4e-pc-mouvement-vitesse": fiche443,
  "4e-pc-interactions-forces": fiche444,
  "4e-pc-puissance-energie": fiche445,
  "4e-pc-propagation-signal": fiche446,
  "4e-svt-seismes-et-volcans": fiche447,
  "4e-svt-tectonique-des-plaques": fiche448,
  "4e-svt-energie-dans-lorganisme": fiche449,
  "4e-svt-systeme-nerveux-et-comportement": fiche450,
  "4e-svt-reproduction-et-transmission-de-la-vie": fiche451,
  "4e-techno-chaine-dinformation": fiche452,
  "4e-techno-modelisation-volumique": fiche453,
  "4e-techno-reseaux-informatiques": fiche454,
  "4e-techno-programmation-evenementielle": fiche455,
  "4e-techno-confort-et-domotique": fiche456,
  "3e-allemand-phonetik-betonung-umlaute": fiche457,
  "3e-allemand-praepositionen-zeit": fiche458,
  "3e-allemand-wechselpraepositionen-vertiefung": fiche459,
  "3e-allemand-praeteritum": fiche460,
  "3e-allemand-wortschatz-technik-internet": fiche461,
  "3e-allemand-nebensaetze-weil-dass": fiche462,
  "3e-allemand-wortstellung-nebensatz": fiche463,
  "3e-allemand-futur": fiche464,
  "3e-allemand-wortschatz-umwelt": fiche465,
  "3e-allemand-landeskunde-persoenlichkeiten": fiche466,
  "3e-allemand-landeskunde-deutschsprachige-welt": fiche467,
  "3e-anglais-phonetique-accentuation": fiche468,
  "3e-anglais-present-perfect-since-for": fiche469,
  "3e-anglais-preterit-continu": fiche470,
  "3e-anglais-question-tags": fiche471,
  "3e-anglais-vocabulaire-technologie": fiche472,
  "3e-anglais-modaux-deduction-conseil": fiche473,
  "3e-anglais-voix-passive": fiche474,
  "3e-anglais-conditionnel-if": fiche475,
  "3e-anglais-vocabulaire-environnement": fiche476,
  "3e-anglais-civilisation-canada": fiche477,
  "3e-anglais-civilisation-monde-anglophone": fiche478,
  "3e-arts-art-moderne": fiche479,
  "3e-arts-art-contemporain": fiche480,
  "3e-espagnol-fonetica-acentuacion": fiche481,
  "3e-espagnol-preposiciones": fiche482,
  "3e-espagnol-indefinido-irregular": fiche483,
  "3e-espagnol-imperfecto-indefinido": fiche484,
  "3e-espagnol-vocabulario-tecnologia": fiche485,
  "3e-espagnol-pronombres-cod-coi": fiche486,
  "3e-espagnol-imperativo": fiche487,
  "3e-espagnol-por-para": fiche488,
  "3e-espagnol-vocabulario-medioambiente": fiche489,
  "3e-espagnol-civilizacion-fiestas-tradiciones": fiche490,
  "3e-espagnol-civilizacion-mundo-hispanohablante": fiche491,
  "3e-francais-phrase-complexe": fiche492,
  "3e-francais-connecteurs-logiques": fiche493,
  "3e-francais-modes-et-valeurs": fiche494,
  "3e-francais-lexique-melioratif-pejoratif": fiche495,
  "3e-francais-autobiographie": fiche496,
  "3e-francais-argumentation": fiche497,
  "3e-francais-poesie-engagee": fiche498,
  "3e-hist-geo-premiere-guerre-mondiale": fiche499,
  "3e-hist-geo-totalitarismes": fiche500,
  "3e-hist-geo-seconde-guerre-mondiale": fiche501,
  "3e-hist-geo-france-depuis-1945-ve-republique": fiche502,
  "3e-hist-geo-aires-urbaines-espaces-productifs": fiche503,
  "3e-hist-geo-france-union-europeenne-monde": fiche504,
  "3e-hist-geo-emc-defense-citoyennete": fiche505,
  "3e-italien-fonetica-accento": fiche506,
  "3e-italien-preposizioni": fiche507,
  "3e-italien-passato-prossimo-ausiliari": fiche508,
  "3e-italien-imperfetto-vs-passato": fiche509,
  "3e-italien-vocabolario-tecnologia": fiche510,
  "3e-italien-pronomi-diretti-indiretti": fiche511,
  "3e-italien-particella-ne-ci": fiche512,
  "3e-italien-imperativo": fiche513,
  "3e-italien-vocabolario-ambiente": fiche514,
  "3e-italien-civilta-feste-tradizioni": fiche515,
  "3e-italien-civilta-mondo-italofono": fiche516,
  "3e-lca-civilisation-romaine": fiche517,
  "3e-lca-latin-propositions": fiche518,
  "3e-lca-grec-decouverte": fiche519,
  "3e-math-multiples-diviseurs": fiche520,
  "3e-math-nombres-rationnels": fiche521,
  "3e-math-puissances": fiche522,
  "3e-math-calcul-litteral": fiche523,
  "3e-math-reperage": fiche524,
  "3e-math-proportionnalite": fiche525,
  "3e-math-fonctions": fiche526,
  "3e-math-racine-carree": fiche527,
  "3e-math-triangles": fiche528,
  "3e-math-translations-vecteurs": fiche529,
  "3e-math-representation-espace": fiche530,
  "3e-math-statistiques": fiche531,
  "3e-math-probabilites": fiche532,
  "3e-math-pensee-informatique": fiche533,
  "3e-pc-masse-volumique": fiche534,
  "3e-pc-atomes-ions-ph": fiche535,
  "3e-pc-transformations-chimiques": fiche536,
  "3e-pc-poids-gravitation-forces": fiche537,
  "3e-pc-conversions-energie-signaux": fiche538,
  "3e-svt-genetique-et-heredite": fiche539,
  "3e-svt-evolution-des-especes": fiche540,
  "3e-svt-immunite-et-defenses": fiche541,
  "3e-svt-hormones-et-reproduction": fiche542,
  "3e-svt-activites-humaines-et-environnement": fiche543,
  "3e-techno-demarche-de-projet": fiche544,
  "3e-techno-evolution-des-objets-techniques": fiche545,
  "3e-techno-internet-et-reseaux": fiche546,
  "3e-techno-objets-connectes": fiche547,
  "3e-techno-programmation-et-robotique": fiche548,
  "2nde-allemand-konnektoren": fiche549,
  "2nde-allemand-adjektivdeklination": fiche550,
  "2nde-allemand-genitiv": fiche551,
  "2nde-allemand-verben-mit-dativ": fiche552,
  "2nde-allemand-wortschatz-medien-technik": fiche553,
  "2nde-allemand-relativsaetze": fiche554,
  "2nde-allemand-konjunktiv-2": fiche555,
  "2nde-allemand-wortschatz-kultur-kunst": fiche556,
  "2nde-allemand-landeskunde-institutionen-deutschland": fiche557,
  "2nde-allemand-landeskunde-musik-kunst": fiche558,
  "2nde-anglais-temps-du-present": fiche559,
  "2nde-anglais-temps-du-passe": fiche560,
  "2nde-anglais-modaux": fiche561,
  "2nde-anglais-phrasal-verbs": fiche562,
  "2nde-anglais-vocabulaire-medias-numerique": fiche563,
  "2nde-anglais-hypotheses-if": fiche564,
  "2nde-anglais-discours-rapporte": fiche565,
  "2nde-anglais-vocabulaire-culture-arts": fiche566,
  "2nde-anglais-civilisation-institutions-uk": fiche567,
  "2nde-anglais-civilisation-irlande": fiche568,
  "2nde-arts-grands-courants": fiche569,
  "2nde-espagnol-tiempos-pasado": fiche570,
  "2nde-espagnol-ser-estar-haber": fiche571,
  "2nde-espagnol-verbos-pronominales": fiche572,
  "2nde-espagnol-vocabulario-medios-tecnologia": fiche573,
  "2nde-espagnol-condicional": fiche574,
  "2nde-espagnol-subjuntivo-presente": fiche575,
  "2nde-espagnol-oraciones-condicionales": fiche576,
  "2nde-espagnol-vocabulario-cultura-arte": fiche577,
  "2nde-espagnol-civilizacion-instituciones-espana": fiche578,
  "2nde-espagnol-civilizacion-arte-pintura": fiche579,
  "2nde-francais-grammaire-seconde": fiche580,
  "2nde-francais-procedes-analyse": fiche581,
  "2nde-francais-genres-et-registres": fiche582,
  "2nde-francais-la-poesie": fiche583,
  "2nde-francais-le-theatre": fiche584,
  "2nde-francais-le-roman": fiche585,
  "2nde-francais-litterature-idees": fiche586,
  "2nde-hist-geo-mediterranee-antique": fiche587,
  "2nde-hist-geo-mediterranee-medievale": fiche588,
  "2nde-hist-geo-humanisme-renaissance": fiche589,
  "2nde-hist-geo-revolutions-angleterre-amerique": fiche590,
  "2nde-hist-geo-environnement-developpement-durable": fiche591,
  "2nde-hist-geo-territoires-villes-mondialisation": fiche592,
  "2nde-hist-geo-emc-la-liberte": fiche593,
  "2nde-italien-tempi-del-passato": fiche594,
  "2nde-italien-essere-stare-esserci": fiche595,
  "2nde-italien-verbi-riflessivi": fiche596,
  "2nde-italien-vocabolario-media-tecnologia": fiche597,
  "2nde-italien-condizionale": fiche598,
  "2nde-italien-congiuntivo-presente": fiche599,
  "2nde-italien-periodo-ipotetico": fiche600,
  "2nde-italien-vocabolario-cultura-arte": fiche601,
  "2nde-italien-civilta-istituzioni-italia": fiche602,
  "2nde-italien-civilta-arte-pittura": fiche603,
  "2nde-lca-latin-syntaxe": fiche604,
  "2nde-lca-grec-morphologie": fiche605,
  "2nde-math-calcul-numerique-algebrique": fiche606,
  "2nde-math-arithmetique": fiche607,
  "2nde-math-equations-inequations": fiche608,
  "2nde-math-notion-de-fonction": fiche609,
  "2nde-math-fonctions-de-reference": fiche610,
  "2nde-math-vecteurs": fiche611,
  "2nde-math-droites-du-plan": fiche612,
  "2nde-math-statistiques": fiche613,
  "2nde-math-probabilites": fiche614,
  "2nde-math-algorithmique": fiche615,
  "2nde-pc-description-matiere": fiche616,
  "2nde-pc-modelisation-microscopique": fiche617,
  "2nde-pc-transformations-matiere": fiche618,
  "2nde-pc-mouvement-interactions": fiche619,
  "2nde-pc-ondes-signaux": fiche620,
  "2nde-ses-production-richesses": fiche621,
  "2nde-ses-mesure-production-pib": fiche622,
  "2nde-ses-consommation-revenu": fiche623,
  "2nde-ses-marche-formation-prix": fiche624,
  "2nde-ses-socialisation-introduction": fiche625,
  "2nde-ses-opinion-publique": fiche626,
  "2nde-snt-internet": fiche627,
  "2nde-snt-le-web": fiche628,
  "2nde-snt-reseaux-sociaux": fiche629,
  "2nde-snt-donnees-structurees": fiche630,
  "2nde-snt-localisation-cartographie-gps": fiche631,
  "2nde-snt-informatique-embarquee-objets-connectes": fiche632,
  "2nde-snt-photographie-numerique": fiche633,
  "2nde-svt-la-cellule-unite-du-vivant": fiche634,
  "2nde-svt-adn-et-information-genetique": fiche635,
  "2nde-svt-metabolisme-des-cellules": fiche636,
  "2nde-svt-biodiversite-et-evolution": fiche637,
  "2nde-svt-la-terre-dans-le-systeme-solaire": fiche638,
  "2nde-svt-corps-humain-et-effort-physique": fiche639,
  "1re-allemand-verben-mit-praepositionen": fiche640,
  "1re-allemand-infinitiv-mit-zu": fiche641,
  "1re-allemand-nebensaetze-obwohl-damit": fiche642,
  "1re-allemand-wortschatz-arbeit-studium": fiche643,
  "1re-allemand-passiv": fiche644,
  "1re-allemand-konjunktiv-2-vertiefung": fiche645,
  "1re-allemand-wortschatz-gesellschaft-engagement": fiche646,
  "1re-allemand-landeskunde-deutsche-geschichte": fiche647,
  "1re-allemand-landeskunde-literatur": fiche648,
  "1re-anglais-aspects-simple-continu": fiche649,
  "1re-anglais-gerondif-infinitif": fiche650,
  "1re-anglais-relatives-determinatives-explicatives": fiche651,
  "1re-anglais-vocabulaire-travail-etudes": fiche652,
  "1re-anglais-voix-passive-emplois": fiche653,
  "1re-anglais-futur-et-hypotheses": fiche654,
  "1re-anglais-vocabulaire-societe-engagement": fiche655,
  "1re-anglais-civilisation-histoire-usa": fiche656,
  "1re-anglais-civilisation-litterature": fiche657,
  "1re-arts-architecture": fiche658,
  "1re-arts-histoire-musique": fiche659,
  "1esc-une-longue-histoire-de-la-matiere": fiche660,
  "1esc-le-soleil-notre-source-denergie": fiche661,
  "1esc-la-terre-un-astre-singulier": fiche662,
  "1esc-la-biodiversite-et-son-evolution": fiche663,
  "1esc-son-et-musique": fiche664,
  "1re-espagnol-subjuntivo-usos": fiche665,
  "1re-espagnol-relativos": fiche666,
  "1re-espagnol-perifrasis": fiche667,
  "1re-espagnol-vocabulario-trabajo-estudios": fiche668,
  "1re-espagnol-voz-pasiva": fiche669,
  "1re-espagnol-estilo-indirecto": fiche670,
  "1re-espagnol-vocabulario-sociedad-ciudadania": fiche671,
  "1re-espagnol-civilizacion-historia-latinoamerica": fiche672,
  "1re-espagnol-civilizacion-literatura": fiche673,
  "1re-francais-grammaire-premiere": fiche674,
  "1re-francais-commentaire-litteraire": fiche675,
  "1re-francais-roman-et-recit": fiche676,
  "1re-francais-poesie-19-21": fiche677,
  "1re-francais-contraction-essai": fiche678,
  "1re-francais-litterature-idees-16-18": fiche679,
  "1re-francais-dissertation": fiche680,
  "1re-francais-theatre-17-21": fiche681,
  "1re-francais-epreuve-orale": fiche682,
  "1re-hggsp-democratie": fiche683,
  "1re-hggsp-puissances-internationales": fiche684,
  "1re-hggsp-frontieres": fiche685,
  "1re-hggsp-s-informer": fiche686,
  "1re-hggsp-etats-et-religions": fiche687,
  "1re-hist-geo-revolution-francaise-empire": fiche688,
  "1re-hist-geo-nations-nationalites-europe": fiche689,
  "1re-hist-geo-industrialisation-19e": fiche690,
  "1re-hist-geo-premiere-guerre-et-consequences": fiche691,
  "1re-hist-geo-metropolisation-france": fiche692,
  "1re-hist-geo-espaces-productifs-et-ruraux": fiche693,
  "1re-hist-geo-emc-republique-laicite": fiche694,
  "1re-italien-congiuntivo-usi": fiche695,
  "1re-italien-pronomi-relativi": fiche696,
  "1re-italien-perifrasi": fiche697,
  "1re-italien-vocabolario-lavoro-studi": fiche698,
  "1re-italien-forma-passiva": fiche699,
  "1re-italien-discorso-indiretto": fiche700,
  "1re-italien-vocabolario-societa-cittadinanza": fiche701,
  "1re-italien-civilta-rinascimento": fiche702,
  "1re-italien-civilta-letteratura": fiche703,
  "1re-lca-mythologie": fiche704,
  "1re-lca-latin-auteurs": fiche705,
  "1es-math-information-chiffree": fiche706,
  "1es-math-phenomenes-evolution": fiche707,
  "1es-math-statistiques-bivariees": fiche708,
  "1es-math-phenomenes-aleatoires": fiche709,
  "1spe-math-second-degre": fiche710,
  "1spe-math-suites-numeriques": fiche711,
  "1spe-math-derivation": fiche712,
  "1spe-math-variations-courbes": fiche713,
  "1spe-math-fonction-exponentielle": fiche714,
  "1spe-math-trigonometrie": fiche715,
  "1spe-math-produit-scalaire": fiche716,
  "1spe-math-geometrie-reperee": fiche717,
  "1spe-math-probabilites-conditionnelles": fiche718,
  "1spe-math-variables-aleatoires": fiche719,
  "1nsi-representation-des-donnees": fiche720,
  "1nsi-types-construits": fiche721,
  "1nsi-traitement-de-donnees-en-tables": fiche722,
  "1nsi-interactions-web-client-serveur": fiche723,
  "1nsi-architecture-et-systeme": fiche724,
  "1nsi-algorithmique-tris-et-recherche": fiche725,
  "1spe-pc-transformations-matiere": fiche726,
  "1spe-pc-chimie-organique": fiche727,
  "1spe-pc-mouvement-interactions": fiche728,
  "1spe-pc-energie-mecanique": fiche729,
  "1spe-pc-energie-electrique": fiche730,
  "1spe-pc-ondes-signaux": fiche731,
  "1re-ses-marche-concurrentiel": fiche732,
  "1re-ses-marches-imparfaits": fiche733,
  "1re-ses-defaillances-de-marche": fiche734,
  "1re-ses-monnaie-et-financement": fiche735,
  "1re-ses-socialisation-primaire-secondaire": fiche736,
  "1re-ses-liens-sociaux": fiche737,
  "1re-ses-deviance-controle-social": fiche738,
  "1re-ses-voter-participation": fiche739,
  "1si-analyse-fonctionnelle-des-systemes": fiche740,
  "1si-chaine-denergie": fiche741,
  "1si-chaine-dinformation": fiche742,
  "1si-comportement-des-materiaux": fiche743,
  "1si-mecanique-des-solides": fiche744,
  "1svt-mutations-et-variabilite": fiche745,
  "1svt-expression-du-patrimoine-genetique": fiche746,
  "1svt-dynamique-interne-de-la-terre": fiche747,
  "1svt-ecosystemes-et-services": fiche748,
  "1svt-variation-genetique-et-sante": fiche749,
  "1techno-math-suites-numeriques": fiche750,
  "1techno-math-fonctions-variable-reelle": fiche751,
  "1techno-math-derivation": fiche752,
  "1techno-math-statistiques-deux-variables": fiche753,
  "1techno-math-probabilites-variables-aleatoires": fiche754,
  "1sti2d-mesure-incertitudes": fiche755,
  "1sti2d-trigonometrie": fiche756,
  "1sti2d-energie": fiche757,
  "1sti2d-produit-scalaire": fiche758,
  "1sti2d-nombres-complexes": fiche759,
  "1sti2d-ondes-information": fiche760,
  "1st2s-pc-securite-chimique-acide-base": fiche761,
  "1st2s-pc-oxydoreduction-desinfectants": fiche762,
  "1st2s-pc-risques-electriques": fiche763,
  "1st2s-pc-ondes-sonores-audition": fiche764,
  "1st2s-pc-lumiere-vision-lentilles": fiche765,
  "1st2s-pc-infrarouge-securite-routiere": fiche766,
  "1stl-spcl-securite-chimie-verte": fiche767,
  "1stl-spcl-mesure-incertitudes-labo": fiche768,
  "1stl-spcl-instrumentation-chaine-mesure": fiche769,
  "1stl-spcl-analyses-spectroscopies-dosages": fiche770,
  "1stl-spcl-syntheses-extraction-purification": fiche771,
  "1stl-spcl-image-couleur-vision": fiche772,
  "1stl-spcl-image-photographie-lentilles": fiche773,
  "1stl-spcl-appareil-photo-image-numerique": fiche774,
  "tale-allemand-komplexe-satzgefuege": fiche775,
  "tale-allemand-konnektoren-argumentation": fiche776,
  "tale-allemand-partizipialkonstruktionen": fiche777,
  "tale-allemand-wortschatz-wirtschaft-globalisierung": fiche778,
  "tale-allemand-konjunktiv-1-indirekte-rede": fiche779,
  "tale-allemand-nominalstil": fiche780,
  "tale-allemand-wortschatz-gesellschaft-welt": fiche781,
  "tale-allemand-landeskunde-deutsch-in-der-welt": fiche782,
  "tale-anglais-systeme-verbal": fiche783,
  "tale-anglais-modalite": fiche784,
  "tale-anglais-irreel-hypotheses": fiche785,
  "tale-anglais-vocabulaire-economie-mondialisation": fiche786,
  "tale-anglais-discours-rapporte-concordance": fiche787,
  "tale-anglais-structures-complexes": fiche788,
  "tale-anglais-vocabulaire-sciences-societe": fiche789,
  "tale-anglais-civilisation-anglais-monde": fiche790,
  "tale-arts-cinema": fiche791,
  "tale-esc-atmosphere-effet-de-serre-climat": fiche792,
  "tale-esc-energie-carbone-transition": fiche793,
  "tale-esc-production-conversion-energie-electrique": fiche794,
  "tale-esc-une-histoire-du-vivant": fiche795,
  "tale-esc-evolution-et-biodiversite": fiche796,
  "tale-esc-du-genotype-au-phenotype": fiche797,
  "tale-esc-modeles-demographiques": fiche798,
  "tale-esc-probabilites-bayes-ia": fiche799,
  "tale-espagnol-ser-estar-avanzado": fiche800,
  "tale-espagnol-subjuntivo-imperfecto": fiche801,
  "tale-espagnol-concordancia-tiempos": fiche802,
  "tale-espagnol-vocabulario-economia-globalizacion": fiche803,
  "tale-espagnol-conectores-argumentacion": fiche804,
  "tale-espagnol-estructuras-enfaticas": fiche805,
  "tale-espagnol-vocabulario-sociedad-mundo": fiche806,
  "tale-espagnol-civilizacion-espanol-mundo": fiche807,
  "tale-grandoral-comprendre-l-epreuve": fiche808,
  "tale-grandoral-choisir-formuler-ses-questions": fiche809,
  "tale-grandoral-construire-l-expose": fiche810,
  "tale-grandoral-voix-posture-et-stress": fiche811,
  "tale-grandoral-l-echange-avec-le-jury": fiche812,
  "tale-grandoral-le-projet-d-orientation": fiche813,
  "tale-grandoral-criteres-et-erreurs": fiche814,
  "tale-grandoral-s-entrainer-et-checklist": fiche815,
  "tale-hggsp-nouveaux-espaces-conquete": fiche816,
  "tale-hggsp-faire-la-guerre-faire-la-paix": fiche817,
  "tale-hggsp-histoire-et-memoires": fiche818,
  "tale-hggsp-patrimoine": fiche819,
  "tale-hggsp-environnement": fiche820,
  "tale-hggsp-enjeu-de-la-connaissance": fiche821,
  "tale-hist-geo-seconde-guerre-mondiale-genocides": fiche822,
  "tale-hist-geo-guerre-froide": fiche823,
  "tale-hist-geo-decolonisation": fiche824,
  "tale-hist-geo-monde-depuis-1990": fiche825,
  "tale-hist-geo-mers-oceans-mondialisation": fiche826,
  "tale-hist-geo-puissances-et-france-dans-le-monde": fiche827,
  "tale-hist-geo-emc-democratie-engagement": fiche828,
  "tale-italien-usi-avanzati": fiche829,
  "tale-italien-congiuntivo-imperfetto": fiche830,
  "tale-italien-concordanza-tempi": fiche831,
  "tale-italien-vocabolario-economia-globalizzazione": fiche832,
  "tale-italien-connettivi-argomentazione": fiche833,
  "tale-italien-strutture-enfatiche": fiche834,
  "tale-italien-vocabolario-societa-mondo": fiche835,
  "tale-italien-civilta-italiano-nel-mondo": fiche836,
  "tale-lca-civilisation-antique": fiche837,
  "tale-compl-math-suites-evolution": fiche838,
  "tale-compl-math-probabilites-bayes-binomiale": fiche839,
  "tale-compl-math-derivation-convexite": fiche840,
  "tale-compl-math-continuite-tvi": fiche841,
  "tale-compl-math-exponentielle-logarithme": fiche842,
  "tale-compl-math-primitives-equations-differentielles": fiche843,
  "tale-compl-math-calcul-integral": fiche844,
  "tale-compl-math-lois-densite-temps-attente": fiche845,
  "tale-exp-math-complexes-algebrique": fiche846,
  "tale-exp-math-complexes-geometrique": fiche847,
  "tale-exp-math-arithmetique": fiche848,
  "tale-exp-math-graphes-matrices": fiche849,
  "tale-spe-math-logique-ensembles": fiche850,
  "tale-spe-math-suites": fiche851,
  "tale-spe-math-limites-fonctions": fiche852,
  "tale-spe-math-continuite": fiche853,
  "tale-spe-math-derivation-convexite": fiche854,
  "tale-spe-math-fonction-logarithme": fiche855,
  "tale-spe-math-fonctions-trigonometriques": fiche856,
  "tale-spe-math-primitives-equations-differentielles": fiche857,
  "tale-spe-math-calcul-integral": fiche858,
  "tale-spe-math-vecteurs-droites-plans-espace": fiche859,
  "tale-spe-math-produit-scalaire-espace": fiche860,
  "tale-spe-math-combinatoire-denombrement": fiche861,
  "tale-spe-math-listes": fiche862,
  "tale-spe-math-loi-binomiale": fiche863,
  "tale-spe-math-sommes-variables-concentration": fiche864,
  "tale-nsi-programmation-et-complexite": fiche865,
  "tale-nsi-recursivite-et-diviser-pour-regner": fiche866,
  "tale-nsi-structures-de-donnees": fiche867,
  "tale-nsi-bases-de-donnees-et-sql": fiche868,
  "tale-nsi-reseaux-et-routage": fiche869,
  "tale-nsi-algorithmes-de-graphes": fiche870,
  "tale-philo-methode-dissertation": fiche871,
  "tale-philo-methode-explication-texte": fiche872,
  "tale-philo-reperes-conceptuels": fiche873,
  "tale-philo-conscience": fiche874,
  "tale-philo-inconscient": fiche875,
  "tale-philo-temps": fiche876,
  "tale-philo-langage": fiche877,
  "tale-philo-raison": fiche878,
  "tale-philo-verite": fiche879,
  "tale-philo-science": fiche880,
  "tale-philo-technique": fiche881,
  "tale-philo-travail": fiche882,
  "tale-philo-art": fiche883,
  "tale-philo-nature": fiche884,
  "tale-philo-religion": fiche885,
  "tale-philo-liberte": fiche886,
  "tale-philo-devoir": fiche887,
  "tale-philo-bonheur": fiche888,
  "tale-philo-justice": fiche889,
  "tale-philo-etat": fiche890,
  "tale-spe-pc-acide-base-ph": fiche891,
  "tale-spe-pc-methodes-physiques-analyse": fiche892,
  "tale-spe-pc-titrages": fiche893,
  "tale-spe-pc-cinetique-chimique": fiche894,
  "tale-spe-pc-transformations-nucleaires": fiche895,
  "tale-spe-pc-equilibre-sens-evolution": fiche896,
  "tale-spe-pc-electrolyse": fiche897,
  "tale-spe-pc-synthese-organique": fiche898,
  "tale-spe-pc-decrire-mouvement": fiche899,
  "tale-spe-pc-lois-newton-champs": fiche900,
  "tale-spe-pc-ecoulement-fluide": fiche901,
  "tale-spe-pc-gaz-parfait": fiche902,
  "tale-spe-pc-premier-principe-thermique": fiche903,
  "tale-spe-pc-dipole-rc": fiche904,
  "tale-spe-pc-phenomenes-ondulatoires": fiche905,
  "tale-spe-pc-lunette-photons": fiche906,
  "tale-ses-sources-croissance": fiche907,
  "tale-ses-commerce-mondialisation": fiche908,
  "tale-ses-marche-du-travail-chomage": fiche909,
  "tale-ses-monnaie-crises-financieres": fiche910,
  "tale-ses-politiques-economiques": fiche911,
  "tale-ses-structure-sociale-classes": fiche912,
  "tale-ses-mobilite-sociale": fiche913,
  "tale-ses-ecole-et-inegalites": fiche914,
  "tale-ses-engagement-politique": fiche915,
  "tale-si-modelisation-des-mouvements": fiche916,
  "tale-si-energie-dans-les-systemes": fiche917,
  "tale-si-resistance-des-structures": fiche918,
  "tale-si-transmission-de-linformation": fiche919,
  "tale-si-asservissement-et-regulation": fiche920,
  "tale-svt-brassage-genetique-et-meiose": fiche921,
  "tale-svt-evolution-et-speciation": fiche922,
  "tale-svt-geothermie-et-flux-de-chaleur": fiche923,
  "tale-svt-climats-passes-et-actuels": fiche924,
  "tale-svt-reflexe-et-motricite": fiche925,
  "tale-svt-glycemie-et-diabete": fiche926,
  "tale-techno-math-logique-ensembles": fiche927,
  "tale-techno-math-suites-arithmetiques-geometriques": fiche928,
  "tale-techno-math-fonction-inverse": fiche929,
  "tale-techno-math-fonctions-exponentielles": fiche930,
  "tale-techno-math-logarithme-decimal": fiche931,
  "tale-techno-math-statistiques-deux-variables": fiche932,
  "tale-techno-math-probabilites-conditionnelles": fiche933,
  "tale-techno-math-variables-aleatoires-binomiale": fiche934,
  "tale-techno-math-algorithmique-programmation": fiche935,
  "tale-techno-math-activites-geometriques-std2a": fiche936,
  "tale-sti2d-pc-mesure-incertitudes": fiche937,
  "tale-sti2d-math-exponentielle-logarithme": fiche938,
  "tale-sti2d-pc-matiere-materiaux": fiche939,
  "tale-sti2d-math-integration-composition": fiche940,
  "tale-sti2d-math-equations-differentielles": fiche941,
  "tale-sti2d-pc-energie-mecanique-fluides": fiche942,
  "tale-sti2d-pc-energie-electrique-thermique": fiche943,
  "tale-sti2d-math-complexes-exponentielle": fiche944,
  "tale-sti2d-pc-ondes-signaux": fiche945,
  "tale-st2s-pc-molecules-organiques": fiche946,
  "tale-st2s-pc-biomolecules-eau": fiche947,
  "tale-st2s-pc-glucides-ressources-naturelles": fiche948,
  "tale-st2s-pc-besoins-energetiques-alimentation": fiche949,
  "tale-st2s-pc-fluides-pression-sanguine": fiche950,
  "tale-stl-spcl-composition-systemes-chimiques": fiche951,
  "tale-stl-spcl-syntheses-mecanismes": fiche952,
  "tale-stl-spcl-ondes-mecaniques-em-spectres": fiche953,
  "tale-stl-spcl-ondes-transmission-stockage": fiche954,
  "tale-stl-spcl-systemes-procedes-flux": fiche955,
};
const EXERCICES = {
  "cp-allemand-begrussungen": exercice0,
  "cp-allemand-zahlen": exercice1,
  "cp-allemand-farben": exercice2,
  "cp-allemand-tiere": exercice3,
  "cp-anglais-greetings": exercice4,
  "cp-anglais-numbers": exercice5,
  "cp-anglais-colours": exercice6,
  "cp-anglais-animals": exercice7,
  "cp-espagnol-saludos": exercice8,
  "cp-espagnol-numeros": exercice9,
  "cp-espagnol-colores": exercice10,
  "cp-espagnol-animales": exercice11,
  "cp-francais-sons-voyelles": exercice12,
  "cp-francais-syllabes": exercice13,
  "cp-francais-sons-complexes": exercice14,
  "cp-francais-nom-determinant": exercice15,
  "cp-francais-la-phrase": exercice16,
  "cp-hist-geo-vivre-ensemble": exercice17,
  "cp-hist-geo-le-temps-qui-passe": exercice18,
  "cp-hist-geo-se-reperer-espace": exercice19,
  "cp-hist-geo-ecole-autrefois": exercice20,
  "cp-italien-saluti": exercice21,
  "cp-italien-numeri": exercice22,
  "cp-italien-colori": exercice23,
  "cp-italien-animali": exercice24,
  "cp-math-nombres-jusqu-a-20": exercice25,
  "cp-math-comparer-ranger": exercice26,
  "cp-math-addition": exercice27,
  "cp-math-se-reperer-et-quadrillage": exercice28,
  "cp-math-dizaines-et-unites": exercice29,
  "cp-math-soustraction": exercice30,
  "cp-math-formes-geometriques": exercice31,
  "cp-math-calcul-mental": exercice32,
  "cp-math-longueurs-et-masses": exercice33,
  "cp-math-le-temps-qui-passe": exercice34,
  "cp-math-problemes": exercice35,
  "cp-sciences-le-corps-et-les-cinq-sens": exercice36,
  "cp-sciences-le-vivant-animaux-et-vegetaux": exercice37,
  "cp-sciences-les-objets-du-quotidien": exercice38,
  "cp-sciences-solides-et-liquides": exercice39,
  "cp-sciences-le-temps-et-les-saisons": exercice40,
  "ce1-allemand-wochentage": exercice41,
  "ce1-allemand-familie": exercice42,
  "ce1-allemand-koerper": exercice43,
  "ce1-allemand-essen": exercice44,
  "ce1-anglais-days": exercice45,
  "ce1-anglais-family": exercice46,
  "ce1-anglais-body": exercice47,
  "ce1-anglais-food": exercice48,
  "ce1-espagnol-dias": exercice49,
  "ce1-espagnol-familia": exercice50,
  "ce1-espagnol-cuerpo": exercice51,
  "ce1-espagnol-comida": exercice52,
  "ce1-francais-types-de-phrases": exercice53,
  "ce1-francais-noms-propres-communs": exercice54,
  "ce1-francais-singulier-pluriel": exercice55,
  "ce1-francais-le-verbe": exercice56,
  "ce1-francais-present-etre-avoir": exercice57,
  "ce1-hist-geo-regles-et-droits": exercice58,
  "ce1-hist-geo-calendrier-frise": exercice59,
  "ce1-hist-geo-plans-et-cartes": exercice60,
  "ce1-hist-geo-la-france-paysages": exercice61,
  "ce1-italien-giorni": exercice62,
  "ce1-italien-famiglia": exercice63,
  "ce1-italien-corpo": exercice64,
  "ce1-italien-cibo": exercice65,
  "ce1-math-nombres-jusqu-a-1000": exercice66,
  "ce1-math-addition-posee": exercice67,
  "ce1-math-calcul-mental": exercice68,
  "ce1-math-soustraction-posee": exercice69,
  "ce1-math-figures-planes": exercice70,
  "ce1-math-moities-et-doubles": exercice71,
  "ce1-math-tables-de-multiplication": exercice72,
  "ce1-math-symetrie-et-quadrillage": exercice73,
  "ce1-math-solides": exercice74,
  "ce1-math-mesures-et-monnaie": exercice75,
  "ce1-math-problemes": exercice76,
  "ce1-sciences-se-reperer-dans-le-temps": exercice77,
  "ce1-sciences-les-etats-de-leau": exercice78,
  "ce1-sciences-cycles-de-vie-des-etres-vivants": exercice79,
  "ce1-sciences-alimentation-et-hygiene": exercice80,
  "ce1-sciences-materiaux-et-objets-techniques": exercice81,
  "ce2-allemand-zahlen-alter": exercice82,
  "ce2-allemand-gefuehle": exercice83,
  "ce2-allemand-kleidung": exercice84,
  "ce2-allemand-wetter-jahreszeiten": exercice85,
  "ce2-anglais-numbers-age": exercice86,
  "ce2-anglais-feelings": exercice87,
  "ce2-anglais-clothes": exercice88,
  "ce2-anglais-weather-seasons": exercice89,
  "ce2-espagnol-numeros-edad": exercice90,
  "ce2-espagnol-sentimientos": exercice91,
  "ce2-espagnol-ropa": exercice92,
  "ce2-espagnol-tiempo-estaciones": exercice93,
  "ce2-francais-classes-de-mots": exercice94,
  "ce2-francais-passe-present-futur": exercice95,
  "ce2-francais-present-premier-groupe": exercice96,
  "ce2-francais-accord-sujet-verbe": exercice97,
  "ce2-francais-homophones-a-et": exercice98,
  "ce2-hist-geo-prehistoire": exercice99,
  "ce2-hist-geo-gaulois-romains": exercice100,
  "ce2-hist-geo-terre-continents-oceans": exercice101,
  "ce2-hist-geo-symboles-republique": exercice102,
  "ce2-italien-numeri-eta": exercice103,
  "ce2-italien-sentimenti": exercice104,
  "ce2-italien-vestiti": exercice105,
  "ce2-italien-tempo-stagioni": exercice106,
  "ce2-math-nombres-jusqu-a-10000": exercice107,
  "ce2-math-calcul-mental": exercice108,
  "ce2-math-multiplication-posee": exercice109,
  "ce2-math-angles-et-polygones": exercice110,
  "ce2-math-sens-de-la-division": exercice111,
  "ce2-math-perimetre-et-mesures": exercice112,
  "ce2-math-symetrie-axiale": exercice113,
  "ce2-math-fractions-simples": exercice114,
  "ce2-math-solides-et-patrons": exercice115,
  "ce2-math-tableaux-et-graphiques": exercice116,
  "ce2-math-problemes": exercice117,
  "ce2-sciences-classer-les-animaux": exercice118,
  "ce2-sciences-plantes-et-milieux-de-vie": exercice119,
  "ce2-sciences-melanges-et-solutions": exercice120,
  "ce2-sciences-circuits-electriques-simples": exercice121,
  "ce2-sciences-la-terre-le-soleil-la-lune": exercice122,
  "cm1-allemand-laender-nationalitaeten": exercice123,
  "cm1-allemand-haus": exercice124,
  "cm1-allemand-uhrzeit-tagesablauf": exercice125,
  "cm1-allemand-sport-hobbys": exercice126,
  "cm1-anglais-countries-nationalities": exercice127,
  "cm1-anglais-house-rooms": exercice128,
  "cm1-anglais-time-routine": exercice129,
  "cm1-anglais-sports-hobbies": exercice130,
  "cm1-espagnol-paises-nacionalidades": exercice131,
  "cm1-espagnol-casa": exercice132,
  "cm1-espagnol-hora-rutina": exercice133,
  "cm1-espagnol-deportes-ocio": exercice134,
  "cm1-francais-accords-groupe-nominal": exercice135,
  "cm1-francais-complement-objet": exercice136,
  "cm1-francais-futur-simple": exercice137,
  "cm1-francais-imparfait": exercice138,
  "cm1-francais-passe-compose": exercice139,
  "cm1-hist-geo-moyen-age": exercice140,
  "cm1-hist-geo-temps-modernes": exercice141,
  "cm1-hist-geo-habiter-ville-campagne": exercice142,
  "cm1-hist-geo-egalite-discriminations": exercice143,
  "cm1-italien-paesi-nazionalita": exercice144,
  "cm1-italien-casa": exercice145,
  "cm1-italien-ora-routine": exercice146,
  "cm1-italien-sport-tempo-libero": exercice147,
  "cm1-math-grands-nombres": exercice148,
  "cm1-math-multiplication-posee": exercice149,
  "cm1-math-division-euclidienne": exercice150,
  "cm1-math-angles": exercice151,
  "cm1-math-fractions": exercice152,
  "cm1-math-nombres-decimaux": exercice153,
  "cm1-math-operations-decimaux": exercice154,
  "cm1-math-symetrie-axiale": exercice155,
  "cm1-math-durees": exercice156,
  "cm1-math-cercle-triangles-perimetre-aire": exercice157,
  "cm1-math-proportionnalite": exercice158,
  "cm1-math-tableaux-et-graphiques": exercice159,
  "cm1-sciences-la-matiere-et-ses-transformations": exercice160,
  "cm1-sciences-les-fonctions-du-vivant-la-nutrition": exercice161,
  "cm1-sciences-chaines-alimentaires-et-ecosystemes": exercice162,
  "cm1-sciences-energie-et-circuits-electriques": exercice163,
  "cm1-sciences-le-systeme-solaire": exercice164,
  "cm2-allemand-personen-beschreiben": exercice165,
  "cm2-allemand-alltag-praesens": exercice166,
  "cm2-allemand-essen-mahlzeiten": exercice167,
  "cm2-allemand-stadt-wegbeschreibung": exercice168,
  "cm2-anglais-describing-people": exercice169,
  "cm2-anglais-daily-habits": exercice170,
  "cm2-anglais-food-meals": exercice171,
  "cm2-anglais-town-directions": exercice172,
  "cm2-espagnol-describir-personas": exercice173,
  "cm2-espagnol-presente-rutinas": exercice174,
  "cm2-espagnol-comida-comidas": exercice175,
  "cm2-espagnol-ciudad-direcciones": exercice176,
  "cm2-francais-sens-des-mots": exercice177,
  "cm2-francais-complements-circonstanciels": exercice178,
  "cm2-francais-homophones-ces-ses": exercice179,
  "cm2-francais-accord-participe-passe": exercice180,
  "cm2-francais-plus-que-parfait": exercice181,
  "cm2-hist-geo-revolution-empire": exercice182,
  "cm2-hist-geo-republique-democratie": exercice183,
  "cm2-hist-geo-se-deplacer-communiquer": exercice184,
  "cm2-hist-geo-citoyennete-engagement": exercice185,
  "cm2-italien-descrivere-persone": exercice186,
  "cm2-italien-presente-routine": exercice187,
  "cm2-italien-cibo-pasti": exercice188,
  "cm2-italien-citta-indicazioni": exercice189,
  "cm2-math-grands-nombres": exercice190,
  "cm2-math-calcul-mental": exercice191,
  "cm2-math-fractions-et-operations": exercice192,
  "cm2-math-operations-sur-les-decimaux": exercice193,
  "cm2-math-division-posee": exercice194,
  "cm2-math-angles-et-mesures": exercice195,
  "cm2-math-symetrie-axiale": exercice196,
  "cm2-math-proportionnalite-et-pourcentages": exercice197,
  "cm2-math-aires-perimetres-volumes": exercice198,
  "cm2-math-solides-et-patrons": exercice199,
  "cm2-math-graphiques-et-donnees": exercice200,
  "cm2-math-problemes": exercice201,
  "cm2-sciences-corps-humain-digestion-et-respiration": exercice202,
  "cm2-sciences-reproduction-des-etres-vivants": exercice203,
  "cm2-sciences-mouvements-et-forces": exercice204,
  "cm2-sciences-objets-programmes-et-informatique": exercice205,
  "cm2-sciences-environnement-et-developpement-durable": exercice206,
  "6e-allemand-phonetik-laute": exercice207,
  "6e-allemand-personalpronomen": exercice208,
  "6e-allemand-sein-haben": exercice209,
  "6e-allemand-artikel-genus": exercice210,
  "6e-allemand-wortschatz-schule": exercice211,
  "6e-allemand-praesens-regelmaessig": exercice212,
  "6e-allemand-satzstellung": exercice213,
  "6e-allemand-fragesaetze": exercice214,
  "6e-allemand-wortschatz-essen": exercice215,
  "6e-allemand-landeskunde-deutschland": exercice216,
  "6e-anglais-phonetique-sons": exercice217,
  "6e-anglais-se-presenter": exercice218,
  "6e-anglais-articles-pluriels": exercice219,
  "6e-anglais-vocabulaire-ecole": exercice220,
  "6e-anglais-have-got": exercice221,
  "6e-anglais-there-is-there-are": exercice222,
  "6e-anglais-present-simple": exercice223,
  "6e-anglais-questions-auxiliaires": exercice224,
  "6e-anglais-vocabulaire-nourriture-repas": exercice225,
  "6e-anglais-civilisation-royaume-uni": exercice226,
  "6e-arts-langage-plastique": exercice227,
  "6e-arts-prehistoire-antiquite": exercice228,
  "6e-espagnol-fonetica-sonidos": exercice229,
  "6e-espagnol-pronombres-personales": exercice230,
  "6e-espagnol-ser-estar": exercice231,
  "6e-espagnol-articulos-genero": exercice232,
  "6e-espagnol-plural": exercice233,
  "6e-espagnol-articulos-contractos": exercice234,
  "6e-espagnol-vocabulario-escuela": exercice235,
  "6e-espagnol-presente-regular": exercice236,
  "6e-espagnol-vocabulario-comida": exercice237,
  "6e-espagnol-civilizacion-espana": exercice238,
  "6e-francais-classes-grammaticales": exercice239,
  "6e-francais-phrase-simple": exercice240,
  "6e-francais-present-indicatif": exercice241,
  "6e-francais-homophones-grammaticaux": exercice242,
  "6e-francais-imparfait-passe-simple": exercice243,
  "6e-francais-passe-compose-accord": exercice244,
  "6e-francais-recit-conte-fable": exercice245,
  "6e-hist-geo-premiers-etats-ecritures": exercice246,
  "6e-hist-geo-monde-grec": exercice247,
  "6e-hist-geo-rome-republique-empire": exercice248,
  "6e-hist-geo-judaisme-christianisme": exercice249,
  "6e-hist-geo-habiter-metropole": exercice250,
  "6e-hist-geo-habiter-espaces-contraintes": exercice251,
  "6e-hist-geo-emc-college-droits": exercice252,
  "6e-italien-fonetica-suoni": exercice253,
  "6e-italien-pronomi-personali": exercice254,
  "6e-italien-essere-avere": exercice255,
  "6e-italien-articoli-genere": exercice256,
  "6e-italien-plurale": exercice257,
  "6e-italien-preposizioni-articolate": exercice258,
  "6e-italien-vocabolario-scuola": exercice259,
  "6e-italien-presente-regolare": exercice260,
  "6e-italien-vocabolario-cibo": exercice261,
  "6e-italien-civilta-italia": exercice262,
  "6e-math-nombres-entiers-decimaux": exercice263,
  "6e-math-configurations-planes": exercice264,
  "6e-math-fractions": exercice265,
  "6e-math-longueurs-aires-volumes": exercice266,
  "6e-math-durees": exercice267,
  "6e-math-proportionnalite": exercice268,
  "6e-math-initiation-algebre": exercice269,
  "6e-math-gestion-donnees": exercice270,
  "6e-math-probabilites": exercice271,
  "6e-math-pensee-informatique": exercice272,
  "6e-svt-caracteristiques-du-vivant": exercice273,
  "6e-svt-classification-des-etres-vivants": exercice274,
  "6e-svt-besoins-des-vegetaux": exercice275,
  "6e-svt-origine-de-la-matiere-organique": exercice276,
  "6e-svt-peuplement-des-milieux": exercice277,
  "6e-techno-objets-techniques-et-besoins": exercice278,
  "6e-techno-fonctionnement-dun-objet": exercice279,
  "6e-techno-materiaux-et-familles": exercice280,
  "6e-techno-representation-dun-objet": exercice281,
  "6e-techno-initiation-programmation": exercice282,
  "5e-allemand-negation": exercice283,
  "5e-allemand-akkusativ": exercice284,
  "5e-allemand-possessivartikel": exercice285,
  "5e-allemand-wortschatz-stadt-reisen": exercice286,
  "5e-allemand-trennbare-verben": exercice287,
  "5e-allemand-modalverben": exercice288,
  "5e-allemand-wortschatz-natur-tiere": exercice289,
  "5e-allemand-praeteritum-sein-haben": exercice290,
  "5e-allemand-landeskunde-oesterreich-schweiz": exercice291,
  "5e-anglais-present-continu": exercice292,
  "5e-anglais-prepositions": exercice293,
  "5e-anglais-vocabulaire-ville-voyages": exercice294,
  "5e-anglais-preterit-simple": exercice295,
  "5e-anglais-comparatifs-superlatifs": exercice296,
  "5e-anglais-vocabulaire-nature-animaux": exercice297,
  "5e-anglais-modaux-can-must": exercice298,
  "5e-anglais-futur-will-going-to": exercice299,
  "5e-anglais-civilisation-etats-unis": exercice300,
  "5e-arts-la-couleur": exercice301,
  "5e-arts-moyen-age": exercice302,
  "5e-espagnol-interrogacion-negacion": exercice303,
  "5e-espagnol-ser-estar-usos": exercice304,
  "5e-espagnol-hay-estar": exercice305,
  "5e-espagnol-posesivos": exercice306,
  "5e-espagnol-vocabulario-ciudad-viajes": exercice307,
  "5e-espagnol-presente-irregular": exercice308,
  "5e-espagnol-gustar": exercice309,
  "5e-espagnol-vocabulario-naturaleza-animales": exercice310,
  "5e-espagnol-civilizacion-mexico-latinoamerica": exercice311,
  "5e-francais-expansions-du-nom": exercice312,
  "5e-francais-propositions": exercice313,
  "5e-francais-temps-composes": exercice314,
  "5e-francais-futur-conditionnel": exercice315,
  "5e-francais-champ-lexical-connotation": exercice316,
  "5e-francais-discours-direct-indirect": exercice317,
  "5e-francais-texte-de-theatre": exercice318,
  "5e-hist-geo-islam-debuts-expansion": exercice319,
  "5e-hist-geo-occident-feodal": exercice320,
  "5e-hist-geo-roi-et-ville-moyen-age": exercice321,
  "5e-hist-geo-renaissance-humanisme-reformes": exercice322,
  "5e-hist-geo-demographie-developpement": exercice323,
  "5e-hist-geo-ressources-eau-alimentation-energie": exercice324,
  "5e-hist-geo-emc-egalite-developpement-durable": exercice325,
  "5e-italien-interrogazione-negazione": exercice326,
  "5e-italien-essere-esserci": exercice327,
  "5e-italien-ce-ci-sono": exercice328,
  "5e-italien-possessivi": exercice329,
  "5e-italien-vocabolario-citta-viaggi": exercice330,
  "5e-italien-presente-irregolare": exercice331,
  "5e-italien-piacere": exercice332,
  "5e-italien-vocabolario-natura-animali": exercice333,
  "5e-italien-civilta-regioni-citta": exercice334,
  "5e-lca-latin-decouverte": exercice335,
  "5e-lca-latin-present": exercice336,
  "5e-math-operations": exercice337,
  "5e-math-fractions": exercice338,
  "5e-math-nombres-relatifs": exercice339,
  "5e-math-reperage": exercice340,
  "5e-math-calcul-litteral": exercice341,
  "5e-math-puissances": exercice342,
  "5e-math-proportionnalite": exercice343,
  "5e-math-triangles-angles": exercice344,
  "5e-math-parallelogrammes": exercice345,
  "5e-math-transformations": exercice346,
  "5e-math-representation-espace": exercice347,
  "5e-math-fonctions": exercice348,
  "5e-math-statistiques": exercice349,
  "5e-math-probabilites": exercice350,
  "5e-math-pensee-informatique": exercice351,
  "5e-pc-proprietes-matiere": exercice352,
  "5e-pc-corps-purs-melanges": exercice353,
  "5e-pc-transformation-chimique": exercice354,
  "5e-pc-mouvement-vitesse": exercice355,
  "5e-pc-energie-electricite": exercice356,
  "5e-pc-signaux-sonores-lumineux": exercice357,
  "5e-svt-respiration-et-milieux-de-vie": exercice358,
  "5e-svt-nutrition-et-systeme-digestif": exercice359,
  "5e-svt-circulation-et-sang": exercice360,
  "5e-svt-reproduction-et-puberte": exercice361,
  "5e-svt-roches-erosion-et-paysages": exercice362,
  "5e-techno-besoin-et-cahier-des-charges": exercice363,
  "5e-techno-proprietes-des-materiaux": exercice364,
  "5e-techno-structures-et-stabilite": exercice365,
  "5e-techno-chaine-denergie": exercice366,
  "5e-techno-programmation-et-capteurs": exercice367,
  "4e-allemand-dativ": exercice368,
  "4e-allemand-pronomen-akkusativ-dativ": exercice369,
  "4e-allemand-wechselpraepositionen": exercice370,
  "4e-allemand-wortschatz-sport-freizeit": exercice371,
  "4e-allemand-perfekt": exercice372,
  "4e-allemand-imperativ": exercice373,
  "4e-allemand-wortschatz-gesundheit-koerper": exercice374,
  "4e-allemand-komparativ-superlativ": exercice375,
  "4e-allemand-landeskunde-staedte": exercice376,
  "4e-allemand-landeskunde-feste-traditionen": exercice377,
  "4e-anglais-word-order": exercice378,
  "4e-anglais-quantifieurs": exercice379,
  "4e-anglais-vocabulaire-sport-loisirs": exercice380,
  "4e-anglais-present-perfect": exercice381,
  "4e-anglais-preterit-vs-present-perfect": exercice382,
  "4e-anglais-vocabulaire-sante-corps": exercice383,
  "4e-anglais-propositions-relatives": exercice384,
  "4e-anglais-discours-indirect": exercice385,
  "4e-anglais-civilisation-londres": exercice386,
  "4e-anglais-civilisation-australie": exercice387,
  "4e-arts-langage-musical": exercice388,
  "4e-arts-renaissance": exercice389,
  "4e-espagnol-muy-mucho": exercice390,
  "4e-espagnol-comparativos-superlativos": exercice391,
  "4e-espagnol-estar-gerundio": exercice392,
  "4e-espagnol-vocabulario-deporte-ocio": exercice393,
  "4e-espagnol-preterito-perfecto": exercice394,
  "4e-espagnol-preterito-indefinido": exercice395,
  "4e-espagnol-vocabulario-salud-cuerpo": exercice396,
  "4e-espagnol-futuro": exercice397,
  "4e-espagnol-civilizacion-ciudades": exercice398,
  "4e-espagnol-civilizacion-argentina": exercice399,
  "4e-francais-propositions-subordonnees": exercice400,
  "4e-francais-voix-active-passive": exercice401,
  "4e-francais-valeurs-des-temps": exercice402,
  "4e-francais-present-subjonctif": exercice403,
  "4e-francais-figures-de-style": exercice404,
  "4e-francais-recit-realiste-fantastique": exercice405,
  "4e-francais-la-lettre": exercice406,
  "4e-hist-geo-commerce-traite-lumieres": exercice407,
  "4e-hist-geo-revolution-francaise-empire": exercice408,
  "4e-hist-geo-revolution-industrielle": exercice409,
  "4e-hist-geo-conquetes-colonisation": exercice410,
  "4e-hist-geo-urbanisation-du-monde": exercice411,
  "4e-hist-geo-mobilites-humaines": exercice412,
  "4e-hist-geo-emc-libertes-et-loi": exercice413,
  "4e-italien-molto-troppo": exercice414,
  "4e-italien-comparativi-superlativi": exercice415,
  "4e-italien-stare-gerundio": exercice416,
  "4e-italien-vocabolario-sport-tempo-libero": exercice417,
  "4e-italien-passato-prossimo": exercice418,
  "4e-italien-imperfetto": exercice419,
  "4e-italien-vocabolario-salute-corpo": exercice420,
  "4e-italien-futuro": exercice421,
  "4e-italien-civilta-firenze-venezia": exercice422,
  "4e-italien-civilta-cucina-tradizioni": exercice423,
  "4e-lca-latin-declinaisons": exercice424,
  "4e-lca-latin-temps-passe": exercice425,
  "4e-math-operations-nombres-relatifs": exercice426,
  "4e-math-nombres-rationnels": exercice427,
  "4e-math-puissances": exercice428,
  "4e-math-calcul-litteral": exercice429,
  "4e-math-reperage": exercice430,
  "4e-math-proportionnalite": exercice431,
  "4e-math-racine-carree": exercice432,
  "4e-math-triangles": exercice433,
  "4e-math-parallelogrammes-translations": exercice434,
  "4e-math-transformations": exercice435,
  "4e-math-representation-espace": exercice436,
  "4e-math-fonctions": exercice437,
  "4e-math-statistiques": exercice438,
  "4e-math-probabilites": exercice439,
  "4e-math-pensee-informatique": exercice440,
  "4e-pc-organisation-matiere": exercice441,
  "4e-pc-transformation-conservation-masse": exercice442,
  "4e-pc-mouvement-vitesse": exercice443,
  "4e-pc-interactions-forces": exercice444,
  "4e-pc-puissance-energie": exercice445,
  "4e-pc-propagation-signal": exercice446,
  "4e-svt-seismes-et-volcans": exercice447,
  "4e-svt-tectonique-des-plaques": exercice448,
  "4e-svt-energie-dans-lorganisme": exercice449,
  "4e-svt-systeme-nerveux-et-comportement": exercice450,
  "4e-svt-reproduction-et-transmission-de-la-vie": exercice451,
  "4e-techno-chaine-dinformation": exercice452,
  "4e-techno-modelisation-volumique": exercice453,
  "4e-techno-reseaux-informatiques": exercice454,
  "4e-techno-programmation-evenementielle": exercice455,
  "4e-techno-confort-et-domotique": exercice456,
  "3e-allemand-phonetik-betonung-umlaute": exercice457,
  "3e-allemand-praepositionen-zeit": exercice458,
  "3e-allemand-wechselpraepositionen-vertiefung": exercice459,
  "3e-allemand-praeteritum": exercice460,
  "3e-allemand-wortschatz-technik-internet": exercice461,
  "3e-allemand-nebensaetze-weil-dass": exercice462,
  "3e-allemand-wortstellung-nebensatz": exercice463,
  "3e-allemand-futur": exercice464,
  "3e-allemand-wortschatz-umwelt": exercice465,
  "3e-allemand-landeskunde-persoenlichkeiten": exercice466,
  "3e-allemand-landeskunde-deutschsprachige-welt": exercice467,
  "3e-anglais-phonetique-accentuation": exercice468,
  "3e-anglais-present-perfect-since-for": exercice469,
  "3e-anglais-preterit-continu": exercice470,
  "3e-anglais-question-tags": exercice471,
  "3e-anglais-vocabulaire-technologie": exercice472,
  "3e-anglais-modaux-deduction-conseil": exercice473,
  "3e-anglais-voix-passive": exercice474,
  "3e-anglais-conditionnel-if": exercice475,
  "3e-anglais-vocabulaire-environnement": exercice476,
  "3e-anglais-civilisation-canada": exercice477,
  "3e-anglais-civilisation-monde-anglophone": exercice478,
  "3e-arts-art-moderne": exercice479,
  "3e-arts-art-contemporain": exercice480,
  "3e-espagnol-fonetica-acentuacion": exercice481,
  "3e-espagnol-preposiciones": exercice482,
  "3e-espagnol-indefinido-irregular": exercice483,
  "3e-espagnol-imperfecto-indefinido": exercice484,
  "3e-espagnol-vocabulario-tecnologia": exercice485,
  "3e-espagnol-pronombres-cod-coi": exercice486,
  "3e-espagnol-imperativo": exercice487,
  "3e-espagnol-por-para": exercice488,
  "3e-espagnol-vocabulario-medioambiente": exercice489,
  "3e-espagnol-civilizacion-fiestas-tradiciones": exercice490,
  "3e-espagnol-civilizacion-mundo-hispanohablante": exercice491,
  "3e-francais-phrase-complexe": exercice492,
  "3e-francais-connecteurs-logiques": exercice493,
  "3e-francais-modes-et-valeurs": exercice494,
  "3e-francais-lexique-melioratif-pejoratif": exercice495,
  "3e-francais-autobiographie": exercice496,
  "3e-francais-argumentation": exercice497,
  "3e-francais-poesie-engagee": exercice498,
  "3e-hist-geo-premiere-guerre-mondiale": exercice499,
  "3e-hist-geo-totalitarismes": exercice500,
  "3e-hist-geo-seconde-guerre-mondiale": exercice501,
  "3e-hist-geo-france-depuis-1945-ve-republique": exercice502,
  "3e-hist-geo-aires-urbaines-espaces-productifs": exercice503,
  "3e-hist-geo-france-union-europeenne-monde": exercice504,
  "3e-hist-geo-emc-defense-citoyennete": exercice505,
  "3e-italien-fonetica-accento": exercice506,
  "3e-italien-preposizioni": exercice507,
  "3e-italien-passato-prossimo-ausiliari": exercice508,
  "3e-italien-imperfetto-vs-passato": exercice509,
  "3e-italien-vocabolario-tecnologia": exercice510,
  "3e-italien-pronomi-diretti-indiretti": exercice511,
  "3e-italien-particella-ne-ci": exercice512,
  "3e-italien-imperativo": exercice513,
  "3e-italien-vocabolario-ambiente": exercice514,
  "3e-italien-civilta-feste-tradizioni": exercice515,
  "3e-italien-civilta-mondo-italofono": exercice516,
  "3e-lca-civilisation-romaine": exercice517,
  "3e-lca-latin-propositions": exercice518,
  "3e-lca-grec-decouverte": exercice519,
  "3e-math-multiples-diviseurs": exercice520,
  "3e-math-nombres-rationnels": exercice521,
  "3e-math-puissances": exercice522,
  "3e-math-calcul-litteral": exercice523,
  "3e-math-reperage": exercice524,
  "3e-math-proportionnalite": exercice525,
  "3e-math-fonctions": exercice526,
  "3e-math-racine-carree": exercice527,
  "3e-math-triangles": exercice528,
  "3e-math-translations-vecteurs": exercice529,
  "3e-math-representation-espace": exercice530,
  "3e-math-statistiques": exercice531,
  "3e-math-probabilites": exercice532,
  "3e-math-pensee-informatique": exercice533,
  "3e-pc-masse-volumique": exercice534,
  "3e-pc-atomes-ions-ph": exercice535,
  "3e-pc-transformations-chimiques": exercice536,
  "3e-pc-poids-gravitation-forces": exercice537,
  "3e-pc-conversions-energie-signaux": exercice538,
  "3e-svt-genetique-et-heredite": exercice539,
  "3e-svt-evolution-des-especes": exercice540,
  "3e-svt-immunite-et-defenses": exercice541,
  "3e-svt-hormones-et-reproduction": exercice542,
  "3e-svt-activites-humaines-et-environnement": exercice543,
  "3e-techno-demarche-de-projet": exercice544,
  "3e-techno-evolution-des-objets-techniques": exercice545,
  "3e-techno-internet-et-reseaux": exercice546,
  "3e-techno-objets-connectes": exercice547,
  "3e-techno-programmation-et-robotique": exercice548,
  "2nde-allemand-konnektoren": exercice549,
  "2nde-allemand-adjektivdeklination": exercice550,
  "2nde-allemand-genitiv": exercice551,
  "2nde-allemand-verben-mit-dativ": exercice552,
  "2nde-allemand-wortschatz-medien-technik": exercice553,
  "2nde-allemand-relativsaetze": exercice554,
  "2nde-allemand-konjunktiv-2": exercice555,
  "2nde-allemand-wortschatz-kultur-kunst": exercice556,
  "2nde-allemand-landeskunde-institutionen-deutschland": exercice557,
  "2nde-allemand-landeskunde-musik-kunst": exercice558,
  "2nde-anglais-temps-du-present": exercice559,
  "2nde-anglais-temps-du-passe": exercice560,
  "2nde-anglais-modaux": exercice561,
  "2nde-anglais-phrasal-verbs": exercice562,
  "2nde-anglais-vocabulaire-medias-numerique": exercice563,
  "2nde-anglais-hypotheses-if": exercice564,
  "2nde-anglais-discours-rapporte": exercice565,
  "2nde-anglais-vocabulaire-culture-arts": exercice566,
  "2nde-anglais-civilisation-institutions-uk": exercice567,
  "2nde-anglais-civilisation-irlande": exercice568,
  "2nde-arts-grands-courants": exercice569,
  "2nde-espagnol-tiempos-pasado": exercice570,
  "2nde-espagnol-ser-estar-haber": exercice571,
  "2nde-espagnol-verbos-pronominales": exercice572,
  "2nde-espagnol-vocabulario-medios-tecnologia": exercice573,
  "2nde-espagnol-condicional": exercice574,
  "2nde-espagnol-subjuntivo-presente": exercice575,
  "2nde-espagnol-oraciones-condicionales": exercice576,
  "2nde-espagnol-vocabulario-cultura-arte": exercice577,
  "2nde-espagnol-civilizacion-instituciones-espana": exercice578,
  "2nde-espagnol-civilizacion-arte-pintura": exercice579,
  "2nde-francais-grammaire-seconde": exercice580,
  "2nde-francais-procedes-analyse": exercice581,
  "2nde-francais-genres-et-registres": exercice582,
  "2nde-francais-la-poesie": exercice583,
  "2nde-francais-le-theatre": exercice584,
  "2nde-francais-le-roman": exercice585,
  "2nde-francais-litterature-idees": exercice586,
  "2nde-hist-geo-mediterranee-antique": exercice587,
  "2nde-hist-geo-mediterranee-medievale": exercice588,
  "2nde-hist-geo-humanisme-renaissance": exercice589,
  "2nde-hist-geo-revolutions-angleterre-amerique": exercice590,
  "2nde-hist-geo-environnement-developpement-durable": exercice591,
  "2nde-hist-geo-territoires-villes-mondialisation": exercice592,
  "2nde-hist-geo-emc-la-liberte": exercice593,
  "2nde-italien-tempi-del-passato": exercice594,
  "2nde-italien-essere-stare-esserci": exercice595,
  "2nde-italien-verbi-riflessivi": exercice596,
  "2nde-italien-vocabolario-media-tecnologia": exercice597,
  "2nde-italien-condizionale": exercice598,
  "2nde-italien-congiuntivo-presente": exercice599,
  "2nde-italien-periodo-ipotetico": exercice600,
  "2nde-italien-vocabolario-cultura-arte": exercice601,
  "2nde-italien-civilta-istituzioni-italia": exercice602,
  "2nde-italien-civilta-arte-pittura": exercice603,
  "2nde-lca-latin-syntaxe": exercice604,
  "2nde-lca-grec-morphologie": exercice605,
  "2nde-math-calcul-numerique-algebrique": exercice606,
  "2nde-math-arithmetique": exercice607,
  "2nde-math-equations-inequations": exercice608,
  "2nde-math-notion-de-fonction": exercice609,
  "2nde-math-fonctions-de-reference": exercice610,
  "2nde-math-vecteurs": exercice611,
  "2nde-math-droites-du-plan": exercice612,
  "2nde-math-statistiques": exercice613,
  "2nde-math-probabilites": exercice614,
  "2nde-math-algorithmique": exercice615,
  "2nde-pc-description-matiere": exercice616,
  "2nde-pc-modelisation-microscopique": exercice617,
  "2nde-pc-transformations-matiere": exercice618,
  "2nde-pc-mouvement-interactions": exercice619,
  "2nde-pc-ondes-signaux": exercice620,
  "2nde-ses-production-richesses": exercice621,
  "2nde-ses-mesure-production-pib": exercice622,
  "2nde-ses-consommation-revenu": exercice623,
  "2nde-ses-marche-formation-prix": exercice624,
  "2nde-ses-socialisation-introduction": exercice625,
  "2nde-ses-opinion-publique": exercice626,
  "2nde-snt-internet": exercice627,
  "2nde-snt-le-web": exercice628,
  "2nde-snt-reseaux-sociaux": exercice629,
  "2nde-snt-donnees-structurees": exercice630,
  "2nde-snt-localisation-cartographie-gps": exercice631,
  "2nde-snt-informatique-embarquee-objets-connectes": exercice632,
  "2nde-snt-photographie-numerique": exercice633,
  "2nde-svt-la-cellule-unite-du-vivant": exercice634,
  "2nde-svt-adn-et-information-genetique": exercice635,
  "2nde-svt-metabolisme-des-cellules": exercice636,
  "2nde-svt-biodiversite-et-evolution": exercice637,
  "2nde-svt-la-terre-dans-le-systeme-solaire": exercice638,
  "2nde-svt-corps-humain-et-effort-physique": exercice639,
  "1re-allemand-verben-mit-praepositionen": exercice640,
  "1re-allemand-infinitiv-mit-zu": exercice641,
  "1re-allemand-nebensaetze-obwohl-damit": exercice642,
  "1re-allemand-wortschatz-arbeit-studium": exercice643,
  "1re-allemand-passiv": exercice644,
  "1re-allemand-konjunktiv-2-vertiefung": exercice645,
  "1re-allemand-wortschatz-gesellschaft-engagement": exercice646,
  "1re-allemand-landeskunde-deutsche-geschichte": exercice647,
  "1re-allemand-landeskunde-literatur": exercice648,
  "1re-anglais-aspects-simple-continu": exercice649,
  "1re-anglais-gerondif-infinitif": exercice650,
  "1re-anglais-relatives-determinatives-explicatives": exercice651,
  "1re-anglais-vocabulaire-travail-etudes": exercice652,
  "1re-anglais-voix-passive-emplois": exercice653,
  "1re-anglais-futur-et-hypotheses": exercice654,
  "1re-anglais-vocabulaire-societe-engagement": exercice655,
  "1re-anglais-civilisation-histoire-usa": exercice656,
  "1re-anglais-civilisation-litterature": exercice657,
  "1re-arts-architecture": exercice658,
  "1re-arts-histoire-musique": exercice659,
  "1esc-une-longue-histoire-de-la-matiere": exercice660,
  "1esc-le-soleil-notre-source-denergie": exercice661,
  "1esc-la-terre-un-astre-singulier": exercice662,
  "1esc-la-biodiversite-et-son-evolution": exercice663,
  "1esc-son-et-musique": exercice664,
  "1re-espagnol-subjuntivo-usos": exercice665,
  "1re-espagnol-relativos": exercice666,
  "1re-espagnol-perifrasis": exercice667,
  "1re-espagnol-vocabulario-trabajo-estudios": exercice668,
  "1re-espagnol-voz-pasiva": exercice669,
  "1re-espagnol-estilo-indirecto": exercice670,
  "1re-espagnol-vocabulario-sociedad-ciudadania": exercice671,
  "1re-espagnol-civilizacion-historia-latinoamerica": exercice672,
  "1re-espagnol-civilizacion-literatura": exercice673,
  "1re-francais-grammaire-premiere": exercice674,
  "1re-francais-commentaire-litteraire": exercice675,
  "1re-francais-roman-et-recit": exercice676,
  "1re-francais-poesie-19-21": exercice677,
  "1re-francais-contraction-essai": exercice678,
  "1re-francais-litterature-idees-16-18": exercice679,
  "1re-francais-dissertation": exercice680,
  "1re-francais-theatre-17-21": exercice681,
  "1re-francais-epreuve-orale": exercice682,
  "1re-hggsp-democratie": exercice683,
  "1re-hggsp-puissances-internationales": exercice684,
  "1re-hggsp-frontieres": exercice685,
  "1re-hggsp-s-informer": exercice686,
  "1re-hggsp-etats-et-religions": exercice687,
  "1re-hist-geo-revolution-francaise-empire": exercice688,
  "1re-hist-geo-nations-nationalites-europe": exercice689,
  "1re-hist-geo-industrialisation-19e": exercice690,
  "1re-hist-geo-premiere-guerre-et-consequences": exercice691,
  "1re-hist-geo-metropolisation-france": exercice692,
  "1re-hist-geo-espaces-productifs-et-ruraux": exercice693,
  "1re-hist-geo-emc-republique-laicite": exercice694,
  "1re-italien-congiuntivo-usi": exercice695,
  "1re-italien-pronomi-relativi": exercice696,
  "1re-italien-perifrasi": exercice697,
  "1re-italien-vocabolario-lavoro-studi": exercice698,
  "1re-italien-forma-passiva": exercice699,
  "1re-italien-discorso-indiretto": exercice700,
  "1re-italien-vocabolario-societa-cittadinanza": exercice701,
  "1re-italien-civilta-rinascimento": exercice702,
  "1re-italien-civilta-letteratura": exercice703,
  "1re-lca-mythologie": exercice704,
  "1re-lca-latin-auteurs": exercice705,
  "1es-math-information-chiffree": exercice706,
  "1es-math-phenomenes-evolution": exercice707,
  "1es-math-statistiques-bivariees": exercice708,
  "1es-math-phenomenes-aleatoires": exercice709,
  "1spe-math-second-degre": exercice710,
  "1spe-math-suites-numeriques": exercice711,
  "1spe-math-derivation": exercice712,
  "1spe-math-variations-courbes": exercice713,
  "1spe-math-fonction-exponentielle": exercice714,
  "1spe-math-trigonometrie": exercice715,
  "1spe-math-produit-scalaire": exercice716,
  "1spe-math-geometrie-reperee": exercice717,
  "1spe-math-probabilites-conditionnelles": exercice718,
  "1spe-math-variables-aleatoires": exercice719,
  "1nsi-representation-des-donnees": exercice720,
  "1nsi-types-construits": exercice721,
  "1nsi-traitement-de-donnees-en-tables": exercice722,
  "1nsi-interactions-web-client-serveur": exercice723,
  "1nsi-architecture-et-systeme": exercice724,
  "1nsi-algorithmique-tris-et-recherche": exercice725,
  "1spe-pc-transformations-matiere": exercice726,
  "1spe-pc-chimie-organique": exercice727,
  "1spe-pc-mouvement-interactions": exercice728,
  "1spe-pc-energie-mecanique": exercice729,
  "1spe-pc-energie-electrique": exercice730,
  "1spe-pc-ondes-signaux": exercice731,
  "1re-ses-marche-concurrentiel": exercice732,
  "1re-ses-marches-imparfaits": exercice733,
  "1re-ses-defaillances-de-marche": exercice734,
  "1re-ses-monnaie-et-financement": exercice735,
  "1re-ses-socialisation-primaire-secondaire": exercice736,
  "1re-ses-liens-sociaux": exercice737,
  "1re-ses-deviance-controle-social": exercice738,
  "1re-ses-voter-participation": exercice739,
  "1si-analyse-fonctionnelle-des-systemes": exercice740,
  "1si-chaine-denergie": exercice741,
  "1si-chaine-dinformation": exercice742,
  "1si-comportement-des-materiaux": exercice743,
  "1si-mecanique-des-solides": exercice744,
  "1svt-mutations-et-variabilite": exercice745,
  "1svt-expression-du-patrimoine-genetique": exercice746,
  "1svt-dynamique-interne-de-la-terre": exercice747,
  "1svt-ecosystemes-et-services": exercice748,
  "1svt-variation-genetique-et-sante": exercice749,
  "1techno-math-suites-numeriques": exercice750,
  "1techno-math-fonctions-variable-reelle": exercice751,
  "1techno-math-derivation": exercice752,
  "1techno-math-statistiques-deux-variables": exercice753,
  "1techno-math-probabilites-variables-aleatoires": exercice754,
  "1sti2d-mesure-incertitudes": exercice755,
  "1sti2d-trigonometrie": exercice756,
  "1sti2d-energie": exercice757,
  "1sti2d-produit-scalaire": exercice758,
  "1sti2d-nombres-complexes": exercice759,
  "1sti2d-ondes-information": exercice760,
  "1st2s-pc-securite-chimique-acide-base": exercice761,
  "1st2s-pc-oxydoreduction-desinfectants": exercice762,
  "1st2s-pc-risques-electriques": exercice763,
  "1st2s-pc-ondes-sonores-audition": exercice764,
  "1st2s-pc-lumiere-vision-lentilles": exercice765,
  "1st2s-pc-infrarouge-securite-routiere": exercice766,
  "1stl-spcl-securite-chimie-verte": exercice767,
  "1stl-spcl-mesure-incertitudes-labo": exercice768,
  "1stl-spcl-instrumentation-chaine-mesure": exercice769,
  "1stl-spcl-analyses-spectroscopies-dosages": exercice770,
  "1stl-spcl-syntheses-extraction-purification": exercice771,
  "1stl-spcl-image-couleur-vision": exercice772,
  "1stl-spcl-image-photographie-lentilles": exercice773,
  "1stl-spcl-appareil-photo-image-numerique": exercice774,
  "tale-allemand-komplexe-satzgefuege": exercice775,
  "tale-allemand-konnektoren-argumentation": exercice776,
  "tale-allemand-partizipialkonstruktionen": exercice777,
  "tale-allemand-wortschatz-wirtschaft-globalisierung": exercice778,
  "tale-allemand-konjunktiv-1-indirekte-rede": exercice779,
  "tale-allemand-nominalstil": exercice780,
  "tale-allemand-wortschatz-gesellschaft-welt": exercice781,
  "tale-allemand-landeskunde-deutsch-in-der-welt": exercice782,
  "tale-anglais-systeme-verbal": exercice783,
  "tale-anglais-modalite": exercice784,
  "tale-anglais-irreel-hypotheses": exercice785,
  "tale-anglais-vocabulaire-economie-mondialisation": exercice786,
  "tale-anglais-discours-rapporte-concordance": exercice787,
  "tale-anglais-structures-complexes": exercice788,
  "tale-anglais-vocabulaire-sciences-societe": exercice789,
  "tale-anglais-civilisation-anglais-monde": exercice790,
  "tale-arts-cinema": exercice791,
  "tale-esc-atmosphere-effet-de-serre-climat": exercice792,
  "tale-esc-energie-carbone-transition": exercice793,
  "tale-esc-production-conversion-energie-electrique": exercice794,
  "tale-esc-une-histoire-du-vivant": exercice795,
  "tale-esc-evolution-et-biodiversite": exercice796,
  "tale-esc-du-genotype-au-phenotype": exercice797,
  "tale-esc-modeles-demographiques": exercice798,
  "tale-esc-probabilites-bayes-ia": exercice799,
  "tale-espagnol-ser-estar-avanzado": exercice800,
  "tale-espagnol-subjuntivo-imperfecto": exercice801,
  "tale-espagnol-concordancia-tiempos": exercice802,
  "tale-espagnol-vocabulario-economia-globalizacion": exercice803,
  "tale-espagnol-conectores-argumentacion": exercice804,
  "tale-espagnol-estructuras-enfaticas": exercice805,
  "tale-espagnol-vocabulario-sociedad-mundo": exercice806,
  "tale-espagnol-civilizacion-espanol-mundo": exercice807,
  "tale-grandoral-comprendre-l-epreuve": exercice808,
  "tale-grandoral-choisir-formuler-ses-questions": exercice809,
  "tale-grandoral-construire-l-expose": exercice810,
  "tale-grandoral-voix-posture-et-stress": exercice811,
  "tale-grandoral-l-echange-avec-le-jury": exercice812,
  "tale-grandoral-le-projet-d-orientation": exercice813,
  "tale-grandoral-criteres-et-erreurs": exercice814,
  "tale-grandoral-s-entrainer-et-checklist": exercice815,
  "tale-hggsp-nouveaux-espaces-conquete": exercice816,
  "tale-hggsp-faire-la-guerre-faire-la-paix": exercice817,
  "tale-hggsp-histoire-et-memoires": exercice818,
  "tale-hggsp-patrimoine": exercice819,
  "tale-hggsp-environnement": exercice820,
  "tale-hggsp-enjeu-de-la-connaissance": exercice821,
  "tale-hist-geo-seconde-guerre-mondiale-genocides": exercice822,
  "tale-hist-geo-guerre-froide": exercice823,
  "tale-hist-geo-decolonisation": exercice824,
  "tale-hist-geo-monde-depuis-1990": exercice825,
  "tale-hist-geo-mers-oceans-mondialisation": exercice826,
  "tale-hist-geo-puissances-et-france-dans-le-monde": exercice827,
  "tale-hist-geo-emc-democratie-engagement": exercice828,
  "tale-italien-usi-avanzati": exercice829,
  "tale-italien-congiuntivo-imperfetto": exercice830,
  "tale-italien-concordanza-tempi": exercice831,
  "tale-italien-vocabolario-economia-globalizzazione": exercice832,
  "tale-italien-connettivi-argomentazione": exercice833,
  "tale-italien-strutture-enfatiche": exercice834,
  "tale-italien-vocabolario-societa-mondo": exercice835,
  "tale-italien-civilta-italiano-nel-mondo": exercice836,
  "tale-lca-civilisation-antique": exercice837,
  "tale-compl-math-suites-evolution": exercice838,
  "tale-compl-math-probabilites-bayes-binomiale": exercice839,
  "tale-compl-math-derivation-convexite": exercice840,
  "tale-compl-math-continuite-tvi": exercice841,
  "tale-compl-math-exponentielle-logarithme": exercice842,
  "tale-compl-math-primitives-equations-differentielles": exercice843,
  "tale-compl-math-calcul-integral": exercice844,
  "tale-compl-math-lois-densite-temps-attente": exercice845,
  "tale-exp-math-complexes-algebrique": exercice846,
  "tale-exp-math-complexes-geometrique": exercice847,
  "tale-exp-math-arithmetique": exercice848,
  "tale-exp-math-graphes-matrices": exercice849,
  "tale-spe-math-logique-ensembles": exercice850,
  "tale-spe-math-suites": exercice851,
  "tale-spe-math-limites-fonctions": exercice852,
  "tale-spe-math-continuite": exercice853,
  "tale-spe-math-derivation-convexite": exercice854,
  "tale-spe-math-fonction-logarithme": exercice855,
  "tale-spe-math-fonctions-trigonometriques": exercice856,
  "tale-spe-math-primitives-equations-differentielles": exercice857,
  "tale-spe-math-calcul-integral": exercice858,
  "tale-spe-math-vecteurs-droites-plans-espace": exercice859,
  "tale-spe-math-produit-scalaire-espace": exercice860,
  "tale-spe-math-combinatoire-denombrement": exercice861,
  "tale-spe-math-listes": exercice862,
  "tale-spe-math-loi-binomiale": exercice863,
  "tale-spe-math-sommes-variables-concentration": exercice864,
  "tale-nsi-programmation-et-complexite": exercice865,
  "tale-nsi-recursivite-et-diviser-pour-regner": exercice866,
  "tale-nsi-structures-de-donnees": exercice867,
  "tale-nsi-bases-de-donnees-et-sql": exercice868,
  "tale-nsi-reseaux-et-routage": exercice869,
  "tale-nsi-algorithmes-de-graphes": exercice870,
  "tale-philo-methode-dissertation": exercice871,
  "tale-philo-methode-explication-texte": exercice872,
  "tale-philo-reperes-conceptuels": exercice873,
  "tale-philo-conscience": exercice874,
  "tale-philo-inconscient": exercice875,
  "tale-philo-temps": exercice876,
  "tale-philo-langage": exercice877,
  "tale-philo-raison": exercice878,
  "tale-philo-verite": exercice879,
  "tale-philo-science": exercice880,
  "tale-philo-technique": exercice881,
  "tale-philo-travail": exercice882,
  "tale-philo-art": exercice883,
  "tale-philo-nature": exercice884,
  "tale-philo-religion": exercice885,
  "tale-philo-liberte": exercice886,
  "tale-philo-devoir": exercice887,
  "tale-philo-bonheur": exercice888,
  "tale-philo-justice": exercice889,
  "tale-philo-etat": exercice890,
  "tale-spe-pc-acide-base-ph": exercice891,
  "tale-spe-pc-methodes-physiques-analyse": exercice892,
  "tale-spe-pc-titrages": exercice893,
  "tale-spe-pc-cinetique-chimique": exercice894,
  "tale-spe-pc-transformations-nucleaires": exercice895,
  "tale-spe-pc-equilibre-sens-evolution": exercice896,
  "tale-spe-pc-electrolyse": exercice897,
  "tale-spe-pc-synthese-organique": exercice898,
  "tale-spe-pc-decrire-mouvement": exercice899,
  "tale-spe-pc-lois-newton-champs": exercice900,
  "tale-spe-pc-ecoulement-fluide": exercice901,
  "tale-spe-pc-gaz-parfait": exercice902,
  "tale-spe-pc-premier-principe-thermique": exercice903,
  "tale-spe-pc-dipole-rc": exercice904,
  "tale-spe-pc-phenomenes-ondulatoires": exercice905,
  "tale-spe-pc-lunette-photons": exercice906,
  "tale-ses-sources-croissance": exercice907,
  "tale-ses-commerce-mondialisation": exercice908,
  "tale-ses-marche-du-travail-chomage": exercice909,
  "tale-ses-monnaie-crises-financieres": exercice910,
  "tale-ses-politiques-economiques": exercice911,
  "tale-ses-structure-sociale-classes": exercice912,
  "tale-ses-mobilite-sociale": exercice913,
  "tale-ses-ecole-et-inegalites": exercice914,
  "tale-ses-engagement-politique": exercice915,
  "tale-si-modelisation-des-mouvements": exercice916,
  "tale-si-energie-dans-les-systemes": exercice917,
  "tale-si-resistance-des-structures": exercice918,
  "tale-si-transmission-de-linformation": exercice919,
  "tale-si-asservissement-et-regulation": exercice920,
  "tale-svt-brassage-genetique-et-meiose": exercice921,
  "tale-svt-evolution-et-speciation": exercice922,
  "tale-svt-geothermie-et-flux-de-chaleur": exercice923,
  "tale-svt-climats-passes-et-actuels": exercice924,
  "tale-svt-reflexe-et-motricite": exercice925,
  "tale-svt-glycemie-et-diabete": exercice926,
  "tale-techno-math-logique-ensembles": exercice927,
  "tale-techno-math-suites-arithmetiques-geometriques": exercice928,
  "tale-techno-math-fonction-inverse": exercice929,
  "tale-techno-math-fonctions-exponentielles": exercice930,
  "tale-techno-math-logarithme-decimal": exercice931,
  "tale-techno-math-statistiques-deux-variables": exercice932,
  "tale-techno-math-probabilites-conditionnelles": exercice933,
  "tale-techno-math-variables-aleatoires-binomiale": exercice934,
  "tale-techno-math-algorithmique-programmation": exercice935,
  "tale-techno-math-activites-geometriques-std2a": exercice936,
  "tale-sti2d-pc-mesure-incertitudes": exercice937,
  "tale-sti2d-math-exponentielle-logarithme": exercice938,
  "tale-sti2d-pc-matiere-materiaux": exercice939,
  "tale-sti2d-math-integration-composition": exercice940,
  "tale-sti2d-math-equations-differentielles": exercice941,
  "tale-sti2d-pc-energie-mecanique-fluides": exercice942,
  "tale-sti2d-pc-energie-electrique-thermique": exercice943,
  "tale-sti2d-math-complexes-exponentielle": exercice944,
  "tale-sti2d-pc-ondes-signaux": exercice945,
  "tale-st2s-pc-molecules-organiques": exercice946,
  "tale-st2s-pc-biomolecules-eau": exercice947,
  "tale-st2s-pc-glucides-ressources-naturelles": exercice948,
  "tale-st2s-pc-besoins-energetiques-alimentation": exercice949,
  "tale-st2s-pc-fluides-pression-sanguine": exercice950,
  "tale-stl-spcl-composition-systemes-chimiques": exercice951,
  "tale-stl-spcl-syntheses-mecanismes": exercice952,
  "tale-stl-spcl-ondes-mecaniques-em-spectres": exercice953,
  "tale-stl-spcl-ondes-transmission-stockage": exercice954,
  "tale-stl-spcl-systemes-procedes-flux": exercice955,
};

const ATTENDUS = {

};

export async function chargerFiche(id) { return FICHES[id] ?? null; }
export async function chargerExercices(id) {
  const ex = EXERCICES[id] ?? null;
  return ex && ATTENDUS[id] ? fusionnerAttendus(ex, ATTENDUS[id]).exercice : ex;
}
