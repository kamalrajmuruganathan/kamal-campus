# -*- coding: utf-8 -*-
"""Lot b1 — exercices enrichis, maths CM1 / CM2 (cycle 3).

Expose EXTRA = {(niveau, slug): fonction -> liste de 50 exercices}.
Toutes les réponses sont calculées par le code ; tout est déterministe.
"""
import random
from fractions import Fraction

# =====================================================================
#  Petites aides communes
# =====================================================================

def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}


def _grouper(s, sep):
    g = []
    while len(s) > 3:
        g.insert(0, s[-3:])
        s = s[:-3]
    g.insert(0, s)
    return sep.join(g)


def m(n):
    """Entier pour une formule : 12\\,500 (espaces dès 10 000)."""
    s = str(abs(n))
    if abs(n) >= 10000:
        s = _grouper(s, "\\,")
    return ("-" if n < 0 else "") + s


def tx(n):
    """Entier hors formule : 12 500 (espace insécable dès 10 000)."""
    s = str(abs(n))
    if abs(n) >= 10000:
        s = _grouper(s, " ")
    return ("-" if n < 0 else "") + s


def _dec(x, places, sep, grp):
    x = Fraction(x)
    p = 0
    while (x * 10 ** p).denominator != 1:
        p += 1
        assert p <= 6, f"nombre non décimal : {x}"
    if places is not None:
        assert places >= p
        p = places
    n = int(x * 10 ** p)
    signe = "-" if n < 0 else ""
    n = abs(n)
    ent, fra = divmod(n, 10 ** p)
    se = str(ent)
    if ent >= 10000:
        se = _grouper(se, grp)
    if p == 0:
        return signe + se
    return signe + se + sep + str(fra).zfill(p)


def ld(x, places=None):
    """Décimal pour une formule : 2{,}5."""
    return _dec(x, places, "{,}", "\\,")


def td(x, places=None):
    """Décimal hors formule : 2,5."""
    return _dec(x, places, ",", " ")


def eur(c):
    """Prix en centimes -> « $3{,}20$ € » (ou « $12$ € » si rond)."""
    if c % 100 == 0:
        return f"${m(c // 100)}$ €"
    return f"${ld(Fraction(c, 100), 2)}$ €"


def deg(a):
    return f"${a}^\\circ$"


def fl(a, b):
    return f"\\dfrac{{{a}}}{{{b}}}"


def arrondi(n, base):
    """Arrondi scolaire d'un entier positif (5 -> au-dessus)."""
    return (n + base // 2) // base * base


def de(mot):
    """« de livres », « d'élèves »."""
    return ("d'" if mot[0].lower() in "aeiouyéèêàâîôû" else "de ") + mot


def pl(n, sing, plur):
    return sing if n == 1 else plur


def ordinal(k):
    return "1ᵉʳ" if k == 1 else f"{k}ᵉ"


UNITES = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit",
          "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize",
          "dix-sept", "dix-huit", "dix-neuf"]
DIZAINES = {2: "vingt", 3: "trente", 4: "quarante", 5: "cinquante", 6: "soixante"}


def _moins_de_100(n, fin=True):
    if n < 20:
        return UNITES[n]
    d, u = divmod(n, 10)
    if d == 7:
        return "soixante et onze" if u == 1 else "soixante-" + UNITES[10 + u]
    if d == 8:
        if u == 0:
            return "quatre-vingts" if fin else "quatre-vingt"
        return "quatre-vingt-" + UNITES[u]
    if d == 9:
        return "quatre-vingt-" + UNITES[10 + u]
    if u == 0:
        return DIZAINES[d]
    if u == 1:
        return DIZAINES[d] + " et un"
    return DIZAINES[d] + "-" + UNITES[u]


def _moins_de_1000(n, fin=True):
    c, r = divmod(n, 100)
    morceaux = []
    if c == 1:
        morceaux.append("cent")
    elif c > 1:
        morceaux.append(UNITES[c] + " cent" + ("s" if r == 0 and fin else ""))
    if r:
        morceaux.append(_moins_de_100(r, fin))
    return " ".join(morceaux)


def lettres(n):
    """Nombre entier (< 1 milliard) en lettres, orthographe traditionnelle."""
    if n == 0:
        return "zéro"
    millions, reste = divmod(n, 1000000)
    milliers, unites = divmod(reste, 1000)
    morceaux = []
    if millions:
        morceaux.append("un million" if millions == 1 else _moins_de_1000(millions, True) + " millions")
    if milliers:
        morceaux.append("mille" if milliers == 1 else _moins_de_1000(milliers, False) + " mille")
    if unites:
        morceaux.append(_moins_de_1000(unites, True))
    return " ".join(morceaux)


NOM_DEN = {2: ("demi", "demis"), 3: ("tiers", "tiers"), 4: ("quart", "quarts"),
           5: ("cinquième", "cinquièmes"), 6: ("sixième", "sixièmes"),
           7: ("septième", "septièmes"), 8: ("huitième", "huitièmes"),
           9: ("neuvième", "neuvièmes"), 10: ("dixième", "dixièmes"),
           12: ("douzième", "douzièmes"), 100: ("centième", "centièmes")}


def nom_fraction(a, b):
    s, p = NOM_DEN[b]
    return f"{lettres(a)} {s if a == 1 else p}"


class Lot:
    """Collecte les exercices par notion, refuse les énoncés en double."""

    def __init__(self):
        self.par = {}
        self.vus = set()

    def add(self, diff, notion, enonce, corrige, reponse):
        if enonce in self.vus:
            return False
        self.vus.add(enonce)
        self.par.setdefault(notion, []).append((diff, notion, enonce, list(corrige), reponse))
        return True

    def remplir(self, notion, k, fabrique, rng, essais=5000):
        """Appelle fabrique(rng) -> (diff, enonce, corrige, reponse) ou None, jusqu'à k ajouts."""
        n = 0
        for _ in range(essais):
            r = fabrique(rng)
            if r is None:
                continue
            if self.add(r[0], notion, *r[1:]):
                n += 1
                if n == k:
                    return
        raise AssertionError(f"{notion} : seulement {n} exercices sur {k}")

    def fin(self):
        # Entrelace les notions pour varier les questions successives.
        listes = [list(v) for v in self.par.values()]
        E = []
        while any(listes):
            for li in listes:
                if li:
                    E.append(li.pop(0))
        assert len(E) == 50, f"{len(E)} exercices au lieu de 50"
        return [exo(i + 1, *t) for i, t in enumerate(E)]


def etapes_division(n, d):
    """Étapes d'une division posée (chiffre par chiffre, depuis la gauche)."""
    s = str(n)
    part = int(s[0])
    i = 1
    while part < d and i < len(s):
        part = part * 10 + int(s[i])
        i += 1
    L = []
    premier = True
    while True:
        k = part // d
        r = part - k * d
        debut = f"Dans ${part}$" if premier else f"J'abaisse le ${s[i - 1]}$ : dans ${part}$"
        L.append(f"{debut}, combien de fois ${d}$ ? ${k}$ {pl(k, 'fois', 'fois')} "
                 f"(${d} \\times {k} = {m(d * k)}$), il reste ${r}$.")
        premier = False
        if i >= len(s):
            break
        part = r * 10 + int(s[i])
        i += 1
    return L


# =====================================================================
#  CM1 — Angles
# =====================================================================

def _nature(a):
    if a < 90:
        return "aigu"
    if a == 90:
        return "droit"
    if a < 180:
        return "obtus"
    return "plat"


def _justif_nature(a):
    n = _nature(a)
    if n == "aigu":
        return f"${a} < 90$ : l'angle est plus petit qu'un angle droit, il est aigu."
    if n == "droit":
        return "Il mesure exactement $90^\\circ$ : c'est un angle droit."
    if n == "obtus":
        return f"${a}$ est entre $90$ et $180$ : l'angle est plus grand qu'un angle droit sans être plat, il est obtus."
    return "Il mesure $180^\\circ$ : ses deux côtés forment une ligne droite, il est plat."


def gen_cm1_angles():
    L = Lot()
    # 1. nature d'un angle (6 directs + 3 vrai/faux)
    for a in [35, 90, 120, 180, 75, 160]:
        L.add("application", "nature-angle",
              f"Un angle mesure {deg(a)}. Est-il aigu, droit, obtus ou plat ?",
              ["On compare à l'angle droit ($90^\\circ$) et à l'angle plat ($180^\\circ$).", _justif_nature(a)],
              _nature(a))
    for a, dit in [(95, "aigu"), (88, "aigu"), (135, "obtus")]:
        vrai = _nature(a) == dit
        L.add("intermediaire", "nature-angle",
              f"Vrai ou faux : un angle de {deg(a)} est {dit}.",
              [_justif_nature(a)],
              "Vrai" if vrai else f"Faux : il est {_nature(a)}.")
    # 2. compléter jusqu'à l'angle droit
    for i, a in enumerate([70, 40, 25, 65, 10, 55, 80, 35]):
        diff = "application" if i < 4 else "intermediaire"
        en = (f"Combien de degrés manque-t-il à un angle de {deg(a)} pour former un angle droit ?" if i % 2 == 0 else
              f"Un angle droit est partagé en deux angles. L'un mesure {deg(a)}. Combien mesure l'autre ?")
        L.add(diff, "completer-angle-droit", en,
              ["Un angle droit mesure $90^\\circ$.", f"$90 - {a} = {90 - a}$."], deg(90 - a))
    # 3. compléter jusqu'à l'angle plat
    for i, a in enumerate([130, 45, 100, 150, 72, 115, 90, 25]):
        diff = "intermediaire" if i < 5 else "approfondissement"
        en = (f"Deux angles placés côte à côte forment un angle plat. L'un mesure {deg(a)}. Combien mesure l'autre ?"
              if i % 2 == 0 else
              f"Combien de degrés faut-il ajouter à un angle de {deg(a)} pour obtenir un angle plat ?")
        L.add(diff, "completer-angle-plat", en,
              ["Un angle plat mesure $180^\\circ$.", f"$180 - {a} = {180 - a}$."], deg(180 - a))
    # 4. repères en degrés
    for k in [2, 3, 4]:
        tot = 90 * k
        nom = {180: " : c'est un angle plat", 360: " : c'est un tour complet"}.get(tot, "")
        L.add("application", "reperes-degres",
              f"Combien de degrés mesurent {lettres(k)} angles droits placés côte à côte ?",
              [f"${k} \\times 90 = {tot}${nom}."], deg(tot))
    L.add("application", "reperes-degres", "Combien d'angles droits faut-il pour faire un tour complet ?",
          ["Un tour complet mesure $360^\\circ$ et un angle droit $90^\\circ$.", f"$360 \\div 90 = {360 // 90}$."],
          f"${360 // 90}$")
    L.add("application", "reperes-degres", "Combien d'angles droits faut-il pour faire un angle plat ?",
          ["Un angle plat mesure $180^\\circ$.", f"$180 \\div 90 = {180 // 90}$."], f"${180 // 90}$")
    L.add("intermediaire", "reperes-degres", "Combien mesure la moitié d'un angle droit ?",
          [f"$90 \\div 2 = {90 // 2}$."], deg(90 // 2))
    L.add("intermediaire", "reperes-degres", "Combien mesure la moitié d'un angle plat ? Quel angle obtient-on ?",
          [f"$180 \\div 2 = {180 // 2}$ : c'est un angle droit."], f"{deg(180 // 2)}, un angle droit")
    # 5. comparer des angles
    for liste in [[120, 45, 90, 30], [100, 15, 170, 60], [89, 91, 9, 145], [180, 75, 105, 40]]:
        tri = sorted(liste)
        L.add("intermediaire", "comparer-angles",
              "Range ces angles du plus petit au plus grand : " + ", ".join(deg(a) for a in liste) + ".",
              ["On compare les mesures en degrés : plus la mesure est grande, plus l'angle est ouvert."],
              " ; ".join(deg(a) for a in tri))
    for (ca, a, cb, b) in [(12, 40, 3, 70), (2, 110, 15, 85), (20, 30, 5, 45), (4, 150, 9, 120)]:
        plus = "A" if a > b else "B"
        L.add("approfondissement", "comparer-angles",
              f"L'angle A a des côtés de {ca} cm et mesure {deg(a)}. L'angle B a des côtés de {cb} cm et mesure {deg(b)}. Lequel est le plus grand ?",
              ["La longueur des côtés ne compte pas : seule l'ouverture (la mesure) compte.",
               f"${max(a, b)}^\\circ > {min(a, b)}^\\circ$."],
              f"l'angle {plus}")
    # 6. situations
    for k in [4, 8, 2]:
        ang = 360 // k
        L.add("probleme", "situations",
              f"Une tarte ronde est coupée depuis le centre en {lettres(k)} parts égales. Quel angle forme chaque part au centre ? Quelle est sa nature ?",
              ["Un tour complet mesure $360^\\circ$.", f"$360 \\div {k} = {ang}$ : angle {_nature(ang)}."],
              f"{deg(ang)}, angle {_nature(ang)}")
    for nom, frac in [("un quart de tour", Fraction(1, 4)), ("un demi-tour", Fraction(1, 2)),
                      ("trois quarts de tour", Fraction(3, 4))]:
        ang = int(360 * frac)
        L.add("probleme", "situations",
              f"Un danseur fait {nom} sur lui-même. De combien de degrés a-t-il tourné ?",
              [f"Un tour complet mesure $360^\\circ$ ; {nom}, c'est ${fl(frac.numerator, frac.denominator)}$ de tour.",
               f"$360 \\div {frac.denominator} = {360 // frac.denominator}$" + (f" et ${360 // frac.denominator} \\times {frac.numerator} = {ang}$." if frac.numerator > 1 else ".")],
              deg(ang))
    for h in [3, 6, 2, 5]:
        ang = 30 * min(h, 12 - h)
        L.add("probleme", "situations",
              f"À {h} h pile, quel angle forment les deux aiguilles d'une horloge : aigu, droit, obtus ou plat ?",
              ["Le cadran fait un tour ($360^\\circ$) en 12 heures : entre deux nombres voisins, il y a $360 \\div 12 = 30^\\circ$.",
               f"À {h} h, les aiguilles sont écartées de ${min(h, 12 - h)} \\times 30 = {ang}^\\circ$.",
               _justif_nature(ang)],
              f"{_nature(ang)} ({deg(ang)})")
    return L.fin()


# =====================================================================
#  CM1 — Cercle, triangles, périmètre et aire
# =====================================================================

def _nature_triangle(a, b, c, droit):
    assert a + b > c and a + c > b and b + c > a
    if droit:
        assert sorted([a, b, c])[0] ** 2 + sorted([a, b, c])[1] ** 2 == sorted([a, b, c])[2] ** 2
        return "rectangle"
    if a == b == c:
        return "équilatéral"
    if a == b or b == c or a == c:
        return "isocèle"
    return "quelconque"


def gen_cm1_cercle():
    L = Lot()
    # 1. rayon / diamètre
    for r in [4, 7, 15]:
        L.add("application", "rayon-diametre", f"Un cercle a un rayon de {r} cm. Quel est son diamètre ?",
              ["Le diamètre mesure 2 fois le rayon.", f"$2 \\times {r} = {2 * r}$."], f"${2 * r}$ cm")
    for d in [24, 18, 10, 16]:
        L.add("application", "rayon-diametre", f"Un cercle a un diamètre de {d} cm. Quel est son rayon ?",
              ["Le rayon est la moitié du diamètre.", f"${d} \\div 2 = {d // 2}$."], f"${d // 2}$ cm")
    L.add("intermediaire", "rayon-diametre", "Une roue de vélo a un rayon de 35 cm. Quel est son diamètre ?",
          [f"$2 \\times 35 = {2 * 35}$."], f"${2 * 35}$ cm")
    L.add("intermediaire", "rayon-diametre", "Un rond-point circulaire a un diamètre de 40 m. Quel est son rayon ?",
          [f"$40 \\div 2 = {40 // 2}$."], f"${40 // 2}$ m")
    # 2. nature des triangles
    for (a, b, c, droit) in [(5, 5, 5, False), (6, 6, 4, False), (3, 4, 5, True), (7, 5, 9, False),
                             (8, 8, 8, False), (5, 7, 5, False), (6, 8, 10, True), (4, 6, 7, False)]:
        nat = _nature_triangle(a, b, c, droit)
        if droit:
            en = f"Un triangle a des côtés de {a} cm, {b} cm et {c} cm, et l'un de ses angles est droit. Comment s'appelle ce triangle ?"
            corr = ["Un triangle qui a un angle droit est un triangle rectangle (ici ses trois côtés sont différents)."]
        else:
            en = f"Un triangle a des côtés de {a} cm, {b} cm et {c} cm. Est-il équilatéral, isocèle ou quelconque ?"
            corr = {"équilatéral": ["Ses trois côtés ont la même longueur : il est équilatéral."],
                    "isocèle": ["Il a exactement deux côtés de même longueur : il est isocèle."],
                    "quelconque": ["Ses trois côtés ont des longueurs différentes : il est quelconque."]}[nat]
        L.add("application" if nat != "rectangle" else "intermediaire", "triangles", en, corr,
              "triangle " + nat if droit else nat)
    # 3. périmètres
    for c in [6, 13]:
        L.add("application", "perimetre", f"Calcule le périmètre d'un carré de {c} cm de côté.",
              ["Le carré a 4 côtés égaux.", f"$4 \\times {c} = {4 * c}$."], f"${4 * c}$ cm")
    for (lo, la, u) in [(9, 4, "cm"), (15, 7, "cm"), (25, 12, "m")]:
        L.add("application", "perimetre", f"Calcule le périmètre d'un rectangle de {lo} {u} de long et {la} {u} de large.",
              ["$P = 2 \\times (\\text{longueur} + \\text{largeur})$.",
               f"$P = 2 \\times ({lo} + {la}) = 2 \\times {lo + la} = {2 * (lo + la)}$."], f"${2 * (lo + la)}$ {u}")
    for cotes in [(5, 7, 9), (6, 6, 11)]:
        s = sum(cotes)
        L.add("application", "perimetre",
              f"Un triangle a des côtés de {cotes[0]} cm, {cotes[1]} cm et {cotes[2]} cm. Calcule son périmètre.",
              [f"On additionne les côtés : ${' + '.join(map(str, cotes))} = {s}$."], f"${s}$ cm")
    cotes = (3, 4, 5, 6, 2)
    L.add("intermediaire", "perimetre",
          "Un polygone a cinq côtés qui mesurent 3 cm, 4 cm, 5 cm, 6 cm et 2 cm. Calcule son périmètre.",
          [f"${' + '.join(map(str, cotes))} = {sum(cotes)}$."], f"${sum(cotes)}$ cm")
    L.add("intermediaire", "perimetre",
          "Un hexagone a six côtés qui mesurent tous 5 cm. Calcule son périmètre.",
          [f"$6 \\times 5 = {6 * 5}$."], f"${6 * 5}$ cm")
    # 4. aires
    for (lo, la) in [(8, 3), (12, 5), (7, 6)]:
        L.add("application", "aire", f"Calcule l'aire d'un rectangle de {lo} cm sur {la} cm.",
              ["Aire du rectangle = longueur × largeur.", f"${lo} \\times {la} = {lo * la}$."], f"${lo * la}$ cm²")
    for c in [4, 9, 11]:
        L.add("application", "aire", f"Calcule l'aire d'un carré de {c} cm de côté.",
              [f"${c} \\times {c} = {c * c}$."], f"${c * c}$ cm²")
    L.add("intermediaire", "aire",
          "Un rectangle est formé de 6 rangées de 8 carreaux d'un centimètre carré. Quelle est son aire ?",
          [f"$6 \\times 8 = {6 * 8}$ carreaux d'un centimètre carré."], f"${6 * 8}$ cm²")
    L.add("intermediaire", "aire",
          "Combien de carreaux d'un centimètre de côté faut-il pour recouvrir un carré de 7 cm de côté ?",
          [f"7 rangées de 7 carreaux : $7 \\times 7 = {7 * 7}$."], f"${7 * 7}$ carreaux")
    L.add("intermediaire", "aire", "Un terrain rectangulaire mesure 20 m sur 9 m. Quelle est son aire ?",
          [f"$20 \\times 9 = {20 * 9}$."], f"${20 * 9}$ m²")
    # 5. calculs à l'envers
    for p in [36, 52]:
        L.add("approfondissement", "retrouver-une-mesure", f"Un carré a un périmètre de {p} cm. Combien mesure son côté ?",
              ["Le périmètre du carré vaut 4 fois son côté.", f"${p} \\div 4 = {p // 4}$."], f"${p // 4}$ cm")
    L.add("approfondissement", "retrouver-une-mesure",
          "Un triangle équilatéral a un périmètre de 27 cm. Combien mesure chacun de ses côtés ?",
          ["Ses 3 côtés sont égaux.", f"$27 \\div 3 = {27 // 3}$."], f"${27 // 3}$ cm")
    for (p, lo) in [(30, 9), (50, 15)]:
        la = p // 2 - lo
        L.add("approfondissement", "retrouver-une-mesure",
              f"Un rectangle a un périmètre de {p} cm et une longueur de {lo} cm. Quelle est sa largeur ?",
              [f"Une longueur et une largeur font la moitié du périmètre : ${p} \\div 2 = {p // 2}$.",
               f"Largeur : ${p // 2} - {lo} = {la}$."], f"${la}$ cm")
    for (a, lo) in [(40, 8), (63, 7)]:
        L.add("approfondissement", "retrouver-une-mesure",
              f"Un rectangle a une aire de {a} cm². L'un de ses côtés mesure {lo} cm. Combien mesure l'autre côté ?",
              [f"On cherche le nombre qui, multiplié par {lo}, donne {a} : ${a} \\div {lo} = {a // lo}$."],
              f"${a // lo}$ cm")
    # 6. problèmes
    for (lo, la, prix) in [(12, 8, None), (15, 10, 4)]:
        p = 2 * (lo + la)
        if prix is None:
            L.add("probleme", "problemes",
                  f"Un jardin rectangulaire mesure {lo} m sur {la} m. Quelle longueur de grillage faut-il pour en faire le tour ?",
                  ["On cherche le périmètre.", f"$2 \\times ({lo} + {la}) = {p}$."], f"${p}$ m")
        else:
            L.add("probleme", "problemes",
                  f"Un jardin rectangulaire mesure {lo} m sur {la} m. Le grillage coûte {prix} € le mètre. Combien coûte le grillage pour faire tout le tour ?",
                  [f"Périmètre : $2 \\times ({lo} + {la}) = {p}$ m.", f"Prix : ${p} \\times {prix} = {p * prix}$ €."],
                  f"${p * prix}$ €")
    L.add("probleme", "problemes",
          "Une chambre rectangulaire de 5 m sur 4 m est recouverte de dalles carrées d'un mètre de côté. Combien faut-il de dalles ?",
          [f"Aire : $5 \\times 4 = {5 * 4}$ m², et chaque dalle couvre 1 m²."], f"${5 * 4}$ dalles")
    L.add("probleme", "problemes",
          "Lou colle un ruban tout autour d'un cadre carré de 25 cm de côté. Quelle longueur de ruban lui faut-il ?",
          [f"$4 \\times 25 = {4 * 25}$ cm, soit 1 m."], f"${4 * 25}$ cm")
    for (lo, la, c) in [(6, 4, 5), (9, 1, 5)]:
        pr, pc = 2 * (lo + la), 4 * c
        ar, ac = lo * la, c * c
        L.add("probleme", "problemes",
              f"Compare un rectangle de {lo} cm sur {la} cm et un carré de {c} cm de côté : ont-ils le même périmètre ? Lequel a la plus grande aire ?",
              [f"Périmètres : $2 \\times ({lo} + {la}) = {pr}$ cm et $4 \\times {c} = {pc}$ cm.",
               f"Aires : ${lo} \\times {la} = {ar}$ cm² et ${c} \\times {c} = {ac}$ cm²."],
              ("même périmètre" if pr == pc else "périmètres différents") + " ; "
              + ("le carré a la plus grande aire" if ac > ar else "le rectangle a la plus grande aire"))
    L.add("probleme", "problemes",
          "Un terrain de sport rectangulaire mesure 40 m sur 20 m. Léo en fait 3 fois le tour en courant. Quelle distance parcourt-il ?",
          [f"Un tour : $2 \\times (40 + 20) = {2 * 60}$ m.", f"Trois tours : $3 \\times {2 * 60} = {3 * 120}$ m."],
          f"${3 * 120}$ m")
    L.add("probleme", "problemes",
          "Une nappe rectangulaire mesure 3 m sur 2 m. Quelle est son aire ? Quel est son périmètre ?",
          [f"Aire : $3 \\times 2 = {3 * 2}$ m².", f"Périmètre : $2 \\times (3 + 2) = {2 * 5}$ m."],
          f"aire ${3 * 2}$ m², périmètre ${2 * 5}$ m")
    return L.fin()


# =====================================================================
#  CM1 — Division euclidienne
# =====================================================================

def gen_cm1_division():
    L = Lot()
    rng = random.Random(1103)

    def f_table(r):
        d = r.randint(3, 9)
        q = r.randint(2, 10)
        rr = r.randint(0, d - 1)
        n = d * q + rr
        if n >= 100:
            return None
        return ("application", f"Divise ${n}$ par ${d}$ : quel est le quotient et quel est le reste ?",
                [f"Dans la table de {d} : ${d} \\times {q} = {d * q}$ ne dépasse pas ${n}$, mais ${d} \\times {q + 1} = {d * (q + 1)}$ dépasse.",
                 f"Reste : ${n} - {d * q} = {rr}$.", f"Vérification : ${n} = {d} \\times {q} + {rr}$ et ${rr} < {d}$."],
                f"quotient ${q}$, reste ${rr}$")
    L.remplir("division-avec-les-tables", 8, f_table, rng)

    def f_posee(r):
        d = r.randint(2, 9)
        n = r.randint(100, 999) if r.random() < 0.6 else r.randint(1000, 4999)
        q, rr = divmod(n, d)
        return ("intermediaire", f"Pose et effectue la division euclidienne de ${m(n)}$ par ${d}$.",
                etapes_division(n, d) + [f"Donc ${m(n)} = {d} \\times {m(q)} + {rr}$, avec ${rr} < {d}$."],
                f"quotient ${m(q)}$, reste ${rr}$")
    L.remplir("division-posee", 10, f_posee, rng)

    def f_dividende(r):
        d = r.randint(3, 12)
        q = r.randint(8, 40)
        rr = r.randint(1, d - 1)
        n = d * q + rr
        return ("approfondissement",
                f"Dans une division euclidienne, le diviseur est ${d}$, le quotient ${q}$ et le reste ${rr}$. Quel est le dividende ?",
                ["Dividende = diviseur × quotient + reste.", f"${d} \\times {q} + {rr} = {d * q} + {rr} = {n}$."],
                f"${n}$")
    L.remplir("vocabulaire", 4, f_dividende, rng)
    for (n, d) in [(47, 6), (83, 9), (65, 8)]:
        q, rr = divmod(n, d)
        L.add("application", "vocabulaire",
              f"On a écrit ${n} = {d} \\times {q} + {rr}$ pour la division de ${n}$ par ${d}$. Nomme le dividende, le diviseur, le quotient et le reste.",
              [f"On partage ${n}$ (dividende) en ${d}$ (diviseur) : chaque part vaut ${q}$ (quotient) et il reste ${rr}$ (reste, plus petit que ${d}$)."],
              f"dividende ${n}$, diviseur ${d}$, quotient ${q}$, reste ${rr}$")

    def f_verif(r):
        d = r.randint(3, 9)
        q = r.randint(3, 12)
        rr = r.randint(0, d - 1)
        n = d * q + rr
        cas = r.randint(0, 2)
        if cas == 0:
            qc, rc = q, rr
        elif cas == 1:
            qc, rc = q - 1, rr + d
        else:
            qc, rc = q, (rr + 1) % d
            if d * qc + rc == n:
                return None
        juste = (d * qc + rc == n) and rc < d
        corr = [f"${d} \\times {qc} + {rc} = {d * qc + rc}$" + (f", c'est bien ${n}$." if d * qc + rc == n else f", ce n'est pas ${n}$.")]
        if d * qc + rc == n and rc >= d:
            corr.append(f"Mais le reste ${rc}$ n'est pas plus petit que ${d}$ : on peut encore faire un groupe de plus.")
        if not juste:
            corr.append(f"La bonne division : ${n} = {d} \\times {q} + {rr}$.")
        return ("intermediaire",
                f"Pour la division euclidienne de ${n}$ par ${d}$, Tom écrit : ${n} = {d} \\times {qc} + {rc}$. A-t-il raison ?",
                corr, "Oui" if juste else f"Non : quotient ${q}$, reste ${rr}$")
    L.remplir("verifier-une-division", 7, f_verif, rng)

    def f_juste(r):
        d = r.choice([2, 3, 4, 5, 6, 7, 8, 9])
        q = r.randint(6, 40)
        rr = 0 if r.random() < 0.5 else r.randint(1, d - 1)
        n = d * q + rr
        return ("intermediaire", f"La division de ${n}$ par ${d}$ tombe-t-elle juste (reste égal à $0$) ?",
                [f"${n} = {d} \\times {q} + {rr}$."],
                f"Oui : ${n} = {d} \\times {q}$" if rr == 0 else f"Non, il reste ${rr}$")
    L.remplir("tombe-juste", 8, f_juste, rng)

    def f_pb(r):
        t = r.randint(0, 4)
        if t == 0:
            d = r.randint(3, 8); n = r.randint(25, 99)
            q, rr = divmod(n, d)
            return ("probleme", f"On partage équitablement {n} bonbons entre {d} enfants. Combien de bonbons reçoit chaque enfant ? Combien en reste-t-il ?",
                    [f"${n} = {d} \\times {q} + {rr}$."],
                    f"{q} {pl(q, 'bonbon', 'bonbons')} chacun, " + (f"il en reste {rr}" if rr else "il n'en reste aucun"))
        if t == 1:
            n = r.randint(40, 200); q, rr = divmod(n, 6)
            return ("probleme", f"Une fermière range {n} œufs dans des boîtes de 6. Combien de boîtes pleines obtient-elle ? Combien d'œufs restent hors des boîtes ?",
                    [f"${n} = 6 \\times {q} + {rr}$."],
                    f"{q} boîtes pleines, " + (f"{rr} {pl(rr, 'œuf restant', 'œufs restants')}" if rr else "aucun œuf restant"))
        if t == 2:
            d = r.choice([8, 9]); n = r.randint(30, 99)
            q, rr = divmod(n, d)
            if rr == 0:
                return None
            return ("probleme", f"{n} élèves partent en sortie dans des minibus de {d} places. Combien de minibus faut-il au minimum ?",
                    [f"${n} = {d} \\times {q} + {rr}$ : {q} minibus sont pleins, mais il reste {rr} {pl(rr, 'élève', 'élèves')}.",
                     f"Il faut un minibus de plus : ${q} + 1 = {q + 1}$."], f"{q + 1} minibus")
        if t == 3:
            n = r.randint(15, 100); q, rr = divmod(n, 7)
            if rr == 0:
                return None
            return ("probleme", f"Les vacances durent {n} jours. Combien cela fait-il de semaines et de jours ?",
                    ["Une semaine compte 7 jours.", f"${n} = 7 \\times {q} + {rr}$."],
                    f"{q} {pl(q, 'semaine', 'semaines')} et {rr} {pl(rr, 'jour', 'jours')}")
        d = r.choice([4, 5, 6, 7]); n = r.randint(30, 99)
        q, rr = divmod(n, d)
        return ("probleme", f"Avec {n} enfants, on forme des équipes de {d} joueurs. Combien d'équipes complètes peut-on former ? Combien d'enfants restent sans équipe ?",
                [f"${n} = {d} \\times {q} + {rr}$."],
                f"{q} équipes, " + (f"{rr} {pl(rr, 'enfant', 'enfants')} sans équipe" if rr else "aucun enfant sans équipe"))
    L.remplir("problemes", 10, f_pb, rng)
    return L.fin()


# =====================================================================
#  CM1 — Durées
# =====================================================================

def hm(t):
    """Heure de la journée en minutes -> « 14 h 05 »."""
    h, mn = divmod(t % (24 * 60), 60)
    return f"{h} h {mn:02d}"


def du(d):
    """Durée en minutes -> « 1 h 45 min »."""
    h, mn = divmod(d, 60)
    if h and mn:
        return f"{h} h {mn} min"
    if h:
        return f"{h} h"
    return f"{mn} min"


def gen_cm1_durees():
    L = Lot()
    rng = random.Random(1207)
    # 1. heures <-> minutes
    for (h, mn) in [(2, 15), (3, 40), (1, 5), (4, 30), (5, 0)]:
        tot = 60 * h + mn
        en = f"Convertis {du(tot)} en minutes."
        corr = [f"$1$ h $= 60$ min, donc {h} h $= {h} \\times 60 = {60 * h}$ min."]
        if mn:
            corr.append(f"${60 * h} + {mn} = {tot}$ min.")
        L.add("application", "heures-minutes", en, corr, f"${tot}$ min")
    for tot in [90, 135, 200, 75, 250]:
        h, mn = divmod(tot, 60)
        L.add("intermediaire", "heures-minutes", f"Convertis {tot} min en heures et minutes.",
              [f"$60 \\times {h} = {60 * h}$ et ${tot} - {60 * h} = {mn}$."], du(tot))
    # 2. autres unités
    L.add("application", "autres-unites", "Combien de secondes y a-t-il dans 3 min ?",
          [f"$1$ min $= 60$ s, donc $3 \\times 60 = {3 * 60}$ s."], f"${3 * 60}$ s")
    L.add("intermediaire", "autres-unites", "Convertis 2 min 30 s en secondes.",
          [f"$2 \\times 60 + 30 = {2 * 60 + 30}$ s."], f"${2 * 60 + 30}$ s")
    L.add("intermediaire", "autres-unites", "Convertis 90 s en minutes et secondes.",
          [f"$90 = 60 + {90 - 60}$."], f"1 min {90 - 60} s")
    L.add("application", "autres-unites", "Combien d'heures y a-t-il dans 2 jours ?",
          [f"$1$ jour $= 24$ h, donc $2 \\times 24 = {2 * 24}$ h."], f"${2 * 24}$ h")
    L.add("application", "autres-unites", "Combien de jours y a-t-il dans 3 semaines ?",
          [f"$3 \\times 7 = {3 * 7}$."], f"${3 * 7}$ jours")
    L.add("application", "autres-unites", "Combien de minutes dure un quart d'heure ?",
          [f"Un quart d'heure, c'est $60 \\div 4 = {60 // 4}$ min."], f"${60 // 4}$ min")
    L.add("intermediaire", "autres-unites", "Combien de minutes durent trois quarts d'heure ?",
          [f"Un quart d'heure dure $15$ min, donc $3 \\times 15 = {3 * 15}$ min."], f"${3 * 15}$ min")
    # 3. heure de fin (contexte choisi selon la durée, pour rester réaliste)
    ctx_fin = [(60, 150, "Un film commence à {a} et dure {d}. À quelle heure se termine-t-il ?"),
               (45, 110, "Un match commence à {a} et dure {d}. À quelle heure finit-il ?"),
               (20, 60, "Un gâteau est mis au four à {a} pour {d}. À quelle heure faut-il le sortir ?"),
               (15, 150, "Le bus part à {a} et roule pendant {d}. À quelle heure arrive-t-il ?")]

    def f_fin(r):
        dmin, dmax, modele = r.choice(ctx_fin)
        a = r.randint(8 * 12, 20 * 12) * 5
        d = r.randint(dmin // 5, dmax // 5) * 5
        prochaine = (a // 60 + 1) * 60
        b = a + d
        if a % 60 == 0 or b <= prochaine or b >= 23 * 60:
            return None  # on veut un passage d'heure
        return ("application" if d < 60 else "intermediaire", modele.format(a=hm(a), d=du(d)),
                [f"De {hm(a)} à {hm(prochaine)} : {du(prochaine - a)}.",
                 f"Il reste encore {du(d - (prochaine - a))} à ajouter : {hm(prochaine)} + {du(d - (prochaine - a))} = {hm(b)}."],
                hm(b))
    L.remplir("heure-de-fin", 9, f_fin, rng)
    # 4. durée entre deux heures
    ctx_entre = [(30, 90, "Un cours de natation commence à {a} et finit à {b}. Combien de temps dure-t-il ?"),
                 (60, 240, "Une randonnée part à {a} et se termine à {b}. Quelle est sa durée ?"),
                 (40, 150, "Un spectacle commence à {a} et se termine à {b}. Combien de temps dure-t-il ?")]

    def f_entre(r):
        dmin, dmax, modele = r.choice(ctx_entre)
        a = r.randint(8 * 12, 19 * 12) * 5
        d = r.randint(dmin // 5, dmax // 5) * 5
        b = a + d
        if b >= 23 * 60 or a % 60 == 0:
            return None
        prochaine = (a // 60 + 1) * 60
        if b <= prochaine:
            return None
        corr = [f"De {hm(a)} à {hm(prochaine)} : {du(prochaine - a)}.",
                f"De {hm(prochaine)} à {hm(b)} : {du(b - prochaine)}.",
                f"Total : {du(prochaine - a)} + {du(b - prochaine)} = {du(d)}."]
        return ("intermediaire", modele.format(a=hm(a), b=hm(b)), corr, du(d))
    L.remplir("duree-entre-deux-heures", 9, f_entre, rng)
    # 5. heure de début
    ctx_debut = [(8 * 60 + 15, 8 * 60 + 50, 10, 45, "Lina arrive à l'école à {b} après {d} de trajet. À quelle heure est-elle partie ?"),
                 (16 * 60, 23 * 60, 60, 150, "Un film qui dure {d} se termine à {b}. À quelle heure a-t-il commencé ?"),
                 (10 * 60, 18 * 60, 20, 120, "Une course à pied se termine à {b} ; elle a duré {d}. À quelle heure a-t-elle commencé ?")]

    def f_debut(r):
        bmin, bmax, dmin, dmax, modele = r.choice(ctx_debut)
        b = r.randint(bmin // 5, bmax // 5) * 5
        d = r.randint(dmin // 5, dmax // 5) * 5
        a = b - d
        if b % 60 >= d % 60:
            return None  # on veut un passage d'heure en reculant
        heure = (b // 60) * 60
        return ("approfondissement", modele.format(b=hm(b), d=du(d)),
                [f"On enlève {du(d)} à {hm(b)}.",
                 f"De {hm(b)}, on recule de {b - heure} min jusqu'à {hm(heure)}, puis on enlève encore {du(d - (b - heure))}.",
                 f"Début : {hm(a)}."], hm(a))
    L.remplir("heure-de-debut", 6, f_debut, rng)
    # 6. problèmes
    pbs = []
    for (a, b, c) in [(45, 70, 50), (35, 55, 80)]:
        tot = a + b + c
        pbs.append(("probleme", f"Cette semaine, Sami a joué du piano {du(a)} lundi, {du(b)} mercredi et {du(c)} samedi. Combien de temps a-t-il joué en tout ?",
                    [f"${a} + {b} + {c} = {tot}$ min.", f"${tot}$ min $=$ {du(tot)}."], du(tot)))
    for (n, d) in [(3, 25), (4, 35)]:
        tot = n * d
        pbs.append(("probleme", f"Un boulanger fait cuire {n} fournées de pain de {d} min chacune, l'une après l'autre. Combien de temps dure la cuisson en tout ?",
                    [f"${n} \\times {d} = {tot}$ min, soit {du(tot)}."], du(tot)))
    for (a, b) in [(21 * 60 + 15, 7 * 60), (20 * 60 + 40, 6 * 60 + 50)]:
        d = 24 * 60 - a + b
        pbs.append(("probleme", f"Tom se couche à {hm(a)} et se réveille à {hm(b)} le lendemain. Combien de temps a-t-il dormi ?",
                    [f"De {hm(a)} à minuit : {du(24 * 60 - a)}.", f"De minuit à {hm(b)} : {du(b)}.",
                     f"Total : {du(d)}."], du(d)))
    for (a, d, arret) in [(8 * 60 + 47, 145, 10), (13 * 60 + 25, 95, 15)]:
        b = a + d + arret
        pbs.append(("probleme", f"Un train part à {hm(a)}. Le trajet dure normalement {du(d)}, mais le train a {arret} min de retard. À quelle heure arrive-t-il ?",
                    [f"Durée réelle : {du(d)} + {arret} min = {du(d + arret)}.", f"{hm(a)} + {du(d + arret)} = {hm(b)}."], hm(b)))
    pbs.append(("probleme", "Il y a deux récréations de 15 min par jour d'école, et 4 jours d'école par semaine. Combien de temps de récréation cela fait-il par semaine ?",
                [f"Par jour : $2 \\times 15 = {2 * 15}$ min.", f"Par semaine : $4 \\times {2 * 15} = {4 * 30}$ min, soit {du(4 * 30)}."],
                du(4 * 30)))
    for t in pbs:
        L.add(t[0], "problemes", *t[1:])
    return L.fin()


# =====================================================================
#  CM1 — Fractions
# =====================================================================

def gen_cm1_fractions():
    L = Lot()
    rng = random.Random(1301)
    # 1. lire / écrire
    for (a, b) in [(3, 4), (2, 3), (5, 6), (7, 10)]:
        L.add("application", "lire-ecrire", f"Comment se lit la fraction ${fl(a, b)}$ ?",
              [f"Le dénominateur ${b}$ donne le nom des parts ; le numérateur ${a}$ dit combien on en prend."],
              nom_fraction(a, b))
    for (a, b) in [(5, 8), (1, 3), (4, 9), (9, 100)]:
        L.add("application", "lire-ecrire", f"Écris en chiffres la fraction « {nom_fraction(a, b)} ».",
              [f"Numérateur (parts prises) : ${a}$ ; dénominateur (parts égales) : ${b}$."], f"${fl(a, b)}$")
    # 2. partages

    def f_partage(r):
        b = r.choice([4, 5, 6, 8, 10, 12])
        a = r.randint(1, b - 1)
        t = r.randint(0, 3)
        if t == 0:
            return ("application", f"Une tablette de chocolat a {b} carrés identiques. Hugo en mange {a}. Quelle fraction de la tablette a-t-il mangée ?",
                    [f"La tablette est partagée en ${b}$ parts égales (dénominateur) et Hugo en prend ${a}$ (numérateur)."],
                    f"${fl(a, b)}$")
        if t == 1:
            return ("intermediaire", f"Une pizza est coupée en {b} parts égales. Emma en mange {a}. Quelle fraction de la pizza reste-t-il ?",
                    [f"Il reste ${b} - {a} = {b - a}$ {pl(b - a, 'part', 'parts')} sur ${b}$."], f"${fl(b - a, b)}$")
        if t == 2:
            return ("intermediaire", f"Une bande est partagée en {b} parts égales ; on en colorie {a}. Quelle fraction de la bande n'est pas coloriée ?",
                    [f"Parts non coloriées : ${b} - {a} = {b - a}$ sur ${b}$."], f"${fl(b - a, b)}$")
        return ("application", f"Dans la fraction ${fl(a, b)}$, que représentent ${b}$ et ${a}$ ?",
                ["Le nombre du bas est le dénominateur, celui du haut le numérateur."],
                f"${b}$ : le nombre de parts égales (dénominateur) ; ${a}$ : le nombre de parts prises (numérateur)")
    L.remplir("partages", 8, f_partage, rng)
    # 3. comparer
    for (a, b) in [(3, 4), (7, 5), (6, 6), (2, 9), (11, 10)]:
        f = Fraction(a, b)
        s = "<" if f < 1 else (">" if f > 1 else "=")
        if a < b:
            j = f"Le numérateur ${a}$ est plus petit que le dénominateur ${b}$ : la fraction est plus petite que 1."
        elif a > b:
            j = f"Le numérateur ${a}$ est plus grand que le dénominateur ${b}$ : la fraction est plus grande que 1."
        else:
            j = "Numérateur et dénominateur sont égaux : la fraction vaut 1."
        L.add("application", "comparer", f"Compare ${fl(a, b)}$ et $1$ : écris $<$, $>$ ou $=$.", [j], f"${fl(a, b)} {s} 1$")
    for (a, c, b) in [(3, 5, 7), (9, 7, 10), (2, 4, 5)]:
        s = "<" if a < c else ">"
        L.add("intermediaire", "comparer", f"Compare ${fl(a, b)}$ et ${fl(c, b)}$.",
              [f"Les parts ont la même taille (même dénominateur ${b}$) : la plus grande fraction est celle qui a le plus de parts."],
              f"${fl(a, b)} {s} {fl(c, b)}$")
    # 4. encadrer / décomposer
    for (a, b) in [(5, 4), (7, 3), (13, 5), (17, 10)]:
        n = a // b
        L.add("approfondissement", "encadrer",
              f"Entre quels nombres entiers consécutifs se trouve ${fl(a, b)}$ ?",
              [f"${n} = {fl(n * b, b)}$ et ${n + 1} = {fl((n + 1) * b, b)}$.",
               f"Comme ${n * b} < {a} < {(n + 1) * b}$, on a ${n} < {fl(a, b)} < {n + 1}$."],
              f"${n} < {fl(a, b)} < {n + 1}$")
    for (a, b) in [(7, 4), (11, 3), (9, 2), (23, 10)]:
        n, rr = divmod(a, b)
        L.add("approfondissement", "encadrer",
              f"Écris ${fl(a, b)}$ sous la forme d'un nombre entier plus une fraction plus petite que 1.",
              [f"${a} = {n * b} + {rr}$ et ${fl(n * b, b)} = {n}$."], f"${fl(a, b)} = {n} + {fl(rr, b)}$")
    # 5. fractions décimales
    for a in [35, 48, 127]:
        n, rr = divmod(a, 10)
        L.add("intermediaire", "fractions-decimales",
              f"Écris ${fl(a, 10)}$ avec des unités et des dixièmes.",
              [f"$10$ dixièmes font $1$ unité : ${a} = {n} \\times 10 + {rr}$."],
              f"{n} {pl(n, 'unité', 'unités')} et {rr} {pl(rr, 'dixième', 'dixièmes')}")
    for u in [4, 7]:
        L.add("application", "fractions-decimales", f"Combien de dixièmes y a-t-il dans {u} unités ?",
              [f"$1$ unité $= 10$ dixièmes, donc ${u} \\times 10 = {u * 10}$."], f"${u * 10}$ dixièmes")
    for a in [7, 3]:
        L.add("intermediaire", "fractions-decimales", f"Complète : ${fl(a, 10)} = \\dfrac{{\\dots}}{{100}}$.",
              [f"$1$ dixième $= 10$ centièmes, donc ${a}$ dixièmes $= {a * 10}$ centièmes."], f"${fl(a * 10, 100)}$")
    L.add("application", "fractions-decimales", "Combien de centièmes y a-t-il dans un dixième ?",
          [f"${fl(1, 10)} = {fl(10, 100)}$."], "$10$ centièmes")
    L.add("approfondissement", "fractions-decimales", f"Écris $2 + {fl(3, 10)}$ sous la forme d'une seule fraction décimale.",
          [f"$2 = {fl(20, 10)}$, donc $2 + {fl(3, 10)} = {fl(20, 10)} + {fl(3, 10)} = {fl(23, 10)}$."], f"${fl(23, 10)}$")
    # 6. fraction d'une quantité
    for (a, b, n) in [(1, 4, 28), (3, 4, 28), (2, 3, 27), (1, 5, 45)]:
        part = n // b
        corr = [f"Une part : ${n} \\div {b} = {part}$."]
        if a > 1:
            corr.append(f"${a}$ parts : ${a} \\times {part} = {a * part}$.")
        L.add("intermediaire", "fraction-d-une-quantite", f"Calcule ${fl(a, b)}$ de ${n}$.", corr, f"${a * part}$")

    def f_qte(r):
        t = r.randint(0, 3)
        if t == 0:
            b = r.choice([3, 4, 5]); a = r.randint(1, b - 1); n = b * r.randint(4, 10)
            res = a * (n // b)
            return ("probleme", f"Un sac contient {n} billes ; les ${fl(a, b)}$ des billes sont rouges. Combien y a-t-il de billes rouges ?",
                    [f"${n} \\div {b} = {n // b}$, puis ${a} \\times {n // b} = {res}$."], f"${res}$ billes rouges")
        if t == 1:
            b = r.choice([2, 4]); n = b * r.randint(6, 8)
            res = n // b
            nom = "la moitié" if b == 2 else "le quart"
            return ("probleme", f"Dans une classe de {n} élèves, {nom} des élèves vient à l'école à vélo. Combien d'élèves viennent à vélo ?",
                    [f"{nom.capitalize()}, c'est ${fl(1, b)}$ : ${n} \\div {b} = {res}$."], f"${res}$ élèves")
        if t == 2:
            b = r.choice([3, 4, 5]); a = r.randint(1, b - 1); n = b * r.randint(5, 20)
            fait = a * (n // b)
            return ("probleme", f"Un randonneur doit parcourir {n} km. Il a déjà parcouru les ${fl(a, b)}$ du trajet. Combien de kilomètres lui reste-t-il ?",
                    [f"Déjà parcouru : ${n} \\div {b} \\times {a} = {fait}$ km.", f"Reste : ${n} - {fait} = {n - fait}$ km."],
                    f"${n - fait}$ km")
        b = r.choice([2, 4, 5, 10]); n = b * r.randint(2, 9)
        res = n // b
        return ("probleme", f"Léa a {n} €. Elle dépense ${fl(1, b)}$ de cette somme. Combien dépense-t-elle ?",
                [f"${n} \\div {b} = {res}$."], f"${res}$ €")
    L.remplir("fraction-d-une-quantite", 5, f_qte, rng)
    return L.fin()


# =====================================================================
#  CM1 — Grands nombres (jusqu'au million)
# =====================================================================

RANGS = ["unités", "dizaines", "centaines", "unités de mille", "dizaines de mille", "centaines de mille"]


def _classes(n):
    """« 452 318 » -> phrase sur les classes."""
    mi, u = divmod(n, 1000)
    if mi:
        return f"Classe des mille : ${mi}$ ; classe des unités : ${str(u).zfill(3)}$."
    return f"Classe des unités : ${u}$."


def gen_cm1_grands_nombres():
    L = Lot()
    rng = random.Random(1409)
    # 1. lire / écrire
    for n in [45680, 207015, 380090, 71200]:
        L.add("application", "lire-ecrire", f"Écris en lettres le nombre ${m(n)}$.",
              [_classes(n), "On lit classe par classe, de gauche à droite, en disant « mille » après la classe des mille."],
              lettres(n))
    for n in [604320, 80200, 300015, 52771]:
        L.add("intermediaire", "lire-ecrire", f"Écris en chiffres : « {lettres(n)} ».",
              [_classes(n)], f"${m(n)}$")
    # 2. valeur d'un chiffre

    def f_chiffre(r):
        ch = r.sample(range(10), 6)
        if ch[0] == 0:
            return None
        n = int("".join(map(str, ch)))
        k = r.randint(0, 5)
        dgt = (n // 10 ** k) % 10
        return ("application", f"Dans ${m(n)}$, quel est le chiffre des {RANGS[k]} ?",
                [_classes(n), f"En partant de la droite, le rang des {RANGS[k]} est le {ordinal(k + 1)}."],
                f"${dgt}$")
    L.remplir("valeur-des-chiffres", 8, f_chiffre, rng)
    # 3. nombre de ...
    for (n, base, nom) in [(45678, 100, "centaines"), (307250, 1000, "milliers"), (8492, 10, "dizaines"),
                           (560130, 100, "centaines"), (91305, 1000, "milliers"), (240700, 10, "dizaines")]:
        L.add("approfondissement", "nombre-de",
              f"Combien y a-t-il de {nom} en tout dans ${m(n)}$ ?",
              [f"Le chiffre des {nom} ne suffit pas : on garde tous les chiffres jusqu'au rang des {nom}.",
               f"${m(n)} = {m(n // base)} \\times {m(base)} + {n % base}$."],
              f"${m(n // base)}$ {nom}")
    # 4. décomposer
    for n in [405307, 260040, 98006, 730510]:
        termes = [int(c) * 10 ** (len(str(n)) - 1 - i) for i, c in enumerate(str(n)) if c != "0"]
        L.add("intermediaire", "decomposer", f"Décompose ${m(n)}$ en additionnant la valeur de chaque chiffre.",
              ["Chaque chiffre non nul donne un terme, selon son rang."],
              f"${m(n)} = " + " + ".join(m(t) for t in termes) + "$")
    for (texte, parts) in [("5 centaines de mille, 2 dizaines de mille et 7 unités", [(5, 100000), (2, 10000), (7, 1)]),
                           ("8 dizaines de mille, 9 centaines et 4 unités de mille", [(8, 10000), (9, 100), (4, 1000)]),
                           ("3 centaines de mille, 6 unités de mille et 4 dizaines", [(3, 100000), (6, 1000), (4, 10)])]:
        n = sum(a * b for a, b in parts)
        L.add("approfondissement", "decomposer", f"Écris en chiffres le nombre formé de {texte}.",
              [" + ".join(f"${m(a * b)}$" for a, b in parts) + f" $= {m(n)}$ (attention aux zéros des rangs vides)."],
              f"${m(n)}$")
    n = 6 * 100000 + 45 * 1000 + 30
    L.add("approfondissement", "decomposer", "Calcule $6 \\times 100\\,000 + 45 \\times 1000 + 30$.",
          [f"$600\\,000 + 45\\,000 + 30 = {m(n)}$."], f"${m(n)}$")
    # 5. comparer / ranger
    for (a, b) in [(45090, 45900), (198765, 201003), (99999, 100000), (560321, 560312)]:
        s = "<" if a < b else ">"
        if len(str(a)) != len(str(b)):
            j = f"${m(min(a, b))}$ a moins de chiffres que ${m(max(a, b))}$ : il est plus petit."
        else:
            i = next(k for k in range(len(str(a))) if str(a)[k] != str(b)[k])
            j = (f"Même nombre de chiffres ; de gauche à droite, le premier chiffre différent est le {ordinal(i + 1)} : "
                 f"${str(a)[i]}$ contre ${str(b)[i]}$.")
        L.add("intermediaire", "comparer-ranger", f"Compare ${m(a)}$ et ${m(b)}$ : écris $<$ ou $>$.", [j], f"${m(a)} {s} {m(b)}$")
    for (liste, sens) in [([304500, 340500, 305400, 34500], "croissant"), ([72018, 720180, 72180, 702180], "décroissant"),
                          ([999000, 990900, 909999, 999900], "croissant"), ([125000, 152000, 125500, 15200], "décroissant")]:
        tri = sorted(liste, reverse=(sens == "décroissant"))
        L.add("intermediaire", "comparer-ranger",
              f"Range dans l'ordre {sens} : " + " ; ".join(f"${m(x)}$" for x in liste) + ".",
              ["On compare d'abord le nombre de chiffres, puis les chiffres un à un en partant de la gauche."],
              "$" + (" < " if sens == "croissant" else " > ").join(m(x) for x in tri) + "$")
    # 6. arrondir / encadrer
    for (n, base, nom) in [(458712, 1000, "au millier le plus proche"), (673400, 10000, "à la dizaine de mille la plus proche"),
                           (249999, 100000, "à la centaine de mille la plus proche")]:
        a = arrondi(n, base)
        bas = n // base * base
        L.add("approfondissement", "arrondir-encadrer", f"Arrondis ${m(n)}$ {nom}.",
              [f"${m(n)}$ est entre ${m(bas)}$ et ${m(bas + base)}$.", f"Il est plus proche de ${m(a)}$."], f"${m(a)}$")
    for (n, base, nom) in [(83560, 1000, "milliers consécutifs"), (406200, 10000, "dizaines de mille consécutives"),
                           (127999, 1000, "milliers consécutifs")]:
        bas = n // base * base
        L.add("intermediaire", "arrondir-encadrer", f"Encadre ${m(n)}$ entre deux {nom}.",
              [f"On remplace par des zéros les chiffres situés à droite du rang voulu, puis on ajoute ${m(base)}$."],
              f"${m(bas)} < {m(n)} < {m(bas + base)}$")
    # 7. problèmes
    a, b = 48750, 51300
    L.add("probleme", "problemes",
          f"La ville A compte {tx(a)} habitants et la ville B {tx(b)} habitants. Quelle ville est la plus peuplée, et de combien d'habitants ?",
          [f"${m(b)} > {m(a)}$.", f"${m(b)} - {m(a)} = {m(b - a)}$."], f"la ville B, de ${m(b - a)}$ habitants")
    L.add("probleme", "problemes", "Quel nombre vient juste après $99\\,999$ ?", [f"$99\\,999 + 1 = {m(99999 + 1)}$."], f"${m(100000)}$")
    L.add("probleme", "problemes", "Quel nombre vient juste avant $400\\,000$ ?", [f"$400\\,000 - 1 = {m(399999)}$."], f"${m(399999)}$")
    ch = sorted(range(10), reverse=True)[:6]
    L.add("probleme", "problemes", "Quel est le plus grand nombre de 6 chiffres tous différents ?",
          ["On place les plus grands chiffres à gauche : 9, puis 8, 7, 6, 5, 4."], f"${m(int(''.join(map(str, ch))))}$")
    k0, v = 89950, 1200
    L.add("probleme", "problemes",
          f"Le compteur d'une voiture indique {tx(k0)} km. Après un voyage de {tx(v)} km, qu'indique-t-il ?",
          [f"${m(k0)} + {m(v)} = {m(k0 + v)}$."], f"${m(k0 + v)}$ km")
    s = 45600
    L.add("probleme", "problemes", f"Combien de billets de 100 € faut-il pour payer {tx(s)} € ?",
          [f"On cherche le nombre de centaines dans ${m(s)}$ : ${m(s)} = {s // 100} \\times 100$."], f"${s // 100}$ billets")
    return L.fin()


# =====================================================================
#  CM1 — Multiplication posée
# =====================================================================

NOMS_RANGS = ["unités", "dizaines", "centaines", "milliers", "dizaines de mille"]


def etapes_mult1(a, b):
    ds = [int(c) for c in reversed(str(a))]
    L = []
    ret = 0
    for i, d in enumerate(ds):
        p = d * b + ret
        txt = f"{NOMS_RANGS[i].capitalize()} : ${d} \\times {b} = {d * b}$"
        if ret:
            txt += f", plus la retenue ${ret}$ : ${p}$"
        if i == len(ds) - 1:
            txt += f". J'écris ${p}$."
        else:
            txt += f". J'écris ${p % 10}$" + (f", je retiens ${p // 10}$." if p // 10 else ".")
        L.append(txt)
        ret = p // 10
    return L


def gen_cm1_multiplication():
    L = Lot()
    rng = random.Random(1511)

    def f_un(r):
        a = r.randint(102, 989) if r.random() < 0.7 else r.randint(1020, 4890)
        b = r.randint(3, 9)
        return ("application", f"Pose et calcule : ${m(a)} \\times {b}$.", etapes_mult1(a, b) + [f"Résultat : ${m(a * b)}$."], f"${m(a * b)}$")
    L.remplir("par-un-chiffre", 9, f_un, rng)
    for (a, b) in [(36, 10), (7, 100), (58, 1000), (45, 30), (124, 20), (16, 500), (203, 100), (250, 40)]:
        z = len(str(b)) - len(str(b).rstrip("0"))
        c = b // 10 ** z
        if c == 1:
            corr = [f"Multiplier par ${m(b)}$, c'est ajouter {lettres(z)} {pl(z, 'zéro', 'zéros')} à droite."]
        else:
            corr = [f"${a} \\times {c} = {a * c}$, puis on ajoute {lettres(z)} {pl(z, 'zéro', 'zéros')}."]
        L.add("application", "multiplier-par-10-100", f"Calcule : ${a} \\times {m(b)}$.", corr, f"${m(a * b)}$")

    def f_deux(r):
        a = r.randint(23, 489)
        b = r.randint(12, 89)
        if b % 10 == 0:
            return None
        u, d = b % 10, b // 10
        return ("intermediaire", f"Pose et calcule : ${a} \\times {b}$.",
                [f"Par les unités : ${a} \\times {u} = {m(a * u)}$.",
                 f"Par les dizaines : ${a} \\times {d} = {m(a * d)}$, avec le zéro de décalage : ${m(a * d * 10)}$.",
                 f"On additionne : ${m(a * u)} + {m(a * d * 10)} = {m(a * b)}$."], f"${m(a * b)}$")
    L.remplir("par-deux-chiffres", 10, f_deux, rng)
    for (a, b) in [(49, 21), (78, 32), (61, 19), (83, 48)]:
        ea, eb = arrondi(a, 10), arrondi(b, 10)
        L.add("approfondissement", "ordre-de-grandeur",
              f"En arrondissant chaque nombre à la dizaine la plus proche, donne un ordre de grandeur de ${a} \\times {b}$.",
              [f"${a} \\approx {ea}$ et ${b} \\approx {eb}$.", f"${ea} \\times {eb} = {m(ea * eb)}$ (le résultat exact est ${m(a * b)}$)."],
              f"environ ${m(ea * eb)}$")
    for (a, b) in [(398, 6), (512, 9), (689, 4)]:
        ea = arrondi(a, 100)
        L.add("approfondissement", "ordre-de-grandeur",
              f"En arrondissant ${a}$ à la centaine la plus proche, donne un ordre de grandeur de ${a} \\times {b}$.",
              [f"${a} \\approx {ea}$.", f"${ea} \\times {b} = {m(ea * b)}$ (le résultat exact est ${m(a * b)}$)."],
              f"environ ${m(ea * b)}$")
    for (a, b) in [(24, 12), (35, 23), (46, 31)]:
        u, d = b % 10, b // 10
        faux = a * u + a * d
        L.add("intermediaire", "trouver-l-erreur",
              f"Sami a posé ${a} \\times {b}$ et a trouvé ${faux}$. Quelle erreur a-t-il faite ? Quel est le bon résultat ?",
              [f"Il a additionné ${a} \\times {u} = {a * u}$ et ${a} \\times {d} = {a * d}$ sans le zéro de décalage.",
               f"Il fallait : ${a * u} + {a * d * 10} = {m(a * b)}$."],
              f"oubli du zéro de décalage ; ${a} \\times {b} = {m(a * b)}$")
    L.add("intermediaire", "trouver-l-erreur", f"Inès écrit : $45 \\times 30 = {45 * 3}$. A-t-elle raison ?",
          [f"$45 \\times 3 = {45 * 3}$, mais il faut ensuite ajouter un zéro (on multiplie par 3 dizaines)."],
          f"Non : $45 \\times 30 = {m(45 * 30)}$")
    for (a, b, prop) in [(125, 8, 1000), (37, 11, 397)]:
        ok = a * b == prop
        L.add("intermediaire", "trouver-l-erreur", f"Vrai ou faux : ${a} \\times {b} = {m(prop)}$.",
              [f"${a} \\times {b} = {m(a * b)}$."], "Vrai" if ok else f"Faux : ${a} \\times {b} = {m(a * b)}$")

    def f_pb(r):
        t = r.randint(0, 5)
        if t == 0:
            x, y = r.randint(12, 30), r.randint(15, 28)
            return ("probleme", f"Une salle de spectacle a {x} rangées de {y} fauteuils. Combien y a-t-il de fauteuils ?",
                    [f"${x} \\times {y} = {m(x * y)}$."], f"${m(x * y)}$ fauteuils")
        if t == 1:
            x, y = r.randint(12, 48), r.choice([12, 24, 18])
            return ("probleme", f"Un carton contient {x} boîtes de {y} crayons. Combien y a-t-il de crayons dans le carton ?",
                    [f"${x} \\times {y} = {m(x * y)}$."], f"${m(x * y)}$ crayons")
        if t == 2:
            x, y = r.randint(21, 29), r.randint(12, 35)
            return ("probleme", f"Les {x} élèves d'une classe paient chacun {y} € pour une sortie. Quelle somme est récoltée ?",
                    [f"${x} \\times {y} = {m(x * y)}$."], f"${m(x * y)}$ €")
        if t == 3:
            x, y = r.randint(20, 60), r.randint(12, 35)
            return ("probleme", f"Un camion transporte {x} caisses de {y} kg. Quelle masse transporte-t-il ?",
                    [f"${x} \\times {y} = {m(x * y)}$."], f"${m(x * y)}$ kg")
        if t == 4:
            x = r.randint(80, 100)
            return ("probleme", f"Le cœur d'un enfant bat environ {x} fois par minute. Environ combien de fois bat-il en une heure ?",
                    [f"$1$ h $= 60$ min.", f"${x} \\times 60 = {m(x * 60)}$."], f"environ ${m(x * 60)}$ fois")
        n1, p1, n2, p2 = r.randint(5, 15), r.randint(2, 4), r.randint(3, 9), r.randint(5, 9)
        return ("probleme", f"Pour la rentrée, une école achète {n1} cahiers à {p1} € et {n2} classeurs à {p2} €. Combien paie-t-elle en tout ?",
                [f"Cahiers : ${n1} \\times {p1} = {n1 * p1}$ €.", f"Classeurs : ${n2} \\times {p2} = {n2 * p2}$ €.",
                 f"Total : ${n1 * p1} + {n2 * p2} = {n1 * p1 + n2 * p2}$ €."], f"${n1 * p1 + n2 * p2}$ €")
    L.remplir("problemes", 10, f_pb, rng)
    return L.fin()


# =====================================================================
#  CM1 — Nombres décimaux
# =====================================================================

def _nb_dec(x):
    """Nombre de chiffres après la virgule d'un décimal."""
    x = Fraction(x)
    p = 0
    while (x * 10 ** p).denominator != 1:
        p += 1
    return p


def gen_cm1_nombres_decimaux():
    L = Lot()
    rng = random.Random(1613)
    F = Fraction
    # 1. fraction décimale -> écriture à virgule
    for (a, b) in [(35, 10), (274, 100), (7, 100), (305, 100), (40, 10), (9, 10), (125, 10), (68, 100), (4, 100)]:
        x = F(a, b)
        n, rr = divmod(a, b)
        unite = "dixièmes" if b == 10 else "centièmes"
        corr = [f"${fl(a, b)}$, c'est ${n}$ {'unité' if n <= 1 else 'unités'} et ${rr}$ {unite[:-1] if rr <= 1 else unite}."]
        L.add("application" if b == 10 else "intermediaire", "fraction-vers-virgule",
              f"Écris ${fl(a, b)}$ sous la forme d'un nombre à virgule.", corr, f"${ld(x)}$")
    # 2. écriture à virgule -> fraction décimale
    for x in [F(46, 10), F(8, 100), F(1275, 100), F(5, 10), F(304, 100), F(209, 10), F(35, 100)]:
        p = _nb_dec(x)
        den = 10 ** p
        num = int(x * den)
        nom = "dixièmes" if p == 1 else "centièmes"
        L.add("intermediaire", "virgule-vers-fraction",
              f"Écris ${ld(x)}$ sous la forme d'une fraction décimale.",
              [f"Le dernier chiffre est celui des {nom} : ${ld(x)}$, c'est ${num}$ {nom}."], f"${fl(num, den)}$")
    # 3. valeur d'un chiffre
    RG = [("dizaines", 1), ("unités", 0), ("dixièmes", -1), ("centièmes", -2)]

    def f_val(r):
        ch = r.sample(range(1, 10), 4)
        x = F(int("".join(map(str, ch))), 100)
        nom, k = r.choice(RG)
        dgt = ch[1 - k]
        return ("application", f"Dans ${ld(x)}$, quel est le chiffre des {nom} ?",
                [f"${ld(x)}$ : {ch[0]} dizaine{'s' if ch[0] > 1 else ''}, {ch[1]} unité{'s' if ch[1] > 1 else ''}, "
                 f"{ch[2]} dixième{'s' if ch[2] > 1 else ''} et {ch[3]} centième{'s' if ch[3] > 1 else ''}."],
                f"${dgt}$")
    L.remplir("valeur-des-chiffres", 8, f_val, rng)
    # 4. décomposer
    for (u, d, c) in [(3, 5, 8), (4, 0, 9), (20, 6, 0), (2, 0, 7)]:
        x = u + F(d, 10) + F(c, 100)
        termes = [str(u)] + ([fl(d, 10)] if d else []) + ([fl(c, 100)] if c else [])
        L.add("intermediaire", "decomposer", f"Écris sous la forme d'un nombre à virgule : ${' + '.join(termes)}$.",
              [f"{u} {'unité' if u <= 1 else 'unités'}, {d} {'dixième' if d <= 1 else 'dixièmes'} et {c} {'centième' if c <= 1 else 'centièmes'} : "
               + ("on écrit un zéro au rang vide." if 0 in (d, c) else "chaque chiffre à son rang.")],
              f"${ld(x)}$")
    for x in [F(1274, 100), F(305, 100), F(4706, 100)]:
        ent = int(x)
        dz, un = divmod(ent, 10)
        fr_ = int((x - ent) * 100)
        d, c = divmod(fr_, 10)
        termes = ([str(dz * 10)] if dz else []) + ([str(un)] if un else []) + ([fl(d, 10)] if d else []) + ([fl(c, 100)] if c else [])
        L.add("approfondissement", "decomposer", f"Décompose ${ld(x)}$ avec des entiers et des fractions décimales.",
              ["On sépare la partie entière (dizaines, unités) et la partie décimale (dixièmes, centièmes)."],
              f"${ld(x)} = {' + '.join(termes)}$")
    # 5. comparer / ranger
    for (a, b, pa, pb) in [(F(35, 10), F(345, 100), None, None), (F(208, 100), F(21, 10), None, None),
                           (F(73, 10), F(730, 100), 1, 2), (F(9, 10), F(89, 100), None, None),
                           (F(1205, 100), F(125, 10), None, None), (F(47, 10), F(502, 100), None, None)]:
        s = "<" if a < b else (">" if a > b else "=")
        corr = [f"On écrit les deux nombres avec deux chiffres après la virgule : ${ld(a, 2)}$ et ${ld(b, 2)}$."]
        if int(a) != int(b):
            corr.append(f"Les parties entières sont différentes : ${int(a)}$ et ${int(b)}$.")
        elif a != b:
            corr.append(f"Même partie entière ; on compare ${int((a - int(a)) * 100)}$ centièmes et ${int((b - int(b)) * 100)}$ centièmes.")
        else:
            corr.append("Les zéros à la fin de la partie décimale ne changent pas le nombre.")
        L.add("intermediaire" if a != b else "approfondissement", "comparer-ranger",
              f"Compare ${ld(a, pa)}$ et ${ld(b, pb)}$ : écris $<$, $>$ ou $=$.", corr, f"${ld(a, pa)} {s} {ld(b, pb)}$")
    for (liste, sens) in [([F(25, 10), F(205, 100), F(52, 10), F(25, 100)], "croissant"),
                          ([F(31, 10), F(301, 100), F(13, 10), F(311, 100)], "décroissant"),
                          ([F(7, 1), F(68, 10), F(707, 100), F(77, 10)], "croissant"),
                          ([F(1, 10), F(1, 100), F(11, 100), F(10, 10)], "décroissant")]:
        tri = sorted(liste, reverse=(sens == "décroissant"))
        L.add("approfondissement", "comparer-ranger",
              f"Range dans l'ordre {sens} : " + " ; ".join(f"${ld(x)}$" for x in liste) + ".",
              ["On compare les parties entières, puis les dixièmes, puis les centièmes (on peut ajouter des zéros à droite)."],
              "$" + (" < " if sens == "croissant" else " > ").join(ld(x) for x in tri) + "$")
    # 6. encadrer
    for x in [F(74, 10), F(1208, 100), F(65, 100), F(299, 10), F(305, 100)]:
        n = int(x)
        L.add("intermediaire", "encadrer", f"Encadre ${ld(x)}$ entre deux nombres entiers consécutifs.",
              [f"La partie entière de ${ld(x)}$ est ${n}$."], f"${n} < {ld(x)} < {n + 1}$")
    # 7. mesures
    a, b = F(145, 100), F(15, 10)
    L.add("probleme", "mesures", f"Léa mesure ${ld(a)}$ m et Tom ${ld(b)}$ m. Qui est le plus grand ?",
          [f"${ld(b)} = {ld(b, 2)}$ et ${ld(b, 2)} > {ld(a)}$."], "Tom" if b > a else "Léa")
    L.add("probleme", "mesures", f"Convertis ${ld(a)}$ m en centimètres.",
          [f"$1$ m $= 100$ cm, donc ${ld(a)}$ m $= {int(a * 100)}$ cm."], f"${int(a * 100)}$ cm")
    p = F(320, 100)
    L.add("probleme", "mesures", f"Un magazine coûte ${ld(p, 2)}$ €. Combien cela fait-il de centimes ?",
          [f"$1$ € $= 100$ centimes, donc ${ld(p, 2)}$ € $= {int(p * 100)}$ centimes."], f"${int(p * 100)}$ centimes")
    x = F(27, 10)
    L.add("probleme", "mesures", f"Un ruban mesure ${ld(x)}$ m. Écris cette longueur en mètres et centimètres.",
          [f"${ld(x)}$ m $= {int(x)}$ m et ${ld(x - int(x))}$ m, soit ${int(x)}$ m et ${int((x - int(x)) * 100)}$ cm."],
          f"${int(x)}$ m ${int((x - int(x)) * 100)}$ cm")
    return L.fin()


# =====================================================================
#  CM1 — Additionner et soustraire des décimaux
# =====================================================================

def gen_cm1_operations_decimaux():
    L = Lot()
    rng = random.Random(1717)
    F = Fraction

    def alea(r, entmax, p):
        return F(r.randint(1, entmax * 10 ** p), 10 ** p)

    def f_add_meme(r):
        p = r.choice([1, 2])
        a, b = alea(r, 30, p), alea(r, 30, p)
        if _nb_dec(a) != p or _nb_dec(b) != p:
            return None
        return ("application", f"Pose et calcule : ${ld(a)} + {ld(b)}$.",
                ["On aligne les virgules l'une sous l'autre, puis on additionne colonne par colonne en partant de la droite.",
                 f"${ld(a)} + {ld(b)} = {ld(a + b)}$."], f"${ld(a + b)}$")
    L.remplir("additionner", 9, f_add_meme, rng)

    def f_add_diff(r):
        a = alea(r, 40, 2)
        b = alea(r, 20, 1) if r.random() < 0.7 else F(r.randint(2, 30))
        if _nb_dec(a) != 2 or _nb_dec(b) == 2:
            return None
        x, y = (a, b) if r.random() < 0.5 else (b, a)
        return ("intermediaire", f"Pose et calcule : ${ld(x)} + {ld(y)}$.",
                [f"On écrit ${ld(b)} = {ld(b, 2)}$ pour avoir autant de chiffres après la virgule, et on aligne les virgules.",
                 f"${ld(x, 2)} + {ld(y, 2)} = {ld(x + y, 2)}$."], f"${ld(x + y)}$")
    L.remplir("additionner-en-completant", 9, f_add_diff, rng)

    def f_sous(r):
        t = r.randint(0, 2)
        if t == 0:
            a, b = alea(r, 30, 1), alea(r, 30, 1)
        elif t == 1:
            a, b = alea(r, 50, 2), alea(r, 20, 1)
        else:
            a, b = F(r.randint(3, 20)), alea(r, 3, 2)
        if a <= b or _nb_dec(b) == 0:
            return None
        p = max(_nb_dec(a), _nb_dec(b))
        corr = []
        if _nb_dec(a) != p:
            corr.append(f"On écrit ${ld(a)} = {ld(a, p)}$ pour avoir autant de chiffres après la virgule.")
        corr.append("On aligne les virgules et on soustrait colonne par colonne (avec des retenues si besoin).")
        corr.append(f"${ld(a, p)} - {ld(b, p)} = {ld(a - b, p)}$, et on vérifie : ${ld(a - b)} + {ld(b)} = {ld(a)}$.")
        return ("intermediaire" if t < 2 else "approfondissement", f"Pose et calcule : ${ld(a)} - {ld(b)}$.", corr, f"${ld(a - b)}$")
    L.remplir("soustraire", 10, f_sous, rng)
    for (x, cible) in [(F(35, 100), 1), (F(7, 10), 1), (F(62, 10), 10), (F(48, 100), 1), (F(24, 10), 5), (F(375, 100), 4)]:
        L.add("intermediaire", "complement", f"Combien faut-il ajouter à ${ld(x)}$ pour obtenir ${cible}$ ?",
              [f"On calcule ${cible} - {ld(x)} = {ld(cible - x)}$.", f"Vérification : ${ld(x)} + {ld(cible - x)} = {cible}$."],
              f"${ld(cible - x)}$")
    for (a, b) in [(F(45, 10), F(235, 100)), (F(125, 10), F(325, 100)), (F(6, 10), F(18, 100))]:
        p = max(_nb_dec(a), _nb_dec(b))
        faux = F(int(a * 10 ** _nb_dec(a)) + int(b * 10 ** _nb_dec(b)), 10 ** p)
        L.add("approfondissement", "trouver-l-erreur",
              f"Zoé a posé ${ld(a)} + {ld(b)}$ en alignant les derniers chiffres, et elle a trouvé ${ld(faux, p)}$. Quelle est son erreur ? Quel est le bon résultat ?",
              ["Elle n'a pas aligné les virgules : elle a additionné des dixièmes avec des centièmes.",
               f"On écrit ${ld(a)} = {ld(a, p)}$, puis ${ld(a, p)} + {ld(b, p)} = {ld(a + b, p)}$."],
              f"virgules mal alignées ; ${ld(a)} + {ld(b)} = {ld(a + b)}$")
    for (a, b, op, prop) in [(F(37, 10), F(45, 10), "+", F(82, 10)), (F(10), F(35, 100), "-", F(965, 100)),
                             (F(52, 10), F(17, 10), "-", F(45, 10))]:
        vrai_res = a + b if op == "+" else a - b
        ok = vrai_res == prop
        L.add("intermediaire", "trouver-l-erreur", f"Vrai ou faux : ${ld(a)} {op} {ld(b)} = {ld(prop)}$.",
              [f"${ld(a)} {op} {ld(b)} = {ld(vrai_res)}$."],
              "Vrai" if ok else f"Faux : ${ld(a)} {op} {ld(b)} = {ld(vrai_res)}$")

    def euros(c):
        return f"{td(F(c, 100), 2)} €" if c % 100 else f"{c // 100} €"

    def f_pb(r):
        t = r.randint(0, 5)
        if t == 0:
            pr = [r.randint(150, 450), r.randint(300, 900), r.randint(80, 350)]
            noms = ["un cahier", "une trousse", "un stylo"]
            tot = sum(pr)
            return ("probleme", f"Max achète {noms[0]} à {euros(pr[0])}, {noms[1]} à {euros(pr[1])} et {noms[2]} à {euros(pr[2])}. Combien paie-t-il ?",
                    [f"${' + '.join(ld(F(c, 100), 2) for c in pr)} = {ld(F(tot, 100), 2)}$."], f"${ld(F(tot, 100), 2)}$ €")
        if t == 1:
            billet = r.choice([10, 20])
            c = r.randint(300, billet * 100 - 50)
            rendu = billet * 100 - c
            return ("probleme", f"Une maman paie {euros(c)} avec un billet de {billet} €. Combien la boulangère lui rend-elle ?",
                    [f"${billet} - {ld(F(c, 100), 2)} = {ld(F(rendu, 100), 2)}$."], f"${ld(F(rendu, 100), 2)}$ €")
        if t == 2:
            a, b = F(r.randint(250, 420), 100), F(r.randint(250, 420), 100)
            if a == b:
                return None
            g, p_ = max(a, b), min(a, b)
            return ("probleme", f"Au saut en longueur, Nina saute ${ld(a)}$ m et Yanis ${ld(b)}$ m. Qui saute le plus loin, et de combien ?",
                    [f"${ld(g)} > {ld(p_)}$.", f"${ld(g)} - {ld(p_)} = {ld(g - p_)}$."],
                    f"{'Nina' if a > b else 'Yanis'}, de ${ld(g - p_)}$ m")
        if t == 3:
            a = F(r.randint(20, 50), 10)
            b = F(r.randint(25, 150), 100)
            if b >= a:
                return None
            return ("probleme", f"Un ruban mesure ${ld(a)}$ m. On en coupe ${ld(b)}$ m. Quelle longueur reste-t-il ?",
                    [f"${ld(a, 2)} - {ld(b, 2)} = {ld(a - b, 2)}$."], f"${ld(a - b)}$ m")
        if t == 4:
            a, b = F(r.randint(140, 200), 10), F(r.randint(140, 200), 10)
            if a == b:
                return None
            return ("probleme", f"Sur 100 m, Léo court en ${ld(a)}$ s et Sarah en ${ld(b)}$ s. Qui est le plus rapide, et avec combien d'avance ?",
                    ["Le plus rapide met le moins de temps.", f"${ld(max(a, b))} - {ld(min(a, b))} = {ld(abs(a - b))}$."],
                    f"{'Léo' if a < b else 'Sarah'}, avec ${ld(abs(a - b))}$ s d'avance")
        a, b = F(r.randint(50, 250), 100), F(r.randint(5, 15), 10)
        return ("probleme", f"Dans son sac, Jade met un livre de ${ld(a)}$ kg et une gourde de ${ld(b)}$ kg. Quelle masse ajoute-t-elle ?",
                [f"${ld(a, 2)} + {ld(b, 2)} = {ld(a + b, 2)}$."], f"${ld(a + b)}$ kg")
    L.remplir("problemes", 10, f_pb, rng)
    return L.fin()


# =====================================================================
#  CM1 — Proportionnalité
# =====================================================================

def gen_cm1_proportionnalite():
    L = Lot()
    rng = random.Random(1801)
    objets = [("cahiers", "cahier"), ("stylos", "stylo"), ("places de cinéma", "place"), ("kilos de pommes", "kilo"),
              ("bouteilles de jus", "bouteille"), ("tickets de bus", "ticket")]

    def f_unite(r):
        pl_, sg = r.choice(objets)
        u = r.randint(2, 9)
        n1, n2 = r.sample(range(2, 10), 2)
        if sg == "stylo" or sg == "ticket":
            u = r.randint(1, 3)
        return ("application", f"{n1} {pl_} coûtent {n1 * u} €. Combien coûtent {n2} {pl_} ?",
                [f"Prix d'un seul {sg} : ${n1 * u} \\div {n1} = {u}$ €." if sg not in ("place", "bouteille") else
                 f"Prix d'une seule {sg} : ${n1 * u} \\div {n1} = {u}$ €.",
                 f"Pour {n2} : ${n2} \\times {u} = {n2 * u}$ €."], f"${n2 * u}$ €")
    L.remplir("passer-par-l-unite", 10, f_unite, rng)
    for (n1, p1, k, mot) in [(4, 5, 2, "double"), (3, 7, 3, "triple"), (6, 9, Fraction(1, 2), "moitié"),
                             (5, 8, 4, "quadruple"), (10, 15, Fraction(1, 5), "cinquième")]:
        n2 = n1 * k
        p2 = p1 * k
        lien = (f"${m(int(n2))} = {k} \\times {n1}$, donc le prix est aussi multiplié par ${k}$ : ${k} \\times {p1} = {int(p2)}$ €."
                if k >= 1 else
                f"${int(n2)} = {n1} \\div {k.denominator}$, donc le prix est aussi divisé par ${k.denominator}$ : ${p1} \\div {k.denominator} = {ld(p2, None if Fraction(p2).denominator == 1 else 2)}$ €.")
        L.add("intermediaire", "utiliser-les-liens", f"{n1} croissants coûtent {p1} €. Combien coûtent {int(n2)} croissants ?",
              [lien], f"${ld(p2, None if Fraction(p2).denominator == 1 else 2)}$ €")
    for (a, pa, b, pb) in [(3, 12, 5, 20), (2, 7, 4, 14), (4, 10, 6, 15)]:
        L.add("approfondissement", "utiliser-les-liens",
              f"{a} paquets de gâteaux coûtent {pa} € et {b} paquets coûtent {pb} €. Combien coûtent {a + b} paquets ?",
              [f"${a + b} = {a} + {b}$, donc on additionne les prix : ${pa} + {pb} = {pa + pb}$ €."], f"${pa + pb}$ €")
    # 3. tableaux
    for (k, xs) in [(3, [1, 2, 5, 8]), (6, [2, 3, 4, 10]), (7, [1, 3, 6, 9]), (4, [5, 6, 7, 12])]:
        ys = [k * x for x in xs]
        cache = 2
        aff = [str(y) if i != cache else "?" for i, y in enumerate(ys)]
        L.add("intermediaire", "tableau",
              f"Ce tableau est un tableau de proportionnalité. Première ligne : {', '.join(map(str, xs))}. Deuxième ligne : {', '.join(aff)}. Trouve le nombre manquant.",
              [f"On passe de la première ligne à la deuxième en multipliant par ${k}$ (car ${xs[0]} \\times {k} = {ys[0]}$).",
               f"${xs[cache]} \\times {k} = {ys[cache]}$."], f"${ys[cache]}$")
    for (k, xs) in [(5, [2, 4, 7]), (8, [3, 5, 10]), (9, [2, 4, 6]), (12, [1, 3, 5])]:
        ys = [k * x for x in xs]
        L.add("application", "tableau",
              f"Dans un tableau de proportionnalité, la première ligne est {', '.join(map(str, xs))} et la deuxième {', '.join(map(str, ys))}. Quel est le coefficient de proportionnalité ?",
              [f"${ys[0]} \\div {xs[0]} = {k}$, et on vérifie : " + ", ".join(f"${x} \\times {k} = {y}$" for x, y in zip(xs, ys)) + "."],
              f"${k}$")
    # 4. reconnaître
    for (xs, ys) in [([2, 5, 7], [6, 15, 22]), ([3, 4, 10], [12, 16, 40]), ([1, 2, 3], [5, 10, 14]), ([4, 6, 9], [12, 18, 28]),
                     ([2, 3, 8], [14, 21, 54]), ([5, 10, 20], [15, 30, 60])]:
        k = Fraction(ys[0], xs[0])
        ok = all(Fraction(y, x) == k for x, y in zip(xs, ys))
        corr = [f"On cherche le nombre qui fait passer de ${xs[0]}$ à ${ys[0]}$ : ${ys[0]} \\div {xs[0]} = {ld(k)}$.",
                ", ".join(f"${x} \\times {ld(k)} = {ld(x * k)}$" + ("" if x * k == y else f" et non ${y}$") for x, y in zip(xs, ys)) + "."]
        corr.append("On multiplie toujours par le même nombre : c'est proportionnel." if ok else
                    "On ne multiplie pas toujours par le même nombre : ce n'est pas proportionnel.")
        L.add("intermediaire", "reconnaitre",
              "Ce tableau est-il un tableau de proportionnalité ? Première ligne : " + ", ".join(map(str, xs))
              + ". Deuxième ligne : " + ", ".join(map(str, ys)) + ".", corr, "Oui" if ok else "Non")
    L.add("approfondissement", "reconnaitre",
          "Léo a 8 ans et mesure 1,30 m. Peut-on dire qu'à 16 ans il mesurera 2,60 m ?",
          ["La taille n'est pas proportionnelle à l'âge : on grandit de moins en moins vite."], "Non")
    L.add("approfondissement", "reconnaitre",
          "Un cahier coûte 2 €. Le prix payé est-il proportionnel au nombre de cahiers achetés ?",
          ["1 cahier : 2 € ; 3 cahiers : 6 € ; 10 cahiers : 20 €. On multiplie toujours le nombre de cahiers par 2."], "Oui")
    # 5. recettes
    ingr = [("g de farine", "g", [50, 100]), ("g de sucre", "g", [25, 50]), ("cL de lait", "cL", [10, 20]),
            ("g de beurre", "g", [20, 25])]

    def f_recette(r):
        if r.random() < 0.25:
            # œufs : on passe par les liens entre les nombres de personnes
            p1, q1, k = r.choice([(4, 2, 3), (6, 3, 2), (2, 2, 4), (4, 3, 2), (3, 2, 3), (8, 4, Fraction(1, 2)), (6, 4, Fraction(1, 2))])
            p2, q2 = int(p1 * k), int(q1 * k)
            lien = (f"${p2} = {k} \\times {p1}$, donc il faut ${k}$ fois plus d'œufs : ${k} \\times {q1} = {q2}$." if k > 1 else
                    f"${p2} = {p1} \\div 2$, donc il faut deux fois moins d'œufs : ${q1} \\div 2 = {q2}$.")
            return ("probleme", f"Pour {p1} personnes, une recette demande {q1} œufs. Combien d'œufs faut-il pour {p2} personnes ?",
                    [lien], f"${q2}$ œufs")
        nom, unite, pas = r.choice(ingr)
        p1, p2 = r.sample([2, 3, 4, 6, 8], 2)
        u = r.choice(pas)
        q1, q2 = u * p1, u * p2
        return ("probleme", f"Pour {p1} personnes, une recette demande {q1} {nom}. Quelle quantité faut-il pour {p2} personnes ?",
                [f"Pour 1 personne : ${q1} \\div {p1} = {u}$ {unite}.", f"Pour {p2} personnes : ${p2} \\times {u} = {q2}$ {unite}."],
                f"${q2}$ {unite}")
    L.remplir("recettes", 8, f_recette, rng)
    # 6. vitesses et débits
    pbs = []
    for (v, h) in [(15, 3), (20, 4)]:
        pbs.append(("probleme", f"Un cycliste roule toujours à la même vitesse : il parcourt {v} km en 1 h. Quelle distance parcourt-il en {h} h ?",
                    [f"${h} \\times {v} = {h * v}$ km."], f"${h * v}$ km"))
    for (l, mn, mn2) in [(12, 2, 5), (20, 4, 6)]:
        q = Fraction(l, mn) * mn2
        pbs.append(("probleme", f"Un robinet remplit {l} L en {mn} min. Combien de litres remplit-il en {mn2} min ?",
                    [f"En 1 min : ${l} \\div {mn} = {ld(Fraction(l, mn))}$ L.", f"En {mn2} min : ${mn2} \\times {ld(Fraction(l, mn))} = {ld(q)}$ L."],
                    f"${ld(q)}$ L"))
    for (c, d) in [(6, 300), (5, 400)]:
        pbs.append(("probleme", f"Une voiture consomme {c} L d'essence pour 100 km. Combien consomme-t-elle pour {d} km ?",
                    [f"${d} = {d // 100} \\times 100$, donc ${d // 100} \\times {c} = {d // 100 * c}$ L."], f"${d // 100 * c}$ L"))
    for (v, dist) in [(4, 12), (5, 20)]:
        pbs.append(("approfondissement", f"Un marcheur parcourt {v} km en 1 h, toujours au même rythme. Combien de temps lui faut-il pour parcourir {dist} km ?",
                    [f"${dist} \\div {v} = {dist // v}$ : il lui faut {dist // v} fois plus de temps."], f"${dist // v}$ h"))
    for t in pbs:
        L.add(t[0], "vitesses-et-debits", *t[1:])
    return L.fin()


# =====================================================================
#  CM1 — Symétrie axiale
# =====================================================================

def gen_cm1_symetrie():
    L = Lot()
    # 1. axes des figures
    figures = [("un carré", 4, "les 2 médianes et les 2 diagonales"),
               ("un rectangle (qui n'est pas un carré)", 2, "les 2 droites qui passent par les milieux des côtés opposés"),
               ("un losange (qui n'est pas un carré)", 2, "ses 2 diagonales"),
               ("un triangle équilatéral", 3, "une droite par sommet, qui passe par le milieu du côté opposé"),
               ("un triangle isocèle (non équilatéral)", 1, "la droite qui passe par le sommet principal et le milieu de la base"),
               ("un parallélogramme quelconque", 0, "aucun pliage ne fait se superposer les deux moitiés"),
               ("un pentagone régulier", 5, "un polygone régulier à 5 côtés a 5 axes"),
               ("un hexagone régulier", 6, "un polygone régulier à 6 côtés a 6 axes"),
               ("un triangle quelconque", 0, "ses trois côtés sont différents : aucun pliage ne convient")]
    for i, (nom, n, why) in enumerate(figures):
        L.add("application" if i < 5 else "intermediaire", "axes-des-figures",
              f"Combien d'axes de symétrie possède {nom} ?", [f"{why.capitalize()}."],
              f"${n}$" if n else "aucun ($0$)")
    # 2. lettres (capitales d'imprimerie, en écriture bâton)
    lettres_axes = [("A", 1, "vertical"), ("T", 1, "vertical"), ("M", 1, "vertical"), ("E", 1, "horizontal"),
                    ("H", 2, "vertical et horizontal"), ("F", 0, ""), ("X", 2, "vertical et horizontal"), ("L", 0, "")]
    for (c, n, sens) in lettres_axes:
        if n == 0:
            corr = [f"Aucun pliage de la lettre {c} ne donne deux moitiés superposables."]
            rep = "aucun"
        elif n == 1:
            corr = [f"La lettre {c} a un seul axe, {sens}."]
            rep = f"$1$ axe ({sens})"
        else:
            corr = [f"La lettre {c} a deux axes : un {sens.replace(' et ', ' et un ')}."]
            rep = "$2$ axes"
        L.add("application", "lettres",
              f"En capitales d'imprimerie (écriture bâton), combien d'axes de symétrie possède la lettre {c} ?", corr, rep)
    # 3. quadrillage
    for k in [3, 7, 5]:
        L.add("application", "quadrillage",
              f"Sur un quadrillage, le point A est à {k} carreaux à droite d'un axe vertical. Où se trouve son symétrique A' ?",
              ["Le symétrique est à la même distance de l'axe, de l'autre côté, sur la même ligne."],
              f"à {k} carreaux à gauche de l'axe, sur la même ligne")
    for k in [4, 2]:
        L.add("application", "quadrillage",
              f"Sur un quadrillage, le point B est à {k} carreaux au-dessus d'un axe horizontal. Où se trouve son symétrique B' ?",
              ["Même distance de l'axe, de l'autre côté, sur la même colonne."],
              f"à {k} carreaux au-dessous de l'axe, sur la même colonne")
    for (axe, col, lig) in [(6, 2, 3), (5, 9, 1), (8, 3, 4), (7, 7, 2)]:
        sym = 2 * axe - col
        if col == axe:
            corr = ["Le point est sur l'axe : il est son propre symétrique."]
        else:
            corr = [f"Le point est à ${abs(axe - col)}$ colonne{'s' if abs(axe - col) > 1 else ''} de l'axe, "
                    f"à {'gauche' if col < axe else 'droite'}.",
                    f"Son symétrique est à ${abs(axe - col)}$ colonne{'s' if abs(axe - col) > 1 else ''} de l'axe, de l'autre côté : "
                    f"colonne ${sym}$, même ligne."]
        L.add("intermediaire", "quadrillage",
              f"Sur un quadrillage, l'axe de symétrie est la ligne verticale de la colonne {axe}. Le point C est en colonne {col}, ligne {lig}. Où est son symétrique ?",
              corr, f"colonne ${sym}$, ligne ${lig}$")
    # 4. distances
    for d in [3, 8, 12]:
        L.add("intermediaire", "distances",
              f"Un point est à {d} cm de l'axe de symétrie. Quelle distance sépare ce point de son symétrique ?",
              [f"Le symétrique est aussi à {d} cm de l'axe, de l'autre côté : ${d} + {d} = {2 * d}$."], f"${2 * d}$ cm")
    for D in [10, 9, 14]:
        L.add("approfondissement", "distances",
              f"Un point et son symétrique sont à {D} cm l'un de l'autre. À quelle distance de l'axe se trouve chacun d'eux ?",
              [f"L'axe est exactement au milieu : ${D} \\div 2 = {ld(Fraction(D, 2))}$."], f"${ld(Fraction(D, 2))}$ cm")
    L.add("intermediaire", "distances", "Un point est situé sur l'axe de symétrie. Où est son symétrique ?",
          ["Un point de l'axe ne bouge pas : son image est lui-même."], "c'est le point lui-même")
    L.add("approfondissement", "distances",
          "Le point M est à 2 cm de l'axe et le point N à 5 cm, du même côté. Quelle distance sépare M de son symétrique M' ?",
          [f"M' est à 2 cm de l'axe de l'autre côté : $2 + 2 = 4$."], "$4$ cm")
    # 5. propriétés (vrai / faux)
    vf = [("Le symétrique d'une figure a la même forme et la même taille que la figure.", True,
           "La symétrie conserve les longueurs et les formes."),
          ("Le symétrique d'un segment de 6 cm mesure 12 cm.", False, "La symétrie conserve les longueurs : il mesure aussi 6 cm."),
          ("Le symétrique d'un angle droit est un angle droit.", True, "La symétrie conserve les angles."),
          ("Le segment qui relie un point à son symétrique coupe l'axe à angle droit.", True,
           "Ce segment est perpendiculaire à l'axe."),
          ("Un parallélogramme quelconque a deux axes de symétrie.", False, "Il n'en a aucun."),
          ("Un cercle a une infinité d'axes de symétrie.", True, "Toute droite qui passe par le centre est un axe."),
          ("Le symétrique d'un point est toujours plus loin de l'axe que le point lui-même.", False,
           "Il est exactement à la même distance de l'axe.")]
    for (phrase, ok, why) in vf:
        L.add("intermediaire", "proprietes", f"Vrai ou faux : {phrase[0].lower() + phrase[1:]}", [why], "Vrai" if ok else "Faux")
    a, b, c = 4, 5, 7
    L.add("approfondissement", "proprietes",
          f"Un triangle a des côtés de {a} cm, {b} cm et {c} cm. Quel est le périmètre de son symétrique par rapport à une droite ?",
          ["Le symétrique a les mêmes longueurs.", f"${a} + {b} + {c} = {a + b + c}$."], f"${a + b + c}$ cm")
    # 6. compléter une figure par symétrie
    for (lo, la) in [(3, 4), (5, 2), (6, 3)]:
        L.add("probleme", "completer-une-figure",
              f"On complète par symétrie une moitié de figure : un rectangle de {lo} cm sur {la} cm, collé à l'axe par son côté de {la} cm. Quelles sont les dimensions de la figure complète ? Quelle est son aire ?",
              [f"Le symétrique est un rectangle de {lo} cm sur {la} cm de l'autre côté de l'axe.",
               f"Figure complète : ${2 * lo}$ cm sur ${la}$ cm.", f"Aire : ${2 * lo} \\times {la} = {2 * lo * la}$ cm²."],
              f"${2 * lo}$ cm sur ${la}$ cm, aire ${2 * lo * la}$ cm²")
    for c in [3, 5]:
        L.add("probleme", "completer-une-figure",
              f"Un carré de {c} cm de côté est collé à un axe par l'un de ses côtés. On trace son symétrique. Quelle figure obtient-on en tout, et quel est son périmètre ?",
              [f"On obtient un rectangle de ${2 * c}$ cm sur ${c}$ cm.", f"Périmètre : $2 \\times ({2 * c} + {c}) = {2 * (3 * c)}$ cm."],
              f"un rectangle de ${2 * c}$ cm sur ${c}$ cm, périmètre ${6 * c}$ cm")
    L.add("probleme", "completer-une-figure",
          "Une moitié de papillon a une aire de 18 cm². Quelle est l'aire du papillon entier, symétrique par rapport à son axe ?",
          ["Les deux moitiés sont superposables : elles ont la même aire.", f"$2 \\times 18 = {2 * 18}$."], f"${2 * 18}$ cm²")
    L.add("probleme", "completer-une-figure",
          "Sur un quadrillage, la moitié d'un dessin de cœur occupe 13 carreaux. On trace l'autre moitié par symétrie. Combien de carreaux occupe le cœur entier ?",
          ["Le symétrique occupe autant de carreaux que la moitié de départ.", f"$2 \\times 13 = {2 * 13}$."], f"${2 * 13}$ carreaux")
    L.add("probleme", "completer-une-figure",
          "Un triangle rectangle a un côté de l'angle droit de 4 cm posé sur l'axe ; l'autre côté de l'angle droit mesure 3 cm. On trace son symétrique. Quelle figure obtient-on, et combien mesure le côté opposé au sommet situé sur l'axe ?",
          ["Les deux triangles se touchent le long de l'axe ; les deux côtés de 3 cm s'alignent pour former un seul côté.",
           f"Ce côté mesure $3 + 3 = {3 + 3}$ cm, et les deux autres côtés sont égaux (symétriques) : le triangle est isocèle."],
          f"un triangle isocèle, côté de ${3 + 3}$ cm")
    return L.fin()


# =====================================================================
#  CM1 — Tableaux et graphiques
# =====================================================================

JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"]


def gen_cm1_tableaux():
    L = Lot()
    rng = random.Random(1907)
    themes = [("livres empruntés à la bibliothèque", "livres"), ("gâteaux vendus à la kermesse", "gâteaux"),
              ("élèves inscrits à l'étude", "élèves"), ("visiteurs du musée (en dizaines)", "dizaines de visiteurs")]

    def serie(r, n=5, lo=3, hi=40):
        v = r.sample(range(lo, hi), n)
        return v

    def txt(jours, v):
        return ", ".join(f"{j} {x}" for j, x in zip(jours, v))

    def f_lire(r):
        th, unite = r.choice(themes)
        v = serie(r)
        i = r.randrange(5)
        return ("application", f"Nombre {de(th)} : {txt(JOURS, v)}. Quel jour a-t-on compté {v[i]} {unite} ?",
                [f"On cherche la valeur {v[i]} dans la liste : elle correspond à {JOURS[i]}."], JOURS[i])
    L.remplir("lire-une-valeur", 7, f_lire, rng)

    def f_max(r):
        th, unite = r.choice(themes)
        v = serie(r)
        plus = r.random() < 0.5
        i = v.index(max(v) if plus else min(v))
        return ("application", f"Nombre {de(th)} : {txt(JOURS, v)}. Quel jour en a-t-on compté le {'plus' if plus else 'moins'} ?",
                [f"La plus {'grande' if plus else 'petite'} valeur est {v[i]}, le {JOURS[i]}."], JOURS[i])
    L.remplir("plus-grand-plus-petit", 7, f_max, rng)

    def f_total(r):
        th, unite = r.choice(themes[:3])
        v = serie(r, r.choice([4, 5]), 5, 30)
        jrs = JOURS[:len(v)]
        return ("intermediaire", f"Nombre {de(th)} : {txt(jrs, v)}. Combien en tout ?",
                [f"${' + '.join(map(str, v))} = {sum(v)}$."], f"${sum(v)}$ {unite}")
    L.remplir("total", 7, f_total, rng)

    def f_ecart(r):
        th, unite = r.choice(themes[:3])
        v = serie(r)
        i, j = r.sample(range(5), 2)
        if v[i] < v[j]:
            i, j = j, i
        return ("intermediaire", f"Nombre {de(th)} : {txt(JOURS, v)}. Combien {de(unite)} de plus le {JOURS[i]} que le {JOURS[j]} ?",
                [f"${v[i]} - {v[j]} = {v[i] - v[j]}$."], f"${v[i] - v[j]}$ {unite}")
    L.remplir("ecart", 7, f_ecart, rng)
    # diagrammes en bâtons

    def f_batons(r):
        g = r.choice([2, 5, 10, 20, 50, 100])
        k = r.randint(2, 9)
        t = r.randint(0, 2)
        if t == 0:
            return ("intermediaire", f"Un diagramme en bâtons est gradué de {g} en {g}. Le bâton de mardi s'arrête au {ordinal(k)} trait au-dessus de 0. Quelle valeur représente-t-il ?",
                    [f"Chaque trait vaut {g} de plus : ${k} \\times {g} = {m(k * g)}$."], f"${m(k * g)}$")
        if t == 1:
            return ("intermediaire", f"Un diagramme en bâtons est gradué de {g} en {g}. Jusqu'à quel trait (au-dessus de 0) doit monter le bâton qui représente {tx(k * g)} ?",
                    [f"${m(k * g)} \\div {g} = {k}$."], f"le {ordinal(k)} trait")
        if g == 5:
            return None
        return ("approfondissement", f"Un diagramme en bâtons est gradué de {g} en {g}. Un bâton s'arrête exactement à mi-chemin entre le {ordinal(k)} et le {ordinal(k + 1)} trait. Quelle valeur représente-t-il ?",
                [f"Le {ordinal(k)} trait vaut ${k * g}$ et le {ordinal(k + 1)} vaut ${(k + 1) * g}$.",
                 f"À mi-chemin : ${k * g} + {g} \\div 2 = {k * g + g // 2}$."], f"${m(k * g + g // 2)}$")
    L.remplir("diagramme-en-batons", 8, f_batons, rng)
    # pictogrammes

    def f_picto(r):
        val = r.choice([2, 4, 10, 20, 100])
        objet = r.choice([("un ballon", "ballons", "élèves", "demi"), ("un livre", "livres", "lecteurs", "demi"),
                          ("une pomme", "pommes", "fruits vendus", "demie")])
        k = r.randint(2, 9)
        demi = r.random() < 0.4
        tot = k * val + (val // 2 if demi else 0)
        t = r.randint(0, 1)
        if t == 0:
            n_txt = f"{k} {objet[1]}" + (f" et {objet[3]}" if demi else "")
            corr = [f"${k} \\times {val} = {k * val}$."]
            if demi:
                corr.append(f"Un demi-dessin vaut ${val} \\div 2 = {val // 2}$, donc ${k * val} + {val // 2} = {tot}$.")
            return ("intermediaire", f"Dans un pictogramme, {objet[0]} représente {val} {objet[2]}. Une ligne contient {n_txt}. Combien {de(objet[2])} cela représente-t-il ?",
                    corr, f"${tot}$ {objet[2]}")
        return ("approfondissement", f"Dans un pictogramme, {objet[0]} représente {val} {objet[2]}. Combien de dessins faut-il pour représenter {tot} {objet[2]} ?",
                [f"${tot} \\div {val}$ : " + (f"${k}$ dessins entiers et il reste ${val // 2}$, soit un demi-dessin." if demi else f"${k}$ dessins.")],
                f"{k} {objet[1]}" + (f" et {objet[3]}" if demi else ""))
    L.remplir("pictogramme", 8, f_picto, rng)
    # problèmes à plusieurs étapes

    def f_pb(r):
        f = serie(r, 3, 8, 20)
        g = serie(r, 3, 8, 20)
        classes = ["CE2", "CM1", "CM2"]
        t = r.randint(0, 2)
        base = (f"Dans une école, voici le nombre de filles et de garçons inscrits au club de sport : "
                f"CE2 : {f[0]} filles et {g[0]} garçons ; CM1 : {f[1]} filles et {g[1]} garçons ; CM2 : {f[2]} filles et {g[2]} garçons.")
        if t == 0:
            tot = [a + b for a, b in zip(f, g)]
            if len(set(tot)) < 3:
                return None
            i = tot.index(max(tot))
            return ("probleme", base + " Quelle classe a le plus d'inscrits ?",
                    ["Total par classe : " + ", ".join(f"{c} ${a} + {b} = {a + b}$" for c, a, b in zip(classes, f, g)) + "."],
                    classes[i])
        if t == 1:
            sf, sg = sum(f), sum(g)
            if sf == sg:
                return None
            return ("probleme", base + " Y a-t-il plus de filles ou de garçons inscrits, et combien de plus ?",
                    [f"Filles : ${' + '.join(map(str, f))} = {sf}$.", f"Garçons : ${' + '.join(map(str, g))} = {sg}$.",
                     f"Écart : ${max(sf, sg)} - {min(sf, sg)} = {abs(sf - sg)}$."],
                    f"{'filles' if sf > sg else 'garçons'}, ${abs(sf - sg)}$ de plus")
        s = sum(f) + sum(g)
        return ("probleme", base + " Combien d'élèves sont inscrits en tout ?",
                [f"Filles : ${sum(f)}$ ; garçons : ${sum(g)}$.", f"${sum(f)} + {sum(g)} = {s}$."], f"${s}$ élèves")
    L.remplir("problemes", 6, f_pb, rng)
    return L.fin()


# =====================================================================
#  CM2 — Aires, périmètres et volumes
# =====================================================================

def gen_cm2_aires_volumes():
    L = Lot()
    F = Fraction
    # 1. périmètres
    for c in [7, 15]:
        L.add("application", "perimetre", f"Calcule le périmètre d'un carré de {c} cm de côté.", [f"$4 \\times {c} = {4 * c}$."], f"${4 * c}$ cm")
    for (lo, la, u) in [(12, 5, "cm"), (35, 18, "m"), (24, 9, "m")]:
        L.add("application", "perimetre", f"Calcule le périmètre d'un rectangle de {lo} {u} sur {la} {u}.",
              [f"$2 \\times ({lo} + {la}) = 2 \\times {lo + la} = {2 * (lo + la)}$."], f"${2 * (lo + la)}$ {u}")
    L.add("intermediaire", "perimetre", "Un rectangle mesure 1,20 m de long et 80 cm de large. Calcule son périmètre en centimètres.",
          ["On met tout dans la même unité : $1{,}20$ m $= 120$ cm.", f"$2 \\times (120 + 80) = {2 * 200}$ cm."], f"${2 * 200}$ cm")
    L.add("intermediaire", "perimetre", "Un triangle équilatéral a des côtés de 2,5 cm. Calcule son périmètre.",
          [f"$3 \\times 2{{,}}5 = {ld(F(15, 2))}$."], f"${ld(F(15, 2))}$ cm")
    L.add("approfondissement", "perimetre",
          "Une figure en forme de L est un rectangle de 10 cm sur 8 cm auquel on a enlevé, dans un coin, un carré de 3 cm de côté. Calcule son périmètre.",
          ["Les deux côtés créés par l'encoche remplacent exactement les deux morceaux enlevés : le périmètre ne change pas.",
           f"$2 \\times (10 + 8) = {2 * 18}$ cm."], f"${2 * 18}$ cm")
    # 2. aires
    for (lo, la, u) in [(14, 6, "cm"), (25, 12, "m"), (9, 9, "cm")]:
        L.add("application", "aire", f"Calcule l'aire d'un carré de {lo} {u} de côté." if lo == la else f"Calcule l'aire d'un rectangle de {lo} {u} sur {la} {u}.",
              [f"${lo} \\times {la} = {lo * la}$."], f"${lo * la}$ {u}²")
    for (lo, la, a, b) in [(10, 8, 4, 3), (12, 7, 5, 2), (15, 10, 6, 4)]:
        A = lo * la - a * b
        L.add("approfondissement", "aire",
              f"Une figure en forme de L est un rectangle de {lo} cm sur {la} cm auquel on a enlevé, dans un coin, un rectangle de {a} cm sur {b} cm. Calcule son aire.",
              [f"Grand rectangle : ${lo} \\times {la} = {lo * la}$ cm².", f"Partie enlevée : ${a} \\times {b} = {a * b}$ cm².",
               f"Aire : ${lo * la} - {a * b} = {A}$ cm²."], f"${A}$ cm²")
    L.add("intermediaire", "aire", "Deux rectangles de 6 cm sur 4 cm et de 5 cm sur 3 cm sont posés côte à côte sans se chevaucher. Quelle est l'aire totale ?",
          [f"$6 \\times 4 = {24}$ et $5 \\times 3 = {15}$.", f"${24} + {15} = {39}$."], f"${39}$ cm²")
    L.add("intermediaire", "aire", "Un rectangle mesure 2,5 m sur 4 m. Calcule son aire.",
          [f"$2{{,}}5 \\times 4 = {ld(F(5, 2) * 4)}$."], f"${ld(F(5, 2) * 4)}$ m²")
    # 3. retrouver une mesure
    for a in [49, 64, 121]:
        c = int(round(a ** 0.5))
        assert c * c == a
        L.add("approfondissement", "retrouver-une-mesure", f"Un carré a une aire de {a} cm². Combien mesure son côté ?",
              [f"On cherche le nombre qui, multiplié par lui-même, donne {a} : ${c} \\times {c} = {a}$."], f"${c}$ cm")
    for (A, lo) in [(96, 12), (135, 15)]:
        L.add("approfondissement", "retrouver-une-mesure", f"Un rectangle a une aire de {A} cm² et une longueur de {lo} cm. Quelle est sa largeur ?",
              [f"${A} \\div {lo} = {A // lo}$."], f"${A // lo}$ cm")
    L.add("approfondissement", "retrouver-une-mesure", "Un carré a un périmètre de 68 cm. Quelle est son aire ?",
          [f"Côté : $68 \\div 4 = {68 // 4}$ cm.", f"Aire : ${17} \\times {17} = {17 * 17}$ cm²."], f"${17 * 17}$ cm²")
    # 4. volumes
    for (lo, la, h) in [(4, 3, 2), (10, 5, 6), (8, 8, 8), (12, 5, 3)]:
        nom = "cube" if lo == la == h else "pavé droit"
        en = (f"Calcule le volume d'un cube de {lo} cm d'arête." if nom == "cube" else
              f"Calcule le volume d'un pavé droit de {lo} cm de long, {la} cm de large et {h} cm de haut.")
        L.add("application", "volume", en, [f"$V = {lo} \\times {la} \\times {h} = {m(lo * la * h)}$."], f"${m(lo * la * h)}$ cm³")
    L.add("intermediaire", "volume", "Une boîte est remplie de 5 couches de 6 rangées de 4 petits cubes d'un centimètre cube. Quel est son volume ?",
          [f"$4 \\times 6 \\times 5 = {4 * 6 * 5}$ petits cubes d'un centimètre cube."], f"${4 * 6 * 5}$ cm³")
    L.add("intermediaire", "volume", "Un pavé droit a un volume de 60 cm³. Sa base mesure 5 cm sur 4 cm. Quelle est sa hauteur ?",
          [f"Base : $5 \\times 4 = 20$.", f"Hauteur : $60 \\div 20 = {60 // 20}$ cm."], f"${60 // 20}$ cm")
    L.add("approfondissement", "volume", "Un cube a un volume de 125 cm³. Combien mesure son arête ?",
          ["On cherche le nombre qui, multiplié trois fois par lui-même, donne 125.", f"$5 \\times 5 \\times 5 = {5 * 5 * 5}$."], "$5$ cm")
    L.add("intermediaire", "volume", "Combien de petits cubes d'un centimètre d'arête faut-il pour construire un cube de 3 cm d'arête ?",
          [f"$3 \\times 3 \\times 3 = {27}$."], f"${27}$ cubes")
    # 5. contenances
    for (lo, la, h) in [(50, 30, 40), (60, 40, 30), (40, 25, 20)]:
        V = lo * la * h
        L.add("probleme", "contenance",
              f"Un aquarium a la forme d'un pavé droit de {lo} cm sur {la} cm et {h} cm de haut. Combien de litres d'eau peut-il contenir ?",
              [f"$V = {lo} \\times {la} \\times {h} = {m(V)}$ cm³.", f"$1$ L $= 1$ dm³ $= 1000$ cm³, donc ${m(V)} \\div 1000 = {m(V // 1000)}$ L."],
              f"${m(V // 1000)}$ L")
    L.add("application", "contenance", "Combien de litres contient un cube d'un décimètre d'arête ?", ["$1$ dm³ $= 1$ L."], "$1$ L")
    L.add("intermediaire", "contenance", "Combien de centimètres cubes y a-t-il dans 1 L ?",
          ["$1$ L $= 1$ dm³, et un cube d'un décimètre (10 cm) d'arête contient $10 \\times 10 \\times 10 = 1000$ cm³."], "$1000$ cm³")
    L.add("approfondissement", "contenance", "Une bouteille contient 75 cL. Combien cela fait-il de centimètres cubes ?",
          ["$1$ L $= 100$ cL $= 1000$ cm³, donc $1$ cL $= 10$ cm³.", f"$75 \\times 10 = {750}$."], "$750$ cm³")
    L.add("intermediaire", "contenance", "Une brique de jus a un volume de 1500 cm³. Combien de litres de jus peut-elle contenir ?",
          [f"$1500 \\div 1000 = {ld(F(1500, 1000))}$."], f"${ld(F(3, 2))}$ L")
    # 6. périmètre ou aire ?
    for (r1, r2) in [((6, 4), (8, 2)), ((7, 3), (5, 5)), ((9, 1), (6, 4)), ((12, 2), (8, 6))]:
        p1, p2 = 2 * sum(r1), 2 * sum(r2)
        a1, a2 = r1[0] * r1[1], r2[0] * r2[1]
        rep = ("même périmètre" if p1 == p2 else ("le 1ᵉʳ a le plus grand périmètre" if p1 > p2 else "le 2ᵉ a le plus grand périmètre"))
        rep += " ; " + ("même aire" if a1 == a2 else ("le 1ᵉʳ a la plus grande aire" if a1 > a2 else "le 2ᵉ a la plus grande aire"))
        L.add("approfondissement", "perimetre-ou-aire",
              f"Compare deux rectangles : le 1ᵉʳ mesure {r1[0]} cm sur {r1[1]} cm, le 2ᵉ {r2[0]} cm sur {r2[1]} cm. Compare leurs périmètres, puis leurs aires.",
              [f"Périmètres : ${p1}$ cm et ${p2}$ cm.", f"Aires : ${a1}$ cm² et ${a2}$ cm².",
               "Le périmètre et l'aire sont deux grandeurs différentes : l'un peut être égal sans que l'autre le soit."],
              rep)
    L.add("intermediaire", "perimetre-ou-aire",
          "Pour poser une clôture autour d'un jardin, doit-on calculer son périmètre ou son aire ? Et pour semer du gazon sur tout le jardin ?",
          ["La clôture fait le tour : périmètre. Le gazon couvre la surface : aire."], "clôture : périmètre ; gazon : aire")
    L.add("approfondissement", "perimetre-ou-aire",
          "On accole deux carrés de 4 cm de côté pour former un rectangle. Compare le périmètre du rectangle à la somme des périmètres des deux carrés.",
          [f"Deux carrés : $2 \\times (4 \\times 4) = {2 * 16}$ cm.", f"Rectangle de 8 cm sur 4 cm : $2 \\times (8 + 4) = {2 * 12}$ cm.",
           "Le côté commun n'est plus sur le contour : le périmètre diminue, mais l'aire reste la même."],
          f"rectangle : ${2 * 12}$ cm ; deux carrés : ${2 * 16}$ cm")
    # 7. problèmes
    lo, la, prix = 18, 12, 6
    L.add("probleme", "problemes", f"Un champ rectangulaire de {lo} m sur {la} m est entouré d'un grillage à {prix} € le mètre. Quel est le prix du grillage ?",
          [f"Périmètre : $2 \\times ({lo} + {la}) = {2 * (lo + la)}$ m.", f"Prix : ${2 * (lo + la)} \\times {prix} = {2 * (lo + la) * prix}$ €."],
          f"${2 * (lo + la) * prix}$ €")
    lo, h, l1 = 5, 3, 15
    L.add("probleme", "problemes",
          f"Un mur rectangulaire mesure {lo} m de long et {h} m de haut. Un pot de peinture couvre {l1} m². Combien de pots faut-il pour peindre deux couches ?",
          [f"Aire du mur : ${lo} \\times {h} = {lo * h}$ m².", f"Deux couches : $2 \\times {lo * h} = {2 * lo * h}$ m².",
           f"${2 * lo * h} \\div {l1} = {2 * lo * h // l1}$."], f"${2 * lo * h // l1}$ pots")
    L.add("probleme", "problemes",
          "Une cuisine rectangulaire de 4 m sur 3 m est carrelée avec des dalles carrées de 50 cm de côté. Combien faut-il de dalles ?",
          ["Dans 4 m il y a $8$ fois 50 cm, et dans 3 m $6$ fois 50 cm.", f"$8 \\times 6 = {48}$ dalles."], f"${48}$ dalles")
    L.add("probleme", "problemes",
          "Un carton a la forme d'un pavé droit de 30 cm sur 20 cm et 10 cm de haut. Combien de cubes de 10 cm d'arête peut-on y ranger ?",
          [f"$3$ cubes en longueur, $2$ en largeur, $1$ en hauteur : $3 \\times 2 \\times 1 = {6}$."], f"${6}$ cubes")
    L.add("probleme", "problemes",
          "Une piscine a la forme d'un pavé droit de 10 m de long, 5 m de large et 2 m de profondeur. Quel est son volume ? Combien de litres d'eau faut-il pour la remplir ?",
          [f"$V = 10 \\times 5 \\times 2 = {100}$ m³.", f"$1$ m³ $= 1000$ L, donc ${100} \\times 1000 = {m(100 * 1000)}$ L."],
          f"${100}$ m³, soit ${m(100000)}$ L")
    L.add("probleme", "problemes",
          "Combien de boîtes de 20 cm sur 10 cm sur 5 cm peut-on ranger dans un carton de 40 cm sur 30 cm sur 20 cm, en les posant toutes dans le même sens ?",
          [f"En longueur : $40 \\div 20 = 2$ ; en largeur : $30 \\div 10 = 3$ ; en hauteur : $20 \\div 5 = 4$.", f"$2 \\times 3 \\times 4 = {24}$."],
          f"${24}$ boîtes")
    L.add("probleme", "problemes",
          "Un terrain carré de 30 m de côté est entouré d'une haie, sauf à l'endroit d'un portail de 4 m. Quelle est la longueur de la haie ?",
          [f"Périmètre : $4 \\times 30 = {120}$ m.", f"Sans le portail : ${120} - 4 = {116}$ m."], f"${116}$ m")
    return L.fin()


# =====================================================================
#  CM2 — Angles et mesures
# =====================================================================

def gen_cm2_angles():
    L = Lot()
    for i, a in enumerate([20, 90, 145, 180, 60, 100, 89, 175, 91]):
        L.add("application" if i < 6 else "intermediaire", "nature-angle",
              f"Un angle mesure {deg(a)}. Est-il aigu, droit, obtus ou plat ?", [_justif_nature(a)], _nature(a))
    for a in [35, 72, 15, 48, 81, 27]:
        L.add("application", "completer-angle-droit",
              f"Un angle droit est partagé en deux angles. L'un mesure {deg(a)}. Combien mesure l'autre ?",
              [f"$90 - {a} = {90 - a}$."], deg(90 - a))
    for a in [40, 125, 63, 110, 17, 158]:
        L.add("intermediaire", "completer-angle-plat",
              f"Deux angles placés côte à côte forment un angle plat. L'un mesure {deg(a)}. Combien mesure l'autre ? Quelle est sa nature ?",
              [f"$180 - {a} = {180 - a}$.", _justif_nature(180 - a)], f"{deg(180 - a)}, {_nature(180 - a)}")
    for t in [(35, 55), (60, 70), (45, 45), (25, 40, 50), (100, 80), (30, 30, 30), (110, 35)]:
        s = sum(t)
        L.add("intermediaire", "additionner-des-angles",
              "On place côte à côte des angles de " + ", ".join(deg(a) for a in t[:-1]) + f" et {deg(t[-1])}. Quel angle obtient-on ? Quelle est sa nature ?",
              [f"${' + '.join(map(str, t))} = {s}$.", _justif_nature(s)], f"{deg(s)}, angle {_nature(s)}")
    for x in [40, 130, 25, 155, 70, 115, 50]:
        autre = 180 - x
        nat = _nature(x)
        L.add("approfondissement", "lire-un-rapporteur",
              f"Sur un rapporteur, la demi-droite passe en face des nombres {min(x, autre)} et {max(x, autre)} (les deux graduations). On voit que l'angle est {nat}. Quelle est sa mesure ?",
              ["Les deux graduations du rapporteur donnent deux nombres dont la somme vaut $180$.",
               f"L'angle est {nat}, donc il mesure {'moins' if nat == 'aigu' else 'plus'} de $90^\\circ$ : c'est {deg(x)}."],
              deg(x))
    for k in [4, 6, 8, 12]:
        L.add("intermediaire", "partager-un-tour",
              f"On partage un tour complet en {k} angles égaux. Combien mesure chaque angle ?",
              [f"$360 \\div {k} = {360 // k}$."], deg(360 // k))
    for (a, cible, nom) in [(30, 90, "un angle droit"), (30, 180, "un angle plat"), (45, 360, "un tour complet"), (20, 180, "un angle plat")]:
        L.add("approfondissement", "partager-un-tour",
              f"Combien d'angles de {deg(a)} faut-il placer côte à côte pour obtenir {nom} ?",
              [f"${cible} \\div {a} = {cible // a}$."], f"${cible // a}$")
    for h in [1, 4, 6, 3]:
        ang = 30 * min(h, 12 - h)
        L.add("probleme", "horloge",
              f"À {h} h pile, quel angle forment les aiguilles d'une horloge ? Donne sa mesure et sa nature.",
              ["Entre deux nombres voisins du cadran : $360 \\div 12 = 30^\\circ$.",
               f"À {h} h : ${min(h, 12 - h)} \\times 30 = {ang}$.", _justif_nature(ang)],
              f"{deg(ang)}, {_nature(ang)}")
    for mn in [15, 20, 45]:
        ang = 6 * mn
        L.add("probleme", "horloge",
              f"De combien de degrés tourne la grande aiguille d'une horloge en {mn} minutes ?",
              ["En 60 minutes, la grande aiguille fait un tour complet ($360^\\circ$).", f"En 1 minute : $360 \\div 60 = 6^\\circ$.",
               f"En {mn} minutes : ${mn} \\times 6 = {ang}$."], deg(ang))
    return L.fin()


# =====================================================================
#  CM2 — Calcul mental
# =====================================================================

def _decalage(k):
    return "d'un rang" if k == 10 else f"de {len(str(k)) - 1} rangs"


def gen_cm2_calcul_mental():
    L = Lot()
    F = Fraction
    for (a, b) in [(47, 99), (256, 99), (138, 19), (74, 29), (365, 98)]:
        rond = arrondi(b, 10) if b < 90 else 100
        ecart = rond - b
        L.add("application", "nombres-presque-ronds", f"Calcule mentalement : ${a} + {b}$.",
              [f"On ajoute ${rond}$ puis on enlève ${ecart}$ : ${a} + {rond} = {a + rond}$, puis ${a + rond} - {ecart} = {a + b}$."], f"${a + b}$")
    for (a, b) in [(202, 99), (431, 29), (150, 49)]:
        rond = b + 1
        L.add("intermediaire", "nombres-presque-ronds", f"Calcule mentalement : ${a} - {b}$.",
              [f"On enlève ${rond}$ puis on rajoute $1$ : ${a} - {rond} = {a - rond}$, puis ${a - rond} + 1 = {a - b}$."], f"${a - b}$")
    for x in [60, 35, 72, 18]:
        L.add("application", "complements", f"Quel est le complément à $100$ de ${x}$ ?", [f"${x} + {100 - x} = 100$."], f"${100 - x}$")
    for x in [450, 725, 380]:
        L.add("intermediaire", "complements", f"Quel est le complément à $1000$ de ${x}$ ?", [f"${x} + {1000 - x} = 1000$."], f"${1000 - x}$")
    for x in [F(36, 10), F(72, 10)]:
        L.add("approfondissement", "complements", f"Combien faut-il ajouter à ${ld(x)}$ pour obtenir $10$ ?",
              [f"${ld(x)} + {ld(10 - x)} = 10$."], f"${ld(10 - x)}$")
    for x in [35, 250, 1400, 48]:
        L.add("application", "doubles-et-moities", f"Quel est le double de ${m(x)}$ ?", [f"${m(x)} + {m(x)} = {m(2 * x)}$."], f"${m(2 * x)}$")
    for x in [48, 130, 1500, 7]:
        h = F(x, 2)
        L.add("application" if x % 2 == 0 else "intermediaire", "doubles-et-moities", f"Quelle est la moitié de ${m(x)}$ ?",
              [f"${ld(h)} + {ld(h)} = {m(x)}$."], f"${ld(h)}$")
    for (x, k) in [(F(35, 10), 10), (F(27, 100), 100), (F(46, 10), 1000), (48, 100)]:
        L.add("intermediaire", "multiplier-par-10-100-1000", f"Calcule : ${ld(x)} \\times {m(k)}$.",
              [f"Multiplier par ${m(k)}$ décale chaque chiffre {_decalage(k)} vers la gauche."],
              f"${ld(x * k)}$")
    for (x, k) in [(350, 10), (4200, 100)]:
        L.add("intermediaire", "multiplier-par-10-100-1000", f"Calcule : ${m(x)} \\div {k}$.",
              [f"Diviser par ${k}$ décale chaque chiffre {_decalage(k)} vers la droite."], f"${m(x // k)}$")
    astuces = [(15, 4, "On double, puis on double encore : {a} → {d} → {r}."),
               (23, 4, "On double, puis on double encore : {a} → {d} → {r}."),
               (12, 5, "On multiplie par 10, puis on prend la moitié : {a10} → {r}."),
               (46, 5, "On multiplie par 10, puis on prend la moitié : {a10} → {r}."),
               (7, 9, "On multiplie par 10, puis on enlève le nombre : {a10} − {a} = {r}."),
               (16, 25, "On multiplie par 100, puis on divise par 4 : {a100} ÷ 4 = {r}."),
               (24, 25, "On multiplie par 100, puis on divise par 4 : {a100} ÷ 4 = {r}."),
               (32, 11, "On multiplie par 10, puis on ajoute le nombre : {a10} + {a} = {r}."),
               (18, 50, "On multiplie par 100, puis on prend la moitié : {a100} → {r}.")]
    for (a, b, mod) in astuces:
        r = a * b
        L.add("intermediaire" if b in (4, 5, 9) else "approfondissement", "astuces-de-multiplication",
              f"Calcule mentalement : ${a} \\times {b}$.",
              [mod.format(a=a, d=2 * a, r=tx(r), a10=10 * a, a100=tx(100 * a))], f"${m(r)}$")
    for (a, b) in [(24, 5), (13, 12), (15, 14), (21, 17), (102, 8)]:
        if a > 100:
            d1, d2 = 100, a - 100
            corr = f"${a} \\times {b} = (100 \\times {b}) + ({d2} \\times {b}) = {100 * b} + {d2 * b} = {a * b}$."
        elif b >= 10:
            d1, d2 = 10, b - 10
            corr = f"${a} \\times {b} = ({a} \\times 10) + ({a} \\times {d2}) = {10 * a} + {a * d2} = {a * b}$."
        else:
            d1, d2 = a // 10 * 10, a % 10
            corr = f"${a} \\times {b} = ({d1} \\times {b}) + ({d2} \\times {b}) = {d1 * b} + {d2 * b} = {a * b}$."
        L.add("approfondissement", "decomposer", f"Calcule mentalement ${a} \\times {b}$ en décomposant un des nombres.", [corr], f"${a * b}$")
    pbs = [("Léa paie un livre de 63 € avec un billet de 100 €. Combien lui rend-on ?", "On cherche le complément de 63 à 100 : $63 + 37 = 100$.", "$37$ €"),
           ("Un vélo coûte 199 € et un casque 49 €. Quel est le prix total ?", "$199 + 49 = 200 + 50 - 2 = 248$.", "$248$ €"),
           ("8 places de concert coûtent 25 € chacune. Quel est le prix total ?", "$8 \\times 25 = 8 \\times 100 \\div 4 = 800 \\div 4 = 200$.", "$200$ €"),
           ("Une école achète 49 dictionnaires à 9 € l'un. Quel est le prix total ?",
            "$49 \\times 9 = 490 - 49 = 441$ (on multiplie par 10, puis on enlève 49).", "$441$ €"),
           ("Tom a 500 € d'économies. Il dépense la moitié, puis la moitié de ce qui reste. Combien lui reste-t-il ?",
            "Moitié de 500 : 250 ; moitié de 250 : 125.", "$125$ €")]
    assert 63 + 37 == 100 and 199 + 49 == 248 and 8 * 25 == 200 and 49 * 9 == 441 and 500 // 4 == 125
    for (en, c, r) in pbs:
        L.add("probleme", "problemes", en, [c], r)
    return L.fin()


# =====================================================================
#  CM2 — Division posée
# =====================================================================

def gen_cm2_division():
    L = Lot()
    rng = random.Random(2203)

    def f_un(r):
        d = r.randint(3, 9)
        n = r.randint(1000, 9999)
        q, rr = divmod(n, d)
        if "0" in str(q):
            return None
        return ("application", f"Pose et effectue la division euclidienne de ${m(n)}$ par ${d}$.",
                etapes_division(n, d) + [f"Donc ${m(n)} = {d} \\times {m(q)} + {rr}$."], f"quotient ${m(q)}$, reste ${rr}$")
    L.remplir("diviseur-a-un-chiffre", 8, f_un, rng)

    def f_deux(r):
        d = r.randint(12, 48)
        n = r.randint(300, 9999)
        q, rr = divmod(n, d)
        if q < 10:
            return None
        return ("intermediaire", f"Pose et effectue la division euclidienne de ${m(n)}$ par ${d}$.",
                etapes_division(n, d) + [f"Preuve : ${d} \\times {m(q)} + {rr} = {m(n)}$ et ${rr} < {d}$."], f"quotient ${m(q)}$, reste ${rr}$")
    L.remplir("diviseur-a-deux-chiffres", 9, f_deux, rng)

    def f_zero(r):
        d = r.randint(3, 9)
        q = r.choice([r.randint(101, 109), r.randint(201, 209) , r.randint(301, 909)])
        if "0" not in str(q):
            return None
        rr = r.randint(0, d - 1)
        n = d * q + rr
        return ("approfondissement", f"Pose et effectue la division de ${m(n)}$ par ${d}$. Attention au zéro dans le quotient !",
                etapes_division(n, d) + [f"Quand le nombre obtenu est plus petit que ${d}$, on écrit $0$ au quotient.",
                                         f"Donc ${m(n)} = {d} \\times {q} + {rr}$."], f"quotient ${q}$, reste ${rr}$")
    L.remplir("zero-au-quotient", 6, f_zero, rng)

    def f_chiffres(r):
        d = r.randint(3, 40)
        n = r.randint(100, 9999)
        q = n // d
        if q == 0:
            return None
        k = len(str(q))
        bas, haut = 10 ** (k - 1), 10 ** k
        return ("intermediaire", f"Sans poser la division, combien de chiffres aura le quotient de ${m(n)}$ par ${d}$ ?",
                [f"${d} \\times {m(bas)} = {m(d * bas)}$ et ${d} \\times {m(haut)} = {m(d * haut)}$.",
                 f"${m(d * bas)} \\leq {m(n)} < {m(d * haut)}$ : le quotient est entre ${m(bas)}$ et ${m(haut)}$."],
                f"{k} chiffre{'s' if k > 1 else ''}")
    L.remplir("estimer-le-quotient", 6, f_chiffres, rng)

    def f_preuve(r):
        d = r.randint(6, 35)
        q = r.randint(12, 150)
        rr = r.randint(0, d - 1)
        n = d * q + rr
        t = r.randint(0, 2)
        if t == 0:
            return ("intermediaire", f"Dans une division, le diviseur est ${d}$, le quotient ${q}$ et le reste ${rr}$. Quel est le dividende ?",
                    [f"Dividende $= {d} \\times {q} + {rr} = {m(d * q)} + {rr} = {m(n)}$."], f"${m(n)}$")
        if t == 1:
            rc = rr + d
            qc = q - 1
            return ("approfondissement", f"Paul trouve que ${m(n)} \\div {d}$ donne ${qc}$, reste ${rc}$. Sa preuve ${d} \\times {qc} + {rc} = {m(n)}$ est juste. A-t-il raison ?",
                    [f"L'égalité est vraie, mais le reste ${rc}$ n'est pas plus petit que ${d}$ : on peut encore faire un groupe.",
                     f"Correction : quotient ${q}$, reste ${rr}$."], f"Non : quotient ${q}$, reste ${rr}$")
        delta = r.choice([-1, 1]) * r.randint(1, 3)
        qf = q + delta
        prod = d * qf + rr
        return ("approfondissement", f"Fais la preuve : la division de ${m(n)}$ par ${d}$ donne-t-elle ${qf}$, reste ${rr}$ ?",
                [f"${d} \\times {qf} + {rr} = {m(prod)}$, ce n'est pas ${m(n)}$.", f"Bonne réponse : ${m(n)} = {d} \\times {q} + {rr}$."],
                f"Non : quotient ${q}$, reste ${rr}$")
    L.remplir("preuve", 7, f_preuve, rng)
    for (a, b) in [(7, 4), (9, 2), (13, 5), (21, 4), (45, 6), (19, 4)]:
        q = Fraction(a, b)
        e, rr = divmod(a, b)
        L.add("approfondissement", "quotient-decimal", f"Calcule le quotient décimal exact de ${a} \\div {b}$.",
              [f"${a} = {b} \\times {e} + {rr}$ : on écrit ${e}$ puis une virgule, et on continue en ajoutant des zéros au reste.",
               f"Vérification : ${b} \\times {ld(q)} = {a}$."], f"${ld(q)}$")

    def f_pb(r):
        t = r.randint(0, 4)
        if t == 0:
            d = r.choice([45, 50, 52, 55]); n = r.randint(200, 700)
            q, rr = divmod(n, d)
            if rr == 0:
                return None
            return ("probleme", f"{n} personnes doivent voyager en car. Chaque car a {d} places. Combien de cars faut-il au minimum ?",
                    [f"${n} = {d} \\times {q} + {rr}$.", f"Les {rr} {pl(rr, 'personne restante', 'personnes restantes')} ont besoin d'un car de plus : ${q + 1}$."],
                    f"${q + 1}$ cars")
        if t == 1:
            j = r.randint(12, 30); p = r.randint(8, 25) * j
            return ("probleme", f"Un livre a {p} pages. Inès veut le lire en {j} jours en lisant le même nombre de pages chaque jour. Combien de pages par jour ?",
                    [f"${p} \\div {j} = {p // j}$."], f"${p // j}$ pages")
        if t == 2:
            d = r.choice([12, 15, 24]); n = r.randint(300, 1500)
            q, rr = divmod(n, d)
            return ("probleme", f"Une usine range {tx(n)} yaourts par paquets de {d}. Combien de paquets complets obtient-elle ? Combien de yaourts restent ?",
                    [f"${m(n)} = {d} \\times {q} + {rr}$."], f"${q}$ paquets, ${rr}$ {pl(rr, 'yaourt restant', 'yaourts restants')}")
        if t == 3:
            n = r.randint(18, 30); s = n * r.randint(15, 40)
            return ("probleme", f"Une sortie coûte {tx(s)} € pour une classe de {n} élèves. Combien chaque élève doit-il payer ?",
                    [f"${m(s)} \\div {n} = {s // n}$."], f"${s // n}$ €")
        n = r.randint(500, 3000)
        q, rr = divmod(n, 60)
        return ("probleme", f"Un film d'animation dure {tx(n)} secondes. Combien cela fait-il de minutes et de secondes ?",
                [f"$1$ min $= 60$ s : ${m(n)} = 60 \\times {q} + {rr}$."], f"{q} min {rr} s")
    L.remplir("problemes", 8, f_pb, rng)
    return L.fin()


# =====================================================================
#  CM2 — Fractions et opérations
# =====================================================================

def gen_cm2_fractions():
    L = Lot()
    F = Fraction
    for (a, b, n) in [(1, 4, 20), (3, 4, 20), (2, 5, 35), (5, 6, 42), (3, 8, 64), (7, 10, 90), (2, 3, 51), (4, 9, 72)]:
        part = n // b
        L.add("application" if a == 1 else "intermediaire", "fraction-d-une-quantite", f"Calcule ${fl(a, b)}$ de ${n}$.",
              [f"On divise par le dénominateur : ${n} \\div {b} = {part}$."] + ([f"On multiplie par le numérateur : ${a} \\times {part} = {a * part}$."] if a > 1 else []),
              f"${a * part}$")
    for (a, b) in [(1, 2), (1, 4), (3, 4), (7, 10), (25, 100), (3, 5), (9, 100), (13, 10)]:
        x = F(a, b)
        if b in (10, 100):
            c = f"${fl(a, b)}$, c'est ${a}$ {'dixièmes' if b == 10 else 'centièmes'}."
        else:
            k = 100 // b
            c = f"${fl(a, b)} = {fl(a * k, b * k)} = {ld(x)}$."
        L.add("application" if b in (10, 100) else "intermediaire", "ecriture-decimale",
              f"Donne l'écriture décimale de ${fl(a, b)}$.", [c], f"${ld(x)}$")
    for ((a, b), (c_, d)) in [((3, 4), (1, 4)), ((5, 8), (7, 8)), ((1, 4), (1, 2)), ((2, 3), (2, 5)),
                              ((3, 4), (5, 8)), ((7, 6), (1, 1)), ((1, 2), (5, 10)), ((4, 5), (7, 10))]:
        x, y = F(a, b), F(c_, d)
        s = "<" if x < y else (">" if x > y else "=")
        if d == 1:
            c = "Le numérateur est plus grand que le dénominateur : la fraction est plus grande que 1."
            txt_y = "1"
        else:
            txt_y = fl(c_, d)
            if b == d:
                c = "Même dénominateur : on compare les numérateurs."
            elif a == c_:
                c = "Même numérateur : plus le dénominateur est grand, plus les parts sont petites."
            else:
                D = max(b, d)
                c = f"On écrit les deux fractions avec le dénominateur ${D}$ : ${fl(int(x * D), D)}$ et ${fl(int(y * D), D)}$."
        L.add("intermediaire", "comparer", f"Compare ${fl(a, b)}$ et ${txt_y}$.", [c], f"${fl(a, b)} {s} {txt_y}$")
    for (a, c, b, op) in [(1, 2, 5, "+"), (3, 2, 8, "+"), (4, 5, 7, "+"), (5, 4, 6, "+"), (7, 3, 9, "-"), (9, 4, 10, "-"), (11, 5, 8, "-"), (2, 3, 4, "+")]:
        r = a + c if op == "+" else a - c
        corr = [f"Même dénominateur : on {'ajoute' if op == '+' else 'soustrait'} les numérateurs et on garde le dénominateur : ${fl(a, b)} {op} {fl(c, b)} = {fl(r, b)}$."]
        rep = f"${fl(r, b)}$"
        if r > b:
            e, rr = divmod(r, b)
            corr.append(f"${fl(r, b)} = {e} + {fl(rr, b)}$.")
            rep = f"${fl(r, b)}$ (soit ${e} + {fl(rr, b)}$)"
        elif r == b:
            corr.append(f"${fl(r, b)} = 1$.")
            rep = f"${fl(r, b)} = 1$"
        L.add("application" if op == "+" else "intermediaire", "additionner-soustraire",
              f"Calcule : ${fl(a, b)} {op} {fl(c, b)}$.", corr, rep)
    for (a, b, k, cache) in [(3, 4, 3, "num"), (2, 5, 4, "num"), (1, 3, 6, "den"), (5, 6, 2, "num"), (7, 10, 10, "den"), (3, 8, 5, "num"), (4, 7, 3, "den")]:
        if cache == "num":
            en = f"Complète : ${fl(a, b)} = \\dfrac{{\\dots}}{{{b * k}}}$."
            rep = f"${fl(a * k, b * k)}$"
            c = f"${b} \\times {k} = {b * k}$, donc on multiplie aussi le numérateur par ${k}$ : ${a} \\times {k} = {a * k}$."
        else:
            en = f"Complète : ${fl(a, b)} = \\dfrac{{{a * k}}}{{\\dots}}$."
            rep = f"${fl(a * k, b * k)}$"
            c = f"${a} \\times {k} = {a * k}$, donc on multiplie aussi le dénominateur par ${k}$ : ${b} \\times {k} = {b * k}$."
        L.add("intermediaire", "fractions-egales", en, [c], rep)
    for (a, b, c, d) in [(1, 2, 1, 4), (1, 3, 1, 6), (3, 4, 1, 8), (1, 2, 3, 10), (2, 5, 3, 10)]:
        k = d // b
        r = a * k + c
        L.add("approfondissement", "denominateurs-lies", f"Calcule : ${fl(a, b)} + {fl(c, d)}$.",
              [f"On écrit ${fl(a, b)} = {fl(a * k, d)}$ (on multiplie en haut et en bas par ${k}$).",
               f"${fl(a * k, d)} + {fl(c, d)} = {fl(r, d)}$."], f"${fl(r, d)}$")
    pbs = []
    n, a, b = 240, 2, 5
    lu = n // b * a
    pbs.append((f"Un livre a {n} pages. Hugo en a lu les ${fl(a, b)}$. Combien de pages lui reste-t-il à lire ?",
                [f"Pages lues : ${n} \\div {b} \\times {a} = {lu}$.", f"Reste : ${n} - {lu} = {n - lu}$."], f"${n - lu}$ pages"))
    pbs.append((f"Une bouteille contient ${fl(3, 4)}$ L de jus. On en boit ${fl(1, 4)}$ L. Combien en reste-t-il ?",
                [f"${fl(3, 4)} - {fl(1, 4)} = {fl(2, 4)}$, soit $0{{,}}5$ L."], f"${fl(2, 4)}$ L (soit $0{{,}}5$ L)"))
    pbs.append((f"Lina mange ${fl(1, 8)}$ d'une tarte et son frère ${fl(3, 8)}$. Quelle fraction de la tarte ont-ils mangée ensemble ? Quelle fraction reste-t-il ?",
                [f"${fl(1, 8)} + {fl(3, 8)} = {fl(4, 8)}$.", f"Reste : ${fl(8, 8)} - {fl(4, 8)} = {fl(4, 8)}$, la moitié."],
                f"ils en ont mangé ${fl(4, 8)}$ ; il en reste ${fl(4, 8)}$"))
    pbs.append((f"Un randonneur a parcouru la moitié d'un sentier le matin et le quart l'après-midi. Quelle fraction du sentier a-t-il parcourue ?",
                [f"${fl(1, 2)} = {fl(2, 4)}$, donc ${fl(2, 4)} + {fl(1, 4)} = {fl(3, 4)}$."], f"${fl(3, 4)}$ du sentier"))
    pbs.append((f"Dans une classe de 28 élèves, les ${fl(3, 7)}$ sont des filles. Combien y a-t-il de garçons ?",
                [f"Filles : $28 \\div 7 \\times 3 = {28 // 7 * 3}$.", f"Garçons : $28 - {28 // 7 * 3} = {28 - 28 // 7 * 3}$."],
                f"${28 - 28 // 7 * 3}$ garçons"))
    pbs.append((f"Un pot de peinture de 5 L est utilisé aux ${fl(3, 10)}$. Combien de litres a-t-on utilisés ?",
                [f"Un dixième de 5 L : $5 \\div 10 = 0{{,}}5$ L.", f"Trois dixièmes : $3 \\times 0{{,}}5 = {ld(F(15, 10))}$ L."], f"${ld(F(15, 10))}$ L"))
    for (en, c, r) in pbs:
        L.add("probleme", "problemes", en, c, r)
    return L.fin()


EXTRA = {
    ("cm1", "angles"): gen_cm1_angles,
    ("cm1", "cercle-triangles-perimetre-aire"): gen_cm1_cercle,
    ("cm1", "division-euclidienne"): gen_cm1_division,
    ("cm1", "durees"): gen_cm1_durees,
    ("cm1", "fractions"): gen_cm1_fractions,
    ("cm1", "grands-nombres"): gen_cm1_grands_nombres,
    ("cm1", "multiplication-posee"): gen_cm1_multiplication,
    ("cm1", "nombres-decimaux"): gen_cm1_nombres_decimaux,
    ("cm1", "operations-decimaux"): gen_cm1_operations_decimaux,
    ("cm1", "proportionnalite"): gen_cm1_proportionnalite,
    ("cm1", "symetrie-axiale"): gen_cm1_symetrie,
    ("cm1", "tableaux-et-graphiques"): gen_cm1_tableaux,
    ("cm2", "aires-perimetres-volumes"): gen_cm2_aires_volumes,
    ("cm2", "angles-et-mesures"): gen_cm2_angles,
    ("cm2", "calcul-mental"): gen_cm2_calcul_mental,
    ("cm2", "division-posee"): gen_cm2_division,
    ("cm2", "fractions-et-operations"): gen_cm2_fractions,
}
