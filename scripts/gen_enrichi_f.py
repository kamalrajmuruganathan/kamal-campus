# -*- coding: utf-8 -*-
"""Lot f — physique-chimie de 1re et de Terminale (spécialité, voie générale).

Générateurs enrichis : au moins 5 notions par chapitre, plusieurs niveaux de difficulté,
réponses calculées par le code, valeurs réalistes, chiffres significatifs cohérents.
Expose EXTRA = {(niveau, slug): fonction -> liste de 50 exercices}.
"""
import math
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction

# ---------------------------------------------------------------- outils numériques


def _dec(x):
    if isinstance(x, Decimal):
        return x
    if isinstance(x, Fraction):
        x = float(x)
    if isinstance(x, float):
        return Decimal(f"{x:.12g}")
    return Decimal(str(x))


def arr(x, sig=3):
    """Arrondi scolaire (demi vers le haut) à sig chiffres significatifs."""
    d = _dec(x)
    if d == 0:
        return Decimal(0)
    e = d.copy_abs().adjusted()
    r = d.quantize(Decimal(1).scaleb(e - sig + 1), rounding=ROUND_HALF_UP)
    if r.copy_abs().adjusted() > e:  # 9,996 -> 10,0
        r = d.quantize(Decimal(1).scaleb(e - sig + 2), rounding=ROUND_HALF_UP)
    return r


def _grp(ent):
    if len(ent) <= 4:
        return ent
    g = []
    while len(ent) > 3:
        g.insert(0, ent[-3:])
        ent = ent[:-3]
    g.insert(0, ent)
    return "\\,".join(g)


def _plain(d):
    s = format(d, "f")
    neg = s.startswith("-")
    s = s.lstrip("-")
    ent, _, dec = s.partition(".")
    out = _grp(ent) + ("{,}" + dec if dec else "")
    return ("-" if neg else "") + out


def sci(x, sig=3):
    """Écriture scientifique LaTeX : 3{,}20\\times 10^{-3}."""
    d = arr(x, sig)
    if d == 0:
        return "0"
    e = d.adjusted()
    m = d.scaleb(-e).quantize(Decimal(1).scaleb(-(sig - 1)))
    s = _plain(m)
    if e == 0:
        return s
    return s + "\\times 10^{" + str(e) + "}"


def num(x, sig=3):
    """Nombre LaTeX : décimal entre 0,01 et 10 000, scientifique sinon."""
    d = arr(x, sig)
    if d == 0:
        return "0"
    a = abs(d)
    if Decimal("0.01") <= a < Decimal(10) ** max(sig, 3):
        return _plain(d)
    return sci(x, sig)


def ex(x):
    """Valeur exacte (donnée d'énoncé), sans arrondi. Une chaîne garde ses zéros : "8.70" -> 8{,}70."""
    if isinstance(x, str):
        return _plain(Decimal(x))
    d = _dec(x)
    if d == d.to_integral_value():
        return _plain(d.quantize(Decimal(1)))
    return _plain(d.normalize())


def un(u):
    return "\\ \\mathrm{" + u + "}"


def val(x, u="", sig=3):
    return num(x, sig) + (un(u) if u else "")


def vex(x, u=""):
    return ex(x) + (un(u) if u else "")


def pct(x, sig=3):
    """x est une fraction (0,736) ; renvoie « 73,6\\ \\% »."""
    return num(x * 100, sig) + "\\ \\%"


OHM = "\\Omega"
MS = "m\\cdot s^{-1}"
MS2 = "m\\cdot s^{-2}"
KMH = "km\\cdot h^{-1}"
GMOL = "g\\cdot mol^{-1}"
GL = "g\\cdot L^{-1}"
VUN = "mol\\cdot L^{-1}\\cdot s^{-1}"
M3S = "m^3\\cdot s^{-1}"
CMOL = "C\\cdot mol^{-1}"
S2M3 = "s^2\\cdot m^{-3}"
WM2 = "W\\cdot m^{-2}"
KGM3 = "kg\\cdot m^{-3}"
SM = "S\\cdot m^{-1}"
CMI = "cm^{-1}"
MUM = "\\mu m"
MOLL = "mol\\cdot L^{-1}"
KJMOL = "kJ\\cdot mol^{-1}"
MJKG = "MJ\\cdot kg^{-1}"


def euros(x):
    return _plain(_dec(x).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP))


def fx(x, nd):
    """Donnée à nd décimales (zéros conservés)."""
    return ex(f"{x:.{nd}f}")


def par(s):
    """Parenthèses autour d'une écriture scientifique ou d'un négatif (avant un carré)."""
    return f"({s})" if ("\\times" in s or s.startswith("-")) else s


def deg(a):
    return ex(a) + "^{\\circ}"


def cosd(a):
    return math.cos(math.radians(a))


def sind(a):
    return math.sin(math.radians(a))


# ---------------------------------------------------------------- outils d'assemblage

_CTRL = set("\t\n\r\f\v\a\b")


def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}


def _fin(E):
    if len(E) != 50:
        raise ValueError(f"{len(E)} exercices au lieu de 50")
    vus = set()
    for t in E:
        if t[2] in vus:
            raise ValueError("énoncé en double : " + t[2][:80])
        vus.add(t[2])
        for s in [t[2], t[4], *t[3]]:
            if _CTRL & set(s):
                raise ValueError("caractère de contrôle (barre oblique oubliée ?) : " + repr(s[:80]))
    return [exo(i + 1, *t) for i, t in enumerate(E)]


class _Lot:
    def __init__(self):
        self.E = []

    def add(self, d, n, e, c, r):
        if isinstance(c, str):
            c = [c]
        self.E.append((d, n, e, c, r))

    def qa(self, d, n, items):
        for it in items:
            e, c, r = it
            self.add(d, n, e, c, r)

    def vf(self, d, n, items):
        """items : (affirmation, vrai?, justification)."""
        for aff, ok, just in items:
            self.add(d, n, f"Dire si l'affirmation suivante est vraie ou fausse, en justifiant : « {aff} »",
                     [just], "Vrai" if ok else "Faux")

    def fin(self):
        return _fin(self.E)


# =====================================================================
#  1re — CHIMIE ORGANIQUE
# =====================================================================

def _brute_alcane(n, alcool=False):
    c = "C" if n == 1 else f"C_{{{n}}}"
    h = f"H_{{{2 * n + 2}}}"
    return "\\mathrm{" + c + h + ("O" if alcool else "") + "}"


def _coef(k):
    return "" if k == 1 else f"{k}\\,"


def gen_1_chimie_organique():
    L = _Lot()
    # --- familles (7)
    fam = [
        ("CH_3-CH_2-CH_2-OH", "alcool", "groupe hydroxyle $-\\mathrm{OH}$"),
        ("CH_3-CH_2-CHO", "aldéhyde", "groupe carbonyle en bout de chaîne (le carbone du $\\mathrm{C=O}$ porte un atome d'hydrogène, $-\\mathrm{CHO}$)"),
        ("CH_3-CO-CH_2-CH_3", "cétone", "groupe carbonyle entre deux atomes de carbone ($-\\mathrm{CO}-$)"),
        ("CH_3-CH_2-COOH", "acide carboxylique", "groupe carboxyle $-\\mathrm{COOH}$"),
        ("CH_3-CHOH-CH_2-CH_3", "alcool", "groupe hydroxyle $-\\mathrm{OH}$ porté par le deuxième carbone"),
        ("HCHO", "aldéhyde", "groupe carbonyle dont le carbone porte des atomes d'hydrogène ($-\\mathrm{CHO}$)"),
        ("CH_3-CH_2-CO-CH_2-CH_3", "cétone", "groupe carbonyle porté par un carbone lié à deux autres carbones"),
    ]
    for f, fa, j in fam:
        L.add("application", "familles",
              f"Identifier la famille fonctionnelle de la molécule de formule semi-développée $\\mathrm{{{f}}}$.",
              [f"On repère le groupe caractéristique : {j}.", f"La molécule appartient donc à la famille des {fa}s."
               if fa != "acide carboxylique" else "La molécule appartient donc à la famille des acides carboxyliques."],
              fa.capitalize())
    # --- nomenclature (10)
    noms = [
        ("CH_3-CH_2-CH_2-OH", "propan-1-ol", "3 carbones → prop ; famille alcool → -ol ; le $-\\mathrm{OH}$ est sur le carbone 1 (numérotation qui lui donne le plus petit numéro)."),
        ("CH_3-CHOH-CH_3", "propan-2-ol", "3 carbones → prop ; alcool → -ol ; le $-\\mathrm{OH}$ est sur le carbone 2, quel que soit le sens."),
        ("CH_3-CH_2-CHO", "propanal", "3 carbones → prop ; aldéhyde → -al ; le groupe est toujours en bout de chaîne, on n'écrit pas de numéro."),
        ("CH_3-CH_2-CH_2-COOH", "acide butanoïque", "4 carbones → but ; acide carboxylique → acide …-oïque ; le carboxyle est en position 1, on ne l'écrit pas."),
        ("HO-CH_2-CH_2-CH_2-CH_3", "butan-1-ol", "4 carbones → but ; on numérote à partir du carbone qui porte $-\\mathrm{OH}$ : position 1 (et non 4)."),
        ("CH_3-CH_2-CO-CH_2-CH_3", "pentan-3-one", "5 carbones → pent ; cétone → -one ; le $\\mathrm{C=O}$ est sur le carbone 3 dans les deux sens."),
        ("CH_3-CH_2-CH_2-CHOH-CH_3", "pentan-2-ol", "5 carbones → pent ; en numérotant depuis la droite, le $-\\mathrm{OH}$ porte le numéro 2 (et non 4)."),
    ]
    for f, nom, j in noms:
        L.add("application" if "1-ol" in nom or "al" == nom[-2:] else "intermediaire", "nomenclature",
              f"Nommer la molécule de formule semi-développée $\\mathrm{{{f}}}$.", [j, f"Nom : {nom}."], nom.capitalize())
    inv = [
        ("du butanal", "CH_3-CH_2-CH_2-CHO", "but → 4 carbones ; -al → aldéhyde, donc $-\\mathrm{CHO}$ en bout de chaîne."),
        ("de l'hexan-3-one", "CH_3-CH_2-CO-CH_2-CH_2-CH_3", "hex → 6 carbones ; -one → cétone ; 3 → le $\\mathrm{C=O}$ est sur le troisième carbone."),
        ("de l'acide éthanoïque", "CH_3-COOH", "éth → 2 carbones ; acide …-oïque → groupe carboxyle $-\\mathrm{COOH}$ en bout de chaîne."),
    ]
    for nom, f, j in inv:
        L.add("intermediaire", "nomenclature", f"Écrire la formule semi-développée {nom}.", [j], f"$\\mathrm{{{f}}}$")
    # --- formules (4)
    L.qa("intermediaire", "formules", [
        ("Écrire la formule brute de l'éthanol $\\mathrm{CH_3-CH_2-OH}$ et celle du méthoxyméthane $\\mathrm{CH_3-O-CH_3}$. Conclure.",
         ["Éthanol : 2 C, 6 H, 1 O → $\\mathrm{C_2H_6O}$.", "Méthoxyméthane : 2 C, 6 H, 1 O → $\\mathrm{C_2H_6O}$.",
          "Même formule brute, mais enchaînements différents : ce sont deux molécules différentes (l'une est un liquide, l'autre un gaz)."],
         "Même formule brute $\\mathrm{C_2H_6O}$, molécules différentes"),
        ("Le propanal $\\mathrm{CH_3-CH_2-CHO}$ et la propanone $\\mathrm{CH_3-CO-CH_3}$ ont-ils la même formule brute ? Appartiennent-ils à la même famille ?",
         ["Les deux s'écrivent $\\mathrm{C_3H_6O}$.", "Le propanal est un aldéhyde (C=O en bout de chaîne), la propanone une cétone (C=O entre deux carbones)."],
         "Oui, $\\mathrm{C_3H_6O}$ ; non : aldéhyde et cétone"),
        ("Écrire la formule brute de l'acide propanoïque $\\mathrm{CH_3-CH_2-COOH}$.",
         ["On compte 3 atomes de carbone, 6 atomes d'hydrogène et 2 atomes d'oxygène."], "$\\mathrm{C_3H_6O_2}$"),
        ("Pourquoi la formule brute $\\mathrm{C_3H_8O}$ ne suffit-elle pas pour nommer une molécule ?",
         ["Elle correspond au moins au propan-1-ol $\\mathrm{CH_3-CH_2-CH_2-OH}$ et au propan-2-ol $\\mathrm{CH_3-CHOH-CH_3}$.",
          "Seule la formule semi-développée indique l'enchaînement des atomes et lève l'ambiguïté."],
         "Plusieurs molécules ont cette formule brute"),
    ])
    # --- spectroscopie IR (7)
    L.qa("intermediaire", "spectre-ir", [
        ("Le spectre IR d'une espèce présente une bande large vers $3\\,300\\ \\mathrm{cm^{-1}}$ et aucune bande entre $1\\,650$ et $1\\,750\\ \\mathrm{cm^{-1}}$. À quelle famille appartient-elle ?",
         ["Bande large vers $3\\,300\\ \\mathrm{cm^{-1}}$ : liaison $\\mathrm{O-H}$ d'un alcool.", "Pas de bande $\\mathrm{C=O}$ : ce n'est ni un aldéhyde, ni une cétone, ni un acide."],
         "Alcool"),
        ("Un spectre IR montre une bande fine et intense à $1\\,715\\ \\mathrm{cm^{-1}}$ et aucune bande large au-dessus de $3\\,000\\ \\mathrm{cm^{-1}}$. Que peut-on conclure ?",
         ["Bande fine et intense vers $1\\,700\\ \\mathrm{cm^{-1}}$ : liaison $\\mathrm{C=O}$.", "Pas de liaison $\\mathrm{O-H}$ : ce n'est pas un acide carboxylique.",
          "L'IR ne permet pas de distinguer un aldéhyde d'une cétone."], "Aldéhyde ou cétone"),
        ("Un spectre IR présente une bande intense à $1\\,710\\ \\mathrm{cm^{-1}}$ et une bande très large et étalée de $2\\,500$ à $3\\,200\\ \\mathrm{cm^{-1}}$. Identifier la famille.",
         ["$\\mathrm{C=O}$ vers $1\\,700\\ \\mathrm{cm^{-1}}$ et $\\mathrm{O-H}$ très large entre $2\\,500$ et $3\\,200\\ \\mathrm{cm^{-1}}$ : les deux signatures du groupe carboxyle."],
         "Acide carboxylique"),
        ("Un élève hésite entre le propanal et le propan-1-ol. Le spectre présente une bande fine et intense à $1\\,730\\ \\mathrm{cm^{-1}}$ et pas de bande large vers $3\\,300\\ \\mathrm{cm^{-1}}$. Trancher.",
         ["Présence d'une liaison $\\mathrm{C=O}$, absence de liaison $\\mathrm{O-H}$ d'alcool.", "Il s'agit donc du propanal."], "Propanal"),
        ("Peut-on distinguer la propanone du propanal par spectroscopie infrarouge ? Justifier.",
         ["Les deux molécules possèdent une liaison $\\mathrm{C=O}$ qui absorbe dans la même zone ($1\\,650$ à $1\\,750\\ \\mathrm{cm^{-1}}$).",
          "L'IR ne les distingue pas : il faut la formule semi-développée."], "Non"),
        ("On oxyde de l'éthanol en acide éthanoïque. Quelles modifications du spectre IR permettent de vérifier que la transformation a eu lieu ?",
         ["Apparition d'une bande fine et intense vers $1\\,700\\ \\mathrm{cm^{-1}}$ (liaison $\\mathrm{C=O}$).",
          "La bande $\\mathrm{O-H}$ large vers $3\\,300\\ \\mathrm{cm^{-1}}$ (alcool) est remplacée par une bande très large entre $2\\,500$ et $3\\,200\\ \\mathrm{cm^{-1}}$ (acide)."],
         "Apparition de la bande C=O et élargissement de la bande O–H"),
        ("Un spectre IR ne présente qu'une bande entre $2\\,800$ et $3\\,000\\ \\mathrm{cm^{-1}}$. Peut-il s'agir d'un alcool ? d'une cétone ?",
         ["Cette bande correspond aux liaisons $\\mathrm{C-H}$, présentes dans toutes les molécules organiques.",
          "Sans bande $\\mathrm{O-H}$ ni bande $\\mathrm{C=O}$, ce n'est ni un alcool, ni une cétone (c'est par exemple un alcane)."],
         "Ni l'un ni l'autre"),
    ])
    # --- synthèse : étapes (4) + rendement (6)
    L.qa("application", "synthese", [
        ("Dans un protocole, on lit : « chauffer le mélange à reflux pendant 30 minutes ». À quelle étape de la synthèse cela correspond-il ? Quel est l'intérêt du reflux ?",
         ["C'est l'étape de transformation des réactifs.", "Le chauffage accélère la réaction ; le réfrigérant condense les vapeurs, qui retombent dans le ballon : on ne perd pas de matière."],
         "Transformation"),
        ("Dans un protocole, on lit : « refroidir dans un bain d'eau glacée puis filtrer les cristaux sous vide ». À quelle étape cela correspond-il ?",
         ["On sépare le produit solide du mélange réactionnel : c'est l'isolement.", "La filtration est justifiée parce que le produit est solide (peu soluble à froid)."],
         "Isolement"),
        ("Dans un protocole, on lit : « recristalliser le solide obtenu dans le minimum d'eau chaude ». À quelle étape cela correspond-il ?",
         ["La recristallisation élimine les impuretés restantes : c'est la purification."], "Purification"),
        ("Dans un protocole, on lit : « réaliser une CCM et mesurer la température de fusion du produit ». À quelle étape cela correspond-il ?",
         ["On vérifie l'identité et la pureté du produit : c'est l'analyse."], "Analyse"),
    ])
    rend = [
        ("l'aspirine", 180, "d'acide salicylique", 138, 5.00, 4.80),
        ("l'aspirine", 180, "d'acide salicylique", 138, 3.00, 2.95),
        ("le paracétamol", 151, "de 4-aminophénol", 109, 3.27, 3.40),
        ("le paracétamol", 151, "de 4-aminophénol", 109, 2.18, 2.10),
        ("l'acide benzoïque", 122, "d'alcool benzylique", 108, 2.16, 1.85),
    ]
    for prod, Mp, reac, Mr, mr, mo in rend:
        nr = mr / Mr
        no = mo / Mp
        eta = no / nr
        p = prod.replace("l'", "").replace("le ", "")
        L.add("probleme" if eta < 0.72 else "intermediaire", "synthese",
              f"On synthétise {prod} ($M = {ex(Mp)}\\ \\mathrm{{g\\cdot mol^{{-1}}}}$) à partir de ${val(mr, 'g')}$ {reac} ($M = {ex(Mr)}\\ \\mathrm{{g\\cdot mol^{{-1}}}}$), réactif limitant ; une mole de réactif donne une mole de produit. On obtient ${val(mo, 'g')}$ de produit sec. Calculer le rendement.",
              [f"$n_{{\\text{{attendu}}}} = \\dfrac{{{num(mr)}}}{{{ex(Mr)}}} = {val(nr, 'mol')}$.",
               f"$n_{{\\text{{obtenu}}}} = \\dfrac{{{num(mo)}}}{{{ex(Mp)}}} = {val(no, 'mol')}$.",
               f"$\\eta = \\dfrac{{n_{{\\text{{obtenu}}}}}}{{n_{{\\text{{attendu}}}}}} = {num(eta)}$, soit ${pct(eta)}$."],
              f"$\\eta \\approx {pct(eta)}$")
    mr, mo = 2.00, 2.75
    nr, no = mr / 138, mo / 180
    L.add("approfondissement", "synthese",
          f"Un élève synthétise de l'aspirine ($M = 180\\ \\mathrm{{g\\cdot mol^{{-1}}}}$) à partir de ${val(mr, 'g')}$ d'acide salicylique ($M = 138\\ \\mathrm{{g\\cdot mol^{{-1}}}}$, réactif limitant, une mole donne une mole d'aspirine). Il pèse ${val(mo, 'g')}$ de produit juste après la filtration. Calculer le rendement et commenter.",
          [f"$n_{{\\text{{attendu}}}} = \\dfrac{{2{{,}}00}}{{138}} = {val(nr, 'mol')}$ ; $n_{{\\text{{obtenu}}}} = \\dfrac{{2{{,}}75}}{{180}} = {val(no, 'mol')}$.",
           f"$\\eta = {num(no / nr)}$, soit ${pct(no / nr)}$ : c'est supérieur à 100 %, ce qui est impossible.",
           "Le produit pesé juste après la filtration est encore humide : il faut le sécher avant de le peser."],
          "Plus de 100 % : produit encore humide, à sécher")
    # --- combustion (6)
    combs = [(1, False, "du méthane"), (3, False, "du propane"), (4, False, "du butane"), (1, True, "du méthanol"),
             (2, True, "de l'éthanol"), (8, False, "de l'octane")]
    for n, alc, nom in combs[:4] + combs[5:]:
        o2 = Fraction(3 * n, 2) if alc else Fraction(3 * n + 1, 2)
        k = 1 if o2.denominator == 1 else 2
        a, b, c, d = k, int(o2 * k), n * k, (n + 1) * k
        eq = f"{_coef(a)}{_brute_alcane(n, alc)} + {_coef(b)}\\mathrm{{O_2}} \\longrightarrow {_coef(c)}\\mathrm{{CO_2}} + {_coef(d)}\\mathrm{{H_2O}}"
        L.add("intermediaire", "combustion",
              f"Écrire l'équation de la combustion complète {nom}, de formule brute ${_brute_alcane(n, alc)}$.",
              ["Produits d'une combustion complète : dioxyde de carbone et eau.",
               f"On ajuste les carbones ({n} $\\mathrm{{CO_2}}$), puis les hydrogènes ({n + 1} $\\mathrm{{H_2O}}$), puis l'oxygène en dernier"
               + (" sans oublier l'atome d'oxygène déjà présent dans l'alcool." if alc else ".")
               + (" On multiplie tout par 2 pour avoir des nombres entiers." if k == 2 else ""),
               f"${eq}$"], f"${eq}$")
    m_but = 190
    n_but = m_but / 58.0
    L.add("probleme", "combustion",
          "Une cartouche de camping contient $190\\ \\mathrm{g}$ de butane $\\mathrm{C_4H_{10}}$ ($M = 58{,}0\\ \\mathrm{g\\cdot mol^{-1}}$). Calculer la masse de dioxyde de carbone ($M = 44{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) rejetée par sa combustion complète : $2\\,\\mathrm{C_4H_{10}} + 13\\,\\mathrm{O_2} \\longrightarrow 8\\,\\mathrm{CO_2} + 10\\,\\mathrm{H_2O}$.",
          [f"$n(\\mathrm{{C_4H_{{10}}}}) = \\dfrac{{190}}{{58{{,}}0}} = {val(n_but, 'mol')}$.",
           f"D'après l'équation, $n(\\mathrm{{CO_2}}) = 4 \\times n(\\mathrm{{C_4H_{{10}}}}) = {val(4 * n_but, 'mol')}$.",
           f"$m = n \\times M = {num(4 * n_but)} \\times 44{{,}}0 \\approx {val(4 * n_but * 44.0, 'g')}$ (calcul fait avec la valeur non arrondie de $n$)."],
          f"$m(\\mathrm{{CO_2}}) \\approx {val(4 * n_but * 44.0, 'g')}$")
    # --- énergie de liaison (6)
    EL = {"C-H": 413, "C-C": 348, "C-O": 358, "O-H": 463, "O=O": 498, "C=O": 799, "H-H": 436}
    data = "On donne les énergies de liaison (en $\\mathrm{kJ\\cdot mol^{-1}}$) : $\\mathrm{C-H}$ : 413 ; $\\mathrm{C-C}$ : 348 ; $\\mathrm{C-O}$ : 358 ; $\\mathrm{O-H}$ : 463 ; $\\mathrm{O=O}$ : 498 ; $\\mathrm{C=O}$ : 799."

    def bilan(n, alc):
        o2 = Fraction(3 * n, 2) if alc else Fraction(3 * n + 1, 2)
        romp = [("C-H", 2 * n + 1 if alc else 2 * n + 2), ("C-C", n - 1)]
        if alc:
            romp += [("C-O", 1), ("O-H", 1)]
        romp += [("O=O", o2)]
        form = [("C=O", 2 * n), ("O-H", 2 * n + 2)]
        return o2, [r for r in romp if r[1]], form

    def somme(lst):
        return sum(EL[b] * k for b, k in lst)

    def ecr(lst):
        return " + ".join(f"{ex(Fraction(k).numerator / Fraction(k).denominator)} \\times {EL[b]}" for b, k in lst)

    for n, alc, nom in [(1, False, "du méthane"), (3, False, "du propane"), (1, True, "du méthanol"), (2, True, "de l'éthanol")]:
        o2, romp, form = bilan(n, alc)
        sr, sf = somme(romp), somme(form)
        dE = float(sr - sf)
        eq = f"{_brute_alcane(n, alc)} + {ex(float(o2))}\\,\\mathrm{{O_2}} \\longrightarrow {_coef(n)}\\mathrm{{CO_2}} + {n + 1}\\,\\mathrm{{H_2O}}"
        L.add("approfondissement", "energie-liaison",
              f"Estimer l'énergie molaire de la réaction de combustion {nom} en phase gazeuse : ${eq}$. {data}",
              [f"Liaisons rompues : ${ecr(romp)} = {ex(float(sr))}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$.",
               f"Liaisons formées : ${ecr(form)} = {ex(float(sf))}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$.",
               f"$\\Delta_r E = {ex(float(sr))} - {ex(float(sf))} = {ex(dE)}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$ : négative, la réaction est exothermique."],
              f"$\\Delta_r E \\approx {ex(dE)}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$")
    dH2 = EL["H-H"] + 0.5 * EL["O=O"] - 2 * EL["O-H"]
    L.add("approfondissement", "energie-liaison",
          "Estimer l'énergie molaire de la réaction $\\mathrm{H_2} + 0{,}5\\,\\mathrm{O_2} \\longrightarrow \\mathrm{H_2O}$ en phase gazeuse. Données (en $\\mathrm{kJ\\cdot mol^{-1}}$) : $\\mathrm{H-H}$ : 436 ; $\\mathrm{O=O}$ : 498 ; $\\mathrm{O-H}$ : 463.",
          [f"Rompues : $436 + 0{{,}}5 \\times 498 = {ex(436 + 249)}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$.",
           f"Formées : $2 \\times 463 = 926\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$ (deux liaisons $\\mathrm{{O-H}}$ dans $\\mathrm{{H_2O}}$).",
           f"$\\Delta_r E = 685 - 926 = {ex(dH2)}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$ : réaction exothermique."],
          f"$\\Delta_r E \\approx {ex(dH2)}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$")
    o2, romp, form = bilan(1, False)
    dE = float(somme(romp) - somme(form))
    nm = 1000 / 16.0
    Q = nm * -dE
    L.add("probleme", "energie-liaison",
          f"L'énergie molaire de combustion du méthane est estimée à ${ex(dE)}\\ \\mathrm{{kJ\\cdot mol^{{-1}}}}$. Calculer l'énergie libérée par la combustion de $1{{,}}00\\ \\mathrm{{kg}}$ de méthane ($M = 16{{,}}0\\ \\mathrm{{g\\cdot mol^{{-1}}}}$), c'est-à-dire son pouvoir calorifique massique.",
          [f"$n = \\dfrac{{1\\,000}}{{16{{,}}0}} = {val(nm, 'mol')}$.",
           f"$Q = n \\times {ex(-dE)} = {val(Q, 'kJ')}$, soit environ ${val(Q / 1000, 'MJ')}$ par kilogramme."],
          f"$\\approx {val(Q / 1000, MJKG)}$")
    return L.fin()


# =====================================================================
#  1re — ÉNERGIE : PHÉNOMÈNES ÉLECTRIQUES
# =====================================================================

def gen_1_energie_electrique():
    L = _Lot()
    # --- puissance (8)
    for app, e, U, I in [("une bouilloire", "e", "230", "8.70"), ("un chargeur de téléphone", "", "5.0", "2.0"), ("une lampe à LED", "e", "230", "0.035"),
                         ("un sèche-cheveux", "", "230", "7.4"), ("le moteur d'une trottinette électrique", "", "36", "9.5")]:
        P = float(U) * float(I)
        ncs = min(len(x.replace(".", "").lstrip("0")) for x in (U, I))   # chiffres significatifs des données
        L.add("application", "puissance",
              f"Sous une tension de ${vex(U, 'V')}$, {app} est traversé{e} par un courant d'intensité ${vex(I, 'A')}$. Calculer la puissance électrique reçue.",
              [f"$P = U \\times I = {ex(U)} \\times {ex(I)} = {ex(round(P, 6))}\\ \\mathrm{{W}}$"
               + ("." if ex(round(P, 6)) == num(P, ncs) else f", soit ${sci(P, ncs) if P >= 10 ** ncs else num(P, ncs)}\\ \\mathrm{{W}}$ avec {ncs} chiffres significatifs (comme les données).")],
              f"$P \\approx {sci(P, ncs) if P >= 10 ** ncs else num(P, ncs)}\\ \\mathrm{{W}}$")
    for app, P, U, ncs in [("un four de 3,0 kW", 3000, 230, 2), ("un radiateur de 1 500 W", 1500, 230, 3), ("un ordinateur portable de 65 W", 65, 19.5, 2)]:
        I = P / U
        L.add("intermediaire", "puissance",
              f"Quelle est l'intensité du courant qui traverse {app} alimenté sous ${vex(U, 'V')}$ ?",
              [f"$I = \\dfrac{{P}}{{U}} = \\dfrac{{{ex(P)}}}{{{ex(U)}}} \\approx {val(I, 'A', ncs)}$."], f"$I \\approx {val(I, 'A', ncs)}$")
    # --- énergie (9)
    prix = 0.25
    for app, P, hs in [("un radiateur de 1 500 W", 1500, "3.0"), ("un four de 2 500 W", 2500, "0.75")]:
        h = float(hs)
        E = P * h * 3600
        kwh = P * h / 1000
        L.add("application", "energie",
              f"Calculer l'énergie consommée par {app} qui fonctionne pendant ${vex(hs, 'h')}$, en joules puis en kilowattheures. Quel est le coût, à ${ex(prix)}$ € le kWh ?",
              [f"$\\Delta t = {ex(hs)} \\times 3\\,600 = {val(h * 3600, 's')}$ ; $E = P \\Delta t = {ex(P)} \\times {num(h * 3600)} = {val(E, 'J')}$.",
               f"En kWh : $E = {ex(P / 1000)}\\ \\mathrm{{kW}} \\times {ex(hs)}\\ \\mathrm{{h}} = {val(kwh, 'kWh')}$.",
               f"Coût : ${num(kwh)} \\times 0{{,}}25 = {euros(kwh * prix)}$ €."],
              f"${val(E, 'J')}$, ${val(kwh, 'kWh')}$, ${euros(kwh * prix)}$ €")
    E = 2000 * 150
    L.add("application", "energie", "Une bouilloire de $2\\,000\\ \\mathrm{W}$ chauffe de l'eau pendant 2 min 30 s. Calculer l'énergie électrique reçue, en joules puis en kWh.",
          ["$\\Delta t = 2 \\times 60 + 30 = 150\\ \\mathrm{s}$.", f"$E = 2\\,000 \\times 150 = {val(E, 'J')}$.",
           f"$E = \\dfrac{{{num(E)}}}{{3{{,}}6\\times 10^{{6}}}} = {val(E / 3.6e6, 'kWh')}$."], f"${val(E, 'J')}$ soit ${val(E / 3.6e6, 'kWh')}$")
    kwh = 8.0 * 5.0 * 365 / 1000
    L.add("probleme", "energie", "Une lampe à LED de $8{,}0\\ \\mathrm{W}$ reste allumée 5,0 h par jour pendant un an (365 jours). Calculer l'énergie consommée en kWh et son coût à 0,25 € le kWh.",
          [f"Durée : $5{{,}}0 \\times 365 = {ex(5 * 365)}\\ \\mathrm{{h}}$.", f"$E = 8{{,}}0\\times 10^{{-3}}\\ \\mathrm{{kW}} \\times {ex(5 * 365)}\\ \\mathrm{{h}} = {val(kwh, 'kWh')}$.",
           f"Coût : ${num(kwh)} \\times 0{{,}}25 = {euros(kwh * 0.25)}$ €."], f"${val(kwh, 'kWh')}$, environ ${euros(kwh * 0.25)}$ €")
    L.add("application", "energie", "Convertir $5{,}4\\times 10^{7}\\ \\mathrm{J}$ en kilowattheures.",
          ["$1\\ \\mathrm{kWh} = 3{,}6\\times 10^{6}\\ \\mathrm{J}$.", f"$E = \\dfrac{{5{{,}}4\\times 10^{{7}}}}{{3{{,}}6\\times 10^{{6}}}} = {val(5.4e7 / 3.6e6, 'kWh', 2)}$."],
          f"${val(5.4e7 / 3.6e6, 'kWh', 2)}$")
    Q = 4.000 * 3600
    Eb = 3.85 * Q
    L.add("probleme", "energie", "Une batterie de téléphone porte les indications $3{,}85\\ \\mathrm{V}$ et $4\\,000\\ \\mathrm{mAh}$ (elle peut débiter $4{,}000\\ \\mathrm{A}$ pendant une heure). Estimer l'énergie qu'elle stocke, en joules puis en wattheures.",
          ["$E = U \\times I \\times \\Delta t$ avec $I \\times \\Delta t = 4{,}000\\ \\mathrm{A} \\times 3\\,600\\ \\mathrm{s} = 14\\,400\\ \\mathrm{C}$.",
           f"$E = 3{{,}}85 \\times 14\\,400 = {val(Eb, 'J')}$.", f"En wattheures : $\\dfrac{{{num(Eb)}}}{{3\\,600}} = {val(Eb / 3600, 'Wh')}$."],
          f"$E \\approx {val(Eb, 'J')}$ soit ${val(Eb / 3600, 'Wh')}$")
    t = 50 / 7.4
    L.add("probleme", "energie", "La batterie d'une voiture électrique stocke $50\\ \\mathrm{kWh}$. Elle est rechargée sur une borne qui fournit une puissance de $7{,}4\\ \\mathrm{kW}$. Estimer la durée de la recharge complète (pertes négligées).",
          ["$\\Delta t = \\dfrac{E}{P} = \\dfrac{50\\ \\mathrm{kWh}}{7{,}4\\ \\mathrm{kW}}$.", f"$\\Delta t = {val(t, 'h')}$, soit environ {int(t)} h {round((t - int(t)) * 60)} min."],
          f"$\\Delta t \\approx {val(t, 'h', 2)}$")
    t = 6.6 / 2.2
    L.add("intermediaire", "energie", "Un chauffe-eau de $2\\,200\\ \\mathrm{W}$ a consommé $6{,}6\\ \\mathrm{kWh}$. Pendant combien de temps a-t-il fonctionné ?",
          ["$\\Delta t = \\dfrac{E}{P} = \\dfrac{6{,}6\\ \\mathrm{kWh}}{2{,}2\\ \\mathrm{kW}}$.", f"$\\Delta t = {val(t, 'h', 2)}$."], f"$\\Delta t = {val(t, 'h', 2)}$")
    kwh = 1.0 * 20 * 365 / 1000
    L.add("intermediaire", "energie", "Un téléviseur en veille consomme $1{,}0\\ \\mathrm{W}$, 20 h par jour, toute l'année (365 jours). Calculer l'énergie consommée en kWh.",
          [f"Durée : $20 \\times 365 = 7\\,300\\ \\mathrm{{h}}$.", f"$E = 1{{,}}0\\times 10^{{-3}}\\ \\mathrm{{kW}} \\times 7\\,300\\ \\mathrm{{h}} = {val(kwh, 'kWh', 2)}$."],
          f"$E \\approx {val(kwh, 'kWh', 2)}$")
    # --- générateur réel (8)
    for nom, E0s, rs, Is in [("Une pile plate", "4.5", "1.5", "0.20"), ("Une pile AA", "1.5", "0.30", "0.50"),
                             ("Une batterie de voiture", "12.6", "0.020", "150"), ("Une batterie de voiture", "12.6", "0.020", "10")]:
        E0, r, I = float(E0s), float(rs), float(Is)
        U = float(Decimal(repr(round(E0 - r * I, 10))).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))   # même nombre de décimales que E
        ctx = " (démarrage du moteur)" if I == 150 else (" (phares allumés)" if I == 10 else "")
        L.add("application" if I < 10 else "intermediaire", "generateur-reel",
              f"{nom} a une force électromotrice $E = {vex(E0s, 'V')}$ et une résistance interne $r = {vex(rs, OHM)}$. Calculer la tension à ses bornes quand elle débite $I = {vex(Is, 'A')}${ctx}.",
              [f"$U = E - rI = {ex(E0s)} - {ex(rs)} \\times {ex(Is)} \\approx {vex(f'{U:.1f}', 'V')}$ (arrondi au dixième, comme $E$)."], f"$U \\approx {vex(f'{U:.1f}', 'V')}$")
    L.add("intermediaire", "generateur-reel", "Une pile de force électromotrice $E = 9{,}0\\ \\mathrm{V}$ délivre une tension $U = 8{,}4\\ \\mathrm{V}$ quand elle débite $I = 0{,}30\\ \\mathrm{A}$. Calculer sa résistance interne.",
          ["$U = E - rI$ donc $r = \\dfrac{E - U}{I}$.", f"$r = \\dfrac{{9{{,}}0 - 8{{,}}4}}{{0{{,}}30}} = {val((9.0 - 8.4) / 0.30, OHM, 2)}$."], f"$r = {val((9.0 - 8.4) / 0.30, OHM, 2)}$")
    L.add("intermediaire", "generateur-reel", "Un générateur de résistance interne $r = 0{,}50\\ \\Omega$ délivre $U = 5{,}7\\ \\mathrm{V}$ lorsqu'il débite $0{,}60\\ \\mathrm{A}$. Calculer sa force électromotrice.",
          ["$E = U + rI$.", f"$E = 5{{,}}7 + 0{{,}}50 \\times 0{{,}}60 = {val(5.7 + 0.3, 'V', 2)}$."], f"$E = {val(6.0, 'V', 2)}$")
    L.add("approfondissement", "generateur-reel", "On court-circuite une pile plate ($E = 4{,}5\\ \\mathrm{V}$, $r = 1{,}5\\ \\Omega$) : la tension à ses bornes devient nulle. Calculer l'intensité de court-circuit et dire où passe l'énergie.",
          ["$U = 0$ donc $E = rI_{cc}$.", "$I_{cc} = \\dfrac{4{,}5}{1{,}5} = 3{,}0\\ \\mathrm{A}$.", "Toute l'énergie fournie est dissipée par effet Joule dans la pile, qui chauffe."],
          "$I_{cc} = 3{,}0\\ \\mathrm{A}$")
    E0, r, I = 4.5, 1.5, 0.30
    L.add("approfondissement", "generateur-reel", "Une pile ($E = 4{,}5\\ \\mathrm{V}$, $r = 1{,}5\\ \\Omega$) débite $I = 0{,}30\\ \\mathrm{A}$. Établir le bilan de puissance : puissance totale $E\\,I$, puissance délivrée au circuit $U\\,I$, puissance dissipée $rI^2$.",
          [f"$EI = 4{{,}}5 \\times 0{{,}}30 = {val(E0 * I, 'W')}$.", f"$U = 4{{,}}5 - 1{{,}}5 \\times 0{{,}}30 = {val(E0 - r * I, 'V')}$ ; $UI = {val((E0 - r * I) * I, 'W', 4)}$.",
           f"$rI^2 = 1{{,}}5 \\times 0{{,}}30^2 = {val(r * I * I, 'W')}$ ; on vérifie $EI = UI + rI^2$."],
          f"${val(E0 * I, 'W')} = {val((E0 - r * I) * I, 'W', 4)} + {val(r * I * I, 'W')}$")
    # --- effet Joule (8)
    for ctx, e, R, I in [("Une résistance chauffante", "e", 26, 8.8), ("Un câble de rallonge", "", 0.15, 16)]:
        L.add("application", "effet-joule", f"{ctx} de résistance $R = {vex(R, OHM)}$ est parcouru{e} par un courant $I = {vex(I, 'A')}$. Calculer la puissance dissipée par effet Joule.",
              [f"$P_\\mathrm{{J}} = RI^2 = {ex(R)} \\times {ex(I)}^2 = {val(R * I * I, 'W')}$."], f"$P_\\mathrm{{J}} \\approx {val(R * I * I, 'W')}$")
    L.add("application", "effet-joule", "Un grille-pain de résistance $R = 53\\ \\Omega$ est branché sous $230\\ \\mathrm{V}$. Calculer la puissance dissipée.",
          [f"$P_\\mathrm{{J}} = \\dfrac{{U^2}}{{R}} = \\dfrac{{230^2}}{{53}} = {val(230 ** 2 / 53, 'W')}$."], f"$P_\\mathrm{{J}} \\approx {val(230 ** 2 / 53, 'W')}$")
    L.add("intermediaire", "effet-joule", "Un fil de résistance $0{,}20\\ \\Omega$ est parcouru par $5{,}0\\ \\mathrm{A}$, puis par $10\\ \\mathrm{A}$. Calculer la puissance dissipée dans les deux cas et comparer.",
          ["$P_1 = 0{,}20 \\times 5{,}0^2 = 5{,}0\\ \\mathrm{W}$ ; $P_2 = 0{,}20 \\times 10^2 = 20\\ \\mathrm{W}$.", "L'intensité double, les pertes sont multipliées par 4 : la dépendance est en $I^2$."],
          "$5{,}0\\ \\mathrm{W}$ puis $20\\ \\mathrm{W}$ : pertes × 4")
    E = 100 * 0.12 ** 2 * 600
    L.add("intermediaire", "effet-joule", "Un conducteur ohmique de $100\\ \\Omega$ est parcouru par $0{,}12\\ \\mathrm{A}$ pendant 10 min. Calculer l'énergie dissipée par effet Joule.",
          [f"$P_\\mathrm{{J}} = 100 \\times 0{{,}}12^2 = {val(100 * 0.0144, 'W')}$.", f"$E = P_\\mathrm{{J}} \\Delta t = {num(1.44)} \\times 600 = {val(E, 'J')}$."], f"$E \\approx {val(E, 'J')}$")
    I = math.sqrt(1000 / 52.9)
    L.add("intermediaire", "effet-joule", "Un radiateur de résistance $52{,}9\\ \\Omega$ dissipe $1\\,000\\ \\mathrm{W}$. Quelle intensité le traverse ?",
          ["$P_\\mathrm{J} = RI^2$ donc $I = \\sqrt{\\dfrac{P_\\mathrm{J}}{R}}$.", f"$I = \\sqrt{{\\dfrac{{1\\,000}}{{52{{,}}9}}}} = {val(I, 'A')}$."], f"$I \\approx {val(I, 'A')}$")
    P, R = 10e6, 5.0
    I1, I2 = P / 20e3, P / 400e3
    L.add("probleme", "effet-joule", "Une ligne de résistance $R = 5{,}0\\ \\Omega$ transporte une puissance de $10\\ \\mathrm{MW}$. Calculer les pertes par effet Joule si la ligne est sous $20\\ \\mathrm{kV}$, puis sous $400\\ \\mathrm{kV}$. Conclure.",
          [f"Sous 20 kV : $I = \\dfrac{{P}}{{U}} = \\dfrac{{10\\times 10^{{6}}}}{{20\\times 10^{{3}}}} = {val(I1, 'A')}$ ; $P_\\mathrm{{J}} = 5{{,}}0 \\times {ex(I1)}^2 = {val(R * I1 ** 2, 'W')}$.",
           f"Sous 400 kV : $I = {val(I2, 'A')}$ ; $P_\\mathrm{{J}} = 5{{,}}0 \\times {ex(I2)}^2 = {val(R * I2 ** 2, 'W')}$.",
           "À puissance égale, une tension 20 fois plus grande divise l'intensité par 20 et les pertes par 400 : d'où le transport à très haute tension."],
          f"${val(R * I1 ** 2, 'W')}$ contre ${val(R * I2 ** 2, 'W')}$")
    I1, I2 = 10e6 / 63e3, 10e6 / 225e3
    L.add("probleme", "effet-joule", "Une même puissance de $10\\ \\mathrm{MW}$ circule dans une ligne de $R = 5{,}0\\ \\Omega$ sous $63\\ \\mathrm{kV}$ ou sous $225\\ \\mathrm{kV}$. Par quel facteur les pertes Joule sont-elles divisées quand on passe à 225 kV ?",
          [f"$I_{{63}} = {val(I1, 'A')}$ et $I_{{225}} = {val(I2, 'A')}$.", f"$P_\\mathrm{{J}} = RI^2$ : rapport $\\left(\\dfrac{{225}}{{63}}\\right)^2 = {num((225 / 63) ** 2)}$."],
          f"Pertes divisées par environ ${num((225 / 63) ** 2, 2)}$")
    # --- rendement (9)
    for ctx, Pfs, Pus in [("Un moteur électrique reçoit $750\\ \\mathrm{W}$ et fournit une puissance mécanique de $600\\ \\mathrm{W}$", "750", "600"),
                          ("Une lampe à LED reçoit $8{,}0\\ \\mathrm{W}$ et émet $2{,}4\\ \\mathrm{W}$ sous forme de lumière", "8.0", "2.4"),
                          ("Une lampe à incandescence reçoit $60\\ \\mathrm{W}$ et émet $3{,}0\\ \\mathrm{W}$ sous forme de lumière", "60", "3.0"),
                          ("Un chargeur reçoit $12\\ \\mathrm{W}$ du secteur et fournit $10{,}2\\ \\mathrm{W}$ au téléphone", "12", "10.2")]:
        Pf, Pu = float(Pfs), float(Pus)
        eta = Pu / Pf
        L.add("application", "rendement", f"{ctx}. Calculer son rendement et la puissance dissipée.",
              [f"$\\eta = \\dfrac{{P_{{\\text{{utile}}}}}}{{P_{{\\text{{reçue}}}}}} = \\dfrac{{{ex(Pus)}}}{{{ex(Pfs)}}} = {num(eta, 2)}$, soit ${pct(eta, 2)}$.",
               f"Puissance dissipée (chaleur) : ${ex(Pfs)} - {ex(Pus)} = {val(Pf - Pu, 'W', 2)}$."],
              f"$\\eta = {pct(eta, 2)}$ ; ${val(Pf - Pu, 'W', 2)}$ dissipés")
    eta = 320 / (1000 * 1.6)
    L.add("probleme", "rendement", "Un panneau photovoltaïque de $1{,}6\\ \\mathrm{m^2}$ reçoit du Soleil $1\\,000\\ \\mathrm{W}$ par mètre carré et fournit une puissance électrique de $320\\ \\mathrm{W}$. Calculer son rendement.",
          ["Puissance lumineuse reçue : $1\\,000 \\times 1{,}6 = 1\\,600\\ \\mathrm{W}$.", f"$\\eta = \\dfrac{{320}}{{1\\,600}} = {num(eta, 2)}$, soit ${pct(eta, 2)}$."], f"$\\eta = {pct(eta, 2)}$")
    L.add("intermediaire", "rendement", "Un moteur de rendement $0{,}85$ doit fournir une puissance mécanique de $1{,}7\\ \\mathrm{kW}$. Quelle puissance électrique doit-il recevoir ?",
          ["$\\eta = \\dfrac{P_u}{P_r}$ donc $P_r = \\dfrac{P_u}{\\eta}$.", f"$P_r = \\dfrac{{1{{,}}7}}{{0{{,}}85}} = {val(1.7 / 0.85, 'kW', 2)}$."], f"$P_r = {val(2.0, 'kW', 2)}$")
    Ef = 2000 * 180
    L.add("probleme", "rendement", "Une bouilloire de $2\\,000\\ \\mathrm{W}$ fonctionne pendant 3 min ; l'eau reçoit $3{,}24\\times 10^{5}\\ \\mathrm{J}$. Calculer le rendement de la bouilloire.",
          [f"Énergie électrique reçue : $E = 2\\,000 \\times 180 = {val(Ef, 'J')}$.", f"$\\eta = \\dfrac{{3{{,}}24\\times 10^{{5}}}}{{{sci(Ef, 2)}}} = {num(3.24e5 / Ef, 2)}$, soit ${pct(3.24e5 / Ef, 2)}$."],
          f"$\\eta = {pct(3.24e5 / Ef, 2)}$")
    L.add("intermediaire", "rendement", "Un appareil reçoit $5{,}0\\ \\mathrm{kJ}$ d'énergie électrique ; son rendement vaut $0{,}75$. Calculer l'énergie utile et l'énergie dissipée.",
          ["$E_u = \\eta \\times E_f = 0{,}75 \\times 5{,}0 = 3{,}75\\ \\mathrm{kJ}$.", "Conservation de l'énergie : $E_d = E_f - E_u = 5{,}0 - 3{,}75 = 1{,}25\\ \\mathrm{kJ}$."],
          "$E_u = 3{,}75\\ \\mathrm{kJ}$ ; $E_d = 1{,}25\\ \\mathrm{kJ}$")
    L.add("approfondissement", "rendement", "Un élève trouve un rendement de $1{,}2$ pour un moteur électrique. Que faut-il en penser ?",
          ["Un rendement ne peut pas dépasser 1 : l'énergie utile est toujours inférieure à l'énergie reçue, une partie étant dissipée.",
           "Il y a une erreur : énergie utile et énergie reçue inversées, ou unités différentes (kJ et J, minutes et secondes)."],
          "Impossible : erreur de calcul")
    # --- cours (8)
    L.vf("application", "cours", [
        ("Le kilowattheure est une unité de puissance.", False, "Faux : c'est une unité d'énergie ($1\\ \\mathrm{kWh} = 3{,}6\\times 10^{6}\\ \\mathrm{J}$), malgré le « watt » dans son nom."),
        ("Pour un générateur, la tension et l'intensité sont fléchées dans le même sens.", True, "Vrai : c'est la convention générateur ; pour un récepteur, on les flèche en sens opposés."),
        ("Un générateur idéal a une résistance interne nulle.", True, "Vrai : avec $r = 0$, $U = E$ quelle que soit l'intensité débitée."),
        ("Plus un générateur réel débite de courant, plus la tension à ses bornes augmente.", False, "Faux : $U = E - rI$ diminue quand $I$ augmente."),
        ("L'effet Joule est toujours indésirable.", False, "Faux : il est utile dans un radiateur, un grille-pain ou une bouilloire ; il est parasite dans un câble ou un moteur."),
        ("Doubler l'intensité dans un conducteur ohmique double les pertes par effet Joule.", False, "Faux : $P_\\mathrm{J} = RI^2$, les pertes sont multipliées par 4."),
    ])
    L.qa("approfondissement", "cours", [
        ("Que devient l'énergie électrique reçue par un moteur qui n'est pas convertie en travail mécanique ?",
         ["L'énergie se conserve : $E_{\\text{reçue}} = E_{\\text{utile}} + E_{\\text{dissipée}}$.", "La part non utile est dissipée sous forme de chaleur (effet Joule dans les bobinages, frottements)."],
         "Elle est dissipée sous forme de chaleur"),
        ("Pourquoi faut-il convertir la durée en secondes dans $E = P\\,\\Delta t$ quand on veut une énergie en joules ?",
         ["Le joule est l'unité SI : $1\\ \\mathrm{J} = 1\\ \\mathrm{W} \\times 1\\ \\mathrm{s}$.", "Avec des heures et des kilowatts, on obtient directement des kilowattheures."],
         "Car $1\\ \\mathrm{J} = 1\\ \\mathrm{W\\cdot s}$"),
    ])
    return L.fin()


# =====================================================================
#  1re — ÉNERGIE : PHÉNOMÈNES MÉCANIQUES
# =====================================================================

G = 9.81
GTXT = " On prendra $g = 9{,}81\\ \\mathrm{N\\cdot kg^{-1}}$."


def gen_1_energie_mecanique():
    L = _Lot()
    # --- travail d'une force (8)
    for ctx, F, d, a in [("Une valise est tirée sur $25\\ \\mathrm{m}$ par une force de $40\\ \\mathrm{N}$ inclinée de $30^{\\circ}$ par rapport au sol.", 40, 25, 30),
                         ("Un enfant tire une luge sur $50\\ \\mathrm{m}$ à l'aide d'une corde ; la force exercée vaut $60\\ \\mathrm{N}$ et fait un angle de $20^{\\circ}$ avec le déplacement.", 60, 50, 20),
                         ("Un cheval tire une péniche le long d'un canal sur $200\\ \\mathrm{m}$ ; la force exercée par la corde vaut $800\\ \\mathrm{N}$ et fait un angle de $25^{\\circ}$ avec le déplacement.", 800, 200, 25),
                         ("Un client pousse un chariot sur $15\\ \\mathrm{m}$ avec une force horizontale de $50\\ \\mathrm{N}$, parallèle au déplacement.", 50, 15, 0)]:
        W = F * d * cosd(a)
        L.add("application", "travail", ctx + " Calculer le travail de cette force.",
              [f"$W = F \\times d \\times \\cos\\alpha = {F} \\times {d} \\times \\cos({deg(a)}) = {val(W, 'J')}$.", "Le travail est positif : il est moteur."],
              f"$W \\approx {val(W, 'J')}$")
    W = 200 * 5.0 * cosd(120)
    L.add("intermediaire", "travail", "Une force de $200\\ \\mathrm{N}$ fait un angle de $120^{\\circ}$ avec un déplacement de $5{,}0\\ \\mathrm{m}$. Calculer son travail et préciser s'il est moteur ou résistant.",
          [f"$W = 200 \\times 5{{,}}0 \\times \\cos(120^{{\\circ}}) = 200 \\times 5{{,}}0 \\times (-0{{,}}5) = {val(W, 'J')}$.", "$W < 0$ : le travail est résistant, la force freine le mouvement."],
          f"$W = {val(W, 'J')}$, résistant")
    W = -150 * 1200
    L.add("intermediaire", "travail", "Sur un trajet rectiligne de $1{,}2\\ \\mathrm{km}$, un cycliste subit une force de frottement de l'air constante de $15\\ \\mathrm{N}$, opposée au déplacement. Calculer le travail de cette force.".replace("15\\ ", "15\\ "),
          [f"L'angle entre la force et le déplacement vaut $180^{{\\circ}}$ : $\\cos(180^{{\\circ}}) = -1$.", f"$W = 15 \\times 1\\,200 \\times (-1) = {val(-15 * 1200, 'J')}$."],
          f"$W = {val(-15 * 1200, 'J')}$")
    L.add("approfondissement", "travail", "Un serveur porte un plateau de $2{,}0\\ \\mathrm{kg}$ horizontalement sur $8{,}0\\ \\mathrm{m}$, à hauteur constante. Quel est le travail du poids du plateau ?",
          ["Le poids est vertical et le déplacement horizontal : ils sont perpendiculaires, $\\cos(90^{\\circ}) = 0$.", "Le poids ne travaille pas."], "$W = 0\\ \\mathrm{J}$")
    L.add("approfondissement", "travail", "La boule d'un pendule simple décrit un arc de cercle. Pourquoi la tension du fil ne travaille-t-elle pas ?",
          ["À chaque instant, la tension du fil est dirigée vers le point d'attache, donc perpendiculaire à la trajectoire (et au déplacement).", "Une force perpendiculaire au déplacement a un travail nul."],
          "Elle est toujours perpendiculaire au déplacement")
    # --- travail du poids (7)
    for ctx, m, zA, zB in [("Un randonneur de $70\\ \\mathrm{kg}$ monte de $450\\ \\mathrm{m}$ en altitude.", 70, 0, 450),
                           ("Un skieur de $75\\ \\mathrm{kg}$ descend une piste et perd $300\\ \\mathrm{m}$ d'altitude.", 75, 300, 0),
                           ("Une pomme de $0{,}15\\ \\mathrm{kg}$ tombe d'une branche située à $2{,}5\\ \\mathrm{m}$ du sol jusqu'au sol.", 0.15, 2.5, 0),
                           ("Une cabine d'ascenseur chargée, de masse totale $600\\ \\mathrm{kg}$, monte de $12\\ \\mathrm{m}$.", 600, 0, 12),
                           ("Un cycliste et son vélo ($80\\ \\mathrm{kg}$ au total) descendent un col en perdant $900\\ \\mathrm{m}$ d'altitude.", 80, 900, 0)]:
        W = m * G * (zA - zB)
        L.add("application" if W > 0 else "intermediaire", "travail-poids", ctx + " Calculer le travail du poids." + GTXT,
              [f"$W(\\vec P) = mg(z_\\mathrm{{A}} - z_\\mathrm{{B}}) = {ex(m)} \\times 9{{,}}81 \\times ({ex(zA)} - {ex(zB)}) = {val(W, 'J')}$.",
               "Le travail est " + ("moteur (descente)." if W > 0 else "résistant (montée).")],
              f"$W \\approx {val(W, 'J')}$")
    W = -60 * G * 3.0
    L.add("approfondissement", "travail-poids", "Pour monter de $3{,}0\\ \\mathrm{m}$, un élève de $60\\ \\mathrm{kg}$ peut prendre l'escalier ou une longue rampe. Comparer le travail de son poids dans les deux cas." + GTXT,
          ["Le travail du poids ne dépend que de la différence d'altitude, pas du chemin suivi.", f"Dans les deux cas : $W = 60 \\times 9{{,}}81 \\times (0 - 3{{,}}0) = {val(W, 'J')}$."],
          f"Le même : $W \\approx {val(W, 'J')}$")
    L.add("approfondissement", "travail-poids", "Une balle lancée verticalement monte de $5{,}0\\ \\mathrm{m}$ puis retombe dans la main du lanceur, au point de départ. Quel est le travail du poids sur l'aller-retour ?",
          ["Le point de départ et le point d'arrivée sont à la même altitude : $z_\\mathrm{A} = z_\\mathrm{B}$.", "Travail résistant à la montée, moteur à la descente : ils se compensent."], "$W = 0\\ \\mathrm{J}$")
    # --- énergie cinétique (8)
    for ctx, m, v, kmh in [("une voiture de $1\\,200\\ \\mathrm{kg}$ roulant à $50\\ \\mathrm{km\\cdot h^{-1}}$", 1200, 50, True),
                           ("une balle de tennis de $58\\ \\mathrm{g}$ servie à $180\\ \\mathrm{km\\cdot h^{-1}}$", 0.058, 180, True),
                           ("un TGV de $400\\ \\mathrm{t}$ roulant à $320\\ \\mathrm{km\\cdot h^{-1}}$", 400e3, 320, True),
                           ("un coureur de $70\\ \\mathrm{kg}$ courant à $10\\ \\mathrm{m\\cdot s^{-1}}$", 70, 10, False),
                           ("un camion de $38\\ \\mathrm{t}$ roulant à $90\\ \\mathrm{km\\cdot h^{-1}}$", 38e3, 90, True)]:
        vs = v / 3.6 if kmh else v
        Ec = 0.5 * m * vs * vs
        cor = []
        if kmh:
            cor.append(f"Conversion : $v = \\dfrac{{{v}}}{{3{{,}}6}} = {val(vs, MS)}$.")
        if m < 1:
            cor.append(f"Masse en kilogrammes : $m = {ex(m)}\\ \\mathrm{{kg}}$.")
        mt = ex(m) if m < 1e4 else sci(m)
        cor.append(f"$E_c = \\dfrac{{1}}{{2}} m v^2 = \\dfrac{{1}}{{2}} \\times {mt} \\times {num(vs) if kmh else ex(v)}^2 = {val(Ec, 'J')}$.")
        L.add("application" if not kmh else "intermediaire", "energie-cinetique", f"Calculer l'énergie cinétique d'{ctx}.",
              cor, f"$E_c \\approx {val(Ec, 'J')}$")
    E1, E2 = 0.5 * 1200 * (50 / 3.6) ** 2, 0.5 * 1200 * (100 / 3.6) ** 2
    L.add("probleme", "energie-cinetique", "Une voiture de $1\\,200\\ \\mathrm{kg}$ roule à $50\\ \\mathrm{km\\cdot h^{-1}}$, puis à $100\\ \\mathrm{km\\cdot h^{-1}}$. Calculer son énergie cinétique dans les deux cas et expliquer pourquoi la distance de freinage augmente autant.",
          [f"À 50 km/h : $E_c = {val(E1, 'J')}$ ; à 100 km/h : $E_c = {val(E2, 'J')}$.", f"Rapport : ${num(E2 / E1, 2)}$ : doubler la vitesse quadruple l'énergie cinétique.",
           "Les freins doivent dissiper quatre fois plus d'énergie : la distance de freinage est environ quadruplée."],
          "Énergie cinétique multipliée par 4")
    v = math.sqrt(2 * 2.0e5 / 1000)
    L.add("intermediaire", "energie-cinetique", "Une voiture de $1\\,000\\ \\mathrm{kg}$ possède une énergie cinétique de $2{,}0\\times 10^{5}\\ \\mathrm{J}$. Calculer sa vitesse en $\\mathrm{m\\cdot s^{-1}}$ puis en $\\mathrm{km\\cdot h^{-1}}$.",
          ["$v = \\sqrt{\\dfrac{2E_c}{m}} = \\sqrt{\\dfrac{2 \\times 2{,}0\\times 10^{5}}{1\\,000}}$.", f"$v = {val(v, MS, 2)}$, soit ${num(v * 3.6, 2)}" + un("km\\cdot h^{-1}") + "$."],
          f"$v = {num(v, 2)}" + un("m\\cdot s^{-1}") + f"$ soit ${num(v * 3.6, 2)}" + un("km\\cdot h^{-1}") + "$")
    v = math.sqrt(2 * 86 / 0.43)
    L.add("intermediaire", "energie-cinetique", "Un ballon de football de $430\\ \\mathrm{g}$ est frappé et acquiert une énergie cinétique de $86\\ \\mathrm{J}$. Calculer sa vitesse.",
          ["$m = 0{,}430\\ \\mathrm{kg}$.", f"$v = \\sqrt{{\\dfrac{{2 \\times 86}}{{0{{,}}430}}}} = {num(v, 2)}" + un("m\\cdot s^{-1}") + "$."], f"$v = {num(v, 2)}" + un("m\\cdot s^{-1}") + "$")
    # --- énergie potentielle (6)
    for ctx, m, z in [("un livre de $1{,}2\\ \\mathrm{kg}$ posé sur une étagère à $1{,}8\\ \\mathrm{m}$ du sol (origine au sol)", 1.2, 1.8),
                      ("un grimpeur de $65\\ \\mathrm{kg}$ situé à $30\\ \\mathrm{m}$ au-dessus du pied de la falaise (origine au pied)", 65, 30)]:
        L.add("application", "energie-potentielle", f"Calculer l'énergie potentielle de pesanteur d'{ctx}." + GTXT,
              [f"$E_{{pp}} = mgz = {ex(m)} \\times 9{{,}}81 \\times {ex(z)} = {val(m * G * z, 'J')}$."], f"$E_{{pp}} \\approx {val(m * G * z, 'J')}$")
    d = 1000 * G * 120
    L.add("intermediaire", "energie-potentielle", "Dans un barrage, $1{,}0\\ \\mathrm{m^3}$ d'eau ($1{,}0\\times 10^{3}\\ \\mathrm{kg}$) descend de $120\\ \\mathrm{m}$ jusqu'aux turbines. Calculer la diminution de son énergie potentielle de pesanteur." + GTXT,
          [f"$\\Delta E_{{pp}} = mg\\Delta z = 1{{,}}0\\times 10^{{3}} \\times 9{{,}}81 \\times (-120) = {val(-d, 'J')}$.", "Cette énergie est convertie en énergie cinétique puis en énergie électrique."],
          f"Diminution de ${val(d, 'J')}$")
    d = 85 * G * (600 - 1450)
    L.add("intermediaire", "energie-potentielle", "Un parapentiste de $85\\ \\mathrm{kg}$ (équipement compris) décolle à $1\\,450\\ \\mathrm{m}$ d'altitude et atterrit à $600\\ \\mathrm{m}$. Calculer la variation de son énergie potentielle de pesanteur." + GTXT,
          [f"$\\Delta E_{{pp}} = mg(z_{{\\text{{fin}}}} - z_{{\\text{{début}}}}) = 85 \\times 9{{,}}81 \\times (600 - 1\\,450) = {val(d, 'J')}$."],
          f"$\\Delta E_{{pp}} \\approx {val(d, 'J')}$")
    L.add("approfondissement", "energie-potentielle", "Une balle de $0{,}50\\ \\mathrm{kg}$ est posée sur une table de $0{,}80\\ \\mathrm{m}$ de haut. Calculer son énergie potentielle de pesanteur si l'origine est prise au sol, puis sur la table. Commenter." + GTXT,
          [f"Origine au sol : $E_{{pp}} = 0{{,}}50 \\times 9{{,}}81 \\times 0{{,}}80 = {val(0.5 * G * 0.8, 'J')}$.", "Origine sur la table : $z = 0$, donc $E_{pp} = 0$.",
           "La valeur dépend de l'origine choisie ; seules les variations de $E_{pp}$ ont un sens physique."],
          f"${val(0.5 * G * 0.8, 'J')}$ ou $0$ selon l'origine")
    z = 500 / (10 * G)
    L.add("intermediaire", "energie-potentielle", "Un sac de ciment de $10\\ \\mathrm{kg}$ hissé sur un échafaudage possède une énergie potentielle de pesanteur de $500\\ \\mathrm{J}$ (origine au sol). À quelle hauteur se trouve-t-il ?" + GTXT,
          [f"$z = \\dfrac{{E_{{pp}}}}{{mg}} = \\dfrac{{500}}{{10 \\times 9{{,}}81}} = {val(z, 'm')}$."], f"$z \\approx {val(z, 'm')}$")
    # --- conservation (9)
    for ctx, h in [("Une bille est lâchée sans vitesse initiale d'une hauteur de $1{,}0\\ \\mathrm{m}$", "1.0"),
                   ("Un plongeur se laisse tomber sans vitesse initiale d'un plongeoir de $10\\ \\mathrm{m}$", "10"),
                   ("Un skateur part sans vitesse du haut d'une rampe ; il descend de $3{,}0\\ \\mathrm{m}$", "3.0"),
                   ("La boule d'un pendule est lâchée sans vitesse $0{,}40\\ \\mathrm{m}$ au-dessus de son point le plus bas", "0.40"),
                   ("Une pomme se détache d'une branche située à $2{,}5\\ \\mathrm{m}$ du sol", "2.5")]:
        v = math.sqrt(2 * G * float(h))
        L.add("intermediaire", "conservation", ctx + ". En négligeant les frottements, calculer sa vitesse " + ("en arrivant au sol." if "pomme" in ctx else "au point le plus bas.") + GTXT,
              ["Sans frottements, l'énergie mécanique se conserve : $mgh = \\dfrac{1}{2}mv^2$ (la masse se simplifie).",
               f"$v = \\sqrt{{2gh}} = \\sqrt{{2 \\times 9{{,}}81 \\times {ex(h)}}} = {num(v)}" + un("m\\cdot s^{-1}") + "$."],
              f"$v \\approx {num(v)}" + un("m\\cdot s^{-1}") + "$")
    h = 8.0 ** 2 / (2 * G)
    L.add("intermediaire", "conservation", "Une balle est lancée verticalement vers le haut à $8{,}0\\ \\mathrm{m\\cdot s^{-1}}$. En négligeant les frottements, de quelle hauteur monte-t-elle ?" + GTXT,
          ["Conservation de l'énergie mécanique : $\\dfrac{1}{2}mv^2 = mgh$.", f"$h = \\dfrac{{v^2}}{{2g}} = \\dfrac{{8{{,}}0^2}}{{2 \\times 9{{,}}81}} = {val(h, 'm')}$."], f"$h \\approx {val(h, 'm')}$")
    v = math.sqrt(5.0 ** 2 + 2 * G * 20)
    L.add("approfondissement", "conservation", "Un skieur passe en A à $5{,}0\\ \\mathrm{m\\cdot s^{-1}}$, puis descend de $20\\ \\mathrm{m}$ jusqu'au point B. Les frottements sont négligés. Calculer sa vitesse en B." + GTXT,
          ["$E_m(\\mathrm{A}) = E_m(\\mathrm{B})$ : $\\dfrac{1}{2}mv_\\mathrm{A}^2 + mgh = \\dfrac{1}{2}mv_\\mathrm{B}^2$.",
           f"$v_\\mathrm{{B}} = \\sqrt{{v_\\mathrm{{A}}^2 + 2gh}} = \\sqrt{{5{{,}}0^2 + 2 \\times 9{{,}}81 \\times 20}} = {num(v)}" + un("m\\cdot s^{-1}") + "$."],
          f"$v_\\mathrm{{B}} \\approx {num(v)}" + un("m\\cdot s^{-1}") + "$")
    v = math.sqrt(2.0 ** 2 + 2 * G * 40)
    L.add("probleme", "conservation", "Un wagon de montagnes russes passe au sommet d'une bosse, à $45\\ \\mathrm{m}$ du sol, à $2{,}0\\ \\mathrm{m\\cdot s^{-1}}$. En négligeant les frottements, calculer sa vitesse au point bas situé à $5{,}0\\ \\mathrm{m}$ du sol, en $\\mathrm{km\\cdot h^{-1}}$." + GTXT,
          ["Dénivelé : $45 - 5{,}0 = 40\\ \\mathrm{m}$.", f"$v = \\sqrt{{2{{,}}0^2 + 2 \\times 9{{,}}81 \\times 40}} = {num(v)}" + un("m\\cdot s^{-1}") + "$.",
           f"Soit ${num(v * 3.6)}" + un("km\\cdot h^{-1}") + "$."], f"$v \\approx {num(v * 3.6)}" + un("km\\cdot h^{-1}") + "$")
    v = math.sqrt(12 ** 2 + 2 * G * 1.5)
    L.add("probleme", "conservation", "Une balle est lancée vers le haut à $12\\ \\mathrm{m\\cdot s^{-1}}$ depuis une hauteur de $1{,}5\\ \\mathrm{m}$. Les frottements sont négligés. Avec quelle vitesse touche-t-elle le sol ?" + GTXT,
          ["L'énergie mécanique au départ est égale à celle au sol : $\\dfrac{1}{2}mv_0^2 + mgh = \\dfrac{1}{2}mv^2$.",
           f"$v = \\sqrt{{12^2 + 2 \\times 9{{,}}81 \\times 1{{,}}5}} = {num(v)}" + un("m\\cdot s^{-1}") + "$ (la direction du lancer n'intervient pas)."],
          f"$v \\approx {num(v)}" + un("m\\cdot s^{-1}") + "$")
    # --- théorème de l'énergie cinétique (7)
    for vk in (90, 130):
        v = vk / 3.6
        d = 0.5 * 1200 * v * v / 7500
        L.add("probleme", "theoreme-ec", f"Une voiture de $1\\,200\\ \\mathrm{{kg}}$ roule à ${vk}" + un("km\\cdot h^{-1}") + "$. Le conducteur freine ; la force de freinage, supposée constante, vaut $7\\,500\\ \\mathrm{N}$. Calculer la distance de freinage avec le théorème de l'énergie cinétique.",
              [f"$v = \\dfrac{{{vk}}}{{3{{,}}6}} = {num(v)}" + un("m\\cdot s^{-1}") + "$.", "$\\Delta E_c = W(\\vec f)$ : $0 - \\dfrac{1}{2}mv^2 = -f\\,d$ (poids et réaction du sol ne travaillent pas).",
               f"$d = \\dfrac{{mv^2}}{{2f}} = \\dfrac{{1\\,200 \\times {num(v)}^2}}{{2 \\times 7\\,500}} = {val(d, 'm')}$."],
              f"$d \\approx {val(d, 'm')}$")
    Ec = 70 * G * 50 - 60 * 200
    v = math.sqrt(2 * Ec / 70)
    L.add("approfondissement", "theoreme-ec", "Un skieur de $70\\ \\mathrm{kg}$ part sans vitesse et descend une piste de $200\\ \\mathrm{m}$ de long avec un dénivelé de $50\\ \\mathrm{m}$. Les frottements équivalent à une force constante de $60\\ \\mathrm{N}$ opposée au déplacement. Calculer sa vitesse en bas." + GTXT,
          [f"$W(\\vec P) = mgh = 70 \\times 9{{,}}81 \\times 50 = {val(70 * G * 50, 'J')}$ ; $W(\\vec f) = -60 \\times 200 = -1{{,}}20\\times 10^{{4}}\\ \\mathrm{{J}}$.",
           f"$\\Delta E_c = W(\\vec P) + W(\\vec f) = {val(Ec, 'J')}$ (la réaction normale ne travaille pas).",
           f"$v = \\sqrt{{\\dfrac{{2E_c}}{{m}}}} = {num(v)}" + un("m\\cdot s^{-1}") + "$."],
          f"$v \\approx {num(v)}" + un("m\\cdot s^{-1}") + "$")
    f = 0.5 * 0.17 * 12 ** 2 / 36
    L.add("approfondissement", "theoreme-ec", "Un palet de hockey de $170\\ \\mathrm{g}$ glisse sur la glace à $12\\ \\mathrm{m\\cdot s^{-1}}$ et s'arrête après $36\\ \\mathrm{m}$. Calculer la force de frottement, supposée constante.",
          ["$\\Delta E_c = W(\\vec f)$ : $0 - \\dfrac{1}{2}mv^2 = -f\\,d$.", f"$f = \\dfrac{{mv^2}}{{2d}} = \\dfrac{{0{{,}}170 \\times 12^2}}{{2 \\times 36}} = {val(f, 'N')}$."],
          f"$f \\approx {val(f, 'N')}$")
    Ed = 40 * G * 8.0 - 0.5 * 40 * 9.0 ** 2
    L.add("probleme", "theoreme-ec", "Un enfant et sa luge ($40\\ \\mathrm{kg}$) partent sans vitesse en haut d'une pente de $8{,}0\\ \\mathrm{m}$ de dénivelé et arrivent en bas à $9{,}0\\ \\mathrm{m\\cdot s^{-1}}$. Quelle énergie a été dissipée par les frottements ?" + GTXT,
          [f"Énergie mécanique initiale : $mgh = 40 \\times 9{{,}}81 \\times 8{{,}}0 = {val(40 * G * 8, 'J')}$.",
           f"Énergie mécanique finale : $\\dfrac{{1}}{{2}}mv^2 = \\dfrac{{1}}{{2}} \\times 40 \\times 9{{,}}0^2 = {val(0.5 * 40 * 81, 'J')}$.",
           f"Énergie dissipée : ${val(Ed, 'J')}$ (perte d'énergie mécanique)."],
          f"$\\approx {val(Ed, 'J')}$")
    W = 0.5 * 500 * (12 ** 2 - 3.0 ** 2)
    L.add("intermediaire", "theoreme-ec", "Un wagonnet de $500\\ \\mathrm{kg}$ passe de $3{,}0\\ \\mathrm{m\\cdot s^{-1}}$ à $12\\ \\mathrm{m\\cdot s^{-1}}$. Quelle est la somme des travaux des forces qui s'exercent sur lui ?",
          ["Théorème de l'énergie cinétique : $\\sum W = \\Delta E_c = \\dfrac{1}{2}m(v_2^2 - v_1^2)$.", f"$\\sum W = \\dfrac{{1}}{{2}} \\times 500 \\times (12^2 - 3{{,}}0^2) = {val(W, 'J')}$."],
          f"$\\sum W \\approx {val(W, 'J')}$")
    F = 0.5 * 75 * 10 ** 2 / 30
    L.add("intermediaire", "theoreme-ec", "Un sprinteur de $75\\ \\mathrm{kg}$ part arrêté et atteint $10\\ \\mathrm{m\\cdot s^{-1}}$ après $30\\ \\mathrm{m}$. Calculer la force horizontale moyenne qui l'a propulsé (frottements négligés).",
          [f"$\\Delta E_c = \\dfrac{{1}}{{2}} \\times 75 \\times 10^2 = {val(3750, 'J')}$.", f"$F \\times d = \\Delta E_c$ donc $F = \\dfrac{{3\\,750}}{{30}} = {val(F, 'N')}$."],
          f"$F = {val(F, 'N')}$")
    # --- cours (5)
    L.vf("application", "cours", [
        ("Si la vitesse d'un véhicule double, son énergie cinétique double.", False, "Faux : $E_c = \\dfrac{1}{2}mv^2$ dépend du carré de la vitesse, elle est multipliée par 4."),
        ("En chute libre sans frottements, un objet lourd arrive au sol plus vite qu'un objet léger lâché de la même hauteur.", False, "Faux : $v = \\sqrt{2gh}$, la masse se simplifie."),
        ("En présence de frottements, l'énergie mécanique d'un système diminue.", True, "Vrai : $\\Delta E_m = W(\\vec f) < 0$ ; l'énergie perdue est dissipée sous forme de chaleur."),
        ("Le travail du poids lors d'une descente est négatif.", False, "Faux : $W = mg(z_\\mathrm{A} - z_\\mathrm{B}) > 0$ quand $z_\\mathrm{A} > z_\\mathrm{B}$ : le poids est moteur à la descente."),
    ])
    L.add("approfondissement", "cours", "Un énoncé donne la hauteur de départ d'un objet et demande sa vitesse d'arrivée, sans frottements et sans parler de durée. Quelle méthode choisir ?",
          ["Il n'est question ni de temps ni d'accélération : l'approche énergétique est la plus rapide.", "On écrit la conservation de l'énergie mécanique entre le départ et l'arrivée."],
          "La conservation de l'énergie mécanique")
    return L.fin()


# =====================================================================
#  1re — MOUVEMENT ET INTERACTIONS
# =====================================================================

def gen_1_mouvement_interactions():
    L = _Lot()
    FORM = "$v_i \\approx \\dfrac{\\mathrm{M}_{i-1}\\mathrm{M}_{i+1}}{2\\tau}$"
    # --- vecteur vitesse (8)
    for ctx, tau_ms, d_cm, ech in [
            ("Sur la chronophotographie d'un palet sur une table à coussin d'air", 40, "12.0", None),
            ("Sur l'enregistrement d'une balle de golf qui roule", 40, "30.4", None),
            ("Sur la chronophotographie d'une bille qui tombe", 20, "9.6", None),
            ("Sur la chronophotographie d'un ballon de basket", 50, "45", None),
            ("Sur la vidéo d'un skateur", 40, "2.4", 20),
            ("Sur la vidéo d'un cycliste", 200, "3.8", 50)]:
        tau = tau_ms / 1000
        dreal = float(d_cm) * (ech or 1) / 100
        v = dreal / (2 * tau)
        if ech:
            e = f"{ctx}, l'intervalle entre deux images vaut $\\tau = {tau_ms}\\ \\mathrm{{ms}}$ et l'échelle est 1 cm pour {ech} cm. On mesure $\\mathrm{{M}}_3\\mathrm{{M}}_5 = {ex(d_cm)}\\ \\mathrm{{cm}}$ sur l'écran. Estimer la valeur de la vitesse au point $\\mathrm{{M}}_4$."
            c = [f"Distance réelle : ${ex(d_cm)} \\times {ech} = {ex(float(d_cm) * ech)}\\ \\mathrm{{cm}} = {ex(dreal)}\\ \\mathrm{{m}}$.",
                 FORM + f" $= \\dfrac{{{ex(dreal)}}}{{2 \\times {ex(tau)}}} = {val(v, MS, 2)}$."]
            d = "intermediaire"
        else:
            e = f"{ctx}, l'intervalle entre deux positions vaut $\\tau = {tau_ms}\\ \\mathrm{{ms}}$ et l'on mesure $\\mathrm{{M}}_3\\mathrm{{M}}_5 = {ex(d_cm)}\\ \\mathrm{{cm}}$ (distances réelles). Estimer la valeur de la vitesse au point $\\mathrm{{M}}_4$."
            c = ["On encadre le point $\\mathrm{M}_4$ par $\\mathrm{M}_3$ et $\\mathrm{M}_5$, séparés de $2\\tau$.",
                 FORM + f" $= \\dfrac{{{ex(dreal)}}}{{2 \\times {ex(tau)}}} = {val(v, MS, 2 if len(d_cm.replace('.', '')) < 3 else 3)}$."]
            d = "application"
        L.add(d, "vecteur-vitesse", e, c, f"$v_4 \\approx {val(v, MS, 2 if (ech or len(d_cm.replace('.', '')) < 3) else 3)}$")
    L.qa("approfondissement", "vecteur-vitesse", [
        ("Pourquoi utilise-t-on les points $\\mathrm{M}_{i-1}$ et $\\mathrm{M}_{i+1}$, plutôt que $\\mathrm{M}_i$ et $\\mathrm{M}_{i+1}$, pour estimer la vitesse au point $\\mathrm{M}_i$ ?",
         ["En encadrant le point étudié, on obtient une estimation bien plus proche de la vitesse instantanée en $\\mathrm{M}_i$.",
          "La durée correspondante est alors $2\\tau$."], "Pour encadrer le point étudié"),
        ("Comment représenter le vecteur vitesse $\\vec{v_i}$ d'un point en mouvement curviligne ?",
         ["Il est tangent à la trajectoire au point $\\mathrm{M}_i$.", "Il est orienté dans le sens du mouvement et sa longueur est proportionnelle à $v_i$ (échelle choisie)."],
         "Tangent à la trajectoire, dans le sens du mouvement"),
    ])
    # --- variation du vecteur vitesse (8)
    L.add("application", "variation-vitesse", "Une voiture roule en ligne droite ; sa vitesse passe de $13{,}9\\ \\mathrm{m\\cdot s^{-1}}$ à $11{,}1\\ \\mathrm{m\\cdot s^{-1}}$ entre deux positions voisines. Calculer $\\Delta v$ et en déduire le sens de la somme des forces.",
          [f"$\\Delta v = 11{{,}}1 - 13{{,}}9 = {num(11.1 - 13.9, 2)}" + un(MS) + "$.", "$\\Delta\\vec v$ est opposé au mouvement, donc $\\sum\\vec F$ aussi : la voiture freine."],
          "$\\Delta v = -2{,}8\\ \\mathrm{m\\cdot s^{-1}}$ ; $\\sum\\vec F$ opposée au mouvement")
    L.add("application", "variation-vitesse", "Un cycliste roule en ligne droite ; sa vitesse passe de $5{,}0\\ \\mathrm{m\\cdot s^{-1}}$ à $5{,}6\\ \\mathrm{m\\cdot s^{-1}}$. Quel est le sens de la somme des forces qui s'exercent sur lui ?",
          ["$\\Delta v = 5{,}6 - 5{,}0 = +0{,}6\\ \\mathrm{m\\cdot s^{-1}}$ : $\\Delta\\vec v$ est dans le sens du mouvement.", "$\\sum\\vec F$ a la même direction et le même sens que $\\Delta\\vec v$."],
          "Dans le sens du mouvement")
    L.add("intermediaire", "variation-vitesse", "Une balle lancée verticalement vers le haut passe de $6{,}0\\ \\mathrm{m\\cdot s^{-1}}$ à $5{,}6\\ \\mathrm{m\\cdot s^{-1}}$ (vers le haut) entre deux images. Quels sont la direction et le sens de $\\Delta\\vec v$, puis de $\\sum\\vec F$ ?",
          ["La vitesse vers le haut diminue : $\\Delta\\vec v$ est vertical, dirigé vers le bas, de valeur $0{,}4\\ \\mathrm{m\\cdot s^{-1}}$.", "$\\sum\\vec F$ est verticale vers le bas : c'est le poids (frottements négligés)."],
          "Verticaux, vers le bas")
    dv = math.hypot(0, 0.40)
    L.add("intermediaire", "variation-vitesse", "Une bille lancée horizontalement a, en $\\mathrm{M}_4$, une vitesse horizontale de $3{,}0\\ \\mathrm{m\\cdot s^{-1}}$ ; en $\\mathrm{M}_5$, sa vitesse a pour composantes $3{,}0\\ \\mathrm{m\\cdot s^{-1}}$ (horizontale) et $0{,}40\\ \\mathrm{m\\cdot s^{-1}}$ (verticale, vers le bas). Caractériser $\\Delta\\vec v$.",
          ["$\\Delta\\vec v = \\vec{v_5} - \\vec{v_4}$ : la composante horizontale ne change pas, seule apparaît une composante verticale.",
           f"$\\Delta\\vec v$ est vertical, vers le bas, de valeur ${val(dv, MS, 2)}$ : la somme des forces (le poids) est verticale vers le bas."],
          "Vertical, vers le bas, $0{,}40\\ \\mathrm{m\\cdot s^{-1}}$")
    for ms_, dvs, dts, ctx in [("0.50", "0.39", "0.040", "Une balle de $0{,}50\\ \\mathrm{kg}$ en chute voit sa vitesse augmenter de $0{,}39\\ \\mathrm{m\\cdot s^{-1}}$ en $0{,}040\\ \\mathrm{s}$ (vers le bas)."),
                           ("1000", "2.0", "0.50", "Une voiture de $1\\,000\\ \\mathrm{kg}$ passe de $20\\ \\mathrm{m\\cdot s^{-1}}$ à $18\\ \\mathrm{m\\cdot s^{-1}}$ en $0{,}50\\ \\mathrm{s}$ en ligne droite.")]:
        m, dv, dt = float(ms_), float(dvs), float(dts)
        F = m * dv / dt
        extra = f" On compare au poids : $P = mg = 0{{,}}50 \\times 9{{,}}81 = {val(0.5 * G, 'N')}$ : c'est bien la seule force notable." if m < 1 else " Elle est opposée au mouvement : ce sont les forces de freinage."
        L.add("approfondissement", "variation-vitesse", ctx + " À l'aide de la relation approchée $m\\,\\dfrac{\\Delta \\vec v}{\\Delta t} \\approx \\sum \\vec F$, estimer la valeur de la somme des forces.",
              [f"$\\sum F \\approx m\\,\\dfrac{{\\Delta v}}{{\\Delta t}} = {ex(ms_)} \\times \\dfrac{{{ex(dvs)}}}{{{ex(dts)}}} = {val(F, 'N', 2)}$." + extra],
              f"$\\sum F \\approx {val(F, 'N', 2)}$")
    dv = 0.50 * 0.10 / 0.20
    L.add("approfondissement", "variation-vitesse", "Un palet de $0{,}20\\ \\mathrm{kg}$ est soumis à une somme des forces constante de $0{,}50\\ \\mathrm{N}$, dans le sens du mouvement, pendant $0{,}10\\ \\mathrm{s}$. Avec $m\\,\\dfrac{\\Delta v}{\\Delta t} \\approx \\sum F$, estimer l'augmentation de sa vitesse.",
          [f"$\\Delta v \\approx \\dfrac{{\\sum F \\times \\Delta t}}{{m}} = \\dfrac{{0{{,}}50 \\times 0{{,}}10}}{{0{{,}}20}} = {val(dv, MS, 2)}$."], f"$\\Delta v \\approx {val(dv, MS, 2)}$")
    L.add("intermediaire", "variation-vitesse", "Sur la chronophotographie d'un palet, les vecteurs vitesse successifs sont identiques (même direction, même sens, même longueur). Que vaut $\\Delta\\vec v$ ? Que dire des forces ?",
          ["$\\Delta\\vec v = \\vec 0$ : le mouvement est rectiligne uniforme.", "D'après le principe d'inertie, les forces qui s'exercent sur le palet se compensent : $\\sum\\vec F = \\vec 0$."],
          "$\\Delta\\vec v = \\vec 0$ : forces compensées")
    # --- principe fondamental (9)
    L.qa("intermediaire", "principe-fondamental", [
        ("Une voiture roule en ligne droite à vitesse constante sur une route horizontale. Que peut-on dire de la somme des forces qui s'exercent sur elle ?",
         ["Le vecteur vitesse est constant : $\\Delta\\vec v = \\vec 0$.", "Donc $\\sum\\vec F = \\vec 0$ : les forces se compensent (la force motrice compense les frottements)."], "$\\sum\\vec F = \\vec 0$"),
        ("Un palet glisse sur la glace en ligne droite et ralentit. Quel est le sens de la somme des forces ?",
         ["La vitesse diminue : $\\Delta\\vec v$ est opposé au mouvement.", "$\\sum\\vec F$ a le même sens que $\\Delta\\vec v$ : opposée au mouvement (frottements)."], "Opposée au mouvement"),
        ("Une pierre lancée verticalement vers le haut monte encore. Pendant la montée, dans quel sens est dirigée la somme des forces (frottements négligés) ?",
         ["Seul le poids agit : $\\sum\\vec F$ est verticale vers le bas.", "C'est pourquoi la pierre ralentit : la somme des forces indique le sens de la variation de vitesse, pas celui de la vitesse."],
         "Vers le bas"),
        ("Un ascenseur démarre vers le haut : sa vitesse augmente. Comparer la tension du câble et le poids de la cabine.",
         ["$\\Delta\\vec v$ est vertical vers le haut, donc $\\sum\\vec F$ aussi.", "La tension (vers le haut) est donc supérieure au poids (vers le bas)."], "Tension supérieure au poids"),
        ("Un ascenseur qui monte ralentit avant de s'arrêter à l'étage. Comparer la tension du câble et le poids de la cabine.",
         ["La vitesse vers le haut diminue : $\\Delta\\vec v$ est vers le bas.", "$\\sum\\vec F$ est vers le bas : la tension est inférieure au poids."], "Tension inférieure au poids"),
        ("Un livre est posé sur une table. Que vaut la somme des forces qui s'exercent sur lui ?",
         ["Le livre reste immobile : $\\Delta\\vec v = \\vec 0$.", "Son poids est compensé par la réaction de la table : $\\sum\\vec F = \\vec 0$."], "$\\sum\\vec F = \\vec 0$"),
        ("Une balle est lancée horizontalement. Quelle est, à chaque instant, la direction de la variation de son vecteur vitesse (frottements négligés) ?",
         ["La seule force est le poids, vertical vers le bas.", "$\\Delta\\vec v$ est donc vertical, vers le bas, même si la vitesse est en partie horizontale."], "Verticale, vers le bas"),
        ("Un cycliste roule en ligne droite et accélère. La somme des forces est-elle nulle ? Préciser son sens.",
         ["La vitesse augmente : $\\Delta\\vec v \\neq \\vec 0$, dans le sens du mouvement.", "$\\sum\\vec F$ est non nulle, dirigée dans le sens du mouvement."], "Non nulle, dans le sens du mouvement"),
        ("Pendant un saut en parachute, la vitesse du parachutiste devient constante (mouvement rectiligne uniforme vertical). Comparer son poids et la force de frottement de l'air.",
         ["Mouvement rectiligne uniforme : $\\Delta\\vec v = \\vec 0$, donc $\\sum\\vec F = \\vec 0$.", "La force de frottement de l'air (vers le haut) compense exactement le poids."], "Ils sont égaux en valeur"),
    ])
    # --- bilan des forces (8)
    for ctx, m, quoi in [("Une lampe de $1{,}2\\ \\mathrm{kg}$ est suspendue au plafond par un fil, immobile.", 1.2, "la tension du fil"),
                         ("Un parachutiste de $80\\ \\mathrm{kg}$ (équipement compris) descend verticalement à vitesse constante.", 80, "la force de frottement de l'air"),
                         ("Un livre de $0{,}80\\ \\mathrm{kg}$ est posé sur une table horizontale.", "0.80", "la réaction de la table"),
                         ("Un bateau de $1{,}5$ tonne flotte, immobile, sur un lac.", 1500, "la poussée exercée par l'eau")]:
        P = float(m) * G
        L.add("application", "bilan-forces", ctx + f" Faire le bilan des forces et calculer la valeur de {quoi}." + GTXT,
              [f"Deux forces : le poids $\\vec P$ (vertical, vers le bas) et {quoi} (verticale, vers le haut).",
               f"Le système est immobile ou en mouvement rectiligne uniforme : d'après le principe d'inertie, les forces se compensent, donc la valeur cherchée vaut $P = mg = {ex(m)} \\times 9{{,}}81 = {val(P, 'N')}$."],
              f"${val(P, 'N')}$")
    L.add("intermediaire", "bilan-forces", "Un objet est soumis à deux forces perpendiculaires de $30\\ \\mathrm{N}$ et de $40\\ \\mathrm{N}$. Calculer la valeur de leur somme. Le vecteur vitesse peut-il rester constant ?",
          ["$\\left\\lVert\\sum\\vec F\\right\\rVert = \\sqrt{30^2 + 40^2} = 50\\ \\mathrm{N}$.", "La somme n'est pas nulle : le vecteur vitesse varie."], "$50\\ \\mathrm{N}$ ; non")
    F = 6200 - 600 * G
    L.add("probleme", "bilan-forces", "Une montgolfière de masse totale $600\\ \\mathrm{kg}$ monte verticalement à vitesse constante. La poussée de l'air vaut $6\\,200\\ \\mathrm{N}$. Calculer la force de frottement de l'air." + GTXT,
          [f"Forces : poids $P = 600 \\times 9{{,}}81 = {val(600 * G, 'N')}$ (vers le bas), poussée (vers le haut), frottements (opposés au mouvement, donc vers le bas).",
           f"Vitesse constante : $\\text{{poussée}} = P + f$, d'où $f = 6\\,200 - {num(600 * G, 4)} = {val(F, 'N')}$."],
          f"$f \\approx {val(F, 'N')}$")
    L.qa("intermediaire", "bilan-forces", [
        ("Faire le bilan des forces qui s'exercent sur une balle de tennis pendant son vol, en négligeant l'action de l'air.",
         ["Une seule force : le poids, vertical, dirigé vers le bas.", "Il n'existe pas de « force du lancer » : la raquette n'agit plus une fois la balle partie."], "Le poids seul"),
        ("Un skieur est tiré par la perche d'un téléski et monte en ligne droite à vitesse constante. Faire le bilan des forces et conclure.",
         ["Forces : poids, réaction de la piste, force exercée par la perche, frottements.", "Mouvement rectiligne uniforme : ces forces se compensent, leur somme est nulle."], "Les forces se compensent"),
    ])
    # --- mouvement circulaire et chute libre (9)
    for dt in ("0.50", "1.0", "0.20"):
        dv = G * float(dt)
        L.add("intermediaire", "circulaire-chute", f"Un objet est en chute libre. De combien sa vitesse augmente-t-elle en ${vex(dt, 's')}$ ? On utilisera $m\\,\\dfrac{{\\Delta v}}{{\\Delta t}} \\approx \\sum F = mg$." + GTXT,
              ["La seule force est le poids : $m\\,\\dfrac{\\Delta v}{\\Delta t} = mg$, la masse se simplifie.", f"$\\Delta v = g\\,\\Delta t = 9{{,}}81 \\times {ex(dt)} = {val(dv, MS)}$."],
              f"$\\Delta v \\approx {val(dv, MS)}$")
    L.qa("approfondissement", "circulaire-chute", [
        ("Un satellite décrit une orbite circulaire autour de la Terre à vitesse de valeur constante. Est-il soumis à une somme des forces nulle ?",
         ["Non : la direction du vecteur vitesse change en permanence, donc $\\Delta\\vec v \\neq \\vec 0$.", "La force de gravitation, dirigée vers le centre de la Terre, joue le rôle de force centripète."],
         "Non : force dirigée vers le centre"),
        ("Dans un mouvement circulaire uniforme, vers où est dirigé le vecteur $\\Delta\\vec v$ ?",
         ["La valeur de la vitesse ne change pas, seule sa direction tourne.", "$\\Delta\\vec v$ est dirigé vers le centre du cercle, comme la somme des forces."], "Vers le centre du cercle"),
        ("Une voiture prend un virage circulaire à vitesse constante (en valeur). Quelle force permet ce virage ?",
         ["Il faut une force dirigée vers le centre du virage.", "Ce sont les forces de frottement exercées par la route sur les pneus (sur une route verglacée, la voiture file tout droit)."],
         "Les frottements de la route, vers le centre"),
        ("Dans un tube où l'on a fait le vide, on lâche en même temps une plume et une bille. Laquelle arrive en bas la première ?",
         ["Sans air, chacune n'est soumise qu'à son poids : $\\vec P = m\\vec g$.", "La variation de vitesse ne dépend pas de la masse : elles tombent ensemble."], "Elles arrivent ensemble"),
        ("Qu'appelle-t-on chute libre ?", ["Un corps est en chute libre lorsqu'il n'est soumis qu'à son poids (action de l'air négligée)."], "Mouvement sous l'action du seul poids"),
        ("La Lune « tombe-t-elle » sur la Terre ? Expliquer.",
         ["Elle est attirée vers la Terre : sa vitesse change sans cesse de direction, vers le centre de son orbite.", "Mais sa vitesse est assez grande pour qu'elle ne s'en rapproche pas : elle « tombe » en permanence autour de la Terre."],
         "Oui, elle tombe en permanence autour de la Terre"),
    ])
    # --- cours (8)
    L.vf("application", "cours", [
        ("La somme des forces qui s'exercent sur un système a toujours la direction de son vecteur vitesse.", False, "Faux : elle a la direction et le sens de la variation du vecteur vitesse $\\Delta\\vec v$, pas de la vitesse."),
        ("Si les forces qui s'exercent sur un système se compensent, il est forcément immobile.", False, "Faux : il peut aussi être en mouvement rectiligne uniforme (principe d'inertie)."),
        ("Un objet en mouvement circulaire uniforme est soumis à des forces qui se compensent.", False, "Faux : la direction de la vitesse change, donc la somme des forces n'est pas nulle (elle est dirigée vers le centre)."),
        ("Le vecteur vitesse est tangent à la trajectoire.", True, "Vrai : il est tangent à la trajectoire et orienté dans le sens du mouvement."),
        ("Une balle lancée en l'air continue de monter parce qu'une « force du lancer » la pousse.", False, "Faux : cette force n'existe pas ; seul le poids agit, et il fait diminuer la vitesse de la balle."),
        ("En chute libre, deux objets de masses différentes ont la même variation de vitesse au même instant.", True, "Vrai : $\\vec P = m\\vec g$ et la masse se simplifie."),
        ("Le principe d'inertie et ses conséquences ne sont valables que dans un référentiel galiléen.", True, "Vrai : par exemple le référentiel terrestre pour des mouvements de courte durée."),
    ])
    L.add("application", "cours", "Donner, dans l'ordre, les étapes de la méthode pour analyser un mouvement.",
          ["1. Définir le système ; 2. préciser le référentiel ; 3. faire le bilan des forces ; 4. voir si elles se compensent ; 5. en déduire l'évolution du vecteur vitesse."],
          "Système, référentiel, bilan des forces, compensation, évolution de $\\vec v$")
    return L.fin()


# =====================================================================
#  1re — ONDES ET SIGNAUX
# =====================================================================

def _fr_frac(f):
    f = Fraction(f)
    if f.denominator == 1:
        return str(f.numerator)
    return ex(float(f)) if (f.denominator in (2, 4, 5, 8, 10, 20, 25, 40, 50)) else num(float(f))


def gen_1_ondes_signaux():
    L = _Lot()
    # --- retard (8)
    t = 120 / 6.0
    L.add("application", "retard", "Lors d'un séisme, les ondes P se propagent à $6{,}0\\ \\mathrm{km\\cdot s^{-1}}$. Avec quel retard arrivent-elles à une station située à $120\\ \\mathrm{km}$ de l'épicentre ?",
          [f"$\\tau = \\dfrac{{d}}{{v}} = \\dfrac{{120}}{{6{{,}}0}} = {val(t, 's', 2)}$."], f"$\\tau = {val(t, 's', 2)}$")
    tP, tS = 120 / 6.0, 120 / 3.5
    L.add("probleme", "retard", "Les ondes P ($6{,}0\\ \\mathrm{km\\cdot s^{-1}}$) et S ($3{,}5\\ \\mathrm{km\\cdot s^{-1}}$) d'un séisme parcourent $120\\ \\mathrm{km}$. Calculer le décalage entre leurs arrivées.",
          [f"$\\tau_P = \\dfrac{{120}}{{6{{,}}0}} = {val(tP, 's', 2)}$ ; $\\tau_S = \\dfrac{{120}}{{3{{,}}5}} = {val(tS, 's')}$.", f"Décalage : ${val(tS - tP, 's')}$ ; c'est ce décalage qui permet d'estimer la distance de la station à l'épicentre."],
          f"$\\approx {val(tS - tP, 's')}$")
    d = 340 * 3.0
    L.add("application", "retard", "On entend le tonnerre $3{,}0\\ \\mathrm{s}$ après avoir vu l'éclair. Le son se propage à $340\\ \\mathrm{m\\cdot s^{-1}}$ ; la lumière arrive quasi instantanément. À quelle distance est tombée la foudre ?",
          [f"$d = v \\times \\tau = 340 \\times 3{{,}}0 = {val(d, 'm', 2)}$, soit environ $1\\ \\mathrm{{km}}$."], f"$d \\approx {val(d, 'm', 2)}$")
    L.add("application", "retard", "Une perturbation se propage le long d'une corde à $4{,}0\\ \\mathrm{m\\cdot s^{-1}}$. Avec quel retard un point situé à $1{,}2\\ \\mathrm{m}$ de la source reproduit-il le mouvement de la source ?",
          [f"$\\tau = \\dfrac{{1{{,}}2}}{{4{{,}}0}} = {val(0.30, 's', 2)}$."], "$\\tau = 0{,}30\\ \\mathrm{s}$")
    t = 1.0e6 / 200
    L.add("probleme", "retard", "Un tsunami se propage en plein océan à environ $200\\ \\mathrm{m\\cdot s^{-1}}$. Combien de temps met-il pour parcourir $1\\,000\\ \\mathrm{km}$ ?",
          [f"$\\tau = \\dfrac{{d}}{{v}} = \\dfrac{{1{{,}}0\\times 10^{{6}}}}{{200}} = {val(t, 's', 2)}$.", f"Soit environ ${num(t / 3600, 2)}\\ \\mathrm{{h}}$ : on a le temps d'alerter les côtes."],
          f"$\\approx {val(t, 's', 2)}$, soit ${num(t / 3600, 2)}\\ \\mathrm{{h}}$")
    d = 1500 * 0.40 / 2
    L.add("probleme", "retard", "Un sonar émet une salve d'ultrasons vers le fond marin et reçoit l'écho $0{,}40\\ \\mathrm{s}$ plus tard. Les ultrasons se propagent dans l'eau de mer à $1\\,500\\ \\mathrm{m\\cdot s^{-1}}$. Calculer la profondeur.",
          ["L'onde fait l'aller et le retour : $2d = v\\,\\tau$.", f"$d = \\dfrac{{1\\,500 \\times 0{{,}}40}}{{2}} = {val(d, 'm', 2)}$."], f"$d = {val(d, 'm', 2)}$")
    L.add("intermediaire", "retard", "Un point d'un ressort, situé à $3{,}0\\ \\mathrm{m}$ de la source, reproduit le mouvement de la source avec un retard de $0{,}15\\ \\mathrm{s}$. Calculer la célérité de l'onde.",
          [f"$v = \\dfrac{{d}}{{\\tau}} = \\dfrac{{3{{,}}0}}{{0{{,}}15}} = {val(20, MS, 2)}$."], f"$v = {val(20, MS, 2)}$")
    t = 170 / 340
    L.add("intermediaire", "retard", "Dans un stade, un spectateur est assis à $170\\ \\mathrm{m}$ du terrain. Avec quel retard entend-il le bruit d'un coup de pied dans le ballon ($v = 340\\ \\mathrm{m\\cdot s^{-1}}$) ?",
          [f"$\\tau = \\dfrac{{170}}{{340}} = {val(t, 's', 2)}$ : un décalage bien perceptible entre l'image et le son."], f"$\\tau = {val(t, 's', 2)}$")
    # --- longueur d'onde (9)
    for ctx, v, f, fu, sig in [("Un diapason émet un la de $440\\ \\mathrm{Hz}$ dans l'air ($v = 340\\ \\mathrm{m\\cdot s^{-1}}$).", 340, 440, "Hz", 3),
                               ("Un émetteur à ultrasons fonctionne à $40\\ \\mathrm{kHz}$ dans l'air ($v = 340\\ \\mathrm{m\\cdot s^{-1}}$).", 340, 40e3, "kHz", 2),
                               ("Une sonde d'échographie émet à $5{,}0\\ \\mathrm{MHz}$ dans les tissus du corps ($v = 1\\,540\\ \\mathrm{m\\cdot s^{-1}}$).", 1540, 5.0e6, "MHz", 2)]:
        lam = v / f
        L.add("application", "longueur-onde", ctx + " Calculer la longueur d'onde.",
              [f"$\\lambda = \\dfrac{{v}}{{f}} = \\dfrac{{{ex(v)}}}{{{sci(f, 2) if f >= 1e4 else ex(f)}}} = {val(lam, 'm', sig)}$."], f"$\\lambda \\approx {val(lam, 'm', sig)}$")
    lam_a, lam_e = 340 / 40e3, 1480 / 40e3
    L.add("intermediaire", "longueur-onde", "Les ultrasons de $40\\ \\mathrm{kHz}$ passent de l'air ($340\\ \\mathrm{m\\cdot s^{-1}}$) à l'eau ($1\\,480\\ \\mathrm{m\\cdot s^{-1}}$). Que deviennent leur fréquence et leur longueur d'onde ?",
          ["La fréquence est imposée par la source : elle reste égale à $40\\ \\mathrm{kHz}$.", f"Dans l'air $\\lambda = {val(lam_a, 'm', 2)}$ ; dans l'eau $\\lambda = \\dfrac{{1\\,480}}{{4{{,}}0\\times 10^{{4}}}} = {val(lam_e, 'm', 2)}$."],
          f"$f$ inchangée ; $\\lambda$ passe de ${val(lam_a, 'm', 2)}$ à ${val(lam_e, 'm', 2)}$")
    L.add("intermediaire", "longueur-onde", "La houle a une période de $8{,}0\\ \\mathrm{s}$ et se propage à $12{,}5\\ \\mathrm{m\\cdot s^{-1}}$. Calculer la distance entre deux crêtes successives.",
          ["La distance entre deux crêtes est la longueur d'onde.", f"$\\lambda = v \\times T = 12{{,}}5 \\times 8{{,}}0 = {val(100, 'm', 2)}$."], "$\\lambda = 1{,}0\\times 10^{2}\\ \\mathrm{m}$")
    L.add("intermediaire", "longueur-onde", "Un vibreur de fréquence $50\\ \\mathrm{Hz}$ crée une onde sur une corde ; on mesure $\\lambda = 0{,}40\\ \\mathrm{m}$. Calculer la célérité de l'onde.",
          [f"$v = \\lambda \\times f = 0{{,}}40 \\times 50 = {val(20, MS, 2)}$."], f"$v = {val(20, MS, 2)}$")
    L.add("application", "longueur-onde", "Calculer la période d'une onde sonore de fréquence $1\\,000\\ \\mathrm{Hz}$, puis de $50\\ \\mathrm{Hz}$.",
          ["$T = \\dfrac{1}{f}$.", "$T_1 = \\dfrac{1}{1\\,000} = 1{,}0\\times 10^{-3}\\ \\mathrm{s} = 1{,}0\\ \\mathrm{ms}$ ; $T_2 = \\dfrac{1}{50} = 0{,}020\\ \\mathrm{s} = 20\\ \\mathrm{ms}$."],
          "$1{,}0\\ \\mathrm{ms}$ et $20\\ \\mathrm{ms}$")
    L.add("intermediaire", "longueur-onde", "L'oreille humaine perçoit les sons de $20\\ \\mathrm{Hz}$ à $20\\ \\mathrm{kHz}$. Calculer les longueurs d'onde correspondantes dans l'air ($340\\ \\mathrm{m\\cdot s^{-1}}$).",
          [f"$\\lambda_1 = \\dfrac{{340}}{{20}} = {val(17, 'm', 2)}$ ; $\\lambda_2 = \\dfrac{{340}}{{2{{,}}0\\times 10^{{4}}}} = {val(0.017, 'm', 2)}$ (1,7 cm)."],
          "De $17\\ \\mathrm{m}$ à $1{,}7\\ \\mathrm{cm}$")
    la, le = 340 / 500, 1480 / 500
    L.add("probleme", "longueur-onde", "Un haut-parleur étanche émet un son de $500\\ \\mathrm{Hz}$, d'abord dans l'air ($340\\ \\mathrm{m\\cdot s^{-1}}$), puis sous l'eau d'une piscine ($1\\,480\\ \\mathrm{m\\cdot s^{-1}}$). Calculer la longueur d'onde dans chaque milieu.",
          ["La fréquence, imposée par la source, vaut $500\\ \\mathrm{Hz}$ dans les deux milieux.", f"Air : $\\lambda = \\dfrac{{340}}{{500}} = {val(la, 'm', 2)}$ ; eau : $\\lambda = \\dfrac{{1\\,480}}{{500}} = {val(le, 'm')}$."],
          f"${val(la, 'm', 2)}$ dans l'air, ${val(le, 'm')}$ dans l'eau")
    # --- lentille (10)
    lent = [(10, -30), (20, -60), (10, -15), (5, -6), (10, -5), (20, -40), (5, -100), (15, -10)]
    for i, (fp, oa) in enumerate(lent):
        oap = 1 / (Fraction(1, fp) + Fraction(1, oa))
        gam = oap / oa
        nat = ("réelle" if oap > 0 else "virtuelle") + ", " + ("renversée" if gam < 0 else "droite") + ", " + ("agrandie" if abs(gam) > 1 else ("réduite" if abs(gam) < 1 else "de même taille"))
        exact = oap.denominator == 1
        eq1 = "=" if exact else "\\approx"
        oap_t = str(oap.numerator) if exact else num(float(oap))
        gam_t = _fr_frac(gam) if (gam.denominator in (1, 2, 4, 5)) else num(float(gam))
        eg = "=" if (exact and gam.denominator in (1, 2, 4, 5)) else "\\approx"
        L.add("intermediaire" if i < 6 else "approfondissement", "lentille",
              f"Un objet est placé à ${-oa}\\ \\mathrm{{cm}}$ devant une lentille convergente de distance focale $f' = {fp}\\ \\mathrm{{cm}}$ ($\\overline{{OA}} = {oa}\\ \\mathrm{{cm}}$). Déterminer la position de l'image, le grandissement et la nature de l'image.",
              [f"$\\dfrac{{1}}{{\\overline{{OA'}}}} = \\dfrac{{1}}{{f'}} + \\dfrac{{1}}{{\\overline{{OA}}}} = \\dfrac{{1}}{{{fp}}} + \\dfrac{{1}}{{{oa}}}$, d'où $\\overline{{OA'}} {eq1} {oap_t}\\ \\mathrm{{cm}}$.",
               f"$\\gamma = \\dfrac{{\\overline{{OA'}}}}{{\\overline{{OA}}}} {eg} {gam_t}$.",
               f"L'image est {nat}."],
              f"$\\overline{{OA'}} {eq1} {oap_t}\\ \\mathrm{{cm}}$ ; $\\gamma {eg} {gam_t}$ ; image {nat}")
    L.add("intermediaire", "lentille", "Une lentille convergente donne d'un objet situé en $\\overline{OA} = -20\\ \\mathrm{cm}$ une image nette sur un écran en $\\overline{OA'} = 20\\ \\mathrm{cm}$. Calculer sa distance focale.",
          ["$\\dfrac{1}{f'} = \\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{20} + \\dfrac{1}{20} = \\dfrac{2}{20}$.", "$f' = 10\\ \\mathrm{cm}$ (et $\\gamma = -1$ : image renversée, de même taille)."],
          "$f' = 10\\ \\mathrm{cm}$")
    L.add("probleme", "lentille", "Pour projeter une diapositive, l'objet est à $\\overline{OA} = -25\\ \\mathrm{cm}$ et l'écran à $\\overline{OA'} = 100\\ \\mathrm{cm}$ de la lentille. Calculer $f'$ et la taille de l'image d'un objet de $2{,}0\\ \\mathrm{cm}$.",
          ["$\\dfrac{1}{f'} = \\dfrac{1}{100} + \\dfrac{1}{25} = \\dfrac{5}{100}$, donc $f' = 20\\ \\mathrm{cm}$.", "$\\gamma = \\dfrac{100}{-25} = -4$ ; $\\overline{A'B'} = \\gamma \\times \\overline{AB} = -8{,}0\\ \\mathrm{cm}$."],
          "$f' = 20\\ \\mathrm{cm}$ ; image renversée de $8{,}0\\ \\mathrm{cm}$")
    # --- couleurs (8)
    L.qa("application", "couleurs", [
        ("Quelle couleur obtient-on en superposant, sur un écran blanc, des lumières rouge, verte et bleue de même intensité ?", ["C'est la synthèse additive des trois lumières primaires."], "Du blanc"),
        ("En synthèse additive, quelle couleur donne la superposition d'une lumière rouge et d'une lumière verte ?", ["Rouge + vert = jaune (synthèse additive)."], "Jaune"),
        ("Un objet rouge (qui diffuse seulement le rouge) est éclairé en lumière verte. Quelle couleur paraît-il ?", ["Il absorbe le vert et n'a aucune lumière rouge à diffuser."], "Noir"),
        ("Un tee-shirt blanc est éclairé par une lumière bleue. De quelle couleur apparaît-il ?", ["Un objet blanc diffuse toutes les lumières qu'il reçoit : ici, uniquement le bleu."], "Bleu"),
        ("Une solution absorbe surtout le rouge. Quelle couleur perçoit-on ? (Le cyan est la couleur complémentaire du rouge.)", ["La couleur perçue est la complémentaire de la couleur absorbée."], "Cyan (bleu-vert)"),
        ("Quelles sont les trois couleurs primaires de la synthèse soustractive (encres, peintures) ?", ["Cyan, magenta et jaune : chaque filtre ou pigment absorbe une partie de la lumière blanche."], "Cyan, magenta, jaune"),
        ("Un filtre jaune absorbe le bleu. Quelle couleur obtient-on en éclairant un filtre jaune en lumière blanche ?", ["Le filtre transmet le rouge et le vert, dont la superposition donne du jaune."], "Jaune"),
        ("Une espèce chimique absorbe vers $530\\ \\mathrm{nm}$ (vert). De quelle couleur est sa solution ?", ["Elle apparaît de la couleur complémentaire du vert : le magenta (pourpre). C'est le cas du permanganate de potassium."], "Magenta (violet-pourpre)"),
    ])
    # --- types d'ondes (7)
    L.vf("application", "ondes-types", [
        ("Une onde mécanique transporte de la matière.", False, "Faux : elle transporte de l'énergie, pas de matière ; un bouchon monte et descend sur place."),
        ("Le son est une onde transversale.", False, "Faux : le son est une onde longitudinale (compressions et dilatations de l'air, parallèles à la propagation)."),
        ("L'onde qui se propage le long d'une corde secouée verticalement est transversale.", True, "Vrai : la perturbation (verticale) est perpendiculaire à la direction de propagation (horizontale)."),
        ("Le son peut se propager dans le vide.", False, "Faux : c'est une onde mécanique, il lui faut un milieu matériel."),
        ("Quand une onde change de milieu, sa fréquence change.", False, "Faux : la fréquence est imposée par la source ; ce sont la célérité et la longueur d'onde qui changent."),
        ("La hauteur d'un son (grave ou aigu) est liée à sa fréquence.", True, "Vrai : plus la fréquence est grande, plus le son est aigu."),
        ("La longueur d'onde est la distance parcourue par l'onde pendant une période.", True, "Vrai : $\\lambda = v \\times T$, c'est une période spatiale."),
    ])
    # --- période et fréquence sur un oscillogramme (8)
    for nper, ndiv, bt, unit in [(5, "8.0", "0.5", "ms"), (2, "8.0", "1", "ms"), (3, "6.0", "2", "ms"), (4, "10", "0.1", "ms"),
                                 (2, "5.0", "10", "\\mu s"), (3, "9.0", "5", "ms"), (1, "4.0", "0.5", "ms"), (6, "9.0", "20", "\\mu s")]:
        fac = 1e-3 if unit == "ms" else 1e-6
        T = float(ndiv) * float(bt) / nper * fac
        f = 1 / T
        Ttxt = num(T / fac, 2) + "\\ \\mathrm{" + unit + "}"
        L.add("intermediaire" if nper > 1 else "application", "periode-frequence",
              f"Sur l'écran d'un oscilloscope, {nper} période{'s' if nper > 1 else ''} d'un signal périodique occupe{'nt' if nper > 1 else ''} ${ex(ndiv)}$ divisions ; la base de temps est réglée sur ${ex(bt)}\\ \\mathrm{{{unit}}}$ par division. Déterminer la période puis la fréquence.",
              [f"Durée de {nper} période{'s' if nper > 1 else ''} : ${ex(ndiv)} \\times {ex(bt)} = {num(float(ndiv) * float(bt), 2)}\\ \\mathrm{{{unit}}}$.",
               f"$T = {Ttxt}$ ; $f = \\dfrac{{1}}{{T}} = {val(f, 'Hz', 2)}$."],
              f"$T = {Ttxt}$ ; $f \\approx {val(f, 'Hz', 2)}$")
    return L.fin()


# =====================================================================
#  1re — CONSTITUTION ET TRANSFORMATIONS DE LA MATIÈRE
# =====================================================================

def _esp(s):
    return "\\mathrm{" + s + "}"


def _equation(reac, prod):
    g = " + ".join(f"{_coef(c)}{_esp(e)}" for e, c, _ in reac)
    d = " + ".join(f"{_coef(c)}{_esp(e)}" for e, c in prod)
    return g + " \\longrightarrow " + d


def gen_1_transformations_matiere():
    L = _Lot()
    # --- quantité de matière (7)
    for ctx, m, M, quoi in [("$9{,}00\\ \\mathrm{g}$ d'eau ($M = 18{,}0\\ \\mathrm{g\\cdot mol^{-1}}$)", 9.0, 18.0, "9.00"),
                            ("$5{,}85\\ \\mathrm{g}$ de chlorure de sodium ($M = 58{,}5\\ \\mathrm{g\\cdot mol^{-1}}$)", 5.85, 58.5, "5.85"),
                            ("$1{,}27\\ \\mathrm{g}$ de cuivre ($M = 63{,}5\\ \\mathrm{g\\cdot mol^{-1}}$)", 1.27, 63.5, "1.27"),
                            ("$20{,}0\\ \\mathrm{g}$ de saccharose ($M = 342\\ \\mathrm{g\\cdot mol^{-1}}$)", 20.0, 342, "20.0")]:
        n = m / M
        L.add("application", "quantite-matiere", f"Calculer la quantité de matière contenue dans {ctx}.",
              [f"$n = \\dfrac{{m}}{{M}} = \\dfrac{{{ex(quoi)}}}{{{ex(str(M) if M != 342 else '342')}}} = {val(n, 'mol')}$."], f"$n \\approx {val(n, 'mol')}$")
    for V, c in [("100", "0.20"), ("250", "5.0e-2")]:
        n = float(V) / 1000 * float(c)
        ct = ex(c) if "e" not in c else sci(float(c), 2)
        L.add("application", "quantite-matiere", f"Calculer la quantité de soluté apporté dans ${V}\\ \\mathrm{{mL}}$ de solution de concentration ${ct}" + un(MOLL) + "$.",
              [f"$V = {num(float(V) / 1000)}\\ \\mathrm{{L}}$ ; $n = c \\times V = {ct} \\times {num(float(V) / 1000)} = {val(n, 'mol', 2)}$."], f"$n = {val(n, 'mol', 2)}$")
    m = 0.10 * 0.250 * 159.6
    L.add("intermediaire", "quantite-matiere", "Quelle masse de sulfate de cuivre anhydre ($M = 159{,}6\\ \\mathrm{g\\cdot mol^{-1}}$) faut-il dissoudre pour préparer $250\\ \\mathrm{mL}$ de solution à $0{,}100\\ \\mathrm{mol\\cdot L^{-1}}$ ?",
          [f"$n = c \\times V = 0{{,}}100 \\times 0{{,}}250 = 2{{,}}50\\times 10^{{-2}}\\ \\mathrm{{mol}}$.", f"$m = n \\times M = 2{{,}}50\\times 10^{{-2}} \\times 159{{,}}6 = {val(m, 'g')}$."],
          f"$m \\approx {val(m, 'g')}$")
    # --- avancement (9)
    reacs = [
        ([("H_2", 2, "3.0"), ("O_2", 1, "2.0")], [("H_2O", 2)], None),
        ([("CH_4", 1, "0.50"), ("O_2", 2, "0.80")], [("CO_2", 1), ("H_2O", 2)], None),
        ([("Al", 4, "0.40"), ("O_2", 3, "0.30")], [("Al_2O_3", 2)], None),
        ([("Fe", 1, "0.020"), ("H^+", 2, "0.050")], [("Fe^{2+}", 1), ("H_2", 1)], None),
        ([("Cu^{2+}", 1, "2.0e-3"), ("HO^-", 2, "3.0e-3")], [("Cu(OH)_2", 1)], None),
        ([("C_3H_8", 1, "0.10"), ("O_2", 5, "0.60")], [("CO_2", 3), ("H_2O", 4)], None),
    ]

    def nt(s):
        return sci(float(s), 2) if "e" in s else ex(s)

    for i, (R, P, _) in enumerate(reacs):
        eq = _equation(R, P)
        xs = [Fraction(s) / c for _, c, s in R]
        xmax = min(xs)
        lim = [e for (e, c, s), x in zip(R, xs) if x == xmax]
        sig = 2
        cor = [f"$\\dfrac{{n({_esp(e)})}}{{{c}}} = \\dfrac{{{nt(s)}}}{{{c}}} = {num(float(Fraction(s) / c), sig)}\\ \\mathrm{{mol}}$" for e, c, s in R]
        cor = ["On compare les rapports $\\dfrac{n_i}{\\text{coefficient}}$ : " + " ; ".join(cor) + "."]
        if len(lim) == len(R):
            cor.append(f"Les rapports sont égaux : le mélange est stœchiométrique, $x_{{\\max}} = {val(float(xmax), 'mol', sig)}$, tous les réactifs sont épuisés.")
            rep = "Mélange stœchiométrique"
        else:
            cor.append(f"Le plus petit rapport désigne le réactif limitant : ${_esp(lim[0])}$ ; $x_{{\\max}} = {val(float(xmax), 'mol', sig)}$.")
            rep = f"Limitant : ${_esp(lim[0])}$"
        fin = [f"$n({_esp(e)}) = {num(float(Fraction(s) - c * xmax), sig) if Fraction(s) - c * xmax != 0 else '0'}\\ \\mathrm{{mol}}$" for e, c, s in R]
        fin += [f"$n({_esp(e)}) = {num(float(c * xmax), sig)}\\ \\mathrm{{mol}}$" for e, c in P]
        cor.append("État final : " + " ; ".join(fin) + ".")
        ini = ", ".join(f"${nt(s)}\\ \\mathrm{{mol}}$ de ${_esp(e)}$" for e, c, s in R)
        L.add("intermediaire" if i < 4 else "approfondissement", "avancement",
              f"On fait réagir {ini} selon ${eq}$. Déterminer le réactif limitant, l'avancement maximal et la composition de l'état final.",
              cor, rep + f" ; $x_{{\\max}} = {val(float(xmax), 'mol', sig)}$")
    n_mg, n_o2 = 0.486 / 24.3, 0.0150
    xm = min(n_mg / 2, n_o2)
    L.add("probleme", "avancement", "On brûle un ruban de magnésium de $0{,}486\\ \\mathrm{g}$ ($M = 24{,}3\\ \\mathrm{g\\cdot mol^{-1}}$) dans un flacon contenant $1{,}50\\times 10^{-2}\\ \\mathrm{mol}$ de dioxygène : $2\\,\\mathrm{Mg} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{MgO}$. Quelle masse d'oxyde de magnésium ($M = 40{,}3\\ \\mathrm{g\\cdot mol^{-1}}$) obtient-on ?",
          [f"$n(\\mathrm{{Mg}}) = \\dfrac{{0{{,}}486}}{{24{{,}}3}} = {val(n_mg, 'mol')}$.", f"Rapports : $\\dfrac{{{num(n_mg)}}}{{2}} = {num(n_mg / 2)}$ et $\\dfrac{{1{{,}}50\\times 10^{{-2}}}}{{1}}$ : le magnésium est limitant, $x_{{\\max}} = {val(xm, 'mol')}$.",
           f"$n(\\mathrm{{MgO}}) = 2x_{{\\max}} = {val(2 * xm, 'mol')}$ ; $m = {num(2 * xm)} \\times 40{{,}}3 = {val(2 * xm * 40.3, 'g')}$."],
          f"$m(\\mathrm{{MgO}}) \\approx {val(2 * xm * 40.3, 'g')}$")
    n_zn, n_cu = 0.654 / 65.4, 0.100 * 0.050
    xm = min(n_zn, n_cu)
    L.add("probleme", "avancement", "On plonge $0{,}654\\ \\mathrm{g}$ de zinc ($M = 65{,}4\\ \\mathrm{g\\cdot mol^{-1}}$) dans $100\\ \\mathrm{mL}$ de solution de sulfate de cuivre à $5{,}0\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$ : $\\mathrm{Zn} + \\mathrm{Cu^{2+}} \\longrightarrow \\mathrm{Zn^{2+}} + \\mathrm{Cu}$. Quelle masse de cuivre ($M = 63{,}5\\ \\mathrm{g\\cdot mol^{-1}}$) se dépose ?",
          [f"$n(\\mathrm{{Zn}}) = {val(n_zn, 'mol')}$ ; $n(\\mathrm{{Cu^{{2+}}}}) = 5{{,}}0\\times 10^{{-2}} \\times 0{{,}}100 = {val(n_cu, 'mol', 2)}$.",
           f"Coefficients égaux à 1 : les ions cuivre sont limitants, $x_{{\\max}} = {val(xm, 'mol', 2)}$.", f"$m(\\mathrm{{Cu}}) = {sci(xm, 2)} \\times 63{{,}}5 = {val(xm * 63.5, 'g', 2)}$."],
          f"$m(\\mathrm{{Cu}}) \\approx {val(xm * 63.5, 'g', 2)}$")
    n_ag, n_cl = 0.020 * 0.10, 0.030 * 0.050
    xm = min(n_ag, n_cl)
    L.add("probleme", "avancement", "On mélange $20\\ \\mathrm{mL}$ de nitrate d'argent à $0{,}10\\ \\mathrm{mol\\cdot L^{-1}}$ et $30\\ \\mathrm{mL}$ de chlorure de sodium à $0{,}050\\ \\mathrm{mol\\cdot L^{-1}}$. Il se forme un précipité : $\\mathrm{Ag^+} + \\mathrm{Cl^-} \\longrightarrow \\mathrm{AgCl}$. Quelle masse de chlorure d'argent ($M = 143{,}4\\ \\mathrm{g\\cdot mol^{-1}}$) obtient-on ?",
          [f"$n(\\mathrm{{Ag^+}}) = 0{{,}}10 \\times 0{{,}}020 = {val(n_ag, 'mol', 2)}$ ; $n(\\mathrm{{Cl^-}}) = 0{{,}}050 \\times 0{{,}}030 = {val(n_cl, 'mol', 2)}$.",
           f"Les ions chlorure sont limitants : $x_{{\\max}} = {val(xm, 'mol', 2)}$.", f"$m = {sci(xm, 2)} \\times 143{{,}}4 = {val(xm * 143.4, 'g', 2)}$."],
          f"$m(\\mathrm{{AgCl}}) \\approx {val(xm * 143.4, 'g', 2)}$")
    # --- Beer-Lambert (8)
    L.add("application", "beer-lambert", "Une solution de permanganate de potassium de concentration $2{,}0\\times 10^{-4}\\ \\mathrm{mol\\cdot L^{-1}}$ est placée dans une cuve de $1{,}0\\ \\mathrm{cm}$. À $525\\ \\mathrm{nm}$, $\\varepsilon = 2{,}4\\times 10^{3}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$. Calculer l'absorbance.",
          [f"$A = \\varepsilon \\ell c = 2{{,}}4\\times 10^{{3}} \\times 1{{,}}0 \\times 2{{,}}0\\times 10^{{-4}} = {num(0.48, 2)}$ (sans unité)."], "$A = 0{,}48$")
    c = 0.36 / 2.4e3
    L.add("application", "beer-lambert", "Dans les mêmes conditions ($\\varepsilon = 2{,}4\\times 10^{3}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$, $\\ell = 1{,}0\\ \\mathrm{cm}$), une solution de permanganate a une absorbance de $0{,}36$. Calculer sa concentration.",
          [f"$c = \\dfrac{{A}}{{\\varepsilon \\ell}} = \\dfrac{{0{{,}}36}}{{2{{,}}4\\times 10^{{3}} \\times 1{{,}}0}} = {val(c, MOLL, 2)}$."], f"$c = {val(c, MOLL, 2)}$")
    k = 0.96 / 4.0e-4
    c = 0.60 / k
    L.add("intermediaire", "beer-lambert", "Une solution étalon de concentration $4{,}0\\times 10^{-4}\\ \\mathrm{mol\\cdot L^{-1}}$ a une absorbance de $0{,}96$. Une solution de la même espèce, mesurée dans les mêmes conditions, a une absorbance de $0{,}60$. Calculer sa concentration.",
          ["L'absorbance est proportionnelle à la concentration : $\\dfrac{c}{c_0} = \\dfrac{A}{A_0}$.", f"$c = 4{{,}}0\\times 10^{{-4}} \\times \\dfrac{{0{{,}}60}}{{0{{,}}96}} = {val(c, MOLL, 2)}$."],
          f"$c = {val(c, MOLL, 2)}$")
    c = 0.52 / 1.3e5
    L.add("intermediaire", "beer-lambert", "Le colorant bleu E133 d'une boisson a une absorbance de $0{,}52$ à $630\\ \\mathrm{nm}$ dans une cuve de $1{,}0\\ \\mathrm{cm}$ ; $\\varepsilon = 1{,}3\\times 10^{5}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$. Calculer sa concentration molaire, puis sa concentration en masse ($M = 793\\ \\mathrm{g\\cdot mol^{-1}}$).",
          [f"$c = \\dfrac{{0{{,}}52}}{{1{{,}}3\\times 10^{{5}} \\times 1{{,}}0}} = {val(c, MOLL, 2)}$.", f"$C_m = c \\times M = {sci(c, 2)} \\times 793 = {val(c * 793, GL, 2)}$, soit environ ${num(c * 793 * 1000, 2)}\\ \\mathrm{{mg\\cdot L^{{-1}}}}$."],
          f"$c = {val(c, MOLL, 2)}$ ; $C_m \\approx {num(c * 793 * 1000, 2)}\\ \\mathrm{{mg\\cdot L^{{-1}}}}$")
    L.add("application", "beer-lambert", "Une solution de sulfate de cuivre à $0{,}050\\ \\mathrm{mol\\cdot L^{-1}}$ est étudiée à $800\\ \\mathrm{nm}$ ($\\varepsilon = 12\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$) dans une cuve de $1{,}0\\ \\mathrm{cm}$. Calculer son absorbance.",
          [f"$A = 12 \\times 1{{,}}0 \\times 0{{,}}050 = {num(0.6, 2)}$."], "$A = 0{,}60$")
    L.add("intermediaire", "beer-lambert", "On dilue deux fois une solution colorée dont l'absorbance vaut $0{,}84$. Quelle absorbance attend-on pour la solution diluée (même cuve, même longueur d'onde) ?",
          ["$A$ est proportionnelle à $c$ ; la concentration est divisée par 2.", "$A' = \\dfrac{0{,}84}{2} = 0{,}42$."], "$A' = 0{,}42$")
    L.add("approfondissement", "beer-lambert", "Avec une cuve de $2{,}0\\ \\mathrm{cm}$ au lieu de $1{,}0\\ \\mathrm{cm}$, comment varie l'absorbance d'une même solution ?",
          ["$A = \\varepsilon \\ell c$ est proportionnelle à l'épaisseur $\\ell$.", "L'absorbance double."], "Elle double")
    L.add("approfondissement", "beer-lambert", "Une solution trop concentrée donne $A = 2{,}6$. Pourquoi ne peut-on pas utiliser directement la loi de Beer-Lambert ? Que faire ?",
          ["La loi n'est valable que pour des solutions diluées (absorbance pas trop grande) : au-delà, $A$ n'est plus proportionnelle à $c$.",
           "On dilue la solution d'un facteur connu (par exemple 10), on mesure, puis on multiplie la concentration trouvée par ce facteur."],
          "Hors du domaine de validité : diluer")
    # --- titrage (9)
    for ctx, VAs, cBs, VEs, nom, coefA, coefB, quoi, sig in [
            ("On titre $20{,}0\\ \\mathrm{mL}$ d'une solution d'acide chlorhydrique par une solution d'hydroxyde de sodium à $0{,}100\\ \\mathrm{mol\\cdot L^{-1}}$ ; l'équivalence est obtenue pour $12{,}4\\ \\mathrm{mL}$. Réaction : $\\mathrm{H_3O^+} + \\mathrm{HO^-} \\longrightarrow 2\\,\\mathrm{H_2O}$.", "20.0", "0.100", "12.4", "\\mathrm{H_3O^+}", 1, 1, "acide chlorhydrique", 3),
            ("On titre $10{,}0\\ \\mathrm{mL}$ d'un vinaigre dilué 10 fois par une solution d'hydroxyde de sodium à $0{,}100\\ \\mathrm{mol\\cdot L^{-1}}$ ; $V_E = 14{,}2\\ \\mathrm{mL}$. Réaction : $\\mathrm{CH_3COOH} + \\mathrm{HO^-} \\longrightarrow \\mathrm{CH_3COO^-} + \\mathrm{H_2O}$. Calculer la concentration du vinaigre dilué puis celle du vinaigre commercial.", "10.0", "0.100", "14.2", "\\mathrm{CH_3COOH}", 1, 1, "vinaigre", 3),
            ("On titre $10{,}0\\ \\mathrm{mL}$ d'une solution de diiode par du thiosulfate de sodium à $5{,}00\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$ ; $V_E = 8{,}0\\ \\mathrm{mL}$. Réaction : $\\mathrm{I_2} + 2\\,\\mathrm{S_2O_3^{2-}} \\longrightarrow 2\\,\\mathrm{I^-} + \\mathrm{S_4O_6^{2-}}$.", "10.0", "0.0500", "8.0", "\\mathrm{I_2}", 1, 2, "diiode", 2),
            ("On titre $20{,}0\\ \\mathrm{mL}$ d'une solution d'ions fer(II) par du permanganate de potassium à $2{,}00\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$ ; $V_E = 15{,}0\\ \\mathrm{mL}$. Réaction : $\\mathrm{MnO_4^-} + 5\\,\\mathrm{Fe^{2+}} + 8\\,\\mathrm{H^+} \\longrightarrow \\mathrm{Mn^{2+}} + 5\\,\\mathrm{Fe^{3+}} + 4\\,\\mathrm{H_2O}$.", "20.0", "0.0200", "15.0", "\\mathrm{Fe^{2+}}", 5, 1, "fer", 3),
            ("On titre $10{,}0\\ \\mathrm{mL}$ d'eau oxygénée diluée par du permanganate de potassium à $2{,}00\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$ ; $V_E = 12{,}0\\ \\mathrm{mL}$. Réaction : $2\\,\\mathrm{MnO_4^-} + 5\\,\\mathrm{H_2O_2} + 6\\,\\mathrm{H^+} \\longrightarrow 2\\,\\mathrm{Mn^{2+}} + 5\\,\\mathrm{O_2} + 8\\,\\mathrm{H_2O}$.", "10.0", "0.0200", "12.0", "\\mathrm{H_2O_2}", 5, 2, "eau oxygénée", 3),
            ("On titre $50{,}0\\ \\mathrm{mL}$ d'une eau minérale par du nitrate d'argent à $1{,}00\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$ ; $V_E = 6{,}2\\ \\mathrm{mL}$. Réaction : $\\mathrm{Ag^+} + \\mathrm{Cl^-} \\longrightarrow \\mathrm{AgCl}$.", "50.0", "0.0100", "6.2", "\\mathrm{Cl^-}", 1, 1, "chlorure", 2)]:
        VA, cB, VE = float(VAs), float(cBs), float(VEs)
        cBt = ex(cBs) if cB >= 0.1 else sci(cB, 3)
        nB = cB * VE / 1000
        nA = nB * coefA / coefB
        cA = nA / (VA / 1000)
        cor = [f"Quantité de réactif titrant versée à l'équivalence : $n = {cBt} \\times {ex(VEs)}\\times 10^{{-3}} = {val(nB, 'mol', sig)}$."]
        if coefA == coefB:
            cor.append(f"Les nombres stœchiométriques valent 1 : $n({nom}) = n = {val(nA, 'mol', sig)}$.")
        else:
            cor.append(f"À l'équivalence, $\\dfrac{{n({nom})}}{{{coefA}}} = \\dfrac{{n_{{\\text{{titrant}}}}}}{{{coefB}}}$, d'où $n({nom}) = {val(nA, 'mol', sig)}$.")
        cor.append(f"$c = \\dfrac{{n}}{{V}} = \\dfrac{{{sci(nA, sig)}}}{{{ex(VAs)}\\times 10^{{-3}}}} = {val(cA, MOLL, sig)}$.")
        rep = f"$c \\approx {val(cA, MOLL, sig)}$"
        if quoi == "vinaigre":
            cor.append(f"Vinaigre commercial (10 fois plus concentré) : ${val(cA * 10, MOLL, sig)}$.")
            rep = f"${val(cA, MOLL, sig)}$ puis ${val(cA * 10, MOLL, sig)}$"
        if quoi == "chlorure":
            cor.append(f"En masse : ${sci(cA, 2)} \\times 35{{,}}5 = {val(cA * 35.5, GL, 2)}$, soit environ ${num(cA * 35500, 2)}\\ \\mathrm{{mg\\cdot L^{{-1}}}}$ ($M(\\mathrm{{Cl}}) = 35{{,}}5\\ \\mathrm{{g\\cdot mol^{{-1}}}}$).")
            rep += f", soit ${num(cA * 35500, 2)}\\ \\mathrm{{mg\\cdot L^{{-1}}}}$"
        L.add("intermediaire" if coefA == coefB else "approfondissement", "titrage", ctx + ("" if quoi == "vinaigre" else f" Calculer la concentration en {'ions ' if quoi in ('fer', 'chlorure') else ''}{quoi if quoi != 'fer' else 'fer(II)'}" + (" (en mol par litre puis en mg par litre)." if quoi == "chlorure" else ".")),
              cor, rep)
    L.add("application", "titrage", "On veut titrer $10{,}0\\ \\mathrm{mL}$ d'acide chlorhydrique à environ $0{,}050\\ \\mathrm{mol\\cdot L^{-1}}$ par de la soude à $0{,}10\\ \\mathrm{mol\\cdot L^{-1}}$ (réaction mole à mole). Prévoir le volume équivalent.",
          ["À l'équivalence : $c_A V_A = c_B V_E$.", "$V_E = \\dfrac{0{,}050 \\times 10{,}0}{0{,}10} = 5{,}0\\ \\mathrm{mL}$."], "$V_E \\approx 5{,}0\\ \\mathrm{mL}$")
    L.qa("application", "titrage", [
        ("Lors du titrage d'ions fer(II) par le permanganate (violet), comment repère-t-on l'équivalence ?",
         ["Avant l'équivalence, les ions permanganate versés sont consommés : la solution reste presque incolore.", "Juste après l'équivalence, ils sont en excès : une teinte violette persiste."],
         "Persistance de la teinte violette"),
        ("Qu'appelle-t-on équivalence d'un titrage ?",
         ["C'est l'état où les réactifs (titré et titrant) ont été introduits dans les proportions stœchiométriques : ils sont tous deux entièrement consommés."],
         "Réactifs introduits dans les proportions stœchiométriques"),
    ])
    # --- énergie de réaction (7)
    for ctx, m, M, Em, signe, nom in [("On dissout $4{,}0\\ \\mathrm{g}$ d'hydroxyde de sodium ($M = 40{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) dans l'eau ; l'énergie molaire de dissolution vaut $44{,}5\\ \\mathrm{kJ\\cdot mol^{-1}}$ (transformation exothermique).", 4.0, 40.0, 44.5, "libérée", ""),
                                      ("Une poche de froid contient $8{,}0\\ \\mathrm{g}$ de nitrate d'ammonium ($M = 80{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) qui se dissout ; l'énergie molaire de dissolution vaut $25{,}7\\ \\mathrm{kJ\\cdot mol^{-1}}$ (transformation endothermique).", 8.0, 80.0, 25.7, "absorbée", ""),
                                      ("Une cartouche de camping contient $190\\ \\mathrm{g}$ de butane ($M = 58{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) ; l'énergie libérée par la combustion d'une mole de butane vaut $2\\,660\\ \\mathrm{kJ}$.", 190, 58.0, 2660, "libérée", "")]:
        n = m / M
        Q = n * Em
        L.add("intermediaire", "energie-reaction", ctx + f" Calculer l'énergie {signe}.",
              [f"$n = \\dfrac{{m}}{{M}} = {val(n, 'mol', 2 if m < 10 else 3)}$.", f"$Q = n \\times E_{{\\text{{molaire}}}} = {num(n, 2 if m < 10 else 3)} \\times {ex(Em)} = {val(Q, 'kJ', 2 if m < 10 else 3)}$."],
              f"$Q \\approx {val(Q, 'kJ', 2 if m < 10 else 3)}$ {signe}")
    L.add("intermediaire", "energie-reaction", "La combustion d'une mole de méthane libère $890\\ \\mathrm{kJ}$. Quelle énergie libère la combustion de $2{,}5\\ \\mathrm{mol}$ de méthane ?",
          [f"$Q = n \\times E_{{\\text{{molaire}}}} = 2{{,}}5 \\times 890 = {val(2.5 * 890, 'kJ', 2)}$."], f"$Q \\approx {val(2.5 * 890, 'kJ', 2)}$")
    n = 1000 / 1367
    L.add("probleme", "energie-reaction", "La combustion d'une mole d'éthanol libère $1\\,367\\ \\mathrm{kJ}$. Quelle masse d'éthanol ($M = 46{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) faut-il brûler pour libérer $1{,}00\\ \\mathrm{MJ}$ ?",
          [f"$n = \\dfrac{{Q}}{{E_{{\\text{{molaire}}}}}} = \\dfrac{{1\\,000}}{{1\\,367}} = {val(n, 'mol')}$.", f"$m = n \\times M = {num(n)} \\times 46{{,}}0 = {val(n * 46.0, 'g')}$."],
          f"$m \\approx {val(n * 46.0, 'g')}$")
    L.qa("application", "energie-reaction", [
        ("Lors d'une transformation chimique dans un bécher, la température du mélange augmente. La transformation est-elle exothermique ou endothermique ?",
         ["Le système libère de l'énergie vers le milieu extérieur, qui s'échauffe."], "Exothermique"),
        ("Une poche de froid instantané se refroidit quand on la presse. Quel est le caractère de la transformation qui s'y produit ?",
         ["La transformation prélève de l'énergie au milieu extérieur, qui se refroidit."], "Endothermique"),
    ])
    # --- cours (10)
    L.vf("application", "cours", [
        ("Le réactif limitant est toujours le réactif introduit en plus petite quantité.", False, "Faux : c'est celui dont le rapport $\\dfrac{n_i}{\\text{coefficient}}$ est le plus petit ; les nombres stœchiométriques comptent."),
        ("Dans un tableau d'avancement, la quantité d'un réactif s'écrit $n_0 - a\\,x$.", True, "Vrai : les réactifs sont consommés proportionnellement à leur nombre stœchiométrique $a$."),
        ("Dans un mélange stœchiométrique, tous les réactifs sont épuisés à l'état final.", True, "Vrai : ils ont été introduits dans les proportions de l'équation et disparaissent simultanément."),
        ("L'absorbance d'une solution s'exprime en $\\mathrm{mol\\cdot L^{-1}}$.", False, "Faux : l'absorbance est sans unité ; c'est la concentration qui s'exprime en $\\mathrm{mol\\cdot L^{-1}}$."),
        ("La relation $c_A V_A = c_B V_E$ est valable pour tous les titrages.", False, "Faux : seulement si les nombres stœchiométriques valent 1 ; sinon on écrit $\\dfrac{n_A}{a} = \\dfrac{n_B}{b}$."),
        ("À l'équivalence d'un titrage, le réactif titrant est en excès.", False, "Faux : à l'équivalence, réactif titré et réactif titrant sont tous deux entièrement consommés ; le titrant n'est en excès qu'après."),
        ("Un saut de pH peut permettre de repérer l'équivalence d'un titrage acido-basique.", True, "Vrai : à l'équivalence, le pH varie brutalement."),
        ("La conductimétrie ne permet de suivre une transformation que si des ions y participent.", True, "Vrai : la conductivité d'une solution est due aux ions qu'elle contient."),
    ])
    L.qa("intermediaire", "cours", [
        ("Lors d'un titrage suivi par conductimétrie, comment repère-t-on l'équivalence sur la courbe ?",
         ["La conductivité évolue linéairement de part et d'autre de l'équivalence, avec deux pentes différentes.", "L'équivalence correspond au point de rupture de pente."], "Par la rupture de pente"),
        ("Pourquoi trace-t-on une courbe d'étalonnage $A = f(c)$ avant de doser une solution par spectrophotométrie ?",
         ["Elle vérifie que $A$ est proportionnelle à $c$ dans le domaine étudié et fournit le coefficient de proportionnalité.", "On lit ensuite la concentration de la solution inconnue à partir de son absorbance."],
         "Pour relier l'absorbance mesurée à la concentration"),
    ])
    return L.fin()


# =====================================================================
#  Terminale — CINÉTIQUE CHIMIQUE
# =====================================================================

def gen_T_cinetique():
    L = _Lot()
    # --- vitesse volumique (9)
    for (t1, c1), (t2, c2), umin, quoi in [((0, "0.080"), (40, "0"), False, "disp"), ((0, "0.050"), (125, "0"), False, "disp"),
                                           ((20, "0.060"), (100, "0.020"), False, "disp"), ((0, "0.20"), (8, "0"), True, "disp"),
                                           ((0, "0"), (15, "0.030"), False, "app")]:
        f = 60 if umin else 1
        pente = (float(c2) - float(c1)) / ((t2 - t1) * f)
        v = abs(pente)
        tu = "min" if umin else "s"
        espece = "du réactif R" if quoi == "disp" else "du produit P"
        conv = [f"Durée en secondes : ${t2 - t1}\\ \\mathrm{{min}} = {(t2 - t1) * 60}\\ \\mathrm{{s}}$."] if umin else []
        L.add("intermediaire" if not umin else "approfondissement", "vitesse-volumique",
              f"Sur la courbe de la concentration {espece} en fonction du temps, la tangente à la date $t = {t1}\\ \\mathrm{{{tu}}}$ passe par les points $({t1}\\ \\mathrm{{{tu}}}\\ ;\\ {ex(c1)}" + un(MOLL) + f")$ et $({t2}\\ \\mathrm{{{tu}}}\\ ;\\ {ex(c2)}" + un(MOLL) + f")$. Calculer la vitesse volumique {'de disparition de R' if quoi == 'disp' else 'd’apparition de P'} à cette date, en $\\mathrm{{mol\\cdot L^{{-1}}\\cdot s^{{-1}}}}$.".replace("d’", "d'"),
              conv + [f"Pente de la tangente : $\\dfrac{{{ex(c2)} - {ex(c1)}}}{{{(t2 - t1) * f}}} = {num(pente, 2)}" + un(VUN) + "$.",
                      ("La vitesse de disparition est l'opposé de la pente : " if quoi == "disp" else "La vitesse d'apparition est égale à la pente : ") + f"$v = {val(v, VUN, 2)}$."],
              f"$v = {val(v, VUN, 2)}$")
    vm = (0.100 - 0.064) / 60
    L.add("application", "vitesse-volumique", "La concentration d'un réactif passe de $0{,}100\\ \\mathrm{mol\\cdot L^{-1}}$ à $t = 0$ à $0{,}064\\ \\mathrm{mol\\cdot L^{-1}}$ à $t = 60\\ \\mathrm{s}$. Calculer sa vitesse volumique moyenne de disparition sur cet intervalle.",
          [f"$v_{{\\text{{moy}}}} = -\\dfrac{{\\Delta[\\mathrm{{R}}]}}{{\\Delta t}} = -\\dfrac{{0{{,}}064 - 0{{,}}100}}{{60}} = {val(vm, VUN, 2)}$."], f"$v_{{\\text{{moy}}}} = {val(vm, VUN, 2)}$")
    L.add("application", "vitesse-volumique", "Une vitesse volumique vaut $1{,}2\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}\\cdot min^{-1}}$. L'exprimer en $\\mathrm{mol\\cdot L^{-1}\\cdot s^{-1}}$.",
          ["$1\\ \\mathrm{min} = 60\\ \\mathrm{s}$ : on divise par 60.", f"$v = \\dfrac{{1{{,}}2\\times 10^{{-2}}}}{{60}} = {val(1.2e-2 / 60, VUN, 2)}$."], f"$v = {val(1.2e-2 / 60, VUN, 2)}$")
    L.qa("approfondissement", "vitesse-volumique", [
        ("Pourquoi la vitesse volumique de disparition d'un réactif diminue-t-elle au cours du temps ?",
         ["Le réactif est consommé : sa concentration baisse.", "La concentration étant un facteur cinétique, les chocs efficaces deviennent moins fréquents : la vitesse diminue et tend vers zéro en fin de réaction."],
         "Parce que la concentration du réactif diminue"),
        ("Un élève lit la vitesse de disparition comme la valeur de $[\\mathrm{R}]$ à la date $t$. Quelle est son erreur ?",
         ["La vitesse est une dérivée : elle se lit sur la pente de la tangente à la courbe, pas sur l'ordonnée du point.", "$v_{\\text{disp}} = -\\dfrac{\\mathrm{d}[\\mathrm{R}]}{\\mathrm{d}t}$, en $\\mathrm{mol\\cdot L^{-1}\\cdot s^{-1}}$."],
         "Il faut lire la pente de la tangente"),
    ])
    # --- temps de demi-réaction (8)
    for c0, t12, pas, u in [("0.080", 120, 60, "s"), ("0.050", 15, 5, "min"), ("0.020", 40, 20, "s"), ("0.36", 30, 10, "min")]:
        pts = [(k * pas, float(c0) * 2 ** (-(k * pas) / t12)) for k in range(5)]
        tab = " ; ".join(f"$t = {t}\\ \\mathrm{{{u}}}$ : ${num(c, 2)}$" for t, c in pts)
        L.add("application", "temps-demi-reaction",
              f"On a mesuré la concentration d'un réactif (en $\\mathrm{{mol\\cdot L^{{-1}}}}$) au cours du temps : {tab}. Déterminer le temps de demi-réaction.",
              [f"$t_{{1/2}}$ est la date à laquelle $[\\mathrm{{R}}] = \\dfrac{{[\\mathrm{{R}}]_0}}{{2}} = \\dfrac{{{ex(c0)}}}{{2}} = {num(float(c0) / 2, 2)}" + un(MOLL) + "$.",
               f"On lit cette valeur à $t = {t12}\\ \\mathrm{{{u}}}$."],
              f"$t_{{1/2}} = {t12}\\ \\mathrm{{{u}}}$")
    L.add("probleme", "temps-demi-reaction", "Un médicament est éliminé du sang selon une loi d'ordre 1, avec un temps de demi-réaction de $4{,}0\\ \\mathrm{h}$. Juste après la prise, sa concentration dans le sang vaut $12\\ \\mathrm{mg\\cdot L^{-1}}$. Quelle est-elle au bout de $12\\ \\mathrm{h}$ ?",
          ["$12\\ \\mathrm{h} = 3\\,t_{1/2}$ : la concentration est divisée par 2 trois fois, soit par 8.", "$c = \\dfrac{12}{8} = 1{,}5\\ \\mathrm{mg\\cdot L^{-1}}$."],
          "$c = 1{,}5\\ \\mathrm{mg\\cdot L^{-1}}$")
    L.add("intermediaire", "temps-demi-reaction", "Pour une réaction d'ordre 1 de temps de demi-réaction $t_{1/2} = 40\\ \\mathrm{s}$, au bout de combien de temps la concentration du réactif est-elle divisée par 8 ? par 16 ?",
          ["Diviser par $8 = 2^3$ demande 3 temps de demi-réaction : $120\\ \\mathrm{s}$.", "Diviser par $16 = 2^4$ demande 4 temps de demi-réaction : $160\\ \\mathrm{s}$."], "$120\\ \\mathrm{s}$ et $160\\ \\mathrm{s}$")
    L.qa("approfondissement", "temps-demi-reaction", [
        ("À la date $t_{1/2}$, la réaction est-elle à moitié terminée en durée ? Combien reste-t-il de réactif limitant ?",
         ["À $t_{1/2}$, il reste la moitié du réactif limitant : l'avancement a atteint la moitié de sa valeur finale.", "La durée totale est bien plus longue : la vitesse diminue, il faut plusieurs $t_{1/2}$ pour que la réaction soit quasi terminée."],
         "Il reste la moitié du réactif ; la réaction est loin d'être terminée"),
        ("Pourquoi le temps de demi-réaction est-il utile pour choisir la durée d'une expérience ?",
         ["C'est un ordre de grandeur commode de la durée de la réaction.", "Au bout de quelques $t_{1/2}$ (par exemple 5 ou 7), la transformation est pratiquement achevée."],
         "Il donne l'ordre de grandeur de la durée de la réaction"),
    ])
    # --- loi de vitesse d'ordre 1 (10)
    for k, ku, sig in [("2.5e-3", "s^{-1}", 2), ("0.035", "min^{-1}", 2), ("1.2e-4", "s^{-1}", 2)]:
        kf = float(k)
        t = math.log(2) / kf
        kt = sci(kf, 2) if "e" in k else ex(k)
        extra = f" soit environ ${num(t / 3600, 2)}\\ \\mathrm{{h}}$" if t > 3600 and "s" in ku else ""
        L.add("application", "ordre-1", f"Un réactif suit une loi de vitesse d'ordre 1 de constante $k = {kt}\\ \\mathrm{{{ku}}}$. Calculer son temps de demi-réaction.",
              [f"$t_{{1/2}} = \\dfrac{{\\ln 2}}{{k}} = \\dfrac{{\\ln 2}}{{{kt}}} = {val(t, 's' if 's' in ku else 'min', sig)}$" + extra + "."],
              f"$t_{{1/2}} \\approx {val(t, 's' if 's' in ku else 'min', sig)}$")
    for t12, u, ts in [(15, "min", 900), (40, "s", 40)]:
        k = math.log(2) / ts
        L.add("intermediaire", "ordre-1", f"Une réaction d'ordre 1 a un temps de demi-réaction de ${t12}\\ \\mathrm{{{u}}}$. Calculer sa constante de vitesse $k$ en $\\mathrm{{s^{{-1}}}}$.",
              ([f"$t_{{1/2}} = {t12} \\times 60 = {ts}\\ \\mathrm{{s}}$."] if u == "min" else []) + [f"$k = \\dfrac{{\\ln 2}}{{t_{{1/2}}}} = \\dfrac{{\\ln 2}}{{{ts}}} = {val(k, 's^{-1}', 2)}$."],
              f"$k \\approx {val(k, 's^{-1}', 2)}$")
    c = 0.050 * math.exp(-2.0e-3 * 600)
    L.add("intermediaire", "ordre-1", "Un réactif suit une loi d'ordre 1 : $[\\mathrm{R}](t) = [\\mathrm{R}]_0\\,e^{-kt}$ avec $[\\mathrm{R}]_0 = 5{,}0\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$ et $k = 2{,}0\\times 10^{-3}\\ \\mathrm{s^{-1}}$. Calculer $[\\mathrm{R}]$ au bout de 10 min.",
          ["$t = 600\\ \\mathrm{s}$ ; $kt = 2{,}0\\times 10^{-3} \\times 600 = 1{,}2$.", f"$[\\mathrm{{R}}] = 5{{,}}0\\times 10^{{-2}} \\times e^{{-1{{,}}2}} = {val(c, MOLL, 2)}$."],
          f"$[\\mathrm{{R}}] \\approx {val(c, MOLL, 2)}$")
    t = math.log(10) / 4.0e-3
    L.add("approfondissement", "ordre-1", "Pour une réaction d'ordre 1 de constante $k = 4{,}0\\times 10^{-3}\\ \\mathrm{s^{-1}}$, au bout de combien de temps reste-t-il $10\\ \\%$ du réactif ?",
          ["$\\dfrac{[\\mathrm{R}]}{[\\mathrm{R}]_0} = e^{-kt} = 0{,}10$, d'où $kt = \\ln 10$.", f"$t = \\dfrac{{\\ln 10}}{{4{{,}}0\\times 10^{{-3}}}} = {val(t, 's', 2)}$, soit environ ${num(t / 60, 2)}\\ \\mathrm{{min}}$."],
          f"$t \\approx {val(t, 's', 2)}$")
    k = 3.2e-3
    L.add("intermediaire", "ordre-1", "Le tracé de $\\ln[\\mathrm{R}]$ en fonction du temps donne une droite de coefficient directeur $-3{,}2\\times 10^{-3}\\ \\mathrm{s^{-1}}$. Que peut-on en conclure ? Calculer $k$ et $t_{1/2}$.",
          ["Une droite pour $\\ln[\\mathrm{R}] = f(t)$ signe une loi de vitesse d'ordre 1, car $\\ln[\\mathrm{R}] = \\ln[\\mathrm{R}]_0 - kt$.",
           f"La pente vaut $-k$ : $k = 3{{,}}2\\times 10^{{-3}}\\ \\mathrm{{s^{{-1}}}}$ ; $t_{{1/2}} = \\dfrac{{\\ln 2}}{{k}} = {val(math.log(2) / k, 's', 2)}$."],
          f"Ordre 1 ; $k = 3{{,}}2\\times 10^{{-3}}\\ \\mathrm{{s^{{-1}}}}$ ; $t_{{1/2}} \\approx {val(math.log(2) / k, 's', 2)}$")
    L.qa("approfondissement", "ordre-1", [
        ("Sur une courbe $[\\mathrm{R}] = f(t)$, on mesure des temps de demi-réaction successifs de $50\\ \\mathrm{s}$ (de $[\\mathrm{R}]_0$ à $[\\mathrm{R}]_0/2$) puis $50\\ \\mathrm{s}$ (de $[\\mathrm{R}]_0/2$ à $[\\mathrm{R}]_0/4$). Que peut-on conclure ?",
         ["Les demi-vies successives sont égales : c'est la signature d'une loi de vitesse d'ordre 1.", f"On en déduit $k = \\dfrac{{\\ln 2}}{{50}} = {val(math.log(2) / 50, 's^{-1}', 2)}$."],
         "Ordre 1"),
        ("Les demi-vies successives mesurées valent $50\\ \\mathrm{s}$ puis $100\\ \\mathrm{s}$. La réaction suit-elle une loi d'ordre 1 ?",
         ["Pour l'ordre 1, $t_{1/2} = \\dfrac{\\ln 2}{k}$ ne dépend pas de la concentration : les demi-vies successives seraient égales.", "Elles ne le sont pas : la loi n'est pas d'ordre 1."],
         "Non"),
    ])
    # --- suivi d'une transformation (7)
    for A, k in [("0.45", "1.5e3"), ("0.24", "4.0e2")]:
        c = float(A) / float(k)
        L.add("intermediaire", "suivi", f"On suit la formation du diiode par spectrophotométrie. À une date $t$, l'absorbance vaut ${ex(A)}$ ; la courbe d'étalonnage donne $A = k\\,[\\mathrm{{I_2}}]$ avec $k = {sci(float(k), 2)}\\ \\mathrm{{L\\cdot mol^{{-1}}}}$. Calculer $[\\mathrm{{I_2}}]$ à cette date.",
              [f"$[\\mathrm{{I_2}}] = \\dfrac{{A}}{{k}} = \\dfrac{{{ex(A)}}}{{{sci(float(k), 2)}}} = {val(c, MOLL, 2)}$."], f"$[\\mathrm{{I_2}}] = {val(c, MOLL, 2)}$")
    L.qa("application", "suivi", [
        ("Qu'est-ce que la trempe d'un prélèvement, et à quoi sert-elle ?",
         ["On refroidit brutalement le prélèvement (ou on le dilue fortement).", "On utilise ainsi un facteur cinétique pour bloquer la réaction pendant le titrage du prélèvement."],
         "Refroidir brutalement pour bloquer la réaction"),
        ("Quelle méthode physique choisir pour suivre une réaction qui forme une espèce colorée ?",
         ["La spectrophotométrie : l'absorbance est proportionnelle à la concentration de l'espèce colorée (Beer-Lambert)."], "La spectrophotométrie"),
        ("Quelle méthode choisir pour suivre une réaction en solution qui consomme ou produit des ions ?",
         ["La conductimétrie : la conductivité de la solution dépend des ions présents (loi de Kohlrausch)."], "La conductimétrie"),
        ("Une réaction produit un gaz. Comment peut-on suivre son avancement ?",
         ["En mesurant la pression (manométrie) ou le volume de gaz dégagé.", "La loi des gaz parfaits $PV = nRT$ permet d'en déduire la quantité de gaz formée."], "Par la pression ou le volume de gaz"),
        ("La précipitation du chlorure d'argent est-elle une transformation lente ou rapide ? Peut-on en faire une étude cinétique au lycée ?",
         ["Le précipité blanc apparaît instantanément : la transformation est rapide.", "On ne peut pas suivre son évolution : l'étude cinétique porte sur les transformations lentes."],
         "Rapide : pas d'étude cinétique possible"),
    ])
    # --- facteurs cinétiques (8)
    L.vf("intermediaire", "facteurs-cinetiques", [
        ("Une élévation de température accélère en général une transformation chimique.", True, "Vrai : l'agitation thermique rend les chocs entre entités plus fréquents et plus énergétiques."),
        ("Placer des aliments au réfrigérateur ralentit les réactions qui les dégradent.", True, "Vrai : la température est un facteur cinétique ; le froid ralentit les transformations."),
        ("Augmenter la concentration des réactifs ralentit une transformation.", False, "Faux : des entités plus nombreuses par unité de volume se rencontrent plus souvent ; la transformation est plus rapide."),
        ("Un facteur cinétique modifie l'état final d'une transformation.", False, "Faux : il modifie la vitesse, pas le bilan ni l'état final."),
        ("La vitesse d'une réaction est maximale au début, quand les réactifs sont les plus concentrés.", True, "Vrai : elle diminue ensuite à mesure que les réactifs sont consommés."),
    ])
    L.qa("approfondissement", "facteurs-cinetiques", [
        ("Pourquoi un morceau de métal réagit-il plus vivement avec un acide concentré qu'avec un acide dilué ?",
         ["La concentration est un facteur cinétique : à forte concentration, les chocs efficaces entre les ions et le métal sont plus fréquents."], "Les chocs efficaces sont plus fréquents"),
        ("Le lait tourne en quelques heures à température ambiante, mais se conserve plusieurs jours au réfrigérateur. Expliquer.",
         ["La dégradation du lait met en jeu des transformations chimiques.", "À basse température, l'agitation thermique est plus faible : les chocs sont moins fréquents et moins énergétiques, la dégradation est ralentie."],
         "Le froid ralentit les transformations"),
        ("Pour accélérer une synthèse lente sans changer son rendement, quels facteurs cinétiques peut-on utiliser ?",
         ["Chauffer le milieu réactionnel (souvent à reflux).", "Augmenter la concentration des réactifs ou ajouter un catalyseur."],
         "Température, concentration, catalyseur"),
    ])
    # --- catalyse (8)
    L.vf("intermediaire", "catalyse", [
        ("Un catalyseur augmente le rendement d'une transformation.", False, "Faux : il accélère la transformation mais ne modifie pas l'état final, donc pas le rendement."),
        ("Un catalyseur apparaît dans l'équation de la réaction.", False, "Faux : il est consommé puis régénéré, il n'apparaît pas dans le bilan."),
        ("Un catalyseur agit en petite quantité et se retrouve intact en fin de réaction.", True, "Vrai : il est régénéré."),
    ])
    L.qa("application", "catalyse", [
        ("Des ions $\\mathrm{Fe^{3+}}$ en solution catalysent la décomposition de l'eau oxygénée. De quel type de catalyse s'agit-il ?",
         ["Le catalyseur et le réactif sont dans la même phase (solution aqueuse)."], "Catalyse homogène"),
        ("Dans un pot catalytique, du platine solide accélère la transformation de gaz d'échappement. De quel type de catalyse s'agit-il ?",
         ["Le catalyseur (solide) et les réactifs (gaz) sont dans des phases différentes."], "Catalyse hétérogène"),
        ("La catalase, présente dans le sang, décompose très rapidement l'eau oxygénée. De quel type de catalyse s'agit-il ?",
         ["Le catalyseur est une enzyme, un catalyseur biologique très sélectif."], "Catalyse enzymatique"),
        ("Quels produits obtient-on en décomposant l'eau oxygénée $\\mathrm{H_2O_2}$, avec ou sans catalyseur ?",
         ["$2\\,\\mathrm{H_2O_2} \\longrightarrow 2\\,\\mathrm{H_2O} + \\mathrm{O_2}$ : le catalyseur ne change pas les produits, seulement la vitesse."], "De l'eau et du dioxygène"),
        ("Comment vérifier expérimentalement qu'une espèce joue le rôle de catalyseur ?",
         ["La réaction est nettement plus rapide en sa présence.", "On la retrouve intacte (même quantité) en fin de réaction, et l'état final est le même qu'en son absence."],
         "Accélération, régénération, état final inchangé"),
    ])
    return L.fin()


# =====================================================================
#  Terminale — DÉCRIRE UN MOUVEMENT
# =====================================================================

def _poly(a, b, c, var="t"):
    """a t^2 + b t + c en LaTeX (a, b, c : Fraction)."""
    termes = []
    for coef, puis in ((a, 2), (b, 1), (c, 0)):
        if coef == 0:
            continue
        s = ex(float(coef)) if coef.denominator != 1 else str(coef.numerator)
        if puis and abs(coef) == 1:
            s = "-" if coef < 0 else ""
        mot = {2: var + "^2", 1: var, 0: ""}[puis]
        termes.append((coef < 0, s.lstrip("-") if termes else s, mot))
    if not termes:
        return "0"
    out = ""
    for i, (neg, s, mot) in enumerate(termes):
        if i == 0:
            out += s + mot
        else:
            out += (" - " if neg else " + ") + s + mot
    return out


def gen_T_decrire_mouvement():
    L = _Lot()
    F = Fraction
    # --- dérivation (10)
    cas = [
        ((F(0), F(3), F(0)), (F(-1), F(5), F(0)), F(1), "Un mobile"),
        ((F(0), F(2), F(0)), (F("-4.9"), F(10), F(0)), F(1), "Un ballon"),
        ((F(0), F(4), F(0)), (F("-4.9"), F(3), F(2)), F(1, 2), "Une balle"),
        ((F(0), F(5), F(0)), (F(2), F(0), F(0)), F(2), "Un point"),
        ((F("1.5"), F(2), F(0)), (F(0), F(0), F(0)), F(3), "Un chariot"),
        ((F(-2), F(8), F(0)), (F(0), F(3), F(0)), F(2), "Un mobile"),
    ]
    for (ax, bx, cx), (ay, by, cy), t0, qui in cas:
        vx, vy = 2 * ax * t0 + bx, 2 * ay * t0 + by
        Ax, Ay = 2 * ax, 2 * ay
        nv = math.hypot(vx, vy)
        dim2 = any((ay, by, cy))
        e = f"{qui} a pour équations horaires $x(t) = {_poly(ax, bx, cx)}$" + (f" et $y(t) = {_poly(ay, by, cy)}$" if dim2 else "") + f" (unités SI). Déterminer les coordonnées de ses vecteurs vitesse et accélération à $t = {ex(float(t0))}\\ \\mathrm{{s}}$, puis la valeur de sa vitesse."
        c = [f"$v_x = \\dfrac{{\\mathrm{{d}}x}}{{\\mathrm{{d}}t}} = {_poly(F(0), 2 * ax, bx)}$" + (f" ; $v_y = \\dfrac{{\\mathrm{{d}}y}}{{\\mathrm{{d}}t}} = {_poly(F(0), 2 * ay, by)}$" if dim2 else "") + ".",
             f"$a_x = {_poly(F(0), F(0), Ax)}$" + (f" ; $a_y = {_poly(F(0), F(0), Ay)}$" if dim2 else "") + " (accélération constante).",
             f"À $t = {ex(float(t0))}\\ \\mathrm{{s}}$ : $v_x = {ex(float(vx))}" + un(MS) + "$" + (f", $v_y = {ex(float(vy))}" + un(MS) + "$" if dim2 else "") +
             (f" ; $v = \\sqrt{{v_x^2 + v_y^2}} = {val(nv, MS)}$." if dim2 else ".")]
        r = (f"$\\vec v({ex(float(t0))}) = ({ex(float(vx))}\\ ;\\ {ex(float(vy))})$, $v \\approx {val(nv, MS)}$ ; $\\vec a = ({ex(float(Ax))}\\ ;\\ {ex(float(Ay))})$" if dim2
             else f"$v = {ex(float(vx))}" + un(MS) + f"$ ; $a = {ex(float(Ax))}" + un(MS2) + "$")
        L.add("application" if not dim2 else "intermediaire", "derivation", e, c, r)
    L.add("intermediaire", "derivation", "Lors d'un freinage, la position d'une voiture est $x(t) = 12t - t^2$ (unités SI), pour $t$ entre 0 et l'arrêt. À quelle date s'arrête-t-elle ? Quelle distance a-t-elle parcourue ?",
          ["$v_x = \\dfrac{\\mathrm{d}x}{\\mathrm{d}t} = 12 - 2t$ ; l'arrêt a lieu quand $v_x = 0$, soit $t = 6\\ \\mathrm{s}$.", "$x(6) = 12 \\times 6 - 6^2 = 36\\ \\mathrm{m}$ ; l'accélération vaut $a_x = -2\\ \\mathrm{m\\cdot s^{-2}}$."],
          "$t = 6\\ \\mathrm{s}$ ; $36\\ \\mathrm{m}$")
    L.add("application", "derivation", "La vitesse d'un mobile a pour coordonnées $v_x(t) = 3$ et $v_y(t) = 2t - 4$ (unités SI). Déterminer son vecteur accélération.",
          ["$a_x = \\dfrac{\\mathrm{d}v_x}{\\mathrm{d}t} = 0$ ; $a_y = \\dfrac{\\mathrm{d}v_y}{\\mathrm{d}t} = 2$.", "$\\vec a = 2\\,\\vec\\jmath$ : accélération constante, de valeur $2\\ \\mathrm{m\\cdot s^{-2}}$."],
          "$\\vec a = (0\\ ;\\ 2)$, en $\\mathrm{m\\cdot s^{-2}}$")
    L.add("approfondissement", "derivation", "Une voiture démarre en ligne droite : $x(t) = 1{,}2\\,t^2$ (unités SI). Calculer sa vitesse et son accélération à $t = 5{,}0\\ \\mathrm{s}$, et exprimer la vitesse en $\\mathrm{km\\cdot h^{-1}}$.",
          ["$v = \\dfrac{\\mathrm{d}x}{\\mathrm{d}t} = 2{,}4\\,t$ ; $a = \\dfrac{\\mathrm{d}v}{\\mathrm{d}t} = 2{,}4\\ \\mathrm{m\\cdot s^{-2}}$.", f"$v(5{{,}}0) = 2{{,}}4 \\times 5{{,}}0 = 12" + un(MS) + f"$, soit ${num(12 * 3.6, 2)}" + un(KMH) + "$."],
          f"$v = 12" + un(MS) + f"$ (${num(12 * 3.6, 2)}" + un(KMH) + "$) ; $a = 2{,}4\\ \\mathrm{m\\cdot s^{-2}}$")
    L.add("approfondissement", "derivation", "La trajectoire d'un mobile a pour équations horaires $x(t) = 2t$ et $y(t) = 3$ (unités SI). Quelle est l'équation de sa trajectoire ? Quelle est la nature de son mouvement ?",
          ["En éliminant $t$ : $y = 3$ quel que soit $x$ : la trajectoire est une droite horizontale.", "$\\vec v = (2\\ ;\\ 0)$ est constant : le mouvement est rectiligne uniforme, $\\vec a = \\vec 0$."],
          "Droite $y = 3$ ; rectiligne uniforme")
    # --- vitesse à partir d'un enregistrement (7)
    tau = 0.10
    xs = [round(1.0 * (i * tau) ** 2, 3) for i in range(7)]
    v2 = (xs[3] - xs[1]) / (2 * tau)
    v4 = (xs[5] - xs[3]) / (2 * tau)
    tab = " ; ".join(f"$x_{i} = {fx(x, 3)}$" for i, x in enumerate(xs))
    L.add("intermediaire", "vitesse-enregistrement", f"Un chariot est filmé avec $\\tau = 0{{,}}10\\ \\mathrm{{s}}$ entre deux images ; positions (en m) : {tab}. Estimer $v_2$ et $v_4$.",
          [f"$v_2 \\approx \\dfrac{{x_3 - x_1}}{{2\\tau}} = \\dfrac{{{fx(xs[3], 3)} - {fx(xs[1], 3)}}}{{0{{,}}20}} = {val(v2, MS, 2)}$.", f"$v_4 \\approx \\dfrac{{x_5 - x_3}}{{2\\tau}} = \\dfrac{{{fx(xs[5], 3)} - {fx(xs[3], 3)}}}{{0{{,}}20}} = {val(v4, MS, 2)}$."],
          f"$v_2 \\approx {val(v2, MS, 2)}$ ; $v_4 \\approx {val(v4, MS, 2)}$")
    a3 = (v4 - v2) / (2 * tau)
    L.add("approfondissement", "vitesse-enregistrement", f"Pour le même chariot, on a trouvé $v_2 \\approx {val(v2, MS, 2)}$ et $v_4 \\approx {val(v4, MS, 2)}$, avec $\\tau = 0{{,}}10\\ \\mathrm{{s}}$. Estimer l'accélération au point 3.",
          [f"$a_3 \\approx \\dfrac{{v_4 - v_2}}{{2\\tau}} = \\dfrac{{{num(v4, 2)} - {num(v2, 2)}}}{{0{{,}}20}} = {val(a3, MS2, 2)}$."], f"$a_3 \\approx {val(a3, MS2, 2)}$")
    tau = 0.050
    ys = [round(4.905 * (i * tau) ** 2, 3) for i in range(6)]
    vb2 = (ys[3] - ys[1]) / (2 * tau)
    vb4 = (ys[5] - ys[3]) / (2 * tau)
    tab = " ; ".join(f"$y_{i} = {fx(y, 3)}$" for i, y in enumerate(ys))
    L.add("probleme", "vitesse-enregistrement", f"Une bille tombe sans vitesse initiale ; on la filme avec $\\tau = 0{{,}}050\\ \\mathrm{{s}}$. Distances parcourues (en m, axe vers le bas) : {tab}. Estimer $v_2$, $v_4$, puis l'accélération en 3. Comparer à $g = 9{{,}}81\\ \\mathrm{{m\\cdot s^{{-2}}}}$.",
          [f"$v_2 \\approx \\dfrac{{{fx(ys[3], 3)} - {fx(ys[1], 3)}}}{{0{{,}}10}} = {val(vb2, MS, 3)}$ ; $v_4 \\approx \\dfrac{{{fx(ys[5], 3)} - {fx(ys[3], 3)}}}{{0{{,}}10}} = {val(vb4, MS, 3)}$.",
           f"$a_3 \\approx \\dfrac{{v_4 - v_2}}{{2\\tau}} = {val((vb4 - vb2) / 0.1, MS2, 3)}$ : c'est bien la valeur de $g$, aux erreurs de mesure près."],
          f"$a \\approx {val((vb4 - vb2) / 0.1, MS2, 3)}$")
    tau = 0.20
    xs = [round(4.0 * (i * tau) - 1.0 * (i * tau) ** 2, 3) for i in range(7)]
    w2, w4 = (xs[3] - xs[1]) / (2 * tau), (xs[5] - xs[3]) / (2 * tau)
    tab = " ; ".join(f"$x_{i} = {fx(x, 2)}$" for i, x in enumerate(xs))
    L.add("intermediaire", "vitesse-enregistrement", f"Un palet ralentit sur une piste rectiligne ; $\\tau = 0{{,}}20\\ \\mathrm{{s}}$ et ses positions (en m) sont : {tab}. Estimer $v_2$, $v_4$ puis l'accélération en 3. Interpréter son signe.",
          [f"$v_2 \\approx \\dfrac{{{fx(xs[3], 2)} - {fx(xs[1], 2)}}}{{0{{,}}40}} = {val(w2, MS, 2)}$ ; $v_4 \\approx \\dfrac{{{fx(xs[5], 2)} - {fx(xs[3], 2)}}}{{0{{,}}40}} = {val(w4, MS, 2)}$.",
           f"$a_3 \\approx \\dfrac{{v_4 - v_2}}{{2\\tau}} = {val((w4 - w2) / 0.4, MS2, 2)}$ : négative, $\\vec a$ est opposé à $\\vec v$, le palet freine."],
          f"$a_3 \\approx {val((w4 - w2) / 0.4, MS2, 2)}$")
    L.add("application", "vitesse-enregistrement", "Sur un enregistrement, les positions successives d'un palet sont alignées et espacées de $12\\ \\mathrm{cm}$, avec $\\tau = 40\\ \\mathrm{ms}$. Calculer sa vitesse et son accélération.",
          ["$v \\approx \\dfrac{0{,}24}{2 \\times 0{,}040} = 3{,}0\\ \\mathrm{m\\cdot s^{-1}}$, la même en chaque point.", "Le vecteur vitesse est constant : $\\vec a = \\vec 0$ (mouvement rectiligne uniforme)."],
          "$v = 3{,}0\\ \\mathrm{m\\cdot s^{-1}}$ ; $\\vec a = \\vec 0$")
    L.qa("approfondissement", "vitesse-enregistrement", [
        ("Sur un enregistrement, comment trace-t-on le vecteur vitesse $\\vec{v_i}$ au point $\\mathrm{M}_i$ ?",
         ["Il est tangent à la trajectoire en $\\mathrm{M}_i$ (parallèle à $\\mathrm{M}_{i-1}\\mathrm{M}_{i+1}$) et orienté dans le sens du mouvement.", "Sa longueur est proportionnelle à $v_i \\approx \\dfrac{\\mathrm{M}_{i-1}\\mathrm{M}_{i+1}}{2\\tau}$, selon l'échelle choisie."],
         "Tangent, dans le sens du mouvement, longueur proportionnelle à $v_i$"),
        ("Un élève obtient une accélération en $\\mathrm{m\\cdot s^{-1}}$. Que faut-il en penser ?",
         ["L'accélération est la dérivée de la vitesse par rapport au temps : elle s'exprime en $\\mathrm{m\\cdot s^{-2}}$.", "Une unité en $\\mathrm{m\\cdot s^{-1}}$ signale une division par le temps oubliée."],
         "Erreur : l'unité est le $\\mathrm{m\\cdot s^{-2}}$"),
    ])
    # --- normes (6)
    for vx, vy, quoi in [("3.0", "4.0", "v"), ("12", "-5.0", "v"), ("2.0", "-14.7", "v"), ("-6.0", "8.0", "OM"), ("7.0", "-2.4", "v"), ("1.5", "2.0", "OM")]:
        n = math.hypot(float(vx), float(vy))
        if quoi == "v":
            L.add("application", "norme", f"Le vecteur vitesse d'un mobile a pour coordonnées $v_x = {ex(vx)}" + un(MS) + f"$ et $v_y = {ex(vy)}" + un(MS) + "$. Calculer la valeur de sa vitesse.",
                  [f"$v = \\sqrt{{v_x^2 + v_y^2}} = \\sqrt{{{par(ex(vx))}^2 + {par(ex(vy))}^2}} = {val(n, MS, 2 if n < 10 else 3)}$."], f"$v \\approx {val(n, MS, 2 if n < 10 else 3)}$")
        else:
            L.add("application", "norme", f"Un point M a pour coordonnées $x = {ex(vx)}\\ \\mathrm{{m}}$ et $y = {ex(vy)}\\ \\mathrm{{m}}$. Calculer sa distance à l'origine O.",
                  [f"$\\mathrm{{OM}} = \\sqrt{{x^2 + y^2}} = \\sqrt{{{par(ex(vx))}^2 + {par(ex(vy))}^2}} = {val(n, 'm', 2)}$."], f"$\\mathrm{{OM}} = {val(n, 'm', 2)}$")
    # --- Frenet (9)
    for ctx, v, vt, R, vd, Rd in [("Une voiture aborde à $90\\ \\mathrm{km\\cdot h^{-1}}$ un virage circulaire de rayon $150\\ \\mathrm{m}$", 25.0, "90 km/h = 25,0 m/s", 150, "25{,}0", "150"),
                                  ("Un TGV roule à $300\\ \\mathrm{km\\cdot h^{-1}}$ dans une courbe de rayon $6\\,000\\ \\mathrm{m}$", 300 / 3.6, "300 km/h = 83,3 m/s", 6000, "83{,}3", "6\\,000"),
                                  ("Un enfant sur un manège tourne à $6{,}0\\ \\mathrm{m\\cdot s^{-1}}$ sur un cercle de rayon $8{,}0\\ \\mathrm{m}$", 6.0, None, 8.0, "6{,}0", "8{,}0"),
                                  ("La Station spatiale internationale tourne à $7{,}66\\ \\mathrm{km\\cdot s^{-1}}$ sur une orbite de rayon $6\\,780\\ \\mathrm{km}$", 7660, "7,66 km/s = 7 660 m/s ; 6 780 km = 6,78 × 10⁶ m", 6.78e6, "(7{,}66\\times 10^{3})", "6{,}78\\times 10^{6}")]:
        an = v * v / R
        L.add("application" if vt is None else "intermediaire", "frenet", ctx + ", à vitesse constante. Calculer son accélération.",
              ([f"Conversion : {vt}."] if vt else []) + ["Vitesse constante : $a_t = \\dfrac{\\mathrm{d}v}{\\mathrm{d}t} = 0$ ; il reste l'accélération normale, dirigée vers le centre.",
                                                         f"$a_n = \\dfrac{{v^2}}{{R}} = \\dfrac{{{vd}^2}}{{{Rd}}} = {val(an, MS2, 2 if vt is None else 3)}$."],
              f"$a = {val(an, MS2, 2 if vt is None else 3)}$, vers le centre")
    v = 2 * math.pi * 0.10 * 3000 / 60
    L.add("approfondissement", "frenet", "Le tube d'une centrifugeuse de laboratoire tourne à $3\\,000$ tours par minute sur un cercle de rayon $10\\ \\mathrm{cm}$. Calculer sa vitesse puis son accélération. Comparer à $g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$.",
          [f"$f = 50\\ \\mathrm{{tr\\cdot s^{{-1}}}}$ ; $v = 2\\pi R f = 2\\pi \\times 0{{,}}10 \\times 50 = {val(v, MS)}$.", f"$a_n = \\dfrac{{v^2}}{{R}} = {val(v * v / 0.10, MS2)}$, soit environ ${num(v * v / 0.10 / 9.81, 2)}$ fois $g$."],
          f"$a \\approx {val(v * v / 0.10, MS2)}$")
    an = 15 ** 2 / 50
    L.add("approfondissement", "frenet", "Sur une piste circulaire de rayon $50\\ \\mathrm{m}$, une voiture accélère : sa vitesse passe régulièrement de $10$ à $20\\ \\mathrm{m\\cdot s^{-1}}$ en $5{,}0\\ \\mathrm{s}$. Calculer $a_t$, $a_n$ et la valeur de l'accélération quand $v = 15\\ \\mathrm{m\\cdot s^{-1}}$.",
          ["$a_t = \\dfrac{\\mathrm{d}v}{\\mathrm{d}t} = \\dfrac{20 - 10}{5{,}0} = 2{,}0\\ \\mathrm{m\\cdot s^{-2}}$.", f"$a_n = \\dfrac{{15^2}}{{50}} = {val(an, MS2, 2)}$.",
           f"$a = \\sqrt{{a_t^2 + a_n^2}} = {val(math.hypot(2, an), MS2, 2)}$."], f"$a_t = 2{{,}}0$ ; $a_n = {num(an, 2)}$ ; $a \\approx {val(math.hypot(2, an), MS2, 2)}$")
    v = math.sqrt(4.0 * 100)
    L.add("probleme", "frenet", "Pour le confort des passagers, l'accélération normale d'un bus ne doit pas dépasser $4{,}0\\ \\mathrm{m\\cdot s^{-2}}$. Quelle vitesse maximale peut-il avoir dans un rond-point de rayon $100\\ \\mathrm{m}$ ?",
          ["$a_n = \\dfrac{v^2}{R} \\leqslant 4{,}0$ donc $v \\leqslant \\sqrt{4{,}0 \\times 100}$.", f"$v_{{\\max}} = {val(v, MS, 2)}$, soit ${num(v * 3.6, 2)}" + un(KMH) + "$."],
          f"$v_{{\\max}} = {val(v, MS, 2)}$ (${num(v * 3.6, 2)}" + un(KMH) + "$)")
    a1, a2 = (50 / 3.6) ** 2 / 80, (100 / 3.6) ** 2 / 80
    L.add("intermediaire", "frenet", "Une voiture prend un virage de rayon $80\\ \\mathrm{m}$ à $50\\ \\mathrm{km\\cdot h^{-1}}$, puis le même virage à $100\\ \\mathrm{km\\cdot h^{-1}}$. Calculer l'accélération normale dans les deux cas et comparer.",
          [f"$a_1 = \\dfrac{{(50/3{{,}}6)^2}}{{80}} = {val(a1, MS2)}$ ; $a_2 = \\dfrac{{(100/3{{,}}6)^2}}{{80}} = {val(a2, MS2)}$.", "La vitesse double, l'accélération normale est multipliée par 4 : le risque de dérapage augmente fortement."],
          f"${val(a1, MS2)}$ puis ${val(a2, MS2)}$ : × 4")
    R = 20 ** 2 / 3.0
    L.add("intermediaire", "frenet", "Une moto roule à $72\\ \\mathrm{km\\cdot h^{-1}}$ dans un virage ; son accélération normale vaut $3{,}0\\ \\mathrm{m\\cdot s^{-2}}$. Calculer le rayon du virage.",
          ["$v = 72 / 3{,}6 = 20\\ \\mathrm{m\\cdot s^{-1}}$.", f"$R = \\dfrac{{v^2}}{{a_n}} = \\dfrac{{20^2}}{{3{{,}}0}} = {val(R, 'm', 2)}$."], f"$R \\approx {val(R, 'm', 2)}$")
    # --- circulaire uniforme (6)
    for ctx, R, T, rt, tt in [("La Lune décrit autour de la Terre une orbite quasi circulaire de rayon $3{,}84\\times 10^{8}\\ \\mathrm{m}$ en $27{,}3$ jours.", 3.84e8, 27.3 * 86400, "3{,}84\\times 10^{8}", f"27{{,}}3 \\times 86\\,400 = {sci(27.3 * 86400)}"),
                              ("La Terre tourne autour du Soleil sur une orbite quasi circulaire de rayon $1{,}50\\times 10^{11}\\ \\mathrm{m}$ en $365{,}25$ jours.", 1.50e11, 365.25 * 86400, "1{,}50\\times 10^{11}", f"365{{,}}25 \\times 86\\,400 = {sci(365.25 * 86400)}"),
                              ("Un point de l'équateur terrestre tourne avec la Terre sur un cercle de rayon $6\\,378\\ \\mathrm{km}$ en $86\\,164\\ \\mathrm{s}$ (jour sidéral).", 6.378e6, 86164, "6{,}378\\times 10^{6}", "86\\,164"),
                              ("Une nacelle d'une grande roue de rayon $60\\ \\mathrm{m}$ fait un tour en $30\\ \\mathrm{min}$.", 60, 1800, "60", "1\\,800"),
                              ("Un satellite géostationnaire tourne sur un cercle de rayon $4{,}22\\times 10^{7}\\ \\mathrm{m}$ en $86\\,164\\ \\mathrm{s}$.", 4.22e7, 86164, "4{,}22\\times 10^{7}", "86\\,164")]:
        v = 2 * math.pi * R / T
        L.add("intermediaire", "circulaire-uniforme", ctx + " Calculer sa vitesse et son accélération.",
              [f"$T = {tt}\\ \\mathrm{{s}}$ ; $v = \\dfrac{{2\\pi R}}{{T}} = \\dfrac{{2\\pi \\times {rt}}}{{{sci(T) if T > 1e5 else tt}}} = {val(v, MS)}$.",
               f"Mouvement circulaire uniforme : $a = \\dfrac{{v^2}}{{R}} = {val(v * v / R, MS2)}$, dirigée vers le centre."],
              f"$v \\approx {val(v, MS)}$ ; $a \\approx {val(v * v / R, MS2)}$")
    L.add("approfondissement", "circulaire-uniforme", "Deux manèges ont le même rayon ; l'un fait un tour en $10\\ \\mathrm{s}$, l'autre en $5{,}0\\ \\mathrm{s}$. Par combien est multipliée l'accélération normale quand on passe du premier au second ?",
          ["$v = \\dfrac{2\\pi R}{T}$ : la période est divisée par 2, la vitesse doublée.", "$a = \\dfrac{v^2}{R}$ est multipliée par $2^2 = 4$."], "Par 4")
    # --- nature du mouvement (7)
    L.qa("intermediaire", "nature-mouvement", [
        ("Un palet glisse sans frottement en ligne droite à vitesse constante. Caractériser son vecteur accélération.",
         ["Le vecteur vitesse est constant en norme et en direction."], "$\\vec a = \\vec 0$"),
        ("Une bille tombe verticalement en chute libre. Caractériser son vecteur accélération.",
         ["Mouvement rectiligne uniformément accéléré : $\\vec a = \\vec g$, constant, vertical vers le bas, colinéaire à $\\vec v$."], "$\\vec a = \\vec g$ : constant, vers le bas"),
        ("Une voiture freine en ligne droite avec une décélération constante. Comment sont orientés $\\vec v$ et $\\vec a$ ?",
         ["Mouvement rectiligne uniformément décéléré : $\\vec a$ est constant et colinéaire à $\\vec v$.", "Il est de sens opposé à $\\vec v$ puisque la voiture ralentit."],
         "Colinéaires et de sens opposés"),
        ("Un satellite décrit une orbite circulaire à vitesse constante en valeur. Son accélération est-elle nulle ?",
         ["Non : la direction de $\\vec v$ change en permanence.", "$\\vec a = \\dfrac{v^2}{R}\\,\\vec{u_n}$ : accélération centripète, de norme constante, dirigée vers le centre."],
         "Non : elle est centripète"),
        ("Dans le repère de Frenet, que traduit la composante tangentielle $a_t$ de l'accélération ? et la composante normale $a_n$ ?",
         ["$a_t = \\dfrac{\\mathrm{d}v}{\\mathrm{d}t}$ traduit la variation de la valeur de la vitesse.", "$a_n = \\dfrac{v^2}{R}$ traduit le changement de direction (la courbure)."],
         "$a_t$ : valeur de la vitesse ; $a_n$ : direction"),
        ("Une voiture prend un virage en accélérant. Quelles composantes de l'accélération sont non nulles ?",
         ["La valeur de la vitesse augmente : $a_t > 0$.", "La trajectoire est courbe : $a_n = \\dfrac{v^2}{R} > 0$."], "Les deux"),
        ("Pour un mouvement rectiligne, pourquoi la composante normale de l'accélération est-elle nulle ?",
         ["Une droite correspond à un rayon de courbure infini : $a_n = \\dfrac{v^2}{R} \\to 0$.", "L'accélération est alors portée par la trajectoire."], "Car le rayon de courbure est infini"),
    ])
    # --- cours (5)
    L.vf("application", "cours", [
        ("Un mobile dont la vitesse est constante en valeur a forcément une accélération nulle.", False, "Faux : en mouvement circulaire uniforme, la direction de $\\vec v$ change, donc $\\vec a \\neq \\vec 0$."),
        ("Le vecteur vitesse est la dérivée du vecteur position par rapport au temps.", True, "Vrai : $\\vec v = \\dfrac{\\mathrm{d}\\vec{\\mathrm{OM}}}{\\mathrm{d}t}$."),
        ("Dans un mouvement circulaire uniforme, l'accélération est dirigée vers l'extérieur du cercle.", False, "Faux : elle est centripète, dirigée vers le centre."),
        ("L'accélération normale $\\dfrac{v^2}{R}$ est d'autant plus grande que le virage est serré.", True, "Vrai : $R$ est au dénominateur ; un petit rayon donne une grande accélération normale."),
        ("Un mouvement n'a de sens que dans un référentiel donné.", True, "Vrai : la trajectoire et la vitesse dépendent du référentiel choisi."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — ÉCOULEMENT D'UN FLUIDE
# =====================================================================

def gen_T_ecoulement_fluide():
    L = _Lot()
    RHO = " On prendra $\\rho_{\\text{eau}} = 1{,}00\\times 10^{3}\\ \\mathrm{kg\\cdot m^{-3}}$ et $g = 9{,}81\\ \\mathrm{N\\cdot kg^{-1}}$."
    # --- poussée d'Archimède (9)
    V = 0.050 ** 3
    L.add("application", "archimede", "Un cube d'aluminium de $5{,}0\\ \\mathrm{cm}$ d'arête est entièrement immergé dans l'eau. Calculer la valeur de la poussée d'Archimède." + RHO,
          [f"$V = (5{{,}}0\\times 10^{{-2}})^3 = {val(V, 'm^3', 2)}$.", f"$F_A = \\rho_{{\\text{{eau}}}}\\,V\\,g = 1{{,}}00\\times 10^{{3}} \\times {sci(V, 2)} \\times 9{{,}}81 = {val(1000 * V * G, 'N', 2)}$.",
           "Elle ne dépend pas de la nature du cube (aluminium), seulement du volume immergé et du fluide."],
          f"$F_A \\approx {val(1000 * V * G, 'N', 2)}$")
    F = 1025 * 0.070 * G
    L.add("application", "archimede", "Un nageur dont le volume immergé vaut $70\\ \\mathrm{L}$ se baigne dans la mer ($\\rho = 1\\,025\\ \\mathrm{kg\\cdot m^{-3}}$). Calculer la poussée d'Archimède qu'il subit ($g = 9{,}81\\ \\mathrm{N\\cdot kg^{-1}}$).",
          ["$V = 70\\ \\mathrm{L} = 7{,}0\\times 10^{-2}\\ \\mathrm{m^3}$.", f"$F_A = 1\\,025 \\times 7{{,}}0\\times 10^{{-2}} \\times 9{{,}}81 = {val(F, 'N', 2)}$."], f"$F_A \\approx {val(F, 'N', 2)}$")
    fr_ = 917 / 1025
    L.add("probleme", "archimede", "Un iceberg flotte dans l'océan. Masse volumique de la glace : $917\\ \\mathrm{kg\\cdot m^{-3}}$ ; de l'eau de mer : $1\\,025\\ \\mathrm{kg\\cdot m^{-3}}$. Quelle fraction de son volume est immergée ?",
          ["À l'équilibre, poussée = poids : $\\rho_{\\text{mer}}\\,V_{\\text{imm}}\\,g = \\rho_{\\text{glace}}\\,V\\,g$.", f"$\\dfrac{{V_{{\\text{{imm}}}}}}{{V}} = \\dfrac{{917}}{{1\\,025}} = {num(fr_)}$, soit ${pct(fr_)}$ : seule la « pointe » dépasse."],
          f"${pct(fr_)}$ du volume")
    L.add("intermediaire", "archimede", "Une planche de sapin ($\\rho = 450\\ \\mathrm{kg\\cdot m^{-3}}$) flotte sur l'eau douce. Quelle fraction de son volume est immergée ?",
          ["Équilibre : $\\rho_{\\text{eau}}\\,V_{\\text{imm}} = \\rho_{\\text{bois}}\\,V$.", "$\\dfrac{V_{\\text{imm}}}{V} = \\dfrac{450}{1\\,000} = 0{,}45$, soit $45\\ \\%$."], "$45\\ \\%$")
    F = 1.2 * 5.0 * G
    L.add("intermediaire", "archimede", "Un ballon gonflé à l'hélium a un volume de $5{,}0\\ \\mathrm{m^3}$. Calculer la poussée d'Archimède exercée par l'air ($\\rho_{\\text{air}} = 1{,}2\\ \\mathrm{kg\\cdot m^{-3}}$, $g = 9{,}81\\ \\mathrm{N\\cdot kg^{-1}}$).",
          [f"$F_A = \\rho_{{\\text{{air}}}}\\,V\\,g = 1{{,}}2 \\times 5{{,}}0 \\times 9{{,}}81 = {val(F, 'N', 2)}$."], f"$F_A \\approx {val(F, 'N', 2)}$")
    P, FA = 7800 * 1e-4 * G, 1000 * 1e-4 * G
    L.add("intermediaire", "archimede", "Une bille d'acier ($\\rho = 7\\,800\\ \\mathrm{kg\\cdot m^{-3}}$) de volume $100\\ \\mathrm{cm^3}$ est lâchée dans l'eau. Comparer son poids et la poussée d'Archimède. Flotte-t-elle ?" + RHO,
          ["$V = 100\\ \\mathrm{cm^3} = 1{,}00\\times 10^{-4}\\ \\mathrm{m^3}$.", f"$P = \\rho_{{\\text{{acier}}}}\\,V\\,g = {val(P, 'N')}$ ; $F_A = \\rho_{{\\text{{eau}}}}\\,V\\,g = {val(FA, 'N')}$.",
           "Le poids l'emporte : la bille coule ($\\rho_{\\text{acier}} > \\rho_{\\text{eau}}$)."],
          "Elle coule")
    L.add("probleme", "archimede", "Une péniche chargée a une masse de $300$ tonnes. Quel volume d'eau douce déplace-t-elle quand elle flotte ?",
          ["À l'équilibre, $F_A = P$ : $\\rho_{\\text{eau}}\\,V_{\\text{imm}}\\,g = m\\,g$.", "$V_{\\text{imm}} = \\dfrac{m}{\\rho_{\\text{eau}}} = \\dfrac{3{,}00\\times 10^{5}}{1{,}00\\times 10^{3}} = 300\\ \\mathrm{m^3}$."],
          "$300\\ \\mathrm{m^3}$")
    P, FA = 2.0 * G, 1000 * 0.80e-3 * G
    L.add("intermediaire", "archimede", "Un objet de masse $2{,}0\\ \\mathrm{kg}$ et de volume $0{,}80\\ \\mathrm{L}$ est suspendu à un dynamomètre et plongé entièrement dans l'eau. Quelle valeur indique le dynamomètre (« poids apparent ») ?" + RHO,
          [f"$P = mg = {val(P, 'N')}$ ; $F_A = 1{{,}}00\\times 10^{{3}} \\times 8{{,}}0\\times 10^{{-4}} \\times 9{{,}}81 = {val(FA, 'N')}$.", f"Le dynamomètre indique $P - F_A = {val(P - FA, 'N')}$."],
          f"${val(P - FA, 'N')}$")
    L.add("approfondissement", "archimede", "Un œuf frais coule dans l'eau du robinet mais flotte dans une eau très salée. Expliquer.",
          ["L'œuf a une masse volumique légèrement supérieure à celle de l'eau douce : son poids dépasse la poussée, il coule.",
           "L'eau salée est plus dense : la poussée d'Archimède, proportionnelle à $\\rho_{\\text{fluide}}$, devient supérieure au poids de l'œuf, qui remonte."],
          "La poussée dépend de la masse volumique du fluide")
    # --- débit (8)
    D = 10e-3 / 25
    L.add("application", "debit", "Un robinet remplit un seau de $10\\ \\mathrm{L}$ en $25\\ \\mathrm{s}$. Calculer le débit volumique en $\\mathrm{m^3\\cdot s^{-1}}$.",
          ["$V = 10\\ \\mathrm{L} = 1{,}0\\times 10^{-2}\\ \\mathrm{m^3}$.", f"$D_v = \\dfrac{{V}}{{\\Delta t}} = \\dfrac{{1{{,}}0\\times 10^{{-2}}}}{{25}} = {val(D, M3S, 2)}$."], f"$D_v = {val(D, M3S, 2)}$")
    L.add("application", "debit", "Une douche a un débit de $12\\ \\mathrm{L}$ par minute. Exprimer ce débit en $\\mathrm{m^3\\cdot s^{-1}}$.",
          ["$D_v = \\dfrac{12\\times 10^{-3}\\ \\mathrm{m^3}}{60\\ \\mathrm{s}}$.", f"$D_v = {val(12e-3 / 60, M3S, 2)}$."], f"$D_v = {val(12e-3 / 60, M3S, 2)}$")
    L.add("application", "debit", "Convertir un débit de $900\\ \\mathrm{L\\cdot h^{-1}}$ en $\\mathrm{m^3\\cdot s^{-1}}$.",
          ["$900\\ \\mathrm{L} = 0{,}900\\ \\mathrm{m^3}$ et $1\\ \\mathrm{h} = 3\\,600\\ \\mathrm{s}$.", f"$D_v = \\dfrac{{0{{,}}900}}{{3\\,600}} = {val(0.9 / 3600, M3S, 2)}$."], f"$D_v = {val(0.9 / 3600, M3S, 2)}$")
    t = 50 / 2.5e-3
    L.add("probleme", "debit", "On remplit une piscine de $50\\ \\mathrm{m^3}$ avec un tuyau de débit $2{,}5\\ \\mathrm{L\\cdot s^{-1}}$. Combien de temps faut-il ?",
          ["$D_v = 2{,}5\\times 10^{-3}\\ \\mathrm{m^3\\cdot s^{-1}}$.", f"$\\Delta t = \\dfrac{{V}}{{D_v}} = \\dfrac{{50}}{{2{{,}}5\\times 10^{{-3}}}} = {val(t, 's', 2)}$, soit environ ${num(t / 3600, 2)}\\ \\mathrm{{h}}$."],
          f"$\\Delta t = {val(t, 's', 2)}$ (environ ${num(t / 3600, 2)}\\ \\mathrm{{h}}$)")
    S = math.pi * 0.010 ** 2
    L.add("intermediaire", "debit", "L'eau circule à $1{,}5\\ \\mathrm{m\\cdot s^{-1}}$ dans un tuyau de diamètre intérieur $2{,}0\\ \\mathrm{cm}$. Calculer le débit volumique.",
          [f"$S = \\pi r^2 = \\pi \\times (1{{,}}0\\times 10^{{-2}})^2 = {val(S, 'm^2', 2)}$.", f"$D_v = S\\,v = {sci(S, 2)} \\times 1{{,}}5 = {val(S * 1.5, M3S, 2)}$, soit ${num(S * 1.5 * 1000, 2)}\\ \\mathrm{{L\\cdot s^{{-1}}}}$."],
          f"$D_v \\approx {val(S * 1.5, M3S, 2)}$")
    v = 300 / 450
    L.add("probleme", "debit", "Le débit moyen de la Seine à Paris est d'environ $300\\ \\mathrm{m^3\\cdot s^{-1}}$ ; la section du fleuve y est de l'ordre de $450\\ \\mathrm{m^2}$. Estimer la vitesse moyenne de l'eau.",
          [f"$v = \\dfrac{{D_v}}{{S}} = \\dfrac{{300}}{{450}} = {val(v, MS, 2)}$."], f"$v \\approx {val(v, MS, 2)}$")
    S = math.pi * 0.0125 ** 2
    v = 5.0e-3 / 60 / S
    L.add("probleme", "debit", "Le cœur envoie $5{,}0\\ \\mathrm{L}$ de sang par minute dans l'aorte, de diamètre $2{,}5\\ \\mathrm{cm}$. Estimer la vitesse moyenne du sang dans l'aorte.",
          [f"$D_v = \\dfrac{{5{{,}}0\\times 10^{{-3}}}}{{60}} = {val(5e-3 / 60, M3S, 2)}$ ; $S = \\pi \\times (1{{,}}25\\times 10^{{-2}})^2 = {val(S, 'm^2', 2)}$.",
           f"$v = \\dfrac{{D_v}}{{S}} = {val(v, MS, 2)}$."], f"$v \\approx {val(v, MS, 2)}$")
    S = math.pi * 0.0075 ** 2
    L.add("intermediaire", "debit", "Un tuyau d'arrosage de diamètre intérieur $15\\ \\mathrm{mm}$ débite $0{,}30\\ \\mathrm{L\\cdot s^{-1}}$. Calculer la vitesse de l'eau dans le tuyau.",
          [f"$S = \\pi \\times (7{{,}}5\\times 10^{{-3}})^2 = {val(S, 'm^2', 2)}$ ; $D_v = 3{{,}}0\\times 10^{{-4}}\\ \\mathrm{{m^3\\cdot s^{{-1}}}}$.", f"$v = \\dfrac{{D_v}}{{S}} = {val(3e-4 / S, MS, 2)}$."],
          f"$v \\approx {val(3e-4 / S, MS, 2)}$")
    # --- conservation du débit (8)
    L.add("application", "conservation-debit", "Dans une conduite, l'eau passe d'une section de $12\\ \\mathrm{cm^2}$ à une section de $3{,}0\\ \\mathrm{cm^2}$. Sa vitesse vaut $0{,}50\\ \\mathrm{m\\cdot s^{-1}}$ dans la partie large. Calculer sa vitesse dans la partie étroite.",
          ["Conservation du débit : $S_1 v_1 = S_2 v_2$.", "$v_2 = v_1 \\times \\dfrac{S_1}{S_2} = 0{,}50 \\times \\dfrac{12}{3{,}0} = 2{,}0\\ \\mathrm{m\\cdot s^{-1}}$ (les sections sont dans la même unité)."],
          "$v_2 = 2{,}0\\ \\mathrm{m\\cdot s^{-1}}$")
    L.add("intermediaire", "conservation-debit", "Une conduite de diamètre $4{,}0\\ \\mathrm{cm}$ se rétrécit à $2{,}0\\ \\mathrm{cm}$. L'eau y entre à $0{,}50\\ \\mathrm{m\\cdot s^{-1}}$. Quelle est sa vitesse dans la partie étroite ?",
          ["$S = \\pi \\dfrac{d^2}{4}$ : le diamètre est divisé par 2, la section par 4.", "$v_2 = 0{,}50 \\times 4 = 2{,}0\\ \\mathrm{m\\cdot s^{-1}}$."], "$v_2 = 2{,}0\\ \\mathrm{m\\cdot s^{-1}}$")
    v2 = 3.0 * (45 / 12) ** 2
    L.add("probleme", "conservation-debit", "Dans un tuyau d'incendie de diamètre $45\\ \\mathrm{mm}$, l'eau circule à $3{,}0\\ \\mathrm{m\\cdot s^{-1}}$. La lance a un orifice de $12\\ \\mathrm{mm}$ de diamètre. Calculer la vitesse de l'eau à la sortie.",
          ["$v_2 = v_1 \\dfrac{S_1}{S_2} = v_1 \\left(\\dfrac{d_1}{d_2}\\right)^2$.", f"$v_2 = 3{{,}}0 \\times \\left(\\dfrac{{45}}{{12}}\\right)^2 = {val(v2, MS, 2)}$."], f"$v_2 \\approx {val(v2, MS, 2)}$")
    L.add("application", "conservation-debit", "En pinçant l'embout d'un tuyau d'arrosage, on divise la section de sortie par 3. Que devient la vitesse de l'eau qui sort (même débit) ?",
          ["$D_v = S\\,v$ est conservé : si $S$ est divisée par 3, $v$ est multipliée par 3."], "Elle est multipliée par 3")
    L.add("intermediaire", "conservation-debit", "Une rivière de $40\\ \\mathrm{m}$ de large et $2{,}0\\ \\mathrm{m}$ de profondeur coule à $0{,}50\\ \\mathrm{m\\cdot s^{-1}}$. Elle passe dans un goulet de $25\\ \\mathrm{m}$ de large, de même profondeur. Quelle est la vitesse de l'eau dans le goulet ?",
          ["$S_1 = 40 \\times 2{,}0 = 80\\ \\mathrm{m^2}$ ; $S_2 = 25 \\times 2{,}0 = 50\\ \\mathrm{m^2}$.", "$v_2 = 0{,}50 \\times \\dfrac{80}{50} = 0{,}80\\ \\mathrm{m\\cdot s^{-1}}$."],
          "$v_2 = 0{,}80\\ \\mathrm{m\\cdot s^{-1}}$")
    S = 40 * math.pi * 0.0005 ** 2
    L.add("probleme", "conservation-debit", "Un pommeau de douche débite $0{,}20\\ \\mathrm{L\\cdot s^{-1}}$ par $40$ trous de $1{,}0\\ \\mathrm{mm}$ de diamètre. Calculer la vitesse de l'eau à la sortie des trous.",
          [f"Section totale : $S = 40 \\times \\pi \\times (5{{,}}0\\times 10^{{-4}})^2 = {val(S, 'm^2', 2)}$.", f"$v = \\dfrac{{D_v}}{{S}} = \\dfrac{{2{{,}}0\\times 10^{{-4}}}}{{{sci(S, 2)}}} = {val(2e-4 / S, MS, 2)}$."],
          f"$v \\approx {val(2e-4 / S, MS, 2)}$")
    L.add("approfondissement", "conservation-debit", "Une artère dont le diamètre est réduit de moitié par une plaque d'athérome (sténose) transporte le même débit sanguin. Comment varie la vitesse du sang au rétrécissement ?",
          ["Le diamètre est divisé par 2, donc la section par 4.", "Le débit étant conservé, la vitesse est multipliée par 4."], "Elle est multipliée par 4")
    S = 2.0e-3 / 2.0
    d = 2 * math.sqrt(S / math.pi)
    L.add("approfondissement", "conservation-debit", "On veut transporter $2{,}0\\ \\mathrm{L\\cdot s^{-1}}$ d'eau sans dépasser $2{,}0\\ \\mathrm{m\\cdot s^{-1}}$ dans la conduite. Quel diamètre minimal faut-il choisir ?",
          [f"$S \\geqslant \\dfrac{{D_v}}{{v}} = \\dfrac{{2{{,}}0\\times 10^{{-3}}}}{{2{{,}}0}} = {val(S, 'm^2', 2)}$.", f"$d = 2\\sqrt{{\\dfrac{{S}}{{\\pi}}}} = {val(d, 'm', 2)}$, soit ${num(d * 100, 2)}\\ \\mathrm{{cm}}$."],
          f"$d \\approx {num(d * 100, 2)}\\ \\mathrm{{cm}}$")
    # --- Bernoulli (9)
    for h in ("0.80", "5.0", "1.25"):
        v = math.sqrt(2 * G * float(h))
        L.add("application", "bernoulli", f"Un réservoir ouvert se vide par un petit orifice situé ${vex(h, 'm')}$ sous la surface libre. En négligeant la vitesse de la surface, calculer la vitesse de l'eau à la sortie ($g = 9{{,}}81\\ \\mathrm{{N\\cdot kg^{{-1}}}}$).",
              ["Bernoulli entre la surface et l'orifice : même pression $P_{\\text{atm}}$, $v_1 \\approx 0$, d'où $\\rho g h = \\dfrac{1}{2}\\rho v_2^2$.",
               f"$v_2 = \\sqrt{{2gh}} = \\sqrt{{2 \\times 9{{,}}81 \\times {ex(h)}}} = {val(v, MS)}$."],
              f"$v_2 \\approx {val(v, MS)}$")
    dP = 1000 * G * 30
    L.add("intermediaire", "bernoulli", "L'eau d'un château d'eau est au repos ; la surface libre est $30\\ \\mathrm{m}$ au-dessus d'un robinet fermé situé au pied. De combien la pression au robinet dépasse-t-elle la pression atmosphérique ?" + RHO,
          ["Bernoulli avec $v = 0$ partout : $P_{\\text{bas}} - P_{\\text{haut}} = \\rho g h$.", f"$\\Delta P = 1{{,}}00\\times 10^{{3}} \\times 9{{,}}81 \\times 30 = {val(dP, 'Pa')}$, soit environ ${num(dP / 1e5, 2)}$ bar."],
          f"$\\Delta P \\approx {val(dP, 'Pa')}$")
    P = 1.013e5 + 1025 * G * 10
    L.add("intermediaire", "bernoulli", "Calculer la pression subie par un plongeur à $10\\ \\mathrm{m}$ de profondeur dans la mer ($\\rho = 1\\,025\\ \\mathrm{kg\\cdot m^{-3}}$, $P_{\\text{atm}} = 1{,}013\\times 10^{5}\\ \\mathrm{Pa}$, $g = 9{,}81\\ \\mathrm{N\\cdot kg^{-1}}$).",
          ["Fluide au repos : $P = P_{\\text{atm}} + \\rho g h$.", f"$P = 1{{,}}013\\times 10^{{5}} + 1\\,025 \\times 9{{,}}81 \\times 10 = {val(P, 'Pa')}$ : environ deux fois la pression atmosphérique."],
          f"$P \\approx {val(P, 'Pa')}$")
    h = 7.0 ** 2 / (2 * G)
    L.add("intermediaire", "bernoulli", "L'eau sort d'un orifice percé dans un réservoir à $7{,}0\\ \\mathrm{m\\cdot s^{-1}}$. À quelle profondeur sous la surface libre se trouve l'orifice ($g = 9{,}81\\ \\mathrm{N\\cdot kg^{-1}}$) ?",
          ["Torricelli : $v = \\sqrt{2gh}$, donc $h = \\dfrac{v^2}{2g}$.", f"$h = \\dfrac{{7{{,}}0^2}}{{2 \\times 9{{,}}81}} = {val(h, 'm', 2)}$."], f"$h \\approx {val(h, 'm', 2)}$")
    v = math.sqrt(2 * G * 1.8)
    S = math.pi * 0.005 ** 2
    L.add("probleme", "bernoulli", "Un tonneau de récupération d'eau de pluie est percé d'un trou de $1{,}0\\ \\mathrm{cm}$ de diamètre, $1{,}8\\ \\mathrm{m}$ sous la surface. Calculer la vitesse de sortie puis le débit ($g = 9{,}81\\ \\mathrm{N\\cdot kg^{-1}}$).",
          [f"$v = \\sqrt{{2gh}} = \\sqrt{{2 \\times 9{{,}}81 \\times 1{{,}}8}} = {val(v, MS, 2)}$.", f"$S = \\pi \\times (5{{,}}0\\times 10^{{-3}})^2 = {val(S, 'm^2', 2)}$ ; $D_v = S\\,v = {val(S * v, M3S, 2)}$, soit ${num(S * v * 1000, 2)}\\ \\mathrm{{L\\cdot s^{{-1}}}}$."],
          f"$v \\approx {val(v, MS, 2)}$ ; $D_v \\approx {val(S * v, M3S, 2)}$")
    dP = 1000 * G * 5.0
    L.add("approfondissement", "bernoulli", "De l'eau circule à vitesse constante dans un tuyau de section constante qui monte de $5{,}0\\ \\mathrm{m}$. De combien la pression diminue-t-elle entre le bas et le haut ?" + RHO,
          ["Section constante, donc $v_1 = v_2$ : les termes cinétiques s'éliminent.", f"$P_1 - P_2 = \\rho g (z_2 - z_1) = 1{{,}}00\\times 10^{{3}} \\times 9{{,}}81 \\times 5{{,}}0 = {val(dP, 'Pa', 2)}$."],
          f"$\\Delta P \\approx {val(dP, 'Pa', 2)}$")
    L.add("approfondissement", "bernoulli", "Quels sont les trois termes de la relation de Bernoulli ? Quelle est leur unité commune ?",
          ["$\\dfrac{1}{2}\\rho v^2$ (terme cinétique), $\\rho g z$ (terme de pesanteur) et $P$ (pression).", "Tous trois s'expriment en pascals : ce sont des énergies par unité de volume."],
          "Cinétique, pesanteur, pression : en pascals")
    # --- effet Venturi (8)
    dP = 0.5 * 1000 * (3.2 ** 2 - 0.80 ** 2)
    L.add("application", "venturi", "Dans une conduite horizontale, l'eau passe de $0{,}80\\ \\mathrm{m\\cdot s^{-1}}$ à $3{,}2\\ \\mathrm{m\\cdot s^{-1}}$ au niveau d'un rétrécissement. Calculer la chute de pression." + RHO,
          ["Conduite horizontale : $P_1 - P_2 = \\dfrac{1}{2}\\rho (v_2^2 - v_1^2)$.", f"$P_1 - P_2 = 500 \\times (3{{,}}2^2 - 0{{,}}80^2) = {val(dP, 'Pa', 2)}$."],
          f"$P_1 - P_2 \\approx {val(dP, 'Pa', 2)}$")
    dP = 0.5 * 1000 * (2.0 ** 2 - 0.50 ** 2)
    L.add("intermediaire", "venturi", "Dans un débitmètre de Venturi horizontal, les sections valent $S_1 = 12\\ \\mathrm{cm^2}$ et $S_2 = 3{,}0\\ \\mathrm{cm^2}$ ; l'eau entre à $0{,}50\\ \\mathrm{m\\cdot s^{-1}}$. Calculer $v_2$ puis la différence de pression $P_1 - P_2$." + RHO,
          ["Conservation du débit : $v_2 = 0{,}50 \\times \\dfrac{12}{3{,}0} = 2{,}0\\ \\mathrm{m\\cdot s^{-1}}$.", f"$P_1 - P_2 = \\dfrac{{1}}{{2}} \\times 1{{,}}00\\times 10^{{3}} \\times (2{{,}}0^2 - 0{{,}}50^2) = {val(dP, 'Pa', 2)}$."],
          f"$v_2 = 2{{,}}0" + un(MS) + f"$ ; $\\Delta P \\approx {val(dP, 'Pa', 2)}$")
    v2 = math.sqrt(1.0 ** 2 + 2 * 1.2e4 / 1000)
    L.add("intermediaire", "venturi", "Dans une conduite horizontale, l'eau entre à $1{,}0\\ \\mathrm{m\\cdot s^{-1}}$ ; au rétrécissement, la pression a baissé de $1{,}2\\times 10^{4}\\ \\mathrm{Pa}$. Calculer la vitesse au rétrécissement." + RHO,
          ["$P_1 - P_2 = \\dfrac{1}{2}\\rho (v_2^2 - v_1^2)$ donc $v_2 = \\sqrt{v_1^2 + \\dfrac{2(P_1 - P_2)}{\\rho}}$.", f"$v_2 = \\sqrt{{1{{,}}0^2 + \\dfrac{{2 \\times 1{{,}}2\\times 10^{{4}}}}{{1{{,}}00\\times 10^{{3}}}}}} = {val(v2, MS, 2)}$."],
          f"$v_2 = {val(v2, MS, 2)}$")
    dP = 0.5 * 1.2 * (70 ** 2 - 60 ** 2)
    L.add("probleme", "venturi", "En vol, l'air s'écoule à $70\\ \\mathrm{m\\cdot s^{-1}}$ au-dessus de l'aile d'un petit avion et à $60\\ \\mathrm{m\\cdot s^{-1}}$ en dessous ($\\rho_{\\text{air}} = 1{,}2\\ \\mathrm{kg\\cdot m^{-3}}$). Estimer la différence de pression, puis la force de portance sur une aile de $15\\ \\mathrm{m^2}$.",
          [f"$P_{{\\text{{dessous}}}} - P_{{\\text{{dessus}}}} = \\dfrac{{1}}{{2}} \\times 1{{,}}2 \\times (70^2 - 60^2) = {val(dP, 'Pa', 2)}$.", f"$F = \\Delta P \\times S = {num(dP, 2)} \\times 15 = {val(dP * 15, 'N', 2)}$, dirigée vers le haut."],
          f"$\\Delta P \\approx {val(dP, 'Pa', 2)}$ ; $F \\approx {val(dP * 15, 'N', 2)}$")
    P2 = 1.2e5 - 0.5 * 1000 * (15 ** 2 - 1.0 ** 2)
    L.add("probleme", "venturi", "Dans une trompe à eau horizontale, l'eau passe de $1{,}0\\ \\mathrm{m\\cdot s^{-1}}$ (pression $1{,}2\\times 10^{5}\\ \\mathrm{Pa}$) à $15\\ \\mathrm{m\\cdot s^{-1}}$ dans la partie étroite. Calculer la pression dans la partie étroite et expliquer pourquoi la trompe aspire l'air d'un flacon." + RHO,
          [f"$P_2 = P_1 - \\dfrac{{1}}{{2}}\\rho (v_2^2 - v_1^2) = 1{{,}}2\\times 10^{{5}} - 500 \\times (15^2 - 1{{,}}0^2) = {val(P2, 'Pa', 2)}$.",
           "Cette pression est bien inférieure à la pression atmosphérique ($\\approx 1{,}0\\times 10^{5}\\ \\mathrm{Pa}$) : l'air du flacon relié à cet endroit est aspiré."],
          f"$P_2 \\approx {val(P2, 'Pa', 2)}$")
    dP = 0.5 * 1060 * (1.2 ** 2 - 0.30 ** 2)
    L.add("approfondissement", "venturi", "Dans une artère rétrécie, le sang ($\\rho = 1\\,060\\ \\mathrm{kg\\cdot m^{-3}}$) passe de $0{,}30\\ \\mathrm{m\\cdot s^{-1}}$ à $1{,}2\\ \\mathrm{m\\cdot s^{-1}}$. Calculer la baisse de pression au rétrécissement (artère supposée horizontale).",
          [f"$\\Delta P = \\dfrac{{1}}{{2}} \\times 1\\,060 \\times (1{{,}}2^2 - 0{{,}}30^2) = {val(dP, 'Pa', 2)}$."], f"$\\Delta P \\approx {val(dP, 'Pa', 2)}$")
    L.qa("approfondissement", "venturi", [
        ("Dans une conduite horizontale qui se rétrécit, la pression augmente-t-elle ou diminue-t-elle au rétrécissement ? Justifier.",
         ["Conservation du débit : la section diminue, donc la vitesse augmente.", "Bernoulli avec $z_1 = z_2$ : si $\\dfrac{1}{2}\\rho v^2$ augmente, $P$ diminue."], "Elle diminue"),
        ("Quand deux camions se croisent à grande vitesse sur une route, ils semblent « attirés » l'un vers l'autre. Proposer une explication.",
         ["L'air s'écoule plus vite dans l'espace étroit entre les deux véhicules.", "D'après l'effet Venturi, la pression y est plus faible que de l'autre côté : une force pousse les camions l'un vers l'autre."],
         "Effet Venturi : pression plus faible entre eux"),
    ])
    # --- cours (8)
    L.vf("application", "cours", [
        ("La poussée d'Archimède dépend de la masse volumique de l'objet immergé.", False, "Faux : elle dépend de la masse volumique du fluide et du volume immergé, pas de la nature de l'objet."),
        ("La poussée d'Archimède est toujours verticale et dirigée vers le haut.", True, "Vrai : $\\vec F_A = -\\rho_{\\text{fluide}}\\,V\\,\\vec g$ est opposée à $\\vec g$."),
        ("Un corps plus dense que l'eau coule toujours, quelle que soit sa forme.", False, "Faux : un bateau en acier flotte car sa coque creuse déplace un grand volume d'eau ; c'est la masse volumique moyenne qui compte."),
        ("Le débit volumique s'exprime en $\\mathrm{m\\cdot s^{-1}}$.", False, "Faux : il s'exprime en $\\mathrm{m^3\\cdot s^{-1}}$ ; c'est la vitesse qui s'exprime en $\\mathrm{m\\cdot s^{-1}}$."),
        ("Pour un fluide incompressible en régime permanent, le débit volumique est le même dans toutes les sections d'une conduite.", True, "Vrai : le fluide ne s'accumule nulle part, $S_1 v_1 = S_2 v_2$."),
        ("Là où une conduite se rétrécit, le fluide ralentit.", False, "Faux : $v_2 = v_1 \\dfrac{S_1}{S_2}$, le fluide accélère."),
        ("En régime permanent, la vitesse du fluide en un point donné ne dépend pas du temps.", True, "Vrai : c'est la définition du régime permanent (stationnaire)."),
        ("La relation de Bernoulli s'applique à un fluide incompressible, en régime permanent, sans frottement.", True, "Vrai : ce sont ses conditions de validité (fluide parfait)."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — ÉLECTROLYSE
# =====================================================================

FTXT = " On donne $F = 9{,}65\\times 10^{4}\\ \\mathrm{C\\cdot mol^{-1}}$."
FAR = 96500


def _duree_txt(s):
    if s >= 600:
        s = 60 * round(s / 60)
    h, r = divmod(int(round(s)), 3600)
    m, sec = divmod(r, 60)
    out = []
    if h:
        out.append(f"{h} h")
    if m:
        out.append(f"{m} min")
    if sec and not h:
        out.append(f"{sec} s")
    return " ".join(out) if out else "0 s"


def gen_T_electrolyse():
    L = _Lot()
    # --- charge (8)
    for I, It, dt, dtt, conv in [(0.80, "0{,}80\\ \\mathrm{A}", 45 * 60, "45 min", "45 \\times 60 = 2\\,700\\ \\mathrm{s}"),
                                 (0.250, "250\\ \\mathrm{mA}", 2 * 3600, "2,0 h", "2{,}0 \\times 3\\,600 = 7\\,200\\ \\mathrm{s}"),
                                 (2.5, "2{,}5\\ \\mathrm{A}", 80 * 60, "1 h 20 min", "80 \\times 60 = 4\\,800\\ \\mathrm{s}"),
                                 (0.120, "120\\ \\mathrm{mA}", 25 * 60, "25 min", "25 \\times 60 = 1\\,500\\ \\mathrm{s}")]:
        Q = I * dt
        L.add("application", "charge", f"Un électrolyseur est traversé par un courant constant $I = {It}$ pendant {dtt}. Calculer la charge électrique qui l'a traversé.",
              ([f"$I = {num(I, 2)}\\ \\mathrm{{A}}$."] if "mA" in It else []) + [f"$\\Delta t = {conv}$.", f"$Q = I\\,\\Delta t = {num(I, 2)} \\times {ex(dt)} = {val(Q, 'C', 2)}$."],
              f"$Q = {val(Q, 'C', 2)}$")
    Q = 300e3 * 86400
    L.add("probleme", "charge", "Une cuve industrielle de production d'aluminium fonctionne sous $300\\ \\mathrm{kA}$ pendant 24 h. Calculer la charge électrique qui la traverse.",
          ["$I = 3{,}00\\times 10^{5}\\ \\mathrm{A}$ ; $\\Delta t = 24 \\times 3\\,600 = 86\\,400\\ \\mathrm{s}$.", f"$Q = I\\,\\Delta t = {val(Q, 'C')}$."], f"$Q \\approx {val(Q, 'C')}$")
    L.add("intermediaire", "charge", "Une charge de $3\\,600\\ \\mathrm{C}$ a traversé un électrolyseur parcouru par $1{,}5\\ \\mathrm{A}$. Pendant combien de temps ?",
          ["$\\Delta t = \\dfrac{Q}{I} = \\dfrac{3\\,600}{1{,}5} = 2\\,400\\ \\mathrm{s}$, soit $40$ min."], "$\\Delta t = 2\\,400\\ \\mathrm{s} = 40\\ \\mathrm{min}$")
    L.add("intermediaire", "charge", "Une charge de $5\\,400\\ \\mathrm{C}$ a circulé en 1 h 30 min. Quelle était l'intensité, supposée constante ?",
          ["$\\Delta t = 90 \\times 60 = 5\\,400\\ \\mathrm{s}$.", "$I = \\dfrac{Q}{\\Delta t} = \\dfrac{5\\,400}{5\\,400} = 1{,}0\\ \\mathrm{A}$."], "$I = 1{,}0\\ \\mathrm{A}$")
    L.add("approfondissement", "charge", "Une batterie de téléphone a une capacité de $3\\,000\\ \\mathrm{mAh}$. Quelle charge électrique, en coulombs, peut-elle stocker ?",
          ["$3\\,000\\ \\mathrm{mAh}$ : elle peut débiter $3{,}000\\ \\mathrm{A}$ pendant $1\\ \\mathrm{h} = 3\\,600\\ \\mathrm{s}$.", "$Q = 3{,}000 \\times 3\\,600 = 1{,}08\\times 10^{4}\\ \\mathrm{C}$."],
          "$Q = 1{,}08\\times 10^{4}\\ \\mathrm{C}$")
    # --- quantité d'électrons (8)
    for Q, Qt in [(1930, "1\\,930"), (7200, "7\\,200"), (300, "300")]:
        n = Q / FAR
        L.add("application", "quantite-electrons", f"Une charge $Q = {Qt}\\ \\mathrm{{C}}$ traverse un électrolyseur. Calculer la quantité d'électrons échangés." + FTXT,
              [f"$n(\\mathrm{{e^-}}) = \\dfrac{{Q}}{{F}} = \\dfrac{{{Qt}}}{{9{{,}}65\\times 10^{{4}}}} = {val(n, 'mol')}$."], f"$n(\\mathrm{{e^-}}) \\approx {val(n, 'mol')}$")
    L.add("intermediaire", "quantite-electrons", "Un courant de $2{,}0\\ \\mathrm{A}$ circule pendant $1{,}0\\ \\mathrm{h}$ dans un électrolyseur. Calculer la quantité d'électrons échangés." + FTXT,
          ["$Q = I\\,\\Delta t = 2{,}0 \\times 3\\,600 = 7{,}2\\times 10^{3}\\ \\mathrm{C}$.", f"$n(\\mathrm{{e^-}}) = \\dfrac{{7{{,}}2\\times 10^{{3}}}}{{9{{,}}65\\times 10^{{4}}}} = {val(7200 / FAR, 'mol', 2)}$."],
          f"$n(\\mathrm{{e^-}}) \\approx {val(7200 / FAR, 'mol', 2)}$")
    L.add("application", "quantite-electrons", "Quelle charge transporte une quantité de $0{,}100\\ \\mathrm{mol}$ d'électrons ?" + FTXT,
          ["$Q = n(\\mathrm{e^-}) \\times F = 0{,}100 \\times 9{,}65\\times 10^{4} = 9{,}65\\times 10^{3}\\ \\mathrm{C}$."], "$Q = 9{,}65\\times 10^{3}\\ \\mathrm{C}$")
    t = 0.050 * FAR / 1.2
    L.add("intermediaire", "quantite-electrons", "Combien de temps faut-il faire passer un courant de $1{,}2\\ \\mathrm{A}$ pour échanger $5{,}0\\times 10^{-2}\\ \\mathrm{mol}$ d'électrons ?" + FTXT,
          [f"$Q = n \\times F = 5{{,}}0\\times 10^{{-2}} \\times 9{{,}}65\\times 10^{{4}} = {val(0.05 * FAR, 'C', 2)}$.", f"$\\Delta t = \\dfrac{{Q}}{{I}} = {val(t, 's', 2)}$, soit environ {_duree_txt(t)}."],
          f"$\\Delta t \\approx {val(t, 's', 2)}$")
    N = 300 / 1.60e-19
    L.add("approfondissement", "quantite-electrons", "Une charge de $300\\ \\mathrm{C}$ traverse un circuit. Combien d'électrons cela représente-t-il ? ($e = 1{,}60\\times 10^{-19}\\ \\mathrm{C}$)",
          [f"$N = \\dfrac{{Q}}{{e}} = \\dfrac{{300}}{{1{{,}}60\\times 10^{{-19}}}} = {sci(N)}$ électrons."], f"$N \\approx {sci(N)}$")
    L.add("approfondissement", "quantite-electrons", "Vérifier que $F = \\mathcal{N}_A \\times e$ avec $\\mathcal{N}_A = 6{,}02\\times 10^{23}\\ \\mathrm{mol^{-1}}$ et $e = 1{,}60\\times 10^{-19}\\ \\mathrm{C}$.",
          [f"$\\mathcal{{N}}_A \\times e = 6{{,}}02\\times 10^{{23}} \\times 1{{,}}60\\times 10^{{-19}} = {val(6.02e23 * 1.60e-19, CMOL)}$.", "On retrouve bien $F \\approx 9{,}65\\times 10^{4}\\ \\mathrm{C\\cdot mol^{-1}}$ : c'est la charge d'une mole d'électrons."],
          "$F \\approx 9{,}63\\times 10^{4}\\ \\mathrm{C\\cdot mol^{-1}}$")
    # --- masse déposée (10)
    met = [("de cuivre", "Cu", "Cu^{2+}", 2, 63.5), ("d'argent", "Ag", "Ag^+", 1, 107.9), ("de zinc", "Zn", "Zn^{2+}", 2, 65.4),
           ("de nickel", "Ni", "Ni^{2+}", 2, 58.7), ("d'étain", "Sn", "Sn^{2+}", 2, 118.7), ("de chrome", "Cr", "Cr^{3+}", 3, 52.0)]
    for (nom, X, ion, z, M), (I, Its, dt, dtt) in zip(met, [(0.50, "0{,}50\\ \\mathrm{A}", 1800, "30 min"), (0.40, "0{,}40\\ \\mathrm{A}", 1200, "20 min"),
                                                            (1.5, "1{,}5\\ \\mathrm{A}", 3600, "1 h"), (2.0, "2{,}0\\ \\mathrm{A}", 2700, "45 min"),
                                                            (0.80, "0{,}80\\ \\mathrm{A}", 1500, "25 min"), (5.0, "5{,}0\\ \\mathrm{A}", 1800, "30 min")]):
        Q = I * dt
        ne = Q / FAR
        n = ne / z
        m = n * M
        demi = f"\\mathrm{{{ion}}} + {_coef(z)}\\mathrm{{e^-}} \\longrightarrow \\mathrm{{{X}}}"
        L.add("intermediaire" if z < 3 else "approfondissement", "masse-deposee",
              f"On dépose une couche {nom} sur un objet placé à la cathode : ${demi}$. L'intensité vaut ${Its}$ pendant {dtt}. Calculer la masse {nom} déposée ($M = {fx(M, 1)}\\ \\mathrm{{g\\cdot mol^{{-1}}}}$)." + FTXT,
              [f"$Q = I\\,\\Delta t = {num(I, 2)} \\times {dt} = {val(Q, 'C', 2)}$ ; $n(\\mathrm{{e^-}}) = \\dfrac{{Q}}{{F}} = {val(ne, 'mol', 3)}$.",
               f"D'après la demi-équation, il faut {z} électron{'s' if z > 1 else ''} par atome : $n(\\mathrm{{{X}}}) = " + (f"\\dfrac{{n(\\mathrm{{e^-}})}}{{{z}}} = " if z > 1 else "n(\\mathrm{e^-}) = ") + f"{val(n, 'mol', 3)}$.",
               f"$m = n \\times M = {sci(n, 3)} \\times {fx(M, 1)} = {val(m, 'g', 2)}$."],
              f"$m \\approx {val(m, 'g', 2)}$")
    Q = 300e3 * 86400
    ne = Q / FAR
    m = ne / 3 * 27.0
    L.add("probleme", "masse-deposee", "Une cuve d'électrolyse industrielle produit de l'aluminium sous $300\\ \\mathrm{kA}$ : $\\mathrm{Al^{3+}} + 3\\,\\mathrm{e^-} \\longrightarrow \\mathrm{Al}$. Quelle masse d'aluminium ($M = 27{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) produit-elle en 24 h, au maximum ?" + FTXT,
          [f"$Q = 3{{,}}00\\times 10^{{5}} \\times 86\\,400 = {val(Q, 'C')}$ ; $n(\\mathrm{{e^-}}) = {val(ne, 'mol')}$.", f"$n(\\mathrm{{Al}}) = \\dfrac{{n(\\mathrm{{e^-}})}}{{3}} = {val(ne / 3, 'mol')}$.",
           f"$m = {sci(ne / 3)} \\times 27{{,}}0 = {val(m, 'g')}$, soit environ ${num(m / 1e6, 2)}$ tonnes."],
          f"$m \\approx {num(m / 1e6, 2)}\\ \\mathrm{{t}}$")
    n = 0.50 / 107.9
    t = n * FAR / 0.40
    L.add("probleme", "masse-deposee", "Pour argenter un couvert, on veut déposer $0{,}50\\ \\mathrm{g}$ d'argent ($M = 107{,}9\\ \\mathrm{g\\cdot mol^{-1}}$ ; $\\mathrm{Ag^+} + \\mathrm{e^-} \\longrightarrow \\mathrm{Ag}$) avec un courant de $0{,}40\\ \\mathrm{A}$. Quelle durée faut-il ?" + FTXT,
          [f"$n(\\mathrm{{Ag}}) = \\dfrac{{0{{,}}50}}{{107{{,}}9}} = {val(n, 'mol')}$ = $n(\\mathrm{{e^-}})$ (un électron par atome).", f"$Q = n(\\mathrm{{e^-}}) \\times F = {val(n * FAR, 'C')}$.",
           f"$\\Delta t = \\dfrac{{Q}}{{I}} = {val(t, 's', 2)}$, soit environ {_duree_txt(t)}."],
          f"$\\Delta t \\approx {val(t, 's', 2)}$")
    n = 1.0 / 63.5
    I = n * 2 * FAR / 3600
    L.add("probleme", "masse-deposee", "On veut déposer $1{,}0\\ \\mathrm{g}$ de cuivre ($M = 63{,}5\\ \\mathrm{g\\cdot mol^{-1}}$ ; $\\mathrm{Cu^{2+}} + 2\\,\\mathrm{e^-} \\longrightarrow \\mathrm{Cu}$) en exactement 1 h. Quelle intensité faut-il imposer ?" + FTXT,
          [f"$n(\\mathrm{{Cu}}) = \\dfrac{{1{{,}}0}}{{63{{,}}5}} = {val(n, 'mol', 2)}$ ; $n(\\mathrm{{e^-}}) = 2\\,n(\\mathrm{{Cu}}) = {val(2 * n, 'mol', 2)}$.",
           f"$Q = n(\\mathrm{{e^-}}) \\times F = {val(2 * n * FAR, 'C', 2)}$ ; $I = \\dfrac{{Q}}{{\\Delta t}} = \\dfrac{{Q}}{{3\\,600}} = {val(I, 'A', 2)}$."],
          f"$I \\approx {val(I, 'A', 2)}$")
    Q = 1.0 * 1800
    m = Q / FAR / 2 * 58.7
    Vc = m / 8.9
    e = Vc / 50
    L.add("probleme", "masse-deposee", "On nickèle une pièce de $50\\ \\mathrm{cm^2}$ placée à la cathode ($\\mathrm{Ni^{2+}} + 2\\,\\mathrm{e^-} \\longrightarrow \\mathrm{Ni}$) avec un courant de $1{,}0\\ \\mathrm{A}$ pendant 30 min. Estimer l'épaisseur du dépôt ($M = 58{,}7\\ \\mathrm{g\\cdot mol^{-1}}$ ; masse volumique du nickel : $8{,}9\\ \\mathrm{g\\cdot cm^{-3}}$)." + FTXT,
          [f"$Q = 1{{,}}0 \\times 1\\,800 = 1{{,}}8\\times 10^{{3}}\\ \\mathrm{{C}}$ ; $n(\\mathrm{{Ni}}) = \\dfrac{{Q}}{{2F}} = {val(Q / FAR / 2, 'mol', 2)}$ ; $m = {val(m, 'g', 2)}$.",
           f"Volume déposé : $V = \\dfrac{{m}}{{\\rho}} = {val(Vc, 'cm^3', 2)}$ ; épaisseur $e = \\dfrac{{V}}{{S}} = {val(e, 'cm', 2)}$, soit environ ${num(e * 1e4, 2)}\\ \\mathrm{{\\mu m}}$."],
          f"$e \\approx {num(e * 1e4, 2)}\\ \\mathrm{{\\mu m}}$")
    # --- volume de gaz (7)
    VM = " Volume molaire des gaz : $V_m = 24{,}0\\ \\mathrm{L\\cdot mol^{-1}}$ (20 °C, pression atmosphérique)."
    for gaz, demi, z, I, dt, dtt in [("de dihydrogène à la cathode", "2\\,\\mathrm{H_2O} + 2\\,\\mathrm{e^-} \\longrightarrow \\mathrm{H_2} + 2\\,\\mathrm{HO^-}", 2, 1.0, 1800, "30 min"),
                                     ("de dioxygène à l'anode", "2\\,\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\,\\mathrm{H^+} + 4\\,\\mathrm{e^-}", 4, 1.0, 1800, "30 min"),
                                     ("de dichlore à l'anode", "2\\,\\mathrm{Cl^-} \\longrightarrow \\mathrm{Cl_2} + 2\\,\\mathrm{e^-}", 2, 0.50, 1200, "20 min"),
                                     ("de dioxygène à l'anode", "2\\,\\mathrm{H_2O} \\longrightarrow \\mathrm{O_2} + 4\\,\\mathrm{H^+} + 4\\,\\mathrm{e^-}", 4, 3.0, 3600, "1 h")]:
        Q = I * dt
        ne = Q / FAR
        n = ne / z
        V = n * 24.0
        L.add("intermediaire", "volume-gaz", f"Un électrolyseur fonctionne sous ${num(I, 2)}\\ \\mathrm{{A}}$ pendant {dtt}. Calculer le volume {gaz} : ${demi}$." + FTXT + VM,
              [f"$Q = {num(I, 2)} \\times {dt} = {val(Q, 'C', 2)}$ ; $n(\\mathrm{{e^-}}) = \\dfrac{{Q}}{{F}} = {val(ne, 'mol', 3)}$.",
               f"Il faut {z} électrons par molécule de gaz : $n = \\dfrac{{n(\\mathrm{{e^-}})}}{{{z}}} = {val(n, 'mol', 3)}$.",
               f"$V = n \\times V_m = {sci(n, 3)} \\times 24{{,}}0 = {val(V, 'L', 2)}$, soit ${num(V * 1000, 2)}\\ \\mathrm{{mL}}$."],
              f"$V \\approx {num(V * 1000, 2)}\\ \\mathrm{{mL}}$")
    n = 1.0 / 24.0
    t = 2 * n * FAR / 2.0
    L.add("probleme", "volume-gaz", "Combien de temps faut-il pour produire $1{,}0\\ \\mathrm{L}$ de dihydrogène à la cathode ($2\\,\\mathrm{H_2O} + 2\\,\\mathrm{e^-} \\longrightarrow \\mathrm{H_2} + 2\\,\\mathrm{HO^-}$) avec un courant de $2{,}0\\ \\mathrm{A}$ ?" + FTXT + VM,
          [f"$n(\\mathrm{{H_2}}) = \\dfrac{{1{{,}}0}}{{24{{,}}0}} = {val(n, 'mol', 2)}$ ; $n(\\mathrm{{e^-}}) = 2\\,n(\\mathrm{{H_2}}) = {val(2 * n, 'mol', 2)}$.",
           f"$Q = n(\\mathrm{{e^-}}) \\times F = {val(2 * n * FAR, 'C', 2)}$ ; $\\Delta t = \\dfrac{{Q}}{{I}} = {val(t, 's', 2)}$, soit environ {_duree_txt(t)}."],
          f"$\\Delta t \\approx {val(t, 's', 2)}$")
    Q = 5000 * 3600
    nH = Q / FAR / 2
    L.add("probleme", "volume-gaz", "Un électrolyseur industriel produisant du dihydrogène fonctionne sous $5\\,000\\ \\mathrm{A}$. Quel volume de dihydrogène produit-il en une heure (deux électrons par molécule) ?" + FTXT + VM,
          [f"$Q = 5\\,000 \\times 3\\,600 = {val(Q, 'C', 2)}$ ; $n(\\mathrm{{e^-}}) = {val(Q / FAR, 'mol')}$.", f"$n(\\mathrm{{H_2}}) = {val(nH, 'mol')}$ ; $V = {num(nH)} \\times 24{{,}}0 = {val(nH * 24, 'L')}$, soit ${num(nH * 24 / 1000)}\\ \\mathrm{{m^3}}$."],
          f"$V \\approx {num(nH * 24 / 1000)}\\ \\mathrm{{m^3}}$")
    L.add("approfondissement", "volume-gaz", "Lors de l'électrolyse de l'eau, pourquoi obtient-on un volume de dihydrogène double de celui de dioxygène ?",
          ["Le même nombre d'électrons traverse les deux électrodes.", "Il faut 2 électrons par molécule de $\\mathrm{H_2}$ et 4 par molécule de $\\mathrm{O_2}$ : on forme deux fois plus de $\\mathrm{H_2}$ (en moles, donc en volume de gaz)."],
          "2 électrons par $\\mathrm{H_2}$ contre 4 par $\\mathrm{O_2}$")
    # --- électrodes (9)
    L.qa("intermediaire", "electrodes", [
        ("À quelle électrode d'un électrolyseur se produit l'oxydation ? À quelle borne du générateur est-elle reliée ?",
         ["L'oxydation a toujours lieu à l'anode.", "Dans un électrolyseur, l'anode est reliée à la borne + du générateur."], "À l'anode, reliée à la borne +"),
        ("Lors de l'électrolyse d'une solution de sulfate de cuivre, du cuivre se dépose sur une électrode. Est-ce l'anode ou la cathode ?",
         ["$\\mathrm{Cu^{2+}} + 2\\,\\mathrm{e^-} \\longrightarrow \\mathrm{Cu}$ est une réduction (gain d'électrons).", "La réduction a lieu à la cathode."], "La cathode"),
        ("Lors de l'électrolyse d'une solution de chlorure de sodium, du dichlore se dégage selon $2\\,\\mathrm{Cl^-} \\longrightarrow \\mathrm{Cl_2} + 2\\,\\mathrm{e^-}$. À quelle électrode ?",
         ["Les ions chlorure perdent des électrons : c'est une oxydation.", "Elle a lieu à l'anode."], "L'anode"),
        ("Dans un électrolyseur, dans quel sens circulent les électrons dans les fils ?",
         ["Ils partent de l'anode (où ils sont libérés par l'oxydation), traversent le générateur et arrivent à la cathode (où ils sont captés par la réduction)."],
         "De l'anode vers la cathode, à travers le générateur"),
        ("Comparer le signe de la cathode dans une pile et dans un électrolyseur.",
         ["Dans une pile, la cathode est le pôle +.", "Dans un électrolyseur, la cathode est reliée à la borne − du générateur.", "D'où la règle : on identifie une électrode par la réaction qui s'y produit, jamais par son signe."],
         "Pile : + ; électrolyseur : −"),
        ("Lors de l'électrolyse d'une solution de sulfate de cuivre avec deux électrodes de cuivre, que se passe-t-il à l'anode ?",
         ["L'anode en cuivre est oxydée : $\\mathrm{Cu} \\longrightarrow \\mathrm{Cu^{2+}} + 2\\,\\mathrm{e^-}$.", "Elle s'amincit, tandis que du cuivre se dépose à la cathode (principe de l'affinage du cuivre)."],
         "Le cuivre de l'anode passe en solution"),
        ("Quel est le rôle du générateur dans une électrolyse ?",
         ["Il impose le passage du courant : il « pompe » les électrons de l'anode vers la cathode.", "Il fournit l'énergie électrique qui force la transformation dans le sens non spontané."],
         "Forcer la transformation non spontanée"),
        ("Lors de la recharge d'une batterie de téléphone, la batterie fonctionne-t-elle en pile ou en électrolyseur ?",
         ["Le chargeur impose un courant de sens inverse à celui de la décharge.", "La transformation est forcée : la batterie fonctionne en électrolyseur (récepteur)."], "En électrolyseur"),
        ("Quelle conversion d'énergie a lieu dans un électrolyseur ?",
         ["L'électrolyseur est un récepteur : il convertit de l'énergie électrique en énergie chimique."], "Électrique → chimique"),
    ])
    # --- cours (8)
    L.vf("application", "cours", [
        ("Une électrolyse est une transformation spontanée.", False, "Faux : c'est une transformation forcée, qui n'a lieu que si un générateur impose le courant."),
        ("À la cathode se produit toujours une réduction.", True, "Vrai : c'est vrai pour une pile comme pour un électrolyseur (« red-cat »)."),
        ("Dans $Q = I\\,\\Delta t$, la durée peut être exprimée en minutes.", False, "Faux : pour obtenir des coulombs, la durée doit être en secondes."),
        ("La constante de Faraday est la charge d'une mole d'électrons.", True, "Vrai : $F = \\mathcal{N}_A\\,e \\approx 9{,}65\\times 10^{4}\\ \\mathrm{C\\cdot mol^{-1}}$."),
        ("Pour déposer une mole d'aluminium, il faut une mole d'électrons.", False, "Faux : $\\mathrm{Al^{3+}} + 3\\,\\mathrm{e^-} \\longrightarrow \\mathrm{Al}$, il en faut trois moles."),
        ("La même quantité d'électrons traverse l'anode et la cathode.", True, "Vrai : le même courant les traverse pendant la même durée."),
        ("On peut diviser une charge $Q$ par $\\mathcal{N}_A$ pour obtenir la quantité d'électrons.", False, "Faux : il faut diviser par $F$ ; $\\mathcal{N}_A$ est un nombre d'entités par mole, pas une charge."),
        ("Une intensité de $500\\ \\mathrm{mA}$ s'écrit $0{,}500\\ \\mathrm{A}$ dans $Q = I\\,\\Delta t$.", True, "Vrai : $1\\ \\mathrm{mA} = 10^{-3}\\ \\mathrm{A}$ ; garder des mA donnerait une charge mille fois trop grande."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — ÉQUILIBRE ET SENS D'ÉVOLUTION
# =====================================================================

def _qr_expr(R, P):
    """R, P : listes (espèce, coef, dissoute?). Renvoie l'expression LaTeX de Qr."""
    def fac(lst):
        out = []
        for e, c, d in lst:
            if d is True:
                out.append(f"[\\mathrm{{{e}}}]" + (f"^{{{c}}}" if c > 1 else ""))
        return "\\,".join(out)
    num_, den = fac(P), fac(R)
    if not den:
        return num_
    return f"\\dfrac{{{num_ or '1'}}}{{{den}}}"


def _eq_txt(R, P):
    def cote(lst):
        return " + ".join(f"{_coef(c)}\\mathrm{{{e}}}" + ("_{(s)}" if d is False else "") for e, c, d in lst)
    return cote(R) + " = " + cote(P)


def _qr_val(R, P, conc):
    q = 1.0
    for e, c, d in P:
        if d is True:
            q *= conc[e] ** c
    for e, c, d in R:
        if d is True:
            q /= conc[e] ** c
    return q


def _qr_num(R, P, conc):
    def fac(lst):
        return " \\times ".join(par(sci(conc[e], 2)) + (f"^{{{c}}}" if c > 1 else "") for e, c, d in lst if d is True)
    n_, d_ = fac(P), fac(R)
    return f"\\dfrac{{{n_}}}{{{d_}}}" if d_ else n_


def gen_T_equilibre():
    L = _Lot()
    AC = ([("CH_3COOH", 1, True), ("H_2O", 1, "solv")], [("CH_3COO^-", 1, True), ("H_3O^+", 1, True)])
    NH = ([("NH_3", 1, True), ("H_2O", 1, "solv")], [("NH_4^+", 1, True), ("HO^-", 1, True)])
    AGCL = ([("AgCl", 1, False)], [("Ag^+", 1, True), ("Cl^-", 1, True)])
    CUAG = ([("Cu", 1, False), ("Ag^+", 2, True)], [("Cu^{2+}", 1, True), ("Ag", 2, False)])
    FESCN = ([("Fe^{3+}", 1, True), ("SCN^-", 1, True)], [("FeSCN^{2+}", 1, True)])
    PBI = ([("PbI_2", 1, False)], [("Pb^{2+}", 1, True), ("I^-", 2, True)])
    FEAG = ([("Fe^{2+}", 1, True), ("Ag^+", 1, True)], [("Fe^{3+}", 1, True), ("Ag", 1, False)])
    AMM = ([("CH_3COOH", 1, True), ("NH_3", 1, True)], [("CH_3COO^-", 1, True), ("NH_4^+", 1, True)])
    # --- quotient de réaction : expressions (6) + valeurs (3)
    for (R, P), rem in [(AC, "L'eau est le solvant : elle n'apparaît pas."), (NH, "L'eau est le solvant : elle n'apparaît pas."),
                        (AGCL, "Le solide n'apparaît pas."), (CUAG, "Les solides (cuivre et argent) n'apparaissent pas ; le coefficient 2 devient un exposant."),
                        (FESCN, "Tous les nombres stœchiométriques valent 1 : pas d'exposant."), (PBI, "Le solide n'apparaît pas ; le coefficient 2 de $\\mathrm{I^-}$ devient un carré.")]:
        L.add("application", "quotient-reaction", f"Écrire l'expression du quotient de réaction associé à l'équation ${_eq_txt(R, P)}$.",
              ["Produits au numérateur, réactifs au dénominateur, chacun élevé à la puissance de son nombre stœchiométrique.", rem],
              f"$Q_r = {_qr_expr(R, P)}$")
    for (R, P), conc in [(NH, {"NH_3": 9.6e-3, "NH_4^+": 4.2e-4, "HO^-": 4.2e-4}),
                         (PBI, {"Pb^{2+}": 1.3e-3, "I^-": 2.6e-3}),
                         (CUAG, {"Cu^{2+}": 5.0e-2, "Ag^+": 2.0e-2})]:
        q = _qr_val(R, P, conc)
        data = " ; ".join(f"$[\\mathrm{{{e}}}] = {sci(v, 2)}" + un(MOLL) + "$" for e, v in conc.items())
        L.add("intermediaire", "quotient-reaction", f"Pour la réaction ${_eq_txt(R, P)}$, calculer le quotient de réaction quand : {data}.",
              [f"$Q_r = {_qr_expr(R, P)} = {_qr_num(R, P, conc)} = {num(q, 2)}$ (sans unité)."], f"$Q_r \\approx {num(q, 2)}$")
    # --- sens d'évolution (10)
    cas = [(AMM, "3{,}1\\times 10^{4}", 3.1e4, {"CH_3COOH": 0.010, "NH_3": 0.010, "CH_3COO^-": 0.020, "NH_4^+": 0.020}, "intermediaire"),
           (FESCN, "1{,}0\\times 10^{2}", 1.0e2, {"Fe^{3+}": 1.0e-3, "SCN^-": 1.0e-3, "FeSCN^{2+}": 5.0e-4}, "intermediaire"),
           (CUAG, "2{,}2\\times 10^{15}", 2.2e15, {"Cu^{2+}": 0.10, "Ag^+": 0.010}, "intermediaire"),
           (FEAG, "3{,}2", 3.2, {"Fe^{2+}": 0.10, "Ag^+": 0.10, "Fe^{3+}": 0.050}, "approfondissement"),
           (FEAG, "3{,}2", 3.2, {"Fe^{2+}": 0.10, "Ag^+": 0.10, "Fe^{3+}": 0.020}, "approfondissement")]
    for (R, P), Kt, K, conc, d in cas:
        q = _qr_val(R, P, conc)
        data = " ; ".join(f"$[\\mathrm{{{e}}}]_i = {sci(v, 2)}" + un(MOLL) + "$" for e, v in conc.items())
        sens = "direct" if q < K else ("indirect" if q > K else "aucun")
        comp = "<" if q < K else (">" if q > K else "=")
        L.add(d, "sens-evolution", f"On considère la réaction ${_eq_txt(R, P)}$, de constante $K = {Kt}$ à 25 °C. Initialement : {data}. Dans quel sens le système évolue-t-il ?",
              [f"$Q_{{r,i}} = {_qr_expr(R, P)} = {_qr_num(R, P, conc)} = {num(q, 2)}$.",
               f"$Q_{{r,i}} {comp} K$ : le système évolue dans le sens {sens}" + (" (formation de produits)." if sens == "direct" else " (formation de réactifs).")],
              f"Sens {sens}")
    L.add("probleme", "sens-evolution", "On mélange des volumes égaux de solutions de nitrate d'argent et de chlorure de sodium ; juste après le mélange, $[\\mathrm{Ag^+}] = [\\mathrm{Cl^-}] = 1{,}0\\times 10^{-3}\\ \\mathrm{mol\\cdot L^{-1}}$. Pour $\\mathrm{AgCl_{(s)}} = \\mathrm{Ag^+} + \\mathrm{Cl^-}$, $K = 1{,}8\\times 10^{-10}$. Un précipité se forme-t-il ?",
          ["$Q_{r,i} = [\\mathrm{Ag^+}]_i\\,[\\mathrm{Cl^-}]_i = 1{,}0\\times 10^{-3} \\times 1{,}0\\times 10^{-3} = 1{,}0\\times 10^{-6}$.",
           "$Q_{r,i} > K$ : le système évolue dans le sens indirect, c'est-à-dire la formation du solide $\\mathrm{AgCl}$ : un précipité blanc apparaît."],
          "Oui : $Q_{r,i} > K$, précipitation")
    L.add("probleme", "sens-evolution", "Dans une eau, $[\\mathrm{Ag^+}] = 1{,}0\\times 10^{-6}\\ \\mathrm{mol\\cdot L^{-1}}$ et $[\\mathrm{Cl^-}] = 1{,}0\\times 10^{-5}\\ \\mathrm{mol\\cdot L^{-1}}$. Avec $K = 1{,}8\\times 10^{-10}$ pour $\\mathrm{AgCl_{(s)}} = \\mathrm{Ag^+} + \\mathrm{Cl^-}$, un précipité de chlorure d'argent peut-il se former ?",
          ["$Q_r = 1{,}0\\times 10^{-6} \\times 1{,}0\\times 10^{-5} = 1{,}0\\times 10^{-11}$.", "$Q_r < K$ : la formation du solide (sens indirect) n'est pas possible ; aucun précipité n'apparaît."],
          "Non : $Q_r < K$")
    L.add("intermediaire", "sens-evolution", "Pour $\\mathrm{A_{(aq)}} + \\mathrm{B_{(aq)}} = \\mathrm{C_{(aq)}} + \\mathrm{D_{(aq)}}$, $K = 4{,}0$. Initialement $[\\mathrm{A}] = 0{,}050$, $[\\mathrm{B}] = 0{,}20$, $[\\mathrm{C}] = [\\mathrm{D}] = 0{,}20\\ \\mathrm{mol\\cdot L^{-1}}$. Le système évolue-t-il ?",
          [f"$Q_{{r,i}} = \\dfrac{{0{{,}}20 \\times 0{{,}}20}}{{0{{,}}050 \\times 0{{,}}20}} = {num(0.04 / 0.01, 2)}$.", "$Q_{r,i} = K$ : le système est déjà à l'équilibre, il n'évolue pas."],
          "Non : déjà à l'équilibre")
    L.add("application", "sens-evolution", "On introduit de l'acide éthanoïque dans de l'eau pure. Dans quel sens évolue $\\mathrm{CH_3COOH} + \\mathrm{H_2O} = \\mathrm{CH_3COO^-} + \\mathrm{H_3O^+}$ ($K = 1{,}8\\times 10^{-5}$) ?",
          ["Initialement, il n'y a pas d'ions éthanoate : $Q_{r,i} = 0$.", "$Q_{r,i} < K$ : évolution dans le sens direct (formation d'ions), jusqu'à $Q_r = K$."],
          "Sens direct")
    L.add("approfondissement", "sens-evolution", "Une solution d'acide éthanoïque est à l'équilibre. On la dilue 10 fois avec de l'eau. Montrer que $Q_r$ devient inférieur à $K$ et conclure.",
          ["Juste après la dilution, chaque concentration est divisée par 10.", "$Q_r = \\dfrac{[\\mathrm{CH_3COO^-}][\\mathrm{H_3O^+}]}{[\\mathrm{CH_3COOH}]}$ est divisé par $\\dfrac{10 \\times 10}{10} = 10$ : $Q_r = \\dfrac{K}{10} < K$.",
           "Le système évolue dans le sens direct : l'acide se dissocie davantage (le taux d'avancement augmente)."],
          "$Q_r = K/10 < K$ : sens direct")
    # --- taux d'avancement (9)
    acides = [("d'acide éthanoïque", 1.75e-5, 1.0e-1), ("d'acide éthanoïque", 1.75e-5, 1.0e-2), ("d'acide éthanoïque", 1.75e-5, 1.0e-3),
              ("d'acide méthanoïque", 1.8e-4, 1.0e-2), ("d'acide méthanoïque", 1.8e-4, 5.0e-2), ("d'acide benzoïque", 6.3e-5, 1.0e-2),
              ("d'acide lactique", 1.4e-4, 2.0e-2)]
    tau_res = {}
    for nom, Ka, c in acides:
        x = (-Ka + math.sqrt(Ka * Ka + 4 * Ka * c)) / 2
        pH = Decimal(-math.log10(x)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
        h = float(arr(10 ** (-float(pH)), 2))
        tau = h / c
        tau_res[(nom, c)] = (pH, tau)
        pHt = _plain(pH)
        L.add("intermediaire", "taux-avancement", f"Une solution {nom} de concentration $c = {sci(c, 2)}" + un(MOLL) + f"$ a un pH de ${pHt}$. Calculer le taux d'avancement final de la réaction de l'acide avec l'eau et conclure.",
              [f"$[\\mathrm{{H_3O^+}}]_f = 10^{{-{pHt}}} = {val(h, MOLL, 2)}$.",
               f"$x_f = [\\mathrm{{H_3O^+}}]_f \\times V$ et $x_{{\\max}} = c \\times V$, d'où $\\tau = \\dfrac{{[\\mathrm{{H_3O^+}}]_f}}{{c}} = \\dfrac{{{sci(h, 2)}}}{{{sci(c, 2)}}} = {num(tau, 2)}$, soit ${pct(tau, 2)}$.",
               "$\\tau < 1$ : la transformation est non totale, le système atteint un état d'équilibre."],
              f"$\\tau \\approx {pct(tau, 2)}$ : transformation non totale")
    L.add("application", "taux-avancement", "Une solution d'acide chlorhydrique de concentration $1{,}0\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$ a un pH de $2{,}00$. Calculer le taux d'avancement final de la réaction de $\\mathrm{HCl}$ avec l'eau.",
          ["$[\\mathrm{H_3O^+}]_f = 10^{-2{,}00} = 1{,}0\\times 10^{-2}\\ \\mathrm{mol\\cdot L^{-1}}$.", "$\\tau = \\dfrac{1{,}0\\times 10^{-2}}{1{,}0\\times 10^{-2}} = 1$ : la transformation est totale (acide fort)."],
          "$\\tau = 1$ : transformation totale")
    p1, t1 = tau_res[("d'acide éthanoïque", 1.0e-1)]
    p3, t3 = tau_res[("d'acide éthanoïque", 1.0e-3)]
    L.add("approfondissement", "taux-avancement", f"Deux solutions d'acide éthanoïque, à $1{{,}}0\\times 10^{{-1}}$ et $1{{,}}0\\times 10^{{-3}}\\ \\mathrm{{mol\\cdot L^{{-1}}}}$, ont des pH de ${_plain(p1)}$ et ${_plain(p3)}$. Comparer leurs taux d'avancement finaux. Ont-elles la même constante d'équilibre ?",
          [f"$\\tau_1 = \\dfrac{{10^{{-{_plain(p1)}}}}}{{0{{,}}10}} = {pct(t1, 2)}$ ; $\\tau_2 = \\dfrac{{10^{{-{_plain(p3)}}}}}{{1{{,}}0\\times 10^{{-3}}}} = {pct(t3, 2)}$.",
           "La solution la plus diluée a le taux d'avancement le plus grand.", "Elles ont la même constante $K$, qui ne dépend que de la température ; $\\tau$ dépend aussi de la concentration initiale."],
          f"${pct(t1, 2)}$ contre ${pct(t3, 2)}$ ; même $K$")
    # --- tableau d'avancement et équilibre (7)
    for K, Kt, ctx in [(4.0, "4{,}0", "l'estérification $\\text{acide} + \\text{alcool} = \\text{ester} + \\text{eau}$ (mélange équimolaire, toutes les espèces en solution dans le même volume)"),
                       (0.25, "0{,}25", "la réaction $\\mathrm{A} + \\mathrm{B} = \\mathrm{C} + \\mathrm{D}$ (mélange équimolaire de A et B, sans C ni D)"),
                       (100.0, "1{,}0\\times 10^{2}", "la réaction $\\mathrm{A} + \\mathrm{B} = \\mathrm{C} + \\mathrm{D}$ (mélange équimolaire de A et B, sans C ni D)"),
                       (9.0, "9{,}0", "la réaction $\\mathrm{A} + \\mathrm{B} = \\mathrm{C} + \\mathrm{D}$ (mélange équimolaire de A et B, sans C ni D)")]:
        r = math.sqrt(K)
        tau = r / (1 + r)
        L.add("approfondissement", "tableau", f"Pour {ctx}, $K = {Kt}$. En partant de $n$ mol de chaque réactif, calculer le taux d'avancement final.",
              ["Tableau d'avancement : à l'équilibre, $n - x_f$ pour chaque réactif et $x_f$ pour chaque produit ; $x_{\\max} = n$.",
               f"$K = \\dfrac{{x_f^2}}{{(n - x_f)^2}}$ donc $\\dfrac{{x_f}}{{n - x_f}} = \\sqrt{{K}} = {num(r, 2)}$.",
               f"$\\tau = \\dfrac{{x_f}}{{n}} = \\dfrac{{\\sqrt{{K}}}}{{1 + \\sqrt{{K}}}} = {num(tau, 2)}$, soit ${pct(tau, 2)}$."],
              f"$\\tau \\approx {pct(tau, 2)}$")
    x = (12 - math.sqrt(144 - 96)) / 6
    L.add("probleme", "tableau", "Pour améliorer une estérification ($K = 4{,}0$), on mélange $1{,}0$ mol d'acide et $2{,}0$ mol d'alcool. Calculer l'avancement final et le taux d'avancement final. Comparer au mélange équimolaire ($\\tau \\approx 67\\ \\%$).",
          ["À l'équilibre : $K = \\dfrac{x_f^2}{(1{,}0 - x_f)(2{,}0 - x_f)} = 4{,}0$, soit $3x_f^2 - 12x_f + 8{,}0 = 0$.",
           f"La racine comprise entre 0 et $x_{{\\max}} = 1{{,}}0$ mol est $x_f = \\dfrac{{12 - \\sqrt{{48}}}}{{6}} = {val(x, 'mol', 2)}$.",
           f"$\\tau = {pct(x, 2)}$ : l'excès d'alcool déplace l'équilibre et améliore nettement le rendement."],
          f"$\\tau \\approx {pct(x, 2)}$")
    xf = 0.10 * 2 / 3
    L.add("intermediaire", "tableau", "Pour $\\mathrm{A} + \\mathrm{B} = \\mathrm{C} + \\mathrm{D}$ ($K = 4{,}0$), on part de $[\\mathrm{A}]_0 = [\\mathrm{B}]_0 = 0{,}10\\ \\mathrm{mol\\cdot L^{-1}}$. Le taux d'avancement final vaut $\\dfrac{2}{3}$. Calculer les concentrations à l'équilibre et vérifier que $Q_{r,\\text{éq}} = K$.",
          [f"$[\\mathrm{{C}}] = [\\mathrm{{D}}] = \\dfrac{{2}}{{3}} \\times 0{{,}}10 = {val(xf, MOLL, 2)}$ ; $[\\mathrm{{A}}] = [\\mathrm{{B}}] = 0{{,}}10 - {num(xf, 2)} = {val(0.10 - xf, MOLL, 2)}$.",
           "$Q_{r,\\text{éq}} = \\dfrac{(0{,}10 \\times 2/3)^2}{(0{,}10/3)^2} = 2^2 = 4{,}0 = K$."],
          f"$[\\mathrm{{C}}] = [\\mathrm{{D}}] \\approx {num(xf, 2)}$ ; $[\\mathrm{{A}}] = [\\mathrm{{B}}] \\approx {num(0.10 - xf, 2)}\\ \\mathrm{{mol\\cdot L^{{-1}}}}$")
    h = 10 ** -3.39
    L.add("intermediaire", "tableau", "On dissout $1{,}0\\times 10^{-3}$ mol d'acide éthanoïque dans de l'eau pour obtenir $100\\ \\mathrm{mL}$ de solution ; le pH mesuré vaut $3{,}39$. Déterminer $x_{\\max}$, $x_f$ puis $\\tau$ à l'aide d'un tableau d'avancement.",
          ["$\\mathrm{CH_3COOH} + \\mathrm{H_2O} = \\mathrm{CH_3COO^-} + \\mathrm{H_3O^+}$ : l'eau est en excès, l'acide est limitant, $x_{\\max} = 1{,}0\\times 10^{-3}\\ \\mathrm{mol}$.",
           f"$x_f = n(\\mathrm{{H_3O^+}})_f = 10^{{-3{{,}}39}} \\times 0{{,}}100 = {val(h * 0.1, 'mol', 2)}$.", f"$\\tau = \\dfrac{{x_f}}{{x_{{\\max}}}} = {num(h * 0.1 / 1e-3, 2)}$, soit ${pct(h * 0.1 / 1e-3, 2)}$."],
          f"$\\tau \\approx {pct(h * 0.1 / 1e-3, 2)}$")
    # --- K et tau (7)
    L.qa("approfondissement", "k-et-tau", [
        ("Une réaction a une constante $K = 10^{12}$. Que peut-on prévoir de son état final ? et de sa vitesse ?",
         ["$K \\gg 1$ : à l'équilibre il ne reste presque plus de réactif limitant, la transformation est quasi totale.", "$K$ ne renseigne pas sur la vitesse : la réaction peut être lente."],
         "Quasi totale ; rien sur la vitesse"),
        ("Une réaction a une constante $K = 10^{-6}$. Que peut-on en dire ?",
         ["$K \\ll 1$ : la réaction avance très peu, les réactifs restent largement majoritaires à l'équilibre."], "Transformation très peu avancée"),
        ("De quoi dépend la constante d'équilibre $K$ ?",
         ["Pour une réaction donnée, $K$ ne dépend que de la température.", "Elle ne dépend ni des concentrations initiales, ni du volume."], "Uniquement de la température"),
        ("De quoi dépend le taux d'avancement final $\\tau$ d'une réaction ?",
         ["De la constante $K$ (donc de la température) et des conditions initiales (concentrations, proportions des réactifs)."], "De $K$ et des conditions initiales"),
        ("Deux solutions du même acide faible, de concentrations différentes, ont-elles le même $K$ ? le même $\\tau$ ?",
         ["Même réaction, même température : même $K$.", "Concentrations différentes : $\\tau$ différents (plus grand pour la solution la plus diluée)."],
         "Même $K$, $\\tau$ différents"),
        ("Pourquoi, plus $K$ est grand, plus $\\tau$ est proche de 1 ?",
         ["À l'équilibre $Q_r = K$ : un $K$ grand impose un numérateur (produits) grand devant le dénominateur (réactifs).", "Il reste donc très peu de réactifs : la transformation est presque totale."],
         "Les produits doivent dominer à l'équilibre"),
        ("Un élève compare $Q_{r,i} = 5$ à 1 et conclut que le système évolue dans le sens indirect. Où est l'erreur ?",
         ["Le critère d'évolution compare $Q_{r,i}$ à $K$, jamais à 1.", "Avec $K = 100$, le même système évoluerait dans le sens direct ; avec $K = 2$, dans le sens indirect."],
         "Il faut comparer $Q_{r,i}$ à $K$"),
    ])
    # --- cours (8)
    L.vf("application", "cours", [
        ("À l'état d'équilibre, la réaction s'arrête au niveau microscopique.", False, "Faux : les réactions directe et inverse se poursuivent à la même vitesse ; l'équilibre est dynamique."),
        ("À l'état d'équilibre, les concentrations de toutes les espèces restent constantes.", True, "Vrai : rien n'évolue à l'échelle macroscopique."),
        ("L'eau solvant apparaît au dénominateur du quotient de réaction.", False, "Faux : le solvant n'apparaît pas dans $Q_r$, pas plus que les solides."),
        ("Le quotient de réaction est sans unité.", True, "Vrai : chaque concentration est divisée par $c^\\circ = 1\\ \\mathrm{mol\\cdot L^{-1}}$."),
        ("Si $Q_{r,i} < K$, le système évolue dans le sens direct.", True, "Vrai : $Q_r$ augmente pour rejoindre $K$, des produits se forment."),
        ("Un taux d'avancement final de 1 signifie que la transformation est totale.", True, "Vrai : le réactif limitant a entièrement disparu."),
        ("À l'équilibre, il ne reste plus de réactif.", False, "Faux : un équilibre est une transformation non totale ; réactifs et produits coexistent."),
        ("On écrit l'équation d'une réaction menant à un équilibre avec le signe $=$.", True, "Vrai : il rappelle que la réaction peut avoir lieu dans les deux sens."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — MODÈLE DU GAZ PARFAIT
# =====================================================================

RTXT = " On prendra $R = 8{,}314\\ \\mathrm{J\\cdot K^{-1}\\cdot mol^{-1}}$ et $T(\\mathrm{K}) = \\theta(^{\\circ}\\mathrm{C}) + 273{,}15$."
RR = 8.314


def _TK(theta):
    return theta + 273.15


def gen_T_gaz_parfait():
    L = _Lot()
    # --- conversions (7)
    L.qa("application", "conversions", [
        ("Convertir $25\\ ^{\\circ}\\mathrm{C}$ et $-20\\ ^{\\circ}\\mathrm{C}$ en kelvins.",
         ["$T = \\theta + 273{,}15$.", "$25 + 273{,}15 = 298{,}15\\ \\mathrm{K}$ ; $-20 + 273{,}15 = 253{,}15\\ \\mathrm{K}$."], "$298{,}15\\ \\mathrm{K}$ et $253{,}15\\ \\mathrm{K}$"),
        ("La température du corps humain est de $37\\ ^{\\circ}\\mathrm{C}$. L'exprimer en kelvins.", ["$T = 37 + 273{,}15 = 310{,}15\\ \\mathrm{K}$ (environ $310\\ \\mathrm{K}$)."], "$310{,}15\\ \\mathrm{K}$"),
        ("Convertir $2{,}5\\ \\mathrm{L}$ puis $250\\ \\mathrm{mL}$ en mètres cubes.",
         ["$1\\ \\mathrm{L} = 10^{-3}\\ \\mathrm{m^3}$ et $1\\ \\mathrm{mL} = 10^{-6}\\ \\mathrm{m^3}$.", "$2{,}5\\ \\mathrm{L} = 2{,}5\\times 10^{-3}\\ \\mathrm{m^3}$ ; $250\\ \\mathrm{mL} = 2{,}50\\times 10^{-4}\\ \\mathrm{m^3}$."],
         "$2{,}5\\times 10^{-3}\\ \\mathrm{m^3}$ ; $2{,}50\\times 10^{-4}\\ \\mathrm{m^3}$"),
        ("Un pneu est gonflé à une pression absolue de $3{,}2$ bar. Exprimer cette pression en pascals.", ["$1\\ \\mathrm{bar} = 10^{5}\\ \\mathrm{Pa}$.", "$P = 3{,}2\\times 10^{5}\\ \\mathrm{Pa}$."], "$3{,}2\\times 10^{5}\\ \\mathrm{Pa}$"),
        ("La météo annonce une pression de $1\\,013\\ \\mathrm{hPa}$. L'exprimer en pascals.", ["$1\\ \\mathrm{hPa} = 100\\ \\mathrm{Pa}$.", "$P = 1\\,013 \\times 100 = 1{,}013\\times 10^{5}\\ \\mathrm{Pa}$."], "$1{,}013\\times 10^{5}\\ \\mathrm{Pa}$"),
        ("Une température vaut $77\\ \\mathrm{K}$ (azote liquide). L'exprimer en degrés Celsius.", ["$\\theta = T - 273{,}15 = 77 - 273{,}15 = -196{,}15\\ ^{\\circ}\\mathrm{C}$ (environ $-196\\ ^{\\circ}\\mathrm{C}$)."], "$\\approx -196\\ ^{\\circ}\\mathrm{C}$"),
    ])
    L.add("approfondissement", "conversions", "Un élève calcule le volume de $1{,}0$ mol de gaz à $0\\ ^{\\circ}\\mathrm{C}$ en écrivant $T = 0$ dans $V = \\dfrac{nRT}{P}$. Que trouve-t-il ? Corriger.",
          ["Il trouve $V = 0$, ce qui est absurde : la température doit être en kelvins.", "$T = 273{,}15\\ \\mathrm{K}$, et l'on trouve $V \\approx 2{,}24\\times 10^{-2}\\ \\mathrm{m^3}$ sous $1{,}013\\times 10^{5}\\ \\mathrm{Pa}$."],
          "$V = 0$ : erreur, il faut $T = 273{,}15\\ \\mathrm{K}$")
    # --- équation d'état (12)
    def ajout(d, e, cor, rep):
        L.add(d, "equation-etat", e + RTXT, cor, rep)
    n = 200e5 * 12e-3 / (RR * _TK(20))
    ajout("probleme", "Une bouteille de plongée de $12\\ \\mathrm{L}$ contient de l'air sous $200$ bar à $20\\ ^{\\circ}\\mathrm{C}$. Quelle quantité de matière d'air contient-elle ?",
          ["$P = 2{,}00\\times 10^{7}\\ \\mathrm{Pa}$ ; $V = 1{,}2\\times 10^{-2}\\ \\mathrm{m^3}$ ; $T = 293{,}15\\ \\mathrm{K}$.", f"$n = \\dfrac{{PV}}{{RT}} = \\dfrac{{2{{,}}00\\times 10^{{7}} \\times 1{{,}}2\\times 10^{{-2}}}}{{8{{,}}314 \\times 293{{,}}15}} = {val(n, 'mol', 2)}$."],
          f"$n \\approx {val(n, 'mol', 2)}$")
    n = 3.2e5 * 30e-3 / (RR * _TK(15))
    ajout("intermediaire", "Un pneu de $30\\ \\mathrm{L}$ contient de l'air à la pression absolue de $3{,}2\\times 10^{5}\\ \\mathrm{Pa}$ et à $15\\ ^{\\circ}\\mathrm{C}$. Calculer la quantité d'air qu'il contient.",
          ["$V = 3{,}0\\times 10^{-2}\\ \\mathrm{m^3}$ ; $T = 288{,}15\\ \\mathrm{K}$.", f"$n = \\dfrac{{PV}}{{RT}} = {val(n, 'mol', 2)}$."], f"$n \\approx {val(n, 'mol', 2)}$")
    V = 1.00 * RR * _TK(25) / 1.013e5
    ajout("application", "Quel volume occupe $1{,}00$ mol de gaz parfait à $25\\ ^{\\circ}\\mathrm{C}$ sous $1{,}013\\times 10^{5}\\ \\mathrm{Pa}$ ?",
          ["$T = 298{,}15\\ \\mathrm{K}$.", f"$V = \\dfrac{{nRT}}{{P}} = \\dfrac{{1{{,}}00 \\times 8{{,}}314 \\times 298{{,}}15}}{{1{{,}}013\\times 10^{{5}}}} = {val(V, 'm^3')}$, soit ${num(V * 1000)}\\ \\mathrm{{L}}$."],
          f"$V \\approx {num(V * 1000)}\\ \\mathrm{{L}}$")
    P = 2.0e-3 * RR * _TK(20) / 50e-6
    ajout("intermediaire", "Une seringue fermée contient $2{,}0\\times 10^{-3}$ mol d'air dans $50\\ \\mathrm{mL}$, à $20\\ ^{\\circ}\\mathrm{C}$. Calculer la pression du gaz.",
          ["$V = 50\\times 10^{-6} = 5{,}0\\times 10^{-5}\\ \\mathrm{m^3}$ ; $T = 293{,}15\\ \\mathrm{K}$.", f"$P = \\dfrac{{nRT}}{{V}} = {val(P, 'Pa', 2)}$."], f"$P \\approx {val(P, 'Pa', 2)}$")
    T = 1.3e5 * 10e-3 / (0.50 * RR)
    ajout("intermediaire", "Un récipient de $10\\ \\mathrm{L}$ contient $0{,}50$ mol de gaz sous $1{,}3\\times 10^{5}\\ \\mathrm{Pa}$. Calculer sa température en kelvins puis en degrés Celsius.",
          [f"$T = \\dfrac{{PV}}{{nR}} = \\dfrac{{1{{,}}3\\times 10^{{5}} \\times 1{{,}}0\\times 10^{{-2}}}}{{0{{,}}50 \\times 8{{,}}314}} = {val(T, 'K', 3)}$.", f"$\\theta = T - 273{{,}}15 \\approx {num(T - 273.15, 2)}\\ ^{{\\circ}}\\mathrm{{C}}$."],
          f"$T \\approx {val(T, 'K', 3)}$ soit $\\approx {num(T - 273.15, 2)}\\ ^{{\\circ}}\\mathrm{{C}}$")
    n = 1.02e5 * 4.0e-3 / (RR * _TK(20))
    ajout("application", "Un ballon de baudruche de $4{,}0\\ \\mathrm{L}$ est gonflé à $1{,}02\\times 10^{5}\\ \\mathrm{Pa}$ et $20\\ ^{\\circ}\\mathrm{C}$. Quelle quantité d'air contient-il ?",
          [f"$n = \\dfrac{{PV}}{{RT}} = \\dfrac{{1{{,}}02\\times 10^{{5}} \\times 4{{,}}0\\times 10^{{-3}}}}{{8{{,}}314 \\times 293{{,}}15}} = {val(n, 'mol', 2)}$."], f"$n \\approx {val(n, 'mol', 2)}$")
    n = 1.013e5 * 144 / (RR * _TK(20))
    ajout("probleme", "Une salle de classe mesure $8{,}0\\ \\mathrm{m} \\times 6{,}0\\ \\mathrm{m} \\times 3{,}0\\ \\mathrm{m}$ ; l'air y est à $20\\ ^{\\circ}\\mathrm{C}$ sous $1{,}013\\times 10^{5}\\ \\mathrm{Pa}$. Calculer la quantité d'air, puis sa masse ($M_{\\text{air}} = 29{,}0\\ \\mathrm{g\\cdot mol^{-1}}$).",
          ["$V = 8{,}0 \\times 6{,}0 \\times 3{,}0 = 144\\ \\mathrm{m^3}$.", f"$n = \\dfrac{{PV}}{{RT}} = {val(n, 'mol', 2)}$ ; $m = n M = {val(n * 29.0 / 1000, 'kg', 2)}$."],
          f"$n \\approx {val(n, 'mol', 2)}$ ; $m \\approx {val(n * 29.0 / 1000, 'kg', 2)}$")
    n = 1.2e5 * 60e-3 / (RR * _TK(25))
    ajout("probleme", "Un coussin gonflable de sécurité (airbag) de $60\\ \\mathrm{L}$ est rempli de diazote à $1{,}2\\times 10^{5}\\ \\mathrm{Pa}$ et $25\\ ^{\\circ}\\mathrm{C}$. Calculer la masse de diazote ($M = 28{,}0\\ \\mathrm{g\\cdot mol^{-1}}$).",
          [f"$n = \\dfrac{{PV}}{{RT}} = \\dfrac{{1{{,}}2\\times 10^{{5}} \\times 6{{,}}0\\times 10^{{-2}}}}{{8{{,}}314 \\times 298{{,}}15}} = {val(n, 'mol', 2)}$.", f"$m = n \\times M = {val(n * 28.0, 'g', 2)}$."],
          f"$m \\approx {val(n * 28.0, 'g', 2)}$")
    V = 0.20 * RR * 273.15 / 1.013e5
    ajout("application", "Quel volume occupent $0{,}20$ mol de gaz à $0\\ ^{\\circ}\\mathrm{C}$ sous $1{,}013\\times 10^{5}\\ \\mathrm{Pa}$ ?",
          [f"$T = 273{{,}}15\\ \\mathrm{{K}}$ ; $V = \\dfrac{{nRT}}{{P}} = {val(V, 'm^3', 2)}$, soit ${num(V * 1000, 2)}\\ \\mathrm{{L}}$."], f"$V \\approx {num(V * 1000, 2)}\\ \\mathrm{{L}}$")
    n = 1.013e5 * 6.0e-3 / (RR * _TK(37))
    ajout("intermediaire", "Les poumons d'un adulte contiennent environ $6{,}0\\ \\mathrm{L}$ d'air à $37\\ ^{\\circ}\\mathrm{C}$ sous $1{,}013\\times 10^{5}\\ \\mathrm{Pa}$. Quelle quantité d'air cela représente-t-il ?",
          ["$T = 310{,}15\\ \\mathrm{K}$ ; $V = 6{,}0\\times 10^{-3}\\ \\mathrm{m^3}$.", f"$n = \\dfrac{{PV}}{{RT}} = {val(n, 'mol', 2)}$."], f"$n \\approx {val(n, 'mol', 2)}$")
    P = 0.050 * RR * _TK(20) / 1.0e-3
    ajout("intermediaire", "On enferme $0{,}050$ mol de dioxyde de carbone dans une bouteille de $1{,}0\\ \\mathrm{L}$ à $20\\ ^{\\circ}\\mathrm{C}$. Calculer la pression.",
          [f"$P = \\dfrac{{nRT}}{{V}} = \\dfrac{{0{{,}}050 \\times 8{{,}}314 \\times 293{{,}}15}}{{1{{,}}0\\times 10^{{-3}}}} = {val(P, 'Pa', 2)}$, soit environ ${num(P / 1e5, 2)}$ bar."],
          f"$P \\approx {val(P, 'Pa', 2)}$")
    n = 1.013e5 * 1.0 / (RR * _TK(20))
    ajout("approfondissement", "Combien de molécules contient $1{,}0\\ \\mathrm{m^3}$ d'air à $20\\ ^{\\circ}\\mathrm{C}$ sous $1{,}013\\times 10^{5}\\ \\mathrm{Pa}$ ? ($\\mathcal{N}_A = 6{,}02\\times 10^{23}\\ \\mathrm{mol^{-1}}$)",
          [f"$n = \\dfrac{{PV}}{{RT}} = {val(n, 'mol', 2)}$.", f"$N = n \\times \\mathcal{{N}}_A = {sci(n * 6.02e23, 2)}$ molécules."], f"$N \\approx {sci(n * 6.02e23, 2)}$")
    # --- deux états (9)
    L.add("application", "deux-etats", "À température constante, on comprime l'air d'une seringue bouchée de $60\\ \\mathrm{mL}$ à $20\\ \\mathrm{mL}$. La pression initiale vaut $1{,}0\\times 10^{5}\\ \\mathrm{Pa}$. Calculer la pression finale.",
          ["$n$ et $T$ constants : $P_1 V_1 = P_2 V_2$ (loi de Boyle-Mariotte).", "$P_2 = P_1 \\dfrac{V_1}{V_2} = 1{,}0\\times 10^{5} \\times \\dfrac{60}{20} = 3{,}0\\times 10^{5}\\ \\mathrm{Pa}$."],
          "$P_2 = 3{,}0\\times 10^{5}\\ \\mathrm{Pa}$")
    P2 = 2.4e5 * _TK(50) / _TK(15)
    L.add("intermediaire", "deux-etats", "Un pneu contient de l'air à $2{,}4\\times 10^{5}\\ \\mathrm{Pa}$ (pression absolue) à $15\\ ^{\\circ}\\mathrm{C}$. Après un long trajet, l'air atteint $50\\ ^{\\circ}\\mathrm{C}$, à volume constant. Calculer la nouvelle pression.",
          ["$n$ et $V$ constants : $\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}$, températures en kelvins.", f"$P_2 = 2{{,}}4\\times 10^{{5}} \\times \\dfrac{{323{{,}}15}}{{288{{,}}15}} = {val(P2, 'Pa', 2)}$."],
          f"$P_2 \\approx {val(P2, 'Pa', 2)}$")
    P2 = 3.0e5 * _TK(60) / _TK(20)
    L.add("probleme", "deux-etats", "Un aérosol contient un gaz sous $3{,}0\\times 10^{5}\\ \\mathrm{Pa}$ à $20\\ ^{\\circ}\\mathrm{C}$. Oublié dans une voiture au soleil, il atteint $60\\ ^{\\circ}\\mathrm{C}$. Calculer la pression du gaz (volume constant) et expliquer l'avertissement « ne pas exposer à la chaleur ».",
          [f"$P_2 = P_1 \\dfrac{{T_2}}{{T_1}} = 3{{,}}0\\times 10^{{5}} \\times \\dfrac{{333{{,}}15}}{{293{{,}}15}} = {val(P2, 'Pa', 2)}$.", "La pression augmente avec la température : au-delà d'une certaine valeur, le récipient peut éclater."],
          f"$P_2 \\approx {val(P2, 'Pa', 2)}$")
    V2 = 4.0 * (1.01e5 / 2.6e4) * (223.15 / 288.15)
    L.add("probleme", "deux-etats", "Un ballon-sonde contient $4{,}0\\ \\mathrm{m^3}$ d'hélium au sol ($1{,}01\\times 10^{5}\\ \\mathrm{Pa}$, $15\\ ^{\\circ}\\mathrm{C}$). À $10\\ \\mathrm{km}$ d'altitude, la pression vaut $2{,}6\\times 10^{4}\\ \\mathrm{Pa}$ et la température $-50\\ ^{\\circ}\\mathrm{C}$. Calculer son volume (enveloppe supposée souple).",
          ["$n$ constant : $\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}$ avec $T_1 = 288{,}15\\ \\mathrm{K}$ et $T_2 = 223{,}15\\ \\mathrm{K}$.",
           f"$V_2 = V_1 \\times \\dfrac{{P_1}}{{P_2}} \\times \\dfrac{{T_2}}{{T_1}} = 4{{,}}0 \\times \\dfrac{{1{{,}}01\\times 10^{{5}}}}{{2{{,}}6\\times 10^{{4}}}} \\times \\dfrac{{223{{,}}15}}{{288{{,}}15}} = {val(V2, 'm^3', 2)}$."],
          f"$V_2 \\approx {val(V2, 'm^3', 2)}$")
    L.add("intermediaire", "deux-etats", "Une bulle d'air de $2{,}0\\ \\mathrm{cm^3}$ s'échappe d'un plongeur à une profondeur où la pression vaut $3{,}0\\times 10^{5}\\ \\mathrm{Pa}$. Quel est son volume en surface ($1{,}0\\times 10^{5}\\ \\mathrm{Pa}$), à température constante ?",
          ["Boyle-Mariotte : $P_1 V_1 = P_2 V_2$.", "$V_2 = 2{,}0 \\times \\dfrac{3{,}0\\times 10^{5}}{1{,}0\\times 10^{5}} = 6{,}0\\ \\mathrm{cm^3}$ (les volumes peuvent rester en $\\mathrm{cm^3}$ dans ce rapport)."],
          "$V_2 = 6{,}0\\ \\mathrm{cm^3}$")
    V2 = 3.0 * _TK(-18) / _TK(20)
    L.add("intermediaire", "deux-etats", "Un ballon souple contient $3{,}0\\ \\mathrm{L}$ d'air à $20\\ ^{\\circ}\\mathrm{C}$. On le place au congélateur à $-18\\ ^{\\circ}\\mathrm{C}$, à pression constante. Calculer son nouveau volume.",
          ["$n$ et $P$ constants : $\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$.", f"$V_2 = 3{{,}}0 \\times \\dfrac{{255{{,}}15}}{{293{{,}}15}} = {val(V2, 'L', 2)}$."], f"$V_2 \\approx {val(V2, 'L', 2)}$")
    T2 = 300 * 8.0e5 * 0.20 / (1.0e5 * 1.0)
    L.add("approfondissement", "deux-etats", "Dans un moteur, un gaz passe de $1{,}0\\times 10^{5}\\ \\mathrm{Pa}$, $1{,}0\\ \\mathrm{L}$ et $300\\ \\mathrm{K}$ à $8{,}0\\times 10^{5}\\ \\mathrm{Pa}$ et $0{,}20\\ \\mathrm{L}$. Calculer sa température finale (quantité de gaz constante).",
          ["$\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}$ donc $T_2 = T_1 \\dfrac{P_2 V_2}{P_1 V_1}$.", f"$T_2 = 300 \\times \\dfrac{{8{{,}}0\\times 10^{{5}} \\times 0{{,}}20}}{{1{{,}}0\\times 10^{{5}} \\times 1{{,}}0}} = {val(T2, 'K', 2)}$."],
          f"$T_2 = {val(T2, 'K', 2)}$")
    P2 = 1.0e5 * _TK(120) / _TK(20)
    L.add("intermediaire", "deux-etats", "Un bocal fermé contient de l'air à $1{,}0\\times 10^{5}\\ \\mathrm{Pa}$ et $20\\ ^{\\circ}\\mathrm{C}$. On le chauffe à $120\\ ^{\\circ}\\mathrm{C}$ (volume constant). Calculer la pression de l'air.",
          [f"$P_2 = P_1 \\dfrac{{T_2}}{{T_1}} = 1{{,}}0\\times 10^{{5}} \\times \\dfrac{{393{{,}}15}}{{293{{,}}15}} = {val(P2, 'Pa', 2)}$."], f"$P_2 \\approx {val(P2, 'Pa', 2)}$")
    L.add("intermediaire", "deux-etats", "On bouche une seringue contenant $20\\ \\mathrm{mL}$ d'air à $1{,}0\\times 10^{5}\\ \\mathrm{Pa}$, puis on tire le piston jusqu'à $50\\ \\mathrm{mL}$ (température constante). Calculer la pression finale.",
          ["$P_2 = P_1 \\dfrac{V_1}{V_2} = 1{,}0\\times 10^{5} \\times \\dfrac{20}{50} = 4{,}0\\times 10^{4}\\ \\mathrm{Pa}$."], "$P_2 = 4{,}0\\times 10^{4}\\ \\mathrm{Pa}$")
    # --- masse volumique et pression (7)
    for nom, M, theta, extra in [("de l'air", 29.0, 20, ""), ("de l'air", 29.0, 0, ""), ("de l'hélium", 4.00, 20, " L'hélium est environ sept fois moins dense que l'air : un ballon d'hélium s'élève."),
                                 ("du dioxyde de carbone", 44.0, 20, " Plus dense que l'air, il s'accumule dans les points bas (caves, grottes).")]:
        rho = 1.013e5 * M * 1e-3 / (RR * _TK(theta))
        L.add("intermediaire" if not extra else "approfondissement", "masse-volumique",
              f"Calculer la masse volumique {nom} ($M = {fx(M, 1 if M > 10 else 2)}\\ \\mathrm{{g\\cdot mol^{{-1}}}}$) à ${theta}\\ ^{{\\circ}}\\mathrm{{C}}$ sous $1{{,}}013\\times 10^{{5}}\\ \\mathrm{{Pa}}$, considéré comme un gaz parfait." + RTXT,
              ["$\\rho = \\dfrac{m}{V} = \\dfrac{nM}{V}$ et $\\dfrac{n}{V} = \\dfrac{P}{RT}$, donc $\\rho = \\dfrac{PM}{RT}$ avec $M$ en $\\mathrm{kg\\cdot mol^{-1}}$.",
               f"$\\rho = \\dfrac{{1{{,}}013\\times 10^{{5}} \\times {sci(M * 1e-3, 3)}}}{{8{{,}}314 \\times {fx(_TK(theta), 2)}}} = {val(rho, KGM3)}$." + extra],
              f"$\\rho \\approx {val(rho, KGM3)}$")
    r20, r100 = 1.013e5 * 29e-3 / (RR * _TK(20)), 1.013e5 * 29e-3 / (RR * _TK(100))
    L.add("probleme", "masse-volumique", "L'enveloppe d'une montgolfière contient $2\\,500\\ \\mathrm{m^3}$ d'air chauffé à $100\\ ^{\\circ}\\mathrm{C}$ ; l'air extérieur est à $20\\ ^{\\circ}\\mathrm{C}$ (pression $1{,}013\\times 10^{5}\\ \\mathrm{Pa}$, $M = 29{,}0\\ \\mathrm{g\\cdot mol^{-1}}$). Estimer la masse maximale (enveloppe, nacelle et passagers) qu'elle peut soulever." + RTXT,
          [f"$\\rho_{{20}} = \\dfrac{{PM}}{{RT}} = {val(r20, KGM3)}$ ; $\\rho_{{100}} = {val(r100, KGM3)}$.",
           f"La poussée d'Archimède compense le poids de l'air chaud et de la charge : $m_{{\\max}} = (\\rho_{{20}} - \\rho_{{100}})\\,V = {val((r20 - r100) * 2500, 'kg', 2)}$."],
          f"$m_{{\\max}} \\approx {val((r20 - r100) * 2500, 'kg', 2)}$")
    L.add("application", "masse-volumique", "Un piston de section $4{,}0\\ \\mathrm{cm^2}$ exerce une force de $60\\ \\mathrm{N}$ sur un gaz. Calculer la pression exercée.",
          ["$S = 4{,}0\\times 10^{-4}\\ \\mathrm{m^2}$.", f"$P = \\dfrac{{F}}{{S}} = \\dfrac{{60}}{{4{{,}}0\\times 10^{{-4}}}} = {val(60 / 4e-4, 'Pa', 2)}$."], f"$P = {val(60 / 4e-4, 'Pa', 2)}$")
    L.add("application", "masse-volumique", "Quelle force pressante l'air atmosphérique ($1{,}013\\times 10^{5}\\ \\mathrm{Pa}$) exerce-t-il sur une vitre de $1{,}0\\ \\mathrm{m^2}$ ? Pourquoi la vitre ne casse-t-elle pas ?",
          ["$F = P \\times S = 1{,}013\\times 10^{5} \\times 1{,}0 \\approx 1{,}0\\times 10^{5}\\ \\mathrm{N}$.", "L'air exerce une force pressante identique sur l'autre face : les deux forces se compensent."],
          "$F \\approx 1{,}0\\times 10^{5}\\ \\mathrm{N}$, compensée de l'autre côté")
    # --- interprétation microscopique (8)
    L.qa("intermediaire", "microscopique", [
        ("Comment interpréter, à l'échelle microscopique, la pression d'un gaz sur une paroi ?",
         ["Elle résulte des innombrables chocs des particules du gaz sur la paroi."], "Par les chocs des particules sur la paroi"),
        ("À température constante, on divise par deux le volume d'un gaz. Expliquer pourquoi la pression augmente.",
         ["Les particules sont deux fois plus nombreuses par unité de volume.", "Les chocs sur la paroi sont plus fréquents : la pression double (loi de Boyle-Mariotte)."], "Chocs plus fréquents : pression doublée"),
        ("Que traduit la température thermodynamique d'un gaz à l'échelle microscopique ?",
         ["Elle traduit l'agitation thermique : plus $T$ est élevée, plus la vitesse moyenne (et l'énergie cinétique moyenne) des particules est grande."], "L'agitation des particules"),
        ("À volume constant, on chauffe un gaz. Pourquoi sa pression augmente-t-elle ?",
         ["Les particules vont plus vite : les chocs sur la paroi sont plus fréquents et plus violents."], "Chocs plus fréquents et plus violents"),
        ("Pourquoi une température thermodynamique ne peut-elle pas être négative ?",
         ["$T$ mesure l'agitation des particules ; au zéro absolu ($0\\ \\mathrm{K}$), cette agitation est minimale.", "Il n'existe pas d'état « moins agité » que le minimum : $T \\geqslant 0\\ \\mathrm{K}$."],
         "Le zéro absolu correspond à l'agitation minimale"),
        ("Une tasse d'eau bouillante contient-elle plus d'énergie qu'une baignoire d'eau tiède ?",
         ["Non : la tasse est plus chaude (agitation moyenne plus grande), mais elle contient beaucoup moins de particules.", "La température n'est pas une quantité d'énergie."],
         "Non : température et énergie sont différentes"),
        ("Quelles sont les hypothèses du modèle du gaz parfait ?",
         ["Particules ponctuelles (volume propre négligeable).", "Aucune interaction à distance entre particules ; chocs élastiques ; agitation désordonnée permanente."],
         "Particules ponctuelles, sans interaction, chocs élastiques"),
        ("Un litre d'air contient environ $3\\times 10^{22}$ molécules. Pourquoi décrit-on le gaz par $P$, $V$, $T$ et $n$ plutôt que particule par particule ?",
         ["Suivre chaque particule est impossible : elles sont bien trop nombreuses.", "Les grandeurs macroscopiques résument leur comportement moyen et sont reliées par $PV = nRT$."],
         "Les grandeurs macroscopiques résument le comportement moyen"),
    ])
    # --- limites du modèle (7)
    L.vf("approfondissement", "limites", [
        ("Le modèle du gaz parfait décrit bien l'air dans les conditions usuelles de température et de pression.", True, "Vrai : vers $10^{5}\\ \\mathrm{Pa}$ et à température ambiante, les molécules sont très éloignées les unes des autres."),
        ("Le modèle du gaz parfait reste valable à très haute pression.", False, "Faux : le volume propre des particules n'est plus négligeable devant le volume offert au gaz."),
        ("Un gaz parfait peut se liquéfier si on le refroidit assez.", False, "Faux : sans interaction entre particules, un gaz parfait ne se liquéfie jamais ; un gaz réel, si."),
        ("À basse température, les interactions attractives entre particules d'un gaz réel ne sont plus négligeables.", True, "Vrai : c'est ce qui permet la liquéfaction et met en défaut le modèle."),
        ("Dans $PV = nRT$, on peut exprimer la pression en bar si $R = 8{,}314\\ \\mathrm{J\\cdot K^{-1}\\cdot mol^{-1}}$.", False, "Faux : avec cette valeur de $R$, $P$ doit être en pascals, $V$ en $\\mathrm{m^3}$ et $T$ en kelvins."),
        ("Dans le modèle du gaz parfait, les particules ont un volume propre négligeable.", True, "Vrai : elles sont considérées comme ponctuelles."),
        ("À quantité de matière et température fixées, doubler la pression d'un gaz parfait divise son volume par deux.", True, "Vrai : $PV = nRT$ constant (loi de Boyle-Mariotte)."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — DEUXIÈME LOI DE NEWTON ET MOUVEMENTS DANS UN CHAMP
# =====================================================================

GG = 6.67e-11
MT = 5.97e24
RT_ = 6.37e6
GDATA = " On donne $G = 6{,}67\\times 10^{-11}\\ \\mathrm{N\\cdot m^2\\cdot kg^{-2}}$, $M_T = 5{,}97\\times 10^{24}\\ \\mathrm{kg}$ et $R_T = 6\\,370\\ \\mathrm{km}$."


def gen_T_newton():
    L = _Lot()
    # --- deuxième loi (8)
    L.add("application", "deuxieme-loi", "Une voiture de $1\\,200\\ \\mathrm{kg}$ roule sur une route horizontale. La force motrice vaut $3\\,000\\ \\mathrm{N}$ et les frottements $600\\ \\mathrm{N}$. Calculer son accélération.",
          ["Selon l'axe du mouvement : $F - f = ma$ (poids et réaction de la route se compensent).", "$a = \\dfrac{3\\,000 - 600}{1\\,200} = 2{,}0\\ \\mathrm{m\\cdot s^{-2}}$."], "$a = 2{,}0\\ \\mathrm{m\\cdot s^{-2}}$")
    a = (8600 - 800 * G) / 800
    L.add("intermediaire", "deuxieme-loi", "Une cabine d'ascenseur de $800\\ \\mathrm{kg}$ est tirée vers le haut par un câble exerçant une tension de $8\\,600\\ \\mathrm{N}$. Calculer son accélération ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          [f"Axe vertical vers le haut : $T - mg = ma$ avec $mg = 800 \\times 9{{,}}81 = {val(800 * G, 'N')}$.", f"$a = \\dfrac{{8\\,600 - {num(800 * G, 4)}}}{{800}} = {val(a, MS2, 2)}$, vers le haut."],
          f"$a \\approx {val(a, MS2, 2)}$, vers le haut")
    a = (1.3e7 - 7.8e5 * G) / 7.8e5
    L.add("probleme", "deuxieme-loi", "Au décollage, une fusée de $780$ tonnes subit une poussée verticale de $1{,}3\\times 10^{7}\\ \\mathrm{N}$. Calculer son accélération initiale ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$, frottements négligés).",
          [f"$P = mg = 7{{,}}8\\times 10^{{5}} \\times 9{{,}}81 = {val(7.8e5 * G, 'N', 2)}$.", f"$a = \\dfrac{{F - P}}{{m}} = \\dfrac{{1{{,}}3\\times 10^{{7}} - {sci(7.8e5 * G, 2)}}}{{7{{,}}8\\times 10^{{5}}}} = {val(a, MS2, 2)}$, vers le haut."],
          f"$a \\approx {val(a, MS2, 2)}$")
    L.add("application", "deuxieme-loi", "Quelle force horizontale moyenne faut-il pour donner à un sprinteur de $70\\ \\mathrm{kg}$ une accélération de $4{,}0\\ \\mathrm{m\\cdot s^{-2}}$ ?",
          ["$\\sum F = ma = 70 \\times 4{,}0 = 280\\ \\mathrm{N}$."], "$F = 2{,}8\\times 10^{2}\\ \\mathrm{N}$")
    a = G * sind(20)
    L.add("intermediaire", "deuxieme-loi", "Un skieur descend une piste rectiligne inclinée de $20^{\\circ}$ sur l'horizontale ; les frottements sont négligés. Montrer que $a = g\\sin\\alpha$ et calculer $a$ ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          ["Forces : poids et réaction normale de la piste (perpendiculaire à la piste).", "Projection sur l'axe de la pente : $mg\\sin\\alpha = ma$, d'où $a = g\\sin\\alpha$ (indépendante de la masse).",
           f"$a = 9{{,}}81 \\times \\sin(20^{{\\circ}}) = {val(a, MS2)}$."], f"$a \\approx {val(a, MS2)}$")
    a = G * sind(15) - 60 / 80
    L.add("approfondissement", "deuxieme-loi", "Un skieur de $80\\ \\mathrm{kg}$ descend une pente de $15^{\\circ}$ ; les frottements équivalent à une force constante de $60\\ \\mathrm{N}$ opposée au mouvement. Calculer son accélération ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          ["Projection selon la pente : $mg\\sin\\alpha - f = ma$.", f"$a = 9{{,}}81 \\times \\sin(15^{{\\circ}}) - \\dfrac{{60}}{{80}} = {val(a, MS2)}$."], f"$a \\approx {val(a, MS2)}$")
    a = (80 * G - 600) / 80
    L.add("intermediaire", "deuxieme-loi", "Juste après l'ouverture de son parachute, un parachutiste de $80\\ \\mathrm{kg}$ (équipement compris) subit une force de frottement de $600\\ \\mathrm{N}$. Calculer son accélération et préciser son sens ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          [f"$P = 80 \\times 9{{,}}81 = {val(80 * G, 'N')}$ (vers le bas) ; $f = 600\\ \\mathrm{{N}}$ (vers le haut).", f"$a = \\dfrac{{P - f}}{{m}} = {val(a, MS2, 2)}$, dirigée vers le bas : sa vitesse continue d'augmenter, mais moins vite."],
          f"$a \\approx {val(a, MS2, 2)}$, vers le bas")
    L.add("application", "deuxieme-loi", "Un chariot soumis à une force horizontale de $150\\ \\mathrm{N}$ (frottements négligés) acquiert une accélération de $0{,}60\\ \\mathrm{m\\cdot s^{-2}}$. Quelle est sa masse ?",
          ["$m = \\dfrac{F}{a} = \\dfrac{150}{0{,}60} = 250\\ \\mathrm{kg}$."], "$m = 2{,}5\\times 10^{2}\\ \\mathrm{kg}$")
    # --- chute dans un champ de pesanteur uniforme (10)
    v0, al = 8.0, 45
    D = v0 ** 2 * sind(2 * al) / G
    L.add("intermediaire", "chute-parabolique", "Une boule de pétanque est lancée depuis le sol à $8{,}0\\ \\mathrm{m\\cdot s^{-1}}$, à $45^{\\circ}$ au-dessus de l'horizontale. En négligeant l'air, calculer sa portée ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          ["Retour au sol ($y = 0$) à la date $t = \\dfrac{2v_0\\sin\\alpha}{g}$ ; $x = v_0\\cos\\alpha \\times t$.", f"Portée : $D = \\dfrac{{v_0^2 \\sin(2\\alpha)}}{{g}} = \\dfrac{{8{{,}}0^2 \\times \\sin(90^{{\\circ}})}}{{9{{,}}81}} = {val(D, 'm', 2)}$."],
          f"$D \\approx {val(D, 'm', 2)}$")
    v0, al = 18, 35
    H = (v0 * sind(al)) ** 2 / (2 * G)
    L.add("intermediaire", "chute-parabolique", "Un ballon est frappé depuis le sol à $18\\ \\mathrm{m\\cdot s^{-1}}$, à $35^{\\circ}$ au-dessus de l'horizontale. Calculer la hauteur maximale atteinte (frottements négligés, $g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          ["Au sommet, $v_y = 0$ : $t_S = \\dfrac{v_0\\sin\\alpha}{g}$.", f"$H = y(t_S) = \\dfrac{{(v_0\\sin\\alpha)^2}}{{2g}} = \\dfrac{{(18 \\times \\sin 35^{{\\circ}})^2}}{{2 \\times 9{{,}}81}} = {val(H, 'm', 2)}$."],
          f"$H \\approx {val(H, 'm', 2)}$")
    v0, al = 28, 40
    t = v0 * sind(al) / G
    L.add("application", "chute-parabolique", "Un javelot est lancé à $28\\ \\mathrm{m\\cdot s^{-1}}$ à $40^{\\circ}$ au-dessus de l'horizontale. Au bout de combien de temps atteint-il le sommet de sa trajectoire (air négligé, $g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$) ?",
          ["$v_y(t) = -gt + v_0\\sin\\alpha$ s'annule au sommet.", f"$t_S = \\dfrac{{v_0\\sin\\alpha}}{{g}} = \\dfrac{{28 \\times \\sin 40^{{\\circ}}}}{{9{{,}}81}} = {val(t, 's', 2)}$."], f"$t_S \\approx {val(t, 's', 2)}$")
    t = math.sqrt(2 * 0.90 / G)
    L.add("intermediaire", "chute-parabolique", "Une bille quitte le bord d'une table de $0{,}90\\ \\mathrm{m}$ de haut avec une vitesse horizontale de $2{,}0\\ \\mathrm{m\\cdot s^{-1}}$. À quelle distance du pied de la table touche-t-elle le sol ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$, air négligé) ?",
          ["Avec l'origine au sol sous le bord : $x(t) = v_0 t$ et $y(t) = h - \\dfrac{1}{2}gt^2$.", f"Arrivée au sol : $t = \\sqrt{{\\dfrac{{2h}}{{g}}}} = {val(t, 's', 2)}$ ; $x = 2{{,}}0 \\times {num(t, 2)} = {val(2.0 * t, 'm', 2)}$."],
          f"$x \\approx {val(2.0 * t, 'm', 2)}$")
    t = math.sqrt(2 * 20 / G)
    L.add("probleme", "chute-parabolique", "Un caillou est lancé horizontalement à $5{,}0\\ \\mathrm{m\\cdot s^{-1}}$ du haut d'une falaise de $20\\ \\mathrm{m}$ surplombant la mer. Calculer la durée de chute et la distance horizontale parcourue (air négligé, $g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          [f"$t = \\sqrt{{\\dfrac{{2h}}{{g}}}} = \\sqrt{{\\dfrac{{2 \\times 20}}{{9{{,}}81}}}} = {val(t, 's', 2)}$.", f"$x = v_0 t = 5{{,}}0 \\times {num(t, 2)} = {val(5.0 * t, 'm', 2)}$ : la vitesse horizontale ne change pas."],
          f"$t \\approx {val(t, 's', 2)}$ ; $x \\approx {val(5.0 * t, 'm', 2)}$")
    vx, vy = 12 * cosd(60), 12 * sind(60)
    L.add("intermediaire", "chute-parabolique", "Un projectile est lancé depuis l'origine à $12\\ \\mathrm{m\\cdot s^{-1}}$, à $60^{\\circ}$ au-dessus de l'horizontale. Établir ses équations horaires (axe $y$ vers le haut, $g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$).",
          ["$\\vec a = \\vec g$ : $a_x = 0$ et $a_y = -g$. En intégrant avec $v_{0x} = v_0\\cos\\alpha$ et $v_{0y} = v_0\\sin\\alpha$ :",
           f"$x(t) = {num(vx)}\\,t$ et $y(t) = -4{{,}}91\\,t^2 + {num(vy)}\\,t$ (en m, $t$ en s)."],
          f"$x = {num(vx)}\\,t$ ; $y = -4{{,}}91\\,t^2 + {num(vy)}\\,t$")
    k = G / (2 * 10 ** 2 * cosd(45) ** 2)
    L.add("approfondissement", "chute-parabolique", "Établir l'équation de la trajectoire d'un projectile lancé depuis l'origine à $10\\ \\mathrm{m\\cdot s^{-1}}$ à $45^{\\circ}$ ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$, air négligé).",
          ["On élimine $t = \\dfrac{x}{v_0\\cos\\alpha}$ dans $y(t)$ : $y = -\\dfrac{g}{2v_0^2\\cos^2\\alpha}\\,x^2 + x\\tan\\alpha$.", f"$\\dfrac{{g}}{{2v_0^2\\cos^2\\alpha}} = \\dfrac{{9{{,}}81}}{{2 \\times 100 \\times 0{{,}}5}} = {num(k)}\\ \\mathrm{{m^{{-1}}}}$ et $\\tan 45^{{\\circ}} = 1$."],
          f"$y = -{num(k)}\\,x^2 + x$ : une parabole")
    v = 15 * cosd(50)
    L.add("intermediaire", "chute-parabolique", "Un ballon est lancé à $15\\ \\mathrm{m\\cdot s^{-1}}$, à $50^{\\circ}$ au-dessus de l'horizontale. Quelle est sa vitesse au sommet de la trajectoire (air négligé) ?",
          ["Au sommet, $v_y = 0$ ; la composante horizontale reste constante.", f"$v = v_0\\cos\\alpha = 15 \\times \\cos 50^{{\\circ}} = {val(v, MS, 2)}$."], f"$v \\approx {val(v, MS, 2)}$")
    D = 60 ** 2 * sind(30) / G
    L.add("probleme", "chute-parabolique", "Une balle de golf quitte le sol à $60\\ \\mathrm{m\\cdot s^{-1}}$, à $15^{\\circ}$ au-dessus de l'horizontale. En négligeant l'air, estimer sa portée. L'estimation est-elle réaliste ?",
          [f"$D = \\dfrac{{v_0^2\\sin(2\\alpha)}}{{g}} = \\dfrac{{60^2 \\times \\sin 30^{{\\circ}}}}{{9{{,}}81}} = {val(D, 'm', 2)}$.", "En réalité, l'air (frottements et effet de la rotation de la balle) modifie la trajectoire : c'est un ordre de grandeur."],
          f"$D \\approx {val(D, 'm', 2)}$")
    L.add("approfondissement", "chute-parabolique", "Montrer que le mouvement d'un projectile lancé avec une vitesse $\\vec v_0$ dans un champ de pesanteur uniforme est plan.",
          ["La seule force est le poids : $\\vec a = \\vec g$, vertical.", "Sur l'axe perpendiculaire au plan vertical contenant $\\vec v_0$ : $a_z = 0$ et $v_{0z} = 0$, donc $v_z = 0$ et $z(t) = 0$.", "Le mouvement reste dans le plan défini par $\\vec v_0$ et $\\vec g$."],
          "$z(t) = 0$ : mouvement dans le plan $(\\vec v_0, \\vec g)$")
    # --- particule dans un champ électrique (8)
    QE, ME, MP = 1.60e-19, 9.11e-31, 1.67e-27
    EDATA = " On donne $e = 1{,}60\\times 10^{-19}\\ \\mathrm{C}$, $m_e = 9{,}11\\times 10^{-31}\\ \\mathrm{kg}$."
    L.add("application", "condensateur", "Deux plaques parallèles distantes de $2{,}0\\ \\mathrm{cm}$ sont soumises à une tension de $400\\ \\mathrm{V}$. Calculer la valeur du champ électrique entre les plaques.",
          ["$d = 2{,}0\\times 10^{-2}\\ \\mathrm{m}$.", "$E = \\dfrac{U}{d} = \\dfrac{400}{2{,}0\\times 10^{-2}} = 2{,}0\\times 10^{4}\\ \\mathrm{V\\cdot m^{-1}}$."], "$E = 2{,}0\\times 10^{4}\\ \\mathrm{V\\cdot m^{-1}}$")
    a = QE * 2.0e4 / ME
    L.add("intermediaire", "condensateur", "Un électron est placé dans un champ électrique uniforme de $2{,}0\\times 10^{4}\\ \\mathrm{V\\cdot m^{-1}}$. Calculer la valeur de son accélération (poids négligé)." + EDATA,
          ["$m\\vec a = q\\vec E$ donc $a = \\dfrac{eE}{m_e}$.", f"$a = \\dfrac{{1{{,}}60\\times 10^{{-19}} \\times 2{{,}}0\\times 10^{{4}}}}{{9{{,}}11\\times 10^{{-31}}}} = {val(a, MS2, 2)}$."], f"$a \\approx {val(a, MS2, 2)}$")
    a = QE * 2.0e4 / MP
    L.add("intermediaire", "condensateur", "Un proton ($m_p = 1{,}67\\times 10^{-27}\\ \\mathrm{kg}$, charge $e = 1{,}60\\times 10^{-19}\\ \\mathrm{C}$) est placé dans le même champ de $2{,}0\\times 10^{4}\\ \\mathrm{V\\cdot m^{-1}}$. Calculer son accélération et la comparer à celle d'un électron.",
          [f"$a = \\dfrac{{eE}}{{m_p}} = {val(a, MS2, 2)}$, dans le sens du champ.", f"Le proton est environ ${num(MP / ME, 2)}$ fois plus lourd : son accélération est autant de fois plus faible, et de sens opposé à celle de l'électron."],
          f"$a \\approx {val(a, MS2, 2)}$")
    L.add("application", "condensateur", "Quelle tension faut-il appliquer entre deux plaques distantes de $4{,}0\\ \\mathrm{cm}$ pour obtenir un champ de $1{,}5\\times 10^{4}\\ \\mathrm{V\\cdot m^{-1}}$ ?",
          ["$U = E \\times d = 1{,}5\\times 10^{4} \\times 4{,}0\\times 10^{-2} = 600\\ \\mathrm{V}$."], "$U = 6{,}0\\times 10^{2}\\ \\mathrm{V}$")
    F, P = QE * 2.0e4, ME * G
    L.add("approfondissement", "condensateur", "Justifier que l'on néglige le poids d'un électron devant la force électrique dans un champ de $2{,}0\\times 10^{4}\\ \\mathrm{V\\cdot m^{-1}}$ ($g = 9{,}81\\ \\mathrm{m\\cdot s^{-2}}$)." + EDATA,
          [f"$F = eE = {val(F, 'N', 2)}$ ; $P = m_e g = {val(P, 'N', 2)}$.", f"$\\dfrac{{F}}{{P}} \\approx {sci(F / P, 2)}$ : le poids est totalement négligeable."], f"$\\dfrac{{F}}{{P}} \\approx {sci(F / P, 2)}$")
    a = QE * 1.0e4 / ME
    t = 0.050 / 2.0e7
    y = 0.5 * a * t * t
    L.add("probleme", "condensateur", "Un électron entre horizontalement à $2{,}0\\times 10^{7}\\ \\mathrm{m\\cdot s^{-1}}$ entre deux plaques horizontales de longueur $5{,}0\\ \\mathrm{cm}$, où règne un champ vertical de $1{,}0\\times 10^{4}\\ \\mathrm{V\\cdot m^{-1}}$. Calculer sa déviation verticale à la sortie des plaques." + EDATA,
          [f"$a = \\dfrac{{eE}}{{m_e}} = {val(a, MS2, 2)}$ (verticale) ; selon l'horizontale, le mouvement est uniforme.",
           f"Durée de traversée : $t = \\dfrac{{L}}{{v_0}} = \\dfrac{{5{{,}}0\\times 10^{{-2}}}}{{2{{,}}0\\times 10^{{7}}}} = {val(t, 's', 2)}$.",
           f"$y = \\dfrac{{1}}{{2}}at^2 = {val(y, 'm', 2)}$, soit environ ${num(y * 1000, 2)}\\ \\mathrm{{mm}}$."],
          f"$y \\approx {num(y * 1000, 2)}\\ \\mathrm{{mm}}$")
    L.qa("intermediaire", "condensateur", [
        ("Entre deux plaques chargées, le champ $\\vec E$ est dirigé de la plaque + vers la plaque −. Vers quelle plaque un électron est-il dévié ? Justifier.",
         ["$\\vec F = q\\vec E$ avec $q = -e < 0$ : la force est de sens opposé à $\\vec E$.", "L'électron est dévié vers la plaque positive."], "Vers la plaque positive"),
        ("Pourquoi la trajectoire d'un électron entrant perpendiculairement au champ entre deux plaques est-elle une parabole ?",
         ["Son accélération $\\vec a = \\dfrac{q}{m}\\vec E$ est constante, perpendiculaire à la vitesse initiale.", "C'est la même situation qu'un projectile lancé horizontalement dans le champ de pesanteur : la trajectoire est parabolique."],
         "Accélération constante : même situation qu'un projectile"),
    ])
    # --- satellites (9)
    def vorb(M, r):
        return math.sqrt(GG * M / r)
    r = RT_ + 4.10e5
    v = vorb(MT, r)
    T = 2 * math.pi * r / v
    L.add("intermediaire", "satellites", "La Station spatiale internationale (ISS) tourne autour de la Terre à $410\\ \\mathrm{km}$ d'altitude. Calculer sa vitesse et sa période." + GDATA,
          [f"Rayon de l'orbite : $r = R_T + h = 6\\,370 + 410 = 6\\,780\\ \\mathrm{{km}} = 6{{,}}78\\times 10^{{6}}\\ \\mathrm{{m}}$.",
           f"$v = \\sqrt{{\\dfrac{{GM_T}}{{r}}}} = {val(v, MS)}$ ; $T = \\dfrac{{2\\pi r}}{{v}} = {val(T, 's')}$, soit environ ${num(T / 60, 2)}\\ \\mathrm{{min}}$."],
          f"$v \\approx {val(v, MS)}$ ; $T \\approx {num(T / 60, 2)}\\ \\mathrm{{min}}$")
    r = RT_ + 5.40e5
    v = vorb(MT, r)
    L.add("intermediaire", "satellites", "Le télescope spatial Hubble orbite à $540\\ \\mathrm{km}$ d'altitude. Calculer sa vitesse orbitale." + GDATA,
          [f"$r = 6\\,370 + 540 = 6\\,910\\ \\mathrm{{km}}$.", f"$v = \\sqrt{{\\dfrac{{GM_T}}{{r}}}} = \\sqrt{{\\dfrac{{6{{,}}67\\times 10^{{-11}} \\times 5{{,}}97\\times 10^{{24}}}}{{6{{,}}91\\times 10^{{6}}}}}} = {val(v, MS)}$."],
          f"$v \\approx {val(v, MS)}$")
    r = 2.66e7
    v = vorb(MT, r)
    T = 2 * math.pi * r / v
    L.add("intermediaire", "satellites", "Les satellites GPS décrivent des orbites circulaires de rayon $2{,}66\\times 10^{7}\\ \\mathrm{m}$. Calculer leur période en heures." + GDATA,
          [f"$v = \\sqrt{{\\dfrac{{GM_T}}{{r}}}} = {val(v, MS)}$.", f"$T = \\dfrac{{2\\pi r}}{{v}} = {val(T, 's')}$, soit ${num(T / 3600, 3)}\\ \\mathrm{{h}}$ (environ deux tours par jour)."],
          f"$T \\approx {num(T / 3600, 3)}\\ \\mathrm{{h}}$")
    v = vorb(MT, 3.84e8)
    L.add("application", "satellites", "La Lune décrit autour de la Terre une orbite quasi circulaire de rayon $3{,}84\\times 10^{8}\\ \\mathrm{m}$. Calculer sa vitesse avec $v = \\sqrt{\\dfrac{GM_T}{r}}$." + GDATA,
          [f"$v = \\sqrt{{\\dfrac{{6{{,}}67\\times 10^{{-11}} \\times 5{{,}}97\\times 10^{{24}}}}{{3{{,}}84\\times 10^{{8}}}}}} = {val(v, MS)}$."], f"$v \\approx {val(v, MS)}$")
    v = vorb(6.42e23, 9.38e6)
    T = 2 * math.pi * 9.38e6 / v
    L.add("probleme", "satellites", "Phobos, satellite de Mars, décrit une orbite quasi circulaire de rayon $9{,}38\\times 10^{6}\\ \\mathrm{m}$. Calculer sa période ($M_{\\text{Mars}} = 6{,}42\\times 10^{23}\\ \\mathrm{kg}$, $G = 6{,}67\\times 10^{-11}\\ \\mathrm{N\\cdot m^2\\cdot kg^{-2}}$).",
          [f"$v = \\sqrt{{\\dfrac{{GM}}{{r}}}} = {val(v, MS)}$.", f"$T = \\dfrac{{2\\pi r}}{{v}} = {val(T, 's')}$, soit ${num(T / 3600, 3)}\\ \\mathrm{{h}}$ : Phobos fait plus de trois tours de Mars par jour martien."],
          f"$T \\approx {num(T / 3600, 3)}\\ \\mathrm{{h}}$")
    v = vorb(1.99e30, 1.50e11)
    L.add("application", "satellites", "Calculer la vitesse de la Terre sur son orbite autour du Soleil, supposée circulaire de rayon $1{,}50\\times 10^{11}\\ \\mathrm{m}$ ($M_S = 1{,}99\\times 10^{30}\\ \\mathrm{kg}$, $G = 6{,}67\\times 10^{-11}\\ \\mathrm{N\\cdot m^2\\cdot kg^{-2}}$).",
          [f"$v = \\sqrt{{\\dfrac{{GM_S}}{{r}}}} = {val(v, MS)}$, soit environ ${num(v / 1000, 2)}\\ \\mathrm{{km\\cdot s^{{-1}}}}$."], f"$v \\approx {val(v, MS)}$")
    L.add("approfondissement", "satellites", "Un élève calcule la vitesse de l'ISS en prenant $r = 410\\ \\mathrm{km}$ (son altitude). Quelle est son erreur ?",
          ["Dans $v = \\sqrt{\\dfrac{GM}{r}}$, $r$ est la distance au centre de la Terre : $r = R_T + h$.", "Avec l'altitude seule, il trouverait une vitesse environ quatre fois trop grande."],
          "Il faut $r = R_T + h$")
    L.add("approfondissement", "satellites", "Démontrer que, pour un satellite en orbite circulaire, $v = \\sqrt{\\dfrac{GM}{r}}$ et que la vitesse ne dépend pas de la masse du satellite.",
          ["Seule force : l'attraction gravitationnelle $F = \\dfrac{GMm}{r^2}$, dirigée vers le centre.", "Mouvement circulaire uniforme : $a = \\dfrac{v^2}{r}$, centripète. Deuxième loi : $\\dfrac{GMm}{r^2} = m\\dfrac{v^2}{r}$.",
           "La masse $m$ se simplifie : $v = \\sqrt{\\dfrac{GM}{r}}$."], "$v = \\sqrt{GM/r}$, indépendante de $m$")
    v1, v2 = vorb(MT, RT_ + 4.0e5), vorb(MT, 4.22e7)
    L.add("intermediaire", "satellites", "Comparer la vitesse d'un satellite en orbite basse ($r = 6{,}77\\times 10^{6}\\ \\mathrm{m}$) et celle d'un satellite géostationnaire ($r = 4{,}22\\times 10^{7}\\ \\mathrm{m}$)." + GDATA,
          [f"Orbite basse : $v = {val(v1, MS)}$ ; géostationnaire : $v = {val(v2, MS)}$.", "Plus l'orbite est haute, plus la vitesse est faible ($v$ varie comme $\\dfrac{1}{\\sqrt{r}}$)."],
          f"${val(v1, MS)}$ contre ${val(v2, MS)}$")
    # --- lois de Kepler (7)
    for nom, a_ua in [("Mars", 1.52), ("Jupiter", 5.20)]:
        T = a_ua ** 1.5
        L.add("intermediaire", "kepler", f"Le demi-grand axe de l'orbite de {nom} vaut ${fx(a_ua, 2)}$ UA (unité astronomique, demi-grand axe de l'orbite terrestre). Avec la troisième loi de Kepler, calculer sa période de révolution en années terrestres.",
              ["Pour toutes les planètes du Système solaire, $\\dfrac{T^2}{a^3}$ est la même : avec $T$ en années et $a$ en UA, elle vaut 1 (cas de la Terre).", f"$T = a^{{3/2}} = {fx(a_ua, 2)}^{{3/2}} = {num(T)}$ ans."],
              f"$T \\approx {num(T)}$ ans")
    a_ua = 29.5 ** (2 / 3)
    L.add("intermediaire", "kepler", "Saturne fait le tour du Soleil en $29{,}5$ ans. En déduire le demi-grand axe de son orbite en unités astronomiques.",
          ["$\\dfrac{T^2}{a^3} = 1$ avec $T$ en années et $a$ en UA.", f"$a = T^{{2/3}} = 29{{,}}5^{{2/3}} = {num(a_ua)}$ UA."], f"$a \\approx {num(a_ua)}$ UA")
    r = (GG * MT * 86164 ** 2 / (4 * math.pi ** 2)) ** (1 / 3)
    L.add("probleme", "kepler", "Un satellite géostationnaire a une période de $86\\,164\\ \\mathrm{s}$. Calculer le rayon de son orbite puis son altitude." + GDATA,
          ["Troisième loi : $\\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{GM_T}$, donc $r = \\left(\\dfrac{GM_T T^2}{4\\pi^2}\\right)^{1/3}$.",
           f"$r = {val(r, 'm')}$ ; altitude $h = r - R_T = {val(r - RT_, 'm')}$, soit environ ${num((r - RT_) / 1000, 2)}\\ \\mathrm{{km}}$."],
          f"$h \\approx {num((r - RT_) / 1000, 2)}\\ \\mathrm{{km}}$")
    k = 4 * math.pi ** 2 / (GG * 1.99e30)
    L.add("approfondissement", "kepler", "Calculer la constante $\\dfrac{T^2}{a^3}$ des planètes du Système solaire, en unités SI ($M_S = 1{,}99\\times 10^{30}\\ \\mathrm{kg}$, $G = 6{,}67\\times 10^{-11}\\ \\mathrm{N\\cdot m^2\\cdot kg^{-2}}$). Vérifier avec la Terre ($T = 3{,}156\\times 10^{7}\\ \\mathrm{s}$, $a = 1{,}496\\times 10^{11}\\ \\mathrm{m}$).",
          [f"$\\dfrac{{4\\pi^2}}{{GM_S}} = {val(k, S2M3)}$.", f"Terre : $\\dfrac{{(3{{,}}156\\times 10^{{7}})^2}}{{(1{{,}}496\\times 10^{{11}})^3}} = {val((3.156e7) ** 2 / (1.496e11) ** 3, S2M3)}$ : les deux valeurs concordent."],
          f"$\\approx {val(k, S2M3)}$")
    T = 27.3 * 86400
    M = 4 * math.pi ** 2 * (3.84e8) ** 3 / (GG * T ** 2)
    L.add("probleme", "kepler", "La Lune tourne autour de la Terre en $27{,}3$ jours sur une orbite quasi circulaire de rayon $3{,}84\\times 10^{8}\\ \\mathrm{m}$. En déduire la masse de la Terre ($G = 6{,}67\\times 10^{-11}\\ \\mathrm{N\\cdot m^2\\cdot kg^{-2}}$).",
          [f"$T = 27{{,}}3 \\times 86\\,400 = {val(T, 's')}$.", f"Troisième loi : $M_T = \\dfrac{{4\\pi^2 r^3}}{{G T^2}} = {val(M, 'kg')}$, proche de la valeur admise ($5{{,}}97\\times 10^{{24}}\\ \\mathrm{{kg}}$)."],
          f"$M_T \\approx {val(M, 'kg')}$")
    Te = 1.77 * (6.71 / 4.22) ** 1.5
    L.add("approfondissement", "kepler", "Io, satellite de Jupiter, a une orbite de rayon $4{,}22\\times 10^{5}\\ \\mathrm{km}$ et une période de $1{,}77$ jour. Europe orbite à $6{,}71\\times 10^{5}\\ \\mathrm{km}$. Calculer la période d'Europe.",
          ["Les deux satellites tournent autour du même astre : $\\dfrac{T_E^2}{r_E^3} = \\dfrac{T_I^2}{r_I^3}$.", f"$T_E = T_I \\left(\\dfrac{{r_E}}{{r_I}}\\right)^{{3/2}} = 1{{,}}77 \\times \\left(\\dfrac{{6{{,}}71}}{{4{{,}}22}}\\right)^{{3/2}} = {num(Te)}$ jours."],
          f"$T_E \\approx {num(Te)}$ jours")
    # --- cours (8)
    L.vf("application", "cours", [
        ("La deuxième loi de Newton s'applique dans n'importe quel référentiel.", False, "Faux : elle n'est valable que dans un référentiel galiléen."),
        ("Le vecteur accélération a toujours la direction et le sens de la somme des forces.", True, "Vrai : $\\sum\\vec F = m\\vec a$ avec $m > 0$."),
        ("En chute libre, un corps lourd a une accélération plus grande qu'un corps léger.", False, "Faux : $\\vec a = \\vec g$, la masse se simplifie."),
        ("Le référentiel géocentrique est adapté à l'étude des satellites de la Terre.", True, "Vrai : on le considère galiléen pour ces mouvements."),
        ("Un satellite géostationnaire a une période de 24 h exactement.", False, "Faux : sa période est le jour sidéral, environ 23 h 56 min ($86\\,164\\ \\mathrm{s}$)."),
        ("Un satellite géostationnaire doit orbiter dans le plan de l'équateur.", True, "Vrai : c'est la seule façon de rester au-dessus du même point de la Terre."),
        ("La vitesse d'un satellite en orbite circulaire dépend de sa masse.", False, "Faux : $v = \\sqrt{\\dfrac{GM}{r}}$ ne dépend que de la masse de l'astre central et du rayon."),
        ("Selon la deuxième loi de Kepler, une planète va plus vite près du Soleil.", True, "Vrai : loi des aires ; elle est plus rapide au périhélie."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — LUNETTE ASTRONOMIQUE ET MODÈLE DU PHOTON
# =====================================================================

HP, CC, EV = 6.63e-34, 3.00e8, 1.60e-19
PDATA = " On donne $h = 6{,}63\\times 10^{-34}\\ \\mathrm{J\\cdot s}$, $c = 3{,}00\\times 10^{8}\\ \\mathrm{m\\cdot s^{-1}}$ et $1\\ \\mathrm{eV} = 1{,}60\\times 10^{-19}\\ \\mathrm{J}$."


def gen_T_lunette_photons():
    L = _Lot()
    # --- grossissement (9)
    for f1, f1t, f2, f2t, conv in [(900, "900\\ \\mathrm{mm}", 25, "25\\ \\mathrm{mm}", None), (1200, "1{,}2\\ \\mathrm{m}", 20, "20\\ \\mathrm{mm}", "f'_1 = 1{,}2\\ \\mathrm{m} = 1\\,200\\ \\mathrm{mm}"),
                                   (700, "700\\ \\mathrm{mm}", 10, "10\\ \\mathrm{mm}", None)]:
        Gr = f1 / f2
        L.add("application" if conv is None else "intermediaire", "grossissement", f"Une lunette astronomique afocale a un objectif de distance focale $f'_1 = {f1t}$ et un oculaire de distance focale $f'_2 = {f2t}$. Calculer son grossissement.",
              ([f"Mêmes unités : ${conv}$."] if conv else []) + [f"$G = \\dfrac{{f'_1}}{{f'_2}} = \\dfrac{{{ex(f1)}}}{{{ex(f2)}}} = {num(Gr, 2)}$ (sans unité)."], f"$G = {num(Gr, 2)}$")
    L.add("intermediaire", "grossissement", "On veut un grossissement de $125$ avec un objectif de distance focale $1{,}0\\ \\mathrm{m}$. Quelle distance focale doit avoir l'oculaire ?",
          ["$G = \\dfrac{f'_1}{f'_2}$ donc $f'_2 = \\dfrac{f'_1}{G}$.", "$f'_2 = \\dfrac{1\\,000\\ \\mathrm{mm}}{125} = 8{,}0\\ \\mathrm{mm}$."], "$f'_2 = 8{,}0\\ \\mathrm{mm}$")
    L.add("intermediaire", "grossissement", "Avec un oculaire de $6{,}0\\ \\mathrm{mm}$, une lunette afocale grossit $150$ fois. Quelle est la distance focale de l'objectif ?",
          ["$f'_1 = G \\times f'_2 = 150 \\times 6{,}0 = 900\\ \\mathrm{mm}$."], "$f'_1 = 900\\ \\mathrm{mm}$")
    L.add("application", "grossissement", "Une lunette afocale a un objectif de $900\\ \\mathrm{mm}$ et un oculaire de $25\\ \\mathrm{mm}$. Quelle est la distance entre les deux lentilles ?",
          ["Lunette afocale : $\\mathrm{F'_1} = \\mathrm{F_2}$, donc $\\overline{O_1O_2} = f'_1 + f'_2$.", "$\\overline{O_1O_2} = 900 + 25 = 925\\ \\mathrm{mm}$."], "$925\\ \\mathrm{mm}$")
    L.add("approfondissement", "grossissement", "Une lunette afocale mesure $1\\,050\\ \\mathrm{mm}$ entre l'objectif et l'oculaire et grossit $20$ fois. Calculer les deux distances focales.",
          ["$f'_1 + f'_2 = 1\\,050\\ \\mathrm{mm}$ et $f'_1 = 20\\,f'_2$.", "$21\\,f'_2 = 1\\,050$ donc $f'_2 = 50\\ \\mathrm{mm}$ et $f'_1 = 1\\,000\\ \\mathrm{mm}$."], "$f'_1 = 1\\,000\\ \\mathrm{mm}$ ; $f'_2 = 50\\ \\mathrm{mm}$")
    L.add("intermediaire", "grossissement", "Sur une lunette d'objectif $900\\ \\mathrm{mm}$, on remplace l'oculaire de $25\\ \\mathrm{mm}$ par un oculaire de $9{,}0\\ \\mathrm{mm}$. Comment évolue le grossissement ?",
          ["Avant : $G = \\dfrac{900}{25} = 36$.", "Après : $G = \\dfrac{900}{9{,}0} = 100$ : plus l'oculaire a une courte focale, plus le grossissement est grand."], "Il passe de 36 à 100")
    L.add("approfondissement", "grossissement", "Un élève trouve $G = \\dfrac{f'_2}{f'_1} = 0{,}028$ pour une lunette d'objectif $900\\ \\mathrm{mm}$ et d'oculaire $25\\ \\mathrm{mm}$. Que faut-il en penser ?",
          ["Un grossissement inférieur à 1 pour une lunette doit alerter : il a inversé le rapport.", "$G = \\dfrac{f'_1}{f'_2} = \\dfrac{900}{25} = 36$ : l'objectif (grande focale) est au numérateur."], "Erreur : $G = 36$")
    # --- angles et image intermédiaire (6)
    al = 3474 / 384400
    L.add("intermediaire", "angles", "La Lune ($3\\,474\\ \\mathrm{km}$ de diamètre) est à $384\\,400\\ \\mathrm{km}$ de la Terre. Calculer l'angle $\\alpha$ sous lequel on la voit à l'œil nu, puis l'angle $\\alpha'$ à travers une lunette de grossissement 50.",
          [f"Petit angle : $\\alpha \\approx \\dfrac{{3\\,474}}{{384\\,400}} = {val(al, 'rad')}$.", f"$\\alpha' = G\\,\\alpha = 50 \\times {sci(al)} = {val(50 * al, 'rad')}$."],
          f"$\\alpha \\approx {val(al, 'rad')}$ ; $\\alpha' \\approx {val(50 * al, 'rad')}$")
    L.add("intermediaire", "angles", f"L'objectif d'une lunette a une distance focale de $1{{,}}0\\ \\mathrm{{m}}$. La Lune est vue sous l'angle $\\alpha = {sci(al)}\\ \\mathrm{{rad}}$. Quelle est la taille de son image intermédiaire $\\mathrm{{A'B'}}$ ?",
          ["L'image intermédiaire se forme dans le plan focal image de l'objectif : $\\alpha \\approx \\dfrac{\\mathrm{A'B'}}{f'_1}$.", f"$\\mathrm{{A'B'}} = f'_1\\,\\alpha = 1{{,}}0 \\times {sci(al)} = {val(al, 'm')}$, soit environ ${num(al * 1000, 2)}\\ \\mathrm{{mm}}$."],
          f"$\\mathrm{{A'B'}} \\approx {num(al * 1000, 2)}\\ \\mathrm{{mm}}$")
    L.add("probleme", "angles", "Jupiter est vue à l'œil nu sous un angle d'environ $2{,}2\\times 10^{-4}\\ \\mathrm{rad}$, inférieur au pouvoir séparateur de l'œil ($3\\times 10^{-4}\\ \\mathrm{rad}$). La voit-on comme un disque avec une lunette de grossissement 100 ?",
          ["$\\alpha' = G\\,\\alpha = 100 \\times 2{,}2\\times 10^{-4} = 2{,}2\\times 10^{-2}\\ \\mathrm{rad}$.", "C'est bien supérieur au pouvoir séparateur de l'œil : on distingue un disque."],
          "Oui : $\\alpha' = 2{,}2\\times 10^{-2}\\ \\mathrm{rad}$")
    L.add("application", "angles", "Quel grossissement faut-il pour qu'un objet vu sous $2{,}0\\times 10^{-4}\\ \\mathrm{rad}$ à l'œil nu apparaisse sous $1{,}0\\times 10^{-2}\\ \\mathrm{rad}$ ?",
          ["$G = \\dfrac{\\alpha'}{\\alpha} = \\dfrac{1{,}0\\times 10^{-2}}{2{,}0\\times 10^{-4}} = 50$."], "$G = 50$")
    ac = 50 / 384400
    L.add("probleme", "angles", "Un cratère lunaire mesure $50\\ \\mathrm{km}$ de diamètre. Sous quel angle le voit-on à l'œil nu (distance Terre-Lune : $384\\,400\\ \\mathrm{km}$) ? Est-il visible à travers une lunette de grossissement 36 (pouvoir séparateur de l'œil : $3\\times 10^{-4}\\ \\mathrm{rad}$) ?",
          [f"$\\alpha \\approx \\dfrac{{50}}{{384\\,400}} = {val(ac, 'rad')}$ : trop petit pour l'œil nu.", f"$\\alpha' = 36 \\times {sci(ac)} = {val(36 * ac, 'rad')}$ : supérieur à $3\\times 10^{{-4}}\\ \\mathrm{{rad}}$, le cratère devient visible."],
          f"Oui : $\\alpha' \\approx {val(36 * ac, 'rad')}$")
    L.add("approfondissement", "angles", "Établir l'expression du grossissement $G = \\dfrac{\\alpha'}{\\alpha}$ d'une lunette afocale en fonction de $f'_1$ et $f'_2$.",
          ["L'image intermédiaire $\\mathrm{A'B'}$ est dans le plan focal image de l'objectif : $\\alpha \\approx \\dfrac{\\mathrm{A'B'}}{f'_1}$.",
           "Elle est aussi dans le plan focal objet de l'oculaire : $\\alpha' \\approx \\dfrac{\\mathrm{A'B'}}{f'_2}$.", "En faisant le rapport, $\\mathrm{A'B'}$ se simplifie : $G = \\dfrac{f'_1}{f'_2}$."],
          "$G = \\dfrac{f'_1}{f'_2}$")
    # --- énergie d'un photon (10)
    for lam, coul in [(650, "rouge"), (450, "bleue"), (532, "verte (laser)"), (254, "ultraviolette (lampe UV)"), (940, "infrarouge (télécommande)")]:
        E = HP * CC / (lam * 1e-9)
        L.add("application" if lam in (650, 450) else "intermediaire", "energie-photon", f"Calculer l'énergie d'un photon d'une radiation {coul} de longueur d'onde ${lam}\\ \\mathrm{{nm}}$, en joules puis en électronvolts." + PDATA,
              [f"$\\lambda = {lam}\\times 10^{{-9}}\\ \\mathrm{{m}}$.", f"$E = \\dfrac{{hc}}{{\\lambda}} = \\dfrac{{6{{,}}63\\times 10^{{-34}} \\times 3{{,}}00\\times 10^{{8}}}}{{{lam}\\times 10^{{-9}}}} = {val(E, 'J')}$.",
               f"$E = \\dfrac{{{sci(E)}}}{{1{{,}}60\\times 10^{{-19}}}} = {val(E / EV, 'eV')}$."],
              f"$E \\approx {val(E, 'J')}$ soit ${val(E / EV, 'eV')}$")
    nu = 2.0 * EV / HP
    L.add("intermediaire", "energie-photon", "Un photon a une énergie de $2{,}0\\ \\mathrm{eV}$. Calculer la fréquence et la longueur d'onde de la radiation associée." + PDATA,
          [f"$E = 2{{,}}0 \\times 1{{,}}60\\times 10^{{-19}} = {val(2 * EV, 'J', 2)}$.", f"$\\nu = \\dfrac{{E}}{{h}} = {val(nu, 'Hz', 2)}$ ; $\\lambda = \\dfrac{{c}}{{\\nu}} = {val(CC / nu, 'm', 2)}$, soit ${num(CC / nu * 1e9, 2)}\\ \\mathrm{{nm}}$ (orangé)."],
          f"$\\nu \\approx {val(nu, 'Hz', 2)}$ ; $\\lambda \\approx {num(CC / nu * 1e9, 2)}\\ \\mathrm{{nm}}$")
    lam = HP * CC / (3.0 * EV)
    L.add("intermediaire", "energie-photon", "Quelle est la longueur d'onde d'un photon de $3{,}0\\ \\mathrm{eV}$ ? Dans quel domaine se situe-t-elle ?" + PDATA,
          ["$E = 3{,}0 \\times 1{,}60\\times 10^{-19} = 4{,}8\\times 10^{-19}\\ \\mathrm{J}$.", f"$\\lambda = \\dfrac{{hc}}{{E}} = {val(lam, 'm', 2)}$, soit ${num(lam * 1e9, 2)}\\ \\mathrm{{nm}}$ : limite du violet et de l'ultraviolet."],
          f"$\\lambda \\approx {num(lam * 1e9, 2)}\\ \\mathrm{{nm}}$")
    Eph = HP * CC / 633e-9
    N = 1.0e-3 / Eph
    L.add("probleme", "energie-photon", "Un pointeur laser de puissance $1{,}0\\ \\mathrm{mW}$ émet à $633\\ \\mathrm{nm}$. Combien de photons émet-il par seconde ?" + PDATA,
          [f"Énergie d'un photon : $E = \\dfrac{{hc}}{{\\lambda}} = {val(Eph, 'J')}$.", f"En une seconde, il émet $1{{,}}0\\times 10^{{-3}}\\ \\mathrm{{J}}$ : $N = \\dfrac{{1{{,}}0\\times 10^{{-3}}}}{{{sci(Eph)}}} = {sci(N, 2)}$ photons."],
          f"$N \\approx {sci(N, 2)}$ photons par seconde")
    E = HP * 2.45e9
    L.add("approfondissement", "energie-photon", "Un four à micro-ondes émet à $2{,}45\\ \\mathrm{GHz}$. Calculer l'énergie d'un photon micro-onde et la comparer à celle d'un photon visible (environ $2\\ \\mathrm{eV}$)." + PDATA,
          [f"$E = h\\nu = 6{{,}}63\\times 10^{{-34}} \\times 2{{,}}45\\times 10^{{9}} = {val(E, 'J')}$, soit ${val(E / EV, 'eV')}$.", f"Rapport : $\\dfrac{{2}}{{{num(E / EV)}}} \\approx {sci(2 / (E / EV), 1)}$ : c'est environ deux cent mille fois moins qu'un photon visible."],
          f"$E \\approx {val(E / EV, 'eV')}$")
    E = HP * CC / 0.10e-9
    L.add("approfondissement", "energie-photon", "En radiographie médicale, on utilise des rayons X de longueur d'onde voisine de $0{,}10\\ \\mathrm{nm}$. Calculer l'énergie d'un photon X en eV et la comparer à celle d'un photon visible (environ $2\\ \\mathrm{eV}$)." + PDATA,
          [f"$E = \\dfrac{{hc}}{{\\lambda}} = \\dfrac{{6{{,}}63\\times 10^{{-34}} \\times 3{{,}}00\\times 10^{{8}}}}{{1{{,}}0\\times 10^{{-10}}}} = {val(E, 'J', 2)}$, soit ${val(E / EV, 'eV', 2)}$.",
           "Un photon X est des milliers de fois plus énergétique qu'un photon visible : il peut ioniser les atomes, d'où les précautions en radiologie."],
          f"$E \\approx {val(E / EV, 'eV', 2)}$")
    # --- effet photoélectrique (10)
    metaux = [("du césium", 2.1), ("du calcium", 2.9), ("du zinc", 4.3), ("du cuivre", 4.7)]
    for nom, W in metaux:
        lam0 = HP * CC / (W * EV)
        L.add("intermediaire", "photoelectrique", f"Le travail d'extraction {nom} vaut $W = {ex(W)}\\ \\mathrm{{eV}}$. Calculer la longueur d'onde seuil $\\lambda_0$ de l'effet photoélectrique pour ce métal." + PDATA,
              [f"$W = {ex(W)} \\times 1{{,}}60\\times 10^{{-19}} = {val(W * EV, 'J', 2)}$.", f"$\\lambda_0 = \\dfrac{{hc}}{{W}} = {val(lam0, 'm', 2)}$, soit ${num(lam0 * 1e9, 2)}\\ \\mathrm{{nm}}$.",
               "Seules les radiations de longueur d'onde inférieure à $\\lambda_0$ arrachent des électrons."],
              f"$\\lambda_0 \\approx {num(lam0 * 1e9, 2)}\\ \\mathrm{{nm}}$")
    E500, E254 = HP * CC / 500e-9 / EV, HP * CC / 254e-9 / EV
    L.add("approfondissement", "photoelectrique", "Une plaque de zinc ($W = 4{,}3\\ \\mathrm{eV}$) est éclairée par une lumière visible de $500\\ \\mathrm{nm}$, puis par une lampe UV de $254\\ \\mathrm{nm}$. Dans quel cas des électrons sont-ils émis ? Calculer alors leur énergie cinétique maximale." + PDATA,
          [f"À $500\\ \\mathrm{{nm}}$ : $E = {val(E500, 'eV', 2)} < W$ : aucun électron n'est émis, même avec une lumière intense.",
           f"À $254\\ \\mathrm{{nm}}$ : $E = {val(E254, 'eV', 2)} > W$ ; $E_c = E - W = {val(E254 - 4.3, 'eV', 2)}$."],
          f"Seulement en UV ; $E_c \\approx {val(E254 - 4.3, 'eV', 2)}$")
    E = HP * CC / 400e-9 / EV
    Ec = E - 2.1
    v = math.sqrt(2 * Ec * EV / 9.11e-31)
    L.add("intermediaire", "photoelectrique", "Une cellule au césium ($W = 2{,}1\\ \\mathrm{eV}$) est éclairée en lumière violette de $400\\ \\mathrm{nm}$. Calculer l'énergie cinétique maximale des électrons émis, en eV puis en joules." + PDATA,
          [f"$E = \\dfrac{{hc}}{{\\lambda}} = {val(E, 'eV')}$.", f"$E_c = E - W = {num(E)} - 2{{,}}1 = {val(Ec, 'eV', 2)}$, soit ${val(Ec * EV, 'J', 2)}$."],
          f"$E_c \\approx {val(Ec, 'eV', 2)}$")
    L.add("approfondissement", "photoelectrique", f"Les électrons émis par le césium éclairé à $400\\ \\mathrm{{nm}}$ ont une énergie cinétique maximale de ${val(Ec * EV, 'J', 2)}$. Calculer leur vitesse maximale ($m_e = 9{{,}}11\\times 10^{{-31}}\\ \\mathrm{{kg}}$).",
          ["$E_c = \\dfrac{1}{2}m_e v^2$ donc $v = \\sqrt{\\dfrac{2E_c}{m_e}}$.", f"$v = {val(v, MS, 2)}$."], f"$v \\approx {val(v, MS, 2)}$")
    W = HP * CC / 505e-9 / EV
    L.add("intermediaire", "photoelectrique", "Pour un métal, on mesure une longueur d'onde seuil $\\lambda_0 = 505\\ \\mathrm{nm}$. Calculer son travail d'extraction en eV." + PDATA,
          [f"$W = \\dfrac{{hc}}{{\\lambda_0}} = {val(W * EV, 'J')}$, soit ${val(W, 'eV')}$."], f"$W \\approx {val(W, 'eV')}$")
    E = HP * CC / 300e-9 / EV
    L.add("approfondissement", "photoelectrique", "Un métal éclairé à $300\\ \\mathrm{nm}$ émet des électrons d'énergie cinétique maximale $1{,}5\\ \\mathrm{eV}$. Calculer son travail d'extraction." + PDATA,
          [f"$E = \\dfrac{{hc}}{{\\lambda}} = {val(E, 'eV')}$.", f"$W = E - E_c = {num(E)} - 1{{,}}5 = {val(E - 1.5, 'eV', 2)}$."], f"$W \\approx {val(E - 1.5, 'eV', 2)}$")
    L.add("approfondissement", "photoelectrique", "Pourquoi augmenter l'intensité d'une lumière rouge ne permet-il pas d'arracher des électrons à une plaque de zinc, alors qu'une faible lumière UV y parvient ?",
          ["Un électron absorbe un seul photon : il faut que l'énergie $h\\nu$ de chaque photon dépasse le travail d'extraction.", "Augmenter l'intensité augmente le nombre de photons, pas l'énergie de chacun ; seule la fréquence (UV) permet de franchir le seuil."],
          "C'est la fréquence, pas l'intensité, qui compte")
    # --- transitions atomiques (7)
    def En(n):
        return -13.6 / n ** 2
    for hi, lo in [(3, 2), (4, 2), (5, 2), (2, 1)]:
        dE = En(hi) - En(lo)
        lam = HP * CC / (dE * EV)
        dom = "visible" if 400e-9 <= lam <= 800e-9 else ("ultraviolet" if lam < 400e-9 else "infrarouge")
        L.add("intermediaire", "transitions", f"Les niveaux d'énergie de l'atome d'hydrogène sont $E_n = -\\dfrac{{13{{,}}6}}{{n^2}}$ (en eV). Calculer la longueur d'onde du photon émis lors de la transition du niveau $n = {hi}$ au niveau $n = {lo}$, et préciser son domaine." + PDATA,
              [f"$E_{hi} = {num(En(hi))}\\ \\mathrm{{eV}}$ et $E_{lo} = {num(En(lo))}\\ \\mathrm{{eV}}$ ; $\\Delta E = {val(dE, 'eV')}$.",
               f"$\\lambda = \\dfrac{{hc}}{{\\Delta E}} = \\dfrac{{6{{,}}63\\times 10^{{-34}} \\times 3{{,}}00\\times 10^{{8}}}}{{{num(dE)} \\times 1{{,}}60\\times 10^{{-19}}}} = {val(lam, 'm')}$, soit ${num(lam * 1e9)}\\ \\mathrm{{nm}}$ ({dom})."],
              f"$\\lambda \\approx {num(lam * 1e9)}\\ \\mathrm{{nm}}$ ({dom})")
    L.add("intermediaire", "transitions", "Quelle énergie minimale faut-il fournir pour ioniser un atome d'hydrogène pris dans son état fondamental ($E_1 = -13{,}6\\ \\mathrm{eV}$) ? Quelle est la longueur d'onde du photon correspondant ?" + PDATA,
          ["Il faut amener l'électron du niveau $E_1$ au niveau $0$ : $\\Delta E = 13{,}6\\ \\mathrm{eV}$.", f"$\\lambda = \\dfrac{{hc}}{{\\Delta E}} = {val(HP * CC / (13.6 * EV), 'm')}$, soit ${num(HP * CC / (13.6 * EV) * 1e9)}\\ \\mathrm{{nm}}$ (ultraviolet)."],
          f"$13{{,}}6\\ \\mathrm{{eV}}$ ; $\\lambda \\approx {num(HP * CC / (13.6 * EV) * 1e9)}\\ \\mathrm{{nm}}$")
    dE = HP * CC / 589e-9 / EV
    L.add("application", "transitions", "Les lampes à vapeur de sodium émettent une lumière jaune de $589\\ \\mathrm{nm}$. Quel est l'écart entre les deux niveaux d'énergie concernés, en eV ?" + PDATA,
          [f"$\\Delta E = \\dfrac{{hc}}{{\\lambda}} = {val(dE * EV, 'J')}$, soit ${val(dE, 'eV')}$."], f"$\\Delta E \\approx {val(dE, 'eV')}$")
    L.add("approfondissement", "transitions", "Un atome d'hydrogène dans son état fondamental reçoit un photon de $11{,}0\\ \\mathrm{eV}$. Peut-il l'absorber ? (Niveaux : $E_1 = -13{,}6\\ \\mathrm{eV}$, $E_2 = -3{,}40\\ \\mathrm{eV}$, $E_3 = -1{,}51\\ \\mathrm{eV}$.)",
          ["Absorber un photon, c'est passer à un niveau supérieur : il faut que $h\\nu$ soit exactement égal à un écart entre niveaux.", "$E_2 - E_1 = 10{,}2\\ \\mathrm{eV}$ et $E_3 - E_1 = 12{,}1\\ \\mathrm{eV}$ : $11{,}0\\ \\mathrm{eV}$ ne correspond à aucune transition."],
          "Non")
    # --- cours (8)
    L.vf("application", "cours", [
        ("Dans une lunette afocale, le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire.", True, "Vrai : $\\mathrm{F'_1} = \\mathrm{F_2}$, l'image d'un objet à l'infini est renvoyée à l'infini."),
        ("Le grossissement d'une lunette s'exprime en mètres.", False, "Faux : c'est un rapport d'angles, sans unité."),
        ("L'objectif d'une lunette a une grande distance focale, l'oculaire une petite.", True, "Vrai : c'est ce qui donne $G = \\dfrac{f'_1}{f'_2} > 1$."),
        ("Un photon a une masse non nulle.", False, "Faux : sa masse est nulle ; il se déplace à la vitesse $c$ dans le vide."),
        ("Un photon bleu transporte plus d'énergie qu'un photon rouge.", True, "Vrai : $E = \\dfrac{hc}{\\lambda}$ et $\\lambda_{\\text{bleu}} < \\lambda_{\\text{rouge}}$."),
        ("Pour convertir une énergie de joules en électronvolts, on multiplie par $1{,}60\\times 10^{-19}$.", False, "Faux : on divise par $1{,}60\\times 10^{-19}$."),
        ("L'effet photoélectrique s'explique par le modèle ondulatoire de la lumière.", False, "Faux : l'existence d'un seuil en fréquence s'explique par le modèle du photon."),
        ("L'énergie cinétique maximale des électrons émis augmente avec la fréquence de la lumière.", True, "Vrai : $E_c = h\\nu - W$ croît linéairement avec $\\nu$."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — MÉTHODES PHYSIQUES D'ANALYSE
# =====================================================================

EPS = "L\\cdot mol^{-1}\\cdot cm^{-1}"


def gen_T_methodes_analyse():
    L = _Lot()
    # --- Beer-Lambert (9)
    A = 2.2e3 * 1.0 * 1.5e-4
    L.add("application", "beer-lambert", "Une solution de permanganate de potassium à $1{,}5\\times 10^{-4}\\ \\mathrm{mol\\cdot L^{-1}}$ est placée dans une cuve de $1{,}0\\ \\mathrm{cm}$. À $525\\ \\mathrm{nm}$, $\\varepsilon = 2{,}2\\times 10^{3}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$. Calculer l'absorbance.",
          [f"$A = \\varepsilon\\,\\ell\\,c = 2{{,}}2\\times 10^{{3}} \\times 1{{,}}0 \\times 1{{,}}5\\times 10^{{-4}} = {num(A, 2)}$ (sans unité)."], f"$A = {num(A, 2)}$")
    c = 0.52 / 7.4e4
    L.add("application", "beer-lambert", "Une solution de bleu de méthylène a une absorbance de $0{,}52$ à $664\\ \\mathrm{nm}$ dans une cuve de $1{,}0\\ \\mathrm{cm}$ ; $\\varepsilon = 7{,}4\\times 10^{4}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$. Calculer sa concentration.",
          [f"$c = \\dfrac{{A}}{{\\varepsilon\\,\\ell}} = \\dfrac{{0{{,}}52}}{{7{{,}}4\\times 10^{{4}} \\times 1{{,}}0}} = {val(c, MOLL, 2)}$."], f"$c \\approx {val(c, MOLL, 2)}$")
    L.add("intermediaire", "beer-lambert", "Une solution de concentration $3{,}0\\times 10^{-4}\\ \\mathrm{mol\\cdot L^{-1}}$ a une absorbance de $0{,}45$ dans une cuve de $1{,}0\\ \\mathrm{cm}$. Calculer le coefficient d'absorption molaire $\\varepsilon$ à cette longueur d'onde.",
          ["$\\varepsilon = \\dfrac{A}{\\ell\\,c} = \\dfrac{0{,}45}{1{,}0 \\times 3{,}0\\times 10^{-4}} = 1{,}5\\times 10^{3}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$."], "$\\varepsilon = 1{,}5\\times 10^{3}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$")
    c = 0.65 / 1.3e5
    L.add("intermediaire", "beer-lambert", "Un sirop dilué contient le colorant bleu E133 ($\\varepsilon = 1{,}3\\times 10^{5}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$ à $630\\ \\mathrm{nm}$). Son absorbance vaut $0{,}65$ dans une cuve de $1{,}0\\ \\mathrm{cm}$. Calculer la concentration en colorant.",
          [f"$c = \\dfrac{{0{{,}}65}}{{1{{,}}3\\times 10^{{5}} \\times 1{{,}}0}} = {val(c, MOLL, 2)}$."], f"$c = {val(c, MOLL, 2)}$")
    c = 0.47 / 4.7e3
    L.add("application", "beer-lambert", "Une solution d'ions thiocyanatofer(III) a une absorbance de $0{,}47$ à $450\\ \\mathrm{nm}$ dans une cuve de $1{,}0\\ \\mathrm{cm}$ ($\\varepsilon = 4{,}7\\times 10^{3}\\ \\mathrm{L\\cdot mol^{-1}\\cdot cm^{-1}}$). Calculer sa concentration.",
          [f"$c = \\dfrac{{0{{,}}47}}{{4{{,}}7\\times 10^{{3}} \\times 1{{,}}0}} = {val(c, MOLL, 2)}$."], f"$c = {val(c, MOLL, 2)}$")
    c = 0.52 / 7.4e4
    L.add("intermediaire", "beer-lambert", f"La concentration en bleu de méthylène ($M = 319{{,}}9\\ \\mathrm{{g\\cdot mol^{{-1}}}}$) d'une solution vaut ${val(c, MOLL, 2)}$. Exprimer sa concentration en masse en $\\mathrm{{mg\\cdot L^{{-1}}}}$.",
          [f"$C_m = c \\times M = {sci(c, 2)} \\times 319{{,}}9 = {val(c * 319.9, GL, 2)}$, soit ${num(c * 319.9 * 1000, 2)}\\ \\mathrm{{mg\\cdot L^{{-1}}}}$."], f"$C_m \\approx {num(c * 319.9 * 1000, 2)}\\ \\mathrm{{mg\\cdot L^{{-1}}}}$")
    L.add("approfondissement", "beer-lambert", "Une solution trop concentrée donne $A = 2{,}4$. On la dilue 10 fois et on mesure $A' = 0{,}24$. Avec $\\varepsilon\\,\\ell = 1{,}2\\times 10^{3}\\ \\mathrm{L\\cdot mol^{-1}}$, calculer la concentration de la solution initiale.",
          ["Beer-Lambert n'est fiable que pour des solutions diluées : on exploite la mesure $A' = 0{,}24$.", "$c' = \\dfrac{0{,}24}{1{,}2\\times 10^{3}} = 2{,}0\\times 10^{-4}\\ \\mathrm{mol\\cdot L^{-1}}$ ; $c = 10\\,c' = 2{,}0\\times 10^{-3}\\ \\mathrm{mol\\cdot L^{-1}}$."],
          "$c = 2{,}0\\times 10^{-3}\\ \\mathrm{mol\\cdot L^{-1}}$")
    L.add("application", "beer-lambert", "On remplace une cuve de $1{,}0\\ \\mathrm{cm}$ par une cuve de $2{,}0\\ \\mathrm{cm}$ pour la même solution, à la même longueur d'onde. Comment varie l'absorbance ?",
          ["$A = \\varepsilon\\,\\ell\\,c$ est proportionnelle à l'épaisseur traversée.", "L'absorbance double."], "Elle double")
    L.add("approfondissement", "beer-lambert", "À quelles conditions la loi de Beer-Lambert est-elle valable ? Pourquoi règle-t-on le spectrophotomètre sur $\\lambda_{\\max}$ ?",
          ["Solution diluée (absorbance pas trop grande) et lumière monochromatique.", "À $\\lambda_{\\max}$, l'absorbance est la plus grande : la mesure est plus précise et moins sensible à un petit décalage de longueur d'onde."],
          "Solution diluée, une seule longueur d'onde ; précision maximale")
    # --- étalonnage (8)
    for gamme, Ax, k in [([1.0e-4, 2.0e-4, 3.0e-4, 4.0e-4], 0.42, 1.2e3), ([2.0e-5, 4.0e-5, 6.0e-5, 8.0e-5], 0.66, 1.1e4),
                         ([5.0e-3, 1.0e-2, 1.5e-2, 2.0e-2], 0.33, 30.0), ([1.0e-6, 2.0e-6, 4.0e-6, 6.0e-6], 0.52, 1.3e5)]:
        As = [k * c for c in gamme]
        tab = " ; ".join(f"${sci(c, 2)}$ : ${num(a, 2)}$" for c, a in zip(gamme, As))
        cx = Ax / k
        L.add("intermediaire", "etalonnage", f"Une gamme d'étalonnage donne (concentration en $\\mathrm{{mol\\cdot L^{{-1}}}}$ : absorbance) : {tab}. Une solution inconnue de la même espèce a une absorbance de ${num(Ax, 2)}$. Déterminer sa concentration.",
              [f"Les points sont alignés avec l'origine : $A = k\\,c$ avec $k = \\dfrac{{{num(As[-1], 2)}}}{{{sci(gamme[-1], 2)}}} = {num(k, 2)}\\ \\mathrm{{L\\cdot mol^{{-1}}}}$.",
               f"$c_x = \\dfrac{{A_x}}{{k}} = \\dfrac{{{num(Ax, 2)}}}{{{num(k, 2)}}} = {val(cx, MOLL, 2)}$."],
              f"$c_x = {val(cx, MOLL, 2)}$")
    cd = 0.36 / 1.3e5
    L.add("probleme", "etalonnage", "Pour doser le colorant E133 d'une boisson, on la dilue 5 fois. La solution diluée a une absorbance de $0{,}36$ ; la droite d'étalonnage a pour équation $A = 1{,}3\\times 10^{5}\\,c$. Calculer la concentration en colorant de la boisson.",
          [f"Solution diluée : $c' = \\dfrac{{0{{,}}36}}{{1{{,}}3\\times 10^{{5}}}} = {val(cd, MOLL, 2)}$.", f"Boisson : $c = 5\\,c' = {val(5 * cd, MOLL, 2)}$."], f"$c \\approx {val(5 * cd, MOLL, 2)}$")
    k = 0.75 / 0.040
    L.add("probleme", "etalonnage", "On dose les ions cuivre(II) d'une bouillie bordelaise. Une solution étalon à $0{,}040\\ \\mathrm{mol\\cdot L^{-1}}$ donne $A = 0{,}75$ ; la solution à doser donne $A = 0{,}48$ dans les mêmes conditions. Calculer sa concentration en ions cuivre(II).",
          ["Beer-Lambert : à espèce, cuve et longueur d'onde fixées, $\\dfrac{c}{c_0} = \\dfrac{A}{A_0}$.", f"$c = 0{{,}}040 \\times \\dfrac{{0{{,}}48}}{{0{{,}}75}} = {val(0.040 * 0.48 / 0.75, MOLL, 2)}$."],
          f"$c \\approx {val(0.040 * 0.48 / 0.75, MOLL, 2)}$")
    L.qa("approfondissement", "etalonnage", [
        ("Pourquoi la courbe d'étalonnage $A = f(c)$ est-elle une droite passant par l'origine ?",
         ["D'après Beer-Lambert, $A = \\varepsilon\\,\\ell\\,c$ : à $\\varepsilon$ et $\\ell$ fixés, $A$ est proportionnelle à $c$.", "Une solution sans espèce colorée ($c = 0$) n'absorbe pas ($A = 0$, après le réglage du « blanc »)."],
         "Car $A$ est proportionnelle à $c$"),
        ("Peut-on utiliser la droite d'étalonnage du permanganate pour doser une solution de sulfate de cuivre ?",
         ["Non : $\\varepsilon$ dépend de l'espèce et de la longueur d'onde.", "Une droite d'étalonnage n'est valable que pour l'espèce et la longueur d'onde avec lesquelles elle a été tracée."], "Non"),
    ])
    # --- loi de Kohlrausch (10)
    LAM = {"Na^+": 5.01e-3, "Cl^-": 7.63e-3, "K^+": 7.35e-3, "H_3O^+": 34.98e-3, "HO^-": 19.86e-3, "NO_3^-": 7.14e-3, "Ag^+": 6.19e-3, "Ca^{2+}": 11.9e-3, "CH_3COO^-": 4.09e-3}
    LTXT = lambda ions: "On donne (en $\\mathrm{mS\\cdot m^2\\cdot mol^{-1}}$) : " + " ; ".join(f"$\\lambda(\\mathrm{{{i}}}) = {ex(round(LAM[i] * 1000, 2))}$" for i in ions) + "."
    for nom, ions, c in [("de chlorure de sodium", [("Na^+", 1), ("Cl^-", 1)], 2.0e-3), ("de chlorure de potassium", [("K^+", 1), ("Cl^-", 1)], 1.0e-2),
                         ("d'acide chlorhydrique", [("H_3O^+", 1), ("Cl^-", 1)], 1.0e-3), ("de chlorure de calcium", [("Ca^{2+}", 1), ("Cl^-", 2)], 1.0e-3),
                         ("d'hydroxyde de sodium", [("Na^+", 1), ("HO^-", 1)], 5.0e-3), ("de nitrate d'argent", [("Ag^+", 1), ("NO_3^-", 1)], 2.0e-3),
                         ("d'éthanoate de sodium", [("Na^+", 1), ("CH_3COO^-", 1)], 1.0e-2)]:
        cm3 = c * 1000
        sig = sum(LAM[i] * k * cm3 for i, k in ions)
        detail = " + ".join(f"{ex(round(LAM[i] * 1000, 2))}\\times 10^{{-3}} \\times {num(k * cm3, 2)}" for i, k in ions)
        conc = " ; ".join(f"$[\\mathrm{{{i}}}] = {num(k * cm3, 2)}\\ \\mathrm{{mol\\cdot m^{{-3}}}}$" for i, k in ions)
        L.add("intermediaire" if len(set(k for _, k in ions)) == 1 else "approfondissement", "kohlrausch",
              f"Calculer la conductivité d'une solution {nom} de concentration ${sci(c, 2)}" + un(MOLL) + "$. " + LTXT([i for i, _ in ions]),
              [f"Conversion : $c = {sci(c, 2)}\\ \\mathrm{{mol\\cdot L^{{-1}}}} = {num(cm3, 2)}\\ \\mathrm{{mol\\cdot m^{{-3}}}}$ ; " + conc + ".",
               f"$\\sigma = \\sum \\lambda_i c_i = {detail} = {val(sig, SM, 3)}$."],
              f"$\\sigma \\approx {val(sig, SM, 3)}$")
    s_ = (5.01e-3 + 7.63e-3)
    c = 5.06e-2 / s_
    L.add("approfondissement", "kohlrausch", "Une solution de chlorure de sodium a une conductivité de $5{,}06\\times 10^{-2}\\ \\mathrm{S\\cdot m^{-1}}$. Calculer sa concentration en $\\mathrm{mol\\cdot L^{-1}}$. " + LTXT(["Na^+", "Cl^-"]),
          [f"$\\sigma = (\\lambda_{{\\mathrm{{Na^+}}}} + \\lambda_{{\\mathrm{{Cl^-}}}})\\,c$, donc $c = \\dfrac{{5{{,}}06\\times 10^{{-2}}}}{{12{{,}}64\\times 10^{{-3}}}} = {num(c, 3)}\\ \\mathrm{{mol\\cdot m^{{-3}}}}$.",
           f"Soit $c = {val(c / 1000, MOLL, 3)}$ (on divise par 1 000)."],
          f"$c \\approx {val(c / 1000, MOLL, 3)}$")
    L.add("approfondissement", "kohlrausch", "À même concentration, pourquoi une solution d'acide chlorhydrique conduit-elle beaucoup mieux le courant qu'une solution de chlorure de sodium ? " + LTXT(["H_3O^+", "Na^+"]),
          ["Les deux solutions contiennent des ions chlorure ; elles diffèrent par le cation.", "$\\lambda(\\mathrm{H_3O^+})$ est environ sept fois plus grande que $\\lambda(\\mathrm{Na^+})$ : la contribution de $\\mathrm{H_3O^+}$ à $\\sigma$ est bien plus forte."],
          "$\\lambda(\\mathrm{H_3O^+})$ est très grande")
    L.add("approfondissement", "kohlrausch", "Un élève applique la loi de Kohlrausch avec des concentrations en $\\mathrm{mol\\cdot L^{-1}}$. Quelle erreur commet-il sur $\\sigma$ ?",
          ["Dans $\\sigma = \\sum \\lambda_i c_i$, les concentrations doivent être en $\\mathrm{mol\\cdot m^{-3}}$ ; $1\\ \\mathrm{mol\\cdot L^{-1}} = 10^{3}\\ \\mathrm{mol\\cdot m^{-3}}$.", "Il trouve une conductivité mille fois trop petite."],
          "Une valeur 1 000 fois trop petite")
    # --- conductance (6)
    L.add("application", "conductance", "Une cellule de conductimétrie est soumise à une tension de $1{,}0\\ \\mathrm{V}$ et traversée par un courant de $12\\ \\mathrm{mA}$. Calculer la conductance de la portion de solution.",
          ["$G = \\dfrac{I}{U} = \\dfrac{12\\times 10^{-3}}{1{,}0} = 1{,}2\\times 10^{-2}\\ \\mathrm{S}$."], "$G = 1{,}2\\times 10^{-2}\\ \\mathrm{S}$")
    L.add("intermediaire", "conductance", "Une cellule de constante $k_{\\text{cell}} = 1{,}0\\times 10^{-2}\\ \\mathrm{m}$ mesure une conductance $G = 4{,}5\\ \\mathrm{mS}$. Calculer la conductivité de la solution.",
          ["$G = k_{\\text{cell}}\\,\\sigma$ donc $\\sigma = \\dfrac{G}{k_{\\text{cell}}}$.", "$\\sigma = \\dfrac{4{,}5\\times 10^{-3}}{1{,}0\\times 10^{-2}} = 0{,}45\\ \\mathrm{S\\cdot m^{-1}}$."], "$\\sigma = 0{,}45\\ \\mathrm{S\\cdot m^{-1}}$")
    L.add("intermediaire", "conductance", "Pour étalonner un conductimètre, on plonge la cellule dans une solution de conductivité connue $\\sigma = 0{,}141\\ \\mathrm{S\\cdot m^{-1}}$ : on mesure $G = 1{,}41\\ \\mathrm{mS}$. Calculer la constante de cellule.",
          ["$k_{\\text{cell}} = \\dfrac{G}{\\sigma} = \\dfrac{1{,}41\\times 10^{-3}}{0{,}141} = 1{,}00\\times 10^{-2}\\ \\mathrm{m}$."], "$k_{\\text{cell}} = 1{,}00\\times 10^{-2}\\ \\mathrm{m}$")
    L.add("probleme", "conductance", "Avec une cellule de constante $1{,}00\\times 10^{-2}\\ \\mathrm{m}$, une eau minérale donne $G = 0{,}48\\ \\mathrm{mS}$. Calculer sa conductivité en $\\mathrm{S\\cdot m^{-1}}$ puis en $\\mathrm{\\mu S\\cdot cm^{-1}}$ (unité des étiquettes).",
          ["$\\sigma = \\dfrac{0{,}48\\times 10^{-3}}{1{,}00\\times 10^{-2}} = 4{,}8\\times 10^{-2}\\ \\mathrm{S\\cdot m^{-1}}$.", "$1\\ \\mathrm{S\\cdot m^{-1}} = 10^{4}\\ \\mathrm{\\mu S\\cdot cm^{-1}}$ : $\\sigma = 480\\ \\mathrm{\\mu S\\cdot cm^{-1}}$."],
          "$\\sigma = 4{,}8\\times 10^{-2}\\ \\mathrm{S\\cdot m^{-1}} = 480\\ \\mathrm{\\mu S\\cdot cm^{-1}}$")
    L.add("application", "conductance", "Une portion de solution de conductance $G = 2{,}5\\ \\mathrm{mS}$ est soumise à une tension de $2{,}0\\ \\mathrm{V}$. Quelle intensité la traverse ?",
          ["$I = G \\times U = 2{,}5\\times 10^{-3} \\times 2{,}0 = 5{,}0\\times 10^{-3}\\ \\mathrm{A}$, soit $5{,}0\\ \\mathrm{mA}$."], "$I = 5{,}0\\ \\mathrm{mA}$")
    L.add("approfondissement", "conductance", "Quelle différence y a-t-il entre conductance et conductivité ?",
          ["La conductance $G$ (en S) dépend de la solution et de la géométrie de la cellule.", "La conductivité $\\sigma$ (en $\\mathrm{S\\cdot m^{-1}}$) ne dépend que de la solution : $G = k_{\\text{cell}}\\,\\sigma$."],
          "$G$ dépend de la cellule, $\\sigma$ seulement de la solution")
    # --- spectroscopie UV-visible (7)
    L.qa("application", "uv-visible", [
        ("Une solution de permanganate de potassium absorbe surtout vers $530\\ \\mathrm{nm}$ (vert). Quelle est sa couleur ?", ["Une espèce apparaît de la couleur complémentaire de celle qu'elle absorbe : le complémentaire du vert est le magenta."], "Magenta (violet-pourpre)"),
        ("Une solution de sulfate de cuivre absorbe surtout le rouge-orangé (vers $800\\ \\mathrm{nm}$). De quelle couleur est-elle ?", ["Couleur complémentaire du rouge-orangé : bleu (cyan)."], "Bleue"),
        ("Le diiode en solution absorbe vers $450\\ \\mathrm{nm}$ (bleu). Quelle est la couleur de sa solution ?", ["Couleur complémentaire du bleu : jaune-orangé."], "Jaune-orangé"),
        ("La chlorophylle absorbe surtout le bleu et le rouge. Pourquoi les feuilles sont-elles vertes ?", ["Le vert, peu absorbé, est diffusé : c'est la couleur perçue."], "Le vert n'est pas absorbé"),
        ("Le β-carotène de la carotte absorbe surtout vers $450\\ \\mathrm{nm}$. Quelle est sa couleur ?", ["Il absorbe le bleu ; on perçoit la couleur complémentaire, orangée."], "Orange"),
        ("Une espèce n'absorbe que dans l'ultraviolet, vers $260\\ \\mathrm{nm}$. Quelle est la couleur de sa solution ?", ["Elle n'absorbe aucune radiation visible ($400$ à $800\\ \\mathrm{nm}$) : la solution est incolore."], "Incolore"),
        ("À quoi sert un spectre UV-visible ? Que lit-on sur l'axe des abscisses et sur l'axe des ordonnées ?",
         ["En abscisse, la longueur d'onde $\\lambda$ (en nm) ; en ordonnée, l'absorbance $A$.", "Le maximum $\\lambda_{\\max}$ caractérise l'espèce ; à cette longueur d'onde, on dose l'espèce par Beer-Lambert."],
         "Identifier $\\lambda_{\\max}$ et doser"),
    ])
    # --- spectroscopie IR (6)
    L.qa("intermediaire", "spectre-ir", [
        ("Un spectre IR présente une bande forte et fine vers $1\\,710\\ \\mathrm{cm^{-1}}$ et une bande très large de $2\\,500$ à $3\\,200\\ \\mathrm{cm^{-1}}$. Quelle famille ?",
         ["$\\mathrm{C=O}$ vers $1\\,700\\ \\mathrm{cm^{-1}}$ et $\\mathrm{O-H}$ d'acide (très large) : groupe carboxyle."], "Acide carboxylique"),
        ("Un spectre IR présente une bande large vers $3\\,300\\ \\mathrm{cm^{-1}}$ et aucune bande vers $1\\,700\\ \\mathrm{cm^{-1}}$. Quel groupe est présent ?",
         ["Bande large : liaison $\\mathrm{O-H}$ d'un alcool ; pas de liaison $\\mathrm{C=O}$."], "Un groupe hydroxyle (alcool)"),
        ("Un spectre IR présente une bande forte vers $1\\,720\\ \\mathrm{cm^{-1}}$ et aucune bande au-dessus de $3\\,000\\ \\mathrm{cm^{-1}}$. Que conclure ?",
         ["Liaison $\\mathrm{C=O}$ sans $\\mathrm{O-H}$ : aldéhyde ou cétone.", "L'IR seul ne permet pas de trancher entre les deux."], "Aldéhyde ou cétone"),
        ("Deux bandes fines vers $3\\,350$ et $3\\,450\\ \\mathrm{cm^{-1}}$ apparaissent sur un spectre IR. Quel groupe peut-on suspecter ?",
         ["D'après la table, les liaisons $\\mathrm{N-H}$ d'une amine absorbent entre $3\\,300$ et $3\\,500\\ \\mathrm{cm^{-1}}$ (bandes fines)."], "Un groupe amine ($\\mathrm{N-H}$)"),
        ("La spectroscopie IR permet-elle de doser une espèce ? Quelle technique utiliser pour cela ?",
         ["L'IR sert à identifier des groupes caractéristiques.", "Pour doser, on utilise la spectrophotométrie UV-visible (Beer-Lambert) ou la conductimétrie (Kohlrausch)."], "Non : on dose par UV-visible ou conductimétrie"),
        ("Sur un spectre IR, que porte-t-on en abscisse et en ordonnée ? Dans quel sens pointent les bandes ?",
         ["En abscisse, le nombre d'onde $\\sigma$ en $\\mathrm{cm^{-1}}$, décroissant de gauche à droite ; en ordonnée, la transmittance.", "Les bandes d'absorption pointent vers le bas."], "Nombre d'onde et transmittance ; bandes vers le bas"),
    ])
    # --- nombre d'onde (4)
    for s in (3300, 1050, 2900):
        lam_cm = 1 / s
        L.add("application", "nombre-onde", f"Une bande d'absorption IR se situe à $\\sigma = {ex(s)}\\ \\mathrm{{cm^{{-1}}}}$. Calculer la longueur d'onde correspondante en micromètres.",
              [f"$\\lambda = \\dfrac{{1}}{{\\sigma}} = \\dfrac{{1}}{{{ex(s)}}} = {val(lam_cm, 'cm')}$.", f"$1\\ \\mathrm{{cm}} = 10^{{4}}\\ \\mathrm{{\\mu m}}$, donc $\\lambda = {num(lam_cm * 1e4)}\\ \\mathrm{{\\mu m}}$."],
              f"$\\lambda \\approx {num(lam_cm * 1e4)}\\ \\mathrm{{\\mu m}}$")
    s = 1 / 5.8e-4
    L.add("intermediaire", "nombre-onde", "Une radiation infrarouge a une longueur d'onde de $5{,}8\\ \\mathrm{\\mu m}$. Calculer son nombre d'onde. Quelle liaison peut absorber à cet endroit ?",
          ["$\\lambda = 5{,}8\\ \\mathrm{\\mu m} = 5{,}8\\times 10^{-4}\\ \\mathrm{cm}$.", f"$\\sigma = \\dfrac{{1}}{{\\lambda}} = {val(s, CMI, 2)}$ : c'est la zone de la liaison $\\mathrm{{C=O}}$ ($1\\,650$ à $1\\,750\\ \\mathrm{{cm^{{-1}}}}$)."],
          f"$\\sigma \\approx {val(s, CMI, 2)}$ : liaison $\\mathrm{{C=O}}$")
    return L.fin()


# =====================================================================
#  Terminale — PHÉNOMÈNES ONDULATOIRES
# =====================================================================

I0TXT = " On donne $I_0 = 1{,}0\\times 10^{-12}\\ \\mathrm{W\\cdot m^{-2}}$."


def gen_T_ondes():
    L = _Lot()
    # --- niveau d'intensité sonore (10)
    for I, ctx in [(1.0e-5, "une rue animée"), (3.2e-4, "un atelier bruyant"), (5.0e-7, "une salle de classe calme")]:
        Lv = 10 * math.log10(I / 1e-12)
        L.add("application", "niveau-sonore", f"L'intensité sonore dans {ctx} vaut ${sci(I, 2)}" + un("W\\cdot m^{-2}") + "$. Calculer le niveau d'intensité sonore." + I0TXT,
              [f"$L = 10\\log\\left(\\dfrac{{I}}{{I_0}}\\right) = 10\\log\\left(\\dfrac{{{sci(I, 2)}}}{{1{{,}}0\\times 10^{{-12}}}}\\right) = {val(Lv, 'dB', 2)}$."], f"$L \\approx {val(Lv, 'dB', 2)}$")
    for Lv in (90, 45, 105):
        I = 1e-12 * 10 ** (Lv / 10)
        L.add("application" if Lv != 105 else "probleme", "niveau-sonore", (f"Lors d'un concert, le niveau sonore atteint ${Lv}\\ \\mathrm{{dB}}$ près des enceintes." if Lv == 105 else f"Un niveau d'intensité sonore vaut ${Lv}\\ \\mathrm{{dB}}$.") + " Calculer l'intensité sonore correspondante." + I0TXT,
              [f"$I = I_0 \\times 10^{{L/10}} = 1{{,}}0\\times 10^{{-12}} \\times 10^{{{ex(Lv / 10)}}} = {val(I, WM2, 2)}$."] + (["Un tel niveau, prolongé, endommage l'oreille : les protections auditives sont indispensables."] if Lv == 105 else []),
              f"$I \\approx {val(I, WM2, 2)}$")
    L.add("intermediaire", "niveau-sonore", "Une tondeuse produit un niveau de $80\\ \\mathrm{dB}$ à quelques mètres. Quel niveau produisent deux tondeuses identiques fonctionnant au même endroit ?",
          ["Les intensités s'ajoutent : $I_{\\text{tot}} = 2I$.", "$L' = 10\\log\\left(\\dfrac{2I}{I_0}\\right) = L + 10\\log 2 = 80 + 3{,}0 = 83\\ \\mathrm{dB}$ : le niveau ne double pas."], "$83\\ \\mathrm{dB}$")
    L.add("intermediaire", "niveau-sonore", "Dans un atelier, une machine produit $75\\ \\mathrm{dB}$. Quel est le niveau quand dix machines identiques fonctionnent ensemble ?",
          ["Intensité multipliée par 10 : $L' = L + 10\\log 10 = 75 + 10 = 85\\ \\mathrm{dB}$."], "$85\\ \\mathrm{dB}$")
    L.add("approfondissement", "niveau-sonore", "Un violon produit $60\\ \\mathrm{dB}$ à l'endroit où se trouve un auditeur. Combien de violons identiques faut-il pour atteindre $70\\ \\mathrm{dB}$ ?",
          ["Gagner $10\\ \\mathrm{dB}$ revient à multiplier l'intensité par 10.", "Il faut donc 10 violons."], "10 violons")
    L.add("approfondissement", "niveau-sonore", "Par quel facteur l'intensité sonore est-elle multipliée quand le niveau passe de $80\\ \\mathrm{dB}$ à $100\\ \\mathrm{dB}$ ?",
          ["$L_2 - L_1 = 10\\log\\left(\\dfrac{I_2}{I_1}\\right) = 20\\ \\mathrm{dB}$, donc $\\dfrac{I_2}{I_1} = 10^{2} = 100$."], "Par 100")
    # --- diffraction (10)
    for lam, a, D, ctx in [(532e-9, 50e-6, 1.5, "Un laser vert ($\\lambda = 532\\ \\mathrm{nm}$) éclaire une fente de largeur $a = 50\\ \\mathrm{\\mu m}$ ; l'écran est à $D = 1{,}5\\ \\mathrm{m}$."),
                           (650e-9, 0.20e-3, 2.5, "Un laser rouge ($\\lambda = 650\\ \\mathrm{nm}$) éclaire une fente de largeur $a = 0{,}20\\ \\mathrm{mm}$ ; l'écran est à $D = 2{,}5\\ \\mathrm{m}$.")]:
        th = lam / a
        l_ = 2 * D * th
        L.add("intermediaire", "diffraction", ctx + " Calculer le demi-angle de diffraction $\\theta$ puis la largeur $\\ell$ de la tache centrale.",
              [f"$\\theta = \\dfrac{{\\lambda}}{{a}} = \\dfrac{{{sci(lam)}}}{{{sci(a, 2)}}} = {val(th, 'rad', 2)}$.", f"$\\ell = 2D\\theta = \\dfrac{{2\\lambda D}}{{a}} = \\dfrac{{2 \\times {sci(lam)} \\times {ex(D)}}}{{{sci(a, 2)}}} = {val(l_, 'm', 2)}$, soit ${num(l_ * 100, 2)}\\ \\mathrm{{cm}}$."],
              f"$\\theta \\approx {val(th, 'rad', 2)}$ ; $\\ell \\approx {num(l_ * 100, 2)}\\ \\mathrm{{cm}}$")
    a = 2 * 633e-9 * 2.0 / 0.040
    L.add("probleme", "diffraction", "Pour mesurer l'épaisseur d'un cheveu, on l'éclaire avec un laser ($\\lambda = 633\\ \\mathrm{nm}$) : la tache centrale de diffraction mesure $4{,}0\\ \\mathrm{cm}$ sur un écran à $2{,}0\\ \\mathrm{m}$. Calculer le diamètre du cheveu (il diffracte comme une fente de même largeur).",
          ["$\\ell = \\dfrac{2\\lambda D}{a}$ donc $a = \\dfrac{2\\lambda D}{\\ell}$.", f"$a = \\dfrac{{2 \\times 6{{,}}33\\times 10^{{-7}} \\times 2{{,}}0}}{{4{{,}}0\\times 10^{{-2}}}} = {val(a, 'm', 2)}$, soit ${num(a * 1e6, 2)}\\ \\mathrm{{\\mu m}}$."],
          f"$a \\approx {num(a * 1e6, 2)}\\ \\mathrm{{\\mu m}}$")
    lam = 0.019 * 1.0e-4 / (2 * 1.5)
    L.add("intermediaire", "diffraction", "Une fente de $0{,}10\\ \\mathrm{mm}$ éclairée par un laser donne une tache centrale de $1{,}9\\ \\mathrm{cm}$ sur un écran à $1{,}5\\ \\mathrm{m}$. Calculer la longueur d'onde du laser.",
          ["$\\lambda = \\dfrac{\\ell\\,a}{2D}$.", f"$\\lambda = \\dfrac{{1{{,}}9\\times 10^{{-2}} \\times 1{{,}}0\\times 10^{{-4}}}}{{2 \\times 1{{,}}5}} = {val(lam, 'm', 2)}$, soit ${num(lam * 1e9, 2)}\\ \\mathrm{{nm}}$ (rouge)."],
          f"$\\lambda \\approx {num(lam * 1e9, 2)}\\ \\mathrm{{nm}}$")
    lam = 340 / 340
    L.add("probleme", "diffraction", "Un son de $340\\ \\mathrm{Hz}$ ($v = 340\\ \\mathrm{m\\cdot s^{-1}}$) passe par une porte de $0{,}90\\ \\mathrm{m}$ de large. Calculer $\\lambda$ et comparer à la largeur de la porte. Pourquoi entend-on une personne cachée derrière le mur ?",
          ["$\\lambda = \\dfrac{v}{f} = 1{,}0\\ \\mathrm{m}$ : du même ordre que la largeur de la porte.", "Le son est fortement diffracté et s'étale derrière l'ouverture ; la lumière ($\\lambda \\approx 0{,}5\\ \\mathrm{\\mu m}$), elle, ne l'est presque pas."],
          "$\\lambda = 1{,}0\\ \\mathrm{m}$ : forte diffraction")
    L.add("intermediaire", "diffraction", "Une houle de longueur d'onde $40\\ \\mathrm{m}$ franchit l'entrée d'un port large de $60\\ \\mathrm{m}$. Calculer le demi-angle de diffraction.",
          [f"$\\theta = \\dfrac{{\\lambda}}{{a}} = \\dfrac{{40}}{{60}} = {val(40 / 60, 'rad', 2)}$ : la houle s'étale largement dans le port."], f"$\\theta \\approx {val(40 / 60, 'rad', 2)}$")
    th = 1.3e-2
    L.add("application", "diffraction", "Un demi-angle de diffraction vaut $1{,}3\\times 10^{-2}\\ \\mathrm{rad}$. L'exprimer en degrés.",
          [f"$\\theta = 1{{,}}3\\times 10^{{-2}} \\times \\dfrac{{180}}{{\\pi}} = {num(math.degrees(th), 2)}^{{\\circ}}$."], f"$\\theta \\approx {num(math.degrees(th), 2)}^{{\\circ}}$")
    L.qa("approfondissement", "diffraction", [
        ("On remplace une fente par une fente deux fois plus fine, avec le même laser. Comment varie la largeur de la tache centrale ?",
         ["$\\ell = \\dfrac{2\\lambda D}{a}$ : $a$ est au dénominateur.", "Si $a$ est divisée par 2, la tache est deux fois plus large."], "Elle double"),
        ("Avec la même fente, un laser bleu donne-t-il une tache centrale plus large ou plus étroite qu'un laser rouge ?",
         ["$\\theta = \\dfrac{\\lambda}{a}$ et $\\lambda_{\\text{bleu}} < \\lambda_{\\text{rouge}}$.", "La tache est plus étroite avec le laser bleu."], "Plus étroite"),
        ("La diffraction modifie-t-elle la fréquence ou la longueur d'onde de l'onde ?",
         ["Non : la diffraction ne fait que redistribuer les directions de propagation ; fréquence et longueur d'onde sont inchangées."], "Non"),
    ])
    # --- interférences (10)
    for lam, d1, d2, u, ctx in [(Fraction("0.20"), Fraction("3.00"), Fraction("3.40"), "m", "Deux haut-parleurs synchrones émettent un son de longueur d'onde $\\lambda = 0{,}20\\ \\mathrm{m}$."),
                                (Fraction("0.20"), Fraction("2.50"), Fraction("2.80"), "m", "Deux haut-parleurs synchrones émettent un son de longueur d'onde $\\lambda = 0{,}20\\ \\mathrm{m}$."),
                                (Fraction("1.2"), Fraction("6.0"), Fraction("9.6"), "cm", "Dans une cuve à ondes, deux pointes synchrones créent des ondes de longueur d'onde $\\lambda = 1{,}2\\ \\mathrm{cm}$."),
                                (Fraction("1.2"), Fraction("4.2"), Fraction("6.0"), "cm", "Dans une cuve à ondes, deux pointes synchrones créent des ondes de longueur d'onde $\\lambda = 1{,}2\\ \\mathrm{cm}$.")]:
        dl = d2 - d1
        k = dl / lam
        if k.denominator == 1:
            typ, rep = "constructives", f"$\\delta = {int(k)}\\lambda$ : interférences constructives"
            just = f"$\\dfrac{{\\delta}}{{\\lambda}} = {int(k)}$, entier : les ondes arrivent en phase, l'amplitude est maximale."
        else:
            typ, rep = "destructives", f"$\\delta = {ex(float(k))}\\,\\lambda$ : interférences destructives"
            just = f"$\\dfrac{{\\delta}}{{\\lambda}} = {ex(float(k))}$, demi-entier : les ondes arrivent en opposition de phase, l'amplitude est minimale."
        L.add("intermediaire", "interferences", ctx + f" En un point M, les distances aux sources valent $d_1 = {fx(float(d1), 1 if u == 'cm' else 2)}\\ \\mathrm{{{u}}}$ et $d_2 = {fx(float(d2), 1 if u == 'cm' else 2)}\\ \\mathrm{{{u}}}$. Les interférences sont-elles constructives ou destructives en M ?",
              [f"$\\delta = d_2 - d_1 = {fx(float(dl), 1 if u == 'cm' else 2)}\\ \\mathrm{{{u}}}$.", just], rep)
    for lam_nm, delta_um in [(600, "1.5"), (500, "2.0")]:
        k = float(delta_um) * 1000 / lam_nm
        cons = abs(k - round(k)) < 1e-9
        L.add("intermediaire", "interferences", f"Deux faisceaux lumineux cohérents de longueur d'onde ${lam_nm}\\ \\mathrm{{nm}}$ arrivent en un point de l'écran avec une différence de marche de ${ex(delta_um)}\\ \\mathrm{{\\mu m}}$. Obtient-on une frange brillante ou sombre ?",
              [f"$\\dfrac{{\\delta}}{{\\lambda}} = \\dfrac{{{ex(delta_um)}\\times 10^{{-6}}}}{{{lam_nm}\\times 10^{{-9}}}} = {ex(k)}$.",
               "Valeur entière : interférences constructives, frange brillante." if cons else "Valeur demi-entière : interférences destructives, frange sombre."],
              "Frange brillante" if cons else "Frange sombre")
    i_ = 633e-9 * 2.0 / 0.50e-3
    L.add("intermediaire", "interferences", "Deux fentes distantes de $b = 0{,}50\\ \\mathrm{mm}$ sont éclairées par un laser de $633\\ \\mathrm{nm}$ ; l'écran est à $D = 2{,}0\\ \\mathrm{m}$. Calculer l'interfrange.",
          [f"$i = \\dfrac{{\\lambda D}}{{b}} = \\dfrac{{6{{,}}33\\times 10^{{-7}} \\times 2{{,}}0}}{{5{{,}}0\\times 10^{{-4}}}} = {val(i_, 'm', 2)}$, soit ${num(i_ * 1000, 2)}\\ \\mathrm{{mm}}$."], f"$i \\approx {num(i_ * 1000, 2)}\\ \\mathrm{{mm}}$")
    b = 532e-9 * 1.5 / 3.0e-3
    L.add("approfondissement", "interferences", "Avec un laser vert ($532\\ \\mathrm{nm}$) et un écran à $1{,}5\\ \\mathrm{m}$, on mesure un interfrange de $3{,}0\\ \\mathrm{mm}$. Calculer la distance $b$ entre les deux fentes.",
          ["$i = \\dfrac{\\lambda D}{b}$ donc $b = \\dfrac{\\lambda D}{i}$.", f"$b = \\dfrac{{5{{,}}32\\times 10^{{-7}} \\times 1{{,}}5}}{{3{{,}}0\\times 10^{{-3}}}} = {val(b, 'm', 2)}$, soit ${num(b * 1000, 2)}\\ \\mathrm{{mm}}$."],
          f"$b \\approx {num(b * 1000, 2)}\\ \\mathrm{{mm}}$")
    lam = 2.4e-3 * 0.40e-3 / 1.5
    L.add("approfondissement", "interferences", "Deux fentes distantes de $0{,}40\\ \\mathrm{mm}$ donnent, sur un écran à $1{,}5\\ \\mathrm{m}$, des franges espacées de $2{,}4\\ \\mathrm{mm}$. Calculer la longueur d'onde de la lumière utilisée.",
          [f"$\\lambda = \\dfrac{{i\\,b}}{{D}} = \\dfrac{{2{{,}}4\\times 10^{{-3}} \\times 4{{,}}0\\times 10^{{-4}}}}{{1{{,}}5}} = {val(lam, 'm', 2)}$, soit ${num(lam * 1e9, 2)}\\ \\mathrm{{nm}}$."], f"$\\lambda \\approx {num(lam * 1e9, 2)}\\ \\mathrm{{nm}}$")
    L.add("probleme", "interferences", "Un casque à réduction active de bruit capte le bruit ambiant et émet un son de même fréquence. Quelle condition ce son doit-il remplir pour atténuer le bruit dans l'oreille ?",
          ["Il doit arriver dans l'oreille en opposition de phase avec le bruit (différence de marche équivalente à un demi-entier de longueurs d'onde).", "Les deux ondes interfèrent alors de façon destructive : le bruit perçu diminue."],
          "Être en opposition de phase : interférences destructives")
    # --- effet Doppler (10)
    c = 340
    for fE, v, appro, ctx in [(680, 25, True, "Une ambulance roulant à $25\\ \\mathrm{m\\cdot s^{-1}}$ émet un son de $680\\ \\mathrm{Hz}$ et s'approche d'un piéton immobile."),
                              (680, 25, False, "Après l'avoir dépassé, la même ambulance ($25\\ \\mathrm{m\\cdot s^{-1}}$, $680\\ \\mathrm{Hz}$) s'éloigne du piéton."),
                              (400, 25, True, "Une voiture roulant à $90\\ \\mathrm{km\\cdot h^{-1}}$ klaxonne ($400\\ \\mathrm{Hz}$) en s'approchant d'un cycliste arrêté."),
                              (300, 30, False, "Une moto roulant à $108\\ \\mathrm{km\\cdot h^{-1}}$ s'éloigne d'un observateur ; son moteur émet un son de $300\\ \\mathrm{Hz}$."),
                              (2000, 15, True, "Un drone émettant un son de $2\\,000\\ \\mathrm{Hz}$ fonce à $15\\ \\mathrm{m\\cdot s^{-1}}$ vers un observateur immobile.")]:
        fR = fE * c / (c - v) if appro else fE * c / (c + v)
        conv = [] if "km" not in ctx else [f"$v = {round(v * 3.6)} / 3{{,}}6 = {v}\\ \\mathrm{{m\\cdot s^{{-1}}}}$."]
        L.add("intermediaire" if appro else "approfondissement", "doppler", ctx + " Calculer la fréquence perçue et le décalage Doppler ($c_{\\text{son}} = 340\\ \\mathrm{m\\cdot s^{-1}}$).",
              conv + [f"$f_R = f_E\\,\\dfrac{{c}}{{c {'-' if appro else '+'} v}} = {fE} \\times \\dfrac{{340}}{{{c - v if appro else c + v}}} = {val(fR, 'Hz')}$.",
                      f"$\\Delta f = f_R - f_E = {val(fR - fE, 'Hz', 2)}$ : son plus {'aigu' if appro else 'grave'}."],
              f"$f_R \\approx {val(fR, 'Hz')}$ ; $\\Delta f \\approx {val(fR - fE, 'Hz', 2)}$")
    v = 340 * (1 - 500 / 540)
    L.add("probleme", "doppler", "Une voiture émet un son de $500\\ \\mathrm{Hz}$ ; un observateur fixe, devant lequel elle arrive, perçoit $540\\ \\mathrm{Hz}$. Calculer la vitesse de la voiture en $\\mathrm{km\\cdot h^{-1}}$ ($c = 340\\ \\mathrm{m\\cdot s^{-1}}$).",
          ["Rapprochement : $f_R = f_E\\,\\dfrac{c}{c - v}$, donc $v = c\\left(1 - \\dfrac{f_E}{f_R}\\right)$.", f"$v = 340 \\times \\left(1 - \\dfrac{{500}}{{540}}\\right) = {val(v, MS, 2)}$, soit ${num(v * 3.6, 2)}" + un(KMH) + "$."],
          f"$v \\approx {num(v * 3.6, 2)}" + un(KMH) + "$")
    v = 340 * (500 / 450 - 1)
    L.add("probleme", "doppler", "Un train qui s'éloigne émet un son de $500\\ \\mathrm{Hz}$ ; on perçoit $450\\ \\mathrm{Hz}$. Calculer sa vitesse ($c = 340\\ \\mathrm{m\\cdot s^{-1}}$).",
          ["Éloignement : $f_R = f_E\\,\\dfrac{c}{c + v}$, donc $v = c\\left(\\dfrac{f_E}{f_R} - 1\\right)$.", f"$v = 340 \\times \\left(\\dfrac{{500}}{{450}} - 1\\right) = {val(v, MS, 2)}$, soit ${num(v * 3.6, 2)}" + un(KMH) + "$."],
          f"$v \\approx {val(v, MS, 2)}$")
    f1, f2 = 680 * 340 / 315, 680 * 340 / 365
    L.add("approfondissement", "doppler", "Une ambulance ($680\\ \\mathrm{Hz}$, $25\\ \\mathrm{m\\cdot s^{-1}}$) passe devant un piéton. De combien la fréquence perçue chute-t-elle au moment du passage ($c = 340\\ \\mathrm{m\\cdot s^{-1}}$) ?",
          [f"À l'approche : $f_1 = 680 \\times \\dfrac{{340}}{{315}} = {val(f1, 'Hz')}$ ; en s'éloignant : $f_2 = 680 \\times \\dfrac{{340}}{{365}} = {val(f2, 'Hz')}$.", f"Chute : $f_1 - f_2 = {val(f1 - f2, 'Hz', 2)}$."],
          f"$\\approx {val(f1 - f2, 'Hz', 2)}$")
    L.qa("approfondissement", "doppler", [
        ("Les raies du spectre d'une galaxie lointaine sont décalées vers les grandes longueurs d'onde (vers le rouge). Que peut-on en déduire ?",
         ["Une longueur d'onde perçue plus grande correspond à une fréquence perçue plus petite.", "D'après l'effet Doppler, la galaxie s'éloigne de nous : c'est l'un des arguments de l'expansion de l'Univers."],
         "La galaxie s'éloigne"),
        ("Comment un radar routier utilise-t-il l'effet Doppler ?",
         ["Il émet une onde de fréquence connue, réfléchie par le véhicule en mouvement.", "Le décalage entre fréquence émise et fréquence reçue permet de calculer la vitesse du véhicule."],
         "Le décalage de fréquence donne la vitesse"),
    ])
    # --- cours (10)
    L.vf("application", "cours", [
        ("Doubler l'intensité sonore double le niveau d'intensité sonore en décibels.", False, "Faux : doubler $I$ ajoute seulement $10\\log 2 \\approx 3\\ \\mathrm{dB}$."),
        ("Le niveau d'intensité sonore utilise le logarithme décimal.", True, "Vrai : $L = 10\\log\\left(\\dfrac{I}{I_0}\\right)$ avec $\\log$ en base 10."),
        ("Le phénomène de diffraction est d'autant plus marqué que l'ouverture est petite.", True, "Vrai : $\\theta = \\dfrac{\\lambda}{a}$ augmente quand $a$ diminue."),
        ("Dans $\\theta = \\dfrac{\\lambda}{a}$, l'angle $\\theta$ s'exprime en degrés.", False, "Faux : il s'exprime en radians."),
        ("Deux ondes en phase donnent des interférences destructives.", False, "Faux : des ondes en phase donnent des interférences constructives (amplitudes qui s'ajoutent)."),
        ("Les interférences ne s'observent qu'avec des sources synchrones (de même fréquence).", True, "Vrai : il faut deux sources de même fréquence, avec un déphasage constant."),
        ("Quand une source sonore s'approche d'un observateur, celui-ci perçoit un son plus grave.", False, "Faux : il perçoit un son plus aigu (fréquence plus grande)."),
        ("L'interfrange $i = \\dfrac{\\lambda D}{b}$ augmente quand on éloigne l'écran.", True, "Vrai : $i$ est proportionnel à $D$."),
        ("Il ne faut pas confondre la largeur $a$ d'une fente (diffraction) et l'écart $b$ entre deux fentes (interférences).", True, "Vrai : ce sont deux longueurs différentes qui interviennent dans deux formules différentes."),
        ("Un niveau sonore de 0 dB correspond à une intensité nulle.", False, "Faux : 0 dB correspond à $I = I_0 = 1{,}0\\times 10^{-12}\\ \\mathrm{W\\cdot m^{-2}}$, le seuil d'audibilité."),
    ])
    return L.fin()


# =====================================================================
#  Terminale — STRATÉGIES EN SYNTHÈSE ORGANIQUE
# =====================================================================

def gen_T_synthese_organique():
    L = _Lot()
    # --- rendement (10)
    nac = 1.05 * 20.0 / 60.0
    nal = 0.81 * 15.0 / 88.0
    nth = min(nac, nal)
    eta = 12.0 / 130 / nth
    L.add("probleme", "rendement", "On synthétise l'acétate d'isoamyle (arôme de banane, $M = 130\\ \\mathrm{g\\cdot mol^{-1}}$) à partir de $20{,}0\\ \\mathrm{mL}$ d'acide éthanoïque ($\\rho = 1{,}05\\ \\mathrm{g\\cdot mL^{-1}}$, $M = 60{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) et de $15{,}0\\ \\mathrm{mL}$ d'alcool isoamylique ($\\rho = 0{,}81\\ \\mathrm{g\\cdot mL^{-1}}$, $M = 88{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) ; réaction mole à mole. On obtient $12{,}0\\ \\mathrm{g}$ d'ester. Calculer le rendement.",
          [f"$n(\\text{{acide}}) = \\dfrac{{1{{,}}05 \\times 20{{,}}0}}{{60{{,}}0}} = {val(nac, 'mol')}$ ; $n(\\text{{alcool}}) = \\dfrac{{0{{,}}81 \\times 15{{,}}0}}{{88{{,}}0}} = {val(nal, 'mol')}$.",
           f"L'alcool est limitant : $n_{{\\text{{théorique}}}} = {val(nth, 'mol')}$.", f"$n_{{\\text{{obtenu}}}} = \\dfrac{{12{{,}}0}}{{130}} = {val(12 / 130, 'mol')}$ ; $\\eta = {num(eta, 2)}$, soit ${pct(eta, 2)}$."],
          f"$\\eta \\approx {pct(eta, 2)}$")
    for ctx, nth, mo, M, prod in [("On fait réagir $0{,}50$ mol d'acide éthanoïque avec $0{,}50$ mol d'éthanol ; on récupère $29{,}0\\ \\mathrm{g}$ d'éthanoate d'éthyle ($M = 88{,}0\\ \\mathrm{g\\cdot mol^{-1}}$).", 0.50, 29.0, 88.0, "ester"),
                                  ("On fait réagir $12{,}2\\ \\mathrm{g}$ d'acide benzoïque ($M = 122\\ \\mathrm{g\\cdot mol^{-1}}$) avec un excès de méthanol ; on récupère $9{,}5\\ \\mathrm{g}$ de benzoate de méthyle ($M = 136\\ \\mathrm{g\\cdot mol^{-1}}$).", 12.2 / 122, 9.5, 136.0, "ester"),
                                  ("On fait réagir $6{,}90\\ \\mathrm{g}$ d'acide salicylique ($M = 138\\ \\mathrm{g\\cdot mol^{-1}}$) avec un excès d'anhydride acétique ; on récupère $6{,}3\\ \\mathrm{g}$ d'aspirine ($M = 180\\ \\mathrm{g\\cdot mol^{-1}}$).", 6.90 / 138, 6.3, 180.0, "aspirine")]:
        no = mo / M
        eta = no / nth
        L.add("intermediaire", "rendement", ctx + " La réaction se fait mole à mole. Calculer le rendement.",
              [f"Réactif limitant : $n_{{\\text{{théorique}}}} = {val(nth, 'mol')}$.", f"$n_{{\\text{{obtenu}}}} = \\dfrac{{m}}{{M}} = \\dfrac{{{fx(mo, 1)}}}{{{fx(M, 1) if M < 100 else ex(M)}}} = {val(no, 'mol')}$.",
               f"$\\eta = \\dfrac{{n_{{\\text{{obtenu}}}}}}{{n_{{\\text{{théorique}}}}}} = {num(eta, 2)}$, soit ${pct(eta, 2)}$."],
              f"$\\eta \\approx {pct(eta, 2)}$")
    nl = 10.0 / 88.0 / 0.65
    L.add("probleme", "rendement", "On veut obtenir $10{,}0\\ \\mathrm{g}$ d'éthanoate d'éthyle ($M = 88{,}0\\ \\mathrm{g\\cdot mol^{-1}}$) par une synthèse de rendement $65\\ \\%$ (réaction mole à mole). Quelle quantité minimale de réactif limitant faut-il engager ?",
          [f"$n_{{\\text{{obtenu}}}} = \\dfrac{{10{{,}}0}}{{88{{,}}0}} = {val(10 / 88, 'mol')}$.", f"$n_{{\\text{{théorique}}}} = \\dfrac{{n_{{\\text{{obtenu}}}}}}{{\\eta}} = \\dfrac{{{num(10 / 88)}}}{{0{{,}}65}} = {val(nl, 'mol', 2)}$."],
          f"$\\approx {val(nl, 'mol', 2)}$")
    eta = 0.80 * 0.70 * 0.90
    L.add("approfondissement", "rendement", "Une synthèse comporte trois étapes successives de rendements $80\\ \\%$, $70\\ \\%$ et $90\\ \\%$. Calculer le rendement global.",
          ["Le produit d'une étape est le réactif de la suivante : les rendements se multiplient.", f"$\\eta = 0{{,}}80 \\times 0{{,}}70 \\times 0{{,}}90 = {num(eta, 2)}$, soit ${pct(eta, 2)}$."], f"$\\eta \\approx {pct(eta, 2)}$")
    e1, e2 = 0.75, 0.75 * 0.90 * 0.90
    L.add("approfondissement", "rendement", "Une transformation directe a un rendement de $75\\ \\%$ mais donne aussi un produit secondaire. Avec une protection (rendement $90\\ \\%$) puis une déprotection ($90\\ \\%$), l'étape principale reste à $75\\ \\%$. Calculer le rendement global avec protection et commenter.",
          [f"$\\eta = 0{{,}}90 \\times 0{{,}}75 \\times 0{{,}}90 = {num(e2, 2)}$, soit ${pct(e2, 2)}$.", "La protection coûte du rendement : on ne l'utilise que si elle est nécessaire pour obtenir sélectivement le bon produit."],
          f"$\\eta \\approx {pct(e2, 2)}$")
    L.add("approfondissement", "rendement", "Un élève annonce un rendement de $112\\ \\%$ pour sa synthèse. Proposer deux explications.",
          ["Un rendement ne peut pas dépasser 100 %.", "Produit encore humide (pesé avec du solvant), produit impur, ou réactif limitant mal identifié (erreur de calcul de $n_{\\text{théorique}}$)."],
          "Produit humide ou impur, ou erreur sur le réactif limitant")
    no, nt = 0.040, 0.050
    L.add("application", "rendement", "Une synthèse devait fournir au maximum $0{,}050$ mol de produit ; on en obtient $0{,}040$ mol. Calculer le rendement.",
          [f"$\\eta = \\dfrac{{0{{,}}040}}{{0{{,}}050}} = {num(no / nt, 2)}$, soit ${pct(no / nt, 2)}$."], f"$\\eta = {pct(no / nt, 2)}$")
    L.add("intermediaire", "rendement", "Pour une estérification ($K = 4{,}0$) en mélange équimolaire, le rendement à l'équilibre vaut $67\\ \\%$. Avec un excès d'alcool (2 mol pour 1 mol d'acide), il atteint $85\\ \\%$. Expliquer.",
          ["La réaction est limitée (équilibre).", "Introduire un réactif en excès déplace l'équilibre dans le sens de la formation du produit : le réactif limitant est davantage consommé."],
          "L'excès d'un réactif déplace l'équilibre")
    # --- optimisation : vitesse et rendement (9)
    L.vf("intermediaire", "optimisation", [
        ("Ajouter un catalyseur augmente le rendement d'une estérification.", False, "Faux : le catalyseur accélère la réaction mais ne modifie pas l'état final, donc pas le rendement."),
        ("Chauffer à reflux augmente la vitesse de formation du produit.", True, "Vrai : la température est un facteur cinétique ; le reflux évite les pertes de matière."),
        ("Éliminer l'eau formée au cours d'une estérification améliore le rendement.", True, "Vrai : on retire un produit, l'équilibre est déplacé vers la formation de l'ester."),
        ("Une réaction rapide a forcément un bon rendement.", False, "Faux : vitesse et rendement sont deux questions indépendantes."),
        ("Broyer un réactif solide augmente la vitesse de la réaction.", True, "Vrai : la surface de contact entre les réactifs augmente."),
    ])
    L.qa("approfondissement", "optimisation", [
        ("Citer deux moyens d'augmenter le rendement d'une synthèse limitée par un équilibre.",
         ["Introduire un réactif en excès.", "Éliminer un produit au fur et à mesure de sa formation (distillation, précipitation…)."], "Excès d'un réactif ; élimination d'un produit"),
        ("Citer trois moyens d'augmenter la vitesse de formation d'un produit.",
         ["Augmenter la température, augmenter la concentration des réactifs, ajouter un catalyseur (ou augmenter la surface de contact d'un solide)."], "Température, concentration, catalyseur"),
        ("Pourquoi l'acide sulfurique est-il ajouté en petite quantité lors d'une estérification ?",
         ["Il joue le rôle de catalyseur : il accélère la réaction et se retrouve intact à la fin.", "Il ne modifie pas le rendement."], "C'est un catalyseur"),
        ("Pour une réaction limitée exothermique, pourquoi faut-il parfois trouver un compromis de température ?",
         ["Augmenter la température accélère toujours la réaction.", "Mais une température trop élevée peut abaisser le rendement : on choisit une température qui concilie vitesse et rendement."],
         "Vitesse et rendement varient en sens opposés"),
    ])
    # --- types de réactions (10)
    L.qa("application", "types-reactions", [
        ("Identifier le type de la réaction : $\\mathrm{CH_3-CH_2-Cl} + \\mathrm{HO^-} \\longrightarrow \\mathrm{CH_3-CH_2-OH} + \\mathrm{Cl^-}$.", ["Le chlore est remplacé par le groupe hydroxyle ; aucune liaison multiple n'apparaît ni ne disparaît."], "Substitution"),
        ("Identifier le type de la réaction : $\\mathrm{CH_2=CH_2} + \\mathrm{H_2O} \\longrightarrow \\mathrm{CH_3-CH_2-OH}$.", ["La double liaison C=C s'ouvre et deux fragments s'ajoutent de part et d'autre."], "Addition"),
        ("Identifier le type de la réaction : $\\mathrm{CH_3-CH_2-OH} \\longrightarrow \\mathrm{CH_2=CH_2} + \\mathrm{H_2O}$.", ["Deux groupes portés par des carbones voisins partent ; une double liaison C=C apparaît."], "Élimination"),
        ("Identifier le type de la réaction : $\\mathrm{CH_2=CH_2} + \\mathrm{Br_2} \\longrightarrow \\mathrm{CH_2Br-CH_2Br}$.", ["La double liaison disparaît, un atome de brome s'ajoute sur chaque carbone."], "Addition"),
        ("Identifier le type de la réaction : $\\mathrm{CH_3-CH_2-Br} + \\mathrm{HO^-} \\longrightarrow \\mathrm{CH_2=CH_2} + \\mathrm{H_2O} + \\mathrm{Br^-}$.", ["H et Br, portés par deux carbones voisins, partent ; une double liaison se forme."], "Élimination"),
        ("Identifier le type de la réaction : $\\mathrm{CH_3-OH} + \\mathrm{HCl} \\longrightarrow \\mathrm{CH_3-Cl} + \\mathrm{H_2O}$.", ["Le groupe $-\\mathrm{OH}$ est remplacé par un atome de chlore."], "Substitution"),
        ("Identifier le type de la réaction : $\\mathrm{CH_3-CH=CH_2} + \\mathrm{H_2} \\longrightarrow \\mathrm{CH_3-CH_2-CH_3}$.", ["La double liaison s'ouvre et un atome d'hydrogène s'ajoute sur chaque carbone (hydrogénation)."], "Addition"),
        ("Identifier le type de la réaction : $\\mathrm{CH_3-CHOH-CH_3} \\longrightarrow \\mathrm{CH_3-CH=CH_2} + \\mathrm{H_2O}$.", ["Déshydratation : départ de $-\\mathrm{OH}$ et de H sur deux carbones voisins, formation d'une double liaison."], "Élimination"),
        ("Comment reconnaître une addition d'une élimination en comparant réactifs et produits ?",
         ["Addition : une liaison multiple disparaît (elle s'ouvre).", "Élimination : une liaison multiple apparaît."], "Liaison multiple qui disparaît (addition) ou qui apparaît (élimination)"),
        ("Dans une substitution, le nombre de liaisons multiples de la molécule change-t-il ?",
         ["Non : un atome ou un groupe en remplace simplement un autre."], "Non"),
    ])
    # --- sites donneurs et accepteurs (7)
    L.qa("intermediaire", "sites", [
        ("Dans la liaison $\\mathrm{C-Cl}$, quel atome est un site accepteur de doublet d'électrons ? Justifier.",
         ["Le chlore est plus électronégatif que le carbone : la liaison est polarisée, $\\mathrm{C^{\\delta+}}$ et $\\mathrm{Cl^{\\delta-}}$.", "Le carbone, porteur de $\\delta^+$, est un site accepteur."], "Le carbone ($\\delta^+$)"),
        ("Pourquoi l'ion hydroxyde $\\mathrm{HO^-}$ est-il un site donneur de doublet d'électrons ?",
         ["L'oxygène porte une charge négative et des doublets non liants qu'il peut céder."], "Charge négative et doublets non liants"),
        ("Dans le groupe carbonyle $\\mathrm{C=O}$, quel atome est un site accepteur ? Pourquoi ?",
         ["L'oxygène est plus électronégatif : le carbone porte une charge partielle $\\delta^+$.", "Le carbone du groupe carbonyle est donc un site accepteur."], "Le carbone du carbonyle"),
        ("La double liaison $\\mathrm{C=C}$ d'un alcène est-elle un site donneur ou accepteur de doublet d'électrons ?",
         ["Une liaison multiple est riche en électrons : c'est un site donneur."], "Site donneur"),
        ("L'ion $\\mathrm{H^+}$ est-il un site donneur ou accepteur de doublet d'électrons ?",
         ["Il porte une charge positive et possède une lacune électronique : c'est un site accepteur."], "Site accepteur"),
        ("Dans la molécule d'eau, quels sont les sites donneurs de doublet d'électrons ?",
         ["L'atome d'oxygène porte deux doublets non liants : ce sont des sites donneurs."], "Les doublets non liants de l'oxygène"),
        ("Pourquoi une liaison entre deux atomes d'électronégativités différentes est-elle polarisée ?",
         ["L'atome le plus électronégatif attire davantage le doublet de liaison : il porte $\\delta^-$, l'autre $\\delta^+$."], "Le doublet est attiré par l'atome le plus électronégatif"),
    ])
    # --- flèches courbes (6)
    L.qa("approfondissement", "fleches-courbes", [
        ("Que représente une flèche courbe dans un mécanisme réactionnel ?", ["Le déplacement d'un doublet d'électrons, jamais celui d'un atome."], "Le déplacement d'un doublet d'électrons"),
        ("D'où part et où arrive une flèche courbe ?", ["Elle part d'un site donneur (doublet non liant ou liaison) et pointe vers un site accepteur, là où se forme la nouvelle liaison."], "Du site donneur vers le site accepteur"),
        ("Dans $\\mathrm{R-Cl} + \\mathrm{HO^-}$, tracer en mots la première flèche courbe.",
         ["Elle part d'un doublet non liant de l'oxygène de $\\mathrm{HO^-}$ et pointe vers le carbone $\\delta^+$ lié au chlore : formation de la liaison C–O."], "Du doublet de $\\mathrm{HO^-}$ vers le carbone $\\delta^+$"),
        ("Dans $\\mathrm{R-Cl} + \\mathrm{HO^-}$, que représente la seconde flèche courbe ?",
         ["Elle part de la liaison C–Cl et pointe vers le chlore, qui part avec le doublet sous forme $\\mathrm{Cl^-}$."], "La rupture de C–Cl, le doublet partant avec le chlore"),
        ("Un élève trace une flèche courbe partant d'un atome de carbone $\\delta^+$ vers $\\mathrm{HO^-}$. Pourquoi est-ce faux ?",
         ["Une flèche part toujours d'un site riche en électrons (donneur) vers un site pauvre (accepteur).", "Un carbone $\\delta^+$ est un site accepteur : la flèche doit arriver sur lui, pas en partir."],
         "La flèche doit aller du donneur vers l'accepteur"),
        ("Lors de la rupture d'une liaison polarisée, vers quel atome pointe la flèche courbe ?",
         ["Vers l'atome qui garde le doublet : en général le plus électronégatif."], "Vers l'atome qui garde le doublet"),
    ])
    # --- protection et modification (8)
    L.qa("intermediaire", "protection-modification", [
        ("L'oxydation ménagée du propan-1-ol en propanal modifie-t-elle la chaîne carbonée ou le groupe caractéristique ?",
         ["La chaîne de 3 carbones est conservée ; le groupe hydroxyle devient un groupe carbonyle."], "Le groupe caractéristique"),
        ("Une réaction transforme l'éthanal ($\\mathrm{C_2}$) en un composé à quatre atomes de carbone. Quel type de modification a eu lieu ?",
         ["Une liaison C–C a été créée : la chaîne carbonée est allongée."], "Modification de chaîne (allongement)"),
        ("L'oxydation ménagée d'un alcool secondaire conduit à quelle famille ?", ["Un alcool secondaire s'oxyde en cétone ; la chaîne carbonée est conservée."], "Une cétone"),
        ("Pourquoi protège-t-on parfois un groupe caractéristique au cours d'une synthèse ?",
         ["Quand une molécule porte deux groupes réactifs et qu'on ne veut en faire réagir qu'un seul.", "On rend temporairement l'autre groupe inerte pour obtenir sélectivement le produit voulu."],
         "Pour rendre la transformation sélective"),
        ("Quelles sont les trois étapes d'une stratégie de protection ?", ["1. Protéger le groupe à préserver ; 2. réaliser la transformation sur l'autre groupe ; 3. déprotéger pour régénérer le groupe initial."], "Protection, transformation, déprotection"),
        ("En synthèse peptidique, pourquoi protège-t-on la fonction amine d'un acide aminé et la fonction acide de l'autre ?",
         ["Pour qu'une seule liaison peptidique se forme, entre le groupe acide du premier et le groupe amine du second.", "Sans protection, les acides aminés pourraient réagir n'importe comment (mélange de dipeptides)."],
         "Pour former sélectivement la bonne liaison peptidique"),
        ("Une étape de protection fabrique-t-elle le produit final ?", ["Non : elle met de côté temporairement un groupe ; elle doit être suivie d'une déprotection."], "Non"),
        ("Pourquoi éviter une protection quand elle n'est pas indispensable ?",
         ["Elle ajoute deux étapes (protection et déprotection), chacune avec un rendement inférieur à 100 % : le rendement global diminue."], "Elle diminue le rendement global"),
    ])
    return L.fin()


# =====================================================================
#  Registre
# =====================================================================

EXTRA = {
    ("premiere", "chimie-organique"): gen_1_chimie_organique,
    ("premiere", "energie-phenomenes-electriques"): gen_1_energie_electrique,
    ("premiere", "energie-phenomenes-mecaniques"): gen_1_energie_mecanique,
    ("premiere", "mouvement-interactions"): gen_1_mouvement_interactions,
    ("premiere", "ondes-signaux"): gen_1_ondes_signaux,
    ("premiere", "transformations-matiere"): gen_1_transformations_matiere,
    ("terminale", "cinetique-chimique"): gen_T_cinetique,
    ("terminale", "decrire-mouvement"): gen_T_decrire_mouvement,
    ("terminale", "ecoulement-fluide"): gen_T_ecoulement_fluide,
    ("terminale", "electrolyse"): gen_T_electrolyse,
    ("terminale", "equilibre-sens-evolution"): gen_T_equilibre,
    ("terminale", "gaz-parfait"): gen_T_gaz_parfait,
    ("terminale", "lois-newton-champs"): gen_T_newton,
    ("terminale", "lunette-photons"): gen_T_lunette_photons,
    ("terminale", "methodes-physiques-analyse"): gen_T_methodes_analyse,
    ("terminale", "phenomenes-ondulatoires"): gen_T_ondes,
    ("terminale", "synthese-organique"): gen_T_synthese_organique,
}
