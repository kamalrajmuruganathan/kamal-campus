# -*- coding: utf-8 -*-
"""Lot d : générateurs enrichis (maths lycée : 2de, 1re techno, Tle techno).

Expose EXTRA = {(niveau, slug): fonction -> 50 exercices}.
Toutes les réponses sont calculées (les programmes Python sont réellement exécutés).
"""
import contextlib
import io
import math
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction as F
from itertools import product as _produit

# ======================================================================
# Petites aides
# ======================================================================
ORDRE_DIFF = {"application": 0, "intermediaire": 1, "approfondissement": 2, "probleme": 3}


def arr(x, d=0):
    """Arrondi scolaire (demi vers le haut en valeur absolue)."""
    q = Decimal(1).scaleb(-d)
    return float(Decimal(repr(float(x))).quantize(q, rounding=ROUND_HALF_UP))


def _grouper(ent, sep):
    s = str(ent)
    if len(s) <= 3:
        return s
    g = []
    while s:
        g.insert(0, s[-3:])
        s = s[:-3]
    return sep.join(g)


def _num(x, d, sep_dec, sep_mil, garder):
    if isinstance(x, F):
        if x.denominator == 1:
            x = x.numerator
        else:
            x = float(x)
    if isinstance(x, int):
        signe = "-" if x < 0 else ""
        return signe + _grouper(abs(x), sep_mil)
    if d is None:
        d = 6
    v = arr(x, d)
    s = f"{abs(v):.{d}f}"
    if not garder and "." in s:
        s = s.rstrip("0").rstrip(".")
    ent, _, dec = s.partition(".")
    res = _grouper(int(ent), sep_mil) + ((sep_dec + dec) if dec else "")
    if v < 0 and res.strip("0,{}.") != "":
        res = "-" + res
    return res


def nb(x, d=None, garder=False):
    """Nombre pour une formule LaTeX : 2{,}5 ; 12\\,500."""
    return _num(x, d, "{,}", "\\,", garder)


def tx(x, d=None, garder=False):
    """Nombre hors formule : 2,5 ; 12 500."""
    return _num(x, d, ",", " ", garder)


def fl(f):
    """Fraction en LaTeX (entier si possible)."""
    f = F(f)
    if f.denominator == 1:
        return str(f.numerator)
    s = "-" if f < 0 else ""
    return f"{s}\\dfrac{{{abs(f.numerator)}}}{{{f.denominator}}}"


def dexact(f):
    """Écriture décimale exacte d'une fraction (dénominateur en 2^a 5^b), sinon None."""
    f = F(f)
    d = f.denominator
    while d % 2 == 0:
        d //= 2
    while d % 5 == 0:
        d //= 5
    if d != 1:
        return None
    return nb(float(f), 10)


def fx(f):
    """Fraction ou décimal exact, au mieux."""
    f = F(f)
    if f.denominator == 1:
        return nb(f.numerator)
    return dexact(f) or fl(f)


def fxa(f, d=2):
    """Fraction exacte, suivie d'une valeur approchée si elle n'est pas décimale."""
    f = F(f)
    if f.denominator == 1 or dexact(f):
        return fx(f)
    return f"{fl(f)} \\approx {nb(float(f), d, True)}"


def sg(x):
    """Terme signé : « + 3 » ou « - 3 » (pour écrire des expressions)."""
    return f"+ {nb(x)}" if x >= 0 else f"- {nb(-x)}"


def par(x):
    """Nombre entre parenthèses s'il est négatif."""
    return f"({nb(x)})" if x < 0 else nb(x)


def poly(coefs, v="x"):
    """Polynôme (coefficients du plus haut degré au constant), entiers ou Fractions."""
    n = len(coefs) - 1
    morceaux = []
    for i, c in enumerate(coefs):
        deg = n - i
        if c == 0:
            continue
        c = F(c)
        a = abs(c)
        if deg == 0:
            corps = fx(a)
        else:
            ca = "" if a == 1 else fx(a)
            corps = ca + (v if deg == 1 else f"{v}^{deg}")
        if not morceaux:
            morceaux.append(("-" if c < 0 else "") + corps)
        else:
            morceaux.append(("- " if c < 0 else "+ ") + corps)
    return " ".join(morceaux) if morceaux else "0"


def affine(m, p, v="x"):
    return poly([m, p], v)


def coef(m):
    """Coefficient devant une parenthèse ou une lettre : 1 -> '', -1 -> '-'."""
    m = F(m)
    return "" if m == 1 else ("-" if m == -1 else fx(m))


def xm(a, v="x"):
    """« x - a » écrit proprement (x + 2 si a = -2, x si a = 0)."""
    a = F(a)
    if a == 0:
        return v
    return f"{v} - {fx(a)}" if a > 0 else f"{v} + {fx(-a)}"


def pt(x, y):
    return f"({fx(x)}\\,;{fx(y)})"


def vec(x, y):
    return f"\\begin{{pmatrix}} {fx(x)} \\\\ {fx(y)} \\end{{pmatrix}}"


def executer(code):
    """Exécute réellement un programme Python ; renvoie (variables, texte affiché)."""
    tampon = io.StringIO()
    env = {}
    with contextlib.redirect_stdout(tampon):
        exec(code, env)  # noqa: S102  (programmes écrits dans ce fichier)
    return env, tampon.getvalue().strip()


def bloc(code):
    return "\n```python\n" + code.strip("\n") + "\n```\n"


def _fin(E):
    if len(E) != 50:
        raise ValueError(f"{len(E)} exercices au lieu de 50")
    enonces = [e[2] for e in E]
    if len(set(enonces)) != 50:
        dbl = [e for e in enonces if enonces.count(e) > 1]
        raise ValueError(f"énoncé en double : {dbl[0][:80]}")
    E = sorted(E, key=lambda t: ORDRE_DIFF[t[0]])
    return [{"id": i + 1, "difficulte": d, "notion": n, "enonce": e,
             "corrige": list(c), "reponse": r} for i, (d, n, e, c, r) in enumerate(E)]


def _cubes(coefs):
    """Dérivée d'un polynôme (coefficients décroissants)."""
    n = len(coefs) - 1
    return [c * (n - i) for i, c in enumerate(coefs[:-1])]


def _val(coefs, x):
    n = len(coefs) - 1
    return sum(F(c) * F(x) ** (n - i) for i, c in enumerate(coefs))


# ======================================================================
# 1re techno — DÉRIVATION
# ======================================================================
def g1t_derivation():
    E = []
    # a) fonction dérivée d'un polynôme
    P = [[2, -3, 5, 1], [0, 5, -3, 7], [1, 0, -4, 2], [-1, 2, 0, -6], [4, 0, 0, -1],
         [0, -4, 8, 0], [2, 1, -1, 9], [0, 3, -12, 5]]
    for c in P:
        while c and c[0] == 0 and len(c) > 1:
            c = c[1:]
        d = _cubes(c)
        E.append(("application", "fonction-derivee",
                  f"Déterminer la fonction dérivée de $f(x) = {poly(c)}$, définie sur $\\mathbb{{R}}$.",
                  ["On dérive terme à terme : $(x^3)' = 3x^2$, $(x^2)' = 2x$, $(x)' = 1$ et la dérivée d'une constante est $0$.",
                   "On utilise aussi $(k\\,u)' = k\\,u'$.",
                   f"$f'(x) = {poly(d)}$."],
                  f"$f'(x) = {poly(d)}$"))
    # b) nombre dérivé
    Nd = [([1, -2, 3], 4), ([3, 0, -5], -2), ([1, 0, -3, 1], 2), ([-2, 5, 1], 3), ([2, -1, 0, 4], -1),
          ([0, 0, 1, 0, 0], 5)]
    for c, a in Nd:
        while c[0] == 0:
            c = c[1:]
        d = _cubes(c)
        v = _val(d, a)
        E.append(("application", "nombre-derive",
                  f"Soit $f(x) = {poly(c)}$. Calculer le nombre dérivé $f'({a})$.",
                  [f"On dérive : $f'(x) = {poly(d)}$.",
                   f"On remplace $x$ par ${a}$ : $f'({a}) = {fx(v)}$."],
                  f"$f'({a}) = {fx(v)}$"))
    # nombres dérivés : coefficients décimaux, lecture graphique, taux de variation
    c, a = [F(1, 2), -2, 1, 0], 4
    d = _cubes(c)
    E.append(("intermediaire", "nombre-derive",
              f"Soit $f(x) = {poly(c)}$. Calculer le nombre dérivé $f'({a})$.",
              [f"On dérive terme à terme avec $(k\\,u)' = k\\,u'$ : $f'(x) = {poly(d)}$.",
               f"$f'({a}) = {fx(d[0])} \\times {a}^2 {sg(d[1])} \\times {a} {sg(d[2])} = {fx(_val(d, a))}$."],
              f"$f'({a}) = {fx(_val(d, a))}$"))
    xa, ya, xb, yb = 1, 3, 3, 7
    m = F(yb - ya, xb - xa)
    E.append(("intermediaire", "nombre-derive",
              f"La tangente à la courbe de $f$ au point $\\mathrm{{A}}{pt(xa, ya)}$ passe aussi par le point $\\mathrm{{B}}{pt(xb, yb)}$. Que vaut $f'({xa})$ ?",
              [f"$f'({xa})$ est le coefficient directeur de la tangente en $\\mathrm{{A}}$, c'est-à-dire de la droite $(\\mathrm{{AB}})$.",
               f"$f'({xa}) = \\dfrac{{y_\\mathrm{{B}} - y_\\mathrm{{A}}}}{{x_\\mathrm{{B}} - x_\\mathrm{{A}}}} = \\dfrac{{{yb} - {ya}}}{{{xb} - {xa}}} = {fx(m)}$."],
              f"$f'({xa}) = {fx(m)}$"))
    E.append(("intermediaire", "nombre-derive",
              "Soit $f(x) = x^3$. Calculer le taux de variation de $f$ entre $1$ et $1 + h$ (avec $h \\neq 0$), puis en déduire $f'(1)$.",
              ["$(1 + h)^3 = 1 + 3h + 3h^2 + h^3$, donc $f(1 + h) - f(1) = 3h + 3h^2 + h^3$.",
               "$\\dfrac{f(1 + h) - f(1)}{h} = 3 + 3h + h^2$.",
               "Quand $h$ tend vers $0$, on obtient $f'(1) = 3$ (on retrouve $3 \\times 1^2$ avec $(x^3)' = 3x^2$)."],
              "$3 + 3h + h^2$, donc $f'(1) = 3$"))
    # c) tangente
    T = [([1, 0, 0], 3), ([1, -4, 1], 1), ([2, 3, -1], -1), ([-1, 6, 0], 2), ([1, 0, 0, 0], 1),
         ([1, 0, -2, 0], 2), ([-3, 0, 4], 1)]
    for c, a in T:
        d = _cubes(c)
        fa, m = _val(c, a), _val(d, a)
        p = fa - m * a
        E.append(("intermediaire", "tangente",
                  f"Soit $f(x) = {poly(c)}$. Déterminer l'équation réduite de la tangente à la courbe de $f$ au point d'abscisse ${a}$.",
                  [f"$f({a}) = {fx(fa)}$ et $f'(x) = {poly(d)}$, donc $f'({a}) = {fx(m)}$.",
                   f"$y = f'({a})({xm(a)}) + f({a})$, soit $y = {coef(m)}({xm(a)}) {sg(fa) if fa != 0 else '+ 0'}$.",
                   f"En développant : $y = {affine(m, p)}$."],
                  f"$y = {affine(m, p)}$"))
    # d) développer puis dériver (polynômes de degré 2)
    def _terme_x(k):
        return ("+ " if k >= 0 else "- ") + ("" if abs(k) == 1 else nb(abs(k))) + "x"
    for a, b, c, d in [(2, 1, 3, -4), (1, -5, 2, 3), (-1, 4, 5, 2)]:
        dev = [a * c, a * d + b * c, b * d]
        der = _cubes(dev)
        E.append(("approfondissement", "developper-deriver",
                  f"Soit $f(x) = ({affine(a, b)})({affine(c, d)})$. Développer $f(x)$, puis en déduire $f'(x)$.",
                  [f"On développe : $f(x) = {poly([a * c, 0, 0])} {_terme_x(a * d)} {_terme_x(b * c)} {sg(b * d)} = {poly(dev)}$.",
                   f"On dérive terme à terme : $f'(x) = {poly(der)}$.",
                   f"Attention : multiplier les dérivées des deux facteurs donnerait ${par(a)} \\times {par(c)} = {nb(a * c)}$, ce qui est faux."],
                  f"$f(x) = {poly(dev)}$ ; $f'(x) = {poly(der)}$"))
    # coût marginal : C(q) polynôme de degré 3, C'(q) > 0
    CM = [("pièces mécaniques", [F(1, 100), F(-6, 10), 15, 200], 60, 30, "pièce"),
          ("chaises", [F(2, 100), F(-12, 10), 30, 500], 80, 50, "chaise"),
          ("lampes artisanales", [F(1, 10), -3, 40, 1000], 30, 15, "lampe")]
    for nom, c, Q, q0, unite in CM:
        d = _cubes(c)
        assert d[1] ** 2 - 4 * d[0] * d[2] < 0  # coût total croissant
        cm = _val(d, q0)
        eur = tx(cm) if F(cm).denominator == 1 else tx(cm, 2, True)
        E.append(("approfondissement", "cout-marginal",
                  f"Une entreprise fabrique $q$ {nom} par jour ($0 \\leqslant q \\leqslant {Q}$). Le coût total, en euros, est $C(q) = {poly(c, 'q')}$. On assimile le coût marginal à $C'(q)$. Calculer le coût marginal pour $q = {q0}$ et l'interpréter.",
                  [f"$C'(q) = {poly(d, 'q')}$.",
                   f"$C'({q0}) = {fx(d[0])} \\times {q0}^2 {sg(d[1])} \\times {q0} {sg(d[2])} = {fx(cm)}$.",
                   f"Interprétation : quand on fabrique déjà {q0} {nom}, produire une {unite} de plus coûte environ {eur} €."],
                  f"$C'({q0}) = {fx(cm)}$ : environ {eur} € pour une {unite} supplémentaire"))
    # e) variations
    for a, b, c in [(1, -6, 5), (1, 4, -1), (2, -8, 3), (-1, 10, -9), (-2, -4, 6), (3, -12, 2)]:
        x0 = F(-b, 2 * a)
        y0 = _val([a, b, c], x0)
        sens1, sens2 = ("décroissante", "croissante") if a > 0 else ("croissante", "décroissante")
        ext = "minimum" if a > 0 else "maximum"
        signe1 = "<" if a > 0 else ">"
        E.append(("approfondissement", "variations",
                  f"Étudier les variations de $f(x) = {poly([a, b, c])}$ sur $\\mathbb{{R}}$ et préciser son extremum.",
                  [f"$f'(x) = {affine(2 * a, b)}$, qui s'annule en $x = {fx(x0)}$.",
                   f"$f'(x) {signe1} 0$ pour $x < {fx(x0)}$ et change de signe en ${fx(x0)}$.",
                   f"$f$ est {sens1} sur $]-\\infty\\,;{fx(x0)}]$ puis {sens2} sur $[{fx(x0)}\\,;+\\infty[$.",
                   f"$f({fx(x0)}) = {fx(y0)}$ : c'est le {ext}."],
                  f"{sens1.capitalize()} puis {sens2} ; {ext} $f({fx(x0)}) = {fx(y0)}$"))
    for k in (1, 2):
        c = [1, 0, -3 * k * k, 0]
        E.append(("approfondissement", "variations",
                  f"Soit $f(x) = {poly(c)}$. Déterminer les extremums locaux de $f$.",
                  [f"$f'(x) = 3x^2 - {3 * k * k} = 3(x - {k})(x + {k})$.",
                   f"$f'$ est positive sur $]-\\infty\\,;-{k}]$, négative sur $[-{k}\\,;{k}]$, positive sur $[{k}\\,;+\\infty[$.",
                   f"Maximum local $f(-{k}) = {2 * k ** 3}$ ; minimum local $f({k}) = {-2 * k ** 3}$."],
                  f"Maximum local ${2 * k ** 3}$ en $-{k}$ ; minimum local ${-2 * k ** 3}$ en ${k}$"))
    # f) cours
    C = [("Vrai ou faux : si $f'(a) = 0$, alors $f$ admet un extremum en $a$.",
          ["Faux : la réciproque est fausse.", "Contre-exemple : $f(x) = x^3$ vérifie $f'(0) = 0$ mais $f$ est croissante sur $\\mathbb{R}$."],
          "Faux (contre-exemple $x^3$ en $0$)"),
         ("Vrai ou faux : la dérivée de $x^3$ est $3x^3$.",
          ["Faux : l'exposant descend en facteur et diminue de $1$.", "$(x^3)' = 3x^2$ ; par exemple, la dérivée de $5x^3$ est $15x^2$."],
          "Faux : $(x^3)' = 3x^2$"),
         ("Que représente graphiquement le nombre dérivé $f'(a)$ ?",
          ["$f'(a)$ est la limite du taux de variation entre $a$ et $a + h$ quand $h$ tend vers $0$.",
           "C'est le coefficient directeur de la tangente à la courbe au point d'abscisse $a$."],
          "Le coefficient directeur de la tangente au point d'abscisse $a$"),
         ("On sait que $f'(x) < 0$ pour tout $x$ de $[1\\,;5]$. Que peut-on dire de $f$ sur cet intervalle ?",
          ["Si $f' < 0$ sur un intervalle, alors $f$ est décroissante sur cet intervalle."],
          "$f$ est décroissante sur $[1\\,;5]$"),
         ("La tangente à la courbe de $f$ au point d'abscisse $2$ est horizontale. Que vaut $f'(2)$ ?",
          ["Une droite horizontale a un coefficient directeur nul.", "Donc $f'(2) = 0$."], "$f'(2) = 0$"),
         ("Calculer le taux de variation de $f(x) = x^2$ entre $3$ et $3 + h$, puis en déduire $f'(3)$.",
          ["$\\dfrac{(3+h)^2 - 9}{h} = \\dfrac{6h + h^2}{h} = 6 + h$.", "Quand $h$ tend vers $0$, on obtient $f'(3) = 6$."],
          "$6 + h$, donc $f'(3) = 6$")]
    for e, c, r in C:
        E.append(("application" if "Vrai" not in e else "intermediaire", "cours", e, c, r))
    # g) problèmes
    for a, b, c, Q in [(2, 120, 1000, 50), (1, 80, 1200, 60), (3, 180, 1500, 50), (5, 400, 5000, 70)]:
        q0 = F(b, 2 * a)
        B0 = _val([-a, b, -c], q0)
        E.append(("probleme", "probleme",
                  f"Une entreprise fabrique $q$ centaines d'objets ($0 \\leqslant q \\leqslant {Q}$). Son bénéfice, en euros, est $B(q) = {poly([-a, b, -c], 'q')}$. Pour quelle production le bénéfice est-il maximal ? Que vaut-il ?",
                  [f"$B'(q) = {affine(-2 * a, b, 'q')}$, qui s'annule en $q = {fx(q0)}$.",
                   f"$B'$ est positive avant ${fx(q0)}$ et négative après : $B$ croît puis décroît.",
                   f"$B({fx(q0)}) = {nb(int(B0))}$."],
                  f"Pour $q = {fx(q0)}$, soit ${nb(q0 * 100)}$ objets ; bénéfice maximal ${nb(int(B0))}$ €"))
    E.append(("probleme", "probleme",
              "Une bille lâchée sans vitesse parcourt $d(t) = 4{,}9t^2$ mètres en $t$ secondes. La vitesse instantanée est $d'(t)$, en m/s. Calculer la vitesse à $t = 2$ s.",
              ["$d'(t) = 9{,}8t$.", "$d'(2) = 19{,}6$ m/s."], "$19{,}6$ m/s"))
    E.append(("probleme", "probleme",
              "Une voiture démarre : elle parcourt $d(t) = 0{,}5t^2$ mètres en $t$ secondes ($0 \\leqslant t \\leqslant 20$). Calculer sa vitesse instantanée $d'(t)$ à $t = 15$ s, en m/s puis en km/h.",
              ["$d'(t) = t$, donc $d'(15) = 15$ m/s.", "$15 \\times 3{,}6 = 54$ km/h."], "$15$ m/s, soit $54$ km/h"))
    return _fin(E)


# ======================================================================
# 1re techno — FONCTIONS DE LA VARIABLE RÉELLE
# ======================================================================
def g1t_fonctions():
    E = []
    # a) images
    for c, x in [([1, -3, 2], -2), ([2, 0, -5], 3), ([-1, 4, 1], -1), ([3, -2, 0], F(1, 2)),
                 ([-2, 1, 6], 2), ([1, 5, -4], 0), ([F(1, 2), -1, 3], 4)]:
        v = _val(c, x)
        E.append(("application", "image",
                  f"Soit $f(x) = {poly(c)}$. Calculer l'image de ${fx(x)}$ par $f$.",
                  [f"On remplace $x$ par ${fx(x)}$ dans l'expression de $f$.",
                   f"$f({fx(x)}) = {fx(v)}$."],
                  f"$f({fx(x)}) = {fx(v)}$"))
    # b) taux de variation
    for c, a, b in [([1, 0, 0], 1, 4), ([1, 0, 0], -3, 1), ([2, -1, 0], 0, 3), ([-1, 4, 0], 1, 5),
                    ([1, -6, 2], 2, 7), ([3, 0, -4], -2, 2), ([0, 5, -1], 1, 9), ([1, 0, 0, 0], 1, 3),
                    ([-2, 0, 8], 1, 4)]:
        while c[0] == 0:
            c = c[1:]
        fa, fb = _val(c, a), _val(c, b)
        t = F(fb - fa, b - a)
        sens = "augmente" if t > 0 else ("diminue" if t < 0 else "ne varie pas")
        d = "application" if len(c) <= 3 and c[0] in (1,) else "intermediaire"
        E.append((d, "taux-variation",
                  f"Soit $f(x) = {poly(c)}$. Calculer le taux de variation de $f$ entre ${a}$ et ${b}$.",
                  [f"$f({a}) = {fx(fa)}$ et $f({b}) = {fx(fb)}$.",
                   f"$\\tau = \\dfrac{{f({b}) - f({a})}}{{{b} - {par(a)}}} = \\dfrac{{{fx(fb - fa)}}}{{{b - a}}} = {fx(t)}$.",
                   f"Entre ${a}$ et ${b}$, $f$ {sens} en moyenne de ${fx(abs(t))}$ par unité." if t != 0 else
                   "Le taux est nul : en moyenne, $f$ ne varie pas entre ces deux valeurs."],
                  f"$\\tau = {fx(t)}$"))
    # c) sommet
    for a, b, c in [(1, -4, 7), (2, 12, 5), (-1, 6, -2), (3, -6, 1), (-2, -8, 3), (1, 10, 20),
                    (-1, -2, 8), (4, -8, -1), (F(1, 2), -3, 1)]:
        al = F(-b) / (2 * F(a))
        be = _val([a, b, c], al)
        E.append(("intermediaire", "sommet",
                  f"Déterminer les coordonnées du sommet $\\mathrm{{S}}$ de la parabole d'équation $y = {poly([a, b, c])}$.",
                  [f"$\\alpha = -\\dfrac{{b}}{{2a}} = -\\dfrac{{{b}}}{{2 \\times {par(a)}}} = {fx(al)}$.",
                   f"$f({fx(al)}) = {fx(be)}$.",
                   f"Le sommet est $\\mathrm{{S}}{pt(al, be)}$ ; l'axe de symétrie est la droite $x = {fx(al)}$."],
                  f"$\\mathrm{{S}}{pt(al, be)}$"))
    # d) tableau de variations / extremum
    for a, b, c in [(1, -2, -3), (-1, 8, -7), (2, 4, 1), (-3, 12, -5), (1, 6, 9), (-1, -4, 0), (2, -20, 30)]:
        al = F(-b, 2 * a)
        be = _val([a, b, c], al)
        if a > 0:
            texte = f"décroissante sur $]-\\infty\\,;{fx(al)}]$, croissante sur $[{fx(al)}\\,;+\\infty[$, minimum ${fx(be)}$ atteint en ${fx(al)}$"
        else:
            texte = f"croissante sur $]-\\infty\\,;{fx(al)}]$, décroissante sur $[{fx(al)}\\,;+\\infty[$, maximum ${fx(be)}$ atteint en ${fx(al)}$"
        E.append(("approfondissement", "variations",
                  f"Dresser le tableau de variations de $f(x) = {poly([a, b, c])}$ sur $\\mathbb{{R}}$ (donner les intervalles et l'extremum).",
                  [f"$a = {a}$ est {'positif : la parabole est tournée vers le haut' if a > 0 else 'négatif : la parabole est tournée vers le bas'}.",
                   f"$\\alpha = -\\dfrac{{{b}}}{{2 \\times {par(a)}}} = {fx(al)}$ et $f({fx(al)}) = {fx(be)}$.",
                   f"$f$ est {texte}."],
                  texte[0].upper() + texte[1:]))
    # e) symétrie et racines
    for r1, r2, a in [(1, 5, 1), (-2, 4, 2), (-3, 3, -1), (0, 6, 1), (-5, -1, 3)]:
        al = F(r1 + r2, 2)
        E.append(("intermediaire", "racines-symetrie",
                  f"Soit $f(x) = {coef(a)}{xm(r1) if r1 == 0 else '(' + xm(r1) + ')'}({xm(r2)})$. Donner les racines de $f$, puis l'abscisse du sommet de la parabole.",
                  [f"Un produit est nul si l'un des facteurs est nul : $x = {r1}$ ou $x = {r2}$.",
                   f"Les deux racines ont la même image ($0$) : le sommet est à mi-chemin, $\\alpha = \\dfrac{{{r1} + {par(r2)}}}{{2}} = {fx(al)}$."],
                  f"Racines ${r1}$ et ${r2}$ ; $\\alpha = {fx(al)}$"))
    for x1, x2, k in [(-1, 7, 4), (2, 10, -3)]:
        al = F(x1 + x2, 2)
        E.append(("intermediaire", "racines-symetrie",
                  f"Une parabole passe par les points $({x1}\\,;{k})$ et $({x2}\\,;{k})$. Quelle est l'équation de son axe de symétrie ?",
                  ["Deux points de même ordonnée sont symétriques par rapport à l'axe de la parabole.",
                   f"$\\alpha = \\dfrac{{{x1} + {x2}}}{{2}} = {fx(al)}$."],
                  f"$x = {fx(al)}$"))
    # f) cours
    C = [("La parabole d'équation $y = -3x^2 + x + 7$ est-elle tournée vers le haut ou vers le bas ? Son sommet est-il un minimum ou un maximum ?",
          ["Le coefficient $a = -3$ est négatif.", "La parabole est tournée vers le bas : le sommet est un maximum."],
          "Vers le bas ; le sommet est un maximum"),
         ("Vrai ou faux : une parabole coupe toujours l'axe des abscisses.",
          ["Faux.", "Contre-exemple : $y = x^2 + 1$ ; son sommet $(0\\,;1)$ est au-dessus de l'axe et elle est tournée vers le haut : elle n'a aucune racine."],
          "Faux (exemple : $y = x^2 + 1$)"),
         ("Le taux de variation de $f$ entre deux réels quelconques de l'intervalle $[0\\,;4]$ est toujours négatif. Que peut-on dire de $f$ sur $[0\\,;4]$ ?",
          ["Un taux de variation toujours négatif sur un intervalle signifie que $f$ est décroissante sur cet intervalle."],
          "$f$ est décroissante sur $[0\\,;4]$"),
         ("Comment lire graphiquement les solutions de l'inéquation $f(x) > 3$ ?",
          ["On trace la droite horizontale $y = 3$.", "Les solutions sont les abscisses des points de la courbe situés strictement au-dessus de cette droite."],
          "Abscisses des points de la courbe strictement au-dessus de la droite $y = 3$"),
         ("Interpréter géométriquement le taux de variation $\\dfrac{f(b) - f(a)}{b - a}$.",
          ["C'est le coefficient directeur de la sécante passant par les points de la courbe d'abscisses $a$ et $b$."],
          "Le coefficient directeur de la sécante entre les points d'abscisses $a$ et $b$")]
    for e, c, r in C:
        E.append(("application", "cours", e, c, r))
    # g) problèmes
    for v0, h0 in [(10, 2), (14, 1), (8, F(3, 2))]:
        tm = F(v0, 10)
        hm = -5 * tm * tm + v0 * tm + h0
        E.append(("probleme", "probleme",
                  f"La hauteur (en m) d'un ballon lancé vers le haut est modélisée par $h(t) = -5t^2 + {v0}t + {fx(h0)}$, $t$ en secondes. À quel instant le ballon est-il au plus haut, et à quelle hauteur ?",
                  [f"$a = -5 < 0$ : la parabole est tournée vers le bas, le sommet est un maximum.",
                   f"$\\alpha = -\\dfrac{{{v0}}}{{2 \\times (-5)}} = {fx(tm)}$.",
                   f"$h({fx(tm)}) = {fx(hm)}$."],
                  f"À $t = {fx(tm)}$ s, à ${fx(hm)}$ m"))
    for L in (40, 60, 100):
        x0 = F(L, 4)
        A = x0 * (L - 2 * x0)
        E.append(("probleme", "probleme",
                  f"Avec ${L}$ m de grillage, on clôture un enclos rectangulaire le long d'un mur (le mur forme un côté). Si $x$ est la largeur (en m), l'aire est $A(x) = x({L} - 2x)$. Quelle largeur rend l'aire maximale ?",
                  [f"$A(x) = -2x^2 + {L}x$ : $a = -2 < 0$, le sommet est un maximum.",
                   f"$\\alpha = -\\dfrac{{{L}}}{{2 \\times (-2)}} = {fx(x0)}$.",
                   f"$A({fx(x0)}) = {fx(x0)} \\times {fx(L - 2 * x0)} = {fx(A)}$ m²."],
                  f"$x = {fx(x0)}$ m ; aire maximale ${fx(A)}$ m²"))
    return _fin(E)


# ======================================================================
# 1re techno — PROBABILITÉS ET VARIABLES ALÉATOIRES
# ======================================================================
_CTX_BERN = [
    ("Un archer atteint la cible avec une probabilité de ${p}$. Il tire {n} flèches ; les tirs sont indépendants.",
     "« la flèche atteint la cible »", "flèche dans la cible", "flèches dans la cible", F(7, 10)),
    ("Dans une usine, une pièce est défectueuse avec une probabilité de ${p}$. On prélève {n} pièces ; les prélèvements sont assimilés à des tirages indépendants.",
     "« la pièce est défectueuse »", "pièce défectueuse", "pièces défectueuses", F(1, 10)),
    ("Une graine germe avec une probabilité de ${p}$. On sème {n} graines, qui germent indépendamment les unes des autres.",
     "« la graine germe »", "graine qui germe", "graines qui germent", F(4, 5)),
    ("Un joueur de basket réussit un lancer franc avec une probabilité de ${p}$. Il tente {n} lancers francs indépendants.",
     "« le lancer est réussi »", "lancer réussi", "lancers réussis", F(3, 5)),
    ("À un carrefour, le feu est vert à l'arrivée d'un cycliste avec une probabilité de ${p}$. Il passe à ce carrefour {n} jours de suite (situations indépendantes).",
     "« le feu est vert »", "feu vert", "feux verts", F(2, 5)),
    ("Un élève répond au hasard à des questions d'un QCM ; chaque question a 4 réponses dont une seule est juste, donc il répond juste avec une probabilité de ${p}$. Il répond à {n} questions.",
     "« la réponse est juste »", "réponse juste", "réponses justes", F(1, 4)),
]
FOIS = " \\times "
_NB_LETTRES = {2: "deux", 3: "trois", 4: "quatre"}


def _ctx(i, n):
    intro, sdef, s1, s2, p = _CTX_BERN[i]
    return intro.format(p=fx(p), n=_NB_LETTRES[n]), sdef, s1, s2, p


def g1t_probas():
    E = []
    # a) probabilité d'un chemin
    for i, n, chem in [(0, 3, "SSÉ"), (1, 3, "ÉÉS"), (2, 2, "SÉ"), (3, 3, "SÉS"), (4, 2, "ÉÉ"), (5, 3, "ÉSÉ"),
                       (0, 2, "SS"), (2, 3, "SSS")]:
        intro, sdef, _, _, p = _ctx(i, n)
        q = 1 - p
        facteurs = [fx(p) if c == "S" else fx(q) for c in chem]
        val = F(1)
        for c in chem:
            val *= p if c == "S" else q
        E.append(("application", "arbre-chemin",
                  f"{intro} On note S l'événement {sdef} et É l'événement contraire. Calculer la probabilité du chemin {' '.join(chem)} de l'arbre.",
                  [f"$P(\\mathrm{{S}}) = {fx(p)}$ et $P(\\text{{É}}) = 1 - {fx(p)} = {fx(q)}$.",
                   "On multiplie les probabilités le long du chemin.",
                   f"${FOIS.join(facteurs)} = {fx(val)}$."],
                  f"${fx(val)}$"))
    # b) exactement k succès
    for i, n, k in [(0, 3, 2), (1, 3, 1), (2, 2, 1), (3, 3, 1), (4, 3, 2), (5, 2, 1), (1, 4, 1), (3, 2, 2), (2, 3, 0)]:
        intro, sdef, s1, s2, p = _ctx(i, n)
        q = 1 - p
        chemins = ["".join(t) for t in _produit("SÉ", repeat=n) if t.count("S") == k]
        nbc = len(chemins)
        val = nbc * p ** k * q ** (n - k)
        lib = f"exactement {k} {s1 if k == 1 else s2}" if k > 0 else f"aucune {s1}" if s1.split()[0] in ("flèche", "pièce", "graine", "réponse") else f"aucun {s1}"
        un = p ** k * q ** (n - k)
        liste = ", ".join(chemins) if n <= 3 else f"{nbc} chemins (le succès peut être à l'une des {n} places)"
        question = f"Calculer la probabilité d'obtenir {lib}." if k > 0 else "Calculer la probabilité qu'aucune graine ne germe."
        E.append(("intermediaire", "exactement-k-succes",
                  f"{intro} {question}",
                  [f"Chemins qui conviennent : {liste}." if n <= 3 else f"Il y a {liste}.",
                   f"Chaque chemin a pour probabilité ${fx(p)}^{{{k}}} \\times {fx(q)}^{{{n - k}}} = {fx(un)}$.",
                   f"$P = {nbc} \\times {fx(un)} = {fx(val)}$."],
                  f"${fx(val)}$"))
    # c) au moins un succès
    for i, n in [(0, 3), (1, 3), (5, 2), (4, 3), (1, 2), (5, 3)]:
        intro, sdef, s1, s2, p = _ctx(i, n)
        q = 1 - p
        val = 1 - q ** n
        E.append(("approfondissement", "au-moins-un",
                  f"{intro} Calculer la probabilité d'obtenir au moins une fois l'événement {sdef}.",
                  ["L'événement contraire de « au moins un succès » est « aucun succès » : un seul chemin, É…É.",
                   f"$P(\\text{{aucun}}) = {fx(q)}^{{{n}}} = {fx(q ** n)}$.",
                   f"$P(\\text{{au moins un}}) = 1 - {fx(q ** n)} = {fx(val)}$."],
                  f"${fx(val)}$"))
    # d) loi : probabilité manquante
    for vals, probs in [([0, 1, 2], [F(1, 5), None, F(3, 10)]), ([-2, 0, 5], [F(1, 2), F(3, 10), None]),
                        ([1, 2, 3, 4], [F(1, 10), F(2, 5), None, F(1, 5)]), ([-5, 2, 10], [None, F(3, 5), F(1, 20)]),
                        ([0, 10, 50, 100], [F(7, 10), F(1, 5), None, F(1, 50)]), ([-1, 3], [F(13, 20), None]),
                        ([2, 4, 6], [F(1, 4), F(1, 4), None])]:
        manq = 1 - sum(x for x in probs if x is not None)
        j = probs.index(None)
        tab = " & ".join(nb(v) for v in vals)
        tp = " & ".join("p" if x is None else fx(x) for x in probs)
        E.append(("application", "loi-de-probabilite",
                  f"La loi de probabilité d'une variable aléatoire $X$ est donnée par le tableau $\\begin{{array}}{{c|{'c' * len(vals)}}} x_i & {tab} \\\\ \\hline P(X = x_i) & {tp} \\end{{array}}$. Calculer $p = P(X = {vals[j]})$.",
                  ["La somme des probabilités vaut $1$.",
                   (f"$p = 1 - ({' + '.join(fx(x) for x in probs if x is not None)}) = {fx(manq)}$."
                    if sum(1 for x in probs if x is not None) > 1
                    else f"$p = 1 - {fx(next(x for x in probs if x is not None))} = {fx(manq)}$.")],
                  f"$p = {fx(manq)}$"))
    # e) espérance
    for vals, probs in [([0, 1, 2], [F(1, 4), F(1, 2), F(1, 4)]), ([1, 2, 3, 4], [F(1, 10), F(1, 5), F(3, 10), F(2, 5)]),
                        ([-3, 1, 4], [F(1, 5), F(1, 2), F(3, 10)]), ([0, 5, 20], [F(3, 5), F(3, 10), F(1, 10)]),
                        ([10, 20, 30], [F(1, 2), F(3, 10), F(1, 5)]), ([-10, 0, 25], [F(1, 2), F(1, 4), F(1, 4)]),
                        ([2, 3, 5, 8], [F(1, 5), F(1, 5), F(1, 5), F(2, 5)]), ([0, 1, 2, 3], [F(1, 8), F(3, 8), F(3, 8), F(1, 8)])]:
        Ex = sum(F(v) * p for v, p in zip(vals, probs))
        tab = " & ".join(nb(v) for v in vals)
        tp = " & ".join(fx(x) for x in probs)
        termes = " + ".join(f"{par(v)} \\times {fx(p)}" for v, p in zip(vals, probs))
        E.append(("intermediaire", "esperance",
                  f"Calculer l'espérance de la variable aléatoire $X$ dont la loi est : $\\begin{{array}}{{c|{'c' * len(vals)}}} x_i & {tab} \\\\ \\hline P(X = x_i) & {tp} \\end{{array}}$",
                  ["On vérifie que la somme des probabilités vaut $1$.",
                   f"$E(X) = {termes}$.", f"$E(X) = {fx(Ex)}$."],
                  f"$E(X) = {fx(Ex)}$"))
    # f) jeux : gain algébrique
    J = [("On lance un dé équilibré à 6 faces. La partie coûte $2$ € ; on reçoit $10$ € si l'on obtient 6, rien sinon.",
          2, [(10, F(1, 6)), (0, F(5, 6))]),
         ("Une tombola vend $100$ billets à $2$ € : un billet gagne un lot de $50$ €, cinq billets gagnent $10$ €, les autres rien. On achète un billet.",
          2, [(50, F(1, 100)), (10, F(5, 100)), (0, F(94, 100))]),
         ("Une roue est partagée en secteurs : on gagne $5$ € avec une probabilité de $0{,}2$, $2$ € avec une probabilité de $0{,}3$, rien sinon. La partie coûte $1{,}50$ €.",
          F(3, 2), [(5, F(1, 5)), (2, F(3, 10)), (0, F(1, 2))]),
         ("On tire une carte au hasard dans un jeu de 32 cartes. La partie coûte $1$ € ; on reçoit $8$ € pour un as, rien sinon.",
          1, [(8, F(4, 32)), (0, F(28, 32))]),
         ("On lance deux pièces équilibrées. La partie coûte $3$ € ; on reçoit $8$ € pour deux piles, $2$ € pour un seul pile, rien sinon.",
          3, [(8, F(1, 4)), (2, F(1, 2)), (0, F(1, 4))]),
         ("Un jeu de grattage coûte $5$ € : on gagne $100$ € avec une probabilité de $0{,}01$, $20$ € avec une probabilité de $0{,}1$, rien sinon.",
          5, [(100, F(1, 100)), (20, F(1, 10)), (0, F(89, 100))]),
         ("On lance un dé équilibré à 6 faces. La partie coûte $1$ € ; on reçoit $3$ € si le résultat est 5 ou 6, rien sinon.",
          1, [(3, F(2, 6)), (0, F(4, 6))])]
    for desc, mise, lots in J:
        X = [(F(g) - F(mise), p) for g, p in lots]
        Ex = sum(x * p for x, p in X)
        concl = "favorable au joueur" if Ex > 0 else ("équitable" if Ex == 0 else "défavorable au joueur")
        val = fx(Ex)
        if dexact(Ex) is None:
            val += f" \\approx {nb(float(Ex), 2)}"
        valeurs = ", ".join(f"${fx(x)}$ (probabilité ${fx(p)}$)" for x, p in X)
        termes = " + ".join((f"({fx(x)})" if x < 0 else fx(x)) + FOIS + fx(p) for x, p in X)
        E.append(("probleme", "gain-algebrique",
                  f"{desc} On note $X$ le gain algébrique (gain moins mise). Calculer $E(X)$ et dire si le jeu est favorable, équitable ou défavorable au joueur.",
                  [f"Valeurs de $X$ : {valeurs}.",
                   f"$E(X) = {termes} = {val}$.",
                   f"Le jeu est {concl}{' : en moyenne, le joueur perd ' + ('' if dexact(Ex) else 'environ ') + tx(-float(Ex), 2) + ' € par partie' if Ex < 0 else ''}."],
                  f"$E(X) = {val}$ ; jeu {concl}"))
    # g) loi de Bernoulli
    B = [("Un composant électronique tombe en panne dans l'année avec une probabilité de $0{,}03$. On note $X$ la variable qui vaut $1$ s'il tombe en panne et $0$ sinon. Quelle est la loi de $X$ ? Calculer $E(X)$.",
          ["$X$ ne prend que les valeurs $0$ et $1$ : $X$ suit la loi de Bernoulli de paramètre $p = 0{,}03$.", "Pour une loi de Bernoulli, $E(X) = p = 0{,}03$."],
          "Loi de Bernoulli de paramètre $0{,}03$ ; $E(X) = 0{,}03$"),
         ("$X$ suit la loi de Bernoulli de paramètre $p = 0{,}35$. Donner $P(X = 0)$, $P(X = 1)$ et $E(X)$.",
          ["$P(X = 1) = p = 0{,}35$ et $P(X = 0) = 1 - p = 0{,}65$.", "$E(X) = 0 \\times 0{,}65 + 1 \\times 0{,}35 = 0{,}35$."],
          "$P(X = 0) = 0{,}65$ ; $P(X = 1) = 0{,}35$ ; $E(X) = 0{,}35$"),
         ("Démontrer que l'espérance d'une variable $X$ suivant la loi de Bernoulli de paramètre $p$ vaut $p$.",
          ["$X$ prend la valeur $0$ avec la probabilité $1 - p$ et la valeur $1$ avec la probabilité $p$.", "$E(X) = 0 \\times (1 - p) + 1 \\times p = p$."],
          "$E(X) = p$"),
         ("Une variable $X$ prend les valeurs $1$, $2$ et $3$. Suit-elle une loi de Bernoulli ?",
          ["Une loi de Bernoulli ne prend que deux valeurs : $0$ (échec) et $1$ (succès).", "$X$ prend trois valeurs : ce n'est pas une loi de Bernoulli."],
          "Non"),
         ("On lance une fois un dé équilibré ; $X$ vaut $1$ si on obtient un multiple de 3 et $0$ sinon. Donner le paramètre de cette loi de Bernoulli et interpréter l'événement $\\{X = 1\\}$.",
          ["Les multiples de 3 sont 3 et 6 : $p = \\dfrac{2}{6} = \\dfrac{1}{3}$.", "$\\{X = 1\\}$ est l'événement « obtenir 3 ou 6 »."],
          "$p = \\dfrac{1}{3}$ ; $\\{X = 1\\}$ : « obtenir 3 ou 6 »")]
    for e, c, r in B:
        E.append(("application", "loi-de-bernoulli", e, c, r))
    return _fin(E)


# ======================================================================
# 1re techno — STATISTIQUES À DEUX VARIABLES
# ======================================================================
def _tableau_xy(xs, ys, nx="x_i", ny="y_i"):
    lx = " & ".join(fx(F(v)) for v in xs)
    ly = " & ".join(fx(F(v)) for v in ys)
    return f"$\\begin{{array}}{{c|{'c' * len(xs)}}} {nx} & {lx} \\\\ \\hline {ny} & {ly} \\end{{array}}$"


def g1t_stats2():
    E = []
    D = [("le nombre d'heures de révision $x$ et la note $y$ (sur 20) de quatre élèves", [1, 2, 4, 5], [8, 10, 13, 15]),
         ("la température $x$ (en °C) et le nombre $y$ de glaces vendues dans une journée", [18, 22, 26, 30, 34], [40, 55, 72, 90, 103]),
         ("le rang $x$ de l'année et le chiffre d'affaires $y$ (en milliers d'euros) d'une entreprise", [1, 2, 3, 4, 5], [52, 55, 61, 63, 69]),
         ("l'âge $x$ (en années) d'un modèle de voiture d'occasion et son prix $y$ (en milliers d'euros)", [1, 3, 5, 7], [F(185, 10), F(152, 10), F(121, 10), F(9)]),
         ("la masse $x$ (en g) d'un colis et son prix d'envoi $y$ (en €)", [100, 250, 500, 1000], [F(16, 10), F(29, 10), F(43, 10), F(72, 10)]),
         ("la durée $x$ (en min) d'un trajet en taxi et son prix $y$ (en €)", [10, 15, 20, 25, 30], [17, 22, 28, 33, 39]),
         ("la puissance $x$ (en kW) d'un moteur et sa consommation $y$ (en L/100 km)", [50, 70, 90, 110], [F(45, 10), F(52, 10), F(6), F(67, 10)]),
         ("le nombre $x$ de semaines d'entraînement et le temps $y$ (en min) mis pour courir 5 km", [0, 2, 4, 6, 8], [30, 29, 27, 26, 24]),
         ("la hauteur $x$ (en cm) d'une plante et son âge $y$ (en jours)", [4, 9, 15, 20], [10, 20, 30, 40]),
         ("le prix $x$ (en €) d'un article et le nombre $y$ d'articles vendus par semaine", [5, 6, 7, 8, 9], [120, 110, 98, 90, 82])]
    for ctx, xs, ys in D:
        n = len(xs)
        mx, my = F(sum(F(v) for v in xs), n), F(sum(F(v) for v in ys), n)
        E.append(("application", "point-moyen",
                  f"On a relevé {ctx} : {_tableau_xy(xs, ys)}. Calculer les coordonnées du point moyen $\\mathrm{{G}}$ du nuage.",
                  [f"$\\bar x = \\dfrac{{{' + '.join(fx(F(v)) for v in xs)}}}{{{n}}} = {fx(mx)}$.",
                   f"$\\bar y = \\dfrac{{{' + '.join(fx(F(v)) for v in ys)}}}{{{n}}} = {fx(my)}$.",
                   f"$\\mathrm{{G}}{pt(mx, my)}$."],
                  f"$\\mathrm{{G}}{pt(mx, my)}$"))
    # b) utiliser un ajustement
    A = [("$y = 1{,}7x + 6{,}4$, où $x$ est le nombre d'heures de révision et $y$ la note sur 20", F(17, 10), F(32, 5), "x", 3, "la note obtenue après 3 heures de révision"),
         ("$y = 4{,}03x - 32{,}65$, où $x$ est la température (en °C) et $y$ le nombre de glaces vendues", F(403, 100), F(-653, 20), "x", 24, "le nombre de glaces vendues un jour à 24 °C"),
         ("$y = 4{,}2x + 47{,}4$, où $x$ est le rang de l'année et $y$ le chiffre d'affaires (en milliers d'euros)", F(21, 5), F(237, 5), "x", 7, "le chiffre d'affaires de l'année de rang 7"),
         ("$y = -1{,}58x + 20{,}02$, où $x$ est l'âge d'une voiture (en années) et $y$ son prix (en milliers d'euros)", F(-79, 50), F(1001, 50), "x", 4, "le prix d'une voiture de 4 ans"),
         ("$y = 1{,}1x + 5{,}8$, où $x$ est la durée d'un trajet (en min) et $y$ son prix (en €)", F(11, 10), F(29, 5), "x", 18, "le prix d'un trajet de 18 minutes"),
         ("$y = -0{,}75x + 30{,}2$, où $x$ est le nombre de semaines d'entraînement et $y$ le temps (en min) sur 5 km", F(-3, 4), F(151, 5), "x", 5, "le temps sur 5 km après 5 semaines")]
    for txt, a, b, _, x0, quoi in A:
        y0 = a * x0 + b
        E.append(("intermediaire", "ajustement-estimation",
                  f"Un ajustement affine par la méthode des moindres carrés donne {txt}. Estimer {quoi}.",
                  [f"On remplace $x$ par ${x0}$ : $y = {fx(a)} \\times {x0} {sg(b)}$.", f"$y = {fx(y0)}$."],
                  f"$y \\approx {fx(y0)}$" + (f", soit environ ${nb(arr(y0, 0))}$ glaces" if "glaces" in quoi else "")))
    for txt, a, b, _, y0, quoi in [
            ("$y = 1{,}7x + 6{,}4$, où $x$ est le nombre d'heures de révision et $y$ la note sur 20", F(17, 10), F(32, 5), "x", 13, "le nombre d'heures de révision nécessaires pour obtenir 13 sur 20"),
            ("$y = 1{,}1x + 5{,}8$, où $x$ est la durée d'un trajet en taxi (en min) et $y$ son prix (en €)", F(11, 10), F(29, 5), "x", 39, "la durée d'un trajet facturé 39 €"),
            ("$y = -1{,}58x + 20{,}02$, où $x$ est l'âge d'une voiture (en années) et $y$ son prix (en milliers d'euros)", F(-79, 50), F(1001, 50), "x", 12, "l'âge d'une voiture vendue 12 milliers d'euros")]:
        x0 = (y0 - b) / a
        E.append(("intermediaire", "ajustement-estimation",
                  f"Un ajustement affine donne {txt}. Estimer {quoi}.",
                  [f"On résout ${fx(a)}x {sg(b)} = {y0}$.", f"$x = \\dfrac{{{y0} {sg(-b)}}}{{{fx(a)}}} = {fxa(x0, 1)}$."],
                  f"$x \\approx {nb(float(x0), 1)}$"))
    # c) la droite passe par G
    for a, mx, my in [(2, 3, 11), (F(3, 2), 4, 10), (-3, 5, 7), (F(1, 2), 12, 15), (F(-5, 2), 2, 20), (12, F(5, 2), 64)]:
        b = my - a * mx
        E.append(("approfondissement", "point-moyen-ajustement",
                  f"Le point moyen d'un nuage est $\\mathrm{{G}}{pt(mx, my)}$. La droite d'ajustement a pour coefficient directeur ${fx(a)}$. Déterminer son équation $y = ax + b$.",
                  ["La droite d'ajustement passe par le point moyen $\\mathrm{G}$.",
                   f"${fx(my)} = {fx(a)} \\times {fx(mx)} + b$, donc $b = {fx(my)} - {par(a * mx) if (a * mx).denominator == 1 else fx(a * mx)} = {fx(b)}$."],
                  f"$y = {affine(a, b)}$"))
    # d) interpoler ou extrapoler
    for lo, hi, x0, ctx in [(1, 5, 3, "années de rang 1 à 5"), (18, 34, 40, "températures de 18 °C à 34 °C"),
                            (100, 1000, 700, "masses de 100 g à 1 000 g"), (0, 8, 20, "semaines 0 à 8"),
                            (50, 110, 30, "puissances de 50 kW à 110 kW")]:
        inter = lo <= x0 <= hi
        ou = "à l'intérieur" if inter else "en dehors"
        E.append(("application", "interpoler-extrapoler",
                  f"Les données couvrent les {ctx}. On utilise la droite d'ajustement pour estimer la valeur en $x = {nb(x0)}$. S'agit-il d'une interpolation ou d'une extrapolation ?",
                  [f"La valeur ${nb(x0)}$ est {ou} de la plage observée $[{nb(lo)}\\,;{nb(hi)}]$.",
                   "C'est une interpolation : l'estimation est raisonnable." if inter else
                   "C'est une extrapolation : rien ne garantit que la tendance se prolonge, il faut rester prudent."],
                  "Interpolation" if inter else "Extrapolation (à interpréter avec prudence)"))
    # e) corrélation et causalité
    C = [("Dans une ville, on observe que les ventes de glaces et le nombre de noyades augmentent ensemble. Peut-on dire que les glaces provoquent les noyades ?",
          ["Non : une corrélation ne prouve pas une causalité.", "Une cause commune explique les deux : la chaleur (plus de baignades et plus de glaces)."],
          "Non, cause commune : la chaleur"),
         ("Plus il y a de pompiers sur un incendie, plus les dégâts sont importants. Faut-il envoyer moins de pompiers ?",
          ["Non : c'est la taille de l'incendie qui explique à la fois le nombre de pompiers et l'importance des dégâts."],
          "Non, la taille de l'incendie est la cause commune"),
         ("Citer les trois explications possibles d'une corrélation entre deux variables.",
          ["Un lien de cause à effet, une cause commune (variable cachée), ou une simple coïncidence."],
          "Causalité, cause commune ou coïncidence"),
         ("Pourquoi la méthode des moindres carrés utilise-t-elle les carrés des écarts plutôt que les écarts eux-mêmes ?",
          ["Les écarts au-dessus et en dessous de la droite se compenseraient.", "Les carrés sont tous positifs et pénalisent fortement les points éloignés."],
          "Pour éviter que les écarts se compensent et pénaliser les points éloignés"),
         ("Un nuage de points a une forme nettement courbe. Est-il pertinent de l'ajuster par une droite ?",
          ["Non : un ajustement affine n'a de sens que si le nuage a une allure rectiligne."], "Non")]
    for e, c, r in C:
        E.append(("intermediaire", "correlation-causalite", e, c, r))
    # f) loi d'Ohm (situations de physique)
    O = [([F(2, 100), F(4, 100), F(6, 100), F(8, 100)], [F(21, 10), F(4), F(61, 10), F(79, 10)]),
         ([F(1, 100), F(2, 100), F(3, 100), F(4, 100), F(5, 100)], [F(22, 10), F(45, 10), F(66, 10), F(88, 10), F(11)])]
    for Is, Us in O:
        n = len(Is)
        mI, mU = sum(Is) / n, sum(Us) / n
        E.append(("probleme", "loi-d-ohm",
                  f"On mesure la tension $U$ (en V) aux bornes d'un conducteur ohmique pour différentes intensités $I$ (en A) : {_tableau_xy(Is, Us, 'I', 'U')}. Calculer le point moyen du nuage.",
                  [f"$\\bar I = {fx(mI)}$ A et $\\bar U = {fx(mU)}$ V.", f"$\\mathrm{{G}}{pt(mI, mU)}$."],
                  f"$\\mathrm{{G}}{pt(mI, mU)}$"))
    for a, b, I0 in [(F(995, 10), F(4, 100), F(5, 100)), (F(2203, 10), F(-2, 100), F(3, 100)), (F(468, 10), F(1, 10), F(12, 100))]:
        U0 = a * I0 + b
        E.append(("probleme", "loi-d-ohm",
                  f"Pour un conducteur ohmique, la calculatrice donne l'ajustement $U = {fx(a)}I {sg(b)}$ ($U$ en V, $I$ en A). Estimer la résistance $R$ du conducteur, puis la tension pour $I = {fx(I0)}$ A (arrondir au dixième).",
                  ["La loi d'Ohm s'écrit $U = RI$ : la pente de la droite est la résistance ; l'ordonnée à l'origine, très petite, vient des erreurs de mesure.",
                   f"$R \\approx {fx(a)}\\ \\Omega$.",
                   f"$U = {fx(a)} \\times {fx(I0)} {sg(b)} = {fx(U0)} \\approx {nb(float(U0), 1)}$ V."],
                  f"$R \\approx {fx(a)}\\ \\Omega$ ; $U \\approx {nb(float(U0), 1)}$ V"))
    E.append(("probleme", "loi-d-ohm",
              "Dans l'ajustement $U = 99{,}5I + 0{,}04$ d'une série de mesures (loi d'Ohm), quelle est l'unité du coefficient directeur $99{,}5$ ? Que représente-t-il ?",
              ["Le coefficient directeur est le quotient d'une tension (V) par une intensité (A).", "Il s'exprime en ohms : c'est la résistance du conducteur."],
              "En ohms ($\\Omega$) : c'est la résistance"))
    E.append(("probleme", "loi-d-ohm",
              "On a mesuré des intensités de $0{,}01$ A à $0{,}05$ A. Peut-on utiliser l'ajustement $U = 220I$ pour prévoir la tension à $2$ A ?",
              ["Ce serait une extrapolation très loin des données.", "À forte intensité le conducteur chauffe et sa résistance change : la prévision n'est pas fiable."],
              "Non, extrapolation trop lointaine (le conducteur chauffe)"))
    # g) moindres carrés : comparer deux droites
    M = [([1, 2, 3, 4], [2, 4, 5, 7], (F(8, 5), F(1, 2)), (2, 0)),
         ([0, 1, 2, 3], [1, 3, 4, 6], (2, 1), (F(8, 5), F(11, 10))),
         ([1, 2, 3], [5, 3, 2], (F(-3, 2), F(37, 6)), (-2, 7)),
         ([2, 4, 6], [3, 4, 8], (1, 1), (F(5, 4), F(0))),
         ([0, 2, 4], [1, 2, 4], (F(3, 4), F(5, 6)), (1, 0)),
         ([1, 3, 5], [2, 6, 7], (F(5, 4), F(17, 12)), (2, 0)),
         ([1, 2, 4, 5], [3, 4, 7, 9], (2, 0), (F(3, 2), F(3, 2))),
         ([0, 1, 3], [4, 3, 0], (F(-4, 3), F(4)), (-1, 4))]
    for xs, ys, d1, d2 in M[:8]:
        S = []
        for a, b in (d1, d2):
            S.append(sum((F(y) - (a * x + b)) ** 2 for x, y in zip(xs, ys)))
        best = 1 if S[0] < S[1] else 2
        pts = ", ".join(pt(x, y) for x, y in zip(xs, ys))
        E.append(("approfondissement", "moindres-carres",
                  f"On considère les points ${pts}$ et les droites $D_1 : y = {affine(*d1)}$ et $D_2 : y = {affine(*d2)}$. Pour chaque droite, calculer la somme des carrés des écarts verticaux. Laquelle est la meilleure au sens des moindres carrés ?",
                  ["L'écart vertical d'un point $(x_i\\,;y_i)$ est $y_i - (ax_i + b)$ ; on additionne les carrés.",
                   f"Pour $D_1$ : $S_1 = {fx(S[0])}$.", f"Pour $D_2$ : $S_2 = {fx(S[1])}$.",
                   f"La plus petite somme est celle de $D_{best}$."],
                  f"$S_1 = {fx(S[0])}$, $S_2 = {fx(S[1])}$ : $D_{best}$ est la meilleure"))
    return _fin(E)


# ======================================================================
# 1re techno — SUITES NUMÉRIQUES
# ======================================================================
def _sens_geo(q):
    return "croissante" if q > 1 else ("constante" if q == 1 else "décroissante")


def g1t_suites():
    E = []
    # a) terme d'une suite arithmétique
    for u0, r, n, d0 in [(5, 3, 10, 0), (100, -4, 12, 0), (F(5, 2), F(1, 2), 20, 0), (-7, 6, 15, 0),
                         (12, 5, 30, 1), (40, -3, 25, 1), (3, 7, 100, 0), (2, F(3, 10), 50, 1)]:
        un = u0 + (n - d0) * r
        if d0 == 0:
            e = f"$(u_n)$ est la suite arithmétique de premier terme $u_0 = {fx(u0)}$ et de raison $r = {fx(r)}$. Calculer $u_{{{n}}}$."
            c = [f"$u_n = u_0 + nr$.", f"$u_{{{n}}} = {fx(u0)} + {n} \\times {par(r) if F(r).denominator == 1 else fx(r)} = {fx(un)}$."]
        else:
            e = f"$(u_n)$ est la suite arithmétique de premier terme $u_1 = {fx(u0)}$ et de raison $r = {fx(r)}$. Calculer $u_{{{n}}}$."
            c = ["La suite commence au rang 1 : $u_n = u_1 + (n - 1)r$.", f"$u_{{{n}}} = {fx(u0)} + {n - 1} \\times {par(r) if F(r).denominator == 1 else fx(r)} = {fx(un)}$."]
        E.append(("application" if d0 == 0 else "intermediaire", "suite-arithmetique", e, c, f"$u_{{{n}}} = {fx(un)}$"))
    # b) terme d'une suite géométrique
    for u0, q, n in [(3, 2, 6), (5, 3, 4), (1000, F(1, 2), 5), (2, -3, 5), (7, 2, 10), (4096, F(1, 4), 4),
                     (F(1, 2), 4, 3), (800, F(3, 2), 3)]:
        un = F(u0) * F(q) ** n
        E.append(("application", "suite-geometrique",
                  f"$(v_n)$ est la suite géométrique de premier terme $v_0 = {fx(u0)}$ et de raison $q = {fx(q)}$. Calculer $v_{{{n}}}$.",
                  ["$v_n = v_0 \\times q^n$.", f"$v_{{{n}}} = {fx(u0)} \\times {par(q) if F(q).denominator == 1 else fx(q)}^{{{n}}} = {fx(un)}$."],
                  f"$v_{{{n}}} = {fx(un)}$"))
    # c) suite définie par récurrence
    for a, b, u0 in [(2, 1, 3), (3, -2, 2), (F(1, 2), 4, 10), (-1, 5, 2), (2, -3, 4), (F(1, 2), 10, 0), (3, 1, -1)]:
        if a == 1 and b == 0:
            continue
        u = [F(u0)]
        for _ in range(3):
            u.append(a * u[-1] + b)
        rel = f"{coef(a)}u_n {sg(b)}" if b != 0 else f"{coef(a)}u_n"
        E.append(("intermediaire", "recurrence",
                  f"La suite $(u_n)$ est définie par $u_0 = {fx(u0)}$ et $u_{{n+1}} = {rel}$. Calculer $u_1$, $u_2$ et $u_3$.",
                  [f"$u_1 = {fx(a)} \\times {par(u[0])} {sg(b)} = {fx(u[1])}$.",
                   f"$u_2 = {fx(u[2])}$ et $u_3 = {fx(u[3])}$ (on applique la même règle à chaque étape)."],
                  f"$u_1 = {fx(u[1])}$ ; $u_2 = {fx(u[2])}$ ; $u_3 = {fx(u[3])}$"))
    # d) reconnaître la nature d'une suite
    for L in [[3, 7, 11, 15], [2, 6, 18, 54], [1, 4, 9, 16], [50, 45, 40, 35], [80, 40, 20, 10],
              [1, 2, 4, 7], [F(5, 2), 4, F(11, 2), 7], [100, 110, 121, F(1331, 10)]]:
        L = [F(v) for v in L]
        diffs = [L[i + 1] - L[i] for i in range(3)]
        quots = [L[i + 1] / L[i] for i in range(3)]
        if len(set(diffs)) == 1:
            nat, rep = "arithmétique", f"Arithmétique de raison ${fx(diffs[0])}$"
        elif len(set(quots)) == 1:
            nat, rep = "géométrique", f"Géométrique de raison ${fx(quots[0])}$"
        else:
            nat, rep = None, "Ni arithmétique ni géométrique"
        E.append(("intermediaire", "reconnaitre",
                  f"Les quatre premiers termes d'une suite sont $" + " \\,;\\, ".join(fx(v) for v in L) + "$. Cette suite semble-t-elle arithmétique, géométrique, ou ni l'une ni l'autre ?",
                  ["Différences successives : $" + " \\,;\\, ".join(fx(v) for v in diffs) + "$.",
                   "Quotients successifs : $" + " \\,;\\, ".join(fxa(v) for v in quots) + "$.",
                   rep + "." if nat else "Ni les différences ni les quotients ne sont constants."],
                  rep))
    # e) pourcentage et raison
    for t in [5, -15, 2, -30, 100, F(5, 2), -8]:
        q = 1 + F(t) / 100
        mot = "une hausse" if t > 0 else "une baisse"
        E.append(("application", "pourcentage-raison",
                  f"Une grandeur subit chaque année {mot} de ${fx(abs(F(t)))}\\,\\%$. Quelle est la raison de la suite géométrique qui la modélise ?",
                  [f"$q = 1 + \\dfrac{{t}}{{100}} = 1 {'+' if t > 0 else '-'} {fx(abs(F(t)) / 100)} = {fx(q)}$."],
                  f"$q = {fx(q)}$"))
    # f) sens de variation
    for kind, u0, k in [("a", 12, -3), ("a", -5, F(1, 2)), ("g", 4, F(3, 2)), ("g", 200, F(9, 10)), ("g", 3, -2)]:
        if kind == "a":
            sens = "croissante" if k > 0 else "décroissante"
            e = f"La suite arithmétique $(u_n)$ a pour premier terme $u_0 = {fx(u0)}$ et pour raison $r = {fx(k)}$. Quel est son sens de variation ?"
            c = [f"La raison ${fx(k)}$ est {'positive' if k > 0 else 'négative'} : la suite est {sens}."]
            r = f"Elle est {sens}"
        else:
            if k < 0:
                e = f"La suite géométrique $(v_n)$ a pour premier terme $v_0 = {fx(u0)}$ et pour raison $q = {fx(k)}$. Est-elle croissante ou décroissante ?"
                c = ["La raison est négative : les termes alternent de signe ($3$, $-6$, $12$, $-24$…).",
                     "La suite n'est ni croissante ni décroissante."]
                r = "Ni l'un ni l'autre : les termes alternent de signe"
            else:
                sens = _sens_geo(k)
                e = f"La suite géométrique $(v_n)$ a pour premier terme $v_0 = {fx(u0)}$ et pour raison $q = {fx(k)}$. Quel est son sens de variation ?"
                c = [f"$v_0 > 0$ et $q = {fx(k)} > 1$ : la suite est {sens}." if k > 1 else f"$v_0 > 0$ et $0 < q = {fx(k)} < 1$ : la suite est {sens}."]
                r = f"Elle est {sens}"
        E.append(("application", "sens-de-variation", e, c, r))
    # g) problèmes
    for cap, t, n in [(5000, 4, 10), (2000, 3, 5), (12000, -15, 4)]:
        q = 1 + F(t, 100)
        val = arr(float(cap * q ** n), 2)
        if t > 0:
            e = f"Un capital de ${nb(cap)}$ € est placé à intérêts composés au taux de ${t}\\,\\%$ par an. Quelle est sa valeur au bout de {n} ans (arrondir au centime) ?"
        else:
            e = f"Une machine achetée ${nb(cap)}$ € perd ${-t}\\,\\%$ de sa valeur chaque année. Quelle est sa valeur au bout de {n} ans (arrondir au centime) ?"
        E.append(("probleme", "modeliser",
                  e,
                  [f"Un pourcentage répété : suite géométrique de raison $q = {fx(q)}$.",
                   f"$u_{{{n}}} = {nb(cap)} \\times {fx(q)}^{{{n}}} \\approx {nb(val, 2, True)}$."],
                  f"Environ ${nb(val, 2, True)}$ €"))
    for s0, r, n, quoi in [(1500, 50, 12, "Une épargnante dispose de $1\\,500$ € en janvier ; elle ajoute $50$ € à son épargne chaque mois. De combien dispose-t-elle en décembre (douzième mois) ?"),
                           (25000, -1200, 8, "Un lac contient $25\\,000$ poissons au départ ; on estime qu'il en perd $1\\,200$ par an. Combien en restera-t-il au bout de 8 ans ?")]:
        val = s0 + (n - 1) * r if "décembre" in quoi else s0 + n * r
        rang = n - 1 if "décembre" in quoi else n
        E.append(("probleme", "modeliser", quoi,
                  [f"On ajoute toujours la même quantité : suite arithmétique de raison ${nb(r)}$.",
                   f"Il y a {rang} évolutions : ${nb(s0)} + {rang} \\times {par(r)} = {nb(val)}$."],
                  f"${nb(val)}$" + (" €" if "€" in quoi else " poissons")))
    for e, c, r in [
            ("Une population de $8\\,000$ habitants augmente de $2\\,\\%$ par an. Une autre de $8\\,000$ habitants augmente de $160$ habitants par an. Quel modèle correspond à chacune ?",
             ["Un pourcentage répété donne une suite géométrique de raison $1{,}02$.", "Une quantité fixe ajoutée donne une suite arithmétique de raison $160$."],
             "La première : géométrique ($q = 1{,}02$) ; la seconde : arithmétique ($r = 160$)"),
            ("Un prix baisse de $10\\,\\%$ puis encore de $10\\,\\%$. A-t-il baissé de $20\\,\\%$ au total ?",
             ["On multiplie les coefficients : $0{,}9 \\times 0{,}9 = 0{,}81$.", "Le prix a baissé de $19\\,\\%$, pas de $20\\,\\%$."],
             "Non, de $19\\,\\%$")]:
        E.append(("probleme", "modeliser", e, c, r))
    return _fin(E)


# ======================================================================
# Algorithmique : aides communes (les programmes sont exécutés)
# ======================================================================
def _py(v):
    """Valeur Python écrite pour un élève (liste, booléen, chaîne, nombre)."""
    if isinstance(v, bool):
        return "`True`" if v else "`False`"
    if isinstance(v, str):
        return f'`"{v}"`'
    if isinstance(v, list):
        return "`[" + ", ".join(str(x) for x in v) + "]`"
    if isinstance(v, float):
        return f"${nb(v, 6)}$"
    return f"${nb(v)}$"


def _minuscule(t):
    return t[0].lower() + t[1:]


def _trace(code, noms):
    """Valeurs des variables après chaque ligne (exécution réelle, ligne par ligne)."""
    lignes = code.strip("\n").split("\n")
    etapes = []
    for i in range(1, len(lignes) + 1):
        env, _ = executer("\n".join(lignes[:i]))
        etat = ", ".join(f"`{n}` = {_py(env[n])}" for n in noms if n in env)
        etapes.append(f"Après `{lignes[i - 1].strip()}` : {etat}.")
    return etapes


# ======================================================================
# 2de — ALGORITHMIQUE ET PROGRAMMATION
# ======================================================================
def g2_algo():
    E = []
    # a) affectation
    A = [("a = 4\nb = a + 1\na = 2 * b", ["a", "b"]),
         ("x = 7\nx = x - 2\nx = x * 3", ["x"]),
         ("a = 3\nb = 5\na = b\nb = a", ["a", "b"]),
         ("a = 3\nb = 5\nc = a\na = b\nb = c", ["a", "b", "c"]),
         ("n = 10\nn = n * n - 1\nn = n + 1", ["n"]),
         ("x = 2\ny = x ** 3\nx = y - x", ["x", "y"]),
         ('m = "bon"\nm = m + "jour"', ["m"])]
    for code, noms in A:
        env, _ = executer(code)
        rep = " ; ".join(f"`{n}` = {_py(env[n])}" for n in noms)
        E.append(("application", "affectation",
                  "On exécute les instructions suivantes :" + bloc(code) + "Que valent les variables à la fin ?",
                  ["Le signe `=` est une affectation : on calcule à droite, puis on range le résultat à gauche."] + _trace(code, noms),
                  rep))
    code = "x = 7 / 2"
    env, _ = executer(code)
    E.append(("application", "affectation",
              "Après l'instruction" + bloc(code) + "quel est le type de la variable `x` et quelle est sa valeur ?",
              ["La division `/` donne toujours un nombre décimal (type `float`).", f"`x` vaut {_py(env['x'])}."],
              f"Type `float`, `x` = {_py(env['x'])}"))
    # b) instructions conditionnelles
    C = [("def f(x):\n    if x > 10:\n        return 2 * x\n    elif x == 10:\n        return 0\n    else:\n        return x + 5", "f", [3, 10, 12]),
         ("def tarif(age):\n    if age < 12:\n        return 6\n    elif age < 26:\n        return 9\n    else:\n        return 14", "tarif", [8, 12, 40]),
         ("def mention(note):\n    if note >= 16:\n        return \"TB\"\n    elif note >= 14:\n        return \"B\"\n    elif note >= 12:\n        return \"AB\"\n    else:\n        return \"aucune\"", "mention", [15, 12, 9]),
         ("def g(x):\n    if x < 0:\n        return -x\n    else:\n        return x", "g", [-7, 0, 4]),
         ("def plus_grand(a, b):\n    if a > b:\n        return a\n    else:\n        return b", "plus_grand", [(3, 8), (-2, -5), (4, 4)]),
         ("def test(n):\n    if n % 2 == 0:\n        return \"pair\"\n    else:\n        return \"impair\"", "test", [14, 7, 0]),
         ("def h(x):\n    if x >= 0 and x <= 5:\n        return 1\n    else:\n        return 0", "h", [3, 5, 6])]
    for code, nom, args in C:
        env, _ = executer(code)
        res = []
        for a in args:
            v = env[nom](*a) if isinstance(a, tuple) else env[nom](a)
            appel = f"{nom}{a}" if isinstance(a, tuple) else f"{nom}({a})"
            appel = appel.replace(" ", "").replace(",", ", ")
            res.append((appel, v))
        q = ", ".join(f"`{ap}`" for ap, _ in res)
        E.append(("application" if len(E) % 2 else "intermediaire", "condition",
                  "On considère la fonction suivante :" + bloc(code) + f"Que renvoient {q} ?",
                  ["On teste les conditions dans l'ordre : la première qui est vraie décide du résultat."] +
                  [f"`{ap}` renvoie {_py(v)}." for ap, v in res],
                  " ; ".join(f"{_py(v)}" for _, v in res)))
    # c) boucle bornée for
    B = [("S = 0\nfor i in range(1, 11):\n    S = S + i", "S", "On ajoute à `S` les entiers de 1 à 10."),
         ("P = 1\nfor i in range(1, 6):\n    P = P * i", "P", "On multiplie `P` par 1, 2, 3, 4 puis 5."),
         ("x = 3\nfor i in range(4):\n    x = 2 * x", "x", "La boucle fait 4 tours ; à chaque tour, `x` est doublé."),
         ("S = 0\nfor i in range(5):\n    S = S + 2 * i", "S", "`i` prend les valeurs 0, 1, 2, 3, 4 ; on ajoute leurs doubles."),
         ("c = 0\nfor i in range(1, 21):\n    if i % 3 == 0:\n        c = c + 1", "c", "On compte les multiples de 3 entre 1 et 20."),
         ("u = 100\nfor k in range(3):\n    u = u - 15", "u", "La boucle fait 3 tours ; on retire 15 à chaque tour."),
         ("S = 0\nfor i in range(1, 101):\n    S = S + i", "S", "On ajoute les entiers de 1 à 100 (attention : `range(1, 101)` s'arrête à 100)."),
         ("S = 0\nfor i in range(1, 5):\n    S = S + i * i", "S", "On ajoute les carrés de 1, 2, 3 et 4.")]
    for code, var, expl in B:
        env, _ = executer(code)
        E.append(("intermediaire", "boucle-for",
                  "On exécute le programme :" + bloc(code) + f"Que vaut `{var}` à la fin ?",
                  [expl, f"À la fin, `{var}` = {_py(env[var])}."],
                  f"`{var}` = {_py(env[var])}"))
    # d) range
    for r in ["range(6)", "range(2, 7)", "range(1, 10, 2)", "range(10, 0, -3)", "range(0, 20, 5)", "range(3)"]:
        env, _ = executer(f"L = list({r})")
        E.append(("application", "range",
                  f"Quelles valeurs la variable `i` prend-elle dans la boucle `for i in {r}:` ? Combien de tours la boucle fait-elle ?",
                  ["`range(a, b, p)` part de `a`, avance de `p` et s'arrête AVANT d'atteindre `b` (par défaut `a = 0` et `p = 1`).",
                   f"Valeurs : {', '.join(str(v) for v in env['L'])}."],
                  f"{', '.join(str(v) for v in env['L'])} ; {len(env['L'])} tour{'s' if len(env['L']) > 1 else ''}"))
    # e) boucle non bornée while
    W = [("n = 0\nwhile 2 ** n < 1000:\n    n = n + 1", "n", "On cherche le plus petit entier `n` tel que $2^n \\geqslant 1\\,000$."),
         ("n = 0\nwhile 3 ** n <= 500:\n    n = n + 1", "n", "On cherche le plus petit entier `n` tel que $3^n > 500$."),
         ("x = 1\nk = 0\nwhile x < 100:\n    x = x * 3\n    k = k + 1", "k", "On multiplie `x` par 3 jusqu'à atteindre au moins 100 ; `k` compte les tours."),
         ("S = 0\nn = 0\nwhile S <= 50:\n    n = n + 1\n    S = S + n", "n", "On ajoute 1, 2, 3… jusqu'à ce que la somme dépasse 50."),
         ("u = 1000\nn = 0\nwhile u > 100:\n    u = u / 2\n    n = n + 1", "n", "On divise `u` par 2 jusqu'à ce qu'il devienne inférieur ou égal à 100."),
         ("x = 0\nwhile x * x < 50:\n    x = x + 1", "x", "Balayage : on cherche le premier entier `x` tel que $x^2 \\geqslant 50$."),
         ("a = 50\nwhile a >= 7:\n    a = a - 7", "a", "On retire 7 tant que c'est possible : c'est le reste de la division de 50 par 7.")]
    for code, var, expl in W:
        env, _ = executer(code)
        E.append(("approfondissement", "boucle-while",
                  "On exécute le programme :" + bloc(code) + f"Que vaut `{var}` à la fin ?",
                  [expl, "La boucle s'arrête dès que la condition devient fausse.", f"À la fin, `{var}` = {_py(env[var])}."],
                  f"`{var}` = {_py(env[var])}"))
    # f) fonctions
    Fn = [("def f(x):\n    return 3 * x ** 2 - 2", "f(4)"),
          ("def f(x):\n    return 2 * x + 1\n\ndef g(x):\n    return x * x", "g(f(3))"),
          ("def aire(L, l):\n    return L * l", "aire(7, 4) + aire(2, 3)"),
          ("def f(x):\n    return 2 * x + 1\n\ndef g(x):\n    return x * x", "f(g(3))"),
          ("def moyenne(a, b, c):\n    return (a + b + c) / 3", "moyenne(12, 15, 9)"),
          ("def h(n):\n    S = 0\n    for i in range(n + 1):\n        S = S + i\n    return S", "h(6)"),
          ("def cube(x):\n    return x ** 3", "cube(2) + cube(-1)"),
          ("def p(x):\n    if x > 0:\n        return x\n    return 0", "p(-3) + p(5)")]
    for code, appel in Fn:
        env, _ = executer(code + f"\nRES = {appel}")
        E.append(("intermediaire", "fonction",
                  "On définit :" + bloc(code) + f"Que vaut `{appel}` ?",
                  ["`return` renvoie la valeur calculée ; on évalue d'abord les appels les plus intérieurs.",
                   f"`{appel}` vaut {_py(env['RES'])}."
                   + (" Attention : la division `/` donne toujours un `float`, donc Python affiche ce résultat avec une partie décimale nulle."
                      if isinstance(env["RES"], float) and env["RES"].is_integer() else "")],
                  _py(env["RES"])))
    # g) problèmes
    P = [("Léa a 50 € d'économies et ajoute 15 € chaque semaine. Le programme suivant calcule le nombre de semaines nécessaires pour atteindre au moins 200 € :",
          "s = 50\nn = 0\nwhile s < 200:\n    s = s + 15\n    n = n + 1", "n",
          "Tant que l'épargne `s` est inférieure à 200, on ajoute 15 et on compte une semaine de plus.",
          "Léa atteint 200 € au bout de {v} semaines."),
         ("Une population de bactéries compte 500 individus et double toutes les heures. Le programme calcule le nombre d'heures pour dépasser 100 000 bactéries :",
          "b = 500\nh = 0\nwhile b <= 100000:\n    b = 2 * b\n    h = h + 1", "h",
          "À chaque tour, la population double et on compte une heure de plus ; on s'arrête dès que `b` dépasse 100 000.",
          "Il faut {v} heures pour dépasser 100 000 bactéries."),
         ("Un parking coûte 3 € la première heure puis 2 € par heure supplémentaire. On programme :",
          "def prix(h):\n    if h <= 1:\n        return 3\n    else:\n        return 3 + 2 * (h - 1)\n\np = prix(5)", "p",
          "Pour 5 heures, la condition `h <= 1` est fausse : on calcule `3 + 2 * (5 - 1)`.",
          "Stationner 5 heures coûte {v} €."),
         ("Une classe a obtenu les notes suivantes. Le programme compte les notes supérieures ou égales à 10 :",
          "notes = [12, 8, 15, 9, 18, 10, 7, 14]\nc = 0\nfor x in notes:\n    if x >= 10:\n        c = c + 1", "c",
          "On parcourt la liste ; le compteur augmente pour 12, 15, 18, 10 et 14 (le 10 compte car la condition est `>=`).",
          "{v} élèves ont au moins 10."),
         ("Un réservoir contient 2 000 L d'eau ; il perd 150 L par jour. Le programme calcule le nombre de jours avant qu'il contienne moins de 500 L :",
          "v = 2000\nj = 0\nwhile v >= 500:\n    v = v - 150\n    j = j + 1", "j",
          "Tant que le volume est d'au moins 500 L, on retire 150 L et on compte un jour.",
          "Le réservoir contient moins de 500 L au bout de {v} jours."),
         ("Une pyramide de cubes a 1 cube au sommet, 2 cubes à l'étage suivant, 3 à l'étage d'après, etc. Le programme cherche le nombre d'étages pour lequel on utilise plus de 1 000 cubes :",
          "S = 0\nn = 0\nwhile S <= 1000:\n    n = n + 1\n    S = S + n", "n",
          "On ajoute un étage de `n` cubes tant que le total `S` ne dépasse pas 1 000.",
          "Il faut {v} étages pour utiliser plus de 1 000 cubes.")]
    for ctx, code, var, expl, interp in P:
        env, _ = executer(code)
        v = env[var]
        E.append(("probleme", "probleme-algorithme",
                  ctx + bloc(code) + f"Quelle valeur de `{var}` obtient-on ? Interpréter.",
                  [expl, f"On obtient `{var}` = {_py(v)}.", interp.format(v=tx(v))],
                  f"`{var}` = {_py(v)} : " + (interp.format(v=tx(v)) if interp.startswith("Léa")
                                               else _minuscule(interp.format(v=tx(v))))))
    return _fin(E)


# ======================================================================
# 2de — ARITHMÉTIQUE
# ======================================================================
def g2_arith():
    E = []
    # a) multiple / diviseur
    for a, b in [(91, 7), (84, 6), (100, 7), (221, 13), (98, 4), (-36, 9), (0, 5), (143, 11)]:
        k, r = divmod(a, b)
        if r == 0:
            c = [f"${nb(a)} = {par(k)} \\times {b}$ et ${nb(k)}$ est un entier.",
                 f"Donc ${nb(a)}$ est un multiple de ${b}$ (et ${b}$ divise ${nb(a)}$)."]
            rep = f"Oui : ${nb(a)} = {par(k)} \\times {b}$"
        else:
            c = [f"${nb(a)} = {b} \\times {k} + {r}$ avec $0 < {r} < {b}$ : le reste n'est pas nul.",
                 f"${nb(a)} \\div {b}$ n'est pas un entier, donc ${nb(a)}$ n'est pas un multiple de ${b}$."]
            rep = f"Non (reste ${r}$)"
        E.append(("application", "multiple-diviseur",
                  f"L'entier ${nb(a)}$ est-il un multiple de ${b}$ ? Justifier.", c, rep))
    # b) démonstrations
    D = [("Démontrer que la somme de deux nombres pairs est paire.",
          ["Soient $a = 2k$ et $b = 2k'$ avec $k$ et $k'$ entiers.", "$a + b = 2k + 2k' = 2(k + k')$.",
           "$k + k'$ est un entier, donc $a + b$ est pair."], "$a + b = 2(k + k')$ : pair"),
         ("Démontrer que la somme d'un nombre pair et d'un nombre impair est impaire.",
          ["Soient $a = 2k$ et $b = 2k' + 1$ avec $k$ et $k'$ entiers.", "$a + b = 2k + 2k' + 1 = 2(k + k') + 1$.",
           "$k + k'$ est un entier, donc $a + b$ est impair."], "$a + b = 2(k + k') + 1$ : impair"),
         ("Démontrer que le produit de deux nombres impairs est impair.",
          ["Soient $a = 2k + 1$ et $b = 2k' + 1$ avec $k$ et $k'$ entiers (deux lettres différentes).",
           "$ab = 4kk' + 2k + 2k' + 1 = 2(2kk' + k + k') + 1$.",
           "$2kk' + k + k'$ est un entier, donc $ab$ est impair."], "$ab = 2(2kk' + k + k') + 1$ : impair"),
         ("Démontrer que le carré d'un nombre impair est impair.",
          ["Soit $n = 2k + 1$ avec $k$ entier.", "$n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.",
           "$2k^2 + 2k$ est un entier, donc $n^2$ est impair."], "$n^2 = 2(2k^2 + 2k) + 1$ : impair"),
         ("Démontrer que la somme de deux multiples de $7$ est un multiple de $7$.",
          ["Soient $m = 7k$ et $n = 7k'$ avec $k$ et $k'$ entiers.", "$m + n = 7k + 7k' = 7(k + k')$.",
           "$k + k'$ est un entier, donc $m + n$ est un multiple de $7$."], "$m + n = 7(k + k')$"),
         ("Démontrer que la somme de trois entiers consécutifs est un multiple de $3$.",
          ["Trois entiers consécutifs s'écrivent $n$, $n + 1$ et $n + 2$ avec $n$ entier.",
           "Leur somme vaut $3n + 3 = 3(n + 1)$.", "$n + 1$ est un entier, donc la somme est un multiple de $3$."],
          "$n + (n+1) + (n+2) = 3(n + 1)$"),
         ("Démontrer que le carré d'un nombre pair est pair.",
          ["Soit $n = 2k$ avec $k$ entier.", "$n^2 = 4k^2 = 2(2k^2)$.", "$2k^2$ est un entier, donc $n^2$ est pair."],
          "$n^2 = 2(2k^2)$ : pair"),
         ("Démontrer que, pour tout entier $n$, le nombre $(n + 1)^2 - n^2$ est impair.",
          ["$(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$.", "$n$ est un entier, donc $2n + 1$ est impair."],
          "$(n+1)^2 - n^2 = 2n + 1$ : impair")]
    for i, (e, c, r) in enumerate(D):
        E.append(("approfondissement" if i % 2 else "intermediaire", "demonstration", e, c, r))
    # c) fractions irréductibles
    for a, b in [(84, 126), (45, 60), (36, 48), (150, 225), (72, 120), (91, 65), (128, 96), (270, 360), (231, 154)]:
        g = math.gcd(a, b)
        f = F(a, b)
        E.append(("application" if g < 20 else "intermediaire", "fraction-irreductible",
                  f"Écrire la fraction $\\dfrac{{{a}}}{{{b}}}$ sous forme irréductible.",
                  [f"Le plus grand diviseur commun de ${a}$ et ${b}$ est ${g}$ : ${a} = {g} \\times {a // g}$ et ${b} = {g} \\times {b // g}$.",
                   f"$\\dfrac{{{a}}}{{{b}}} = {fl(f)}$, et ${f.numerator}$ et ${f.denominator}$ n'ont plus de diviseur commun autre que $1$."],
                  f"${fl(f)}$"))
    # d) contre-exemples
    C = [("« Tout nombre impair est premier. » Vrai ou faux ?", "$9$ est impair mais $9 = 3 \\times 3$ n'est pas premier.", "Faux ($9$)"),
         ("« Tout multiple de $4$ est un multiple de $8$. » Vrai ou faux ?", "$12$ est un multiple de $4$ mais pas de $8$.", "Faux ($12$)"),
         ("« La somme de deux nombres impairs est impaire. » Vrai ou faux ?", "$1 + 3 = 4$ est pair.", "Faux ($1 + 3 = 4$)"),
         ("« Si $n$ est pair, alors $\\dfrac{n}{2}$ est pair. » Vrai ou faux ?", "$n = 6$ est pair mais $\\dfrac{6}{2} = 3$ est impair.", "Faux ($n = 6$)"),
         ("« Tout nombre pair est un multiple de $4$. » Vrai ou faux ?", "$6$ est pair mais n'est pas un multiple de $4$.", "Faux ($6$)"),
         ("« Pour tout entier naturel $n$, $n^2 + n + 41$ est un nombre premier. » On a vérifié que c'est vrai pour $n = 0$ à $n = 10$. Peut-on conclure ?",
          "Non : des exemples ne prouvent rien. Pour $n = 41$, $41^2 + 41 + 41 = 41 \\times 43$ n'est pas premier.", "Non, faux pour $n = 41$")]
    for e, c, r in C:
        E.append(("intermediaire", "contre-exemple", e,
                  ["Un seul contre-exemple suffit à montrer qu'une affirmation est fausse.", c], r))
    # e) plus grand multiple inférieur ou égal
    for a, b in [(7, 50), (9, 100), (12, 200), (15, 1000), (8, 75), (13, 150)]:
        m = (b // a) * a
        E.append(("application", "plus-grand-multiple",
                  f"Quel est le plus grand multiple de ${a}$ inférieur ou égal à ${nb(b)}$ ?",
                  [f"On ajoute ${a}$ tant qu'on ne dépasse pas ${nb(b)}$, ou on calcule ${nb(b)} = {a} \\times {b // a} + {b % a}$.",
                   f"Le plus grand multiple est ${a} \\times {b // a} = {nb(m)}$ (le suivant, ${nb(m + a)}$, dépasse ${nb(b)}$)."],
                  f"${nb(m)}$"))
    # f) algorithmes (reste en Python)
    R = [("47 % 5", None), ("120 % 8", None), ("est_multiple(91, 7)", "def est_multiple(a, b):\n    return a % b == 0"),
         ("est_multiple(100, 6)", "def est_multiple(a, b):\n    return a % b == 0"),
         ("plus_grand_multiple(7, 50)", "def plus_grand_multiple(a, b):\n    m = a\n    while m + a <= b:\n        m = m + a\n    return m"),
         ("plus_grand_multiple(6, 40)", "def plus_grand_multiple(a, b):\n    m = a\n    while m + a <= b:\n        m = m + a\n    return m")]
    for expr, code in R:
        env, _ = executer((code or "") + f"\nRES = {expr}")
        v = env["RES"]
        if code is None:
            e = f"En Python, que renvoie l'expression `{expr}` ?"
            a, b = [int(t) for t in expr.split(" % ")]
            c = ["`a % b` donne le reste de la division euclidienne de `a` par `b`.",
                 f"${a} = {b} \\times {a // b} + {a % b}$."]
        else:
            e = "On définit la fonction :" + bloc(code) + f"Que renvoie `{expr}` ?"
            c = ["`a % b == 0` teste si le reste est nul, c'est-à-dire si `a` est un multiple de `b`." if "%" in code
                 else "On part de `a` et on ajoute `a` tant qu'on ne dépasse pas `b`.",
                 f"Le résultat est {_py(v)}."]
        E.append(("intermediaire", "algorithme", e, c, _py(v)))
    # g) problèmes
    for r1, r2, n1, n2 in [(84, 126, "roses", "tulipes"), (60, 72, "crayons", "gommes"), (90, 150, "cartes bleues", "cartes rouges")]:
        g = math.gcd(r1, r2)
        E.append(("probleme", "probleme",
                  f"On dispose de ${r1}$ {n1} et de ${r2}$ {n2}. On veut faire le plus grand nombre possible de lots identiques en utilisant tous les objets. Combien de lots peut-on faire, et que contient chaque lot ?",
                  [f"Le nombre de lots doit diviser ${r1}$ et ${r2}$ : on cherche leur plus grand diviseur commun.",
                   f"${r1} = {g} \\times {r1 // g}$ et ${r2} = {g} \\times {r2 // g}$, et ${r1 // g}$, ${r2 // g}$ n'ont plus de diviseur commun : c'est ${g}$.",
                   f"On fait ${g}$ lots de ${r1 // g}$ {n1} et ${r2 // g}$ {n2}."],
                  f"${g}$ lots de ${r1 // g}$ {n1} et ${r2 // g}$ {n2}"))
    E.append(("probleme", "probleme",
              "On veut carreler sans découpe un mur rectangulaire de $84$ cm sur $126$ cm avec des carreaux carrés identiques, les plus grands possible. Quel est le côté d'un carreau ? Combien en faut-il ?",
              ["Le côté doit diviser $84$ et $126$ : on prend leur plus grand diviseur commun, $42$.",
               "Il faut $\\dfrac{84}{42} \\times \\dfrac{126}{42} = 2 \\times 3 = 6$ carreaux."],
              "Côté $42$ cm ; $6$ carreaux"))
    E.append(("probleme", "probleme",
              "On range $156$ œufs dans des boîtes de $12$. Combien de boîtes remplit-on ? Reste-t-il des œufs ?",
              ["$156 = 12 \\times 13 + 0$ : le reste est nul.", "$156$ est un multiple de $12$ : on remplit $13$ boîtes, sans reste."],
              "$13$ boîtes pleines, aucun œuf restant"))
    E.append(("probleme", "probleme",
              "Écrire $0{,}375$ sous forme de fraction irréductible.",
              ["$0{,}375 = \\dfrac{375}{1\\,000}$.", "Le plus grand diviseur commun de $375$ et $1\\,000$ est $125$ : $\\dfrac{375}{1\\,000} = \\dfrac{3}{8}$."],
              "$\\dfrac{3}{8}$"))
    E.append(("probleme", "probleme",
              "Un entier $n$ est impair. Démontrer que $n^2 - 1$ est un multiple de $4$.",
              ["$n = 2k + 1$ avec $k$ entier, donc $n^2 - 1 = 4k^2 + 4k = 4(k^2 + k)$.",
               "$k^2 + k$ est un entier, donc $n^2 - 1$ est un multiple de $4$."],
              "$n^2 - 1 = 4(k^2 + k)$"))
    return _fin(E)


# ======================================================================
# 2de — DROITES DU PLAN
# ======================================================================
_APP = {True: "appartient", False: "n'appartient pas"}


def _reduit(n, d):
    """« = valeur simplifiée », sauf si la fraction est déjà sous sa forme finale."""
    v = fx(F(n, d))
    return "" if v == f"\\dfrac{{{n}}}{{{d}}}" else f" = {v}"


def _P(nom, x, y):
    return f"\\mathrm{{{nom}}}{pt(x, y)}"


def g2_droites():
    E = []
    # a) coefficient directeur
    for (xa, ya), (xb, yb) in [((1, 2), (4, 11)), ((-2, 5), (2, -3)), ((0, 1), (3, 2)), ((1, -4), (5, 4)),
                               ((-3, -1), (1, 1)), ((2, 7), (6, 7)), ((-1, 3), (4, -7)), ((0, 0), (6, 4))]:
        m = F(yb - ya, xb - xa)
        sens = "la droite monte" if m > 0 else ("la droite descend" if m < 0 else "la droite est horizontale")
        E.append(("application", "coefficient-directeur",
                  f"Calculer le coefficient directeur de la droite $(\\mathrm{{AB}})$ avec ${_P('A', xa, ya)}$ et ${_P('B', xb, yb)}$.",
                  [f"$m = \\dfrac{{y_\\mathrm{{B}} - y_\\mathrm{{A}}}}{{x_\\mathrm{{B}} - x_\\mathrm{{A}}}} = \\dfrac{{{yb} - {par(ya)}}}{{{xb} - {par(xa)}}} = \\dfrac{{{yb - ya}}}{{{xb - xa}}}{_reduit(yb - ya, xb - xa)}$.",
                   f"$m {'>' if m > 0 else ('<' if m < 0 else '=')} 0$ : {sens}."],
                  f"$m = {fx(m)}$"))
    # b) équation réduite par deux points
    for (xa, ya), (xb, yb) in [((1, 3), (3, 7)), ((0, -2), (4, 6)), ((-1, 5), (2, -1)), ((2, 1), (6, 3)),
                               ((-2, -7), (1, 2)), ((3, 4), (-1, 4)), ((1, 1), (4, -5)), ((-4, 0), (2, 3))]:
        m = F(yb - ya, xb - xa)
        p = ya - m * xa
        E.append(("intermediaire", "equation-reduite",
                  f"Déterminer l'équation réduite de la droite passant par ${_P('A', xa, ya)}$ et ${_P('B', xb, yb)}$.",
                  [f"$m = \\dfrac{{{yb} - {par(ya)}}}{{{xb} - {par(xa)}}} = {fx(m)}$.",
                   f"On remplace par les coordonnées de A : ${ya} = {fx(m)} \\times {par(xa)} + p$, donc $p = {fx(p)}$.",
                   f"$y = {affine(m, p)}$."],
                  f"$y = {affine(m, p)}$"))
    # c) un point appartient-il à la droite ?
    for m, p, (x, y) in [(2, -1, (3, 5)), (-3, 4, (2, -1)), (F(1, 2), 3, (4, 6)), (5, -2, (-1, -6)), (-1, 7, (10, -4)), (4, 0, (F(1, 2), 3))]:
        v = m * F(x) + p
        ok = v == y
        E.append(("application", "appartenance",
                  f"Le point ${_P('C', x, y)}$ appartient-il à la droite $d$ d'équation $y = {affine(m, p)}$ ?",
                  [f"On remplace $x$ par ${fx(x)}$ : ${fx(m)} \\times {par(x) if F(x).denominator == 1 else fx(x)}{' ' + sg(p) if p != 0 else ''} = {fx(v)}$.",
                   f"On trouve ${fx(v)}$, {'égal à' if ok else 'différent de'} l'ordonnée ${fx(y)}$ de C : le point {_APP[ok]} à $d$."],
                  "Oui" if ok else "Non"))
    # d) vecteur directeur
    for a, b, c in [(2, 3, -6), (1, -4, 2), (5, 2, 1), (-3, 1, 7)]:
        E.append(("application", "vecteur-directeur",
                  f"Donner un vecteur directeur de la droite d'équation cartésienne ${_cart(a, b, c)}$.",
                  ["Pour $ax + by + c = 0$, le vecteur $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$ est directeur.",
                   f"Ici $a = {a}$ et $b = {b}$, donc $\\vec{{u}}{vec(-b, a)}$."],
                  f"$\\vec{{u}}{vec(-b, a)}$"))
    for m, p in [(3, -1), (F(-1, 2), 4)]:
        E.append(("application", "vecteur-directeur",
                  f"Donner un vecteur directeur de la droite d'équation $y = {affine(m, p)}$.",
                  ["Pour $y = mx + p$, le vecteur $\\vec{u}\\begin{pmatrix} 1 \\\\ m \\end{pmatrix}$ est directeur.",
                   f"Ici $m = {fx(m)}$, donc $\\vec{{u}}{vec(1, m)}$."],
                  f"$\\vec{{u}}{vec(1, m)}$"))
    # e) parallélisme
    for (m1, p1), (m2, p2) in [((2, 3), (2, -5)), ((-1, 4), (1, 4)), ((F(1, 2), 1), (F(1, 2), 1)), ((3, 0), (-3, 2))]:
        if m1 != m2:
            r, c = "Sécantes", f"Les coefficients directeurs ${fx(m1)}$ et ${fx(m2)}$ sont différents : les droites sont sécantes."
        elif p1 != p2:
            r, c = "Parallèles (strictement)", f"Même coefficient directeur ${fx(m1)}$ et ordonnées à l'origine différentes : les droites sont strictement parallèles."
        else:
            r, c = "Confondues", "Même coefficient directeur et même ordonnée à l'origine : les droites sont confondues."
        E.append(("intermediaire", "positions-relatives",
                  f"Les droites $d : y = {affine(m1, p1)}$ et $d' : y = {affine(m2, p2)}$ sont-elles parallèles, confondues ou sécantes ?",
                  ["Deux droites $y = mx + p$ et $y = m'x + p'$ sont parallèles si et seulement si $m = m'$.", c], r))
    for (a, b, c1), (a2, b2, c2) in [((2, 3, -1), (4, 6, 5)), ((1, -2, 3), (3, 1, -4)), ((3, -1, 2), (-6, 2, 1))]:
        det = a * b2 - a2 * b
        r = "Parallèles" if det == 0 else "Sécantes"
        E.append(("intermediaire", "positions-relatives",
                  f"Les droites $d : {_cart(a, b, c1)}$ et $d' : {_cart(a2, b2, c2)}$ sont-elles parallèles ?",
                  ["Critère : $ab' - a'b = 0$ si et seulement si les droites sont parallèles.",
                   f"$ab' - a'b = {a} \\times {par(b2)} - {par(a2)} \\times {par(b)} = {det}$."],
                  f"{r} ($ab' - a'b = {det}$)"))
    # f) intersection
    for (m1, p1), (m2, p2) in [((2, 1), (-1, 7)), ((3, -4), (1, 2)), ((-2, 5), (1, -4)), ((F(1, 2), 1), (-1, 7)), ((4, 0), (1, 6))]:
        x = F(p2 - p1) / (m1 - m2)
        y = m1 * x + p1
        E.append(("approfondissement", "intersection",
                  f"Déterminer les coordonnées du point d'intersection des droites $d : y = {affine(m1, p1)}$ et $d' : y = {affine(m2, p2)}$.",
                  ["Les coefficients directeurs sont différents : les droites sont sécantes.",
                   f"On résout ${affine(m1, p1)} = {affine(m2, p2)}$, soit ${fx(m1 - m2)}x = {fx(p2 - p1)}$, donc $x = {fx(x)}$.",
                   f"$y = {fx(m1)} \\times {par(x) if x.denominator == 1 else fx(x)}{' ' + sg(p1) if p1 != 0 else ''} = {fx(y)}$."],
                  f"$({fx(x)}\\,;{fx(y)})$"))
    # g) cartésienne -> réduite, droites verticales
    for a, b, c in [(2, 1, -3), (3, -1, 4), (1, 2, -6), (4, 2, 8)]:
        m, p = F(-a, b), F(-c, b)
        E.append(("intermediaire", "cartesienne-reduite",
                  f"Déterminer l'équation réduite de la droite d'équation cartésienne ${_cart(a, b, c)}$.",
                  [f"On isole $y$ : ${coef(b)}y = {affine(-a, -c)}$."] + ([f"On divise par ${b}$ : $y = {affine(m, p)}$."] if b != 1 else []),
                  f"$y = {affine(m, p)}$"))
    for (xa, ya), (xb, yb) in [((3, -1), (3, 5))]:
        E.append(("intermediaire", "cartesienne-reduite",
                  f"Déterminer une équation de la droite passant par ${_P('A', xa, ya)}$ et ${_P('B', xb, yb)}$.",
                  ["Les deux points ont la même abscisse : la droite est verticale.",
                   f"Elle n'a pas d'équation réduite ; son équation est $x = {xa}$."],
                  f"$x = {xa}$"))
    # h) systèmes en situation
    S = [("Au cinéma, 3 places adulte et 2 places enfant coûtent 41 € ; 2 places adulte et 4 places enfant coûtent 42 €. Quel est le prix d'une place adulte et d'une place enfant ?",
          (3, 2, 41), (2, 4, 42), ("adulte", "enfant"), "€"),
         ("Dans une ferme, on compte 20 têtes et 56 pattes parmi des poules et des lapins. Combien y a-t-il de poules et de lapins ?",
          (1, 1, 20), (2, 4, 56), ("poules", "lapins"), ""),
         ("Un croissant et deux pains au chocolat coûtent 3,90 € ; trois croissants et un pain au chocolat coûtent 4,20 €. Quel est le prix de chaque viennoiserie ?",
          (1, 2, F(39, 10)), (3, 1, F(42, 10)), ("croissant", "pain au chocolat"), "€"),
         ("Un magasin vend des stylos à 2 € et des cahiers à 3 €. Un client achète 12 articles pour 29 €. Combien de stylos et de cahiers a-t-il achetés ?",
          (1, 1, 12), (2, 3, 29), ("stylos", "cahiers"), ""),
         ("La somme de deux nombres vaut 47 et leur différence vaut 13. Quels sont ces deux nombres ?",
          (1, 1, 47), (1, -1, 13), ("le plus grand", "le plus petit"), "")]
    for txt, (a1, b1, c1), (a2, b2, c2), (n1, n2), u in S:
        det = a1 * b2 - a2 * b1
        x = F(c1 * b2 - c2 * b1, det)
        y = F(a1 * c2 - a2 * c1, det)
        E.append(("probleme", "systeme",
                  txt,
                  [f"On note $x$ et $y$ les inconnues ({n1} et {n2}). Le système est $\\begin{{cases}} {_lin(a1, b1)} = {fx(c1)} \\\\ {_lin(a2, b2)} = {fx(c2)} \\end{{cases}}$.",
                   f"Par combinaison ou substitution : $x = {fx(x)}$ et $y = {fx(y)}$.",
                   f"Vérification : ${_lin(a1, b1, x, y)} = {fx(a1 * x + b1 * y)}$ et ${_lin(a2, b2, x, y)} = {fx(a2 * x + b2 * y)}$."],
                  f"{n1.capitalize()} : ${_eur(x) if u else fx(x)}${(' ' + u) if u else ''} ; {n2} : ${_eur(y) if u else fx(y)}${(' ' + u) if u else ''}"))
    return _fin(E)


def _eur(v):
    """Montant en euros : 5{,}50 et non 5{,}5."""
    v = F(v)
    return fx(v) if v.denominator == 1 else nb(float(v), 2, True)


def _cart(a, b, c):
    """Équation cartésienne ax + by + c = 0 bien écrite."""
    t = affine(a, 0) if a != 0 else ""
    if b:
        by = ("" if abs(b) == 1 else nb(abs(b))) + "y"
        t = (t + (" + " if b > 0 else " - ") + by) if t else (("-" if b < 0 else "") + by)
    if c:
        t += f" {sg(c)}"
    return t + " = 0"


def _lin(a, b, x=None, y=None):
    """ax + by, ou sa valeur numérique détaillée si x et y sont donnés."""
    if x is None:
        return poly([a, 0]).strip() + (" + " if b > 0 else " - ") + ("" if abs(b) == 1 else nb(abs(b))) + "y"
    t1 = fx(x) if a == 1 else f"{fx(a)} \\times {fx(x)}"
    t2 = fx(y) if abs(b) == 1 else f"{fx(abs(b))} \\times {fx(y)}"
    return f"{t1} {'+' if b > 0 else '-'} {t2}"


# ======================================================================
# Intervalles et résolution d'inéquations (aide générique)
# ======================================================================
OPS = {"<": "<", "<=": "\\leqslant", ">": ">", ">=": "\\geqslant"}
INV = {"<": ">", "<=": ">=", ">": "<", ">=": "<="}


def _vrai(v, op):
    return {"<": v < 0, "<=": v <= 0, ">": v > 0, ">=": v >= 0}[op]


def ensemble_solutions(f, zeros, interdits, op):
    """Résout f(x) op 0 ; f continue hors des valeurs interdites, ne s'annulant qu'en `zeros`."""
    pts = sorted(set(F(p) for p in list(zeros) + list(interdits)))
    elems = []  # ("I", lo, hi) ou ("P", p)
    bornes = [None] + pts + [None]
    for j in range(len(pts) + 1):
        lo, hi = bornes[j], bornes[j + 1]
        if lo is None and hi is None:
            t = F(0)
        elif lo is None:
            t = hi - 1
        elif hi is None:
            t = lo + 1
        else:
            t = (lo + hi) / 2
        elems.append(("I", lo, hi, _vrai(f(t), op)))
        if j < len(pts):
            p = pts[j]
            ok = p not in [F(i) for i in interdits] and _vrai(f(p), op)
            elems.append(("P", p, p, ok))
    morceaux = []
    i = 0
    while i < len(elems):
        if not elems[i][3]:
            i += 1
            continue
        j = i
        while j + 1 < len(elems) and elems[j + 1][3]:
            j += 1
        a, b = elems[i], elems[j]
        if a[0] == "P" and b[0] == "P" and i == j:
            morceaux.append(f"\\{{{fx(a[1])}\\}}")
        else:
            g = "]-\\infty" if (a[0] == "I" and a[1] is None) else (("[" if a[0] == "P" else "]") + fx(a[1]))
            d = "+\\infty[" if (b[0] == "I" and b[2] is None) else (fx(b[2]) + ("]" if b[0] == "P" else "["))
            morceaux.append(f"{g}\\,;{d}")
        i = j + 1
    if not morceaux:
        return "\\varnothing"
    if len(morceaux) == 1 and morceaux[0] == "]-\\infty\\,;+\\infty[":
        return "\\mathbb{R}"
    return " \\cup ".join(morceaux)


# ======================================================================
# 2de — ÉQUATIONS ET INÉQUATIONS
# ======================================================================
def g2_equations():
    E = []
    # a) premier degré
    for a, b, c, d in [(5, -3, 2, 9), (3, 7, 0, -2), (4, 1, -2, 13), (2, -5, 5, 4), (-3, 8, 1, -4),
                       (6, 2, 2, -3), (7, 0, 3, 10), (F(1, 2), 3, 0, 5)]:
        x = F(d - b) / (a - c)
        E.append(("application", "equation-premier-degre",
                  f"Résoudre l'équation ${affine(a, b)} = {affine(c, d)}$.",
                  [f"On regroupe les termes en $x$ à gauche et les constantes à droite : ${fx(a - c)}x = {fx(d - b)}$." if c != 0 else
                   f"On isole le terme en $x$ : ${fx(a)}x = {fx(d - b)}$.",
                   f"$x = \\dfrac{{{fx(d - b)}}}{{{fx(a - c)}}} = {fx(x)}$." if (a - c) != 1 else f"$x = {fx(x)}$."],
                  f"$x = {fx(x)}$"))
    # b) équations produit
    for a, b, c, d in [(1, -3, 1, 5), (2, -6, 1, 4), (3, 1, 1, -7), (1, 0, 4, -2), (5, 10, -1, 3)]:
        r1, r2 = F(-b, a), F(-d, c)
        f1 = f"({affine(a, b)})" if b != 0 else affine(a, b)
        E.append(("application", "equation-produit",
                  f"Résoudre l'équation ${f1}({affine(c, d)}) = 0$.",
                  ["Un produit est nul si et seulement si l'un de ses facteurs est nul.",
                   (f"${affine(a, b)} = 0 \\iff x = {fx(r1)}$" if b != 0 else f"Le facteur ${affine(a, b)}$ est nul pour $x = 0$")
                   + f" ; ${affine(c, d)} = 0 \\iff x = {fx(r2)}$."],
                  f"$S = \\{{{fx(min(r1, r2))}\\,;{fx(max(r1, r2))}\\}}$"))
    for k in (4, -6):
        E.append(("intermediaire", "equation-produit",
                  f"Résoudre l'équation $x^2 = {k}x$.",
                  [f"On ne divise pas par $x$ : on ramène tout à gauche, $x^2 {sg(-k)}x = 0$.",
                   f"On factorise : $x({xm(k)}) = 0$, donc $x = 0$ ou $x = {k}$."],
                  f"$S = \\{{{min(0, k)}\\,;{max(0, k)}\\}}$"))
    E.append(("intermediaire", "equation-produit",
              "Résoudre l'équation $x^2 - 25 = 0$.",
              ["On factorise avec $a^2 - b^2 = (a - b)(a + b)$ : $(x - 5)(x + 5) = 0$.", "Donc $x = 5$ ou $x = -5$."],
              "$S = \\{-5\\,;5\\}$"))
    # c) équations quotient
    for a, b in [(3, 2), (-1, 4), (5, 5), (F(1, 2), 1), (0, 3)]:
        E.append(("intermediaire", "equation-quotient",
                  f"Résoudre l'équation $\\dfrac{{{xm(a)}}}{{{xm(-b)}}} = 0$.",
                  [f"Valeur interdite : ${xm(-b)} = 0$, soit $x = {fx(-b)}$.",
                   f"Un quotient est nul si son numérateur est nul : $x = {fx(a)}$, qui n'est pas la valeur interdite."],
                  f"$S = \\{{{fx(a)}\\}}$"))
    E.append(("approfondissement", "equation-quotient",
              "Résoudre l'équation $\\dfrac{(x - 3)(x + 1)}{x - 3} = 0$.",
              ["Valeur interdite : $x = 3$.", "Le numérateur s'annule pour $x = 3$ ou $x = -1$ ; mais $3$ est interdit.",
               "Seule la solution $-1$ convient."],
              "$S = \\{-1\\}$"))
    # d) inéquations du premier degré
    for a, b, op, c in [(2, -3, "<", 7), (-3, 0, ">", 12), (5, 4, ">=", -6), (-2, 5, "<=", 11), (4, -1, ">", 2 * 4 - 1),
                        (-1, 3, "<", 0), (F(1, 2), 1, ">=", 3), (-4, -2, ">=", 10)]:
        bound = F(c - b) / a
        op2 = op if a > 0 else INV[op]
        sol = ensemble_solutions(lambda t, a=a, b=b, c=c: a * t + b - c, [bound], [], op)
        E.append(("intermediaire", "inequation",
                  f"Résoudre l'inéquation ${affine(a, b)} {OPS[op]} {c}$.",
                  [f"On isole le terme en $x$ : ${coef(a)}x {OPS[op]} {fx(c - b)}$." if b != 0 else "Le terme en $x$ est déjà isolé.",
                   (f"On divise par ${fx(a)} > 0$ : le sens est conservé." if a > 0 else
                    f"On divise par ${fx(a)} < 0$ : le sens de l'inégalité s'inverse.") + f" $x {OPS[op2]} {fx(bound)}$.",
                   f"$S = {sol}$."],
                  f"$S = {sol}$"))
    # e) tableaux de signes
    T = [((1, -1), (1, 3), ">="), ((1, -2), (1, 5), "<"), ((-1, 4), (1, 1), ">"), ((2, -6), (1, 2), "<="),
         ((1, 0), (1, -4), ">")]
    for (a1, b1), (a2, b2), op in T:
        r1, r2 = F(-b1, a1), F(-b2, a2)
        f = lambda t, a1=a1, b1=b1, a2=a2, b2=b2: (a1 * t + b1) * (a2 * t + b2)
        sol = ensemble_solutions(f, [r1, r2], [], op)
        fac1 = f"({affine(a1, b1)})" if b1 != 0 else affine(a1, b1)
        E.append(("approfondissement", "tableau-de-signes",
                  f"Résoudre l'inéquation ${fac1}({affine(a2, b2)}) {OPS[op]} 0$.",
                  [f"${affine(a1, b1)}$ s'annule en ${fx(r1)}$ et ${affine(a2, b2)}$ s'annule en ${fx(r2)}$ ; chaque facteur est du signe de son coefficient de $x$ après sa valeur d'annulation.",
                   "On dresse le tableau de signes et on applique la règle des signes.",
                   f"$S = {sol}$."],
                  f"$S = {sol}$"))
    for (a1, b1), (a2, b2), op in [((1, -2), (1, 3), ">="), ((1, 1), (1, -4), "<"), ((-1, 5), (1, 0), "<=")]:
        r1, r2 = F(-b1, a1), F(-b2, a2)
        f = lambda t, a1=a1, b1=b1, a2=a2, b2=b2: F(a1 * t + b1) / (a2 * t + b2)
        sol = ensemble_solutions(f, [r1], [r2], op)
        E.append(("approfondissement", "tableau-de-signes",
                  f"Résoudre l'inéquation $\\dfrac{{{affine(a1, b1)}}}{{{affine(a2, b2)}}} {OPS[op]} 0$.",
                  [f"Valeur interdite : $x = {fx(r2)}$ (double barre dans le tableau, crochet ouvert).",
                   f"Le numérateur s'annule en ${fx(r1)}$.", "On dresse le tableau de signes du quotient.",
                   f"$S = {sol}$."],
                  f"$S = {sol}$"))
    # f) cours
    C = [("Vrai ou faux : si $-2x > 6$, alors $x > -3$.",
          ["Faux : on divise par $-2 < 0$, le sens s'inverse.", "On obtient $x < -3$."], "Faux : $x < -3$"),
         ("Pour résoudre $x^2 = 5x$, un élève divise par $x$ et trouve $x = 5$. Que lui manque-t-il ?",
          ["Diviser par $x$ suppose $x \\neq 0$ : on perd une solution.", "$x^2 - 5x = 0 \\iff x(x - 5) = 0$, donc $x = 0$ ou $x = 5$."],
          "La solution $x = 0$"),
         ("Vrai ou faux : $\\dfrac{x - 2}{x + 2} = 0$ a pour solution $x = -2$.",
          ["Faux : $-2$ est la valeur interdite (dénominateur nul).", "La solution est $x = 2$."], "Faux : $S = \\{2\\}$"),
         ("Multiplier les deux membres d'une inégalité par un nombre positif change-t-il son sens ?",
          ["Non : multiplier ou diviser par un nombre strictement positif conserve le sens.", "Seuls les nombres négatifs inversent le sens."],
          "Non"),
         ("Vrai ou faux : $(x - 1)(x + 2) = 0$ a deux solutions.",
          ["Vrai : $x - 1 = 0$ ou $x + 2 = 0$.", "$S = \\{-2\\,;1\\}$."], "Vrai : $-2$ et $1$")]
    for e, c, r in C:
        E.append(("application", "cours", e, c, r))
    # g) problèmes
    P = [("Forfait A : $20$ € par mois plus $0{,}50$ € par heure de connexion. Forfait B : $0{,}90$ € par heure, sans abonnement. Pour quels nombres d'heures $x$ le forfait B est-il strictement moins cher ?",
          ["On résout $0{,}9x < 20 + 0{,}5x$.", "$0{,}4x < 20$, donc $x < 50$."], "Pour moins de $50$ heures par mois"),
         ("Une location de voiture coûte $40$ € plus $0{,}20$ € par km chez A, et $0{,}35$ € par km chez B. Jusqu'à combien de kilomètres entiers B est-il moins cher ?",
          ["On résout $0{,}35x < 40 + 0{,}2x$, soit $0{,}15x < 40$.", "$x < \\dfrac{40}{0{,}15} \\approx 266{,}7$."], "Jusqu'à $266$ km"),
         ("Un élève a obtenu $9$ et $12$ à deux devoirs. Quelle note $x$ doit-il avoir au troisième pour que sa moyenne soit au moins $12$ ?",
          ["On résout $\\dfrac{9 + 12 + x}{3} \\geqslant 12$.", "$21 + x \\geqslant 36$, donc $x \\geqslant 15$."], "Au moins $15$"),
         ("Un rectangle a pour largeur $x$ cm et pour longueur $x + 3$ cm. Pour quelles valeurs de $x$ son périmètre est-il inférieur ou égal à $30$ cm ?",
          ["Périmètre : $2(x + x + 3) = 4x + 6$.", "$4x + 6 \\leqslant 30 \\iff x \\leqslant 6$ ; de plus $x > 0$."], "$x \\in ]0\\,;6]$"),
         ("Quels sont les nombres égaux à leur carré ?",
          ["On résout $x^2 = x$, soit $x^2 - x = 0$.", "$x(x - 1) = 0$, donc $x = 0$ ou $x = 1$."], "$0$ et $1$"),
         ("Le triple d'un nombre, diminué de $7$, est strictement supérieur à $20$. Que peut-on dire de ce nombre ?",
          ["On résout $3x - 7 > 20$.", "$3x > 27$, donc $x > 9$."], "Il est strictement supérieur à $9$"),
         ("Le bénéfice (en euros) d'un artisan qui vend $x$ objets est $B(x) = (x - 10)(50 - x)$, pour $0 \\leqslant x \\leqslant 60$. Pour quelles quantités le bénéfice est-il positif ou nul ?",
          ["$x - 10$ s'annule en $10$, $50 - x$ s'annule en $50$.", "Le produit est positif ou nul entre les deux racines."],
          "Pour $x \\in [10\\,;50]$")]
    for e, c, r in P:
        E.append(("probleme", "probleme", e, c, r))
    return _fin(E)


# ======================================================================
# 2de — FONCTIONS DE RÉFÉRENCE
# ======================================================================
def pw(a):
    """Base d'une puissance : parenthèses pour un négatif ou une fraction."""
    a = F(a)
    if a.denominator != 1 and dexact(a) is None:
        return f"\\left({fx(a)}\\right)"
    return f"({fx(a)})" if a < 0 else fx(a)


def _cmp(u, v):
    return "<" if u < v else (">" if u > v else "=")


def g2_reference():
    E = []
    # a) fonction carré : comparer
    for a, b in [(F(-32, 10), F(-27, 10)), (F(15, 10), F(16, 10)), (-4, 3), (F(-1, 2), F(-1, 3)), (F(7, 10), F(-9, 10)),
                 (-5, -6), (F(21, 10), F(19, 10))]:
        A, B = F(a) ** 2, F(b) ** 2
        if a < 0 and b < 0:
            j = f"La fonction carré est décroissante sur $]-\\infty\\,;0]$ : elle inverse l'ordre. Comme ${fx(min(a, b))} < {fx(max(a, b))}$, on a ${pw(min(a, b))}^2 > {pw(max(a, b))}^2$."
        elif a > 0 and b > 0:
            j = f"La fonction carré est croissante sur $[0\\,;+\\infty[$ : elle conserve l'ordre. Comme ${fx(min(a, b))} < {fx(max(a, b))}$, on a ${pw(min(a, b))}^2 < {pw(max(a, b))}^2$."
        else:
            j = "Les deux nombres ne sont pas de même signe : on ne peut pas utiliser le sens de variation directement, on calcule."
        E.append(("application" if (a > 0) == (b > 0) else "intermediaire", "fonction-carre",
                  f"Comparer ${pw(a)}^2$ et ${pw(b)}^2$.",
                  [j, f"${pw(a)}^2 = {fx(A)}$ et ${pw(b)}^2 = {fx(B)}$."],
                  f"${pw(a)}^2 {_cmp(A, B)} {pw(b)}^2$"))
    # b) fonction inverse
    for a, b in [(3, 7), (F(-1, 2), F(-1, 4)), (F(25, 10), F(26, 10)), (-5, -2), (F(1, 10), F(1, 100)), (2026, 2027)]:
        A, B = 1 / F(a), 1 / F(b)
        inter = "$]0\\,;+\\infty[$" if a > 0 else "$]-\\infty\\,;0[$"
        E.append(("application", "fonction-inverse",
                  f"Comparer $\\dfrac{{1}}{{{fx(a)}}}$ et $\\dfrac{{1}}{{{fx(b)}}}$ sans calculatrice.",
                  [f"Les deux nombres sont dans {inter}, où la fonction inverse est décroissante : elle inverse l'ordre.",
                   f"Comme ${fx(min(a, b))} < {fx(max(a, b))}$, on a $\\dfrac{{1}}{{{fx(min(a, b))}}} > \\dfrac{{1}}{{{fx(max(a, b))}}}$."],
                  f"$\\dfrac{{1}}{{{fx(a)}}} {_cmp(A, B)} \\dfrac{{1}}{{{fx(b)}}}$"))
    E.append(("intermediaire", "fonction-inverse",
              "Un élève écrit : « $-1 < 1$ et la fonction inverse est décroissante, donc $\\dfrac{1}{-1} > \\dfrac{1}{1}$. » Qu'en penser ?",
              ["La fonction inverse est décroissante sur $]-\\infty\\,;0[$ et sur $]0\\,;+\\infty[$, mais pas sur $\\mathbb{R}^*$.",
               "$-1$ et $1$ ne sont pas dans le même intervalle : en fait $\\dfrac{1}{-1} = -1 < 1 = \\dfrac{1}{1}$."],
              "Raisonnement faux : $\\dfrac{1}{-1} < \\dfrac{1}{1}$"))
    # c) racine carrée
    for a, b in [(7, 5), (F(3, 10), F(29, 100)), (50, 49), (2, F(19, 10))]:
        E.append(("application", "fonction-racine",
                  f"Comparer $\\sqrt{{{fx(a)}}}$ et $\\sqrt{{{fx(b)}}}$.",
                  ["La fonction racine carrée est croissante sur $[0\\,;+\\infty[$ : elle conserve l'ordre.",
                   f"Comme ${fx(min(a, b))} < {fx(max(a, b))}$, on a $\\sqrt{{{fx(min(a, b))}}} < \\sqrt{{{fx(max(a, b))}}}$."],
                  f"$\\sqrt{{{fx(a)}}} {_cmp(a, b)} \\sqrt{{{fx(b)}}}$"))
    for v in (F(49, 100), F(144)):
        r = F(math.isqrt(v.numerator), math.isqrt(v.denominator))
        E.append(("application", "fonction-racine",
                  f"Calculer $\\sqrt{{{fx(v)}}}$.",
                  [f"${fx(r)} \\geqslant 0$ et $({fx(r)})^2 = {fx(v)}$."], f"${fx(r)}$"))
    # d) cube
    for a, b in [(-3, 2), (F(-15, 10), F(-14, 10)), (F(11, 10), F(1, 1))]:
        E.append(("application", "fonction-cube",
                  f"Comparer ${pw(a)}^3$ et ${pw(b)}^3$.",
                  ["La fonction cube est croissante sur $\\mathbb{R}$ tout entier : elle conserve l'ordre.",
                   f"Comme ${fx(min(a, b))} < {fx(max(a, b))}$, on a ${pw(min(a, b))}^3 < {pw(max(a, b))}^3$."],
                  f"${pw(a)}^3 {_cmp(F(a), F(b))} {pw(b)}^3$"))
    for k in (-8, 125, F(1, 27)):
        r = F(round(abs(F(k).numerator) ** (1 / 3)) * (1 if k > 0 else -1), round(F(k).denominator ** (1 / 3)))
        assert r ** 3 == k
        E.append(("intermediaire", "fonction-cube",
                  f"Résoudre l'équation $x^3 = {fx(k)}$.",
                  ["La fonction cube est strictement croissante sur $\\mathbb{R}$ : l'équation a une seule solution.",
                   f"${pw(r)}^3 = {fx(k)}$."],
                  f"$S = \\{{{fx(r)}\\}}$"))
    # e) affine
    for (xa, ya), (xb, yb) in [((1, 5), (3, 11)), ((-2, 4), (2, -4)), ((0, 3), (4, 3)), ((2, -1), (6, 1)), ((-1, -5), (1, 3))]:
        a = F(yb - ya, xb - xa)
        b = ya - a * xa
        sens = "croissante" if a > 0 else ("décroissante" if a < 0 else "constante")
        E.append(("intermediaire", "fonction-affine",
                  f"$f$ est une fonction affine telle que $f({xa}) = {ya}$ et $f({xb}) = {yb}$. Déterminer $f(x)$ et son sens de variation.",
                  [f"$a = \\dfrac{{{yb} - {par(ya)}}}{{{xb} - {par(xa)}}} = {fx(a)}$.",
                   f"$b = f({xa}) - a \\times {par(xa)} = {fx(b)}$.",
                   f"$f(x) = {affine(a, b)}$ ; $a {'>' if a > 0 else ('<' if a < 0 else '=')} 0$, donc $f$ est {sens}."],
                  f"$f(x) = {affine(a, b)}$, {sens}"))
    for a, b in [(-2, 7), (F(1, 3), -1)]:
        r = F(-b) / a
        E.append(("application", "fonction-affine",
                  f"Étudier le signe de $f(x) = {affine(a, b)}$ selon les valeurs de $x$.",
                  [f"$f(x) = 0 \\iff x = {fx(r)}$.",
                   f"$f(x)$ est du signe de $a = {fx(a)}$ après ${fx(r)}$."],
                  (f"$f(x) < 0$ pour $x < {fx(r)}$, $f(x) > 0$ pour $x > {fx(r)}$" if a > 0 else
                   f"$f(x) > 0$ pour $x < {fx(r)}$, $f(x) < 0$ pour $x > {fx(r)}$")))
    # f) équations avec les fonctions de référence
    Q = [("x^2 = 49", "On cherche les antécédents de $49$ par la fonction carré.", "$S = \\{-7\\,;7\\}$"),
         ("x^2 = -4", "Un carré est toujours positif ou nul : aucune solution.", "$S = \\varnothing$"),
         ("x^2 = 7", "Deux solutions opposées.", "$S = \\{-\\sqrt{7}\\,;\\sqrt{7}\\}$"),
         ("\\dfrac{1}{x} = 4", "On a $x \\neq 0$ et $x = \\dfrac{1}{4}$.", "$S = \\{0{,}25\\}$"),
         ("\\dfrac{1}{x} = -\\dfrac{2}{3}", "On a $x \\neq 0$ et $x = -\\dfrac{3}{2}$.", "$S = \\{-1{,}5\\}$"),
         ("\\sqrt{x} = 6", "Pour $x \\geqslant 0$ : $\\sqrt{x} = 6 \\iff x = 6^2 = 36$.", "$S = \\{36\\}$"),
         ("\\sqrt{x} = -2", "Une racine carrée est toujours positive ou nulle : aucune solution.", "$S = \\varnothing$")]
    for eq, c, r in Q:
        E.append(("intermediaire", "equation-reference", f"Résoudre dans $\\mathbb{{R}}$ l'équation ${eq}$.", [c], r))
    # g) inéquations
    I = [("x^2 < 16", "La parabole $y = x^2$ est sous la droite $y = 16$ entre les antécédents $-4$ et $4$.", "$S = ]-4\\,;4[$"),
         ("x^2 \\geqslant 25", "$x^2 \\geqslant 25$ pour $x \\leqslant -5$ ou $x \\geqslant 5$.", "$S = ]-\\infty\\,;-5] \\cup [5\\,;+\\infty[$"),
         ("\\sqrt{x} < 3", "La racine est définie sur $[0\\,;+\\infty[$ et croissante : $0 \\leqslant x < 9$.", "$S = [0\\,;9[$"),
         ("\\dfrac{1}{x} \\geqslant \\dfrac{1}{2}", "Pour $x < 0$, $\\dfrac{1}{x} < 0$ : impossible. Pour $x > 0$, l'inverse est décroissante : $x \\leqslant 2$.", "$S = ]0\\,;2]$"),
         ("x^3 > 8", "La fonction cube est croissante et $2^3 = 8$ : $x > 2$.", "$S = ]2\\,;+\\infty[$")]
    for ineq, c, r in I:
        E.append(("approfondissement", "inequation-reference", f"Résoudre dans $\\mathbb{{R}}$ l'inéquation ${ineq}$.", [c], r))
    # h) cours
    C = [("Vrai ou faux : la fonction carré est croissante sur $\\mathbb{R}$.",
          ["Faux : elle est décroissante sur $]-\\infty\\,;0]$ et croissante sur $[0\\,;+\\infty[$.",
           "Contre-exemple : $-5 < 2$ mais $(-5)^2 = 25 > 4 = 2^2$."], "Faux"),
         ("Ranger $x$, $x^2$ et $\\sqrt{x}$ pour $x = 0{,}25$.",
          ["$x^2 = 0{,}0625$, $x = 0{,}25$ et $\\sqrt{x} = 0{,}5$.", "Sur $[0\\,;1]$, on a $x^2 \\leqslant x \\leqslant \\sqrt{x}$."],
          "$x^2 < x < \\sqrt{x}$"),
         ("Parmi les fonctions carré, inverse, racine carrée et cube, lesquelles sont impaires ?",
          ["Une fonction impaire vérifie $f(-x) = -f(x)$ : sa courbe est symétrique par rapport à l'origine.",
           "$(-x)^3 = -x^3$ et $\\dfrac{1}{-x} = -\\dfrac{1}{x}$ ; le carré est pair et la racine n'est pas définie pour $x < 0$."],
          "Les fonctions inverse et cube")]
    for e, c, r in C:
        E.append(("intermediaire" if "Ranger" in e else "application", "cours", e, c, r))
    E.append(("probleme", "probleme",
              "Un carré a un côté de $x$ cm. Pour quelles valeurs de $x$ son aire est-elle strictement inférieure à $16$ cm² ?",
              ["On résout $x^2 < 16$ avec $x > 0$ (une longueur est positive).",
               "La fonction carré est croissante sur $[0\\,;+\\infty[$ et $4^2 = 16$, donc $0 < x < 4$."],
              "$x \\in ]0\\,;4[$"))
    E.append(("probleme", "probleme",
              "On partage $1\\,000$ € à parts égales entre $x$ personnes. Combien de personnes au plus peut-il y avoir pour que chacune reçoive au moins $125$ € ?",
              ["Chaque part vaut $\\dfrac{1\\,000}{x}$ ; on résout $\\dfrac{1\\,000}{x} \\geqslant 125$ avec $x > 0$.",
               "La fonction inverse est décroissante sur $]0\\,;+\\infty[$ : $\\dfrac{1}{x} \\geqslant \\dfrac{1}{8}$ donne $x \\leqslant 8$."],
              "$8$ personnes au plus"))
    return _fin(E)


# ======================================================================
# 2de — NOTION DE FONCTION
# ======================================================================
def _tv_texte(xs, ys):
    """Décrit un tableau de variations en phrase."""
    morceaux = []
    for i in range(len(xs) - 1):
        sens = "strictement croissante" if ys[i + 1] > ys[i] else "strictement décroissante"
        morceaux.append(f"{sens} sur $[{fx(xs[i])}\\,;{fx(xs[i + 1])}]$")
    vals = ", ".join(f"$f({fx(x)}) = {fx(y)}$" for x, y in zip(xs, ys))
    return "$f$ est définie sur $[" + fx(xs[0]) + "\\,;" + fx(xs[-1]) + "]$, " + ", puis ".join(morceaux) + ", avec " + vals + "."


def _nb_solutions(xs, ys, k):
    sols = set()
    for i in range(len(xs) - 1):
        lo, hi = min(ys[i], ys[i + 1]), max(ys[i], ys[i + 1])
        if lo <= k <= hi:
            # solution unique sur ce morceau (strictement monotone)
            t = F(k - ys[i], ys[i + 1] - ys[i])
            sols.add(xs[i] + t * (xs[i + 1] - xs[i]))
    return len(sols)


def g2_notion_fonction():
    E = []
    # a) images
    I = [("2x^2 - 3x + 1", lambda x: 2 * x * x - 3 * x + 1, -2), ("\\dfrac{x + 1}{x - 2}", lambda x: (x + 1) / (x - 2), 5),
         ("3 - x^2", lambda x: 3 - x * x, -4), ("(x - 1)^2", lambda x: (x - 1) ** 2, F(1, 2)),
         ("\\dfrac{1}{x} + x", lambda x: 1 / x + x, F(-1, 2)), ("x^3 - 2x", lambda x: x ** 3 - 2 * x, -3),
         ("5x - 7", lambda x: 5 * x - 7, F(3, 10)), ("\\dfrac{2x}{x^2 + 1}", lambda x: 2 * x / (x * x + 1), 3)]
    for expr, f, x in I:
        v = f(F(x))
        E.append(("application", "image",
                  f"Soit $f(x) = {expr}$. Calculer l'image de ${fx(x)}$ par $f$.",
                  [f"On remplace $x$ par ${fx(x)}$ (avec des parenthèses si le nombre est négatif).", f"$f({fx(x)}) = {fx(v)}$."],
                  f"$f({fx(x)}) = {fx(v)}$"))
    # b) antécédents
    for a, b, k in [(3, -5, 10), (-2, 7, 1), (F(1, 2), 4, 0), (4, 1, 3)]:
        x = F(k - b) / a
        E.append(("application", "antecedent",
                  f"Soit $f(x) = {affine(a, b)}$. Déterminer le ou les antécédents de ${k}$ par $f$.",
                  [f"On résout ${affine(a, b)} = {k}$.", f"$x = {fx(x)}$ : ${k}$ a un unique antécédent."],
                  f"${fx(x)}$"))
    for k in (9, 0, -4, 2):
        if k > 0:
            r = math.isqrt(k)
            sol = f"${r}$ et $-{r}$" if r * r == k else f"$\\sqrt{{{k}}}$ et $-\\sqrt{{{k}}}$"
            c, rep = f"Deux nombres ont pour carré ${k}$ : {sol}.", f"Deux antécédents : {sol}"
        elif k == 0:
            c, rep = "Seul $0$ a pour carré $0$.", "Un seul antécédent : $0$"
        else:
            c, rep = f"Un carré est toujours positif ou nul : ${k}$ n'a aucun antécédent.", "Aucun antécédent"
        E.append(("intermediaire", "antecedent",
                  f"Soit $f(x) = x^2$. Déterminer les antécédents de ${k}$ par $f$.", [c], rep))
    # c) ensembles de définition
    D = [("\\dfrac{1}{x - 2}", "Le dénominateur doit être non nul : $x \\neq 2$.", "]-\\infty\\,;2[ \\cup ]2\\,;+\\infty["),
         ("\\sqrt{x - 5}", "Il faut $x - 5 \\geqslant 0$, soit $x \\geqslant 5$.", "[5\\,;+\\infty["),
         ("\\sqrt{3 - x}", "Il faut $3 - x \\geqslant 0$, soit $x \\leqslant 3$.", "]-\\infty\\,;3]"),
         ("\\dfrac{4}{x + 7}", "Il faut $x + 7 \\neq 0$, soit $x \\neq -7$.", "]-\\infty\\,;-7[ \\cup ]-7\\,;+\\infty["),
         ("x^2 - 4x + 1", "Aucune division, aucune racine : le calcul est toujours possible.", "\\mathbb{R}"),
         ("\\sqrt{2x + 6}", "Il faut $2x + 6 \\geqslant 0$, soit $x \\geqslant -3$.", "[-3\\,;+\\infty["),
         ("\\dfrac{1}{\\sqrt{x}}", "Il faut $x \\geqslant 0$ (racine) et $\\sqrt{x} \\neq 0$ (dénominateur), donc $x > 0$.", "]0\\,;+\\infty[")]
    for i, (expr, c, r) in enumerate(D):
        E.append(("intermediaire" if i < 5 else "approfondissement", "ensemble-de-definition",
                  f"Déterminer l'ensemble de définition $D$ de la fonction $f(x) = {expr}$.", [c], f"$D = {r}$"))
    # d) tableaux de valeurs
    for expr, f, xs in [("x^2 - 1", lambda x: x * x - 1, [-2, 0, 3]), ("-2x + 5", lambda x: -2 * x + 5, [-1, F(1, 2), 4]),
                        ("\\dfrac{12}{x}", lambda x: 12 / x, [-3, 2, 8]), ("x^2 + x", lambda x: x * x + x, [-3, -1, 2]),
                        ("10 - x^3", lambda x: 10 - x ** 3, [-2, 1, 2]), ("\\sqrt{x}", None, [0, 16, F(1, 4)])]:
        if f is None:
            vals = [F(0), F(4), F(1, 2)]
        else:
            vals = [f(F(x)) for x in xs]
        lx = " & ".join(fx(x) for x in xs)
        E.append(("application", "tableau-de-valeurs",
                  f"Compléter le tableau de valeurs de $f(x) = {expr}$ : $\\begin{{array}}{{c|ccc}} x & {lx} \\\\ \\hline f(x) & \\ldots & \\ldots & \\ldots \\end{{array}}$",
                  [f"$f({fx(x)}) = {fx(v)}$." for x, v in zip(xs, vals)],
                  " ; ".join(f"$f({fx(x)}) = {fx(v)}$" for x, v in zip(xs, vals))))
    # e) programmes de calcul
    for etapes, f, expr, x in [
            (["Choisir un nombre", "le multiplier par 3", "ajouter 4"], lambda x: 3 * x + 4, "3x + 4", -5),
            (["Choisir un nombre", "lui ajouter 2", "élever le résultat au carré"], lambda x: (x + 2) ** 2, "(x + 2)^2", -7),
            (["Choisir un nombre", "le mettre au carré", "retrancher le double du nombre de départ"], lambda x: x * x - 2 * x, "x^2 - 2x", 6),
            (["Choisir un nombre", "lui soustraire 1", "multiplier le résultat par le nombre de départ"], lambda x: (x - 1) * x, "x(x - 1)", F(1, 2)),
            (["Choisir un nombre non nul", "prendre son inverse", "ajouter 1"], lambda x: 1 / x + 1, "\\dfrac{1}{x} + 1", 4),
            (["Choisir un nombre", "le diviser par 2", "soustraire 3 au résultat"], lambda x: x / 2 - 3, "\\dfrac{x}{2} - 3", 9),
            (["Choisir un nombre", "le multiplier par $-2$", "ajouter 10", "multiplier le tout par le nombre de départ"], lambda x: (-2 * x + 10) * x, "x(-2x + 10)", 3)]:
        v = f(F(x))
        E.append(("intermediaire", "programme-de-calcul",
                  "On considère le programme de calcul : « " + ", ".join(etapes) + f" ». Exprimer le résultat $f(x)$ en fonction du nombre de départ $x$, puis calculer $f({fx(x)})$.",
                  [f"En suivant les étapes avec $x$ : $f(x) = {expr}$.", f"$f({fx(x)}) = {fx(v)}$."],
                  f"$f(x) = {expr}$ ; $f({fx(x)}) = {fx(v)}$"))
    # f) variations et extremums (tableau donné en phrase)
    TV = [([-3, 1, 4], [-2, 5, 0]), ([0, 2, 6], [4, -1, 3]), ([-5, -1, 2, 6], [1, 6, -3, 2]), ([-2, 3], [7, -1])]
    for xs, ys in TV:
        mx, mn = max(ys), min(ys)
        E.append(("approfondissement", "variations",
                  _tv_texte(xs, ys) + f" Donner le maximum et le minimum de $f$ sur $[{xs[0]}\\,;{xs[-1]}]$, en précisant où ils sont atteints.",
                  [f"La plus grande valeur prise est ${mx}$, atteinte en $x = {xs[ys.index(mx)]}$.",
                   f"La plus petite valeur prise est ${mn}$, atteinte en $x = {xs[ys.index(mn)]}$."],
                  f"Maximum ${mx}$ en $x = {xs[ys.index(mx)]}$ ; minimum ${mn}$ en $x = {xs[ys.index(mn)]}$"))
    for xs, ys, k in [([-3, 1, 4], [-2, 5, 0], 2), ([0, 2, 6], [4, -1, 3], 0), ([-5, -1, 2, 6], [1, 6, -3, 2], 4)]:
        n = _nb_solutions(xs, ys, k)
        E.append(("approfondissement", "variations",
                  _tv_texte(xs, ys) + f" Sa courbe se trace sans lever le crayon. Combien l'équation $f(x) = {k}$ a-t-elle de solutions ?",
                  ["Sur chaque intervalle où $f$ est strictement monotone, $f$ prend une seule fois chaque valeur comprise entre les images des bornes.",
                   f"On compte les intervalles où ${k}$ est compris entre les images des bornes : ${n}$."],
                  f"${n}$ solution{'s' if n > 1 else ''}"))
    # g) problèmes
    P = [("Une course de taxi coûte $f(x) = 2{,}5 + 1{,}2x$ euros pour $x$ kilomètres. Calculer le prix d'une course de $15$ km, puis la distance parcourue pour $26{,}5$ €.",
          ["$f(15) = 2{,}5 + 1{,}2 \\times 15 = 20{,}50$ €.", "$2{,}5 + 1{,}2x = 26{,}5 \\iff 1{,}2x = 24 \\iff x = 20$ km."],
          "$20{,}50$ € ; $20$ km"),
         ("On découpe un rectangle de périmètre $20$ cm ; si $x$ est sa largeur, son aire est $A(x) = x(10 - x)$. Quel est l'ensemble de définition de $A$ ? Calculer $A(3)$.",
          ["La largeur et la longueur $10 - x$ doivent être positives : $x \\in [0\\,;10]$.", "$A(3) = 3 \\times 7 = 21$ cm²."],
          "$D = [0\\,;10]$ ; $A(3) = 21$ cm²"),
         ("La température (en °C) d'un four est $T(t) = 20 + 15t$ pendant les $12$ premières minutes ($t$ en minutes). Au bout de combien de temps atteint-il $185$ °C ?",
          ["On cherche l'antécédent de $185$ : $20 + 15t = 185$.", "$15t = 165$, donc $t = 11$ min."], "$11$ minutes"),
         ("Un abonnement de vélos coûte $f(x) = 30 + 0{,}5x$ euros par an pour $x$ trajets. Quelle est l'image de $40$ ? Interpréter.",
          ["$f(40) = 30 + 20 = 50$.", "Avec $40$ trajets dans l'année, l'abonnement revient à $50$ €."], "$f(40) = 50$ : $50$ € pour $40$ trajets"),
         ("Une balle est lâchée d'une hauteur de $45$ m ; sa hauteur est $h(t) = 45 - 5t^2$ (en m, $t$ en s). Au bout de combien de temps touche-t-elle le sol ?",
          ["On résout $h(t) = 0$ : $5t^2 = 45$, soit $t^2 = 9$.", "$t \\geqslant 0$, donc $t = 3$ s."], "$3$ s"),
         ("Le prix d'un article augmente de $20\\,\\%$ : le nouveau prix est $f(x) = 1{,}2x$. Quel était le prix initial d'un article qui coûte maintenant $54$ € ?",
          ["On cherche l'antécédent de $54$ : $1{,}2x = 54$.", "$x = \\dfrac{54}{1{,}2} = 45$ €."], "$45$ €"),
         ("Un cercle peut-il être la courbe représentative d'une fonction ? Justifier.",
          ["Une droite verticale qui coupe le cercle le coupe en général en deux points.", "Un nombre aurait alors deux images : ce n'est pas une fonction (test de la verticale)."],
          "Non (test de la verticale)")]
    for e, c, r in P:
        E.append(("probleme", "probleme", e, c, r))
    return _fin(E)


# ======================================================================
# 2de — PROBABILITÉS
# ======================================================================
def _accord(n, sing, plur):
    return f"{n} {sing if n == 1 else plur}"


def g2_probas():
    E = []
    # a) urnes
    U = [((5, 3, 2), 0), ((4, 6, 0), 1), ((7, 2, 1), 2), ((3, 3, 4), 0), ((1, 8, 3), 0), ((6, 5, 9), 2), ((2, 2, 6), 1), ((10, 4, 6), 1)]
    noms = [("rouge", "rouges"), ("verte", "vertes"), ("bleue", "bleues")]
    for (r, v, b), k in U:
        cpt = [r, v, b]
        tot = sum(cpt)
        desc = ", ".join(_accord(n, "boule " + noms[i][0], "boules " + noms[i][1]) for i, n in enumerate(cpt) if n > 0)
        p = F(cpt[k], tot)
        E.append(("application", "equiprobabilite",
                  f"Une urne contient {desc}, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité qu'elle soit {noms[k][0]} ?",
                  [f"Les {tot} boules ont la même probabilité d'être tirées : situation d'équiprobabilité.",
                   f"$P = \\dfrac{{\\text{{favorables}}}}{{\\text{{possibles}}}} = \\dfrac{{{cpt[k]}}}{{{tot}}}{_reduit(cpt[k], tot)}$."],
                  f"${fx(p)}$" if dexact(p) is None or p.denominator <= 4 else f"${fl(p)} = {fx(p)}$"))
    # b) dés et cartes
    D = [("On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un multiple de 3 ?", "Issues favorables : 3 et 6.", F(2, 6)),
         ("On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre premier ?", "Issues favorables : 2, 3 et 5.", F(3, 6)),
         ("On lance un dé équilibré à 12 faces numérotées de 1 à 12. Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 10 ?", "Issues favorables : 10, 11 et 12.", F(3, 12)),
         ("On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer un cœur ?", "Il y a 8 cœurs parmi 32 cartes.", F(8, 32)),
         ("On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer un roi ?", "Il y a 4 rois parmi 32 cartes.", F(4, 32)),
         ("On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer une figure (valet, dame ou roi) ?", "Il y a $3 \\times 4 = 12$ figures.", F(12, 32)),
         ("On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer un as rouge ?", "Il y a 2 as rouges (cœur et carreau).", F(2, 32))]
    for e, c, p in D:
        E.append(("application", "des-et-cartes", e,
                  ["Le dé est équilibré : ses faces ont la même probabilité d'apparaître (équiprobabilité)." if " dé " in e
                   else "La carte est tirée au hasard : les 32 cartes ont la même probabilité d'être tirées (équiprobabilité).", c],
                  f"${fl(p)}$"))
    # c) événement contraire
    for pa, ctx in [(F(3, 10), "il pleuve demain"), (F(7, 100), "un composant soit défectueux"), (F(5, 8), "un client achète un dessert"),
                    (F(45, 100), "un élève vienne en bus"), (F(1, 6), "on obtienne 6 avec un dé"), (F(2, 9), "une graine ne germe pas"),
                    (F(83, 100), "un vol arrive à l'heure")]:
        E.append(("application", "evenement-contraire",
                  f"La probabilité qu'{ctx} est ${fx(pa)}$. Quelle est la probabilité de l'événement contraire ?",
                  ["$P(\\overline{\\mathrm{A}}) = 1 - P(\\mathrm{A})$.", f"$1 - {fx(pa)} = {fx(1 - pa)}$."],
                  f"${fx(1 - pa)}$"))
    # d) réunion et intersection
    for pa, pb, pab in [(F(1, 2), F(3, 10), F(1, 10)), (F(4, 10), F(35, 100), F(15, 100)), (F(1, 3), F(1, 4), F(1, 12)), (F(6, 10), F(5, 10), F(3, 10))]:
        E.append(("intermediaire", "reunion-intersection",
                  f"$P(\\mathrm{{A}}) = {fx(pa)}$, $P(\\mathrm{{B}}) = {fx(pb)}$ et $P(\\mathrm{{A}} \\cap \\mathrm{{B}}) = {fx(pab)}$. Calculer $P(\\mathrm{{A}} \\cup \\mathrm{{B}})$.",
                  ["$P(\\mathrm{A} \\cup \\mathrm{B}) = P(\\mathrm{A}) + P(\\mathrm{B}) - P(\\mathrm{A} \\cap \\mathrm{B})$.",
                   f"$= {fx(pa)} + {fx(pb)} - {fx(pab)} = {fx(pa + pb - pab)}$."],
                  f"${fx(pa + pb - pab)}$"))
    for pa, pb, pu in [(F(7, 10), F(4, 10), F(9, 10)), (F(1, 2), F(1, 3), F(2, 3))]:
        E.append(("intermediaire", "reunion-intersection",
                  f"$P(\\mathrm{{A}}) = {fx(pa)}$, $P(\\mathrm{{B}}) = {fx(pb)}$ et $P(\\mathrm{{A}} \\cup \\mathrm{{B}}) = {fx(pu)}$. Calculer $P(\\mathrm{{A}} \\cap \\mathrm{{B}})$.",
                  ["On isole l'intersection dans $P(\\mathrm{A} \\cup \\mathrm{B}) = P(\\mathrm{A}) + P(\\mathrm{B}) - P(\\mathrm{A} \\cap \\mathrm{B})$.",
                   f"$P(\\mathrm{{A}} \\cap \\mathrm{{B}}) = {fx(pa)} + {fx(pb)} - {fx(pu)} = {fx(pa + pb - pu)}$."],
                  f"${fx(pa + pb - pu)}$"))
    E.append(("intermediaire", "reunion-intersection",
              "On lance un dé équilibré. A : « obtenir 1 ou 2 », B : « obtenir 6 ». A et B sont-ils incompatibles ? Calculer $P(\\mathrm{A} \\cup \\mathrm{B})$.",
              ["A et B ne peuvent pas se produire en même temps : $\\mathrm{A} \\cap \\mathrm{B} = \\varnothing$, ils sont incompatibles.",
               "$P(\\mathrm{A} \\cup \\mathrm{B}) = \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{1}{2}$."],
              "Oui ; $P(\\mathrm{A} \\cup \\mathrm{B}) = \\dfrac{1}{2}$"))
    E.append(("intermediaire", "reunion-intersection",
              "On tire une carte dans un jeu de 32 cartes. A : « tirer un cœur », B : « tirer un roi ». Calculer $P(\\mathrm{A} \\cup \\mathrm{B})$.",
              ["$P(\\mathrm{A}) = \\dfrac{8}{32}$, $P(\\mathrm{B}) = \\dfrac{4}{32}$ et $\\mathrm{A} \\cap \\mathrm{B}$ = « roi de cœur », de probabilité $\\dfrac{1}{32}$.",
               "$P(\\mathrm{A} \\cup \\mathrm{B}) = \\dfrac{8 + 4 - 1}{32} = \\dfrac{11}{32}$."],
              "$\\dfrac{11}{32}$"))
    # e) deux dés (dénombrement réel des 36 issues)
    issues = list(_produit(range(1, 7), repeat=2))
    for txt, cond in [("la somme des deux dés vaut 7", lambda a, b: a + b == 7),
                      ("la somme des deux dés vaut 10", lambda a, b: a + b == 10),
                      ("on obtient un double", lambda a, b: a == b),
                      ("le produit des deux dés vaut 12", lambda a, b: a * b == 12),
                      ("la somme des deux dés est supérieure ou égale à 10", lambda a, b: a + b >= 10),
                      ("les deux nombres sont pairs", lambda a, b: a % 2 == 0 and b % 2 == 0),
                      ("l'écart entre les deux nombres vaut 2", lambda a, b: abs(a - b) == 2)]:
        fav = [(a, b) for a, b in issues if cond(a, b)]
        p = F(len(fav), 36)
        liste = ("$" + ", ".join(f"({a}\\,;{b})" for a, b in fav) + "$") if len(fav) <= 8 else "les couples dont les deux nombres sont 2, 4 ou 6"
        E.append(("approfondissement", "deux-des",
                  f"On lance deux dés équilibrés à 6 faces, un rouge et un bleu. Quelle est la probabilité de l'événement « {txt} » ?",
                  ["Un tableau à double entrée donne $6 \\times 6 = 36$ issues équiprobables (les dés sont discernables).",
                   f"Issues favorables : {liste}, soit ${len(fav)}$ issues.",
                   f"$P = \\dfrac{{{len(fav)}}}{{36}}{_reduit(len(fav), 36)}$."],
                  f"${fl(p)}$"))
    # f) au moins un
    A = [("On lance deux dés équilibrés. Quelle est la probabilité d'obtenir au moins un 6 ?", 36, 25, "Aucun 6 : $5 \\times 5 = 25$ issues sur 36."),
         ("On lance deux pièces équilibrées. Quelle est la probabilité d'obtenir au moins un pile ?", 4, 1, "Aucun pile : seule l'issue FF, 1 issue sur 4."),
         ("On lance trois pièces équilibrées. Quelle est la probabilité d'obtenir au moins un pile ?", 8, 1, "Aucun pile : seule l'issue FFF, 1 issue sur 8."),
         ("Une urne contient 3 boules rouges et 2 boules noires. On tire une boule, on la remet, puis on en tire une deuxième. Quelle est la probabilité d'obtenir au moins une boule rouge ?", 25, 4, "Aucune rouge : $2 \\times 2 = 4$ issues sur $5 \\times 5 = 25$."),
         ("Un code est formé de deux chiffres choisis au hasard entre 0 et 9 (répétitions permises). Quelle est la probabilité qu'il contienne au moins un 0 ?", 100, 81, "Aucun 0 : $9 \\times 9 = 81$ codes sur 100.")]
    for e, tot, aucun, c in A:
        p = 1 - F(aucun, tot)
        E.append(("approfondissement", "au-moins-un", e,
                  ["On passe par l'événement contraire « aucun ».", c, f"$P = 1 - \\dfrac{{{aucun}}}{{{tot}}} = {fl(p)}$."],
                  f"${fl(p)}$"))
    # g) loi de probabilité
    for probs, j in [([F(1, 10), F(1, 10), F(15, 100), F(15, 100), F(2, 10), None], 5),
                     ([None, F(1, 4), F(1, 4), F(1, 8), F(1, 8), F(1, 8)], 0)]:
        manq = 1 - sum(p for p in probs if p is not None)
        tab = " & ".join("p" if p is None else fx(p) for p in probs)
        E.append(("intermediaire", "loi-de-probabilite",
                  f"Un dé est truqué. La loi de probabilité est : $\\begin{{array}}{{c|cccccc}} \\text{{face}} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline P & {tab} \\end{{array}}$. Calculer $p$.",
                  ["La somme des probabilités vaut $1$.", f"$p = 1 - ({' + '.join(fx(x) for x in probs if x is not None)}) = {fx(manq)}$."],
                  f"$p = {fx(manq)}$"))
    E.append(("intermediaire", "loi-de-probabilite",
              "Avec un dé truqué, $P(6) = 0{,}5$. Peut-on calculer la probabilité d'obtenir un nombre pair par « issues favorables sur issues possibles », soit $\\dfrac{3}{6}$ ?",
              ["Non : la formule n'est valable qu'en situation d'équiprobabilité.", "Ici les faces n'ont pas toutes la même probabilité."],
              "Non, il n'y a pas équiprobabilité"))
    E.append(("intermediaire", "loi-de-probabilite",
              "Une probabilité calculée vaut $1{,}2$. Qu'en conclure ?",
              ["Une probabilité est toujours comprise entre $0$ et $1$.", "Le calcul contient une erreur."], "Il y a une erreur"))
    # h) problèmes
    E.append(("probleme", "probleme",
              "Dans un lycée de $400$ élèves, $240$ sont demi-pensionnaires, $150$ font du sport à l'AS et $90$ sont à la fois demi-pensionnaires et à l'AS. On choisit un élève au hasard. Quelle est la probabilité qu'il soit demi-pensionnaire ou à l'AS ?",
              ["$P(\\mathrm{D}) = \\dfrac{240}{400}$, $P(\\mathrm{S}) = \\dfrac{150}{400}$, $P(\\mathrm{D} \\cap \\mathrm{S}) = \\dfrac{90}{400}$.",
               "$P(\\mathrm{D} \\cup \\mathrm{S}) = \\dfrac{240 + 150 - 90}{400} = \\dfrac{300}{400} = 0{,}75$."],
              "$0{,}75$"))
    E.append(("probleme", "probleme",
              "Sur $1\\,000$ lancers d'une punaise, elle est tombée $620$ fois sur le dos. Estimer la probabilité qu'elle tombe sur le dos. Pourquoi est-ce seulement une estimation ?",
              ["La fréquence observée est $\\dfrac{620}{1\\,000} = 0{,}62$.",
               "La fréquence fluctue d'un échantillon à l'autre ; elle se rapproche de la probabilité quand le nombre de lancers augmente."],
              "Environ $0{,}62$ (fluctuation d'échantillonnage)"))
    E.append(("probleme", "probleme",
              "Un QCM comporte 2 questions ; chacune a 4 réponses possibles dont une seule juste. Un élève répond au hasard. Quelle est la probabilité qu'il réponde juste aux deux questions ?",
              ["Il y a $4 \\times 4 = 16$ couples de réponses équiprobables.", "Un seul couple est entièrement juste : $P = \\dfrac{1}{16}$."],
              "$\\dfrac{1}{16}$"))
    E.append(("probleme", "probleme",
              "Une famille a deux enfants ; on suppose que chaque naissance donne une fille ou un garçon avec la même probabilité. Quelle est la probabilité que les deux enfants soient de sexes différents ?",
              ["Issues équiprobables : FF, FG, GF, GG.", "Deux issues conviennent : FG et GF, donc $P = \\dfrac{2}{4} = \\dfrac{1}{2}$."],
              "$\\dfrac{1}{2}$"))
    return _fin(E)


# ======================================================================
# 2de — STATISTIQUES
# ======================================================================
def _mediane(L):
    L = sorted(F(x) for x in L)
    n = len(L)
    return L[n // 2] if n % 2 else (L[n // 2 - 1] + L[n // 2]) / 2


def _quartiles(L):
    L = sorted(F(x) for x in L)
    n = len(L)
    r1, r3 = math.ceil(F(n, 4)), math.ceil(F(3 * n, 4))
    return L[r1 - 1], L[r3 - 1], r1, r3


def _serie(L):
    return " \\,;\\, ".join(fx(F(x)) for x in L)


def g2_stats():
    E = []
    # a) moyenne
    for L in [[12, 8, 15, 9, 16], [3, 7, 7, 10, 13, 2], [21, 18, 25, 19, 22, 23, 20], [F(145, 10), F(132, 10), F(158, 10), F(141, 10)]]:
        m = sum(F(x) for x in L) / len(L)
        E.append(("application", "moyenne",
                  f"Calculer la moyenne de la série : ${_serie(L)}$.",
                  [f"On additionne les {len(L)} valeurs : ${fx(sum(F(x) for x in L))}$.",
                   f"$\\bar x = \\dfrac{{{fx(sum(F(x) for x in L))}}}{{{len(L)}}} {_egal_approx(m)}$."],
                  f"$\\bar x {_egal_approx(m)}$"))
    for vals, eff in [([8, 10, 12, 14], [3, 5, 8, 4]), ([0, 1, 2, 3, 4], [5, 9, 12, 3, 1]), ([15, 16, 17, 18], [6, 10, 3, 1]), ([1, 2, 3, 4, 5], [2, 4, 6, 5, 3])]:
        N = sum(eff)
        m = F(sum(v * n for v, n in zip(vals, eff)), N)
        E.append(("application", "moyenne",
                  f"Calculer la moyenne de la série donnée par le tableau : $\\begin{{array}}{{c|{'c' * len(vals)}}} \\text{{valeur}} & {' & '.join(map(str, vals))} \\\\ \\hline \\text{{effectif}} & {' & '.join(map(str, eff))} \\end{{array}}$",
                  [f"Effectif total : $N = {N}$.",
                   f"$\\bar x = \\dfrac{{{_somme_prod(vals, eff)}}}{{{N}}} {_egal_approx(m)}$."],
                  f"$\\bar x {_egal_approx(m)}$"))
    # b) médiane
    for L in [[12, 5, 9, 17, 3], [4, 11, 8, 2, 15, 7], [21, 30, 18, 25, 27, 19, 22], [9, 14, 11, 9, 20, 13, 16, 10], [3, 5, 8, 9, 40],
              [101, 98, 105, 97, 110, 99], [F(15, 10), F(22, 10), F(18, 10), F(31, 10)], [7, 7, 8, 12, 12, 12, 15, 18, 20]]:
        S = sorted(F(x) for x in L)
        n = len(S)
        me = _mediane(L)
        if n % 2:
            c2 = f"$N = {n}$ est impair : la médiane est la valeur de rang $\\dfrac{{{n} + 1}}{{2}} = {(n + 1) // 2}$."
        else:
            c2 = f"$N = {n}$ est pair : la médiane est la moyenne des valeurs de rangs ${n // 2}$ et ${n // 2 + 1}$, soit $\\dfrac{{{fx(S[n // 2 - 1])} + {fx(S[n // 2])}}}{{2}}$."
        E.append(("application" if n % 2 else "intermediaire", "mediane",
                  f"Déterminer la médiane de la série : ${_serie(L)}$.",
                  [f"On range d'abord les valeurs : ${_serie(S)}$.", c2, f"$\\mathrm{{Me}} = {fx(me)}$."],
                  f"$\\mathrm{{Me}} = {fx(me)}$"))
    # c) quartiles
    for L in [[2, 5, 7, 8, 10, 12, 15, 18], [12, 3, 9, 15, 6, 11, 14, 7, 10, 5], [31, 25, 28, 40, 22, 35, 27, 30, 33],
              [1, 3, 3, 4, 6, 6, 7, 9, 9, 10, 12, 15], [50, 42, 61, 38, 55, 47, 59], [8, 9, 9, 10, 11, 11, 12, 13, 14, 14, 15],
              [100, 120, 95, 130, 110, 105]]:
        q1, q3, r1, r3 = _quartiles(L)
        S = sorted(L)
        n = len(L)
        E.append(("intermediaire", "quartiles",
                  f"Déterminer les quartiles $\\mathrm{{Q}}_1$ et $\\mathrm{{Q}}_3$ et l'écart interquartile de la série : ${_serie(L)}$.",
                  [f"Série rangée : ${_serie(S)}$ ($N = {n}$).",
                   f"$\\dfrac{{N}}{{4}} = {fx(F(n, 4))}$ : on prend le rang ${r1}$, donc $\\mathrm{{Q}}_1 = {fx(q1)}$.",
                   f"$\\dfrac{{3N}}{{4}} = {fx(F(3 * n, 4))}$ : on prend le rang ${r3}$, donc $\\mathrm{{Q}}_3 = {fx(q3)}$.",
                   f"Écart interquartile : ${fx(q3)} - {fx(q1)} = {fx(q3 - q1)}$."],
                  f"$\\mathrm{{Q}}_1 = {fx(q1)}$ ; $\\mathrm{{Q}}_3 = {fx(q3)}$ ; écart interquartile ${fx(q3 - q1)}$"))
    # d) étendue
    for L in [[14, 9, 17, 6, 12], [F(-32, 10), F(15, 10), F(-8, 10), F(41, 10)], [1520, 1730, 1385, 1610], [98, 102, 99, 105, 101], [0, 25, 13, 7, 19, 22]]:
        e = max(F(x) for x in L) - min(F(x) for x in L)
        E.append(("application", "etendue",
                  f"Calculer l'étendue de la série : ${_serie(L)}$.",
                  [f"Valeur maximale : ${fx(max(F(x) for x in L))}$ ; valeur minimale : ${fx(min(F(x) for x in L))}$.",
                   f"Étendue : ${fx(max(F(x) for x in L))} - {par(min(F(x) for x in L)) if min(F(x) for x in L) < 0 else fx(min(F(x) for x in L))} = {fx(e)}$."],
                  f"${fx(e)}$"))
    # e) fréquences
    for n, N, ctx in [(12, 30, "Dans une classe de 30 élèves, 12 font du sport en club"), (45, 180, "Sur 180 personnes interrogées, 45 préfèrent le train"),
                      (7, 25, "Sur 25 jours, il a plu 7 jours"), (318, 600, "Sur 600 votants, 318 ont voté oui"),
                      (9, 40, "Sur 40 pièces contrôlées, 9 sont défectueuses"), (130, 520, "Sur 520 spectateurs, 130 ont moins de 18 ans")]:
        f = F(n, N)
        E.append(("application", "frequence",
                  f"{ctx}. Calculer la fréquence correspondante, en écriture décimale puis en pourcentage.",
                  [f"$f = \\dfrac{{{n}}}{{{N}}} = {fx(f)}$.", f"Soit ${fx(f * 100)}\\,\\%$."],
                  f"$f = {fx(f)}$, soit ${fx(f * 100)}\\,\\%$"))
    # f) linéarité de la moyenne
    for m, a, b, ctx, u in [(11, 1, 2, "On ajoute 2 points à toutes les notes d'un devoir dont la moyenne était 11.", ""),
                            (F(124, 10), F(11, 10), 0, "Toutes les notes, de moyenne 12,4, sont multipliées par 1,1.", ""),
                            (2000, F(102, 100), 0, "Tous les salaires d'une entreprise, de moyenne 2 000 €, augmentent de 2 %.", " €"),
                            (20, F(9, 5), 32, "Des températures ont une moyenne de 20 °C. On les convertit en degrés Fahrenheit par $y = 1{,}8x + 32$.", " °F"),
                            (35, 1, -5, "Les prix d'un rayon, de moyenne 35 €, baissent tous de 5 €.", " €"),
                            (14, F(1, 2), 1, "Toutes les valeurs d'une série de moyenne 14 sont transformées par $y = 0{,}5x + 1$.", "")]:
        y = a * m + b
        E.append(("intermediaire", "linearite-moyenne",
                  ctx + " Quelle est la nouvelle moyenne ?",
                  ["Si $y_i = ax_i + b$ pour toutes les valeurs, alors $\\bar y = a\\bar x + b$.",
                   f"$\\bar y = {fx(a)} \\times {fx(m)}{' ' + sg(b) if b else ''} = {fx(y)}$."],
                  f"${fx(y)}${u}"))
    # g) problèmes
    P = [("Un élève a obtenu $11$, $14$ et $9$. Quelle note doit-il obtenir au quatrième devoir pour avoir $12$ de moyenne ?",
          ["Il faut un total de $4 \\times 12 = 48$ points.", "$48 - (11 + 14 + 9) = 48 - 34 = 14$."], "$14$"),
         ("Un élève a $12$ en maths (coefficient 3), $9$ en physique (coefficient 2) et $15$ en anglais (coefficient 1). Calculer sa moyenne.",
          ["$\\bar x = \\dfrac{12 \\times 3 + 9 \\times 2 + 15 \\times 1}{3 + 2 + 1} = \\dfrac{69}{6}$.", "$\\bar x = 11{,}5$."], "$11{,}5$"),
         ("Dans une entreprise, neuf salariés gagnent entre $1\\,800$ € et $2\\,200$ € et le directeur gagne $15\\,000$ €. Quel indicateur décrit le mieux le salaire « typique » : la moyenne ou la médiane ?",
          ["La moyenne est tirée vers le haut par la valeur extrême de $15\\,000$ €.", "La médiane n'est pas sensible à cette valeur extrême."], "La médiane"),
         ("Un groupe de 20 élèves a $12$ de moyenne, un groupe de 30 élèves a $10$ de moyenne. Quelle est la moyenne de l'ensemble des 50 élèves ?",
          ["Total des points : $20 \\times 12 + 30 \\times 10 = 540$.", "$\\bar x = \\dfrac{540}{50} = 10{,}8$ (et non $11$, moyenne des deux moyennes)."], "$10{,}8$"),
         ("Les températures d'une semaine sont $12$, $14$, $13$, $15$, $11$, $14$ et $32$ °C (une erreur de capteur). Comparer moyenne et médiane.",
          ["Moyenne : $\\dfrac{111}{7} \\approx 15{,}9$ °C.", "Médiane : série rangée $11, 12, 13, 14, 14, 15, 32$, donc $14$ °C.",
           "La valeur aberrante fausse la moyenne mais pas la médiane."], "Moyenne $\\approx 15{,}9$ °C ; médiane $14$ °C"),
         ("Dans un lycée, il y a 120 élèves de seconde, dont 70 filles ; 45 de ces filles font du sport. Quel pourcentage des filles fait du sport ?",
          ["On calcule par rapport au total des filles (et non au total des élèves).", "$\\dfrac{45}{70} \\approx 0{,}643$, soit environ $64{,}3\\,\\%$."], "Environ $64{,}3\\,\\%$"),
         ("Une série de 5 valeurs a pour moyenne $8$. On ajoute la valeur $20$. Quelle est la nouvelle moyenne ?",
          ["Somme initiale : $5 \\times 8 = 40$ ; nouvelle somme $60$.", "Nouvelle moyenne : $\\dfrac{60}{6} = 10$."], "$10$"),
         ("Vrai ou faux : la médiane d'une série est la moyenne de la plus petite et de la plus grande valeur.",
          ["Faux : la médiane partage la série ordonnée en deux moitiés.", "Exemple : pour $1, 2, 10$, la médiane est $2$ alors que $\\dfrac{1 + 10}{2} = 5{,}5$."], "Faux"),
         ("Les fréquences de trois valeurs sont $0{,}35$, $0{,}4$ et $f$. Calculer $f$.",
          ["La somme des fréquences vaut $1$.", "$f = 1 - 0{,}35 - 0{,}4 = 0{,}25$."], "$f = 0{,}25$"),
         ("Pourquoi l'écart interquartile est-il un indicateur de dispersion plus robuste que l'étendue ?",
          ["L'étendue ne dépend que des deux valeurs extrêmes.", "L'écart interquartile concerne les $50\\,\\%$ centraux et ignore les valeurs extrêmes."],
          "Il n'est pas influencé par les valeurs extrêmes")]
    for e, c, r in P:
        E.append(("probleme", "probleme", e, c, r))
    return _fin(E)


def _egal_approx(v, d=2):
    """« = 2,5 » si la valeur est décimale exacte, sinon « ≈ 21,14 »."""
    v = F(v)
    if v.denominator == 1 or dexact(v):
        return f"= {fx(v)}"
    return f"\\approx {nb(float(v), d)}"


def _somme_prod(vals, eff):
    return " + ".join(f"{v} \\times {n}" for v, n in zip(vals, eff))


# ======================================================================
# 2de — VECTEURS
# ======================================================================
def racine(n):
    """√n simplifiée (n entier ≥ 0) : texte LaTeX."""
    k = 1
    for d in range(2, int(math.isqrt(n)) + 1):
        if n % (d * d) == 0:
            k = d
    r = n // (k * k)
    if r == 1:
        return nb(k)
    return (f"{k}\\sqrt{{{r}}}" if k > 1 else f"\\sqrt{{{r}}}")


def _rac_suite(n):
    """« = 2√5 » si √n se simplifie, sinon rien."""
    r = racine(n)
    return "" if r == f"\\sqrt{{{n}}}" else f" = {r}"


def _V(nom, x, y):
    return f"\\overrightarrow{{{nom}}}{vec(x, y)}"


def g2_vecteurs():
    E = []
    # a) coordonnées d'un vecteur
    for (xa, ya), (xb, yb) in [((1, 5), (4, 3)), ((-2, 3), (5, -1)), ((0, -4), (-3, 2)), ((F(1, 2), 2), (3, F(-1, 2))),
                               ((-5, -2), (-1, -7)), ((6, 0), (0, 6))]:
        E.append(("application", "coordonnees",
                  f"Dans un repère, ${_P('A', xa, ya)}$ et ${_P('B', xb, yb)}$. Calculer les coordonnées de $\\overrightarrow{{\\mathrm{{AB}}}}$.",
                  ["Arrivée moins départ : $\\overrightarrow{\\mathrm{AB}}\\begin{pmatrix} x_\\mathrm{B} - x_\\mathrm{A} \\\\ y_\\mathrm{B} - y_\\mathrm{A} \\end{pmatrix}$.",
                   f"$\\overrightarrow{{\\mathrm{{AB}}}}{vec(F(xb) - xa, F(yb) - ya)}$."],
                  f"$\\overrightarrow{{\\mathrm{{AB}}}}{vec(F(xb) - xa, F(yb) - ya)}$"))
    # b) somme
    for (a, b), (c, d) in [((2, 3), (4, -1)), ((-3, 5), (3, -5)), ((0, 7), (-2, -4)), ((F(3, 2), -2), (F(1, 2), 6)), ((-6, -1), (2, 8))]:
        E.append(("application", "somme",
                  f"On donne $\\vec{{u}}{vec(a, b)}$ et $\\vec{{v}}{vec(c, d)}$. Calculer les coordonnées de $\\vec{{u}} + \\vec{{v}}$.",
                  ["On additionne composante par composante.", f"$\\vec{{u}} + \\vec{{v}}$ a pour coordonnées ${vec(F(a) + c, F(b) + d)}$."],
                  f"$\\vec{{u}} + \\vec{{v}} = {vec(F(a) + c, F(b) + d)}$"))
    # c) combinaisons
    for (a, b), (c, d), k, l in [((1, 2), (3, -1), 2, 3), ((4, -2), (1, 5), 3, -2), ((-2, 0), (2, 3), -1, 2), ((5, 1), (-1, 4), F(1, 2), 1), ((0, 3), (2, -2), 4, -3)]:
        x, y = k * F(a) + l * F(c), k * F(b) + l * F(d)
        expr = f"{coef(k)}\\vec{{u}} {'+' if l > 0 else '-'} {coef(abs(l))}\\vec{{v}}"
        E.append(("intermediaire", "combinaison",
                  f"On donne $\\vec{{u}}{vec(a, b)}$ et $\\vec{{v}}{vec(c, d)}$. Calculer les coordonnées de $\\vec{{w}} = {expr}$.",
                  [f"${coef(k)}\\vec{{u}}{vec(k * F(a), k * F(b))}$ et ${coef(l)}\\vec{{v}}{vec(l * F(c), l * F(d))}$.",
                   f"On additionne : $\\vec{{w}}{vec(x, y)}$."],
                  f"$\\vec{{w}}{vec(x, y)}$"))
    # d) colinéarité
    for (a, b), (c, d) in [((2, 3), (6, 9)), ((4, -2), (-6, 3)), ((1, 5), (3, 14)), ((-3, 7), (6, -14)), ((F(1, 2), 2), (1, 4)),
                           ((5, 2), (2, 5)), ((0, 3), (0, -7))]:
        det = F(a) * d - F(b) * c
        E.append(("intermediaire", "colinearite",
                  f"Les vecteurs $\\vec{{u}}{vec(a, b)}$ et $\\vec{{v}}{vec(c, d)}$ sont-ils colinéaires ?",
                  ["On calcule le déterminant $xy' - yx'$.",
                   f"${fx(a) if F(a) >= 0 else par(a)} \\times {par(d)} - {par(b)} \\times {par(c)} = {fx(det)}$.",
                   "Le déterminant est nul : les vecteurs sont colinéaires." if det == 0 else "Le déterminant n'est pas nul : les vecteurs ne sont pas colinéaires."],
                  ("Oui" if det == 0 else "Non") + f" (déterminant ${fx(det)}$)"))
    # e) milieu
    for (xa, ya), (xb, yb) in [((2, 4), (6, 10)), ((-3, 1), (5, -7)), ((0, 0), (7, 3)), ((-4, -5), (-1, 2)), ((F(1, 2), 3), (F(5, 2), -2)), ((10, -6), (-2, 6))]:
        mx, my = (F(xa) + xb) / 2, (F(ya) + yb) / 2
        E.append(("application", "milieu",
                  f"Calculer les coordonnées du milieu $\\mathrm{{I}}$ de $[\\mathrm{{AB}}]$ avec ${_P('A', xa, ya)}$ et ${_P('B', xb, yb)}$.",
                  ["$\\mathrm{I}\\left(\\dfrac{x_\\mathrm{A} + x_\\mathrm{B}}{2}\\,;\\dfrac{y_\\mathrm{A} + y_\\mathrm{B}}{2}\\right)$.",
                   f"${_P('I', mx, my)}$."],
                  f"${_P('I', mx, my)}$"))
    # f) norme (repère orthonormé)
    for x, y in [(3, 4), (-5, 12), (2, 4), (-1, -3), (6, -8), (4, 4)]:
        n2 = x * x + y * y
        rac = racine(n2)
        approx = "" if math.isqrt(n2) ** 2 == n2 else f" \\approx {nb(math.sqrt(n2), 2)}"
        E.append(("intermediaire", "norme",
                  f"Dans un repère orthonormé, calculer la norme du vecteur $\\vec{{u}}{vec(x, y)}$.",
                  ["$\\lVert \\vec{u} \\rVert = \\sqrt{x^2 + y^2}$.",
                   f"$\\lVert \\vec{{u}} \\rVert = \\sqrt{{{par(x)}^2 + {par(y)}^2}} = \\sqrt{{{n2}}}{_rac_suite(n2)}{approx}$."],
                  f"$\\lVert \\vec{{u}} \\rVert = {rac}${'' if not approx else ' (environ $' + nb(math.sqrt(n2), 2) + '$)'}"))
    # g) alignement
    for A, B, C in [((1, 2), (3, 6), (5, 10)), ((0, 1), (2, 4), (6, 9)), ((-1, 3), (1, 1), (4, -2)), ((2, -1), (4, 3), (5, 6)), ((-2, -2), (0, 1), (4, 7))]:
        u = (B[0] - A[0], B[1] - A[1])
        v = (C[0] - A[0], C[1] - A[1])
        det = u[0] * v[1] - u[1] * v[0]
        E.append(("approfondissement", "alignement",
                  f"Les points ${_P('A', *A)}$, ${_P('B', *B)}$ et ${_P('C', *C)}$ sont-ils alignés ?",
                  [f"$\\overrightarrow{{\\mathrm{{AB}}}}{vec(*u)}$ et $\\overrightarrow{{\\mathrm{{AC}}}}{vec(*v)}$.",
                   f"Déterminant : ${par(u[0])} \\times {par(v[1])} - {par(u[1])} \\times {par(v[0])} = {det}$.",
                   "Les vecteurs sont colinéaires et ont le point A en commun : les points sont alignés." if det == 0 else
                   "Les vecteurs ne sont pas colinéaires : les points ne sont pas alignés."],
                  "Oui" if det == 0 else "Non"))
    # h) parallélogramme
    for A, B, C in [((1, 1), (4, 2), (5, 5)), ((-2, 0), (1, 3), (4, 1)), ((0, -3), (2, 1), (-1, 4)), ((3, 3), (6, -1), (2, -4)), ((-4, 2), (-1, 5), (1, 0))]:
        D = (A[0] + C[0] - B[0], A[1] + C[1] - B[1])
        E.append(("approfondissement", "parallelogramme",
                  f"On donne ${_P('A', *A)}$, ${_P('B', *B)}$ et ${_P('C', *C)}$. Déterminer les coordonnées du point $\\mathrm{{D}}$ tel que $\\mathrm{{ABCD}}$ soit un parallélogramme.",
                  ["$\\mathrm{ABCD}$ est un parallélogramme si et seulement si $\\overrightarrow{\\mathrm{AB}} = \\overrightarrow{\\mathrm{DC}}$.",
                   f"$\\overrightarrow{{\\mathrm{{AB}}}}{vec(B[0] - A[0], B[1] - A[1])}$ et $\\overrightarrow{{\\mathrm{{DC}}}}\\begin{{pmatrix}} {C[0]} - x_\\mathrm{{D}} \\\\ {C[1]} - y_\\mathrm{{D}} \\end{{pmatrix}}$.",
                   f"$x_\\mathrm{{D}} = {C[0]} - {par(B[0] - A[0])} = {D[0]}$ et $y_\\mathrm{{D}} = {C[1]} - {par(B[1] - A[1])} = {D[1]}$."],
                  f"${_P('D', *D)}$"))
    # i) problèmes de déplacement
    P = [((3, 4), (5, -2), 100, "m", "Un drone part du point O(0 ; 0). Il se déplace selon le vecteur $\\vec{u}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ puis selon $\\vec{v}\\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$ (unité : 100 m)."),
         ((-2, 6), (8, 0), 1, "km", "Un bateau part du port O(0 ; 0). Il suit le vecteur $\\vec{u}\\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}$ puis le vecteur $\\vec{v}\\begin{pmatrix} 8 \\\\ 0 \\end{pmatrix}$ (unité : 1 km)."),
         ((6, 2), (-3, 2), 1, "m", "Un robot part de l'origine O. Il effectue le déplacement $\\vec{u}\\begin{pmatrix} 6 \\\\ 2 \\end{pmatrix}$ puis $\\vec{v}\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$ (unité : 1 m).")]
    for u, v, fact, unit, txt in P:
        w = (u[0] + v[0], u[1] + v[1])
        n2 = w[0] ** 2 + w[1] ** 2
        rac = racine(n2)
        approx = "" if math.isqrt(n2) ** 2 == n2 else f" \\approx {nb(math.sqrt(n2), 2)}"
        E.append(("probleme", "deplacement",
                  txt + " Où arrive-t-il ? À quelle distance (en unités) est-il de son point de départ ? (repère orthonormé)",
                  ["Relation de Chasles : le déplacement total est $\\vec{u} + \\vec{v}$.",
                   f"$\\vec{{u}} + \\vec{{v}} = {vec(*w)}$, donc il arrive au point ${pt(*w)}$.",
                   f"Distance : $\\sqrt{{{par(w[0])}^2 + {par(w[1])}^2}} = \\sqrt{{{n2}}}{_rac_suite(n2)}{approx}$."],
                  f"Point ${pt(*w)}$ ; distance ${rac}{approx}$ unités, soit {'environ ' if approx else ''}{tx(arr(math.sqrt(n2) * fact, 0 if fact > 1 else 2))} {unit}"))
    E.append(("probleme", "deplacement",
              "Simplifier $\\overrightarrow{\\mathrm{AB}} + \\overrightarrow{\\mathrm{BC}} + \\overrightarrow{\\mathrm{CD}}$, puis $\\overrightarrow{\\mathrm{MA}} - \\overrightarrow{\\mathrm{MB}}$.",
              ["Chasles : $\\overrightarrow{\\mathrm{AB}} + \\overrightarrow{\\mathrm{BC}} = \\overrightarrow{\\mathrm{AC}}$, puis $\\overrightarrow{\\mathrm{AC}} + \\overrightarrow{\\mathrm{CD}} = \\overrightarrow{\\mathrm{AD}}$.",
               "$\\overrightarrow{\\mathrm{MA}} - \\overrightarrow{\\mathrm{MB}} = \\overrightarrow{\\mathrm{MA}} + \\overrightarrow{\\mathrm{BM}} = \\overrightarrow{\\mathrm{BM}} + \\overrightarrow{\\mathrm{MA}} = \\overrightarrow{\\mathrm{BA}}$."],
              "$\\overrightarrow{\\mathrm{AD}}$ et $\\overrightarrow{\\mathrm{BA}}$"))
    E.append(("probleme", "deplacement",
              "Sur une carte, une randonneuse va de A à B selon $\\overrightarrow{\\mathrm{AB}}\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$, puis revient à A. Quel vecteur décrit le retour ? Que vaut le déplacement total ?",
              ["Le retour est $\\overrightarrow{\\mathrm{BA}} = -\\overrightarrow{\\mathrm{AB}}$, de coordonnées $\\begin{pmatrix} -4 \\\\ -1 \\end{pmatrix}$.",
               "$\\overrightarrow{\\mathrm{AB}} + \\overrightarrow{\\mathrm{BA}} = \\overrightarrow{\\mathrm{AA}} = \\vec{0}$."],
              "$\\overrightarrow{\\mathrm{BA}}\\begin{pmatrix} -4 \\\\ -1 \\end{pmatrix}$ ; déplacement total $\\vec{0}$"))
    return _fin(E)



# ======================================================================
# Tle techno — ACTIVITÉS GÉOMÉTRIQUES (STD2A)
# ======================================================================
def _nature(alpha, beta):
    if beta == 90:
        return "un cercle", "$\\beta = 90°$ : le plan est perpendiculaire à l'axe."
    if alpha < beta < 90:
        return "une ellipse", f"${alpha}° < \\beta < 90°$ : le plan est incliné mais coupe toutes les génératrices d'une nappe."
    if beta == alpha:
        return "une parabole", "$\\beta = \\alpha$ : le plan est parallèle à une seule génératrice."
    return "une hyperbole", f"$0° \\leqslant \\beta < {alpha}°$ : le plan coupe les deux nappes."


def gt_std2a():
    E = []
    # a) nature de la section
    for alpha, beta in [(30, 90), (30, 50), (30, 30), (30, 10), (45, 60), (45, 45), (45, 0), (20, 75), (60, 40), (25, 25)]:
        nat, why = _nature(alpha, beta)
        E.append(("application", "nature-conique",
                  f"Un cône de révolution a un demi-angle au sommet $\\alpha = {alpha}°$. On le coupe par un plan ne passant pas par le sommet, qui fait un angle $\\beta = {beta}°$ avec l'axe. Quelle est la nature de la section ?",
                  ["On compare $\\beta$ (angle plan–axe) au demi-angle au sommet $\\alpha$.", why],
                  f"C'est {nat}"))
    # b) vocabulaire des coniques
    V = [("Parmi le cercle, l'ellipse, la parabole et l'hyperbole, lesquelles sont des courbes fermées ?",
          ["Le cercle et l'ellipse se referment.", "La parabole et l'hyperbole ont des branches infinies."], "Le cercle et l'ellipse"),
         ("Combien une ellipse (qui n'est pas un cercle) a-t-elle d'axes de symétrie ? Comment s'appellent-ils ?",
          ["Elle a exactement deux axes de symétrie, perpendiculaires en son centre.", "Ce sont le grand axe et le petit axe."], "Deux : le grand axe et le petit axe"),
         ("Combien de branches possède une hyperbole ? Comment s'appellent les droites dont elles se rapprochent ?",
          ["Une hyperbole a deux branches disjointes, symétriques par rapport au centre.", "Elles se rapprochent de deux asymptotes sans les toucher."], "Deux branches ; les asymptotes"),
         ("Combien une parabole a-t-elle d'axes de symétrie ?",
          ["Une parabole a un seul axe de symétrie, qui passe par son sommet."], "Un seul"),
         ("Vrai ou faux : une ellipse peut être plus pointue d'un côté que de l'autre, comme un œuf.",
          ["Faux : les deux moitiés de part et d'autre du petit axe sont symétriques."], "Faux"),
         ("Vrai ou faux : les asymptotes d'une hyperbole sont des tangentes à la courbe.",
          ["Faux : une asymptote ne touche la courbe en aucun point ; une tangente touche la courbe en un point."], "Faux"),
         ("Quelle est la tangente au cercle de centre O au point M ?",
          ["C'est la droite perpendiculaire en M au rayon $[\\mathrm{OM}]$."], "La perpendiculaire en M au rayon $[\\mathrm{OM}]$"),
         ("Vrai ou faux : une droite qui coupe une parabole en un seul point est forcément tangente.",
          ["Faux : une droite parallèle à l'axe de la parabole la coupe en un seul point en la traversant.",
           "Le bon critère est : toucher la courbe sans la traverser."], "Faux (droite parallèle à l'axe)")]
    for e, c, r in V:
        E.append(("intermediaire", "vocabulaire-coniques", e, c, r))
    # c) rayon d'une section circulaire
    for alpha, d in [(30, 6), (45, 8), (60, 3), (20, 10), (15, 12), (35, 5), (50, 4), (25, 9)]:
        r = d * math.tan(math.radians(alpha))
        sym = "=" if abs(r - round(r)) < 1e-9 else "\\approx"
        E.append(("intermediaire", "rayon-section",
                  f"Un cône de révolution a un demi-angle au sommet de ${alpha}°$. On le coupe par un plan perpendiculaire à l'axe, à ${d}$ cm du sommet (mesuré sur l'axe). Calculer le rayon de la section circulaire, arrondi au millimètre.",
                  ["Le profil du cône donne un triangle rectangle : $r = d \\times \\tan \\alpha$.",
                   f"$r = {d} \\times \\tan {alpha}° {sym} {nb(r, 3)}$ cm."],
                  f"$r {sym} {nb(r, 1)}$ cm"))
    # d) tangente au cercle depuis un point extérieur
    for R, OA in [(5, 13), (3, 5), (8, 10), (6, 10), (7, 25), (4, 6), (9, 15), (2, 5)]:
        t2 = OA * OA - R * R
        rac = racine(t2)
        approx = "" if math.isqrt(t2) ** 2 == t2 else f" \\approx {nb(math.sqrt(t2), 2)}"
        E.append(("approfondissement", "tangente-cercle",
                  f"Un cercle a pour centre O et pour rayon ${R}$ cm. Un point A est tel que $\\mathrm{{OA}} = {OA}$ cm. Une tangente issue de A touche le cercle en T. Calculer la longueur AT.",
                  ["La tangente en T est perpendiculaire au rayon $[\\mathrm{OT}]$ : le triangle OTA est rectangle en T.",
                   f"Pythagore : $\\mathrm{{AT}}^2 = \\mathrm{{OA}}^2 - \\mathrm{{OT}}^2 = {OA * OA} - {R * R} = {t2}$.",
                   f"$\\mathrm{{AT}} = \\sqrt{{{t2}}}{_rac_suite(t2)}{approx}$ cm."],
                  f"$\\mathrm{{AT}} = {rac}{approx}$ cm"))
    # e) perspective centrale
    P = [("En perspective centrale, que devient l'image d'une droite ?", ["Les alignements sont conservés : l'image d'une droite est une droite."], "Une droite"),
         ("Deux rails parallèles, horizontaux et perpendiculaires au tableau : où se coupent leurs images ?",
          ["Des parallèles non frontales ont des images concourantes en un point de fuite.", "Perpendiculaires au tableau : c'est le point de fuite principal F, sur la ligne d'horizon."],
          "Au point de fuite principal F"),
         ("Les arêtes verticales d'un immeuble sont parallèles au tableau. Que deviennent leurs images ?",
          ["Ce sont des frontales : leurs images gardent leur direction.", "Elles restent verticales et parallèles."], "Elles restent verticales et parallèles"),
         ("Vrai ou faux : en perspective centrale, l'image du milieu d'un segment est le milieu de l'image.",
          ["Faux : les milieux ne sont pas conservés (sauf cas particuliers).", "C'est pourquoi les traverses d'une voie ferrée semblent se resserrer vers l'horizon."], "Faux"),
         ("Comment placer, sur un dessin en perspective, le milieu d'une façade rectangulaire ?",
          ["Dans la réalité, les diagonales d'un rectangle se coupent en son centre.", "La perspective conserve alignements et intersections : on trace les diagonales de l'image, leur point d'intersection est l'image du centre."],
          "On trace les diagonales : leur intersection donne le centre"),
         ("Où se situe la ligne d'horizon sur le tableau ?", ["C'est la droite horizontale du tableau située à la hauteur de l'œil."], "À la hauteur de l'œil"),
         ("Quelle courbe obtient-on en général en dessinant en perspective une assiette ronde vue de biais ?",
          ["Les rayons visuels s'appuyant sur le cercle forment un cône, coupé par le tableau.", "L'image est une conique, presque toujours une ellipse."], "Une ellipse"),
         ("Citer deux propriétés conservées et deux propriétés perdues par la perspective centrale.",
          ["Conservées : l'alignement, les intersections (et le contact d'une tangente).", "Perdues : les longueurs, les milieux, les angles, le parallélisme des droites non frontales."],
          "Conservées : alignement, intersection ; perdues : longueurs, milieux")]
    for e, c, r in P:
        E.append(("application", "perspective", e, c, r))
    # f) ellipse et rectangle encadrant
    for ga, pa in [(12, 8), (10, 6), (20, 14), (9, 5)]:
        a, b = F(ga, 2), F(pa, 2)
        E.append(("application", "ellipse",
                  f"Une ellipse a un grand axe de ${ga}$ cm et un petit axe de ${pa}$ cm. Donner les dimensions de son rectangle encadrant, puis les coordonnées de ses quatre sommets dans un repère orthonormé centré en son centre, le grand axe sur l'axe des abscisses.",
                  [f"Le rectangle encadrant mesure $2a \\times 2b = {ga} \\times {pa}$ cm.",
                   f"$a = {fx(a)}$ et $b = {fx(b)}$ : sommets $({fx(a)}\\,;0)$, $(-{fx(a)}\\,;0)$, $(0\\,;{fx(b)})$, $(0\\,;-{fx(b)})$."],
                  f"Rectangle ${ga} \\times {pa}$ cm ; sommets $(\\pm {fx(a)}\\,;0)$ et $(0\\,;\\pm {fx(b)})$"))
    # g) problèmes
    for alpha, d in [(15, 2), (10, 3)]:
        r = d * math.tan(math.radians(alpha))
        E.append(("probleme", "probleme",
                  f"Le faisceau d'une lampe torche est un cône de demi-angle ${alpha}°$. On éclaire un mur perpendiculaire à l'axe du faisceau, à ${d}$ m de l'ampoule. Quelle est la forme de la tache lumineuse et quel est son rayon (au cm près) ?",
                  ["Le mur est perpendiculaire à l'axe : la section est un cercle.", f"$r = {d} \\times \\tan {alpha}° \\approx {nb(r, 3)}$ m."],
                  f"Un cercle de rayon $\\approx {nb(r, 2)}$ m"))
    E.append(("probleme", "probleme",
              "Une applique murale conique éclaire vers le haut et vers le bas ; le mur est parallèle à l'axe du cône de lumière. Quelle forme ont les deux taches lumineuses ?",
              ["Le mur est parallèle à l'axe : $\\beta = 0° < \\alpha$.", "Le plan coupe les deux nappes : les taches dessinent les deux branches d'une hyperbole."],
              "Les deux branches d'une hyperbole"))
    E.append(("probleme", "probleme",
              "Un abat-jour conique a un demi-angle au sommet de $40°$. Le plan de coupe fait un angle de $65°$ avec l'axe. Quelle courbe obtient-on ? Est-elle fermée ?",
              ["$40° < 65° < 90°$ : c'est une ellipse.", "Une ellipse est une courbe fermée."], "Une ellipse, courbe fermée"))
    return _fin(E)


# ======================================================================
# Tle techno — ALGORITHMIQUE ET PROGRAMMATION (listes)
# ======================================================================
def gt_algo():
    E = []
    # a) affectation
    A = [("u = 5\nr = 3\nu = u + r\nu = u + r", ["u", "r"]),
         ("a = 4\nb = a + 1\na = 2 * b\nb = a - b", ["a", "b"]),
         ("p = 100\np = p * 2\np = p - 50", ["p"]),
         ("x = 7\ny = x == 7\nz = x == 8", ["x", "y", "z"]),
         ("n = 3\nn = n ** 2\nn = n + n", ["n"]),
         ("a = 2\nb = 9\nc = a\na = b\nb = c", ["a", "b", "c"])]
    for code, noms in A:
        env, _ = executer(code)
        E.append(("application", "affectation",
                  "On exécute les lignes suivantes, dans l'ordre :" + bloc(code) + "Donner la valeur finale de chaque variable.",
                  ["L'affectation se lit de droite à gauche : on calcule, puis on range ; l'ancienne valeur est écrasée."] + _trace(code, noms),
                  " ; ".join(f"`{n}` = {_py(env[n])}" for n in noms)))
    E.append(("application", "affectation",
              "Quelle est la différence entre `x = 7` et `x == 7` en Python ?",
              ["`x = 7` est une affectation : la variable `x` reçoit la valeur 7.",
               "`x == 7` est une comparaison : elle vaut `True` si `x` vaut 7, `False` sinon."],
              "`=` affecte, `==` compare"))
    # b) fonctions
    Fn = [("def terme(n):\n    return 5 + 3 * n", "terme(4)"), ("def terme(n):\n    return 5 + 3 * n", "terme(10)"),
          ("def v(n):\n    return 200 * 2 ** n", "v(3)"), ("def cout(q):\n    return 50 + 12 * q", "cout(15)"),
          ("def f(x):\n    if x < 0:\n        return 0\n    return x * x", "f(-4) + f(3)"),
          ("def u(n):\n    return 1000 - 75 * n", "u(8)")]
    for code, appel in Fn:
        env, _ = executer(code + f"\nRES = {appel}")
        E.append(("application", "fonction",
                  "On définit la fonction :" + bloc(code) + f"Que renvoie `{appel}` ?",
                  ["`def` définit la fonction ; l'appel remplace le paramètre par la valeur donnée, `return` renvoie le résultat.",
                   f"`{appel}` renvoie {_py(env['RES'])}."],
                  _py(env["RES"])))
    E.append(("intermediaire", "fonction",
              "On remplace `return 2 * x` par `print(2 * x)` dans une fonction `double`. Peut-on encore écrire `y = double(3) + 1` ?",
              ["`print` affiche la valeur mais ne la renvoie pas : la fonction ne renvoie rien d'utilisable.",
               "Le calcul `double(3) + 1` provoque une erreur : il faut `return`."],
              "Non : sans `return`, la fonction ne renvoie rien"))
    # c) listes : indices
    L0 = "notes = [12, 15, 8, 17, 9]"
    for expr in ["notes[0]", "notes[3]", "len(notes)", "notes[len(notes) - 1]", "notes[1] + notes[2]", "notes[4] - notes[0]"]:
        env, _ = executer(L0 + f"\nRES = {expr}")
        E.append(("application", "liste-indices",
                  f"On définit `{L0}`. Que vaut `{expr}` ?",
                  ["Les indices commencent à 0 : `notes[0]` est le premier élément, `notes[len(notes) - 1]` le dernier.",
                   f"`{expr}` vaut {_py(env['RES'])}."],
                  _py(env["RES"])))
    E.append(("intermediaire", "liste-indices",
              f"On définit `{L0}`. Que se passe-t-il si on demande `notes[5]` ?",
              ["La liste a 5 éléments, d'indices 0 à 4.", "L'indice 5 n'existe pas : Python affiche une erreur (indice hors de la liste)."],
              "Une erreur : l'indice 5 n'existe pas"))
    # d) construire une liste avec append
    Ap = [("L = []\nfor n in range(5):\n    L.append(2 * n)", "L"), ("L = []\nfor n in range(1, 6):\n    L.append(n * n)", "L"),
          ("L = []\nu = 3\nfor n in range(4):\n    L.append(u)\n    u = u + 5", "L"), ("L = []\nu = 1\nfor n in range(6):\n    L.append(u)\n    u = 2 * u", "L"),
          ("L = [10]\nfor k in range(3):\n    L.append(L[len(L) - 1] - 4)", "L"), ("L = []\nfor n in range(2, 12, 3):\n    L.append(n)", "L"),
          ("L = []\nfor n in range(4):\n    L.append(100 + 10 * n)", "L")]
    for code, var in Ap:
        env, _ = executer(code)
        E.append(("intermediaire", "liste-append",
                  "On exécute le programme :" + bloc(code) + f"Quel est le contenu final de la liste `{var}` ?",
                  ["`append(x)` ajoute `x` à la fin de la liste, à chaque tour de boucle.",
                   f"À la fin, `{var}` = {_py(env[var])} ({len(env[var])} éléments)."],
                  _py(env[var])))
    # e) parcours avec accumulateur
    Pa = [("L = [12, 15, 8, 17]\ntotal = 0\nfor x in L:\n    total = total + x", "total", "On additionne tous les éléments."),
          ("L = [3, 9, 2, 9, 5]\nmaxi = L[0]\nfor x in L:\n    if x > maxi:\n        maxi = x", "maxi", "On garde la plus grande valeur rencontrée."),
          ("L = [14, 9, 11, 16]\ntotal = 0\nfor x in L:\n    total = total + x\nm = total / len(L)", "m", "On calcule la somme puis on divise par le nombre d'éléments."),
          ("L = [4, 7, 1, 8, 2]\nmini = L[0]\nfor x in L:\n    if x < mini:\n        mini = x", "mini", "On garde la plus petite valeur rencontrée."),
          ("L = [2, 3, 4]\np = 1\nfor x in L:\n    p = p * x", "p", "On multiplie tous les éléments (accumulateur initialisé à 1)."),
          ("L = [5, 8, 2, 6]\ns = 0\nfor i in range(len(L)):\n    s = s + i * L[i]", "s", "On parcourt par les indices : on ajoute `i * L[i]`."),
          ("L = [12, 15, 8, 17]\nfor x in L:\n    total = 0\n    total = total + x", "total", "Attention : `total = 0` est DANS la boucle, il est remis à zéro à chaque tour."),
          ("L = [6, 1, 9, 4]\nc = 0\nfor x in L:\n    c = c + 1", "c", "On compte les éléments : c'est la longueur de la liste.")]
    for code, var, expl in Pa:
        env, _ = executer(code)
        E.append(("intermediaire" if "DANS" not in expl else "approfondissement", "parcours",
                  "On exécute le programme :" + bloc(code) + f"Que vaut `{var}` à la fin ?",
                  [expl, f"À la fin, `{var}` = {_py(env[var])}."],
                  f"`{var}` = {_py(env[var])}"))
    # f) sélection
    Se = [("notes = [12, 15, 8, 17, 9]\nbonnes = []\nfor note in notes:\n    if note >= 10:\n        bonnes.append(note)", "bonnes"),
          ("L = [4, 11, 7, 15, 9, 20]\nG = []\nfor x in L:\n    if x > 10:\n        G.append(x)", "G"),
          ("L = [3, 8, 6, 5, 12, 1]\nP = []\nfor x in L:\n    if x % 2 == 0:\n        P.append(x)", "P"),
          ("T = [18, 25, 31, 22, 27, 30]\nchauds = []\nfor t in T:\n    if t >= 25:\n        chauds.append(t)", "chauds"),
          ("L = [10, 10, 9, 11, 10]\nc = 0\nfor x in L:\n    if x == 10:\n        c = c + 1", "c"),
          ("rangs = []\nfor n in range(8):\n    if 50 * 2 ** n > 1000:\n        rangs.append(n)", "rangs"),
          ("L = [-3, 5, -1, 0, 8, -6]\nN = []\nfor x in L:\n    if x < 0:\n        N.append(x)", "N")]
    for code, var in Se:
        env, _ = executer(code)
        liste = isinstance(env[var], list)
        E.append(("approfondissement", "selection",
                  "On exécute le programme :" + bloc(code) + (f"Que contient `{var}` à la fin ?" if liste else f"Que vaut `{var}` à la fin ?"),
                  [("On parcourt les valeurs de `n` données par `range(8)` et on ne garde que celles qui rendent la condition vraie."
                    if "range" in code else
                    "On parcourt la liste et on ne garde que les valeurs qui rendent la condition vraie ; la liste de départ n'est pas modifiée."
                    if liste else
                    "On parcourt la liste et on compte les valeurs qui rendent la condition vraie ; la liste de départ n'est pas modifiée."),
                   f"À la fin, `{var}` = {_py(env[var])}."],
                  _py(env[var])))
    # g) problèmes
    Pb = [("Les températures maximales d'une semaine sont relevées dans une liste. On veut le nombre de jours où il a fait au moins 30 °C.",
           "T = [27, 31, 33, 29, 30, 26, 32]\nc = 0\nfor t in T:\n    if t >= 30:\n        c = c + 1", "c", "jours à 30 °C ou plus"),
          ("Une production vaut 8 000 pièces la première année et augmente de 600 pièces par an. On cherche au bout de combien d'années elle dépassera 11 000 pièces.",
           "u = 8000\nn = 0\nwhile u <= 11000:\n    u = u + 600\n    n = n + 1", "n", "ans"),
          ("Un capital de 1 000 € double tous les 10 ans. On construit la liste des valeurs tous les 10 ans pendant 40 ans.",
           "C = []\nv = 1000\nfor k in range(5):\n    C.append(v)\n    v = 2 * v", "C", "(valeurs en euros)"),
          ("On a relevé les dépenses d'un mois (en euros). On calcule le total des dépenses supérieures à 50 €.",
           "D = [35, 120, 48, 75, 60, 12]\ns = 0\nfor d in D:\n    if d > 50:\n        s = s + d", "s", "euros"),
          ("Une liste contient les nombres de visiteurs d'un musée sur 6 jours. On calcule la fréquentation moyenne.",
           "V = [320, 410, 280, 500, 390, 440]\ns = 0\nfor v in V:\n    s = s + v\nm = s / len(V)", "m", "visiteurs par jour"),
          ("On veut la liste des termes $u_0$ à $u_5$ de la suite arithmétique de premier terme 7 et de raison 4.",
           "def u(n):\n    return 7 + 4 * n\n\nL = []\nfor n in range(6):\n    L.append(u(n))", "L", ""),
          ("Une épargne commence à 200 € ; on ajoute 30 € chaque mois. On construit la liste des mois (numérotés à partir de 0) où l'épargne est d'au moins 300 €, parmi les 6 premiers mois.",
           "mois = []\nfor n in range(6):\n    if 200 + 30 * n >= 300:\n        mois.append(n)", "mois", "")]
    for ctx, code, var, unite in Pb:
        env, _ = executer(code)
        v = env[var]
        rep = _py(v) + ((" " + unite) if unite and not unite.startswith("(") else "")
        E.append(("probleme", "probleme-algorithme",
                  ctx + bloc(code) + f"Quelle est la valeur de `{var}` à la fin ?",
                  ["On exécute le programme ligne par ligne, en suivant la valeur des variables.",
                   f"À la fin, `{var}` = {_py(v)}" + (f" {unite}." if unite else ".")],
                  rep))
    return _fin(E)


# ======================================================================
# Tle techno — FONCTION INVERSE
# ======================================================================
def _abc(a, b, c):
    """ax + b + c/x écrit proprement."""
    t = poly([a, b]) if (a or b) else ""
    frac = f"\\dfrac{{{nb(abs(c))}}}{{x}}"
    if not t:
        return ("-" if c < 0 else "") + frac
    return f"{t} {'+' if c > 0 else '-'} {frac}"


def gt_inverse():
    E = []
    # a) images
    for c, x in [(1, F(1, 4)), (1, F(-5, 1)), (1, F(1, 100)), (6, F(-3, 2)), (10, F(4, 1)), (-2, F(1, 5)), (1, F(-1, 1000))]:
        v = F(c) / x
        e = f"\\dfrac{{1}}{{x}}" if c == 1 else f"\\dfrac{{{c}}}{{x}}"
        E.append(("application", "image",
                  f"Soit $f(x) = {e}$ pour $x \\neq 0$. Calculer $f({fx(x)})$.",
                  [f"$f({fx(x)}) = \\dfrac{{{c}}}{{{fx(x)}}} = {fx(v)}$."], f"$f({fx(x)}) = {fx(v)}$"))
    # b) comparaisons
    for a, b in [(F(23, 10), F(24, 10)), (F(-7), F(-2)), (F(1, 3), F(1, 2)), (F(999), F(1000)), (F(-1, 10), F(-1, 100)), (F(31, 10), F(31, 100))]:
        inter = "$]0\\,;+\\infty[$" if a > 0 else "$]-\\infty\\,;0[$"
        rel = ">" if 1 / a > 1 / b else "<"
        E.append(("application", "comparaison",
                  f"Sans calculatrice, comparer $\\dfrac{{1}}{{{fx(a)}}}$ et $\\dfrac{{1}}{{{fx(b)}}}$.",
                  [f"Les deux nombres sont dans {inter}, où la fonction inverse est décroissante : l'ordre est inversé.",
                   f"${fx(min(a, b))} < {fx(max(a, b))}$ donc $\\dfrac{{1}}{{{fx(min(a, b))}}} > \\dfrac{{1}}{{{fx(max(a, b))}}}$."],
                  f"$\\dfrac{{1}}{{{fx(a)}}} {rel} \\dfrac{{1}}{{{fx(b)}}}$"))
    E.append(("intermediaire", "comparaison",
              "Vrai ou faux : la fonction inverse est décroissante sur $]-\\infty\\,;0[ \\cup ]0\\,;+\\infty[$.",
              ["Faux : une variation s'énonce sur un intervalle.", "Contre-exemple : $-1 < 1$ mais $f(-1) = -1 < f(1) = 1$.",
               "Elle est décroissante sur $]-\\infty\\,;0[$ et décroissante sur $]0\\,;+\\infty[$, séparément."],
              "Faux"))
    # c) dérivées
    for a, b, c, x0 in [(2, 1, 8, 1), (1, 0, 4, 2), (3, -2, -6, 3), (0, 5, 9, 3), (F(1, 2), 3, 18, 2), (4, 0, 1, F(1, 2)), (-1, 7, 16, 4), (2, -5, 50, 5)]:
        d0 = a - F(c) / F(x0) ** 2
        E.append(("intermediaire", "derivee",
                  f"Soit $f(x) = {_abc(a, b, c)}$ pour $x \\neq 0$. Calculer $f'(x)$, puis $f'({fx(x0)})$.",
                  ["On dérive terme à terme : $(ax)' = a$, $(b)' = 0$ et $\\left(\\dfrac{c}{x}\\right)' = -\\dfrac{c}{x^2}$.",
                   f"$f'(x) = {fx(a) + ' ' if a else ''}{'-' if c > 0 else '+'} \\dfrac{{{nb(abs(c))}}}{{x^2}}$.".replace("$f'(x) = - ", "$f'(x) = -").replace("$f'(x) = + ", "$f'(x) = "),
                   f"$f'({fx(x0)}) = {fx(d0)}$."],
                  f"$f'({fx(x0)}) = {fx(d0)}$"))
    # d) étude complète sur ]0 ; +inf[
    for a, b, c in [(2, 1, 8), (1, 0, 9), (3, 2, 12), (F(1, 2), 1, 8), (5, -3, 20), (1, 4, 25), (2, 0, 50), (4, 1, 1)]:
        x0 = F(math.isqrt(int(F(c) / a * 100)), 10)
        assert a * x0 * x0 == c, (a, c)
        m = a * x0 + b + F(c) / x0
        E.append(("approfondissement", "etude-fonction",
                  f"Étudier les variations de $f(x) = {_abc(a, b, c)}$ sur $]0\\,;+\\infty[$ et donner son minimum.",
                  [f"$f'(x) = {fx(a)} - \\dfrac{{{nb(c)}}}{{x^2}} = \\dfrac{{{poly([a, 0, -c])}}}{{x^2}}$ ; comme $x^2 > 0$, $f'(x)$ a le signe de ${poly([a, 0, -c])}$.",
                   f"Sur $]0\\,;+\\infty[$, ${poly([a, 0, -c])} = 0 \\iff x = {fx(x0)}$ ; $f' < 0$ avant, $f' > 0$ après.",
                   f"$f$ est décroissante sur $]0\\,;{fx(x0)}]$, croissante sur $[{fx(x0)}\\,;+\\infty[$, et $f({fx(x0)}) = {fx(m)}$."],
                  f"Décroissante sur $]0\\,;{fx(x0)}]$, croissante sur $[{fx(x0)}\\,;+\\infty[$ ; minimum ${fx(m)}$ en $x = {fx(x0)}$"))
    # e) bornes et asymptotes
    B = [("Quelles sont les asymptotes de la courbe de la fonction inverse ?",
          ["Pour $x$ très grand (ou très négatif), $\\dfrac{1}{x}$ se rapproche de $0$ : asymptote horizontale $y = 0$.",
           "Pour $x$ proche de $0$, $\\dfrac{1}{x}$ devient très grand en valeur absolue : asymptote verticale $x = 0$."],
          "Les axes du repère : $y = 0$ et $x = 0$"),
         ("Calculer $\\dfrac{1}{x}$ pour $x = 0{,}001$ et $x = -0{,}001$. Que se passe-t-il près de $0$ ?",
          ["$\\dfrac{1}{0{,}001} = 1\\,000$ et $\\dfrac{1}{-0{,}001} = -1\\,000$.",
           "À droite de $0$, les valeurs deviennent très grandes ; à gauche, très négatives : la droite $x = 0$ est asymptote verticale."],
          "$1\\,000$ et $-1\\,000$"),
         ("Soit $f(x) = 2x + 1 + \\dfrac{8}{x}$. Calculer $f(100)$ et le comparer à $2 \\times 100 + 1$. Interpréter.",
          ["$f(100) = 201 + 0{,}08 = 201{,}08$.", "Pour $x$ grand, $\\dfrac{8}{x}$ devient négligeable : la courbe se rapproche de la droite $y = 2x + 1$."],
          "$f(100) = 201{,}08$, proche de $201$"),
         ("La courbe de la fonction inverse touche-t-elle l'axe des abscisses ?",
          ["$\\dfrac{1}{x}$ ne vaut jamais $0$ : la courbe se rapproche de l'axe sans jamais le toucher."], "Non, jamais"),
         ("Par quelle symétrie la courbe de la fonction inverse est-elle conservée ?",
          ["Les points $\\left(x\\,;\\dfrac{1}{x}\\right)$ et $\\left(-x\\,;-\\dfrac{1}{x}\\right)$ se correspondent.", "La courbe est symétrique par rapport à l'origine du repère."],
          "La symétrie de centre O"),
         ("Quel est le signe de $\\dfrac{1}{x}$ selon les valeurs de $x$ ?",
          ["$x$ et $\\dfrac{1}{x}$ ont toujours le même signe."], "Négatif pour $x < 0$, positif pour $x > 0$")]
    for e, c, r in B:
        E.append(("application", "asymptotes-bornes", e, c, r))
    # f) coût moyen
    for al, be, ga in [(F(1, 10), 5, 90), (F(1, 2), 10, 200), (2, 30, 800), (F(1, 5), 4, 125), (1, 20, 400), (F(1, 4), 6, 100), (5, 12, 320), (F(1, 2), 8, 72)]:
        q0 = F(math.isqrt(int(F(ga) / al * 100)), 10)
        assert al * q0 * q0 == ga
        cm = al * q0 + be + F(ga) / q0
        E.append(("probleme", "cout-moyen",
                  f"Le coût total de production de $x$ objets est $C(x) = {poly([al, be, ga])}$ euros ($x > 0$). Exprimer le coût moyen $C_M(x) = \\dfrac{{C(x)}}{{x}}$, puis déterminer la production qui le rend minimal et ce coût moyen minimal.",
                  [f"$C_M(x) = {_abc(al, be, ga)}$.",
                   f"$C_M'(x) = {fx(al)} - \\dfrac{{{nb(ga)}}}{{x^2}} = \\dfrac{{{poly([al, 0, -ga])}}}{{x^2}}$, qui s'annule pour $x = {fx(q0)}$ (avec $x > 0$).",
                   f"$C_M$ décroît puis croît : minimum $C_M({fx(q0)}) = {fx(cm)}$ €."],
                  f"$C_M(x) = {_abc(al, be, ga)}$ ; minimum ${fx(cm)}$ € pour $x = {fx(q0)}$"))
    # g) équations et signe
    G = [("\\dfrac{1}{x} = 5", "$x \\neq 0$ et $x = \\dfrac{1}{5} = 0{,}2$.", "$S = \\{0{,}2\\}$"),
         ("\\dfrac{1}{x} = -4", "$x = -\\dfrac{1}{4} = -0{,}25$.", "$S = \\{-0{,}25\\}$"),
         ("\\dfrac{1}{x} = 0", "Un inverse n'est jamais nul.", "$S = \\varnothing$"),
         ("2 + \\dfrac{6}{x} = 0", "$\\dfrac{6}{x} = -2$, donc $x = -3$ (et $x \\neq 0$).", "$S = \\{-3\\}$"),
         ("\\dfrac{3}{x} = x \\text{ avec } x > 0", "$x^2 = 3$ et $x > 0$, donc $x = \\sqrt{3}$.", "$S = \\{\\sqrt{3}\\}$"),
         ("x + \\dfrac{4}{x} = 4 \\text{ avec } x > 0", "En multipliant par $x \\neq 0$ : $x^2 - 4x + 4 = 0$, soit $(x - 2)^2 = 0$.", "$S = \\{2\\}$")]
    for eq, c, r in G:
        E.append(("intermediaire", "equation", f"Résoudre l'équation ${eq}$.", [c], r))
    return _fin(E)


# ======================================================================
# Tle techno — FONCTIONS EXPONENTIELLES x -> a^x
# ======================================================================
def _eq(v, d):
    """« = » si la valeur arrondie est exacte, « ≈ » sinon."""
    return "=" if abs(v - arr(v, d)) < 1e-9 else "\\approx"


def gt_exponentielles():
    E = []
    # a) propriétés algébriques
    A = [("2^x \\times 2^3", "2^{x+3}", "$a^x \\times a^y = a^{x+y}$."),
         ("\\dfrac{3^{x+2}}{3^x}", "9", "$\\dfrac{a^{x+2}}{a^x} = a^{x+2-x} = a^2$, donc $\\dfrac{3^{x+2}}{3^x} = 3^2 = 9$ : le quotient ne dépend pas de $x$."),
         ("\\left(5^x\\right)^3", "5^{3x}", "$\\left(a^x\\right)^n = a^{nx}$."),
         ("1{,}05^x \\times 1{,}05", "1{,}05^{x+1}", "$a^x \\times a^1 = a^{x+1}$."),
         ("\\dfrac{4^{2x}}{4^{x}}", "4^{x}", "$\\dfrac{a^{2x}}{a^x} = a^{2x - x} = a^x$."),
         ("7^{x} \\times 7^{-x}", "1", "$7^x \\times 7^{-x} = 7^0 = 1$."),
         ("\\dfrac{1}{2^{x}}", "2^{-x}", "$a^{-x} = \\dfrac{1}{a^x}$."),
         ("0{,}9^{x+2} \\div 0{,}9^{x}", "0{,}81", "$0{,}9^{x+2-x} = 0{,}9^2 = 0{,}81$."),
         ("\\left(9^{x}\\right)^{1/2}", "3^{x}", "$\\left(9^x\\right)^{1/2} = 9^{x/2} = \\left(9^{1/2}\\right)^x = 3^x$.")]
    for e, r, c in A:
        E.append(("application", "proprietes-algebriques", f"Simplifier ${e}$ (pour tout réel $x$).", [c], f"${r}$"))
    # b) sens de variation de k a^x
    for k, a in [(1, F(105, 100)), (1, F(85, 100)), (200, F(9, 10)), (-3, F(12, 10)), (5000, F(103, 100)), (-2, F(1, 2)), (F(1, 2), 3), (12000, F(85, 100))]:
        base = "croissante" if a > 1 else "décroissante"
        sens = base if k > 0 else ("décroissante" if a > 1 else "croissante")
        fk = "" if k == 1 else (f"{fx(k)} \\times " if k != -1 else "-")
        E.append(("application", "sens-de-variation",
                  f"Déterminer le sens de variation de la fonction $f(x) = {fk}{fx(a)}^x$ sur $\\mathbb{{R}}$.",
                  [f"La base ${fx(a)}$ est {'supérieure à 1' if a > 1 else 'comprise entre 0 et 1'} : $x \\mapsto {fx(a)}^x$ est {base}.",
                   (f"$k = {fx(k)} > 0$ ne change pas le sens de variation." if k > 0 else f"$k = {fx(k)} < 0$ inverse le sens de variation.") if k != 1 else "Aucun coefficient ne multiplie la puissance : $f$ a le même sens de variation."],
                  f"$f$ est {sens} sur $\\mathbb{{R}}$"))
    # c) calculs de puissances
    C = [("4^{1/2}", "2", "$4^{1/2} = \\sqrt{4} = 2$."), ("8^{1/3}", "2", "$2^3 = 8$, donc $8^{1/3} = 2$."),
         ("9^{1{,}5}", "27", "$9^{1{,}5} = 9^1 \\times 9^{0{,}5} = 9 \\times 3 = 27$."), ("16^{0{,}25}", "2", "$2^4 = 16$, donc $16^{1/4} = 2$."),
         ("27^{2/3}", "9", "$27^{1/3} = 3$, donc $27^{2/3} = 3^2 = 9$."), ("5^{0}", "1", "Pour tout $a > 0$, $a^0 = 1$."),
         ("2^{-3}", "0{,}125", "$2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8} = 0{,}125$.")]
    for e, r, c in C:
        E.append(("intermediaire", "calcul-puissances", f"Calculer ${e}$ sans calculatrice.", [c], f"${r}$"))
    # d) taux moyen
    T = [(F(144, 100), 2, "Un loyer augmente de 44 % en 2 ans."), (F(729, 1000), 3, "Les ventes d'un produit baissent de 27,1 % en 3 ans."),
         (F(121, 100), 2, "Une population augmente de 21 % en 2 ans."), (F(64, 100), 2, "La valeur d'une voiture baisse de 36 % en 2 ans."),
         (F(1331, 1000), 3, "Un chiffre d'affaires augmente de 33,1 % en 3 ans."), (F(150, 100), 4, "Un prix augmente de 50 % en 4 ans."),
         (F(80, 100), 5, "Un stock diminue de 20 % en 5 ans."), (F(2), 10, "Un capital double en 10 ans.")]
    for C, n, ctx in T:
        cm = float(C) ** (1 / n)
        t = (cm - 1) * 100
        exact = abs(round(cm, 6) - cm) < 1e-12 and abs(cm * 100 - round(cm * 100)) < 1e-9
        tm = nb(t, 0 if exact else 2)
        E.append(("approfondissement" if not exact else "intermediaire", "taux-moyen",
                  f"{ctx} Calculer le taux d'évolution annuel moyen{'' if exact else ' (arrondi à 0,01 %)'}.",
                  [f"Coefficient global : $C = {fx(C)}$.",
                   f"Coefficient moyen : $c_m = {fx(C)}^{{1/{n}}} {'=' if exact else chr(92) + 'approx'} {nb(cm, 2 if exact else 5)}$.",
                   f"Taux moyen : $t_m = c_m - 1 {'=' if exact else chr(92) + 'approx'} {tm}\\,\\%$ par an."],
                  f"${'' if exact else chr(92) + 'approx '}{'+' if t > 0 else ''}{tm}\\,\\%$ par an"))
    # e) modélisation
    M = [(5000, 3, 10, "Un capital de 5 000 € est placé à 3 % par an.", "€", 2),
         (12000, -15, 5, "Une machine de 12 000 € perd 15 % de sa valeur par an.", "€", 2),
         (2000, 100, 6, "Une population de 2 000 bactéries double chaque heure.", "bactéries", 0),
         (800, 4, 8, "Le nombre d'abonnés d'un club, 800 au départ, augmente de 4 % par an.", "abonnés", 0),
         (250, -8, 6, "Un médicament : la quantité dans le sang, 250 mg au départ, diminue de 8 % par heure.", "mg", 1),
         (1500, 2, 15, "Une épargne de 1 500 € rapporte 2 % par an.", "€", 2),
         (300, -10, 4, "Un lac compte 300 truites ; la population baisse de 10 % par an.", "truites", 0),
         (20000, 5, 3, "Le prix d'un terrain, 20 000 €, augmente de 5 % par an.", "€", 2)]
    for k, t, x, ctx, u, d in M:
        a = 1 + F(t, 100)
        v = k * float(a) ** x
        E.append(("probleme", "modelisation",
                  f"{ctx} On modélise par $f(x) = k \\times a^x$, $x$ en {'heures' if 'heure' in ctx else 'années'}. Donner $k$ et $a$, puis calculer $f({x})$ (arrondir {'à l’unité' if d == 0 else 'au dixième' if d == 1 else 'au centime'}).".replace("’", "'"),
                  [f"$k = {nb(k)}$ (valeur initiale) et $a = 1 {'+' if t > 0 else '-'} {fx(F(abs(t), 100))} = {fx(a)}$.",
                   f"$f({x}) = {nb(k)} \\times {fx(a)}^{{{x}}} {_eq(v, d)} {nb(v, d, d > 0)}$."],
                  f"$f(x) = {nb(k)} \\times {fx(a)}^x$ ; $f({x}) {_eq(v, d)} {nb(v, d, d > 0)}$ {u}"))
    # f) exposants non entiers
    for k, a, x, ctx, d, u in [(5000, F(103, 100), F(1, 2), "Un capital vaut $C(x) = 5\\,000 \\times 1{,}03^x$ euros au bout de $x$ années. Calculer sa valeur au bout de 6 mois", 2, "€"),
                               (12000, F(85, 100), F(5, 2), "Une machine vaut $V(x) = 12\\,000 \\times 0{,}85^x$ euros au bout de $x$ années. Calculer sa valeur au bout de 2 ans et demi", 2, "€"),
                               (100, 2, F(3, 2), "Une population de bactéries compte $N(x) = 100 \\times 2^x$ individus au bout de $x$ heures. Calculer la population au bout d'1 h 30", 0, "bactéries"),
                               (4000, F(105, 100), F(1, 4), "Un capital vaut $C(x) = 4\\,000 \\times 1{,}05^x$ euros au bout de $x$ années. Calculer sa valeur au bout de 3 mois", 2, "€"),
                               (60, F(9, 10), F(7, 2), "L'écart de température entre un café et la pièce vaut $T(x) = 60 \\times 0{,}9^x$ (en °C) au bout de $x$ minutes. Calculer cet écart au bout de 3,5 minutes", 1, "°C")]:
        v = k * float(a) ** float(x)
        E.append(("intermediaire", "exposant-reel",
                  f"{ctx} (arrondir {'à l unité' if d == 0 else 'au dixième' if d == 1 else 'au centime'}).".replace("l unité", "l'unité"),
                  ["La fonction exponentielle prolonge la suite géométrique aux exposants non entiers.",
                   f"On calcule ${nb(k)} \\times {fx(a)}^{{{fx(x)}}} \\approx {nb(v, d, d > 0)}$."],
                  f"Environ ${nb(v, d, d > 0)}$ {u}"))
    # g) vrai ou faux
    V = [("Vrai ou faux : $2^{1+2} = 2^1 + 2^2$.", ["Faux : $2^{1+2} = 2^3 = 8$ alors que $2^1 + 2^2 = 6$.", "C'est le produit qui convient : $a^{x+y} = a^x \\times a^y$."], "Faux"),
         ("Vrai ou faux : une valeur qui perd 15 % par an devient nulle au bout d'un certain temps.", ["Faux : $0{,}85^x > 0$ pour tout $x$ ; une exponentielle ne s'annule jamais."], "Faux"),
         ("Vrai ou faux : perdre 15 % par an pendant 5 ans revient à perdre 75 %.", ["Faux : le coefficient global est $0{,}85^5 \\approx 0{,}444$, soit une baisse d'environ $55{,}6\\,\\%$."], "Faux"),
         ("Par quel point passent toutes les courbes d'équation $y = a^x$ ($a > 0$) ?", ["Pour tout $a > 0$, $a^0 = 1$."], "Le point $(0\\,;1)$"),
         ("Soit $N(x) = k \\times a^x$. Exprimer $N(x + 1)$ en fonction de $N(x)$ et interpréter.",
          ["$N(x + 1) = k \\times a^{x+1} = a \\times k \\times a^x = a \\times N(x)$.", "D'une unité de temps à la suivante, la quantité est multipliée par $a$, comme une suite géométrique de raison $a$."],
          "$N(x + 1) = a \\times N(x)$")]
    for e, c, r in V:
        E.append(("intermediaire", "cours", e, c, r))
    return _fin(E)


# ======================================================================
# Tle techno — LOGARITHME DÉCIMAL
# ======================================================================
def gt_log():
    E = []
    # a) puissances de 10
    for b, n in [("1\\,000", 3), ("0{,}01", -2), ("1", 0), ("10^{7}", 7), ("0{,}0001", -4), ("100\\,000", 5), ("\\sqrt{10}", F(1, 2)), ("\\dfrac{1}{1\\,000}", -3)]:
        c = f"$10^{{{fx(n)}}} = {b}$, donc $\\log({b}) = {fx(n)}$." if "10^" not in b else f"$\\log(10^n) = n$."
        E.append(("application", "puissances-de-10", f"Calculer $\\log({b})$ sans calculatrice.",
                  ["$\\log(b)$ répond à la question : « 10 puissance combien donne $b$ ? »", c], f"${fx(n)}$"))
    # b) propriétés : exprimer avec log 2 et log 3
    L2, L3 = math.log10(2), math.log10(3)
    P = [("200", "\\log 2 + 2", L2 + 2, "$200 = 2 \\times 100$, donc $\\log 200 = \\log 2 + \\log 100$."),
         ("50", "2 - \\log 2", 2 - L2, "$50 = \\dfrac{100}{2}$, donc $\\log 50 = \\log 100 - \\log 2$."),
         ("8", "3\\log 2", 3 * L2, "$8 = 2^3$, donc $\\log 8 = 3\\log 2$."),
         ("12", "2\\log 2 + \\log 3", 2 * L2 + L3, "$12 = 2^2 \\times 3$."),
         ("0{,}5", "-\\log 2", -L2, "$0{,}5 = \\dfrac{1}{2}$, donc $\\log 0{,}5 = -\\log 2$."),
         ("18", "\\log 2 + 2\\log 3", L2 + 2 * L3, "$18 = 2 \\times 3^2$."),
         ("4 \\times 10^5", "2\\log 2 + 5", 2 * L2 + 5, "$\\log(4 \\times 10^5) = \\log(2^2) + \\log(10^5)$."),
         ("\\sqrt{3}", "\\dfrac{1}{2}\\log 3", L3 / 2, "$\\sqrt{3} = 3^{1/2}$."),
         ("0{,}06", "\\log 2 + \\log 3 - 2", L2 + L3 - 2, "$0{,}06 = \\dfrac{2 \\times 3}{100}$.")]
    for b, expr, val, c in P:
        E.append(("intermediaire", "proprietes",
                  f"Exprimer $\\log({b})$ en fonction de $\\log 2$ et/ou $\\log 3$, puis en donner une valeur approchée au millième (on prend $\\log 2 \\approx 0{{,}}301\\,03$ et $\\log 3 \\approx 0{{,}}477\\,12$).",
                  ["On utilise $\\log(ab) = \\log a + \\log b$, $\\log\\dfrac{a}{b} = \\log a - \\log b$ et $\\log(a^n) = n\\log a$.", c,
                   f"$\\log({b}) = {expr} \\approx {nb(val, 3)}$."],
                  f"${expr} \\approx {nb(val, 3)}$"))
    # c) regrouper
    R = [("\\log 50 + \\log 2", "\\log 100 = 2", "2"), ("3\\log 2 - \\log 4", "\\log\\dfrac{8}{4} = \\log 2", "\\log 2"),
         ("\\log 25 + \\log 4", "\\log 100 = 2", "2"), ("\\log 5\\,000 - \\log 5", "\\log 1\\,000 = 3", "3"),
         ("2\\log 5 + 2\\log 2", "\\log(25 \\times 4) = \\log 100 = 2", "2"), ("\\log 0{,}2 + \\log 5", "\\log 1 = 0", "0")]
    for e, c, r in R:
        E.append(("intermediaire", "regrouper", f"Écrire ${e}$ sous la forme la plus simple possible, sans calculatrice.",
                  ["On rassemble en un seul logarithme avec $\\log a + \\log b = \\log(ab)$ et $\\log a - \\log b = \\log\\dfrac{a}{b}$.", f"${e} = {c}$."],
                  f"${r}$"))
    # d) équations a^x = b
    for a, b in [(F(104, 100), 2), (F(85, 100), F(1, 2)), (3, 50), (F(12, 10), 10), (2, 1000), (F(9, 10), F(1, 4)), (5, 2), (F(102, 100), F(15, 10))]:
        x = math.log10(float(b)) / math.log10(float(a))
        E.append(("approfondissement", "equation-exponentielle",
                  f"Résoudre l'équation ${fx(a)}^x = {fx(b)}$ (valeur arrondie au centième).",
                  ["On prend le log des deux membres (strictement positifs) : $x\\log(" + fx(a) + ") = \\log(" + fx(b) + ")$.",
                   f"$x = \\dfrac{{\\log({fx(b)})}}{{\\log({fx(a)})}} \\approx {nb(x, 2)}$."],
                  f"$x \\approx {nb(x, 2)}$"))
    # e) signe et existence
    S = [("\\log(0{,}3)", "négatif, car $0 < 0{,}3 < 1$", "Négatif"), ("\\log(25)", "positif, car $25 > 1$", "Positif"),
         ("\\log(-4)", "non défini : le logarithme n'existe que pour un nombre strictement positif", "Il n'existe pas"),
         ("\\log(1)", "nul, car $10^0 = 1$", "Nul")]
    for e, c, r in S:
        E.append(("application", "signe-existence", f"Quel est le signe de ${e}$ ?", [f"${e}$ est {c}."], r))
    E.append(("application", "signe-existence", "Sans calculatrice, comparer $\\log 7$ et $\\log 20$.",
              ["La fonction $\\log$ est strictement croissante sur $]0\\,;+\\infty[$.", "$7 < 20$, donc $\\log 7 < \\log 20$."], "$\\log 7 < \\log 20$"))
    E.append(("application", "signe-existence", "L'équation $10^x = -5$ a-t-elle une solution ?",
              ["$10^x > 0$ pour tout réel $x$.", "Elle n'a donc aucune solution."], "Non, aucune solution"))
    # f) pH, décibels, magnitude
    for c, e in [(F(2), -4), (F(5), -3), (F(1), -7), (F(25, 10), -2)]:
        val = -(math.log10(float(c)) + e)
        conc = f"{fx(c)} \\times 10^{{{e}}}" if c != 1 else f"10^{{{e}}}"
        E.append(("probleme", "applications",
                  f"Une solution a une concentration $[\\mathrm{{H_3O^+}}] = {conc}$ mol/L. Calculer son pH, avec $\\mathrm{{pH}} = -\\log[\\mathrm{{H_3O^+}}]$ (arrondir au dixième).",
                  [f"$\\mathrm{{pH}} = -\\log({conc}) = -(\\log {fx(c)} {sg(e)})$." if c != 1 else f"$\\mathrm{{pH}} = -\\log(10^{{{e}}}) = {-e}$.",
                   f"$\\mathrm{{pH}} \\approx {nb(val, 1)}$." if c != 1 else "La solution est neutre."],
                  f"$\\mathrm{{pH}} \\approx {nb(val, 1)}$" if c != 1 else f"$\\mathrm{{pH}} = {-e}$"))
    E.append(("probleme", "applications",
              "Le niveau sonore est $L = 10\\log\\dfrac{I}{I_0}$ (en dB). De combien augmente-t-il quand l'intensité $I$ double ?",
              ["$L' = 10\\log\\dfrac{2I}{I_0} = 10\\log 2 + 10\\log\\dfrac{I}{I_0} = L + 10\\log 2$.", "$10\\log 2 \\approx 3{,}0$ dB."],
              "D'environ $3$ dB"))
    E.append(("probleme", "applications",
              "Le niveau sonore est $L = 10\\log\\dfrac{I}{I_0}$ (en dB). De combien augmente-t-il quand l'intensité est multipliée par 100 ?",
              ["$L' = 10\\log\\dfrac{100 I}{I_0} = 10\\log 100 + L = L + 20$."], "De $20$ dB"))
    E.append(("probleme", "applications",
              "La magnitude d'un séisme est $M = \\log\\dfrac{A}{A_0}$. Un séisme de magnitude 6 a une amplitude combien de fois plus grande qu'un séisme de magnitude 4 ?",
              ["$+1$ en magnitude correspond à une amplitude multipliée par $10$.", "De 4 à 6 : $10^2 = 100$."], "$100$ fois"))
    E.append(("probleme", "applications",
              "Le pH d'une solution passe de 3 à 5. Par combien sa concentration en ions $\\mathrm{H_3O^+}$ a-t-elle été divisée ?",
              ["$[\\mathrm{H_3O^+}] = 10^{-\\mathrm{pH}}$ : on passe de $10^{-3}$ à $10^{-5}$ mol/L.", "La concentration est divisée par $10^2 = 100$."], "Par $100$"))
    # g) doublement / seuils
    for t in (4, 3, 7, 2, 10):
        a = 1 + t / 100
        x = math.log10(2) / math.log10(a)
        n = math.ceil(x)
        E.append(("probleme", "doublement",
                  f"Un capital est placé à intérêts composés au taux de ${t}\\,\\%$ par an. Au bout de combien d'années entières aura-t-il doublé ?",
                  [f"On résout ${nb(a, 2)}^x = 2$ : $x = \\dfrac{{\\log 2}}{{\\log {nb(a, 2)}}} \\approx {nb(x, 3)}$.",
                   f"Au bout de ${n - 1}$ ans le capital n'a pas encore doublé : on arrondit à l'année supérieure."],
                  f"Au bout de ${n}$ ans"))
    return _fin(E)


# ======================================================================
# Tle techno — VOCABULAIRE ENSEMBLISTE ET LOGIQUE
# ======================================================================
def _ens(s):
    s = sorted(s)
    return "\\varnothing" if not s else "\\{" + "\\,;".join(nb(x) for x in s) + "\\}"


def _lon(t):
    return "l'" + t if t.startswith("on ") else t


def gt_logique():
    E = []
    # a) appartenance et inclusion (vrai/faux)
    AI = [("2 \\in \\{1\\,;2\\,;3\\}", True, "$2$ est un élément de l'ensemble."),
          ("2 \\subset \\{1\\,;2\\,;3\\}", False, "$\\subset$ relie deux ensembles : il faudrait écrire $\\{2\\} \\subset \\{1\\,;2\\,;3\\}$ ou $2 \\in \\{1\\,;2\\,;3\\}$."),
          ("\\{2\\} \\in \\{1\\,;2\\,;3\\}", False, "$\\{2\\}$ est un ensemble, pas un élément de $\\{1\\,;2\\,;3\\}$ : il faut $\\subset$."),
          ("\\{1\\,;3\\} \\subset \\{1\\,;2\\,;3\\}", True, "Tous les éléments de $\\{1\\,;3\\}$ sont dans $\\{1\\,;2\\,;3\\}$."),
          ("\\{1\\,;4\\} \\subset \\{1\\,;2\\,;3\\}", False, "$4$ n'appartient pas à $\\{1\\,;2\\,;3\\}$."),
          ("\\{3\\,;1\\,;2\\} = \\{1\\,;2\\,;3\\}", True, "L'ordre des éléments ne compte pas dans un ensemble."),
          ("-5 \\in \\mathbb{N}", False, "$\\mathbb{N}$ ne contient que les entiers positifs ou nuls."),
          ("\\mathbb{N} \\subset \\mathbb{Z}", True, "Tout entier naturel est un entier relatif.")]
    for e, v, c in AI:
        E.append(("application", "appartenance-inclusion", f"Vrai ou faux : ${e}$.", [c], "Vrai" if v else "Faux"))
    # b) réunion et intersection
    U = list(range(1, 13))
    for A, B in [({2, 4, 6, 8}, {1, 2, 3, 4}), ({1, 3, 5, 7, 9}, {3, 6, 9, 12}), ({5, 10}, {1, 2, 3}), ({2, 3, 5, 7, 11}, {1, 3, 5, 7, 9, 11}),
                 ({4, 8, 12}, {2, 4, 6, 8, 10, 12}), ({1, 2, 3, 4, 5}, {4, 5, 6, 7}), ({6, 12}, {3, 6, 9, 12}), ({10, 11, 12}, {1, 11})]:
        E.append(("application", "reunion-intersection",
                  f"On donne $A = {_ens(A)}$ et $B = {_ens(B)}$. Déterminer $A \\cap B$ et $A \\cup B$.",
                  ["$A \\cap B$ contient les éléments qui sont dans $A$ **et** dans $B$ ; $A \\cup B$ ceux qui sont dans $A$ **ou** dans $B$.",
                   f"$A \\cap B = {_ens(A & B)}$ et $A \\cup B = {_ens(A | B)}$."],
                  f"$A \\cap B = {_ens(A & B)}$ ; $A \\cup B = {_ens(A | B)}$"))
    # c) complémentaire
    for A, Ecomp, desc in [({2, 4, 6}, set(range(1, 7)), "$E = \\{1\\,;2\\,;3\\,;4\\,;5\\,;6\\}$ (faces d'un dé)"),
                           ({1, 2, 3, 4, 5, 6, 7}, set(range(1, 11)), "$E = \\{1\\,;2\\,;\\ldots\\,;10\\}$"),
                           ({0, 5, 10}, set(range(0, 11)), "$E = \\{0\\,;1\\,;\\ldots\\,;10\\}$"),
                           ({3, 6, 9, 12}, set(range(1, 13)), "$E = \\{1\\,;2\\,;\\ldots\\,;12\\}$"),
                           ({1}, set(range(1, 7)), "$E = \\{1\\,;2\\,;3\\,;4\\,;5\\,;6\\}$")]:
        comp = Ecomp - A
        E.append(("application", "complementaire",
                  f"Dans l'ensemble {desc}, on considère $A = {_ens(A)}$. Déterminer le complémentaire $\\bar{{A}}$ de $A$ dans $E$.",
                  ["$\\bar{A}$ contient les éléments de $E$ qui ne sont pas dans $A$.", f"$\\bar{{A}} = {_ens(comp)}$."],
                  f"$\\bar{{A}} = {_ens(comp)}$"))
    E.append(("intermediaire", "complementaire", "Que valent $A \\cap \\bar{A}$ et $A \\cup \\bar{A}$ pour une partie $A$ d'un ensemble $E$ ?",
              ["Un élément de $E$ est soit dans $A$, soit dans $\\bar{A}$, jamais dans les deux."], "$A \\cap \\bar{A} = \\varnothing$ et $A \\cup \\bar{A} = E$"))
    # d) cardinaux (problèmes)
    for tot, a, b, ab, na, nb_ in [(30, 18, 12, 5, "font du football", "font du tennis"), (120, 70, 45, 20, "ont un chat", "ont un chien"),
                                   (200, 110, 95, 40, "lisent le journal", "écoutent la radio"), (35, 20, 25, 12, "prennent l'option arts", "prennent l'option musique"),
                                   (500, 320, 260, 150, "ont un vélo", "ont une trottinette"), (60, 25, 30, 10, "parlent anglais", "parlent espagnol")]:
        un = a + b - ab
        E.append(("probleme", "cardinal",
                  f"Dans un groupe de ${tot}$ personnes, ${a}$ {na}, ${b}$ {nb_} et ${ab}$ sont dans les deux cas. Combien de personnes sont dans au moins l'un des deux cas ? Combien ne sont dans aucun des deux ?",
                  ["On note $A$ et $B$ les deux ensembles : $\\mathrm{card}(A \\cup B) = \\mathrm{card}(A) + \\mathrm{card}(B) - \\mathrm{card}(A \\cap B)$.",
                   f"${a} + {b} - {ab} = {un}$ personnes sont dans $A \\cup B$.",
                   f"Les autres : ${tot} - {un} = {tot - un}$ personnes."],
                  f"${un}$ personnes ; ${tot - un}$ dans aucun des deux cas"))
    # e) couples et produit cartésien
    for n, p, ctx in [(3, 4, "un menu propose 3 entrées et 4 plats"), (2, 5, "on choisit un pantalon parmi 2 et un tee-shirt parmi 5"),
                      (6, 6, "on lance un dé rouge puis un dé bleu"), (26, 10, "un code est formé d'une lettre puis d'un chiffre")]:
        E.append(("intermediaire", "produit-cartesien",
                  f"Si {_lon(ctx)}, combien de couples (choix possibles) obtient-on ?",
                  ["Les choix forment le produit cartésien $A \\times B$.", f"$\\mathrm{{card}}(A \\times B) = {n} \\times {p} = {n * p}$."],
                  f"${n * p}$"))
    E.append(("intermediaire", "produit-cartesien", "On donne $A = \\{1\\,;2\\}$ et $B = \\{a\\,;b\\,;c\\}$. Écrire tous les éléments de $A \\times B$.",
              ["Un élément de $A \\times B$ est un couple (élément de $A$ ; élément de $B$).", "Il y en a $2 \\times 3 = 6$."],
              "$(1\\,;a), (1\\,;b), (1\\,;c), (2\\,;a), (2\\,;b), (2\\,;c)$"))
    E.append(("intermediaire", "produit-cartesien", "Vrai ou faux : $(1\\,;2) = (2\\,;1)$.",
              ["Faux : dans un couple, l'ordre compte (alors que $\\{1\\,;2\\} = \\{2\\,;1\\}$)."], "Faux"))
    # f) connecteurs « et », « ou »
    PQ = [("« $12$ est pair et $12 > 20$ »", "et", True, False), ("« $12$ est pair ou $12 > 20$ »", "ou", True, False),
          ("« $7 < 3$ ou $7$ est impair »", "ou", False, True), ("« $5^2 = 25$ et $\\sqrt{9} = 3$ »", "et", True, True),
          ("« $0 > 1$ ou $-1 > 0$ »", "ou", False, False), ("« $10$ est un multiple de $5$ ou $10$ est pair »", "ou", True, True)]
    for e, conn, p, q in PQ:
        v = (p and q) if conn == "et" else (p or q)
        E.append(("intermediaire", "connecteurs",
                  f"La proposition {e} est-elle vraie ou fausse ?",
                  [f"Première proposition : {'vraie' if p else 'fausse'} ; seconde : {'vraie' if q else 'fausse'}.",
                   "« et » est vrai seulement si les deux le sont." if conn == "et" else "« ou » (inclusif) est vrai dès qu'au moins une des deux l'est."],
                  "Vraie" if v else "Fausse"))
    # g) réciproque, condition nécessaire / suffisante
    RC = [("« Si un nombre est un multiple de 4, alors il est pair. » Énoncer la réciproque. Est-elle vraie ?",
           ["Réciproque : « Si un nombre est pair, alors il est un multiple de 4. »", "Elle est fausse : $6$ est pair mais n'est pas un multiple de $4$."],
           "Réciproque fausse (contre-exemple : $6$)"),
          ("« Si $x = 3$, alors $x^2 = 9$. » La réciproque est-elle vraie ?",
           ["Réciproque : « Si $x^2 = 9$, alors $x = 3$. »", "Fausse : $x = -3$ vérifie $x^2 = 9$."], "Non (contre-exemple : $-3$)"),
          ("« Si un quadrilatère est un carré, alors c'est un rectangle. » Pour un quadrilatère, « être un rectangle » est-il une condition nécessaire ou suffisante pour « être un carré » ?",
           ["Dans « si P alors Q », Q est une condition nécessaire pour P.", "Être un rectangle est nécessaire pour être un carré, mais pas suffisant."],
           "Condition nécessaire (non suffisante)"),
          ("« Avoir 18 ans ou plus » est-il une condition nécessaire ou suffisante pour « voter en France » (pour un citoyen français) ?",
           ["Pour voter, il faut avoir au moins 18 ans : la condition est exigée.", "Mais il faut aussi être inscrit sur les listes : elle ne suffit pas."],
           "Condition nécessaire (non suffisante)"),
          ("« Si $n$ est un multiple de 6, alors $n$ est un multiple de 3. » Pour un entier $n$, « être multiple de 6 » est-il une condition nécessaire ou suffisante pour « être multiple de 3 » ?",
           ["L'hypothèse d'une implication vraie est une condition suffisante.", "Être multiple de 6 suffit, mais n'est pas nécessaire : $9$ est multiple de 3 sans l'être de 6."],
           "Condition suffisante (non nécessaire)"),
          ("Quand dit-on que deux propositions P et Q sont équivalentes ?",
           ["Quand « si P alors Q » et sa réciproque « si Q alors P » sont toutes les deux vraies.", "On écrit « P si et seulement si Q »."],
           "Quand l'implication et sa réciproque sont vraies")]
    for e, c, r in RC:
        E.append(("approfondissement", "reciproque-condition", e, c, r))
    # h) contre-exemples et statut de l'égalité
    CE = [("« Pour tout réel $x$, $x^2 > x$. » Vrai ou faux ?", ["Contre-exemple : $x = 0{,}5$ donne $x^2 = 0{,}25 < 0{,}5$."], "Faux ($x = 0{,}5$)"),
          ("« Pour tout réel $x$, $(x + 1)^2 = x^2 + 1$. » Vrai ou faux ?", ["Contre-exemple : $x = 1$ donne $4 \\neq 2$.", "La bonne identité est $(x + 1)^2 = x^2 + 2x + 1$."], "Faux ($x = 1$)"),
          ("On a vérifié une propriété « pour tout entier $n$ » sur les 100 premiers entiers. Est-elle démontrée ?",
           ["Non : des exemples, même nombreux, ne prouvent pas une proposition universelle.", "Il faut un raisonnement général."], "Non"),
          ("L'égalité $(x+1)^2 = x^2 + 2x + 1$ est-elle une identité ou une équation ? Et $x^2 = 9$ ?",
           ["$(x+1)^2 = x^2 + 2x + 1$ est vraie pour tout $x$ : c'est une identité.", "$x^2 = 9$ n'est vraie que pour $x = 3$ ou $x = -3$ : c'est une équation."],
           "Identité ; équation")]
    for e, c, r in CE:
        E.append(("intermediaire", "contre-exemple", e, c, r))
    return _fin(E)


# ======================================================================
# Tle techno — STATISTIQUES À DEUX VARIABLES (changement de variable)
# ======================================================================
def gt_stats2():
    E = []
    lg = math.log10
    # a) calcul de la nouvelle variable
    for y, kind in [(250, "log"), (1800, "log"), (35, "log"), (12000, "log"), (F(4), "inv"), (F(25, 10), "inv"), (F(3, 2), "car"), (12, "car")]:
        if kind == "log":
            z = lg(float(y))
            E.append(("application", "nouvelle-variable", f"On pose $z = \\log(y)$. Calculer $z$ pour $y = {nb(y)}$ (arrondir au centième).",
                      [f"$z = \\log({nb(y)}) \\approx {nb(z, 4)}$."], f"$z \\approx {nb(z, 2, True)}$"))
        elif kind == "inv":
            z = 1 / F(y)
            E.append(("application", "nouvelle-variable", f"On pose $z = \\dfrac{{1}}{{y}}$. Calculer $z$ pour $y = {fx(y)}$.",
                      [f"$z = \\dfrac{{1}}{{{fx(y)}}} = {fx(z)}$."], f"$z = {fx(z)}$"))
        else:
            z = F(y) ** 2
            E.append(("application", "nouvelle-variable", f"On pose $z = y^2$. Calculer $z$ pour $y = {fx(y)}$.",
                      [f"$z = {fx(y)}^2 = {fx(z)}$."], f"$z = {fx(z)}$"))
    # b) retour à y (modèle exponentiel)
    for a, b, x, ctx, d in [(F(175, 1000), F(33, 10), 6, "le nombre d'abonnés d'un service ($x$ en années)", 0),
                            (F(4, 100), F(2, 1), 10, "le nombre de visiteurs d'un site ($x$ en semaines)", 0),
                            (F(-12, 100), F(3, 1), 5, "le nombre de pièces encore en stock ($x$ en mois)", 0),
                            (F(3, 100), F(15, 10), 8, "la population d'une colonie ($x$ en jours)", 0),
                            (F(25, 1000), F(42, 10), 4, "le chiffre d'affaires en euros ($x$ en années)", 0),
                            (F(-5, 100), F(12, 10), 3, "la concentration d'un produit en mg/L ($x$ en heures)", 2),
                            (F(1, 10), F(1, 1), 7, "le nombre de bactéries en milliers ($x$ en heures)", 1),
                            (F(2, 100), F(5, 2), 12, "le nombre de licenciés d'une fédération ($x$ en années)", 0)]:
        y = 10 ** float(a * x + b)
        E.append(("intermediaire", "retour-a-y",
                  f"Pour étudier {ctx}, on a posé $z = \\log(y)$ et obtenu l'ajustement $z = {affine(a, b)}$. Exprimer $y$ en fonction de $x$, puis estimer $y$ pour $x = {x}$ (arrondir {'à l unité' if d == 0 else 'au dixième' if d == 1 else 'au centième'}).".replace("l unité", "l'unité"),
                  ["$z = \\log(y) \\iff y = 10^z$.", f"$y = 10^{{{affine(a, b)}}}$.",
                   f"Pour $x = {x}$ : $z = {fx(a * x + b)}$, donc $y = 10^{{{fx(a * x + b)}}} \\approx {nb(y, d)}$."],
                  f"$y = 10^{{{affine(a, b)}}}$ ; $y \\approx {nb(y, d)}$"))
    # c) taux caché dans la pente
    for a in [F(175, 1000), F(4, 100), F(-12, 100), F(3, 100), F(1, 10), F(-5, 100), F(2, 100)]:
        q = 10 ** float(a)
        t = (q - 1) * 100
        E.append(("approfondissement", "taux-pente",
                  f"Avec $z = \\log(y)$, l'ajustement a pour pente $a = {fx(a)}$. Par combien $y$ est-il multiplié quand $x$ augmente de 1 ? En déduire le taux d'évolution (arrondi à 0,1 %).",
                  ["$y = 10^{ax + b}$, donc passer de $x$ à $x + 1$ multiplie $y$ par $10^a$.",
                   f"$10^{{{fx(a)}}} \\approx {nb(q, 4)}$, soit un taux de ${nb(t, 1)}\\,\\%$."],
                  f"$\\times {nb(q, 3)}$ environ ; taux $\\approx {'+' if t > 0 else ''}{nb(t, 1)}\\,\\%$"))
    # d) reconnaître le modèle
    for ys in [[3, 7, 11, 15, 19], [5, 10, 20, 40, 80], [200, 180, 162, F(1458, 10), F(13122, 100)], [2, 5, 10, 17, 26],
               [100, 92, 84, 76, 68], [1, 3, 9, 27, 81], [10, 12, 15, 19, 24]]:
        ys = [F(v) for v in ys]
        d = [ys[i + 1] - ys[i] for i in range(4)]
        q = [ys[i + 1] / ys[i] for i in range(4)]
        if len(set(d)) == 1:
            r = f"Modèle affine (différences constantes égales à ${fx(d[0])}$)"
        elif len(set(q)) == 1:
            r = f"Modèle exponentiel (quotients constants égaux à ${fx(q[0])}$) : on pose $z = \\log(y)$"
        else:
            r = "Ni affine ni exponentiel"
        E.append(("intermediaire", "reconnaitre-modele",
                  f"Pour $x = 0, 1, 2, 3, 4$, on relève $y$ : ${_serie(ys)}$. Quel modèle convient : affine, exponentiel, ou aucun des deux ?",
                  ["Différences successives : $" + " \\,;\\, ".join(fx(v) for v in d) + "$.",
                   "Quotients successifs : $" + " \\,;\\, ".join(fxa(v) for v in q) + "$.", r + "."],
                  r))
    # e) changements z = 1/y et z = y^2
    for kind, a, b, x in [("inv", F(2, 10), F(1, 2), 5), ("inv", F(5, 100), F(1, 10), 8), ("inv", F(1, 2), 1, 2),
                          ("car", 4, 9, 4), ("car", F(5, 2), 6, 12), ("car", 3, 1, 5)]:
        z = a * x + b
        if kind == "inv":
            y = 1 / z
            e = f"On a posé $z = \\dfrac{{1}}{{y}}$ et obtenu $z = {affine(a, b)}$. Exprimer $y$ en fonction de $x$, puis calculer $y$ pour $x = {x}$."
            c = ["$z = \\dfrac{1}{y} \\iff y = \\dfrac{1}{z}$.", f"$y = \\dfrac{{1}}{{{affine(a, b)}}}$.", f"Pour $x = {x}$ : $z = {fx(z)}$, donc $y = {fxa(y, 3)}$."]
            r = f"$y = \\dfrac{{1}}{{{affine(a, b)}}}$ ; $y = {fxa(y, 3)}$"
        else:
            y = math.sqrt(float(z))
            e = f"On a posé $z = y^2$ (avec $y > 0$) et obtenu $z = {affine(a, b)}$. Exprimer $y$ en fonction de $x$, puis calculer $y$ pour $x = {x}$" + (" (arrondir au centième)." if _eq(y, 2) != "=" else ".")
            c = ["$z = y^2$ et $y > 0$, donc $y = \\sqrt{z}$.", f"$y = \\sqrt{{{affine(a, b)}}}$.", f"Pour $x = {x}$ : $z = {fx(z)}$, donc $y = \\sqrt{{{fx(z)}}} {_eq(y, 2)} {nb(y, 2)}$."]
            r = f"$y = \\sqrt{{{affine(a, b)}}}$ ; $y {_eq(y, 2)} {nb(y, 2)}$"
        E.append(("intermediaire", "autres-changements", e, c, r))
    # f) seuils
    for a, b, s, ctx in [(F(175, 1000), F(33, 10), 50000, "abonnés"), (F(4, 100), 2, 1000, "visiteurs"), (F(3, 100), F(15, 10), 100, "individus"),
                         (F(1, 10), 1, 1000, "milliers de bactéries"), (F(2, 100), F(5, 2), 1000, "licenciés"), (F(-12, 100), 3, 100, "pièces")]:
        xs = (lg(s) - float(b)) / float(a)
        if abs(xs - round(xs)) < 1e-9:
            xs = float(round(xs))
        exact = abs(lg(s) - round(lg(s))) < 1e-12
        if a > 0:
            n = math.floor(xs) + 1
            e = f"Avec le modèle $\\log(y) = {affine(a, b)}$ ({ctx}), à partir de quelle valeur entière de $x$ a-t-on $y > {nb(s)}$ ?"
            c = [f"$y > {nb(s)} \\iff \\log(y) > \\log({nb(s)})$ (le log est croissant).",
                 (f"${affine(a, b)} > {nb(round(lg(s)))}$, soit $x > {nb(xs, 2)}$." if exact else
                  f"${affine(a, b)} > \\log({nb(s)})$, soit $x > \\dfrac{{\\log({nb(s)}) {sg(-b)}}}{{{fx(a)}}} \\approx {nb(xs, 2)}$."),
                 f"La première valeur entière est $x = {n}$."]
        else:
            n = math.floor(xs) + 1
            e = f"Avec le modèle $\\log(y) = {affine(a, b)}$ ({ctx}), à partir de quelle valeur entière de $x$ a-t-on $y < {nb(s)}$ ?"
            c = [f"$y < {nb(s)} \\iff \\log(y) < \\log({nb(s)}) {'=' if exact else chr(92) + 'approx'} {nb(lg(s), 4)}$.",
                 f"${affine(a, b)} < {nb(lg(s), 4)}$ ; on divise par ${fx(a)} < 0$ : le sens change, $x > {nb(xs, 2)}$ environ.", f"La première valeur entière est $x = {n}$."]
        E.append(("probleme", "seuil", e, c, f"$x = {n}$"))
    # g) point moyen et ajustement sur (x ; z)
    for xs, zs, a in [([1, 2, 3, 4], [F(21, 10), F(23, 10), F(26, 10), F(28, 10)], F(24, 100)), ([0, 2, 4, 6], [F(3), F(34, 10), F(37, 10), F(41, 10)], F(18, 100)),
                      ([1, 3, 5, 7], [F(5, 10), F(4, 10), F(32, 100), F(2, 10)], F(-5, 100)), ([2, 4, 6, 8, 10], [1, F(13, 10), F(15, 10), F(19, 10), F(22, 10)], F(15, 100))]:
        mx = F(sum(xs), len(xs))
        mz = sum(F(z) for z in zs) / len(zs)
        b = mz - a * mx
        E.append(("approfondissement", "point-moyen",
                  f"On a calculé $z = \\log(y)$ : {_tableau_xy(xs, zs, 'x_i', 'z_i')}. Calculer le point moyen du nuage $(x_i\\,;z_i)$, puis l'ordonnée à l'origine $b$ de la droite d'ajustement de pente $a = {fx(a)}$ passant par ce point.",
                  [f"$\\bar x = {fx(mx)}$ et $\\bar z = {fx(mz)}$.", f"$b = \\bar z - a\\bar x = {fx(mz)} - {par(a) if a < 0 else fx(a)} \\times {fx(mx)} = {fx(b)}$."],
                  f"$\\mathrm{{G}}{pt(mx, mz)}$ ; $z = {affine(a, b)}$"))
    # h) interprétation
    I = [("Pourquoi faut-il signaler une réserve quand on utilise un modèle exponentiel pour prévoir loin dans le futur ?",
          ["Extrapoler suppose que la tendance observée se prolonge.", "Une croissance exponentielle explose à long terme : la prévision devient vite irréaliste."],
          "Extrapolation : rien ne garantit que la tendance se poursuive"),
         ("Un élève lit la pente $a = 0{,}175$ de l'ajustement $\\log(y) = 0{,}175x + 3{,}3$ comme une hausse de $17{,}5\\,\\%$ par an. Corriger.",
          ["$y$ est multiplié par $10^{0{,}175} \\approx 1{,}50$ chaque année.", "C'est une hausse d'environ $50\\,\\%$ par an, pas $17{,}5\\,\\%$."],
          "Hausse d'environ $50\\,\\%$ par an"),
         ("Sur quel nuage doit-on calculer la droite des moindres carrés quand on pose $z = \\log(y)$ ?",
          ["Sur le nuage transformé $(x_i\\,;z_i)$, qui est rectiligne.", "Les $x_i$ ne changent pas ; seules les ordonnées sont transformées."],
          "Sur le nuage $(x_i\\,;z_i)$"),
         ("Peut-on poser $z = \\log(y)$ si certaines valeurs de $y$ sont nulles ou négatives ?",
          ["Non : $\\log(y)$ n'existe que pour $y > 0$."], "Non")]
    for e, c, r in I:
        E.append(("application", "interpretation", e, c, r))
    return _fin(E)


# ======================================================================
# Tle techno — SUITES ARITHMÉTIQUES ET GÉOMÉTRIQUES
# ======================================================================
def gt_suites():
    E = []
    # a) terme général depuis un rang p
    for kind, p, up, k, n in [("a", 4, 23, 5, 9), ("a", 1, 7, -3, 20), ("a", 10, 50, F(5, 2), 30), ("a", 3, -8, 4, 15),
                              ("g", 2, 18, 3, 5), ("g", 1, 1000, F(1, 2), 6), ("g", 3, 40, 2, 8), ("g", 5, 100, F(11, 10), 7)]:
        if kind == "a":
            un = up + (n - p) * F(k)
            e = f"$(u_n)$ est arithmétique de raison $r = {fx(k)}$ et $u_{{{p}}} = {fx(up)}$. Calculer $u_{{{n}}}$."
            c = [f"$u_n = u_p + (n - p)r$ : de $u_{{{p}}}$ à $u_{{{n}}}$, il y a ${n - p}$ pas.", f"$u_{{{n}}} = {fx(up)} + {n - p} \\times {par(k) if F(k).denominator == 1 else fx(k)} = {fx(un)}$."]
        else:
            un = up * F(k) ** (n - p)
            e = f"$(u_n)$ est géométrique de raison $q = {fx(k)}$ et $u_{{{p}}} = {fx(up)}$. Calculer $u_{{{n}}}$."
            c = [f"$u_n = u_p \\times q^{{n - p}}$ : de $u_{{{p}}}$ à $u_{{{n}}}$, il y a ${n - p}$ pas.", f"$u_{{{n}}} = {fx(up)} \\times {fx(k)}^{{{n - p}}} = {fx(un)}$."]
        E.append(("application", "terme-general", e, c, f"$u_{{{n}}} = {fx(un)}$"))
    # b) raison à partir de deux termes
    for p, up, n, un in [(2, 11, 7, 36), (0, 100, 8, 60), (5, 3, 12, -11), (3, F(15, 2), 9, F(45, 2))]:
        r = F(un - up) / (n - p)
        E.append(("intermediaire", "raison",
                  f"$(u_n)$ est arithmétique avec $u_{{{p}}} = {fx(up)}$ et $u_{{{n}}} = {fx(un)}$. Déterminer sa raison.",
                  [f"$u_{{{n}}} = u_{{{p}}} + {n - p}r$, donc $r = \\dfrac{{{fx(un)} - {par(up) if F(up).denominator == 1 else fx(up)}}}{{{n - p}}} = {fx(r)}$."],
                  f"$r = {fx(r)}$"))
    for p, up, uq in [(3, 50, 72), (0, 16, 36), (4, 200, 162)]:
        q = F(math.isqrt(int(F(uq, up) * 10000)), 100)
        assert up * q * q == uq
        E.append(("intermediaire", "raison",
                  f"$(u_n)$ est géométrique à termes strictement positifs, avec $u_{{{p}}} = {fx(up)}$ et $u_{{{p + 2}}} = {fx(uq)}$. Déterminer sa raison $q$.",
                  [f"$u_{{{p + 2}}} = u_{{{p}}} \\times q^2$, donc $q^2 = \\dfrac{{{fx(uq)}}}{{{fx(up)}}} = {fx(q * q)}$.", f"$q > 0$, donc $q = {fx(q)}$."],
                  f"$q = {fx(q)}$"))
    # c) termes consécutifs ?
    for kind, a, b, c in [("a", 7, 12, 17), ("a", 3, 8, 14), ("a", F(5, 2), 4, F(11, 2)), ("g", 4, 12, 36), ("g", 5, 10, 25), ("g", 50, 60, 72), ("g", 2, 6, 12)]:
        a, b, c = F(a), F(b), F(c)
        if kind == "a":
            ok = 2 * b == a + c
            e = f"Les nombres ${fx(a)}$, ${fx(b)}$ et ${fx(c)}$ sont-ils, dans cet ordre, trois termes consécutifs d'une suite arithmétique ?"
            co = [f"On teste $2b = a + c$ : $2 \\times {fx(b)} = {fx(2 * b)}$ et ${fx(a)} + {fx(c)} = {fx(a + c)}$."]
            r = f"Oui, de raison ${fx(b - a)}$" if ok else "Non"
        else:
            ok = b * b == a * c
            e = f"Les nombres ${fx(a)}$, ${fx(b)}$ et ${fx(c)}$ sont-ils, dans cet ordre, trois termes consécutifs d'une suite géométrique ?"
            co = [f"On teste $b^2 = ac$ : ${fx(b)}^2 = {fx(b * b)}$ et ${fx(a)} \\times {fx(c)} = {fx(a * c)}$."]
            r = f"Oui, de raison ${fx(b / a)}$" if ok else "Non"
        co.append("Les deux membres sont égaux." if ok else "Les deux membres sont différents.")
        E.append(("intermediaire", "termes-consecutifs", e, co, r))
    # d) moyennes
    for a, b in [(4, 9), (2, 18), (F(16, 10), F(9, 10))]:
        m, g = (F(a) + b) / 2, math.sqrt(float(F(a) * b))
        E.append(("application", "moyennes",
                  f"Calculer la moyenne arithmétique et la moyenne géométrique de ${fx(a)}$ et ${fx(b)}$.",
                  [f"Moyenne arithmétique : $\\dfrac{{{fx(a)} + {fx(b)}}}{{2}} = {fx(m)}$.", f"Moyenne géométrique : $\\sqrt{{{fx(a)} \\times {fx(b)}}} = \\sqrt{{{fx(F(a) * b)}}} = {nb(g, 4)}$."],
                  f"${fx(m)}$ et ${nb(g, 4)}$"))
    for t1, t2 in [(20, 80), (10, -10), (5, 15)]:
        C = (1 + F(t1, 100)) * (1 + F(t2, 100))
        cm = math.sqrt(float(C))
        E.append(("approfondissement", "moyennes",
                  f"Un prix évolue de ${'+' if t1 > 0 else ''}{t1}\\,\\%$ puis de ${'+' if t2 > 0 else ''}{t2}\\,\\%$. Quel est le taux d'évolution moyen sur une période (arrondi à 0,01 %) ?",
                  [f"Coefficient global : ${fx(1 + F(t1, 100))} \\times {fx(1 + F(t2, 100))} = {fx(C)}$.",
                   f"Coefficient moyen : moyenne géométrique $\\sqrt{{{fx(C)}}} \\approx {nb(cm, 5)}$.",
                   f"Taux moyen $\\approx {nb((cm - 1) * 100, 2, True)}\\,\\%$ (et non la moyenne arithmétique des taux)."],
                  f"$\\approx {'+' if cm > 1 else ''}{nb((cm - 1) * 100, 2, True)}\\,\\%$"))
    # e) sommes arithmétiques
    for u0, r, n in [(3, 2, 10), (100, -5, 15), (1, 1, 100), (F(1, 2), F(1, 2), 20), (12, 7, 30), (50, 10, 12), (-20, 3, 25), (1, 2, 50)]:
        last = u0 + (n - 1) * F(r)
        S = n * (u0 + last) / 2
        E.append(("intermediaire", "somme-arithmetique",
                  f"$(u_n)$ est arithmétique de premier terme $u_0 = {fx(u0)}$ et de raison ${fx(r)}$. Calculer $S = u_0 + u_1 + \\cdots + u_{{{n - 1}}}$.",
                  [f"Il y a ${n}$ termes ; le dernier est $u_{{{n - 1}}} = {fx(u0)} + {n - 1} \\times {par(r) if F(r).denominator == 1 else fx(r)} = {fx(last)}$.",
                   f"$S = \\text{{nombre de termes}} \\times \\dfrac{{\\text{{premier}} + \\text{{dernier}}}}{{2}} = {n} \\times \\dfrac{{{fx(u0)} + {par(last) if last < 0 else fx(last)}}}{{2}} = {fx(S)}$."],
                  f"$S = {fx(S)}$"))
    # f) sommes géométriques
    for u0, q, n in [(1, 2, 10), (3, 3, 6), (1000, F(1, 2), 5), (5, 2, 8), (200, F(11, 10), 4), (1, F(1, 10), 4), (64, F(3, 2), 5)]:
        S = u0 * (1 - F(q) ** n) / (1 - F(q))
        E.append(("approfondissement", "somme-geometrique",
                  f"$(u_n)$ est géométrique de premier terme $u_0 = {fx(u0)}$ et de raison ${fx(q)}$. Calculer la somme des ${n}$ premiers termes.",
                  [f"$S = u_0 \\times \\dfrac{{1 - q^{{n}}}}{{1 - q}}$ avec $n = {n}$ termes.",
                   f"$S = {fx(u0)} \\times \\dfrac{{1 - {fx(q)}^{{{n}}}}}{{1 - {fx(q)}}} = {fx(S)}$."],
                  f"$S = {fx(S)}$"))
    # g) problèmes : terme ou somme ?
    P = [("Un salarié gagne $24\\,000$ € la première année ; son salaire augmente de $600$ € par an. Quel sera son salaire la dixième année ? Combien aura-t-il gagné en tout sur ces 10 ans ?",
          ["Suite arithmétique : $u_1 = 24\\,000$, $r = 600$ ; la dixième année : $u_{10} = 24\\,000 + 9 \\times 600 = 29\\,400$ €.",
           "Total sur 10 ans (somme) : $10 \\times \\dfrac{24\\,000 + 29\\,400}{2} = 267\\,000$ €."],
          "$29\\,400$ € la dixième année ; $267\\,000$ € en tout"),
         ("Une usine produit $5\\,000$ pièces la première année, puis sa production augmente de $4\\,\\%$ par an. Quelle est la production cumulée sur 6 ans (à l'unité près) ?",
          ["Suite géométrique de premier terme $5\\,000$ et de raison $1{,}04$ ; « cumulée » : on calcule une somme de 6 termes.",
           f"$S = 5\\,000 \\times \\dfrac{{1{{,}}04^6 - 1}}{{1{{,}}04 - 1}} \\approx {nb(5000 * (1.04 ** 6 - 1) / 0.04, 0)}$."],
          f"Environ ${nb(5000 * (1.04 ** 6 - 1) / 0.04, 0)}$ pièces"),
         ("Un coureur parcourt $2$ km le premier jour d'entraînement, puis $0{,}5$ km de plus chaque jour. Quelle distance totale a-t-il parcourue au bout de 20 jours ?",
          ["Suite arithmétique : $u_1 = 2$, $r = 0{,}5$ ; le vingtième jour : $u_{20} = 2 + 19 \\times 0{,}5 = 11{,}5$ km.",
           "Total : $20 \\times \\dfrac{2 + 11{,}5}{2} = 135$ km."],
          "$135$ km"),
         ("On place $1\\,000$ € le 1er janvier de chaque année, pendant 5 ans, à $3\\,\\%$ par an. Le dernier versement vaut $1\\,000$ €, l'avant-dernier $1\\,000 \\times 1{,}03$ €, etc. Quelle somme possède-t-on juste après le cinquième versement (au centime) ?",
          ["On additionne $1\\,000 + 1\\,000 \\times 1{,}03 + \\cdots + 1\\,000 \\times 1{,}03^4$ : somme de 5 termes d'une suite géométrique.",
           f"$S = 1\\,000 \\times \\dfrac{{1{{,}}03^5 - 1}}{{0{{,}}03}} \\approx {nb(1000 * (1.03 ** 5 - 1) / 0.03, 2, True)}$ €."],
          f"Environ ${nb(1000 * (1.03 ** 5 - 1) / 0.03, 2, True)}$ €"),
         ("Dans « le loyer de la huitième année » et « le total des loyers payés sur 8 ans », laquelle des deux questions demande une somme ?",
          ["« Le total… sur 8 ans » cumule les 8 loyers : c'est une somme.", "« Le loyer de la huitième année » est un seul terme."],
          "Le total sur 8 ans"),
         ("Combien y a-t-il de termes dans la somme $u_3 + u_4 + \\cdots + u_{15}$ ?",
          ["De $u_3$ à $u_{15}$ inclus : $15 - 3 + 1 = 13$ termes."], "$13$ termes"),
         ("Une balle rebondit en perdant $20\\,\\%$ de sa hauteur à chaque rebond. Lâchée de $5$ m, quelle hauteur atteint-elle après le quatrième rebond (au cm près) ?",
          ["Chaque rebond multiplie la hauteur par $0{,}8$ : suite géométrique de raison $0{,}8$.",
           f"Après 4 rebonds : $5 \\times 0{{,}}8^4 = {nb(5 * 0.8 ** 4, 4)}$ m."],
          f"Environ ${nb(5 * 0.8 ** 4, 2)}$ m")]
    for e, c, r in P:
        E.append(("probleme", "probleme", e, c, r))
    return _fin(E)


# ======================================================================
# Tle techno — VARIABLES ALÉATOIRES ET LOI BINOMIALE
# ======================================================================
def _tab_loi(vals, probs, nom="x_i"):
    return (f"$\\begin{{array}}{{c|{'c' * len(vals)}}} {nom} & " + " & ".join(nb(v) for v in vals) +
            " \\\\ \\hline P(X = x_i) & " + " & ".join("p" if p is None else fx(p) for p in probs) + " \\end{array}$")


def _p3(x):
    """Probabilité arrondie au millième (valeur exacte si elle a au plus 3 décimales)."""
    x = F(x)
    if dexact(x) is not None and (x * 1000).denominator == 1:
        return f"= {fx(x)}"
    return f"\\approx {nb(float(x), 3, True)}"


def gt_binomiale():
    E = []
    # a) espérance d'une loi
    for vals, probs in [([-2, 1, 5], [F(1, 2), F(3, 10), F(1, 5)]), ([0, 10, 50], [F(7, 10), F(1, 4), F(1, 20)]),
                        ([1, 2, 3, 4], [F(1, 10), F(3, 10), F(4, 10), F(2, 10)]), ([-5, 0, 20], [F(3, 5), F(3, 10), F(1, 10)]),
                        ([2, 4, 6], [F(1, 3), F(1, 3), F(1, 3)])]:
        Ex = sum(F(v) * p for v, p in zip(vals, probs))
        termes = " + ".join(f"{par(v)} \\times {fx(p)}" for v, p in zip(vals, probs))
        E.append(("application", "esperance",
                  f"La loi de probabilité de $X$ est {_tab_loi(vals, probs)}. Calculer $E(X)$.",
                  ["On vérifie que la somme des probabilités vaut $1$.", f"$E(X) = {termes} = {fx(Ex)}$."],
                  f"$E(X) = {fx(Ex)}$"))
    for vals, probs in [([0, 1, 2], [F(1, 4), None, F(1, 4)]), ([-3, 2, 8], [None, F(1, 2), F(1, 10)]), ([5, 10, 20], [F(1, 2), F(3, 10), None])]:
        manq = 1 - sum(p for p in probs if p is not None)
        full = [manq if p is None else p for p in probs]
        Ex = sum(F(v) * p for v, p in zip(vals, full))
        E.append(("intermediaire", "esperance",
                  f"La loi de probabilité de $X$ est {_tab_loi(vals, probs)}. Calculer $p$, puis $E(X)$.",
                  ["La somme des probabilités vaut $1$ : " + f"$p = {fx(manq)}$.",
                   "$E(X) = " + " + ".join(f"{par(v)} \\times {fx(p)}" for v, p in zip(vals, full)) + f" = {fx(Ex)}$."],
                  f"$p = {fx(manq)}$ ; $E(X) = {fx(Ex)}$"))
    # b) jeu équitable
    for mise, p_gain, ctx in [(2, F(1, 6), "On mise $2$ € et on lance un dé équilibré ; on reçoit $G$ € si on obtient 6, rien sinon."),
                              (1, F(1, 4), "On mise $1$ € et on tire une carte dans un jeu de 32 cartes ; on reçoit $G$ € si c'est un cœur, rien sinon."),
                              (5, F(1, 10), "On mise $5$ € ; une roue fait gagner $G$ € avec une probabilité de $0{,}1$, rien sinon."),
                              (3, F(1, 2), "On mise $3$ € et on lance une pièce équilibrée ; on reçoit $G$ € si on obtient pile, rien sinon.")]:
        G = F(mise) / p_gain
        E.append(("approfondissement", "jeu-equitable",
                  f"{ctx} Pour quelle valeur de $G$ le jeu est-il équitable ?",
                  [f"Gain algébrique : $G - {mise}$ avec la probabilité ${fx(p_gain)}$, et $-{mise}$ avec la probabilité ${fx(1 - p_gain)}$.",
                   f"$E = (G - {mise}) \\times {fx(p_gain)} - {mise} \\times {fx(1 - p_gain)} = {fx(p_gain)}G - {mise}$.",
                   f"$E = 0 \\iff G = \\dfrac{{{mise}}}{{{fx(p_gain)}}} = {fx(G)}$."],
                  f"$G = {fx(G)}$ €"))
    E.append(("intermediaire", "jeu-equitable", "L'espérance du gain algébrique d'un jeu vaut $-0{,}40$ €. Interpréter.",
              ["Sur un grand nombre de parties, le joueur perd en moyenne $0{,}40$ € par partie.", "Le jeu est défavorable au joueur ; ce n'est pas une prévision pour une seule partie."],
              "Jeu défavorable : perte moyenne de $0{,}40$ € par partie"))
    E.append(("intermediaire", "jeu-equitable", "Vrai ou faux : pour calculer $E(X)$, on fait la moyenne simple des valeurs prises par $X$.",
              ["Faux : chaque valeur doit être pondérée par sa probabilité.", "$E(X) = x_1p_1 + x_2p_2 + \\cdots + x_np_n$."], "Faux"))
    # c) coefficients binomiaux (triangle de Pascal)
    for n, k in [(4, 2), (5, 2), (6, 3), (7, 2), (8, 3), (6, 1), (8, 6), (7, 7)]:
        c = math.comb(n, k)
        extra = []
        if k == n:
            extra = [f"$\\dbinom{{{n}}}{{{n}}} = 1$ : un seul chemin ne comporte que des succès."]
        elif k > n - k:
            extra = [f"Par symétrie, $\\dbinom{{{n}}}{{{k}}} = \\dbinom{{{n}}}{{{n - k}}}$."]
        elif k == 1:
            extra = [f"$\\dbinom{{{n}}}{{1}} = {n}$ : le succès peut être à l'une des ${n}$ places."]
        else:
            extra = [f"Avec la relation $\\dbinom{{{n}}}{{{k}}} = \\dbinom{{{n - 1}}}{{{k - 1}}} + \\dbinom{{{n - 1}}}{{{k}}} = {math.comb(n - 1, k - 1)} + {math.comb(n - 1, k)}$."]
        E.append(("application", "coefficient-binomial",
                  f"À l'aide du triangle de Pascal, calculer $\\dbinom{{{n}}}{{{k}}}$.",
                  [f"On lit la ligne $n = {n}$, colonne $k = {k}$ (la numérotation commence à 0)."] + extra + [f"$\\dbinom{{{n}}}{{{k}}} = {c}$."],
                  f"${c}$"))
    # d) reconnaître une loi binomiale
    RB = [("On lance 10 fois un dé équilibré et $X$ compte le nombre de 6 obtenus. $X$ suit-elle une loi binomiale ?",
           ["Même épreuve de Bernoulli (succès : « obtenir 6 », $p = \\dfrac{1}{6}$), répétée 10 fois de façon indépendante ; $X$ compte les succès."],
           "Oui : $X \\sim B\\left(10\\,;\\dfrac{1}{6}\\right)$"),
          ("Une urne contient 3 boules rouges et 2 vertes. On tire successivement 3 boules sans remise ; $X$ compte les boules rouges. Est-ce une loi binomiale ?",
           ["Sans remise dans un petit lot, la probabilité change à chaque tirage : les épreuves ne sont pas indépendantes."], "Non"),
          ("On lance une pièce jusqu'à obtenir pile ; $X$ est le nombre de lancers. Est-ce une loi binomiale ?",
           ["Le nombre d'épreuves n'est pas fixé à l'avance : ce n'est pas une loi binomiale."], "Non"),
          ("Une machine produit des pièces défectueuses avec une probabilité de $0{,}03$. On prélève 50 pièces (assimilé à des tirages avec remise) ; $X$ compte les pièces défectueuses. Quelle est la loi de $X$ ?",
           ["50 épreuves de Bernoulli identiques et indépendantes, succès « pièce défectueuse » de probabilité $0{,}03$."], "$X \\sim B(50\\,;0{,}03)$"),
          ("$X \\sim B(8\\,;0{,}4)$. Traduire par une phrase l'événement $\\{X = 3\\}$.",
           ["$\\{X = k\\}$ signifie « obtenir exactement $k$ succès au cours des $n$ épreuves »."], "Obtenir exactement 3 succès sur les 8 épreuves")]
    for e, c, r in RB:
        E.append(("intermediaire", "reconnaitre-binomiale", e, c, r))
    # e) P(X = k)
    for n, p, k in [(4, F(1, 2), 2), (5, F(3, 10), 2), (6, F(1, 6), 1), (3, F(4, 5), 2), (8, F(1, 10), 0), (5, F(6, 10), 4),
                    (7, F(1, 2), 3), (4, F(1, 4), 1), (6, F(2, 5), 3), (8, F(9, 10), 7)]:
        c = math.comb(n, k)
        P = c * p ** k * (1 - p) ** (n - k)
        E.append(("intermediaire", "probabilite-binomiale",
                  f"$X$ suit la loi binomiale $B({n}\\,;{fx(p)})$. Calculer $P(X = {k})$ (arrondir au millième si nécessaire).",
                  [f"$P(X = k) = \\dbinom{{n}}{{k}} p^k (1 - p)^{{n - k}}$.",
                   f"$\\dbinom{{{n}}}{{{k}}} = {c}$ (triangle de Pascal).",
                   f"$P(X = {k}) = {c} \\times {pw(p)}^{{{k}}} \\times {pw(1 - p)}^{{{n - k}}} {_p3(P)}$."],
                  f"$P(X = {k}) {_p3(P)}$"))
    # f) espérance de la loi binomiale
    for n, p, ctx in [(20, F(1, 4), "Un QCM de 20 questions à 4 choix, réponses au hasard : $X$ compte les bonnes réponses."),
                      (50, F(3, 100), "Sur 50 pièces prélevées, $X$ compte les pièces défectueuses (probabilité $0{,}03$ chacune)."),
                      (120, F(1, 6), "On lance 120 fois un dé équilibré ; $X$ compte les 6."),
                      (200, F(45, 100), "On interroge 200 personnes au hasard ; chacune vote pour A avec une probabilité de $0{,}45$, et $X$ compte les votes pour A."),
                      (30, F(8, 10), "Un basketteur tire 30 lancers francs, réussis chacun avec une probabilité de $0{,}8$ ; $X$ compte les lancers réussis."),
                      (365, F(1, 5), "Chaque jour de l'année, la probabilité qu'un bus soit en retard est $0{,}2$, indépendamment des autres jours ; $X$ compte les jours de retard sur 365 jours."),
                      (16, F(1, 2), "On lance 16 fois une pièce équilibrée ; $X$ compte les piles.")]:
        Ex = n * p
        E.append(("probleme", "esperance-binomiale",
                  f"{ctx} Calculer et interpréter l'espérance de $X$.",
                  [f"$X$ suit la loi binomiale $B({n}\\,;{fx(p)})$.", f"$E(X) = np = {n} \\times {fx(p)} = {fx(Ex)}$.",
                   "Sur un grand nombre de répétitions de l'expérience, le nombre moyen de succès est $" + fx(Ex) + "$."],
                  f"$E(X) = {fx(Ex)}$"))
    # g) cas particuliers
    for n, p, kind in [(5, F(1, 10), "zero"), (4, F(9, 10), "tout"), (10, F(1, 2), "au-moins-un"), (6, F(1, 6), "au-moins-un"), (3, F(7, 10), "tout"), (8, F(5, 100), "zero")]:
        if kind == "zero":
            P = (1 - p) ** n
            e = f"$X \\sim B({n}\\,;{fx(p)})$. Calculer $P(X = 0)$ (arrondi au millième si besoin)."
            c = ["Aucun succès : un seul chemin, uniquement des échecs.", f"$P(X = 0) = (1 - p)^{{n}} = {fx(1 - p)}^{{{n}}} {_p3(P)}$."]
            r = f"$P(X = 0) {_p3(P)}$"
        elif kind == "tout":
            P = p ** n
            e = f"$X \\sim B({n}\\,;{fx(p)})$. Calculer $P(X = {n})$ (arrondi au millième si besoin)."
            c = ["Que des succès : un seul chemin.", f"$P(X = {n}) = p^{{n}} = {fx(p)}^{{{n}}} {_p3(P)}$."]
            r = f"$P(X = {n}) {_p3(P)}$"
        else:
            P = 1 - (1 - p) ** n
            e = f"$X \\sim B({n}\\,;{fx(p) if dexact(p) else fl(p)})$. Calculer $P(X \\geqslant 1)$ (arrondi au millième)."
            c = ["$\\{X \\geqslant 1\\}$ est l'événement contraire de $\\{X = 0\\}$.", f"$P(X \\geqslant 1) = 1 - {pw(1 - p)}^{{{n}}} {_p3(P)}$."]
            r = f"$P(X \\geqslant 1) {_p3(P)}$"
        E.append(("approfondissement", "cas-particuliers", e, c, r))
    return _fin(E)


EXTRA = {
    ("premiere-techno", "derivation"): g1t_derivation,
    ("premiere-techno", "fonctions-variable-reelle"): g1t_fonctions,
    ("premiere-techno", "probabilites-variables-aleatoires"): g1t_probas,
    ("premiere-techno", "statistiques-deux-variables"): g1t_stats2,
    ("premiere-techno", "suites-numeriques"): g1t_suites,
    ("seconde", "algorithmique"): g2_algo,
    ("seconde", "arithmetique"): g2_arith,
    ("seconde", "droites-du-plan"): g2_droites,
    ("seconde", "equations-inequations"): g2_equations,
    ("seconde", "fonctions-de-reference"): g2_reference,
    ("seconde", "notion-de-fonction"): g2_notion_fonction,
    ("seconde", "probabilites"): g2_probas,
    ("seconde", "statistiques"): g2_stats,
    ("seconde", "vecteurs"): g2_vecteurs,
    ("terminale-techno", "activites-geometriques-std2a"): gt_std2a,
    ("terminale-techno", "algorithmique-programmation"): gt_algo,
    ("terminale-techno", "fonction-inverse"): gt_inverse,
    ("terminale-techno", "fonctions-exponentielles"): gt_exponentielles,
    ("terminale-techno", "logarithme-decimal"): gt_log,
    ("terminale-techno", "logique-ensembles"): gt_logique,
    ("terminale-techno", "statistiques-deux-variables"): gt_stats2,
    ("terminale-techno", "suites-arithmetiques-geometriques"): gt_suites,
    ("terminale-techno", "variables-aleatoires-binomiale"): gt_binomiale,
}
