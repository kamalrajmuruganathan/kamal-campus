# -*- coding: utf-8 -*-
"""Generateur des 10 notions de philosophie (Terminale) pour Kamal Campus.
Cree pour chaque slug : fiche.md, qcm.json (20), exercice.json (10), flashcards.json (12).
Style maison : francais sans accents (coherence avec le corpus existant)."""
import json, os

BASE = "/tmp/kamal-campus/contenu/terminale/philosophie"
PREFIX = "tale-philo-"

def q(id, diff, notion, enonce, choix, rep, expli):
    assert len(choix) == 4, (id, "4 choix")
    assert len(set(choix)) == 4, (id, "choix distincts", choix)
    assert 0 <= rep <= 3, (id, "reponse 0-3")
    assert expli.strip(), (id, "explication vide")
    return {"id": id, "difficulte": diff, "notion": notion, "enonce": enonce,
            "choix": choix, "reponse": rep, "explication": expli}

def ex(id, diff, notion, enonce, corrige, reponse):
    assert corrige and all(s.strip() for s in corrige), (id, "corrige non vide")
    assert reponse.strip(), (id, "reponse vide")
    return {"id": id, "difficulte": diff, "notion": notion, "enonce": enonce,
            "corrige": corrige, "reponse": reponse}

def card(recto, verso):
    return {"recto": recto, "verso": verso}

def write_chapter(slug, titre, prereqs, fiche_body, questions, exos, cartes):
    cid = PREFIX + slug
    assert len(questions) == 20, (slug, "20 QCM", len(questions))
    for i, qq in enumerate(questions, 1):
        assert qq["id"] == i, (slug, "id qcm sequentiel", qq["id"], i)
    assert len(exos) == 10, (slug, "10 exos", len(exos))
    assert len(cartes) == 12, (slug, "12 cartes", len(cartes))
    d = os.path.join(BASE, slug)
    os.makedirs(d, exist_ok=True)
    header = (
        "---\n"
        f"id: {cid}\n"
        f'titre: "{titre}"\n'
        "voie: generale\n"
        "niveau: terminale\n"
        "parcours: philosophie\n"
        "matiere: philosophie\n"
        'programme: "Programme de philosophie — terminale"\n'
        "duree_lecture_min: 15\n"
        "prerequis:\n"
        + "".join(f"  - {p}\n" for p in prereqs) +
        "statut: brouillon\n"
        "relu_par: null\n"
        "---\n\n"
    )
    with open(os.path.join(d, "fiche.md"), "w", encoding="utf-8") as f:
        f.write(header + fiche_body.strip() + "\n")
    common = {"voie": "generale", "niveau": "terminale", "parcours": "philosophie",
              "matiere": "philosophie", "statut": "brouillon", "relu_par": None}
    qcm = {"id": cid + "-qcm", "chapitre": cid, "titre": "QCM — " + titre, **common,
           "consigne": "Une seule reponse correcte par question.", "questions": questions}
    exo = {"id": cid + "-exos", "chapitre": cid, "titre": "Exercices — " + titre, **common,
           "consigne": "Cherche chaque exercice au brouillon avant d'ouvrir le corrige.",
           "exercices": exos}
    fla = {"id": cid + "-cartes", "chapitre": cid, "titre": "Cartes — " + titre, **common,
           "cartes": cartes}
    for name, obj in (("qcm.json", qcm), ("exercice.json", exo), ("flashcards.json", fla)):
        with open(os.path.join(d, name), "w", encoding="utf-8") as f:
            json.dump(obj, f, ensure_ascii=False, indent=2)
    return d

CH = []

# =====================================================================
# 1. L'ART
# =====================================================================
CH.append(dict(
slug="art", titre="L'art", prereqs=["La technique", "La verite"],
fiche_body=r"""
# L'art

> L'art produit des oeuvres qui nous emeuvent sans repondre a un besoin vital. Qu'est-ce que le beau ? L'art nous trompe-t-il ou nous revele-t-il quelque chose ? A quoi sert ce qui, en apparence, ne sert a rien ?

## 1. Art, technique et nature
Chez les Grecs, un seul mot, *technè*, designe a la fois l'art et la technique : tout savoir-faire produisant un objet. La distinction moderne oppose l'art (les beaux-arts, qui visent le beau) a la technique (qui vise l'utile). On oppose aussi l'oeuvre d'art, produite par l'homme, aux choses de la nature. Kant distingue le **beau** (qui plait universellement) de l'**agreable** (qui flatte les sens de facon subjective).

## 2. L'art imite-t-il le reel ? La mimesis
Pour **Platon**, l'art est imitation (*mimesis*) des apparences sensibles, elles-memes copies des Idees : l'oeuvre est donc une "copie de copie", trois fois eloignee de la verite. Platon se mefie des poetes et veut les encadrer dans la cite (*La Republique*). **Aristote** reprend l'idee de mimesis mais la valorise : imiter est naturel et source de connaissance et de plaisir ; la tragedie provoque la **catharsis**, une purgation des passions comme la pitie et la crainte (*Poetique*).

## 3. Le jugement de gout : le beau selon Kant
Pour **Kant**, le jugement esthetique ("c'est beau") est **desinteresse** (il ne vise ni la possession ni l'utilite), **universel** (on l'attend d'autrui) et sans concept determine : le beau est "ce qui plait universellement sans concept". Il definit aussi le beau par une "finalite sans fin" : l'oeuvre semble organisee comme si elle avait un but, sans en avoir. L'artiste de talent est un **genie**, qui "donne ses regles a l'art" au lieu de suivre des recettes.

## 4. Ce que l'art fait voir
Pour **Hegel**, l'art est la manifestation sensible de l'Idee ; il annonce meme la "fin de l'art" quant a sa destination la plus haute, la pensee prenant le relais. Pour **Bergson**, l'artiste nous fait percevoir ce que l'habitude et l'interet nous cachent. **Nietzsche** oppose deux forces dans l'art grec : l'**apollinien** (mesure, forme, reve) et le **dionysiaque** (ivresse, demesure) (*La Naissance de la tragedie*).

## 5. Les erreurs a eviter
- Confondre "beau" et "agreable" : pour Kant, l'agreable est subjectif, le beau pretend a l'universalite.
- Croire que Platon "condamne" tout : il se mefie de l'art comme imitation, mais lui reconnait un pouvoir puissant.
- Reduire l'art a la seule technique : le savoir-faire est necessaire, mais l'art vise le beau, pas seulement l'efficacite.

## A retenir
- *Technè* confond art et technique chez les Grecs ; les Modernes distinguent beaux-arts et technique.
- Platon : art = mimesis, copie de copie, eloignee de la verite. Aristote : la tragedie produit la catharsis.
- Kant : le beau plait universellement, sans concept, de facon desinteressee ; l'artiste de genie donne ses regles a l'art.
- L'art ne sert pas un besoin, mais fait voir et sentir autrement le reel.
""",
questions=[
 q(1,"facile","technè","Chez les Grecs, le mot technè designe :",["a la fois l'art et la technique (tout savoir-faire)","uniquement les beaux-arts","uniquement la peinture","le hasard"],0,"Technè designe tout savoir-faire produisant un objet : l'art et la technique n'y sont pas distingues."),
 q(2,"facile","platon","Pour Platon, l'oeuvre d'art est :",["une copie de copie, eloignee de la verite","la source des Idees","superieure a la philosophie","identique a la chose reelle"],0,"L'art imite les apparences sensibles, elles-memes copies des Idees : c'est une copie de copie."),
 q(3,"moyen","platon","Le concept par lequel Platon designe l'imitation artistique est :",["la mimesis","la catharsis","la sublimation","l'ataraxie"],0,"Mimesis signifie imitation ; c'est le concept central de la critique platonicienne de l'art."),
 q(4,"moyen","aristote","Selon Aristote, la tragedie produit chez le spectateur :",["une catharsis (purgation des passions)","une demonstration logique","une extase mystique","un savoir technique"],0,"Dans la Poetique, la tragedie opere une catharsis, purgation de passions comme la pitie et la crainte."),
 q(5,"moyen","aristote","Aristote, contrairement a Platon, considere l'imitation comme :",["naturelle et source de connaissance et de plaisir","un mensonge a bannir","impossible","reservee aux dieux"],0,"Aristote valorise la mimesis : imiter est naturel a l'homme et procure connaissance et plaisir."),
 q(6,"facile","kant","Pour Kant, le jugement de gout ('c'est beau') est :",["desinteresse","interesse par la possession","fonde sur l'utilite","purement scientifique"],0,"Le jugement esthetique est desinteresse : il ne vise ni la possession ni l'usage de l'objet."),
 q(7,"moyen","kant","Kant definit le beau comme ce qui :",["plait universellement sans concept","plait a chacun differemment","obeit a des regles fixes","procure un profit"],0,"Le beau plait universellement et sans concept determine : on attend d'autrui le meme jugement."),
 q(8,"difficile","kant","L'expression kantienne 'finalite sans fin' signifie que l'oeuvre :",["semble organisee comme si elle avait un but, sans en avoir","n'a aucune organisation","a une fin utilitaire precise","est produite par hasard"],0,"L'oeuvre parait finalisee (harmonieuse, ordonnee) sans poursuivre de fin exterieure."),
 q(9,"moyen","kant","Chez Kant, le beau se distingue de l'agreable parce que l'agreable est :",["subjectif et lie aux sens","universel","desinteresse","fonde sur un concept"],0,"L'agreable flatte les sens de maniere subjective ; le beau, lui, pretend a l'universalite."),
 q(10,"difficile","kant","Pour Kant, l'artiste de genie est celui qui :",["donne ses regles a l'art","copie fidelement la nature","applique des recettes apprises","imite les maitres anciens"],0,"Le genie, selon Kant, est le talent qui donne ses regles a l'art au lieu de suivre des regles preexistantes."),
 q(11,"moyen","hegel","Hegel definit l'art comme :",["la manifestation sensible de l'Idee","une pure imitation servile","un simple divertissement","une science exacte"],0,"Pour Hegel, l'art donne une forme sensible a l'Idee ; c'est un moment de l'Esprit."),
 q(12,"difficile","hegel","La these hegelienne dite de la 'fin de l'art' affirme que :",["l'art n'est plus la forme supreme ou l'esprit se comprend","l'art va disparaitre materiellement","plus personne ne peindra","l'art est sans valeur"],0,"Hegel soutient que, comme forme supreme de l'expression de l'esprit, l'art appartient au passe, relaye par la pensee."),
 q(13,"moyen","nietzsche","Nietzsche oppose dans l'art grec l'apollinien a :",["le dionysiaque","le socratique","le platonicien","le cartesien"],0,"Dans La Naissance de la tragedie, l'apollinien (forme, mesure) s'oppose au dionysiaque (ivresse, demesure)."),
 q(14,"facile","nietzsche","L'apollinien, chez Nietzsche, correspond a :",["la mesure, la forme et le reve","l'ivresse et la demesure","la logique pure","le hasard"],0,"L'apollinien est le principe de forme, de mesure et de reve, oppose au dionysiaque."),
 q(15,"moyen","bergson","Pour Bergson, l'artiste nous fait :",["percevoir ce que l'habitude nous cache","calculer plus vite","oublier le reel","demontrer des theoremes"],0,"L'art ecarte le voile de l'utilite et de l'habitude et nous fait voir une realite plus riche."),
 q(16,"facile","distinction","La distinction beaux-arts / technique repose sur le fait que les beaux-arts visent :",["le beau","l'utile seul","le profit","la survie"],0,"Les beaux-arts visent le beau, la technique vise d'abord l'utilite et l'efficacite."),
 q(17,"moyen","platon","Dans La Republique, Platon propose de :",["encadrer les poetes dans la cite","interdire toute pensee","supprimer les lois","abolir l'education"],0,"Par mefiance envers le pouvoir des images, Platon veut controler la poesie et les artistes dans la cite."),
 q(18,"moyen","distinction","Le jugement 'cette tarte est bonne' releve, selon Kant, de :",["l'agreable","du beau","du sublime","du vrai"],0,"Le plaisir des sens (gout, saveur) releve de l'agreable, subjectif, non du beau."),
 q(19,"difficile","catharsis","Le mot 'catharsis' signifie litteralement :",["purgation","imitation","creation","illusion"],0,"Catharsis vient du grec et signifie purgation ou purification (ici, des passions)."),
 q(20,"moyen","aristote","Selon Aristote, l'oeuvre d'art bien composee possede :",["une unite d'ensemble (debut, milieu, fin)","aucune structure","une infinite d'intrigues","un sens uniquement moral"],0,"Aristote insiste sur l'unite organique de l'oeuvre : une action complete formant un tout ordonne."),
],
exos=[
 ex(1,"decouverte","technè","Expliquez pourquoi le mot grec technè ne permet pas de distinguer l'art de la technique.",["Technè designe tout savoir-faire orientant une production.","Les Grecs rangent sous ce terme aussi bien le travail de l'artisan que celui du sculpteur.","La distinction beaux-arts / technique est moderne."],"Technè = tout savoir-faire producteur ; art et technique n'y sont pas separes."),
 ex(2,"application","platon","Reconstituez l'argument de Platon selon lequel l'art est 'copie de copie'.",["Le monde sensible copie les Idees.","L'oeuvre imite le monde sensible.","Donc l'oeuvre est une copie de copie, eloignee de deux degres de la verite."],"L'art imite l'apparence, elle-meme copie de l'Idee : d'ou 'copie de copie'."),
 ex(3,"application","aristote","Definissez la catharsis et dites de quelles passions il s'agit.",["La catharsis est une purgation des passions.","Aristote cite la pitie et la crainte.","Le spectateur de tragedie s'en trouve allege."],"Catharsis = purgation des passions (pitie et crainte) par la tragedie."),
 ex(4,"application","kant","Enumerez les trois caracteres du jugement de gout chez Kant.",["Il est desinteresse.","Il pretend a l'universalite.","Il est sans concept determine."],"Desinteresse, universel, sans concept."),
 ex(5,"approfondissement","kant","Distinguez le beau de l'agreable en une phrase, avec un exemple de chaque.",["L'agreable flatte les sens et reste subjectif (ex. un plat sucre).","Le beau plait universellement, sans interet (ex. une symphonie).","Le beau pretend a l'accord d'autrui, pas l'agreable."],"L'agreable est subjectif et sensible ; le beau est desinteresse et universel."),
 ex(6,"approfondissement","kant","Expliquez la formule 'finalite sans fin'.",["L'oeuvre parait organisee comme si elle avait un but.","Elle ne poursuit pourtant aucune fin exterieure ou utilitaire.","Sa 'finalite' est purement formelle."],"L'oeuvre semble finalisee sans avoir de fin utilitaire : finalite sans fin."),
 ex(7,"application","nietzsche","Opposez l'apollinien et le dionysiaque chez Nietzsche.",["Apollinien : forme, mesure, reve.","Dionysiaque : ivresse, demesure, elan vital.","La tragedie grecque unit les deux."],"Apollinien = forme et mesure ; dionysiaque = ivresse et demesure."),
 ex(8,"approfondissement","hegel","Expliquez ce que Hegel entend par 'fin de l'art'.",["L'art est manifestation sensible de l'Idee.","Comme expression supreme de l'esprit, il appartient desormais au passe.","La pensee (religion, philosophie) prend le relais ; l'art continue mais n'est plus le plus haut."],"L'art n'est plus la forme supreme ou l'esprit se saisit ; il est relaye par la pensee."),
 ex(9,"approfondissement","fonction","Repondez a la question : 'l'art doit-il etre utile ?' en distinguant deux theses.",["These 1 : l'art peut avoir une fonction (morale, sociale, religieuse).","These 2 : l'art vaut par lui-meme, l'oeuvre n'a pas a etre utile (autonomie de l'art).","On peut soutenir que l'inutilite apparente de l'art est ce qui le rend precieux."],"On oppose l'art utile (fonctionnel) a l'art autonome, qui vaut pour lui-meme."),
 ex(10,"approfondissement","synthese","Montrez que Platon et Aristote partent de la meme notion (mimesis) mais en tirent des conclusions opposees.",["Tous deux definissent l'art comme imitation.","Platon en conclut la mefiance : l'art eloigne de la verite.","Aristote en conclut la valeur : l'imitation instruit et purge les passions."],"Meme point de depart (mimesis), conclusions inverses : mefiance chez Platon, valorisation chez Aristote."),
],
cartes=[
 card("Que signifie technè chez les Grecs ?","Tout savoir-faire producteur : art et technique confondus."),
 card("Comment Platon definit-il l'art ?","Une imitation (mimesis) des apparences, 'copie de copie' eloignee de la verite."),
 card("Que signifie mimesis ?","Imitation."),
 card("Qu'est-ce que la catharsis selon Aristote ?","La purgation des passions (pitie, crainte) operee par la tragedie."),
 card("Comment Kant definit-il le beau ?","Ce qui plait universellement, sans concept et de facon desinteressee."),
 card("Beau ou agreable : lequel est subjectif ?","L'agreable ; le beau pretend a l'universalite."),
 card("Que signifie 'finalite sans fin' (Kant) ?","L'oeuvre semble organisee comme si elle avait un but, sans en poursuivre aucun."),
 card("Qu'est-ce que le genie selon Kant ?","Le talent qui donne ses regles a l'art."),
 card("Comment Hegel definit-il l'art ?","La manifestation sensible de l'Idee."),
 card("Qu'oppose Nietzsche dans l'art grec ?","L'apollinien (forme, mesure) et le dionysiaque (ivresse, demesure)."),
 card("Que nous fait l'artiste selon Bergson ?","Il nous fait percevoir ce que l'habitude et l'interet nous cachent."),
 card("Les beaux-arts visent quoi, la technique quoi ?","Les beaux-arts visent le beau ; la technique vise l'utile."),
],
))

# =====================================================================
# 2. LE BONHEUR
# =====================================================================
CH.append(dict(
slug="bonheur", titre="Le bonheur", prereqs=["Le devoir", "La liberte"],
fiche_body=r"""
# Le bonheur

> Tout le monde veut etre heureux, mais personne ne s'accorde sur ce qu'est le bonheur. Est-il un etat durable ou une somme de plaisirs ? Depend-il de nous ou de la fortune ? La morale a-t-elle pour but de nous rendre heureux ?

## 1. Distinguer plaisir, joie et bonheur
Le **plaisir** est un etat agreable, ponctuel et lie a la satisfaction d'un besoin. La **joie** est vive mais passagere. Le **bonheur** (grec *eudaimonia*) est un etat durable et complet de satisfaction. On appelle **hedonisme** la doctrine qui fait du plaisir le bien supreme, et **eudemonisme** celle qui vise le bonheur comme fin.

## 2. Le bonheur comme fin : Aristote
Pour **Aristote**, le bonheur est le **souverain bien**, la fin ultime de toutes nos actions : on veut tout le reste en vue du bonheur, mais le bonheur pour lui-meme (*Ethique a Nicomaque*). Le bonheur ne consiste ni dans le plaisir ni dans la richesse, mais dans l'activite de l'ame conforme a la vertu et a la raison, sur une vie entiere.

## 3. Sagesses du bonheur : Epicure et les stoiciens
**Epicure** est hedoniste, mais mesure : le plaisir vise est l'absence de douleur du corps (*aponie*) et de trouble de l'ame (*ataraxie*). Il distingue les desirs **naturels et necessaires** (a satisfaire), naturels non necessaires, et vains (a ecarter) (*Lettre a Menecee*). Les **stoiciens** (Epictete, Seneque, Marc Aurele) distinguent ce qui depend de nous (nos jugements, nos desirs) et ce qui n'en depend pas ; le bonheur consiste a ne desirer que ce qui depend de nous et a vivre en accord avec la raison.

## 4. Le bonheur en question : Kant et Pascal
Pour **Kant**, le bonheur est un "ideal de l'imagination" et non de la raison : il est trop indetermine pour servir de regle morale. La morale ne commande donc pas d'etre heureux, mais de se rendre **digne d'etre heureux**. Pour **Pascal**, l'homme, incapable de rester en repos, fuit sa condition par le **divertissement** : il s'agite pour ne pas penser a sa misere (*Pensees*).

## 5. Les erreurs a eviter
- Confondre plaisir et bonheur : le plaisir est ponctuel, le bonheur durable.
- Croire qu'Epicure prone la debauche : son hedonisme est une sagesse de la mesure.
- Croire que pour Kant la morale vise le bonheur : elle vise a en etre digne.

## A retenir
- Aristote : le bonheur est le souverain bien, activite de l'ame selon la vertu.
- Epicure : plaisir = absence de douleur (ataraxie) ; trier ses desirs.
- Stoiciens : distinguer ce qui depend de nous / ne depend pas de nous.
- Kant : le bonheur n'est pas le but de la morale ; il faut se rendre digne d'etre heureux.
""",
questions=[
 q(1,"facile","definition","Le mot grec traduit par 'bonheur' est :",["eudaimonia","hedone","logos","aletheia"],0,"Eudaimonia designe le bonheur comme etat durable et accompli."),
 q(2,"facile","distinction","Ce qui distingue le plaisir du bonheur, c'est que le plaisir est :",["ponctuel","durable","universel","moral"],0,"Le plaisir est un etat agreable ponctuel ; le bonheur est durable et complet."),
 q(3,"moyen","aristote","Pour Aristote, le bonheur est :",["le souverain bien, fin de toutes nos actions","un moyen en vue de la richesse","un plaisir des sens","indifferent a la vertu"],0,"Le bonheur est vise pour lui-meme, comme fin derniere : c'est le souverain bien."),
 q(4,"moyen","aristote","Selon Aristote, le bonheur consiste dans :",["l'activite de l'ame conforme a la vertu et a la raison","l'accumulation de plaisirs","la seule richesse","l'absence de toute activite"],0,"Le bonheur est l'activite de l'ame selon la vertu, exercee sur une vie entiere."),
 q(5,"facile","epicure","Pour Epicure, le plaisir a rechercher est avant tout :",["l'absence de douleur et de trouble","l'exces de jouissances","la richesse","la gloire"],0,"Le plaisir vise est l'aponie (absence de douleur) et l'ataraxie (absence de trouble)."),
 q(6,"moyen","epicure","Le mot 'ataraxie' designe :",["l'absence de trouble de l'ame","une douleur physique","un desir vain","une passion violente"],0,"Ataraxie signifie l'absence de trouble, la tranquillite de l'ame."),
 q(7,"moyen","epicure","Epicure recommande de satisfaire en priorite les desirs :",["naturels et necessaires","vains","naturels non necessaires seulement","impossibles"],0,"Il faut satisfaire les desirs naturels et necessaires, et ecarter les desirs vains."),
 q(8,"difficile","epicure","L'oeuvre ou Epicure expose sa morale du bonheur s'appelle :",["Lettre a Menecee","Ethique a Nicomaque","Les Pensees","Le Contrat social"],0,"La Lettre a Menecee expose la sagesse epicurienne du bonheur."),
 q(9,"moyen","stoicisme","La distinction stoicienne fondamentale oppose :",["ce qui depend de nous et ce qui n'en depend pas","le corps et l'ame","le vrai et le faux","le beau et le laid"],0,"Epictete distingue ce qui depend de nous (jugements, desirs) de ce qui n'en depend pas."),
 q(10,"moyen","stoicisme","Pour les stoiciens, le bonheur suppose de :",["ne desirer que ce qui depend de nous","tout desirer","fuir la raison","multiplier les biens exterieurs"],0,"En bornant ses desirs a ce qui depend de lui, le sage stoicien atteint la serenite."),
 q(11,"facile","stoicisme","Parmi ces auteurs, lequel est un philosophe stoicien ?",["Epictete","Epicure","Descartes","Hume"],0,"Epictete est un stoicien ; Epicure fonde l'ecole rivale, l'epicurisme."),
 q(12,"difficile","kant","Pour Kant, le bonheur est :",["un ideal de l'imagination, trop indetermine pour etre une regle morale","le but de toute morale","un devoir strict","un concept de la raison pure"],0,"Kant juge le bonheur trop indetermine pour fonder une loi morale : c'est un ideal de l'imagination."),
 q(13,"difficile","kant","Selon Kant, la morale nous commande de :",["nous rendre dignes d'etre heureux","chercher le plaisir","fuir le devoir","maximiser notre interet"],0,"La morale ne vise pas directement le bonheur mais a en etre digne par la vertu."),
 q(14,"moyen","pascal","Pour Pascal, le divertissement est :",["ce par quoi l'homme fuit sa condition","une forme de sagesse","le vrai bonheur","une vertu"],0,"Le divertissement detourne l'homme de la pensee de sa misere et de sa mortalite."),
 q(15,"facile","distinction","L'hedonisme est la doctrine qui fait du bien supreme :",["le plaisir","le devoir","la connaissance","la richesse"],0,"L'hedonisme place le plaisir comme bien supreme ; l'eudemonisme vise le bonheur."),
 q(16,"moyen","distinction","On appelle 'eudemonisme' une morale qui pose comme fin :",["le bonheur","la seule loi","le plaisir immediat","la gloire"],0,"L'eudemonisme fait du bonheur la fin de l'action morale."),
 q(17,"moyen","aristote","Selon Aristote, une seule journee agreable suffit-elle au bonheur ?",["Non, il faut une vie entiere","Oui, un instant suffit","Oui, un plaisir intense suffit","La question n'a pas de sens"],0,"'Une hirondelle ne fait pas le printemps' : le bonheur suppose une vie accomplie, pas un instant."),
 q(18,"moyen","distinction","La joie se distingue du bonheur parce qu'elle est :",["vive mais passagere","durable et complete","toujours morale","identique au plaisir des sens"],0,"La joie est une emotion vive et passagere ; le bonheur est un etat durable."),
 q(19,"difficile","stoicisme","Auteur des Pensees pour moi-meme, empereur et stoicien :",["Marc Aurele","Platon","Epicure","Rousseau"],0,"Marc Aurele, empereur romain et stoicien, est l'auteur des Pensees pour moi-meme."),
 q(20,"moyen","epicure","Pour Epicure, la crainte de la mort est vaine car :",["la mort n'est rien pour nous (quand elle est la, nous ne sommes plus)","la mort est un plaisir","l'ame est immortelle et heureuse","la mort n'existe pas"],0,"Selon Epicure, tant que nous vivons la mort n'est pas la, et quand elle est la nous ne sommes plus : elle n'est donc rien pour nous."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez plaisir, joie et bonheur.",["Le plaisir est agreable et ponctuel.","La joie est vive mais passagere.","Le bonheur est un etat durable et complet."],"Plaisir = ponctuel ; joie = vive et breve ; bonheur = durable."),
 ex(2,"decouverte","distinction","Definissez hedonisme et eudemonisme.",["Hedonisme : le plaisir est le bien supreme.","Eudemonisme : le bonheur est la fin de l'action.","Epicure est hedoniste ; Aristote eudemoniste."],"Hedonisme = plaisir comme bien supreme ; eudemonisme = bonheur comme fin."),
 ex(3,"application","aristote","Expliquez pourquoi, selon Aristote, le bonheur est le souverain bien.",["On veut la richesse, la sante, etc. en vue d'autre chose.","On ne veut le bonheur qu'en vue de lui-meme.","Il est donc la fin derniere : le souverain bien."],"Le bonheur est vise pour lui-meme, jamais comme moyen : c'est la fin ultime."),
 ex(4,"application","epicure","Classez les desirs selon Epicure et dites lesquels satisfaire.",["Naturels et necessaires : a satisfaire (manger, boire).","Naturels non necessaires : a moderer.","Vains : a ecarter (richesse, gloire)."],"On satisfait les desirs naturels et necessaires, on ecarte les vains."),
 ex(5,"application","epicure","Expliquez ce que sont l'ataraxie et l'aponie.",["Aponie : absence de douleur du corps.","Ataraxie : absence de trouble de l'ame.","Leur reunion est le plaisir stable vise par Epicure."],"Aponie = absence de douleur physique ; ataraxie = absence de trouble de l'ame."),
 ex(6,"application","stoicisme","Appliquez la distinction d'Epictete a un exemple.",["Ce qui depend de nous : nos jugements, nos desirs.","Ce qui n'en depend pas : la maladie, la reputation, la mort d'autrui.","Le sage ne s'afflige que de ce qui depend de lui."],"Depend de nous : jugements et desirs ; n'en depend pas : le reste. Le sage borne ses desirs au premier."),
 ex(7,"approfondissement","kant","Expliquez pourquoi, pour Kant, le bonheur ne peut pas fonder la morale.",["Le bonheur est un ideal de l'imagination, variable selon chacun.","Il est trop indetermine pour donner une loi universelle.","La morale se fonde donc sur le devoir, non sur le bonheur."],"Trop indetermine et subjectif, le bonheur ne peut servir de loi universelle."),
 ex(8,"approfondissement","kant","Expliquez la formule : la morale commande de se rendre 'digne d'etre heureux'.",["La morale ne commande pas de chercher le bonheur.","Elle commande d'agir par devoir.","Le bonheur merite peut alors s'ajouter, comme couronnement."],"Il faut d'abord etre vertueux (digne), le bonheur n'etant pas le but mais un couronnement possible."),
 ex(9,"approfondissement","pascal","Analysez la notion pascalienne de divertissement.",["L'homme ne supporte pas de rester en repos face a sa condition.","Il se lance dans l'agitation pour ne pas y penser.","Le divertissement masque la misere sans la guerir."],"Le divertissement est la fuite de soi : l'agitation qui detourne de la pensee de sa misere."),
 ex(10,"approfondissement","synthese","Comparez Epicure et les stoiciens sur les moyens du bonheur.",["Epicure : trier ses desirs pour atteindre l'ataraxie.","Stoiciens : distinguer ce qui depend de nous et ne desirer que cela.","Les deux font du bonheur une affaire de sagesse interieure, non de biens exterieurs."],"Deux sagesses interieures : Epicure trie les desirs ; les stoiciens bornent le desir a ce qui depend de nous."),
],
cartes=[
 card("Que signifie eudaimonia ?","Le bonheur, comme etat durable et accompli."),
 card("Difference entre plaisir et bonheur ?","Le plaisir est ponctuel ; le bonheur est durable et complet."),
 card("Le bonheur selon Aristote ?","Le souverain bien : activite de l'ame conforme a la vertu et a la raison."),
 card("Quel plaisir Epicure vise-t-il ?","L'absence de douleur (aponie) et de trouble (ataraxie)."),
 card("Que signifie ataraxie ?","L'absence de trouble de l'ame, la tranquillite."),
 card("Distinction stoicienne fondamentale ?","Ce qui depend de nous / ce qui n'en depend pas (Epictete)."),
 card("Le bonheur selon Kant ?","Un ideal de l'imagination, trop indetermine pour fonder la morale."),
 card("Que commande la morale selon Kant ?","Non le bonheur, mais de se rendre digne d'etre heureux."),
 card("Qu'est-ce que le divertissement chez Pascal ?","L'agitation par laquelle l'homme fuit la pensee de sa condition."),
 card("Hedonisme vs eudemonisme ?","Hedonisme : le plaisir comme bien supreme ; eudemonisme : le bonheur comme fin."),
 card("Pourquoi la mort n'est rien pour nous (Epicure) ?","Quand elle est la, nous ne sommes plus ; elle ne peut donc nous atteindre."),
 card("Trois desirs selon Epicure ?","Naturels et necessaires, naturels non necessaires, vains."),
],
))

# =====================================================================
# 3. LA CONSCIENCE
# =====================================================================
CH.append(dict(
slug="conscience", titre="La conscience", prereqs=["L'inconscient", "La liberte"],
fiche_body=r"""
# La conscience

> Avoir conscience, c'est se savoir en train de percevoir, de sentir, de penser. La conscience fait-elle de nous des sujets libres et responsables, ou n'est-elle qu'une illusion cachant des forces qui nous echappent ?

## 1. Distinguer les sens du mot conscience
On distingue la **conscience immediate** (le simple fait de sentir, de percevoir) et la **conscience reflechie** (le retour de la pensee sur elle-meme, la conscience de soi). On distingue aussi la **conscience psychologique** (le fait de se savoir) et la **conscience morale** (le fait de juger le bien et le mal).

## 2. La conscience comme premiere certitude : Descartes
**Descartes** cherche une verite absolument certaine. Le doute peut porter sur tout, sauf sur une chose : quand je doute, je pense, et si je pense, je suis. C'est le **cogito** : "je pense, donc je suis" (*Discours de la methode*). La conscience de soi est la premiere certitude, et le sujet pensant se saisit comme une **substance pensante**. Pour **Pascal**, cette conscience fait la grandeur de l'homme : "l'homme n'est qu'un roseau, mais c'est un roseau pensant".

## 3. Conscience et identite : Locke et Kant
Pour **Locke**, c'est la conscience, liee a la memoire, qui fait l'**identite personnelle** : je suis le meme parce que je me souviens d'avoir ete. Pour **Kant**, le "je pense" doit pouvoir accompagner toutes mes representations : cette unite de la conscience (*apperception*) est ce qui fait qu'elles sont miennes.

## 4. La conscience est conscience de quelque chose
Pour **Husserl**, toute conscience est **intentionnelle** : elle est toujours conscience de quelque chose, tendue vers un objet. **Sartre** en tire que la conscience n'est pas une chose, mais une pure ouverture, un neant qui fonde la liberte. **Hegel** montre au contraire que la conscience de soi ne se conquiert que par la reconnaissance d'autrui (dialectique du maitre et de l'esclave).

## 5. Les erreurs a eviter
- Confondre conscience psychologique (se savoir) et conscience morale (juger le bien et le mal).
- Croire que le cogito prouve d'emblee l'existence du corps : il n'etablit d'abord que celle du sujet pensant.
- Reduire la conscience a un objet ou une chose : pour Sartre, elle est ouverture, pas substance figee.

## A retenir
- Descartes : le cogito, 'je pense donc je suis', est la premiere certitude, celle du sujet pensant.
- Locke : la conscience et la memoire fondent l'identite personnelle.
- Kant : le 'je pense' accompagne toutes mes representations (apperception).
- Husserl : toute conscience est conscience de quelque chose (intentionnalite).
""",
questions=[
 q(1,"facile","descartes","La formule 'je pense, donc je suis' est de :",["Descartes","Kant","Hume","Platon"],0,"Le cogito 'je pense, donc je suis' est le principe cartesien."),
 q(2,"moyen","descartes","Le cogito etablit d'abord la certitude de :",["l'existence du sujet pensant","l'existence du corps","l'existence de Dieu seule","l'existence du monde exterieur"],0,"Le cogito etablit d'abord que le sujet qui pense existe comme chose pensante."),
 q(3,"moyen","descartes","Chez Descartes, ce qui resiste au doute, c'est :",["le fait meme de penser","les perceptions sensibles","les mathematiques d'abord","le temoignage des sens"],0,"On peut douter de tout, mais non du fait que l'on pense en doutant : le cogito resiste au doute."),
 q(4,"difficile","descartes","L'ouvrage ou Descartes formule 'je pense, donc je suis' est :",["le Discours de la methode","le Leviathan","les Pensees","la Republique"],0,"La formule apparait dans le Discours de la methode (1637)."),
 q(5,"facile","distinction","La conscience reflechie se distingue de la conscience immediate parce qu'elle :",["revient sur elle-meme (conscience de soi)","est un simple sentir","est propre aux animaux","ne pense pas"],0,"La conscience reflechie est le retour de la pensee sur elle-meme, la conscience de soi."),
 q(6,"moyen","distinction","La conscience morale designe :",["la capacite de juger le bien et le mal","le fait de percevoir","la memoire des faits","l'attention aux objets"],0,"La conscience morale juge le bien et le mal ; la conscience psychologique se contente de savoir."),
 q(7,"moyen","locke","Pour Locke, l'identite personnelle repose sur :",["la conscience et la memoire","le corps seul","le nom","la reputation"],0,"Je suis le meme parce que ma conscience et ma memoire relient mes etats passes et presents."),
 q(8,"difficile","kant","Selon Kant, ce qui doit pouvoir accompagner toutes mes representations est :",["le 'je pense'","le sentiment","le desir","la sensation pure"],0,"L'apperception (le 'je pense') accompagne mes representations et les unifie comme miennes."),
 q(9,"moyen","husserl","Dire que la conscience est intentionnelle, c'est dire qu'elle est :",["toujours conscience de quelque chose","une chose parmi les choses","toujours inconsciente","sans objet"],0,"L'intentionnalite : toute conscience est tendue vers un objet, conscience de quelque chose."),
 q(10,"difficile","husserl","La notion d'intentionnalite de la conscience est surtout developpee par :",["Husserl","Descartes","Locke","Hobbes"],0,"Husserl (a la suite de Brentano) fait de l'intentionnalite le trait fondamental de la conscience."),
 q(11,"moyen","sartre","Pour Sartre, la conscience est :",["une ouverture, un neant, source de liberte","une substance figee","une simple chose","identique au corps"],0,"Sartre concoit la conscience comme neant et ouverture, ce qui fonde la liberte humaine."),
 q(12,"difficile","hegel","Pour Hegel, la conscience de soi se conquiert par :",["la reconnaissance d'autrui","la solitude absolue","le seul cogito","l'oubli du monde"],0,"La dialectique du maitre et de l'esclave montre que la conscience de soi passe par autrui."),
 q(13,"facile","pascal","La formule 'roseau pensant' est de :",["Pascal","Descartes","Kant","Sartre"],0,"Pascal ecrit que l'homme n'est qu'un roseau, mais un roseau pensant."),
 q(14,"moyen","pascal","Par la formule 'roseau pensant', Pascal souligne :",["la faiblesse de l'homme mais la dignite de sa pensee","la toute-puissance de l'homme","l'inutilite de la pensee","l'egalite de l'homme et de l'animal"],0,"L'homme est fragile (roseau) mais grand par la pensee (pensant) : faiblesse et dignite."),
 q(15,"moyen","descartes","Le doute cartesien est qualifie de :",["methodique (pour atteindre une certitude)","definitif et desespere","paresseux","purement moral"],0,"Descartes doute par methode, provisoirement, pour trouver un point de certitude."),
 q(16,"moyen","distinction","La 'substance pensante' (res cogitans) designe chez Descartes :",["le sujet pensant, distinct du corps","le corps materiel","les objets exterieurs","la memoire seule"],0,"Descartes distingue la substance pensante (res cogitans) de la substance etendue (res extensa)."),
 q(17,"difficile","kant","Le terme technique kantien pour l'unite du 'je pense' est :",["l'apperception","la catharsis","l'intentionnalite","le cogito"],0,"Kant nomme apperception transcendantale cette unite du 'je pense'."),
 q(18,"moyen","sartre","Pour Sartre, la conscience peut se mentir a elle-meme par :",["la mauvaise foi","l'inconscient freudien","la reminiscence","l'apperception"],0,"La mauvaise foi est, chez Sartre, ce mensonge a soi qui remplace l'inconscient freudien."),
 q(19,"facile","distinction","La conscience immediate correspond a :",["le fait de sentir ou percevoir sans retour sur soi","le jugement moral","la memoire des faits","le raisonnement abstrait"],0,"La conscience immediate est le simple sentir ou percevoir, sans reflexion sur soi."),
 q(20,"moyen","hegel","La dialectique du maitre et de l'esclave illustre :",["le desir de reconnaissance entre consciences","la fondation des mathematiques","le doute methodique","l'origine du langage"],0,"Elle montre que la conscience de soi cherche a etre reconnue par une autre conscience."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez conscience immediate et conscience reflechie.",["Immediate : simple sentir ou percevoir.","Reflechie : retour de la pensee sur elle-meme (conscience de soi).","Seul l'homme accede pleinement a la seconde."],"Immediate = sentir ; reflechie = conscience de soi."),
 ex(2,"decouverte","distinction","Distinguez conscience psychologique et conscience morale.",["Psychologique : se savoir percevant, pensant.","Morale : juger le bien et le mal.","Les deux sens du mot ne se recouvrent pas."],"Psychologique = se savoir ; morale = juger bien et mal."),
 ex(3,"application","descartes","Reconstituez la demarche du cogito.",["Je peux douter de tout.","Mais si je doute, je pense ; si je pense, je suis.","Donc 'je pense, donc je suis' resiste au doute."],"Le doute lui-meme suppose une pensee, donc l'existence du sujet pensant."),
 ex(4,"application","descartes","Precisez ce que le cogito etablit et ce qu'il n'etablit pas encore.",["Il etablit l'existence du sujet pensant.","Il n'etablit pas encore l'existence du corps ni du monde.","Ceux-ci seront retablis plus tard dans la demarche."],"Le cogito prouve d'abord le sujet pensant, non le corps ni le monde exterieur."),
 ex(5,"application","locke","Expliquez la these de Locke sur l'identite personnelle.",["L'identite ne tient ni au corps seul ni au nom.","Elle tient a la conscience et a la memoire.","Je suis le meme parce que je me souviens d'avoir ete."],"L'identite personnelle repose sur la continuite de la conscience et de la memoire."),
 ex(6,"application","husserl","Expliquez l'intentionnalite de la conscience.",["Toute conscience est conscience de quelque chose.","Elle est tendue vers un objet.","Elle n'est donc pas une chose close sur elle-meme."],"La conscience est toujours conscience de quelque chose : c'est l'intentionnalite (Husserl)."),
 ex(7,"approfondissement","kant","Expliquez la formule kantienne : 'le je pense doit pouvoir accompagner toutes mes representations'.",["Une representation n'est mienne que si je peux la rapporter a mon 'je pense'.","Cette unite du 'je pense' est l'apperception.","Elle fonde l'unite de mon experience."],"C'est l'unite du 'je pense' (apperception) qui fait que mes representations sont miennes."),
 ex(8,"approfondissement","sartre","Expliquez pourquoi, pour Sartre, la conscience est liberte.",["La conscience n'est pas une chose mais une ouverture (neant).","Elle n'est determinee par aucune essence prealable.","Elle est donc libre et responsable de ses choix."],"Etant neant et ouverture, la conscience n'est fixee par aucune essence : elle est libre."),
 ex(9,"approfondissement","hegel","Expliquez pourquoi, selon Hegel, autrui est necessaire a la conscience de soi.",["La conscience de soi cherche a etre reconnue.","Elle a besoin d'une autre conscience pour se reconnaitre.","D'ou la dialectique du maitre et de l'esclave."],"La conscience de soi ne s'accomplit que par la reconnaissance d'autrui."),
 ex(10,"approfondissement","synthese","Montrez comment Sartre repond a l'objection de l'inconscient.",["Freud pose un inconscient qui echappe a la conscience.","Sartre lui oppose la mauvaise foi : la conscience se ment a elle-meme.","La responsabilite du sujet est ainsi maintenue."],"A l'inconscient, Sartre substitue la mauvaise foi : la conscience se dissimule sa propre verite."),
],
cartes=[
 card("Qui a dit 'je pense, donc je suis' ?","Descartes."),
 card("Qu'etablit d'abord le cogito ?","L'existence du sujet pensant."),
 card("Conscience immediate vs reflechie ?","Immediate = sentir ; reflechie = conscience de soi."),
 card("Conscience psychologique vs morale ?","Se savoir vs juger le bien et le mal."),
 card("L'identite personnelle selon Locke ?","La continuite de la conscience et de la memoire."),
 card("Le 'je pense' selon Kant ?","Il doit pouvoir accompagner toutes mes representations (apperception)."),
 card("Qu'est-ce que l'intentionnalite (Husserl) ?","Toute conscience est conscience de quelque chose."),
 card("La conscience selon Sartre ?","Une ouverture, un neant, source de liberte."),
 card("La conscience de soi selon Hegel ?","Elle se conquiert par la reconnaissance d'autrui."),
 card("Que signifie 'roseau pensant' (Pascal) ?","L'homme est fragile mais grand par la pensee."),
 card("Qu'est-ce que la mauvaise foi (Sartre) ?","Le mensonge de la conscience a elle-meme."),
 card("Res cogitans vs res extensa ?","Substance pensante vs substance etendue (Descartes)."),
],
))

# =====================================================================
# 4. L'INCONSCIENT
# =====================================================================
CH.append(dict(
slug="inconscient", titre="L'inconscient", prereqs=["La conscience", "La liberte"],
fiche_body=r"""
# L'inconscient

> Sommes-nous transparents a nous-memes ? Freud soutient qu'une part de notre vie psychique nous echappe : l'inconscient. Cette hypothese remet en cause la maitrise du sujet sur lui-meme, et fait l'objet de vifs debats.

## 1. Le probleme : le sujet est-il maitre de lui-meme ?
La tradition cartesienne identifie le psychisme a la conscience : rien en moi ne m'echapperait. Or nos reves, nos oublis, nos lapsus semblent obeir a des mecanismes que nous ne maitrisons pas. **Freud** parle d'une troisieme "blessure narcissique" infligee a l'homme : apres Copernic (la Terre n'est pas le centre) et Darwin (l'homme est un animal), la psychanalyse montre que "le moi n'est pas maitre dans sa propre maison".

## 2. L'hypothese de l'inconscient : Freud
Avant Freud, **Leibniz** avait deja parle de "petites perceptions" non conscientes. Mais c'est **Freud** qui fait de l'inconscient une hypothese scientifique, appuyee sur des faits : reves, actes manques, lapsus, symptomes nevrotiques. La **premiere topique** distingue conscient, preconscient et inconscient. La **seconde topique** distingue trois instances : le **ca** (les pulsions), le **surmoi** (les interdits interiorises) et le **moi** (qui arbitre). Le **refoulement** rejette hors de la conscience des representations penibles, qui reviennent de facon deguisee.

## 3. La cle des symptomes : rever, se tromper, oublier
Pour Freud, le reve est la "voie royale" vers l'inconscient : il realise, de facon deguisee, un desir refoule (*L'Interpretation du reve*). L'acte manque (oublier un nom, une cle) et le lapsus revelent aussi un desir inavoue. Le symptome nevrotique a un sens : il exprime un conflit psychique.

## 4. Les critiques de l'inconscient
Tous n'acceptent pas cette hypothese. **Alain** juge l'inconscient dangereux : il risque de dedouaner l'homme de sa responsabilite. **Sartre** refuse l'inconscient freudien : selon lui, la conscience se ment a elle-meme par **mauvaise foi**, sans qu'une instance separee soit necessaire ; l'homme reste responsable.

## 5. Les erreurs a eviter
- Confondre l'inconscient psychique (refoule) et le simple non-conscient (fonctions du corps, digestion).
- Croire que l'inconscient supprime toute responsabilite : c'est justement l'objection de ses critiques.
- Attribuer a Freud l'invention du mot 'inconscient' : l'idee est plus ancienne (Leibniz) ; Freud en fait une theorie.

## A retenir
- Freud : l'inconscient est une hypothese fondee sur les reves, actes manques, lapsus, symptomes.
- Premiere topique : conscient / preconscient / inconscient ; seconde topique : ca / moi / surmoi.
- Le refoulement chasse hors de la conscience des representations qui reviennent deguisees.
- Sartre critique l'inconscient et lui oppose la mauvaise foi.
""",
questions=[
 q(1,"facile","freud","L'hypothese de l'inconscient comme theorie psychique est surtout liee a :",["Freud","Descartes","Kant","Aristote"],0,"C'est Freud qui elabore l'inconscient comme hypothese et theorie (la psychanalyse)."),
 q(2,"moyen","freud","La formule 'le moi n'est pas maitre dans sa propre maison' resume :",["la these freudienne de l'inconscient","le cogito","l'imperatif categorique","le contrat social"],0,"Freud illustre ainsi la troisieme blessure narcissique : le moi conscient ne se maitrise pas entierement."),
 q(3,"moyen","freud","Freud fonde l'hypothese de l'inconscient sur des faits comme :",["les reves, actes manques, lapsus, symptomes","les theoremes mathematiques","les lois physiques","les regles de grammaire"],0,"Reves, actes manques, lapsus et symptomes sont les 'formations' qui revelent l'inconscient."),
 q(4,"difficile","freud","La premiere topique freudienne distingue :",["conscient, preconscient, inconscient","ca, moi, surmoi","raison, entendement, sensibilite","le vrai, le beau, le bien"],0,"La premiere topique distingue trois systemes : conscient, preconscient et inconscient."),
 q(5,"difficile","freud","La seconde topique freudienne distingue :",["le ca, le moi et le surmoi","le conscient et l'inconscient seulement","l'ame et le corps","le sujet et l'objet"],0,"La seconde topique distingue trois instances : le ca, le moi et le surmoi."),
 q(6,"moyen","freud","Dans la seconde topique, le 'ca' designe :",["le reservoir des pulsions","les interdits moraux","l'instance qui arbitre","la conscience claire"],0,"Le ca est le pole pulsionnel, source des desirs ; le surmoi porte les interdits, le moi arbitre."),
 q(7,"moyen","freud","Le 'surmoi' correspond a :",["les interdits et exigences interiorises","les pulsions brutes","la perception du monde","la memoire des faits"],0,"Le surmoi interiorise les interdits et ideaux (notamment parentaux et sociaux)."),
 q(8,"moyen","freud","Le mecanisme qui rejette hors de la conscience une representation penible s'appelle :",["le refoulement","la sublimation immediate","l'apperception","la catharsis"],0,"Le refoulement maintient hors de la conscience des representations penibles, qui reviennent deguisees."),
 q(9,"difficile","freud","Freud appelle le reve la :",["voie royale vers l'inconscient","preuve de la raison","source de l'erreur","fonction du corps"],0,"Le reve est la 'voie royale' d'acces a l'inconscient : il realise de facon deguisee un desir refoule."),
 q(10,"moyen","freud","Pour Freud, un acte manque (oubli, maladresse revelatrice) :",["a un sens et exprime un desir inavoue","est un pur hasard","est une maladie du corps","n'a aucune signification"],0,"L'acte manque n'est pas un hasard : il exprime un desir ou un conflit inconscient."),
 q(11,"difficile","freud","Les 'trois blessures narcissiques' de l'humanite selon Freud sont associees a :",["Copernic, Darwin et la psychanalyse","Platon, Aristote et Kant","Newton, Einstein et Bohr","Socrate, Descartes et Hume"],0,"Copernic decentre la Terre, Darwin l'homme parmi les animaux, la psychanalyse le moi lui-meme."),
 q(12,"facile","distinction","L'inconscient psychique ne doit pas etre confondu avec :",["le non-conscient du corps (digestion, battements du coeur)","le refoule","le reve","le symptome"],0,"L'inconscient freudien est psychique et refoule ; il differe des fonctions corporelles non conscientes."),
 q(13,"moyen","leibniz","Avant Freud, l'idee d'un psychisme non conscient apparait chez :",["Leibniz (les petites perceptions)","Sartre","Hobbes","Rousseau"],0,"Leibniz parle de 'petites perceptions', percues sans etre apercues : une prefiguration de l'inconscient."),
 q(14,"difficile","sartre","Sartre oppose a l'inconscient freudien la notion de :",["mauvaise foi","refoulement","sublimation","apperception"],0,"Pour Sartre, la conscience se ment a elle-meme par mauvaise foi, sans instance inconsciente separee."),
 q(15,"moyen","sartre","La principale objection de Sartre a l'inconscient porte sur :",["la responsabilite du sujet","la beaute des reves","l'existence du corps","les mathematiques"],0,"Sartre craint que l'inconscient ne dedouane le sujet de sa responsabilite."),
 q(16,"moyen","freud","Le titre de l'ouvrage de 1900 ou Freud analyse les reves est :",["L'Interpretation du reve","Le Contrat social","Ethique a Nicomaque","Les Meditations"],0,"L'Interpretation du reve (1900) expose la these du reve comme realisation de desir."),
 q(17,"moyen","freud","Pour Freud, le symptome nevrotique :",["a un sens (il exprime un conflit refoule)","est purement fortuit","n'exprime rien","est une simple habitude"],0,"Le symptome a une signification : il est l'expression deguisee d'un conflit psychique."),
 q(18,"difficile","freud","Le 'moi', dans la seconde topique, a pour role :",["d'arbitrer entre le ca, le surmoi et la realite","de produire les pulsions","de porter les interdits","de dormir"],0,"Le moi compose entre les exigences du ca, du surmoi et de la realite exterieure."),
 q(19,"moyen","distinction","Dire que l'inconscient a ses propres 'lois' signifie qu'il :",["obeit a des mecanismes reperables (deplacement, condensation)","est totalement chaotique","se confond avec la conscience","n'existe pas"],0,"Le travail du reve obeit a des mecanismes reguliers comme le deplacement et la condensation."),
 q(20,"moyen","alain","La critique d'Alain envers l'inconscient est qu'il :",["risque de dedouaner l'homme de sa responsabilite","est trop mathematique","nie l'existence du corps","supprime les reves"],0,"Alain juge l'inconscient dangereux moralement : il ferait de l'homme l'irresponsable de ses actes."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez l'inconscient psychique et le non-conscient du corps.",["Le non-conscient : digestion, battements du coeur, fonctions vitales.","L'inconscient freudien : psychique et refoule.","Seul le second est l'objet de la psychanalyse."],"Inconscient psychique (refoule) vs non-conscient corporel (physiologique)."),
 ex(2,"decouverte","freud","Enumerez les faits sur lesquels Freud fonde l'hypothese de l'inconscient.",["Les reves.","Les actes manques et les lapsus.","Les symptomes nevrotiques."],"Reves, actes manques, lapsus, symptomes."),
 ex(3,"application","freud","Presentez la premiere topique freudienne.",["Le conscient : ce dont j'ai actuellement conscience.","Le preconscient : ce qui peut redevenir conscient.","L'inconscient : ce qui est refoule, inaccessible directement."],"Conscient / preconscient / inconscient."),
 ex(4,"application","freud","Presentez la seconde topique et le role de chaque instance.",["Le ca : les pulsions.","Le surmoi : les interdits interiorises.","Le moi : arbitre entre ca, surmoi et realite."],"Ca (pulsions), surmoi (interdits), moi (arbitre)."),
 ex(5,"application","freud","Expliquez ce qu'est le refoulement.",["C'est le rejet hors de la conscience de representations penibles.","Elles ne disparaissent pas mais restent actives dans l'inconscient.","Elles reviennent de facon deguisee (reve, symptome)."],"Le refoulement chasse de la conscience des representations qui reviennent deguisees."),
 ex(6,"application","freud","Expliquez pourquoi le reve est la 'voie royale' vers l'inconscient.",["Le reve realise, de facon deguisee, un desir refoule.","Son interpretation permet de remonter au desir cache.","D'ou l'expression 'voie royale'."],"Le reve exprime deguisement un desir refoule : l'analyser donne acces a l'inconscient."),
 ex(7,"approfondissement","freud","Expliquez la formule : 'le moi n'est pas maitre dans sa propre maison'.",["Le sujet croit se connaitre et se maitriser entierement.","Or une part de sa vie psychique lui echappe (l'inconscient).","Le moi conscient n'est donc pas souverain."],"Le moi conscient ne maitrise pas tout : l'inconscient le determine en partie."),
 ex(8,"approfondissement","freud","Situez la psychanalyse parmi les 'trois blessures narcissiques'.",["Copernic : la Terre n'est pas le centre du monde.","Darwin : l'homme est un animal parmi d'autres.","La psychanalyse : le moi n'est pas maitre de lui-meme."],"Copernic, Darwin, puis la psychanalyse decentrent successivement l'homme."),
 ex(9,"approfondissement","sartre","Presentez l'objection de Sartre a l'inconscient.",["Poser un inconscient separe risque de dedouaner le sujet.","Sartre lui oppose la mauvaise foi : la conscience se ment a elle-meme.","La responsabilite du sujet est ainsi maintenue."],"Sartre remplace l'inconscient par la mauvaise foi pour preserver la responsabilite."),
 ex(10,"approfondissement","synthese","Discutez : l'hypothese de l'inconscient supprime-t-elle la liberte ?",["Objection : si l'inconscient me determine, je ne suis plus libre.","Reponse freudienne : la cure vise justement a etendre la conscience ('la ou etait le ca, le moi doit advenir').","La connaissance de l'inconscient peut donc accroitre la liberte."],"L'inconscient limite l'illusion de transparence, mais sa connaissance peut elargir la liberte."),
],
cartes=[
 card("Qui a fait de l'inconscient une theorie psychique ?","Freud (la psychanalyse)."),
 card("Sur quels faits Freud fonde-t-il l'inconscient ?","Reves, actes manques, lapsus, symptomes."),
 card("Premiere topique freudienne ?","Conscient / preconscient / inconscient."),
 card("Seconde topique freudienne ?","Ca / moi / surmoi."),
 card("Role du ca, du surmoi, du moi ?","Ca = pulsions ; surmoi = interdits ; moi = arbitre."),
 card("Qu'est-ce que le refoulement ?","Le rejet hors de la conscience de representations penibles, qui reviennent deguisees."),
 card("Pourquoi le reve est la 'voie royale' ?","Il realise de facon deguisee un desir refoule."),
 card("Que dit la formule 'le moi n'est pas maitre dans sa maison' ?","Une part du psychisme echappe a la conscience."),
 card("Trois blessures narcissiques selon Freud ?","Copernic, Darwin, la psychanalyse."),
 card("Qui parlait de 'petites perceptions' avant Freud ?","Leibniz."),
 card("Que oppose Sartre a l'inconscient ?","La mauvaise foi : la conscience se ment a elle-meme."),
 card("Inconscient psychique vs non-conscient corporel ?","Refoule et psychique vs fonctions vitales du corps."),
],
))

# =====================================================================
# 5. LE DEVOIR
# =====================================================================
CH.append(dict(
slug="devoir", titre="Le devoir", prereqs=["La liberte", "Le bonheur"],
fiche_body=r"""
# Le devoir

> Le devoir est ce que je dois faire, meme quand je n'en ai pas envie. D'ou tire-t-il son autorite ? Faut-il agir par principe ou peser les consequences ? La morale peut-elle etre universelle ?

## 1. Distinguer devoir, contrainte et interet
Le **devoir** oblige mais ne contraint pas physiquement : je peux toujours ne pas obeir. Il se distingue de la **contrainte** (force exterieure) et de l'**interet** (avantage personnel). On distingue aussi l'**obligation morale** (interieure) de l'**obligation legale** (imposee par les lois de l'Etat).

## 2. La morale du devoir : Kant
**Kant** fonde une morale du devoir (la *deontologie*). La valeur morale d'un acte ne vient pas de ses effets, mais de son **intention** : seule une **bonne volonte** est bonne sans restriction. Kant distingue agir **par devoir** (par respect de la loi morale) et agir seulement **conformement au devoir** (par interet ou inclination). Le commerçant honnete par calcul agit conformement au devoir ; celui qui l'est par principe agit par devoir.

## 3. L'imperatif categorique
Kant distingue l'**imperatif hypothetique** ("si tu veux X, fais Y") et l'**imperatif categorique**, qui commande de facon inconditionnelle. Sa formule d'universalisation : "agis uniquement d'apres la maxime telle que tu puisses vouloir en meme temps qu'elle devienne une loi universelle". Une autre formule interdit de traiter l'humanite "simplement comme un moyen" : il faut toujours la traiter "aussi comme une fin" (*Fondation de la metaphysique des moeurs*). Obeir a la loi qu'on se donne soi-meme, c'est l'**autonomie**, opposee a l'**heteronomie**.

## 4. Une autre voie : peser les consequences
A la morale du devoir s'oppose le **consequentialisme**, dont l'**utilitarisme** (**Bentham**, **Mill**) est la forme principale : une action est bonne si elle produit le plus grand bonheur pour le plus grand nombre. Ici, ce sont les consequences, non l'intention, qui comptent. **Aristote**, lui, propose une morale des **vertus** : etre moral, c'est acquerir par l'habitude de bonnes dispositions (courage, justice), le juste milieu entre deux exces.

## 5. Les erreurs a eviter
- Confondre 'par devoir' et 'conformement au devoir' : seul le premier a, pour Kant, une valeur morale.
- Confondre imperatif categorique (inconditionnel) et hypothetique (conditionnel a un but).
- Croire que Kant juge un acte sur ses resultats : il le juge sur l'intention (la bonne volonte).

## A retenir
- Le devoir oblige sans contraindre ; il se distingue de l'interet et de la contrainte.
- Kant : la valeur morale vient de la bonne volonte ; agir par devoir, non par interet.
- Imperatif categorique : rends ta maxime universalisable ; traite l'humanite aussi comme une fin.
- Utilitarisme (Bentham, Mill) : juger l'acte sur ses consequences, le plus grand bonheur du plus grand nombre.
""",
questions=[
 q(1,"facile","distinction","Le devoir se distingue de la contrainte parce que :",["il oblige sans contraindre physiquement","il force le corps","il supprime la liberte","il vient toujours de l'exterieur"],0,"Le devoir oblige moralement mais laisse la possibilite de desobeir : il ne contraint pas physiquement."),
 q(2,"moyen","kant","Pour Kant, ce qui est bon sans restriction, c'est :",["la bonne volonte","le talent","la richesse","le plaisir"],0,"Seule la bonne volonte est bonne sans condition ; les autres biens peuvent servir le mal."),
 q(3,"difficile","kant","Kant distingue agir 'par devoir' et agir 'conformement au devoir'. Le second signifie :",["agir bien mais par interet ou inclination","agir par pur respect de la loi","agir contre la loi","ne pas agir du tout"],0,"Agir conformement au devoir, c'est faire l'acte requis, mais par interet ou penchant, non par principe."),
 q(4,"moyen","kant","Seul a une valeur morale, pour Kant, l'acte accompli :",["par devoir","par interet","par crainte du chatiment","par habitude"],0,"C'est l'intention (agir par respect de la loi morale) qui donne la valeur morale."),
 q(5,"difficile","kant","L'imperatif categorique se distingue de l'imperatif hypothetique parce qu'il commande :",["de facon inconditionnelle","seulement si l'on veut un but","selon l'interet","selon les circonstances"],0,"L'imperatif hypothetique est conditionnel ('si tu veux X') ; le categorique commande absolument."),
 q(6,"difficile","kant","La formule d'universalisation de Kant demande d'agir selon une maxime que l'on pourrait vouloir :",["comme loi universelle","utile a soi seul","agreable a autrui","efficace a court terme"],0,"Il faut pouvoir vouloir que sa maxime devienne une loi valable pour tous."),
 q(7,"difficile","kant","Une formule de l'imperatif categorique interdit de traiter l'humanite :",["simplement comme un moyen","comme une fin","avec respect","comme une personne"],0,"Il faut traiter l'humanite non pas seulement comme un moyen, mais toujours aussi comme une fin."),
 q(8,"moyen","kant","Obeir a la loi que l'on se donne soi-meme, c'est ce que Kant appelle :",["l'autonomie","l'heteronomie","la contrainte","l'inclination"],0,"L'autonomie est le fait de se donner a soi-meme sa propre loi ; l'heteronomie recoit sa loi d'ailleurs."),
 q(9,"moyen","kant","L'oeuvre ou Kant expose sa morale du devoir est :",["Fondation de la metaphysique des moeurs","Le Contrat social","L'Ethique a Nicomaque","Le Leviathan"],0,"La Fondation de la metaphysique des moeurs expose l'imperatif categorique."),
 q(10,"facile","utilitarisme","Pour l'utilitarisme, une action est bonne si elle produit :",["le plus grand bonheur du plus grand nombre","le plus grand profit personnel","le respect de la loi seul","la plus grande gloire"],0,"L'utilitarisme juge l'action a ses consequences : maximiser le bonheur du plus grand nombre."),
 q(11,"moyen","utilitarisme","Les principaux representants de l'utilitarisme sont :",["Bentham et Mill","Kant et Hegel","Platon et Aristote","Descartes et Spinoza"],0,"Jeremy Bentham et John Stuart Mill sont les figures majeures de l'utilitarisme."),
 q(12,"moyen","distinction","La morale de Kant est dite deontologique parce qu'elle juge l'acte sur :",["le principe ou le devoir","les consequences","le plaisir procure","l'utilite sociale"],0,"La deontologie (du grec deon, le devoir) juge l'acte selon le principe, non selon ses effets."),
 q(13,"moyen","distinction","L'utilitarisme est une morale dite :",["consequentialiste","deontologique","du devoir pur","des vertus"],0,"L'utilitarisme est consequentialiste : il evalue l'acte par ses consequences."),
 q(14,"moyen","aristote","La morale d'Aristote est une morale :",["des vertus (dispositions acquises par l'habitude)","du seul devoir","de l'interet","de l'utilite"],0,"Aristote fonde une ethique des vertus, dispositions stables acquises par l'habitude."),
 q(15,"difficile","aristote","La vertu, selon Aristote, est un :",["juste milieu entre deux exces","exces de courage","manque de desir","calcul d'utilite"],0,"La vertu est un juste milieu : le courage entre lachete et temerite, par exemple."),
 q(16,"facile","distinction","L'obligation legale se distingue de l'obligation morale parce qu'elle est :",["imposee par les lois de l'Etat","interieure a la conscience","toujours juste","sans sanction"],0,"L'obligation legale vient des lois de l'Etat ; l'obligation morale vient de la conscience."),
 q(17,"moyen","kant","Pour Kant, un commercant honnete par pur calcul commercial agit :",["conformement au devoir","par devoir","contre le devoir","sans aucune regle"],0,"Il fait l'acte juste, mais par interet : donc conformement au devoir, sans valeur morale au sens strict."),
 q(18,"moyen","kant","L'imperatif hypothetique a la forme :",["'si tu veux X, alors fais Y'","'fais Y absolument'","'ne fais rien'","'suis ton plaisir'"],0,"L'imperatif hypothetique subordonne l'action a un but voulu ('si tu veux...')."),
 q(19,"difficile","kant","Le respect, chez Kant, est le sentiment qui accompagne :",["la loi morale","le plaisir sensible","la crainte du chatiment","l'interet bien compris"],0,"Le respect est le seul sentiment d'origine rationnelle, suscite par la loi morale elle-meme."),
 q(20,"moyen","distinction","'Ce qui est legal est-il toujours moral ?' La bonne analyse est :",["non : une loi peut etre injuste, legalite et moralite ne coincident pas","oui : legal et moral sont synonymes","la question n'a pas de sens","toujours, car l'Etat ne se trompe jamais"],0,"La legalite (conformite a la loi) ne garantit pas la moralite : une loi peut etre injuste."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez devoir, contrainte et interet.",["Le devoir oblige sans contraindre.","La contrainte est une force exterieure.","L'interet est l'avantage personnel."],"Devoir = obligation morale ; contrainte = force ; interet = avantage."),
 ex(2,"decouverte","kant","Distinguez agir 'par devoir' et 'conformement au devoir'.",["Par devoir : par respect de la loi morale.","Conformement au devoir : l'acte est correct, mais fait par interet.","Seul 'par devoir' a une valeur morale pour Kant."],"Par devoir = par principe ; conformement au devoir = par interet."),
 ex(3,"application","kant","Expliquez pourquoi seule la bonne volonte est bonne sans restriction.",["Les talents et richesses peuvent servir de mauvaises fins.","La bonne volonte veut le bien pour lui-meme.","Elle est donc bonne sans condition."],"Tout autre bien peut mal servir ; seule la bonne volonte est inconditionnellement bonne."),
 ex(4,"application","kant","Distinguez imperatif hypothetique et imperatif categorique.",["Hypothetique : 'si tu veux X, fais Y' (conditionnel).","Categorique : 'fais Y' (inconditionnel).","La morale releve du categorique."],"Hypothetique = conditionnel a un but ; categorique = inconditionnel."),
 ex(5,"application","kant","Enoncez la formule d'universalisation de l'imperatif categorique.",["Agis selon une maxime que tu puisses vouloir universelle.","Une maxime qui ne peut etre universalisee sans contradiction est immorale.","Ex. : le mensonge, generalise, se detruit lui-meme."],"Agis d'apres une maxime que tu puisses vouloir comme loi universelle."),
 ex(6,"application","kant","Expliquez la formule : traiter l'humanite 'aussi comme une fin'.",["Ne jamais reduire une personne a un simple moyen.","La reconnaitre comme fin en soi, douee de dignite.","On peut utiliser autrui, mais jamais seulement l'utiliser."],"Ne jamais traiter autrui simplement comme un moyen, toujours aussi comme une fin."),
 ex(7,"approfondissement","kant","Expliquez la difference entre autonomie et heteronomie.",["Autonomie : se donner a soi-meme sa propre loi.","Heteronomie : recevoir sa loi de l'exterieur (desirs, autorite).","La moralite suppose l'autonomie."],"Autonomie = loi qu'on se donne ; heteronomie = loi recue d'ailleurs."),
 ex(8,"approfondissement","utilitarisme","Presentez le principe de l'utilitarisme et son ecart avec Kant.",["Utilitarisme : maximiser le bonheur du plus grand nombre.","Il juge l'acte a ses consequences (consequentialisme).","Kant juge l'acte a l'intention (deontologie)."],"Utilitarisme = consequences (bonheur du plus grand nombre) ; Kant = intention."),
 ex(9,"approfondissement","aristote","Expliquez la vertu comme juste milieu chez Aristote.",["La vertu est une disposition acquise par l'habitude.","Elle est un juste milieu entre deux exces.","Ex. : le courage entre lachete et temerite."],"La vertu est un juste milieu entre deux exces, acquis par l'habitude."),
 ex(10,"approfondissement","synthese","Discutez : 'ce qui est legal est-il toujours moral ?'.",["Legalite : conformite a la loi de l'Etat.","Moralite : conformite a la conscience morale.","Une loi peut etre legale sans etre juste : les deux ne coincident pas."],"Non : la conformite a la loi ne garantit pas la justice morale."),
],
cartes=[
 card("Le devoir se distingue de la contrainte comment ?","Il oblige moralement sans contraindre physiquement."),
 card("Qu'est-ce qui est bon sans restriction selon Kant ?","La bonne volonte."),
 card("Par devoir vs conformement au devoir ?","Par principe (valeur morale) vs par interet (pas de valeur morale)."),
 card("Imperatif categorique vs hypothetique ?","Inconditionnel vs conditionnel a un but ('si tu veux...')."),
 card("Formule d'universalisation de Kant ?","Agis selon une maxime que tu puisses vouloir loi universelle."),
 card("Comment traiter l'humanite selon Kant ?","Jamais simplement comme un moyen, toujours aussi comme une fin."),
 card("Autonomie vs heteronomie ?","Se donner sa loi vs recevoir sa loi de l'exterieur."),
 card("Principe de l'utilitarisme ?","Le plus grand bonheur du plus grand nombre (Bentham, Mill)."),
 card("Deontologie vs consequentialisme ?","Juger l'acte sur le principe vs sur les consequences."),
 card("La vertu selon Aristote ?","Un juste milieu entre deux exces, acquis par l'habitude."),
 card("Obligation morale vs legale ?","Interieure (conscience) vs imposee par l'Etat."),
 card("Ce qui est legal est-il toujours moral ?","Non : une loi peut etre legale sans etre juste."),
],
))

# =====================================================================
# 6. L'ETAT
# =====================================================================
CH.append(dict(
slug="etat", titre="L'Etat", prereqs=["La justice", "La liberte"],
fiche_body=r"""
# L'Etat

> L'Etat detient un pouvoir considerable sur les individus. Pourquoi lui obeir ? D'ou tire-t-il sa legitimite ? L'Etat protege-t-il notre liberte ou la menace-t-il ? Les theories du contrat social tentent de repondre.

## 1. Distinguer Etat, societe, nation, gouvernement
La **societe** est l'ensemble des individus vivant ensemble ; la **nation** est une communaute unie par une histoire et une culture ; l'**Etat** est l'organisation politique et juridique qui detient l'autorite sur un territoire ; le **gouvernement** est ceux qui exercent le pouvoir. Max **Weber** definit l'Etat par le "monopole de la violence physique legitime".

## 2. Le contrat social : sortir de l'etat de nature
Les theoriciens du contrat imaginent un **etat de nature** (sans Etat) pour expliquer pourquoi les hommes s'associent. Pour **Hobbes**, l'etat de nature est une "guerre de tous contre tous" ("l'homme est un loup pour l'homme") : par peur de la mort, les hommes remettent leur pouvoir a un souverain absolu, le **Leviathan**, en echange de la securite. Pour **Locke**, l'etat de nature connait deja des **droits naturels** (vie, liberte, propriete) ; l'Etat est institue pour les proteger, et le peuple garde un **droit de resistance** si l'Etat les viole. Pour **Rousseau**, "l'homme est ne libre, et partout il est dans les fers" ; le bon contrat fait que chacun, en obeissant a la **volonte generale**, n'obeit qu'a lui-meme et reste libre (*Du contrat social*).

## 3. La separation des pouvoirs
**Montesquieu** soutient que, pour eviter l'abus, "il faut que le pouvoir arrete le pouvoir" : il distingue le pouvoir **legislatif** (faire les lois), **executif** (les appliquer) et **judiciaire** (juger), qui doivent etre separes (*De l'esprit des lois*).

## 4. Politique et morale
**Machiavel**, dans *Le Prince*, analyse le pouvoir tel qu'il est, non tel qu'il devrait etre : le prince doit savoir user de la force et de la ruse pour conserver l'Etat. On distingue le pouvoir **legal** (conforme aux lois) et le pouvoir **legitime** (reconnu comme juste par ceux qui obeissent).

## 5. Les erreurs a eviter
- Confondre Etat, gouvernement et nation : ce sont trois notions distinctes.
- Croire que l'etat de nature est un fait historique : c'est une hypothese theorique.
- Confondre legalite (conformite a la loi) et legitimite (reconnaissance comme juste).

## A retenir
- Weber : l'Etat detient le monopole de la violence physique legitime.
- Hobbes : etat de nature = guerre de tous contre tous ; d'ou un souverain absolu (le Leviathan).
- Locke : droits naturels et droit de resistance ; Rousseau : volonte generale et souverainete du peuple.
- Montesquieu : separer les pouvoirs (legislatif, executif, judiciaire) pour eviter l'abus.
""",
questions=[
 q(1,"facile","weber","Max Weber definit l'Etat par :",["le monopole de la violence physique legitime","la propriete des terres","le nombre d'habitants","la richesse economique"],0,"Pour Weber, l'Etat detient le monopole de la contrainte physique legitime sur un territoire."),
 q(2,"moyen","hobbes","Pour Hobbes, l'etat de nature est :",["une guerre de tous contre tous","un paradis pacifique","une societe deja organisee","impossible a concevoir"],0,"L'etat de nature hobbesien est une guerre de tous contre tous, faute d'autorite commune."),
 q(3,"moyen","hobbes","La formule 'l'homme est un loup pour l'homme' est associee a :",["Hobbes","Rousseau","Locke","Kant"],0,"Hobbes reprend cette formule pour decrire l'insecurite de l'etat de nature."),
 q(4,"moyen","hobbes","Le titre de l'ouvrage majeur de Hobbes sur l'Etat est :",["Le Leviathan","Du contrat social","De l'esprit des lois","Le Prince"],0,"Le Leviathan (1651) expose la theorie hobbesienne de l'Etat souverain."),
 q(5,"moyen","hobbes","Pour Hobbes, les hommes quittent l'etat de nature surtout par :",["peur de la mort violente","amour de la beaute","desir de gloire","gout du savoir"],0,"La crainte de la mort violente pousse a instituer un pouvoir commun garantissant la securite."),
 q(6,"moyen","locke","Pour Locke, l'etat de nature comporte deja :",["des droits naturels (vie, liberte, propriete)","une guerre totale","aucune regle","un Etat"],0,"Locke pose des droits naturels anterieurs a l'Etat, que celui-ci doit proteger."),
 q(7,"difficile","locke","Selon Locke, si l'Etat viole les droits naturels, le peuple a :",["un droit de resistance","aucun recours","le devoir d'obeir toujours","le droit de supprimer toute loi"],0,"Locke reconnait un droit de resistance quand le pouvoir trahit sa mission de protection."),
 q(8,"moyen","rousseau","La formule 'l'homme est ne libre, et partout il est dans les fers' est de :",["Rousseau","Hobbes","Machiavel","Weber"],0,"Elle ouvre le Contrat social de Rousseau."),
 q(9,"difficile","rousseau","Chez Rousseau, obeir a la volonte generale, c'est :",["n'obeir qu'a soi-meme et rester libre","obeir a un maitre","perdre toute liberte","obeir a la majorite par force"],0,"Par le contrat, chacun se soumet a la volonte generale qui est aussi la sienne : il reste libre."),
 q(10,"moyen","rousseau","L'ouvrage de Rousseau qui expose sa theorie politique est :",["Du contrat social","Le Leviathan","De l'esprit des lois","La Republique"],0,"Du contrat social (1762) expose la volonte generale et la souverainete du peuple."),
 q(11,"moyen","montesquieu","Montesquieu est celebre pour la theorie de :",["la separation des pouvoirs","la volonte generale","l'imperatif categorique","l'etat de nature pacifique"],0,"Montesquieu distingue et separe les pouvoirs legislatif, executif et judiciaire."),
 q(12,"difficile","montesquieu","Les trois pouvoirs distingues par Montesquieu sont :",["legislatif, executif, judiciaire","royal, noble, populaire","civil, militaire, religieux","central, regional, local"],0,"Legislatif (faire les lois), executif (les appliquer), judiciaire (juger)."),
 q(13,"difficile","montesquieu","La formule de Montesquieu 'il faut que le pouvoir arrete le pouvoir' vise a :",["eviter l'abus de pouvoir","concentrer le pouvoir","supprimer les lois","abolir l'Etat"],0,"La separation et l'equilibre des pouvoirs empechent qu'un pouvoir n'abuse."),
 q(14,"moyen","machiavel","Dans Le Prince, Machiavel analyse le pouvoir :",["tel qu'il est, non tel qu'il devrait etre","comme un ideal moral","comme illegitime par nature","comme divin"],0,"Machiavel decrit la politique de facon realiste, en separant l'analyse du pouvoir de la morale."),
 q(15,"facile","distinction","La nation se distingue de l'Etat parce qu'elle est :",["une communaute unie par une histoire et une culture","l'organisation juridique du pouvoir","ceux qui gouvernent","un territoire seul"],0,"La nation est une communaute humaine ; l'Etat est l'organisation politique et juridique."),
 q(16,"moyen","distinction","Le gouvernement designe :",["ceux qui exercent le pouvoir","l'ensemble des citoyens","le territoire","la culture commune"],0,"Le gouvernement est l'instance qui exerce concretement le pouvoir executif."),
 q(17,"difficile","distinction","La legitimite d'un pouvoir se distingue de sa legalite : la legitimite est :",["la reconnaissance du pouvoir comme juste","la conformite aux lois en vigueur","le nombre de lois votees","la force militaire"],0,"Un pouvoir peut etre legal sans etre legitime, ou legitime sans etre encore legal."),
 q(18,"moyen","contrat","Dans les theories du contrat, l'etat de nature est :",["une hypothese theorique, non un fait historique","une periode datee de l'histoire","le regne des animaux","l'age d'or verifie"],0,"L'etat de nature est une fiction theorique servant a fonder l'Etat, non un fait avere."),
 q(19,"moyen","hobbes","Le 'Leviathan' designe chez Hobbes :",["l'Etat souverain tout-puissant","un monstre marin sans rapport","le peuple revolte","un dieu grec"],0,"Hobbes emprunte a la Bible ce nom pour figurer la puissance de l'Etat souverain."),
 q(20,"difficile","rousseau","La 'volonte generale' de Rousseau ne se confond pas avec :",["la somme des interets particuliers","le bien commun","la souverainete du peuple","la loi juste"],0,"La volonte generale vise le bien commun ; elle n'est pas la simple addition des interets particuliers (volonte de tous)."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez Etat, societe, nation et gouvernement.",["Societe : les individus vivant ensemble.","Nation : communaute d'histoire et de culture.","Etat : organisation juridique du pouvoir ; gouvernement : ceux qui l'exercent."],"Societe, nation, Etat et gouvernement sont quatre notions distinctes."),
 ex(2,"decouverte","weber","Expliquez la definition de l'Etat par Weber.",["L'Etat detient le monopole de la contrainte physique.","Cette violence est dite legitime (reconnue).","Nul autre ne peut legalement user de la force sur le territoire."],"L'Etat = monopole de la violence physique legitime (Weber)."),
 ex(3,"application","hobbes","Reconstituez l'argument de Hobbes en faveur d'un souverain absolu.",["L'etat de nature est une guerre de tous contre tous.","Par peur de la mort, les hommes cherchent la securite.","Ils remettent leur pouvoir a un souverain (le Leviathan)."],"De l'insecurite naturelle nait le besoin d'un souverain garantissant la paix."),
 ex(4,"application","locke","Presentez la conception de l'Etat chez Locke.",["L'etat de nature comporte deja des droits naturels.","L'Etat est institue pour proteger ces droits.","Le peuple garde un droit de resistance si l'Etat les viole."],"L'Etat protege les droits naturels ; sinon, droit de resistance."),
 ex(5,"application","rousseau","Expliquez la formule : par la volonte generale, on 'n'obeit qu'a soi-meme'.",["Le citoyen participe a la formation de la loi.","En obeissant a la loi, il obeit a une volonte qui est aussi la sienne.","Il reste donc libre en obeissant."],"Obeir a la loi qu'on a contribue a faire, c'est n'obeir qu'a soi : rester libre."),
 ex(6,"application","montesquieu","Presentez la separation des pouvoirs selon Montesquieu.",["Legislatif : faire les lois.","Executif : les appliquer.","Judiciaire : juger. Ils doivent etre separes pour eviter l'abus."],"Separer legislatif, executif et judiciaire pour que le pouvoir arrete le pouvoir."),
 ex(7,"approfondissement","comparaison","Comparez l'etat de nature chez Hobbes et chez Rousseau.",["Hobbes : etat de guerre, l'homme dangereux pour l'homme.","Rousseau : homme naturellement bon, corrompu par la societe.","Deux points de depart opposes pour penser le contrat."],"Hobbes : nature belliqueuse ; Rousseau : bonte naturelle corrompue par la societe."),
 ex(8,"approfondissement","machiavel","Expliquez pourquoi Machiavel separe politique et morale.",["Il decrit le pouvoir tel qu'il est, non tel qu'il devrait etre.","Le prince doit savoir user de la force et de la ruse.","La conservation de l'Etat prime sur l'ideal moral."],"Machiavel analyse le pouvoir de facon realiste, sans le juger a l'aune de la morale."),
 ex(9,"approfondissement","distinction","Distinguez legalite et legitimite d'un pouvoir.",["Legalite : conformite aux lois en vigueur.","Legitimite : reconnaissance du pouvoir comme juste.","Un pouvoir peut etre legal sans etre legitime."],"Legalite = conforme a la loi ; legitimite = reconnu comme juste."),
 ex(10,"approfondissement","synthese","Discutez : l'Etat est-il l'ennemi ou le garant de la liberte ?",["These 1 : l'Etat limite la liberte par ses lois et sa force.","These 2 : sans Etat, la liberte de chacun est menacee par les autres.","L'Etat de droit vise a concilier ordre et liberte."],"L'Etat peut menacer la liberte, mais l'Etat de droit la garantit aussi contre les autres."),
],
cartes=[
 card("Definition de l'Etat selon Weber ?","Le monopole de la violence physique legitime."),
 card("Etat de nature selon Hobbes ?","Une guerre de tous contre tous."),
 card("A qui attribue-t-on 'l'homme est un loup pour l'homme' ?","A Hobbes."),
 card("Pourquoi sortir de l'etat de nature selon Hobbes ?","Par peur de la mort violente, pour la securite."),
 card("Etat de nature selon Locke ?","Un etat avec des droits naturels (vie, liberte, propriete)."),
 card("Que garde le peuple chez Locke si l'Etat abuse ?","Un droit de resistance."),
 card("Qu'est-ce que la volonte generale (Rousseau) ?","La volonte visant le bien commun, a laquelle chacun obeit en restant libre."),
 card("Que theorise Montesquieu ?","La separation des pouvoirs (legislatif, executif, judiciaire)."),
 card("Que fait Machiavel dans Le Prince ?","Il analyse le pouvoir tel qu'il est, en separant politique et morale."),
 card("Legalite vs legitimite ?","Conforme a la loi vs reconnu comme juste."),
 card("Nation vs Etat ?","Communaute d'histoire et de culture vs organisation juridique du pouvoir."),
 card("L'etat de nature est-il un fait historique ?","Non, c'est une hypothese theorique."),
],
))

# =====================================================================
# 7. LA JUSTICE
# =====================================================================
CH.append(dict(
slug="justice", titre="La justice", prereqs=["L'Etat", "Le devoir"],
fiche_body=r"""
# La justice

> La justice designe a la fois une vertu (etre juste), une institution (rendre la justice) et un ideal (le juste). Le juste se confond-il avec ce qui est legal ? Faut-il traiter tout le monde de facon egale ou proportionnee ?

## 1. Distinguer les sens de la justice
La justice est une **vertu** (la disposition a rendre a chacun ce qui lui est du), une **institution** (les tribunaux qui appliquent le droit), et un **ideal** (le juste en soi). On distingue le **droit positif** (les lois effectivement en vigueur dans une societe) et le **droit naturel** (les principes de justice que l'on juge valables partout et toujours).

## 2. La justice comme harmonie : Platon
Pour **Platon**, la justice est l'harmonie de l'ame et de la cite : elle regne quand chaque partie remplit sa fonction propre sans empieter sur les autres (*La Republique*). L'ame juste est celle ou la raison gouverne, aidee du courage, sur les desirs.

## 3. Les formes de la justice : Aristote
**Aristote** distingue plusieurs formes de justice (*Ethique a Nicomaque*). La **justice distributive** repartit les biens et les honneurs selon le merite de chacun : c'est une egalite **proportionnelle** (geometrique). La **justice corrective** (ou commutative) retablit l'egalite dans les echanges et repare les torts : c'est une egalite **arithmetique**. Aristote ajoute l'**equite** (*epieikeia*), qui corrige la loi generale la ou son application aveugle serait injuste dans un cas particulier.

## 4. Legalite et legitimite ; la justice comme equite
Ce qui est **legal** (conforme a la loi) n'est pas toujours **juste** : une loi peut etre injuste. On distingue donc la **legalite** de la **legitimite**. Au XXe siecle, **John Rawls** propose une "justice comme equite" : pour trouver des principes justes, imaginons des individus choisissant les regles de la societe sous un **voile d'ignorance** (ignorant leur place future). Ils choisiraient des libertes egales pour tous, et n'accepteraient d'inegalites que si elles profitent aux plus defavorises (**principe de difference**) (*Theorie de la justice*).

## 5. Les erreurs a eviter
- Confondre egalite et equite : l'equite tient compte des situations, l'egalite stricte les ignore.
- Confondre droit positif (lois en vigueur) et droit naturel (principes universels supposes).
- Croire que le legal est toujours juste : la legalite ne garantit pas la justice.

## A retenir
- Justice : vertu, institution et ideal ; droit positif (lois) vs droit naturel (principes universels).
- Platon : la justice est l'harmonie de l'ame et de la cite, chacun a sa place.
- Aristote : justice distributive (proportionnelle au merite) et corrective (arithmetique) ; l'equite corrige la loi.
- Rawls : justice comme equite, voile d'ignorance, principe de difference.
""",
questions=[
 q(1,"facile","distinction","Le droit positif designe :",["les lois effectivement en vigueur dans une societe","les principes universels de justice","la vertu de justice","la justice divine"],0,"Le droit positif est l'ensemble des lois posees et en vigueur ; le droit naturel vise des principes universels."),
 q(2,"moyen","distinction","Le droit naturel se distingue du droit positif parce qu'il vise :",["des principes valables partout et toujours","les seules lois d'un pays","les coutumes locales","les decisions des tribunaux"],0,"Le droit naturel pretend a des principes universels, independants des lois positives particulieres."),
 q(3,"moyen","platon","Pour Platon, la justice dans la cite regne quand :",["chaque partie remplit sa fonction propre","tous font la meme chose","le plus fort gouverne seul","les lois sont abolies"],0,"La justice platonicienne est l'harmonie ou chacun accomplit sa tache sans empieter sur les autres."),
 q(4,"moyen","platon","L'ouvrage ou Platon traite de la justice et de la cite ideale est :",["La Republique","Le Contrat social","L'Ethique a Nicomaque","Le Prince"],0,"La Republique expose la conception platonicienne de la justice comme harmonie."),
 q(5,"difficile","aristote","La justice distributive, selon Aristote, repartit les biens :",["selon le merite (egalite proportionnelle)","de facon strictement egale pour tous","au hasard","selon la seule richesse"],0,"La justice distributive suit une egalite proportionnelle (geometrique), selon le merite."),
 q(6,"difficile","aristote","La justice corrective (commutative) d'Aristote repose sur :",["une egalite arithmetique","une egalite proportionnelle","le merite","la naissance"],0,"La justice corrective retablit l'egalite arithmetique dans les echanges et repare les torts."),
 q(7,"difficile","aristote","L'equite (epieikeia), selon Aristote, sert a :",["corriger la loi generale la ou elle serait injuste","supprimer toutes les lois","punir plus severement","favoriser les riches"],0,"L'equite corrige l'application aveugle de la loi generale dans un cas particulier."),
 q(8,"moyen","distinction","Ce qui est legal est-il toujours juste ?",["Non : une loi peut etre injuste","Oui, toujours","La question est absurde","Seulement dans une monarchie"],0,"La legalite (conformite a la loi) ne garantit pas la justice : une loi peut etre injuste."),
 q(9,"moyen","distinction","Egalite et equite se distinguent en ceci que l'equite :",["tient compte des situations particulieres","ignore les differences","traite tous de facon identique","est synonyme d'egalite stricte"],0,"L'equite ajuste le traitement aux situations, la ou l'egalite stricte les ignore."),
 q(10,"difficile","rawls","John Rawls propose une theorie de la justice comme :",["equite","utilite","force","tradition"],0,"Rawls intitule sa conception 'justice comme equite' (justice as fairness)."),
 q(11,"difficile","rawls","Le 'voile d'ignorance' de Rawls est une experience de pensee ou l'on choisit les regles :",["sans connaitre sa place future dans la societe","en connaissant tous ses avantages","selon son interet immediat","par tirage au sort des lois"],0,"Sous le voile d'ignorance, on ignore sa position future, ce qui garantit l'impartialite des principes choisis."),
 q(12,"difficile","rawls","Le 'principe de difference' de Rawls admet des inegalites seulement si :",["elles profitent aux plus defavorises","elles enrichissent les plus riches","elles sont voulues par la majorite","elles sont anciennes"],0,"Les inegalites ne sont justes, pour Rawls, que si elles beneficient aux plus defavorises."),
 q(13,"moyen","rawls","L'ouvrage majeur de Rawls s'intitule :",["Theorie de la justice","La Republique","Du contrat social","Le Leviathan"],0,"Theorie de la justice (1971) expose le voile d'ignorance et le principe de difference."),
 q(14,"facile","distinction","La justice comme vertu designe :",["la disposition a rendre a chacun son du","l'ensemble des tribunaux","le code penal","la police"],0,"Comme vertu, la justice est la disposition morale a rendre a chacun ce qui lui revient."),
 q(15,"moyen","distinction","La justice comme institution designe :",["les tribunaux qui appliquent le droit","une vertu de l'ame","un ideal abstrait","un sentiment"],0,"Comme institution, la justice est l'appareil (tribunaux, juges) qui applique le droit."),
 q(16,"moyen","aristote","Distribuer des recompenses selon le merite releve, chez Aristote, de la justice :",["distributive","corrective","penale seule","divine"],0,"La repartition selon le merite est l'objet de la justice distributive."),
 q(17,"moyen","aristote","Reparer un tort ou un dommage releve de la justice :",["corrective","distributive","proportionnelle","politique"],0,"La justice corrective retablit l'equilibre rompu par un tort : elle repare arithmetiquement."),
 q(18,"moyen","distinction","'Traiter egalement les egaux et inegalement les inegaux' resume :",["l'idee d'egalite proportionnelle","l'egalite arithmetique pure","le refus de toute egalite","le principe de difference de Rawls"],0,"Cette formule d'inspiration aristotelicienne exprime l'egalite proportionnelle (au merite ou a la situation)."),
 q(19,"difficile","platon","Dans l'ame juste selon Platon, la partie qui doit gouverner est :",["la raison","le desir","la colere seule","l'imagination"],0,"L'ame est juste quand la raison gouverne, aidee du courage, sur la partie desirante."),
 q(20,"moyen","distinction","La distinction legalite / legitimite permet de dire qu'une loi peut etre :",["legale sans etre legitime","toujours legitime si elle est votee","legitime sans exister","sans rapport avec la justice"],0,"Une loi en vigueur (legale) peut ne pas etre reconnue comme juste (legitime)."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez les trois sens de la justice.",["Vertu : rendre a chacun son du.","Institution : les tribunaux qui appliquent le droit.","Ideal : le juste en soi."],"Vertu, institution, ideal."),
 ex(2,"decouverte","distinction","Distinguez droit positif et droit naturel.",["Droit positif : les lois en vigueur ici et maintenant.","Droit naturel : principes de justice supposes universels.","Le droit naturel sert a juger le droit positif."],"Droit positif = lois en vigueur ; droit naturel = principes universels."),
 ex(3,"application","platon","Expliquez la justice comme harmonie chez Platon.",["La cite comprend plusieurs fonctions (gouverner, defendre, produire).","La justice regne quand chacun tient son role sans empieter.","De meme, l'ame juste est gouvernee par la raison."],"La justice est l'harmonie ou chaque partie remplit sa fonction propre."),
 ex(4,"application","aristote","Distinguez justice distributive et justice corrective.",["Distributive : repartir biens et honneurs selon le merite (egalite proportionnelle).","Corrective : reparer les torts et egaliser les echanges (egalite arithmetique).","La premiere tient compte du merite, la seconde non."],"Distributive = proportionnelle au merite ; corrective = arithmetique."),
 ex(5,"application","aristote","Expliquez le role de l'equite selon Aristote.",["La loi est generale et ne prevoit pas tous les cas.","Son application aveugle peut etre injuste dans un cas particulier.","L'equite corrige la loi pour retablir la justice."],"L'equite corrige la loi generale la ou son application serait injuste."),
 ex(6,"application","distinction","Illustrez la difference entre egalite et equite.",["Egalite stricte : donner la meme chose a tous.","Equite : donner a chacun selon sa situation ou son besoin.","Ex. : un meme examen adapte pour un eleve handicape releve de l'equite."],"Egalite = traitement identique ; equite = traitement ajuste aux situations."),
 ex(7,"approfondissement","rawls","Presentez l'experience du voile d'ignorance.",["On imagine choisir les regles de la societe sans connaitre sa place future.","Ignorant si l'on sera riche ou pauvre, on choisit des regles impartiales.","On garantit ainsi l'equite des principes."],"Choisir les regles sans connaitre sa position future assure des principes impartiaux."),
 ex(8,"approfondissement","rawls","Enoncez le principe de difference de Rawls.",["Les libertes de base sont egales pour tous.","Les inegalites ne sont admises que si elles profitent aux plus defavorises.","Sinon, elles sont injustes."],"Les inegalites ne sont justes que si elles beneficient aux plus defavorises."),
 ex(9,"approfondissement","distinction","Discutez : 'ce qui est legal est-il juste ?'.",["Le legal est ce qui est conforme aux lois en vigueur.","Une loi peut etre injuste (ex. lois discriminatoires du passe).","Donc legalite et justice ne coincident pas necessairement."],"Non : la conformite a la loi ne garantit pas la justice."),
 ex(10,"approfondissement","synthese","Comparez Aristote et Rawls sur l'egalite.",["Aristote : egalite proportionnelle au merite (justice distributive).","Rawls : egalite des libertes, inegalites justifiees seulement si elles aident les plus faibles.","Deux facons de penser une egalite qui n'est pas uniformite."],"Aristote proportionne au merite ; Rawls corrige les inegalites au profit des plus defavorises."),
],
cartes=[
 card("Trois sens de la justice ?","Vertu, institution, ideal."),
 card("Droit positif vs droit naturel ?","Lois en vigueur vs principes universels supposes."),
 card("La justice selon Platon ?","L'harmonie ou chaque partie de l'ame et de la cite tient son role."),
 card("Justice distributive (Aristote) ?","Repartir selon le merite : egalite proportionnelle."),
 card("Justice corrective (Aristote) ?","Reparer les torts et egaliser les echanges : egalite arithmetique."),
 card("Qu'est-ce que l'equite selon Aristote ?","La correction de la loi generale la ou elle serait injuste."),
 card("Ce qui est legal est-il toujours juste ?","Non : une loi peut etre injuste."),
 card("Egalite vs equite ?","Traitement identique vs traitement ajuste aux situations."),
 card("La justice selon Rawls ?","La justice comme equite (fairness)."),
 card("Qu'est-ce que le voile d'ignorance (Rawls) ?","Choisir les regles sans connaitre sa place future dans la societe."),
 card("Principe de difference (Rawls) ?","Les inegalites ne sont justes que si elles profitent aux plus defavorises."),
 card("Legalite vs legitimite ?","Conforme a la loi vs reconnu comme juste."),
],
))

# =====================================================================
# 8. LE LANGAGE
# =====================================================================
CH.append(dict(
slug="langage", titre="Le langage", prereqs=["La conscience", "La verite"],
fiche_body=r"""
# Le langage

> Le langage nous permet de communiquer, de penser, d'agir sur autrui. Est-il le propre de l'homme ? Le mot dit-il fidelement la chose, ou la trahit-il ? Pense-t-on sans langage ?

## 1. Distinguer langage, langue et parole
Le **langage** est la faculte generale d'exprimer sa pensee par des signes. Une **langue** est un systeme particulier de signes (le francais, l'anglais). La **parole** est l'usage individuel qu'un locuteur fait de la langue. **Saussure** distingue ainsi la **langue** (systeme social) et la **parole** (acte individuel).

## 2. Le langage, propre de l'homme ?
Pour **Aristote**, l'homme est le seul "animal doue de logos" : les animaux ont une voix qui exprime le plaisir ou la douleur, mais seul l'homme a un langage qui distingue le juste de l'injuste, l'utile du nuisible (*Politique*). Pour **Descartes**, le langage est le critere du propre de l'homme : les animaux, semblables a des machines, n'ont pas de vrai langage, car ils ne combinent pas des mots pour exprimer des pensees nouvelles.

## 3. Le signe linguistique : Saussure
**Saussure** analyse le signe linguistique comme l'union d'un **signifiant** (l'image acoustique, les sons) et d'un **signifie** (le concept). Il soutient que le lien entre les deux est **arbitraire** : rien dans la chose n'impose le mot qui la designe (d'ou la diversite des langues) (*Cours de linguistique generale*).

## 4. Le langage trahit-il la pensee ?
Pour **Bergson**, le langage, fait de mots generaux, fige et deforme la richesse mouvante et singuliere de la vie interieure : les mots "ecrasent" les nuances. **Hegel**, au contraire, montre que c'est en nommant les choses que la pensee les saisit. Pour **Wittgenstein**, "les limites de mon langage signifient les limites de mon monde" (*Tractatus*) ; plus tard, il analyse les "jeux de langage", ou le sens d'un mot est son usage.

## 5. Les erreurs a eviter
- Confondre langage (faculte), langue (systeme) et parole (usage individuel).
- Croire que le lien mot-chose est naturel : pour Saussure, il est arbitraire.
- Reduire le langage a la seule communication : il sert aussi a penser et a agir.

## A retenir
- Langage (faculte) / langue (systeme) / parole (usage individuel) : distinction de Saussure.
- Aristote : l'homme, animal doue de logos, distingue le juste de l'injuste par le langage.
- Saussure : le signe unit signifiant et signifie ; le lien est arbitraire.
- Bergson : les mots generaux figent la vie interieure singuliere.
""",
questions=[
 q(1,"facile","distinction","La distinction langue / parole est due a :",["Saussure","Aristote","Descartes","Bergson"],0,"Saussure distingue la langue (systeme social) de la parole (acte individuel)."),
 q(2,"moyen","distinction","La 'langue', au sens de Saussure, est :",["un systeme de signes partage par une communaute","l'usage individuel d'un locuteur","la faculte generale de parler","un cri animal"],0,"La langue est le systeme social de signes ; la parole en est l'usage individuel."),
 q(3,"moyen","distinction","La 'parole', chez Saussure, designe :",["l'usage individuel de la langue","le systeme abstrait","la faculte de langage en general","l'ecriture seule"],0,"La parole est l'acte individuel par lequel un locuteur utilise la langue."),
 q(4,"moyen","aristote","Aristote definit l'homme comme le seul animal :",["doue de logos (raison et langage)","depourvu de voix","incapable de vie sociale","sans raison"],0,"L'homme est 'animal doue de logos' : il a un langage qui distingue le juste de l'injuste."),
 q(5,"difficile","aristote","Selon Aristote, la difference entre la voix animale et le langage humain est que le langage :",["distingue le juste de l'injuste, l'utile du nuisible","exprime seulement le plaisir et la douleur","est plus fort","est inutile"],0,"La voix animale exprime plaisir et douleur ; le langage humain porte sur le juste, l'utile, etc."),
 q(6,"moyen","descartes","Pour Descartes, le langage est :",["le critere du propre de l'homme","commun a l'homme et a l'animal","une simple habitude","sans importance"],0,"Descartes fait du vrai langage (combiner des mots pour des pensees) le propre de l'homme."),
 q(7,"difficile","descartes","Selon Descartes, les animaux n'ont pas de vrai langage parce qu'ils :",["ne combinent pas des mots pour exprimer des pensees nouvelles","n'ont pas de voix","ne vivent pas en groupe","ne percoivent rien"],0,"Meme s'ils emettent des sons, les animaux ne composent pas librement des signes pour exprimer des pensees."),
 q(8,"difficile","saussure","Le signe linguistique, selon Saussure, unit :",["un signifiant et un signifie","deux choses reelles","une image et un objet materiel","un son et une couleur"],0,"Le signe unit le signifiant (image acoustique) et le signifie (concept)."),
 q(9,"difficile","saussure","Le 'signifiant', chez Saussure, designe :",["l'image acoustique (les sons du mot)","le concept","la chose reelle","le locuteur"],0,"Le signifiant est la face sonore du signe ; le signifie en est le concept."),
 q(10,"difficile","saussure","Le 'signifie', chez Saussure, designe :",["le concept associe au mot","les sons du mot","la chose materielle","la phrase entiere"],0,"Le signifie est le concept que le signe evoque, distinct de la chose reelle."),
 q(11,"difficile","saussure","Dire que le signe linguistique est 'arbitraire' signifie que :",["rien dans la chose n'impose le mot qui la designe","les mots sont choisis au hasard par chacun","la langue n'a pas de regles","chacun invente ses mots"],0,"L'arbitraire du signe : le lien entre signifiant et signifie n'est pas naturel, d'ou la diversite des langues."),
 q(12,"moyen","saussure","L'ouvrage de reference de Saussure est :",["le Cours de linguistique generale","le Tractatus","les Pensees","le Cratyle"],0,"Le Cours de linguistique generale (publie a partir de ses lecons) fonde la linguistique moderne."),
 q(13,"moyen","bergson","Pour Bergson, le langage a tendance a :",["figer et deformer la richesse mouvante de la vie interieure","exprimer parfaitement les nuances","supprimer la pensee","imiter la nature"],0,"Les mots generaux, selon Bergson, ecrasent les nuances singulieres du vecu."),
 q(14,"difficile","wittgenstein","La formule 'les limites de mon langage signifient les limites de mon monde' est de :",["Wittgenstein","Saussure","Bergson","Hegel"],0,"Elle figure dans le Tractatus logico-philosophicus de Wittgenstein."),
 q(15,"moyen","wittgenstein","Par la notion de 'jeux de langage', Wittgenstein souligne que le sens d'un mot :",["depend de son usage","est fixe une fois pour toutes","est donne par la nature","n'existe pas"],0,"Le second Wittgenstein defend l'idee que le sens d'un mot reside dans son usage."),
 q(16,"facile","distinction","La faculte generale d'exprimer sa pensee par des signes s'appelle :",["le langage","une langue","la parole","le signe"],0,"Le langage est la faculte ; une langue en est une realisation particuliere."),
 q(17,"moyen","distinction","La diversite des langues humaines s'explique bien par :",["l'arbitraire du signe","une necessite naturelle","le hasard total","l'absence de regles"],0,"Si le lien mot-chose etait naturel, il n'y aurait qu'une langue : c'est l'arbitraire qui rend possible leur diversite."),
 q(18,"moyen","hegel","Pour Hegel, c'est en nommant les choses que :",["la pensee les saisit","on les detruit reellement","on les rend fausses","on les cache"],0,"Hegel valorise le mot : nommer, c'est saisir la chose par la pensee."),
 q(19,"moyen","fonction","Outre communiquer, le langage sert aussi a :",["penser et agir sur autrui","seulement decorer","empecher la pensee","imiter les animaux"],0,"Le langage sert a penser (formuler des idees) et a agir (promettre, ordonner), pas seulement a informer."),
 q(20,"difficile","platon","Le dialogue de Platon consacre a la question de la justesse des noms est :",["le Cratyle","le Leviathan","l'Ethique a Nicomaque","le Discours de la methode"],0,"Le Cratyle discute si les noms sont justes par nature ou par convention."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez langage, langue et parole.",["Langage : la faculte d'exprimer sa pensee par des signes.","Langue : un systeme particulier (le francais).","Parole : l'usage individuel qu'en fait un locuteur."],"Langage = faculte ; langue = systeme ; parole = usage individuel."),
 ex(2,"decouverte","aristote","Expliquez pourquoi, selon Aristote, le langage est le propre de l'homme.",["Les animaux ont une voix : plaisir et douleur.","L'homme a un langage : le juste, l'utile, le bien.","Le langage suppose la raison (logos)."],"Seul l'homme a un langage distinguant le juste de l'injuste : il est 'doue de logos'."),
 ex(3,"application","descartes","Presentez l'argument de Descartes sur le langage et les animaux.",["Les animaux emettent des signaux fixes.","Ils ne combinent pas des mots pour des pensees nouvelles.","Donc ils n'ont pas de vrai langage : c'est le propre de l'homme."],"Le vrai langage combine des signes pour exprimer des pensees : il est propre a l'homme."),
 ex(4,"application","saussure","Decrivez le signe linguistique selon Saussure.",["Le signe unit un signifiant (sons) et un signifie (concept).","Il ne relie pas directement un mot et une chose.","Signifiant et signifie sont les deux faces d'un meme signe."],"Le signe = signifiant (image acoustique) + signifie (concept)."),
 ex(5,"application","saussure","Expliquez l'arbitraire du signe.",["Rien dans la chose n'impose le mot qui la designe.","Preuve : les langues nomment differemment la meme chose.","Le lien signifiant-signifie est donc conventionnel."],"Le lien mot-concept est arbitraire, d'ou la diversite des langues."),
 ex(6,"application","distinction","Montrez que l'arbitraire du signe explique la diversite des langues.",["Si le mot decoulait de la chose, il n'y aurait qu'une langue.","Or les langues designent differemment la meme realite.","Donc le lien est arbitraire (conventionnel)."],"La pluralite des langues prouve que le lien mot-chose n'est pas naturel."),
 ex(7,"approfondissement","bergson","Expliquez la critique du langage par Bergson.",["Les mots sont generaux et communs.","Ils ne captent pas la singularite mouvante du vecu.","Le langage fige et deforme la vie interieure."],"Les mots generaux ecrasent les nuances singulieres de la conscience."),
 ex(8,"approfondissement","wittgenstein","Expliquez la formule : 'les limites de mon langage signifient les limites de mon monde'.",["Ce que je peux dire delimite ce que je peux penser clairement.","Un monde sans mots pour le dire reste hors de portee.","D'ou l'importance du langage pour l'acces au monde."],"Le langage delimite le pensable : ce qu'on ne peut dire echappe a la pensee claire."),
 ex(9,"approfondissement","fonction","Montrez que le langage ne sert pas qu'a communiquer.",["Il sert a penser : formuler et enchainer des idees.","Il sert a agir : promettre, ordonner, s'engager.","La communication n'est qu'une de ses fonctions."],"Le langage sert aussi a penser et a agir, pas seulement a informer."),
 ex(10,"approfondissement","synthese","Opposez deux theses sur le rapport du mot et de la pensee.",["Bergson : le mot trahit et fige la pensee vive.","Hegel : c'est en nommant que la pensee saisit les choses.","On peut soutenir que le langage a la fois limite et rend possible la pensee."],"Bergson : le mot trahit la pensee ; Hegel : le mot permet de la saisir."),
],
cartes=[
 card("Langage, langue, parole ?","Faculte / systeme particulier / usage individuel (Saussure)."),
 card("Comment Aristote definit-il l'homme par le langage ?","Animal doue de logos, distinguant le juste de l'injuste."),
 card("Voix animale vs langage humain (Aristote) ?","Plaisir/douleur vs juste/injuste, utile/nuisible."),
 card("Le langage selon Descartes ?","Le critere du propre de l'homme ; les animaux n'ont pas de vrai langage."),
 card("De quoi est fait le signe selon Saussure ?","D'un signifiant (sons) et d'un signifie (concept)."),
 card("Qu'est-ce que l'arbitraire du signe ?","Rien dans la chose n'impose le mot qui la designe."),
 card("Qu'explique l'arbitraire du signe ?","La diversite des langues."),
 card("La critique du langage par Bergson ?","Les mots generaux figent la vie interieure singuliere."),
 card("Qui a dit 'les limites de mon langage sont les limites de mon monde' ?","Wittgenstein (Tractatus)."),
 card("Qu'est-ce qu'un 'jeu de langage' (Wittgenstein) ?","Le sens d'un mot reside dans son usage."),
 card("Le mot selon Hegel ?","C'est en nommant que la pensee saisit la chose."),
 card("A quoi sert le langage, outre communiquer ?","A penser et a agir sur autrui."),
],
))

# =====================================================================
# 9. LA LIBERTE
# =====================================================================
CH.append(dict(
slug="liberte", titre="La liberte", prereqs=["La conscience", "Le devoir"],
fiche_body=r"""
# La liberte

> Etre libre, est-ce faire ce que l'on veut ? Sommes-nous vraiment libres, ou nos choix sont-ils determines par des causes qui nous echappent ? La liberte est-elle un fait, ou une conquete ?

## 1. Distinguer liberte, libre arbitre et liberation
La **liberte** peut designer l'absence de contrainte exterieure (liberte d'action), le **libre arbitre** (le pouvoir de choisir entre plusieurs possibles), ou encore une **liberte interieure** (maitrise de soi). Il faut distinguer le **determinisme** (tout a une cause) du **fatalisme** (les evenements arriveraient quoi qu'on fasse). Le determinisme ne nie pas necessairement l'action ; le fatalisme, si.

## 2. La liberte comme libre arbitre : Descartes
Pour **Descartes**, la volonte est infinie, et le libre arbitre est ce qui nous rend semblables a Dieu. Mais il distingue des degres : la **liberte d'indifference** (choisir sans raison, au hasard) est le plus bas degre de la liberte ; la vraie liberte consiste a se determiner d'apres le vrai et le bien clairement percus.

## 3. La liberte contestee : Spinoza et le determinisme
**Spinoza** nie le libre arbitre : nous nous croyons libres parce que nous avons conscience de nos desirs, mais nous ignorons les causes qui les determinent. La liberte n'est pas l'absence de cause, mais la **necessite comprise** : est libre ce qui agit selon la seule necessite de sa nature. Le determinisme affirme que tout evenement a une cause ; il s'oppose a l'idee d'un choix sans cause.

## 4. La liberte comme autonomie et comme condition : Kant, Sartre, Rousseau
Pour **Kant**, etre libre, c'est etre **autonome** : obeir a la loi qu'on se donne soi-meme, par opposition a l'**heteronomie** (obeir a ses penchants). Pour **Sartre**, "l'existence precede l'essence" : l'homme n'a pas de nature qui le determine, il se fait par ses choix ; il est "condamne a etre libre" et pleinement responsable (*L'existentialisme est un humanisme*). **Rousseau** distingue liberte naturelle et liberte civile, et affirme qu'obeir a la loi qu'on s'est prescrite est la liberte.

## 5. Les erreurs a eviter
- Confondre determinisme et fatalisme : le premier n'interdit pas d'agir, le second si.
- Confondre liberte et absence de toute regle : pour Kant, la liberte est l'autonomie (se donner sa loi).
- Croire que Spinoza supprime toute liberte : il la redefinit comme necessite comprise.

## A retenir
- Distinguer liberte d'action, libre arbitre et liberte interieure ; determinisme vs fatalisme.
- Descartes : le libre arbitre ; la liberte d'indifference est le plus bas degre.
- Spinoza : pas de libre arbitre ; nous ignorons les causes qui nous determinent.
- Sartre : l'existence precede l'essence, l'homme est condamne a etre libre ; Kant : liberte = autonomie.
""",
questions=[
 q(1,"facile","distinction","Le libre arbitre designe :",["le pouvoir de choisir entre plusieurs possibles","l'absence de toute pensee","la contrainte exterieure","le hasard des evenements"],0,"Le libre arbitre est le pouvoir de la volonte de choisir entre plusieurs possibilites."),
 q(2,"moyen","distinction","Le determinisme se distingue du fatalisme parce que le determinisme :",["affirme que tout a une cause, sans nier l'action","affirme que les evenements arrivent quoi qu'on fasse","nie toute causalite","est une superstition"],0,"Le determinisme (tout a une cause) n'interdit pas d'agir ; le fatalisme dit que l'issue est fixee quoi qu'on fasse."),
 q(3,"moyen","distinction","Le fatalisme consiste a croire que :",["les evenements arriveront quoi qu'on fasse","chaque cause produit un effet","l'homme est responsable","le futur depend de nos actes"],0,"Le fatalisme pose un destin inevitable, independant de nos actions."),
 q(4,"moyen","descartes","Pour Descartes, le libre arbitre nous rend :",["semblables a Dieu","identiques aux animaux","esclaves des passions","incapables de juger"],0,"Descartes voit dans la volonte libre ce par quoi l'homme porte l'image de Dieu."),
 q(5,"difficile","descartes","La 'liberte d'indifference', selon Descartes, est :",["le plus bas degre de la liberte","la plus haute liberte","une contrainte","l'ignorance totale"],0,"Choisir sans aucune raison (indifference) est, pour Descartes, le degre le plus bas de la liberte."),
 q(6,"difficile","spinoza","Spinoza soutient que le sentiment de liberte vient de ce que :",["nous ignorons les causes qui nous determinent","nous n'avons aucun desir","nous choisissons sans cause","nous sommes tout-puissants"],0,"Nous nous croyons libres parce que nous connaissons nos desirs mais ignorons leurs causes."),
 q(7,"difficile","spinoza","Pour Spinoza, la liberte veritable est :",["la necessite comprise (agir selon sa nature)","l'absence de toute cause","le pur hasard","l'indifference du choix"],0,"Est libre, chez Spinoza, ce qui agit par la seule necessite de sa nature : la liberte est necessite comprise."),
 q(8,"moyen","spinoza","Spinoza nie :",["le libre arbitre","l'existence des desirs","la pensee","la nature"],0,"Spinoza refuse le libre arbitre : nos choix ont des causes, meme ignorees."),
 q(9,"difficile","kant","Pour Kant, etre libre, c'est etre :",["autonome (obeir a la loi qu'on se donne)","heteronome","sans aucune loi","determine par ses penchants"],0,"La liberte kantienne est l'autonomie : se donner a soi-meme sa loi morale."),
 q(10,"moyen","kant","L'heteronomie, opposee a la liberte selon Kant, consiste a :",["obeir a ses penchants ou a une autorite exterieure","se donner sa propre loi","raisonner par soi-meme","agir par devoir"],0,"L'heteronomie est le fait de recevoir sa loi de l'exterieur (desirs, autorite) : c'est le contraire de l'autonomie."),
 q(11,"difficile","sartre","La formule 'l'existence precede l'essence' est de :",["Sartre","Descartes","Spinoza","Kant"],0,"Sartre resume ainsi l'existentialisme : l'homme existe d'abord, puis se definit par ses choix."),
 q(12,"difficile","sartre","Dire que l'homme est 'condamne a etre libre' (Sartre) signifie :",["qu'il ne peut echapper a sa liberte ni a sa responsabilite","qu'il est prisonnier","qu'il n'a aucun choix","que la liberte est un chatiment injuste"],0,"L'homme n'a pas choisi d'etre libre, mais l'etant, il est responsable de tout ce qu'il fait."),
 q(13,"moyen","sartre","Pour Sartre, l'homme n'a pas de nature prealable qui le determine ; il :",["se fait par ses choix","est fixe des la naissance","obeit a son instinct","suit un destin ecrit"],0,"L'existence precedant l'essence, l'homme se construit lui-meme par ses actes."),
 q(14,"moyen","rousseau","Pour Rousseau, obeir a la loi qu'on s'est prescrite est :",["la liberte","l'esclavage","une contrainte injuste","une illusion"],0,"Rousseau ecrit que l'obeissance a la loi qu'on s'est prescrite est la liberte (civile)."),
 q(15,"facile","distinction","La liberte comme absence de contrainte exterieure est la liberte :",["d'action","interieure seule","d'indifference","morale"],0,"La liberte d'action est l'absence d'obstacle exterieur a ce que l'on veut faire."),
 q(16,"moyen","distinction","La liberte interieure (maitrise de soi) est surtout mise en avant par :",["les stoiciens","les sceptiques radicaux","les fatalistes","les sophistes"],0,"Les stoiciens font consister la liberte dans la maitrise de soi et l'accord avec la raison."),
 q(17,"difficile","spinoza","L'image que donne Spinoza pour illustrer l'illusion de liberte est celle de :",["la pierre qui, lancee, se croirait libre de son mouvement","l'oiseau qui vole","l'homme qui dort","la riviere qui coule vers la mer"],0,"Spinoza imagine une pierre en mouvement qui, consciente, se croirait libre alors qu'elle est determinee."),
 q(18,"moyen","distinction","Etre libre au sens du libre arbitre suppose :",["plusieurs possibles entre lesquels choisir","une seule voie possible","l'absence de volonte","l'ignorance totale"],0,"Le libre arbitre implique une alternative reelle entre plusieurs possibles."),
 q(19,"difficile","sartre","La 'mauvaise foi', chez Sartre, consiste a :",["se cacher sa propre liberte pour fuir sa responsabilite","dire la verite","obeir a la loi morale","raisonner logiquement"],0,"La mauvaise foi est la conduite par laquelle on se ment pour se pretendre non libre, non responsable."),
 q(20,"moyen","kant","Chez Kant, la liberte et la loi morale sont liees : la loi morale est la :",["condition qui revele notre liberte","preuve que nous sommes determines","suppression de la liberte","cause de l'heteronomie"],0,"Nous ne connaissons notre liberte que par la conscience du devoir : la loi morale en est la 'ratio cognoscendi'."),
],
exos=[
 ex(1,"decouverte","distinction","Distinguez liberte d'action, libre arbitre et liberte interieure.",["Liberte d'action : absence de contrainte exterieure.","Libre arbitre : pouvoir de choisir entre plusieurs possibles.","Liberte interieure : maitrise de soi."],"Trois sens : agir sans obstacle, choisir, se maitriser."),
 ex(2,"decouverte","distinction","Distinguez determinisme et fatalisme.",["Determinisme : tout evenement a une cause.","Fatalisme : l'issue arrivera quoi qu'on fasse.","Le determinisme n'interdit pas d'agir, le fatalisme si."],"Determinisme = causalite ; fatalisme = destin inevitable."),
 ex(3,"application","descartes","Expliquez ce qu'est la liberte d'indifference chez Descartes.",["C'est choisir sans aucune raison, au hasard.","Descartes y voit le plus bas degre de la liberte.","La vraie liberte suit le vrai et le bien percus clairement."],"La liberte d'indifference (choisir sans raison) est le degre le plus bas de la liberte."),
 ex(4,"application","spinoza","Expliquez pourquoi, selon Spinoza, nous nous croyons libres a tort.",["Nous avons conscience de nos desirs.","Mais nous ignorons les causes qui les produisent.","D'ou l'illusion d'un choix sans cause."],"Nous connaissons nos desirs mais non leurs causes : d'ou l'illusion du libre arbitre."),
 ex(5,"application","spinoza","Expliquez la definition spinoziste de la liberte comme 'necessite comprise'.",["N'est pas libre ce qui est sans cause.","Est libre ce qui agit selon la seule necessite de sa nature.","Comprendre les causes, c'est deja une forme de liberte."],"La liberte n'est pas l'absence de cause mais l'action selon sa propre nature comprise."),
 ex(6,"application","kant","Expliquez la liberte comme autonomie chez Kant.",["Autonomie : se donner a soi-meme sa loi (par la raison).","Heteronomie : obeir a ses penchants ou a autrui.","Etre libre, c'est etre autonome."],"La liberte est l'autonomie : obeir a la loi qu'on se donne soi-meme."),
 ex(7,"approfondissement","sartre","Expliquez la formule 'l'existence precede l'essence'.",["L'homme existe d'abord, sans nature fixee.","Il se definit ensuite par ses choix et ses actes.","Il n'y a donc pas de 'nature humaine' qui le determine."],"L'homme existe d'abord et se fait par ses choix : aucune essence ne le determine."),
 ex(8,"approfondissement","sartre","Expliquez pourquoi l'homme est 'condamne a etre libre'.",["Il n'a pas choisi d'etre libre.","Mais une fois jete dans le monde, il est libre de ses actes.","Il ne peut donc se decharger de sa responsabilite."],"L'homme ne peut echapper a sa liberte : il est pleinement responsable de ce qu'il fait."),
 ex(9,"approfondissement","sartre","Analysez la notion de mauvaise foi.",["La mauvaise foi consiste a se mentir a soi-meme.","On se pretend determine pour fuir sa responsabilite.","Ex. : 'je n'avais pas le choix'."],"La mauvaise foi nie sa propre liberte pour se decharger de sa responsabilite."),
 ex(10,"approfondissement","synthese","Discutez : le determinisme rend-il la liberte impossible ?",["Objection : si tout est cause, aucun choix n'est libre.","Reponse (Spinoza) : la liberte est la necessite comprise.","Reponse (Kant) : la liberte morale n'est pas dans l'ordre des causes physiques."],"On peut concilier causalite et liberte : liberte comme necessite comprise (Spinoza) ou autonomie (Kant)."),
],
cartes=[
 card("Libre arbitre ?","Le pouvoir de choisir entre plusieurs possibles."),
 card("Determinisme vs fatalisme ?","Tout a une cause (n'interdit pas d'agir) vs destin inevitable quoi qu'on fasse."),
 card("La liberte d'indifference selon Descartes ?","Choisir sans raison : le plus bas degre de la liberte."),
 card("Pourquoi nous croyons-nous libres, selon Spinoza ?","Parce que nous ignorons les causes qui nous determinent."),
 card("La liberte selon Spinoza ?","La necessite comprise : agir selon sa propre nature."),
 card("La liberte selon Kant ?","L'autonomie : obeir a la loi qu'on se donne soi-meme."),
 card("Autonomie vs heteronomie ?","Se donner sa loi vs obeir a ses penchants ou a autrui."),
 card("Qui a dit 'l'existence precede l'essence' ?","Sartre."),
 card("Que signifie 'condamne a etre libre' (Sartre) ?","L'homme ne peut echapper a sa liberte ni a sa responsabilite."),
 card("La mauvaise foi selon Sartre ?","Se mentir pour se pretendre non libre et fuir sa responsabilite."),
 card("La liberte selon Rousseau ?","Obeir a la loi qu'on s'est prescrite."),
 card("Image de la pierre chez Spinoza ?","Une pierre lancee qui, consciente, se croirait libre de son mouvement."),
],
))

# =====================================================================
# 10. LA NATURE
# =====================================================================
CH.append(dict(
slug="nature", titre="La nature", prereqs=["La technique", "La liberte"],
fiche_body=r"""
# La nature

> Le mot 'nature' a plusieurs sens : l'ensemble de ce qui existe sans l'homme, l'essence d'une chose, ou ce qui s'oppose a la culture. La nature obeit-elle a des fins ? L'homme doit-il la dominer ou la respecter ?

## 1. Les sens du mot nature
La **nature** peut designer : l'ensemble des choses qui existent independamment de l'homme (par opposition a l'artificiel) ; l'**essence** d'une chose (sa 'nature propre') ; ou ce qui s'oppose a la **culture**. On distingue une **loi de la nature** (physique, descriptive : ce qui est) et une **loi morale ou juridique** (normative, prescriptive : ce qui doit etre).

## 2. Nature et finalite : Aristote contre le mecanisme
Pour **Aristote**, "la nature ne fait rien en vain" : chaque etre naturel tend vers une fin (*telos*) inscrite en lui, comme le gland tend a devenir un chene. C'est une conception **finaliste** de la nature. Aristote distingue les etres **par nature** (qui ont en eux leur principe de mouvement) et les produits de l'**art** (dont le principe est exterieur). A l'oppose, la science moderne adopte une conception **mecaniste** : la nature s'explique par des causes, non par des fins.

## 3. Maitriser la nature : Descartes
Avec la revolution scientifique, **Descartes** annonce que la science doit nous rendre "comme maitres et possesseurs de la nature" (*Discours de la methode*). La nature est concue comme une matiere etendue, regie par des lois mecaniques que l'homme peut connaitre et utiliser pour son bien (medecine, techniques).

## 4. Nature et culture
Pour **Spinoza**, Dieu et la Nature ne font qu'un ("*Deus sive Natura*") : la nature est l'unique realite, cause de soi. La distinction **nature / culture** est centrale en anthropologie : **Levi-Strauss** propose que releve de la nature ce qui est universel et spontane chez l'homme, et de la culture ce qui varie selon des regles ; la **prohibition de l'inceste**, a la fois universelle (nature) et reglee (culture), se situe a leur charniere. **Rousseau** distingue l'homme a l'etat de nature de l'homme social.

## 5. Les erreurs a eviter
- Confondre loi de la nature (descriptive) et loi morale (prescriptive) : la premiere dit ce qui est, la seconde ce qui doit etre.
- Confondre finalisme (la nature a des fins) et mecanisme (la nature suit des causes).
- Croire que 'naturel' signifie 'bon' ou 'obligatoire' : passer de l'etre au devoir-etre est un raisonnement contestable.

## A retenir
- 'Nature' : ce qui existe sans l'homme, l'essence d'une chose, ou l'oppose de la culture.
- Aristote : conception finaliste, 'la nature ne fait rien en vain' ; la science moderne : mecaniste.
- Descartes : la science doit nous rendre 'comme maitres et possesseurs de la nature'.
- Nature / culture : universel et spontane vs variable et regle (Levi-Strauss).
""",
questions=[
 q(1,"facile","distinction","Une 'loi de la nature' (physique) se distingue d'une loi morale parce qu'elle est :",["descriptive (ce qui est)","prescriptive (ce qui doit etre)","votee par un parlement","toujours juste"],0,"La loi physique decrit ce qui est ; la loi morale ou juridique prescrit ce qui doit etre."),
 q(2,"moyen","distinction","Une loi morale ou juridique est :",["prescriptive (elle enonce un devoir-etre)","descriptive","impossible a transgresser","identique a une loi physique"],0,"La loi morale prescrit ce qui doit etre et peut etre transgressee, contrairement a la loi physique."),
 q(3,"moyen","aristote","La formule 'la nature ne fait rien en vain' est de :",["Aristote","Descartes","Spinoza","Rousseau"],0,"Aristote exprime ainsi sa conception finaliste de la nature."),
 q(4,"difficile","aristote","La conception aristotelicienne de la nature est dite :",["finaliste (chaque etre tend vers une fin)","mecaniste","materialiste stricte","aleatoire"],0,"Pour Aristote, chaque etre naturel tend vers une fin (telos) : c'est le finalisme."),
 q(5,"difficile","aristote","Aristote distingue les etres 'par nature' des produits de l'art par le fait que les premiers :",["ont en eux leur principe de mouvement","sont fabriques par l'homme","n'ont pas de forme","sont immobiles"],0,"Un etre par nature a en lui-meme son principe de mouvement ; le produit de l'art le recoit de l'exterieur."),
 q(6,"moyen","science","La science moderne explique la nature de facon :",["mecaniste (par des causes)","finaliste (par des fins)","magique","poetique"],0,"La science moderne abandonne les fins pour expliquer la nature par des causes et des lois mecaniques."),
 q(7,"difficile","descartes","La formule 'se rendre comme maitres et possesseurs de la nature' est de :",["Descartes","Aristote","Bacon seul","Kant"],0,"Descartes l'ecrit dans le Discours de la methode, exprimant le projet de la science moderne."),
 q(8,"moyen","descartes","Dans le projet cartesien, la nature est concue comme :",["une matiere etendue regie par des lois mecaniques","un organisme anime de fins","une divinite a adorer","un chaos sans loi"],0,"Descartes concoit la nature comme etendue et mecanique, connaissable et utilisable par l'homme."),
 q(9,"moyen","descartes","Le but que Descartes assigne a la maitrise de la nature est notamment :",["le bien de l'homme (medecine, techniques)","la destruction du monde","la contemplation pure","l'abandon de la science"],0,"Descartes vise l'utilite : ameliorer la vie humaine, en particulier par la medecine."),
 q(10,"difficile","spinoza","La formule 'Deus sive Natura' ('Dieu, c'est-a-dire la Nature') est de :",["Spinoza","Descartes","Aristote","Pascal"],0,"Spinoza identifie Dieu et la Nature : une seule et meme realite, cause de soi."),
 q(11,"moyen","distinction","La distinction nature / culture oppose :",["ce qui est universel et spontane a ce qui varie selon des regles","le vrai et le faux","le beau et le laid","le corps et l'ame"],0,"On rapporte a la nature l'universel et le spontane, a la culture ce qui varie selon des regles."),
 q(12,"difficile","levi-strauss","Pour Levi-Strauss, la prohibition de l'inceste est remarquable parce qu'elle est :",["a la fois universelle (nature) et reglee (culture)","purement naturelle","purement culturelle","sans importance"],0,"Universelle comme un fait de nature, mais fondee sur une regle comme la culture : elle est au charniere des deux."),
 q(13,"moyen","levi-strauss","Selon le critere de Levi-Strauss, releve de la culture ce qui :",["varie d'une societe a l'autre selon des regles","est universel chez tous les hommes","est instinctif","est physique"],0,"Ce qui varie selon des normes releve de la culture ; l'universel spontane, de la nature."),
 q(14,"moyen","rousseau","Rousseau distingue l'homme a l'etat de nature de :",["l'homme social (dans la culture)","l'animal seul","l'homme mecanique","l'homme divin"],0,"Rousseau oppose l'homme naturel a l'homme forme et transforme par la vie en societe."),
 q(15,"facile","distinction","Est 'artificiel' ce qui :",["est produit par l'homme (par opposition au naturel)","existe sans l'homme","est vivant","est universel"],0,"L'artificiel est ce que l'homme fabrique, oppose au naturel qui existe independamment de lui."),
 q(16,"difficile","logique","Passer de 'c'est naturel' a 'c'est bien' ou 'c'est obligatoire' est :",["un raisonnement contestable (de l'etre au devoir-etre)","toujours valide","une loi physique","une demonstration mathematique"],0,"Deduire une norme (le bien) d'un fait (le naturel) est un passage logiquement contestable."),
 q(17,"moyen","distinction","Le mot 'nature' au sens d'essence designe :",["ce qu'une chose est fondamentalement (sa nature propre)","l'ensemble des paysages","les lois juridiques","les objets fabriques"],0,"La 'nature' d'une chose est aussi son essence, ce qui la definit fondamentalement."),
 q(18,"moyen","aristote","L'exemple du gland qui tend a devenir un chene illustre :",["la finalite dans la nature (Aristote)","le mecanisme","le hasard pur","la loi morale"],0,"Le developpement du gland vers le chene illustre la fin (telos) inscrite dans l'etre naturel."),
 q(19,"difficile","science","Le passage du finalisme au mecanisme caracterise :",["la revolution scientifique moderne","l'Antiquite grecque","le Moyen Age seul","le romantisme"],0,"La science moderne (XVIIe siecle) remplace l'explication par les fins par l'explication par les causes."),
 q(20,"moyen","distinction","L'ensemble de ce qui existe independamment de l'homme se dit la nature par opposition a :",["l'artificiel","l'essence","la matiere","la loi"],0,"En ce sens, la nature s'oppose a l'artificiel, produit de l'action humaine."),
],
exos=[
 ex(1,"decouverte","distinction","Enumerez les principaux sens du mot 'nature'.",["Ce qui existe sans l'homme (oppose a l'artificiel).","L'essence d'une chose (sa nature propre).","Ce qui s'oppose a la culture."],"Trois sens : le non-artificiel, l'essence, l'oppose de la culture."),
 ex(2,"decouverte","distinction","Distinguez loi de la nature et loi morale.",["Loi de la nature : descriptive, dit ce qui est.","Loi morale : prescriptive, dit ce qui doit etre.","La premiere ne se transgresse pas, la seconde si."],"Loi physique = descriptive ; loi morale = prescriptive."),
 ex(3,"application","aristote","Expliquez la conception finaliste de la nature chez Aristote.",["Chaque etre naturel tend vers une fin (telos).","Ex. : le gland tend a devenir un chene.","'La nature ne fait rien en vain.'"],"La nature est orientee vers des fins : conception finaliste."),
 ex(4,"application","aristote","Distinguez les etres 'par nature' et les produits de 'l'art' chez Aristote.",["Par nature : l'etre a en lui son principe de mouvement.","Par art : le principe est exterieur (l'artisan).","Ex. : une plante pousse seule, une table est fabriquee."],"Par nature = principe interne de mouvement ; par art = principe externe."),
 ex(5,"application","science","Opposez finalisme et mecanisme.",["Finalisme : la nature agit en vue de fins.","Mecanisme : la nature s'explique par des causes.","La science moderne passe du finalisme au mecanisme."],"Finalisme = explication par les fins ; mecanisme = par les causes."),
 ex(6,"application","descartes","Expliquez le projet cartesien de maitrise de la nature.",["La nature est etendue, regie par des lois mecaniques.","La science permet de la connaitre et de l'utiliser.","But : se rendre 'comme maitres et possesseurs de la nature' pour le bien de l'homme."],"Connaitre les lois de la nature pour la maitriser au service de l'homme."),
 ex(7,"approfondissement","spinoza","Expliquez la formule 'Deus sive Natura'.",["Spinoza identifie Dieu et la Nature.","Il n'y a qu'une seule realite, cause de soi.","La nature n'est pas creee de l'exterieur : elle est."],"Dieu et la Nature ne font qu'un : l'unique realite, cause de soi."),
 ex(8,"approfondissement","levi-strauss","Expliquez le critere nature / culture de Levi-Strauss.",["Releve de la nature ce qui est universel et spontane.","Releve de la culture ce qui varie selon des regles.","La prohibition de l'inceste, universelle et reglee, est au charniere des deux."],"Nature = universel et spontane ; culture = variable et regle ; l'inceste prohibe est a leur jonction."),
 ex(9,"approfondissement","logique","Montrez pourquoi 'c'est naturel donc c'est bien' est un raisonnement contestable.",["'Naturel' est un fait (ce qui est).","'Bien' est une norme (ce qui doit etre).","Deduire la norme du fait est un passage logiquement injustifie."],"On ne peut deduire un devoir-etre (le bien) d'un simple etre (le naturel)."),
 ex(10,"approfondissement","synthese","Discutez : l'homme doit-il dominer ou respecter la nature ?",["These 1 (Descartes) : la maitrise de la nature sert le bien de l'homme.","These 2 : la nature a une valeur propre et des limites a respecter.","La question ecologique reactive ce debat."],"On oppose le projet de maitrise (Descartes) a l'exigence de respect de la nature."),
],
cartes=[
 card("Trois sens du mot 'nature' ?","Ce qui existe sans l'homme, l'essence d'une chose, l'oppose de la culture."),
 card("Loi de la nature vs loi morale ?","Descriptive (ce qui est) vs prescriptive (ce qui doit etre)."),
 card("Qui a dit 'la nature ne fait rien en vain' ?","Aristote."),
 card("Conception aristotelicienne de la nature ?","Finaliste : chaque etre tend vers une fin (telos)."),
 card("Etre par nature vs par art (Aristote) ?","Principe de mouvement interne vs externe."),
 card("Finalisme vs mecanisme ?","Explication par les fins vs par les causes."),
 card("Qui veut nous rendre 'maitres et possesseurs de la nature' ?","Descartes (Discours de la methode)."),
 card("La nature dans le projet cartesien ?","Une matiere etendue regie par des lois mecaniques."),
 card("Que signifie 'Deus sive Natura' (Spinoza) ?","Dieu, c'est-a-dire la Nature : une seule realite."),
 card("Critere nature / culture de Levi-Strauss ?","Universel et spontane vs variable et regle."),
 card("Pourquoi la prohibition de l'inceste est-elle remarquable ?","Elle est a la fois universelle (nature) et reglee (culture)."),
 card("'C'est naturel donc c'est bien' : valide ?","Non : on ne deduit pas une norme d'un fait."),
],
))

# =====================================================================
created = []
for c in CH:
    d = write_chapter(c["slug"], c["titre"], c["prereqs"], c["fiche_body"],
                      c["questions"], c["exos"], c["cartes"])
    created.append(d)
print("Chapitres crees :", len(created))
for d in created:
    print(" -", d)
