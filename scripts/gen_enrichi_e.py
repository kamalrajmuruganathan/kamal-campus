# -*- coding: utf-8 -*-
"""Générateurs enrichis — lot e : physique-chimie collège (5e, 4e, 3e) et 2de.

Chaque générateur renvoie 50 exercices variés (au moins 5 notions, 3 niveaux de
difficulté). Toutes les valeurs numériques des réponses sont calculées par le code.
"""
import math
import re
from decimal import Decimal, ROUND_HALF_UP

NNBSP = " "   # espace fine insécable (milliers hors formule)


# ----------------------------------------------------------------- aides
def _dec(x, d):
    """Arrondi scolaire (demi vers le haut) de x à d décimales -> Decimal."""
    q = Decimal(1).scaleb(-d)
    return Decimal(repr(round(float(x), 10))).quantize(q, rounding=ROUND_HALF_UP)


def arr(x, d=0):
    return float(_dec(x, d))


def _grouper(ent, sep):
    if len(ent) <= 3:
        return ent
    morceaux = []
    while len(ent) > 3:
        morceaux.insert(0, ent[-3:])
        ent = ent[:-3]
    morceaux.insert(0, ent)
    return sep.join(morceaux)


def _nombre(x, d, zeros, tex):
    v = _dec(x, d)
    neg = v < 0
    v = abs(v)
    s = format(v, "f")
    if "." in s:
        ent, dec = s.split(".")
        if not zeros:
            dec = dec.rstrip("0")
    else:
        ent, dec = s, ""
    ent = _grouper(ent, "\\," if tex else NNBSP)
    r = ent + (("{,}" if tex else ",") + dec if dec else "")
    if neg and r.strip("0,{}\\" + NNBSP):
        r = "-" + r
    return r


def nb(x, d=2, zeros=False):
    """Nombre pour une formule LaTeX : 2{,}5 ; 12\\,500."""
    return _nombre(x, d, zeros, True)


def t(x, d=2, zeros=False):
    """Nombre pour le texte : 2,5 ; 12 500."""
    return _nombre(x, d, zeros, False)


def sci(x, cs=3):
    """Écriture scientifique LaTeX avec cs chiffres significatifs."""
    if x == 0:
        return "0"
    e = int(math.floor(math.log10(abs(x))))
    m = arr(x / 10 ** e, cs - 1)
    if abs(m) >= 10:
        e += 1
        m = arr(x / 10 ** e, cs - 1)
    mant = nb(m, cs - 1, zeros=True)
    if e == 0:
        return mant
    return f"{mant} \\times 10^{{{e}}}"


def cs(x, n=3):
    """Arrondi à n chiffres significatifs (LaTeX) ; écriture scientifique si nécessaire."""
    if x == 0:
        return "0"
    e = int(math.floor(math.log10(abs(x))))
    if e >= n:
        return sci(x, n)
    d = n - 1 - e
    v = arr(x, d)
    if v != 0 and int(math.floor(math.log10(abs(v)))) > e:   # 9,99 -> 10,0
        return cs(v, n)
    return nb(v, d, zeros=True)


def pl(n, mot, pluriel=None):
    """Accord : 0 neutron, 1 électron, 2 électrons."""
    if abs(n) >= 2:
        return f"{n} {pluriel or mot + 's'}"
    return f"{n} {mot}"


def de(mot):
    """« de » ou « d' » devant un mot."""
    return ("d'" + mot) if mot[:1].lower() in "aeiouéèêàâîôûhœy" and not mot.lower().startswith(("hu", "ha", "ho")) else ("de " + mot)


def le_(mot):
    """« le fer » / « l'aluminium »."""
    return ("l'" + mot) if mot[:1] in "aeiouéèêh" else ("le " + mot)


def au_(mot):
    """« au fer » / « à l'aluminium »."""
    return ("à l'" + mot) if mot[:1] in "aeiouéèêh" else ("au " + mot)


def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}


def _fin(E):
    if len(E) != 50:
        raise ValueError(f"{len(E)} exercices au lieu de 50")
    vus = set()
    for x in E:
        if x[2] in vus:
            raise ValueError("énoncé en double : " + x[2])
        vus.add(x[2])
    return [exo(i + 1, *x) for i, x in enumerate(E)]


# --- chimie : lecture de formules et vérification d'équations
_RX_EL = re.compile(r"([A-Z][a-z]?)(\d*)")


def atomes(formule):
    """'C6H12O6' -> {'C': 6, 'H': 12, 'O': 6}."""
    c = {}
    for el, n in _RX_EL.findall(formule):
        c[el] = c.get(el, 0) + (int(n) if n else 1)
    return c


def bilan(cote):
    """[(coef, formule), ...] -> nombre d'atomes de chaque élément."""
    tot = {}
    for k, f in cote:
        for el, n in atomes(f).items():
            tot[el] = tot.get(el, 0) + k * n
    return tot


def tex_formule(f):
    """'C6H12O6' -> '\\mathrm{C_6H_{12}O_6}'."""
    s = ""
    for el, n in _RX_EL.findall(f):
        s += el + (("_" + (n if len(n) == 1 else "{" + n + "}")) if n else "")
    return "\\mathrm{" + s + "}"


def tex_cote(cote):
    morceaux = []
    for k, f in cote:
        morceaux.append(("" if k == 1 else f"{k}\\,") + tex_formule(f))
    return " + ".join(morceaux)


def tex_equation(g, d):
    return tex_cote(g) + " \\longrightarrow " + tex_cote(d)


def _verifie_equation(g, d):
    if bilan(g) != bilan(d):
        raise ValueError(f"équation non ajustée : {g} -> {d}")


# =====================================================================
# 5e — CORPS PURS ET MÉLANGES
# =====================================================================
def gen_5e_corps_purs():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- corps pur ou mélange (10)
    cp = [
        ("l'eau distillée", True, "elle ne contient qu'une seule espèce chimique, l'eau"),
        ("l'eau minérale", False, "elle contient de l'eau et des sels minéraux dissous"),
        ("l'air", False, "il contient du diazote, du dioxygène et d'autres gaz"),
        ("le dioxygène pur contenu dans une bouteille", True, "il ne contient qu'une seule espèce, le dioxygène"),
        ("le jus d'orange « pur jus »", False, "il contient de l'eau, des sucres, des vitamines ; en chimie, « pur jus » ne veut pas dire corps pur"),
        ("le sucre en poudre bien sec", True, "il ne contient qu'une seule espèce chimique, le saccharose"),
        ("l'eau de mer", False, "elle contient de l'eau, du sel et d'autres espèces dissoutes"),
        ("un lingot d'or pur", True, "il ne contient qu'une seule espèce chimique, l'or"),
        ("le lait", False, "il contient de l'eau, des matières grasses, des protéines et du sucre (lactose)"),
        ("un fil de cuivre pur", True, "il ne contient qu'une seule espèce chimique, le cuivre"),
    ]
    for i, (nom, pur, why) in enumerate(cp):
        add("application", "corps-pur-melange",
            f"Classe l'échantillon suivant : {nom}. Corps pur ou mélange ?",
            [f"C'est un {'corps pur' if pur else 'mélange'} : {why}.",
             "Corps pur = une seule espèce chimique ; mélange = plusieurs espèces."],
            "un corps pur" if pur else "un mélange")

    # -- homogène / hétérogène (9)
    hh = [
        ("de l'eau et du sable que l'on vient d'agiter", False, "on distingue les grains de sable dans l'eau"),
        ("de l'eau salée bien remuée (tout le sel est dissous)", True, "on ne distingue plus le sel, l'aspect est uniforme"),
        ("de l'eau et de l'huile", False, "on voit deux couches séparées"),
        ("un jus d'orange avec de la pulpe", False, "on distingue les morceaux de pulpe"),
        ("du sirop de menthe dilué dans l'eau", True, "on obtient un seul liquide vert uniforme"),
        ("une vinaigrette (huile et vinaigre)", False, "on distingue des gouttes d'huile et de vinaigre"),
        ("de l'eau boueuse", False, "on distingue les particules de terre"),
        ("de l'eau sucrée où tout le sucre est dissous", True, "on ne distingue plus le sucre"),
        ("une eau gazeuse dont on voit les bulles", False, "on distingue les bulles de gaz dans le liquide"),
    ]
    for nom, homo, why in hh:
        add("application", "homogene-heterogene",
            f"Le mélange formé par {nom} est-il homogène ou hétérogène ?",
            [f"Il est {'homogène' if homo else 'hétérogène'} : {why}."],
            "homogène" if homo else "hétérogène")

    # -- vocabulaire de la solution (8)
    voc = [
        ("On dissout du sucre dans un thé chaud. Quel est le soluté ?", "le sucre",
         ["Le soluté est la substance que l'on dissout : ici le sucre."]),
        ("On dissout du sucre dans un thé chaud. Quel est le solvant ?", "l'eau (du thé)",
         ["Le solvant est le liquide qui dissout, présent en grande quantité : l'eau du thé."]),
        ("On dissout du sel dans de l'eau. Comment appelle-t-on le mélange homogène obtenu ?", "une solution (solution aqueuse)",
         ["Soluté + solvant = solution.", "Le solvant étant l'eau, on parle de solution aqueuse."]),
        ("Dans un sirop de grenadine dilué, quel est le solvant ?", "l'eau",
         ["Le solvant est le liquide présent en plus grande quantité : l'eau."]),
        ("Comment appelle-t-on une solution dans laquelle le soluté ne se dissout plus et se dépose au fond ?", "une solution saturée",
         ["Le solvant est « plein » : la solution est saturée."]),
        ("Vrai ou faux ? Quand le sel se dissout dans l'eau, il disparaît complètement.", "Faux",
         ["Le sel est toujours là, en tout petits morceaux invisibles : l'eau a un goût salé.",
          "La masse de la solution a d'ailleurs augmenté de la masse du sel."]),
        ("Vrai ou faux ? L'eau salée est homogène, donc c'est un corps pur.", "Faux",
         ["« Homogène » décrit l'aspect, pas le nombre d'espèces.",
          "L'eau salée contient deux espèces (eau et sel) : c'est un mélange homogène."]),
        ("Comment appelle-t-on une solution dont le solvant est l'eau ?", "une solution aqueuse",
         ["Quand le solvant est l'eau, la solution est dite aqueuse."]),
    ]
    for k, (e, r, c) in enumerate(voc):
        add("intermediaire" if k >= 5 else "application", "solution-vocabulaire", e, c, r)

    # -- masse et dissolution (8)
    md = [(200, 15, "sucre"), (250, 20, "sel"), (500, 35, "sucre"), (150, 6, "sel"),
          (330, 12, "sucre")]
    for (me, ms, sol) in md:
        add("intermediaire", "masse-dissolution",
            f"Tu dissous {ms} g de {sol} dans {me} g d'eau. Quelle est la masse de la solution obtenue ?",
            ["Le soluté ne disparaît pas : les masses s'ajoutent.",
             f"$m_{{\\text{{solution}}}} = {me} + {ms} = {me + ms}$ g."],
            f"${me + ms}$ g")
    mr = [(300, 327, "sel"), (180, 204, "sucre"), (400, 418, "sel")]
    for (me, mt, sol) in mr:
        add("approfondissement", "masse-dissolution",
            f"Un verre contient {me} g d'eau. Après avoir dissous du {sol}, la solution a une masse de {mt} g. Quelle masse de {sol} as-tu dissoute ?",
            ["La masse se conserve lors de la dissolution : $m_{\\text{solution}} = m_{\\text{eau}} + m_{\\text{soluté}}$.",
             f"$m_{{\\text{{soluté}}}} = {mt} - {me} = {mt - me}$ g."],
            f"${mt - me}$ g")

    # -- solubilité (9)
    for V in (250, 500, 100, 750):
        m = 360 * V / 1000
        add("intermediaire", "solubilite",
            f"La solubilité du sel dans l'eau est de 360 g/L à 20 °C. Quelle masse maximale de sel peux-tu dissoudre dans {V} mL d'eau à 20 °C ?",
            [f"On convertit : ${V}$ mL $= {nb(V / 1000, 3)}$ L.",
             f"$m_{{\\text{{max}}}} = 360 \\times {nb(V / 1000, 3)} = {nb(m)}$ g."],
            f"${nb(m)}$ g")
    V = 150
    add("intermediaire", "solubilite",
        "La solubilité du sucre dans l'eau est d'environ 2 000 g/L à 20 °C. Quelle masse maximale de sucre peut-on dissoudre dans 150 mL d'eau ?",
        ["$150$ mL $= 0{,}15$ L.", f"$m_{{\\text{{max}}}} = 2\\,000 \\times 0{{,}}15 = {nb(2000 * 0.15)}$ g."],
        f"${nb(2000 * 0.15)}$ g")
    for (ms, V, s, nom) in [(100, 250, 360, "sel"), (50, 200, 360, "sel"), (30, 250, 96, "bicarbonate de sodium")]:
        mmax = s * V / 1000
        reste = ms - mmax
        if reste > 0:
            rep = f"Non : ${nb(reste)}$ g restent au fond"
            fin = f"On ajoute plus que le maximum : ${ms} - {nb(mmax)} = {nb(reste)}$ g ne se dissolvent pas, la solution est saturée."
        else:
            rep = "Oui, tout se dissout"
            fin = f"${ms}$ g $< {nb(mmax)}$ g : tout le {nom} se dissout, la solution n'est pas saturée."
        add("probleme", "solubilite",
            f"La solubilité du {nom} dans l'eau est de {s} g/L à 20 °C. Tu verses {ms} g de {nom} dans {V} mL d'eau à 20 °C et tu remues longtemps. Tout le {nom} se dissout-il ?",
            [f"Masse maximale dissoute : $m_{{\\text{{max}}}} = {s} \\times {nb(V / 1000, 3)} = {nb(mmax)}$ g.", fin],
            rep)
    add("approfondissement", "solubilite",
        "Dans 150 mL d'eau à 20 °C, on arrive à dissoudre au maximum 54 g de sel. Calcule la solubilité du sel en g/L.",
        ["La solubilité est la masse maximale dissoute dans 1 L.",
         "$150$ mL $= 0{,}15$ L, donc $s = \\dfrac{54}{0{,}15} = 360$ g/L."],
        "$360$ g/L")

    # -- miscibilité (6)
    mi = [
        ("L'eau et l'huile sont-elles miscibles ?", "Non, elles sont non miscibles",
         ["Elles forment deux couches séparées : le mélange est hétérogène."], "application"),
        ("L'eau et le sirop sont-ils miscibles ?", "Oui, ils sont miscibles",
         ["Ils forment un seul liquide uniforme : le mélange est homogène."], "application"),
        ("L'eau et l'alcool sont-ils miscibles ?", "Oui, ils sont miscibles",
         ["On obtient un seul liquide uniforme."], "application"),
        ("On verse de l'huile dans un verre d'eau. Quel liquide se retrouve au-dessus ?", "l'huile",
         ["L'huile est plus légère que l'eau à volume égal : elle forme la couche du haut."], "intermediaire"),
        ("On secoue fort une bouteille contenant de l'eau et de l'huile, puis on la pose. Que se passe-t-il au bout de quelques minutes ?",
         "Les deux couches se reforment (huile au-dessus)",
         ["Les deux liquides sont non miscibles : secouer ne change rien.",
          "L'huile, plus légère, remonte et forme à nouveau la couche du haut."], "intermediaire"),
        ("Quel mot utilise-t-on pour un solide qui se dissout dans l'eau : « soluble » ou « miscible » ?", "soluble",
         ["On dit « soluble » pour un solide (ou un gaz) qu'on dissout.",
          "« Miscible » concerne deux liquides que l'on mélange."], "approfondissement"),
    ]
    for e, r, c, d in mi:
        add(d, "miscibilite", e, c, r)
    return _fin(E)


# =====================================================================
# 5e — ÉNERGIE ET ÉLECTRICITÉ
# =====================================================================
def gen_5e_energie_electricite():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- unité de l'énergie, conversions (8)
    for kj in (3, 25, 4.5, 0.8):
        j = kj * 1000
        add("application", "unite-energie",
            f"Convertis {t(kj)} kJ en joules.",
            ["$1$ kJ $= 1\\,000$ J : on multiplie par $1\\,000$.",
             f"${nb(kj)} \\times 1\\,000 = {nb(j)}$ J."],
            f"${nb(j)}$ J")
    for j in (7000, 2500, 450):
        kj = j / 1000
        add("intermediaire", "unite-energie",
            f"Convertis {t(j)} J en kilojoules.",
            ["Pour passer des J aux kJ, on divise par $1\\,000$.",
             f"${nb(j)} \\div 1\\,000 = {nb(kj, 3)}$ kJ."],
            f"${nb(kj, 3)}$ kJ")
    add("application", "unite-energie",
        "Quelle est l'unité de l'énergie ? Donne son nom et son symbole.",
        ["L'énergie se mesure en joules.", "Symbole : J."], "le joule (J)")

    # -- stocks et transferts (7)
    st = [
        ("une pile neuve rangée dans un tiroir", "un stock d'énergie"),
        ("le courant qui passe dans les fils entre une pile et une lampe", "un transfert d'énergie (électrique)"),
        ("le réservoir d'essence plein d'une voiture", "un stock d'énergie"),
        ("le Soleil qui chauffe un mur par sa lumière", "un transfert d'énergie (par la lumière)"),
        ("un morceau de bois posé près de la cheminée", "un stock d'énergie"),
    ]
    for nom, r in st:
        add("application", "stock-transfert",
            f"Stock d'énergie ou transfert d'énergie : {nom} ?",
            ["Un stock est une réserve d'énergie ; un transfert, c'est de l'énergie qui passe d'un système à un autre.",
             f"Ici : {r}."], r)
    add("intermediaire", "stock-transfert",
        "Une casserole est posée sur une plaque de cuisson chaude. Quel est le mode de transfert d'énergie de la plaque vers la casserole ?",
        ["L'énergie passe du chaud vers le froid par la chaleur.", "C'est un transfert thermique."],
        "un transfert thermique")
    add("intermediaire", "stock-transfert",
        "Vrai ou faux ? Une lampe allumée « fabrique » de l'énergie.",
        ["Faux : l'énergie ne se crée pas.",
         "La lampe reçoit de l'énergie (transfert électrique) et la renvoie sous forme de lumière et de chaleur."],
        "Faux")

    # -- circuit ouvert ou fermé (7)
    cf = [
        ("L'interrupteur d'un circuit simple (pile, lampe, interrupteur) est fermé. La lampe brille-t-elle ?",
         "Oui", ["Interrupteur fermé : la boucle est complète, le courant circule.", "La lampe brille."], "application"),
        ("L'interrupteur d'un circuit simple (pile, lampe, interrupteur) est ouvert. La lampe brille-t-elle ?",
         "Non", ["Un interrupteur ouvert coupe la boucle : le courant ne circule pas.", "La lampe reste éteinte."], "application"),
        ("Dans un circuit pile-lampe, un fil est débranché de la pile. Le circuit est-il ouvert ou fermé ?",
         "ouvert", ["La boucle est interrompue : le circuit est ouvert, aucun courant ne circule."], "application"),
        ("Cite les trois sortes d'éléments que contient toujours un circuit électrique qui fonctionne.",
         "un générateur, un récepteur et des fils de connexion",
         ["Le générateur (pile) fournit l'énergie, le récepteur (lampe, moteur) la reçoit.",
          "Les fils de connexion ferment la boucle."], "intermediaire"),
        ("Dans un circuit, quel élément fournit l'énergie : la pile ou la lampe ?",
         "la pile (le générateur)", ["La pile est le générateur : elle fournit l'énergie.",
                                     "La lampe est un récepteur."], "application"),
        ("Vrai ou faux ? Un interrupteur « ouvert » laisse passer le courant, comme une porte ouverte.",
         "Faux", ["C'est le contraire : un interrupteur ouvert coupe le courant.",
                  "Circuit fermé = courant qui circule."], "intermediaire"),
        ("Un circuit pile-lampe est bien fermé, mais la lampe ne brille pas. Le filament de la lampe est cassé. Explique pourquoi la lampe reste éteinte.",
         "Le filament cassé ouvre la boucle : aucun courant ne circule",
         ["Le filament fait partie de la boucle.",
          "S'il est cassé, la boucle est interrompue : le circuit est en réalité ouvert."], "approfondissement"),
    ]
    for e, r, c, d in cf:
        add(d, "circuit-ouvert-ferme", e, c, r)

    # -- série / dérivation (8)
    sd = [
        ("Deux lampes sont branchées en série avec une pile. On dévisse l'une des lampes. Que devient l'autre ?",
         "Elle s'éteint", ["En série, il n'y a qu'une seule boucle.", "Dévisser une lampe coupe la boucle : l'autre s'éteint aussi."], "application"),
        ("Deux lampes sont branchées en dérivation sur une pile. On dévisse l'une des lampes. Que devient l'autre ?",
         "Elle reste allumée", ["En dérivation, chaque lampe est sur sa propre branche.", "La boucle de l'autre lampe reste complète."], "application"),
        ("Dans une maison, éteindre la lampe du salon n'éteint pas celle de la cuisine. Les lampes sont-elles branchées en série ou en dérivation ?",
         "en dérivation", ["Chaque appareil fonctionne indépendamment des autres : c'est le montage en dérivation."], "intermediaire"),
        ("Une guirlande a ses ampoules branchées les unes à la suite des autres, sur une seule boucle. Comment s'appelle ce montage ?",
         "un montage en série", ["Dipôles les uns à la suite des autres sur une seule boucle : montage en série."], "application"),
        ("On ajoute une troisième lampe en série avec deux lampes identiques. Les lampes brillent-elles plus, moins ou pareil ?",
         "moins", ["En série, ajouter une lampe fait briller les autres moins fort."], "intermediaire"),
        ("On ajoute une troisième lampe en dérivation avec deux autres lampes. Comment brillent les deux premières ?",
         "pareil (comme avant)", ["En dérivation, ajouter une branche ne change pas l'éclat des autres lampes."], "intermediaire"),
        ("Combien de boucles possède un circuit où une pile alimente deux lampes branchées en série ?",
         "une seule boucle", ["En série, tous les dipôles sont sur la même boucle."], "application"),
        ("Une ampoule d'une guirlande grille et toute la guirlande s'éteint. Comment les ampoules sont-elles branchées ? Justifie.",
         "en série", ["Une seule ampoule grillée suffit à couper le courant partout.",
                      "Il n'y a donc qu'une seule boucle : les ampoules sont en série."], "approfondissement"),
    ]
    for e, r, c, d in sd:
        add(d, "serie-derivation", e, c, r)

    # -- mesurer tension et intensité (8)
    mes = [
        ("Quel appareil mesure une tension électrique, et comment le branche-t-on ?", "le voltmètre, branché en dérivation",
         ["La tension se mesure entre deux points, aux bornes du dipôle.", "Le voltmètre se branche donc en dérivation."]),
        ("Quel appareil mesure l'intensité du courant, et comment le branche-t-on ?", "l'ampèremètre, branché en série",
         ["Le courant doit traverser l'appareil.", "L'ampèremètre se branche donc en série dans la boucle."]),
        ("Quelle est l'unité de l'intensité du courant électrique ?", "l'ampère (A)",
         ["L'intensité $I$ se mesure en ampères, symbole A."]),
    ]
    for e, r, c in mes:
        add("application", "mesures-electriques", e, c, r)
    for mv in (250, 1500):
        add("intermediaire", "mesures-electriques",
            f"Convertis {t(mv)} mV en volts.",
            ["$1$ V $= 1\\,000$ mV : on divise par $1\\,000$.", f"${nb(mv)} \\div 1\\,000 = {nb(mv / 1000, 3)}$ V."],
            f"${nb(mv / 1000, 3)}$ V")
    for a in (0.2, 0.06):
        add("intermediaire", "mesures-electriques",
            f"L'intensité dans une lampe de poche vaut {t(a)} A. Donne sa valeur en milliampères.",
            ["$1$ A $= 1\\,000$ mA : on multiplie par $1\\,000$.", f"${nb(a)} \\times 1\\,000 = {nb(a * 1000)}$ mA."],
            f"${nb(a * 1000)}$ mA")
    add("intermediaire", "mesures-electriques",
        "Une prise de courant en France délivre 230 V. Quelle grandeur est indiquée par ce nombre ?",
        ["Le volt est l'unité de la tension.", "230 V est la tension entre les deux bornes de la prise."],
        "la tension électrique")

    # -- lois (qualitatives chiffrées) (6)
    for (Ug, U1) in ((6, 2.5), (4.5, 1.5), (9, 3.5)):
        U2 = Ug - U1
        add("approfondissement", "lois-circuit",
            f"Deux lampes sont branchées en série sur un générateur de {t(Ug)} V. La tension aux bornes de la première lampe vaut {t(U1)} V. Quelle est la tension aux bornes de la seconde ?",
            ["En série, la tension du générateur se répartit entre les dipôles : les tensions s'ajoutent.",
             f"$U_2 = {nb(Ug)} - {nb(U1)} = {nb(U2)}$ V."],
            f"${nb(U2)}$ V")
    for I in (0.15, 0.32):
        add("intermediaire", "lois-circuit",
            f"Dans un circuit en série (pile, lampe, moteur), un ampèremètre placé avant la lampe indique {t(I)} A. Que va indiquer un ampèremètre placé après le moteur, sur la même boucle ?",
            ["En série, l'intensité est la même partout dans la boucle."],
            f"${nb(I)}$ A")
    add("approfondissement", "lois-circuit",
        "Deux lampes identiques sont branchées en dérivation sur une pile de 4,5 V. Quelle est la tension aux bornes de chaque lampe ?",
        ["En dérivation, les dipôles ont la même tension à leurs bornes : celle de la pile."],
        "$4{,}5$ V pour chaque lampe")

    # -- sécurité (6)
    se = [
        ("Pourquoi ne faut-il jamais toucher une prise avec les mains mouillées ?",
         "L'eau conduit le courant : risque de choc électrique grave",
         ["L'eau conduit le courant électrique.", "Le courant du secteur (230 V) pourrait traverser le corps."], "application"),
        ("Qu'appelle-t-on un court-circuit ?",
         "Relier directement les deux bornes d'un générateur par un fil, sans récepteur",
         ["Il passe alors une très grande intensité.", "Le fil chauffe fortement : risque d'incendie."], "intermediaire"),
        ("Quel est le rôle d'un disjoncteur dans une maison ?",
         "Couper automatiquement le courant si l'intensité devient trop grande",
         ["C'est un organe de sécurité : il ne faut jamais le neutraliser."], "intermediaire"),
        ("Un enfant veut glisser une paire de ciseaux dans une prise. Pourquoi est-ce très dangereux ?",
         "Le métal conduit le courant du secteur : risque d'électrocution",
         ["Les ciseaux métalliques conduisent le courant.", "Le courant du secteur traverserait le corps de l'enfant."], "application"),
        ("Vrai ou faux ? Une pile de 4,5 V et une prise de 230 V présentent le même danger.",
         "Faux", ["La prise du secteur peut faire circuler dans le corps un courant dangereux, voire mortel.",
                  "Une petite pile de 4,5 V ne présente pas ce danger."], "intermediaire"),
        ("Un fil relie directement les deux bornes d'une pile et devient brûlant. Explique ce qui se passe et le danger.",
         "C'est un court-circuit : l'intensité est très grande, le fil chauffe, risque d'incendie",
         ["Sans récepteur, rien ne limite le courant : l'intensité devient très grande.",
          "Le fil chauffe fortement et peut provoquer un incendie (et la pile s'abîme)."], "probleme"),
    ]
    for e, r, c, d in se:
        add(d, "securite", e, c, r)
    return _fin(E)


# =====================================================================
# 5e — MOUVEMENT ET VITESSE (sans formule v = d/t : programme de 5e)
# =====================================================================
def gen_5e_mouvement():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- référentiel, mouvement ou repos (8)
    rf = [
        ("Léa est assise dans un train qui roule. Par rapport à son siège, est-elle en mouvement ou au repos ?", "au repos",
         ["Sa position ne change pas par rapport au siège."]),
        ("Léa est assise dans un train qui roule. Par rapport aux arbres au bord de la voie, est-elle en mouvement ou au repos ?", "en mouvement",
         ["Sa position change par rapport aux arbres : elle s'en éloigne."]),
        ("Une valise est posée dans le porte-bagages d'un train qui roule. Par rapport au quai de la gare, est-elle en mouvement ou au repos ?", "en mouvement",
         ["Par rapport au quai, la valise avance avec le train."]),
        ("Un cycliste roule sur une route. Par rapport à son vélo, son casque est-il en mouvement ou au repos ?", "au repos",
         ["Le casque reste à la même place par rapport au vélo."]),
        ("Tu montes sur un escalator. Par rapport à la marche sur laquelle tu te tiens immobile, es-tu en mouvement ou au repos ?", "au repos",
         ["Ta position ne change pas par rapport à la marche."]),
        ("Un arbre est planté au bord d'une route. Pour le conducteur d'une voiture qui passe, l'arbre est-il en mouvement ou au repos ?", "en mouvement",
         ["Par rapport à la voiture, la position de l'arbre change : il « défile »."]),
        ("Comment appelle-t-on l'objet que l'on choisit comme repère pour dire si un autre objet bouge ?", "le référentiel",
         ["On ne peut dire qu'un objet bouge que par rapport à un autre : le référentiel."]),
        ("Vrai ou faux ? On peut dire qu'un objet bouge sans préciser par rapport à quoi.", "Faux",
         ["Le mouvement est relatif : il faut toujours préciser le référentiel."]),
    ]
    for k, (e, r, c) in enumerate(rf):
        add("application" if k < 6 else "intermediaire", "referentiel", e, c, r)

    # -- trajectoire (8)
    tr = [
        ("une bille qui roule sur une règle posée à plat", "rectiligne"),
        ("une nacelle de grande roue", "circulaire"),
        ("un ballon de basket lancé vers le panier", "curviligne"),
        ("la pointe de l'aiguille des minutes d'une horloge", "circulaire"),
        ("une voiture dans un virage de montagne", "curviligne"),
        ("une pomme qui tombe tout droit d'un arbre", "rectiligne"),
        ("un ascenseur qui monte", "rectiligne"),
    ]
    for nom, r in tr:
        add("application", "trajectoire",
            f"Quelle est la forme de la trajectoire {de(nom) if not nom.startswith(('le ', 'la ')) else ('du ' + nom[3:] if nom.startswith('le ') else 'de ' + nom)} (par rapport au sol) : rectiligne, circulaire ou curviligne ?",
            ["Rectiligne = une droite ; circulaire = un cercle ; curviligne = une autre courbe.",
             f"Ici, la trajectoire est {r}."], r)
    add("approfondissement", "trajectoire",
        "Une personne lâche une balle dans un train qui roule tout droit à vitesse constante. Quelle est la trajectoire de la balle pour un voyageur assis dans le train ? Et pour une personne sur le quai ?",
        ["Pour le voyageur, la balle tombe tout droit : trajectoire rectiligne.",
         "Pour la personne sur le quai, la balle avance en même temps qu'elle tombe : trajectoire curviligne."],
        "rectiligne dans le train, curviligne pour le quai")

    # -- comparer des vitesses (10)
    same_t = [("Un cycliste", 300, "un piéton", 80, "1 minute"),
              ("Un coureur", 250, "un marcheur", 90, "1 minute"),
              ("Une voiture en ville", 800, "un vélo", 300, "1 minute"),
              ("Un train", 2500, "une voiture", 1500, "1 minute")]
    for a, da, b, db, du in same_t:
        rap = a if da > db else b
        add("application", "comparer-vitesses",
            f"En {du}, {a[0].lower() + a[1:]} parcourt {t(da)} m et {b} parcourt {t(db)} m. Lequel va le plus vite ?",
            ["À durée égale, va plus vite celui qui parcourt la plus grande distance.",
             f"${nb(da)} > {nb(db)}$ : {rap[0].lower() + rap[1:]} va plus vite."],
            rap[0].upper() + rap[1:])
    same_d = [("Un sprinteur", 11, "un marcheur", 75, "100 m"),
              ("Lina", 52, "Tom", 47, "200 m"),
              ("Un cheval au galop", 80, "un cycliste", 150, "1 km"),
              ("Une trottinette", 40, "un piéton", 130, "150 m")]
    for a, ta, b, tb, di in same_d:
        rap = a if ta < tb else b
        add("intermediaire", "comparer-vitesses",
            f"Pour parcourir {di}, {a[0].lower() + a[1:] if a not in ('Lina',) else a} met {ta} s et {b} met {tb} s. Qui va le plus vite ?",
            ["À distance égale, va plus vite celui qui met le moins de temps.",
             f"${min(ta, tb)}$ s $< {max(ta, tb)}$ s : {rap if rap in ('Lina', 'Tom') else rap[0].lower() + rap[1:]} va plus vite."],
            rap)
    for (da, ta, db, tb) in ((400, 2, 250, 1), (900, 3, 1000, 4)):
        # ramener à la même durée : multiplier la distance de celui qui a la plus courte durée
        k = ta // tb if ta % tb == 0 else None
        if k:
            dbk = db * k
            plus = "Sacha" if dbk > da else "Noé"
            cor = [f"On se ramène à la même durée, ${ta}$ min : Sacha parcourt ${db} \\times {k} = {dbk}$ m en ${ta}$ min.",
                   f"Noé : ${da}$ m ; Sacha : ${dbk}$ m. {plus} va plus vite."]
        else:
            # même distance par minute
            va, vb = da / ta, db / tb
            plus = "Noé" if va > vb else "Sacha"
            cor = [f"On se ramène à $1$ min : Noé parcourt ${nb(da)} \\div {ta} = {nb(va)}$ m, Sacha ${nb(db)} \\div {tb} = {nb(vb)}$ m.",
                   f"{plus} parcourt la plus grande distance en $1$ min : il va plus vite."]
        add("probleme", "comparer-vitesses",
            f"Noé parcourt {t(da)} m en {ta} min, Sacha parcourt {t(db)} m en {pl(tb, 'minute')}. Qui va le plus vite ?",
            cor, plus)

    # -- durées (8)
    du = [((10, 15), (10, 42)), ((8, 5), (8, 50)), ((14, 35), (15, 10)), ((9, 50), (10, 25)),
          ((16, 40), (17, 55)), ((7, 45), (9, 20))]
    for (h1, m1), (h2, m2) in du:
        d = (h2 * 60 + m2) - (h1 * 60 + m1)
        hh, mm = divmod(d, 60)
        rep = f"{d} min" if hh == 0 else f"{d} min, soit {hh} h {mm:02d} min"
        cor = ["Durée = instant d'arrivée − instant de départ."]
        if hh == 0 and h1 == h2:
            cor.append(f"${m2} - {m1} = {d}$ min.")
        else:
            p1 = 60 - m1
            p2 = (h2 - h1 - 1) * 60 + m2
            cor.append(f"De {h1} h {m1:02d} à {h1 + 1} h : {p1} min ; de {h1 + 1} h à {h2} h {m2:02d} : {p2} min.")
            cor.append(f"Total : ${p1} + {p2} = {d}$ min" + ("." if hh == 0 else f", soit {hh} h {mm:02d} min."))
        add("application" if h1 == h2 else "intermediaire", "duree",
            f"Une course commence à {h1} h {m1:02d} et se termine à {h2} h {m2:02d}. Quelle est sa durée ?",
            cor, rep)
    add("application", "duree",
        "Avec quel instrument mesure-t-on la durée d'une course en EPS ?",
        ["On mesure une durée avec un chronomètre."], "un chronomètre")
    add("probleme", "duree",
        "Un bus part à 8 h 47 et le trajet dure 26 min. À quelle heure arrive-t-il ?",
        ["Instant d'arrivée = instant de départ + durée.",
         f"$47 + 26 = 73$ min $= 1$ h $13$ min, donc 8 h 47 + 26 min = 9 h 13."],
        "9 h 13")

    # -- conversions de durées (10)
    for m in (3, 7, 12):
        add("application", "conversion-temps",
            f"Convertis {m} min en secondes.",
            ["$1$ min $= 60$ s : on multiplie par $60$.", f"${m} \\times 60 = {m * 60}$ s."], f"${m * 60}$ s")
    for s in (120, 300, 540):
        add("application", "conversion-temps",
            f"Convertis {s} s en minutes.",
            ["Pour passer des secondes aux minutes, on divise par $60$.", f"${s} \\div 60 = {s // 60}$ min."], f"${s // 60}$ min")
    for (m, s) in ((2, 30), (4, 15)):
        add("intermediaire", "conversion-temps",
            f"Convertis {m} min {s} s en secondes.",
            ["On convertit d'abord les minutes, puis on ajoute les secondes.",
             f"${m} \\times 60 + {s} = {m * 60 + s}$ s."], f"${m * 60 + s}$ s")
    add("intermediaire", "conversion-temps",
        "Convertis 1 h 30 min en minutes. Attention au piège !",
        ["$1$ h $= 60$ min, donc $1$ h $30$ min $= 60 + 30 = 90$ min.",
         "Ce n'est pas 130 min : le temps se compte par 60, pas par 100."], "$90$ min")
    add("approfondissement", "conversion-temps",
        "Combien de secondes y a-t-il dans 2 h ?",
        ["$1$ h $= 3\\,600$ s.", "$2 \\times 3\\,600 = 7\\,200$ s."], "$7\\,200$ s")

    # -- relativité, vrai ou faux (6)
    vf = [
        ("Vrai ou faux ? Un même objet peut être en mouvement pour un observateur et au repos pour un autre.", "Vrai",
         ["Le mouvement est relatif : tout dépend du référentiel choisi."], "intermediaire"),
        ("Vrai ou faux ? Le Soleil tourne autour de la Terre, puisqu'on le voit se lever et se coucher.", "Faux",
         ["Par rapport à la Terre, le Soleil semble bouger.", "En réalité, c'est la Terre qui tourne sur elle-même et autour du Soleil."], "approfondissement"),
        ("Vrai ou faux ? La trajectoire d'un objet ne dépend pas de l'observateur.", "Faux",
         ["La trajectoire dépend du référentiel (exemple de la balle lâchée dans un train)."], "approfondissement"),
        ("Vrai ou faux ? Un objet immobile n'a pas de trajectoire.", "Vrai",
         ["La trajectoire est l'ensemble des positions occupées ; un objet immobile n'occupe qu'une seule position."], "intermediaire"),
        ("Vrai ou faux ? Un virage de route est une trajectoire circulaire.", "Faux",
         ["Un virage n'est pas un cercle parfait : c'est une trajectoire curviligne."], "intermediaire"),
        ("Pour comparer la vitesse de deux élèves, Jules dit : « Léo a couru 500 m, Zoé a couru 30 s, donc Léo va plus vite. » Pourquoi ce raisonnement est-il faux ?",
         "On ne compare pas une distance et une durée : il faut la même durée ou la même distance",
         ["500 m est une distance et 30 s une durée : ce ne sont pas les mêmes grandeurs.",
          "Pour comparer, il faut une base commune (même durée ou même distance)."], "probleme"),
    ]
    for e, r, c, d in vf:
        add(d, "relativite", e, c, r)
    return _fin(E)


# =====================================================================
# 5e — TRANSFORMATION CHIMIQUE
# =====================================================================
def gen_5e_transformation():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- physique ou chimique (12)
    pc = [
        ("un glaçon qui fond", False, "c'est toujours de l'eau, seul l'état change (fusion)"),
        ("du bois qui brûle dans une cheminée", True, "le bois disparaît, des cendres, du dioxyde de carbone et de la vapeur d'eau apparaissent"),
        ("un clou en fer qui rouille", True, "le fer disparaît peu à peu et une espèce nouvelle, la rouille, apparaît"),
        ("du sucre qui se dissout dans l'eau", False, "le sucre est toujours là (l'eau est sucrée), c'est une dissolution"),
        ("de l'eau qui bout dans une casserole", False, "la vapeur est toujours de l'eau, c'est un changement d'état"),
        ("un comprimé effervescent qui fait des bulles dans l'eau", True, "un gaz nouveau se forme"),
        ("une feuille de papier que l'on déchire", False, "les morceaux sont toujours du papier, seule la forme change"),
        ("du pain qui grille", True, "une odeur et une couleur nouvelles apparaissent, de nouvelles espèces se forment"),
        ("du lait qui caille", True, "un solide nouveau apparaît"),
        ("du beurre qui fond dans une poêle", False, "le beurre passe de l'état solide à l'état liquide, il reste du beurre"),
        ("du gaz qui brûle dans une gazinière", True, "c'est une combustion, de nouvelles espèces apparaissent"),
        ("de la buée qui se forme sur un miroir froid", False, "la vapeur d'eau redevient de l'eau liquide, c'est un changement d'état"),
    ]
    for nom, chim, why in pc:
        add("application", "physique-ou-chimique",
            f"Transformation physique ou chimique : {nom} ?",
            [f"Transformation {'chimique' if chim else 'physique'} : {why}."],
            "chimique" if chim else "physique")

    # -- réactifs et produits (10)
    rp = [
        ("Le carbone brûle dans le dioxygène et il se forme du dioxyde de carbone.",
         "le carbone et le dioxygène", "le dioxyde de carbone"),
        ("Le fer, au contact du dioxygène de l'air humide, se transforme en rouille.",
         "le fer et le dioxygène", "la rouille"),
        ("Le méthane (gaz de ville) brûle dans le dioxygène : il se forme du dioxyde de carbone et de l'eau.",
         "le méthane et le dioxygène", "le dioxyde de carbone et l'eau"),
        ("Le butane d'un briquet brûle dans le dioxygène de l'air en donnant du dioxyde de carbone et de l'eau.",
         "le butane et le dioxygène", "le dioxyde de carbone et l'eau"),
        ("Chauffés ensemble, le fer et le soufre donnent du sulfure de fer.",
         "le fer et le soufre", "le sulfure de fer"),
    ]
    for k, (txt, reac, prod) in enumerate(rp):
        add("application", "reactifs-produits", f"{txt} Quels sont les réactifs ?",
            ["Les réactifs sont les espèces présentes au départ, qui disparaissent.", f"Ici : {reac}."], reac)
        add("intermediaire", "reactifs-produits", f"{txt} Quel(s) produit(s) se forme(nt) ?",
            ["Les produits sont les espèces nouvelles qui apparaissent.", f"Ici : {prod}."], prod)

    # -- signes d'une transformation chimique (8)
    sg = [
        ("Un comprimé effervescent dans l'eau fait apparaître des bulles. Quel signe de transformation chimique observe-t-on ?",
         "un dégagement de gaz", "application"),
        ("Un clou gris devient orange au bout de quelques semaines dehors. Quel signe de transformation chimique observe-t-on ?",
         "un changement de couleur durable", "application"),
        ("Dans du lait, on voit apparaître des grumeaux blancs solides. Quel signe de transformation chimique observe-t-on ?",
         "l'apparition d'un solide", "application"),
        ("Une bougie allumée produit une flamme, de la lumière et de la chaleur. Quel type de transformation est-ce ?",
         "une combustion (transformation chimique)", "application"),
    ]
    for e, r, d in sg:
        add(d, "signes", e, ["Ce signe trahit souvent l'apparition de nouvelles espèces chimiques."], r)
    add("intermediaire", "signes",
        "De l'eau qui bout fait des bulles. Est-ce la preuve d'une transformation chimique ?",
        ["Non : les bulles sont de la vapeur d'eau, c'est toujours de l'eau.", "Un signe n'est qu'un indice, pas une preuve."],
        "Non, c'est une transformation physique")
    add("intermediaire", "signes",
        "Cite deux signes qui peuvent indiquer une transformation chimique.",
        ["Par exemple : dégagement de gaz, changement de couleur durable, apparition d'un solide, flamme, odeur nouvelle."],
        "par exemple un dégagement de gaz et un changement de couleur")
    add("approfondissement", "signes",
        "Quelle est la seule vraie question à se poser pour savoir si une transformation est chimique ?",
        ["Les signes ne sont que des indices.", "Il faut savoir si de nouvelles espèces chimiques sont apparues."],
        "Y a-t-il de nouvelles espèces chimiques ?")
    add("approfondissement", "signes",
        "Une odeur nouvelle de « grillé » apparaît quand tu fais chauffer du sucre jusqu'à ce qu'il devienne brun (caramel). Physique ou chimique ? Justifie.",
        ["L'odeur et la couleur nouvelles montrent que de nouvelles espèces se sont formées.",
         "On ne retrouve plus le sucre de départ : c'est une transformation chimique."],
        "chimique")

    # -- changements d'état (7)
    ce = [
        ("Comment appelle-t-on le passage de l'état solide à l'état liquide ?", "la fusion"),
        ("Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?", "la vaporisation"),
        ("Comment appelle-t-on le passage de l'état liquide à l'état solide ?", "la solidification"),
        ("Comment appelle-t-on le passage de l'état gazeux à l'état liquide ?", "la liquéfaction (ou condensation)"),
    ]
    for e, r in ce:
        add("application", "changements-etat", e, ["C'est un changement d'état : une transformation physique."], r)
    add("intermediaire", "changements-etat",
        "Un changement d'état est-il une transformation physique ou chimique ?",
        ["La matière reste la même espèce, seul son état change."], "une transformation physique")
    add("intermediaire", "changements-etat",
        "On met une bouteille d'eau au congélateur : l'eau devient de la glace. Quel est ce changement d'état ? L'espèce chimique a-t-elle changé ?",
        ["Liquide → solide : c'est la solidification.", "C'est toujours de l'eau : l'espèce n'a pas changé."],
        "la solidification ; non, c'est toujours de l'eau")
    add("approfondissement", "changements-etat",
        "Comment prouver que le sel dissous dans l'eau n'a pas disparu ?",
        ["On goûte : l'eau est salée.", "On fait évaporer l'eau : le sel réapparaît au fond du récipient."],
        "En faisant évaporer l'eau, le sel réapparaît")

    # -- méthode et pièges (6)
    mt = [
        ("Vrai ou faux ? Dans une combustion, le dioxygène de l'air est un réactif.", "Vrai",
         ["Le dioxygène est consommé pendant la combustion, même si on ne le voit pas."], "intermediaire"),
        ("Vrai ou faux ? Les produits s'écrivent avant la flèche dans un bilan.", "Faux",
         ["Les réactifs sont avant la flèche, les produits après.", "Réactifs → produits."], "application"),
        ("Vrai ou faux ? On peut facilement récupérer le bois de départ à partir des cendres.", "Faux",
         ["Le bois s'est transformé en nouvelles espèces : on ne peut pas revenir en arrière."], "intermediaire"),
        ("Que signifie la flèche dans « carbone + dioxygène → dioxyde de carbone » ?", "« se transforment en » (ou « donnent »)",
         ["La flèche va des réactifs vers les produits."], "application"),
        ("On mélange du sirop et de l'eau. Est-ce une transformation chimique ?", "Non, c'est un simple mélange (physique)",
         ["On n'obtient pas de nouvelle espèce : c'est un mélange de sirop et d'eau."], "intermediaire"),
        ("Une bougie posée sous un bocal retourné finit par s'éteindre. Quel réactif a manqué ? Explique.",
         "le dioxygène", ["La combustion consomme le dioxygène de l'air du bocal.",
                          "Quand il n'y a plus assez de dioxygène, la combustion s'arrête."], "probleme"),
    ]
    for e, r, c, d in mt:
        add(d, "methode", e, c, r)

    # -- espèces chimiques et bilans écrits (7)
    eb = [
        ("Qu'est-ce qu'une espèce chimique ? Donne deux exemples.",
         "une substance bien précise, par exemple l'eau et le fer",
         ["Une espèce chimique est une substance précise, avec ses propres propriétés.",
          "Exemples : l'eau, le sel, le sucre, le fer, le dioxygène…"], "application"),
        ("Le sucre fond toujours vers 186 °C et l'eau bout à 100 °C. À quoi servent ces températures caractéristiques ?",
         "à reconnaître (identifier) une espèce chimique",
         ["Chaque espèce a ses propres propriétés : elles permettent de la reconnaître."], "intermediaire"),
        ("Écris en mots le bilan de la combustion du carbone.",
         "carbone + dioxygène → dioxyde de carbone",
         ["Réactifs (avant la flèche) : le carbone et le dioxygène.", "Produit (après la flèche) : le dioxyde de carbone."], "intermediaire"),
        ("Écris en mots le bilan de la formation de la rouille.",
         "fer + dioxygène → rouille",
         ["Réactifs : le fer et le dioxygène de l'air.", "Produit : la rouille."], "intermediaire"),
        ("Avant de brûler du carbone, il n'y a pas de dioxyde de carbone dans le bocal ; après, on en trouve. Que peut-on en conclure ?",
         "Une espèce nouvelle est apparue : c'est une transformation chimique",
         ["Le dioxyde de carbone est un produit : il n'existait pas au départ.",
          "L'apparition d'une espèce nouvelle prouve la transformation chimique."], "approfondissement"),
        ("Un glaçon fondu peut redevenir un glaçon au congélateur. Que nous apprend ce retour facile à l'état de départ ?",
         "C'est le signe d'une transformation physique",
         ["On retrouve la même espèce (l'eau) : rien de nouveau n'est apparu.",
          "Le retour facile est souvent le signe d'une transformation physique."], "approfondissement"),
        ("Léo fait chauffer de l'eau salée jusqu'à ce que toute l'eau soit partie. Il reste un solide blanc au fond. Est-ce une nouvelle espèce chimique ?",
         "Non, c'est le sel qui était dissous",
         ["La dissolution est une transformation physique : le sel était toujours là.",
          "En évaporant l'eau, on récupère simplement le sel."], "probleme"),
    ]
    for e, r, c, d in eb:
        add(d, "especes-bilan", e, c, r)
    return _fin(E)


# =====================================================================
# 4e — INTERACTIONS ET FORCES
# =====================================================================
def gen_4e_interactions():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- contact ou distance (9)
    cd = [
        ("ta main qui pousse une porte", "de contact"),
        ("la Terre qui attire une pomme qui tombe", "à distance"),
        ("un aimant qui attire un trombone", "à distance"),
        ("le sol qui supporte une table", "de contact"),
        ("la Terre qui attire la Lune", "à distance"),
        ("l'eau qui porte un bateau", "de contact"),
        ("le pied d'un joueur qui frappe un ballon", "de contact"),
    ]
    for nom, r in cd:
        add("application", "contact-distance",
            f"Interaction de contact ou à distance : {nom} ?",
            ["Contact : les deux objets se touchent. À distance : ils ne se touchent pas.",
             f"Ici, c'est une interaction {r}."], f"interaction {r}")
    add("intermediaire", "contact-distance",
        "Un aimant est collé contre un clou. L'interaction magnétique entre eux est-elle de contact ou à distance ?",
        ["« À distance » ne veut pas dire « de loin ».",
         "L'action magnétique s'exerce sans avoir besoin de contact : c'est une interaction à distance, même collés."],
        "à distance")
    add("intermediaire", "contact-distance",
        "Un aimant attire un trombone. Le trombone agit-il, lui aussi, sur l'aimant ?",
        ["Une interaction est toujours réciproque : A agit sur B et B agit sur A.",
         "Le trombone attire donc lui aussi l'aimant."], "Oui, l'interaction est réciproque")

    # -- caractéristiques d'une force (8)
    ca = [
        ("Quelles sont les quatre caractéristiques d'une force ?",
         "point d'application, direction, sens, valeur",
         ["Moyen mnémotechnique : Point – Direction – Sens – Valeur."], "application"),
        ("En quelle unité exprime-t-on la valeur d'une force ?", "le newton (N)",
         ["La valeur d'une force se mesure en newtons, symbole N."], "application"),
        ("Tu pousses horizontalement une caisse vers la droite avec ta main, avec une force de 40 N. Donne la direction et le sens de cette force.",
         "direction horizontale, sens vers la droite",
         ["La direction est la droite d'action : horizontale.", "Le sens précise de quel côté : vers la droite."], "intermediaire"),
        ("Tu pousses horizontalement une caisse vers la droite avec ta main, avec une force de 40 N. Quel est le point d'application et la valeur de cette force ?",
         "point d'application : là où ta main touche la caisse ; valeur : 40 N",
         ["Le point d'application est l'endroit où la force s'exerce : le contact main-caisse.", "La valeur est 40 N."], "intermediaire"),
        ("Une corde verticale tient un seau immobile. Quelle est la direction de la force exercée par la corde, et son sens ?",
         "direction verticale, sens vers le haut",
         ["La corde tire le long d'elle-même : direction verticale.", "Elle retient le seau : sens vers le haut."], "intermediaire"),
        ("Cite trois effets qu'une force peut avoir sur un objet.",
         "le mettre en mouvement, l'arrêter, le dévier ou le déformer",
         ["Une force peut mettre en mouvement, arrêter, dévier ou déformer un objet."], "application"),
        ("Un joueur de tennis frappe une balle qui arrive vers lui. Quels effets la force de la raquette a-t-elle sur la balle ?",
         "elle la déforme et modifie (dévie, renvoie) son mouvement",
         ["Au contact, la balle s'écrase un peu : elle est déformée.", "Sa trajectoire et sa vitesse changent : son mouvement est modifié."], "approfondissement"),
        ("Vrai ou faux ? Pour décrire complètement une force, il suffit de donner sa valeur.", "Faux",
         ["Il faut quatre renseignements : point d'application, direction, sens et valeur."], "intermediaire"),
    ]
    for e, r, c, d in ca:
        add(d, "caracteristiques-force", e, c, r)

    # -- représentation et échelle (9)
    for (ech, F) in ((10, 30), (5, 17.5), (20, 70), (100, 450), (2, 9)):
        L = F / ech
        add("intermediaire", "echelle-fleche",
            f"Avec l'échelle 1 cm pour {ech} N, quelle longueur de flèche faut-il pour représenter une force de {t(F)} N ?",
            [f"$1$ cm représente ${ech}$ N, donc la longueur vaut ${nb(F)} \\div {ech} = {nb(L)}$ cm."],
            f"${nb(L)}$ cm")
    for (ech, L) in ((20, 4.5), (50, 2), (10, 6.5)):
        F = ech * L
        add("intermediaire", "echelle-fleche",
            f"Sur un schéma à l'échelle 1 cm pour {ech} N, une force est représentée par une flèche de {t(L)} cm. Quelle est sa valeur ?",
            [f"Chaque centimètre représente ${ech}$ N : $F = {nb(L)} \\times {ech} = {nb(F)}$ N."],
            f"${nb(F)}$ N")
    add("approfondissement", "echelle-fleche",
        "Sur un même schéma, la flèche A mesure 2 cm et la flèche B mesure 6 cm. Que peut-on dire des valeurs des deux forces ?",
        ["La longueur de la flèche est proportionnelle à la valeur de la force.",
         "$6 \\div 2 = 3$ : la force B est 3 fois plus grande que la force A."],
        "La force B est 3 fois plus grande que la force A")

    # -- ordre de grandeur (7)
    for m in (300, 50, 2000, 1500):
        F = m / 100
        mtxt = f"{t(m)} g" if m < 1000 else f"{t(m / 1000)} kg"
        conv = "" if m < 1000 else f" (${nb(m / 1000)}$ kg $= {nb(m)}$ g)"
        add("application", "ordre-grandeur",
            f"Avec l'ordre de grandeur du cours (environ 1 N pour 100 g), estime la force nécessaire pour soutenir un objet de {mtxt}.",
            [f"Il faut environ $1$ N pour $100$ g{conv}.", f"${nb(m)} \\div 100 = {nb(F)}$, donc environ ${nb(F)}$ N."],
            f"environ ${nb(F)}$ N")
    for F in (4, 12):
        m = F * 100
        add("intermediaire", "ordre-grandeur",
            f"Un dynamomètre qui soutient un objet indique {F} N. Avec l'ordre de grandeur du cours (environ 1 N pour 100 g), estime la masse de l'objet.",
            ["$1$ N correspond à environ $100$ g.", f"${F} \\times 100 = {nb(m)}$ g" + (f", soit ${nb(m / 1000)}$ kg." if m >= 1000 else ".")],
            f"environ ${m}$ g" if m < 1000 else f"environ ${nb(m / 1000)}$ kg")
    add("probleme", "ordre-grandeur",
        "Ton cartable a une masse de 6 kg. Avec l'ordre de grandeur du cours (environ 1 N pour 100 g), estime la force que ton dos doit exercer pour le porter immobile. Un dynamomètre gradué jusqu'à 10 N suffirait-il pour la mesurer ?",
        ["$6$ kg $= 6\\,000$ g, soit environ $6\\,000 \\div 100 = 60$ N.",
         "$60$ N dépasse $10$ N : ce dynamomètre ne suffirait pas."],
        "environ 60 N ; non, le dynamomètre de 10 N ne suffit pas")

    # -- dynamomètre et unités (5)
    dy = [
        ("Quel appareil mesure la valeur d'une force ?", "le dynamomètre",
         ["Le dynamomètre contient un ressort qui s'allonge d'autant plus que la force est grande."], "application"),
        ("Quel appareil mesure une masse ?", "la balance",
         ["La balance indique une masse en grammes ou en kilogrammes."], "application"),
        ("Vrai ou faux ? Un dynamomètre indique une masse en grammes.", "Faux",
         ["Le dynamomètre mesure une force, en newtons.", "La masse se mesure avec une balance."], "intermediaire"),
        ("Pourquoi plus la force est grande, plus le ressort d'un dynamomètre s'allonge-t-il ?",
         "Une force peut déformer un objet : plus elle est grande, plus la déformation est grande",
         ["Une force peut déformer un objet.", "Le ressort s'allonge proportionnellement à la force : on lit la valeur sur la graduation."], "approfondissement"),
        ("Inès écrit : « La force exercée par ma main vaut 25 g. » Corrige son erreur.",
         "Une force s'exprime en newtons (N), pas en grammes",
         ["Le gramme est une unité de masse.", "La valeur d'une force s'exprime en newtons."], "intermediaire"),
    ]
    for e, r, c, d in dy:
        add(d, "dynamometre", e, c, r)

    # -- aimants (8)
    ai = [
        ("On approche le pôle Nord d'un aimant du pôle Sud d'un autre aimant. Que se passe-t-il ?", "Ils s'attirent",
         ["Pôles différents → attraction."], "application"),
        ("On approche le pôle Nord d'un aimant du pôle Nord d'un autre aimant. Que se passe-t-il ?", "Ils se repoussent",
         ["Pôles identiques → répulsion."], "application"),
        ("On approche le pôle Sud d'un aimant du pôle Sud d'un autre aimant. Que se passe-t-il ?", "Ils se repoussent",
         ["Pôles identiques → répulsion."], "application"),
        ("On casse un aimant droit en deux morceaux. Qu'obtient-on ?", "deux aimants, chacun avec un pôle Nord et un pôle Sud",
         ["On ne peut pas séparer les deux pôles : chaque morceau devient un aimant complet."], "intermediaire"),
        ("Un aimant attire-t-il une canette en aluminium ?", "Non",
         ["Un aimant n'attire que le fer, l'acier et le nickel.", "L'aluminium n'est pas attiré."], "intermediaire"),
        ("Parmi ces objets, lesquels sont attirés par un aimant : un clou en fer, une pièce en cuivre, une règle en plastique, une boîte de conserve en acier ?",
         "le clou en fer et la boîte de conserve en acier",
         ["Seuls le fer, l'acier et le nickel sont attirés.", "Le cuivre et le plastique ne le sont pas."], "intermediaire"),
        ("Vrai ou faux ? Un aimant peut repousser un clou en fer.", "Faux",
         ["Entre un aimant et un clou, il n'y a qu'attraction.", "La répulsion n'existe qu'entre deux aimants."], "approfondissement"),
        ("Au centre de tri, on veut séparer les canettes en acier des canettes en aluminium. Propose une méthode simple.",
         "Utiliser un gros aimant : il attire l'acier mais pas l'aluminium",
         ["L'acier est attiré par un aimant, l'aluminium ne l'est pas.", "Un aimant retient donc les canettes en acier."], "probleme"),
    ]
    for e, r, c, d in ai:
        add(d, "aimants", e, c, r)

    # -- boussole et champ magnétique terrestre (4)
    bo = [
        ("Vers quoi pointe le pôle Nord de l'aiguille d'une boussole, loin de tout aimant ?", "vers le Nord géographique",
         ["L'aiguille aimantée est orientée par le champ magnétique terrestre."], "application"),
        ("Pourquoi l'aiguille d'une boussole s'oriente-t-elle toujours dans la même direction ?",
         "La Terre se comporte comme un énorme aimant (champ magnétique terrestre)",
         ["La Terre crée un champ magnétique qui agit à distance sur l'aiguille aimantée."], "intermediaire"),
        ("On approche un aimant d'une boussole. Que fait l'aiguille ? Pourquoi ?",
         "Elle se détourne du Nord et suit l'aimant",
         ["L'action de l'aimant tout proche est bien plus forte que celle, lointaine, de la Terre."], "approfondissement"),
        ("Un randonneur pose sa boussole sur un gros rocher riche en fer, juste à côté de sa gourde métallique. Pourquoi peut-il se tromper de direction ?",
         "Les objets en fer proches perturbent l'aiguille, qui n'indique plus le Nord",
         ["Une boussole doit être utilisée loin des aimants et des objets en fer.", "Sinon, l'aiguille est déviée."], "probleme"),
    ]
    for e, r, c, d in bo:
        add(d, "boussole", e, c, r)
    return _fin(E)


# =====================================================================
# 4e — MOUVEMENT : LA RELATION v = d/t
# =====================================================================
def gen_4e_mouvement():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- calcul de vitesse en m/s (8)
    cv = [("Un cycliste", 100, 20), ("Une marcheuse", 300, 250), ("Un sprinteur", 100, 10),
          ("Un nageur", 50, 25), ("Un tramway", 1200, 100), ("Une coureuse", 400, 80),
          ("Un escargot", 0.24, 240), ("Une voiture en ville", 700, 50)]
    for k, (qui, d, tt) in enumerate(cv):
        v = d / tt
        add("application", "calcul-vitesse",
            f"{qui} parcourt {t(d)} m en {t(tt)} s. Calcule sa vitesse moyenne en m/s.",
            [f"$v = \\dfrac{{d}}{{t}} = \\dfrac{{{nb(d)}}}{{{nb(tt)}}} = {nb(v, 3)}$ m/s."],
            f"${nb(v, 3)}$ m/s")

    # -- distance (6)
    di = [("Un train", 30, 120, "s"), ("Un cycliste", 5, 600, "s"), ("Un piéton", 1.4, 900, "s")]
    for qui, v, tt, u in di:
        d = v * tt
        add("intermediaire", "calcul-distance",
            f"{qui} se déplace à la vitesse moyenne de {t(v)} m/s pendant {t(tt)} s. Quelle distance parcourt-il ?",
            [f"$d = v \\times t = {nb(v)} \\times {nb(tt)} = {nb(d)}$ m."],
            f"${nb(d)}$ m")
    for qui, v, h in (("Une voiture sur autoroute", 130, 2), ("Un TGV", 300, 1.5), ("Un camion", 80, 3)):
        d = v * h
        add("intermediaire", "calcul-distance",
            f"{qui} roule à la vitesse moyenne de {v} km/h pendant {t(h)} h. Quelle distance parcourt-{'elle' if qui.startswith('Une') else 'il'} ?",
            [f"Les unités sont cohérentes (km/h et h) : $d = {v} \\times {nb(h)} = {nb(d)}$ km."],
            f"${nb(d)}$ km")

    # -- durée (6)
    du = [("Un coureur", 1500, 5), ("Un drone", 600, 12), ("Une trottinette", 900, 6)]
    for qui, d, v in du:
        tt = d / v
        add("intermediaire", "calcul-duree",
            f"{qui} se déplace à {t(v)} m/s. Combien de temps lui faut-il pour parcourir {t(d)} m ?",
            [f"$t = \\dfrac{{d}}{{v}} = \\dfrac{{{nb(d)}}}{{{nb(v)}}} = {nb(tt)}$ s" + (f", soit ${nb(tt / 60)}$ min." if tt >= 120 else ".")],
            f"${nb(tt)}$ s")
    for qui, d, v in (("Un cycliste", 45, 18), ("Une voiture", 75, 50), ("Un TGV", 450, 300)):
        h = d / v
        hh = int(h)
        mm = round((h - hh) * 60)
        add("approfondissement", "calcul-duree",
            f"{qui} roule à {v} km/h de moyenne. Combien de temps met-{'elle' if qui.startswith('Une') else 'il'} pour parcourir {d} km ? Donne le résultat en heures et minutes.",
            [f"$t = \\dfrac{{d}}{{v}} = \\dfrac{{{d}}}{{{v}}} = {nb(h)}$ h.",
             f"${nb(h - hh)}$ h $= {nb(h - hh)} \\times 60 = {mm}$ min, donc $t = {hh}$ h ${mm}$ min."],
            f"{hh} h {mm:02d} min")

    # -- conversions km/h <-> m/s (8)
    for kmh in (90, 36, 50, 130):
        ms = kmh / 3.6
        exact = abs(ms - round(ms, 1)) < 1e-9
        egal = "=" if exact else "\\approx"
        add("application", "conversion-vitesse",
            f"Convertis {kmh} km/h en m/s" + ("." if exact else " (arrondis au dixième)."),
            ["Pour passer des km/h aux m/s, on divise par $3{,}6$.",
             f"${kmh} \\div 3{{,}}6 {egal} {nb(ms, 1)}$ m/s."],
            f"${nb(ms, 1)}$ m/s" if exact else f"environ ${nb(ms, 1)}$ m/s")
    for ms in (10, 25, 1.5, 340):
        kmh = ms * 3.6
        add("application", "conversion-vitesse",
            f"Convertis {t(ms)} m/s en km/h.",
            ["Pour passer des m/s aux km/h, on multiplie par $3{,}6$.",
             f"${nb(ms)} \\times 3{{,}}6 = {nb(kmh)}$ km/h."],
            f"${nb(kmh)}$ km/h")

    # -- unités cohérentes / problèmes (6)
    add("intermediaire", "unites-coherentes",
        "Un marcheur fait 6 km en 1 h 30 min. Calcule sa vitesse moyenne en km/h.",
        ["$1$ h $30$ min $= 1{,}5$ h (et non $1{,}30$ h).", "$v = \\dfrac{6}{1{,}5} = 4$ km/h."], "$4$ km/h")
    add("intermediaire", "unites-coherentes",
        "Un cycliste parcourt 9 km en 30 min. Calcule sa vitesse moyenne en km/h.",
        ["$30$ min $= 0{,}5$ h.", "$v = \\dfrac{9}{0{,}5} = 18$ km/h."], "$18$ km/h")
    add("approfondissement", "unites-coherentes",
        "Un coureur fait le tour d'un stade de 400 m en 1 min 20 s. Calcule sa vitesse moyenne en m/s, puis en km/h.",
        ["$1$ min $20$ s $= 60 + 20 = 80$ s.", "$v = \\dfrac{400}{80} = 5$ m/s.", "$5 \\times 3{,}6 = 18$ km/h."],
        "$5$ m/s, soit $18$ km/h")
    add("approfondissement", "unites-coherentes",
        "Un bus parcourt 12 km en 20 min. Calcule sa vitesse moyenne en km/h.",
        ["$20$ min $= \\dfrac{20}{60}$ h $= \\dfrac{1}{3}$ h.", "$v = 12 \\div \\dfrac{1}{3} = 12 \\times 3 = 36$ km/h."], "$36$ km/h")
    v = 50 / 3.6
    tt = 1000 / v
    add("probleme", "unites-coherentes",
        "En ville, une voiture roule à 50 km/h. Combien de secondes met-elle pour parcourir 1 km ? Arrondis à l'unité.",
        [f"$50$ km/h $= 50 \\div 3{{,}}6 \\approx {nb(v, 1)}$ m/s.",
         f"$t = \\dfrac{{1\\,000}}{{50 \\div 3{{,}}6}} = \\dfrac{{1\\,000 \\times 3{{,}}6}}{{50}} = {nb(tt)}$ s."],
        f"${nb(tt, 0)}$ s")
    add("probleme", "unites-coherentes",
        "Élise habite à 2,4 km du collège. Elle y va à vélo à 15 km/h. Combien de minutes dure son trajet ?",
        ["$t = \\dfrac{d}{v} = \\dfrac{2{,}4}{15} = 0{,}16$ h.", "$0{,}16 \\times 60 = 9{,}6$ min, soit environ $10$ min."],
        "environ $10$ min ($9{,}6$ min)")

    # -- trajectoire et évolution de la vitesse (8)
    te = [
        ("Une bille lâchée en haut d'un plan incliné droit descend de plus en plus vite. Décris son mouvement.", "rectiligne accéléré"),
        ("Une personne immobile sur un tapis roulant droit avance toujours à la même vitesse. Décris son mouvement.", "rectiligne uniforme"),
        ("Un vélo freine sur une route droite jusqu'à l'arrêt. Décris son mouvement.", "rectiligne ralenti (décéléré)"),
        ("Une cabine de grande roue tourne à vitesse constante. Décris son mouvement.", "circulaire uniforme"),
        ("Une voiture démarre au feu vert sur une avenue droite. Décris son mouvement.", "rectiligne accéléré"),
        ("Un ballon lancé vers le haut monte à la verticale de moins en moins vite. Décris son mouvement pendant la montée.", "rectiligne ralenti (décéléré)"),
    ]
    for e, r in te:
        add("intermediaire", "description-mouvement", e,
            ["On donne la forme de la trajectoire et l'évolution de la vitesse.", f"Ici : mouvement {r}."], f"mouvement {r}")
    add("application", "description-mouvement",
        "Comment appelle-t-on un mouvement dont la vitesse reste constante ?",
        ["Vitesse constante : mouvement uniforme."], "un mouvement uniforme")
    add("application", "description-mouvement",
        "Quelle est la forme de la trajectoire d'un mouvement rectiligne ?",
        ["Rectiligne : la trajectoire est une droite."], "une droite")

    # -- vitesse moyenne / instantanée, circulaire uniforme (8)
    vi = [
        ("Vrai ou faux ? Le compteur d'une voiture affiche la vitesse moyenne du trajet.", "Faux",
         ["Le compteur affiche la vitesse instantanée, à un moment précis.", "La vitesse moyenne se calcule sur tout le trajet avec $v = \\dfrac{d}{t}$."], "intermediaire"),
        ("Vrai ou faux ? Dans un mouvement circulaire uniforme, rien ne change.", "Faux",
         ["La valeur de la vitesse reste constante.", "Mais la direction du déplacement change sans arrêt."], "approfondissement"),
        ("La Lune tourne autour de la Terre sur une trajectoire presque circulaire, à vitesse de valeur presque constante. Comment qualifier son mouvement ?",
         "circulaire uniforme", ["Trajectoire circulaire et valeur de la vitesse constante : mouvement circulaire uniforme."], "intermediaire"),
        ("Quelle est l'unité de la vitesse dans le système international ?", "le mètre par seconde (m/s)",
         ["$d$ en mètres et $t$ en secondes donnent $v$ en m/s."], "application"),
        ("Un trajet de 30 km dure 30 min, avec un arrêt à un feu rouge. La vitesse moyenne vaut 60 km/h. La voiture a-t-elle roulé tout le temps à 60 km/h ?",
         "Non", ["La vitesse moyenne lisse tout le trajet.", "La voiture a pu s'arrêter (0 km/h) puis rouler plus vite que 60 km/h."], "approfondissement"),
        ("Pourquoi une vitesse en m/s est-elle toujours plus petite que la même vitesse exprimée en km/h ?",
         "Car on divise par 3,6 : en une seconde on parcourt bien moins de distance qu'en une heure",
         ["$1$ m/s $= 3{,}6$ km/h : la valeur en m/s est 3,6 fois plus petite."], "approfondissement"),
        ("Zoé trouve qu'une voiture à 72 km/h roule à 259,2 m/s. Quelle erreur a-t-elle faite ? Donne le bon résultat.",
         "Elle a multiplié au lieu de diviser : $72$ km/h $= 20$ m/s",
         ["De km/h vers m/s, on divise par $3{,}6$.", "$72 \\div 3{,}6 = 20$ m/s."], "probleme"),
        ("Écris les trois formes de la relation entre vitesse, distance et durée.",
         "$v = \\dfrac{d}{t}$ ; $d = v \\times t$ ; $t = \\dfrac{d}{v}$",
         ["On réarrange $v = \\dfrac{d}{t}$ selon la grandeur cherchée."], "application"),
    ]
    for e, r, c, d in vi:
        add(d, "vitesse-cours", e, c, r)
    return _fin(E)


# =====================================================================
# 4e — ORGANISATION DE LA MATIÈRE : ATOMES ET MOLÉCULES
# =====================================================================
_NOMS_EL = {"H": "hydrogène", "O": "oxygène", "C": "carbone", "N": "azote", "Cl": "chlore",
            "S": "soufre", "Fe": "fer", "Cu": "cuivre", "Na": "sodium", "Al": "aluminium",
            "Zn": "zinc", "Mg": "magnésium", "Ca": "calcium", "He": "hélium", "Ne": "néon",
            "Li": "lithium", "K": "potassium", "Ag": "argent", "Au": "or", "Pb": "plomb"}


def _datome(el, n):
    """'2 atomes d'hydrogène' / '1 atome de carbone'."""
    return f"{pl(n, 'atome')} {de(_NOMS_EL[el])}"


def gen_4e_organisation():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    mol = [("H2O", "d'eau"), ("CO2", "de dioxyde de carbone"), ("CH4", "de méthane"),
           ("NH3", "d'ammoniac"), ("C6H12O6", "de glucose"), ("C2H6O", "d'éthanol"),
           ("C3H8", "de propane"), ("C4H10", "de butane"), ("O3", "d'ozone")]
    # -- compter les atomes d'une molécule (9)
    for f, nom in mol:
        a = atomes(f)
        tot = sum(a.values())
        det = " ; ".join(_datome(el, n) for el, n in a.items())
        add("application", "compter-atomes",
            f"Une molécule {nom} a pour formule ${tex_formule(f)}$. Combien d'atomes de chaque sorte contient-elle, et combien au total ?",
            ["L'indice (en bas à droite) donne le nombre d'atomes ; sans indice, il vaut 1.",
             f"{det[0].upper() + det[1:]}.", f"Total : {pl(tot, 'atome')}."],
            f"{det} ; total {tot}")

    # -- indice et coefficient (8)
    ic = [(3, "H2O", "H", "d'eau"), (2, "CO2", "O", "de dioxyde de carbone"), (4, "CH4", "H", "de méthane"),
          (5, "O2", "O", "de dioxygène"), (2, "NH3", "H", "d'ammoniac"), (3, "C2H6O", "C", "d'éthanol")]
    for k, f, el, nom in ic:
        n1 = atomes(f)[el]
        add("intermediaire", "indice-coefficient",
            f"Combien d'atomes {de(_NOMS_EL[el])} y a-t-il en tout dans ${k}\\,{tex_formule(f)}$ ?",
            [f"${k}\\,{tex_formule(f)}$ représente {k} molécules {nom}.",
             f"Chaque molécule contient {_datome(el, n1)} : ${k} \\times {n1} = {k * n1}$."],
            f"{_datome(el, k * n1)}")
    add("application", "indice-coefficient",
        "Dans $3\\,\\mathrm{H_2O}$, que représente le nombre 3 ? Et le nombre 2 ?",
        ["Le 3 (coefficient, devant) compte les molécules : 3 molécules d'eau.",
         "Le 2 (indice, en bas) compte les atomes d'hydrogène dans une molécule."],
        "3 = nombre de molécules ; 2 = nombre d'atomes d'hydrogène par molécule")
    add("approfondissement", "indice-coefficient",
        "Écris, avec un coefficient, « quatre molécules de dioxygène ». Combien d'atomes d'oxygène cela fait-il ?",
        ["Quatre molécules : coefficient 4 devant $\\mathrm{O_2}$.", "$4 \\times 2 = 8$ atomes d'oxygène."],
        "$4\\,\\mathrm{O_2}$ ; 8 atomes d'oxygène")

    # -- symboles (7)
    for el in ("Cu", "Fe", "N", "Cl", "Na"):
        add("application", "symboles",
            f"Quel atome a pour symbole $\\mathrm{{{el}}}$ ?",
            [f"$\\mathrm{{{el}}}$ est le symbole de l'atome {de(_NOMS_EL[el])}."],
            f"l'atome {de(_NOMS_EL[el])}")
    add("intermediaire", "symboles",
        "Un élève écrit « CU » pour le cuivre. Corrige son erreur.",
        ["La première lettre d'un symbole est une majuscule, la seconde une minuscule."], "Il faut écrire Cu")
    add("intermediaire", "symboles",
        "Écris les formules des molécules de dioxygène, d'eau et de dioxyde de carbone.",
        ["Dioxygène : 2 atomes d'oxygène. Eau : 2 H et 1 O. Dioxyde de carbone : 1 C et 2 O."],
        "$\\mathrm{O_2}$ ; $\\mathrm{H_2O}$ ; $\\mathrm{CO_2}$")

    # -- états de la matière vus de l'intérieur (8)
    et = [
        ("Dans quel état les molécules sont-elles serrées et rangées de façon régulière ?", "l'état solide (compact ordonné)", "application",
         "Dans un solide, les molécules se touchent et sont rangées : compact ordonné."),
        ("Dans quel état les molécules sont-elles très espacées et agitées en tous sens ?", "l'état gazeux (dispersé désordonné)", "application",
         "Dans un gaz, les molécules sont éloignées les unes des autres et en désordre : dispersé désordonné."),
        ("Dans quel état les molécules sont-elles serrées mais en désordre ?", "l'état liquide (compact désordonné)", "application",
         "Dans un liquide, les molécules se touchent mais ne sont pas rangées : compact désordonné."),
        ("Vrai ou faux ? Dans un liquide, les molécules sont rangées de façon ordonnée.", "Faux : le liquide est compact et désordonné", "intermediaire",
         "Seul le solide est ordonné ; dans un liquide, les molécules sont serrées mais en désordre."),
        ("Pourquoi peut-on comprimer facilement un gaz, mais pas un liquide ?", "Dans un gaz, il y a beaucoup de vide entre les molécules", "approfondissement",
         "Dans un gaz, les molécules sont très espacées : on peut les rapprocher. Dans un liquide, elles se touchent déjà."),
        ("Un glaçon fond. Les molécules d'eau ont-elles changé ? Qu'est-ce qui a changé ?", "Ce sont les mêmes molécules ; seul leur rangement a changé", "intermediaire",
         "Les molécules $\\mathrm{H_2O}$ restent les mêmes ; elles passent d'un état compact ordonné à un état compact désordonné."),
        ("Vrai ou faux ? Un ballon gonflé a une masse plus grande que le même ballon dégonflé.", "Vrai : un gaz a une masse", "approfondissement",
         "L'air ajouté est fait de molécules, et chaque molécule a une masse."),
        ("Pourquoi un liquide prend-il la forme du récipient qui le contient ?", "Ses molécules, en désordre, peuvent glisser les unes sur les autres", "intermediaire",
         "Les molécules d'un liquide ne sont pas rangées : elles glissent les unes sur les autres et épousent la forme du récipient."),
    ]
    for e, r, d, c in et:
        add(d, "etats-microscopiques", e, [c], r)

    # -- échelles (6)
    add("application", "echelles",
        "Un verre d'eau est-il décrit à l'échelle macroscopique ou microscopique ? Et une molécule d'eau ?",
        ["Ce que l'on voit et mesure à l'œil nu : échelle macroscopique.", "Les atomes et molécules, invisibles : échelle microscopique."],
        "le verre : macroscopique ; la molécule : microscopique")
    add("intermediaire", "echelles",
        "Un atome mesure environ 0,1 nm, soit $10^{-10}$ m. Combien d'atomes pourrait-on aligner sur 1 mm ($10^{-3}$ m) ?",
        ["On divise la longueur par la taille d'un atome.", "$\\dfrac{10^{-3}}{10^{-10}} = 10^{7}$, soit 10 millions d'atomes."],
        "$10^{7}$ atomes (10 millions)")
    add("intermediaire", "echelles",
        "Convertis 0,1 nm en mètres, sachant que 1 nm $= 10^{-9}$ m.",
        ["$0{,}1 \\times 10^{-9} = 10^{-1} \\times 10^{-9} = 10^{-10}$ m."], "$10^{-10}$ m")
    add("approfondissement", "echelles",
        "Un cheveu a une épaisseur d'environ 0,1 mm, soit $10^{-4}$ m. Combien d'atomes ($10^{-10}$ m chacun) faudrait-il aligner pour égaler cette épaisseur ?",
        ["$\\dfrac{10^{-4}}{10^{-10}} = 10^{6}$."], "$10^{6}$ atomes (un million)")
    add("application", "echelles",
        "Peut-on voir un atome avec un microscope optique de collège ?",
        ["Non : un atome est bien trop petit (environ $10^{-10}$ m)."], "Non")
    add("approfondissement", "echelles",
        "Vrai ou faux ? Une goutte d'eau et un litre d'eau sont faits de molécules différentes.",
        ["Faux : ce sont les mêmes molécules d'eau, $\\mathrm{H_2O}$.", "Il y en a simplement beaucoup plus dans un litre."], "Faux")

    # -- solubilité (12)
    for (s, V, nom) in ((360, 250, "sel"), (360, 500, "sel"), (360, 50, "sel"), (2000, 200, "sucre"),
                        (2000, 75, "sucre"), (96, 500, "bicarbonate de sodium")):
        m = s * V / 1000
        add("intermediaire", "solubilite",
            f"La solubilité du {nom} dans l'eau vaut {t(s)} g/L à 20 °C. Quelle masse maximale de {nom} peut-on dissoudre dans {V} mL d'eau à cette température ?",
            [f"On convertit : ${V}$ mL $= {nb(V / 1000, 3)}$ L.",
             f"$m_{{\\text{{max}}}} = s \\times V = {nb(s)} \\times {nb(V / 1000, 3)} = {nb(m)}$ g."],
            f"${nb(m)}$ g")
    for (m, V) in ((90, 250), (18, 50)):
        s = m / (V / 1000)
        add("approfondissement", "solubilite",
            f"On dissout au maximum {m} g de sel dans {V} mL d'eau à 20 °C. Quelle est la solubilité du sel en g/L ?",
            [f"$V = {V}$ mL $= {nb(V / 1000, 3)}$ L.", f"$s = \\dfrac{{m_{{\\text{{max}}}}}}{{V}} = \\dfrac{{{m}}}{{{nb(V / 1000, 3)}}} = {nb(s)}$ g/L."],
            f"${nb(s)}$ g/L")
    add("probleme", "solubilite",
        "On verse 120 g de sel dans 300 mL d'eau à 20 °C (solubilité : 360 g/L). La solution est-elle saturée ? Quelle masse de sel reste éventuellement au fond ?",
        ["$m_{\\text{max}} = 360 \\times 0{,}300 = 108$ g.", "$120 > 108$ : la solution est saturée et $120 - 108 = 12$ g restent au fond."],
        "Oui, saturée ; 12 g restent au fond")
    add("probleme", "solubilite",
        "Le diiode se dissout mal dans l'eau mais bien dans le cyclohexane. Que montre cet exemple sur la solubilité ?",
        ["Une même espèce peut être soluble dans un solvant et peu soluble dans un autre.",
         "La solubilité dépend du couple soluté–solvant."], "La solubilité dépend du couple soluté–solvant")
    add("application", "solubilite",
        "Dans l'eau salée, quel est le soluté et quel est le solvant ?",
        ["Le soluté est l'espèce dissoute : le sel.", "Le solvant est le liquide qui dissout : l'eau."],
        "soluté : le sel ; solvant : l'eau")
    add("intermediaire", "solubilite",
        "Le sel se dissout-il dans l'huile ? Que peut-on en conclure ?",
        ["Non : le sel se dissout bien dans l'eau mais pas dans l'huile.", "La solubilité dépend du solvant utilisé."],
        "Non : la solubilité dépend du solvant")
    return _fin(E)


# =====================================================================
# 4e — PUISSANCE ET ÉNERGIE
# =====================================================================
def gen_4e_puissance():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- modes de transfert (7)
    mo = [
        ("une pile qui alimente une lampe par des fils", "électrique"),
        ("un radiateur qui réchauffe l'air d'une pièce", "thermique"),
        ("le Soleil qui chauffe ta peau", "par rayonnement"),
        ("une main qui remonte un seau au bout d'une corde", "mécanique"),
        ("une plaque de cuisson qui chauffe le fond d'une casserole", "thermique"),
    ]
    for nom, r in mo:
        add("application", "modes-transfert",
            f"Quel est le mode de transfert d'énergie dans la situation suivante : {nom} ?",
            ["Quatre modes : électrique, thermique, par rayonnement, mécanique.", f"Ici : transfert {r}."],
            f"transfert {r}")
    add("intermediaire", "modes-transfert",
        "Une lampe branchée sur une pile éclaire et chauffe. Par quels modes reçoit-elle et cède-t-elle de l'énergie ?",
        ["Elle reçoit l'énergie par transfert électrique (les fils).",
         "Elle la cède par rayonnement (la lumière) et par transfert thermique (elle chauffe)."],
        "reçue : électrique ; cédée : rayonnement et thermique")
    add("intermediaire", "modes-transfert",
        "Vrai ou faux ? L'énergie thermique se mesure dans une autre unité que le joule.",
        ["Faux : « thermique » décrit le mode de transfert.", "L'énergie se mesure toujours en joules (J)."], "Faux")

    # -- P = E / t (9)
    pe = [(1200, 20, "une lampe"), (6000, 3, "une bouilloire"), (90000, 60, "un sèche-cheveux"),
          (30000, 50, "un aspirateur"), (540, 60, "une ampoule LED")]
    for Ej, ts, nom in pe:
        P = Ej / ts
        add("application", "puissance-energie-duree",
            f"{nom[0].upper() + nom[1:]} transfère {t(Ej)} J en {ts} s. Calcule sa puissance.",
            [f"$P = \\dfrac{{E}}{{t}} = \\dfrac{{{nb(Ej)}}}{{{ts}}} = {nb(P)}$ W."],
            f"${nb(P)}$ W")
    for Ej, mn, nom in ((1080000, 10, "un four"), (72000, 2, "un grille-pain"), (360000, 30, "un téléviseur")):
        ts = mn * 60
        P = Ej / ts
        add("intermediaire", "puissance-energie-duree",
            f"{nom[0].upper() + nom[1:]} transfère {t(Ej)} J en {mn} min. Calcule sa puissance.",
            [f"La durée doit être en secondes : ${mn}$ min $= {mn} \\times 60 = {nb(ts)}$ s.",
             f"$P = \\dfrac{{{nb(Ej)}}}{{{nb(ts)}}} = {nb(P)}$ W."],
            f"${nb(P)}$ W")
    add("application", "puissance-energie-duree",
        "Que signifie l'indication « 60 W » sur une lampe ?",
        ["$1$ W $= 1$ J transféré par seconde.", "La lampe transfère 60 J d'énergie chaque seconde."],
        "Elle transfère 60 J chaque seconde")

    # -- E = P × t (8)
    for P, ts, nom in ((1000, 30, "un radiateur"), (2000, 90, "une bouilloire"), (10, 3600, "une lampe LED")):
        Ej = P * ts
        add("application", "calcul-energie",
            f"{nom[0].upper() + nom[1:]} de {t(P)} W fonctionne pendant {t(ts)} s. Quelle énergie reçoit-il (ou elle) ?".replace(" reçoit-il (ou elle)", " reçoit-elle" if nom.startswith("une") else " reçoit-il"),
            [f"$E = P \\times t = {nb(P)} \\times {nb(ts)} = {nb(Ej)}$ J."],
            f"${nb(Ej)}$ J")
    for P, mn, nom in ((1800, 5, "un sèche-cheveux"), (800, 15, "un aspirateur"), (2000, 3, "une bouilloire")):
        ts = mn * 60
        Ej = P * ts
        add("intermediaire", "calcul-energie",
            f"{nom[0].upper() + nom[1:]} de {t(P)} W fonctionne pendant {mn} min. Calcule l'énergie transférée en joules, puis en kilojoules.",
            [f"${mn}$ min $= {nb(ts)}$ s.", f"$E = {nb(P)} \\times {nb(ts)} = {nb(Ej)}$ J $= {nb(Ej / 1000)}$ kJ."],
            f"${nb(Ej)}$ J, soit ${nb(Ej / 1000)}$ kJ")
    for P, h, nom in ((2, 3, "un radiateur de 2 kW"), (2.5, 1.5, "un four de 2,5 kW")):
        Ek = P * h
        add("intermediaire", "calcul-energie",
            f"Quelle énergie, en kWh, consomme {nom} qui fonctionne pendant {t(h)} h ?",
            ["Puissance en kW et durée en h : l'énergie sort en kWh.", f"$E = {nb(P)} \\times {nb(h)} = {nb(Ek)}$ kWh."],
            f"${nb(Ek)}$ kWh")

    # -- P = U × I (9)
    pui = [(230, 0.26, "une lampe"), (230, 6.5, "un radiateur"), (12, 2.5, "un phare de voiture"),
           (230, 5, "un grille-pain")]
    for U, I, nom in pui:
        P = U * I
        add("application", "puissance-electrique",
            f"{nom[0].upper() + nom[1:]} fonctionne sous {U} V et est parcouru(e) par un courant de {t(I)} A. Calcule sa puissance.".replace("parcouru(e)", "parcourue" if nom.startswith("une") else "parcouru"),
            [f"$P = U \\times I = {U} \\times {nb(I)} = {nb(P)}$ W."],
            f"${nb(P)}$ W")
    for U, mA, nom in ((6, 250, "une petite lampe"), (5, 400, "un ventilateur USB")):
        I = mA / 1000
        P = U * I
        add("intermediaire", "puissance-electrique",
            f"{nom[0].upper() + nom[1:]} est alimenté(e) sous {U} V et parcouru(e) par {mA} mA. Calcule sa puissance.".replace("alimenté(e)", "alimentée" if nom.startswith("une") else "alimenté").replace("parcouru(e)", "parcourue" if nom.startswith("une") else "parcouru"),
            [f"On convertit : ${mA}$ mA $= {nb(I, 3)}$ A.", f"$P = {U} \\times {nb(I, 3)} = {nb(P)}$ W."],
            f"${nb(P)}$ W")
    for P, U, nom in ((1150, 230, "un grille-pain"), (2300, 230, "un lave-linge"), (460, 230, "un réfrigérateur")):
        I = P / U
        add("approfondissement", "puissance-electrique",
            f"{nom[0].upper() + nom[1:]} de {t(P)} W est branché sur une prise de {U} V. Quelle intensité le traverse ?",
            [f"$I = \\dfrac{{P}}{{U}} = \\dfrac{{{nb(P)}}}{{{U}}} = {nb(I)}$ A."],
            f"${nb(I)}$ A")

    # -- puissance du générateur (6)
    for lst in ((40, 25), (60, 15, 8), (2000, 1200, 800), (5, 3, 3, 1)):
        S = sum(lst)
        add("intermediaire", "puissance-generateur",
            f"Un générateur alimente des dipôles de puissances {', '.join(t(x) + ' W' for x in lst[:-1])} et {t(lst[-1])} W. Quelle puissance fournit-il ?",
            ["La puissance fournie par le générateur est égale à la somme des puissances reçues.",
             f"$P = {' + '.join(nb(x) for x in lst)} = {nb(S)}$ W."],
            f"${nb(S)}$ W")
    Pt, P1 = 3500, 2000
    add("approfondissement", "puissance-generateur",
        "Sur une multiprise branchée au secteur, un radiateur de 2 000 W et une bouilloire fonctionnent ensemble. La prise fournit 3 500 W. Quelle est la puissance de la bouilloire ?",
        ["$P_{\\text{générateur}} = P_1 + P_2$.", f"$P_2 = {nb(Pt)} - {nb(P1)} = {nb(Pt - P1)}$ W."],
        f"${nb(Pt - P1)}$ W")
    Itot = (2000 + 1500 + 1800) / 230
    add("probleme", "puissance-generateur",
        "Sur une même prise de 230 V, on branche un radiateur de 2 000 W, une bouilloire de 1 500 W et un sèche-cheveux de 1 800 W. La prise supporte au plus 16 A. Y a-t-il un risque ?",
        ["Puissance totale : $2\\,000 + 1\\,500 + 1\\,800 = 5\\,300$ W.",
         f"$I = \\dfrac{{5\\,300}}{{230}} \\approx {nb(Itot, 1)}$ A $> 16$ A : la prise est surchargée."],
        f"Oui : environ ${nb(Itot, 1)}$ A, plus que 16 A")

    # -- kWh et joules (5)
    for k in (1, 2.5, 0.5):
        j = k * 3.6e6
        add("intermediaire", "kwh-joule",
            f"Convertis {t(k)} kWh en joules.",
            ["$1$ kWh $= 3{,}6 \\times 10^{6}$ J.", f"${nb(k)} \\times 3{{,}}6 \\times 10^{{6}} = {nb(j)}$ J."],
            f"${nb(j)}$ J")
    add("approfondissement", "kwh-joule",
        "Retrouve par le calcul que 1 kWh vaut 3 600 000 J.",
        ["$1$ kWh, c'est $1\\,000$ W pendant $1$ h $= 3\\,600$ s.", "$E = 1\\,000 \\times 3\\,600 = 3\\,600\\,000$ J."],
        "$1\\,000 \\times 3\\,600 = 3\\,600\\,000$ J")
    add("approfondissement", "kwh-joule",
        "Convertis 7 200 000 J en kWh.",
        ["On divise par $3\\,600\\,000$ : $\\dfrac{7\\,200\\,000}{3\\,600\\,000} = 2$ kWh."], "$2$ kWh")

    # -- problèmes concrets (6)
    add("probleme", "problemes-energie",
        "Une bouilloire de 2 000 W chauffe l'eau en 3 min. Le prix du kWh est de 0,25 €. Quel est le coût de cette utilisation ?",
        ["$E = 2$ kW $\\times \\dfrac{3}{60}$ h $= 0{,}1$ kWh.", "Coût : $0{,}1 \\times 0{,}25 = 0{,}025$ €, soit 2,5 centimes."],
        "$0{,}025$ € (2,5 centimes)")
    add("probleme", "problemes-energie",
        "Une ampoule LED de 8 W reste allumée 5 h par jour pendant 30 jours. Quelle énergie consomme-t-elle en kWh ?",
        ["Durée totale : $5 \\times 30 = 150$ h.", "$E = 0{,}008$ kW $\\times 150$ h $= 1{,}2$ kWh."], "$1{,}2$ kWh")
    add("probleme", "problemes-energie",
        "Un élève trouve qu'une lampe de bureau a une puissance de 60 000 W. Que penses-tu de ce résultat ?",
        ["Une lampe fait quelques watts à quelques dizaines de watts.", "60 000 W est absurde : il a sans doute oublié une conversion (minutes en secondes, mA en A…)."],
        "Résultat absurde : il y a une erreur de conversion")
    add("probleme", "problemes-energie",
        "Un chargeur de téléphone de 15 W fonctionne pendant 2 h. Quelle énergie transfère-t-il en joules ?",
        ["$2$ h $= 7\\,200$ s.", "$E = 15 \\times 7\\,200 = 108\\,000$ J."], "$108\\,000$ J")
    add("probleme", "problemes-energie",
        "Un four de 2 500 W et une plaque de cuisson de 1 500 W fonctionnent ensemble pendant 30 min. Quelle énergie consomment-ils en tout, en kWh ?",
        ["Puissance totale : $2\\,500 + 1\\,500 = 4\\,000$ W $= 4$ kW.", "$E = 4 \\times 0{,}5 = 2$ kWh."], "$2$ kWh")
    add("probleme", "problemes-energie",
        "Deux appareils transfèrent chacun 36 000 J. Le premier met 20 s, le second 2 min. Lequel est le plus puissant ? Calcule les deux puissances.",
        ["$P_1 = \\dfrac{36\\,000}{20} = 1\\,800$ W.", "$P_2 = \\dfrac{36\\,000}{120} = 300$ W.", "Le premier est le plus puissant : il transfère la même énergie plus vite."],
        "le premier ($1\\,800$ W contre $300$ W)")
    return _fin(E)


# =====================================================================
# 4e — TRANSFORMATION CHIMIQUE ET CONSERVATION DE LA MASSE
# =====================================================================
_EQ_4E = [  # (gauche, droite, nom) — toutes vérifiées par le code
    ([(1, "C"), (1, "O2")], [(1, "CO2")], "combustion du carbone"),
    ([(2, "H2"), (1, "O2")], [(2, "H2O")], "formation de l'eau"),
    ([(1, "CH4"), (2, "O2")], [(1, "CO2"), (2, "H2O")], "combustion du méthane"),
    ([(2, "C"), (1, "O2")], [(2, "CO")], "combustion incomplète du carbone"),
    ([(2, "CO"), (1, "O2")], [(2, "CO2")], "combustion du monoxyde de carbone"),
    ([(1, "C3H8"), (5, "O2")], [(3, "CO2"), (4, "H2O")], "combustion du propane"),
    ([(1, "N2"), (3, "H2")], [(2, "NH3")], "synthèse de l'ammoniac"),
    ([(2, "H2O")], [(2, "H2"), (1, "O2")], "décomposition de l'eau"),
    ([(1, "C2H6O"), (3, "O2")], [(2, "CO2"), (3, "H2O")], "combustion de l'éthanol"),
    ([(2, "C4H10"), (13, "O2")], [(8, "CO2"), (10, "H2O")], "combustion du butane"),
    ([(1, "S"), (1, "O2")], [(1, "SO2")], "combustion du soufre"),
    ([(2, "Cu"), (1, "O2")], [(2, "CuO")], "réaction du cuivre avec le dioxygène"),
]
for _g, _d, _n in _EQ_4E:
    _verifie_equation(_g, _d)


def _brut(cote):
    return [(1, f) for _, f in cote]


def gen_4e_conservation():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- physique ou chimique (6)
    pc = [
        ("l'eau qui bout et devient de la vapeur", "physique", "ce sont toujours des molécules $\\mathrm{H_2O}$"),
        ("le bois qui brûle", "chimique", "de nouvelles substances apparaissent (dioxyde de carbone, eau, cendres)"),
        ("le fer qui rouille", "chimique", "une substance nouvelle, la rouille, apparaît"),
        ("la glace qui fond", "physique", "l'eau change d'état, les molécules restent les mêmes"),
        ("la décomposition de l'eau en dihydrogène et dioxygène", "chimique", "de nouvelles molécules se forment"),
        ("du chocolat qui fond au soleil", "physique", "seul l'état change"),
    ]
    for nom, r, why in pc:
        add("application", "physique-chimique",
            f"Transformation physique ou chimique : {nom} ?", [f"Transformation {r} : {why}."], r)

    # -- réactifs et produits (6)
    rp = [("La combustion du méthane dans le dioxygène produit du dioxyde de carbone et de l'eau.", "méthane et dioxygène", "dioxyde de carbone et eau"),
          ("Le fer réagit avec le soufre pour former du sulfure de fer.", "fer et soufre", "sulfure de fer"),
          ("Le carbone brûle dans le dioxygène et donne du dioxyde de carbone.", "carbone et dioxygène", "dioxyde de carbone")]
    for txt, r, p in rp:
        add("application", "reactifs-produits", f"{txt} Quels sont les réactifs ? les produits ?",
            ["Réactifs : substances consommées (état initial).", "Produits : substances formées (état final).", f"Réactifs : {r} ; produits : {p}."],
            f"réactifs : {r} ; produits : {p}")
    add("intermediaire", "reactifs-produits",
        "Une bougie brûle sous un bocal retourné, puis s'éteint alors qu'il reste de la cire. Quel réactif a été entièrement consommé ?",
        ["La combustion s'arrête quand un réactif est épuisé.", "Il reste de la cire : c'est le dioxygène du bocal qui a été épuisé."],
        "le dioxygène")
    add("intermediaire", "reactifs-produits",
        "Vrai ou faux ? La flèche d'un bilan de réaction peut être remplacée par un signe « = ».",
        ["Faux : la flèche a un sens, des réactifs (avant) vers les produits (après)."], "Faux")
    add("approfondissement", "reactifs-produits",
        "Pourquoi la masse ne change-t-elle pas au cours d'une transformation chimique en récipient fermé ?",
        ["Les atomes ne sont ni créés ni détruits, ils sont seulement réorganisés.", "Chaque atome a une masse : la masse totale se conserve."],
        "Les atomes sont conservés, seulement réorganisés")

    # -- conservation de la masse (10) — masses cohérentes avec les vraies proportions
    cm = [  # (réactifs [(nom, m)], produit, m_produit)
        ([("carbone", 12), ("dioxygène", 32)], "dioxyde de carbone"),
        ([("carbone", 3), ("dioxygène", 8)], "dioxyde de carbone"),
        ([("fer", 7), ("soufre", 4)], "sulfure de fer"),
        ([("dihydrogène", 4), ("dioxygène", 32)], "eau"),
        ([("magnésium", 2.4), ("dioxygène", 1.6)], "oxyde de magnésium"),
    ]
    for reac, prod in cm:
        S = sum(m for _, m in reac)
        add("application", "conservation-masse",
            f"{t(reac[0][1])} g de {reac[0][0]} réagissent entièrement avec {t(reac[1][1])} g de {reac[1][0]}. Quelle masse {de(prod)} obtient-on ?",
            ["Conservation de la masse : $m_{\\text{réactifs}} = m_{\\text{produits}}$.",
             f"$m = {nb(reac[0][1])} + {nb(reac[1][1])} = {nb(S)}$ g."],
            f"${nb(S)}$ g")
    mm = [  # (réactif connu, m1, réactif cherché, produit, m produit)
        ("carbone", 6, "dioxygène", "dioxyde de carbone", 22),
        ("fer", 14, "soufre", "sulfure de fer", 22),
        ("méthane", 16, "dioxygène", "dioxyde de carbone et d'eau", 80),
    ]
    for r1, m1, r2, p, mp in mm:
        add("intermediaire", "conservation-masse",
            f"{t(m1)} g de {r1} réagissent entièrement avec du {r2}. Il se forme {t(mp)} g {de(p) if not p.startswith('dioxyde de carbone et') else 'de ' + p} au total. Quelle masse de {r2} a réagi ?",
            ["$m_{\\text{réactifs}} = m_{\\text{produits}}$.", f"$m_{{\\text{{{r2}}}}} = {nb(mp)} - {nb(m1)} = {nb(mp - m1)}$ g."],
            f"${nb(mp - m1)}$ g")
    add("approfondissement", "conservation-masse",
        "On brûle 1,2 kg de carbone, qui consomment 3,2 kg de dioxygène. Quelle masse de dioxyde de carbone se forme ? Donne le résultat en kg, puis en g.",
        ["$m = 1{,}2 + 3{,}2 = 4{,}4$ kg.", "$4{,}4$ kg $= 4\\,400$ g."], "$4{,}4$ kg, soit $4\\,400$ g")
    add("approfondissement", "conservation-masse",
        "On fait réagir 500 g de fer avec 0,3 kg de soufre ; tout réagit. Quelle masse de sulfure de fer obtient-on ?",
        ["Même unité avant d'additionner : $0{,}3$ kg $= 300$ g.", "$m = 500 + 300 = 800$ g."], "$800$ g")

    # -- système ouvert (6)
    for (m1, m2) in ((152.4, 151.8), (210.0, 208.7), (98.6, 97.9)):
        dm = m1 - m2
        add("intermediaire", "systeme-ouvert",
            f"Un comprimé effervescent est placé dans un verre d'eau ouvert, posé sur une balance. Elle indique {t(m1, 1, True)} g au début et {t(m2, 1, True)} g à la fin. Quelle masse de gaz s'est échappée ?",
            ["Le dioxyde de carbone formé s'échappe dans l'air : la balance ne le « voit » plus.",
             f"$m_{{\\text{{gaz}}}} = {nb(m1, 1, True)} - {nb(m2, 1, True)} = {nb(dm, 1)}$ g."],
            f"${nb(dm, 1)}$ g")
    add("intermediaire", "systeme-ouvert",
        "On refait l'expérience du comprimé effervescent dans une bouteille bien bouchée. Que va indiquer la balance à la fin ?",
        ["Système fermé : rien n'entre, rien ne sort.", "La balance indique la même masse qu'au début."],
        "la même masse qu'au début")
    add("approfondissement", "systeme-ouvert",
        "Vrai ou faux ? Quand une bougie brûle à l'air libre, sa matière disparaît.",
        ["Faux : les produits (dioxyde de carbone, eau) sont des gaz qui partent dans l'air.", "La masse totale est conservée."], "Faux")
    add("probleme", "systeme-ouvert",
        "De la laine de fer brûle sur une balance, à l'air libre. La masse lue augmente. La loi de conservation de la masse est-elle fausse ?",
        ["Non : le fer réagit avec le dioxygène de l'air, qui vient s'ajouter au solide.",
         "La masse du dioxygène consommé, venue de l'air, explique l'augmentation."],
        "Non : du dioxygène de l'air s'est ajouté au produit")

    # -- compter les atomes dans une équation (8)
    for g, d, nom in _EQ_4E[:6]:
        bg = bilan(g)
        det = " ; ".join(f"{el} : {n}" for el, n in sorted(bg.items()))
        add("intermediaire", "compter-atomes-equation",
            f"Pour la {nom}, $" + tex_equation(g, d) + "$, compte les atomes de chaque sorte de chaque côté. L'équation est-elle ajustée ?",
            ["Le coefficient multiplie toute la formule qui le suit.",
             f"À gauche comme à droite : {det}.", "Mêmes nombres des deux côtés : l'équation est ajustée."],
            f"Oui ({det} de chaque côté)")
    add("intermediaire", "compter-atomes-equation",
        "L'équation $\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow \\mathrm{H_2O}$ est-elle ajustée ?",
        ["Oxygène : 2 à gauche, 1 à droite.", "Les nombres d'atomes diffèrent : elle n'est pas ajustée."], "Non")
    add("approfondissement", "compter-atomes-equation",
        "Pour ajuster $\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow \\mathrm{H_2O}$, Lucas écrit $\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow \\mathrm{H_2O_2}$. Pourquoi est-ce faux ?",
        ["On ne modifie jamais les indices : on changerait la substance.", "$\\mathrm{H_2O_2}$ est l'eau oxygénée, pas l'eau. On ajoute des coefficients devant les formules."],
        "Il a changé un indice : $\\mathrm{H_2O_2}$ n'est plus de l'eau")

    # -- ajuster une équation (8)
    for g, d, nom in _EQ_4E[3:10] + _EQ_4E[11:]:
        add("approfondissement" if len(g) + len(d) >= 4 else "intermediaire", "ajuster-equation",
            f"Ajuste l'équation de la {nom} : $" + tex_equation(_brut(g), _brut(d)) + "$.",
            ["On place des coefficients devant les formules, sans toucher aux indices.",
             "On recompte chaque sorte d'atome de chaque côté.",
             "$" + tex_equation(g, d) + "$"],
            "$" + tex_equation(g, d) + "$")

    # -- coefficients et loi de Lavoisier (6)
    for k, f in ((2, "H2O"), (3, "CO2"), (2, "CH4")):
        a = atomes(f)
        det = " et ".join(_datome(el, k * n) for el, n in a.items())
        add("application", "lavoisier-coefficients",
            f"Combien d'atomes de chaque sorte y a-t-il dans ${k}\\,{tex_formule(f)}$ ?",
            ["Le coefficient multiplie toute la formule.",
             (" ; ".join(f"{_NOMS_EL[el]} : ${k} \\times {n} = {k * n}$" for el, n in a.items()) + ".")[0].upper() + (" ; ".join(f"{_NOMS_EL[el]} : ${k} \\times {n} = {k * n}$" for el, n in a.items()) + ".")[1:]],
            det)
    add("application", "lavoisier-coefficients",
        "Quel savant a résumé la conservation de la masse par « Rien ne se perd, rien ne se crée, tout se transforme » ?",
        ["C'est Antoine Lavoisier, chimiste français du XVIIIe siècle."], "Lavoisier")
    add("intermediaire", "lavoisier-coefficients",
        "Énonce la loi de conservation de la masse.",
        ["Au cours d'une transformation chimique, la masse totale des produits formés est égale à la masse totale des réactifs consommés."],
        "$m_{\\text{réactifs}} = m_{\\text{produits}}$")
    add("intermediaire", "lavoisier-coefficients",
        "Qu'appelle-t-on un système fermé ? Pourquoi est-il nécessaire pour vérifier la conservation de la masse avec une balance ?",
        ["Dans un système fermé, rien n'entre et rien ne sort.", "Sinon un gaz peut s'échapper ou venir de l'air et fausser la mesure."],
        "Un système où rien n'entre ni ne sort")
    return _fin(E)


# =====================================================================
# 3e — ATOMES, IONS ET pH
# =====================================================================
_ATOMES_3E = [  # (symbole, Z, A)
    ("H", 1, 1), ("He", 2, 4), ("Li", 3, 7), ("C", 6, 12), ("N", 7, 14), ("O", 8, 16),
    ("Na", 11, 23), ("Mg", 12, 24), ("Al", 13, 27), ("S", 16, 32), ("Cl", 17, 35),
    ("Ca", 20, 40), ("Fe", 26, 56), ("Cu", 29, 63), ("Zn", 30, 64),
]


def _ion_tex(sym, q):
    if q == 0:
        return f"\\mathrm{{{sym}}}"
    s = ("" if abs(q) == 1 else str(abs(q))) + ("+" if q > 0 else "-")
    return f"\\mathrm{{{sym}}}^{{{s}}}"


def gen_3e_atomes_ions():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    A = {s: (z, a) for s, z, a in _ATOMES_3E}
    # -- structure de l'atome (10)
    for sym in ("C", "Na", "Al", "Cl", "Ca"):
        z, a = A[sym]
        add("application", "structure-atome",
            f"Le noyau de l'atome {de(_NOMS_EL[sym])} contient {pl(z, 'proton')}. Combien d'électrons possède cet atome ?",
            ["Un atome est électriquement neutre : il a autant d'électrons que de protons.",
             f"Il possède donc {pl(z, 'électron')}."],
            pl(z, "électron"))
    for sym in ("O", "Mg", "S", "Fe", "Zn"):
        z, a = A[sym]
        add("intermediaire", "structure-atome",
            f"Le noyau de l'atome {de(_NOMS_EL[sym])} contient {a} nucléons, dont {pl(z, 'proton')}. Combien contient-il de neutrons ?",
            ["Les nucléons sont les protons et les neutrons du noyau.",
             f"Neutrons $= {a} - {z} = {a - z}$."],
            pl(a - z, "neutron"))

    # -- neutralité et charges (6)
    nc = [
        ("Quelle est la charge électrique d'un proton, d'un neutron et d'un électron ?",
         "proton : positive ; neutron : nulle ; électron : négative",
         ["Le proton porte une charge positive, l'électron une charge négative exactement opposée.", "Le neutron est neutre."], "application"),
        ("Où se trouvent les protons et les neutrons dans l'atome ? Et les électrons ?",
         "protons et neutrons dans le noyau ; électrons autour du noyau",
         ["Le noyau contient les nucléons (protons et neutrons).", "Les électrons se déplacent autour du noyau."], "application"),
        ("Pourquoi un atome est-il électriquement neutre ?",
         "Il a autant de protons (charges +) que d'électrons (charges −)",
         ["Les charges d'un proton et d'un électron sont opposées.", "Autant de protons que d'électrons : la charge totale est nulle."], "intermediaire"),
        ("Le noyau de l'atome de cuivre porte 29 charges positives. Combien d'électrons tournent autour de lui ?",
         "29 électrons", ["L'atome est neutre : 29 charges positives sont compensées par 29 électrons."], "intermediaire"),
        ("Un atome possède 13 électrons. Combien son noyau contient-il de protons ? De quel atome s'agit-il ?",
         "13 protons : c'est l'atome d'aluminium",
         ["Atome neutre : autant de protons que d'électrons, donc 13 protons.", "L'atome à 13 protons est l'aluminium (Al)."], "approfondissement"),
        ("Où se concentre presque toute la masse de l'atome ?", "dans le noyau",
         ["Les électrons sont très légers : la masse de l'atome est concentrée dans le noyau."], "intermediaire"),
    ]
    for e, r, c, d in nc:
        add(d, "neutralite-charges", e, c, r)

    # -- ions (10)
    for sym, q in (("Na", 1), ("Cl", -1), ("Cu", 2), ("O", -2), ("Al", 3), ("Fe", 3)):
        z = A[sym][0]
        ne = z - q
        verbe = "perdu" if q > 0 else "gagné"
        typ = "cation" if q > 0 else "anion"
        add("intermediaire", "ions",
            f"L'atome {de(_NOMS_EL[sym])} ({pl(z, 'proton')}) a {verbe} {pl(abs(q), 'électron')}. Écris la formule de l'ion obtenu et donne son nombre d'électrons.",
            [f"L'atome avait {pl(z, 'électron')} ; il en a {verbe} {abs(q)}.",
             f"Il lui reste ${z} {'-' if q > 0 else '+'} {abs(q)} = {ne}$ électrons : charge {'positive' if q > 0 else 'négative'}, c'est un {typ}.",
             f"Formule : ${_ion_tex(sym, q)}$."],
            f"${_ion_tex(sym, q)}$ ; {pl(ne, 'électron')}")
    for sym, q in (("Zn", 2), ("S", -2)):
        z = A[sym][0]
        add("approfondissement", "ions",
            f"L'ion ${_ion_tex(sym, q)}$ provient de l'atome {de(_NOMS_EL[sym])} ({pl(z, 'proton')}). Cet atome a-t-il gagné ou perdu des électrons ? Combien ? Combien d'électrons possède l'ion ?",
            [f"La charge est {'positive' if q > 0 else 'négative'} : l'atome a {'perdu' if q > 0 else 'gagné'} {pl(abs(q), 'électron')}.",
             f"Électrons de l'ion : ${z} {'-' if q > 0 else '+'} {abs(q)} = {z - q}$."],
            f"{'perdu' if q > 0 else 'gagné'} {pl(abs(q), 'électron')} ; {pl(z - q, 'électron')}")
    add("intermediaire", "ions",
        "Un ion est-il formé quand un atome gagne ou perd des protons ?",
        ["Non : les protons restent dans le noyau.", "Seuls les électrons partent ou arrivent."], "Non, seulement des électrons")
    add("application", "ions",
        "L'ion chlorure $\\mathrm{Cl^-}$ est-il un cation ou un anion ?",
        ["Charge négative : c'est un anion (l'atome a gagné un électron)."], "un anion")

    # -- tests d'ions (7)
    ti = [
        ("On ajoute de la soude à une solution : un précipité bleu apparaît. Quel ion contient la solution ?", "l'ion cuivre $\\mathrm{Cu^{2+}}$"),
        ("On ajoute de la soude à une solution : un précipité vert apparaît. Quel ion contient la solution ?", "l'ion fer II $\\mathrm{Fe^{2+}}$"),
        ("On ajoute de la soude à une solution : un précipité couleur rouille apparaît. Quel ion contient la solution ?", "l'ion fer III $\\mathrm{Fe^{3+}}$"),
        ("Quel réactif utilise-t-on pour détecter les ions chlorure $\\mathrm{Cl^-}$ ? Qu'observe-t-on ?", "le nitrate d'argent : précipité blanc qui noircit à la lumière"),
        ("On ajoute de la soude à une solution : un précipité blanc apparaît. Quel ion peut-elle contenir (parmi ceux du cours) ?", "l'ion zinc $\\mathrm{Zn^{2+}}$"),
    ]
    expl = ["Avec la soude, un précipité bleu révèle les ions cuivre $\\mathrm{Cu^{2+}}$.",
            "Avec la soude, un précipité vert révèle les ions fer II $\\mathrm{Fe^{2+}}$.",
            "Avec la soude, un précipité rouille révèle les ions fer III $\\mathrm{Fe^{3+}}$.",
            "Le nitrate d'argent donne avec les ions chlorure un précipité blanc qui noircit à la lumière.",
            "Avec la soude, un précipité blanc révèle les ions zinc $\\mathrm{Zn^{2+}}$ (parmi les ions du cours)."]
    for (e, r), c in zip(ti, expl):
        add("application", "tests-ions", e, [c], r)
    add("approfondissement", "tests-ions",
        "Une solution donne un précipité bleu avec la soude et un précipité blanc qui noircit avec le nitrate d'argent. Quels ions contient-elle ?",
        ["Précipité bleu avec la soude : ions cuivre $\\mathrm{Cu^{2+}}$.",
         "Précipité blanc qui noircit avec le nitrate d'argent : ions chlorure $\\mathrm{Cl^-}$."],
        "des ions cuivre $\\mathrm{Cu^{2+}}$ et chlorure $\\mathrm{Cl^-}$")
    add("probleme", "tests-ions",
        "Un flacon a perdu son étiquette : il contient soit des ions fer II, soit des ions fer III. Propose un test et explique comment conclure.",
        ["On verse quelques gouttes de soude dans un échantillon.",
         "Précipité vert : ions fer II ($\\mathrm{Fe^{2+}}$) ; précipité rouille : ions fer III ($\\mathrm{Fe^{3+}}$)."],
        "test à la soude : vert → $\\mathrm{Fe^{2+}}$ ; rouille → $\\mathrm{Fe^{3+}}$")

    # -- pH (11)
    for nom, ph in (("du jus de citron", "2"), ("de l'eau pure", "7"), ("de l'eau savonneuse", "10"),
                    ("du vinaigre", "3"), ("d'une solution de soude", "13")):
        v = float(ph)
        nat = "acide" if v < 7 else ("neutre" if v == 7 else "basique")
        add("application", "ph",
            f"Le pH {nom} vaut environ {ph}. Cette solution est-elle acide, neutre ou basique ?",
            ["pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique.", f"Ici, pH ≈ {ph} : solution {nat}."],
            nat)
    add("intermediaire", "ph",
        "Laquelle est la plus acide : une solution de pH 2 ou une solution de pH 5 ?",
        ["Plus le pH est petit, plus la solution est acide."], "la solution de pH 2")
    add("intermediaire", "ph",
        "On dilue fortement une solution acide de pH 3 avec de l'eau. Son pH augmente-t-il ou diminue-t-il ? Peut-il dépasser 7 ?",
        ["En diluant un acide, il devient moins acide : son pH augmente et se rapproche de 7.", "Il reste acide : il ne dépasse pas 7."],
        "Il augmente, sans dépasser 7")
    add("intermediaire", "ph",
        "Quels ions sont présents en grande quantité dans une solution acide ? Dans une solution basique ?",
        ["Solution acide : beaucoup d'ions hydrogène $\\mathrm{H^+}$.", "Solution basique : beaucoup d'ions hydroxyde $\\mathrm{HO^-}$."],
        "acide : $\\mathrm{H^+}$ ; basique : $\\mathrm{HO^-}$")
    add("intermediaire", "ph",
        "Quelle couleur prend le bleu de bromothymol (BBT) dans une solution acide ? neutre ? basique ?",
        ["Le BBT est jaune en milieu acide, vert au neutre et bleu en milieu basique."], "jaune ; vert ; bleu")
    add("approfondissement", "ph",
        "Range ces solutions de la plus acide à la plus basique : eau savonneuse (pH 10), jus de citron (pH 2), eau pure (pH 7), café (pH 5).",
        ["Plus le pH est petit, plus la solution est acide : on range par pH croissant."],
        "jus de citron, café, eau pure, eau savonneuse")
    add("probleme", "ph",
        "Pour mesurer le pH d'une eau de piscine le plus précisément possible, faut-il utiliser du papier pH ou un pH-mètre ? Pourquoi ?",
        ["Le papier pH donne une valeur approchée par comparaison de couleurs.", "Le pH-mètre affiche directement la valeur : c'est la mesure la plus précise."],
        "un pH-mètre, plus précis")

    # -- dimensions de l'atome (6)
    add("intermediaire", "dimensions-atome",
        "La taille d'un atome est de l'ordre de $10^{-10}$ m et celle de son noyau de $10^{-15}$ m. Combien de fois l'atome est-il plus grand que son noyau ?",
        ["$\\dfrac{10^{-10}}{10^{-15}} = 10^{5} = 100\\,000$."], "$100\\,000$ fois")
    for noyau_mm in (1, 5):
        atome_m = noyau_mm * 100000 / 1000
        add("approfondissement", "dimensions-atome",
            f"On agrandit un atome de sorte que son noyau ait la taille d'une bille de {noyau_mm} mm. Quelle serait alors la taille de l'atome, en mètres ? (L'atome est 100 000 fois plus grand que son noyau.)",
            [f"${noyau_mm} \\times 100\\,000 = {nb(noyau_mm * 100000)}$ mm.", f"${nb(noyau_mm * 100000)}$ mm $= {nb(atome_m)}$ m."],
            f"${nb(atome_m)}$ m")
    add("application", "dimensions-atome",
        "Vrai ou faux ? Un atome est essentiellement constitué de vide.",
        ["Vrai : le noyau est minuscule par rapport à l'atome ; entre les deux, il n'y a que des électrons et du vide."], "Vrai")
    add("intermediaire", "dimensions-atome",
        "Écris en notation décimale la taille d'un atome, $10^{-10}$ m.",
        ["$10^{-10} = 0{,}000\\,000\\,000\\,1$ (le 1 est au 10e rang après la virgule)."], "$0{,}000\\,000\\,000\\,1$ m")
    add("intermediaire", "dimensions-atome",
        "L'atome de sodium $\\mathrm{Na}$ et l'ion sodium $\\mathrm{Na^+}$ sont-ils le même élément chimique ? Qu'est-ce qui les différencie ?",
        ["Oui : ils ont le même noyau (11 protons), c'est l'élément sodium.", "Seul le nombre d'électrons change : 11 pour l'atome, 10 pour l'ion."],
        "Oui ; seul le nombre d'électrons diffère (11 contre 10)")
    return _fin(E)


# =====================================================================
# 3e — CONVERSIONS D'ÉNERGIE ET SIGNAUX POUR MESURER
# =====================================================================
def gen_3e_conversions():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- convertisseurs (6)
    cv = [
        ("Quelle conversion d'énergie réalise un alternateur ?", "mécanique → électrique"),
        ("Quelle conversion d'énergie réalise une cellule photovoltaïque ?", "lumineuse → électrique"),
        ("Quelle conversion d'énergie réalise une lampe ? (énergie utile)", "électrique → lumineuse"),
        ("Quelle conversion d'énergie réalise le moteur électrique d'un ventilateur ? (énergie utile)", "électrique → mécanique"),
        ("Dans une éolienne, quel convertisseur transforme le mouvement des pales en électricité ?", "l'alternateur"),
    ]
    for e, r in cv:
        add("application", "convertisseurs", e, ["Un convertisseur transforme l'énergie d'une forme à une autre, sans en créer."], r)
    add("intermediaire", "convertisseurs",
        "Vrai ou faux ? Une cellule photovoltaïque fabrique de l'énergie.",
        ["Faux : elle convertit l'énergie lumineuse reçue en énergie électrique.", "Un convertisseur ne crée jamais d'énergie."], "Faux")

    # -- ressources (5)
    for nom, ren in (("le vent", True), ("le pétrole", False), ("l'uranium", False), ("le Soleil", True), ("le gaz naturel", False)):
        add("application", "ressources",
            f"{nom[0].upper() + nom[1:]} est-il une ressource d'énergie renouvelable ou non renouvelable ?",
            ["Renouvelable : se reconstitue à l'échelle humaine.", (f"{nom[0].upper() + nom[1:]} ne s'épuise pas à l'échelle humaine : ressource renouvelable." if ren else f"Le stock {de(nom.split(' ', 1)[1]) if nom.startswith('le ') else 'd' + nom[1:]} est limité et s'épuise : ressource non renouvelable.")],
            "renouvelable" if ren else "non renouvelable")

    # -- chaîne d'énergie (4)
    add("intermediaire", "chaine-energie",
        "Dans un barrage hydroélectrique, cite dans l'ordre la source, les convertisseurs et l'utilisation.",
        ["Source : l'eau du lac.", "Convertisseurs : la turbine (énergie mécanique) puis l'alternateur (énergie électrique).", "Utilisation : les maisons alimentées."],
        "eau du lac → turbine → alternateur → maisons")
    add("intermediaire", "chaine-energie",
        "Dans une chaîne d'énergie, sous quelle forme part le plus souvent l'énergie « perdue » ?",
        ["À cause des frottements, l'énergie perdue part presque toujours sous forme de chaleur (énergie thermique)."],
        "sous forme de chaleur (thermique)")
    add("approfondissement", "chaine-energie",
        "Décris la chaîne d'énergie d'un panneau solaire qui alimente une lampe.",
        ["Source : le Soleil (énergie lumineuse).", "Convertisseur : la cellule photovoltaïque (→ électrique), puis la lampe (→ lumineuse, et chaleur perdue)."],
        "Soleil → cellule photovoltaïque → lampe")
    add("approfondissement", "chaine-energie",
        "Dans une éolienne, pourquoi l'énergie électrique produite est-elle plus petite que l'énergie mécanique reçue par les pales ?",
        ["Une partie de l'énergie est perdue, surtout en chaleur à cause des frottements.", "$E_{\\text{reçue}} = E_{\\text{utile}} + E_{\\text{perdue}}$."],
        "À cause des pertes (chaleur due aux frottements)")

    # -- E = P × t (8)
    for P, ts, nom in ((1000, 60, "un radiateur"), (60, 120, "une lampe"), (2000, 180, "une bouilloire")):
        Ej = P * ts
        add("application", "energie-puissance",
            f"Calcule l'énergie transférée par {nom} de {t(P)} W pendant {ts} s.",
            [f"$E = P \\times t = {nb(P)} \\times {ts} = {nb(Ej)}$ J."], f"${nb(Ej)}$ J")
    for P, h, nom in ((2.0, 0.5, "un four de 2,0 kW"), (1.5, 2, "un radiateur de 1,5 kW"), (0.1, 5, "un téléviseur de 0,1 kW")):
        Ek = P * h
        add("intermediaire", "energie-puissance",
            f"Calcule en kWh l'énergie consommée par {nom} utilisé pendant {t(h)} h.",
            ["Unités « facture » : kW et h donnent des kWh.", f"$E = {nb(P)} \\times {nb(h)} = {nb(Ek)}$ kWh."], f"${nb(Ek)}$ kWh")
    add("approfondissement", "energie-puissance",
        "Un élève calcule l'énergie d'un appareil de 1 000 W qui fonctionne 2 h en faisant $1\\,000 \\times 2 = 2\\,000$ J. Quelle est son erreur ? Donne le bon résultat en J.",
        ["Il a mélangé des watts et des heures : il faut des secondes pour obtenir des joules.",
         "$2$ h $= 7\\,200$ s, donc $E = 1\\,000 \\times 7\\,200 = 7\\,200\\,000$ J ($= 2$ kWh)."],
        "$7\\,200\\,000$ J (soit $2$ kWh)")
    add("probleme", "energie-puissance",
        "Une plaque de cuisson de 1,5 kW chauffe pendant 40 min. Le kWh coûte 0,25 €. Calcule l'énergie consommée en kWh et le coût.",
        ["$40$ min $= \\dfrac{40}{60}$ h, donc $E = 1{,}5 \\times \\dfrac{40}{60} = 1$ kWh.", "Coût : $1 \\times 0{,}25 = 0{,}25$ €."],
        "$1$ kWh ; $0{,}25$ €")

    # -- kWh <-> J (4)
    for k in (2, 0.5, 3.5):
        j = k * 3.6e6
        add("intermediaire", "conversion-kwh-joule",
            f"Convertis {t(k)} kWh en joules (écriture scientifique).",
            ["$1$ kWh $= 3{,}6 \\times 10^{6}$ J.", f"${nb(k)} \\times 3{{,}}6 \\times 10^{{6}} = {sci(j, 2)}$ J."],
            f"${sci(j, 2)}$ J")
    add("approfondissement", "conversion-kwh-joule",
        "Montre que 1 kWh $= 3{,}6 \\times 10^{6}$ J.",
        ["$1$ kWh $= 1\\,000$ W $\\times 3\\,600$ s.", "$= 3\\,600\\,000$ J $= 3{,}6 \\times 10^{6}$ J."],
        "$1\\,000 \\times 3\\,600 = 3{,}6 \\times 10^{6}$ J")

    # -- bilan et rendement (9)
    for Er, Eu, nom in ((100, 5, "une lampe à incandescence"), (100, 30, "une lampe à LED"), (500, 450, "un moteur électrique")):
        Ep = Er - Eu
        add("application", "bilan-rendement",
            f"{nom[0].upper() + nom[1:]} reçoit {Er} J d'énergie électrique et fournit {Eu} J d'énergie utile. Quelle énergie est perdue ?",
            ["$E_{\\text{reçue}} = E_{\\text{utile}} + E_{\\text{perdue}}$.", f"$E_{{\\text{{perdue}}}} = {Er} - {Eu} = {Ep}$ J (surtout en chaleur)."],
            f"${Ep}$ J")
    for Er, Eu, nom in ((100, 5, "de la lampe à incandescence"), (500, 450, "du moteur électrique"), (1000, 200, "d'un panneau solaire"),
                        (3000, 1050, "d'une centrale thermique (valeurs en MJ)")):
        eta = Eu / Er
        unite = "MJ" if "MJ" in nom else "J"
        nom2 = nom.replace(" (valeurs en MJ)", "")
        add("intermediaire", "bilan-rendement",
            f"Calcule le rendement {nom2}, qui reçoit {t(Er)} {unite} et fournit {t(Eu)} {unite} d'énergie utile. Exprime le résultat en pourcentage.",
            [f"$\\eta = \\dfrac{{E_{{\\text{{utile}}}}}}{{E_{{\\text{{reçue}}}}}} = \\dfrac{{{nb(Eu)}}}{{{nb(Er)}}} = {nb(eta, 3)}$.",
             f"Soit ${nb(eta * 100)}\\,\\%$."],
            f"${nb(eta * 100)}\\,\\%$")
    add("approfondissement", "bilan-rendement",
        "Un moteur de rendement 80 % reçoit 2 000 J. Quelle énergie utile fournit-il ? Quelle énergie perd-il ?",
        ["$E_{\\text{utile}} = 0{,}80 \\times 2\\,000 = 1\\,600$ J.", "$E_{\\text{perdue}} = 2\\,000 - 1\\,600 = 400$ J."],
        "$1\\,600$ J utiles ; $400$ J perdus")
    add("probleme", "bilan-rendement",
        "Un élève trouve un rendement de 125 % pour un moteur. Que peut-on dire de son résultat ?",
        ["Un rendement est toujours inférieur à 100 % : il y a toujours des pertes.", "Il a sûrement inversé la fraction (énergie reçue sur énergie utile)."],
        "Impossible : il a inversé la fraction")

    # -- télémétrie (9)
    tl = [("Un sonar de bateau", "ultrason", 1500, 0.2, "dans l'eau de mer"), ("Un sonar", "ultrason", 1500, 1.2, "dans l'eau de mer"),
          ("Un sonar de chalutier", "ultrason", 1500, 4, "dans l'eau de mer"),
          ("Tu cries face à une falaise ; l'écho", "son", 340, 2, "dans l'air"),
          ("Un randonneur crie face à une paroi ; l'écho", "son", 340, 0.5, "dans l'air")]
    for qui, onde, v, dt, milieu in tl:
        art_onde = "L'ultrason" if onde == "ultrason" else "Le son"
        d = v * dt / 2
        add("intermediaire", "telemetrie",
            f"{qui} revient {t(dt)} s après l'émission. {art_onde} se propage à {t(v)} m/s {milieu}. À quelle distance se trouve l'obstacle ?",
            [f"Distance aller-retour : ${nb(v)} \\times {nb(dt)} = {nb(v * dt)}$ m.",
             f"Distance de l'obstacle : $d = \\dfrac{{{nb(v * dt)}}}{{2}} = {nb(d)}$ m."],
            f"${nb(d)}$ m")
    add("approfondissement", "telemetrie",
        "Un radar émet une onde électromagnétique ($3{,}0 \\times 10^{8}$ m/s) vers un avion. L'écho revient après $2{,}0 \\times 10^{-4}$ s. À quelle distance est l'avion ?",
        ["$d = \\dfrac{v \\times \\Delta t}{2} = \\dfrac{3{,}0 \\times 10^{8} \\times 2{,}0 \\times 10^{-4}}{2}$.",
         "$d = 3{,}0 \\times 10^{4}$ m $= 30$ km."], "$30$ km")
    add("approfondissement", "telemetrie",
        "Un laser envoyé vers la Lune revient après 2,56 s. La lumière va à $3{,}0 \\times 10^{8}$ m/s. Calcule la distance Terre-Lune.",
        [f"$d = \\dfrac{{3{{,}}0 \\times 10^{{8}} \\times 2{{,}}56}}{{2}} = {sci(3e8 * 2.56 / 2, 3)}$ m."],
        f"${sci(3e8 * 2.56 / 2, 3)}$ m (environ $384\\,000$ km)")
    add("probleme", "telemetrie",
        "La mer a 600 m de profondeur. Au bout de combien de temps un bateau reçoit-il l'écho de son sonar (ultrasons à 1 500 m/s) ?",
        ["L'onde fait l'aller-retour : $2 \\times 600 = 1\\,200$ m.", "$\\Delta t = \\dfrac{1\\,200}{1\\,500} = 0{,}8$ s."], "$0{,}8$ s")
    add("probleme", "telemetrie",
        "Un sonar mesure un écho après 0,6 s dans l'eau (1 500 m/s). Un élève annonce une profondeur de 900 m. Quelle est son erreur ?",
        ["$1\\,500 \\times 0{,}6 = 900$ m correspond à l'aller-retour.", "Il a oublié de diviser par 2 : la profondeur vaut $450$ m."],
        "Il a oublié de diviser par 2 : $450$ m")

    # -- année-lumière (5)
    al = 3.0e8 * 365.25 * 24 * 3600
    add("intermediaire", "annee-lumiere",
        "L'année-lumière est-elle une durée ou une distance ?",
        ["C'est la distance parcourue par la lumière dans le vide en un an."], "une distance")
    add("approfondissement", "annee-lumiere",
        "Calcule la valeur d'une année-lumière en mètres ($c = 3{,}0 \\times 10^{8}$ m/s, 1 an $= 365{,}25$ jours).",
        ["$1$ an $= 365{,}25 \\times 24 \\times 3\\,600 = 31\\,557\\,600$ s.",
         f"$1$ a.l. $= 3{{,}}0 \\times 10^{{8}} \\times 31\\,557\\,600 \\approx {sci(al, 2)}$ m."],
        f"environ ${sci(al, 2)}$ m")
    add("intermediaire", "annee-lumiere",
        "L'étoile Sirius est à 8,6 années-lumière. Depuis combien de temps la lumière que tu en reçois aujourd'hui voyage-t-elle ?",
        ["Une étoile à 8,6 a.l. envoie une lumière qui met 8,6 ans à nous parvenir."], "depuis 8,6 ans")
    ds = 3.0e8 * 8 * 60
    add("approfondissement", "annee-lumiere",
        "La lumière du Soleil met environ 8 min pour nous parvenir. Estime la distance Terre-Soleil ($c = 3{,}0 \\times 10^{8}$ m/s).",
        ["$8$ min $= 480$ s.", f"$d = c \\times t = 3{{,}}0 \\times 10^{{8}} \\times 480 \\approx {sci(ds, 2)}$ m."],
        f"environ ${sci(ds, 2)}$ m")
    add("probleme", "annee-lumiere",
        "Pourquoi dit-on qu'observer une galaxie lointaine, c'est « regarder dans le passé » ?",
        ["La lumière met du temps à nous parvenir.", "On voit la galaxie telle qu'elle était quand la lumière l'a quittée, il y a très longtemps."],
        "On la voit telle qu'elle était quand sa lumière est partie")
    return _fin(E)


# =====================================================================
# 3e — MASSE VOLUMIQUE
# =====================================================================
_RHO = {"aluminium": 2.7, "fer": 7.9, "cuivre": 8.9, "or": 19.3, "plomb": 11.3, "liège": 0.24,
        "glace": 0.92, "huile": 0.92, "eau": 1.0, "éthanol": 0.79, "verre": 2.5, "argent": 10.5, "zinc": 7.1}


def gen_3e_masse_volumique():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    def du(mat):  # « du fer », « de l'aluminium », « de la glace »
        if mat[0] in "aeiouéèêh":
            return "de l'" + mat
        return ("de la " if mat in ("glace", "huile") else "du ") + mat

    # -- calculer rho (8)
    for mat, V in (("aluminium", 20), ("fer", 15), ("cuivre", 12), ("plomb", 5), ("zinc", 30)):
        m = _RHO[mat] * V
        add("application", "calcul-rho",
            f"Un échantillon métallique de masse {t(m)} g a un volume de {V} cm³. Calcule sa masse volumique en g/cm³.",
            [f"$\\rho = \\dfrac{{m}}{{V}} = \\dfrac{{{nb(m)}}}{{{V}}} = {nb(_RHO[mat])}$ g/cm³."],
            f"${nb(_RHO[mat])}$ g/cm³")
    for liq, V in (("éthanol", 50), ("huile", 250)):
        m = _RHO[liq] * V
        add("intermediaire", "calcul-rho",
            f"Après avoir fait la tare avec une éprouvette vide, on y verse {V} mL d'un liquide : la balance indique {t(m)} g. Calcule la masse volumique du liquide en g/cm³.",
            ["$1$ mL $= 1$ cm³.", f"$\\rho = \\dfrac{{{nb(m)}}}{{{V}}} = {nb(_RHO[liq])}$ g/cm³."],
            f"${nb(_RHO[liq])}$ g/cm³")
    add("intermediaire", "calcul-rho",
        "Une brique de lait contient 1 L de lait de masse 1 030 g. Calcule la masse volumique du lait en g/cm³.",
        ["$1$ L $= 1\\,000$ cm³.", "$\\rho = \\dfrac{1\\,030}{1\\,000} = 1{,}03$ g/cm³."], "$1{,}03$ g/cm³")

    # -- calculer une masse (6)
    for mat, V in (("aluminium", 50), ("fer", 40), ("or", 2), ("verre", 120)):
        m = _RHO[mat] * V
        add("application", "calcul-masse",
            f"Quelle est la masse d'un objet en {mat} de volume {V} cm³ ? (masse volumique : {t(_RHO[mat])} g/cm³)",
            [f"$m = \\rho \\times V = {nb(_RHO[mat])} \\times {V} = {nb(m)}$ g."], f"${nb(m)}$ g")
    add("intermediaire", "calcul-masse",
        "Quelle est la masse de 1,5 L d'eau ? (masse volumique de l'eau : 1,0 g/cm³)",
        ["$1{,}5$ L $= 1\\,500$ cm³.", "$m = 1{,}0 \\times 1\\,500 = 1\\,500$ g $= 1{,}5$ kg."], "$1\\,500$ g, soit $1{,}5$ kg")
    add("approfondissement", "calcul-masse",
        "Une poutre en fer a un volume de 0,02 m³. Calcule sa masse en kg (masse volumique du fer : 7 900 kg/m³).",
        ["Unités cohérentes : $\\rho$ en kg/m³ et $V$ en m³.", f"$m = 7\\,900 \\times 0{{,}}02 = {nb(7900 * 0.02)}$ kg."],
        f"${nb(7900 * 0.02)}$ kg")

    # -- calculer un volume (6)
    for mat, m in (("cuivre", 89), ("aluminium", 54), ("plomb", 226), ("argent", 21)):
        V = m / _RHO[mat]
        add("intermediaire", "calcul-volume",
            f"Quel volume occupe un morceau {de(mat)} de masse {m} g ? (masse volumique : {t(_RHO[mat])} g/cm³)",
            [f"$V = \\dfrac{{m}}{{\\rho}} = \\dfrac{{{m}}}{{{nb(_RHO[mat])}}} = {nb(V)}$ cm³."], f"${nb(V)}$ cm³")
    add("approfondissement", "calcul-volume",
        "Quel volume occupent 500 g d'huile (masse volumique 0,92 g/cm³) ? Arrondis au cm³.",
        [f"$V = \\dfrac{{500}}{{0{{,}}92}} \\approx {nb(500 / 0.92, 1)}$ cm³."], f"environ ${nb(500 / 0.92, 0)}$ cm³")
    add("approfondissement", "calcul-volume",
        "Un lingot d'or a une masse de 1 kg. Quel est son volume, arrondi au cm³ ? (or : 19,3 g/cm³)",
        ["$1$ kg $= 1\\,000$ g.", f"$V = \\dfrac{{1\\,000}}{{19{{,}}3}} \\approx {nb(1000 / 19.3, 1)}$ cm³."], f"environ ${nb(1000 / 19.3, 0)}$ cm³")

    # -- conversions (7)
    for r in (7.9, 2.7, 0.92):
        add("application", "conversions",
            f"Convertis {t(r)} g/cm³ en kg/m³.",
            ["$1$ g/cm³ $= 1\\,000$ kg/m³.", f"${nb(r)} \\times 1\\,000 = {nb(r * 1000)}$ kg/m³."], f"${nb(r * 1000)}$ kg/m³")
    for r in (8900, 790):
        add("application", "conversions",
            f"Convertis {t(r)} kg/m³ en g/cm³.",
            ["On divise par $1\\,000$.", f"${nb(r)} \\div 1\\,000 = {nb(r / 1000, 3)}$ g/cm³."], f"${nb(r / 1000, 3)}$ g/cm³")
    add("intermediaire", "conversions",
        "Combien de cm³ y a-t-il dans 2,5 L ? Et combien de mL ?",
        ["$1$ L $= 1\\,000$ cm³ et $1$ mL $= 1$ cm³.", "$2{,}5$ L $= 2\\,500$ cm³ $= 2\\,500$ mL."], "$2\\,500$ cm³, soit $2\\,500$ mL")
    add("intermediaire", "conversions",
        "Combien de litres y a-t-il dans 1 m³ ?", ["$1$ m³ $= 1\\,000$ L."], "$1\\,000$ L")

    # -- déplacement d'eau (6)
    for V1, V2, m, mat in ((50, 90, None, None), (60, 75, 133.5, "cuivre"), (40, 60, 54, "aluminium"), (30, 37, 55.3, "fer")):
        V = V2 - V1
        if m is None:
            add("application", "deplacement-eau",
                f"Une éprouvette contient {V1} mL d'eau. On y plonge un caillou, le niveau monte à {V2} mL. Quel est le volume du caillou ?",
                ["$V_{\\text{solide}} = V_2 - V_1$.", f"$V = {V2} - {V1} = {V}$ cm³."], f"${V}$ cm³")
        else:
            rho = m / V
            add("probleme", "deplacement-eau",
                (f"Une bague a une masse de {t(m)} g. Plongée dans une éprouvette contenant {V1} mL d'eau, elle fait monter le niveau à {V2} mL." if mat == "cuivre" else
                 f"Un objet métallique a une masse de {t(m)} g. Plongé dans une éprouvette contenant {V1} mL d'eau, il fait monter le niveau à {V2} mL.")
                + " Calcule sa masse volumique et identifie le métal (fer 7,9 ; cuivre 8,9 ; aluminium 2,7 g/cm³).",
                [f"$V = {V2} - {V1} = {V}$ cm³.", f"$\\rho = \\dfrac{{{nb(m)}}}{{{V}}} = {nb(rho)}$ g/cm³ : c'est {le_(mat)}."],
                f"${nb(rho)}$ g/cm³ : {le_(mat)}")
    add("intermediaire", "deplacement-eau",
        "Un élève plonge un caillou dans une éprouvette contenant 50 mL d'eau ; le niveau monte à 72 mL. Il écrit : « volume du caillou = 72 cm³ ». Corrige-le.",
        ["Le volume du solide est la montée de l'eau, pas le niveau final.", "$V = 72 - 50 = 22$ cm³."], "$22$ cm³")
    add("application", "deplacement-eau",
        "Comment lit-on correctement le volume d'un liquide dans une éprouvette graduée ?",
        ["On place l'œil en face de la graduation.", "On lit au bas du ménisque."], "l'œil en face, au bas du ménisque")

    # -- flotte ou coule (7)
    for mat in ("liège", "fer", "glace", "aluminium", "or"):
        r = _RHO[mat]
        fl = r < 1.0
        add("application", "flotte-coule",
            f"Un objet en {mat} (masse volumique {t(r)} g/cm³) flotte-t-il ou coule-t-il dans l'eau ?",
            [f"On compare à l'eau ($1{{,}}0$ g/cm³) : ${nb(r)} {'<' if fl else '>'} 1{{,}}0$."],
            "il flotte" if fl else "il coule")
    add("intermediaire", "flotte-coule",
        "Un tronc d'arbre de 300 kg flotte, alors qu'une petite bille d'acier de 5 g coule. Explique.",
        ["Ce n'est pas la masse qui décide, mais la masse volumique.", "Le bois a une masse volumique inférieure à celle de l'eau, l'acier une masse volumique supérieure."],
        "C'est la masse volumique qui compte, pas la masse")
    add("probleme", "flotte-coule",
        "Une bille de masse volumique 1,02 g/cm³ coule dans l'eau douce mais flotte dans l'eau de mer (1,03 g/cm³). Explique.",
        ["Eau douce : $1{,}02 > 1{,}0$, la bille coule.", "Eau de mer : $1{,}02 < 1{,}03$, la bille flotte."],
        "Elle est plus dense que l'eau douce mais moins dense que l'eau de mer")

    # -- identifier un matériau (5)
    for mat, m, V in (("aluminium", 81, 30), ("cuivre", 178, 20), ("plomb", 113, 10)):
        rho = m / V
        add("approfondissement", "identifier-materiau",
            f"Un cube métallique a une masse de {m} g et un volume de {V} cm³. À l'aide du tableau (aluminium 2,7 ; fer 7,9 ; cuivre 8,9 ; plomb 11,3 g/cm³), identifie le métal.",
            [f"$\\rho = \\dfrac{{{m}}}{{{V}}} = {nb(rho)}$ g/cm³.", f"Cette valeur correspond {au_(mat)}."],
            mat)
    add("intermediaire", "identifier-materiau",
        "Un clou et une poutre sont tous deux en fer. Ont-ils la même masse volumique ? La même masse ?",
        ["La masse volumique est une propriété du matériau : la même pour les deux (7,9 g/cm³).", "La masse dépend de la taille : la poutre est bien plus lourde."],
        "même masse volumique, masses différentes")
    add("probleme", "identifier-materiau",
        "Un bijoutier veut vérifier qu'une pièce de 38,6 g est en or pur. Il mesure son volume : 2,0 cm³. Est-elle en or ? (or : 19,3 g/cm³)",
        ["$\\rho = \\dfrac{38{,}6}{2{,}0} = 19{,}3$ g/cm³.", "C'est la masse volumique de l'or : la pièce peut être en or pur."],
        "Oui, $\\rho = 19{,}3$ g/cm³")

    # -- température (5)
    add("intermediaire", "temperature",
        "Quand on chauffe un morceau de métal, que deviennent sa masse, son volume et sa masse volumique ?",
        ["La masse ne change pas ; le volume augmente (dilatation).", "Comme $\\rho = \\dfrac{m}{V}$, la masse volumique diminue."],
        "masse constante, volume qui augmente, masse volumique qui diminue")
    add("approfondissement", "temperature",
        "Pourquoi une montgolfière s'élève-t-elle quand on chauffe l'air qu'elle contient ?",
        ["L'air chaud a une masse volumique plus petite que l'air froid qui l'entoure.", "Plus « léger » à volume égal, il fait monter le ballon."],
        "L'air chaud est moins dense que l'air froid")
    add("intermediaire", "temperature",
        "Pourquoi un glaçon flotte-t-il sur l'eau ?",
        ["La glace (0,92 g/cm³) est moins dense que l'eau liquide (1,0 g/cm³)."], "La glace est moins dense que l'eau liquide")
    add("approfondissement", "temperature",
        "Un litre d'eau gèle : sa masse (1 000 g) ne change pas. Quel volume occupe la glace obtenue (0,92 g/cm³) ? Arrondis au cm³.",
        [f"$V = \\dfrac{{1\\,000}}{{0{{,}}92}} \\approx {nb(1000 / 0.92, 1)}$ cm³.", "Le volume augmente : une bouteille pleine d'eau peut éclater au congélateur."],
        f"environ ${nb(1000 / 0.92, 0)}$ cm³")
    add("application", "temperature",
        "Vrai ou faux ? La masse volumique d'un matériau ne dépend pas de la température.",
        ["Faux : en chauffant, le volume augmente et la masse volumique diminue légèrement."], "Faux")
    return _fin(E)


# =====================================================================
# 3e — POIDS, GRAVITATION ET FORCES  (g = 9,8 N/kg sur Terre)
# =====================================================================
def gen_3e_poids():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    G = 9.8
    # -- calcul du poids (8)
    for m, qui in ((5.0, "un sac"), (60, "un élève"), (0.5, "un ballon de basket"), (1.2, "une bouteille d'eau pleine"),
                   (80, "un astronaute équipé"), (12, "un cartable bien rempli")):
        P = m * G
        add("application", "calcul-poids",
            f"Sur Terre ($g = 9{{,}}8$ N/kg), calcule le poids d'{qui} de masse {t(m)} kg.",
            [f"$P = m \\times g = {nb(m)} \\times 9{{,}}8 = {nb(P)}$ N."], f"${nb(P)}$ N")
    for mg, qui in ((250, "une pomme"), (450, "un livre")):
        m = mg / 1000
        P = m * G
        add("intermediaire", "calcul-poids",
            f"Sur Terre ($g = 9{{,}}8$ N/kg), calcule le poids d'{qui} de masse {mg} g.",
            [f"La masse doit être en kg : ${mg}$ g $= {nb(m, 3)}$ kg.", f"$P = {nb(m, 3)} \\times 9{{,}}8 = {nb(P, 3)}$ N."],
            f"${nb(P, 3)}$ N")

    # -- masse à partir du poids (6)
    for P in (735, 49, 196, 9.8):
        m = P / G
        add("intermediaire", "calcul-masse",
            f"Un objet a un poids de {t(P)} N sur Terre ($g = 9{{,}}8$ N/kg). Quelle est sa masse ?",
            [f"$m = \\dfrac{{P}}{{g}} = \\dfrac{{{nb(P)}}}{{9{{,}}8}} = {nb(m)}$ kg."], f"${nb(m)}$ kg")
    add("intermediaire", "calcul-masse",
        "Un dynamomètre indique 2,94 N quand on y accroche un objet, sur Terre ($g = 9{,}8$ N/kg). Quelle est la masse de l'objet, en g ?",
        [f"$m = \\dfrac{{2{{,}}94}}{{9{{,}}8}} = {nb(2.94 / G, 2)}$ kg $= {nb(2.94 / G * 1000)}$ g."], f"${nb(2.94 / G * 1000)}$ g")
    add("approfondissement", "calcul-masse",
        "Montre que $g$ s'exprime en N/kg à partir de la relation $P = m \\times g$.",
        ["$g = \\dfrac{P}{m}$ : un poids (en N) divisé par une masse (en kg).", "L'unité de $g$ est donc le N/kg."], "$g = \\dfrac{P}{m}$, donc des N/kg")

    # -- autres astres (8)
    astres = {"la Lune": 1.6, "Mars": 3.7, "Jupiter": 25}
    for m, ast in ((80, "la Lune"), (80, "Mars"), (50, "Jupiter"), (2, "la Lune")):
        P = m * astres[ast]
        add("intermediaire", "autres-astres",
            f"Quel est le poids d'un objet de masse {m} kg sur {ast} ($g = {nb(astres[ast])}$ N/kg) ?",
            ["La masse ne change pas d'un astre à l'autre.", f"$P = {m} \\times {nb(astres[ast])} = {nb(P)}$ N."], f"${nb(P)}$ N")
    add("intermediaire", "autres-astres",
        "Un astronaute a une masse de 75 kg sur Terre. Quelle est sa masse sur la Lune ?",
        ["La masse est la même partout : c'est la quantité de matière."], "$75$ kg")
    rap = 9.8 / 1.6
    add("approfondissement", "autres-astres",
        "Combien de fois un objet pèse-t-il moins sur la Lune ($1{,}6$ N/kg) que sur Terre ($9{,}8$ N/kg) ? Arrondis à l'unité.",
        ["Le rapport des poids est égal au rapport des $g$.", f"$\\dfrac{{9{{,}}8}}{{1{{,}}6}} \\approx {nb(rap, 1)}$, soit environ 6 fois moins."], "environ 6 fois")
    PT = 588
    m = PT / 9.8
    add("probleme", "autres-astres",
        "Une astronaute a un poids de 588 N sur Terre ($g = 9{,}8$ N/kg). Quel serait son poids sur Mars ($g = 3{,}7$ N/kg) ?",
        [f"Masse : $m = \\dfrac{{588}}{{9{{,}}8}} = {nb(m)}$ kg (identique sur Mars).", f"Sur Mars : $P = {nb(m)} \\times 3{{,}}7 = {nb(m * 3.7)}$ N."],
        f"${nb(m * 3.7)}$ N")
    add("probleme", "autres-astres",
        "Sur un astre inconnu, un objet de 4,0 kg a un poids de 14,8 N. Calcule $g$ sur cet astre. De quel astre du cours s'agit-il ?",
        [f"$g = \\dfrac{{P}}{{m}} = \\dfrac{{14{{,}}8}}{{4{{,}}0}} = {nb(14.8 / 4)}$ N/kg.", "C'est la valeur de Mars."], f"$g = {nb(14.8 / 4)}$ N/kg : Mars")

    # -- masse ou poids (7)
    mp = [
        ("Quelle est l'unité de la masse ? Et celle du poids ?", "masse : kilogramme (kg) ; poids : newton (N)", "application",
         "La masse est une quantité de matière (kg) ; le poids est une force (N)."),
        ("Avec quel appareil mesure-t-on une masse ? Et un poids ?", "masse : balance ; poids : dynamomètre", "application",
         "Une balance mesure une masse ; un dynamomètre mesure une force, donc un poids."),
        ("Vrai ou faux ? En physique, on peut dire « je pèse 60 kg ».", "Faux : 60 kg est une masse ; le poids s'exprime en newtons", "intermediaire",
         "60 kg est ta masse ; ton poids vaut $P = 60 \\times 9{,}8 = 588$ N."),
        ("La masse d'un objet change-t-elle quand on l'emporte sur la Lune ? Et son poids ?", "La masse ne change pas ; le poids diminue", "intermediaire",
         "La quantité de matière reste la même ; mais $g$ est plus petit sur la Lune (1,6 N/kg), donc le poids diminue."),
        ("Le poids est-il un nombre seul ou un vecteur ?", "un vecteur (une force)", "intermediaire",
         "Le poids est une force : il a un point d'application, une direction, un sens et une valeur."),
        ("Qu'est-ce que la gravitation ?", "une interaction attractive à distance entre deux objets qui ont une masse", "application",
         "Deux objets qui ont une masse s'attirent, sans contact, d'autant plus fort qu'ils sont massifs et proches."),
        ("Pourquoi la Lune reste-t-elle en orbite autour de la Terre ?", "La Terre l'attire par gravitation", "approfondissement",
         "L'attraction gravitationnelle de la Terre dévie sans cesse la trajectoire de la Lune et la retient en orbite."),
    ]
    for e, r, d, c in mp:
        add(d, "masse-poids", e, [c], r)

    # -- caractéristiques du poids (5)
    add("application", "caracteristiques-poids",
        "Quelles sont la direction et le sens du poids d'un objet ?",
        ["Direction : la verticale du lieu.", "Sens : vers le bas (vers le centre de la Terre)."], "verticale, vers le bas")
    add("application", "caracteristiques-poids",
        "Quel est le point d'application du poids d'un objet ?",
        ["Le poids s'applique au centre de l'objet."], "le centre de l'objet")
    for m, ech in ((2.0, 10), (5.0, 20)):
        P = m * G
        L = P / ech
        add("intermediaire", "caracteristiques-poids",
            f"Un objet de masse {t(m, 1, True)} kg est posé sur Terre ($g = 9{{,}}8$ N/kg). Avec l'échelle 1 cm pour {ech} N, quelle longueur doit avoir la flèche de son poids ? Arrondis au millimètre.",
            [f"$P = {nb(m, 1, True)} \\times 9{{,}}8 = {nb(P)}$ N.", f"Longueur : ${nb(P)} \\div {ech} = {nb(L)}$ cm, soit environ ${nb(L, 1, True)}$ cm."],
            f"environ ${nb(L, 1, True)}$ cm")
    add("approfondissement", "caracteristiques-poids",
        "Quelle est la différence entre la direction et le sens d'une force ?",
        ["La direction est la droite d'action (verticale, horizontale…).", "Le sens indique vers où elle agit sur cette droite (haut ou bas, gauche ou droite)."],
        "direction = la droite ; sens = de quel côté")

    # -- vecteur vitesse (7)
    vv = [
        ("Une voiture roule vers l'est à 50 km/h sur une route droite. Donne la direction, le sens et la valeur de son vecteur vitesse.",
         "direction : celle de la route (horizontale) ; sens : vers l'est ; valeur : 50 km/h", "application",
         "La direction est la droite du mouvement, le sens indique vers où l'on va, la valeur est la vitesse."),
        ("Dans un mouvement rectiligne uniforme, le vecteur vitesse change-t-il ?", "Non : valeur et direction constantes", "intermediaire",
         "Rectiligne : la direction ne change pas. Uniforme : la valeur ne change pas."),
        ("Dans un mouvement circulaire uniforme, le vecteur vitesse est-il constant ? Justifie.", "Non : sa valeur est constante mais sa direction change sans cesse", "approfondissement",
         "Uniforme : la valeur est constante. Mais sur un cercle, la direction du mouvement tourne à chaque instant."),
        ("Une voiture prend un virage à 50 km/h constants. Son vecteur vitesse change-t-il ?", "Oui, sa direction change", "intermediaire",
         "La valeur reste 50 km/h, mais la voiture tourne : la direction du vecteur vitesse change."),
        ("Quelle est la direction du vecteur vitesse d'un objet en mouvement circulaire ?", "tangente au cercle", "approfondissement",
         "À chaque instant, le vecteur vitesse est tangent à la trajectoire, ici le cercle."),
    ]
    for e, r, d, c in vv:
        add(d, "vecteur-vitesse", e, [c], r)
    add("intermediaire", "vecteur-vitesse",
        "Un cycliste parcourt 600 m en 2 min sur une piste droite. Calcule la valeur de son vecteur vitesse en m/s.",
        ["$2$ min $= 120$ s.", "$v = \\dfrac{600}{120} = 5$ m/s."], "$5$ m/s")
    add("intermediaire", "vecteur-vitesse",
        "Un train roule tout droit à vitesse constante pendant 10 min et parcourt 30 km. Calcule la valeur de sa vitesse en km/h.",
        ["$10$ min $= \\dfrac{1}{6}$ h.", "$v = 30 \\times 6 = 180$ km/h."], "$180$ km/h")

    # -- équilibre (9)
    for m, qui in ((2.0, "Un lustre"), (0.8, "Une lampe suspendue"), (15, "Une jardinière suspendue")):
        P = m * G
        add("intermediaire", "equilibre",
            f"{qui} de masse {t(m)} kg est accroché(e) immobile au bout d'un fil. Quelle est la valeur de la force exercée par le fil ($g = 9{{,}}8$ N/kg) ?".replace("accroché(e)", "accrochée" if qui.startswith("Une") else "accroché"),
            [f"$P = {nb(m)} \\times 9{{,}}8 = {nb(P)}$ N.", "L'objet est immobile : la tension du fil compense le poids, donc $T = P$."],
            f"$T = {nb(P)}$ N, vers le haut")
    for m in (1.5, 0.6):
        P = m * G
        add("intermediaire", "equilibre",
            f"Un livre de {t(m)} kg est posé sur une table. Quelle force la table exerce-t-elle sur le livre ($g = 9{{,}}8$ N/kg) ?",
            [f"Le livre est en équilibre : la réaction de la table compense son poids.", f"$R = P = {nb(m)} \\times 9{{,}}8 = {nb(P)}$ N, verticale, vers le haut."],
            f"${nb(P)}$ N, vers le haut")
    add("application", "equilibre",
        "Vrai ou faux ? Un objet immobile ne subit aucune force.",
        ["Faux : il subit des forces qui se compensent (par exemple son poids et la réaction du support)."], "Faux")
    add("application", "equilibre",
        "À quelle condition un objet est-il en équilibre (immobile) ?",
        ["Toutes les forces qu'il subit se compensent : leur somme est nulle."], "les forces qui s'exercent sur lui se compensent")
    add("approfondissement", "equilibre",
        "Deux forces se compensent. Que peut-on dire de leurs directions, de leurs sens et de leurs valeurs ?",
        ["Même direction, même valeur, sens opposés."], "même direction, même valeur, sens opposés")
    add("probleme", "equilibre",
        "Un fil supporte au maximum 50 N. Peut-on y suspendre une lampe de 4,5 kg ($g = 9{,}8$ N/kg) ?",
        [f"$P = 4{{,}}5 \\times 9{{,}}8 = {nb(4.5 * G)}$ N.", f"À l'équilibre $T = P = {nb(4.5 * G)}$ N $\\leqslant 50$ N : oui, le fil tient."],
        f"Oui ($T = {nb(4.5 * G)}$ N)")
    return _fin(E)


# =====================================================================
# 3e — TRANSFORMATIONS CHIMIQUES
# =====================================================================
def gen_3e_transformations():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- physique ou chimique (5)
    pc = [
        ("l'eau qui gèle", "physique", "l'espèce reste $\\mathrm{H_2O}$, seul l'état change"),
        ("le fer qui rouille", "chimique", "le fer et le dioxygène disparaissent, la rouille apparaît"),
        ("l'évaporation d'une flaque", "physique", "l'eau passe à l'état gazeux, elle reste de l'eau"),
        ("la combustion du gaz d'une gazinière", "chimique", "le méthane et le dioxygène disparaissent, du dioxyde de carbone et de l'eau apparaissent"),
        ("un morceau de zinc qui disparaît dans de l'acide chlorhydrique en faisant des bulles", "chimique", "du dihydrogène et des ions zinc apparaissent"),
    ]
    for nom, r, why in pc:
        add("application", "physique-chimique", f"Transformation physique ou chimique : {nom} ?", [f"Transformation {r} : {why}."], r)

    # -- conservation des éléments (8)
    for g, d, nom in (_EQ_4E[1], _EQ_4E[2], _EQ_4E[6], _EQ_4E[5]):
        bg = bilan(g)
        det = " ; ".join(f"{el} : {n}" for el, n in sorted(bg.items()))
        add("intermediaire", "conservation-elements",
            f"Vérifie que l'équation de la {nom}, $" + tex_equation(g, d) + "$, respecte la conservation des éléments.",
            ["On compte les atomes de chaque élément de chaque côté (le coefficient multiplie toute la formule).",
             f"Réactifs : {det}. Produits : {det}.", "Les nombres sont égaux : les éléments sont conservés."],
            f"Oui : {det} de chaque côté")
    add("application", "conservation-elements",
        "Au cours d'une transformation chimique, les atomes sont-ils détruits ?",
        ["Non : ils sont seulement redistribués, ils changent de « voisins »."], "Non, ils se redistribuent")
    add("intermediaire", "conservation-elements",
        "Peut-on obtenir du cuivre en faisant réagir uniquement du carbone et du dioxygène ? Justifie.",
        ["Les éléments chimiques sont conservés : aucun nouvel élément ne peut apparaître.", "Il n'y a pas d'élément cuivre au départ : impossible."],
        "Non : l'élément cuivre n'est pas présent au départ")
    add("approfondissement", "conservation-elements",
        "Lors de la combustion du méthane $\\mathrm{CH_4}$, d'où viennent les atomes d'oxygène de l'eau formée ?",
        ["Le méthane ne contient pas d'oxygène.", "Les atomes d'oxygène viennent du dioxygène $\\mathrm{O_2}$ de l'air."],
        "du dioxygène de l'air")
    add("intermediaire", "conservation-elements",
        "Combien d'atomes d'hydrogène et d'oxygène y a-t-il dans $2\\,\\mathrm{H_2O}$ ?",
        ["$2 \\times 2 = 4$ atomes d'hydrogène et $2 \\times 1 = 2$ atomes d'oxygène."], "4 atomes d'hydrogène et 2 atomes d'oxygène")

    # -- ajuster (10)
    for g, d, nom in (_EQ_4E[1], _EQ_4E[2], _EQ_4E[3], _EQ_4E[4], _EQ_4E[5], _EQ_4E[6], _EQ_4E[7], _EQ_4E[8], _EQ_4E[11]):
        nf = len(g) + len(d)
        add("approfondissement" if nf >= 4 else "intermediaire", "ajuster-equation",
            f"Ajuste l'équation de la {nom} : $" + tex_equation(_brut(g), _brut(d)) + "$.",
            ["On écrit des coefficients devant les formules, sans jamais modifier les formules.",
             "On égalise élément par élément, puis on recompte tout.", "$" + tex_equation(g, d) + "$"],
            "$" + tex_equation(g, d) + "$")
    add("intermediaire", "ajuster-equation",
        "Pour ajuster $\\mathrm{C} + \\mathrm{O_2} \\longrightarrow \\mathrm{CO}$, un élève écrit $\\mathrm{C} + \\mathrm{O} \\longrightarrow \\mathrm{CO}$. Est-ce correct ?",
        ["Non : il a modifié la formule du dioxygène ($\\mathrm{O_2}$).", "On ajoute seulement des coefficients : $2\\,\\mathrm{C} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{CO}$."],
        "Non : $2\\,\\mathrm{C} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{CO}$")

    # -- conservation de la masse (9)
    for (r1, m1, r2, m2, p) in (("carbone", 12, "dioxygène", 32, "dioxyde de carbone"), ("carbone", 6, "dioxygène", 16, "dioxyde de carbone"),
                                ("dihydrogène", 2, "dioxygène", 16, "eau"), ("diazote", 28, "dihydrogène", 6, "ammoniac")):
        add("application", "conservation-masse",
            f"{m1} g de {r1} réagissent entièrement avec {m2} g de {r2}. Quelle masse {de(p)} obtient-on ?",
            ["Loi de Lavoisier : $m_{\\text{réactifs}} = m_{\\text{produits}}$.", f"$m = {m1} + {m2} = {m1 + m2}$ g."],
            f"${m1 + m2}$ g")
    for (r1, m1, p, mp, r2) in (("méthane", 8, "dioxyde de carbone et d'eau", 40, "dioxygène"), ("carbone", 24, "dioxyde de carbone", 88, "dioxygène")):
        add("intermediaire", "conservation-masse",
            f"La combustion complète de {m1} g de {r1} produit {mp} g de {p} en tout. Quelle masse de {r2} a été consommée ?",
            ["$m_{\\text{réactifs}} = m_{\\text{produits}}$.", f"$m_{{\\text{{{r2}}}}} = {mp} - {m1} = {mp - m1}$ g."],
            f"${mp - m1}$ g")
    add("intermediaire", "conservation-masse",
        "Une bougie posée sur une balance, à l'air libre, « perd » 3 g en brûlant. La masse a-t-elle disparu ?",
        ["Non : les produits de la combustion (dioxyde de carbone, eau) sont des gaz qui partent dans l'air.", "Dans un récipient fermé, la masse totale ne changerait pas."],
        "Non, les produits gazeux sont partis dans l'air")
    add("approfondissement", "conservation-masse",
        "Pourquoi la masse se conserve-t-elle au cours d'une transformation chimique ?",
        ["Les atomes sont conservés (seulement redistribués) et chacun garde sa masse."], "Car les atomes sont conservés")
    add("probleme", "conservation-masse",
        "On brûle 16 g de méthane dans 64 g de dioxygène. Il se forme 44 g de dioxyde de carbone. Quelle masse d'eau se forme ?",
        ["Masse des réactifs : $16 + 64 = 80$ g.", "Masse d'eau : $80 - 44 = 36$ g."], "$36$ g")

    # -- combustions et tests (8)
    ct = [
        ("Quel réactif est appelé « comburant » dans une combustion ?", "le dioxygène", "application"),
        ("Comment met-on en évidence le dioxyde de carbone ?", "il trouble l'eau de chaux", "application"),
        ("Comment met-on en évidence la présence d'eau ?", "le sulfate de cuivre anhydre (blanc) devient bleu", "application"),
        ("Quels sont les produits de la combustion complète du méthane ?", "du dioxyde de carbone et de l'eau", "application"),
        ("Quel gaz dangereux se forme lors d'une combustion incomplète, quand le dioxygène manque ?", "le monoxyde de carbone $\\mathrm{CO}$, toxique et inodore", "intermediaire"),
        ("Pourquoi ne faut-il jamais utiliser un chauffage à combustion dans une pièce mal aérée ?", "risque de combustion incomplète et d'intoxication au monoxyde de carbone", "approfondissement"),
        ("On recouvre d'un bocal une bougie allumée, puis on verse de l'eau de chaux dans le bocal : elle se trouble. Qu'en conclut-on ?", "la combustion a produit du dioxyde de carbone", "intermediaire"),
        ("Le butane d'un réchaud de camping contient les éléments carbone et hydrogène. Quels produits sa combustion complète donne-t-elle ? Comment les identifier ?",
         "dioxyde de carbone (eau de chaux troublée) et eau (sulfate de cuivre anhydre qui bleuit)", "probleme"),
    ]
    for e, r, d in ct:
        add(d, "combustions-tests", e, ["Combustion = combustible + comburant (dioxygène)."], r)

    # -- acide et métal (5)
    add("application", "acide-metal",
        "Quel gaz se dégage quand un acide (comme l'acide chlorhydrique) attaque du fer ?",
        ["Un acide attaque de nombreux métaux en produisant du dihydrogène $\\mathrm{H_2}$."], "le dihydrogène $\\mathrm{H_2}$")
    add("application", "acide-metal",
        "Comment identifie-t-on le dihydrogène ?",
        ["On approche une flamme : une petite détonation (« pop ! ») se produit."], "détonation à l'approche d'une flamme")
    add("intermediaire", "acide-metal",
        "Dans l'équation $\\mathrm{Fe} + 2\\,\\mathrm{H^+} \\longrightarrow \\mathrm{Fe^{2+}} + \\mathrm{H_2}$, vérifie la conservation des éléments et des charges.",
        ["Fe : 1 = 1 ; H : 2 = 2.", "Charges : $2 \\times (+1) = +2$ à gauche et $+2$ à droite."], "Éléments et charges sont conservés")
    add("approfondissement", "acide-metal",
        "Ajuste l'équation de l'action de l'acide chlorhydrique sur le zinc : $\\mathrm{Zn} + \\mathrm{H^+} \\longrightarrow \\mathrm{Zn^{2+}} + \\mathrm{H_2}$.",
        ["Il faut 2 atomes H à gauche : coefficient 2 devant $\\mathrm{H^+}$.", "Charges : $+2$ de chaque côté."],
        "$\\mathrm{Zn} + 2\\,\\mathrm{H^+} \\longrightarrow \\mathrm{Zn^{2+}} + \\mathrm{H_2}$")
    add("intermediaire", "acide-metal",
        "Vrai ou faux ? Le gaz dégagé par l'action d'un acide sur le fer est du dioxygène.",
        ["Faux : c'est du dihydrogène $\\mathrm{H_2}$."], "Faux")

    # -- synthèse (5)
    add("application", "synthese",
        "Que signifie « synthétiser » une espèce chimique ?",
        ["C'est la fabriquer par une transformation chimique, au lieu de l'extraire de la nature."], "la fabriquer par une transformation chimique")
    add("intermediaire", "synthese",
        "La vanilline de synthèse et la vanilline extraite de la vanille ont-elles les mêmes propriétés ?",
        ["Oui : c'est la même espèce chimique, une molécule ne « sait » pas d'où elle vient."], "Oui, ce sont les mêmes molécules")
    add("intermediaire", "synthese",
        "À partir de quels réactifs l'industrie synthétise-t-elle l'ammoniac $\\mathrm{NH_3}$ ? À quoi sert-il ?",
        ["$\\mathrm{N_2} + 3\\,\\mathrm{H_2} \\longrightarrow 2\\,\\mathrm{NH_3}$.", "L'ammoniac sert à fabriquer des engrais."],
        "diazote et dihydrogène ; à fabriquer des engrais")
    add("approfondissement", "synthese",
        "Pour la synthèse de l'ammoniac, combien de molécules de dihydrogène faut-il pour 10 molécules de diazote ? Combien de molécules d'ammoniac obtient-on ?",
        ["D'après $\\mathrm{N_2} + 3\\,\\mathrm{H_2} \\longrightarrow 2\\,\\mathrm{NH_3}$ : 3 $\\mathrm{H_2}$ et 2 $\\mathrm{NH_3}$ pour 1 $\\mathrm{N_2}$.",
         "Pour 10 $\\mathrm{N_2}$ : $10 \\times 3 = 30$ $\\mathrm{H_2}$ et $10 \\times 2 = 20$ $\\mathrm{NH_3}$."],
        "30 molécules de dihydrogène ; 20 molécules d'ammoniac")
    add("probleme", "synthese",
        "Une espèce chimique fabriquée en laboratoire et qui n'existe pas dans la nature est-elle synthétique ? Comment la qualifie-t-on ?",
        ["Oui, elle est obtenue par synthèse.", "Comme elle n'existe pas dans la nature, on dit qu'elle est artificielle."],
        "Oui ; on la dit artificielle")
    return _fin(E)


# =====================================================================
# 2de — DESCRIPTION ET CARACTÉRISATION DE LA MATIÈRE
# =====================================================================
_M_AT = {"H": 1.0, "C": 12.0, "N": 14.0, "O": 16.0, "Na": 23.0, "Cl": 35.5}
NA = 6.02e23


def masse_molaire(f):
    return sum(_M_AT[el] * n for el, n in atomes(f).items())


def gen_2de_description():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- séparation, corps purs et mélanges (6)
    sp = [
        ("Quelle technique permet de séparer le sable de l'eau dans laquelle il est en suspension ?", "la filtration (ou la décantation)",
         ["La filtration sépare un solide d'un liquide.", "On peut aussi laisser décanter : le sable, plus dense, tombe au fond."], "application"),
        ("Quelle technique permet de séparer les espèces d'un mélange de liquides miscibles selon leurs températures d'ébullition ?", "la distillation",
         ["La distillation sépare selon les températures d'ébullition."], "application"),
        ("Quelle technique permet de séparer les colorants d'une encre ?", "la chromatographie",
         ["La chromatographie sépare les espèces selon leur affinité avec deux phases."], "application"),
        ("Le mélange eau + huile est-il homogène ou hétérogène ? Quelle technique permet de le séparer ?", "hétérogène ; la décantation (ampoule à décanter)",
         ["On distingue deux phases : mélange hétérogène.", "On laisse reposer : l'huile, moins dense, reste au-dessus, puis on sépare."], "intermediaire"),
        ("Une espèce chimique est un ensemble de quoi ?", "d'entités chimiques identiques",
         ["Une espèce chimique est un ensemble d'entités (molécules, ions, atomes) identiques."], "application"),
        ("Un liquide incolore bout à 100 °C sous pression normale et sa température reste constante pendant l'ébullition. Que peut-on supposer ?",
         "C'est probablement de l'eau pure (corps pur)",
         ["Un corps pur change d'état à température constante.", "100 °C est la température d'ébullition de l'eau."], "approfondissement"),
    ]
    for e, r, c, d in sp:
        add(d, "separation-corps-purs", e, c, r)

    # -- masse volumique et densité (6)
    for m, V in ((7.90, 10.0), (39.5, 50.0), (23.4, 30.0)):
        rho = m / V
        dm = 2 if m < 10 else 1
        add("application", "masse-volumique-densite",
            f"Un échantillon de liquide de volume {t(V, 1, True)} mL a une masse de {t(m, dm, True)} g. Calculer sa masse volumique en g·mL⁻¹, puis sa densité.",
            [f"$\\rho = \\dfrac{{m}}{{V}} = \\dfrac{{{nb(m, dm, True)}}}{{{nb(V, 1, True)}}} = {cs(rho)}$ g·mL⁻¹.",
             f"$d = \\dfrac{{\\rho}}{{\\rho_{{\\text{{eau}}}}}} = \\dfrac{{{cs(rho)}}}{{1{{,}}00}} = {cs(rho)}$ (sans unité)."],
            f"$\\rho = {cs(rho)}$ g·mL⁻¹ ; $d = {cs(rho)}$")
    add("intermediaire", "masse-volumique-densite",
        "Un liquide inconnu a une masse volumique de 0,79 g·mL⁻¹. D'après la table (eau 1,00 ; éthanol 0,79 ; glycérol 1,26 g·mL⁻¹), de quel liquide s'agit-il ?",
        ["La masse volumique est une grandeur caractéristique de l'espèce.", "0,79 g·mL⁻¹ correspond à l'éthanol."], "l'éthanol")
    add("intermediaire", "masse-volumique-densite",
        "Le cyclohexane a une densité de 0,78. Dans une ampoule à décanter contenant de l'eau et du cyclohexane (non miscibles), quelle phase est au-dessus ?",
        ["Le liquide le moins dense se place au-dessus.", "$0{,}78 < 1{,}00$ : le cyclohexane est au-dessus."], "le cyclohexane")
    m = 1.26 * 25.0
    add("approfondissement", "masse-volumique-densite",
        "Calculer la masse de 25,0 mL de glycérol (masse volumique 1,26 g·mL⁻¹).",
        [f"$m = \\rho \\times V = 1{{,}}26 \\times 25{{,}}0 = {cs(m)}$ g."], f"${cs(m)}$ g")

    # -- masse molaire (6)
    for f, nom in (("H2O", "de l'eau"), ("CO2", "du dioxyde de carbone"), ("C6H12O6", "du glucose"), ("C2H6O", "de l'éthanol"),
                   ("NH3", "de l'ammoniac"), ("CH4", "du méthane")):
        M = masse_molaire(f)
        detail = " + ".join(f"{n} \\times {nb(_M_AT[el], 1, True)}" if n > 1 else nb(_M_AT[el], 1, True) for el, n in atomes(f).items())
        add("application", "masse-molaire",
            f"Calculer la masse molaire moléculaire {nom}, ${tex_formule(f)}$. Données : M(H) = 1,0 ; M(C) = 12,0 ; M(N) = 14,0 ; M(O) = 16,0 g·mol⁻¹.",
            ["On additionne les masses molaires atomiques de tous les atomes de la molécule.", f"$M = {detail} = {nb(M, 1, True)}$ g·mol⁻¹."],
            f"${nb(M, 1, True)}$ g·mol⁻¹")

    # -- quantité de matière n = m/M (7)
    for m, f, nom in ((9.0, "H2O", "d'eau"), (11.0, "CO2", "de dioxyde de carbone"), (90.0, "C6H12O6", "de glucose"),
                      (23.0, "C2H6O", "d'éthanol"), (5.85, "NaCl", "de chlorure de sodium (solide ionique)")):
        M = masse_molaire(f)
        n = m / M
        add("intermediaire", "quantite-matiere",
            f"Calculer la quantité de matière contenue dans {t(m, 2 if m < 10 and m != 9.0 else 1, True)} g {nom} (${tex_formule(f)}$, M = {t(M, 1, True)} g·mol⁻¹).",
            [f"$n = \\dfrac{{m}}{{M}} = \\dfrac{{{nb(m, 2 if m < 10 and m != 9.0 else 1, True)}}}{{{nb(M, 1, True)}}} = {cs(n)}$ mol."],
            f"${cs(n)}$ mol")
    for n, f, nom in ((0.250, "H2O", "d'eau"), (2.00, "CH4", "de méthane")):
        M = masse_molaire(f)
        m = n * M
        add("intermediaire", "quantite-matiere",
            f"Quelle masse {nom} (${tex_formule(f)}$, M = {t(M, 1, True)} g·mol⁻¹) faut-il peser pour disposer de {t(n, 3 if n < 1 else 2, True)} mol ?",
            [f"$m = n \\times M = {nb(n, 3 if n < 1 else 2, True)} \\times {nb(M, 1, True)} = {cs(m)}$ g."], f"${cs(m)}$ g")

    # -- nombre d'entités (5)
    for n in (2.00, 0.500, 3.0e-3):
        N = n * NA
        add("intermediaire", "avogadro",
            f"Combien de molécules contient un échantillon de ${sci(n, 3) if n < 0.01 else nb(n, 3 if n < 1 else 2, True)}$ mol ? ($N_\\mathrm{{A}} = 6{{,}}02 \\times 10^{{23}}$ mol⁻¹)",
            [f"$N = n \\times N_\\mathrm{{A}} = {sci(n, 3) if n < 0.01 else nb(n, 3 if n < 1 else 2, True)} \\times 6{{,}}02 \\times 10^{{23}} = {sci(N, 3)}$."],
            f"${sci(N, 3)}$ molécules")
    N = 1.204e24
    add("approfondissement", "avogadro",
        "Un échantillon contient $1{,}204 \\times 10^{24}$ atomes de fer. Calculer la quantité de matière correspondante.",
        [f"$n = \\dfrac{{N}}{{N_\\mathrm{{A}}}} = \\dfrac{{1{{,}}204 \\times 10^{{24}}}}{{6{{,}}02 \\times 10^{{23}}}} = {cs(N / NA)}$ mol."], f"${cs(N / NA)}$ mol")
    n_eau = 18.0 / 18.0
    add("probleme", "avogadro",
        "Une cuillère contient 18,0 g d'eau (M = 18,0 g·mol⁻¹). Combien de molécules d'eau contient-elle ?",
        [f"$n = \\dfrac{{18{{,}}0}}{{18{{,}}0}} = {cs(n_eau)}$ mol.", f"$N = {cs(n_eau)} \\times 6{{,}}02 \\times 10^{{23}} = {sci(n_eau * NA, 3)}$ molécules."],
        f"${sci(n_eau * NA, 3)}$ molécules")

    # -- concentration en masse (7)
    for m, V in ((5.00, 250.0), (2.00, 100.0), (18.0, 500.0)):
        cm = m / (V / 1000)
        dm = 2 if m < 10 else 1
        add("application", "concentration-masse",
            f"On dissout {t(m, dm, True)} g de sucre pour obtenir {t(V, 1, True)} mL de solution. Calculer la concentration en masse en g·L⁻¹.",
            [f"$V = {nb(V, 1, True)}$ mL $= {nb(V / 1000, 4, True)}$ L.", f"$c_m = \\dfrac{{m}}{{V}} = \\dfrac{{{nb(m, dm, True)}}}{{{nb(V / 1000, 4, True)}}} = {cs(cm)}$ g·L⁻¹."],
            f"${cs(cm)}$ g·L⁻¹")
    for cm, V in ((9.00, 500.0), (20.0, 200.0)):
        m = cm * V / 1000
        dc = 2 if cm < 10 else 1
        add("intermediaire", "concentration-masse",
            f"Quelle masse de soluté faut-il dissoudre pour préparer {t(V, 1, True)} mL d'une solution de concentration en masse {t(cm, dc, True)} g·L⁻¹ ?",
            [f"$m = c_m \\times V = {nb(cm, dc, True)} \\times {nb(V / 1000, 4, True)} = {cs(m)}$ g."], f"${cs(m)}$ g")
    add("intermediaire", "concentration-masse",
        "Le sérum physiologique contient 0,90 g de chlorure de sodium pour 100 mL de solution. Calculer sa concentration en masse.",
        ["$c_m = \\dfrac{0{,}90}{0{,}100} = 9{,}0$ g·L⁻¹."], "$9{,}0$ g·L⁻¹")
    add("approfondissement", "concentration-masse",
        "On dissout 10 g de sel dans 1,00 L d'eau. Pourquoi la concentration en masse n'est-elle pas exactement 10 g·L⁻¹ ?",
        ["La concentration se calcule avec le volume de la solution, pas celui du solvant.", "Le volume de la solution n'est pas exactement 1,00 L."],
        "Le volume de solution n'est pas exactement celui du solvant")

    # -- concentration en quantité de matière (5)
    for n, V in ((0.0200, 200.0), (0.150, 500.0)):
        c = n / (V / 1000)
        dn = 4 if n < 0.1 else 3
        add("intermediaire", "concentration-molaire",
            f"On dissout {t(n, dn, True)} mol de soluté dans de l'eau pour obtenir {t(V, 1, True)} mL de solution. Calculer la concentration en quantité de matière.",
            [f"$c = \\dfrac{{n}}{{V}} = \\dfrac{{{nb(n, dn, True)}}}{{{nb(V / 1000, 4, True)}}} = {cs(c)}$ mol·L⁻¹."], f"${cs(c)}$ mol·L⁻¹")
    c, M = 0.100, 180.0
    add("approfondissement", "concentration-molaire",
        "Une solution de glucose a une concentration $c = 0{,}100$ mol·L⁻¹ (M = 180,0 g·mol⁻¹). Calculer sa concentration en masse.",
        [f"$c_m = c \\times M = 0{{,}}100 \\times 180{{,}}0 = {cs(c * M)}$ g·L⁻¹."], f"${cs(c * M)}$ g·L⁻¹")
    cm, M = 9.0, 58.5
    add("approfondissement", "concentration-molaire",
        "Le sérum physiologique a une concentration en masse de 9,0 g·L⁻¹ en chlorure de sodium (M = 58,5 g·mol⁻¹). Calculer sa concentration en quantité de matière.",
        [f"$c = \\dfrac{{c_m}}{{M}} = \\dfrac{{9{{,}}0}}{{58{{,}}5}} = {cs(cm / M, 2)}$ mol·L⁻¹."], f"${cs(cm / M, 2)}$ mol·L⁻¹")
    add("probleme", "concentration-molaire",
        "Calculer la masse de chlorure de sodium (M = 58,5 g·mol⁻¹) à peser pour préparer 250,0 mL d'une solution à 0,200 mol·L⁻¹.",
        ["$n = c \\times V = 0{,}200 \\times 0{,}2500 = 5{,}00 \\times 10^{-2}$ mol.", f"$m = n \\times M = 5{{,}}00 \\times 10^{{-2}} \\times 58{{,}}5 = {cs(0.05 * 58.5)}$ g."],
        f"${cs(0.05 * 58.5)}$ g")

    # -- dilution (8)
    for c1, V1, V2 in ((0.50, 10.0, 100.0), (2.0e-2, 20.0, 250.0)):
        c2 = c1 * V1 / V2
        add("intermediaire", "dilution",
            f"On prélève {t(V1, 1, True)} mL d'une solution mère de concentration ${sci(c1, 2) if c1 < 0.1 else nb(c1, 2, True)}$ mol·L⁻¹ et on complète à {t(V2, 1, True)} mL. Calculer la concentration de la solution fille.",
            ["La quantité de soluté se conserve : $c_1 V_1 = c_2 V_2$.",
             f"$c_2 = \\dfrac{{c_1 V_1}}{{V_2}} = \\dfrac{{{sci(c1, 2) if c1 < 0.1 else nb(c1, 2, True)} \\times {nb(V1, 1, True)}}}{{{nb(V2, 1, True)}}} = {sci(c2, 2)}$ mol·L⁻¹."],
            f"${sci(c2, 2)}$ mol·L⁻¹")
    for c1, c2, V2 in ((1.00, 0.100, 100.0), (0.200, 0.0500, 50.0)):
        V1 = c2 * V2 / c1
        add("approfondissement", "dilution",
            f"Quel volume de solution mère à {t(c1, 3, True)} mol·L⁻¹ faut-il prélever pour préparer {t(V2, 1, True)} mL de solution à {t(c2, 4 if c2 < 0.1 else 3, True)} mol·L⁻¹ ?",
            [f"$V_1 = \\dfrac{{c_2 V_2}}{{c_1}} = \\dfrac{{{nb(c2, 4 if c2 < 0.1 else 3, True)} \\times {nb(V2, 1, True)}}}{{{nb(c1, 3, True)}}} = {cs(V1)}$ mL."],
            f"${cs(V1)}$ mL")
    add("intermediaire", "dilution",
        "On veut diluer 20 fois une solution pour en obtenir 100,0 mL. Quel volume de solution mère faut-il prélever ?",
        ["$F = \\dfrac{V_2}{V_1}$, donc $V_1 = \\dfrac{V_2}{F} = \\dfrac{100{,}0}{20} = 5{,}0$ mL."], "$5{,}0$ mL")
    add("intermediaire", "dilution",
        "On passe d'une solution à 0,40 mol·L⁻¹ à une solution à 0,050 mol·L⁻¹. Calculer le facteur de dilution.",
        ["$F = \\dfrac{c_1}{c_2} = \\dfrac{0{,}40}{0{,}050} = 8{,}0$."], "$F = 8{,}0$")
    add("application", "dilution",
        "Quelle verrerie utiliser pour prélever précisément le volume de solution mère, puis pour préparer la solution fille ?",
        ["Prélèvement : pipette jaugée.", "Solution fille : fiole jaugée, complétée jusqu'au trait de jauge puis homogénéisée."],
        "pipette jaugée puis fiole jaugée")
    add("probleme", "dilution",
        "Un élève prépare une dilution en mesurant les volumes à l'éprouvette graduée. Pourquoi son professeur lui demande-t-il de recommencer ?",
        ["L'éprouvette graduée ne permet que des mesures approximatives.", "Pour une dilution précise, il faut une pipette jaugée et une fiole jaugée."],
        "Il faut de la verrerie jaugée, plus précise")
    return _fin(E)


# =====================================================================
# 2de — MODÉLISATION MICROSCOPIQUE DE LA MATIÈRE
# =====================================================================
_SYM_Z = {1: "H", 2: "He", 3: "Li", 4: "Be", 5: "B", 6: "C", 7: "N", 8: "O", 9: "F", 10: "Ne",
          11: "Na", 12: "Mg", 13: "Al", 14: "Si", 15: "P", 16: "S", 17: "Cl", 18: "Ar", 19: "K",
          20: "Ca", 26: "Fe", 27: "Co", 28: "Ni", 29: "Cu", 38: "Sr", 39: "Y", 53: "I", 54: "Xe",
          55: "Cs", 56: "Ba", 82: "Pb", 84: "Po", 86: "Rn", 88: "Ra", 90: "Th", 92: "U", 93: "Np", 95: "Am"}
_NOM_Z = {1: "hydrogène", 2: "hélium", 3: "lithium", 4: "béryllium", 5: "bore", 6: "carbone", 7: "azote",
          8: "oxygène", 9: "fluor", 10: "néon", 11: "sodium", 12: "magnésium", 13: "aluminium",
          14: "silicium", 15: "phosphore", 16: "soufre", 17: "chlore", 18: "argon"}


def config_e(Z):
    """Configuration électronique (Z <= 18) en LaTeX."""
    couches = [("1s", 2), ("2s", 2), ("2p", 6), ("3s", 2), ("3p", 6)]
    r, reste = [], Z
    for nom, cap in couches:
        if reste <= 0:
            break
        k = min(cap, reste)
        r.append(f"{nom[0]}\\mathrm{{{nom[1]}}}^{{{k}}}")
        reste -= k
    return "\\,".join(r)


def valence(Z):
    if Z <= 2:
        return Z, 1
    if Z <= 10:
        return Z - 2, 2
    return Z - 10, 3


def colonne(Z):
    if Z == 1:
        return 1
    if Z == 2:
        return 18
    v, _ = valence(Z)
    return v if v <= 2 else 10 + v


def noyau(A, Z, sym):
    return f"{{}}^{{{A}}}_{{{Z}}}\\mathrm{{{sym}}}"


def gen_2de_modelisation():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- composition (8)
    for A, Z in ((23, 11), (16, 8), (27, 13), (35, 17), (56, 26), (12, 6), (32, 16), (40, 20)):
        sym = _SYM_Z[Z]
        add("application", "composition-atome",
            f"Donner la composition de l'atome ${noyau(A, Z, sym)}$ (protons, neutrons, électrons).",
            [f"$Z = {Z}$ : {pl(Z, 'proton')} et, l'atome étant neutre, {pl(Z, 'électron')}.",
             f"Neutrons : $A - Z = {A} - {Z} = {A - Z}$."],
            f"{pl(Z, 'proton')}, {pl(A - Z, 'neutron')}, {pl(Z, 'électron')}")

    # -- notation symbolique (5)
    for Z, N, sym in ((7, 7, "N"), (19, 20, "K"), (12, 12, "Mg"), (3, 4, "Li")):
        A = Z + N
        add("intermediaire", "notation-symbolique",
            f"Le noyau d'un atome {de(_NOM_Z.get(Z, 'potassium'))} ($\\mathrm{{{sym}}}$) contient {pl(Z, 'proton')} et {pl(N, 'neutron')}. Écrire son symbole $^{{A}}_{{Z}}\\mathrm{{X}}$.",
            [f"$Z = {Z}$ (protons) et $A = Z + N = {Z} + {N} = {A}$ (nucléons)."], f"${noyau(A, Z, sym)}$")
    add("application", "notation-symbolique",
        "Que représentent $A$ et $Z$ dans l'écriture $^{A}_{Z}\\mathrm{X}$ ?",
        ["$Z$ : numéro atomique = nombre de protons.", "$A$ : nombre de masse = nombre de nucléons (protons + neutrons)."],
        "$Z$ = nombre de protons ; $A$ = nombre de nucléons")

    # -- isotopes (5)
    iso = [((12, 6, "C"), (14, 6, "C")), ((35, 17, "Cl"), (37, 17, "Cl")), ((16, 8, "O"), (18, 8, "O"))]
    for (A1, Z1, s1), (A2, Z2, s2) in iso:
        add("intermediaire", "isotopes",
            f"Les noyaux ${noyau(A1, Z1, s1)}$ et ${noyau(A2, Z2, s2)}$ sont-ils isotopes ? Préciser ce qui les différencie.",
            [f"Même $Z = {Z1}$ : même élément.", f"Neutrons : ${A1 - Z1}$ et ${A2 - Z2}$. Ils diffèrent par leur nombre de neutrons."],
            f"Oui : même $Z$, ${A1 - Z1}$ et ${A2 - Z2}$ neutrons")
    add("approfondissement", "isotopes",
        "Les noyaux ${}^{14}_{6}\\mathrm{C}$ et ${}^{14}_{7}\\mathrm{N}$ sont-ils isotopes ?",
        ["Ils ont le même $A$ mais pas le même $Z$.", "Ce ne sont pas des isotopes : ce sont deux éléments différents."], "Non (Z différents)")
    add("approfondissement", "isotopes",
        "L'hydrogène possède trois isotopes : ${}^{1}_{1}\\mathrm{H}$, ${}^{2}_{1}\\mathrm{H}$ et ${}^{3}_{1}\\mathrm{H}$. Combien de neutrons chacun contient-il ?",
        ["Neutrons $= A - Z$ : $1 - 1 = 0$, $2 - 1 = 1$, $3 - 1 = 2$."], "0 neutron, 1 neutron, 2 neutrons")

    # -- structure lacunaire et charge (5)
    add("intermediaire", "lacunaire-charge",
        "Le rayon d'un atome est de l'ordre de $10^{-10}$ m, celui de son noyau de $10^{-15}$ m. Calculer le rapport des deux rayons. Que peut-on en conclure ?",
        ["$\\dfrac{10^{-10}}{10^{-15}} = 10^{5}$.", "Le noyau est 100 000 fois plus petit que l'atome : la matière est essentiellement du vide (structure lacunaire)."],
        "$10^{5}$ : la structure est lacunaire")
    for Z in (8, 13, 26):
        Q = Z * 1.6e-19
        add("intermediaire", "lacunaire-charge",
            f"Calculer la charge électrique du noyau d'un atome de numéro atomique $Z = {Z}$ ($e = 1{{,}}6 \\times 10^{{-19}}$ C).",
            [f"Le noyau contient {Z} protons de charge $+e$.", f"$Q = Z \\times e = {Z} \\times 1{{,}}6 \\times 10^{{-19}} = {sci(Q, 2)}$ C."],
            f"${sci(Q, 2)}$ C")
    add("approfondissement", "lacunaire-charge",
        "Pourquoi un atome est-il électriquement neutre alors que son noyau est chargé positivement ?",
        ["Il contient autant d'électrons (charge $-e$) que de protons (charge $+e$).", "Les charges se compensent exactement."],
        "Autant d'électrons que de protons")

    # -- configuration électronique (9)
    for Z in (6, 8, 11, 13, 15, 17, 3, 10, 16):
        v, per = valence(Z)
        add("application" if Z <= 10 else "intermediaire", "configuration-electronique",
            f"Écrire la configuration électronique de l'atome {de(_NOM_Z[Z])} ($Z = {Z}$) et donner son nombre d'électrons de valence.",
            ["Ordre de remplissage : 1s, 2s, 2p, 3s, 3p (s : 2 électrons max, p : 6 max).",
             f"${config_e(Z)}$ (la somme des exposants vaut {Z}).",
             f"Dernière couche occupée : $n = {per}$, qui contient {pl(v, 'électron')} de valence."],
            f"${config_e(Z)}$ ; {pl(v, 'électron')} de valence")

    # -- tableau périodique (7)
    for Z in (12, 7, 17, 2):
        v, per = valence(Z)
        col = colonne(Z)
        add("intermediaire", "tableau-periodique",
            f"Dans quelle période (ligne) et quelle colonne du tableau périodique se trouve l'élément {_NOM_Z[Z]} ($Z = {Z}$) ?",
            [f"Configuration : ${config_e(Z)}$.", f"Dernière couche $n = {per}$ : période {per}.",
             f"{pl(v, 'électron')} de valence : colonne {col}." if Z != 2 else "Couche externe saturée (2 électrons) : colonne 18, celle des gaz nobles."],
            f"période {per}, colonne {col}")
    add("application", "tableau-periodique",
        "Comment s'appelle la famille de la colonne 18 ? Pourquoi ces éléments sont-ils peu réactifs ?",
        ["Ce sont les gaz nobles.", "Leur couche externe est saturée : ils sont quasi inertes."], "les gaz nobles ; couche externe saturée")
    add("intermediaire", "tableau-periodique",
        "Le lithium et le sodium sont dans la même colonne. Qu'ont-ils en commun ?",
        ["Même colonne : même nombre d'électrons de valence (1).", "Ils ont donc des propriétés chimiques voisines (alcalins)."],
        "1 électron de valence, propriétés chimiques voisines")
    add("approfondissement", "tableau-periodique",
        "Un élément de la période 3 possède 7 électrons de valence. Quel est son numéro atomique ? De quel élément s'agit-il ?",
        ["Période 3 : $1\\mathrm{s}^{2}\\,2\\mathrm{s}^{2}\\,2\\mathrm{p}^{6}$ complets (10 électrons) puis 7 électrons en $n = 3$.", "$Z = 10 + 7 = 17$ : le chlore."],
        "$Z = 17$ : le chlore")

    # -- ions (6)
    for Z in (11, 12, 13, 9, 8, 3):
        v, per = valence(Z)
        if v <= 3:
            q = v
            gaz = "hélium" if Z == 3 else ("néon" if per == 3 else "hélium")
            txt = f"perdre {pl(v, 'électron')}"
        else:
            q = v - 8
            gaz = "néon" if per == 2 else "argon"
            txt = f"gagner {pl(8 - v, 'électron')}"
        sym = _SYM_Z[Z]
        add("approfondissement", "ions-octet",
            f"En utilisant la règle du duet et de l'octet, prévoir l'ion formé par l'atome {de(_NOM_Z[Z])} ($Z = {Z}$).",
            [f"Configuration : ${config_e(Z)}$ ({pl(v, 'électron')} de valence).",
             f"Pour obtenir la configuration du gaz noble le plus proche ({gaz}), l'atome tend à {txt}.",
             f"Ion formé : ${_ion_tex(sym, q)}$."],
            f"${_ion_tex(sym, q)}$")

    # -- liaisons covalentes (5)
    lv = [("H2O", "O", 6, 2), ("NH3", "N", 5, 3), ("CH4", "C", 4, 4), ("HCl", "Cl", 7, 1)]
    for f, el, v, nl in lv:
        dnl = (v - nl) // 2
        add("intermediaire", "liaisons-covalentes",
            f"Dans la molécule ${tex_formule(f)}$, combien de liaisons covalentes l'atome {de(_NOMS_EL[el])} forme-t-il, et combien de doublets non liants porte-t-il ?",
            [f"L'atome {de(_NOMS_EL[el])} a {pl(v, 'électron')} de valence : il lui en manque {8 - v} pour l'octet, d'où {pl(nl, 'liaison')}.",
             f"Électrons restants : ${v} - {nl} = {v - nl}$, soit {pl(dnl, 'doublet')} non liant{'s' if dnl >= 2 else ''}."],
            f"{pl(nl, 'liaison')} ; {pl(dnl, 'doublet')} non liant{'s' if dnl >= 2 else ''}")
    add("application", "liaisons-covalentes",
        "Qu'est-ce qu'une liaison covalente ?",
        ["C'est la mise en commun de deux électrons entre deux atomes, un électron apporté par chacun."], "la mise en commun de deux électrons (un par atome)")
    return _fin(E)


# =====================================================================
# 2de — MOUVEMENT ET INTERACTIONS  (g = 9,81 N/kg sur Terre)
# =====================================================================
GRAV = 6.67e-11


def gen_2de_mouvement():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- référentiel (6)
    rf = [
        ("Quel référentiel choisir pour étudier le mouvement d'une voiture sur une route ?", "le référentiel terrestre"),
        ("Quel référentiel choisir pour étudier le mouvement d'un satellite autour de la Terre ?", "le référentiel géocentrique"),
        ("Quel référentiel choisir pour étudier le mouvement de Mars autour du Soleil ?", "le référentiel héliocentrique"),
        ("Quel référentiel choisir pour étudier le mouvement de la Lune autour de la Terre ?", "le référentiel géocentrique"),
    ]
    for e, r in rf:
        add("application", "referentiel", e, ["Le référentiel se choisit selon l'objet étudié et l'objet de référence."], r)
    add("intermediaire", "referentiel",
        "Un passager est assis dans un train qui roule. Décrire son mouvement dans le référentiel du train, puis dans le référentiel terrestre.",
        ["Dans le référentiel du train, sa position ne change pas : il est immobile.", "Dans le référentiel terrestre, il se déplace avec le train."],
        "immobile dans le train ; en mouvement par rapport au sol")
    add("intermediaire", "referentiel",
        "Pourquoi une réponse du type « l'objet est immobile » est-elle incomplète en physique ?",
        ["Un mouvement (ou un repos) n'existe que par rapport à un référentiel.", "Il faut préciser le référentiel."],
        "Il faut préciser le référentiel")

    # -- description du mouvement (6)
    dm = [
        ("Dans le référentiel terrestre, une balle lâchée sans vitesse tombe verticalement de plus en plus vite. Décrire son mouvement.", "rectiligne accéléré"),
        ("Dans le référentiel terrestre, un ascenseur monte à vitesse constante. Décrire son mouvement.", "rectiligne uniforme"),
        ("Dans le référentiel terrestre, un point de la pale d'une éolienne qui tourne régulièrement. Décrire son mouvement.", "circulaire uniforme"),
        ("Dans le référentiel terrestre, un skieur freine en ligne droite jusqu'à l'arrêt. Décrire son mouvement.", "rectiligne décéléré"),
        ("Dans le référentiel géocentrique, un satellite géostationnaire décrit un cercle à vitesse constante. Décrire son mouvement.", "circulaire uniforme"),
    ]
    for e, r in dm:
        add("application", "description-mouvement", e,
            ["On précise la trajectoire (droite, cercle, courbe) puis l'évolution de la vitesse.", f"Mouvement {r}."], f"mouvement {r}")
    add("approfondissement", "description-mouvement",
        "Dans un mouvement circulaire uniforme, le vecteur vitesse est-il constant ? Justifier.",
        ["Sa valeur est constante.", "Sa direction (tangente au cercle) change en permanence : le vecteur vitesse n'est pas constant."],
        "Non : sa direction change en permanence")
    add("intermediaire", "description-mouvement",
        "Donner les caractéristiques du vecteur vitesse d'un point en mouvement.",
        ["Direction : tangente à la trajectoire.", "Sens : celui du mouvement.", "Valeur : la vitesse (en m·s⁻¹)."],
        "direction tangente à la trajectoire, sens du mouvement, valeur $v$")

    # -- vitesse moyenne (8)
    vm = [(100, 9.58, "Un sprinteur (record du monde du 100 m)"), (42195, 7200, "Une marathonienne"),
          (1500, 300, "Un cycliste"), (400, 47.0, "Un athlète")]
    for d, dt, qui in vm:
        v = d / dt
        add("application", "vitesse-moyenne",
            f"{qui} parcourt {t(d)} m en {t(dt, 2 if dt < 10 else 1, True) if dt < 100 else t(dt)} s. Calculer sa vitesse moyenne en m·s⁻¹.",
            [f"$v = \\dfrac{{d}}{{\\Delta t}} = \\dfrac{{{nb(d)}}}{{{nb(dt, 2 if dt < 10 else 1, True) if dt < 100 else nb(dt)}}} = {cs(v)}$ m·s⁻¹."], f"${cs(v)}$ m·s⁻¹")
    for d_km, h, mn, qui in ((780, 3, 0, "Un TGV relie deux villes distantes de 780 km"), (45, 0, 30, "Une voiture parcourt 45 km")):
        tt = h * 3600 + mn * 60
        v = d_km * 1000 / tt
        duree = f"{h} h" if mn == 0 else f"{mn} min"
        add("intermediaire", "vitesse-moyenne",
            f"{qui} en {duree}. Calculer sa vitesse moyenne en m·s⁻¹, puis en km·h⁻¹.",
            [f"$d = {nb(d_km * 1000)}$ m et $\\Delta t = {nb(tt)}$ s.", f"$v = \\dfrac{{{nb(d_km * 1000)}}}{{{nb(tt)}}} = {cs(v)}$ m·s⁻¹.",
             f"$v = {cs(v)} \\times 3{{,}}6 = {cs(v * 3.6)}$ km·h⁻¹."],
            f"${cs(v)}$ m·s⁻¹, soit ${cs(v * 3.6)}$ km·h⁻¹")
    add("intermediaire", "vitesse-moyenne",
        "Un cycliste roule à 5,5 m·s⁻¹ pendant 20 min. Quelle distance parcourt-il ?",
        ["$\\Delta t = 20 \\times 60 = 1\\,200$ s.", f"$d = v \\times \\Delta t = 5{{,}}5 \\times 1\\,200 = {nb(5.5 * 1200)}$ m $= {nb(5.5 * 1.2)}$ km."],
        f"${nb(5.5 * 1200)}$ m")
    tt = 2.0e3 / (50 / 3.6)
    add("probleme", "vitesse-moyenne",
        "En ville, un bus roule en moyenne à 50 km·h⁻¹. Combien de temps met-il pour parcourir 2,0 km ? Donner le résultat en secondes.",
        [f"$v = \\dfrac{{50}}{{3{{,}}6}} = {cs(50 / 3.6)}$ m·s⁻¹.", f"$\\Delta t = \\dfrac{{d}}{{v}} = \\dfrac{{2{{,}}0 \\times 10^{{3}}}}{{{cs(50 / 3.6)}}} = {cs(tt, 2)}$ s."],
        f"${cs(tt, 2)}$ s (environ 2 min 24 s)")

    # -- conversions (5)
    for kmh in (90, 130, 50):
        ms = kmh / 3.6
        add("application", "conversion",
            f"Convertir {kmh} km·h⁻¹ en m·s⁻¹.",
            ["On divise par $3{,}6$.", f"${kmh} \\div 3{{,}}6 = {cs(ms)}$ m·s⁻¹."], f"${cs(ms)}$ m·s⁻¹")
    for ms in (340, 7.5):
        add("application", "conversion",
            f"Convertir {t(ms)} m·s⁻¹ en km·h⁻¹.",
            ["On multiplie par $3{,}6$.", f"${nb(ms)} \\times 3{{,}}6 = {cs(ms * 3.6)}$ km·h⁻¹."], f"${cs(ms * 3.6)}$ km·h⁻¹")

    # -- poids (7)
    for m in (70, 0.250, 1.5e3):
        P = m * 9.81
        mtxt = f"{t(m)} kg" if m != 0.250 else "250 g"
        add("application", "poids",
            f"Calculer le poids d'un objet de masse {mtxt} sur Terre ($g = 9{{,}}81$ N·kg⁻¹).",
            ([f"$m = 0{{,}}250$ kg."] if m == 0.250 else []) + [f"$P = m \\times g = {nb(m, 3)} \\times 9{{,}}81 = {cs(P)}$ N."],
            f"${cs(P)}$ N")
    for m in (70, 1.5e3):
        P = m * 1.6
        add("intermediaire", "poids",
            f"Calculer le poids d'un objet de masse {t(m)} kg sur la Lune ($g_\\mathrm{{L}} = 1{{,}}6$ N·kg⁻¹). Sa masse a-t-elle changé ?",
            [f"$P = {nb(m)} \\times 1{{,}}6 = {cs(P, 2)}$ N.", "La masse est la même partout : seul le poids change."],
            f"${cs(P, 2)}$ N ; masse inchangée")
    add("intermediaire", "poids",
        "Un dynamomètre indique 4,9 N quand on y suspend un objet, sur Terre ($g = 9{,}81$ N·kg⁻¹). Calculer la masse de l'objet.",
        [f"$m = \\dfrac{{P}}{{g}} = \\dfrac{{4{{,}}9}}{{9{{,}}81}} = {cs(4.9 / 9.81, 2)}$ kg."], f"${cs(4.9 / 9.81, 2)}$ kg")
    add("application", "poids",
        "Vrai ou faux ? La masse d'un astronaute est six fois plus petite sur la Lune que sur Terre.",
        ["Faux : la masse (en kg) est la même partout.", "C'est son poids (en N) qui est environ six fois plus petit."], "Faux")

    # -- gravitation (8)
    MT, RT, ML, dTL, MS, dTS = 5.97e24, 6.37e6, 7.35e22, 3.84e8, 1.99e30, 1.50e11
    F = GRAV * MT * ML / dTL ** 2
    add("intermediaire", "gravitation",
        "Calculer la force d'interaction gravitationnelle entre la Terre ($5{,}97 \\times 10^{24}$ kg) et la Lune ($7{,}35 \\times 10^{22}$ kg), distantes de $3{,}84 \\times 10^{8}$ m. ($G = 6{,}67 \\times 10^{-11}$ N·m²·kg⁻²)",
        ["$F = G\\,\\dfrac{m_\\mathrm{T} \\times m_\\mathrm{L}}{d^2}$.",
         f"$F = 6{{,}}67 \\times 10^{{-11}} \\times \\dfrac{{5{{,}}97 \\times 10^{{24}} \\times 7{{,}}35 \\times 10^{{22}}}}{{(3{{,}}84 \\times 10^{{8}})^2}} = {sci(F, 3)}$ N."],
        f"${sci(F, 3)}$ N")
    F = GRAV * MS * MT / dTS ** 2
    add("intermediaire", "gravitation",
        "Calculer la force d'interaction gravitationnelle exercée par le Soleil ($1{,}99 \\times 10^{30}$ kg) sur la Terre ($5{,}97 \\times 10^{24}$ kg), à $1{,}50 \\times 10^{11}$ m. ($G = 6{,}67 \\times 10^{-11}$ N·m²·kg⁻²)",
        ["$F = G\\,\\dfrac{m_\\mathrm{S} \\times m_\\mathrm{T}}{d^2}$.", f"$F = {sci(F, 3)}$ N."], f"${sci(F, 3)}$ N")
    F = GRAV * MT * 70 / RT ** 2
    add("approfondissement", "gravitation",
        "Calculer la force gravitationnelle exercée par la Terre ($5{,}97 \\times 10^{24}$ kg, rayon $6{,}37 \\times 10^{6}$ m) sur une personne de 70 kg à sa surface. Comparer à son poids ($g = 9{,}81$ N·kg⁻¹).",
        [f"$F = 6{{,}}67 \\times 10^{{-11}} \\times \\dfrac{{5{{,}}97 \\times 10^{{24}} \\times 70}}{{(6{{,}}37 \\times 10^{{6}})^2}} = {cs(F)}$ N.",
         f"$P = 70 \\times 9{{,}}81 = {cs(70 * 9.81)}$ N : les deux valeurs sont quasiment égales (le poids est dû à la gravitation)."],
        f"$F \\approx {cs(F)}$ N, quasiment égal au poids")
    for k in (2, 3):
        add("intermediaire", "gravitation",
            f"Deux corps s'attirent avec une force $F$. Que devient cette force si la distance entre eux est multipliée par {k} ?",
            ["La force est inversement proportionnelle au carré de la distance.", f"$d$ multipliée par ${k}$ : $F$ divisée par ${k}^2 = {k * k}$."],
            f"Elle est divisée par {k * k}")
    add("intermediaire", "gravitation",
        "Deux corps s'attirent avec une force $F$. Que devient cette force si la masse de l'un des deux est doublée ?",
        ["La force est proportionnelle au produit des masses : elle est multipliée par 2."], "Elle est multipliée par 2")
    add("application", "gravitation",
        "La Terre attire la Lune avec une force $F$. Avec quelle force la Lune attire-t-elle la Terre ?",
        ["L'interaction gravitationnelle est réciproque : les deux forces ont la même valeur, des sens opposés."], "avec la même valeur $F$")
    add("application", "gravitation",
        "La force d'interaction gravitationnelle est-elle attractive ou répulsive ?", ["Elle est toujours attractive."], "toujours attractive")

    # -- principe d'inertie (8)
    pi = [
        ("Énoncer le principe d'inertie.", "Si les forces se compensent (ou s'il n'y en a pas), le corps est immobile ou en mouvement rectiligne uniforme, et réciproquement",
         ["Il s'applique dans un référentiel galiléen (le référentiel terrestre pour les mouvements courants)."], "application"),
        ("Un parachutiste descend verticalement à vitesse constante. Les forces qui s'exercent sur lui se compensent-elles ?", "Oui",
         ["Mouvement rectiligne uniforme : d'après le principe d'inertie, les forces se compensent.", "Son poids est compensé par les frottements de l'air."], "intermediaire"),
        ("Une voiture prend un virage à vitesse constante. Les forces qui s'exercent sur elle se compensent-elles ?", "Non",
         ["Le mouvement n'est pas rectiligne uniforme (la trajectoire est courbe).", "D'après le principe d'inertie, les forces ne se compensent pas."], "approfondissement"),
        ("Une balle tombe en chute libre de plus en plus vite. Les forces se compensent-elles ?", "Non",
         ["Le mouvement est accéléré : les forces ne se compensent pas (le poids n'est pas compensé)."], "intermediaire"),
        ("Une sonde spatiale, loin de tout astre, a coupé ses moteurs. Comment se poursuit son mouvement ?", "Elle continue en mouvement rectiligne uniforme",
         ["Aucune force ne s'exerce sur elle (ou elles sont négligeables).", "D'après le principe d'inertie, son mouvement est rectiligne uniforme : pas besoin de moteur pour l'entretenir."], "approfondissement"),
        ("Vrai ou faux ? Il faut une force pour maintenir un objet en mouvement.", "Faux",
         ["Une force est nécessaire pour modifier un mouvement, pas pour l'entretenir."], "intermediaire"),
        ("Un livre est posé immobile sur une table. Quelles forces subit-il ? Que peut-on en dire ?", "son poids et la réaction de la table, qui se compensent",
         ["Le livre est immobile : d'après le principe d'inertie, les forces se compensent.", "« Les forces se compensent » ne veut pas dire « il n'y a pas de force »."], "intermediaire"),
        ("Un palet de hockey glisse sur la glace en ligne droite à vitesse quasi constante. Que peut-on dire des forces qui s'exercent sur lui ?", "Elles se compensent (presque)",
         ["Mouvement quasi rectiligne uniforme : poids et réaction de la glace se compensent ; les frottements sont très faibles."], "probleme"),
    ]
    for e, r, c, d in pi:
        add(d, "principe-inertie", e, c, r)
    add("probleme", "principe-inertie",
        "Un objet de 2,0 kg est suspendu immobile à un fil. Calculer la tension du fil ($g = 9{,}81$ N·kg⁻¹).",
        ["L'objet est immobile : d'après le principe d'inertie, la tension du fil compense le poids.", f"$T = P = 2{{,}}0 \\times 9{{,}}81 = {cs(2 * 9.81, 2)}$ N."],
        f"$T = {cs(2 * 9.81, 2)}$ N")
    return _fin(E)


# =====================================================================
# 2de — ONDES ET SIGNAUX
# =====================================================================
def gen_2de_ondes():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    C = 3.00e8
    # -- propagation de la lumière (6)
    for dt, cible in ((1.28, "de la Lune"), (499, "du Soleil")):
        d = C * dt
        add("intermediaire", "propagation-lumiere",
            f"La lumière met {t(dt)} s pour venir {cible} jusqu'à la Terre. Calculer la distance correspondante ($c = 3{{,}}00 \\times 10^{{8}}$ m·s⁻¹).",
            [f"$d = c \\times \\Delta t = 3{{,}}00 \\times 10^{{8}} \\times {nb(dt)} = {sci(d, 3)}$ m."], f"${sci(d, 3)}$ m")
    dt = 3.84e8 / C
    add("intermediaire", "propagation-lumiere",
        "La Lune est à $3{,}84 \\times 10^{8}$ m de la Terre. Combien de temps met la lumière pour faire ce trajet ?",
        [f"$\\Delta t = \\dfrac{{d}}{{c}} = \\dfrac{{3{{,}}84 \\times 10^{{8}}}}{{3{{,}}00 \\times 10^{{8}}}} = {cs(dt)}$ s."], f"${cs(dt)}$ s")
    add("application", "propagation-lumiere",
        "Comment se propage la lumière dans un milieu homogène ?", ["En ligne droite."], "en ligne droite")
    add("application", "propagation-lumiere",
        "Quelle est la valeur de la vitesse de la lumière dans le vide ?", ["$c = 3{,}00 \\times 10^{8}$ m·s⁻¹."], "$3{,}00 \\times 10^{8}$ m·s⁻¹")
    al = C * 365.25 * 24 * 3600
    add("approfondissement", "propagation-lumiere",
        "Calculer la valeur d'une année-lumière en mètres (1 an $= 365{,}25$ jours, $c = 3{,}00 \\times 10^{8}$ m·s⁻¹).",
        ["$\\Delta t = 365{,}25 \\times 24 \\times 3\\,600 = 3{,}156 \\times 10^{7}$ s.", f"$d = c \\times \\Delta t = {sci(al, 3)}$ m."], f"${sci(al, 3)}$ m")

    # -- année-lumière (4)
    add("application", "annee-lumiere",
        "L'année-lumière est-elle une unité de durée ou de distance ?", ["C'est la distance parcourue par la lumière dans le vide en un an."], "de distance")
    add("intermediaire", "annee-lumiere",
        "L'étoile Proxima du Centaure est à 4,2 a.l. Quand la lumière que l'on reçoit aujourd'hui a-t-elle quitté l'étoile ?",
        ["Elle a voyagé pendant 4,2 ans : on voit l'étoile telle qu'elle était il y a 4,2 ans."], "il y a 4,2 ans")
    d = 4.2 * al
    add("approfondissement", "annee-lumiere",
        f"Exprimer en mètres la distance de Proxima du Centaure, 4,2 a.l. (1 a.l. $= {sci(al, 3)}$ m).",
        [f"$d = 4{{,}}2 \\times {sci(al, 3)} = {sci(d, 2)}$ m."], f"${sci(d, 2)}$ m")
    add("approfondissement", "annee-lumiere",
        "Une galaxie est à 2,5 millions d'années-lumière. Peut-on être sûr qu'elle existe encore aujourd'hui telle qu'on la voit ?",
        ["On la voit telle qu'elle était il y a 2,5 millions d'années.", "On ne peut pas savoir ce qu'elle est devenue depuis."], "Non : on la voit telle qu'elle était il y a 2,5 millions d'années")

    # -- réfraction (8)
    ref = [(1.00, 30, 1.33, "de l'air", "à l'eau"), (1.00, 45, 1.50, "de l'air", "au verre"), (1.00, 60, 1.33, "de l'air", "à l'eau"),
           (1.50, 20, 1.00, "du verre", "à l'air")]
    for n1, i1, n2, m1, m2 in ref:
        s2 = n1 * math.sin(math.radians(i1)) / n2
        i2 = math.degrees(math.asin(s2))
        add("intermediaire", "refraction",
            f"Un rayon passe {m1} ($n_1 = {nb(n1, 2, True)}$) {m2} ($n_2 = {nb(n2, 2, True)}$) avec un angle d'incidence de {i1}°. Calculer l'angle de réfraction.",
            ["Loi de Snell-Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$.",
             f"$\\sin i_2 = \\dfrac{{{nb(n1, 2, True)} \\times \\sin {i1}°}}{{{nb(n2, 2, True)}}} = {nb(s2, 3, True)}$, donc $i_2 \\approx {nb(i2, 0)}°$."],
            f"$i_2 \\approx {nb(i2, 0)}°$")
    i1, i2 = 40, 25.4
    n2 = math.sin(math.radians(i1)) / math.sin(math.radians(i2))
    add("approfondissement", "refraction",
        "Un rayon passe de l'air ($n_1 = 1{,}00$) à un liquide avec $i_1 = 40°$ et $i_2 = 25{,}4°$. Calculer l'indice de réfraction du liquide.",
        [f"$n_2 = \\dfrac{{n_1 \\sin i_1}}{{\\sin i_2}} = \\dfrac{{\\sin 40°}}{{\\sin 25{{,}}4°}} = {cs(n2)}$."], f"$n_2 \\approx {cs(n2)}$")
    add("application", "refraction",
        "Par rapport à quoi mesure-t-on les angles d'incidence et de réfraction ?", ["Par rapport à la normale à la surface de séparation, jamais par rapport à la surface."], "par rapport à la normale")
    add("intermediaire", "refraction",
        "Un rayon passe de l'air dans l'eau. Se rapproche-t-il ou s'écarte-t-il de la normale ?",
        ["$n_{\\text{eau}} > n_{\\text{air}}$ donc $\\sin i_2 < \\sin i_1$ : $i_2 < i_1$.", "Le rayon se rapproche de la normale."], "Il se rapproche de la normale")
    add("application", "refraction",
        "Que vaut l'angle de réfraction d'un rayon qui arrive perpendiculairement à la surface ($i_1 = 0°$) ?",
        ["$\\sin i_2 = 0$ donc $i_2 = 0°$ : le rayon n'est pas dévié."], "$0°$ (pas de déviation)")

    # -- lentilles (6)
    for fp_txt, fp_m in (("20 cm", 0.20), ("50 mm", 0.050), ("12,5 cm", 0.125)):
        Cv = 1 / fp_m
        add("intermediaire", "lentilles",
            f"Calculer la vergence d'une lentille convergente de distance focale $f' = {fp_txt.replace(',', '{,}').split()[0]}$ {fp_txt.split()[1]}.",
            [f"$f' = {cs(fp_m, 3 if fp_m == 0.125 else 2)}$ m.", f"$C = \\dfrac{{1}}{{f'}} = \\dfrac{{1}}{{{cs(fp_m, 3 if fp_m == 0.125 else 2)}}} = {cs(Cv, 3 if fp_m == 0.125 else 2)}$ δ."], f"${cs(Cv, 3 if fp_m == 0.125 else 2)}$ δ")
    add("intermediaire", "lentilles",
        "Une lentille a une vergence de 4,0 δ. Calculer sa distance focale en cm.",
        ["$f' = \\dfrac{1}{C} = \\dfrac{1}{4{,}0} = 0{,}25$ m $= 25$ cm."], "$25$ cm")
    add("application", "lentilles",
        "Que devient un rayon parallèle à l'axe optique après une lentille convergente ?", ["Il ressort en passant par le foyer image $\\mathrm{F'}$."], "il passe par le foyer image F'")
    add("application", "lentilles",
        "Que devient un rayon qui passe par le centre optique d'une lentille ?", ["Il n'est pas dévié."], "il n'est pas dévié")

    # -- son (8)
    for dt in (3.0, 6.0):
        d = 340 * dt
        add("intermediaire", "son",
            f"Pendant un orage, on entend le tonnerre {t(dt, 1, True)} s après avoir vu l'éclair. À quelle distance est tombée la foudre ($v_{{\\text{{son}}}} = 340$ m·s⁻¹) ?",
            ["La lumière arrive quasi instantanément ; le retard est dû au son.", f"$d = 340 \\times {nb(dt, 1, True)} = {nb(d)}$ m."],
            f"${nb(d)}$ m (environ {t(d / 1000, 1)} km)")
    add("application", "son",
        "Le son peut-il se propager dans le vide ? Pourquoi ?", ["Non : c'est une onde mécanique, elle a besoin d'un milieu matériel."], "Non, il lui faut un milieu matériel")
    add("intermediaire", "son",
        "Dans un film, on entend l'explosion d'un vaisseau spatial dans l'espace. Est-ce réaliste ?", ["Non : le son ne se propage pas dans le vide spatial."], "Non")
    for f, nat in ((15, "infrason"), (440, "son audible"), (40000, "ultrason")):
        add("application", "son",
            f"Un son a une fréquence de {t(f)} Hz. Est-il audible par l'être humain ?",
            ["Domaine audible : environ 20 Hz à 20 000 Hz."], "Non, c'est un infrason" if nat == "infrason" else ("Oui" if nat == "son audible" else "Non, c'est un ultrason"))
    add("approfondissement", "son",
        "Quelle grandeur détermine la hauteur d'un son (grave ou aigu) ? Et sa force ?",
        ["La fréquence (en Hz) détermine la hauteur.", "Le niveau d'intensité sonore (en dB) traduit la force du son."], "la fréquence ; le niveau d'intensité sonore (dB)")

    # -- période et fréquence (6)
    for T_ms in (2.5, 10.0, 0.5, 20.0):
        f = 1 / (T_ms / 1000)
        add("intermediaire", "periode-frequence",
            f"Un signal sonore a une période $T = {cs(T_ms, 2)}$ ms. Calculer sa fréquence.",
            [f"$T = {sci(T_ms / 1000, 2)}$ s.", f"$f = \\dfrac{{1}}{{T}} = {cs(f, 2)}$ Hz."], f"${cs(f, 2)}$ Hz")
    T = 1 / 440
    add("intermediaire", "periode-frequence",
        "Le la du diapason a une fréquence de 440 Hz. Calculer sa période en ms.",
        [f"$T = \\dfrac{{1}}{{f}} = \\dfrac{{1}}{{440}} = {sci(T, 3)}$ s $= {cs(T * 1000)}$ ms."], f"${cs(T * 1000)}$ ms")
    add("approfondissement", "periode-frequence",
        "Sur l'écran d'un oscilloscope, 4 périodes d'un signal occupent 8,0 ms. Calculer la fréquence du signal.",
        ["$T = \\dfrac{8{,}0}{4} = 2{,}0$ ms $= 2{,}0 \\times 10^{-3}$ s.", "$f = \\dfrac{1}{2{,}0 \\times 10^{-3}} = 500$ Hz."], "$500$ Hz")

    # -- loi d'Ohm (7)
    for R, I_mA in ((100, 50), (220, 20), (1000, 4.5)):
        U = R * I_mA / 1000
        add("application", "loi-ohm",
            f"Une résistance $R = {nb(R)}$ Ω est parcourue par un courant de {t(I_mA, 1, True) if I_mA < 10 else t(I_mA)} mA. Calculer la tension à ses bornes.",
            [f"$I = {sci(I_mA / 1000, 2)}$ A.", f"$U = R \\times I = {nb(R)} \\times {sci(I_mA / 1000, 2)} = {cs(U, 2)}$ V."], f"${cs(U, 2)}$ V")
    for U, R in ((12, 470), (5.0, 330)):
        I = U / R
        add("intermediaire", "loi-ohm",
            f"Une tension de {t(U, 1, True)} V est appliquée aux bornes d'une résistance de {R} Ω. Calculer l'intensité du courant, en mA.",
            [f"$I = \\dfrac{{U}}{{R}} = \\dfrac{{{nb(U, 1, True)}}}{{{R}}} = {sci(I, 3)}$ A $= {cs(I * 1000)}$ mA."], f"${cs(I * 1000)}$ mA")
    add("intermediaire", "loi-ohm",
        "Une tension de 6,0 V aux bornes d'un conducteur ohmique fait circuler 0,030 A. Calculer sa résistance.",
        ["$R = \\dfrac{U}{I} = \\dfrac{6{,}0}{0{,}030} = 200$ Ω."], "$200$ Ω")
    add("probleme", "loi-ohm",
        "Une thermistance a une résistance de 10 kΩ à 25 °C. Sous une tension de 5,0 V, quelle intensité la traverse ?",
        ["$R = 10 \\times 10^{3}$ Ω.", "$I = \\dfrac{5{,}0}{1{,}0 \\times 10^{4}} = 5{,}0 \\times 10^{-4}$ A $= 0{,}50$ mA."], "$0{,}50$ mA")

    # -- lois des circuits et capteurs (5)
    add("intermediaire", "circuits-capteurs",
        "Deux dipôles sont en série sur un générateur de 9,0 V. La tension aux bornes du premier vaut 3,6 V. Calculer celle aux bornes du second.",
        ["En série, $U = U_1 + U_2$.", f"$U_2 = 9{{,}}0 - 3{{,}}6 = {nb(9.0 - 3.6, 1, True)}$ V."], f"${nb(9.0 - 3.6, 1, True)}$ V")
    add("intermediaire", "circuits-capteurs",
        "Deux branches sont en dérivation. Le courant principal vaut 0,50 A et celui d'une branche 0,18 A. Calculer celui de l'autre branche.",
        ["En dérivation, $I = I_1 + I_2$.", f"$I_2 = 0{{,}}50 - 0{{,}}18 = {nb(0.50 - 0.18, 2, True)}$ A."], f"${nb(0.50 - 0.18, 2, True)}$ A")
    add("application", "circuits-capteurs",
        "Quelle grandeur physique mesure une photorésistance ? Une thermistance ?", ["Photorésistance : l'éclairement. Thermistance : la température."], "l'éclairement ; la température")
    add("approfondissement", "circuits-capteurs",
        "La courbe d'étalonnage d'un capteur de température est une droite passant par l'origine : 0,40 V à 40 °C. Le capteur affiche 0,23 V. Quelle est la température ?",
        ["Proportionnalité : $0{,}010$ V par °C.", "$\\theta = \\dfrac{0{,}23}{0{,}010} = 23$ °C."], "$23$ °C")
    add("application", "circuits-capteurs",
        "À quoi sert un capteur ?", ["Il convertit une grandeur physique (température, éclairement…) en grandeur électrique."], "à convertir une grandeur physique en grandeur électrique")
    return _fin(E)


# =====================================================================
# 2de — MODÉLISATION DES TRANSFORMATIONS DE LA MATIÈRE
# =====================================================================
_DESINT = [  # (A, Z, type)
    (238, 92, "alpha"), (226, 88, "alpha"), (210, 84, "alpha"), (241, 95, "alpha"),
    (14, 6, "beta-"), (60, 27, "beta-"), (131, 53, "beta-"), (90, 38, "beta-"),
    (18, 9, "beta+"), (11, 6, "beta+"),
]


def gen_2de_transformations():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- type de transformation (8)
    ty = [
        ("l'eau qui bout dans une casserole", "physique", "les molécules $\\mathrm{H_2O}$ restent les mêmes, seul l'état change"),
        ("la combustion du méthane dans une gazinière", "chimique", "de nouvelles espèces apparaissent ; les éléments sont conservés"),
        ("la désintégration de l'uranium 238 en thorium 234", "nucléaire", "le noyau change, donc l'élément change"),
        ("la fusion de l'hydrogène au cœur du Soleil", "nucléaire", "des noyaux légers s'assemblent en un noyau plus lourd"),
        ("la formation de givre sur un pare-brise", "physique", "la vapeur d'eau passe à l'état solide, les molécules restent les mêmes"),
        ("la rouille d'une grille en fer", "chimique", "le fer et le dioxygène forment une espèce nouvelle"),
        ("la fission de l'uranium 235 dans une centrale", "nucléaire", "un noyau lourd se casse en noyaux plus légers"),
        ("la dissolution du sucre dans le café", "physique", "les molécules de sucre restent les mêmes"),
    ]
    for nom, r, why in ty:
        add("application", "type-transformation",
            f"Transformation physique, chimique ou nucléaire : {nom} ?", [f"Transformation {r} : {why}."], r)

    # -- changements d'état (6)
    ce = [("solide → liquide", "la fusion"), ("liquide → gaz", "la vaporisation"), ("gaz → liquide", "la liquéfaction"),
          ("liquide → solide", "la solidification"), ("solide → gaz", "la sublimation")]
    for ch, r in ce:
        add("application", "changements-etat", f"Nommer le changement d'état : {ch}.", ["C'est une transformation physique."], r)
    add("intermediaire", "changements-etat",
        "Comment évolue la température d'un corps pur pendant son changement d'état, sous pression constante ?",
        ["Elle reste constante pendant toute la durée du changement d'état (palier)."], "elle reste constante")

    # -- ajustement (10)
    eqs = [_EQ_4E[1], _EQ_4E[2], _EQ_4E[5], _EQ_4E[6], _EQ_4E[8], _EQ_4E[9],
           ([(4, "Fe"), (3, "O2")], [(2, "Fe2O3")], "formation de l'oxyde de fer III"),
           ([(1, "C6H12O6"), (6, "O2")], [(6, "CO2"), (6, "H2O")], "combustion du glucose (respiration)")]
    for g, d, nom in eqs:
        _verifie_equation(g, d)
        add("approfondissement" if len(g) + len(d) >= 4 else "intermediaire", "ajustement",
            f"Ajuster l'équation de la {nom} : $" + tex_equation(_brut(g), _brut(d)) + "$.",
            ["On ajuste uniquement les nombres stœchiométriques, devant les formules.",
             "On vérifie la conservation de chaque élément.", "$" + tex_equation(g, d) + "$"],
            "$" + tex_equation(g, d) + "$")
    add("intermediaire", "ajustement",
        "Ajuster l'équation $\\mathrm{Cu^{2+}} + \\mathrm{Fe} \\longrightarrow \\mathrm{Cu} + \\mathrm{Fe^{2+}}$. Vérifier la conservation de la charge.",
        ["Éléments : Cu 1 = 1 ; Fe 1 = 1.", "Charges : $+2$ à gauche, $+2$ à droite : l'équation est déjà ajustée."], "Déjà ajustée (charge $+2$ de chaque côté)")
    add("approfondissement", "ajustement",
        "Ajuster l'équation $\\mathrm{Al} + \\mathrm{H^+} \\longrightarrow \\mathrm{Al^{3+}} + \\mathrm{H_2}$ (conservation des éléments et de la charge).",
        ["Pour H : 2 $\\mathrm{Al}$ et 6 $\\mathrm{H^+}$ donnent 2 $\\mathrm{Al^{3+}}$ et 3 $\\mathrm{H_2}$.", "Charges : $+6$ de chaque côté."],
        "$2\\,\\mathrm{Al} + 6\\,\\mathrm{H^+} \\longrightarrow 2\\,\\mathrm{Al^{3+}} + 3\\,\\mathrm{H_2}$")

    # -- réactif limitant (8)
    rl = [  # (gauche [(coef, formule, n)], nom)
        ([(2, "H2", 3.0), (1, "O2", 1.0)], "2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}"),
        ([(1, "CH4", 1.0), (2, "O2", 3.0)], "\\mathrm{CH_4} + 2\\,\\mathrm{O_2} \\longrightarrow \\mathrm{CO_2} + 2\\,\\mathrm{H_2O}"),
        ([(1, "CH4", 2.0), (2, "O2", 3.0)], "\\mathrm{CH_4} + 2\\,\\mathrm{O_2} \\longrightarrow \\mathrm{CO_2} + 2\\,\\mathrm{H_2O}"),
        ([(1, "N2", 2.0), (3, "H2", 4.5)], "\\mathrm{N_2} + 3\\,\\mathrm{H_2} \\longrightarrow 2\\,\\mathrm{NH_3}"),
        ([(1, "C3H8", 0.50), (5, "O2", 2.0)], "\\mathrm{C_3H_8} + 5\\,\\mathrm{O_2} \\longrightarrow 3\\,\\mathrm{CO_2} + 4\\,\\mathrm{H_2O}"),
        ([(2, "H2", 4.0), (1, "O2", 2.0)], "2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}"),
    ]
    for reac, eq in rl:
        (a, fa, na), (b, fb, nb_) = reac
        ra, rb = na / a, nb_ / b
        texa, texb = tex_formule(fa), tex_formule(fb)
        cor = ["On compare $\\dfrac{n}{\\text{nombre stœchiométrique}}$ pour chaque réactif.",
               f"${texa}$ : $\\dfrac{{{nb(na, 2, True)}}}{{{a}}} = {nb(ra, 2, True)}$ ; ${texb}$ : $\\dfrac{{{nb(nb_, 2, True)}}}{{{b}}} = {nb(rb, 2, True)}$."]
        if abs(ra - rb) < 1e-12:
            cor.append("Les deux rapports sont égaux : le mélange est stœchiométrique, les deux réactifs sont entièrement consommés.")
            rep = "aucun : mélange stœchiométrique"
        else:
            lim = texa if ra < rb else texb
            cor.append(f"Le plus petit rapport désigne le réactif limitant : ${lim}$.")
            rep = f"${lim}$"
        add("approfondissement", "reactif-limitant",
            f"Pour la réaction ${eq}$, on mélange {t(na, 2, True)} mol de ${texa}$ et {t(nb_, 2, True)} mol de ${texb}$. Quel est le réactif limitant ?",
            cor, rep)
    add("probleme", "reactif-limitant",
        "On fait réagir 3,0 mol de $\\mathrm{H_2}$ avec 1,0 mol de $\\mathrm{O_2}$ ($2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}$). Quelle quantité d'eau se forme ? Quelle quantité de dihydrogène reste ?",
        ["$\\mathrm{O_2}$ est limitant ($1{,}0 < \\dfrac{3{,}0}{2}$) : 1,0 mol de $\\mathrm{O_2}$ consomme 2,0 mol de $\\mathrm{H_2}$.",
         "Il se forme $2 \\times 1{,}0 = 2{,}0$ mol d'eau et il reste $3{,}0 - 2{,}0 = 1{,}0$ mol de $\\mathrm{H_2}$."],
        "2,0 mol d'eau ; 1,0 mol de $\\mathrm{H_2}$ en excès")
    add("intermediaire", "reactif-limitant",
        "Vrai ou faux ? Le réactif introduit en plus grande quantité est toujours en excès.",
        ["Faux : il faut tenir compte des nombres stœchiométriques.", "Ex. : 2,0 mol de $\\mathrm{CH_4}$ et 3,0 mol de $\\mathrm{O_2}$ : $\\mathrm{O_2}$ est pourtant limitant."], "Faux")

    # -- équations nucléaires (10)
    for A, Z, typ in _DESINT:
        X = _SYM_Z[Z]
        if typ == "alpha":
            A2, Z2, part, nom = A - 4, Z - 2, "{}^{4}_{2}\\mathrm{He}", "α"
        elif typ == "beta-":
            A2, Z2, part, nom = A, Z + 1, "{}^{0}_{-1}\\mathrm{e}", "β⁻"
        else:
            A2, Z2, part, nom = A, Z - 1, "{}^{0}_{+1}\\mathrm{e}", "β⁺"
        Y = _SYM_Z[Z2]
        za = Z2 + (2 if typ == "alpha" else (-1 if typ == "beta-" else 1))
        aa = A2 + (4 if typ == "alpha" else 0)
        add("approfondissement" if typ != "alpha" else "intermediaire", "equation-nucleaire",
            f"Le noyau ${noyau(A, Z, X)}$ est radioactif {nom}. Écrire l'équation de sa désintégration et identifier le noyau fils (Z = {Z2} : {Y}).",
            ["Lois de Soddy : conservation du nombre de nucléons $A$ et de la charge $Z$.",
             f"$A$ : ${A} = {A2} + {A - A2}$ ; $Z$ : ${Z} = {Z2} + ({za - Z2})$.".replace("+ (-", "+ (-").replace("+ (1)", "+ 1").replace("+ (2)", "+ 2"),
             f"${noyau(A, Z, X)} \\longrightarrow {noyau(A2, Z2, Y)} + {part}$"],
            f"${noyau(A, Z, X)} \\longrightarrow {noyau(A2, Z2, Y)} + {part}$")
        assert aa == A and za == Z

    # -- fission, fusion, énergie (5)
    add("application", "fission-fusion",
        "Quelle est la différence entre fission et fusion nucléaires ?",
        ["Fission : un noyau lourd se casse en noyaux plus légers.", "Fusion : des noyaux légers s'assemblent en un noyau plus lourd."],
        "la fission casse un noyau lourd ; la fusion assemble des noyaux légers")
    add("application", "fission-fusion",
        "Quelle réaction nucléaire produit l'énergie du Soleil ? Et celle des centrales nucléaires actuelles ?",
        ["Soleil : fusion de noyaux d'hydrogène.", "Centrales : fission de noyaux d'uranium."], "fusion ; fission")
    add("intermediaire", "fission-fusion",
        "Compléter l'équation de fusion ${}^{2}_{1}\\mathrm{H} + {}^{3}_{1}\\mathrm{H} \\longrightarrow {}^{4}_{2}\\mathrm{He} + {}^{A}_{Z}\\mathrm{X}$ et identifier X.",
        ["$A$ : $2 + 3 = 4 + A$ donc $A = 1$.", "$Z$ : $1 + 1 = 2 + Z$ donc $Z = 0$ : c'est un neutron $^{1}_{0}\\mathrm{n}$."],
        "${}^{1}_{0}\\mathrm{n}$ (un neutron)")
    add("approfondissement", "fission-fusion",
        "Compléter l'équation de fission ${}^{1}_{0}\\mathrm{n} + {}^{235}_{92}\\mathrm{U} \\longrightarrow {}^{94}_{38}\\mathrm{Sr} + {}^{A}_{54}\\mathrm{Xe} + 2\\,{}^{1}_{0}\\mathrm{n}$.",
        [f"$A$ : $1 + 235 = 94 + A + 2$ donc $A = {1 + 235 - 94 - 2}$.", "$Z$ : $0 + 92 = 38 + 54 + 0$ : vérifié."],
        f"$A = {1 + 235 - 94 - 2}$")
    add("intermediaire", "fission-fusion",
        "Vrai ou faux ? Les énergies mises en jeu dans une transformation nucléaire sont du même ordre que celles d'une réaction chimique.",
        ["Faux : elles sont très supérieures (environ un million de fois plus par entité)."], "Faux")

    # -- conservation (3)
    add("application", "conservations",
        "Que conserve-t-on dans une transformation chimique ? Et dans une transformation nucléaire ?",
        ["Chimique : les éléments (atomes) et la charge.", "Nucléaire : le nombre de nucléons $A$ et la charge $Z$."],
        "chimique : éléments et charge ; nucléaire : $A$ et $Z$")
    add("intermediaire", "conservations",
        "Pour ajuster $\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow \\mathrm{H_2O}$, un élève écrit $\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow \\mathrm{H_2O_2}$. Pourquoi est-ce une faute grave ?",
        ["Modifier un indice change l'espèce chimique ($\\mathrm{H_2O_2}$ est le peroxyde d'hydrogène).", "On ajuste avec les nombres devant : $2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}$."],
        "Il a changé l'espèce chimique au lieu d'ajuster")
    add("approfondissement", "conservations",
        "Lors d'une transformation chimique, l'élément carbone peut-il devenir de l'azote ? Et lors d'une transformation nucléaire ?",
        ["Chimique : non, les éléments sont conservés.", "Nucléaire : oui, c'est possible (ex. : le carbone 14 devient azote 14 par radioactivité β⁻)."],
        "chimique : non ; nucléaire : oui")
    return _fin(E)


EXTRA = {
    ("cinquieme", "corps-purs-melanges"): gen_5e_corps_purs,
    ("cinquieme", "energie-electricite"): gen_5e_energie_electricite,
    ("cinquieme", "mouvement-vitesse"): gen_5e_mouvement,
    ("cinquieme", "transformation-chimique"): gen_5e_transformation,
    ("quatrieme", "interactions-forces"): gen_4e_interactions,
    ("quatrieme", "mouvement-vitesse"): gen_4e_mouvement,
    ("quatrieme", "organisation-matiere"): gen_4e_organisation,
    ("quatrieme", "puissance-energie"): gen_4e_puissance,
    ("quatrieme", "transformation-conservation-masse"): gen_4e_conservation,
    ("troisieme", "atomes-ions-ph"): gen_3e_atomes_ions,
    ("troisieme", "conversions-energie-signaux"): gen_3e_conversions,
    ("troisieme", "masse-volumique"): gen_3e_masse_volumique,
    ("troisieme", "poids-gravitation-forces"): gen_3e_poids,
    ("troisieme", "transformations-chimiques"): gen_3e_transformations,
    ("seconde", "description-matiere"): gen_2de_description,
    ("seconde", "modelisation-microscopique"): gen_2de_modelisation,
    ("seconde", "mouvement-interactions"): gen_2de_mouvement,
    ("seconde", "ondes-signaux"): gen_2de_ondes,
    ("seconde", "transformations-matiere"): gen_2de_transformations,
}
