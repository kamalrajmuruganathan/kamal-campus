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
        add("application","constante-temps", f"Circuit RC : $ R = {R}\\ \\mathrm{{k\\Omega}} $, $ C = {C}\\ \\mu\\mathrm{{F}} $. Constante de temps $ \\tau = RC $ (en ms) ?",
            [f"$ \\tau = R\\times C = {R}\\times {C} = {tau} $ ms."], f"$ {tau} $ ms")
    _i=1
    while len(E)<50:
        R,C=_i,3; tau=R*C
        add("application","constante-temps", f"$ R={R}\\ \\mathrm{{k\\Omega}} $, $ C=3\\ \\mu\\mathrm{{F}} $ : $ \\tau $ ?", [f"$ = {tau} $ ms."], f"$ {tau} $ ms")
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


# ---------------- CHAPITRES QUALITATIFS (cours, reponses certaines) ----------------
# Aucune formule LaTeX : que du factuel non ambigu du programme officiel.
def _qual(vrais, faux, defs, nom):
    E = []
    for s, j in vrais:
        E.append(("application", nom, f"Vrai ou faux ? {s}", [j], "Vrai"))
    for s, c in faux:
        E.append(("intermediaire", nom, f"Vrai ou faux ? {s}", [c], "Faux"))
    for q, r, j in defs:
        E.append(("approfondissement", nom, q, [j], r))
    return _fin(E)

# ===== 5e : CORPS PURS ET MELANGES =====
def g5_corps_purs_melanges():
    vrais = [
        ("Un melange homogene est un melange dont on ne distingue pas les constituants a l'oeil nu.", "C'est la definition d'un melange homogene."),
        ("Un melange heterogene est un melange dont on distingue au moins deux constituants.", "On y voit distinctement plusieurs parties."),
        ("L'eau salee est un melange homogene.", "Le sel est dissous, on ne le distingue pas."),
        ("L'air est un melange de plusieurs gaz.", "Surtout du diazote et du dioxygene."),
        ("La filtration permet de separer un liquide des particules solides non dissoutes.", "Le filtre retient les solides en suspension."),
        ("La decantation consiste a laisser reposer un melange pour que les solides se deposent au fond.", "La separation se fait par gravite."),
        ("Deux liquides miscibles forment un melange homogene.", "Ils se melangent completement."),
        ("L'eau et l'huile forment un melange heterogene.", "Elles ne sont pas miscibles, on voit deux couches."),
        ("Dissoudre du sucre dans l'eau donne un melange homogene.", "Le sucre dissous devient invisible."),
        ("Un corps pur est constitue d'une seule sorte de constituant.", "Il n'est pas melange."),
        ("Quand on dissout du sel dans l'eau, la masse totale se conserve.", "Masse du melange = masse de l'eau + masse du sel."),
        ("Un melange sature ne peut plus dissoudre de solide supplementaire.", "La limite de solubilite est atteinte."),
        ("En general, la plupart des solides se dissolvent mieux dans l'eau chaude.", "La solubilite augmente souvent avec la temperature."),
        ("Le diazote represente environ 78 pour cent du volume de l'air.", "C'est le gaz majoritaire de l'air."),
        ("Le dioxygene represente environ 21 pour cent du volume de l'air.", "C'est le gaz necessaire a la respiration."),
        ("Une eau limpide n'est pas forcement une eau pure.", "Elle peut contenir des sels dissous invisibles."),
        ("La distillation permet d'obtenir de l'eau presque pure a partir d'eau salee.", "On evapore puis on condense la vapeur d'eau."),
        ("Apres une filtration, le liquide recupere s'appelle le filtrat.", "C'est le liquide passe a travers le filtre."),
        ("Le brouillard est un melange heterogene.", "On distingue les gouttelettes d'eau en suspension."),
        ("La masse d'un melange est egale a la somme des masses de ses constituants.", "La masse se conserve lors d'un melange."),
        ("Un melange de sable et d'eau est heterogene.", "On distingue le sable de l'eau."),
        ("L'eau minerale est un melange car elle contient des sels mineraux dissous.", "Ce n'est pas un corps pur."),
    ]
    faux = [
        ("L'eau salee est un melange heterogene.", "Faux : le sel est dissous, on ne le distingue pas, c'est homogene."),
        ("L'huile et l'eau sont miscibles.", "Faux : elles ne se melangent pas, elles sont non miscibles."),
        ("La filtration separe deux liquides miscibles.", "Faux : la filtration retient les solides non dissous, pas les liquides miscibles."),
        ("Un melange homogene ne contient qu'un seul constituant.", "Faux : il peut en contenir plusieurs, mais on ne les distingue pas."),
        ("Lorsqu'on dissout du sel, une partie de la masse disparait.", "Faux : la masse totale se conserve."),
        ("On peut dissoudre une quantite illimitee de sucre dans un verre d'eau.", "Faux : au-dela de la saturation, il ne se dissout plus."),
        ("L'air ne contient que du dioxygene.", "Faux : il contient surtout du diazote (environ 78 pour cent)."),
        ("La decantation necessite un filtre.", "Faux : elle repose sur le depot par gravite, sans filtre."),
        ("Une eau claire est toujours potable.", "Faux : elle peut contenir des microbes ou des substances dissoutes."),
        ("Le sucre dissous dans l'eau forme un melange heterogene.", "Faux : c'est un melange homogene."),
        ("L'eau minerale est un corps pur.", "Faux : elle contient des sels mineraux dissous, c'est un melange."),
    ]
    defs = [
        ("Comment appelle-t-on un melange dont on ne distingue pas les constituants ?", "un melange homogene", "On ne voit pas les differents constituants."),
        ("Comment appelle-t-on un melange dont on distingue les constituants ?", "un melange heterogene", "On distingue plusieurs parties."),
        ("Comment nomme-t-on deux liquides qui se melangent parfaitement ?", "des liquides miscibles", "Ils forment un melange homogene."),
        ("Quelle technique separe un solide non dissous d'un liquide a l'aide d'un filtre ?", "la filtration", "Le filtre retient le solide."),
        ("Quelle technique consiste a laisser reposer pour que le solide se depose ?", "la decantation", "Separation par gravite."),
        ("Comment nomme-t-on le liquide obtenu apres une filtration ?", "le filtrat", "C'est le liquide filtre."),
        ("Quel gaz est le plus abondant dans l'air ?", "le diazote", "Environ 78 pour cent du volume."),
        ("Quel gaz de l'air est necessaire a la respiration ?", "le dioxygene", "Environ 21 pour cent du volume."),
        ("Comment appelle-t-on un melange qui ne peut plus dissoudre de solide ?", "un melange sature", "La limite de solubilite est atteinte."),
        ("Comment nomme-t-on un constituant unique, non melange ?", "un corps pur", "Une seule sorte de constituant."),
        ("Quelle technique separe l'eau du sel par ebullition puis condensation ?", "la distillation", "On evapore puis on condense."),
        ("L'eau boueuse est-elle un melange homogene ou heterogene ?", "heterogene", "On distingue les particules de boue."),
        ("L'eau sucree est-elle un melange homogene ou heterogene ?", "homogene", "Le sucre dissous est invisible."),
        ("Comment appelle-t-on le phenomene par lequel un solide disparait dans l'eau ?", "la dissolution", "Le solide se disperse dans le solvant."),
        ("Comment nomme-t-on le solide que l'on dissout ?", "le solute", "C'est l'espece dissoute."),
        ("Comment nomme-t-on le liquide qui dissout ?", "le solvant", "L'eau est le solvant le plus courant."),
        ("L'eau et l'huile sont-elles miscibles ou non miscibles ?", "non miscibles", "Elles forment deux couches."),
        ("Environ quel pourcentage du volume de l'air est du dioxygene ?", "environ 21 pour cent", "Le reste est surtout du diazote."),
        ("La masse d'un melange est-elle egale a la somme des masses des constituants ?", "oui", "La masse se conserve."),
    ]
    return _qual(vrais, faux, defs, "corps purs et melanges")

# ===== 5e : ENERGIE ET ELECTRICITE =====
def g5_energie_electricite():
    vrais = [
        ("Un circuit electrique ferme permet le passage du courant.", "Le courant circule dans une boucle fermee."),
        ("Dans un circuit ouvert, le courant ne circule pas.", "La boucle est interrompue."),
        ("Une lampe brille lorsqu'elle est traversee par un courant electrique.", "Le courant provoque son eclairage."),
        ("Un interrupteur ouvert coupe le courant.", "Il interrompt la boucle du circuit."),
        ("Les metaux sont de bons conducteurs electriques.", "Ils laissent passer le courant."),
        ("Le plastique est un isolant electrique.", "Il ne laisse pas passer le courant."),
        ("Dans un circuit en serie, les composants sont branches les uns a la suite des autres.", "Ils forment une seule boucle."),
        ("Dans un circuit en serie de deux lampes, devisser une lampe eteint l'autre.", "La boucle unique est coupee."),
        ("Dans un circuit en derivation, chaque lampe est sur sa propre boucle.", "Les branches sont independantes."),
        ("Dans un circuit en derivation, devisser une lampe n'eteint pas forcement l'autre.", "Les autres boucles restent fermees."),
        ("Une pile est un reservoir d'energie.", "Elle fournit l'energie au circuit."),
        ("L'energie ne se cree pas et ne disparait pas : elle se convertit d'une forme a une autre.", "C'est la conservation de l'energie."),
        ("Une lampe convertit de l'energie electrique en lumiere et en chaleur.", "Une partie est perdue en chaleur."),
        ("Un moteur electrique convertit de l'energie electrique en mouvement.", "Il produit de l'energie de mouvement."),
        ("Le vent est une source d'energie renouvelable.", "L'energie eolienne se renouvelle."),
        ("Le petrole est une source d'energie non renouvelable.", "C'est une energie fossile."),
        ("Un court-circuit peut faire surchauffer les fils et provoquer un incendie.", "Il fait circuler un courant tres intense."),
        ("Le corps humain conduit l'electricite, ce qui rend le courant dangereux.", "D'ou le risque d'electrocution."),
        ("Un panneau solaire convertit l'energie de la lumiere en electricite.", "C'est une conversion photovoltaique."),
        ("Eteindre les appareils inutilises permet d'economiser de l'energie.", "On evite une consommation inutile."),
        ("Il faut une source comme une pile pour faire circuler un courant.", "Sans generateur, pas de courant."),
        ("Les fils de connexion sont souvent en cuivre car c'est un bon conducteur.", "Le cuivre conduit tres bien le courant."),
        ("Une DEL (LED) ne s'allume que si elle est branchee dans le bon sens.", "Elle ne laisse passer le courant que dans un sens."),
        ("L'unite de la tension electrique est le volt.", "On la note V."),
        ("L'unite de l'intensite du courant est l'ampere.", "On la note A."),
    ]
    faux = [
        ("Un circuit ouvert laisse passer le courant.", "Faux : il faut un circuit ferme pour que le courant circule."),
        ("Le bois sec est un bon conducteur electrique.", "Faux : c'est un isolant."),
        ("Dans un circuit en serie, devisser une lampe laisse l'autre allumee.", "Faux : tout s'eteint car il n'y a qu'une seule boucle."),
        ("L'energie peut etre creee a partir de rien.", "Faux : elle se convertit, elle ne se cree pas."),
        ("Le charbon est une energie renouvelable.", "Faux : c'est une energie fossile non renouvelable."),
        ("On peut toucher un fil denude sous tension sans danger.", "Faux : risque d'electrocution."),
        ("Une pile fournit de l'energie indefiniment.", "Faux : elle s'epuise avec le temps."),
        ("Le cuivre est un isolant.", "Faux : c'est un metal, bon conducteur."),
        ("Un court-circuit est sans danger.", "Faux : il peut provoquer une surchauffe et un incendie."),
        ("Le Soleil est une source d'energie non renouvelable.", "Faux : l'energie solaire est renouvelable."),
    ]
    defs = [
        ("Comment appelle-t-on un materiau qui laisse passer le courant ?", "un conducteur", "Ex. : les metaux."),
        ("Comment appelle-t-on un materiau qui ne laisse pas passer le courant ?", "un isolant", "Ex. : le plastique."),
        ("Comment nomme-t-on un circuit ou les composants se suivent sur une seule boucle ?", "un circuit en serie", "Une seule boucle unique."),
        ("Comment nomme-t-on un circuit ou les lampes sont sur des boucles separees ?", "un circuit en derivation", "Branches independantes."),
        ("Quel composant permet d'ouvrir ou de fermer un circuit ?", "un interrupteur", "Il commande le passage du courant."),
        ("Cite une energie renouvelable.", "l'energie solaire, eolienne ou hydraulique", "Elle se renouvelle naturellement."),
        ("Cite une energie fossile.", "le petrole, le charbon ou le gaz naturel", "Elle est non renouvelable."),
        ("En quoi une lampe convertit-elle l'energie electrique ?", "en lumiere et en chaleur", "Une partie est perdue en chaleur."),
        ("En quoi un moteur convertit-il l'energie electrique ?", "en mouvement (energie mecanique)", "Il fait tourner un axe."),
        ("Que devient le courant si le circuit est ouvert ?", "il ne circule pas", "La boucle est interrompue."),
        ("Comment appelle-t-on un contact direct entre les bornes provoquant un tres fort courant ?", "un court-circuit", "Il peut faire surchauffer les fils."),
        ("Quel appareil convertit la lumiere du Soleil en electricite ?", "un panneau solaire (photovoltaique)", "Conversion de la lumiere en courant."),
        ("L'energie se conserve-t-elle ou se cree-t-elle ?", "elle se conserve (se convertit)", "Elle ne se cree pas."),
        ("Le plastique est-il conducteur ou isolant ?", "isolant", "Il ne laisse pas passer le courant."),
        ("Le fer est-il conducteur ou isolant ?", "conducteur", "C'est un metal."),
        ("Quelle est l'unite de la tension electrique ?", "le volt", "Symbole V."),
        ("Quelle est l'unite de l'intensite du courant ?", "l'ampere", "Symbole A."),
    ]
    return _qual(vrais, faux, defs, "energie et electricite")

# ===== 1re : CHIMIE ORGANIQUE =====
def g1_chimie_organique():
    vrais = [
        ("Un atome de carbone forme quatre liaisons covalentes.", "Le carbone est tetravalent."),
        ("Les alcanes ne contiennent que des liaisons simples entre atomes de carbone.", "Ce sont des molecules saturees."),
        ("Un alcene possede au moins une double liaison carbone-carbone.", "C'est une molecule insaturee."),
        ("La formule brute indique le nombre d'atomes de chaque element dans la molecule.", "Elle ne donne pas l'enchainement."),
        ("La formule semi-developpee montre l'enchainement des atomes sans detailler les liaisons carbone-hydrogene.", "Elle simplifie la formule developpee."),
        ("Le groupe hydroxyle -OH caracterise la famille des alcools.", "Le -OH definit un alcool."),
        ("Le groupe carboxyle -COOH caracterise les acides carboxyliques.", "Le -COOH definit un acide carboxylique."),
        ("Une cetone possede un groupe carbonyle porte par un carbone a l'interieur de la chaine.", "Le C=O n'est pas en bout de chaine."),
        ("Un aldehyde possede un groupe carbonyle porte par un carbone en bout de chaine.", "Le C=O est en extremite."),
        ("Deux isomeres ont la meme formule brute mais des structures differentes.", "Meme composition, arrangement different."),
        ("La spectroscopie infrarouge identifie des groupes caracteristiques par leurs bandes d'absorption.", "Chaque liaison absorbe a des nombres d'onde caracteristiques."),
        ("En infrarouge, une bande large vers 3200 a 3600 cm-1 est caracteristique de la liaison O-H d'un alcool.", "Signature du groupe hydroxyle."),
        ("La combustion complete d'un alcane produit du dioxyde de carbone et de l'eau.", "CO2 et H2O sont les produits."),
        ("Le methane a pour formule brute CH4.", "Un carbone et quatre hydrogenes."),
        ("L'ethanol est un alcool.", "Il porte un groupe -OH."),
        ("La chaine carbonee principale est la plus longue chaine d'atomes de carbone.", "Elle sert de base au nom."),
        ("Le nom d'un alcane lineaire se termine par le suffixe -ane.", "Ex. : methane, ethane, propane."),
        ("Un groupe caracteristique confere a la molecule des proprietes chimiques particulieres.", "Il definit la famille fonctionnelle."),
        ("La formule topologique represente la chaine par une ligne brisee, sans ecrire les C ni les H lies aux carbones.", "Representation simplifiee."),
        ("Les molecules organiques sont majoritairement constituees de carbone et d'hydrogene.", "Ce sont des composes du carbone."),
        ("Un alcene de reference, l'ethene, possede une double liaison C=C.", "Formule C2H4."),
        ("Une molecule est dite saturee si elle ne contient que des liaisons simples.", "Pas de double ni triple liaison."),
        ("Un alcane a n atomes de carbone a pour formule generale CnH2n+2.", "Regle des alcanes."),
        ("Les alcools de faible masse molaire, comme l'ethanol, sont miscibles a l'eau.", "Le groupe -OH favorise la miscibilite."),
        ("Le groupe carbonyle est un atome de carbone doublement lie a un atome d'oxygene.", "C'est la liaison C=O."),
    ]
    faux = [
        ("Un atome de carbone forme deux liaisons covalentes.", "Faux : il en forme quatre (tetravalent)."),
        ("Les alcanes contiennent une double liaison C=C.", "Faux : ils ne possedent que des liaisons simples."),
        ("Deux isomeres ont des formules brutes differentes.", "Faux : ils ont la meme formule brute, mais des structures differentes."),
        ("Le groupe -OH caracterise les acides carboxyliques.", "Faux : le -OH caracterise les alcools ; le -COOH les acides carboxyliques."),
        ("Un aldehyde porte son groupe carbonyle au milieu de la chaine.", "Faux : c'est la cetone ; l'aldehyde l'a en bout de chaine."),
        ("La spectroscopie infrarouge sert a peser les molecules.", "Faux : elle identifie des groupes et des liaisons."),
        ("La combustion complete d'un alcane produit du dioxygene.", "Faux : elle consomme du dioxygene et produit CO2 et H2O."),
        ("La formule brute donne l'enchainement precis des atomes.", "Faux : elle ne donne que le nombre d'atomes."),
        ("Le suffixe -ane designe un alcene.", "Faux : -ane designe un alcane ; -ene un alcene."),
        ("L'ethanol est un acide carboxylique.", "Faux : c'est un alcool (groupe -OH)."),
        ("Un alcane a n carbones a pour formule CnH2n.", "Faux : la formule d'un alcane est CnH2n+2."),
    ]
    defs = [
        ("Quel groupe caracteristique definit les alcools ?", "le groupe hydroxyle -OH", "Present dans l'ethanol."),
        ("Quel groupe caracteristique definit les acides carboxyliques ?", "le groupe carboxyle -COOH", "Present dans l'acide ethanoique."),
        ("Comment appelle-t-on des molecules de meme formule brute mais de structures differentes ?", "des isomeres", "Meme composition, arrangement different."),
        ("Quelle spectroscopie identifie les groupes par leurs bandes d'absorption ?", "la spectroscopie infrarouge (IR)", "Chaque liaison absorbe a des nombres d'onde propres."),
        ("Combien de liaisons covalentes forme un atome de carbone ?", "quatre", "Le carbone est tetravalent."),
        ("Quel est le suffixe du nom d'un alcane ?", "-ane", "Ex. : propane."),
        ("Quel est le suffixe caracteristique d'un alcene ?", "-ene", "Ex. : propene."),
        ("Quels sont les deux produits de la combustion complete d'un hydrocarbure ?", "le dioxyde de carbone et l'eau", "CO2 et H2O."),
        ("A quelle famille appartient une molecule portant un groupe -COOH ?", "les acides carboxyliques", "Groupe carboxyle."),
        ("A quelle famille appartient une molecule dont le C=O est en bout de chaine ?", "les aldehydes", "Carbonyle terminal."),
        ("A quelle famille appartient une molecule dont le C=O est a l'interieur de la chaine ?", "les cetones", "Carbonyle interne."),
        ("Comment nomme-t-on la representation en ligne brisee sans C ni H ?", "la formule topologique", "Chaque sommet est un carbone."),
        ("Quelle liaison absorbe vers 1700 cm-1 en infrarouge ?", "la liaison C=O (groupe carbonyle)", "Signature du carbonyle."),
        ("A quelle molecule correspond la formule CH4 ?", "le methane", "Le plus simple des alcanes."),
        ("Quels sont les deux elements majoritaires des composes organiques ?", "le carbone et l'hydrogene", "Ce sont des composes du carbone."),
    ]
    return _qual(vrais, faux, defs, "chimie organique")

# ===== Tle : CINETIQUE CHIMIQUE =====
def gT_cinetique_chimique():
    vrais = [
        ("La cinetique chimique etudie l'evolution d'une transformation au cours du temps.", "Elle s'interesse a la duree et a la vitesse."),
        ("Une augmentation de la temperature accelere en general une reaction chimique.", "La temperature est un facteur cinetique."),
        ("Une augmentation de la concentration des reactifs accelere en general une reaction.", "La concentration est un facteur cinetique."),
        ("Un catalyseur accelere une reaction sans etre consomme globalement.", "Il est regenere en fin de reaction."),
        ("Un catalyseur n'apparait pas dans l'equation bilan de la reaction.", "Il n'est pas un reactif consomme."),
        ("Le temps de demi-reaction est la duree au bout de laquelle l'avancement atteint la moitie de sa valeur finale.", "Definition du temps de demi-reaction."),
        ("La vitesse d'une reaction diminue generalement au cours du temps.", "Les reactifs s'epuisent progressivement."),
        ("Augmenter la surface de contact d'un reactif solide accelere la reaction.", "Plus de contact entre reactifs."),
        ("Un catalyseur abaisse l'energie d'activation de la reaction.", "Il facilite le passage de la reaction."),
        ("La trempe, un refroidissement brutal, permet de bloquer une reaction pour l'analyser.", "Elle fige l'etat du systeme."),
        ("La spectrophotometrie peut suivre une reaction si une espece est coloree.", "L'absorbance est reliee a la concentration."),
        ("La conductimetrie peut suivre une reaction faisant intervenir des ions.", "La conductivite depend des ions presents."),
        ("Un mecanisme reactionnel est une suite d'actes elementaires.", "La reaction se decompose en etapes."),
        ("Un intermediaire reactionnel est forme puis consomme au cours du mecanisme.", "Il n'apparait pas dans le bilan."),
        ("La catalyse est homogene si le catalyseur et les reactifs sont dans la meme phase.", "Meme etat physique."),
        ("La catalyse est heterogene si le catalyseur n'est pas dans la meme phase que les reactifs.", "Ex. : catalyseur solide, reactifs gazeux."),
        ("La catalyse enzymatique fait intervenir des enzymes comme catalyseurs biologiques.", "Les enzymes sont des catalyseurs du vivant."),
        ("Deux facteurs cinetiques classiques sont la temperature et la concentration.", "Ils modifient la vitesse."),
        ("A la fin de la reaction, la vitesse s'annule lorsque le reactif limitant est epuise.", "Plus de reactif, plus de reaction."),
        ("Un catalyseur ne modifie pas le sens spontane d'evolution du systeme.", "Il agit sur la vitesse, pas sur le sens."),
        ("Une reaction lente peut durer de plusieurs secondes a plusieurs heures.", "A l'echelle de l'observation humaine."),
        ("Le suivi d'une reaction peut se faire par titrages successifs d'echantillons preleves.", "On mesure l'avancement a differents instants."),
        ("Certains catalyseurs sont selectifs et favorisent une reaction plutot qu'une autre.", "La selectivite oriente la transformation."),
        ("La spectrophotometrie mesure l'absorbance, reliee a la concentration.", "Loi de proportionnalite en solution diluee."),
        ("Le platine peut servir de catalyseur en catalyse heterogene.", "Catalyseur solide."),
    ]
    faux = [
        ("Un catalyseur est consomme par la reaction.", "Faux : il est regenere, non consomme globalement."),
        ("Baisser la temperature accelere une reaction.", "Faux : cela la ralentit en general."),
        ("Un catalyseur modifie les quantites finales de produits.", "Faux : il change la vitesse, pas l'etat final."),
        ("La vitesse de reaction augmente au cours du temps.", "Faux : elle diminue en general, car les reactifs sont consommes."),
        ("Un catalyseur augmente l'energie d'activation.", "Faux : il l'abaisse."),
        ("Diminuer la concentration des reactifs accelere la reaction.", "Faux : cela la ralentit en general."),
        ("La cinetique etudie seulement l'etat final d'une reaction.", "Faux : elle etudie l'evolution au cours du temps."),
        ("Broyer un solide en poudre ralentit la reaction.", "Faux : cela augmente la surface de contact, donc accelere."),
        ("Un intermediaire reactionnel apparait dans l'equation de bilan.", "Faux : il est forme puis consomme, il n'y figure pas."),
        ("La catalyse enzymatique n'utilise que des metaux.", "Faux : elle utilise des enzymes, des catalyseurs biologiques."),
    ]
    defs = [
        ("Comment appelle-t-on une grandeur qui modifie la vitesse d'une reaction ?", "un facteur cinetique", "Ex. : temperature, concentration."),
        ("Cite deux facteurs cinetiques.", "la temperature et la concentration", "Ils modifient la vitesse."),
        ("Comment appelle-t-on une espece qui accelere une reaction sans etre consommee ?", "un catalyseur", "Il est regenere."),
        ("Comment nomme-t-on la duree au bout de laquelle l'avancement vaut la moitie de sa valeur finale ?", "le temps de demi-reaction", "Note souvent t un demi."),
        ("Quelle technique de suivi convient a une espece coloree ?", "la spectrophotometrie", "Mesure de l'absorbance."),
        ("Quelle technique de suivi convient a une reaction impliquant des ions ?", "la conductimetrie", "Mesure de la conductivite."),
        ("Comment appelle-t-on le refroidissement brutal qui stoppe une reaction ?", "la trempe", "Elle fige le systeme."),
        ("Comment nomme-t-on une catalyse ou catalyseur et reactifs sont dans la meme phase ?", "une catalyse homogene", "Meme etat physique."),
        ("Comment nomme-t-on une catalyse ou ils sont dans des phases differentes ?", "une catalyse heterogene", "Ex. : solide et gaz."),
        ("Comment nomme-t-on les catalyseurs biologiques ?", "les enzymes", "Catalyseurs du vivant."),
        ("Comment appelle-t-on une espece formee puis consommee dans un mecanisme ?", "un intermediaire reactionnel", "Absent du bilan."),
        ("Comment evolue en general la vitesse d'une reaction au cours du temps ?", "elle diminue", "Les reactifs s'epuisent."),
        ("Sur quelle grandeur energetique agit un catalyseur ?", "l'energie d'activation (il l'abaisse)", "Il facilite la reaction."),
        ("Comment appelle-t-on la suite des actes elementaires d'une reaction ?", "le mecanisme reactionnel", "La reaction se decompose en etapes."),
        ("Augmenter la temperature a quel effet sur la vitesse ?", "elle augmente", "La temperature est un facteur cinetique."),
        ("A quelle grandeur la spectrophotometrie donne-t-elle acces ?", "l'absorbance", "Reliee a la concentration."),
    ]
    return _qual(vrais, faux, defs, "cinetique chimique")

# ===== Tle : EQUILIBRE ET SENS D'EVOLUTION =====
def gT_equilibre_sens_evolution():
    vrais = [
        ("Une transformation non totale conduit a un etat d'equilibre chimique.", "Reactifs et produits coexistent."),
        ("A l'equilibre, les reactifs et les produits coexistent.", "La reaction n'est pas totale."),
        ("L'equilibre chimique est dynamique : les reactions directe et inverse se poursuivent a la meme vitesse.", "Les vitesses se compensent."),
        ("Le quotient de reaction se calcule avec les concentrations a un instant donne.", "Il evolue au cours du temps."),
        ("A l'equilibre, le quotient de reaction est egal a la constante d'equilibre K.", "Qr = K a l'equilibre."),
        ("Si Qr est inferieur a K, le systeme evolue dans le sens direct.", "Formation des produits."),
        ("Si Qr est superieur a K, le systeme evolue dans le sens inverse.", "Formation des reactifs."),
        ("Si Qr est egal a K, le systeme est a l'equilibre et n'evolue plus globalement.", "Etat d'equilibre atteint."),
        ("La constante d'equilibre K ne depend que de la temperature pour une reaction donnee.", "Elle ne depend pas des concentrations initiales."),
        ("Le taux d'avancement final est le rapport de l'avancement final sur l'avancement maximal.", "Definition du taux d'avancement."),
        ("Pour une transformation totale, le taux d'avancement final vaut 1.", "Soit 100 pour cent."),
        ("Pour une transformation non totale, le taux d'avancement final est inferieur a 1.", "La reaction est limitee."),
        ("Une reaction avec une tres grande constante K est quasi totale.", "L'equilibre est fortement deplace vers les produits."),
        ("Une reaction avec une tres petite constante K est tres limitee.", "Peu de produits formes."),
        ("Un systeme chimique evolue spontanement vers son etat d'equilibre.", "Il tend vers Qr = K."),
        ("Les especes solides pures et le solvant n'apparaissent pas dans l'expression du quotient de reaction.", "Convention d'ecriture de Qr."),
        ("La comparaison de Qr et de K permet de prevoir le sens d'evolution du systeme.", "Critere d'evolution spontanee."),
        ("Un acide fort reagit de facon quasi totale avec l'eau.", "Sa reaction est consideree totale."),
        ("Un acide faible reagit de facon non totale avec l'eau.", "Sa reaction conduit a un equilibre."),
        ("Le taux d'avancement final depend des conditions initiales.", "Contrairement a K qui n'en depend pas."),
        ("Deux systemes de meme equation a la meme temperature ont la meme constante K.", "K ne depend que de la temperature."),
        ("Un catalyseur ne modifie pas l'etat d'equilibre atteint.", "Il accelere seulement l'atteinte de l'equilibre."),
        ("Le quotient de reaction est une grandeur sans dimension.", "Il n'a pas d'unite."),
        ("Le sens direct est le sens de consommation des reactifs ecrits a gauche de l'equation.", "Convention d'ecriture."),
        ("En solution aqueuse diluee, l'eau solvant n'apparait pas dans le quotient de reaction.", "Convention pour le solvant."),
    ]
    faux = [
        ("A l'equilibre, il ne reste plus de reactifs.", "Faux : reactifs et produits coexistent."),
        ("L'equilibre chimique signifie que toutes les reactions s'arretent.", "Faux : c'est un equilibre dynamique."),
        ("Si Qr est inferieur a K, le systeme evolue dans le sens inverse.", "Faux : il evolue dans le sens direct."),
        ("La constante K depend des concentrations initiales.", "Faux : elle ne depend que de la temperature."),
        ("Le taux d'avancement final d'une transformation non totale vaut 1.", "Faux : il est inferieur a 1."),
        ("Une grande valeur de K indique une reaction tres limitee.", "Faux : une grande K indique une reaction quasi totale."),
        ("Le quotient de reaction est egal a K a tout instant.", "Faux : seulement a l'equilibre."),
        ("Les solides purs figurent dans l'expression du quotient de reaction.", "Faux : ils n'y figurent pas."),
        ("Un acide faible reagit totalement avec l'eau.", "Faux : sa reaction est non totale."),
        ("Un catalyseur deplace l'etat d'equilibre.", "Faux : il accelere l'atteinte de l'equilibre sans le deplacer."),
    ]
    defs = [
        ("Comment appelle-t-on la grandeur calculee avec les concentrations a un instant donne ?", "le quotient de reaction Qr", "Il varie au cours du temps."),
        ("A quoi est egal Qr a l'equilibre ?", "a la constante d'equilibre K", "Qr = K a l'equilibre."),
        ("De quel parametre depend uniquement la constante d'equilibre ?", "la temperature", "Pas des concentrations initiales."),
        ("Comment prevoit-on le sens d'evolution spontanee d'un systeme ?", "en comparant Qr et K", "Critere d'evolution."),
        ("Si Qr est inferieur a K, dans quel sens evolue le systeme ?", "le sens direct (vers les produits)", "Formation de produits."),
        ("Si Qr est superieur a K, dans quel sens evolue le systeme ?", "le sens inverse (vers les reactifs)", "Formation de reactifs."),
        ("Comment nomme-t-on le rapport avancement final sur avancement maximal ?", "le taux d'avancement final", "Compris entre 0 et 1."),
        ("Que vaut le taux d'avancement final d'une transformation totale ?", "1 (soit 100 pour cent)", "Reaction complete."),
        ("Comment qualifie-t-on un equilibre ou les reactions directe et inverse se compensent ?", "dynamique", "Les vitesses sont egales."),
        ("Une reaction de tres grande constante K est-elle totale ou limitee ?", "quasi totale", "Fortement deplacee vers les produits."),
        ("Les solides purs apparaissent-ils dans le quotient de reaction ?", "non", "Convention d'ecriture."),
        ("Un acide fort reagit-il totalement ou partiellement avec l'eau ?", "totalement (quasi totalement)", "Reaction consideree totale."),
        ("Comment appelle-t-on l'etat vers lequel un systeme evolue spontanement ?", "l'etat d'equilibre", "Ou Qr = K."),
        ("Le quotient de reaction a-t-il une unite ?", "non (sans dimension)", "Grandeur sans unite."),
        ("Si Qr est egal a K, le systeme evolue-t-il ?", "non, il est a l'equilibre", "Plus d'evolution globale."),
    ]
    return _qual(vrais, faux, defs, "equilibre et sens d'evolution")

# ===== Tle : METHODES PHYSIQUES D'ANALYSE =====
def gT_methodes_physiques_analyse():
    vrais = [
        ("La spectrophotometrie UV-visible mesure l'absorbance d'une solution.", "Grandeur reliee a la concentration."),
        ("D'apres la loi de Beer-Lambert, l'absorbance est proportionnelle a la concentration en solution diluee.", "A est proportionnelle a c."),
        ("L'absorbance est une grandeur sans unite.", "C'est un nombre sans dimension."),
        ("Une solution coloree absorbe la lumiere dans le domaine visible.", "D'ou sa couleur."),
        ("La couleur percue d'une solution est complementaire de la couleur absorbee.", "Regle des couleurs complementaires."),
        ("On regle le blanc, la reference, avec le solvant avant une mesure d'absorbance.", "Pour soustraire l'absorption du solvant."),
        ("Une courbe d'etalonnage relie l'absorbance a la concentration.", "Elle sert au dosage."),
        ("La spectroscopie infrarouge identifie les groupes caracteristiques par leurs bandes d'absorption.", "Chaque liaison a une signature."),
        ("En infrarouge, une bande large vers 3200 a 3600 cm-1 traduit une liaison O-H.", "Signature de l'hydroxyle."),
        ("En infrarouge, une bande intense vers 1700 cm-1 traduit une liaison C=O.", "Signature du carbonyle."),
        ("La spectroscopie RMN du proton renseigne sur l'environnement des atomes d'hydrogene.", "Elle sonde les protons."),
        ("En RMN, le nombre de signaux indique le nombre de groupes de protons equivalents.", "Chaque groupe donne un signal."),
        ("La courbe d'integration en RMN est proportionnelle au nombre de protons de chaque signal.", "Elle donne les proportions de protons."),
        ("La multiplicite d'un signal RMN, selon la regle des n+1, renseigne sur les protons voisins.", "Le nombre de pics depend des voisins."),
        ("Un singulet correspond a des protons sans voisin selon la regle n+1.", "Aucun proton voisin."),
        ("La spectrophotometrie permet de doser une espece coloree.", "Via une courbe d'etalonnage."),
        ("Les methodes spectroscopiques sont en general non destructives pour l'echantillon.", "L'echantillon n'est pas detruit."),
        ("En infrarouge, l'axe des abscisses est gradue en nombre d'onde (cm-1).", "Unite caracteristique de l'IR."),
        ("Le coefficient d'absorption molaire depend de l'espece et de la longueur d'onde.", "Il intervient dans la loi de Beer-Lambert."),
        ("On choisit la longueur d'onde de travail au maximum d'absorption pour plus de precision.", "La sensibilite y est maximale."),
        ("La spectrophotometrie peut suivre l'evolution temporelle d'une reaction coloree.", "Suivi cinetique par absorbance."),
        ("Deux protons equivalents donnent un seul signal en RMN.", "Meme environnement chimique."),
        ("Le deplacement chimique en RMN se mesure en ppm.", "Unite du deplacement chimique."),
        ("Une espece incolore n'absorbe pas dans le visible.", "Elle peut absorber dans l'UV."),
        ("La spectroscopie IR et la RMN aident a determiner la structure d'une molecule.", "Elles se completent."),
    ]
    faux = [
        ("L'absorbance possede une unite, par exemple le volt.", "Faux : l'absorbance est sans unite."),
        ("Selon Beer-Lambert, l'absorbance est inversement proportionnelle a la concentration.", "Faux : elle lui est proportionnelle."),
        ("La RMN du proton etudie les atomes de carbone.", "Faux : elle etudie les atomes d'hydrogene."),
        ("La spectroscopie infrarouge permet de determiner la masse molaire.", "Faux : elle identifie des groupes et des liaisons."),
        ("La couleur d'une solution est identique a la couleur qu'elle absorbe.", "Faux : c'est la couleur complementaire."),
        ("On regle le blanc avec la solution la plus concentree.", "Faux : on regle le blanc avec le solvant."),
        ("En RMN, un singulet indique des protons ayant plusieurs voisins.", "Faux : un singulet indique l'absence de voisins."),
        ("La bande vers 1700 cm-1 correspond a une liaison O-H.", "Faux : elle correspond a C=O ; O-H est vers 3200 a 3600 cm-1."),
        ("La courbe d'etalonnage relie l'absorbance au temps.", "Faux : elle la relie a la concentration."),
        ("La RMN mesure la couleur d'une solution.", "Faux : elle sonde l'environnement des protons."),
    ]
    defs = [
        ("Quelle grandeur mesure la spectrophotometrie UV-visible ?", "l'absorbance", "Reliee a la concentration."),
        ("Quelle loi relie l'absorbance a la concentration ?", "la loi de Beer-Lambert", "A proportionnelle a c."),
        ("L'absorbance a-t-elle une unite ?", "non", "Grandeur sans dimension."),
        ("Quelle spectroscopie identifie les groupes par des bandes d'absorption ?", "la spectroscopie infrarouge (IR)", "Signatures des liaisons."),
        ("Quelle spectroscopie sonde l'environnement des atomes d'hydrogene ?", "la RMN du proton", "Elle etudie les protons."),
        ("Que regle-t-on avec le solvant avant une mesure d'absorbance ?", "le blanc (la reference)", "Pour soustraire le solvant."),
        ("Comment appelle-t-on la droite reliant absorbance et concentration ?", "la courbe d'etalonnage", "Utile au dosage."),
        ("A quelle liaison correspond une bande IR large vers 3200 a 3600 cm-1 ?", "la liaison O-H", "Signature de l'hydroxyle."),
        ("A quelle liaison correspond une bande IR intense vers 1700 cm-1 ?", "la liaison C=O", "Signature du carbonyle."),
        ("En RMN, a quoi est proportionnelle la courbe d'integration ?", "au nombre de protons du signal", "Elle donne les proportions."),
        ("Quelle regle donne la multiplicite d'un signal RMN ?", "la regle des (n+1)", "n = nombre de protons voisins."),
        ("Que traduit un singulet en RMN selon la regle n+1 ?", "l'absence de protons voisins", "Un seul pic."),
        ("La couleur percue d'une solution est complementaire de quelle couleur ?", "de la couleur absorbee", "Regle des complementaires."),
        ("En infrarouge, en quelle grandeur est gradue l'axe des abscisses ?", "le nombre d'onde (cm-1)", "Unite de l'IR."),
        ("En quelle unite se mesure le deplacement chimique en RMN ?", "en ppm", "Partie par million."),
    ]
    return _qual(vrais, faux, defs, "methodes physiques d'analyse")

# ===== Tle : SYNTHESE ORGANIQUE =====
def gT_synthese_organique():
    vrais = [
        ("Une synthese organique comporte en general les etapes : transformation, isolement, purification puis identification.", "Ordre classique d'une synthese."),
        ("Le chauffage a reflux permet de chauffer un melange sans perte de matiere.", "Les vapeurs se condensent et retombent."),
        ("Le rendement d'une synthese est le rapport de la quantite de produit obtenue sur la quantite maximale attendue.", "Definition du rendement."),
        ("Le rendement d'une synthese est toujours inferieur ou egal a 100 pour cent.", "On ne peut pas obtenir plus que le maximum."),
        ("La recristallisation est une technique de purification d'un solide.", "Dissolution a chaud puis cristallisation a froid."),
        ("La chromatographie sur couche mince permet de verifier la purete ou d'identifier des especes.", "Analyse par migration."),
        ("Sur une CCM, deux especes ayant le meme rapport frontal sont probablement identiques.", "Meme hauteur de migration."),
        ("L'extraction liquide-liquide utilise la difference de solubilite entre deux solvants non miscibles.", "L'espece passe dans le solvant ou elle est plus soluble."),
        ("La filtration sous vide, dite Buchner, accelere la separation d'un solide et d'un liquide.", "Le vide aspire le liquide."),
        ("La temperature de fusion d'un solide pur est nette ; celle d'un solide impur est abaissee et etalee.", "Critere de purete."),
        ("On peut identifier un produit en comparant sa temperature de fusion a une valeur de reference.", "Comparaison a une valeur tabulee."),
        ("Un catalyseur peut etre utilise pour accelerer une etape de synthese.", "Il augmente la vitesse."),
        ("Un groupe protecteur permet de masquer temporairement une fonction chimique.", "Il est retire ensuite."),
        ("La chimie verte cherche a limiter les dechets et l'usage de produits dangereux.", "Demarche eco-responsable."),
        ("L'economie d'atomes evalue la proportion d'atomes des reactifs retrouves dans le produit voulu.", "Critere de la chimie verte."),
        ("Une reaction selective privilegie la formation d'un produit particulier.", "Elle limite les produits secondaires."),
        ("Le reflux se fait avec un refrigerant place verticalement au-dessus du ballon.", "Il condense les vapeurs."),
        ("L'identification peut combiner CCM, temperature de fusion et spectroscopie.", "Plusieurs indices convergents."),
        ("La distillation peut purifier un liquide en le separant selon sa temperature d'ebullition.", "Separation par ebullition."),
        ("Apres extraction, on separe les deux phases a l'aide d'une ampoule a decanter.", "Verrerie de separation des phases."),
        ("Un rendement faible peut venir de reactions parasites ou de pertes lors des etapes.", "Toutes les pertes diminuent le rendement."),
        ("Une plaque de CCM se revele parfois sous lampe UV ou avec un revelateur.", "Pour visualiser les taches."),
        ("On seche une phase organique avec un dessechant avant d'evaporer le solvant.", "Ex. : sulfate de magnesium anhydre."),
        ("Un montage a reflux comporte un ballon, un chauffage et un refrigerant.", "Elements classiques du montage."),
        ("La strategie de synthese choisit l'ordre des etapes et les reactifs pour obtenir le produit voulu.", "Elle planifie la synthese."),
    ]
    faux = [
        ("Le rendement d'une synthese peut depasser 100 pour cent.", "Faux : il est au plus egal a 100 pour cent."),
        ("Le chauffage a reflux fait perdre les reactifs par evaporation.", "Faux : les vapeurs se condensent et retombent, sans perte."),
        ("La recristallisation sert a purifier un gaz.", "Faux : elle purifie un solide."),
        ("Sur une CCM, une espece pure donne toujours plusieurs taches.", "Faux : une espece pure donne une seule tache."),
        ("L'extraction liquide-liquide utilise deux solvants miscibles.", "Faux : elle utilise deux solvants non miscibles."),
        ("La temperature de fusion d'un solide impur est plus nette que celle du produit pur.", "Faux : elle est abaissee et etalee."),
        ("Un groupe protecteur reste definitivement sur la molecule.", "Faux : il est retire apres l'etape a proteger."),
        ("La chimie verte encourage l'usage maximal de solvants toxiques.", "Faux : elle vise a les limiter."),
        ("L'ampoule a decanter sert a peser le produit.", "Faux : elle sert a separer deux phases liquides non miscibles."),
        ("Une synthese ne necessite aucune etape de purification.", "Faux : la purification est en general indispensable."),
    ]
    defs = [
        ("Quelles sont, dans l'ordre, les grandes etapes d'une synthese ?", "transformation, isolement, purification, identification", "Ordre classique."),
        ("Comment appelle-t-on le chauffage d'un melange sans perte grace a un refrigerant ?", "le chauffage a reflux", "Les vapeurs retombent."),
        ("Comment nomme-t-on le rapport quantite obtenue sur quantite maximale attendue ?", "le rendement", "Au plus egal a 100 pour cent."),
        ("Quelle technique purifie un solide par dissolution a chaud puis cristallisation a froid ?", "la recristallisation", "Technique de purification."),
        ("Quelle technique controle la purete par migration sur une plaque ?", "la chromatographie sur couche mince (CCM)", "Analyse par migration."),
        ("Quelle grandeur d'une CCM caracterise une espece par sa hauteur relative de migration ?", "le rapport frontal (Rf)", "Compris entre 0 et 1."),
        ("Quelle verrerie separe deux phases liquides non miscibles ?", "l'ampoule a decanter", "Separation des phases."),
        ("Quelle filtration acceleree utilise le vide ?", "la filtration Buchner (sous vide)", "Le vide aspire le liquide."),
        ("Que peut-on mesurer pour identifier un solide et verifier sa purete ?", "sa temperature de fusion", "Comparee a une reference."),
        ("Comment appelle-t-on un groupe qui masque temporairement une fonction ?", "un groupe protecteur", "Retire ensuite."),
        ("Comment nomme-t-on la demarche limitant dechets et produits dangereux ?", "la chimie verte", "Demarche eco-responsable."),
        ("Le rendement d'une synthese peut-il depasser 100 pour cent ?", "non", "Au plus 100 pour cent."),
        ("Une espece pure donne combien de taches sur une CCM ?", "une seule", "Signe de purete."),
        ("Comment separe-t-on une espece entre deux solvants non miscibles ?", "par extraction liquide-liquide", "Difference de solubilite."),
        ("Quelles techniques spectroscopiques aident a l'identification finale ?", "l'infrarouge (IR) et la RMN", "Elles precisent la structure."),
    ]
    return _qual(vrais, faux, defs, "synthese organique")


EXTRA = {
    ("cinquieme","corps-purs-melanges"): g5_corps_purs_melanges,
    ("cinquieme","energie-electricite"): g5_energie_electricite,
    ("premiere","chimie-organique"): g1_chimie_organique,
    ("terminale","cinetique-chimique"): gT_cinetique_chimique,
    ("terminale","equilibre-sens-evolution"): gT_equilibre_sens_evolution,
    ("terminale","methodes-physiques-analyse"): gT_methodes_physiques_analyse,
    ("terminale","synthese-organique"): gT_synthese_organique,
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


# ======================================================================
#  CORRECTIFS QUALITE v5 — suppression des doublons d'enonces
#  1) reecriture des chapitres trop repetitifs (ou au contenu inadapte)
#  2) complement des autres par des exercices DISTINCTS
#  Toutes les reponses sont calculees ou factuelles (non ambigues).
# ======================================================================
from itertools import combinations as _comb

def _uniq(E):
    vus = set(); out = []
    for t in E:
        k = t[2].strip()
        if k in vus:
            continue
        vus.add(k); out.append(t)
    return out

def _entrelacer(*listes):
    out = []
    m = max((len(l) for l in listes), default=0)
    for i in range(m):
        for l in listes:
            if i < len(l):
                out.append(l[i])
    return out

def _completer(base, supp):
    E = [(e["difficulte"], e["notion"], e["enonce"], e["corrige"], e["reponse"]) for e in base]
    return _fin(_uniq(E + list(supp)))

def _maj(s):
    return s[0].upper() + s[1:]

# ---------------------------------------------------------------- SOLIDES
_SOLIDES = [
    ("un cube", 6, 12, 8),
    ("un pavé droit", 6, 12, 8),
    ("une pyramide à base carrée", 5, 8, 5),
    ("un tétraèdre (pyramide à base triangulaire)", 4, 6, 4),
    ("un prisme droit à base triangulaire", 5, 9, 6),
    ("une pyramide à base pentagonale", 6, 10, 6),
    ("une pyramide à base hexagonale", 7, 12, 7),
    ("un prisme droit à base pentagonale", 7, 15, 10),
    ("un prisme droit à base hexagonale", 8, 18, 12),
]

def r_solides(off=0):
    T1 = []
    for nom, f, a, s in _SOLIDES:
        for quoi, val in (("faces", f), ("arêtes", a), ("sommets", s)):
            de = "d'" if quoi[0] in "aeiouéèêh" else "de "
            T1.append(("application", "dénombrer", f"Combien {de}{quoi} possède {nom} ?",
                       [f"{_maj(nom)} possède ${val}$ {quoi}."], f"${val}$"))
    T2 = [
        ("application", "solides-ronds", "Combien de faces planes possède un cylindre ?",
         ["Ses deux bases sont des disques : ce sont ses seules faces planes."], "$2$"),
        ("application", "solides-ronds", "Combien de faces planes possède un cône ?",
         ["Sa base est un disque : c'est sa seule face plane."], "$1$"),
        ("application", "solides-ronds", "Combien de faces planes possède une boule ?",
         ["Une boule n'a qu'une surface courbe : aucune face plane."], "$0$"),
    ]
    T3 = [
        ("intermediaire", "forme-des-faces", "Quelle est la forme des faces d'un cube ?",
         ["Les 6 faces d'un cube sont des carrés identiques."], "des carrés"),
        ("intermediaire", "forme-des-faces", "Quelle est la forme des faces d'un pavé droit ?",
         ["Les faces d'un pavé droit sont des rectangles."], "des rectangles"),
        ("intermediaire", "forme-des-faces", "Quelle est la forme des faces d'un tétraèdre ?",
         ["Les 4 faces d'un tétraèdre sont des triangles."], "des triangles"),
        ("intermediaire", "forme-des-faces", "Quelle est la forme des faces latérales d'une pyramide ?",
         ["Les faces latérales d'une pyramide sont des triangles qui se rejoignent au sommet."], "des triangles"),
        ("intermediaire", "forme-des-faces", "Quelle est la forme des faces latérales d'un prisme droit ?",
         ["Les faces latérales d'un prisme droit sont des rectangles."], "des rectangles"),
        ("intermediaire", "forme-des-faces", "Quelle est la forme des deux bases d'un cylindre ?",
         ["Les bases d'un cylindre sont deux disques identiques."], "des disques"),
        ("intermediaire", "forme-des-faces", "Quelle est la forme de la base d'une pyramide à base carrée ?",
         ["Comme son nom l'indique, sa base est un carré."], "un carré"),
    ]
    T4 = [
        ("intermediaire", "reconnaitre", "Je suis un solide qui a 6 faces carrées, toutes identiques. Qui suis-je ?",
         ["6 faces carrées identiques : c'est le cube."], "le cube"),
        ("intermediaire", "reconnaitre", "Je suis un solide qui a 2 bases en forme de disque et je peux rouler. Qui suis-je ?",
         ["Deux bases en disque et une surface courbe : c'est le cylindre."], "le cylindre"),
        ("intermediaire", "reconnaitre", "Je suis un solide qui a une seule face plane (un disque) et un sommet pointu. Qui suis-je ?",
         ["Une base en disque et une pointe : c'est le cône."], "le cône"),
        ("intermediaire", "reconnaitre", "Je suis un solide qui n'a aucune face plane et qui roule dans tous les sens. Qui suis-je ?",
         ["Aucune face plane : c'est la boule."], "la boule"),
        ("intermediaire", "reconnaitre", "Je suis un solide qui a 4 faces, toutes triangulaires. Qui suis-je ?",
         ["4 faces triangulaires : c'est le tétraèdre (pyramide à base triangulaire)."], "le tétraèdre"),
        ("intermediaire", "reconnaitre", "Je suis un solide qui a une base carrée et 4 faces triangulaires. Qui suis-je ?",
         ["Une base carrée et des faces triangulaires : c'est la pyramide à base carrée."], "la pyramide à base carrée"),
        ("intermediaire", "reconnaitre", "Je suis un solide qui a 6 faces rectangulaires qui ne sont pas toutes des carrés. Qui suis-je ?",
         ["6 faces rectangulaires : c'est le pavé droit."], "le pavé droit"),
        ("intermediaire", "reconnaitre", "Je suis un solide qui a 2 bases triangulaires et 3 faces rectangulaires. Qui suis-je ?",
         ["2 bases triangulaires reliées par des rectangles : c'est le prisme droit à base triangulaire."],
         "le prisme droit à base triangulaire"),
    ]
    T5 = [
        ("intermediaire", "patrons", "Combien de faces faut-il dessiner pour faire le patron d'un cube ?",
         ["Le patron d'un cube est formé de 6 carrés."], "$6$"),
        ("intermediaire", "patrons", "Combien de faces faut-il dessiner pour faire le patron d'un tétraèdre ?",
         ["Le patron d'un tétraèdre est formé de 4 triangles."], "$4$"),
        ("intermediaire", "patrons", "Combien de faces faut-il dessiner pour faire le patron d'une pyramide à base carrée ?",
         ["1 carré pour la base et 4 triangles : $1 + 4 = 5$."], "$5$"),
        ("intermediaire", "patrons", "Combien de faces faut-il dessiner pour faire le patron d'un prisme droit à base triangulaire ?",
         ["2 triangles et 3 rectangles : $2 + 3 = 5$."], "$5$"),
        ("intermediaire", "patrons", "Combien de faces faut-il dessiner pour faire le patron d'un pavé droit ?",
         ["Le patron d'un pavé droit est formé de 6 rectangles."], "$6$"),
    ]
    comp = [
        ("sommets", "un cube", 8, "une pyramide à base carrée", 5),
        ("faces", "un cube", 6, "un tétraèdre", 4),
        ("arêtes", "un prisme droit à base hexagonale", 18, "un cube", 12),
        ("faces", "une pyramide à base hexagonale", 7, "une pyramide à base carrée", 5),
        ("sommets", "un prisme droit à base pentagonale", 10, "une pyramide à base pentagonale", 6),
        ("arêtes", "un cube", 12, "un prisme droit à base triangulaire", 9),
    ]
    T6 = []
    for quoi, n1, v1, n2, v2 in comp:
        q2 = "qu'" + n2
        de = "d'" if quoi[0] in "aeiouéèêh" else "de "
        T6.append(("approfondissement", "comparer", f"Combien {de}{quoi} de plus possède {n1} {q2} ?",
                   [f"{_maj(n1)} : ${v1}$ {quoi} ; {n2} : ${v2}$ {quoi}. Différence : ${v1} - {v2} = {v1 - v2}$."],
                   f"${v1 - v2}$"))
    E = _entrelacer(_rot(T1, off * 3), _rot(T3, off), _rot(T4, off), T2, _rot(T5, off), _rot(T6, off))
    return _fin(_uniq(E))

# ---------------------------------------------------------------- FIGURES PLANES
def r_figures(off=0):
    if off == 0:   # CP : figures usuelles seulement
        F = [("un", "triangle", 3), ("un", "carré", 4), ("un", "rectangle", 4),
             ("un", "pentagone", 5), ("un", "hexagone", 6)]
    else:
        F = [("un", "triangle", 3), ("un", "carré", 4), ("un", "rectangle", 4),
             ("un", "pentagone", 5), ("un", "hexagone", 6), ("un", "quadrilatère", 4),
             ("un", "octogone", 8), ("un", "losange", 4), ("un", "parallélogramme", 4),
             ("un", "heptagone", 7)]
    T1 = []
    for art, nom, n in F:
        T1.append(("application", "côtés", f"Combien de côtés possède {art} {nom} ?",
                   [f"{_maj(art)} {nom} a ${n}$ côtés."], f"${n}$"))
        T1.append(("application", "sommets", f"Combien de sommets possède {art} {nom} ?",
                   [f"Une figure a autant de sommets que de côtés : ${n}$."], f"${n}$"))
    noms_n = {3: "un triangle", 5: "un pentagone", 6: "un hexagone"}
    if off >= 1:
        noms_n.update({7: "un heptagone", 8: "un octogone"})
    T2 = []
    for n, nom in noms_n.items():
        T2.append(("intermediaire", "vocabulaire", f"Comment s'appelle une figure fermée à {n} côtés droits ?",
                   [f"Une figure à {n} côtés s'appelle {nom}."], nom))
    T2.append(("intermediaire", "vocabulaire", "Comment s'appelle une figure à 4 côtés égaux et 4 angles droits ?",
               ["4 côtés égaux et 4 angles droits : c'est un carré."], "un carré"))
    T2.append(("intermediaire", "vocabulaire",
               "Comment s'appelle une figure à 4 angles droits dont la longueur et la largeur sont différentes ?",
               ["4 angles droits, longueur et largeur différentes : c'est un rectangle."], "un rectangle"))
    T3 = [
        ("application", "angles-droits", "Combien d'angles droits possède un carré ?",
         ["Les 4 angles d'un carré sont droits."], "$4$"),
        ("application", "angles-droits", "Combien d'angles droits possède un rectangle ?",
         ["Les 4 angles d'un rectangle sont droits."], "$4$"),
        ("application", "cercle", "Combien de sommets possède un cercle ?",
         ["Un cercle est une ligne courbe : il n'a pas de sommet."], "$0$"),
        ("application", "cercle", "Un cercle a-t-il des côtés droits ?",
         ["Non : un cercle est une ligne courbe fermée."], "non"),
    ]
    T4 = []
    for art, nom, n in F[:5]:
        for k in (2, 3, 4):
            somme = " + ".join([str(n)] * k)
            T4.append(("intermediaire", "calcul", f"Combien de côtés y a-t-il en tout dans {k} {nom}s ?",
                       [f"Chaque {nom} a {n} côtés : ${somme} = {k * n}$."], f"${k * n}$"))
    T5 = []; T6 = []
    for (a1, n1, c1), (a2, n2, c2) in _comb(F, 2):
        T5.append(("intermediaire", "calcul", f"Combien de côtés y a-t-il en tout dans {a1} {n1} et {a2} {n2} ?",
                   [f"${c1} + {c2} = {c1 + c2}$."], f"${c1 + c2}$"))
        if c1 != c2:
            (ga, gn, gc), (pa, pn, pc) = ((a1, n1, c1), (a2, n2, c2)) if c1 > c2 else ((a2, n2, c2), (a1, n1, c1))
            T6.append(("intermediaire", "calcul", f"Combien de côtés de plus possède {ga} {gn} qu'{pa} {pn} ?",
                       [f"${gc} - {pc} = {gc - pc}$."], f"${gc - pc}$"))
    E = _entrelacer(T1, T4, T5, T2, T6, T3)
    return _fin(_uniq(E))

# ---------------------------------------------------------------- SYMETRIE AXIALE
def r_symetrie(off=0):
    FIG = [("un carré", 4), ("un rectangle (qui n'est pas un carré)", 2), ("un triangle équilatéral", 3),
           ("un losange (qui n'est pas un carré)", 2), ("un triangle isocèle non équilatéral", 1),
           ("un hexagone régulier", 6), ("un triangle quelconque", 0), ("un parallélogramme quelconque", 0),
           ("un pentagone régulier", 5), ("un triangle rectangle isocèle", 1),
           ("un trapèze isocèle (qui n'est pas un rectangle)", 1), ("un octogone régulier", 8),
           ("un cerf-volant (qui n'est pas un losange)", 1)]
    T1 = []
    for nom, n in FIG:
        mot = "axe" if n <= 1 else "axes"
        T1.append(("application", "axes-de-symétrie", f"Combien d'axes de symétrie possède {nom} ?",
                   [(f"{_maj(nom)} n'a aucun axe de symétrie." if n == 0 else f"{_maj(nom)} possède ${n}$ {mot} de symétrie.")], f"${n}$"))
    T1.append(("intermediaire", "axes-de-symétrie", "Combien d'axes de symétrie possède un cercle ?",
                ["Toute droite passant par le centre est un axe de symétrie : il y en a une infinité."],
                "une infinité"))
    LET = [("A", 1, "vertical"), ("H", 2, "un vertical et un horizontal"), ("M", 1, "vertical"),
           ("T", 1, "vertical"), ("U", 1, "vertical"), ("V", 1, "vertical"), ("W", 1, "vertical"),
           ("X", 2, "un vertical et un horizontal"), ("Y", 1, "vertical"), ("C", 1, "horizontal"),
           ("D", 1, "horizontal"), ("E", 1, "horizontal"),
           ("F", 0, ""), ("G", 0, ""), ("J", 0, ""), ("L", 0, ""), ("N", 0, ""),
           ("P", 0, ""), ("R", 0, ""), ("S", 0, ""), ("Z", 0, "")]
    T2 = []
    for L, n, sens in LET:
        if n == 0:
            cor = f"La lettre {L} n'a aucun axe de symétrie."
        elif n == 1:
            cor = f"La lettre {L} a un seul axe de symétrie, {sens}."
        else:
            cor = f"La lettre {L} a deux axes de symétrie : {sens}."
        T2.append(("intermediaire", "lettres",
                   f"En lettres capitales d'imprimerie, combien d'axes de symétrie possède la lettre {L} ?",
                   [cor], f"${n}$"))
    T3 = []
    paires = [("à gauche", "à droite", "vertical"), ("à droite", "à gauche", "vertical"),
              ("au-dessus", "au-dessous", "horizontal"), ("au-dessous", "au-dessus", "horizontal")]
    for n in range(1, 9):
        cx = "carreau" if n == 1 else "carreaux"
        for pos, sym, axe in paires:
            T3.append(("application", "quadrillage",
                       f"Sur un quadrillage, le point A est à {n} {cx} {pos} d'un axe de symétrie {axe}. Où se trouve son symétrique ?",
                       [f"Le symétrique est à la même distance de l'axe, de l'autre côté : {n} {cx} {sym}."],
                       f"à {n} {cx} {sym} de l'axe"))
    T4 = [
        ("application", "propriétés", "Une figure et sa symétrique ont-elles la même taille ?",
         ["Oui : la symétrie axiale conserve les longueurs."], "oui"),
        ("application", "propriétés", "Une figure et sa symétrique ont-elles la même forme ?",
         ["Oui : la symétrique est superposable à la figure par pliage."], "oui"),
        ("intermediaire", "propriétés", "Quel est le symétrique d'un point situé sur l'axe de symétrie ?",
         ["Un point de l'axe est son propre symétrique."], "le point lui-même"),
        ("intermediaire", "propriétés", "Une symétrie axiale conserve-t-elle les mesures des angles ?",
         ["Oui : elle conserve les longueurs et les angles."], "oui"),
    ]
    E = _entrelacer(_rot(T1, off * 2), _rot(T3, off * 5), _rot(T2, off * 3), T4)
    return _fin(_uniq(E))

# ---------------------------------------------------------------- CP : LE TEMPS QUI PASSE
def r_temps_cp():
    J = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
    M = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août",
         "septembre", "octobre", "novembre", "décembre"]
    S = ["le printemps", "l'été", "l'automne", "l'hiver"]
    T1 = []; T2 = []; T3 = []; T4 = []; T5 = []
    for i, j in enumerate(J):
        T1.append(("application", "jours", f"Quel jour vient après {j} ?",
                   [f"Après {j} vient {J[(i + 1) % 7]}."], J[(i + 1) % 7]))
        T1.append(("application", "jours", f"Quel jour vient avant {j} ?",
                   [f"Avant {j} vient {J[(i - 1) % 7]}."], J[(i - 1) % 7]))
    for i, m in enumerate(M):
        T2.append(("application", "mois", f"Quel mois vient après {m} ?",
                   [f"Après {m} vient {M[(i + 1) % 12]}."], M[(i + 1) % 12]))
    for i, s in enumerate(S):
        T3.append(("application", "saisons", f"Quelle saison vient après {s} ?",
                   [f"Après {s} vient {S[(i + 1) % 4]}."], S[(i + 1) % 4]))
    T3 += [
        ("application", "durées", "Combien de jours y a-t-il dans une semaine ?", ["Une semaine compte 7 jours."], "$7$"),
        ("application", "durées", "Combien de mois y a-t-il dans une année ?", ["Une année compte 12 mois."], "$12$"),
        ("application", "durées", "Combien de saisons y a-t-il dans une année ?", ["Il y a 4 saisons."], "$4$"),
        ("application", "durées", "Combien d'heures y a-t-il dans une journée entière ?", ["Une journée compte 24 heures."], "$24$"),
        ("application", "durées", "Combien de minutes y a-t-il dans une heure ?", ["Une heure compte 60 minutes."], "$60$"),
        ("application", "durées", "Combien de jours dure un week-end (samedi et dimanche) ?", ["Samedi et dimanche : 2 jours."], "$2$"),
        ("intermediaire", "durées", "Combien de jours y a-t-il dans 2 semaines ?", ["$7 + 7 = 14$."], "$14$"),
        ("intermediaire", "durées", "Combien de jours y a-t-il dans 3 semaines ?", ["$7 + 7 + 7 = 21$."], "$21$"),
    ]
    for h in range(1, 13):
        hs = "heure" if h == 1 else "heures"
        T4.append(("application", "lire-l-heure",
                   f"Sur l'horloge, la petite aiguille montre le {h} et la grande aiguille montre le 12. Quelle heure est-il ?",
                   [f"La grande aiguille sur le 12 indique une heure pile ; la petite aiguille indique {h} {hs}."],
                   f"{h} {hs}"))
    for h in (1, 3, 5, 7, 9, 10):
        hs = "heure" if h == 1 else "heures"
        T5.append(("intermediaire", "durées", f"Il est {h} {hs}. Quelle heure sera-t-il dans 1 heure ?",
                   [f"${h} + 1 = {h + 1}$."], f"{h + 1} heures"))
    E = _entrelacer(T1, T4, T2, T3, T5)
    return _fin(_uniq(E))

# ---------------------------------------------------------------- Tle : TRANSFORMATIONS NUCLEAIRES
_ELEM = {82: ("Pb", "plomb"), 84: ("Po", "polonium"), 86: ("Rn", "radon"), 88: ("Ra", "radium"),
         90: ("Th", "thorium"), 92: ("U", "uranium"), 93: ("Np", "neptunium"), 94: ("Pu", "plutonium"),
         95: ("Am", "américium"), 1: ("H", "hydrogène"), 2: ("He", "hélium"), 5: ("B", "bore"),
         6: ("C", "carbone"), 7: ("N", "azote"), 8: ("O", "oxygène"), 9: ("F", "fluor"),
         10: ("Ne", "néon"), 11: ("Na", "sodium"), 15: ("P", "phosphore"), 16: ("S", "soufre"),
         19: ("K", "potassium"), 20: ("Ca", "calcium"), 27: ("Co", "cobalt"), 28: ("Ni", "nickel"),
         38: ("Sr", "strontium"), 39: ("Y", "yttrium"), 53: ("I", "iode"), 54: ("Xe", "xénon"),
         55: ("Cs", "césium"), 56: ("Ba", "baryum")}

def _noyau(A, Z):
    s = _ELEM[Z][0]
    return f"$ ^{{{A}}}_{{{Z}}}\\mathrm{{{s}}} $"

def r_nucleaire():
    ALPHA = [(238, 92), (226, 88), (210, 84), (222, 86), (230, 90), (239, 94), (241, 95), (232, 90), (235, 92), (218, 84)]
    BM = [(14, 6), (60, 27), (90, 38), (131, 53), (3, 1), (137, 55), (32, 15), (40, 19)]
    BP = [(18, 9), (11, 6), (13, 7), (15, 8), (22, 11)]
    T1 = []; T2 = []; T3 = []; T4 = []; T5 = []
    for A, Z in ALPHA:
        n = _noyau(A, Z); fs, fn = _ELEM[Z - 2]
        rappel = "Désintégration alpha : émission d'un noyau d'hélium ; $A$ diminue de 4 et $Z$ de 2."
        T1.append(("application", "alpha", f"Désintégration alpha de {n}. Nombre de masse $A$ du noyau fils ?",
                   [rappel, f"$A = {A} - 4 = {A - 4}$."], f"$ {A - 4} $"))
        T1.append(("application", "alpha", f"Désintégration alpha de {n}. Numéro atomique $Z$ du noyau fils ?",
                   [rappel, f"$Z = {Z} - 2 = {Z - 2}$."], f"$ {Z - 2} $"))
        T1.append(("intermediaire", "alpha", f"Désintégration alpha de {n}. Quel est l'élément du noyau fils ?",
                   [rappel, f"$Z = {Z - 2}$ : c'est l'élément {fn} ({fs})."], f"{fn} ({fs})"))
    for A, Z in BM:
        n = _noyau(A, Z); fs, fn = _ELEM[Z + 1]
        rappel = "Désintégration bêta moins : émission d'un électron ; $A$ ne change pas et $Z$ augmente de 1."
        T2.append(("application", "beta-moins", f"Désintégration bêta moins de {n}. Numéro atomique $Z$ du noyau fils ?",
                   [rappel, f"$Z = {Z} + 1 = {Z + 1}$."], f"$ {Z + 1} $"))
        T2.append(("intermediaire", "beta-moins", f"Désintégration bêta moins de {n}. Quel est l'élément du noyau fils ?",
                   [rappel, f"$Z = {Z + 1}$ : c'est l'élément {fn} ({fs})."], f"{fn} ({fs})"))
    for A, Z in BM[:4]:
        n = _noyau(A, Z)
        T2.append(("application", "beta-moins", f"Désintégration bêta moins de {n}. Nombre de masse $A$ du noyau fils ?",
                   ["En désintégration bêta moins, le nombre de masse est conservé.", f"$A = {A}$."], f"$ {A} $"))
    for A, Z in BP:
        n = _noyau(A, Z); fs, fn = _ELEM[Z - 1]
        rappel = "Désintégration bêta plus : émission d'un positon ; $A$ ne change pas et $Z$ diminue de 1."
        T3.append(("application", "beta-plus", f"Désintégration bêta plus de {n}. Numéro atomique $Z$ du noyau fils ?",
                   [rappel, f"$Z = {Z} - 1 = {Z - 1}$."], f"$ {Z - 1} $"))
        T3.append(("intermediaire", "beta-plus", f"Désintégration bêta plus de {n}. Quel est l'élément du noyau fils ?",
                   [rappel, f"$Z = {Z - 1}$ : c'est l'élément {fn} ({fs})."], f"{fn} ({fs})"))
    T4 = [
        ("application", "cours", "Quelle particule est émise lors d'une désintégration alpha ?",
         ["Une particule alpha est un noyau d'hélium 4."], "un noyau d'hélium"),
        ("application", "cours", "Quelle particule est émise lors d'une désintégration bêta moins ?",
         ["La désintégration bêta moins émet un électron."], "un électron"),
        ("application", "cours", "Quelle particule est émise lors d'une désintégration bêta plus ?",
         ["La désintégration bêta plus émet un positon."], "un positon"),
        ("intermediaire", "cours", "Une émission gamma modifie-t-elle le nombre de masse ou le numéro atomique du noyau ?",
         ["Le rayonnement gamma est électromagnétique : $A$ et $Z$ sont inchangés."], "non"),
    ]
    for m0, k in [(80, 3), (64, 2), (96, 1), (200, 2), (160, 4), (120, 3), (400, 3), (48, 4), (360, 2), (640, 5)]:
        r = m0 // (2 ** k)
        T5.append(("intermediaire", "demi-vie",
                   f"Un échantillon contient ${m0}$ g d'un isotope radioactif. Quelle masse de cet isotope reste-t-il après ${k}$ demi-vie{'s' if k > 1 else ''} ?",
                   ["À chaque demi-vie, la quantité est divisée par 2.", f"${m0} \\div 2^{k} = {r}$ g."], f"$ {r} $ g"))
    for f, k in [(4, 2), (8, 3), (16, 4), (32, 5)]:
        T5.append(("approfondissement", "demi-vie",
                   f"Combien de demi-vies faut-il pour que la quantité d'un isotope radioactif soit divisée par ${f}$ ?",
                   [f"$2^{k} = {f}$ : il faut ${k}$ demi-vies."], f"$ {k} $"))
    E = _entrelacer(T1, T2, T5, T3, T4)
    return _fin(_uniq(E))

# ---------------------------------------------------------------- 4e : ORGANISATION DE LA MATIERE
_NOM_EL = {"H": ("d'", "hydrogène"), "O": ("d'", "oxygène"), "C": ("de ", "carbone"),
           "N": ("d'", "azote"), "Cl": ("de ", "chlore"), "S": ("de ", "soufre")}
_MOL = [
    ("l'eau", [("H", 2), ("O", 1)]), ("le dioxyde de carbone", [("C", 1), ("O", 2)]),
    ("le méthane", [("C", 1), ("H", 4)]), ("le dioxygène", [("O", 2)]),
    ("l'ammoniac", [("N", 1), ("H", 3)]), ("le dihydrogène", [("H", 2)]),
    ("le diazote", [("N", 2)]), ("le monoxyde de carbone", [("C", 1), ("O", 1)]),
    ("le chlorure d'hydrogène", [("H", 1), ("Cl", 1)]), ("l'éthane", [("C", 2), ("H", 6)]),
    ("le dioxyde de soufre", [("S", 1), ("O", 2)]), ("l'ozone", [("O", 3)]),
    ("le propane", [("C", 3), ("H", 8)]), ("le butane", [("C", 4), ("H", 10)]),
    ("le glucose", [("C", 6), ("H", 12), ("O", 6)]), ("l'éthanol", [("C", 2), ("H", 6), ("O", 1)]),
    ("le peroxyde d'hydrogène", [("H", 2), ("O", 2)]), ("le dioxyde d'azote", [("N", 1), ("O", 2)]),
]

def _formule(comp):
    s = ""
    for el, n in comp:
        if n == 1:
            s += el
        elif n < 10:
            s += f"{el}_{n}"
        else:
            s += f"{el}_{{{n}}}"
    return f"$ {s} $"

def _de(nom):
    # "de l'eau", "du méthane", "de la ..."
    if nom.startswith("le "):
        return "du " + nom[3:]
    return "de " + nom

def _mol(nom):
    # "une molecule d'eau", "une molecule de methane"
    for art in ("le ", "la ", "l'"):
        if nom.startswith(art):
            nom = nom[len(art):]
            break
    return ("d'" if nom[0] in "aeiouyéèêàâh" else "de ") + nom

def r_organisation():
    T1 = []; T2 = []; T3 = []; T4 = []
    for nom, comp in _MOL:
        f = _formule(comp)
        tot = sum(n for _, n in comp)
        detail = " + ".join(str(n) for _, n in comp)
        T1.append(("application", "compter-atomes", f"Combien d'atomes compte une molécule {_mol(nom)} ({f}) ?",
                   [f"On additionne les indices : ${detail} = {tot}$." if len(comp) > 1 else f"La formule indique ${tot}$ atomes."],
                   f"${tot}$"))
        T3.append(("application", "formules", f"Quelle est la formule chimique {_de(nom)} ?",
                   [f"La molécule {_mol(nom)} s'écrit {f}."], f))
        nel = len(comp)
        T4.append(("intermediaire", "éléments", f"Combien d'éléments chimiques différents y a-t-il dans {f} ?",
                   [f"Éléments présents : {', '.join(el for el, _ in comp)}."], f"${nel}$"))
        if len(comp) >= 2:
            for el, n in comp:
                art, nm = _NOM_EL[el]
                T2.append(("application", "compter-atomes",
                           f"Combien d'atomes {art}{nm} y a-t-il dans une molécule {_mol(nom)} ({f}) ?",
                           [f"L'indice de {el} vaut ${n}$." if n > 1 else f"{el} sans indice : un seul atome."],
                           f"${n}$"))
    T5 = [
        ("intermediaire", "cours", "Une molécule est-elle électriquement neutre ?",
         ["Oui : une molécule est un assemblage électriquement neutre d'atomes."], "oui"),
        ("approfondissement", "cours", "Le sel de cuisine (chlorure de sodium) est-il formé de molécules ?",
         ["Non : c'est un solide ionique, formé d'ions sodium et d'ions chlorure."], "non, il est formé d'ions"),
        ("intermediaire", "cours", "Que représente l'indice écrit en bas à droite d'un symbole dans une formule chimique ?",
         ["Il indique le nombre d'atomes de cet élément dans la molécule."], "le nombre d'atomes de cet élément"),
    ]
    E = _entrelacer(T1, T2, T3, T4, T5)
    return _fin(_uniq(E))

# ---------------------------------------------------------------- Tle : ACIDE-BASE, pH
def r_acide_base():
    T1 = []; T2 = []; T3 = []; T4 = []; T5 = []; T6 = []
    for n in range(1, 14):
        T1.append(("application", "calcul-pH",
                   f"Une solution a une concentration $ [H_3O^+] = 10^{{-{n}}} $ mol/L. Calculer son pH.",
                   ["$pH = -\\log [H_3O^+]$.", f"$pH = -\\log(10^{{-{n}}}) = {n}$."], f"$ pH = {n} $"))
        T2.append(("application", "concentration",
                   f"Une solution a un pH égal à ${n}$. Quelle est sa concentration en ions oxonium ?",
                   ["$[H_3O^+] = 10^{-pH}$.", f"$[H_3O^+] = 10^{{-{n}}}$ mol/L."], f"$ 10^{{-{n}}} $ mol/L"))
    for ph, txt in [("2", "acide"), ("3,5", "acide"), ("5", "acide"), ("6,2", "acide"), ("7", "neutre"),
                    ("8", "basique"), ("9,4", "basique"), ("11", "basique"), ("12,5", "basique"), ("13", "basique")]:
        T3.append(("application", "nature",
                   f"À 25 °C, une solution a un pH de {ph}. Est-elle acide, neutre ou basique ?",
                   ["À 25 °C : pH < 7 acide, pH = 7 neutre, pH > 7 basique."], txt))
    for ph in range(8, 14):
        T4.append(("intermediaire", "produit-ionique",
                   f"À 25 °C, une solution a un pH de ${ph}$. Quelle est la concentration $ [HO^-] $ ?",
                   ["À 25 °C, $[H_3O^+][HO^-] = 10^{-14}$.",
                    f"$[HO^-] = 10^{{-14}} / 10^{{-{ph}}} = 10^{{{ph - 14}}}$ mol/L."], f"$ 10^{{{ph - 14}}} $ mol/L"))
    for m in range(1, 7):
        T5.append(("intermediaire", "produit-ionique",
                   f"À 25 °C, une solution a une concentration $ [HO^-] = 10^{{-{m}}} $ mol/L. Calculer son pH.",
                   ["À 25 °C, $pH = 14 + \\log [HO^-]$.", f"$pH = 14 - {m} = {14 - m}$."], f"$ pH = {14 - m} $"))
    for ph0, fac, k in [(1, 10, 1), (2, 10, 1), (3, 10, 1), (1, 100, 2), (2, 100, 2)]:
        T6.append(("approfondissement", "dilution",
                   f"On dilue ${fac}$ fois une solution d'acide fort de pH ${ph0}$. Quel est le nouveau pH ?",
                   [f"Diluer {fac} fois divise $[H_3O^+]$ par $10^{k}$ : le pH augmente de ${k}$.",
                    f"$pH = {ph0} + {k} = {ph0 + k}$."], f"$ pH = {ph0 + k} $"))
    E = _entrelacer(T1, T3, T2, T4, T5, T6)
    return _fin(_uniq(E))

# ---------------------------------------------------------------- COMPLEMENTS (chapitres peu touches)
def _s_angles():
    out = []
    for a in [20, 25, 40, 50, 55, 65, 70, 80, 85, 95, 105, 110, 115, 125, 140, 145, 155, 165, 170, 175]:
        t = "aigu" if a < 90 else "obtus"
        out.append(("application", "nature-angle",
                    f"Un angle mesure ${a}^\\circ$. Est-il aigu, droit, obtus ou plat ?",
                    [(f"${a}^\\circ < 90^\\circ$ : l'angle est aigu." if a < 90 else f"$90^\\circ < {a}^\\circ < 180^\\circ$ : l'angle est obtus.")],
                    t))
    return out

def _s_dizaines():
    out = []
    for n in [14, 25, 36, 47, 58, 69, 71, 82, 93, 17, 29, 34]:
        out.append(("application", "unités", f"Combien d'unités y a-t-il dans {n} ?",
                    [f"{n} = {n // 10} dizaines et {n % 10} unités."], f"${n % 10}$"))
    for d, u in [(3, 4), (5, 2), (7, 9), (2, 6), (8, 1), (4, 7), (9, 3), (6, 5)]:
        out.append(("application", "composer", f"Quel nombre a {d} dizaines et {u} unités ?",
                    [f"${d} \\times 10 + {u} = {10 * d + u}$."], f"${10 * d + u}$"))
    return out

def _s_rep5():
    out = []
    for a, b, c in [(3, 4, 6), (2, 5, 7), (3, 5, 7), (2, 8, 5), (6, 6, 2), (4, 7, 2), (3, 3, 8), (5, 6, 2),
                    (9, 3, 2), (10, 5, 2), (12, 2, 3), (2, 3, 9), (5, 4, 4)]:
        v = a * b * c
        out.append(("application", "volume", f"Volume d'un pavé droit {a} x {b} x {c} (en cm) ?",
                    [f"$V = {a} \\times {b} \\times {c} = {v}$ cm³."], f"$ {v} $ cm³"))
    for a in range(2, 8):
        out.append(("intermediaire", "aire", f"Aire totale des faces d'un cube d'arête {a} cm ?",
                    [f"6 faces carrées : $6 \\times {a}^2 = {6 * a * a}$ cm²."], f"$ {6 * a * a} $ cm²"))
    out += [
        ("application", "unités", "Combien de cm³ y a-t-il dans 1 dm³ ?", ["$1$ dm³ $= 1000$ cm³."], "$ 1000 $"),
        ("application", "unités", "Combien de dm³ y a-t-il dans 1 m³ ?", ["$1$ m³ $= 1000$ dm³."], "$ 1000 $"),
        ("application", "unités", "Combien de dm³ y a-t-il dans 1 L ?", ["$1$ L $= 1$ dm³."], "$ 1 $"),
    ]
    return out

def _s_rep4():
    out = []
    for a, b, c in [(3, 4, 7), (2, 9, 5), (6, 4, 3), (8, 2, 5), (7, 3, 3), (5, 5, 4), (11, 2, 3), (4, 9, 2),
                    (6, 6, 3), (10, 3, 4), (2, 12, 2), (7, 5, 2)]:
        v = a * b * c
        out.append(("application", "volume", f"Volume d'un pavé droit de dimensions {a} cm, {b} cm et {c} cm ?",
                    [f"$V = {a} \\times {b} \\times {c} = {v}$ cm³."], f"$ {v} $ cm³"))
    for c, h in [(3, 4), (6, 5), (3, 7), (6, 2), (9, 1), (4, 6)]:
        v = c * c * h // 3
        out.append(("intermediaire", "pyramide",
                    f"Volume d'une pyramide à base carrée de côté {c} cm et de hauteur {h} cm ?",
                    ["$V = \\dfrac{\\text{aire de la base} \\times h}{3}$.",
                     f"$V = \\dfrac{{{c * c} \\times {h}}}{{3}} = {v}$ cm³."], f"$ {v} $ cm³"))
    return out

def _s_std2a():
    out = []
    for b, h in [(6, 4), (10, 3), (8, 5), (7, 4), (12, 5), (9, 6)]:
        out.append(("application", "aire-triangle", f"Aire d'un triangle de base {b} cm et de hauteur {h} cm ?",
                    [f"$A = \\dfrac{{{b} \\times {h}}}{{2}} = {b * h // 2}$ cm²."], f"$ {b * h // 2} $ cm²"))
    for L, l in [(7, 3), (9, 4), (11, 2), (6, 5), (8, 7), (10, 6)]:
        out.append(("application", "perimetre", f"Périmètre d'un rectangle de {L} cm sur {l} cm ?",
                    [f"$P = 2 \\times ({L} + {l}) = {2 * (L + l)}$ cm."], f"$ {2 * (L + l)} $ cm"))
    for b, h in [(7, 3), (9, 5)]:
        out.append(("application", "aire-parallelogramme", f"Aire d'un parallélogramme de base {b} cm et de hauteur {h} cm ?",
                    [f"$A = {b} \\times {h} = {b * h}$ cm²."], f"$ {b * h} $ cm²"))
    return out

def _s_tri5():
    out = []
    for a, b in [(36, 74), (25, 105), (48, 62), (15, 125), (52, 38), (64, 56), (110, 30), (27, 93), (41, 79), (33, 47)]:
        c = 180 - a - b
        out.append(("application", "somme-angles",
                    f"Dans un triangle, deux angles mesurent ${a}^\\circ$ et ${b}^\\circ$. Calculer le troisième.",
                    [f"La somme des angles vaut $180^\\circ$ : $180 - {a} - {b} = {c}$."], f"${c}^\\circ$"))
    for s in [40, 80, 100, 20, 120]:
        b = (180 - s) // 2
        out.append(("intermediaire", "isocèle",
                    f"Un triangle isocèle a un angle au sommet principal de ${s}^\\circ$. Combien mesure chaque angle à la base ?",
                    [f"Les angles à la base sont égaux : $(180 - {s}) \\div 2 = {b}$."], f"${b}^\\circ$"))
    return out

def _s_puis5():
    out = []
    for b, e in [(2, 4), (2, 5), (2, 6), (3, 3), (3, 4), (4, 3), (5, 3), (7, 2), (8, 2), (9, 2), (10, 3), (10, 4), (2, 7), (11, 2), (12, 2)]:
        out.append(("application", "puissances", f"Calculer ${b}^{e}$.",
                    [f"${b}^{e} = " + " \\times ".join([str(b)] * e) + f" = {b ** e}$."], f"${b ** e}$"))
    for b, e in [(3, 4), (5, 3), (7, 2), (2, 6), (4, 3), (6, 2), (9, 3), (8, 4), (11, 3), (2, 9)]:
        prod = " \\times ".join([str(b)] * e)
        out.append(("intermediaire", "écriture", f"Écrire ${prod}$ sous la forme d'une puissance.",
                    [f"Le nombre {b} est multiplié {e} fois par lui-même."], f"${b}^{e}$"))
    return out

def _s_calc2():
    out = []
    for n in [7, 8, 9, 11, 12, 13]:
        out.append(("application", "racines", f"Calculer $ \\sqrt{{{n * n}}} $.",
                    [f"${n}^2 = {n * n}$ donc $\\sqrt{{{n * n}}} = {n}$."], f"$ {n} $"))
    for n in [2, 3, 4]:
        dec = "0," + "0" * (n - 1) + "1"
        out.append(("application", "puissances-de-10", f"Écrire $ 10^{{-{n}}} $ sous forme décimale.",
                    [f"$10^{{-{n}}} = {dec.replace(',', '{,}')}$."], f"$ {dec.replace(',', '{,}')} $"))
    return out

def _s_reperage5():
    out = []
    for x, y in [(6, 2), (5, 8), (7, 3), (1, 9), (8, 6), (9, 4)]:
        out.append(("application", "ordonnée", f"Le point C a pour coordonnées $ ({x};{y}) $. Quelle est son ordonnée ?",
                    ["L'ordonnée est le second nombre du couple."], f"$ {y} $"))
    return out

def _s_exp():
    out = []
    for a, b in [(3, 4), (6, 1), (2, 7), (4, 4)]:
        out.append(("application", "exponentielle", f"Simplifier $ e^{{{a}}}\\times e^{{{b}}} $.",
                    [f"$e^a \\times e^b = e^{{a+b}}$ : $e^{{{a}}} \\times e^{{{b}}} = e^{{{a + b}}}$."], f"$ e^{{{a + b}}} $"))
    for a, b in [(5, 2), (7, 3), (9, 4)]:
        out.append(("application", "exponentielle", f"Simplifier $ \\dfrac{{e^{{{a}}}}}{{e^{{{b}}}}} $.",
                    [f"$\\dfrac{{e^a}}{{e^b}} = e^{{a-b}}$ : $e^{{{a - b}}}$."], f"$ e^{{{a - b}}} $"))
    for a, b in [(2, 3), (3, 2), (4, 2), (5, 3)]:
        out.append(("intermediaire", "exponentielle", f"Simplifier $ (e^{{{a}}})^{{{b}}} $.",
                    [f"$(e^a)^b = e^{{a \\times b}}$ : $e^{{{a * b}}}$."], f"$ e^{{{a * b}}} $"))
    return out

def _s_transfo():
    out = []
    for x, y in [(2, 6), (5, 1), (7, 4), (1, 8)]:
        out.append(("application", "symétrie-axiale", f"Symétrique de $ B({x};{y}) $ par rapport à l'axe des ordonnées ?",
                    ["Par rapport à l'axe des ordonnées, l'abscisse change de signe."], f"$ (-{x};{y}) $"))
    for x, y in [(3, 2), (6, 5), (4, 9)]:
        out.append(("intermediaire", "symétrie-centrale", f"Symétrique de $ C({x};{y}) $ par rapport à l'origine ?",
                    ["Par rapport à l'origine, les deux coordonnées changent de signe."], f"$ (-{x};-{y}) $"))
    return out

def _s_relatifs():
    out = []
    for a, b in [(-8, 3), (9, -12), (-7, -6)]:
        sa = f"(+{a})" if a >= 0 else f"({a})"
        sb = f"(+{b})" if b >= 0 else f"({b})"
        out.append(("application", "addition", f"Calculer ${sa} + {sb}$.",
                    [f"${sa} + {sb} = {a + b}$."], f"${a + b}$"))
    return out

def _wrap(fn, supp):
    return lambda: _completer(fn(), supp())

EXTRA.update({
    # reecritures
    ("ce1", "solides"): lambda: r_solides(0),
    ("ce2", "solides-et-patrons"): lambda: r_solides(1),
    ("cm2", "solides-et-patrons"): lambda: r_solides(2),
    ("cp", "formes-geometriques"): lambda: r_figures(0),
    ("ce1", "figures-planes"): lambda: r_figures(1),
    ("ce1", "symetrie-et-quadrillage"): lambda: r_symetrie(0),
    ("ce2", "symetrie-axiale"): lambda: r_symetrie(1),
    ("cm1", "symetrie-axiale"): lambda: r_symetrie(2),
    ("cm2", "symetrie-axiale"): lambda: r_symetrie(3),
    ("cp", "le-temps-qui-passe"): r_temps_cp,
    ("terminale", "transformations-nucleaires"): r_nucleaire,
    ("quatrieme", "organisation-matiere"): r_organisation,
    ("terminale", "acide-base-ph"): r_acide_base,
    # complements
    ("ce2", "angles-et-polygones"): _wrap(lambda: gp_angles(0), _s_angles),
    ("cm1", "angles"): _wrap(lambda: gp_angles(1), _s_angles),
    ("cm2", "angles-et-mesures"): _wrap(lambda: gp_angles(2), _s_angles),
    ("cp", "dizaines-et-unites"): _wrap(lambda: gp_dizaines(0), _s_dizaines),
    ("cinquieme", "representation-espace"): _wrap(g5_representation_espace, _s_rep5),
    ("quatrieme", "representation-espace"): _wrap(g4_representation_espace, _s_rep4),
    ("terminale-techno", "activites-geometriques-std2a"): _wrap(gT_activites_geometriques_std2a, _s_std2a),
    ("cinquieme", "triangles-angles"): _wrap(g5_triangles_angles, _s_tri5),
    ("cinquieme", "puissances"): _wrap(g5_puissances, _s_puis5),
    ("seconde", "calcul-numerique-algebrique"): _wrap(g2_calcul_numerique_algebrique, _s_calc2),
    ("cinquieme", "reperage"): _wrap(g5_reperage, _s_reperage5),
    ("terminale-techno", "fonctions-exponentielles"): _wrap(gT_fonctions_exponentielles, _s_exp),
    ("quatrieme", "transformations"): _wrap(g4_transformations, _s_transfo),
    ("cinquieme", "transformations"): _wrap(g5_transformations, _s_transfo),
    ("cinquieme", "nombres-relatifs"): _wrap(g5_relatifs, _s_relatifs),
})


# =====================================================================
#  v7 — RÉÉCRITURE DES CHAPITRES AUX VALEURS IRRÉALISTES
#  (eau chauffée de 190 °C, titrages à 38 mol/L, masses volumiques de
#   40 g/cm³, P_B(A) toujours égal à 1/2, RC à valeur unique…)
#  + remplacement des « remplissages » de vitesse par des situations réelles.
# =====================================================================
import re as _re7
from decimal import Decimal as _D

def _nb(x, sig=None, nd=None):
    """Nombre au format LaTeX français : virgule {,} et espace fine des milliers."""
    x = _D(str(x))
    if sig is not None and x != 0:
        x = round(x, sig - 1 - x.copy_abs().adjusted())
        s = format(x, "f")
    elif nd is not None:
        s = format(round(x, nd), "f")
    else:
        s = format(x.normalize(), "f")
        if "." in s: s = s.rstrip("0").rstrip(".")
    neg = s.startswith("-"); s = s.lstrip("-")
    ent, _, dec = s.partition(".")
    if len(ent) > 4:
        g = []
        while len(ent) > 3: g.insert(0, ent[-3:]); ent = ent[:-3]
        g.insert(0, ent); ent = "\\,".join(g)
    return ("-" if neg else "") + ent + ("{,}" + dec if dec else "")

def _sci(x, sig=2):
    """Écriture scientifique a × 10^n avec sig chiffres significatifs."""
    x = _D(str(x)); n = x.copy_abs().adjusted()
    m = (x / (_D(10) ** n))
    m = round(m, sig - 1)
    if abs(m) >= 10: m = m / 10; n += 1
    return f"{_nb(m, nd=sig-1)}\\times 10^{{{n}}}"

def _unite_t(s):
    """Durée (en s) dans l'unité la plus lisible."""
    s = _D(str(s))
    if s >= 1: return _nb(s, sig=3) if s < 100 else _nb(s), "s"
    if s >= _D("0.001"): return _nb(s * 1000, sig=3), "ms"
    return _nb(s * 1000000, sig=3), "µs"

# ---------------------------------------------------------------- Terminale : premier principe
def r_premier_principe():
    E = []
    def add(d, n, e, c, r): E.append((d, n, e, c, r))
    C_EAU = "c_{eau} = 4\\,180\\ \\mathrm{J\\cdot kg^{-1}\\cdot {}^{\\circ}C^{-1}}"
    for (m, dT) in [(1,10),(2,15),(0.5,20),(1.5,30),(2,40),(0.25,60),(3,25),(0.8,50),(1,75),(0.2,80),(4,10),(0.5,70)]:
        Q = _D(str(m)) * 4180 * dT
        add("application", "transfert-thermique",
            f"On chauffe ${_nb(m)}$ kg d'eau liquide de $20$ °C à ${20+dT}$ °C. Quelle énergie thermique $Q$ l'eau reçoit-elle ? On donne ${C_EAU}$.",
            [f"$ Q = m\\,c\\,\\Delta T = {_nb(m)}\\times 4\\,180\\times {dT} = {_nb(Q)} $ J, soit $ {_nb(Q/1000)} $ kJ."],
            f"$ Q = {_nb(Q)} $ J")
    for (mat, c, m, dT) in [("d'aluminium",900,0.5,40),("d'aluminium",900,2,30),("de fer",450,1,100),("de fer",450,0.2,50),
                            ("de cuivre",385,1,20),("de cuivre",385,0.5,80),("d'aluminium",900,0.1,200),("de fer",450,3,20)]:
        Q = _D(str(m)) * c * dT
        add("intermediaire", "transfert-thermique",
            f"Un bloc {mat} de masse ${_nb(m)}$ kg voit sa température augmenter de ${dT}$ °C. Énergie thermique reçue ? On prend $ c = {c}\\ \\mathrm{{J\\cdot kg^{{-1}}\\cdot {{}}^{{\\circ}}C^{{-1}}}} $.",
            [f"$ Q = m\\,c\\,\\Delta T = {_nb(m)}\\times {c}\\times {dT} = {_nb(Q)} $ J."],
            f"$ Q = {_nb(Q)} $ J")
    for (Q, m) in [(41800,1),(83600,2),(125400,1),(20900,0.5),(167200,2),(62700,0.5),(250800,3),(16720,0.2)]:
        dT = _D(Q) / (_D(str(m)) * 4180)
        add("intermediaire", "variation-temperature",
            f"Une masse de ${_nb(m)}$ kg d'eau reçoit $ Q = {_nb(Q)} $ J. De combien sa température augmente-t-elle ? (${C_EAU}$)",
            [f"$ \\Delta T = \\dfrac{{Q}}{{m\\,c}} = \\dfrac{{{_nb(Q)}}}{{{_nb(m)}\\times 4\\,180}} = {_nb(dT)} $ °C."],
            f"$ \\Delta T = {_nb(dT)} $ °C")
    for (Q, dT) in [(83600,20),(418000,50),(125400,60),(209000,25),(25080,30),(334400,40)]:
        m = _D(Q) / (4180 * dT)
        add("approfondissement", "masse",
            f"Pour élever de ${dT}$ °C la température d'une masse d'eau, il faut $ Q = {_nb(Q)} $ J. Quelle est cette masse ? (${C_EAU}$)",
            [f"$ m = \\dfrac{{Q}}{{c\\,\\Delta T}} = \\dfrac{{{_nb(Q)}}}{{4\\,180\\times {dT}}} = {_nb(m)} $ kg."],
            f"$ m = {_nb(m)} $ kg")
    for (W, Q) in [(200,300),(0,-150),(500,-200),(-100,400),(150,150),(-300,-100),(1200,-800),(-50,250)]:
        dU = W + Q
        add("application", "premier-principe",
            f"Un système fermé, macroscopiquement au repos, échange un travail $ W = {W} $ J et un transfert thermique $ Q = {Q} $ J. Variation de son énergie interne $ \\Delta U $ ?",
            [f"Premier principe : $ \\Delta U = W + Q = {W} + {Q if Q >= 0 else '(' + str(Q) + ')'} = {dU} $ J."],
            f"$ \\Delta U = {dU} $ J")
    for (P, t) in [(2000,60),(1500,120),(1000,90),(2200,150)]:
        Q = P * t
        add("intermediaire", "puissance",
            f"Une bouilloire de puissance $ P = {_nb(P)} $ W fonctionne pendant ${t}$ s. Énergie transférée à l'eau (sans pertes) ?",
            [f"$ Q = P\\times t = {_nb(P)}\\times {t} = {_nb(Q)} $ J."], f"$ Q = {_nb(Q)} $ J")
    for (Q, P) in [(334400,2000),(209000,1000)]:
        t = _D(Q) / P
        add("probleme", "puissance",
            f"Il faut $ Q = {_nb(Q)} $ J pour porter l'eau d'une bouilloire à ébullition. Sa puissance vaut $ {_nb(P)} $ W. Durée de chauffage (sans pertes) ?",
            [f"$ t = \\dfrac{{Q}}{{P}} = \\dfrac{{{_nb(Q)}}}{{{_nb(P)}}} = {_nb(t)} $ s."], f"$ t = {_nb(t)} $ s")
    add("application", "notions", "Quelle est l'unité de la capacité thermique massique $c$ ?",
        ["$c$ s'exprime en $ \\mathrm{J\\cdot kg^{-1}\\cdot K^{-1}} $ (ou $ \\mathrm{J\\cdot kg^{-1}\\cdot {}^{\\circ}C^{-1}} $, c'est équivalent pour un écart de température)."],
        "$ \\mathrm{J\\cdot kg^{-1}\\cdot K^{-1}} $")
    add("application", "notions", "Si $ Q > 0 $, le système reçoit-il ou cède-t-il de l'énergie thermique ?",
        ["Convention : une grandeur d'échange positive est reçue par le système."], "il la reçoit")
    add("intermediaire", "notions", "Pour un système incompressible (solide ou liquide) de masse $m$, que vaut $ \\Delta U $ ?",
        ["$ \\Delta U = m\\,c\\,\\Delta T = C\\,\\Delta T $, avec $ C = m\\,c $ la capacité thermique."], "$ \\Delta U = m\\,c\\,\\Delta T $")
    add("application", "notions", "Quels sont les trois modes de transfert thermique ?",
        ["Conduction (de proche en proche), convection (mouvement du fluide), rayonnement (ondes électromagnétiques)."],
        "conduction, convection, rayonnement")
    return _fin(E)

# ---------------------------------------------------------------- Terminale : titrages
def r_titrages():
    E = []
    def add(d, n, e, c, r): E.append((d, n, e, c, r))
    intro = "Titrage d'une solution A par une solution B, réaction support $ A + B \\to $ produits."
    for (cB, VE, VA) in [(0.100,12.0,10.0),(0.050,15.0,20.0),(0.020,18.0,10.0),(0.100,8.5,10.0),(0.010,25.0,20.0),(0.200,10.0,20.0),
                         (0.050,9.6,10.0),(0.100,14.2,20.0),(0.020,12.5,25.0),(0.150,10.0,15.0),(0.050,16.0,20.0),(0.100,21.0,20.0),
                         (0.100,17.4,20.0),(0.050,11.0,10.0),(0.020,9.0,10.0),(0.100,19.0,10.0),(0.010,15.0,10.0),(0.200,7.0,10.0)]:
        cA = _D(str(cB)) * _D(str(VE)) / _D(str(VA))
        add("application", "concentration",
            f"{intro} On titre $ V_A = {_nb(VA, nd=1)} $ mL de A par B à $ c_B = {_nb(cB, nd=3)} $ mol/L. Équivalence pour $ V_E = {_nb(VE, nd=1)} $ mL. Calculer $ c_A $.",
            [f"À l'équivalence : $ c_A V_A = c_B V_E $, donc $ c_A = \\dfrac{{c_B V_E}}{{V_A}} = \\dfrac{{{_nb(cB, nd=3)}\\times {_nb(VE, nd=1)}}}{{{_nb(VA, nd=1)}}} = {_nb(cA, sig=3)} $ mol/L."],
            f"$ c_A = {_nb(cA, sig=3)} $ mol/L")
    for (cA, VA, cB) in [(0.10,10,0.10),(0.050,20,0.10),(0.080,10,0.10),(0.12,20,0.20),(0.025,20,0.050),(0.060,25,0.10),(0.040,10,0.020),(0.15,10,0.10)]:
        VE = _D(str(cA)) * VA / _D(str(cB))
        add("intermediaire", "volume-equivalence",
            f"{intro} $ c_A = {_nb(cA, nd=3)} $ mol/L, $ V_A = {_nb(VA, nd=1)} $ mL, $ c_B = {_nb(cB, nd=3)} $ mol/L. Volume versé à l'équivalence $ V_E $ ?",
            [f"$ V_E = \\dfrac{{c_A V_A}}{{c_B}} = \\dfrac{{{_nb(cA, nd=3)}\\times {_nb(VA, nd=1)}}}{{{_nb(cB, nd=3)}}} = {_nb(VE, nd=1)} $ mL."],
            f"$ V_E = {_nb(VE, nd=1)} $ mL")
    for (cB, VE) in [(0.100,12.0),(0.050,18.0),(0.020,15.0),(0.200,9.5),(0.010,22.0),(0.10,7.5)]:
        n = _D(str(cB)) * _D(str(VE)) / 1000
        add("intermediaire", "quantite-matiere",
            f"Solution titrante à $ c_B = {_nb(cB, nd=3)} $ mol/L, équivalence à $ V_E = {_nb(VE, nd=1)} $ mL. Quantité de matière de B versée à l'équivalence ?",
            [f"$ n_B = c_B V_E = {_nb(cB, nd=3)}\\times {_nb(VE, nd=1)}\\times 10^{{-3}} = {_sci(n)} $ mol (penser à convertir les mL en L)."],
            f"$ n_B = {_sci(n)} $ mol")
    for (cB, VE, VA) in [(0.10,20.0,10.0),(0.050,16.0,20.0),(0.20,15.0,25.0),(0.10,12.0,10.0)]:
        cA = _D(str(cB)) * _D(str(VE)) / (2 * _D(str(VA)))
        add("approfondissement", "stoechiometrie",
            f"Réaction support $ A + 2\\,B \\to $ produits. $ V_A = {_nb(VA, nd=1)} $ mL de A sont titrés par B à $ c_B = {_nb(cB, nd=3)} $ mol/L ; $ V_E = {_nb(VE, nd=1)} $ mL. Calculer $ c_A $.",
            [f"À l'équivalence : $ n_A = \\dfrac{{n_B}}{{2}} $, donc $ c_A = \\dfrac{{c_B V_E}}{{2 V_A}} = {_nb(cA, sig=3)} $ mol/L."],
            f"$ c_A = {_nb(cA, sig=3)} $ mol/L")
    for (cA, M, nom) in [(0.0500,60,"d'acide éthanoïque"),(0.100,36.5,"de chlorure d'hydrogène"),(0.0200,40,"d'hydroxyde de sodium"),(0.150,60,"d'acide éthanoïque")]:
        cm = _D(str(cA)) * _D(str(M))
        add("approfondissement", "concentration-massique",
            f"Un titrage donne $ c = {_nb(cA, sig=3)} $ mol/L pour une solution {nom} ($ M = {_nb(M)} $ g/mol). Concentration en masse ?",
            [f"$ c_m = c\\times M = {_nb(cA, sig=3)}\\times {_nb(M)} = {_nb(cm, sig=3)} $ g/L."], f"$ c_m = {_nb(cm, sig=3)} $ g/L")
    Q = [
        ("application", "equivalence", "Que se passe-t-il à l'équivalence d'un titrage ?",
         ["Le réactif titré et le réactif titrant ont été introduits dans les proportions stœchiométriques : le réactif limitant change."],
         "les réactifs ont été introduits dans les proportions stœchiométriques"),
        ("intermediaire", "equivalence", "Avant l'équivalence, quel réactif est limitant ?",
         ["Chaque goutte de titrant versée est entièrement consommée : le titrant est limitant."], "le réactif titrant (versé)"),
        ("intermediaire", "equivalence", "Après l'équivalence, quel réactif est limitant ?",
         ["Le réactif titré a été entièrement consommé : c'est lui le limitant."], "le réactif titré"),
        ("application", "methodes", "Dans un titrage pH-métrique, comment repère-t-on l'équivalence ?",
         ["Au saut de pH : méthode des tangentes parallèles ou maximum de la dérivée $ \\dfrac{dpH}{dV} $."], "par le saut de pH"),
        ("application", "methodes", "Dans un titrage conductimétrique, comment repère-t-on l'équivalence ?",
         ["La courbe $ \\sigma = f(V) $ change de pente : l'équivalence est à l'intersection des deux droites."], "par le changement de pente"),
        ("intermediaire", "methodes", "Comment choisir un indicateur coloré pour un titrage acide-base ?",
         ["Sa zone de virage doit contenir le pH à l'équivalence."], "sa zone de virage contient le pH à l'équivalence"),
        ("application", "materiel", "Avec quelle verrerie verse-t-on la solution titrante ?",
         ["La burette graduée permet de lire le volume versé."], "une burette graduée"),
        ("application", "materiel", "Avec quelle verrerie prélève-t-on précisément le volume $ V_A $ à titrer ?",
         ["La pipette jaugée donne un volume précis."], "une pipette jaugée"),
        ("intermediaire", "equivalence", "Quelles qualités doit avoir la réaction support d'un titrage ?",
         ["Elle doit être totale, rapide et unique."], "totale, rapide et unique"),
        ("approfondissement", "methodes", "Vrai ou faux ? À l'équivalence d'un titrage acide-base, le pH vaut toujours 7.",
         ["Faux : c'est le cas (à 25 °C) pour un acide fort titré par une base forte, pas en général."], "Faux"),
    ]
    E.extend(Q)
    return _fin(E)

# ---------------------------------------------------------------- Terminale : dipôle RC
def r_dipole_rc():
    E = []
    def add(d, n, e, c, r): E.append((d, n, e, c, r))
    UR = {"Ω": 1, "kΩ": 10**3, "MΩ": 10**6}
    UC = {"mF": _D("1e-3"), "µF": _D("1e-6"), "nF": _D("1e-9")}
    PR = {"Ω": "", "kΩ": "k", "MΩ": "M"}
    PC = {"mF": ("", "m"), "µF": ("\\mu", ""), "nF": ("", "n")}
    def lr(v, u): return _nb(v) + "\\ \\mathrm{" + PR[u] + "\\Omega}"
    def lc(v, u): return _nb(v) + "\\ " + PC[u][0] + "\\mathrm{" + PC[u][1] + "F}"
    for (R, ur, C, uc) in [(10,"kΩ",100,"µF"),(1,"kΩ",1,"µF"),(4.7,"kΩ",10,"µF"),(100,"Ω",220,"µF"),(2.2,"kΩ",470,"µF"),
                           (10,"kΩ",10,"nF"),(1,"MΩ",1,"µF"),(47,"kΩ",2.2,"µF"),(100,"kΩ",100,"nF"),(220,"Ω",1,"mF"),
                           (5,"kΩ",200,"µF"),(3.3,"kΩ",100,"µF")]:
        tau = _D(str(R)) * UR[ur] * _D(str(C)) * UC[uc]
        v, u = _unite_t(tau)
        add("application", "constante-temps",
            f"Circuit RC avec $ R = {lr(R, ur)} $ et $ C = {lc(C, uc)} $. Calculer la constante de temps $ \\tau $.",
            [f"$ \\tau = R\\,C $ en unités SI : $ \\tau = {_nb(_D(str(R))*UR[ur])}\\times {_sci(_D(str(C))*UC[uc], 2)} = {v} $ {u}."],
            f"$ \\tau = {v} $ {u}")
    for (tau_s, R, ur, rep) in [("1",10,"kΩ","100\\ \\mu\\mathrm{F}"),("0.047",4.7,"kΩ","10\\ \\mu\\mathrm{F}"),("0.5",5,"kΩ","100\\ \\mu\\mathrm{F}"),
                                ("0.002",1,"kΩ","2\\ \\mu\\mathrm{F}"),("0.022",100,"Ω","220\\ \\mu\\mathrm{F}"),("0.01",100,"kΩ","100\\ \\mathrm{nF}")]:
        v, u = _unite_t(_D(tau_s))
        add("intermediaire", "capacite",
            f"Un dipôle RC a pour constante de temps $ \\tau = {v} $ {u} avec $ R = {lr(R, ur)} $. Capacité $ C $ du condensateur ?",
            [f"$ C = \\dfrac{{\\tau}}{{R}} = \\dfrac{{{_nb(_D(tau_s))}}}{{{_nb(_D(str(R))*UR[ur])}}} $ F, soit $ {rep} $."], f"$ C = {rep} $")
    for (tau_s, C, uc, rep) in [("1",100,"µF","10\\ \\mathrm{k\\Omega}"),("0.22",1,"mF","220\\ \\Omega"),("0.005",1,"µF","5\\ \\mathrm{k\\Omega}"),
                                ("3",1,"mF","3\\ \\mathrm{k\\Omega}"),("0.01",10,"µF","1\\ \\mathrm{k\\Omega}"),("0.47",100,"µF","4{,}7\\ \\mathrm{k\\Omega}")]:
        v, u = _unite_t(_D(tau_s))
        add("intermediaire", "resistance",
            f"Un dipôle RC a pour constante de temps $ \\tau = {v} $ {u} avec $ C = {lc(C, uc)} $. Résistance $ R $ ?",
            [f"$ R = \\dfrac{{\\tau}}{{C}} = \\dfrac{{{_nb(_D(tau_s))}}}{{{_sci(_D(str(C))*UC[uc], 2)}}} $ Ω, soit $ {rep} $."], f"$ R = {rep} $")
    for Eg in [5, 6, 9, 12, 10, 3]:
        u = _D("0.632") * Eg
        add("intermediaire", "charge",
            f"Un condensateur initialement déchargé se charge sous une tension $ E = {Eg} $ V. Que vaut $ u_C $ à la date $ t = \\tau $ ?",
            [f"$ u_C(\\tau) = E\\,(1 - e^{{-1}}) \\approx 0{{,}}63\\,E \\approx {_nb(u, sig=2)} $ V."], f"$ u_C(\\tau) \\approx {_nb(u, sig=2)} $ V")
    for Eg in [5, 10, 12, 6]:
        u = _D("0.368") * Eg
        add("approfondissement", "decharge",
            f"Un condensateur chargé sous $ E = {Eg} $ V se décharge dans une résistance. Que vaut $ u_C $ à la date $ t = \\tau $ ?",
            [f"$ u_C(\\tau) = E\\,e^{{-1}} \\approx 0{{,}}37\\,E \\approx {_nb(u, sig=2)} $ V."], f"$ u_C(\\tau) \\approx {_nb(u, sig=2)} $ V")
    for (R, ur, C, uc) in [(10,"kΩ",100,"µF"),(4.7,"kΩ",10,"µF"),(2,"kΩ",100,"µF"),(1,"kΩ",10,"µF"),(22,"kΩ",100,"µF")]:
        tau = _D(str(R)) * UR[ur] * _D(str(C)) * UC[uc]
        v1, u1 = _unite_t(tau); v5, u5 = _unite_t(5 * tau)
        add("intermediaire", "regime-permanent",
            f"$ R = {lr(R, ur)} $, $ C = {lc(C, uc)} $. Au bout de quelle durée considère-t-on le condensateur chargé ?",
            [f"$ \\tau = {v1} $ {u1} ; on considère la charge terminée (à plus de 99 %) au bout de $ 5\\tau = {v5} $ {u5}."], f"$ 5\\tau = {v5} $ {u5}")
    for (C, uc, U) in [(100,"µF",5),(10,"µF",12),(470,"µF",10),(1,"µF",9)]:
        q = _D(str(C)) * UC[uc] * U
        add("application", "charge-electrique",
            f"Un condensateur de capacité $ C = {lc(C, uc)} $ est chargé sous $ u_C = {U} $ V. Charge $ q $ de son armature positive ?",
            [f"$ q = C\\,u_C = {_sci(_D(str(C))*UC[uc], 2)}\\times {U} = {_sci(q, 2)} $ C."], f"$ q = {_sci(q, 2)} $ C")
    Q = [
        ("application", "notions", "Quelle est l'unité de la constante de temps $ \\tau = RC $ ?", ["$ \\Omega\\times\\mathrm{F} = \\mathrm{s} $ : c'est une durée."], "la seconde (s)"),
        ("intermediaire", "notions", "La tension aux bornes d'un condensateur peut-elle subir une discontinuité ?", ["Non : $ u_C $ est une fonction continue du temps (l'énergie stockée ne peut pas varier instantanément)."], "non, elle est continue"),
        ("application", "notions", "Quelle relation lie l'intensité $ i $ et la tension $ u_C $ d'un condensateur (convention récepteur) ?", ["$ i = \\dfrac{dq}{dt} = C\\,\\dfrac{du_C}{dt} $."], "$ i = C\\dfrac{du_C}{dt} $"),
        ("application", "notions", "Que vaut l'intensité du courant une fois le condensateur complètement chargé ?", ["$ u_C $ est constante, donc $ i = C\\,\\dfrac{du_C}{dt} = 0 $."], "$ i = 0 $ A"),
        ("intermediaire", "notions", "Si l'on double la résistance $ R $, comment varie $ \\tau $ ?", ["$ \\tau = RC $ est proportionnelle à $ R $ : elle double."], "elle double"),
        ("approfondissement", "equation", "Quelle équation différentielle vérifie $ u_C $ lors de la charge sous une tension $ E $ ?", ["Loi des mailles : $ E = Ri + u_C $ avec $ i = C\\dfrac{du_C}{dt} $."], "$ RC\\dfrac{du_C}{dt} + u_C = E $"),
        ("approfondissement", "equation", "Quelle est l'expression de $ u_C(t) $ lors de la charge (condensateur initialement déchargé) ?", ["Solution de $ RC\\,u_C' + u_C = E $ avec $ u_C(0) = 0 $."], "$ u_C(t) = E\\,(1 - e^{-t/\\tau}) $"),
        ("intermediaire", "methodes", "Comment déterminer $ \\tau $ graphiquement sur la courbe de charge $ u_C(t) $ ?", ["La tangente à l'origine coupe l'asymptote $ u_C = E $ à la date $ t = \\tau $ ; on peut aussi lire la date où $ u_C = 0{,}63\\,E $."], "tangente à l'origine ou lecture de $ 0{,}63\\,E $"),
    ]
    E.extend(Q)
    return _fin(E)

# ---------------------------------------------------------------- Terminale techno : probabilités conditionnelles
def r_proba_cond():
    E = []
    def add(d, n, e, c, r): E.append((d, n, e, c, r))
    P = lambda x: _nb(x)
    for (pab, pb) in [("0.12","0.4"),("0.1","0.5"),("0.06","0.3"),("0.18","0.6"),("0.05","0.25"),("0.2","0.8"),
                      ("0.15","0.5"),("0.28","0.7"),("0.09","0.36"),("0.24","0.4"),("0.35","0.5"),("0.08","0.2")]:
        r = _D(pab) / _D(pb)
        add("application", "conditionnelle",
            f"On donne $ P(A\\cap B) = {P(pab)} $ et $ P(B) = {P(pb)} $. Calculer $ P_B(A) $.",
            [f"$ P_B(A) = \\dfrac{{P(A\\cap B)}}{{P(B)}} = \\dfrac{{{P(pab)}}}{{{P(pb)}}} = {P(r)} $."], f"$ {P(r)} $")
    for (pa, pab_) in [("0.4","0.5"),("0.3","0.6"),("0.7","0.2"),("0.5","0.9"),("0.25","0.4"),("0.8","0.75"),("0.6","0.3"),("0.2","0.15"),("0.45","0.2"),("0.9","0.1")]:
        r = _D(pa) * _D(pab_)
        add("application", "intersection",
            f"On donne $ P(A) = {P(pa)} $ et $ P_A(B) = {P(pab_)} $. Calculer $ P(A\\cap B) $.",
            [f"$ P(A\\cap B) = P(A)\\times P_A(B) = {P(pa)}\\times {P(pab_)} = {P(r)} $."], f"$ {P(r)} $")
    for p in ["0.3","0.85","0.62","0.4","0.05","0.27"]:
        r = 1 - _D(p)
        add("application", "contraire",
            f"On sait que $ P_A(B) = {P(p)} $. Calculer $ P_A(\\overline{{B}}) $.",
            [f"$ P_A(\\overline{{B}}) = 1 - P_A(B) = 1 - {P(p)} = {P(r)} $."], f"$ {P(r)} $")
    for (a, b, c) in [("0.4","0.5","0.2"),("0.3","0.8","0.1"),("0.6","0.25","0.5"),("0.5","0.9","0.3"),
                      ("0.2","0.7","0.4"),("0.7","0.1","0.2"),("0.25","0.6","0.4"),("0.8","0.95","0.5")]:
        a_, b_, c_ = _D(a), _D(b), _D(c); na = 1 - a_
        r = a_ * b_ + na * c_
        add("intermediaire", "probabilites-totales",
            f"On donne $ P(A) = {P(a)} $, $ P_A(B) = {P(b)} $ et $ P_{{\\overline{{A}}}}(B) = {P(c)} $. Calculer $ P(B) $.",
            [f"Formule des probabilités totales : $ P(B) = P(A)\\,P_A(B) + P(\\overline{{A}})\\,P_{{\\overline{{A}}}}(B) = {P(a)}\\times {P(b)} + {P(na)}\\times {P(c)} = {P(r)} $."],
            f"$ {P(r)} $")
    for (N, nb, nab) in [(200,80,30),(500,150,60),(120,40,10),(300,90,27),(250,100,35),(400,160,48)]:
        f = Fraction(nab, nb)
        add("intermediaire", "tableau",
            f"Dans un lycée de {N} élèves, {nb} pratiquent un sport (événement $S$) et, parmi eux, {nab} sont internes (événement $I$). On choisit un sportif au hasard. Probabilité qu'il soit interne ?",
            [f"$ P_S(I) = \\dfrac{{{nab}}}{{{nb}}} = {frac_latex(f)} = {P(_D(f.numerator)/_D(f.denominator))} $."],
            f"$ {frac_latex(f)} $")
    for (pa, pb, pab) in [("0.5","0.4","0.2"),("0.3","0.6","0.2"),("0.25","0.8","0.2"),("0.7","0.5","0.3"),("0.6","0.5","0.3"),("0.4","0.45","0.2")]:
        prod = _D(pa) * _D(pb); ok = prod == _D(pab)
        add("approfondissement", "independance",
            f"$ P(A) = {P(pa)} $, $ P(B) = {P(pb)} $ et $ P(A\\cap B) = {P(pab)} $. Les événements $A$ et $B$ sont-ils indépendants ?",
            ["$ P(A)\\times P(B) = " + P(prod) + (" = " if ok else " \\neq ") + "P(A\\cap B) $ : ils " + ("sont" if ok else "ne sont pas") + " indépendants."],
            "oui" if ok else "non")
    for (a, b, c) in [("0.4","0.5","0.2"),("0.5","0.9","0.3")]:
        a_, b_, c_ = _D(a), _D(b), _D(c); pB = a_ * b_ + (1 - a_) * c_; r = a_ * b_ / pB
        add("probleme", "inversion",
            f"On donne $ P(A) = {P(a)} $, $ P_A(B) = {P(b)} $ et $ P_{{\\overline{{A}}}}(B) = {P(c)} $. Calculer $ P_B(A) $.",
            [f"$ P(B) = {P(a)}\\times {P(b)} + {P(1-a_)}\\times {P(c)} = {P(pB)} $.",
             f"$ P_B(A) = \\dfrac{{P(A\\cap B)}}{{P(B)}} = \\dfrac{{{P(a_*b_)}}}{{{P(pB)}}} = {P(r)} $."], f"$ {P(r)} $")
    return _fin(E)

# ---------------------------------------------------------------- 5e : masse volumique (valeurs réelles)
def r_masse_volumique():
    E = []
    def add(d, n, e, c, r): E.append((d, n, e, c, r))
    for (obj, V, m) in [("Un cube d'aluminium",10,27),("Une pièce de fer",20,158),("Un bloc de cuivre",10,89),("Un lingot d'or",5,"96.5"),
                        ("Un plomb de pêche",10,113),("Un volume d'huile",100,92),("Un volume d'eau",250,250),("Une médaille en argent",4,42),
                        ("Un glaçon",50,46),("Un volume d'éthanol",100,79)]:
        rho = _D(str(m)) / V
        add("application", "masse-volumique",
            f"{obj} a un volume de ${V}$ cm³ et une masse de ${_nb(m)}$ g. Quelle est sa masse volumique ?",
            [f"$ \\rho = \\dfrac{{m}}{{V}} = \\dfrac{{{_nb(m)}}}{{{V}}} = {_nb(rho)} $ g/cm³."], f"$ {_nb(rho)} $ g/cm³")
    for (mat, rho, V) in [("l'aluminium","2.7",100),("le fer","7.9",10),("le cuivre","8.9",20),("l'or","19.3",2),
                          ("l'huile","0.92",500),("l'eau","1",1500),("le plomb","11.3",5),("l'argent","10.5",10)]:
        m = _D(rho) * V
        add("intermediaire", "masse",
            f"La masse volumique de {mat} vaut ${_nb(rho)}$ g/cm³. Quelle est la masse de ${V}$ cm³ de ce matériau ?",
            [f"$ m = \\rho\\times V = {_nb(rho)}\\times {V} = {_nb(m)} $ g."], f"$ {_nb(m)} $ g")
    for (mat, rho, m) in [("d'aluminium","2.7",54),("de fer","7.9",395),("de cuivre","8.9",445),("d'or","19.3",193),("d'eau","1",750),("de plomb","11.3",226)]:
        V = _D(str(m)) / _D(rho)
        add("approfondissement", "volume",
            f"Quel volume occupent ${m}$ g {mat} ? (masse volumique : ${_nb(rho)}$ g/cm³)",
            [f"$ V = \\dfrac{{m}}{{\\rho}} = \\dfrac{{{m}}}{{{_nb(rho)}}} = {_nb(V)} $ cm³."], f"$ {_nb(V)} $ cm³")
    for (obj, rho) in [("Un morceau de bois de chêne","0.7"),("Un clou en fer","7.9"),("Un glaçon","0.92"),("Une bille d'aluminium","2.7"),
                       ("Un bouchon de liège","0.24"),("Un plomb de pêche","11.3"),("Un morceau de bougie (paraffine)","0.9"),("Une pièce en cuivre","8.9")]:
        flotte = _D(rho) < 1
        add("intermediaire", "flottaison",
            f"{obj} a une masse volumique de ${_nb(rho)}$ g/cm³. Cet objet flotte-t-il ou coule-t-il dans l'eau ($1$ g/cm³) ?",
            [f"$ {_nb(rho)} {'<' if flotte else '>'} 1 $ : il est {'moins' if flotte else 'plus'} dense que l'eau, donc il {'flotte' if flotte else 'coule'}."],
            "il flotte" if flotte else "il coule")
    tab = "aluminium : 2,7 ; fer : 7,9 ; cuivre : 8,9 ; plomb : 11,3 (en g/cm³)"
    for (m, V, nom) in [(135,50,"aluminium"),(316,40,"fer"),(178,20,"cuivre"),(226,20,"plomb"),(81,30,"aluminium"),(395,50,"fer")]:
        rho = _D(m) / V
        add("probleme", "identification",
            f"Un objet métallique a une masse de ${m}$ g et un volume de ${V}$ cm³. Avec le tableau ({tab}), de quel métal s'agit-il ?",
            [f"$ \\rho = \\dfrac{{{m}}}{{{V}}} = {_nb(rho)} $ g/cm³ : c'est la masse volumique du {nom}."], f"du {nom}")
    for (q, c, r) in [("Combien de cm³ y a-t-il dans 1 L ?", "$ 1 $ L $ = 1 $ dm³ $ = 1\\,000 $ cm³.", "$ 1\\,000 $ cm³"),
                      ("À combien de cm³ correspond 1 mL ?", "$ 1 $ mL $ = 1 $ cm³.", "$ 1 $ cm³"),
                      ("Quelle est la masse de 1 L d'eau ?", "$ 1\\,000 $ cm³ $ \\times 1 $ g/cm³ $ = 1\\,000 $ g.", "$ 1 $ kg"),
                      ("Combien de cm³ y a-t-il dans 2,5 L ?", "$ 2{,}5\\times 1\\,000 = 2\\,500 $ cm³.", "$ 2\\,500 $ cm³"),
                      ("Quelle est la masse de 1 m³ d'eau ?", "$ 1 $ m³ $ = 1\\,000 $ L et 1 L d'eau pèse 1 kg.", "$ 1\\,000 $ kg"),
                      ("Combien de litres y a-t-il dans 1 dm³ ?", "$ 1 $ dm³ $ = 1 $ L.", "$ 1 $ L"),
                      ("Convertir 1 g/cm³ en kg/m³.", "$ 1 $ g/cm³ $ = \\dfrac{0{,}001\\ \\text{kg}}{0{,}000\\,001\\ \\text{m}^3} = 1\\,000 $ kg/m³.", "$ 1\\,000 $ kg/m³"),
                      ("Quelle est la masse de 250 mL d'eau ?", "$ 250 $ mL $ = 250 $ cm³ et $ 1 $ cm³ d'eau pèse $ 1 $ g.", "$ 250 $ g")]:
        add("application", "conversions", q, [c], r)
    for (q, c, r) in [("Deux clous en fer, l'un petit, l'autre gros, ont-ils la même masse volumique ?", "La masse volumique dépend du matériau, pas de la taille de l'objet.", "oui"),
                      ("Avec quel instrument mesure-t-on une masse ?", "On utilise une balance.", "une balance"),
                      ("Avec quel instrument mesure-t-on précisément le volume d'un liquide ?", "On lit le volume au bas du ménisque.", "une éprouvette graduée"),
                      ("Comment mesurer le volume d'un caillou de forme irrégulière ?", "On le plonge dans une éprouvette graduée contenant de l'eau : le volume du caillou est la hausse du niveau.", "par déplacement d'eau dans une éprouvette graduée")]:
        add("application", "mesures", q, [c], r)
    return _fin(E)

# ---------------------------------------------------------------- Vitesse : remplacement des remplissages
_POOL_KMH = [
    ("application","vitesse","Un cycliste parcourt 36 km en 2 h. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{36}{2} = 18 $ km/h."],"$ 18 $ km/h"),
    ("application","vitesse","Une randonneuse parcourt 10 km en 2 h. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{10}{2} = 5 $ km/h."],"$ 5 $ km/h"),
    ("application","vitesse","Un TGV parcourt 600 km en 2 h. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{600}{2} = 300 $ km/h."],"$ 300 $ km/h"),
    ("application","vitesse","Un avion parcourt 1 800 km en 2 h. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{1\\,800}{2} = 900 $ km/h."],"$ 900 $ km/h"),
    ("application","vitesse","Un train parcourt 450 km en 3 h. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{450}{3} = 150 $ km/h."],"$ 150 $ km/h"),
    ("intermediaire","vitesse","Un coureur parcourt 21 km en 1 h 30 min. Quelle est sa vitesse moyenne ?",["$ 1 $ h $ 30 $ min $ = 1{,}5 $ h, donc $ v = \\dfrac{21}{1{,}5} = 14 $ km/h."],"$ 14 $ km/h"),
    ("intermediaire","vitesse","Une voiture parcourt 15 km en 30 min. Quelle est sa vitesse moyenne en km/h ?",["$ 30 $ min $ = 0{,}5 $ h, donc $ v = \\dfrac{15}{0{,}5} = 30 $ km/h."],"$ 30 $ km/h"),
    ("intermediaire","vitesse","Une moto parcourt 20 km en 15 min. Quelle est sa vitesse moyenne en km/h ?",["$ 15 $ min $ = 0{,}25 $ h, donc $ v = \\dfrac{20}{0{,}25} = 80 $ km/h."],"$ 80 $ km/h"),
    ("intermediaire","conversion","Convertir $ 10 $ m/s en km/h.",["$ 10 $ m/s $ = 10\\times 3{,}6 = 36 $ km/h."],"$ 36 $ km/h"),
    ("intermediaire","conversion","Convertir $ 72 $ km/h en m/s.",["$ 72 $ km/h $ = \\dfrac{72}{3{,}6} = 20 $ m/s."],"$ 20 $ m/s"),
    ("intermediaire","conversion","Convertir $ 5 $ m/s en km/h.",["$ 5\\times 3{,}6 = 18 $ km/h."],"$ 18 $ km/h"),
    ("intermediaire","conversion","Convertir $ 90 $ km/h en m/s.",["$ \\dfrac{90}{3{,}6} = 25 $ m/s."],"$ 25 $ m/s"),
    ("application","distance","Un bus roule à 40 km/h pendant 30 min. Quelle distance parcourt-il ?",["$ 30 $ min $ = 0{,}5 $ h : $ d = 40\\times 0{,}5 = 20 $ km."],"$ 20 $ km"),
    ("application","duree","Combien de temps faut-il pour parcourir 25 km à 50 km/h ?",["$ t = \\dfrac{25}{50} = 0{,}5 $ h, soit 30 min."],"30 min"),
    ("application","mouvement","Si la vitesse d'un objet reste constante, comment qualifie-t-on son mouvement ?",["La vitesse ne change pas : le mouvement est uniforme."],"uniforme"),
    ("application","mouvement","Une voiture freine : sa vitesse diminue. Comment qualifie-t-on son mouvement ?",["La vitesse diminue : le mouvement est ralenti."],"ralenti"),
    ("application","mouvement","Une fusée décolle : sa vitesse augmente. Comment qualifie-t-on son mouvement ?",["La vitesse augmente : le mouvement est accéléré."],"accéléré"),
    ("application","mouvement","La trajectoire d'un point de la roue d'une grande roue est un cercle. Comment qualifie-t-on ce mouvement ?",["La trajectoire est un cercle : le mouvement est circulaire."],"circulaire"),
    ("intermediaire","relativite","Un passager est assis dans un train qui roule. Est-il immobile par rapport au wagon ?",["Sa position ne change pas par rapport au wagon."],"oui, il est immobile"),
    ("intermediaire","relativite","Un passager est assis dans un train qui roule. Est-il immobile par rapport au quai ?",["Sa position change par rapport au quai : il est en mouvement."],"non, il est en mouvement"),
    ("application","trajectoire","Comment appelle-t-on l'ensemble des positions successives occupées par un objet ?",["C'est la définition de la trajectoire."],"la trajectoire"),
    ("application","trajectoire","Une bille roule en ligne droite. Comment qualifie-t-on son mouvement ?",["La trajectoire est une droite : mouvement rectiligne."],"rectiligne"),
]
_POOL_MS = [
    ("application","vitesse","Un sprinteur court 100 m en 10 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{100}{10} = 10 $ m/s."],"$ 10 $ m/s"),
    ("application","vitesse","Un cycliste parcourt 300 m en 25 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{300}{25} = 12 $ m/s."],"$ 12 $ m/s"),
    ("application","vitesse","Un nageur parcourt 50 m en 25 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{50}{25} = 2 $ m/s."],"$ 2 $ m/s"),
    ("application","vitesse","Une voiture parcourt 500 m en 20 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{500}{20} = 25 $ m/s."],"$ 25 $ m/s"),
    ("application","vitesse","Un train parcourt 1 200 m en 30 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{1\\,200}{30} = 40 $ m/s."],"$ 40 $ m/s"),
    ("application","vitesse","Une balle de tennis parcourt 24 m en 0,5 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{24}{0{,}5} = 48 $ m/s."],"$ 48 $ m/s"),
    ("application","vitesse","Un avion de ligne parcourt 2 500 m en 10 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{2\\,500}{10} = 250 $ m/s."],"$ 250 $ m/s"),
    ("application","vitesse","Un marcheur parcourt 150 m en 100 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{150}{100} = 1{,}5 $ m/s."],"$ 1{,}5 $ m/s"),
    ("application","vitesse","Un ascenseur monte de 30 m en 12 s. Quelle est sa vitesse moyenne ?",["$ v = \\dfrac{30}{12} = 2{,}5 $ m/s."],"$ 2{,}5 $ m/s"),
    ("intermediaire","vitesse","En 2009, Usain Bolt a couru 100 m en 9,58 s. Quelle a été sa vitesse moyenne ?",["$ v = \\dfrac{100}{9{,}58} \\approx 10{,}4 $ m/s."],"$ \\approx 10{,}4 $ m/s"),
    ("intermediaire","conversion","Convertir $ 15 $ m/s en km/h.",["$ 15\\times 3{,}6 = 54 $ km/h."],"$ 54 $ km/h"),
    ("intermediaire","conversion","Convertir $ 108 $ km/h en m/s.",["$ \\dfrac{108}{3{,}6} = 30 $ m/s."],"$ 30 $ m/s"),
    ("intermediaire","conversion","Convertir $ 25 $ m/s en km/h.",["$ 25\\times 3{,}6 = 90 $ km/h."],"$ 90 $ km/h"),
    ("intermediaire","conversion","Convertir $ 36 $ km/h en m/s.",["$ \\dfrac{36}{3{,}6} = 10 $ m/s."],"$ 10 $ m/s"),
    ("intermediaire","conversion","Convertir $ 340 $ m/s en km/h.",["$ 340\\times 3{,}6 = 1\\,224 $ km/h."],"$ 1\\,224 $ km/h"),
    ("intermediaire","conversion","Convertir $ 130 $ km/h en m/s (arrondir au dixième).",["$ \\dfrac{130}{3{,}6} \\approx 36{,}1 $ m/s."],"$ \\approx 36{,}1 $ m/s"),
    ("application","distance","Une voiture roule à 20 m/s pendant 15 s. Quelle distance parcourt-elle ?",["$ d = v\\times t = 20\\times 15 = 300 $ m."],"$ 300 $ m"),
    ("application","distance","Un coureur à 12 m/s pendant 50 s : quelle distance parcourt-il ?",["$ d = 12\\times 50 = 600 $ m."],"$ 600 $ m"),
    ("intermediaire","distance","Le son se propage à 340 m/s. Quelle distance parcourt-il en 4 s ?",["$ d = 340\\times 4 = 1\\,360 $ m."],"$ 1\\,360 $ m"),
    ("intermediaire","distance","La lumière se propage à $ 3{,}0\\times 10^8 $ m/s. Quelle distance parcourt-elle en 1 s ?",["$ d = 3{,}0\\times 10^8\\times 1 = 3{,}0\\times 10^8 $ m (300 000 km)."],"$ 3{,}0\\times 10^8 $ m"),
    ("intermediaire","duree","Combien de temps le son (340 m/s) met-il pour parcourir 1 700 m ?",["$ t = \\dfrac{d}{v} = \\dfrac{1\\,700}{340} = 5 $ s."],"$ 5 $ s"),
    ("intermediaire","duree","Combien de temps faut-il pour parcourir 400 m à 8 m/s ?",["$ t = \\dfrac{400}{8} = 50 $ s."],"$ 50 $ s"),
    ("approfondissement","duree","La lumière du Soleil parcourt $ 1{,}5\\times 10^{11} $ m à $ 3{,}0\\times 10^8 $ m/s. Durée du trajet ?",["$ t = \\dfrac{1{,}5\\times 10^{11}}{3{,}0\\times 10^8} = 500 $ s, soit environ 8 min 20 s."],"$ 500 $ s"),
    ("approfondissement","duree","Un TGV roule à 300 km/h. Combien de temps met-il pour parcourir 150 km ?",["$ t = \\dfrac{150}{300} = 0{,}5 $ h, soit 30 min."],"30 min"),
    ("application","mouvement","Sur une chronophotographie (intervalles de temps égaux), les points sont alignés et également espacés. Nature du mouvement ?",["Trajectoire droite et vitesse constante."],"rectiligne uniforme"),
    ("application","mouvement","Sur une chronophotographie (intervalles de temps égaux), les points alignés sont de plus en plus espacés. Nature du mouvement ?",["La distance parcourue pendant chaque intervalle augmente : la vitesse augmente."],"rectiligne accéléré"),
    ("application","mouvement","Sur une chronophotographie (intervalles de temps égaux), les points alignés sont de plus en plus rapprochés. Nature du mouvement ?",["La vitesse diminue."],"rectiligne ralenti"),
    ("intermediaire","relativite","Un passager assis dans un train qui roule est-il en mouvement par rapport au quai ?",["Sa position change par rapport au quai."],"oui"),
    ("intermediaire","relativite","Un passager assis dans un train qui roule est-il en mouvement par rapport à son siège ?",["Sa position ne change pas par rapport au siège : il est immobile dans ce référentiel."],"non"),
    ("application","trajectoire","Comment appelle-t-on l'ensemble des positions successives occupées par un point d'un objet ?",["C'est la définition de la trajectoire."],"la trajectoire"),
]
_POOL_SON = [
    ("application","vitesse-son","Dans l'eau, le son parcourt 3 000 m en 2 s. Quelle est sa vitesse ?",["$ v = \\dfrac{3\\,000}{2} = 1\\,500 $ m/s."],"$ 1\\,500 $ m/s"),
    ("application","vitesse-son","Dans l'acier, le son parcourt 10 000 m en 2 s. Quelle est sa vitesse ?",["$ v = \\dfrac{10\\,000}{2} = 5\\,000 $ m/s."],"$ 5\\,000 $ m/s"),
    ("intermediaire","orage","On entend le tonnerre 3 s après avoir vu l'éclair. À quelle distance est l'orage ? (son : 340 m/s)",["La lumière arrive quasi instantanément : $ d = 340\\times 3 = 1\\,020 $ m, environ 1 km."],"environ $ 1 $ km"),
    ("intermediaire","orage","On entend le tonnerre 6 s après avoir vu l'éclair. À quelle distance est l'orage ? (son : 340 m/s)",["$ d = 340\\times 6 = 2\\,040 $ m, environ 2 km."],"environ $ 2 $ km"),
    ("intermediaire","orage","On entend le tonnerre 9 s après l'éclair. À quelle distance est l'orage ? (son : 340 m/s)",["$ d = 340\\times 9 = 3\\,060 $ m, environ 3 km."],"environ $ 3 $ km"),
    ("approfondissement","echo","Un écho revient 2 s après le cri, face à une falaise. Distance de la falaise ? (son : 340 m/s)",["Le son fait l'aller-retour : $ 2d = 340\\times 2 $, donc $ d = 340 $ m."],"$ 340 $ m"),
    ("approfondissement","echo","Un écho revient 4 s après le cri. Distance de l'obstacle ? (son : 340 m/s)",["Aller-retour : $ d = \\dfrac{340\\times 4}{2} = 680 $ m."],"$ 680 $ m"),
    ("approfondissement","sonar","Un sonar reçoit l'écho du fond marin 0,8 s après l'émission. Profondeur ? (son dans l'eau : 1 500 m/s)",["Aller-retour : $ d = \\dfrac{1\\,500\\times 0{,}8}{2} = 600 $ m."],"$ 600 $ m"),
    ("approfondissement","sonar","Un sonar reçoit l'écho 2 s après l'émission. Profondeur ? (son dans l'eau : 1 500 m/s)",["$ d = \\dfrac{1\\,500\\times 2}{2} = 1\\,500 $ m."],"$ 1\\,500 $ m"),
    ("application","milieu","Le son peut-il se propager dans le vide ?",["Le son a besoin d'un milieu matériel (air, eau, solide) pour se propager."],"non"),
    ("application","milieu","La lumière peut-elle se propager dans le vide ?",["Oui : c'est ainsi que la lumière du Soleil nous parvient."],"oui"),
    ("application","milieu","Dans quel milieu le son est-il le plus rapide : l'air, l'eau ou l'acier ?",["Environ 340 m/s dans l'air, 1 500 m/s dans l'eau, 5 000 m/s dans l'acier."],"l'acier"),
    ("intermediaire","comparaison","Qui va le plus vite : le son dans l'air ou la lumière ?",["Lumière : $ 3\\times 10^8 $ m/s ; son : 340 m/s."],"la lumière"),
    ("application","lumiere","Quelle est la vitesse de la lumière dans le vide ?",["Valeur à connaître."],"$ 3\\times 10^8 $ m/s (300 000 km/s)"),
    ("intermediaire","lumiere","Combien de temps la lumière met-elle pour parcourir 300 000 km ?",["$ t = \\dfrac{300\\,000}{300\\,000} = 1 $ s."],"$ 1 $ s"),
    ("intermediaire","distance-son","Le son parcourt l'air à 340 m/s. Quelle distance parcourt-il en 0,5 s ?",["$ d = 340\\times 0{,}5 = 170 $ m."],"$ 170 $ m"),
    ("intermediaire","duree-son","Combien de temps le son met-il pour parcourir 1 020 m dans l'air (340 m/s) ?",["$ t = \\dfrac{1\\,020}{340} = 3 $ s."],"$ 3 $ s"),
    ("intermediaire","duree-son","Combien de temps le son met-il pour parcourir 4 500 m dans l'eau (1 500 m/s) ?",["$ t = \\dfrac{4\\,500}{1\\,500} = 3 $ s."],"$ 3 $ s"),
    ("application","frequence","Un son de fréquence 50 000 Hz est-il audible par l'être humain ?",["L'oreille humaine perçoit environ de 20 Hz à 20 000 Hz : c'est un ultrason."],"non, c'est un ultrason"),
    ("application","frequence","Un son de fréquence 10 Hz est-il audible par l'être humain ?",["En dessous de 20 Hz : c'est un infrason."],"non, c'est un infrason"),
    ("application","frequence","Quel est le domaine de fréquences audibles par l'être humain ?",["Valeurs usuelles."],"de 20 Hz à 20 000 Hz environ"),
    ("application","frequence","Quelle est l'unité de la fréquence ?",["Le hertz : nombre de vibrations par seconde."],"le hertz (Hz)"),
    ("intermediaire","vitesse-son","Le son parcourt 1 360 m dans l'air en 4 s. Quelle est sa vitesse ?",["$ v = \\dfrac{1\\,360}{4} = 340 $ m/s."],"$ 340 $ m/s"),
    ("intermediaire","vitesse-son","Dans l'eau, le son parcourt 750 m en 0,5 s. Quelle est sa vitesse ?",["$ v = \\dfrac{750}{0{,}5} = 1\\,500 $ m/s."],"$ 1\\,500 $ m/s"),
    ("application","emission","Que faut-il pour produire un son ?",["Un objet qui vibre (source sonore)."],"une source qui vibre"),
    ("application","reception","Quel organe reçoit les sons chez l'être humain ?",["L'oreille capte les vibrations de l'air."],"l'oreille"),
    ("intermediaire","danger","À partir de quel niveau sonore environ le son devient-il dangereux pour l'oreille ?",["Seuil de danger : environ 85 dB ; seuil de douleur : environ 120 dB."],"environ 85 dB"),
    ("application","unite","Avec quelle unité exprime-t-on le niveau sonore ?",["On le mesure avec un sonomètre."],"le décibel (dB)"),
    ("intermediaire","lumiere","La lumière du Soleil met environ 8 min pour nous parvenir. Combien de secondes cela fait-il ?",["$ 8\\times 60 = 480 $ s."],"$ 480 $ s"),
    ("intermediaire","comparaison","Pourquoi voit-on l'éclair avant d'entendre le tonnerre ?",["La lumière est environ un million de fois plus rapide que le son dans l'air."],"la lumière est bien plus rapide que le son"),
    ("approfondissement","echo","Une chauve-souris reçoit l'écho d'un insecte 0,02 s après son cri. Distance de l'insecte ? (son : 340 m/s)",["$ d = \\dfrac{340\\times 0{,}02}{2} = 3{,}4 $ m."],"$ 3{,}4 $ m"),
    ("approfondissement","echo","Un écho revient 1 s après le cri. Distance de l'obstacle ? (son : 340 m/s)",["$ d = \\dfrac{340\\times 1}{2} = 170 $ m."],"$ 170 $ m"),
]

def _remplace(fn, motif, pool):
    rx = _re7.compile(motif)
    def g():
        base = [(e["difficulte"], e["notion"], e["enonce"], e["corrige"], e["reponse"]) for e in fn() if not rx.match(e["enonce"])]
        vus = {t[2] for t in base}
        for t in pool:
            if len(base) >= 50: break
            if t[2] not in vus: base.append(t); vus.add(t[2])
        return _fin(base)
    return g

_RX_MS  = r"^\d+ m en \d+ s : vitesse \?$"
_RX_KMH = r"^\d+ km en \d+ h : vitesse \?$"
EXTRA.update({
    ("terminale", "premier-principe-thermique"): r_premier_principe,
    ("terminale", "titrages"): r_titrages,
    ("terminale", "dipole-rc"): r_dipole_rc,
    ("terminale-techno", "probabilites-conditionnelles"): r_proba_cond,
    ("cinquieme", "proprietes-matiere"): r_masse_volumique,
    ("cinquieme", "mouvement-vitesse"): _remplace(EXTRA[("cinquieme", "mouvement-vitesse")], _RX_KMH, _POOL_KMH),
    ("quatrieme", "mouvement-vitesse"): _remplace(EXTRA[("quatrieme", "mouvement-vitesse")], _RX_MS, _POOL_MS),
    ("seconde", "mouvement-interactions"): _remplace(EXTRA[("seconde", "mouvement-interactions")], _RX_MS, _POOL_MS),
    ("premiere", "mouvement-interactions"): _remplace(EXTRA[("premiere", "mouvement-interactions")], _RX_MS, _POOL_MS),
    ("terminale", "decrire-mouvement"): _remplace(EXTRA[("terminale", "decrire-mouvement")], _RX_MS, _POOL_MS),
    ("quatrieme", "propagation-signal"): _remplace(EXTRA[("quatrieme", "propagation-signal")], _RX_MS, _POOL_SON),
    ("cinquieme", "signaux-sonores-lumineux"): _remplace(EXTRA[("cinquieme", "signaux-sonores-lumineux")], _RX_MS, _POOL_SON),
})


# =====================================================================
#  v6 — COUCHE D'ACCENTUATION (appliquée à la sortie de chaque générateur)
#  Ne touche QUE le texte hors $...$ ; les mots déjà accentués sont intacts.
# =====================================================================
import re as _re_acc
_ACC_MOTS = {
"abaissee": "abaissée",
"absorbee": "absorbée",
"acceleration": "accélération",
"accelere": "accélère",
"acceleree": "accélérée",
"accelerer": "accélérer",
"alcene": "alcène",
"alcenes": "alcènes",
"aldehyde": "aldéhyde",
"aldehydes": "aldéhydes",
"allumee": "allumée",
"ampere": "ampère",
"antecedent": "antécédent",
"apparait": "apparaît",
"apres": "après",
"arete": "arête",
"aretes": "arêtes",
"arithmetique": "arithmétique",
"arretent": "arrêtent",
"branchee": "branchée",
"brisee": "brisée",
"calculee": "calculée",
"caracterise": "caractérise",
"caracteristique": "caractéristique",
"caracteristiques": "caractéristiques",
"carbonee": "carbonée",
"carre": "carré",
"carree": "carrée",
"celerite": "célérité",
"cetone": "cétone",
"cetones": "cétones",
"chaine": "chaîne",
"cinetique": "cinétique",
"cinetiques": "cinétiques",
"coloree": "colorée",
"comparee": "comparée",
"complementaire": "complémentaire",
"complementaires": "complémentaires",
"complete": "complète",
"completement": "complètement",
"completent": "complètent",
"composes": "composés",
"concentree": "concentrée",
"conductimetrie": "conductimétrie",
"conductivite": "conductivité",
"confere": "confère",
"consecutif": "consécutif",
"consecutifs": "consécutifs",
"consideree": "considérée",
"consommee": "consommée",
"constituees": "constituées",
"controle": "contrôle",
"coordonnee": "coordonnée",
"coordonnees": "coordonnées",
"cote": "côté",
"cotes": "côtés",
"coupee": "coupée",
"coutent": "coûtent",
"cree": "crée",
"creee": "créée",
"critere": "critère",
"debit": "débit",
"decantation": "décantation",
"decanter": "décanter",
"dechets": "déchets",
"decompose": "décompose",
"decomposer": "décomposer",
"decroit": "décroît",
"definit": "définit",
"definition": "définition",
"definitivement": "définitivement",
"dela": "delà",
"demarche": "démarche",
"denominateur": "dénominateur",
"denude": "dénudé",
"depasser": "dépasser",
"depend": "dépend",
"deplace": "déplace",
"deplacee": "déplacée",
"deplacement": "déplacement",
"deplacer": "déplacer",
"depose": "dépose",
"deposent": "déposent",
"depot": "dépôt",
"derivation": "dérivation",
"derivee": "dérivée",
"designe": "désigne",
"dessechant": "desséchant",
"detailler": "détailler",
"determiner": "déterminer",
"detruit": "détruit",
"deuxieme": "deuxième",
"developpee": "développée",
"developper": "développer",
"devisser": "dévisser",
"difference": "différence",
"different": "différent",
"differentes": "différentes",
"differents": "différents",
"diluee": "diluée",
"dioxygene": "dioxygène",
"disparait": "disparaît",
"donnee": "donnée",
"duree": "durée",
"ebullition": "ébullition",
"echantillon": "échantillon",
"echantillons": "échantillons",
"echelle": "échelle",
"eclairage": "éclairage",
"eco": "éco",
"economie": "économie",
"economiser": "économiser",
"ecoule": "écoule",
"ecrire": "écrire",
"ecrits": "écrits",
"ecriture": "écriture",
"egal": "égal",
"egale": "égale",
"egales": "égales",
"egaux": "égaux",
"electricite": "électricité",
"electrique": "électrique",
"electriques": "électriques",
"electrocution": "électrocution",
"element": "élément",
"elementaires": "élémentaires",
"elements": "éléments",
"eleves": "élèves",
"enchainement": "enchaînement",
"ene": "ène",
"energetique": "énergétique",
"energie": "énergie",
"eolienne": "éolienne",
"epuise": "épuise",
"epuisent": "épuisent",
"equation": "équation",
"equilateral": "équilatéral",
"equilibre": "équilibre",
"equivalence": "équivalence",
"equivalents": "équivalents",
"espece": "espèce",
"especes": "espèces",
"esperance": "espérance",
"etalee": "étalée",
"etalonnage": "étalonnage",
"etape": "étape",
"etapes": "étapes",
"etat": "état",
"eteindre": "éteindre",
"eteint": "éteint",
"etendue": "étendue",
"ethane": "éthane",
"ethanoique": "éthanoïque",
"ethanol": "éthanol",
"ethene": "éthène",
"etre": "être",
"etudie": "étudie",
"evalue": "évalue",
"evaporation": "évaporation",
"evapore": "évapore",
"evaporer": "évaporer",
"evenement": "événement",
"evite": "évite",
"evolue": "évolue",
"evolution": "évolution",
"extremite": "extrémité",
"facon": "façon",
"fermee": "fermée",
"fermees": "fermées",
"forcement": "forcément",
"formee": "formée",
"frequence": "fréquence",
"general": "général",
"generale": "générale",
"generalement": "généralement",
"generateur": "générateur",
"geometrique": "géométrique",
"grace": "grâce",
"gravite": "gravité",
"heterogene": "hétérogène",
"homogene": "homogène",
"hydrogene": "hydrogène",
"hydrogenes": "hydrogènes",
"hypotenuse": "hypoténuse",
"illimitee": "illimitée",
"indefiniment": "indéfiniment",
"independantes": "indépendantes",
"inferieur": "inférieur",
"insaturee": "insaturée",
"integration": "intégration",
"intensite": "intensité",
"interesse": "intéresse",
"interieur": "intérieur",
"intermediaire": "intermédiaire",
"inutilises": "inutilisés",
"isocele": "isocèle",
"isomeres": "isomères",
"lies": "liés",
"limitee": "limitée",
"lineaire": "linéaire",
"lumiere": "lumière",
"magnesium": "magnésium",
"materiau": "matériau",
"matiere": "matière",
"mecanique": "mécanique",
"mecanisme": "mécanisme",
"mediane": "médiane",
"melange": "mélange",
"melangent": "mélangent",
"meme": "même",
"memes": "mêmes",
"metal": "métal",
"metaux": "métaux",
"methane": "méthane",
"methodes": "méthodes",
"minerale": "minérale",
"mineraux": "minéraux",
"miscibilite": "miscibilité",
"moitie": "moitié",
"molecule": "molécule",
"molecules": "molécules",
"multiplicite": "multiplicité",
"necessaire": "nécessaire",
"necessite": "nécessite",
"negatif": "négatif",
"numerateurs": "numérateurs",
"ordonnee": "ordonnée",
"ordonnees": "ordonnées",
"oxygene": "oxygène",
"parallelogramme": "parallélogramme",
"parametre": "paramètre",
"parenthese": "parenthèse",
"particulieres": "particulières",
"pave": "pavé",
"percue": "perçue",
"perimetre": "périmètre",
"periode": "période",
"petrole": "pétrole",
"phenomene": "phénomène",
"photovoltaique": "photovoltaïque",
"pieces": "pièces",
"plutot": "plutôt",
"possede": "possède",
"possedent": "possèdent",
"precis": "précis",
"precisent": "précisent",
"precision": "précision",
"preleves": "prélevés",
"premiere": "première",
"present": "présent",
"presents": "présents",
"prevoir": "prévoir",
"prevoit": "prévoit",
"privilegie": "privilégie",
"probabilite": "probabilité",
"probabilites": "probabilités",
"propene": "propène",
"proportionnalite": "proportionnalité",
"proprietes": "propriétés",
"proteger": "protéger",
"purete": "pureté",
"quantite": "quantité",
"quantites": "quantités",
"reactif": "réactif",
"reactifs": "réactifs",
"reaction": "réaction",
"reactionnel": "réactionnel",
"reactions": "réactions",
"reagissent": "réagissent",
"reagit": "réagit",
"recupere": "récupéré",
"reduire": "réduire",
"reduit": "réduit",
"reduite": "réduite",
"reference": "référence",
"refrigerant": "réfrigérant",
"regenere": "régénéré",
"regle": "règle",
"reliee": "reliée",
"representation": "représentation",
"represente": "représente",
"reservoir": "réservoir",
"resoudre": "résoudre",
"resout": "résout",
"resultat": "résultat",
"retrouves": "retrouvés",
"revelateur": "révélateur",
"revele": "révèle",
"salee": "salée",
"sature": "saturé",
"saturee": "saturée",
"saturees": "saturées",
"seche": "sèche",
"selectifs": "sélectifs",
"selective": "sélective",
"selectivite": "sélectivité",
"sensibilite": "sensibilité",
"separant": "séparant",
"separation": "séparation",
"separe": "sépare",
"separees": "séparées",
"separer": "séparer",
"serie": "série",
"simplifiee": "simplifiée",
"solubilite": "solubilité",
"solute": "soluté",
"spectrophotometrie": "spectrophotométrie",
"spontane": "spontané",
"spontanee": "spontanée",
"spontanement": "spontanément",
"strategie": "stratégie",
"sucree": "sucrée",
"superieur": "supérieur",
"supplementaire": "supplémentaire",
"supplementaires": "supplémentaires",
"symetrique": "symétrique",
"synthese": "synthèse",
"systeme": "système",
"systemes": "systèmes",
"tabulee": "tabulée",
"temperature": "température",
"tetravalent": "tétravalent",
"theoreme": "théorème",
"traversee": "traversée",
"tres": "très",
"troisieme": "troisième",
"unite": "unité",
"unites": "unités",
"vehicule": "véhicule",
"verifier": "vérifier",
"zeros": "zéros"
}

# Corrections dépendant du contexte (participes, à/où, dé) — appliquées avant les mots.
_ACC_PHRASES = [
    (r"\bD'ou\b", "D'où"),
    (r"\bcarbonyle porte par\b", "carbonyle porté par"),
    (r"\best forme puis\b", "est formé puis"),
    (r"\bde le\b", "du"),
    (r"\b([Dd])e (ar[eê]tes)\b", r"\1'\2"),
    (r"\bêtre utilise\b", "être utilisé"),
    (r"\bune grande K\b", "une grande valeur de K"),
    (r"\bun de a 6\b", "un dé à 6"),
    (r"\balcane a n\b", "alcane à n"),
    (r"= K a l'", "= K à l'"),
    (r"\best epuise\b", "est épuisé"),
    (r"\bfortement deplace\b", "fortement déplacé"),
    (r"\bsont branches\b", "sont branchés"),
    (r"\b(est|etre|non|puis) consomme\b", r"\1 consommé"),
    (r"\best constitue\b", "est constitué"),
    (r"\binstant donne\b", "instant donné"),
    (r"\b(circuit|electrique) ferme\b", r"\1 fermé"),
    (r"\best gradue\b", "est gradué"),
    (r"\bdoublement lie\b", "doublement lié"),
    (r"\bliquide passe a travers\b", "liquide passé à travers"),
    (r"\best retire\b", "est retiré"),
    (r"\best traverse par\b", "est traversé par"),
    (r"\bl'oppose\b", "l'opposé"),
    (r"\b(circuit|equilibre) ou les\b", r"\1 où les"),
    (r"\bcatalyse ou ils\b", "catalyse où ils"),
    (r"\bsolvant ou elle\b", "solvant où elle"),
]
_ACC_PREV = set("""rapport egal egale egaux egales inferieur superieur inferieure superieure reliee relie lie necessaire
convient conduit sert consiste proportionnelle correspond identique confere aident cherche vise grace contrairement
comparee comparaison poursuivent interesse ampoule montage chauffage dissolution cristallisation fusion kg km h
article absorbe ecrits liquide phases uns constituants pure creee seulement est et secondes concentrations equation
absorbance avancement forme angle angles lié""".split())
_ACC_NEXT = set("""partir travers chaud froid reflux decanter peser purifier separer proteger limiter determiner laisser
base vitesse quoi""".split())
_ACC_NOVERB = {"qui","il","elle","on","y","ne","n'y"}

def _acc_a(t):
    toks = t.split(" ")
    for i, w in enumerate(toks):
        if w not in ("a", "A"):
            continue
        prev = toks[i-1] if i > 0 else ""
        nxt = toks[i+1] if i+1 < len(toks) else ""
        pc = _re_acc.sub(r"[^\w']", "", prev).lower(); pc = pc[2:] if pc.startswith("l'") else pc
        nc = _re_acc.sub(r"[^\w']", "", nxt).lower()
        if w == "A":
            debut = (i == 0) or prev.endswith((".", "?", "!", ":")) and prev != "§"
            if debut and (nc.startswith("l'") or nc in ("la","temperature","pression","quelle","quel","quoi") or nc.isdigit()):
                toks[i] = "À"
            continue
        if pc in _ACC_NOVERB or (len(prev) == 1 and prev.isupper()):
            continue
        if (nc.startswith("l'") or nc == "la" or pc in _ACC_PREV or nc in _ACC_NEXT
                or (pc.replace(",", "").isdigit() and nc.replace(",", "").isdigit())):
            toks[i] = "à"
    return " ".join(toks)

def _acc_mot(mo):
    w = mo.group(0); r = _ACC_MOTS.get(w.lower())
    if r is None: return w
    return r[0].upper() + r[1:] if w[0].isupper() else r

def _acc_texte(t):
    if not isinstance(t, str): return t
    morceaux = _re_acc.split(r"(\$[^$]*\$)", t)
    for j in range(0, len(morceaux), 2):
        s = morceaux[j]
        for pat, rep in _ACC_PHRASES:
            s = _re_acc.sub(pat, rep, s)
        s = _acc_a(s)
        s = _re_acc.sub(r"(?<![\w\\])[A-Za-z]+(?![\w])", _acc_mot, s)
        morceaux[j] = s
    return "".join(morceaux)

def _acc_un(e):
    e = dict(e)
    for c in ("enonce", "reponse"):
        if c in e: e[c] = _acc_texte(e[c])
    e["corrige"] = [_acc_texte(x) for x in e.get("corrige", [])]
    return e

def _acc_wrap(fn):
    def g():
        out = [_acc_un(e) for e in fn()]
        vus, doublons = set(), []
        for i, e in enumerate(out):
            if e["enonce"] in vus: doublons.append(i)
            vus.add(e["enonce"])
        # Deux énoncés devenus identiques après accentuation (« troisieme » / « troisième ») :
        # on remplace le second par un énoncé neuf de même difficulté.
        essais = 0
        while doublons and essais < 30:
            essais += 1
            for e in (_acc_un(x) for x in fn()):
                if not doublons: break
                i = doublons[0]
                if e["enonce"] not in vus and e["difficulte"] == out[i]["difficulte"]:
                    e["id"] = out[i]["id"]; out[i] = e; vus.add(e["enonce"]); doublons.pop(0)
        return out
    return g

EXTRA = {k: _acc_wrap(f) for k, f in EXTRA.items()}
