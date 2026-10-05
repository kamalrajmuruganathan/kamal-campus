# -*- coding: utf-8 -*-
"""Vérifie un module de générateurs d'exercices AVANT de l'intégrer.

Usage :  python3 scripts/verifier_gen.py scripts/gen_enrichi_xxx.py

Le module doit exposer EXTRA = {(niveau, slug): fonction -> liste de 50 exos}.
Ne réécrit aucun fichier : tout est vérifié en mémoire.
"""
import collections
import importlib.util
import os
import re
import sys

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIFFS = {"application", "intermediaire", "approfondissement", "probleme"}
CHAMPS = ("id", "difficulte", "notion", "enonce", "corrige", "reponse")
DOUBLE_ESC = re.compile(r"\\\\[a-zA-Z]{2,}")
DOLLAR = re.compile(r"(?<!\\)\$")
# Élisions oubliées (hors formules) : « de oxygène », « le eau », « du aluminium »…
ELISION = re.compile(r"\b(de|le|la|que|ne|se|je|du|au|ce|lorsque|puisque|jusque) (?=[aeiouéèêàâîôûœ][a-zéèêàâîôûç])", re.I)
ELISION_OK = re.compile(r"^((un|une|uns|unes|onze|onzième|oui|ouest|yaourt|ou)\b|(?-i:[IVXLC]+(e|er|re|es|ème)\b))", re.I)
# Mots français courants écrits sans accent (liste volontairement courte et sûre).
SANS_ACCENT = re.compile(r"\b(a cote|deja|tres|apres|etre|eleve|eleves|celerite|vitesse moyenne de|energie|electrique|reponse|resultat|equation|probabilite|frequence|periode|duree|temperature|numero|systeme|reel|reelle|derivee|carre|premiere|deuxieme|troisieme|regle|methode|repere|interet|ecart|evenement|experience|metre|kilometre|centimetre|millimetre)\b")
SANS_ACCENT_EXCLUS = {"vitesse moyenne de"}


def charger(chemin):
    sys.path.insert(0, os.path.join(RACINE, "scripts"))
    spec = importlib.util.spec_from_file_location("module_a_verifier", chemin)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def hors_formules(t):
    return re.sub(r"\$[^$]*\$", " ", t)


def verifier_chapitre(cle, fn):
    pb = []
    niveau, slug = cle
    trouves = [d for d in ("maths", "physique-chimie")
               if os.path.exists(os.path.join(RACINE, "contenu", niveau, d, slug, "exercice.json"))]
    if not trouves:
        pb.append("chapitre introuvable dans contenu/ (clé (niveau, slug) fausse ?)")
    try:
        ex = fn()
        ex2 = fn()
    except Exception as e:  # noqa: BLE001
        return [f"le générateur plante : {e!r}"], {}
    if ex != ex2:
        pb.append("générateur non déterministe (deux appels donnent des résultats différents)")
    if len(ex) != 50:
        pb.append(f"{len(ex)} exercices au lieu de 50")
    enonces = [x.get("enonce", "") for x in ex]
    dbl = [e for e, n in collections.Counter(enonces).items() if n > 1]
    if dbl:
        pb.append(f"{len(dbl)} énoncé(s) en double, ex. « {dbl[0][:70]} »")
    notions = collections.Counter(x.get("notion") for x in ex)
    if len(notions) < 4:
        pb.append(f"seulement {len(notions)} notion(s) : {dict(notions)} (au moins 4 attendues)")
    if notions and notions.most_common(1)[0][1] > 20:
        pb.append(f"une notion domine trop : {notions.most_common(1)[0]} (20 maximum)")
    diffs = collections.Counter(x.get("difficulte") for x in ex)
    if set(diffs) - DIFFS:
        pb.append(f"difficulté(s) inconnue(s) : {set(diffs) - DIFFS}")
    if len(diffs) < 3:
        pb.append(f"seulement {len(diffs)} niveau(x) de difficulté : {dict(diffs)} (au moins 3 attendus)")
    for i, x in enumerate(ex, 1):
        manquants = [c for c in CHAMPS if c not in x]
        if manquants:
            pb.append(f"exo {i} : champ(s) manquant(s) {manquants}"); continue
        if x["id"] != i:
            pb.append(f"exo {i} : id = {x['id']} (attendu {i})")
        if not isinstance(x["corrige"], list) or not x["corrige"]:
            pb.append(f"exo {i} : corrige doit être une liste non vide")
            continue
        textes = [x["enonce"], x["reponse"], *x["corrige"]]
        for t in textes:
            if not isinstance(t, str) or not t.strip():
                pb.append(f"exo {i} : champ texte vide"); break
            if DOUBLE_ESC.search(t):
                pb.append(f"exo {i} : LaTeX double-échappé « {t[:60]} »"); break
            if len(DOLLAR.findall(t)) % 2:
                pb.append(f"exo {i} : nombre de $ impair « {t[:60]} »"); break
            h = hors_formules(t)
            m = ELISION.search(h)
            if m and not ELISION_OK.match(h[m.end():]):
                pb.append(f"exo {i} : élision oubliée ? « …{h[max(0, m.start()-15):m.end()+15]}… »"); break
            m = SANS_ACCENT.search(h)
            if m and m.group(0) not in SANS_ACCENT_EXCLUS:
                pb.append(f"exo {i} : accent oublié ? « {m.group(0)} » dans « {h[:60]} »"); break
            if re.search(r"\d\.\d", h):
                pb.append(f"exo {i} : point décimal hors formule (écrire 2,5) « {h[:60]} »"); break
            if re.search(r"(?<![{\\])\d\.\d", " ".join(re.findall(r"\$([^$]*)\$", t))):
                pb.append(f"exo {i} : point décimal dans une formule (écrire 2{{,}}5) « {t[:60]} »"); break
    return pb, notions


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    m = charger(sys.argv[1])
    extra = getattr(m, "EXTRA", None)
    if not isinstance(extra, dict) or not extra:
        sys.exit("⛔ le module n'expose pas de dict EXTRA non vide")
    total = 0
    for cle, fn in extra.items():
        pb, notions = verifier_chapitre(cle, fn)
        etat = "✅" if not pb else "❌"
        print(f"{etat} {cle[0]}/{cle[1]} — {len(notions)} notions")
        for p in pb[:8]:
            print("     -", p)
        total += len(pb)
    print(f"\n{len(extra)} chapitre(s), {total} problème(s).")
    sys.exit(1 if total else 0)


if __name__ == "__main__":
    main()
