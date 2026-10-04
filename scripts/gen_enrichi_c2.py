# -*- coding: utf-8 -*-
"""Lot c2 : générateurs enrichis — maths 4e / 3e (cycle 4).

EXTRA = {(niveau, slug): fonction sans argument -> liste de 50 exercices}.
Toutes les réponses sont calculées par le code ; tout est déterministe.
"""
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction as F
import math

TIMES = " \\times "

# ====================================================================
# Petites aides
# ====================================================================


def _dec(x):
    if isinstance(x, F):
        return Decimal(x.numerator) / Decimal(x.denominator)
    if isinstance(x, float):
        return Decimal(repr(x))
    return Decimal(x)


def arr(x, dec=0):
    """Arrondi scolaire (0,5 -> au-dessus en valeur absolue)."""
    return _dec(x).quantize(Decimal(1).scaleb(-dec), rounding=ROUND_HALF_UP)


def _grouper(s, sep):
    if len(s) <= 3:
        return s
    g = []
    while s:
        g.insert(0, s[-3:])
        s = s[:-3]
    return sep.join(g)


def nb(x, dec=3, m=True):
    """Nombre écrit à la française. m=True : pour une formule ({,} et \\,)."""
    d = arr(x, dec)
    neg = d < 0
    d = abs(d)
    s = format(d, "f")
    if "." in s:
        e, f_ = s.split(".")
        f_ = f_.rstrip("0")
    else:
        e, f_ = s, ""
    e = _grouper(e, "\\," if m else " ")
    r = e + ((("{,}" if m else ",") + f_) if f_ else "")
    if neg and r not in ("0",):
        r = "-" + r
    return r


def nt(x, dec=3):
    """Nombre pour le texte (hors formule)."""
    return nb(x, dec, m=False)


def est_decimal(f):
    f = F(f)
    d = f.denominator
    for p in (2, 5):
        while d % p == 0:
            d //= p
    return d == 1


def fl(f):
    """Fraction (irréductible) en LaTeX."""
    f = F(f)
    if f.denominator == 1:
        return str(f.numerator)
    s = "-" if f < 0 else ""
    return f"{s}\\dfrac{{{abs(f.numerator)}}}{{{f.denominator}}}"


def num(f):
    """Décimal si possible, sinon fraction."""
    f = F(f)
    if est_decimal(f):
        return nb(f, 6)
    return fl(f)


def eur(x):
    """Montant en euros : deux décimales s'il n'est pas entier (11,50)."""
    f = F(x)
    if f.denominator == 1:
        return num(f)
    r = nb(f, 2)
    if "{,}" in r and len(r.split("{,}")[1]) == 1:
        r += "0"
    return r


def par(x):
    """Nombre entre parenthèses s'il est négatif (dans une formule)."""
    s = num(x)
    if F(x) < 0:
        if "dfrac" in s:
            return f"\\left({s}\\right)"
        return f"({s})"
    return s


def parf(x):
    """Fraction (jamais décimale) entre parenthèses si négative."""
    s = fl(x)
    if F(x) < 0:
        return f"\\left({s}\\right)" if "dfrac" in s else f"({s})"
    return s


def poly(termes):
    """termes = [(coef, monome)] -> '3x^2 - x + 5'."""
    out = []
    for c, m in termes:
        c = F(c)
        if c == 0:
            continue
        a = abs(c)
        if m and a == 1:
            corps = m
        else:
            corps = num(a) + m
        if not out:
            out.append(("-" if c < 0 else "") + corps)
        else:
            out.append((" - " if c < 0 else " + ") + corps)
    return "".join(out) if out else "0"


def lin(a, b, v="x"):
    return poly([(a, v), (b, "")])


def kx(c, m="x"):
    """Monôme c·m prêt à être multiplié : x, (-x), 3x, (-2x)."""
    c = F(c)
    corps = (m if abs(c) == 1 else num(abs(c)) + m) if m else num(abs(c))
    return f"(-{corps})" if c < 0 else corps


def pl(n, mot, motpl=None):
    return f"{nt(n)} {mot if abs(n) < 2 else (motpl or mot + 's')}"


def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}


def _fin(E):
    assert len(E) == 50, len(E)
    en = [t[2] for t in E]
    assert len(set(en)) == 50, [e for e in en if en.count(e) > 1][:2]
    return [exo(i + 1, *t) for i, t in enumerate(E)]


def _ev(expr, **v):
    """Évalue une expression Python avec des Fractions."""
    env = {k: F(x) for k, x in v.items()}
    return F(eval(expr, {"F": F}, env))


# ====================================================================
# 4e — CALCUL LITTÉRAL
# ====================================================================
def g4_calcul_litteral():
    E = []

    def add(*t):
        E.append(t)

    # -- valeur d'une expression (7)
    vals = [("3x + 5", "3 \\times {X} + 5", "3*x+5", -2),
            ("x^2 - 4x", "{X}^2 - 4 \\times {X}", "x*x-4*x", -3),
            ("2x^2 + x - 1", "2 \\times {X}^2 + {X} - 1", "2*x*x+x-1", -1),
            ("5 - 2x", "5 - 2 \\times {X}", "5-2*x", -4),
            ("x^2 + 3", "{X}^2 + 3", "x*x+3", -5),
            ("4(x - 3)", "4 \\times ({X} - 3)", "4*(x-3)", F(1, 2)),
            ("-x^2 + 6", "-{X}^2 + 6", "-x*x+6", 2)]
    for ex, tpl, py, x in vals:
        v = _ev(py, x=x)
        sub = tpl.replace("{X}", par(x))
        add("application", "valeur-expression",
            f"Calcule la valeur de $A = {ex}$ pour $x = {num(x)}$.",
            [f"On remplace $x$ par ${num(x)}$" + (" en mettant des parenthèses" if F(x) < 0 else "") + ".",
             f"$A = {sub} = {num(v)}$."],
            f"$A = {num(v)}$")
    # -- tester une égalité (5)
    tests = [("3x - 4", "x + 2", "3*x-4", "x+2", 3),
             ("2x + 7", "5x - 2", "2*x+7", "5*x-2", 3),
             ("x^2", "4x - 3", "x*x", "4*x-3", 2),
             ("x^2 + 1", "2 - 3x", "x*x+1", "2-3*x", -1),
             ("6 - x", "2x + 15", "6-x", "2*x+15", -3)]
    for g, d, pg, pd, x in tests:
        vg, vd = _ev(pg, x=x), _ev(pd, x=x)
        ok = vg == vd
        add("intermediaire", "tester-egalite",
            f"Le nombre ${num(x)}$ est-il solution de l'équation ${g} = {d}$ ?",
            [f"Membre de gauche pour $x = {num(x)}$ : ${num(vg)}$.",
             f"Membre de droite pour $x = {num(x)}$ : ${num(vd)}$.",
             ("Les deux membres sont égaux : l'égalité est vraie." if ok
              else "Les deux membres sont différents : l'égalité est fausse.")],
            f"{'Oui' if ok else 'Non'}, ${num(x)}$ {'est' if ok else 'n' + chr(39) + 'est pas'} solution")
    # -- réduire (8)
    red = [(3, 5, -7, 2), (-2, 8, 6, -3), (5, -1, -5, 4), (4, -6, 1, 9), (-3, -2, -4, 7), (7, 3, -2, -10)]
    for a, b, c, d in red:
        e = poly([(a, "x"), (b, ""), (c, "x"), (d, "")])
        r = lin(a + c, b + d)
        add("application", "reduire",
            f"Réduis l'expression $B = {e}$.",
            [f"On regroupe les termes en $x$ : ${poly([(a, 'x'), (c, 'x')])} = {poly([(a + c, 'x')])}$.",
             f"On regroupe les nombres : ${poly([(b, ''), (d, '')])} = {num(b + d)}$.",
             f"$B = {r}$."],
            f"$B = {r}$")
    for a, b in [(4, 3), (-5, 2)]:
        add("intermediaire", "reduire",
            f"Réduis le produit $C = {a}x \\times {b}x$.",
            [f"On multiplie les nombres entre eux et $x \\times x = x^2$.",
             f"$C = {a} \\times {b} \\times x \\times x = {poly([(a * b, 'x^2')])}$."],
            f"$C = {poly([(a * b, 'x^2')])}$")
    # -- développer (8)  k(ax+b)  ou  kx(ax+b)
    dev = [(4, "", 3, -2), (-2, "", 3, -4), (-5, "", -2, 1), (7, "", 1, 6),
           (1, "x", 2, 3), (-1, "x", 1, -5), (3, "x", 4, -1), (-2, "x", -3, 5)]
    for k, km, a, b in dev:
        kk = ("-" if k == -1 else "") + ("" if abs(k) == 1 and km else str(k)) + km
        expr = f"{kk}({lin(a, b)})"
        ks = kx(k, km) if km else par(k)
        if km:
            res = poly([(k * a, "x^2"), (k * b, "x")])
        else:
            res = lin(k * a, k * b)
        det = f"{ks} \\times {kx(a, 'x')} + {ks} \\times {par(b)}"
        diff = "application" if (k > 0 and b > 0) else "intermediaire"
        add(diff, "developper",
            f"Développe et réduis $D = {expr}$.",
            ["On distribue le facteur à chaque terme de la parenthèse : $k(a + b) = ka + kb$.",
             f"$D = {det} = {res}$."],
            f"$D = {res}$")
    # -- factoriser (7)
    fac = [(3, 2, 5), (5, 3, -2), (7, 1, 4), (4, 3, -5), (6, 1, -3)]
    for k, a, b in fac:
        e = lin(k * a, k * b)
        add("intermediaire", "factoriser",
            f"Factorise $E = {e}$.",
            [f"${num(k * a)}x = {k} \\times {num(a) if a != 1 else ''}x$ et ${num(abs(k * b))} = {k} \\times {abs(b)}$ : le facteur commun est ${k}$.",
             f"$E = {k}({lin(a, b)})$. On vérifie en développant."],
            f"$E = {k}({lin(a, b)})$")
    for k, b in [(1, 7), (3, -2)]:
        e = poly([(k, "x^2"), (k * b, "x")])
        fk = ("" if k == 1 else str(k)) + "x"
        add("approfondissement", "factoriser",
            f"Factorise $E = {e}$.",
            [f"Chaque terme contient le facteur ${fk}$ : $" + (f"x^2 = x \\times x$ et ${num(abs(b))}x = x \\times {num(abs(b))}$." if k == 1 else f"{k}x^2 = {fk} \\times x$ et ${num(abs(k * b))}x = {fk} \\times {num(abs(b))}$."),
             f"$E = {fk}({lin(1, b)})$."],
            f"$E = {fk}({lin(1, b)})$")
    # -- équations (9)
    eq1 = [(3, 5, 26), (4, -7, 13), (-2, 9, 1), (5, 3, -12), (6, 1, 4)]
    for a, b, c in eq1:
        x = F(c - b, a)
        add("intermediaire", "equation",
            f"Résous l'équation ${lin(a, b)} = {c}$.",
            [(f"On retire ${abs(b)}$ des deux membres" if b > 0 else f"On ajoute ${abs(b)}$ aux deux membres") + f" : ${num(a)}x = {c - b}$.",
             f"On divise les deux membres par ${num(a)}$ : $x = {num(x)}$.",
             f"Vérification : ${num(a)} \\times {par(x)} {'+' if b > 0 else '-'} {abs(b)} = {num(a * x + b)}$."],
            f"$x = {num(x)}$")
    eq2 = [(5, 3, 2, 15), (7, -4, 3, 6), (2, 9, 6, -7), (-3, 4, 2, -7)]
    for a, b, c, d in eq2:
        x = F(d - b, a - c)
        add("approfondissement", "equation",
            f"Résous l'équation ${lin(a, b)} = {lin(c, d)}$.",
            [f"On regroupe les $x$ à gauche en retirant ${lin(c, 0)}$ des deux membres : ${lin(a - c, b)} = {d}$.",
             f"On isole : ${lin(a - c, 0)} = {d - b}$, donc $x = {fl(x)}" + (f" = {num(x)}" if fl(x) != num(x) else "") + "$.",
             f"Vérification : les deux membres valent ${num(a * x + b)}$."],
            f"$x = {num(x)}$")
    # -- mise en équation (6)
    x = F(43 - 7, 4)
    add("probleme", "mise-en-equation",
        "Je pense à un nombre. Je le multiplie par 4, puis j'ajoute 7 : j'obtiens 43. Quel est ce nombre ?",
        ["On note $x$ le nombre : $4x + 7 = 43$.", "$4x = 36$, donc $x = " + num(x) + "$.",
         f"Vérification : $4 \\times {num(x)} + 7 = 43$."], f"${num(x)}$")
    l = F(54, 6)
    add("probleme", "mise-en-equation",
        "La longueur d'un rectangle est le double de sa largeur et son périmètre mesure 54 cm. Calcule ses dimensions.",
        ["On note $\\ell$ la largeur : la longueur vaut $2\\ell$.",
         "Périmètre : $2(\\ell + 2\\ell) = 6\\ell = 54$, donc $\\ell = " + num(l) + "$.",
         f"Longueur : $2 \\times {num(l)} = {num(2 * l)}$ cm."],
        f"largeur ${num(l)}$ cm, longueur ${num(2 * l)}$ cm")
    n = F(15, 9 - 6)
    add("probleme", "mise-en-equation",
        "Au cinéma, la place coûte 9 € ; avec la carte d'abonnement (15 €), la place ne coûte plus que 6 €. Pour combien de places les deux formules coûtent-elles le même prix ?",
        ["On note $n$ le nombre de places : sans carte $9n$, avec carte $15 + 6n$.",
         "$9n = 15 + 6n$ donne $3n = 15$, donc $n = " + num(n) + "$.",
         f"Vérification : $9 \\times {num(n)} = {num(9 * n)}$ et $15 + 6 \\times {num(n)} = {num(15 + 6 * n)}$."],
        f"${num(n)}$ places")
    x = F(72 - 3, 3)
    add("probleme", "mise-en-equation",
        "La somme de trois nombres entiers consécutifs est 72. Quels sont ces nombres ?",
        ["On note $n$ le plus petit : $n + (n + 1) + (n + 2) = 72$.",
         "$3n + 3 = 72$, donc $3n = 69$ et $n = " + num(x) + "$."],
        f"${num(x)}$, ${num(x + 1)}$ et ${num(x + 2)}$")
    x = F(52, 4)
    add("probleme", "mise-en-equation",
        "Une mère a trois fois l'âge de son fils. À eux deux, ils ont 52 ans. Quel âge a chacun ?",
        ["On note $a$ l'âge du fils : celui de la mère est $3a$.",
         "$a + 3a = 52$, donc $4a = 52$ et $a = " + num(x) + "$."],
        f"le fils a ${num(x)}$ ans, la mère ${num(3 * x)}$ ans")
    d = (F(22) - 4) / F("1.5")
    add("probleme", "mise-en-equation",
        "Un taxi facture 4 € de prise en charge, puis 1,50 € par kilomètre. Une course a coûté 22 €. Quelle distance a été parcourue ?",
        ["On note $d$ la distance en km : $4 + 1{,}5d = 22$.",
         "$1{,}5d = 18$, donc $d = 18 \\div 1{,}5 = " + num(d) + "$."],
        f"${num(d)}$ km")
    return _fin(E)


# ====================================================================
# 4e — FONCTIONS : programmes de calcul et dépendance
# ====================================================================
_OPTXT = {"+": "ajouter", "-": "soustraire", "*": "multiplier par", "/": "diviser par"}
_OPTEX = {"+": "+", "-": "-", "*": "\\times", "/": "\\div"}


def _prog_txt(steps):
    morceaux = ["choisir un nombre"]
    for op, k in steps:
        if op == "sq":
            morceaux.append("le multiplier par lui-même")
        else:
            morceaux.append(f"{_OPTXT[op]} ${num(k)}$")
    return "« " + " ; ".join(morceaux) + " »"


def _applique(op, k, v):
    if op == "+":
        return v + k
    if op == "-":
        return v - k
    if op == "*":
        return v * k
    if op == "/":
        return v / k
    return v * v


def _prog_num(steps, x):
    v = F(x)
    lignes = []
    for op, k in steps:
        w = _applique(op, F(k) if k is not None else None, v)
        if op == "sq":
            lignes.append(f"${par(v)} \\times {par(v)} = {num(w)}$")
        else:
            lignes.append(f"${par(v) if op in '*/' or v >= 0 else num(v)} {_OPTEX[op]} {par(k)} = {num(w)}$")
        v = w
    return v, lignes


def _prog_lin(steps):
    a, b = F(1), F(0)
    lignes = []
    for op, k in steps:
        k = F(k)
        avant = lin(a, b)
        b_avant = b
        if op == "+":
            b += k
        elif op == "-":
            b -= k
        elif op == "*":
            a, b = a * k, b * k
        else:
            a, b = a / k, b / k
        if op in "*/" and b != 0 and avant != "x":
            lignes.append(f"$({avant}) {_OPTEX[op]} {par(k)} = {lin(a, b)}$")
        elif op in "+-" and b_avant != 0:
            lignes.append(f"${avant} {_OPTEX[op]} {par(k)} = {lin(a, b)}$")
        else:
            lignes.append(f"${lin(a, b)}$")
    return a, b, lignes


def g4_fonctions():
    E = []

    def add(*t):
        E.append(t)

    P1 = [("*", 3), ("+", 4), ("*", 2)]
    P2 = [("+", 5), ("*", 4), ("-", 7)]
    P3 = [("*", -2), ("+", 9)]
    P4 = [("-", 3), ("*", 5), ("+", 1)]
    P5 = [("*", 6), ("-", 4), ("/", 2)]
    PC = [("sq", None), ("+", 3)]
    # -- appliquer à un nombre (10)
    for P, x in [(P1, -2), (P1, F("2.5")), (P2, -8), (P3, -4), (P3, F("3.5")),
                 (P4, -1), (P5, -3), (P5, F("1.5")), (PC, -5), (PC, F("0.4"))]:
        v, lignes = _prog_num(P, x)
        diff = "application" if F(x).denominator == 1 else "intermediaire"
        add(diff, "programme-nombre",
            f"Programme de calcul : {_prog_txt(P)}. Quel résultat obtient-on en choisissant ${num(x)}$ ?",
            ["On applique les étapes dans l'ordre :"] + lignes,
            f"${num(v)}$")
    # -- appliquer à une variable (8)
    P6 = [("*", 4), ("-", 1), ("*", -3)]
    P7 = [("-", 2), ("*", -5), ("+", 10)]
    P8 = [("*", 2), ("+", 6), ("/", 2)]
    for P in [P1, P2, P3, P4, P5, P6, P7, P8]:
        a, b, lignes = _prog_lin(P)
        add("intermediaire" if len(P) == 3 else "application", "programme-variable",
            f"On applique le programme {_prog_txt(P)} à un nombre $x$. Exprime le résultat $P(x)$ en fonction de $x$, sous forme réduite.",
            ["On part de $x$ et on écrit chaque étape :"] + lignes,
            f"$P(x) = {lin(a, b)}$")
    # -- remonter un programme (8)
    inv = {"+": "-", "-": "+", "*": "/", "/": "*"}
    for P, x in [(P1, 5), (P2, -3), (P3, 7), (P4, -2), (P5, 4), (P6, -1), (P7, 6), (P8, -9)]:
        r = _prog_num(P, x)[0]
        v = r
        lignes = ["On remonte le programme en partant de la fin, avec l'opération inverse de chaque étape :"]
        for op, k in reversed(P):
            o = inv[op]
            w = _applique(o, F(k), v)
            lignes.append(f"${par(v) if o in '*/' or v >= 0 else num(v)} {_OPTEX[o]} {par(k)} = {num(w)}$")
            v = w
        assert v == x
        lignes.append(f"Vérification : le programme appliqué à ${num(x)}$ donne bien ${num(r)}$.")
        add("approfondissement" if len(P) == 3 else "intermediaire", "remonter",
            f"Avec le programme {_prog_txt(P)}, on a obtenu ${num(r)}$. Quel nombre avait-on choisi ?",
            lignes, f"${num(x)}$")
    # -- produire une formule (8)
    form = [
        ("Un taxi facture 3 € de prise en charge puis 2 € par kilomètre.", "le prix $p$ (en €)", "de la distance $d$ (en km)",
         "p = 3 + 2d", lambda v: 3 + 2 * v, "d", 12, "€"),
        ("Une salle de sport demande 30 € d'inscription, puis 8 € par séance.", "le prix $p$ (en €)", "du nombre $n$ de séances",
         "p = 30 + 8n", lambda v: 30 + 8 * v, "n", 15, "€"),
        ("Une bougie de 20 cm raccourcit de 1,5 cm par heure.", "sa hauteur $h$ (en cm)", "de la durée $t$ (en h)",
         "h = 20 - 1{,}5t", lambda v: 20 - F("1.5") * v, "t", 6, "cm"),
        ("Un rectangle a une largeur $\\ell$ (en cm) et une longueur de 3 cm de plus.", "son périmètre $P$ (en cm)", "de $\\ell$",
         "P = 2(\\ell + \\ell + 3) = 4\\ell + 6", lambda v: 4 * v + 6, "\\ell", F("4.5"), "cm"),
        ("Un congélateur débranché est à $-18$ °C ; sa température monte de 4 °C par heure.", "la température $T$ (en °C)", "de la durée $t$ (en h)",
         "T = -18 + 4t", lambda v: -18 + 4 * v, "t", 3, "°C"),
        ("Un réservoir contient 50 L d'essence ; la voiture consomme 6 L aux 100 km, soit 0,06 L par km.", "le volume $V$ restant (en L)", "de la distance $d$ (en km)",
         "V = 50 - 0{,}06d", lambda v: 50 - F("0.06") * v, "d", 400, "L"),
        ("Un carré a pour côté $c + 2$ (en cm).", "son aire $A$ (en cm²)", "de $c$",
         "A = (c + 2)^2", lambda v: (v + 2) ** 2, "c", 3, "cm²"),
        ("Une location de vélo coûte 4 € plus 2,50 € par heure.", "le prix $p$ (en €)", "de la durée $t$ (en h)",
         "p = 4 + 2{,}5t", lambda v: 4 + F("2.5") * v, "t", 3, "€"),
    ]
    for ctx, gr, var, fo, f, sym, val, u in form:
        r = F(f(F(val)))
        add("intermediaire" if "c + 2" not in fo else "approfondissement", "formule",
            f"{ctx} Écris une formule donnant {gr} en fonction {var}, puis calcule sa valeur pour ${sym} = {num(val)}$.",
            [f"Formule : ${fo}$.", f"Pour ${sym} = {num(val)}$ : on trouve ${eur(r) if u == '€' else num(r)}$ {u}."],
            f"${fo.split(' = ')[0]} = {fo.split(' = ')[-1]}$ ; ${eur(r) if u == '€' else num(r)}$ {u}")
    # -- tableau et graphique (8)
    pts = [("p = 3 + 2d", lambda v: 3 + 2 * v, "d", "p", 4, 11),
           ("y = 3x - 1", lambda v: 3 * v - 1, "x", "y", 5, 14),
           ("T = -18 + 4t", lambda v: -18 + 4 * v, "t", "T", 2, -12),
           ("A = 5 + 0{,}5n", lambda v: 5 + F("0.5") * v, "n", "A", 7, 9),
           ("y = 10 - 2x", lambda v: 10 - 2 * v, "x", "y", 6, -2)]
    for fo, f, xv, yv, a, b in pts:
        r = F(f(F(a)))
        ok = r == b
        add("intermediaire", "tableau-graphique",
            f"On représente ${fo}$ par un graphique (${xv}$ en abscisse, ${yv}$ en ordonnée). Le point de coordonnées $({num(a)}\\,;{num(b)})$ est-il sur ce graphique ?",
            [f"Pour ${xv} = {num(a)}$ : ${yv} = {num(r)}$.",
             ("C'est bien l'ordonnée du point : il est sur le graphique." if ok
              else f"Le point devrait avoir pour ordonnée ${num(r)}$, pas ${num(b)}$ : il n'est pas sur le graphique.")],
            "Oui" if ok else "Non")
    for fo, ctx, prop in [("p = 2{,}5n", "le prix $p$ de $n$ croissants à 2,50 € pièce", True),
                          ("p = 3 + 2d", "le prix $p$ d'une course de taxi de $d$ km (3 € de prise en charge et 2 € par km)", False),
                          ("P = 4c", "le périmètre $P$ d'un carré de côté $c$", True)]:
        add("approfondissement", "tableau-graphique",
            f"On représente {ctx} par la formule ${fo}$. Le graphique passe-t-il par l'origine ? Est-ce une situation de proportionnalité ?",
            ([f"Pour une valeur nulle de la variable, ${fo.split(' = ')[0]} = 0$ : le point $(0\\,;0)$ est sur le graphique.",
              "Les points sont alignés avec l'origine : c'est une situation de proportionnalité."] if prop else
             ["Pour $d = 0$, $p = 3$ : le graphique passe par $(0\\,;3)$, pas par l'origine.",
              "Les points sont alignés, mais pas avec l'origine : ce n'est pas une situation de proportionnalité."]),
            "Oui, c'est une situation de proportionnalité" if prop else "Non, ce n'est pas une situation de proportionnalité")
    # -- comparer deux programmes (8)
    paires = [([("+", 2), ("*", 3), ("-", 6)], [("*", 3)]),
              ([("*", 2), ("+", 10), ("/", 2)], [("+", 5)]),
              ([("-", 1), ("*", 4)], [("*", 4), ("-", 1)]),
              ([("*", 5), ("-", 3), ("*", 2)], [("*", 10), ("-", 6)]),
              ([("+", 3), ("*", -2)], [("*", -2), ("+", 6)])]
    for A, B in paires:
        a1, b1, l1 = _prog_lin(A)
        a2, b2, l2 = _prog_lin(B)
        same = (a1, b1) == (a2, b2)
        cor = [f"Programme 1 : $P_1(x) = {lin(a1, b1)}$.", f"Programme 2 : $P_2(x) = {lin(a2, b2)}$."]
        if same:
            cor.append("Les deux expressions sont égales pour tout $x$ : les programmes donnent toujours le même résultat.")
        else:
            cor.append(f"Par exemple pour $x = 0$ : ${num(b1)} \\neq {num(b2)}$. Un seul contre-exemple suffit.")
        add("approfondissement", "comparer-programmes",
            f"Programme 1 : {_prog_txt(A)}. Programme 2 : {_prog_txt(B)}. Ces deux programmes donnent-ils toujours le même résultat ?",
            cor, "Oui, toujours" if same else "Non")
    for A, B, x in [([("*", 3), ("+", 4)], [("*", 5)], 2),
                    ([("*", 2), ("+", 6)], [("*", 4), ("+", 2)], 2),
                    ([("+", 6), ("*", 2)], [("*", 5), ("+", 3)], 3)]:
        a1, b1, _ = _prog_lin(A)
        a2, b2, _ = _prog_lin(B)
        assert a1 * x + b1 == a2 * x + b2 and (a1, b1) != (a2, b2)
        y = x + 1
        add("probleme", "comparer-programmes",
            f"Programme 1 : {_prog_txt(A)}. Programme 2 : {_prog_txt(B)}. Avec ${x}$, les deux donnent ${num(a1 * x + b1)}$. Peut-on en conclure qu'ils donnent toujours le même résultat ?",
            ["Un seul essai ne prouve rien : il faut comparer les expressions.",
             f"$P_1(x) = {lin(a1, b1)}$ et $P_2(x) = {lin(a2, b2)}$ : elles sont différentes.",
             f"Contre-exemple : pour $x = {y}$, on obtient ${num(a1 * y + b1)}$ et ${num(a2 * y + b2)}$."],
            "Non")
    return _fin(E)


def _expr_mid(add, diff, notion, consigne, liste, nom="A", intro=None):
    """liste = [(latex, py, mid_latex, mid_py)] ; vérifie que mid == expr."""
    for lx, py, ml, mp in liste:
        v, w = _ev(py), _ev(mp)
        assert v == w, (lx, v, w)
        cor = [intro] if intro else []
        cor.append(f"${nom} = {ml} = {num(v) if est_decimal(v) else fl(v)}$.")
        add(diff, notion, f"{consigne} ${nom} = {lx}$.", cor,
            f"${nom} = {num(v) if est_decimal(v) else fl(v)}$")


# ====================================================================
# 4e — NOMBRES RATIONNELS
# ====================================================================
def g4_nombres_rationnels():
    E = []

    def add(*t):
        E.append(t)

    # -- opposé et inverse (8)
    for x in [F(-3, 4), F(5), F(2, 7), F(-1, 6), F(-8), F(9, 5)]:
        add("application", "inverse-oppose",
            f"Donne l'opposé et l'inverse de ${fl(x)}$.",
            [f"L'opposé change le signe : ${fl(-x)}$ (car ${fl(x)} + {parf(-x)} = 0$).",
             f"L'inverse « retourne » la fraction en gardant le signe : ${fl(1 / x)}$ (car ${parf(x)} \\times {parf(1 / x)} = 1$)."],
            f"opposé ${fl(-x)}$ ; inverse ${fl(1 / x)}$")
    add("intermediaire", "inverse-oppose",
        "Vrai ou faux : l'inverse de $-\\dfrac{2}{3}$ est $\\dfrac{3}{2}$.",
        ["Un nombre et son inverse ont le même signe : leur produit vaut $1$.",
         "$\\left(-\\dfrac{2}{3}\\right) \\times \\left(-\\dfrac{3}{2}\\right) = 1$ : l'inverse est $-\\dfrac{3}{2}$."],
        "Faux : c'est $-\\dfrac{3}{2}$")
    add("intermediaire", "inverse-oppose",
        "Le nombre $0$ a-t-il un inverse ? Justifie.",
        ["Il faudrait un nombre $y$ tel que $0 \\times y = 1$.",
         "Or $0 \\times y = 0$ pour tout $y$ : c'est impossible."],
        "Non, $0$ n'a pas d'inverse")
    # -- produits (10)
    prods = [(F(2, 3), F(9, 4)), (F(-5, 6), F(3, 10)), (F(-4, 9), F(-3, 8)), (F(7, 12), F(-6, 7)),
             (F(3, 5), F(10)), (F(-2, 3), F(-9)), (F(15, 8), F(4, 25)), (F(-1, 2), F(-1, 2)),
             (F(5, 14), F(21, 10)), (F(-7, 3), F(9, 14))]
    for a, b in prods:
        r = a * b
        nneg = (a < 0) + (b < 0)
        dens = [str(d) for d in (a.denominator, b.denominator) if d != 1]
        brut = f"\\dfrac{{{abs(a.numerator)} \\times {abs(b.numerator)}}}{{{TIMES.join(dens)}}}"
        add("application" if nneg == 0 else "intermediaire", "produit",
            f"Calcule et donne le résultat sous forme simplifiée : ${parf(a)} \\times {parf(b)}$.",
            [f"Signe : {nneg} facteur{'s' if nneg > 1 else ''} négatif{'s' if nneg > 1 else ''}, donc le produit est {'positif' if r > 0 else 'négatif'}." if nneg else "Les deux facteurs sont positifs : le produit est positif.",
             f"On multiplie les numérateurs entre eux et les dénominateurs entre eux : ${'-' if r < 0 else ''}{brut} = {fl(r)}$ (après simplification)."],
            f"${fl(r)}$")
    # -- fraction d'une quantité, d'une fraction (8)
    quant = [("Un vélo à 240 € est vendu aux $\\dfrac{3}{4}$ de son prix pendant les soldes. Quel est son nouveau prix ?", F(3, 4), 240, "€"),
             ("Dans un collège de 540 élèves, les $\\dfrac{4}{9}$ sont demi-pensionnaires. Combien d'élèves sont demi-pensionnaires ?", F(4, 9), 540, "élèves"),
             ("Sur un trajet de 350 km, on a déjà parcouru les $\\dfrac{2}{5}$. Quelle distance a-t-on parcourue ?", F(2, 5), 350, "km"),
             ("Dans une classe de 30 élèves, les $\\dfrac{3}{5}$ font du sport en club. Combien d'élèves cela représente-t-il ?", F(3, 5), 30, "élèves"),
             ("Combien de minutes y a-t-il dans les $\\dfrac{5}{6}$ d'une heure ?", F(5, 6), 60, "min")]
    for txt, f, q, u in quant:
        r = f * q
        add("application", "fraction-quantite", txt,
            [f"Prendre les ${fl(f)}$ de ${num(q)}$, c'est multiplier : ${fl(f)} \\times {num(q)} = \\dfrac{{{f.numerator} \\times {q}}}{{{f.denominator}}} = {num(r)}$."],
            f"${num(r)}$ {u}")
    for f, g in [(F(2, 3), F(3, 5)), (F(3, 4), F(2, 9)), (F(5, 6), F(3, 10))]:
        r = f * g
        add("intermediaire", "fraction-quantite",
            f"Calcule les ${fl(f)}$ de ${fl(g)}$.",
            [f"« Les ${fl(f)}$ de » se traduit par une multiplication : ${fl(f)} \\times {fl(g)} = {fl(r)}$."],
            f"${fl(r)}$")
    # -- quotients (10)
    quots = [(F(3, 4), F(9, 8)), (F(-6, 5), F(3)), (F(4), F(2, 3)), (F(-7, 10), F(-14, 15)), (F(5, 6), F(-10, 9)),
             (F(2, 9), F(4, 3)), (F(-12, 7), F(-6)), (F(1, 3), F(1, 6)), (F(-9, 4), F(3, 8)), (F(10, 21), F(-5, 7))]
    for a, b in quots:
        r = a / b
        add("intermediaire" if (a < 0 or b < 0) else "application", "quotient",
            f"Calcule et simplifie : ${parf(a)} \\div {parf(b)}$.",
            [f"Diviser par ${fl(b)}$, c'est multiplier par son inverse ${fl(1 / b)}$.",
             f"${parf(a)} \\times {parf(1 / b)} = {fl(r)}$."],
            f"${fl(r)}$")
    # -- enchaînements (8)
    L = [("\\dfrac{1}{2} + \\dfrac{3}{4} \\times \\dfrac{2}{9}", "F(1,2)+F(3,4)*F(2,9)", "\\dfrac{1}{2} + \\dfrac{1}{6} = \\dfrac{3}{6} + \\dfrac{1}{6}", "F(3,6)+F(1,6)"),
         ("\\left(\\dfrac{2}{3} - \\dfrac{1}{4}\\right) \\div \\dfrac{5}{6}", "(F(2,3)-F(1,4))/F(5,6)", "\\dfrac{5}{12} \\times \\dfrac{6}{5}", "F(5,12)*F(6,5)"),
         ("\\dfrac{5}{6} - \\dfrac{2}{3} \\div \\dfrac{4}{5}", "F(5,6)-F(2,3)/F(4,5)", "\\dfrac{5}{6} - \\dfrac{2}{3} \\times \\dfrac{5}{4} = \\dfrac{5}{6} - \\dfrac{5}{6}", "F(5,6)-F(5,6)"),
         ("\\dfrac{3}{5} \\times \\left(\\dfrac{1}{2} + \\dfrac{1}{3}\\right)", "F(3,5)*(F(1,2)+F(1,3))", "\\dfrac{3}{5} \\times \\dfrac{5}{6}", "F(3,5)*F(5,6)"),
         ("-\\dfrac{1}{3} + \\dfrac{4}{9} \\div \\dfrac{2}{3}", "-F(1,3)+F(4,9)/F(2,3)", "-\\dfrac{1}{3} + \\dfrac{4}{9} \\times \\dfrac{3}{2} = -\\dfrac{1}{3} + \\dfrac{2}{3}", "-F(1,3)+F(2,3)"),
         ("\\dfrac{7}{4} - \\dfrac{3}{4} \\times \\dfrac{2}{3}", "F(7,4)-F(3,4)*F(2,3)", "\\dfrac{7}{4} - \\dfrac{1}{2} = \\dfrac{7}{4} - \\dfrac{2}{4}", "F(7,4)-F(2,4)"),
         ("\\left(1 - \\dfrac{2}{5}\\right) \\times \\left(1 + \\dfrac{1}{3}\\right)", "(1-F(2,5))*(1+F(1,3))", "\\dfrac{3}{5} \\times \\dfrac{4}{3}", "F(3,5)*F(4,3)"),
         ("\\dfrac{2}{3} \\div \\left(-\\dfrac{4}{9}\\right) + 2", "F(2,3)/(-F(4,9))+2", "\\dfrac{2}{3} \\times \\left(-\\dfrac{9}{4}\\right) + 2 = -\\dfrac{3}{2} + \\dfrac{4}{2}", "-F(3,2)+F(4,2)")]
    for lx, py, ml, mp in L:
        v = _ev(py)
        assert v == _ev(mp)
        add("approfondissement", "enchainement",
            f"Calcule en respectant les priorités et donne le résultat sous forme simplifiée : $A = {lx}$.",
            ["Priorités : parenthèses d'abord, puis multiplications et divisions, puis additions et soustractions.",
             f"$A = {ml} = {fl(v)}$."],
            f"$A = {fl(v)}$")
    # -- problèmes (6)
    add("probleme", "probleme-fractions",
        "Un réservoir est rempli aux $\\dfrac{3}{4}$. On utilise les $\\dfrac{2}{3}$ de son contenu. Quelle fraction du réservoir a-t-on utilisée ?",
        ["On prend les $\\dfrac{2}{3}$ de $\\dfrac{3}{4}$ : on multiplie.",
         f"$\\dfrac{{2}}{{3}} \\times \\dfrac{{3}}{{4}} = {fl(F(2, 3) * F(3, 4))}$."],
        f"${fl(F(2, 3) * F(3, 4))}$ du réservoir")
    n = F(12) / F(3, 4)
    add("probleme", "probleme-fractions",
        "Combien de bouteilles de $\\dfrac{3}{4}$ de litre peut-on remplir avec 12 litres de jus ?",
        ["On cherche combien de fois $\\dfrac{3}{4}$ est contenu dans $12$ : c'est une division.",
         f"$12 \\div \\dfrac{{3}}{{4}} = 12 \\times \\dfrac{{4}}{{3}} = {num(n)}$."],
        f"${num(n)}$ bouteilles")
    reste = 1 - F(1, 4)
    lina = F(1, 3) * reste
    fin = reste - lina
    add("probleme", "probleme-fractions",
        "Tom mange $\\dfrac{1}{4}$ d'un gâteau, puis Lina mange $\\dfrac{1}{3}$ de ce qui reste. Quelle fraction du gâteau reste-t-il ?",
        [f"Après Tom, il reste $1 - \\dfrac{{1}}{{4}} = {fl(reste)}$ du gâteau.",
         f"Lina mange $\\dfrac{{1}}{{3}} \\times {fl(reste)} = {fl(lina)}$ du gâteau.",
         f"Il reste ${fl(reste)} - {fl(lina)} = {fl(fin)}$."],
        f"${fl(fin)}$ du gâteau")
    q = F(3, 4) * F(6, 4)
    add("probleme", "probleme-fractions",
        "Une recette pour 4 personnes demande $\\dfrac{3}{4}$ de litre de lait. Quelle quantité faut-il pour 6 personnes ?",
        ["Pour 1 personne : $\\dfrac{3}{4} \\div 4 = \\dfrac{3}{16}$ de litre.",
         f"Pour 6 personnes : $6 \\times \\dfrac{{3}}{{16}} = {fl(q)}$, soit ${num(q)}$ L."],
        f"${fl(q)}$ L, soit ${num(q)}$ L")
    matin = F(2, 7)
    am = F(3, 5) * (1 - matin)
    rest = 1 - matin - am
    add("probleme", "probleme-fractions",
        "Un randonneur parcourt le matin les $\\dfrac{2}{7}$ d'un sentier de 21 km, puis l'après-midi les $\\dfrac{3}{5}$ de ce qui reste. Combien de kilomètres lui reste-t-il à parcourir ?",
        [f"Après le matin, il reste $1 - \\dfrac{{2}}{{7}} = {fl(1 - matin)}$ du sentier.",
         f"L'après-midi : $\\dfrac{{3}}{{5}} \\times {fl(1 - matin)} = {fl(am)}$ du sentier.",
         f"Reste : ${fl(1 - matin)} - {fl(am)} = {fl(rest)}$ du sentier, soit ${fl(rest)} \\times 21 = {num(rest * 21)}$ km."],
        f"${num(rest * 21)}$ km")
    n = F(7, 2) / F(7, 8)
    add("probleme", "probleme-fractions",
        "Un ruban mesure $\\dfrac{7}{2}$ m. Combien de morceaux de $\\dfrac{7}{8}$ m peut-on y découper ?",
        [f"$\\dfrac{{7}}{{2}} \\div \\dfrac{{7}}{{8}} = \\dfrac{{7}}{{2}} \\times \\dfrac{{8}}{{7}} = {num(n)}$."],
        f"${num(n)}$ morceaux")
    return _fin(E)


# ====================================================================
# 4e — OPÉRATIONS SUR LES NOMBRES RELATIFS
# ====================================================================
def g4_relatifs():
    E = []

    def add(*t):
        E.append(t)

    D = F
    # -- sommes et différences (6)
    for a, op, b in [(-7, "-", -12), (D("-3.5"), "+", D("-4.2")), (8, "-", 15), (-6, "+", 6), (D("-2.4"), "-", D("3.6")), (9, "-", -9)]:
        a, b = F(a), F(b)
        r = a - b if op == "-" else a + b
        cor = []
        if op == "-":
            cor.append(f"Soustraire ${par(b)}$, c'est ajouter son opposé ${par(-b)}$ : ${par(a)} + {par(-b)}$.")
        elif a == -b:
            cor.append("Deux nombres opposés ont une somme nulle.")
        elif (a < 0) == (b < 0):
            cor.append("Même signe : on additionne les distances à zéro et on garde le signe commun.")
        else:
            cor.append("Signes contraires : on soustrait les distances à zéro et on garde le signe de celui qui a la plus grande.")
        cor.append(f"Résultat : ${num(r)}$.")
        add("application", "somme-difference", f"Calcule ${par(a)} {op} {par(b)}$.", cor, f"${num(r)}$")
    # -- produits (10)
    for a, b in [(-6, 7), (-8, -9), (12, -5), (D("-2.5"), 4), (D("-0.5"), -14), (D("-3.7"), 100), (1000, D("-0.042")), (D("-1.2"), -3), (-11, -11), (D("0.25"), -40)]:
        a, b = F(a), F(b)
        r = a * b
        same = (a < 0) == (b < 0)
        add("application" if F(a).denominator == 1 and F(b).denominator == 1 else "intermediaire", "produit",
            f"Calcule ${par(a)} \\times {par(b)}$.",
            [("Les deux facteurs sont de même signe : le produit est positif." if same else "Les deux facteurs sont de signes contraires : le produit est négatif."),
             f"On multiplie les distances à zéro : ${num(abs(a))} \\times {num(abs(b))} = {num(abs(r))}$, donc ${par(a)} \\times {par(b)} = {num(r)}$."],
            f"${num(r)}$")
    # -- produits de plusieurs facteurs (8)
    for fs in [(-2, -3, -5), (-1, 4, -2, -5), (2, -3, 0, -7), (-4, -5, 2, -1), (D("-0.5"), 8, -3), (-10, -10, -10), (-2, -2, -2, -2), (-1, -1, -1, -1, -1)]:
        fs = [F(x) for x in fs]
        r = F(1)
        for x in fs:
            r *= x
        expr = " \\times ".join(par(x) for x in fs)
        k = sum(1 for x in fs if x < 0)
        if 0 in fs:
            cor = ["Un des facteurs est nul : le produit est nul."]
        else:
            cor = [f"Il y a {k} facteur{'s' if k > 1 else ''} négatif{'s' if k > 1 else ''} : c'est un nombre {'pair' if k % 2 == 0 else 'impair'}, donc le produit est {'positif' if k % 2 == 0 else 'négatif'}.",
                   f"Produit des distances à zéro : ${TIMES.join(num(abs(x)) for x in fs)} = {num(abs(r))}$."]
        add("intermediaire", "produit-plusieurs", f"Calcule $P = {expr}$.", cor, f"$P = {num(r)}$")
    # -- quotients (8)
    for a, b in [(-56, 8), (-45, -9), (72, -6), (D("-7.5"), D("2.5")), (-18, -6), (36, -4), (D("-1.2"), D("-0.4")), (-100, 8)]:
        a, b = F(a), F(b)
        r = a / b
        same = (a < 0) == (b < 0)
        if a.denominator == 1 and b.denominator == 1 and abs(a) in (18, 36):
            ecr = f"\\dfrac{{{num(a)}}}{{{num(b)}}}"
        else:
            ecr = f"{par(a)} \\div {par(b)}"
        add("application" if a.denominator == 1 and b.denominator == 1 and r.denominator == 1 else "intermediaire", "quotient",
            f"Calcule ${ecr}$.",
            [("Même signe : le quotient est positif." if same else "Signes contraires : le quotient est négatif."),
             f"${num(abs(a))} \\div {num(abs(b))} = {num(abs(r))}$, donc le résultat est ${num(r)}$."],
            f"${num(r)}$")
    # -- enchaînements (10)
    L = [("-3 + 4 \\times (-5)", "-3+4*(-5)", "-3 + (-20)", "-3+(-20)"),
         ("(-2 - 6) \\times (-3)", "(-2-6)*(-3)", "(-8) \\times (-3)", "(-8)*(-3)"),
         ("-20 \\div (-4) - 7 \\times 2", "F(-20,-4)-7*2", "5 - 14", "5-14"),
         ("(-6) \\times (-2) + (-15) \\div 3", "(-6)*(-2)+F(-15,3)", "12 + (-5)", "12+(-5)"),
         ("8 - 3 \\times (4 - 9)", "8-3*(4-9)", "8 - 3 \\times (-5) = 8 + 15", "8+15"),
         ("(-1)^2 \\times (-7) + 4", "(-1)**2*(-7)+4", "1 \\times (-7) + 4 = -7 + 4", "-7+4"),
         ("\\dfrac{-12 + 4}{-2}", "F(-12+4,-2)", "\\dfrac{-8}{-2}", "F(-8,-2)"),
         ("5 \\times (-2) \\times (-3) - 40", "5*(-2)*(-3)-40", "30 - 40", "30-40"),
         ("(-9 + 3) \\div (-2 - 1)", "F(-9+3,-2-1)", "(-6) \\div (-3)", "F(-6,-3)"),
         ("-2 \\times (3 - 8) - (-4) \\times 5", "-2*(3-8)-(-4)*5", "-2 \\times (-5) + 20 = 10 + 20", "10+20")]
    _expr_mid(add, "intermediaire", "enchainement", "Calcule en respectant les priorités :", L,
              intro="Priorités : parenthèses, puis multiplications et divisions, puis additions et soustractions.")
    # -- vocabulaire et multiplications à trou (8)
    voc = [("le produit de $-6$ par la somme de $4$ et de $-9$", "-6 \\times (4 + (-9))", "-6*(4+(-9))"),
           ("la somme de $-7$ et du produit de $3$ par $-4$", "-7 + 3 \\times (-4)", "-7+3*(-4)"),
           ("le quotient de $-48$ par la différence de $5$ et de $9$", "-48 \\div (5 - 9)", "F(-48,5-9)"),
           ("la différence de $-10$ et du quotient de $-30$ par $6$", "-10 - (-30) \\div 6", "-10-F(-30,6)")]
    for phr, lx, py in voc:
        v = _ev(py)
        add("approfondissement", "vocabulaire",
            f"Écris puis calcule {phr}.",
            [f"Traduction : ${lx}$.", f"Résultat : ${num(v)}$."],
            f"${lx} = {num(v)}$")
    for a, r in [(-7, 56), (9, -63), (-12, -60), (F("-0.5"), 4)]:
        a, r = F(a), F(r)
        t = r / a
        add("intermediaire", "vocabulaire",
            f"Complète : ${par(a)} \\times \\ldots = {num(r)}$.",
            [f"Le nombre cherché est le quotient ${num(r)} \\div {par(a)} = {num(t)}$.",
             f"Vérification : ${par(a)} \\times {par(t)} = {num(r)}$."],
            f"${num(t)}$")
    return _fin(E)


# ====================================================================
# 4e — PARALLÉLOGRAMMES ET TRANSLATIONS
# ====================================================================
def g4_parallelogrammes():
    E = []

    def add(*t):
        E.append(t)

    lettres = [("A", "B", "C", "D"), ("E", "F", "G", "H"), ("M", "N", "P", "Q"), ("R", "S", "T", "U"),
               ("K", "L", "M", "N"), ("I", "J", "K", "L"), ("P", "Q", "R", "S"), ("U", "V", "W", "X"),
               ("B", "C", "D", "E"), ("O", "P", "Q", "R")]
    # -- lien translation / parallélogramme (10)
    for P, Q, R, S in lettres[:4]:
        add("application", "lien-parallelogramme",
            f"La translation qui transforme ${P}$ en ${Q}$ transforme ${R}$ en ${S}$ (les points ${P}$, ${Q}$, ${R}$ ne sont pas alignés). Quel quadrilatère est un parallélogramme ?",
            [f"Si la translation qui transforme ${P}$ en ${Q}$ transforme ${R}$ en ${S}$, alors ${P}{Q}{S}{R}$ est un parallélogramme.",
             f"Attention à l'ordre des lettres : on suit ${P} \\to {Q} \\to {S} \\to {R}$, et non ${P}{Q}{R}{S}$."],
            f"${P}{Q}{S}{R}$")
    for P, Q, R, S in lettres[4:7]:
        add("intermediaire", "lien-parallelogramme",
            f"${P}{Q}{R}{S}$ est un parallélogramme. Quelle est l'image de ${S}$ par la translation qui transforme ${P}$ en ${Q}$ ?",
            [f"Dans le parallélogramme ${P}{Q}{R}{S}$, le côté $[{S}{R}]$ est parallèle à $[{P}{Q}]$, de même longueur et « dans le même sens ».",
             f"La translation qui transforme ${P}$ en ${Q}$ transforme donc ${S}$ en ${R}$."],
            f"${R}$")
    for P, Q, R, S in lettres[7:10]:
        add("intermediaire", "lien-parallelogramme",
            f"${P}{Q}{R}{S}$ est un parallélogramme. Quelle est l'image de ${P}$ par la translation qui transforme ${Q}$ en ${R}$ ?",
            [f"Dans ${P}{Q}{R}{S}$, le côté $[{P}{S}]$ est parallèle à $[{Q}{R}]$, de même longueur et dans le même sens.",
             f"La translation qui transforme ${Q}$ en ${R}$ transforme donc ${P}$ en ${S}$."],
            f"${S}$")
    # -- conservation (10)
    cons = [("Le segment $[AB]$ mesure 6,4 cm", "Quelle est la longueur de son image $[A'B']$ ?", "les longueurs", "$6{,}4$ cm"),
            ("L'angle $\\widehat{ABC}$ mesure 37°", "Que mesure son image $\\widehat{A'B'C'}$ ?", "les mesures d'angles", "$37$°"),
            ("Un triangle a une aire de 12,5 cm²", "Quelle est l'aire de son image ?", "les aires", "$12{,}5$ cm²"),
            ("Un rectangle a un périmètre de 23 cm", "Quel est le périmètre de son image ?", "les longueurs (donc les périmètres)", "$23$ cm"),
            ("Un cercle a un rayon de 3,2 cm", "Quel est le rayon du cercle image ?", "les longueurs", "$3{,}2$ cm"),
            ("Un carré a un côté de 4,5 cm", "Quelle est l'aire du carré image ?", "les longueurs", None),
            ("L'angle $\\widehat{EFG}$ est droit", "Comment est l'angle image $\\widehat{E'F'G'}$ ?", "les mesures d'angles", "droit ($90$°)"),
            ("Les points $A$, $B$, $C$ sont alignés", "Que peut-on dire de leurs images $A'$, $B'$, $C'$ ?", "l'alignement", "elles sont alignées"),
            ("Les droites $(d)$ et $(d')$ sont parallèles", "Que peut-on dire de leurs images ?", "le parallélisme", "elles sont parallèles"),
            ("Une translation transforme la droite $(d)$ en la droite $(d_1)$", "Quelle est la position de $(d_1)$ par rapport à $(d)$ ?", "les directions : l'image d'une droite lui est parallèle", "$(d_1)$ est parallèle à $(d)$ (ou confondue avec elle)")]
    for i, (hyp, q, prop, rep) in enumerate(cons):
        cor = [f"Une translation conserve {prop}."]
        if rep is None:
            a = arr(F("4.5") ** 2, 2)
            cor.append(f"Le carré image a aussi un côté de 4,5 cm : aire $= 4{{,}}5^2 = {nb(a)}$ cm².")
            rep = f"${nb(a)}$ cm²"
        mid = "" if hyp.startswith("Une translation") else " On applique une translation à cette figure."
        add("application" if i < 5 else "intermediaire", "conservation",
            f"{hyp}.{mid} {q}", cor, rep)
    # -- propriétés du parallélogramme (8)
    para = [("ABCD", 5.2, 3.8, 64, 9.6), ("EFGH", 7, 4.5, 118, 11), ("KLMN", 6.3, 6.3, 75, 8.4), ("RSTU", 12, 5, 101, 15)]
    for nom, c1, c2, ang, diag in para:
        A, B, C, D = nom
        c1, c2, diag = F(str(c1)), F(str(c2)), F(str(diag))
        add("application", "proprietes",
            f"${nom}$ est un parallélogramme avec ${A}{B} = {num(c1)}$ cm, ${B}{C} = {num(c2)}$ cm et $\\widehat{{{D}{A}{B}}} = {ang}$°. Donne ${C}{D}$, ${A}{D}$ et la mesure de $\\widehat{{{B}{C}{D}}}$.",
            ["Dans un parallélogramme, les côtés opposés ont la même longueur et les angles opposés ont la même mesure.",
             f"${C}{D} = {A}{B} = {num(c1)}$ cm, ${A}{D} = {B}{C} = {num(c2)}$ cm, $\\widehat{{{B}{C}{D}}} = \\widehat{{{D}{A}{B}}} = {ang}$°."],
            f"${C}{D} = {num(c1)}$ cm ; ${A}{D} = {num(c2)}$ cm ; ${ang}$°")
        add("intermediaire", "proprietes",
            f"${nom}$ est un parallélogramme de centre $O$, avec ${A}{C} = {num(diag)}$ cm et $\\widehat{{{D}{A}{B}}} = {ang}$°. Calcule $O{A}$ et la mesure de $\\widehat{{{A}{B}{C}}}$.",
            ["Les diagonales d'un parallélogramme se coupent en leur milieu : $O$ est le milieu de $[" + A + C + "]$.",
             f"$O{A} = {num(diag)} \\div 2 = {num(diag / 2)}$ cm.",
             f"Deux angles consécutifs d'un parallélogramme sont supplémentaires : $\\widehat{{{A}{B}{C}}} = 180 - {ang} = {180 - ang}$°."],
            f"$O{A} = {num(diag / 2)}$ cm ; ${180 - ang}$°")
    # -- vrai ou faux (8)
    vf = [("Si un quadrilatère est un parallélogramme, alors ses diagonales ont le même milieu.", True,
           "C'est une propriété du parallélogramme."),
          ("Si un quadrilatère a deux côtés opposés de même longueur, alors c'est un parallélogramme.", False,
           "Contre-exemple : un trapèze isocèle a deux côtés opposés de même longueur sans être un parallélogramme."),
          ("Si un quadrilatère non croisé a ses côtés opposés deux à deux de même longueur, alors c'est un parallélogramme.", True,
           "C'est une propriété caractéristique du parallélogramme."),
          ("Par une translation qui transforme $A$ en $B$ (avec $A \\neq B$), un point peut rester à sa place.", False,
           "Une translation déplace tous les points de la même façon : aucun point ne reste fixe."),
          ("Si les diagonales d'un quadrilatère se coupent en leur milieu, alors c'est un parallélogramme.", True,
           "C'est la réciproque de la propriété des diagonales : elle est vraie (propriété caractéristique)."),
          ("Une translation peut « retourner » une figure, comme le ferait un miroir.", False,
           "Une translation fait glisser la figure sans la tourner ni la retourner."),
          ("Si $ABDC$ est un parallélogramme, alors la translation qui transforme $A$ en $C$ transforme $B$ en $D$.", True,
           "Dans $ABDC$, les côtés $[AC]$ et $[BD]$ sont opposés : parallèles, de même longueur et de même sens."),
          ("Si un quadrilatère a deux angles opposés de même mesure, alors c'est un parallélogramme.", False,
           "Contre-exemple : un cerf-volant (quadrilatère symétrique par rapport à une diagonale) a deux angles opposés égaux sans être un parallélogramme.")]
    for txt, v, j in vf:
        add("approfondissement", "vrai-faux", f"Vrai ou faux ? {txt}", [j], "Vrai" if v else "Faux")
    # -- aires et périmètres (8)
    for b, h, c in [(8, 5, 6), (F("6.5"), 4, 5), (12, F("7.5"), 9), (F("9.4"), 6, 7)]:
        b, h, c = F(b), F(h), F(c)
        add("application", "aire-perimetre",
            f"Un parallélogramme a un côté de ${num(b)}$ cm, la hauteur relative à ce côté mesure ${num(h)}$ cm et l'autre côté mesure ${num(c)}$ cm. Calcule son aire et son périmètre.",
            [f"Aire : $\\text{{côté}} \\times \\text{{hauteur}} = {num(b)} \\times {num(h)} = {num(b * h)}$ cm².",
             f"Périmètre : $2 \\times ({num(b)} + {num(c)}) = {num(2 * (b + c))}$ cm."],
            f"${num(b * h)}$ cm² ; ${num(2 * (b + c))}$ cm")
    for A, b in [(42, 7), (F("37.8"), 9)]:
        A, b = F(A), F(b)
        add("intermediaire", "aire-perimetre",
            f"Un parallélogramme a une aire de ${num(A)}$ cm² et un côté de ${num(b)}$ cm. Calcule la hauteur relative à ce côté.",
            [f"$\\text{{Aire}} = \\text{{côté}} \\times \\text{{hauteur}}$, donc $h = {num(A)} \\div {num(b)} = {num(A / b)}$ cm."],
            f"${num(A / b)}$ cm")
    b, h, prix = F(45), F(28), F(12)
    add("probleme", "aire-perimetre",
        "Un terrain a la forme d'un parallélogramme : un côté mesure 45 m et la hauteur relative à ce côté 28 m. Le gazon coûte 12 € le m². Quel est le prix pour engazonner tout le terrain ?",
        [f"Aire : $45 \\times 28 = {num(b * h)}$ m².", f"Prix : ${num(b * h)} \\times 12 = {num(b * h * prix)}$ €."],
        f"${num(b * h * prix)}$ €")
    add("probleme", "aire-perimetre",
        "Un parallélogramme $ABCD$ est l'image d'un autre parallélogramme d'aire 18 cm² par une translation. On découpe $ABCD$ en deux triangles le long de la diagonale $[AC]$. Quelle est l'aire de chaque triangle ?",
        ["Une translation conserve les aires : $ABCD$ a une aire de 18 cm².",
         "La diagonale partage le parallélogramme en deux triangles superposables : $18 \\div 2 = 9$ cm²."],
        "$9$ cm²")
    # -- méthodes et pavages (6)
    meth = [("On sait que les diagonales $[EG]$ et $[FH]$ du quadrilatère $EFGH$ ont le même milieu. Quelle propriété permet de conclure ?",
             "Si les diagonales d'un quadrilatère ont le même milieu, alors c'est un parallélogramme.", "$EFGH$ est un parallélogramme"),
            ("On sait que la translation qui transforme $R$ en $S$ transforme $T$ en $U$ ($R$, $S$, $T$ non alignés). Quel parallélogramme peut-on nommer ?",
             "Si la translation qui transforme $R$ en $S$ transforme $T$ en $U$, alors $RSUT$ est un parallélogramme.", "$RSUT$"),
            ("Le quadrilatère non croisé $MNPQ$ vérifie $MN = PQ = 5$ cm et $NP = QM = 3$ cm. Que peut-on en conclure ?",
             "Ses côtés opposés sont deux à deux de même longueur : c'est un parallélogramme (propriété caractéristique).", "$MNPQ$ est un parallélogramme")]
    for q, j, r in meth:
        add("intermediaire", "methode", q, [j], r)
    for pas, n in [(4, 9), (F("2.5"), 13), (6, 21)]:
        pas = F(pas)
        add("probleme", "methode",
            f"Dans une frise, un motif est reproduit par une translation de ${num(pas)}$ cm vers la droite, encore et encore. Quelle distance sépare le 1er motif du {n}e motif ?",
            [f"Du 1er au {n}e motif, on applique {n - 1} fois la translation.", f"Distance : ${n - 1} \\times {num(pas)} = {num((n - 1) * pas)}$ cm."],
            f"${num((n - 1) * pas)}$ cm")
    return _fin(E)


# ====================================================================
# 4e — PENSÉE INFORMATIQUE
# ====================================================================
def _code(*lignes):
    return " ; ".join(f"`{l}`" for l in lignes)


def g4_pensee_info():
    E = []

    def add(*t):
        E.append(t)

    # -- conditions vraies ou fausses (8)
    cond = [("n > 10", "n > 10", 7), ("n \\neq 10", "n != 10", 7), ("n \\leqslant 7", "n <= 7", 7), ("n \\geqslant 12", "n >= 12", 12),
            ("n < -3", "n < -3", -3), ("2n > 15", "2*n > 15", 8), ("n + 4 = 0", "n + 4 == 0", -4), ("n \\times n < 20", "n*n < 20", -5)]
    for lx, py, n in cond:
        v = eval(py, {}, {"n": n})
        add("application", "condition",
            f"La variable $n$ vaut ${n}$. La condition ${lx}$ est-elle vraie ou fausse ?",
            [f"On remplace $n$ par ${n}$ et on compare."
             + (" L'inégalité stricte exclut l'égalité." if lx in ("n < -3",) else ""),
             f"La condition est {'vraie' if v else 'fausse'}."],
            "vraie" if v else "fausse")
    # -- traduire une phrase (8)
    trad = [("la température dépasse 30 °C", "T > 30", "« dépasser » exclut l'égalité"),
            ("la classe compte au plus 25 élèves", "e \\leqslant 25", "« au plus » se traduit par $\\leqslant$"),
            ("la personne a au moins 18 ans", "\\text{age} \\geqslant 18", "« au moins » se traduit par $\\geqslant$"),
            ("la note n'atteint pas la moyenne (10)", "\\text{note} < 10", "« ne pas atteindre » : strictement inférieur"),
            ("le score est différent de 0", "s \\neq 0", "« différent de » se traduit par $\\neq$"),
            ("la vitesse ne dépasse pas 50 km/h", "v \\leqslant 50", "« ne pas dépasser » : inférieur ou égal"),
            ("le colis pèse moins de 2 kg", "m < 2", "« moins de » exclut l'égalité"),
            ("la batterie est pleine (100 %)", "b = 100", "c'est une égalité")]
    for phr, lx, j in trad:
        add("application", "traduire-condition",
            f"Traduis par une condition : « {phr} ».", [f"{j[0].upper() + j[1:]}."], f"${lx}$")
    # -- si … sinon (10)
    progs = [(("demander n", "si n ≥ 10 alors", "afficher n − 10", "sinon", "afficher 2 × n", "fin si"),
              lambda n: n - 10 if n >= 10 else 2 * n, "n \\geqslant 10", [14, 10]),
             (("demander n", "si n < 0 alors", "afficher 0 − n", "sinon", "afficher n", "fin si"),
              lambda n: -n if n < 0 else n, "n < 0", [-6, 4]),
             (("demander n", "si n > 5 alors", "afficher n × 3", "sinon", "afficher n + 7", "fin si"),
              lambda n: n * 3 if n > 5 else n + 7, "n > 5", [5, 9]),
             (("demander n", "si n ≠ 0 alors", "afficher 12 − n", "sinon", "afficher 100", "fin si"),
              lambda n: 12 - n if n != 0 else 100, "n \\neq 0", [0, 15]),
             (("demander n", "si n ≤ 3 alors", "afficher n × n", "sinon", "afficher n − 3", "fin si"),
              lambda n: n * n if n <= 3 else n - 3, "n \\leqslant 3", [-4, 8])]
    for lignes, f, lx, entrees in progs:
        for n in entrees:
            v = eval(lx.replace("\\geqslant", ">=").replace("\\leqslant", "<=").replace("\\neq", "!="), {}, {"n": n})
            add("intermediaire", "si-sinon",
                f"Programme : {_code(*lignes)}. Qu'affiche-t-il si l'on saisit ${n}$ ?",
                [f"Avec $n = {n}$, la condition ${lx}$ est {'vraie' if v else 'fausse'} : on exécute le bloc {'« alors »' if v else '« sinon »'}.",
                 f"Affichage : ${f(n)}$."],
                f"${f(n)}$")
    # -- affectations (8)
    seqs = [[("a", "5"), ("b", "8"), ("a", "a + b"), ("b", "a − b")],
            [("x", "3"), ("x", "x × 4"), ("x", "x − 5")],
            [("a", "2"), ("b", "a + 6"), ("a", "b × a"), ("b", "b − a")],
            [("s", "10"), ("t", "s − 4"), ("s", "s + t"), ("t", "t × t")],
            [("p", "7"), ("p", "p + 1"), ("p", "p × p")],
            [("a", "4"), ("b", "9"), ("c", "a"), ("a", "b"), ("b", "c")],
            [("x", "−2"), ("y", "x × x"), ("x", "y − x")],
            [("n", "1"), ("n", "n × 2"), ("n", "n × 2"), ("n", "n + 3")]]
    for seq in seqs:
        env = {}
        noms = []
        for v, e in seq:
            env[v] = eval(e.replace("×", "*").replace("−", "-"), {}, dict(env))
            if v not in noms:
                noms.append(v)
        lignes = [f"mettre {e} dans {v}" for v, e in seq]
        fin = ", ".join(f"${v} = {env[v]}$" for v in noms)
        # suivi pas à pas
        env2, suivi = {}, []
        for v, e in seq:
            env2[v] = eval(e.replace("×", "*").replace("−", "-"), {}, dict(env2))
            suivi.append(f"${v}$ prend la valeur ${env2[v]}$")
        add("intermediaire" if len(noms) < 3 else "approfondissement", "affectation",
            f"Que valent les variables à la fin de : {_code(*lignes)} ?",
            ["On exécute les lignes dans l'ordre ; une nouvelle valeur écrase l'ancienne.", " ; ".join(suivi) + "."],
            fin)
    # -- boucles « répéter » et compteur (10)
    bou = [("s", 0, 4, "s + 3"), ("s", 100, 6, "s − 15"), ("p", 1, 5, "p × 2"), ("x", 5, 3, "x × 3"),
           ("t", 2, 7, "t + 9"), ("m", 64, 3, "m ÷ 2"), ("k", -10, 5, "k + 4")]
    for v, v0, n, e in bou:
        val = F(v0)
        etapes = []
        for _ in range(n):
            val = eval(e.replace("×", "*").replace("−", "-").replace("÷", "/"), {}, {v: val})
            etapes.append(num(val))
        add("application" if "+" in e else "intermediaire", "boucle",
            f"Que va afficher ce programme ? {_code(f'mettre {v0} dans {v}', f'répéter {n} fois', f'mettre {e} dans {v}', 'fin répéter', f'afficher {v}')}".replace("mettre -", "mettre −"),
            [f"Valeurs de ${v}$ après chaque tour : " + " ; ".join(f"${x}$" for x in etapes) + ".",
             f"Le programme affiche ${num(val)}$."],
            f"${num(val)}$")
    for n in (5, 8, 10):
        s = sum(range(1, n + 1))
        add("approfondissement", "boucle",
            f"Que va afficher ce programme ? {_code('mettre 0 dans s', 'mettre 1 dans i', f'répéter {n} fois', 'mettre s + i dans s', 'mettre i + 1 dans i', 'fin répéter', 'afficher s')}",
            [f"À chaque tour, on ajoute $i$ à $s$, puis $i$ augmente de 1 : $s = 1 + 2 + \\ldots + {n}$.", f"Le programme affiche ${s}$."],
            f"${s}$")
    # -- écrire / modifier un programme (6)
    add("approfondissement", "modifier-programme",
        f"Le programme {_code('si note > 10 alors', 'afficher « admis »', 'fin si')} n'admet pas un élève qui a exactement 10. Comment modifier la condition pour l'admettre ?",
        ["« Avoir au moins 10 » inclut l'égalité : il faut $\\geqslant$."], "$\\text{note} \\geqslant 10$")
    for pas, cible in [(7, 84), (12, 180), (25, 400)]:
        add("probleme", "modifier-programme",
            f"On veut écrire {_code(f'mettre 0 dans s', 'répéter … fois', f'mettre s + {pas} dans s', 'fin répéter')} pour que $s$ vaille ${cible}$ à la fin. Combien de répétitions faut-il ?",
            [f"Chaque tour ajoute ${pas}$ : il faut ${cible} \\div {pas} = {cible // pas}$ tours."],
            f"${cible // pas}$ répétitions")
    add("probleme", "modifier-programme",
        f"Un jeu donne 3 points par bonne réponse. On écrit {_code('mettre 0 dans score', 'répéter 10 fois', 'demander la réponse', 'si la réponse est juste alors', 'mettre score + 3 dans score', 'fin si', 'fin répéter')}. Un joueur répond juste 7 fois. Quel est son score ?",
        ["Le bloc « alors » n'est exécuté que pour les bonnes réponses : 7 fois.", "Score : $7 \\times 3 = 21$."], "$21$")
    add("probleme", "modifier-programme",
        f"Une machine affiche « trop chaud » quand la température $T$ dépasse 25 °C et « trop froid » quand elle est inférieure à 18 °C. Écris les deux conditions, puis dis ce qu'elle affiche pour $T = 25$.",
        ["« trop chaud » : $T > 25$ ; « trop froid » : $T < 18$.",
         "Pour $T = 25$ : $25 > 25$ est faux et $25 < 18$ est faux : elle n'affiche aucun des deux messages."],
        "$T > 25$ et $T < 18$ ; rien ne s'affiche pour $T = 25$")
    return _fin(E)


# ====================================================================
# 4e — PROBABILITÉS
# ====================================================================
def ens(xs):
    xs = list(xs)
    if not xs:
        return "\\varnothing"
    return "\\{" + "\\,;".join(str(x) for x in xs) + "\\}"


def _pfrac(k, n):
    f = F(k, n)
    if f.denominator == n:
        return f"\\dfrac{{{k}}}{{{n}}}"
    return f"\\dfrac{{{k}}}{{{n}}} = {fl(f)}"


def g4_probabilites():
    E = []

    def add(*t):
        E.append(t)

    de = list(range(1, 7))
    roue = list(range(1, 13))
    # -- issues réalisant un événement (8)
    evs = [("un dé équilibré à six faces", de, "obtenir un nombre pair", lambda k: k % 2 == 0),
           ("un dé équilibré à six faces", de, "obtenir un multiple de 3", lambda k: k % 3 == 0),
           ("un dé équilibré à six faces", de, "obtenir au moins 5", lambda k: k >= 5),
           ("un dé équilibré à six faces", de, "obtenir un nombre strictement inférieur à 3", lambda k: k < 3),
           ("une roue équilibrée à 12 secteurs numérotés de 1 à 12", roue, "obtenir un multiple de 4", lambda k: k % 4 == 0),
           ("une roue équilibrée à 12 secteurs numérotés de 1 à 12", roue, "obtenir un nombre impair supérieur à 6", lambda k: k % 2 == 1 and k > 6)]
    for exp, U, txt, p in evs:
        A = [k for k in U if p(k)]
        add("application", "issues-evenement",
            f"On fait tourner {exp}.".replace("On fait tourner un dé", "On lance un dé") + f" Écris l'ensemble des issues qui réalisent l'événement $A$ : « {txt} ».",
            [f"On passe en revue les issues possibles ${ens(U)}$ et on garde celles qui conviennent.",
             f"$A = {ens(A)}$ : {pl(len(A), 'issue')}."],
            f"$A = {ens(A)}$")
    for exp, U, txt, p in [("une roue équilibrée à 12 secteurs numérotés de 1 à 12", roue, "obtenir un nombre supérieur ou égal à 9", lambda k: k >= 9),
                           ("un dé équilibré à six faces", de, "obtenir un nombre impair", lambda k: k % 2 == 1)]:
        A = [k for k in U if p(k)]
        B = [k for k in U if not p(k)]
        add("intermediaire", "issues-evenement",
            f"On fait tourner {exp}.".replace("On fait tourner un dé", "On lance un dé") + f" $A$ est l'événement « {txt} ». Écris l'ensemble des issues de l'événement contraire $\\overline{{A}}$.",
            [f"$A = {ens(A)}$.", f"$\\overline{{A}}$ contient toutes les autres issues : $\\overline{{A}} = {ens(B)}$."],
            f"$\\overline{{A}} = {ens(B)}$")
    # -- probabilité d'un événement (10)
    urnes = [((5, 3, 2), 0), ((4, 6, 5), 1), ((7, 2, 3), 2), ((3, 9, 0), 0), ((8, 4, 4), 1)]
    coul = ["rouge", "bleue", "verte"]
    for comp, c in urnes:
        n = sum(comp)
        k = comp[c]
        desc = ", ".join(f"{pl(x, 'boule')} {coul[i]}{'s' if x > 1 else ''}" for i, x in enumerate(comp) if x)
        desc = desc.rsplit(", ", 1)
        desc = " et ".join(desc)
        add("application", "probabilite",
            f"Une urne contient {desc}, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité qu'elle soit {coul[c]} ?",
            [f"Il y a ${n}$ boules en tout, dont ${k}$ {coul[c]}s : situation d'équiprobabilité.",
             f"$P = {_pfrac(k, n)}$."],
            f"${fl(F(k, n))}$")
    sacs = [(20, "un multiple de 5", lambda k: k % 5 == 0), (20, "un nombre strictement supérieur à 15", lambda k: k > 15),
            (30, "un multiple de 6", lambda k: k % 6 == 0), (12, "un diviseur de 12", lambda k: 12 % k == 0),
            (50, "un nombre qui se termine par 7", lambda k: k % 10 == 7)]
    for n, txt, p in sacs:
        A = [k for k in range(1, n + 1) if p(k)]
        add("intermediaire", "probabilite",
            f"Un sac contient {n} jetons numérotés de 1 à {n}. On tire un jeton au hasard. Quelle est la probabilité d'obtenir {txt} ?",
            [f"Issues favorables : ${ens(A)}$, soit ${len(A)}$ issues sur ${n}$.", f"$P = {_pfrac(len(A), n)}$."],
            f"${fl(F(len(A), n))}$")
    # -- événement contraire (8)
    for p in [F(3, 10), F(5, 12), F("0.35"), F("0.08"), F(2, 7), F(11, 20)]:
        txt = num(p) if p.denominator in (100, 20, 25) and est_decimal(p) and p.denominator != 20 else fl(p)
        if p == F("0.35") or p == F("0.08"):
            txt = num(p)
        add("application", "contraire",
            f"La probabilité d'un événement $A$ est $P(A) = {txt}$. Calcule $P(\\overline{{A}})$.",
            ["$P(\\overline{A}) = 1 - P(A)$.", f"$P(\\overline{{A}}) = 1 - {txt} = {num(1 - p) if txt == num(p) else fl(1 - p)}$."],
            f"${num(1 - p) if txt == num(p) else fl(1 - p)}$")
    add("intermediaire", "contraire",
        "Au collège, la probabilité qu'un élève tiré au sort soit externe est 0,15. Quelle est la probabilité qu'il ne soit pas externe ?",
        ["« ne pas être externe » est l'événement contraire.", f"$P = 1 - 0{{,}}15 = {num(1 - F('0.15'))}$."],
        f"${num(1 - F('0.15'))}$")
    add("intermediaire", "contraire",
        "On lance un dé équilibré à six faces. Calcule la probabilité de ne pas obtenir 6, en utilisant l'événement contraire.",
        ["$P(\\text{obtenir } 6) = \\dfrac{1}{6}$.", f"$P(\\text{{ne pas obtenir }} 6) = 1 - \\dfrac{{1}}{{6}} = {fl(1 - F(1, 6))}$."],
        f"${fl(1 - F(1, 6))}$")
    # -- réunion et intersection (8)
    ri = [("pair", lambda k: k % 2 == 0, "multiple de 3", lambda k: k % 3 == 0),
          ("supérieur ou égal à 8", lambda k: k >= 8, "impair", lambda k: k % 2 == 1),
          ("multiple de 4", lambda k: k % 4 == 0, "inférieur ou égal à 5", lambda k: k <= 5),
          ("multiple de 5", lambda k: k % 5 == 0, "multiple de 2", lambda k: k % 2 == 0)]
    for ta, pa, tb, pb in ri:
        A = [k for k in roue if pa(k)]
        B = [k for k in roue if pb(k)]
        I = [k for k in roue if pa(k) and pb(k)]
        U = [k for k in roue if pa(k) or pb(k)]
        intro = f"Une roue équilibrée a 12 secteurs numérotés de 1 à 12. $A$ : « le numéro est {ta} » ; $B$ : « le numéro est {tb} »."
        add("intermediaire", "reunion-intersection",
            intro + " Écris $A \\cap B$ et $A \\cup B$.",
            [f"$A = {ens(A)}$ et $B = {ens(B)}$.",
             f"$A \\cap B$ (« $A$ et $B$ ») : ${ens(I)}$.",
             f"$A \\cup B$ (« $A$ ou $B$ ») : ${ens(U)}$."],
            f"$A \\cap B = {ens(I)}$ ; $A \\cup B = {ens(U)}$")
        add("approfondissement", "reunion-intersection",
            intro + " Calcule $P(A \\cap B)$ et $P(A \\cup B)$.",
            [f"$A \\cap B = {ens(I)}$ : $P(A \\cap B) = {_pfrac(len(I), 12)}$.",
             f"$A \\cup B = {ens(U)}$ : $P(A \\cup B) = {_pfrac(len(U), 12)}$."],
            f"$P(A \\cap B) = {fl(F(len(I), 12))}$ ; $P(A \\cup B) = {fl(F(len(U), 12))}$")
    # -- expériences à deux épreuves (10)
    pieces = [(a, b) for a in "PF" for b in "PF"]
    nb2 = sum(1 for a, b in pieces if a == b == "P")
    add("intermediaire", "deux-epreuves",
        "On lance deux pièces équilibrées. Quelle est la probabilité d'obtenir deux fois « pile » ?",
        ["Issues : PP, PF, FP, FF (P = pile, F = face) : 4 issues équiprobables.", f"Une seule convient : $P = {_pfrac(nb2, 4)}$."],
        f"${fl(F(nb2, 4))}$")
    k = sum(1 for a, b in pieces if "P" in (a, b))
    add("intermediaire", "deux-epreuves",
        "On lance deux pièces équilibrées. Quelle est la probabilité d'obtenir au moins une fois « pile » ?",
        ["Issues : PP, PF, FP, FF.", f"Seule FF ne convient pas : $P = {_pfrac(k, 4)}$."],
        f"${fl(F(k, 4))}$")
    pd = [(a, b) for a in "PF" for b in de]
    for txt, cond in [("« pile » et un 6", lambda a, b: a == "P" and b == 6),
                      ("« face » et un nombre pair", lambda a, b: a == "F" and b % 2 == 0),
                      ("« pile » et un nombre au moins égal à 3", lambda a, b: a == "P" and b >= 3)]:
        k = sum(1 for a, b in pd if cond(a, b))
        add("approfondissement", "deux-epreuves",
            f"On lance une pièce équilibrée puis un dé équilibré à six faces. Quelle est la probabilité d'obtenir {txt} ?",
            ["Il y a $2 \\times 6 = 12$ issues équiprobables (P1, P2, …, F6).", f"Issues favorables : ${k}$, donc $P = {_pfrac(k, 12)}$."],
            f"${fl(F(k, 12))}$")
    dd = [(a, b) for a in de for b in de]
    for txt, cond in [("une somme égale à 7", lambda a, b: a + b == 7), ("une somme égale à 10", lambda a, b: a + b == 10),
                      ("un double (deux fois le même nombre)", lambda a, b: a == b), ("une somme supérieure ou égale à 10", lambda a, b: a + b >= 10),
                      ("une somme égale à 2", lambda a, b: a + b == 2)]:
        L = [(a, b) for a, b in dd if cond(a, b)]
        lst = " ; ".join(f"({a}, {b})" for a, b in L)
        add("approfondissement", "deux-epreuves",
            f"On lance deux dés équilibrés à six faces (un rouge, un vert). Quelle est la probabilité d'obtenir {txt} ?",
            ["Il y a $6 \\times 6 = 36$ issues équiprobables (rouge, vert).", f"Issues favorables : {lst}, soit {pl(len(L), 'issue')}.",
             f"$P = {_pfrac(len(L), 36)}$."],
            f"${fl(F(len(L), 36))}$")
    # -- fréquences et probabilités (6)
    for n, k, face, sujet, de_f, prob in [(200, 41, "6", "le 6", "du 6", F(1, 6)), (500, 262, "« pile »", "« pile »", "de « pile »", F(1, 2)),
                                         (120, 18, "1", "le 1", "du 1", F(1, 6))]:
        f_ = arr(F(k, n), 3)
        pv = arr(prob, 3)
        add("intermediaire", "frequences",
            f"On lance {('un dé' if face != '« pile »' else 'une pièce')} équilibré{'' if face != '« pile »' else 'e'} {n} fois : {sujet} sort {k} fois. Calcule la fréquence d'apparition {de_f}, puis compare-la à la probabilité.",
            [f"Fréquence : $\\dfrac{{{k}}}{{{n}}} = {nb(F(k, n), 3)}$" + (" (valeur exacte)." if arr(F(k, n), 3) == F(k, n) else f" (arrondie au millième)."),
             f"Probabilité : ${fl(prob)}" + ("" if est_decimal(prob) else " \\approx") + f" {'= ' if est_decimal(prob) else ''}{nb(pv, 3)}$.",
             "Les deux valeurs sont proches mais pas égales : c'est la fluctuation d'échantillonnage."],
            f"$f = {nb(F(k, n), 3)}$, proche de ${fl(prob)}$")
    add("approfondissement", "frequences",
        "Lucas lance un dé 12 fois et n'obtient jamais de 6. Il affirme : « le dé est truqué ». A-t-il raison ?",
        ["Sur 12 lancers seulement, la fréquence peut s'éloigner beaucoup de $\\dfrac{1}{6}$ : c'est la fluctuation.",
         "Il faudrait un très grand nombre de lancers pour pouvoir douter du dé."],
        "Non, 12 lancers ne suffisent pas pour conclure")
    add("approfondissement", "frequences",
        "On lance un dé équilibré 600 fois. Environ combien de fois peut-on s'attendre à obtenir 3 ?",
        ["La probabilité d'obtenir 3 est $\\dfrac{1}{6}$.", f"$600 \\times \\dfrac{{1}}{{6}} = {num(F(600, 6))}$ : environ ${num(F(600, 6))}$ fois (pas exactement, à cause de la fluctuation)."],
        f"environ ${num(F(600, 6))}$ fois")
    add("probleme", "frequences",
        "Une punaise lancée 400 fois tombe 248 fois « pointe en haut ». Estime la probabilité qu'elle tombe « pointe en haut ».",
        ["Les issues ne sont pas équiprobables : on estime la probabilité par la fréquence sur un grand nombre de lancers.",
         f"$\\dfrac{{248}}{{400}} = {nb(F(248, 400), 3)}$."],
        f"environ ${nb(F(248, 400), 3)}$")
    return _fin(E)


# ====================================================================
# 4e — PUISSANCES (exposant positif)
# ====================================================================
def g4_puissances():
    E = []

    def add(*t):
        E.append(t)

    # -- définition (8)
    for a, n in [(2, 5), (3, 4), (-2, 3), (-3, 4), (F("0.5"), 3), (-1, 15)]:
        a = F(a)
        v = a ** n
        dev = TIMES.join([par(a)] * n) if n <= 5 else f"{par(a)} \\times {par(a)} \\times \\ldots \\times {par(a)}"
        cor = [f"${par(a)}^{{{n}}} = {dev}$ ({n} facteurs)."]
        if a < 0:
            cor.append(f"Base négative et exposant {'pair' if n % 2 == 0 else 'impair'} : le résultat est {'positif' if n % 2 == 0 else 'négatif'}.")
        cor.append(f"Résultat : ${num(v)}$.")
        add("application" if a > 0 else "intermediaire", "definition", f"Calcule ${par(a)}^{{{n}}}$.", cor, f"${num(v)}$")
    add("intermediaire", "definition", "Calcule $-3^2$ puis $(-3)^2$.",
        ["Dans $-3^2$, l'exposant ne porte que sur $3$ : $-3^2 = -(3 \\times 3) = -9$.",
         "Dans $(-3)^2$, il porte sur $-3$ : $(-3) \\times (-3) = 9$."],
        "$-3^2 = -9$ et $(-3)^2 = 9$")
    add("application", "definition", "Écris $7 \\times 7 \\times 7 \\times 7$ sous la forme d'une puissance.",
        ["Le facteur $7$ est écrit $4$ fois : l'exposant est $4$."], "$7^4$")
    # -- puissances de 10 (10)
    for n in (6, 9):
        add("application", "puissances-10", f"Donne l'écriture décimale de $10^{{{n}}}$.",
            [f"$10^{{{n}}}$ s'écrit avec un $1$ suivi de ${n}$ zéros."], f"${nb(10 ** n)}$")
    add("application", "puissances-10", "Écris $100\\,000$ sous la forme d'une puissance de 10.",
        ["$100\\,000$ s'écrit avec $5$ zéros après le $1$."], "$10^5$")
    for a, n in [(F("4.5"), 3), (F("3.07"), 4), (F("0.8"), 2), (F(25), 3)]:
        v = a * 10 ** n
        add("application", "puissances-10", f"Donne l'écriture décimale de ${num(a)} \\times 10^{{{n}}}$.",
            [f"Multiplier par $10^{{{n}}}$, c'est multiplier par ${nb(10 ** n)}$ : la virgule se décale de ${n}$ rangs vers la droite."],
            f"${nb(v)}$")
    for x, a in [(1200, F("1.2")), (56000, F("5.6")), (7300000, F("7.3"))]:
        n = 0
        while a * 10 ** n != x:
            n += 1
        add("intermediaire", "puissances-10", f"Complète : ${nb(x)} = {num(a)} \\times 10^{{\\ldots}}$.",
            [f"Pour passer de ${num(a)}$ à ${nb(x)}$, on décale la virgule de ${n}$ rangs vers la droite."],
            f"${nb(x)} = {num(a)} \\times 10^{{{n}}}$")
    # -- produit de puissances d'un même nombre (8)
    for a, m, n in [(2, 3, 4), (5, 1, 3), (-3, 2, 5), (10, 4, 6), (7, 2, 2), ("a", 3, 5), ("x", 1, 4), (6, 3, 1)]:
        base = a if isinstance(a, str) else par(a)
        g = f"{base}^{{{m}}}" if m != 1 else base
        d = f"{base}^{{{n}}}" if n != 1 else base
        cor = [f"Même base : on additionne les exposants, $a^m \\times a^n = a^{{m+n}}$.",
               f"${g} \\times {d} = {base}^{{{m} + {n}}} = {base}^{{{m + n}}}$."]
        add("application" if not (isinstance(a, int) and a < 0) else "intermediaire", "meme-base",
            f"Écris sous la forme d'une seule puissance : ${g} \\times {d}$.", cor, f"${base}^{{{m + n}}}$")
    # -- produit de puissances de même exposant (8)
    for a, b, n in [(2, 5, 4), (3, 2, 3), (4, 25, 3), (5, 2, 6), (-2, 3, 2), (2, 7, 2), ("a", "b", 4), (20, 5, 2)]:
        if isinstance(a, str):
            add("intermediaire", "meme-exposant", f"Écris sous la forme d'une seule puissance : ${a}^{{{n}}} \\times {b}^{{{n}}}$.",
                ["Même exposant : $a^n \\times b^n = (a \\times b)^n$."], f"$({a}{b})^{{{n}}}$")
            continue
        p = a * b
        v = p ** n
        add("intermediaire", "meme-exposant",
            f"Écris ${par(a)}^{{{n}}} \\times {b}^{{{n}}}$ sous la forme d'une seule puissance, puis calcule-la.",
            ["Même exposant : $a^n \\times b^n = (a \\times b)^n$.",
             f"${par(a)}^{{{n}}} \\times {b}^{{{n}}} = ({par(a)} \\times {b})^{{{n}}} = {par(p)}^{{{n}}} = {nb(v)}$."],
            f"${par(p)}^{{{n}}} = {nb(v)}$")
    # -- pièges et priorités (8)
    pieges = [("Calcule $3 + 2 \\times 4^2$.", ["La puissance passe avant la multiplication et l'addition.", "$3 + 2 \\times 16 = 3 + 32 = 35$."], "$35$", 3 + 2 * 16),
              ("Calcule $(2 + 3)^2$ puis $2^2 + 3^2$.", ["$(2 + 3)^2 = 5^2 = 25$.", "$2^2 + 3^2 = 4 + 9 = 13$ : les deux résultats sont différents."], "$25$ et $13$", None),
              ("Vrai ou faux : $2^3 \\times 2^4 = 4^7$.", ["Même base : on garde la base et on additionne les exposants.", "$2^3 \\times 2^4 = 2^7 = 128$, alors que $4^7 = 16\\,384$."], "Faux : $2^3 \\times 2^4 = 2^7$", None),
              ("Vrai ou faux : $2^3 + 2^3 = 2^6$.", ["$2^3 + 2^3 = 8 + 8 = 16 = 2^4$.", "$2^6 = 64$ : on n'additionne pas des puissances en ajoutant les exposants."], "Faux", None),
              ("Calcule $5 \\times 2^3$.", ["On calcule d'abord la puissance : $2^3 = 8$.", "$5 \\times 8 = 40$ (et non $10^3$)."], "$40$", None),
              ("Calcule $-2^4$.", ["L'exposant ne porte que sur $2$ : $-2^4 = -(2 \\times 2 \\times 2 \\times 2)$."], "$-16$", None),
              ("Vrai ou faux : $3^2 \\times 5^2 = 15^2$.", ["Même exposant : $3^2 \\times 5^2 = (3 \\times 5)^2 = 15^2$.", "Vérification : $9 \\times 25 = 225 = 15^2$."], "Vrai", None),
              ("Calcule $10^2 + 10^3$.", ["$10^2 + 10^3 = 100 + 1\\,000 = 1\\,100$.", "Attention : ce n'est pas $10^5$ (qui vaut $100\\,000$)."], "$1\\,100$", None)]
    assert 2 ** 3 * 2 ** 4 == 2 ** 7 and 4 ** 7 == 16384 and 3 ** 2 * 5 ** 2 == 15 ** 2 and 10 ** 2 + 10 ** 3 == 1100
    for e, c, r, _ in pieges:
        add("approfondissement", "pieges", e, c, r)
    # -- problèmes (8)
    n = 180 // 20
    add("probleme", "probleme-puissances",
        "Une bactérie se divise en deux toutes les 20 minutes. On part d'une seule bactérie. Combien y en a-t-il au bout de 3 heures ?",
        [f"En 3 h, soit 180 min, il y a $180 \\div 20 = {n}$ divisions.", f"Nombre de bactéries : $2^{{{n}}} = {2 ** n}$."],
        f"$2^{{{n}}} = {2 ** n}$ bactéries")
    add("probleme", "probleme-puissances",
        "Sur l'échiquier de Sissa, on pose 1 grain sur la 1re case, 2 sur la 2e, 4 sur la 3e, et on double à chaque case. Combien y a-t-il de grains sur la 11e case ?",
        ["Sur la case numéro $n$, il y a $2^{n-1}$ grains.", f"11e case : $2^{{10}} = {nb(2 ** 10)}$ grains."],
        f"$2^{{10}} = {nb(2 ** 10)}$ grains")
    e = F("0.1") * 2 ** 7
    add("probleme", "probleme-puissances",
        "Une feuille de papier a une épaisseur de 0,1 mm. On la plie en deux 7 fois de suite. Quelle est l'épaisseur obtenue ?",
        ["Chaque pliage double l'épaisseur.", f"$0{{,}}1 \\times 2^7 = 0{{,}}1 \\times 128 = {num(e)}$ mm."],
        f"${num(e)}$ mm")
    add("probleme", "probleme-puissances",
        "Une personne envoie un message à 3 amis ; chacun le transfère à 3 nouvelles personnes, et ainsi de suite. Combien de personnes reçoivent le message au 5e envoi ?",
        ["1er envoi : $3$ personnes ; 2e envoi : $3^2$ ; … ; 5e envoi : $3^5$.", f"$3^5 = {3 ** 5}$."],
        f"${3 ** 5}$ personnes")
    add("probleme", "probleme-puissances",
        "La lumière parcourt environ $3 \\times 10^5$ km en une seconde. Quelle distance parcourt-elle en $10^2$ secondes ?",
        ["$3 \\times 10^5 \\times 10^2 = 3 \\times 10^{5+2} = 3 \\times 10^7$ km."],
        f"$3 \\times 10^7$ km, soit ${nb(3 * 10 ** 7)}$ km")
    add("probleme", "probleme-puissances",
        "Un cube a une arête de $10^2$ cm. Exprime son volume en cm³ sous la forme d'une puissance de 10.",
        ["$V = 10^2 \\times 10^2 \\times 10^2 = 10^{2+2+2} = 10^6$ cm³."],
        f"$10^6$ cm³, soit ${nb(10 ** 6)}$ cm³")
    add("probleme", "probleme-puissances",
        "Un entrepôt contient $10^3$ sacs de riz de $10^4$ grains chacun. Combien de grains de riz y a-t-il ? Donne le résultat sous forme d'une puissance de 10.",
        ["$10^3 \\times 10^4 = 10^{3+4} = 10^7$."], f"$10^7$ grains, soit ${nb(10 ** 7)}$")
    add("probleme", "probleme-puissances",
        "Un nénuphar double sa surface chaque jour. Il recouvre entièrement l'étang le 30e jour. Quel jour recouvrait-il la moitié de l'étang ?",
        ["D'un jour au suivant, la surface est multipliée par 2.", "La veille du 30e jour, la surface était la moitié : c'était le 29e jour."],
        "le 29e jour")
    return _fin(E)


# ====================================================================
# 4e — RACINE CARRÉE
# ====================================================================
def g4_racine():
    E = []

    def add(*t):
        E.append(t)

    # -- carrés (8)
    for x in [7, 11, 12, 0, F("0.3"), F("1.2"), -5, 20]:
        x = F(x)
        add("application", "carres", f"Calcule ${par(x)}^2$.",
            [f"${par(x)}^2 = {par(x)} \\times {par(x)} = {num(x * x)}$."], f"${num(x * x)}$")
    # -- racines exactes (8)
    for r in [9, 12, 0, 1, F("0.7"), 10, 11, 60]:
        r = F(r)
        c = r * r
        add("application", "racine-exacte", f"Calcule $\\sqrt{{{num(c)}}}$.",
            [f"On cherche le nombre positif dont le carré vaut ${num(c)}$.", f"${num(r)}^2 = {num(c)}$, donc $\\sqrt{{{num(c)}}} = {num(r)}$."],
            f"${num(r)}$")
    # -- propriétés (8)
    for a in [13, F("2.5")]:
        add("application", "proprietes", f"Calcule $\\sqrt{{{num(a)}^2}}$.",
            [f"Pour un nombre positif $a$, $\\sqrt{{a^2}} = a$.", f"$\\sqrt{{{num(a)}^2}} = {num(a)}$."], f"${num(a)}$")
    for a in [7, F("0.6")]:
        add("application", "proprietes", f"Calcule $\\left(\\sqrt{{{num(a)}}}\\right)^2$.",
            ["Pour un nombre positif $a$, $\\left(\\sqrt{a}\\right)^2 = a$."], f"${num(a)}$")
    for a, b in [(50, 7), (30, 6), (80, 9)]:
        b2 = b * b
        sgn = ">" if a > b2 else "<"
        add("intermediaire", "proprietes", f"Compare $\\sqrt{{{a}}}$ et ${b}$ sans calculatrice.",
            [f"${b} = \\sqrt{{{b2}}}$ car ${b}^2 = {b2}$.",
             f"${a} {sgn} {b2}$ et la racine carrée respecte l'ordre, donc $\\sqrt{{{a}}} {sgn} {b}$."],
            f"$\\sqrt{{{a}}} {sgn} {b}$")
    add("intermediaire", "proprietes", "Le nombre $\\sqrt{-9}$ existe-t-il ? Justifie.",
        ["Un carré n'est jamais négatif : aucun nombre n'a pour carré $-9$.", "La racine carrée n'est définie que pour les nombres positifs."],
        "Non")
    # -- encadrer (10)
    for n in [20, 45, 70, 90, 110, 130, 8, 3, 150, 200]:
        k = math.isqrt(n)
        assert k * k < n < (k + 1) ** 2
        add("intermediaire", "encadrer", f"Encadre $\\sqrt{{{n}}}$ par deux nombres entiers consécutifs.",
            [f"${k}^2 = {k * k}$ et ${k + 1}^2 = {(k + 1) ** 2}$.",
             f"${k * k} < {n} < {(k + 1) ** 2}$, donc ${k} < \\sqrt{{{n}}} < {k + 1}$."],
            f"${k} < \\sqrt{{{n}}} < {k + 1}$")
    # -- côté d'un carré d'aire donnée (8)
    for A, u in [(49, "cm"), (F("1.44"), "m"), (144, "m"), (F("0.25"), "m")]:
        A = F(A)
        c = F(math.isqrt(int(A * 10000)), 100)
        assert c * c == A
        add("application", "cote-carre", f"Un carré a une aire de ${num(A)}$ {u}². Quelle est la longueur de son côté ?",
            [f"Le côté $c$ vérifie $c^2 = {num(A)}$, donc $c = \\sqrt{{{num(A)}}} = {num(c)}$ {u}."], f"${num(c)}$ {u}")
    for A, u, ctx in [(50, "cm", ""), (20, "m", ""), (300, "m", "Un jardin carré"), (75, "cm", "Un carreau de faïence carré")]:
        c = arr(math.sqrt(A), 1)
        sujet = ctx or "Un carré"
        add("probleme" if ctx else "intermediaire", "cote-carre",
            f"{sujet} a une aire de {A} {u}². Calcule la longueur de son côté, arrondie au dixième.",
            [f"$c = \\sqrt{{{A}}}$ ; la calculatrice donne $\\sqrt{{{A}}} \\approx {nb(arr(math.sqrt(A), 4), 4)}$.",
             f"Arrondi au dixième : $c \\approx {nb(c, 1)}$ {u}."],
            f"$\\approx {nb(c, 1)}$ {u}")
    # -- pièges (8)
    vf = [("$\\sqrt{100} = 50$.", False, "$\\sqrt{100} = 10$ car $10^2 = 100$ : la racine carrée n'est pas la moitié."),
          ("$\\sqrt{9 + 16} = \\sqrt{9} + \\sqrt{16}$.", False, "$\\sqrt{9 + 16} = \\sqrt{25} = 5$ alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$."),
          ("$\\sqrt{0} = 0$.", True, "$0^2 = 0$, et $0$ est positif."),
          ("$\\sqrt{1} = 1$.", True, "$1^2 = 1$."),
          ("$\\sqrt{64} = 32$.", False, "$\\sqrt{64} = 8$ car $8^2 = 64$."),
          ("si $0 < a < b$, alors $\\sqrt{a} < \\sqrt{b}$.", True, "La racine carrée respecte l'ordre des nombres positifs."),
          ("$\\sqrt{-4} = -2$.", False, "$\\sqrt{-4}$ n'existe pas, et une racine carrée n'est jamais négative ; de plus $(-2)^2 = 4$, pas $-4$."),
          ("$\\sqrt{2}$ est un nombre décimal.", False, "$\\sqrt{2}$ n'est pas entier (il est entre $1$ et $2$). S'il était décimal, son dernier chiffre après la virgule ne serait pas $0$ et son carré garderait des décimales : il ne pourrait pas valoir exactement $2$. $\\sqrt{2}$ n'est donc pas décimal.")]
    for e, v, j in vf:
        add("approfondissement", "pieges", f"Vrai ou faux : {e}", [j], "Vrai" if v else "Faux")
    return _fin(E)


# ====================================================================
# 4e — REPÉRAGE
# ====================================================================
def pt(x, y, nom=""):
    return f"{nom}({num(x)}\\,;{num(y)})"


def g4_reperage():
    E = []

    def add(*t):
        E.append(t)

    # -- droite graduée (10)
    dg = [(-3, -2, 5, -3, 2, 1), (-1, 0, 4, -1, 3, -1), (-10, -5, 5, -10, 3, 1), (0, 1, 10, 0, 7, -1), (-2, 0, 4, -2, 3, 1),
          (-6, -3, 3, -3, 4, -1), (0, 1, 3, 0, 2, -1), (-20, 0, 4, -20, 6, 1), (1, 2, 5, 1, 4, -1), (-1, 1, 8, -1, 5, 1)]
    for a, b, p, s0, k, d in dg:
        g = F(b - a, p)
        r = s0 + d * k * g
        sens = "à droite" if d > 0 else "à gauche"
        lo, hi = math.floor(r), math.floor(r) + 1
        add("intermediaire" if g.denominator != 1 else "application", "droite-graduee",
            f"Sur une droite graduée, les traits marqués ${a}$ et ${b}$ sont séparés par ${p}$ intervalles égaux. Quelle est l'abscisse du point situé ${k}$ graduations {sens} du point d'abscisse ${s0}$ ?",
            [f"Une graduation vaut $\\dfrac{{{b} - {par(a)}}}{{{p}}} = {num(g)}$.",
             f"On se déplace {sens} : ${s0} {'+' if d > 0 else '-'} {k} \\times {num(g)} = {num(r)}$.",
             f"Contrôle : ${num(r)}$ est bien compris entre ${lo}$ et ${hi}$." if r != int(r) else f"Contrôle : on est bien {sens} de ${s0}$."],
            f"${num(r)}$")
    # -- placer / lire (8)
    for x, y in [(-4, 3), (3, -4), (-2, -5), (F("1.5"), 6)]:
        hx = f"{nt(abs(x))} unité{'s' if abs(x) >= 2 else ''} vers la {'droite' if x > 0 else 'gauche'}"
        hy = f"{nt(abs(y))} vers le {'haut' if y > 0 else 'bas'}"
        add("application", "placer-point", f"Comment placer le point ${pt(x, y, 'M')}$ en partant de l'origine $O$ ?",
            ["L'abscisse se lit en premier, sur l'axe horizontal ; l'ordonnée ensuite, sur l'axe vertical.",
             f"On se déplace de {hx}, puis de {hy}."],
            f"{hx}, puis {hy}")
    for x, y in [(2, -5), (-6, 1), (-3, -3), (0, -4)]:
        dx = f"on va de {abs(x)} unité{'s' if abs(x) >= 2 else ''} vers la {'droite' if x > 0 else 'gauche'}"
        dy = f"de {abs(y)} vers le {'haut' if y > 0 else 'bas'}"
        trajet = (f"on va de {abs(y)} unités vers le {'haut' if y > 0 else 'bas'}, sans se déplacer horizontalement" if x == 0
                  else f"{dx}, puis {dy}")
        add("application", "placer-point",
            f"En partant de l'origine, {trajet}. Quelles sont les coordonnées du point atteint ?",
            ["Vers la droite ou le haut : positif ; vers la gauche ou le bas : négatif.", f"Le point a pour coordonnées ${pt(x, y)}$."],
            f"${pt(x, y)}$")
    # -- signes et position (8)
    pos = {(1, 1): "en haut à droite", (-1, 1): "en haut à gauche", (-1, -1): "en bas à gauche", (1, -1): "en bas à droite"}
    for x, y in [(-3, 5), (4, -1), (F("-2.5"), -6), (7, 2), (F("-0.5"), F("0.5"))]:
        s = (1 if x > 0 else -1, 1 if y > 0 else -1)
        add("application", "signes",
            f"Sans placer le point, dis où se trouve ${pt(x, y, 'P')}$ par rapport à l'origine.",
            [f"Abscisse {'positive' if x > 0 else 'négative'} : {'à droite' if x > 0 else 'à gauche'} ; ordonnée {'positive' if y > 0 else 'négative'} : {'en haut' if y > 0 else 'en bas'}."],
            pos[s])
    for (sx, sy), contre in [((-1, -1), (3, -2)), ((1, -1), (-4, -1)), ((-1, 1), (-2, 7))]:
        cx, cy = contre
        ok = (cx > 0) == (sx > 0) and (cy > 0) == (sy > 0)
        add("intermediaire", "signes",
            f"Le point $R$ est placé {pos[(sx, sy)]} de l'origine. Peut-il avoir pour coordonnées ${pt(cx, cy)}$ ?",
            [f"{pos[(sx, sy)][0].upper() + pos[(sx, sy)][1:]} : $x {'>' if sx > 0 else '<'} 0$ et $y {'>' if sy > 0 else '<'} 0$.",
             "Les signes correspondent." if ok else "Les signes ne correspondent pas."],
            "Oui" if ok else "Non")
    # -- points sur les axes (6)
    for x, y, rep in [(0, -3, "sur l'axe des ordonnées"), (5, 0, "sur l'axe des abscisses"), (0, 0, "c'est l'origine du repère")]:
        add("application", "axes", f"Où se trouve le point ${pt(x, y, 'A')}$ ?",
            ["Ordonnée nulle : sur l'axe horizontal (des abscisses). Abscisse nulle : sur l'axe vertical (des ordonnées)."], rep)
    add("intermediaire", "axes", "Le point $B$ est sur l'axe des abscisses, à 4 unités à gauche de l'origine. Donne ses coordonnées.",
        ["Sur l'axe des abscisses, l'ordonnée est nulle ; à gauche, l'abscisse est négative."], f"${pt(-4, 0, 'B')}$")
    add("intermediaire", "axes", "Le point $C$ est sur l'axe des ordonnées, 2,5 unités au-dessus de l'origine. Donne ses coordonnées.",
        ["Sur l'axe des ordonnées, l'abscisse est nulle ; au-dessus, l'ordonnée est positive."], f"${pt(0, F('2.5'), 'C')}$")
    add("intermediaire", "axes", "Un point a une abscisse nulle et une ordonnée égale à $-7$. Sur quel axe est-il ? Au-dessus ou au-dessous de l'origine ?",
        ["Abscisse nulle : il est sur l'axe vertical, celui des ordonnées.", "Ordonnée négative : il est au-dessous de l'origine."],
        "sur l'axe des ordonnées, au-dessous de l'origine")
    # -- représenter une grandeur en fonction d'une autre (10)
    tabs = [("Un taxi facture 3 € de prise en charge, puis 2 € par kilomètre : $p = 3 + 2d$.", lambda v: 3 + 2 * v, [0, 1, 2, 3]),
            ("Un congélateur à $-18$ °C est débranché ; sa température monte de 4 °C par heure : $T = -18 + 4t$.", lambda v: -18 + 4 * v, [0, 1, 2, 3]),
            ("Une plongeuse descend de 3 m par minute à partir de la surface : sa profondeur est $z = -3t$ (en m).", lambda v: -3 * v, [0, 2, 4, 6]),
            ("Une bougie de 15 cm raccourcit de 2 cm par heure : $h = 15 - 2t$.", lambda v: 15 - 2 * v, [0, 1, 3, 5]),
            ("Le prix de $n$ croissants à 1,20 € est $p = 1{,}2n$.", lambda v: F("1.2") * v, [0, 5, 10])]
    for ctx, f, xs in tabs:
        pts = " ; ".join(f"$({num(x)}\\,;{num(F(f(F(x))))})$" for x in xs)
        add("intermediaire", "grandeurs",
            f"{ctx} Quels points faut-il placer pour les valeurs ${' ; '.join(num(x) for x in xs)}$ de la variable ?",
            ["On calcule chaque valeur, puis on écrit les points (variable ; grandeur).", f"Points : {pts}."],
            pts)
    for ctx, f, x, sym in [("$T = -18 + 4t$ (température en °C, $t$ en heures)", lambda v: -18 + 4 * v, 6, "t"),
                           ("$T = -18 + 4t$ (température en °C, $t$ en heures)", lambda v: -18 + 4 * v, 3, "t"),
                           ("$z = -3t$ (profondeur en m, $t$ en minutes)", lambda v: -3 * v, 5, "t"),
                           ("$h = 15 - 2t$ (hauteur en cm, $t$ en heures)", lambda v: 15 - 2 * v, 7, "t"),
                           ("$y = 2x - 5$", lambda v: 2 * v - 5, 2, "x")]:
        y = F(f(F(x)))
        posi = "au-dessus de" if y > 0 else ("au-dessous de" if y < 0 else "sur")
        add("approfondissement", "grandeurs",
            f"On représente {ctx}. Le point correspondant à ${sym} = {x}$ est-il au-dessus, au-dessous ou sur l'axe horizontal ?",
            [f"Pour ${sym} = {x}$, la grandeur vaut ${num(y)}$ : le point est ${pt(x, y)}$.",
             f"Son ordonnée est {'positive' if y > 0 else ('négative' if y < 0 else 'nulle')} : il est {posi} l'axe horizontal."],
            f"{posi} l'axe horizontal".replace("sur l'axe", "sur l'axe"))
    # -- comparer et ranger des abscisses (8)
    for a, b in [(F("-2.5"), -2), (F("-0.3"), F("-0.25")), (-7, 3), (F(-3, 4), F("-0.7"))]:
        a, b = F(a), F(b)
        g = "A" if a < b else "B"
        add("application", "comparer",
            f"Sur une droite graduée, $A$ a pour abscisse ${fl(a) if a == F(-3, 4) else num(a)}$ et $B$ a pour abscisse ${num(b)}$. Lequel est le plus à gauche ?",
            ["Le plus à gauche est celui qui a la plus petite abscisse." + (" On écrit $-\\dfrac{3}{4} = -0{,}75$." if a == F(-3, 4) else ""),
             f"${num(min(a, b))} < {num(max(a, b))}$." + (" Entre deux négatifs, le plus petit est le plus éloigné de zéro." if a < 0 and b < 0 else "")],
            f"${g}$")
    for L in [[F("-1.5"), F("0.5"), -3, 2], [F("-0.8"), F("-1.2"), F("0.1"), -1], [4, F("-4.5"), F("-4.05"), 0], [F("-2.2"), F("-2.02"), F("-2.12"), F("2.1")]]:
        L = [F(x) for x in L]
        srt = sorted(L)
        add("intermediaire", "comparer",
            "Range dans l'ordre croissant les abscisses : $" + " \\,;\\, ".join(num(x) for x in L) + "$.",
            ["D'abord les négatifs (du plus éloigné de zéro au plus proche), puis $0$, puis les positifs."],
            "$" + " < ".join(num(x) for x in srt) + "$")
    return _fin(E)


# ====================================================================
# 4e — REPRÉSENTATION DE L'ESPACE
# ====================================================================
def _pi_txt(k):
    """k·π en LaTeX (k Fraction)."""
    k = F(k)
    if k == 1:
        return "\\pi"
    if k.denominator == 1:
        return f"{nb(k)}\\pi"
    if est_decimal(k):
        return f"{num(k)}\\pi"
    return f"\\dfrac{{{k.numerator}\\pi}}{{{k.denominator}}}"


def g4_espace():
    E = []

    def add(*t):
        E.append(t)

    # -- vocabulaire (8)
    for n, nom in [(3, "triangulaire"), (4, "carrée"), (5, "pentagonale"), (6, "hexagonale"), (8, "octogonale")]:
        add("application", "vocabulaire",
            f"Combien de faces, d'arêtes et de sommets possède une pyramide à base {nom} ?",
            [f"La base a {n} côtés : il y a {n} faces latérales triangulaires, plus la base, soit ${n + 1}$ faces.",
             f"Arêtes : ${n}$ autour de la base et ${n}$ qui montent au sommet, soit ${2 * n}$.",
             f"Sommets : les ${n}$ sommets de la base et le sommet principal, soit ${n + 1}$."],
            f"${n + 1}$ faces, ${2 * n}$ arêtes, ${n + 1}$ sommets")
    add("application", "vocabulaire", "Quelle est la nature des faces latérales d'une pyramide ? Combien de bases a-t-elle ?",
        ["Les faces latérales sont toutes des triangles qui ont le sommet principal en commun.", "Une pyramide n'a qu'une seule base (un prisme en a deux)."],
        "des triangles ; une seule base")
    add("intermediaire", "vocabulaire", "Qu'est-ce qu'un tétraèdre ? Combien de faces a-t-il ?",
        ["C'est une pyramide à base triangulaire.", "Ses $4$ faces sont des triangles : n'importe laquelle peut servir de base."],
        "une pyramide à base triangulaire, à $4$ faces")
    add("intermediaire", "vocabulaire", "Un cône de révolution est obtenu en faisant tourner quelle figure autour de quel côté ? Quelle est sa base ?",
        ["On fait tourner un triangle rectangle autour d'un des côtés de l'angle droit.", "La base est un disque."],
        "un triangle rectangle autour d'un côté de l'angle droit ; base : un disque")
    # -- volume d'une pyramide (10)
    pyr = [("à base carrée de côté 6 cm", F(36), 5, "cm"), ("à base carrée de côté 9 cm", F(81), 4, "cm"),
           ("à base rectangulaire de 8 cm sur 5 cm", F(40), 6, "cm"), ("à base rectangulaire de 12 cm sur 7 cm", F(84), 10, "cm"),
           ("dont la base a une aire de 45 cm²", F(45), 8, "cm"), ("dont la base est un triangle rectangle de côtés de l'angle droit 6 cm et 4 cm", F(12), 9, "cm"),
           ("à base carrée de côté 2,5 m", F("6.25"), 3, "m"), ("à base carrée de côté 10 cm", F(100), 7, "cm"),
           ("dont la base a une aire de 20 cm²", F(20), 4, "cm"), ("dont la base a une aire de 15,6 cm²", F("15.6"), F("7.5"), "cm")]
    for base, B, h, u in pyr:
        h = F(h)
        V = B * h / 3
        exact = est_decimal(V)
        add("application" if "aire" in base else "intermediaire", "volume-pyramide",
            f"Calcule le volume d'une pyramide de hauteur ${num(h)}$ {u} {base}" + ("." if exact else ", arrondi au dixième."),
            [f"Aire de la base : $\\mathcal{{B}} = {num(B)}$ {u}².",
             f"$V = \\dfrac{{\\mathcal{{B}} \\times h}}{{3}} = \\dfrac{{{num(B)} \\times {num(h)}}}{{3}} = " + (f"{num(V)}$ {u}³." if exact else f"\\dfrac{{{num(B * h)}}}{{3}} \\approx {nb(arr(V, 1), 1)}$ {u}³.")],
            f"${num(V)}$ {u}³" if exact else f"$\\approx {nb(arr(V, 1), 1)}$ {u}³")
    # -- volume d'un cône (8)
    for r, h in [(3, 4), (5, 12), (2, 6), (6, 10), (4, 9), (F("1.5"), 4), (10, 30), (7, 3)]:
        r, h = F(r), F(h)
        k = r * r * h / 3
        v = arr(float(k) * math.pi, 0)
        add("intermediaire", "volume-cone",
            f"Calcule le volume d'un cône de révolution de rayon ${num(r)}$ cm et de hauteur ${num(h)}$ cm. Donne la valeur exacte puis l'arrondi au cm³.",
            [f"$V = \\dfrac{{\\pi r^2 h}}{{3}} = \\dfrac{{\\pi \\times {num(r)}^2 \\times {num(h)}}}{{3}} = {_pi_txt(k)}$ cm³.",
             f"$V \\approx {nb(v, 0)}$ cm³."],
            f"${_pi_txt(k)}$ cm³ $\\approx {nb(v, 0)}$ cm³")
    # -- prismes, cylindres et comparaisons (8)
    for r, h in [(3, 10), (F("2.5"), 8)]:
        r, h = F(r), F(h)
        k = r * r * h
        v = arr(float(k) * math.pi, 0)
        add("application", "comparer-solides",
            f"Calcule le volume d'un cylindre de rayon ${num(r)}$ cm et de hauteur ${num(h)}$ cm, arrondi au cm³.",
            [f"$V = \\pi r^2 h = \\pi \\times {num(r)}^2 \\times {num(h)} = {_pi_txt(k)} \\approx {nb(v, 0)}$ cm³."],
            f"$\\approx {nb(v, 0)}$ cm³")
    for B, h in [(12, 10), (F("7.5"), 6)]:
        B, h = F(B), F(h)
        add("application", "comparer-solides",
            f"Un prisme droit a une base d'aire ${num(B)}$ cm² et une hauteur de ${num(h)}$ cm. Calcule son volume, puis celui d'une pyramide de même base et de même hauteur.",
            [f"Prisme : $V = \\mathcal{{B}} \\times h = {num(B)} \\times {num(h)} = {num(B * h)}$ cm³.",
             f"Pyramide : le tiers, soit ${num(B * h)} \\div 3 = {num(B * h / 3)}$ cm³."],
            f"${num(B * h)}$ cm³ et ${num(B * h / 3)}$ cm³")
    add("intermediaire", "comparer-solides",
        "Un cône et un cylindre ont la même base et la même hauteur. Combien de cônes remplis d'eau faut-il verser pour remplir le cylindre ?",
        ["Le volume du cône est le tiers de celui du cylindre (règle du tiers)."], "$3$ cônes")
    add("intermediaire", "comparer-solides",
        "Une pyramide a un volume de 54 cm³. Quel est le volume du prisme de même base et de même hauteur ?",
        ["Le volume de la pyramide est le tiers de celui du prisme.", "$54 \\times 3 = 162$ cm³."], "$162$ cm³")
    k1, k2 = F(16 * 9, 3), F(9 * 6)
    add("probleme", "comparer-solides",
        "Un verre conique a un rayon de 4 cm et une hauteur de 9 cm ; un verre cylindrique a un rayon de 3 cm et une hauteur de 6 cm. Lequel contient le plus ?",
        [f"Cône : $\\dfrac{{\\pi \\times 4^2 \\times 9}}{{3}} = {_pi_txt(k1)} \\approx {nb(arr(float(k1) * math.pi, 1), 1)}$ cm³.",
         f"Cylindre : $\\pi \\times 3^2 \\times 6 = {_pi_txt(k2)} \\approx {nb(arr(float(k2) * math.pi, 1), 1)}$ cm³."],
        "le verre cylindrique")
    add("intermediaire", "comparer-solides",
        "Si l'on double la hauteur d'une pyramide sans changer sa base, que devient son volume ?",
        ["$V = \\dfrac{\\mathcal{B} \\times h}{3}$ : le volume est proportionnel à la hauteur.", "Il est donc multiplié par $2$."],
        "il est multiplié par 2")
    # -- quelle hauteur ? (6)
    for a, h, ap in [(3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 6, 10), (9, 12, 15), (12, 5, 13)]:
        assert a * a + h * h == ap * ap
        c = 2 * a
        V = F(c * c * h, 3)
        add("approfondissement", "quelle-hauteur",
            f"Une pyramide régulière à base carrée de côté {c} cm a une hauteur de {h} cm ; la hauteur de chacune de ses faces latérales mesure {ap} cm. Calcule son volume.",
            [f"La hauteur de la pyramide est la distance du sommet au plan de la base : c'est ${h}$ cm (et non ${ap}$ cm, qui est la hauteur d'une face).",
             f"$V = \\dfrac{{{c}^2 \\times {h}}}{{3}} = \\dfrac{{{c * c} \\times {h}}}{{3}} = {num(V)}$ cm³."],
            f"${num(V)}$ cm³")
    # -- problèmes (10)
    V = F("35.4") ** 2 * F("21.6") / 3
    add("probleme", "probleme-espace",
        "La pyramide du Louvre a une base carrée d'environ 35,4 m de côté et une hauteur d'environ 21,6 m. Calcule son volume, arrondi au m³.",
        [f"$V = \\dfrac{{35{{,}}4^2 \\times 21{{,}}6}}{{3}} = {nb(V, 3)}$ m³.", f"Arrondi : $\\approx {nb(arr(V, 0), 0)}$ m³."],
        f"$\\approx {nb(arr(V, 0), 0)}$ m³")
    k = F("2.5") ** 2 * 12 / 3
    add("probleme", "probleme-espace",
        "Un cornet de glace a la forme d'un cône de rayon 2,5 cm et de hauteur 12 cm. Quel est son volume, arrondi au cm³ ?",
        [f"$V = \\dfrac{{\\pi \\times 2{{,}}5^2 \\times 12}}{{3}} = {_pi_txt(k)} \\approx {nb(arr(float(k) * math.pi, 0), 0)}$ cm³."],
        f"$\\approx {nb(arr(float(k) * math.pi, 0), 0)}$ cm³")
    k = F("1.5") ** 2 * F("1.2") / 3
    add("probleme", "probleme-espace",
        "Un tas de sable a la forme d'un cône de rayon 1,5 m et de hauteur 1,2 m. Calcule son volume, arrondi au centième de m³.",
        [f"$V = \\dfrac{{\\pi \\times 1{{,}}5^2 \\times 1{{,}}2}}{{3}} = {_pi_txt(k)} \\approx {nb(arr(float(k) * math.pi, 2), 2)}$ m³."],
        f"$\\approx {nb(arr(float(k) * math.pi, 2), 2)}$ m³")
    V = F(36 * 10, 3)
    add("probleme", "probleme-espace",
        "Un flacon de parfum a la forme d'une pyramide à base carrée de côté 6 cm et de hauteur 10 cm. Quelle est sa contenance en centilitres ?",
        [f"$V = \\dfrac{{6^2 \\times 10}}{{3}} = {num(V)}$ cm³.", f"$1$ cL $= 10$ cm³, donc ${num(V)}$ cm³ $= {num(V / 10)}$ cL."],
        f"${num(V / 10)}$ cL")
    k = F(36 * 8, 3)
    add("probleme", "probleme-espace",
        "Un entonnoir a la forme d'un cône de rayon 6 cm et de hauteur 8 cm. Quel volume de liquide peut-il contenir, arrondi au cm³ ?",
        [f"$V = \\dfrac{{\\pi \\times 6^2 \\times 8}}{{3}} = {_pi_txt(k)} \\approx {nb(arr(float(k) * math.pi, 0), 0)}$ cm³."],
        f"$\\approx {nb(arr(float(k) * math.pi, 0), 0)}$ cm³")
    V = F(4) * F("1.5") / 3
    add("probleme", "probleme-espace",
        "Une tente a la forme d'une pyramide à base carrée de 2 m de côté et de 1,5 m de hauteur. Quel volume d'air contient-elle ?",
        [f"$V = \\dfrac{{2^2 \\times 1{{,}}5}}{{3}} = {num(V)}$ m³."], f"${num(V)}$ m³")
    V = F(230 * 230 * 146, 3)
    add("probleme", "probleme-espace",
        "La pyramide de Khéops avait une base carrée d'environ 230 m de côté et une hauteur d'environ 146 m. Calcule son volume, arrondi au millier de m³.",
        [f"$V = \\dfrac{{230^2 \\times 146}}{{3}} \\approx {nb(arr(V, 0), 0)}$ m³.",
         f"Arrondi au millier : $\\approx {nb(arr(V / 1000, 0) * 1000, 0)}$ m³."],
        f"$\\approx {nb(arr(V / 1000, 0) * 1000, 0)}$ m³")
    h = F(3 * 96, 36)
    add("probleme", "probleme-espace",
        "Une pyramide à base carrée de côté 6 cm a un volume de 96 cm³. Quelle est sa hauteur ?",
        ["$V = \\dfrac{\\mathcal{B} \\times h}{3}$, donc $h = \\dfrac{3V}{\\mathcal{B}}$.", f"$h = \\dfrac{{3 \\times 96}}{{36}} = {num(h)}$ cm."],
        f"${num(h)}$ cm")
    h = F(3 * 50, 25)
    add("probleme", "probleme-espace",
        "Un cône de rayon 5 cm a un volume de $50\\pi$ cm³. Quelle est sa hauteur ?",
        ["$\\dfrac{\\pi \\times 5^2 \\times h}{3} = 50\\pi$, donc $25h = 150$.", f"$h = {num(h)}$ cm."],
        f"${num(h)}$ cm")
    add("probleme", "probleme-espace",
        "Un aquarium a la forme d'un pavé droit de 50 cm sur 30 cm sur 40 cm. Combien de litres d'eau contient-il quand il est plein ?",
        [f"$V = 50 \\times 30 \\times 40 = {nb(50 * 30 * 40)}$ cm³.", f"$1$ L $= 1\\,000$ cm³, donc $V = {num(F(50 * 30 * 40, 1000))}$ L."],
        f"${num(F(50 * 30 * 40, 1000))}$ L")
    return _fin(E)


# ====================================================================
# 4e — TRANSFORMATIONS (la translation)
# ====================================================================
def _dep(dx, dy):
    m = []
    if dx:
        m.append(f"{abs(dx)} carreau{'x' if abs(dx) > 1 else ''} vers la {'droite' if dx > 0 else 'gauche'}")
    if dy:
        m.append(f"{abs(dy)} carreau{'x' if abs(dy) > 1 else ''} vers le {'haut' if dy > 0 else 'bas'}")
    return " et ".join(m) if m else "aucun déplacement"


def g4_transformations():
    E = []

    def add(*t):
        E.append(t)

    # -- sur quadrillage (10) : nœuds repérés par (colonne ; ligne)
    cas = [((2, 5), (6, 3), (1, 7)), ((3, 1), (5, 6), (8, 2)), ((7, 4), (2, 4), (9, 9)), ((4, 8), (4, 3), (6, 10)), ((1, 2), (9, 5), (3, 3))]
    for i, (A, B, C) in enumerate(cas):
        dx, dy = B[0] - A[0], B[1] - A[1]
        Cp = (C[0] + dx, C[1] + dy)
        intro = (f"Sur un quadrillage, on repère chaque nœud par sa colonne et sa ligne (colonnes numérotées de gauche à droite, lignes numérotées de bas en haut). $A$ est en colonne {A[0]}, ligne {A[1]} ; "
                 f"$B$ est en colonne {B[0]}, ligne {B[1]}.")
        add("application", "quadrillage",
            intro + f" Où se trouve l'image du nœud $C$ (colonne {C[0]}, ligne {C[1]}) par la translation qui transforme $A$ en $B$ ?",
            [f"Pour aller de $A$ à $B$ : {_dep(dx, dy)}.", f"On fait le même déplacement à partir de $C$ : colonne {Cp[0]}, ligne {Cp[1]}."],
            f"colonne {Cp[0]}, ligne {Cp[1]}")
        if i % 2 == 0:
            add("intermediaire", "quadrillage",
                intro + " Décris la translation qui transforme $B$ en $A$.",
                [f"De $A$ à $B$ : {_dep(dx, dy)}.", f"Pour revenir de $B$ à $A$, on fait le déplacement inverse : {_dep(-dx, -dy)}."],
                _dep(-dx, -dy))
        else:
            add("intermediaire", "quadrillage",
                intro + " On applique deux fois de suite la translation qui transforme $A$ en $B$. Quel déplacement total obtient-on à partir de $A$ ?",
                [f"Une fois : {_dep(dx, dy)}.", f"Deux fois : {_dep(2 * dx, 2 * dy)}. On ne revient pas au point de départ."],
                _dep(2 * dx, 2 * dy))
    # -- conservation (10)
    cons = [("Un triangle a des côtés de 3 cm, 4 cm et 5 cm.", "Quel est le périmètre de son image par une translation ?", "les longueurs", "$12$ cm"),
            ("Un rectangle mesure 7 cm sur 4,5 cm.", "Quelle est l'aire de son image par une translation ?", "les longueurs et les aires", f"${nb(F(7) * F('4.5'))}$ cm²"),
            ("Un angle mesure 128°.", "Que mesure son image par une translation ?", "les mesures d'angles", "$128$°"),
            ("Un cercle a pour centre $O$ et pour rayon 2,8 cm.", "Quelle est l'image de ce cercle par la translation qui transforme $O$ en $P$ ?", "les longueurs", "le cercle de centre $P$ et de rayon 2,8 cm"),
            ("Le segment $[EF]$ mesure 7 cm.", "Une translation, dont la direction n'est pas celle de la droite $(EF)$, le transforme en $[E'F']$. Quelle est la longueur $E'F'$ ? Quelle est la nature du quadrilatère $EFF'E'$ ?", "les longueurs, donc $E'F' = 7$ cm ; de plus $[EE']$ et $[FF']$ sont parallèles, de même longueur et de même sens", "$7$ cm ; un parallélogramme"),
            ("Les droites $(d_1)$ et $(d_2)$ sont perpendiculaires.", "Comment sont leurs images par une translation ?", "les angles", "perpendiculaires"),
            ("Un carré a une aire de 36 cm².", "Quel est le côté de son image par une translation ?", "les aires et les longueurs", "$6$ cm"),
            ("Le point $M$ est le milieu du segment $[AB]$.", "Que dire de son image $M'$ par une translation ?", "les longueurs et l'alignement", "$M'$ est le milieu de $[A'B']$"),
            ("Un losange a des côtés de 5 cm.", "Quelle est la nature de son image par une translation ?", "les longueurs et les angles", "un losange de côté 5 cm"),
            ("Une figure a un périmètre de 31,4 cm et une aire de 78,5 cm².", "Quels sont le périmètre et l'aire de son image par une translation ?", "les longueurs et les aires", "$31{,}4$ cm et $78{,}5$ cm²")]
    for i, (hyp, q, prop, rep) in enumerate(cons):
        add("application" if i < 4 else "intermediaire", "conservation", f"{hyp} {q}", [f"Une translation conserve {prop}."], rep)
    # -- reconnaître la transformation (10)
    rec = [("La figure a glissé, sans tourner ni se retourner.", "translation"),
           ("La figure a été retournée, comme si on avait plié la feuille le long d'une droite.", "symétrie axiale"),
           ("La figure a fait un demi-tour autour d'un point.", "symétrie centrale"),
           ("Un seul point reste à sa place.", "symétrie centrale"),
           ("Tous les points d'une droite restent à leur place.", "symétrie axiale"),
           ("Aucun point ne reste à sa place.", "translation"),
           ("Pour chaque point $M$ et son image $M'$, le point $O$ est le milieu de $[MM']$.", "symétrie centrale"),
           ("Les segments $[AA']$, $[BB']$, $[CC']$ sont parallèles, de même longueur et dans le même sens.", "translation"),
           ("Pour chaque point $M$ et son image $M'$, la droite $(d)$ est la médiatrice de $[MM']$.", "symétrie axiale"),
           ("Les segments $[AA']$, $[BB']$ et $[CC']$ ont tous le même milieu $O$.", "symétrie centrale")]
    just = {"translation": "Glissement sans point fixe, tous les points se déplacent de la même façon : c'est une translation.",
            "symétrie axiale": "Retournement par rapport à une droite (l'axe), dont les points restent fixes : c'est une symétrie axiale.",
            "symétrie centrale": "Demi-tour autour d'un point (le centre), seul point fixe : c'est une symétrie centrale."}
    for txt, r in rec:
        add("intermediaire", "reconnaitre", f"Quelle transformation est décrite ? {txt}", [just[r]], r)
    # -- invariants (8)
    inv = [("Par la translation qui transforme $A$ en $B$ ($A \\neq B$), quels points restent à leur place ?", "Aucun : chaque point est déplacé comme $A$ l'est vers $B$.", "aucun"),
           ("Par la symétrie de centre $O$, quels points restent à leur place ?", "Seul le centre est son propre symétrique.", "le point $O$ seulement"),
           ("Par la symétrie d'axe $(d)$, quels points restent à leur place ?", "Les points de l'axe sont leurs propres symétriques.", "les points de la droite $(d)$"),
           ("La droite $(AB)$ est-elle transformée en elle-même par la translation qui transforme $A$ en $B$ ?", "Chaque point de $(AB)$ glisse le long de $(AB)$ : la droite est globalement invariante (mais aucun de ses points n'est fixe).", "Oui, globalement"),
           ("Une droite perpendiculaire à $(AB)$ est-elle transformée en elle-même par la translation qui transforme $A$ en $B$ ?", "Elle est transformée en une droite parallèle, mais décalée.", "Non"),
           ("Si on applique deux fois la symétrie de centre $O$, où se retrouve un point $M$ ?", "Le premier demi-tour envoie $M$ en $M'$, le second ramène $M'$ en $M$.", "à sa place de départ"),
           ("Si on applique deux fois la translation qui transforme $A$ en $B$, revient-on au point de départ ?", "Non : on glisse deux fois dans le même sens, le déplacement est doublé.", "Non"),
           ("Quelles droites sont transformées en elles-mêmes par la translation qui transforme $A$ en $B$ ?", "Ce sont les droites qui ont la direction du déplacement.", "les droites parallèles à $(AB)$")]
    for q, j, r in inv:
        add("approfondissement", "invariants", q, [j], r)
    # -- rappels sur les symétries (6)
    add("application", "symetries", "Le segment $[MN]$ mesure 5,6 cm. Quelle est la longueur de son symétrique par rapport à un point $O$ ?",
        ["Une symétrie centrale conserve les longueurs."], "$5{,}6$ cm")
    add("application", "symetries", "Le point $M$ est à 3,5 cm du point $O$. Son symétrique par rapport à $O$ est $M'$. Calcule $MM'$.",
        ["$O$ est le milieu de $[MM']$.", f"$MM' = 2 \\times 3{{,}}5 = {nb(F('3.5') * 2)}$ cm."], f"${nb(F('3.5') * 2)}$ cm")
    add("intermediaire", "symetries", "Le point $A$ est à 2,4 cm de la droite $(d)$. Son symétrique par rapport à $(d)$ est $A'$. Calcule $AA'$.",
        ["$(d)$ est la médiatrice de $[AA']$ : $A$ et $A'$ sont à la même distance de $(d)$.", f"$AA' = 2 \\times 2{{,}}4 = {nb(F('2.4') * 2)}$ cm."], f"${nb(F('2.4') * 2)}$ cm")
    add("application", "symetries", "Un carré a-t-il un centre de symétrie ? Si oui, lequel ?",
        ["Le point d'intersection des diagonales est le milieu de chacune d'elles."], "Oui, le point d'intersection de ses diagonales")
    add("application", "symetries", "Combien d'axes de symétrie possède un rectangle qui n'est pas un carré ?",
        ["Les deux médiatrices des côtés sont des axes ; les diagonales n'en sont pas."], "$2$")
    add("intermediaire", "symetries", "Un triangle équilatéral a-t-il un centre de symétrie ?",
        ["Un demi-tour autour de n'importe quel point ne superpose pas le triangle à lui-même (la pointe se retrouve en bas).", "Il a 3 axes de symétrie, mais pas de centre de symétrie."], "Non")
    # -- problèmes (6)
    add("probleme", "probleme-translation", "Dans une frise, un motif est répété par une translation de 3 cm vers la droite. Quelle distance sépare le 1er motif du 15e ?",
        ["Du 1er au 15e motif, on applique 14 fois la translation.", "$14 \\times 3 = 42$ cm."], "$42$ cm")
    add("probleme", "probleme-translation", "Un papier peint répète un motif tous les 12 cm sur une bande de 3 m de long. Combien de motifs complets y a-t-il, si le premier commence au bord ?",
        ["$3$ m $= 300$ cm.", f"$300 \\div 12 = {num(F(300, 12))}$ : il y a ${num(F(300, 12))}$ motifs complets."], f"${num(F(300, 12))}$ motifs")
    add("probleme", "probleme-translation", "Une cabine d'ascenseur monte de 3,2 m à chaque étage, sans tourner. De combien s'est-elle déplacée entre le rez-de-chaussée et le 5e étage ?",
        ["Le mouvement de la cabine est une translation verticale.", f"$5 \\times 3{{,}}2 = {nb(5 * F('3.2'))}$ m."], f"${nb(5 * F('3.2'))}$ m")
    add("probleme", "probleme-translation", "Sur un quadrillage, on déplace une figure de 4 carreaux vers la droite, puis de 3 carreaux vers le haut. Quelle unique translation donne le même résultat ? Quelle distance (en carreaux) parcourt chaque point ?",
        ["Les deux déplacements s'enchaînent en une seule translation : 4 carreaux vers la droite et 3 vers le haut.",
         "Chaque point se déplace en diagonale : d'après le théorème de Pythagore, $\\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ carreaux."],
        "la translation de 4 carreaux vers la droite et 3 vers le haut ; 5 carreaux")
    add("probleme", "probleme-translation", "Une figure est déplacée de 6 cm vers la droite par une translation, puis de 6 cm vers la gauche par une autre translation. Où se trouve-t-elle ?",
        ["La seconde translation est la translation inverse de la première."], "à sa position de départ")
    add("probleme", "probleme-translation", "Un motif d'aire 8 cm² est reproduit 10 fois par translation, sans chevauchement : avec le motif de départ, on obtient 11 motifs. Quelle est l'aire totale de ces 11 motifs ?",
        ["Une translation conserve les aires : chaque motif a une aire de 8 cm².", "$11 \\times 8 = 88$ cm²."], "$88$ cm²")
    return _fin(E)


# ====================================================================
# 4e — TRIANGLES (Pythagore, droite des milieux…)
# ====================================================================
def g4_triangles():
    E = []

    def add(*t):
        E.append(t)

    noms = ["ABC", "DEF", "MNP", "RST", "IJK", "EFG", "KLM", "UVW", "XYZ", "GHI"]
    # -- hypoténuse (10)
    hyps = [(6, 8), (5, 12), (8, 15), (7, 24), (F("1.5"), 2), (F("0.9"), F("1.2")), (20, 21), (4, 7), (3, 5), (2, 9)]
    for i, (a, b) in enumerate(hyps):
        A, B, C = noms[i]
        a, b = F(a), F(b)
        c2 = a * a + b * b
        cr = None
        # racine exacte ?
        for d in (1, 10, 100):
            q = c2 * d * d
            if q.denominator == 1 and math.isqrt(int(q)) ** 2 == int(q):
                cr = F(math.isqrt(int(q)), d)
                break
        cor = [f"Le triangle ${A}{B}{C}$ est rectangle en ${A}$ : d'après le théorème de Pythagore, ${B}{C}^2 = {A}{B}^2 + {A}{C}^2$.",
               f"${B}{C}^2 = {num(a)}^2 + {num(b)}^2 = {num(a * a)} + {num(b * b)} = {num(c2)}$."]
        if cr is not None:
            cor.append(f"${B}{C} = \\sqrt{{{num(c2)}}} = {num(cr)}$ cm.")
            rep = f"${num(cr)}$ cm"
            en = ""
        else:
            v = arr(math.sqrt(float(c2)), 1)
            cor.append(f"${B}{C} = \\sqrt{{{num(c2)}}} \\approx {nb(v, 1)}$ cm (arrondi au dixième).")
            rep = f"$\\approx {nb(v, 1)}$ cm"
            en = " Donne l'arrondi au dixième."
        add("application" if cr is not None else "intermediaire", "pythagore-hypotenuse",
            f"Le triangle ${A}{B}{C}$ est rectangle en ${A}$, avec ${A}{B} = {num(a)}$ cm et ${A}{C} = {num(b)}$ cm. Calcule ${B}{C}$.{en}",
            cor, rep)
    # -- côté de l'angle droit (8)
    cotes = [(13, 5), (17, 8), (10, 6), (25, 7), (F("2.6"), 1), (9, 4), (12, 7), (6, 5)]
    for i, (h, a) in enumerate(cotes):
        R, S, T = ["RST", "EFG", "KLM", "UVW", "ABC", "DEF", "MNP", "IJK"][i]
        h, a = F(h), F(a)
        b2 = h * h - a * a
        br = None
        for d in (1, 10, 100):
            q = b2 * d * d
            if q.denominator == 1 and math.isqrt(int(q)) ** 2 == int(q):
                br = F(math.isqrt(int(q)), d)
                break
        cor = [f"Le triangle est rectangle en ${R}$, d'hypoténuse $[{S}{T}]$ : ${S}{T}^2 = {R}{S}^2 + {R}{T}^2$.",
               f"Donc ${R}{T}^2 = {S}{T}^2 - {R}{S}^2 = {num(h)}^2 - {num(a)}^2 = {num(h * h)} - {num(a * a)} = {num(b2)}$."]
        if br is not None:
            cor.append(f"${R}{T} = \\sqrt{{{num(b2)}}} = {num(br)}$ cm.")
            rep, en = f"${num(br)}$ cm", ""
        else:
            v = arr(math.sqrt(float(b2)), 1)
            cor.append(f"${R}{T} = \\sqrt{{{num(b2)}}} \\approx {nb(v, 1)}$ cm (arrondi au dixième).")
            rep, en = f"$\\approx {nb(v, 1)}$ cm", " Donne l'arrondi au dixième."
        add("intermediaire", "pythagore-cote",
            f"Le triangle ${R}{S}{T}$ est rectangle en ${R}$, avec ${S}{T} = {num(h)}$ cm et ${R}{S} = {num(a)}$ cm. Calcule ${R}{T}$.{en}",
            cor, rep)
    # -- réciproque / contraposée (10)
    tri = [(9, 12, 15), (7, 24, 25), (20, 21, 29), (F("1.2"), F("1.6"), 2), (6, 7, 9), (11, 5, 12), (8, 9, 12), (10, 24, 27), (F("4.5"), 6, F("7.5")), (12, 16, 21)]
    for i, (x, y, z) in enumerate(tri):
        A, B, C = noms[i]
        x, y, z = F(x), F(y), F(z)
        # AB = x, AC = y, BC = z (le plus grand)
        g, d = z * z, x * x + y * y
        ok = g == d
        cor = [f"Le plus grand côté est $[{B}{C}]$ : ${B}{C}^2 = {num(z)}^2 = {num(g)}$.",
               f"${A}{B}^2 + {A}{C}^2 = {num(x)}^2 + {num(y)}^2 = {num(x * x)} + {num(y * y)} = {num(d)}$."]
        if ok:
            cor.append(f"Les deux résultats sont égaux : d'après la réciproque du théorème de Pythagore, le triangle est rectangle en ${A}$.")
        else:
            cor.append(f"${num(g)} \\neq {num(d)}$ : d'après la contraposée du théorème de Pythagore, le triangle n'est pas rectangle.")
        add("intermediaire" if ok else "approfondissement", "reciproque",
            f"Le triangle ${A}{B}{C}$ vérifie ${A}{B} = {num(x)}$ cm, ${A}{C} = {num(y)}$ cm et ${B}{C} = {num(z)}$ cm. Est-il rectangle ?",
            cor, f"Oui, rectangle en ${A}$" if ok else "Non")
    # -- droite des milieux (8)
    for BC in [9, F("7.4"), 13]:
        BC = F(BC)
        add("application", "droite-milieux",
            f"Dans le triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ le milieu de $[AC]$. On sait que $BC = {num(BC)}$ cm. Que peut-on dire de la droite $(IJ)$ ? Calcule $IJ$.",
            ["Dans un triangle, la droite qui passe par les milieux de deux côtés est parallèle au troisième côté, et le segment qui joint ces milieux mesure la moitié du troisième côté.",
             f"$(IJ)$ est parallèle à $(BC)$ et $IJ = {num(BC)} \\div 2 = {num(BC / 2)}$ cm."],
            f"$(IJ) \\parallel (BC)$ ; $IJ = {num(BC / 2)}$ cm")
    for MN in [F("3.7"), F("6.25")]:
        add("intermediaire", "droite-milieux",
            f"Dans le triangle $EFG$, $M$ est le milieu de $[EF]$ et $N$ le milieu de $[EG]$, avec $MN = {num(MN)}$ cm. Calcule $FG$.",
            ["Le segment qui joint les milieux de deux côtés mesure la moitié du troisième côté.", f"$FG = 2 \\times {num(MN)} = {num(2 * MN)}$ cm."],
            f"${num(2 * MN)}$ cm")
    for AC in [10, F("8.6"), 15]:
        AC = F(AC)
        add("approfondissement", "droite-milieux",
            f"Dans le triangle $ABC$, $I$ est le milieu de $[AB]$. La parallèle à $(BC)$ passant par $I$ coupe $[AC]$ en $J$. On sait que $AC = {num(AC)}$ cm. Calcule $AJ$.",
            ["Dans un triangle, la droite qui passe par le milieu d'un côté et qui est parallèle à un deuxième côté coupe le troisième côté en son milieu.",
             f"$J$ est le milieu de $[AC]$ : $AJ = {num(AC)} \\div 2 = {num(AC / 2)}$ cm."],
            f"${num(AC / 2)}$ cm")
    # -- cercle circonscrit (6)
    for a, b in [(6, 8), (5, 12), (9, 12)]:
        h = math.isqrt(a * a + b * b)
        add("intermediaire", "cercle-circonscrit",
            f"Le triangle $ABC$ est rectangle en $A$ avec $AB = {a}$ cm et $AC = {b}$ cm. Où est le centre de son cercle circonscrit ? Quel est son rayon ?",
            [f"Pythagore : $BC^2 = {a}^2 + {b}^2 = {a * a + b * b}$, donc $BC = {h}$ cm.",
             "Le centre du cercle circonscrit à un triangle rectangle est le milieu de l'hypoténuse.",
             f"Rayon : ${h} \\div 2 = {num(F(h, 2))}$ cm."],
            f"au milieu de $[BC]$ ; rayon ${num(F(h, 2))}$ cm")
    add("intermediaire", "cercle-circonscrit", "Le point $M$ est sur le cercle de diamètre $[AB]$ (et distinct de $A$ et $B$). Quelle est la nature du triangle $AMB$ ?",
        ["Si un triangle est inscrit dans un cercle qui a pour diamètre l'un de ses côtés, alors il est rectangle, et ce côté est l'hypoténuse."],
        "rectangle en $M$")
    add("application", "cercle-circonscrit", "Le triangle $EFG$ est rectangle en $E$ et $FG = 11$ cm. Quel est le rayon de son cercle circonscrit ?",
        ["Le cercle circonscrit a pour diamètre l'hypoténuse $[FG]$.", f"Rayon : $11 \\div 2 = {num(F(11, 2))}$ cm."], f"${num(F(11, 2))}$ cm")
    add("approfondissement", "cercle-circonscrit", "Dans un triangle $RST$, le milieu $O$ de $[ST]$ vérifie $OR = OS = OT$. Que peut-on dire du triangle $RST$ ?",
        ["$R$ est sur le cercle de centre $O$ et de diamètre $[ST]$.", "Le triangle est donc rectangle en $R$."], "rectangle en $R$")
    # -- droites remarquables (4)
    dr = [("Comment s'appelle la droite qui passe par un sommet d'un triangle et qui est perpendiculaire au côté opposé ?", "C'est la définition d'une hauteur.", "une hauteur"),
          ("Comment s'appelle la droite qui passe par un sommet d'un triangle et par le milieu du côté opposé ?", "C'est la définition d'une médiane.", "une médiane"),
          ("Que représente le point de concours des trois médiatrices d'un triangle ?", "Il est à égale distance des trois sommets.", "le centre du cercle circonscrit"),
          ("Comment s'appelle la droite qui partage un angle d'un triangle en deux angles de même mesure ?", "C'est la définition d'une bissectrice.", "une bissectrice")]
    for q, j, r in dr:
        add("application", "droites-remarquables", q, [j], r)
    # -- problèmes (4)
    h2 = F(25) - F("1.4") ** 2
    add("probleme", "probleme-pythagore",
        "Une échelle de 5 m est appuyée contre un mur vertical. Son pied est à 1,4 m du mur. À quelle hauteur arrive le haut de l'échelle ?",
        ["Le mur, le sol et l'échelle forment un triangle rectangle ; l'échelle est l'hypoténuse.",
         f"$h^2 = 5^2 - 1{{,}}4^2 = 25 - 1{{,}}96 = {num(h2)}$.", f"$h = \\sqrt{{{num(h2)}}} = {num(F('4.8'))}$ m."],
        "$4{,}8$ m")
    assert F("4.8") ** 2 == h2
    add("probleme", "probleme-pythagore",
        "Un terrain rectangulaire mesure 40 m sur 30 m. Quelle est la longueur de sa diagonale ?",
        ["La diagonale est l'hypoténuse d'un triangle rectangle de côtés 40 m et 30 m.", "$d^2 = 40^2 + 30^2 = 1\\,600 + 900 = 2\\,500$, donc $d = 50$ m."],
        "$50$ m")
    add("probleme", "probleme-pythagore",
        "Avec une corde à 13 nœuds (12 intervalles égaux), on forme un triangle de côtés 3, 4 et 5 intervalles. Pourquoi obtient-on un angle droit ?",
        ["$5^2 = 25$ et $3^2 + 4^2 = 9 + 16 = 25$.", "D'après la réciproque du théorème de Pythagore, le triangle est rectangle : l'angle droit est opposé au côté de 5 intervalles."],
        "car $3^2 + 4^2 = 5^2$ (réciproque de Pythagore)")
    d = arr(math.sqrt(2 * 2 + F("1.5") ** 2), 2)
    add("probleme", "probleme-pythagore",
        "La glissière rectiligne d'un toboggan descend de 1,5 m sur une distance horizontale de 2 m. Quelle est la longueur de la glissière ?",
        ["La glissière est l'hypoténuse d'un triangle rectangle de côtés 2 m et 1,5 m.", f"$L^2 = 2^2 + 1{{,}}5^2 = 4 + 2{{,}}25 = 6{{,}}25$, donc $L = \\sqrt{{6{{,}}25}} = {nb(d, 2)}$ m."],
        f"${nb(d, 2)}$ m")
    return _fin(E)


# ====================================================================
# 3e — CALCUL LITTÉRAL
# ====================================================================
def _pm(p, q):
    """Produit de polynômes (listes de coefficients par degré croissant)."""
    r = [F(0)] * (len(p) + len(q) - 1)
    for i, a in enumerate(p):
        for j, b in enumerate(q):
            r[i + j] += F(a) * F(b)
    return r


def _pa(*ps):
    n = max(len(p) for p in ps)
    r = [F(0)] * n
    for p in ps:
        for i, a in enumerate(p):
            r[i] += F(a)
    return r


def _ptex(p):
    mon = {0: "", 1: "x", 2: "x^2"}
    return poly([(p[i], mon[i]) for i in range(len(p) - 1, -1, -1)])


def _lf(a, b):
    """Facteur (ax + b) entre parenthèses."""
    return f"({lin(a, b)})"


def g3_calcul_litteral():
    E = []

    def add(*t):
        E.append(t)

    # -- double distributivité (8)
    for a, b, c, d in [(1, 3, 1, 5), (2, -1, 1, 4), (3, 2, 2, -5), (1, -7, 1, -2), (4, 1, -1, 3), (-1, 5, 2, 3), (1, 1, 3, -8), (-2, 5, 3, -1)]:
        r = _pm([b, a], [d, c])
        det = poly([(a * c, "x^2"), (a * d, "x"), (b * c, "x"), (b * d, "")])
        add("application" if a > 0 and c > 0 and b > 0 and d > 0 else "intermediaire", "double-distributivite",
            f"Développe et réduis $A = {_lf(a, b)}{_lf(c, d)}$.",
            ["Chaque terme de la première parenthèse multiplie chaque terme de la seconde : $(a + b)(c + d) = ac + ad + bc + bd$.",
             f"$A = {det} = {_ptex(r)}$."],
            f"$A = {_ptex(r)}$")
    # -- identités remarquables : développer (10)
    ids = [(1, 5, "+"), (2, 3, "+"), (1, -4, "-"), (3, -1, "-"), (1, 6, "x"), (5, 2, "x"), (4, -3, "-"), (1, 7, "+"), (2, 5, "x"), (1, -10, "-")]
    for a, b, t in ids:
        if t == "x":
            ex = f"({lin(a, b)})({lin(a, -b)})"
            r = _pm([b, a], [-b, a])
            form = "(a + b)(a - b) = a^2 - b^2"
            det = f"({num(a) if a != 1 else ''}x)^2 - {num(abs(b))}^2" if a != 1 else f"x^2 - {num(abs(b))}^2"
        else:
            ex = f"({lin(a, b)})^2"
            r = _pm([b, a], [b, a])
            form = "(a + b)^2 = a^2 + 2ab + b^2" if b > 0 else "(a - b)^2 = a^2 - 2ab + b^2"
            ax = "x" if a == 1 else f"{a}x"
            sq = "x^2" if a == 1 else f"({ax})^2"
            det = f"{sq} {'+' if b > 0 else '-'} 2 \\times {ax} \\times {abs(b)} + {abs(b)}^2"
        add("application" if a == 1 else "intermediaire", "identites-developper",
            f"Développe à l'aide d'une identité remarquable : $B = {ex}$.",
            [f"On utilise ${form}$.", f"$B = {det} = {_ptex(r)}$."],
            f"$B = {_ptex(r)}$")
    # -- factoriser (10)
    bins = [((1, 1), (2, -3), (1, 4), 1), ((2, -5), (1, 3), (4, -1), -1), ((1, -2), (1, -2), (3, 1), 1)]
    for (p, q), (u, v), (w, z), s in bins:
        P = [q, p]
        total = _pa(_pm(P, [v, u]), [s * x for x in _pm(P, [z, w])])
        reste = (u + s * w, v + s * z)
        if (u, v) == (p, q):
            ex = f"{_lf(p, q)}^2 {'+' if s > 0 else '-'} {_lf(p, q)}{_lf(w, z)}"
        else:
            ex = f"{_lf(p, q)}{_lf(u, v)} {'+' if s > 0 else '-'} {_lf(p, q)}{_lf(w, z)}"
        assert _pm(P, [reste[1], reste[0]]) == total
        inner = f"{lin(u, v)} {'+' if s > 0 else '-'} {_lf(w, z) if s < 0 else lin(w, z)}"
        add("approfondissement", "factoriser",
            f"Factorise $C = {ex}$.",
            [f"Le facteur commun est ${_lf(p, q)}$.",
             f"$C = {_lf(p, q)}[{inner}] = {_lf(p, q)}{_lf(*reste)}$."],
            f"$C = {_lf(p, q)}{_lf(*reste)}$")
    # a^2 - b^2 et carrés
    dif = [(1, 7), (3, 5), (2, 9)]
    for a, b in dif:
        ex = _ptex([-b * b, 0, a * a])
        ax = "x" if a == 1 else f"{a}x"
        add("intermediaire", "factoriser",
            f"Factorise $C = {ex}$.",
            [f"On reconnaît $a^2 - b^2$ avec $a = {ax}$ et $b = {b}$ : $a^2 - b^2 = (a - b)(a + b)$.",
             f"$C = ({ax} - {b})({ax} + {b})$."],
            f"$C = ({ax} - {b})({ax} + {b})$")
    add("approfondissement", "factoriser", "Factorise $C = (x + 2)^2 - 16$.",
        ["On reconnaît $a^2 - b^2$ avec $a = x + 2$ et $b = 4$.", "$C = (x + 2 - 4)(x + 2 + 4) = (x - 2)(x + 6)$."],
        "$C = (x - 2)(x + 6)$")
    assert _pa(_pm([2, 1], [2, 1]), [-16]) == _pm([-2, 1], [6, 1])
    for a, b in [(1, 5), (2, -3)]:
        p = _pm([b, a], [b, a])
        ax = "x" if a == 1 else f"{a}x"
        add("intermediaire", "factoriser",
            f"Factorise $C = {_ptex(p)}$.",
            [f"On reconnaît $a^2 {'+' if b > 0 else '-'} 2ab + b^2$ avec $a = {ax}$ et $b = {abs(b)}$.",
             f"$C = ({lin(a, b)})^2$."],
            f"$C = ({lin(a, b)})^2$")
    add("application", "factoriser", "Factorise $C = 6x^2 - 9x$.",
        ["$6x^2 = 3x \\times 2x$ et $9x = 3x \\times 3$ : le facteur commun est $3x$.", "$C = 3x(2x - 3)$."],
        "$C = 3x(2x - 3)$")
    # -- équation produit nul (8)
    pn = [((1, -3), (1, 5)), ((2, 1), (1, -4)), ((1, 0), (3, -6)), ((5, -2), (1, 4)), ((-3, 9), (2, 7))]
    for (a, b), (c, d) in pn:
        s1, s2 = F(-b, a), F(-d, c)
        g = "x" if (a, b) == (1, 0) else _lf(a, b)
        sols = sorted({s1, s2})
        add("intermediaire", "produit-nul",
            f"Résous l'équation ${g}{_lf(c, d)} = 0$.",
            ["Un produit est nul si et seulement si l'un au moins de ses facteurs est nul.",
             (f"${lin(a, b)} = 0$ donne $x = {fl(s1)}$" if b else "Le facteur $x$ est nul pour $x = 0$") + f" ; ${lin(c, d)} = 0$ donne $x = {fl(s2)}$."],
            "$x = " + "$ ou $x = ".join(fl(s) for s in sols) + "$")
    add("approfondissement", "produit-nul", "Résous l'équation $x^2 - 16 = 0$.",
        ["On factorise : $x^2 - 16 = (x - 4)(x + 4)$.", "$(x - 4)(x + 4) = 0$ donne $x = 4$ ou $x = -4$."], "$x = -4$ ou $x = 4$")
    add("approfondissement", "produit-nul", "Résous l'équation $3x^2 - 12x = 0$.",
        ["On factorise : $3x^2 - 12x = 3x(x - 4)$.", "$3x = 0$ donne $x = 0$ ; $x - 4 = 0$ donne $x = 4$."], "$x = 0$ ou $x = 4$")
    add("approfondissement", "produit-nul", "Résous l'équation $(2x - 3)^2 = 0$.",
        ["$(2x - 3)^2 = (2x - 3)(2x - 3)$ : les deux facteurs sont égaux.", f"$2x - 3 = 0$ donne $x = {fl(F(3, 2))}$ : une seule solution."],
        f"$x = {fl(F(3, 2))}$")
    # -- inéquations ax ≥ b (8)
    ineq = [(3, ">=", 12), (-2, ">=", 6), (5, "<", -15), (-4, "<=", 10), (7, ">", 3), (-1, ">", -8), (F("0.5"), "<=", 4), (-6, "<", -9)]
    sym = {">=": "\\geqslant", "<=": "\\leqslant", ">": ">", "<": "<"}
    inv = {">=": "<=", "<=": ">=", ">": "<", "<": ">"}
    for a, op, b in ineq:
        a, b = F(a), F(b)
        s = b / a
        op2 = op if a > 0 else inv[op]
        coef = "-x" if a == -1 else f"{num(a)}x"
        add("intermediaire" if a > 0 else "approfondissement", "inequation",
            f"Résous l'inéquation ${coef} {sym[op]} {num(b)}$.",
            [f"On divise les deux membres par ${num(a)}$, qui est {'positif : le sens ne change pas' if a > 0 else 'négatif : le sens de l’inégalité s’inverse'}.".replace("’", "'"),
             f"$x {sym[op2]} {fl(s)}$" + (f", soit $x {sym[op2]} {num(s)}$." if fl(s) != num(s) else ".")],
            f"$x {sym[op2]} {fl(s)}$")
    # -- démontrer avec le calcul littéral (6)
    add("approfondissement", "demonstration", "Démontre que, pour tout nombre $n$, $(n + 1)^2 - n^2 = 2n + 1$. Déduis-en $101^2 - 100^2$ sans calculatrice.",
        ["$(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$.", "Avec $n = 100$ : $101^2 - 100^2 = 2 \\times 100 + 1 = 201$."], "$201$")
    assert 101 ** 2 - 100 ** 2 == 201
    add("approfondissement", "demonstration", "Démontre que la somme de trois nombres entiers consécutifs est toujours un multiple de 3.",
        ["On note $n$, $n + 1$ et $n + 2$ ces nombres.", "$n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$ : c'est un multiple de 3."],
        "$3(n + 1)$, multiple de 3")
    add("approfondissement", "demonstration", "Démontre que, pour tout nombre $x$, $(x + 3)^2 - (x - 3)^2 = 12x$.",
        ["$(x + 3)^2 = x^2 + 6x + 9$ et $(x - 3)^2 = x^2 - 6x + 9$.", "Différence : $x^2 + 6x + 9 - x^2 + 6x - 9 = 12x$."], "$12x$")
    assert _pa(_pm([3, 1], [3, 1]), [-c for c in _pm([-3, 1], [-3, 1])]) == [0, 12, 0]
    add("intermediaire", "demonstration", "Calcule $99^2$ sans calculatrice, en écrivant $99 = 100 - 1$.",
        ["$(100 - 1)^2 = 100^2 - 2 \\times 100 \\times 1 + 1^2$.", f"$= 10\\,000 - 200 + 1 = {nb(99 ** 2)}$."], f"${nb(99 ** 2)}$")
    add("intermediaire", "demonstration", "Calcule $103 \\times 97$ sans calculatrice.",
        ["$103 \\times 97 = (100 + 3)(100 - 3) = 100^2 - 3^2$.", f"$= 10\\,000 - 9 = {nb(103 * 97)}$."], f"${nb(103 * 97)}$")
    add("probleme", "demonstration", "Un carré a un côté de $(x + 4)$ cm. On retire un carré de côté $x$ cm. Exprime l'aire restante en fonction de $x$, puis calcule-la pour $x = 6$.",
        ["Aire restante : $(x + 4)^2 - x^2 = x^2 + 8x + 16 - x^2 = 8x + 16$.", f"Pour $x = 6$ : $8 \\times 6 + 16 = {8 * 6 + 16}$ cm²."],
        f"$8x + 16$ ; ${8 * 6 + 16}$ cm²")
    return _fin(E)


# ====================================================================
# 3e — FONCTIONS
# ====================================================================
def g3_fonctions():
    E = []

    def add(*t):
        E.append(t)

    # -- images (8)
    ims = [("3x - 7", "3 \\times {X} - 7", "3*x-7", -2), ("x^2 - 3x", "{X}^2 - 3 \\times {X}", "x*x-3*x", -4),
           ("-2x + 5", "-2 \\times {X} + 5", "-2*x+5", F("1.5")), ("x^2", "{X}^2", "x*x", -6),
           ("(x + 1)(x - 2)", "({X} + 1)({X} - 2)", "(x+1)*(x-2)", 3), ("0{,}5x + 4", "0{,}5 \\times {X} + 4", "F(1,2)*x+4", -6),
           ("2x^2 - 1", "2 \\times {X}^2 - 1", "2*x*x-1", -3), ("5 - x^2", "5 - {X}^2", "5-x*x", F("0.5"))]
    for ex, tpl, py, x in ims:
        v = _ev(py, x=x)
        add("application", "image",
            f"Soit $f$ la fonction définie par $f(x) = {ex}$. Calcule l'image de ${num(x)}$ par $f$.",
            [f"On remplace $x$ par ${num(x)}$ : $f({num(x)}) = {tpl.replace('{X}', par(x))} = {num(v)}$."],
            f"$f({num(x)}) = {num(v)}$")
    # -- antécédents (8)
    ants = [(3, -5, 13), (-2, 7, -3), (4, 0, 10), (F("0.5"), 1, 4), (-1, 5, 8)]
    for a, b, y in ants:
        a, b, y = F(a), F(b), F(y)
        x = (y - b) / a
        add("intermediaire", "antecedent",
            f"Soit $f(x) = {lin(a, b)}$. Calcule l'antécédent de ${num(y)}$ par $f$.",
            [f"On résout $f(x) = {num(y)}$, c'est-à-dire ${lin(a, b)} = {num(y)}$.",
             (f"${lin(a, 0)} = {num(y - b)}$, donc " if b else "On divise : ") + f"$x = {num(y - b)} \\div {par(a)} = {num(x)}$.",
             f"Vérification : $f({num(x)}) = {num(a * x + b)}$."],
            f"${num(x)}$")
    for y in [49, 0, -4]:
        r = math.isqrt(y) if y >= 0 else None
        if y > 0:
            cor = [f"On cherche les nombres dont le carré vaut ${y}$.", f"$7^2 = 49$ et $(-7)^2 = 49$."]
            rep = "$-7$ et $7$"
        elif y == 0:
            cor = ["Seul $0$ a pour carré $0$."]
            rep = "$0$ (un seul antécédent)"
        else:
            cor = [f"Un carré n'est jamais négatif : aucun nombre n'a pour carré ${y}$."]
            rep = "aucun antécédent"
        add("approfondissement", "antecedent",
            f"Soit $g$ la fonction carré : $g(x) = x^2$. Donne le ou les antécédents de ${y}$ par $g$.", cor, rep)
    # -- fonctions linéaires (8)
    for x0, y0 in [(4, 10), (-3, 12), (5, -7)]:
        a = F(y0, x0)
        add("intermediaire", "lineaire",
            f"$f$ est une fonction linéaire telle que $f({x0}) = {y0}$. Détermine l'expression de $f(x)$.",
            [f"$f(x) = ax$ et $f({x0}) = a \\times {par(x0)} = {y0}$.", f"$a = {y0} \\div {par(x0)} = {num(a)}$."],
            f"$f(x) = {lin(a, 0)}$")
    for p, sens in [(20, "augmenter"), (15, "diminuer"), (5, "augmenter")]:
        c = 1 + F(p, 100) if sens == "augmenter" else 1 - F(p, 100)
        add("intermediaire", "lineaire",
            f"Quelle fonction linéaire permet {'d' + chr(39) + 'augmenter' if sens == 'augmenter' else 'de diminuer'} un prix de {p} % ? Calcule le nouveau prix d'un article à 80 €.",
            [f"{sens.capitalize()} de {p} %, c'est multiplier par $1 {'+' if sens == 'augmenter' else '-'} \\dfrac{{{p}}}{{100}} = {num(c)}$ : $f(x) = {num(c)}x$.",
             f"$f(80) = {num(c)} \\times 80 = {num(c * 80)}$ €."],
            f"$f(x) = {num(c)}x$ ; ${num(c * 80)}$ €")
    add("application", "lineaire", "Des pommes coûtent 3,50 € le kilo. On note $f(x)$ le prix de $x$ kg. Donne $f(x)$ et calcule le prix de 2,4 kg.",
        ["Le prix est proportionnel à la masse : $f(x) = 3{,}5x$ (fonction linéaire).", f"$f(2{{,}}4) = 3{{,}}5 \\times 2{{,}}4 = {eur(F('3.5') * F('2.4'))}$ €."],
        f"$f(x) = 3{{,}}5x$ ; ${eur(F('3.5') * F('2.4'))}$ €")
    add("application", "lineaire", "Vrai ou faux : la représentation graphique d'une fonction linéaire est une droite qui passe par l'origine du repère.",
        ["$f(x) = ax$ donne $f(0) = 0$ : le point $(0\\,;0)$ est sur la droite."], "Vrai")
    # -- coefficients d'une fonction affine (8)
    pts = [((1, 5), (3, 11)), ((0, -2), (4, 6)), ((-1, 7), (2, -2)), ((2, 4), (6, 6)), ((10, 35), (20, 50)), ((0, 3), (5, 3)), ((-3, -5), (1, 3)), ((1, -1), (5, -9))]
    for (x1, y1), (x2, y2) in pts:
        a = F(y2 - y1, x2 - x1)
        b = y1 - a * x1
        add("approfondissement", "affine-coefficients",
            f"$f$ est une fonction affine telle que $f({x1}) = {y1}$ et $f({x2}) = {y2}$. Détermine $f(x) = ax + b$.",
            [f"$a = \\dfrac{{f({x2}) - f({x1})}}{{{x2} - {par(x1)}}} = \\dfrac{{{y2} - {par(y1)}}}{{{x2 - x1}}} = {num(a)}$.",
             f"$b = f({x1}) - a \\times {par(x1)} = {y1} - {par(a)} \\times {par(x1)} = {num(b)}$."],
            f"$f(x) = {lin(a, b) if a != 0 else num(b)}$")
    # -- équations et inéquations (8)
    for a, b, c, d in [(2, 3, 5, -9), (-1, 7, 2, 1)]:
        x = F(d - b, a - c)
        y = a * x + b
        add("intermediaire", "resoudre",
            f"Soit $f(x) = {lin(a, b)}$ et $g(x) = {lin(c, d)}$. Pour quelle valeur de $x$ a-t-on $f(x) = g(x)$ ? Quel est le point d'intersection des deux droites ?",
            [f"${lin(a, b)} = {lin(c, d)}$ donne ${lin(a - c, 0)} = {d - b}$, donc $x = {num(x)}$.",
             f"$f({num(x)}) = {num(y)}$ : les droites se coupent au point $({num(x)}\\,;{num(y)})$."],
            f"$x = {num(x)}$ ; point $({num(x)}\\,;{num(y)})$")
    for a, b, op, k in [(3, -2, ">=", 7), (-2, 1, ">", 9), (4, 0, "<=", 10)]:
        a, b, k = F(a), F(b), F(k)
        s = (k - b) / a
        sym = {">=": "\\geqslant", ">": ">", "<=": "\\leqslant"}
        inv = {">=": "\\leqslant", ">": "<", "<=": "\\geqslant"}
        res = sym[op] if a > 0 else inv[op]
        add("approfondissement", "resoudre",
            f"Soit $f(x) = {lin(a, b)}$. Résous l'inéquation $f(x) {sym[op]} {num(k)}$.",
            [(f"${lin(a, b)} {sym[op]} {num(k)}$ donne ${lin(a, 0)} {sym[op]} {num(k - b)}$." if b else f"${lin(a, 0)} {sym[op]} {num(k)}$."),
             f"On divise par ${num(a)}$ ({'positif, le sens ne change pas' if a > 0 else 'négatif, le sens s’inverse'}) : $x {res} {num(s)}$.".replace("’", "'")],
            f"$x {res} {num(s)}$")
    add("intermediaire", "resoudre", "Soit $f(x) = 5x - 15$. En quel point la droite représentant $f$ coupe-t-elle l'axe des abscisses ?",
        ["Sur l'axe des abscisses, l'ordonnée est nulle : on résout $5x - 15 = 0$.", "$x = 3$ : le point est $(3\\,;0)$."], "$(3\\,;0)$")
    add("intermediaire", "resoudre", "Résous l'équation $x^2 = 9$ (on peut s'aider de la courbe de la fonction carré).",
        ["La courbe de la fonction carré coupe la droite horizontale $y = 9$ en deux points.", "$3^2 = 9$ et $(-3)^2 = 9$."], "$x = -3$ ou $x = 3$")
    add("approfondissement", "resoudre", "Soit $f(x) = 2x - 1$ et $g(x) = 2x + 3$. Les droites qui les représentent se coupent-elles ?",
        ["Elles ont le même coefficient $a = 2$ : elles sont parallèles.", "$2x - 1 = 2x + 3$ donne $-1 = 3$, impossible : pas de point d'intersection."], "Non, elles sont parallèles")
    # -- problèmes (10)
    A = lambda n: 5 * n
    B = lambda n: 30 + 2 * n
    add("probleme", "probleme-fonctions", "Cinéma : tarif A, 5 € la séance ; tarif B, carte de 30 € puis 2 € la séance. Combien paie-t-on pour 8 séances avec chaque tarif ? Lequel est le plus avantageux ?",
        ["$A(n) = 5n$ et $B(n) = 30 + 2n$.", f"$A(8) = {A(8)}$ € et $B(8) = {B(8)}$ €."], f"$A$ : ${A(8)}$ € ; $B$ : ${B(8)}$ € ; le tarif A")
    add("probleme", "probleme-fonctions", "Cinéma : tarif A, 5 € la séance ; tarif B, carte de 30 € puis 2 € la séance. Pour combien de séances les deux tarifs coûtent-ils le même prix ?",
        ["On résout $5n = 30 + 2n$.", "$3n = 30$, donc $n = 10$ (les deux coûtent $50$ €)."], "$10$ séances")
    add("probleme", "probleme-fonctions", "Cinéma : tarif A, 5 € la séance ; tarif B, carte de 30 € puis 2 € la séance. À partir de combien de séances le tarif B est-il strictement moins cher ?",
        ["On résout $30 + 2n < 5n$, soit $30 < 3n$, donc $n > 10$.", "Le nombre de séances est entier : à partir de 11 séances."], "à partir de $11$ séances")
    LA = lambda d: 50 + F("0.2") * d
    LB = lambda d: F("0.45") * d
    add("probleme", "probleme-fonctions", "Location de voiture : formule A, 50 € plus 0,20 € par km ; formule B, 0,45 € par km. Calcule le prix de chaque formule pour 150 km.",
        ["$A(d) = 50 + 0{,}2d$ (affine) et $B(d) = 0{,}45d$ (linéaire).", f"$A(150) = {num(LA(150))}$ € et $B(150) = {eur(LB(150))}$ €."],
        f"$A$ : ${num(LA(150))}$ € ; $B$ : ${eur(LB(150))}$ €")
    d = F(50) / (F("0.45") - F("0.2"))
    add("probleme", "probleme-fonctions", "Location de voiture : formule A, 50 € plus 0,20 € par km ; formule B, 0,45 € par km. Pour quelle distance les deux formules coûtent-elles le même prix ?",
        ["On résout $50 + 0{,}2d = 0{,}45d$.", f"$0{{,}}25d = 50$, donc $d = {num(d)}$ km."], f"${num(d)}$ km")
    add("probleme", "probleme-fonctions", "Location de voiture : formule A, 50 € plus 0,20 € par km ; formule B, 0,45 € par km. Quelle formule choisir pour 300 km ?",
        [f"$A(300) = {num(LA(300))}$ € et $B(300) = {num(LB(300))}$ €."], "la formule A")
    el = lambda x: F("0.25") * x + 12
    add("probleme", "probleme-fonctions", "Un abonnement d'électricité coûte 12 € par mois, plus 0,25 € par kWh consommé. Exprime le prix mensuel $f(x)$ pour $x$ kWh, puis calcule l'image de 300.",
        ["$f(x) = 0{,}25x + 12$ : fonction affine.", f"$f(300) = 0{{,}}25 \\times 300 + 12 = {num(el(300))}$ €."], f"$f(x) = 0{{,}}25x + 12$ ; ${num(el(300))}$ €")
    x = (F(62) - 12) / F("0.25")
    add("probleme", "probleme-fonctions", "Un abonnement d'électricité coûte 12 € par mois, plus 0,25 € par kWh consommé. Une facture mensuelle s'élève à 62 €. Combien de kWh ont été consommés ?",
        ["On cherche l'antécédent de $62$ par $f(x) = 0{,}25x + 12$.", f"$0{{,}}25x = 50$, donc $x = {num(x)}$ kWh."], f"${num(x)}$ kWh")
    fa = lambda c: F("1.8") * c + 32
    add("probleme", "probleme-fonctions", "Pour convertir des degrés Celsius en degrés Fahrenheit, on utilise $f(c) = 1{,}8c + 32$. Quelle est la température en °F quand il fait 25 °C ?",
        [f"$f(25) = 1{{,}}8 \\times 25 + 32 = {num(fa(25))}$."], f"${num(fa(25))}$ °F")
    c = (F(212) - 32) / F("1.8")
    add("probleme", "probleme-fonctions", "Pour convertir des degrés Celsius en degrés Fahrenheit, on utilise $f(c) = 1{,}8c + 32$. L'eau bout à 212 °F. Quelle est cette température en °C ?",
        ["On cherche l'antécédent de $212$ : $1{,}8c + 32 = 212$.", f"$1{{,}}8c = 180$, donc $c = {num(c)}$."], f"${num(c)}$ °C")
    return _fin(E)


# ====================================================================
# 3e — MULTIPLES ET DIVISEURS
# ====================================================================
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


def _ftex(f):
    return TIMES.join(f"{p}^{{{e}}}" if e > 1 else str(p) for p, e in sorted(f.items()))


def _premiers_jusqua(n):
    return [p for p in range(2, n + 1) if all(p % q for q in range(2, int(p ** 0.5) + 1))]


def g3_multiples():
    E = []

    def add(*t):
        E.append(t)

    # -- critères de divisibilité (8)
    for n in [4572, 3105, 2340, 7281, 1998, 5555, 6012, 12345]:
        s = sum(int(c) for c in str(n))
        ds = [d for d in (2, 3, 5, 9, 10) if n % d == 0]
        cor = [f"Dernier chiffre : ${n % 10}$ ; somme des chiffres : ${' + '.join(str(n))} = {s}$.",
               f"Par 2 : {'oui' if n % 2 == 0 else 'non'} ; par 3 : {'oui' if n % 3 == 0 else 'non'} ; par 5 : {'oui' if n % 5 == 0 else 'non'} ; par 9 : {'oui' if n % 9 == 0 else 'non'} ; par 10 : {'oui' if n % 10 == 0 else 'non'}."]
        rep = ("par " + ", ".join(str(d) for d in ds[:-1]) + (" et " if len(ds) > 1 else "") + str(ds[-1])) if ds else "par aucun d'eux"
        add("application", "divisibilite", f"Parmi 2, 3, 5, 9 et 10, par quels nombres ${nb(n)}$ est-il divisible ?", cor, rep)
    # -- nombres premiers (8)
    for n in [91, 97, 51, 89, 119, 113, 1, 57]:
        if n == 1:
            add("intermediaire", "nombres-premiers", "Le nombre $1$ est-il premier ?",
                ["Un nombre premier a exactement deux diviseurs : $1$ et lui-même.", "$1$ n'a qu'un seul diviseur : il n'est pas premier."], "Non")
            continue
        f = _facteurs(n)
        ps = [p for p in _premiers_jusqua(math.isqrt(n))]
        if len(f) == 1 and list(f.values())[0] == 1:
            add("intermediaire", "nombres-premiers", f"Le nombre ${n}$ est-il premier ?",
                [f"On teste les nombres premiers dont le carré ne dépasse pas ${n}$ : ${', '.join(str(p) for p in ps)}$.",
                 f"Aucun ne divise ${n}$ : ${n}$ est premier."], "Oui")
        else:
            p = min(f)
            add("intermediaire", "nombres-premiers", f"Le nombre ${n}$ est-il premier ?",
                [f"${n} = {p} \\times {n // p}$ : il a d'autres diviseurs que $1$ et lui-même."], "Non")
    # -- décomposition en facteurs premiers (10)
    for n in [360, 84, 126, 220, 1001, 588, 450, 1024, 945, 504]:
        f = _facteurs(n)
        etapes, m = [], n
        for p in sorted(f):
            for _ in range(f[p]):
                if m // p == 1:
                    break
                etapes.append(f"{nb(m)} = {p} \\times {nb(m // p)}")
                m //= p
        add("intermediaire" if n < 500 else "approfondissement", "decomposition",
            f"Décompose ${nb(n)}$ en produit de facteurs premiers.",
            ["On divise par le plus petit nombre premier possible, encore et encore.", "$" + "$ ; $".join(etapes[:4]) + ("$ ; …" if len(etapes) > 4 else "$"),
             f"${nb(n)} = {_ftex(f)}$."],
            f"${nb(n)} = {_ftex(f)}$")
    # -- diviseurs (6)
    for n in [36, 60, 28, 45]:
        ds = [d for d in range(1, n + 1) if n % d == 0]
        add("application", "diviseurs", f"Donne la liste de tous les diviseurs de ${n}$.",
            ["On cherche les produits de deux entiers égaux à " + str(n) + " : " + " ; ".join(f"${d} \\times {n // d}$" for d in ds if d * d <= n) + "."],
            "$" + " ; ".join(str(d) for d in ds) + "$")
    add("intermediaire", "diviseurs", "Combien le nombre $72$ a-t-il de diviseurs ?",
        ["$72 = 1 \\times 72 = 2 \\times 36 = 3 \\times 24 = 4 \\times 18 = 6 \\times 12 = 8 \\times 9$.",
         f"Diviseurs : ${' ; '.join(str(d) for d in range(1, 73) if 72 % d == 0)}$."],
        f"${sum(1 for d in range(1, 73) if 72 % d == 0)}$ diviseurs")
    add("intermediaire", "diviseurs", "Vrai ou faux : $28$ est égal à la somme de ses diviseurs autres que lui-même.",
        [f"Diviseurs de 28 autres que 28 : $1$, $2$, $4$, $7$, $14$.", f"$1 + 2 + 4 + 7 + 14 = {1 + 2 + 4 + 7 + 14}$ : c'est vrai (28 est un nombre « parfait »)."],
        "Vrai")
    # -- fractions irréductibles par décomposition (8)
    for a, b in [(84, 126), (360, 504), (220, 588), (90, 150), (45, 60), (1001, 1309), (252, 378), (75, 105)]:
        fa, fb = _facteurs(a), _facteurs(b)
        com = {p: min(fa[p], fb[p]) for p in fa if p in fb}
        g = math.gcd(a, b)
        add("intermediaire", "fraction-irreductible",
            f"Rends irréductible la fraction $\\dfrac{{{nb(a)}}}{{{nb(b)}}}$ en décomposant le numérateur et le dénominateur.",
            [f"${nb(a)} = {_ftex(fa)}$ et ${nb(b)} = {_ftex(fb)}$.",
             f"Facteurs communs : ${_ftex(com)} = {g}$. On simplifie par ${g}$ : $\\dfrac{{{nb(a)}}}{{{nb(b)}}} = {fl(F(a, b))}$."],
            f"${fl(F(a, b))}$")
    # -- problèmes (10)
    g = math.gcd(84, 126)
    add("probleme", "probleme-arithmetique",
        "Un fleuriste a 84 roses et 126 tulipes. Il veut faire le plus grand nombre de bouquets identiques en utilisant toutes les fleurs. Combien de bouquets ? Composition de chacun ?",
        ["Le nombre de bouquets divise 84 et 126 : on cherche le plus grand diviseur commun.", f"$84 = 2^2 \\times 3 \\times 7$ et $126 = 2 \\times 3^2 \\times 7$ : le plus grand diviseur commun est $2 \\times 3 \\times 7 = {g}$."],
        f"${g}$ bouquets de ${84 // g}$ roses et ${126 // g}$ tulipes")
    g = math.gcd(150, 225)
    add("probleme", "probleme-arithmetique",
        "On répartit 150 bonbons et 225 chocolats dans des sachets identiques, sans reste, en faisant le plus de sachets possible. Combien de sachets ?",
        [f"$150 = 2 \\times 3 \\times 5^2$ et $225 = 3^2 \\times 5^2$ : plus grand diviseur commun $3 \\times 5^2 = {g}$."],
        f"${g}$ sachets de ${150 // g}$ bonbons et ${225 // g}$ chocolats")
    g = math.gcd(48, 36)
    add("probleme", "probleme-arithmetique",
        "Pour un défilé, 48 garçons et 36 filles se placent en rangs identiques (même nombre de garçons et même nombre de filles dans chaque rang). Quel est le plus grand nombre de rangs possible ?",
        [f"$48 = 2^4 \\times 3$ et $36 = 2^2 \\times 3^2$ : plus grand diviseur commun $2^2 \\times 3 = {g}$."],
        f"${g}$ rangs de ${48 // g}$ garçons et ${36 // g}$ filles")
    g = math.gcd(90, 150)
    add("probleme", "probleme-arithmetique",
        "Un menuisier découpe une plaque rectangulaire de 90 cm sur 150 cm en carrés identiques, les plus grands possible, sans perte. Quel est le côté d'un carré ? Combien de carrés obtient-il ?",
        ["Le côté doit diviser 90 et 150.", f"$90 = 2 \\times 3^2 \\times 5$ et $150 = 2 \\times 3 \\times 5^2$ : plus grand diviseur commun $2 \\times 3 \\times 5 = {g}$ cm.",
         f"Nombre de carrés : ${90 // g} \\times {150 // g} = {(90 // g) * (150 // g)}$."],
        f"côté ${g}$ cm ; ${(90 // g) * (150 // g)}$ carrés")
    l = 12 * 18 // math.gcd(12, 18)
    add("probleme", "probleme-arithmetique",
        "Deux roues dentées s'engrènent : l'une a 12 dents, l'autre 18. Au bout de combien de dents défilées retrouvent-elles leur position de départ ? Combien de tours chacune a-t-elle fait ?",
        ["On cherche le plus petit multiple commun non nul de 12 et 18.", f"Multiples de 18 : 18, 36 ; et $36 = 3 \\times 12$ : c'est ${l}$."],
        f"${l}$ dents : ${l // 12}$ tours pour la petite, ${l // 18}$ pour la grande")
    l = 15 * 20 // math.gcd(15, 20)
    add("probleme", "probleme-arithmetique",
        "Un phare clignote toutes les 15 s, un autre toutes les 20 s. Ils clignotent ensemble à un instant donné. Au bout de combien de secondes clignoteront-ils de nouveau ensemble ?",
        [f"Multiples de 20 : 20, 40, 60 ; $60$ est aussi un multiple de 15."], f"${l}$ s")
    l = 14 * 21 // math.gcd(14, 21)
    add("probleme", "probleme-arithmetique",
        "La ligne de bus A passe toutes les 14 min et la ligne B toutes les 21 min. Les deux bus partent ensemble à 7 h. À quelle heure repartiront-ils ensemble ?",
        [f"Plus petit multiple commun de 14 et 21 : $14 = 2 \\times 7$, $21 = 3 \\times 7$, donc $2 \\times 3 \\times 7 = {l}$ min."],
        f"à 7 h {l}")
    l = 6 * 15 // math.gcd(6, 15)
    add("probleme", "probleme-arithmetique",
        "Deux comètes reviennent près de la Terre, l'une tous les 6 ans, l'autre tous les 15 ans. On les a vues la même année en 2020. En quelle année pourra-t-on les revoir la même année ?",
        [f"Plus petit multiple commun de 6 et 15 : ${l}$ ans."], f"en ${2020 + l}$")
    r = F(5, 12) + F(7, 18)
    add("intermediaire", "probleme-arithmetique",
        "Calcule $\\dfrac{5}{12} + \\dfrac{7}{18}$ en cherchant le plus petit dénominateur commun.",
        ["$12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$ : plus petit multiple commun $2^2 \\times 3^2 = 36$.", f"$\\dfrac{{15}}{{36}} + \\dfrac{{14}}{{36}} = {fl(r)}$."],
        f"${fl(r)}$")
    r = F(7, 30) + F(4, 45)
    add("intermediaire", "probleme-arithmetique",
        "Calcule $\\dfrac{7}{30} + \\dfrac{4}{45}$ en cherchant le plus petit dénominateur commun.",
        ["$30 = 2 \\times 3 \\times 5$ et $45 = 3^2 \\times 5$ : plus petit multiple commun $2 \\times 3^2 \\times 5 = 90$.", f"$\\dfrac{{21}}{{90}} + \\dfrac{{8}}{{90}} = {fl(r)}$."],
        f"${fl(r)}$")
    return _fin(E)


# ====================================================================
# 3e — NOMBRES RATIONNELS
# ====================================================================
def g3_rationnels():
    E = []

    def add(*t):
        E.append(t)

    # -- fraction irréductible (8)
    for a, b in [(-45, 60), (56, -84), (121, 143), (98, 126), (26, 39)]:
        f = F(a, b)
        g = math.gcd(abs(a), abs(b))
        sg = "Le signe se met devant la fraction (un seul signe « moins »). " if (a < 0) != (b < 0) else ""
        add("application" if g < 20 else "intermediaire", "irreductible",
            f"Écris sous forme irréductible : $\\dfrac{{{a}}}{{{b}}}$.",
            [sg + f"Le plus grand diviseur commun de ${abs(a)}$ et ${abs(b)}$ est ${g}$.",
             f"$\\dfrac{{{a}}}{{{b}}} = {fl(f)}$."],
            f"${fl(f)}$")
    for a, b in [(35, 48), (51, 85), (77, 120)]:
        g = math.gcd(a, b)
        fa, fb = _facteurs(a), _facteurs(b)
        add("intermediaire", "irreductible", f"La fraction $\\dfrac{{{a}}}{{{b}}}$ est-elle irréductible ?",
            [f"${a} = {_ftex(fa)}$ et ${b} = {_ftex(fb)}$.",
             "Aucun facteur premier commun : elle est irréductible." if g == 1 else f"Facteur commun ${g}$ : $\\dfrac{{{a}}}{{{b}}} = {fl(F(a, b))}$."],
            "Oui" if g == 1 else f"Non, elle vaut ${fl(F(a, b))}$")
    # -- sommes et différences (8)
    for a, op, b in [(F(5, 6), "+", F(7, 15)), (F(3, 4), "-", F(11, 12)), (F(-2, 9), "+", F(5, 6)), (F(7, 10), "-", F(-3, 4)),
                     (F(1), "-", F(5, 8)), (F(2), "+", F(3, 7)), (F(11, 12), "-", F(5, 18)), (F(-3, 8), "-", F(5, 12))]:
        r = a + b if op == "+" else a - b
        d = a.denominator * b.denominator // math.gcd(a.denominator, b.denominator)
        a2, b2 = a * d, b * d
        add("application" if a > 0 and b > 0 else "intermediaire", "somme-difference",
            f"Calcule et donne le résultat sous forme irréductible : ${fl(a)} {op} {parf(b)}$.",
            [f"Dénominateur commun : ${d}$.",
             f"$\\dfrac{{{int(a2)}}}{{{d}}} {op} " + (f"\\dfrac{{{int(b2)}}}{{{d}}}" if b2 >= 0 else f"\\left(-\\dfrac{{{int(-b2)}}}{{{d}}}\\right)") + f" = {fl(r)}$."],
            f"${fl(r)}$")
    # -- produits et quotients (8)
    for a, op, b in [(F(-14, 15), "*", F(10, 21)), (F(9, 16), "/", F(-27, 8)), (F(-5, 12), "*", F(-18, 25)), (F(22, 7), "/", F(11, 14)),
                     (F(-3), "*", F(7, 12)), (F(4, 9), "/", F(-8)), (F(25, 6), "*", F(9, 35)), (F(-1, 6), "/", F(-2, 3))]:
        r = a * b if op == "*" else a / b
        if op == "*":
            cor = ["On multiplie les numérateurs entre eux et les dénominateurs entre eux, en simplifiant avant de calculer.",
                   f"${parf(a)} \\times {parf(b)} = {fl(r)}$."]
        else:
            cor = ["Diviser par une fraction, c'est multiplier par son inverse.", f"${parf(a)} \\times {parf(1 / b)} = {fl(r)}$."]
        add("intermediaire", "produit-quotient",
            f"Calcule et donne le résultat sous forme irréductible : ${parf(a)} " + ("\\times" if op == "*" else "\\div") + f" {parf(b)}$.",
            cor, f"${fl(r)}$")
    # -- comparer (8)
    for a, b in [(F(5, 7), F(7, 10)), (F(-3, 4), F(-5, 7)), (F(11, 12), F(13, 15)), (F(4, 9), F(5, 11))]:
        d = a.denominator * b.denominator // math.gcd(a.denominator, b.denominator)
        s = "<" if a < b else ">"
        add("intermediaire", "comparer", f"Compare ${fl(a)}$ et ${fl(b)}$.",
            [f"Même dénominateur ${d}$ : ${fl(a)} = \\dfrac{{{int(a * d)}}}{{{d}}}$ et ${fl(b)} = \\dfrac{{{int(b * d)}}}{{{d}}}$." if a > 0 else
             f"Même dénominateur ${d}$ : ${fl(a)} = -\\dfrac{{{int(-a * d)}}}{{{d}}}$ et ${fl(b)} = -\\dfrac{{{int(-b * d)}}}{{{d}}}$.",
             f"Donc ${fl(a)} {s} {fl(b)}$."],
            f"${fl(a)} {s} {fl(b)}$")
    for L in [[F(2, 3), F(3, 5), F(7, 10)], [F(-1, 2), F(-2, 5), F(-3, 4)]]:
        srt = sorted(L)
        d = 1
        for x in L:
            d = d * x.denominator // math.gcd(d, x.denominator)
        add("approfondissement", "comparer", "Range dans l'ordre croissant : $" + " \\,;\\, ".join(fl(x) for x in L) + "$.",
            [f"On réduit au dénominateur ${d}$ : " + " ; ".join(f"${fl(x)} = \\dfrac{{{int(x * d)}}}{{{d}}}$" for x in L) + "."],
            "$" + " < ".join(fl(x) for x in srt) + "$")
    add("intermediaire", "comparer", "Compare $\\dfrac{2}{3}$ et $0{,}67$.",
        ["$\\dfrac{2}{3} = 0{,}666\\ldots$ (les 6 se répètent sans fin).", "$0{,}666\\ldots < 0{,}670$."], "$\\dfrac{2}{3} < 0{,}67$")
    add("intermediaire", "comparer", "Compare $\\dfrac{4}{9}$ et $0{,}44$.",
        ["$\\dfrac{4}{9} = 0{,}444\\ldots$", "$0{,}444\\ldots > 0{,}440$."], "$\\dfrac{4}{9} > 0{,}44$")
    # -- ensembles de nombres (8)
    ensm = [("-7", "\\mathbb{Z}", "C'est un entier négatif : il est dans $\\mathbb{Z}$ mais pas dans $\\mathbb{N}$."),
            ("\\dfrac{12}{4}", "\\mathbb{N}", "$\\dfrac{12}{4} = 3$ : c'est un entier naturel."),
            ("\\dfrac{7}{4}", "\\mathbb{D}", "$\\dfrac{7}{4} = 1{,}75$ : c'est un nombre décimal non entier."),
            ("\\dfrac{1}{3}", "\\mathbb{Q}", "$\\dfrac{1}{3} = 0{,}333\\ldots$ n'est pas décimal : il est seulement rationnel."),
            ("-0{,}25", "\\mathbb{D}", "Il s'écrit avec un nombre fini de chiffres après la virgule : c'est un décimal."),
            ("\\dfrac{-18}{6}", "\\mathbb{Z}", "$\\dfrac{-18}{6} = -3$ : c'est un entier relatif.")]
    for x, e, j in ensm:
        add("intermediaire", "ensembles", f"Quel est le plus petit ensemble parmi $\\mathbb{{N}}$, $\\mathbb{{Z}}$, $\\mathbb{{D}}$, $\\mathbb{{Q}}$ qui contient ${x}$ ?",
            [j, "Rappel : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q}$."], f"${e}$")
    add("approfondissement", "ensembles", "Vrai ou faux : tout entier relatif est un nombre décimal.",
        ["Un entier s'écrit avec zéro chiffre après la virgule : par exemple $-5 = -5{,}0$.", "$\\mathbb{Z}$ est inclus dans $\\mathbb{D}$."], "Vrai")
    add("approfondissement", "ensembles", "Vrai ou faux : $\\dfrac{3}{7}$ est un nombre décimal.",
        ["Sous forme irréductible, son dénominateur $7$ n'est pas un produit de 2 et de 5 : la division ne s'arrête jamais.", "$\\dfrac{3}{7}$ est rationnel mais pas décimal."], "Faux")
    # -- problèmes (10)
    r = 1 - F(1, 3) - F(2, 5)
    add("probleme", "probleme-rationnels", "Un héritage de 45 000 € est partagé : un tiers pour Alice, deux cinquièmes pour Bruno, le reste pour Chloé. Quelle part reçoit Chloé (fraction et montant) ?",
        [f"$1 - \\dfrac{{1}}{{3}} - \\dfrac{{2}}{{5}} = \\dfrac{{15}}{{15}} - \\dfrac{{5}}{{15}} - \\dfrac{{6}}{{15}} = {fl(r)}$.", f"${fl(r)} \\times 45\\,000 = {nb(r * 45000)}$ €."],
        f"${fl(r)}$, soit ${nb(r * 45000)}$ €")
    r = F(2, 3) + F(1, 4)
    add("probleme", "probleme-rationnels", "Un réservoir de 60 L est rempli aux deux tiers. On ajoute un quart de sa capacité. Quelle fraction est remplie ? Combien de litres contient-il ?",
        [f"$\\dfrac{{2}}{{3}} + \\dfrac{{1}}{{4}} = \\dfrac{{8}}{{12}} + \\dfrac{{3}}{{12}} = {fl(r)}$.", f"${fl(r)} \\times 60 = {num(r * 60)}$ L."],
        f"${fl(r)}$, soit ${num(r * 60)}$ L")
    v = F(3, 4) / F(1, 6)
    add("probleme", "probleme-rationnels", "Un escargot parcourt $\\dfrac{3}{4}$ de mètre en $\\dfrac{1}{6}$ d'heure. Quelle distance parcourt-il en une heure, à la même allure ?",
        [f"$\\dfrac{{3}}{{4}} \\div \\dfrac{{1}}{{6}} = \\dfrac{{3}}{{4}} \\times 6 = {fl(v)} = {num(v)}$ m."], f"${num(v)}$ m")
    q = F(2, 3) * F(10, 4)
    add("probleme", "probleme-rationnels", "Une recette pour 4 personnes demande $\\dfrac{2}{3}$ de tasse de farine. Quelle quantité faut-il pour 10 personnes ?",
        [f"On multiplie par $\\dfrac{{10}}{{4}}$ : $\\dfrac{{2}}{{3}} \\times \\dfrac{{10}}{{4}} = {fl(q)}$ de tasse."], f"${fl(q)}$ de tasse")
    reste = 1 - F(1, 4) - F(3, 8)
    tot = F(15) / reste
    add("probleme", "probleme-rationnels", "Léa dépense un quart de son argent de poche en livres et trois huitièmes en sorties. Il lui reste 15 €. Combien avait-elle au départ ?",
        [f"Fraction restante : $1 - \\dfrac{{1}}{{4}} - \\dfrac{{3}}{{8}} = {fl(reste)}$.", f"${fl(reste)}$ de la somme vaut 15 € : $15 \\div {fl(reste)} = {num(tot)}$ €."],
        f"${num(tot)}$ €")
    f = F(3, 5) * F(5, 9)
    add("probleme", "probleme-rationnels", "Lors d'une élection, $\\dfrac{3}{5}$ des inscrits ont voté, et $\\dfrac{5}{9}$ des votants ont choisi la candidate A. Quelle fraction des inscrits a voté pour A ?",
        [f"$\\dfrac{{5}}{{9}} \\times \\dfrac{{3}}{{5}} = {fl(f)}$."], f"${fl(f)}$")
    n = F(3, 2) / F(3, 16)
    add("probleme", "probleme-rationnels", "Combien de verres de $\\dfrac{3}{16}$ L peut-on remplir avec une bouteille de 1,5 L ?",
        [f"$1{{,}}5 = \\dfrac{{3}}{{2}}$ et $\\dfrac{{3}}{{2}} \\div \\dfrac{{3}}{{16}} = \\dfrac{{3}}{{2}} \\times \\dfrac{{16}}{{3}} = {num(n)}$."], f"${num(n)}$ verres")
    p = 1 - F(2, 7) - F(3, 14)
    tot = F(21) / p
    add("probleme", "probleme-rationnels", "Une ferme consacre $\\dfrac{2}{7}$ de ses terres au blé, $\\dfrac{3}{14}$ au maïs et le reste, 21 ha, à la prairie. Quelle est la surface totale ?",
        [f"Prairie : $1 - \\dfrac{{4}}{{14}} - \\dfrac{{3}}{{14}} = {fl(p)}$ des terres.", f"Surface totale : $21 \\div {fl(p)} = {num(tot)}$ ha."],
        f"${num(tot)}$ ha")
    add("probleme", "probleme-rationnels", "Tom a parcouru $\\dfrac{7}{12}$ du trajet et Lisa $\\dfrac{5}{8}$ du même trajet. Qui est le plus avancé ?",
        ["Dénominateur commun 24 : $\\dfrac{7}{12} = \\dfrac{14}{24}$ et $\\dfrac{5}{8} = \\dfrac{15}{24}$.", "$\\dfrac{15}{24} > \\dfrac{14}{24}$."],
        "Lisa")
    rest = (1 - F(3, 8)) * (1 - F(2, 5))
    add("probleme", "probleme-rationnels", "Un cycliste parcourt $\\dfrac{3}{8}$ d'une étape, puis $\\dfrac{2}{5}$ de ce qui reste. Quelle fraction de l'étape lui reste-t-il ?",
        [f"Après la première partie : $\\dfrac{{5}}{{8}}$ restent.", f"Il en parcourt $\\dfrac{{2}}{{5}}$, il en reste donc $\\dfrac{{3}}{{5}}$ : $\\dfrac{{3}}{{5}} \\times \\dfrac{{5}}{{8}} = {fl(rest)}$."],
        f"${fl(rest)}$")
    return _fin(E)


# ====================================================================
# 3e — PENSÉE INFORMATIQUE
# ====================================================================
def _txt_math(e):
    return e.replace("age", "\\text{age}").replace("≥", "\\geqslant").replace("≤", "\\leqslant").replace("≠", "\\neq").replace(" et ", " \\text{ et } ").replace(" ou ", " \\text{ ou } ")


def _py_cond(e):
    return e.replace("≥", ">=").replace("≤", "<=").replace("≠", "!=").replace(" et ", " and ").replace(" ou ", " or ").replace("=", "==").replace(">==", ">=").replace("<==", "<=").replace("!==", "!=")


def g3_pensee_info():
    E = []

    def add(*t):
        E.append(t)

    # -- conditions composées (10)
    cc = [("n ≥ 10 et n ≤ 20", "n", 15), ("n ≥ 10 et n ≤ 20", "n", 25), ("n < 0 ou n > 100", "n", -5), ("n < 0 ou n > 100", "n", 50),
          ("age < 12 ou age ≥ 65", "age", 70), ("n ≥ 5 et n ≠ 8", "n", 8), ("x > 3 ou x < -3", "x", -4), ("n ≤ 0 et n ≥ 0", "n", 0),
          ("t > 30 ou t < 0", "t", 30), ("a ≥ 18 et a < 26", "a", 26)]
    for c, v, val in cc:
        A, B = c.split(" et ") if " et " in c else c.split(" ou ")
        va = eval(_py_cond(A), {}, {v: val})
        vb = eval(_py_cond(B), {}, {v: val})
        tot = eval(_py_cond(c), {}, {v: val})
        lien = "et" if " et " in c else "ou"
        add("application" if lien == "et" else "intermediaire", "condition-composee",
            f"La variable ${v if len(v) == 1 else chr(92) + 'text{' + v + '}'}$ vaut ${val}$. La condition `{c}` est-elle vraie ou fausse ?",
            [f"${_txt_math(A)}$ est {'vraie' if va else 'fausse'} ; ${_txt_math(B)}$ est {'vraie' if vb else 'fausse'}.",
             ("« et » n'est vraie que si les deux le sont." if lien == "et" else "« ou » est vraie dès qu'une des deux l'est."),
             f"La condition est {'vraie' if tot else 'fausse'}."],
            "vraie" if tot else "fausse")
    # -- traduire (6)
    tr = [("le nombre $n$ est compris entre 10 et 20, bornes comprises", "n ≥ 10 et n ≤ 20", "un encadrement se coupe en deux conditions reliées par « et »"),
          ("le tarif réduit s'applique aux moins de 12 ans et aux 65 ans ou plus", "age < 12 ou age ≥ 65", "aucun âge ne vérifie les deux à la fois : il faut « ou »"),
          ("la note n'est pas comprise entre 8 et 12 (bornes comprises)", "note < 8 ou note > 12", "ne pas être entre les deux, c'est être d'un côté ou de l'autre"),
          ("la température est strictement comprise entre 18 et 22", "T > 18 et T < 22", "strictement : les bornes sont exclues"),
          ("le mot de passe est refusé s'il a moins de 8 caractères ou plus de 20", "L < 8 ou L > 20", "une seule des deux raisons suffit pour refuser"),
          ("le colis est accepté s'il pèse au plus 30 kg et mesure au plus 150 cm", "m ≤ 30 et L ≤ 150", "les deux exigences doivent être remplies")]
    for p, c, j in tr:
        add("intermediaire", "traduire-condition", f"Écris une condition composée qui traduit : « {p} ».", [j[0].upper() + j[1:] + "."], f"`{c}`")
    # -- boucles « tant que » (12)
    def boucle(v0, cond, op, k):
        n, t = F(v0), 0
        vals = []
        while eval(_py_cond(cond), {}, {"n": n}):
            n = _applique(op, F(k), n) if op != "sq" else n * n
            vals.append(n)
            t += 1
            assert t < 1000
        return n, t, vals
    tq = [(1, "n < 20", "*", 2), (50, "n < 20", "*", 2), (100, "n > 0", "-", 15), (0, "n < 100", "+", 7), (3, "n ≤ 50", "*", 3),
          (1000, "n ≥ 1", "/", 10), (2, "n < 1000", "sq", None), (10, "n ≠ 0", "-", 2), (5, "n < 60", "+", 11)]
    opt = {"*": "×", "/": "÷", "+": "+", "-": "−"}
    for v0, cond, op, k in tq:
        n, t, vals = boucle(v0, cond, op, k)
        instr = "mettre n × n dans n" if op == "sq" else f"mettre n {opt[op]} {k} dans n"
        cor = [f"Valeurs successives de $n$ : ${num(v0)}$" + "".join(f" ; ${num(x)}$" for x in vals) + "." if vals else
               f"Au premier test, ${_txt_math(cond)}$ est déjà faux pour $n = {v0}$ : la boucle ne s'exécute jamais (zéro tour)."]
        if vals:
            cor.append(f"Après {pl(t, 'tour')}, $n = {num(n)}$ et la condition ${_txt_math(cond)}$ devient fausse : on sort.")
        add("intermediaire" if t else "approfondissement", "tant-que",
            f"Que va afficher ce programme ? {_code(f'mettre {v0} dans n', f'tant que {cond} faire', instr, 'fin tant que', 'afficher n')}",
            cor, f"${num(n)}$")
    # avec compteur
    for v0, cible, pas, nom in [(120, 500, 40, "épargne"), (64, None, None, "moitié")]:
        if nom == "épargne":
            e, m = v0, 0
            while e < cible:
                e += pas
                m += 1
            add("intermediaire", "tant-que",
                f"Que valent $e$ et $m$ à la fin ? {_code('mettre 120 dans e', 'mettre 0 dans m', 'tant que e < 500 faire', 'mettre e + 40 dans e', 'mettre m + 1 dans m', 'fin tant que')}",
                [f"À chaque tour, $e$ augmente de 40 et $m$ compte les tours.", f"Il faut {m} tours pour que $e$ atteigne ${e} \\geqslant 500$."],
                f"$e = {e}$ et $m = {m}$")
        else:
            n, k = 64, 0
            while n > 1:
                n //= 2
                k += 1
            add("intermediaire", "tant-que",
                f"Que vaut $k$ à la fin ? {_code('mettre 64 dans n', 'mettre 0 dans k', 'tant que n > 1 faire', 'mettre n ÷ 2 dans n', 'mettre k + 1 dans k', 'fin tant que')}",
                ["$n$ prend les valeurs 32, 16, 8, 4, 2, 1 : la condition $n > 1$ devient alors fausse.", f"$k$ compte les tours : $k = {k}$."],
                f"$k = {k}$")
    s, i = 0, 1
    while s < 50:
        s += i
        i += 1
    add("approfondissement", "tant-que",
        f"Que valent $s$ et $i$ à la fin ? {_code('mettre 0 dans s', 'mettre 1 dans i', 'tant que s < 50 faire', 'mettre s + i dans s', 'mettre i + 1 dans i', 'fin tant que')}",
        ["$s$ vaut successivement 1, 3, 6, 10, 15, 21, 28, 36, 45, 55.", f"Quand $s = {s}$, la condition est fausse ; $i$ a été augmenté à chaque tour : $i = {i}$."],
        f"$s = {s}$ et $i = {i}$")
    # -- terminaison (6)
    term = [("mettre 0 dans s ; mettre 1 dans i", "i ≤ 5", "mettre s + i dans s", None, "La variable testée $i$ n'est jamais modifiée : $i \\leqslant 5$ reste vraie pour toujours. Il manque `mettre i + 1 dans i`."),
            ("mettre 10 dans n", "n ≠ 0", "mettre n − 3 dans n", (10, "-", 3, "n ≠ 0"), "La variable $n$ vaut 10, 7, 4, 1, −2, … : elle saute la valeur 0, donc la condition reste toujours vraie."),
            ("mettre 10 dans n", "n > 0", "mettre n − 3 dans n", (10, "-", 3, "n > 0"), None),
            ("mettre 1 dans n", "n > 0", "mettre n + 1 dans n", (1, "+", 1, "n > 0"), "$n$ augmente sans fin : $n > 0$ reste toujours vraie."),
            ("mettre 5 dans n", "n < 10", "mettre n − 1 dans n", (5, "-", 1, "n < 10"), "La variable $n$ diminue alors qu'il faudrait qu'elle atteigne 10 : la condition reste toujours vraie."),
            ("mettre 0 dans n", "n ≠ 12", "mettre n + 4 dans n", (0, "+", 4, "n ≠ 12"), None)]
    for init, cond, instr, sim, j in term:
        stop, t, n = True, 0, None
        if sim is None:
            stop = False
        else:
            v0, op, k, c = sim
            n = F(v0)
            while eval(_py_cond(c), {}, {"n": n}):
                n = _applique(op, F(k), n)
                t += 1
                if t > 200:
                    stop = False
                    break
        lignes = init.split(" ; ") + [f"tant que {cond} faire", instr, "fin tant que"]
        if stop:
            cor = [f"La condition devient fausse après {pl(t, 'tour')} : $n = {num(n)}$ à la sortie."]
            rep = f"Oui, après {pl(t, 'tour')} ($n = {num(n)}$)"
        else:
            cor = [j]
            rep = "Non, la boucle ne s'arrête jamais"
        add("approfondissement", "terminaison", f"Ce programme s'arrête-t-il ? {_code(*lignes)}", cor, rep)
    # -- plusieurs variables (8)
    add("intermediaire", "variables", f"Que valent $a$ et $b$ à la fin ? {_code('mettre 3 dans a', 'mettre 7 dans b', 'mettre a dans c', 'mettre b dans a', 'mettre c dans b')}",
        ["$c$ garde une copie de $a$ (3) ; $a$ reçoit 7 ; $b$ reçoit la copie 3.", "C'est un échange des valeurs de $a$ et $b$."], "$a = 7$ et $b = 3$")
    add("approfondissement", "variables", f"Que valent $a$ et $b$ à la fin ? {_code('mettre 3 dans a', 'mettre 7 dans b', 'mettre b dans a', 'mettre a dans b')}",
        ["Après `mettre b dans a`, $a$ vaut 7 et l'ancienne valeur 3 est perdue.", "Puis $b$ reçoit $a$, c'est-à-dire 7 : l'échange a échoué."], "$a = 7$ et $b = 7$")
    a, b = 1, 1
    for _ in range(5):
        a, b = b, a + b
    add("approfondissement", "variables", f"Que vaut $b$ à la fin ? {_code('mettre 1 dans a', 'mettre 1 dans b', 'répéter 5 fois', 'mettre a + b dans c', 'mettre b dans a', 'mettre c dans b', 'fin répéter')}",
        ["À chaque tour, $b$ devient la somme des deux précédents : 2, 3, 5, 8, 13."], f"$b = {b}$")
    p = sum(1 for n in range(1, 10) if n % 2 == 0)
    add("intermediaire", "variables", f"Que valent $p$ et $q$ à la fin ? {_code('mettre 0 dans p', 'mettre 0 dans q', 'mettre 1 dans n', 'répéter 9 fois', 'si n est pair alors', 'mettre p + 1 dans p', 'sinon', 'mettre q + 1 dans q', 'fin si', 'mettre n + 1 dans n', 'fin répéter')}",
        ["$n$ prend les valeurs 1 à 9.", f"Pairs : 2, 4, 6, 8 ; impairs : 1, 3, 5, 7, 9."], f"$p = {p}$ et $q = {9 - p}$")
    vals = [4, 9, 2, 7]
    add("intermediaire", "variables", f"On saisit successivement 4, 9, 2 et 7. Que vaut $m$ à la fin ? {_code('mettre 0 dans m', 'répéter 4 fois', 'demander x', 'si x > m alors', 'mettre x dans m', 'fin si', 'fin répéter')}",
        ["$m$ garde la plus grande valeur saisie : 4, puis 9 ; ni 2 ni 7 ne dépassent 9."], f"$m = {max(vals)}$")
    s = sum(n for n in range(1, 11) if n % 3 == 0)
    add("intermediaire", "variables", f"Que vaut $s$ à la fin ? {_code('mettre 0 dans s', 'mettre 1 dans n', 'répéter 10 fois', 'si n est un multiple de 3 alors', 'mettre s + n dans s', 'fin si', 'mettre n + 1 dans n', 'fin répéter')}",
        ["Multiples de 3 entre 1 et 10 : 3, 6, 9.", f"$s = 3 + 6 + 9 = {s}$."], f"$s = {s}$")
    add("application", "variables", f"On saisit $a = -3$ et $b = -8$. Qu'affiche le programme ? {_code('demander a', 'demander b', 'si a > b alors', 'mettre a dans m', 'sinon', 'mettre b dans m', 'fin si', 'afficher m')}",
        ["$-3 > -8$ est vrai : $m$ reçoit $a$.", "Le programme affiche le plus grand des deux nombres."], "$-3$")
    add("application", "variables", f"Que valent $x$ et $y$ à la fin ? {_code('mettre 5 dans x', 'mettre x + 2 dans y', 'mettre y × 3 dans x', 'mettre x − y dans y')}",
        ["$x = 5$ ; $y = 7$ ; $x = 21$ ; $y = 21 - 7 = 14$."], "$x = 21$ et $y = 14$")
    # -- problèmes et objectifs (8)
    n, t = 1, 0
    while n < 1000:
        n *= 2
        t += 1
    add("probleme", "objectif", f"Combien de tours fait la boucle, et que vaut $n$ à la fin ? {_code('mettre 1 dans n', 'tant que n < 1000 faire', 'mettre n × 2 dans n', 'fin tant que')}",
        [f"$n$ vaut 2, 4, 8, …, 512, puis ${nb(n)}$ : $512 < 1\\,000$ est encore vrai, ${nb(n)} < 1\\,000$ est faux."], f"{t} tours ; $n = {nb(n)}$")
    e, m = 150, 0
    while e < 600:
        e += 35
        m += 1
    add("probleme", "objectif", "Léa a 150 € et en économise 35 chaque mois. On écrit une boucle `tant que e < 600` qui ajoute 35 à $e$ et 1 au compteur de mois $m$. Combien de mois faut-il pour atteindre au moins 600 € ?",
        [f"$\\dfrac{{600 - 150}}{{35}} \\approx 12{{,}}9$ : 12 mois ne suffisent pas ($150 + 12 \\times 35 = {150 + 12 * 35}$ €).", f"Au bout de {m} mois, elle a ${e}$ €."],
        f"{m} mois")
    c, a = F(1000), 0
    while c <= 1500:
        c *= F(105, 100)
        a += 1
    add("probleme", "objectif", "Un capital de 1 000 € augmente de 5 % par an. On le multiplie par 1,05 dans une boucle `tant que c ≤ 1500`, avec un compteur d'années. Au bout de combien d'années dépasse-t-il 1 500 € ?",
        [f"$1\\,000 \\times 1{{,}}05^{{{a - 1}}} \\approx {nb(arr(1000 * 1.05 ** (a - 1), 2), 2)}$ € (pas encore), $1\\,000 \\times 1{{,}}05^{{{a}}} \\approx {nb(arr(1000 * 1.05 ** a, 2), 2)}$ €."],
        f"{a} ans")
    h, r = F(2), 0
    while h >= F("0.5"):
        h *= F(8, 10)
        r += 1
    add("probleme", "objectif", "Une balle lâchée de 2 m remonte à chaque rebond à 80 % de sa hauteur précédente. Avec une boucle `tant que h ≥ 0,5`, on compte les rebonds. Après combien de rebonds la hauteur passe-t-elle sous 0,5 m ?",
        [f"Hauteurs : " + " ; ".join(nt(arr(2 * 0.8 ** k, 3), 3) for k in range(1, r + 1)) + " (en m, arrondies au millième).", f"La première hauteur sous 0,5 m est obtenue au rebond {r}."],
        f"{r} rebonds")
    add("intermediaire", "objectif", "On veut lancer un dé jusqu'à obtenir un 6. Faut-il une boucle « répéter … fois » ou « tant que » ? Pourquoi ?",
        ["On ne connaît pas à l'avance le nombre de lancers nécessaires.", "C'est la condition « le résultat est différent de 6 » qui décide : il faut une boucle `tant que`."],
        "une boucle « tant que »")
    add("intermediaire", "objectif", "Dans le jeu du nombre mystère, le joueur propose un nombre $p$ jusqu'à trouver le nombre mystère $m$. Quelle condition écrire après `tant que` ?",
        ["On continue tant que la proposition est fausse.", "La boucle s'arrête dès que $p = m$."], "`p ≠ m`")
    for n0 in (6, 7):
        n, t = n0, 0
        vs = [n]
        while n != 1:
            n = n // 2 if n % 2 == 0 else 3 * n + 1
            vs.append(n)
            t += 1
        add("probleme", "objectif",
            f"Combien de tours fait la boucle ? {_code(f'mettre {n0} dans n', 'tant que n ≠ 1 faire', 'si n est pair alors', 'mettre n ÷ 2 dans n', 'sinon', 'mettre 3 × n + 1 dans n', 'fin si', 'fin tant que')}",
            ["Valeurs de $n$ : " + " ; ".join(str(x) for x in vs) + "."], f"{t} tours")
    return _fin(E)


# ====================================================================
# 3e — PROBABILITÉS
# ====================================================================
def g3_probabilites():
    E = []

    def add(*t):
        E.append(t)

    D = F
    # -- relation d'addition : trouver la réunion (10)
    for pa, pb, pi in [("0.4", "0.3", "0.1"), ("0.5", "0.45", "0.2"), ("0.25", "0.6", "0.15"), ("0.7", "0.5", "0.35"), ("0.12", "0.3", "0")]:
        pa, pb, pi = D(pa), D(pb), D(pi)
        u = pa + pb - pi
        add("application", "relation-addition",
            f"On sait que $P(A) = {num(pa)}$, $P(B) = {num(pb)}$ et $P(A \\cap B) = {num(pi)}$. Calcule $P(A \\cup B)$.",
            ["$P(A \\cup B) + P(A \\cap B) = P(A) + P(B)$, donc $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
             f"$P(A \\cup B) = {num(pa)} + {num(pb)} - {num(pi)} = {num(u)}$."],
            f"$P(A \\cup B) = {num(u)}$")
    for ta, tb, A, B in [("un nombre pair", "au moins 5", lambda k: k % 2 == 0, lambda k: k >= 5),
                         ("un multiple de 3", "un nombre inférieur ou égal à 2", lambda k: k % 3 == 0, lambda k: k <= 2),
                         ("un nombre impair", "un nombre supérieur ou égal à 3", lambda k: k % 2 == 1, lambda k: k >= 3)]:
        de = range(1, 7)
        a = sum(1 for k in de if A(k))
        b = sum(1 for k in de if B(k))
        i = sum(1 for k in de if A(k) and B(k))
        u = sum(1 for k in de if A(k) or B(k))
        assert a + b == u + i
        add("intermediaire", "relation-addition",
            f"On lance un dé équilibré à six faces. $A$ : « obtenir {ta} » ; $B$ : « obtenir {tb} ». Calcule $P(A \\cup B)$ avec la relation d'addition.",
            [f"$P(A) = \\dfrac{{{a}}}{{6}}$, $P(B) = \\dfrac{{{b}}}{{6}}$, " + (f"$P(A \\cap B) = \\dfrac{{{i}}}{{6}}$." if i else "$P(A \\cap B) = 0$ (aucune issue commune)."),
             f"$P(A \\cup B) = \\dfrac{{{a}}}{{6}} + \\dfrac{{{b}}}{{6}} - " + (f"\\dfrac{{{i}}}{{6}}" if i else "0") + f" = \\dfrac{{{u}}}{{6}}" + (f" = {fl(F(u, 6))}$." if F(u, 6).denominator != 6 else "$.")],
            f"${fl(F(u, 6))}$")
    for n, x, y, z, ta, tb in [(30, 14, 19, 8, "joue d'un instrument", "fait du sport en club"), (25, 12, 10, 4, "a un chat", "a un chien")]:
        u = x + y - z
        add("intermediaire", "relation-addition",
            f"Dans une classe de {n} élèves, {x} élèves {ta.replace('joue', 'jouent').replace('fait', 'font').replace('a un', 'ont un')}, {y} {tb.replace('fait', 'font').replace('a un', 'ont un')}, et {z} sont dans les deux cas. On choisit un élève au hasard. Quelle est la probabilité qu'il soit dans au moins un des deux cas ?",
            [f"$A$ : « il {ta} », $B$ : « il {tb} ».",
             f"$P(A \\cup B) = \\dfrac{{{x}}}{{{n}}} + \\dfrac{{{y}}}{{{n}}} - \\dfrac{{{z}}}{{{n}}} = \\dfrac{{{u}}}{{{n}}}" + (f" = {fl(F(u, n))}$." if F(u, n).denominator != n else "$.")],
            f"${fl(F(u, n))}$")
    # -- trouver l'intersection (8)
    for pa, pb, pu in [("0.6", "0.5", "0.8"), ("0.45", "0.35", "0.6"), ("0.3", "0.25", "0.5"), ("0.8", "0.6", "0.9"), ("0.2", "0.15", "0.35")]:
        pa, pb, pu = D(pa), D(pb), D(pu)
        i = pa + pb - pu
        add("intermediaire", "intersection",
            f"On sait que $P(A) = {num(pa)}$, $P(B) = {num(pb)}$ et $P(A \\cup B) = {num(pu)}$. Calcule $P(A \\cap B)$.",
            ["$P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$.", f"$P(A \\cap B) = {num(pa)} + {num(pb)} - {num(pu)} = {num(i)}$."]
            + (["L'intersection est de probabilité nulle : $A$ et $B$ ne peuvent pas se réaliser en même temps."] if i == 0 else []),
            f"$P(A \\cap B) = {num(i)}$")
    for pb, pu, pi in [("0.3", "0.7", "0.1"), ("0.25", "0.55", "0.05")]:
        pb, pu, pi = D(pb), D(pu), D(pi)
        pa = pu + pi - pb
        add("approfondissement", "intersection",
            f"On sait que $P(B) = {num(pb)}$, $P(A \\cup B) = {num(pu)}$ et $P(A \\cap B) = {num(pi)}$. Calcule $P(A)$.",
            ["$P(A \\cup B) + P(A \\cap B) = P(A) + P(B)$.", f"${num(pu)} + {num(pi)} = P(A) + {num(pb)}$, donc $P(A) = {num(pa)}$."],
            f"$P(A) = {num(pa)}$")
    add("approfondissement", "intersection",
        "Au collège, 40 % des élèves pratiquent un sport, 30 % un instrument, et 55 % au moins l'une des deux activités. Quel pourcentage pratique les deux ?",
        ["$P(S \\cap I) = P(S) + P(I) - P(S \\cup I)$.", f"$0{{,}}4 + 0{{,}}3 - 0{{,}}55 = {num(D('0.4') + D('0.3') - D('0.55'))}$."],
        f"${num((D('0.4') + D('0.3') - D('0.55')) * 100)}$ %")
    # -- contrôles (6)
    add("approfondissement", "controles", "Peut-on avoir $P(A) = 0{,}7$, $P(B) = 0{,}6$ et $A \\cap B$ vide ?",
        ["Si $A \\cap B$ était vide, on aurait $P(A \\cup B) = 0{,}7 + 0{,}6 = 1{,}3$.", "Une probabilité ne dépasse jamais 1 : c'est impossible."], "Non")
    add("approfondissement", "controles", "Peut-on avoir $P(A) = 0{,}4$ et $P(A \\cap B) = 0{,}5$ ?",
        ["$A \\cap B$ est une partie de $A$ : sa probabilité ne peut pas dépasser $P(A)$."], "Non")
    add("approfondissement", "controles", "Peut-on avoir $P(A) = 0{,}4$ et $P(A \\cup B) = 0{,}3$ ?",
        ["$A$ est inclus dans $A \\cup B$ : $P(A \\cup B) \\geqslant P(A)$."], "Non")
    add("intermediaire", "controles", "$A \\cap B$ est vide, $P(A) = 0{,}35$ et $P(B) = 0{,}4$. Calcule $P(A \\cup B)$.",
        ["L'intersection est vide : $P(A \\cap B) = 0$.", f"$P(A \\cup B) = 0{{,}}35 + 0{{,}}4 = {num(D('0.75'))}$."], f"${num(D('0.75'))}$")
    add("intermediaire", "controles", "On prend pour $B$ l'événement contraire de $A$. Que valent $P(A \\cup B)$ et $P(A \\cap B)$ ? Retrouve $P(B)$ quand $P(A) = 0{,}35$.",
        ["$A \\cup \\overline{A}$ est l'univers : probabilité 1 ; $A \\cap \\overline{A}$ est vide : probabilité 0.", "La relation donne $1 + 0 = 0{,}35 + P(B)$, donc $P(B) = 0{,}65$."],
        "$P(A \\cup B) = 1$, $P(A \\cap B) = 0$, $P(B) = 0{,}65$")
    add("intermediaire", "controles", "Un élève trouve $P(A \\cap B) = -0{,}3$. Que peut-on dire ?",
        ["Une probabilité est toujours comprise entre 0 et 1.", "Il a sans doute inversé la soustraction : il faut calculer $P(A) + P(B) - P(A \\cup B)$."],
        "Le résultat est faux : une probabilité n'est jamais négative")
    # -- deux épreuves indépendantes (10)
    urne = ["R1", "R2", "B"]
    tir = [(a, b) for a in urne for b in urne]
    k = sum(1 for a, b in tir if a[0] == "R" and b[0] == "R")
    add("approfondissement", "deux-epreuves",
        "Une urne contient 2 boules rouges et 1 bleue. On tire une boule, on note sa couleur, on la remet, puis on en tire une seconde. Quelle est la probabilité d'obtenir deux boules rouges ?",
        ["On nomme les boules R1, R2, B : il y a $3 \\times 3 = 9$ tirages équiprobables.", f"Tirages favorables : {k} (R1R1, R1R2, R2R1, R2R2)."],
        f"${fl(F(k, 9))}$")
    k = sum(1 for a, b in tir if a[0] == b[0])
    add("approfondissement", "deux-epreuves",
        "Une urne contient 2 boules rouges et 1 bleue. On tire une boule, on la remet, puis on en tire une seconde. Quelle est la probabilité que les deux boules aient la même couleur ?",
        ["9 tirages équiprobables (R1, R2, B pour chaque tirage).", f"Même couleur : 4 tirages rouge-rouge et 1 bleu-bleu, soit {k}."],
        f"${fl(F(k, 9))}$")
    p3 = [(a, b, c) for a in "PF" for b in "PF" for c in "PF"]
    k = sum(1 for t in p3 if t.count("F") == 3)
    add("intermediaire", "deux-epreuves", "On lance trois fois une pièce équilibrée. Quelle est la probabilité d'obtenir trois fois « face » ?",
        ["Il y a $2 \\times 2 \\times 2 = 8$ issues équiprobables (PPP, PPF, …, FFF).", "Une seule convient : FFF."], f"${fl(F(k, 8))}$")
    k = sum(1 for t in p3 if t.count("P") == 2)
    add("approfondissement", "deux-epreuves", "On lance trois fois une pièce équilibrée. Quelle est la probabilité d'obtenir exactement deux fois « pile » ?",
        ["8 issues équiprobables.", f"Issues favorables : PPF, PFP, FPP, soit {k}."], f"${fl(F(k, 8))}$")
    dd = [(a, b) for a in range(1, 7) for b in range(1, 7)]
    for txt, c in [("le produit des deux nombres soit pair", lambda a, b: (a * b) % 2 == 0), ("la somme des deux nombres soit égale à 8", lambda a, b: a + b == 8),
                   ("au moins un des deux dés donne 6", lambda a, b: a == 6 or b == 6), ("les deux nombres soient différents", lambda a, b: a != b),
                   ("la somme soit inférieure ou égale à 4", lambda a, b: a + b <= 4)]:
        k = sum(1 for a, b in dd if c(a, b))
        add("approfondissement", "deux-epreuves", f"On lance deux dés équilibrés à six faces. Quelle est la probabilité {'qu' + chr(39) if txt[0] in 'aeiou' else 'que '}{txt} ?",
            ["Il y a $6 \\times 6 = 36$ issues équiprobables.", f"On compte les issues favorables (tableau à double entrée) : {k}.", f"$P = \\dfrac{{{k}}}{{36}}" + (f" = {fl(F(k, 36))}$." if F(k, 36).denominator != 36 else "$.")],
            f"${fl(F(k, 36))}$")
    k = sum(1 for a in "PF" for b in "PF" if "F" in (a, b))
    add("probleme", "deux-epreuves",
        "D'Alembert affirmait qu'en lançant deux pièces, la probabilité d'obtenir au moins une fois « face » est $\\dfrac{2}{3}$, car il comptait 3 cas : FF, FP ou PP. Quelle est la bonne probabilité ?",
        ["Ses 3 cas ne sont pas équiprobables : « une face et un pile » regroupe FP et PF.", f"Avec les 4 issues équiprobables PP, PF, FP, FF : {k} favorables."],
        f"${fl(F(k, 4))}$")
    # -- fréquences et stabilisation (8)
    for n, k, ctx in [(2000, 1026, "Sur 2 000 naissances, on compte 1 026 garçons."), (10000, 5040, "Une pièce lancée 10 000 fois tombe 5 040 fois sur « pile »."),
                      (1000, 172, "Un tableur simule 1 000 lancers d'un dé : le 5 sort 172 fois.")]:
        add("application", "frequences", f"{ctx} Calcule la fréquence correspondante.",
            [f"$f = \\dfrac{{{nb(k)}}}{{{nb(n)}}} = {nb(F(k, n), 3)}$."], f"${nb(F(k, n), 3)}$")
    add("intermediaire", "frequences", "La probabilité d'un événement vaut 0,3. Sur 5 000 répétitions, environ combien de fois peut-on s'attendre à l'observer ?",
        [f"$5\\,000 \\times 0{{,}}3 = {nb(5000 * F('0.3'))}$ : environ ${nb(5000 * F('0.3'))}$ fois (pas exactement)."], f"environ ${nb(5000 * F('0.3'))}$ fois")
    add("intermediaire", "frequences", "Une fréquence est calculée sur 20 lancers, une autre sur 2 000 lancers. Laquelle donne la meilleure estimation de la probabilité ?",
        ["Quand le nombre d'expériences augmente, la fréquence se stabilise autour de la probabilité.", "Sur 20 lancers, la fluctuation est forte."], "celle sur 2 000 lancers")
    add("approfondissement", "frequences", "Une punaise lancée 5 000 fois tombe 3 100 fois « pointe en haut ». Propose un modèle de probabilité pour cette expérience.",
        ["Les issues ne sont pas équiprobables : on prend la fréquence observée sur un grand nombre d'essais.", f"$\\dfrac{{3\\,100}}{{5\\,000}} = {nb(F(3100, 5000), 2)}$ ; « pointe en bas » : ${nb(1 - F(3100, 5000), 2)}$."],
        f"$P(\\text{{haut}}) \\approx {nb(F(3100, 5000), 2)}$ et $P(\\text{{bas}}) \\approx {nb(1 - F(3100, 5000), 2)}$")
    add("intermediaire", "frequences", "On lance une pièce équilibrée 4 fois et on obtient 4 fois « pile ». Au 5e lancer, « face » est-il plus probable ?",
        ["Les lancers sont indépendants : la pièce n'a pas de mémoire.", "La probabilité d'obtenir « face » reste $\\dfrac{1}{2}$."], "Non, la probabilité reste $\\dfrac{1}{2}$")
    add("approfondissement", "frequences", "Pour simuler un lancer de pièce avec un tableur, on tire un nombre entier au hasard entre 0 et 1. Comment interpréter le résultat ?",
        ["On associe par exemple 0 à « face » et 1 à « pile ».", "Chaque valeur a la même probabilité $\\dfrac{1}{2}$, comme la pièce."], "0 pour « face », 1 pour « pile » (par exemple)")
    # -- problèmes (8)
    enq = [(30, 14, 19, 8, "jouent d'un instrument", "font du sport en club"), (40, 22, 15, 7, "lisent des mangas", "lisent des romans"),
           (200, 120, 90, 40, "ont un smartphone", "ont une tablette"), (50, 18, 25, 9, "prennent la cantine", "viennent en bus")]
    for n, x, y, z, ta, tb in enq:
        u = x + y - z
        add("probleme", "probleme-probabilites",
            f"Dans un groupe de {n} personnes, {x} {ta}, {y} {tb} et {z} sont dans les deux cas. On choisit une personne au hasard. Quelle est la probabilité qu'elle ne soit dans aucun des deux cas ?",
            [f"Au moins un des deux : $P(A \\cup B) = \\dfrac{{{x} + {y} - {z}}}{{{n}}} = \\dfrac{{{u}}}{{{n}}}$.",
             f"Aucun : $1 - \\dfrac{{{u}}}{{{n}}} = \\dfrac{{{n - u}}}{{{n}}}" + (f" = {fl(F(n - u, n))}$." if F(n - u, n).denominator != n else "$.")],
            f"${fl(F(n - u, n))}$")
        e1 = u - z
        add("probleme", "probleme-probabilites",
            f"Dans un groupe de {n} personnes, {x} {ta}, {y} {tb} et {z} sont dans les deux cas. On choisit une personne au hasard. Quelle est la probabilité qu'elle soit dans un seul des deux cas ?",
            [f"Au moins un des deux : ${x} + {y} - {z} = {u}$ personnes.",
             f"Exactement un : on enlève celles qui sont dans les deux cas, ${u} - {z} = {e1}$ personnes.",
             f"$P = \\dfrac{{{e1}}}{{{n}}}" + (f" = {fl(F(e1, n))}$." if F(e1, n).denominator != n else "$.")],
            f"${fl(F(e1, n))}$")
    return _fin(E)


# ====================================================================
# 3e — PUISSANCES ET NOTATION SCIENTIFIQUE
# ====================================================================
def _sci(x):
    """Décimal x (non nul) -> (mantisse Decimal dans [1;10[, exposant)."""
    d = Decimal(x) if not isinstance(x, Decimal) else x
    if isinstance(x, F):
        d = Decimal(x.numerator) / Decimal(x.denominator)
    neg = d < 0
    d = abs(d)
    e = d.adjusted()
    m = (d.scaleb(-e)).normalize()
    return (-m if neg else m), e


def _scitex(x):
    m, e = _sci(x)
    return f"{nb(m, 12)} \\times 10^{{{e}}}"


def g3_puissances():
    E = []

    def add(*t):
        E.append(t)

    # -- exposants négatifs et nul (8)
    for a, n in [(2, -3), (10, -4), (5, 0), (-3, -2), (4, -1), (10, -1)]:
        v = F(a) ** n
        if n == 0:
            cor = ["Par convention, $a^0 = 1$ pour tout nombre $a$ non nul."]
        else:
            cor = [f"$a^{{-n}} = \\dfrac{{1}}{{a^n}}$ : ${par(a)}^{{{n}}} = \\dfrac{{1}}{{{par(a)}^{{{-n}}}}} = \\dfrac{{1}}{{{num(F(a) ** (-n))}}}$."]
        rep = num(v) if a == 10 else fl(v)
        cor.append(f"Résultat : ${rep}$.")
        add("application" if a > 0 else "intermediaire", "exposant-negatif", f"Écris sans exposant : ${par(a)}^{{{n}}}$.", cor, f"${rep}$")
    add("intermediaire", "exposant-negatif", "Écris $\\dfrac{1}{7^3}$ sous la forme d'une puissance de 7.",
        ["$\\dfrac{1}{a^n} = a^{-n}$."], "$7^{-3}$")
    add("application", "exposant-negatif", "Écris $0{,}001$ sous la forme d'une puissance de 10.",
        ["$0{,}001 = \\dfrac{1}{1\\,000} = \\dfrac{1}{10^3}$."], "$10^{-3}$")
    # -- règles de calcul (10)
    regles = [("2", 5, "/", 3), ("10", 3, "*", -5), ("10", -2, "/", -6), ("3", 4, "*", -6), ("7", 2, "/", 5), ("6", -2, "*", 2),
              ("a", 5, "/", 2), ("10", -3, "*", -4)]
    for b, m, op, n in regles:
        r = m + n if op == "*" else m - n
        if op == "*":
            ex = f"{b}^{{{m}}} \\times {b}^{{{n}}}"
            c = [f"Même base : on additionne les exposants. ${b}^{{{m} + {par(n)}}} = {b}^{{{r}}}$."]
        else:
            ex = f"\\dfrac{{{b}^{{{m}}}}}{{{b}^{{{n}}}}}"
            c = [f"Même base : on soustrait les exposants. ${b}^{{{m} - {par(n)}}} = {b}^{{{r}}}$."]
        if r == 0:
            c.append("Et $a^0 = 1$.")
        add("intermediaire", "regles", f"Écris sous la forme d'une seule puissance : ${ex}$.", c, f"${b}^{{{r}}}" + (" = 1$" if r == 0 else "$"))
    add("approfondissement", "regles", "Écris sous la forme d'une seule puissance de 10 : $\\dfrac{10^4 \\times 10^{-1}}{10^2}$.",
        ["Numérateur : $10^{4 + (-1)} = 10^3$.", "Puis $\\dfrac{10^3}{10^2} = 10^{3 - 2} = 10^1$."], "$10^1 = 10$")
    add("approfondissement", "regles", "Calcule $5^3 \\times 2^3$ en l'écrivant comme une puissance de 10.",
        ["Même exposant : $5^3 \\times 2^3 = (5 \\times 2)^3 = 10^3$."], "$10^3 = 1\\,000$")
    # -- notation scientifique (10)
    nsx = ["45000", "0.00072", "3800000", "0.05", "602000000000", "0.0000013", "12.5"]
    for x in nsx:
        d = Decimal(x)
        m, e = _sci(d)
        add("application" if e > 0 else "intermediaire", "notation-scientifique",
            f"Donne la notation scientifique de ${nb(d, 12)}$.",
            ["La notation scientifique s'écrit $a \\times 10^n$ avec $1 \\leqslant a < 10$.",
             f"On place la virgule après le premier chiffre non nul : $a = {nb(m, 12)}$, et on compte le décalage : $n = {e}$."],
            f"${_scitex(d)}$")
    for a, n in [("27", 3), ("0.35", -2), ("980", -5)]:
        d = Decimal(a).scaleb(n)
        m, e = _sci(d)
        add("approfondissement", "notation-scientifique",
            f"Écris en notation scientifique : ${nb(Decimal(a), 12)} \\times 10^{{{n}}}$.",
            [f"${nb(Decimal(a), 12)} = {_scitex(Decimal(a))}$.",
             f"Donc ${nb(Decimal(a), 12)} \\times 10^{{{n}}} = {nb(_sci(Decimal(a))[0], 12)} \\times 10^{{{_sci(Decimal(a))[1]} + {par(n)}}} = {_scitex(d)}$."],
            f"${_scitex(d)}$")
    # -- calculs en notation scientifique (8)
    calc = [("3", 4, "*", "2", 5), ("4", -3, "*", "5", 7), ("8", 6, "/", "2", 2), ("6", -2, "/", "3", -5), ("2.5", 3, "*", "4", -8),
            ("9", 8, "/", "3", -2), ("1.2", 5, "*", "3", 3), ("7", -4, "/", "2", 3)]
    for a, p, op, b, q in calc:
        A, B = Decimal(a), Decimal(b)
        mm = A * B if op == "*" else A / B
        ee = p + q if op == "*" else p - q
        val = mm.scaleb(ee)
        ex = f"({nb(A, 6)} \\times 10^{{{p}}}) " + ("\\times" if op == "*" else "\\div") + f" ({nb(B, 6)} \\times 10^{{{q}}})"
        c = [("On multiplie" if op == "*" else "On divise") + " les nombres entre eux et les puissances de 10 entre elles.",
             f"$= {nb(mm, 6)} \\times 10^{{{ee}}}" + ("" if 1 <= mm < 10 else f" = {_scitex(val)}") + "$."]
        add("intermediaire" if 1 <= mm < 10 else "approfondissement", "calcul-scientifique",
            f"Calcule et donne le résultat en notation scientifique : ${ex}$.", c, f"${_scitex(val)}$")
    # -- préfixes (6)
    pref = [("Combien de mètres vaut 1 nanomètre (nm) ?", "« nano » signifie $10^{-9}$.", "$10^{-9}$ m"),
            ("Combien de mètres vaut 1 micromètre (µm) ?", "« micro » signifie $10^{-6}$.", "$10^{-6}$ m"),
            ("Combien de hertz vaut 1 gigahertz (GHz) ?", "« giga » signifie $10^{9}$.", "$10^{9}$ Hz"),
            ("Un fichier pèse 5 mégaoctets (Mo). Combien d'octets cela représente-t-il ?", "« méga » signifie $10^6$ : $5$ Mo $= 5 \\times 10^6$ octets.", "$5 \\times 10^6$ octets"),
            ("Exprime 250 nm en mètres, en notation scientifique.", "$250$ nm $= 250 \\times 10^{-9}$ m $= 2{,}5 \\times 10^2 \\times 10^{-9}$ m.", "$2{,}5 \\times 10^{-7}$ m"),
            ("Exprime 3 km en millimètres, en notation scientifique.", "$1$ km $= 10^3$ m et $1$ m $= 10^3$ mm : $3$ km $= 3 \\times 10^3 \\times 10^3$ mm.", "$3 \\times 10^6$ mm")]
    for q, j, r in pref:
        add("application", "prefixes", q, [j], r)
    # -- problèmes (8)
    t = Decimal("1.5e8") / Decimal("3e5")
    add("probleme", "probleme-scientifique",
        "La distance Terre-Soleil est d'environ $1{,}5 \\times 10^8$ km et la lumière parcourt $3 \\times 10^5$ km par seconde. Combien de temps met la lumière du Soleil pour nous parvenir ?",
        [f"$t = \\dfrac{{1{{,}}5 \\times 10^8}}{{3 \\times 10^5}} = 0{{,}}5 \\times 10^3 = {nb(t)}$ s.", f"Soit ${int(t) // 60}$ min ${int(t) % 60}$ s."],
        f"${nb(t)}$ s, soit {int(t) // 60} min {int(t) % 60} s")
    n = Decimal("1e-3") / Decimal("1.67e-27")
    m, e = _sci(n)
    add("probleme", "probleme-scientifique",
        "Un atome d'hydrogène a une masse d'environ $1{,}67 \\times 10^{-27}$ kg. Combien d'atomes y a-t-il dans 1 g d'hydrogène ? Donne la mantisse arrondie au dixième.",
        ["$1$ g $= 10^{-3}$ kg.", f"$\\dfrac{{10^{{-3}}}}{{1{{,}}67 \\times 10^{{-27}}}} \\approx {nb(arr(m, 3), 3)} \\times 10^{{{e}}}$."],
        f"$\\approx {str(arr(m, 1)).replace('.', '{,}')} \\times 10^{{{e}}}$ atomes")
    g = Decimal("5e6") * Decimal("5e6")
    add("probleme", "probleme-scientifique",
        "Il y a environ $5 \\times 10^6$ globules rouges par mm³ de sang, et un adulte a environ 5 L de sang, soit $5 \\times 10^6$ mm³. Combien de globules rouges cela représente-t-il ?",
        [f"$5 \\times 10^6 \\times 5 \\times 10^6 = 25 \\times 10^{{12}} = {_scitex(g)}$."], f"${_scitex(g)}$")
    add("probleme", "probleme-scientifique",
        "Un cheveu a un diamètre d'environ $8 \\times 10^{-2}$ mm. Exprime ce diamètre en mètres, en notation scientifique.",
        ["$1$ mm $= 10^{-3}$ m.", "$8 \\times 10^{-2} \\times 10^{-3} = 8 \\times 10^{-5}$ m."], "$8 \\times 10^{-5}$ m")
    tot = 2 ** 64 - 1
    m, e = _sci(Decimal(tot))
    add("probleme", "probleme-scientifique",
        f"Sur l'échiquier de Sissa, le nombre total de grains est $2^{{64}} - 1 = {nb(tot)}$. Donne une écriture scientifique de ce nombre, avec la mantisse arrondie au dixième.",
        [f"On place la virgule après le premier chiffre : ${nb(arr(m, 4), 4)} \\times 10^{{{e}}}$ environ."],
        f"$\\approx {nb(arr(m, 1), 1)} \\times 10^{{{e}}}$")
    v = Decimal("8e9") * 2
    add("probleme", "probleme-scientifique",
        "La population mondiale est d'environ $8 \\times 10^9$ personnes. Si chacune boit 2 L d'eau par jour, quel volume d'eau est bu chaque jour ?",
        [f"$8 \\times 10^9 \\times 2 = 16 \\times 10^9 = {_scitex(v)}$ L."], f"${_scitex(v)}$ L")
    add("probleme", "probleme-scientifique",
        "La masse d'un électron est d'environ $9{,}1 \\times 10^{-31}$ kg, celle d'un proton d'environ $1{,}7 \\times 10^{-27}$ kg. Lequel est le plus lourd ?",
        ["On compare d'abord les exposants : $-27 > -31$.", "Le proton a la plus grande puissance de 10 : il est le plus lourd."], "le proton")
    nv = Decimal("1e-3") / Decimal("2e-7")
    add("probleme", "probleme-scientifique",
        "Un virus mesure $2 \\times 10^{-7}$ m. Combien de virus faut-il aligner pour atteindre 1 mm ?",
        ["$1$ mm $= 10^{-3}$ m.", f"$\\dfrac{{10^{{-3}}}}{{2 \\times 10^{{-7}}}} = 0{{,}}5 \\times 10^4 = {_scitex(nv)}$."], f"${_scitex(nv)}$, soit ${nb(nv)}$ virus")
    return _fin(E)


# ====================================================================
# 3e — REPÉRAGE (droite graduée, plan, lecture de graphiques)
# ====================================================================
def g3_reperage():
    E = []

    def add(*t):
        E.append(t)

    # -- droite graduée (8)
    dg = [(-4, -3, 4, -4, 3, 1), (-2, -1, 5, -1, 2, -1), (0, 2, 8, 0, 3, -1), (-30, -20, 5, -20, 7, -1),
          (-1, 0, 6, -1, 5, 1), (-0.5, 0, 5, -0.5, 4, 1), (2, 3, 10, 2, 13, -1), (-100, 0, 4, -100, 2, 1)]
    for a, b, p, s0, k, d in dg:
        a, b, s0 = F(str(a)), F(str(b)), F(str(s0))
        g = (b - a) / p
        r = s0 + d * k * g
        sens = "à droite" if d > 0 else "à gauche"
        add("intermediaire" if g.denominator != 1 else "application", "droite-graduee",
            f"Sur une droite graduée, les traits marqués ${num(a)}$ et ${num(b)}$ sont séparés par ${p}$ intervalles égaux. Quelle est l'abscisse du point situé ${k}$ graduations {sens} du trait ${num(s0)}$ ?",
            [f"Une graduation vaut $\\dfrac{{{num(b)} - {par(a)}}}{{{p}}} = {num(g)}$.",
             f"${num(s0)} {'+' if d > 0 else '-'} {k} \\times {par(g) if g < 0 else num(g)} = {num(r)}$."],
            f"${num(r)}$")
    # -- coordonnées et signes (8)
    for x, y in [(-7, 2), (3, -8), (0, 5), (-4, 0), (F("-1.5"), F("-2.5"))]:
        if x == 0:
            pos = "sur l'axe des ordonnées, au-dessus de l'origine"
        elif y == 0:
            pos = "sur l'axe des abscisses, à gauche de l'origine" if x < 0 else "sur l'axe des abscisses, à droite de l'origine"
        else:
            pos = ("en haut" if y > 0 else "en bas") + (" à droite" if x > 0 else " à gauche") + " de l'origine"
        add("application", "coordonnees", f"Où se trouve le point ${pt(x, y, 'M')}$ dans un repère orthogonal ?",
            [f"Abscisse ${num(x)}$ (horizontal) ; ordonnée ${num(y)}$ (vertical)."], pos)
    for txt, rep, j in [("Un point a une ordonnée nulle. Sur quel axe est-il ?", "sur l'axe des abscisses", "Ordonnée nulle : le point est à la hauteur de l'origine."),
                        ("Les points $A(3\\,;5)$ et $B(5\\,;3)$ sont-ils confondus ?", "Non", "L'abscisse se donne en premier : $A$ et $B$ n'ont pas les mêmes coordonnées."),
                        ("Dans un repère orthogonal, l'unité de l'axe horizontal est 1 cm pour 2 h et celle de l'axe vertical 1 cm pour 50 km. Le point $P$ est à 3 cm à droite et à 4 cm au-dessus de l'origine. Quelles sont ses coordonnées ?", "$P(6\\,;200)$", "$3 \\times 2 = 6$ h et $4 \\times 50 = 200$ km : les deux axes n'ont pas la même unité.")]:
        add("intermediaire", "coordonnees", txt, [j], rep)
    # -- point sur une courbe (8)
    pc = [("3x - 1", "3*x-1", 2, 5), ("-2x + 4", "-2*x+4", 3, -1), ("x^2", "x*x", -3, 9), ("x^2", "x*x", -2, -4), ("0{,}5x + 2", "F(1,2)*x+2", 6, 4),
          ("x^2 - 1", "x*x-1", F("0.5"), F("-0.75")), ("4x", "4*x", F("-1.5"), -5), ("10 - x", "10-x", 12, -2)]
    for ex, py, x, y in pc:
        v = _ev(py, x=x)
        ok = v == F(y)
        add("intermediaire", "point-sur-courbe",
            f"Le point ${pt(x, y, 'A')}$ appartient-il à la courbe représentative de la fonction $f$ définie par $f(x) = {ex}$ ?",
            [f"$f({num(x)}) = {num(v)}$.",
             "C'est l'ordonnée du point : il est sur la courbe." if ok else f"L'ordonnée du point est ${num(y)} \\neq {num(v)}$ : il n'est pas sur la courbe."],
            "Oui" if ok else "Non")
    # -- image et antécédent lus comme des coordonnées (8)
    for x, y in [(-2, 5), (4, -1), (0, 3), (F("1.5"), 0)]:
        add("application", "lecture-graphique",
            f"Le point ${pt(x, y)}$ est sur la courbe d'une fonction $f$. Traduis cette information avec les mots « image » et « antécédent ».",
            ["Un point $(x\\,;y)$ de la courbe vérifie $y = f(x)$."],
            f"$f({num(x)}) = {num(y)}$ : l'image de ${num(x)}$ est ${num(y)}$, et ${num(x)}$ est un antécédent de ${num(y)}$")
    for a, b in [(2, 7), (-3, 1)]:
        add("intermediaire", "lecture-graphique",
            f"On sait que $f({a}) = {b}$. Quel point de la courbe de $f$ peut-on placer ?",
            ["L'abscisse est le nombre de départ, l'ordonnée son image."], f"${pt(a, b)}$")
    add("intermediaire", "lecture-graphique", "La courbe d'une fonction $f$ coupe l'axe des abscisses au point d'abscisse $-4$. Que peut-on en déduire ?",
        ["Sur l'axe des abscisses, l'ordonnée est nulle : le point est $(-4\\,;0)$."], "$f(-4) = 0$ : $-4$ est un antécédent de $0$")
    add("intermediaire", "lecture-graphique", "La courbe d'une fonction $f$ coupe l'axe des ordonnées au point d'ordonnée $6$. Que peut-on en déduire ?",
        ["Sur l'axe des ordonnées, l'abscisse est nulle : le point est $(0\\,;6)$."], "$f(0) = 6$")
    # -- coefficients d'une fonction affine lus sur le graphique (10)
    cf = [((0, 1), (2, 7)), ((0, -3), (4, 5)), ((0, 4), (2, 0)), ((0, 2), (3, 2)), ((0, -1), (5, -3)), ((0, 10), (4, 30)),
          ((1, 3), (3, 7)), ((-2, 5), (2, 1)), ((0, 0), (5, 3)), ((2, -1), (6, 1))]
    for (x1, y1), (x2, y2) in cf:
        a = F(y2 - y1, x2 - x1)
        b = y1 - a * x1
        cor = []
        if x1 == 0:
            cor.append(f"La droite coupe l'axe des ordonnées en $(0\\,;{y1})$ : $b = {y1}$.")
        cor.append(f"$a = \\dfrac{{{y2} - {par(y1)}}}{{{x2} - {par(x1)}}} = \\dfrac{{{y2 - y1}}}{{{x2 - x1}}} = {num(a)}$.")
        if x1 != 0:
            cor.append(f"$b = {y1} - {par(a)} \\times {par(x1)} = {num(b)}$.")
        cor.append("On calcule $a$ avec les coordonnées : on ne compte pas les carreaux, car les deux axes peuvent avoir des unités différentes.")
        add("approfondissement" if x1 != 0 else "intermediaire", "coefficients",
            f"La droite qui représente une fonction affine $f$ passe par les points ${pt(x1, y1)}$ et ${pt(x2, y2)}$. Détermine $f(x) = ax + b$.",
            cor, f"$f(x) = {lin(a, b) if a != 0 else num(b)}$")
    # -- intersections avec les axes (8)
    for a, b in [(2, -6), (-3, 9), (F("0.5"), 2), (4, 10), (-1, -5), (5, 0), (F("-2.5"), 5), (3, 1)]:
        a, b = F(a), F(b)
        x0 = -b / a
        add("intermediaire", "intersections-axes",
            f"Soit $f(x) = {lin(a, b)}$. Donne les coordonnées des points où sa droite coupe les deux axes.",
            [f"Axe des ordonnées : $x = 0$, $f(0) = {num(b)}$ : point $(0\\,;{num(b)})$.",
             f"Axe des abscisses : on résout ${lin(a, b)} = 0$, d'où $x = {num(x0)}$ : point $({num(x0)}\\,;0)$."],
            f"$(0\\,;{num(b)})$ et $({num(x0)}\\,;0)$" if b != 0 else "la droite coupe les deux axes à l'origine $(0\\,;0)$")
    return _fin(E)


# ====================================================================
# 3e — TRANSLATIONS ET VECTEURS
# ====================================================================
def _v(a, b):
    return f"\\overrightarrow{{{a}{b}}}"


def g3_vecteurs():
    E = []

    def add(*t):
        E.append(t)

    L = [("A", "B", "C", "D"), ("E", "F", "G", "H"), ("M", "N", "P", "Q"), ("R", "S", "T", "U"), ("K", "L", "M", "N"),
         ("I", "J", "K", "L"), ("P", "Q", "R", "S"), ("U", "V", "W", "X"), ("B", "C", "D", "E"), ("O", "P", "Q", "R")]
    # -- égalité de vecteurs et parallélogramme (10)
    for P, Q, R, S in L[:4]:
        add("application", "egalite-parallelogramme",
            f"On sait que ${_v(P, Q)} = {_v(S, R)}$, et que ${P}$, ${Q}$, ${R}$ ne sont pas alignés. Quel quadrilatère est un parallélogramme ?",
            [f"${_v(P, Q)} = {_v(S, R)}$ équivaut à : ${P}{Q}{R}{S}$ est un parallélogramme.",
             f"Attention à l'ordre des lettres : ${_v(P, Q)} = {_v(S, R)}$ donne ${P}{Q}{R}{S}$ (on fait le tour de la figure), et non ${P}{Q}{S}{R}$."],
            f"${P}{Q}{R}{S}$")
    for P, Q, R, S in L[4:7]:
        add("intermediaire", "egalite-parallelogramme",
            f"${P}{Q}{R}{S}$ est un parallélogramme. Complète les égalités : ${_v(P, Q)} = \\ldots$ et ${_v(P, S)} = \\ldots$",
            [f"Côtés opposés de même direction, même sens et même longueur : ${_v(P, Q)} = {_v(S, R)}$ et ${_v(P, S)} = {_v(Q, R)}$."],
            f"${_v(P, Q)} = {_v(S, R)}$ et ${_v(P, S)} = {_v(Q, R)}$")
    for P, Q, R, S in L[7:10]:
        add("intermediaire", "egalite-parallelogramme",
            f"La translation de vecteur ${_v(P, Q)}$ transforme ${R}$ en ${S}$. Quelle égalité vectorielle peut-on écrire ? Quel parallélogramme obtient-on ?",
            [f"Par définition, ${_v(R, S)} = {_v(P, Q)}$.", f"Donc ${P}{Q}{S}{R}$ est un parallélogramme (éventuellement aplati)."],
            f"${_v(P, Q)} = {_v(R, S)}$ ; ${P}{Q}{S}{R}$")
    # -- relation de Chasles (10)
    ch = [("\\overrightarrow{AB} + \\overrightarrow{BC}", "\\overrightarrow{AC}", "La fin du premier vecteur est le début du second."),
          ("\\overrightarrow{MN} + \\overrightarrow{NP} + \\overrightarrow{PQ}", "\\overrightarrow{MQ}", "On enchaîne : $M \\to N \\to P \\to Q$."),
          ("\\overrightarrow{CA} + \\overrightarrow{AB}", "\\overrightarrow{CB}", "$C \\to A \\to B$."),
          ("\\overrightarrow{EF} + \\overrightarrow{FG} + \\overrightarrow{GE}", "\\overrightarrow{0}", "On part de $E$ et on revient en $E$ : c'est le vecteur nul."),
          ("\\overrightarrow{RS} + \\overrightarrow{ST} + \\overrightarrow{TU} + \\overrightarrow{UV}", "\\overrightarrow{RV}", "$R \\to S \\to T \\to U \\to V$."),
          ("\\overrightarrow{BA} + \\overrightarrow{CB}", "\\overrightarrow{CA}", "On change l'ordre : $\\overrightarrow{CB} + \\overrightarrow{BA}$, soit $C \\to B \\to A$."),
          ("\\overrightarrow{AB} + \\overrightarrow{CD} + \\overrightarrow{BC}", "\\overrightarrow{AD}", "On réordonne : $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD}$."),
          ("\\overrightarrow{KL} + \\overrightarrow{LK}", "\\overrightarrow{0}", "Aller de $K$ à $L$ puis revenir en $K$ : vecteur nul.")]
    for ex, r, j in ch:
        add("intermediaire" if ex.count("overrightarrow") > 2 else "application", "chasles",
            f"Simplifie à l'aide de la relation de Chasles : ${ex}$.", [j, f"${ex} = {r}$."], f"${r}$")
    add("intermediaire", "chasles", "Complète : $\\overrightarrow{AC} = \\overrightarrow{AB} + \\ldots$",
        ["Pour aller de $A$ à $C$ en passant par $B$, il faut ensuite aller de $B$ à $C$."], "$\\overrightarrow{BC}$")
    add("intermediaire", "chasles", "Complète : $\\overrightarrow{MP} = \\ldots + \\overrightarrow{NP}$",
        ["Le premier vecteur doit partir de $M$ et arriver en $N$."], "$\\overrightarrow{MN}$")
    # -- image par une translation (10)
    for (A, B, M) in [("A", "B", "M"), ("E", "F", "G"), ("R", "S", "T"), ("K", "L", "J")]:
        add("application", "image-translation",
            f"$M'$ est l'image de ${M}$ par la translation de vecteur ${_v(A, B)}$. Quelle égalité vectorielle peut-on écrire ? Quel quadrilatère est un parallélogramme ?".replace("$M'$ est l'image de $M$", "$M'$ est l'image de $M$").replace("M'", M + "'"),
            [f"Par définition : ${_v(M, M + chr(39))} = {_v(A, B)}$.", f"Donc ${A}{B}{M}'{M}$ est un parallélogramme (éventuellement aplati)."],
            f"${_v(M, M + chr(39))} = {_v(A, B)}$ ; ${A}{B}{M}'{M}$")
    add("application", "image-translation", "Quelle est l'image du point $A$ par la translation de vecteur $\\overrightarrow{AB}$ ?",
        ["La translation de vecteur $\\overrightarrow{AB}$ transforme $A$ en $B$."], "$B$")
    add("application", "image-translation", "Quelle est l'image du point $B$ par la translation de vecteur $\\overrightarrow{BA}$ ?",
        ["La translation de vecteur $\\overrightarrow{BA}$ transforme $B$ en $A$."], "$A$")
    add("approfondissement", "image-translation", "$C$ est l'image de $B$ par la translation de vecteur $\\overrightarrow{AB}$. Que représente le point $B$ pour le segment $[AC]$ ?",
        ["$\\overrightarrow{BC} = \\overrightarrow{AB}$ : on va de $B$ à $C$ comme de $A$ à $B$.", "$A$, $B$, $C$ sont alignés et $AB = BC$ : $B$ est le milieu de $[AC]$."],
        "le milieu de $[AC]$")
    add("approfondissement", "image-translation", "Par la translation de vecteur $\\overrightarrow{AB}$, le segment $[CD]$ de 4,5 cm a pour image $[C'D']$. Quelle est la longueur de $[C'D']$ ?",
        ["Une translation conserve les longueurs."], "$4{,}5$ cm")
    add("intermediaire", "image-translation", "$I$ est le milieu de $[AB]$. Quelle est l'image de $A$ par la translation de vecteur $\\overrightarrow{IB}$ ?",
        ["$I$ est le milieu de $[AB]$, donc $\\overrightarrow{AI} = \\overrightarrow{IB}$.", "La translation de vecteur $\\overrightarrow{IB}$ transforme donc $A$ en $I$."], "$I$")
    add("approfondissement", "image-translation", "On applique à un point $M$ la translation de vecteur $\\overrightarrow{AB}$, puis celle de vecteur $\\overrightarrow{BC}$. Par quelle translation unique passe-t-on directement de $M$ à son image finale ?",
        ["Enchaîner deux translations revient à additionner leurs vecteurs.", "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ (Chasles)."], "la translation de vecteur $\\overrightarrow{AC}$")
    # -- opposé et vecteur nul (8)
    on = [("Quel est l'opposé du vecteur $\\overrightarrow{AB}$ ?", "Même direction, même longueur, sens contraire : c'est $\\overrightarrow{BA}$.", "$\\overrightarrow{BA}$", "application"),
          ("Simplifie $\\overrightarrow{AB} + \\overrightarrow{BA}$.", "Aller de $A$ à $B$ puis revenir en $A$ : on ne s'est pas déplacé.", "$\\overrightarrow{0}$", "application"),
          ("Que représente le vecteur $\\overrightarrow{AA}$ ?", "Son origine et son extrémité sont confondues.", "le vecteur nul $\\overrightarrow{0}$", "application"),
          ("On sait que $\\overrightarrow{AB} = \\overrightarrow{0}$. Que peut-on dire des points $A$ et $B$ ?", "Le vecteur nul ne déplace aucun point.", "$A$ et $B$ sont confondus", "intermediaire"),
          ("$I$ est le milieu de $[AB]$. Compare $\\overrightarrow{AI}$ et $\\overrightarrow{IB}$.", "Même direction, même sens et même longueur ($AI = IB$).", "$\\overrightarrow{AI} = \\overrightarrow{IB}$", "intermediaire"),
          ("$I$ est le milieu de $[AB]$. Simplifie $\\overrightarrow{IA} + \\overrightarrow{IB}$.", "$\\overrightarrow{IA}$ et $\\overrightarrow{IB}$ sont opposés : leur somme est nulle.", "$\\overrightarrow{0}$", "approfondissement"),
          ("Vrai ou faux : $\\overrightarrow{AB}$ et $\\overrightarrow{BA}$ ont la même direction et la même longueur.", "Oui, seul le sens change.", "Vrai", "intermediaire"),
          ("Vrai ou faux : $\\overrightarrow{AB} = \\overrightarrow{BA}$ pour deux points distincts $A$ et $B$.", "Ils ont des sens contraires : ils sont opposés, pas égaux.", "Faux", "intermediaire")]
    for q, j, r, d in on:
        add(d, "oppose-nul", q, [j], r)
    # -- caractéristiques (6)
    vf = [("si $AB = CD$, alors $\\overrightarrow{AB} = \\overrightarrow{CD}$.", False, "Même longueur ne suffit pas : il faut aussi même direction et même sens."),
          ("si $\\overrightarrow{AB} = \\overrightarrow{CD}$, alors $AB = CD$.", True, "Deux vecteurs égaux ont la même longueur."),
          ("deux vecteurs égaux ont la même direction, le même sens et la même longueur.", True, "C'est la définition de l'égalité de deux vecteurs."),
          ("si $(AB)$ et $(CD)$ sont parallèles et $AB = CD$, alors $\\overrightarrow{AB} = \\overrightarrow{CD}$.", False, "Les sens peuvent être contraires : on aurait alors $\\overrightarrow{AB} = \\overrightarrow{DC}$."),
          ("le vecteur $\\overrightarrow{AB}$ et le segment $[AB]$ désignent le même objet.", False, "Le segment n'a pas de sens ; le vecteur a une direction, un sens et une longueur."),
          ("la translation de vecteur $\\overrightarrow{AB}$ transforme $A$ en $B$.", True, "C'est la définition de cette translation.")]
    for t, v, j in vf:
        add("approfondissement", "caracteristiques", f"Vrai ou faux : {t}", [j], "Vrai" if v else "Faux")
    # -- parallélogramme et somme (6)
    ps = [("$ABCD$ est un parallélogramme. Simplifie $\\overrightarrow{AB} + \\overrightarrow{AD}$.", "$\\overrightarrow{AD} = \\overrightarrow{BC}$, donc $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ (règle du parallélogramme).", "$\\overrightarrow{AC}$"),
          ("$ABCD$ est un parallélogramme. Simplifie $\\overrightarrow{DA} + \\overrightarrow{DC}$.", "$\\overrightarrow{DC} = \\overrightarrow{AB}$, donc $\\overrightarrow{DA} + \\overrightarrow{AB} = \\overrightarrow{DB}$.", "$\\overrightarrow{DB}$"),
          ("$ABCD$ est un parallélogramme de centre $O$. Complète : $\\overrightarrow{OA} = \\ldots$ (avec le point $C$).", "$O$ est le milieu de $[AC]$ : $\\overrightarrow{OA} = \\overrightarrow{CO}$.", "$\\overrightarrow{CO}$"),
          ("$ABCD$ est un parallélogramme de centre $O$. Complète : $\\overrightarrow{AO} = \\ldots$", "$O$ est le milieu de $[AC]$ : $\\overrightarrow{AO} = \\overrightarrow{OC}$.", "$\\overrightarrow{OC}$"),
          ("$ABCD$ est un parallélogramme. Simplifie $\\overrightarrow{AB} + \\overrightarrow{CD}$.", "$\\overrightarrow{CD} = \\overrightarrow{BA}$, donc $\\overrightarrow{AB} + \\overrightarrow{BA} = \\overrightarrow{0}$.", "$\\overrightarrow{0}$"),
          ("$ABCD$ est un parallélogramme. Simplifie $\\overrightarrow{BA} + \\overrightarrow{BC}$.", "$\\overrightarrow{BC} = \\overrightarrow{AD}$, donc $\\overrightarrow{BA} + \\overrightarrow{AD} = \\overrightarrow{BD}$.", "$\\overrightarrow{BD}$")]
    for q, j, r in ps:
        add("probleme" if "centre" not in q else "approfondissement", "parallelogramme-somme", q, [j], r)
    return _fin(E)


# ====================================================================
EXTRA = {
    ("quatrieme", "calcul-litteral"): g4_calcul_litteral,
    ("quatrieme", "fonctions"): g4_fonctions,
    ("quatrieme", "nombres-rationnels"): g4_nombres_rationnels,
    ("quatrieme", "operations-nombres-relatifs"): g4_relatifs,
    ("quatrieme", "parallelogrammes-translations"): g4_parallelogrammes,
    ("quatrieme", "pensee-informatique"): g4_pensee_info,
    ("quatrieme", "probabilites"): g4_probabilites,
    ("quatrieme", "puissances"): g4_puissances,
    ("quatrieme", "racine-carree"): g4_racine,
    ("quatrieme", "reperage"): g4_reperage,
    ("quatrieme", "representation-espace"): g4_espace,
    ("quatrieme", "transformations"): g4_transformations,
    ("quatrieme", "triangles"): g4_triangles,
    ("troisieme", "calcul-litteral"): g3_calcul_litteral,
    ("troisieme", "fonctions"): g3_fonctions,
    ("troisieme", "multiples-diviseurs"): g3_multiples,
    ("troisieme", "nombres-rationnels"): g3_rationnels,
    ("troisieme", "pensee-informatique"): g3_pensee_info,
    ("troisieme", "probabilites"): g3_probabilites,
    ("troisieme", "puissances"): g3_puissances,
    ("troisieme", "reperage"): g3_reperage,
    ("troisieme", "translations-vecteurs"): g3_vecteurs,
}
