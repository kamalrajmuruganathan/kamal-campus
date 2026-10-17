# -*- coding: utf-8 -*-
"""Générateurs enrichis — lot g : 2de maths, information chiffrée.

Programme de seconde 2026 (docs/programme-seconde-2026.txt) :
  l. 644-647 (proportion de proportion, évolutions successives ou réciproques,
  proportion ou évolution), l. 653-654 (pourcentage de pourcentage),
  l. 656-663 (variation absolue, coefficient multiplicateur, taux d'évolution,
  produit et inverse des coefficients), l. 675-678 (capacités attendues),
  l. 311-316 (automatismes : proportions, « augmenter de 5 % » = « multiplier par 1,05 »).

Toutes les valeurs des réponses sont calculées par le code (fractions exactes).
"""
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction as F

ORDRE_DIFF = {"application": 0, "intermediaire": 1, "approfondissement": 2, "probleme": 3}


# ----------------------------------------------------------------- aides
def _dec(x, d):
    q = Decimal(1).scaleb(-d)
    if isinstance(x, F):
        v = Decimal(x.numerator) / Decimal(x.denominator)
    else:
        v = Decimal(repr(x))
    return v.quantize(q, rounding=ROUND_HALF_UP)


def _grouper(ent):
    s = str(ent)
    g = []
    while len(s) > 3:
        g.insert(0, s[-3:])
        s = s[:-3]
    g.insert(0, s)
    return "\\,".join(g)


def nb(x, d=4, garder=False):
    """Nombre LaTeX arrondi à d décimales : 2{,}5 ; 12\\,500 ; -0{,}9."""
    v = _dec(F(x), d)
    neg = v < 0
    s = format(abs(v), "f")
    if "." in s:
        ent, dec = s.split(".")
        if not garder:
            dec = dec.rstrip("0")
    else:
        ent, dec = s, ""
    r = _grouper(int(ent)) + ("{,}" + dec if dec else "")
    if neg and r.strip("0{,}\\") != "":
        r = "-" + r
    return r


def exact(x):
    """Vrai si x (Fraction) a une écriture décimale finie."""
    d = F(x).denominator
    for p in (2, 5):
        while d % p == 0:
            d //= p
    return d == 1


def eg(x, d=2):
    """« = 0{,}36 » si exact, sinon « \\approx 0{,}91 »."""
    return f"= {nb(x, 8)}" if exact(x) else f"\\approx {nb(x, d)}"


def pc(x, d=2):
    """Proportion ou taux x (Fraction) écrit en pourcentage : 36\\,\\%."""
    return f"{nb(F(x) * 100, d)}\\,\\%"


def pcs(t, d=2):
    """Taux signé : +32\\,\\% ou -20\\,\\%."""
    return ("+" if t > 0 else "") + pc(t, d)


def eur(x):
    """Montant en euros : 656 ; 594{,}30."""
    x = F(x)
    return nb(x, 2, garder=(x.denominator != 1))


def fl(f):
    f = F(f)
    if f.denominator == 1:
        return str(f.numerator)
    s = "-" if f < 0 else ""
    return f"{s}\\dfrac{{{abs(f.numerator)}}}{{{f.denominator}}}"


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


# =====================================================================
# 2de — INFORMATION CHIFFRÉE
# =====================================================================
def g2_information_chiffree():
    E = []

    def add(d, n, e, c, r):
        E.append((d, n, e, c, r))

    # ------------------------------------------------ a) proportions (8)
    N = "proportion"
    p = F(450, 1250)
    add("application", N,
        "Dans un lycée de $1\\,250$ élèves, $450$ sont en seconde. Quelle proportion des élèves est en seconde ? Donner le résultat en pourcentage.",
        [f"$p = \\dfrac{{450}}{{1\\,250}} = {fl(p)} = {nb(p)}$.",
         f"Soit ${pc(p)}$ des élèves."],
        f"${pc(p)}$")
    p = F(18, 80)
    add("application", N,
        "Sur les $80$ passagers d'un bus, $18$ ont un abonnement. Quelle est la proportion d'abonnés, en écriture décimale ?",
        [f"$p = \\dfrac{{18}}{{80}} = {nb(p)}$."],
        f"$p = {nb(p)}$")
    p = F(3, 8)
    add("application", N,
        "Exprimer la proportion $\\dfrac{3}{8}$ en écriture décimale, puis en pourcentage.",
        [f"$\\dfrac{{3}}{{8}} = 3 \\div 8 = {nb(p)}$.",
         f"${nb(p)} = \\dfrac{{{nb(p * 100)}}}{{100}}$, soit ${pc(p)}$."],
        f"${nb(p)}$, soit ${pc(p)}$")
    tout, p = 4800, F(15, 100)
    add("application", N,
        "Une commune de $4\\,800$ habitants compte $15\\,\\%$ d'enfants de moins de $10$ ans. Combien d'enfants de moins de $10$ ans compte-t-elle ?",
        ["Partie = proportion $\\times$ tout.",
         f"$0{{,}}15 \\times 4\\,800 = {nb(p * tout)}$."],
        f"${nb(p * tout)}$ enfants")
    add("application", N,
        "Une bouteille de nectar d'orange de $75$ cL contient $40\\,\\%$ de jus d'orange. Quel volume de jus contient-elle ?",
        ["Partie = proportion $\\times$ tout.",
         f"$0{{,}}4 \\times 75 = {nb(F(4, 10) * 75)}$ cL."],
        f"${nb(F(4, 10) * 75)}$ cL")
    add("intermediaire", N,
        "Dans un club de sport, $54$ adhérents sont mineurs, ce qui représente $30\\,\\%$ des adhérents. Combien le club compte-t-il d'adhérents ?",
        ["On cherche le tout connaissant une partie : $0{,}3 \\times N = 54$.",
         f"$N = \\dfrac{{54}}{{0{{,}}3}} = {nb(F(54) / F(3, 10))}$."],
        f"${nb(F(54) / F(3, 10))}$ adhérents")
    p = F(45, 1250)   # 4,5 g sur 125 g
    add("intermediaire", N,
        "Un pot de yaourt de $125$ g contient $4{,}5$ g de protéines. Quelle est la proportion de protéines dans ce yaourt, en pourcentage ?",
        [f"$p = \\dfrac{{4{{,}}5}}{{125}} = {nb(p)}$.",
         f"Soit ${pc(p)}$."],
        f"${pc(p)}$")
    add("intermediaire", N,
        "Lors d'une élection, une candidate obtient $3\\,528$ voix, soit $42\\,\\%$ des suffrages exprimés. Combien y a-t-il eu de suffrages exprimés ?",
        ["Tout = partie $\\div$ proportion.",
         f"$\\dfrac{{3\\,528}}{{0{{,}}42}} = {nb(F(3528) / F(42, 100))}$."],
        f"${nb(F(3528) / F(42, 100))}$ suffrages exprimés")

    # ---------------------------------- b) pourcentage de pourcentage (7)
    N = "pourcentage-de-pourcentage"
    p1, p2 = F(60, 100), F(25, 100)
    add("application", N,
        "Dans un lycée, $60\\,\\%$ des élèves sont des filles et $25\\,\\%$ de ces filles pratiquent un sport en club. Quel pourcentage des élèves du lycée sont des filles pratiquant un sport en club ?",
        ["Les ensembles sont inclus les uns dans les autres : on multiplie les proportions.",
         f"$0{{,}}6 \\times 0{{,}}25 = {nb(p1 * p2)}$, soit ${pc(p1 * p2)}$."],
        f"${pc(p1 * p2)}$")
    p1, p2 = F(35, 100), F(40, 100)
    add("application", N,
        "Dans une entreprise, $35\\,\\%$ des salariés sont cadres et $40\\,\\%$ des cadres sont des femmes. Quelle est la proportion de femmes cadres parmi l'ensemble des salariés ?",
        ["Proportion de proportion : on multiplie.",
         f"$0{{,}}35 \\times 0{{,}}4 = {nb(p1 * p2)}$, soit ${pc(p1 * p2)}$."],
        f"${pc(p1 * p2)}$")
    p1, p2 = F(45, 100), F(20, 100)
    add("intermediaire", N,
        "Un village compte $2\\,400$ habitants. $45\\,\\%$ d'entre eux ont plus de $60$ ans et, parmi ceux-ci, $20\\,\\%$ vivent seuls. Combien d'habitants ont plus de $60$ ans et vivent seuls ?",
        [f"Proportion dans tout le village : $0{{,}}45 \\times 0{{,}}2 = {nb(p1 * p2)}$.",
         f"$0{{,}}09 \\times 2\\,400 = {nb(p1 * p2 * 2400)}$."],
        f"${nb(p1 * p2 * 2400)}$ habitants")
    s = F(12) * F(75, 100) * F(40, 100)
    add("intermediaire", N,
        "Une exploitation agricole a une surface de $12$ ha. $75\\,\\%$ de cette surface est cultivée et $40\\,\\%$ de la surface cultivée est plantée en blé. Quelle surface est plantée en blé ?",
        [f"Proportion de la surface totale : $0{{,}}75 \\times 0{{,}}4 = {nb(F(3, 10))}$.",
         f"$0{{,}}3 \\times 12 = {nb(s)}$ ha."],
        f"${nb(s)}$ ha")
    p2 = F(12, 100) / F(48, 100)
    add("approfondissement", N,
        "Dans un collège, $48\\,\\%$ des élèves sont des garçons et $12\\,\\%$ des élèves sont des garçons demi-pensionnaires. Quel pourcentage des garçons est demi-pensionnaire ?",
        ["On a $0{,}48 \\times p = 0{,}12$, où $p$ est la proportion de demi-pensionnaires parmi les garçons.",
         f"$p = \\dfrac{{0{{,}}12}}{{0{{,}}48}} = {nb(p2)}$, soit ${pc(p2)}$."],
        f"${pc(p2)}$")
    add("approfondissement", N,
        "Un élève affirme : « $30\\,\\%$ des élèves sont externes et $50\\,\\%$ des externes viennent à vélo, donc $80\\,\\%$ des élèves sont des externes venant à vélo. » Corriger son raisonnement.",
        ["On n'additionne pas des pourcentages qui portent sur des ensembles de référence différents.",
         f"Les externes à vélo représentent $0{{,}}3 \\times 0{{,}}5 = {nb(F(15, 100))}$ des élèves, soit ${pc(F(15, 100))}$."],
        f"${pc(F(15, 100))}$ des élèves")
    p = F(52, 100) * F(30, 100) * F(10, 100)
    add("probleme", N,
        "Dans une ville, $52\\,\\%$ des habitants sont des femmes ; $30\\,\\%$ de ces femmes ont plus de $50$ ans et $10\\,\\%$ de ces dernières courent régulièrement. Quel pourcentage des habitants sont des femmes de plus de $50$ ans qui courent régulièrement ?",
        ["Trois ensembles inclus les uns dans les autres : on multiplie les trois proportions.",
         f"$0{{,}}52 \\times 0{{,}}3 \\times 0{{,}}1 = {nb(p)}$, soit ${pc(p)}$."],
        f"${pc(p)}$")

    # --------------------------------- c) coefficient multiplicateur (8)
    N = "coefficient-multiplicateur"
    add("application", N,
        "Augmenter une quantité de $5\\,\\%$ revient à la multiplier par quel nombre ?",
        ["Augmenter de $t\\,\\%$ revient à multiplier par $1 + \\dfrac{t}{100}$.",
         "$1 + 0{,}05 = 1{,}05$."],
        "$1{,}05$")
    add("application", N,
        "Diminuer une quantité de $12\\,\\%$ revient à la multiplier par quel nombre ?",
        ["Diminuer de $t\\,\\%$ revient à multiplier par $1 - \\dfrac{t}{100}$.",
         "$1 - 0{,}12 = 0{,}88$."],
        "$0{,}88$")
    add("application", N,
        "Multiplier une quantité par $1{,}3$ revient à l'augmenter ou à la diminuer de quel pourcentage ?",
        ["$1{,}3 = 1 + 0{,}3$ : le coefficient est supérieur à $1$, c'est une hausse.",
         "Le taux est $0{,}3$, soit une hausse de $30\\,\\%$."],
        "Une hausse de $30\\,\\%$")
    add("application", N,
        "Multiplier une quantité par $0{,}75$ revient à l'augmenter ou à la diminuer de quel pourcentage ?",
        ["$0{,}75 = 1 - 0{,}25$ : le coefficient est inférieur à $1$, c'est une baisse.",
         "Le taux est $-0{,}25$, soit une baisse de $25\\,\\%$."],
        "Une baisse de $25\\,\\%$")
    v = F(640) * F(1025, 1000)
    add("application", N,
        "Un loyer de $640$ € augmente de $2{,}5\\,\\%$. Quel est le nouveau loyer ?",
        ["Augmenter de $2{,}5\\,\\%$, c'est multiplier par $1{,}025$.",
         f"$640 \\times 1{{,}}025 = {eur(v)}$ €."],
        f"${eur(v)}$ €")
    v = F(849) * F(70, 100)
    add("intermediaire", N,
        "Un ordinateur affiché $849$ € est soldé à $-30\\,\\%$. Quel est son prix soldé ?",
        ["Diminuer de $30\\,\\%$, c'est multiplier par $0{,}7$.",
         f"$849 \\times 0{{,}}7 = {eur(v)}$ €."],
        f"${eur(v)}$ €")
    add("intermediaire", N,
        "Multiplier une quantité par $2$ revient à l'augmenter de quel pourcentage ?",
        ["$2 = 1 + 1$ : le taux d'évolution est $1$.",
         "C'est une hausse de $100\\,\\%$ (et non de $200\\,\\%$)."],
        "Une hausse de $100\\,\\%$")
    v = F(24000) * F(925, 1000)
    add("intermediaire", N,
        "Une chaîne vidéo compte $24\\,000$ abonnés. Ce nombre baisse de $7{,}5\\,\\%$. Combien d'abonnés reste-t-il ?",
        ["Diminuer de $7{,}5\\,\\%$, c'est multiplier par $1 - 0{,}075 = 0{,}925$.",
         f"$24\\,000 \\times 0{{,}}925 = {nb(v)}$."],
        f"${nb(v)}$ abonnés")

    # ------------------------------------------ d) taux d'évolution (8)
    N = "taux-evolution"
    add("application", N,
        "Le prix d'un ticket de bus passe de $1{,}60$ € à $1{,}90$ €. Calculer la variation absolue de ce prix.",
        ["Variation absolue : $V_2 - V_1$.",
         "$1{,}90 - 1{,}60 = 0{,}30$ €."],
        "$+0{,}30$ €")
    v1, v2 = F(110, 100), F(121, 100)
    add("application", N,
        "Le prix d'une baguette passe de $1{,}10$ € à $1{,}21$ €. Calculer le taux d'évolution de ce prix.",
        ["$t = \\dfrac{V_2 - V_1}{V_1}$.",
         f"$t = \\dfrac{{1{{,}}21 - 1{{,}}10}}{{1{{,}}10}} = \\dfrac{{0{{,}}11}}{{1{{,}}10}} = {nb((v2 - v1) / v1)}$, soit ${pcs((v2 - v1) / v1)}$."],
        f"$t = {pcs((v2 - v1) / v1)}$")
    v1, v2 = F(1200), F(1080)
    add("application", N,
        "Le nombre d'élèves d'un lycée passe de $1\\,200$ à $1\\,080$. Calculer le coefficient multiplicateur.",
        ["$\\text{CM} = \\dfrac{V_2}{V_1}$.",
         f"$\\text{{CM}} = \\dfrac{{1\\,080}}{{1\\,200}} = {nb(v2 / v1)}$ : c'est une baisse de $10\\,\\%$."],
        f"${nb(v2 / v1)}$")
    v1, v2 = F(25000), F(26750)
    add("intermediaire", N,
        "La population d'une ville passe de $25\\,000$ à $26\\,750$ habitants. Calculer le coefficient multiplicateur, puis le taux d'évolution.",
        [f"$\\text{{CM}} = \\dfrac{{26\\,750}}{{25\\,000}} = {nb(v2 / v1)}$.",
         f"$t = \\text{{CM}} - 1 = {nb(v2 / v1 - 1)}$, soit ${pcs(v2 / v1 - 1)}$."],
        f"$\\text{{CM}} = {nb(v2 / v1)}$ ; $t = {pcs(v2 / v1 - 1)}$")
    v1, v2 = F(699), F(55920, 100)
    add("intermediaire", N,
        "Le prix d'un smartphone passe de $699$ € à $559{,}20$ €. Calculer le taux d'évolution.",
        [f"$\\text{{CM}} = \\dfrac{{559{{,}}20}}{{699}} = {nb(v2 / v1)}$.",
         f"$t = {nb(v2 / v1)} - 1 = {nb(v2 / v1 - 1)}$, soit ${pcs(v2 / v1 - 1)}$ : une baisse de $20\\,\\%$."],
        f"$t = {pcs(v2 / v1 - 1)}$")
    v1, v2 = F(840), F(903)
    add("intermediaire", N,
        "La facture annuelle d'électricité d'une famille passe de $840$ € à $903$ €. Calculer le taux d'évolution.",
        [f"$t = \\dfrac{{903 - 840}}{{840}} = \\dfrac{{63}}{{840}} = {nb((v2 - v1) / v1)}$.",
         f"Soit ${pcs((v2 - v1) / v1)}$."],
        f"$t = {pcs((v2 - v1) / v1)}$")
    add("approfondissement", N,
        "Après une hausse de $8\\,\\%$, un prix vaut $54$ €. Quel était le prix avant la hausse ?",
        ["$V_1 \\times 1{,}08 = 54$, donc $V_1 = \\dfrac{54}{1{,}08}$.",
         f"$V_1 = {eur(F(54) / F(108, 100))}$ €. (Retirer $8\\,\\%$ de $54$ € serait faux : le pourcentage porte sur l'ancien prix.)"],
        f"${eur(F(54) / F(108, 100))}$ €")
    add("approfondissement", N,
        "Après une baisse de $15\\,\\%$, un article coûte $68$ €. Quel était son prix avant la baisse ?",
        ["$V_1 \\times 0{,}85 = 68$, donc $V_1 = \\dfrac{68}{0{,}85}$.",
         f"$V_1 = {eur(F(68) / F(85, 100))}$ €."],
        f"${eur(F(68) / F(85, 100))}$ €")

    # ------------------------------------- e) évolutions successives (8)
    N = "evolutions-successives"
    c = F(11, 10) * F(12, 10)
    add("application", N,
        "Un prix augmente de $10\\,\\%$, puis de $20\\,\\%$. Quel est le taux d'évolution global ?",
        [f"Coefficient global : $1{{,}}1 \\times 1{{,}}2 = {nb(c)}$.",
         f"$t = {nb(c)} - 1 = {nb(c - 1)}$, soit ${pcs(c - 1)}$ (et non $+30\\,\\%$)."],
        f"${pcs(c - 1)}$")
    c = F(11, 10) * F(9, 10)
    add("application", N,
        "Un prix augmente de $10\\,\\%$, puis baisse de $10\\,\\%$. Revient-il à sa valeur de départ ? Donner le taux d'évolution global.",
        [f"Coefficient global : $1{{,}}1 \\times 0{{,}}9 = {nb(c)}$.",
         f"$t = {nb(c - 1)}$, soit ${pcs(c - 1)}$ : le prix ne revient pas à sa valeur de départ."],
        f"${pcs(c - 1)}$")
    c = F(8, 10) * F(125, 100)
    add("intermediaire", N,
        "Un prix baisse de $20\\,\\%$, puis augmente de $25\\,\\%$. Quel est le taux d'évolution global ?",
        [f"Coefficient global : $0{{,}}8 \\times 1{{,}}25 = {nb(c)}$.",
         "Le taux global est $0\\,\\%$ : le prix revient exactement à sa valeur de départ."],
        "$0\\,\\%$")
    v = F(80) * F(105, 100) * F(103, 100)
    add("intermediaire", N,
        "Un abonnement de $80$ € augmente de $5\\,\\%$, puis l'année suivante de $3\\,\\%$. Quel est son nouveau prix ?",
        ["On multiplie successivement par $1{,}05$ puis par $1{,}03$.",
         f"$80 \\times 1{{,}}05 \\times 1{{,}}03 = {eur(v)}$ €."],
        f"${eur(v)}$ €")
    c = F(7, 10) * F(13, 10)
    add("intermediaire", N,
        "Le cours d'une action baisse de $30\\,\\%$, puis remonte de $30\\,\\%$. Quel est le taux d'évolution global ?",
        [f"Coefficient global : $0{{,}}7 \\times 1{{,}}3 = {nb(c)}$.",
         f"$t = {nb(c - 1)}$, soit ${pcs(c - 1)}$ : l'action n'a pas retrouvé sa valeur."],
        f"${pcs(c - 1)}$")
    c = F(102, 100) ** 3
    add("approfondissement", N,
        "Un loyer augmente de $2\\,\\%$ par an pendant trois ans. Quel est le taux d'évolution global, arrondi à $0{,}01\\,\\%$ près ?",
        [f"Coefficient global : $1{{,}}02^3 = {nb(c, 6)}$.",
         f"$t = {nb(c - 1, 6)}$, soit environ ${pcs(c - 1)}$ (un peu plus que $3 \\times 2\\,\\% = 6\\,\\%$)."],
        f"$\\approx {pcs(c - 1)}$")
    c2 = F(108, 100) / F(120, 100)
    add("approfondissement", N,
        "Un prix augmente de $20\\,\\%$, puis subit une seconde évolution. Au total, il a augmenté de $8\\,\\%$. Quel est le taux de la seconde évolution ?",
        ["$1{,}2 \\times \\text{CM}_2 = 1{,}08$.",
         f"$\\text{{CM}}_2 = \\dfrac{{1{{,}}08}}{{1{{,}}2}} = {nb(c2)}$, soit un taux de ${pcs(c2 - 1)}$."],
        f"${pcs(c2 - 1)}$")
    c = F(112, 100) * F(95, 100)
    add("probleme", N,
        "Le chiffre d'affaires d'une entreprise augmente de $12\\,\\%$ en 2024, puis baisse de $5\\,\\%$ en 2025. Quel est le taux d'évolution global sur les deux ans ? S'il valait $2{,}5$ millions d'euros fin 2023, combien vaut-il fin 2025 ?",
        [f"Coefficient global : $1{{,}}12 \\times 0{{,}}95 = {nb(c)}$, soit un taux de ${pcs(c - 1)}$.",
         f"$2{{,}}5 \\times {nb(c)} = {nb(F(5, 2) * c)}$ millions d'euros."],
        f"${pcs(c - 1)}$ ; ${nb(F(5, 2) * c)}$ millions d'euros")

    # -------------------------------------- f) évolution réciproque (6)
    N = "evolution-reciproque"
    for d, t, why in [("application", F(25, 100), ""), ("application", F(-20, 100), ""),
                      ("intermediaire", F(-50, 100), " Une baisse de $50\\,\\%$ ne se compense pas par une hausse de $50\\,\\%$."),
                      ("intermediaire", F(10, 100), ""), ("approfondissement", F(60, 100), "")]:
        c = 1 + t
        r = 1 / c
        sens = "augmente" if t > 0 else "baisse"
        tt = nb(abs(t) * 100)
        cible = "baisse" if t > 0 else "hausse"
        add(d, N,
            f"Un prix {sens} de ${tt}\\,\\%$. Quelle évolution (en pourcentage) permet de revenir au prix initial ?",
            [f"Coefficient de l'évolution : ${nb(c)}$. Coefficient de l'évolution réciproque : $\\dfrac{{1}}{{{nb(c)}}} {eg(r, 4)}$.",
             f"Taux réciproque : $\\dfrac{{1}}{{{nb(c)}}} - 1 {eg(r - 1, 4)}$, soit {'environ ' if not exact(r) else ''}${pcs(r - 1)}$ (une {cible}).{why}"],
            ("$" if exact(r) else "$\\approx ") + pcs(r - 1) + "$")
    r = 1 / F(6, 10)
    add("probleme", N,
        "Une action perd $40\\,\\%$ de sa valeur en un an. De quel pourcentage doit-elle augmenter l'année suivante pour retrouver sa valeur initiale ? Arrondir à $0{,}01\\,\\%$ près.",
        ["Coefficient de la baisse : $0{,}6$.",
         f"Coefficient réciproque : $\\dfrac{{1}}{{0{{,}}6}} \\approx {nb(r, 4)}$, soit une hausse d'environ ${pc(r - 1)}$, bien plus que $40\\,\\%$."],
        f"$\\approx {pcs(r - 1)}$")

    # ---------------------------------- g) proportion ou évolution ? (5)
    N = "proportion-ou-evolution"
    add("application", N,
        "Dans la phrase « $12\\,\\%$ des élèves de la classe sont gauchers », le pourcentage exprime-t-il une proportion ou une évolution ?",
        ["Il compare une partie (les gauchers) au tout (la classe), à un même moment.",
         "C'est une proportion."],
        "Une proportion")
    add("application", N,
        "Dans la phrase « le prix du gaz a augmenté de $12\\,\\%$ en un an », le pourcentage exprime-t-il une proportion ou une évolution ?",
        ["Il compare deux valeurs d'une même grandeur à deux dates.",
         "C'est une évolution."],
        "Une évolution")
    v1, v2 = F(8, 100), F(10, 100)
    add("intermediaire", N,
        "Le taux de chômage d'une région passe de $8\\,\\%$ à $10\\,\\%$. Exprimer cette hausse en points de pourcentage, puis calculer son taux d'évolution.",
        ["Différence des deux proportions : $10 - 8 = 2$ points de pourcentage.",
         f"Taux d'évolution : $\\dfrac{{10 - 8}}{{8}} = {nb((v2 - v1) / v1)}$, soit ${pcs((v2 - v1) / v1)}$."],
        f"$+2$ points ; ${pcs((v2 - v1) / v1)}$")
    v1, v2 = F(80, 100), F(88, 100)
    add("approfondissement", N,
        "Le taux de réussite d'un lycée à un examen passe de $80\\,\\%$ à $88\\,\\%$. Un journal titre « réussite en hausse de $8\\,\\%$ ». Ce titre est-il exact ?",
        ["La proportion de reçus a gagné $88 - 80 = 8$ points de pourcentage.",
         f"Le taux d'évolution est $\\dfrac{{88 - 80}}{{80}} = {nb((v2 - v1) / v1)}$, soit ${pcs((v2 - v1) / v1)}$ : il fallait écrire « $8$ points » ou « $+10\\,\\%$ »."],
        "Non : hausse de $8$ points, soit $+10\\,\\%$")
    a1, a2 = F(20, 100) * 1600, F(25, 100) * 1500
    t = a2 / a1 - 1
    add("probleme", N,
        "Dans un pays, la consommation d'énergie passe de $1\\,600$ TWh à $1\\,500$ TWh, tandis que la part des énergies renouvelables passe de $20\\,\\%$ à $25\\,\\%$. Calculer le taux d'évolution de la consommation d'énergie renouvelable, arrondi à $0{,}01\\,\\%$ près.",
        [f"Avant : $0{{,}}2 \\times 1\\,600 = {nb(a1)}$ TWh ; après : $0{{,}}25 \\times 1\\,500 = {nb(a2)}$ TWh.",
         f"$t = \\dfrac{{{nb(a2)} - {nb(a1)}}}{{{nb(a1)}}} = {nb(t, 6)}$, soit environ ${pcs(t)}$ : bien plus que les $5$ points gagnés par la part."],
        f"$\\approx {pcs(t)}$")

    return _fin(E)


EXTRA = {
    ("seconde", "information-chiffree"): g2_information_chiffree,
}
