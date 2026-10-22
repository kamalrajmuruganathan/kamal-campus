// Vérifie que chaque formule $…$ du contenu se compile avec KaTeX (comme dans l’appli).
// Signale aussi les % non échappés, qui masquent la fin d’une formule.
// Couvre contenu/ (fiches, QCM, exercices…) et sujets/*.md (rendu identique à l’appli, ligne séparée).
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
// ─── Sujets brevet/bac (sujets/*.md) : MÊME traitement que l’appli ───
// Sujets.js → VisionneuseFiche : nettoyerFiche (en-tête --- et commentaires retirés)
// → protegerFormules (lib/markdownmath) → markdown-it → KaTeX auto-render ($$…$$ puis $…$).
// On vérifie chaque formule protégée, puis on cherche les $ restés dans le HTML :
// ils n’ont pas été protégés (formule coupée par un retour à la ligne, $ non apparié…),
// donc markdown-it a pu abîmer la formule ou le $ s’affiche tel quel.
async function verifierSujets() {
  const dir = path.join(__dirname, '..', 'sujets');
  const res = { n: 0, erreurs: [], fichiers: 0 };
  if (!fs.existsSync(dir)) return res;
  const app = path.join(__dirname, '..', 'app');
  const { protegerFormules } = await import(require('url').pathToFileURL(path.join(app, 'lib', 'markdownmath', 'index.js')).href);
  const MarkdownIt = require(path.join(app, 'node_modules', 'markdown-it'));
  const md = new MarkdownIt({ html: false, linkify: false, typographer: true, breaks: false });
  const nettoyer = (m) => String(m).replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').replace(/<!--[\s\S]*?-->/g, '').trim();
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.md')) continue;
    res.fichiers++;
    const ou = `sujets/${f}`;
    const { texte, formules } = protegerFormules(nettoyer(fs.readFileSync(path.join(dir, f), 'utf8')));
    for (const brut of formules) {
      res.n++;
      const disp = brut.startsWith('$$');
      const f2 = disp ? brut.slice(2, -2) : brut.slice(1, -1);
      try { katex.renderToString(f2, { throwOnError: true, displayMode: disp, strict: 'ignore' }); if (/(?<!\\)%/.test(f2)) throw new Error('% non échappé : la suite de la formule est masquée'); }
      catch (e) { res.erreurs.push({ ou, f: f2.slice(0, 80), e: String(e.message).slice(0, 110) }); }
    }
    const html = md.render(texte).replace(/<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>/g, '').replace(/<[^>]+>/g, '');
    for (const ligne of html.split('\n')) {
      if (ligne.includes('$')) res.erreurs.push({ ou, f: ligne.slice(0, 80), e: '$ non protégé (non apparié ou formule coupée par un retour à la ligne)' });
    }
  }
  return res;
}

function afficher(erreurs) {
  const parFichier = {};
  for (const e of erreurs) (parFichier[e.ou] ??= []).push(e);
  for (const [ou, es] of Object.entries(parFichier)) { console.log(`\n${ou} (${es.length})`); for (const e of es.slice(0, 3)) console.log(`   ${e.f}  →  ${e.e}`); }
}

(async () => {
  const s = await verifierSujets();
  console.log(`${n} formules vérifiées, ${erreurs.length} en erreur`);
  console.log(`Sujets (${s.fichiers} fichiers) : ${s.n} formules vérifiées, ${s.erreurs.length} en erreur`);
  afficher(erreurs);
  afficher(s.erreurs);
  process.exitCode = erreurs.length || s.erreurs.length ? 1 : 0;
})();
