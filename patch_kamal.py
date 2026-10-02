#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Applique en place les corrections Kamal Campus :
  - generer-exos.py : 3 bugs LaTeX ($ non ferme) racine-carree/reperage/triangles
  - app/scripts/verifier-qualite.mjs : le controle accepte 10 OU 50 exos
S'arrete net (aucune ecriture) si une correction ne colle pas."""
import base64, glob, os, sys

def trouve(nom, prefere):
    for p in prefere:
        if os.path.exists(p): return p
    hits = [p for p in glob.glob(f"**/{nom}", recursive=True) if "node_modules" not in p]
    return hits[0] if hits else None

def applique(chemin, pairs, etiquette):
    s = open(chemin, encoding="utf-8").read()
    for i,(ob,nb) in enumerate(pairs,1):
        old = base64.b64decode(ob).decode(); new = base64.b64decode(nb).decode()
        if new in s and old not in s:
            print(f"  = {etiquette} #{i} deja applique"); continue
        if s.count(old) != 1:
            sys.exit(f"STOP {etiquette} #{i}: motif introuvable ou non unique ({s.count(old)}x). Rien ecrit.")
        s = s.replace(old, new)
    open(chemin,"w",encoding="utf-8").write(s)
    print(f"  OK {etiquette} -> {chemin}")

GEN = [('ICAgIGEsIGIgPSBzaW1wbGlmaWVfcmFjaW5lKG4pCiAgICBleCA9IGYie2F9XFxzcXJ0e3t7Yn19fSIgaWYgYSAhPSAxIGVsc2UgZiJcXHNxcnR7e3tifX19IgogICAgcmV0dXJuIGYiXFxzcXJ0e3t7bn19fSA9IHtleH0gXFxhcHByb3gge2ZyKG1hdGguc3FydChuKSl9Ig==', 'ICAgIGEsIGIgPSBzaW1wbGlmaWVfcmFjaW5lKG4pCiAgICBpZiBhID09IDE6CiAgICAgICAgcmV0dXJuIGYiXFxzcXJ0e3t7bn19fSBcXGFwcHJveCB7ZnIobWF0aC5zcXJ0KG4pKX0iCiAgICByZXR1cm4gZiJcXHNxcnR7e3tufX19ID0ge2F9XFxzcXJ0e3t7Yn19fSBcXGFwcHJveCB7ZnIobWF0aC5zcXJ0KG4pKX0i'),
       ('ICAgICAgICAgICAgIGYiRG9uYyAkXFxtYXRocm17e0JDfX0gPSBcXHNxcnR7e3tufX19JCIgKyAoZiIgJD0ge3J9JCBjbS4iIGlmIHIqcj09biBlbHNlIGYiIFxcYXBwcm94IHtmcihtYXRoLnNxcnQobikpfSQgY20uIildLCByZXAp', 'ICAgICAgICAgICAgIGYiRG9uYyAkXFxtYXRocm17e0JDfX0gPSBcXHNxcnR7e3tufX19IiArIChmIiA9IHtyfSQgY20uIiBpZiByKnI9PW4gZWxzZSBmIiBcXGFwcHJveCB7ZnIobWF0aC5zcXJ0KG4pKX0kIGNtLiIpXSwgcmVwKQ=='),
       ('ICAgICAgICAgICAgIGYiRG9uYyAkXFxtYXRocm17e0RGfX0gPSBcXHNxcnR7e3tufX19JCIgKyAoZiIgJD0ge3J9JCBjbS4iIGlmIHIqcj09biBlbHNlIGYiIFxcYXBwcm94IHtmcihtYXRoLnNxcnQobikpfSQgY20uIildLCByZXAp', 'ICAgICAgICAgICAgIGYiRG9uYyAkXFxtYXRocm17e0RGfX0gPSBcXHNxcnR7e3tufX19IiArIChmIiA9IHtyfSQgY20uIiBpZiByKnI9PW4gZWxzZSBmIiBcXGFwcHJveCB7ZnIobWF0aC5zcXJ0KG4pKX0kIGNtLiIpXSwgcmVwKQ=='),
       ('ICAgICAgICByZXA9ZiIke3J9JCIgaWYgcipyPT1wIGVsc2UgZiIkXFxzcXJ0e3t7cH19fSQiCiAgICAgICAgdGFpbD0oZiIgPSB7cn0kLiIgaWYgcipyPT1wIGVsc2UgIiQuIikKICAgICAgICBhZGQoImludGVybWVkaWFpcmUiLCJwcm9kdWl0LXJhY2luZXMiLCBmIkNhbGN1bGVyICRcXHNxcnR7e3thfX19IFxcdGltZXMgXFxzcXJ0e3t7Yn19fSQuIiwKICAgICAgICAgICAgW2YiJFxcc3FydHt7e2F9fX0gXFx0aW1lcyBcXHNxcnR7e3tifX19ID0gXFxzcXJ0e3t7YX0gXFx0aW1lcyB7Yn19fSA9IFxcc3FydHt7e3B9fX0kIit0YWlsXSwgcmVwKQ==', 'ICAgICAgICByZXA9ZiIke3J9JCIgaWYgcipyPT1wIGVsc2UgZiIkXFxzcXJ0e3t7cH19fSQiCiAgICAgICAgaW5uZXI9ZiJcXHNxcnR7e3thfX19IFxcdGltZXMgXFxzcXJ0e3t7Yn19fSA9IFxcc3FydHt7e2F9IFxcdGltZXMge2J9fX0gPSBcXHNxcnR7e3twfX19IgogICAgICAgIGlmIHIqcj09cDogaW5uZXIrPWYiID0ge3J9IgogICAgICAgIGFkZCgiaW50ZXJtZWRpYWlyZSIsInByb2R1aXQtcmFjaW5lcyIsIGYiQ2FsY3VsZXIgJFxcc3FydHt7e2F9fX0gXFx0aW1lcyBcXHNxcnR7e3tifX19JC4iLAogICAgICAgICAgICBbZiIke2lubmVyfSQuIl0sIHJlcCk='),
       ('ICAgICAgICByZXA9ZiIkXFxtYXRocm17e0FCfX0gPSB7cn0kIiBpZiByKnI9PW4gZWxzZSBmIiRcXG1hdGhybXt7QUJ9fSA9IFxcc3FydHt7e259fX0kIgogICAgICAgIHRhaWw9ZiIgPSB7cn0kLiIgaWYgcipyPT1uIGVsc2UgIiQuIgogICAgICAgIGFkZCgiaW50ZXJtZWRpYWlyZSIsImRpc3RhbmNlIiwgZiIkXFxtYXRocm17e0F9fSh7eGF9XFwsO1xcLHt5YX0pJCBldCAkXFxtYXRocm17e0J9fSh7eGJ9XFwsO1xcLHt5Yn0pJC4gQ2FsY3VsZXIgbGEgZGlzdGFuY2UgJFxcbWF0aHJte3tBQn19JC4iLAogICAgICAgICAgICBbZiIkXFxtYXRocm17e0FCfX0gPSBcXHNxcnR7eyh7eGJ9LSh7eGF9KSleMiArICh7eWJ9LSh7eWF9KSleMn19ID0gXFxzcXJ0e3t7ICh4Yi14YSkqKjIgfSArIHsgKHliLXlhKSoqMiB9fX0gPSBcXHNxcnR7e3tufX19JCIrdGFpbF0sIHJlcCk=', 'ICAgICAgICByZXA9ZiIkXFxtYXRocm17e0FCfX0gPSB7cn0kIiBpZiByKnI9PW4gZWxzZSBmIiRcXG1hdGhybXt7QUJ9fSA9IFxcc3FydHt7e259fX0kIgogICAgICAgIGlubmVyPWYiXFxtYXRocm17e0FCfX0gPSBcXHNxcnR7eyh7eGJ9LSh7eGF9KSleMiArICh7eWJ9LSh7eWF9KSleMn19ID0gXFxzcXJ0e3t7ICh4Yi14YSkqKjIgfSArIHsgKHliLXlhKSoqMiB9fX0gPSBcXHNxcnR7e3tufX19IgogICAgICAgIGlmIHIqcj09bjogaW5uZXIrPWYiID0ge3J9IgogICAgICAgIGFkZCgiaW50ZXJtZWRpYWlyZSIsImRpc3RhbmNlIiwgZiIkXFxtYXRocm17e0F9fSh7eGF9XFwsO1xcLHt5YX0pJCBldCAkXFxtYXRocm17e0J9fSh7eGJ9XFwsO1xcLHt5Yn0pJC4gQ2FsY3VsZXIgbGEgZGlzdGFuY2UgJFxcbWF0aHJte3tBQn19JC4iLAogICAgICAgICAgICBbZiIke2lubmVyfSQuIl0sIHJlcCk)')]
VER = [('aWYgKGV4Lmxlbmd0aCAhPT0gMTApIHNpZyhqb2luKGQsICdleGVyY2ljZS5qc29uJyksIGAke2V4Lmxlbmd0aH0gZXhlcmNpY2VzIChhdHRlbmR1IDEwKWApOw==', 'aWYgKGV4Lmxlbmd0aCAhPT0gMTAgJiYgZXgubGVuZ3RoICE9PSA1MCkgc2lnKGpvaW4oZCwgJ2V4ZXJjaWNlLmpzb24nKSwgYCR7ZXgubGVuZ3RofSBleGVyY2ljZXMgKGF0dGVuZHUgMTAgb3UgNTApYCk7')]

fg = trouve("generer-exos.py", ["scripts/generer-exos.py"])
fv = trouve("verifier-qualite.mjs", ["app/scripts/verifier-qualite.mjs"])
if not fg: sys.exit("STOP: generer-exos.py introuvable")
if not fv: sys.exit("STOP: verifier-qualite.mjs introuvable")
applique(fg, GEN, "generateur")
applique(fv, VER, "verificateur")
print("Corrections appliquees.")
