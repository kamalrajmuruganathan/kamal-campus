import glob, os, sys

def find(name, prefer):
    for p in prefer:
        if os.path.exists(p): return p
    h=[p for p in glob.glob("**/"+name, recursive=True) if "node_modules" not in p]
    return h[0] if h else None

def do(path, reps, label):
    s=open(path,encoding="utf-8").read()
    for i,(old,new,exp) in enumerate(reps,1):
        c=s.count(old)
        if c==0 and s.count(new)>0:
            print("  = "+label+" #"+str(i)+" deja fait"); continue
        if c!=exp:
            sys.exit("STOP "+label+" #"+str(i)+": trouve "+str(c)+", attendu "+str(exp))
        s=s.replace(old,new)
    open(path,"w",encoding="utf-8").write(s)
    print("  OK "+label+" -> "+path)

GEN=[
 (r'\\sqrt{{{p}}}$"+tail',              r'\\sqrt{{{p}}}"+tail', 1),
 (r'\\sqrt{{{n}}}$"+tail',              r'\\sqrt{{{n}}}"+tail', 1),
 (r'\\sqrt{{{n}}}$" + (f" $= {r}$ cm.', r'\\sqrt{{{n}}}" + (f" = {r}$ cm.', 2),
]
VER=[
 ("if (ex.length !== 10) sig", "if (ex.length !== 10 && ex.length !== 50) sig", 1),
]

fg=find("generer-exos.py",["scripts/generer-exos.py"])
fv=find("verifier-qualite.mjs",["app/scripts/verifier-qualite.mjs"])
if not fg: sys.exit("STOP: generer-exos.py introuvable")
if not fv: sys.exit("STOP: verifier-qualite.mjs introuvable")
do(fg,GEN,"generateur")
do(fv,VER,"verificateur")
print("OK corrections appliquees")
