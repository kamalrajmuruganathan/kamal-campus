# -*- coding: utf-8 -*-
"""Générateurs enrichis — lot b2 : maths CM2 et 6e.

Expose EXTRA = {(niveau, slug): fonction sans argument -> liste de 50 exercices}.
Toutes les réponses sont calculées ; tout est déterministe (listes fixes ou
random.Random à graine fixe créé dans chaque fonction).
"""
import math
import random
from decimal import Decimal, ROUND_HALF_UP, ROUND_FLOOR
from fractions import Fraction

# ---------------------------------------------------------------- aides


def _dec(x):
    if isinstance(x, Decimal):
        return x
    if isinstance(x, Fraction):
        return Decimal(x.numerator) / Decimal(x.denominator)
    return Decimal(str(x))


def _parts(x, nd=None):
    d = _dec(x)
    if nd is not None:
        d = d.quantize(Decimal(1).scaleb(-nd), ROUND_HALF_UP)
    s = format(d, "f")
    if nd is None and "." in s:
        s = s.rstrip("0").rstrip(".")
    sg = ""
    if s.startswith("-"):
        sg, s = "-", s[1:]
    ent, _, dc = s.partition(".")
    return sg, ent, dc


def _grouper(ent, sep):
    if len(ent) < 4:
        return ent
    g = []
    while ent:
        g.insert(0, ent[-3:])
        ent = ent[:-3]
    return sep.join(g)


def nb(x, nd=None):
    """Nombre hors formule : 12 500,25"""
    sg, ent, dc = _parts(x, nd)
    return sg + _grouper(ent, " ") + ("," + dc if dc else "")


def nm(x, nd=None):
    """Nombre dans une formule : 12\\,500{,}25"""
    sg, ent, dc = _parts(x, nd)
    return sg + _grouper(ent, "\\,") + ("{,}" + dc if dc else "")


def eur(x):
    d = _dec(x)
    return nb(d) if d == d.to_integral_value() else nb(d, 2)


def eurm(x):
    d = _dec(x)
    return nm(d) if d == d.to_integral_value() else nm(d, 2)


def arrondi(x, pas):
    """Arrondi scolaire (0,5 vers le haut) au multiple de pas."""
    d = _dec(x) / _dec(pas)
    return d.quantize(Decimal(1), ROUND_HALF_UP) * _dec(pas)


def fl(f):
    f = Fraction(f)
    if f.denominator == 1:
        return str(f.numerator)
    return f"\\dfrac{{{f.numerator}}}{{{f.denominator}}}"


def fl2(a, b):
    """Fraction non simplifiée a/b en LaTeX."""
    return f"\\dfrac{{{a}}}{{{b}}}"


def pl(n, sing, plur=None):
    """Accord : 1 carreau, 2 carreaux."""
    if plur is None:
        plur = sing + "s"
    return f"{nb(n)} {sing if abs(n) < 2 else plur}"


VOY = "aeiouyéèêàâîôûœAEIOUYÉÈÊÀÂÎÔÛ"


H_MUET = ("habitant", "heure", "hexagone", "hôtel", "herbe", "huile", "hiver", "homme", "horaire")


def _voy(mot):
    return mot[0] in VOY or mot.lower().startswith(H_MUET)


def de(mot):
    return ("d'" + mot) if _voy(mot) else ("de " + mot)


def que(mot):
    return ("qu'" + mot) if _voy(mot) else ("que " + mot)


def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}


def _fin(E):
    if len(E) != 50:
        raise ValueError(f"{len(E)} exercices au lieu de 50")
    vus = set()
    for t in E:
        if t[2] in vus:
            raise ValueError("énoncé en double : " + t[2])
        vus.add(t[2])
    return [exo(i + 1, *t) for i, t in enumerate(E)]


def hm(m):
    """Horaire en minutes depuis minuit -> '9 h 05'."""
    h, mi = divmod(m % (24 * 60), 60)
    return f"{h} h {mi:02d}"


def duree(m):
    h, mi = divmod(m, 60)
    if h and mi:
        return f"{h} h {mi} min"
    if h:
        return f"{h} h"
    return f"{mi} min"


# ---- nombres en lettres (orthographe traditionnelle, comme la fiche)
_U = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf",
      "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept",
      "dix-huit", "dix-neuf"]
_DIZ = {2: "vingt", 3: "trente", 4: "quarante", 5: "cinquante", 6: "soixante"}


def _m100(n, final):
    if n < 20:
        return _U[n]
    d, u = divmod(n, 10)
    if d == 7:
        return "soixante et onze" if u == 1 else "soixante-" + _U[10 + u]
    if d == 9:
        return "quatre-vingt-" + _U[10 + u]
    if d == 8:
        if u == 0:
            return "quatre-vingts" if final else "quatre-vingt"
        return "quatre-vingt-" + _U[u]
    if u == 0:
        return _DIZ[d]
    if u == 1:
        return _DIZ[d] + " et un"
    return _DIZ[d] + "-" + _U[u]


def _m1000(n, final):
    c, r = divmod(n, 100)
    p = []
    if c == 1:
        p.append("cent")
    elif c > 1:
        p.append(_U[c] + " cent" + ("s" if (r == 0 and final) else ""))
    if r:
        p.append(_m100(r, final))
    return " ".join(p)


def lettres(n):
    if n == 0:
        return "zéro"
    mrd, r = divmod(n, 10**9)
    mil, r = divmod(r, 10**6)
    k, u = divmod(r, 1000)
    p = []
    if mrd:
        p.append(_m1000(mrd, True) + " milliard" + ("s" if mrd > 1 else ""))
    if mil:
        p.append(_m1000(mil, True) + " million" + ("s" if mil > 1 else ""))
    if k:
        p.append("mille" if k == 1 else _m1000(k, False) + " mille")
    if u:
        p.append(_m1000(u, True))
    return " ".join(p)


PRENOMS = ["Léa", "Tom", "Inès", "Hugo", "Nora", "Sami", "Jade", "Lucas", "Emma", "Yanis",
           "Chloé", "Adam", "Zoé", "Rayan", "Manon", "Noah", "Lina", "Maël", "Sarah", "Théo"]


# ================================================================ CM2 : GRANDS NOMBRES
RANGS = [(0, "unités", "unité"), (1, "dizaines", "dizaine"), (2, "centaines", "centaine"),
         (3, "unités de mille", "millier"), (4, "dizaines de mille", "dizaine de mille"),
         (5, "centaines de mille", "centaine de mille"), (6, "millions", "million"),
         (7, "dizaines de millions", "dizaine de millions"),
         (8, "centaines de millions", "centaine de millions")]


def gen_cm2_grands_nombres():
    rng = random.Random(2201)
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # -- lire / écrire
    for n in [71280, 3080500, 200400000, 80090]:
        add("application", "lire-ecrire", f"Écris en lettres le nombre ${nm(n)}$.",
            ["On lit classe par classe, de gauche à droite, en disant le nom de chaque classe.",
             f"${nm(n)}$ se lit : {lettres(n)}."], lettres(n))
    for n in [6040008, 2300000000, 97201, 900070]:
        add("intermediaire", "lire-ecrire", f"Écris en chiffres : « {lettres(n)} ».",
            ["On place chaque classe (milliards, millions, mille, unités) et on complète par des zéros.",
             f"On obtient ${nm(n)}$."], f"${nm(n)}$")
    # -- valeur d'un chiffre
    vus = set()
    k = 0
    while k < 8:
        n = rng.randint(10**6, 10**9 - 1)
        if n in vus:
            continue
        r = rng.choice([2, 3, 4, 5, 6])
        if k < 4:
            ch = (n // 10**r) % 10
            if ch == 0:
                continue
            vus.add(n)
            add("application", "valeur-chiffre",
                f"Dans le nombre ${nm(n)}$, quel est le chiffre des {RANGS[r][1]} ?",
                [f"On repère le rang des {RANGS[r][1]} en partant de la droite (rang n° {r + 1}).",
                 f"Le chiffre des {RANGS[r][1]} est ${ch}$ : il vaut ${nm(ch * 10**r)}$."], f"${ch}$")
        else:
            r = rng.choice([2, 3, 6])
            q = n // 10**r
            vus.add(n)
            nom = {2: "centaines", 3: "milliers", 6: "millions"}[r]
            add("intermediaire", "valeur-chiffre",
                f"Dans le nombre ${nm(n)}$, quel est le nombre de {nom} ?",
                [f"Le « nombre de {nom} » s'obtient en prenant tous les chiffres à gauche du rang des {nom}, celui-ci compris.",
                 f"${nm(n)} = {nm(q)}$ {nom} et ${nm(n - q * 10**r)}$ unités."], f"${nm(q)}$")
        k += 1
    # -- décomposer
    for n in [47305, 2060400, 380905, 5007030]:
        termes = []
        for r in range(9, -1, -1):
            ch = (n // 10**r) % 10
            if ch:
                termes.append(f"{ch} \\times {nm(10**r)}" if r else f"{ch}")
        add("intermediaire", "decomposer",
            f"Décompose ${nm(n)}$ en utilisant $1$, $10$, $100$, $1\\,000$…",
            ["On écrit chaque chiffre non nul multiplié par la valeur de son rang (on saute les zéros).",
             f"${nm(n)} = " + " + ".join(termes) + "$."], "$" + " + ".join(termes) + "$")
    for (a, b, c, dd) in [(5, 8, 3, 7), (3, 4, 9, 2), (7, 6, 1, 5)]:
        n = a * 10**6 + b * 10**4 + c * 100 + dd
        add("approfondissement", "decomposer",
            f"Quel nombre est égal à ${a} \\times 1\\,000\\,000 + {b} \\times 10\\,000 + {c} \\times 100 + {dd}$ ?",
            ["On place chaque chiffre à son rang et on met des zéros aux rangs vides.",
             f"Millions : {a} ; centaines de mille : 0 ; dizaines de mille : {b} ; unités de mille : 0 ; centaines : {c} ; dizaines : 0 ; unités : {dd}.",
             f"Le nombre est ${nm(n)}$."], f"${nm(n)}$")
    # -- comparer / ranger
    paires = [(1203456, 1230456), (98765432, 102345678), (45070000, 45007000), (700000001, 699999999)]
    for a, b in paires:
        s = "<" if a < b else ">"
        if len(str(a)) != len(str(b)):
            exp = f"${nm(a)}$ a {len(str(a))} chiffres et ${nm(b)}$ en a {len(str(b))} : celui qui a le plus de chiffres est le plus grand."
        else:
            i = next(j for j in range(len(str(a))) if str(a)[j] != str(b)[j])
            exp = (f"Les deux nombres ont {len(str(a))} chiffres. On compare chiffre à chiffre depuis la gauche : "
                   f"la première différence est {str(a)[i]} contre {str(b)[i]}.")
        add("application", "comparer", f"Compare ${nm(a)}$ et ${nm(b)}$ avec le signe $<$ ou $>$.",
            [exp, f"Donc ${nm(a)} {s} {nm(b)}$."], f"${nm(a)} {s} {nm(b)}$")
    listes = [[3450000, 345000, 3405000, 3540000], [12500700, 12057000, 12570000, 1250700],
              [800080, 808000, 800800, 880000], [2010000000, 201000000, 2100000000, 2001000000]]
    for i, L in enumerate(listes):
        croiss = i % 2 == 0
        R = sorted(L, reverse=not croiss)
        sens = "croissant (du plus petit au plus grand)" if croiss else "décroissant (du plus grand au plus petit)"
        sg = " < " if croiss else " > "
        add("intermediaire", "comparer",
            "Range dans l'ordre " + sens + " : " + " ; ".join(f"${nm(x)}$" for x in L) + ".",
            ["On compte d'abord les chiffres, puis on compare chiffre à chiffre depuis la gauche.",
             "$" + sg.join(nm(x) for x in R) + "$"], "$" + sg.join(nm(x) for x in R) + "$")
    # -- encadrer
    enc = [(3470, 100, "à la centaine"), (58312, 1000, "au millier"), (746205, 10000, "à la dizaine de mille"),
           (4185000, 1000000, "au million"), (90960, 1000, "au millier"), (12345678, 1000000, "au million"),
           (609950, 100000, "à la centaine de mille")]
    for n, p, txt in enc:
        lo = n // p * p
        add("intermediaire", "encadrer", f"Encadre ${nm(n)}$ {txt}.",
            [f"On cherche le multiple de ${nm(p)}$ juste avant et juste après ${nm(n)}$.",
             f"${nm(lo)} < {nm(n)} < {nm(lo + p)}$."], f"${nm(lo)} < {nm(n)} < {nm(lo + p)}$")
    # -- arrondir
    arr = [(3450, 100, "à la centaine", "dizaines"), (27499, 1000, "au millier", "centaines"),
           (27500, 1000, "au millier", "centaines"), (684320, 10000, "à la dizaine de mille", "unités de mille"),
           (4562000, 1000000, "au million", "centaines de mille"), (13480000, 1000000, "au million", "centaines de mille"),
           (995600, 1000, "au millier", "centaines"), (2549999, 100000, "à la centaine de mille", "dizaines de mille")]
    for n, p, txt, regard in arr:
        r = int(arrondi(n, p))
        ch = (n // (p // 10)) % 10
        sens = "on arrondit au-dessus" if ch >= 5 else "on arrondit en dessous"
        add("approfondissement" if p >= 100000 else "intermediaire", "arrondir",
            f"Arrondis ${nm(n)}$ {txt}.",
            [f"On regarde le chiffre des {regard} : c'est ${ch}$, donc {sens}.",
             f"${nm(n)} \\approx {nm(r)}$."], f"${nm(r)}$")
    # -- problèmes
    add("probleme", "probleme-grands-nombres",
        "Une ville compte 125 430 habitants et la ville voisine 98 760. Combien d'habitants la première a-t-elle de plus que la seconde ?",
        [f"On calcule l'écart : ${nm(125430)} - {nm(98760)} = {nm(125430 - 98760)}$."],
        f"${nm(125430 - 98760)}$ habitants de plus")
    add("probleme", "probleme-grands-nombres",
        "Un stade a 45 000 places. Pour un match, 38 725 spectateurs sont venus. Combien de places sont restées vides ?",
        [f"$45\\,000 - {nm(38725)} = {nm(45000 - 38725)}$."], f"${nm(45000 - 38725)}$ places")
    add("probleme", "probleme-grands-nombres",
        "Trois villages comptent 12 450, 8 975 et 3 060 habitants. Combien d'habitants en tout ? Arrondis ce total au millier.",
        [f"Total : ${nm(12450)} + {nm(8975)} + {nm(3060)} = {nm(12450 + 8975 + 3060)}$.",
         f"Le chiffre des centaines est 4, donc on arrondit en dessous : environ ${nm(int(arrondi(24485, 1000)))}$."],
        f"${nm(24485)}$ habitants, soit environ ${nm(int(arrondi(24485, 1000)))}$")
    add("probleme", "probleme-grands-nombres",
        "Une usine fabrique 2 500 000 bouchons par mois. Combien en fabrique-t-elle en 12 mois ? Écris le résultat en lettres.",
        [f"$2\\,500\\,000 \\times 12 = {nm(2500000 * 12)}$.", f"En lettres : {lettres(30000000)}."],
        f"${nm(30000000)}$ ({lettres(30000000)})")
    return _fin(E)


# ================================================================ CM2 : GRAPHIQUES ET DONNÉES
JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"]
ART = {"football": "le football", "basket": "le basket", "natation": "la natation", "danse": "la danse",
       "tennis": "le tennis", "judo": "le judo", "rugby": "le rugby"}
AU = {k: ("à la " + k if v.startswith("la ") else "au " + k) for k, v in ART.items()}


def gen_cm2_graphiques():
    rng = random.Random(2202)
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    def serie(k, lo, hi):
        while True:
            v = [rng.randint(lo, hi) for _ in range(k)]
            if len(set(v)) == k:
                return v

    ctx = [("Gâteaux vendus par une boulangerie", "gâteaux"), ("Livres empruntés à la bibliothèque", "livres"),
           ("Repas servis à la cantine", "repas"), ("Visiteurs d'un musée", "visiteurs"),
           ("Tickets de bus vendus", "tickets"), ("Bouteilles recyclées par l'école", "bouteilles"),
           ("Baguettes vendues", "baguettes"), ("Entrées à la piscine", "entrées")]

    def tab(titre, jours, v):
        return f"{titre} : " + " ; ".join(f"{j} {x}" for j, x in zip(jours, v)) + "."

    # lire-tableau (8)
    for i in range(8):
        titre, u = ctx[i]
        v = serie(5, 8, 60)
        if i < 4:
            j = rng.randrange(5)
            add("application", "lire-tableau", tab(titre, JOURS, v) + f" Combien {de(u)} le {JOURS[j]} ?",
                [f"On lit la colonne du {JOURS[j]} : ${v[j]}$."], f"${v[j]}$ {u}")
        else:
            mx = i % 2 == 0
            j = v.index(max(v) if mx else min(v))
            add("application", "lire-tableau",
                tab(titre, JOURS, v) + f" Quel jour y a-t-il eu le {'plus' if mx else 'moins'} {de(u)} ?",
                ["On compare les cinq valeurs : " + ", ".join(str(x) for x in v) + ".",
                 f"La {'plus grande' if mx else 'plus petite'} est ${v[j]}$, le {JOURS[j]}."], f"le {JOURS[j]}")
    # total (7)
    clubs = ["Clubs du midi (inscrits) : échecs", "théâtre", "chorale", "jardinage"]
    for i in range(7):
        k = 3 + i % 3
        v = serie(k, 5, 95)
        noms = JOURS[:k] if i % 2 == 0 else ["janvier", "février", "mars", "avril", "mai"][:k]
        titre = ["Œufs ramassés à la ferme", "Kilomètres parcourus à vélo par Hugo", "Pages lues par Jade",
                 "Spectateurs au cinéma du village", "Arbres plantés par la commune", "Colis livrés",
                 "Courriels reçus par la mairie"][i]
        unite = ["œufs", "km", "pages", "spectateurs", "arbres", "colis", "courriels"][i]
        add("application" if k < 5 else "intermediaire", "total", tab(titre, noms, v) + " Calcule le total.",
            ["On additionne toutes les valeurs : $" + " + ".join(str(x) for x in v) + f" = {sum(v)}$."],
            f"${sum(v)}$ {unite}")
    # écart (7)
    for i in range(7):
        v = serie(4, 3, 30)
        noms = rng.sample(list(ART), 4)
        a, b = rng.sample(range(4), 2)
        if v[a] < v[b]:
            a, b = b, a
        add("intermediaire", "ecart",
            "Sport préféré des élèves d'une école : " + " ; ".join(f"{n} {x}" for n, x in zip(noms, v)) +
            f". Combien d'élèves de plus préfèrent {ART[noms[a]]} {AU[noms[b]]} ?",
            [f"On calcule la différence : ${v[a]} - {v[b]} = {v[a] - v[b]}$."], pl(v[a] - v[b], "élève"))
    # pictogramme (8)
    pic = [(5, 7, False, "livres"), (10, 4, True, "voitures"), (2, 9, False, "chats"), (4, 6, True, "arbres"),
           (20, 3, True, "spectateurs"), (10, 8, False, "pommes"), (100, 5, True, "habitants")]
    for k, n, demi, u in pic:
        tot = n * k + (k // 2 if demi else 0)
        e = f"Dans un pictogramme, 1 image = {k} {u}. On voit {n} images" + (" et une demi-image" if demi else "") + f". Combien {de(u)} cette ligne représente-t-elle ?"
        c = [f"{n} images valent ${n} \\times {k} = {n * k}$."]
        if demi:
            c.append(f"La demi-image vaut la moitié de {k}, soit ${k // 2}$. Total : ${n * k} + {k // 2} = {tot}$.")
        add("intermediaire" if demi else "application", "pictogramme", e, c, f"${nm(tot)}$ {u}")
    add("approfondissement", "pictogramme",
        "Dans un pictogramme, 1 image = 5 élèves. Combien d'images faut-il dessiner pour représenter 35 élèves ?",
        ["On cherche combien de fois 5 dans 35 : $35 \\div 5 = 7$."], "$7$ images")
    # courbe (7)
    temps = [(6, 9, 14, 16, 13), (4, 7, 12, 15, 11), (10, 14, 19, 22, 20), (2, 5, 9, 11, 8),
             (12, 17, 23, 25, 21), (8, 11, 15, 18, 16), (15, 19, 24, 27, 22)]
    heures = ["8 h", "10 h", "12 h", "14 h", "16 h"]
    for i, t in enumerate(temps):
        base = "Une courbe montre la température d'une journée : " + " ; ".join(
            f"{h} : {x} °C" for h, x in zip(heures, t)) + "."
        q = i % 3
        if q == 0:
            add("application", "courbe", base + " À quelle heure fait-il le plus chaud ?",
                [f"Le point le plus haut de la courbe correspond à ${max(t)}$ °C.", f"C'est à {heures[t.index(max(t))]}."],
                heures[t.index(max(t))])
        elif q == 1:
            add("intermediaire", "courbe", base + " De combien de degrés la température monte-t-elle entre 8 h et 14 h ?",
                [f"${t[3]} - {t[0]} = {t[3] - t[0]}$ °C."], f"${t[3] - t[0]}$ °C")
        else:
            add("intermediaire", "courbe", base + " Entre quelles heures la courbe descend-elle ? De combien de degrés ?",
                ["La courbe monte jusqu'à 14 h, puis descend.", f"Entre 14 h et 16 h : ${t[3]} - {t[4]} = {t[3] - t[4]}$ °C de moins."],
                f"entre 14 h et 16 h, de ${t[3] - t[4]}$ °C")
    # tableau à double entrée (7)
    for i in range(7):
        g = serie(3, 2, 15)
        f_ = serie(3, 2, 15)
        sp = rng.sample(["football", "natation", "danse", "basket", "judo", "tennis"], 3)
        base = ("Sport préféré des élèves de CM1 et de CM2 d'une école. Garçons : " + ", ".join(f"{s} {x}" for s, x in zip(sp, g)) +
                ". Filles : " + ", ".join(f"{s} {x}" for s, x in zip(sp, f_)) + ".")
        q = i % 3
        j = rng.randrange(3)
        if q == 0:
            add("application", "double-entree", base + f" Combien d'élèves en tout préfèrent {ART[sp[j]]} ?",
                [f"On additionne garçons et filles : ${g[j]} + {f_[j]} = {g[j] + f_[j]}$."], f"${g[j] + f_[j]}$ élèves")
        elif q == 1:
            add("intermediaire", "double-entree", base + " Combien de filles ont répondu ?",
                ["On additionne la ligne des filles : $" + " + ".join(map(str, f_)) + f" = {sum(f_)}$."], f"${sum(f_)}$ filles")
        else:
            add("intermediaire", "double-entree", base + " Combien d'élèves ont répondu en tout ?",
                [f"Garçons : $" + " + ".join(map(str, g)) + f" = {sum(g)}$.", "Filles : $" + " + ".join(map(str, f_)) + f" = {sum(f_)}$.",
                 f"Total : ${sum(g)} + {sum(f_)} = {sum(g) + sum(f_)}$."], f"${sum(g) + sum(f_)}$ élèves")
    # diagramme en bâtons (5)
    bat = [(5, 7, False), (10, 4, True), (2, 9, False), (20, 6, True), (50, 3, False), (4, 8, True)]
    for pas, n, mil in bat:
        v = n * pas + (pas // 2 if mil else 0)
        e = (f"Sur un diagramme en bâtons, l'axe vertical est gradué de {pas} en {pas}. Un bâton s'arrête "
             + (f"exactement au milieu entre la {n}e et la {n + 1}e graduation (sans compter le 0)." if mil else f"sur la {n}e graduation (sans compter le 0).")
             + " Quelle valeur représente-t-il ?")
        c = [f"La {n}e graduation vaut ${n} \\times {pas} = {n * pas}$."]
        if mil:
            c.append(f"Le milieu ajoute la moitié d'un pas, soit ${pas // 2}$ : ${n * pas} + {pas // 2} = {v}$.")
        add("approfondissement" if mil else "intermediaire", "diagramme-batons", e, c, f"${v}$")
    return _fin(E)


# ================================================================ CM2 : OPÉRATIONS SUR LES DÉCIMAUX
def _ndec(d):
    s = format(_dec(d).normalize(), "f")
    return len(s.split(".")[1]) if "." in s else 0


def gen_cm2_decimaux():
    rng = random.Random(2203)
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    def tire(lo, hi, nd):
        while True:
            x = Decimal(rng.randint(lo * 10**nd, hi * 10**nd)) / Decimal(10**nd)
            if _ndec(x) == nd:
                return x

    # addition (8)
    for i in range(8):
        a = tire(1, 60, 1 + i % 2)
        b = tire(0, 30, 2 - i % 2 if i < 6 else 2)
        k = max(_ndec(a), _ndec(b))
        s_ = a + b
        add("application" if i < 4 else "intermediaire", "addition", f"Calcule : ${nm(a)} + {nm(b)}$.",
            ["On aligne les virgules en complétant par des zéros : " + f"${nm(a, k)} + {nm(b, k)}$.",
             f"${nm(a, k)} + {nm(b, k)} = {nm(s_, k)}$" + (f", soit ${nm(s_)}$." if nm(s_) != nm(s_, k) else ".")], f"${nm(s_)}$")
    # soustraction (8)
    for i in range(8):
        if i < 2:
            a = Decimal(rng.randint(5, 30))
            b = tire(1, int(a) - 1, 2)
        else:
            a = tire(10, 90, 1 + i % 2)
            b = tire(1, 9, 2 - i % 2)
        k = max(_ndec(a), _ndec(b))
        r = a - b
        add("intermediaire" if i < 2 or i > 5 else "application", "soustraction", f"Calcule : ${nm(a)} - {nm(b)}$.",
            [f"On aligne les virgules : ${nm(a, k)} - {nm(b, k)}$" + (" (on écrit les zéros qui manquent)." if _ndec(a) < k else "."),
             f"${nm(a, k)} - {nm(b, k)} = {nm(r, k)}$" + (f", soit ${nm(r)}$." if nm(r) != nm(r, k) else ".")], f"${nm(r)}$")
    # × 10, 100, 1000 (8)
    for i in range(8):
        a = tire(0, 99, 1 + i % 3)
        if a < 1 and i % 2 == 0:
            a += 3
        p = [10, 100, 1000][i % 3]
        z = len(str(p)) - 1
        add("application", "multiplier-10-100-1000", f"Calcule : ${nm(a)} \\times {nm(p)}$.",
            [f"Multiplier par ${nm(p)}$ déplace la virgule de {pl(z, 'rang')} vers la droite (on ajoute des zéros si besoin).",
             f"${nm(a)} \\times {nm(p)} = {nm(a * p)}$."], f"${nm(a * p)}$")
    # ÷ 10, 100, 1000 (7)
    for i in range(7):
        a = tire(1, 999, i % 2)
        p = [10, 100, 1000][(i + 1) % 3]
        z = len(str(p)) - 1
        add("application" if i < 4 else "intermediaire", "diviser-10-100-1000", f"Calcule : ${nm(a)} \\div {nm(p)}$.",
            [f"Diviser par ${nm(p)}$ déplace la virgule de {pl(z, 'rang')} vers la gauche (on ajoute des zéros devant si besoin).",
             f"${nm(a)} \\div {nm(p)} = {nm(a / p)}$."], f"${nm(a / p)}$")
    # produit (7)
    prods = [(Decimal("2.5"), Decimal(4)), (Decimal("1.25"), Decimal(8)), (Decimal("3.6"), Decimal(7)),
             (Decimal("0.45"), Decimal(6)), (Decimal("2.5"), Decimal("1.2")), (Decimal("1.5"), Decimal("0.4")),
             (Decimal("3.2"), Decimal("2.5"))]
    for a, b in prods:
        ea, eb = int(a * 10**_ndec(a)), int(b * 10**_ndec(b))
        k = _ndec(a) + _ndec(b)
        p = a * b
        add("intermediaire" if _ndec(b) == 0 else "approfondissement", "produit-decimaux",
            f"Calcule : ${nm(a)} \\times {nm(b)}$.",
            [f"On calcule sans les virgules : ${nm(ea)} \\times {nm(eb)} = {nm(ea * eb)}$.",
             f"Il y a {pl(k, 'chiffre')} après la virgule en tout dans les deux facteurs, donc on place la virgule à {pl(k, 'rang')} de la droite.",
             f"${nm(a)} \\times {nm(b)} = {nm(p, k)}$" + (f", c'est-à-dire ${nm(p)}$." if nm(p, k) != nm(p) else ".")], f"${nm(p)}$")
    # division par un entier (6)
    divs = [(Decimal("7.2"), 4), (Decimal("15.6"), 3), (Decimal("9.45"), 5), (Decimal("22.8"), 6), (Decimal("3.5"), 2), (Decimal("40.5"), 9)]
    for a, b in divs:
        q = a / b
        add("approfondissement" if _ndec(q) > 1 else "intermediaire", "division-par-entier",
            f"Calcule : ${nm(a)} \\div {b}$.",
            ["On pose la division et on place la virgule au quotient au moment où l'on abaisse le chiffre des dixièmes.",
             f"${nm(a)} \\div {b} = {nm(q)}$.", f"Vérification : ${nm(q)} \\times {b} = {nm(q * b)}$."], f"${nm(q)}$")
    # problèmes (6)
    p1 = 3 * Decimal("2.35") + Decimal("1.90")
    add("probleme", "probleme-decimaux",
        "Léa achète 3 cahiers à 2,35 € l'un et un stylo à 1,90 €. Elle paie avec un billet de 10 €. Combien lui rend-on ?",
        [f"Cahiers : $3 \\times 2{{,}}35 = {eurm(3 * Decimal('2.35'))}$ €.", f"Total : ${eurm(3 * Decimal('2.35'))} + 1{{,}}90 = {eurm(p1)}$ €.",
         f"Monnaie : $10 - {eurm(p1)} = {eurm(10 - p1)}$ €."], f"${eurm(10 - p1)}$ €")
    add("probleme", "probleme-decimaux",
        "Un ruban de 4,5 m est coupé en 6 morceaux de même longueur. Quelle est la longueur d'un morceau ?",
        [f"$4{{,}}5 \\div 6 = {nm(Decimal('4.5') / 6)}$ m."], f"${nm(Decimal('4.5') / 6)}$ m")
    add("probleme", "probleme-decimaux",
        "Au marché, Tom achète 1,8 kg de pommes, 0,75 kg de raisin et 2,5 kg de pommes de terre. Quelle masse porte-t-il ?",
        [f"$1{{,}}8 + 0{{,}}75 + 2{{,}}5 = {nm(Decimal('1.8') + Decimal('0.75') + Decimal('2.5'))}$ kg."],
        f"${nm(Decimal('1.8') + Decimal('0.75') + Decimal('2.5'))}$ kg")
    add("probleme", "probleme-decimaux",
        "Une bouteille contient 1,5 L de jus. On remplit 4 verres de 0,25 L. Combien de jus reste-t-il dans la bouteille ?",
        [f"Jus versé : $4 \\times 0{{,}}25 = 1$ L.", f"Reste : $1{{,}}5 - 1 = {nm(Decimal('0.5'))}$ L."], f"${nm(Decimal('0.5'))}$ L")
    add("probleme", "probleme-decimaux",
        "Un paquet de 1 000 feuilles de papier a une épaisseur de 9,8 cm. Quelle est l'épaisseur d'une feuille ?",
        [f"$9{{,}}8 \\div 1\\,000 = {nm(Decimal('9.8') / 1000)}$ cm."], f"${nm(Decimal('9.8') / 1000)}$ cm")
    p6 = 12 * Decimal("1.45")
    add("probleme", "probleme-decimaux",
        "Une classe achète 12 baguettes à 1,45 € pour un pique-nique. Combien paie-t-elle ? Donne d'abord un ordre de grandeur.",
        ["Ordre de grandeur : $12 \\times 1{,}5 = 18$ €, donc un peu moins de 18 €.",
         f"Calcul exact : $12 \\times 1{{,}}45 = {eurm(p6)}$ €."], f"${eurm(p6)}$ €")
    return _fin(E)


# ================================================================ CM2 : RÉSOUDRE DES PROBLÈMES
def gen_cm2_problemes():
    rng = random.Random(2204)
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    P = PRENOMS[:]
    rng.shuffle(P)
    nom = iter(P * 4)
    # addition / soustraction (8)
    as_ = [("timbres", 1245, 378, "+", "Il en achète encore"), ("cartes", 2050, 685, "-", "Il en donne"),
           ("perles", 860, 1475, "+", "On lui en offre"), ("km", 3420, 1985, "-", None),
           ("points", 12500, 4780, "+", None), ("euros", 1500, 865, "-", None),
           ("livres", 4380, 1295, "+", None), ("places", 950, 387, "-", None)]
    for i, (u, a, b, op, txt) in enumerate(as_):
        if u == "timbres":
            e = f"Hugo a une collection de {nb(a)} timbres. {txt} {nb(b)}. Combien en a-t-il maintenant ?"
        elif u == "cartes":
            e = f"Adam possède {nb(a)} cartes à collectionner. {txt} {nb(b)} à son cousin. Combien lui en reste-t-il ?"
        elif u == "perles":
            e = f"Inès a {nb(a)} perles. On lui en offre {nb(b)}. Combien de perles a-t-elle maintenant ?"
        elif u == "km":
            e = f"Une famille doit parcourir {nb(a)} km pendant ses vacances. Elle a déjà roulé {nb(b)} km. Combien de kilomètres reste-t-il ?"
        elif u == "points":
            e = f"À un jeu vidéo, Yanis a {nb(a)} points. Il gagne encore {nb(b)} points. Quel est son nouveau score ?"
        elif u == "euros":
            e = f"Une association a {nb(a)} €. Elle dépense {nb(b)} € pour une sortie. Combien d'argent lui reste-t-il ?"
        elif u == "livres":
            e = f"Une bibliothèque a {nb(a)} livres. Elle en reçoit {nb(b)} nouveaux. Combien de livres a-t-elle en tout ?"
        else:
            e = f"Une salle de concert a {nb(a)} places. {nb(b)} places sont déjà vendues. Combien de places restent libres ?"
        r = a + b if op == "+" else a - b
        mot = "On ajoute : c'est une addition." if op == "+" else "On enlève (il reste) : c'est une soustraction."
        unite = {"timbres": "timbres", "cartes": "cartes", "perles": "perles", "km": "km", "points": "points",
                 "euros": "€", "livres": "livres", "places": "places"}[u]
        add("application", "addition-soustraction", e, [mot, f"${nm(a)} {op} {nm(b)} = {nm(r)}$."], f"${nm(r)}$ {unite}")
    # multiplication (7)
    mult = [("Une salle de spectacle a {a} rangées de {b} fauteuils. Combien de fauteuils y a-t-il ?", 24, 18, "fauteuils"),
            ("Un carton contient {b} boîtes de crayons. Combien de boîtes dans {a} cartons ?", 15, 36, "boîtes"),
            ("Un livre a {b} pages. Combien de pages pour {a} exemplaires de ce livre ?", 12, 145, "pages"),
            ("Une place de cinéma coûte {b} €. Combien paie une classe de {a} élèves ?", 27, 6, "€"),
            ("Un car transporte {b} passagers. Combien de passagers dans {a} cars pleins ?", 9, 52, "passagers"),
            ("Une boîte contient {b} chocolats. Combien de chocolats dans {a} boîtes ?", 35, 24, "chocolats"),
            ("Un cycliste roule {b} km par jour pendant {a} jours. Quelle distance parcourt-il ?", 14, 85, "km")]
    for e, a, b, u in mult:
        add("application", "multiplication", e.format(a=a, b=b),
            ["Des quantités identiques répétées : c'est une multiplication.", f"${a} \\times {b} = {nm(a * b)}$."], f"${nm(a * b)}$ {u}")
    # division (7)
    divs = [("On partage {a} billes également entre {b} enfants. Combien de billes reçoit chaque enfant ?", 144, 6, "exact", "billes"),
            ("{a} élèves partent en sortie. On fait des groupes de {b}. Combien de groupes ?", 96, 8, "exact", "groupes"),
            ("On range {a} œufs dans des boîtes de {b}. Combien de boîtes pleines obtient-on et combien d'œufs restent ?", 250, 12, "reste", "boîtes"),
            ("{a} personnes doivent monter dans des minibus de {b} places. Combien de minibus faut-il au minimum ?", 75, 9, "sup", "minibus"),
            ("Un ruban de {a} cm est coupé en morceaux de {b} cm. Combien de morceaux complets obtient-on ?", 200, 15, "inf", "morceaux"),
            ("{a} € sont partagés également entre {b} gagnants. Combien reçoit chacun ?", 1260, 4, "exact", "€"),
            ("Il faut transporter {a} chaises. Un chariot en porte {b}. Combien de voyages faut-il au minimum ?", 130, 12, "sup", "voyages")]
    for e, a, b, typ, u in divs:
        q, r = divmod(a, b)
        c = ["Partager ou faire des paquets égaux : c'est une division.", f"${nm(a)} = {b} \\times {q} + {r}$" + (" (la division tombe juste)." if r == 0 else ".")]
        if typ == "exact":
            rep = f"${nm(q)}$ {u}"
            diff = "application"
        elif typ == "reste":
            c.append(f"On obtient {q} boîtes pleines et il reste {pl(r, 'œuf')}.")
            rep = f"${q}$ boîtes pleines, reste ${r}$"
            diff = "intermediaire"
        elif typ == "sup":
            c.append(f"Il reste {r} : il faut un {u if u == 'minibus' else 'voyage'} de plus pour {'ces ' + str(r) + ' personnes' if u == 'minibus' else 'ces ' + str(r) + ' chaises'}, soit ${q} + 1 = {q + 1}$.")
            rep = f"${q + 1}$ {u}"
            diff = "approfondissement"
        else:
            c.append(f"Il reste {r} cm, trop court pour un morceau complet : on garde {q}.")
            rep = f"${q}$ morceaux"
            diff = "intermediaire"
        add(diff, "division", e.format(a=nb(a), b=b), c, rep)
    # plusieurs étapes (10)
    etapes = [
        ("J'achète {a} cahiers à {b} € et {c} stylos à {d} €. Combien ai-je dépensé ?", (3, 2, 2, 3)),
        ("J'achète {a} cahiers à {b} € et {c} stylos à {d} €. Combien ai-je dépensé ?", (5, 3, 4, 2)),
        ("Un fermier ramasse {a} œufs par jour pendant {b} jours. Il en vend {c}. Combien lui en reste-t-il ?", (48, 7, 250, None)),
        ("Un fermier ramasse {a} œufs par jour pendant {b} jours. Il en vend {c}. Combien lui en reste-t-il ?", (36, 6, 175, None)),
        ("Un club achète {a} ballons à {b} € et {c} filets à {d} €. Il paie avec {e} €. Combien lui rend-on ?", (6, 15, 2, 35, 200)),
        ("Une école commande {a} paquets de {b} feuilles. Elle en distribue {c}. Combien de feuilles reste-t-il ?", (8, 500, 3250, None)),
        ("Un cinéma vend {a} places à {b} € et {c} places à {d} €. Quelle est la recette ?", (125, 9, 48, 6)),
        ("Une boulangerie fait {a} plaques de {b} croissants. Elle en vend {c} le matin. Combien en reste-t-il ?", (12, 24, 230, None)),
        ("Un car de {a} places fait {b} allers-retours ; il est plein à chaque trajet (aller et retour). Combien de passagers a-t-il transportés ?", (55, 3, None, None)),
        ("Trois amis achètent ensemble un jeu à {a} €, et chacun prend une boisson à {b} €. Ils partagent la dépense totale en parts égales. Combien paie chacun ?", (36, 2, None, None)),
    ]
    for k, (t, v) in enumerate(etapes):
        if "cahiers" in t:
            a, b, c, d = v
            r = a * b + c * d
            cor = [f"Cahiers : ${a} \\times {b} = {a * b}$ €.", f"Stylos : ${c} \\times {d} = {c * d}$ €.", f"Total : ${a * b} + {c * d} = {r}$ €."]
            rep = f"${r}$ €"
            e = t.format(a=a, b=b, c=c, d=d)
        elif "œufs" in t:
            a, b, c, _ = v
            r = a * b - c
            cor = [f"Œufs ramassés : ${a} \\times {b} = {a * b}$.", f"Il en reste : ${a * b} - {c} = {r}$."]
            rep = f"${r}$ œufs"
            e = t.format(a=a, b=b, c=c)
        elif "ballons" in t:
            a, b, c, d, f_ = v
            tot = a * b + c * d
            r = f_ - tot
            cor = [f"Ballons : ${a} \\times {b} = {a * b}$ €.", f"Filets : ${c} \\times {d} = {c * d}$ €.",
                   f"Total : ${a * b} + {c * d} = {tot}$ €.", f"Monnaie : ${f_} - {tot} = {r}$ €."]
            rep = f"${r}$ €"
            e = t.format(a=a, b=b, c=c, d=d, e=f_)
        elif "feuilles" in t:
            a, b, c, _ = v
            r = a * b - c
            cor = [f"Feuilles commandées : ${a} \\times {b} = {nm(a * b)}$.", f"Reste : ${nm(a * b)} - {nm(c)} = {nm(r)}$."]
            rep = f"${nm(r)}$ feuilles"
            e = t.format(a=a, b=b, c=nb(c))
        elif "cinéma" in t:
            a, b, c, d = v
            r = a * b + c * d
            cor = [f"Places à {b} € : ${a} \\times {b} = {nm(a * b)}$ €.", f"Places à {d} € : ${c} \\times {d} = {c * d}$ €.",
                   f"Recette : ${nm(a * b)} + {c * d} = {nm(r)}$ €."]
            rep = f"${nm(r)}$ €"
            e = t.format(a=a, b=b, c=c, d=d)
        elif "croissants" in t:
            a, b, c, _ = v
            r = a * b - c
            cor = [f"Croissants préparés : ${a} \\times {b} = {a * b}$.", f"Reste : ${a * b} - {c} = {r}$."]
            rep = f"${r}$ croissants"
            e = t.format(a=a, b=b, c=c)
        elif "car" in t and "allers" in t:
            a, b, _, _ = v
            r = a * 2 * b
            cor = [f"Un aller-retour, c'est 2 trajets : ${b} \\times 2 = {2 * b}$ trajets.", f"Passagers : ${2 * b} \\times {a} = {r}$."]
            rep = f"${r}$ passagers"
            e = t.format(a=a, b=b)
        else:
            a, b, _, _ = v
            tot = a + 3 * b
            r = Fraction(tot, 3)
            cor = [f"Boissons : $3 \\times {b} = {3 * b}$ €.", f"Dépense totale : ${a} + {3 * b} = {tot}$ €.", f"Part de chacun : ${tot} \\div 3 = {nm(r)}$ €."]
            rep = f"${nm(r)}$ €"
            e = t.format(a=a, b=b)
        add("probleme", "plusieurs-etapes", e, cor, rep)
    # monnaie (7)
    mon = [(20, ["7.45", "3.80"]), (10, ["4.60", "2.75"]), (50, ["18.90", "12.35", "6.50"]), (5, ["1.20", "2.35"]),
           (20, ["9.99", "4.50"]), (50, ["23.40", "15.80"]), (10, ["3.25", "3.25", "1.10"])]
    for billet, prix in mon:
        n = next(nom)
        pr = [Decimal(x) for x in prix]
        tot = sum(pr)
        r = billet - tot
        e = f"{n} achète des articles à " + ", ".join(f"{eur(x)} €" for x in pr[:-1]) + f" et {eur(pr[-1])} €. Il paie avec un billet de {billet} €. Combien lui rend-on ?"
        if n in ("Léa", "Inès", "Nora", "Jade", "Emma", "Chloé", "Zoé", "Manon", "Lina", "Sarah"):
            e = e.replace("Il paie", "Elle paie")
        add("intermediaire", "monnaie", e,
            ["On calcule d'abord le prix total : $" + " + ".join(eurm(x) for x in pr) + f" = {eurm(tot)}$ €.",
             f"Puis on rend la monnaie : ${billet} - {eurm(tot)} = {eurm(r)}$ €."], f"${eurm(r)}$ €")
    # ordre de grandeur (6)
    og = [(48, 21), (31, 52), (198, 4), (61, 39), (19, 302), (402, 98)]
    for a, b in og:
        p = a * b
        ra, rb = [x if x < 10 else int(arrondi(x, 10 if x < 100 else 100)) for x in (a, b)]
        choix = sorted([p, p * 10, p // 10 + (1 if p % 10 >= 5 else 0)])
        add("approfondissement", "ordre-grandeur",
            f"Sans poser l'opération, choisis le résultat de ${a} \\times {b}$ parmi : " + " ; ".join(f"${nm(x)}$" for x in choix) + ".",
            [f"Ordre de grandeur : ${a} \\times {b} \\approx {ra} \\times {rb} = {nm(ra * rb)}$.",
             f"Le seul résultat proche de ${nm(ra * rb)}$ est ${nm(p)}$."], f"${nm(p)}$")
    # choisir l'opération (5)
    ch = [("Un fleuriste reçoit 7 bouquets de 12 roses. Quelle opération donne le nombre de roses ? Calcule-le.", "multiplication", "7 \\times 12 = 84", "84 roses"),
          ("Tom avait 63 €. Il lui reste 28 € après avoir acheté un jeu. Quelle opération donne le prix du jeu ? Calcule-le.", "soustraction", "63 - 28 = 35", "35 €"),
          ("On répartit 84 photos dans un album, 6 par page. Quelle opération donne le nombre de pages ? Calcule-le.", "division", "84 \\div 6 = 14", "14 pages"),
          ("Une course a deux étapes de 47 km et 38 km. Quelle opération donne la longueur totale ? Calcule-la.", "addition", "47 + 38 = 85", "85 km"),
          ("Nora a 15 ans. Son grand-père a 52 ans de plus. Quelle opération donne l'âge du grand-père ? Calcule-le.", "addition", "15 + 52 = 67", "67 ans")]
    for e, op, calc, r in ch:
        add("application", "choisir-operation", e,
            [f"C'est une {op}.", f"${calc}$."], f"une {op} : {r}")
    return _fin(E)


# ================================================================ CM2 : PROPORTIONNALITÉ ET POURCENTAGES
def gen_cm2_proportionnalite():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # reconnaître (7)
    tabs = [([1, 2, 3, 5], [4, 8, 12, 20]), ([2, 4, 6, 10], [5, 10, 16, 25]), ([3, 6, 9, 12], [12, 24, 36, 48]),
            ([1, 2, 4, 8], [3, 5, 9, 17])]
    for x, y in tabs:
        rapports = [Fraction(b, a) for a, b in zip(x, y)]
        prop = len(set(rapports)) == 1
        e = ("Ce tableau est-il un tableau de proportionnalité ? Première ligne : " + ", ".join(map(str, x)) +
             ". Deuxième ligne : " + ", ".join(map(str, y)) + ".")
        c = ["On cherche si l'on passe de la première ligne à la deuxième en multipliant toujours par le même nombre."]
        c += [f"${b} \\div {a} = {nm(r)}$" if r.denominator in (1, 2, 4, 5, 10) else f"${b} \\div {a}$ ne donne pas le même nombre" for a, b, r in zip(x, y, rapports)][:4]
        c.append(f"Oui : on multiplie toujours par ${nm(rapports[0])}$." if prop else "Non : le nombre par lequel on multiplie change.")
        add("intermediaire", "reconnaitre", e, c, "oui" if prop else "non")
    situ = [("Le nombre de croissants achetés (tous au même prix) et le prix payé.", "oui",
             "Si on achète 2 fois plus de croissants, on paie 2 fois plus."),
            ("L'âge d'un enfant et sa taille.", "non", "À 10 ans, on ne mesure pas 2 fois plus qu'à 5 ans."),
            ("Le côté d'un carré et son périmètre.", "oui", "Le périmètre est toujours égal à 4 fois le côté.")]
    for s_, r, c in situ:
        add("application", "reconnaitre", f"Ces deux grandeurs sont-elles proportionnelles ? {s_}", [c], r)
    # passage à l'unité (8)
    pu = [(4, 12, 6, "cahiers", "un cahier"), (5, 15, 8, "sandwichs", "un sandwich"), (3, 21, 7, "kg de cerises", "un kilogramme"),
          (6, 9, 10, "briques de jus", "une brique"),
          (4, 5, 9, "stylos", "un stylo"), (8, 20, 3, "billets de bus", "un billet"), (5, 35, 12, "places de cinéma", "une place"),
          (3, 4.5, 8, "croissants", "un croissant")]
    for a, p, b, u, unit in pu:
        un = _dec(p) / a
        r = un * b
        add("application" if un == un.to_integral_value() else "intermediaire", "passage-unite",
            f"{a} {u} coûtent {eur(p)} €. Combien coûtent {b} {u} ?",
            [f"Prix {de(unit)} : ${eurm(p)} \\div {a} = {eurm(un)}$ €.", f"Prix de {b} {u} : ${b} \\times {eurm(un)} = {eurm(r)}$ €."],
            f"${eurm(r)}$ €")
    # linéarité (7)
    lin = [("3 litres de jus servent 6 personnes. Combien de litres faut-il pour 12 personnes ?", 3, 6, 12, "L"),
           ("Pour 4 personnes, il faut 200 g de farine. Combien de farine pour 12 personnes ?", 200, 4, 12, "g"),
           ("Un robinet remplit 15 L en 2 min. Combien de litres remplit-il en 10 min ?", 15, 2, 10, "L"),
           ("Pour 6 crêpes, il faut 2 œufs. Combien d'œufs faut-il pour 24 crêpes ?", 2, 6, 24, "œufs"),
           ("Une voiture consomme 6 L d'essence pour 100 km. Combien consomme-t-elle pour 300 km ?", 6, 100, 300, "L"),
           ("Pour 8 personnes, il faut 600 g de pâtes. Combien en faut-il pour 4 personnes ?", 600, 8, 4, "g")]
    for e, v, a, b, u in lin:
        k = Fraction(b, a)
        r = v * k
        mot = f"{nm(k)} fois plus" if k > 1 else f"{nm(1 / k)} fois moins"
        op = f"\\times {nm(k)}" if k > 1 else f"\\div {nm(1 / k)}"
        add("intermediaire", "linearite", e,
            [f"On passe de {a} à {b} : c'est {mot}.", f"${v} {op} = {nm(r)}$ {u}."], f"${nm(r)}$ {u}")
    add("approfondissement", "linearite",
        "5 kg de pommes coûtent 9 € et 3 kg coûtent 5,40 €. Combien coûtent 8 kg ?",
        ["8 kg, c'est 5 kg + 3 kg : on peut additionner les prix.", f"$9 + 5{{,}}40 = {eurm(Decimal('14.40'))}$ €."], f"${eurm(Decimal('14.40'))}$ €")
    # pourcentages (9)
    pc = [(50, 20), (25, 80), (10, 250), (50, 36), (25, 120), (10, 70), (75, 40), (20, 150), (100, 63)]
    for p, q in pc:
        r = Fraction(p * q, 100)
        if p == 50:
            c = [f"50 % de {q}, c'est la moitié : ${q} \\div 2 = {nm(r)}$."]
        elif p == 25:
            c = [f"25 % de {q}, c'est le quart : ${q} \\div 4 = {nm(r)}$."]
        elif p == 10:
            c = [f"10 % de {q}, c'est le dixième : ${q} \\div 10 = {nm(r)}$."]
        elif p == 75:
            c = [f"75 %, c'est trois fois 25 % (les trois quarts) : ${q} \\div 4 = {q // 4}$, puis $3 \\times {q // 4} = {nm(r)}$."]
        elif p == 20:
            c = [f"20 %, c'est deux fois 10 % : ${q} \\div 10 = {nm(Fraction(q, 10))}$, puis $2 \\times {nm(Fraction(q, 10))} = {nm(r)}$."]
        else:
            c = [f"100 %, c'est le tout : on ne change rien, cela fait ${q}$."]
        add("application" if p in (50, 25, 10, 100) else "intermediaire", "pourcentage", f"Calcule {p} % de {q}.", c, f"${nm(r)}$")
    # réductions (7)
    red = [(40, 25, "Un pull"), (60, 50, "Une paire de chaussures"), (80, 10, "Un jeu de société"), (120, 25, "Un vélo d'enfant"),
           (30, 20, "Un livre"), (90, 10, "Un manteau"), (200, 75, "Une console d'occasion")]
    for prix, p, obj in red:
        rd = Fraction(prix * p, 100)
        add("intermediaire" if p in (50, 25, 10) else "approfondissement", "reduction",
            f"{obj} coûte {prix} €. Le magasin fait une réduction de {p} %. Quel est le nouveau prix ?",
            [f"Réduction : {p} % de {prix} = ${nm(rd)}$ €.", f"Nouveau prix : ${prix} - {nm(rd)} = {nm(prix - rd)}$ €."],
            f"${nm(prix - rd)}$ €")
    # compléter un tableau (6)
    ct = [(3, [2, 5, 7], 2), (4, [3, 6, 9], 0), (6, [2, 4, 10], 1), (5, [4, 8, 11], 2), (12, [2, 3, 5], 2), (8, [5, 7, 10], 1)]
    for k, xs, cache in ct:
        ys = [k * x for x in xs]
        aff = ", ".join(f"{x} → {('?' if i == cache else y)}" for i, (x, y) in enumerate(zip(xs, ys)))
        ref = 0 if cache != 0 else 1
        add("intermediaire", "tableau-proportionnalite",
            f"Ce tableau est un tableau de proportionnalité (nombre de paquets → nombre de bonbons) : {aff}. Quel nombre remplace « ? » ?",
            [f"Le coefficient : ${ys[ref]} \\div {xs[ref]} = {k}$ (chaque paquet contient {k} bonbons).",
             f"${xs[cache]} \\times {k} = {ys[cache]}$."], f"${ys[cache]}$")
    # problèmes (6)
    add("probleme", "probleme-proportionnalite",
        "Une recette de gâteau pour 6 personnes demande 180 g de sucre et 3 œufs. Quelles quantités faut-il pour 4 personnes ?",
        ["Pour 1 personne : $180 \\div 6 = 30$ g de sucre et $3 \\div 6 = 0{,}5$ œuf.", "Pour 4 personnes : $4 \\times 30 = 120$ g de sucre et $4 \\times 0{,}5 = 2$ œufs."],
        "$120$ g de sucre et $2$ œufs")
    add("probleme", "probleme-proportionnalite",
        "Dans une classe de 28 élèves, 25 % sont venus à vélo. Combien d'élèves sont venus à vélo ?",
        ["25 %, c'est le quart : $28 \\div 4 = 7$."], "$7$ élèves")
    add("probleme", "probleme-proportionnalite",
        "Un cycliste roule à vitesse constante : il parcourt 18 km en 1 h. Quelle distance parcourt-il en 2 h 30 min ?",
        ["En 2 h : $2 \\times 18 = 36$ km. En 30 min (une demi-heure) : $18 \\div 2 = 9$ km.", "En tout : $36 + 9 = 45$ km."], "$45$ km")
    add("probleme", "probleme-proportionnalite",
        "Un magasin annonce : « 10 % de réduction sur tout ». Inès achète un jean à 45 € et un tee-shirt à 15 €. Combien paie-t-elle ?",
        ["Prix total avant réduction : $45 + 15 = 60$ €.", "Réduction : 10 % de 60 = $60 \\div 10 = 6$ €.", "Elle paie $60 - 6 = 54$ €."], "$54$ €")
    add("probleme", "probleme-proportionnalite",
        "Avec 2 kg de farine, un boulanger fait 5 pains identiques. Combien de pains fait-il avec 8 kg de farine ?",
        ["8 kg, c'est 4 fois plus que 2 kg.", "$5 \\times 4 = 20$ pains."], "$20$ pains")
    add("probleme", "probleme-proportionnalite",
        "Sur 200 élèves d'une école, 50 % mangent à la cantine. Parmi eux, 10 % sont en CM2. Combien d'élèves de CM2 mangent à la cantine ?",
        ["50 % de 200 : $200 \\div 2 = 100$ élèves à la cantine.", "10 % de 100 : $100 \\div 10 = 10$ élèves."], "$10$ élèves")
    return _fin(E)



# ================================================================ CM2 : SOLIDES ET PATRONS
SOLIDES = {  # nom: (faces, arêtes, sommets, description des faces)
    "le cube": (6, 12, 8, "6 carrés identiques"),
    "le pavé droit": (6, 12, 8, "6 rectangles, identiques deux à deux"),
    "la pyramide à base carrée": (5, 8, 5, "1 carré (la base) et 4 triangles"),
    "le prisme droit à base triangulaire": (5, 9, 6, "2 triangles (les bases) et 3 rectangles"),
    "la pyramide à base triangulaire": (4, 6, 4, "4 triangles"),
}


def _cap(s):
    return s[0].upper() + s[1:]


def gen_cm2_solides():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # dénombrer (10)
    quoi = [("faces", 0), ("arêtes", 1), ("sommets", 2)]
    combos = [("le cube", 1), ("le cube", 2), ("le pavé droit", 0), ("le pavé droit", 1), ("la pyramide à base carrée", 0),
              ("la pyramide à base carrée", 1), ("la pyramide à base carrée", 2), ("le prisme droit à base triangulaire", 1),
              ("le prisme droit à base triangulaire", 2), ("la pyramide à base triangulaire", 1)]
    for sol, k in combos:
        v = SOLIDES[sol][k]
        mot = quoi[k][0]
        nom = sol.split(" ", 1)[1]
        art = "un" if sol.startswith("le ") else "une"
        aide = {0: "On compte toutes les surfaces planes, sans oublier celles de dessous et de derrière.",
                1: "On compte les traits où deux faces se rejoignent.",
                2: "On compte les coins, là où les arêtes se rejoignent."}[k]
        add("application" if sol in ("le cube", "le pavé droit") else "intermediaire", "denombrer",
            f"Combien {de(mot)} a {art} {nom} ?", [aide, f"{_cap(sol)} a {v} {mot}."], f"${v}$ {mot}")
    # forme des faces (7)
    for sol in SOLIDES:
        nom = sol.split(" ", 1)[1]
        art = "un" if sol.startswith("le ") else "une"
        add("intermediaire", "forme-des-faces", f"Quelles sont les formes des faces d'{art} {nom} ?",
            [f"{_cap(sol)} a {SOLIDES[sol][0]} faces : {SOLIDES[sol][3]}."], SOLIDES[sol][3])
    add("intermediaire", "forme-des-faces", "Quelles sont les faces d'un cylindre ?",
        ["Un cylindre a 2 faces planes en forme de disque (le dessus et le dessous) et une face courbe autour."],
        "2 disques et 1 face courbe")
    add("intermediaire", "forme-des-faces", "Quelles sont les faces d'un cône ?",
        ["Un cône a 1 face plane en forme de disque et 1 face courbe qui monte vers la pointe."],
        "1 disque et 1 face courbe")
    # patrons (8)
    pat = [("6 carrés identiques", "un cube", "Seul le cube a 6 faces carrées identiques."),
           ("6 rectangles, identiques deux à deux", "un pavé droit", "Le pavé droit a 6 faces rectangulaires, identiques deux à deux."),
           ("1 carré et 4 triangles identiques", "une pyramide à base carrée", "Le carré est la base, les 4 triangles se rejoignent en un sommet."),
           ("2 disques et 1 rectangle", "un cylindre", "Les 2 disques ferment le dessus et le dessous ; le rectangle s'enroule pour former la face courbe."),
           ("2 triangles identiques et 3 rectangles", "un prisme droit à base triangulaire", "Les 2 triangles sont les bases, les 3 rectangles forment les côtés."),
           ("4 triangles", "une pyramide à base triangulaire", "Un triangle sert de base, les 3 autres se rejoignent en un sommet.")]
    for desc, sol, c in pat:
        add("intermediaire", "patrons", f"Un patron est formé de {desc}. Quel solide obtient-on en le pliant ?", [c], sol)
    add("application", "patrons", "Combien de carrés faut-il dessiner pour faire le patron d'un cube ?",
        ["Un cube a 6 faces carrées : son patron contient donc 6 carrés."], "$6$ carrés")
    add("approfondissement", "patrons", "Vrai ou faux : n'importe quel assemblage de 6 carrés est un patron de cube.",
        ["Faux : il faut que, en pliant, les carrés referment la boîte sans trou ni face qui se chevauche.",
         "Par exemple, 6 carrés alignés en une seule rangée ne forment pas un cube."], "faux")
    # vocabulaire (7)
    voc = [("application", "Comment appelle-t-on le trait où deux faces d'un solide se rejoignent ?", ["C'est la définition d'une arête."], "une arête"),
           ("application", "Comment appelle-t-on un coin d'un solide, là où des arêtes se rejoignent ?", ["C'est la définition d'un sommet."], "un sommet"),
           ("intermediaire", "Combien d'arêtes partent de chaque sommet d'un cube ?", ["À chaque coin d'un cube, 3 arêtes se rejoignent."], "$3$ arêtes"),
           ("intermediaire", "Combien de faces se rejoignent le long d'une arête ?", ["Une arête est le trait commun à 2 faces."], "$2$ faces"),
           ("intermediaire", "Vrai ou faux : un pavé droit a des faces identiques deux à deux.",
            ["Vrai : l'avant et l'arrière, le dessus et le dessous, les deux côtés sont identiques."], "vrai"),
           ("intermediaire", "Vrai ou faux : un cube est un pavé droit particulier.",
            ["Vrai : un cube a 6 faces rectangulaires… qui sont des carrés. C'est un pavé droit dont toutes les arêtes ont la même longueur."], "vrai"),
           ("approfondissement", "Quel solide a 5 faces, 8 arêtes et 5 sommets ?",
            ["La pyramide à base carrée : 1 base carrée + 4 triangles = 5 faces ; 4 arêtes de base + 4 arêtes vers la pointe = 8 ; 4 coins + la pointe = 5 sommets."],
            "la pyramide à base carrée")]
    for d, e, c, r in voc:
        add(d, "vocabulaire", e, c, r)
    # solides ronds (6)
    ronds = [("application", "Combien de sommets a une boule ?", ["Une boule n'a qu'une face courbe, aucune arête et aucun sommet."], "$0$ sommet"),
             ("application", "Une boîte de conserve a la forme de quel solide ?", ["Elle a 2 disques (dessus et dessous) et une face courbe : c'est un cylindre."], "un cylindre"),
             ("application", "Un cornet de glace a la forme de quel solide ?", ["Il a un disque et une face courbe qui monte vers une pointe : c'est un cône."], "un cône"),
             ("intermediaire", "Combien de sommets a un cône ?", ["La face courbe du cône monte vers une pointe : c'est son unique sommet."], "$1$ sommet"),
             ("intermediaire", "Quel solide n'a aucune face plane ?", ["La boule n'a qu'une seule face, courbe."], "la boule"),
             ("approfondissement", "Vrai ou faux : un cylindre a des arêtes droites comme un cube.",
              ["Faux : le cylindre n'a pas d'arêtes droites. Ses faces planes sont des disques qui touchent la face courbe le long de deux cercles."], "faux")]
    for d, e, c, r in ronds:
        add(d, "solides-ronds", e, c, r)
    # calculs (7)
    for a in (3, 5, 7):
        add("intermediaire", "calculs-aretes", f"Un cube a des arêtes de {a} cm. Quelle est la longueur totale de toutes ses arêtes ?",
            ["Un cube a 12 arêtes de même longueur.", f"$12 \\times {a} = {12 * a}$ cm."], f"${12 * a}$ cm")
    for L, l, h in [(5, 3, 2), (8, 4, 3)]:
        add("approfondissement", "calculs-aretes",
            f"Un pavé droit mesure {L} cm de long, {l} cm de large et {h} cm de haut. Quelle est la longueur totale de ses arêtes ?",
            ["Un pavé droit a 12 arêtes : 4 longueurs, 4 largeurs et 4 hauteurs.",
             f"$4 \\times {L} + 4 \\times {l} + 4 \\times {h} = {4 * L} + {4 * l} + {4 * h} = {4 * (L + l + h)}$ cm."], f"${4 * (L + l + h)}$ cm")
    for a in (4, 6):
        add("approfondissement", "calculs-aretes",
            f"On dessine le patron d'un cube de {a} cm d'arête. Quelle est l'aire totale du patron ?",
            [f"Le patron est formé de 6 carrés de {a} cm de côté.", f"Aire d'un carré : ${a} \\times {a} = {a * a}$ cm².",
             f"Aire du patron : $6 \\times {a * a} = {6 * a * a}$ cm²."], f"${6 * a * a}$ cm²")
    # problèmes (5)
    add("probleme", "probleme-solides",
        "Pour fabriquer le squelette d'un cube, Hugo utilise une paille de 8 cm pour chaque arête et une boule de pâte à modeler à chaque sommet. Combien de pailles et de boules lui faut-il ?",
        ["Un cube a 12 arêtes : 12 pailles.", "Un cube a 8 sommets : 8 boules."], "$12$ pailles et $8$ boules")
    add("probleme", "probleme-solides",
        "Jade veut peindre toutes les faces de 4 cubes en bois. Chaque face demande une couche de peinture. Combien de faces va-t-elle peindre ?",
        ["Un cube a 6 faces.", "$4 \\times 6 = 24$ faces."], "$24$ faces")
    add("probleme", "probleme-solides",
        "On empile des petits cubes pour faire un pavé droit de 4 cubes de long, 3 cubes de large et 2 cubes de haut. Combien de petits cubes faut-il ?",
        ["Une couche : $4 \\times 3 = 12$ cubes.", "2 couches : $12 \\times 2 = 24$ cubes."], "$24$ cubes")
    add("probleme", "probleme-solides",
        "Avec 36 pailles identiques, combien de squelettes de cubes complets Tom peut-il construire ?",
        ["Il faut 12 pailles par cube (une par arête).", "$36 \\div 12 = 3$."], "$3$ cubes")
    add("probleme", "probleme-solides",
        "Une boîte en carton a la forme d'un pavé droit sans couvercle. Combien de faces en carton a-t-elle ?",
        ["Un pavé droit a 6 faces.", "Sans couvercle, il en manque une : $6 - 1 = 5$ faces."], "$5$ faces")
    return _fin(E)


# ================================================================ CM2 : SYMÉTRIE AXIALE
def gen_cm2_symetrie():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    axes = [("un carré", "4", "Les 2 diagonales et les 2 droites qui passent par les milieux des côtés opposés."),
            ("un rectangle (qui n'est pas un carré)", "2", "Les 2 droites qui passent par les milieux des côtés opposés (pas les diagonales)."),
            ("un losange (qui n'est pas un carré)", "2", "Ses 2 diagonales."),
            ("un triangle équilatéral", "3", "Chaque droite qui passe par un sommet et le milieu du côté opposé."),
            ("un triangle isocèle (non équilatéral)", "1", "La droite qui passe par le sommet principal et le milieu de la base."),
            ("un hexagone régulier", "6", "Un polygone régulier a autant d'axes de symétrie que de côtés : 6."),
            ("un cercle", "une infinité", "Toute droite qui passe par le centre est un axe de symétrie."),
            ("un parallélogramme (qui n'est ni un rectangle ni un losange)", "0", "Aucun pliage ne superpose ses deux moitiés.")]
    for fig, n, c in axes:
        add("application" if fig.split(" ")[1] in ("carré", "rectangle", "cercle") else "intermediaire", "axes-figures",
            f"Combien d'axes de symétrie possède {fig} ?", [c], n if n == "une infinité" else f"${n}$")
    # lettres (8)
    lettres_ = [("A", "un axe vertical"), ("B", "un axe horizontal"), ("H", "deux axes, un vertical et un horizontal"),
                ("T", "un axe vertical"), ("E", "un axe horizontal"), ("X", "deux axes, un vertical et un horizontal"),
                ("F", "aucun axe"), ("N", "aucun axe")]
    for L, r in lettres_:
        c = {"aucun axe": f"Aucun pliage de la lettre {L} ne superpose les deux moitiés : elle n'a aucun axe de symétrie."}.get(
            r, (f"En pliant la lettre {L} le long de chacun de ces axes, les deux moitiés se superposent : {r}." if r.startswith("deux")
                else f"En pliant la lettre {L} le long de cet axe, les deux moitiés se superposent : {r}."))
        add("application" if r != "aucun axe" else "intermediaire", "lettres",
            f"La lettre {L} (écrite en majuscule d'imprimerie) a-t-elle un axe de symétrie ? Si oui, lequel ou lesquels ?", [c], r)
    # quadrillage : distances (10)
    q = [(3, "à gauche", "à droite", "vertical"), (5, "au-dessus", "au-dessous", "horizontal"), (2, "à droite", "à gauche", "vertical"),
         (7, "au-dessous", "au-dessus", "horizontal"), (4, "à gauche", "à droite", "vertical")]
    for k, cote, autre, sens in q:
        add("application", "quadrillage",
            f"Sur un quadrillage, le point A est à {pl(k, 'carreau', 'carreaux')} {cote} d'un axe de symétrie {sens}. Où se trouve son symétrique A' ?",
            ["Le symétrique est à la même distance de l'axe, de l'autre côté."], f"à {pl(k, 'carreau', 'carreaux')} {autre} de l'axe")
        add("intermediaire", "quadrillage",
            f"Sur un quadrillage, le point B est à {pl(k + 1, 'carreau', 'carreaux')} {cote} d'un axe de symétrie {sens}. Combien de carreaux séparent B de son symétrique B' ?",
            [f"B' est à {pl(k + 1, 'carreau', 'carreaux')} de l'autre côté de l'axe.", f"Distance $BB' = {k + 1} + {k + 1} = {2 * (k + 1)}$ carreaux."],
            f"${2 * (k + 1)}$ carreaux")
    # repérage avec numéros de colonnes (8)
    rep = [(5, 2, 4), (6, 1, 3), (8, 11, 2), (4, 7, 5), (10, 6, 1), (7, 3, 6), (9, 13, 7), (6, 6, 2)]
    for ax, col, lig in rep:
        im = 2 * ax - col
        if col == ax:
            c = [f"Le point est dans la colonne {col}, donc sur l'axe : il est son propre symétrique."]
            d = "approfondissement"
        else:
            dist = abs(ax - col)
            c = [f"Le point est à {pl(dist, 'colonne')} de l'axe ({'à gauche' if col < ax else 'à droite'}).",
                 f"Son symétrique est à {pl(dist, 'colonne')} de l'autre côté : colonne ${ax} {'+' if col < ax else '-'} {dist} = {im}$, même ligne {lig}."]
            d = "intermediaire"
        add(d, "reperage",
            f"Sur un quadrillage, les colonnes sont numérotées de gauche à droite. L'axe de symétrie est vertical et passe par le milieu de la colonne {ax}. "
            f"Le point M est colonne {col}, ligne {lig}. Où est son symétrique M' ?", c, f"colonne {im}, ligne {lig}")
    # propriétés (8)
    pr = [("application", "Un segment [AB] mesure 6 cm. Combien mesure son symétrique [A'B'] par rapport à une droite ?",
           ["La symétrie ne change ni les longueurs ni la forme."], "$6$ cm"),
          ("application", "Un point C est situé sur l'axe de symétrie. Où se trouve son symétrique ?",
           ["Un point situé sur l'axe est son propre symétrique : il ne bouge pas."], "au même endroit : C' = C"),
          ("intermediaire", "Un angle droit a pour symétrique un angle de quelle mesure ?",
           ["La symétrie conserve les angles."], "un angle droit ($90^\\circ$)"),
          ("intermediaire", "Vrai ou faux : l'axe de symétrie coupe le segment [MM'] en son milieu (M' est le symétrique de M).",
           ["Vrai : l'axe est à égale distance de M et de M', et il est perpendiculaire à [MM']."], "vrai"),
          ("intermediaire", "Vrai ou faux : le symétrique d'une figure est toujours plus petit qu'elle.",
           ["Faux : la symétrie ne change ni la taille ni la forme ; seule la position change (comme dans un miroir)."], "faux"),
          ("intermediaire", "Quel angle forme l'axe de symétrie avec le segment qui relie un point à son symétrique ?",
           ["L'axe est perpendiculaire à ce segment."], "un angle droit"),
          ("approfondissement", "Le point P est à 2,5 cm de l'axe de symétrie. À quelle distance de P se trouve son symétrique P' ?",
           ["P' est aussi à 2,5 cm de l'axe, de l'autre côté.", "$PP' = 2{,}5 + 2{,}5 = 5$ cm."], "$5$ cm"),
          ("approfondissement", "Vrai ou faux : une figure a toujours au moins un axe de symétrie.",
           ["Faux : un triangle quelconque ou un parallélogramme ordinaire n'en a aucun."], "faux")]
    for d, e, c, r in pr:
        add(d, "proprietes", e, c, r)
    # figures symétriques (8)
    fs = [(3, 4, 5), (5, 5, 6), (7, 8, 9)]
    for a, b, c_ in fs:
        add("intermediaire", "figure-symetrique",
            f"Un triangle a des côtés de {a} cm, {b} cm et {c_} cm. Quel est le périmètre de son symétrique par rapport à une droite ?",
            ["Le symétrique a exactement les mêmes longueurs de côtés.", f"$P = {a} + {b} + {c_} = {a + b + c_}$ cm."], f"${a + b + c_}$ cm")
    for L, l in [(6, 4), (9, 5)]:
        add("intermediaire", "figure-symetrique",
            f"Un rectangle mesure {L} cm sur {l} cm. Quelle est l'aire de son symétrique par rapport à une droite ?",
            ["La symétrie conserve les longueurs, donc aussi l'aire.", f"$A = {L} \\times {l} = {L * l}$ cm²."], f"${L * l}$ cm²")
    for moitie in (7, 12, 15):
        add("probleme", "figure-symetrique",
            f"Un papillon est dessiné symétrique par rapport à son corps. L'aile gauche couvre {moitie} carreaux du quadrillage. Combien de carreaux couvrent les deux ailes ?",
            ["L'aile droite est le symétrique de l'aile gauche : elle couvre le même nombre de carreaux.", f"$2 \\times {moitie} = {2 * moitie}$ carreaux."],
            f"${2 * moitie}$ carreaux")
    return _fin(E)


# ================================================================ 6e : CONFIGURATIONS PLANES
def gen_6_configurations():
    rng = random.Random(6201)
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # notations (6)
    notes = [("$(AB)$", "la droite passant par $A$ et $B$ (infinie des deux côtés)"),
             ("$[AB]$", "le segment d'extrémités $A$ et $B$"),
             ("$[AB)$", "la demi-droite d'origine $A$ passant par $B$"),
             ("$AB$", "la longueur du segment $[AB]$ (un nombre)")]
    for n_, sens in notes:
        add("application", "notations", f"Que désigne la notation {n_} ?", [f"{n_} désigne {sens}."], sens)
    add("intermediaire", "notations", "Vrai ou faux : on peut écrire $[AB] = 5$ cm.",
        ["Faux : $[AB]$ est un dessin (un segment), pas un nombre.", "On écrit $AB = 5$ cm (sans crochets)."], "faux")
    add("intermediaire", "notations", "Laquelle de ces lignes est limitée d'un seul côté : $(AB)$, $[AB]$ ou $[AB)$ ?",
        ["$(AB)$ est infinie des deux côtés, $[AB]$ est limité des deux côtés.", "$[AB)$ est une demi-droite : limitée en $A$ seulement."], "$[AB)$")
    # milieu (7)
    for AB in ["6", "7.4", "11", "9.6"]:
        d_ = Decimal(AB)
        add("application", "milieu", f"$AB = {nm(d_)}$ cm et $I$ est le milieu de $[AB]$. Calcule $IA$.",
            ["Le milieu partage le segment en deux longueurs égales.", f"$IA = {nm(d_)} \\div 2 = {nm(d_ / 2)}$ cm."], f"$IA = {nm(d_ / 2)}$ cm")
    for IA in ["3.5", "4.25"]:
        d_ = Decimal(IA)
        add("intermediaire", "milieu", f"$I$ est le milieu de $[AB]$ et $IA = {nm(d_)}$ cm. Calcule $AB$.",
            ["$AB = IA + IB$ et $IA = IB$.", f"$AB = 2 \\times {nm(d_)} = {nm(2 * d_)}$ cm."], f"$AB = {nm(2 * d_)}$ cm")
    add("approfondissement", "milieu", "Le point $M$ vérifie $MA = MB = 4$ cm, mais $M$ n'est pas sur le segment $[AB]$. Est-il le milieu de $[AB]$ ?",
        ["Non : pour être le milieu, il faut être à égale distance de $A$ et $B$ ET sur le segment $[AB]$.",
         "$M$ est seulement sur la médiatrice de $[AB]$."], "non")
    # cercle (7)
    for r in [3, 4.5, 6]:
        r_ = _dec(r)
        add("application", "cercle", f"Un cercle a un rayon de {nb(r_)} cm. Quel est son diamètre ?",
            ["Le diamètre vaut le double du rayon.", f"$D = 2 \\times {nm(r_)} = {nm(2 * r_)}$ cm."], f"${nm(2 * r_)}$ cm")
    add("application", "cercle", "Un cercle a un diamètre de 13 cm. Quel est son rayon ?",
        ["Le rayon est la moitié du diamètre.", "$r = 13 \\div 2 = 6{,}5$ cm."], "$6{,}5$ cm")
    for r, d_ in [(5, 5), (5, 3.8), (4, 4.6)]:
        d2 = _dec(d_)
        if d2 == r:
            rep, c = "sur le cercle", f"$OM = {r}$ cm, c'est exactement le rayon : $M$ est sur le cercle (et dans le disque)."
        elif d2 < r:
            rep, c = "à l'intérieur du cercle (dans le disque)", f"$OM = {nm(d2)}$ cm $< {r}$ cm : $M$ est dans le disque, mais pas sur le cercle."
        else:
            rep, c = "à l'extérieur du cercle", f"$OM = {nm(d2)}$ cm $> {r}$ cm : $M$ est en dehors du disque."
        add("intermediaire", "cercle",
            f"Un cercle a pour centre $O$ et pour rayon {r} cm. Un point $M$ est tel que $OM = {nm(d2)}$ cm. Où est $M$ ?",
            ["On compare la distance $OM$ au rayon.", c], rep)
    # médiatrice (5)
    add("application", "mediatrice", "Qu'est-ce que la médiatrice d'un segment $[AB]$ ?",
        ["C'est la droite perpendiculaire à $[AB]$ qui passe par son milieu."], "la droite perpendiculaire à $[AB]$ passant par son milieu")
    for ma in [5, 7.2]:
        m_ = _dec(ma)
        add("intermediaire", "mediatrice", f"Le point $M$ est sur la médiatrice de $[AB]$ et $MA = {nm(m_)}$ cm. Combien mesure $MB$ ?",
            ["Tout point de la médiatrice est à égale distance des extrémités du segment.", f"$MB = MA = {nm(m_)}$ cm."], f"$MB = {nm(m_)}$ cm")
    add("intermediaire", "mediatrice", "$PA = 6$ cm et $PB = 6$ cm. Que peut-on dire du point $P$ ?",
        ["$P$ est à égale distance de $A$ et de $B$.", "Donc $P$ est sur la médiatrice de $[AB]$."], "$P$ est sur la médiatrice de $[AB]$")
    add("approfondissement", "mediatrice", "$QA = 4$ cm et $QB = 5$ cm. Le point $Q$ est-il sur la médiatrice de $[AB]$ ?",
        ["Un point de la médiatrice est à égale distance de $A$ et de $B$.", "Ici $QA \\neq QB$ : $Q$ n'est pas sur la médiatrice."], "non")
    # angles (8)
    for a in [35, 90, 128, 180]:
        if a < 90:
            t = "aigu"
        elif a == 90:
            t = "droit"
        elif a < 180:
            t = "obtus"
        else:
            t = "plat"
        add("application", "angles", f"Un angle mesure ${a}^\\circ$. Est-il aigu, droit, obtus ou plat ?",
            ["Aigu : entre $0^\\circ$ et $90^\\circ$ ; droit : $90^\\circ$ ; obtus : entre $90^\\circ$ et $180^\\circ$ ; plat : $180^\\circ$."], f"{t}")
    for a in [130, 72]:
        add("intermediaire", "angles", f"Deux angles sont supplémentaires. L'un mesure ${a}^\\circ$. Combien mesure l'autre ?",
            ["Deux angles supplémentaires ont une somme de $180^\\circ$.", f"$180 - {a} = {180 - a}$, donc ${180 - a}^\\circ$."], f"${180 - a}^\\circ$")
    add("intermediaire", "angles", "Deux droites se coupent. L'un des angles formés mesure $47^\\circ$. Combien mesure l'angle qui lui est opposé par le sommet ?",
        ["Deux angles opposés par le sommet sont égaux."], "$47^\\circ$")
    add("intermediaire", "angles", "On trace la bissectrice d'un angle de $84^\\circ$. Combien mesure chacun des deux angles obtenus ?",
        ["La bissectrice partage l'angle en deux angles égaux.", "$84 \\div 2 = 42$."], "$42^\\circ$")
    # somme des angles (10)
    vus = set()
    while len(vus) < 5:
        a = rng.randint(25, 95)
        b = rng.randint(25, 95)
        if a + b < 170 and (a, b) not in vus and a != b:
            vus.add((a, b))
            add("application", "somme-angles-triangle",
                f"Dans un triangle $ABC$, $\\widehat{{A}} = {a}^\\circ$ et $\\widehat{{B}} = {b}^\\circ$. Calcule $\\widehat{{C}}$.",
                ["La somme des angles d'un triangle vaut $180^\\circ$.", f"$\\widehat{{C}} = 180 - {a} - {b} = {180 - a - b}^\\circ$."], f"${180 - a - b}^\\circ$")
    for a in [40, 64]:
        add("intermediaire", "somme-angles-triangle",
            f"Un triangle $ABC$ est rectangle en $A$ et $\\widehat{{B}} = {a}^\\circ$. Calcule $\\widehat{{C}}$.",
            ["L'angle droit mesure $90^\\circ$.", f"$\\widehat{{C}} = 180 - 90 - {a} = {90 - a}^\\circ$."], f"${90 - a}^\\circ$")
    for a in [40, 100]:
        b = (180 - a) // 2
        add("approfondissement", "somme-angles-triangle",
            f"Un triangle $ABC$ est isocèle en $A$ et $\\widehat{{A}} = {a}^\\circ$. Calcule $\\widehat{{B}}$ et $\\widehat{{C}}$.",
            ["Dans un triangle isocèle en $A$, les angles à la base $\\widehat{B}$ et $\\widehat{C}$ sont égaux.",
             f"$\\widehat{{B}} + \\widehat{{C}} = 180 - {a} = {180 - a}^\\circ$, donc chacun vaut ${180 - a} \\div 2 = {b}^\\circ$."],
            f"$\\widehat{{B}} = \\widehat{{C}} = {b}^\\circ$")
    add("intermediaire", "somme-angles-triangle", "Combien mesure chaque angle d'un triangle équilatéral ?",
        ["Les trois angles sont égaux et leur somme vaut $180^\\circ$.", "$180 \\div 3 = 60$."], "$60^\\circ$")
    # triangle constructible (7)
    tri = [(2, 2, 6), (3, 4, 5), (5, 5, 9), (4, 7, 12), (6, 6, 6), (3, 8, 4), (5, 7, 12)]
    for a, b, c_ in tri:
        L = sorted([a, b, c_])
        s_ = L[0] + L[1]
        if s_ > L[2]:
            rep, c = "oui", f"Le plus long côté ({L[2]} cm) est plus petit que la somme des deux autres : ${L[0]} + {L[1]} = {s_} > {L[2]}$."
        elif s_ == L[2]:
            rep, c = "non (les trois points sont alignés)", f"${L[0]} + {L[1]} = {s_}$, exactement le plus long côté : les arcs se touchent sur le segment, les points sont alignés."
        else:
            rep, c = "non", f"${L[0]} + {L[1]} = {s_} < {L[2]}$ : les deux petits côtés sont trop courts, les arcs ne se croisent pas."
        add("probleme" if s_ == L[2] else "intermediaire", "triangle-constructible",
            f"Peut-on construire un triangle dont les côtés mesurent {a} cm, {b} cm et {c_} cm ?",
            ["On compare le plus long côté à la somme des deux autres.", c], rep)
    return _fin(E)


# ================================================================ 6e : DURÉES
CTX_DUREE = ["Un trajet en car", "Un après-midi au zoo", "Un repas de famille", "Un voyage en train", "Un atelier de cuisine",
             "Un cours de natation", "Un trajet en voiture", "Un atelier de lecture", "Un goûter d'anniversaire"]
def gen_6_durees():
    rng = random.Random(6202)
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # conversions (9)
    for h in (3, 5):
        add("application", "conversions", f"Convertis {h} h en minutes.", [f"$1$ h $= 60$ min, donc ${h} \\times 60 = {h * 60}$ min."], f"${h * 60}$ min")
    for m in (4, 12):
        add("application", "conversions", f"Convertis {m} min en secondes.", [f"$1$ min $= 60$ s, donc ${m} \\times 60 = {m * 60}$ s."], f"${m * 60}$ s")
    for m in (90, 135, 200):
        h, r = divmod(m, 60)
        add("intermediaire", "conversions", f"Convertis {m} min en heures et minutes.",
            [f"Dans {m}, il y a {h} fois 60 : ${m} = {h} \\times 60 + {r}$."], duree(m))
    s_ = 200
    add("intermediaire", "conversions", "Convertis 200 s en minutes et secondes.",
        ["$200 = 3 \\times 60 + 20$."], "3 min 20 s")
    add("approfondissement", "conversions", "Combien de secondes y a-t-il dans 1 h ?",
        ["$1$ h $= 60$ min $= 60 \\times 60$ s.", "$60 \\times 60 = 3\\,600$ s."], "$3\\,600$ s")
    # fractions d'heure (6)
    fh = [("une demi-heure", 30), ("un quart d'heure", 15), ("trois quarts d'heure", 45), ("1 h et quart", 75),
          ("2 h et demie", 150), ("une heure trois quarts", 105)]
    for t, m in fh:
        add("application" if m <= 45 else "intermediaire", "fractions-heure", f"Combien de minutes y a-t-il dans {t} ?",
            ["Une heure fait 60 min : la moitié fait 30 min, le quart 15 min, les trois quarts 45 min.",
             f"{_cap(t)} = ${m}$ min."], f"${m}$ min")
    # durée entre deux horaires (9)
    vus = set()
    while len(vus) < 9:
        d0 = rng.randint(7 * 60, 20 * 60) // 5 * 5
        dd = rng.randint(25, 200) // 5 * 5
        if d0 % 60 + dd % 60 <= 60 or (d0, dd) in vus:
            continue
        vus.add((d0, dd))
        d1 = d0 + dd
        hp = (d0 // 60 + 1) * 60
        add("intermediaire" if dd < 120 else "approfondissement", "duree-entre-horaires",
            f"{CTX_DUREE[len(vus) - 1]} commence à {hm(d0)} et se termine à {hm(d1)}. Combien de temps dure-t-il ?",
            [f"Par paliers : de {hm(d0)} à {hm(hp)}, il y a {hp - d0} min.",
             f"De {hm(hp)} à {hm(d1)}, il y a {duree(d1 - hp)}.",
             f"Total : {duree(dd)}."], duree(dd))
    # horaire d'arrivée (9)
    vus = set()
    k = 0
    acts = ["Un film commence", "Un match commence", "Un concert commence", "Une randonnée commence", "Un spectacle commence",
            "Un trajet en train commence", "Une séance de piscine commence", "Une visite de musée commence", "Un tournoi commence"]
    while k < 9:
        d0 = rng.randint(8 * 60, 20 * 60) // 5 * 5
        dd = rng.randint(30, 170) // 5 * 5
        if d0 % 60 + dd % 60 < 60 or (d0, dd) in vus or d0 + dd >= 24 * 60:
            continue
        vus.add((d0, dd))
        h0, m0 = divmod(d0, 60)
        hd, md = divmod(dd, 60)
        tot = m0 + md
        add("intermediaire", "horaire-arrivee",
            f"{acts[k]} à {hm(d0)} et dure {duree(dd)}. À quelle heure se termine-t-il ?" if not acts[k].startswith("Une") else
            f"{acts[k]} à {hm(d0)} et dure {duree(dd)}. À quelle heure se termine-t-elle ?",
            [f"J'ajoute les heures : {h0} h + {hd} h = {h0 + hd} h." if hd else f"Pas d'heure entière à ajouter : on reste à {h0} h.",
             f"J'ajoute les minutes : ${m0} + {md} = {tot}$ min, soit {duree(tot)} : je garde {tot - 60} min et j'ajoute 1 h.",
             f"Fin : {hm(d0 + dd)}."], hm(d0 + dd))
        k += 1
    # horaire de départ (6)
    dep = [(10 * 60 + 5, 40, "Le bus arrive à l'école à {f} après un trajet de {d}. À quelle heure est-il parti ?"),
           (14 * 60 + 20, 95, "Un train arrive en gare à {f} après {d} de voyage. À quelle heure est-il parti ?"),
           (9 * 60 + 15, 50, "Inès arrive au stade à {f} après {d} de marche. À quelle heure est-elle partie ?"),
           (18 * 60 + 10, 75, "Un avion atterrit à {f} après un vol de {d}. À quelle heure a-t-il décollé ?"),
           (12 * 60, 25, "Le repas doit être prêt à {f}. Sa préparation dure {d}. À quelle heure faut-il commencer ?"),
           (16 * 60 + 35, 110, "Un randonneur arrive au refuge à {f} après {d} de marche. À quelle heure est-il parti ?")]
    for fin, dd, t in dep:
        hd, md = divmod(dd, 60)
        c = [f"On remonte le temps : {hm(fin)} − {duree(dd)}."]
        if hd:
            c.append(f"J'enlève d'abord les heures : {hm(fin)} − {hd} h = {hm(fin - 60 * hd)}.")
        if md:
            c.append(f"{'Puis j' if hd else 'J'}'enlève {md} min : {hm(fin - 60 * hd)} − {md} min = {hm(fin - dd)}.")
        c.append(f"Vérification : {hm(fin - dd)} + {duree(dd)} = {hm(fin)}.")
        add("approfondissement", "horaire-depart", t.format(f=hm(fin), d=duree(dd)), c, hm(fin - dd))
    # années, siècles (5)
    an = [("application", "Combien d'années y a-t-il dans 3 siècles ?", ["$1$ siècle $= 100$ ans.", "$3 \\times 100 = 300$ ans."], "$300$ ans"),
          ("application", "Combien de jours compte une année bissextile ?", ["On ajoute le 29 février : $365 + 1 = 366$ jours."], "$366$ jours"),
          ("intermediaire", "Combien d'heures y a-t-il dans 3 jours ?", ["$1$ jour $= 24$ h.", "$3 \\times 24 = 72$ h."], "$72$ h"),
          ("intermediaire", "L'année 2028 est bissextile. Quelle est la prochaine année bissextile après 2028 ?",
           ["Les années bissextiles reviennent tous les 4 ans.", "$2028 + 4 = 2032$."], "$2032$"),
          ("approfondissement", "Combien de jours y a-t-il en tout dans les années 2025, 2026, 2027 et 2028 ?",
           ["2025, 2026 et 2027 sont des années ordinaires : $3 \\times 365 = 1\\,095$ jours.", "2028 est bissextile : $366$ jours.",
            "Total : $1\\,095 + 366 = 1\\,461$ jours."], "$1\\,461$ jours")]
    for d, e, c, r in an:
        add(d, "annees-siecles", e, c, r)
    # problèmes (6)
    add("probleme", "probleme-durees",
        "Léa part de chez elle à 7 h 50. Le trajet en bus dure 25 min, puis elle marche 10 min. À quelle heure arrive-t-elle ?",
        ["7 h 50 + 25 min : $50 + 25 = 75 = 60 + 15$, donc 8 h 15.", "8 h 15 + 10 min = 8 h 25."], "8 h 25")
    add("probleme", "probleme-durees",
        "Un film de 1 h 45 min commence à 20 h 30. Avant le film, il y a 20 min de publicités. À quelle heure se termine le film ?",
        ["Le film commence vraiment à 20 h 30 + 20 min = 20 h 50.", "20 h 50 + 1 h 45 min : 21 h 50 + 45 min = 21 h 95 min = 22 h 35."], "22 h 35")
    add("probleme", "probleme-durees",
        "Hugo s'entraîne au piano 25 min par jour, tous les jours de la semaine (7 jours). Combien de temps joue-t-il en une semaine ?",
        ["$7 \\times 25 = 175$ min.", "$175 = 2 \\times 60 + 55$, donc 2 h 55 min."], "2 h 55 min")
    add("probleme", "probleme-durees",
        "Une course de relais compte 4 coureurs. Leurs temps : 1 min 50 s, 2 min 05 s, 1 min 58 s et 2 min 12 s. Quel est le temps total ?",
        ["Minutes : $1 + 2 + 1 + 2 = 6$ min.", "Secondes : $50 + 5 + 58 + 12 = 125$ s $= 2$ min $5$ s.", "Total : 6 min + 2 min 5 s = 8 min 5 s."],
        "8 min 5 s")
    add("probleme", "probleme-durees",
        "Un train part à 9 h 40 et arrive à 13 h 15. Il s'arrête 20 min dans une gare. Combien de temps a-t-il roulé ?",
        ["Durée totale : de 9 h 40 à 10 h 00 : 20 min ; de 10 h 00 à 13 h 15 : 3 h 15 min. Total : 3 h 35 min.",
         "Temps passé à rouler : 3 h 35 min − 20 min = 3 h 15 min."], "3 h 15 min")
    add("probleme", "probleme-durees",
        "Un gâteau doit cuire trois quarts d'heure. Jade le met au four à 16 h 25. À quelle heure doit-elle le sortir ?",
        ["Trois quarts d'heure = 45 min.", "16 h 25 + 45 min : $25 + 45 = 70$ min $= 1$ h 10 min, donc 17 h 10."], "17 h 10")
    return _fin(E)


# ================================================================ 6e : FRACTIONS
NOMS_FRAC = {2: "demi", 3: "tiers", 4: "quart", 5: "cinquième", 6: "sixième", 8: "huitième", 10: "dixième"}


def gen_6_fractions():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # vocabulaire / fraction d'une figure (6)
    for a, b, obj in [(3, 8, "Une pizza"), (2, 5, "Une tablette de chocolat"), (5, 6, "Un gâteau")]:
        add("application", "vocabulaire",
            f"{obj} est partagé{'e' if obj.startswith('Une') else ''} en {b} parts égales. On en mange {a}. Quelle fraction a-t-on mangée ?",
            [f"Le dénominateur ({b}) dit en combien de parts égales on partage ; le numérateur ({a}) dit combien on en prend."],
            f"${fl2(a, b)}$")
    for a, b in [(7, 9), (4, 11)]:
        add("application", "vocabulaire", f"Dans la fraction ${fl2(a, b)}$, quel est le numérateur et quel est le dénominateur ?",
            [f"Le numérateur est en haut : ${a}$. Le dénominateur est en bas : ${b}$."], f"numérateur ${a}$, dénominateur ${b}$")
    add("intermediaire", "vocabulaire", "Écris en chiffres la fraction « trois quarts ».",
        ["« quarts » : on partage en 4 ; « trois » : on en prend 3."], f"${fl2(3, 4)}$")
    # fraction comme quotient (8)
    for a, b in [(3, 4), (7, 5), (2, 9)]:
        add("intermediaire", "quotient", f"Complète : ${b} \\times \\square = {a}$.",
            [f"Le nombre cherché est ${a} \\div {b}$, c'est-à-dire la fraction ${fl2(a, b)}$."], f"$\\square = {fl2(a, b)}$")
    for a, b in [(12, 4), (18, 3), (35, 7)]:
        add("application", "quotient", f"Quel nombre entier est égal à ${fl2(a, b)}$ ?",
            [f"${fl2(a, b)} = {a} \\div {b} = {a // b}$."], f"${a // b}$")
    add("intermediaire", "quotient", f"Écris le quotient $11 \\div 6$ sous forme de fraction.",
        ["Le quotient de $a$ par $b$ s'écrit $\\dfrac{a}{b}$."], f"${fl2(11, 6)}$")
    add("approfondissement", "quotient", f"La fraction ${fl2(1, 3)}$ est-elle un nombre décimal ?",
        ["$1 \\div 3 = 0{,}333\\ldots$ : la division ne s'arrête jamais.", "$\\dfrac{1}{3}$ n'est donc pas un nombre décimal."], "non")
    # fractions décimales (8)
    fd = [(3, 10), (27, 100), (9, 1000), (45, 10), (305, 100), (7, 100)]
    for a, b in fd:
        v = Fraction(a, b)
        z = len(str(b)) - 1
        add("application", "fraction-decimale", f"Donne l'écriture décimale de ${fl2(a, nm(b))}$.",
            [f"Le dénominateur ${nm(b)}$ a {pl(z, 'zéro')} : on veut {pl(z, 'chiffre')} après la virgule.",
             f"${fl2(a, nm(b))} = {nm(v, z)}$."], f"${nm(v, z)}$")
    for x, (a, b) in [("0.6", (6, 10)), ("0.08", (8, 100))]:
        add("intermediaire", "fraction-decimale", f"Écris ${nm(Decimal(x))}$ sous forme de fraction décimale.",
            [f"${nm(Decimal(x))}$, c'est {a} {'dixièmes' if b == 10 else 'centièmes'}."], f"${fl2(a, b)}$")
    # fractions égales (8)
    fe = [(1, 2, 4), (2, 3, 5), (3, 4, 3), (1, 5, 6), (5, 6, 2), (3, 7, 4)]
    for a, b, k in fe:
        add("intermediaire", "fractions-egales", f"Complète : ${fl2(a, b)} = \\dfrac{{\\ldots}}{{{b * k}}}$.",
            [f"On est passé de ${b}$ à ${b * k}$ en multipliant par ${k}$.", f"On multiplie aussi le numérateur : ${a} \\times {k} = {a * k}$."],
            f"${fl2(a * k, b * k)}$")
    add("intermediaire", "fractions-egales", f"Simplifie ${fl2(12, 18)}$ en divisant le numérateur et le dénominateur par 6.",
        ["$12 \\div 6 = 2$ et $18 \\div 6 = 3$."], f"${fl2(2, 3)}$")
    add("approfondissement", "fractions-egales", f"Vrai ou faux : ${fl2(1, 2)} = {fl2(2, 3)}$ (on a ajouté 1 en haut et en bas).",
        ["Faux : il faut MULTIPLIER (ou diviser) le haut et le bas par le même nombre, pas ajouter.",
         f"${fl2(1, 2)} = 0{{,}}5$ alors que ${fl2(2, 3)}$ est plus grand que $0{{,}}5$."], "faux")
    # comparer (8)
    for a, c_, b in [(3, 5, 7), (8, 4, 9), (2, 9, 11)]:
        s_ = "<" if a < c_ else ">"
        add("application", "comparer", f"Compare ${fl2(a, b)}$ et ${fl2(c_, b)}$.",
            ["Même dénominateur : on compare les numérateurs.", f"${a} {s_} {c_}$ donc ${fl2(a, b)} {s_} {fl2(c_, b)}$."],
            f"${fl2(a, b)} {s_} {fl2(c_, b)}$")
    for a, b in [(2, 7), (9, 4), (6, 6), (13, 10)]:
        s_ = "<" if a < b else (">" if a > b else "=")
        add("intermediaire", "comparer", f"Compare ${fl2(a, b)}$ à $1$.",
            ["On compare le numérateur et le dénominateur.",
             f"${a} {s_} {b}$, donc ${fl2(a, b)} {s_} 1$."], f"${fl2(a, b)} {s_} 1$")
    add("approfondissement", "comparer",
        f"Range dans l'ordre croissant : ${fl2(7, 8)}$ ; ${fl2(3, 8)}$ ; ${fl2(11, 8)}$ ; $1$.",
        ["$1 = \\dfrac{8}{8}$. On compare les numérateurs : $3 < 7 < 8 < 11$."],
        f"${fl2(3, 8)} < {fl2(7, 8)} < 1 < {fl2(11, 8)}$")
    # fraction d'une quantité (8)
    fq = [(1, 4, 20, "application"), (3, 4, 20, "application"), (2, 5, 35, "intermediaire"), (5, 6, 42, "intermediaire")]
    for a, b, q, d in fq:
        r = q * a // b
        add(d, "fraction-quantite", f"Calcule les ${fl2(a, b)}$ de ${q}$." if a > 1 else f"Calcule ${fl2(a, b)}$ de ${q}$ (le quart de ${q}$).",
            [f"On partage {q} en {b} : ${q} \\div {b} = {q // b}$.", f"On en prend {a} : ${a} \\times {q // b} = {r}$."], f"${r}$")
    pq = [("Dans une classe de 30 élèves, les $\\dfrac{2}{5}$ font du sport en club. Combien d'élèves font du sport en club ?", 2, 5, 30, "élèves"),
          ("Un livre a 120 pages. Léa en a lu les $\\dfrac{3}{4}$. Combien de pages a-t-elle lues ?", 3, 4, 120, "pages"),
          ("Un réservoir de 60 L est rempli aux $\\dfrac{2}{3}$. Combien de litres contient-il ?", 2, 3, 60, "L"),
          ("Un ruban de 90 cm : on en coupe les $\\dfrac{3}{10}$. Quelle longueur coupe-t-on ?", 3, 10, 90, "cm")]
    for e, a, b, q, u in pq:
        r = q * a // b
        add("probleme", "fraction-quantite", e, [f"${q} \\div {b} = {q // b}$, puis ${a} \\times {q // b} = {r}$."], f"${r}$ {u}")
    # demi-droite (4)
    for k, b in [(3, 4), (5, 3), (7, 10), (6, 5)]:
        add("intermediaire", "demi-droite",
            f"Sur une demi-droite graduée, l'unité (de 0 à 1) est partagée en {b} parts égales. Un point est placé à {k} graduations de 0. Quel nombre repère-t-il ?",
            [f"Chaque graduation vaut ${fl2(1, b)}$.", f"{k} graduations : ${fl2(k, b)}$" + (f" (c'est plus que 1, car {k} > {b})." if k > b else ".")],
            f"${fl2(k, b)}$")
    return _fin(E)


# ================================================================ 6e : GESTION DE DONNÉES
def gen_6_gestion_donnees():
    rng = random.Random(6204)
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    def serie(k, lo, hi):
        while True:
            v = [rng.randint(lo, hi) for _ in range(k)]
            if len(set(v)) == k:
                return v

    # lire un tableau (7)
    cats = [("Déchets jetés à la cantine (en kg)", ["pain", "légumes", "viande", "fruits"]),
            ("Livres lus pendant l'été", ["romans", "BD", "mangas", "documentaires"]),
            ("Moyen de transport des élèves", ["à pied", "en bus", "en voiture", "à vélo"]),
            ("Animaux de compagnie des élèves", ["chiens", "chats", "poissons", "lapins"]),
            ("Fruits vendus au marché (en kg)", ["pommes", "poires", "oranges", "bananes"]),
            ("Votes pour la mascotte du collège", ["renard", "hibou", "ours", "dauphin"]),
            ("Sport pratiqué en club", ["football", "danse", "judo", "natation"])]
    for i, (t, cs) in enumerate(cats):
        v = serie(4, 3, 25)
        txt = f"{t} : " + " ; ".join(f"{c} : {x}" for c, x in zip(cs, v)) + "."
        if i < 4:
            j = rng.randrange(4)
            add("application", "lire-tableau", txt + f" Quelle valeur correspond à « {cs[j]} » ?",
                [f"On lit la ligne « {cs[j]} » : ${v[j]}$."], f"${v[j]}$")
        else:
            j = v.index(max(v))
            add("application", "lire-tableau", txt + " Quelle catégorie a la plus grande valeur ?",
                ["On compare les valeurs : " + ", ".join(map(str, v)) + ".", f"La plus grande est ${v[j]}$ : « {cs[j]} »."], cs[j])
    # tableau à double entrée (8)
    for i in range(8):
        g = serie(2, 2, 14)
        f_ = serie(2, 2, 14)
        sp = ["football", "natation"] if i % 2 == 0 else ["cantine", "repas à la maison"]
        if i % 2 == 0:
            txt = (f"Tableau à double entrée. Football : {g[0]} garçons et {f_[0]} filles. Natation : {g[1]} garçons et {f_[1]} filles.")
        else:
            txt = (f"Tableau à double entrée. Cantine : {g[0]} garçons et {f_[0]} filles. Repas à la maison : {g[1]} garçons et {f_[1]} filles.")
        q = i % 4
        if q == 0:
            add("application", "double-entree", txt + f" Combien de filles pour « {sp[1]} » ?",
                [f"On croise la ligne « {sp[1]} » et la colonne « filles » : ${f_[1]}$."], f"${f_[1]}$")
        elif q == 1:
            add("intermediaire", "double-entree", txt + f" Combien d'élèves en tout pour « {sp[0]} » ?",
                [f"${g[0]} + {f_[0]} = {g[0] + f_[0]}$."], f"${g[0] + f_[0]}$")
        elif q == 2:
            add("intermediaire", "double-entree", txt + " Combien de garçons en tout ?",
                [f"${g[0]} + {g[1]} = {g[0] + g[1]}$."], f"${g[0] + g[1]}$")
        else:
            tot = sum(g) + sum(f_)
            add("intermediaire", "double-entree", txt + " Combien d'élèves en tout ?",
                [f"${g[0]} + {f_[0]} + {g[1]} + {f_[1]} = {tot}$."], f"${tot}$")
    # calculs (8)
    for i in range(4):
        v = serie(4, 4, 20)
        noms = ["football", "basket", "danse", "judo"]
        a, b = v.index(max(v)), v.index(min(v))
        add("intermediaire", "calculs", "Sport préféré : " + " ; ".join(f"{n} {x}" for n, x in zip(noms, v)) +
            f". Combien d'élèves de plus pour le sport le plus choisi que pour le moins choisi ?",
            [f"Le plus choisi : {noms[a]} (${v[a]}$). Le moins choisi : {noms[b]} (${v[b]}$).", f"${v[a]} - {v[b]} = {v[a] - v[b]}$."],
            f"${v[a] - v[b]}$")
    for tot, p in [(30, 50), (24, 25), (40, 10), (60, 50)]:
        r = tot * p // 100
        mot = {50: "la moitié", 25: "le quart", 10: "le dixième"}[p]
        add("intermediaire", "calculs", f"Dans une enquête auprès de {tot} élèves, {p} % ont un animal. Combien d'élèves ont un animal ?",
            [f"{p} %, c'est {mot}.", f"${tot} \\div {100 // p} = {r}$."], f"${r}$ élèves")
    # diagramme circulaire (6)
    circ = [(28, "la moitié", 2), (40, "le quart", 4), (36, "le tiers", 3), (60, "la moitié", 2), (32, "le quart", 4), (45, "le tiers", 3)]
    for tot, part, d_ in circ:
        add("intermediaire" if d_ != 3 else "approfondissement", "diagramme-circulaire",
            f"Un diagramme circulaire représente les réponses de {tot} élèves. La part « cantine » occupe {part} du disque. Combien d'élèves mangent à la cantine ?",
            ["Le disque entier représente le total.", f"{_cap(part)} de {tot} : ${tot} \\div {d_} = {tot // d_}$."], f"${tot // d_}$ élèves")
    # courbe (7)
    for i in range(7):
        q = i % 3
        while True:
            v = [rng.randint(5, 14)]
            for _ in range(4):
                v.append(v[-1] + rng.choice([2, 3, 4, 5, -2, -3]))
            if min(v) < 1:
                continue
            if q == 0 and v.count(max(v)) == 1:
                break
            if q == 1 and v[4] != v[0]:
                break
            if q == 2 and any(v[k + 1] < v[k] for k in range(4)):
                break
        h = ["8 h", "10 h", "12 h", "14 h", "16 h"]
        txt = "Une courbe donne le nombre de clients présents dans une boutique : " + " ; ".join(f"{x} : {t}" for x, t in zip(h, v)) + "."
        if q == 0:
            j = v.index(max(v))
            add("application", "courbe", txt + " Quel est le nombre maximal de clients et à quelle heure ?",
                ["Le point le plus haut de la courbe donne le maximum."], f"${max(v)}$ clients à {h[j]}")
        elif q == 1:
            if v[4] > v[0]:
                add("intermediaire", "courbe", txt + " De combien le nombre de clients a-t-il varié entre 8 h et 16 h ?",
                    [f"${v[4]} - {v[0]} = {v[4] - v[0]}$ : il a augmenté."], f"il a augmenté de ${v[4] - v[0]}$ clients")
            else:
                add("intermediaire", "courbe", txt + " De combien le nombre de clients a-t-il varié entre 8 h et 16 h ?",
                    [f"${v[0]} - {v[4]} = {v[0] - v[4]}$ : il a baissé."], f"il a baissé de ${v[0] - v[4]}$ clients")
        else:
            desc = [f"de {h[k]} à {h[k + 1]}" for k in range(4) if v[k + 1] < v[k]]
            add("intermediaire", "courbe", txt + " Sur quelle(s) période(s) la courbe descend-elle ?",
                ["La courbe descend quand le nombre de clients baisse d'un relevé au suivant."], " et ".join(desc))
    # filtrer (7)
    for i in range(7):
        ages = [rng.randint(10, 13) for _ in range(8)]
        prenoms = PRENOMS[i:i + 8]
        seuil = rng.choice([11, 12])
        n = sum(1 for a in ages if a > seuil)
        liste = ", ".join(f"{p} ({a} ans)" for p, a in zip(prenoms, ages))
        add("intermediaire" if i < 4 else "approfondissement", "filtrer",
            f"Liste des élèves : {liste}. Combien d'élèves ont plus de {seuil} ans (strictement) ?",
            [f"On ne garde que les lignes où l'âge dépasse {seuil} : " + (", ".join(p for p, a in zip(prenoms, ages) if a > seuil) or "aucune") + "."],
            f"${n}$")
    # choisir une représentation (7)
    rp = [("comparer le nombre d'élèves qui préfèrent chaque sport", "un diagramme en barres"),
          ("montrer la part de chaque moyen de transport dans le total des élèves", "un diagramme circulaire"),
          ("montrer l'évolution de la température heure par heure", "une courbe"),
          ("croiser deux informations : le sport préféré et garçon ou fille", "un tableau à double entrée"),
          ("suivre l'évolution de la taille d'une plante semaine après semaine", "une courbe"),
          ("comparer les quantités de déchets jetés chaque jour de la semaine", "un diagramme en barres"),
          ("montrer quelle part du budget d'un club va à chaque dépense", "un diagramme circulaire")]
    for q, r in rp:
        add("application", "choisir-representation", f"Quelle représentation choisir pour {q} ?",
            ["Barres → comparer ; circulaire → parts du total ; courbe → évolution ; double entrée → croiser deux informations."], r)
    return _fin(E)


# ================================================================ 6e : INITIATION À LA PENSÉE ALGÉBRIQUE
def gen_6_algebre():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # régularité (8)
    for u0, p in [(4, 3), (5, 6), (12, 7), (50, -5), (3, 9)]:
        s_ = [u0 + k * p for k in range(4)]
        add("application", "regularite", "Quel est le nombre suivant dans la suite " + " ; ".join(map(str, s_)) + " ; … ?",
            [f"Régularité : on {'ajoute' if p > 0 else 'enlève'} toujours ${abs(p)}$.", f"${s_[-1]} {'+' if p > 0 else '-'} {abs(p)} = {s_[-1] + p}$."],
            f"${s_[-1] + p}$")
    for u0, m in [(2, 3), (1, 2), (5, 2)]:
        s_ = [u0 * m**k for k in range(4)]
        add("intermediaire", "regularite", "Quel est le nombre suivant dans la suite " + " ; ".join(map(str, s_)) + " ; … ? Quelle est la régularité ?",
            [f"Les écarts changent ({s_[1] - s_[0]}, {s_[2] - s_[1]}…) : ce n'est pas une addition.",
             f"On multiplie toujours par ${m}$ : ${s_[-1]} \\times {m} = {s_[-1] * m}$."], f"${s_[-1] * m}$ (on multiplie par ${m}$)")
    # structure (8)
    for a, b, n in [(3, 1, 10), (3, 2, 10), (4, 1, 20), (5, 3, 100), (2, 5, 50), (6, 0, 15), (4, 3, 100), (7, 2, 10)]:
        s_ = [a * k + b for k in (1, 2, 3, 4)]
        st = (f"le {'triple' if a == 3 else 'double'} du numéro de l'étape" if a in (2, 3) else f"{a} fois le numéro de l'étape") + (f", plus {b}" if b else "")
        add("intermediaire" if n <= 20 else "approfondissement", "structure",
            "Un motif évolutif donne : " + ", ".join(f"étape {k} → {x}" for k, x in zip((1, 2, 3, 4), s_)) + f". Combien à l'étape {n} ?",
            [f"Régularité : on ajoute ${a}$ à chaque étape.",
             f"Structure : le résultat est {st} (étape 1 : ${a} \\times 1" + (f" + {b}" if b else "") + f" = {a + b}$).",
             f"Étape {n} : ${a} \\times {n}" + (f" + {b}" if b else "") + f" = {a * n + b}$."], f"${a * n + b}$")
    # case inconnue (8)
    ci = [("+", 4, 10), ("+", 27, 63), ("-", 7, 15), ("-", 18, 32), ("x", 3, 27), ("x", 8, 96), ("/", 4, 9), ("/", 6, 12)]
    for op, a, r in ci:
        if op == "+":
            e, x, c = f"\\square + {a} = {r}", r - a, f"On enlève {a} : ${r} - {a} = {r - a}$."
        elif op == "-":
            e, x, c = f"\\square - {a} = {r}", r + a, f"On ajoute {a} : ${r} + {a} = {r + a}$."
        elif op == "x":
            e, x, c = f"{a} \\times \\square = {r}", r // a, f"On divise par {a} : ${r} \\div {a} = {r // a}$."
        else:
            e, x, c = f"\\square \\div {a} = {r}", r * a, f"On multiplie par {a} : ${r} \\times {a} = {r * a}$."
        add("application" if op in "+-" else "intermediaire", "case-inconnue", f"Quel nombre faut-il mettre dans la case : ${e}$ ?",
            [c, f"Vérification : ${e.replace(chr(92) + 'square', str(x))}$."], f"${x}$")
    # schéma en barres (9)
    for k, tot, n1, n2 in [(3, 48, "Tom", "Léa"), (2, 39, "Hugo", "Nora"), (4, 75, "Sami", "Jade"), (5, 66, "Adam", "Inès")]:
        part = tot // (k + 1)
        add("intermediaire", "schema-barres",
            f"{n2} a {k} fois plus de billes {que(n1)}. Ensemble, ils en ont {tot}. Combien chacun en a-t-il ?",
            [f"Schéma : {n1} = 1 part, {n2} = {k} parts, soit ${k + 1}$ parts égales en tout.",
             f"Une part : ${tot} \\div {k + 1} = {part}$.", f"{n1} : ${part}$ ; {n2} : ${k} \\times {part} = {k * part}$."],
            f"{n1} : ${part}$, {n2} : ${k * part}$")
    for ecart, tot, n1, n2 in [(6, 40, "Emma", "Lucas"), (12, 50, "Rayan", "Chloé"), (9, 35, "Zoé", "Théo")]:
        petit = (tot - ecart) // 2
        add("approfondissement", "schema-barres",
            f"{n2} a {ecart} € de plus {que(n1)}. Ensemble, ils ont {tot} €. Combien chacun a-t-il ?",
            [f"On enlève l'écart : ${tot} - {ecart} = {tot - ecart}$ € : ce sont deux parts égales.",
             f"Une part : ${tot - ecart} \\div 2 = {petit}$ €. Donc {n1} a ${petit}$ € et {n2} ${petit} + {ecart} = {petit + ecart}$ €."],
            f"{n1} : ${petit}$ €, {n2} : ${petit + ecart}$ €")
    for L, k in [(48, 4), (126, 6)]:
        add("application", "schema-barres", f"Un ruban de {L} cm est partagé en {k} morceaux égaux. Combien mesure un morceau ?",
            [f"Le schéma montre {k} parts égales pour {L} cm.", f"${L} \\div {k} = {L // k}$ cm."], f"${L // k}$ cm")
    # remonter (8)
    rm = [("x", 2, "+", 3, 17), ("x", 3, "+", 5, 26), ("x", 4, "-", 6, 30), ("x", 5, "+", 1, 46), ("x", 10, "-", 4, 66),
          ("+", 3, "x", 2, 22), ("+", 7, "x", 3, 45), ("-", 2, "x", 4, 28)]
    for o1, a, o2, b, r in rm:
        sym = {"x": "\\times", "+": "+", "-": "-"}
        mots = {"x": "je le multiplie par", "+": "j'ajoute", "-": "j'enlève"}
        mots2 = {"x": "je multiplie par", "+": "j'ajoute", "-": "j'enlève"}
        inv = {"x": ("\\div", lambda u, v: u // v), "+": ("-", lambda u, v: u - v), "-": ("+", lambda u, v: u + v)}
        s1, f1 = inv[o2]
        y = f1(r, b)
        s0, f0 = inv[o1]
        x = f0(y, a)
        e = f"Je pense à un nombre, {mots[o1] if o1 == 'x' else mots2[o1]} {a}, puis {mots2[o2]} {b} : j'obtiens {r}. Quel est le nombre de départ ?"
        if o1 != "x":
            e = f"Je pense à un nombre, {'je lui ajoute' if o1 == '+' else 'je lui enlève'} {a}, puis {mots2[o2]} {b} : j'obtiens {r}. Quel est le nombre de départ ?"
        add("intermediaire" if o1 == "x" else "approfondissement", "remonter", e,
            [f"On remonte à l'envers, dans l'ordre inverse : ${r} {s1} {b} = {y}$, puis ${y} {s0} {a} = {x}$.",
             f"Vérification : $({x} {sym[o1]} {a}) {sym[o2]} {b} = {r}$." if o1 != "x" else f"Vérification : ${x} \\times {a} {sym[o2]} {b} = {r}$."],
            f"${x}$")
    # allumettes (5)
    for n in (5, 12):
        add("probleme", "allumettes",
            f"On aligne des carrés faits d'allumettes : 1 carré → 4 allumettes, 2 carrés → 7, 3 carrés → 10. Combien d'allumettes pour {n} carrés ?",
            ["On ajoute 3 allumettes à chaque nouveau carré.", "Structure : le triple du nombre de carrés, plus 1.", f"$3 \\times {n} + 1 = {3 * n + 1}$."],
            f"${3 * n + 1}$ allumettes")
    add("probleme", "allumettes",
        "Avec le même motif (1 carré → 4 allumettes, 2 carrés → 7, 3 carrés → 10), combien de carrés peut-on faire avec exactement 46 allumettes ?",
        ["Il faut le triple du nombre de carrés, plus 1 : on remonte.", "$46 - 1 = 45$, puis $45 \\div 3 = 15$."], "$15$ carrés")
    for n in (6, 20):
        add("probleme", "allumettes",
            f"On aligne des triangles d'allumettes tête-bêche : 1 triangle → 3 allumettes, 2 triangles → 5, 3 triangles → 7. Combien d'allumettes pour {n} triangles ?",
            ["On ajoute 2 allumettes à chaque triangle.", "Structure : le double du nombre de triangles, plus 1.", f"$2 \\times {n} + 1 = {2 * n + 1}$."],
            f"${2 * n + 1}$ allumettes")
    # pièges (4)
    add("intermediaire", "pieges", "Vrai ou faux : dans la suite 2 ; 6 ; 18 ; 54, la régularité est « on ajoute 4 ».",
        ["Faux : $6 - 2 = 4$ mais $18 - 6 = 12$. Les écarts changent.", "La régularité est « on multiplie par 3 »."], "faux")
    add("intermediaire", "pieges", "Pour annuler « multiplier par 2, puis ajouter 3 », faut-il d'abord diviser par 2 ou enlever 3 ?",
        ["On défait dans l'ordre inverse : la dernière opération faite est annulée en premier.", "On enlève d'abord 3, puis on divise par 2."], "enlever 3 d'abord")
    add("approfondissement", "pieges", "Léa a 3 fois plus de billes que Tom ; ensemble ils en ont 48. Un élève répond « 48 ÷ 3 = 16 billes pour Tom ». A-t-il raison ?",
        ["Non : il y a 1 part pour Tom et 3 parts pour Léa, soit 4 parts.", "$48 \\div 4 = 12$ : Tom a 12 billes."], "non, Tom a $12$ billes")
    add("application", "pieges", "En 6e, comment peut-on noter un nombre inconnu ?",
        ["Avec un mot, un dessin ou une case vide $\\square$ : les lettres comme $x$ arrivent au cycle 4."], "avec un mot, un dessin ou une case")
    return _fin(E)


# ================================================================ 6e : LONGUEURS, AIRES, VOLUMES
def gen_6_longueurs():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # conversions de longueurs (7)
    cv = [("3.5", "km", "m", 1000), ("2.4", "m", "cm", 100), ("85", "mm", "cm", Fraction(1, 10)), ("150", "cm", "m", Fraction(1, 100)),
          ("7", "dm", "mm", 100), ("1250", "m", "km", Fraction(1, 1000)), ("0.6", "m", "mm", 1000)]
    for v, u1, u2, k in cv:
        x = Decimal(v)
        r = x * _dec(k)
        op = f"\\times {nm(k)}" if k >= 1 else f"\\div {nm(1 / Fraction(k))}"
        add("application" if k >= 1 else "intermediaire", "conversions-longueurs", f"Convertis {nb(x)} {u1} en {u2}.",
            [f"$1$ {u1} $= {nm(k)}$ {u2}." if k >= 1 else f"$1$ {u2} $= {nm(1 / Fraction(k))}$ {u1}.",
             f"${nm(x)} {op} = {nm(r)}$."], f"${nm(r)}$ {u2}")
    # périmètres (8)
    for L, l in [(7, 4), ("8.5", 3), (12, "6.5")]:
        L_, l_ = _dec(L), _dec(l)
        add("application", "perimetre", f"Calcule le périmètre d'un rectangle de {nb(L_)} cm sur {nb(l_)} cm.",
            [f"$P = (L + l) \\times 2 = ({nm(L_)} + {nm(l_)}) \\times 2 = {nm(L_ + l_)} \\times 2 = {nm(2 * (L_ + l_))}$ cm."], f"${nm(2 * (L_ + l_))}$ cm")
    for c in (9, "4.5"):
        c_ = _dec(c)
        add("application", "perimetre", f"Calcule le périmètre d'un carré de {nb(c_)} cm de côté.",
            [f"$P = c \\times 4 = {nm(c_)} \\times 4 = {nm(4 * c_)}$ cm."], f"${nm(4 * c_)}$ cm")
    add("application", "perimetre", "Calcule le périmètre d'un triangle dont les côtés mesurent 5 cm, 6,5 cm et 8 cm.",
        ["On additionne les trois côtés.", "$5 + 6{,}5 + 8 = 19{,}5$ cm."], "$19{,}5$ cm")
    add("intermediaire", "perimetre", "Un rectangle mesure 2 m sur 30 cm. Calcule son périmètre en cm.",
        ["Même unité d'abord : $2$ m $= 200$ cm.", "$P = (200 + 30) \\times 2 = 460$ cm."], "$460$ cm")
    add("intermediaire", "perimetre", "Un carré a un périmètre de 36 cm. Combien mesure son côté ?",
        ["$P = c \\times 4$, donc $c = 36 \\div 4 = 9$ cm."], "$9$ cm")
    # périmètre du disque (6)
    for D in (4, 8, 20):
        p = Decimal("3.14") * D
        add("intermediaire", "perimetre-disque", f"Calcule le périmètre d'un disque de {D} cm de diamètre (prends $\\pi \\approx 3{{,}}14$).",
            [f"$P = \\pi \\times D \\approx 3{{,}}14 \\times {D} = {nm(p)}$ cm."], f"environ ${nm(p)}$ cm")
    for r in (3, 6, 15):
        p = Decimal("3.14") * 2 * r
        add("approfondissement", "perimetre-disque", f"Calcule le périmètre d'un disque de {r} cm de rayon (prends $\\pi \\approx 3{{,}}14$).",
            [f"Diamètre : $D = 2 \\times {r} = {2 * r}$ cm.", f"$P = \\pi \\times D \\approx 3{{,}}14 \\times {2 * r} = {nm(p)}$ cm."], f"environ ${nm(p)}$ cm")
    # conversions d'aires (6)
    ca = [("3", "m²", "dm²", 100), ("5", "dm²", "cm²", 100), ("2", "m²", "cm²", 10000), ("450", "cm²", "dm²", Fraction(1, 100)),
          ("700", "dm²", "m²", Fraction(1, 100)), ("1.5", "m²", "dm²", 100)]
    for v, u1, u2, k in ca:
        x = Decimal(v)
        r = x * _dec(k)
        op = f"\\times {nm(k)}" if k >= 1 else f"\\div {nm(1 / Fraction(k))}"
        add("intermediaire", "conversions-aires", f"Convertis {nb(x)} {u1} en {u2}.",
            ["Les aires se convertissent de 100 en 100 : $1$ m² $= 100$ dm² et $1$ dm² $= 100$ cm².", f"${nm(x)} {op} = {nm(r)}$."],
            f"${nm(r)}$ {u2}")
    # aires (8)
    for L, l in [(8, 5), ("7.5", 4), (12, 9)]:
        L_, l_ = _dec(L), _dec(l)
        add("application", "aire", f"Calcule l'aire d'un rectangle de {nb(L_)} cm sur {nb(l_)} cm.",
            [f"$A = L \\times l = {nm(L_)} \\times {nm(l_)} = {nm(L_ * l_)}$ cm²."], f"${nm(L_ * l_)}$ cm²")
    for c in (7, 11):
        add("application", "aire", f"Calcule l'aire d'un carré de {c} cm de côté.", [f"$A = c \\times c = {c} \\times {c} = {c * c}$ cm²."], f"${c * c}$ cm²")
    for (L1, l1, L2, l2) in [(10, 4, 3, 3), (8, 6, 4, 2)]:
        a = L1 * l1 + L2 * l2
        add("approfondissement", "aire",
            f"Une figure est formée d'un rectangle de {L1} cm sur {l1} cm, collé à un carré de {L2} cm de côté (sans se chevaucher). Calcule l'aire totale." if L2 == l2 else
            f"Une figure est formée d'un rectangle de {L1} cm sur {l1} cm, collé à un rectangle de {L2} cm sur {l2} cm (sans se chevaucher). Calcule l'aire totale.",
            [f"On découpe en deux : ${L1} \\times {l1} = {L1 * l1}$ cm² et ${L2} \\times {l2} = {L2 * l2}$ cm².", f"Total : ${L1 * l1} + {L2 * l2} = {a}$ cm²."],
            f"${a}$ cm²")
    add("intermediaire", "aire", "Un rectangle mesure 2 m sur 30 cm. Calcule son aire en cm².",
        ["Même unité : $2$ m $= 200$ cm.", "$A = 200 \\times 30 = 6\\,000$ cm²."], "$6\\,000$ cm²")
    # volumes (7)
    for a, b, c in [(4, 3, 2), (5, 5, 3), (6, 2, 4), (10, 4, 3)]:
        add("application" if a * b * c < 60 else "intermediaire", "volume",
            f"Un pavé est formé de cubes de 1 cm d'arête : {a} cubes de long, {b} de large et {c} de haut. Quel est son volume ?",
            [f"Une couche : ${a} \\times {b} = {a * b}$ cubes.", f"{c} couches : ${a * b} \\times {c} = {a * b * c}$ cubes, soit ${a * b * c}$ cm³."],
            f"${a * b * c}$ cm³")
    add("intermediaire", "volume", "Un cube de 3 cm d'arête est rempli de petits cubes de 1 cm d'arête. Combien en contient-il ?",
        ["$3 \\times 3 \\times 3 = 27$."], "$27$ petits cubes, soit $27$ cm³")
    add("approfondissement", "volume",
        "Solide A : 4 cubes de long, 3 de large, 2 de haut. Solide B : 5 cubes de long, 2 de large, 2 de haut (cubes de 1 cm³). Lequel a le plus grand volume ?",
        ["A : $4 \\times 3 \\times 2 = 24$ cm³. B : $5 \\times 2 \\times 2 = 20$ cm³.", "$24 > 20$."], "le solide A ($24$ cm³ contre $20$ cm³)")
    add("intermediaire", "volume", "Vrai ou faux : un volume se mesure en cm².",
        ["Faux : cm² est une unité d'aire (des carrés). Un volume se compte en cubes : cm³."], "faux")
    # problèmes (8)
    add("probleme", "probleme-mesures", "Un jardin rectangulaire mesure 15 m sur 8 m. Quelle longueur de grillage faut-il pour en faire le tour ?",
        ["On cherche le périmètre.", "$(15 + 8) \\times 2 = 46$ m."], "$46$ m")
    add("probleme", "probleme-mesures", "On veut carreler une salle de bain de 3 m sur 2 m. Quelle est l'aire à carreler ?",
        ["On cherche l'aire.", "$3 \\times 2 = 6$ m²."], "$6$ m²")
    add("probleme", "probleme-mesures", "Un carreau carré mesure 1 dm de côté. Combien en faut-il pour couvrir un sol de 3 m sur 2 m ?",
        ["Aire : $6$ m² $= 600$ dm².", "Chaque carreau couvre $1$ dm² : il en faut $600$."], "$600$ carreaux")
    add("probleme", "probleme-mesures", "Un tableau de 60 cm sur 40 cm est entouré d'une baguette. Quelle longueur de baguette faut-il, en m ?",
        ["$(60 + 40) \\times 2 = 200$ cm.", "$200$ cm $= 2$ m."], "$2$ m")
    p5 = Decimal("3.14") * 60 * 10
    add("probleme", "probleme-mesures", "Une roue de vélo a un diamètre de 60 cm. Quelle distance parcourt le vélo quand la roue fait 10 tours ($\\pi \\approx 3{,}14$) ?",
        [f"Un tour : $3{{,}}14 \\times 60 = {nm(Decimal('3.14') * 60)}$ cm.", f"10 tours : ${nm(Decimal('3.14') * 60)} \\times 10 = {nm(p5)}$ cm, soit environ ${nm(p5 / 100)}$ m."],
        f"environ ${nm(p5)}$ cm (${nm(p5 / 100)}$ m)")
    add("probleme", "probleme-mesures", "Un terrain carré a un côté de 25 m. Calcule son périmètre et son aire.",
        ["Périmètre : $25 \\times 4 = 100$ m.", "Aire : $25 \\times 25 = 625$ m²."], "$100$ m et $625$ m²")
    add("probleme", "probleme-mesures", "Une boîte est remplie de 3 couches de 12 sucres en forme de cube de 1 cm d'arête. Quel est le volume de sucre ?",
        ["$3 \\times 12 = 36$ cubes de 1 cm³."], "$36$ cm³")
    add("probleme", "probleme-mesures", "Un rectangle a une aire de 48 cm² et une longueur de 8 cm. Quelle est sa largeur ?",
        ["$A = L \\times l$, donc $l = 48 \\div 8 = 6$ cm."], "$6$ cm")
    return _fin(E)


# ================================================================ 6e : NOMBRES ENTIERS ET DÉCIMAUX
def gen_6_nombres():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    RG = {-1: "dixièmes", -2: "centièmes", -3: "millièmes", 0: "unités", 1: "dizaines", 2: "centaines", 3: "milliers"}
    # rangs (7)
    for x, k in [("34.507", -2), ("8.193", -3), ("1206.45", 2), ("0.758", -1), ("52.064", -3), ("3071.9", 1), ("6.28", -2)]:
        d_ = Decimal(x)
        q = (d_ * Decimal(10) ** (-k)).to_integral_value(rounding=ROUND_FLOOR) % 10
        add("application", "rangs", f"Dans ${nm(d_)}$, quel est le chiffre des {RG[k]} ?",
            ["Après la virgule : dixièmes, centièmes, millièmes. Avant : unités, dizaines, centaines…",
             f"Le chiffre des {RG[k]} est ${q}$."], f"${q}$")
    # écritures (7)
    for x in ["4.107", "12.35", "0.09"]:
        d_ = Decimal(x)
        z = _ndec(d_)
        n = int(d_ * 10**z)
        add("intermediaire", "ecritures", f"Écris ${nm(d_)}$ sous forme d'une fraction décimale.",
            [f"Il y a {pl(z, 'chiffre')} après la virgule : dénominateur ${nm(10**z)}$.",
             f"${nm(d_)} = {fl2(nm(n), nm(10**z))}$."], f"${fl2(nm(n), nm(10**z))}$")
    for e_, v in [(r"4 + \dfrac{1}{10} + \dfrac{7}{1\,000}", "4.107"), (r"25 + \dfrac{3}{100}", "25.03"), (r"\dfrac{6}{10} + \dfrac{2}{100}", "0.62")]:
        add("intermediaire", "ecritures", f"Écris ${e_}$ sous forme d'un nombre à virgule.",
            ["Chaque fraction décimale donne un chiffre à son rang (dixièmes, centièmes, millièmes) ; on met 0 aux rangs vides."],
            f"${nm(Decimal(v))}$")
    add("approfondissement", "ecritures", r"Écris $\dfrac{3\,045}{100}$ sous forme d'un nombre mixte (un entier + une fraction inférieure à 1).",
        [r"$3\,045 = 30 \times 100 + 45$.", r"$\dfrac{3\,045}{100} = 30 + \dfrac{45}{100}$."], r"$30 + \dfrac{45}{100}$")
    # × ÷ 10, 100, 1000 (8)
    md = [("3.72", "x", 100), ("0.045", "x", 1000), ("12.6", "x", 10), ("7", "x", 1000), ("45.6", "/", 100), ("3.2", "/", 1000), ("508", "/", 10), ("0.7", "/", 100)]
    for x, op, p in md:
        d_ = Decimal(x)
        r = d_ * p if op == "x" else d_ / p
        z = len(str(p)) - 1
        sy = "\\times" if op == "x" else "\\div"
        add("application" if op == "x" else "intermediaire", "multiplier-diviser",
            f"Calcule : ${nm(d_)} {sy} {nm(p)}$.",
            [f"Chaque chiffre prend une valeur ${nm(p)}$ fois plus {'grande' if op == 'x' else 'petite'} : il se décale de {pl(z, 'rang')} vers la {'gauche' if op == 'x' else 'droite'} (la virgule semble aller vers la {'droite' if op == 'x' else 'gauche'}).",
             f"${nm(d_)} {sy} {nm(p)} = {nm(r)}$."], f"${nm(r)}$")
    # comparer (7)
    for a, b in [("3.5", "3.45"), ("2.7", "2.70"), ("0.08", "0.1"), ("12.305", "12.35"), ("5.009", "5.01")]:
        da, db = Decimal(a), Decimal(b)
        s_ = "<" if da < db else (">" if da > db else "=")
        k = max(_ndec(da), _ndec(db), len(a.split(".")[1]), len(b.split(".")[1]))
        aa = a.replace(".", "{,}")
        bb = b.replace(".", "{,}")
        add("application" if s_ != "=" else "intermediaire", "comparer", f"Compare ${aa}$ et ${bb}$.",
            [f"On écrit les deux nombres avec autant de chiffres après la virgule : ${nm(da, k)}$ et ${nm(db, k)}$.",
             f"Donc ${aa} {s_} {bb}$."], f"${aa} {s_} {bb}$")
    L = ["2.3", "2.03", "2.33", "2.303"]
    R = sorted(L, key=Decimal)
    add("intermediaire", "comparer", "Range dans l'ordre croissant : " + " ; ".join(f"${nm(Decimal(x))}$" for x in L) + ".",
        ["On complète avec des zéros : " + ", ".join(f"${nm(Decimal(x), 3)}$" for x in L) + "."], "$" + " < ".join(nm(Decimal(x)) for x in R) + "$")
    L = ["0.5", "0.45", "0.405", "0.54"]
    R = sorted(L, key=Decimal, reverse=True)
    add("approfondissement", "comparer", "Range dans l'ordre décroissant : " + " ; ".join(f"${nm(Decimal(x))}$" for x in L) + ".",
        ["On complète avec des zéros : " + ", ".join(f"${nm(Decimal(x), 3)}$" for x in L) + "."], "$" + " > ".join(nm(Decimal(x)) for x in R) + "$")
    # encadrer / intercaler (7)
    for x, p in [("3.14", 1), ("7.86", 1), ("12.457", Decimal("0.1")), ("0.639", Decimal("0.1")), ("5.0381", Decimal("0.01"))]:
        d_ = Decimal(x)
        lo = (d_ / _dec(p)).to_integral_value(rounding=ROUND_FLOOR) * _dec(p)
        hi = lo + _dec(p)
        nom = {1: "à l'unité", Decimal("0.1"): "au dixième", Decimal("0.01"): "au centième"}[p]
        add("intermediaire", "encadrer-intercaler", f"Encadre ${nm(d_)}$ {nom}.",
            [f"On cherche les deux nombres consécutifs {nom} qui entourent ${nm(d_)}$."], f"${nm(lo)} < {nm(d_)} < {nm(hi)}$")
    for a, b, m in [("2.3", "2.4", "2.35"), ("0.7", "0.71", "0.705")]:
        add("approfondissement", "encadrer-intercaler", f"Donne un nombre compris entre ${nm(Decimal(a))}$ et ${nm(Decimal(b))}$.",
            [f"On ajoute un chiffre : ${nm(Decimal(a), _ndec(Decimal(m)))}$ et ${nm(Decimal(b), _ndec(Decimal(m)))}$ ; ${nm(Decimal(m))}$ est entre les deux."],
            f"par exemple ${nm(Decimal(m))}$")
    # arrondir (7)
    for x, nd in [("3.146", 0), ("3.146", 1), ("3.146", 2), ("12.75", 1), ("8.5", 0), ("0.996", 2), ("27.349", 1)]:
        d_ = Decimal(x)
        r = d_.quantize(Decimal(1).scaleb(-nd), ROUND_HALF_UP)
        nom = ["à l'unité", "au dixième", "au centième"][nd]
        suiv = ["dixièmes", "centièmes", "millièmes"][nd]
        ch = int((d_ * 10 ** (nd + 1)).to_integral_value(rounding=ROUND_FLOOR)) % 10
        add("intermediaire" if nd else "application", "arrondir", f"Arrondis ${nm(d_)}$ {nom}.",
            [f"On regarde le chiffre des {suiv} : c'est ${ch}$, {'supérieur ou égal à 5 : on arrondit au-dessus' if ch >= 5 else 'inférieur à 5 : on arrondit en dessous (on garde ' + ['le chiffre des unités', 'le chiffre des dixièmes', 'le chiffre des centièmes'][nd] + ' sans le changer)'}.",
             f"${nm(d_)} \\approx {nm(r, nd)}$" + (f", soit ${nm(r)}$." if nm(r) != nm(r, nd) else ".")], f"${nm(r, nd)}$")
    # pourcentage (7)
    for p in (35, 7, 50, 85):
        v = Decimal(p) / 100
        add("intermediaire", "pourcentage", f"Écris {p} % sous forme d'une fraction puis d'un nombre décimal.",
            [f"${p}\\,\\% = \\dfrac{{{p}}}{{100}}$.", f"$\\dfrac{{{p}}}{{100}} = {p} \\div 100 = {nm(v)}$."], f"${fl2(p, 100)} = {nm(v)}$")
    for x in ("0.25", "0.08", "0.6"):
        p = Decimal(x) * 100
        add("intermediaire", "pourcentage", f"Écris ${nm(Decimal(x))}$ sous forme d'un pourcentage.",
            [f"${nm(Decimal(x))} = \\dfrac{{{nm(p)}}}{{100}}$."], f"${nm(p)}\\,\\%$")
    return _fin(E)


TIMES = "\\times"
DIV = "\\div"


# ================================================================ 6e : PENSÉE INFORMATIQUE
def _exec_calc(x, ops):
    """Simule un programme de calcul. ops = [("+", 3), ("x", 2), ("-", 1)]"""
    etapes = [x]
    for o, v in ops:
        if o == "+":
            x = x + v
        elif o == "-":
            x = x - v
        elif o == "x":
            x = x * v
        else:
            assert x % v == 0
            x = x // v
        etapes.append(x)
    return x, etapes


_MOTS_OP = {"+": "ajouter {v}", "-": "soustraire {v}", "x": "multiplier par {v}", "/": "diviser par {v}"}
MOTS_VAR = {"+": "ajouter {v} à nombre", "-": "enlever {v} à nombre", "x": "multiplier nombre par {v}"}
_SYM_OP = {"+": "+", "-": "-", "x": "\\times", "/": "\\div"}


def _prog_txt(x, ops):
    return f"« choisir {x} », " + ", ".join(f"« {_MOTS_OP[o].format(v=v)} »" for o, v in ops) + ", « afficher »"


def _deroule(etapes, ops):
    s_ = f"${etapes[0]}"
    for (o, v), y in zip(ops, etapes[1:]):
        s_ += f" \\xrightarrow{{{_SYM_OP[o]} {v}}} {y}"
    return s_ + "$"


def _robot(instr):
    """Simule un robot sur quadrillage. Départ (0,0), regarde vers le haut."""
    dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # haut, droite, bas, gauche
    noms = ["vers le haut", "vers la droite", "vers le bas", "vers la gauche"]
    x = y = 0
    d = 0
    for ins in instr:
        if ins[0] == "A":
            x += dirs[d][0] * ins[1]
            y += dirs[d][1] * ins[1]
        elif ins[0] == "D":
            d = (d + 1) % 4
        elif ins[0] == "G":
            d = (d - 1) % 4
        else:  # demi-tour
            d = (d + 2) % 4
    return x, y, noms[d]


def _robot_txt(instr):
    t = []
    for ins in instr:
        if ins[0] == "A":
            t.append("avancer d'une case" if ins[1] == 1 else f"avancer de {ins[1]} cases")
        elif ins[0] == "D":
            t.append("tourner à droite")
        elif ins[0] == "G":
            t.append("tourner à gauche")
        else:
            t.append("faire demi-tour")
    return " ; ".join(t)


def _pos_txt(x, y):
    p = []
    if x:
        p.append(f"{pl(abs(x), 'case')} {'à droite' if x > 0 else 'à gauche'}")
    if y:
        p.append(f"{pl(abs(y), 'case')} {'au-dessus' if y > 0 else 'au-dessous'}")
    if not p:
        return "sur la case de départ"
    return " et ".join(p) + " de la case de départ"


def gen_6_pensee_info():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # programme de calcul (9)
    pc = [(4, [("+", 6), ("x", 2)]), (3, [("x", 5), ("+", 2)]), (7, [("-", 2), ("x", 3)]), (10, [("/", 2), ("+", 9)]),
          (5, [("x", 4), ("-", 3), ("/", 1)][:2]), (8, [("+", 4), ("/", 3), ("x", 5)]), (6, [("x", 6), ("-", 11), ("+", 4)]),
          (12, [("/", 4), ("x", 7), ("-", 1)]), (9, [("-", 5), ("x", 10), ("+", 25)])]
    for i, (x, ops) in enumerate(pc):
        r, et = _exec_calc(x, ops)
        add("application" if len(ops) == 2 else "intermediaire", "programme-calcul",
            f"Exécute ce programme : {_prog_txt(x, ops)}. Quel nombre est affiché ?",
            ["On exécute les instructions une par une, de haut en bas, chacune sur le résultat de la précédente.", _deroule(et, ops)],
            f"${r}$")
    # ordre (6)
    od = [(3, ("+", 2), ("x", 5)), (4, ("x", 3), ("-", 2)), (6, ("+", 4), ("x", 2)), (10, ("-", 4), ("x", 3)),
          (5, ("x", 2), ("+", 7)), (2, ("+", 8), ("x", 4))]
    for x, o1, o2 in od:
        ra, ea = _exec_calc(x, [o1, o2])
        rb, eb = _exec_calc(x, [o2, o1])
        add("intermediaire", "ordre",
            f"Programme A : {_prog_txt(x, [o1, o2])}. Programme B : {_prog_txt(x, [o2, o1])}. Quels nombres affichent-ils ?",
            ["Mêmes instructions, ordre différent : on déroule chaque programme séparément.",
             "A : " + _deroule(ea, [o1, o2]) + ".", "B : " + _deroule(eb, [o2, o1]) + "."],
            f"A affiche ${ra}$, B affiche ${rb}$")
    # répéter (8)
    rp = [(0, 5, ("+", 3)), (10, 4, ("+", 7)), (1, 5, ("x", 2)), (100, 6, ("-", 15)), (2, 3, ("x", 3)), (50, 4, ("-", 12))]
    for x, k, (o, v) in rp:
        r, et = _exec_calc(x, [(o, v)] * k)
        add("intermediaire" if o in "+-" else "approfondissement", "repeter",
            f"Programme : « mettre nombre à {x} », « répéter {k} fois : {MOTS_VAR[o].format(v=v)} »" +
            ", « afficher nombre ». Quel nombre est affiché ?",
            [f"On déroule les {k} tours : " + _deroule(et, [(o, v)] * k) + "."], f"${r}$")
    for k, m in [(4, 2), (5, 3)]:
        add("intermediaire", "repeter",
            f"Une répétition « répéter {k} fois » contient {m} instructions décalées. Combien d'instructions sont exécutées en tout dans la répétition ?",
            [f"Chaque tour exécute les {m} instructions.", f"${k} \\times {m} = {k * m}$ instructions."], f"${k * m}$ instructions")
    # variables (8)
    va = [("score", 0, [("+", 10), ("+", 10), ("-", 5), ("+", 10)]), ("score", 20, [("-", 3), ("-", 3), ("+", 15)]),
          ("compteur", 1, [("x", 2), ("x", 2), ("+", 1)]), ("vies", 3, [("-", 1), ("+", 2), ("-", 1), ("-", 1)])]
    for nom, x, ops in va:
        r, et = _exec_calc(x, ops)
        txt = ", ".join(f"« {('ajouter ' + str(v) + ' à ' + nom) if o == '+' else (('retirer ' + str(v) + ' à ' + nom) if o == '-' else ('multiplier ' + nom + ' par ' + str(v)))} »" for o, v in ops)
        add("application" if len(ops) == 3 else "intermediaire", "variables",
            f"Dans un jeu, on exécute : « mettre {nom} à {x} », {txt}. Que vaut la variable {nom} à la fin ?",
            ["Une variable garde la dernière valeur qu'on lui a donnée : on suit sa valeur pas à pas.", _deroule(et, ops)], f"${r}$")
    for a, b in [(3, 5), (7, 2)]:
        a2 = a + b
        b2 = a2 * 2
        add("approfondissement", "variables",
            f"On exécute : « mettre A à {a} », « mettre B à {b} », « mettre A à A + B », « mettre B à A × 2 ». Que valent A et B à la fin ?",
            [f"Après la 3e ligne : A $= {a} + {b} = {a2}$ (B vaut toujours ${b}$).", f"Après la 4e ligne : B $= {a2} \\times 2 = {b2}$ (on utilise la NOUVELLE valeur de A)."],
            f"A $= {a2}$ et B $= {b2}$")
    for x, k, v in [(0, 10, 2), (5, 3, 5)]:
        r = x + k * v
        add("intermediaire", "variables",
            f"« mettre total à {x} », « répéter {k} fois : ajouter {v} à total ». Que vaut total à la fin ?",
            [f"On ajoute {v} à chaque tour, {k} fois : ${x} + {k} \\times {v} = {r}$."], f"${r}$")
    # déplacements (9)
    dp = [[("A", 3), ("D",), ("A", 2)], [("A", 4), ("G",), ("A", 1)], [("A", 2), ("D",), ("A", 3), ("D",), ("A", 1)],
          [("A", 5), ("T",), ("A", 2)], [("D",), ("A", 4), ("G",), ("A", 2)], [("A", 1), ("G",), ("A", 3), ("G",), ("A", 4)],
          [("A", 3), ("D",), ("A", 3), ("D",), ("A", 3), ("D",), ("A", 3)], [("G",), ("G",), ("A", 2), ("D",), ("A", 5)]]
    for ins in dp:
        x, y, d = _robot(ins)
        add("intermediaire" if len(ins) <= 3 else "approfondissement", "deplacements",
            f"Un robot est sur un quadrillage et regarde vers le haut. Programme : {_robot_txt(ins)}. Où arrive-t-il ?",
            ["On suit le robot pas à pas, en gardant en tête la direction vers laquelle il regarde (tourner ne le fait pas avancer).",
             f"Il arrive {_pos_txt(x, y)} et regarde {d}."], _pos_txt(x, y))
    ins = [("A", 2), ("D",), ("A", 2), ("D",)]
    add("approfondissement", "deplacements",
        "Un robot regarde vers le haut. Programme : « répéter 2 fois : avancer de 2 cases ; tourner à droite ». Vers où regarde-t-il à la fin, et où est-il ?",
        ["1er tour : il monte de 2 cases puis regarde vers la droite.", "2e tour : il va 2 cases à droite puis regarde vers le bas.",
         f"Il est {_pos_txt(*_robot(ins)[:2])}."], f"{_pos_txt(*_robot(ins)[:2])}, il regarde {_robot(ins)[2]}")
    # tracer une figure (5)
    tf = [(4, 50, 90, "un carré"), (3, 60, 120, "un triangle équilatéral"), (6, 30, 60, "un hexagone régulier"), (4, 25, 90, "un carré"), (5, 40, 72, "un pentagone régulier")]
    for k, l, ang, fig in tf:
        add("intermediaire" if k == 4 else "approfondissement", "tracer",
            f"Un lutin exécute : « répéter {k} fois : avancer de {l} ; tourner de {ang}° ». Quelle figure trace-t-il et quelle est la longueur totale du tracé ?",
            [f"Il trace {k} côtés de même longueur en tournant chaque fois du même angle : c'est {fig}.", f"Longueur : ${k} \\times {l} = {k * l}$ pas."],
            f"{fig}, ${k * l}$ pas")
    # entrées / sorties (5)
    es = [(17, [("x", 2), ("+", 3)]), (40, [("+", 4), ("x", 5)]), (22, [("x", 3), ("-", 2)])]
    for r, ops in es:
        x = r
        for o, v in reversed(ops):
            x = x - v if o == "+" else (x + v if o == "-" else x // v)
        assert _exec_calc(x, ops)[0] == r
        inv = []
        y = r
        for o, v in reversed(ops):
            y2 = y - v if o == "+" else (y + v if o == "-" else y // v)
            inv.append(f"${y} {'-' if o == '+' else ('+' if o == '-' else chr(92) + 'div')} {v} = {y2}$")
            y = y2
        add("approfondissement", "entrees-sorties",
            "Programme : « choisir un nombre », " + ", ".join(f"« {_MOTS_OP[o].format(v=v)} »" for o, v in ops) + f", « afficher ». La sortie est {r}. Quelle était l'entrée ?",
            ["On remonte le programme à l'envers en faisant l'opération inverse : " + ", puis ".join(inv) + "."], f"${x}$")
    add("application", "entrees-sorties", "Dans le programme « choisir 3, ajouter 2, multiplier par 5, afficher », quelle est l'entrée et quelle est la sortie ?",
        ["L'entrée est ce que le programme reçoit au départ : 3.", "La sortie est ce qu'il produit : $(3 + 2) \\times 5 = 25$."], "entrée $3$, sortie $25$")
    add("application", "entrees-sorties", "Vrai ou faux : une machine corrige toute seule une instruction mal écrite.",
        ["Faux : la machine fait exactement ce qui est écrit, dans l'ordre, pas ce que tu voulais dire."], "faux")
    return _fin(E)


# ================================================================ 6e : PROBABILITÉS
def gen_6_probabilites():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    def fr_simpl(a, b):
        f = Fraction(a, b)
        if f.denominator != b and f.numerator != 0:
            return f"${fl2(a, b)} = {fl(f)}$"
        return f"${fl2(a, b)}$"

    # certain / impossible / possible (9)
    voc = [("On lance un dé à six faces. « Obtenir 7 ».", "impossible", "Le 7 n'existe pas sur le dé."),
           ("On lance un dé à six faces. « Obtenir un nombre entre 1 et 6 ».", "certain", "Toutes les faces portent un nombre de 1 à 6."),
           ("On lance un dé à six faces. « Obtenir 4 ».", "possible", "Cela peut arriver… ou non."),
           ("Un sac ne contient que des boules rouges. « Tirer une boule rouge ».", "certain", "Toutes les boules sont rouges."),
           ("Un sac ne contient que des boules rouges. « Tirer une boule verte ».", "impossible", "Il n'y a aucune boule verte."),
           ("On lance une pièce. « Obtenir pile ».", "possible", "On peut obtenir pile ou face."),
           ("On tire une carte dans un jeu de 32 cartes. « Tirer un cœur ».", "possible", "Il y a des cœurs, mais aussi d'autres couleurs."),
           ("On lance un dé à six faces. « Obtenir un nombre plus petit que 10 ».", "certain", "Tous les nombres du dé (1 à 6) sont plus petits que 10."),
           ("On lance un dé à six faces. « Obtenir 0 ».", "impossible", "Aucune face ne porte 0.")]
    for e, r, c in voc:
        add("application", "certain-impossible", f"{e} Cet événement est-il certain, impossible ou possible ?", [c], r)
    # a chances sur b (8)
    cs = [(5, 3, "rouges", "vertes", "rouge"), (2, 6, "bleues", "jaunes", "bleue"), (4, 4, "noires", "blanches", "blanche"),
          (7, 3, "rouges", "bleues", "bleue"), (3, 9, "dorées", "argentées", "dorée")]
    for a, b, c1, c2, cible in cs:
        bon = a if cible in c1 else b
        add("application", "chances-sur",
            f"Un sac contient {a} boules {c1} et {b} boules {c2}, indiscernables au toucher. On tire une boule au hasard. Combien de chances sur combien a-t-on de tirer une boule {cible} ?",
            [f"Nombre total de boules : ${a} + {b} = {a + b}$.", f"Boules {cible}s : {bon}."], f"{bon} chances sur {a + b}" if bon > 1 else f"1 chance sur {a + b}")
    add("application", "chances-sur", "On lance un dé à six faces. Combien de chances sur combien a-t-on d'obtenir un nombre pair ?",
        ["Issues qui conviennent : 2, 4, 6 → 3.", "Issues possibles : 6."], "3 chances sur 6")
    add("intermediaire", "chances-sur", "On lance un dé à six faces. Combien de chances sur combien a-t-on d'obtenir un multiple de 3 ?",
        ["Issues qui conviennent : 3 et 6 → 2.", "Issues possibles : 6."], "2 chances sur 6")
    add("intermediaire", "chances-sur", "Une roue est partagée en 8 secteurs égaux numérotés de 1 à 8. Combien de chances sur combien a-t-on d'obtenir un nombre plus grand que 5 ?",
        ["Issues qui conviennent : 6, 7, 8 → 3.", "Issues possibles : 8."], "3 chances sur 8")
    # probabilité en fraction (9)
    pf = [("On lance un dé à six faces. Quelle est la probabilité d'obtenir 6 ?", 1, 6, "Une seule face porte 6."),
          ("On lance un dé à six faces. Quelle est la probabilité d'obtenir un nombre pair ?", 3, 6, "2, 4, 6 : 3 issues sur 6."),
          ("On lance un dé à six faces. Quelle est la probabilité d'obtenir 5 ou 6 ?", 2, 6, "5 et 6 : 2 issues sur 6."),
          ("Un sac contient 5 boules rouges, 3 vertes et 2 bleues. Quelle est la probabilité de tirer une verte ?", 3, 10, "Total : $5 + 3 + 2 = 10$ boules, dont 3 vertes."),
          ("Un sac contient 5 boules rouges, 3 vertes et 2 bleues. Quelle est la probabilité de tirer une rouge ?", 5, 10, "Total : 10 boules, dont 5 rouges."),
          ("On tire une carte au hasard dans un jeu de 32 cartes. Quelle est la probabilité de tirer l'as de pique ?", 1, 32, "Il y a un seul as de pique parmi 32 cartes."),
          ("On tire une carte au hasard dans un jeu de 32 cartes (8 cœurs, 8 carreaux, 8 trèfles, 8 piques). Quelle est la probabilité de tirer un cœur ?", 8, 32, "8 cœurs sur 32 cartes."),
          ("Une urne contient 12 jetons numérotés de 1 à 12. Quelle est la probabilité de tirer un jeton portant un nombre qui se termine par 0 ?", 1, 12, "Seul le jeton 10 se termine par 0."),
          ("Une roue a 10 secteurs égaux : 4 rouges, 5 bleus, 1 jaune. Quelle est la probabilité de tomber sur un secteur bleu ?", 5, 10, "5 secteurs bleus sur 10.")]
    for e, a, b, c in pf:
        add("intermediaire" if Fraction(a, b).denominator != b else "application", "probabilite-fraction", e,
            [c, "Probabilité = nombre d'issues qui conviennent ÷ nombre total d'issues : " + fr_simpl(a, b) + "."],
            f"${fl(Fraction(a, b))}$")
    # comparer (7)
    cp = [((4, 6), "rouge", "verte"), ((7, 3), "bleue", "blanche"), ((5, 5), "noire", "jaune")]
    for (a, b), c1, c2 in cp:
        if a > b:
            r = f"tirer une boule {c1}"
        elif b > a:
            r = f"tirer une boule {c2}"
        else:
            r = "autant de chances"
        add("intermediaire", "comparer",
            f"Un sac contient {a} boules {c1}s et {b} boules {c2}s. Est-il plus probable de tirer une boule {c1} ou une boule {c2} ?",
            [f"Probabilités : ${fl2(a, a + b)}$ pour {c1}, ${fl2(b, a + b)}$ pour {c2}.", "Même total : on compare les numérateurs."], r)
    sacs = [((3, 10), (6, 10)), ((5, 8), (3, 8)), ((5, 12), (5, 12))]
    for (a1, t1), (a2, t2) in sacs:
        if a1 > a2:
            r = "le sac A"
        elif a2 > a1:
            r = "le sac B"
        else:
            r = "c'est pareil"
        add("approfondissement", "comparer",
            f"Sac A : {a1} boules gagnantes sur {t1}. Sac B : {a2} boules gagnantes sur {t2}. Dans quel sac a-t-on le plus de chances de gagner ?",
            [f"A : ${fl2(a1, t1)}$ ; B : ${fl2(a2, t2)}$.", "Même nombre total de boules : on compare les numérateurs."], r)
    add("intermediaire", "comparer", "Avec un dé à six faces, est-il plus probable d'obtenir un 6 ou un nombre impair ?",
        ["Obtenir 6 : 1 chance sur 6.", "Nombre impair (1, 3, 5) : 3 chances sur 6."], "un nombre impair")
    # échelle (6)
    ech = [("Quelle est la probabilité d'un événement impossible ?", "$0$", "Impossible : il n'arrive jamais."),
           ("Quelle est la probabilité d'un événement certain ?", "$1$", "Certain : il arrive à tous les coups."),
           ("Une probabilité peut-elle valoir $1{,}2$ ?", "non", "Une probabilité est toujours comprise entre 0 et 1."),
           ("Une probabilité peut-elle valoir $-0{,}3$ ?", "non", "Une probabilité n'est jamais négative."),
           ("Un événement a une probabilité de $0{,}5$. Comment le dit-on en langage courant ?", "une chance sur deux", "$0{,}5 = \\dfrac{1}{2}$."),
           ("Un événement a une probabilité de $0{,}95$. Est-il peu probable ou très probable ?", "très probable", "$0{,}95$ est proche de 1.")]
    for e, r, c in ech:
        add("application" if r in ("$0$", "$1$") else "intermediaire", "echelle", e, [c], r)
    # écritures (5)
    for a, b in [(1, 2), (1, 4), (3, 4), (1, 10), (1, 5)]:
        v = Fraction(a, b)
        dec = _dec(v)
        add("intermediaire", "ecritures",
            f"Une probabilité vaut ${fl2(a, b)}$. Écris-la sous forme décimale puis en pourcentage.",
            [f"${fl2(a, b)} = {a} \\div {b} = {nm(dec)}$.", f"${nm(dec)} = {fl2(nm(dec * 100), 100)} = {nm(dec * 100)}\\,\\%$."],
            f"${nm(dec)}$ soit ${nm(dec * 100)}\\,\\%$")
    # problèmes (6)
    add("probleme", "probleme-probas", "On lance un dé à six faces. Quelle est la probabilité de NE PAS obtenir 6 ?",
        ["Issues qui conviennent : 1, 2, 3, 4, 5 → 5 issues sur 6."], f"${fl2(5, 6)}$")
    add("probleme", "probleme-probas",
        "Une classe de 25 élèves compte 10 filles. On tire au sort le nom d'un élève. Quelle est la probabilité que ce soit un garçon ?",
        ["Garçons : $25 - 10 = 15$.", f"Probabilité : ${fl2(15, 25)} = {fl(Fraction(15, 25))}$."], f"${fl(Fraction(15, 25))}$")
    add("probleme", "probleme-probas",
        "Un sac contient 4 boules rouges et des boules bleues. Il y a 12 boules en tout. Quelle est la probabilité de tirer une boule bleue ?",
        ["Bleues : $12 - 4 = 8$.", f"Probabilité : ${fl2(8, 12)} = {fl(Fraction(8, 12))}$."], f"${fl(Fraction(8, 12))}$")
    add("probleme", "probleme-probas",
        "On lance une pièce 100 fois et on obtient 47 fois pile. La pièce est-elle forcément truquée ?",
        ["La probabilité d'obtenir pile est $\\dfrac{1}{2}$ : on s'attend à environ 50 piles sur 100, pas exactement 50.",
         "47 est proche de 50 : le hasard suffit à l'expliquer."], "non")
    add("probleme", "probleme-probas",
        "Une loterie a 200 billets dont 10 gagnants. Léa achète un billet. Quelle est la probabilité qu'il soit gagnant ?",
        [f"10 billets gagnants sur 200 : ${fl2(10, 200)} = {fl(Fraction(10, 200))}$."], f"${fl(Fraction(10, 200))}$")
    add("probleme", "probleme-probas",
        "Dans un sac, il y a 3 boules rouges et 3 boules vertes. On a tiré une rouge 4 fois de suite (en remettant la boule à chaque fois). Au 5e tirage, a-t-on plus de chances de tirer une verte ?",
        ["Non : on remet la boule, le sac est le même à chaque tirage.", f"La probabilité de tirer une verte reste ${fl2(3, 6)} = {fl(Fraction(1, 2))}$."],
        f"non, toujours ${fl(Fraction(1, 2))}$")
    return _fin(E)


# ================================================================ 6e : PROPORTIONNALITÉ
def gen_6_proportionnalite():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # reconnaître (7)
    tabs = [([2, 3, 5], [6, 9, 15]), ([1, 4, 6], [5, 20, 32]), ([10, 20, 50], [3, 6, 15]), ([3, 6, 9], [5, 8, 11])]
    for x, y in tabs:
        rap = [Fraction(b, a) for a, b in zip(x, y)]
        prop = len(set(rap)) == 1
        add("intermediaire", "reconnaitre",
            "Quantité : " + ", ".join(map(str, x)) + ". Prix (€) : " + ", ".join(map(str, y)) + ". Le prix est-il proportionnel à la quantité ?",
            [f"On teste : " + " ; ".join((f"${b} \\div {a} = {nm(r)}$" if r.denominator in (1, 2, 4, 5, 10) else f"${b} \\div {a}$ ne tombe pas juste") for a, b, r in zip(x, y, rap)) + ".",
             f"Oui, on multiplie toujours par ${nm(rap[0])}$." if prop else "Non : on ne multiplie pas toujours par le même nombre."],
            "oui" if prop else "non")
    sit = [("Le prix de l'essence payé et le nombre de litres achetés (même prix au litre).", "oui", "Deux fois plus de litres coûtent deux fois plus cher."),
           ("La taille d'une personne et son âge.", "non", "On ne mesure pas 2 fois plus à 20 ans qu'à 10 ans."),
           ("Le prix d'un taxi avec 4 € de prise en charge plus 2 € par kilomètre, et le nombre de kilomètres.", "non",
            "Pour 1 km : 6 € ; pour 2 km : 8 €. Deux fois plus de kilomètres ne coûtent pas deux fois plus.")]
    for e, r, c in sit:
        add("application" if r == "oui" or "âge" in e else "approfondissement", "reconnaitre", f"Proportionnel ou pas ? {e}", [c], r)
    # fois plus / fois moins (7)
    fpm = [("4 places de cinéma coûtent 24 €. Combien coûtent 8 places ?", 24, 2, "×", "€"),
           ("3 kg de pommes coûtent 7,50 €. Combien coûtent 9 kg ?", Decimal("7.5"), 3, "×", "€"),
           ("Pour 12 crêpes, il faut 300 g de farine. Combien pour 4 crêpes ?", 300, 3, "÷", "g"),
           ("6 cahiers identiques ont une masse de 1 800 g. Quelle est la masse de 3 cahiers ?", 1800, 2, "÷", "g"),
           ("Un robinet remplit 9 L en 2 min. Combien en 8 min ?", 9, 4, "×", "L"),
           ("20 m de tissu coûtent 150 €. Combien coûtent 5 m ?", 150, 4, "÷", "€"),
           ("Une voiture consomme 5 L pour 100 km. Combien pour 500 km ?", 5, 5, "×", "L")]
    for e, v, k, op, u in fpm:
        r = _dec(v) * k if op == "×" else _dec(v) / k
        mot = {(2, "×"): "2 fois plus (le double)", (3, "×"): "3 fois plus (le triple)", (4, "×"): "4 fois plus", (5, "×"): "5 fois plus",
               (2, "÷"): "2 fois moins (la moitié)", (3, "÷"): "3 fois moins (le tiers)", (4, "÷"): "4 fois moins (le quart)"}[(k, op)]
        add("application" if op == "×" else "intermediaire", "fois-plus-moins", e,
            [f"C'est {mot}.", f"${eurm(v) if u == '€' else nm(v)} {TIMES if op == '×' else DIV} {k} = {eurm(r) if u == '€' else nm(r)}$ {u}."],
            f"${eurm(r) if u == '€' else nm(r)}$ {u}")
    # linéarité additive (7)
    la = [(3, 12, 5, 20, "litres de peinture", "m²"), (2, 7, 3, 10.5, "kg de pommes", "€"), (4, 6, 6, 9, "baguettes", "€"),
          (10, 25, 5, 12.5, "places", "€"), (2, 30, 5, 75, "heures de travail", "€"), (6, 15, 4, 10, "stylos", "€"),
          (5, 40, 3, 24, "livres de poche", "€")]
    for a, pa, b, pb, objet, u in la:
        pa_, pb_ = _dec(pa), _dec(pb)
        assert Fraction(pa_) / a == Fraction(pb_) / b
        add("intermediaire", "linearite-addition",
            f"{a} {objet} coûtent {eur(pa_)} € et {b} {objet} coûtent {eur(pb_)} €. Combien coûtent {a + b} {objet} ?" if u == "€" else
            f"Avec {a} litres de peinture, on couvre {pa} m². Avec {b} litres, on couvre {pb} m². Combien de m² avec {a + b} litres ?",
            [f"${a + b} = {a} + {b}$ : on additionne les valeurs correspondantes.",
             f"${eurm(pa_)} + {eurm(pb_)} = {eurm(pa_ + pb_)}$ {u}." if u == "€" else f"${pa} + {pb} = {pa + pb}$ m²."],
            f"${eurm(pa_ + pb_)}$ €" if u == "€" else f"${pa + pb}$ m²")
    # retour à l'unité (8)
    ru = [(5, 15, 7, "carnets", "€"), (4, 10, 6, "jus de fruits", "€"), (6, 3, 10, "œufs", "€"), (3, 840, 5, "paquets de biscuits", "g"),
          (6, 750, 4, "yaourts", "g"), (7, 21, 10, "tickets", "€"), (12, 6, 5, "cartes postales", "€"), (9, 108, 4, "pots de miel", "€")]
    for a, p, b, obj, u in ru:
        un = Fraction(p, a)
        r = un * b
        if u == "€":
            e = f"{a} {obj} coûtent {p} €. Combien coûtent {b} {obj} ?"
            c = [f"Retour à l'unité : ${p} \\div {a} = {eurm(_dec(un))}$ € pour {'une seule' if obj == 'cartes postales' else 'un seul'}.", f"${b} \\times {eurm(_dec(un))} = {eurm(_dec(r))}$ €."]
            rep = f"${eurm(_dec(r))}$ €"
        else:
            e = f"{a} {obj} identiques ont une masse de {p} g. Quelle est la masse de {b} {obj} ?"
            c = [f"Retour à l'unité : ${p} \\div {a} = {nm(un)}$ g pour un seul.", f"${b} \\times {nm(un)} = {nm(r)}$ g."]
            rep = f"${nm(r)}$ g"
        add("intermediaire" if un.denominator == 1 else "approfondissement", "retour-unite", e, c, rep)
    # tableaux de proportionnalité (8)
    tb = [(4, [1, 3, 5], 1), (6, [2, 5, 8], 2), (Fraction(5, 2), [2, 4, 10], 2), (12, [3, 4, 7], 0),
          (Fraction(3, 2), [4, 6, 10], 1), (7, [10, 3, 6], 2), (Fraction(1, 2), [8, 14, 20], 0), (9, [2, 5, 11], 1)]
    for k, xs, cache in tb:
        ys = [k * x for x in xs]
        ref = 0 if cache != 0 else 1
        aff = " ; ".join(f"{x} → {('?' if i == cache else nb(_dec(y)))}" for i, (x, y) in enumerate(zip(xs, ys)))
        add("intermediaire" if k.__class__ is int else "approfondissement", "tableau",
            f"Ce tableau est un tableau de proportionnalité : {aff}. Quel nombre remplace « ? » ?",
            [f"Coefficient : ${nm(_dec(ys[ref]))} \\div {xs[ref]} = {nm(_dec(k))}$ (on multiplie toujours par ${nm(_dec(k))}$).",
             f"${xs[cache]} \\times {nm(_dec(k))} = {nm(_dec(ys[cache]))}$."], f"${nm(_dec(ys[cache]))}$")
    # échelles (7)
    ec = [(3, 100, "m"), (5, 100, "m"), (4, 1000, "m"), (7, 100000, "km"), (2, 50000, "km"), (6, 200, "m")]
    for cm, k, u in ec:
        reel = cm * k
        conv = Fraction(reel, 100) if u == "m" else Fraction(reel, 100000)
        add("intermediaire" if k <= 1000 else "approfondissement", "echelles",
            f"Sur un plan, 1 cm représente {nb(k)} cm en réalité. Quelle longueur réelle représente un segment de {cm} cm ? Exprime le résultat en {u}.",
            [f"${cm} \\times {nm(k)} = {nm(reel)}$ cm en réalité.", f"${nm(reel)}$ cm $= {nm(conv)}$ {u}."], f"${nm(conv)}$ {u}")
    add("approfondissement", "echelles",
        "Sur un plan, 1 cm représente 100 cm en réalité. Une pièce mesure 4,5 m de long. Quelle longueur aura-t-elle sur le plan ?",
        ["Même unité : $4{,}5$ m $= 450$ cm.", "On divise par 100 : $450 \\div 100 = 4{,}5$ cm."], "$4{,}5$ cm")
    # problèmes (6)
    add("probleme", "probleme-proportionnalite",
        "Pour 4 personnes, une recette demande 250 g de farine et 2 œufs. Combien de farine et d'œufs faut-il pour 10 personnes ?",
        ["Pour 2 personnes (la moitié de 4) : 125 g de farine et 1 œuf.", "Pour 10 personnes (5 fois 2) : $5 \\times 125 = 625$ g et $5 \\times 1 = 5$ œufs."],
        "$625$ g de farine et $5$ œufs")
    add("probleme", "probleme-proportionnalite",
        "Un randonneur marche à allure régulière : 4 km en 1 h. Combien de temps lui faut-il pour 10 km ?",
        ["4 km → 1 h, donc 2 km → 30 min.", "10 km = 4 km + 4 km + 2 km : 1 h + 1 h + 30 min = 2 h 30 min."], "2 h 30 min")
    add("probleme", "probleme-proportionnalite",
        "Une imprimante imprime 18 pages en 3 minutes. Combien de pages imprime-t-elle en 10 minutes ?",
        ["Retour à l'unité : $18 \\div 3 = 6$ pages par minute.", "$10 \\times 6 = 60$ pages."], "$60$ pages")
    add("probleme", "probleme-proportionnalite",
        "Pour faire de la limonade, on mélange 1 volume de sirop pour 7 volumes d'eau. Combien de cL de sirop faut-il pour 140 cL d'eau ?",
        ["140, c'est 20 fois 7.", "$1 \\times 20 = 20$ cL de sirop."], "$20$ cL")
    add("probleme", "probleme-proportionnalite",
        "Un abonnement de cinéma coûte 6 € par séance, sans frais d'inscription. Tom va 3 fois au cinéma en janvier et 5 fois en février. Combien paie-t-il en tout ?",
        ["Le prix est proportionnel au nombre de séances : $3 + 5 = 8$ séances.", "$8 \\times 6 = 48$ €."], "$48$ €")
    add("probleme", "probleme-proportionnalite",
        "Sur une carte, 1 cm représente 2 km. Deux villages sont à 7,5 cm l'un de l'autre sur la carte. Quelle est la distance réelle ?",
        ["$7{,}5 \\times 2 = 15$ km."], "$15$ km")
    return _fin(E)


EXTRA = {
    ("cm2", "grands-nombres"): gen_cm2_grands_nombres,
    ("cm2", "graphiques-et-donnees"): gen_cm2_graphiques,
    ("cm2", "operations-sur-les-decimaux"): gen_cm2_decimaux,
    ("cm2", "problemes"): gen_cm2_problemes,
    ("cm2", "proportionnalite-et-pourcentages"): gen_cm2_proportionnalite,
    ("cm2", "solides-et-patrons"): gen_cm2_solides,
    ("cm2", "symetrie-axiale"): gen_cm2_symetrie,
    ("sixieme", "configurations-planes"): gen_6_configurations,
    ("sixieme", "durees"): gen_6_durees,
    ("sixieme", "fractions"): gen_6_fractions,
    ("sixieme", "gestion-donnees"): gen_6_gestion_donnees,
    ("sixieme", "initiation-algebre"): gen_6_algebre,
    ("sixieme", "longueurs-aires-volumes"): gen_6_longueurs,
    ("sixieme", "nombres-entiers-decimaux"): gen_6_nombres,
    ("sixieme", "pensee-informatique"): gen_6_pensee_info,
    ("sixieme", "probabilites"): gen_6_probabilites,
    ("sixieme", "proportionnalite"): gen_6_proportionnalite,
}
