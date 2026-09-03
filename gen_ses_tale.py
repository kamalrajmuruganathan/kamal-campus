# -*- coding: utf-8 -*-
"""Generateur du contenu SES - terminale (specialite) pour Kamal Campus."""
import json, os

BASE = "/tmp/kamal-campus/contenu/terminale/ses"
PROG = "Programme de SES — terminale (spécialité)"

def fm(cid, titre, prereq):
    p = "\n".join("  - " + x for x in prereq)
    return (
        "---\n"
        f"id: {cid}\n"
        f'titre: "{titre}"\n'
        "voie: generale\n"
        "niveau: terminale\n"
        "parcours: ses\n"
        "matiere: ses\n"
        f'programme: "{PROG}"\n'
        "duree_lecture_min: 15\n"
        "prerequis:\n"
        f"{p}\n"
        "statut: brouillon\n"
        "relu_par: null\n"
        "---\n\n"
    )

def qcm_obj(cid, titre, questions):
    return {
        "id": cid + "-qcm", "chapitre": cid, "titre": "QCM — " + titre,
        "voie": "generale", "niveau": "terminale", "parcours": "ses", "matiere": "ses",
        "statut": "brouillon", "relu_par": None,
        "consigne": "Une seule réponse correcte par question.",
        "questions": questions,
    }

def exo_obj(cid, titre, exos):
    return {
        "id": cid + "-exos", "chapitre": cid, "titre": "Exercices — " + titre,
        "voie": "generale", "niveau": "terminale", "parcours": "ses", "matiere": "ses",
        "statut": "brouillon", "relu_par": None,
        "consigne": "Cherche chaque exercice au brouillon avant d'ouvrir le corrigé.",
        "exercices": exos,
    }

def cartes_obj(cid, titre, cartes):
    return {
        "id": cid + "-cartes", "chapitre": cid, "titre": "Cartes — " + titre,
        "voie": "generale", "niveau": "terminale", "parcours": "ses", "matiere": "ses",
        "statut": "brouillon", "relu_par": None,
        "cartes": cartes,
    }

def q(i, diff, notion, enonce, choix, rep, expl):
    return {"id": i, "difficulte": diff, "notion": notion, "enonce": enonce,
            "choix": choix, "reponse": rep, "explication": expl}

def e(i, diff, notion, enonce, corrige, reponse):
    return {"id": i, "difficulte": diff, "notion": notion, "enonce": enonce,
            "corrige": corrige, "reponse": reponse}

def emit(slug, cid, titre, prereq, fiche_body, questions, exos, cartes):
    d = os.path.join(BASE, slug)
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, "fiche.md"), "w", encoding="utf-8") as f:
        f.write(fm(cid, titre, prereq) + fiche_body)
    with open(os.path.join(d, "qcm.json"), "w", encoding="utf-8") as f:
        json.dump(qcm_obj(cid, titre, questions), f, ensure_ascii=False, indent=2)
    with open(os.path.join(d, "exercice.json"), "w", encoding="utf-8") as f:
        json.dump(exo_obj(cid, titre, exos), f, ensure_ascii=False, indent=2)
    with open(os.path.join(d, "flashcards.json"), "w", encoding="utf-8") as f:
        json.dump(cartes_obj(cid, titre, cartes), f, ensure_ascii=False, indent=2)
    assert len(questions) == 20, (slug, "qcm", len(questions))
    assert len(exos) == 10, (slug, "exos", len(exos))
    assert len(cartes) == 12, (slug, "cartes", len(cartes))
    print("OK", slug)

