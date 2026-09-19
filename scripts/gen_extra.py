# -*- coding: utf-8 -*-
"""Generateurs supplementaires (5e), reponses calculees. Charge par generer-exos.py."""
import math
from fractions import Fraction

def fr(x, dec=2):
    r = round(x, dec)
    s = str(int(round(r))) if abs(r-round(r)) < 1e-9 else f"{r:.{dec}f}".rstrip('0').rstrip('.')
    return s.replace('.', ',')

def frac_latex(f):
    f = Fraction(f)
    if f.denominator == 1: return str(f.numerator)
    signe = "-" if f < 0 else ""
    return f"{signe}\\dfrac{{{abs(f.numerator)}}}{{{abs(f.denominator)}}}"

def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}

def _fin(E):
    E = E[:50]
    return [exo(i+1, *t) for i, t in enumerate(E)]

# ---------------- 5e : OPERATIONS / PRIORITES ----------------
def g5_operations():
    E = []
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    prio = [(3,4,5),(2,6,3),(7,2,4),(5,5,2),(8,3,3),(4,7,2),(9,2,5),(6,4,4),
            (2,9,3),(5,6,2),(7,3,6),(3,8,4),(4,4,7),(6,2,9),(8,5,2),(2,7,8)]
    for (a,b,c) in prio:
        r = a + b*c
        add("application","priorites", f"Calculer $A = {a} + {b} \\times {c}$.",
            [f"On effectue la multiplication d'abord : $A = {a} + {b*c} = {r}$."], f"$A = {r}$")
    prio2 = [(20,3,4),(30,5,2),(50,6,3),(40,2,7),(100,9,4),(25,3,5),(60,4,6),(45,2,8)]
    for (a,b,c) in prio2:
        r = a - b*c
        add("intermediaire","priorites", f"Calculer $B = {a} - {b} \\times {c}$.",
            [f"Multiplication d'abord : $B = {a} - {b*c} = {r}$."], f"$B = {r}$")
    par = [(2,3,4),(5,2,6),(3,7,2),(4,5,3),(6,2,5),(2,8,3),(7,2,4),(3,4,6)]
    for (a,b,c) in par:
        r = a*(b+c)
        add("intermediaire","priorites", f"Calculer $C = {a} \\times ({b} + {c})$.",
            [f"Parenthese d'abord : $C = {a} \\times {b+c} = {r}$."], f"$C = {r}$")
    dec = [(2.5,1.5),(3.2,4.1),(5.6,2.4),(7.5,1.5),(4.8,3.2),(6.3,2.7),(1.9,3.1),(8.4,1.6)]
    for (a,b) in dec:
        r = a+b
        add("application","decimaux", f"Calculer ${fr(a,1)} + {fr(b,1)}$.",
            [f"${fr(a,1)} + {fr(b,1)} = {fr(r,1)}$."], f"${fr(r,1)}$")
    for (a,b) in dec:
        r = round(a*b,2)
        add("intermediaire","decimaux", f"Calculer ${fr(a,1)} \\times {fr(b,1)}$.",
            [f"${fr(a,1)} \\times {fr(b,1)} = {fr(r,2)}$."], f"${fr(r,2)}$")
    _i = 2
    while len(E) < 50:
        a,b,c = _i, _i+1, _i+2
        r = a + b*c
        add("application","priorites", f"Calculer ${a} + {b} \\times {c}$.",
            [f"Multiplication d'abord : ${a} + {b*c} = {r}$."], f"${r}$")
        _i += 1
    return _fin(E)

# ---------------- 5e : NOMBRES RELATIFS ----------------
def g5_relatifs():
    E = []
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    def signe(x): return f"(+{x})" if x >= 0 else f"({x})"
    adds = [(3,-5),(-4,7),(-6,-2),(8,-3),(-9,4),(5,-8),(-7,-1),(6,-6),
            (-2,9),(4,-11),(-8,3),(10,-4),(-5,-5),(7,-12),(-3,8),(2,-9)]
    for (a,b) in adds:
        r = a+b
        add("application","addition", f"Calculer ${signe(a)} + {signe(b)}$.",
            [f"${signe(a)} + {signe(b)} = {r}$."], f"${r}$")
    subs = [(3,-5),(-4,7),(-6,-2),(8,-3),(-9,4),(5,-8),(-7,-1),(6,-6),(-2,9),(4,-11),(-8,3),(10,-4)]
    for (a,b) in subs:
        r = a-b
        add("intermediaire","soustraction", f"Calculer ${signe(a)} - {signe(b)}$.",
            [f"Soustraire, c'est ajouter l'oppose : ${signe(a)} + {signe(-b)} = {r}$."], f"${r}$")
    muls = [(3,-4),(-5,6),(-2,-7),(8,-2),(-3,-9),(4,-5),(-6,3),(7,-2),(-4,-4),(5,-3)]
    for (a,b) in muls:
        r = a*b
        expl = "Signes contraires : resultat negatif." if a*b<0 else "Memes signes : resultat positif."
        add("intermediaire","multiplication", f"Calculer ${signe(a)} \\times {signe(b)}$.",
            [expl+f" ${signe(a)} \\times {signe(b)} = {r}$."], f"${r}$")
    _i = 1
    while len(E) < 50:
        a,b = -_i, _i+3
        r = a+b
        add("application","addition", f"Calculer ${signe(a)} + {signe(b)}$.",
            [f"${signe(a)} + {signe(b)} = {r}$."], f"${r}$")
        _i += 1
    return _fin(E)

# ---------------- 5e : FRACTIONS ----------------
def g5_fractions():
    E = []
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    simp = [(4,8),(6,9),(10,15),(12,16),(9,12),(8,20),(14,21),(15,25),(6,18),(20,24),(18,27),(16,40)]
    for (a,b) in simp:
        f = Fraction(a,b)
        add("application","simplifier", f"Simplifier $\\dfrac{{{a}}}{{{b}}}$.",
            [f"On divise haut et bas par leur PGCD : $\\dfrac{{{a}}}{{{b}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    somD = [(1,3,3),(2,5,5),(3,7,7),(1,4,4),(5,9,9),(2,3,3),(3,8,8),(4,11,11)]
    for (a,b,d) in somD:
        f = Fraction(a,d)+Fraction(b,d)
        add("application","somme-meme-denominateur", f"Calculer $\\dfrac{{{a}}}{{{d}}} + \\dfrac{{{b}}}{{{d}}}$.",
            [f"Meme denominateur : on ajoute les numerateurs. $\\dfrac{{{a}+{b}}}{{{d}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    prod = [(2,3,4,5),(1,2,3,7),(3,4,2,5),(2,7,1,3),(5,6,2,5),(3,8,4,9),(1,5,5,6),(2,9,3,4)]
    for (a,b,c,d) in prod:
        f = Fraction(a,b)*Fraction(c,d)
        add("intermediaire","produit", f"Calculer $\\dfrac{{{a}}}{{{b}}} \\times \dfrac{{{ac}}}{{{d}}}$.",
            [f"On multiplie haut et bas : $\\dfrac{{{a} \\times {c}}}{{{b} \\times {d}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    somM = [(1,2,1,4),(1,3,1,6),(2,3,1,6),(1,2,1,3),(3,4,1,8),(2,5,1,10),(1,2,2,5),(1,4,3,8)]
    for (a,b,c,d) in somM:
        f = Fraction(a,b)+Fraction(c,d)
        L = (b*d)//math.gcd(b,d)
        add("approfondissement","somme-denominateurs-multiples", f"Calculer $\\dfrac{{{a}}}{{{b}}} + \dfrac{{{ac}}}{{{d}}}$.",
            [f"On reduit au meme denominateur ${L}$ puis on additionne : $= {frac_latex(f)}$."], f"${frac_latex(f)}$")
    _i = 2
    while len(E) < 50:
        f = Fraction(_i, 2*_i+1) + Fraction(1, 2*_i+1)
        add("application","somme-meme-denominateur", f"Calculer $\\dfrac{{{_i}}}{{{2*_i+1}}} + \dfrac{{{1}}{{{2*_i+1}}}$.",
            [f"$\\dfrac{{{_i}+1}}{{{2*_i+1}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
        _i += 1
    return _fin(E)

# ---------------- 5e : PUISSANCES ----------------
def g5_puissances():
    E = []
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    base = [(2,3),(3,2),(5,2),(2,4),(4,2),(10,2),(2,5),(3,3),(5,3),(6,2),(7,2),(2,6),(10,3),(4,3),(2,7),(3,4)]
    for (a,n) in base:
        r = a**n
        prod = " \\times ".join([str(a)]*n)
        add("application","calcul-puissance", f"Calculer ${a}^{n}$.",
            [f"${a}^{n} = {prod} = {r}$."], f"${r}$")
    dix = [2,3,4,5,6,1,7,8]
    for n in dix:
        r = 10**n
        add("application","puissance-de-dix", f"Ecrire $10^{n}$ sous forme d'un nombre entier.",
            [f"$10^{n} = 1$ suivi de ${n}$ zeros $= {r}$."], f"${r}$")
    ecr = [(2,2),(3,3),(5,4),(7,2),(2,8),(4,4),(6,3),(9,2),(3,5),(10,4)]
    for (a,n) in ecr:
        r = a**n
        prod = " \\times ".join([str(a)]*n)
        add("intermediaire","ecriture-puissance", f"Ecrire sous forme de puissance : ${prod}$.",
            [f"C'est le produit de ${n}$ facteurs egaux a ${a}$ : ${a}^{n}$ (qui vaut ${r}$)."], f"${a}^{n}$")
    _i = 2
    while len(E) < 50:
        r = _i**2
        add("application","calcul-puissance", f"Calculer ${_i}^2$.",
            [f"${_i}^2 = {_i} \\times {_i} = {r}$."], f"${r}$")
        _i += 1
    return _fin(E)

# ---------------- 5e : STATISTIQUES ----------------
def g5_statistiques():
    E = []
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    series = [[4,7,9,10],[12,15,18,15],[3,5,8,4],[6,6,9,11],[10,14,12,8],[2,4,6,8],
              [13,15,11,17],[5,8,10,9],[7,9,12,16],[20,18,22,20],[1,3,5,7],[8,10,12,14],
              [9,11,7,13],[4,4,8,12]]
    for s in series[:14]:
        m = sum(s)/len(s)
        add("application","moyenne", f"Calculer la moyenne de : {', '.join(map(str,s))}.",
            [f"Moyenne $= \\dfrac{{{'+'.join(map(str,s))}}}{{{len(s)}}} = \\dfrac{{{sum(s)}}}{{{len(s)}}} = {fr(m)}$."], f"${fr(m)}$")
    for s in series[:14]:
        add("application","effectif-total", f"Effectif total pour les effectifs {', '.join(map(str,s))} ?",
            [f"On additionne les effectifs : ${'+'.join(map(str,s))} = {sum(s)}$."], f"${sum(s)}$")
    freq = [(3,12),(5,20),(9,36),(7,28),(4,25),(6,24),(8,40),(2,10),(15,60),(11,44),(9,30),(13,52)]
    for (fav,tot) in freq[:12]:
        f = Fraction(fav,tot)
        add("intermediaire","frequence", f"Sur {tot} eleves, {fav} font du foot. Quelle est la frequence (en fraction simplifiee) ?",
            [f"Frequence $= \\dfrac{{{fav}}}{{{tot}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    _i = 3
    while len(E) < 50:
        s = [_i, _i+2, _i+4, _i+6]
        m = sum(s)/len(s)
        add("application","moyenne", f"Moyenne de {', '.join(map(str,s))} ?",
            [f"$= \\dfrac{{{sum(s)}}}{{4}} = {fr(m)}$."], f"${fr(m)}$")
        _i += 1
    return _fin(E)

# ---------------- 5e : SOMME DES ANGLES / TRIANGLES-ANGLES ----------------
def g5_triangles_angles():
    E = []
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    tri = [(60,70),(45,55),(30,90),(80,40),(50,60),(35,75),(90,45),(20,110),
           (65,65),(48,72),(33,99),(25,100),(70,55),(40,40),(88,52),(15,120)]
    for (a,b) in tri:
        c = 180 - a - b
        add("application","somme-angles", f"Dans un triangle, deux angles mesurent ${a}^\\circ$ et ${b}^\\circ$. Calculer le troisieme.",
            [f"La somme des angles d'un triangle vaut $180^\\circ$.",
             f"Troisieme angle $= 180 - {a} - {b} = {c}^\\circ$."], f"${c}^\\circ$")
    iso = [40,70,50,64,80,30,74,56,66,48]
    for a in iso:
        base = (180 - a)//2
        add("intermediaire","triangle-isocele", f"Un triangle isocele a un angle au sommet de ${a}^\\circ$. Calculer un angle a la base.",
            [f"Les deux angles a la base sont egaux, leur somme vaut $180 - {a} = {180-a}^\\circ$.",
             f"Chaque angle a la base $= \\dfrac{{{180-a}}}{{2}} = {base}^\\circ$."], f"${base}^\\circ$")
    equi = [1,2,3,4,5,6,7,8]
    for _ in equi:
        add("application","triangle-equilateral", "Quelle est la mesure d'un angle d'un triangle equilateral ?",
            [f"Les trois angles sont egaux : $180 \\div 3 = 60^\\circ$."], f"$60^\\circ$")
    _i = 10
    while len(E) < 50:
        a, b = _i, _i+20
        c = 180 - a - b
        add("application","somme-angles", f"Deux angles d'un triangle : ${a}^\\circ$ et ${b}^\\circ$. Le troisieme ?",
            [f"$180 - {a} - {b} = {c}^\\circ$."], f"${c}^\\circ$")
        _i += 1
    return _fin(E)

# ---------------- 5e : PROPORTIONNALITE ----------------
def g5_proportionnalite():
    E = []
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    quatre = [(3,12,5),(4,20,7),(2,10,9),(5,15,4),(6,18,8),(3,21,6),(4,28,5),(2,14,11),
              (5,35,3),(6,42,4),(3,27,7),(4,24,9)]
    for (a,b,c) in quatre:
        k = Fraction(b,a); r = k*c
        add("application","quatrieme-proportionnelle", f"{a} objets coutent {b} euros. Combien coutent {c} objets (prix proportionnel) ?",
            [f"Prix d'un objet $= \\dfrac{{{b}}}{{{a}}} = {frac_latex(k)}$ euro.",
             f"Pour {c} objets : ${frac_latex(k)} \\times {c} = {frac_latex(r)}$ euros."], f"${frac_latex(r)}$ euros")
    pct = [(200,10),(150,20),(80,25),(60,50),(120,15),(90,30),(40,75),(250,4),(300,12),(50,40)]
    for (tot,p) in pct[:10]:
        r = Fraction(tot*p,100)
        add("intermediaire","pourcentage", f"Calculer ${p}\\%$ de {tot}.",
            [f"${p}\\%$ de {tot} $= \\dfrac{{{p}}}{{100}} \\times {tot} = {frac_latex(r)}$."], f"${frac_latex(r)}$")
    vit = [(120,2),(150,3),(80,2),(200,4),(90,3),(60,2),(240,4),(100,5)]
    for (d,t) in vit:
        v = Fraction(d,t)
        add("application","vitesse", f"Une voiture parcourt {d} km en {t} h a vitesse constante. Quelle est sa vitesse moyenne ?",
            [f"Vitesse $= \\dfrac{{{d}}}{{{t}}} = {frac_latex(v)}$ km/h."], f"${frac_latex(v)}$ km/h")
    _i = 2
    while len(E) < 50:
        a,b,c = _i, 3*_i, _i+4
        k = Fraction(b,a); r = k*c
        add("application","quatrieme-proportionnelle", f"{a} kg coutent {b} euros. Prix de {c} kg ?",
            [f"Prix au kg $= {frac_latex(k)}$ ; pour {c} kg : ${frac_latex(r)}$ euros."], f"${frac_latex(r)}$ euros")
        _i += 1
    return _fin(E)

EXTRA = {
    ("cinquieme","operations"): g5_operations,
    ("cinquieme","nombres-relatifs"): g5_relatifs,
    ("cinquieme","fractions"): g5_fractions,
    ("cinquieme","puissances"): g5_puissances,
    ("cinquieme","statistiques"): g5_statistiques,
    ("cinquieme","triangles-angles"): g5_triangles_angles,
    ("cinquieme","proportionnalite"): g5_proportionnalite,
}
