# -*- coding: utf-8 -*-
"""Vérifie des chapitres à 10 ou 50 exercices écrits à la main (exercice.json), sans rien modifier.
   10 exos : ≥ 4 notions, ≤ 4 par notion, ≥ 2 difficultés.
   50 exos : ≥ 6 notions, ≤ 15 par notion, ≥ 3 difficultés.

Usage :  python3 scripts/verifier_json.py cm1/anglais/body cp/francais/sons ...
         python3 scripts/verifier_json.py --liste fichier.txt      (un chapitre par ligne)
"""
import collections
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from verifier_gen import DOUBLE_ESC, DOLLAR, ELISION, ELISION_OK, hors_formules  # noqa: E402

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIFFS = {"decouverte", "application", "intermediaire", "approfondissement", "probleme"}
LANGUES = {"anglais", "allemand", "espagnol", "italien", "langues-anciennes"}
CHAMPS = ("id", "difficulte", "notion", "enonce", "corrige", "reponse")


def verifier(chap):
    pb = []
    f = os.path.join(RACINE, "contenu", chap, "exercice.json")
    try:
        d = json.load(open(f, encoding="utf-8"))
    except Exception as e:  # noqa: BLE001
        return [f"JSON illisible : {e}"]
    ex = d.get("exercices", [])
    if len(ex) not in (10, 50):
        pb.append(f"{len(ex)} exercices au lieu de 10 ou 50")
    grand = len(ex) > 10
    min_notions, max_notion, min_diffs = (6, 15, 3) if grand else (4, 4, 2)
    notions = collections.Counter(x.get("notion") for x in ex)
    if len(notions) < min_notions:
        pb.append(f"seulement {len(notions)} notion(s) : {dict(notions)} (au moins {min_notions})")
    if notions and notions.most_common(1)[0][1] > max_notion:
        pb.append(f"notion trop présente : {notions.most_common(1)[0]} ({max_notion} maximum)")
    diffs = collections.Counter(x.get("difficulte") for x in ex)
    if set(diffs) - DIFFS:
        pb.append(f"difficulté inconnue : {set(diffs) - DIFFS}")
    if len(diffs) < min_diffs:
        pb.append(f"pas assez de niveaux de difficulté : {dict(diffs)} (au moins {min_diffs})")
    enonces = [x.get("enonce", "") for x in ex]
    if len(set(enonces)) != len(enonces):
        pb.append("énoncé en double")
    norm = lambda e: re.sub(r"\W+", " ", e.lower()).strip()
    if len({norm(e) for e in enonces}) != len(enonces):
        pb.append("énoncés quasi identiques (même texte à la ponctuation près)")
    langue = chap.split("/")[1] in LANGUES
    for i, x in enumerate(ex, 1):
        manq = [c for c in CHAMPS if c not in x]
        if manq:
            pb.append(f"exo {i} : champ(s) manquant(s) {manq}"); continue
        if x["id"] != i:
            pb.append(f"exo {i} : id = {x['id']}")
        if not isinstance(x["corrige"], list) or not x["corrige"]:
            pb.append(f"exo {i} : corrige doit être une liste non vide"); continue
        for t in [x["enonce"], x["reponse"], *x["corrige"]]:
            if not isinstance(t, str) or not t.strip():
                pb.append(f"exo {i} : texte vide"); break
            if DOUBLE_ESC.search(t):
                pb.append(f"exo {i} : LaTeX double-échappé"); break
            if len(DOLLAR.findall(t)) % 2:
                pb.append(f"exo {i} : nombre de $ impair"); break
            if not langue:
                h = hors_formules(t)
                m = ELISION.search(h)
                if m and not ELISION_OK.match(h[m.end():]):
                    pb.append(f"exo {i} : élision oubliée ? « …{h[max(0, m.start()-15):m.end()+15]}… »"); break
    return pb


def main():
    args = sys.argv[1:]
    if args[:1] == ["--liste"]:
        args = [l.strip() for l in open(args[1], encoding="utf-8") if l.strip()]
    if not args:
        sys.exit(__doc__)
    total = 0
    for chap in args:
        pb = verifier(chap)
        print(("✅ " if not pb else "❌ ") + chap)
        for p in pb[:6]:
            print("     -", p)
        total += len(pb)
    print(f"\n{len(args)} chapitre(s), {total} problème(s).")
    sys.exit(1 if total else 0)


if __name__ == "__main__":
    main()
