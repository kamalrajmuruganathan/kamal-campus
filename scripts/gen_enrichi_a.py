# -*- coding: utf-8 -*-
"""Lot a : générateurs enrichis pour les maths du CP, du CE1 et du CE2.

Chaque fonction renvoie 50 exercices variés (au moins 5 notions, 3 niveaux de
difficulté), toutes les réponses étant calculées par le code. Déterministe :
chaque générateur crée son propre random.Random(graine fixe).
"""
import random

NB = "\u00a0"  # espace insécable (milliers, hors formule)
LD = "\\ldots"


# ---------------------------------------------------------------- aides
def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}


def _fin(E):
    E = E[:50]
    return [exo(i + 1, *t) for i, t in enumerate(E)]


def nl(n):
    """Nombre entier pour une formule (milliers séparés par \\,)."""
    return f"{n:,}".replace(",", "\\,") if n >= 1000 else str(n)


def nt(n):
    """Nombre entier hors formule (milliers séparés par une espace insécable)."""
    return f"{n:,}".replace(",", NB) if n >= 1000 else str(n)


def F(s):
    return f"${s}$"


PRENOMS = [("Léa", "f"), ("Tom", "m"), ("Rose", "f"), ("Paul", "m"), ("Jade", "f"),
           ("Nathan", "m"), ("Chloé", "f"), ("Lucas", "m"), ("Nina", "f"), ("Malo", "m"),
           ("Zoé", "f"), ("Louis", "m"), ("Lina", "f"), ("Sami", "m"), ("Manon", "f"),
           ("Noé", "m"), ("Camille", "f"), ("Jules", "m")]

# (singulier, pluriel, genre) : uniquement des mots qui commencent par une consonne
OBJETS = [("bille", "billes", "f"), ("bonbon", "bonbons", "m"), ("carte", "cartes", "f"),
          ("crayon", "crayons", "m"), ("perle", "perles", "f"), ("timbre", "timbres", "m"),
          ("coquillage", "coquillages", "m"), ("livre", "livres", "m"),
          ("ballon", "ballons", "m"), ("fleur", "fleurs", "f"), ("feutre", "feutres", "m"),
          ("gommette", "gommettes", "f"), ("marron", "marrons", "m"), ("figurine", "figurines", "f")]


# objets que l'on peut avoir par centaines (collections)
OBJETS_NOMBREUX = [("perle", "perles", "f"), ("timbre", "timbres", "m"), ("carte", "cartes", "f"),
                   ("gommette", "gommettes", "f"), ("bille", "billes", "f"), ("coquillage", "coquillages", "m")]


def _objs(objs, vmax):
    return objs or (OBJETS if vmax <= 30 else OBJETS_NOMBREUX)


def q(n, o):
    """« 1 bille », « 0 bille », « 3 billes »."""
    return f"{nt(n)} {o[0] if n <= 1 else o[1]}"


def il(p):
    return "elle" if p[1] == "f" else "il"


def Il(p):
    return "Elle" if p[1] == "f" else "Il"


def _de(mot):
    return ("d'" if mot[0] in "aeiouéèêh" else "de ") + mot


def deux(r):
    a, b = r.sample(PRENOMS, 2)
    return a, b


def assemble(graine, specs):
    """specs = [(fonction(r) -> (diff, notion, enonce, corrige, reponse), nombre), ...]"""
    r = random.Random(graine)
    E, vus = [], set()
    for fn, n in specs:
        k = essais = 0
        while k < n:
            essais += 1
            if essais > 4000:
                raise RuntimeError(f"pas assez d'énoncés distincts ({fn.__name__}, graine {graine})")
            t = fn(r)
            if t is None or t[2] in vus:
                continue
            vus.add(t[2])
            E.append(t)
            k += 1
    if len(E) != 50:
        raise RuntimeError(f"{len(E)} exercices au lieu de 50 (graine {graine})")
    return _fin(E)


def de_liste(items):
    def f(r):
        return r.choice(items)
    return f


def compte(depart, pas, sens=1):
    """« 7, 8, 9 » : les nombres dits en avançant (ou reculant) de `pas` crans."""
    return ", ".join(str(depart + sens * i) for i in range(1, pas + 1))


# ------------------------------------------------ nombres en lettres (1990)
_U = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
      "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"]
_D = {2: "vingt", 3: "trente", 4: "quarante", 5: "cinquante", 6: "soixante"}


def _moins_de_100(n):
    if n < 20:
        return _U[n]
    d, u = divmod(n, 10)
    if d == 7:
        return "soixante-et-onze" if n == 71 else "soixante-" + _U[n - 60]
    if d == 8:
        return "quatre-vingts" if u == 0 else "quatre-vingt-" + _U[u]
    if d == 9:
        return "quatre-vingt-" + _U[n - 80]
    if u == 0:
        return _D[d]
    if u == 1:
        return _D[d] + "-et-un"
    return _D[d] + "-" + _U[u]


def lettres(n):
    """Écriture en lettres (orthographe de 1990, traits d'union), 0 ≤ n ≤ 10 000."""
    if n == 0:
        return "zéro"
    parts = []
    m, reste = divmod(n, 1000)
    if m:
        parts.append("mille" if m == 1 else _moins_de_100(m) + "-mille")
    c, r2 = divmod(reste, 100)
    if c:
        parts.append("cent" if c == 1 else _U[c] + "-cent" + ("s" if r2 == 0 else ""))
    if r2:
        parts.append(_moins_de_100(r2))
    return "-".join(parts)


# ---------------------------------------------- petits problèmes partagés
def pb_ajout(r, amin, amax, smax, diff="probleme", notion="probleme-ajout", objs=None):
    p = r.choice(PRENOMS); o = r.choice(_objs(objs, smax))
    a = r.randint(amin, amax)
    if smax - a < 1:
        return None
    b = r.randint(1, min(smax - a, max(1, amax)))
    s = a + b
    verbe = r.choice(["gagne", "reçoit", "trouve"])
    e = f"{p[0]} a {q(a, o)}. {Il(p)} en {verbe} {b}. Combien de {o[1]} a-t-{il(p)} maintenant ?"
    return (diff, notion, e,
            [f"{Il(p)} {verbe} des {o[1]} : on ajoute.", F(f"{nl(a)} + {nl(b)} = {nl(s)}") + "."],
            f"{p[0]} a {q(s, o)}.")


def pb_retrait(r, amin, amax, diff="probleme", notion="probleme-retrait", objs=None):
    p, p2 = deux(r); o = r.choice(_objs(objs, amax))
    a = r.randint(amin, amax); b = r.randint(1, a - 1)
    d = a - b
    cas = r.choice(["donne", "perd", "prête"])
    if cas == "perd":
        e = f"{p[0]} a {q(a, o)}. {Il(p)} en perd {b}. Combien lui en reste-t-il ?"
    else:
        e = f"{p[0]} a {q(a, o)}. {Il(p)} en {cas} {b} à {p2[0]}. Combien lui en reste-t-il ?"
    return (diff, notion, e,
            [f"{Il(p)} en a moins qu'au début : on enlève.", F(f"{nl(a)} - {nl(b)} = {nl(d)}") + "."],
            f"Il lui reste {q(d, o)}.")


def pb_ecart(r, amin, amax, diff="probleme", notion="probleme-ecart", objs=None):
    p, p2 = deux(r); o = r.choice(_objs(objs, amax))
    a = r.randint(amin, amax); b = r.randint(max(0, amin // 2), a - 1)
    d = a - b
    e = (f"{p[0]} a {q(a, o)} et {p2[0]} en a {b}. "
         f"Combien de {o[1]} {p[0]} a-t-{il(p)} de plus que {p2[0]} ?")
    return (diff, notion, e,
            ["On cherche l'écart entre les deux nombres : on soustrait.",
             F(f"{nl(a)} - {nl(b)} = {nl(d)}") + "."],
            f"{p[0]} a {q(d, o)} de plus.")


def pb_reunion(r, smax, diff="probleme", notion="probleme-reunion", objs=None):
    o = r.choice(_objs(objs, smax))
    a = r.randint(1, smax - 1); b = r.randint(1, smax - a)
    c1, c2 = r.sample(["rouges", "jaunes", "roses", "orange", "beiges", "mauves"], 2)
    lieu = r.choice(["Dans une boîte", "Sur la table", "Dans un sac", "Dans un panier"])
    e = f"{lieu}, il y a {q(a, o)} {c1 if a > 1 or c1 == 'orange' else c1[:-1]} et {q(b, o)} {c2 if b > 1 or c2 == 'orange' else c2[:-1]}. Combien de {o[1]} y a-t-il en tout ?"
    return (diff, notion, e,
            ["On met ensemble les deux groupes : on ajoute.", F(f"{nl(a)} + {nl(b)} = {nl(a + b)}") + "."],
            f"Il y a {q(a + b, o)} en tout.")


def pb_etat_initial(r, smax, diff="approfondissement", notion="probleme-depart", objs=None):
    p = r.choice(PRENOMS); o = r.choice(_objs(objs, smax))
    s = r.randint(5, smax); b = r.randint(2, max(2, s * 2 // 3))
    a = s - b
    e = (f"{p[0]} avait des {o[1]}. {Il(p)} en gagne {b}. Maintenant, {il(p)} en a {nt(s)}. "
         f"Combien en avait-{il(p)} au début ?")
    return (diff, notion, e,
            [f"Avant de gagner les {b}, {il(p)} en avait {b} de moins : on soustrait.",
             F(f"{nl(s)} - {nl(b)} = {nl(a)}") + ".",
             "Vérification : " + F(f"{nl(a)} + {nl(b)} = {nl(s)}") + "."],
            f"{Il(p)} avait {q(a, o)}.")


def pb_deux_etapes(r, amax, diff="approfondissement", notion="probleme-deux-etapes", objs=None):
    p, p2 = deux(r); o = r.choice(_objs(objs, amax))
    a = r.randint(3, amax - 2); b = r.randint(1, amax - a); c = r.randint(1, a + b - 1)
    s = a + b - c
    e = (f"{p[0]} a {q(a, o)}. {Il(p)} en gagne {b}, puis {il(p)} en donne {c} à {p2[0]}. "
         f"Combien de {o[1]} a-t-{il(p)} à la fin ?")
    return (diff, notion, e,
            ["Étape 1 : " + F(f"{nl(a)} + {nl(b)} = {nl(a + b)}") + ".",
             "Étape 2 : " + F(f"{nl(a + b)} - {nl(c)} = {nl(s)}") + "."],
            f"{Il(p)} a {q(s, o)}.")


# =====================================================================
#                                 CP
# =====================================================================
def _cp_somme_corrige(a, b):
    g, p = max(a, b), min(a, b)
    s = a + b
    c = []
    if p and p <= 4:
        c.append(f"On part du plus grand, {g}, et on avance de {p} : {compte(g, p)}.")
    elif g <= 9 and s > 10:
        c.append(f"On passe par 10 : {g} + {10 - g} = 10, puis 10 + {s - 10} = {s}.")
    c.append(F(f"{a} + {b} = {s}") + ".")
    return c


def gen_cp_addition():
    def simple(r):
        a = r.randint(1, 9); b = r.randint(1, 10 - a)
        return ("application", "addition-jusqu-a-10", f"Calcule : {F(f'{a} + {b}')}.",
                _cp_somme_corrige(a, b), F(a + b))

    def vingt(r):
        if r.random() < 0.5:
            a = r.randint(2, 9); b = r.randint(11 - a, 9)
        else:
            a = r.randint(11, 18); b = r.randint(1, 19 - a)
            if (a % 10) + b > 9:
                return None
        s = a + b
        if a > 10:
            c = [f"On ajoute les unités : {a % 10} + {b} = {a % 10 + b}.", F(f"{a} + {b} = {s}") + "."]
        else:
            c = _cp_somme_corrige(a, b)
        return ("intermediaire", "addition-jusqu-a-20", f"Calcule : {F(f'{a} + {b}')}.", c, F(s))

    def manquant(r):
        s = r.randint(5, 20)
        if s == 10:
            return None
        a = r.randint(max(1, s - 10), s - 1); b = s - a
        return ("intermediaire", "nombre-manquant",
                f"Trouve le nombre qui manque : {F(f'{a} + {LD} = {s}')}.",
                [f"On avance de {a} jusqu'à {s} : cela fait {b} pas.", F(f"{a} + {b} = {s}") + "."], F(b))

    def doubles_compl(r):
        if r.random() < 0.5:
            a = r.randint(1, 10)
            return ("application", "doubles-et-complements", f"Calcule ce double : {F(f'{a} + {a}')}.",
                    [f"C'est le double de {a}.", F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))
        a = r.randint(1, 9)
        return ("application", "doubles-et-complements",
                f"Complète pour faire 10 : {F(f'{a} + {LD} = 10')}.",
                [f"Il manque {10 - a} pour aller de {a} à 10.", F(f"{a} + {10 - a} = 10") + "."], F(10 - a))

    def proprietes(r):
        k = r.randint(0, 4)
        a = r.randint(1, 9); b = r.randint(1, 9)
        s = a + b
        if k == 0 and a != b:
            return ("approfondissement", "proprietes",
                    f"Vrai ou faux : {F(f'{a} + {b}')} donne le même résultat que {F(f'{b} + {a}')}.",
                    ["On peut changer l'ordre des nombres : la somme ne change pas.",
                     F(f"{a} + {b} = {s}") + " et " + F(f"{b} + {a} = {s}") + "."], "Vrai")
        if k == 1:
            a = r.randint(1, 20)
            return ("approfondissement", "proprietes", f"Vrai ou faux : {F(f'{a} + 0 = {a}')}.",
                    ["Ajouter 0, cela ne change rien.", F(f"{a} + 0 = {a}") + "."], "Vrai")
        if k == 2 and s <= 9:
            return ("approfondissement", "proprietes", f"Vrai ou faux : {F(f'{a} + {b} = {a}{b}')}.",
                    ["On ne colle pas les chiffres !", F(f"{a} + {b} = {s}") + "."], "Faux")
        if k == 3:
            return ("approfondissement", "proprietes", f"Vrai ou faux : {F(f'{a} + {b} = {s + 1}')}.",
                    [F(f"{a} + {b} = {s}") + f", et non {s + 1}.",
                     "On a sans doute compté le premier nombre en trop."], "Faux")
        if k == 4 and abs(a - b) >= 4:
            p, g = min(a, b), max(a, b)
            return ("approfondissement", "proprietes",
                    f"Pour calculer {F(f'{p} + {g}')}, par quel nombre vaut-il mieux commencer ? Donne le résultat.",
                    [f"On commence par le plus grand, {g}, et on avance de {p}.", F(f"{p} + {g} = {s}") + "."],
                    f"Par {g} ; " + F(f"{p} + {g} = {s}"))
        return None

    def prob(r):
        return pb_ajout(r, 2, 10, 20, notion="probleme") if r.random() < 0.5 else pb_reunion(r, 20, notion="probleme")

    return assemble(101, [(simple, 10), (doubles_compl, 8), (vingt, 10), (manquant, 8),
                          (proprietes, 6), (prob, 8)])


def gen_cp_soustraction():
    def simple(r):
        a = r.randint(2, 10); b = r.randint(1, a - 1)
        c = [f"On part de {a} et on recule de {b} : {compte(a, b, -1)}."] if b <= 4 else []
        return ("application", "soustraction-jusqu-a-10", f"Calcule : {F(f'{a} - {b}')}.",
                c + [F(f"{a} - {b} = {a - b}") + "."], F(a - b))

    def vingt(r):
        a = r.randint(11, 20); b = r.randint(1, 10)
        d = a - b
        if a == 20:
            c = [f"On cherche combien il faut ajouter à {b} pour aller à 20 : {20 - b}."]
        elif b <= a % 10:
            c = [f"On enlève aux unités : {a % 10} - {b} = {a % 10 - b}."]
        else:
            c = [f"On recule jusqu'à 10 ({a - 10} pas), puis encore de {b - (a - 10)}."]
        return ("intermediaire", "soustraction-jusqu-a-20", f"Calcule : {F(f'{a} - {b}')}.",
                c + [F(f"{a} - {b} = {d}") + "."], F(d))

    def ecart(r):
        a = r.randint(1, 17); b = r.randint(a + 1, min(20, a + 9))
        d = b - a
        c = [f"On avance de {a} à {b} : {compte(a, d)}. Cela fait {d} pas."] if d <= 5 else \
            [f"On avance de {a} à {b} : cela fait {d} pas."]
        return ("intermediaire", "chercher-l-ecart", f"Combien manque-t-il pour aller de {a} à {b} ?",
                c + ["Donc " + F(f"{b} - {a} = {d}") + "."], F(d))

    def verif(r):
        a = r.randint(5, 20); b = r.randint(1, min(a - 1, 10)); d = a - b
        if r.random() < 0.5:
            return ("approfondissement", "verifier-avec-l-addition",
                    f"On sait que {F(f'{a} - {b} = {d}')}. Quelle addition permet de le vérifier ?",
                    ["On ajoute le résultat et le nombre enlevé : on doit retrouver le départ.",
                     F(f"{d} + {b} = {a}") + "."], F(f"{d} + {b} = {a}"))
        faux = d + r.choice([-1, 1])
        juste = r.random() < 0.5
        x = d if juste else faux
        return ("approfondissement", "verifier-avec-l-addition",
                f"Vrai ou faux : {F(f'{a} - {b} = {x}')}. Vérifie avec une addition.",
                [F(f"{x} + {b} = {x + b}") + ".",
                 ("On retrouve " + str(a) + " : c'est juste.") if juste else
                 (f"On ne retrouve pas {a} : c'est faux, car " + F(f"{a} - {b} = {d}") + ".")],
                "Vrai" if juste else "Faux")

    def zero_tout(r):
        a = r.randint(1, 20)
        if r.random() < 0.5:
            return ("application", "enlever-zero-ou-tout", f"Calcule : {F(f'{a} - 0')}.",
                    ["Enlever 0 ne change rien.", F(f"{a} - 0 = {a}") + "."], F(a))
        return ("application", "enlever-zero-ou-tout", f"Calcule : {F(f'{a} - {a}')}.",
                ["Si on enlève tout, il ne reste rien.", F(f"{a} - {a} = 0") + "."], F(0))

    def prob(r):
        return pb_retrait(r, 5, 20, notion="probleme") if r.random() < 0.6 else pb_ecart(r, 6, 20, notion="probleme")

    return assemble(102, [(simple, 10), (zero_tout, 6), (vingt, 10), (ecart, 8), (verif, 8), (prob, 8)])


def gen_cp_calcul_mental():
    def un(r):
        a = r.randint(1, 19)
        if r.random() < 0.5:
            return ("application", "plus-ou-moins-un", f"Calcule de tête : {F(f'{a} + 1')}.",
                    [f"Ajouter 1, c'est aller au nombre juste après {a}.", F(f"{a} + 1 = {a + 1}") + "."], F(a + 1))
        return ("application", "plus-ou-moins-un", f"Calcule de tête : {F(f'{a} - 1')}.",
                [f"Enlever 1, c'est aller au nombre juste avant {a}.", F(f"{a} - 1 = {a - 1}") + "."], F(a - 1))

    def doubles(r):
        a = r.randint(1, 10)
        if r.random() < 0.5:
            return ("application", "doubles", f"Quel est le double de {a} ?",
                    [f"Le double de {a}, c'est {a} + {a}.", F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))
        return ("application", "doubles", f"Calcule de tête : {F(f'{a} + {a}')}.",
                [f"C'est un double à connaître par cœur.", F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))

    def compl(r):
        a = r.randint(1, 9)
        t = r.choice([f"Combien faut-il ajouter à {a} pour faire 10 ?",
                      f"Complète : {F(f'{a} + {LD} = 10')}.",
                      f"Complète : {F(f'{LD} + {a} = 10')}."])
        return ("application", "complements-a-10", t,
                [f"{a} et {10 - a} font 10 (complément à 10).", F(f"{a} + {10 - a} = 10") + "."], F(10 - a))

    def dix(r):
        a = r.randint(0, 9)
        if r.random() < 0.6:
            return ("intermediaire", "ajouter-dix", f"Calcule de tête : {F(f'{a} + 10')}.",
                    ["Ajouter 10, c'est ajouter une dizaine.", F(f"{a} + 10 = {a + 10}") + "."], F(a + 10))
        a = r.randint(1, 8) * 10 + r.randint(0, 9)
        return ("intermediaire", "ajouter-dix", f"Calcule de tête : {F(f'{a} + 10')}.",
                ["Le chiffre des dizaines augmente de 1, les unités ne changent pas.",
                 F(f"{a} + 10 = {a + 10}") + "."], F(a + 10))

    def presque(r):
        a = r.randint(2, 9)
        if r.random() < 0.5:
            b = a + 1; e = F(f"{a} + {b}")
            c = [f"On connaît le double : {a} + {a} = {2 * a}.", f"Puis encore 1 : {2 * a + 1}."]
        else:
            b = a - 1; e = F(f"{a} + {b}")
            c = [f"On connaît le double : {b} + {b} = {2 * b}.", f"Puis encore 1 : {2 * b + 1}."]
        return ("approfondissement", "presque-doubles", f"Calcule de tête en t'aidant d'un double : {e}.",
                c, F(a + b))

    def grand(r):
        p = r.randint(1, 3); g = r.randint(6, 9)
        return ("intermediaire", "commencer-par-le-plus-grand",
                f"Calcule de tête : {F(f'{p} + {g}')}. Par quel nombre commences-tu ?",
                [f"On part du plus grand, {g}, et on avance de {p} : {compte(g, p)}.",
                 F(f"{p} + {g} = {p + g}") + "."], f"Par {g} ; " + F(f"{p} + {g} = {p + g}"))

    def prob(r):
        p = r.choice(PRENOMS)
        k = r.randint(0, 2)
        if k == 0:
            a = r.randint(3, 9)
            return ("probleme", "probleme-calcul-mental",
                    f"{p[0]} a {a} ans. Quel âge aura-t-{il(p)} dans 10 ans ?",
                    ["On ajoute 10.", F(f"{a} + 10 = {a + 10}") + "."], f"{a + 10} ans")
        if k == 1:
            a = r.randint(2, 10)
            return ("probleme", "probleme-calcul-mental",
                    f"{p[0]} a {a} billes dans chaque main. Combien de billes a-t-{il(p)} en tout ?",
                    [f"C'est le double de {a}.", F(f"{a} + {a} = {2 * a}") + "."], f"{2 * a} billes")
        a = r.randint(1, 9)
        return ("probleme", "probleme-calcul-mental",
                f"Une boîte peut contenir 10 œufs. Il y a déjà {q(a, ('œuf', 'œufs'))}. "
                "Combien en faut-il encore pour la remplir ?",
                ["On cherche le complément à 10.", F(f"{a} + {10 - a} = 10") + "."], q(10 - a, ("œuf", "œufs")))

    return assemble(103, [(un, 7), (doubles, 7), (compl, 7), (dix, 7), (grand, 6), (presque, 8), (prob, 8)])


def gen_cp_comparer_ranger():
    def comp(r):
        a = r.randint(0, 20); b = r.randint(0, 20)
        s = "<" if a < b else (">" if a > b else "=")
        mot = {"<": "plus petit que", ">": "plus grand que", "=": "égal à"}[s]
        return ("application", "comparer", f"Compare {F(a)} et {F(b)} : écris $<$, $>$ ou $=$.",
                [f"{a} est {mot} {b}.", F(f"{a} {s} {b}") + "."], F(s))

    def grand_petit(r):
        a, b = r.sample(range(0, 21), 2)
        if r.random() < 0.5:
            return ("application", "plus-grand-plus-petit", f"Quel est le plus grand nombre : {a} ou {b} ?",
                    [f"Sur la bande des nombres, {max(a, b)} est plus à droite."], F(max(a, b)))
        return ("application", "plus-grand-plus-petit", f"Quel est le plus petit nombre : {a} ou {b} ?",
                [f"Sur la bande des nombres, {min(a, b)} est plus à gauche."], F(min(a, b)))

    def croissant(r):
        n = r.choice([3, 4])
        L = r.sample(range(0, 21), n)
        R = sorted(L)
        return ("intermediaire", "ranger-croissant",
                f"Range du plus petit au plus grand : {', '.join(map(str, L))}.",
                ["On cherche le plus petit, puis le plus petit de ceux qui restent…",
                 F(" < ".join(map(str, R))) + "."], ", ".join(map(str, R)))

    def decroissant(r):
        n = r.choice([3, 4])
        L = r.sample(range(0, 21), n)
        R = sorted(L, reverse=True)
        return ("intermediaire", "ranger-decroissant",
                f"Range du plus grand au plus petit : {', '.join(map(str, L))}.",
                ["On cherche le plus grand, puis le plus grand de ceux qui restent…",
                 F(" > ".join(map(str, R))) + "."], ", ".join(map(str, R)))

    def encadrer(r):
        a = r.randint(1, 19)
        return ("intermediaire", "encadrer", f"Encadre {a} : {F(f'{LD} < {a} < {LD}')}.",
                [f"Juste avant {a}, il y a {a - 1} ; juste après, il y a {a + 1}."],
                F(f"{a - 1} < {a} < {a + 1}"))

    def vf(r):
        a, b = r.sample(range(0, 21), 2)
        s = r.choice(["<", ">"])
        juste = (a < b) if s == "<" else (a > b)
        vrai = "<" if a < b else ">"
        return ("approfondissement", "vrai-ou-faux", f"Vrai ou faux : {F(f'{a} {s} {b}')}.",
                ["La pointe du signe montre toujours le plus petit nombre.",
                 F(f"{a} {vrai} {b}") + "."], "Vrai" if juste else "Faux")

    def prob(r):
        p, p2 = deux(r); o = r.choice(OBJETS)
        a, b = r.sample(range(3, 21), 2)
        if r.random() < 0.5:
            g = p if a > b else p2
            return ("probleme", "probleme-comparer",
                    f"{p[0]} a {q(a, o)} et {p2[0]} a {q(b, o)}. Qui en a le plus ?",
                    [F(f"{max(a, b)} > {min(a, b)}") + "."], g[0])
        g = p if a < b else p2
        return ("probleme", "probleme-comparer",
                f"{p[0]} a {q(a, o)} et {p2[0]} a {q(b, o)}. Qui en a le moins ?",
                [F(f"{min(a, b)} < {max(a, b)}") + "."], g[0])

    return assemble(104, [(comp, 10), (grand_petit, 7), (croissant, 8), (decroissant, 7),
                          (encadrer, 7), (vf, 5), (prob, 6)])


def gen_cp_dizaines_unites():
    def decomp(r):
        n = r.randint(11, 99)
        d, u = divmod(n, 10)
        return ("application", "decomposer", f"Dans {n}, combien y a-t-il de dizaines et d'unités ?",
                [f"Le chiffre des dizaines est {d}, celui des unités est {u}.", F(f"{n} = {d * 10} + {u}") + "."],
                f"{d} dizaine{'s' if d > 1 else ''} et {u} unité{'s' if u > 1 else ''}")

    def comp(r):
        d = r.randint(1, 9); u = r.randint(0, 9)
        return ("application", "composer",
                f"Quel nombre a {d} dizaine{'s' if d > 1 else ''} et {u} unité{'s' if u > 1 else ''} ?",
                [F(f"{d * 10} + {u} = {d * 10 + u}") + "."], F(d * 10 + u))

    def additive(r):
        d = r.randint(1, 9); u = r.randint(1, 9)
        if r.random() < 0.5:
            return ("intermediaire", "ecriture-additive", f"Calcule : {F(f'{d * 10} + {u}')}.",
                    [f"{d * 10}, ce sont {d} dizaine{'s' if d > 1 else ''} ; on ajoute {u} unité{'s' if u > 1 else ''}.",
                     F(f"{d * 10} + {u} = {d * 10 + u}") + "."], F(d * 10 + u))
        n = d * 10 + u
        return ("intermediaire", "ecriture-additive",
                f"Complète : {F(f'{n} = {LD} + {u}')}.",
                [f"Dans {n}, il y a {d} dizaine{'s' if d > 1 else ''}, soit {d * 10}.",
                 F(f"{n} = {d * 10} + {u}") + "."], F(d * 10))

    def paquets(r):
        o = r.choice(OBJETS)
        d = r.randint(1, 9); u = r.randint(1, 9)
        seul = ("toute seule" if u == 1 else "toutes seules") if o[2] == "f" else ("tout seul" if u == 1 else "tout seuls")
        return ("probleme", "paquets-de-dix",
                f"Tu as {d} paquet{'s' if d > 1 else ''} de 10 {o[1]} et {q(u, o)} {seul}. "
                f"Combien de {o[1]} as-tu en tout ?",
                [f"{d} paquet{'s' if d > 1 else ''} de 10, cela fait {d * 10}.",
                 F(f"{d * 10} + {u} = {d * 10 + u}") + "."], q(d * 10 + u, o))

    def valeur(r):
        n = r.randint(11, 99)
        d, u = divmod(n, 10)
        if r.random() < 0.6 or u == d:
            return ("approfondissement", "valeur-du-chiffre",
                    f"Dans le nombre {n}, que vaut le chiffre {d} ?",
                    [f"Le chiffre {d} est à gauche : c'est le chiffre des dizaines.",
                     f"Il vaut {d} dizaine{'s' if d > 1 else ''}, c'est-à-dire {d * 10}."], F(d * 10))
        return ("approfondissement", "valeur-du-chiffre",
                f"Dans le nombre {n}, que vaut le chiffre {u} ?",
                [f"Le chiffre {u} est à droite : c'est le chiffre des unités.",
                 f"Il vaut {u} unité{'s' if u > 1 else ''}."], F(u))

    def vf(r):
        d = r.randint(1, 9); u = r.randint(1, 9)
        n = d * 10 + u
        k = r.randint(0, 2)
        if k == 0:
            return ("intermediaire", "vrai-ou-faux", f"Vrai ou faux : {F(f'{d * 10} + {u} = {d * 10}{u}')}.",
                    ["On ne colle pas les nombres.", F(f"{d * 10} + {u} = {n}") + "."], "Faux")
        if k == 1:
            return ("intermediaire", "vrai-ou-faux",
                    f"Vrai ou faux : dans {n}, le chiffre des unités est {d}.",
                    [f"Le chiffre des unités est à droite : c'est {u}."], "Vrai" if d == u else "Faux")
        return ("intermediaire", "vrai-ou-faux",
                f"Vrai ou faux : dans {n}, le chiffre des dizaines est {d}.",
                [f"Le chiffre des dizaines est à gauche : c'est {d}."], "Vrai")

    return assemble(105, [(decomp, 10), (comp, 9), (additive, 8), (vf, 7), (valeur, 8), (paquets, 8)])


# Figures du CP / CE1 : nom -> (côtés, coins)
_FIG = {"carré": (4, 4), "rectangle": (4, 4), "triangle": (3, 3), "cercle": (0, 0)}


def gen_cp_formes():
    def cotes(r):
        f = r.choice(list(_FIG)); c = _FIG[f][0]
        t = r.choice([f"Combien de côtés a un {f} ?", f"Combien de côtés droits possède un {f} ?",
                      f"Je trace un {f}. Combien de côtés vais-je tracer ?"])
        corr = [f"Un cercle est tout rond : il n'a aucun côté droit."] if f == "cercle" else \
               [f"On fait le tour du {f} en comptant chaque côté une seule fois : {c} côtés."]
        return ("application", "compter-les-cotes", t, corr, F(c))

    def coins(r):
        f = r.choice(list(_FIG)); c = _FIG[f][1]
        t = r.choice([f"Combien de coins a un {f} ?", f"Combien de sommets a un {f} ?",
                      f"Combien de coins (sommets) possède un {f} ?"])
        corr = ["Un cercle n'a aucun coin."] if f == "cercle" else \
               [f"Un {f} a {c} coins : on les appelle aussi des sommets."]
        return ("application", "compter-les-coins", t, corr, F(c))

    def reconnaitre(r):
        return r.choice([
            ("intermediaire", "reconnaitre",
             "Je suis une forme plate avec 3 côtés et 3 coins. Qui suis-je ?",
             ["3 côtés et 3 coins : c'est un triangle."], "un triangle"),
            ("intermediaire", "reconnaitre",
             "Je suis une forme plate avec 4 côtés tous de la même longueur. Qui suis-je ?",
             ["4 côtés tous égaux : c'est un carré."], "un carré"),
            ("intermediaire", "reconnaitre",
             "Je suis une forme plate avec 4 côtés : 2 longs et 2 courts. Qui suis-je ?",
             ["4 côtés, 2 longs et 2 courts : c'est un rectangle."], "un rectangle"),
            ("intermediaire", "reconnaitre",
             "Je suis une forme plate toute ronde, sans coin. Qui suis-je ?",
             ["Tout rond, sans coin ni côté droit : c'est un cercle."], "un cercle"),
            ("intermediaire", "reconnaitre",
             "Je n'ai aucun côté droit et aucun coin. Qui suis-je ?",
             ["La seule forme sans côté ni coin est le cercle."], "un cercle"),
            ("intermediaire", "reconnaitre",
             "J'ai 4 coins et mes 4 côtés sont pareils. Suis-je un carré ou un rectangle ?",
             ["Tous les côtés sont égaux : c'est un carré."], "un carré"),
            ("intermediaire", "reconnaitre",
             "J'ai 4 coins, mais mes côtés ne sont pas tous pareils. Suis-je un carré ou un rectangle ?",
             ["Des côtés longs et des côtés courts : c'est un rectangle."], "un rectangle"),
            ("intermediaire", "reconnaitre",
             "Quelle forme plate a le moins de côtés : le triangle ou le carré ?",
             ["Le triangle a 3 côtés, le carré en a 4.", F("3 < 4") + "."], "le triangle"),
            ("intermediaire", "reconnaitre",
             "Quelle forme a exactement 3 coins ?",
             ["Le triangle a 3 coins."], "le triangle"),
        ])

    def objets(r):
        return r.choice([
            ("application", "formes-autour-de-nous", "Une roue de vélo a la forme de quelle figure ?",
             ["Une roue est toute ronde."], "un cercle"),
            ("application", "formes-autour-de-nous", "Une case de damier a la forme de quelle figure ?",
             ["Ses 4 côtés sont pareils."], "un carré"),
            ("application", "formes-autour-de-nous", "Une porte a la forme de quelle figure ?",
             ["Elle a 2 côtés longs et 2 côtés courts."], "un rectangle"),
            ("application", "formes-autour-de-nous", "Une assiette, vue de dessus, a la forme de quelle figure ?",
             ["Elle est toute ronde."], "un cercle"),
            ("application", "formes-autour-de-nous", "Une part de tarte a souvent la forme de quelle figure ?",
             ["Elle a 3 coins, comme un triangle."], "un triangle"),
            ("application", "formes-autour-de-nous", "Une feuille de cahier a la forme de quelle figure ?",
             ["2 côtés longs et 2 côtés courts."], "un rectangle"),
            ("application", "formes-autour-de-nous", "Une pièce de monnaie a la forme de quelle figure ?",
             ["Elle est toute ronde."], "un cercle"),
            ("application", "formes-autour-de-nous", "Un panneau « attention » a la forme de quelle figure ?",
             ["Il a 3 côtés et 3 coins."], "un triangle"),
            ("application", "formes-autour-de-nous", "Un dé à jouer est-il un carré ou un cube ?",
             ["On peut le tenir dans la main, il n'est pas plat : c'est un solide, le cube."], "un cube"),
            ("application", "formes-autour-de-nous", "Un ballon est-il un cercle ou une boule ?",
             ["Il n'est pas plat et il roule dans tous les sens : c'est une boule."], "une boule"),
            ("application", "formes-autour-de-nous", "Une boîte de mouchoirs a la forme de quel solide ?",
             ["C'est une boîte : un pavé."], "un pavé"),
            ("application", "formes-autour-de-nous", "Les faces d'un cube sont des carrés ou des triangles ?",
             ["Toutes les faces d'un cube sont des carrés."], "des carrés"),
        ])

    def vf(r):
        return r.choice([
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un cercle a 4 coins.",
             ["Le cercle est tout rond : il n'a aucun coin."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un triangle a 3 côtés.",
             ["On compte : 1, 2, 3 côtés."], "Vrai"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un rectangle a tous ses côtés de la même longueur.",
             ["Non : il a 2 côtés longs et 2 côtés courts. C'est le carré qui a tous ses côtés égaux."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un carré et un rectangle ont le même nombre de coins.",
             ["Ils ont tous les deux 4 coins."], "Vrai"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un carré a 3 côtés.",
             ["Un carré a 4 côtés."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : une boule peut rouler dans tous les sens.",
             ["La boule est toute ronde : elle roule dans tous les sens."], "Vrai"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un triangle a plus de coins qu'un carré.",
             ["Le triangle a 3 coins, le carré en a 4.", F("3 < 4") + "."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : on peut dessiner un cube à plat comme un carré.",
             ["Le cube est un solide : on le tient dans la main. Le carré est une forme plate."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un cercle a des côtés droits.",
             ["Le cercle est tout rond : il n'a aucun côté droit."], "Faux"),
        ])

    def total(r):
        f1, f2 = r.sample(["carré", "rectangle", "triangle"], 2)
        n1 = r.randint(1, 3); n2 = r.randint(1, 2)
        c1, c2 = _FIG[f1][0], _FIG[f2][0]
        mot = r.choice(["côtés", "coins"])
        termes = [str(c1)] * n1 + [str(c2)] * n2
        tot = n1 * c1 + n2 * c2
        p = r.choice(PRENOMS)
        d1 = f"{n1} {f1}{'s' if n1 > 1 else ''}"
        d2 = f"{n2} {f2}{'s' if n2 > 1 else ''}"
        return ("probleme", "probleme-formes",
                f"{p[0]} dessine {d1} et {d2}. Combien de {mot} y a-t-il en tout ?",
                [f"Un {f1} a {c1} {mot}, un {f2} en a {c2}.", F(" + ".join(termes) + f" = {tot}") + "."],
                f"{tot} {mot}")

    return assemble(106, [(cotes, 7), (coins, 7), (objets, 10), (reconnaitre, 8), (vf, 8), (total, 10)])


JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août",
        "septembre", "octobre", "novembre", "décembre"]


def _apres_avant_mois(m, sens):
    return MOIS[(MOIS.index(m) + sens) % 12]


def gen_cp_temps():
    def jours(r):
        j = r.choice(JOURS); i = JOURS.index(j)
        if r.random() < 0.5:
            a = JOURS[(i + 1) % 7]
            return ("application", "jours-de-la-semaine", f"Quel jour vient juste après {j} ?",
                    [("Après dimanche, on recommence à lundi." if j == "dimanche" else
                      f"Dans l'ordre : … {j}, {a} …")], a)
        a = JOURS[(i - 1) % 7]
        return ("application", "jours-de-la-semaine", f"Quel jour vient juste avant {j} ?",
                [("Avant lundi, il y a dimanche (la semaine d'avant)." if j == "lundi" else
                  f"Dans l'ordre : … {a}, {j} …")], a)

    def mois(r):
        m = r.choice(MOIS)
        if r.random() < 0.5:
            a = _apres_avant_mois(m, 1)
            t = f"Quel mois vient juste après {m} ?"
            c = "Après décembre, une nouvelle année commence en janvier." if m == "décembre" else \
                f"Dans l'ordre : … {m}, {a} …"
        else:
            a = _apres_avant_mois(m, -1)
            t = f"Quel mois vient juste avant {m} ?"
            c = "Avant janvier, il y a décembre (l'année d'avant)." if m == "janvier" else \
                f"Dans l'ordre : … {a}, {m} …"
        return ("application", "mois-de-l-annee", t, [c], a)

    def hier_demain(r):
        j = r.choice(JOURS); i = JOURS.index(j)
        if r.random() < 0.5:
            a = JOURS[(i + 1) % 7]
            return ("intermediaire", "hier-aujourd-hui-demain",
                    f"Aujourd'hui, c'est {j}. Quel jour serons-nous demain ?",
                    ["Demain, c'est le jour d'après.", f"Après {j} vient {a}."], a)
        a = JOURS[(i - 1) % 7]
        return ("intermediaire", "hier-aujourd-hui-demain",
                f"Aujourd'hui, c'est {j}. Quel jour étions-nous hier ?",
                ["Hier, c'est le jour d'avant.", f"Avant {j} vient {a}."], a)

    def heure(r):
        h = r.randint(1, 12)
        k = r.randint(0, 2)
        if k == 0:
            return ("application", "lire-l-heure",
                    f"La petite aiguille est sur le {h} et la grande aiguille est sur le 12. Quelle heure est-il ?",
                    ["La grande aiguille sur le 12 : c'est une heure pile.",
                     f"La petite aiguille montre l'heure : {h}."], f"{h} heure{'s' if h > 1 else ''}")
        if k == 1:
            return ("application", "lire-l-heure",
                    f"Il est {h} heure{'s' if h > 1 else ''} pile. Sur quel nombre est la petite aiguille ?",
                    ["La petite aiguille montre les heures."], f"sur le {h}")
        return ("application", "lire-l-heure",
                f"Il est {h} heure{'s' if h > 1 else ''} pile. Sur quel nombre est la grande aiguille ?",
                ["À une heure pile, la grande aiguille (celle des minutes) est sur le 12."], "sur le 12")

    def moments(r):
        return r.choice([
            ("application", "moments-de-la-journee", "Quel moment de la journée vient juste après le matin ?",
             ["Dans l'ordre : le matin, le midi, l'après-midi, le soir."], "le midi"),
            ("application", "moments-de-la-journee", "Quel moment de la journée vient juste après le midi ?",
             ["Dans l'ordre : le matin, le midi, l'après-midi, le soir."], "l'après-midi"),
            ("application", "moments-de-la-journee", "Quel moment de la journée vient juste avant le soir ?",
             ["Dans l'ordre : le matin, le midi, l'après-midi, le soir."], "l'après-midi"),
            ("application", "moments-de-la-journee", "À quel moment de la journée te lèves-tu pour aller à l'école ?",
             ["On se lève le matin."], "le matin"),
            ("application", "moments-de-la-journee", "À quel moment de la journée vas-tu te coucher ?",
             ["On se couche le soir."], "le soir"),
            ("application", "moments-de-la-journee", "Range dans l'ordre : le soir, le matin, l'après-midi, le midi.",
             ["La journée commence le matin et finit le soir."], "le matin, le midi, l'après-midi, le soir"),
            ("application", "moments-de-la-journee", "Quel moment de la journée vient en premier ?",
             ["La journée commence le matin."], "le matin"),
        ])

    def calendrier(r):
        k = r.randint(0, 5)
        if k == 0:
            n = r.randint(2, 3)
            termes = " + ".join(["7"] * n)
            return ("approfondissement", "compter-le-temps",
                    f"Combien y a-t-il de jours dans {n} semaines ?",
                    ["Une semaine a 7 jours.", F(f"{termes} = {7 * n}") + "."], f"{7 * n} jours")
        if k == 1:
            h = r.randint(1, 9); d = r.randint(1, 3)
            return ("approfondissement", "compter-le-temps",
                    f"Il est {h} heure{'s' if h > 1 else ''}. Quelle heure sera-t-il dans {d} heure{'s' if d > 1 else ''} ?",
                    [F(f"{h} + {d} = {h + d}") + "."], f"{h + d} heures")
        if k == 2:
            j = r.choice(JOURS); n = r.randint(2, 3); i = JOURS.index(j)
            a = JOURS[(i + n) % 7]
            return ("approfondissement", "compter-le-temps",
                    f"Aujourd'hui, c'est {j}. Quel jour serons-nous dans {n} jours ?",
                    [f"On avance de {n} jours : " + ", ".join(JOURS[(i + t) % 7] for t in range(1, n + 1)) + "."], a)
        if k == 3:
            return r.choice([
                ("approfondissement", "compter-le-temps", "Combien y a-t-il de jours dans une semaine ?",
                 ["Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche : 7 jours."], "7 jours"),
                ("approfondissement", "compter-le-temps", "Combien y a-t-il de mois dans une année ?",
                 ["De janvier à décembre, il y a 12 mois."], "12 mois"),
                ("approfondissement", "compter-le-temps", "Quel est le premier mois de l'année ?",
                 ["L'année commence en janvier."], "janvier"),
                ("approfondissement", "compter-le-temps", "Quel est le dernier mois de l'année ?",
                 ["L'année finit en décembre."], "décembre"),
                ("approfondissement", "compter-le-temps", "Quels sont les deux jours du week-end ?",
                 ["La semaine finit par samedi et dimanche."], "samedi et dimanche"),
            ])
        if k == 4:
            h = r.randint(4, 12); d = r.randint(1, 3)
            return ("probleme", "compter-le-temps",
                    f"Le spectacle commence à {h} heures. Il est {h - d} heure{'s' if h - d > 1 else ''}. "
                    "Combien d'heures faut-il encore attendre ?",
                    [F(f"{h} - {h - d} = {d}") + "."], f"{d} heure{'s' if d > 1 else ''}")
        p = r.choice(PRENOMS); d = r.randint(2, 6)
        j = r.choice(JOURS[:5]); a = JOURS[(JOURS.index(j) + d) % 7]
        return ("probleme", "compter-le-temps",
                f"{p[0]} part chez ses grands-parents le {j} et revient {d} jours plus tard. Quel jour revient-{il(p)} ?",
                [f"On avance de {d} jours à partir de {j}."], a)

    return assemble(107, [(jours, 9), (mois, 9), (moments, 6), (heure, 8), (hier_demain, 8), (calendrier, 10)])


# objets (nom avec article, longueur réaliste en cm)
_LONG = [("un crayon", 15), ("une gomme", 4), ("un stylo", 14), ("une règle", 20), ("une cuillère", 17),
         ("un feutre", 13), ("un pinceau", 18), ("une craie", 8), ("une clé", 6), ("un trombone", 3),
         ("une fourchette", 19), ("une carte à jouer", 9), ("un ruban", 12), ("une brosse à dents", 18),
         ("une paille", 21), ("un taille-crayon", 5)]
_LOURD = [("un melon", "une cerise"), ("un livre", "une feuille"), ("une pastèque", "une pomme"),
          ("un cartable", "un crayon"), ("une brique", "une plume"), ("un chien", "un chat"),
          ("une bouteille d'eau pleine", "une bouteille vide"), ("un caillou", "une feuille d'arbre"),
          ("une citrouille", "une tomate"), ("un dictionnaire", "un cahier"),
          ("une orange", "une noisette"), ("un ananas", "une fraise")]


def defini(x):
    """« un crayon » -> « le crayon », « une gomme » -> « la gomme »."""
    if x.startswith("une "):
        return "la " + x[4:]
    if x.startswith("un "):
        return "le " + x[3:]
    return x


def que(x):
    return ("qu'" if x[0] in "aeiouéèêh" else "que ") + x


def gen_cp_longueurs_masses():
    def comp_long(r):
        (o1, a), (o2, b) = r.sample(_LONG, 2)
        if a == b:
            return None
        if r.random() < 0.5:
            g = o1 if a > b else o2
            return ("application", "comparer-des-longueurs",
                    f"{o1.capitalize()} mesure {a} cm et {o2} mesure {b} cm. Quel objet est le plus long ?",
                    [F(f"{max(a, b)} > {min(a, b)}") + " : le plus long a la plus grande mesure."], g)
        g = o1 if a < b else o2
        return ("application", "comparer-des-longueurs",
                f"{o1.capitalize()} mesure {a} cm et {o2} mesure {b} cm. Quel objet est le plus court ?",
                [F(f"{min(a, b)} < {max(a, b)}") + " : le plus court a la plus petite mesure."], g)

    def balance(r):
        lourd, leger = r.choice(_LOURD)
        k = r.randint(0, 2)
        if k == 0:
            return ("application", "balance-a-deux-plateaux",
                    f"Sur une balance, on pose {lourd} d'un côté et {leger} de l'autre. Quel plateau descend ?",
                    ["Le plateau qui descend porte l'objet le plus lourd.", f"Le plus lourd est {lourd}."],
                    f"le plateau où est posé {lourd}")
        if k == 1:
            return ("application", "balance-a-deux-plateaux",
                    f"Sur une balance, le plateau avec {lourd} descend et celui avec {leger} monte. "
                    "Quel objet est le plus léger ?",
                    ["Le plateau qui monte porte l'objet le plus léger."], leger)
        return ("application", "balance-a-deux-plateaux",
                f"Sur une balance, le plateau avec {leger} monte. L'autre plateau porte {lourd}. "
                "Quel objet est le plus lourd ?",
                ["Si un plateau monte, l'autre descend : il porte l'objet le plus lourd."], lourd)

    def vocab(r):
        return r.choice([
            ("application", "vocabulaire", "Quel est le contraire de « plus long » ?",
             ["« Plus long » et « plus court » sont des contraires."], "plus court"),
            ("application", "vocabulaire", "Quel est le contraire de « plus lourd » ?",
             ["« Plus lourd » et « plus léger » sont des contraires."], "plus léger"),
            ("application", "vocabulaire", "Quel est le contraire de « plus court » ?",
             ["« Plus court » et « plus long » sont des contraires."], "plus long"),
            ("application", "vocabulaire", "Quel est le contraire de « plus léger » ?",
             ["« Plus léger » et « plus lourd » sont des contraires."], "plus lourd"),
            ("application", "vocabulaire", "Avec quel outil mesure-t-on une longueur à l'école ?",
             ["On mesure une longueur avec une règle."], "une règle"),
            ("application", "vocabulaire", "Avec quel outil compare-t-on deux masses ?",
             ["On compare deux masses avec une balance à deux plateaux."], "une balance"),
            ("application", "vocabulaire", "Une balance à deux plateaux reste bien droite. Que peut-on dire des deux objets ?",
             ["La balance est en équilibre : les deux objets ont la même masse."], "Ils ont la même masse."),
            ("application", "vocabulaire", "Un éléphant est-il plus lourd ou plus léger qu'une souris ?",
             ["L'éléphant est beaucoup plus lourd."], "plus lourd"),
            ("application", "vocabulaire", "Une table est-elle plus longue ou plus courte qu'un stylo ?",
             ["La table est beaucoup plus longue qu'un stylo."], "plus longue"),
        ])

    def mesurer(r):
        (o1, l1), (o2, l2) = r.sample(_LONG, 2)
        if l1 == l2:
            return None
        k = r.randint(0, 1)
        if k == 0:
            g, p = max(l1, l2), min(l1, l2)
            go, po = (o1, o2) if l1 > l2 else (o2, o1)
            return ("intermediaire", "mesurer",
                    f"Avec la règle, {o1} mesure {l1} cm et {o2} mesure {l2} cm. "
                    f"Combien de centimètres {defini(go)} a-t-{('il' if go.startswith('un ') else 'elle')} de plus {que(defini(po))} ?",
                    ["On cherche l'écart : on soustrait.", F(f"{g} - {p} = {g - p}") + "."], f"{g - p} cm")
        if l1 + l2 > 40:
            return None
        return ("intermediaire", "mesurer",
                f"On met bout à bout {o1} de {l1} cm et {o2} de {l2} cm. Quelle longueur obtient-on ?",
                ["Bout à bout, on ajoute les longueurs.", F(f"{l1} + {l2} = {l1 + l2}") + "."], f"{l1 + l2} cm")

    def ranger(r):
        L = r.sample(range(2, 21), 3)
        coul = r.sample(["rouge", "bleu", "vert", "jaune", "noir", "blanc"], 3)
        if r.random() < 0.5:
            desc = ", ".join(f"le ruban {c} mesure {x} cm" for c, x in zip(coul, L))
            R = sorted(zip(L, coul))
            return ("approfondissement", "ranger",
                    f"Range les rubans du plus court au plus long : {desc}.",
                    ["On range les nombres du plus petit au plus grand : " + F(" < ".join(str(x) for x, _ in R)) + "."],
                    ", ".join(f"{c}" for _, c in R))
        obj = r.sample(["un sac de billes", "une trousse", "un cahier", "une boîte de jeu", "un sac de pommes", "une gourde pleine"], 3)
        cubes = r.sample(range(3, 20), 3)
        desc = ", ".join(f"{o} pèse autant que {x} cubes" for o, x in zip(obj, cubes))
        R = sorted(zip(cubes, obj))
        return ("approfondissement", "ranger",
                f"Range du plus léger au plus lourd : {desc}.",
                ["Plus il faut de cubes pour équilibrer, plus l'objet est lourd.",
                 F(" < ".join(str(x) for x, _ in R)) + "."],
                ", ".join(o for _, o in R))

    def pieges(r):
        return r.choice([
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un gros objet est toujours plus lourd qu'un petit objet.",
             ["Faux : un gros ballon peut être plus léger qu'un petit caillou."], "Faux"),
            ("approfondissement", "vrai-ou-faux",
             "Vrai ou faux : pour comparer deux crayons, on les aligne au même point de départ.",
             ["Vrai : sinon on se trompe."], "Vrai"),
            ("approfondissement", "vrai-ou-faux",
             "Vrai ou faux : pour mesurer avec des cubes, on peut mélanger des petits et des gros cubes.",
             ["Faux : pour mesurer, les cubes doivent tous être de la même taille."], "Faux"),
            ("approfondissement", "vrai-ou-faux",
             "Vrai ou faux : sur une balance, le plateau qui monte porte l'objet le plus lourd.",
             ["Faux : le plateau qui monte porte l'objet le plus léger."], "Faux"),
            ("approfondissement", "vrai-ou-faux",
             "Vrai ou faux : une plume est plus légère qu'un caillou.",
             ["Vrai : la plume est très légère."], "Vrai"),
            ("approfondissement", "vrai-ou-faux",
             "Vrai ou faux : si une balance reste droite, les deux objets ont la même masse.",
             ["Vrai : c'est l'équilibre."], "Vrai"),
            ("approfondissement", "vrai-ou-faux",
             "Vrai ou faux : un crayon de 9 cubes est plus long qu'un crayon de 12 cubes.",
             [F("9 < 12") + " : il est plus court."], "Faux"),
        ])

    def prob(r):
        p = r.choice(PRENOMS)
        a = r.randint(8, 20); b = r.randint(2, a - 2)
        if r.random() < 0.5:
            return ("probleme", "probleme-mesures",
                    f"{p[0]} mesure le couloir avec ses pas : {a} pas. Puis {il(p)} mesure le tapis : {b} pas. "
                    "Combien de pas de plus mesure le couloir ?",
                    ["On cherche l'écart : on soustrait.", F(f"{a} - {b} = {a - b}") + "."], f"{a - b} pas")
        c = r.randint(2, 15); d = r.randint(2, 15)
        return ("probleme", "probleme-mesures",
                f"{p[0]} colle une bande de {c} cm et une bande de {d} cm bout à bout. Quelle est la longueur totale ?",
                ["Bout à bout, on ajoute les longueurs.", F(f"{c} + {d} = {c + d}") + "."], f"{c + d} cm")

    return assemble(108, [(comp_long, 9), (balance, 8), (vocab, 8), (mesurer, 9), (ranger, 6), (pieges, 6), (prob, 4)])


def gen_cp_nombres_20():
    def lire(r):
        n = r.randint(0, 20)
        if r.random() < 0.5:
            return ("application", "lire-et-ecrire", f"Écris en chiffres : {lettres(n)}.",
                    [f"« {lettres(n)} » s'écrit {n}."], F(n))
        return ("application", "lire-et-ecrire", f"Écris en lettres : {n}.",
                [f"{n} se lit « {lettres(n)} »."], lettres(n))

    def avant_apres(r):
        n = r.randint(1, 19)
        if r.random() < 0.5:
            return ("application", "avant-apres", f"Quel nombre vient juste après {n} ?",
                    [f"Juste après, on ajoute 1 : " + F(f"{n} + 1 = {n + 1}") + "."], F(n + 1))
        return ("application", "avant-apres", f"Quel nombre vient juste avant {n} ?",
                [f"Juste avant, on enlève 1 : " + F(f"{n} - 1 = {n - 1}") + "."], F(n - 1))

    def suite(r):
        pas = r.choice([1, 1, 2])
        d = r.randint(0, 20 - 4 * pas)
        L = [d + pas * i for i in range(5)]
        k = r.randint(1, 3)
        aff = [str(x) if i != k else "?" for i, x in enumerate(L)]
        return ("intermediaire", "suites", f"Complète la suite : {', '.join(aff)}.",
                [f"On avance de {pas} en {pas}." if pas > 1 else "On avance de 1 en 1.",
                 ", ".join(map(str, L)) + "."], F(L[k]))

    def dizaine(r):
        n = r.randint(11, 19)
        u = n - 10
        if r.random() < 0.5:
            return ("intermediaire", "une-dizaine-et-des-unites",
                    f"{n}, c'est 1 dizaine et combien d'unités ?",
                    [F(f"{n} = 10 + {u}") + "."], f"{u} unité{'s' if u > 1 else ''}")
        return ("intermediaire", "une-dizaine-et-des-unites",
                f"Complète : {F(f'{n} = 10 + {LD}')}.",
                [f"{n}, c'est 1 dizaine et {u} unité{'s' if u > 1 else ''}."], F(u))

    def comparer(r):
        a, b = r.sample(range(0, 21), 2)
        s = "<" if a < b else ">"
        return ("application", "comparer", f"Compare {a} et {b} : écris $<$ ou $>$.",
                [f"{max(a, b)} est plus loin à droite sur la bande des nombres.", F(f"{a} {s} {b}") + "."], F(s))

    def denombrer(r):
        k = r.randint(0, 2)
        o = r.choice(OBJETS)
        if k == 0:
            u = r.randint(1, 9)
            return ("probleme", "denombrer",
                    f"J'ai une boîte de 10 {o[1]} et encore {q(u, o)}. Combien de {o[1]} ai-je ?",
                    [F(f"10 + {u} = {10 + u}") + "."], q(10 + u, o))
        if k == 1:
            p = r.choice(PRENOMS); n = r.randint(2, 12)
            rang = "premier" if n == 1 else f"{n}e"
            nom = "la" if p[1] == "f" else "le"
            return ("probleme", "denombrer",
                    f"Dans la file, {p[0]} est {nom} {rang}. Combien d'enfants sont devant {('elle' if p[1] == 'f' else 'lui')} ?",
                    [f"Devant le {n}e, il y a les {n - 1} premiers." if n > 2 else "Devant le 2e, il y a seulement le premier."],
                    f"{n - 1} enfant{'s' if n > 2 else ''}")
        a = r.randint(2, 9)
        return ("probleme", "denombrer",
                f"Sur une main, on a 5 doigts. Combien de doigts sur 2 mains et encore {a} doigts ?",
                [F(f"5 + 5 + {a} = {10 + a}") + "."], f"{10 + a} doigts")

    return assemble(109, [(lire, 10), (avant_apres, 9), (comparer, 7), (suite, 8), (dizaine, 8), (denombrer, 8)])


def gen_cp_problemes():
    def ajout(r): return pb_ajout(r, 2, 15, 20)
    def retrait(r): return pb_retrait(r, 5, 20)
    def ecart(r): return pb_ecart(r, 5, 20)
    def reunion(r): return pb_reunion(r, 20)
    def depart(r): return pb_etat_initial(r, 20)
    def etapes(r): return pb_deux_etapes(r, 15)

    def choisir(r):
        p = r.choice(PRENOMS); o = r.choice(OBJETS)
        a = r.randint(5, 15); b = r.randint(1, 4)
        cas = r.choice([("gagne", "+"), ("perd", "-"), ("reçoit", "+"), ("donne", "-")])
        op = "ajouter" if cas[1] == "+" else "enlever"
        res = a + b if cas[1] == "+" else a - b
        return ("intermediaire", "choisir-l-operation",
                f"{p[0]} a {q(a, o)}. {Il(p)} en {cas[0]} {b}. Faut-il ajouter ou enlever ? Calcule.",
                [f"« {cas[0].capitalize()} » : on doit {op}.", F(f"{a} {cas[1]} {b} = {res}") + "."],
                f"{op.capitalize()} : " + F(f"{a} {cas[1]} {b} = {res}"))

    return assemble(110, [(choisir, 6), (ajout, 9), (retrait, 9), (reunion, 8), (ecart, 8), (depart, 6), (etapes, 4)])


# =====================================================================
#                                 CE1
# =====================================================================
_RANGS = ["unités", "dizaines", "centaines", "milliers"]
_RANG_SING = ["unité", "dizaine", "centaine", "millier"]


def _chiffres(n):
    return [int(c) for c in reversed(str(n))]


def corrige_addition(a, b):
    da, db = _chiffres(a), _chiffres(b)
    lignes, ret = [], 0
    for i in range(max(len(da), len(db))):
        termes = [str(x[i]) for x in (da, db) if i < len(x)]
        expr = " + ".join(termes) + (f" + {ret}" if ret else "")
        tot = sum(x[i] for x in (da, db) if i < len(x)) + ret
        lig = f"{_RANGS[i].capitalize()} : " + F(f"{expr} = {tot}")
        lig += " (avec la retenue)" if ret else ""
        if tot >= 10:
            lig += f", j'écris {tot % 10} et je retiens 1."
            ret = 1
        else:
            lig += f", j'écris {tot}."
            ret = 0
        lignes.append(lig)
    if ret:
        lignes.append(f"{_RANGS[max(len(da), len(db))].capitalize()} : j'écris la retenue 1.")
    lignes.append("Résultat : " + F(f"{nl(a)} + {nl(b)} = {nl(a + b)}") + ".")
    return lignes


def soustraction_posable(a, b):
    """Vrai si on n'a jamais à casser une dizaine (ou centaine) dans un 0."""
    da, db = _chiffres(a), _chiffres(b) + [0] * 5
    emp = 0
    for i in range(len(da)):
        haut = da[i] - emp
        if haut < 0:
            return False
        emp = 1 if haut < db[i] else 0
    return emp == 0


def corrige_soustraction(a, b):
    """Méthode « on casse une dizaine » (celle de la fiche du CE1)."""
    da, db = _chiffres(a), _chiffres(b)
    nb = len(db)
    db = db + [0] * (len(da) - nb)
    lignes, emp = [], 0
    for i in range(len(da)):
        haut = da[i] - emp
        bas = db[i]
        if i == len(da) - 1 and i >= nb and haut == 0:
            break
        nom = _RANGS[i].capitalize()
        avant = f"il ne reste que {haut} en haut ; " if emp else ""
        if haut < bas:
            lig = (f"{nom} : {avant}on ne peut pas faire " + F(f"{haut} - {bas}") +
                   f". On casse une {_RANG_SING[i + 1]} : " + F(f"{haut + 10} - {bas} = {haut + 10 - bas}") + ".")
            emp = 1
        elif i >= nb:
            lig = f"{nom} : {avant}j'écris {haut}."
            emp = 0
        else:
            lig = f"{nom} : {avant}" + F(f"{haut} - {bas} = {haut - bas}") + "."
            emp = 0
        lignes.append(lig)
    lignes.append("Résultat : " + F(f"{nl(a)} - {nl(b)} = {nl(a - b)}") + ".")
    return lignes


def _sans_retenue_add(a, b):
    return all(x + y <= 9 for x, y in zip(_chiffres(a), _chiffres(b)))


def _sans_retenue_sous(a, b):
    return all(x >= y for x, y in zip(_chiffres(a), _chiffres(b)))


def _arr10(n):
    """Arrondi scolaire à la dizaine (5 -> au-dessus)."""
    return (n + 5) // 10 * 10


def gen_ce1_addition_posee():
    def sans(r):
        a = r.randint(10, 89); b = r.randint(10, 99 - a)
        if not _sans_retenue_add(a, b):
            return None
        return ("application", "addition-sans-retenue", f"Pose et calcule : {F(f'{a} + {b}')}.",
                corrige_addition(a, b), F(a + b))

    def avec(r):
        a = r.randint(11, 79); b = r.randint(11, 99 - a)
        if (a % 10) + (b % 10) < 10 or a + b > 99:
            return None
        return ("intermediaire", "addition-avec-retenue", f"Pose et calcule : {F(f'{a} + {b}')}.",
                corrige_addition(a, b), F(a + b))

    def trois(r):
        a = r.randint(100, 799); b = r.randint(20, 999 - a)
        if _sans_retenue_add(a, b):
            return None
        return ("intermediaire", "addition-a-trois-chiffres", f"Pose et calcule : {F(f'{a} + {b}')}.",
                corrige_addition(a, b), F(a + b))

    def colonne(r):
        u1 = r.randint(2, 9); u2 = r.randint(10 - u1, 9)
        a = r.randint(1, 6) * 10 + u1; b = r.randint(1, 2) * 10 + u2
        t = u1 + u2
        return ("application", "la-retenue",
                f"Tu poses {F(f'{a} + {b}')}. Dans la colonne des unités, {F(f'{u1} + {u2} = {t}')}. "
                "Quel chiffre écris-tu et combien retiens-tu ?",
                [f"{t} = 1 dizaine et {t - 10} unité{'s' if t - 10 > 1 else ''}.",
                 f"J'écris {t - 10} dans la colonne des unités et je retiens 1 dizaine.",
                 "Le calcul complet donne " + F(f"{a} + {b} = {a + b}") + "."],
                f"J'écris {t - 10} et je retiens 1.")

    def grandeur(r):
        a = r.randint(12, 89); b = r.randint(12, 89)
        if a % 10 == 5 or b % 10 == 5:
            return None
        e = _arr10(a) + _arr10(b)
        opts = sorted([e - 20, e, e + 20])
        return ("approfondissement", "ordre-de-grandeur",
                f"Sans poser l'opération, {F(f'{a} + {b}')} est-il proche de {opts[0]}, de {opts[1]} ou de {opts[2]} ?",
                [f"{a} est proche de {_arr10(a)} et {b} est proche de {_arr10(b)}.",
                 F(f"{_arr10(a)} + {_arr10(b)} = {e}") + ".",
                 "Le calcul exact donne " + F(f"{a} + {b} = {a + b}") + "."], F(e))

    def erreur(r):
        p = r.choice(PRENOMS)
        a = r.randint(15, 69); b = r.randint(15, 99 - a)
        if (a % 10) + (b % 10) < 10 or a + b > 99:
            return None
        faux = a + b - 10
        return ("approfondissement", "trouver-l-erreur",
                f"{p[0]} a posé {F(f'{a} + {b}')} et a trouvé {faux}. A-t-{il(p)} raison ?",
                [f"Unités : {a % 10} + {b % 10} = {a % 10 + b % 10}, on retient 1.",
                 f"{p[0]} a oublié la retenue.", F(f"{a} + {b} = {a + b}") + "."],
                f"Non, le bon résultat est {a + b}.")

    def prob(r):
        k = r.randint(0, 2)
        if k == 0:
            return pb_ajout(r, 120, 500, 999, notion="probleme")
        if k == 1:
            return pb_reunion(r, 150, notion="probleme")
        x = r.randint(100, 450); y = r.randint(100, 450)
        return ("probleme", "probleme",
                f"Une famille part en vacances. Le matin, elle roule {x} km. L'après-midi, elle roule {y} km. "
                "Combien de kilomètres a-t-elle parcourus dans la journée ?",
                ["On ajoute les deux distances."] + corrige_addition(x, y)[-1:], f"{nt(x + y)} km")

    return assemble(201, [(sans, 9), (colonne, 6), (avec, 9), (trois, 8), (grandeur, 6), (erreur, 5), (prob, 7)])


def gen_ce1_soustraction_posee():
    def sans(r):
        a = r.randint(25, 99); b = r.randint(11, a - 10)
        if not _sans_retenue_sous(a, b):
            return None
        return ("application", "soustraction-sans-retenue", f"Pose et calcule : {F(f'{a} - {b}')}.",
                corrige_soustraction(a, b), F(a - b))

    def avec(r):
        a = r.randint(30, 99); b = r.randint(11, a - 5)
        if a % 10 >= b % 10 or not soustraction_posable(a, b):
            return None
        return ("intermediaire", "soustraction-avec-retenue", f"Pose et calcule : {F(f'{a} - {b}')}.",
                corrige_soustraction(a, b), F(a - b))

    def trois(r):
        a = r.randint(200, 999); b = r.randint(50, a - 20)
        if _sans_retenue_sous(a, b) or not soustraction_posable(a, b):
            return None
        return ("approfondissement", "soustraction-a-trois-chiffres", f"Pose et calcule : {F(f'{a} - {b}')}.",
                corrige_soustraction(a, b), F(a - b))

    def verif(r):
        a = r.randint(30, 99); b = r.randint(11, a - 5); d = a - b
        juste = r.random() < 0.5
        x = d if juste else (d + 10 if a % 10 < b % 10 else d + 1)
        return ("intermediaire", "verifier-avec-l-addition",
                f"Vérifie avec une addition : {F(f'{a} - {b} = {x}')}. Est-ce juste ?",
                [F(f"{x} + {b} = {x + b}") + ".",
                 f"On retrouve {a} : c'est juste." if juste else
                 f"On ne retrouve pas {a} : c'est faux. Le bon résultat est {d}."],
                "Oui, c'est juste." if juste else f"Non, c'est {d}.")

    def casser(r):
        d = r.randint(3, 9); u = r.randint(0, 6); bu = r.randint(u + 1, 9)
        a = d * 10 + u; b = r.randint(1, d - 1) * 10 + bu
        return ("application", "casser-une-dizaine",
                f"Tu poses {F(f'{a} - {b}')}. Dans la colonne des unités, peux-tu faire {F(f'{u} - {bu}')} ? Que fais-tu ?",
                [f"Non, {u} est plus petit que {bu}.",
                 f"On casse une dizaine : le {u} devient {u + 10}, et " + F(f"{u + 10} - {bu} = {u + 10 - bu}") + ".",
                 f"Il reste {d - 1} dizaines en haut. Résultat : " + F(f"{a} - {b} = {a - b}") + "."],
                f"On casse une dizaine : " + F(f"{u + 10} - {bu} = {u + 10 - bu}"))

    def cours(r):
        a = r.randint(20, 99); b = r.randint(10, a - 1)
        k = r.randint(0, 2)
        if k == 0:
            return ("approfondissement", "proprietes",
                    f"Vrai ou faux : {F(f'{a} - {b}')} donne le même résultat que {F(f'{b} - {a}')}.",
                    ["On ne peut pas changer l'ordre dans une soustraction.",
                     "On met toujours le plus grand nombre en haut : " + F(f"{a} - {b} = {a - b}") + "."], "Faux")
        if k == 1:
            return ("approfondissement", "proprietes",
                    f"Pour poser {F(f'{a} - {b}')}, quel nombre écris-tu en haut ?",
                    ["On écrit toujours le plus grand nombre en haut."], F(a))
        return ("approfondissement", "proprietes",
                f"Le résultat de {F(f'{a} - {b}')} peut-il être plus grand que {a} ?",
                ["Non : on enlève, donc le résultat est plus petit que le nombre de départ.",
                 F(f"{a} - {b} = {a - b}") + "."], "Non")

    def prob(r):
        k = r.randint(0, 2)
        if k == 0:
            return pb_retrait(r, 40, 300, notion="probleme")
        if k == 1:
            return pb_ecart(r, 40, 200, notion="probleme")
        n = r.randint(150, 400); l = r.randint(30, n - 40)
        return ("probleme", "probleme",
                f"Un livre a {n} pages. Tu en as déjà lu {l}. Combien de pages te reste-t-il à lire ?",
                ["Il reste ce qui n'est pas encore lu : on soustrait.", F(f"{n} - {l} = {n - l}") + "."],
                f"{n - l} pages")

    return assemble(202, [(sans, 9), (casser, 5), (avec, 9), (verif, 7), (trois, 7), (cours, 5), (prob, 8)])


def gen_ce1_calcul_mental():
    def compl(r):
        a = r.randint(1, 9)
        if r.random() < 0.5:
            return ("application", "complements-a-10", f"Complète : {F(f'{a} + {LD} = 10')}.",
                    [f"{a} et {10 - a} font 10."], F(10 - a))
        d = r.randint(1, 8) * 10
        return ("application", "complements-a-10", f"Combien faut-il ajouter à {d + a} pour arriver à {d + 10} ?",
                [f"{a} + {10 - a} = 10, donc {d + a} + {10 - a} = {d + 10}."], F(10 - a))

    def dix(r):
        a = r.randint(11, 89)
        if r.random() < 0.5:
            return ("application", "ajouter-ou-enlever-10", f"Calcule de tête : {F(f'{a} + 10')}.",
                    ["On ajoute 1 dizaine : les unités ne changent pas.", F(f"{a} + 10 = {a + 10}") + "."], F(a + 10))
        return ("application", "ajouter-ou-enlever-10", f"Calcule de tête : {F(f'{a} - 10')}.",
                ["On enlève 1 dizaine : les unités ne changent pas.", F(f"{a} - 10 = {a - 10}") + "."], F(a - 10))

    def petit(r):
        u = r.randint(6, 9); b = r.randint(11 - u, 9)
        a = r.randint(1, 8) * 10 + u
        haut = (a // 10 + 1) * 10
        return ("intermediaire", "passer-par-la-dizaine", f"Calcule de tête : {F(f'{a} + {b}')}.",
                [f"On va d'abord à {haut} : " + F(f"{a} + {haut - a} = {haut}") + ".",
                 f"Il reste {b - (haut - a)} à ajouter : " + F(f"{haut} + {b - (haut - a)} = {a + b}") + "."],
                F(a + b))

    def dizaines(r):
        a = r.randint(1, 8); b = r.randint(1, 9 - a); u = r.choice([0, 0, r.randint(1, 9)])
        x = a * 10 + u; y = b * 10
        return ("intermediaire", "ajouter-des-dizaines", f"Calcule de tête : {F(f'{x} + {y}')}.",
                [f"{a} dizaine{'s' if a > 1 else ''} + {b} dizaine{'s' if b > 1 else ''} = {a + b} dizaines.",
                 F(f"{x} + {y} = {x + y}") + "."], F(x + y))

    def doubles(r):
        a = r.choice([5, 6, 7, 8, 9, 10, 11, 12, 15, 20, 25, 30, 40, 50])
        if r.random() < 0.6:
            return ("application", "doubles", f"Quel est le double de {a} ?",
                    [F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))
        return ("application", "doubles", f"Calcule de tête : {F(f'{a} + {a}')}.",
                [f"C'est le double de {a}.", F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))

    def ecart(r):
        d = r.randint(2, 9) * 10; a = d - r.randint(1, 9)
        return ("approfondissement", "aller-a-la-dizaine",
                f"Combien manque-t-il pour aller de {a} à {d} ?",
                [F(f"{a} + {d - a} = {d}") + "."], F(d - a))

    def prob(r):
        p = r.choice(PRENOMS)
        k = r.randint(0, 2)
        if k == 0:
            a = r.randint(12, 79)
            return ("probleme", "probleme-calcul-mental",
                    f"{p[0]} a {a} € dans sa tirelire. Sa grand-mère lui donne un billet de 10 €. Combien a-t-{il(p)} maintenant ?",
                    [F(f"{a} + 10 = {a + 10}") + "."], f"{a + 10} €")
        if k == 1:
            a = r.choice([5, 6, 7, 8, 10, 12, 15, 20, 25])
            return ("probleme", "probleme-calcul-mental",
                    f"Un paquet contient {a} biscuits. Combien de biscuits y a-t-il dans 2 paquets ?",
                    [f"C'est le double de {a}.", F(f"{a} + {a} = {2 * a}") + "."], f"{2 * a} biscuits")
        a = r.randint(21, 89); b = r.randint(2, 9)
        return ("probleme", "probleme-calcul-mental",
                f"Il y a {a} élèves dans la cour. {b} élèves rentrent en classe. Combien en reste-t-il dans la cour ?",
                [F(f"{a} - {b} = {a - b}") + "."], f"{a - b} élèves")

    return assemble(203, [(compl, 7), (dix, 8), (doubles, 7), (petit, 8), (dizaines, 7), (ecart, 6), (prob, 7)])


_FIG1 = {"carré": (4, 4, 4), "rectangle": (4, 4, 4), "triangle": (3, 3, None), "cercle": (0, 0, 0)}


def gen_ce1_figures_planes():
    def compter(r):
        f = r.choice(list(_FIG1)); c, s, a = _FIG1[f]
        k = r.randint(0, 2)
        if k == 0:
            return ("application", "cotes-sommets-angles", f"Combien de côtés a un {f} ?",
                    ["Le cercle n'a pas de côté : il est tout rond."] if f == "cercle" else
                    [f"Le {f} a {c} côtés."], F(c))
        if k == 1:
            return ("application", "cotes-sommets-angles", f"Combien de sommets a un {f} ?",
                    ["Le cercle n'a pas de sommet."] if f == "cercle" else
                    [f"Les sommets sont les coins : le {f} en a {s}."], F(s))
        if a is None:
            return None
        return ("application", "cotes-sommets-angles", f"Combien d'angles droits a un {f} ?",
                ["Le cercle n'a pas d'angle."] if f == "cercle" else
                [f"Le {f} a 4 angles droits, comme le coin d'une feuille."], F(a))

    def reconnaitre(r):
        return r.choice([
            ("intermediaire", "reconnaitre",
             "J'ai 4 côtés de la même longueur et 4 angles droits. Qui suis-je ?",
             ["4 côtés égaux et 4 angles droits : c'est le carré."], "un carré"),
            ("intermediaire", "reconnaitre",
             "J'ai 4 angles droits, 2 côtés longs et 2 côtés courts. Qui suis-je ?",
             ["4 angles droits et des côtés égaux deux à deux : c'est le rectangle."], "un rectangle"),
            ("intermediaire", "reconnaitre", "J'ai 3 côtés et 3 sommets. Qui suis-je ?",
             ["3 côtés : c'est un triangle."], "un triangle"),
            ("intermediaire", "reconnaitre", "Je n'ai ni côté ni sommet, et on me trace avec un compas. Qui suis-je ?",
             ["C'est le cercle."], "un cercle"),
            ("intermediaire", "reconnaitre", "Je suis une figure à 3 sommets avec un angle droit. Quelle sorte de figure suis-je ?",
             ["3 sommets : c'est un triangle (ici, avec un angle droit)."], "un triangle"),
            ("intermediaire", "reconnaitre", "Quelle figure a 4 sommets mais pas tous ses côtés égaux ?",
             ["Le rectangle : 2 côtés longs et 2 côtés courts."], "le rectangle"),
            ("intermediaire", "reconnaitre", "Quelle figure a autant de côtés que de sommets, et en a 3 ?",
             ["Le triangle a 3 côtés et 3 sommets."], "le triangle"),
            ("intermediaire", "reconnaitre", "Quelle figure n'a aucun sommet ?",
             ["Le cercle est tout rond : aucun sommet."], "le cercle"),
        ])

    def angle(r):
        return r.choice([
            ("intermediaire", "angle-droit", "Avec quel instrument vérifie-t-on un angle droit ?",
             ["On utilise l'équerre (ou le coin d'une feuille)."], "l'équerre"),
            ("intermediaire", "angle-droit", "Un triangle a-t-il toujours un angle droit ?",
             ["Non : certains triangles ont un angle droit, d'autres n'en ont pas."], "Non"),
            ("intermediaire", "angle-droit", "Quel objet de la classe a des coins qui forment des angles droits : une feuille ou une assiette ronde ?",
             ["Les coins d'une feuille sont des angles droits ; l'assiette ronde n'a pas de coin."], "une feuille"),
            ("intermediaire", "angle-droit", "Peut-on être sûr qu'un angle est droit juste en le regardant ?",
             ["Non : on le vérifie avec l'équerre."], "Non, on vérifie avec l'équerre."),
            ("intermediaire", "angle-droit", "Combien d'angles droits ont en tout un carré et un rectangle ?",
             ["4 pour le carré et 4 pour le rectangle.", F("4 + 4 = 8") + "."], F(8)),
            ("intermediaire", "angle-droit", "Le coin d'une page de livre est-il un angle droit ?",
             ["Oui : on peut le vérifier avec l'équerre."], "Oui"),
            ("intermediaire", "angle-droit", "Combien d'angles droits a une feuille de papier rectangulaire ?",
             ["Ses 4 coins sont des angles droits."], F(4)),
        ])

    def carre_rect(r):
        k = r.randint(0, 2)
        if k == 0:
            L = r.randint(4, 15); l = r.randint(2, L - 1)
            return ("approfondissement", "carre-et-rectangle",
                    f"Un rectangle a un côté de {L} cm et un côté de {l} cm. Combien mesurent ses deux autres côtés ?",
                    ["Dans un rectangle, les côtés en face sont égaux deux à deux."], f"{L} cm et {l} cm")
        if k == 1:
            c = r.randint(2, 15)
            return ("approfondissement", "carre-et-rectangle",
                    f"Un côté d'un carré mesure {c} cm. Combien mesurent les autres côtés ?",
                    ["Les 4 côtés d'un carré ont la même longueur."], f"{c} cm chacun")
        return r.choice([
            ("approfondissement", "carre-et-rectangle", "Vrai ou faux : un carré est un rectangle spécial.",
             ["Vrai : il a 4 angles droits comme le rectangle, et en plus ses 4 côtés sont égaux."], "Vrai"),
            ("approfondissement", "carre-et-rectangle", "Vrai ou faux : un rectangle a toujours ses 4 côtés égaux.",
             ["Faux : seul le carré a ses 4 côtés égaux."], "Faux"),
            ("approfondissement", "carre-et-rectangle", "Qu'ont en commun le carré et le rectangle ?",
             ["Tous les deux ont 4 côtés, 4 sommets et 4 angles droits."], "4 côtés, 4 sommets et 4 angles droits"),
            ("approfondissement", "carre-et-rectangle", "Quelle est la différence entre un carré et un rectangle ?",
             ["Le carré a ses 4 côtés égaux ; le rectangle a 2 côtés longs et 2 côtés courts."],
             "Le carré a tous ses côtés égaux."),
        ])

    def cercle(r):
        return r.choice([
            ("application", "cercle", "Avec quel instrument trace-t-on un cercle ?",
             ["On trace un cercle avec un compas."], "un compas"),
            ("application", "cercle", "Comment s'appelle le point du milieu d'un cercle ?",
             ["C'est le centre du cercle."], "le centre"),
            ("application", "cercle", "Un cercle a-t-il des côtés droits ?",
             ["Non, il est tout rond."], "Non"),
            ("application", "cercle", "Vrai ou faux : la pointe du compas se place sur le centre du cercle.",
             ["Vrai : la pointe reste sur le centre pendant qu'on trace."], "Vrai"),
            ("application", "cercle", "Cite un objet de la maison qui a la forme d'un cercle.",
             ["Par exemple une assiette, une horloge ronde, une pièce de monnaie."], "une assiette (par exemple)"),
        ])

    def total(r):
        f1, f2 = r.sample(["carré", "rectangle", "triangle"], 2)
        n1 = r.randint(2, 5); n2 = r.randint(1, 4)
        mot = r.choice(["côtés", "sommets"])
        c1 = _FIG1[f1][0]; c2 = _FIG1[f2][0]
        tot = n1 * c1 + n2 * c2
        p = r.choice(PRENOMS)
        return ("probleme", "probleme-figures",
                f"{p[0]} dessine {n1} {f1}s et {n2} {f2}{'s' if n2 > 1 else ''}. Combien de {mot} a-t-{il(p)} dessinés en tout ?",
                [f"Un {f1} a {c1} {mot} : " + F(f"{n1} \\times {c1} = {n1 * c1}") + ".",
                 f"Un {f2} a {c2} {mot} : " + F(f"{n2} \\times {c2} = {n2 * c2}") + ".",
                 F(f"{n1 * c1} + {n2 * c2} = {tot}") + "."], f"{tot} {mot}")

    return assemble(204, [(compter, 10), (cercle, 5), (reconnaitre, 8), (angle, 7), (carre_rect, 9), (total, 11)])


def euros(c):
    """Montant en centimes -> « 3 € 50 c », « 2 € », « 80 c »."""
    e, ct = divmod(c, 100)
    if ct == 0:
        return f"{e} €"
    if e == 0:
        return f"{ct} c"
    return f"{e} € {ct} c"


def gen_ce1_mesures_monnaie():
    def longueur(r):
        k = r.randint(0, 2)
        if k == 0:
            m = r.randint(2, 9)
            return ("application", "convertir-les-longueurs", f"Combien de centimètres font {m} m ?",
                    ["1 m = 100 cm.", F(f"{m} \\times 100 = {m * 100}") + "."], f"{m * 100} cm")
        if k == 1:
            m = r.randint(2, 9)
            return ("application", "convertir-les-longueurs", f"{m * 100} cm, cela fait combien de mètres ?",
                    ["100 cm = 1 m.", f"{m * 100} cm = {m} fois 100 cm."], f"{m} m")
        m = r.randint(1, 3); c = r.randint(5, 95)
        return ("intermediaire", "convertir-les-longueurs", f"Écris en centimètres : {m} m {c} cm.",
                [f"{m} m = {m * 100} cm.", F(f"{m * 100} + {c} = {m * 100 + c}") + "."], f"{m * 100 + c} cm")

    def masse(r):
        k = r.randint(0, 1)
        if k == 0:
            m = r.randint(2, 9)
            return ("application", "convertir-les-masses", f"Combien de grammes font {m} kg ?",
                    ["1 kg = 1 000 g.", F(f"{m} \\times 1\\,000 = {nl(m * 1000)}") + "."], f"{nt(m * 1000)} g")
        g = r.choice([100, 200, 250, 300, 400, 500, 600, 750, 800])
        return ("intermediaire", "convertir-les-masses", f"Écris en grammes : 1 kg {g} g.",
                ["1 kg = 1 000 g.", F(f"1\\,000 + {g} = {nl(1000 + g)}") + "."], f"{nt(1000 + g)} g")

    def unite(r):
        return r.choice([
            ("intermediaire", "choisir-l-unite", "Pour mesurer la longueur d'une porte, utilises-tu les centimètres ou les mètres ?",
             ["Une porte est grande : on la mesure en mètres (environ 2 m)."], "les mètres"),
            ("intermediaire", "choisir-l-unite", "Pour mesurer la longueur d'un crayon, utilises-tu les centimètres ou les mètres ?",
             ["Un crayon est petit : on le mesure en centimètres (environ 15 cm)."], "les centimètres"),
            ("intermediaire", "choisir-l-unite", "Pour peser une pomme, utilises-tu les grammes ou les kilogrammes ?",
             ["Une pomme est légère : environ 150 g."], "les grammes"),
            ("intermediaire", "choisir-l-unite", "Pour peser un sac de pommes de terre, utilises-tu les grammes ou les kilogrammes ?",
             ["Un sac de pommes de terre est lourd : on le pèse en kilogrammes."], "les kilogrammes"),
            ("intermediaire", "choisir-l-unite", "Pour mesurer ce que contient une grande bouteille d'eau, quelle unité utilises-tu ?",
             ["Une contenance se mesure en litres."], "le litre"),
            ("intermediaire", "choisir-l-unite", "Une porte mesure-t-elle plutôt 2 m ou 2 cm ?",
             ["2 cm, c'est la largeur d'un doigt : bien trop petit. Une porte mesure environ 2 m."], "2 m"),
            ("intermediaire", "choisir-l-unite", "Un cartable plein pèse-t-il plutôt 4 kg ou 4 g ?",
             ["4 g, c'est à peu près la masse d'une feuille de papier : bien trop léger."], "4 kg"),
            ("intermediaire", "choisir-l-unite", "Une table de classe mesure-t-elle plutôt 70 cm ou 70 m de haut ?",
             ["70 m, c'est plus haut qu'un immeuble !"], "70 cm"),
            ("intermediaire", "choisir-l-unite", "Avec quel instrument mesure-t-on une masse ?",
             ["On mesure une masse avec une balance."], "une balance"),
        ])

    def heure(r):
        k = r.randint(0, 3)
        if k == 0:
            h = r.randint(2, 5)
            return ("application", "le-temps", f"Combien de minutes y a-t-il dans {h} heures ?",
                    ["1 h = 60 min.", F(f"{h} \\times 60 = {h * 60}") + "."], f"{h * 60} min")
        if k == 1:
            return r.choice([
                ("application", "le-temps", "Combien d'heures y a-t-il dans une journée ?", ["1 jour = 24 h."], "24 heures"),
                ("application", "le-temps", "Combien de minutes y a-t-il dans une heure ?", ["1 h = 60 min."], "60 minutes"),
                ("application", "le-temps", "Sur une horloge, quelle aiguille montre les minutes ?",
                 ["La grande aiguille montre les minutes."], "la grande aiguille"),
                ("application", "le-temps", "Sur une horloge, quelle aiguille montre les heures ?",
                 ["La petite aiguille montre les heures."], "la petite aiguille"),
            ])
        if k == 2:
            h = r.randint(8, 16); d = r.randint(1, 3)
            return ("intermediaire", "le-temps",
                    f"Un film commence à {h} h et dure {d} h. À quelle heure se termine-t-il ?",
                    [F(f"{h} + {d} = {h + d}") + "."], f"à {h + d} h")
        h = r.randint(8, 11); m = r.choice([15, 30, 45])
        return ("intermediaire", "le-temps",
                f"Il est {h} h. La récréation commence dans {m} minutes. À quelle heure commence-t-elle ?",
                [f"{h} h et {m} min."], f"à {h} h {m}")

    def somme(r):
        pieces = [(200, "pièce", "de 2 €"), (100, "pièce", "de 1 €"), (50, "pièce", "de 50 c"),
                  (20, "pièce", "de 20 c"), (10, "pièce", "de 10 c"), (500, "billet", "de 5 €"),
                  (1000, "billet", "de 10 €"), (2000, "billet", "de 20 €")]
        ch = sorted(r.sample(pieces, r.randint(2, 3)), reverse=True)
        ns = [r.randint(1, 3) for _ in ch]
        tot = sum(n * v for n, (v, _, _) in zip(ns, ch))
        desc = ", ".join(f"{n} {t}{'s' if n > 1 else ''} {d}" for n, (v, t, d) in zip(ns, ch))
        desc = desc[::-1].replace(" ,", " te ", 1)[::-1]
        return ("application", "compter-l-argent", f"Combien d'argent y a-t-il en tout avec {desc} ?",
                [" + ".join(euros(n * v) for n, (v, _, _) in zip(ns, ch)) + f" = {euros(tot)}."], euros(tot))

    def rendre(r):
        p = r.choice(PRENOMS)
        objet = r.choice(["un livre", "une balle", "un jeu de cartes", "un puzzle", "une trousse", "une bande dessinée"])
        prix = r.randint(2, 18)
        billet = 5 if prix < 5 else (10 if prix < 10 else 20)
        return ("probleme", "rendre-la-monnaie",
                f"{p[0]} achète {objet} à {prix} €. {Il(p)} paie avec un billet de {billet} €. Combien lui rend-on ?",
                ["On cherche ce qui manque pour aller du prix au billet : on soustrait.",
                 F(f"{billet} - {prix} = {billet - prix}") + "."], f"{billet - prix} €")

    def centimes(r):
        k = r.randint(0, 2)
        if k == 0:
            e = r.randint(1, 5); c = r.choice([10, 20, 30, 40, 50, 60, 70, 80, 90])
            return ("approfondissement", "euros-et-centimes", f"Combien de centimes font {e} € {c} c ?",
                    ["1 € = 100 c.", F(f"{e * 100} + {c} = {e * 100 + c}") + "."], f"{e * 100 + c} c")
        if k == 1:
            v = r.choice([10, 20, 50])
            return ("approfondissement", "euros-et-centimes", f"Combien de pièces de {v} c faut-il pour faire 1 € ?",
                    ["1 € = 100 c.", F(f"{100 // v} \\times {v} = 100") + "."], F(100 // v))
        a = r.choice([20, 30, 40, 50, 60, 70, 80]); b = 100 - a
        return ("approfondissement", "euros-et-centimes", f"J'ai {a} c. Combien de centimes me manque-t-il pour avoir 1 € ?",
                ["1 € = 100 c.", F(f"100 - {a} = {b}") + "."], f"{b} c")

    return assemble(205, [(longueur, 8), (masse, 6), (unite, 8), (heure, 7), (somme, 8), (centimes, 6), (rendre, 7)])


def gen_ce1_moities_doubles():
    def double(r):
        a = r.choice(list(range(2, 21)) + [25, 30, 40, 50])
        return ("application", "double", f"Quel est le double de {a} ?",
                [f"Le double de {a}, c'est {a} + {a}.", F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))

    def moitie(r):
        a = r.choice(list(range(2, 41, 2)) + [50, 60, 80, 100])
        return ("application", "moitie", f"Quelle est la moitié de {a} ?",
                [f"On partage {a} en deux parts égales.", F(f"{a // 2} + {a // 2} = {a}") + f", donc la moitié de {a} est {a // 2}."],
                F(a // 2))

    def parite(r):
        n = r.randint(3, 99)
        pair = n % 2 == 0
        return ("intermediaire", "pair-ou-impair", f"Le nombre {n} est-il pair ou impair ?",
                ["Un nombre est pair si son chiffre des unités est 0, 2, 4, 6 ou 8.", f"Le chiffre des unités de {n} est {n % 10}.",
                 (f"{n} a une moitié entière : {n // 2}." if pair else
                  f"{n} ne se partage pas en deux parts entières égales : " + F(f"{n // 2} + {n // 2} = {n - 1}") + ".")],
                "pair" if pair else "impair")

    def inverse(r):
        a = r.randint(6, 25)
        return ("intermediaire", "double-et-moitie",
                f"Le double de {a} est {2 * a}. Quelle est la moitié de {2 * a} ?",
                ["Le double et la moitié sont des opérations inverses : l'une défait l'autre."], F(a))

    def trouve(r):
        a = r.choice(list(range(6, 31)) + [40, 50])
        if r.random() < 0.5:
            return ("approfondissement", "nombre-cache", f"Je pense à un nombre. Son double est {2 * a}. Quel est ce nombre ?",
                    [f"On cherche la moitié de {2 * a}.", F(f"{a} + {a} = {2 * a}") + "."], F(a))
        return ("approfondissement", "nombre-cache", f"Je pense à un nombre. Sa moitié est {a}. Quel est ce nombre ?",
                [f"On cherche le double de {a}.", F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))

    def vf(r):
        a = r.randint(3, 15)
        k = r.randint(0, 2)
        if k == 0:
            return ("approfondissement", "vrai-ou-faux", f"Vrai ou faux : le double de {a} est {a + 2}.",
                    ["Doubler, ce n'est pas ajouter 2.", F(f"{a} + {a} = {2 * a}") + "."], "Faux")
        if k == 1:
            b = 2 * a + 1
            return ("approfondissement", "vrai-ou-faux", f"Vrai ou faux : {b} a une moitié entière.",
                    [f"{b} est impair : " + F(f"{a} + {a} = {2 * a}") + " et " + F(f"{a + 1} + {a + 1} = {2 * a + 2}") + "."], "Faux")
        return ("approfondissement", "vrai-ou-faux", f"Vrai ou faux : la moitié de {2 * a} est plus petite que {2 * a}.",
                ["La moitié est toujours plus petite que le nombre de départ.", f"La moitié de {2 * a} est {a}."], "Vrai")

    def prob(r):
        p, p2 = deux(r); o = r.choice(OBJETS)
        k = r.randint(0, 2)
        if k == 0:
            a = r.randint(4, 25)
            return ("probleme", "probleme-doubles-moities",
                    f"{p[0]} a {q(a, o)}. {p2[0]} en a le double. Combien de {o[1]} {p2[0]} a-t-{il(p2)} ?",
                    [F(f"{a} + {a} = {2 * a}") + "."], q(2 * a, o))
        if k == 1:
            a = r.randint(3, 25) * 2
            return ("probleme", "probleme-doubles-moities",
                    f"{p[0]} partage {q(a, o)} en deux parts égales avec {p2[0]}. Combien de {o[1]} chacun reçoit-il ?",
                    [f"On cherche la moitié de {a}.", F(f"{a // 2} + {a // 2} = {a}") + "."], q(a // 2, o))
        a = r.choice([10, 12, 14, 16, 18, 20, 24, 30])
        return ("probleme", "probleme-doubles-moities",
                f"Un gâteau coûte {a} €. Avec la promotion, il coûte la moitié du prix. Combien coûte-t-il ?",
                [f"La moitié de {a} : " + F(f"{a // 2} + {a // 2} = {a}") + "."], f"{a // 2} €")

    return assemble(206, [(double, 9), (moitie, 9), (parite, 8), (inverse, 6), (trouve, 6), (vf, 5), (prob, 7)])


X = "\\times"


def enum(parts):
    """« a », « a et b », « a, b et c »."""
    return parts[0] if len(parts) == 1 else ", ".join(parts[:-1]) + " et " + parts[-1]


def rang(k):
    return "1re" if k == 1 else f"{k}e"


def _cdu(n):
    c, r = divmod(n, 100)
    d, u = divmod(r, 10)
    return c, d, u


def _pl(n, mot):
    if n <= 1:
        return f"{n} {mot}"
    return f"{n} {mot}{'x' if mot.endswith('eau') else 's'}"


def gen_ce1_nombres_1000():
    def decomp(r):
        n = r.randint(101, 999)
        c, d, u = _cdu(n)
        return ("application", "centaines-dizaines-unites",
                f"Dans {n}, combien y a-t-il de centaines, de dizaines et d'unités ?",
                [f"{c} est le chiffre des centaines, {d} celui des dizaines, {u} celui des unités.",
                 F(f"{n} = {c * 100} + {d * 10} + {u}") + "."],
                f"{_pl(c, 'centaine')}, {_pl(d, 'dizaine')} et {_pl(u, 'unité')}")

    def valeur(r):
        n = r.randint(111, 999)
        c, d, u = _cdu(n)
        rang = r.choice([0, 1, 2])
        ch = [u, d, c][rang]
        if [u, d, c].count(ch) > 1 or ch == 0:
            return None
        v = ch * [1, 10, 100][rang]
        return ("intermediaire", "valeur-d-un-chiffre", f"Dans le nombre {n}, que vaut le chiffre {ch} ?",
                [f"Le {ch} est le chiffre des {_RANGS[rang]}.", f"Il vaut {v}."], F(v))

    def lire(r):
        n = r.randint(100, 999)
        if r.random() < 0.3:
            n = r.choice([200, 300, 400, 500, 600, 700, 800, 900, 1000, 280, 380, 480, 580, 680, 780, 880, 980, 205, 307, 409, 171, 271, 391])
        if r.random() < 0.5:
            return ("intermediaire", "lire-et-ecrire", f"Écris en chiffres : {lettres(n)}.",
                    [f"« {lettres(n)} » s'écrit {nt(n)}."], F(nl(n)))
        return ("intermediaire", "lire-et-ecrire", f"Écris en lettres : {nt(n)}.",
                [f"On lit d'abord les centaines, puis la fin du nombre : {nt(n)} se lit « {lettres(n)} »."], lettres(n))

    def comparer(r):
        a = r.randint(100, 999)
        b = r.choice([a + r.randint(1, 9), a - r.randint(1, 9), a + 10 * r.randint(1, 5), r.randint(100, 999)])
        if not 100 <= b <= 999 or a == b:
            return None
        s = "<" if a < b else ">"
        ca, da, _ = _cdu(a); cb, db, _ = _cdu(b)
        if ca != cb:
            ex = f"On compare les centaines : {ca} et {cb}."
        elif da != db:
            ex = f"Mêmes centaines ; on compare les dizaines : {da} et {db}."
        else:
            ex = "Mêmes centaines et mêmes dizaines ; on compare les unités."
        return ("application", "comparer", f"Compare {a} et {b} : écris $<$ ou $>$.",
                [ex, F(f"{a} {s} {b}") + "."], F(s))

    def ranger(r):
        base = r.randint(1, 8) * 100
        L = r.sample(range(base, base + 200), 4)
        if r.random() < 0.5:
            R = sorted(L)
            return ("intermediaire", "ranger", f"Range dans l'ordre croissant : {', '.join(map(str, L))}.",
                    ["Croissant : du plus petit au plus grand.", F(" < ".join(map(str, R))) + "."], ", ".join(map(str, R)))
        R = sorted(L, reverse=True)
        return ("intermediaire", "ranger", f"Range dans l'ordre décroissant : {', '.join(map(str, L))}.",
                ["Décroissant : du plus grand au plus petit.", F(" > ".join(map(str, R))) + "."], ", ".join(map(str, R)))

    def suites(r):
        k = r.randint(0, 2)
        if k == 0:
            pas = r.choice([10, 100])
            if pas == 10:
                d = r.randint(1, 9) * 100 + r.randint(0, 9) * 10
            else:
                d = r.randint(0, 5) * 100 + r.choice([0, 20, 50])
            L = [d + pas * i for i in range(5)]
            if L[-1] > 1000 or L[0] == 0:
                return None
            return ("approfondissement", "suites-de-nombres",
                    f"Continue la suite de {pas} en {pas} : {L[0]}, {L[1]}, {L[2]}, ?, ?",
                    [f"On ajoute {pas} à chaque fois."], f"{nt(L[3])}, {nt(L[4])}")
        if k == 1:
            n = r.choice([99, 199, 299, 399, 499, 599, 699, 799, 899, 999, 109, 209, 389, 459])
            return ("approfondissement", "suites-de-nombres", f"Quel nombre vient juste après {n} ?",
                    [F(f"{n} + 1 = {nl(n + 1)}") + "."], F(nl(n + 1)))
        n = r.choice([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 110, 210, 450, 670])
        return ("approfondissement", "suites-de-nombres", f"Quel nombre vient juste avant {nt(n)} ?",
                [F(f"{nl(n)} - 1 = {n - 1}") + "."], F(n - 1))

    def prob(r):
        c = r.randint(1, 9); d = r.randint(0, 9); u = r.randint(0, 9)
        o = r.choice([("perle", "perles"), ("timbre", "timbres"), ("bille", "billes"), ("trombone", "trombones")])
        n = 100 * c + 10 * d + u
        if r.random() < 0.5:
            parts = [f"{_pl(c, 'boîte')} de 100 {o[1]}"]
            if d:
                parts.append(f"{_pl(d, 'sachet')} de 10 {o[1]}")
            if u:
                parts.append(f"{q(u, o)} en vrac")
            return ("probleme", "probleme-paquets",
                    f"Le maître a {enum(parts)}. Combien de {o[1]} a-t-il en tout ?",
                    [F(f"{c * 100} + {d * 10} + {u} = {n}") + "."], f"{n} {o[1]}")
        n = r.randint(110, 990)
        c = n // 100
        return ("probleme", "probleme-paquets",
                f"On range {n} {o[1]} dans des boîtes de 100. Combien de boîtes pleines peut-on remplir ?",
                [f"Dans {n}, il y a {_pl(c, 'centaine')}.", f"On remplit {_pl(c, 'boîte')} de 100."],
                _pl(c, "boîte"))

    return assemble(207, [(decomp, 8), (comparer, 8), (valeur, 8), (lire, 8), (ranger, 6), (suites, 6), (prob, 6)])


def gen_ce1_problemes():
    def ajout(r): return pb_ajout(r, 12, 80, 99)
    def retrait(r): return pb_retrait(r, 20, 99)
    def ecart(r): return pb_ecart(r, 20, 99)
    def reunion(r): return pb_reunion(r, 99)
    def depart(r): return pb_etat_initial(r, 99)
    def etapes(r): return pb_deux_etapes(r, 60)

    def paquets(r):
        o = r.choice(OBJETS)
        n = r.randint(2, 5); k = r.choice([2, 3, 4, 5, 10])
        cont = r.choice(["boîtes", "sachets", "paquets"])
        return ("intermediaire", "probleme-paquets-egaux",
                f"Il y a {n} {cont} de {k} {o[1]}. Combien de {o[1]} y a-t-il en tout ?",
                ["Plusieurs paquets égaux : on peut multiplier.",
                 F(" + ".join([str(k)] * n) + f" = {n} \\times {k} = {n * k}") + "."], q(n * k, o))

    def monnaie(r):
        p = r.choice(PRENOMS)
        a = r.randint(3, 15); b = r.randint(2, 12)
        tot = a + b
        billet = 20 if tot <= 20 else 50
        return ("approfondissement", "probleme-monnaie",
                f"{p[0]} achète un livre à {a} € et un jeu à {b} €. {Il(p)} paie avec un billet de {billet} €. "
                "Combien lui rend-on ?",
                ["Étape 1 : prix total : " + F(f"{a} + {b} = {tot}") + ".",
                 "Étape 2 : monnaie rendue : " + F(f"{billet} - {tot} = {billet - tot}") + "."],
                f"{billet - tot} €")

    return assemble(208, [(ajout, 7), (retrait, 7), (reunion, 6), (ecart, 7), (paquets, 6), (depart, 6),
                          (etapes, 6), (monnaie, 5)])


# solides : nom -> (faces, arêtes, sommets)
_SOL = {"cube": (6, 12, 8), "pavé droit": (6, 12, 8), "pyramide à base carrée": (5, 8, 5)}


def _solides_communs(niveau_diff_app="application"):
    def fas(r):
        s = r.choice(list(_SOL) + ["boule"])
        quoi = r.choice([("faces", 0), ("arêtes", 1), ("sommets", 2)])
        if s == "boule":
            v = 0; c = ["La boule est toute ronde : ni face plate, ni arête, ni sommet."]
            e = f"Combien {_de(quoi[0])} a une boule ?"
        else:
            v = _SOL[s][quoi[1]]
            art = "une" if s.startswith("pyramide") else "un"
            e = f"Combien {_de(quoi[0])} a {art} {s} ?"
            c = [f"{'Une' if art == 'une' else 'Un'} {s} a {_SOL[s][0]} faces, {_SOL[s][1]} arêtes et {_SOL[s][2]} sommets."]
        return (niveau_diff_app, "faces-aretes-sommets", e, c, F(v))

    def objets(r):
        return r.choice([
            ("application", "reconnaitre-un-solide", "Un dé à jouer a la forme de quel solide ?",
             ["Ses 6 faces sont des carrés identiques : c'est un cube."], "un cube"),
            ("application", "reconnaitre-un-solide", "Un ballon de football a la forme de quel solide ?",
             ["Il est tout rond : c'est une boule."], "une boule"),
            ("application", "reconnaitre-un-solide", "Une boîte à chaussures a la forme de quel solide ?",
             ["Ses faces sont des rectangles : c'est un pavé droit."], "un pavé droit"),
            ("application", "reconnaitre-un-solide", "Une boîte de conserve a la forme de quel solide ?",
             ["Deux disques plats et une surface courbe : c'est un cylindre."], "un cylindre"),
            ("application", "reconnaitre-un-solide", "Un cornet de glace a la forme de quel solide ?",
             ["Une face ronde et une pointe : c'est un cône."], "un cône"),
            ("application", "reconnaitre-un-solide", "Une bille a la forme de quel solide ?",
             ["Elle est toute ronde : c'est une boule."], "une boule"),
            ("application", "reconnaitre-un-solide", "Une brique de lait a la forme de quel solide ?",
             ["Ses faces sont des rectangles : c'est un pavé droit."], "un pavé droit"),
            ("application", "reconnaitre-un-solide", "Un rouleau d'essuie-tout a la forme de quel solide ?",
             ["Il roule et a deux bouts ronds : c'est un cylindre."], "un cylindre"),
            ("application", "reconnaitre-un-solide", "Un chapeau pointu de fête a la forme de quel solide ?",
             ["Une base ronde et une pointe : c'est un cône."], "un cône"),
            ("application", "reconnaitre-un-solide", "Une orange a presque la forme de quel solide ?",
             ["Elle est ronde dans tous les sens : c'est presque une boule."], "une boule"),
            ("application", "reconnaitre-un-solide", "Une boîte de céréales a la forme de quel solide ?",
             ["Ses faces sont des rectangles : c'est un pavé droit."], "un pavé droit"),
        ])

    def description(r):
        return r.choice([
            ("intermediaire", "devinettes", "J'ai 6 faces, toutes des carrés identiques. Qui suis-je ?",
             ["6 faces carrées identiques : c'est le cube."], "le cube"),
            ("intermediaire", "devinettes", "J'ai 6 faces rectangulaires, 12 arêtes et 8 sommets. Qui suis-je ?",
             ["Des faces rectangles : c'est le pavé droit."], "le pavé droit"),
            ("intermediaire", "devinettes", "Je n'ai ni face plate, ni arête, ni sommet. Qui suis-je ?",
             ["C'est la boule."], "la boule"),
            ("intermediaire", "devinettes", "J'ai deux faces plates en forme de disque et je roule. Qui suis-je ?",
             ["C'est le cylindre."], "le cylindre"),
            ("intermediaire", "devinettes", "J'ai une seule face plate, ronde, et une pointe. Qui suis-je ?",
             ["C'est le cône."], "le cône"),
            ("intermediaire", "devinettes", "Mes faces sont des triangles qui se rejoignent en une pointe, posés sur un carré. Qui suis-je ?",
             ["C'est la pyramide à base carrée."], "la pyramide"),
            ("intermediaire", "devinettes", "J'ai 5 faces et 5 sommets. Qui suis-je ?",
             ["La pyramide à base carrée a 5 faces (1 carré et 4 triangles) et 5 sommets."], "la pyramide à base carrée"),
            ("intermediaire", "devinettes", "J'ai 8 sommets et toutes mes arêtes ont la même longueur. Qui suis-je ?",
             ["Toutes les arêtes égales : c'est le cube."], "le cube"),
        ])

    def faces_forme(r):
        return r.choice([
            ("intermediaire", "forme-des-faces", "Quelle est la forme des faces d'un cube ?",
             ["Les 6 faces d'un cube sont des carrés."], "des carrés"),
            ("intermediaire", "forme-des-faces", "Quelle est la forme des faces d'un pavé droit (une boîte à chaussures) ?",
             ["Ce sont des rectangles (parfois deux sont des carrés)."], "des rectangles"),
            ("intermediaire", "forme-des-faces", "Quelle est la forme des faces plates d'un cylindre ?",
             ["Ce sont deux disques (des ronds)."], "des disques"),
            ("intermediaire", "forme-des-faces", "Dans une pyramide à base carrée, quelle est la forme des 4 faces qui montent vers la pointe ?",
             ["Ce sont des triangles."], "des triangles"),
            ("intermediaire", "forme-des-faces", "Combien de faces plates a un cylindre ?",
             ["Le dessus et le dessous : 2 disques."], F(2)),
            ("intermediaire", "forme-des-faces", "Combien de faces plates a un cône ?",
             ["Une seule : le disque du bas."], F(1)),
            ("intermediaire", "forme-des-faces", "Combien de faces triangulaires a une pyramide à base carrée ?",
             ["4 triangles et 1 carré, soit 5 faces."], F(4)),
        ])

    def roule(r):
        return r.choice([
            ("approfondissement", "rouler-ou-glisser", "Parmi le cube et le cylindre, lequel peut rouler ?",
             ["Un solide roule s'il a une partie ronde : le cylindre."], "le cylindre"),
            ("approfondissement", "rouler-ou-glisser", "Parmi la boule et le pavé droit, lequel roule dans tous les sens ?",
             ["La boule est toute ronde."], "la boule"),
            ("approfondissement", "rouler-ou-glisser", "Vrai ou faux : un cube peut rouler.",
             ["Faux : il n'a que des faces plates, il glisse mais ne roule pas."], "Faux"),
            ("approfondissement", "rouler-ou-glisser", "Vrai ou faux : un cône peut rouler.",
             ["Vrai : sa partie arrondie lui permet de rouler (en tournant autour de sa pointe)."], "Vrai"),
            ("approfondissement", "rouler-ou-glisser", "Cite deux solides qui ne peuvent pas rouler.",
             ["Les solides qui n'ont que des faces plates : le cube et le pavé droit (et la pyramide)."], "le cube et le pavé droit"),
            ("approfondissement", "rouler-ou-glisser", "Vrai ou faux : on peut empiler facilement des cubes.",
             ["Vrai : leurs faces plates tiennent bien les unes sur les autres."], "Vrai"),
        ])

    def compter(r):
        s = r.choice(["cube", "pavé droit"])
        n = r.randint(2, 5)
        quoi = r.choice([("faces", 0), ("sommets", 2), ("arêtes", 1)])
        v = _SOL[s][quoi[1]]
        nom = "dés" if s == "cube" else "boîtes de céréales"
        return ("probleme", "probleme-solides",
                f"Sur la table, il y a {n} {nom}. Combien {_de(quoi[0])} ont-ils en tout ?".replace(
                    "ont-ils", "ont-elles" if nom.startswith("boîtes") else "ont-ils"),
                [f"Un {s} a {v} {quoi[0]}.", F(" + ".join([str(v)] * n) + f" = {n} \\times {v} = {n * v}") + "."], f"{n * v} {quoi[0]}")

    return fas, objets, description, faces_forme, roule, compter


def gen_ce1_solides():
    fas, objets, description, faces_forme, roule, compter = _solides_communs()

    def plan(r):
        return r.choice([
            ("application", "plat-ou-solide", "Le carré est-il une figure plane ou un solide ?",
             ["Le carré est plat : on le dessine sur une feuille."], "une figure plane"),
            ("application", "plat-ou-solide", "Le cube est-il une figure plane ou un solide ?",
             ["Le cube a du volume : on peut le tenir dans la main."], "un solide"),
            ("application", "plat-ou-solide", "Le cercle est-il une figure plane ou un solide ?",
             ["Le cercle se dessine à plat."], "une figure plane"),
            ("application", "plat-ou-solide", "La boule est-elle une figure plane ou un solide ?",
             ["La boule a du volume."], "un solide"),
            ("application", "plat-ou-solide", "Le triangle est-il une figure plane ou un solide ?",
             ["Le triangle se dessine à plat."], "une figure plane"),
            ("application", "plat-ou-solide", "Le cylindre est-il une figure plane ou un solide ?",
             ["Le cylindre a du volume."], "un solide"),
            ("application", "plat-ou-solide", "Comment s'appelle le trait où deux faces d'un solide se rejoignent ?",
             ["C'est une arête."], "une arête"),
            ("application", "plat-ou-solide", "Comment s'appelle le coin pointu d'un solide ?",
             ["C'est un sommet."], "un sommet"),
        ])

    return assemble(209, [(fas, 10), (objets, 9), (plan, 7), (description, 7), (faces_forme, 6), (roule, 5), (compter, 6)])


_COLS = "ABCDEFGH"


def gen_ce1_symetrie_quadrillage():
    dirs = {"droite": (1, 0), "gauche": (-1, 0), "haut": (0, 1), "bas": (0, -1)}

    def deplacement(r):
        c = r.randint(0, 7); l = r.randint(1, 8)
        n = r.randint(1, 2)
        moves = []
        for _ in range(n):
            moves.append((r.choice(list(dirs)), r.randint(1, 3)))
        if n == 2 and dirs[moves[0][0]][0] * dirs[moves[1][0]][0] + dirs[moves[0][0]][1] * dirs[moves[1][0]][1] != 0:
            return None  # deux déplacements sur la même direction (ou opposés) : pas intéressant
        x, y = c, l
        etapes = [f"Départ : {_COLS[c]}{l}."]
        for d, k in moves:
            x += dirs[d][0] * k; y += dirs[d][1] * k
            if not (0 <= x <= 7 and 1 <= y <= 8):
                return None
            quoi = "on change de colonne" if d in ("droite", "gauche") else "on change de ligne"
            etapes.append(f"{_pl(k, 'case')} vers {'la ' + d if d in ('droite', 'gauche') else 'le ' + d} ({quoi}) : {_COLS[x]}{y}.")
        txt = " puis ".join(f"de {_pl(k, 'case')} vers {'la ' + d if d in ('droite', 'gauche') else 'le ' + d}"
                            for d, k in moves)
        return ("application", "se-deplacer",
                "Les colonnes sont A, B, C, D, E, F, G, H (de gauche à droite) et les lignes 1 à 8 (de bas en haut). "
                f"Le pion est sur la case {_COLS[c]}{l}. Il avance {txt}. Sur quelle case arrive-t-il ?",
                etapes, f"{_COLS[x]}{y}")

    def distance(r):
        k = r.randint(1, 9)
        cote = r.choice([("gauche", "droite"), ("droite", "gauche")])
        if r.random() < 0.6:
            return ("intermediaire", "symetrique-d-un-point",
                    f"Un point est à {_pl(k, 'case')} à {cote[0]} d'un axe de symétrie vertical. Où est son symétrique ?",
                    ["Le symétrique est de l'autre côté de l'axe, à la même distance."],
                    f"à {_pl(k, 'case')} à {cote[1]} de l'axe")
        return ("intermediaire", "symetrique-d-un-point",
                f"Un point est à {_pl(k, 'case')} au-dessus d'un axe de symétrie horizontal. Où est son symétrique ?",
                ["Le symétrique est de l'autre côté de l'axe, à la même distance."],
                f"à {_pl(k, 'case')} en dessous de l'axe")

    def case_sym(r):
        c = r.randint(0, 7); l = r.randint(1, 8)
        if r.random() < 0.5:
            k = 4 - c if c <= 3 else c - 3
            cote, autre = ("gauche", "droite") if c <= 3 else ("droite", "gauche")
            return ("approfondissement", "symetrique-sur-quadrillage",
                    "Sur un quadrillage, les colonnes sont A à H. L'axe de symétrie est le trait vertical entre la colonne D "
                    f"et la colonne E. Quelle est la case symétrique de {_COLS[c]}{l} ?",
                    [f"En partant de l'axe, {_COLS[c]} est la {rang(k)} colonne à {cote}.",
                     f"Le symétrique est dans la {rang(k)} colonne à {autre} : {_COLS[7 - c]}.", "La ligne ne change pas."],
                    f"{_COLS[7 - c]}{l}")
        k = 5 - l if l <= 4 else l - 4
        cote, autre = ("en dessous", "au-dessus") if l <= 4 else ("au-dessus", "en dessous")
        return ("approfondissement", "symetrique-sur-quadrillage",
                "Sur un quadrillage, les lignes sont numérotées de 1 à 8 (de bas en haut). L'axe de symétrie est le trait "
                f"horizontal entre la ligne 4 et la ligne 5. Quelle est la case symétrique de {_COLS[c]}{l} ?",
                [f"En partant de l'axe, la ligne {l} est la {rang(k)} ligne {cote}.",
                 f"Le symétrique est dans la {rang(k)} ligne {autre} : la ligne {9 - l}.", "La colonne ne change pas."],
                f"{_COLS[c]}{9 - l}")

    def lettres_sym(r):
        L = r.choice(list("AMTUVWY") + list("BCDE") + list("FGJLNPRSZ"))
        if L in "AMTUVWY":
            rep, c = "Oui, un axe vertical", f"Si on plie la lettre {L} de haut en bas, par le milieu, les deux moitiés se superposent."
        elif L in "BCDE":
            rep, c = "Oui, un axe horizontal", f"Si on plie la lettre {L} de gauche à droite, par le milieu, les deux moitiés se superposent."
        else:
            rep, c = "Non", f"On ne peut pas plier la lettre {L} pour que les deux moitiés se superposent."
        return ("intermediaire", "lettres-symetriques",
                f"La lettre {L} (en majuscule d'imprimerie) a-t-elle un axe de symétrie ? Si oui, est-il vertical ou horizontal ?",
                [c], rep)

    def figures(r):
        return r.choice([
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un carré ?",
             ["2 axes passent par le milieu des côtés et 2 par les coins : 4 axes."], F(4)),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un rectangle (qui n'est pas un carré) ?",
             ["2 axes, par le milieu des côtés. Les diagonales ne sont pas des axes."], F(2)),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un papillon ?",
             ["Un seul, au milieu, de la tête à la queue."], F(1)),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un cœur dessiné ?",
             ["Un seul, vertical, au milieu."], F(1)),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un cercle ?",
             ["Toute droite qui passe par le centre est un axe : il y en a une infinité."], "une infinité"),
            ("application", "axes-des-figures", "Où se trouve l'axe de symétrie d'un papillon : vertical ou horizontal ?",
             ["Il est vertical, au milieu du corps."], "vertical"),
        ])

    def vocab(r):
        return r.choice([
            ("application", "vocabulaire", "Sur un quadrillage, comment s'appelle le point où deux traits se croisent ?",
             ["C'est un nœud."], "un nœud"),
            ("application", "vocabulaire", "Sur un quadrillage, comment s'appelle un petit carreau ?",
             ["C'est une case."], "une case"),
            ("application", "vocabulaire", "Qu'est-ce qu'un axe de symétrie ?",
             ["C'est une ligne qui partage une figure en deux moitiés identiques qui se superposent quand on plie."],
             "une ligne de pliage qui partage la figure en deux moitiés identiques"),
            ("application", "vocabulaire", "Vrai ou faux : si je plie une figure sur son axe de symétrie, les deux moitiés se superposent.",
             ["Vrai : c'est la définition de l'axe de symétrie."], "Vrai"),
            ("application", "vocabulaire", "La symétrie ressemble à quel objet de la maison ?",
             ["Au miroir : de chaque côté, on retrouve la même chose, retournée."], "un miroir"),
            ("application", "vocabulaire", "Vrai ou faux : une ligne qui coupe une figure en deux parties est toujours un axe de symétrie.",
             ["Faux : les deux parties doivent être identiques et se superposer."], "Faux"),
        ])

    def prob(r):
        k = r.randint(0, 1)
        if k == 0:
            a, b, c = r.randint(1, 5), r.randint(1, 5), r.randint(1, 5)
            return ("probleme", "compter-les-cases",
                    f"Un robot avance de {_pl(a, 'case')} vers la droite, puis de {_pl(b, 'case')} vers le haut, "
                    f"puis de {_pl(c, 'case')} vers la gauche. Combien de cases a-t-il parcourues en tout ?",
                    [F(f"{a} + {b} + {c} = {a + b + c}") + "."], _pl(a + b + c, "case"))
        L = r.randint(2, 6); l = r.randint(2, 5)
        return ("probleme", "compter-les-cases",
                f"Sur un quadrillage, on colorie un rectangle de {L} cases de long et {l} cases de haut. "
                "Combien de cases sont coloriées ?",
                [f"Il y a {l} lignes de {L} cases.", F(f"{l} \\times {L} = {l * L}") + "."], _pl(l * L, "case"))

    return assemble(210, [(deplacement, 10), (figures, 6), (vocab, 5), (distance, 8), (lettres_sym, 8),
                          (case_sym, 8), (prob, 5)])


def gen_ce1_tables():
    def faciles(r):
        t = r.choice([2, 5, 10]); n = r.randint(0, 10)
        a, b = (t, n) if r.random() < 0.5 else (n, t)
        return ("application", "tables-de-2-5-10", f"Calcule : {F(f'{a} {X} {b}')}.",
                [F(f"{a} \\times {b} = {a * b}") + "."], F(a * b))

    def t34(r):
        t = r.choice([3, 4]); n = r.randint(2, 10)
        a, b = (t, n) if r.random() < 0.5 else (n, t)
        return ("intermediaire", "tables-de-3-et-4", f"Calcule : {F(f'{a} {X} {b}')}.",
                [F(" + ".join([str(b)] * a) + f" = {a * b}") + "." if a <= 5 else F(f"{a} \\times {b} = {a * b}") + "."],
                F(a * b))

    def reiteree(r):
        k = r.randint(2, 5); n = r.choice([2, 3, 4, 5, 10])
        return ("application", "addition-repetee",
                f"Écris {F(' + '.join([str(n)] * k))} avec le signe $\\times$, puis calcule.",
                [f"Le nombre {n} est écrit {k} fois.", F(f"{k} \\times {n} = {k * n}") + "."],
                F(f"{k} \\times {n} = {k * n}"))

    def manquant(r):
        t = r.choice([2, 3, 4, 5, 10]); n = r.randint(1, 10)
        return ("approfondissement", "facteur-manquant", f"Complète : {F(f'{t} {X} {LD} = {t * n}')}.",
                [f"Dans la table de {t}, on cherche {t * n}.", F(f"{t} \\times {n} = {t * n}") + "."], F(n))

    def cours(r):
        a = r.randint(2, 10); b = r.randint(2, 10)
        k = r.randint(0, 3)
        if k == 0 and a != b:
            return ("approfondissement", "proprietes", f"Vrai ou faux : {F(f'{a} {X} {b} = {b} {X} {a}')}.",
                    ["On peut échanger les nombres dans une multiplication.", F(f"{a} \\times {b} = {a * b}") + "."], "Vrai")
        if k == 1:
            return ("approfondissement", "proprietes", f"Calcule : {F(f'{a * 3 + b} {X} 0')}.",
                    ["Multiplier par 0 donne toujours 0."], F(0))
        if k == 2:
            n = a * 3 + b
            return ("approfondissement", "proprietes", f"Calcule : {F(f'{n} {X} 1')}.",
                    ["Multiplier par 1 ne change rien."], F(n))
        if k == 3 and a <= 5 and b <= 5 and a * b != a + b:
            return ("approfondissement", "proprietes", f"Vrai ou faux : {F(f'{a} {X} {b} = {a + b}')}.",
                    ["Il ne faut pas confondre $\\times$ et $+$.",
                     F(f"{a} \\times {b} = {a * b}") + " mais " + F(f"{a} + {b} = {a + b}") + "."], "Faux")
        return None

    def suites(r):
        t = r.choice([2, 3, 4, 5, 10]); d = r.randint(1, 5)
        L = [t * (d + i) for i in range(5)]
        return ("intermediaire", "compter-de-n-en-n",
                f"Continue : on compte de {t} en {t}. {L[0]}, {L[1]}, {L[2]}, ?, ?",
                [f"On ajoute {t} à chaque fois."], f"{L[3]}, {L[4]}")

    def prob(r):
        o = r.choice(OBJETS)
        k = r.randint(0, 2)
        if k == 0:
            n = r.randint(2, 9); t = r.choice([2, 3, 4, 5, 10])
            return ("probleme", "probleme-multiplication",
                    f"Il y a {n} sachets de {t} {o[1]}. Combien de {o[1]} y a-t-il en tout ?",
                    [F(f"{n} \\times {t} = {n * t}") + "."], q(n * t, o))
        if k == 1:
            n = r.randint(2, 10)
            return ("probleme", "probleme-multiplication",
                    f"Une voiture a 4 roues. Combien de roues ont {n} voitures ?",
                    [F(f"{n} \\times 4 = {4 * n}") + "."], f"{4 * n} roues")
        n = r.randint(2, 10); p = r.choice([2, 5, 10])
        return ("probleme", "probleme-multiplication",
                f"Un cahier coûte {p} €. Combien coûtent {n} cahiers ?",
                [F(f"{n} \\times {p} = {n * p}") + "."], f"{n * p} €")

    return assemble(211, [(faciles, 10), (reiteree, 7), (t34, 8), (suites, 5), (manquant, 7), (cours, 6), (prob, 7)])


# =====================================================================
#                                 CE2
# =====================================================================
_POLY = {3: "triangle", 4: "quadrilatère", 5: "pentagone"}


def gen_ce2_angles_polygones():
    def nom(r):
        n = r.choice([3, 4, 5])
        k = r.randint(0, 2)
        if k == 0:
            return ("application", "nommer-un-polygone", f"Comment s'appelle un polygone qui a {n} côtés ?",
                    [f"{n} côtés : c'est un {_POLY[n]}."], f"un {_POLY[n]}")
        if k == 1:
            return ("application", "nommer-un-polygone", f"Combien de côtés a un {_POLY[n]} ?",
                    [f"Le {_POLY[n]} a {n} côtés."], F(n))
        return ("application", "nommer-un-polygone", f"Combien de sommets a un {_POLY[n]} ?",
                ["Un polygone a autant de sommets que de côtés.", f"Le {_POLY[n]} a {n} côtés, donc {n} sommets."], F(n))

    def polygone(r):
        return r.choice([
            ("intermediaire", "polygone-ou-pas", "Un cercle est-il un polygone ?",
             ["Non : un polygone n'a que des côtés droits. Le bord du cercle est courbe."], "Non"),
            ("intermediaire", "polygone-ou-pas", "Une figure fermée qui a 4 côtés droits est-elle un polygone ?",
             ["Oui : elle est fermée et tous ses côtés sont droits. C'est un quadrilatère."], "Oui, un quadrilatère"),
            ("intermediaire", "polygone-ou-pas", "Une figure faite de 3 segments qui ne se ferme pas est-elle un polygone ?",
             ["Non : un polygone doit être une figure fermée."], "Non"),
            ("intermediaire", "polygone-ou-pas", "Qu'est-ce qu'un polygone ?",
             ["C'est une figure fermée dont tous les côtés sont des segments (droits)."],
             "une figure fermée dont tous les côtés sont droits"),
            ("intermediaire", "polygone-ou-pas", "Un carré est-il un polygone ?",
             ["Oui : il est fermé et a 4 côtés droits. C'est un quadrilatère."], "Oui"),
            ("intermediaire", "polygone-ou-pas", "Une figure en forme de demi-disque (une demi-lune) est-elle un polygone ?",
             ["Non : une partie de son bord est courbe."], "Non"),
            ("intermediaire", "polygone-ou-pas", "Le rectangle et le carré sont-ils des quadrilatères ?",
             ["Oui : ce sont des polygones à 4 côtés."], "Oui"),
            ("intermediaire", "polygone-ou-pas", "Vrai ou faux : un pentagone a 5 sommets.",
             ["Vrai : 5 côtés, donc 5 sommets."], "Vrai"),
        ])

    def angle_droit(r):
        return r.choice([
            ("application", "angle-droit", "Avec quel instrument vérifie-t-on qu'un angle est droit ?",
             ["Avec l'équerre : on place son coin sur le sommet de l'angle."], "l'équerre"),
            ("application", "angle-droit", "Comment code-t-on un angle droit sur une figure ?",
             ["On dessine un petit carré dans le coin."], "par un petit carré dans le coin"),
            ("application", "angle-droit", "Un angle plus ouvert qu'un angle droit est-il un angle droit ?",
             ["Non : il est trop grand."], "Non"),
            ("application", "angle-droit", "Un angle plus fermé (plus pointu) qu'un angle droit est-il un angle droit ?",
             ["Non : il est trop petit."], "Non"),
            ("application", "angle-droit", "Cite un objet de la classe qui a des angles droits.",
             ["Par exemple une feuille, un cahier, une fenêtre, le tableau."], "une feuille (par exemple)"),
            ("application", "angle-droit", "Où pose-t-on le coin de l'équerre pour vérifier un angle ?",
             ["Sur le sommet de l'angle, un côté de l'équerre le long d'un côté de l'angle."], "sur le sommet de l'angle"),
            ("application", "angle-droit", "Vrai ou faux : on peut dire qu'un angle est droit juste en le regardant.",
             ["Faux : on le vérifie toujours avec l'équerre."], "Faux"),
        ])

    def horloge(r):
        h = r.choice([1, 2, 3, 4, 5, 7, 8, 9, 10, 11])
        a = (30 * h) % 360
        a = min(a, 360 - a)
        rep = "un angle droit" if a == 90 else ("plus fermé qu'un angle droit" if a < 90 else "plus ouvert qu'un angle droit")
        return ("approfondissement", "angles-de-l-horloge",
                f"Il est {h} heure{'s' if h > 1 else ''} pile. Les deux aiguilles forment-elles un angle droit, un angle plus "
                "fermé ou un angle plus ouvert qu'un angle droit ?",
                ["À 3 heures et à 9 heures, les aiguilles forment un angle droit.",
                 f"À {h} heure{'s' if h > 1 else ''}, l'angle est {'droit' if a == 90 else ('plus fermé' if a < 90 else 'plus ouvert')}."],
                rep)

    def carre_rect(r):
        k = r.randint(0, 2)
        if k == 0:
            L = r.randint(5, 20); l = r.randint(2, L - 1)
            return ("intermediaire", "carre-et-rectangle",
                    f"Un rectangle a deux côtés de {L} cm et un côté de {l} cm. Combien mesure son quatrième côté ?",
                    ["Dans un rectangle, les côtés opposés ont la même longueur."], f"{l} cm")
        if k == 1:
            return r.choice([
                ("intermediaire", "carre-et-rectangle", "Combien d'angles droits a un rectangle ?",
                 ["Le rectangle a 4 angles droits."], F(4)),
                ("intermediaire", "carre-et-rectangle", "Quel quadrilatère a 4 angles droits et 4 côtés de même longueur ?",
                 ["C'est le carré."], "le carré"),
                ("intermediaire", "carre-et-rectangle", "Vrai ou faux : un carré est un rectangle particulier.",
                 ["Vrai : c'est un rectangle dont tous les côtés sont égaux."], "Vrai"),
                ("intermediaire", "carre-et-rectangle", "Vrai ou faux : tout rectangle est un carré.",
                 ["Faux : un rectangle peut avoir 2 côtés longs et 2 côtés courts."], "Faux"),
                ("intermediaire", "carre-et-rectangle", "Un quadrilatère a 4 angles droits mais ses côtés ne sont pas tous égaux. Comment s'appelle-t-il ?",
                 ["4 angles droits : rectangle ; côtés pas tous égaux : ce n'est pas un carré."], "un rectangle"),
            ])
        c = r.randint(3, 25)
        return ("intermediaire", "carre-et-rectangle", f"Un carré a un côté de {c} cm. Combien mesurent ses autres côtés ?",
                ["Les 4 côtés d'un carré ont la même longueur."], f"{c} cm chacun")

    def tri_rect(r):
        return r.choice([
            ("intermediaire", "triangle-rectangle", "Comment s'appelle un triangle qui a un angle droit ?",
             ["C'est un triangle rectangle."], "un triangle rectangle"),
            ("intermediaire", "triangle-rectangle", "Combien d'angles droits a un triangle rectangle ?",
             ["Un triangle rectangle a un seul angle droit."], F(1)),
            ("intermediaire", "triangle-rectangle", "Comment vérifie-t-on qu'un triangle est rectangle ?",
             ["On place l'équerre sur le sommet où l'on pense voir l'angle droit."], "avec l'équerre"),
            ("intermediaire", "triangle-rectangle", "Si on coupe un rectangle en deux par une diagonale, quelles figures obtient-on ?",
             ["On obtient deux triangles qui ont chacun un angle droit : deux triangles rectangles."], "deux triangles rectangles"),
            ("intermediaire", "triangle-rectangle", "Vrai ou faux : tous les triangles ont un angle droit.",
             ["Faux : seuls les triangles rectangles en ont un."], "Faux"),
        ])

    def prob(r):
        k = r.randint(0, 1)
        p = r.choice(PRENOMS)
        if k == 0:
            n1, n2 = r.sample([3, 4, 5], 2)
            a = r.randint(2, 6); b = r.randint(2, 6)
            tot = a * n1 + b * n2
            return ("probleme", "probleme-polygones",
                    f"{p[0]} dessine {a} {_POLY[n1]}s et {b} {_POLY[n2]}s. Combien de côtés a-t-{il(p)} tracés en tout ?",
                    [F(f"{a} {X} {n1} = {a * n1}") + " et " + F(f"{b} {X} {n2} = {b * n2}") + ".",
                     F(f"{a * n1} + {b * n2} = {tot}") + "."], f"{tot} côtés")
        a = r.randint(2, 9)
        return ("probleme", "probleme-polygones",
                f"{p[0]} découpe {a} rectangles. Combien d'angles droits y a-t-il en tout ?",
                ["Un rectangle a 4 angles droits.", F(f"{a} {X} 4 = {4 * a}") + "."], f"{4 * a} angles droits")

    return assemble(301, [(nom, 8), (angle_droit, 7), (polygone, 7), (carre_rect, 8), (tri_rect, 5), (horloge, 8), (prob, 7)])


def gen_ce2_calcul_mental():
    def dizaines(r):
        a = r.randint(12, 89); d = r.randint(1, 6) * 10
        if r.random() < 0.5 and a + d < 100:
            return ("application", "ajouter-enlever-des-dizaines", f"Calcule de tête : {F(f'{a} + {d}')}.",
                    ["Seul le chiffre des dizaines change.", F(f"{a} + {d} = {a + d}") + "."], F(a + d))
        if a - d > 0:
            return ("application", "ajouter-enlever-des-dizaines", f"Calcule de tête : {F(f'{a} - {d}')}.",
                    ["Seul le chiffre des dizaines change.", F(f"{a} - {d} = {a - d}") + "."], F(a - d))
        return None

    def passer(r):
        a = r.randint(6, 9) + r.randint(0, 7) * 10; b = r.randint(3, 9)
        h = (a // 10 + 1) * 10
        if a + b <= h:
            return None
        return ("application", "passer-par-la-dizaine", f"Calcule de tête : {F(f'{a} + {b}')}.",
                [f"{a} a besoin de {h - a} pour faire {h}.", f"Dans le {b}, j'utilise {h - a} : il reste {b - (h - a)}.",
                 F(f"{h} + {b - (h - a)} = {a + b}") + "."], F(a + b))

    def doubles(r):
        if r.random() < 0.5:
            a = r.choice([6, 7, 8, 9, 12, 14, 15, 16, 25, 30, 35, 45, 50, 60, 75, 100])
            return ("intermediaire", "doubles-et-moities", f"Quel est le double de {a} ?",
                    [F(f"{a} + {a} = {2 * a}") + "."], F(2 * a))
        a = r.choice([10, 14, 16, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 200])
        return ("intermediaire", "doubles-et-moities", f"Quelle est la moitié de {a} ?",
                [F(f"{a // 2} + {a // 2} = {a}") + "."], F(a // 2))

    def fois10(r):
        a = r.randint(3, 99)
        return ("application", "multiplier-par-10", f"Calcule de tête : {F(f'{a} {X} 10')}.",
                ["Pour multiplier par 10, on écrit un zéro à la fin.", F(f"{a} {X} 10 = {nl(a * 10)}") + "."],
                F(nl(a * 10)))

    def decomposer(r):
        a = r.randint(11, 69); b = r.randint(11, 29)
        da, ua = divmod(a, 10); db, ub = divmod(b, 10)
        if a + b > 99:
            return None
        diff = "intermediaire" if ua + ub < 10 else "approfondissement"
        return (diff, "decomposer", f"Calcule de tête en décomposant : {F(f'{a} + {b}')}.",
                [F(f"({da * 10} + {db * 10}) + ({ua} + {ub}) = {da * 10 + db * 10} + {ua + ub} = {a + b}") + "."], F(a + b))

    def compl100(r):
        a = r.randint(1, 9) * 10 + r.choice([0, 5, r.randint(1, 9)])
        if a >= 100 or a < 10:
            return None
        return ("approfondissement", "complement-a-100", f"Combien faut-il ajouter à {a} pour faire 100 ?",
                [f"On va d'abord à la dizaine suivante, puis à 100." if a % 10 else "On compte les dizaines qui manquent.",
                 F(f"{a} + {100 - a} = 100") + "."], F(100 - a))

    def prob(r):
        p = r.choice(PRENOMS)
        k = r.randint(0, 2)
        if k == 0:
            n = r.randint(3, 15)
            return ("probleme", "probleme-calcul-mental",
                    f"Un paquet contient 10 crayons. Combien de crayons y a-t-il dans {n} paquets ?",
                    [F(f"{n} {X} 10 = {n * 10}") + "."], f"{n * 10} crayons")
        if k == 1:
            a = r.choice([35, 45, 55, 65, 70, 75, 80, 85, 90, 95])
            return ("probleme", "probleme-calcul-mental",
                    f"{p[0]} a {a} €. {Il(p)} veut acheter un vélo à 100 €. Combien lui manque-t-il ?",
                    ["On cherche le complément à 100.", F(f"{a} + {100 - a} = 100") + "."], f"{100 - a} €")
        a = r.choice([12, 15, 18, 24, 25, 35, 40, 45])
        return ("probleme", "probleme-calcul-mental",
                f"Un livre a {2 * a} pages. {p[0]} en a lu la moitié. Combien de pages a-t-{il(p)} lues ?",
                [f"La moitié de {2 * a} : " + F(f"{a} + {a} = {2 * a}") + "."], f"{a} pages")

    return assemble(302, [(dizaines, 8), (passer, 8), (fois10, 7), (doubles, 8), (decomposer, 8), (compl100, 5), (prob, 6)])


_FR = {2: ("la moitié", "un demi", "demis"), 3: ("le tiers", "un tiers", "tiers"), 4: ("le quart", "un quart", "quarts")}


def frac(a, b):
    return f"\\dfrac{{{a}}}{{{b}}}"


def gen_ce2_fractions():
    def de_nombre(r):
        d = r.choice([2, 3, 4]); n = d * r.randint(2, 12)
        if r.random() < 0.5:
            return ("application", "fraction-d-un-nombre", f"Calcule {_FR[d][0]} de {n}.",
                    [f"On partage {n} en {d} parts égales.", F(f"{n} : {d} = {n // d}") + "."], F(n // d))
        return ("application", "fraction-d-un-nombre", f"Calcule {F(frac(1, d))} de {n}.",
                [f"{F(frac(1, d))}, c'est {_FR[d][0]} : on partage {n} en {d} parts égales.",
                 F(f"{n} : {d} = {n // d}") + "."], F(n // d))

    def vocab(r):
        a, b = r.choice([(1, 2), (1, 3), (1, 4), (3, 4), (2, 3), (2, 4)])
        k = r.randint(0, 2)
        lect = {(1, 2): "un demi", (1, 3): "un tiers", (1, 4): "un quart", (3, 4): "trois quarts",
                (2, 3): "deux tiers", (2, 4): "deux quarts"}[(a, b)]
        if k == 0:
            return ("application", "vocabulaire", f"Comment lit-on {F(frac(a, b))} ?",
                    [f"Le {b} du bas donne le nom des parts, le {a} du haut le nombre de parts prises."], lect)
        if k == 1:
            return ("application", "vocabulaire", f"Dans {F(frac(a, b))}, que veut dire le nombre du bas ({b}) ?",
                    [f"Le nombre du bas dit en combien de parts égales on a partagé : {b}."], f"Le tout est partagé en {b} parts égales.")
        return ("application", "vocabulaire", f"Dans {F(frac(a, b))}, que veut dire le nombre du haut ({a}) ?",
                [f"Le nombre du haut dit combien de parts on prend : {a}."], f"On prend {a} part{'s' if a > 1 else ''}.")

    def ecrire(r):
        b = r.choice([2, 3, 4]); a = r.randint(1, b)
        objet, verbe = r.choice([("une pizza", "manges"), ("une tablette de chocolat", "manges"), ("une tarte", "manges"),
                                 ("un ruban", "prends"), ("une galette", "manges"), ("une baguette", "prends")])
        f_ = "coupée" if objet.startswith("une") else "coupé"
        return ("intermediaire", "ecrire-une-fraction",
                f"{objet.capitalize()} est {f_} en {b} parts égales. Tu en {verbe} {a}. "
                "Quelle fraction as-tu prise ?",
                [f"Le tout est partagé en {b} parts égales (nombre du bas) ; tu en prends {a} (nombre du haut)."]
                + ([F(frac(a, b) + " = 1") + " : tu as pris le tout."] if a == b else []),
                F(frac(a, b)))

    def comparer(r):
        k = r.randint(0, 2)
        if k == 0:
            a, b = r.sample([2, 3, 4], 2)
            g = min(a, b)
            return ("intermediaire", "comparer-des-fractions", f"Quelle est la plus grande part : {F(frac(1, a))} ou {F(frac(1, b))} ?",
                    ["Plus on coupe en parts, plus chaque part est petite.", f"{F(frac(1, g))} est la plus grande."],
                    F(frac(1, g)))
        if k == 1:
            a, b = r.sample([1, 2, 3], 2)
            g = max(a, b)
            return ("intermediaire", "comparer-des-fractions", f"Quelle fraction est la plus grande : {F(frac(a, 4))} ou {F(frac(b, 4))} ?",
                    ["Les parts sont de même taille (des quarts) : on compare le nombre de parts prises."], F(frac(g, 4)))
        return r.choice([
            ("approfondissement", "comparer-des-fractions", f"Vrai ou faux : {F(frac(2, 4))} est la même quantité que {F(frac(1, 2))}.",
             ["Deux parts sur quatre, c'est la moitié."], "Vrai"),
            ("approfondissement", "comparer-des-fractions", f"Vrai ou faux : {F(frac(1, 4))} est plus grand que {F(frac(1, 2))}.",
             ["Un quart est plus petit qu'un demi : on a coupé en plus de parts."], "Faux"),
            ("approfondissement", "comparer-des-fractions", f"Vrai ou faux : {F(frac(3, 4))} est plus grand que {F(frac(1, 2))}.",
             [f"{F(frac(1, 2))} = {F(frac(2, 4))}, et 3 quarts, c'est plus que 2 quarts."], "Vrai"),
        ])

    def tout(r):
        return r.choice([
            ("approfondissement", "le-tout", f"À quoi est égal {F(frac(4, 4))} ?",
             ["On prend toutes les parts : c'est le tout entier."], F(1)),
            ("approfondissement", "le-tout", "Combien de quarts faut-il pour faire un tout ?",
             [F(frac(4, 4) + " = 1") + "."], "4 quarts"),
            ("approfondissement", "le-tout", "Combien de demis faut-il pour faire un tout ?",
             [F(frac(2, 2) + " = 1") + "."], "2 demis"),
            ("approfondissement", "le-tout", "Combien de tiers faut-il pour faire un tout ?",
             [F(frac(3, 3) + " = 1") + "."], "3 tiers"),
            ("approfondissement", "le-tout", f"Une pizza est coupée en 4 parts égales. On en a mangé {F(frac(3, 4))}. Quelle fraction reste-t-il ?",
             ["Il reste 1 part sur 4."], F(frac(1, 4))),
            ("approfondissement", "le-tout", f"Une tarte est coupée en 3 parts égales. On en a mangé {F(frac(1, 3))}. Quelle fraction reste-t-il ?",
             ["Il reste 2 parts sur 3."], F(frac(2, 3))),
            ("approfondissement", "le-tout", "Sur une bande partagée en 4 parts égales, quelle fraction est au milieu ?",
             [f"Le milieu, c'est {F(frac(2, 4))}, soit {F(frac(1, 2))}."], F(frac(2, 4)) + " (soit " + F(frac(1, 2)) + ")"),
        ])

    def plusieurs(r):
        b = r.choice([3, 4]); a = r.randint(2, b - 1); n = b * r.randint(2, 10)
        return ("approfondissement", "plusieurs-parts", f"Calcule {F(frac(a, b))} de {n}.",
                [f"D'abord une part : " + F(f"{n} : {b} = {n // b}") + ".",
                 f"Puis {a} parts : " + F(f"{a} {X} {n // b} = {a * n // b}") + "."], F(a * n // b))

    def prob(r):
        p = r.choice(PRENOMS)
        k = r.randint(0, 2)
        if k == 0:
            n = 2 * r.randint(9, 15)
            return ("probleme", "probleme-fractions",
                    f"Une classe a {n} élèves. La moitié des élèves mange à la cantine. Combien d'élèves mangent à la cantine ?",
                    [F(f"{n} : 2 = {n // 2}") + "."], f"{n // 2} élèves")
        if k == 1:
            n = 4 * r.randint(3, 10)
            return ("probleme", "probleme-fractions",
                    f"{p[0]} a {n} €. {Il(p)} dépense le quart de son argent. Combien dépense-t-{il(p)} ? Combien lui reste-t-il ?",
                    [F(f"{n} : 4 = {n // 4}") + f" : {il(p)} dépense {n // 4} €.", F(f"{n} - {n // 4} = {n - n // 4}") + "."],
                    f"{n // 4} € dépensés, il reste {n - n // 4} €")
        n = 3 * r.randint(4, 10)
        return ("probleme", "probleme-fractions",
                f"Un sac contient {n} billes. Le tiers des billes sont rouges. Combien de billes ne sont pas rouges ?",
                [F(f"{n} : 3 = {n // 3}") + " billes rouges.", F(f"{n} - {n // 3} = {n - n // 3}") + "."],
                f"{n - n // 3} billes")

    return assemble(303, [(de_nombre, 10), (vocab, 7), (ecrire, 8), (comparer, 7), (tout, 5), (plusieurs, 7), (prob, 6)])


def corrige_multiplication(n, k):
    d = _chiffres(n); ret = 0; L = []
    for i, c in enumerate(d):
        p = k * c + ret
        expr = f"{k} {X} {c}" + (f" + {ret}" if ret else "")
        dernier = i == len(d) - 1
        lig = f"{_RANGS[i].capitalize()} : " + F(f"{expr} = {p}")
        if dernier:
            lig += f", j'écris {p}."
        elif p >= 10:
            lig += f", j'écris {p % 10} et je retiens {p // 10}."
        else:
            lig += f", j'écris {p}."
        ret = p // 10
        L.append(lig)
    L.append("Résultat : " + F(f"{nl(n)} {X} {k} = {nl(n * k)}") + ".")
    return L


def gen_ce2_multiplication_posee():
    def tables(r):
        a = r.randint(2, 9); b = r.randint(2, 9)
        return ("application", "tables", f"Calcule : {F(f'{a} {X} {b}')}.", [F(f"{a} {X} {b} = {a * b}") + "."], F(a * b))

    def sans(r):
        n = r.randint(11, 444); k = r.randint(2, 4)
        if any(k * c >= 10 for c in _chiffres(n)):
            return None
        return ("application", "sans-retenue", f"Pose et calcule : {F(f'{n} {X} {k}')}.", corrige_multiplication(n, k), F(n * k))

    def avec(r):
        n = r.randint(12, 999); k = r.randint(2, 9)
        if n * k > 9999 or all(k * c < 10 for c in _chiffres(n)[:-1]):
            return None
        diff = "intermediaire" if n < 100 else "approfondissement"
        return (diff, "avec-retenue", f"Pose et calcule : {F(f'{n} {X} {k}')}.", corrige_multiplication(n, k), F(nl(n * k)))

    def fois10(r):
        n = r.randint(4, 999)
        return ("application", "multiplier-par-10", f"Calcule : {F(f'{n} {X} 10')}.",
                ["On ajoute un zéro à droite : chaque unité devient une dizaine.", F(f"{n} {X} 10 = {nl(n * 10)}") + "."],
                F(nl(n * 10)))

    def decomp(r):
        d = r.randint(1, 9); u = r.randint(1, 9); k = r.randint(2, 9)
        n = 10 * d + u
        return ("intermediaire", "decomposer", f"Calcule {F(f'{n} {X} {k}')} en décomposant {n} en {10 * d} + {u}.",
                [F(f"{10 * d} {X} {k} = {10 * d * k}") + " et " + F(f"{u} {X} {k} = {u * k}") + ".",
                 F(f"{10 * d * k} + {u * k} = {n * k}") + "."], F(n * k))

    def vocab(r):
        a = r.randint(3, 9); b = r.randint(3, 9)
        k = r.randint(0, 2)
        if k == 0:
            return ("application", "vocabulaire", f"Dans {F(f'{a} {X} {b} = {a * b}')}, comment s'appelle {a * b} ?",
                    ["Le résultat d'une multiplication s'appelle le produit."], "le produit")
        if k == 1 and a != b:
            return ("application", "vocabulaire", f"Dans {F(f'{a} {X} {b} = {a * b}')}, comment s'appellent {a} et {b} ?",
                    ["Les nombres que l'on multiplie s'appellent les facteurs."], "les facteurs")
        if a != b:
            return ("application", "vocabulaire", f"Vrai ou faux : {F(f'{a} {X} {b}')} et {F(f'{b} {X} {a}')} donnent le même produit.",
                    ["On peut échanger les facteurs.", F(f"{a} {X} {b} = {b} {X} {a} = {a * b}") + "."], "Vrai")
        return None

    def prob(r):
        k = r.randint(0, 2)
        if k == 0:
            n = r.randint(3, 9); p = r.randint(12, 49)
            return ("probleme", "probleme-multiplication",
                    f"Un car transporte {p} élèves. Combien d'élèves transportent {n} cars pleins ?",
                    corrige_multiplication(p, n), f"{nt(n * p)} élèves")
        if k == 1:
            n = r.randint(3, 8); p = r.randint(15, 125)
            return ("probleme", "probleme-multiplication",
                    f"Un vélo coûte {p} €. Une école en achète {n}. Combien paie-t-elle ?",
                    corrige_multiplication(p, n), f"{nt(n * p)} €")
        n = r.randint(3, 9); p = r.choice([24, 25, 30, 36, 48, 50, 60])
        return ("probleme", "probleme-multiplication",
                f"Une boîte contient {p} crayons. Combien de crayons y a-t-il dans {n} boîtes ?",
                corrige_multiplication(p, n), f"{nt(n * p)} crayons")

    return assemble(304, [(tables, 7), (vocab, 5), (fois10, 6), (sans, 8), (avec, 9), (decomp, 7), (prob, 8)])


def gen_ce2_nombres_10000():
    def valeur(r):
        n = r.randint(1111, 9999)
        ch = _chiffres(n)
        rang_ = r.randint(0, 3)
        c = ch[rang_]
        if ch.count(c) > 1 or c == 0:
            return None
        v = c * 10 ** rang_
        return ("application", "valeur-d-un-chiffre", f"Dans {nt(n)}, que vaut le chiffre {c} ?",
                [f"Le {c} est au rang des {_RANGS[rang_]}.", f"Il vaut {nt(v)}."], F(nl(v)))

    def decomp(r):
        n = r.randint(1001, 9999)
        m, c, d, u = n // 1000, n // 100 % 10, n // 10 % 10, n % 10
        termes = [x for x in (m * 1000, c * 100, d * 10, u) if x]
        if r.random() < 0.5:
            return ("intermediaire", "decomposer", f"Décompose {nt(n)} selon ses rangs (milliers, centaines, dizaines, unités).",
                    [f"{m} millier{'s' if m > 1 else ''}, {c} centaine{'s' if c > 1 else ''}, "
                     f"{d} dizaine{'s' if d > 1 else ''} et {u} unité{'s' if u > 1 else ''}."],
                    F(f"{nl(n)} = " + " + ".join(nl(t) for t in termes)))
        return ("intermediaire", "decomposer", f"Calcule : {F(' + '.join(nl(t) for t in termes))}.",
                ["On place chaque nombre à son rang."], F(nl(n)))

    def lire(r):
        n = r.randint(1000, 9999)
        if r.random() < 0.35:
            n = r.choice([1000, 2000, 5000, 7050, 3080, 4200, 6007, 8090, 9100, 1071, 2380, 10000, 3001, 5500, 7700])
        if r.random() < 0.5:
            return ("intermediaire", "lire-et-ecrire", f"Écris en chiffres : {lettres(n)}.",
                    [f"On écrit d'abord les milliers, puis le reste : {nt(n)}."], F(nl(n)))
        return ("intermediaire", "lire-et-ecrire", f"Écris en lettres : {nt(n)}.",
                [f"On lit d'abord les milliers, puis le reste : « {lettres(n)} »."], lettres(n))

    def comparer(r):
        a = r.randint(1000, 9999)
        b = r.choice([a + 100 * r.randint(1, 5), a - r.randint(1, 50), r.randint(100, 9999), a + r.randint(1, 9)])
        if not 100 <= b <= 9999 or a == b:
            return None
        s = "<" if a < b else ">"
        if len(str(a)) != len(str(b)):
            ex = "Le nombre qui a le plus de chiffres est le plus grand."
        else:
            i = next(k for k in range(4) if str(a)[k] != str(b)[k])
            ex = f"On compare rang par rang depuis la gauche : la différence est au rang des {['milliers', 'centaines', 'dizaines', 'unités'][i]}."
        return ("application", "comparer", f"Compare {nt(a)} et {nt(b)} : écris $<$ ou $>$.",
                [ex, F(f"{nl(a)} {s} {nl(b)}") + "."], F(s))

    def ranger(r):
        base = r.randint(1, 8) * 1000
        L = r.sample(range(base, base + 1000, 10), 4)
        if r.random() < 0.5:
            R = sorted(L)
            return ("intermediaire", "ranger", f"Range dans l'ordre croissant : {', '.join(map(nt, L))}.",
                    ["Croissant : du plus petit au plus grand.", F(" < ".join(map(nl, R))) + "."], ", ".join(map(nt, R)))
        R = sorted(L, reverse=True)
        return ("intermediaire", "ranger", f"Range dans l'ordre décroissant : {', '.join(map(nt, L))}.",
                ["Décroissant : du plus grand au plus petit.", F(" > ".join(map(nl, R))) + "."], ", ".join(map(nt, R)))

    def avant_apres(r):
        k = r.randint(0, 3)
        if k == 0:
            n = r.choice([999, 1999, 2999, 3999, 4999, 5999, 6999, 7999, 8999, 9999, 1099, 2499, 3899, 6099])
            return ("approfondissement", "avant-apres", f"Quel nombre vient juste après {nt(n)} ?",
                    ["Quand les derniers chiffres sont des 9, ajouter 1 fait « tout basculer ».",
                     F(f"{nl(n)} + 1 = {nl(n + 1)}") + "."], F(nl(n + 1)))
        if k == 1:
            n = r.choice([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 2100, 4500, 7010])
            return ("approfondissement", "avant-apres", f"Quel nombre vient juste avant {nt(n)} ?",
                    [F(f"{nl(n)} - 1 = {nl(n - 1)}") + "."], F(nl(n - 1)))
        n = r.randint(1000, 9890)
        pas = r.choice([10, 100])
        if k == 2:
            return ("approfondissement", "avant-apres", f"Ajoute {pas} à {nt(n)}.",
                    [F(f"{nl(n)} + {pas} = {nl(n + pas)}") + "."], F(nl(n + pas)))
        return ("approfondissement", "avant-apres", f"Enlève {pas} à {nt(n)}.",
                [F(f"{nl(n)} - {pas} = {nl(n - pas)}") + "."], F(nl(n - pas)))

    def prob(r):
        k = r.randint(0, 2)
        if k == 0:
            m = r.randint(1, 9); c = r.randint(0, 9); d = r.randint(0, 9)
            n = 1000 * m + 100 * c + 10 * d
            parts = [f"{_pl(m, 'carton')} de 1 000 feuilles".replace("1 000", nt(1000))]
            if c:
                parts.append(f"{_pl(c, 'ramette')} de 100 feuilles")
            if d:
                parts.append(f"{_pl(d, 'paquet')} de 10 feuilles")
            return ("probleme", "probleme-nombres", f"L'école reçoit {enum(parts)}. Combien de feuilles reçoit-elle ?",
                    [F(" + ".join(nl(x) for x in (1000 * m, 100 * c, 10 * d) if x) + f" = {nl(n)}") + "."], f"{nt(n)} feuilles")
        if k == 1:
            n = r.randint(1100, 9900)
            return ("probleme", "probleme-nombres",
                    f"Un magasin a {nt(n)} stylos. Il les range en boîtes de 1 000. Combien de boîtes pleines peut-il remplir ?",
                    [f"Dans {nt(n)}, il y a {_pl(n // 1000, 'millier')}."], _pl(n // 1000, "boîte"))
        a = r.randint(1200, 4800); b = r.randint(a + 1, 9000)
        v1, v2 = r.sample(["Lille", "Rennes", "Nantes", "Tours", "Dijon", "Brest", "Nancy", "Reims"], 2)
        return ("probleme", "probleme-nombres",
                f"Le collège de {v1} a reçu {nt(a)} livres et celui de {v2} en a reçu {nt(b)}. Lequel en a reçu le plus ?",
                [F(f"{nl(b)} > {nl(a)}") + "."], f"celui de {v2}")

    return assemble(305, [(valeur, 8), (comparer, 8), (decomp, 8), (lire, 8), (ranger, 6), (avant_apres, 6), (prob, 6)])


def gen_ce2_perimetre_mesures():
    def conv(r):
        k = r.randint(0, 3)
        if k == 0:
            a = r.randint(2, 15)
            return ("application", "convertir-les-longueurs", f"Convertis {a} cm en millimètres.",
                    ["1 cm = 10 mm.", F(f"{a} {X} 10 = {a * 10}") + "."], f"{a * 10} mm")
        if k == 1:
            a = r.randint(2, 9)
            return ("application", "convertir-les-longueurs", f"Convertis {a} m en centimètres.",
                    ["1 m = 100 cm.", F(f"{a} {X} 100 = {a * 100}") + "."], f"{a * 100} cm")
        if k == 2:
            a = r.randint(2, 9)
            return ("application", "convertir-les-longueurs", f"Convertis {a} km en mètres.",
                    ["1 km = 1 000 m.", F(f"{a} {X} 1\\,000 = {nl(a * 1000)}") + "."], f"{nt(a * 1000)} m")
        a = r.randint(1, 4); b = r.randint(5, 95)
        return ("intermediaire", "convertir-les-longueurs", f"Écris en centimètres : {a} m {b} cm.",
                [F(f"{a} {X} 100 + {b} = {a * 100 + b}") + "."], f"{a * 100 + b} cm")

    def rect(r):
        L = r.randint(4, 25); l = r.randint(2, L - 1)
        u = r.choice(["cm", "cm", "m"])
        return ("intermediaire", "perimetre-du-rectangle",
                f"Un rectangle mesure {L} {u} de longueur et {l} {u} de largeur. Calcule son périmètre.",
                ["On fait le tour : longueur + largeur + longueur + largeur.",
                 F(f"{L} + {l} + {L} + {l} = {2 * (L + l)}") + "."], f"{2 * (L + l)} {u}")

    def carre(r):
        c = r.randint(2, 30); u = r.choice(["cm", "m"])
        return ("application", "perimetre-du-carre", f"Calcule le périmètre d'un carré de côté {c} {u}.",
                ["Les 4 côtés sont égaux : on multiplie un côté par 4.", F(f"{c} {X} 4 = {4 * c}") + "."], f"{4 * c} {u}")

    def poly(r):
        n = r.choice([3, 3, 4, 5])
        cotes = [r.randint(2, 15) for _ in range(n)]
        if max(cotes) >= sum(cotes) - max(cotes):
            return None
        nom = {3: "triangle", 4: "quadrilatère", 5: "pentagone"}[n]
        return ("intermediaire", "perimetre-d-un-polygone",
                f"Un {nom} a des côtés de {enum([str(c) for c in cotes])} cm. Calcule son périmètre.",
                ["On additionne les longueurs de tous les côtés.", F(" + ".join(map(str, cotes)) + f" = {sum(cotes)}") + "."],
                f"{sum(cotes)} cm")

    def masses_durees(r):
        k = r.randint(0, 3)
        if k == 0:
            a = r.randint(2, 9)
            return ("application", "masses-et-durees", f"Convertis {a} kg en grammes.",
                    ["1 kg = 1 000 g.", F(f"{a} {X} 1\\,000 = {nl(a * 1000)}") + "."], f"{nt(a * 1000)} g")
        if k == 1:
            a = r.randint(2, 5)
            return ("application", "masses-et-durees", f"Combien de minutes y a-t-il dans {a} heures ?",
                    ["1 h = 60 min.", F(f"{a} {X} 60 = {a * 60}") + "."], f"{a * 60} min")
        if k == 2:
            a = r.randint(2, 5)
            return ("application", "masses-et-durees", f"Combien de secondes y a-t-il dans {a} minutes ?",
                    ["1 min = 60 s.", F(f"{a} {X} 60 = {a * 60}") + "."], f"{a * 60} s")
        a = r.randint(2, 4)
        return ("application", "masses-et-durees", f"Combien d'heures y a-t-il dans {a} jours ?",
                ["1 jour = 24 h.", F(f"{a} {X} 24 = {a * 24}") + "."], f"{a * 24} h")

    def manquant(r):
        k = r.randint(0, 1)
        if k == 0:
            c = r.randint(2, 12)
            return ("approfondissement", "cote-manquant",
                    f"Un carré a un périmètre de {4 * c} cm. Combien mesure un côté ?",
                    ["Le périmètre du carré, c'est 4 fois le côté.", F(f"4 {X} {c} = {4 * c}") + f", donc le côté mesure {c} cm."],
                    f"{c} cm")
        a = r.randint(4, 12); b = r.randint(4, 12); c = r.randint(abs(a - b) + 1, a + b - 1)
        P = a + b + c
        return ("approfondissement", "cote-manquant",
                f"Un triangle a un périmètre de {P} cm. Deux de ses côtés mesurent {a} cm et {b} cm. Combien mesure le troisième ?",
                [F(f"{a} + {b} = {a + b}") + ".", F(f"{P} - {a + b} = {c}") + "."], f"{c} cm")

    def prob(r):
        k = r.randint(0, 2)
        p = r.choice(PRENOMS)
        if k == 0:
            L = r.randint(8, 30); l = r.randint(5, L - 1)
            return ("probleme", "probleme-perimetre",
                    f"Le jardin rectangulaire de {p[0]} mesure {L} m de long et {l} m de large. "
                    "Quelle longueur de grillage faut-il pour en faire le tour ?",
                    ["Faire le tour, c'est calculer le périmètre.", F(f"{L} + {l} + {L} + {l} = {2 * (L + l)}") + "."],
                    f"{2 * (L + l)} m")
        if k == 1:
            c = r.randint(10, 30)
            return ("probleme", "probleme-perimetre",
                    f"{p[0]} veut coller un ruban tout autour d'un cadre carré de {c} cm de côté. "
                    "Quelle longueur de ruban lui faut-il ?",
                    [F(f"{c} {X} 4 = {4 * c}") + "."], f"{4 * c} cm")
        a = r.choice([10, 15, 20]); b = r.choice([10, 15, 20])
        return ("probleme", "probleme-durees",
                f"La récréation du matin dure {a} minutes et celle de l'après-midi {b} minutes. Combien de minutes de récréation en tout ?",
                [F(f"{a} + {b} = {a + b}") + "."], f"{a + b} minutes" + (" (soit 1 heure)" if a + b == 60 else ""))

    return assemble(306, [(conv, 9), (carre, 7), (masses_durees, 7), (rect, 8), (poly, 7), (manquant, 5), (prob, 7)])


def gen_ce2_problemes():
    def ajout(r): return pb_ajout(r, 100, 900, 999)
    def retrait(r): return pb_retrait(r, 100, 999)
    def ecart(r): return pb_ecart(r, 100, 999)

    def mult(r):
        o = r.choice(OBJETS)
        n = r.randint(3, 9); k = r.randint(6, 25)
        cont = r.choice(["boîtes", "sachets", "paquets"])
        return ("probleme", "probleme-multiplication",
                f"Il y a {n} {cont} de {k} {o[1]}. Combien de {o[1]} y a-t-il en tout ?",
                ["Plusieurs paquets égaux : on multiplie.", F(f"{n} {X} {k} = {n * k}") + "."], q(n * k, o))

    def div(r):
        o = r.choice(OBJETS)
        k = r.randint(2, 9); qq = r.randint(3, 10)
        n = k * qq
        return ("probleme", "probleme-division",
                f"On partage {q(n, o)} entre {k} enfants, en parts égales. Combien de {o[1]} chaque enfant reçoit-il ?",
                ["On partage en parts égales : on divise.", F(f"{n} : {k} = {qq}") + f" car " + F(f"{k} {X} {qq} = {n}") + "."],
                q(qq, o))

    def choisir(r):
        k = r.randint(0, 3)
        n = r.randint(3, 9); m = r.randint(3, 9)
        if k == 0:
            return ("intermediaire", "choisir-l-operation",
                    f"« {n} tables ont chacune {m} chaises. » Pour trouver le nombre de chaises, quelle opération fais-tu ? Calcule.",
                    ["Plusieurs groupes égaux : multiplication.", F(f"{n} {X} {m} = {n * m}") + "."], F(f"{n} {X} {m} = {n * m}"))
        if k == 1:
            return ("intermediaire", "choisir-l-operation",
                    f"« On partage {n * m} images entre {n} enfants. » Pour trouver la part de chacun, quelle opération fais-tu ? Calcule.",
                    ["Un partage en parts égales : division.", F(f"{n * m} : {n} = {m}") + "."], F(f"{n * m} : {n} = {m}"))
        a = r.randint(120, 480); b = r.randint(20, 99)
        if k == 2:
            return ("intermediaire", "choisir-l-operation",
                    f"« Une école a {a} élèves. {b} élèves partent en classe verte. » Combien d'élèves restent à l'école ? Quelle opération ?",
                    ["Il en reste : soustraction.", F(f"{a} - {b} = {a - b}") + "."], F(f"{a} - {b} = {a - b}"))
        return ("intermediaire", "choisir-l-operation",
                f"« Le matin, {a} visiteurs entrent au musée ; l'après-midi, {b * 3} visiteurs. » Combien en tout ? Quelle opération ?",
                ["On réunit : addition.", F(f"{a} + {b * 3} = {a + b * 3}") + "."], F(f"{a} + {b * 3} = {a + b * 3}"))

    def etapes(r):
        p = r.choice(PRENOMS)
        k = r.randint(0, 2)
        if k == 0:
            n = r.randint(2, 5); prix = r.randint(3, 9)
            tot = n * prix; billet = 20 if tot < 20 else 50
            obj = r.choice([("carnet", "carnets"), ("stylo", "stylos"), ("classeur", "classeurs"), ("cahier", "cahiers")])
            return ("approfondissement", "probleme-deux-etapes",
                    f"Un {obj[0]} coûte {prix} €. {p[0]} achète {n} {obj[1]} et paie avec un billet de {billet} €. Combien lui rend-on ?",
                    ["Étape 1 : " + F(f"{n} {X} {prix} = {tot}") + ".", "Étape 2 : " + F(f"{billet} - {tot} = {billet - tot}") + "."],
                    f"{billet - tot} €")
        if k == 1:
            n = r.randint(3, 6); m = r.randint(4, 8); x = r.randint(2, n * m - 2)
            return ("approfondissement", "probleme-deux-etapes",
                    f"{p[0]} a {n} boîtes de {m} œufs. {Il(p)} utilise {x} œufs pour des gâteaux. Combien d'œufs lui reste-t-il ?",
                    ["Étape 1 : " + F(f"{n} {X} {m} = {n * m}") + ".", "Étape 2 : " + F(f"{n * m} - {x} = {n * m - x}") + "."],
                    q(n * m - x, ("œuf", "œufs")))
        a = r.randint(20, 60); b = r.randint(10, 40); k2 = r.choice([2, 3, 4])
        tot = a + b
        if tot % k2:
            return None
        return ("approfondissement", "probleme-deux-etapes",
                f"{p[0]} a {a} billes et en gagne {b}. {Il(p)} les partage ensuite en {k2} tas égaux. Combien de billes y a-t-il dans chaque tas ?",
                ["Étape 1 : " + F(f"{a} + {b} = {tot}") + ".", "Étape 2 : " + F(f"{tot} : {k2} = {tot // k2}") + "."],
                f"{tot // k2} billes")

    return assemble(307, [(choisir, 7), (ajout, 7), (retrait, 7), (ecart, 7), (mult, 7), (div, 7), (etapes, 8)])


def gen_ce2_division():
    def partage(r):
        o = r.choice(OBJETS); k = r.randint(2, 9); qq = r.randint(2, 10); n = k * qq
        return ("application", "partager", f"On partage {q(n, o)} entre {k} enfants. Combien chaque enfant en reçoit-il ?",
                [f"On cherche le nombre qui, multiplié par {k}, donne {n}.", F(f"{k} {X} {qq} = {n}") + ", donc " + F(f"{n} : {k} = {qq}") + "."],
                q(qq, o))

    def groupes(r):
        o = r.choice(OBJETS); k = r.randint(2, 9); qq = r.randint(2, 10); n = k * qq
        return ("application", "faire-des-paquets", f"On fait des paquets de {k} avec {q(n, o)}. Combien de paquets obtient-on ?",
                [f"On cherche combien de fois {k} tient dans {n}.", F(f"{qq} {X} {k} = {n}") + ", donc " + F(f"{n} : {k} = {qq}") + "."],
                _pl(qq, "paquet"))

    def calcul(r):
        k = r.randint(2, 9); qq = r.randint(2, 10); n = k * qq
        return ("application", "calculer-une-division", f"Calcule : {F(f'{n} : {k}')}.",
                [F(f"{k} {X} {qq} = {n}") + "."], F(qq))

    def lien(r):
        k = r.randint(2, 9); qq = r.randint(2, 10); n = k * qq
        if r.random() < 0.5:
            return ("intermediaire", "lien-avec-la-multiplication",
                    f"Complète : {F(f'{n} : {k} = {LD}')} car {F(f'{k} {X} {LD} = {n}')}.",
                    [F(f"{k} {X} {qq} = {n}") + "."], F(qq))
        return ("intermediaire", "lien-avec-la-multiplication",
                f"Quelle multiplication permet de vérifier {F(f'{n} : {k} = {qq}')} ?",
                ["On refait la multiplication : on doit retrouver le nombre de départ."], F(f"{k} {X} {qq} = {n}"))

    def reste(r):
        o = r.choice(OBJETS); k = r.randint(2, 9); qq = r.randint(2, 9); rr = r.randint(1, k - 1); n = k * qq + rr
        if r.random() < 0.5:
            return ("intermediaire", "division-avec-reste",
                    f"On partage {q(n, o)} entre {k} enfants. Combien chacun en reçoit-il, et combien en reste-t-il ?",
                    [F(f"{k} {X} {qq} = {k * qq}") + " et " + F(f"{k} {X} {qq + 1} = {k * (qq + 1)}") + f" (trop grand).",
                     F(f"{n} - {k * qq} = {rr}") + f" : il en reste {rr}."],
                    f"{q(qq, o)} chacun, il en reste {rr}")
        return ("intermediaire", "division-avec-reste",
                f"Dans {n}, combien de fois {k} ? Quel est le reste ?",
                [F(f"{k} {X} {qq} = {k * qq}") + " et " + F(f"{n} - {k * qq} = {rr}") + ".", f"Le reste {rr} est plus petit que {k}."],
                f"{qq} fois, reste {rr}")

    def vf(r):
        k = r.randint(3, 9); qq = r.randint(2, 9)
        t = r.randint(0, 2)
        if t == 0:
            return ("approfondissement", "vrai-ou-faux",
                    f"Vrai ou faux : quand on divise par {k}, le reste peut être égal à {k + r.randint(0, 3)}.",
                    [f"Le reste est toujours plus petit que le nombre de parts ({k}).",
                     "S'il était plus grand ou égal, on pourrait encore donner une part de plus à chacun."], "Faux")
        if t == 1:
            n = k * qq
            return ("approfondissement", "vrai-ou-faux",
                    f"Vrai ou faux : {F(f'{n} : {k}')} donne le même résultat que {F(f'{k} : {n}')}.",
                    [f"{n} partagé en {k} n'est pas {k} partagé en {n} : on ne peut pas échanger les nombres.",
                     F(f"{n} : {k} = {qq}") + "."], "Faux")
        n = k * qq
        return ("approfondissement", "vrai-ou-faux",
                f"Vrai ou faux : {F(f'{n} : {k} = {qq}')} parce que {F(f'{k} {X} {qq} = {n}')}.",
                ["Chaque division cache une multiplication."], "Vrai")

    def prob(r):
        t = r.randint(0, 2)
        if t == 0:
            k = r.choice([4, 5, 6]); n = r.randint(17, 33)
            qq, rr = divmod(n, k)
            if rr == 0:
                return None
            return ("probleme", "probleme-division",
                    f"{n} élèves vont au musée. Chaque minibus a {k} places. Combien de minibus faut-il au minimum ?",
                    [F(f"{k} {X} {qq} = {k * qq}") + f" : {qq} minibus pleins, et il reste {_pl(rr, 'élève')}.",
                     f"Il faut un minibus de plus pour {'cet élève' if rr == 1 else 'ces élèves'} : " + F(f"{qq} + 1 = {qq + 1}") + "."],
                    f"{qq + 1} minibus")
        if t == 1:
            k = 6; n = r.randint(20, 58); qq, rr = divmod(n, k)
            return ("probleme", "probleme-division",
                    f"Une poule a pondu {n} œufs cette saison. On les range dans des boîtes de 6. Combien de boîtes pleines obtient-on ?",
                    [F(f"6 {X} {qq} = {6 * qq}") + (f", il reste {rr} œuf{'s' if rr > 1 else ''}." if rr else ".")],
                    _pl(qq, "boîte") + " pleine" + ("s" if qq > 1 else ""))
        k = r.randint(3, 6); prix = r.randint(2, 9)
        tot = k * prix
        return ("probleme", "probleme-division",
                f"{k} amis achètent ensemble un jeu à {tot} €. Ils partagent le prix en parts égales. Combien paie chacun ?",
                [F(f"{tot} : {k} = {prix}") + " car " + F(f"{k} {X} {prix} = {tot}") + "."], f"{prix} €")

    return assemble(308, [(calcul, 5), (partage, 8), (groupes, 8), (lien, 8), (reste, 9), (vf, 5), (prob, 7)])


def gen_ce2_solides_patrons():
    fas, objets, description, faces_forme, roule, compter = _solides_communs()

    def patrons(r):
        return r.choice([
            ("intermediaire", "patrons", "Combien de carrés faut-il dans le patron d'un cube ?",
             ["Un cube a 6 faces : son patron a 6 carrés."], F(6)),
            ("intermediaire", "patrons", "Combien de rectangles (ou carrés) faut-il dans le patron d'un pavé droit ?",
             ["Un pavé droit a 6 faces : son patron a 6 morceaux."], F(6)),
            ("intermediaire", "patrons", "Qu'est-ce que le patron d'un solide ?",
             ["C'est le solide déplié à plat : en le pliant, on retrouve le solide."], "le solide déplié à plat"),
            ("intermediaire", "patrons", "Un patron a 5 carrés seulement. Peut-il donner un cube fermé ?",
             ["Non : il manque une face, un cube en a 6."], "Non"),
            ("intermediaire", "patrons", "Un patron a 7 carrés. Peut-il être le patron d'un cube ?",
             ["Non : il y a un carré de trop, un cube a 6 faces."], "Non"),
            ("intermediaire", "patrons", "Dans le patron d'une pyramide à base carrée, combien y a-t-il de triangles ?",
             ["La pyramide a 1 face carrée et 4 faces triangulaires."], F(4)),
            ("intermediaire", "patrons", "Quand on plie le patron d'un cube, que devient chaque carré ?",
             ["Chaque carré devient une face du cube."], "une face"),
            ("intermediaire", "patrons", "Combien de faces en tout a le patron d'une pyramide à base carrée ?",
             ["1 carré + 4 triangles = 5 faces."], F(5)),
            ("intermediaire", "patrons", "Une boîte en carton est dépliée à plat. Comment appelle-t-on ce dessin à plat ?",
             ["C'est le patron de la boîte."], "un patron"),
        ])

    def vocab(r):
        return r.choice([
            ("application", "vocabulaire", "Comment s'appelle une surface plate d'un solide ?",
             ["C'est une face."], "une face"),
            ("application", "vocabulaire", "Comment s'appelle le trait où deux faces se rencontrent ?",
             ["C'est une arête."], "une arête"),
            ("application", "vocabulaire", "Comment s'appelle le point où plusieurs arêtes se rejoignent ?",
             ["C'est un sommet."], "un sommet"),
            ("application", "vocabulaire", "Vrai ou faux : une arête est un point.",
             ["Faux : une arête est un trait ; le sommet est un point."], "Faux"),
            ("application", "vocabulaire", "Vrai ou faux : un carré est un solide.",
             ["Faux : le carré est une figure plate. Le cube est le solide."], "Faux"),
            ("application", "vocabulaire", "Vrai ou faux : un cube et un pavé droit ont le même nombre de faces.",
             ["Vrai : 6 faces chacun."], "Vrai"),
        ])

    def calculs(r):
        s = r.choice(list(_SOL))
        f_, a_, s_ = _SOL[s]
        art = "une" if s.startswith("pyramide") else "un"
        t = r.randint(0, 1)
        if t == 0:
            return ("approfondissement", "comparer-les-solides",
                    f"Combien d'arêtes de plus que de sommets a {art} {s} ?",
                    [f"{a_} arêtes et {s_} sommets.", F(f"{a_} - {s_} = {a_ - s_}") + "."], F(a_ - s_))
        return ("approfondissement", "comparer-les-solides",
                f"Additionne le nombre de faces et le nombre de sommets d'{art} {s}.",
                [f"{f_} faces et {s_} sommets.", F(f"{f_} + {s_} = {f_ + s_}") + "."], F(f_ + s_))

    return assemble(309, [(fas, 10), (vocab, 6), (objets, 7), (description, 6), (patrons, 8), (calculs, 6), (compter, 7)])


def gen_ce2_symetrie_axiale():
    def figures(r):
        return r.choice([
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un carré ?",
             ["2 axes passent par le milieu des côtés et 2 par les coins (les diagonales)."], F(4)),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un rectangle qui n'est pas un carré ?",
             ["2 axes, par le milieu des côtés. Ses diagonales ne sont pas des axes."], F(2)),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un cercle ?",
             ["Toute droite passant par le centre est un axe."], "une infinité"),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un triangle quelconque (aux 3 côtés différents) ?",
             ["On ne peut pas le plier pour que les deux moitiés se superposent."], F(0)),
            ("application", "axes-des-figures", "Combien d'axes de symétrie ont, en tout, un carré et un rectangle (non carré) ?",
             [F("4 + 2 = 6") + "."], F(6)),
            ("application", "axes-des-figures", "Quel quadrilatère a exactement 4 axes de symétrie ?",
             ["C'est le carré."], "le carré"),
            ("application", "axes-des-figures", "Combien d'axes de symétrie a un papillon ?",
             ["Un seul, au milieu du corps."], F(1)),
        ])

    def lettres_sym(r):
        L = r.choice(list("AMTUVWY") + list("BCDE") + list("FGJLNPRSZ"))
        if L in "AMTUVWY":
            rep, c = "Oui, un axe vertical", f"On plie la lettre {L} le long d'un trait vertical au milieu : les deux moitiés gauche et droite se recouvrent."
        elif L in "BCDE":
            rep, c = "Oui, un axe horizontal", f"On plie la lettre {L} le long d'un trait horizontal au milieu : les moitiés du haut et du bas se recouvrent."
        else:
            rep, c = "Non", f"Quelle que soit la façon de plier la lettre {L}, les deux moitiés ne se recouvrent pas."
        return ("intermediaire", "lettres-symetriques",
                f"La lettre majuscule {L} a-t-elle un axe de symétrie ? Si oui, est-il vertical ou horizontal ?",
                [c], rep)

    def point(r):
        k = r.randint(1, 12)
        cote = r.choice([("à gauche", "à droite"), ("à droite", "à gauche"), ("au-dessus", "en dessous"), ("en dessous", "au-dessus")])
        return ("intermediaire", "symetrique-d-un-point",
                f"Un point est à {_pl(k, 'carreau')} {cote[0]} de l'axe de symétrie. Où se trouve son symétrique ?",
                ["Le symétrique est de l'autre côté de l'axe, à la même distance."], f"à {_pl(k, 'carreau')} {cote[1]} de l'axe")

    def quadrillage(r):
        a = r.randint(3, 9)
        x = r.randint(1, 12)
        y = 2 * a + 1 - x
        if not 1 <= y <= 12 or x == y:
            return None
        return ("approfondissement", "symetrique-sur-quadrillage",
                f"Sur un quadrillage, les colonnes sont numérotées de 1 à 12. L'axe de symétrie est le trait vertical entre "
                f"la colonne {a} et la colonne {a + 1}. Un point est dans la colonne {x}. Dans quelle colonne est son symétrique ?",
                [f"En partant de l'axe, la colonne {x} est la {rang(a - x + 1 if x <= a else x - a)} colonne {'à gauche' if x <= a else 'à droite'}.",
                 f"Le symétrique est la {rang(a - x + 1 if x <= a else x - a)} colonne de l'autre côté : la colonne {y}."],
                f"la colonne {y}")

    def vf(r):
        return r.choice([
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : les diagonales d'un rectangle (non carré) sont des axes de symétrie.",
             ["Faux : si on plie selon une diagonale, les deux moitiés ne se superposent pas."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : les diagonales d'un carré sont des axes de symétrie.",
             ["Vrai : on peut plier un carré selon une diagonale."], "Vrai"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : toute figure a au moins un axe de symétrie.",
             ["Faux : un triangle quelconque n'en a aucun."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : le symétrique d'un point est à la même distance de l'axe que ce point.",
             ["Vrai : c'est son reflet dans le miroir."], "Vrai"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un point situé sur l'axe est son propre symétrique.",
             ["Vrai : il est à 0 carreau de l'axe, il ne bouge pas."], "Vrai"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : une ligne qui coupe une figure en deux parties de même taille est forcément un axe de symétrie.",
             ["Faux : les deux parties doivent se superposer exactement quand on plie."], "Faux"),
            ("approfondissement", "vrai-ou-faux", "Vrai ou faux : un cercle a exactement 2 axes de symétrie.",
             ["Faux : il en a une infinité (toutes les droites qui passent par le centre)."], "Faux"),
        ])

    def objets_sym(r):
        return r.choice([
            ("application", "symetrie-autour-de-nous", "Comment vérifie-t-on qu'une ligne est un axe de symétrie d'une figure ?",
             ["On plie la feuille sur la ligne : les deux moitiés doivent se recouvrir exactement."], "en pliant sur la ligne"),
            ("application", "symetrie-autour-de-nous", "À quel objet fait penser la symétrie axiale ?",
             ["À un miroir : de chaque côté de l'axe, on voit le reflet."], "un miroir"),
            ("application", "symetrie-autour-de-nous", "Le drapeau de la France a-t-il un axe de symétrie vertical ? (bleu, blanc, rouge)",
             ["Non : à gauche il est bleu, à droite rouge. Les couleurs ne se superposent pas."], "Non"),
            ("application", "symetrie-autour-de-nous", "Le drapeau de la France a-t-il un axe de symétrie horizontal ?",
             ["Oui : si on plie de haut en bas au milieu, chaque bande se superpose à elle-même."], "Oui"),
            ("application", "symetrie-autour-de-nous", "Comment s'appelle la ligne de pliage qui partage une figure en deux moitiés qui se superposent ?",
             ["C'est un axe de symétrie."], "un axe de symétrie"),
        ])

    def prob(r):
        k = r.randint(1, 10)
        t = r.randint(0, 1)
        if t == 0:
            return ("probleme", "distances",
                    f"Un point est à {_pl(k, 'carreau')} de l'axe de symétrie. Combien de carreaux le séparent de son symétrique ?",
                    [f"{k} carreau{'x' if k > 1 else ''} jusqu'à l'axe, puis {k} de l'autre côté.", F(f"{k} + {k} = {2 * k}") + "."],
                    _pl(2 * k, "carreau"))
        d = 2 * k
        return ("probleme", "distances",
                f"Un point et son symétrique sont séparés de {_pl(d, 'carreau')}. À combien de carreaux de l'axe est le point ?",
                ["L'axe est au milieu.", F(f"{d} : 2 = {k}") + "."], _pl(k, "carreau"))

    return assemble(310, [(figures, 6), (objets_sym, 5), (lettres_sym, 8), (point, 8), (quadrillage, 9), (vf, 7), (prob, 7)])


_TABLEAUX = [
    ("Fruits vendus au marché", ["pommes", "bananes", "oranges", "poires", "kiwis"], "fruits"),
    ("Animaux vus pendant la sortie", ["oiseaux", "canards", "lapins", "écureuils", "papillons"], "animaux"),
    ("Livres de la bibliothèque de la classe", ["contes", "romans", "bandes dessinées", "documentaires", "albums"], "livres"),
    ("Légumes ramassés au potager", ["carottes", "radis", "tomates", "courgettes", "salades"], "légumes"),
]


def gen_ce2_tableaux():
    def donnees(r):
        titre, cats, unite = r.choice(_TABLEAUX)
        n = r.choice([4, 5])
        cs = cats[:n]
        vals = r.sample(range(3, 31), n)
        txt = f"Tableau « {titre} » : " + ", ".join(f"{c} : {v}" for c, v in zip(cs, vals)) + "."
        return txt, cs, vals, unite

    def lire(r):
        txt, cs, vals, _ = donnees(r)
        i = r.randrange(len(cs))
        return ("application", "lire-une-donnee", f"{txt} Combien y a-t-il {_de(cs[i])} ?",
                [f"On suit la ligne « {cs[i]} » : {vals[i]}."], F(vals[i]))

    def maxmin(r):
        txt, cs, vals, _ = donnees(r)
        if r.random() < 0.5:
            i = vals.index(max(vals))
            return ("application", "le-plus-le-moins", f"{txt} Quelle catégorie a le plus grand nombre ?",
                    [f"Le plus grand nombre est {vals[i]}."], cs[i])
        i = vals.index(min(vals))
        return ("application", "le-plus-le-moins", f"{txt} Quelle catégorie a le plus petit nombre ?",
                [f"Le plus petit nombre est {vals[i]}."], cs[i])

    def total(r):
        txt, cs, vals, unite = donnees(r)
        return ("intermediaire", "total", f"{txt} Combien y a-t-il {_de(unite)} en tout ?",
                ["On additionne toutes les données.", F(" + ".join(map(str, vals)) + f" = {sum(vals)}") + "."], F(sum(vals)))

    def ecart(r):
        txt, cs, vals, _ = donnees(r)
        i, j = r.sample(range(len(cs)), 2)
        if vals[i] < vals[j]:
            i, j = j, i
        return ("intermediaire", "comparer-deux-donnees",
                f"{txt} Combien y a-t-il {_de(cs[i])} de plus que {_de(cs[j])} ?",
                ["Pour savoir combien de plus, on soustrait.", F(f"{vals[i]} - {vals[j]} = {vals[i] - vals[j]}") + "."],
                F(vals[i] - vals[j]))

    def barres(r):
        echelle = r.choice([2, 5, 10]); h = r.randint(2, 9)
        sport = r.choice(["le football", "la natation", "la danse", "le judo", "le tennis", "le vélo", "le basket"])
        t = r.randint(0, 1)
        if t == 0:
            return ("approfondissement", "graphique-en-barres",
                    f"Dans un graphique en barres, chaque carreau vaut {echelle} élèves. La barre « {sport} » monte jusqu'à "
                    f"{h} carreaux. Combien d'élèves ont choisi {sport} ?",
                    [F(f"{h} {X} {echelle} = {h * echelle}") + "."], f"{h * echelle} élèves")
        h2 = r.randint(1, 4)
        return ("approfondissement", "graphique-en-barres",
                f"Dans un graphique en barres, la barre A vaut {h2 * echelle} et la barre B est deux fois plus haute. Combien vaut la barre B ?",
                ["Une barre deux fois plus haute vaut deux fois plus.", F(f"2 {X} {h2 * echelle} = {2 * h2 * echelle}") + "."],
                F(2 * h2 * echelle))

    def ranger(r):
        txt, cs, vals, _ = donnees(r)
        R = sorted(zip(vals, cs))
        return ("approfondissement", "ranger-les-donnees", f"{txt} Range les catégories du plus petit nombre au plus grand.",
                [F(" < ".join(str(v) for v, _ in R)) + "."], ", ".join(c for _, c in R))

    def prob(r):
        txt, cs, vals, unite = donnees(r)
        tot = sum(vals)
        but = (tot // 50 + 1) * 50
        return ("probleme", "probleme-tableau",
                f"{txt} On voudrait arriver à {but} {unite} en tout. Combien en manque-t-il ?",
                ["Étape 1 : total : " + F(" + ".join(map(str, vals)) + f" = {tot}") + ".",
                 "Étape 2 : " + F(f"{but} - {tot} = {but - tot}") + "."], F(but - tot))

    return assemble(311, [(lire, 8), (maxmin, 8), (total, 8), (ecart, 8), (barres, 7), (ranger, 5), (prob, 6)])


# =====================================================================
EXTRA = {
    ("cp", "addition"): gen_cp_addition,
    ("cp", "soustraction"): gen_cp_soustraction,
    ("cp", "calcul-mental"): gen_cp_calcul_mental,
    ("cp", "comparer-ranger"): gen_cp_comparer_ranger,
    ("cp", "dizaines-et-unites"): gen_cp_dizaines_unites,
    ("cp", "formes-geometriques"): gen_cp_formes,
    ("cp", "le-temps-qui-passe"): gen_cp_temps,
    ("cp", "longueurs-et-masses"): gen_cp_longueurs_masses,
    ("cp", "nombres-jusqu-a-20"): gen_cp_nombres_20,
    ("cp", "problemes"): gen_cp_problemes,
    ("ce1", "addition-posee"): gen_ce1_addition_posee,
    ("ce1", "soustraction-posee"): gen_ce1_soustraction_posee,
    ("ce1", "calcul-mental"): gen_ce1_calcul_mental,
    ("ce1", "figures-planes"): gen_ce1_figures_planes,
    ("ce1", "mesures-et-monnaie"): gen_ce1_mesures_monnaie,
    ("ce1", "moities-et-doubles"): gen_ce1_moities_doubles,
    ("ce1", "nombres-jusqu-a-1000"): gen_ce1_nombres_1000,
    ("ce1", "problemes"): gen_ce1_problemes,
    ("ce1", "solides"): gen_ce1_solides,
    ("ce1", "symetrie-et-quadrillage"): gen_ce1_symetrie_quadrillage,
    ("ce1", "tables-de-multiplication"): gen_ce1_tables,
    ("ce2", "angles-et-polygones"): gen_ce2_angles_polygones,
    ("ce2", "calcul-mental"): gen_ce2_calcul_mental,
    ("ce2", "fractions-simples"): gen_ce2_fractions,
    ("ce2", "multiplication-posee"): gen_ce2_multiplication_posee,
    ("ce2", "nombres-jusqu-a-10000"): gen_ce2_nombres_10000,
    ("ce2", "perimetre-et-mesures"): gen_ce2_perimetre_mesures,
    ("ce2", "problemes"): gen_ce2_problemes,
    ("ce2", "sens-de-la-division"): gen_ce2_division,
    ("ce2", "solides-et-patrons"): gen_ce2_solides_patrons,
    ("ce2", "symetrie-axiale"): gen_ce2_symetrie_axiale,
    ("ce2", "tableaux-et-graphiques"): gen_ce2_tableaux,
}
