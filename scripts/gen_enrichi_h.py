# -*- coding: utf-8 -*-
"""Générateurs enrichis — lot h : chapitres de maths et de physique-chimie les plus pauvres
(peu de notions, énoncés tous construits sur le même gabarit).

Chaque chapitre : 50 exercices, au moins 6 notions de la fiche et du programme du niveau,
15 exercices au plus par notion, au moins 3 difficultés, et des types variés : calcul direct,
problème en contexte réel, lecture d'un tableau ou d'un graphique décrit, « vrai ou faux »
justifié, erreur à trouver.

Toutes les réponses sont calculées par le code (fractions exactes) et recalculées une seconde
fois par un autre chemin (assertions `_ok`).

Les réponses qui ne sont pas lisibles telles quelles par l'appli reçoivent une ligne
d'attendus.json (formes courtes équivalentes) :
    python3 scripts/gen_enrichi_h.py --attendus   → réécrit les attendus.json de ces chapitres
(à relancer après chaque modification de ce fichier ET après `python3 scripts/generer-exos.py`).
"""
import json
import math
import os
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction as F

EG, APPROX, DEUX = "=", "\\approx", "2 \\times "
ORDRE_DIFF = {"application": 0, "intermediaire": 1, "approfondissement": 2, "probleme": 3}
EXTRA = {}      # (niveau, slug) -> générateur (rempli par @chapitre)
ATTENDUS = {}   # (niveau, slug) -> {id: {"reponse": …, "accepte"/"ensemble": […]}}


# =====================================================================
# Aides
# =====================================================================
def _ok(cond, msg="vérification"):
    if not cond:
        raise AssertionError(msg)


def _proche(a, b, tol=1e-9):
    return abs(float(a) - float(b)) <= tol * max(1.0, abs(float(b)))


def _dec(x, d):
    q = Decimal(1).scaleb(-d)
    if isinstance(x, F):
        v = Decimal(x.numerator) / Decimal(x.denominator)
    elif isinstance(x, int):
        v = Decimal(x)
    else:
        v = Decimal(repr(float(x)))
    return v.quantize(q, rounding=ROUND_HALF_UP)


def arr(x, d=0):
    """Arrondi scolaire (au plus proche, 0,5 vers le haut) ; refuse les cas limites flottants."""
    if not isinstance(x, (F, int)):
        y = abs(float(x)) * 10 ** d
        _ok(abs(abs(y - math.floor(y)) - 0.5) > 1e-6, f"arrondi limite {x}")
    v = _dec(x, d)
    return F(str(v))


def _grouper(ent):
    s = str(ent)
    g = []
    while len(s) > 3:
        g.insert(0, s[-3:])
        s = s[:-3]
    g.insert(0, s)
    return g


def nb(x, d=6, garder=False):
    """Nombre LaTeX : 2{,}5 ; 12\\,500 ; -0{,}9 (arrondi à d décimales)."""
    v = _dec(x, d)
    neg = v < 0
    s = format(abs(v), "f")
    if "." in s:
        ent, dec = s.split(".")
        if not garder:
            dec = dec.rstrip("0")
    else:
        ent, dec = s, ""
    r = "\\,".join(_grouper(int(ent))) + ("{,}" + dec if dec else "")
    if neg and r.strip("0{,}\\") != "":
        r = "-" + r
    return r


def nt(x, d=6, garder=False):
    """Même nombre, en texte simple pour les formes acceptées : 2,5 ; 12500 ; -0,9."""
    return nb(x, d, garder).replace("{,}", ",").replace("\\,", "")


def pc(x, d=2):
    """Proportion x (Fraction) en pourcentage LaTeX : 36\\,\\%."""
    return f"{nb(F(x) * 100, d)}\\,\\%"


def pcs(t, d=2):
    return ("+" if t > 0 else "") + pc(t, d)


def fl(f):
    """Fraction LaTeX (\\dfrac) ou entier."""
    f = F(f)
    if f.denominator == 1:
        return str(f.numerator)
    s = "-" if f < 0 else ""
    return f"{s}\\dfrac{{{abs(f.numerator)}}}{{{f.denominator}}}"


def exact(x):
    d = F(x).denominator
    for p in (2, 5):
        while d % p == 0:
            d //= p
    return d == 1


def chapitre(niveau, slug):
    def deco(fn):
        EXTRA[(niveau, slug)] = fn
        return fn
    return deco


class Lot:
    def __init__(self, cle):
        self.cle = cle
        self.E = []

    def add(self, d, n, e, c, r, att=None):
        _ok(d in ORDRE_DIFF, d)
        self.E.append((d, n, e, list(c), r, att))

    def fin(self):
        E = self.E
        if len(E) != 50:
            raise ValueError(f"{self.cle} : {len(E)} exercices au lieu de 50")
        enonces = [e[2] for e in E]
        if len(set(enonces)) != 50:
            dbl = [e for e in enonces if enonces.count(e) > 1]
            raise ValueError(f"{self.cle} : énoncé en double : {dbl[0][:80]}")
        E = sorted(E, key=lambda t: ORDRE_DIFF[t[0]])
        out, att = [], {}
        for i, (d, n, e, c, r, a) in enumerate(E):
            out.append({"id": i + 1, "difficulte": d, "notion": n, "enonce": e, "corrige": c, "reponse": r})
            if a:
                att[str(i + 1)] = {"reponse": r, **a}
        ATTENDUS[self.cle] = att
        return out


def ens(*elements):
    return {"ensemble": list(elements)}


def acc(*formes):
    return {"accepte": list(formes)}


# =====================================================================
# 3e — RACINE CARRÉE : RÉSOUDRE x² = a
# =====================================================================
def _sol_pm(a):
    """Solutions de x² = a (a Fraction ou int) : (texte LaTeX de conclusion, réponse, attendu)."""
    a = F(a)
    if a < 0:
        return ("Un carré n'est jamais négatif : l'équation n'a aucune solution.", "Aucune solution", None)
    if a == 0:
        return ("Seul $0$ a pour carré $0$ : une seule solution, $x = 0$.", "$x = 0$", None)
    r = None
    if math.isqrt(a.numerator) ** 2 == a.numerator and math.isqrt(a.denominator) ** 2 == a.denominator:
        r = F(math.isqrt(a.numerator), math.isqrt(a.denominator))
    if r is not None:
        _ok(r * r == a)
        return (f"$x = \\sqrt{{{nb(a)}}} = {nb(r)}$ ou $x = -\\sqrt{{{nb(a)}}} = -{nb(r)}$.",
                f"$-{nb(r)}$ et ${nb(r)}$", None)
    _ok(a.denominator == 1)
    s = nb(a)
    return (f"${s}$ n'est pas un carré parfait : $x = \\sqrt{{{s}}}$ ou $x = -\\sqrt{{{s}}}$.",
            f"$-\\sqrt{{{s}}}$ et $\\sqrt{{{s}}}$", ens(f"-√{nt(a)}", f"√{nt(a)}"))


@chapitre("troisieme", "racine-carree")
def g3_racine_carree():
    L = Lot(("troisieme", "racine-carree"))

    # a) carrés et racines (automatismes) — 7
    N = "carres-et-racines"
    for expr, val, sous, etapes in [
        ("\\sqrt{121}", 11, 121, ["$11^2 = 121$ et $11 \\geqslant 0$."]),
        ("\\sqrt{64}", 8, 64, ["$8^2 = 64$ et $8 \\geqslant 0$."]),
        ("\\sqrt{400}", 20, 400, ["$20^2 = 400$ et $20 \\geqslant 0$."]),
        ("\\sqrt{0{,}36}", F(6, 10), F(36, 100), ["$0{,}6^2 = 0{,}6 \\times 0{,}6 = 0{,}36$ et $0{,}6 \\geqslant 0$."]),
        ("(\\sqrt{11})^2", 11, None, ["Le carré annule la racine : $(\\sqrt{a})^2 = a$ pour $a \\geqslant 0$."]),
        ("\\sqrt{(-5)^2}", 5, (-5) ** 2, ["On calcule d'abord sous le radical : $(-5)^2 = 25$.", "$\\sqrt{25} = 5$ : une racine carrée n'est jamais négative."]),
        ("\\sqrt{6^2 + 8^2}", 10, 6 ** 2 + 8 ** 2, ["Sous le radical : $36 + 64 = 100$.", "$\\sqrt{100} = 10$ (et non $6 + 8 = 14$)."]),
    ]:
        _ok(sous is None or (val >= 0 and F(val) ** 2 == sous), expr)
        L.add("application", N, f"Calculer ${expr}$.", etapes, f"${nb(val)}$")

    # b) x² = a avec a > 0 — 8
    N = "resoudre-x2-egal-a-positif"
    for a, d in [(49, "application"), (100, "application"), (144, "application"), (F(225, 100), "intermediaire"),
                 (13, "intermediaire"), (30, "intermediaire"), (F(64, 100), "intermediaire")]:
        concl, rep, att = _sol_pm(a)
        L.add(d, N, f"Résoudre l'équation $x^2 = {nb(a)}$.",
              [f"${nb(a)} > 0$ : l'équation a deux solutions opposées.", concl], rep, att)
    concl, rep, att = _sol_pm(36)
    L.add("application", N, "Quels sont les nombres dont le carré est égal à $36$ ?",
          ["Il s'agit de résoudre $x^2 = 36$, avec $36 > 0$.", concl], rep, att)

    # c) a = 0 ou a < 0 — 6
    N = "cas-a-nul-ou-negatif"
    concl, rep, att = _sol_pm(0)
    L.add("application", N, "Résoudre l'équation $x^2 = 0$.", [concl], rep, att)
    concl, rep, att = _sol_pm(-16)
    L.add("application", N, "Résoudre l'équation $x^2 = -16$.", ["$-16 < 0$.", concl], rep, att)
    for a, n in [(-25, 0), (0, 1), (3, 2)]:
        L.add("intermediaire", N, f"Combien de solutions l'équation $x^2 = {a}$ a-t-elle ?",
              [f"On regarde le signe de $a = {a}$.",
               {0: "$a < 0$ : un carré n'est jamais négatif, aucune solution.",
                1: "$a = 0$ : une seule solution, $x = 0$.",
                2: "$a > 0$ : deux solutions opposées, $-\\sqrt{3}$ et $\\sqrt{3}$."}[n]],
              f"${n}$")
    L.add("approfondissement", N,
          "Vrai ou faux ? « L'équation $x^2 = -9$ a pour solutions $-3$ et $3$. » Justifier.",
          ["$3^2 = 9$ et $(-3)^2 = 9$ : aucun de ces nombres n'a pour carré $-9$.",
           "Un carré n'est jamais négatif : l'équation $x^2 = -9$ n'a aucune solution. L'affirmation est fausse."],
          "Faux")

    # d) se ramener à x² = a — 9
    N = "se-ramener-a-x2-egal-a"
    for eq, etapes, a, d in [
        ("3x^2 = 75", ["On divise les deux membres par $3$ : $x^2 = 25$."], 25, "intermediaire"),
        ("x^2 + 7 = 56", ["On soustrait $7$ aux deux membres : $x^2 = 49$."], 49, "intermediaire"),
        ("2x^2 - 50 = 0", ["On ajoute $50$ : $2x^2 = 50$.", "On divise par $2$ : $x^2 = 25$."], 25, "intermediaire"),
        ("x^2 - 20 = 16", ["On ajoute $20$ aux deux membres : $x^2 = 36$."], 36, "intermediaire"),
        ("5x^2 = 45", ["On divise les deux membres par $5$ : $x^2 = 9$."], 9, "intermediaire"),
        ("\\dfrac{x^2}{4} = 9", ["On multiplie les deux membres par $4$ : $x^2 = 36$."], 36, "approfondissement"),
        ("4x^2 + 3 = 3", ["On soustrait $3$ : $4x^2 = 0$.", "On divise par $4$ : $x^2 = 0$."], 0, "approfondissement"),
        ("x^2 + 10 = 1", ["On soustrait $10$ aux deux membres : $x^2 = -9$."], -9, "approfondissement"),
        ("2x^2 = 14", ["On divise les deux membres par $2$ : $x^2 = 7$."], 7, "approfondissement"),
    ]:
        concl, rep, att = _sol_pm(a)
        L.add(d, N, f"Résoudre l'équation ${eq}$.", etapes + [concl], rep, att)

    # e) résolution graphique — 6
    N = "resolution-graphique"
    L.add("application", N,
          "On trace la parabole qui représente la fonction carré et la droite horizontale d'équation $y = 16$. Quelles sont les abscisses de leurs points d'intersection ?",
          ["Les points d'intersection ont pour abscisses les solutions de $x^2 = 16$.", "$x = 4$ ou $x = -4$."],
          "$-4$ et $4$")
    for k, n, txt in [(-2, 0, "la droite est sous l'axe des abscisses alors que la parabole est au-dessus : aucun point commun."),
                      (0, 1, "la droite est l'axe des abscisses ; elle touche la parabole en un seul point, l'origine."),
                      (9, 2, "la droite coupe les deux branches de la parabole, en $x = -3$ et en $x = 3$.")]:
        L.add("intermediaire", N,
              f"Combien de points d'intersection ont la parabole d'équation $y = x^2$ et la droite d'équation $y = {k}$ ?",
              [f"Cela revient à compter les solutions de $x^2 = {k}$.", f"Ici, {txt}"], f"${n}$")
    concl, rep, att = _sol_pm(5)
    L.add("approfondissement", N,
          "Sur un graphique, la droite d'équation $y = 5$ coupe la parabole $y = x^2$ en deux points dont on lit les abscisses : environ $-2{,}2$ et $2{,}2$. Donner les valeurs exactes de ces abscisses.",
          ["Ce sont les solutions de $x^2 = 5$.", concl, "Le graphique ne donne que des valeurs approchées : $\\sqrt{5} \\approx 2{,}24$."],
          rep, att)
    L.add("intermediaire", N,
          "Sur la parabole représentant la fonction carré, on lit le point d'abscisse $-1{,}5$. Quelle est son ordonnée ?",
          ["L'ordonnée est le carré de l'abscisse : $(-1{,}5)^2 = 1{,}5 \\times 1{,}5 = 2{,}25$."], "$2{,}25$")

    # f) problèmes — 8
    N = "problemes"
    L.add("application", N, "Un potager carré a une aire de $81$ m². Quelle est la longueur de son côté ?",
          ["On note $c$ le côté : $c^2 = 81$.", "Les solutions sont $-9$ et $9$ ; une longueur est positive, donc $c = 9$ m."], "$9$ m")
    L.add("application", N, "Une dalle carrée a une aire de $625$ cm². Quelle est la longueur de son côté ?",
          ["$c^2 = 625$ et $c > 0$.", "$c = \\sqrt{625} = 25$ cm."], "$25$ cm")
    c = math.sqrt(200)
    L.add("intermediaire", N,
          "Une pelouse carrée a une aire de $200$ m². Donner la valeur exacte de son côté, puis un arrondi au décimètre.",
          ["$c^2 = 200$ et $c > 0$, donc $c = \\sqrt{200}$ m.", f"$\\sqrt{{200}} \\approx {nb(c, 4)}$, soit environ ${nb(arr(c, 1))}$ m."],
          f"$\\approx {nb(arr(c, 1))}$ m")
    L.add("intermediaire", N, "Un champ carré a une superficie d'un hectare, c'est-à-dire $10\\,000$ m². Quelle est la longueur de son côté ?",
          ["$c^2 = 10\\,000$ et $c > 0$.", "$c = \\sqrt{10\\,000} = 100$ m."], "$100$ m")
    L.add("intermediaire", N, "Le carré d'un nombre positif, augmenté de $12$, vaut $61$. Quel est ce nombre ?",
          ["$x^2 + 12 = 61$, donc $x^2 = 49$.", "Les solutions sont $-7$ et $7$ ; le nombre est positif : $x = 7$."], "$7$")
    _ok(F(441, 10) / F(49, 10) == 9)
    L.add("probleme", N,
          "Une bille lâchée sans vitesse parcourt $d = 4{,}9\\,t^2$ mètres en $t$ secondes. Combien de temps met-elle à tomber de $44{,}1$ m ?",
          ["$4{,}9\\,t^2 = 44{,}1$, donc $t^2 = \\dfrac{44{,}1}{4{,}9} = 9$.",
           "$t = 3$ ou $t = -3$ ; une durée est positive : $t = 3$ s."], "$3$ s")
    r = math.sqrt(50 / math.pi)
    L.add("probleme", N,
          "Un disque a une aire de $50$ cm². Calculer son rayon, arrondi au millimètre.",
          ["$\\pi r^2 = 50$, donc $r^2 = \\dfrac{50}{\\pi}$.",
           f"$r > 0$, donc $r = \\sqrt{{\\dfrac{{50}}{{\\pi}}}} \\approx {nb(r, 4)}$ cm, soit environ ${nb(arr(r, 1))}$ cm."],
          f"$\\approx {nb(arr(r, 1))}$ cm")
    x = math.sqrt(50)
    L.add("probleme", N,
          "Un triangle rectangle isocèle a une hypoténuse de $10$ cm. Calculer la longueur de ses côtés de l'angle droit, arrondie au millimètre.",
          ["On note $x$ la longueur cherchée. Pythagore : $x^2 + x^2 = 10^2$, soit $2x^2 = 100$.",
           "$x^2 = 50$ et $x > 0$, donc $x = \\sqrt{50}$.", f"$\\sqrt{{50}} \\approx {nb(x, 4)}$, soit environ ${nb(arr(x, 1))}$ cm."],
          f"$\\approx {nb(arr(x, 1))}$ cm")

    # g) erreurs à corriger — 6
    N = "erreurs-a-corriger"
    L.add("intermediaire", N,
          "Léa résout $x^2 = 64$ et trouve seulement $x = 8$. Quelle solution a-t-elle oubliée ?",
          ["$64 > 0$ : il y a deux solutions opposées.", "$(-8)^2 = 64$ aussi : Léa a oublié $x = -8$."], "$-8$")
    L.add("intermediaire", N,
          "Hugo écrit : « $x^2 = 36$, donc $x = 18$ ». Corriger son erreur et donner les solutions.",
          ["$x^2$ signifie $x \\times x$, pas $2x$ : Hugo a divisé par $2$.", "$x^2 = 36$ donne $x = 6$ ou $x = -6$."],
          "$-6$ et $6$")
    L.add("intermediaire", N,
          "Inès écrit : $\\sqrt{9 + 16} = \\sqrt{9} + \\sqrt{16} = 7$. Quelle est la bonne valeur de $\\sqrt{9 + 16}$ ?",
          ["La racine ne se distribue pas sur une somme : on calcule d'abord sous le radical.", "$\\sqrt{9 + 16} = \\sqrt{25} = 5$."], "$5$")
    L.add("approfondissement", N,
          "Sam résout $x^2 + 9 = 25$ en écrivant « $x + 3 = 5$, donc $x = 2$ ». Donner les vraies solutions.",
          ["On ne prend pas la racine terme à terme. On isole d'abord $x^2$ : $x^2 = 25 - 9 = 16$.", "$x = 4$ ou $x = -4$."],
          "$-4$ et $4$")
    L.add("approfondissement", N,
          "Vrai ou faux ? « $\\sqrt{25} = -5$ ou $5$. » Justifier.",
          ["$\\sqrt{25}$ désigne un seul nombre : le nombre **positif** dont le carré vaut $25$, c'est-à-dire $5$.",
           "C'est l'équation $x^2 = 25$ qui a deux solutions, $-5$ et $5$. L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N,
          "Vrai ou faux ? « Si $x^2 = 10$, alors $x \\approx 3{,}16$ ou $x \\approx -3{,}16$. » Justifier.",
          ["$10 > 0$ : les solutions sont $\\sqrt{10}$ et $-\\sqrt{10}$.", "$\\sqrt{10} \\approx 3{,}162$ : l'affirmation est vraie."], "Vrai")
    return L.fin()


# =====================================================================
# 3e — REPRÉSENTATION DE L'ESPACE
# =====================================================================
@chapitre("troisieme", "representation-espace")
def g3_representation_espace():
    L = Lot(("troisieme", "representation-espace"))
    pi = math.pi

    # a) volumes (automatismes) — 8
    N = "volumes-des-solides"
    for d, e, c, r in [
        ("application", "Calculer le volume d'un pavé droit de $12$ cm sur $5$ cm et de hauteur $4$ cm.",
         ["$V = L \\times \\ell \\times h = 12 \\times 5 \\times 4 = 240$ cm³."], "$240$ cm³"),
        ("application", "Calculer le volume d'un cube d'arête $7$ cm.", ["$V = 7^3 = 7 \\times 7 \\times 7 = 343$ cm³."], "$343$ cm³"),
        ("application", "Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent $6$ cm et $4$ cm ; sa hauteur est $10$ cm. Calculer son volume.",
         ["Aire de la base : $\\dfrac{6 \\times 4}{2} = 12$ cm².", "$V = 12 \\times 10 = 120$ cm³."], "$120$ cm³"),
        ("application", "Une pyramide a pour base un rectangle de $9$ cm sur $5$ cm et pour hauteur $8$ cm. Calculer son volume.",
         ["Aire de la base : $9 \\times 5 = 45$ cm².", "$V = \\dfrac{45 \\times 8}{3} = 120$ cm³."], "$120$ cm³"),
    ]:
        L.add(d, N, e, c, r)
    v = pi * 9 * 10
    L.add("intermediaire", N, "Calculer le volume d'un cylindre de rayon $3$ cm et de hauteur $10$ cm, arrondi au cm³.",
          ["$V = \\pi r^2 h = \\pi \\times 3^2 \\times 10 = 90\\pi$ cm³.", f"$90\\pi \\approx {nb(v, 2)}$, soit environ ${nb(arr(v))}$ cm³."],
          f"$\\approx {nb(arr(v))}$ cm³")
    v = pi * 16 * 9 / 3
    L.add("intermediaire", N, "Calculer le volume d'un cône de rayon $4$ cm et de hauteur $9$ cm, arrondi au cm³.",
          ["$V = \\dfrac{\\pi r^2 h}{3} = \\dfrac{\\pi \\times 16 \\times 9}{3} = 48\\pi$ cm³.", f"$48\\pi \\approx {nb(v, 2)}$, soit environ ${nb(arr(v))}$ cm³."],
          f"$\\approx {nb(arr(v))}$ cm³")
    v = pi * 0.04 ** 2 * 0.12 * 1000
    L.add("probleme", N, "Une canette cylindrique a un rayon de $4$ cm et une hauteur de $12$ cm. Peut-elle contenir $50$ cL ? Donner son volume en cL, arrondi à l'unité.",
          ["$V = \\pi \\times 4^2 \\times 12 = 192\\pi$ cm³.", f"$192\\pi \\approx {nb(pi * 192, 1)}$ cm³, soit environ ${nb(arr(v * 100))}$ cL car $1$ cL $= 10$ cm³.",
           "C'est plus que $50$ cL : oui, elle peut les contenir."], f"$\\approx {nb(arr(v * 100))}$ cL")
    _ok(arr(pi * 192 / 10) == arr(v * 100))
    L.add("intermediaire", N, "Un aquarium a la forme d'un pavé droit de $60$ cm sur $30$ cm et de hauteur $40$ cm. Combien de litres d'eau contient-il quand il est plein ?",
          ["$V = 60 \\times 30 \\times 40 = 72\\,000$ cm³.", "$1$ L $= 1\\,000$ cm³, donc $V = 72$ L."], "$72$ L")

    # b) pyramide inscrite dans un cube — 6
    N = "pyramide-inscrite-dans-un-cube"
    for a in (6, 9, 12):
        L.add("application" if a == 6 else "intermediaire", N,
              f"Dans un cube d'arête ${a}$ cm, on construit une pyramide de base une face du cube et de sommet un sommet de la face opposée. Calculer son volume.",
              [f"Base : carré de côté ${a}$ cm, d'aire ${a * a}$ cm² ; hauteur : l'arête du cube, ${a}$ cm.",
               f"$V = \\dfrac{{{a * a} \\times {a}}}{{3}} = {a ** 3 // 3}$ cm³, le tiers du cube (${a ** 3}$ cm³)."],
              f"${a ** 3 // 3}$ cm³")
    L.add("intermediaire", N, "Combien de pyramides identiques, de base une face d'un cube et de sommet un sommet de la face opposée, faut-il pour remplir ce cube ?",
          ["Chacune a pour volume $\\dfrac{a^2 \\times a}{3} = \\dfrac{a^3}{3}$, le tiers du cube.", "Il en faut donc $3$."], "$3$")
    d = 8 * math.sqrt(2)
    L.add("approfondissement", N,
          "Le patron d'une pyramide inscrite dans un cube d'arête $8$ cm contient deux triangles rectangles dont un côté de l'angle droit est une diagonale d'une face du cube. Calculer cette diagonale, arrondie au millimètre.",
          ["Dans une face carrée, Pythagore : $d^2 = 8^2 + 8^2 = 128$.", f"$d = \\sqrt{{128}} = 8\\sqrt{{2}} \\approx {nb(d, 3)}$ cm, soit environ ${nb(arr(d, 1))}$ cm."],
          f"$\\approx {nb(arr(d, 1))}$ cm")
    L.add("approfondissement", N,
          "Vrai ou faux ? « Une pyramide inscrite dans un cube, de sommet situé au-dessus d'un coin de la base, a quatre faces latérales identiques. » Justifier.",
          ["Son sommet n'est pas au-dessus du centre de la base : la pyramide n'est pas régulière.",
           "Deux faces ont pour côtés de l'angle droit deux arêtes du cube ; les deux autres ont une arête et une diagonale de face. L'affirmation est fausse."],
          "Faux")

    # c) sphère et boule — 7
    N = "sphere-et-boule"
    L.add("application", N, "Une boule a un diamètre de $18$ cm. Quel est son rayon ?", ["Le diamètre vaut deux fois le rayon : $R = 18 \\div 2 = 9$ cm."], "$9$ cm")
    L.add("application", N, "Une sphère a un rayon de $6{,}5$ cm. Quelle est la longueur d'un de ses diamètres ?", ["$d = 2R = 2 \\times 6{,}5 = 13$ cm."], "$13$ cm")
    L.add("application", N, "Un point $M$ est à $7$ cm du centre d'une sphère de rayon $5$ cm. Est-il sur la sphère, à l'intérieur de la boule ou à l'extérieur ?",
          ["Les points de la boule sont à une distance du centre inférieure ou égale à $5$ cm.", "$7 > 5$ : $M$ est à l'extérieur."], "À l'extérieur")
    L.add("intermediaire", N, "Vrai ou faux ? « On peut calculer le volume d'une sphère. » Justifier.",
          ["La sphère est une surface (la « peau ») : elle n'a pas de volume.", "On calcule le volume de la **boule**, le solide plein. L'affirmation est fausse."], "Faux")
    L.add("intermediaire", N, "On coupe une boule de rayon $8$ cm par un plan qui passe par son centre. Quel est le rayon du cercle obtenu sur la sphère ?",
          ["Un plan passant par le centre coupe la sphère selon un grand cercle.", "Son rayon est celui de la sphère : $8$ cm."], "$8$ cm")
    L.add("intermediaire", N, "La Terre est assimilée à une sphère de rayon $6\\,370$ km. L'équateur est un grand cercle. Calculer sa longueur, arrondie à la centaine de kilomètres.",
          ["Le rayon de l'équateur est celui de la Terre.", f"$\\ell = 2\\pi R = 2 \\times \\pi \\times 6\\,370 \\approx {nb(2 * pi * 6370, 0)}$ km, soit environ ${nb(arr(2 * pi * 6370 / 100) * 100)}$ km."],
          f"$\\approx {nb(arr(2 * pi * 6370 / 100) * 100)}$ km")
    L.add("approfondissement", N, "Vrai ou faux ? « Un point situé à $3$ cm du centre d'une sphère de rayon $5$ cm appartient à la sphère. » Justifier.",
          ["Les points de la sphère sont exactement à $5$ cm du centre.", "Ce point est à l'intérieur de la boule, pas sur la sphère. L'affirmation est fausse."], "Faux")

    # d) sections planes — 8
    N = "sections-planes"
    L.add("application", N, "On coupe un cylindre par un plan perpendiculaire à son axe. Quelle est la nature de la section ?",
          ["Perpendiculairement à l'axe, la section est identique aux bases."], "Un disque")
    L.add("application", N, "On coupe un cylindre par un plan parallèle à son axe. Quelle est la nature de la section ?",
          ["Parallèlement à l'axe, le plan coupe le cylindre selon deux génératrices : la section est un rectangle."], "Un rectangle")
    L.add("application", N, "On coupe un pavé droit par un plan parallèle à une face. Quelle est la nature de la section ?",
          ["La section est un rectangle identique à cette face."], "Un rectangle")
    L.add("intermediaire", N, "Un pavé droit de $8$ cm sur $5$ cm et de hauteur $3$ cm est coupé par un plan parallèle à sa face de $8$ cm sur $5$ cm. Calculer l'aire de la section.",
          ["La section est un rectangle identique à cette face : $8$ cm sur $5$ cm.", "Aire : $8 \\times 5 = 40$ cm²."], "$40$ cm²")
    L.add("intermediaire", N, "Un cylindre de rayon $5$ cm et de hauteur $12$ cm est coupé par un plan contenant son axe. Calculer l'aire de la section.",
          ["La section est un rectangle de largeur le diamètre ($10$ cm) et de longueur la hauteur ($12$ cm).", "Aire : $10 \\times 12 = 120$ cm²."], "$120$ cm²")
    v = pi * 25
    L.add("intermediaire", N, "Un cylindre de rayon $5$ cm et de hauteur $12$ cm est coupé par un plan perpendiculaire à son axe. Calculer l'aire de la section, arrondie au cm².",
          ["La section est un disque de rayon $5$ cm, identique aux bases.", f"Aire : $\\pi \\times 5^2 = 25\\pi \\approx {nb(v, 2)}$ cm², soit environ ${nb(arr(v))}$ cm²."],
          f"$\\approx {nb(arr(v))}$ cm²")
    L.add("approfondissement", N, "Vrai ou faux ? « Toute section d'une boule par un plan est un disque de même rayon que la boule. » Justifier.",
          ["La section d'une boule par un plan est toujours un disque…", "… mais seul le plan passant par le centre donne le rayon $R$ ; les autres sections sont plus petites. L'affirmation est fausse."],
          "Faux")
    L.add("approfondissement", N, "Un cube d'arête $6$ cm est coupé par un plan parallèle à une face, à $2$ cm de celle-ci. Quel est le périmètre de la section ?",
          ["La section est un carré identique à une face, quelle que soit la hauteur de la coupe.", "Périmètre : $4 \\times 6 = 24$ cm."], "$24$ cm")

    # e) rayon de la section d'une boule — 7
    N = "section-d-une-boule"
    for R, dd, diff in [(5, 3, "intermediaire"), (13, 5, "intermediaire"), (10, 6, "intermediaire"), (17, 8, "approfondissement")]:
        r = math.isqrt(R * R - dd * dd)
        _ok(r * r == R * R - dd * dd)
        L.add(diff, N, f"Une boule de rayon ${R}$ cm est coupée par un plan situé à ${dd}$ cm de son centre. Calculer le rayon de la section.",
              [f"Le triangle formé par le centre, le centre de la section et un point du bord est rectangle.",
               f"Pythagore : $r^2 = {R}^2 - {dd}^2 = {R * R} - {dd * dd} = {r * r}$.", f"$r = \\sqrt{{{r * r}}} = {r}$ cm."], f"${r}$ cm")
    r = math.sqrt(36 - 4)
    L.add("approfondissement", N, "Une boule de rayon $6$ cm est coupée par un plan situé à $2$ cm de son centre. Calculer le rayon de la section, arrondi au millimètre.",
          ["Pythagore : $r^2 = 6^2 - 2^2 = 36 - 4 = 32$.", f"$r = \\sqrt{{32}} \\approx {nb(r, 3)}$ cm, soit environ ${nb(arr(r, 1))}$ cm."],
          f"$\\approx {nb(arr(r, 1))}$ cm")
    L.add("probleme", N, "Une orange sphérique de rayon $5$ cm est coupée en une tranche dont la face mesure $8$ cm de diamètre. À quelle distance du centre a-t-on coupé ?",
          ["Rayon de la section : $r = 4$ cm. Pythagore : $d^2 = R^2 - r^2 = 25 - 16 = 9$.", "$d = 3$ cm."], "$3$ cm")
    L.add("probleme", N, "On coupe une boule de rayon $10$ cm à $10$ cm de son centre. Que peut-on dire de la section ?",
          ["$r^2 = 10^2 - 10^2 = 0$ : le plan ne touche la boule qu'en un point.", "La section est réduite à un point (le plan est tangent à la sphère)."],
          "Un point", acc("un point", "point"))

    # f) volume de la boule — 8
    N = "volume-de-la-boule"
    for R, diff in [(3, "application"), (6, "application"), (10, "intermediaire")]:
        v = 4 / 3 * pi * R ** 3
        k = F(4, 3) * R ** 3
        L.add(diff, N, f"Calculer le volume d'une boule de rayon ${R}$ cm, arrondi au cm³.",
              [f"$V = \\dfrac{{4}}{{3}} \\pi R^3 = \\dfrac{{4}}{{3}} \\times \\pi \\times {R ** 3} = {nb(k) if k.denominator == 1 else fl(k)}\\pi$ cm³.",
               f"Soit environ ${nb(arr(v))}$ cm³."], f"$\\approx {nb(arr(v))}$ cm³")
    v = 4 / 3 * pi * 11 ** 3
    L.add("intermediaire", N, "Un ballon de basket a un diamètre de $22$ cm. Calculer son volume, arrondi au cm³.",
          ["Le rayon vaut $22 \\div 2 = 11$ cm.", f"$V = \\dfrac{{4}}{{3}} \\times \\pi \\times 11^3 = \\dfrac{{4}}{{3}} \\times \\pi \\times 1\\,331 \\approx {nb(v, 1)}$ cm³.",
           f"Soit environ ${nb(arr(v))}$ cm³."], f"$\\approx {nb(arr(v))}$ cm³")
    L.add("intermediaire", N, "On double le rayon d'une boule. Par combien son volume est-il multiplié ?",
          ["Le volume dépend de $R^3$ : $(2R)^3 = 8R^3$.", "Le volume est multiplié par $8$ (et non par $2$)."], "$8$")
    vc = pi * 25 * 10
    vb = 4 / 3 * pi * 125
    _ok(_proche(vb / vc, 2 / 3))
    L.add("approfondissement", N, "Une boule de rayon $5$ cm est enfermée dans un cylindre de rayon $5$ cm et de hauteur $10$ cm. Quelle fraction du volume du cylindre la boule occupe-t-elle ?",
          ["Cylindre : $\\pi \\times 5^2 \\times 10 = 250\\pi$ cm³. Boule : $\\dfrac{4}{3}\\pi \\times 125 = \\dfrac{500}{3}\\pi$ cm³.",
           "Rapport : $\\dfrac{500\\pi}{3} \\div 250\\pi = \\dfrac{2}{3}$ (résultat d'Archimède)."], "$\\dfrac{2}{3}$")
    v = 4 / 3 * pi * 2 ** 3
    n = 1000 / v
    L.add("probleme", N, "Combien de billes pleines de rayon $2$ cm peut-on fabriquer avec $1$ L de pâte à modeler ?",
          [f"Volume d'une bille : $\\dfrac{{4}}{{3}} \\times \\pi \\times 2^3 \\approx {nb(v, 2)}$ cm³.", f"$1$ L $= 1\\,000$ cm³ et $1\\,000 \\div {nb(v, 2)} \\approx {nb(n, 1)}$.",
           f"On peut fabriquer ${math.floor(n)}$ billes entières."], f"${math.floor(n)}$ billes")
    v = 4 / 3 * pi * 0.6 ** 3
    L.add("probleme", N, "Une citerne sphérique a un rayon intérieur de $60$ cm. Quelle est sa contenance, arrondie au litre ?",
          ["$60$ cm $= 6$ dm. $V = \\dfrac{4}{3} \\times \\pi \\times 6^3 = 288\\pi$ dm³.", f"$288\\pi \\approx {nb(pi * 288, 1)}$ dm³, et $1$ dm³ $= 1$ L.",
           f"Contenance : environ ${nb(arr(pi * 288))}$ L."], f"$\\approx {nb(arr(pi * 288))}$ L")
    _ok(_proche(v * 1000, pi * 288))

    # g) problème de synthèse — 6
    N = "problemes-de-synthese"
    vb = 4 / 3 * pi * 3 ** 3
    vc = pi * 9 * 6
    L.add("probleme", N, "Une boîte cylindrique de rayon $3$ cm et de hauteur $6$ cm contient une balle de rayon $3$ cm. Quel volume d'air reste-t-il dans la boîte, arrondi au cm³ ?",
          ["Boîte : $\\pi \\times 3^2 \\times 6 = 54\\pi$ cm³. Balle : $\\dfrac{4}{3} \\times \\pi \\times 27 = 36\\pi$ cm³.",
           f"Air : $54\\pi - 36\\pi = 18\\pi \\approx {nb(18 * pi, 2)}$ cm³, soit environ ${nb(arr(18 * pi))}$ cm³."], f"$\\approx {nb(arr(18 * pi))}$ cm³")
    _ok(_proche(vc - vb, 18 * pi))
    v = pi * 4 ** 2 * 10 / 3 + 2 / 3 * pi * 4 ** 3
    L.add("probleme", N, "Un cornet de glace est un cône de rayon $4$ cm et de hauteur $10$ cm, surmonté d'une demi-boule de même rayon. Calculer le volume total, arrondi au cm³.",
          ["Cône : $\\dfrac{\\pi \\times 16 \\times 10}{3} = \\dfrac{160\\pi}{3}$ cm³.", "Demi-boule : $\\dfrac{1}{2} \\times \\dfrac{4}{3} \\pi \\times 64 = \\dfrac{128\\pi}{3}$ cm³.",
           f"Total : $\\dfrac{{288\\pi}}{{3}} = 96\\pi \\approx {nb(96 * pi, 2)}$ cm³, soit environ ${nb(arr(96 * pi))}$ cm³."], f"$\\approx {nb(arr(96 * pi))}$ cm³")
    _ok(_proche(v, 96 * pi))
    m = 4 / 3 * pi * 1 ** 3 * 7.8
    L.add("probleme", N, "Une bille d'acier pleine a un rayon de $1$ cm. L'acier a une masse volumique de $7{,}8$ g/cm³. Calculer la masse de la bille, arrondie au dixième de gramme.",
          ["Volume : $\\dfrac{4}{3} \\times \\pi \\times 1^3 = \\dfrac{4}{3}\\pi \\approx 4{,}189$ cm³.",
           f"Masse : $7{{,}}8 \\times \\dfrac{{4}}{{3}}\\pi \\approx {nb(m, 2)}$ g, soit environ ${nb(arr(m, 1))}$ g."], f"$\\approx {nb(arr(m, 1))}$ g")
    vb = 4 / 3 * pi * 125
    _ok(vb > 512)
    L.add("probleme", N, "Quel solide a le plus grand volume : un cube d'arête $8$ cm ou une boule de rayon $5$ cm ?",
          ["Cube : $8^3 = 512$ cm³.", f"Boule : $\\dfrac{{4}}{{3}} \\times \\pi \\times 125 \\approx {nb(vb, 1)}$ cm³.", "La boule a le plus grand volume, de peu."],
          "La boule", acc("la boule", "boule"))
    v = pi * 9 * 10 + pi * 9 * 3 / 3
    _ok(_proche(v, 99 * pi))
    L.add("probleme", N, "Un silo est formé d'un cylindre de rayon $3$ m et de hauteur $10$ m, surmonté d'un cône de même rayon et de hauteur $3$ m. Calculer son volume, arrondi au m³.",
          ["Cylindre : $\\pi \\times 3^2 \\times 10 = 90\\pi$ m³. Cône : $\\dfrac{\\pi \\times 3^2 \\times 3}{3} = 9\\pi$ m³.",
           f"Total : $99\\pi \\approx {nb(v, 2)}$ m³, soit environ ${nb(arr(v))}$ m³."], f"$\\approx {nb(arr(v))}$ m³")
    v = 4 / 3 * pi * 6370 ** 3
    L.add("probleme", N, "La Terre est assimilée à une boule de rayon $6\\,370$ km. Calculer son volume en km³, en écriture scientifique avec trois chiffres significatifs.",
          ["$V = \\dfrac{4}{3} \\times \\pi \\times 6\\,370^3$.", f"$V \\approx {nb(v / 1e12, 4)} \\times 10^{{12}}$ km³, soit environ $1{{,}}08 \\times 10^{{12}}$ km³."],
          "$\\approx 1{,}08 \\times 10^{12}$ km³")
    _ok(arr(v / 1e10) == 108)
    return L.fin()



# =====================================================================
# 3e — PROPORTIONNALITÉ : RATIOS, ÉCHELLES, TAUX D'ÉVOLUTION
# =====================================================================
@chapitre("troisieme", "proportionnalite")
def g3_proportionnalite():
    L = Lot(("troisieme", "proportionnalite"))

    # a) partager selon un ratio — 7
    N = "partage-selon-un-ratio"
    p = F(120, 5) * 3
    L.add("application", N, "Lina et Hugo se partagent $120$ € selon le ratio $2 : 3$. Quelle somme reçoit Hugo ?",
          ["$2 + 3 = 5$ parts, donc une part vaut $120 \\div 5 = 24$ €.", f"Hugo reçoit $3 \\times 24 = {nb(p)}$ €."], f"${nb(p)}$ €")
    _ok(p == 72)
    L.add("application", N, "Un mortier contient du sable et du ciment dans le ratio $3 : 1$. Quelle masse de sable faut-il pour $48$ kg de mortier ?",
          ["$3 + 1 = 4$ parts : une part pèse $48 \\div 4 = 12$ kg.", "Sable : $3 \\times 12 = 36$ kg."], "$36$ kg")
    L.add("intermediaire", N, "Dans une classe de $28$ élèves, le ratio filles : garçons est $4 : 3$. Combien y a-t-il de filles ?",
          ["$4 + 3 = 7$ parts, une part $= 28 \\div 7 = 4$ élèves.", "Filles : $4 \\times 4 = 16$."], "$16$ filles")
    s = F(2000, 8)
    L.add("intermediaire", N, "On prépare $2$ L de boisson en mélangeant du sirop et de l'eau dans le ratio $1 : 7$. Quel volume de sirop faut-il, en cL ?",
          ["$1 + 7 = 8$ parts : $2$ L $= 200$ cL, donc une part $= 200 \\div 8 = 25$ cL.", "Sirop : $1$ part, soit $25$ cL."], "$25$ cL")
    _ok(s == 250)
    q = F(4500 * 15000, 30000)
    L.add("probleme", N, "Trois associés ont apporté $6\\,000$ €, $9\\,000$ € et $15\\,000$ €. Ils partagent un bénéfice de $4\\,500$ € proportionnellement à leurs apports. Combien reçoit celui qui a apporté le plus ?",
          ["Total des apports : $30\\,000$ €. Ratio $6 : 9 : 15$, soit $2 : 3 : 5$ ($10$ parts).", "Une part : $4\\,500 \\div 10 = 450$ €.",
           f"Le troisième reçoit $5 \\times 450 = {nb(q)}$ €."], f"${nb(q)}$ €")
    _ok(q == 2250)
    L.add("probleme", N, "On partage $360$ images entre trois enfants proportionnellement à leurs âges : $4$, $6$ et $8$ ans. Combien en reçoit l'aîné ?",
          ["$4 + 6 + 8 = 18$ parts, une part $= 360 \\div 18 = 20$ images.", "L'aîné reçoit $8 \\times 20 = 160$ images."], "$160$ images")
    L.add("approfondissement", N, "Vrai ou faux ? « Dans un partage selon le ratio $2 : 3$, la première part représente les $\\dfrac{2}{3}$ du total. » Justifier.",
          ["Le total compte $2 + 3 = 5$ parts.", "La première part représente $\\dfrac{2}{5}$ du total, pas $\\dfrac{2}{3}$. L'affirmation est fausse."], "Faux")

    # b) pourcentage d'une quantité — 6
    N = "pourcentage-d-une-quantite"
    L.add("application", N, "Calculer $35\\,\\%$ de $240$.", ["$0{,}35 \\times 240 = 84$."], "$84$")
    L.add("application", N, "Sur $1\\,250$ votants, $46\\,\\%$ ont voté « oui ». Combien de votants ont voté « oui » ?", ["$0{,}46 \\times 1\\,250 = 575$."], "$575$ votants")
    L.add("application", N, "Dans une classe de $25$ élèves, $9$ sont externes. Quel pourcentage des élèves est externe ?",
          ["$\\dfrac{9}{25} = 0{,}36$.", "Soit $36\\,\\%$."], "$36\\,\\%$")
    L.add("intermediaire", N, "Dans un collège de $640$ élèves, $48$ viennent à vélo. Quel pourcentage des élèves vient à vélo ?",
          ["$\\dfrac{48}{640} = 0{,}075$.", "Soit $7{,}5\\,\\%$."], "$7{,}5\\,\\%$")
    L.add("intermediaire", N, "Un pull de $450$ g contient $80\\,\\%$ de laine. Quelle masse de laine contient-il ?", ["$0{,}8 \\times 450 = 360$ g."], "$360$ g")
    L.add("approfondissement", N, "Une remise de $18$ € représente $15\\,\\%$ du prix d'un article. Quel est le prix de l'article ?",
          ["$0{,}15 \\times P = 18$.", "$P = 18 \\div 0{,}15 = 120$ €."], "$120$ €")

    # c) échelles — 7
    N = "echelles"
    L.add("application", N, "Sur une carte à l'échelle $\\dfrac{1}{25\\,000}$, deux villages sont distants de $6$ cm. Quelle est la distance réelle, en km ?",
          ["$1$ cm sur la carte représente $25\\,000$ cm en réalité.", "$6 \\times 25\\,000 = 150\\,000$ cm $= 1{,}5$ km."], "$1{,}5$ km")
    L.add("application", N, "Sur un plan à l'échelle $\\dfrac{1}{50}$, une chambre mesure $7$ cm de long. Quelle est sa longueur réelle, en m ?",
          ["$7 \\times 50 = 350$ cm.", "Soit $3{,}5$ m."], "$3{,}5$ m")
    L.add("intermediaire", N, "Deux villes sont distantes de $2{,}4$ km. Quelle distance les sépare sur une carte à l'échelle $\\dfrac{1}{20\\,000}$ ?",
          ["$2{,}4$ km $= 240\\,000$ cm.", "$240\\,000 \\div 20\\,000 = 12$ cm."], "$12$ cm")
    L.add("intermediaire", N, "Sur une carte, $5$ cm représentent $2$ km. Quelle est l'échelle de la carte ?",
          ["$2$ km $= 200\\,000$ cm.", "$\\dfrac{5}{200\\,000} = \\dfrac{1}{40\\,000}$."], "$\\dfrac{1}{40\\,000}$", acc("1/40000", "1/40 000"))
    _ok(F(5, 200000) == F(1, 40000))
    L.add("intermediaire", N, "Une maquette de train est à l'échelle $\\dfrac{1}{87}$. La locomotive réelle mesure $17{,}4$ m. Quelle est la longueur de la maquette, en cm ?",
          ["$17{,}4$ m $= 1\\,740$ cm.", "$1\\,740 \\div 87 = 20$ cm."], "$20$ cm")
    L.add("approfondissement", N, "Vrai ou faux ? « Sur une carte au $\\dfrac{1}{100\\,000}$, $1$ cm représente $10$ km. » Justifier.",
          ["$1$ cm représente $100\\,000$ cm, c'est-à-dire $1\\,000$ m, soit $1$ km.", "L'affirmation est fausse : $1$ cm représente $1$ km."], "Faux")
    L.add("probleme", N, "Un randonneur mesure $9{,}6$ cm sur une carte à l'échelle $\\dfrac{1}{25\\,000}$. Il marche à $4$ km/h. Combien de temps durera la marche, en minutes ?",
          ["Distance réelle : $9{,}6 \\times 25\\,000 = 240\\,000$ cm $= 2{,}4$ km.", "Durée : $2{,}4 \\div 4 = 0{,}6$ h $= 36$ min."], "$36$ min")

    # d) appliquer une évolution — 7
    N = "appliquer-une-evolution"
    for d, e, c, r in [
        ("application", "Un article coûte $80$ €. Son prix augmente de $15\\,\\%$. Quel est le nouveau prix ?",
         ["Augmenter de $15\\,\\%$, c'est multiplier par $1{,}15$.", "$80 \\times 1{,}15 = 92$ €."], "$92$ €"),
        ("application", "Un vélo coûte $250$ €. Son prix baisse de $30\\,\\%$. Quel est le nouveau prix ?",
         ["Baisser de $30\\,\\%$, c'est multiplier par $0{,}70$.", "$250 \\times 0{,}7 = 175$ €."], "$175$ €"),
        ("application", "Par quel nombre multiplie-t-on une quantité pour l'augmenter de $4{,}5\\,\\%$ ?",
         ["$\\mathrm{CM} = 1 + \\dfrac{4{,}5}{100} = 1{,}045$."], "$1{,}045$"),
        ("application", "Par quel nombre multiplie-t-on une quantité pour la diminuer de $12\\,\\%$ ?",
         ["$\\mathrm{CM} = 1 - \\dfrac{12}{100} = 0{,}88$."], "$0{,}88$"),
        ("intermediaire", "Une ville de $12\\,500$ habitants voit sa population augmenter de $8\\,\\%$. Combien compte-t-elle d'habitants ?",
         ["$12\\,500 \\times 1{,}08 = 13\\,500$."], "$13\\,500$ habitants"),
        ("intermediaire", "Un salaire de $1\\,850$ € augmente de $2{,}5\\,\\%$. Quel est le nouveau salaire ?",
         ["$1\\,850 \\times 1{,}025 = 1\\,896{,}25$ €."], "$1\\,896{,}25$ €"),
        ("intermediaire", "Pendant les soldes, une veste à $64{,}90$ € est vendue avec $40\\,\\%$ de réduction. Quel est son prix soldé ?",
         ["Multiplier par $0{,}6$ : $64{,}90 \\times 0{,}6 = 38{,}94$ €."], "$38{,}94$ €"),
    ]:
        L.add(d, N, e, c, r)
    _ok(F(1850) * F(1025, 1000) == F(189625, 100) and F(6490, 100) * F(6, 10) == F(3894, 100))

    # e) taux d'évolution — 8
    N = "taux-d-evolution"
    for d, v1, v2, ctx in [
        ("application", 80, 92, "Un prix passe de $80$ € à $92$ €."),
        ("application", 250, 200, "Le nombre d'abonnés d'un club passe de $250$ à $200$."),
        ("intermediaire", 40, 100, "La production d'un petit verger passe de $40$ kg à $100$ kg."),
        ("intermediaire", F(160, 100), F(190, 100), "Le prix d'un ticket de bus passe de $1{,}60$ € à $1{,}90$ €."),
        ("intermediaire", 1200, 1500, "La fréquentation d'une piscine passe de $1\\,200$ à $1\\,500$ entrées par semaine."),
    ]:
        t = (F(v2) - F(v1)) / F(v1)
        _ok(_proche(F(v1) * (1 + t), v2))
        L.add(d, N, f"{ctx} Calculer le taux d'évolution, en pourcentage.",
              [f"$t = \\dfrac{{{nb(v2)} - {nb(v1)}}}{{{nb(v1)}}} = \\dfrac{{{nb(F(v2) - F(v1))}}}{{{nb(v1)}}} = {nb(t)}$.",
               f"Soit ${pcs(t)}$." + (" Un taux peut dépasser $100\\,\\%$." if t > 1 else "")], f"${pcs(t)}$")
    L.add("intermediaire", N, "Une quantité est multipliée par $0{,}73$. Quel est le taux d'évolution ?",
          ["$\\mathrm{CM} = 0{,}73 < 1$ : c'est une baisse.", "$t = 0{,}73 - 1 = -0{,}27$, soit $-27\\,\\%$."], "$-27\\,\\%$")
    L.add("intermediaire", N, "Une quantité est multipliée par $1{,}6$. Quel est le taux d'évolution ?",
          ["$t = 1{,}6 - 1 = 0{,}6$.", "Soit $+60\\,\\%$."], "$+60\\,\\%$")
    L.add("approfondissement", N, "Le taux de chômage d'une ville passe de $8\\,\\%$ à $10\\,\\%$. De combien de points a-t-il augmenté ?",
          ["On soustrait les deux pourcentages : $10 - 8 = 2$.", "Hausse de $2$ points (alors que le taux d'évolution est $+25\\,\\%$)."], "$2$ points")

    # f) évolutions successives et réciproques — 8
    N = "evolutions-successives-et-reciproques"
    for d, t1, t2 in [("intermediaire", 20, -20), ("intermediaire", 10, 10), ("approfondissement", -30, 50)]:
        cm = (1 + F(t1, 100)) * (1 + F(t2, 100))
        tg = cm - 1
        L.add(d, N, f"Un prix subit une évolution de ${'+' if t1 > 0 else ''}{t1}\\,\\%$, puis une évolution de ${'+' if t2 > 0 else ''}{t2}\\,\\%$. Quel est le taux d'évolution global ?",
              [f"$\\mathrm{{CM}} = {nb(1 + F(t1, 100))} \\times {nb(1 + F(t2, 100))} = {nb(cm)}$.", f"$t = {nb(cm)} - 1 = {nb(tg)}$, soit ${pcs(tg)}$."],
              f"${pcs(tg)}$")
    cm = F(105, 100) ** 3
    L.add("approfondissement", N, "Un loyer augmente de $5\\,\\%$ par an pendant $3$ ans. Quel est le taux d'évolution global, arrondi à $0{,}01\\,\\%$ ?",
          [f"$\\mathrm{{CM}} = 1{{,}}05^3 = {nb(cm)}$.", f"$t = {nb(cm - 1)}$, soit environ ${pcs(arr((cm - 1) * 100, 2) / 100)}$ (et non $15\\,\\%$)."],
          f"$\\approx {pcs(arr((cm - 1) * 100, 2) / 100)}$")
    L.add("approfondissement", N, "Après une baisse de $20\\,\\%$, de quel pourcentage un prix doit-il augmenter pour revenir à sa valeur de départ ?",
          ["$\\mathrm{CM}$ de la baisse : $0{,}8$. Pour revenir, il faut multiplier par $\\dfrac{1}{0{,}8} = 1{,}25$.", "Il faut une hausse de $25\\,\\%$."], "$+25\\,\\%$")
    L.add("intermediaire", N, "Après une hausse de $25\\,\\%$, un article coûte $75$ €. Quel était son prix avant la hausse ?",
          ["Prix initial $\\times 1{,}25 = 75$.", "Prix initial $= 75 \\div 1{,}25 = 60$ €."], "$60$ €")
    L.add("intermediaire", N, "Après une baisse de $15\\,\\%$, un article coûte $68$ €. Quel était son prix avant la baisse ?",
          ["Prix initial $\\times 0{,}85 = 68$.", "Prix initial $= 68 \\div 0{,}85 = 80$ €."], "$80$ €")
    L.add("approfondissement", N, "Vrai ou faux ? « Une hausse de $50\\,\\%$ suivie d'une baisse de $50\\,\\%$ ramène au prix de départ. » Justifier.",
          ["$\\mathrm{CM} = 1{,}5 \\times 0{,}5 = 0{,}75$.", "Le prix final est $25\\,\\%$ plus bas que le prix de départ. L'affirmation est fausse."], "Faux")

    # g) graphique et fonction linéaire — 7
    N = "graphique-et-fonction-lineaire"
    L.add("application", N, "Le prix payé est proportionnel à la masse achetée : $2{,}5$ kg coûtent $8{,}75$ €. On note $f(x) = ax$ le prix de $x$ kg. Calculer $a$.",
          ["$a = \\dfrac{8{,}75}{2{,}5} = 3{,}5$ (prix d'un kilogramme, en €)."], "$a = 3{,}5$")
    L.add("application", N, "Dans un repère, une situation de proportionnalité est représentée par une droite passant par l'origine et par le point $(4 ; 10)$. Quel est le coefficient de proportionnalité ?",
          ["$\\dfrac{10}{4} = 2{,}5$."], "$2{,}5$")
    L.add("intermediaire", N, "Une fonction linéaire $f$ vérifie $f(6) = 15$. Calculer $f(10)$.",
          ["$f(x) = ax$ avec $a = \\dfrac{15}{6} = 2{,}5$.", "$f(10) = 2{,}5 \\times 10 = 25$."], "$25$")
    L.add("intermediaire", N, "Le tableau suivant est-il un tableau de proportionnalité ? Donner le coefficient. $x$ : $2$ ; $5$ ; $8$ — $y$ : $7$ ; $17{,}5$ ; $28$.",
          ["$\\dfrac{7}{2} = 3{,}5$ ; $\\dfrac{17{,}5}{5} = 3{,}5$ ; $\\dfrac{28}{8} = 3{,}5$.", "Les quotients sont égaux : c'est un tableau de proportionnalité, de coefficient $3{,}5$."], "$3{,}5$")
    _ok(F(175, 10) / 5 == F(7, 2) == F(28, 8))
    L.add("intermediaire", N, "Un taxi facture $4$ € de prise en charge, puis $1{,}5$ € par kilomètre. Le prix est-il proportionnel à la distance parcourue ?",
          ["Pour $0$ km, on paie déjà $4$ € : la représentation graphique ne passe pas par l'origine.", "Le prix n'est pas proportionnel à la distance."], "Non")
    L.add("approfondissement", N, "Une droite passe par les points $(0 ; 5)$ et $(2 ; 9)$. Représente-t-elle une situation de proportionnalité ?",
          ["Une situation de proportionnalité est représentée par une droite passant par l'origine.", "Ici, le point d'abscisse $0$ a pour ordonnée $5 \\neq 0$ : ce n'est pas une situation de proportionnalité."], "Non")
    L.add("probleme", N, "Une imprimante imprime à vitesse constante : $36$ pages en $1$ min $30$ s. Combien de pages imprime-t-elle en $5$ min ?",
          ["$1$ min $30$ s $= 1{,}5$ min (et non $1{,}30$ min).", "$36 \\div 1{,}5 = 24$ pages par minute.", "En $5$ min : $24 \\times 5 = 120$ pages."], "$120$ pages")
    return L.fin()


# =====================================================================
# 4e — PROPORTIONNALITÉ : GRANDEURS QUOTIENTS, RATIOS, POURCENTAGES
# =====================================================================
@chapitre("quatrieme", "proportionnalite")
def g4_proportionnalite():
    L = Lot(("quatrieme", "proportionnalite"))

    # a) grandeurs quotients — 8
    N = "grandeurs-quotients"
    L.add("application", N, "Un robinet remplit une baignoire de $120$ L en $8$ min. Quel est son débit, en L/min ?", ["$120 \\div 8 = 15$ L/min."], "$15$ L/min")
    L.add("application", N, "Un sac de $1{,}8$ kg de pommes coûte $5{,}04$ €. Quel est le prix au kilogramme ?", ["$5{,}04 \\div 1{,}8 = 2{,}80$ €/kg."], "$2{,}80$ €/kg")
    _ok(F(504, 100) / F(18, 10) == F(28, 10))
    L.add("application", N, "Une commune de $18\\,000$ habitants s'étend sur $12$ km². Quelle est sa densité de population ?", ["$18\\,000 \\div 12 = 1\\,500$ habitants par km²."], "$1\\,500$ hab./km²")
    L.add("intermediaire", N, "Une voiture consomme $42$ L de carburant pour $600$ km. Quelle est sa consommation, en L pour $100$ km ?",
          ["$600$ km $= 6 \\times 100$ km.", "$42 \\div 6 = 7$ L/100 km."], "$7$ L/100 km")
    L.add("intermediaire", N, "Un cycliste parcourt $150$ km en $2$ h $30$ min. Calculer sa vitesse moyenne en km/h.",
          ["$2$ h $30$ min $= 2{,}5$ h (et non $2{,}30$ h).", "$v = \\dfrac{150}{2{,}5} = 60$ km/h."], "$60$ km/h")
    L.add("intermediaire", N, "Convertir $90$ km/h en m/s.", ["$90$ km/h $= \\dfrac{90\\,000 \\text{ m}}{3\\,600 \\text{ s}}$.", "$= 25$ m/s."], "$25$ m/s")
    L.add("intermediaire", N, "Convertir $15$ m/s en km/h.", ["En $1$ h $= 3\\,600$ s : $15 \\times 3\\,600 = 54\\,000$ m $= 54$ km.", "$15$ m/s $= 54$ km/h."], "$54$ km/h")
    L.add("probleme", N, "Un train roule à $80$ km/h de moyenne pendant $1$ h $45$ min. Quelle distance parcourt-il ?",
          ["$1$ h $45$ min $= 1{,}75$ h.", "$d = 80 \\times 1{,}75 = 140$ km."], "$140$ km")

    # b) rapport et ratio — 7
    N = "rapport-et-ratio"
    L.add("application", N, "Calculer le rapport de la longueur $12$ cm à la longueur $4$ cm.", ["$\\dfrac{12}{4} = 3$ : la première est $3$ fois plus longue (rapport sans unité)."], "$3$")
    L.add("application", N, "Simplifier le ratio $15 : 25$.", ["On divise les deux nombres par $5$.", "$15 : 25 = 3 : 5$."], "$3 : 5$", acc("3 : 5", "3:5"))
    L.add("intermediaire", N, "On mélange de la peinture bleue et de la peinture jaune dans le ratio $2 : 3$. On utilise $6$ L de bleu. Quel volume de jaune faut-il ?",
          ["Le bleu représente $2$ parts : une part $= 6 \\div 2 = 3$ L.", "Jaune : $3 \\times 3 = 9$ L."], "$9$ L")
    L.add("intermediaire", N, "Une vinaigrette se prépare avec du vinaigre et de l'huile dans le ratio $1 : 3$. Quel volume d'huile faut-il pour $12$ cL de vinaigre ?",
          ["Une part $= 12$ cL.", "Huile : $3 \\times 12 = 36$ cL."], "$36$ cL")
    L.add("intermediaire", N, "Dans un club de $30$ membres, le ratio filles : garçons est $3 : 2$. Combien y a-t-il de garçons ?",
          ["$3 + 2 = 5$ parts, une part $= 30 \\div 5 = 6$.", "Garçons : $2 \\times 6 = 12$."], "$12$ garçons")
    L.add("approfondissement", N, "Un smartphone coûte $450$ € et une coque $15$ €. Combien de fois le smartphone est-il plus cher que la coque ?",
          ["Rapport de deux prix (même unité) : $\\dfrac{450}{15} = 30$.", "Le smartphone est $30$ fois plus cher."], "$30$")
    L.add("approfondissement", N, "Vrai ou faux ? « Le ratio $4 : 6$ est le même que le ratio $2 : 3$. » Justifier.",
          ["On divise les deux nombres de $4 : 6$ par $2$ : on obtient $2 : 3$.", "Les deux ratios décrivent le même partage. L'affirmation est vraie."], "Vrai")

    # c) quatrième proportionnelle — 7
    N = "quatrieme-proportionnelle"
    for d, e, c, r in [
        ("application", "Une recette pour $4$ personnes demande $300$ g de farine. Quelle masse faut-il pour $6$ personnes ?",
         ["$300 \\div 4 = 75$ g par personne.", "$75 \\times 6 = 450$ g."], "$450$ g"),
        ("application", "$5$ cahiers coûtent $7{,}50$ €. Combien coûtent $8$ cahiers ?", ["Un cahier : $7{,}50 \\div 5 = 1{,}50$ €.", "$8 \\times 1{,}50 = 12$ €."], "$12$ €"),
        ("application", "Compléter l'égalité de rapports $\\dfrac{3}{8} = \\dfrac{x}{56}$.", ["$56 = 8 \\times 7$, donc $x = 3 \\times 7 = 21$."], "$x = 21$"),
        ("intermediaire", "Dans un tableau de proportionnalité, $14$ correspond à $35$. À quoi correspond $6$ ?", ["Produit en croix : $\\dfrac{6 \\times 35}{14} = \\dfrac{210}{14} = 15$."], "$15$"),
        ("intermediaire", "Une imprimante imprime $45$ pages en $3$ minutes. Combien de temps lui faut-il pour $120$ pages ?",
         ["$45 \\div 3 = 15$ pages par minute.", "$120 \\div 15 = 8$ min."], "$8$ min"),
        ("intermediaire", "Pour $2{,}5$ kg de confiture, on utilise $1{,}5$ kg de sucre. Quelle masse de sucre faut-il pour $4$ kg de confiture ?",
         ["$\\dfrac{4 \\times 1{,}5}{2{,}5} = \\dfrac{6}{2{,}5} = 2{,}4$ kg."], "$2{,}4$ kg"),
        ("approfondissement", "Un mur de $12$ m² nécessite $1{,}8$ L de peinture. Quelle surface peut-on peindre avec un pot de $2{,}5$ L ?",
         ["$\\dfrac{2{,}5 \\times 12}{1{,}8} = \\dfrac{30}{1{,}8} \\approx 16{,}67$ m².", "Environ $16{,}7$ m²."], "$\\approx 16{,}7$ m²"),
    ]:
        L.add(d, N, e, c, r)
    _ok(arr(F(30) / F(18, 10), 1) == F(167, 10))

    # d) pourcentages — 8
    N = "pourcentages"
    for d, e, c, r in [
        ("application", "Calculer $20\\,\\%$ de $85$ €.", ["$0{,}2 \\times 85 = 17$ €."], "$17$ €"),
        ("application", "Calculer $7\\,\\%$ de $300$.", ["$\\dfrac{7}{100} \\times 300 = 21$."], "$21$"),
        ("application", "Dans un club de $40$ adhérents, $14$ sont mineurs. Quel pourcentage des adhérents est mineur ?", ["$\\dfrac{14}{40} = 0{,}35$, soit $35\\,\\%$."], "$35\\,\\%$"),
        ("intermediaire", "Un yaourt de $125$ g contient $5$ g de matières grasses. Quel est le pourcentage de matières grasses ?", ["$\\dfrac{5}{125} = 0{,}04$, soit $4\\,\\%$."], "$4\\,\\%$"),
        ("intermediaire", "$30\\,\\%$ des élèves d'un collège, soit $186$ élèves, sont demi-pensionnaires. Combien le collège compte-t-il d'élèves ?",
         ["$0{,}3 \\times N = 186$.", "$N = 186 \\div 0{,}3 = 620$ élèves."], "$620$ élèves"),
        ("intermediaire", "Une batterie de $4\\,000$ mAh est chargée à $65\\,\\%$. Quelle charge contient-elle, en mAh ?", ["$0{,}65 \\times 4\\,000 = 2\\,600$ mAh."], "$2\\,600$ mAh"),
        ("approfondissement", "Sur une facture, la TVA à $20\\,\\%$ s'élève à $36$ €. Quel est le prix hors taxes ?", ["$0{,}2 \\times \\text{HT} = 36$.", "$\\text{HT} = 36 \\div 0{,}2 = 180$ €."], "$180$ €"),
        ("approfondissement", "Un téléchargement de $2{,}4$ Go est fait à $85\\,\\%$. Quelle quantité de données reste-t-il à télécharger ?",
         ["Il reste $100 - 85 = 15\\,\\%$ à télécharger.", "$0{,}15 \\times 2{,}4 = 0{,}36$ Go."], "$0{,}36$ Go"),
    ]:
        L.add(d, N, e, c, r)

    # e) coefficient multiplicateur — 8
    N = "coefficient-multiplicateur"
    for d, e, c, r in [
        ("application", "Augmenter un prix de $7\\,\\%$ revient à le multiplier par quel nombre ?", ["$1 + \\dfrac{7}{100} = 1{,}07$."], "$1{,}07$"),
        ("application", "Diminuer une quantité de $15\\,\\%$ revient à la multiplier par quel nombre ?", ["$1 - \\dfrac{15}{100} = 0{,}85$."], "$0{,}85$"),
        ("application", "Un abonnement de $36$ € augmente de $5\\,\\%$. Quel est le nouveau prix ?", ["$36 \\times 1{,}05 = 37{,}80$ €."], "$37{,}80$ €"),
        ("intermediaire", "Un jean à $55$ € est soldé à $-20\\,\\%$. Quel est son prix soldé ?", ["$55 \\times 0{,}8 = 44$ €."], "$44$ €"),
        ("intermediaire", "Un prix est multiplié par $1{,}12$. S'agit-il d'une hausse ou d'une baisse, et de combien ?", ["$1{,}12 > 1$ : c'est une hausse.", "$1{,}12 = 1 + 0{,}12$ : hausse de $12\\,\\%$."], "Une hausse de $12\\,\\%$"),
        ("intermediaire", "Un prix est multiplié par $0{,}65$. S'agit-il d'une hausse ou d'une baisse, et de combien ?", ["$0{,}65 < 1$ : c'est une baisse.", "$0{,}65 = 1 - 0{,}35$ : baisse de $35\\,\\%$."], "Une baisse de $35\\,\\%$"),
        ("approfondissement", "Après une hausse de $20\\,\\%$, un billet de concert coûte $54$ €. Quel était son prix avant la hausse ?", ["Prix avant $\\times 1{,}2 = 54$.", "Prix avant $= 54 \\div 1{,}2 = 45$ €."], "$45$ €"),
        ("approfondissement", "Après une réduction de $25\\,\\%$, un casque audio coûte $66$ €. Quel était son prix avant la réduction ?", ["Prix avant $\\times 0{,}75 = 66$.", "Prix avant $= 66 \\div 0{,}75 = 88$ €."], "$88$ €"),
    ]:
        L.add(d, N, e, c, r)

    # f) partage proportionnel — 6
    N = "partage-proportionnel"
    for d, e, c, r in [
        ("application", "Partager $90$ € entre deux personnes selon le ratio $1 : 2$. Quelle est la plus grande part ?", ["$1 + 2 = 3$ parts, une part $= 30$ €.", "Plus grande part : $2 \\times 30 = 60$ €."], "$60$ €"),
        ("intermediaire", "Deux frères se partagent $1\\,400$ € proportionnellement à leurs heures de travail : $15$ h et $20$ h. Combien reçoit celui qui a travaillé $20$ h ?",
         ["$15 + 20 = 35$ heures, soit $1\\,400 \\div 35 = 40$ € par heure.", "$20 \\times 40 = 800$ €."], "$800$ €"),
        ("intermediaire", "Une somme de $560$ € est partagée selon le ratio $3 : 5$. Calculer la plus petite part.", ["$3 + 5 = 8$ parts, une part $= 70$ €.", "Plus petite part : $3 \\times 70 = 210$ €."], "$210$ €"),
        ("intermediaire", "Un alliage contient du cuivre et de l'étain dans le ratio $9 : 1$. Quelle masse d'étain y a-t-il dans $2{,}5$ kg d'alliage ?",
         ["$10$ parts : une part $= 2{,}5 \\div 10 = 0{,}25$ kg.", "Étain : $0{,}25$ kg, soit $250$ g."], "$250$ g"),
        ("approfondissement", "Trois amis paient un cadeau de $84$ € proportionnellement à leur argent de poche : $10$ €, $15$ € et $17$ € par semaine. Combien paie le dernier ?",
         ["$10 + 15 + 17 = 42$ : chaque euro d'argent de poche correspond à $84 \\div 42 = 2$ €.", "Le dernier paie $17 \\times 2 = 34$ €."], "$34$ €"),
        ("probleme", "Un jardin de $240$ m² est partagé entre légumes, fleurs et pelouse selon le ratio $5 : 2 : 1$. Quelle surface reçoivent les légumes ?",
         ["$5 + 2 + 1 = 8$ parts, une part $= 240 \\div 8 = 30$ m².", "Légumes : $5 \\times 30 = 150$ m²."], "$150$ m²"),
    ]:
        L.add(d, N, e, c, r)

    # g) pièges — 6
    N = "pieges-de-calcul"
    L.add("intermediaire", N, "Lou écrit : « $2$ h $15$ min $= 2{,}15$ h ». Quelle est la bonne écriture décimale de cette durée ?",
          ["$15$ min $= \\dfrac{15}{60}$ h $= 0{,}25$ h.", "$2$ h $15$ min $= 2{,}25$ h."], "$2{,}25$ h")
    L.add("intermediaire", N, "Vrai ou faux ? « Une baisse de $20\\,\\%$ suivie d'une hausse de $20\\,\\%$ ramène au prix de départ. » Justifier avec un prix de $100$ €.",
          ["$100 \\times 0{,}8 = 80$ €, puis $80 \\times 1{,}2 = 96$ €.", "On n'est pas revenu à $100$ € : l'affirmation est fausse."], "Faux")
    L.add("intermediaire", N, "Qui roule le plus vite : un scooter à $45$ km/h ou un coureur cycliste à $14$ m/s ?",
          ["On convertit dans la même unité : $14$ m/s $= 14 \\times 3{,}6 = 50{,}4$ km/h.", "$50{,}4 > 45$ : le cycliste roule plus vite."], "Le cycliste", acc("le cycliste", "cycliste"))
    L.add("approfondissement", N, "Max dit : « augmenter de $100\\,\\%$, c'est multiplier par $100$ ». Par combien multiplie-t-on en réalité ?",
          ["$\\mathrm{CM} = 1 + \\dfrac{100}{100} = 2$.", "Augmenter de $100\\,\\%$, c'est doubler."], "$2$")
    L.add("approfondissement", N, "Zoé calcule une vitesse : « $36$ km en $45$ min, donc $36 \\div 45 = 0{,}8$ km/h ». Quelle est la bonne vitesse en km/h ?",
          ["Pour des km/h, la durée doit être en heures : $45$ min $= 0{,}75$ h.", "$v = 36 \\div 0{,}75 = 48$ km/h."], "$48$ km/h")
    L.add("approfondissement", N, "Vrai ou faux ? « Un prix qui augmente de $10\\,\\%$ deux années de suite a augmenté de $20\\,\\%$. » Justifier.",
          ["$\\mathrm{CM} = 1{,}1 \\times 1{,}1 = 1{,}21$.", "La hausse globale est de $21\\,\\%$ : l'affirmation est fausse."], "Faux")
    return L.fin()


# =====================================================================
# Statistiques : aides (deux chemins de calcul indépendants)
# =====================================================================
def _liste(valeurs, effectifs):
    out = []
    for v, n in zip(valeurs, effectifs):
        out += [F(v)] * n
    return out


def _mediane(lst):
    s = sorted(lst)
    n = len(s)
    return s[n // 2] if n % 2 else (s[n // 2 - 1] + s[n // 2]) / 2


def _quartile(lst, k):
    """Q1 (k=1) ou Q3 (k=3) selon la convention du collège : rang = entier ≥ k·n/4."""
    s = sorted(lst)
    rang = math.ceil(F(k * len(s), 4))
    return s[rang - 1]


def _cumuls(effectifs):
    c, out = 0, []
    for n in effectifs:
        c += n
        out.append(c)
    return out


def _par_cumuls(valeurs, effectifs, rang):
    """Première valeur dont l'effectif cumulé atteint le rang (second chemin de calcul)."""
    for v, c in zip(valeurs, _cumuls(effectifs)):
        if c >= rang:
            return F(v)
    raise ValueError(rang)


def _tab(nom_v, valeurs, effectifs, nom_e="Effectif"):
    return (f"{nom_v} : " + " ; ".join(f"${nb(v)}$" for v in valeurs) + f" — {nom_e} : " + " ; ".join(f"${n}$" for n in effectifs) + ".")


def _cum_txt(effectifs):
    return " ; ".join(f"${c}$" for c in _cumuls(effectifs))


# =====================================================================
# 3e — STATISTIQUES : EFFECTIFS CUMULÉS, QUARTILES, BOÎTE À MOUSTACHES
# =====================================================================
@chapitre("troisieme", "statistiques")
def g3_statistiques():
    L = Lot(("troisieme", "statistiques"))
    T1 = ("Nombre de frères et sœurs", [0, 1, 2, 3, 4], [6, 11, 7, 4, 2], "élèves")
    T2 = ("Pointure", [36, 37, 38, 39, 40, 41], [3, 6, 9, 10, 7, 5], "élèves")
    T3 = ("Durée du trajet (min)", [5, 10, 15, 20, 30], [4, 6, 8, 5, 4], "élèves")
    T4 = ("Note", [7, 9, 11, 12, 14, 17], [2, 5, 8, 6, 7, 4], "élèves")
    T6 = ("Livres lus", [0, 1, 2, 3, 4, 5], [3, 5, 4, 6, 4, 2], "élèves")

    def intro(T, ctx):
        return f"{ctx} {_tab(T[0], T[1], T[2])}"

    def med_corrige(T):
        v, e = T[1], T[2]
        n = sum(e)
        lst = _liste(v, e)
        m = _mediane(lst)
        if n % 2:
            r = (n + 1) // 2
            _ok(_par_cumuls(v, e, r) == m)
            return m, [f"Effectif total : $n = {n}$ (impair). Cumuls : {_cum_txt(e)}.", f"Rang de la médiane : $\\dfrac{{{n} + 1}}{{2}} = {r}$.",
                       f"Premier cumul $\\geqslant {r}$ : médiane $= {nb(m)}$."]
        a, b = _par_cumuls(v, e, n // 2), _par_cumuls(v, e, n // 2 + 1)
        _ok((a + b) / 2 == m)
        fin = f"Les deux valeurs sont égales : médiane $= {nb(m)}$." if a == b else f"Médiane $= \\dfrac{{{nb(a)} + {nb(b)}}}{{2}} = {nb(m)}$."
        return m, [f"Effectif total : $n = {n}$ (pair). Cumuls : {_cum_txt(e)}.", f"Rangs $\\dfrac{{{n}}}{{2}} = {n // 2}$ et ${n // 2 + 1}$ : valeurs ${nb(a)}$ et ${nb(b)}$.", fin]

    def q_corrige(T, k):
        v, e = T[1], T[2]
        n = sum(e)
        q = _quartile(_liste(v, e), k)
        x = F(k * n, 4)
        r = math.ceil(x)
        _ok(_par_cumuls(v, e, r) == q)
        fois = "3 \\times " if k == 3 else ""
        etape = f"$\\dfrac{{{fois}{n}}}{{4}} = {nb(x)}$" + (f", entier : rang ${r}$." if x == r else f" → rang ${r}$ (entier juste au-dessus).")
        return q, [f"Cumuls : {_cum_txt(e)}.", etape, f"Premier cumul $\\geqslant {r}$ : $Q_{k} = {nb(q)}$."]

    # a) effectifs cumulés — 7
    N = "effectifs-cumules"
    v, e = T1[1], T1[2]
    L.add("application", N, intro(T1, "Dans une classe de $30$ élèves, on a relevé le nombre de frères et sœurs.") + " Combien d'élèves ont au plus $2$ frères et sœurs ?",
          [f"Cumuls : {_cum_txt(e)}.", "L'effectif cumulé de la valeur $2$ est $6 + 11 + 7 = 24$."], "$24$ élèves")
    L.add("application", N, intro(T2, "On a relevé les pointures de $40$ élèves.") + " Quel est l'effectif cumulé croissant de la pointure $38$ ?",
          ["$3 + 6 + 9 = 18$."], "$18$")
    L.add("intermediaire", N, intro(T3, "On a relevé la durée du trajet domicile-collège de $27$ élèves.") + " Combien d'élèves mettent strictement plus de $15$ minutes ?",
          [f"Cumuls : {_cum_txt(T3[2])}. Au plus $15$ min : $18$ élèves.", "Plus de $15$ min : $27 - 18 = 9$ élèves."], "$9$ élèves")
    L.add("intermediaire", N, intro(T2, "Pointures de $40$ élèves.") + " Quel pourcentage des élèves chausse au plus du $37$ ?",
          ["Effectif cumulé de $37$ : $3 + 6 = 9$.", "$\\dfrac{9}{40} = 0{,}225$, soit $22{,}5\\,\\%$."], "$22{,}5\\,\\%$")
    L.add("intermediaire", N, intro(T6, "On a demandé à $24$ élèves combien de livres ils ont lus pendant l'été.") + " Combien d'élèves ont lu au moins $3$ livres ?",
          [f"Cumuls : {_cum_txt(T6[2])}. Au plus $2$ livres : $12$ élèves.", "Au moins $3$ livres : $24 - 12 = 12$ élèves."], "$12$ élèves")
    L.add("intermediaire", N, intro(T4, "Notes d'un contrôle dans une classe de $32$ élèves.") + " Combien d'élèves ont une note inférieure ou égale à $11$ ?",
          ["$2 + 5 + 8 = 15$."], "$15$ élèves")
    L.add("approfondissement", N, "Paul calcule les effectifs cumulés de la série suivante. Buts marqués : $0$ ; $1$ ; $2$ ; $3$ ; $4$ — Nombre de matchs : $4$ ; $5$ ; $6$ ; $3$ ; $2$. Il obtient $4$ ; $9$ ; $15$ ; $18$ ; $21$. Quel doit être le dernier effectif cumulé ?",
          ["Le dernier effectif cumulé est toujours l'effectif total.", "$4 + 5 + 6 + 3 + 2 = 20$ : Paul s'est trompé dans la dernière addition ($18 + 2 = 20$)."], "$20$")

    # b) médiane — 8
    N = "mediane"
    for T, ctx, d, unite in [(T1, "Frères et sœurs de $30$ élèves.", "intermediaire", ""), (T2, "Pointures de $40$ élèves.", "intermediaire", ""),
                             (T3, "Durée du trajet de $27$ élèves.", "intermediaire", " min"), (T4, "Notes de $32$ élèves.", "intermediaire", ""),
                             (T6, "Livres lus par $24$ élèves.", "approfondissement", "")]:
        m, c = med_corrige(T)
        L.add(d, N, intro(T, ctx) + " Déterminer la médiane de cette série.", c, f"${nb(m)}${unite}")
    lst = [12, 5, 9, 15, 7, 11, 8, 14, 10]
    _ok(_mediane([F(x) for x in lst]) == 10)
    L.add("application", N, "Déterminer la médiane de la série : $12$ ; $5$ ; $9$ ; $15$ ; $7$ ; $11$ ; $8$ ; $14$ ; $10$.",
          ["On range : $5$ ; $7$ ; $8$ ; $9$ ; $10$ ; $11$ ; $12$ ; $14$ ; $15$.", "$9$ valeurs : la médiane est la $5^\\text{e}$, soit $10$."], "$10$")
    L.add("application", N, "Une série compte $47$ valeurs rangées dans l'ordre croissant. Quel est le rang de la médiane ?",
          ["$47$ est impair : rang $\\dfrac{47 + 1}{2} = 24$."], "$24$")
    L.add("approfondissement", N, "Vrai ou faux ? « La médiane d'une série est toujours une valeur de la série. » Justifier.",
          ["Quand l'effectif est pair et que les deux valeurs centrales sont différentes, on prend leur demi-somme.",
           "Exemple : $1$ ; $2$ ; $3$ ; $4$ a pour médiane $2{,}5$, qui n'est pas une valeur de la série. L'affirmation est fausse."], "Faux")

    # c) quartiles — 8
    N = "quartiles"
    for T, ctx, k, d in [(T2, "Pointures de $40$ élèves.", 1, "intermediaire"), (T2, "Pointures de $40$ élèves.", 3, "intermediaire"),
                         (T3, "Durée du trajet de $27$ élèves.", 1, "approfondissement"), (T3, "Durée du trajet de $27$ élèves.", 3, "approfondissement"),
                         (T1, "Frères et sœurs de $30$ élèves.", 3, "intermediaire"), (T6, "Livres lus par $24$ élèves.", 1, "intermediaire")]:
        q, c = q_corrige(T, k)
        L.add(d, N, intro(T, ctx) + f" Déterminer le {'premier' if k == 1 else 'troisième'} quartile $Q_{k}$.", c, f"$Q_{k} = {nb(q)}$")
    q1, c1 = q_corrige(T4, 1)
    q3, c3 = q_corrige(T4, 3)
    L.add("approfondissement", N, intro(T4, "Notes de $32$ élèves.") + " Déterminer $Q_1$ et $Q_3$, puis l'écart $Q_3 - Q_1$.",
          c1 + c3[1:] + [f"$Q_3 - Q_1 = {nb(q3)} - {nb(q1)} = {nb(q3 - q1)}$."], f"$Q_1 = {nb(q1)}$ ; $Q_3 = {nb(q3)}$ ; $Q_3 - Q_1 = {nb(q3 - q1)}$",
          acc(f"Q1 = {nt(q1)} ; Q3 = {nt(q3)} ; Q3 - Q1 = {nt(q3 - q1)}", f"{nt(q1)} ; {nt(q3)} ; {nt(q3 - q1)}"))
    q, _ = q_corrige(T3, 1)
    L.add("approfondissement", N, intro(T3, "Durée du trajet de $27$ élèves.") + " Jade écrit : « $\\dfrac{27}{4} = 6{,}75$, donc $Q_1 = 6{,}75$ min ». Corriger son erreur.",
          ["$6{,}75$ est un rang, pas une durée : on prend le rang $7$.", f"Cumuls : {_cum_txt(T3[2])}. Le premier cumul $\\geqslant 7$ est celui de $10$ min.", f"$Q_1 = {nb(q)}$ min."],
          f"$Q_1 = {nb(q)}$ min")

    # d) série donnée par un diagramme en barres — 5
    N = "diagramme-en-barres"
    V5, E5 = [0, 1, 2, 3, 4], [4, 5, 6, 3, 2]
    ctx5 = "Un diagramme en barres donne le nombre de buts marqués par une équipe lors de ses matchs : barres de hauteurs $4$ ; $5$ ; $6$ ; $3$ ; $2$ au-dessus des valeurs $0$ ; $1$ ; $2$ ; $3$ ; $4$ buts."
    L.add("application", N, ctx5 + " Combien de matchs l'équipe a-t-elle joués ?", ["La hauteur d'une barre est l'effectif : $4 + 5 + 6 + 3 + 2 = 20$ matchs."], "$20$ matchs")
    m = _mediane(_liste(V5, E5))
    _ok(_par_cumuls(V5, E5, 10) == _par_cumuls(V5, E5, 11) == m)
    L.add("intermediaire", N, ctx5 + " Déterminer la médiane du nombre de buts.", ["Cumuls : $4$ ; $9$ ; $15$ ; $18$ ; $20$.", "Rangs $10$ et $11$ : tous deux sur la valeur $2$.", f"Médiane $= {nb(m)}$ buts."], f"${nb(m)}$ buts")
    q = _quartile(_liste(V5, E5), 1)
    L.add("intermediaire", N, ctx5 + " Déterminer le premier quartile.", ["$\\dfrac{20}{4} = 5$ : rang $5$.", "Cumuls : $4$ ; $9$ ; … : le premier cumul $\\geqslant 5$ est celui de $1$ but.", f"$Q_1 = {nb(q)}$."], f"$Q_1 = {nb(q)}$")
    V7, E7 = [1, 2, 3, 4, 5], [3, 7, 5, 4, 1]
    ctx7 = "Un diagramme en barres représente le nombre de personnes par foyer dans un immeuble : barres de hauteurs $3$ ; $7$ ; $5$ ; $4$ ; $1$ au-dessus des valeurs $1$ ; $2$ ; $3$ ; $4$ ; $5$ personnes."
    m = _mediane(_liste(V7, E7))
    L.add("approfondissement", N, ctx7 + " Déterminer la médiane.", ["Total : $20$ foyers. Cumuls : $3$ ; $10$ ; $15$ ; $19$ ; $20$.", "Rang $10$ : valeur $2$ ; rang $11$ : valeur $3$.", f"Médiane $= \\dfrac{{2 + 3}}{{2}} = {nb(m)}$."], f"${nb(m)}$")
    q = _quartile(_liste(V7, E7), 3)
    L.add("approfondissement", N, ctx7 + " Déterminer le troisième quartile.", ["$\\dfrac{3 \\times 20}{4} = 15$ : rang $15$.", "Cumuls : $3$ ; $10$ ; $15$ ; … : le premier cumul $\\geqslant 15$ est celui de $3$ personnes.", f"$Q_3 = {nb(q)}$."], f"$Q_3 = {nb(q)}$")

    # e) boîte à moustaches — 8
    N = "boite-a-moustaches"
    B = "Une boîte à moustaches résume les temps (en minutes) mis par des élèves pour finir un exercice : minimum $4$, $Q_1 = 9$, médiane $12$, $Q_3 = 15$, maximum $19$."
    L.add("application", N, B + " Quelle est l'étendue de la série ?", ["Étendue $=$ maximum $-$ minimum $= 19 - 4 = 15$ min."], "$15$ min")
    L.add("application", N, B + " Quelle est la largeur de la boîte ?", ["Largeur $= Q_3 - Q_1 = 15 - 9 = 6$ min."], "$6$ min")
    L.add("intermediaire", N, B + " Au moins quel pourcentage des élèves a mis $15$ minutes ou moins ?", ["$15$ min est le troisième quartile.", "Au moins $75\\,\\%$ des élèves ont mis $15$ min ou moins."], "$75\\,\\%$")
    L.add("intermediaire", N, B + " Au moins la moitié des élèves a mis au plus combien de minutes ?", ["C'est la médiane : au moins la moitié des élèves a mis $12$ min ou moins."], "$12$ min")
    B2 = "Les tailles (en cm) des élèves d'un club sont résumées par une boîte à moustaches : minimum $148$, $Q_1 = 155$, médiane $161$, $Q_3 = 166$, maximum $182$."
    L.add("application", N, B2 + " Calculer l'étendue des tailles.", ["$182 - 148 = 34$ cm."], "$34$ cm")
    L.add("intermediaire", N, B2 + " Entre quelles valeurs se trouve la moitié centrale des tailles ? Donner la largeur de cet intervalle.", ["La moitié centrale est entre $Q_1 = 155$ et $Q_3 = 166$.", "Largeur : $166 - 155 = 11$ cm."], "$11$ cm")
    L.add("approfondissement", N, B2 + " Vrai ou faux ? « La moustache de droite est longue, donc beaucoup d'élèves mesurent plus de $166$ cm. » Justifier.",
          ["Au-delà de $Q_3$, il y a au plus un quart des élèves.", "Une longue moustache peut venir d'une seule taille extrême ($182$ cm). L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, B2 + " Peut-on lire la taille moyenne sur cette boîte à moustaches ?", ["Une boîte ne montre que min, $Q_1$, médiane, $Q_3$ et max.", "Ni la moyenne ni l'effectif n'y apparaissent : non."], "Non")

    # f) comparer deux séries — 6
    N = "comparer-deux-series"
    C = "Deux classes ont passé le même contrôle. Classe A : min $6$, $Q_1 = 10$, médiane $12$, $Q_3 = 13$, max $18$. Classe B : min $3$, $Q_1 = 8$, médiane $12$, $Q_3 = 16$, max $19$."
    L.add("application", N, C + " Quelle classe a la plus grande étendue ?", ["A : $18 - 6 = 12$. B : $19 - 3 = 16$.", "La classe B a la plus grande étendue."], "La classe B", acc("classe B", "la classe B", "B"))
    L.add("intermediaire", N, C + " Quelle classe a les résultats les plus homogènes ?", ["Largeur des boîtes : A : $13 - 10 = 3$ ; B : $16 - 8 = 8$.", "La moitié centrale de A est plus resserrée : la classe A est la plus homogène."], "La classe A", acc("classe A", "la classe A", "A"))
    L.add("intermediaire", N, C + " Dans quelle classe au moins un quart des élèves a-t-il obtenu $16$ ou plus ?", ["En B, $Q_3 = 16$ : au moins un quart des élèves a $16$ ou plus.", "En A, $Q_3 = 13$ : on ne peut pas l'affirmer."], "La classe B", acc("classe B", "la classe B", "B"))
    L.add("approfondissement", N, C + " Vrai ou faux ? « Les deux classes ont la même médiane, donc leurs résultats se valent. » Justifier.",
          ["La médiane ne décrit que le milieu de la série.", "Les dispersions sont très différentes (boîte de largeur $3$ contre $8$). L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, C + " Dans la classe A, au moins combien d'élèves sur $28$ ont obtenu $13$ ou moins ?",
          ["$Q_3 = 13$ : au moins trois quarts des élèves ont $13$ ou moins.", "$\\dfrac{3}{4} \\times 28 = 21$ élèves au moins."], "$21$ élèves")
    L.add("probleme", N, "Deux villes : à Lyon, les températures maximales de juillet ont pour médiane $29$ °C et $Q_1 = 26$ °C ; à Brest, médiane $21$ °C et $Q_3 = 23$ °C. Dans quelle ville au moins les trois quarts des jours ont-ils dépassé ou atteint $26$ °C ?",
          ["À Lyon, $Q_1 = 26$ : au plus un quart des jours sont en dessous de $26$ °C, donc au moins trois quarts atteignent $26$ °C.",
           "À Brest, au moins trois quarts des jours sont à $23$ °C ou moins."], "Lyon", acc("Lyon", "à Lyon"))

    # g) moyenne, étendue et tableur — 8
    N = "moyenne-etendue-tableur"
    moy = sum(_liste(T1[1], T1[2])) / 30
    _ok(moy == F(sum(v * n for v, n in zip(T1[1], T1[2])), 30))
    L.add("intermediaire", N, intro(T1, "Frères et sœurs de $30$ élèves.") + " Calculer le nombre moyen de frères et sœurs.",
          ["$\\dfrac{0 \\times 6 + 1 \\times 11 + 2 \\times 7 + 3 \\times 4 + 4 \\times 2}{30} = \\dfrac{45}{30}$.", f"Moyenne $= {nb(moy)}$."], f"${nb(moy)}$")
    moy = F(sum(v * n for v, n in zip(T3[1], T3[2])), 27)
    L.add("intermediaire", N, intro(T3, "Durée du trajet de $27$ élèves.") + " Calculer la durée moyenne, arrondie au dixième de minute.",
          ["$\\dfrac{5 \\times 4 + 10 \\times 6 + 15 \\times 8 + 20 \\times 5 + 30 \\times 4}{27} = \\dfrac{420}{27}$.", f"Moyenne $\\approx {nb(moy, 3)}$, soit environ ${nb(arr(moy, 1))}$ min."],
          f"$\\approx {nb(arr(moy, 1))}$ min")
    L.add("application", N, intro(T2, "Pointures de $40$ élèves.") + " Calculer l'étendue de la série.", ["$41 - 36 = 5$."], "$5$")
    moy = F(12 * 20 + 20, 21)
    L.add("approfondissement", N, "La moyenne d'une classe de $20$ élèves est $12$. Un nouvel élève arrive avec la note $20$. Calculer la nouvelle moyenne, arrondie au centième.",
          ["Somme des $20$ notes : $20 \\times 12 = 240$.", f"Nouvelle moyenne : $\\dfrac{{240 + 20}}{{21}} = \\dfrac{{260}}{{21}} \\approx {nb(arr(moy, 2))}$."], f"$\\approx {nb(arr(moy, 2))}$")
    L.add("application", N, "Dans un tableur, que calcule la formule `=MAX(B2:B31)-MIN(B2:B31)` ?", ["Elle soustrait la plus petite valeur à la plus grande.", "C'est l'étendue de la série."], "L'étendue", acc("l'étendue", "étendue"))
    L.add("application", N, "Dans un tableur, les effectifs sont en B2:B7. On écrit en C2 `=B2`, puis en C3 `=C2+B3`, que l'on recopie vers le bas. Que contient la colonne C ?",
          ["Chaque cellule ajoute l'effectif de la ligne au total précédent.", "La colonne C contient les effectifs cumulés croissants."], "Les effectifs cumulés", acc("les effectifs cumulés", "effectifs cumulés"))
    moy = F(9 * 1 + 13 * 1 + 17 * 2, 4)
    L.add("intermediaire", N, "Léo a obtenu $9$ (coefficient $1$), $13$ (coefficient $1$) et $17$ (coefficient $2$). Calculer sa moyenne.",
          ["$\\dfrac{9 \\times 1 + 13 \\times 1 + 17 \\times 2}{1 + 1 + 2} = \\dfrac{56}{4}$.", f"Moyenne $= {nb(moy)}$."], f"${nb(moy)}$")
    L.add("probleme", N, "Dans une série de $25$ valeurs, on remplace la plus grande valeur, $18$, par $40$ (erreur de saisie). Parmi la moyenne, la médiane et le premier quartile, quel indicateur change ?",
          ["La médiane et les quartiles ne dépendent que des rangs : la plus grande valeur reste la dernière.", "La somme augmente de $22$ : seule la moyenne change (elle augmente de $22 \\div 25 = 0{,}88$)."],
          "La moyenne", acc("la moyenne", "moyenne"))
    return L.fin()


# =====================================================================
# 4e — STATISTIQUES : MOYENNE PONDÉRÉE, MÉDIANE, ÉTENDUE
# =====================================================================
@chapitre("quatrieme", "statistiques")
def g4_statistiques():
    L = Lot(("quatrieme", "statistiques"))

    # a) fréquences et moyenne simple — 6
    N = "frequences-et-moyenne"
    L.add("application", N, "Calculer la moyenne de la série : $14$ ; $9$ ; $11$ ; $16$ ; $10$.", ["Somme : $60$ ; $5$ valeurs.", "Moyenne $= 60 \\div 5 = 12$."], "$12$")
    L.add("application", N, "Dans une classe de $25$ élèves, $8$ font du football. Quelle est la fréquence des footballeurs, en pourcentage ?", ["$\\dfrac{8}{25} = 0{,}32$, soit $32\\,\\%$."], "$32\\,\\%$")
    temp = [F(x, 10) for x in (62, 81, 105, 98, 74, 50, 41)]
    moy = sum(temp) / 7
    L.add("intermediaire", N, "Températures relevées une semaine d'avril (en °C) : $6{,}2$ ; $8{,}1$ ; $10{,}5$ ; $9{,}8$ ; $7{,}4$ ; $5$ ; $4{,}1$. Calculer la température moyenne, arrondie au dixième.",
          [f"Somme : ${nb(sum(temp))}$ °C, pour $7$ jours.", f"Moyenne $\\approx {nb(moy, 3)}$, soit environ ${nb(arr(moy, 1))}$ °C."], f"$\\approx {nb(arr(moy, 1))}$ °C")
    L.add("intermediaire", N, "Sur $200$ lancers d'un dé, la face $6$ est sortie $36$ fois. Quelle est la fréquence de sortie du $6$, en écriture décimale ?", ["$\\dfrac{36}{200} = 0{,}18$."], "$0{,}18$")
    L.add("intermediaire", N, "La moyenne de $4$ notes est $11$. Trois des notes sont $8$, $12$ et $10$. Quelle est la quatrième ?",
          ["Somme des $4$ notes : $4 \\times 11 = 44$.", "Quatrième note : $44 - (8 + 12 + 10) = 14$."], "$14$")
    L.add("approfondissement", N, "Les fréquences d'une série sont $15\\,\\%$, $40\\,\\%$, $x$ et $20\\,\\%$. Calculer $x$.", ["La somme des fréquences vaut $100\\,\\%$.", "$x = 100 - 15 - 40 - 20 = 25\\,\\%$."], "$25\\,\\%$")

    # b) moyenne pondérée — 9
    N = "moyenne-ponderee"
    for d, vals, effs, ctx, unite in [
        ("application", [10, 12, 15], [3, 5, 2], "Notes d'un groupe d'élèves", ""),
        ("intermediaire", [1, 2, 3, 4], [8, 10, 5, 2], "Nombre de pièces des logements d'une résidence", " pièces"),
        ("intermediaire", [35, 36, 37, 38, 39], [2, 4, 7, 5, 2], "Pointures des joueurs d'un club", ""),
    ]:
        s = sum(v * n for v, n in zip(vals, effs))
        n = sum(effs)
        moy = F(s, n)
        _ok(moy == sum(_liste(vals, effs)) / n)
        L.add(d, N, f"{ctx}. " + _tab("Valeur", vals, effs) + " Calculer la moyenne de cette série.",
              [f"Somme des produits : " + " + ".join(f"{v} \\times {k}" for v, k in zip(vals, effs)).join(["$", f" = {s}$."]),
               f"Effectif total : ${n}$.", f"Moyenne $= \\dfrac{{{s}}}{{{n}}} = {nb(moy)}$."], f"${nb(moy)}${unite}")
    moy = F(12 * 2 + 9 * 3 + 15 * 1, 6)
    L.add("intermediaire", N, "Au brevet blanc, Mia a obtenu $12$ en mathématiques (coefficient $2$), $9$ en français (coefficient $3$) et $15$ en sciences (coefficient $1$). Calculer sa moyenne.",
          ["$\\dfrac{12 \\times 2 + 9 \\times 3 + 15 \\times 1}{2 + 3 + 1} = \\dfrac{66}{6}$.", f"Moyenne $= {nb(moy)}$."], f"${nb(moy)}$")
    moy = F(4 * 2 + 5 * 6 + 6 * 9 + 7 * 3, 20)
    L.add("intermediaire", N, "Un diagramme en barres donne les notes sur $10$ d'un QCM : barres de hauteurs $2$ ; $6$ ; $9$ ; $3$ au-dessus des notes $4$ ; $5$ ; $6$ ; $7$. Calculer la note moyenne.",
          ["Effectif total : $2 + 6 + 9 + 3 = 20$.", "$\\dfrac{4 \\times 2 + 5 \\times 6 + 6 \\times 9 + 7 \\times 3}{20} = \\dfrac{113}{20}$.", f"Moyenne $= {nb(moy)}$."], f"${nb(moy)}$")
    moy = F(30 * 1250 + 20 * 1500, 50)
    L.add("approfondissement", N, "Dans une entreprise, $30$ employés gagnent $1\\,250$ € par mois et $20$ employés gagnent $1\\,500$ €. Calculer le salaire moyen.",
          ["$\\dfrac{30 \\times 1\\,250 + 20 \\times 1\\,500}{50} = \\dfrac{67\\,500}{50}$.", f"Salaire moyen $= {nb(moy)}$ €."], f"${nb(moy)}$ €")
    L.add("approfondissement", N, "Tom calcule la moyenne de $8$ (coefficient $1$) et $14$ (coefficient $3$) en écrivant $\\dfrac{8 + 14}{2} = 11$. Quelle est la bonne moyenne ?",
          ["Il faut tenir compte des coefficients.", "$\\dfrac{8 \\times 1 + 14 \\times 3}{1 + 3} = \\dfrac{50}{4} = 12{,}5$."], "$12{,}5$")
    x = F(13 * 4 - 10 * 1 - 12 * 1, 2)
    L.add("probleme", N, "Ali a eu $10$ (coefficient $1$) et $12$ (coefficient $1$). Quelle note doit-il obtenir au contrôle suivant (coefficient $2$) pour avoir $13$ de moyenne ?",
          ["Il faut une somme pondérée de $13 \\times (1 + 1 + 2) = 52$.", "$10 + 12 + 2x = 52$, donc $2x = 30$.", f"$x = {nb(x)}$."], f"${nb(x)}$")
    _ok(x == 15)
    L.add("probleme", N, "Une classe A de $24$ élèves a $11$ de moyenne ; une classe B de $16$ élèves a $14$ de moyenne. Quelle est la moyenne des $40$ élèves ?",
          ["Ce n'est pas $\\dfrac{11 + 14}{2}$ : les classes n'ont pas le même effectif.", "$\\dfrac{24 \\times 11 + 16 \\times 14}{40} = \\dfrac{488}{40} = 12{,}2$."], "$12{,}2$")
    _ok(F(24 * 11 + 16 * 14, 40) == F(122, 10))

    # c) médiane, effectif impair — 6
    N = "mediane-effectif-impair"
    for d, s in [("application", [7, 3, 9, 5, 12]), ("application", [15, 11, 18, 14, 20, 9, 13]), ("intermediaire", [4, 4, 6, 8, 8, 9, 10, 12, 15])]:
        m = _mediane([F(x) for x in s])
        r = sorted(s)
        L.add(d, N, "Déterminer la médiane de la série : " + " ; ".join(f"${x}$" for x in s) + ".",
              ["On range : " + " ; ".join(f"${x}$" for x in r) + ".", f"${len(s)}$ valeurs : la médiane est la ${(len(s) + 1) // 2}^\\text{{e}}$, soit ${nb(m)}$."], f"${nb(m)}$")
    vals, effs = [8, 9, 10, 11, 12], [3, 4, 6, 5, 3]
    m = _mediane(_liste(vals, effs))
    L.add("intermediaire", N, "Âges des enfants d'un centre aéré. " + _tab("Âge", vals, effs) + " Déterminer l'âge médian.",
          ["Effectif total : $21$ ; la médiane est la $11^\\text{e}$ valeur.", "$3 + 4 = 7$ enfants ont $9$ ans ou moins, $7 + 6 = 13$ ont $10$ ans ou moins.", f"La $11^\\text{{e}}$ valeur est ${nb(m)}$ ans."], f"${nb(m)}$ ans")
    _ok(m == 10)
    L.add("approfondissement", N, "Une série de $35$ valeurs est rangée dans l'ordre croissant. Quel est le rang de la médiane ?", ["$35$ est impair : la médiane est la valeur de rang $\\dfrac{35 + 1}{2} = 18$."], "$18$")
    L.add("approfondissement", N, "La médiane des temps de sommeil d'une classe est $8$ h $30$ min. Au moins quel pourcentage des élèves dort $8$ h $30$ min ou moins ?",
          ["La médiane partage la série en deux groupes de même effectif.", "Au moins la moitié des élèves, soit $50\\,\\%$, dort $8$ h $30$ min ou moins (et au moins la moitié dort $8$ h $30$ min ou plus)."],
          "$50\\,\\%$")

    # d) médiane, effectif pair — 6
    N = "mediane-effectif-pair"
    for d, s in [("application", [12, 8, 15, 10]), ("intermediaire", [3, 9, 6, 11, 7, 4]), ("intermediaire", [21, 18, 25, 30, 19, 22, 24, 27])]:
        r = sorted(s)
        n = len(s)
        m = _mediane([F(x) for x in s])
        _ok(m == F(r[n // 2 - 1] + r[n // 2], 2))
        L.add(d, N, "Déterminer la médiane de la série : " + " ; ".join(f"${x}$" for x in s) + ".",
              ["On range : " + " ; ".join(f"${x}$" for x in r) + ".", f"${n}$ valeurs : on prend la demi-somme des valeurs de rangs ${n // 2}$ et ${n // 2 + 1}$.",
               f"Médiane $= \\dfrac{{{r[n // 2 - 1]} + {r[n // 2]}}}{{2}} = {nb(m)}$."], f"${nb(m)}$")
    vals, effs = [0, 1, 2, 3], [5, 7, 6, 2]
    m = _mediane(_liste(vals, effs))
    L.add("intermediaire", N, "Nombre d'animaux de compagnie de $20$ familles. " + _tab("Animaux", vals, effs) + " Déterminer la médiane.",
          ["$20$ valeurs : médiane = demi-somme des $10^\\text{e}$ et $11^\\text{e}$ valeurs.", "$5$ familles n'en ont aucun, $5 + 7 = 12$ en ont au plus $1$.", f"Les $10^\\text{{e}}$ et $11^\\text{{e}}$ valeurs valent $1$ : médiane $= {nb(m)}$."], f"${nb(m)}$")
    _ok(m == 1)
    L.add("approfondissement", N, "Les pointures de $6$ amis sont $38$ ; $39$ ; $40$ ; $41$ ; $42$ ; $43$. Léna dit que la médiane est $40$. Quelle est la bonne médiane ?",
          ["$6$ valeurs : demi-somme des $3^\\text{e}$ et $4^\\text{e}$ valeurs.", "$\\dfrac{40 + 41}{2} = 40{,}5$."], "$40{,}5$")
    L.add("approfondissement", N, "Ajouter une valeur à une série de $10$ valeurs : à quel rang se trouve alors la médiane ?", ["La série compte $11$ valeurs (impair).", "La médiane est la valeur de rang $\\dfrac{11 + 1}{2} = 6$."], "$6$")

    # e) étendue — 6
    N = "etendue"
    L.add("application", N, "Calculer l'étendue de la série : $13$ ; $7$ ; $18$ ; $11$ ; $9$.", ["$18 - 7 = 11$."], "$11$")
    L.add("application", N, "Les températures d'une journée vont de $-4$ °C à $9$ °C. Quelle est l'étendue des températures ?", ["$9 - (-4) = 13$ °C."], "$13$ °C")
    L.add("intermediaire", N, "Les tailles d'une équipe de basket vont de $1{,}78$ m à $2{,}06$ m. Quelle est l'étendue, en cm ?", ["$2{,}06 - 1{,}78 = 0{,}28$ m.", "Soit $28$ cm."], "$28$ cm")
    L.add("intermediaire", N, "L'étendue d'une série est $15$ et sa plus petite valeur est $6$. Quelle est sa plus grande valeur ?", ["Étendue $=$ max $-$ min, donc max $= 6 + 15 = 21$."], "$21$")
    L.add("approfondissement", N, "Deux joueurs de fléchettes ont la même moyenne, $40$ points. Les scores de Lucas vont de $35$ à $46$, ceux d'Emma de $12$ à $60$. Lequel est le plus régulier ?",
          ["Étendue de Lucas : $46 - 35 = 11$ ; d'Emma : $60 - 12 = 48$.", "L'étendue de Lucas est la plus petite : Lucas est le plus régulier."], "Lucas")
    L.add("approfondissement", N, "Vrai ou faux ? « Deux séries de même étendue ont la même plus petite valeur. » Justifier avec un exemple.",
          ["Les séries $1$ ; $5$ et $10$ ; $14$ ont toutes les deux une étendue de $4$.", "Leurs plus petites valeurs sont différentes : l'affirmation est fausse."], "Faux")

    # f) influence d'une valeur extrême — 6
    N = "valeur-extreme"
    s = [F(x) for x in (11, 12, 12, 13, 14)]
    s2 = s + [F(38)]
    L.add("intermediaire", N, "Série : $11$ ; $12$ ; $12$ ; $13$ ; $14$. On ajoute la valeur $38$. Calculer la nouvelle moyenne.",
          ["Ancienne somme : $62$ ; nouvelle somme : $62 + 38 = 100$.", f"Nouvelle moyenne : $\\dfrac{{100}}{{6}} \\approx {nb(sum(s2) / 6, 2)}$."], f"$\\approx {nb(arr(sum(s2) / 6, 2))}$")
    L.add("intermediaire", N, "Série : $11$ ; $12$ ; $12$ ; $13$ ; $14$. On ajoute la valeur $38$. Calculer la nouvelle médiane.",
          ["Série rangée : $11$ ; $12$ ; $12$ ; $13$ ; $14$ ; $38$ ($6$ valeurs).", f"Médiane $= \\dfrac{{12 + 13}}{{2}} = {nb(_mediane(s2))}$ : elle a très peu bougé."], f"${nb(_mediane(s2))}$")
    L.add("intermediaire", N, "Série : $11$ ; $12$ ; $12$ ; $13$ ; $14$. On ajoute la valeur $38$. Calculer la nouvelle étendue.", ["$38 - 11 = 27$ (au lieu de $3$)."], "$27$")
    L.add("approfondissement", N, "Dans une petite entreprise, les salaires sont $1\\,600$ € ; $1\\,700$ € ; $1\\,750$ € ; $1\\,800$ € et $9\\,000$ € (le directeur). Quel indicateur, moyenne ou médiane, représente le mieux le salaire habituel ?",
          ["Moyenne : $15\\,850 \\div 5 = 3\\,170$ €, gonflée par le salaire du directeur.", "Médiane : $1\\,750$ €, proche de la plupart des salaires. La médiane est la plus représentative."], "La médiane", acc("la médiane", "médiane"))
    _ok(F(1600 + 1700 + 1750 + 1800 + 9000, 5) == 3170)
    L.add("approfondissement", N, "Vrai ou faux ? « Ajouter une valeur très grande à une série modifie toujours beaucoup la médiane. » Justifier.",
          ["La médiane ne dépend que de l'ordre : la grande valeur se place à la fin et décale la médiane d'au plus un rang.", "La moyenne, elle, peut beaucoup changer. L'affirmation est fausse."], "Faux")
    L.add("probleme", N, "Un élève a $5$ notes de moyenne $12$. Il obtient $2$ au contrôle suivant. De combien sa moyenne baisse-t-elle ?",
          ["Somme des $5$ notes : $60$. Avec la nouvelle : $62$ pour $6$ notes.", "Nouvelle moyenne : $\\dfrac{62}{6} \\approx 10{,}33$.", "Baisse : $12 - \\dfrac{62}{6} = \\dfrac{10}{6} \\approx 1{,}67$ point."], "$\\approx 1{,}67$ point")

    # g) comparer et interpréter — 6
    N = "comparer-deux-series"
    A = [8, 10, 11, 12, 14]
    B = [3, 7, 11, 15, 19]
    L.add("intermediaire", N, "Groupe A : $8$ ; $10$ ; $11$ ; $12$ ; $14$. Groupe B : $3$ ; $7$ ; $11$ ; $15$ ; $19$. Comparer les moyennes des deux groupes.",
          ["Moyenne de A : $55 \\div 5 = 11$. Moyenne de B : $55 \\div 5 = 11$.", "Les moyennes sont égales."], "Elles sont égales (11)", acc("elles sont égales", "égales", "11 et 11"))
    _ok(sum(A) == sum(B) == 55)
    L.add("intermediaire", N, "Groupe A : $8$ ; $10$ ; $11$ ; $12$ ; $14$. Groupe B : $3$ ; $7$ ; $11$ ; $15$ ; $19$. Quel groupe est le plus homogène ?",
          ["Étendue de A : $14 - 8 = 6$ ; de B : $19 - 3 = 16$.", "A a la plus petite étendue : le groupe A est le plus homogène."], "Le groupe A", acc("le groupe A", "groupe A", "A"))
    L.add("application", N, "En mars, la médiane des temps de course d'un club est $52$ min ; en juin, elle est de $49$ min. Les coureurs ont-ils progressé ?",
          ["En juin, au moins la moitié des coureurs met $49$ min ou moins.", "La médiane a baissé de $3$ min : globalement, oui, ils ont progressé."], "Oui")
    L.add("approfondissement", N, "Classe A : moyenne $12$, étendue $6$. Classe B : moyenne $12$, étendue $15$. Dans quelle classe les notes sont-elles les plus dispersées ?",
          ["Même moyenne : on compare les étendues.", "L'étendue de B est plus grande : la classe B est la plus dispersée."], "La classe B", acc("la classe B", "classe B", "B"))
    L.add("approfondissement", N, "Ville X : médiane des loyers $650$ € ; ville Y : médiane $720$ €. Peut-on affirmer que tous les loyers de Y sont plus chers que ceux de X ?",
          ["La médiane indique seulement que la moitié des loyers est en dessous et l'autre au-dessus.", "Certains loyers de Y peuvent être moins chers que des loyers de X : non."], "Non")
    L.add("probleme", N, "Une boulangerie vend des baguettes dont la masse doit être proche de $250$ g. Lot 1 : moyenne $250$ g, étendue $8$ g. Lot 2 : moyenne $250$ g, étendue $40$ g. Quel lot est le mieux réglé ?",
          ["Les deux lots ont la bonne moyenne.", "Le lot 1 a une étendue bien plus petite : ses baguettes sont plus régulières. C'est le lot 1."], "Le lot 1", acc("le lot 1", "lot 1"))

    # h) tableur et pièges — 5
    N = "tableur-et-pieges"
    L.add("application", N, "Dans un tableur, les notes sont en B2:B26. Quel indicateur la formule `=MEDIANE(B2:B26)` calcule-t-elle ?", ["`MEDIANE` calcule la médiane de la plage."], "La médiane", acc("la médiane", "médiane"))
    L.add("intermediaire", N, "Nina cherche la médiane de $14$ ; $6$ ; $9$ ; $11$ ; $5$ et répond $9$ parce que c'est « la valeur du milieu de la liste ». Quelle est la bonne médiane ?",
          ["Il faut d'abord ranger la série : $5$ ; $6$ ; $9$ ; $11$ ; $14$.", "La valeur du milieu est $9$ : par chance, Nina a la bonne réponse, mais sa méthode est fausse."], "$9$")
    L.add("intermediaire", N, "Kim range la série $12$ ; $4$ ; $15$ ; $8$ ; $10$ ; $6$ ; $13$ et trouve « médiane $= 8$ » en prenant la $4^\\text{e}$ valeur de la liste non rangée. Quelle est la bonne médiane ?",
          ["Série rangée : $4$ ; $6$ ; $8$ ; $10$ ; $12$ ; $13$ ; $15$.", "La $4^\\text{e}$ valeur est $10$."], "$10$")
    L.add("approfondissement", N, "Sam calcule la moyenne de $3$ notes sur $20$ et trouve $21{,}5$. Que peut-on dire ?",
          ["Une moyenne est toujours comprise entre la plus petite et la plus grande valeur.", "Elle ne peut pas dépasser $20$ : Sam s'est trompé."], "Il s'est trompé", acc("il s'est trompé", "erreur", "c'est faux"))
    L.add("approfondissement", N, "Vrai ou faux ? « La moyenne d'une série est toujours une des valeurs de la série. » Justifier.",
          ["La série $1$ ; $2$ a pour moyenne $1{,}5$, qui n'en fait pas partie.", "L'affirmation est fausse."], "Faux")
    return L.fin()


# =====================================================================
# 3e — TRIANGLES : THALÈS, RÉCIPROQUE, CONTRAPOSÉE, TRIGONOMÉTRIE
# =====================================================================
def _deg(x):
    return math.degrees(x)


@chapitre("troisieme", "triangles")
def g3_triangles():
    L = Lot(("troisieme", "triangles"))
    cos, sin, tan = (lambda a: math.cos(math.radians(a))), (lambda a: math.sin(math.radians(a))), (lambda a: math.tan(math.radians(a)))

    # a) Thalès, triangles emboîtés — 8
    N = "thales-triangles-emboites"
    for d, AM, AB, AN, AC, MN, BC, cherche in [
        ("application", 4, 10, None, 15, None, None, "AN"),
        ("application", 3, 9, 5, None, None, None, "AC"),
        ("application", 6, 15, None, None, None, 20, "MN"),
        ("intermediaire", F(42, 10), 7, None, None, None, 12, "MN"),
        ("intermediaire", 5, 8, F(45, 10), None, None, None, "AC"),
        ("intermediaire", 9, 12, None, None, 6, None, "BC"),
    ]:
        k = F(AM) / F(AB)
        donnees = f"$AM = {nb(AM)}$ cm, $AB = {nb(AB)}$ cm"
        if cherche == "AN":
            res = k * AC
            donnees += f", $AC = {nb(AC)}$ cm"
            calc = f"$AN = \\dfrac{{{nb(AM)} \\times {nb(AC)}}}{{{nb(AB)}}} = {nb(res)}$ cm."
        elif cherche == "AC":
            res = F(AN) / k
            donnees += f", $AN = {nb(AN)}$ cm"
            calc = f"$\\dfrac{{{nb(AM)}}}{{{nb(AB)}}} = \\dfrac{{{nb(AN)}}}{{AC}}$, donc $AC = \\dfrac{{{nb(AN)} \\times {nb(AB)}}}{{{nb(AM)}}} = {nb(res)}$ cm."
        elif cherche == "MN":
            res = k * BC
            donnees += f", $BC = {nb(BC)}$ cm"
            calc = f"$MN = \\dfrac{{{nb(AM)} \\times {nb(BC)}}}{{{nb(AB)}}} = {nb(res)}$ cm."
        else:
            res = F(MN) / k
            donnees += f", $MN = {nb(MN)}$ cm"
            calc = f"$\\dfrac{{{nb(AM)}}}{{{nb(AB)}}} = \\dfrac{{{nb(MN)}}}{{BC}}$, donc $BC = \\dfrac{{{nb(MN)} \\times {nb(AB)}}}{{{nb(AM)}}} = {nb(res)}$ cm."
        _ok(exact(res))
        L.add(d, N, f"$M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$. On donne {donnees}. Calculer ${cherche}$.",
              ["Les droites $(MN)$ et $(BC)$ sont parallèles : d'après le théorème de Thalès, $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$.", calc], f"${cherche} = {nb(res)}$ cm")
    L.add("intermediaire", N, "$M \\in [AB]$, $N \\in [AC]$, $(MN) \\parallel (BC)$, $AM = 3$ cm, $AB = 12$ cm et $AN = 2$ cm. Calculer $NC$.",
          ["Thalès : $\\dfrac{3}{12} = \\dfrac{2}{AC}$, donc $AC = \\dfrac{2 \\times 12}{3} = 8$ cm.", "$NC = AC - AN = 8 - 2 = 6$ cm (on ne soustrait pas les rapports)."], "$NC = 6$ cm")
    h = F(16, 10) * 30 / F(24, 10)
    L.add("probleme", N, "Pour mesurer un arbre, Lucas place un bâton vertical de $1{,}6$ m. L'ombre du bâton mesure $2{,}4$ m et celle de l'arbre $30$ m, au même moment. Les rayons du soleil sont parallèles. Quelle est la hauteur de l'arbre ?",
          ["Le bâton et l'arbre sont verticaux, donc parallèles ; les rayons aussi : configuration de Thalès.", f"$\\dfrac{{h}}{{1{{,}}6}} = \\dfrac{{30}}{{2{{,}}4}}$, donc $h = \\dfrac{{1{{,}}6 \\times 30}}{{2{{,}}4}} = {nb(h)}$ m."], f"${nb(h)}$ m")
    _ok(h == 20)

    # b) Thalès, papillon — 6
    N = "thales-papillon"
    for d, OA, OC, OB, AB, cherche in [("application", 4, 6, 5, None, "OD"), ("intermediaire", 3, F(75, 10), None, 4, "CD"),
                                       ("intermediaire", F(25, 10), 4, F(35, 10), None, "OD"), ("approfondissement", 6, 9, None, F(52, 10), "CD")]:
        k = F(OC) / F(OA)
        if cherche == "OD":
            res = k * OB
            don = f"$OA = {nb(OA)}$ cm, $OC = {nb(OC)}$ cm, $OB = {nb(OB)}$ cm"
            calc = f"$OD = \\dfrac{{{nb(OB)} \\times {nb(OC)}}}{{{nb(OA)}}} = {nb(res)}$ cm."
        else:
            res = k * AB
            don = f"$OA = {nb(OA)}$ cm, $OC = {nb(OC)}$ cm, $AB = {nb(AB)}$ cm"
            calc = f"$CD = \\dfrac{{{nb(AB)} \\times {nb(OC)}}}{{{nb(OA)}}} = {nb(res)}$ cm."
        _ok(exact(res))
        L.add(d, N, f"Les droites $(AC)$ et $(BD)$ se coupent en $O$, avec $(AB) \\parallel (CD)$ (configuration « papillon »). On donne {don}. Calculer ${cherche}$.",
              ["$(AB) \\parallel (CD)$ : d'après le théorème de Thalès, $\\dfrac{OA}{OC} = \\dfrac{OB}{OD} = \\dfrac{AB}{CD}$.", calc], f"${cherche} = {nb(res)}$ cm")
    w = F(12) * F(45, 10) / F(18, 10)
    L.add("probleme", N, "Pour estimer la largeur d'une rivière, on repère : $O$ le point où se croisent les droites $(AC)$ et $(BD)$, avec $(AB) \\parallel (CD)$, $AB = 12$ m, $OA = 4{,}5$ m et $OC = 1{,}8$ m. Calculer $CD$.",
          ["Configuration papillon : $\\dfrac{OC}{OA} = \\dfrac{CD}{AB}$.", f"$CD = \\dfrac{{12 \\times 1{{,}}8}}{{4{{,}}5}} = {nb(F(12) * F(18, 10) / F(45, 10))}$ m."], f"$CD = {nb(F(12) * F(18, 10) / F(45, 10))}$ m")
    _ok(w == 30)
    L.add("intermediaire", N, "Dans un papillon de centre $O$ avec $(AB) \\parallel (CD)$, on sait que $\\dfrac{OA}{OC} = \\dfrac{2}{3}$ et $CD = 9$ cm. Calculer $AB$.",
          ["$\\dfrac{AB}{CD} = \\dfrac{OA}{OC} = \\dfrac{2}{3}$.", "$AB = \\dfrac{2}{3} \\times 9 = 6$ cm."], "$AB = 6$ cm")

    # c) réciproque — 6
    N = "reciproque-de-thales"
    for d, AM, AB, AN, AC in [("intermediaire", 3, 5, F(48, 10), 8), ("intermediaire", 4, 10, 6, 15), ("approfondissement", F(27, 10), F(45, 10), F(39, 10), F(65, 10))]:
        r1, r2 = F(AM) / F(AB), F(AN) / F(AC)
        _ok(r1 == r2)
        L.add(d, N, f"$A$, $M$, $B$ sont alignés dans cet ordre, ainsi que $A$, $N$, $C$. $AM = {nb(AM)}$ cm, $AB = {nb(AB)}$ cm, $AN = {nb(AN)}$ cm, $AC = {nb(AC)}$ cm. Les droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
              [f"$\\dfrac{{AM}}{{AB}} = \\dfrac{{{nb(AM)}}}{{{nb(AB)}}} = {nb(r1)}$ et $\\dfrac{{AN}}{{AC}} = \\dfrac{{{nb(AN)}}}{{{nb(AC)}}} = {nb(r2)}$ (calculs séparés).",
               "Les rapports sont égaux et les points sont dans le même ordre : d'après la réciproque du théorème de Thalès, $(MN) \\parallel (BC)$."], "Oui")
    L.add("approfondissement", N, "$O$ est le point d'intersection de $(AC)$ et $(BD)$ ; $A$ et $C$ sont de part et d'autre de $O$, de même que $B$ et $D$. $OA = 2{,}4$ cm, $OC = 3{,}6$ cm, $OB = 2$ cm, $OD = 3$ cm. Les droites $(AB)$ et $(CD)$ sont-elles parallèles ?",
          ["$\\dfrac{OA}{OC} = \\dfrac{2{,}4}{3{,}6} = \\dfrac{2}{3}$ et $\\dfrac{OB}{OD} = \\dfrac{2}{3}$.", "Rapports égaux, points dans le même ordre : $(AB) \\parallel (CD)$."], "Oui")
    _ok(F(24, 36) == F(2, 3))
    L.add("probleme", N, "Une étagère est fixée par deux montants qui se croisent. On mesure, depuis le point de croisement $O$ : $OA = 30$ cm, $OB = 40$ cm d'un côté, $OC = 45$ cm, $OD = 60$ cm de l'autre ($A$, $O$, $C$ alignés ; $B$, $O$, $D$ alignés, dans cet ordre). Les planches $[AB]$ et $[CD]$ sont-elles parallèles ?",
          ["$\\dfrac{OA}{OC} = \\dfrac{30}{45} = \\dfrac{2}{3}$ et $\\dfrac{OB}{OD} = \\dfrac{40}{60} = \\dfrac{2}{3}$.", "D'après la réciproque du théorème de Thalès, $(AB) \\parallel (CD)$."], "Oui")
    L.add("intermediaire", N, "Pour appliquer la réciproque du théorème de Thalès, Léa calcule $\\dfrac{AM}{AB} \\approx 0{,}67$ et $\\dfrac{AN}{AC} \\approx 0{,}67$ et conclut au parallélisme. Pourquoi sa justification est-elle insuffisante ?",
          ["Deux valeurs arrondies égales ne prouvent pas que les rapports sont égaux.", "Il faut comparer des valeurs exactes (fractions ou produits en croix)."], "Les valeurs arrondies ne suffisent pas", acc("valeurs arrondies", "il faut des valeurs exactes"))

    # d) contraposée — 5
    N = "contraposee-de-thales"
    for d, AM, AB, AN, AC in [("intermediaire", 4, 9, 5, 11), ("intermediaire", 3, 7, 4, 9), ("approfondissement", F(35, 10), 5, F(44, 10), 6)]:
        _ok(F(AM) / F(AB) != F(AN) / F(AC))
        L.add(d, N, f"$A$, $M$, $B$ sont alignés, ainsi que $A$, $N$, $C$. $AM = {nb(AM)}$ cm, $AB = {nb(AB)}$ cm, $AN = {nb(AN)}$ cm, $AC = {nb(AC)}$ cm. Les droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
              [f"Produits en croix : ${nb(AM)} \\times {nb(AC)} = {nb(F(AM) * AC)}$ et ${nb(AN)} \\times {nb(AB)} = {nb(F(AN) * AB)}$.",
               "Les rapports $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$ sont différents : d'après la contraposée du théorème de Thalès, les droites ne sont pas parallèles."], "Non")
    L.add("approfondissement", N, "Dans un triangle $ABC$, $M \\in [AB]$ et $N \\in [AC]$ avec $AM = 6$ cm, $AB = 8$ cm, $AN = 9$ cm, $AC = 12$ cm. Montrer que les droites sont parallèles, puis calculer $MN$ sachant que $BC = 10$ cm.",
          ["$\\dfrac{6}{8} = 0{,}75$ et $\\dfrac{9}{12} = 0{,}75$ : réciproque de Thalès, $(MN) \\parallel (BC)$.", "Thalès : $MN = 0{,}75 \\times 10 = 7{,}5$ cm."], "$MN = 7{,}5$ cm")
    L.add("approfondissement", N, "Vrai ou faux ? « Si $\\dfrac{AM}{AB} \\neq \\dfrac{AN}{AC}$, alors on ne peut rien conclure sur le parallélisme de $(MN)$ et $(BC)$. » Justifier.",
          ["C'est la contraposée du théorème de Thalès qui s'applique.", "Si les rapports sont différents, les droites ne sont **pas** parallèles : on peut conclure. L'affirmation est fausse."], "Faux")

    # e) trigonométrie : nommer et choisir — 6
    N = "trigonometrie-choisir-le-rapport"
    L.add("application", N, "$ABC$ est rectangle en $A$. Quel est le côté adjacent à l'angle $\\widehat{ABC}$ ?", ["L'hypoténuse est $[BC]$ (face à l'angle droit).", "Le côté de l'angle $\\widehat{B}$ qui n'est pas l'hypoténuse est $[AB]$."], "$[AB]$", acc("[AB]", "AB"))
    L.add("application", N, "$ABC$ est rectangle en $A$. Quel est le côté opposé à l'angle $\\widehat{ABC}$ ?", ["Le côté opposé à $\\widehat{B}$ est celui qui ne touche pas $B$ : $[AC]$."], "$[AC]$", acc("[AC]", "AC"))
    L.add("application", N, "Dans un triangle rectangle, on connaît l'angle $\\widehat{B}$ et l'hypoténuse, et on cherche le côté adjacent à $\\widehat{B}$. Quel rapport trigonométrique utiliser ?", ["Adjacent et hypoténuse : CAH, le cosinus."], "Le cosinus")
    L.add("intermediaire", N, "Dans un triangle rectangle, on connaît le côté opposé et le côté adjacent à un angle aigu. Quel rapport permet de calculer cet angle ?", ["Opposé et adjacent : TOA, la tangente."], "La tangente")
    L.add("intermediaire", N, "Dans un triangle rectangle, on connaît un angle aigu et l'hypoténuse, et on cherche le côté opposé à cet angle. Quel rapport utiliser ?", ["Opposé et hypoténuse : SOH, le sinus."], "Le sinus")
    L.add("approfondissement", N, "Vrai ou faux ? « Dans un triangle rectangle, le cosinus d'un angle aigu peut valoir $1{,}2$. » Justifier.",
          ["$\\cos = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$ et l'hypoténuse est le plus long côté.", "Le cosinus d'un angle aigu est donc strictement compris entre $0$ et $1$. L'affirmation est fausse."], "Faux")

    # f) trigonométrie : calculer une longueur — 8
    N = "trigonometrie-calcul-de-longueur"
    for d, ang, conn, val, cherche, fct in [
        ("application", 35, "AC", 10, "AB", "cos"), ("application", 40, "AC", 12, "BC", "sin"), ("intermediaire", 28, "AB", 7, "BC", "tan"),
        ("intermediaire", 62, "AC", F(85, 10), "AB", "cos"), ("intermediaire", 50, "AB", 6, "AC", "cos"),
    ]:
        # triangle ABC rectangle en B, angle en A ; AC hypoténuse, AB adjacent, BC opposé
        a = ang
        if fct == "cos" and conn == "AC":
            r = float(val) * cos(a); form = f"$\\cos \\widehat{{A}} = \\dfrac{{AB}}{{AC}}$, donc $AB = {nb(val)} \\times \\cos {a}° \\approx {nb(r, 3)}$ cm."
        elif fct == "sin":
            r = float(val) * sin(a); form = f"$\\sin \\widehat{{A}} = \\dfrac{{BC}}{{AC}}$, donc $BC = {nb(val)} \\times \\sin {a}° \\approx {nb(r, 3)}$ cm."
        elif fct == "tan":
            r = float(val) * tan(a); form = f"$\\tan \\widehat{{A}} = \\dfrac{{BC}}{{AB}}$, donc $BC = {nb(val)} \\times \\tan {a}° \\approx {nb(r, 3)}$ cm."
        else:
            r = float(val) / cos(a); form = f"$\\cos \\widehat{{A}} = \\dfrac{{AB}}{{AC}}$, donc $AC = \\dfrac{{{nb(val)}}}{{\\cos {a}°}} \\approx {nb(r, 3)}$ cm."
        L.add(d, N, f"$ABC$ est rectangle en $B$, $\\widehat{{BAC}} = {a}°$ et ${conn} = {nb(val)}$ cm. Calculer ${cherche}$, arrondi au millimètre.",
              [form, f"${cherche} \\approx {nb(arr(r, 1))}$ cm."], f"${cherche} \\approx {nb(arr(r, 1))}$ cm")
    h = 15 * tan(52)
    L.add("probleme", N, "Depuis un point situé à $15$ m du pied d'un immeuble, on voit son sommet sous un angle de $52°$ avec l'horizontale. Calculer la hauteur de l'immeuble, arrondie au dixième de mètre.",
          ["L'immeuble est vertical : le triangle est rectangle au pied de l'immeuble.", f"$\\tan 52° = \\dfrac{{h}}{{15}}$, donc $h = 15 \\times \\tan 52° \\approx {nb(h, 3)}$ m.", f"$h \\approx {nb(arr(h, 1))}$ m."],
          f"$\\approx {nb(arr(h, 1))}$ m")
    x = 4 * cos(70)
    L.add("probleme", N, "Une échelle de $4$ m est appuyée contre un mur vertical ; elle fait un angle de $70°$ avec le sol. À quelle distance du mur est son pied, arrondie au centimètre ?",
          ["Le triangle mur–sol–échelle est rectangle ; l'échelle est l'hypoténuse.", f"Distance $= 4 \\times \\cos 70° \\approx {nb(x, 4)}$ m.", f"Soit environ ${nb(arr(x, 2))}$ m."], f"$\\approx {nb(arr(x, 2))}$ m")
    L.add("probleme", N, "Une rampe d'accès de $5$ m de long fait un angle de $4°$ avec le sol horizontal. De quelle hauteur permet-elle de monter, arrondie au centimètre ?",
          ["La rampe est l'hypoténuse ; la hauteur est le côté opposé à l'angle de $4°$.", f"$h = 5 \\times \\sin 4° \\approx {nb(5 * sin(4), 4)}$ m.", f"Soit environ ${nb(arr(5 * sin(4), 2))}$ m."], f"$\\approx {nb(arr(5 * sin(4), 2))}$ m")

    # g) trigonométrie : calculer un angle — 7
    N = "trigonometrie-calcul-d-angle"
    for d, fct, num, den, txt in [("intermediaire", "cos", 6, 10, "$AB = 6$ cm et $AC = 10$ cm"), ("intermediaire", "sin", 5, 13, "$BC = 5$ cm et $AC = 13$ cm"),
                                   ("intermediaire", "tan", 7, 4, "$BC = 7$ cm et $AB = 4$ cm"), ("approfondissement", "cos", F(45, 10), 6, "$AB = 4{,}5$ cm et $AC = 6$ cm")]:
        q = float(F(num) / F(den))
        ang = {"cos": math.acos, "sin": math.asin, "tan": math.atan}[fct](q)
        ang = _deg(ang)
        nom = {"cos": "\\cos", "sin": "\\sin", "tan": "\\tan"}[fct]
        frac = {"cos": "\\dfrac{AB}{AC}", "sin": "\\dfrac{BC}{AC}", "tan": "\\dfrac{BC}{AB}"}[fct]
        inv = {"cos": "\\arccos", "sin": "\\arcsin", "tan": "\\arctan"}[fct]
        L.add(d, N, f"$ABC$ est rectangle en $B$ avec {txt}. Calculer $\\widehat{{BAC}}$, arrondi au dixième de degré.",
              [f"${nom} \\widehat{{A}} = {frac} = \\dfrac{{{nb(num)}}}{{{nb(den)}}}$.", f"À la calculatrice (touche ${nom}^{{-1}}$, en degrés) : $\\widehat{{A}} \\approx {nb(ang, 3)}°$, soit environ ${nb(arr(ang, 1))}°$."],
              f"$\\approx {nb(arr(ang, 1))}°$")
    ang = _deg(math.atan(0.06))
    L.add("probleme", N, "Un panneau routier indique une pente de $6\\,\\%$ : on monte de $6$ m pour $100$ m parcourus à l'horizontale. Quel angle la route fait-elle avec l'horizontale, arrondi au dixième de degré ?",
          ["Côté opposé : $6$ m ; côté adjacent : $100$ m.", f"$\\tan \\alpha = \\dfrac{{6}}{{100}} = 0{{,}}06$, donc $\\alpha \\approx {nb(ang, 3)}°$.", f"Soit environ ${nb(arr(ang, 1))}°$."], f"$\\approx {nb(arr(ang, 1))}°$")
    ang = _deg(math.asin(3 / 5))
    L.add("probleme", N, "Un toboggan rectiligne de $5$ m relie le haut d'une échelle, à $3$ m du sol, au sol horizontal. Quel angle fait-il avec le sol, arrondi au degré ?",
          ["Hypoténuse : $5$ m ; côté opposé à l'angle cherché : $3$ m.", f"$\\sin \\alpha = \\dfrac{{3}}{{5}} = 0{{,}}6$, donc $\\alpha \\approx {nb(ang, 2)}°$.", f"Soit environ ${nb(arr(ang))}°$."], f"$\\approx {nb(arr(ang))}°$")
    L.add("approfondissement", N, "Noé calcule $\\widehat{A}$ avec $\\cos \\widehat{A} = 0{,}5$ et trouve $1{,}047$. Quelle erreur a-t-il faite, et quelle est la bonne mesure en degrés ?",
          ["Sa calculatrice est en radians : $1{,}047$ rad.", "En mode degrés : $\\widehat{A} = 60°$."], "$60°$")

    # h) choisir l'outil — 4
    N = "choisir-le-bon-outil"
    L.add("intermediaire", N, "$ABC$ est rectangle en $A$ avec $AB = 9$ cm et $AC = 12$ cm. Calculer $BC$.", ["Triangle rectangle, deux côtés connus : théorème de Pythagore.", "$BC^2 = 9^2 + 12^2 = 81 + 144 = 225$, donc $BC = 15$ cm."], "$BC = 15$ cm")
    L.add("intermediaire", N, "On connaît deux longueurs d'un triangle rectangle et on cherche un angle aigu. Quel outil utilise-t-on : Thalès, Pythagore ou la trigonométrie ?",
          ["Thalès sert avec des parallèles, Pythagore relie trois longueurs.", "Pour un angle, on utilise la trigonométrie."], "La trigonométrie")
    L.add("approfondissement", N, "On veut prouver que deux droites sont parallèles à partir de longueurs. Quel théorème utilise-t-on ?", ["On compare deux rapports de longueurs.", "C'est la réciproque du théorème de Thalès."], "La réciproque de Thalès", acc("réciproque de Thalès", "la réciproque du théorème de Thalès"))
    L.add("approfondissement", N, "Vrai ou faux ? « Le théorème de Thalès ne s'applique que dans un triangle rectangle. » Justifier.",
          ["Thalès demande deux droites parallèles coupant deux sécantes, dans n'importe quel triangle.", "C'est la trigonométrie (et Pythagore) qui exigent un triangle rectangle. L'affirmation est fausse."], "Faux")
    return L.fin()


# =====================================================================
# 3e — MULTIPLES ET DIVISEURS
# =====================================================================
def _facteurs(n):
    f, d = {}, 2
    while d * d <= n:
        while n % d == 0:
            f[d] = f.get(d, 0) + 1
            n //= d
        d += 1
    if n > 1:
        f[n] = f.get(n, 0) + 1
    return f


def _fact_tex(f, sep=" \\times "):
    return sep.join(f"{p}^{{{k}}}" if k > 1 else f"{p}" for p, k in sorted(f.items()))


def _fact_txt(f):
    return " × ".join(f"{p}^{k}" if k > 1 else f"{p}" for p, k in sorted(f.items()))


def _premier(n):
    return n > 1 and all(n % d for d in range(2, math.isqrt(n) + 1))


@chapitre("troisieme", "multiples-diviseurs")
def g3_multiples_diviseurs():
    L = Lot(("troisieme", "multiples-diviseurs"))

    # a) vocabulaire et critères — 7
    N = "criteres-de-divisibilite"
    for d, n, k in [("application", 2340, 9), ("application", 7515, 5), ("application", 4572, 3), ("intermediaire", 1386, 4)]:
        oui = n % k == 0
        crit = {9: f"la somme des chiffres, ${'+'.join(str(n))} = {sum(map(int, str(n)))}$, est{'' if sum(map(int, str(n))) % 9 == 0 else ' pas'} un multiple de $9$",
                5: f"le dernier chiffre est ${str(n)[-1]}$",
                3: f"la somme des chiffres, ${'+'.join(str(n))} = {sum(map(int, str(n)))}$, est{'' if sum(map(int, str(n))) % 3 == 0 else ' pas'} un multiple de $3$",
                4: f"le nombre formé par les deux derniers chiffres, ${str(n)[-2:]}$, est{'' if int(str(n)[-2:]) % 4 == 0 else ' pas'} un multiple de $4$"}[k]
        L.add(d, N, f"Le nombre ${nb(n)}$ est-il divisible par ${k}$ ?", [f"Critère : {crit}.", f"{'Oui' if oui else 'Non'} : ${nb(n)}$ {'est' if oui else 'n est pas'} divisible par ${k}$.".replace("n est", "n'est")], "Oui" if oui else "Non")
    div36 = [d for d in range(1, 37) if 36 % d == 0]
    L.add("application", N, "Combien le nombre $36$ a-t-il de diviseurs ?", ["On les cherche par paires : $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$.",
          "Diviseurs : $1$ ; $2$ ; $3$ ; $4$ ; $6$ ; $9$ ; $12$ ; $18$ ; $36$, soit $9$ diviseurs."], f"${len(div36)}$ diviseurs")
    _ok(len(div36) == 9)
    L.add("intermediaire", N, "Vrai ou faux ? « $3\\,105$ est un multiple de $15$. » Justifier.", ["$15 = 3 \\times 5$. $3\\,105$ se termine par $5$ : divisible par $5$.", "$3 + 1 + 0 + 5 = 9$ : divisible par $3$. Donc divisible par $15$ ($3\\,105 = 15 \\times 207$) : vrai."], "Vrai")
    _ok(3105 == 15 * 207)
    L.add("intermediaire", N, "Quel chiffre $c$ faut-il écrire à la place des unités dans $47c$ pour obtenir un multiple de $9$ ?", ["Il faut que $4 + 7 + c$ soit un multiple de $9$ : $11 + c = 18$.", "$c = 7$ : $477 = 9 \\times 53$."], "$c = 7$")
    _ok(477 == 9 * 53)

    # b) nombres premiers — 6
    N = "nombres-premiers"
    for d, n in [("application", 91), ("application", 97), ("intermediaire", 119), ("intermediaire", 113)]:
        p = _premier(n)
        if p:
            c = [f"On teste les nombres premiers jusqu'à $\\sqrt{{{n}}} \\approx {nb(math.sqrt(n), 1)}$ : $2$, $3$, $5$, $7${', $11$' if n >= 121 else ''}.", f"Aucun ne divise ${n}$ : ${n}$ est premier."]
        else:
            f = _facteurs(n)
            q = min(f)
            c = [f"${n} = {q} \\times {n // q}$.", f"${n}$ a un diviseur autre que $1$ et lui-même : il n'est pas premier."]
        L.add(d, N, f"Le nombre ${n}$ est-il premier ?", c, "Oui" if p else "Non")
    L.add("application", N, "Quel est le plus petit nombre premier supérieur à $50$ ?", ["$51 = 3 \\times 17$, $52$ est pair.", "$53$ n'est divisible ni par $2$, ni par $3$, ni par $5$, ni par $7$ : c'est $53$."], "$53$")
    _ok(_premier(53) and not _premier(51) and not _premier(52))
    L.add("approfondissement", N, "Vrai ou faux ? « Tous les nombres premiers sont impairs. » Justifier.", ["$2$ est premier (ses seuls diviseurs sont $1$ et $2$) et il est pair.", "L'affirmation est fausse."], "Faux")

    # c) décomposition en facteurs premiers — 9
    N = "decomposition-en-facteurs-premiers"
    for d, n in [("application", 84), ("application", 90), ("application", 126), ("intermediaire", 360), ("intermediaire", 588), ("intermediaire", 1250), ("approfondissement", 2016)]:
        f = _facteurs(n)
        _ok(math.prod(p ** k for p, k in f.items()) == n)
        etapes, m = [], n
        for p in sorted(f):
            for _ in range(f[p]):
                etapes.append(f"${m} = {p} \\times {m // p}$")
                m //= p
        L.add(d, N, f"Décomposer ${nb(n)}$ en produit de facteurs premiers.", ["On divise par les nombres premiers dans l'ordre : " + " ; ".join(etapes) + ".", f"${nb(n)} = {_fact_tex(f)}$."], f"${_fact_tex(f)}$")
    L.add("intermediaire", N, "On sait que $1\\,400 = 2^3 \\times 5^2 \\times 7$. Le nombre $1\\,400$ est-il divisible par $35$ ?", ["$35 = 5 \\times 7$.", "$5$ et $7$ apparaissent dans la décomposition : $1\\,400 = 35 \\times 40$. Oui."], "Oui")
    _ok(1400 == 35 * 40 == 2 ** 3 * 25 * 7)
    L.add("approfondissement", N, "Vrai ou faux ? « $2^2 \\times 15$ est la décomposition de $60$ en produit de facteurs premiers. » Justifier.", ["$2^2 \\times 15 = 60$, mais $15 = 3 \\times 5$ n'est pas premier.", "La décomposition est $2^2 \\times 3 \\times 5$ : l'affirmation est fausse."], "Faux")

    # d) simplifier une fraction — 8
    N = "simplifier-une-fraction"
    for d, a, b in [("application", 18, 24), ("application", 35, 56), ("intermediaire", 84, 126), ("intermediaire", 90, 252), ("intermediaire", 132, 220), ("approfondissement", 360, 588)]:
        fa, fb = _facteurs(a), _facteurs(b)
        r = F(a, b)
        _ok(math.gcd(a, b) == a // r.numerator)
        L.add(d, N, f"Rendre irréductible la fraction $\\dfrac{{{a}}}{{{b}}}$.",
              [f"$\\dfrac{{{a}}}{{{b}}} = \\dfrac{{{_fact_tex(fa)}}}{{{_fact_tex(fb)}}}$.", f"On simplifie par les facteurs communs ($\\,{_fact_tex(_facteurs(math.gcd(a, b)))}$ en tout) : $\\dfrac{{{r.numerator}}}{{{r.denominator}}}$."],
              f"$\\dfrac{{{r.numerator}}}{{{r.denominator}}}$")
    L.add("intermediaire", N, "La fraction $\\dfrac{49}{120}$ est-elle irréductible ?", ["$49 = 7^2$ et $120 = 2^3 \\times 3 \\times 5$.", "Aucun facteur premier commun : oui, elle est irréductible."], "Oui")
    L.add("approfondissement", N, "Inès simplifie $\\dfrac{16}{64}$ en barrant les $6$ : elle obtient $\\dfrac{1}{4}$. Le résultat est-il juste, et la méthode correcte ?",
          ["$\\dfrac{16}{64} = \\dfrac{16 \\times 1}{16 \\times 4} = \\dfrac{1}{4}$ : le résultat est juste par hasard.", "Barrer des chiffres n'est pas une simplification : on divise numérateur et dénominateur par un même nombre. Méthode fausse."],
          "Résultat juste, méthode fausse", acc("résultat juste, méthode fausse", "juste par hasard"))

    # e) dénominateur commun — 6
    N = "denominateur-commun"
    for d, a, b, c, e, op in [("intermediaire", 7, 12, 5, 18, "+"), ("intermediaire", 5, 6, 3, 8, "+"), ("intermediaire", 11, 15, 7, 20, "-"), ("approfondissement", 7, 24, 5, 36, "+")]:
        m = b * e // math.gcd(b, e)
        res = F(a, b) + F(c, e) if op == "+" else F(a, b) - F(c, e)
        L.add(d, N, f"Calculer $\\dfrac{{{a}}}{{{b}}} {op} \\dfrac{{{c}}}{{{e}}}$ en utilisant le plus petit dénominateur commun.",
              [f"${b} = {_fact_tex(_facteurs(b))}$ et ${e} = {_fact_tex(_facteurs(e))}$ : le plus petit multiple commun est ${m}$.",
               f"$\\dfrac{{{a * (m // b)}}}{{{m}}} {op} \\dfrac{{{c * (m // e)}}}{{{m}}} = \\dfrac{{{a * (m // b) + (c * (m // e) if op == '+' else -c * (m // e))}}}{{{m}}}$" + ("." if res.denominator == m else f" $= {fl(res)}$.")],
              f"${fl(res)}$")
    L.add("application", N, "Quel est le plus petit multiple commun non nul de $12$ et $18$ ?", ["Multiples de $18$ : $18$ ; $36$ ; …", "$36$ est aussi un multiple de $12$ : c'est $36$."], "$36$")
    L.add("intermediaire", N, "Quel est le plus petit dénominateur commun de $\\dfrac{3}{14}$ et $\\dfrac{5}{21}$ ?", ["$14 = 2 \\times 7$ et $21 = 3 \\times 7$.", "Plus petit multiple commun : $2 \\times 3 \\times 7 = 42$."], "$42$")

    # f) problèmes — 8
    N = "problemes"
    L.add("intermediaire", N, "Un fleuriste a $84$ roses et $126$ tulipes. Il veut faire le plus grand nombre possible de bouquets identiques en utilisant toutes les fleurs. Combien de bouquets fera-t-il ?",
          ["Le nombre de bouquets divise $84$ et $126$ : on cherche leur plus grand diviseur commun.", "$84 = 2^2 \\times 3 \\times 7$ et $126 = 2 \\times 3^2 \\times 7$ : plus grand diviseur commun $2 \\times 3 \\times 7 = 42$.", "$42$ bouquets, de $2$ roses et $3$ tulipes."],
          "$42$ bouquets")
    _ok(math.gcd(84, 126) == 42)
    L.add("intermediaire", N, "Deux bus partent ensemble à $7$ h. L'un repasse toutes les $12$ min, l'autre toutes les $18$ min. À quelle heure repartiront-ils ensemble pour la première fois ?",
          ["On cherche le plus petit multiple commun de $12$ et $18$ : $36$.", "Ils repartent ensemble $36$ min plus tard, à $7$ h $36$."], "$7$ h $36$")
    L.add("approfondissement", N, "Un carreleur veut couvrir un sol rectangulaire de $360$ cm sur $252$ cm avec des dalles carrées identiques, les plus grandes possible, sans découpe. Quel est le côté d'une dalle ?",
          ["Le côté divise $360$ et $252$.", "$360 = 2^3 \\times 3^2 \\times 5$ et $252 = 2^2 \\times 3^2 \\times 7$ : plus grand diviseur commun $2^2 \\times 3^2 = 36$.", "Dalles de $36$ cm de côté."], "$36$ cm")
    _ok(math.gcd(360, 252) == 36)
    L.add("approfondissement", N, "Avec les dalles de $36$ cm de côté pour un sol de $360$ cm sur $252$ cm, combien de dalles faut-il ?", ["$360 \\div 36 = 10$ et $252 \\div 36 = 7$.", "$10 \\times 7 = 70$ dalles."], "$70$ dalles")
    L.add("intermediaire", N, "Deux phares clignotent : l'un toutes les $8$ s, l'autre toutes les $14$ s. Ils clignotent ensemble à minuit. Au bout de combien de secondes clignoteront-ils de nouveau ensemble ?",
          ["$8 = 2^3$ et $14 = 2 \\times 7$.", "Plus petit multiple commun : $2^3 \\times 7 = 56$ s."], "$56$ s")
    L.add("probleme", N, "Une classe de $30$ élèves et une classe de $24$ élèves doivent être réparties en équipes de même effectif, sans mélanger les classes et sans laisser personne. Quel est le plus grand effectif possible d'une équipe ?",
          ["L'effectif divise $30$ et $24$.", "$30 = 2 \\times 3 \\times 5$ et $24 = 2^3 \\times 3$ : plus grand diviseur commun $6$.", "Équipes de $6$ élèves ($5$ et $4$ équipes)."], "$6$ élèves")
    L.add("probleme", N, "Un engrenage a $18$ dents, l'autre $24$. On marque une dent de chacun, en contact. Au bout de combien de tours du petit engrenage les deux marques seront-elles de nouveau en contact ?",
          ["Le nombre de dents qui passent doit être un multiple commun de $18$ et $24$ : le plus petit est $72$.", "Le petit engrenage fait $72 \\div 18 = 4$ tours."], "$4$ tours")
    _ok(18 * 24 // math.gcd(18, 24) == 72)
    L.add("probleme", N, "Un nombre de bonbons est compris entre $100$ et $150$. On peut les partager équitablement entre $6$ enfants, ou entre $8$, ou entre $9$. Combien y a-t-il de bonbons ?",
          ["Le nombre est un multiple commun de $6$, $8$ et $9$ : multiple de $2^3 \\times 3^2 = 72$.", "Entre $100$ et $150$ : $144$."], "$144$ bonbons")
    _ok([n for n in range(100, 151) if n % 6 == 0 and n % 8 == 0 and n % 9 == 0] == [144])

    # g) erreurs et vrai-faux — 6
    N = "erreurs-et-vrai-faux"
    L.add("intermediaire", N, "Vrai ou faux ? « $1$ est un nombre premier. » Justifier.", ["Un nombre premier a exactement deux diviseurs : $1$ et lui-même.", "$1$ n'a qu'un seul diviseur : il n'est pas premier. Faux."], "Faux")
    L.add("intermediaire", N, "Vrai ou faux ? « Si un nombre est divisible par $4$ et par $6$, il est divisible par $24$. » Justifier.", ["Contre-exemple : $12$ est divisible par $4$ et par $6$, mais pas par $24$.", "L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Lucas décompose $72$ et écrit $72 = 8 \\times 9$. Quelle est la décomposition correcte en produit de facteurs premiers ?", ["$8$ et $9$ ne sont pas premiers : $8 = 2^3$ et $9 = 3^2$.", "$72 = 2^3 \\times 3^2$."], "$2^3 \\times 3^2$")
    L.add("approfondissement", N, "Vrai ou faux ? « La somme de deux nombres premiers est toujours paire. » Justifier.", ["Contre-exemple : $2 + 3 = 5$ est impair.", "L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Vrai ou faux ? « Le produit de deux nombres impairs est impair. » Justifier.", ["$(2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1$.", "C'est un nombre impair : l'affirmation est vraie."], "Vrai")
    L.add("approfondissement", N, "Sarah dit : « $\\dfrac{3}{8} + \\dfrac{1}{6} = \\dfrac{4}{14}$ ». Quel est le bon résultat ?", ["On n'additionne pas les dénominateurs : on prend un dénominateur commun, $24$.", "$\\dfrac{9}{24} + \\dfrac{4}{24} = \\dfrac{13}{24}$."], "$\\dfrac{13}{24}$")
    _ok(F(3, 8) + F(1, 6) == F(13, 24))
    return L.fin()


# =====================================================================
# 4e — RACINE CARRÉE
# =====================================================================
@chapitre("quatrieme", "racine-carree")
def g4_racine_carree():
    L = Lot(("quatrieme", "racine-carree"))

    # a) définition et existence — 6
    N = "definition-et-existence"
    L.add("application", N, "Calculer $\\sqrt{49}$.", ["$\\sqrt{49}$ est le nombre positif dont le carré vaut $49$ : $7^2 = 49$.", "$\\sqrt{49} = 7$."], "$7$")
    L.add("application", N, "Calculer $\\sqrt{0}$.", ["$0^2 = 0$ et $0 \\geqslant 0$."], "$0$")
    L.add("application", N, "Calculer $\\sqrt{1}$.", ["$1^2 = 1$ et $1 \\geqslant 0$."], "$1$")
    L.add("intermediaire", N, "Le nombre $\\sqrt{-9}$ existe-t-il ?", ["Un carré n'est jamais négatif : aucun nombre n'a pour carré $-9$.", "$\\sqrt{-9}$ n'existe pas."], "Non")
    L.add("intermediaire", N, "Vrai ou faux ? « $\\sqrt{25} = -5$, car $(-5)^2 = 25$. » Justifier.", ["Par définition, $\\sqrt{25}$ est le nombre **positif** dont le carré vaut $25$.", "$\\sqrt{25} = 5$ : l'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Pour quelles valeurs de $x$ parmi $-4$ ; $0$ ; $2{,}5$ ; $-0{,}1$ le nombre $\\sqrt{x}$ existe-t-il ?", ["$\\sqrt{x}$ existe seulement si $x \\geqslant 0$.", "Il existe pour $0$ et $2{,}5$."], "$0$ et $2{,}5$", ens("0", "2,5"))

    # b) carrés parfaits — 7
    N = "carres-parfaits"
    for d, n in [("application", 81), ("application", 144), ("application", 121), ("intermediaire", 400), ("intermediaire", 10000)]:
        r = math.isqrt(n)
        _ok(r * r == n)
        L.add(d, N, f"Calculer $\\sqrt{{{nb(n)}}}$.", [f"${nb(r)}^2 = {nb(n)}$ et ${nb(r)} \\geqslant 0$."], f"${nb(r)}$")
    L.add("intermediaire", N, "Parmi $50$ ; $64$ ; $90$ ; $100$ ; $120$, quels nombres sont des carrés parfaits ?", ["$64 = 8^2$ et $100 = 10^2$.", "$50$, $90$ et $120$ sont entre deux carrés consécutifs."], "$64$ et $100$", ens("64", "100"))
    L.add("approfondissement", N, "Calculer $\\sqrt{0{,}49}$.", ["$0{,}7^2 = 0{,}49$ et $0{,}7 \\geqslant 0$."], "$0{,}7$")

    # c) propriétés — 8
    N = "proprietes"
    for d, e, c, r in [
        ("application", "Calculer $(\\sqrt{13})^2$.", ["Le carré annule la racine : $(\\sqrt{a})^2 = a$ pour $a \\geqslant 0$."], "$13$"),
        ("application", "Calculer $\\sqrt{9^2}$.", ["La racine annule le carré d'un nombre positif : $\\sqrt{9^2} = 9$."], "$9$"),
        ("intermediaire", "Calculer $(\\sqrt{2{,}5})^2$.", ["$(\\sqrt{a})^2 = a$ : le résultat est $2{,}5$."], "$2{,}5$"),
        ("intermediaire", "Calculer $3 \\times (\\sqrt{7})^2$.", ["$(\\sqrt{7})^2 = 7$.", "$3 \\times 7 = 21$."], "$21$"),
        ("intermediaire", "Calculer $\\sqrt{(-6)^2}$.", ["Sous le radical : $(-6)^2 = 36$.", "$\\sqrt{36} = 6$."], "$6$"),
    ]:
        L.add(d, N, e, c, r)
    L.add("intermediaire", N, "Comparer $\\sqrt{50}$ et $7$.", ["$7 = \\sqrt{49}$.", "$50 > 49$ et la racine respecte l'ordre : $\\sqrt{50} > 7$."], "$\\sqrt{50} > 7$")
    L.add("approfondissement", N, "Ranger dans l'ordre croissant : $\\sqrt{30}$ ; $5$ ; $\\sqrt{20}$ ; $6$.", ["$5 = \\sqrt{25}$ et $6 = \\sqrt{36}$.", "$20 < 25 < 30 < 36$, donc $\\sqrt{20} < 5 < \\sqrt{30} < 6$."],
          "$\\sqrt{20} < 5 < \\sqrt{30} < 6$", acc("√20 < 5 < √30 < 6", "√20 ; 5 ; √30 ; 6"))
    L.add("approfondissement", N, "Calculer $(\\sqrt{5})^2 + \\sqrt{16} \\times \\sqrt{4}$.", ["$(\\sqrt{5})^2 = 5$ ; $\\sqrt{16} = 4$ ; $\\sqrt{4} = 2$.", "$5 + 4 \\times 2 = 5 + 8 = 13$."], "$13$")

    # d) encadrer — 8
    N = "encadrer-une-racine"
    for d, n in [("application", 20), ("application", 55), ("intermediaire", 75), ("intermediaire", 110), ("intermediaire", 200), ("approfondissement", 3)]:
        a = math.isqrt(n)
        _ok(a * a < n < (a + 1) ** 2)
        L.add(d, N, f"Encadrer $\\sqrt{{{n}}}$ entre deux entiers consécutifs.", [f"${a}^2 = {a * a}$ et ${a + 1}^2 = {(a + 1) ** 2}$.", f"${a * a} < {n} < {(a + 1) ** 2}$, donc ${a} < \\sqrt{{{n}}} < {a + 1}$."],
              f"${a} < \\sqrt{{{n}}} < {a + 1}$")
    L.add("intermediaire", N, "Entre quels entiers consécutifs se trouve le côté d'un carré de $90$ m² ?", ["Le côté vaut $\\sqrt{90}$ m.", "$9^2 = 81 < 90 < 100 = 10^2$ : le côté est entre $9$ m et $10$ m."], "$9 < \\sqrt{90} < 10$")
    L.add("approfondissement", N, "Combien de nombres entiers sont compris entre $\\sqrt{10}$ et $\\sqrt{60}$ ?", ["$3 < \\sqrt{10} < 4$ et $7 < \\sqrt{60} < 8$.", "Les entiers $4$, $5$, $6$ et $7$ conviennent : il y en a $4$."], "$4$")

    # e) côté d'un carré — 7
    N = "cote-d-un-carre"
    L.add("application", N, "Un carré a une aire de $64$ cm². Quelle est la longueur de son côté ?", ["$c = \\sqrt{64} = 8$ cm."], "$8$ cm")
    L.add("application", N, "Une salle carrée a une aire de $36$ m². Quel est son périmètre ?", ["Côté : $\\sqrt{36} = 6$ m.", "Périmètre : $4 \\times 6 = 24$ m."], "$24$ m")
    c = math.sqrt(30)
    L.add("intermediaire", N, "Un carré a une aire de $30$ cm². Donner la valeur exacte de son côté, puis un arrondi au millimètre.", ["$c = \\sqrt{30}$ cm.", f"$\\sqrt{{30}} \\approx {nb(c, 4)}$, soit environ ${nb(arr(c, 1))}$ cm."], f"$\\approx {nb(arr(c, 1))}$ cm")
    c = math.sqrt(250)
    L.add("intermediaire", N, "Une terrasse carrée a une aire de $250$ m². Calculer la longueur de son côté, arrondie au centimètre.", ["$c = \\sqrt{250}$ m.", f"$\\sqrt{{250}} \\approx {nb(c, 4)}$, soit environ ${nb(arr(c, 2))}$ m."], f"$\\approx {nb(arr(c, 2))}$ m")
    L.add("intermediaire", N, "Un carré a un côté de $\\sqrt{12}$ cm. Quelle est son aire ?", ["Aire $= (\\sqrt{12})^2 = 12$ cm²."], "$12$ cm²")
    L.add("probleme", N, "Un jardin carré a la même aire qu'un rectangle de $18$ m sur $8$ m. Quel est le côté du jardin ?", ["Aire du rectangle : $18 \\times 8 = 144$ m².", "Côté du carré : $\\sqrt{144} = 12$ m."], "$12$ m")
    c = math.sqrt(2) * 10
    L.add("probleme", N, "On dessine un carré dont l'aire est le double de celle d'un carré de $10$ cm de côté. Quel est son côté, arrondi au millimètre ?", ["Aire voulue : $2 \\times 100 = 200$ cm².", f"Côté : $\\sqrt{{200}} \\approx {nb(c, 4)}$ cm, soit environ ${nb(arr(c, 1))}$ cm."], f"$\\approx {nb(arr(c, 1))}$ cm")

    # f) valeurs approchées — 6
    N = "valeurs-approchees"
    for d, n, k in [("application", 2, 2), ("application", 10, 1), ("intermediaire", 7, 2), ("intermediaire", 150, 1)]:
        v = math.sqrt(n)
        L.add(d, N, f"Donner l'arrondi de $\\sqrt{{{n}}}$ au {'centième' if k == 2 else 'dixième'}.", [f"À la calculatrice : $\\sqrt{{{n}}} \\approx {nb(v, 5)}$.", f"Arrondi : ${nb(arr(v, k), k, garder=True)}$."], f"$\\approx {nb(arr(v, k), k, garder=True)}$")
    L.add("approfondissement", N, "La calculatrice affiche $\\sqrt{2} \\approx 1{,}414213562$. Calculer $1{,}414213562^2$ : obtient-on exactement $2$ ?", ["$1{,}414213562^2 \\approx 1{,}99999999979$, pas exactement $2$.", "$\\sqrt{2}$ n'est pas un nombre décimal : la calculatrice n'en donne qu'une valeur approchée. Non."], "Non")
    _ok(F("1.414213562") ** 2 != 2)
    L.add("approfondissement", N, "Vrai ou faux ? « $\\sqrt{2} = 1{,}414$. » Justifier.", ["$1{,}414^2 = 1{,}999\\,396 \\neq 2$.", "$1{,}414$ n'est qu'une valeur approchée de $\\sqrt{2}$ : l'affirmation est fausse."], "Faux")
    _ok(F("1.414") ** 2 == F("1.999396"))

    # g) pièges — 8
    N = "pieges-de-calcul"
    L.add("intermediaire", N, "Calculer $\\sqrt{16 + 9}$.", ["On calcule d'abord sous le radical : $16 + 9 = 25$.", "$\\sqrt{25} = 5$."], "$5$")
    L.add("intermediaire", N, "Ahmed écrit $\\sqrt{16 + 9} = \\sqrt{16} + \\sqrt{9} = 7$. Quelle est la bonne valeur ?", ["La racine ne se distribue pas sur une somme.", "$\\sqrt{16 + 9} = \\sqrt{25} = 5$, pas $7$."], "$5$")
    L.add("intermediaire", N, "Clara pense que $\\sqrt{16} = 8$, « la moitié de $16$ ». Quelle est la bonne valeur ?", ["$8^2 = 64 \\neq 16$.", "$4^2 = 16$ : $\\sqrt{16} = 4$."], "$4$")
    L.add("intermediaire", N, "Calculer $\\sqrt{100 - 36}$.", ["$100 - 36 = 64$.", "$\\sqrt{64} = 8$ (et non $10 - 6 = 4$)."], "$8$")
    L.add("approfondissement", N, "Vrai ou faux ? « Pour tout nombre positif $a$, $\\sqrt{a} < a$. » Justifier.", ["Contre-exemple : $\\sqrt{0{,}25} = 0{,}5 > 0{,}25$ (et $\\sqrt{1} = 1$).", "L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Vrai ou faux ? « $\\sqrt{36} + \\sqrt{64} = \\sqrt{100}$. » Justifier.", ["$\\sqrt{36} + \\sqrt{64} = 6 + 8 = 14$.", "$\\sqrt{100} = 10 \\neq 14$ : l'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Calculer $2\\sqrt{9} - \\sqrt{4}$.", ["$\\sqrt{9} = 3$ et $\\sqrt{4} = 2$.", "$2 \\times 3 - 2 = 4$."], "$4$")
    L.add("approfondissement", N, "Quel nombre positif $x$ vérifie $\\sqrt{x} = 9$ ?", ["$\\sqrt{x} = 9$ signifie $x = 9^2$.", "$x = 81$."], "$x = 81$")
    return L.fin()


# =====================================================================
# 5e — FRACTIONS
# =====================================================================
@chapitre("cinquieme", "fractions")
def g5_fractions():
    L = Lot(("cinquieme", "fractions"))

    # a) fraction quotient — 6
    N = "fraction-quotient"
    L.add("application", N, "Donner l'écriture décimale de $\\dfrac{3}{4}$.", ["$\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$."], "$0{,}75$")
    L.add("application", N, "Donner l'écriture décimale de $\\dfrac{7}{5}$.", ["$7 \\div 5 = 1{,}4$."], "$1{,}4$")
    L.add("application", N, "Quel nombre, multiplié par $7$, donne $3$ ? Donner le résultat sous forme de fraction.", ["C'est le quotient de $3$ par $7$ : $\\dfrac{3}{7}$ (car $7 \\times \\dfrac{3}{7} = 3$)."], "$\\dfrac{3}{7}$")
    L.add("intermediaire", N, "Compléter : $9 \\times \\ldots = 4$.", ["Le nombre cherché est le quotient $\\dfrac{4}{9}$."], "$\\dfrac{4}{9}$")
    L.add("intermediaire", N, "Écrire $2{,}35$ sous la forme d'une fraction décimale.", ["$2{,}35 = \\dfrac{235}{100}$."], "$\\dfrac{235}{100}$")
    L.add("approfondissement", N, "Vrai ou faux ? « $\\dfrac{1}{3} = 0{,}33$. » Justifier.", ["$3 \\times 0{,}33 = 0{,}99 \\neq 1$.", "$0{,}33$ n'est qu'une valeur approchée de $\\dfrac{1}{3}$ : l'affirmation est fausse."], "Faux")

    # b) fractions égales et simplification — 8
    N = "fractions-egales"
    for d, a, b, k, cible in [("application", 3, 5, 4, "den"), ("application", 2, 7, 3, "num"), ("intermediaire", 5, 6, 7, "den")]:
        if cible == "den":
            L.add(d, N, f"Compléter : $\\dfrac{{{a}}}{{{b}}} = \\dfrac{{\\ldots}}{{{b * k}}}$.", [f"${b} \\times {k} = {b * k}$ : on multiplie aussi le numérateur par ${k}$.", f"${a} \\times {k} = {a * k}$."], f"${a * k}$")
        else:
            L.add(d, N, f"Compléter : $\\dfrac{{{a}}}{{{b}}} = \\dfrac{{{a * k}}}{{\\ldots}}$.", [f"${a} \\times {k} = {a * k}$ : on multiplie aussi le dénominateur par ${k}$.", f"${b} \\times {k} = {b * k}$."], f"${b * k}$")
    for d, a, b in [("application", 12, 18), ("application", 15, 35), ("intermediaire", 24, 36), ("intermediaire", 45, 60)]:
        r = F(a, b)
        g = a // r.numerator
        L.add(d, N, f"Simplifier la fraction $\\dfrac{{{a}}}{{{b}}}$ le plus possible.", [f"${a}$ et ${b}$ sont dans la table de ${g}$ : ${a} = {g} \\times {r.numerator}$ et ${b} = {g} \\times {r.denominator}$.", f"$\\dfrac{{{a}}}{{{b}}} = \\dfrac{{{r.numerator}}}{{{r.denominator}}}$."],
              f"$\\dfrac{{{r.numerator}}}{{{r.denominator}}}$")
    L.add("approfondissement", N, "Les fractions $\\dfrac{6}{8}$ et $\\dfrac{9}{12}$ sont-elles égales ?", ["$\\dfrac{6}{8} = \\dfrac{3}{4}$ et $\\dfrac{9}{12} = \\dfrac{3}{4}$.", "Oui, elles sont égales."], "Oui")

    # c) comparer — 8
    N = "comparer-des-fractions"
    L.add("application", N, "Comparer $\\dfrac{5}{9}$ et $\\dfrac{7}{9}$.", ["Même dénominateur : on compare les numérateurs, $5 < 7$."], "$\\dfrac{5}{9} < \\dfrac{7}{9}$")
    L.add("application", N, "La fraction $\\dfrac{11}{8}$ est-elle plus grande ou plus petite que $1$ ?", ["Le numérateur est plus grand que le dénominateur : $\\dfrac{11}{8} > 1$."], "$\\dfrac{11}{8} > 1$")
    L.add("application", N, "Comparer $\\dfrac{4}{7}$ et $1$.", ["$4 < 7$ : $\\dfrac{4}{7} < 1$."], "$\\dfrac{4}{7} < 1$")
    L.add("intermediaire", N, "Comparer $\\dfrac{2}{3}$ et $\\dfrac{5}{6}$.", ["On écrit avec le même dénominateur : $\\dfrac{2}{3} = \\dfrac{4}{6}$.", "$\\dfrac{4}{6} < \\dfrac{5}{6}$, donc $\\dfrac{2}{3} < \\dfrac{5}{6}$."], "$\\dfrac{2}{3} < \\dfrac{5}{6}$")
    L.add("intermediaire", N, "Comparer $\\dfrac{7}{10}$ et $\\dfrac{3}{5}$.", ["$\\dfrac{3}{5} = \\dfrac{6}{10}$.", "$\\dfrac{7}{10} > \\dfrac{6}{10}$, donc $\\dfrac{7}{10} > \\dfrac{3}{5}$."], "$\\dfrac{7}{10} > \\dfrac{3}{5}$")
    L.add("intermediaire", N, "Ranger dans l'ordre croissant : $\\dfrac{5}{4}$ ; $\\dfrac{3}{8}$ ; $\\dfrac{1}{2}$.", ["Sur $8$ : $\\dfrac{10}{8}$ ; $\\dfrac{3}{8}$ ; $\\dfrac{4}{8}$.", "$\\dfrac{3}{8} < \\dfrac{1}{2} < \\dfrac{5}{4}$."],
          "$\\dfrac{3}{8} < \\dfrac{1}{2} < \\dfrac{5}{4}$", acc("3/8 < 1/2 < 5/4", "3/8 ; 1/2 ; 5/4"))
    L.add("approfondissement", N, "Vrai ou faux ? « $\\dfrac{3}{4} < \\dfrac{3}{5}$, car $4 < 5$. » Justifier.", ["Avec le même numérateur, la fraction au plus grand dénominateur est la plus petite (parts plus petites).", "$\\dfrac{3}{4} = 0{,}75 > 0{,}6 = \\dfrac{3}{5}$ : l'affirmation est fausse."], "Faux")
    L.add("probleme", N, "Léo a mangé $\\dfrac{3}{8}$ d'une pizza et Zoé $\\dfrac{1}{4}$ de la même pizza. Qui en a mangé le plus ?", ["$\\dfrac{1}{4} = \\dfrac{2}{8}$.", "$\\dfrac{3}{8} > \\dfrac{2}{8}$ : Léo en a mangé le plus."], "Léo")

    # d) additionner et soustraire — 9
    N = "additionner-soustraire"
    for d, a, b, c, e, op in [("application", 2, 7, 3, 7, "+"), ("application", 9, 11, 4, 11, "-"), ("intermediaire", 1, 3, 5, 6, "+"), ("intermediaire", 3, 4, 5, 12, "+"),
                              ("intermediaire", 7, 10, 2, 5, "-"), ("approfondissement", 5, 6, 7, 18, "-")]:
        res = F(a, b) + F(c, e) if op == "+" else F(a, b) - F(c, e)
        if b == e:
            c1 = [f"Même dénominateur : on {'additionne' if op == '+' else 'soustrait'} les numérateurs.", f"$\\dfrac{{{a} {op} {c}}}{{{b}}} = \\dfrac{{{a + c if op == '+' else a - c}}}{{{b}}}$" + ("." if res.denominator == b else f" $= {fl(res)}$.")]
        else:
            m = max(b, e)
            _ok(m % b == 0 and m % e == 0)
            ka, kc = m // b, m // e
            s = a * ka + c * kc if op == "+" else a * ka - c * kc
            petit, gros = (b, a) if b < m else (e, c)
            kk = m // petit
            c1 = [f"${m} = {petit} \\times {kk}$ : $\\dfrac{{{gros}}}{{{petit}}} = \\dfrac{{{gros * kk}}}{{{m}}}$.",
                  f"$\\dfrac{{{a * ka}}}{{{m}}} {op} \\dfrac{{{c * kc}}}{{{m}}} = \\dfrac{{{s}}}{{{m}}}$" + ("." if res.denominator == m else f" $= {fl(res)}$.")]
            _ok(F(s, m) == res)
        L.add(d, N, f"Calculer $\\dfrac{{{a}}}{{{b}}} {op} \\dfrac{{{c}}}{{{e}}}$ et donner le résultat simplifié.", c1, f"${fl(res)}$")
    L.add("intermediaire", N, "Calculer $2 + \\dfrac{3}{5}$ sous la forme d'une seule fraction.", ["$2 = \\dfrac{10}{5}$.", "$\\dfrac{10}{5} + \\dfrac{3}{5} = \\dfrac{13}{5}$."], "$\\dfrac{13}{5}$")
    L.add("approfondissement", N, "Max écrit : $\\dfrac{1}{2} + \\dfrac{1}{4} = \\dfrac{2}{6}$. Quel est le bon résultat ?", ["On n'additionne pas les dénominateurs : $\\dfrac{1}{2} = \\dfrac{2}{4}$.", "$\\dfrac{2}{4} + \\dfrac{1}{4} = \\dfrac{3}{4}$."], "$\\dfrac{3}{4}$")
    L.add("probleme", N, "Dans un gâteau, Lina mange $\\dfrac{1}{6}$ et son frère $\\dfrac{5}{12}$. Quelle fraction du gâteau reste-t-il ?", ["Mangé : $\\dfrac{2}{12} + \\dfrac{5}{12} = \\dfrac{7}{12}$.", "Reste : $\\dfrac{12}{12} - \\dfrac{7}{12} = \\dfrac{5}{12}$."], "$\\dfrac{5}{12}$")
    _ok(1 - F(1, 6) - F(5, 12) == F(5, 12))

    # e) fraction d'une quantité — 7
    N = "fraction-d-une-quantite"
    for d, a, b, q, ctx, u in [("application", 2, 3, 45, "Calculer $\\dfrac{2}{3}$ de $45$.", ""), ("application", 3, 4, 28, "Calculer $\\dfrac{3}{4}$ de $28$ €.", " €"),
                               ("intermediaire", 5, 8, 120, "Un collège compte $120$ élèves de 5e ; les $\\dfrac{5}{8}$ sont demi-pensionnaires. Combien d'élèves de 5e sont demi-pensionnaires ?", " élèves"),
                               ("intermediaire", 7, 10, 2500, "Un réservoir de $2\\,500$ L est rempli aux $\\dfrac{7}{10}$. Quel volume d'eau contient-il ?", " L"),
                               ("intermediaire", 3, 5, 85, "Sur un trajet de $85$ km, Mia a déjà parcouru les $\\dfrac{3}{5}$. Quelle distance a-t-elle parcourue ?", " km")]:
        r = F(a, b) * q
        _ok(r.denominator == 1)
        L.add(d, N, ctx, [f"$\\dfrac{{{a}}}{{{b}}} \\times {nb(q)} = \\dfrac{{{a} \\times {nb(q)}}}{{{b}}}$.", f"$= {nb(r)}${u}." if u else f"$= {nb(r)}$."], f"${nb(r)}${u}")
    L.add("approfondissement", N, "Un livre a $240$ pages. Tom en a lu les $\\dfrac{3}{8}$. Combien de pages lui reste-t-il à lire ?", ["Lu : $\\dfrac{3}{8} \\times 240 = 90$ pages.", "Reste : $240 - 90 = 150$ pages."], "$150$ pages")
    L.add("probleme", N, "Une classe de $28$ élèves : $\\dfrac{1}{4}$ des élèves font du football, $\\dfrac{2}{7}$ font de la danse, les autres ne font pas de sport. Combien d'élèves ne font pas de sport ?",
          ["Football : $\\dfrac{1}{4} \\times 28 = 7$. Danse : $\\dfrac{2}{7} \\times 28 = 8$.", "Sans sport : $28 - 7 - 8 = 13$ élèves."], "$13$ élèves")

    # f) fractions et pourcentages — 6
    N = "fractions-et-pourcentages"
    L.add("application", N, "Écrire $\\dfrac{3}{4}$ sous forme de pourcentage.", ["$\\dfrac{3}{4} = \\dfrac{75}{100}$, soit $75\\,\\%$."], "$75\\,\\%$")
    L.add("application", N, "Écrire $\\dfrac{2}{5}$ sous forme de pourcentage.", ["$\\dfrac{2}{5} = \\dfrac{40}{100}$, soit $40\\,\\%$."], "$40\\,\\%$")
    L.add("intermediaire", N, "Écrire $35\\,\\%$ sous la forme d'une fraction simplifiée.", ["$35\\,\\% = \\dfrac{35}{100}$.", "On simplifie par $5$ : $\\dfrac{7}{20}$."], "$\\dfrac{7}{20}$")
    L.add("intermediaire", N, "Calculer $25\\,\\%$ de $64$ en utilisant une fraction.", ["$25\\,\\% = \\dfrac{1}{4}$.", "$\\dfrac{1}{4} \\times 64 = 16$."], "$16$")
    L.add("intermediaire", N, "Dans une classe, $\\dfrac{9}{20}$ des élèves portent des lunettes. Quel pourcentage cela représente-t-il ?", ["$\\dfrac{9}{20} = \\dfrac{45}{100}$.", "Soit $45\\,\\%$."], "$45\\,\\%$")
    L.add("approfondissement", N, "Vrai ou faux ? « $\\dfrac{1}{5}$ et $20\\,\\%$ représentent la même proportion. » Justifier.", ["$\\dfrac{1}{5} = \\dfrac{20}{100} = 20\\,\\%$.", "L'affirmation est vraie."], "Vrai")

    # g) entier + fraction — 6
    N = "entier-plus-fraction"
    for d, a, b in [("application", 17, 5), ("intermediaire", 23, 4), ("intermediaire", 31, 6), ("approfondissement", 50, 7)]:
        q, r = divmod(a, b)
        L.add(d, N, f"Écrire $\\dfrac{{{a}}}{{{b}}}$ comme la somme d'un entier et d'une fraction inférieure à $1$.", [f"${a} = {b} \\times {q} + {r}$.", f"$\\dfrac{{{a}}}{{{b}}} = {q} + \\dfrac{{{r}}}{{{b}}}$."], f"${q} + \\dfrac{{{r}}}{{{b}}}$")
    L.add("intermediaire", N, "Entre quels entiers consécutifs se trouve $\\dfrac{29}{8}$ ?", ["$29 = 8 \\times 3 + 5$, donc $\\dfrac{29}{8} = 3 + \\dfrac{5}{8}$.", "$3 < \\dfrac{29}{8} < 4$."], "$3 < \\dfrac{29}{8} < 4$")
    L.add("probleme", N, "Une recette demande $\\dfrac{11}{4}$ de tasse de farine. Combien de tasses pleines faut-il, et quelle fraction de tasse en plus ?", ["$11 = 4 \\times 2 + 3$.", "$\\dfrac{11}{4} = 2 + \\dfrac{3}{4}$ : $2$ tasses pleines et $\\dfrac{3}{4}$ de tasse."],
          "$2 + \\dfrac{3}{4}$", acc("2 + 3/4", "2 et 3/4"))
    return L.fin()


# =====================================================================
# 5e — ANGLES ET TRIANGLES
# =====================================================================
@chapitre("cinquieme", "triangles-angles")
def g5_triangles_angles():
    L = Lot(("cinquieme", "triangles-angles"))

    # a) complémentaires, supplémentaires — 7
    N = "complementaires-supplementaires"
    for d, a, typ in [("application", 35, "complémentaire"), ("application", 64, "supplémentaire"), ("application", 128, "supplémentaire"), ("intermediaire", F(275, 10), "complémentaire")]:
        tot = 90 if typ == "complémentaire" else 180
        L.add(d, N, f"Quelle est la mesure de l'angle {typ} d'un angle de ${nb(a)}°$ ?", [f"Deux angles {typ}s ont pour somme ${tot}°$.", f"${tot} - {nb(a)} = {nb(tot - F(a))}$."], f"${nb(tot - F(a))}°$")
    L.add("intermediaire", N, "Deux angles supplémentaires sont égaux. Combien mesure chacun d'eux ?", ["Leur somme vaut $180°$.", "$180 \\div 2 = 90°$ : ce sont deux angles droits."], "$90°$")
    L.add("approfondissement", N, "Vrai ou faux ? « Un angle obtus peut avoir un complémentaire. » Justifier.", ["Un angle obtus mesure plus de $90°$.", "Deux angles complémentaires ont pour somme $90°$ : un angle obtus n'a pas de complémentaire. Faux."], "Faux")
    L.add("approfondissement", N, "Deux angles sont complémentaires et l'un mesure le double de l'autre. Combien mesure le plus petit ?", ["$x + 2x = 90$, donc $3x = 90$.", "$x = 30°$ (l'autre mesure $60°$)."], "$30°$")

    # b) opposés par le sommet — 6
    N = "angles-opposes-par-le-sommet"
    L.add("application", N, "Deux droites sécantes forment un angle de $47°$. Combien mesure l'angle opposé par le sommet ?", ["Deux angles opposés par le sommet ont la même mesure."], "$47°$")
    L.add("application", N, "Deux droites sécantes forment un angle de $47°$. Combien mesure un angle adjacent à celui-ci (formé par les mêmes droites) ?", ["Ces deux angles forment un angle plat : ils sont supplémentaires.", "$180 - 47 = 133°$."], "$133°$")
    L.add("intermediaire", N, "Deux droites sécantes forment quatre angles. L'un mesure $118°$. Donner la mesure du plus petit des quatre angles.", ["Les angles adjacents à celui de $118°$ mesurent $180 - 118 = 62°$.", "Les quatre angles mesurent $118°$, $62°$, $118°$, $62°$ : le plus petit mesure $62°$."], "$62°$")
    L.add("intermediaire", N, "Deux droites sécantes forment quatre angles. Quelle est la somme de ces quatre angles ?", ["Ils font un tour complet autour du point d'intersection.", "Somme : $360°$."], "$360°$")
    L.add("approfondissement", N, "Deux droites sécantes forment deux angles opposés par le sommet de mesures $(3x + 10)°$ et $(5x - 20)°$. Calculer $x$.", ["Angles opposés par le sommet : $3x + 10 = 5x - 20$.", "$30 = 2x$, donc $x = 15$ (les angles mesurent $55°$)."], "$x = 15$")
    L.add("approfondissement", N, "Vrai ou faux ? « Deux angles de même mesure sont toujours opposés par le sommet. » Justifier.", ["Deux angles de $40°$ dessinés à deux endroits différents ont la même mesure sans avoir de sommet commun.", "La réciproque est fausse : l'affirmation est fausse."], "Faux")

    # c) parallèles et angles — 8
    N = "paralleles-et-angles"
    L.add("application", N, "Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure $72°$. Combien mesure l'autre angle alterne-interne ?", ["Si deux droites parallèles sont coupées par une sécante, les angles alternes-internes ont la même mesure."], "$72°$")
    L.add("application", N, "Deux droites parallèles sont coupées par une sécante. Un angle mesure $105°$. Combien mesure l'angle correspondant ?", ["Avec des droites parallèles, deux angles correspondants ont la même mesure."], "$105°$")
    L.add("intermediaire", N, "Deux droites parallèles sont coupées par une sécante. Un angle mesure $56°$. Combien mesure l'angle qui lui est adjacent sur la même droite (supplémentaire) ?", ["Les deux angles forment un angle plat.", "$180 - 56 = 124°$."], "$124°$")
    L.add("intermediaire", N, "Deux droites parallèles $(d_1)$ et $(d_2)$ sont coupées par une sécante. Sur $(d_1)$, un angle mesure $63°$. Combien mesure l'angle alterne-interne situé sur $(d_2)$ ?", ["Les droites sont parallèles : les angles alternes-internes sont égaux."], "$63°$")
    L.add("intermediaire", N, "Deux droites parallèles sont coupées par une sécante. Entre les deux parallèles et du même côté de la sécante, un angle mesure $70°$. Combien mesure l'autre angle situé entre les parallèles, du même côté ?",
          ["L'angle adjacent au second (sur la même droite) est alterne-interne avec le premier : il mesure $70°$.", "Le second mesure donc $180 - 70 = 110°$."], "$110°$")
    L.add("approfondissement", N, "Dans un trapèze $ABCD$ de bases $(AB) \\parallel (CD)$, $\\widehat{BAD} = 65°$. Combien mesure $\\widehat{ADC}$ ?", ["La sécante $(AD)$ coupe les parallèles $(AB)$ et $(CD)$ : les deux angles sont du même côté, entre les parallèles.", "Ils sont supplémentaires : $180 - 65 = 115°$."], "$115°$")
    L.add("approfondissement", N, "Vrai ou faux ? « Deux angles alternes-internes ont toujours la même mesure. » Justifier.", ["C'est vrai seulement si les deux droites coupées par la sécante sont parallèles.", "Sans parallélisme, les mesures peuvent différer : l'affirmation est fausse."], "Faux")
    L.add("probleme", N, "Une route rectiligne coupe deux rails parallèles. Elle fait avec le premier rail un angle de $38°$. Quel angle aigu fait-elle avec le second rail ?", ["Les rails sont parallèles : les angles correspondants sont égaux.", "La route fait aussi un angle aigu de $38°$ avec le second rail."], "$38°$")

    # d) réciproques : parallélisme — 5
    N = "demontrer-un-parallelisme"
    L.add("intermediaire", N, "Deux droites sont coupées par une sécante ; deux angles alternes-internes mesurent $54°$ et $54°$. Les droites sont-elles parallèles ?", ["Si deux angles alternes-internes ont la même mesure, alors les droites sont parallèles."], "Oui")
    L.add("intermediaire", N, "Deux droites sont coupées par une sécante ; deux angles correspondants mesurent $81°$ et $79°$. Les droites sont-elles parallèles ?", ["Si les droites étaient parallèles, ces angles correspondants seraient égaux.", "$81 \\neq 79$ : les droites ne sont pas parallèles."], "Non")
    L.add("approfondissement", N, "Deux droites sont coupées par une sécante ; deux angles alternes-internes mesurent $(2x + 8)°$ et $64°$, avec $x = 28$. Les droites sont-elles parallèles ?", ["$2 \\times 28 + 8 = 64$ : les angles alternes-internes sont égaux.", "Les droites sont parallèles."], "Oui")
    L.add("approfondissement", N, "Deux droites coupées par une sécante forment, du même côté et entre les deux droites, des angles de $112°$ et $68°$. Les droites sont-elles parallèles ?", ["L'angle adjacent à celui de $112°$ (sur la même droite) mesure $180 - 112 = 68°$.", "Il est alterne-interne avec l'angle de $68°$ : deux angles alternes-internes égaux, donc les droites sont parallèles."], "Oui")
    L.add("probleme", N, "Sur une échelle, chaque barreau fait un angle de $90°$ avec le montant gauche. Les barreaux sont-ils parallèles entre eux ?", ["Les barreaux et le montant forment des angles correspondants égaux ($90°$).", "Les barreaux sont parallèles."], "Oui")

    # e) somme des angles — 9
    N = "somme-des-angles-du-triangle"
    for d, a, b in [("application", 50, 70), ("application", 35, 95), ("application", 90, 28), ("intermediaire", F(425, 10), 67)]:
        c = 180 - F(a) - F(b)
        L.add(d, N, f"Dans un triangle $ABC$, $\\widehat{{A}} = {nb(a)}°$ et $\\widehat{{B}} = {nb(b)}°$. Calculer $\\widehat{{C}}$.", ["La somme des angles d'un triangle vaut $180°$.", f"$\\widehat{{C}} = 180 - {nb(a)} - {nb(b)} = {nb(c)}°$."], f"${nb(c)}°$")
    L.add("intermediaire", N, "Un triangle a deux angles de $45°$. Combien mesure le troisième, et quelle est la nature du triangle ?", ["$180 - 45 - 45 = 90°$.", "Il est rectangle (angle de $90°$) et isocèle (deux angles égaux)."], "$90°$")
    L.add("intermediaire", N, "Peut-on construire un triangle dont les angles mesurent $60°$, $70°$ et $40°$ ?", ["$60 + 70 + 40 = 170 \\neq 180$.", "Non, ce triangle n'existe pas."], "Non")
    L.add("approfondissement", N, "Dans un triangle, un angle mesure $40°$ et les deux autres sont égaux. Combien mesure chacun d'eux ?", ["$180 - 40 = 140$.", "$140 \\div 2 = 70°$."], "$70°$")
    L.add("approfondissement", N, "Les angles d'un triangle mesurent $x$, $2x$ et $3x$. Calculer $x$.", ["$x + 2x + 3x = 180$, soit $6x = 180$.", "$x = 30°$ (les angles mesurent $30°$, $60°$, $90°$)."], "$30°$")
    L.add("approfondissement", N, "Vrai ou faux ? « Un triangle peut avoir deux angles obtus. » Justifier.", ["Deux angles obtus mesurent ensemble plus de $180°$.", "La somme des trois angles dépasserait $180°$ : l'affirmation est fausse."], "Faux")

    # f) triangles particuliers — 8
    N = "triangles-particuliers"
    L.add("application", N, "Combien mesure chaque angle d'un triangle équilatéral ?", ["Les trois angles sont égaux et leur somme vaut $180°$.", "$180 \\div 3 = 60°$."], "$60°$")
    L.add("application", N, "$ABC$ est isocèle en $A$ et $\\widehat{B} = 52°$. Combien mesure $\\widehat{C}$ ?", ["Dans un triangle isocèle en $A$, les angles à la base $\\widehat{B}$ et $\\widehat{C}$ sont égaux."], "$52°$")
    L.add("intermediaire", N, "$ABC$ est isocèle en $A$ et $\\widehat{B} = 52°$. Combien mesure $\\widehat{A}$ ?", ["$\\widehat{C} = \\widehat{B} = 52°$.", "$\\widehat{A} = 180 - 52 - 52 = 76°$."], "$76°$")
    L.add("intermediaire", N, "$DEF$ est isocèle en $D$ et $\\widehat{D} = 30°$. Combien mesure $\\widehat{E}$ ?", ["$\\widehat{E} + \\widehat{F} = 180 - 30 = 150°$ et $\\widehat{E} = \\widehat{F}$.", "$\\widehat{E} = 75°$."], "$75°$")
    L.add("intermediaire", N, "Un triangle rectangle a un angle aigu de $34°$. Combien mesure l'autre angle aigu ?", ["Les deux angles aigus d'un triangle rectangle sont complémentaires.", "$90 - 34 = 56°$."], "$56°$")
    L.add("intermediaire", N, "Un triangle a des angles de $50°$, $80°$ et $50°$. Quelle est sa nature ?", ["Deux angles égaux : le triangle est isocèle (et pas équilatéral, ni rectangle)."], "Isocèle")
    L.add("approfondissement", N, "Un triangle isocèle a un angle de $100°$. Combien mesurent ses deux autres angles ?", ["L'angle de $100°$ est obtus : ce ne peut être qu'un angle principal (deux angles de $100°$ dépasseraient $180°$).", "Les angles à la base mesurent $(180 - 100) \\div 2 = 40°$."], "$40°$")
    L.add("approfondissement", N, "Vrai ou faux ? « Un triangle rectangle peut être équilatéral. » Justifier.", ["Un triangle équilatéral a trois angles de $60°$.", "Il n'a pas d'angle droit : l'affirmation est fausse."], "Faux")

    # g) inégalité triangulaire — 7
    N = "inegalite-triangulaire"
    for d, a, b, c in [("application", 4, 5, 7), ("application", 3, 4, 9), ("intermediaire", 5, 7, 12), ("intermediaire", F(45, 10), F(62, 10), 10)]:
        g = max(a, b, c)
        s = F(a) + F(b) + F(c) - F(g)
        rep = "Oui" if s > g else ("Oui, mais il est aplati" if s == g else "Non")
        expl = "Le plus grand côté est plus petit que la somme des deux autres : on peut le construire." if s > g else ("Égalité : les trois points sont alignés, le triangle est aplati." if s == g else "Le plus grand côté est plus grand que la somme des deux autres : impossible.")
        L.add(d, N, f"Peut-on construire un triangle dont les côtés mesurent ${nb(a)}$ cm, ${nb(b)}$ cm et ${nb(c)}$ cm ?",
              [f"On compare le plus grand côté à la somme des deux autres : ${nb(s)}$ {'>' if s > g else ('=' if s == g else '<')} ${nb(g)}$.", expl],
              rep, acc("oui, aplati", "aplati") if s == g else None)
    L.add("intermediaire", N, "Un triangle a deux côtés de $6$ cm et $9$ cm. Le troisième côté peut-il mesurer $16$ cm ?", ["$6 + 9 = 15 < 16$ : impossible.", "Non."], "Non")
    L.add("approfondissement", N, "Un triangle a deux côtés de $6$ cm et $9$ cm. Entre quelles valeurs entières le troisième côté peut-il être compris (triangle non aplati) ? Donner la plus grande valeur entière possible.", ["Le troisième côté doit être inférieur à $6 + 9 = 15$ cm (et supérieur à $9 - 6 = 3$ cm).", "Plus grande valeur entière : $14$ cm."], "$14$ cm")
    L.add("probleme", N, "Trois villages $A$, $B$, $C$ : $AB = 12$ km et $BC = 5$ km. Quelle est la distance maximale possible entre $A$ et $C$ ?", ["Inégalité triangulaire : $AC \\leqslant AB + BC = 17$ km.", "Le maximum, $17$ km, est atteint si $B$ est sur le segment $[AC]$."], "$17$ km")
    return L.fin()


# =====================================================================
# 6e — CONFIGURATIONS PLANES
# =====================================================================
@chapitre("sixieme", "configurations-planes")
def g6_configurations_planes():
    L = Lot(("sixieme", "configurations-planes"))

    # a) notations — 6
    N = "notations"
    L.add("application", N, "Que désigne la notation $[AB]$ : une droite, une demi-droite ou un segment ?", ["Les crochets des deux côtés : on s'arrête en $A$ et en $B$.", "$[AB]$ est un segment."], "Un segment")
    L.add("application", N, "Comment appelle-t-on l'objet noté $(AB)$ : une droite, une demi-droite ou un segment ?", ["Les parenthèses : la ligne continue des deux côtés.", "$(AB)$ est une droite."], "Une droite")
    L.add("application", N, "Quelle figure la notation $[AB)$ représente-t-elle : une droite, une demi-droite ou un segment ?", ["Un crochet du côté de $A$ (on s'arrête en $A$), une parenthèse du côté de $B$ (on continue).", "$[AB)$ est une demi-droite d'origine $A$."], "Une demi-droite")
    L.add("intermediaire", N, "Combien de droites passent par deux points distincts $A$ et $B$ ?", ["Par deux points distincts passe une seule droite : $(AB)$."], "$1$")
    L.add("intermediaire", N, "Quelle est la différence entre $AB$ et $[AB]$ ?", ["$[AB]$ est un objet (le segment) ; $AB$ est un nombre : sa longueur."], "$AB$ est une longueur", acc("AB est une longueur", "une longueur"))
    L.add("approfondissement", N, "Vrai ou faux ? « Les demi-droites $[AB)$ et $[BA)$ sont les mêmes. » Justifier.", ["$[AB)$ part de $A$ et passe par $B$ ; $[BA)$ part de $B$ et passe par $A$.", "Elles n'ont ni la même origine ni le même sens : l'affirmation est fausse."], "Faux")

    # b) distances et milieu — 7
    N = "distances-et-milieu"
    L.add("application", N, "$M$ est le milieu du segment $[AB]$ et $AB = 9$ cm. Calculer $AM$.", ["Le milieu partage le segment en deux longueurs égales.", "$AM = 9 \\div 2 = 4{,}5$ cm."], "$4{,}5$ cm")
    L.add("application", N, "$I$ est le milieu de $[CD]$ et $CI = 3{,}2$ cm. Calculer $CD$.", ["$CD = 2 \\times CI = 2 \\times 3{,}2 = 6{,}4$ cm."], "$6{,}4$ cm")
    L.add("intermediaire", N, "$A$, $B$ et $C$ sont alignés dans cet ordre, avec $AB = 5$ cm et $BC = 3{,}5$ cm. Calculer $AC$.", ["$B$ est entre $A$ et $C$ : $AC = AB + BC$.", "$AC = 5 + 3{,}5 = 8{,}5$ cm."], "$8{,}5$ cm")
    L.add("intermediaire", N, "$A$, $B$, $C$ sont alignés dans cet ordre ; $AC = 12$ cm et $AB = 7{,}5$ cm. Calculer $BC$.", ["$BC = AC - AB = 12 - 7{,}5 = 4{,}5$ cm."], "$4{,}5$ cm")
    L.add("intermediaire", N, "$M$ est le milieu de $[AB]$ avec $AB = 10$ cm, et $N$ est le milieu de $[AM]$. Calculer $NB$.", ["$AM = MB = 5$ cm, puis $AN = NM = 2{,}5$ cm.", "$NB = NM + MB = 2{,}5 + 5 = 7{,}5$ cm."], "$7{,}5$ cm")
    L.add("approfondissement", N, "$AM = MB = 4$ cm, mais $AB = 6$ cm. Le point $M$ est-il le milieu de $[AB]$ ?", ["Si $M$ était le milieu, il serait sur $[AB]$ et $AB = AM + MB = 8$ cm.", "$AB = 6 \\neq 8$ : $M$ n'est pas sur $[AB]$, ce n'est pas le milieu."], "Non")
    L.add("probleme", N, "Sur une route droite, la boulangerie est à $800$ m de l'école et la mairie est exactement au milieu. La poste est au milieu entre l'école et la mairie. À quelle distance de la boulangerie est la poste ?",
          ["École–mairie : $400$ m. École–poste : $200$ m.", "Poste–boulangerie : $800 - 200 = 600$ m."], "$600$ m")

    # c) cercle et disque — 8
    N = "cercle-et-disque"
    L.add("application", N, "Un cercle a un rayon de $3{,}5$ cm. Quelle est la longueur d'un diamètre ?", ["Diamètre $= 2 \\times$ rayon $= 7$ cm."], "$7$ cm")
    L.add("application", N, "Un cercle a un diamètre de $13$ cm. Quel est son rayon ?", ["Rayon $= 13 \\div 2 = 6{,}5$ cm."], "$6{,}5$ cm")
    L.add("application", N, "Quel est l'ensemble des points situés à $3$ cm d'un point $O$ ?", ["Tous ces points sont à la même distance de $O$ : ils forment un cercle.", "C'est le cercle de centre $O$ et de rayon $3$ cm."],
          "Le cercle de centre $O$ et de rayon $3$ cm", acc("le cercle de centre O et de rayon 3 cm", "cercle de centre O de rayon 3 cm"))
    L.add("intermediaire", N, "Un cercle a pour centre $O$ et pour rayon $4$ cm. Le point $A$ est à $5$ cm de $O$. Est-il sur le cercle, à l'intérieur ou à l'extérieur ?", ["$OA = 5 > 4$ : $A$ est à l'extérieur du cercle."], "À l'extérieur")
    L.add("intermediaire", N, "Un cercle a pour centre $O$ et pour rayon $4$ cm. Le point $B$ vérifie $OB = 2{,}8$ cm. Appartient-il au disque de centre $O$ et de rayon $4$ cm ?", ["Le disque contient les points à $4$ cm ou moins de $O$.", "$2{,}8 \\leqslant 4$ : oui."], "Oui")
    L.add("intermediaire", N, "$[AB]$ est un diamètre d'un cercle de centre $O$, avec $AB = 8$ cm. Combien mesure $OA$ ?", ["Le centre est le milieu d'un diamètre.", "$OA = 8 \\div 2 = 4$ cm."], "$4$ cm")
    L.add("approfondissement", N, "Vrai ou faux ? « Une corde d'un cercle de rayon $5$ cm peut mesurer $12$ cm. » Justifier.", ["La plus longue corde d'un cercle est un diamètre.", "Le diamètre mesure $10$ cm : une corde ne peut pas dépasser $10$ cm. Faux."], "Faux")
    L.add("approfondissement", N, "Deux cercles de même centre $O$ ont pour rayons $3$ cm et $5$ cm. Quelle est la distance entre deux points $A$ et $B$ de ces cercles, alignés avec $O$ et du même côté de $O$ ?", ["$O$, $A$, $B$ alignés dans cet ordre : $AB = OB - OA$.", "$AB = 5 - 3 = 2$ cm."], "$2$ cm")

    # d) médiatrice — 7
    N = "mediatrice"
    L.add("application", N, "$M$ est sur la médiatrice de $[AB]$ et $MA = 4$ cm. Combien mesure $MB$ ?", ["Tout point de la médiatrice d'un segment est à égale distance des extrémités.", "$MB = MA = 4$ cm."], "$4$ cm")
    L.add("application", N, "La médiatrice d'un segment de $10$ cm le coupe en un point $I$. Combien mesure $AI$ ?", ["La médiatrice passe par le milieu du segment.", "$AI = 10 \\div 2 = 5$ cm."], "$5$ cm")
    L.add("intermediaire", N, "Un point $P$ vérifie $PA = PB = 6$ cm. Où se trouve-t-il ?", ["Un point à égale distance de $A$ et $B$ est sur la médiatrice de $[AB]$."], "Sur la médiatrice de $[AB]$", acc("sur la médiatrice de [AB]", "médiatrice de [AB]"))
    L.add("intermediaire", N, "Quel angle la médiatrice d'un segment fait-elle avec ce segment ?", ["La médiatrice est perpendiculaire au segment.", "L'angle mesure $90°$."], "$90°$")
    L.add("intermediaire", N, "$N$ vérifie $NA = 5$ cm et $NB = 7$ cm. $N$ est-il sur la médiatrice de $[AB]$ ?", ["Les points de la médiatrice sont à égale distance de $A$ et de $B$.", "$5 \\neq 7$ : non."], "Non")
    L.add("approfondissement", N, "Vrai ou faux ? « Toute droite qui passe par le milieu d'un segment est la médiatrice de ce segment. » Justifier.", ["Une infinité de droites passent par le milieu d'un segment ; une seule lui est perpendiculaire.", "La médiatrice est la droite perpendiculaire au segment en son milieu : l'affirmation est fausse."], "Faux")
    L.add("probleme", N, "Deux maisons $A$ et $B$ veulent installer une boîte aux lettres commune à égale distance des deux, le long d'une route droite qui coupe la médiatrice de $[AB]$. Où doit-on la placer ?",
          ["Les points à égale distance de $A$ et $B$ sont sur la médiatrice de $[AB]$.", "On la place au point d'intersection de la route et de la médiatrice de $[AB]$."], "À l'intersection de la route et de la médiatrice", acc("intersection de la route et de la médiatrice", "sur la médiatrice"))

    # e) angles — 8
    N = "angles"
    for d, m, nat in [("application", 35, "aigu"), ("application", 90, "droit"), ("application", 128, "obtus"), ("intermediaire", 180, "plat")]:
        L.add(d, N, f"Un angle mesure ${m}°$. Quelle est sa nature ?", [{"aigu": "Il est entre $0°$ et $90°$ : il est aigu.", "droit": "Il mesure exactement $90°$ : il est droit.", "obtus": "Il est entre $90°$ et $180°$ : il est obtus.", "plat": "Il mesure $180°$ : ses deux côtés forment une droite, il est plat."}[nat]], nat.capitalize())
    L.add("intermediaire", N, "Deux angles sont supplémentaires. L'un mesure $130°$. Combien mesure l'autre ?", ["Leur somme vaut $180°$.", "$180 - 130 = 50°$."], "$50°$")
    L.add("intermediaire", N, "Deux droites se coupent et forment un angle de $65°$. Combien mesure l'angle opposé par le sommet ?", ["Deux angles opposés par le sommet sont égaux."], "$65°$")
    L.add("approfondissement", N, "Combien de degrés la grande aiguille d'une horloge parcourt-elle en $15$ minutes ?", ["En $60$ min, elle fait un tour complet : $360°$.", "En $15$ min (un quart d'heure) : $360 \\div 4 = 90°$."], "$90°$")
    L.add("approfondissement", N, "Lou lit $140°$ sur son rapporteur pour un angle qui est visiblement aigu. Quelle mesure aurait-elle dû lire ?", ["Elle a lu la mauvaise graduation du rapporteur.", "La bonne mesure est $180 - 140 = 40°$ (un angle aigu mesure moins de $90°$)."], "$40°$")

    # f) bissectrice — 5
    N = "bissectrice"
    L.add("application", N, "La bissectrice d'un angle de $80°$ le partage en deux angles. Combien mesure chacun ?", ["La bissectrice partage l'angle en deux angles égaux.", "$80 \\div 2 = 40°$."], "$40°$")
    L.add("application", N, "La bissectrice d'un angle droit le partage en deux angles. Combien mesure chacun ?", ["$90 \\div 2 = 45°$."], "$45°$")
    L.add("intermediaire", N, "$[Oz)$ est la bissectrice de $\\widehat{xOy}$ et $\\widehat{xOz} = 37°$. Combien mesure $\\widehat{xOy}$ ?", ["$\\widehat{xOy} = 2 \\times \\widehat{xOz}$.", "$2 \\times 37 = 74°$."], "$74°$")
    L.add("intermediaire", N, "La bissectrice d'un angle plat le partage en deux angles. De quelle nature sont-ils ?", ["$180 \\div 2 = 90°$.", "Ce sont deux angles droits."], "Droits", acc("droits", "deux angles droits", "droit"))
    L.add("approfondissement", N, "Vrai ou faux ? « La bissectrice d'un angle de $150°$ forme avec chaque côté un angle obtus. » Justifier.", ["$150 \\div 2 = 75°$.", "$75°$ est un angle aigu : l'affirmation est fausse."], "Faux")

    # g) triangles — 6
    N = "triangles"
    L.add("application", N, "Dans un triangle, deux angles mesurent $70°$ et $60°$. Combien mesure le troisième ?", ["La somme des angles d'un triangle vaut $180°$.", "$180 - 70 - 60 = 50°$."], "$50°$")
    L.add("application", N, "$ABC$ est isocèle en $A$ avec $AB = 6$ cm. Combien mesure $AC$ ?", ["Isocèle en $A$ : $AB = AC$.", "$AC = 6$ cm."], "$6$ cm")
    L.add("intermediaire", N, "Combien mesure chaque angle d'un triangle équilatéral ?", ["Trois angles égaux, de somme $180°$ : $180 \\div 3 = 60°$."], "$60°$")
    L.add("intermediaire", N, "Peut-on construire un triangle de côtés $2$ cm, $3$ cm et $6$ cm ?", ["Le plus grand côté, $6$ cm, dépasse la somme des deux autres : $2 + 3 = 5 < 6$.", "Les arcs de cercle ne se croisent pas : non."], "Non")
    L.add("intermediaire", N, "Un triangle équilatéral a un périmètre de $21$ cm. Quelle est la longueur d'un côté ?", ["Trois côtés égaux : $21 \\div 3 = 7$ cm."], "$7$ cm")
    L.add("approfondissement", N, "Comment s'appelle le point où se coupent les trois médiatrices d'un triangle ?", ["Ce point est à égale distance des trois sommets.", "C'est le centre du cercle circonscrit au triangle."], "Le centre du cercle circonscrit", acc("le centre du cercle circonscrit", "centre du cercle circonscrit"))

    # h) symétrie axiale — 3
    N = "symetrie-axiale"
    L.add("intermediaire", N, "$A'B'$ est le symétrique du segment $[AB]$ par rapport à une droite $(d)$, et $AB = 5{,}3$ cm. Combien mesure $A'B'$ ?", ["La symétrie axiale conserve les longueurs.", "$A'B' = 5{,}3$ cm."], "$5{,}3$ cm")
    L.add("intermediaire", N, "Un angle de $48°$ a pour symétrique, par rapport à une droite, un angle $\\alpha$. Combien mesure $\\alpha$ ?", ["La symétrie axiale conserve les angles."], "$48°$")
    L.add("approfondissement", N, "Le point $M$ est sur l'axe de symétrie $(d)$. Quel est son symétrique ?", ["Un point de l'axe est son propre symétrique."], "$M$ lui-même", acc("M", "lui-même", "M lui-même"))
    return L.fin()


# =====================================================================
# 5e — SIGNAUX SONORES ET LUMINEUX (sans calcul de vitesse : hors programme de 5e)
# =====================================================================
@chapitre("cinquieme", "signaux-sonores-lumineux")
def g5_signaux():
    L = Lot(("cinquieme", "signaux-sonores-lumineux"))

    # a) source et milieu — 6
    N = "source-et-milieu"
    L.add("application", N, "Que fait la membrane d'un haut-parleur quand il émet un son ?", ["Un son est produit par un objet qui vibre.", "La membrane vibre : elle fait des allers-retours très rapides."], "Elle vibre")
    L.add("application", N, "Le son peut-il se propager dans le vide ?", ["Le son a besoin de matière (air, eau, solide) à faire vibrer.", "Dans le vide, il n'y a pas de matière : non."], "Non")
    L.add("application", N, "Un plongeur peut-il entendre le moteur d'un bateau sous l'eau ?", ["L'eau est un milieu matériel : le son s'y propage.", "Oui."], "Oui")
    L.add("intermediaire", N, "Sous une cloche, on retire peu à peu l'air autour d'une sonnette qui fonctionne. Comment évolue le son entendu ?", ["Le son a besoin d'air pour sortir de la cloche.", "Moins il y a d'air, moins on l'entend : le son devient de plus en plus faible."], "Il diminue", acc("il diminue", "de plus en plus faible", "il s'affaiblit"))
    L.add("intermediaire", N, "Vrai ou faux ? « Dans l'espace, deux astronautes peuvent se parler sans radio, casque contre casque. » Justifier.", ["Le son ne passe pas dans le vide…", "… mais il passe à travers la matière : si les casques se touchent, le son traverse les casques. L'affirmation est vraie."], "Vrai")
    L.add("approfondissement", N, "Vrai ou faux ? « Une explosion dans l'espace fait un bruit énorme. » Justifier.", ["L'espace est presque vide : il n'y a pas d'air pour transmettre le son.", "On ne l'entendrait pas : l'affirmation est fausse."], "Faux")

    # b) fréquence — 8
    N = "frequence"
    for d, nv, dt in [("application", 600, 2), ("application", 880, 2), ("intermediaire", 100, F(5, 10)), ("intermediaire", 45, 3), ("intermediaire", 12000, 4)]:
        f = F(nv) / F(dt)
        L.add(d, N, f"Un objet effectue ${nb(nv)}$ vibrations en ${nb(dt)}$ s. Calculer la fréquence du son émis.", ["$f = \\dfrac{N}{\\Delta t}$ (nombre de vibrations par seconde).", f"$f = \\dfrac{{{nb(nv)}}}{{{nb(dt)}}} = {nb(f)}$ Hz."], f"${nb(f)}$ Hz")
    L.add("approfondissement", N, "Un diapason vibre à $440$ Hz. Combien de vibrations fait-il en $10$ secondes ?", ["$440$ Hz : $440$ vibrations par seconde.", "En $10$ s : $440 \\times 10 = 4\\,400$ vibrations."], "$4\\,400$ vibrations")
    L.add("approfondissement", N, "Une corde de guitare vibre à $82$ Hz. Combien de vibrations fait-elle en une demi-seconde ?", ["$82 \\times 0{,}5 = 41$ vibrations."], "$41$ vibrations")
    L.add("intermediaire", N, "Quelle est l'unité de la fréquence ?", ["La fréquence compte les vibrations par seconde : elle s'exprime en hertz (Hz)."], "Le hertz", acc("le hertz", "hertz", "Hz"))

    # c) kHz — 5
    N = "conversions-hz-khz"
    for d, e, c, r in [("application", "Convertir $3{,}5$ kHz en Hz.", ["$1$ kHz $= 1\\,000$ Hz : $3{,}5 \\times 1\\,000 = 3\\,500$ Hz."], "$3\\,500$ Hz"),
                       ("application", "Convertir $18\\,000$ Hz en kHz.", ["$18\\,000 \\div 1\\,000 = 18$ kHz."], "$18$ kHz"),
                       ("application", "Convertir $0{,}8$ kHz en Hz.", ["$0{,}8 \\times 1\\,000 = 800$ Hz."], "$800$ Hz"),
                       ("intermediaire", "Convertir $250$ Hz en kHz.", ["$250 \\div 1\\,000 = 0{,}25$ kHz."], "$0{,}25$ kHz")]:
        L.add(d, N, e, c, r)
    L.add("intermediaire", N, "Quelle fréquence est la plus grande : $2{,}5$ kHz ou $900$ Hz ?", ["$2{,}5$ kHz $= 2\\,500$ Hz.", "$2\\,500 > 900$ : c'est $2{,}5$ kHz."], "$2{,}5$ kHz")

    # d) hauteur — 6
    N = "hauteur-grave-aigu"
    L.add("application", N, "Un son de $100$ Hz est-il grave ou aigu, comparé à un son de $4\\,000$ Hz ?", ["Plus la fréquence est petite, plus le son est grave.", "$100$ Hz est grave."], "Grave")
    L.add("application", N, "Quel son est le plus aigu : $150$ Hz ou $3$ kHz ?", ["$3$ kHz $= 3\\,000$ Hz $> 150$ Hz.", "Le son de $3$ kHz est le plus aigu."], "$3$ kHz")
    L.add("intermediaire", N, "On raccourcit la partie qui vibre d'une corde de guitare : elle vibre plus vite. Le son devient-il plus grave ou plus aigu ?", ["Elle fait plus de vibrations par seconde : la fréquence augmente.", "Le son devient plus aigu."], "Plus aigu", acc("plus aigu", "aigu"))
    L.add("intermediaire", N, "Quelle grandeur détermine la hauteur d'un son (grave ou aigu) : la fréquence ou le niveau sonore ?", ["La hauteur dépend du nombre de vibrations par seconde.", "C'est la fréquence."], "La fréquence")
    L.add("approfondissement", N, "Vrai ou faux ? « Un son aigu est forcément un son fort. » Justifier.", ["Aigu ou grave dépend de la fréquence (en Hz) ; fort ou faible dépend du niveau sonore (en dB).", "Un son peut être aigu et faible : l'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Ranger du plus grave au plus aigu : $1{,}2$ kHz ; $440$ Hz ; $5$ kHz ; $90$ Hz.", ["En Hz : $1\\,200$ ; $440$ ; $5\\,000$ ; $90$.", "Du plus grave au plus aigu : $90$ Hz ; $440$ Hz ; $1{,}2$ kHz ; $5$ kHz."],
          "$90$ Hz ; $440$ Hz ; $1{,}2$ kHz ; $5$ kHz", acc("90 Hz ; 440 Hz ; 1,2 kHz ; 5 kHz", "90 ; 440 ; 1,2 kHz ; 5 kHz"))

    # e) infrasons, audibles, ultrasons — 7
    N = "infrasons-audibles-ultrasons"
    for d, f, txt, r in [("application", "$15$ Hz", "$15 < 20$ Hz : c'est un infrason, trop grave pour l'oreille humaine.", "Un infrason"),
                         ("application", "$30$ kHz", "$30$ kHz $= 30\\,000$ Hz $> 20\\,000$ Hz : c'est un ultrason.", "Un ultrason"),
                         ("application", "$8\\,000$ Hz", "$8\\,000$ Hz est entre $20$ Hz et $20\\,000$ Hz : c'est un son audible.", "Un son audible"),
                         ("intermediaire", "$0{,}05$ kHz", "$0{,}05$ kHz $= 50$ Hz, entre $20$ Hz et $20\\,000$ Hz : audible.", "Un son audible ")]:
        L.add(d, N, f"Un son a une fréquence de {f}. Est-ce un infrason, un son audible ou un ultrason ?", [txt], r.strip())
    L.add("intermediaire", N, "Un sifflet pour chien émet à $25$ kHz. Un humain peut-il l'entendre ?", ["$25$ kHz $= 25\\,000$ Hz $> 20\\,000$ Hz : ultrason.", "Non, l'oreille humaine ne l'entend pas (le chien, oui)."], "Non")
    L.add("intermediaire", N, "Quel type de son les éléphants utilisent-ils pour communiquer à grande distance ?", ["Leurs sons sont très graves, sous $20$ Hz.", "Ce sont des infrasons."], "Des infrasons", acc("des infrasons", "infrasons"))
    L.add("approfondissement", N, "Quelles sont les limites de fréquence des sons audibles par l'oreille humaine ?", ["L'oreille humaine entend de $20$ Hz à $20\\,000$ Hz ($20$ kHz)."], "De $20$ Hz à $20\\,000$ Hz", acc("20 Hz à 20000 Hz", "de 20 Hz à 20 kHz"))

    # f) niveau sonore — 6
    N = "niveau-sonore"
    L.add("application", N, "Avec quel appareil mesure-t-on un niveau sonore ?", ["Le niveau sonore se mesure avec un sonomètre, en décibels."], "Un sonomètre")
    L.add("application", N, "Dans quelle unité exprime-t-on un niveau sonore ?", ["En décibels, symbole dB."], "Le décibel", acc("le décibel", "décibel", "dB"))
    L.add("application", N, "Quel niveau sonore correspond à peu près à une conversation : $30$ dB, $60$ dB ou $120$ dB ?", ["$30$ dB : une chambre calme ; $120$ dB : un avion au décollage.", "Une conversation : environ $60$ dB."], "$60$ dB")
    L.add("intermediaire", N, "Au-delà de quel niveau sonore une exposition longue devient-elle dangereuse pour l'oreille ?", ["Au-delà de $85$ dB pendant longtemps, l'oreille est en danger."], "$85$ dB")
    L.add("intermediaire", N, "Lequel est le plus dangereux pour l'oreille : un son de $95$ dB ou un son de $70$ dB ?", ["Plus il y a de décibels, plus le son est fort et dangereux.", "Le son de $95$ dB."], "$95$ dB")
    L.add("approfondissement", N, "Vrai ou faux ? « Deux sons de $60$ dB joués ensemble donnent un son de $120$ dB. » Justifier.", ["Les décibels ne s'additionnent pas comme des nombres ordinaires.", "Deux sons de $60$ dB ne font pas $120$ dB (niveau d'un avion au décollage) : l'affirmation est fausse."], "Faux")

    # g) sources de lumière — 6
    N = "source-primaire-ou-objet-diffusant"
    for d, obj, nat, expl in [("application", "le Soleil", "Une source primaire", "Le Soleil produit sa propre lumière."),
                              ("application", "la Lune", "Un objet diffusant", "La Lune ne produit pas de lumière : elle renvoie celle du Soleil."),
                              ("application", "l'écran allumé d'un téléphone", "Une source primaire ", "Un écran allumé produit sa lumière."),
                              ("intermediaire", "une page de cahier éclairée par une lampe", "Un objet diffusant ", "La page renvoie dans toutes les directions la lumière de la lampe.")]:
        L.add(d, N, f"Est-ce une source primaire de lumière ou un objet diffusant : {obj} ?", [expl], nat.strip())
    L.add("intermediaire", N, "Dans une pièce sans fenêtre, toutes lumières éteintes, peut-on voir un livre posé sur la table ?", ["Le livre est un objet diffusant : il ne fait que renvoyer la lumière qu'il reçoit.", "Sans lumière à diffuser, on ne le voit pas : non."], "Non")
    L.add("approfondissement", N, "Vrai ou faux ? « On voit un objet seulement s'il produit de la lumière. » Justifier.", ["On voit aussi les objets diffusants, qui renvoient la lumière reçue (une table, la Lune…).", "L'affirmation est fausse."], "Faux")

    # h) propagation rectiligne ; son et lumière — 6
    N = "propagation-de-la-lumiere"
    L.add("application", N, "Dans un milieu transparent et homogène, comment se propage la lumière ?", ["La lumière se propage en ligne droite : c'est la propagation rectiligne."], "En ligne droite")
    L.add("application", N, "Comment représente-t-on le trajet de la lumière sur un schéma ?", ["Par un rayon lumineux : un trait droit avec une flèche qui indique le sens de propagation."], "Par un rayon lumineux", acc("un rayon lumineux", "rayon lumineux"))
    L.add("intermediaire", N, "Pourquoi un objet opaque éclairé par une lampe a-t-il une ombre nette derrière lui ?", ["La lumière va en ligne droite : l'objet arrête les rayons qui le touchent.", "Derrière lui, aucun rayon n'arrive : c'est l'ombre."], "La lumière se propage en ligne droite", acc("la lumière se propage en ligne droite", "propagation rectiligne"))
    L.add("intermediaire", N, "Pendant un orage, que perçoit-on en premier : l'éclair ou le tonnerre ?", ["Ils sont produits en même temps, mais la lumière va beaucoup plus vite que le son.", "On voit l'éclair avant d'entendre le tonnerre."], "L'éclair", acc("l'éclair", "éclair"))
    L.add("approfondissement", N, "Pendant un orage, l'écart entre l'éclair et le tonnerre diminue d'un coup de foudre à l'autre. L'orage se rapproche-t-il ou s'éloigne-t-il ?", ["Le son met moins de temps à arriver : il a moins de distance à parcourir.", "L'orage se rapproche."], "Il se rapproche", acc("il se rapproche", "se rapproche"))
    L.add("approfondissement", N, "Vrai ou faux ? « La lumière du Soleil nous parvient à travers le vide de l'espace, mais pas son bruit. » Justifier.", ["La lumière se propage dans le vide, le son non.", "L'affirmation est vraie."], "Vrai")
    return L.fin()


# =====================================================================
# 4e — PROPAGATION D'UN SIGNAL
# =====================================================================
@chapitre("quatrieme", "propagation-signal")
def g4_propagation():
    L = Lot(("quatrieme", "propagation-signal"))

    # a) signal et information — 5
    N = "signal-et-information"
    L.add("application", N, "Dans la chaîne « un phare envoie de la lumière vers un marin », qui est l'émetteur ?", ["L'émetteur produit le signal : c'est le phare."], "Le phare")
    L.add("application", N, "Dans la chaîne « un phare envoie de la lumière vers un marin », qui est le récepteur ?", ["Le récepteur capte le signal : c'est le marin (ses yeux)."], "Le marin")
    L.add("application", N, "Un sifflet d'arbitre arrête un match. Quel est le milieu de propagation du signal ?", ["Le son du sifflet voyage dans l'air jusqu'aux joueurs.", "Le milieu est l'air."], "L'air")
    L.add("intermediaire", N, "Quel type de signal un feu tricolore envoie-t-il aux automobilistes : sonore ou lumineux ?", ["L'information (passer ou s'arrêter) est portée par de la lumière colorée.", "C'est un signal lumineux."], "Lumineux", acc("lumineux", "un signal lumineux"))
    L.add("intermediaire", N, "Une sirène d'alerte retentit dans une ville. Quel est son récepteur ?", ["Le signal est capté par les oreilles des habitants.", "Les habitants (leurs oreilles) sont les récepteurs."], "Les habitants", acc("les habitants", "les oreilles des habitants"))

    # b) propagation sans transport de matière — 4
    N = "propagation-sans-transport-de-matiere"
    L.add("intermediaire", N, "Une vague passe sous un bouchon qui flotte. Le bouchon est-il emporté par la vague ?", ["Le bouchon monte et descend, puis revient à sa place.", "Non : la perturbation avance, pas l'eau."], "Non")
    L.add("intermediaire", N, "Vrai ou faux ? « Quand un son se propage, l'air se déplace de la source jusqu'à l'oreille. » Justifier.", ["L'air vibre sur place et transmet la vibration de proche en proche.", "Il n'y a pas de transport de matière : l'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Dans une « ola » au stade, chaque spectateur se lève puis se rassoit à sa place. Qu'est-ce qui se déplace tout autour du stade ?", ["Les spectateurs ne changent pas de place.", "C'est la perturbation (le mouvement) qui se propage."], "La perturbation", acc("la perturbation", "le mouvement"))
    L.add("approfondissement", N, "Un signal transporte-t-il de la matière ou une information (et de l'énergie) ?", ["Une onde se propage sans transport de matière.", "Elle transporte une information et de l'énergie."], "Une information", acc("une information", "information et énergie", "de l'énergie"))

    # c) vitesse — 8
    N = "calculer-une-vitesse"
    for d, dist, du, ctx, u in [("application", 680, 2, "Un son parcourt $680$ m en $2$ s.", "m/s"), ("application", 4500, 3, "Un son parcourt $4\\,500$ m dans l'eau en $3$ s.", "m/s"),
                                ("intermediaire", 10000, 2, "Dans un rail d'acier, un son parcourt $10$ km en $2$ s.", "m/s")]:
        v = F(dist, du)
        L.add(d, N, ctx + " Calculer sa vitesse de propagation en m/s.", [f"$v = \\dfrac{{d}}{{t}} = \\dfrac{{{nb(dist)}}}{{{du}}} = {nb(v)}$ m/s."], f"${nb(v)}$ m/s")
    L.add("intermediaire", N, "Un son parcourt $1{,}7$ km en $5$ s. Calculer sa vitesse en m/s.", ["$d = 1{,}7$ km $= 1\\,700$ m.", "$v = \\dfrac{1\\,700}{5} = 340$ m/s."], "$340$ m/s")
    L.add("intermediaire", N, "Un écho met $0{,}2$ s pour aller d'un mur à $34$ m et en revenir ($68$ m en tout). Calculer la vitesse du son.", ["Distance parcourue : $68$ m.", "$v = \\dfrac{68}{0{,}2} = 340$ m/s."], "$340$ m/s")
    v = F(384000000, 128) * 100
    L.add("approfondissement", N, "Un signal laser envoyé vers la Lune, à $384\\,000$ km, met $1{,}28$ s pour l'atteindre. Calculer sa vitesse en m/s, en écriture scientifique.", ["$d = 384\\,000$ km $= 3{,}84 \\times 10^{8}$ m.", "$v = \\dfrac{3{,}84 \\times 10^{8}}{1{,}28} = 3 \\times 10^{8}$ m/s : c'est la vitesse de la lumière."], "$3 \\times 10^{8}$ m/s")
    _ok(v == 3 * 10 ** 8)
    L.add("approfondissement", N, "Un son parcourt $3$ km en $2$ s. Dans quel milieu se propage-t-il probablement : l'air, l'eau ou l'acier ?", ["$v = \\dfrac{3\\,000}{2} = 1\\,500$ m/s.", "C'est la vitesse du son dans l'eau."], "L'eau")
    L.add("probleme", N, "Lors d'un 100 m, le coup de pistolet du starter est entendu par un spectateur placé à $102$ m avec $0{,}3$ s de retard. Calculer la vitesse du son.", ["$v = \\dfrac{102}{0{,}3} = 340$ m/s."], "$340$ m/s")

    # d) distance et durée — 8
    N = "calculer-une-distance-ou-une-duree"
    L.add("application", N, "Le son se propage à $340$ m/s dans l'air. Quelle distance parcourt-il en $5$ s ?", ["$d = v \\times t = 340 \\times 5 = 1\\,700$ m."], "$1\\,700$ m")
    L.add("application", N, "Le son se propage à $1\\,500$ m/s dans l'eau. Quelle distance parcourt-il en $0{,}4$ s ?", ["$d = 1\\,500 \\times 0{,}4 = 600$ m."], "$600$ m")
    L.add("intermediaire", N, "Combien de temps le son met-il pour parcourir $1\\,020$ m dans l'air ($340$ m/s) ?", ["$t = \\dfrac{d}{v} = \\dfrac{1\\,020}{340} = 3$ s."], "$3$ s")
    L.add("intermediaire", N, "Combien de temps le son met-il pour parcourir $1$ km dans l'acier ($5\\,000$ m/s) ?", ["$t = \\dfrac{1\\,000}{5\\,000} = 0{,}2$ s."], "$0{,}2$ s")
    t = F(150 * 10 ** 9, 3 * 10 ** 8)
    L.add("intermediaire", N, "Le Soleil est à environ $150$ millions de km de la Terre. Combien de temps sa lumière met-elle pour nous parvenir ($3 \\times 10^{8}$ m/s) ?",
          ["$d = 150 \\times 10^{6}$ km $= 1{,}5 \\times 10^{11}$ m.", f"$t = \\dfrac{{1{{,}}5 \\times 10^{{11}}}}{{3 \\times 10^{{8}}}} = {nb(t)}$ s, soit $8$ min $20$ s."], f"${nb(t)}$ s")
    _ok(t == 500)
    L.add("intermediaire", N, "Dans un stade, un spectateur est à $170$ m de la scène. Avec quel retard entend-il la musique ($340$ m/s) ?", ["$t = \\dfrac{170}{340} = 0{,}5$ s."], "$0{,}5$ s")
    L.add("approfondissement", N, "Quelle distance la lumière parcourt-elle en $1$ min dans le vide ($3 \\times 10^{8}$ m/s) ? Donner le résultat en km.", ["$d = 3 \\times 10^{8} \\times 60 = 1{,}8 \\times 10^{10}$ m.", "Soit $1{,}8 \\times 10^{7}$ km ($18$ millions de km)."], "$1{,}8 \\times 10^{7}$ km")
    L.add("probleme", N, "Un coureur à $680$ m d'un feu d'artifice voit l'explosion puis l'entend. Au bout de combien de temps l'entend-il ?", ["La lumière arrive quasi instantanément.", "Le son : $t = \\dfrac{680}{340} = 2$ s."], "$2$ s")

    # e) le son selon le milieu — 7
    N = "son-et-milieux"
    L.add("application", N, "Quelle est, environ, la vitesse du son dans l'air ?", ["Valeur à connaître : environ $340$ m/s."], "$340$ m/s")
    L.add("application", N, "Dans quel milieu le son va-t-il le plus vite : l'air, l'eau ou l'acier ?", ["Air : $340$ m/s ; eau : $1\\,500$ m/s ; acier : $5\\,000$ m/s.", "Dans l'acier."], "L'acier")
    L.add("application", N, "Le son peut-il se propager dans le vide ?", ["Il lui faut un milieu matériel.", "Non."], "Non")
    L.add("intermediaire", N, "Combien de fois le son va-t-il plus vite dans l'eau que dans l'air ? Arrondir à l'unité.", ["$\\dfrac{1\\,500}{340} \\approx 4{,}4$.", "Environ $4$ fois plus vite."], "$4$ fois", acc("4 fois", "4"))
    _ok(arr(F(1500, 340)) == 4)
    ta, tf = F(1000, 340), F(1000, 5000)
    L.add("approfondissement", N, "On frappe un rail d'acier de $1$ km de long. Une personne à l'autre bout entend deux sons : l'un par le rail, l'autre par l'air. Quel écart de temps les sépare, au centième de seconde ?",
          [f"Dans l'air : $\\dfrac{{1\\,000}}{{340}} \\approx {nb(ta, 3)}$ s. Dans l'acier : $\\dfrac{{1\\,000}}{{5\\,000}} = 0{{,}}2$ s.", f"Écart : environ ${nb(arr(ta - tf, 2))}$ s."], f"$\\approx {nb(arr(ta - tf, 2))}$ s")
    L.add("approfondissement", N, "Vrai ou faux ? « En collant l'oreille contre un rail, on entend un train arriver avant de l'entendre par l'air. » Justifier.", ["Le son va environ $15$ fois plus vite dans l'acier ($5\\,000$ m/s) que dans l'air ($340$ m/s).", "Il arrive donc bien plus tôt par le rail : l'affirmation est vraie."], "Vrai")
    L.add("probleme", N, "Un dauphin et un plongeur sont à $3$ km l'un de l'autre sous l'eau. Combien de temps met le cri du dauphin pour atteindre le plongeur ?", ["Dans l'eau, $v \\approx 1\\,500$ m/s.", "$t = \\dfrac{3\\,000}{1\\,500} = 2$ s."], "$2$ s")

    # f) lumière — 7
    N = "lumiere"
    L.add("application", N, "Quelle est la vitesse de la lumière dans le vide, en km/s ?", ["$c \\approx 3 \\times 10^{8}$ m/s $= 300\\,000$ km/s."], "$300\\,000$ km/s")
    L.add("application", N, "La lumière peut-elle se propager dans le vide ?", ["Oui : c'est ainsi que la lumière du Soleil et des étoiles nous parvient."], "Oui")
    L.add("intermediaire", N, "Écrire $300\\,000\\,000$ m/s en écriture scientifique.", ["$300\\,000\\,000 = 3 \\times 10^{8}$."], "$3 \\times 10^{8}$ m/s")
    L.add("intermediaire", N, "Combien de temps la lumière met-elle pour parcourir les $384\\,000$ km qui séparent la Terre de la Lune ? Arrondir au centième de seconde.", ["$t = \\dfrac{384\\,000}{300\\,000} = 1{,}28$ s."], "$1{,}28$ s")
    L.add("intermediaire", N, "Combien de fois la lumière va-t-elle plus vite que le son dans l'air (environ) ?", ["$\\dfrac{3 \\times 10^{8}}{340} \\approx 882\\,000$.", "Près d'un million de fois plus vite."], "$\\approx 882\\,000$ fois", acc("882000 fois", "882 000"))
    _ok(arr(F(3 * 10 ** 8, 340) / 1000) == 882)
    L.add("approfondissement", N, "Un satellite est à $36\\,000$ km de la Terre. Combien de temps met un signal radio (qui va à la vitesse de la lumière) pour l'atteindre ?", ["$t = \\dfrac{36\\,000}{300\\,000} = 0{,}12$ s."], "$0{,}12$ s")
    L.add("approfondissement", N, "Un éclair se produit à $3$ km. Combien de temps sa lumière met-elle pour nous parvenir ? Donner le résultat en écriture scientifique.", ["$t = \\dfrac{d}{c} = \\dfrac{3}{300\\,000} = 0{,}000\\,01$ s.", "Soit $1 \\times 10^{-5}$ s : c'est quasi instantané, contrairement au tonnerre (environ $9$ s)."], "$1 \\times 10^{-5}$ s")

    # g) orage, écho, sonar — 8
    N = "orage-echo-sonar"
    L.add("application", N, "On entend le tonnerre $6$ s après avoir vu l'éclair. À quelle distance est l'orage ($340$ m/s) ?", ["$d = 340 \\times 6 = 2\\,040$ m, soit environ $2$ km."], "$2\\,040$ m")
    L.add("intermediaire", N, "Règle pratique : le son met environ $3$ s pour parcourir $1$ km. On compte $9$ s entre l'éclair et le tonnerre. À quelle distance est l'orage, environ ?", ["$9 \\div 3 = 3$.", "L'orage est à environ $3$ km."], "$3$ km")
    L.add("intermediaire", N, "Un randonneur crie face à une falaise et entend l'écho $2$ s plus tard. À quelle distance est la falaise ($340$ m/s) ?", ["Le son fait l'aller et le retour : $340 \\times 2 = 680$ m.", "Distance de la falaise : $680 \\div 2 = 340$ m."], "$340$ m")
    L.add("intermediaire", N, "Un sonar de bateau reçoit l'écho du fond $0{,}4$ s après l'émission. Quelle est la profondeur ($1\\,500$ m/s dans l'eau) ?", ["Aller-retour : $1\\,500 \\times 0{,}4 = 600$ m.", "Profondeur : $600 \\div 2 = 300$ m."], "$300$ m")
    L.add("approfondissement", N, "Un sonar repère un banc de poissons à $45$ m de profondeur. Au bout de combien de temps reçoit-il l'écho ($1\\,500$ m/s) ?", ["Le son parcourt $2 \\times 45 = 90$ m.", "$t = \\dfrac{90}{1\\,500} = 0{,}06$ s."], "$0{,}06$ s")
    L.add("approfondissement", N, "Une chauve-souris émet un ultrason et reçoit l'écho d'un insecte $0{,}01$ s plus tard. À quelle distance est l'insecte ($340$ m/s) ?", ["Aller-retour : $340 \\times 0{,}01 = 3{,}4$ m.", "Distance : $1{,}7$ m."], "$1{,}7$ m")
    L.add("approfondissement", N, "Léo calcule la distance d'une falaise : écho après $3$ s, donc $340 \\times 3 = 1\\,020$ m. Quelle erreur a-t-il faite ? Donner la bonne distance.", ["Le son fait l'aller et le retour : il faut diviser par $2$.", "Distance : $1\\,020 \\div 2 = 510$ m."], "$510$ m")
    L.add("probleme", N, "Lors d'un orage, Mia voit un éclair puis entend le tonnerre $4{,}5$ s plus tard. Doit-elle s'abriter si l'on conseille de le faire quand l'orage est à moins de $10$ km ?", ["$d = 340 \\times 4{,}5 = 1\\,530$ m, soit environ $1{,}5$ km.", "$1{,}5$ km $< 10$ km : oui, elle doit s'abriter."], "Oui")

    # h) pièges — 3
    N = "pieges-d-unites"
    L.add("intermediaire", N, "Nathan calcule la vitesse d'un son qui parcourt $1{,}02$ km en $3$ s et trouve $0{,}34$. Dans quelle unité est son résultat, et que vaut-il en m/s ?", ["$\\dfrac{1{,}02}{3} = 0{,}34$ km/s.", "En m/s : $0{,}34 \\times 1\\,000 = 340$ m/s."], "$340$ m/s")
    L.add("approfondissement", N, "Un son met $2$ min pour parcourir une distance dans l'air. Inès écrit $d = 340 \\times 2 = 680$ m. Quelle est la bonne distance ?", ["La durée doit être en secondes : $2$ min $= 120$ s.", "$d = 340 \\times 120 = 40\\,800$ m."], "$40\\,800$ m")
    L.add("approfondissement", N, "Vrai ou faux ? « $3 \\times 10^{8}$ m/s, c'est $300\\,000$ m/s. » Justifier.", ["$3 \\times 10^{8} = 300\\,000\\,000$ m/s.", "C'est $300\\,000$ **km**/s : l'affirmation est fausse."], "Faux")
    return L.fin()


# =====================================================================
# Physique-chimie : aides
# =====================================================================
def sci(x, cs=2):
    """Écriture scientifique à cs chiffres significatifs : (LaTeX, texte simple, mantisse, exposant)."""
    x = float(x)
    _ok(x != 0)
    e = math.floor(math.log10(abs(x)))
    m = x / 10 ** e
    m = float(arr(m, cs - 1))
    if abs(m) >= 10:
        m /= 10
        e += 1
    ms = nb(F(str(m)), cs - 1, garder=True)
    tex = f"{ms} \\times 10^{{{e}}}" if e != 0 else ms
    txt = f"{ms.replace('{,}', ',')}e{e}"
    return tex, txt, m, e


def ph_de(c):
    v = -math.log10(c)
    return v, arr(v, 1)


# =====================================================================
# Tle — ACIDES, BASES ET pH (section 1.1 du programme : sans Ka ni Ke)
# =====================================================================
@chapitre("terminale", "acide-base-ph")
def gT_acide_base_ph():
    L = Lot(("terminale", "acide-base-ph"))
    M = lambda f: f"$\\mathrm{{{f}}}$"

    # a) acide et base de Brönsted — 7
    N = "acide-et-base-de-bronsted"
    for d, e, c, r in [
        ("application", "L'acide méthanoïque $\\mathrm{HCOOH}$ cède un proton et devient $\\mathrm{HCOO^-}$. Est-ce un acide ou une base au sens de Brönsted ?",
         ["Un acide de Brönsted cède un proton $\\mathrm{H^+}$ ; une base en capte un.", "$\\mathrm{HCOOH}$ cède un proton : c'est un acide."], "Un acide"),
        ("application", "L'ammoniac $\\mathrm{NH_3}$ capte un proton et devient $\\mathrm{NH_4^+}$. Est-ce un acide ou une base au sens de Brönsted ?",
         ["Une base de Brönsted capte un proton $\\mathrm{H^+}$.", "$\\mathrm{NH_3}$ capte un proton : c'est une base."], "Une base"),
        ("application", "Dans la réaction $\\mathrm{HCO_3^- + H_3O^+ \\to CO_2,H_2O + H_2O}$, l'ion hydrogénocarbonate $\\mathrm{HCO_3^-}$ joue-t-il le rôle d'un acide ou d'une base ?",
         ["$\\mathrm{HCO_3^-}$ capte le proton cédé par $\\mathrm{H_3O^+}$ et devient $\\mathrm{CO_2,H_2O}$.", "Il joue le rôle d'une base."], "Une base"),
        ("intermediaire", "L'ion méthylammonium $\\mathrm{CH_3NH_3^+}$ cède un proton et devient la méthylamine $\\mathrm{CH_3NH_2}$. Est-ce un acide ou une base au sens de Brönsted ?",
         ["Il cède un proton $\\mathrm{H^+}$.", "C'est un acide."], "Un acide"),
    ]:
        L.add(d, N, e, c, r)
    L.add("intermediaire", N, "Un acide de Brönsted cède-t-il ou capte-t-il un proton ?", ["Un acide de Brönsted est une espèce capable de céder un proton $\\mathrm{H^+}$ (une base en capte un)."], "Il cède un proton")
    L.add("approfondissement", N, "Vrai ou faux ? « En solution aqueuse, l'ion $\\mathrm{H^+}$ existe seul, libre dans l'eau. » Justifier.", ["Le proton cédé par un acide est aussitôt capté par une molécule d'eau.", "Il est présent sous la forme de l'ion oxonium $\\mathrm{H_3O^+}$ : l'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "L'acide éthanoïque $\\mathrm{CH_3COOH}$ cède un proton. Quelle espèce obtient-on ?", ["$\\mathrm{CH_3COOH = CH_3COO^- + H^+}$.", "On obtient l'ion éthanoate $\\mathrm{CH_3COO^-}$."], M("CH_3COO^-"), acc("CH3COO-", "CH3COO^-"))

    # b) couples — 8
    N = "couples-acide-base"
    for d, acide, base, sens in [("application", "NH_4^+", "NH_3", "base"), ("application", "HCOOH", "HCOO^-", "base"), ("application", "H_3O^+", "H_2O", "acide"),
                                 ("intermediaire", "C_2H_5COOH", "C_2H_5COO^-", "acide"), ("intermediaire", "CH_3NH_3^+", "CH_3NH_2", "acide"), ("intermediaire", "HCO_3^-", "CO_3^{2-}", "base")]:
        plain = lambda f: f.replace("_", "").replace("{", "").replace("}", "").replace("^", "" if "{" not in f else "^")
        if sens == "base":
            e = f"Quelle est la base conjuguée de {M(acide)} ?"
            c = [f"Demi-équation : $\\mathrm{{{acide} = {base} + H^+}}$.", f"La base conjuguée est {M(base)}."]
            r, a = M(base), acc(plain(base))
        else:
            e = f"Quel est l'acide conjugué de {M(base)} ?"
            c = [f"Demi-équation : $\\mathrm{{{acide} = {base} + H^+}}$.", f"L'acide conjugué est {M(acide)}."]
            r, a = M(acide), acc(plain(acide))
        L.add(d, N, e, c, r, a)
    L.add("approfondissement", N, "Quelle est la base conjuguée de l'acide carbonique, noté $\\mathrm{CO_2,H_2O}$ ?", ["Demi-équation : $\\mathrm{CO_2,H_2O = HCO_3^- + H^+}$.", "La base conjuguée est l'ion hydrogénocarbonate $\\mathrm{HCO_3^-}$."], "$\\mathrm{HCO_3^-}$", acc("HCO3-"))
    L.add("approfondissement", N, "Vrai ou faux ? « Dans un couple acide-base, l'acide et sa base conjuguée diffèrent d'un électron. » Justifier.", ["Ils diffèrent d'un proton $\\mathrm{H^+}$ : $\\mathrm{acide = base + H^+}$.", "Un échange d'électrons caractérise un couple oxydant-réducteur. L'affirmation est fausse."], "Faux")

    # c) réaction acide-base — 6
    N = "reaction-acide-base"
    L.add("intermediaire", N, "Écrire l'équation de la réaction entre l'acide éthanoïque $\\mathrm{CH_3COOH}$ et l'ammoniac $\\mathrm{NH_3}$.",
          ["Couples : $\\mathrm{CH_3COOH / CH_3COO^-}$ et $\\mathrm{NH_4^+ / NH_3}$.", "L'acide d'un couple cède son proton à la base de l'autre."],
          "$\\mathrm{CH_3COOH + NH_3 \\to CH_3COO^- + NH_4^+}$", acc("CH3COOH + NH3 -> CH3COO- + NH4+"))
    L.add("intermediaire", N, "Écrire l'équation de la réaction entre l'acide méthanoïque $\\mathrm{HCOOH}$ et l'eau.",
          ["Couples : $\\mathrm{HCOOH / HCOO^-}$ et $\\mathrm{H_3O^+ / H_2O}$ ; l'eau joue le rôle de base."],
          "$\\mathrm{HCOOH + H_2O \\to HCOO^- + H_3O^+}$", acc("HCOOH + H2O -> HCOO- + H3O+"))
    L.add("intermediaire", N, "Écrire l'équation de la réaction entre la méthylamine $\\mathrm{CH_3NH_2}$ et l'eau.",
          ["Couples : $\\mathrm{CH_3NH_3^+ / CH_3NH_2}$ et $\\mathrm{H_2O / HO^-}$ ; l'eau joue le rôle d'acide."],
          "$\\mathrm{CH_3NH_2 + H_2O \\to CH_3NH_3^+ + HO^-}$", acc("CH3NH2 + H2O -> CH3NH3+ + HO-"))
    L.add("approfondissement", N, "Écrire l'équation de la réaction entre les ions oxonium $\\mathrm{H_3O^+}$ et les ions hydroxyde $\\mathrm{HO^-}$.",
          ["Couples de l'eau : $\\mathrm{H_3O^+ / H_2O}$ et $\\mathrm{H_2O / HO^-}$.", "$\\mathrm{H_3O^+}$ cède un proton à $\\mathrm{HO^-}$ : il se forme deux molécules d'eau."],
          "$\\mathrm{H_3O^+ + HO^- \\to 2\\,H_2O}$", acc("H3O+ + HO- -> 2 H2O"))
    L.add("approfondissement", N, "Dans la réaction $\\mathrm{HCOOH + CH_3COO^- \\to HCOO^- + CH_3COOH}$, quelle espèce joue le rôle de base ?", ["$\\mathrm{CH_3COO^-}$ capte le proton cédé par $\\mathrm{HCOOH}$."], M("CH_3COO^-"), acc("CH3COO-"))
    L.add("approfondissement", N, "Combien de protons sont échangés dans la réaction $\\mathrm{NH_4^+ + HO^- \\to NH_3 + H_2O}$ ?", ["$\\mathrm{NH_4^+}$ cède un seul proton à $\\mathrm{HO^-}$."], "$1$")

    # d) espèce amphotère — 5
    N = "espece-amphotere"
    L.add("application", N, "L'eau est-elle une espèce amphotère ?", ["Elle est la base du couple $\\mathrm{H_3O^+ / H_2O}$ et l'acide du couple $\\mathrm{H_2O / HO^-}$.", "Oui."], "Oui")
    L.add("intermediaire", N, "L'ion hydrogénocarbonate $\\mathrm{HCO_3^-}$ est-il amphotère ?", ["Il est la base du couple $\\mathrm{CO_2,H_2O / HCO_3^-}$…", "… et l'acide du couple $\\mathrm{HCO_3^- / CO_3^{2-}}$ : oui."], "Oui")
    L.add("intermediaire", N, "Quelle est la base conjuguée de l'eau ?", ["Couple $\\mathrm{H_2O / HO^-}$ : $\\mathrm{H_2O = HO^- + H^+}$."], M("HO^-"), acc("HO-", "OH-"))
    L.add("approfondissement", N, "Quel est l'acide conjugué de l'eau ?", ["Couple $\\mathrm{H_3O^+ / H_2O}$ : $\\mathrm{H_3O^+ = H_2O + H^+}$."], M("H_3O^+"), acc("H3O+"))
    L.add("approfondissement", N, "Vrai ou faux ? « L'ion ammonium $\\mathrm{NH_4^+}$ est amphotère. » Justifier à l'aide des couples du cours.", ["$\\mathrm{NH_4^+}$ n'apparaît que comme acide (couple $\\mathrm{NH_4^+ / NH_3}$) ; il ne peut pas capter de proton.", "L'affirmation est fausse."], "Faux")

    # e) calculer un pH — 8
    N = "calculer-un-ph"
    for d, c, txt in [("application", 1e-3, "1{,}0 \\times 10^{-3}"), ("application", 2.5e-4, "2{,}5 \\times 10^{-4}"), ("intermediaire", 6.3e-6, "6{,}3 \\times 10^{-6}"),
                      ("intermediaire", 4.0e-9, "4{,}0 \\times 10^{-9}"), ("intermediaire", 0.020, "2{,}0 \\times 10^{-2}")]:
        v, r = ph_de(c)
        L.add(d, N, f"Une solution a une concentration en ions oxonium $[\\mathrm{{H_3O^+}}] = {txt}\\ \\mathrm{{mol \\cdot L^{{-1}}}}$. Calculer son pH.",
              [f"$\\mathrm{{pH}} = -\\log\\left(\\dfrac{{[\\mathrm{{H_3O^+}}]}}{{c^\\circ}}\\right) = -\\log({txt})$.", f"$\\mathrm{{pH}} \\approx {nb(v, 3)}$, soit ${nb(r, 1, garder=True)}$ avec une décimale."],
              f"$\\mathrm{{pH}} {EG if abs(v - float(r)) < 1e-9 else APPROX} {nb(r, 1, garder=True)}$")
    v, r = ph_de(3.2e-3)
    L.add("intermediaire", N, "Un jus de citron dilué contient $3{,}2$ mmol d'ions oxonium par litre. Calculer son pH.",
          ["Conversion : $3{,}2\\ \\mathrm{mmol \\cdot L^{-1}} = 3{,}2 \\times 10^{-3}\\ \\mathrm{mol \\cdot L^{-1}}$.", f"$\\mathrm{{pH}} = -\\log(3{{,}}2 \\times 10^{{-3}}) \\approx {nb(v, 3)}$, soit ${nb(r, 1, garder=True)}$."], f"$\\mathrm{{pH}} \\approx {nb(r, 1, garder=True)}$")
    v, r = ph_de(5.0e-4 / 0.100)
    L.add("approfondissement", N, "On dissout $5{,}0 \\times 10^{-4}$ mol d'ions oxonium dans de l'eau pour obtenir $100$ mL de solution. Calculer le pH.",
          ["$[\\mathrm{H_3O^+}] = \\dfrac{n}{V} = \\dfrac{5{,}0 \\times 10^{-4}}{0{,}100} = 5{,}0 \\times 10^{-3}\\ \\mathrm{mol \\cdot L^{-1}}$.", f"$\\mathrm{{pH}} = -\\log(5{{,}}0 \\times 10^{{-3}}) \\approx {nb(v, 3)}$, soit ${nb(r, 1, garder=True)}$."],
          f"$\\mathrm{{pH}} \\approx {nb(r, 1, garder=True)}$")
    _ok(abs(v + math.log10(5e-3)) < 1e-12)
    L.add("approfondissement", N, "Le pH d'une solution passe de $3{,}0$ à $4{,}0$. Par combien la concentration en ions oxonium a-t-elle été divisée ?", ["$[\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}$ : on passe de $10^{-3}$ à $10^{-4}\\ \\mathrm{mol \\cdot L^{-1}}$.", "Elle a été divisée par $10$."], "Par $10$", acc("par 10", "10"))

    # f) concentration à partir du pH — 8
    N = "concentration-a-partir-du-ph"
    for d, ph, ctx in [("application", F(36, 10), "Une solution a un pH de $3{,}6$."), ("application", F(52, 10), "Une eau de pluie a un pH de $5{,}2$."),
                       ("intermediaire", F(74, 10), "Le sang humain a un pH d'environ $7{,}4$."), ("intermediaire", F(29, 10), "Un vinaigre dilué a un pH de $2{,}9$."),
                       ("intermediaire", F(83, 10), "L'eau de mer a un pH d'environ $8{,}3$.")]:
        x = 10 ** (-float(ph))
        tex, txt, _, _ = sci(x, 2)
        L.add(d, N, ctx + " Calculer la concentration en ions oxonium, avec deux chiffres significatifs.",
              [f"$[\\mathrm{{H_3O^+}}] = c^\\circ \\times 10^{{-\\mathrm{{pH}}}} = 10^{{-{nb(ph)}}}\\ \\mathrm{{mol \\cdot L^{{-1}}}}$.", f"$[\\mathrm{{H_3O^+}}] \\approx {tex}\\ \\mathrm{{mol \\cdot L^{{-1}}}}$."],
              f"$\\approx {tex}$ mol/L")
    x = 10 ** -2.5 * 0.5
    tex, _, _, _ = sci(x, 2)
    L.add("approfondissement", N, "Une solution de pH $2{,}5$ a un volume de $500$ mL. Quelle quantité d'ions oxonium contient-elle ? (deux chiffres significatifs)",
          ["$[\\mathrm{H_3O^+}] = 10^{-2{,}5} \\approx 3{,}2 \\times 10^{-3}\\ \\mathrm{mol \\cdot L^{-1}}$.", f"$n = [\\mathrm{{H_3O^+}}] \\times V \\approx 10^{{-2{{,}}5}} \\times 0{{,}}500 \\approx {tex}$ mol."], f"$\\approx {tex}$ mol")
    L.add("approfondissement", N, "Deux solutions ont pour pH $2{,}0$ et $5{,}0$. Combien de fois la première est-elle plus concentrée en ions oxonium ?", ["$\\dfrac{10^{-2}}{10^{-5}} = 10^{3}$.", "Elle est $1\\,000$ fois plus concentrée."], "$1\\,000$ fois", acc("1000 fois", "1000"))
    L.add("probleme", N, "Une piscine doit avoir un pH compris entre $7{,}2$ et $7{,}6$. Le pH mesuré est $7{,}9$. La concentration en ions oxonium est-elle trop forte ou trop faible ?",
          ["Un pH trop élevé correspond à une concentration en ions oxonium trop faible ($[\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}$ diminue quand le pH augmente).", "Elle est trop faible : il faut acidifier légèrement l'eau."], "Trop faible")

    # g) échelle de pH — 5
    N = "echelle-de-ph"
    for d, ph, nat in [("application", "2{,}5", "Acide"), ("application", "7{,}0", "Neutre"), ("application", "11{,}3", "Basique")]:
        L.add(d, N, f"À $25$ °C, une solution a un pH de ${ph}$. Est-elle acide, neutre ou basique ?", ["À $25$ °C : pH $< 7$ acide, pH $= 7$ neutre, pH $> 7$ basique.", f"Elle est {nat.lower()}."], nat)
    L.add("intermediaire", N, "Quelle solution est la plus acide : un soda de pH $2{,}5$ ou un jus de tomate de pH $4{,}2$ ?", ["Plus le pH est petit, plus $[\\mathrm{H_3O^+}]$ est grande.", "Le soda est le plus acide."], "Le soda")
    L.add("approfondissement", N, "Vrai ou faux ? « Une solution de pH $4$ est deux fois plus acide qu'une solution de pH $8$. » Justifier.", ["$\\dfrac{10^{-4}}{10^{-8}} = 10^{4}$ : elle contient $10\\,000$ fois plus d'ions oxonium.", "L'échelle de pH est logarithmique : l'affirmation est fausse."], "Faux")

    # h) groupes carboxyle et amine — 3
    N = "acides-carboxyliques-et-amines"
    L.add("intermediaire", N, "Quel groupe caractéristique porte un acide carboxylique ?", ["Un acide carboxylique porte le groupe carboxyle $\\mathrm{-COOH}$."], "Le groupe carboxyle", acc("le groupe carboxyle", "carboxyle", "COOH"))
    L.add("intermediaire", N, "Quel est l'acide conjugué de l'éthylamine $\\mathrm{C_2H_5NH_2}$ ?", ["Une amine capte un proton sur le doublet non liant de l'azote.", "On obtient l'ion éthylammonium $\\mathrm{C_2H_5NH_3^+}$."], M("C_2H_5NH_3^+"), acc("C2H5NH3+"))
    L.add("approfondissement", N, "Pourquoi une amine est-elle une base de Brönsted ?", ["L'atome d'azote porte un doublet non liant.", "Il peut capter un proton $\\mathrm{H^+}$ : l'amine est une base."], "Son azote peut capter un proton", acc("l'azote capte un proton", "doublet non liant", "elle capte un proton"))
    return L.fin()


# =====================================================================
# Tle — PREMIER PRINCIPE DE LA THERMODYNAMIQUE ET TRANSFERTS THERMIQUES
# =====================================================================
@chapitre("terminale", "premier-principe-thermique")
def gT_premier_principe():
    L = Lot(("terminale", "premier-principe-thermique"))
    CEAU = "c_{\\text{eau}} = 4\\,180\\ \\mathrm{J \\cdot kg^{-1} \\cdot K^{-1}}"

    def J(x, cs=3):
        tex, _, _, e = sci(x, cs)
        return tex

    # a) énergie interne et premier principe — 8
    N = "premier-principe"
    for d, W, Q, ctx in [("application", 150, -90, "On comprime l'air d'une pompe à vélo : il reçoit un travail $W = 150$ J et cède $90$ J à l'extérieur par transfert thermique."),
                         ("application", 0, 2500, "Un bloc de cuivre reçoit $Q = 2\\,500$ J par transfert thermique, sans échange de travail."),
                         ("intermediaire", -400, 1000, "Un gaz reçoit $1\\,000$ J par transfert thermique et fournit un travail de $400$ J au milieu extérieur en se détendant."),
                         ("intermediaire", 200, -200, "Un système reçoit un travail de $200$ J et cède $200$ J par transfert thermique.")]:
        dU = W + Q
        L.add(d, N, ctx + " Calculer la variation $\\Delta U$ de son énergie interne.",
              ["Premier principe (système fermé, au repos macroscopique) : $\\Delta U = W + Q$, les énergies reçues comptées positivement.",
               f"$W = {nb(W)}$ J et $Q = {nb(Q)}$ J, donc $\\Delta U = {nb(W)} + ({nb(Q)}) = {nb(dU)}$ J." if Q < 0 else f"$W = {nb(W)}$ J et $Q = {nb(Q)}$ J, donc $\\Delta U = {nb(dU)}$ J."],
              f"${nb(dU)}$ J")
    L.add("intermediaire", N, "Un système fermé voit son énergie interne augmenter de $300$ J alors qu'il reçoit un travail de $500$ J. Quel est le transfert thermique $Q$ ?",
          ["$\\Delta U = W + Q$, donc $Q = \\Delta U - W = 300 - 500 = -200$ J.", "$Q < 0$ : le système cède $200$ J à l'extérieur."], "$-200$ J")
    L.add("intermediaire", N, "Quel signe a $Q$ quand un système cède de l'énergie par transfert thermique au milieu extérieur ?", ["Convention : une énergie reçue par le système est positive, une énergie cédée est négative.", "$Q < 0$."], "Négatif", acc("négatif", "Q < 0"))
    L.add("approfondissement", N, "Vrai ou faux ? « Si un système reçoit de l'énergie par transfert thermique, sa température augmente forcément. » Justifier.",
          ["$\\Delta U = W + Q$ : si le système fournit en même temps un travail ($W < 0$), $\\Delta U$ peut être nulle ou négative.", "Lors d'un changement d'état, l'énergie reçue ne modifie pas la température. L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Une brique (système incompressible) n'échange aucun travail et reçoit $Q = 4\\,200$ J par transfert thermique. Que vaut la variation de son énergie interne ?", ["Un système incompressible ne reçoit pas de travail des forces de pression : $W = 0$.", "Le premier principe se réduit à $\\Delta U = Q = 4\\,200$ J."], "$4\\,200$ J")

    # b) capacité thermique — 8
    N = "capacite-thermique"
    Q = 1.5 * 4180 * 85
    L.add("application", N, f"On chauffe $1{{,}}5$ kg d'eau de $15$ °C à $100$ °C. Calculer l'énergie reçue par l'eau. On donne ${CEAU}$.",
          ["$Q = \\Delta U = m\\, c\\, \\Delta T$ avec $\\Delta T = 100 - 15 = 85$ K.", f"$Q = 1{{,}}5 \\times 4\\,180 \\times 85 \\approx {J(Q)}$ J."], f"$\\approx {J(Q)}$ J")
    Q = 0.200 * 385 * 60
    L.add("application", N, "Un bloc de cuivre de $200$ g passe de $20$ °C à $80$ °C. Calculer l'énergie reçue. On donne $c_{\\text{Cu}} = 385\\ \\mathrm{J \\cdot kg^{-1} \\cdot K^{-1}}$.",
          ["$Q = m\\, c\\, \\Delta T = 0{,}200 \\times 385 \\times 60$.", f"$Q = {nb(F(200, 1000) * 385 * 60)}$ J."], f"${nb(F(200, 1000) * 385 * 60)}$ J")
    dT = F(25080, 2 * 4180)
    L.add("application", N, f"$2{{,}}0$ kg d'eau reçoivent $25\\,080$ J. De combien leur température augmente-t-elle ? ${CEAU}$.",
          ["$\\Delta T = \\dfrac{Q}{m\\, c} = \\dfrac{25\\,080}{2{,}0 \\times 4\\,180}$.", f"$\\Delta T = {nb(dT)}$ K, soit ${nb(dT)}$ °C."], f"${nb(dT)}$ K")
    c = F(13500, F(5, 10) * 30)
    L.add("intermediaire", N, "Un bloc de $500$ g d'un métal reçoit $13\\,500$ J et sa température monte de $30$ K. Calculer sa capacité thermique massique.",
          ["$c = \\dfrac{Q}{m\\, \\Delta T} = \\dfrac{13\\,500}{0{,}500 \\times 30}$.", f"$c = {nb(c)}\\ \\mathrm{{J \\cdot kg^{{-1}} \\cdot K^{{-1}}}}$ (proche de l'aluminium)."], f"${nb(c)}$ J·kg⁻¹·K⁻¹")
    L.add("intermediaire", N, "Quelle est la capacité thermique $C$ de $3{,}0$ kg d'eau ? ($" + CEAU + "$)", ["$C = m\\, c = 3{,}0 \\times 4\\,180 = 12\\,540\\ \\mathrm{J \\cdot K^{-1}}$."], "$12\\,540$ J/K")
    Q = 0.250 * 4180 * (-65)
    L.add("intermediaire", N, f"Un thé de $250$ g (assimilé à de l'eau) refroidit de $85$ °C à $20$ °C. Calculer la variation de son énergie interne. ${CEAU}$.",
          ["$\\Delta U = m\\, c\\, (T_f - T_i) = 0{,}250 \\times 4\\,180 \\times (20 - 85)$.", f"$\\Delta U \\approx {J(Q)}$ J : négative, le thé cède de l'énergie."], f"$\\approx {J(Q)}$ J")
    m = F(334400, 4180 * 80)
    L.add("approfondissement", N, f"Quelle masse d'eau peut-on porter de $20$ °C à $100$ °C avec $334\\,400$ J ? ${CEAU}$.",
          ["$m = \\dfrac{Q}{c\\, \\Delta T} = \\dfrac{334\\,400}{4\\,180 \\times 80}$.", f"$m = {nb(m)}$ kg."], f"${nb(m)}$ kg")
    _ok(m == 1)
    L.add("approfondissement", N, "On fournit la même énergie à $1$ kg d'eau ($c = 4\\,180$) et à $1$ kg d'aluminium ($c = 897$, en $\\mathrm{J \\cdot kg^{-1} \\cdot K^{-1}}$). Lequel s'échauffe le plus ?",
          ["$\\Delta T = \\dfrac{Q}{m\\, c}$ : à $Q$ et $m$ égaux, l'élévation est la plus grande pour le plus petit $c$.", "L'aluminium s'échauffe environ $4{,}7$ fois plus que l'eau."], "L'aluminium")

    # c) puissance et durée — 6
    N = "puissance-et-duree"
    Q = 1.0 * 4180 * 80
    t = Q / 2000
    L.add("intermediaire", N, f"Une bouilloire de $2\\,000$ W chauffe $1{{,}}0$ kg d'eau de $20$ °C à $100$ °C. En supposant qu'il n'y a pas de pertes, combien de temps faut-il ? ${CEAU}$.",
          [f"$Q = 1{{,}}0 \\times 4\\,180 \\times 80 = {nb(Q)}$ J.", f"$\\Delta t = \\dfrac{{Q}}{{P}} = \\dfrac{{{nb(Q)}}}{{2\\,000}} \\approx {nb(t, 1)}$ s, soit environ $2$ min $47$ s."], f"$\\approx {nb(arr(t))}$ s")
    L.add("application", N, "Un radiateur de $1\\,500$ W fonctionne pendant $2$ h. Quelle énergie transfère-t-il, en kWh ?", ["$E = P \\times \\Delta t = 1{,}5\\ \\mathrm{kW} \\times 2\\ \\mathrm{h} = 3$ kWh."], "$3$ kWh")
    L.add("application", N, "Convertir $3$ kWh en joules.", ["$1$ kWh $= 1\\,000\\ \\mathrm{W} \\times 3\\,600\\ \\mathrm{s} = 3{,}6 \\times 10^{6}$ J.", "$3$ kWh $= 1{,}08 \\times 10^{7}$ J."], "$1{,}08 \\times 10^{7}$ J")
    P = 0.300 * 4180 * 70 / 90
    L.add("intermediaire", N, f"Un four à micro-ondes chauffe $300$ g d'eau de $20$ °C à $90$ °C en $90$ s. Quelle puissance thermique l'eau a-t-elle reçue ? ${CEAU}$.",
          ["$Q = 0{,}300 \\times 4\\,180 \\times 70 = 87\\,780$ J.", f"$P = \\dfrac{{Q}}{{\\Delta t}} = \\dfrac{{87\\,780}}{{90}} \\approx {nb(P, 1)}$ W."], f"$\\approx {nb(arr(P))}$ W")
    L.add("approfondissement", N, "Un chauffe-eau électrique de $200$ L chauffe l'eau de $15$ °C à $60$ °C. Quel est le coût de l'énergie reçue par l'eau, au prix de $0{,}20$ € le kWh ? ($" + CEAU + "$, $1$ L d'eau $= 1$ kg)",
          [f"$Q = 200 \\times 4\\,180 \\times 45 = {nb(200 * 4180 * 45)}$ J.", f"En kWh : $\\dfrac{{{nb(200 * 4180 * 45)}}}{{3{{,}}6 \\times 10^{{6}}}} \\approx {nb(200 * 4180 * 45 / 3.6e6, 2)}$ kWh.",
           f"Coût : $\\approx {nb(arr(200 * 4180 * 45 / 3.6e6 * 0.20, 2), 2, garder=True)}$ €."], f"$\\approx {nb(arr(200 * 4180 * 45 / 3.6e6 * 0.20, 2), 2, garder=True)}$ €")
    t = 0.5 * 4180 * 80 / 800
    L.add("probleme", N, f"Une plaque électrique fournit à $0{{,}}50$ kg d'eau une puissance utile de $800$ W. Combien de temps faut-il pour la porter de $20$ °C à $100$ °C ? ${CEAU}$.",
          ["$Q = 0{,}50 \\times 4\\,180 \\times 80 = 167\\,200$ J.", f"$\\Delta t = \\dfrac{{167\\,200}}{{800}} = {nb(t)}$ s, soit $3$ min $29$ s."], f"${nb(t)}$ s")

    # d) sens et modes de transfert — 7
    N = "sens-et-modes-de-transfert"
    L.add("application", N, "Spontanément, dans quel sens se fait un transfert thermique entre deux corps ?", ["Du corps le plus chaud vers le corps le plus froid, jusqu'à l'équilibre thermique."], "Du plus chaud vers le plus froid", acc("du plus chaud vers le plus froid", "du chaud vers le froid"))
    for d, sit, mode, expl in [("application", "la chaleur qui traverse le fond d'une casserole posée sur une plaque", "La conduction", "Transfert de proche en proche dans un solide, sans déplacement de matière."),
                               ("application", "l'air chaud d'un radiateur qui monte et réchauffe toute la pièce", "La convection", "Transfert par déplacement de matière (un fluide en mouvement)."),
                               ("application", "l'énergie du Soleil qui atteint la Terre à travers le vide", "Le rayonnement", "Seul le rayonnement (ondes électromagnétiques) traverse le vide."),
                               ("intermediaire", "la main qui se réchauffe en tenant une tasse chaude", "La conduction ", "Contact entre deux solides : transfert de proche en proche.")]:
        L.add(d, N, f"Quel mode de transfert thermique intervient principalement dans {sit} ?", [expl], mode.strip())
    L.add("intermediaire", N, "On plonge un glaçon à $0$ °C dans un verre d'eau à $20$ °C. Quel corps cède de l'énergie ?", ["Le transfert va spontanément du plus chaud vers le plus froid.", "L'eau du verre cède de l'énergie au glaçon."], "L'eau du verre", acc("l'eau du verre", "l'eau"))
    L.add("approfondissement", N, "Vrai ou faux ? « Un objet froid peut céder spontanément de l'énergie thermique à un objet chaud. » Justifier.", ["Le transfert thermique spontané va toujours du chaud vers le froid.", "L'inverse demande un apport de travail (réfrigérateur, pompe à chaleur) : l'affirmation est fausse."], "Faux")

    # e) flux thermique — 6
    N = "flux-thermique"
    L.add("application", N, "Une paroi laisse passer $36\\,000$ J en $1$ min. Calculer le flux thermique.", ["$\\varphi = \\dfrac{Q}{\\Delta t} = \\dfrac{36\\,000}{60} = 600$ W."], "$600$ W")
    L.add("application", N, "Dans quelle unité s'exprime un flux thermique ?", ["Un flux est une énergie par seconde : il s'exprime en watts ($1$ W $= 1\\ \\mathrm{J \\cdot s^{-1}}$)."], "Le watt", acc("le watt", "watt", "W"))
    Q = 250 * 3600
    L.add("intermediaire", N, "Une fenêtre laisse fuir un flux constant de $250$ W. Quelle énergie perd-on en $1$ h ?", [f"$Q = \\varphi \\times \\Delta t = 250 \\times 3\\,600 = {nb(Q)}$ J."], f"${J(Q, 2)}$ J")
    Q = 120 * 86400
    L.add("intermediaire", N, "Une paroi a un flux thermique de $120$ W. Quelle énergie traverse-t-elle en $24$ h, en kWh ?", ["$E = 0{,}120\\ \\mathrm{kW} \\times 24\\ \\mathrm{h} = 2{,}88$ kWh."], "$2{,}88$ kWh")
    _ok(_proche(Q / 3.6e6, 2.88))
    L.add("intermediaire", N, "Un flux de $1{,}2$ kW traverse un mur pendant $10$ min. Calculer l'énergie transférée.", ["$Q = 1\\,200 \\times 600 = 7{,}2 \\times 10^{5}$ J."], "$7{,}2 \\times 10^{5}$ J")
    L.add("approfondissement", N, "Une maison perd en moyenne $1{,}5$ kW par ses parois pendant les $150$ jours de chauffage. Quel est le coût de cette énergie à $0{,}20$ € le kWh ?", ["$E = 1{,}5 \\times 24 \\times 150 = 5\\,400$ kWh.", "Coût : $5\\,400 \\times 0{,}20 = 1\\,080$ €."], "$1\\,080$ €")

    # f) résistance thermique — 7
    N = "resistance-thermique"
    for d, Ti, Te, R in [("application", 19, 4, F(30, 1000)), ("intermediaire", 20, -5, F(50, 1000)), ("intermediaire", 21, 6, F(5, 100))]:
        phi = (F(Ti) - F(Te)) / R
        L.add(d, N, f"Un mur sépare l'intérieur à ${Ti}$ °C de l'extérieur à ${Te}$ °C ; sa résistance thermique vaut $R_{{th}} = {nb(R, 3, garder=True)}\\ \\mathrm{{K \\cdot W^{{-1}}}}$. Calculer le flux thermique qui le traverse.",
              [f"$\\Delta T = {Ti} - ({Te}) = {Ti - Te}$ K." if Te < 0 else f"$\\Delta T = {Ti} - {Te} = {Ti - Te}$ K.", f"$\\varphi = \\dfrac{{\\Delta T}}{{R_{{th}}}} = \\dfrac{{{Ti - Te}}}{{{nb(R, 3, garder=True)}}} = {nb(phi)}$ W."], f"${nb(phi)}$ W")
    R = F(15, 600)
    L.add("intermediaire", N, "Une paroi soumise à un écart de $15$ K laisse passer $600$ W. Calculer sa résistance thermique.", ["$R_{th} = \\dfrac{\\Delta T}{\\varphi} = \\dfrac{15}{600}$.", f"$R_{{th}} = {nb(R)}\\ \\mathrm{{K \\cdot W^{{-1}}}}$."], f"${nb(R)}$ K/W")
    L.add("intermediaire", N, "Deux murs : $R_1 = 0{,}02\\ \\mathrm{K \\cdot W^{-1}}$ et $R_2 = 0{,}08\\ \\mathrm{K \\cdot W^{-1}}$. Lequel isole le mieux ?", ["Plus $R_{th}$ est grand, plus le flux est faible à écart de température égal.", "Le mur 2 isole le mieux."], "Le mur 2", acc("le mur 2", "mur 2", "R2"))
    L.add("approfondissement", N, "Après des travaux d'isolation, la résistance thermique d'un toit est multipliée par $4$. Par combien le flux perdu est-il divisé, à écart de température égal ?", ["$\\varphi = \\dfrac{\\Delta T}{R_{th}}$ : $\\varphi$ est inversement proportionnel à $R_{th}$.", "Le flux est divisé par $4$."], "Par $4$", acc("par 4", "4"))
    E = float((F(19) - 4) / F(30, 1000)) * 24 / 1000
    L.add("probleme", N, "Le mur de résistance $0{,}030\\ \\mathrm{K \\cdot W^{-1}}$ (intérieur $19$ °C, extérieur $4$ °C) laisse fuir $500$ W. Combien coûte cette perte sur $24$ h, à $0{,}20$ € le kWh ?",
          [f"$E = 0{{,}}500\\ \\mathrm{{kW}} \\times 24\\ \\mathrm{{h}} = {nb(E)}$ kWh.", f"Coût : ${nb(E)} \\times 0{{,}}20 = {nb(F(str(E)) * F(2, 10), 2, garder=True)}$ €."], f"${nb(F(str(E)) * F(2, 10), 2, garder=True)}$ €")

    # g) effet de serre — 4
    N = "bilan-terre-effet-de-serre"
    L.add("application", N, "Par quel mode de transfert la Terre reçoit-elle l'énergie du Soleil ?", ["Entre le Soleil et la Terre, il y a le vide spatial : seul le rayonnement le traverse."], "Le rayonnement")
    L.add("intermediaire", N, "Citer un gaz à effet de serre présent dans l'atmosphère.", ["Vapeur d'eau, dioxyde de carbone ($\\mathrm{CO_2}$), méthane…"], "Le dioxyde de carbone", acc("CO2", "dioxyde de carbone", "vapeur d'eau", "méthane"))
    L.add("intermediaire", N, "Sans effet de serre, la température moyenne de la Terre serait d'environ $-18$ °C au lieu de $+15$ °C. Quel écart de température l'effet de serre naturel apporte-t-il ?", ["$15 - (-18) = 33$ °C."], "$33$ °C")
    L.add("approfondissement", N, "Vrai ou faux ? « L'effet de serre est un phénomène uniquement causé par les activités humaines. » Justifier.", ["L'effet de serre naturel (vapeur d'eau, $\\mathrm{CO_2}$…) existe sans l'Homme et rend la Terre habitable.", "Les activités humaines le **renforcent**. L'affirmation est fausse."], "Faux")

    # h) loi de Newton — 4
    N = "loi-de-newton-du-refroidissement"
    phi = 10 * F(2, 100) * (80 - 20)
    L.add("intermediaire", N, "Une tasse de café à $80$ °C, de surface d'échange $S = 0{,}020$ m², est dans une pièce à $20$ °C. Avec $h = 10\\ \\mathrm{W \\cdot m^{-2} \\cdot K^{-1}}$, calculer le flux perdu.",
          ["$\\varphi = h\\, S\\, (T - T_{\\text{ext}}) = 10 \\times 0{,}020 \\times (80 - 20)$.", f"$\\varphi = {nb(phi)}$ W."], f"${nb(phi)}$ W")
    L.add("intermediaire", N, "Le café précédent est maintenant à $50$ °C. Le flux perdu est-il plus grand ou plus petit qu'à $80$ °C ? Le calculer.", ["$\\varphi = 10 \\times 0{,}020 \\times (50 - 20) = 6$ W.", "Le flux est plus petit : l'écart de température a diminué."], "$6$ W")
    L.add("approfondissement", N, "Vrai ou faux ? « Selon la loi de Newton, un café posé dans une pièce à $20$ °C finit par descendre en dessous de $20$ °C. » Justifier.",
          ["Le flux est proportionnel à $T - T_{\\text{ext}}$ : il s'annule quand $T = T_{\\text{ext}}$.", "La température tend vers $20$ °C sans jamais descendre en dessous. L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Pourquoi un café chaud refroidit-il de plus en plus lentement ?", ["Le flux perdu est proportionnel à l'écart $T - T_{\\text{ext}}$.", "Cet écart diminue au cours du refroidissement, donc le flux aussi."], "L'écart de température diminue", acc("l'écart de température diminue", "l'écart diminue"))
    return L.fin()


# =====================================================================
# Tle — TITRAGES
# =====================================================================
def _cs(x, n=3):
    """Nombre décimal (non scientifique) à n chiffres significatifs, en LaTeX."""
    x = float(x)
    e = math.floor(math.log10(abs(x)))
    d = max(n - 1 - e, 0)
    v = arr(x, d)
    return nb(v, d, garder=True)


@chapitre("terminale", "titrages")
def gT_titrages():
    L = Lot(("terminale", "titrages"))
    ML = "\\ \\mathrm{mol \\cdot L^{-1}}"

    # a) relation à l'équivalence — 9
    N = "relation-a-l-equivalence"
    for d, nomA, eq, VA, cB, VE in [
        ("application", "d'acide chlorhydrique", "H_3O^+ + HO^- \\to 2\\,H_2O", 20.0, 0.100, 15.0),
        ("application", "d'acide éthanoïque", "CH_3COOH + HO^- \\to CH_3COO^- + H_2O", 10.0, 0.050, 12.4),
        ("intermediaire", "d'ammoniac", "NH_3 + H_3O^+ \\to NH_4^+ + H_2O", 20.0, 0.020, 16.8),
        ("intermediaire", "d'hydroxyde de sodium", "HO^- + H_3O^+ \\to 2\\,H_2O", 25.0, 0.150, 9.6),
        ("intermediaire", "d'acide méthanoïque", "HCOOH + HO^- \\to HCOO^- + H_2O", 10.0, 0.100, 8.3),
    ]:
        cA = cB * VE / VA
        L.add(d, N, f"On titre $V_A = {nb(VA, 1, garder=True)}$ mL d'une solution {nomA} par une solution titrante à $c_B = {_cs(cB)}{ML}$. Réaction support : $\\mathrm{{{eq}}}$. L'équivalence est obtenue pour $V_E = {nb(VE, 1, garder=True)}$ mL. Calculer $c_A$.",
              ["À l'équivalence, les réactifs ont été introduits dans les proportions stœchiométriques (ici $1 : 1$) : $c_A V_A = c_B V_E$.",
               f"$c_A = \\dfrac{{c_B V_E}}{{V_A}} = \\dfrac{{{_cs(cB)} \\times {nb(VE, 1, garder=True)}}}{{{nb(VA, 1, garder=True)}}} \\approx {_cs(cA)}{ML}$."], f"$\\approx {_cs(cA)}$ mol/L")
    cA = 0.100 * 18.6 / (2 * 10.0)
    L.add("intermediaire", N, f"On titre $V_A = 10{{,}}0$ mL d'acide oxalique par la soude à $c_B = 0{{,}}100{ML}$, selon $\\mathrm{{H_2C_2O_4 + 2\\,HO^- \\to C_2O_4^{{2-}} + 2\\,H_2O}}$. $V_E = 18{{,}}6$ mL. Calculer $c_A$.",
          ["À l'équivalence : $n_A = \\dfrac{n_B}{2}$, soit $c_A V_A = \\dfrac{c_B V_E}{2}$.", f"$c_A = \\dfrac{{0{{,}}100 \\times 18{{,}}6}}{{2 \\times 10{{,}}0}} = {_cs(cA)}{ML}$."], f"${_cs(cA)}$ mol/L")
    n = 0.100 * 12.0e-3
    tex, _, _, _ = sci(n, 3)
    L.add("application", N, f"Solution titrante à $c_B = 0{{,}}100{ML}$, équivalence à $V_E = 12{{,}}0$ mL. Quelle quantité de matière de réactif titrant a été versée à l'équivalence ?",
          ["$n_B = c_B \\times V_E = 0{,}100 \\times 12{,}0 \\times 10^{-3}$.", f"$n_B = {tex}$ mol."], f"${tex}$ mol")
    L.add("intermediaire", N, "Que peut-on dire des réactifs à l'équivalence d'un titrage ?", ["À l'équivalence, les réactifs ont été introduits dans les proportions stœchiométriques de la réaction support.", "Ils sont alors entièrement consommés : changement de réactif limitant."],
          "Ils sont dans les proportions stœchiométriques", acc("proportions stœchiométriques", "ils sont dans les proportions stœchiométriques"))
    L.add("approfondissement", N, "Vrai ou faux ? « À l'équivalence, les volumes de solution titrée et de solution titrante sont égaux. » Justifier.", ["Ce sont les **quantités de matière** qui sont dans les proportions stœchiométriques, pas les volumes.", "$c_A V_A = c_B V_E$ n'implique $V_A = V_E$ que si $c_A = c_B$. L'affirmation est fausse."], "Faux")

    # b) prévoir le volume équivalent — 6
    N = "prevoir-le-volume-equivalent"
    for d, cA, VA, cB, coef in [("application", 0.080, 20.0, 0.100, 1), ("intermediaire", 0.120, 10.0, 0.050, 1), ("intermediaire", 0.0250, 20.0, 0.100, 2)]:
        VE = coef * cA * VA / cB
        rel = "c_A V_A = c_B V_E" if coef == 1 else "2\\,c_A V_A = c_B V_E"
        L.add(d, N, f"On titre $V_A = {nb(VA, 1, garder=True)}$ mL d'une solution à $c_A = {_cs(cA)}{ML}$ par une solution à $c_B = {_cs(cB)}{ML}$" + (" (réaction $1 : 1$)." if coef == 1 else ", selon $\\mathrm{A + 2\\,B \\to}$ produits.") + " Prévoir $V_E$.",
              [f"À l'équivalence : ${rel}$.", f"$V_E = \\dfrac{{{DEUX if coef == 2 else ''}{_cs(cA)} \\times {nb(VA, 1, garder=True)}}}{{{_cs(cB)}}} = {nb(arr(VE, 1), 1, garder=True)}$ mL."], f"${nb(arr(VE, 1), 1, garder=True)}$ mL")
    L.add("intermediaire", N, "On dilue $10$ fois la solution titrée avant de la titrer. Le volume à l'équivalence, pour le même volume prélevé, est-il multiplié ou divisé par $10$ ?", ["La quantité de matière titrée dans le prélèvement est divisée par $10$.", "$V_E$ est divisé par $10$."], "Divisé par $10$", acc("divisé par 10", "divisé"))
    L.add("approfondissement", N, "Une burette contient $25$ mL. On prévoit $V_E = 38$ mL. Que faut-il faire ?", ["L'équivalence ne serait pas atteinte avec une seule burette.", "Il faut prélever un volume de solution titrée plus petit (ou utiliser un titrant plus concentré)."], "Prélever moins de solution titrée", acc("prélever moins de solution titrée", "prélever moins", "titrant plus concentré"))
    L.add("approfondissement", N, "Pour un titrage précis à la burette de $25$ mL, on vise $V_E$ autour de $15$ mL. Avec $c_B = 0{,}100\\ \\mathrm{mol \\cdot L^{-1}}$ et $c_A \\approx 0{,}15\\ \\mathrm{mol \\cdot L^{-1}}$ (réaction $1 : 1$), quel volume $V_A$ faut-il prélever ?", ["$V_A = \\dfrac{c_B V_E}{c_A} = \\dfrac{0{,}100 \\times 15}{0{,}15} = 10$ mL.", "On prélève $10{,}0$ mL à la pipette jaugée."], "$10$ mL")

    # c) composition après un ajout — 6
    N = "composition-apres-un-ajout"
    nA = 1.5e-3
    for d, V, ion in [("intermediaire", 10.0, "H_3O^+"), ("intermediaire", 22.0, "HO^-"), ("approfondissement", 15.0, "H_3O^+")]:
        nB = 0.10 * V * 1e-3
        if nB < nA - 1e-12:
            tex = sci(nA - nB, 2)[0]
            txt, rep = f"$n_B < n_A$ : avant l'équivalence, $\\mathrm{{HO^-}}$ est limitant ; il reste $n_A - n_B = {tex}$ mol d'ions $\\mathrm{{H_3O^+}}$ (milieu acide).", f"${tex}$ mol"
        elif nB > nA + 1e-12:
            tex = sci(nB - nA, 2)[0]
            txt, rep = f"$n_B > n_A$ : après l'équivalence, les ions $\\mathrm{{H_3O^+}}$ sont épuisés et il y a un excès de $n_B - n_A = {tex}$ mol d'ions $\\mathrm{{HO^-}}$ (milieu basique).", f"${tex}$ mol"
        else:
            txt, rep = "$n_B = n_A$ : c'est l'équivalence, il ne reste ni $\\mathrm{H_3O^+}$ ni $\\mathrm{HO^-}$ en excès.", "$0$ mol"
        q = "Quelle quantité d'ions $\\mathrm{H_3O^+}$ reste-t-il dans le bécher ?" if ion == "H_3O^+" else "Quelle quantité d'ions $\\mathrm{HO^-}$ en excès le bécher contient-il ?"
        L.add(d, N, f"Un bécher contient $n_A = 1{{,}}5 \\times 10^{{-3}}$ mol d'ions $\\mathrm{{H_3O^+}}$. On verse $V = {nb(V, 1, garder=True)}$ mL de soude à $0{{,}}10{ML}$. {q}",
              [f"$n_B = 0{{,}}10 \\times {nb(V, 1, garder=True)} \\times 10^{{-3}} = {sci(nB, 2)[0]}$ mol.", txt], rep)
    L.add("intermediaire", N, "Avant l'équivalence d'un titrage acide fort par base forte, le milieu est-il acide ou basique ?", ["Avant l'équivalence, le réactif titrant (la base) est limitant : il reste des ions $\\mathrm{H_3O^+}$.", "Le milieu est acide."], "Acide")
    L.add("intermediaire", N, "Après l'équivalence d'un titrage acide par base, quel réactif s'accumule dans le bécher ?", ["Le réactif titré est épuisé ; chaque ajout apporte du réactif titrant qui ne réagit plus.", "Le réactif titrant (ici la base, $\\mathrm{HO^-}$) s'accumule."], "Le réactif titrant", acc("le réactif titrant", "la base", "HO-"))
    L.add("approfondissement", N, "Pour $V < V_E$, quel est le réactif limitant de la réaction de titrage ?", ["Tant que l'équivalence n'est pas atteinte, tout le titrant versé est consommé.", "Le réactif limitant est le réactif titrant."], "Le réactif titrant")

    # d) titrage pH-métrique — 7
    N = "titrage-ph-metrique"
    for d, typ, rep, expl in [("application", "d'un acide fort par une base forte", "Égal à $7$", "Il ne reste que des espèces spectatrices et de l'eau : pH $= 7$ à $25$ °C."),
                              ("intermediaire", "de l'acide éthanoïque (acide faible) par la soude", "Supérieur à $7$", "Il reste l'ion éthanoate, base conjuguée : le milieu est basique."),
                              ("intermediaire", "de l'ammoniac (base faible) par l'acide chlorhydrique", "Inférieur à $7$", "Il reste l'ion ammonium, acide conjugué : le milieu est acide.")]:
        L.add(d, N, f"À $25$ °C, le pH à l'équivalence du titrage {typ} est-il égal à $7$, inférieur ou supérieur à $7$ ?", [expl], rep,
              acc("égal à 7", "7") if "Égal" in rep else acc(rep.replace("$", "").lower(), "basique" if "Sup" in rep else "acide"))
    L.add("application", N, "Comment repère-t-on l'équivalence sur une courbe de titrage pH-métrique ?", ["Elle correspond au saut de pH (méthode des tangentes parallèles, ou maximum de la dérivée $\\dfrac{\\mathrm{d(pH)}}{\\mathrm{d}V}$)."], "Par le saut de pH", acc("par le saut de pH", "saut de pH"))
    L.add("intermediaire", N, "Lors d'un titrage pH-métrique, la courbe de $\\dfrac{\\mathrm{d(pH)}}{\\mathrm{d}V}$ présente un pic à $V = 14{,}2$ mL. Que vaut $V_E$ ?", ["La dérivée est extrémale à l'équivalence."], "$14{,}2$ mL")
    L.add("approfondissement", N, "On titre l'acide éthanoïque par la soude ; le pH à l'équivalence vaut $8{,}7$. Quel indicateur coloré choisir : hélianthine (zone de virage $3{,}1$–$4{,}4$), BBT ($6{,}0$–$7{,}6$) ou phénolphtaléine ($8{,}2$–$10$) ?",
          ["La zone de virage doit contenir le pH à l'équivalence.", "$8{,}7$ est dans $[8{,}2 ; 10]$ : la phénolphtaléine."], "La phénolphtaléine")
    L.add("approfondissement", N, "Vrai ou faux ? « Lors du titrage de l'acide éthanoïque par la soude, on peut prendre comme équivalence le volume où le pH vaut $7$. » Justifier.", ["Le pH à l'équivalence est basique (vers $8$ à $9$).", "Lire $V_E$ à pH $= 7$ sous-estimerait $V_E$ : l'affirmation est fausse."], "Faux")

    # e) titrage conductimétrique — 6
    N = "titrage-conductimetrique"
    L.add("application", N, "Comment repère-t-on l'équivalence lors d'un titrage conductimétrique ?", ["La courbe $\\sigma = f(V)$ est formée de segments de droite.", "L'équivalence est à leur intersection : la rupture de pente."], "Par la rupture de pente", acc("par la rupture de pente", "rupture de pente"))
    L.add("intermediaire", N, "Titrage de l'acide chlorhydrique par la soude : avant l'équivalence, la conductivité augmente-t-elle ou diminue-t-elle ?", ["Chaque $\\mathrm{HO^-}$ versé consomme un $\\mathrm{H_3O^+}$ ($\\lambda = 35{,}0\\ \\mathrm{mS \\cdot m^2 \\cdot mol^{-1}}$) remplacé par un $\\mathrm{Na^+}$ ($\\lambda = 5{,}0$).", "La conductivité diminue."], "Elle diminue")
    L.add("intermediaire", N, "Titrage de l'acide chlorhydrique par la soude : après l'équivalence, la conductivité augmente-t-elle ou diminue-t-elle ?", ["Les ions $\\mathrm{Na^+}$ et $\\mathrm{HO^-}$ ajoutés s'accumulent sans réagir.", "La conductivité augmente."], "Elle augmente")
    L.add("intermediaire", N, "Les deux segments de droite d'un titrage conductimétrique se coupent au point d'abscisse $11{,}6$ mL. Que vaut $V_E$ ?", ["L'équivalence est à la rupture de pente."], "$11{,}6$ mL")
    L.add("approfondissement", N, "Pourquoi ajoute-t-on souvent un grand volume d'eau dans le bécher avant un titrage conductimétrique ?", ["Le titrant versé dilue la solution et courbe les segments.", "Avec beaucoup d'eau, la dilution due au titrant devient négligeable : les segments restent droits."], "Pour rendre la dilution négligeable", acc("pour rendre la dilution négligeable", "dilution négligeable"))
    L.add("approfondissement", N, "Vrai ou faux ? « L'eau ajoutée dans le bécher avant un titrage modifie le volume à l'équivalence. » Justifier.", ["L'eau n'apporte aucune espèce titrée : la quantité à titrer ne change pas.", "$V_E$ ne change pas : l'affirmation est fausse."], "Faux")

    # f) titre massique et densité — 7
    N = "titre-massique-et-densite"
    C = 0.37 * 1.19 * 1000 / 36.5
    L.add("intermediaire", N, f"Un acide chlorhydrique commercial a un titre massique de $37\\,\\%$ et une densité de $1{{,}}19$. $M(\\mathrm{{HCl}}) = 36{{,}}5\\ \\mathrm{{g \\cdot mol^{{-1}}}}$. Calculer sa concentration, avec deux chiffres significatifs.",
          ["Masse d'un litre : $1{,}19 \\times 1\\,000 = 1\\,190$ g, dont $0{,}37 \\times 1\\,190 \\approx 440$ g de HCl.", f"$C = \\dfrac{{P \\times d \\times \\rho_{{\\text{{eau}}}}}}{{M}} = \\dfrac{{0{{,}}37 \\times 1{{,}}19 \\times 1\\,000}}{{36{{,}}5}} \\approx {nb(C, 2)}$, soit environ ${_cs(C, 2)}{ML}$."], f"$\\approx {_cs(C, 2)}$ mol/L")
    C2 = 0.30 * 1.11 * 1000 / 34.0
    L.add("intermediaire", N, f"Une eau oxygénée commerciale a un titre massique de $30\\,\\%$ et une densité de $1{{,}}11$. $M(\\mathrm{{H_2O_2}}) = 34{{,}}0\\ \\mathrm{{g \\cdot mol^{{-1}}}}$. Calculer sa concentration, avec deux chiffres significatifs.",
          ["$C = \\dfrac{0{,}30 \\times 1{,}11 \\times 1\\,000}{34{,}0}$.", f"$C \\approx {nb(C2, 2)}$, soit environ ${_cs(C2, 2)}{ML}$."], f"$\\approx {_cs(C2, 2)}$ mol/L")
    L.add("application", N, "Une solution a une masse volumique de $1{,}05\\ \\mathrm{g \\cdot mL^{-1}}$. Quelle est sa densité ?", ["$d = \\dfrac{\\rho}{\\rho_{\\text{eau}}} = \\dfrac{1{,}05}{1{,}00} = 1{,}05$ (sans unité)."], "$1{,}05$")
    Cm = 0.0500 * 60.0
    L.add("application", N, "Un titrage donne $c = 0{,}0500\\ \\mathrm{mol \\cdot L^{-1}}$ d'acide éthanoïque ($M = 60{,}0\\ \\mathrm{g \\cdot mol^{-1}}$). Calculer sa concentration en masse.", ["$C_m = c \\times M = 0{,}0500 \\times 60{,}0$.", f"$C_m = {nb(Cm, 2, garder=True)}\\ \\mathrm{{g \\cdot L^{{-1}}}}$."], f"${nb(Cm, 2, garder=True)}$ g/L")
    C3 = 9.0 / 58.5
    L.add("intermediaire", N, f"Un sérum physiologique contient $9{{,}}0$ g de chlorure de sodium par litre. $M(\\mathrm{{NaCl}}) = 58{{,}}5\\ \\mathrm{{g \\cdot mol^{{-1}}}}$. Calculer sa concentration en quantité de matière.",
          ["$C = \\dfrac{C_m}{M} = \\dfrac{9{,}0}{58{,}5}$.", f"$C \\approx {_cs(C3, 2)}{ML}$."], f"$\\approx {_cs(C3, 2)}$ mol/L")
    L.add("approfondissement", N, "Quel titre massique a une solution de densité $1{,}10$ contenant $165$ g de soluté par litre ?", ["Masse d'un litre de solution : $1{,}10 \\times 1\\,000 = 1\\,100$ g.", "$P = \\dfrac{165}{1\\,100} = 0{,}15$, soit $15\\,\\%$."], "$15\\,\\%$")
    L.add("approfondissement", N, "Vrai ou faux ? « La densité d'une solution s'exprime en $\\mathrm{g \\cdot mL^{-1}}$. » Justifier.", ["$d = \\dfrac{\\rho_{\\text{solution}}}{\\rho_{\\text{eau}}}$ est un quotient de deux masses volumiques.", "C'est un nombre sans unité : l'affirmation est fausse."], "Faux")

    # g) dilutions — 5
    N = "dilutions"
    L.add("application", N, "On prélève $10{,}0$ mL d'une solution à $1{,}2\\ \\mathrm{mol \\cdot L^{-1}}$ et on complète à $100{,}0$ mL. Calculer la concentration de la solution fille.", ["Facteur de dilution : $F = \\dfrac{100{,}0}{10{,}0} = 10$.", "$C_{\\text{fille}} = \\dfrac{1{,}2}{10} = 0{,}12\\ \\mathrm{mol \\cdot L^{-1}}$."], "$0{,}12$ mol/L")
    L.add("application", N, "Quel est le facteur de dilution quand on prélève $5{,}0$ mL de solution mère pour obtenir $250{,}0$ mL de solution fille ?", ["$F = \\dfrac{V_{\\text{fille}}}{V_{\\text{mère}}} = \\dfrac{250{,}0}{5{,}0} = 50$."], "$50$")
    L.add("intermediaire", N, "Le titrage d'une solution diluée $20$ fois donne $0{,}0645\\ \\mathrm{mol \\cdot L^{-1}}$. Quelle est la concentration de la solution commerciale ?", ["La dilution a divisé la concentration par $20$ : il faut multiplier par $20$.", "$C = 20 \\times 0{,}0645 = 1{,}29\\ \\mathrm{mol \\cdot L^{-1}}$."], "$1{,}29$ mol/L")
    L.add("intermediaire", N, "Quel volume de solution mère à $0{,}500\\ \\mathrm{mol \\cdot L^{-1}}$ faut-il prélever pour préparer $200{,}0$ mL de solution à $0{,}0250\\ \\mathrm{mol \\cdot L^{-1}}$ ?", ["Conservation de la quantité de matière : $C_m V_m = C_f V_f$.", "$V_m = \\dfrac{0{,}0250 \\times 200{,}0}{0{,}500} = 10{,}0$ mL."], "$10{,}0$ mL")
    L.add("approfondissement", N, "On dilue $10$ fois, puis encore $10$ fois, une solution. Par combien sa concentration a-t-elle été divisée ?", ["Les facteurs de dilution successifs se multiplient.", "$10 \\times 10 = 100$."], "Par $100$", acc("par 100", "100"))

    # h) problème : contrôle qualité d'un vinaigre — 4
    N = "controle-qualite"
    c1 = 0.100 * 14.2 / 10.0
    L.add("probleme", N, "Contrôle d'un vinaigre : on le dilue $10$ fois, puis on titre $10{,}0$ mL de la solution diluée par la soude à $0{,}100\\ \\mathrm{mol \\cdot L^{-1}}$ ; $V_E = 14{,}2$ mL. Calculer la concentration de la solution diluée.",
          ["Réaction $1 : 1$ : $c_1 = \\dfrac{c_B V_E}{V_1} = \\dfrac{0{,}100 \\times 14{,}2}{10{,}0}$.", f"$c_1 = {_cs(c1)}\\ \\mathrm{{mol \\cdot L^{{-1}}}}$."], f"${_cs(c1)}$ mol/L")
    L.add("probleme", N, "Avec les données précédentes (solution diluée à $0{,}142\\ \\mathrm{mol \\cdot L^{-1}}$, dilution par $10$), calculer la concentration en acide éthanoïque du vinaigre.", ["On multiplie par le facteur de dilution : $c = 10 \\times 0{,}142 = 1{,}42\\ \\mathrm{mol \\cdot L^{-1}}$."], "$1{,}42$ mol/L")
    Cm = 1.42 * 60.0
    L.add("probleme", N, "Le vinaigre contient $1{,}42\\ \\mathrm{mol \\cdot L^{-1}}$ d'acide éthanoïque ($M = 60{,}0\\ \\mathrm{g \\cdot mol^{-1}}$). Calculer sa concentration en masse.", ["$C_m = 1{,}42 \\times 60{,}0$.", f"$C_m \\approx {nb(Cm, 1)}\\ \\mathrm{{g \\cdot L^{{-1}}}}$."], f"$\\approx {nb(arr(Cm, 1))}$ g/L")
    P = Cm / 1010
    L.add("probleme", N, "Le vinaigre a une concentration en masse de $85{,}2\\ \\mathrm{g \\cdot L^{-1}}$ d'acide éthanoïque et une densité de $1{,}01$. Calculer son titre massique, en pourcentage, au dixième.", ["Masse d'un litre de vinaigre : $1{,}01 \\times 1\\,000 = 1\\,010$ g.", f"$P = \\dfrac{{85{{,}}2}}{{1\\,010}} \\approx {nb(P, 4)}$, soit environ ${nb(arr(P * 100, 1))}\\,\\%$ (vinaigre « $8°$ »)."],
          f"$\\approx {nb(arr(P * 100, 1))}\\,\\%$")
    return L.fin()


# =====================================================================
# Tle — DIPÔLE RC
# =====================================================================
def _unite_temps(t):
    """(valeur LaTeX, unité) lisible pour une durée en secondes."""
    t = float(t)
    if t >= 1:
        return _cs(t, 2), "s"
    if t >= 1e-3:
        return _cs(t * 1e3, 2), "ms"
    return _cs(t * 1e6, 2), "µs"


@chapitre("terminale", "dipole-rc")
def gT_dipole_rc():
    L = Lot(("terminale", "dipole-rc"))
    kO = "\\ \\mathrm{k\\Omega}"
    uF = "\\ \\mu\\mathrm{F}"

    # a) charge d'un condensateur : q = C u — 7
    N = "charge-et-capacite"
    for d, C, u in [("application", 100e-6, 5.0), ("application", 2.2e-6, 12.0), ("intermediaire", 470e-6, 9.0)]:
        q = C * u
        Ct = _cs(C * 1e6, 2) if C * 1e6 < 10 else nb(round(C * 1e6))
        L.add(d, N, f"Un condensateur de capacité $C = {Ct}{uF}$ est chargé sous une tension $u_C = {_cs(u, 2)}$ V. Calculer la charge $q$ de son armature positive.",
              ["$q = C \\times u_C$, avec $C$ en farads.", f"$q = {Ct} \\times 10^{{-6}} \\times {_cs(u, 2)} = {sci(q, 2)[0]}$ C."], f"${sci(q, 2)[0]}$ C")
    C = 6.0e-4 / 12
    L.add("intermediaire", N, "Un condensateur porte une charge $q = 6{,}0 \\times 10^{-4}$ C sous une tension de $12$ V. Calculer sa capacité en µF.", ["$C = \\dfrac{q}{u_C} = \\dfrac{6{,}0 \\times 10^{-4}}{12} = 5{,}0 \\times 10^{-5}$ F.", "Soit $50\\ \\mu\\mathrm{F}$."], "$50$ µF")
    _ok(_proche(C, 5e-5))
    L.add("intermediaire", N, "Un condensateur de $10\\ \\mu\\mathrm{F}$ porte une charge de $50\\ \\mu\\mathrm{C}$. Quelle est la tension à ses bornes ?", ["$u_C = \\dfrac{q}{C} = \\dfrac{50 \\times 10^{-6}}{10 \\times 10^{-6}} = 5{,}0$ V."], "$5{,}0$ V")
    L.add("application", N, "Dans quelle unité s'exprime la capacité d'un condensateur ?", ["La capacité s'exprime en farads (F) ; on utilise souvent le µF ou le nF."], "Le farad", acc("le farad", "farad", "F"))
    L.add("approfondissement", N, "On double la tension aux bornes d'un condensateur. Comment varie sa charge ?", ["$q = C u_C$ : la charge est proportionnelle à la tension.", "Elle double."], "Elle double")

    # b) intensité et dérivée — 5
    N = "intensite-et-derivee"
    L.add("intermediaire", N, "Un condensateur de $10\\ \\mu\\mathrm{F}$ voit sa tension augmenter de $500\\ \\mathrm{V \\cdot s^{-1}}$. Calculer l'intensité du courant de charge.", ["$i = C \\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} = 10 \\times 10^{-6} \\times 500 = 5{,}0 \\times 10^{-3}$ A.", "Soit $5{,}0$ mA."], "$5{,}0$ mA")
    L.add("intermediaire", N, "Un condensateur de $47\\ \\mu\\mathrm{F}$ est chargé par un courant constant de $2{,}0$ mA. De combien sa tension augmente-t-elle en $1{,}0$ s ?", ["$\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} = \\dfrac{i}{C} = \\dfrac{2{,}0 \\times 10^{-3}}{47 \\times 10^{-6}} \\approx 42{,}6\\ \\mathrm{V \\cdot s^{-1}}$.", "En $1{,}0$ s : environ $43$ V."], "$\\approx 43$ V")
    _ok(arr(2e-3 / 47e-6) == 43)
    L.add("application", N, "Quelle relation lie l'intensité $i$ du courant et la charge $q$ du condensateur (convention récepteur) ?", ["L'intensité est le débit de charge : $i = \\dfrac{\\mathrm{d}q}{\\mathrm{d}t}$."], "$i = \\dfrac{\\mathrm{d}q}{\\mathrm{d}t}$", acc("i = dq/dt"))
    L.add("approfondissement", N, "En régime permanent, après la charge, que vaut l'intensité du courant dans le circuit RC ?", ["$u_C$ ne varie plus : $\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} = 0$.", "$i = C \\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} = 0$ A."], "$0$ A")
    L.add("approfondissement", N, "Vrai ou faux ? « Un condensateur laisse passer un courant continu permanent. » Justifier.", ["En régime permanent, la tension est constante, donc $i = C \\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} = 0$.", "Le condensateur se comporte alors comme un interrupteur ouvert : l'affirmation est fausse."], "Faux")

    # c) constante de temps — 8
    N = "constante-de-temps"
    for d, R, C in [("application", 10e3, 100e-6), ("application", 1.0e3, 470e-6), ("application", 4.7e3, 10e-6), ("intermediaire", 22e3, 2.2e-6), ("intermediaire", 1.0e6, 1.0e-6)]:
        tau = R * C
        Rt = f"{_cs(R / 1e3, 2)}{kO}" if R < 1e6 else "1{,}0\\ \\mathrm{M\\Omega}"
        Ct = (_cs(C * 1e6, 2) if C * 1e6 < 10 else nb(round(C * 1e6))) + uF
        v, u = _unite_temps(tau)
        L.add(d, N, f"Un circuit RC série a $R = {Rt}$ et $C = {Ct}$. Calculer la constante de temps $\\tau$.",
              ["$\\tau = R \\times C$, avec $R$ en ohms et $C$ en farads.", f"$\\tau = {sci(R, 2)[0]} \\times {sci(C, 2)[0]} = {sci(tau, 2)[0]}$ s" + ("." if u == "s" else f", soit ${v}$ {u}.")], f"${v}$ {u}")
    L.add("intermediaire", N, "Un circuit RC a pour constante de temps $\\tau = 1{,}0$ s avec $R = 10\\ \\mathrm{k\\Omega}$. Calculer $C$.", ["$C = \\dfrac{\\tau}{R} = \\dfrac{1{,}0}{10 \\times 10^{3}} = 1{,}0 \\times 10^{-4}$ F.", "Soit $100\\ \\mu\\mathrm{F}$."], "$100$ µF")
    L.add("intermediaire", N, "Un circuit RC a pour constante de temps $\\tau = 47$ ms avec $C = 10\\ \\mu\\mathrm{F}$. Calculer $R$.", ["$R = \\dfrac{\\tau}{C} = \\dfrac{47 \\times 10^{-3}}{10 \\times 10^{-6}} = 4{,}7 \\times 10^{3}\\ \\Omega$.", "Soit $4{,}7\\ \\mathrm{k\\Omega}$."], "$4{,}7$ kΩ")
    L.add("approfondissement", N, "Vérifier par les unités que le produit $RC$ est une durée : un ohm fois un farad, c'est…", ["$R = \\dfrac{u}{i}$ : $\\Omega = \\mathrm{V \\cdot A^{-1}}$ ; $C = \\dfrac{q}{u}$ : $\\mathrm{F} = \\mathrm{C \\cdot V^{-1}} = \\mathrm{A \\cdot s \\cdot V^{-1}}$.", "$\\Omega \\times \\mathrm{F} = \\mathrm{V \\cdot A^{-1} \\cdot A \\cdot s \\cdot V^{-1}} = \\mathrm{s}$ : une seconde."], "Une seconde", acc("une seconde", "seconde", "s"))

    # d) charge : u(t) — 8
    N = "charge-du-condensateur"
    for d, E, k, label in [("application", 6.0, 1, "$t = \\tau$"), ("intermediaire", 12.0, 2, "$t = 2\\tau$"), ("intermediaire", 9.0, 3, "$t = 3\\tau$")]:
        u = E * (1 - math.exp(-k))
        L.add(d, N, f"Un condensateur initialement déchargé se charge sous $E = {_cs(E, 2)}$ V à travers une résistance. Que vaut $u_C$ à {label} ?",
              ["$u_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$.", f"$u_C = {_cs(E, 2)} \\times (1 - e^{{-{k}}}) \\approx {_cs(E, 2)} \\times {nb(1 - math.exp(-k), 3)} \\approx {nb(u, 2)}$ V."], f"$\\approx {_cs(u, 2)}$ V")
    L.add("application", N, "Quel pourcentage de sa tension finale $E$ un condensateur atteint-il à $t = \\tau$ lors de la charge ?", ["$1 - e^{-1} \\approx 0{,}63$."], "$63\\,\\%$")
    L.add("application", N, "Au bout de combien de constantes de temps considère-t-on qu'un condensateur est chargé ?", ["À $t = 5\\tau$, $u_C \\approx 99\\,\\%$ de $E$ : on considère le régime permanent atteint."], "$5$", acc("5", "5τ", "5 tau"))
    v, u = _unite_temps(5 * 4.7e3 * 220e-6)
    L.add("intermediaire", N, "Avec $R = 4{,}7\\ \\mathrm{k\\Omega}$ et $C = 220\\ \\mu\\mathrm{F}$, au bout de combien de temps la charge est-elle pratiquement terminée ?", ["$\\tau = 4{,}7 \\times 10^{3} \\times 220 \\times 10^{-6} \\approx 1{,}03$ s.", f"Durée : $5\\tau \\approx {v}$ {u}."], f"$\\approx {v}$ {u}")
    t = -1.0 * math.log(1 - 4.0 / 5.0)
    L.add("approfondissement", N, "Un condensateur se charge sous $E = 5{,}0$ V avec $\\tau = 1{,}0$ s. À quelle date $u_C$ atteint-il $4{,}0$ V ?", ["$4{,}0 = 5{,}0\\left(1 - e^{-t/\\tau}\\right)$, donc $e^{-t/\\tau} = 0{,}20$.", f"$t = -\\tau \\ln(0{{,}}20) \\approx {nb(t, 3)}$ s."], f"$\\approx {_cs(t, 2)}$ s")
    L.add("approfondissement", N, "Vrai ou faux ? « À $t = 2\\tau$, un condensateur en charge a atteint $2 \\times 63\\,\\% = 126\\,\\%$ de $E$. » Justifier.", ["La loi est exponentielle, pas linéaire : $u_C(2\\tau) = E(1 - e^{-2}) \\approx 0{,}86\\,E$.", "Et $u_C$ ne dépasse jamais $E$. L'affirmation est fausse."], "Faux")

    # e) décharge — 7
    N = "decharge-du-condensateur"
    for d, E, k in [("application", 6.0, 1), ("intermediaire", 10.0, 2), ("intermediaire", 12.0, 3)]:
        u = E * math.exp(-k)
        L.add(d, N, f"Un condensateur chargé sous $E = {_cs(E, 2)}$ V se décharge dans une résistance. Que vaut $u_C$ à $t = {'' if k == 1 else k}\\tau$ ?",
              ["$u_C(t) = E\\, e^{-t/\\tau}$.", f"$u_C = {_cs(E, 2)} \\times e^{{-{k}}} \\approx {nb(u, 3)}$ V."], f"$\\approx {_cs(u, 2)}$ V")
    t = math.log(2) * 0.10
    L.add("intermediaire", N, "Lors d'une décharge avec $\\tau = 0{,}10$ s, au bout de combien de temps la tension est-elle divisée par $2$ ?", ["$E\\, e^{-t/\\tau} = \\dfrac{E}{2}$, donc $t = \\tau \\ln 2$.", f"$t = 0{{,}}10 \\times \\ln 2 \\approx {nb(t, 4)}$ s."], f"$\\approx {_cs(t, 2)}$ s")
    L.add("application", N, "Quel pourcentage de sa tension initiale reste-t-il aux bornes d'un condensateur en décharge à $t = \\tau$ ?", ["$e^{-1} \\approx 0{,}37$."], "$37\\,\\%$")
    L.add("approfondissement", N, "Un flash d'appareil photo décharge un condensateur avec $R = 2{,}0\\ \\Omega$ et $C = 1\\,000\\ \\mu\\mathrm{F}$. Calculer la durée pratique de la décharge ($5\\tau$).", ["$\\tau = 2{,}0 \\times 1{,}0 \\times 10^{-3} = 2{,}0 \\times 10^{-3}$ s.", "$5\\tau = 1{,}0 \\times 10^{-2}$ s, soit $10$ ms."], "$10$ ms")
    L.add("approfondissement", N, "Vrai ou faux ? « Pendant la décharge, le courant circule dans le même sens que pendant la charge. » Justifier.", ["Pendant la décharge, $\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} < 0$, donc $i = C \\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} < 0$ (même convention).", "Le courant circule en sens inverse : l'affirmation est fausse."], "Faux")

    # f) lecture de courbes — 6
    N = "lecture-de-courbes"
    L.add("intermediaire", N, "Sur la courbe de charge $u_C(t)$ sous $E = 8{,}0$ V, on lit que $u_C = 5{,}0$ V à $t = 20$ ms. Quelle valeur de $u_C$ faut-il chercher sur la courbe pour lire $\\tau$ ?", ["À $t = \\tau$, $u_C = 0{,}63\\,E$.", "$0{,}63 \\times 8{,}0 \\approx 5{,}0$ V : ici $\\tau \\approx 20$ ms."], "$\\approx 5{,}0$ V")
    L.add("intermediaire", N, "Sur une courbe de charge, la tangente à l'origine coupe l'asymptote $u = E$ à l'abscisse $t = 3{,}3$ ms. Que vaut $\\tau$ ?", ["La tangente à l'origine coupe l'asymptote à $t = \\tau$."], "$3{,}3$ ms")
    L.add("intermediaire", N, "Sur une courbe de décharge partant de $10$ V, on lit $u_C = 3{,}7$ V à $t = 0{,}45$ s. Que vaut $\\tau$ ?", ["À $t = \\tau$, $u_C = 0{,}37\\,E = 3{,}7$ V.", "$\\tau = 0{,}45$ s."], "$0{,}45$ s")
    L.add("application", N, "Sur une courbe de charge, $u_C$ tend vers $9{,}0$ V. Que vaut la tension $E$ du générateur ?", ["En régime permanent, $u_C = E$.", "$E = 9{,}0$ V."], "$9{,}0$ V")
    L.add("approfondissement", N, "On lit $\\tau = 22$ ms sur une courbe de charge avec $R = 10\\ \\mathrm{k\\Omega}$. Calculer $C$.", ["$C = \\dfrac{\\tau}{R} = \\dfrac{22 \\times 10^{-3}}{10 \\times 10^{3}} = 2{,}2 \\times 10^{-6}$ F.", "Soit $2{,}2\\ \\mu\\mathrm{F}$."], "$2{,}2$ µF")
    L.add("approfondissement", N, "Deux courbes de charge sous la même tension $E$ : la courbe 1 atteint $0{,}63\\,E$ à $5$ ms, la courbe 2 à $15$ ms. Même résistance. Quel condensateur a la plus grande capacité ?", ["$\\tau = RC$ : à $R$ égal, le plus grand $\\tau$ correspond au plus grand $C$.", "Celui de la courbe 2 (sa capacité est $3$ fois plus grande)."], "Celui de la courbe 2", acc("celui de la courbe 2", "courbe 2", "le 2"))

    # g) équation différentielle — 5
    N = "equation-differentielle"
    L.add("intermediaire", N, "La charge d'un condensateur obéit à $0{,}020\\,\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} + u_C = 12$ (unités SI). Que vaut $\\tau$ ?", ["Forme $\\tau\\,\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} + u_C = E$.", "$\\tau = 0{,}020$ s $= 20$ ms."], "$20$ ms")
    L.add("intermediaire", N, "Dans l'équation $0{,}020\\,\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} + u_C = 12$, que vaut la tension finale du condensateur ?", ["En régime permanent, $\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} = 0$.", "$u_C = 12$ V."], "$12$ V")
    L.add("approfondissement", N, "Lors de la décharge dans une résistance $R$, la tension vérifie $RC\\,\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} + u_C = 0$ (loi des mailles $u_R + u_C = 0$). Vers quelle valeur tend $u_C$ ?", ["En régime permanent, $\\dfrac{\\mathrm{d}u_C}{\\mathrm{d}t} = 0$, donc $u_C = 0$.", "Le condensateur est entièrement déchargé : $u_C$ tend vers $0$ V."], "$0$ V")
    L.add("approfondissement", N, "Pendant la charge, que vaut la tension $u_R$ aux bornes de la résistance juste après la fermeture de l'interrupteur ($u_C(0) = 0$, $E = 6{,}0$ V) ?", ["Loi des mailles : $u_R + u_C = E$.", "À $t = 0$, $u_C = 0$, donc $u_R = E = 6{,}0$ V."], "$6{,}0$ V")
    L.add("approfondissement", N, "Pendant la charge sous $E = 6{,}0$ V, que vaut $u_R$ à $t = \\tau$ ?", ["$u_C(\\tau) \\approx 0{,}63 \\times 6{,}0 \\approx 3{,}8$ V.", "$u_R = E - u_C \\approx 6{,}0 - 3{,}8 = 2{,}2$ V (soit $E\\,e^{-1}$)."], "$\\approx 2{,}2$ V")
    _ok(_cs(6 * math.exp(-1), 2) == "2{,}2")

    # h) capteurs capacitifs — 4
    N = "capteurs-capacitifs"
    L.add("intermediaire", N, "Dans un capteur capacitif, la grandeur à mesurer (humidité, distance, pression…) modifie quelle caractéristique du condensateur ?", ["Elle modifie la capacité $C$ (distance entre armatures, nature de l'isolant…).", "On mesure alors $\\tau = RC$ ou une tension qui en dépend."], "Sa capacité", acc("sa capacité", "la capacité", "C"))
    L.add("intermediaire", N, "Dans un capteur, la capacité passe de $100$ pF à $120$ pF avec $R = 1{,}0\\ \\mathrm{M\\Omega}$. Comment varie $\\tau$ ?", ["$\\tau = RC$ passe de $1{,}0 \\times 10^{-4}$ s à $1{,}2 \\times 10^{-4}$ s.", "$\\tau$ augmente de $20\\,\\%$."], "Il augmente de $20\\,\\%$", acc("il augmente de 20 %", "+20 %"))
    L.add("approfondissement", N, "Un écran tactile détecte le doigt grâce à un capteur capacitif. Pourquoi un gant épais en laine empêche-t-il souvent la détection ?", ["Le doigt, conducteur, modifie la capacité du capteur en s'approchant.", "Le gant isolant tient le doigt trop loin : la capacité ne varie presque pas."], "La capacité ne varie presque pas", acc("la capacité ne varie pas", "la capacité ne varie presque pas"))
    L.add("approfondissement", N, "Vrai ou faux ? « Un capteur capacitif mesure directement la grandeur physique, sans circuit électrique. » Justifier.", ["Le capteur traduit la grandeur en variation de capacité.", "C'est le circuit (mesure de $\\tau$, de $u_C$…) qui permet la lecture : l'affirmation est fausse."], "Faux")
    return L.fin()


# =====================================================================
# Tle — TRANSFORMATIONS NUCLÉAIRES
# =====================================================================
def _art(nom):
    return "L'" if nom[0] in "aeiouéèêh" else "Le "


def _noy(A, Z, X):
    return f"{{}}^{{{A}}}_{{{Z}}}\\mathrm{{{X}}}"


@chapitre("terminale", "transformations-nucleaires")
def gT_nucleaire():
    L = Lot(("terminale", "transformations-nucleaires"))
    He, em, ep = _noy(4, 2, "He"), _noy(0, -1, "e"), _noy(0, 1, "e")
    FL = " \\longrightarrow "

    # a) composition du noyau, isotopes — 7
    N = "composition-du-noyau"
    for d, A, Z, X, nom in [("application", 238, 92, "U", "uranium 238"), ("application", 14, 6, "C", "carbone 14"), ("application", 131, 53, "I", "iode 131"), ("intermediaire", 60, 27, "Co", "cobalt 60")]:
        L.add(d, N, f"Combien de neutrons contient le noyau ${_noy(A, Z, X)}$ ({nom}) ?", [f"$A = {A}$ nucléons, dont $Z = {Z}$ protons.", f"$N = A - Z = {A} - {Z} = {A - Z}$ neutrons."], f"${A - Z}$ neutrons")
    L.add("application", N, "Les noyaux ${}^{12}_{6}\\mathrm{C}$ et ${}^{14}_{6}\\mathrm{C}$ sont-ils des isotopes ?", ["Ils ont le même nombre de protons ($Z = 6$) mais des nombres de neutrons différents ($6$ et $8$).", "Oui, ce sont des isotopes."], "Oui")
    L.add("intermediaire", N, "Les noyaux ${}^{14}_{6}\\mathrm{C}$ et ${}^{14}_{7}\\mathrm{N}$ sont-ils des isotopes ?", ["Des isotopes ont le même $Z$. Ici $Z = 6$ et $Z = 7$ : ce sont deux éléments différents.", "Non (ils ont seulement le même nombre de nucléons)."], "Non")
    L.add("intermediaire", N, "Le noyau de l'uranium 235 possède $92$ protons. Écrire son symbole.", ["$A = 235$ et $Z = 92$."], f"${_noy(235, 92, 'U')}$")

    # b) stabilité — 4
    N = "stabilite-et-diagramme-nz"
    L.add("intermediaire", N, "Un noyau léger possède trop de neutrons par rapport aux noyaux stables (il est au-dessus de la vallée de stabilité). Quel type de radioactivité attend-on ?", ["Excès de neutrons : un neutron se transforme en proton en émettant un électron.", "Radioactivité $\\beta^-$."], "Bêta moins")
    L.add("intermediaire", N, "Un noyau possède trop de protons par rapport aux noyaux stables (il est sous la vallée de stabilité). Quel type de radioactivité attend-on ?", ["Excès de protons : un proton se transforme en neutron en émettant un positon.", "Radioactivité $\\beta^+$."], "Bêta plus")
    L.add("intermediaire", N, "Quel type de radioactivité concerne surtout les noyaux très lourds ($Z > 82$) ?", ["Ces noyaux ont trop de nucléons : ils émettent un noyau d'hélium.", "La radioactivité $\\alpha$."], "Alpha")
    L.add("approfondissement", N, "Vrai ou faux ? « Pour les noyaux stables lourds, il y a autant de neutrons que de protons. » Justifier.", ["Pour les noyaux légers, $N \\approx Z$ ; pour les noyaux lourds, la vallée de stabilité s'écarte de $N = Z$ : il faut plus de neutrons que de protons.", "L'affirmation est fausse."], "Faux")

    # c) désintégration alpha — 7
    N = "desintegration-alpha"
    for d, A, Z, X, Y, nom in [("application", 238, 92, "U", "Th", "uranium 238"), ("application", 226, 88, "Ra", "Rn", "radium 226"), ("intermediaire", 210, 84, "Po", "Pb", "polonium 210"),
                               ("intermediaire", 241, 95, "Am", "Np", "américium 241"), ("intermediaire", 222, 86, "Rn", "Po", "radon 222")]:
        L.add(d, N, f"{_art(nom)}{nom} ${_noy(A, Z, X)}$ subit une désintégration $\\alpha$. Écrire le noyau fils (symbole : $\\mathrm{{{Y}}}$).",
              [f"Lois de Soddy : $A = {A} - 4 = {A - 4}$ et $Z = {Z} - 2 = {Z - 2}$.", f"Noyau fils : ${_noy(A - 4, Z - 2, Y)}$."], f"${_noy(A - 4, Z - 2, Y)}$")
    L.add("intermediaire", N, "Écrire l'équation de la désintégration $\\alpha$ du radium ${}^{226}_{88}\\mathrm{Ra}$ (le noyau fils est un isotope du radon, $\\mathrm{Rn}$).",
          ["Une particule $\\alpha$ est un noyau d'hélium ${}^{4}_{2}\\mathrm{He}$.", "Conservation : $A = 226 - 4 = 222$, $Z = 88 - 2 = 86$."], f"${_noy(226, 88, 'Ra')}{FL}{_noy(222, 86, 'Rn')} + {He}$")
    L.add("approfondissement", N, "Après une désintégration $\\alpha$, de combien diminue le nombre de neutrons du noyau ?", ["La particule $\\alpha$ emporte $2$ protons et $2$ neutrons.", "Le nombre de neutrons diminue de $2$."], "$2$")

    # d) désintégration bêta moins — 6
    N = "desintegration-beta-moins"
    for d, A, Z, X, Y, nom in [("application", 14, 6, "C", "N", "carbone 14"), ("application", 60, 27, "Co", "Ni", "cobalt 60"), ("intermediaire", 90, 38, "Sr", "Y", "strontium 90"),
                               ("intermediaire", 131, 53, "I", "Xe", "iode 131")]:
        L.add(d, N, f"{_art(nom)}{nom} ${_noy(A, Z, X)}$ est radioactif $\\beta^-$. Écrire le noyau fils (symbole : $\\mathrm{{{Y}}}$).",
              [f"Un électron ${em}$ est émis : $A$ est conservé et $Z$ augmente de $1$.", f"Noyau fils : ${_noy(A, Z + 1, Y)}$."], f"${_noy(A, Z + 1, Y)}$")
    L.add("intermediaire", N, "Écrire l'équation de la désintégration $\\beta^-$ du césium ${}^{137}_{55}\\mathrm{Cs}$ (noyau fils : baryum, $\\mathrm{Ba}$).",
          ["Émission d'un électron : $A = 137$ conservé, $Z = 55 + 1 = 56$."], f"${_noy(137, 55, 'Cs')}{FL}{_noy(137, 56, 'Ba')} + {em}$")
    L.add("approfondissement", N, "Lors d'une désintégration $\\beta^-$, quelle transformation subit un nucléon du noyau ?", ["Un neutron se transforme en proton, avec émission d'un électron.", "$Z$ augmente de $1$ et $N$ diminue de $1$."], "Un neutron devient un proton", acc("un neutron devient un proton", "neutron en proton"))

    # e) désintégration bêta plus — 5
    N = "desintegration-beta-plus"
    for d, A, Z, X, Y, nom in [("application", 18, 9, "F", "O", "fluor 18 (utilisé en imagerie médicale)"), ("intermediaire", 11, 6, "C", "B", "carbone 11"),
                               ("intermediaire", 22, 11, "Na", "Ne", "sodium 22")]:
        L.add(d, N, f"{_art(nom)}{nom} ${_noy(A, Z, X)}$ est radioactif $\\beta^+$. Écrire le noyau fils (symbole : $\\mathrm{{{Y}}}$).",
              [f"Un positon ${ep}$ est émis : $A$ est conservé et $Z$ diminue de $1$.", f"Noyau fils : ${_noy(A, Z - 1, Y)}$."], f"${_noy(A, Z - 1, Y)}$")
    L.add("intermediaire", N, "Écrire l'équation de la désintégration $\\beta^+$ de l'azote ${}^{13}_{7}\\mathrm{N}$ (noyau fils : carbone).", ["Émission d'un positon : $A = 13$, $Z = 7 - 1 = 6$."], f"${_noy(13, 7, 'N')}{FL}{_noy(13, 6, 'C')} + {ep}$")
    L.add("approfondissement", N, "Quelle particule est émise lors d'une désintégration $\\beta^+$ ?", ["Un proton se transforme en neutron en émettant un positon ${}^{0}_{1}\\mathrm{e}$ (antiparticule de l'électron)."], "Un positon", acc("un positon", "positon", "positron"))

    # f) lois de conservation, γ — 5
    N = "lois-de-conservation"
    L.add("intermediaire", N, "Compléter : ${}^{239}_{94}\\mathrm{Pu} \\longrightarrow {}^{235}_{92}\\mathrm{U} + \\ldots$. Quelle particule est émise ?", ["Conservation de $A$ : $239 - 235 = 4$ ; de $Z$ : $94 - 92 = 2$.", "C'est ${}^{4}_{2}\\mathrm{He}$ : une particule $\\alpha$."], f"${He}$")
    L.add("intermediaire", N, "Compléter : ${}^{32}_{15}\\mathrm{P} \\longrightarrow {}^{32}_{16}\\mathrm{S} + \\ldots$. Quelle particule est émise ?", ["$A$ : $32 - 32 = 0$ ; $Z$ : $15 - 16 = -1$.", "C'est un électron ${}^{0}_{-1}\\mathrm{e}$ : radioactivité $\\beta^-$."], f"${em}$")
    L.add("intermediaire", N, "Qu'est-ce que le rayonnement $\\gamma$ qui accompagne souvent une désintégration ?", ["Le noyau fils, formé dans un état excité, se désexcite en émettant un rayonnement électromagnétique de très haute énergie.", "Il ne modifie ni $A$ ni $Z$."], "Un rayonnement électromagnétique", acc("rayonnement électromagnétique", "onde électromagnétique", "photon"))
    L.add("approfondissement", N, "Quelles grandeurs se conservent lors d'une désintégration nucléaire (lois de Soddy) ?", ["Le nombre de nucléons $A$ et la charge électrique (donc $Z$) se conservent.", "Pas le nombre de neutrons, ni la masse."], "Le nombre de nucléons et la charge", acc("A et Z", "nombre de nucléons et charge", "A et la charge"))
    L.add("approfondissement", N, "Vrai ou faux ? « Lors d'une désintégration, la masse totale se conserve. » Justifier.", ["Une partie de la masse est convertie en énergie ($E = \\Delta m\\, c^2$).", "On conserve $A$ et $Z$, pas la masse : l'affirmation est fausse."], "Faux")

    # g) décroissance et demi-vie — 9
    N = "decroissance-et-demi-vie"
    for d, m0, n in [("application", 80, 3), ("application", 64, 4), ("intermediaire", 200, 5)]:
        r = F(m0, 2 ** n)
        L.add(d, N, f"Un échantillon contient ${m0}$ mg d'un isotope radioactif. Quelle masse de cet isotope reste-t-il après ${n}$ demi-vies ?",
              [f"À chaque demi-vie, la quantité est divisée par $2$ : on divise par $2^{n} = {2 ** n}$.", f"${m0} \\div {2 ** n} = {nb(r)}$ mg."], f"${nb(r)}$ mg")
    L.add("intermediaire", N, "L'iode 131 a une demi-vie de $8{,}0$ jours. Quelle fraction d'un échantillon reste-t-il au bout de $24$ jours ?", ["$24 = 3 \\times 8{,}0$ : $3$ demi-vies.", "Fraction restante : $\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}$."], "$\\dfrac{1}{8}$")
    lam = math.log(2) / (8.0 * 86400)
    L.add("intermediaire", N, "L'iode 131 a une demi-vie $t_{1/2} = 8{,}0$ jours. Calculer sa constante radioactive $\\lambda$ en $\\mathrm{s^{-1}}$.", ["$t_{1/2} = 8{,}0 \\times 86\\,400 = 6{,}9 \\times 10^{5}$ s.", f"$\\lambda = \\dfrac{{\\ln 2}}{{t_{{1/2}}}} \\approx {sci(lam, 2)[0]}\\ \\mathrm{{s^{{-1}}}}$."], f"$\\approx {sci(lam, 2)[0]}$ s⁻¹", acc(sci(lam, 2)[1] + " s-1", sci(lam, 2)[1]))
    th = math.log(2) / 2.3e-2
    L.add("intermediaire", N, "Un isotope a une constante radioactive $\\lambda = 2{,}3 \\times 10^{-2}\\ \\mathrm{s^{-1}}$. Calculer sa demi-vie.", ["$t_{1/2} = \\dfrac{\\ln 2}{\\lambda} = \\dfrac{0{,}693}{2{,}3 \\times 10^{-2}}$.", f"$t_{{1/2}} \\approx {_cs(th, 2)}$ s."], f"$\\approx {_cs(th, 2)}$ s")
    Nt = 1.0e6 * math.exp(-2.3e-2 * 100)
    L.add("approfondissement", N, "Un échantillon contient $N_0 = 1{,}0 \\times 10^{6}$ noyaux de constante $\\lambda = 2{,}3 \\times 10^{-2}\\ \\mathrm{s^{-1}}$. Combien en reste-t-il au bout de $100$ s ?", ["$N(t) = N_0\\, e^{-\\lambda t} = 1{,}0 \\times 10^{6} \\times e^{-2{,}3}$.", f"$N \\approx {sci(Nt, 2)[0]}$ noyaux."], f"$\\approx {sci(Nt, 2)[0]}$ noyaux", acc(sci(Nt, 2)[1], sci(Nt, 2)[1] + " noyaux"))
    L.add("approfondissement", N, "Au bout de combien de demi-vies reste-t-il moins de $1\\,\\%$ des noyaux initiaux ?", ["Après $n$ demi-vies il reste $\\dfrac{1}{2^n}$ : $\\dfrac{1}{64} \\approx 1{,}6\\,\\%$ et $\\dfrac{1}{128} \\approx 0{,}78\\,\\%$.", "Il faut $7$ demi-vies."], "$7$")
    L.add("approfondissement", N, "Vrai ou faux ? « Au bout de deux demi-vies, tous les noyaux radioactifs ont disparu. » Justifier.", ["Au bout d'une demi-vie il en reste la moitié, au bout de deux demi-vies le quart.", "L'affirmation est fausse."], "Faux")

    # h) activité et datation — 7
    N = "activite-et-datation"
    A = 1.0e-6 * 5.0e12
    L.add("intermediaire", N, "Un échantillon contient $5{,}0 \\times 10^{12}$ noyaux radioactifs de constante $\\lambda = 1{,}0 \\times 10^{-6}\\ \\mathrm{s^{-1}}$. Calculer son activité.", ["$A = \\lambda N = 1{,}0 \\times 10^{-6} \\times 5{,}0 \\times 10^{12}$.", f"$A = {sci(A, 2)[0]}$ Bq."], f"${sci(A, 2)[0]}$ Bq")
    L.add("application", N, "Dans quelle unité s'exprime l'activité d'un échantillon radioactif ?", ["En becquerels (Bq) : $1$ Bq $= 1$ désintégration par seconde."], "Le becquerel", acc("le becquerel", "becquerel", "Bq"))
    L.add("intermediaire", N, "Une source a une activité de $8\\,000$ Bq. Sa demi-vie est de $30$ ans. Quelle est son activité au bout de $60$ ans ?", ["$60$ ans $= 2$ demi-vies : l'activité est divisée par $4$.", "$8\\,000 \\div 4 = 2\\,000$ Bq."], "$2\\,000$ Bq")
    t = 5730 / math.log(2) * math.log(1 / 0.25)
    L.add("approfondissement", N, "Un os ancien a une activité en carbone 14 égale à $25\\,\\%$ de celle d'un organisme vivant. Sachant que $t_{1/2} = 5\\,730$ ans, estimer son âge.", ["$25\\,\\% = \\dfrac{1}{4} = \\left(\\dfrac{1}{2}\\right)^2$ : deux demi-vies se sont écoulées.", "Âge : $2 \\times 5\\,730 = 11\\,460$ ans."], "$11\\,460$ ans")
    _ok(_proche(t, 11460))
    t = 5730 / math.log(2) * math.log(1 / 0.60)
    L.add("probleme", N, "Un morceau de charbon de bois a une activité en carbone 14 égale à $60\\,\\%$ de celle du bois vivant. Avec $t_{1/2} = 5\\,730$ ans et $A(t) = A_0\\, e^{-\\lambda t}$, estimer son âge, arrondi à la centaine d'années.",
          ["$\\lambda = \\dfrac{\\ln 2}{5\\,730}$ an⁻¹ et $\\dfrac{A}{A_0} = 0{,}60 = e^{-\\lambda t}$.", f"$t = \\dfrac{{\\ln(1/0{{,}}60)}}{{\\lambda}} = \\dfrac{{5\\,730 \\times \\ln(1/0{{,}}60)}}{{\\ln 2}} \\approx {nb(t, 0)}$ ans.", f"Soit environ ${nb(arr(t / 100) * 100)}$ ans."],
          f"$\\approx {nb(arr(t / 100) * 100)}$ ans")
    L.add("approfondissement", N, "Pourquoi le carbone 14 ne permet-il pas de dater un fossile de dinosaure (environ $66$ millions d'années) ?", ["$66$ millions d'années représentent plus de $11\\,000$ demi-vies du carbone 14.", "Il ne reste plus de carbone 14 mesurable : la méthode ne fonctionne que jusqu'à quelques dizaines de milliers d'années."], "Il ne reste plus de carbone 14", acc("il ne reste plus de carbone 14", "plus de carbone 14"))
    L.add("approfondissement", N, "Vrai ou faux ? « L'activité d'un échantillon radioactif reste constante au cours du temps. » Justifier.", ["$A = \\lambda N$ et $N$ diminue : l'activité décroît comme $N$, de façon exponentielle.", "L'affirmation est fausse."], "Faux")
    return L.fin()


# =====================================================================
# Tle techno — PROBABILITÉS CONDITIONNELLES
# =====================================================================
def _p(x, d=4):
    """Probabilité en écriture décimale : valeur exacte si possible, sinon arrondi à d décimales."""
    x = F(x)
    return (EG, nb(x, 8)) if exact(x) and len(nb(x, 8).split("{,}")[-1]) <= d else (APPROX, nb(arr(x, d), d))


@chapitre("terminale-techno", "probabilites-conditionnelles")
def gTt_probas_conditionnelles():
    L = Lot(("terminale-techno", "probabilites-conditionnelles"))

    def rep(x, d=4):
        s, v = _p(x, d)
        return f"${v}$" if s == EG else f"$\\approx {v}$"

    # a) probabilité conditionnelle depuis un tableau — 7
    N = "probabilite-conditionnelle"
    T = "Dans un lycée de $500$ élèves, $220$ sont internes ; parmi les internes, $132$ sont des filles ; parmi les externes, $140$ sont des filles."
    for d, q, num, den, c in [
        ("application", "On choisit un élève au hasard. On note $I$ « l'élève est interne » et $G$ « l'élève est une fille ». Calculer $P_I(G)$.", 132, 220, "$P_I(G) = \\dfrac{\\text{filles internes}}{\\text{internes}} = \\dfrac{132}{220}$."),
        ("application", "On choisit un élève au hasard ($I$ : interne ; $G$ : fille). Calculer $P(I)$.", 220, 500, "$P(I) = \\dfrac{220}{500}$."),
        ("intermediaire", "On choisit un élève au hasard ($I$ : interne ; $G$ : fille). Calculer $P_{\\overline{I}}(G)$.", 140, 280, "Externes : $500 - 220 = 280$, dont $140$ filles : $P_{\\overline{I}}(G) = \\dfrac{140}{280}$."),
        ("intermediaire", "On choisit un élève au hasard ($I$ : interne ; $G$ : fille). Calculer $P_G(I)$.", 132, 272, "Filles : $132 + 140 = 272$, dont $132$ internes : $P_G(I) = \\dfrac{132}{272}$."),
    ]:
        x = F(num, den)
        s, v = _p(x, 3)
        L.add(d, N, T + " " + q, [c, f"$= {v}$." if s == EG else f"$\\approx {v}$ (arrondi au millième)."], rep(x, 3))
    L.add("application", N, "On sait que $P(A) = 0{,}4$ et $P(A \\cap B) = 0{,}1$. Calculer $P_A(B)$.", ["$P_A(B) = \\dfrac{P(A \\cap B)}{P(A)} = \\dfrac{0{,}1}{0{,}4} = 0{,}25$."], "$0{,}25$")
    L.add("intermediaire", N, "On sait que $P(B) = 0{,}35$ et $P(A \\cap B) = 0{,}14$. Calculer $P_B(A)$.", ["$P_B(A) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}14}{0{,}35} = 0{,}4$."], "$0{,}4$")
    L.add("approfondissement", N, "On sait que $P_A(B) = 0{,}3$. Que vaut $P_A(\\overline{B})$ ?", ["Sachant $A$, les événements $B$ et $\\overline{B}$ sont contraires.", "$P_A(\\overline{B}) = 1 - 0{,}3 = 0{,}7$."], "$0{,}7$")

    # b) formule du produit — 7
    N = "formule-du-produit"
    for d, pa, pab, ctx in [("application", F(6, 10), F(3, 10), "$P(A) = 0{,}6$ et $P_A(B) = 0{,}3$."), ("application", F(25, 100), F(8, 10), "$P(A) = 0{,}25$ et $P_A(B) = 0{,}8$."),
                            ("intermediaire", F(45, 100), F(12, 100), "$P(A) = 0{,}45$ et $P_A(B) = 0{,}12$.")]:
        L.add(d, N, ctx + " Calculer $P(A \\cap B)$.", [f"$P(A \\cap B) = P(A) \\times P_A(B) = {nb(pa)} \\times {nb(pab)} = {nb(pa * pab)}$."], f"${nb(pa * pab)}$")
    L.add("intermediaire", N, "Dans une entreprise, $40\\,\\%$ des salariés sont des cadres, et $70\\,\\%$ des cadres pratiquent le télétravail. Quelle est la probabilité qu'un salarié choisi au hasard soit un cadre pratiquant le télétravail ?",
          ["$C$ : « cadre », $T$ : « télétravail ». $P(C) = 0{,}4$ et $P_C(T) = 0{,}7$.", "$P(C \\cap T) = 0{,}4 \\times 0{,}7 = 0{,}28$."], "$0{,}28$")
    L.add("intermediaire", N, "Une urne contient $5$ boules rouges et $3$ vertes. On tire deux boules successivement, sans remise. Quelle est la probabilité de tirer deux boules rouges ?",
          ["$P(R_1) = \\dfrac{5}{8}$ ; sachant $R_1$, il reste $4$ rouges sur $7$ : $P_{R_1}(R_2) = \\dfrac{4}{7}$.", "$P(R_1 \\cap R_2) = \\dfrac{5}{8} \\times \\dfrac{4}{7} = \\dfrac{20}{56} = \\dfrac{5}{14} \\approx 0{,}357$."], "$\\dfrac{5}{14}$")
    _ok(F(5, 8) * F(4, 7) == F(5, 14))
    L.add("approfondissement", N, "On sait que $P(A \\cap B) = 0{,}18$ et $P_A(B) = 0{,}6$. Calculer $P(A)$.", ["$P(A \\cap B) = P(A) \\times P_A(B)$, donc $P(A) = \\dfrac{0{,}18}{0{,}6} = 0{,}3$."], "$0{,}3$")
    L.add("approfondissement", N, "$5\\,\\%$ des pièces d'une usine sont défectueuses ; $90\\,\\%$ des pièces défectueuses sont détectées par le contrôle. Quelle proportion des pièces est défectueuse et non détectée ?",
          ["$P(D) = 0{,}05$ et $P_D(\\overline{C}) = 1 - 0{,}9 = 0{,}1$.", "$P(D \\cap \\overline{C}) = 0{,}05 \\times 0{,}1 = 0{,}005$, soit $0{,}5\\,\\%$."], "$0{,}005$")

    # c) arbre pondéré — 7
    N = "arbre-pondere"
    A = "Un arbre pondéré : $P(A) = 0{,}3$, $P_A(B) = 0{,}8$, $P_{\\overline{A}}(B) = 0{,}4$."
    L.add("application", N, A + " Quelle probabilité porte la branche allant de la racine à $\\overline{A}$ ?", ["La somme des probabilités issues d'un même nœud vaut $1$.", "$P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$."], "$0{,}7$")
    L.add("application", N, A + " Quelle probabilité porte la branche allant de $A$ à $\\overline{B}$ ?", ["$P_A(\\overline{B}) = 1 - P_A(B) = 1 - 0{,}8 = 0{,}2$."], "$0{,}2$")
    L.add("application", N, A + " Calculer la probabilité du chemin $A \\to B$.", ["Règle des chemins : on multiplie les probabilités le long du chemin.", "$P(A \\cap B) = 0{,}3 \\times 0{,}8 = 0{,}24$."], "$0{,}24$")
    L.add("intermediaire", N, A + " Calculer $P(\\overline{A} \\cap \\overline{B})$.", ["$P(\\overline{A}) = 0{,}7$ et $P_{\\overline{A}}(\\overline{B}) = 1 - 0{,}4 = 0{,}6$.", "$P(\\overline{A} \\cap \\overline{B}) = 0{,}7 \\times 0{,}6 = 0{,}42$."], "$0{,}42$")
    L.add("intermediaire", N, A + " Calculer la somme des probabilités des quatre chemins.", ["$0{,}24 + 0{,}06 + 0{,}28 + 0{,}42 = 1$.", "La somme des probabilités de tous les chemins vaut toujours $1$."], "$1$")
    L.add("intermediaire", N, "Dans un arbre, une branche issue de $A$ porte $0{,}35$ vers $B$. Un élève écrit $0{,}75$ sur l'autre branche issue de $A$. Quelle est la bonne valeur ?", ["Les branches issues d'un même nœud ont pour somme $1$.", "$1 - 0{,}35 = 0{,}65$."], "$0{,}65$")
    L.add("approfondissement", N, "Vrai ou faux ? « Sur un arbre pondéré, la probabilité inscrite sur une branche du second niveau est une probabilité d'intersection. » Justifier.", ["Une branche du second niveau porte une probabilité conditionnelle (sachant l'événement du premier niveau).", "C'est le produit le long du chemin qui donne une intersection. L'affirmation est fausse."], "Faux")

    # d) probabilités totales — 8
    N = "probabilites-totales"
    for d, pa, pba, pbna, ctx in [("intermediaire", F(3, 10), F(8, 10), F(4, 10), "$P(A) = 0{,}3$, $P_A(B) = 0{,}8$, $P_{\\overline{A}}(B) = 0{,}4$."),
                                  ("intermediaire", F(6, 10), F(5, 100), F(2, 100), "$P(A) = 0{,}6$, $P_A(B) = 0{,}05$, $P_{\\overline{A}}(B) = 0{,}02$.")]:
        pb = pa * pba + (1 - pa) * pbna
        L.add(d, N, ctx + " Calculer $P(B)$.", ["$A$ et $\\overline{A}$ forment une partition de l'univers.", f"$P(B) = {nb(pa)} \\times {nb(pba)} + {nb(1 - pa)} \\times {nb(pbna)} = {nb(pb)}$."], f"${nb(pb)}$")
    pb = F(55, 100) * F(4, 100) + F(45, 100) * F(3, 100)
    L.add("intermediaire", N, "Une usine a deux machines : la machine 1 fabrique $55\\,\\%$ des pièces, dont $4\\,\\%$ sont défectueuses ; la machine 2 fabrique les autres, dont $3\\,\\%$ sont défectueuses. Quelle est la probabilité qu'une pièce prise au hasard soit défectueuse ?",
          ["$P(D) = 0{,}55 \\times 0{,}04 + 0{,}45 \\times 0{,}03$.", f"$P(D) = 0{{,}}022 + 0{{,}}0135 = {nb(pb)}$."], f"${nb(pb)}$")
    pb = F(2, 100) * F(95, 100) + F(98, 100) * F(3, 100)
    L.add("probleme", N, "Une maladie touche $2\\,\\%$ d'une population. Un test est positif chez $95\\,\\%$ des malades et chez $3\\,\\%$ des personnes saines. Quelle est la probabilité qu'un test soit positif ?",
          ["$M$ : « malade », $T$ : « test positif ». $P(M) = 0{,}02$, $P_M(T) = 0{,}95$, $P_{\\overline{M}}(T) = 0{,}03$.", f"$P(T) = 0{{,}}02 \\times 0{{,}}95 + 0{{,}}98 \\times 0{{,}}03 = 0{{,}}019 + 0{{,}}0294 = {nb(pb)}$."], f"${nb(pb)}$")
    pb = F(70, 100) * F(90, 100) + F(30, 100) * F(60, 100)
    L.add("intermediaire", N, "$70\\,\\%$ des clients d'un magasin paient par carte. Parmi eux, $90\\,\\%$ sont satisfaits du passage en caisse ; parmi les autres, $60\\,\\%$. Quelle est la probabilité qu'un client soit satisfait ?",
          ["$P(S) = 0{,}7 \\times 0{,}9 + 0{,}3 \\times 0{,}6$.", f"$P(S) = 0{{,}}63 + 0{{,}}18 = {nb(pb)}$."], f"${nb(pb)}$")
    pb = F(1, 3) * F(1, 2) + F(1, 3) * F(1, 4) + F(1, 3) * F(1, 5)
    L.add("approfondissement", N, "On choisit au hasard une urne parmi trois (probabilité $\\dfrac{1}{3}$ chacune), qui contiennent respectivement une proportion $\\dfrac{1}{2}$, $\\dfrac{1}{4}$ et $\\dfrac{1}{5}$ de boules blanches. On tire une boule. Probabilité qu'elle soit blanche ?",
          ["Les trois urnes forment une partition.", f"$P(B) = \\dfrac{{1}}{{3}}\\left(\\dfrac{{1}}{{2}} + \\dfrac{{1}}{{4}} + \\dfrac{{1}}{{5}}\\right) = \\dfrac{{1}}{{3}} \\times \\dfrac{{19}}{{20}} = {fl(pb)}$."], f"${fl(pb)}$")
    pa = (F(36, 100) - F(20, 100)) / (F(60, 100) - F(20, 100))
    L.add("approfondissement", N, "On sait que $P(B) = 0{,}36$, $P_A(B) = 0{,}6$ et $P_{\\overline{A}}(B) = 0{,}2$. Calculer $P(A)$.",
          ["On pose $x = P(A)$ : $0{,}6x + 0{,}2(1 - x) = 0{,}36$.", "$0{,}4x = 0{,}16$, donc $x = 0{,}4$."], f"${nb(pa)}$")
    L.add("approfondissement", N, "Vrai ou faux ? « $P(B) = P_A(B) + P_{\\overline{A}}(B)$. » Justifier.", ["La formule des probabilités totales pondère chaque conditionnelle : $P(B) = P(A) P_A(B) + P(\\overline{A}) P_{\\overline{A}}(B)$.", "Sans les poids, la somme peut même dépasser $1$. L'affirmation est fausse."], "Faux")

    # e) remonter l'arbre — 7
    N = "remonter-l-arbre"
    pm, pt = F(2, 100), F(2, 100) * F(95, 100) + F(98, 100) * F(3, 100)
    x = pm * F(95, 100) / pt
    L.add("probleme", N, "Avec le test précédent ($P(M) = 0{,}02$, $P_M(T) = 0{,}95$, $P(T) = 0{,}0484$), calculer la probabilité qu'une personne testée positive soit malade, arrondie au millième.",
          ["$P_T(M) = \\dfrac{P(M \\cap T)}{P(T)} = \\dfrac{0{,}02 \\times 0{,}95}{0{,}0484} = \\dfrac{0{,}019}{0{,}0484}$.", f"$P_T(M) \\approx {nb(arr(x, 3), 3)}$ : moins de $40\\,\\%$ des positifs sont malades."], f"$\\approx {nb(arr(x, 3), 3)}$")
    x = F(55, 100) * F(4, 100) / (F(55, 100) * F(4, 100) + F(45, 100) * F(3, 100))
    L.add("probleme", N, "Avec les deux machines précédentes ($55\\,\\%$ et $4\\,\\%$ de défauts ; $45\\,\\%$ et $3\\,\\%$), une pièce est défectueuse. Probabilité qu'elle vienne de la machine 1, au millième ?",
          ["$P_D(M_1) = \\dfrac{0{,}55 \\times 0{,}04}{0{,}0355} = \\dfrac{0{,}022}{0{,}0355}$.", f"$P_D(M_1) \\approx {nb(arr(x, 3), 3)}$."], f"$\\approx {nb(arr(x, 3), 3)}$")
    x = F(24, 100) / F(52, 100)
    L.add("intermediaire", N, "$P(A \\cap B) = 0{,}24$ et $P(B) = 0{,}52$. Calculer $P_B(A)$, arrondie au centième.", ["$P_B(A) = \\dfrac{0{,}24}{0{,}52}$.", f"$P_B(A) \\approx {nb(arr(x, 2), 2)}$."], f"$\\approx {nb(arr(x, 2), 2)}$")
    x = F(3, 10) * F(8, 10) / F(52, 100)
    L.add("intermediaire", N, "Arbre : $P(A) = 0{,}3$, $P_A(B) = 0{,}8$, $P_{\\overline{A}}(B) = 0{,}4$ (d'où $P(B) = 0{,}52$). Calculer $P_B(A)$, arrondie au centième.", ["$P_B(A) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}24}{0{,}52}$.", f"$P_B(A) \\approx {nb(arr(x, 2), 2)}$."], f"$\\approx {nb(arr(x, 2), 2)}$")
    x = F(7, 10) * F(9, 10) / F(81, 100)
    L.add("approfondissement", N, "Avec les clients du magasin ($70\\,\\%$ paient par carte, $90\\,\\%$ d'entre eux satisfaits, $P(S) = 0{,}81$), un client est satisfait. Probabilité qu'il ait payé par carte, au centième ?",
          ["$P_S(C) = \\dfrac{0{,}7 \\times 0{,}9}{0{,}81} = \\dfrac{0{,}63}{0{,}81}$.", f"$P_S(C) \\approx {nb(arr(x, 2), 2)}$."], f"$\\approx {nb(arr(x, 2), 2)}$")
    L.add("approfondissement", N, "Dans un arbre de premier niveau $A$ / $\\overline{A}$, peut-on lire directement $P_B(A)$ sur une branche ?", ["Les branches du second niveau portent $P_A(B)$, $P_A(\\overline{B})$… (sachant $A$ ou $\\overline{A}$).", "$P_B(A)$ n'y figure pas : il faut la calculer avec $\\dfrac{P(A \\cap B)}{P(B)}$. Non."], "Non")
    L.add("approfondissement", N, "Vrai ou faux ? « $P_A(B) = P_B(A)$ pour tous événements $A$ et $B$. » Justifier.", ["$P_A(B) = \\dfrac{P(A \\cap B)}{P(A)}$ et $P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}$.", "Elles ne sont égales que si $P(A) = P(B)$ : avec le test médical, $P_M(T) = 0{,}95$ mais $P_T(M) \\approx 0{,}39$. Faux."], "Faux")

    # f) traduire un énoncé — 6
    N = "traduire-un-enonce"
    for d, phrase, r, f2 in [("application", "« Parmi les clients qui ont acheté ($A$), $30\\,\\%$ reviennent ($R$). »", "$P_A(R)$", "P_A(R)"),
                             ("application", "« $30\\,\\%$ des clients achètent et reviennent. »", "$P(A \\cap R)$", None),
                             ("intermediaire", "« Parmi les clients qui reviennent ($R$), $40\\,\\%$ avaient acheté ($A$). »", "$P_R(A)$", "P_R(A)")]:
        L.add(d, N, f"Quelle probabilité la phrase {phrase} donne-t-elle : $P(A \\cap R)$, $P_A(R)$ ou $P_R(A)$ ?",
              ["« Parmi les… » indique la population de référence : c'est la condition." if f2 else "Aucune condition : « achètent **et** reviennent » est une intersection.", f"Il s'agit de {r}."], r, acc(f2, f2.replace("_", "")) if f2 else acc("P(A ∩ R)", "P(A inter R)"))
    L.add("intermediaire", N, "Dans « $12\\,\\%$ des fumeurs ($F$) développent la maladie ($M$) », quelle est la valeur de $P_F(M)$ ?", ["La population de référence est celle des fumeurs.", "$P_F(M) = 0{,}12$."], "$0{,}12$")
    L.add("intermediaire", N, "« $60\\,\\%$ des élèves sont des filles ($G$), et $15\\,\\%$ des élèves sont des filles qui font de la danse ($D$). » Calculer $P_G(D)$.", ["$P(G) = 0{,}6$ et $P(G \\cap D) = 0{,}15$.", "$P_G(D) = \\dfrac{0{,}15}{0{,}6} = 0{,}25$."], "$0{,}25$")
    L.add("approfondissement", N, "« $8\\,\\%$ des pièces sont défectueuses ($D$) ; parmi elles, $75\\,\\%$ ont un défaut de peinture ($P$). » Quelle proportion des pièces a un défaut de peinture et est défectueuse ?", ["$P(D) = 0{,}08$ et $P_D(P) = 0{,}75$.", "$P(D \\cap P) = 0{,}08 \\times 0{,}75 = 0{,}06$."], "$0{,}06$")

    # g) trois nombres à ne pas confondre — 8
    N = "trois-nombres-a-ne-pas-confondre"
    T2 = "Dans une classe de $30$ élèves, $12$ font du sport en club ($S$), dont $9$ sont des garçons ($G$) ; la classe compte $18$ garçons."
    for d, q, x in [("intermediaire", "Calculer $P(S \\cap G)$.", F(9, 30)), ("intermediaire", "Calculer $P_S(G)$.", F(9, 12)), ("intermediaire", "Calculer $P_G(S)$.", F(9, 18))]:
        c = {"Calculer $P(S \\cap G)$.": "On divise par l'effectif total : $\\dfrac{9}{30}$.", "Calculer $P_S(G)$.": "Population de référence : les $12$ sportifs, dont $9$ garçons : $\\dfrac{9}{12}$.",
             "Calculer $P_G(S)$.": "Population de référence : les $18$ garçons, dont $9$ sportifs : $\\dfrac{9}{18}$."}[q]
        L.add(d, N, T2 + " On choisit un élève au hasard. " + q, [c, f"$= {nb(x)}$."], f"${nb(x)}$")
    L.add("approfondissement", N, T2 + " Un élève dit : « $P_S(G) = \\dfrac{9}{30}$ ». Quelle erreur fait-il ?", ["Il divise par l'effectif total au lieu de l'effectif des sportifs.", "Il a calculé $P(S \\cap G) = 0{,}3$ ; la bonne valeur est $P_S(G) = \\dfrac{9}{12} = 0{,}75$."], "$0{,}75$")
    L.add("approfondissement", N, "Vrai ou faux ? « $P(A \\cap B)$ est toujours inférieure ou égale à $P_A(B)$. » Justifier.", ["$P(A \\cap B) = P(A) \\times P_A(B)$ et $P(A) \\leqslant 1$.", "Donc $P(A \\cap B) \\leqslant P_A(B)$ : l'affirmation est vraie."], "Vrai")
    L.add("approfondissement", N, "Vrai ou faux ? « Si $P_A(B) = 0{,}9$, alors $P(B) \\geqslant 0{,}9$. » Justifier.", ["Contre-exemple : $P(A) = 0{,}1$, $P_A(B) = 0{,}9$ et $P_{\\overline{A}}(B) = 0$ donnent $P(B) = 0{,}09$.", "L'affirmation est fausse."], "Faux")
    L.add("intermediaire", N, "On sait que $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}2$. Calculer $P_A(B)$ puis $P_B(A)$.", ["$P_A(B) = \\dfrac{0{,}2}{0{,}5} = 0{,}4$.", "$P_B(A) = \\dfrac{0{,}2}{0{,}4} = 0{,}5$."], "$0{,}4$ et $0{,}5$", acc("0,4 et 0,5", "0,4 ; 0,5"))
    L.add("probleme", N, "Dans un logement, on étudie les situations où de la fumée apparaît : $0{,}1\\,\\%$ sont des incendies ($I$), les autres des cuissons. Le détecteur sonne ($S$) dans $99\\,\\%$ des incendies et dans $1\\,\\%$ des cuissons. Sachant que le détecteur sonne, quelle est la probabilité qu'il s'agisse d'un incendie, au centième ?",
          ["$P(I) = 0{,}001$, $P_I(S) = 0{,}99$, $P_{\\overline{I}}(S) = 0{,}01$.", "$P(S) = 0{,}001 \\times 0{,}99 + 0{,}999 \\times 0{,}01 = 0{,}01098$.", f"$P_S(I) = \\dfrac{{0{{,}}000\\,99}}{{0{{,}}010\\,98}} \\approx {nb(arr(F(99, 100000) / F(1098, 100000), 2), 2)}$."],
          f"$\\approx {nb(arr(F(99, 100000) / F(1098, 100000), 2), 2)}$")
    _ok(F(1, 1000) * F(99, 100) + F(999, 1000) * F(1, 100) == F(1098, 100000))
    return L.fin()


# =====================================================================
# Tle techno — FONCTION LOGARITHME DÉCIMAL
# =====================================================================
@chapitre("terminale-techno", "logarithme-decimal")
def gTt_logarithme():
    L = Lot(("terminale-techno", "logarithme-decimal"))
    lg = math.log10

    # a) définition — 7
    N = "definition-et-puissances-de-10"
    for d, e, c, r in [("application", "Calculer $\\log(1\\,000)$.", ["$1\\,000 = 10^{3}$, donc $\\log(1\\,000) = 3$."], "$3$"),
                       ("application", "Calculer $\\log(0{,}01)$.", ["$0{,}01 = 10^{-2}$, donc $\\log(0{,}01) = -2$."], "$-2$"),
                       ("application", "Calculer $\\log(1)$.", ["$1 = 10^{0}$, donc $\\log(1) = 0$."], "$0$"),
                       ("application", "Calculer $\\log\\left(10^{2{,}5}\\right)$.", ["Pour tout réel $x$, $\\log(10^{x}) = x$."], "$2{,}5$"),
                       ("intermediaire", "Calculer $10^{\\log 7}$.", ["Pour $b > 0$, $10^{\\log b} = b$."], "$7$")]:
        L.add(d, N, e, c, r)
    x = lg(500)
    L.add("intermediaire", N, "Résoudre $10^{x} = 500$ ; donner la valeur exacte puis l'arrondi au centième.", ["Par définition, $x = \\log(500)$.", f"$\\log(500) \\approx {nb(x, 4)}$, soit environ ${nb(arr(x, 2), 2)}$."], f"$\\approx {nb(arr(x, 2), 2)}$")
    L.add("intermediaire", N, "Résoudre $10^{x} = 0{,}001$.", ["$0{,}001 = 10^{-3}$, donc $x = -3$."], "$x = -3$")

    # b) existence et signe — 5
    N = "existence-et-signe"
    L.add("application", N, "Le nombre $\\log(-5)$ existe-t-il ?", ["$\\log b$ n'est défini que pour $b > 0$ ($10^{x}$ est toujours strictement positif).", "$\\log(-5)$ n'existe pas."], "Non")
    L.add("application", N, "Quel est le signe de $\\log(0{,}5)$ ?", ["$0 < 0{,}5 < 1$, donc $\\log(0{,}5) < 0$."], "Négatif")
    L.add("intermediaire", N, "Pour quelles valeurs de $x$ a-t-on $\\log x > 0$ ?", ["$\\log x > 0 = \\log 1$ et $\\log$ est strictement croissante sur $]0 ; +\\infty[$.", "$x > 1$, soit $x \\in ]1 ; +\\infty[$."], "$]1 ; +\\infty[$", acc("]1 ; +∞[", "x > 1"))
    L.add("intermediaire", N, "Vrai ou faux ? « $\\log 0 = 0$. » Justifier.", ["Aucune puissance de $10$ ne vaut $0$ : $\\log 0$ n'est pas défini.", "C'est $\\log 1$ qui vaut $0$. L'affirmation est fausse."], "Faux")
    L.add("approfondissement", N, "Sur quel intervalle l'expression $\\log(x - 3)$ est-elle définie ?", ["Il faut $x - 3 > 0$, soit $x > 3$.", "Intervalle : $]3 ; +\\infty[$."], "$]3 ; +\\infty[$", acc("]3 ; +∞[", "x > 3"))

    # c) sens de variation — 5
    N = "sens-de-variation"
    L.add("application", N, "Quel est le sens de variation de la fonction $\\log$ sur $]0 ; +\\infty[$ ?", ["La fonction logarithme décimal est strictement croissante sur $]0 ; +\\infty[$."], "Croissante", acc("croissante", "strictement croissante"))
    L.add("application", N, "Comparer $\\log 3$ et $\\log 5$.", ["$3 < 5$ et $\\log$ est strictement croissante.", "$\\log 3 < \\log 5$."], "$\\log 3 < \\log 5$", acc("log 3 < log 5", "log3 < log5"))
    L.add("intermediaire", N, "Résoudre $\\log x < 2$.", ["$\\log x < 2 = \\log 100$ et $\\log$ est strictement croissante sur $]0 ; +\\infty[$.", "$0 < x < 100$ : $S = ]0 ; 100[$."], "$]0 ; 100[$")
    L.add("intermediaire", N, "Résoudre $\\log x \\geqslant -1$.", ["$\\log x \\geqslant \\log 0{,}1$, donc $x \\geqslant 0{,}1$.", "$S = [0{,}1 ; +\\infty[$."], "$[0{,}1 ; +\\infty[$", acc("[0,1 ; +∞[", "x ≥ 0,1"))
    L.add("approfondissement", N, "Entre quels entiers consécutifs se trouve $\\log(4\\,700)$ ?", ["$1\\,000 < 4\\,700 < 10\\,000$, donc $\\log 1\\,000 < \\log 4\\,700 < \\log 10\\,000$.", "$3 < \\log(4\\,700) < 4$."], "$3 < \\log(4\\,700) < 4$", acc("3 < log(4700) < 4"))

    # d) propriétés algébriques — 8
    N = "proprietes-algebriques"
    for d, e, c, r in [("application", "Calculer $\\log 2 + \\log 5$ sans calculatrice.", ["$\\log 2 + \\log 5 = \\log(2 \\times 5) = \\log 10 = 1$."], "$1$"),
                       ("application", "Calculer $\\log 50 - \\log 5$ sans calculatrice.", ["$\\log 50 - \\log 5 = \\log\\dfrac{50}{5} = \\log 10 = 1$."], "$1$ "),
                       ("application", "Calculer $\\log\\left(\\dfrac{1}{1\\,000}\\right)$.", ["$\\log\\dfrac{1}{1\\,000} = -\\log 1\\,000 = -3$."], "$-3$"),
                       ("intermediaire", "Calculer $\\log(10^{5} \\times 10^{-2})$.", ["$\\log(10^{5}) + \\log(10^{-2}) = 5 - 2 = 3$."], "$3$ "),
                       ("intermediaire", "Calculer $\\log 4 + \\log 25$ sans calculatrice.", ["$\\log(4 \\times 25) = \\log 100 = 2$."], "$2$")]:
        L.add(d, N, e, c, r.strip())
    for d, expr, k, calc in [("intermediaire", "\\log 8", 3, "$\\log 8 = \\log(2^{3}) = 3\\log 2 \\approx 3 \\times 0{,}301$"), ("intermediaire", "\\log 20", None, "$\\log 20 = \\log 2 + \\log 10 \\approx 0{,}301 + 1$"),
                             ("approfondissement", "\\log 0{,}5", None, "$\\log 0{,}5 = \\log\\dfrac{1}{2} = -\\log 2 \\approx -0{,}301$")]:
        v = {"\\log 8": F(903, 1000), "\\log 20": F(1301, 1000), "\\log 0{,}5": F(-301, 1000)}[expr]
        L.add(d, N, f"On donne $\\log 2 \\approx 0{{,}}301$. En déduire une valeur approchée de ${expr}$.", [calc + "."], f"$\\approx {nb(v)}$")

    # e) résoudre a^x = b — 8
    N = "resoudre-a-puissance-x-egal-b"
    for d, a, b in [("intermediaire", "2", 1000), ("intermediaire", "3", 50), ("intermediaire", "1{,}04", 2), ("approfondissement", "0{,}9", F(1, 2)), ("approfondissement", "1{,}5", 10)]:
        av = float(a.replace("{,}", "."))
        x = lg(float(b)) / lg(av)
        L.add(d, N, f"Résoudre ${a}^{{x}} = {nb(b)}$ ; donner l'arrondi au centième.",
              [f"On applique $\\log$ (les deux membres sont positifs) : $x \\log({a}) = \\log({nb(b)})$.", f"$x = \\dfrac{{\\log({nb(b)})}}{{\\log({a})}} \\approx {nb(x, 4)}$, soit ${nb(arr(x, 2), 2)}$."
               + (" ($\\log 0{,}9 < 0$ : attention au signe.)" if av < 1 else "")], f"$\\approx {nb(arr(x, 2), 2)}$")
    L.add("intermediaire", N, "Résoudre $5 \\times 2^{x} = 80$.", ["$2^{x} = 16 = 2^{4}$.", "$x = 4$ (ou $x = \\dfrac{\\log 16}{\\log 2} = 4$)."], "$x = 4$")
    x = lg(3) / lg(1.025)
    L.add("approfondissement", N, "Résoudre $1{,}025^{x} = 3$ ; arrondir au dixième.", ["$x = \\dfrac{\\log 3}{\\log 1{,}025}$.", f"$x \\approx {nb(x, 3)}$, soit ${nb(arr(x, 1), 1)}$."], f"$\\approx {nb(arr(x, 1), 1)}$")
    L.add("approfondissement", N, "Un élève résout $2^{x} = 10$ en écrivant « $x = \\dfrac{10}{2} = 5$ ». Quelle est la bonne solution, au centième ?", ["On ne divise pas : on applique le logarithme.", f"$x = \\dfrac{{\\log 10}}{{\\log 2}} = \\dfrac{{1}}{{\\log 2}} \\approx {nb(1 / lg(2), 4)}$."], f"$\\approx {nb(arr(1 / lg(2), 2), 2)}$")

    # f) seuils : doublement, division — 7
    N = "doublement-et-seuils"
    for d, t, ctx, seuil, quest in [("intermediaire", F(3, 100), "Un capital est placé à $3\\,\\%$ par an (intérêts composés).", 2, "Au bout de combien d'années aura-t-il doublé pour la première fois ?"),
                                    ("intermediaire", F(5, 100), "Le nombre d'abonnés d'un site augmente de $5\\,\\%$ par an.", 2, "Au bout de combien d'années aura-t-il doublé pour la première fois ?"),
                                    ("approfondissement", F(-2, 100), "Une population d'oiseaux diminue de $2\\,\\%$ par an.", F(1, 2), "Au bout de combien d'années aura-t-elle été divisée par deux pour la première fois ?")]:
        q = 1 + t
        n = math.ceil(lg(float(seuil)) / lg(float(q)))
        _ok(q ** n >= seuil if q > 1 else q ** n <= seuil)
        _ok(q ** (n - 1) < seuil if q > 1 else q ** (n - 1) > seuil)
        if q > 1:
            c1 = f"On cherche le plus petit entier $n$ tel que ${nb(q)}^{{n}} \\geqslant {nb(seuil)}$, soit $n \\log({nb(q)}) \\geqslant \\log({nb(seuil)})$."
            c2 = f"$\\log({nb(q)}) > 0$, donc $n \\geqslant \\dfrac{{\\log({nb(seuil)})}}{{\\log({nb(q)})}} \\approx {nb(lg(float(seuil)) / lg(float(q)), 2)}$."
        else:
            c1 = f"On cherche le plus petit entier $n$ tel que ${nb(q)}^{{n}} \\leqslant {nb(seuil)}$, soit $n \\log({nb(q)}) \\leqslant \\log({nb(seuil)})$."
            c2 = f"$\\log({nb(q)}) < 0$ : on change le sens, $n \\geqslant \\dfrac{{\\log({nb(seuil)})}}{{\\log({nb(q)})}} \\approx {nb(lg(float(seuil)) / lg(float(q)), 2)}$."
        L.add(d, N, f"{ctx} {quest}", [c1, c2, f"Il faut ${n}$ ans."], f"${n}$ ans")
    L.add("intermediaire", N, "Avec un placement à $4\\,\\%$ par an, un capital de $5\\,000$ € dépasse-t-il $7\\,000$ € au bout de $8$ ans ?", [f"$5\\,000 \\times 1{{,}}04^{{8}} \\approx {nb(5000 * 1.04 ** 8, 2)}$ €.", "C'est plus que $7\\,000$ € : oui."], "Oui")
    n = math.ceil(lg(2) / lg(1.10))
    L.add("intermediaire", N, "Le prix d'un objet augmente de $10\\,\\%$ par an. Au bout de combien d'années aura-t-il doublé ?", ["On cherche le plus petit entier $n$ avec $1{,}1^{n} \\geqslant 2$.", f"$n \\geqslant \\dfrac{{\\log 2}}{{\\log 1{{,}}1}} \\approx {nb(lg(2) / lg(1.1), 2)}$ : $n = {n}$."], f"${n}$ ans")
    n = math.ceil(lg(0.1) / lg(0.8))
    L.add("approfondissement", N, "Un médicament est éliminé à raison de $20\\,\\%$ par heure. Au bout de combien d'heures en reste-t-il moins de $10\\,\\%$ ?", ["On cherche le plus petit entier $n$ avec $0{,}8^{n} < 0{,}1$.", f"$n > \\dfrac{{\\log 0{{,}}1}}{{\\log 0{{,}}8}} \\approx {nb(lg(0.1) / lg(0.8), 2)}$ (on change le sens car $\\log 0{{,}}8 < 0$).", f"$n = {n}$ heures."], f"${n}$ heures")
    L.add("approfondissement", N, "Vrai ou faux ? « À $7\\,\\%$ par an, un capital double en un peu plus de $10$ ans. » Justifier.", [f"$\\dfrac{{\\log 2}}{{\\log 1{{,}}07}} \\approx {nb(lg(2) / lg(1.07), 2)}$.", "Il faut $11$ ans ($1{,}07^{10} \\approx 1{,}97 < 2$ et $1{,}07^{11} \\approx 2{,}10$). L'affirmation est vraie."], "Vrai")
    _ok(1.07 ** 10 < 2 < 1.07 ** 11)

    # g) applications — 6
    N = "applications-ph-decibels"
    L.add("application", N, "Le pH d'une solution est $\\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$. Calculer le pH si $[\\mathrm{H_3O^+}] = 10^{-4}$ mol/L.", ["$\\mathrm{pH} = -\\log(10^{-4}) = 4$."], "$4$")
    ph = -lg(3.2e-3)
    L.add("intermediaire", N, "Calculer le pH d'une solution où $[\\mathrm{H_3O^+}] = 3{,}2 \\times 10^{-3}$ mol/L, au dixième.", [f"$\\mathrm{{pH}} = -\\log(3{{,}}2 \\times 10^{{-3}}) \\approx {nb(ph, 3)}$."], f"$\\approx {nb(arr(ph, 1), 1)}$")
    L.add("intermediaire", N, "Le niveau sonore est $L = 10 \\log\\left(\\dfrac{I}{I_0}\\right)$. De combien de décibels augmente-t-il quand l'intensité $I$ est multipliée par $100$ ?", ["$10\\log(100\\,I/I_0) = 10\\log 100 + 10\\log(I/I_0) = 20 + L$.", "Il augmente de $20$ dB."], "$20$ dB")
    L.add("intermediaire", N, "Avec $L = 10 \\log\\left(\\dfrac{I}{I_0}\\right)$, de combien de décibels le niveau augmente-t-il quand l'intensité double ? (au dixième)", [f"$10 \\log 2 \\approx {nb(10 * lg(2), 3)}$.", "Environ $3{,}0$ dB."], "$\\approx 3{,}0$ dB")
    L.add("approfondissement", N, "Un niveau sonore passe de $60$ dB à $90$ dB. Par combien l'intensité sonore a-t-elle été multipliée ?", ["$\\Delta L = 10\\log\\left(\\dfrac{I_2}{I_1}\\right) = 30$, donc $\\log\\left(\\dfrac{I_2}{I_1}\\right) = 3$.", "$\\dfrac{I_2}{I_1} = 10^{3} = 1\\,000$."], "$1\\,000$")
    L.add("approfondissement", N, "Le pH d'une solution passe de $3$ à $5$. Par combien la concentration en ions oxonium a-t-elle été divisée ?", ["$[\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}$ : de $10^{-3}$ à $10^{-5}$.", "Elle a été divisée par $100$."], "Par $100$", acc("par 100", "100"))

    # h) transformer des expressions — 4
    N = "transformer-des-expressions"
    L.add("intermediaire", N, "On sait que $\\log a = 1{,}5$. Calculer $\\log(100a)$.", ["$\\log(100a) = \\log 100 + \\log a = 2 + 1{,}5$."], "$3{,}5$")
    L.add("intermediaire", N, "On sait que $\\log a = 1{,}5$. Calculer $\\log(a^{4})$.", ["$\\log(a^{4}) = 4\\log a = 4 \\times 1{,}5$."], "$6$")
    L.add("approfondissement", N, "On sait que $\\log a = 1{,}5$ et $\\log b = 0{,}7$. Calculer $\\log\\left(\\dfrac{a}{b^{2}}\\right)$.", ["$\\log\\dfrac{a}{b^{2}} = \\log a - 2\\log b = 1{,}5 - 1{,}4$."], "$0{,}1$")
    L.add("approfondissement", N, "Vrai ou faux ? « $\\log(a + b) = \\log a + \\log b$. » Justifier.", ["Contre-exemple : $\\log(10 + 10) = \\log 20 \\approx 1{,}301$, mais $\\log 10 + \\log 10 = 2$.", "Le log transforme les **produits** en sommes : l'affirmation est fausse."], "Faux")
    return L.fin()


# =====================================================================
# 1re techno — SUITES NUMÉRIQUES
# =====================================================================
@chapitre("premiere-techno", "suites-numeriques")
def g1t_suites_numeriques():
    L = Lot(("premiere-techno", "suites-numeriques"))

    # a) calculer des termes — 7
    N = "calculer-des-termes"
    L.add("application", N, "On définit $u_n = 3n + 2$ pour tout entier $n$. Calculer $u_5$.", ["$u_5 = 3 \\times 5 + 2 = 17$."], "$17$")
    L.add("application", N, "On définit $u_n = n^2 - 1$. Calculer $u_4$.", ["$u_4 = 4^2 - 1 = 15$."], "$15$")
    u = 3
    for _ in range(3):
        u = 2 * u - 1
    L.add("intermediaire", N, "On définit $u_0 = 3$ et $u_{n+1} = 2u_n - 1$. Calculer $u_3$.", ["$u_1 = 2 \\times 3 - 1 = 5$ ; $u_2 = 2 \\times 5 - 1 = 9$.", f"$u_3 = 2 \\times 9 - 1 = {u}$."], f"${u}$")
    u = F(100)
    for _ in range(2):
        u = u / 2 + 10
    L.add("intermediaire", N, "On définit $u_0 = 100$ et $u_{n+1} = 0{,}5\\,u_n + 10$. Calculer $u_2$.", ["$u_1 = 0{,}5 \\times 100 + 10 = 60$.", f"$u_2 = 0{{,}}5 \\times 60 + 10 = {nb(u)}$."], f"${nb(u)}$")
    L.add("application", N, "On définit $u_n = \\dfrac{12}{n + 1}$. Calculer $u_2$.", ["$u_2 = \\dfrac{12}{3} = 4$."], "$4$")
    L.add("intermediaire", N, "On définit $u_0 = 5$ et $u_{n+1} = u_n + 4$. Pourquoi faut-il calculer $u_1, u_2, \\ldots$ pour obtenir $u_{10}$ avec cette seule formule ? Donner $u_{10}$.", ["C'est une définition par récurrence : chaque terme se calcule à partir du précédent.", "On reconnaît une suite arithmétique : $u_{10} = 5 + 10 \\times 4 = 45$."], "$45$")
    L.add("approfondissement", N, "Un tableur contient $u_0 = 2$ en A1 et la formule `=A1*3` en A2, recopiée vers le bas. Quelle valeur s'affiche en A5 ?", ["A2 $= 6$, A3 $= 18$, A4 $= 54$.", "A5 $= 162$ (c'est $u_4 = 2 \\times 3^4$)."], "$162$")

    # b) suites arithmétiques — 8
    N = "suites-arithmetiques"
    for d, u0, r, n in [("application", 7, 4, 10), ("application", 50, -3, 12), ("intermediaire", F(25, 10), F(15, 10), 20)]:
        un = F(u0) + n * F(r)
        L.add(d, N, f"$(u_n)$ est arithmétique de premier terme $u_0 = {nb(u0)}$ et de raison $r = {nb(r)}$. Calculer $u_{{{n}}}$.", [f"$u_n = u_0 + n\\,r$.", f"$u_{{{n}}} = {nb(u0)} + {n} \\times ({nb(r)}) = {nb(un)}$." if r < 0 else f"$u_{{{n}}} = {nb(u0)} + {n} \\times {nb(r)} = {nb(un)}$."], f"${nb(un)}$")
    L.add("application", N, "$(u_n)$ est arithmétique avec $u_0 = 12$ et $u_1 = 17$. Quelle est sa raison ?", ["$r = u_1 - u_0 = 17 - 12 = 5$."], "$5$")
    L.add("intermediaire", N, "$(u_n)$ est arithmétique avec $u_3 = 20$ et $u_8 = 45$. Calculer la raison.", ["$u_8 - u_3 = 5r$.", "$5r = 45 - 20 = 25$, donc $r = 5$."], "$r = 5$")
    L.add("intermediaire", N, "$(u_n)$ est arithmétique de raison $-2$ avec $u_0 = 30$. Donner l'expression de $u_n$ en fonction de $n$.", ["$u_n = u_0 + n\\,r = 30 - 2n$."], "$u_n = 30 - 2n$", acc("30 - 2n", "u_n = 30 - 2n"))
    L.add("approfondissement", N, "$(u_n)$ est arithmétique avec $u_0 = 4$ et $r = 3$. Pour quel rang $n$ a-t-on $u_n = 70$ ?", ["$4 + 3n = 70$, donc $3n = 66$.", "$n = 22$."], "$n = 22$")
    L.add("approfondissement", N, "Les points $(n ; u_n)$ d'une suite arithmétique sont-ils alignés ?", ["$u_n = u_0 + rn$ est une fonction affine de $n$.", "Oui : ils sont sur une droite de pente $r$."], "Oui")

    # c) suites géométriques — 8
    N = "suites-geometriques"
    for d, u0, q, n in [("application", 3, 2, 5), ("application", 1000, F(1, 2), 4), ("intermediaire", 200, F(11, 10), 3)]:
        un = F(u0) * F(q) ** n
        L.add(d, N, f"$(u_n)$ est géométrique de premier terme $u_0 = {nb(u0)}$ et de raison $q = {nb(q)}$. Calculer $u_{{{n}}}$.", ["$u_n = u_0 \\times q^{n}$.", f"$u_{{{n}}} = {nb(u0)} \\times {nb(q)}^{{{n}}} = {nb(un)}$."], f"${nb(un)}$")
    L.add("application", N, "$(u_n)$ est géométrique avec $u_0 = 5$ et $u_1 = 15$. Quelle est sa raison ?", ["$q = \\dfrac{u_1}{u_0} = \\dfrac{15}{5} = 3$."], "$3$")
    L.add("intermediaire", N, "$(u_n)$ est géométrique de raison $q = 4$ et $u_2 = 48$. Calculer $u_0$.", ["$u_2 = u_0 \\times 4^2 = 16\\,u_0$.", "$u_0 = 48 \\div 16 = 3$."], "$3$")
    L.add("intermediaire", N, "$(u_n)$ est géométrique avec $u_0 = 2$ et $q = 3$. Donner l'expression de $u_n$ en fonction de $n$.", ["$u_n = u_0 \\times q^{n} = 2 \\times 3^{n}$."], "$u_n = 2 \\times 3^{n}$", acc("2 × 3^n", "u_n = 2 × 3^n"))
    L.add("approfondissement", N, "$(u_n)$ est géométrique avec $u_1 = 6$ et $u_3 = 54$, de raison positive. Calculer $q$.", ["$u_3 = u_1 \\times q^2$, donc $q^2 = 9$.", "$q > 0$, donc $q = 3$."], "$q = 3$")
    L.add("approfondissement", N, "Vrai ou faux ? « Une suite géométrique de raison $2$ augmente de $2$ à chaque étape. » Justifier.", ["Elle est **multipliée** par $2$ à chaque étape (exemple : $3$ ; $6$ ; $12$ ; $24$).", "Augmenter de $2$ décrit une suite arithmétique de raison $2$. L'affirmation est fausse."], "Faux")

    # d) sens de variation — 6
    N = "sens-de-variation"
    for d, txt, r, expl in [("application", "arithmétique de raison $-4$", "Décroissante", "La raison est négative : la suite est décroissante."),
                            ("application", "géométrique de premier terme $u_0 = 5$ et de raison $1{,}2$", "Croissante", "$u_0 > 0$ et $q > 1$ : la suite est croissante."),
                            ("intermediaire", "géométrique de premier terme $u_0 = 800$ et de raison $0{,}75$", "Décroissante ", "$u_0 > 0$ et $0 < q < 1$ : la suite est décroissante."),
                            ("intermediaire", "arithmétique de raison $0{,}5$", "Croissante ", "La raison est positive : la suite est croissante.")]:
        L.add(d, N, f"Quel est le sens de variation d'une suite {txt} ?", [expl], r.strip())
    L.add("intermediaire", N, "Une suite géométrique a pour premier terme $u_0 = 10$ et pour raison $1$. Que peut-on dire de ses variations ?", ["$q = 1$ : tous les termes valent $10$.", "La suite est constante."], "Constante")
    L.add("approfondissement", N, "$u_n = 50 - 3n$. La suite est-elle croissante ou décroissante ?", ["$u_{n+1} - u_n = -3 < 0$.", "Elle est décroissante."], "Décroissante")

    # e) pourcentages et coefficient — 8
    N = "pourcentages-et-raison"
    for d, t, q in [("application", "augmente de $3\\,\\%$", "1{,}03"), ("application", "diminue de $15\\,\\%$", "0{,}85"), ("intermediaire", "augmente de $0{,}5\\,\\%$", "1{,}005")]:
        L.add(d, N, f"Une quantité {t} chaque année. Elle est modélisée par une suite géométrique. Quelle est la raison ?", ["$q = 1 + \\dfrac{t}{100}$ (avec $t < 0$ pour une baisse).", f"$q = {q}$."], f"${q}$")
    p = 12000 * F(102, 100) ** 5
    L.add("intermediaire", N, "Une ville compte $12\\,000$ habitants et sa population augmente de $2\\,\\%$ par an. Combien d'habitants aura-t-elle dans $5$ ans, arrondi à l'unité ?", ["$u_n = 12\\,000 \\times 1{,}02^{n}$.", f"$u_5 = 12\\,000 \\times 1{{,}}02^{{5}} \\approx {nb(p, 2)}$, soit environ ${nb(arr(p))}$ habitants."], f"$\\approx {nb(arr(p))}$ habitants")
    v = 20000 * F(85, 100) ** 3
    L.add("intermediaire", N, "Une voiture neuve vaut $20\\,000$ € et perd $15\\,\\%$ de sa valeur chaque année. Que vaudra-t-elle dans $3$ ans ?", ["$v_n = 20\\,000 \\times 0{,}85^{n}$.", f"$v_3 = 20\\,000 \\times 0{{,}}85^{{3}} = {nb(v)}$ €."], f"${nb(v)}$ €")
    L.add("intermediaire", N, "Un salaire augmente chaque année de $40$ €. Quel modèle convient : arithmétique ou géométrique ?", ["On ajoute la même quantité chaque année.", "Modèle arithmétique de raison $40$."], "Arithmétique")
    L.add("approfondissement", N, "Un prix augmente de $10\\,\\%$ par an pendant $2$ ans. Montrer que la hausse totale n'est pas de $20\\,\\%$ et la donner.", ["$1{,}1^2 = 1{,}21$.", "Hausse totale : $+21\\,\\%$."], "$+21\\,\\%$")
    L.add("approfondissement", N, "Une suite géométrique a pour raison $0{,}92$. Quel pourcentage d'évolution traduit-elle à chaque étape ?", ["$0{,}92 = 1 - 0{,}08$.", "Une baisse de $8\\,\\%$ à chaque étape."], "$-8\\,\\%$")

    # f) reconnaître le modèle — 7
    N = "reconnaitre-le-modele"
    for d, vals, rep, c in [("application", [5, 8, 11, 14], "Arithmétique", "Différences : $3$ ; $3$ ; $3$ (constantes)."),
                            ("application", [3, 6, 12, 24], "Géométrique", "Quotients : $2$ ; $2$ ; $2$ (constants)."),
                            ("intermediaire", [2, 5, 10, 17], "Ni l'une ni l'autre", "Différences : $3$ ; $5$ ; $7$ ; quotients : $2{,}5$ ; $2$ ; $1{,}7$ : ni constants ni l'un ni l'autre."),
                            ("intermediaire", [400, 300, 225, F(675, 4)], "Géométrique ", "Quotients : $0{,}75$ ; $0{,}75$ ; $0{,}75$."),
                            ("intermediaire", [12, 9, 6, 3], "Arithmétique ", "Différences : $-3$ ; $-3$ ; $-3$.")]:
        L.add(d, N, "Les premiers termes d'une suite sont " + " ; ".join(f"${nb(v)}$" for v in vals) + ". La suite semble-t-elle arithmétique, géométrique, ou ni l'une ni l'autre ?", [c], rep.strip())
    L.add("intermediaire", N, "Les termes $10$ ; $15$ ; $22{,}5$ ; $33{,}75$ forment une suite géométrique. Quel pourcentage d'évolution traduit la raison ?", ["$q = \\dfrac{15}{10} = 1{,}5$.", "Hausse de $50\\,\\%$ à chaque étape."], "$+50\\,\\%$")
    L.add("approfondissement", N, "Vrai ou faux ? « La suite $1$ ; $4$ ; $9$ ; $16$ est arithmétique. » Justifier.", ["Différences : $3$ ; $5$ ; $7$, non constantes.", "Elle n'est pas arithmétique (ce sont les carrés) : faux."], "Faux")

    # g) problèmes — 6
    N = "problemes"
    L.add("intermediaire", N, "Dans une salle de spectacle, la première rangée compte $20$ sièges et chaque rangée en compte $2$ de plus que la précédente. Combien de sièges compte la $15^\\text{e}$ rangée ?",
          ["Suite arithmétique de premier terme $u_1 = 20$ et de raison $2$.", "$u_{15} = 20 + 14 \\times 2 = 48$ sièges."], "$48$ sièges")
    L.add("intermediaire", N, "Un abonnement coûte $30$ € par mois la première année, puis augmente de $1{,}50$ € chaque année. Quel est le prix mensuel la $6^\\text{e}$ année ?", ["$u_1 = 30$, raison $1{,}5$.", "$u_6 = 30 + 5 \\times 1{,}5 = 37{,}50$ €."], "$37{,}50$ €")
    b = 500 * 2 ** 6
    L.add("intermediaire", N, "Une culture contient $500$ bactéries et leur nombre double toutes les heures. Combien y en a-t-il au bout de $6$ h ?", ["Suite géométrique de raison $2$ : $u_6 = 500 \\times 2^{6}$.", f"$u_6 = {nb(b)}$ bactéries."], f"${nb(b)}$ bactéries")
    L.add("approfondissement", N, "Offre A : $1\\,600$ € par mois, $+50$ € chaque année. Offre B : $1\\,600$ € par mois, $+3\\,\\%$ chaque année. Quelle offre donne le salaire le plus élevé la $2^\\text{e}$ année ?", ["A : $1\\,650$ € ; B : $1\\,600 \\times 1{,}03 = 1\\,648$ €.", "L'offre A, de peu."], "L'offre A", acc("l'offre A", "offre A", "A"))
    va, vb = 1600 + 10 * 50, 1600 * 1.03 ** 10
    L.add("probleme", N, "Avec les mêmes offres (A : $+50$ € par an ; B : $+3\\,\\%$ par an, à partir de $1\\,600$ €), quelle offre est la meilleure au bout de $10$ augmentations ?", [f"A : $1\\,600 + 10 \\times 50 = {nb(va)}$ €.", f"B : $1\\,600 \\times 1{{,}}03^{{10}} \\approx {nb(vb, 2)}$ €.", "L'offre B devient la meilleure."], "L'offre B", acc("l'offre B", "offre B", "B"))
    _ok(vb > va)
    n = next(k for k in range(100) if 1000 * 1.06 ** k > 2000)
    L.add("probleme", N, "On place $1\\,000$ € à $6\\,\\%$ par an (intérêts composés). À l'aide d'une calculatrice ou d'un tableur, déterminer au bout de combien d'années le capital dépasse $2\\,000$ €.", [f"$1\\,000 \\times 1{{,}}06^{{{n - 1}}} \\approx {nb(1000 * 1.06 ** (n - 1), 2)}$ € et $1\\,000 \\times 1{{,}}06^{{{n}}} \\approx {nb(1000 * 1.06 ** n, 2)}$ €.", f"Le capital dépasse $2\\,000$ € au bout de ${n}$ ans."], f"${n}$ ans")
    return L.fin()


# =====================================================================
# Tle techno — SUITES ARITHMÉTIQUES ET GÉOMÉTRIQUES (moyennes, sommes)
# =====================================================================
@chapitre("terminale-techno", "suites-arithmetiques-geometriques")
def gTt_suites():
    L = Lot(("terminale-techno", "suites-arithmetiques-geometriques"))

    # a) terme général — 7
    N = "terme-general"
    for d, typ, u0, r, n in [("application", "a", 5, 3, 20), ("application", "g", 2, 3, 6), ("intermediaire", "a", 120, -7, 15), ("intermediaire", "g", 4096, F(1, 4), 5)]:
        un = F(u0) + n * F(r) if typ == "a" else F(u0) * F(r) ** n
        L.add(d, N, f"$(u_n)$ est {'arithmétique' if typ == 'a' else 'géométrique'} de premier terme $u_0 = {nb(u0)}$ et de raison ${nb(r) if F(r).denominator == 1 else fl(r)}$. Calculer $u_{{{n}}}$.",
              ["$u_n = u_0 + n\\,r$." if typ == "a" else "$u_n = u_0 \\times q^{n}$.", f"$u_{{{n}}} = {nb(un) if un.denominator == 1 else fl(un)}$."], f"${nb(un) if un.denominator == 1 else fl(un)}$")
    L.add("intermediaire", N, "$(u_n)$ est arithmétique de raison $5$ et $u_4 = 23$. Calculer $u_9$.", ["$u_9 = u_4 + (9 - 4) \\times 5 = 23 + 25 = 48$."], "$48$")
    L.add("intermediaire", N, "$(u_n)$ est géométrique de raison $2$ et $u_3 = 40$. Calculer $u_6$.", ["$u_6 = u_3 \\times 2^{3} = 40 \\times 8 = 320$."], "$320$")
    L.add("approfondissement", N, "$(u_n)$ est arithmétique avec $u_0 = -8$ et $r = 2{,}5$. À partir de quel rang $u_n$ est-il positif ou nul ?", ["$-8 + 2{,}5n \\geqslant 0 \\iff n \\geqslant 3{,}2$.", "À partir du rang $n = 4$."], "$n = 4$")

    # b) raison à partir de deux termes — 7
    N = "raison-a-partir-de-deux-termes"
    L.add("application", N, "$(u_n)$ est arithmétique avec $u_2 = 11$ et $u_7 = 36$. Déterminer sa raison.", ["$u_7 - u_2 = 5r = 25$.", "$r = 5$."], "$r = 5$")
    L.add("application", N, "$(u_n)$ est géométrique avec $u_0 = 3$ et $u_2 = 75$, de raison positive. Déterminer $q$.", ["$q^2 = \\dfrac{75}{3} = 25$.", "$q > 0$ : $q = 5$."], "$q = 5$")
    L.add("intermediaire", N, "$(u_n)$ est arithmétique avec $u_5 = 40$ et $u_{12} = 19$. Déterminer sa raison.", ["$u_{12} - u_5 = 7r = 19 - 40 = -21$.", "$r = -3$."], "$r = -3$")
    L.add("intermediaire", N, "$(u_n)$ est géométrique avec $u_1 = 81$ et $u_4 = 2\\,187$. Déterminer $q$.", ["$q^3 = \\dfrac{2\\,187}{81} = 27$.", "$q = 3$."], "$q = 3$")
    _ok(81 * 27 == 2187)
    L.add("approfondissement", N, "Un capital passe de $5\\,000$ € à $5\\,624{,}32$ € en $3$ ans, avec un taux annuel constant. Quel est ce taux ?", ["$q^3 = \\dfrac{5\\,624{,}32}{5\\,000} = 1{,}124\\,864$.", "$q = 1{,}124\\,864^{1/3} = 1{,}04$ : taux de $4\\,\\%$ par an."], "$4\\,\\%$")
    _ok(F(5000) * F(104, 100) ** 3 == F(562432, 100))
    L.add("approfondissement", N, "$(u_n)$ est géométrique avec $u_0 = 2$ et $u_4 = 32$. Déterminer les deux valeurs possibles de $q$.", ["$q^4 = 16$, donc $q = 2$ ou $q = -2$.", "Les deux conviennent : $2 \\times (-2)^4 = 32$."], "$-2$ et $2$")
    L.add("approfondissement", N, "Vrai ou faux ? « Si $u_3 = 10$ et $u_5 = 16$ pour une suite arithmétique, alors $r = 6$. » Justifier.", ["$u_5 - u_3 = 2r = 6$.", "$r = 3$ : l'affirmation est fausse (il y a deux pas entre $u_3$ et $u_5$)."], "Faux")

    # c) moyennes — 6
    N = "moyennes-arithmetique-et-geometrique"
    L.add("application", N, "Calculer la moyenne arithmétique de $12$ et $30$.", ["$m = \\dfrac{12 + 30}{2} = 21$."], "$21$")
    L.add("application", N, "Calculer la moyenne géométrique de $4$ et $25$.", ["$g = \\sqrt{4 \\times 25} = \\sqrt{100} = 10$."], "$10$")
    g = math.sqrt(1.2 * 1.08)
    L.add("intermediaire", N, "Un prix augmente de $20\\,\\%$ une année, puis de $8\\,\\%$ l'année suivante. Quel est le taux annuel moyen, au dixième de pourcentage ?", ["Le coefficient moyen est la moyenne géométrique des coefficients : $\\sqrt{1{,}2 \\times 1{,}08} = \\sqrt{1{,}296}$.", f"$\\sqrt{{1{{,}}296}} \\approx {nb(g, 4)}$ : taux moyen d'environ ${nb(arr((g - 1) * 100, 1))}\\,\\%$ par an."], f"$\\approx {nb(arr((g - 1) * 100, 1))}\\,\\%$")
    L.add("intermediaire", N, "Quel nombre $b$ faut-il placer entre $8$ et $50$ pour que $8$ ; $b$ ; $50$ soient trois termes consécutifs d'une suite géométrique à termes positifs ?", ["$b = \\sqrt{8 \\times 50} = \\sqrt{400} = 20$."], "$20$")
    L.add("intermediaire", N, "Quel nombre $b$ faut-il placer entre $8$ et $50$ pour obtenir trois termes consécutifs d'une suite arithmétique ?", ["$b = \\dfrac{8 + 50}{2} = 29$."], "$29$")
    L.add("approfondissement", N, "Vrai ou faux ? « Une hausse de $10\\,\\%$ suivie d'une hausse de $30\\,\\%$ correspond à deux hausses de $20\\,\\%$. » Justifier.", ["$1{,}1 \\times 1{,}3 = 1{,}43$ alors que $1{,}2^2 = 1{,}44$.", "Le taux moyen est donné par la moyenne géométrique ($\\approx 19{,}6\\,\\%$), pas arithmétique. Faux."], "Faux")
    _ok(arr((math.sqrt(1.43) - 1) * 100, 1) == F(196, 10))

    # d) termes consécutifs — 6
    N = "termes-consecutifs"
    for d, a, b, c, typ in [("application", 7, 12, 17, "a"), ("application", 5, 15, 45, "g"), ("intermediaire", 3, 7, 12, "a"), ("intermediaire", 4, 10, 25, "g")]:
        if typ == "a":
            ok = 2 * b == a + c
            corr = [f"Il faut $2b = a + c$ : $2 \\times {b} = {2 * b}$ et ${a} + {c} = {a + c}$.", "Égalité vérifiée : oui (raison " + f"${b - a}$)." if ok else "Égalité fausse : non."]
            e = f"Les nombres ${a}$, ${b}$ et ${c}$ sont-ils, dans cet ordre, trois termes consécutifs d'une suite arithmétique ?"
        else:
            ok = b * b == a * c
            corr = [f"Il faut $b^2 = a \\times c$ : ${b}^2 = {b * b}$ et ${a} \\times {c} = {a * c}$.", "Égalité vérifiée : oui (raison " + f"${nb(F(b, a))}$)." if ok else "Égalité fausse : non."]
            e = f"Les nombres ${a}$, ${b}$ et ${c}$ sont-ils, dans cet ordre, trois termes consécutifs d'une suite géométrique ?"
        L.add(d, N, e, corr, "Oui" if ok else "Non")
    L.add("approfondissement", N, "Déterminer $x > 0$ pour que $x$ ; $6$ ; $9$ soient trois termes consécutifs d'une suite géométrique.", ["$6^2 = 9x$, donc $x = \\dfrac{36}{9} = 4$."], "$x = 4$")
    L.add("approfondissement", N, "Déterminer $x$ pour que $x$ ; $6$ ; $9$ soient trois termes consécutifs d'une suite arithmétique.", ["$2 \\times 6 = x + 9$, donc $x = 3$."], "$x = 3$")

    # e) somme arithmétique — 8
    N = "somme-arithmetique"
    L.add("application", N, "Calculer $1 + 2 + 3 + \\cdots + 100$.", ["$\\dfrac{100 \\times 101}{2} = 5\\,050$."], "$5\\,050$")
    L.add("application", N, "Calculer $1 + 2 + \\cdots + 40$.", ["$\\dfrac{40 \\times 41}{2} = 820$."], "$820$")
    for d, u0, r, n in [("intermediaire", 3, 2, 10), ("intermediaire", 50, -4, 12), ("intermediaire", F(5, 10), F(5, 10), 20)]:
        last = F(u0) + (n - 1) * F(r)
        S = n * (F(u0) + last) / 2
        _ok(S == sum(F(u0) + k * F(r) for k in range(n)))
        L.add(d, N, f"$(u_n)$ est arithmétique de premier terme $u_0 = {nb(u0)}$ et de raison ${nb(r)}$. Calculer $S = u_0 + u_1 + \\cdots + u_{{{n - 1}}}$.",
              [f"Il y a ${n}$ termes ; le dernier est $u_{{{n - 1}}} = {nb(u0)} + {n - 1} \\times ({nb(r)}) = {nb(last)}$.", f"$S = {n} \\times \\dfrac{{{nb(u0)} + {nb(last)}}}{{2}} = {nb(S)}$."], f"$S = {nb(S)}$")
    S = sum(range(2, 201, 2))
    L.add("approfondissement", N, "Calculer la somme des nombres pairs de $2$ à $200$.", ["Suite arithmétique de raison $2$ : $100$ termes, de $2$ à $200$.", f"$S = 100 \\times \\dfrac{{2 + 200}}{{2}} = {nb(S)}$."], f"${nb(S)}$")
    S = sum(range(10, 100, 3))
    k = len(range(10, 100, 3))
    L.add("approfondissement", N, "Calculer $10 + 13 + 16 + \\cdots + 97$.", [f"Raison $3$ : nombre de termes $\\dfrac{{97 - 10}}{{3}} + 1 = {k}$.", f"$S = {k} \\times \\dfrac{{10 + 97}}{{2}} = {nb(S)}$."], f"${nb(S)}$")
    L.add("approfondissement", N, "Un élève calcule $u_0 + \\cdots + u_9$ (suite arithmétique, $u_0 = 1$, $r = 2$) en écrivant $9 \\times \\dfrac{1 + 19}{2} = 90$. Quelle est son erreur, et le bon résultat ?", ["De $u_0$ à $u_9$, il y a $10$ termes, pas $9$.", "$S = 10 \\times \\dfrac{1 + 19}{2} = 100$."], "$100$")

    # f) somme géométrique — 8
    N = "somme-geometrique"
    for d, u0, q, n in [("application", 1, 2, 10), ("intermediaire", 3, 2, 8), ("intermediaire", 1000, F(1, 2), 5), ("intermediaire", 5, 3, 6)]:
        S = F(u0) * (1 - F(q) ** n) / (1 - F(q))
        _ok(S == sum(F(u0) * F(q) ** k for k in range(n)))
        L.add(d, N, f"$(u_n)$ est géométrique de premier terme $u_0 = {nb(u0)}$ et de raison ${nb(q)}$. Calculer la somme des ${n}$ premiers termes.",
              ["$S = u_0 \\times \\dfrac{1 - q^{n}}{1 - q}$ ($n$ = nombre de termes).", f"$S = {nb(u0)} \\times \\dfrac{{1 - {nb(q)}^{{{n}}}}}{{1 - {nb(q)}}} = {nb(S)}$."], f"$S = {nb(S)}$")
    S = sum(3 * 2 ** k for k in range(8))
    L.add("intermediaire", N, "Calculer $3 + 6 + 12 + \\cdots + 384$.", ["Suite géométrique de premier terme $3$ et de raison $2$ ; $384 = 3 \\times 2^{7}$, donc il y a $8$ termes.", f"$S = 3 \\times \\dfrac{{1 - 2^{{8}}}}{{1 - 2}} = 3 \\times 255 = {nb(S)}$."], f"${nb(S)}$")
    _ok(384 == 3 * 2 ** 7)
    S = sum(F(1, 2 ** k) for k in range(1, 11))
    L.add("approfondissement", N, "Calculer $\\dfrac{1}{2} + \\dfrac{1}{4} + \\cdots + \\dfrac{1}{2^{10}}$, arrondi au millième.", ["Somme de $10$ termes, premier terme $\\dfrac{1}{2}$, raison $\\dfrac{1}{2}$.", f"$S = \\dfrac{{1}}{{2}} \\times \\dfrac{{1 - 0{{,}}5^{{10}}}}{{1 - 0{{,}}5}} = 1 - \\dfrac{{1}}{{1\\,024}} \\approx {nb(arr(S, 3), 3)}$."], f"$\\approx {nb(arr(S, 3), 3)}$")
    S = sum(F(2) ** k for k in range(0, 64))
    L.add("approfondissement", N, "Légende de l'échiquier : $1$ grain sur la première case, $2$ sur la deuxième, $4$ sur la troisième… sur $64$ cases. Combien de grains en tout ? Donner une écriture avec une puissance de $2$.", ["Somme géométrique de $64$ termes, $u_0 = 1$, $q = 2$.", "$S = \\dfrac{1 - 2^{64}}{1 - 2} = 2^{64} - 1 \\approx 1{,}8 \\times 10^{19}$."], "$2^{64} - 1$", acc("2^64 - 1"))
    _ok(S == 2 ** 64 - 1)
    L.add("approfondissement", N, "Vrai ou faux ? « Dans la formule $u_0 \\dfrac{1 - q^{n}}{1 - q}$, l'exposant $n$ est l'indice du dernier terme. » Justifier.", ["$n$ est le **nombre de termes** additionnés ; le dernier terme est $u_{n-1}$.", "L'affirmation est fausse."], "Faux")

    # g) problèmes de cumul — 8
    N = "problemes-de-cumul"
    tot = sum(24000 + 600 * k for k in range(10))
    L.add("probleme", N, "Un salarié gagne $24\\,000$ € la première année ; son salaire augmente de $600$ € par an. Combien aura-t-il gagné en tout sur $10$ ans ?", ["Suite arithmétique : $u_1 = 24\\,000$, $r = 600$, $u_{10} = 24\\,000 + 9 \\times 600 = 29\\,400$.", f"Total : $10 \\times \\dfrac{{24\\,000 + 29\\,400}}{{2}} = {nb(tot)}$ €."], f"${nb(tot)}$ €")
    tot = 24000 * (1 - 1.025 ** 10) / (1 - 1.025)
    L.add("probleme", N, "Un autre contrat propose $24\\,000$ € la première année, puis $+2{,}5\\,\\%$ par an. Combien aura-t-il gagné en tout sur $10$ ans, à l'euro près ?", ["Suite géométrique : $u_1 = 24\\,000$, $q = 1{,}025$, $10$ termes.", f"$S = 24\\,000 \\times \\dfrac{{1 - 1{{,}}025^{{10}}}}{{1 - 1{{,}}025}} \\approx {nb(arr(tot))}$ €."], f"$\\approx {nb(arr(tot))}$ €")
    tot = sum(range(20, 20 + 2 * 25, 2))
    L.add("probleme", N, "Un amphithéâtre a $25$ rangées ; la première compte $20$ places et chaque rangée $2$ places de plus que la précédente. Combien de places en tout ?", ["Dernière rangée : $20 + 24 \\times 2 = 68$.", f"Total : $25 \\times \\dfrac{{20 + 68}}{{2}} = {nb(tot)}$ places."], f"${nb(tot)}$ places")
    tot = 1000 * (1 - 1.1 ** 7) / (1 - 1.1)
    L.add("probleme", N, "Une association compte $1\\,000$ visiteurs la première semaine, puis $10\\,\\%$ de plus chaque semaine. Combien de visiteurs en tout sur $7$ semaines, à l'unité près ?", ["Somme géométrique : $u_1 = 1\\,000$, $q = 1{,}1$, $7$ termes.", f"$S = 1\\,000 \\times \\dfrac{{1{{,}}1^{{7}} - 1}}{{0{{,}}1}} \\approx {nb(arr(tot))}$ visiteurs."], f"$\\approx {nb(arr(tot))}$ visiteurs")
    tot = 2 * (1 - 0.8 ** 5) / 0.2
    L.add("probleme", N, "Une balle lâchée de $2$ m rebondit à chaque fois à $80\\,\\%$ de sa hauteur précédente. Quelle est la somme des hauteurs atteintes, de $2$ m jusqu'au $4^\\text{e}$ rebond inclus (soit $5$ hauteurs), au centimètre près ?", ["Hauteurs : $2$ ; $1{,}6$ ; $1{,}28$ ; … suite géométrique de raison $0{,}8$.", f"$S = 2 \\times \\dfrac{{1 - 0{{,}}8^{{5}}}}{{1 - 0{{,}}8}} = {nb(tot, 4)}$ m."], f"$\\approx {nb(arr(tot, 2), 2)}$ m")
    n = next(k for k in range(1, 100) if k * (k + 1) // 2 > 1000)
    L.add("probleme", N, "On empile des boîtes : $1$ au sommet, $2$ dessous, $3$ dessous… Combien de rangées faut-il au minimum pour utiliser plus de $1\\,000$ boîtes ?", ["Avec $n$ rangées : $\\dfrac{n(n + 1)}{2}$ boîtes.", f"$\\dfrac{{{n - 1} \\times {n}}}{{2}} = {(n - 1) * n // 2}$ et $\\dfrac{{{n} \\times {n + 1}}}{{2}} = {n * (n + 1) // 2}$.", f"Il faut ${n}$ rangées."], f"${n}$ rangées")
    L.add("probleme", N, "Un loyer de $600$ € par mois augmente de $15$ € chaque année. Quel sera le loyer mensuel la $8^\\text{e}$ année ?", ["$u_1 = 600$, $r = 15$.", "$u_8 = 600 + 7 \\times 15 = 705$ €."], "$705$ €")
    tot = 12 * sum(600 + 15 * k for k in range(8))
    L.add("probleme", N, "Avec ce loyer ($600$ € par mois la première année, $+15$ € par an), quelle somme le locataire aura-t-il payée en $8$ ans ?", ["Somme des loyers mensuels : $8 \\times \\dfrac{600 + 705}{2} = 5\\,220$ €.", f"Sur $12$ mois par an : $12 \\times 5\\,220 = {nb(tot)}$ €."], f"${nb(tot)}$ €")
    return L.fin()


# =====================================================================
# Écriture des attendus.json (formes courtes acceptées par l'appli)
# =====================================================================
def ecrire_attendus(racine=None):
    racine = racine or os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "contenu")
    for (niveau, slug), fn in EXTRA.items():
        fn()
        mat = next(m for m in ("maths", "physique-chimie") if os.path.isdir(os.path.join(racine, niveau, m, slug)))
        dossier = os.path.join(racine, niveau, mat, slug)
        ex = json.load(open(os.path.join(dossier, "exercice.json"), encoding="utf-8"))["exercices"]
        att = ATTENDUS[(niveau, slug)]
        par_id = {str(x["id"]): x for x in ex}
        for i, a in att.items():
            if par_id.get(i, {}).get("reponse") != a["reponse"]:
                raise SystemExit(f"{niveau}/{slug} : exercice.json n'est pas à jour (lancer d'abord python3 scripts/generer-exos.py)")
        chemin = os.path.join(dossier, "attendus.json")
        if att or os.path.exists(chemin):
            with open(chemin, "w", encoding="utf-8") as f:
                json.dump(att, f, ensure_ascii=False, indent=2)
                f.write("\n")
        print(f"{niveau}/{mat}/{slug} : {len(att)} ligne(s) d'attendus")


if __name__ == "__main__":
    import sys
    if "--attendus" in sys.argv:
        ecrire_attendus()
    else:
        print(__doc__)
