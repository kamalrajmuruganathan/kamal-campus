// Vérifie que chaque formule $…$ du contenu se compile avec KaTeX (comme dans l’appli).
// Signale aussi les % non échappés, qui masquent la fin d’une formule.
// Usage : node outils/verifier-katex.cjs
const katex = require(require('path').join(__dirname, '..', 'app', 'node_modules', 'katex'));
const fs = require('fs'), path = require('path');
console.warn = () => {}; // KaTeX avertit pour €, µ, « » : rendu correct, bruit inutile
const racine = require('path').join(__dirname, '..', 'contenu');
const erreurs = []; let n = 0;
function formules(t) {
  const out = []; const re = /\$\$([\s\S]+?)\$\$|(?<!\\)\$([^$]+?)(?<!\\)\$/g; let m;
  while ((m = re.exec(t))) out.push([m[1] ?? m[2], !!m[1]]);
  return out;
}
function verifier(t, ou) {
  for (const [f, disp] of formules(t)) {
    n++;
    try { katex.renderToString(f, { throwOnError: true, displayMode: disp, strict: 'ignore' }); if (/(?<!\\)%/.test(f)) throw new Error('% non échappé : la suite de la formule est masquée'); }
    catch (e) { erreurs.push({ ou, f: f.slice(0, 80), e: String(e.message).slice(0, 110) }); }
  }
}
function parcourir(o, ou) {
  if (typeof o === 'string') verifier(o, ou);
  else if (Array.isArray(o)) o.forEach((x) => parcourir(x, ou));
  else if (o && typeof o === 'object') Object.values(o).forEach((x) => parcourir(x, ou));
}
for (const niv of fs.readdirSync(racine)) for (const mat of fs.readdirSync(path.join(racine, niv))) {
  const dm = path.join(racine, niv, mat); if (!fs.statSync(dm).isDirectory()) continue;
  for (const ch of fs.readdirSync(dm)) {
    const d = path.join(dm, ch); if (!fs.statSync(d).isDirectory()) continue;
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f), ou = `${niv}/${mat}/${ch}/${f}`;
      if (f.endsWith('.json')) parcourir(JSON.parse(fs.readFileSync(p, 'utf8')), ou);
      else if (f.endsWith('.md')) verifier(fs.readFileSync(p, 'utf8').replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, ''), ou);
    }
  }
}
console.log(`${n} formules vérifiées, ${erreurs.length} en erreur`);
const parFichier = {};
for (const e of erreurs) (parFichier[e.ou] ??= []).push(e);
for (const [ou, es] of Object.entries(parFichier)) { console.log(`\n${ou} (${es.length})`); for (const e of es.slice(0, 3)) console.log(`   ${e.f}  →  ${e.e}`); }
process.exitCode = erreurs.length ? 1 : 0;
