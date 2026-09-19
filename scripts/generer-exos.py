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
    ex = f"{a}\\sqrt{{{b}}}" if a != 1 else f"\\sqrt{{{b}}}"
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
             f"Donc $\\mathrm{{BC}} = \\sqrt{{{n}}}$" + (f" $= {r}$ cm." if r*r==n else f" \\approx {fr(math.sqrt(n))}$ cm.")], rep)
    for (h,a,d) in [(5,3,"application"),(13,5,"application"),(10,6,"intermediaire"),(25,7,"intermediaire"),(6,4,"approfondissement"),(9,5,"approfondissement")]:
        n=h*h-a*a; r=math.isqrt(n)
        rep=f"$\\mathrm{{DF}} = {r}$ cm" if r*r==n else f"$\\mathrm{{DF}} = {rac_latex(n)}$ cm"
        add(d,"theoreme-pythagore",
            f"$\\mathrm{{DEF}}$ est rectangle en $\\mathrm{{D}}$. $\\mathrm{{EF}} = {h}$ cm (hypoténuse) et $\\mathrm{{DE}} = {a}$ cm. Calculer $\\mathrm{{DF}}$.",
            [f"D'après Pythagore, $\\mathrm{{EF}}^2 = \\mathrm{{DE}}^2 + \\mathrm{{DF}}^2$.",
             f"$\\mathrm{{DF}}^2 = {h}^2 - {a}^2 = {h*h} - {a*a} = {n}$.",
             f"Donc $\\mathrm{{DF}} = \\sqrt{{{n}}}$" + (f" $= {r}$ cm." if r*r==n else f" \\approx {fr(math.sqrt(n))}$ cm.")], rep)
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
REGISTRE = {
    ("troisieme","triangles"): gen_triangles,
    ("troisieme","puissances"): gen_puissances,
    ("troisieme","nombres-rationnels"): gen_rationnels,
    ("troisieme","calcul-litteral"): gen_calcul_litteral,
}

def traiter(racine="contenu"):
    faits, ignores = [], []
    for chemin in sorted(glob.glob(os.path.join(racine,"*","maths","*")) + glob.glob(os.path.join(racine,"*","physique-chimie","*"))):
        if not os.path.isdir(chemin): continue
        parts = chemin.split(os.sep)
        niveau, matiere, slug = parts[-3], parts[-2], parts[-1]
        gen = REGISTRE.get((niveau, slug))
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

if __name__ == "__main__":
    import sys
    traiter(sys.argv[1] if len(sys.argv)>1 else "contenu")
