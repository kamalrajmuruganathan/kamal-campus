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
        add("intermediaire","produit", f"Calculer $\\dfrac{{{a}}}{{{b}}} \\times \\dfrac{{{c}}}{{{d}}}$.",
            [f"On multiplie haut et bas : $\\dfrac{{{a} \\times {c}}}{{{b} \\times {d}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    somM = [(1,2,1,4),(1,3,1,6),(2,3,1,6),(1,2,1,3),(3,4,1,8),(2,5,1,10),(1,2,2,5),(1,4,3,8)]
    for (a,b,c,d) in somM:
        f = Fraction(a,b)+Fraction(c,d)
        L = (b*d)//math.gcd(b,d)
        add("approfondissement","somme-denominateurs-multiples", f"Calculer $\\dfrac{{{a}}}{{{b}}} + \\dfrac{{{c}}}{{{d}}}$.",
            [f"On reduit au meme denominateur ${L}$ puis on additionne : $= {frac_latex(f)}$."], f"${frac_latex(f)}$")
    _i = 2
    while len(E) < 50:
        f = Fraction(_i, 2*_i+1) + Fraction(1, 2*_i+1)
        add("application","somme-meme-denominateur", f"Calculer $\\dfrac{{{_i}}}{{{2*_i+1}}} + \\dfrac{{1}}{{{2*_i+1}}}$.",
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

def _sg(x): return f"(+{x})" if x >= 0 else f"({x})"

# ================= 4e MATHS =================
def g4_calcul_litteral():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (k,a,b) in [(3,2,5),(4,1,3),(2,5,7),(5,3,2),(6,2,1),(3,4,6),(7,2,3),(2,8,5),(4,3,9),(5,2,4),(3,5,8),(6,1,7)]:
        add("application","distribution", f"Developper $ {k}({a}x + {b}) $.",
            [f"$ {k}({a}x + {b}) = {k*a}x + {k*b} $."], f"$ {k*a}x + {k*b} $")
    for (a,b) in [(2,3),(1,4),(5,2),(3,3),(2,6),(4,1),(5,5),(2,7),(3,4),(6,2),(1,8),(4,4)]:
        s=a+b; p=a*b
        add("intermediaire","double-distribution", f"Developper et reduire $ (x+{a})(x+{b}) $.",
            [f"$ (x+{a})(x+{b}) = x^2 + {a}x + {b}x + {p} = x^2 + {s}x + {p} $."], f"$ x^2 + {s}x + {p} $")
    for (a,b,c) in [(3,5,2),(4,2,7),(6,1,3),(2,8,4),(5,3,6),(7,2,1),(3,9,5),(4,4,8)]:
        add("application","reduire", f"Reduire $ {a}x + {b} + {c}x $.",
            [f"On regroupe les termes en x : $ {a+c}x + {b} $."], f"$ {a+c}x + {b} $")
    _i=2
    while len(E)<50:
        k,a,b=_i,_i+1,_i+2
        add("application","distribution", f"Developper $ {k}({a}x + {b}) $.",
            [f"$ = {k*a}x + {k*b} $."], f"$ {k*a}x + {k*b} $")
        _i+=1
    return _fin(E)

def g4_operations_relatifs():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b) in [(3,-4),(-5,6),(-2,-7),(8,-3),(-6,-4),(4,-9),(-7,2),(5,-6),(-8,-3),(9,-2),(-4,7),(6,-5)]:
        expl = "Signes contraires : negatif." if a*b<0 else "Memes signes : positif."
        add("application","produit", f"Calculer $ {_sg(a)} \\times {_sg(b)} $.",
            [expl+f" $ {_sg(a)} \\times {_sg(b)} = {a*b} $."], f"$ {a*b} $")
    for (a,b) in [(12,-4),(-20,5),(-18,-3),(24,-6),(-30,-5),(28,-7),(-16,4),(36,-9),(-45,-9),(40,-8)]:
        q=Fraction(a,b)
        add("intermediaire","quotient", f"Calculer $ {_sg(a)} \\div {_sg(b)} $.",
            [f"$ {_sg(a)} \\div {_sg(b)} = {frac_latex(q)} $."], f"$ {frac_latex(q)} $")
    for (a,b,c) in [(2,-3,4),(-5,2,-1),(3,-2,-4),(-6,-1,2),(4,-3,-2),(-2,5,-3),(7,-1,-2),(-4,3,2)]:
        r=a*b*c
        add("approfondissement","produit-trois", f"Calculer $ {_sg(a)} \\times {_sg(b)} \\times {_sg(c)} $.",
            [f"$ {_sg(a)} \\times {_sg(b)} \\times {_sg(c)} = {r} $."], f"$ {r} $")
    _i=1
    while len(E)<50:
        a,b=-_i,_i+2
        add("application","produit", f"Calculer $ {_sg(a)} \\times {_sg(b)} $.",[f"$ = {a*b} $."],f"$ {a*b} $")
        _i+=1
    return _fin(E)

def g4_probabilites():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    de=[("un 6",1),("un nombre pair",3),("un multiple de 3",2),("au moins 5",2),("un 1 ou un 2",2),("un nombre impair",3)]
    for (evt,f) in de:
        fr_=Fraction(f,6)
        add("application","proba-de", f"On lance un de a 6 faces. Probabilite d'obtenir {evt} ?",
            [f"$ P = \\dfrac{{{f}}}{{6}} = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
    urnes=[(3,10),(4,10),(2,5),(7,10),(1,4),(5,8),(6,10),(3,7),(9,12),(2,9),(5,6),(4,15)]
    for (f,t) in urnes:
        fr_=Fraction(f,t)
        add("application","proba-urne", f"Une urne contient {t} boules dont {f} rouges. Probabilite de tirer une rouge ?",
            [f"$ P = \\dfrac{{{f}}}{{{t}}} = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
    for (f,t) in [(3,10),(2,5),(7,10),(1,4),(5,8),(4,9),(6,11),(3,8),(2,7),(5,12)]:
        fr_=Fraction(f,t); comp=1-fr_
        add("intermediaire","complementaire", f"La probabilite d'un evenement vaut $ \\dfrac{{{f}}}{{{t}}} $. Probabilite du contraire ?",
            [f"$ 1 - \\dfrac{{{f}}}{{{t}}} = {frac_latex(comp)} $."], f"$ {frac_latex(comp)} $")
    _i=1
    while len(E)<50:
        t=_i+3; fr_=Fraction(1,t)
        add("application","proba-urne", f"Une urne a {t} jetons dont 1 gagnant. Probabilite de gagner ?",[f"$ = {frac_latex(fr_)} $."],f"$ {frac_latex(fr_)} $")
        _i+=1
    return _fin(E)

def g4_triangles():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b) in [(3,4),(6,8),(5,12),(8,15),(9,12),(7,24),(20,21),(9,40),(12,16),(10,24),(15,20),(8,6)]:
        n=a*a+b*b; r=math.isqrt(n)
        if r*r==n:
            add("application","pythagore-hypotenuse", f"Triangle rectangle en A avec $ AB={a} $ cm et $ AC={b} $ cm. Calculer $ BC $.",
                [f"D'apres le theoreme de Pythagore : $ BC^2 = {a}^2 + {b}^2 = {n} $.", f"$ BC = \\sqrt{{{n}}} = {r} $ cm."], f"$ {r} $ cm")
        else:
            add("intermediaire","pythagore-hypotenuse", f"Triangle rectangle en A avec $ AB={a} $ cm et $ AC={b} $ cm. Calculer $ BC $.",
                [f"$ BC^2 = {a}^2 + {b}^2 = {n} $.", f"$ BC = \\sqrt{{{n}}} \\approx {fr(math.sqrt(n))} $ cm."], f"$ \\sqrt{{{n}}} \\approx {fr(math.sqrt(n))} $ cm")
    for (h,a) in [(5,3),(13,5),(10,6),(25,7),(17,8),(15,9),(20,12),(26,10),(29,20),(37,12)]:
        n=h*h-a*a; r=math.isqrt(n)
        if r*r==n:
            add("intermediaire","pythagore-cote", f"Triangle rectangle en A, hypotenuse $ BC={h} $ cm et $ AB={a} $ cm. Calculer $ AC $.",
                [f"$ AC^2 = {h}^2 - {a}^2 = {n} $.", f"$ AC = \\sqrt{{{n}}} = {r} $ cm."], f"$ {r} $ cm")
        else:
            add("approfondissement","pythagore-cote", f"Triangle rectangle en A, hypotenuse $ BC={h} $ cm et $ AB={a} $ cm. Calculer $ AC $.",
                [f"$ AC^2 = {h}^2 - {a}^2 = {n} $.", f"$ AC = \\sqrt{{{n}}} \\approx {fr(math.sqrt(n))} $ cm."], f"$ \\sqrt{{{n}}} \\approx {fr(math.sqrt(n))} $ cm")
    _i=3
    while len(E)<50:
        a,b=_i,_i+1; n=a*a+b*b; r=math.isqrt(n)
        if r*r==n: co=[f"$ BC = \\sqrt{{{n}}} = {r} $ cm."]; rp=f"$ {r} $ cm"
        else: co=[f"$ BC = \\sqrt{{{n}}} \\approx {fr(math.sqrt(n))} $ cm."]; rp=f"$ \\sqrt{{{n}}} \\approx {fr(math.sqrt(n))} $ cm"
        add("application","pythagore-hypotenuse", f"Triangle rectangle, cotes de l'angle droit {a} cm et {b} cm. Hypotenuse ?", co, rp)
        _i+=1
    return _fin(E)

def g4_reperage():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    pts=[((2,3),(6,7)),((1,2),(5,10)),((-2,1),(4,9)),((0,0),(6,8)),((3,-1),(9,7)),((-4,2),(2,10)),((1,1),(7,9)),((2,-3),(8,5)),((-1,4),(5,11)),((0,5),(8,11)),((3,3),(15,9)),((-2,-2),(4,6)),((1,0),(7,8)),((2,2),(10,6))]
    for ((xa,ya),(xb,yb)) in pts:
        mx=Fraction(xa+xb,2); my=Fraction(ya+yb,2)
        add("application","milieu", f"$ A({xa};{ya}) $ et $ B({xb};{yb}) $. Coordonnees du milieu de $ [AB] $ ?",
            [f"$ x_I = \\dfrac{{{xa}+{xb}}}{{2}} = {frac_latex(mx)} $ et $ y_I = \\dfrac{{{ya}+{yb}}}{{2}} = {frac_latex(my)} $."], f"$ ({frac_latex(mx)} ; {frac_latex(my)}) $")
    vec=[((2,3),(6,7)),((1,2),(5,10)),((-2,1),(4,9)),((0,0),(6,8)),((3,-1),(9,7)),((-4,2),(2,10)),((1,1),(7,9)),((2,-3),(8,5)),((-1,4),(5,11)),((0,5),(8,11)),((3,3),(15,9)),((-2,-2),(4,6))]
    for ((xa,ya),(xb,yb)) in vec:
        add("intermediaire","coordonnees-vecteur", f"$ A({xa};{ya}) $ et $ B({xb};{yb}) $. Coordonnees du vecteur $ \\vec{{AB}} $ ?",
            [f"$ \\vec{{AB}}(x_B - x_A ; y_B - y_A) = ({xb-xa} ; {yb-ya}) $."], f"$ ({xb-xa} ; {yb-ya}) $")
    _i=1
    while len(E)<50:
        xa,ya,xb,yb=_i,_i+1,_i+5,_i+3
        mx=Fraction(xa+xb,2); my=Fraction(ya+yb,2)
        add("application","milieu", f"Milieu de $ [AB] $ : $ A({xa};{ya}) $, $ B({xb};{yb}) $ ?",
            [f"$ = ({frac_latex(mx)} ; {frac_latex(my)}) $."], f"$ ({frac_latex(mx)} ; {frac_latex(my)}) $")
        _i+=1
    return _fin(E)

def g4_representation_espace():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    pave=[(2,3,4),(5,2,3),(4,4,2),(6,3,2),(5,5,2),(7,2,2),(8,3,1),(4,5,3),(6,2,5),(10,2,3),(3,3,5),(9,2,2)]
    for (L,l,h) in pave:
        v=L*l*h
        add("application","volume-pave", f"Volume d'un pave droit de dimensions {L} cm, {l} cm et {h} cm ?",
            [f"$ V = {L} \\times {l} \\times {h} = {v} $ cm³."], f"$ {v} $ cm³")
    for a in [2,3,4,5,6,7,8,10,9,1,11,12]:
        add("application","volume-cube", f"Volume d'un cube d'arete {a} cm ?",
            [f"$ V = {a}^3 = {a**3} $ cm³."], f"$ {a**3} $ cm³")
    faits=[("un cube","faces",6),("un cube","aretes",12),("un cube","sommets",8),
           ("un pave droit","faces",6),("un pave droit","aretes",12),("un pave droit","sommets",8),
           ("une pyramide a base carree","faces",5),("une pyramide a base carree","sommets",5),
           ("un prisme droit a base triangulaire","faces",5),("un prisme droit a base triangulaire","aretes",9)]
    for (obj,quoi,nb) in faits:
        add("intermediaire","denombrer", f"Combien de {quoi} possede {obj} ?",
            [f"{obj.capitalize()} possede ${nb}$ {quoi}."], f"${nb}$")
    _i=2
    while len(E)<50:
        a=_i
        add("application","volume-cube", f"Volume d'un cube d'arete {a} cm ?",[f"$ {a}^3 = {a**3} $ cm³."],f"$ {a**3} $ cm³")
        _i+=1
    return _fin(E)

def g4_pensee_informatique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    prog=[(3,2,5),(4,3,1),(5,2,4),(2,6,3),(7,1,2),(6,2,3),(4,4,4),(8,2,1),(3,5,2),(9,1,3),(5,3,2),(2,7,4)]
    for (x,a,b) in prog:
        r=x*a+b
        add("application","programme", f"Programme : choisir {x}, multiplier par {a}, ajouter {b}. Quel resultat ?",
            [f"$ {x} \\times {a} + {b} = {x*a} + {b} = {r} $."], f"$ {r} $")
    prog2=[(10,3,2),(20,5,4),(15,3,1),(24,6,3),(30,5,5),(18,2,7),(40,8,2),(12,4,6)]
    for (x,a,b) in prog2:
        r=x//a+b
        add("intermediaire","programme", f"Programme : choisir {x}, diviser par {a}, ajouter {b}. Resultat ?",
            [f"$ {x} \\div {a} + {b} = {x//a} + {b} = {r} $."], f"$ {r} $")
    seq=[(1,2),(0,3),(2,5),(1,4),(3,2),(0,6),(2,3),(1,7),(4,2),(0,5),(3,4),(2,2)]
    for (u0,r) in seq:
        val=u0+3*r
        add("application","suite-boucle", f"On part de {u0} et on ajoute {r} trois fois. Valeur finale ?",
            [f"$ {u0} + 3 \\times {r} = {u0} + {3*r} = {val} $."], f"$ {val} $")
    _i=1
    while len(E)<50:
        x=_i+2
        add("application","programme", f"Choisir {x}, multiplier par 2, ajouter 1. Resultat ?",[f"$ {x} \\times 2 + 1 = {x*2+1} $."],f"$ {x*2+1} $")
        _i+=1
    return _fin(E)

# ================= 5e PHYSIQUE =================
def g5_mouvement_vitesse():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (dkm,t) in [(120,2),(150,3),(90,3),(200,4),(60,2),(240,4),(100,5),(80,2),(180,3),(210,3),(45,3),(300,5)]:
        v=Fraction(dkm,t)
        add("application","vitesse", f"Un vehicule parcourt {dkm} km en {t} h. Vitesse moyenne ?",
            [f"$ v = \\dfrac{{d}}{{t}} = \\dfrac{{{dkm}}}{{{t}}} = {frac_latex(v)} $ km/h."], f"$ {frac_latex(v)} $ km/h")
    for (v,t) in [(50,3),(60,2),(80,4),(30,5),(100,2),(45,3),(70,3),(90,2),(40,6),(120,2)]:
        d=v*t
        add("application","distance", f"A {v} km/h pendant {t} h, quelle distance parcourue ?",
            [f"$ d = v \\times t = {v} \\times {t} = {d} $ km."], f"$ {d} $ km")
    for (d,v) in [(150,50),(240,60),(160,80),(90,30),(200,100),(210,70),(360,90),(120,40)]:
        t=Fraction(d,v)
        add("intermediaire","duree", f"Pour parcourir {d} km a {v} km/h, quelle duree ?",
            [f"$ t = \\dfrac{{d}}{{v}} = \\dfrac{{{d}}}{{{v}}} = {frac_latex(t)} $ h."], f"$ {frac_latex(t)} $ h")
    _i=1
    while len(E)<50:
        dkm,t=60*_i,_i+1; v=Fraction(dkm,t)
        add("application","vitesse", f"{dkm} km en {t} h : vitesse ?",[f"$ = {frac_latex(v)} $ km/h."],f"$ {frac_latex(v)} $ km/h")
        _i+=1
    return _fin(E)

def g5_proprietes_matiere():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (m,V) in [(200,100),(150,50),(80,40),(240,60),(90,30),(500,250),(120,40),(360,120),(75,25),(160,80),(45,15),(210,70)]:
        rho=Fraction(m,V)
        add("application","masse-volumique", f"Un objet a une masse de {m} g et un volume de {V} cm³. Masse volumique ?",
            [f"$ \\rho = \\dfrac{{m}}{{V}} = \\dfrac{{{m}}}{{{V}}} = {frac_latex(rho)} $ g/cm³."], f"$ {frac_latex(rho)} $ g/cm³")
    for (rho,V) in [(2,50),(3,20),(8,10),(1,120),(5,30),(4,25),(7,8),(2,200),(6,15),(9,10)]:
        m=rho*V
        add("intermediaire","masse", f"Un materiau de masse volumique {rho} g/cm³ occupe {V} cm³. Sa masse ?",
            [f"$ m = \\rho \\times V = {rho} \\times {V} = {m} $ g."], f"$ {m} $ g")
    for (m,rho) in [(200,2),(300,3),(80,8),(120,4),(500,5),(90,9),(140,7),(240,6)]:
        V=Fraction(m,rho)
        add("approfondissement","volume", f"Une masse de {m} g d'un materiau de masse volumique {rho} g/cm³. Volume ?",
            [f"$ V = \\dfrac{{m}}{{\\rho}} = \\dfrac{{{m}}}{{{rho}}} = {frac_latex(V)} $ cm³."], f"$ {frac_latex(V)} $ cm³")
    _i=1
    while len(E)<50:
        m,V=100*_i,50; rho=Fraction(m,V)
        add("application","masse-volumique", f"Masse {m} g, volume {V} cm³ : masse volumique ?",[f"$ = {frac_latex(rho)} $ g/cm³."],f"$ {frac_latex(rho)} $ g/cm³")
        _i+=1
    return _fin(E)

# ================= 2de MATHS =================
def g2_calcul_numerique_algebrique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b) in [(2,3),(3,2),(5,2),(2,4),(4,2),(2,5),(3,3),(6,2),(2,6),(7,2),(5,3),(3,4)]:
        add("application","puissances", f"Calculer $ {a}^{b} $.",[f"$ {a}^{b} = {a**b} $."], f"$ {a**b} $")
    for (a,b,c,d) in [(2,3,1,6),(3,4,5,8),(1,2,3,10),(2,5,3,10),(1,3,1,4),(3,8,1,8),(2,9,1,3),(5,6,1,2)]:
        f=Fraction(a,b)+Fraction(c,d)
        add("application","fractions", f"Calculer $ \\dfrac{{{a}}}{{{b}}} + \\dfrac{{{c}}}{{{d}}} $.",
            [f"$ = {frac_latex(f)} $."], f"$ {frac_latex(f)} $")
    for (k,a,b) in [(3,2,5),(4,1,3),(2,5,7),(5,3,2),(6,2,1),(3,4,6),(7,2,3),(2,8,5)]:
        add("intermediaire","developpement", f"Developper $ {k}({a}x + {b}) $.",
            [f"$ = {k*a}x + {k*b} $."], f"$ {k*a}x + {k*b} $")
    for n in [8,12,18,20,50,32,27,48,72,45]:
        a,b=1,n
        i=2
        while i*i<=b:
            while b%(i*i)==0: b//=i*i; a*=i
            i+=1
        ext=f"{a}\\sqrt{{{b}}}" if a!=1 else f"\\sqrt{{{b}}}"
        add("approfondissement","racines", f"Ecrire $ \\sqrt{{{n}}} $ sous la forme $ a\\sqrt{{b}} $.",
            [f"$ \\sqrt{{{n}}} = {ext} $."], f"$ {ext} $")
    _i=2
    while len(E)<50:
        add("application","puissances", f"Calculer $ {_i}^2 $.",[f"$ {_i}^2 = {_i**2} $."],f"$ {_i**2} $")
        _i+=1
    return _fin(E)

def g2_equations_inequations():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b,c) in [(2,3,11),(3,-1,8),(4,1,13),(5,2,17),(2,-3,7),(3,6,15),(-2,5,1),(4,-2,10),(6,0,18),(3,1,10),(5,-2,13),(2,7,3)]:
        x=Fraction(c-b,a); sb='-' if b>=0 else '+'
        add("application","equation", f"Resoudre $ {a}x + {b} = {c} $.",
            [f"$ {a}x = {c} {sb} {abs(b)} = {c-b} $.", f"$ x = \\dfrac{{{c-b}}}{{{a}}} = {frac_latex(x)} $."], f"$ x = {frac_latex(x)} $")
    for (a,b,c,d) in [(3,2,1,10),(5,1,2,13),(4,3,2,9),(6,2,3,14),(2,7,1,10),(5,4,3,12),(4,5,2,11),(7,1,3,17)]:
        x=Fraction(d-b,a-c)
        add("intermediaire","equation", f"Resoudre $ {a}x + {b} = {c}x + {d} $.",
            [f"$ {a}x - {c}x = {d} - {b} $ soit $ {a-c}x = {d-b} $.", f"$ x = {frac_latex(x)} $."], f"$ x = {frac_latex(x)} $")
    for (a,b) in [(3,12),(5,20),(4,24),(2,14),(6,18),(7,28),(3,21),(8,40)]:
        x=Fraction(b,a)
        add("application","equation-produit", f"Resoudre $ {a}x = {b} $.",
            [f"$ x = \\dfrac{{{b}}}{{{a}}} = {frac_latex(x)} $."], f"$ x = {frac_latex(x)} $")
    _i=2
    while len(E)<50:
        a,c=_i,3; x=Fraction(_i,1)
        add("application","equation", f"Resoudre $ {a}x = {a*_i} $.",[f"$ x = {_i} $."],f"$ x = {_i} $")
        _i+=1
    return _fin(E)

def g2_fonctions_de_reference():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for x in [2,3,4,5,6,7,8,1,9,10,11,12]:
        add("application","carre", f"Soit $ f(x) = x^2 $. Calculer $ f({x}) $.",
            [f"$ f({x}) = {x}^2 = {x**2} $."], f"$ f({x}) = {x**2} $")
    for x in [1,4,9,16,25,36,49,64,81,100]:
        r=math.isqrt(x)
        add("application","racine", f"Soit $ g(x) = \\sqrt{{x}} $. Calculer $ g({x}) $.",
            [f"$ g({x}) = \\sqrt{{{x}}} = {r} $."], f"$ g({x}) = {r} $")
    for x in [2,4,5,10,3,8,20,25,6,50]:
        add("intermediaire","inverse", f"Soit $ h(x) = \\dfrac{{1}}{{x}} $. Calculer $ h({x}) $.",
            [f"$ h({x}) = \\dfrac{{1}}{{{x}}} $."], f"$ \\dfrac{{1}}{{{x}}} $")
    _i=2
    while len(E)<50:
        add("application","carre", f"$ f(x)=x^2 $, calculer $ f({_i}) $.",[f"$ = {_i**2} $."],f"$ {_i**2} $")
        _i+=1
    return _fin(E)

def g2_notion_de_fonction():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    aff=[(2,3,4),(3,-1,5),(-2,7,3),(4,0,6),(1,5,2),(5,-2,3),(-3,4,2),(2,-5,7),(6,1,1),(3,2,4),(2,4,3),(-1,8,5)]
    for (a,b,x0) in aff:
        y=a*x0+b; sb='+' if b>=0 else '-'
        add("application","image", f"Soit $ f(x) = {a}x {sb} {abs(b)} $. Calculer $ f({x0}) $.",
            [f"$ f({x0}) = {a} \\times {x0} {sb} {abs(b)} = {y} $."], f"$ f({x0}) = {y} $")
    ant=[(2,3,11),(3,-1,8),(4,1,13),(5,2,17),(2,-3,7),(3,6,15),(4,-2,10),(6,0,18),(3,1,10),(5,-2,13)]
    for (a,b,y0) in ant:
        x=Fraction(y0-b,a); sb='-' if b>=0 else '+'
        add("intermediaire","antecedent", f"Soit $ f(x) = {a}x + {b} $. Determiner l'antecedent de {y0}.",
            [f"On resout $ {a}x + {b} = {y0} $.", f"$ x = \\dfrac{{{y0} {sb} {abs(b)}}}{{{a}}} = {frac_latex(x)} $."], f"$ x = {frac_latex(x)} $")
    _i=1
    while len(E)<50:
        a,b,x0=2,_i,3; y=a*x0+b
        add("application","image", f"$ f(x)=2x + {b} $, calculer $ f(3) $.",[f"$ = 6 + {b} = {y} $."],f"$ {y} $")
        _i+=1
    return _fin(E)

def g2_statistiques():
    E=[]
    from statistics import median
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    series=[[4,7,9,12,8],[10,15,12,18,20],[3,5,5,8,9,10],[6,6,7,9,13],[11,14,9,16,10],
            [2,4,4,6,8,12],[13,15,17,11,19],[5,8,8,10,14],[7,9,12,12,15,17],[20,22,18,25,15],[1,3,4,6,6],[8,10,12,14,16]]
    for s in series[:12]:
        m=sum(s)/len(s)
        add("application","moyenne", f"Moyenne de : {', '.join(map(str,s))} ?",
            [f"$ \\dfrac{{{sum(s)}}}{{{len(s)}}} = {fr(m)} $."], f"$ {fr(m)} $")
    for s in series[:12]:
        et=max(s)-min(s)
        add("application","etendue", f"Etendue de : {', '.join(map(str,s))} ?",
            [f"$ {max(s)} - {min(s)} = {et} $."], f"$ {et} $")
    for s in series[:12]:
        ss=sorted(s); med=median(ss)
        add("intermediaire","mediane", f"Mediane de : {', '.join(map(str,s))} ?",
            [f"Serie ordonnee : {', '.join(map(str,ss))}. Mediane $ = {fr(med)} $."], f"$ {fr(med)} $")
    _i=1
    while len(E)<50:
        s=[_i,_i+2,_i+4]; m=sum(s)/3
        add("application","moyenne", f"Moyenne de {', '.join(map(str,s))} ?",[f"$ = {fr(m)} $."],f"$ {fr(m)} $")
        _i+=1
    return _fin(E)

def g2_probabilites():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    cartes=[("un roi",4,52),("un coeur",13,52),("un as",4,52),("une figure",12,52),("un carreau",13,52),("un roi rouge",2,52)]
    for (evt,f,t) in cartes:
        fr_=Fraction(f,t)
        add("application","proba-cartes", f"Jeu de {t} cartes. Probabilite de tirer {evt} ?",
            [f"$ P = \\dfrac{{{f}}}{{{t}}} = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
    urnes=[(3,10),(4,10),(2,5),(7,10),(1,4),(5,8),(6,10),(3,7),(9,12),(2,9),(5,6),(4,15),(1,6),(7,15)]
    for (f,t) in urnes:
        fr_=Fraction(f,t)
        add("application","proba-urne", f"Urne de {t} boules dont {f} gagnantes. Probabilite de gagner ?",
            [f"$ P = \\dfrac{{{f}}}{{{t}}} = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
    for (f,t) in [(3,10),(2,5),(7,10),(1,4),(5,8),(4,9),(6,11),(3,8),(2,7),(5,12)]:
        fr_=Fraction(f,t); comp=1-fr_
        add("intermediaire","complementaire", f"$ P(A) = \\dfrac{{{f}}}{{{t}}} $. Calculer $ P(\\overline{{A}}) $.",
            [f"$ P(\\overline{{A}}) = 1 - \\dfrac{{{f}}}{{{t}}} = {frac_latex(comp)} $."], f"$ {frac_latex(comp)} $")
    _i=1
    while len(E)<50:
        t=_i+4; fr_=Fraction(2,t)
        add("application","proba-urne", f"Urne de {t} boules dont 2 gagnantes. Probabilite ?",[f"$ = {frac_latex(fr_)} $."],f"$ {frac_latex(fr_)} $")
        _i+=1
    return _fin(E)

def g2_arithmetique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b) in [(24,36),(48,60),(30,45),(56,42),(72,54),(100,60),(84,36),(90,120),(45,75),(64,48),(27,36),(50,80)]:
        g=math.gcd(a,b)
        add("application","pgcd", f"Calculer le PGCD de {a} et {b}.",
            [f"Par l'algorithme d'Euclide, $ \\mathrm{{PGCD}}({a},{b}) = {g} $."], f"$ {g} $")
    tests=[(126,3),(85,5),(324,9),(100,3),(85,2),(91,5),(153,3),(112,2),(50,4),(945,9),(370,3),(639,2)]
    for (N,d) in tests:
        ok = (N % d == 0)
        add("application","divisibilite", f"{N} est-il divisible par {d} ?",
            [("Oui" if ok else "Non")+f", car {N} $ = {d} \\times {N//d}" + (f" $." if ok else f" + {N%d} $.")], "Oui" if ok else "Non")
    for n in [12,18,24,36,48,60,72,100,84,90]:
        f=[]; m=n; p=2
        while p*p<=m:
            while m%p==0: f.append(p); m//=p
            p+=1
        if m>1: f.append(m)
        prod=" \\times ".join(map(str,f))
        add("intermediaire","decomposition", f"Decomposer {n} en produit de facteurs premiers.",
            [f"$ {n} = {prod} $."], f"$ {prod} $")
    _i=2
    while len(E)<50:
        a,b=6*_i,4*_i; g=math.gcd(a,b)
        add("application","pgcd", f"PGCD de {a} et {b} ?",[f"$ = {g} $."],f"$ {g} $")
        _i+=1
    return _fin(E)

def g2_vecteurs():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    vec=[((2,3),(6,7)),((1,2),(5,10)),((-2,1),(4,9)),((0,0),(6,8)),((3,-1),(9,7)),((-4,2),(2,10)),((1,1),(7,9)),((2,-3),(8,5)),((-1,4),(5,11)),((0,5),(8,11)),((3,3),(15,9)),((-2,-2),(4,6)),((5,1),(2,6)),((-3,2),(1,-4))]
    for ((xa,ya),(xb,yb)) in vec:
        add("application","coordonnees", f"$ A({xa};{ya}) $ et $ B({xb};{yb}) $. Coordonnees de $ \\vec{{AB}} $ ?",
            [f"$ \\vec{{AB}}(x_B - x_A ; y_B - y_A) = ({xb-xa} ; {yb-ya}) $."], f"$ ({xb-xa} ; {yb-ya}) $")
    som=[((2,3),(4,1)),((1,-2),(3,5)),((-2,4),(6,1)),((0,3),(5,-2)),((3,3),(2,4)),((-1,2),(4,3)),((5,0),(1,6)),((2,2),(3,3)),((-3,1),(2,2)),((4,-1),(1,5)),((0,0),(7,2)),((2,5),(3,1))]
    for ((x1,y1),(x2,y2)) in som:
        add("intermediaire","somme", f"$ \\vec{{u}}({x1};{y1}) $ et $ \\vec{{v}}({x2};{y2}) $. Coordonnees de $ \\vec{{u}}+\\vec{{v}} $ ?",
            [f"$ ({x1}+{x2} ; {y1}+{y2}) = ({x1+x2} ; {y1+y2}) $."], f"$ ({x1+x2} ; {y1+y2}) $")
    _i=1
    while len(E)<50:
        xa,ya,xb,yb=_i,_i+1,_i+4,_i+2
        add("application","coordonnees", f"$ A({xa};{ya}) $, $ B({xb};{yb}) $ : $ \\vec{{AB}} $ ?",[f"$ = ({xb-xa} ; {yb-ya}) $."],f"$ ({xb-xa} ; {yb-ya}) $")
        _i+=1
    return _fin(E)

def g2_droites_du_plan():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    pts=[((0,1),(2,7)),((1,2),(3,8)),((0,0),(4,12)),((1,1),(4,7)),((2,3),(5,9)),((0,5),(2,1)),((1,4),(3,10)),((-1,2),(2,11)),((0,2),(5,17)),((1,0),(4,9)),((2,1),(6,9)),((0,3),(3,3))]
    for ((xa,ya),(xb,yb)) in pts:
        m=Fraction(yb-ya,xb-xa)
        add("application","coefficient-directeur", f"Droite passant par $ A({xa};{ya}) $ et $ B({xb};{yb}) $. Coefficient directeur ?",
            [f"$ m = \\dfrac{{{yb}-{ya}}}{{{xb}-{xa}}} = {frac_latex(m)} $."], f"$ m = {frac_latex(m)} $")
    for (m,x0,y0) in [(2,1,5),(3,0,2),(-1,2,4),(4,1,6),(2,3,1),(5,0,3),(-2,1,7),(3,2,2),(1,4,5),(2,0,0)]:
        b=y0-m*x0; sb='+' if b>=0 else '-'
        add("intermediaire","equation-reduite", f"Droite de coefficient directeur {m} passant par $ ({x0};{y0}) $. Equation reduite ?",
            [f"$ y = {m}x + p $ avec $ p = {y0} - {m}\\times{x0} = {b} $.", f"$ y = {m}x {sb} {abs(b)} $."], f"$ y = {m}x {sb} {abs(b)} $")
    _i=1
    while len(E)<50:
        xa,ya,xb,yb=0,_i,2,_i+4; m=Fraction(yb-ya,xb-xa)
        add("application","coefficient-directeur", f"Par $ (0;{ya}) $ et $ (2;{yb}) $ : coefficient directeur ?",[f"$ = {frac_latex(m)} $."],f"$ {frac_latex(m)} $")
        _i+=1
    return _fin(E)

def _rot(L, off):
    if not L: return L
    off = off % len(L)
    return L[off:] + L[:off]

def _pm(v):
    return f"+ {v}" if v>=0 else f"- {abs(v)}"

# ================= 4e MATHS (complements) =================
def g4_fonctions():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b,x0) in [(2,3,4),(3,1,5),(5,2,2),(4,3,3),(2,7,6),(6,1,2),(3,4,5),(2,5,10),(4,2,4),(5,1,3),(3,2,4),(2,6,3)]:
        y=a*x0+b
        add("application","image-affine", f"Soit $ f(x) = {a}x + {b} $. Calculer $ f({x0}) $.",
            [f"$ f({x0}) = {a}\\times {x0} + {b} = {y} $."], f"$ f({x0}) = {y} $")
    for (a,x0) in [(3,5),(4,2),(2,9),(5,3),(6,4),(2,7),(3,8),(4,6),(5,5),(2,11)]:
        add("application","image-lineaire", f"Soit $ f(x) = {a}x $. Calculer $ f({x0}) $.",
            [f"$ f({x0}) = {a}\\times {x0} = {a*x0} $."], f"$ f({x0}) = {a*x0} $")
    for (a,b,y0) in [(2,3,11),(3,-1,8),(4,1,13),(5,2,17),(2,-3,7),(3,6,15),(4,-2,10),(6,0,18)]:
        x=Fraction(y0-b,a); sb='-' if b>=0 else '+'
        add("intermediaire","antecedent", f"Soit $ f(x) = {a}x + {b} $. Antecedent de {y0} ?",
            [f"$ x = \\dfrac{{{y0} {sb} {abs(b)}}}{{{a}}} = {frac_latex(x)} $."], f"$ x = {frac_latex(x)} $")
    _i=1
    while len(E)<50:
        a,x0=2,_i; y=a*x0
        add("application","image-lineaire", f"$ f(x)=2x $, $ f({x0}) $ ?", [f"$ = {y} $."], f"$ {y} $")
        _i+=1
    return _fin(E)

def g4_parallelogrammes_translations():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (b,h) in [(5,3),(6,4),(8,2),(7,5),(10,4),(9,6),(12,3),(4,4),(15,5),(11,7),(20,6),(14,5)]:
        add("application","aire", f"Aire d'un parallelogramme de base {b} cm et hauteur {h} cm ?",
            [f"$ A = b\\times h = {b}\\times {h} = {b*h} $ cm²."], f"$ {b*h} $ cm²")
    for (x,y,dx,dy) in [(2,3,4,1),(1,5,2,3),(3,2,5,4),(0,0,6,2),(4,1,2,5),(2,2,3,3),(5,0,1,4),(1,6,4,2),(3,3,2,2),(0,4,5,1)]:
        add("application","translation", f"Image de $ A({x};{y}) $ par la translation de vecteur $ ({dx};{dy}) $ ?",
            [f"$ ({x}+{dx} ; {y}+{dy}) = ({x+dx} ; {y+dy}) $."], f"$ ({x+dx} ; {y+dy}) $")
    for (L,l) in [(5,3),(6,4),(8,2),(7,5),(10,4),(9,6),(12,3),(15,5)]:
        add("intermediaire","perimetre", f"Perimetre d'un parallelogramme de cotes {L} cm et {l} cm ?",
            [f"$ P = 2\\times({L}+{l}) = {2*(L+l)} $ cm."], f"$ {2*(L+l)} $ cm")
    _i=2
    while len(E)<50:
        b,h=_i,_i+1
        add("application","aire", f"Parallelogramme base {b} cm, hauteur {h} cm : aire ?", [f"$ = {b*h} $ cm²."], f"$ {b*h} $ cm²")
        _i+=1
    return _fin(E)

def g4_racine_carree():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for n in [16,25,49,81,100,144,169,196,225,64,121,256,4,9,36,400]:
        rr=math.isqrt(n)
        add("application","racine-exacte", f"Calculer $ \\sqrt{{{n}}} $.",
            [f"$ \\sqrt{{{n}}} = {rr} $ car $ {rr}^2 = {n} $."], f"$ {rr} $")
    for n in [8,12,18,20,50,32,27,48,72,45]:
        a,b=1,n; i=2
        while i*i<=b:
            while b%(i*i)==0: b//=i*i; a*=i
            i+=1
        ext=f"{a}\\sqrt{{{b}}}" if a!=1 else f"\\sqrt{{{b}}}"
        add("intermediaire","simplifier", f"Ecrire $ \\sqrt{{{n}}} $ sous la forme $ a\\sqrt{{b}} $.",
            [f"$ \\sqrt{{{n}}} = {ext} $."], f"$ {ext} $")
    for x in [3,4,5,6,7,8,9,10,11,12]:
        add("application","carre", f"Calculer $ {x}^2 $.", [f"$ {x}^2 = {x*x} $."], f"$ {x*x} $")
    _i=13
    while len(E)<50:
        add("application","carre", f"Calculer $ {_i}^2 $.", [f"$ = {_i*_i} $."], f"$ {_i*_i} $")
        _i+=1
    return _fin(E)

def g4_transformations():
    return g5_transformations()

# ================= 4e PHYSIQUE =================
def g4p_mouvement_vitesse():
    return g2p_mouvement_interactions()

def g4p_propagation_signal():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (d,t) in [(340,1),(680,2),(1020,3),(1700,5),(3400,10),(170,1),(510,3),(850,5),(1360,4),(2040,6),(2720,8),(4250,10)]:
        v=Fraction(d,t)
        add("application","vitesse-son", f"Le son parcourt {d} m en {t} s. Vitesse du son ?",
            [f"$ v = \\dfrac{{d}}{{t}} = \\dfrac{{{d}}}{{{t}}} = {frac_latex(v)} $ m/s."], f"$ {frac_latex(v)} $ m/s")
    for (v,t) in [(340,2),(340,3),(340,5),(340,10),(1500,2),(1500,4),(300,3),(300,6)]:
        add("intermediaire","distance-son", f"A {v} m/s pendant {t} s, quelle distance parcourt le signal ?",
            [f"$ d = v\\times t = {v}\\times {t} = {v*t} $ m."], f"$ {v*t} $ m")
    _i=1
    while len(E)<50:
        d,t=340*_i,_i; v=Fraction(d,t)
        add("application","vitesse-son", f"{d} m en {t} s : vitesse ?", [f"$ = {frac_latex(v)} $ m/s."], f"$ {frac_latex(v)} $ m/s")
        _i+=1
    return _fin(E)

def g4p_interactions_forces():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for m in [2,5,10,3,8,1,4,7,6,20,15,12]:
        add("application","poids", f"Calculer le poids d'un objet de masse {m} kg (g = 10 N/kg).",
            [f"$ P = m\\times g = {m}\\times 10 = {m*10} $ N."], f"$ {m*10} $ N")
    for P in [20,50,100,30,80,10,40,70,60,200]:
        m=Fraction(P,10)
        add("intermediaire","masse", f"Un objet a un poids de {P} N (g = 10 N/kg). Quelle est sa masse ?",
            [f"$ m = \\dfrac{{P}}{{g}} = \\dfrac{{{P}}}{{10}} = {frac_latex(m)} $ kg."], f"$ {frac_latex(m)} $ kg")
    _i=1
    while len(E)<50:
        m=_i
        add("application","poids", f"Masse {m} kg (g=10) : poids ?", [f"$ = {m*10} $ N."], f"$ {m*10} $ N")
        _i+=1
    return _fin(E)

def g4p_organisation_matiere():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    mol=[("H_2O",3),("CO_2",3),("CH_4",5),("O_2",2),("NaCl",2),("NH_3",4),("H_2",2),("N_2",2),
         ("CO",2),("HCl",2),("C_2H_6",8),("SO_2",3)]
    for (f,nb) in mol:
        add("application","atomes", f"Combien d'atomes dans une molecule de $ {f} $ ?",
            [f"On additionne les atomes : ${nb}$ atomes."], f"${nb}$")
    corps=[("le dioxygene",2,"O"),("le diazote",2,"N"),("le dihydrogene",2,"H"),
           ("l'eau",2,"H et 1 O"),("le methane",1,"C et 4 H")]
    for (nom,n,el) in corps:
        add("intermediaire","composition", f"Combien d'atomes de chaque sorte compose {nom} ?",
            [f"{nom.capitalize()} : {n} atome(s) de {el}."], f"{n} de {el}")
    _i=0
    while len(E)<50:
        f,nb=mol[_i%len(mol)]
        add("application","atomes", f"Nombre d'atomes dans $ {f} $ ?", [f"${nb}$ atomes."], f"${nb}$")
        _i+=1
    return _fin(E)

def g4p_transformation_conservation_masse():
    return g2p_transformations_matiere()

# ================= 5e PHYSIQUE (complements) =================
def g5p_signaux_sonores_lumineux():
    return g4p_propagation_signal()

def g5p_transformation_chimique():
    return g2p_transformations_matiere()

# ================= 2de MATHS (algorithmique) =================
def g2_algorithmique():
    return g6_pensee_informatique()

# ================= TERMINALE PHYSIQUE (complements calculables) =================
def gTp_gaz_parfait():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (P1,V1,P2) in [(2,3,1),(4,5,2),(1,10,5),(3,4,6),(5,2,1),(2,6,4),(10,1,2),(6,2,3),(4,3,2),(1,20,4),(8,2,4),(3,10,5)]:
        V2=Fraction(P1*V1,P2)
        add("application","boyle-mariotte", f"A temperature constante : $ P_1 V_1 = P_2 V_2 $, avec $ P_1 = {P1} $ bar, $ V_1 = {V1} $ L, $ P_2 = {P2} $ bar. Calculer $ V_2 $.",
            [f"$ V_2 = \\dfrac{{P_1 V_1}}{{P_2}} = \\dfrac{{{P1}\\times {V1}}}{{{P2}}} = {frac_latex(V2)} $ L."], f"$ {frac_latex(V2)} $ L")
    for (V1,T1,T2) in [(2,300,600),(3,200,400),(1,250,500),(4,100,300),(5,300,150)]:
        V2=Fraction(V1*T2,T1)
        add("intermediaire","charles", f"A pression constante : $ \\dfrac{{V_1}}{{T_1}} = \\dfrac{{V_2}}{{T_2}} $, avec $ V_1 = {V1} $ L, $ T_1 = {T1} $ K, $ T_2 = {T2} $ K. Calculer $ V_2 $.",
            [f"$ V_2 = \\dfrac{{V_1 T_2}}{{T_1}} = {frac_latex(V2)} $ L."], f"$ {frac_latex(V2)} $ L")
    _i=1
    while len(E)<50:
        P1,V1,P2=2,_i,1; V2=Fraction(P1*V1,P2)
        add("application","boyle-mariotte", f"$ P_1=2 $, $ V_1={_i} $, $ P_2=1 $ : $ V_2 $ ?", [f"$ = {frac_latex(V2)} $ L."], f"$ {frac_latex(V2)} $ L")
        _i+=1
    return _fin(E)

def gTp_lois_newton_champs():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (m,a) in [(2,3),(5,4),(1,10),(6,2),(10,4),(2,6),(8,5),(3,4),(5,2),(2,10),(12,3),(4,7)]:
        add("application","2e-loi", f"Deuxieme loi de Newton : $ F = m\\times a $, avec $ m = {m} $ kg et $ a = {a} $ m/s². Calculer $ F $.",
            [f"$ F = {m}\\times {a} = {m*a} $ N."], f"$ {m*a} $ N")
    for (F,m) in [(20,4),(30,5),(12,3),(40,8),(15,3),(50,10),(18,6),(24,4),(9,3),(60,12)]:
        a=Fraction(F,m)
        add("intermediaire","acceleration", f"$ F = {F} $ N et $ m = {m} $ kg. Calculer l'acceleration $ a = F/m $.",
            [f"$ a = \\dfrac{{{F}}}{{{m}}} = {frac_latex(a)} $ m/s²."], f"$ {frac_latex(a)} $ m/s²")
    _i=1
    while len(E)<50:
        m,a=_i,2
        add("application","2e-loi", f"$ m={m} $ kg, $ a=2 $ m/s² : $ F $ ?", [f"$ = {m*2} $ N."], f"$ {m*2} $ N")
        _i+=1
    return _fin(E)

def gTp_phenomenes_ondulatoires():
    return g2p_ondes_signaux()

def gTp_ecoulement_fluide():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (V,t) in [(100,5),(60,3),(120,4),(200,8),(90,3),(150,5),(80,4),(240,6),(50,2),(300,10),(70,7),(180,9)]:
        Q=Fraction(V,t)
        add("application","debit", f"Un volume de {V} L s'ecoule en {t} s. Debit volumique $ Q = V/t $ ?",
            [f"$ Q = \\dfrac{{{V}}}{{{t}}} = {frac_latex(Q)} $ L/s."], f"$ {frac_latex(Q)} $ L/s")
    for (Q,t) in [(5,10),(3,20),(8,5),(2,30),(10,6),(4,15),(6,12),(1,60)]:
        add("intermediaire","volume", f"Debit {Q} L/s pendant {t} s. Volume ecoule ?",
            [f"$ V = Q\\times t = {Q}\\times {t} = {Q*t} $ L."], f"$ {Q*t} $ L")
    _i=1
    while len(E)<50:
        V,t=10*_i,5; Q=Fraction(V,t)
        add("application","debit", f"{V} L en {t} s : debit ?", [f"$ = {frac_latex(Q)} $ L/s."], f"$ {frac_latex(Q)} $ L/s")
        _i+=1
    return _fin(E)

def gTp_electrolyse():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (I,t) in [(2,10),(5,4),(3,20),(1,60),(4,15),(2,30),(6,5),(10,2),(0.5,40),(8,3),(2,100),(5,12)]:
        Q=I*t
        add("application","charge", f"Un courant de {fr(I,1)} A circule pendant {t} s. Charge $ Q = I\\times t $ ?",
            [f"$ Q = {fr(I,1)}\\times {t} = {fr(Q,1)} $ C."], f"$ {fr(Q,1)} $ C")
    for (Q,t) in [(20,10),(60,30),(12,4),(100,20),(45,15),(24,6),(90,45),(8,2)]:
        I=Fraction(Q,t)
        add("intermediaire","intensite", f"Une charge de {Q} C passe en {t} s. Intensite $ I = Q/t $ ?",
            [f"$ I = \\dfrac{{{Q}}}{{{t}}} = {frac_latex(I)} $ A."], f"$ {frac_latex(I)} $ A")
    _i=1
    while len(E)<50:
        I,t=2,_i*5; Q=I*t
        add("application","charge", f"$ I=2 $ A, $ t={t} $ s : charge ?", [f"$ = {Q} $ C."], f"$ {Q} $ C")
        _i+=1
    return _fin(E)

def gTp_lunette_photons():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (f1,f2) in [(100,5),(120,4),(200,10),(90,3),(150,5),(80,4),(240,6),(50,2),(300,10),(160,8),(100,2),(180,9)]:
        G=Fraction(f1,f2)
        add("application","grossissement", f"Lunette : objectif $ f_1 = {f1} $ cm, oculaire $ f_2 = {f2} $ cm. Grossissement $ G = f_1/f_2 $ ?",
            [f"$ G = \\dfrac{{{f1}}}{{{f2}}} = {frac_latex(G)} $."], f"$ {frac_latex(G)} $")
    for (G,f2) in [(10,5),(20,4),(15,3),(25,2),(8,6),(30,5),(12,10),(40,2)]:
        f1=G*f2
        add("intermediaire","focale", f"Grossissement {G}, oculaire $ f_2 = {f2} $ cm. Focale de l'objectif $ f_1 = G\\times f_2 $ ?",
            [f"$ f_1 = {G}\\times {f2} = {f1} $ cm."], f"$ {f1} $ cm")
    _i=1
    while len(E)<50:
        f1,f2=50*_i,5; G=Fraction(f1,f2)
        add("application","grossissement", f"$ f_1={f1} $, $ f_2=5 $ : grossissement ?", [f"$ = {frac_latex(G)} $."], f"$ {frac_latex(G)} $")
        _i+=1
    return _fin(E)

# ================= 2de PHYSIQUE =================
def g2p_description_matiere():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (m,V) in [(20,2),(30,3),(50,5),(12,4),(45,9),(60,10),(18,2),(100,4),(35,5),(24,3),(80,8),(90,6)]:
        C=Fraction(m,V)
        add("application","concentration", f"Une solution contient {m} g de solute dans {V} L. Concentration massique ?",
            [f"$ C = \\dfrac{{m}}{{V}} = \\dfrac{{{m}}}{{{V}}} = {frac_latex(C)} $ g/L."], f"$ {frac_latex(C)} $ g/L")
    for (C,V) in [(5,2),(10,3),(8,4),(20,2),(4,5),(15,2),(6,3),(25,4),(12,5),(9,2)]:
        m=C*V
        add("application","masse-solute", f"Concentration {C} g/L, volume {V} L. Masse de solute ?",
            [f"$ m = C\\times V = {C}\\times {V} = {m} $ g."], f"$ {m} $ g")
    _i=1
    while len(E)<50:
        m,V=10*_i,5; C=Fraction(m,V)
        add("application","concentration", f"{m} g dans {V} L : concentration ?", [f"$ = {frac_latex(C)} $ g/L."], f"$ {frac_latex(C)} $ g/L")
        _i+=1
    return _fin(E)

def g2p_modelisation_microscopique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    subs=[("l'eau H2O",18),("le dioxyde de carbone CO2",44),("le dioxygene O2",32),
          ("le carbone C",12),("le fer Fe",56),("le cuivre Cu",64),("le sodium Na",23),
          ("le chlorure de sodium NaCl",58),("le glucose",180),("le methane CH4",16)]
    for (nom,M) in subs:
        for m in [M, 2*M]:
            n=Fraction(m,M)
            add("application","quantite-matiere", f"Masse molaire de {nom} : {M} g/mol. Quantite de matiere dans {m} g ?",
                [f"$ n = \\dfrac{{m}}{{M}} = \\dfrac{{{m}}}{{{M}}} = {frac_latex(n)} $ mol."], f"$ {frac_latex(n)} $ mol")
    _i=1
    while len(E)<50:
        M=18; m=18*_i; n=Fraction(m,M)
        add("application","quantite-matiere", f"M = 18 g/mol, masse {m} g : quantite de matiere ?", [f"$ = {frac_latex(n)} $ mol."], f"$ {frac_latex(n)} $ mol")
        _i+=1
    return _fin(E)

def g2p_mouvement_interactions():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (d,t) in [(100,5),(120,4),(90,3),(200,8),(60,2),(150,3),(80,4),(240,6),(45,3),(300,5),(70,2),(180,9)]:
        v=Fraction(d,t)
        add("application","vitesse", f"Un mobile parcourt {d} m en {t} s. Vitesse ?",
            [f"$ v = \\dfrac{{d}}{{t}} = \\dfrac{{{d}}}{{{t}}} = {frac_latex(v)} $ m/s."], f"$ {frac_latex(v)} $ m/s")
    for m in [2,5,10,3,8,1,4,7,6,20,15,12]:
        P=m*10
        add("application","poids", f"Calculer le poids d'un objet de masse {m} kg (g = 10 N/kg).",
            [f"$ P = m\\times g = {m}\\times 10 = {P} $ N."], f"$ {P} $ N")
    _i=1
    while len(E)<50:
        d,t=50*_i,5; v=Fraction(d,t)
        add("application","vitesse", f"{d} m en {t} s : vitesse ?", [f"$ = {frac_latex(v)} $ m/s."], f"$ {frac_latex(v)} $ m/s")
        _i+=1
    return _fin(E)

def g2p_ondes_signaux():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (lam,f) in [(2,3),(5,2),(4,10),(3,5),(6,2),(10,4),(1,50),(8,3),(2,20),(5,6),(7,2),(4,25)]:
        v=lam*f
        add("application","celerite", f"Une onde a une longueur d'onde {lam} m et une frequence {f} Hz. Celerite ?",
            [f"$ v = \\lambda\\times f = {lam}\\times {f} = {v} $ m/s."], f"$ {v} $ m/s")
    for f in [2,4,5,10,20,25,50,100,8,40]:
        T=Fraction(1,f)
        add("application","periode", f"Une onde a une frequence de {f} Hz. Periode ?",
            [f"$ T = \\dfrac{{1}}{{f}} = \\dfrac{{1}}{{{f}}} = {frac_latex(T)} $ s."], f"$ {frac_latex(T)} $ s")
    _i=1
    while len(E)<50:
        lam,f=_i,3; v=lam*f
        add("application","celerite", f"$ \\lambda = {lam} $ m, $ f = 3 $ Hz : celerite ?", [f"$ = {v} $ m/s."], f"$ {v} $ m/s")
        _i+=1
    return _fin(E)

def g2p_transformations_matiere():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (r1,r2) in [(10,15),(8,12),(20,5),(6,9),(14,7),(25,10),(4,16),(30,20),(11,9),(18,2),(7,13),(22,8)]:
        add("application","conservation-masse", f"Deux reactifs de masses {r1} g et {r2} g reagissent totalement. Masse des produits ?",
            [f"Conservation de la masse : $ {r1} + {r2} = {r1+r2} $ g."], f"$ {r1+r2} $ g")
    for (tot,r1) in [(25,10),(30,12),(18,8),(40,15),(22,9),(50,20),(16,7),(35,14)]:
        add("intermediaire","masse-manquante", f"La masse totale des produits est {tot} g. Un reactif pesait {r1} g. Masse de l'autre reactif ?",
            [f"$ {tot} - {r1} = {tot-r1} $ g."], f"$ {tot-r1} $ g")
    for (nom,M,m) in [("H2O",18,36),("CO2",44,88),("O2",32,64),("Fe",56,112),("C",12,24),("NaCl",58,116)]:
        n=Fraction(m,M)
        add("application","quantite", f"M({nom}) = {M} g/mol. Quantite de matiere dans {m} g ?",
            [f"$ n = \\dfrac{{{m}}}{{{M}}} = {frac_latex(n)} $ mol."], f"$ {frac_latex(n)} $ mol")
    _i=1
    while len(E)<50:
        a,b=5*_i,3*_i
        add("application","conservation-masse", f"{a} g + {b} g de reactifs : masse des produits ?", [f"$ = {a+b} $ g."], f"$ {a+b} $ g")
        _i+=1
    return _fin(E)

# ================= PREMIERE (techno) MATHS =================
def g1_derivation():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b,c,x0) in [(1,2,3,2),(2,3,1,1),(3,1,4,0),(1,5,2,3),(2,1,6,2),(4,2,1,1),(1,3,5,4),(3,2,2,2),(2,5,1,3),(1,1,1,5),(5,2,3,1),(2,4,6,0)]:
        dv=2*a*x0+b
        add("application","derivee", f"Soit $ f(x) = {a}x^2 + {b}x + {c} $. Calculer $ f'({x0}) $.",
            [f"$ f'(x) = {2*a}x + {b} $.", f"$ f'({x0}) = {2*a}\\times {x0} + {b} = {dv} $."], f"$ f'({x0}) = {dv} $")
    for (a,b,c) in [(1,2,3),(2,3,1),(3,1,4),(1,5,2),(2,1,6),(4,2,1),(1,3,5),(3,2,2),(2,5,1),(5,2,3)]:
        add("intermediaire","fonction-derivee", f"Donner la derivee de $ f(x) = {a}x^2 + {b}x + {c} $.",
            [f"$ f'(x) = {2*a}x + {b} $."], f"$ f'(x) = {2*a}x + {b} $")
    _i=1
    while len(E)<50:
        a,x0=_i,2; dv=2*a*x0+1
        add("application","derivee", f"$ f(x) = {a}x^2 + x $, calculer $ f'(2) $.", [f"$ f'(x)={2*a}x+1 $, $ f'(2)={dv} $."], f"$ {dv} $")
        _i+=1
    return _fin(E)

def g1_fonctions_variable_reelle():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b,c,x0) in [(1,2,3,2),(2,3,1,1),(3,1,4,2),(1,5,2,3),(2,1,6,2),(1,2,1,4),(2,2,2,1),(3,1,1,2),(1,4,3,3),(2,3,5,1),(1,1,4,5),(2,5,1,2)]:
        y=a*x0*x0+b*x0+c
        add("application","image", f"Soit $ f(x) = {a}x^2 + {b}x + {c} $. Calculer $ f({x0}) $.",
            [f"$ f({x0}) = {a}\\times {x0}^2 + {b}\\times {x0} + {c} = {y} $."], f"$ f({x0}) = {y} $")
    for (a,b,x0) in [(2,3,4),(3,1,5),(5,2,2),(4,3,3),(2,7,6),(6,1,2),(3,4,5),(2,5,10),(4,2,4),(5,1,3)]:
        y=a*x0+b
        add("application","image-affine", f"Soit $ f(x) = {a}x + {b} $. Calculer $ f({x0}) $.",
            [f"$ f({x0}) = {a}\\times {x0} + {b} = {y} $."], f"$ f({x0}) = {y} $")
    _i=1
    while len(E)<50:
        x0=_i; y=x0*x0+1
        add("application","image", f"$ f(x)=x^2+1 $, calculer $ f({x0}) $.", [f"$ = {y} $."], f"$ {y} $")
        _i+=1
    return _fin(E)

def g1_probabilites_variables_aleatoires():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    dists=[([0,1,2],[Fraction(1,2),Fraction(1,3),Fraction(1,6)]),
           ([1,2,3],[Fraction(1,2),Fraction(1,4),Fraction(1,4)]),
           ([0,10,20],[Fraction(1,2),Fraction(1,4),Fraction(1,4)]),
           ([2,4,6],[Fraction(1,3),Fraction(1,3),Fraction(1,3)]),
           ([0,5],[Fraction(2,3),Fraction(1,3)]),
           ([1,3,5],[Fraction(1,6),Fraction(1,2),Fraction(1,3)]),
           ([10,20,30],[Fraction(1,5),Fraction(2,5),Fraction(2,5)]),
           ([0,1],[Fraction(3,4),Fraction(1,4)])]
    for (vals,ps) in dists:
        Ex=sum(Fraction(v)*p for v,p in zip(vals,ps))
        prod=" + ".join(f"{v}\\times {frac_latex(p)}" for v,p in zip(vals,ps))
        vs=', '.join(map(str,vals)); pr=', '.join(frac_latex(p) for p in ps)
        add("application","esperance", f"X prend les valeurs {vs} avec les probabilites respectives ${pr}$. Calculer $ E(X) $.",
            [f"$ E(X) = {prod} = {frac_latex(Ex)} $."], f"$ E(X) = {frac_latex(Ex)} $")
    for (n,p) in [(10,Fraction(1,2)),(20,Fraction(1,4)),(12,Fraction(1,3)),(8,Fraction(1,2)),(15,Fraction(1,5)),(6,Fraction(1,3)),(30,Fraction(1,6)),(24,Fraction(1,4)),(9,Fraction(2,3)),(50,Fraction(1,5))]:
        Ex=n*p
        add("intermediaire","esperance-binomiale", f"$ X $ suit une loi binomiale $ B({n};{frac_latex(p)}) $. Esperance ?",
            [f"$ E(X) = n\\times p = {n}\\times {frac_latex(p)} = {frac_latex(Ex)} $."], f"$ {frac_latex(Ex)} $")
    _i=2
    while len(E)<50:
        n=_i; Ex=Fraction(n,2)
        add("application","esperance-binomiale", f"$ B({n};\\tfrac{{1}}{{2}}) $ : esperance ?", [f"$ = {frac_latex(Ex)} $."], f"$ {frac_latex(Ex)} $")
        _i+=1
    return _fin(E)

def g1_statistiques_deux_variables():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    series=[[4,7,9,12,8],[10,15,12,18,20],[3,5,8,9,10],[6,6,9,12,7],[11,14,9,16,10],
            [2,4,6,8,10],[13,15,17,11,19],[5,8,10,14,8],[7,9,12,15,17],[20,22,18,24,16],[1,3,5,7,9],[8,10,12,14,16]]
    for s in series:
        m=sum(s)/len(s)
        add("application","moyenne", f"Moyenne de la serie {s} ?",
            [f"$ \\overline{{x}} = \\dfrac{{{sum(s)}}}{{{len(s)}}} = {fr(m)} $."], f"$ {fr(m)} $")
    for s in series[:14]:
        et=max(s)-min(s)
        add("application","etendue", f"Etendue de la serie {s} ?", [f"$ {max(s)} - {min(s)} = {et} $."], f"$ {et} $")
    _i=1
    while len(E)<50:
        s=[_i,_i+2,_i+4]; m=sum(s)/3
        add("application","moyenne", f"Moyenne de {s} ?", [f"$ = {fr(m)} $."], f"$ {fr(m)} $")
        _i+=1
    return _fin(E)

def g1_suites_numeriques():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (u0,r,n) in [(2,3,5),(5,4,4),(1,2,10),(10,-2,6),(0,5,7),(3,3,8),(7,2,5),(4,6,3),(1,10,9),(20,-3,5),(2,7,4),(6,1,12)]:
        un=u0+n*r
        add("application","suite-arithmetique", f"Suite arithmetique : $ u_0 = {u0} $, raison $ r = {r} $. Calculer $ u_{{{n}}} $.",
            [f"$ u_n = u_0 + n\\times r = {u0} + {n}\\times {r} = {un} $."], f"$ u_{{{n}}} = {un} $")
    for (u0,q,n) in [(1,2,4),(3,2,3),(1,3,3),(5,2,3),(2,3,2),(1,2,6),(4,2,2),(1,5,2),(2,2,5),(3,3,2)]:
        un=u0*q**n
        add("intermediaire","suite-geometrique", f"Suite geometrique : $ u_0 = {u0} $, raison $ q = {q} $. Calculer $ u_{{{n}}} $.",
            [f"$ u_n = u_0\\times q^n = {u0}\\times {q}^{n} = {un} $."], f"$ u_{{{n}}} = {un} $")
    _i=1
    while len(E)<50:
        u0,r,n=_i,2,3; un=u0+n*r
        add("application","suite-arithmetique", f"$ u_0={u0} $, $ r=2 $ : $ u_3 $ ?", [f"$ = {un} $."], f"$ {un} $")
        _i+=1
    return _fin(E)

# ================= PREMIERE PHYSIQUE =================
def g1p_energie_electriques():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (U,I) in [(230,2),(12,3),(6,2),(24,5),(230,1),(9,3),(48,2),(230,4),(5,2),(15,3),(230,10),(20,4)]:
        P=U*I
        add("application","puissance", f"Un appareil sous {U} V est traverse par {I} A. Puissance ?",
            [f"$ P = U\\times I = {U}\\times {I} = {P} $ W."], f"$ {P} $ W")
    for (P,t) in [(60,2),(100,3),(1500,1),(2000,4),(40,5),(1200,2),(500,6),(75,8),(2000,3),(3000,2)]:
        En=P*t
        add("application","energie", f"Un appareil de {P} W fonctionne {t} h. Energie (en Wh) ?",
            [f"$ E = P\\times t = {P}\\times {t} = {En} $ Wh."], f"$ {En} $ Wh")
    _i=1
    while len(E)<50:
        U,I=12*_i,2; P=U*I
        add("application","puissance", f"$ U={U} $ V, $ I=2 $ A : puissance ?", [f"$ = {P} $ W."], f"$ {P} $ W")
        _i+=1
    return _fin(E)

def g1p_energie_mecaniques():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (m,v) in [(2,3),(4,5),(1,10),(6,2),(10,4),(2,6),(8,5),(3,4),(5,2),(2,10),(12,3),(1,8)]:
        Ec=Fraction(1,2)*m*v*v
        add("application","energie-cinetique", f"Energie cinetique d'un objet de masse {m} kg a {v} m/s ?",
            [f"$ E_c = \\dfrac{{1}}{{2}}mv^2 = \\dfrac{{1}}{{2}}\\times {m}\\times {v}^2 = {frac_latex(Ec)} $ J."], f"$ {frac_latex(Ec)} $ J")
    for (m,h) in [(2,3),(5,4),(10,2),(3,6),(8,5),(1,10),(6,3),(4,7),(20,2),(12,5)]:
        Ep=m*10*h
        add("application","energie-potentielle", f"Energie potentielle de pesanteur : masse {m} kg, hauteur {h} m (g = 10). ?",
            [f"$ E_p = m g h = {m}\\times 10\\times {h} = {Ep} $ J."], f"$ {Ep} $ J")
    _i=1
    while len(E)<50:
        m,v=2,_i; Ec=Fraction(1,2)*m*v*v
        add("application","energie-cinetique", f"$ m=2 $ kg, $ v={v} $ m/s : $ E_c $ ?", [f"$ = {frac_latex(Ec)} $ J."], f"$ {frac_latex(Ec)} $ J")
        _i+=1
    return _fin(E)

def g1p_mouvement_interactions():
    return g2p_mouvement_interactions()

def g1p_ondes_signaux():
    return g2p_ondes_signaux()

def g1p_transformations_matiere():
    return g2p_modelisation_microscopique()

# ================= TERMINALE (techno) MATHS =================
def gT_logarithme_decimal():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for k in [0,1,2,3,4,5,6,-1,-2,-3,7,8]:
        val = "1" if k==0 else ("10" if k==1 else (f"10^{{{k}}}"))
        add("application","log-puissance", f"Calculer $ \\log(10^{{{k}}}) $.",
            [f"$ \\log(10^{{{k}}}) = {k} $."], f"$ {k} $")
    vals=[(1,0),(10,1),(100,2),(1000,3),(10000,4),(100000,5),(1000000,6),(0.1,-1),(0.01,-2),(0.001,-3)]
    for (x,l) in vals:
        xs = fr(x,3) if x<1 else str(int(x))
        add("intermediaire","log-nombre", f"Calculer $ \\log({xs}) $.",
            [f"$ {xs} = 10^{{{l}}} $ donc $ \\log({xs}) = {l} $."], f"$ {l} $")
    _i=1
    while len(E)<50:
        add("application","log-puissance", f"$ \\log(10^{{{_i}}}) $ ?", [f"$ = {_i} $."], f"$ {_i} $")
        _i+=1
    return _fin(E)

def gT_fonctions_exponentielles():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (a,b) in [(2,3),(1,4),(5,2),(3,3),(2,6),(4,1),(0,5),(2,7),(6,2),(1,8),(3,4),(2,2)]:
        add("application","produit-exp", f"Simplifier $ e^{{{a}}}\\times e^{{{b}}} $.",
            [f"$ e^{{{a}}}\\times e^{{{b}}} = e^{{{a}+{b}}} = e^{{{a+b}}} $."], f"$ e^{{{a+b}}} $")
    for (a,b) in [(5,2),(7,3),(4,1),(9,4),(6,2),(8,5),(3,1),(10,6),(5,5),(12,3)]:
        add("intermediaire","quotient-exp", f"Simplifier $ \\dfrac{{e^{{{a}}}}}{{e^{{{b}}}}} $.",
            [f"$ = e^{{{a}-{b}}} = e^{{{a-b}}} $."], f"$ e^{{{a-b}}} $")
    for v in [0,0,0,0]:
        add("application","exp-zero", "Que vaut $ e^0 $ ?", [f"$ e^0 = 1 $."], f"$ 1 $")
    for a in [5,3,7,2,10,4]:
        add("application","exp-ln", f"Simplifier $ e^{{\\ln({a})}} $.", [f"$ e^{{\\ln({a})}} = {a} $."], f"$ {a} $")
    _i=1
    while len(E)<50:
        add("application","produit-exp", f"$ e^{{{_i}}}\\times e^2 $ ?", [f"$ = e^{{{_i+2}}} $."], f"$ e^{{{_i+2}}} $")
        _i+=1
    return _fin(E)

def gT_suites_arithmetiques_geometriques():
    return g1_suites_numeriques()

def gT_variables_aleatoires_binomiale():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (n,p) in [(10,Fraction(1,2)),(20,Fraction(1,4)),(12,Fraction(1,3)),(8,Fraction(1,2)),(15,Fraction(1,5)),(6,Fraction(1,3)),(30,Fraction(1,6)),(24,Fraction(1,4)),(9,Fraction(1,3)),(50,Fraction(1,5)),(16,Fraction(1,2)),(21,Fraction(1,3))]:
        Ex=n*p
        add("application","esperance", f"$ X $ suit $ B({n};{frac_latex(p)}) $. Calculer $ E(X) = np $.",
            [f"$ E(X) = {n}\\times {frac_latex(p)} = {frac_latex(Ex)} $."], f"$ {frac_latex(Ex)} $")
    for (n,p) in [(10,Fraction(1,2)),(20,Fraction(1,4)),(12,Fraction(1,3)),(8,Fraction(1,4)),(6,Fraction(1,3)),(16,Fraction(1,2)),(9,Fraction(1,3)),(15,Fraction(1,5)),(24,Fraction(1,4)),(30,Fraction(1,6))]:
        V=n*p*(1-p)
        add("intermediaire","variance", f"$ X $ suit $ B({n};{frac_latex(p)}) $. Calculer $ V(X) = np(1-p) $.",
            [f"$ V(X) = {n}\\times {frac_latex(p)}\\times {frac_latex(1-p)} = {frac_latex(V)} $."], f"$ {frac_latex(V)} $")
    _i=2
    while len(E)<50:
        n=_i; Ex=Fraction(n,2)
        add("application","esperance", f"$ B({n};\\tfrac{{1}}{{2}}) $ : $ E(X) $ ?", [f"$ = {frac_latex(Ex)} $."], f"$ {frac_latex(Ex)} $")
        _i+=1
    return _fin(E)

def gT_probabilites_conditionnelles():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (inter,pb) in [((1,4),(1,2)),((1,6),(1,3)),((1,10),(2,5)),((3,10),(3,5)),((1,8),(1,4)),
                       ((2,9),(1,3)),((1,5),(1,2)),((3,8),(3,4)),((1,12),(1,3)),((5,12),(5,6)),
                       ((1,4),(2,3)),((1,3),(1,2))]:
        pi=Fraction(*inter); pB=Fraction(*pb); pcond=pi/pB
        add("application","conditionnelle", f"$ P(A\\cap B) = {frac_latex(pi)} $ et $ P(B) = {frac_latex(pB)} $. Calculer $ P_B(A) $.",
            [f"$ P_B(A) = \\dfrac{{P(A\\cap B)}}{{P(B)}} = {frac_latex(pcond)} $."], f"$ {frac_latex(pcond)} $")
    for (a,b,ab) in [(1,2,1,4) if False else (1,2,4),(1,3,2,9) if False else (2,9,3),(3,4,3,8) if False else (3,8,4)]:
        pass
    _i=2
    while len(E)<50:
        pi=Fraction(1,2*_i); pB=Fraction(1,_i); pc=pi/pB
        add("application","conditionnelle", f"$ P(A\\cap B)={frac_latex(pi)} $, $ P(B)={frac_latex(pB)} $ : $ P_B(A) $ ?", [f"$ = {frac_latex(pc)} $."], f"$ {frac_latex(pc)} $")
        _i+=1
    return _fin(E)

def gT_statistiques_deux_variables():
    return g1_statistiques_deux_variables()

def gT_fonction_inverse():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for x in [2,3,4,5,10,8,20,25,6,50,100,7]:
        add("application","image", f"Soit $ f(x) = \\dfrac{{1}}{{x}} $. Calculer $ f({x}) $.",
            [f"$ f({x}) = \\dfrac{{1}}{{{x}}} $."], f"$ \\dfrac{{1}}{{{x}}} $")
    for x in [2,3,4,5,1,6,10,7,8,9]:
        add("intermediaire","comparaison", f"Comparer $ \\dfrac{{1}}{{{x}}} $ et $ \\dfrac{{1}}{{{x+1}}} $.",
            [f"Sur $ ]0;+\\infty[ $, la fonction inverse decroit, donc $ \\dfrac{{1}}{{{x}}} > \\dfrac{{1}}{{{x+1}}} $."], f"$ \\dfrac{{1}}{{{x}}} > \\dfrac{{1}}{{{x+1}}} $")
    _i=2
    while len(E)<50:
        add("application","image", f"$ f(x)=\\dfrac{{1}}{{x}} $, $ f({_i}) $ ?", [f"$ = \\dfrac{{1}}{{{_i}}} $."], f"$ \\dfrac{{1}}{{{_i}}} $")
        _i+=1
    return _fin(E)

def gT_algorithmique_programmation():
    return g6_pensee_informatique()

def gT_logique_ensembles():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (A,B,I) in [(10,8,3),(12,15,5),(20,10,4),(7,9,2),(30,25,10),(6,8,1),(14,11,6),(18,12,7),(9,13,4),(22,16,8),(11,7,3),(25,20,12)]:
        U=A+B-I
        add("application","cardinal-union", f"$ |A| = {A} $, $ |B| = {B} $, $ |A\\cap B| = {I} $. Calculer $ |A\\cup B| $.",
            [f"$ |A\\cup B| = |A| + |B| - |A\\cap B| = {A} + {B} - {I} = {U} $."], f"$ {U} $")
    for (A,B,U) in [(10,8,15),(12,9,18),(20,14,30),(7,6,11),(15,10,20),(9,8,14),(25,18,35),(6,5,9)]:
        I=A+B-U
        add("intermediaire","cardinal-inter", f"$ |A|={A} $, $ |B|={B} $, $ |A\\cup B|={U} $. Calculer $ |A\\cap B| $.",
            [f"$ |A\\cap B| = {A}+{B}-{U} = {I} $."], f"$ {I} $")
    _i=1
    while len(E)<50:
        A,B,I=10+_i,8,2
        add("application","cardinal-union", f"$ |A|={A} $, $ |B|=8 $, $ |A\\cap B|=2 $ : $ |A\\cup B| $ ?", [f"$ = {A+8-2} $."], f"$ {A+8-2} $")
        _i+=1
    return _fin(E)

def gT_activites_geometriques_std2a():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (L,l) in [(5,3),(6,4),(8,2),(7,5),(10,4),(9,6),(12,3),(4,4),(15,5),(11,7),(20,10),(6,6)]:
        add("application","aire-rectangle", f"Aire d'un rectangle {L} cm x {l} cm ?", [f"$ {L}\\times {l} = {L*l} $ cm²."], f"$ {L*l} $ cm²")
    for c in [3,4,5,6,7,8,2,10,9,12]:
        add("application","aire-carre", f"Aire d'un carre de cote {c} cm ?", [f"$ {c}^2 = {c*c} $ cm²."], f"$ {c*c} $ cm²")
    for (b,h) in [(6,4),(8,3),(10,5),(12,6),(5,4),(7,2),(9,6),(14,4)]:
        A=Fraction(b*h,2)
        add("intermediaire","aire-triangle", f"Aire d'un triangle de base {b} cm et hauteur {h} cm ?",
            [f"$ A = \\dfrac{{b\\times h}}{{2}} = \\dfrac{{{b}\\times {h}}}{{2}} = {frac_latex(A)} $ cm²."], f"$ {frac_latex(A)} $ cm²")
    _i=2
    while len(E)<50:
        c=_i
        add("application","aire-carre", f"Aire d'un carre de cote {c} cm ?", [f"$ = {c*c} $ cm²."], f"$ {c*c} $ cm²")
        _i+=1
    return _fin(E)

# ================= TERMINALE PHYSIQUE (calculables) =================
def gTp_acide_base_ph():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for pH in [1,2,3,4,5,6,7,8,9,10,11,12]:
        add("application","ph-concentration", f"Une solution a une concentration $ [H_3O^+] = 10^{{-{pH}}} $ mol/L. Calculer le pH.",
            [f"$ pH = -\\log[H_3O^+] = -\\log(10^{{-{pH}}}) = {pH} $."], f"$ pH = {pH} $")
    for pH in [1,2,3,4,5,6,2,3,4,5]:
        add("intermediaire","concentration-ph", f"Une solution a un pH de {pH}. Concentration $ [H_3O^+] $ ?",
            [f"$ [H_3O^+] = 10^{{-pH}} = 10^{{-{pH}}} $ mol/L."], f"$ 10^{{-{pH}}} $ mol/L")
    _i=1
    while len(E)<50:
        pH=(_i%13)+1
        add("application","ph-concentration", f"$ [H_3O^+]=10^{{-{pH}}} $ mol/L : pH ?", [f"$ = {pH} $."], f"$ {pH} $")
        _i+=1
    return _fin(E)

def gTp_premier_principe_thermique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    c=4180
    for (m,dT) in [(1,10),(2,5),(0.5,20),(1,50),(3,10),(2,20),(0.5,40),(1,30),(4,5),(2,15),(1,100),(0.5,10)]:
        Q=m*c*dT
        add("application","chaleur", f"Chaleur pour chauffer {fr(m,1)} kg d'eau de {dT} °C (c = 4180 J/(kg.°C)) ?",
            [f"$ Q = m c \\Delta T = {fr(m,1)}\\times 4180\\times {dT} = {fr(Q,0)} $ J."], f"$ {fr(Q,0)} $ J")
    _i=1
    while len(E)<50:
        m,dT=1,_i*5; Q=m*c*dT
        add("application","chaleur", f"1 kg d'eau, $ \\Delta T = {dT} $ °C : chaleur ?", [f"$ = {fr(Q,0)} $ J."], f"$ {fr(Q,0)} $ J")
        _i+=1
    return _fin(E)

def gTp_dipole_rc():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (R,C) in [(2,3),(1,10),(5,2),(4,5),(10,1),(3,4),(2,20),(6,2),(1,47),(8,5),(2,10),(5,6)]:
        tau=R*C
        add("application","constante-temps", f"Circuit RC : $ R = {R} $ k\\Omega, $ C = {C} $ \\mu F. Constante de temps $ \\tau = RC $ (en ms) ?",
            [f"$ \\tau = R\\times C = {R}\\times {C} = {tau} $ ms."], f"$ {tau} $ ms")
    _i=1
    while len(E)<50:
        R,C=_i,3; tau=R*C
        add("application","constante-temps", f"$ R={R} $ k\\Omega, $ C=3 $ \\mu F : $ \\tau $ ?", [f"$ = {tau} $ ms."], f"$ {tau} $ ms")
        _i+=1
    return _fin(E)

def gTp_decrire_mouvement():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (d,t) in [(100,5),(120,4),(90,3),(200,8),(60,2),(150,3),(240,6),(80,4),(45,3),(300,5),(70,2),(180,9)]:
        v=Fraction(d,t)
        add("application","vitesse", f"Un mobile parcourt {d} m en {t} s. Vitesse moyenne ?",
            [f"$ v = \\dfrac{{{d}}}{{{t}}} = {frac_latex(v)} $ m/s."], f"$ {frac_latex(v)} $ m/s")
    for (dv,dt) in [(20,4),(30,5),(12,3),(40,8),(15,3),(50,10),(18,6),(24,4),(9,3),(60,12)]:
        a=Fraction(dv,dt)
        add("intermediaire","acceleration", f"La vitesse varie de {dv} m/s en {dt} s. Acceleration moyenne ?",
            [f"$ a = \\dfrac{{\\Delta v}}{{\\Delta t}} = \\dfrac{{{dv}}}{{{dt}}} = {frac_latex(a)} $ m/s²."], f"$ {frac_latex(a)} $ m/s²")
    _i=1
    while len(E)<50:
        d,t=50*_i,5; v=Fraction(d,t)
        add("application","vitesse", f"{d} m en {t} s : vitesse ?", [f"$ = {frac_latex(v)} $ m/s."], f"$ {frac_latex(v)} $ m/s")
        _i+=1
    return _fin(E)

def gTp_titrages():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (cA,VA,VB) in [(1,10,5),(2,15,10),(1,20,10),(5,4,10),(2,25,5),(1,30,15),(3,10,6),(4,5,10),(2,12,8),(1,50,25),(5,6,15),(2,20,10)]:
        cB=Fraction(cA*VA,VB)
        add("application","titrage", f"A l'equivalence : $ c_A V_A = c_B V_B $ avec $ c_A = {cA} $ mol/L, $ V_A = {VA} $ mL, $ V_B = {VB} $ mL. Calculer $ c_B $.",
            [f"$ c_B = \\dfrac{{c_A V_A}}{{V_B}} = \\dfrac{{{cA}\\times {VA}}}{{{VB}}} = {frac_latex(cB)} $ mol/L."], f"$ {frac_latex(cB)} $ mol/L")
    _i=1
    while len(E)<50:
        cA,VA,VB=1,10*_i,10; cB=Fraction(cA*VA,VB)
        add("application","titrage", f"$ c_A=1 $, $ V_A={10*_i} $, $ V_B=10 $ : $ c_B $ ?", [f"$ = {frac_latex(cB)} $ mol/L."], f"$ {frac_latex(cB)} $ mol/L")
        _i+=1
    return _fin(E)

def gTp_transformations_nucleaires():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    # desintegration alpha : A_Z X -> (A-4)_(Z-2) Y + 4_2 He
    alpha=[(238,92,"U"),(226,88,"Ra"),(210,84,"Po"),(222,86,"Rn"),(234,90,"Th"),(214,84,"Po")]
    for (A,Z,X) in alpha:
        add("application","alpha", f"Desintegration alpha de $ ^{{{A}}}_{{{Z}}}\\mathrm{{{X}}} $. Nombre de masse A du noyau fils ?",
            [f"Emission d'un noyau $ ^4_2\\mathrm{{He}} $ : $ A' = {A} - 4 = {A-4} $."], f"$ {A-4} $")
        add("application","alpha-z", f"Desintegration alpha de $ ^{{{A}}}_{{{Z}}}\\mathrm{{{X}}} $. Numero atomique Z du noyau fils ?",
            [f"$ Z' = {Z} - 2 = {Z-2} $."], f"$ {Z-2} $")
    # desintegration beta- : Z -> Z+1, A inchange
    beta=[(14,6,"C"),(60,27,"Co"),(90,38,"Sr"),(131,53,"I"),(3,1,"H"),(40,19,"K")]
    for (A,Z,X) in beta:
        add("intermediaire","beta", f"Desintegration beta moins de $ ^{{{A}}}_{{{Z}}}\\mathrm{{{X}}} $. Numero atomique Z du noyau fils ?",
            [f"En beta moins : $ Z' = {Z} + 1 = {Z+1} $ (A inchange)."], f"$ {Z+1} $")
    _i=0
    while len(E)<50:
        A,Z,X=alpha[_i%len(alpha)]
        add("application","alpha", f"Alpha de $ ^{{{A}}}_{{{Z}}}\\mathrm{{{X}}} $ : A du fils ?", [f"$ = {A-4} $."], f"$ {A-4} $")
        _i+=1
    return _fin(E)

# ================= PRIMAIRE / COLLEGE : geometrie, mesures, donnees =================
def gp_solides(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    sol=[("un cube",6,12,8),("un pave droit",6,12,8),("une pyramide a base carree",5,8,5),
         ("un prisme droit a base triangulaire",5,9,6),("un tetraedre",4,6,4),
         ("une pyramide a base triangulaire",4,6,4)]
    sol=_rot(sol,off)
    props=[("faces",1),("aretes",2),("sommets",3)]
    i=0
    while len(E)<50:
        obj,f,a,s = sol[i%len(sol)]; quoi,idx=props[i%3]
        val = f if idx==1 else (a if idx==2 else s)
        add("application","denombrer", f"Combien de {quoi} possede {obj} ?",
            [f"{obj.capitalize()} possede ${val}$ {quoi}."], f"${val}$")
        i+=1
    return _fin(E)

def gp_figures(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    fig=[("un triangle",3),("un carre",4),("un rectangle",4),("un pentagone",5),("un hexagone",6),
         ("un quadrilatere",4),("un octogone",8),("un losange",4),("un parallelogramme",4),("un heptagone",7)]
    fig=_rot(fig,off)
    i=0
    while len(E)<50:
        obj,n = fig[i%len(fig)]
        if i%2==0:
            add("application","cotes", f"Combien de cotes possede {obj} ?", [f"{obj.capitalize()} a ${n}$ cotes."], f"${n}$")
        else:
            add("application","sommets", f"Combien de sommets possede {obj} ?", [f"Un polygone a autant de sommets que de cotes : ${n}$."], f"${n}$")
        i+=1
    return _fin(E)

def gp_symetrie(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    fig=[("un carre",4),("un rectangle",2),("un triangle equilateral",3),("un losange",2),
         ("un triangle isocele",1),("un hexagone regulier",6),("un triangle quelconque",0),
         ("un parallelogramme quelconque",0),("un pentagone regulier",5),("un cercle","une infinite de")]
    fig=_rot(fig,off)
    i=0
    while len(E)<50:
        obj,n = fig[i%len(fig)]
        if isinstance(n,int):
            add("application","axes-symetrie", f"Combien d'axes de symetrie possede {obj} ?",
                [f"{obj.capitalize()} possede ${n}$ axe(s) de symetrie."], f"${n}$")
        else:
            add("intermediaire","axes-symetrie", f"Combien d'axes de symetrie possede {obj} ?",
                [f"{obj.capitalize()} possede {n} axes de symetrie."], f"{n} axes")
        i+=1
    return _fin(E)

def gp_angles(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    mes=_rot([30,45,60,90,120,135,150,180,15,75,100,160],off)
    for a in mes:
        t = "droit" if a==90 else ("plat" if a==180 else ("aigu" if a<90 else "obtus"))
        add("application","nature-angle", f"Un angle mesure ${a}^\\circ$. Est-il aigu, droit, obtus ou plat ?",
            [f"Un angle de ${a}^\\circ$ est un angle {t}."], t)
    for a in _rot([30,45,60,20,75,15,80,50,35,10],off):
        add("intermediaire","complementaire", f"Quel est le complementaire d'un angle de ${a}^\\circ$ ?",
            [f"$ 90 - {a} = {90-a}^\\circ $."], f"${90-a}^\\circ$")
    for a in _rot([100,120,60,45,150,30,90,135,75,110],off):
        add("intermediaire","supplementaire", f"Quel est le supplementaire d'un angle de ${a}^\\circ$ ?",
            [f"$ 180 - {a} = {180-a}^\\circ $."], f"${180-a}^\\circ$")
    _i=0
    while len(E)<50:
        a,b=_rot([40,55,70,35,80,25],off)[_i%6], 60
        c=180-a-b
        add("application","somme-triangle", f"Deux angles d'un triangle valent ${a}^\\circ$ et ${b}^\\circ$. Le troisieme ?",
            [f"$ 180 - {a} - {b} = {c}^\\circ $."], f"${c}^\\circ$")
        _i+=1
    return _fin(E)

def gp_tableaux(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    data=[[12,8,15,5],[7,9,11,3,6],[20,14,18,22],[4,6,2,8,10],[13,7,9,16],[25,15,30,10],
          [3,5,8,4,6],[11,13,17,19],[6,6,9,12],[14,10,8,18],[5,7,3,9,11],[22,18,20,25]]
    data=_rot(data,off)
    for s in data:
        add("application","total", f"Ventes de la semaine : {', '.join(map(str,s))}. Total ?",
            [f"$ {'+'.join(map(str,s))} = {sum(s)} $."], f"${sum(s)}$")
    for s in data:
        add("application","maximum", f"Notes : {', '.join(map(str,s))}. Quelle est la plus grande ?",
            [f"La plus grande valeur est ${max(s)}$."], f"${max(s)}$")
    for s in data[:14]:
        add("intermediaire","ecart", f"Serie : {', '.join(map(str,s))}. Difference entre le plus grand et le plus petit ?",
            [f"$ {max(s)} - {min(s)} = {max(s)-min(s)} $."], f"${max(s)-min(s)}$")
    _i=2
    while len(E)<50:
        s=[_i,_i+3,_i+1,_i+5]
        add("application","total", f"Serie : {', '.join(map(str,s))}. Total ?", [f"$ = {sum(s)} $."], f"${sum(s)}$")
        _i+=1
    return _fin(E)

def gp_monnaie(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (n2,n1) in _rot([(3,4),(2,5),(4,2),(1,6),(5,1),(2,3),(3,2),(4,4),(1,8),(2,6),(5,2),(3,5)],off):
        tot=n2*2+n1*1
        add("application","somme", f"J'ai {n2} pieces de 2 euros et {n1} pieces de 1 euro. Combien en tout ?",
            [f"$ {n2}\\times 2 + {n1}\\times 1 = {tot} $ euros."], f"${tot}$ euros")
    for e in _rot([2,5,3,10,4,7,1,8,6,9,12,15],off):
        add("application","conversion", f"Combien de centimes valent {e} euros ?",
            [f"$ {e} \\times 100 = {e*100} $ centimes."], f"${e*100}$ centimes")
    for (paye,prix) in _rot([(10,7),(20,13),(5,3),(50,42),(10,6),(20,15),(100,88),(5,2)],off):
        add("intermediaire","rendu", f"Je paie un article a {prix} euros avec un billet de {paye} euros. Combien me rend-on ?",
            [f"$ {paye} - {prix} = {paye-prix} $ euros."], f"${paye-prix}$ euros")
    _i=0
    while len(E)<50:
        e=_i+2
        add("application","conversion", f"{e} euros = combien de centimes ?", [f"$ = {e*100} $ centimes."], f"${e*100}$ centimes")
        _i+=1
    return _fin(E)

def gp_longueurs_masses(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for m in _rot([3,5,2,7,4,10,6,8,1,9,12,15],off):
        add("application","conversion", f"Convertir {m} m en cm.", [f"$ {m} \\times 100 = {m*100} $ cm."], f"${m*100}$ cm")
    for km in _rot([2,3,5,4,10,7,6,1,8,9],off):
        add("application","conversion", f"Convertir {km} km en m.", [f"$ {km} \\times 1000 = {km*1000} $ m."], f"${km*1000}$ m")
    for kg in _rot([2,3,4,5,1,6,10,7,8,9],off):
        add("application","conversion", f"Convertir {kg} kg en g.", [f"$ {kg} \\times 1000 = {kg*1000} $ g."], f"${kg*1000}$ g")
    for (a,b) in _rot([(150,1),(2,150),(500,1),(1,999),(250,3)],off):
        add("intermediaire","comparer", f"Quelle est la plus grande longueur : {a} cm ou {b} m ?",
            [f"{b} m $= {b*100}$ cm. La plus grande est {a if a> b*100 else str(b)+' m'}." ], f"{a if a>b*100 else str(b)+' m'}")
    _i=0
    while len(E)<50:
        m=_i+2
        add("application","conversion", f"{m} m = combien de cm ?", [f"$ = {m*100} $ cm."], f"${m*100}$ cm")
        _i+=1
    return _fin(E)

def gp_temps(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for h in _rot([1,2,3,4,5,6,1,2,3,10,12,8],off):
        add("application","conversion", f"Combien de minutes dans {h} h ?", [f"$ {h} \\times 60 = {h*60} $ min."], f"${h*60}$ min")
    seg=[((8,15),(9,45)),((10,0),(11,30)),((14,20),(15,50)),((7,45),(8,15)),((9,30),(12,0)),
         ((13,10),(14,40)),((16,0),(18,30)),((11,15),(12,45)),((6,50),(7,20)),((17,25),(19,25)),
         ((8,0),(10,15)),((15,30),(16,45))]
    for ((h1,m1),(h2,m2)) in _rot(seg,off):
        d=(h2*60+m2)-(h1*60+m1); hh,mm=d//60,d%60
        duree = (f"{hh} h {mm:02d} min" if mm else f"{hh} h")
        add("intermediaire","duree", f"Duree de {h1}h{m1:02d} a {h2}h{m2:02d} ?",
            [f"$ ({h2}\\times 60 + {m2}) - ({h1}\\times 60 + {m1}) = {d} $ min, soit {duree}."], duree)
    _i=0
    while len(E)<50:
        h=_i+1
        add("application","conversion", f"{h} h = combien de minutes ?", [f"$ = {h*60} $ min."], f"${h*60}$ min")
        _i+=1
    return _fin(E)

def gp_dizaines(off=0):
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    nums=_rot([47,63,28,95,14,72,36,89,51,60,18,74,25,93,42,67],off)
    for n in nums:
        dz,un=n//10,n%10
        add("application","decomposition", f"Dans {n}, combien y a-t-il de dizaines et d'unites ?",
            [f"${n} = {dz}$ dizaines et ${un}$ unites."], f"{dz} dizaines et {un} unites")
    for n in nums:
        dz,un=n//10,n%10
        add("application","ecriture", f"Ecrire {n} sous la forme (dizaines x 10) + unites.",
            [f"$ {n} = {dz}\\times 10 + {un} $."], f"$ {dz}\\times 10 + {un} $")
    _i=0
    while len(E)<50:
        n=_rot([13,26,39,52,65,78,81,94,17,20],off)[_i%10]
        add("application","decomposition", f"Combien de dizaines dans {n} ?", [f"${n//10}$ dizaines."], f"${n//10}$")
        _i+=1
    return _fin(E)

# ================= 6e (complements) =================
def g6_probabilites():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    de=[("un 6",1),("un nombre pair",3),("un multiple de 3",2),("un 1 ou un 2",2),("un nombre impair",3),("au moins 5",2)]
    for (evt,f) in de:
        fr_=Fraction(f,6)
        add("application","proba-de", f"On lance un de a 6 faces. Probabilite d'obtenir {evt} ?",
            [f"$ P = \\dfrac{{{f}}}{{6}} = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
    urnes=[(3,10),(2,5),(4,10),(1,4),(6,10),(5,8),(3,6),(7,10),(2,9),(9,12),(1,3),(4,5),(5,6),(2,7)]
    for (f,t) in urnes:
        fr_=Fraction(f,t)
        add("application","proba-urne", f"Un sac contient {t} billes dont {f} vertes. Probabilite de tirer une verte ?",
            [f"$ P = \\dfrac{{{f}}}{{{t}}} = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
    for (evt,f) in [("un roi",4),("un coeur",8),("un as",4),("une figure",12),("un pique",8),("un rouge",16)]:
        fr_=Fraction(f,32)
        add("intermediaire","proba-cartes", f"Jeu de 32 cartes. Probabilite de tirer {evt} ?",
            [f"$ P = \\dfrac{{{f}}}{{32}} = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
    _i=1
    while len(E)<50:
        t=_i+3; fr_=Fraction(1,t)
        add("application","proba-urne", f"Un sac a {t} billes dont 1 rouge. Probabilite de tirer la rouge ?", [f"$ = {frac_latex(fr_)} $."], f"$ {frac_latex(fr_)} $")
        _i+=1
    return _fin(E)

def g6_gestion_donnees():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    data=[[4,7,9,10],[12,8,15,5],[6,6,9,11],[10,14,12,8],[3,5,8,4],[20,15,30,10,5],
          [7,9,12,16],[2,4,6,8],[13,15,11,17],[5,8,10,9],[11,7,9,13],[8,10,12,14]]
    for s in data:
        m=sum(s)/len(s)
        add("application","moyenne", f"Moyenne de : {', '.join(map(str,s))} ?",
            [f"$ \\dfrac{{{sum(s)}}}{{{len(s)}}} = {fr(m)} $."], f"$ {fr(m)} $")
    for s in data:
        add("application","total", f"Total de : {', '.join(map(str,s))} ?", [f"$ = {sum(s)} $."], f"$ {sum(s)} $")
    for s in data[:14]:
        add("application","maximum", f"Plus grande valeur de : {', '.join(map(str,s))} ?", [f"$ = {max(s)} $."], f"$ {max(s)} $")
    _i=2
    while len(E)<50:
        s=[_i,_i+2,_i+4,_i+6]
        add("application","total", f"Total de {', '.join(map(str,s))} ?", [f"$ = {sum(s)} $."], f"$ {sum(s)} $")
        _i+=1
    return _fin(E)

def g6_pensee_informatique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (x,a,b) in [(3,2,5),(4,3,1),(5,2,4),(2,6,3),(7,1,2),(6,2,3),(4,4,4),(8,2,1),(3,5,2),(9,1,3),(5,3,2),(2,7,4)]:
        add("application","programme", f"Programme : prendre {x}, multiplier par {a}, ajouter {b}. Resultat ?",
            [f"$ {x} \\times {a} + {b} = {x*a+b} $."], f"$ {x*a+b} $")
    for (u0,r) in [(1,2),(0,3),(2,5),(1,4),(3,2),(0,6),(2,3),(1,7),(4,2),(0,5),(3,4),(2,2)]:
        add("application","boucle", f"On part de {u0}, on ajoute {r} quatre fois. Valeur finale ?",
            [f"$ {u0} + 4\\times {r} = {u0+4*r} $."], f"$ {u0+4*r} $")
    for (x,a) in [(20,4),(30,5),(18,3),(24,6),(40,8),(15,3),(36,9),(50,10)]:
        add("intermediaire","programme", f"Programme : prendre {x}, diviser par {a}. Resultat ?",
            [f"$ {x} \\div {a} = {x//a} $."], f"$ {x//a} $")
    _i=1
    while len(E)<50:
        x=_i+2
        add("application","programme", f"Prendre {x}, multiplier par 3. Resultat ?", [f"$ = {x*3} $."], f"$ {x*3} $")
        _i+=1
    return _fin(E)

def g6_configurations_planes():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (L,l) in [(5,3),(6,4),(8,2),(7,5),(10,4),(9,6),(12,3),(4,4),(15,5),(11,7),(20,10),(6,6)]:
        add("application","perimetre-rectangle", f"Perimetre d'un rectangle de longueur {L} cm et largeur {l} cm ?",
            [f"$ P = 2\\times({L}+{l}) = 2\\times {L+l} = {2*(L+l)} $ cm."], f"$ {2*(L+l)} $ cm")
    for (L,l) in [(5,3),(6,4),(8,2),(7,5),(10,4),(9,6),(12,3),(4,4),(15,5),(11,7)]:
        add("application","aire-rectangle", f"Aire d'un rectangle de longueur {L} cm et largeur {l} cm ?",
            [f"$ A = {L}\\times {l} = {L*l} $ cm²."], f"$ {L*l} $ cm²")
    for (a,b) in [(60,70),(45,55),(30,90),(80,40),(50,60),(35,75),(90,45),(20,110),(65,65),(48,72),(40,40),(88,52)]:
        add("intermediaire","somme-triangle", f"Deux angles d'un triangle valent ${a}^\\circ$ et ${b}^\\circ$. Le troisieme ?",
            [f"$ 180 - {a} - {b} = {180-a-b}^\\circ $."], f"${180-a-b}^\\circ$")
    _i=3
    while len(E)<50:
        L,l=_i,_i+2
        add("application","aire-rectangle", f"Aire d'un rectangle {L} cm x {l} cm ?", [f"$ = {L*l} $ cm²."], f"$ {L*l} $ cm²")
        _i+=1
    return _fin(E)

# ================= 5e (complements maths) =================
def g5_calcul_litteral():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (k,a,b) in [(3,2,5),(4,1,3),(2,5,7),(5,3,2),(6,2,1),(3,4,6),(7,2,3),(2,8,5),(4,3,9),(5,2,4),(3,5,8),(6,1,7)]:
        add("application","distribution", f"Developper $ {k}({a}x + {b}) $.",
            [f"$ {k}({a}x + {b}) = {k*a}x + {k*b} $."], f"$ {k*a}x + {k*b} $")
    for (a,b,x0) in [(2,3,4),(3,1,5),(5,2,2),(4,3,3),(2,7,6),(6,1,2),(3,4,5),(2,5,10),(4,2,4),(5,1,3)]:
        add("application","substitution", f"Calculer $ {a}x + {b} $ pour $ x = {x0} $.",
            [f"$ {a}\\times {x0} + {b} = {a*x0+b} $."], f"$ {a*x0+b} $")
    for (a,b,c) in [(3,5,2),(4,2,7),(6,1,3),(2,8,4),(5,3,6),(7,2,1),(3,9,5),(4,4,8)]:
        add("intermediaire","reduire", f"Reduire $ {a}x + {b} + {c}x $.",
            [f"$ = {a+c}x + {b} $."], f"$ {a+c}x + {b} $")
    _i=2
    while len(E)<50:
        k=_i
        add("application","distribution", f"Developper $ {k}(x + {k+1}) $.", [f"$ = {k}x + {k*(k+1)} $."], f"$ {k}x + {k*(k+1)} $")
        _i+=1
    return _fin(E)

def g5_fonctions():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (k,x0) in [(3,5),(4,2),(2,9),(5,3),(6,4),(2,7),(3,8),(4,6),(5,5),(2,11),(7,3),(3,10)]:
        add("application","image-lineaire", f"Une fonction multiplie par {k}. Quelle est l'image de {x0} ?",
            [f"$ {k}\\times {x0} = {k*x0} $."], f"$ {k*x0} $")
    for (a,b,x0) in [(2,3,4),(3,1,5),(5,2,2),(4,3,3),(2,7,6),(6,1,2),(3,4,5),(2,5,10),(4,2,4),(5,1,3)]:
        add("intermediaire","image-affine", f"Programme de calcul : multiplier par {a} puis ajouter {b}. Image de {x0} ?",
            [f"$ {a}\\times {x0} + {b} = {a*x0+b} $."], f"$ {a*x0+b} $")
    for (k,y) in [(3,12),(4,20),(5,15),(2,14),(6,18),(7,28),(3,21),(4,24)]:
        x=Fraction(y,k)
        add("intermediaire","antecedent", f"Une fonction multiplie par {k}. Quel nombre a pour image {y} ?",
            [f"$ {y} \\div {k} = {frac_latex(x)} $."], f"$ {frac_latex(x)} $")
    _i=2
    while len(E)<50:
        k=_i
        add("application","image-lineaire", f"Multiplier par {k} : image de {k+2} ?", [f"$ = {k*(k+2)} $."], f"$ {k*(k+2)} $")
        _i+=1
    return _fin(E)

def g5_parallelogrammes():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (b,h) in [(5,3),(6,4),(8,2),(7,5),(10,4),(9,6),(12,3),(4,4),(15,5),(11,7),(20,6),(14,5)]:
        add("application","aire-parallelogramme", f"Aire d'un parallelogramme de base {b} cm et hauteur {h} cm ?",
            [f"$ A = b\\times h = {b}\\times {h} = {b*h} $ cm²."], f"$ {b*h} $ cm²")
    for (L,l) in [(5,3),(6,4),(8,2),(7,5),(10,4),(9,6),(12,3),(15,5),(11,7),(20,10)]:
        add("application","perimetre", f"Perimetre d'un parallelogramme de cotes {L} cm et {l} cm ?",
            [f"$ P = 2\\times({L}+{l}) = {2*(L+l)} $ cm."], f"$ {2*(L+l)} $ cm")
    for (a) in [60,70,45,110,80,120,55,100,65,95,40,135]:
        add("intermediaire","angles", f"Dans un parallelogramme, un angle vaut ${a}^\\circ$. Combien vaut l'angle consecutif ?",
            [f"Deux angles consecutifs sont supplementaires : $ 180 - {a} = {180-a}^\\circ $."], f"${180-a}^\\circ$")
    _i=3
    while len(E)<50:
        b,h=_i,_i+1
        add("application","aire-parallelogramme", f"Aire d'un parallelogramme base {b} cm, hauteur {h} cm ?", [f"$ = {b*h} $ cm²."], f"$ {b*h} $ cm²")
        _i+=1
    return _fin(E)

def g5_pensee_informatique():
    return g6_pensee_informatique()

def g5_probabilites():
    return g6_probabilites()

def g5_reperage():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    pts=[(3,5),(2,7),(4,1),(6,2),(0,3),(5,5),(1,8),(7,4),(2,2),(8,6),(3,9),(4,0),(9,3),(1,1)]
    for (x,y) in pts:
        add("application","abscisse", f"Le point A a pour coordonnees $ ({x};{y}) $. Quelle est son abscisse ?",
            [f"L'abscisse est la premiere coordonnee : ${x}$."], f"${x}$")
    for (x,y) in pts:
        add("application","ordonnee", f"Le point A a pour coordonnees $ ({x};{y}) $. Quelle est son ordonnee ?",
            [f"L'ordonnee est la seconde coordonnee : ${y}$."], f"${y}$")
    _i=0
    while len(E)<50:
        x,y=(_i%9)+1,(_i%6)+2
        add("application","lecture", f"Point B $ ({x};{y}) $ : donner (abscisse ; ordonnee).",
            [f"Abscisse ${x}$, ordonnee ${y}$."], f"$ ({x};{y}) $")
        _i+=1
    return _fin(E)

def g5_representation_espace():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (L,l,h) in [(2,3,4),(5,2,3),(4,4,2),(6,3,2),(5,5,2),(7,2,2),(8,3,1),(4,5,3),(6,2,5),(10,2,3),(3,3,5),(9,2,2)]:
        add("application","volume-pave", f"Volume d'un pave droit {L} x {l} x {h} (en cm) ?",
            [f"$ V = {L}\\times {l}\\times {h} = {L*l*h} $ cm³."], f"$ {L*l*h} $ cm³")
    for a in [2,3,4,5,6,7,8,10,9,1,11,12]:
        add("application","volume-cube", f"Volume d'un cube d'arete {a} cm ?",
            [f"$ V = {a}^3 = {a**3} $ cm³."], f"$ {a**3} $ cm³")
    faits=[("un cube","faces",6),("un cube","aretes",12),("un cube","sommets",8),
           ("un pave droit","faces",6),("un pave droit","aretes",12),("un pave droit","sommets",8)]
    i=0
    while len(E)<50:
        obj,quoi,nb=faits[i%len(faits)]
        add("intermediaire","denombrer", f"Combien de {quoi} a {obj} ?", [f"${nb}$ {quoi}."], f"${nb}$")
        i+=1
    return _fin(E)

def g5_transformations():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    pts=[(3,5),(2,7),(4,1),(6,2),(1,3),(5,5),(2,8),(7,4),(3,2),(8,6),(4,9),(5,1)]
    for (x,y) in pts:
        add("application","symetrie-abscisses", f"Symetrique de $ A({x};{y}) $ par rapport a l'axe des abscisses ?",
            [f"On change le signe de l'ordonnee : $ ({x};{-y}) $."], f"$ ({x};{-y}) $")
    for (x,y) in pts:
        add("application","symetrie-ordonnees", f"Symetrique de $ A({x};{y}) $ par rapport a l'axe des ordonnees ?",
            [f"On change le signe de l'abscisse : $ ({-x};{y}) $."], f"$ ({-x};{y}) $")
    for (x,y,dx,dy) in [(2,3,4,1),(1,5,2,3),(3,2,5,4),(0,0,6,2),(4,1,2,5),(2,2,3,3),(5,0,1,4),(1,6,4,2)]:
        add("intermediaire","translation", f"Image de $ A({x};{y}) $ par la translation qui ajoute $ ({dx};{dy}) $ ?",
            [f"$ ({x}+{dx} ; {y}+{dy}) = ({x+dx} ; {y+dy}) $."], f"$ ({x+dx} ; {y+dy}) $")
    _i=1
    while len(E)<50:
        x,y=_i,_i+2
        add("application","symetrie-abscisses", f"Symetrique de $ A({x};{y}) $ par rapport a l'axe des abscisses ?",
            [f"$ ({x};{-y}) $."], f"$ ({x};{-y}) $")
        _i+=1
    return _fin(E)

EXTRA = {
    ("cinquieme","operations"): g5_operations,
    ("cinquieme","nombres-relatifs"): g5_relatifs,
    ("cinquieme","fractions"): g5_fractions,
    ("cinquieme","puissances"): g5_puissances,
    ("cinquieme","statistiques"): g5_statistiques,
    ("cinquieme","triangles-angles"): g5_triangles_angles,
    ("cinquieme","proportionnalite"): g5_proportionnalite,
    ("cinquieme","mouvement-vitesse"): g5_mouvement_vitesse,
    ("cinquieme","proprietes-matiere"): g5_proprietes_matiere,
    ("quatrieme","calcul-litteral"): g4_calcul_litteral,
    ("quatrieme","operations-nombres-relatifs"): g4_operations_relatifs,
    ("quatrieme","probabilites"): g4_probabilites,
    ("quatrieme","triangles"): g4_triangles,
    ("quatrieme","reperage"): g4_reperage,
    ("quatrieme","representation-espace"): g4_representation_espace,
    ("quatrieme","pensee-informatique"): g4_pensee_informatique,
    ("seconde","calcul-numerique-algebrique"): g2_calcul_numerique_algebrique,
    ("seconde","equations-inequations"): g2_equations_inequations,
    ("seconde","fonctions-de-reference"): g2_fonctions_de_reference,
    ("seconde","notion-de-fonction"): g2_notion_de_fonction,
    ("seconde","statistiques"): g2_statistiques,
    ("seconde","probabilites"): g2_probabilites,
    ("seconde","arithmetique"): g2_arithmetique,
    ("seconde","vecteurs"): g2_vecteurs,
    ("seconde","droites-du-plan"): g2_droites_du_plan,
    # --- primaire : geometrie / mesures / donnees ---
    ("cp","dizaines-et-unites"): lambda: gp_dizaines(0),
    ("cp","formes-geometriques"): lambda: gp_figures(0),
    ("cp","le-temps-qui-passe"): lambda: gp_temps(0),
    ("cp","longueurs-et-masses"): lambda: gp_longueurs_masses(0),
    ("ce1","figures-planes"): lambda: gp_figures(1),
    ("ce1","mesures-et-monnaie"): lambda: gp_monnaie(0),
    ("ce1","solides"): lambda: gp_solides(0),
    ("ce1","symetrie-et-quadrillage"): lambda: gp_symetrie(0),
    ("ce2","angles-et-polygones"): lambda: gp_angles(0),
    ("ce2","solides-et-patrons"): lambda: gp_solides(1),
    ("ce2","symetrie-axiale"): lambda: gp_symetrie(1),
    ("ce2","tableaux-et-graphiques"): lambda: gp_tableaux(0),
    ("cm1","angles"): lambda: gp_angles(1),
    ("cm1","symetrie-axiale"): lambda: gp_symetrie(2),
    ("cm1","tableaux-et-graphiques"): lambda: gp_tableaux(1),
    ("cm2","angles-et-mesures"): lambda: gp_angles(2),
    ("cm2","graphiques-et-donnees"): lambda: gp_tableaux(2),
    ("cm2","solides-et-patrons"): lambda: gp_solides(2),
    ("cm2","symetrie-axiale"): lambda: gp_symetrie(3),
    # --- 6e ---
    ("sixieme","probabilites"): g6_probabilites,
    ("sixieme","gestion-donnees"): g6_gestion_donnees,
    ("sixieme","pensee-informatique"): g6_pensee_informatique,
    ("sixieme","configurations-planes"): g6_configurations_planes,
    # --- 5e (complements maths) ---
    ("cinquieme","calcul-litteral"): g5_calcul_litteral,
    ("cinquieme","fonctions"): g5_fonctions,
    ("cinquieme","parallelogrammes"): g5_parallelogrammes,
    ("cinquieme","pensee-informatique"): g5_pensee_informatique,
    ("cinquieme","probabilites"): g5_probabilites,
    ("cinquieme","reperage"): g5_reperage,
    ("cinquieme","representation-espace"): g5_representation_espace,
    ("cinquieme","transformations"): g5_transformations,
    # --- 2de physique ---
    ("seconde","description-matiere"): g2p_description_matiere,
    ("seconde","modelisation-microscopique"): g2p_modelisation_microscopique,
    ("seconde","mouvement-interactions"): g2p_mouvement_interactions,
    ("seconde","ondes-signaux"): g2p_ondes_signaux,
    ("seconde","transformations-matiere"): g2p_transformations_matiere,
    # --- premiere-techno maths ---
    ("premiere-techno","derivation"): g1_derivation,
    ("premiere-techno","fonctions-variable-reelle"): g1_fonctions_variable_reelle,
    ("premiere-techno","probabilites-variables-aleatoires"): g1_probabilites_variables_aleatoires,
    ("premiere-techno","statistiques-deux-variables"): g1_statistiques_deux_variables,
    ("premiere-techno","suites-numeriques"): g1_suites_numeriques,
    # --- premiere physique ---
    ("premiere","energie-phenomenes-electriques"): g1p_energie_electriques,
    ("premiere","energie-phenomenes-mecaniques"): g1p_energie_mecaniques,
    ("premiere","mouvement-interactions"): g1p_mouvement_interactions,
    ("premiere","ondes-signaux"): g1p_ondes_signaux,
    ("premiere","transformations-matiere"): g1p_transformations_matiere,
    # --- terminale-techno maths ---
    ("terminale-techno","logarithme-decimal"): gT_logarithme_decimal,
    ("terminale-techno","fonctions-exponentielles"): gT_fonctions_exponentielles,
    ("terminale-techno","suites-arithmetiques-geometriques"): gT_suites_arithmetiques_geometriques,
    ("terminale-techno","variables-aleatoires-binomiale"): gT_variables_aleatoires_binomiale,
    ("terminale-techno","probabilites-conditionnelles"): gT_probabilites_conditionnelles,
    ("terminale-techno","statistiques-deux-variables"): gT_statistiques_deux_variables,
    ("terminale-techno","fonction-inverse"): gT_fonction_inverse,
    ("terminale-techno","algorithmique-programmation"): gT_algorithmique_programmation,
    ("terminale-techno","logique-ensembles"): gT_logique_ensembles,
    ("terminale-techno","activites-geometriques-std2a"): gT_activites_geometriques_std2a,
    # --- terminale physique (calculables) ---
    ("terminale","acide-base-ph"): gTp_acide_base_ph,
    ("terminale","premier-principe-thermique"): gTp_premier_principe_thermique,
    ("terminale","dipole-rc"): gTp_dipole_rc,
    ("terminale","decrire-mouvement"): gTp_decrire_mouvement,
    ("terminale","titrages"): gTp_titrages,
    ("terminale","transformations-nucleaires"): gTp_transformations_nucleaires,
    # --- 4e maths (complements) ---
    ("quatrieme","fonctions"): g4_fonctions,
    ("quatrieme","parallelogrammes-translations"): g4_parallelogrammes_translations,
    ("quatrieme","racine-carree"): g4_racine_carree,
    ("quatrieme","transformations"): g4_transformations,
    # --- 4e physique ---
    ("quatrieme","mouvement-vitesse"): g4p_mouvement_vitesse,
    ("quatrieme","propagation-signal"): g4p_propagation_signal,
    ("quatrieme","interactions-forces"): g4p_interactions_forces,
    ("quatrieme","organisation-matiere"): g4p_organisation_matiere,
    ("quatrieme","transformation-conservation-masse"): g4p_transformation_conservation_masse,
    # --- 5e physique (complements) ---
    ("cinquieme","signaux-sonores-lumineux"): g5p_signaux_sonores_lumineux,
    ("cinquieme","transformation-chimique"): g5p_transformation_chimique,
    # --- 2de maths ---
    ("seconde","algorithmique"): g2_algorithmique,
    # --- terminale physique (complements) ---
    ("terminale","gaz-parfait"): gTp_gaz_parfait,
    ("terminale","lois-newton-champs"): gTp_lois_newton_champs,
    ("terminale","phenomenes-ondulatoires"): gTp_phenomenes_ondulatoires,
    ("terminale","ecoulement-fluide"): gTp_ecoulement_fluide,
    ("terminale","electrolyse"): gTp_electrolyse,
    ("terminale","lunette-photons"): gTp_lunette_photons,
}
