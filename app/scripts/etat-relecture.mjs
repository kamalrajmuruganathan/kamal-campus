#!/usr/bin/env node
/**
 * Génère docs/relecture.html : tableau de bord de la RELECTURE.
 *
 * Scanne l'en-tête de chaque fiche (statut, relu_par) et produit une page
 * autonome (hors-ligne, thème clair/sombre) montrant l'avancement de la
 * validation matière par matière, avec un tableau filtrable de tous les
 * chapitres. Un chapitre est « relu » quand `relu_par` n'est pas null.
 *
 * Le relecteur coche au fil de l'eau (mémorisé dans le navigateur) et peut
 * exporter la liste des ids relus ; la source de vérité reste `relu_par`
 * dans les fiches. À régénérer après toute relecture : npm run relecture.
 */
import { readFileSync, readdirSync, existsSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const CONTENU = join(RACINE, 'contenu');
const OUT = join(RACINE, 'docs', 'relecture.html');

const LIB = {
  mathematiques: 'Mathématiques', maths: 'Mathématiques', 'physique-chimie': 'Physique-chimie',
  svt: 'SVT', sciences: 'Sciences (primaire)', techno: 'Technologie', snt: 'SNT', nsi: 'NSI',
  si: "Sciences de l'ingénieur", 'enseignement-scientifique': 'Enseignement scientifique',
  'maths-specialite': 'Maths spécialité', 'maths-complementaires': 'Maths complémentaires',
  'maths-expertes': 'Maths expertes', 'maths-enseignement-scientifique': 'Maths — ens. scientifique',
  'pc-maths-sti2d-stl': 'PC-Maths STI2D/STL', 'pc-sante-st2s': 'PC santé ST2S', 'spcl-stl': 'SPCL STL',
  anglais: 'Anglais', espagnol: 'Espagnol', allemand: 'Allemand', italien: 'Italien',
  francais: 'Français', 'hist-geo': 'Histoire-Géo-EMC', philosophie: 'Philosophie', ses: 'SES',
  hggsp: 'HGGSP', arts: 'Arts / Histoire des arts', 'langues-anciennes': 'Langues anciennes',
};
const COUL = {
  mathematiques: '#2f6fed', maths: '#2f6fed', 'physique-chimie': '#7d47cf', svt: '#1f8a52',
  sciences: '#0f9488', techno: '#cf7f1e', snt: '#d9583a', nsi: '#a97b1b', si: '#b5651d',
  'enseignement-scientifique': '#b03e83', 'maths-specialite': '#2f6fed', 'maths-complementaires': '#2f6fed',
  'maths-expertes': '#2f6fed', 'maths-enseignement-scientifique': '#2f6fed', 'pc-maths-sti2d-stl': '#7d47cf',
  'pc-sante-st2s': '#7d47cf', 'spcl-stl': '#7d47cf', anglais: '#b8336a', espagnol: '#c0392b',
  allemand: '#3949ab', italien: '#1d9bb8', francais: '#9c27b0', 'hist-geo': '#a15c1e',
  philosophie: '#7b5aa6', ses: '#0f8a6a', hggsp: '#396a7a', arts: '#c0399b', 'langues-anciennes': '#7d7f34',
};
const ORDRE_NIV = ['cp','ce1','ce2','cm1','cm2','sixieme','cinquieme','quatrieme','troisieme','seconde','premiere','premiere-techno','terminale','terminale-techno'];
const NIV_LIB = { cp:'CP', ce1:'CE1', ce2:'CE2', cm1:'CM1', cm2:'CM2', sixieme:'6e', cinquieme:'5e', quatrieme:'4e', troisieme:'3e', seconde:'2de', premiere:'1re', 'premiere-techno':'1re techno', terminale:'Tale', 'terminale-techno':'Tale techno' };

function entete(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  const o = {};
  if (m) for (const l of m[1].split('\n')) {
    const mm = l.match(/^([a-z_]+):\s*(.*)$/);
    if (mm) o[mm[1]] = mm[2].replace(/^["']|["']$/g, '').trim();
  }
  return o;
}

const chapitres = [];
for (const niveau of readdirSync(CONTENU)) {
  const dN = join(CONTENU, niveau); if (!statSync(dN).isDirectory()) continue;
  for (const parcours of readdirSync(dN)) {
    const dP = join(dN, parcours); if (!statSync(dP).isDirectory()) continue;
    for (const slug of readdirSync(dP)) {
      const fiche = join(dP, slug, 'fiche.md'); if (!existsSync(fiche)) continue;
      const e = entete(readFileSync(fiche, 'utf8'));
      const mat = e.matiere || parcours;
      const relu = e.relu_par && !['null', ''].includes(e.relu_par);
      chapitres.push({ id: e.id || `${niveau}-${parcours}-${slug}`, titre: e.titre || slug, niveau, matiere: mat, statut: e.statut || 'brouillon', relu: !!relu, reluPar: relu ? e.relu_par : null });
    }
  }
}
chapitres.sort((a, b) => (ORDRE_NIV.indexOf(a.niveau) - ORDRE_NIV.indexOf(b.niveau)) || a.matiere.localeCompare(b.matiere) || a.titre.localeCompare(b.titre));

const parMat = {};
for (const c of chapitres) { (parMat[c.matiere] ||= { total: 0, relus: 0 }); parMat[c.matiere].total++; if (c.relu) parMat[c.matiere].relus++; }
const total = chapitres.length, relus = chapitres.filter((c) => c.relu).length;
const dateGen = new Date().toISOString().slice(0, 10);

const DATA = { total, relus, dateGen, parMat, chapitres, LIB, COUL, NIV_LIB };

const html = `<title>Relecture — Kamal Campus</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
:root{--bg:#eef2f8;--surface:#fff;--surface2:#e7edf6;--ink:#16232e;--muted:#5c6b7b;--line:#dde5f0;--good:#1a7f4b;--goodbg:#e8f6ee;--accent:#1f6feb;--radius:14px}
:root:not([data-theme="light"]){}
@media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0e141b;--surface:#161e27;--surface2:#1b242e;--ink:#e7edf4;--muted:#9aa8b5;--line:#243039;--good:#5fd398;--goodbg:#12291f;--accent:#6aa8ff}}
:root[data-theme="dark"]{--bg:#0e141b;--surface:#161e27;--surface2:#1b242e;--ink:#e7edf4;--muted:#9aa8b5;--line:#243039;--good:#5fd398;--goodbg:#12291f;--accent:#6aa8ff}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:"Nunito Sans",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.5}
.wrap{max-width:1080px;margin:0 auto;padding:20px}
h1{font-size:1.7rem;margin:0 0 4px}.sub{color:var(--muted);font-size:.9rem;margin-bottom:18px}
.big{display:flex;gap:18px;flex-wrap:wrap;margin-bottom:22px}
.kpi{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:16px 20px;min-width:150px}
.kpi .n{font-size:2rem;font-weight:800}.kpi .l{color:var(--muted);font-size:.82rem}
.barbig{height:14px;background:var(--surface2);border-radius:99px;overflow:hidden;margin-top:8px}
.barbig>i{display:block;height:100%;background:var(--good);border-radius:99px}
h2{font-size:1.15rem;margin:26px 0 12px}
.mats{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.mat{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:13px 15px}
.mat .top{display:flex;align-items:center;gap:8px;font-weight:700;font-size:.92rem}
.dot{width:11px;height:11px;border-radius:3px;flex:0 0 auto}
.mat .c{margin-left:auto;color:var(--muted);font-variant-numeric:tabular-nums;font-size:.85rem}
.bar{height:8px;background:var(--surface2);border-radius:99px;overflow:hidden;margin-top:9px}
.bar>i{display:block;height:100%;border-radius:99px}
.tools{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:22px 0 12px}
input,select{font:inherit;padding:8px 11px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--ink)}
input[type=search]{flex:1;min-width:180px}
button{font:inherit;padding:8px 13px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--ink);cursor:pointer;font-weight:700}
label.chk{display:inline-flex;align-items:center;gap:6px;color:var(--muted);font-size:.85rem;cursor:pointer}
.tablewrap{overflow-x:auto;border:1px solid var(--line);border-radius:var(--radius)}
table{border-collapse:collapse;width:100%;min-width:640px;font-size:.9rem}
th,td{text-align:left;padding:9px 12px;border-bottom:1px solid var(--line);white-space:nowrap}
th{position:sticky;top:0;background:var(--surface);font-size:.78rem;text-transform:uppercase;letter-spacing:.04em;color:var(--muted)}
td.t{white-space:normal}
.badge{font-size:.72rem;font-weight:700;padding:2px 8px;border-radius:99px;background:var(--surface2);color:var(--muted)}
.badge.ok{background:var(--goodbg);color:var(--good)}
tr.done td.t{opacity:.6;text-decoration:line-through}
.note{color:var(--muted);font-size:.82rem;margin-top:14px}
</style>
<div class="wrap">
<h1>Relecture — Kamal Campus</h1>
<div class="sub">Instantané du <span id="d"></span>. La source de vérité est le champ <code>relu_par</code> des fiches ; cochez ici pour suivre votre avancement (mémorisé dans ce navigateur).</div>
<div class="big">
  <div class="kpi"><div class="n" id="kTot"></div><div class="l">chapitres au total</div></div>
  <div class="kpi"><div class="n" id="kRelu"></div><div class="l">relus (fiches validées)</div></div>
  <div class="kpi" style="flex:1;min-width:220px"><div class="n" id="kPct"></div><div class="l">avancement — <span id="kCoch">0</span> cochés dans ce navigateur</div><div class="barbig"><i id="barGlobal" style="width:0"></i></div></div>
</div>
<h2>Par matière</h2>
<div class="mats" id="mats"></div>
<h2>Chapitres</h2>
<div class="tools">
  <input type="search" id="q" placeholder="Rechercher un chapitre…">
  <select id="fMat"></select>
  <select id="fNiv"></select>
  <label class="chk"><input type="checkbox" id="fReste"> à relire seulement</label>
  <button id="exp">Exporter les cochés</button>
  <button id="raz">Réinitialiser</button>
</div>
<div class="tablewrap"><table><thead><tr><th></th><th>Matière</th><th>Niveau</th><th>Chapitre</th><th>Statut</th><th>Relu par</th></tr></thead><tbody id="tb"></tbody></table></div>
<div class="note">Astuce : « Exporter les cochés » copie la liste des identifiants relus, à reporter dans les fiches (<code>statut: relu</code>, <code>relu_par: "Nom"</code>) puis régénérer avec <code>npm run relecture</code>.</div>
</div>
<script id="data" type="application/json">${JSON.stringify(DATA).replace(/</g, '\\u003c')}</script>
<script>
const D=JSON.parse(document.getElementById('data').textContent);
const KEY='kc-relu-'+D.total;
let coch=new Set();try{coch=new Set(JSON.parse(localStorage.getItem(KEY)||'[]'))}catch(e){}
const $=s=>document.querySelector(s);
$('#d').textContent=D.dateGen;$('#kTot').textContent=D.total;$('#kRelu').textContent=D.relus;
function estRelu(c){return c.relu||coch.has(c.id)}
function maj(){
  const n=D.chapitres.filter(estRelu).length;
  $('#kPct').textContent=Math.round(n/D.total*100)+'%';
  $('#barGlobal').style.width=(n/D.total*100)+'%';
  $('#kCoch').textContent=coch.size;
  // matières
  const agg={};for(const c of D.chapitres){(agg[c.matiere]??={t:0,r:0});agg[c.matiere].t++;if(estRelu(c))agg[c.matiere].r++;}
  $('#mats').innerHTML=Object.keys(agg).sort((a,b)=>(D.LIB[a]||a).localeCompare(D.LIB[b]||b)).map(m=>{
    const {t,r}=agg[m],p=Math.round(r/t*100),col=D.COUL[m]||'#888';
    return '<div class="mat"><div class="top"><span class="dot" style="background:'+col+'"></span>'+(D.LIB[m]||m)+'<span class="c">'+r+'/'+t+'</span></div><div class="bar"><i style="width:'+p+'%;background:'+col+'"></i></div></div>';
  }).join('');
}
function opts(sel,vals,lib){
  const o=['<option value="">'+(sel==='#fMat'?'Toutes les matières':'Tous les niveaux')+'</option>'];
  for(const v of vals)o.push('<option value="'+v+'">'+(lib[v]||v)+'</option>');$(sel).innerHTML=o.join('');}
opts('#fMat',[...new Set(D.chapitres.map(c=>c.matiere))].sort((a,b)=>(D.LIB[a]||a).localeCompare(D.LIB[b]||b)),D.LIB);
opts('#fNiv',[...new Set(D.chapitres.map(c=>c.niveau))],D.NIV_LIB);
function rows(){
  const q=$('#q').value.toLowerCase(),fm=$('#fMat').value,fn=$('#fNiv').value,fr=$('#fReste').checked;
  $('#tb').innerHTML=D.chapitres.filter(c=>{
    if(fm&&c.matiere!==fm)return false;if(fn&&c.niveau!==fn)return false;
    if(fr&&estRelu(c))return false;
    if(q&&!((c.titre+' '+(D.LIB[c.matiere]||'')).toLowerCase().includes(q)))return false;
    return true;
  }).map(c=>{
    const done=estRelu(c),col=D.COUL[c.matiere]||'#888';
    return '<tr class="'+(done?'done':'')+'"><td><input type="checkbox" data-id="'+c.id+'" '+(coch.has(c.id)?'checked':'')+(c.relu?' disabled title="validé dans la fiche"':'')+'></td>'+
      '<td><span class="dot" style="display:inline-block;background:'+col+'"></span> '+(D.LIB[c.matiere]||c.matiere)+'</td>'+
      '<td>'+(D.NIV_LIB[c.niveau]||c.niveau)+'</td><td class="t">'+c.titre+'</td>'+
      '<td><span class="badge '+(c.relu?'ok':'')+'">'+(c.relu?'relu':c.statut)+'</span></td>'+
      '<td>'+(c.reluPar||'—')+'</td></tr>';
  }).join('')||'<tr><td colspan="6" style="padding:16px;color:var(--muted)">Aucun chapitre.</td></tr>';
  $('#tb').querySelectorAll('input[type=checkbox]').forEach(cb=>cb.onchange=()=>{
    const id=cb.dataset.id;if(cb.checked)coch.add(id);else coch.delete(id);
    try{localStorage.setItem(KEY,JSON.stringify([...coch]))}catch(e){}
    cb.closest('tr').classList.toggle('done',cb.checked);maj();
  });
}
['#q','#fMat','#fNiv','#fReste'].forEach(s=>$(s).addEventListener('input',rows));
$('#exp').onclick=()=>{const ids=D.chapitres.filter(c=>estRelu(c)).map(c=>c.id);navigator.clipboard&&navigator.clipboard.writeText(ids.join('\\n'));alert(ids.length+' identifiant(s) relus copiés dans le presse-papier.');};
$('#raz').onclick=()=>{if(confirm('Effacer les cases cochées dans ce navigateur ?')){coch=new Set();try{localStorage.removeItem(KEY)}catch(e){}rows();maj();}};
maj();rows();
</script>`;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
console.log(`✓ tableau de bord de relecture → docs/relecture.html`);
console.log(`  ${total} chapitres · ${relus} relus (${Math.round(relus / total * 100)}%) · ${Object.keys(parMat).length} matières`);
