# -*- coding: utf-8 -*-
"""Générateurs enrichis — lot c1 : mathématiques de 5e (15 chapitres).

Chaque fonction renvoie 50 exercices variés (au moins 5 notions, 3 niveaux de
difficulté), toutes les réponses étant calculées par le code.
Expose EXTRA = {(niveau, slug): fonction}.
"""
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction as F
from math import gcd

A, I, P, PB = "application", "intermediaire", "approfondissement", "probleme"


# ---------------------------------------------------------------- aides
def _D(x):
    if isinstance(x, Decimal):
        return x
    if isinstance(x, F):
        return Decimal(x.numerator) / Decimal(x.denominator)
    if isinstance(x, float):
        return Decimal(repr(x))
    return Decimal(str(x))


def _morceaux(x, dec=None, garder=False):
    d = _D(x)
    if dec is not None:
        d = d.quantize(Decimal(1).scaleb(-dec), rounding=ROUND_HALF_UP)
    s = format(d, "f")
    neg = s.startswith("-")
    s = s.lstrip("-")
    if "." in s:
        e, f = s.split(".")
        if not garder:
            f = f.rstrip("0")
    else:
        e, f = s, ""
    if set(e + f) <= {"0"}:
        neg = False
    return neg, e, f


def _grouper(e, sep):
    if len(e) < 4:
        return e
    g = []
    while e:
        g.insert(0, e[-3:])
        e = e[:-3]
    return sep.join(g)


def nb(x, dec=None, garder=False):
    """Nombre au format LaTeX : 2{,}5 ; 12\\,500 ; -3."""
    neg, e, f = _morceaux(x, dec, garder)
    return ("-" if neg else "") + _grouper(e, "\\,") + ("{,}" + f if f else "")


def tx(x, dec=None, garder=False):
    """Nombre au format texte : 2,5 ; 12 500."""
    neg, e, f = _morceaux(x, dec, garder)
    return ("-" if neg else "") + _grouper(e, " ") + ("," + f if f else "")


def eur(x):
    """Montant en euros (LaTeX) : 12 ou 4{,}50."""
    d = _D(x)
    if d == d.to_integral_value():
        return nb(d)
    return nb(d, 2, garder=True)


def fl(q):
    q = F(q)
    if q.denominator == 1:
        return nb(q.numerator)
    s = "-" if q < 0 else ""
    return f"{s}\\dfrac{{{abs(q.numerator)}}}{{{q.denominator}}}"


def fb(a, b):
    """Fraction brute (non simplifiée)."""
    return f"\\dfrac{{{a}}}{{{b}}}"


def rel(x):
    """Relatif entre parenthèses avec son signe : (+5), (-3)."""
    return "(" + ("+" if x > 0 else "") + nb(x) + ")" if x != 0 else "0"


def poly(termes):
    """[(3,'x'),(-5,'')] -> 3x - 5 ; coefficients 1 et -1 cachés devant une lettre."""
    out = ""
    for c, v in termes:
        if c == 0:
            continue
        a = abs(c)
        corps = (nb(a) if (a != 1 or v == "") else "") + v
        if not out:
            out = ("-" if c < 0 else "") + corps
        else:
            out += (" - " if c < 0 else " + ") + corps
    return out or "0"


def reduire(termes):
    ordre, som = [], {}
    for c, v in termes:
        if v not in som:
            ordre.append(v)
            som[v] = 0
        som[v] += c
    return [(som[v], v) for v in ordre]


class B:
    def __init__(self):
        self.E = []

    def __call__(self, diff, notion, enonce, corrige, reponse):
        if isinstance(corrige, str):
            corrige = [corrige]
        self.E.append((diff, notion, enonce, list(corrige), reponse))

    def fin(self):
        assert len(self.E) == 50, len(self.E)
        en = [e[2] for e in self.E]
        assert len(set(en)) == 50, [x for x in en if en.count(x) > 1][:2]
        return [{"id": i + 1, "difficulte": d, "notion": n, "enonce": e,
                 "corrige": c, "reponse": r}
                for i, (d, n, e, c, r) in enumerate(self.E)]


# ================================================================ CALCUL LITTÉRAL
def g5_calcul_litteral():
    E = B()
    # --- substitution (8)
    subs = [(3, 5, 4), (6, 1, 2), (5, 7, 3), (4, 9, 5), (7, 2, 6), (2, 13, 8)]
    for k, (a, b, x) in enumerate(subs):
        E(A, "substitution", f"Calcule $ {a}x + {b} $ pour $ x = {x} $.",
          f"On remplace $x$ par ${x}$ : $ {a} \\times {x} + {b} = {a*x} + {b} = {a*x+b} $.",
          f"$ {a*x+b} $")
    E(I, "substitution", "Calcule $ 4(x + 3) $ pour $ x = 5 $.",
      "On remplace $x$ par $5$ : $ 4 \\times (5 + 3) = 4 \\times 8 = 32 $. La parenthèse se calcule d'abord.",
      "$ 32 $")
    x, y = 4, 5
    E(I, "substitution", f"Calcule $ 3x + 2y $ pour $ x = {x} $ et $ y = {y} $.",
      f"$ 3 \\times {x} + 2 \\times {y} = {3*x} + {2*y} = {3*x+2*y} $.",
      f"$ {3*x+2*y} $")
    # --- conventions (6)
    conv = [
        ("Écris plus simplement $ 3 \\times a \\times b $.", "On supprime les signes $\\times$ devant les lettres.", "$ 3ab $"),
        ("Écris plus simplement $ 5 \\times (x + 2) $.", "On supprime le signe $\\times$ devant une parenthèse.", "$ 5(x + 2) $"),
        ("Écris plus simplement $ x \\times x $.", "Un nombre multiplié par lui-même s'écrit avec un carré.", "$ x^2 $"),
        ("Écris plus simplement $ a \\times 7 $.", "On écrit le nombre devant la lettre et on supprime le $\\times$.", "$ 7a $"),
        ("Réécris $ 4xy $ en faisant apparaître tous les signes $\\times$.", "$4xy$ est un produit de trois facteurs.", "$ 4 \\times x \\times y $"),
        ("Peut-on écrire $ 3 \\times 4 $ sous la forme $ 34 $ ?",
         "Non : on ne supprime le $\\times$ que devant une lettre ou une parenthèse. $ 3 \\times 4 = 12 $, alors que $34$ est un autre nombre.",
         "Non"),
    ]
    for e, c, r in conv:
        E(A, "conventions", e, c, r)
    # --- réduire (8)
    red = [
        [(3, "a"), (5, "a")], [(7, "x"), (-2, "x")], [(4, "x"), (3, ""), (2, "x"), (5, "")],
        [(9, "y"), (-4, "y"), (2, "")], [(5, "a"), (2, "b"), (3, "a"), (1, "b")],
        [(6, "t"), (4, ""), (-2, "t"), (-1, "")], [(4, "x"), (2, "x^2"), (1, "x")],
    ]
    for k, t in enumerate(red):
        r = poly(reduire(t))
        d = A if len(t) == 2 else I
        if any(v == "x^2" for _, v in t):
            d = P
            c = ["On regroupe les termes en $x$ entre eux ; $x$ et $x^2$ ne sont pas de même nature.",
                 f"$ {poly(t)} = {r} $."]
        else:
            c = ["On regroupe les termes de même nature (même lettre, ou nombres seuls).", f"$ {poly(t)} = {r} $."]
        E(d, "reduire", f"Réduis l'expression $ {poly(t)} $.", c, f"$ {r} $")
    E(I, "reduire", "Réduis, si c'est possible, l'expression $ 3a + 5b $.",
      "$3a$ et $5b$ ne sont pas de même nature : on ne peut pas les regrouper. Écrire $8ab$ serait faux.",
      "$ 3a + 5b $ ne se réduit pas")
    # --- développer (10)
    dev = [(3, 2, 5), (4, 1, 7), (5, 3, -2), (2, 7, 4), (6, 1, -3), (7, 2, 1), (8, 1, -5), (9, 2, 3)]
    for k, a, b in dev:
        t = [(a, "x"), (b, "")]
        r = poly([(k * a, "x"), (k * b, "")])
        E(A if k < 6 else I, "developper", f"Développe $ {k}({poly(t)}) $.",
          [f"On multiplie chaque terme de la parenthèse par ${k}$ :",
           f"$ {k}({poly(t)}) = {k} \\times {poly([(a, 'x')])} {'+' if b > 0 else '-'} {k} \\times {abs(b)} = {r} $."],
          f"$ {r} $")
    for (k, a, b, c) in [(2, 1, 3, 4), (3, 2, 1, 5)]:
        dv = [(k * a, "x"), (k * b, "")]
        extra = (c, "x") if k == 2 else (c, "")
        tot = reduire(dv + [extra])
        E(P, "developper", f"Développe puis réduis $ {k}({poly([(a,'x'),(b,'')])}) + {poly([extra])} $.",
          [f"Développer : $ {k}({poly([(a,'x'),(b,'')])}) = {poly(dv)} $.",
           f"Réduire : $ {poly(dv + [extra])} = {poly(tot)} $."],
          f"$ {poly(tot)} $")
    # --- factoriser (6)
    fac = [(3, 2, 5), (4, 1, 3), (7, 1, 2), (2, 3, 5), (5, 2, 3), (4, 2, -3)]
    for k, a, b in fac:
        assert gcd(a, abs(b)) == 1
        dv = poly([(k * a, "x"), (k * b, "")])
        inn = poly([(a, "x"), (b, "")])
        E(I, "factoriser", f"Factorise $ {dv} $ en mettant en évidence le plus grand facteur commun.",
          [f"$ {k*a}x = {k} \\times {poly([(a,'x')])} $ et ${k*abs(b)} = {k} \\times {abs(b)}$ : le facteur commun est ${k}$.",
           f"$ {dv} = {k}({inn}) $."],
          f"$ {k}({inn}) $")
    # --- tester une égalité (5)
    teq = [(3, 2, 5, 4, 3), (3, 2, 5, 4, 2), (2, 7, 4, 1, 4), (4, 1, 2, 9, 6), (6, 3, 3, 12, 5)]
    for a, b, c, d, x in teq:
        g, dr = a * x + b, c * x - d
        ok = g == dr
        E(I, "tester-egalite",
          f"L'égalité $ {a}x + {b} = {c}x - {d} $ est-elle vraie pour $ x = {x} $ ?",
          [f"Membre de gauche : $ {a} \\times {x} + {b} = {g} $.",
           f"Membre de droite : $ {c} \\times {x} - {d} = {dr} $.",
           "Les deux membres sont égaux : l'égalité est vraie pour cette valeur." if ok
           else f"${g} \\neq {dr}$ : l'égalité est fausse pour cette valeur."],
          "Oui" if ok else "Non")
    # --- problèmes et démonstrations (7)
    x = 5
    E(PB, "probleme-expression",
      "Un rectangle a pour longueur $ x + 3 $ et pour largeur $ x $ (en cm). Écris son périmètre sous forme réduite, puis calcule-le pour $ x = 5 $.",
      ["$ P = 2(x + 3) + 2x = 2x + 6 + 2x = 4x + 6 $.",
       f"Pour $x = 5$ : $ 4 \\times 5 + 6 = {4*x+6} $ cm."],
      f"$ 4x + 6 $ ; $ {4*x+6} $ cm")
    n = 5
    E(PB, "probleme-expression",
      "Programme : « choisis un nombre $x$, ajoute $4$, puis multiplie le résultat par $3$ ». Écris l'expression obtenue sous forme développée, puis calcule-la pour $ x = 5 $.",
      ["L'addition se fait en premier : $ 3(x + 4) = 3x + 12 $.", f"Pour $x = 5$ : $ 3 \\times 5 + 12 = {3*n+12} $."],
      f"$ 3x + 12 $ ; $ {3*n+12} $")
    x = 3
    E(PB, "probleme-expression",
      "Un carré a pour côté $ x + 2 $ (en cm). Exprime son périmètre sous forme développée, puis calcule-le pour $ x = 3 $.",
      ["$ P = 4(x + 2) = 4x + 8 $.", f"Pour $x = 3$ : $ 4 \\times 3 + 8 = {4*x+8} $ cm."],
      f"$ 4x + 8 $ ; $ {4*x+8} $ cm")
    n = 4
    E(PB, "probleme-expression",
      "Au cinéma, une place coûte $7$ € et un paquet de pop-corn $5$ €. Écris le prix payé pour $n$ places et un seul paquet de pop-corn, puis calcule-le pour $ n = 4 $.",
      ["Prix : $ 7 \\times n + 5 = 7n + 5 $.", f"Pour $n = 4$ : $ 7 \\times 4 + 5 = {7*n+5} $ €."],
      f"$ 7n + 5 $ ; $ {7*n+5} $ €")
    E(P, "demontrer",
      "Tom affirme : « pour tout nombre $x$, on a $ 2x = x^2 $ ». A-t-il raison ?",
      ["Pour $ x = 2 $ : $ 2 \\times 2 = 4 $ et $ 2^2 = 4 $, ça marche… mais un exemple ne prouve rien.",
       "Pour $ x = 3 $ : $ 2 \\times 3 = 6 $ et $ 3^2 = 9 $. Comme $ 6 \\neq 9 $, c'est un contre-exemple."],
      "Non ($x = 3$ est un contre-exemple)")
    E(P, "demontrer",
      "Montre que la somme de deux nombres pairs est toujours paire.",
      ["Deux nombres pairs s'écrivent $2k$ et $2k'$ avec $k$ et $k'$ entiers (deux lettres différentes).",
       "$ 2k + 2k' = 2(k + k') $, et $k + k'$ est un entier : la somme est un multiple de $2$, donc paire."],
      "$ 2k + 2k' = 2(k + k') $ : c'est un nombre pair")
    E(P, "demontrer",
      "Montre que la somme de trois nombres entiers consécutifs est toujours un multiple de $3$.",
      ["Trois entiers consécutifs s'écrivent $n$, $n + 1$ et $n + 2$.",
       "$ n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1) $ : c'est un multiple de $3$."],
      "$ 3(n + 1) $, un multiple de $3$")
    return E.fin()


# ================================================================ FONCTIONS
def _formule(Y, X, b, a):
    if b == 0:
        return f"{Y} = {nb(a)} \\times {X}"
    if a < 0:
        return f"{Y} = {nb(b)} - {nb(-a)} \\times {X}"
    return f"{Y} = {nb(b)} + {nb(a)} \\times {X}"


def _calc(b, a, x):
    if b == 0:
        return f"{nb(a)} \\times {nb(x)} = {nb(a*x)}"
    if a < 0:
        return f"{nb(b)} - {nb(-a)} \\times {nb(x)} = {nb(b)} - {nb(-a*x)} = {nb(b+a*x)}"
    return f"{nb(b)} + {nb(a)} \\times {nb(x)} = {nb(b)} + {nb(a*x)} = {nb(b+a*x)}"


def _quot(y, x):
    q = F(y, x)
    if q.denominator in (1, 2, 4, 5, 10):
        return f"\\dfrac{{{y}}}{{{x}}} = {nb(q)}"
    return f"\\dfrac{{{y}}}{{{x}}} \\approx {nb(q, 2)}"


def g5_fonctions():
    E = B()
    ctx = [
        ("Une piscine facture $5$ € d'abonnement, puis $2$ € par séance. Le prix $P$ (en €) en fonction du nombre $n$ de séances est",
         "P", "n", 5, 2, "€", [3, 8]),
        ("Un taxi prend $4$ € au départ, puis $2$ € par kilomètre. Le prix $P$ (en €) en fonction de la distance $d$ (en km) est",
         "P", "d", 4, 2, "€", [6, 15]),
        ("Une bougie de $20$ cm perd $2$ cm par heure. Sa hauteur $h$ (en cm) en fonction du temps $t$ (en h) est",
         "h", "t", 20, -2, "cm", [3, 7]),
        ("Le périmètre $P$ (en cm) d'un carré en fonction de son côté $c$ (en cm) est",
         "P", "c", 0, 4, "cm", [6, 9]),
        ("Une salle de jeux demande $8$ € l'entrée, puis $3$ € par partie. Le prix $P$ (en €) en fonction du nombre $n$ de parties est",
         "P", "n", 8, 3, "€", [4, 7]),
    ]
    for (t, Y, X, b, a, u, vals) in ctx:
        for j, v in enumerate(vals):
            E(A if j == 0 else I, "formule-valeur",
              f"{t} $ {_formule(Y, X, b, a)} $. Calcule ${Y}$ pour ${X} = {v}$.",
              [f"On remplace ${X}$ par ${v}$ et on respecte les priorités (la multiplication d'abord) :",
               f"$ {Y} = {_calc(b, a, v)} $."],
              f"$ {Y} = {nb(b+a*v)} $ {u}")
    # --- tableau de valeurs (8)
    tabs = [("P", "n", 3, 4), ("P", "n", 6, 5), ("y", "x", 0, 7), ("P", "n", 10, 2),
            ("V", "t", 50, -5), ("P", "c", 0, 3), ("y", "x", 1, 9), ("P", "n", 12, 6)]
    for (Y, X, b, a) in tabs:
        xs = [0, 1, 2, 3, 4] if b != 0 else [1, 2, 3, 4, 5]
        ys = [b + a * x for x in xs]
        E(I, "tableau-valeurs",
          f"Complète le tableau de valeurs de $ {_formule(Y, X, b, a)} $ pour ${X}$ = " + ", ".join(f"${x}$" for x in xs[:-1]) + f" et ${xs[-1]}$.",
          [f"Pour chaque valeur de ${X}$, on remplace et on calcule, par exemple pour ${X} = {xs[2]}$ : $ {_calc(b, a, xs[2])} $.",
           f"Ligne du bas : " + " ; ".join(f"${y}$" for y in ys) + "."],
          " ; ".join(f"${y}$" for y in ys))
    # --- produire une formule (8)
    prod = [
        ("Un cahier coûte $3$ €. Écris le prix $P$ (en €) de $n$ cahiers en fonction de $n$.", "P = 3 \\times n",
         "Rien n'est fixe : on paie seulement les cahiers.", 3, 0, 3, "n"),
        ("Un club demande $15$ € d'adhésion, puis $4$ € par séance. Écris le prix $P$ (en €) en fonction du nombre $n$ de séances.",
         "P = 15 + 4 \\times n", "Le $15$ est fixe, on paie $4$ € de plus à chaque séance.", 4, 15, 2, "n"),
        ("Écris le périmètre $P$ d'un triangle équilatéral en fonction de la longueur $c$ de son côté.",
         "P = 3 \\times c", "Les trois côtés mesurent $c$.", 3, 0, 5, "c"),
        ("Une location de kayak coûte $5$ € de frais fixes, puis $8$ € par heure. Écris le prix $P$ (en €) en fonction du nombre $h$ d'heures.",
         "P = 5 + 8 \\times h", "Le $5$ est fixe, chaque heure ajoute $8$ €.", 8, 5, 2, "h"),
        ("Une citerne contient $500$ L d'eau. On en retire $20$ L par minute. Écris le volume $V$ restant (en L) en fonction du temps $t$ (en min).",
         "V = 500 - 20 \\times t", "On part de $500$ L et on enlève $20$ L chaque minute.", -20, 500, 3, "t"),
        ("Un livreur gagne $40$ € par jour, plus $2$ € par colis livré. Écris son gain $G$ (en €) en fonction du nombre $n$ de colis.",
         "G = 40 + 2 \\times n", "Le $40$ est fixe, chaque colis ajoute $2$ €.", 2, 40, 10, "n"),
        ("Un rectangle a une largeur de $3$ cm. Écris son aire $\\mathcal{A}$ (en cm²) en fonction de sa longueur $L$ (en cm).",
         "\\mathcal{A} = 3 \\times L", "Aire = longueur × largeur.", 3, 0, 5, "L"),
        ("Une application télécharge $12$ Mo par seconde. Écris la quantité $Q$ téléchargée (en Mo) en fonction du temps $t$ (en s).",
         "Q = 12 \\times t", "Chaque seconde ajoute $12$ Mo, rien n'est fixe au départ.", 12, 0, 5, "t"),
    ]
    for e, f, expl, a, b, v, X in prod:
        E(PB if b != 0 else I, "produire-formule", e,
          [expl, f"$ {f} $.", f"Test avec ${X} = {v}$ : $ {_calc(b, a, v)} $, ce qui correspond bien à la situation."],
          f"$ {f} $")
    # --- lecture inverse dans un tableau (8)
    inv = [("P", "n", 5, 2, 13), ("P", "c", 0, 4, 16), ("P", "n", 8, 3, 23), ("h", "t", 20, -2, 12),
           ("P", "n", 6, 5, 31), ("y", "x", 0, 7, 42), ("P", "d", 4, 2, 14), ("V", "t", 50, -5, 30)]
    for (Y, X, b, a, cible) in inv:
        xs = [1, 2, 3, 4, 5, 6]
        ys = [b + a * x for x in xs]
        assert cible in ys
        xc = xs[ys.index(cible)]
        E(A if b == 0 else I, "lecture-inverse",
          f"Tableau de $ {_formule(Y, X, b, a)} $ : pour ${X}$ = " + " ; ".join(f"${x}$" for x in xs)
          + f", on obtient ${Y}$ = " + " ; ".join(f"${y}$" for y in ys) + f". Pour quelle valeur de ${X}$ a-t-on ${Y} = {cible}$ ?",
          [f"On cherche ${cible}$ dans la ligne du bas, puis on remonte dans la colonne.",
           f"Vérification : $ {_calc(b, a, xc)} $."],
          f"${X} = {xc}$")
    # --- proportionnalité (8)
    tp = [([1, 2, 3, 5], 4, 0), ([1, 2, 4, 5], 2, 5), ([2, 3, 5, 8], 6, 0), ([1, 3, 4, 6], 3, 2),
          ([2, 4, 6, 10], 5, 0)]
    for xs, a, b in tp:
        ys = [a * x + b for x in xs]
        qs = [F(y, x) for x, y in zip(xs, ys)]
        if b == 0:
            c = [f"Quotients : " + " ; ".join(f"${_quot(y, x)}$" for x, y in zip(xs, ys)) + ".",
                 f"Tous les quotients sont égaux : c'est proportionnel, de coefficient ${a}$."]
            r = f"Oui, coefficient ${a}$"
        else:
            c = [f"${_quot(ys[0], xs[0])}$ mais ${_quot(ys[1], xs[1])}$.",
                 "Les quotients ne sont pas égaux : ce n'est pas proportionnel."]
            r = "Non"
        E(I, "proportionnalite",
          f"Le tableau suivant est-il un tableau de proportionnalité ? Ligne du haut : " + " ; ".join(f"${x}$" for x in xs)
          + ". Ligne du bas : " + " ; ".join(f"${y}$" for y in ys) + ".", c, r)
    E(P, "proportionnalite",
      "On représente $ P = 5 + 2 \\times n $ dans un repère. Les points sont alignés. Est-ce une situation de proportionnalité ?",
      ["Pour $n = 0$, on a $P = 5$ : la droite ne passe pas par l'origine.",
       "Il faut les deux conditions (alignés et passant par l'origine) : ce n'est pas proportionnel."],
      "Non")
    E(P, "proportionnalite",
      "On représente l'aire $ \\mathcal{A} = c \\times c $ d'un carré en fonction de son côté $c$ : on obtient les points $(1\\,;1)$, $(2\\,;4)$, $(3\\,;9)$. L'aire est-elle proportionnelle au côté ?",
      ["$\\dfrac{1}{1} = 1$, $\\dfrac{4}{2} = 2$, $\\dfrac{9}{3} = 3$ : les quotients ne sont pas égaux.",
       "Les points ne sont pas alignés : l'aire n'est pas proportionnelle au côté, même si elle augmente avec lui."],
      "Non")
    E(P, "proportionnalite",
      "On représente $ P = 4 \\times c $ (périmètre d'un carré) dans un repère. Que peut-on dire des points obtenus ?",
      ["Pour $c = 0$, $P = 0$ : la droite passe par l'origine.",
       "Les quotients $\\dfrac{P}{c}$ valent tous $4$ : les points sont alignés sur une droite passant par l'origine, c'est proportionnel."],
      "Alignés sur une droite passant par l'origine")
    # --- vocabulaire et lecture de graphique (8)
    voc = [
        (A, "Dans « le prix de l'essence en fonction du nombre de litres », quelle est la grandeur de départ (celle qu'on choisit) ?",
         "La grandeur nommée après « en fonction de » est celle qu'on choisit.", "Le nombre de litres"),
        (A, "Dans un tableau de valeurs, sur quelle ligne écrit-on la grandeur de départ ?",
         "En haut la grandeur de départ, en bas celle qui en dépend.", "Sur la ligne du haut"),
        (A, "Sur un graphique, quel axe porte la grandeur de départ ?",
         "Axe horizontal : la grandeur de départ ; axe vertical : celle qui en dépend.", "L'axe horizontal"),
        (A, "Dans le tableau du périmètre d'un carré, la colonne « côté $3$ cm, périmètre $12$ cm » donne quel point du graphique ?",
         "Abscisse d'abord (valeur du haut), ordonnée ensuite (valeur du bas).", "$(3\\,;12)$"),
        (I, "La taille d'un élève est-elle déterminée par son âge seul ?",
         "Deux élèves de $12$ ans n'ont pas forcément la même taille : à un âge correspondent plusieurs tailles possibles.",
         "Non"),
        (I, "On représente le prix de $n$ cahiers en fonction de $n$. Doit-on relier les points ?",
         "$2{,}5$ cahiers n'existent pas : les valeurs intermédiaires n'ont pas de sens, on laisse un nuage de points.",
         "Non, on laisse un nuage de points"),
        (I, "On représente la température en fonction de l'heure. Doit-on relier les points ?",
         "Une température à $10$ h $30$ a un sens : les valeurs intermédiaires existent, on relie.", "Oui"),
        (PB, "Sur un graphique, on lit $16$ °C à $10$ h, $24$ °C à $14$ h et $18$ °C à $18$ h. Décris l'évolution de la température entre $10$ h et $18$ h.",
         ["De $10$ h à $14$ h, la température passe de $16$ °C à $24$ °C : elle augmente.",
          "Parmi ces relevés, la plus haute valeur est $24$ °C, à $14$ h ; ensuite la température redescend à $18$ °C à $18$ h."],
         "Elle augmente de $10$ h à $14$ h (jusqu'à $24$ °C), puis elle diminue"),
    ]
    for d, e, c, r in voc:
        E(d, "vocabulaire-graphique", e, c, r)
    return E.fin()


# ================================================================ FRACTIONS
def _simp_txt(q_num, q_den):
    """Étape de simplification d'une fraction (texte LaTeX), vide si déjà irréductible."""
    g = gcd(q_num, q_den)
    if g == 1:
        return ""
    return f" = \\dfrac{{{q_num} \\div {g}}}{{{q_den} \\div {g}}} = {fl(F(q_num, q_den))}"


def g5_fractions():
    E = B()
    # --- quotient (6)
    for a, b in [(7, 3), (2, 5), (11, 4)]:
        E(A, "quotient", f"Quel nombre faut-il multiplier par ${b}$ pour obtenir ${a}$ ? Donne-le sous forme de fraction.",
          [f"Le nombre qui, multiplié par ${b}$, donne ${a}$ est le quotient $ {a} \\div {b} = {fb(a, b)} $.",
           f"Vérification : $ {fb(a, b)} \\times {b} = {a} $."],
          f"$ {fb(a, b)} $")
    for a, b in [(17, 5), (23, 4), (19, 6)]:
        q, r = divmod(a, b)
        E(I, "quotient", f"Écris $ {fb(a, b)} $ comme la somme d'un nombre entier et d'une fraction inférieure à $1$.",
          [f"Division euclidienne : $ {a} = {q} \\times {b} + {r} $.", f"Donc $ {fb(a, b)} = {q} + {fb(r, b)} $."],
          f"$ {q} + {fb(r, b)} $")
    # --- simplifier (8)
    for a, b in [(18, 24), (15, 25), (12, 30), (28, 42), (36, 48), (45, 60), (14, 35), (63, 81)]:
        g = gcd(a, b)
        q = F(a, b)
        E(A if g <= 6 else I, "simplifier", f"Simplifie la fraction $ {fb(a, b)} $ pour la rendre irréductible.",
          [f"Le plus grand diviseur commun de ${a}$ et ${b}$ est ${g}$.",
           f"$ {fb(a, b)} = \\dfrac{{{a} \\div {g}}}{{{b} \\div {g}}} = {fl(q)} $."],
          f"$ {fl(q)} $")
    # --- fractions égales (6)
    for a, b, d in [(2, 3, 12), (3, 4, 20), (5, 6, 18), (4, 7, 35), (7, 9, 45), (3, 8, 56)]:
        k = d // b
        assert k * b == d
        E(A if k <= 5 else I, "fractions-egales",
          f"Complète l'égalité $ {fb(a, b)} = \\dfrac{{\\ldots}}{{{d}}} $.",
          [f"$ {b} \\times {k} = {d} $ : on multiplie le dénominateur par ${k}$.",
           f"On multiplie aussi le numérateur par ${k}$ : $ {a} \\times {k} = {a*k} $."],
          f"$ {fb(a*k, d)} $")
    # --- comparer (8)
    comp = [((5, 9), (7, 9), "même dénominateur"), ((4, 11), (9, 11), "même dénominateur"),
            ((3, 5), (3, 8), "même numérateur"), ((7, 12), (7, 10), "même numérateur"),
            ((2, 3), (5, 6), "multiple"), ((3, 4), (5, 8), "multiple"), ((7, 10), (13, 20), "multiple"),
            ((9, 7), (6, 7), "un")]
    for (a, b), (c, d), cas in comp:
        q1, q2 = F(a, b), F(c, d)
        sgn = "<" if q1 < q2 else ">"
        if cas == "même dénominateur":
            co = [f"Même dénominateur ${b}$ : on compare les numérateurs ${a}$ et ${c}$."]
            diff = A
        elif cas == "même numérateur":
            co = [f"Même numérateur ${a}$ : la plus grande fraction est celle qui a le plus petit dénominateur (les parts sont plus grosses)."]
            diff = I
        elif cas == "multiple":
            k = d // b
            co = [f"${d}$ est un multiple de ${b}$ : $ {fb(a, b)} = {fb(a*k, d)} $.",
                  f"On compare $ {fb(a*k, d)} $ et $ {fb(c, d)} $ : on compare ${a*k}$ et ${c}$."]
            diff = I
        else:
            co = [f"Même dénominateur ${b}$ : on compare les numérateurs ${a}$ et ${c}$.",
                  f"Remarque : $ {fb(a, b)} > 1 $ car ${a} > {b}$, et $ {fb(c, d)} < 1 $."]
            diff = A
        E(diff, "comparer", f"Compare $ {fb(a, b)} $ et $ {fb(c, d)} $.", co,
          f"$ {fb(a, b)} {sgn} {fb(c, d)} $")
    # --- somme même dénominateur (6)
    for a, c, b, s in [(2, 3, 7, 1), (4, 5, 11, 1), (8, 3, 9, -1), (1, 5, 8, 1), (11, 5, 12, -1), (7, 2, 15, 1)]:
        n = a + s * c
        op = "+" if s > 0 else "-"
        E(A, "somme-meme-denominateur", f"Calcule $ {fb(a, b)} {op} {fb(c, b)} $ et simplifie si possible.",
          [f"Même dénominateur : on {'additionne' if s > 0 else 'soustrait'} les numérateurs, le dénominateur ne change pas.",
           f"$ {fb(a, b)} {op} {fb(c, b)} = {fb(n, b)}{_simp_txt(n, b)} $."],
          f"$ {fl(F(n, b))} $")
    # --- dénominateurs multiples (8)
    for (a, b), (c, d), s in [((1, 3), (5, 6), 1), ((3, 4), (1, 8), 1), ((2, 5), (3, 10), 1), ((5, 6), (1, 12), -1),
                              ((7, 9), (1, 3), -1), ((1, 2), (3, 14), 1), ((4, 7), (5, 21), -1), ((3, 5), (7, 20), 1)]:
        D = max(b, d)
        ka, kc = D // b, D // d
        assert ka * b == D and kc * d == D
        n = a * ka + s * c * kc
        op = "+" if s > 0 else "-"
        petit = (a, b, ka) if ka > 1 else (c, d, kc)
        x, y, k = petit
        E(I if k <= 3 else P, "somme-denominateurs-multiples",
          f"Calcule $ {fb(a, b)} {op} {fb(c, d)} $ et simplifie si possible.",
          [f"${D}$ est un multiple de ${y}$ : $ {fb(x, y)} = \\dfrac{{{x} \\times {k}}}{{{y} \\times {k}}} = {fb(x*k, D)} $.",
           f"$ {fb(a*ka, D)} {op} {fb(c*kc, D)} = {fb(n, D)}{_simp_txt(n, D)} $."],
          f"$ {fl(F(n, D))} $")
    # --- fraction d'un nombre (8)
    for a, b, n in [(3, 4, 20), (2, 5, 35), (5, 6, 42), (7, 8, 64)]:
        E(A, "fraction-d-un-nombre", f"Calcule $ {fb(a, b)} $ de ${n}$.",
          [f"Prendre $ {fb(a, b)} $ de ${n}$, c'est calculer $ {fb(a, b)} \\times {n} $ : on divise d'abord par ${b}$, puis on multiplie par ${a}$.",
           f"$ {n} \\div {b} = {n//b} $, puis $ {n//b} \\times {a} = {n//b*a} $."],
          f"$ {n//b*a} $")
    pbs = [
        ("Léa a lu les $ \\dfrac{3}{8} $ d'un livre de $240$ pages. Combien de pages a-t-elle lues ?", 3, 8, 240, "pages"),
        ("Dans un collège de $560$ élèves, les $ \\dfrac{3}{4} $ mangent à la cantine. Combien d'élèves mangent à la cantine ?", 3, 4, 560, "élèves"),
        ("Un réservoir de $60$ L est rempli aux $ \\dfrac{2}{3} $. Combien de litres contient-il ?", 2, 3, 60, "L"),
    ]
    for e, a, b, n, u in pbs:
        E(PB, "fraction-d-un-nombre", e,
          [f"$ {fb(a, b)} \\times {n} $ : $ {n} \\div {b} = {n//b} $, puis $ {n//b} \\times {a} = {n//b*a} $."],
          f"${n//b*a}$ {u}")
    s = F(1, 4) + F(3, 8)
    E(PB, "fraction-d-un-nombre",
      "Paul mange $ \\dfrac{1}{4} $ d'un gâteau et sa sœur $ \\dfrac{3}{8} $. Quelle fraction du gâteau ont-ils mangée ? Quelle fraction reste-t-il ?",
      ["$ \\dfrac{1}{4} = \\dfrac{2}{8} $, donc $ \\dfrac{2}{8} + \\dfrac{3}{8} = \\dfrac{5}{8} $.",
       f"Il reste $ 1 - \\dfrac{{5}}{{8}} = \\dfrac{{8}}{{8}} - \\dfrac{{5}}{{8}} = {fl(1 - s)} $."],
      f"Mangé : $ {fl(s)} $ ; reste : $ {fl(1 - s)} $")
    return E.fin()


# ================================================================ NOMBRES RELATIFS
def _addition_expl(a, b):
    s = a + b
    if a == 0 or b == 0:
        return "Ajouter $0$ ne change rien."
    if (a > 0) == (b > 0):
        return (f"Même signe : on additionne les distances à zéro ($ {nb(abs(a))} + {nb(abs(b))} = {nb(abs(s))} $) "
                f"et on garde le signe commun.")
    g = a if abs(a) > abs(b) else b
    if s == 0:
        return "Les deux nombres sont opposés : leur somme est nulle."
    return (f"Signes contraires : on soustrait les distances à zéro ($ {nb(max(abs(a), abs(b)))} - {nb(min(abs(a), abs(b)))} = {nb(abs(s))} $) "
            f"et on garde le signe de ${nb(g)}$, qui est le plus éloigné de zéro.")


def _ecrire_somme(termes):
    out = nb(termes[0])
    for t in termes[1:]:
        out += (" - " if t < 0 else " + ") + nb(abs(t))
    return out


def g5_nombres_relatifs():
    E = B()
    # --- opposé et distance à zéro (6)
    for x in [-7, F(9, 2), 0]:
        xs = nb(x)
        E(A, "oppose-distance-zero", f"Quel est l'opposé de ${xs}$ ?",
          "Deux nombres opposés ont la même distance à zéro et des signes contraires." if x != 0
          else "Zéro est son propre opposé.",
          f"${nb(-x)}$")
    for x in [-12, F(16, 5), F(-3, 4)]:
        E(A, "oppose-distance-zero", f"Quelle est la distance à zéro du nombre ${nb(x)}$ ?",
          "La distance à zéro est toujours positive : on enlève le signe.",
          f"${nb(abs(x))}$")
    # --- comparer (8)
    for a, b in [(-8, -3), (-2, 1), (F(-9, 2), F(-81, 20)), (-15, -51), (F(-1, 10), F(-1, 100))]:
        sgn = "<" if a < b else ">"
        if a < 0 and b < 0:
            c = "Deux négatifs : le plus grand est celui qui a la plus petite distance à zéro (le plus à droite sur la droite graduée)."
        else:
            c = "Un positif est toujours plus grand qu'un négatif."
        E(A if isinstance(a, int) else I, "comparer", f"Compare ${nb(a)}$ et ${nb(b)}$.", c, f"${nb(a)} {sgn} {nb(b)}$")
    for lst in [[3, -5, 0, -1, 2], [F(-5, 2), -3, F(3, 2), -1, F(-1, 2)], [-12, 8, -20, -7, 15]]:
        tri = sorted(lst)
        E(I, "comparer", "Range dans l'ordre croissant : " + " ; ".join(f"${nb(x)}$" for x in lst) + ".",
          ["Sur la droite graduée, on lit de gauche à droite : les négatifs les plus éloignés de zéro d'abord."],
          "$" + " < ".join(nb(x) for x in tri) + "$")
    # --- addition (10)
    adds = [(-3, -5), (7, -3), (2, -6), (-9, 4), (-12, 12), (-8, -11), (15, -23), (F(-5, 2), F(-3, 2)), (F(32, 5), F(-49, 5)), (-17, 26)]
    for a, b in adds:
        E(A if isinstance(a, int) and abs(a) < 10 else I, "addition",
          f"Calcule $ {rel(a)} + {rel(b)} $.", [_addition_expl(a, b), f"$ {rel(a)} + {rel(b)} = {nb(a+b)} $."],
          f"${nb(a+b)}$")
    # --- soustraction (10)
    subs = [(5, 8), (5, -3), (-4, 6), (-4, -9), (-7, -2), (3, 10), (-11, 5), (0, -6), (F(-5, 2), F(3, 2)), (F(-12, 5), F(-27, 5))]
    for a, b in subs:
        E(A if isinstance(a, int) and abs(a) < 6 else I, "soustraction",
          f"Calcule $ {rel(a)} - {rel(b)} $.",
          [f"Soustraire un nombre, c'est ajouter son opposé : $ {rel(a)} - {rel(b)} = {rel(a)} + {rel(-b)} $.",
           _addition_expl(a, -b), f"Résultat : ${nb(a-b)}$."],
          f"${nb(a-b)}$")
    # --- enchaîner (8)
    for t in [[-7, 2, -5, 9], [4, -9, 3, -6], [-3, -8, 12], [10, -4, -15, 2], [-6, 13, -2, -9],
              [F(5, 2), -4, F(-3, 2), 6], [-20, 7, 8, -1], [12, -30, 5, 9]]:
        pos = [x for x in t if x > 0]
        neg = [x for x in t if x < 0]
        sp, sn = sum(pos), sum(neg)
        E(I if len(t) <= 3 or all(isinstance(x, int) for x in t) else P, "enchainer",
          f"Calcule $ {_ecrire_somme(t)} $.",
          [f"On regroupe les positifs : $ {' + '.join(nb(x) for x in pos)} = {nb(sp)} $." if len(pos) > 1
           else f"Un seul nombre positif : ${nb(sp)}$.",
           f"Puis les négatifs : $ {_ecrire_somme(neg)} = {nb(sn)} $." if len(neg) > 1
           else f"Un seul nombre négatif : ${nb(sn)}$.",
           f"Enfin $ {nb(sp)} {'-' if sn < 0 else '+'} {nb(abs(sn))} = {nb(sp+sn)} $."],
          f"${nb(sum(t))}$")
    # --- problèmes (8)
    E(PB, "probleme", "À $6$ h, le thermomètre indique $-4$ °C ; à $14$ h, il indique $7$ °C. De combien de degrés la température a-t-elle augmenté ?",
      [f"Écart : $ 7 - (-4) = 7 + 4 = {7+4} $."], f"${7+4}$ °C")
    E(PB, "probleme", "Un plongeur se trouve à $-18$ m. Il remonte de $7$ m. À quelle altitude se trouve-t-il ?",
      [f"$ -18 + 7 = {-18+7} $."], f"${-18+7}$ m")
    E(PB, "probleme", "Sur son compte, Inès a $35$ €. Elle paie un achat de $52$ €. Quel est son nouveau solde ?",
      [f"$ 35 - 52 = 35 + (-52) = {35-52} $ : le compte est à découvert."], f"${35-52}$ €")
    E(PB, "probleme", "Un ascenseur est au niveau $-2$ (parking). Il monte de $5$ étages. À quel niveau arrive-t-il ?",
      [f"$ -2 + 5 = {-2+5} $."], f"Niveau ${-2+5}$")
    E(PB, "probleme", "Le mathématicien Archimède est né vers l'an $-287$ et mort vers l'an $-212$. À quel âge environ est-il mort ?",
      [f"Durée : $ -212 - (-287) = -212 + 287 = {-212+287} $."], f"Environ ${-212+287}$ ans")
    E(PB, "probleme", "Il fait $-12$ °C à Moscou et $5$ °C à Paris. Quel est l'écart de température entre les deux villes ?",
      [f"$ 5 - (-12) = 5 + 12 = {5+12} $."], f"${5+12}$ °C")
    E(PB, "probleme", "Un sous-marin est à $-250$ m et un hélicoptère vole juste au-dessus, à $300$ m d'altitude. Quelle distance verticale les sépare ?",
      [f"$ 300 - (-250) = 300 + 250 = {300+250} $."], f"${300+250}$ m")
    E(PB, "probleme", "Au lever du jour, il fait $-3$ °C. La température baisse de $5$ °C, puis monte de $9$ °C. Quelle température fait-il à la fin ?",
      [f"$ -3 - 5 + 9 = -8 + 9 = {-3-5+9} $."], f"${-3-5+9}$ °C")
    return E.fin()


# ================================================================ OPÉRATIONS
def g5_operations():
    E = B()
    # --- priorités (10)
    pri = [
        ("3 + 4 \\times 5", 3 + 4 * 5, "La multiplication passe avant l'addition : $ 3 + 20 = 23 $."),
        ("(3 + 4) \\times 5", (3 + 4) * 5, "Les parenthèses d'abord : $ 7 \\times 5 = 35 $."),
        ("20 - 8 - 5", 20 - 8 - 5, "Même priorité : on calcule de gauche à droite, $ 20 - 8 = 12 $ puis $ 12 - 5 = 7 $."),
        ("36 \\div 6 \\div 3", 36 // 6 // 3, "Même priorité : on calcule de gauche à droite, $ 36 \\div 6 = 6 $ puis $ 6 \\div 3 = 2 $."),
        ("50 - 6 \\times 7", 50 - 6 * 7, "La multiplication d'abord : $ 50 - 42 = 8 $."),
        ("7 \\times 8 - 4 \\times 9", 7 * 8 - 4 * 9, "Les deux produits d'abord : $ 56 - 36 = 20 $."),
        ("45 + 30 \\div 5", 45 + 30 // 5, "La division d'abord : $ 45 + 6 = 51 $."),
        ("(64 - 24) \\div 8", (64 - 24) // 8, "Les parenthèses d'abord : $ 40 \\div 8 = 5 $."),
        ("3 \\times (12 - 5) + 4", 3 * (12 - 5) + 4, "Parenthèses : $ 12 - 5 = 7 $ ; produit : $ 3 \\times 7 = 21 $ ; puis $ 21 + 4 = 25 $."),
        ("100 - 4 \\times (7 + 8)", 100 - 4 * (7 + 8), "Parenthèses : $ 15 $ ; produit : $ 4 \\times 15 = 60 $ ; puis $ 100 - 60 = 40 $."),
    ]
    for k, (e, r, c) in enumerate(pri):
        assert c.endswith(f"{r} $.")
        E(A if k < 5 else I, "priorites", f"Calcule $ {e} $.", c, f"$ {r} $")
    # --- division euclidienne (8)
    for a, b in [(17, 5), (100, 7), (253, 12), (1000, 9), (365, 7)]:
        q, r = divmod(a, b)
        E(A if a < 200 else I, "division-euclidienne",
          f"Effectue la division euclidienne de ${nb(a)}$ par ${b}$ : donne le quotient et le reste.",
          [f"$ {nb(a)} = {b} \\times {q} + {r} $ avec $ {r} < {b} $."], f"Quotient ${q}$, reste ${r}$")
    q, r = divmod(125, 6)
    E(PB, "division-euclidienne", "On range $125$ œufs dans des boîtes de $6$. Combien de boîtes pleines obtient-on et combien d'œufs restent ?",
      [f"$ 125 = 6 \\times {q} + {r} $."], f"${q}$ boîtes pleines, ${r}$ œufs restants")
    q, r = divmod(230, 52)
    E(PB, "division-euclidienne", "Un collège emmène $230$ élèves en sortie dans des cars de $52$ places. Combien de cars faut-il réserver ?",
      [f"$ 230 = 52 \\times {q} + {r} $ : ${q}$ cars pleins, et il reste ${r}$ élèves.", f"Il faut un car de plus pour eux : ${q+1}$ cars."],
      f"${q+1}$ cars")
    q, r = divmod(347, 7)
    E(PB, "division-euclidienne", "Combien de semaines complètes et de jours y a-t-il dans $347$ jours ?",
      [f"$ 347 = 7 \\times {q} + {r} $."], f"${q}$ semaines et ${r}$ jours")
    # --- divisibilité (8)
    def chiffres(n):
        return [int(c) for c in str(n)]
    for n, d in [(4251, 3), (4251, 9), (6831, 9), (7425, 5), (8136, 3), (5002, 3), (13770, 10), (2754, 9)]:
        if d in (3, 9):
            s = sum(chiffres(n))
            ok = s % d == 0
            c = [f"Somme des chiffres : $ {' + '.join(str(x) for x in chiffres(n))} = {s} $.",
                 f"${s}$ " + ("est" if ok else "n'est pas") + f" un multiple de ${d}$."]
        else:
            ok = n % d == 0
            u = n % 10
            c = [(f"Un nombre est divisible par $5$ si son chiffre des unités est $0$ ou $5$." if d == 5
                  else "Un nombre est divisible par $10$ si son chiffre des unités est $0$.")
                 + f" Ici, le chiffre des unités est ${u}$."]
        E(A if d in (5, 10) else I, "divisibilite", f"Le nombre ${nb(n)}$ est-il divisible par ${d}$ ?", c, "Oui" if ok else "Non")
    # --- vocabulaire (6)
    voc = [
        ("L'expression $ 3 + 4 \\times 5 $ est-elle une somme ou un produit ?",
         "La dernière opération effectuée est l'addition.", "Une somme"),
        ("L'expression $ (3 + 4) \\times 5 $ est-elle une somme ou un produit ?",
         "La dernière opération effectuée est la multiplication.", "Un produit"),
        ("Dans $ 7 \\times 4 $, comment s'appellent les nombres $7$ et $4$ ?",
         "Les nombres d'un produit sont des facteurs (les termes, c'est pour une somme ou une différence).", "Des facteurs"),
        ("$ 21 = 3 \\times 7 $. Complète : « $21$ est un … de $3$ » et « $3$ est un … de $21$ ».",
         "Comme $ 21 = 3 \\times 7 $, $21$ est dans la table de $3$ : c'est un multiple de $3$, et $3$ est un diviseur de $21$.", "Multiple ; diviseur"),
        ("L'expression $ 12 - 2 \\times 5 $ est-elle une différence ou un produit ?",
         "On calcule d'abord $ 2 \\times 5 $, la dernière opération est la soustraction.", "Une différence"),
        ("Un nombre divisible par $3$ est-il toujours divisible par $9$ ?",
         "Non : $12$ est divisible par $3$ ($1 + 2 = 3$) mais pas par $9$. Dans l'autre sens, divisible par $9$ entraîne divisible par $3$.",
         "Non"),
    ]
    for k, (e, c, r) in enumerate(voc):
        E(A if k < 4 else I, "vocabulaire", e, c, r)
    # --- distributivité (6)
    for k, m, d in [(12, 100, 1), (7, 100, -1), (15, 100, 2), (23, 100, -2), (25, 10, 2), (8, 1000, -1)]:
        r = k * (m + d)
        op = "+" if d > 0 else "-"
        E(I, "distributivite", f"Calcule astucieusement $ {k} \\times {nb(m + d)} $.",
          [f"$ {k} \\times {nb(m + d)} = {k} \\times ({nb(m)} {op} {abs(d)}) = {nb(k*m)} {op} {k*abs(d)} = {nb(r)} $."],
          f"$ {nb(r)} $")
    # --- décimaux (6)
    dz = [("4,8", "0,6", 10), ("12", "0,25", 100), ("7,2", "0,9", 10), ("1,5", "0,03", 100)]
    for a, b, m in dz:
        da, db = Decimal(a.replace(",", ".")), Decimal(b.replace(",", "."))
        q = da / db
        E(I, "decimaux", f"Calcule $ {nb(da)} \\div {nb(db)} $.",
          [f"On multiplie les deux nombres par ${m}$ pour que le diviseur soit entier : $ {nb(da*m)} \\div {nb(db*m)} $.",
           f"$ {nb(da*m)} \\div {nb(db*m)} = {nb(q)} $."],
          f"$ {nb(q)} $")
    E(A, "decimaux", "Calcule $ 47 \\div 1\\,000 $.",
      "Diviser par $1\\,000$ décale la virgule de trois rangs vers la gauche.", f"$ {nb(Decimal(47) / 1000)} $")
    E(P, "decimaux", "La calculatrice affiche $ 4{,}2 \\times 19{,}8 = 831{,}6 $. Est-ce vraisemblable ?",
      [f"Ordre de grandeur : $ 4 \\times 20 = 80 $.",
       f"$831{{,}}6$ est dix fois trop grand : la virgule est mal placée, le bon résultat est ${nb(Decimal('4.2') * Decimal('19.8'))}$."],
      f"Non, le bon résultat est ${nb(Decimal('4.2') * Decimal('19.8'))}$")
    # --- programmes de calcul (6)
    progs = [("ajoute $3$, puis multiplie par $5$", lambda n: (n + 3) * 5, "(n + 3) \\times 5", 4, True),
             ("multiplie par $5$, puis ajoute $3$", lambda n: n * 5 + 3, "n \\times 5 + 3", 4, False),
             ("soustrais $2$, puis multiplie par $6$", lambda n: (n - 2) * 6, "(n - 2) \\times 6", 9, True),
             ("multiplie par $4$, puis soustrais $7$", lambda n: n * 4 - 7, "n \\times 4 - 7", 6, False),
             ("ajoute $8$, puis divise par $2$", lambda n: (n + 8) // 2, "(n + 8) \\div 2", 12, True),
             ("multiplie par $3$, ajoute $5$, puis multiplie par $2$", lambda n: (n * 3 + 5) * 2, "(n \\times 3 + 5) \\times 2", 7, True)]
    for txt, f, ex, n, par in progs:
        E(I if par else A, "programme-calcul",
          f"Programme : « choisis un nombre $n$, {txt} ». Écris le programme en une seule expression, puis calcule-la pour $ n = {n} $.",
          ["L'addition (ou la soustraction) doit être faite avant la multiplication (ou la division), alors qu'elle n'est pas prioritaire : il faut des parenthèses." if par
           else "La multiplication est déjà prioritaire : pas besoin de parenthèses.",
           f"$ {ex} $ ; pour $n = {n}$ : $ {ex.replace('n', str(n))} = {f(n)} $."],
          f"$ {ex} $ ; $ {f(n)} $")
    return E.fin()


# ================================================================ PARALLÉLOGRAMMES
def g5_parallelogrammes():
    E = B()
    # --- aire (8)
    for b, h, c in [(8, 5, 6), (12, 7, 9), (F(13, 2), 4, 5), (15, 6, 8), (F(42, 5), 5, 7), (20, F(23, 2), 13)]:
        a = F(b) * F(h)
        E(A if isinstance(b, int) and isinstance(h, int) else I, "aire",
          f"Un parallélogramme a une base de ${nb(b)}$ cm, une hauteur relative à cette base de ${nb(h)}$ cm et un autre côté de ${nb(c)}$ cm. Calcule son aire.",
          [f"Aire = base $\\times$ hauteur ; la longueur ${nb(c)}$ cm de l'autre côté ne sert pas.",
           f"$ {nb(b)} \\times {nb(h)} = {nb(a)} $ cm²."],
          f"${nb(a)}$ cm²")
    for D, d in [(12, 8), (15, 6)]:
        E(I, "aire", f"Un losange a des diagonales de ${D}$ cm et ${d}$ cm. Calcule son aire.",
          [f"Aire d'un losange : $ \\dfrac{{D \\times d}}{{2}} = \\dfrac{{{D} \\times {d}}}{{2}} = \\dfrac{{{D*d}}}{{2}} = {nb(F(D*d, 2))} $ cm²."],
          f"${nb(F(D*d, 2))}$ cm²")
    # --- longueurs (8)
    for ab, bc in [(5, 3), (F(37, 5), F(21, 5)), (11, 7)]:
        p = 2 * (F(ab) + F(bc))
        E(A, "longueurs", f"$ABCD$ est un parallélogramme avec $AB = {nb(ab)}$ cm et $BC = {nb(bc)}$ cm. Donne $CD$, $AD$ et le périmètre.",
          ["Dans un parallélogramme, les côtés opposés ont la même longueur.",
           f"$CD = AB = {nb(ab)}$ cm, $AD = BC = {nb(bc)}$ cm, périmètre $ = 2 \\times ({nb(ab)} + {nb(bc)}) = {nb(p)} $ cm."],
          f"$CD = {nb(ab)}$ cm ; $AD = {nb(bc)}$ cm ; $P = {nb(p)}$ cm")
    for ac in [8, F(27, 2), 15]:
        E(A, "longueurs", f"$ABCD$ est un parallélogramme de centre $O$, avec $AC = {nb(ac)}$ cm. Combien mesure $AO$ ?",
          ["Les diagonales d'un parallélogramme se coupent en leur milieu : $O$ est le milieu de $[AC]$.",
           f"$ AO = {nb(ac)} \\div 2 = {nb(F(ac)/2)} $ cm."],
          f"${nb(F(ac)/2)}$ cm")
    for ob in [F(18, 5), 7]:
        E(I, "longueurs", f"$EFGH$ est un parallélogramme de centre $O$, avec $OF = {nb(ob)}$ cm. Combien mesure la diagonale $[FH]$ ?",
          ["$O$ est le milieu de la diagonale $[FH]$.", f"$ FH = 2 \\times {nb(ob)} = {nb(2*F(ob))} $ cm."],
          f"${nb(2*F(ob))}$ cm")
    # --- angles (8)
    for k, a in enumerate([70, 115, 48, 132, 90, 63, 101, 36]):
        if k == 4:
            E(I, "angles", "$ABCD$ est un parallélogramme et $ \\widehat{A} = 90° $. Donne les trois autres angles, puis la nature précise de $ABCD$.",
              ["Angles opposés égaux : $ \\widehat{C} = 90° $. Angles consécutifs supplémentaires : $ \\widehat{B} = \\widehat{D} = 180° - 90° = 90° $.",
               "Un parallélogramme qui a un angle droit est un rectangle."],
              "$90°$ partout ; c'est un rectangle")
            continue
        E(A if k < 4 else I, "angles", f"$ABCD$ est un parallélogramme et $ \\widehat{{A}} = {a}° $. Donne $ \\widehat{{B}} $, $ \\widehat{{C}} $ et $ \\widehat{{D}} $.",
          [f"Angles opposés égaux : $ \\widehat{{C}} = \\widehat{{A}} = {a}° $.",
           f"Angles consécutifs supplémentaires : $ \\widehat{{B}} = 180° - {a}° = {180-a}° $, et $ \\widehat{{D}} = \\widehat{{B}} $."],
          f"$ \\widehat{{B}} = {180-a}° $ ; $ \\widehat{{C}} = {a}° $ ; $ \\widehat{{D}} = {180-a}° $")
    # --- nature d'après les diagonales (8)
    nat = [
        ("se coupent en leur milieu", "Diagonales qui se coupent en leur milieu : parallélogramme.", "Un parallélogramme"),
        ("se coupent en leur milieu et ont la même longueur", "Milieu commun : parallélogramme ; même longueur en plus : rectangle.", "Un rectangle"),
        ("se coupent en leur milieu et sont perpendiculaires", "Milieu commun : parallélogramme ; perpendiculaires en plus : losange.", "Un losange"),
        ("se coupent en leur milieu, ont la même longueur et sont perpendiculaires", "Les trois conditions réunies : rectangle et losange à la fois.", "Un carré"),
        ("sont perpendiculaires, mais ne se coupent pas en leur milieu", "Sans milieu commun, ce n'est même pas un parallélogramme (par exemple un cerf-volant).", "On ne peut pas conclure : ce n'est pas un parallélogramme"),
    ]
    for k, (d, c, r) in enumerate(nat):
        E(A if k < 3 else I, "nature-diagonales", f"Les diagonales d'un quadrilatère $ABCD$ {d}. Quelle est sa nature ?", c, r)
    E(I, "nature-diagonales", "Un rectangle a deux côtés consécutifs de même longueur. Quelle est sa nature précise ?",
      "C'est aussi un losange (deux côtés consécutifs égaux) : rectangle et losange, c'est un carré.", "Un carré")
    E(I, "nature-diagonales", "Un parallélogramme $MNOP$ a des diagonales $[MO]$ et $[NP]$ qui mesurent toutes les deux $9$ cm. Quelle est sa nature ?",
      "Un parallélogramme dont les diagonales ont la même longueur est un rectangle.", "Un rectangle")
    E(I, "nature-diagonales", "Un parallélogramme $RSTU$ a deux côtés consécutifs $RS = ST = 6$ cm. Quelle est sa nature ?",
      "Un parallélogramme qui a deux côtés consécutifs de même longueur est un losange.", "Un losange")
    # --- démontrer, vrai ou faux (6)
    dem = [
        (I, "Le quadrilatère non croisé $EFGH$ vérifie $EF = GH = 6$ cm et $FG = HE = 4$ cm. Que peut-on en conclure ? Rédige.",
         ["On sait que les côtés opposés de $EFGH$ ont deux à deux la même longueur.",
          "Or, si un quadrilatère non croisé a ses côtés opposés deux à deux de même longueur, alors c'est un parallélogramme.",
          "Donc $EFGH$ est un parallélogramme."], "$EFGH$ est un parallélogramme"),
        (I, "Dans le quadrilatère $ABCD$, le point $I$ est le milieu de $[AC]$ et de $[BD]$. Que peut-on en conclure ? Rédige.",
         ["On sait que les diagonales $[AC]$ et $[BD]$ se coupent en leur milieu $I$.",
          "Or, si les diagonales d'un quadrilatère se coupent en leur milieu, alors c'est un parallélogramme.",
          "Donc $ABCD$ est un parallélogramme."], "$ABCD$ est un parallélogramme"),
        (P, "Le quadrilatère non croisé $KLMN$ a deux côtés opposés $[KL]$ et $[MN]$ parallèles et de même longueur $5$ cm. Est-ce un parallélogramme ?",
         ["Deux côtés opposés à la fois parallèles et de même longueur suffisent.", "Donc $KLMN$ est un parallélogramme."], "Oui"),
        (P, "Un quadrilatère a seulement deux côtés opposés de même longueur (les deux autres sont différents). Est-ce forcément un parallélogramme ?",
         "Non : un trapèze isocèle a deux côtés opposés de même longueur sans être un parallélogramme. Il faut les deux paires, ou une paire parallèle et de même longueur.",
         "Non"),
        (A, "Vrai ou faux : un carré est un rectangle.",
         "Un carré est un parallélogramme qui a un angle droit : c'est donc bien un rectangle, avec une condition de plus.", "Vrai"),
        (A, "Vrai ou faux : les diagonales d'un parallélogramme ont toujours la même longueur.",
         "C'est vrai seulement pour les rectangles (et les carrés). Dans un parallélogramme quelconque, elles se coupent en leur milieu mais n'ont pas la même longueur.",
         "Faux"),
    ]
    for d, e, c, r in dem:
        E(d, "demontrer", e, c, r)
    # --- conversions d'aires (6)
    conv = [(Decimal("2.5"), "m²", "cm²", 10000), (Decimal(450), "cm²", "dm²", F(1, 100)), (Decimal(3), "m²", "dm²", 100),
            (Decimal(75000), "cm²", "m²", F(1, 10000)), (Decimal("0.8"), "dm²", "cm²", 100), (Decimal(12), "dm²", "m²", F(1, 100))]
    for v, u1, u2, k in conv:
        r = v * _D(k)
        verbe = f"on multiplie par ${nb(k)}$" if k >= 1 else f"on divise par ${nb(1/F(k))}$"
        E(A if k in (100, F(1, 100)) else I, "conversions-aires", f"Convertis ${nb(v)}$ {u1} en {u2}.",
          [f"Pour les aires, chaque rang compte pour $100$ : {verbe}.", f"${nb(v)}$ {u1} $=$ ${nb(r)}$ {u2}."],
          f"${nb(r)}$ {u2}")
    # --- problèmes (6)
    a = 32 * 18
    E(PB, "probleme", "Un terrain a la forme d'un parallélogramme de base $32$ m et de hauteur $18$ m. Le gazon coûte $4$ € le m². Combien coûte le gazon pour tout le terrain ?",
      [f"Aire : $ 32 \\times 18 = {nb(a)} $ m².", f"Prix : $ {nb(a)} \\times 4 = {nb(4*a)} $ €."], f"${nb(4*a)}$ €")
    E(PB, "probleme", "Une figure en forme de L est un rectangle de $10$ cm sur $6$ cm auquel on a retiré, dans un coin, un rectangle de $4$ cm sur $3$ cm. Calcule son aire.",
      [f"On encadre par le grand rectangle : $ 10 \\times 6 = 60 $ cm².", f"On retranche le coin : $ 60 - 4 \\times 3 = {60-12} $ cm²."], f"${60-12}$ cm²")
    E(PB, "probleme", "Un parallélogramme $ABCD$ a un périmètre de $30$ cm et $AB = 9$ cm. Combien mesure $BC$ ?",
      [f"$ AB + BC $ vaut la moitié du périmètre : $ 30 \\div 2 = 15 $ cm.", f"$ BC = 15 - 9 = {15-9} $ cm."], f"${15-9}$ cm")
    E(P, "probleme", "Dans un parallélogramme $ABCD$, l'angle $ \\widehat{A} $ mesure le double de l'angle $ \\widehat{B} $. Calcule ces deux angles.",
      ["Angles consécutifs supplémentaires : $ \\widehat{A} + \\widehat{B} = 180° $, soit $ 2\\widehat{B} + \\widehat{B} = 3\\widehat{B} = 180° $.",
       f"$ \\widehat{{B}} = 180° \\div 3 = {180//3}° $ et $ \\widehat{{A}} = {2*(180//3)}° $."],
      f"$ \\widehat{{A}} = {2*(180//3)}° $ ; $ \\widehat{{B}} = {180//3}° $")
    v = Decimal("3.5") * Decimal("2.4")
    E(PB, "probleme", "Un massif de fleurs a la forme d'un parallélogramme de base $3{,}5$ m et de hauteur $2{,}4$ m. Quelle est son aire ?",
      [f"$ 3{{,}}5 \\times 2{{,}}4 = {nb(v)} $ m²."], f"${nb(v)}$ m²")
    E(PB, "probleme", "Une pièce rectangulaire mesure $4{,}5$ m sur $3$ m. Quelle est son aire en m², puis en dm² ?",
      [f"$ 4{{,}}5 \\times 3 = {nb(Decimal('13.5'))} $ m².", f"$1$ m² $= 100$ dm², donc ${nb(Decimal('13.5'))}$ m² $=$ ${nb(Decimal('1350'))}$ dm²."],
      f"${nb(Decimal('13.5'))}$ m² ; ${nb(1350)}$ dm²")
    return E.fin()


# ================================================================ PENSÉE INFORMATIQUE
def g5_pensee_informatique():
    E = B()
    # --- prévoir la sortie (10)
    prev = [
        (6, "nombre × nombre − nombre", lambda a: a * a - a, "{a} \\times {a} - {a} = {p} - {a} = {r}", lambda a: a * a),
        (5, "nombre × 3 + 4", lambda a: a * 3 + 4, "{a} \\times 3 + 4 = {p} + 4 = {r}", lambda a: a * 3),
        (7, "(nombre + 2) × 3", lambda a: (a + 2) * 3, "({a} + 2) \\times 3 = {p} \\times 3 = {r}", lambda a: a + 2),
        (4, "nombre + nombre × 10", lambda a: a + a * 10, "{a} + {a} \\times 10 = {a} + {p} = {r}", lambda a: a * 10),
        (9, "100 − nombre × 8", lambda a: 100 - a * 8, "100 - {a} \\times 8 = 100 - {p} = {r}", lambda a: a * 8),
        (8, "nombre × nombre + 1", lambda a: a * a + 1, "{a} \\times {a} + 1 = {p} + 1 = {r}", lambda a: a * a),
        (12, "(nombre − 2) × (nombre + 2)", lambda a: (a - 2) * (a + 2), "({a} - 2) \\times ({a} + 2) = {p} \\times {q} = {r}", lambda a: a - 2),
        (20, "nombre ÷ 4 + 6", lambda a: a // 4 + 6, "{a} \\div 4 + 6 = {p} + 6 = {r}", lambda a: a // 4),
        (3, "2 × nombre × nombre", lambda a: 2 * a * a, "2 \\times {a} \\times {a} = {p} \\times {a} = {r}", lambda a: 2 * a),
        (15, "(nombre + 5) ÷ 4", lambda a: (a + 5) // 4, "({a} + 5) \\div 4 = {p} \\div 4 = {r}", lambda a: a + 5),
    ]
    for k, (a, code, f, calc, part) in enumerate(prev):
        r = f(a)
        c = calc.format(a=a, p=part(a), q=a + 2, r=r)
        E(A if k < 5 else I, "prevoir-sortie",
          f"L'utilisateur saisit ${a}$ dans la variable « nombre ». Le programme exécute « afficher {code} ». Qu'affiche-t-il ?",
          ["On remplace la variable par sa valeur et on respecte les priorités, comme en mathématiques.", f"$ {c} $."],
          f"$ {r} $")
    # --- l'ordre de la séquence (8)
    for n, p, q in [(3, 2, 5), (4, 6, 3), (10, 1, 7), (2, 9, 4)]:
        ra, rb = (n + p) * q, n * q + p
        E(I, "sequence",
          f"Programme A : choisir ${n}$, ajouter ${p}$, multiplier par ${q}$, afficher. Programme B : choisir ${n}$, multiplier par ${q}$, ajouter ${p}$, afficher. Qu'affiche chaque programme ?",
          [f"A : $ ({n} + {p}) \\times {q} = {ra} $.", f"B : $ {n} \\times {q} + {p} = {rb} $.",
           "Mêmes instructions, ordre différent : résultats différents."],
          f"A affiche ${ra}$, B affiche ${rb}$")
    for n, ops in [(5, [("multiplier par", 2), ("ajouter", 7), ("multiplier par", 3)]),
                   (8, [("soustraire", 3), ("multiplier par", 4), ("ajouter", 10)]),
                   (6, [("ajouter", 4), ("multiplier par", 5), ("soustraire", 20)]),
                   (9, [("multiplier par", 3), ("soustraire", 7), ("multiplier par", 2)])]:
        v, etapes = n, []
        for o, x in ops:
            w = v * x if o == "multiplier par" else v + x if o == "ajouter" else v - x
            sym = "\\times" if o == "multiplier par" else "+" if o == "ajouter" else "-"
            etapes.append(f"$ {v} {sym} {x} = {w} $")
            v = w
        E(A, "sequence",
          f"On exécute dans l'ordre : choisir ${n}$, " + ", ".join(f"{o} ${x}$" for o, x in ops) + ", afficher. Quel nombre est affiché ?",
          ["On exécute les instructions une par une, de haut en bas : " + " ; ".join(etapes) + "."],
          f"$ {v} $")
    # --- expression informatique (8)
    exi = [
        (A, "Traduis la moyenne de deux notes $ m = \\dfrac{a + b}{2} $ en expression informatique écrite sur une ligne.",
         "La barre de fraction regroupait le numérateur : écrite à plat, il faut des parenthèses.", "(a + b) / 2"),
        (A, "Traduis le périmètre d'un rectangle $ P = 2 \\times (L + \\ell) $ en expression informatique, avec les variables longueur et largeur.",
         "On garde les parenthèses et on remplace chaque grandeur par sa variable.", "2 * (longueur + largeur)"),
        (A, "Traduis l'aire d'un triangle $ \\mathcal{A} = \\dfrac{b \\times h}{2} $ en expression informatique.",
         "Le produit est regroupé au numérateur.", "(b * h) / 2"),
        (I, "Traduis la moyenne de trois notes $ \\dfrac{a + b + c}{3} $ en expression informatique.",
         "Tout le numérateur doit être entre parenthèses.", "(a + b + c) / 3"),
        (I, "Pour $a = 4$ et $b = 6$, quelle valeur calcule l'expression informatique « a + b / 2 » ?",
         [f"La division est prioritaire : $ 4 + 6 \\div 2 = 4 + 3 = {4 + 6 // 2} $.", "Ce n'est donc pas la moyenne (qui vaut $5$)."],
         f"$ {4 + 6 // 2} $"),
        (I, "Pour $a = 12$ et $b = 8$, quelle valeur calcule l'expression informatique « (a + b) / 2 » ?",
         [f"Parenthèses d'abord : $ (12 + 8) \\div 2 = 20 \\div 2 = {(12 + 8) // 2} $."], f"$ {(12 + 8) // 2} $"),
        (P, "Vrai ou faux : l'expression « 2 * longueur + largeur » calcule le périmètre d'un rectangle.",
         "Faux : sans parenthèses, seule la longueur est doublée. Il faut écrire « 2 * (longueur + largeur) ».", "Faux"),
        (P, "Pour longueur $= 7$ et largeur $= 3$, compare « 2 * (longueur + largeur) » et « 2 * longueur + largeur ».",
         [f"$ 2 \\times (7 + 3) = {2 * (7 + 3)} $ (le vrai périmètre).", f"$ 2 \\times 7 + 3 = {2 * 7 + 3} $ (faux)."],
         f"${2 * (7 + 3)}$ et ${2 * 7 + 3}$"),
    ]
    for d, e, c, r in exi:
        if not r.startswith("$") and not r in ("Faux",) and "et" not in r:
            r = f"« {r} »"
        E(d, "expression-informatique", e, c, r)
    # --- boucle (8)
    for n, pas, ang in [(4, 50, 90), (5, 40, 72), (6, 30, 60), (3, 80, 120)]:
        E(PB, "boucle",
          f"Un robot exécute : « répéter ${n}$ fois : avancer de ${pas}$ pas, tourner de ${ang}°$ ». Quelle distance parcourt-il en tout, et combien d'instructions exécute-t-il dans la boucle ?",
          [f"Distance : $ {n} \\times {pas} = {n*pas} $ pas.", f"Instructions : $ {n} \\text{{ tours}} \\times 2 = {2*n} $."],
          f"${n*pas}$ pas ; ${2*n}$ instructions")
    E(A, "boucle", "Une boucle « répéter $7$ fois » contient $3$ instructions. Combien d'instructions sont exécutées par la boucle ?",
      f"Nombre de tours $\\times$ instructions dans le bloc : $ 7 \\times 3 = {7*3} $.", f"$ {7*3} $")
    E(I, "boucle", "Un programme contient « répéter $4$ fois » avec $2$ instructions décalées dans la boucle, puis, après « fin répéter », une instruction « afficher ». Combien d'instructions sont exécutées en tout ?",
      [f"Dans la boucle : $ 4 \\times 2 = 8 $.", f"L'instruction après la boucle ne s'exécute qu'une fois : $ 8 + 1 = {4*2+1} $."], f"$ {4*2+1} $")
    E(A, "boucle", "Réécris avec une boucle : « avancer de $60$ pas, tourner de $90°$ » écrit quatre fois de suite.",
      "On repère la séquence qui se répète ($2$ instructions) et on compte combien de fois elle revient : $4$ fois.",
      "Répéter $4$ fois : avancer de $60$ pas, tourner de $90°$")
    E(P, "boucle", "Pendant l'exécution d'une boucle « répéter $5$ fois », un événement peut-il arrêter la répétition avant le cinquième tour ?",
      "Non : une boucle inconditionnelle répète un nombre de fois fixé à l'avance, et rien ne peut l'interrompre.", "Non, les $5$ tours sont toujours effectués")
    # --- polygones et angle de virage (8)
    noms = {3: "un triangle équilatéral", 4: "un carré", 5: "un pentagone régulier", 6: "un hexagone régulier",
            8: "un octogone régulier", 9: "un polygone régulier à $9$ côtés", 10: "un polygone régulier à $10$ côtés",
            12: "un polygone régulier à $12$ côtés"}
    for n in [3, 5, 8, 10, 12]:
        E(A if n < 6 else I, "angle-virage",
          f"Pour tracer {noms[n]} avec une boucle, de combien de degrés le robot doit-il tourner à chaque sommet ?",
          [f"Le robot fait un tour complet ($360°$) en ${n}$ virages identiques : $ 360 \\div {n} = {360//n} $."],
          f"${360//n}°$")
    for ang in [40, 45, 30]:
        n = 360 // ang
        E(I, "angle-virage", f"Un robot répète « avancer, tourner de ${ang}°$ » jusqu'à revenir au départ. Combien de côtés a la figure ?",
          [f"Nombre de virages : $ 360 \\div {ang} = {n} $."], f"${n}$ côtés")
    # --- vocabulaire, entrées, sorties, variables (8)
    voc = [
        (A, "Un programme demande ton âge puis affiche ton âge dans $10$ ans. Quelle est l'entrée et quelle est la sortie ?",
         "L'entrée est ce que le programme reçoit, la sortie ce qu'il produit.", "Entrée : l'âge saisi ; sortie : le nombre affiché"),
        (A, "Dans quel ordre la machine exécute-t-elle les blocs d'un programme ?",
         "Une séquence se lit strictement de haut en bas.", "De haut en bas, un par un"),
        (A, "Dans l'instruction « avancer de $50$ pas », quel est le paramètre ?",
         "Le paramètre est le nombre écrit dans l'instruction.", "$50$"),
        (A, "Quelle est la différence entre une instruction et une séquence ?",
         "Une instruction est un ordre unique ; une séquence est une suite d'instructions dans un ordre précis.",
         "Une séquence est une suite ordonnée d'instructions"),
        (I, "L'utilisateur saisit $7$ dans la variable a. Le programme exécute « afficher a + 1 », puis « afficher a + 2 ». Qu'est-ce qui s'affiche ?",
         ["« afficher a + 1 » produit une sortie mais ne modifie pas a, qui vaut toujours $7$.", "Le programme affiche $8$, puis $9$."],
         "$8$ puis $9$"),
        (I, "Après l'instruction « afficher a × 2 », la variable a a-t-elle changé ?",
         "Afficher n'est pas ranger : la variable est seulement lue, elle garde sa valeur.", "Non"),
        (I, "Pour transformer le programme du carré (« répéter $4$ fois : avancer de $50$, tourner de $90°$ ») en triangle équilatéral, quels paramètres changent ?",
         "Le nombre de répétitions devient $3$ et l'angle $360 \\div 3 = 120°$.", "Répéter $3$ fois et tourner de $120°$"),
        (P, "Pour tracer un triangle équilatéral, Malo fait tourner son robot de $60°$ à chaque sommet. Pourquoi est-ce faux ?",
         "$60°$ est l'angle de la figure, pas l'angle du virage : le robot doit tourner de $360 \\div 3 = 120°$.",
         "Il faut tourner de $120°$"),
    ]
    for d, e, c, r in voc:
        E(d, "vocabulaire", e, c, r)
    return E.fin()


# ================================================================ PROBABILITÉS
def _proba_txt(q):
    """Écritures d'une probabilité : fraction simplifiée (+ décimal si exact court)."""
    q = F(q)
    s = fl(q)
    if q.denominator in (2, 4, 5, 10, 20, 25, 50, 100) and q.denominator != 1:
        s += f" = {nb(q)}"
    return s


def g5_probabilites():
    E = B()
    # --- vocabulaire et échelle (8)
    voc = [
        (A, "On lance un dé à six faces. Quelles sont les issues possibles ?", "Une issue est un résultat possible.", "$1$, $2$, $3$, $4$, $5$ et $6$"),
        (A, "On lance un dé à six faces. L'événement « obtenir un nombre pair » est-il une issue ?",
         "Non : il regroupe trois issues, $2$, $4$ et $6$. C'est un événement.", "Non, c'est un événement (3 issues)"),
        (A, "Avec un dé à six faces, quelle est la probabilité d'obtenir $7$ ? Comment appelle-t-on cet événement ?",
         "Aucune issue ne donne $7$ : la probabilité est $0$.", "$0$ ; événement impossible"),
        (A, "Avec un dé à six faces, quelle est la probabilité d'obtenir un nombre entre $1$ et $6$ ? Comment appelle-t-on cet événement ?",
         "Toutes les issues le réalisent : la probabilité est $1$.", "$1$ ; événement certain"),
        (I, "Un camarade annonce une probabilité de $1{,}5$. Que penses-tu de son résultat ?",
         "Une probabilité est toujours comprise entre $0$ et $1$ : il y a une erreur de calcul.", "Impossible : une probabilité ne dépasse jamais $1$"),
        (I, "Une pièce équilibrée vient de tomber cinq fois de suite sur « pile ». Quelle est la probabilité d'obtenir « face » au lancer suivant ?",
         "La pièce n'a pas de mémoire : chaque lancer est indépendant des précédents.", "$\\dfrac{1}{2}$"),
        (I, "Peut-on utiliser la formule « issues favorables sur issues au total » avec un dé truqué ?",
         "Non : la formule suppose que toutes les issues ont la même chance (équiprobabilité).", "Non"),
        (A, "Que signifie l'expression « une chance sur quatre » ?",
         "C'est une probabilité de $\\dfrac{1}{4}$.", "$\\dfrac{1}{4} = 0{,}25 = 25\\ \\%$"),
    ]
    for d, e, c, r in voc:
        E(d, "vocabulaire", e, c, r)
    # --- urnes (10)
    urnes = [((5, 3, 2), 1, False), ((4, 6, 2), 0, False), ((7, 2, 3), 2, False), ((3, 3, 4), 2, False), ((8, 5, 7), 1, False),
             ((2, 9, 4), 0, False), ((6, 4, 5), 0, True), ((10, 6, 4), 2, True), ((3, 5, 12), 1, True), ((9, 7, 4), 1, True)]
    noms = [("rouge", "rouges"), ("verte", "vertes"), ("bleue", "bleues")]
    for k, (cnt, idx, contraire) in enumerate(urnes):
        tot = sum(cnt)
        fav = tot - cnt[idx] if contraire else cnt[idx]
        q = F(fav, tot)
        ev = f"ne pas tirer une boule {noms[idx][0]}" if contraire else f"tirer une boule {noms[idx][0]}"
        c = [f"Total : $ {cnt[0]} + {cnt[1]} + {cnt[2]} = {tot} $ boules, toutes ont la même chance d'être tirées."]
        if contraire:
            c.append(f"Issues favorables : les boules qui ne sont pas {noms[idx][1]}, soit $ {tot} - {cnt[idx]} = {fav} $.")
        else:
            c.append(f"Issues favorables : ${fav}$.")
        c.append(f"$ P = {fb(fav, tot)}" + (f" = {fl(q)}" if q != F(fav, tot) or gcd(fav, tot) > 1 else "")
                 + (f" = {nb(q)}" if q.denominator in (2, 4, 5, 10, 20, 25) else "") + " $.")
        E(A if not contraire else I, "urne",
          f"Une urne contient ${cnt[0]}$ boules rouges, ${cnt[1]}$ vertes et ${cnt[2]}$ bleues, indiscernables au toucher. On en tire une au hasard. Quelle est la probabilité de {ev} ?",
          c, f"$ {fl(q)} $")
    # --- dé (8)
    des = [
        (6, "obtenir un nombre pair", lambda x: x % 2 == 0), (6, "obtenir un multiple de $3$", lambda x: x % 3 == 0),
        (6, "obtenir un nombre strictement supérieur à $4$", lambda x: x > 4), (6, "obtenir un nombre inférieur ou égal à $5$", lambda x: x <= 5),
        (8, "obtenir un nombre impair", lambda x: x % 2 == 1), (10, "obtenir un multiple de $4$", lambda x: x % 4 == 0),
        (12, "obtenir un diviseur de $12$", lambda x: 12 % x == 0), (12, "obtenir un nombre premier ($2$, $3$, $5$, $7$ ou $11$)", lambda x: x in (2, 3, 5, 7, 11)),
    ]
    for k, (n, ev, f) in enumerate(des):
        fav = [x for x in range(1, n + 1) if f(x)]
        q = F(len(fav), n)
        E(A if n == 6 else I, "de",
          f"On lance un dé équilibré à ${n}$ faces numérotées de $1$ à ${n}$. Quelle est la probabilité d'{ev} ?",
          [f"Issues favorables : " + ", ".join(f"${x}$" for x in fav) + f", soit ${len(fav)}$ sur ${n}$.",
           f"$ P = {fb(len(fav), n)}" + (f" = {fl(q)}" if gcd(len(fav), n) > 1 else "") + " $."],
          f"$ {fl(q)} $")
    # --- cartes et roues (6)
    cartes = [("un cœur", 8), ("un roi", 4), ("une figure (valet, dame ou roi)", 12), ("un as rouge", 2)]
    for ev, fav in cartes:
        q = F(fav, 32)
        E(I, "cartes-roue",
          f"Dans un jeu de $32$ cartes (4 couleurs, 8 cartes par couleur : 7, 8, 9, 10, valet, dame, roi, as), on tire une carte au hasard. Quelle est la probabilité de tirer {ev} ?",
          [f"Il y a ${fav}$ cartes favorables sur $32$.", f"$ P = {fb(fav, 32)} = {fl(q)} $."], f"$ {fl(q)} $")
    q = F(3, 8)
    E(PB, "cartes-roue", "Une roue est partagée en $8$ secteurs égaux : $3$ jaunes, $4$ bleus et $1$ rouge. Quelle est la probabilité que la flèche s'arrête sur un secteur jaune ?",
      ["Les $8$ secteurs ont la même chance.", f"$ P = {fl(q)} = {nb(q)} $."], f"$ {fl(q)} $")
    q = F(5, 8)
    E(PB, "cartes-roue", "Avec la même roue ($3$ secteurs jaunes, $4$ bleus, $1$ rouge sur $8$), quelle est la probabilité de ne pas tomber sur un secteur bleu ?",
      [f"Les secteurs qui ne sont pas bleus sont les jaunes et le rouge : $ 3 + 1 = 4 $ (ou $ 8 - 4 = 4 $).", f"$ P = \\dfrac{{4}}{{8}} = {fl(F(4, 8))} $."],
      f"$ {fl(F(4, 8))} $")
    # --- somme des probabilités (6)
    for pr, pv in [("0.3", "0.5"), ("0.45", "0.25"), ("0.12", "0.6")]:
        a, b = Decimal(pr), Decimal(pv)
        E(I, "somme-egale-1",
          f"Une urne contient des boules rouges, vertes et bleues. On sait que $P(\\text{{rouge}}) = {nb(a)}$ et $P(\\text{{verte}}) = {nb(b)}$. Calcule $P(\\text{{bleue}})$.",
          ["La somme des probabilités de toutes les issues vaut $1$.", f"$ P(\\text{{bleue}}) = 1 - {nb(a)} - {nb(b)} = {nb(1 - a - b)} $."],
          f"$ {nb(1 - a - b)} $")
    for (a, b), (c, d) in [((1, 4), (1, 3)), ((2, 5), (3, 10)), ((1, 6), (1, 2))]:
        q = 1 - F(a, b) - F(c, d)
        E(P, "somme-egale-1",
          f"Une roue a trois couleurs. $P(\\text{{rouge}}) = {fb(a, b)}$ et $P(\\text{{jaune}}) = {fb(c, d)}$. Calcule la probabilité de la troisième couleur, le vert.",
          ["La somme des trois probabilités vaut $1$.",
           f"On met au même dénominateur : $ 1 - {fb(a, b)} - {fb(c, d)} = {fl(q)} $."],
          f"$ {fl(q)} $")
    # --- écritures (6)
    for a, b in [(3, 4), (2, 5), (7, 20), (1, 8), (9, 25)]:
        q = F(a, b)
        E(A, "ecritures", f"Écris la probabilité $ {fb(a, b)} $ sous forme décimale, puis en pourcentage.",
          [f"$ {a} \\div {b} = {nb(q)} $.", f"On multiplie par $100$ : ${nb(q*100)}\\ \\%$."],
          f"$ {nb(q)} = {nb(q*100)}\\ \\% $")
    E(I, "ecritures", "Écris la probabilité $ \\dfrac{1}{3} $ sous forme décimale arrondie au centième, puis en pourcentage arrondi à l'unité.",
      [f"$ 1 \\div 3 \\approx {nb(F(1, 3), 2)} $ : la division ne tombe pas juste, la fraction reste l'écriture exacte.",
       f"Environ ${nb(F(100, 3), 0)}\\ \\%$."], f"$ \\approx {nb(F(1, 3), 2)} \\approx {nb(F(100, 3), 0)}\\ \\% $")
    # --- fréquence et probabilité (6)
    eff = [8, 12, 9, 11, 7, 13]
    for face in [2, 6, 5]:
        e = eff[face - 1]
        q = F(e, 60)
        E(I, "frequence",
          f"On lance $60$ fois un dé. Effectifs des faces $1$ à $6$ : " + " ; ".join(f"${x}$" for x in eff)
          + f". Calcule la fréquence d'apparition de la face ${face}$ (arrondie au centième) et compare-la à la probabilité $\\dfrac{{1}}{{6}} \\approx 0{{,}}17$.",
          [f"Fréquence : $ \\dfrac{{{e}}}{{60}} " + ("=" if (q * 100).denominator == 1 else "\\approx") + f" {nb(q, 2)} $.",
           f"${nb(q, 2)} " + (">" if q > F(1, 6) else "<") + " 0{,}17$ : la fréquence est un peu " + ("plus grande" if q > F(1, 6) else "plus petite")
           + " que la probabilité. Cet écart est normal sur seulement $60$ lancers."],
          (f"$ {nb(q, 2)} $" if (q * 100).denominator == 1 else f"$ \\approx {nb(q, 2)} $")
          + (", un peu plus que la probabilité" if q > F(1, 6) else ", un peu moins que la probabilité"))
    E(PB, "frequence", "Une pièce est lancée $200$ fois et tombe $94$ fois sur « pile ». Quelle est la fréquence de « pile » ? Est-ce surprenant ?",
      [f"$ \\dfrac{{94}}{{200}} = {nb(F(94, 200))} $.", "C'est proche de la probabilité $0{,}5$ : rien de surprenant."],
      f"$ {nb(F(94, 200))} $ ; non, c'est proche de $0{{,}}5$")
    E(P, "frequence", "La probabilité d'obtenir $6$ avec un dé est $\\dfrac{1}{6}$. Si on lance le dé $10\\,000$ fois, que peut-on prévoir pour la fréquence du $6$ ?",
      "Plus on répète l'expérience, plus la fréquence se rapproche de la probabilité.", "Elle sera proche de $\\dfrac{1}{6} \\approx 0{,}17$")
    E(P, "frequence", "Quelle est la différence entre la probabilité d'un événement et sa fréquence ?",
      "La probabilité se calcule avant l'expérience, par le raisonnement ; la fréquence se constate après, en comptant les résultats.",
      "La probabilité se calcule, la fréquence s'observe")
    return E.fin()


# ================================================================ PROPORTIONNALITÉ
def g5_proportionnalite():
    E = B()
    # --- reconnaître (8)
    tabs = [("Masse de tomates (kg)", "Prix (€)", [2, 4, 5, 7], lambda x: 3 * x, True),
            ("Nombre de places", "Prix payé (€), carte annuelle de $10$ € comprise", [1, 2, 4, 5], lambda x: 10 + 6 * x, False),
            ("Nombre d'œufs", "Nombre de crêpes", [2, 3, 5, 6], lambda x: 6 * x, True),
            ("Côté d'un carré (cm)", "Aire (cm²)", [1, 2, 3, 4], lambda x: x * x, False),
            ("Nombre de cahiers", "Prix (€)", [3, 5, 8, 10], lambda x: F(5, 2) * x, True),
            ("Durée de stationnement (h)", "Prix payé (€), $2$ € de frais fixes compris", [1, 2, 3, 4], lambda x: 2 + 3 * x, False)]
    for k, (l1, l2, xs, f, prop) in enumerate(tabs):
        ys = [f(x) for x in xs]
        qs = [F(y) / x for x, y in zip(xs, ys)]
        if prop:
            c = ["Quotients : " + " ; ".join(f"$\\dfrac{{{nb(y)}}}{{{nb(x)}}} = {nb(q)}$" for x, y, q in zip(xs[:2], ys[:2], qs[:2])) + " ; …",
                 f"Tous les quotients sont égaux à ${nb(qs[0])}$ : c'est proportionnel."]
            r = f"Oui (coefficient ${nb(qs[0])}$)"
        else:
            c = [f"$\\dfrac{{{nb(ys[0])}}}{{{nb(xs[0])}}} = {nb(qs[0])}$ mais $\\dfrac{{{nb(ys[1])}}}{{{nb(xs[1])}}} = {nb(qs[1])}$.",
                 "Les quotients ne sont pas égaux : ce n'est pas proportionnel."]
            r = "Non"
        E(A if k < 2 else I, "reconnaitre",
          f"Ce tableau est-il un tableau de proportionnalité ? {l1} : " + " ; ".join(f"${nb(x)}$" for x in xs)
          + f". {l2} : " + " ; ".join(f"${nb(y)}$" for y in ys) + ".", c, r)
    E(I, "reconnaitre", "À $10$ ans, Lucas mesurait $1{,}40$ m. Peut-on prévoir qu'à $20$ ans il mesurera $2{,}80$ m ?",
      "La taille n'est pas proportionnelle à l'âge : on ne peut pas multiplier par $2$.", "Non, ce n'est pas proportionnel")
    E(P, "reconnaitre", "Une voiture accélère au démarrage. La distance parcourue est-elle proportionnelle à la durée ?",
      "La distance n'est proportionnelle à la durée que si la vitesse est constante.", "Non (la vitesse n'est pas constante)")
    # --- coefficient (6)
    for x, y, autres in [(4, 10, [6, 10]), (5, 35, [3, 8]), (8, 6, [4, 20]), (3, 12, [7, 11]), (6, 9, [2, 14]), (10, 4, [5, 25])]:
        k = F(y, x)
        E(A if k.denominator == 1 else I, "coefficient",
          f"Dans un tableau de proportionnalité, ${x}$ correspond à ${y}$. Trouve le coefficient, puis les nombres qui correspondent à ${autres[0]}$ et à ${autres[1]}$.",
          [f"Coefficient : $ {y} \\div {x} = {nb(k)} $.",
           f"$ {autres[0]} \\times {nb(k)} = {nb(k*autres[0])} $ et $ {autres[1]} \\times {nb(k)} = {nb(k*autres[1])} $."],
          f"Coefficient ${nb(k)}$ ; ${nb(k*autres[0])}$ et ${nb(k*autres[1])}$")
    # --- quatrième proportionnelle (10)
    q4 = [("$3$ stylos coûtent $4{,}50$ €. Combien coûtent $7$ stylos ?", 3, Decimal("4.50"), 7, "€"),
          ("$5$ kg de pommes coûtent $12$ €. Combien coûtent $3$ kg ?", 5, Decimal(12), 3, "€"),
          ("Une imprimante imprime $45$ pages en $3$ minutes. Combien de pages en $8$ minutes ?", 3, Decimal(45), 8, "pages"),
          ("$4$ litres de peinture couvrent $34$ m². Quelle surface couvrent $6$ litres ?", 4, Decimal(34), 6, "m²"),
          ("Un robinet remplit $18$ L en $4$ minutes. Combien de litres en $10$ minutes ?", 4, Decimal(18), 10, "L"),
          ("$6$ croissants coûtent $6{,}60$ €. Combien coûtent $15$ croissants ?", 6, Decimal("6.60"), 15, "€"),
          ("$8$ m de tissu coûtent $52$ €. Combien coûtent $5$ m ?", 8, Decimal(52), 5, "€"),
          ("Pour $250$ g de farine, il faut $3$ œufs. Combien d'œufs pour $750$ g de farine ?", 250, Decimal(3), 750, "œufs"),
          ("Une voiture consomme $6$ L d'essence pour $100$ km. Combien consomme-t-elle pour $350$ km ?", 100, Decimal(6), 350, "L"),
          ("$12$ bouteilles d'eau coûtent $3{,}60$ €. Combien coûtent $20$ bouteilles ?", 12, Decimal("3.60"), 20, "€")]
    for k, (e, a, b, c, u) in enumerate(q4):
        unit = b / a
        r = unit * c
        val = eur(r) if u == "€" else nb(r)
        if k % 2 == 0:
            u1 = {"€": "€", "pages": "pages", "L": "L"}[u]
            par = {"€": "pour $1$ " + ("stylo" if "stylo" in e else "mètre" if "tissu" in e else "kilogramme"),
                   "pages": "par minute", "L": "par minute" if "robinet" in e.lower() else "par kilomètre"}[u]
            co = [f"Retour à l'unité : $ {eur(b) if u == '€' else nb(b)} \\div {nb(a)} = {eur(unit) if u == '€' else nb(unit)} $ {u1} {par}.",
                  f"$ {eur(unit) if u == '€' else nb(unit)} \\times {c} = {val} $."]
        else:
            co = [f"Produit en croix : $ \\dfrac{{{c} \\times {eur(b) if u == '€' else nb(b)}}}{{{a}}} = \\dfrac{{{nb(b*c)}}}{{{a}}} = {val} $."]
        E(A if k < 5 else I, "quatrieme-proportionnelle", e, co, f"${val}$ {u}")
    # --- linéarité (6)
    for n in [8, 2, 12, 6, 10, 14]:
        q = 600 * n // 4
        if n == 8:
            c = "$8 = 2 \\times 4$ : on double, $ 2 \\times 600 = 1\\,200 $ g."
        elif n == 2:
            c = "$2$ est la moitié de $4$ : $ 600 \\div 2 = 300 $ g."
        elif n == 12:
            c = "$12 = 3 \\times 4$ : $ 3 \\times 600 = 1\\,800 $ g."
        elif n == 6:
            c = "$6 = 4 + 2$ : $ 600 + 300 = 900 $ g."
        elif n == 10:
            c = "$10 = 8 + 2$ : $ 1\\,200 + 300 = 1\\,500 $ g."
        else:
            c = "$14 = 12 + 2$ : $ 1\\,800 + 300 = 2\\,100 $ g."
        assert c.endswith(f"{nb(q)} $ g.")
        E(A if n in (8, 2, 12) else I, "linearite",
          f"Une recette de pâtes prévoit $600$ g pour $4$ personnes. Quelle quantité faut-il pour ${n}$ personnes ? Utilise la linéarité.",
          c, f"${nb(q)}$ g")
    # --- pourcentages (8)
    for t, n in [(10, 80), (25, 64), (30, 80), (50, 47), (15, 240), (5, 360)]:
        r = F(t * n, 100)
        if t == 30:
            c = f"$10\\ \\%$ de $80$ vaut $8$, donc $30\\ \\%$ vaut $ 3 \\times 8 = {nb(r)} $."
        else:
            c = f"$ \\dfrac{{{t}}}{{100}} \\times {n} = {nb(r)} $."
        E(A, "pourcentage", f"Calcule ${t}\\ \\%$ de ${n}$.", c, f"$ {nb(r)} $")
    E(PB, "pourcentage", "Un pull coûte $40$ €. Il est soldé à $-30\\ \\%$. Quel est le montant de la réduction et le nouveau prix ?",
      [f"Réduction : $ \\dfrac{{30}}{{100}} \\times 40 = {30*40//100} $ €.", f"Nouveau prix : $ 40 - {30*40//100} = {40 - 30*40//100} $ €."],
      f"Réduction ${30*40//100}$ € ; prix ${40 - 30*40//100}$ €")
    E(PB, "pourcentage", "Dans une classe de $25$ élèves, $12$ sont des filles. Quel est le pourcentage de filles ?",
      [f"$ \\dfrac{{12}}{{25}} = \\dfrac{{48}}{{100}} $."], f"${12*4}\\ \\%$")
    # --- échelles (6)
    E(I, "echelle", "Sur un plan à l'échelle $\\dfrac{1}{200}$, une pièce mesure $3{,}5$ cm de long. Quelle est sa longueur réelle en mètres ?",
      [f"$ 3{{,}}5 \\times 200 = {nb(Decimal('3.5')*200)} $ cm.", f"${nb(Decimal('3.5')*200)}$ cm $= {nb(Decimal('3.5')*2)}$ m."],
      f"${nb(Decimal('3.5')*2)}$ m")
    E(I, "echelle", "Sur une carte à l'échelle $\\dfrac{1}{25\\,000}$, deux villages sont à $4$ cm l'un de l'autre. Quelle est la distance réelle en km ?",
      [f"$ 4 \\times 25\\,000 = 100\\,000 $ cm.", "$100\\,000$ cm $= 1\\,000$ m $= 1$ km."], "$1$ km")
    E(I, "echelle", "Une maison mesure $12$ m de long. Quelle sera sa longueur sur un plan à l'échelle $\\dfrac{1}{100}$ ?",
      ["$12$ m $= 1\\,200$ cm.", "$ 1\\,200 \\div 100 = 12 $ cm."], "$12$ cm")
    E(P, "echelle", "Sur un plan, $5$ cm représentent $50$ m dans la réalité. Quelle est l'échelle du plan ?",
      ["Même unité : $50$ m $= 5\\,000$ cm.", "$ \\dfrac{5}{5\\,000} = \\dfrac{1}{1\\,000} $."], "$\\dfrac{1}{1\\,000}$")
    E(I, "echelle", "Une maquette de voiture est à l'échelle $\\dfrac{1}{43}$. La vraie voiture mesure $4{,}3$ m. Quelle est la longueur de la maquette en cm ?",
      ["$4{,}3$ m $= 430$ cm.", f"$ 430 \\div 43 = {430//43} $ cm."], f"${430//43}$ cm")
    E(P, "echelle", "Sur une carte à l'échelle $\\dfrac{1}{50\\,000}$, quelle longueur représente une distance réelle de $3$ km ?",
      ["$3$ km $= 300\\,000$ cm.", f"$ 300\\,000 \\div 50\\,000 = {300000//50000} $ cm."], f"${300000//50000}$ cm")
    # --- vitesse (6)
    E(PB, "vitesse", "Un cycliste roule à la vitesse constante de $15$ km/h pendant $2$ h. Quelle distance parcourt-il ?",
      f"$ d = 15 \\times 2 = {15*2} $ km.", f"${15*2}$ km")
    E(PB, "vitesse", "Une voiture roule à $90$ km/h de façon constante pendant $1$ h $30$ min. Quelle distance parcourt-elle ?",
      ["$1$ h $30$ min $= 1{,}5$ h.", f"$ d = 90 \\times 1{{,}}5 = {nb(Decimal(90)*Decimal('1.5'))} $ km."], f"${nb(Decimal(90)*Decimal('1.5'))}$ km")
    E(PB, "vitesse", "Un piéton marche à $5$ km/h. Combien de temps lui faut-il pour parcourir $2$ km ?",
      ["En $1$ h ($60$ min), il parcourt $5$ km, donc $1$ km en $12$ min.", f"$ 2 \\times 12 = {2*12} $ min."], f"${2*12}$ min")
    E(PB, "vitesse", "Un train parcourt $420$ km en $3$ h. Quelle est sa vitesse moyenne ?",
      f"$ v = \\dfrac{{d}}{{t}} = \\dfrac{{420}}{{3}} = {420//3} $ km/h.", f"${420//3}$ km/h")
    E(PB, "vitesse", "Une coureuse parcourt $10$ km en $50$ min à vitesse constante. Quelle distance parcourt-elle en $20$ min ?",
      ["En $10$ min, elle parcourt $ 10 \\div 5 = 2 $ km.", f"En $20$ min : $ 2 \\times 2 = {2*2} $ km."], f"${2*2}$ km")
    E(PB, "vitesse", "Un scooter roule à $45$ km/h. Quelle distance parcourt-il en $20$ min ?",
      ["$20$ min, c'est le tiers d'une heure.", f"$ 45 \\div 3 = {45//3} $ km."], f"${45//3}$ km")
    return E.fin()


# ================================================================ PUISSANCES
def g5_puissances():
    E = B()
    # --- notation (8)
    for b, n in [(7, 3), (5, 2), (2, 5), (10, 3)]:
        prod = " \\times ".join([str(b)] * n)
        E(A, "notation", f"Écris $ {prod} $ sous la forme d'une puissance.",
          f"Le facteur ${b}$ apparaît ${n}$ fois : la base est ${b}$, l'exposant ${n}$.", f"$ {b}^{n} $")
    for b, n in [(6, 4), (9, 2)]:
        E(A, "notation", f"Dans l'écriture $ {b}^{n} $, quelle est la base et quel est l'exposant ?",
          "La base est le nombre multiplié, l'exposant compte le nombre de facteurs.", f"Base ${b}$, exposant ${n}$")
    E(I, "notation", "Comment se lit $ a^2 $ ? Et $ a^3 $ ?", "« $a$ au carré » (ou puissance $2$), « $a$ au cube » (ou puissance $3$).",
      "« $a$ au carré » ; « $a$ au cube »")
    E(I, "notation", "Écris le produit $ 3 \\times 3 \\times 3 \\times 3 $ sous la forme d'une puissance, puis calcule-le.",
      [f"Quatre facteurs $3$ : $ 3^4 $.", f"$ 3 \\times 3 = 9 $, $ 9 \\times 3 = 27 $, $ 27 \\times 3 = {3**4} $."], f"$ 3^4 = {3**4} $")
    # --- carrés (8)
    for n in [7, 12, 9, 11]:
        E(A, "carres", f"Calcule $ {n}^2 $.", f"$ {n}^2 = {n} \\times {n} = {n*n} $.", f"$ {n*n} $")
    for c in [64, 144, 81, 121]:
        r = int(c ** 0.5)
        assert r * r == c
        E(I, "carres", f"Quel nombre entier positif a pour carré ${c}$ ?", f"$ {r} \\times {r} = {c} $.", f"$ {r} $")
    # --- calculer une puissance (8)
    for b, n in [(2, 4), (5, 3), (10, 2), (2, 6), (4, 3), (1, 7), (0, 3), (3, 5)]:
        r = b ** n
        if b in (0, 1):
            c = f"${b}$ multiplié par lui-même donne toujours ${b}$ : $ {b}^{n} = {r} $."
        else:
            prod = " \\times ".join([str(b)] * n)
            c = f"$ {b}^{n} = {prod} = {nb(r)} $."
        E(A if r <= 125 else I, "calcul-puissance", f"Calcule $ {b}^{n} $.", c, f"$ {nb(r)} $")
    # --- écrire sous forme de puissance (6)
    for n, ecr, cmt in [(49, "7^2", "$ 49 = 7 \\times 7 $."), (27, "3^3", "$ 27 = 3 \\times 3 \\times 3 $."),
                        (1000, "10^3", "$ 1\\,000 = 10 \\times 10 \\times 10 $."), (125, "5^3", "$ 125 = 5 \\times 5 \\times 5 $.")]:
        b, e = map(int, ecr.split("^"))
        assert b ** e == n
        E(A, "ecrire-puissance", f"Écris ${nb(n)}$ sous la forme d'une puissance d'exposant ${e}$.", cmt, f"$ {ecr} $")
    E(I, "ecrire-puissance", "Écris $64$ sous la forme d'une puissance d'exposant $2$, puis d'une puissance d'exposant $3$.",
      ["$ 64 = 8 \\times 8 = 8^2 $.", "$ 64 = 4 \\times 4 \\times 4 = 4^3 $."], "$ 8^2 $ et $ 4^3 $")
    E(I, "ecrire-puissance", "Le nombre $50$ est-il le carré d'un nombre entier ?",
      "$ 7^2 = 49 $ et $ 8^2 = 64 $ : $50$ est entre les deux, ce n'est pas un carré d'entier.", "Non")
    # --- priorités avec puissances (10)
    pr = [("5 + 3^2", 5 + 9, "On calcule $3^2 = 9$ d'abord : $ 5 + 9 = 14 $."),
          ("2 \\times 4^2", 2 * 16, "La puissance avant le produit : $ 2 \\times 16 = 32 $."),
          ("(2 + 3)^2", 25, "Les parenthèses d'abord : $ 5^2 = 25 $."),
          ("3 + 2 \\times 5^2", 3 + 2 * 25, "$ 5^2 = 25 $, puis $ 2 \\times 25 = 50 $, puis $ 3 + 50 = 53 $."),
          ("10^2 - 6^2", 100 - 36, "$ 100 - 36 = 64 $."),
          ("(10 - 6)^2", 16, "$ 4^2 = 16 $."),
          ("3^2 + 4^2", 9 + 16, "$ 9 + 16 = 25 $."),
          ("(3 + 4)^2", 49, "$ 7^2 = 49 $."),
          ("2^3 \\times 5", 40, "$ 2^3 = 8 $, puis $ 8 \\times 5 = 40 $."),
          ("100 - 2 \\times 3^3", 100 - 2 * 27, "$ 3^3 = 27 $, $ 2 \\times 27 = 54 $, puis $ 100 - 54 = 46 $.")]
    for k, (e, r, c) in enumerate(pr):
        assert c.endswith(f"{r} $.")
        E(A if k < 4 else I, "priorites", f"Calcule $ {e} $.", c, f"$ {r} $")
    # --- expressions littérales (5)
    for e, x, r, c in [("3x^2", 4, 3 * 16, "3 \\times 4^2 = 3 \\times 16 = 48"),
                       ("x^2 + 2x", 5, 25 + 10, "5^2 + 2 \\times 5 = 25 + 10 = 35"),
                       ("2x^3", 3, 2 * 27, "2 \\times 3^3 = 2 \\times 27 = 54"),
                       ("x^2 - x", 9, 81 - 9, "9^2 - 9 = 81 - 9 = 72")]:
        assert c.endswith(str(r))
        E(I, "expression-litterale", f"Calcule $ {e} $ pour $ x = {x} $.", [f"$ {c} $.", "La puissance ne porte que sur $x$."] if e[0].isdigit() else f"$ {c} $.", f"$ {r} $")
    E(P, "expression-litterale", "Compare $ a^2 $ et $ 2a $ pour $ a = 5 $.",
      ["$ 5^2 = 25 $ et $ 2 \\times 5 = 10 $.", "Le carré n'est pas le double."], "$25$ et $10$ : ils sont différents")
    # --- aires et volumes (5)
    E(PB, "aire-volume", "Un carré a un côté de $9$ cm. Quelle est son aire ?", f"$ 9^2 = {81} $ cm².", "$81$ cm²")
    E(PB, "aire-volume", "Un cube a une arête de $4$ cm. Quel est son volume ?", f"$ 4^3 = 4 \\times 4 \\times 4 = {64} $ cm³.", "$64$ cm³")
    E(PB, "aire-volume", "Un carré a une aire de $121$ m². Quelle est la longueur de son côté ?", "$ 11^2 = 121 $.", "$11$ m")
    E(PB, "aire-volume", "Un cube a une arête de $10$ cm. Quel est son volume en cm³, puis en litres ?",
      ["$ 10^3 = 1\\,000 $ cm³.", "$1\\,000$ cm³ $= 1$ dm³ $= 1$ L."], "$1\\,000$ cm³, soit $1$ L")
    E(P, "aire-volume", "On double l'arête d'un cube de $2$ cm. Par combien son volume est-il multiplié ?",
      [f"$ 2^3 = 8 $ cm³ et $ 4^3 = 64 $ cm³.", f"$ 64 \\div 8 = {64//8} $."], f"Par ${64//8}$")
    return E.fin()


# ================================================================ REPÉRAGE
def pt(x, y):
    return f"({nb(x)}\\,;{nb(y)})"


def _bilan(sens, l):
    if len(l) == 1:
        return f"Un seul déplacement {sens} : ${nb(l[0])}$."
    return f"Déplacements {'horizontaux' if sens == 'horizontal' else 'verticaux'} : $ {' + '.join(rel(v) for v in l)} = {nb(sum(l))} $."


def g5_reperage():
    E = B()
    # --- abscisse sur une droite graduée (8)
    grads = [  # (texte, valeur, explication)
        ("Entre $2$ et $3$, la droite est partagée en $10$ parts égales. Quelle est l'abscisse du point situé $4$ graduations après $2$ ?",
         2 + F(4, 10), "Une graduation vaut $1 \\div 10 = 0{,}1$ : $ 2 + 4 \\times 0{,}1 = 2{,}4 $."),
        ("Sur une droite graduée d'unité $1$, quelle est l'abscisse du point situé $3$ graduations à gauche de l'origine ?",
         -3, "À gauche de $0$, les abscisses sont négatives."),
        ("Entre $0$ et $1$, la droite est partagée en $4$ parts égales. Quelle est l'abscisse du point situé au $3^\\text{e}$ trait après $0$ ?",
         F(3, 4), "Une graduation vaut $\\dfrac{1}{4}$ : trois graduations font $\\dfrac{3}{4}$."),
        ("Chaque unité est partagée en $4$ parts égales. Quelle est l'abscisse du point situé au $7^\\text{e}$ trait après $0$ ?",
         F(7, 4), "Sept quarts : $\\dfrac{7}{4} = 1 + \\dfrac{3}{4}$, le point est entre $1$ et $2$."),
        ("Chaque unité est partagée en $2$ parts égales. Quelle est l'abscisse du point situé exactement au milieu entre $-2$ et $-1$ ?",
         F(-3, 2), "Une graduation vaut $0{,}5$ : on part de $-1$ et on recule d'une graduation, $ -1 - 0{,}5 = -1{,}5 $."),
        ("Entre $0$ et $1$, la droite est partagée en $3$ parts égales. Quelle est l'abscisse du point situé au $2^\\text{e}$ trait après $0$ ?",
         F(2, 3), "Une graduation vaut $\\dfrac{1}{3}$ : deux graduations font $\\dfrac{2}{3}$."),
        ("Entre $-1$ et $0$, la droite est partagée en $10$ parts égales. Quelle est l'abscisse du point situé $3$ graduations à gauche de $0$ ?",
         F(-3, 10), "Une graduation vaut $0{,}1$ : $ 0 - 3 \\times 0{,}1 = -0{,}3 $."),
        ("Sur une droite graduée, on lit $0$ puis $10$, avec $5$ intervalles égaux entre les deux. Quelle est l'abscisse du point situé $3$ graduations après $10$ ?",
         16, "Une graduation vaut $ 10 \\div 5 = 2 $ : $ 10 + 3 \\times 2 = 16 $."),
    ]
    for k, (e, v, c) in enumerate(grads):
        v = F(v)
        rep = fl(v) if v.denominator == 3 or (v.denominator == 4) else nb(v)
        E(A if k < 3 else I, "abscisse-droite", e, c, f"${rep}$")
    # --- lire les coordonnées à partir d'un déplacement (8)
    depl = [(2, 1, ), (-2, 1), (3, -4), (-5, -2), (0, 6), (-3, 0), (4, 7), (-6, 3)]
    for k, (x, y) in enumerate(depl):
        hz = "" if x == 0 else f"${abs(x)}$ graduation{'s' if abs(x) > 1 else ''} à {'droite' if x > 0 else 'gauche'} de l'origine"
        vt = "" if y == 0 else f"${abs(y)}$ graduation{'s' if abs(y) > 1 else ''} {'au-dessus' if y > 0 else 'en dessous'}"
        if x == 0:
            desc = f"sur l'axe des ordonnées, {vt} de l'origine"
        elif y == 0:
            desc = f"sur l'axe des abscisses, {hz}"
        else:
            desc = f"{hz} et {vt}"
        E(A if k < 4 else I, "lire-coordonnees", f"Un point $M$ est situé {desc}. Quelles sont ses coordonnées ?",
          [f"Abscisse (horizontale) : ${nb(x)}$ ; ordonnée (verticale) : ${nb(y)}$.", "On écrit l'abscisse d'abord."],
          f"$M{pt(x, y)}$")
    # --- abscisse et ordonnée (8)
    for k, (x, y) in enumerate([(-4, 7), (5, -2), (F(-5, 2), 3), (0, -6)]):
        quoi = "abscisse" if k % 2 == 0 else "ordonnée"
        v = x if quoi == "abscisse" else y
        E(A, "abscisse-ordonnee", f"Le point $A$ a pour coordonnées ${pt(x, y)}$. Quelle est son {quoi} ?",
          f"L'abscisse est le premier nombre, l'ordonnée le second.", f"${nb(v)}$")
    for x, y in [(-2, 5), (3, -8), (0, 4), (F(3, 2), -1)]:
        E(A, "abscisse-ordonnee", f"Le point $B$ a pour abscisse ${nb(x)}$ et pour ordonnée ${nb(y)}$. Écris ses coordonnées.",
          "On écrit toujours l'abscisse en premier, puis l'ordonnée.", f"$B{pt(x, y)}$")
    # --- distance sur une droite graduée (8)
    for k, (a, b) in enumerate([(-3, 4), (2, 9), (-7, -2), (-5, 5), (F(-3, 2), F(5, 2)), (-12, 3), (F(-4, 5), F(7, 5)), (-9, -1)]):
        d = abs(F(b) - F(a))
        if a < 0 < b:
            c = f"De ${nb(a)}$ à $0$ : ${nb(-a)}$ ; de $0$ à ${nb(b)}$ : ${nb(b)}$. Total : $ {nb(-a)} + {nb(b)} = {nb(d)} $."
        else:
            c = f"Les deux points sont du même côté de $0$ : $ {nb(max(abs(F(a)), abs(F(b))))} - {nb(min(abs(F(a)), abs(F(b))))} = {nb(d)} $."
        E(A if k < 4 else I, "distance-droite",
          f"Sur une droite graduée, $A$ a pour abscisse ${nb(a)}$ et $B$ a pour abscisse ${nb(b)}$. Quelle est la distance $AB$ ?",
          [c, "Une distance est toujours positive."], f"$AB = {nb(d)}$")
    # --- cas particuliers et position (8)
    cas = [
        (A, "Le point $C$ est sur l'axe des abscisses, à $5$ unités à gauche de l'origine. Quelles sont ses coordonnées ?",
         "Sur l'axe horizontal, l'ordonnée est nulle.", "$C(-5\\,;0)$"),
        (A, "Quelles sont les coordonnées de l'origine $O$ du repère ?", "L'origine est sur les deux axes.", "$O(0\\,;0)$"),
        (A, "Le point $D(0\\,;-3)$ est-il sur l'axe des abscisses ou sur l'axe des ordonnées ?",
         "Son abscisse est nulle : il est sur l'axe vertical.", "Sur l'axe des ordonnées"),
        (I, "Où se trouve le point $E(-2\\,;5)$ par rapport à l'origine ?", "Abscisse négative : à gauche ; ordonnée positive : en haut.", "En haut à gauche"),
        (I, "Où se trouve le point $F(4\\,;-6)$ par rapport à l'origine ?", "Abscisse positive : à droite ; ordonnée négative : en bas.", "En bas à droite"),
        (I, "Les points $G(3\\,;2)$ et $H(2\\,;3)$ sont-ils le même point ?", "L'ordre compte : $G$ est plus à droite, $H$ plus haut.", "Non"),
        (I, "Un point a ses deux coordonnées négatives. Dans quelle partie du repère se trouve-t-il ?", "$x < 0$ : à gauche ; $y < 0$ : en bas.", "En bas à gauche"),
        (P, "Tous les points d'une droite ont pour ordonnée $2$. Comment est cette droite ?",
         "Tous ses points sont à la même hauteur : la droite est horizontale, parallèle à l'axe des abscisses.", "Horizontale, à $2$ unités au-dessus de l'axe des abscisses"),
    ]
    for d, e, c, r in cas:
        E(d, "cas-particuliers", e, c, r)
    # --- problèmes (10)
    trajets = [[(3, 0), (0, 5), (-7, 0)], [(-4, 0), (0, -2), (6, 0), (0, 9)], [(0, -3), (-5, 0), (0, -1)],
               [(2, 0), (0, 2), (2, 0), (0, 2)], [(-1, 0), (0, 4), (-1, 0), (0, -6)]]
    for t in trajets:
        x = sum(a for a, _ in t)
        y = sum(b for _, b in t)
        mots = []
        for a, b in t:
            if a:
                mots.append(f"${abs(a)}$ unité{'s' if abs(a) > 1 else ''} vers la {'droite' if a > 0 else 'gauche'}")
            else:
                mots.append(f"${abs(b)}$ unité{'s' if abs(b) > 1 else ''} vers le {'haut' if b > 0 else 'bas'}")
        E(PB, "probleme", "Un robot part de l'origine d'un repère et se déplace de " + ", puis ".join(mots) + ". Quelles sont ses coordonnées d'arrivée ?",
          [_bilan("horizontal", [a for a, _ in t if a]), _bilan("vertical", [b for _, b in t if b])],
          f"${pt(x, y)}$")
    for a, b in [(-3, 5), (-8, 2)]:
        m = F(a + b, 2)
        d = b - a
        E(P, "probleme", f"Sur une droite graduée, $A$ a pour abscisse ${a}$ et $B$ pour abscisse ${b}$. Quelle est l'abscisse du milieu $M$ de $[AB]$ ?",
          [f"$ AB = {b} - ({a}) = {d} $, donc $ AM = {d} \\div 2 = {nb(F(d, 2))} $.", f"$ {a} + {nb(F(d, 2))} = {nb(m)} $."],
          f"${nb(m)}$")
    for a, d, sens in [(-2, 6, "droite"), (3, 8, "gauche")]:
        r = a + d if sens == "droite" else a - d
        E(I, "probleme", f"Sur une droite graduée, $A$ a pour abscisse ${a}$. Le point $C$ est à ${d}$ unités de $A$, à sa {sens}. Quelle est l'abscisse de $C$ ?",
          f"$ {a} {'+' if sens == 'droite' else '-'} {d} = {r} $.", f"${r}$")
    E(P, "probleme", "$ABCD$ est un carré avec $A(1\\,;1)$, $B(4\\,;1)$ et $C(4\\,;4)$. Quelles sont les coordonnées de $D$ ?",
      ["De $B$ à $C$ on monte de $3$ : de $A$ à $D$ aussi.", "$D$ a l'abscisse de $A$ et l'ordonnée de $C$."], "$D(1\\,;4)$")
    return E.fin()


# ================================================================ REPRÉSENTATION DE L'ESPACE
PI = Decimal("3.14")


def g5_representation_espace():
    E = B()
    # --- solides : faces, arêtes, sommets, patrons (8)
    noms = {3: "triangulaire", 5: "pentagonale", 6: "hexagonale", 8: "octogonale"}
    for n in [3, 5, 6, 8]:
        E(A if n == 3 else I, "solides", f"Un prisme droit a une base {noms[n]} (${n}$ côtés). Combien a-t-il de faces, d'arêtes et de sommets ?",
          [f"Faces : $2$ bases et ${n}$ rectangles, soit ${n+2}$.", f"Arêtes : ${n}$ par base et ${n}$ latérales, soit ${3*n}$.",
           f"Sommets : ${n}$ par base, soit ${2*n}$."],
          f"${n+2}$ faces, ${3*n}$ arêtes, ${2*n}$ sommets")
    E(A, "solides", "Combien un cube a-t-il de faces, d'arêtes et de sommets ?", "$6$ faces carrées, $12$ arêtes de même longueur, $8$ sommets.",
      "$6$ faces, $12$ arêtes, $8$ sommets")
    E(I, "solides", "Vérifie la formule d'Euler $ S - A + F = 2 $ sur un prisme à base triangulaire.",
      f"$S = 6$, $A = 9$, $F = 5$ : $ 6 - 9 + 5 = {6-9+5} $.", "$ 6 - 9 + 5 = 2 $ ✓")
    r, h = 5, 12
    E(P, "solides", f"Le patron d'un cylindre de rayon ${r}$ cm et de hauteur ${h}$ cm contient un rectangle. Quelles sont ses dimensions ? (Prends $\\pi \\approx 3{{,}}14$.)",
      [f"Un côté du rectangle est la hauteur (${h}$ cm) ; l'autre est la longueur du cercle de base : $2\\pi r$.",
       f"$ 2 \\pi \\times {r} \\approx 2 \\times 3{{,}}14 \\times {r} = {nb(2*PI*r)} $ cm."],
      f"${h}$ cm sur environ ${nb(2*PI*r)}$ cm")
    E(I, "solides", "Un bloc de $6$ carrés disposés en $2 \\times 3$ peut-il être le patron d'un cube ?",
      "Non : il contient un bloc de $2 \\times 2$ carrés, et un tel bloc n'est jamais dans un patron de cube (deux faces se superposeraient au pliage).", "Non")
    # --- volume pavé et cube (8)
    for L, l, h in [(5, 3, 2), (8, 4, 6), (12, 5, 3), (F(5, 2), 4, 10), (15, 10, 8)]:
        v = F(L) * l * h
        E(A, "volume-pave-cube", f"Calcule le volume d'un pavé droit de ${nb(L)}$ cm, ${l}$ cm et ${h}$ cm.",
          f"$ V = L \\times \\ell \\times h = {nb(L)} \\times {l} \\times {h} = {nb(v)} $ cm³.", f"${nb(v)}$ cm³")
    for a in [4, 7, F(3, 2)]:
        v = F(a) ** 3
        E(A if isinstance(a, int) else I, "volume-pave-cube", f"Calcule le volume d'un cube d'arête ${nb(a)}$ cm.",
          f"$ V = a^3 = {nb(a)} \\times {nb(a)} \\times {nb(a)} = {nb(v)} $ cm³.", f"${nb(v)}$ cm³")
    # --- volume prisme (8)
    for a, b, h in [(3, 4, 10), (6, 5, 8), (4, 9, 12), (5, 7, 6)]:
        ab = F(a * b, 2)
        E(I, "volume-prisme",
          f"Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent ${a}$ cm et ${b}$ cm. Sa hauteur est ${h}$ cm. Calcule son volume.",
          [f"Aire de la base : $ \\dfrac{{{a} \\times {b}}}{{2}} = {nb(ab)} $ cm².", f"$ V = {nb(ab)} \\times {h} = {nb(ab*h)} $ cm³."],
          f"${nb(ab*h)}$ cm³")
    for ab, h in [(15, 4), (F(25, 2), 8)]:
        E(A, "volume-prisme", f"Un prisme droit a une base d'aire ${nb(ab)}$ cm² et une hauteur de ${h}$ cm. Calcule son volume.",
          f"$ V = \\mathcal{{A}}_{{\\text{{base}}}} \\times h = {nb(ab)} \\times {h} = {nb(F(ab)*h)} $ cm³.", f"${nb(F(ab)*h)}$ cm³")
    for b, hb, h in [(6, 4, 9), (10, 3, 7)]:
        ab = F(b * hb, 2)
        E(P, "volume-prisme",
          f"Un prisme droit a pour base un triangle de base ${b}$ cm et de hauteur relative ${hb}$ cm. La hauteur du prisme est ${h}$ cm. Calcule son volume.",
          [f"Aire du triangle : $ \\dfrac{{{b} \\times {hb}}}{{2}} = {nb(ab)} $ cm².", f"$ V = {nb(ab)} \\times {h} = {nb(ab*h)} $ cm³."],
          f"${nb(ab*h)}$ cm³")
    # --- volume cylindre (8)
    for r, h in [(5, 12), (2, 10), (3, 7), (10, 5), (4, 15), (1, 20)]:
        base = PI * r * r
        v = base * h
        E(I, "volume-cylindre", f"Calcule le volume d'un cylindre de rayon ${r}$ cm et de hauteur ${h}$ cm. (Prends $\\pi \\approx 3{{,}}14$.)",
          [f"Aire de la base : $ 3{{,}}14 \\times {r} \\times {r} = {nb(base)} $ cm².", f"$ V \\approx {nb(base)} \\times {h} = {nb(v)} $ cm³."],
          f"$\\approx {nb(v)}$ cm³")
    for r, h in [(10, 3), (3, 4)]:
        E(P, "volume-cylindre", f"Donne la valeur exacte du volume d'un cylindre de rayon ${r}$ cm et de hauteur ${h}$ cm, en fonction de $\\pi$.",
          f"$ V = \\pi \\times {r}^2 \\times {h} = \\pi \\times {r*r} \\times {h} = {r*r*h}\\pi $ cm³.", f"${r*r*h}\\pi$ cm³")
    # --- aire du disque (6)
    for r in [3, 10, 6, 1]:
        a = PI * r * r
        E(A, "aire-disque", f"Calcule l'aire d'un disque de rayon ${r}$ cm. (Prends $\\pi \\approx 3{{,}}14$.)",
          f"$ \\mathcal{{A}} = \\pi \\times r \\times r \\approx 3{{,}}14 \\times {r*r} = {nb(a)} $ cm².", f"$\\approx {nb(a)}$ cm²")
    E(I, "aire-disque", "Calcule l'aire d'un disque de diamètre $8$ cm. (Prends $\\pi \\approx 3{,}14$.)",
      ["Le rayon est la moitié du diamètre : $4$ cm.", f"$ 3{{,}}14 \\times 16 = {nb(PI*16)} $ cm²."], f"$\\approx {nb(PI*16)}$ cm²")
    E(P, "aire-disque", "Un disque a un rayon de $5$ cm. Calcule son périmètre et son aire. (Prends $\\pi \\approx 3{,}14$.)",
      [f"Périmètre : $ 2 \\times 3{{,}}14 \\times 5 = {nb(PI*10)} $ cm.", f"Aire : $ 3{{,}}14 \\times 25 = {nb(PI*25)} $ cm²."],
      f"$\\approx {nb(PI*10)}$ cm et $\\approx {nb(PI*25)}$ cm²")
    # --- conversions (6)
    conv = [("2.5", "dm³", "cm³", 1000), ("3000", "mm³", "cm³", F(1, 1000)), ("1.2", "m³", "dm³", 1000),
            ("750", "cm³", "L", F(1, 1000)), ("4", "L", "cL", 100), ("2", "m³", "L", 1000)]
    for v, u1, u2, k in conv:
        r = Decimal(v) * _D(k)
        if u2 == "L" and u1 == "cm³":
            c = "$1$ L $= 1$ dm³ $= 1\\,000$ cm³ : on divise par $1\\,000$."
        elif u2 == "cL":
            c = "$1$ L $= 100$ cL."
        elif u2 == "L":
            c = "$1$ m³ $= 1\\,000$ dm³ $= 1\\,000$ L."
        else:
            c = "Pour les volumes, chaque rang compte pour $1\\,000$ : " + (
                f"$ {nb(Decimal(v))} \\times 1\\,000 = {nb(r)} $." if k > 1 else f"$ {nb(Decimal(v))} \\div 1\\,000 = {nb(r)} $.")
        E(A if u2 != "L" else I, "conversions-volume", f"Convertis ${nb(Decimal(v))}$ {u1} en {u2}.", c, f"${nb(r)}$ {u2}")
    # --- problèmes (6)
    v = 60 * 30 * 40
    E(PB, "probleme", "Un aquarium a la forme d'un pavé droit de $60$ cm sur $30$ cm sur $40$ cm. Combien de litres d'eau peut-il contenir ?",
      [f"$ V = 60 \\times 30 \\times 40 = {nb(v)} $ cm³.", f"${nb(v)}$ cm³ $= {nb(v//1000)}$ dm³ $= {nb(v//1000)}$ L."], f"${nb(v//1000)}$ L")
    v = PI * 25 * 12
    E(PB, "probleme", "Une boîte de conserve est un cylindre de rayon $5$ cm et de hauteur $12$ cm. Quelle est sa contenance en cL ? (Prends $\\pi \\approx 3{,}14$.)",
      [f"$ V \\approx 3{{,}}14 \\times 25 \\times 12 = {nb(v)} $ cm³.", f"$1$ cm³ $= 1$ mL, donc ${nb(v)}$ mL $\\approx {nb(v/10)}$ cL."],
      f"$\\approx {nb(v/10)}$ cL")
    v = 10 * 4 * Decimal("1.5")
    E(PB, "probleme", "Une piscine a la forme d'un pavé droit de $10$ m de long, $4$ m de large et $1{,}5$ m de profondeur. Combien de litres d'eau faut-il pour la remplir ?",
      [f"$ V = 10 \\times 4 \\times 1{{,}}5 = {nb(v)} $ m³.", f"$1$ m³ $= 1\\,000$ L, donc ${nb(v*1000)}$ L."], f"${nb(v*1000)}$ L")
    E(PB, "probleme", "Un pavé droit mesure $2$ m sur $50$ cm sur $30$ cm. Calcule son volume en m³.",
      ["On convertit tout en cm : $ 200 \\times 50 \\times 30 = 300\\,000 $ cm³.", f"$300\\,000$ cm³ $= {nb(Decimal('0.3'))}$ m³."], f"${nb(Decimal('0.3'))}$ m³")
    E(PB, "probleme", "Un empilement plein en forme de pavé compte $4$ cubes de long, $3$ de large et $2$ de haut. Combien de cubes contient-il ? Combien de carrés voit-on sur la vue de dessus ?",
      [f"Nombre de cubes : $ 4 \\times 3 \\times 2 = {4*3*2} $.", f"Vue de dessus : $ 4 \\times 3 = {4*3} $ carrés."], f"${4*3*2}$ cubes ; ${4*3}$ carrés")
    E(P, "probleme", "On double l'arête d'un cube de $3$ cm. Par combien son volume est-il multiplié ?",
      [f"$ 3^3 = 27 $ cm³ et $ 6^3 = {6**3} $ cm³.", f"$ {6**3} \\div 27 = {6**3//27} $."], f"Par ${6**3//27}$")
    return E.fin()


# ================================================================ STATISTIQUES
def g5_statistiques():
    E = B()
    # --- effectifs (6)
    tabs = [([8, 10, 12, 15], [4, 5, 7, 4], "Note"), ([0, 1, 2, 3, 4], [3, 8, 9, 6, 2], "Nombre de frères et sœurs"),
            ([36, 37, 38, 39, 40], [2, 5, 9, 6, 3], "Pointure"), ([1, 2, 3, 4], [12, 7, 5, 1], "Nombre de passagers par voiture")]
    for vals, effs, nom in tabs:
        E(A, "effectifs", f"{nom} : " + " ; ".join(f"${v}$" for v in vals) + ". Effectifs : " + " ; ".join(f"${e}$" for e in effs)
          + ". Quel est l'effectif total ?", f"$ {' + '.join(map(str, effs))} = {sum(effs)} $.", f"${sum(effs)}$")
    E(A, "effectifs", "Voici les notes de $12$ élèves : $9$, $12$, $15$, $12$, $9$, $10$, $12$, $15$, $10$, $12$, $9$, $12$. Quel est l'effectif de la note $12$ ?",
      "On compte les $12$ dans la liste.", f"${[9, 12, 15, 12, 9, 10, 12, 15, 10, 12, 9, 12].count(12)}$")
    E(I, "effectifs", "Dans un tableau, on lit les effectifs $5$, $8$ et $6$, et un effectif total de $20$. Que peut-on dire ?",
      f"$ 5 + 8 + 6 = {5+8+6} \\neq 20 $ : une donnée a été oubliée ou mal comptée.", "Il y a une erreur : la somme fait $19$")
    # --- fréquences (8)
    for e, t in [(7, 20), (9, 30), (12, 50), (6, 24), (18, 40), (3, 25)]:
        q = F(e, t)
        E(A if t in (20, 50, 25) else I, "frequence", f"Une valeur a un effectif de ${e}$ sur un effectif total de ${t}$. Donne sa fréquence sous forme de fraction, de nombre décimal et de pourcentage.",
          [f"Fréquence $ = \\dfrac{{{e}}}{{{t}}}" + (f" = {fl(q)}" if gcd(e, t) > 1 else "") + f" = {nb(q)} $.", f"$ {nb(q)} \\times 100 = {nb(q*100)} $ : soit ${nb(q*100)}\\ \\%$."],
          f"$ {fb(e, t)} = {nb(q)} = {nb(q*100)}\\ \\% $")
    E(I, "frequence", "Dans la classe A, $7$ élèves sur $20$ font du foot ; dans la classe B, $9$ élèves sur $30$. Quelle classe a la plus grande proportion de footballeurs ?",
      [f"A : $ \\dfrac{{7}}{{20}} = {nb(F(7, 20))} $, soit ${nb(F(700, 20))}\\ \\%$.", f"B : $ \\dfrac{{9}}{{30}} = {nb(F(9, 30))} $, soit ${nb(F(900, 30))}\\ \\%$.",
       "On compare des fréquences, pas des effectifs."], "La classe A")
    E(I, "frequence", "Les fréquences de trois valeurs sont $0{,}25$, $0{,}4$ et une troisième inconnue. Quelle est la troisième ?",
      f"La somme des fréquences vaut $1$ : $ 1 - 0{{,}}25 - 0{{,}}4 = {nb(1 - Decimal('0.25') - Decimal('0.4'))} $.", f"${nb(1 - Decimal('0.25') - Decimal('0.4'))}$")
    # --- moyenne simple (8)
    for serie in [[12, 15, 9, 14], [8, 11, 13, 10, 18], [3, 7, 5, 9, 6, 6], [14, 16, 11], [21, 18, 25, 20], [7, 13, 9, 11, 12, 8, 10],
                  [F(25, 2), 14, F(31, 2), 11]]:
        s = sum(F(x) for x in serie)
        m = s / len(serie)
        E(A if m.denominator == 1 else I, "moyenne", "Calcule la moyenne de la série : " + " ; ".join(f"${nb(x)}$" for x in serie) + ".",
          [f"Somme : $ {' + '.join(nb(x) for x in serie)} = {nb(s)} $.", f"Moyenne : $ {nb(s)} \\div {len(serie)} " + ("=" if (m * 100).denominator == 1 else "\\approx") + f" {nb(m, 2)} $."],
          f"${nb(m, 2)}$" if m.denominator in (1, 2, 4, 5, 10, 20, 25, 50, 100) else f"$\\approx {nb(m, 2)}$")
    E(I, "moyenne", "Températures relevées à midi pendant une semaine (en °C) : $-2$ ; $1$ ; $4$ ; $-3$ ; $0$ ; $5$ ; $2$. Calcule la température moyenne.",
      [f"Somme : $ -2 + 1 + 4 - 3 + 0 + 5 + 2 = {-2+1+4-3+0+5+2} $.", f"Moyenne : $ {-2+1+4-3+0+5+2} \\div 7 = {nb(F(7, 7))} $."],
      f"${nb(F(-2+1+4-3+0+5+2, 7))}$ °C")
    # --- moyenne avec effectifs (8)
    for vals, effs, nom in tabs + [([5, 10, 15, 20], [3, 6, 8, 3], "Note"), ([1, 2, 3], [4, 10, 6], "Nombre d'animaux"),
                                   ([0, 1, 2, 3], [5, 9, 4, 2], "Nombre de buts"), ([6, 7, 8], [10, 25, 15], "Heures de sommeil")]:
        n = sum(effs)
        s = sum(v * e for v, e in zip(vals, effs))
        m = F(s, n)
        exact = (m * 100).denominator == 1
        E(I if exact else P, "moyenne-effectifs",
          f"{nom} : " + " ; ".join(f"${v}$" for v in vals) + ". Effectifs : " + " ; ".join(f"${e}$" for e in effs)
          + ". Calcule la moyenne" + ("" if exact else " (arrondie au centième)") + ".",
          ["On multiplie chaque valeur par son effectif : $ " + " + ".join(f"{v} \\times {e}" for v, e in zip(vals, effs)) + f" = {s} $.",
           f"On divise par l'effectif total : $ {s} \\div {n} " + ("=" if exact else "\\approx") + f" {nb(m, 2)} $."],
          f"${nb(m, 2)}$" if exact else f"$\\approx {nb(m, 2)}$")
    # --- diagramme circulaire (8)
    for vals, effs, nom in [(["Foot", "Danse", "Judo", "Natation"], [8, 5, 4, 7], "Sport pratiqué"),
                            (["Bus", "Vélo", "À pied", "Voiture"], [12, 3, 9, 6], "Moyen de transport"),
                            (["Chat", "Chien", "Poisson", "Aucun"], [4, 6, 2, 12], "Animal de compagnie")]:
        n = sum(effs)
        for idx in ([0, 1] if nom != "Animal de compagnie" else [3]):
            ang = F(effs[idx] * 360, n)
            assert ang.denominator == 1
            E(I, "diagramme-circulaire",
              f"{nom} dans une classe : " + " ; ".join(f"{v} : ${e}$" for v, e in zip(vals, effs))
              + f". Quel angle faut-il donner au secteur « {vals[idx]} » dans un diagramme circulaire ?",
              [f"Effectif total : ${n}$.", f"Angle $ = \\dfrac{{{effs[idx]}}}{{{n}}} \\times 360° = {ang}° $."], f"${ang}°$")
    E(I, "diagramme-circulaire", "Dans un diagramme circulaire, une valeur a une fréquence de $0{,}35$. Quel est l'angle de son secteur ?",
      f"$ 0{{,}}35 \\times 360° = {nb(Decimal('0.35')*360)}° $.", f"${nb(Decimal('0.35')*360)}°$")
    E(P, "diagramme-circulaire", "Dans un diagramme circulaire, un secteur mesure $90°$. Quelle fréquence représente-t-il ?",
      ["$ \\dfrac{90}{360} = \\dfrac{1}{4} $.", "Soit $0{,}25$, ou $25\\ \\%$."], "$\\dfrac{1}{4}$, soit $25\\ \\%$")
    E(P, "diagramme-circulaire", "Dans un diagramme circulaire, les angles des secteurs valent $72°$, $90°$, $126°$ et un dernier. Quel est le dernier angle ?",
      f"La somme des angles fait $360°$ : $ 360 - 72 - 90 - 126 = {360-72-90-126} $.", f"${360-72-90-126}°$")
    # --- interprétation (6)
    itp = [
        (A, "Quel type de graphique choisir pour montrer comment se répartissent les élèves entre les options ?",
         "Pour une répartition d'un tout, on utilise un diagramme circulaire.", "Un diagramme circulaire"),
        (A, "Quel type de graphique choisir pour montrer l'évolution de la température au cours d'une journée ?",
         "Les données se suivent dans le temps : graphique cartésien.", "Un graphique cartésien"),
        (A, "Quel type de graphique choisir pour comparer le nombre de livres empruntés par chaque classe ?",
         "Pour comparer des catégories entre elles : diagramme en barres.", "Un diagramme en barres"),
        (I, "Deux classes ont toutes les deux $10$ de moyenne. Ont-elles forcément les mêmes résultats ?",
         "Non : l'une peut avoir toutes ses notes entre $9$ et $11$, l'autre la moitié à $0$ et la moitié à $20$. La moyenne résume, elle ne décrit pas tout.",
         "Non"),
        (I, "Sur un graphique, l'axe vertical commence à $80$ et non à $0$. Pourquoi faut-il être prudent ?",
         "Les écarts paraissent beaucoup plus grands qu'ils ne le sont.", "Les écarts sont visuellement exagérés"),
        (I, "Un élève calcule la moyenne des notes $8$ (4 fois), $10$ (5 fois), $12$ (7 fois), $15$ (4 fois) en faisant $ \\dfrac{8 + 10 + 12 + 15}{4} $. Où est l'erreur ?",
         [f"Il faut tenir compte des effectifs et diviser par l'effectif total $20$.",
          f"Moyenne correcte : $ \\dfrac{{8 \\times 4 + 10 \\times 5 + 12 \\times 7 + 15 \\times 4}}{{20}} = \\dfrac{{{8*4+10*5+12*7+15*4}}}{{20}} = {nb(F(8*4+10*5+12*7+15*4, 20))} $."],
         f"Il oublie les effectifs ; la moyenne est ${nb(F(8*4+10*5+12*7+15*4, 20))}$"),
    ]
    for d, e, c, r in itp:
        E(d, "interpretation", e, c, r)
    # --- problèmes (6)
    notes = [12, 9, 14]
    cible, n = 12, 4
    x = cible * n - sum(notes)
    E(PB, "probleme", f"Inès a eu $12$, $9$ et $14$. Quelle note doit-elle obtenir au quatrième contrôle pour avoir ${cible}$ de moyenne ?",
      [f"Pour une moyenne de ${cible}$ sur ${n}$ notes, la somme doit valoir $ {cible} \\times {n} = {cible*n} $.",
       f"$ {cible*n} - (12 + 9 + 14) = {cible*n} - {sum(notes)} = {x} $."], f"${x}$")
    E(PB, "probleme", "La moyenne de $5$ nombres est $8$. Quelle est leur somme ?", f"$ 8 \\times 5 = {40} $.", "$40$")
    m = F(1500 + 1400 + 1700 + 1600, 4)
    E(PB, "probleme", "Un marchand de glaces vend $1\\,500$, $1\\,400$, $1\\,700$ et $1\\,600$ cornets pendant les quatre semaines de juillet. Quelle est la moyenne hebdomadaire ?",
      [f"$ 1\\,500 + 1\\,400 + 1\\,700 + 1\\,600 = {nb(6200)} $.", f"$ {nb(6200)} \\div 4 = {nb(m)} $."], f"${nb(m)}$ cornets")
    E(PB, "probleme", "Sur $25$ élèves, $40\\ \\%$ viennent au collège en bus. Combien d'élèves cela fait-il ?",
      f"$ 0{{,}}4 \\times 25 = {nb(Decimal('0.4')*25)} $.", f"${nb(Decimal('0.4')*25)}$ élèves")
    E(PB, "probleme", "Lors d'un sondage auprès de $200$ personnes, $54$ préfèrent la montagne. Quelle est la fréquence en pourcentage ?",
      f"$ \\dfrac{{54}}{{200}} = {nb(F(54, 200))} $, soit ${nb(F(5400, 200))}\\ \\%$.", f"${nb(F(5400, 200))}\\ \\%$")
    m2 = F(4 * 15 + 6 * 10, 10)
    E(P, "probleme", "Dans un groupe, $4$ élèves ont une moyenne de $15$ et $6$ autres ont une moyenne de $10$. Quelle est la moyenne du groupe entier ?",
      [f"Somme des notes : $ 4 \\times 15 + 6 \\times 10 = {4*15+6*10} $.", f"$ {4*15+6*10} \\div 10 = {nb(m2)} $ (et pas $ \\dfrac{{15 + 10}}{{2}} = 12{{,}}5 $)."],
      f"${nb(m2)}$")
    return E.fin()


# ================================================================ TRANSFORMATIONS
def g5_transformations():
    E = B()
    # --- symétrie axiale dans un repère (8)
    for k, (x, y) in enumerate([(3, 5), (-2, 4), (6, -1), (-5, -3), (4, 2), (-7, 1), (2, 0), (0, 3)]):
        axe = "abscisses" if k % 2 == 0 else "ordonnées"
        im = (x, -y) if axe == "abscisses" else (-x, y)
        if im == (x, y):
            c = "Le point est sur l'axe : il est son propre symétrique."
        elif axe == "abscisses":
            c = "L'axe des abscisses est horizontal : l'abscisse ne change pas, l'ordonnée change de signe."
        else:
            c = "L'axe des ordonnées est vertical : l'ordonnée ne change pas, l'abscisse change de signe."
        E(A if k < 6 else I, "symetrie-axiale", f"Donne les coordonnées du symétrique de $A{pt(x, y)}$ par rapport à l'axe des {axe}.",
          c, f"${pt(*im)}$")
    # --- demi-tour dans un repère (10)
    for k, ((x, y), (a, b)) in enumerate([((3, 2), (0, 0)), ((-4, 1), (0, 0)), ((5, -6), (0, 0)), ((-2, -7), (0, 0)),
                                         ((3, 1), (1, 1)), ((4, 5), (2, 3)), ((-1, 2), (1, 0)), ((6, -2), (3, 1)),
                                         ((0, 4), (-2, 1)), ((2, 2), (2, 2))]):
        xi, yi = 2 * a - x, 2 * b - y
        if (a, b) == (0, 0):
            c = ["Le centre $O$ est le milieu de $[MM']$ : par rapport à l'origine, les deux coordonnées changent de signe."]
        elif (x, y) == (a, b):
            c = ["Le point est le centre du demi-tour : il est sa propre image."]
        else:
            dx, dy = a - x, b - y
            c = [f"De $M$ à $\\Omega$ : on se déplace de ${nb(dx)}$ horizontalement et de ${nb(dy)}$ verticalement.",
                 f"On refait le même déplacement à partir de $\\Omega$ : $ ({nb(a)} {'+' if dx >= 0 else '-'} {abs(dx)}\\,;{nb(b)} {'+' if dy >= 0 else '-'} {abs(dy)}) = {pt(xi, yi)} $."]
        E(A if k < 4 else I if k < 9 else P, "demi-tour",
          f"Donne les coordonnées de l'image de $M{pt(x, y)}$ par le demi-tour de centre " + ("$O$, origine du repère." if (a, b) == (0, 0) else f"$\\Omega{pt(a, b)}$."),
          c, f"$M'{pt(xi, yi)}$")
    # --- demi-tour sur quadrillage (6)
    for dx, dy in [(2, 1), (3, -2), (-4, 1), (1, -5), (-2, -3), (5, 0)]:
        def mots(dx, dy):
            m = []
            if dx:
                m.append(f"${abs(dx)}$ carreau{'x' if abs(dx) > 1 else ''} vers la {'droite' if dx > 0 else 'gauche'}")
            if dy:
                m.append(f"${abs(dy)}$ carreau{'x' if abs(dy) > 1 else ''} vers le {'haut' if dy > 0 else 'bas'}")
            return " et ".join(m)
        E(A, "demi-tour-quadrillage",
          f"Sur un quadrillage, pour aller de $M$ au centre $O$, on se déplace de {mots(dx, dy)}. Comment aller de $O$ à l'image $M'$ ?",
          "On continue le même déplacement au-delà de $O$ : $O$ doit être le milieu de $[MM']$.",
          mots(dx, dy)[0].upper() + mots(dx, dy)[1:] if not mots(dx, dy).startswith("$") else "Encore " + mots(dx, dy))
    # --- propriétés conservées (8)
    prop = [
        (A, "Le segment $[AB]$ mesure $5{,}2$ cm. Combien mesure son image $[A'B']$ par un demi-tour ?", "Le demi-tour conserve les longueurs.", "$5{,}2$ cm"),
        (A, "Un angle mesure $47°$. Combien mesure son image par un demi-tour ?", "Le demi-tour conserve les mesures d'angles.", "$47°$"),
        (A, "Un triangle a une aire de $12$ cm². Quelle est l'aire de son image par un demi-tour ?", "Le demi-tour conserve les aires.", "$12$ cm²"),
        (A, "Un cercle de centre $C$ a un rayon de $3$ cm. Que faut-il construire pour obtenir son image par un demi-tour ?",
         "L'image d'un cercle est un cercle de même rayon : il suffit de construire l'image $C'$ du centre.", "L'image $C'$ du centre ; le rayon reste $3$ cm"),
        (I, "Les points $A$, $B$, $C$ sont alignés. Leurs images par un demi-tour sont-elles alignées ?", "Le demi-tour conserve l'alignement.", "Oui"),
        (I, "$ABC$ est un triangle rectangle en $A$. Quelle est la nature de son image par un demi-tour ?",
         "Les angles sont conservés : l'angle droit reste un angle droit.", "Un triangle rectangle en $A'$"),
        (I, "Par un demi-tour, $(AB)$ a pour image $(A'B')$. Quelle est la position de $(A'B')$ par rapport à $(AB)$ ?",
         "L'image d'une droite par un demi-tour est une droite parallèle.", "Elles sont parallèles"),
        (PB, "Un carré $ABCD$ a un côté de $4$ cm. On construit son image par un demi-tour. Donne le périmètre et l'aire de l'image.",
         [f"Longueurs conservées : périmètre $ 4 \\times 4 = 16 $ cm.", f"Aire conservée : $ 4 \\times 4 = 16 $ cm²."], "$16$ cm et $16$ cm²"),
    ]
    for d, e, c, r in prop:
        E(d, "proprietes", e, c, r)
    # --- vrai ou faux (8)
    vf = [
        (A, "Vrai ou faux : le demi-tour et la symétrie centrale sont la même transformation.", "Ce sont deux noms pour la même transformation.", "Vrai"),
        (A, "Vrai ou faux : par un demi-tour de centre $O$, le seul point qui ne bouge pas est $O$.", "Tous les autres points sont envoyés de l'autre côté de $O$.", "Vrai"),
        (A, "Vrai ou faux : par une symétrie axiale, tous les points de l'axe sont leur propre image.", "Un point posé sur l'axe ne bouge pas.", "Vrai"),
        (I, "Vrai ou faux : par une symétrie axiale, l'image d'une droite lui est toujours parallèle.",
         "Faux en général : une droite « de travers » par rapport à l'axe a une image qui la coupe. C'est le demi-tour qui donne une droite parallèle.", "Faux"),
        (I, "Vrai ou faux : le demi-tour retourne la figure, comme un miroir.", "Faux : la figure est tournée, pas retournée. C'est la symétrie axiale qui retourne.", "Faux"),
        (I, "Vrai ou faux : une droite qui passe par le centre $O$ d'un demi-tour a pour image elle-même.", "Ses points glissent le long d'elle, mais la droite ne change pas.", "Vrai"),
        (I, "On applique deux fois de suite le même demi-tour à un point $M$. Où arrive-t-on ?", "$M$ donne $M'$, et $M'$ redonne $M$ : deux demi-tours font un tour complet.", "On revient en $M$"),
        (P, "Pour construire l'image $M'$ de $M$ par le demi-tour de centre $O$, Léo place $M'$ du même côté de $O$ que $M$, avec $OM' = OM$. A-t-il raison ?",
         "Non : $M$, $O$, $M'$ doivent être alignés et $O$ doit être entre les deux, au milieu de $[MM']$.", "Non"),
    ]
    for d, e, c, r in vf:
        E(d, "vrai-faux", e, c, r)
    # --- milieu et centre (6)
    for om in [F(7, 2), 6, F(23, 5)]:
        E(A, "centre-milieu", f"$M'$ est l'image de $M$ par le demi-tour de centre $O$, et $OM = {nb(om)}$ cm. Calcule $MM'$.",
          ["$O$ est le milieu de $[MM']$.", f"$ MM' = 2 \\times {nb(om)} = {nb(2*F(om))} $ cm."], f"${nb(2*F(om))}$ cm")
    for mm in [9, 13, F(31, 5)]:
        E(I, "centre-milieu", f"$M'$ est l'image de $M$ par le demi-tour de centre $O$, et $MM' = {nb(mm)}$ cm. Calcule $OM'$.",
          ["$O$ est le milieu de $[MM']$.", f"$ OM' = {nb(mm)} \\div 2 = {nb(F(mm)/2)} $ cm."], f"${nb(F(mm)/2)}$ cm")
    # --- centre de symétrie d'une figure (4)
    cs = [
        (PB, "Lina a découpé un carreau de carrelage en forme de parallélogramme. Autour de quel point doit-elle le faire tourner d'un demi-tour pour qu'il retombe exactement à sa place ?", "Le demi-tour autour du point d'intersection des diagonales envoie la figure sur elle-même.",
         "Autour du point d'intersection de ses diagonales"),
        (I, "Un triangle équilatéral a-t-il un centre de symétrie ?", "Après un demi-tour, la pointe vers le haut serait vers le bas : la figure ne se superpose pas à elle-même.", "Non"),
        (I, "Parmi les lettres majuscules N, A, S et T, lesquelles ont un centre de symétrie ?", "N et S se superposent à elles-mêmes après un demi-tour ; A et T non.", "N et S"),
        (I, "Un cercle a-t-il un centre de symétrie ?", "Le demi-tour autour du centre du cercle envoie le cercle sur lui-même.", "Oui, son centre"),
    ]
    for d, e, c, r in cs:
        E(d, "centre-de-symetrie", e, c, r)
    return E.fin()


# ================================================================ TRIANGLES ET ANGLES
def g5_triangles_angles():
    E = B()
    # --- somme des angles (10)
    for k, (a, b) in enumerate([(50, 70), (35, 85), (90, 27), (110, 42), (64, 64), (18, 123), (45, 45), (100, 25)]):
        c = 180 - a - b
        E(A if k < 5 else I, "somme-angles", f"Dans un triangle $ABC$, $ \\widehat{{A}} = {a}° $ et $ \\widehat{{B}} = {b}° $. Calcule $ \\widehat{{C}} $.",
          ["La somme des angles d'un triangle vaut $180°$.", f"$ \\widehat{{C}} = 180° - {a}° - {b}° = {c}° $."], f"${c}°$")
    E(I, "somme-angles", "Un triangle peut-il avoir deux angles droits ?", "Deux angles droits font déjà $180°$ : il ne resterait rien pour le troisième.", "Non")
    E(P, "somme-angles", "Un triangle peut-il avoir des angles de $95°$, $60°$ et $30°$ ?", f"$ 95 + 60 + 30 = {95+60+30} \\neq 180 $.", "Non")
    # --- isocèle et équilatéral (8)
    for top in [40, 100, 26]:
        base = (180 - top) // 2
        assert 2 * base + top == 180
        E(I, "isocele-equilateral", f"$ABC$ est isocèle en $A$ avec $ \\widehat{{A}} = {top}° $. Calcule $ \\widehat{{B}} $ et $ \\widehat{{C}} $.",
          ["Les angles à la base sont égaux.", f"$ \\widehat{{B}} = \\widehat{{C}} = (180° - {top}°) \\div 2 = {180-top}° \\div 2 = {base}° $."],
          f"${base}°$ chacun")
    E(PB, "isocele-equilateral", "Vue de face, la charpente d'un toit forme un triangle isocèle dont l'angle au sommet mesure $120°$. Combien mesure chaque angle à la base ?",
      ["Les angles à la base d'un triangle isocèle sont égaux.", f"$ (180° - 120°) \\div 2 = 60° \\div 2 = {(180-120)//2}° $."],
      f"${(180-120)//2}°$ chacun")
    for base in [70, 35, 52]:
        E(I, "isocele-equilateral", f"$DEF$ est isocèle en $D$ avec $ \\widehat{{E}} = {base}° $. Calcule $ \\widehat{{F}} $ et $ \\widehat{{D}} $.",
          [f"Angles à la base égaux : $ \\widehat{{F}} = {base}° $.", f"$ \\widehat{{D}} = 180° - {base}° - {base}° = {180-2*base}° $."],
          f"$ \\widehat{{F}} = {base}° $ ; $ \\widehat{{D}} = {180-2*base}° $")
    E(A, "isocele-equilateral", "Combien mesure chaque angle d'un triangle équilatéral ? Justifie.",
      "Les trois angles sont égaux et leur somme vaut $180°$ : $ 180 \\div 3 = 60 $.", "$60°$")
    # --- triangle rectangle (6)
    for a in [35, 58, 72, 19, 45]:
        E(A, "triangle-rectangle", f"$ABC$ est rectangle en $A$ et $ \\widehat{{B}} = {a}° $. Calcule $ \\widehat{{C}} $.",
          ["Les deux angles aigus d'un triangle rectangle sont complémentaires.", f"$ \\widehat{{C}} = 90° - {a}° = {90-a}° $."], f"${90-a}°$")
    E(P, "triangle-rectangle", "Un triangle rectangle a un angle de $45°$. Quelle est sa nature précise ?",
      ["Le troisième angle vaut $ 90° - 45° = 45° $.", "Deux angles égaux : le triangle est isocèle (et rectangle)."], "Rectangle et isocèle")
    # --- complémentaires, supplémentaires (8)
    for k, a in enumerate([30, 72, 15, 58]):
        E(A, "complementaire-supplementaire", f"Quel est le complémentaire d'un angle de ${a}°$ ?",
          f"Deux angles complémentaires ont pour somme $90°$ : $ 90 - {a} = {90-a} $.", f"${90-a}°$")
    for a in [40, 125, 90, 17]:
        E(A, "complementaire-supplementaire", f"Quel est le supplémentaire d'un angle de ${a}°$ ?",
          f"Deux angles supplémentaires ont pour somme $180°$ : $ 180 - {a} = {180-a} $.", f"${180-a}°$")
    # --- angles et droites (8)
    for a in [38, 115]:
        E(A, "angles-droites", f"Deux droites sécantes forment un angle de ${a}°$. Combien mesure l'angle qui lui est opposé par le sommet ? Et les deux autres angles ?",
          ["Les angles opposés par le sommet sont égaux.", f"Deux angles voisins forment un angle plat : $ 180 - {a} = {180-a} $."],
          f"${a}°$ ; les deux autres mesurent ${180-a}°$")
    for a in [65, 128, 47]:
        E(I, "angles-droites", f"Deux droites parallèles $(d_1)$ et $(d_2)$ sont coupées par une sécante. Un angle alterne-interne mesure ${a}°$. Combien mesure l'autre ?",
          "Si deux droites sont parallèles, les angles alternes-internes qu'elles forment avec une sécante sont égaux.", f"${a}°$")
    E(I, "angles-droites", "Deux droites parallèles sont coupées par une sécante. Un angle mesure $72°$. Combien mesure l'angle correspondant ?",
      "Avec des parallèles, les angles correspondants sont égaux.", "$72°$")
    E(P, "angles-droites", "Deux droites $(d_1)$ et $(d_2)$ sont coupées par une sécante. Deux angles alternes-internes mesurent $81°$ et $79°$. Les droites sont-elles parallèles ?",
      "Si les droites étaient parallèles, les angles alternes-internes seraient égaux. Ici $81° \\neq 79°$ : elles ne sont pas parallèles.", "Non")
    E(P, "angles-droites", "Deux droites sont coupées par une sécante et forment deux angles alternes-internes de $54°$ chacun. Que peut-on conclure ?",
      ["On sait que les deux angles alternes-internes sont égaux ($54°$).",
       "Or, si deux droites coupées par une sécante forment des angles alternes-internes égaux, alors ces droites sont parallèles.",
       "Donc les droites sont parallèles."], "Elles sont parallèles")
    # --- inégalité triangulaire (10)
    for k, cotes in enumerate([(3, 4, 9), (5, 6, 8), (2, 7, 4), (10, 4, 7), (6, 6, 11), (12, 5, 6), (F(7, 2), 2, F(9, 2)), (8, 15, 6)]):
        m = max(cotes)
        autres = list(cotes)
        autres.remove(m)
        s = sum(F(x) for x in autres)
        ok = F(m) < s
        E(A if k < 4 else I, "inegalite-triangulaire",
          f"Peut-on construire un triangle dont les côtés mesurent ${nb(cotes[0])}$ cm, ${nb(cotes[1])}$ cm et ${nb(cotes[2])}$ cm ?",
          [f"Le plus grand côté mesure ${nb(m)}$ cm.", f"Somme des deux autres : $ {nb(autres[0])} + {nb(autres[1])} = {nb(s)} $.",
           f"${nb(m)} < {nb(s)}$ : le triangle est constructible." if ok else f"${nb(m)} > {nb(s)}$ : les deux petits côtés sont trop courts, c'est impossible."],
          "Oui" if ok else "Non")
    E(PB, "inegalite-triangulaire", "Un triangle a deux côtés de $5$ cm et $8$ cm. Le troisième côté mesure un nombre entier de centimètres et c'est le plus long. Quelle est sa plus grande longueur possible ?",
      ["Le plus grand côté doit être strictement plus petit que $ 5 + 8 = 13 $ cm.", "Le plus grand entier possible est donc $12$ cm."], "$12$ cm")
    E(PB, "inegalite-triangulaire", "Trois villes $A$, $B$ et $C$ sont reliées par des routes droites : de $A$ à $B$ il y a $40$ km et de $B$ à $C$ $25$ km. La distance à vol d'oiseau de $A$ à $C$ peut-elle être de $70$ km ?",
      [f"Dans le triangle $ABC$, $AC$ doit être plus petit que $ 40 + 25 = {40+25} $ km.", "$70 > 65$ : c'est impossible."], "Non")
    return E.fin()


EXTRA = {
    ("cinquieme", "calcul-litteral"): g5_calcul_litteral,
    ("cinquieme", "fonctions"): g5_fonctions,
    ("cinquieme", "fractions"): g5_fractions,
    ("cinquieme", "nombres-relatifs"): g5_nombres_relatifs,
    ("cinquieme", "operations"): g5_operations,
    ("cinquieme", "parallelogrammes"): g5_parallelogrammes,
    ("cinquieme", "pensee-informatique"): g5_pensee_informatique,
    ("cinquieme", "probabilites"): g5_probabilites,
    ("cinquieme", "proportionnalite"): g5_proportionnalite,
    ("cinquieme", "puissances"): g5_puissances,
    ("cinquieme", "reperage"): g5_reperage,
    ("cinquieme", "representation-espace"): g5_representation_espace,
    ("cinquieme", "statistiques"): g5_statistiques,
    ("cinquieme", "transformations"): g5_transformations,
    ("cinquieme", "triangles-angles"): g5_triangles_angles,
}
