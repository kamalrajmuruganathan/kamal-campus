# -*- coding: utf-8 -*-
"""Moteur de generation d'exercices (Python pur, reponses calculees).
Lot 1 : 3e maths — triangles, puissances, nombres-rationnels, calcul-litteral."""
import json, math, os, glob
from fractions import Fraction

# ---------------- helpers ----------------
def fr(x, dec=2):
    r = round(x, dec)
    s = str(int(round(r))) if abs(r-round(r)) < 1e-9 else f"{r:.{dec}f}".rstrip('0').rstrip('.')
    return s.replace('.', ',')

def fr1(x):
    """Arrondi au dixième, zéro final conservé (22,0)."""
    return f"{x:.1f}".replace('.', ',')

def simplifie_racine(n):
    a, b, i = 1, n, 2
    while i*i <= b:
        while b % (i*i) == 0: b //= i*i; a *= i
        i += 1
    return a, b

def rac_latex(n):
    r = math.isqrt(n)
    if r*r == n: return str(r)
    a, b = simplifie_racine(n)
    if a == 1: return f"\\sqrt{{{n}}} \\approx {fr(math.sqrt(n))}"
    ex = f"{a}\\sqrt{{{b}}}"
    return f"\\sqrt{{{n}}} = {ex} \\approx {fr(math.sqrt(n))}"

def frac_latex(f):
    f = Fraction(f)
    if f.denominator == 1: return str(f.numerator)
    signe = "-" if f < 0 else ""
    return f"{signe}\\dfrac{{{abs(f.numerator)}}}{{{abs(f.denominator)}}}"

def poly_latex(coeffs):
    """coeffs: liste de (coefficient, degre). Rend un polynome LaTeX propre."""
    parts = []
    for c, d in coeffs:
        if c == 0: continue
        mono = "" if d == 0 else ("x" if d == 1 else f"x^{d}")
        ac = abs(c)
        if d == 0: terme = f"{ac}"
        elif ac == 1: terme = mono
        else: terme = f"{ac}{mono}"
        parts.append(("-" if c < 0 else "+", terme))
    if not parts: return "0"
    s = ("-" if parts[0][0] == "-" else "") + parts[0][1]
    for sign, terme in parts[1:]:
        s += f" {sign} {terme}"
    return s

def exo(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion,
            "enonce": enonce, "corrige": list(corrige), "reponse": reponse}

# ---------------- TRIANGLES (3e) ----------------
def gen_triangles():
    E = []
    def add(diff, notion, en, co, rep): E.append((diff, notion, en, co, rep))
    for (a,b,d) in [(3,4,"application"),(6,8,"application"),(5,12,"intermediaire"),(8,15,"intermediaire"),(2,3,"approfondissement"),(4,7,"approfondissement")]:
        n=a*a+b*b; r=math.isqrt(n)
        rep=f"$\\mathrm{{BC}} = {r}$ cm" if r*r==n else f"$\\mathrm{{BC}} = {rac_latex(n)}$ cm"
        add(d,"theoreme-pythagore",
            f"$\\mathrm{{ABC}}$ est rectangle en $\\mathrm{{A}}$ avec $\\mathrm{{AB}} = {a}$ cm et $\\mathrm{{AC}} = {b}$ cm. Calculer $\\mathrm{{BC}}$.",
            [f"Le triangle est rectangle en $\\mathrm{{A}}$ : d'après le théorème de Pythagore, $\\mathrm{{BC}}^2 = \\mathrm{{AB}}^2 + \\mathrm{{AC}}^2$.",
             f"$\\mathrm{{BC}}^2 = {a}^2 + {b}^2 = {a*a} + {b*b} = {n}$.",
             f"Donc $\\mathrm{{BC}} = \\sqrt{{{n}}}" + (f" = {r}$ cm." if r*r==n else f" \\approx {fr(math.sqrt(n))}$ cm.")], rep)
    for (h,a,d) in [(5,3,"application"),(13,5,"application"),(10,6,"intermediaire"),(25,7,"intermediaire"),(6,4,"approfondissement"),(9,5,"approfondissement")]:
        n=h*h-a*a; r=math.isqrt(n)
        rep=f"$\\mathrm{{DF}} = {r}$ cm" if r*r==n else f"$\\mathrm{{DF}} = {rac_latex(n)}$ cm"
        add(d,"theoreme-pythagore",
            f"$\\mathrm{{DEF}}$ est rectangle en $\\mathrm{{D}}$. $\\mathrm{{EF}} = {h}$ cm (hypoténuse) et $\\mathrm{{DE}} = {a}$ cm. Calculer $\\mathrm{{DF}}$.",
            [f"D'après Pythagore, $\\mathrm{{EF}}^2 = \\mathrm{{DE}}^2 + \\mathrm{{DF}}^2$.",
             f"$\\mathrm{{DF}}^2 = {h}^2 - {a}^2 = {h*h} - {a*a} = {n}$.",
             f"Donc $\\mathrm{{DF}} = \\sqrt{{{n}}}" + (f" = {r}$ cm." if r*r==n else f" \\approx {fr(math.sqrt(n))}$ cm.")], rep)
    for (x,y,z,d) in [(6,8,10,"application"),(5,12,13,"intermediaire"),(9,12,15,"intermediaire"),(4,5,6,"approfondissement"),(7,8,11,"approfondissement"),(8,15,17,"application")]:
        p,q,r=sorted([x,y,z]); g=r*r; s=p*p+q*q; rect=(g==s); sg="=" if rect else "\\neq"
        add(d,"reciproque-pythagore",
            f"Un triangle a pour côtés {x} cm, {y} cm et {z} cm. Est-il rectangle ? Justifier.",
            [f"Le plus grand côté mesure {r} cm. On calcule ${r}^2 = {g}$ et ${p}^2 + {q}^2 = {s}$.",
             f"On compare : ${g} {sg} {s}$.",
             "Égalité vérifiée : d'après la réciproque de Pythagore, le triangle est rectangle." if rect else "Pas d'égalité : le triangle n'est pas rectangle."],
            "Oui, il est rectangle." if rect else "Non, il n'est pas rectangle.")
    for (am,ab,ac,d) in [(4,10,15,"application"),(3,9,12,"application"),(5,15,9,"intermediaire"),(6,8,12,"intermediaire"),(4,6,9,"approfondissement"),(2,5,20,"approfondissement"),(6,10,25,"intermediaire")]:
        an=am*ac/ab
        add(d,"theoreme-thales",
            f"Dans $\\mathrm{{ABC}}$, $\\mathrm{{M}} \\in [\\mathrm{{AB}}]$, $\\mathrm{{N}} \\in [\\mathrm{{AC}}]$ et $(\\mathrm{{MN}}) \\parallel (\\mathrm{{BC}})$. On donne $\\mathrm{{AM}} = {am}$, $\\mathrm{{AB}} = {ab}$, $\\mathrm{{AC}} = {ac}$ (cm). Calculer $\\mathrm{{AN}}$.",
            [f"Comme $(\\mathrm{{MN}}) \\parallel (\\mathrm{{BC}})$, le théorème de Thalès donne $\\dfrac{{\\mathrm{{AM}}}}{{\\mathrm{{AB}}}} = \\dfrac{{\\mathrm{{AN}}}}{{\\mathrm{{AC}}}}$.",
             f"$\\dfrac{{{am}}}{{{ab}}} = \\dfrac{{\\mathrm{{AN}}}}{{{ac}}}$, donc $\\mathrm{{AN}} = \\dfrac{{{am} \\times {ac}}}{{{ab}}} = {fr(an)}$ cm."],
            f"$\\mathrm{{AN}} = {fr(an)}$ cm")
    for (am,ab,an,ac,d) in [(3,9,4,12,"application"),(4,10,6,15,"intermediaire"),(2,6,3,8,"approfondissement"),(5,8,10,16,"intermediaire"),(3,7,5,11,"approfondissement"),(4,6,6,9,"application"),(2,5,4,10,"application")]:
        f1=Fraction(am,ab); f2=Fraction(an,ac); para=(f1==f2); sg="=" if para else "\\neq"
        add(d,"reciproque-thales",
            f"$\\mathrm{{A}},\\mathrm{{M}},\\mathrm{{B}}$ et $\\mathrm{{A}},\\mathrm{{N}},\\mathrm{{C}}$ sont alignés dans le même ordre. $\\mathrm{{AM}} = {am}$, $\\mathrm{{AB}} = {ab}$, $\\mathrm{{AN}} = {an}$, $\\mathrm{{AC}} = {ac}$ (cm). Les droites $(\\mathrm{{MN}})$ et $(\\mathrm{{BC}})$ sont-elles parallèles ?",
            [f"On compare $\\dfrac{{\\mathrm{{AM}}}}{{\\mathrm{{AB}}}} = \\dfrac{{{am}}}{{{ab}}} = {frac_latex(f1)}$ et $\\dfrac{{\\mathrm{{AN}}}}{{\\mathrm{{AC}}}} = \\dfrac{{{an}}}{{{ac}}} = {frac_latex(f2)}$.",
             f"${frac_latex(f1)} {sg} {frac_latex(f2)}$.",
             "Rapports égaux et même ordre : d'après la réciproque de Thalès, les droites sont parallèles." if para else "Rapports différents : les droites ne sont pas parallèles."],
            "Oui, parallèles." if para else "Non, pas parallèles.")
    for (ang,connu,cherche,val,d) in [(30,"hyp","adj",10,"application"),(40,"hyp","opp",12,"intermediaire"),(55,"adj","opp",8,"intermediaire"),(25,"hyp","adj",15,"application"),(60,"adj","opp",6,"approfondissement"),(35,"hyp","opp",9,"approfondissement"),(50,"adj","opp",7,"intermediaire")]:
        a=math.radians(ang)
        if connu=="hyp" and cherche=="adj": res=val*math.cos(a); rel="\\cos"; num="adjacent"; den="hypoténuse"; form=f"{val}\\times\\cos({ang}^\\circ)"
        elif connu=="hyp" and cherche=="opp": res=val*math.sin(a); rel="\\sin"; num="opposé"; den="hypoténuse"; form=f"{val}\\times\\sin({ang}^\\circ)"
        else: res=val*math.tan(a); rel="\\tan"; num="opposé"; den="adjacent"; form=f"{val}\\times\\tan({ang}^\\circ)"
        nc={"hyp":"l'hypoténuse","adj":"le côté adjacent","opp":"le côté opposé"}[connu]
        ch={"adj":"le côté adjacent","opp":"le côté opposé"}[cherche]
        add(d,"trigonometrie",
            f"Dans un triangle rectangle, un angle aigu mesure ${ang}^\\circ$ et {nc} mesure {val} cm. Calculer {ch} (arrondir au dixième).",
            [f"On utilise ${rel}({ang}^\\circ) = \\dfrac{{\\text{{{num}}}}}{{\\text{{{den}}}}}$.",
             f"Longueur $= {form} \\approx {fr(res,1)}$ cm."], f"$\\approx {fr(res,1)}$ cm")
    for (a1,a2,r1,d) in [(3,5,"sin","application"),(4,5,"cos","intermediaire"),(3,4,"tan","intermediaire"),(6,10,"sin","approfondissement"),(5,8,"cos","approfondissement")]:
        if r1=="sin": ang=math.degrees(math.asin(a1/a2)); num="opposé"; den="hypoténuse"; inv="\\sin^{-1}"; fn="\\sin"
        elif r1=="cos": ang=math.degrees(math.acos(a1/a2)); num="adjacent"; den="hypoténuse"; inv="\\cos^{-1}"; fn="\\cos"
        else: ang=math.degrees(math.atan(a1/a2)); num="opposé"; den="adjacent"; inv="\\tan^{-1}"; fn="\\tan"
        autre = "l'hypoténuse" if den=="hypoténuse" else "le côté adjacent"
        add(d,"trigonometrie",
            f"Dans un triangle rectangle, le côté {num} d'un angle aigu mesure {a1} cm et {autre} mesure {a2} cm. Calculer cet angle (arrondir au degré).",
            [f"${fn}(\\widehat{{x}}) = \\dfrac{{\\text{{{num}}}}}{{\\text{{{den}}}}} = \\dfrac{{{a1}}}{{{a2}}}$.",
             f"$\\widehat{{x}} = {inv}\\left(\\dfrac{{{a1}}}{{{a2}}}\\right) \\approx {fr(ang,0)}^\\circ$."], f"$\\approx {fr(ang,0)}^\\circ$")
    probs=[("Une échelle de 2,5 m est appuyée contre un mur, pied à 1,5 m du mur. À quelle hauteur touche-t-elle le mur ?",
            ["$2,5^2 = 1,5^2 + h^2$ (Pythagore).","$h^2 = 6,25 - 2,25 = 4$, donc $h = 2$ m."],"$h = 2$ m","theoreme-pythagore"),
           ("Un piquet de 2 m projette une ombre de 3 m ; au même instant un arbre projette 12 m d'ombre. Hauteur de l'arbre (Thalès) ?",
            ["$\\dfrac{2}{3} = \\dfrac{H}{12}$.","$H = \\dfrac{2\\times 12}{3} = 8$ m."],"$H = 8$ m","theoreme-thales"),
           ("Un rectangle mesure 9 cm sur 12 cm. Longueur de la diagonale ?",
            ["$d^2 = 9^2 + 12^2 = 225$.","$d = \\sqrt{225} = 15$ cm."],"$d = 15$ cm","theoreme-pythagore"),
           ("Un bateau parcourt 12 km vers l'est puis 5 km vers le nord. Distance au départ (à vol d'oiseau) ?",
            ["$d^2 = 12^2 + 5^2 = 169$.","$d = 13$ km."],"$d = 13$ km","theoreme-pythagore"),
           ("Un toit fait un angle de $30^\\circ$ avec l'horizontale ; sa base mesure 6 m. Hauteur du toit (au dixième) ?",
            [f"$\\tan(30^\\circ) = \\dfrac{{h}}{{6}}$, donc $h = 6\\times\\tan(30^\\circ) \\approx {fr(6*math.tan(math.radians(30)),1)}$ m."],f"$\\approx {fr(6*math.tan(math.radians(30)),1)}$ m","trigonometrie"),
           ("Une rampe de 5 m s'élève à 3 m de hauteur. Angle avec le sol (au degré) ?",
            [f"$\\sin(\\widehat{{x}}) = \\dfrac{{3}}{{5}}$, donc $\\widehat{{x}} \\approx {fr(math.degrees(math.asin(3/5)),0)}^\\circ$."],f"$\\approx {fr(math.degrees(math.asin(3/5)),0)}^\\circ$","trigonometrie")]
    for (e,c,r,notion) in probs: add("probleme",notion,e,c,r)
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- PUISSANCES (3e) ----------------
def gen_puissances():
    E=[]; 
    def add(diff,en,co,rep): E.append((diff,"puissances",en,co,rep))
    bases=[(2,3),(2,5),(3,3),(3,4),(5,3),(4,3),(2,6),(6,2),(10,4),(7,2),(2,4),(3,5),(5,2),(9,2),(2,7),(4,4)]
    for (a,n) in bases:
        v=a**n
        add("application",f"Calculer $ {a}^{n}$.",[f"${a}^{n} = " + " \\times ".join([str(a)]*n) + f" = {v}$."],f"${v}$")
    for (a,m,n) in [(2,3,4),(3,2,5),(5,2,3),(2,7,2),(10,3,5),(4,2,3),(7,2,3)]:
        add("application",f"Écrire sous la forme d'une seule puissance : $ {a}^{m} \\times {a}^{n}$.",
            [f"Même base : on additionne les exposants. ${a}^{m} \\times {a}^{n} = {a}^{{{m}+{n}}} = {a}^{{{m+n}}}$."],f"${a}^{{{m+n}}}$")
    for (a,m,n) in [(2,7,3),(3,6,2),(5,5,2),(10,8,3),(2,9,4),(7,4,1)]:
        add("intermediaire",f"Écrire sous la forme d'une seule puissance : $\\dfrac{{{a}^{m}}}{{{a}^{n}}}$.",
            [f"Même base : on soustrait les exposants. $\\dfrac{{{a}^{m}}}{{{a}^{n}}} = {a}^{{{m}-{n}}} = {a}^{{{m-n}}}$."],f"${a}^{{{m-n}}}$")
    for (a,m,n) in [(2,3,2),(3,2,3),(5,2,2),(10,4,2),(2,5,2)]:
        add("intermediaire",f"Écrire sous la forme d'une seule puissance : $\\left({a}^{m}\\right)^{n}$.",
            [f"Puissance d'une puissance : on multiplie les exposants. $\\left({a}^{m}\\right)^{n} = {a}^{{{m}\\times{n}}} = {a}^{{{m*n}}}$."],f"${a}^{{{m*n}}}$")
    for (a,n) in [(2,3),(5,2),(10,3),(3,2),(4,2)]:
        v=Fraction(1,a**n)
        add("approfondissement",f"Écrire sous forme de fraction : $ {a}^{{-{n}}}$.",
            [f"$ {a}^{{-{n}}} = \\dfrac{{1}}{{{a}^{n}}} = \\dfrac{{1}}{{{a**n}}}$."],f"$\\dfrac{{1}}{{{a**n}}}$")
    for (N,) in [(3200,),(45000,),(120000,),(6500,),(78000000,),(920,),(150000,)]:
        s=f"{N:e}"; mant=float(s.split('e')[0]); exp=int(s.split('e')[1])
        m2=("%g"%mant).replace('.',',')
        add("approfondissement",f"Écrire {N} en notation scientifique.",
            [f"On place la virgule après le premier chiffre : ${m2} \\times 10^{{{exp}}}$."],f"${m2} \\times 10^{{{exp}}}$")
    # complete a 50 avec problemes
    probs=[("Une bactérie double toutes les heures. Partant de 1, combien après 10 h ? (donner $2^{10}$)",
            ["$2^{10} = 1024$."],"$1024$"),
           ("Calculer $ 10^6$ (un million).",["$10^6 = 1\\,000\\,000$."],"$1000000$"),
           ("Simplifier $\\dfrac{2^{10}}{2^{7}}$.",["$= 2^{10-7} = 2^3 = 8$."],"$8$"),
           ("Calculer $(3^2)^2$.",["$= 3^{2\\times 2} = 3^4 = 81$."],"$81$")]
    for (e,c,r) in probs: add("probleme","",e,c,r) if False else E.append(("probleme","puissances",e,c,r))
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- NOMBRES RATIONNELS (3e) ----------------
def gen_rationnels():
    E=[]
    def add(diff,en,co,rep): E.append((diff,"operations-fractions",en,co,rep))
    import random
    paires=[(1,2,1,3),(2,3,1,4),(3,4,1,6),(5,6,2,3),(2,5,3,10),(1,3,5,6),(3,8,1,4),(2,7,3,14),(4,9,1,3),(5,12,1,4),(3,5,2,15),(7,10,1,5)]
    for (a,b,c,d) in paires[:12]:
        f=Fraction(a,b)+Fraction(c,d)
        add("application",f"Calculer et simplifier : $\\dfrac{{{a}}}{{{b}}} + \\dfrac{{{c}}}{{{d}}}$.",
            [f"On réduit au même dénominateur puis on additionne.",f"$= {frac_latex(f)}$."],f"${frac_latex(f)}$")
    for (a,b,c,d) in paires[:10]:
        f=Fraction(a,b)-Fraction(c,d)
        add("application",f"Calculer et simplifier : $\\dfrac{{{a}}}{{{b}}} - \\dfrac{{{c}}}{{{d}}}$.",
            [f"On réduit au même dénominateur puis on soustrait.",f"$= {frac_latex(f)}$."],f"${frac_latex(f)}$")
    for (a,b,c,d) in paires[:10]:
        f=Fraction(a,b)*Fraction(c,d)
        add("intermediaire",f"Calculer et simplifier : $\\dfrac{{{a}}}{{{b}}} \\times \\dfrac{{{c}}}{{{d}}}$.",
            [f"On multiplie numérateurs et dénominateurs, puis on simplifie.",f"$= \\dfrac{{{a}\\times{c}}}{{{b}\\times{d}}} = {frac_latex(f)}$."],f"${frac_latex(f)}$")
    for (a,b,c,d) in paires[:9]:
        f=Fraction(a,b)/Fraction(c,d)
        add("intermediaire",f"Calculer et simplifier : $\\dfrac{{{a}}}{{{b}}} \\div \\dfrac{{{c}}}{{{d}}}$.",
            [f"Diviser, c'est multiplier par l'inverse.",f"$= \\dfrac{{{a}}}{{{b}}} \\times \\dfrac{{{d}}}{{{c}}} = {frac_latex(f)}$."],f"${frac_latex(f)}$")
    for (a,b) in [(12,18),(20,30),(15,25),(24,36),(14,21),(45,60),(16,40),(27,45),(35,50)]:
        f=Fraction(a,b)
        add("approfondissement",f"Rendre irréductible : $\\dfrac{{{a}}}{{{b}}}$.",
            [f"On divise numérateur et dénominateur par leur PGCD.",f"$= {frac_latex(f)}$."],f"${frac_latex(f)}$")
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- CALCUL LITTERAL (3e) ----------------
def gen_calcul_litteral():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    # developper k(ax+b)
    for (k,a,b) in [(3,2,5),(4,1,3),(5,3,2),(2,7,4),(6,2,1),(3,5,7),(7,1,2),(2,4,9),(2,3,1),(5,2,4),(3,7,2),(4,1,5),(6,3,1),(2,9,2),(3,2,8),(5,4,3)]:
        r=poly_latex([(k*a,1),(k*b,0)])
        add("application","developpement",f"Développer et réduire : $ {k}({poly_latex([(a,1),(b,0)])})$.",
            [f"On distribue : $ {k}\\times {a}x + {k}\\times {b} = {r}$."],f"$ {r}$")
    # developper (ax+b)(cx+d)
    for (a,b,c,d) in [(1,2,1,3),(2,1,1,4),(1,-3,2,1),(3,1,1,-2),(1,5,1,-5),(2,3,3,1),(1,-1,1,-4),(2,-1,2,1)]:
        A=a*c; B=a*d+b*c; C=b*d
        r=poly_latex([(A,2),(B,1),(C,0)])
        add("intermediaire","developpement",f"Développer et réduire : $({poly_latex([(a,1),(b,0)])})({poly_latex([(c,1),(d,0)])})$.",
            [f"On applique la double distributivité, puis on réduit les termes semblables.",f"$= {r}$."],f"$ {r}$")
    # identites remarquables
    for (a,b) in [(1,3),(1,5),(2,1),(1,7),(3,2),(1,4)]:
        A=a*a; B=2*a*b; C=b*b; r=poly_latex([(A,2),(B,1),(C,0)])
        add("approfondissement","identites-remarquables",f"Développer avec une identité remarquable : $({poly_latex([(a,1),(b,0)])})^2$.",
            [f"$(u+v)^2 = u^2 + 2uv + v^2$.",f"$= {A}x^2 + {B}x + {C} = {r}$."],f"$ {r}$")
    for (a,b) in [(1,2),(1,4),(2,3),(1,6),(3,1)]:
        A=a*a; C=b*b; r=poly_latex([(A,2),(-C,0)])
        add("approfondissement","identites-remarquables",f"Développer avec une identité remarquable : $({poly_latex([(a,1),(b,0)])})({poly_latex([(a,1),(-b,0)])})$.",
            [f"$(u+v)(u-v) = u^2 - v^2$.",f"$= {A}x^2 - {C} = {r}$."],f"$ {r}$")
    # factoriser facteur commun
    for (k,a,b) in [(2,3,5),(3,2,1),(5,1,2),(4,3,2),(6,1,4),(7,2,3),(2,5,7),(3,4,1),(2,2,3)]:
        expr=poly_latex([(k*a,1),(k*b,0)])
        add("intermediaire","factorisation",f"Factoriser : $ {expr}$.",
            [f"Le facteur commun est {k}.",f"$= {k}({poly_latex([(a,1),(b,0)])})$."],f"$ {k}({poly_latex([(a,1),(b,0)])})$")
    # factoriser x en facteur
    for (a,b) in [(3,5),(2,7),(4,1),(5,2),(1,6),(2,3)]:
        expr=poly_latex([(a,2),(b,1)])
        add("approfondissement","factorisation",f"Factoriser : $ {expr}$.",
            [f"On met $x$ en facteur.",f"$= x({poly_latex([(a,1),(b,0)])})$."],f"$ x({poly_latex([(a,1),(b,0)])})$")
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- REGISTRE ----------------
# ---------------- PROPORTIONNALITE (3e) ----------------
def gen_proportionnalite():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    for (a,b,c) in [(3,12,5),(4,10,6),(2,7,9),(5,8,4),(6,15,2),(3,5,8),(7,14,3),(4,9,5),(2,11,6),(5,6,7),(8,12,3),(3,7,10),(4,6,9),(2,9,7)]:
        x=b*c/a
        add("application","quatrieme-proportionnelle",
            f"Dans un tableau de proportionnalité, {a} correspond à {b}. À quoi correspond {c} ?",
            [f"Produit en croix : valeur $= \\dfrac{{{b} \\times {c}}}{{{a}}} = {fr(x)}$."], f"${fr(x)}$")
    for (p,q) in [(20,80),(15,200),(25,64),(30,50),(12,150),(40,35),(5,240),(75,16),(60,45),(8,125),(50,86),(35,120)]:
        v=p*q/100
        add("application","pourcentage", f"Calculer {p}% de {q}.",
            [f"${p}\\% \\text{{ de }} {q} = \\dfrac{{{p}}}{{100}} \\times {q} = {fr(v)}$."], f"${fr(v)}$")
    for (p,q,sens) in [(10,50,"aug"),(20,80,"red"),(15,200,"aug"),(30,120,"red"),(5,60,"aug"),(25,40,"red"),(8,250,"aug"),(40,90,"red")]:
        coef = 1+(p/100 if sens=="aug" else -p/100); v=q*coef
        mot=f"augmente de {p}%" if sens=="aug" else f"diminue de {p}%"; op="+" if sens=="aug" else "-"
        add("intermediaire","pourcentage-evolution",
            f"Un article coûte {q} €. Son prix {mot}. Quel est le nouveau prix ?",
            [f"Coefficient multiplicateur : $1 {op} \\dfrac{{{p}}}{{100}} = {fr(coef,2)}$.",
             f"Nouveau prix $= {q} \\times {fr(coef,2)} = {fr(v)}$ €."], f"${fr(v)}$ €")
    for (e,d) in [(100,3),(200,5),(50,8),(500,2),(25,12),(1000,4),(150,6),(2000,3)]:
        reel=e*d
        add("approfondissement","echelle",
            f"Sur une carte à l'échelle $\\dfrac{{1}}{{{e}}}$, une distance mesure {d} cm. Quelle est la distance réelle (en cm) ?",
            [f"La réalité est {e} fois plus grande : ${d} \\times {e} = {reel}$ cm."], f"${reel}$ cm")
    for (dist,temps) in [(120,2),(150,3),(90,2),(200,4),(60,1),(180,3),(75,3),(240,4)]:
        v=dist/temps
        add("intermediaire","vitesse-moyenne",
            f"Un véhicule parcourt {dist} km en {temps} h. Calculer sa vitesse moyenne.",
            [f"$v = \\dfrac{{\\text{{distance}}}}{{\\text{{temps}}}} = \\dfrac{{{dist}}}{{{temps}}} = {fr(v)}$ km/h."], f"${fr(v)}$ km/h")
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- RACINE CARREE (3e) ----------------
def gen_racine_carree():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    for n in [16,25,49,81,100,144,169,196,225,64,121,256,4,9,36,400]:
        r=math.isqrt(n)
        add("application","calcul-racine", f"Calculer $\\sqrt{{{n}}}$.", [f"$\\sqrt{{{n}}} = {r}$ car ${r}^2 = {n}$."], f"${r}$")
    for n in [8,12,18,20,50,32,27,48,72,45,75,98,28,44,52,63]:
        a,b=simplifie_racine(n)
        add("intermediaire","simplifier-racine", f"Écrire $\\sqrt{{{n}}}$ sous la forme $a\\sqrt{{b}}$.",
            [f"$\\sqrt{{{n}}} = \\sqrt{{{a*a} \\times {b}}} = {a}\\sqrt{{{b}}}$."], f"${a}\\sqrt{{{b}}}$")
    for (a,b) in [(2,8),(3,12),(5,5),(2,18),(6,6),(2,32),(5,20),(3,27)]:
        p=a*b; r=math.isqrt(p)
        rep=f"${r}$" if r*r==p else f"$\\sqrt{{{p}}}$"
        tail=(f" = {r}$." if r*r==p else "$.")
        add("intermediaire","produit-racines", f"Calculer $\\sqrt{{{a}}} \\times \\sqrt{{{b}}}$.",
            [f"$\\sqrt{{{a}}} \\times \\sqrt{{{b}}} = \\sqrt{{{a} \\times {b}}} = \\sqrt{{{p}}}"+tail], rep)
    for n in [10,20,30,45,60,75,90,110,135,150]:
        r=math.isqrt(n)
        add("approfondissement","encadrer-racine", f"Encadrer $\\sqrt{{{n}}}$ entre deux entiers consécutifs.",
            [f"${r}^2 = {r*r}$ et ${r+1}^2 = {(r+1)**2}$, or ${r*r} < {n} < {(r+1)**2}$.",
             f"Donc ${r} < \\sqrt{{{n}}} < {r+1}$."], f"${r} < \\sqrt{{{n}}} < {r+1}$")
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- STATISTIQUES (3e) ----------------
def gen_statistiques():
    from statistics import median
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    series=[[4,7,9,12,8],[10,15,12,18,20],[3,5,5,8,9,10],[6,6,7,9,13],[11,14,9,16,10],
            [2,4,4,6,8,12],[13,15,17,11,19],[5,8,8,10,14],[7,9,12,12,15,17],[20,22,18,25,15],
            [1,3,4,6,6],[8,10,12,14,16],[9,11,13,7,10],[4,4,7,9,11,13]]
    for s in series[:14]:
        m=sum(s)/len(s)
        add("application","moyenne", f"Calculer la moyenne de : {', '.join(map(str,s))}.",
            [f"Moyenne $= \\dfrac{{{'+'.join(map(str,s))}}}{{{len(s)}}} = \\dfrac{{{sum(s)}}}{{{len(s)}}} = {fr(m)}$."], f"${fr(m)}$")
    for s in series[:14]:
        ss=sorted(s); med=median(ss)
        add("intermediaire","mediane", f"Déterminer la médiane de : {', '.join(map(str,s))}.",
            [f"Série ordonnée : {', '.join(map(str,ss))}.", f"Médiane $= {fr(med)}$."], f"${fr(med)}$")
    for s in series[:14]:
        et=max(s)-min(s)
        add("application","etendue", f"Calculer l'étendue de : {', '.join(map(str,s))}.",
            [f"Étendue $= {max(s)} - {min(s)} = {et}$."], f"${et}$")
    pond=[([12,14,16],[1,2,1]),([8,10,15],[2,1,2]),([10,12],[3,1]),([9,13,17],[1,1,2]),([11,15,7],[2,2,1]),([6,14],[1,3]),([5,10,20],[2,1,1]),([8,12,16],[1,1,1])]
    for (notes,coefs) in pond[:8]:
        num=sum(n*c for n,c in zip(notes,coefs)); den=sum(coefs); m=num/den
        prod='+'.join(f'{n}\\times {c}' for n,c in zip(notes,coefs))
        add("approfondissement","moyenne-ponderee",
            f"Moyenne pondérée des notes {', '.join(map(str,notes))} de coefficients {', '.join(map(str,coefs))} ?",
            [f"Moyenne $= \\dfrac{{{prod}}}{{{'+'.join(map(str,coefs))}}} = \\dfrac{{{num}}}{{{den}}} = {fr(m)}$."], f"${fr(m)}$")
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- FONCTIONS (3e) ----------------
def gen_fonctions():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    aff=[(2,3,4),(3,-1,5),(-2,7,3),(4,0,6),(1,5,-2),(5,-2,3),(-3,4,2),(2,-5,7),(6,1,-1),(-1,8,5),(3,2,0),(2,4,-3),(4,3,2),(-2,9,4),(3,-4,6),(5,1,2),(2,6,-4),(-4,5,1),(3,7,3),(2,-2,8)]
    for (a,b,x0) in aff:
        y=a*x0+b; sb='+' if b>=0 else '-'
        add("application","image", f"Soit $f(x) = {poly_latex([(a,1),(b,0)])}$. Calculer $f({x0})$.",
            [f"$f({x0}) = {a}\\times({x0}) {sb} {abs(b)} = {y}$."], f"$f({x0}) = {y}$")
    ant=[(2,3,11),(3,-1,8),(4,1,13),(5,2,17),(2,-3,7),(3,6,15),(-2,5,1),(4,-2,10),(2,7,3),(6,0,18),(3,1,10),(5,-2,13)]
    for (a,b,y0) in ant:
        x=Fraction(y0-b,a); sb='-' if b>=0 else '+'
        add("intermediaire","antecedent", f"Soit $f(x) = {poly_latex([(a,1),(b,0)])}$. Déterminer l'antécédent de {y0}.",
            [f"On résout ${poly_latex([(a,1),(b,0)])} = {y0}$.",f"$x = \\dfrac{{{y0} {sb} {abs(b)}}}{{{a}}} = {frac_latex(x)}$."], f"$x = {frac_latex(x)}$")
    lin=[(4,12),(5,20),(3,21),(6,18),(2,14),(7,35),(4,10),(5,15)]
    for (x0,y0) in lin:
        a=Fraction(y0,x0)
        add("application","fonction-lineaire", f"$f$ est linéaire et $f({x0}) = {y0}$. Déterminer son coefficient.",
            [f"$f(x)=ax$ donc $a = \\dfrac{{{y0}}}{{{x0}}} = {frac_latex(a)}$."], f"$a = {frac_latex(a)}$")
    for (a,x0) in [(3,5),(4,2),(2,9),(5,3),(6,4),(2,7),(3,8),(4,7),(5,5),(2,11)]:
        add("application","fonction-lineaire", f"Soit $f(x) = {a}x$. Calculer $f({x0})$.",
            [f"$f({x0}) = {a}\\times {x0} = {a*x0}$."], f"$f({x0}) = {a*x0}$")
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- MULTIPLES / DIVISEURS (3e) ----------------
def gen_multiples_diviseurs():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    for (a,b) in [(24,36),(48,60),(30,45),(56,42),(72,54),(100,60),(84,36),(90,120),(45,75),(64,48),(27,36),(50,80),(66,44),(81,54)]:
        g=math.gcd(a,b)
        add("intermediaire","pgcd", f"Calculer le PGCD de {a} et {b}.",
            [f"Par l'algorithme d'Euclide (ou décomposition), $\\mathrm{{PGCD}}({a},{b}) = {g}$."], f"${g}$")
    for (a,b) in [(24,36),(30,45),(48,60),(56,42),(72,54),(90,120),(45,75),(64,48),(27,36),(50,80),(66,44),(84,36)]:
        f=Fraction(a,b); g=math.gcd(a,b)
        add("application","fraction-irreductible", f"Rendre irréductible : $\\dfrac{{{a}}}{{{b}}}$.",
            [f"On divise par le PGCD $= {g}$ : $\\dfrac{{{a}}}{{{b}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    tests=[(126,3),(85,5),(324,9),(238,2),(475,5),(153,3),(112,2),(945,9),(370,5),(639,3),(284,4),(510,10)]
    for (N,d) in tests:
        ok = (N % d == 0)
        add("application","divisibilite", f"Le nombre {N} est-il divisible par {d} ? Justifier.",
            [f"On applique le critère de divisibilité par {d}.", ("Oui." if ok else "Non.")+f" En effet ${N} = {d} \\times {N//d}$." if ok else f"Non : {N} n'est pas un multiple de {d} (reste {N%d})."],
            "Oui" if ok else "Non")
    _i=2
    while len(E)<50:
        _a,_b=6*_i,4*_i+2; _g=math.gcd(_a,_b)
        add("intermediaire","pgcd",f"Calculer le PGCD de {_a} et {_b}.",[f"$\\mathrm{{PGCD}}({_a},{_b}) = {_g}$."],f"${_g}$")
        _i+=1
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- PROBABILITES (3e) ----------------
def gen_probabilites():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    de=[("obtenir 6",1),("obtenir un nombre pair",3),("obtenir un multiple de 3",2),("obtenir au moins 5",2),("obtenir 1",1),("obtenir un nombre supérieur à 4",2),("obtenir un nombre impair",3),("obtenir un diviseur de 6",4)]
    for (evt,fav) in de:
        f=Fraction(fav,6)
        add("application","probabilite-simple", f"On lance un dé équilibré à 6 faces. Probabilité {'d' + chr(39) if evt[0] in 'aeiouéh' else 'de '}{evt} ?",
            [f"$P = \\dfrac{{{fav}}}{{6}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    urnes=[(3,5),(4,10),(5,10),(2,10),(7,10),(1,5),(6,10),(3,8),(9,12),(4,6)]
    for (fav,tot) in urnes:
        f=Fraction(fav,tot)
        add("application","probabilite-simple", f"Une urne contient {tot} boules dont {fav} rouges. Probabilité de tirer une rouge ?",
            [f"$P = \\dfrac{{{fav}}}{{{tot}}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    for (fav,tot) in [(3,10),(2,5),(7,10),(1,4),(5,8),(4,9),(6,10),(3,7),(2,9),(5,12)]:
        f=Fraction(fav,tot); comp=1-f
        add("intermediaire","probabilite-complementaire", f"La probabilité d'un événement est $\\dfrac{{{fav}}}{{{tot}}}$. Probabilité qu'il ne se réalise pas ?",
            [f"$P(\\overline{{A}}) = 1 - \\dfrac{{{fav}}}{{{tot}}} = {frac_latex(comp)}$."], f"${frac_latex(comp)}$")
    cartes=[("un roi",4),("un cœur",8),("l'as de pique",1),("une figure",12),("un carreau",8),("un rouge",16),("le 7 de trèfle",1),("un as",4),("une dame",4),("un pique",8),("un noir",16),("un valet",4),("le roi de cœur",1),("un cœur ou un carreau",16)]
    for (evt,fav) in cartes:
        f=Fraction(fav,32)
        add("approfondissement","probabilite-simple", f"On tire une carte au hasard dans un jeu de 32 cartes. Probabilité d'obtenir {evt} ?",
            [f"$P = \\dfrac{{{fav}}}{{32}} = {frac_latex(f)}$."], f"${frac_latex(f)}$")
    for (_f,_t) in [(1,4),(2,5),(3,7),(1,3),(2,9),(3,8),(1,6),(5,12),(2,7),(3,10),(1,5),(4,9)]:
        if len(E)>=50: break
        _fr=Fraction(_f,_t)
        add("intermediaire","probabilite-simple",f"Une urne contient {_t} jetons dont {_f} gagnants. Probabilité d'en tirer un gagnant ?",[f"$P = \\dfrac{{{_f}}}{{{_t}}} = {frac_latex(_fr)}$."],f"${frac_latex(_fr)}$")
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- REPERAGE (3e) ----------------
def gen_reperage():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    pts=[((2,3),(6,7)),((1,2),(5,10)),((-2,1),(4,9)),((0,0),(6,8)),((3,-1),(9,7)),((-4,2),(2,10)),((1,1),(7,9)),((2,-3),(8,5)),((-1,4),(5,12)),((0,5),(8,11)),((3,3),(15,8)),((-2,-2),(4,6))]
    for ((xa,ya),(xb,yb)) in pts[:8]:
        mx=Fraction(xa+xb,2); my=Fraction(ya+yb,2)
        add("application","milieu", f"$\\mathrm{{A}}({xa}\\,;\\,{ya})$ et $\\mathrm{{B}}({xb}\\,;\\,{yb})$. Calculer les coordonnées du milieu $\\mathrm{{I}}$ de $[\\mathrm{{AB}}]$.",
            [f"$\\mathrm{{I}}\\left(\\dfrac{{{xa}+{xb}}}{{2}}\\,;\\,\\dfrac{{{ya}+{yb}}}{{2}}\\right) = ({frac_latex(mx)}\\,;\\,{frac_latex(my)})$."], f"$\\mathrm{{I}}({frac_latex(mx)}\\,;\\,{frac_latex(my)})$")
    dist=[((0,0),(3,4)),((1,1),(4,5)),((2,3),(5,7)),((-1,2),(2,6)),((0,0),(6,8)),((1,2),(9,17)) if False else ((1,2),(13,14)),((-2,1),(3,13)),((0,5),(12,10)),((2,2),(14,9)),((-3,0),(2,12)),((1,-1),(9,5)),((0,0),(5,12))]
    for ((xa,ya),(xb,yb)) in dist[:12]:
        n=(xb-xa)**2+(yb-ya)**2; r=math.isqrt(n)
        rep=f"$\\mathrm{{AB}} = {r}$" if r*r==n else f"$\\mathrm{{AB}} = \\sqrt{{{n}}}$"
        tail=f" = {r}$." if r*r==n else "$."
        add("intermediaire","distance", f"$\\mathrm{{A}}({xa}\\,;\\,{ya})$ et $\\mathrm{{B}}({xb}\\,;\\,{yb})$. Calculer la distance $\\mathrm{{AB}}$.",
            [f"$\\mathrm{{AB}} = \\sqrt{{({xb}-({xa}))^2 + ({yb}-({ya}))^2}} = \\sqrt{{{ (xb-xa)**2 } + { (yb-ya)**2 }}} = \\sqrt{{{n}}}"+tail], rep)
    # coordonnees lecture (symbolique simple)
    for ((xa,ya),(xb,yb)) in pts[:14]:
        mx=Fraction(xa+xb,2); my=Fraction(ya+yb,2)
        add("application","milieu", f"Calculer le milieu de $[\\mathrm{{CD}}]$ avec $\\mathrm{{C}}({xa}\\,;\\,{ya})$ et $\\mathrm{{D}}({xb}\\,;\\,{yb})$.",
            [f"Milieu $= \\left(\\dfrac{{{xa}+{xb}}}{{2}}\\,;\\,\\dfrac{{{ya}+{yb}}}{{2}}\\right) = ({frac_latex(mx)}\\,;\\,{frac_latex(my)})$."], f"$({frac_latex(mx)}\\,;\\,{frac_latex(my)})$")
    _i=1
    while len(E)<50:
        _xa,_ya,_xb,_yb=_i,_i+1,_i+5,_i+3
        _mx=Fraction(_xa+_xb,2);_my=Fraction(_ya+_yb,2)
        add("application","milieu",f"Milieu de $[\\mathrm{{AB}}]$ : $\\mathrm{{A}}({_xa}\\,;\\,{_ya})$, $\\mathrm{{B}}({_xb}\\,;\\,{_yb})$ ?",[f"$= ({frac_latex(_mx)}\\,;\\,{frac_latex(_my)})$."],f"$({frac_latex(_mx)}\\,;\\,{frac_latex(_my)})$")
        _i+=1
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- TRANSLATIONS / VECTEURS (3e) ----------------
def gen_translations_vecteurs():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    pts=[((2,3),(6,7)),((1,2),(5,10)),((-2,1),(4,9)),((0,0),(6,8)),((3,-1),(9,7)),((-4,2),(2,10)),((1,1),(7,9)),((2,-3),(8,5)),((-1,4),(5,12)),((0,5),(8,11)),((3,3),(15,8)),((-2,-2),(4,6)),((5,1),(2,6)),((-3,2),(1,-4))]
    for ((xa,ya),(xb,yb)) in pts[:14]:
        add("application","coordonnees-vecteur", f"$\\mathrm{{A}}({xa}\\,;\\,{ya})$ et $\\mathrm{{B}}({xb}\\,;\\,{yb})$. Calculer les coordonnées du vecteur $\\vec{{\\mathrm{{AB}}}}$.",
            [f"$\\vec{{\\mathrm{{AB}}}}({xb}-({xa})\\,;\\,{yb}-({ya})) = ({xb-xa}\\,;\\,{yb-ya})$."], f"$\\vec{{\\mathrm{{AB}}}}({xb-xa}\\,;\\,{yb-ya})$")
    for ((mx,my),(ux,uy)) in [((2,3),(4,1)),((1,-2),(3,5)),((0,0),(-2,4)),((5,1),(2,-3)),((-1,2),(6,2)),((3,3),(1,-4)),((2,-1),(-3,5)),((4,0),(2,7)),((-2,-2),(5,3)),((1,5),(-4,-2)),((6,2),(3,3)),((0,4),(7,-1))]:
        add("intermediaire","translation", f"On translate le point $\\mathrm{{M}}({mx}\\,;\\,{my})$ par le vecteur $\\vec{{u}}({ux}\\,;\\,{uy})$. Coordonnées de l'image $\\mathrm{{M'}}$ ?",
            [f"$\\mathrm{{M'}}({mx}+({ux})\\,;\\,{my}+({uy})) = ({mx+ux}\\,;\\,{my+uy})$."], f"$\\mathrm{{M'}}({mx+ux}\\,;\\,{my+uy})$")
    for ((ax,ay),(bx,by)) in [((1,2),(3,5)),((0,0),(4,1)),((2,-1),(5,3)),((-2,1),(1,4)),((3,3),(6,7)),((1,-2),(4,2)),((-1,0),(2,6)),((5,1),(8,4)),((0,3),(3,8)),((2,2),(7,5)),((-3,-1),(0,3)),((4,-2),(6,1))]:
        ux,uy=bx-ax,by-ay
        add("approfondissement","somme-vecteurs", f"$\\vec{{u}}({ux}\\,;\\,{uy})$ et $\\vec{{v}}({ax}\\,;\\,{ay})$. Calculer les coordonnées de $\\vec{{u}}+\\vec{{v}}$.",
            [f"On additionne coordonnée par coordonnée : $\\vec{{u}}+\\vec{{v}}({ux}+{ax}\\,;\\,{uy}+{ay}) = ({ux+ax}\\,;\\,{uy+ay})$."], f"$({ux+ax}\\,;\\,{uy+ay})$")
    _i=1
    while len(E)<50:
        _xa,_ya,_xb,_yb=_i,_i+2,_i+4,_i+1
        add("application","coordonnees-vecteur",f"Coordonnées de $\\vec{{\\mathrm{{AB}}}}$ : $\\mathrm{{A}}({_xa}\\,;\\,{_ya})$, $\\mathrm{{B}}({_xb}\\,;\\,{_yb})$ ?",[f"$({_xb}-{_xa}\\,;\\,{_yb}-{_ya}) = ({_xb-_xa}\\,;\\,{_yb-_ya})$."],f"$({_xb-_xa}\\,;\\,{_yb-_ya})$")
        _i+=1
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ---------------- REPRESENTATION DANS L'ESPACE (3e) ----------------
def gen_representation_espace():
    E=[]
    def add(diff,notion,en,co,rep): E.append((diff,notion,en,co,rep))
    for (L,l,h) in [(3,4,5),(2,6,7),(5,5,2),(4,3,6),(10,2,3),(8,5,2),(6,6,6),(7,2,4),(9,3,2),(4,4,10),(5,8,3),(2,2,9)]:
        v=L*l*h
        add("application","volume-pave", f"Calculer le volume d'un pavé droit de dimensions {L} cm, {l} cm et {h} cm.",
            [f"$V = L \\times l \\times h = {L} \\times {l} \\times {h} = {v}$ cm³."], f"${v}$ cm³")
    for (r,h) in [(2,5),(3,4),(5,10),(1,7),(4,3),(2,9),(6,2),(3,8),(5,6),(2,12)]:
        v=r*r*h
        add("intermediaire","volume-cylindre", f"Calculer le volume d'un cylindre de rayon {r} cm et de hauteur {h} cm (en fonction de $\\pi$, puis arrondi au dixième).",
            [f"$V = \\pi r^2 h = \\pi \\times {r}^2 \\times {h} = {v}\\pi \\approx {fr1(math.pi*v)}$ cm³."], f"${v}\\pi \\approx {fr1(math.pi*v)}$ cm³")
    for (cote,h) in [(3,6),(4,9),(5,12),(2,9),(6,5),(4,6),(3,10),(5,9),(2,15),(6,4)]:
        base=cote*cote; v=Fraction(base*h,3)
        add("approfondissement","volume-pyramide", f"Calculer le volume d'une pyramide à base carrée de côté {cote} cm et de hauteur {h} cm.",
            [f"$V = \\dfrac{{1}}{{3}} \\times \\text{{aire base}} \\times h = \\dfrac{{1}}{{3}} \\times {base} \\times {h} = {fr(float(v),2)}$ cm³."], f"${fr(float(v),2)}$ cm³")
    for (r,) in [(3,),(2,),(6,),(1,),(9,),(5,),(4,),(12,),(10,),(8,)]:
        v=Fraction(4,3)*r**3
        add("approfondissement","volume-boule", f"Calculer le volume d'une boule de rayon {r} cm (en fonction de $\\pi$, puis arrondi au dixième).",
            [f"$V = \\dfrac{{4}}{{3}}\\pi r^3 = \\dfrac{{4}}{{3}}\\pi \\times {r}^3 = {frac_latex(v)}\\pi \\approx {fr1(float(v)*math.pi)}$ cm³."], f"${frac_latex(v)}\\pi \\approx {fr1(float(v)*math.pi)}$ cm³")
    _i=2
    while len(E)<50:
        _L,_l,_h=_i,_i+1,_i+3; _v=_L*_l*_h
        add("application","volume-pave",f"Volume d'un pavé droit de {_L} cm x {_l} cm x {_h} cm ?",[f"$V = {_L}\\times{_l}\\times{_h} = {_v}$ cm³."],f"${_v}$ cm³")
        _i+=1
    E=E[:50]
    return [exo(i+1,*t) for i,t in enumerate(E)]

# ================= PHYSIQUE-CHIMIE 3e + pensee informatique =================
def gen_masse_volumique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (m,V) in [(200,100),(300,50),(540,200),(78,10),(150,60),(920,1000),(240,30),(500,250),(64,8),(360,40),(105,50),(720,90)]:
        rho=m/V
        add("application","masse-volumique", f"Un objet a une masse de {m} g et un volume de {V} cm³. Calculer sa masse volumique.",
            [f"$\\rho = \\dfrac{{m}}{{V}} = \\dfrac{{{m}}}{{{V}}} = {fr(rho,2)}$ g/cm³."], f"${fr(rho,2)}$ g/cm³")
    for (rho,V) in [(2.7,10),(1.0,50),(7.8,5),(0.9,20),(11.3,2),(2.5,8),(1.2,100),(8.9,3)]:
        m=rho*V
        add("intermediaire","masse-volumique", f"Un matériau a une masse volumique de {fr(rho,2)} g/cm³. Masse d'un volume de {V} cm³ ?",
            [f"$m = \\rho \\times V = {fr(rho,2)} \\times {V} = {fr(m,2)}$ g."], f"${fr(m,2)}$ g")
    for (m,rho) in [(54,2.7),(100,1.0),(78,7.8),(45,0.9),(50,2.5),(89,8.9),(113,11.3),(24,1.2)]:
        V=m/rho
        add("approfondissement","masse-volumique", f"Un objet de masse {m} g a une masse volumique de {fr(rho,2)} g/cm³. Calculer son volume.",
            [f"$V = \\dfrac{{m}}{{\\rho}} = \\dfrac{{{m}}}{{{fr(rho,2)}}} = {fr(V,2)}$ cm³."], f"${fr(V,2)}$ cm³")
    _i=1
    while len(E)<50:
        _m=50+10*_i; _V=5*_i; _r=_m/_V
        add("application","masse-volumique", f"Masse {_m} g, volume {_V} cm³. Masse volumique ?", [f"$\\rho = \\dfrac{{{_m}}}{{{_V}}} = {fr(_r,2)}$ g/cm³."], f"${fr(_r,2)}$ g/cm³"); _i+=1
    E=E[:50]; return [exo(i+1,*t) for i,t in enumerate(E)]

def gen_poids_forces():
    E=[]; g=10
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for m in [2,5,0.5,10,3,7,0.2,15,1.5,8,20,4]:
        P=m*g
        add("application","poids-masse", f"Calculer le poids d'un objet de masse {fr(m,2)} kg (on prend $g = 10$ N/kg).",
            [f"$P = m \\times g = {fr(m,2)} \\times 10 = {fr(P,1)}$ N."], f"${fr(P,1)}$ N")
    for P in [20,50,100,5,80,30,150,12]:
        m=P/g
        add("intermediaire","poids-masse", f"Un objet a un poids de {P} N. Calculer sa masse (on prend $g = 10$ N/kg).",
            [f"$m = \\dfrac{{P}}{{g}} = \\dfrac{{{P}}}{{10}} = {fr(m,2)}$ kg."], f"${fr(m,2)}$ kg")
    _i=1
    while len(E)<50:
        _P=_i*10
        add("application","poids-masse", f"Poids d'une masse de {_i} kg ($g=10$ N/kg) ?", [f"$P = {_i}\\times 10 = {_P}$ N."], f"${_P}$ N"); _i+=1
    E=E[:50]; return [exo(i+1,*t) for i,t in enumerate(E)]

def gen_conversions_energie():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (P,t) in [(60,2),(100,3),(1500,1),(2000,4),(40,5),(75,8),(1200,2),(500,6)]:
        En=P*t
        add("application","energie", f"Un appareil de puissance {P} W fonctionne {t} h. Énergie consommée (en Wh) ?",
            [f"$E = P \\times t = {P} \\times {t} = {En}$ Wh."], f"${En}$ Wh")
    for Wh in [2000,3500,1200,800,5400,4500,600,7200]:
        add("application","conversion", f"Convertir {Wh} Wh en kWh.",
            [f"$1\\ \\text{{kWh}} = 1000\\ \\text{{Wh}}$ donc ${Wh}\\ \\text{{Wh}} = {fr(Wh/1000,2)}$ kWh."], f"${fr(Wh/1000,2)}$ kWh")
    for kWh in [1,2,0.5,3,1.5,10,0.2,4]:
        J=kWh*3.6e6
        add("approfondissement","conversion", f"Convertir {fr(kWh,2)} kWh en joules.",
            [f"$1\\ \\text{{kWh}} = 3{{,}}6\\times 10^6\\ \\text{{J}}$ donc $= {fr(J,0)}$ J."], f"${fr(J,0)}$ J")
    _i=1
    while len(E)<50:
        _P=50*_i; _E=_P*2
        add("application","energie", f"Appareil de {_P} W pendant 2 h : énergie (Wh) ?", [f"$E = {_P}\\times 2 = {_E}$ Wh."], f"${_E}$ Wh"); _i+=1
    E=E[:50]; return [exo(i+1,*t) for i,t in enumerate(E)]

def gen_atomes_ions():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    def de(nom): return ("d'" if nom[0] in "aeiouéèêh" else "de ") + nom
    def pl(n,mot): return f"${n}$ {mot}" + ("s" if n>1 else "")
    def el(n): return "un électron" if n==1 else f"{n} électrons"
    atomes=[("carbone",6,12),("oxygène",8,16),("azote",7,14),("hydrogène",1,1),("sodium",11,23),("chlore",17,35),("fer",26,56),("aluminium",13,27),("hélium",2,4),("calcium",20,40),("soufre",16,32),("magnésium",12,24)]
    for (nom,Z,A) in atomes:
        add("application","structure-atome", f"L'atome {de(nom)} a un numéro atomique $Z = {Z}$. Combien possède-t-il d'électrons ?",
            [f"Un atome est électriquement neutre : électrons = protons = $Z = {Z}$."], pl(Z,"électron"))
    for (nom,Z,A) in atomes:
        add("intermediaire","structure-atome", f"L'atome {de(nom)} a $Z = {Z}$ et un nombre de masse $A = {A}$. Nombre de neutrons ?",
            [f"Neutrons $= A - Z = {A} - {Z} = {A-Z}$."], pl(A-Z,"neutron"))
    ions=[("sodium Na⁺",1,"perdu"),("chlorure Cl⁻",1,"gagné"),("calcium Ca²⁺",2,"perdu"),("oxyde O²⁻",2,"gagné"),("aluminium Al³⁺",3,"perdu"),("magnésium Mg²⁺",2,"perdu"),("fluorure F⁻",1,"gagné"),("potassium K⁺",1,"perdu")]
    for (ion,n,sens) in ions:
        signe=f"{'+' if sens=='perdu' else '-'}{n if n>1 else ''}"
        add("approfondissement","ions", f"L'ion {ion} se forme quand l'atome a {sens} {el(n)}. Quelle est sa charge électrique ?",
            [f"Perdre un électron → charge +, en gagner → charge −. Charge de l'ion : ${signe}$."], f"${signe}$")
    for (nom,Z,A) in atomes:
        add("application","structure-atome", f"Combien de protons y a-t-il dans le noyau de l'atome {de(nom)} ($Z={Z}$) ?", [f"Protons $= Z = {Z}$."], pl(Z,"proton"))
    # pH de solutions courantes (valeurs approchées réalistes)
    for (sol,ph,nature,expl) in [("Le jus de citron","2","acide","il est inférieur à 7"),
                                 ("Le vinaigre","3","acide","il est inférieur à 7"),
                                 ("L'eau pure (à 25 °C)","7","neutre","il est égal à 7"),
                                 ("L'eau savonneuse","10","basique","il est supérieur à 7"),
                                 ("L'eau de Javel","12","basique","il est supérieur à 7"),
                                 ("Le café","5","acide","il est inférieur à 7")]:
        add("application","ph", f"{sol} a un pH proche de {ph}. Cette solution est-elle acide, neutre ou basique ?",
            [f"Le pH vaut environ {ph} : {expl}.", "pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique."],
            f"Solution {nature}")
    E=E[:50]; return [exo(i+1,*t) for i,t in enumerate(E)]

def gen_transformations_chimiques():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (mr,mp1) in [(10,4),(25,10),(50,32),(18,8),(40,15),(12,5),(64,36),(30,22),(100,44),(9,4),(56,20),(80,53)]:
        mp2=mr-mp1
        add("application","conservation-masse", f"La masse totale des réactifs est {mr} g. Un produit a une masse de {mp1} g. Masse de l'autre produit ?",
            [f"La masse se conserve : produits = réactifs = {mr} g.",f"$= {mr} - {mp1} = {mp2}$ g."], f"${mp2}$ g")
    for (m1,m2) in [(12,32),(23,35),(4,32),(56,16),(27,48),(24,16),(40,71),(14,48)]:
        tot=m1+m2
        add("intermediaire","conservation-masse", f"Deux réactifs de {m1} g et {m2} g réagissent totalement. Masse totale des produits ?",
            [f"Conservation de la masse : $= {m1} + {m2} = {tot}$ g."], f"${tot}$ g")
    _i=1
    while len(E)<50:
        _mr=20*_i; _mp1=7*_i; _mp2=_mr-_mp1
        add("application","conservation-masse", f"Réactifs : {_mr} g, un produit : {_mp1} g. Masse de l'autre produit ?", [f"$= {_mr} - {_mp1} = {_mp2}$ g."], f"${_mp2}$ g"); _i+=1
    E=E[:50]; return [exo(i+1,*t) for i,t in enumerate(E)]

def gen_pensee_informatique():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (x0,a,n) in [(0,3,4),(0,5,3),(2,4,2),(1,2,5),(10,-2,3),(0,7,2),(5,3,4),(0,1,10)]:
        r=x0+a*n; sg='+' if a>=0 else '-'; op="ajoute" if a>=0 else "retire"
        add("application","algorithme", f"Un programme démarre avec $x = {x0}$ puis répète {n} fois « $x$ prend la valeur $x {sg} {abs(a)}$ ». Valeur finale de $x$ ?",
            [f"On {op} {abs(a)} à chaque étape ({n} fois) : $x = {x0} {sg} {n}\\times {abs(a)} = {r}$."], f"$x = {r}$")
    for n in [5,10,4,6,8,3,7,12]:
        s=n*(n+1)//2
        add("intermediaire","algorithme", f"$s = 0$, puis pour $i$ de 1 à {n} : « $s$ prend $s + i$ ». Valeur finale de $s$ ?",
            [f"$s = 1+2+\\dots+{n} = \\dfrac{{{n}\\times {n+1}}}{{2}} = {s}$."], f"$s = {s}$")
    for (x0,a,n) in [(1,2,4),(1,3,3),(2,2,3),(1,5,2),(1,2,6),(3,2,3)]:
        r=x0*(a**n)
        add("approfondissement","algorithme", f"$x = {x0}$, puis {n} fois « $x$ prend $x \\times {a}$ ». Valeur finale de $x$ ?",
            [f"$x = {x0} \\times {a}^{n} = {r}$."], f"$x = {r}$")
    _i=1
    while len(E)<50:
        _r=3*_i
        add("application","algorithme", f"$x=0$, on répète 3 fois « $x$ prend $x+{_i}$ ». Valeur finale ?", [f"$x = 3\\times {_i} = {_r}$."], f"$x = {_r}$"); _i+=1
    E=E[:50]; return [exo(i+1,*t) for i,t in enumerate(E)]

# ============ Générateurs primaire / collège (calcul, déterministes) ============
def _uniques(E, n=50):
    """Garde les n premiers énoncés distincts (les formules en k bouclent vite)."""
    vus=set(); out=[]
    for t in E:
        if t[2] in vus: continue
        vus.add(t[2]); out.append(t)
        if len(out)==n: break
    assert len(out)==n, f"pas assez d'énoncés distincts ({len(out)})"
    return out
def _additions(op_max):
    E=[]
    for k in range(2000):
        a=(k*7)%op_max+1; b=(k*11+3+k//op_max)%op_max+1
        E.append(("application","addition", f"Pose et calcule : ${a} + {b}$", [f"${a} + {b} = {a+b}$."], f"${a+b}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _soustractions(op_max):
    E=[]
    for k in range(2000):
        h=op_max//2+1; b=(k*5)%h+1; a=b+((k*7+k//h)%h)+1
        E.append(("application","soustraction", f"Pose et calcule : ${a} - {b}$", [f"${a} - {b} = {a-b}$."], f"${a-b}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _multiplications(a_max,b_max):
    E=[]
    for k in range(2000):
        a=(k*7)%a_max+2; b=(k*3)%b_max+2
        E.append(("application","multiplication", f"Pose et calcule : ${a} \\times {b}$", [f"${a} \\times {b} = {a*b}$."], f"${a*b}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _divisions(diviseur_max):
    E=[]
    for k in range(2000):
        d=(k*3)%diviseur_max+2; q=(k*5)%25+1; r=(k*7)%d
        n=d*q+r
        E.append(("application","division", f"Effectue la division euclidienne de ${n}$ par ${d}$.", [f"${n} = {d} \\times {q} + {r}$ (avec ${r} < {d}$)."], f"quotient {q}, reste {r}"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _tables():
    E=[]
    for k in range(2000):
        a=(k%9)+2; b=((k*5+k//9)%9)+2
        E.append(("application","tables", f"Combien font ${a} \\times {b}$ ?", [f"${a} \\times {b} = {a*b}$."], f"${a*b}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _calcul_mental(mx):
    E=[]
    for k in range(2000):
        a=(k*7)%mx+1; b=(k*3)%(mx//2+1)+1; op=k%3
        if op==0: q=f"{a} + {b}"; r=a+b
        elif op==1: q=f"{a+b} - {b}"; r=a
        else: x=(k%12)+2; y=(k%9)+2; q=f"{x} \\times {y}"; r=x*y
        E.append(("application","calcul-mental", f"Calcule mentalement : ${q}$", [f"${q} = {r}$."], f"${r}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _nombres_compare(mx):
    E=[]
    for k in range(2000):
        a=(k*7)%mx+1; b=(k*11+3+k//mx)%mx+1
        s=">" if a>b else ("<" if a<b else "=")
        E.append(("application","comparer", f"Compare ${a}$ et ${b}$ (écris $<$, $>$ ou $=$).", [f"${a} {s} {b}$."], f"${s}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _grands_nombres():
    def m(x): return f"{x:,}".replace(",", "\\,") if x>=10000 else str(x)
    E=[]; nums=[3456,12789,90210,45678,100234,7654,560123,9087,234567,80456,671000,45090,308745,120500,4560,78901,650000,13245,900001,55555]
    for k in range(2000):
        n=nums[k%len(nums)]; base=[10,100,1000][k%3]; nom={10:"à la dizaine la plus proche",100:"à la centaine la plus proche",1000:"au millier le plus proche"}[base]
        arr=(n+base//2)//base*base  # arrondi scolaire : 5 → au-dessus
        E.append(("application","arrondir", f"Arrondir ${m(n)}$ {nom}.", [f"${m(n)} \\approx {m(arr)}$."], f"${m(arr)}$"))
    E1=_uniques(E,25); E=[]
    for k in range(2000):
        a=nums[k%len(nums)]; b=nums[(k+3+k//len(nums))%len(nums)]
        if a==b: continue
        s=">" if a>b else ("<" if a<b else "=")
        E.append(("application","comparer", f"Compare ${m(a)}$ et ${m(b)}$.", [f"${m(a)} {s} {m(b)}$."], f"${s}$"))
    return [exo(i+1,*t) for i,t in enumerate(E1+_uniques(E,25))]

def _decimaux_ops():
    E=[]
    for k in range(2000):
        a=round(((k*7)%80+1)/10,1); b=round(((k*3)%60+1)/10,1); op=k%3
        if op==0: r=round(a+b,2); q=f"{fr(a,1)} + {fr(b,1)}"
        elif op==1: aa,bb=max(a,b),min(a,b); r=round(aa-bb,2); q=f"{fr(aa,1)} - {fr(bb,1)}"
        else: c=(k%9)+2; r=round(a*c,2); q=f"{fr(a,1)} \\times {c}"
        E.append(("application","decimaux", f"Calcule : ${q}$", [f"${q} = {fr(r,2)}$."], f"${fr(r,2)}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _perimetre_aire():
    E=[]
    for k in range(2000):
        L=(k*3)%20+2; l=(k*2)%14+2
        E.append(("application","perimetre", f"Un rectangle mesure ${L}$ cm de long et ${l}$ cm de large. Calcule son périmètre.", [f"$P = 2 \\times ({L} + {l}) = {2*(L+l)}$ cm."], f"${2*(L+l)}$ cm"))
    E1=_uniques(E,25); E=[]
    for k in range(2000):
        L=(k*3)%20+2; l=(k*2)%14+2
        E.append(("application","aire", f"Un rectangle mesure ${L}$ cm sur ${l}$ cm. Calcule son aire.", [f"$A = {L} \\times {l} = {L*l}$ cm²."], f"${L*l}$ cm²"))
    return [exo(i+1,*t) for i,t in enumerate(E1+_uniques(E,25))]

def _durees():
    E=[]
    for k in range(2000):
        h=(k%5)+1; m=(k*7)%60; add=(k*11)%50+10; tot=h*60+m+add; H=tot//60; M=tot%60
        E.append(("application","durees", f"Un film commence à ${h}$ h ${m:02d}$ et dure ${add}$ min. À quelle heure se termine-t-il ?", [f"${h}$ h ${m:02d}$ $+ {add}$ min $= {H}$ h ${M:02d}$."], f"${H}$ h ${M:02d}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _fractions_qty(decal=0):
    E=[]
    for k in range(2000):
        j=k+decal; d=[2,3,4,5,6,10][j%6]; n=1+((j+j//6)%(d-1)); q=d*(((j+j//6)%9)+2); val=q*n//d
        E.append(("application","fractions", f"Calcule les $\\dfrac{{{n}}}{{{d}}}$ de ${q}$.", [f"${q} \\div {d} = {q//d}$, puis $\\times {n} = {val}$."], f"${val}$"))
    return [exo(i+1,*t) for i,t in enumerate(_uniques(E))]

def _moities_doubles():
    E=[]
    for k in range(2000):
        n=2*((k*3)%40+1)
        E.append(("application","moitie", f"Quelle est la moitié de ${n}$ ?", [f"${n} \\div 2 = {n//2}$."], f"${n//2}$"))
    E1=_uniques(E,25); E=[]
    for k in range(2000):
        n=(k*3)%50+1
        E.append(("application","double", f"Quel est le double de ${n}$ ?", [f"${n} \\times 2 = {2*n}$."], f"${2*n}$"))
    return [exo(i+1,*t) for i,t in enumerate(E1+_uniques(E,25))]

def _problemes(mx):
    E=[]; noms=["billes","bonbons","images","euros","livres","crayons","pommes","autocollants"]
    for k in range(50):
        a=(k*7)%mx+2; b=(k*3)%(mx//2+1)+1; obj=noms[k%len(noms)]; typ=k%3
        if typ==0: r=a+b; q=f"Léa a {a} {obj} et en reçoit {b}. Combien en a-t-elle en tout ?"; c=f"${a} + {b} = {r}$."
        elif typ==1: r=a; q=f"Tom avait {a+b} {obj}, il en donne {b}. Combien lui en reste-t-il ?"; c=f"${a+b} - {b} = {r}$."
        else: cc=(k%9)+2; r=a*cc; q=f"Il y a {cc} paquets de {a} {obj}. Combien {'d' + chr(39) if obj[0] in 'aeiouéh' else 'de '}{obj} en tout ?"; c=f"${cc} \\times {a} = {r}$."
        E.append(("probleme","problemes", q, [c], f"${r}$"))
    return [exo(i+1,*t) for i,t in enumerate(E)]

def _proportionnalite_simple():
    E=[]
    for k in range(50):
        pu=(k%9)+2; n=(k%7)+2; m=(k%6)+3; Pn=pu*n; Pm=pu*m
        E.append(("application","proportionnalite", f"{n} objets identiques coûtent ${Pn}$ €. Combien coûtent ${m}$ de ces objets ?", [f"Prix d'un objet : ${Pn} \\div {n} = {pu}$ €. Puis ${m} \\times {pu} = {Pm}$ €."], f"${Pm}$ €"))
    return [exo(i+1,*t) for i,t in enumerate(E)]

REGISTRE = {
    ("troisieme","triangles"): gen_triangles,
    ("troisieme","puissances"): gen_puissances,
    ("troisieme","nombres-rationnels"): gen_rationnels,
    ("troisieme","calcul-litteral"): gen_calcul_litteral,
    ("troisieme","proportionnalite"): gen_proportionnalite,
    ("troisieme","racine-carree"): gen_racine_carree,
    ("troisieme","statistiques"): gen_statistiques,
    ("troisieme","fonctions"): gen_fonctions,
    ("troisieme","multiples-diviseurs"): gen_multiples_diviseurs,
    ("troisieme","probabilites"): gen_probabilites,
    ("troisieme","reperage"): gen_reperage,
    ("troisieme","translations-vecteurs"): gen_translations_vecteurs,
    ("troisieme","representation-espace"): gen_representation_espace,
    ("troisieme","pensee-informatique"): gen_pensee_informatique,
    ("troisieme","masse-volumique"): gen_masse_volumique,
    ("troisieme","poids-gravitation-forces"): gen_poids_forces,
    ("troisieme","conversions-energie-signaux"): gen_conversions_energie,
    ("troisieme","atomes-ions-ph"): gen_atomes_ions,
    ("troisieme","transformations-chimiques"): gen_transformations_chimiques,
}

def gen_puissance_energie():
    E=[]
    def add(d,n,e,c,r): E.append((d,n,e,c,r))
    for (U,I) in [(230,2),(12,3),(230,0.5),(6,2),(24,5),(230,1),(9,3),(48,2),(230,4),(5,2),(15,3),(230,10)]:
        P=U*I
        add("application","puissance-electrique", f"Un appareil est traversé par une intensité de {fr(I,2)} A sous une tension de {U} V. Calculer sa puissance électrique.",
            [f"$P = U \\times I = {U} \\times {fr(I,2)} = {fr(P,1)}$ W."], f"${fr(P,1)}$ W")
    for (P,t) in [(60,2),(100,3),(1500,1),(2000,4),(40,5),(1200,2),(500,6),(75,8)]:
        En=P*t
        add("intermediaire","energie", f"Un appareil de puissance {P} W fonctionne pendant {t} h. Énergie consommée (en Wh) ?",
            [f"$E = P \\times t = {P} \\times {t} = {En}$ Wh."], f"${En}$ Wh")
    for Wh in [2000,3500,1200,800,5400,4500,600,7200]:
        add("application","conversion", f"Convertir {Wh} Wh en kWh.",
            [f"$1\\ \\text{{kWh}} = 1000\\ \\text{{Wh}}$ donc $= {fr(Wh/1000,2)}$ kWh."], f"${fr(Wh/1000,2)}$ kWh")
    for (P,U) in [(1150,230),(60,12),(2300,230),(120,24),(46,230),(36,12),(690,230),(100,20)]:
        I=P/U
        add("approfondissement","puissance-electrique", f"Un appareil de puissance {P} W fonctionne sous une tension de {U} V. Calculer l'intensité du courant.",
            [f"$I = \\dfrac{{P}}{{U}} = \\dfrac{{{P}}}{{{U}}} = {fr(I,2)}$ A."], f"${fr(I,2)}$ A")
    _i=1
    while len(E)<50:
        _P=230*_i
        add("application","puissance-electrique", f"$U=230$ V, $I={_i}$ A : puissance électrique ?", [f"$P = 230\\times{_i} = {_P}$ W."], f"${_P}$ W")
        _i+=1
    E=E[:50]; return [exo(i+1,*t) for i,t in enumerate(E)]


# Regles multi-niveaux (notions communes) : (niveaux, mots-cles slug, generateur)
REGLES = [
    # (niveaux, matiere, mots-cles slug, generateur)
    ({"quatrieme","troisieme"}, "maths", ["proportion","pourcentage"], gen_proportionnalite),
    ({"quatrieme","troisieme"}, "maths", ["statistique"], gen_statistiques),
    ({"quatrieme","troisieme"}, "maths", ["puissance"], gen_puissances),
    ({"quatrieme","troisieme"}, "maths", ["rationnel","fraction"], gen_rationnels),
    ({"cinquieme","quatrieme","troisieme"}, "physique-chimie", ["masse-volumique","densite"], gen_masse_volumique),
    ({"quatrieme","troisieme"}, "physique-chimie", ["poids","gravitation"], gen_poids_forces),
    ({"quatrieme","troisieme"}, "physique-chimie", ["puissance","energie","electri"], gen_puissance_energie),
]

def choisir(niveau, matiere, slug):
    g = REGISTRE.get((niveau, slug))
    if g: return g
    for niveaux, mat, motscles, gen in REGLES:
        if niveau in niveaux and matiere == mat and any(k in slug for k in motscles):
            return gen
    return None

REGISTRE.update({
    ("cp","addition"): lambda: _additions(10),
    ("cp","soustraction"): lambda: _soustractions(20),
    ("cp","calcul-mental"): lambda: _calcul_mental(20),
    ("cp","comparer-ranger"): lambda: _nombres_compare(20),
    ("cp","nombres-jusqu-a-20"): lambda: _nombres_compare(20),
    ("cp","problemes"): lambda: _problemes(20),
    ("ce1","addition-posee"): lambda: _additions(1000),
    ("ce1","soustraction-posee"): lambda: _soustractions(1000),
    ("ce1","calcul-mental"): lambda: _calcul_mental(100),
    ("ce1","tables-de-multiplication"): _tables,
    ("ce1","moities-et-doubles"): _moities_doubles,
    ("ce1","nombres-jusqu-a-1000"): lambda: _nombres_compare(1000),
    ("ce1","problemes"): lambda: _problemes(100),
    ("ce2","calcul-mental"): lambda: _calcul_mental(1000),
    ("ce2","fractions-simples"): lambda: _fractions_qty(0),
    ("ce2","multiplication-posee"): lambda: _multiplications(90,9),
    ("ce2","nombres-jusqu-a-10000"): lambda: _nombres_compare(10000),
    ("ce2","perimetre-et-mesures"): _perimetre_aire,
    ("ce2","problemes"): lambda: _problemes(1000),
    ("ce2","sens-de-la-division"): lambda: _divisions(9),
    ("cm1","cercle-triangles-perimetre-aire"): _perimetre_aire,
    ("cm1","division-euclidienne"): lambda: _divisions(20),
    ("cm1","durees"): _durees,
    ("cm1","fractions"): lambda: _fractions_qty(50),
    ("cm1","grands-nombres"): _grands_nombres,
    ("cm1","multiplication-posee"): lambda: _multiplications(900,90),
    ("cm1","nombres-decimaux"): _decimaux_ops,
    ("cm1","operations-decimaux"): _decimaux_ops,
    ("cm1","proportionnalite"): _proportionnalite_simple,
    ("cm2","aires-perimetres-volumes"): _perimetre_aire,
    ("cm2","calcul-mental"): lambda: _calcul_mental(10000),
    ("cm2","division-posee"): lambda: _divisions(90),
    ("cm2","fractions-et-operations"): lambda: _fractions_qty(100),
    ("cm2","grands-nombres"): _grands_nombres,
    ("cm2","operations-sur-les-decimaux"): _decimaux_ops,
    ("cm2","problemes"): lambda: _problemes(10000),
    ("cm2","proportionnalite-et-pourcentages"): _proportionnalite_simple,
    ("sixieme","fractions"): lambda: _fractions_qty(150),
    ("sixieme","longueurs-aires-volumes"): _perimetre_aire,
    ("sixieme","nombres-entiers-decimaux"): _decimaux_ops,
    ("sixieme","proportionnalite"): _proportionnalite_simple,
    ("sixieme","durees"): _durees,
    ("sixieme","initiation-algebre"): _calcul_mental_alg if False else (lambda: _calcul_mental(50)),
})

def traiter(racine="contenu"):
    faits, ignores = [], []
    for chemin in sorted(glob.glob(os.path.join(racine,"*","maths","*")) + glob.glob(os.path.join(racine,"*","physique-chimie","*"))):
        if not os.path.isdir(chemin): continue
        parts = chemin.split(os.sep)
        niveau, matiere, slug = parts[-3], parts[-2], parts[-1]
        gen = choisir(niveau, matiere, slug)
        fexo = os.path.join(chemin,"exercice.json")
        if gen is None:
            ignores.append(f"{niveau}/{matiere}/{slug}"); continue
        if not os.path.exists(fexo):
            ignores.append(f"{niveau}/{matiere}/{slug} (pas de exercice.json)"); continue
        data = json.load(open(fexo, encoding="utf-8"))
        data["exercices"] = gen()
        json.dump(data, open(fexo,"w",encoding="utf-8"), ensure_ascii=False, indent=2)
        faits.append(f"{niveau}/{matiere}/{slug} ({len(data['exercices'])} exos)")
    print("=== CHAPITRES REMPLIS ===")
    for f in faits: print("  +", f)
    print(f"Total rempli : {len(faits)}  |  ignorés (pas encore de générateur) : {len(ignores)}")
    return faits, ignores

try:
    import gen_extra
    REGISTRE.update(gen_extra.EXTRA)
except Exception as _e:
    print("[gen_extra non charge]", _e)

# Générateurs enrichis (≥ 4 notions par chapitre), un fichier par lot : gen_enrichi_*.py.
# Chargés en dernier : ils remplacent les générateurs plus simples des mêmes chapitres.
import glob as _glob, importlib as _importlib
for _f in sorted(_glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), "gen_enrichi_*.py"))):
    try:
        _m = _importlib.import_module(os.path.basename(_f)[:-3])
        REGISTRE.update(_m.EXTRA)
    except Exception as _e:
        print(f"[{os.path.basename(_f)} non chargé]", _e)

if __name__ == "__main__":
    import sys
    traiter(sys.argv[1] if len(sys.argv)>1 else "contenu")

