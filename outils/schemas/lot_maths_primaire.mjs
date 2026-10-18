/**
 * Lot « maths_primaire » : schémas des fiches de mathématiques du CP au CM2.
 * Schémas simples, colorés, avec très peu de texte. Toutes les coordonnées
 * sont calculées (angles, graduations, proportions, heures).
 */
import {
  enveloppe, texte, ligne, fleche, cercle, polygone, angleDroit, nb, esc,
  ENCRE, GRILLE, AXE, BLEU, ROUGE, VERT, ORANGE, VIOLET, ATTENUE,
} from './base.mjs';

// ---------------------------------------------------------------- outils
const PALE = { [BLEU]: '#dce9fc', [ROUGE]: '#f8dddd', [VERT]: '#d7f0e2', [ORANGE]: '#fbe6d2', [VIOLET]: '#ece1f6', [ATTENUE]: '#e7ecf1', [ENCRE]: '#e3e8ee' };
const pale = (c) => PALE[c] || '#eef2f6';
const GRIS = '#b9c4cf';
const OR = '#d9a520';
const CUIVRE = '#b8693a';
const ARGENT = '#c9d0d6';

/** Nombre en français : virgule décimale, espace (insécable) des milliers. */
function fr(v, dec = null) {
  let s = dec === null ? String(Math.round(v * 1e6) / 1e6) : v.toFixed(dec);
  let [e, d] = s.split('.');
  const neg = e.startsWith('-');
  if (neg) e = e.slice(1);
  if (e.length > 3) e = e.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (neg ? '−' : '') + e + (d ? ',' + d : '');
}

/** Rectangle simple. */
function rect(x, y, w, h, { fond = 'none', bord = ENCRE, ep = 2, rx = 0, opacite = 1, pointilles = false } = {}) {
  return `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(w)}" height="${nb(h)}" rx="${rx}" fill="${fond}" fill-opacity="${opacite}" stroke="${bord}" stroke-width="${ep}"${pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
}

/** Chemin SVG brut. */
function chemin(d, { couleur = ENCRE, ep = 2, fond = 'none', pointilles = false, opacite = 1 } = {}) {
  return `<path d="${d}" fill="${fond}" fill-opacity="${opacite}" stroke="${couleur}" stroke-width="${ep}" stroke-linejoin="round" stroke-linecap="round"${pointilles ? ' stroke-dasharray="5 4"' : ''}/>`;
}

/** Fraction écrite « en étage » centrée en x, barre à la hauteur y. */
function frac(x, y, num, den, { taille = 18, couleur = ENCRE, gras = true } = {}) {
  const w = Math.max(String(num).length, String(den).length) * taille * 0.62 + 6;
  return (
    texte(x, y - 5, String(num), { taille, couleur, gras }) +
    ligne(x - w / 2, y, x + w / 2, y, { couleur, epaisseur: 1.8 }) +
    texte(x, y + taille + 1, String(den), { taille, couleur, gras })
  );
}

/** Pointe de flèche en (x, y) dans la direction (dx, dy). */
function pointe(x, y, dx, dy, couleur, t = 10) {
  const a = Math.atan2(dy, dx);
  const bx = x - t * Math.cos(a), by = y - t * Math.sin(a);
  return `<polygon points="${nb(x)},${nb(y)} ${nb(bx + (t / 2) * Math.sin(a))},${nb(by - (t / 2) * Math.cos(a))} ${nb(bx - (t / 2) * Math.sin(a))},${nb(by + (t / 2) * Math.cos(a))}" fill="${couleur}"/>`;
}

/** Accolade horizontale de x1 à x2 ; pointe vers le haut (haut=true : accolade au-dessus d'un objet). */
function accolade(x1, x2, y, { haut = true, couleur = ENCRE, h = 10 } = {}) {
  const s = haut ? -1 : 1;
  const xm = (x1 + x2) / 2;
  const d = `M ${nb(x1)} ${nb(y)} Q ${nb(x1)} ${nb(y + s * h)} ${nb(x1 + h)} ${nb(y + s * h)} L ${nb(xm - h)} ${nb(y + s * h)} Q ${nb(xm)} ${nb(y + s * h)} ${nb(xm)} ${nb(y + s * 2 * h)} Q ${nb(xm)} ${nb(y + s * h)} ${nb(xm + h)} ${nb(y + s * h)} L ${nb(x2 - h)} ${nb(y + s * h)} Q ${nb(x2)} ${nb(y + s * h)} ${nb(x2)} ${nb(y)}`;
  return chemin(d, { couleur, ep: 1.8 });
}

/** Petit trait de codage (côtés égaux) au milieu du segment. */
function codage(x1, y1, x2, y2, n = 1, couleur = ENCRE) {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const L = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const nx = -uy, ny = ux;
  let g = '';
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 5;
    const cx = mx + ux * o, cy = my + uy * o;
    g += ligne(cx - nx * 7, cy - ny * 7, cx + nx * 7, cy + ny * 7, { couleur, epaisseur: 1.8 });
  }
  return g;
}

/** Arc d'angle de rayon r au sommet (x, y), de l'angle a1 à a2 (degrés, sens trigonométrique, y vers le haut). */
function arcAngle(x, y, r, a1, a2, { couleur = ROUGE, ep = 2, fond = 'none' } = {}) {
  const p = (a) => [x + r * Math.cos((a * Math.PI) / 180), y - r * Math.sin((a * Math.PI) / 180)];
  const [x1, y1] = p(a1), [x2, y2] = p(a2);
  const grand = a2 - a1 > 180 ? 1 : 0;
  const d = (fond !== 'none' ? `M ${nb(x)} ${nb(y)} L ` : 'M ') + `${nb(x1)} ${nb(y1)} A ${r} ${r} 0 ${grand} 0 ${nb(x2)} ${nb(y2)}` + (fond !== 'none' ? ' Z' : '');
  return `<path d="${d}" fill="${fond}" fill-opacity="0.25" stroke="${couleur}" stroke-width="${ep}"/>`;
}

// ------------------------------------------------- jetons et groupes
/** Une boîte de jetons. it = { g: [[n, couleur], …], cols, barres, etiquette, sans_cadre } */
function mesureItem(it) {
  if (it.s) return { w: it.w || 34, h: 30 };
  if (it.t) return { w: it.w || String(it.t).length * (it.taille || 17) * 0.56 + 10, h: (it.taille || 17) * 1.4 };
  const n = it.g.reduce((a, [k]) => a + k, 0);
  const cols = it.cols || n;
  const rows = Math.ceil(n / cols);
  const P = it.pas || 26;
  const wn = cols * P + 14;
  return { w: Math.max(wn, it.wmin || 0), wn, h: rows * P + 14, n, cols, rows, P };
}
function dessineItem(it, x, ymid, m) {
  if (it.s) return texte(x + m.w / 2, ymid + 8, it.s, { taille: 26, gras: true, couleur: it.couleur || ENCRE });
  if (it.t) return texte(x + m.w / 2, ymid + 6, it.t, { taille: it.taille || 17, gras: it.gras !== false, couleur: it.couleur || ENCRE });
  const y = ymid - m.h / 2;
  const xc = x + m.w / 2;
  x = x + (m.w - m.wn) / 2;
  let g = '';
  if (!it.sans_cadre) g += rect(x, y, m.wn, m.h, { fond: it.fond || '#f6f8fb', bord: it.bord || GRIS, ep: 1.6, rx: 10 });
  const couleurs = [];
  it.g.forEach(([k, c]) => { for (let i = 0; i < k; i++) couleurs.push(c); });
  const barres = it.barres || 0;
  couleurs.forEach((c, i) => {
    const cx = x + 7 + m.P / 2 + (i % m.cols) * m.P;
    const cy = y + 7 + m.P / 2 + Math.floor(i / m.cols) * m.P;
    const barre = i >= couleurs.length - barres;
    g += cercle(cx, cy, m.P * 0.38, { couleur: c, fond: barre ? '#ffffff' : c, epaisseur: 2 });
    if (barre) g += ligne(cx - 9, cy - 9, cx + 9, cy + 9, { couleur: ROUGE, epaisseur: 2.4 }) + ligne(cx - 9, cy + 9, cx + 9, cy - 9, { couleur: ROUGE, epaisseur: 2.4 });
  });
  if (it.etiquette) g += texte(xc, y + m.h + 20, it.etiquette, { taille: 14, couleur: it.couleurEtiquette || ATTENUE, gras: true });
  return g;
}
/** Schéma « jetons » : plusieurs lignes d'éléments (groupes de jetons, signes, textes). */
function jetons({ lignes, W: Wmin = 420, ecart = 12, titre = null }) {
  const mes = lignes.map((l) => l.map(mesureItem));
  const largeurs = mes.map((ms) => ms.reduce((a, m) => a + m.w, 0) + ecart * (ms.length - 1));
  const W = Math.max(Wmin, Math.max(...largeurs) + 40);
  let y = titre ? 44 : 18;
  let g = titre ? texte(W / 2, 28, titre, { taille: 17, gras: true }) : '';
  lignes.forEach((l, i) => {
    const ms = mes[i];
    const hmax = Math.max(...ms.map((m) => m.h));
    const aEtiq = l.some((it) => it.etiquette);
    let x = (W - largeurs[i]) / 2;
    const ymid = y + hmax / 2;
    l.forEach((it, j) => { g += dessineItem(it, x, ymid, ms[j]); x += ms[j].w + ecart; });
    y += hmax + (aEtiq ? 34 : 14);
  });
  return enveloppe(W, nb(y + 6), g);
}

/** Cadre de 10 (2 rangées de 5) : couleurs = [[n, couleur], …]. */
function cadreDix(x, y, couleurs, c = 30) {
  let g = rect(x, y, 5 * c, 2 * c, { fond: '#ffffff', bord: ENCRE, ep: 2 });
  for (let i = 1; i < 5; i++) g += ligne(x + i * c, y, x + i * c, y + 2 * c, { couleur: ENCRE, epaisseur: 1.2 });
  g += ligne(x, y + c, x + 5 * c, y + c, { couleur: ENCRE, epaisseur: 1.2 });
  const liste = [];
  couleurs.forEach(([k, col]) => { for (let i = 0; i < k; i++) liste.push(col); });
  liste.forEach((col, i) => { g += cercle(x + c / 2 + (i % 5) * c, y + c / 2 + Math.floor(i / 5) * c, c * 0.36, { couleur: col, fond: col }); });
  return g;
}
function cadres10({ lignes, W = 520, titre = null }) {
  // lignes : [{ cadres: [[[n, couleur], …], …], texte }]
  const c = 30, hL = 2 * c + 22;
  let y = titre ? 50 : 20;
  let g = titre ? texte(W / 2, 30, titre, { taille: 17, gras: true }) : '';
  lignes.forEach((l) => {
    const n = l.cadres.length;
    const larg = n * 5 * c + (n - 1) * 14;
    const xt = l.texte ? 150 : 0;
    let x = (W - larg - xt) / 2;
    l.cadres.forEach((cd) => { g += cadreDix(x, y, cd, c); x += 5 * c + 14; });
    if (l.texte) g += texte(x + 10, y + c + 7, l.texte, { taille: 20, gras: true, ancre: 'start', couleur: l.couleur || ENCRE });
    y += hL;
  });
  return enveloppe(W, y, g);
}

// ------------------------------------------------- droite / bande numérique
function droite(p) {
  const W = p.W || 600, m = p.marge || 34;
  const yL = p.yLigne || 120, H = p.H || yL + 62;
  const { min, max } = p;
  const X = (v) => m + ((v - min) / (max - min)) * (W - 2 * m);
  const f = p.fmt || ((v) => fr(v));
  let g = p.titre ? texte(W / 2, 28, p.titre, { taille: p.tailleTitre || 17, gras: true, couleur: p.couleurTitre || ENCRE }) : '';
  g += fleche(m - 14, yL, W - m + 22, yL, { couleur: ENCRE, epaisseur: 2.2, pointe: 11 });
  if (p.pasFin) for (let v = min; v <= max + 1e-9; v += p.pasFin) g += ligne(X(v), yL - 5, X(v), yL + 5, { couleur: ATTENUE, epaisseur: 1.2 });
  const grads = p.graduations || (() => {
    const t = [];
    let i = 0;
    for (let v = min; v <= max + 1e-9; v += p.pas || 1, i++) t.push({ v: Math.round(v * 1e6) / 1e6, texte: i % (p.etiqPas || 1) === 0 ? f(Math.round(v * 1e6) / 1e6) : '' });
    return t;
  })();
  const gras = new Set(p.gras || []);
  grads.forEach((t) => {
    g += ligne(X(t.v), yL - 9, X(t.v), yL + 9, { couleur: ENCRE, epaisseur: 1.8 });
    if (t.frac) g += frac(X(t.v), yL + 30, t.frac[0], t.frac[1], { taille: 14, couleur: t.couleur || ENCRE, gras: true });
    else if (t.texte) g += texte(X(t.v), yL + 28, t.texte, { taille: t.taille || p.tailleNb || 15, couleur: t.couleur || (gras.has(t.v) ? ENCRE : ATTENUE), gras: gras.has(t.v) || !!t.couleur });
  });
  (p.sauts || []).forEach((s) => {
    const x1 = X(s.de), x2 = X(s.a), xm = (x1 + x2) / 2;
    const h = s.h || Math.min(46, Math.abs(x2 - x1) * 0.45 + 10);
    const sg = s.dessous ? 1 : -1;
    const y0 = yL + sg * 3;
    const cy = y0 + sg * 2 * h;
    const c = s.couleur || BLEU;
    g += `<path d="M ${nb(x1)} ${nb(y0)} Q ${nb(xm)} ${nb(cy)} ${nb(x2)} ${nb(y0)}" fill="none" stroke="${c}" stroke-width="2.4"/>`;
    g += pointe(x2, y0, x2 - xm, y0 - cy, c, 10);
    if (s.texte) g += texte(xm, s.dessous ? y0 + h + 22 : y0 - h - 8, s.texte, { taille: s.taille || 15, couleur: c, gras: true });
  });
  (p.points || []).forEach((pt) => {
    g += cercle(X(pt.v), yL, 6.5, { couleur: pt.couleur || ROUGE, fond: pt.couleur || ROUGE });
    if (pt.frac) g += frac(X(pt.v), yL - 44, pt.frac[0], pt.frac[1], { taille: 17, couleur: pt.couleur || ROUGE });
    if (pt.nom) g += texte(X(pt.v) + (pt.dx || 0), pt.dessous ? yL + (pt.dy || 56) : yL - (pt.dy || 18), pt.nom, { taille: pt.taille || 16, couleur: pt.couleur || ROUGE, gras: true });
  });
  (p.textes || []).forEach((t) => { g += texte(t.x, t.y, t.t, { taille: t.taille || 15, couleur: t.couleur || ENCRE, gras: t.gras !== false, ancre: t.ancre || 'middle' }); });
  return enveloppe(W, H, g);
}

// ------------------------------------------------- matériel base dix
function base10({ items, W: Wmin = 420, titre = null, bas = null, u = 11 }) {
  // items : { type: 'c' | 'd' | 'u', n, couleur, texte } ou { signe }
  const largeur = (it) => {
    if (it.signe) return 34;
    if (it.type === 'c') return it.n * (10 * u + 10) - 10;
    if (it.type === 'd') return it.n * (u + 7) - 7;
    return Math.ceil(it.n / 5) * (u + 6) - 6;
  };
  const ecart = 26;
  const tot = items.reduce((a, it) => a + Math.max(largeur(it), it.texte ? it.texte.length * 7.4 : 0), 0) + ecart * (items.length - 1);
  const W = Math.max(Wmin, tot + 40);
  const yT = titre ? 46 : 16;
  const yBase = yT + 10 * u + 6;
  let g = titre ? texte(W / 2, 28, titre, { taille: 17, gras: true }) : '';
  let x = (W - tot) / 2;
  items.forEach((it) => {
    const lw = largeur(it);
    const lz = Math.max(lw, it.texte ? it.texte.length * 7.4 : 0);
    const x0 = x + (lz - lw) / 2;
    const c = it.couleur || BLEU;
    if (it.signe) g += texte(x + 17, yBase - 5 * u + 9, it.signe, { taille: 28, gras: true });
    else if (it.type === 'c') {
      for (let k = 0; k < it.n; k++) {
        const px = x0 + k * (10 * u + 10), py = yBase - 10 * u;
        g += rect(px, py, 10 * u, 10 * u, { fond: pale(c), bord: c, ep: 1.8 });
        for (let i = 1; i < 10; i++) g += ligne(px + i * u, py, px + i * u, py + 10 * u, { couleur: c, epaisseur: 0.7 }) + ligne(px, py + i * u, px + 10 * u, py + i * u, { couleur: c, epaisseur: 0.7 });
      }
    } else if (it.type === 'd') {
      for (let k = 0; k < it.n; k++) {
        const px = x0 + k * (u + 7), py = yBase - 10 * u;
        g += rect(px, py, u, 10 * u, { fond: pale(c), bord: c, ep: 1.8 });
        for (let i = 1; i < 10; i++) g += ligne(px, py + i * u, px + u, py + i * u, { couleur: c, epaisseur: 0.8 });
      }
    } else {
      for (let k = 0; k < it.n; k++) {
        const px = x0 + Math.floor(k / 5) * (u + 6), py = yBase - u - (k % 5) * (u + 5);
        g += rect(px, py, u, u, { fond: pale(c), bord: c, ep: 1.8 });
      }
    }
    if (it.texte) g += texte(x + lz / 2, yBase + 24, it.texte, { taille: 14, couleur: c, gras: true });
    if (it.texte2) g += texte(x + lz / 2, yBase + 44, it.texte2, { taille: 16, couleur: c, gras: true });
    x += lz + ecart;
  });
  let H = yBase + (items.some((i) => i.texte2) ? 54 : 34);
  if (bas) { g += texte(W / 2, H + 20, bas, { taille: 18, gras: true }); H += 34; }
  return enveloppe(W, H, g);
}

// ------------------------------------------------- tableau de numération
function numeration({ colonnes, groupes = null, cw = 62, valeurs = true, bas = null, W: Wmin = 420, tailleChiffre = 30, tailleTitre = 15, signes = false }) {
  const largeurs = colonnes.map((c) => (c.virgule ? 22 : cw));
  const tot = largeurs.reduce((a, b) => a + b, 0);
  const W = Math.max(Wmin, tot + 40);
  const x0 = (W - tot) / 2;
  const xs = [];
  largeurs.reduce((a, w) => { xs.push(a); return a + w; }, x0);
  let y = 14;
  let g = '';
  if (groupes) {
    let k = 0;
    groupes.forEach((gp) => {
      const xa = xs[k], xb = xs[k + gp.n - 1] + largeurs[k + gp.n - 1];
      g += rect(xa, y, xb - xa, 30, { fond: pale(gp.couleur), bord: gp.couleur, ep: 1.6 });
      g += texte((xa + xb) / 2, y + 20, gp.titre, { taille: gp.taille || 14, couleur: gp.couleur, gras: true });
      k += gp.n;
    });
    y += 30;
  }
  const hT = 30, hC = 52;
  colonnes.forEach((c, i) => {
    const col = c.couleur || ENCRE;
    if (c.virgule) {
      g += texte(xs[i] + 11, y + hT + hC / 2 + 14, c.chiffre ? ',' : '', { taille: tailleChiffre + 4, gras: true, couleur: ROUGE });
      return;
    }
    g += rect(xs[i], y, largeurs[i], hT, { fond: pale(col), bord: col, ep: 1.4 });
    g += texte(xs[i] + largeurs[i] / 2, y + 20, c.titre, { taille: c.tailleTitre || tailleTitre, couleur: col, gras: true });
    g += rect(xs[i], y + hT, largeurs[i], hC, { fond: '#ffffff', bord: col, ep: 1.4 });
    if (c.chiffre !== undefined && c.chiffre !== '') g += texte(xs[i] + largeurs[i] / 2, y + hT + hC / 2 + 11, c.chiffre, { taille: tailleChiffre, couleur: col, gras: true });
  });
  y += hT + hC;
  if (valeurs && colonnes.some((c) => c.valeur)) {
    colonnes.forEach((c, i) => {
      if (!c.valeur) return;
      const xm = xs[i] + largeurs[i] / 2;
      g += fleche(xm, y + 4, xm, y + 24, { couleur: c.couleur || ENCRE, epaisseur: 1.8, pointe: 8 });
      g += texte(xm, y + 44, c.valeur, { taille: c.tailleValeur || 16, couleur: c.couleur || ENCRE, gras: true });
      if (signes && i < colonnes.length - 1 && colonnes.slice(i + 1).some((d) => d.valeur)) {
        const j = colonnes.findIndex((d, jj) => jj > i && d.valeur);
        g += texte((xm + xs[j] + largeurs[j] / 2) / 2, y + 44, '+', { taille: 16, gras: true });
      }
    });
    y += 54;
  }
  if (bas) { g += texte(W / 2, y + 32, bas, { taille: 18, gras: true }); y += 40; }
  return enveloppe(W, y + 10, g);
}

// ------------------------------------------------- opération posée
function pose({ colonnes, lignes, resultat, retenues = {}, notes = [], cw = 46, tailleTitre = 15, W: Wmin = 420 }) {
  const largeurs = colonnes.map((c) => (c.virgule ? 20 : cw));
  const tot = largeurs.reduce((a, b) => a + b, 0);
  const xNotes = notes.length ? Math.max(...notes.map((n) => n.texte.length)) * 8.2 + 30 : 0;
  const W = Math.max(Wmin, tot + 80 + xNotes);
  const x0 = (W - xNotes - tot) / 2 + 22;
  const xs = [];
  largeurs.reduce((a, w) => { xs.push(a); return a + w; }, x0);
  const hR = 42;
  const yH = 14;
  const yR = yH + 30 + (Object.keys(retenues).length ? 26 : 6);
  // positions verticales des lignes
  const ys = [];
  let y = yR;
  const traits = [];
  lignes.forEach((l) => {
    if (l.trait) { traits.push(y + 6); y += 12; ys.push(null); return; }
    ys.push(y + 30);
    y += hR;
  });
  const yTrait = y + 6;
  const yRes = yTrait + 36;
  const yBas = yRes + 16;
  let g = '';
  colonnes.forEach((c, i) => {
    if (c.virgule) return;
    const col = c.couleur || ENCRE;
    g += rect(xs[i] + 2, yH, largeurs[i] - 4, yBas - yH, { fond: pale(col), bord: 'none', ep: 0, rx: 6 });
    g += texte(xs[i] + largeurs[i] / 2, yH + 21, c.titre, { taille: c.tailleTitre || tailleTitre, couleur: col, gras: true });
  });
  Object.entries(retenues).forEach(([i, t]) => {
    g += texte(xs[+i] + largeurs[+i] / 2, yR - 4, t, { taille: 17, couleur: ROUGE, gras: true });
  });
  const cellule = (cel, i, yy, defaut = ENCRE) => {
    if (cel === '' || cel === undefined || cel === null) return '';
    const c = typeof cel === 'string' ? { t: cel } : cel;
    const xm = xs[i] + largeurs[i] / 2;
    const col = c.couleur || (c.t === ',' ? ROUGE : defaut);
    let s = texte(xm, yy, c.t, { taille: 28, gras: true, couleur: col });
    if (c.barre) s += ligne(xm - 11, yy + 2, xm + 11, yy - 22, { couleur: ROUGE, epaisseur: 2.4 });
    if (c.dessus) s += texte(xm + 12, yy - 24, c.dessus, { taille: 16, couleur: ROUGE, gras: true });
    if (c.prefixe) s += texte(xm - 13, yy - 14, c.prefixe, { taille: 16, couleur: ROUGE, gras: true });
    return s;
  };
  const xg = xs[0] - 34, xd = xs[xs.length - 1] + largeurs[largeurs.length - 1] + 4;
  lignes.forEach((l, k) => {
    if (l.trait) return;
    if (l.signe) g += texte(xs[0] - 22, ys[k], l.signe, { taille: 26, gras: true });
    l.cells.forEach((cel, i) => { g += cellule(cel, i, ys[k], l.couleur || ENCRE); });
  });
  traits.forEach((t) => { g += ligne(xg, t, xd, t, { couleur: ENCRE, epaisseur: 1.8 }); });
  g += ligne(xg, yTrait, xd, yTrait, { couleur: ENCRE, epaisseur: 2.4 });
  resultat.forEach((cel, i) => { g += cellule(cel, i, yRes, VERT); });
  notes.forEach((n) => {
    const yy = n.ligne === 'res' ? yRes - 6 : n.ligne === 'retenue' ? yR - 6 : ys[n.ligne] - 6;
    g += texte(xd + 18, yy, n.texte, { taille: 15, couleur: n.couleur || ATTENUE, gras: true, ancre: 'start' });
  });
  return enveloppe(W, yBas + 10, g);
}

// ------------------------------------------------- division posée (potence)
function potence({ cellules, traits, diviseur, quotient, etiquettes = [], cw = 28, W = 520, H = 280, x0 = 110, y0 = 54 }) {
  // cellules : [{ r, c, t, couleur }] dans la partie gauche (r : ligne, c : colonne) ; traits : [{ r, c1, c2 }]
  const X = (c) => x0 + c * cw;
  const Y = (r) => y0 + r * 38;
  let g = '';
  cellules.forEach((k) => { g += texte(X(k.c), Y(k.r), k.t, { taille: 26, gras: true, couleur: k.couleur || ENCRE }); });
  traits.forEach((t) => { g += ligne(X(t.c1) - 14, Y(t.r) + 10, X(t.c2) + 14, Y(t.r) + 10, { couleur: ENCRE, epaisseur: 1.8 }); });
  const nCols = Math.max(...cellules.map((k) => k.c));
  const xBar = X(nCols) + 26;
  const nR = Math.max(...cellules.map((k) => k.r));
  g += ligne(xBar, Y(0) - 30, xBar, Y(nR) + 12, { couleur: ENCRE, epaisseur: 2.6 });
  g += ligne(xBar, Y(0) + 10, xBar + 90, Y(0) + 10, { couleur: ENCRE, epaisseur: 2.6 });
  g += texte(xBar + 16, Y(0), diviseur.t, { taille: 26, gras: true, couleur: diviseur.couleur, ancre: 'start' });
  g += texte(xBar + 16, Y(1), quotient.t, { taille: 26, gras: true, couleur: quotient.couleur, ancre: 'start' });
  etiquettes.forEach((e) => {
    g += fleche(e.x1, e.y1, e.x2, e.y2, { couleur: e.couleur, epaisseur: 1.8, pointe: 8 });
    g += texte(e.tx, e.ty, e.t, { taille: 15, couleur: e.couleur, gras: true, ancre: e.ancre || 'middle' });
  });
  return enveloppe(W, H, g);
}

// ------------------------------------------------- fractions
function disque(cx, cy, r, n, k, couleur, { depart = 90 } = {}) {
  let g = '';
  for (let i = 0; i < n; i++) {
    const a1 = ((depart - (i * 360) / n) * Math.PI) / 180, a2 = ((depart - ((i + 1) * 360) / n) * Math.PI) / 180;
    const p1 = [cx + r * Math.cos(a1), cy - r * Math.sin(a1)], p2 = [cx + r * Math.cos(a2), cy - r * Math.sin(a2)];
    const grand = 360 / n > 180 ? 1 : 0;
    g += `<path d="M ${nb(cx)} ${nb(cy)} L ${nb(p1[0])} ${nb(p1[1])} A ${r} ${r} 0 ${grand} 1 ${nb(p2[0])} ${nb(p2[1])} Z" fill="${i < k ? couleur : '#ffffff'}" fill-opacity="${i < k ? 0.75 : 1}" stroke="${ENCRE}" stroke-width="2"/>`;
  }
  return g;
}
function bandes({ lignes, W = 640, xb = 120, lb = 360, hb = 40, titre = null, ligneV = null }) {
  // lignes : [{ n, k, couleur, frac: [a, b], droite, grads }]
  let y = titre ? 50 : 18;
  let g = titre ? texte(W / 2, 30, titre, { taille: 17, gras: true }) : '';
  lignes.forEach((l) => {
    const c = l.couleur || BLEU;
    const w = lb / l.n;
    for (let i = 0; i < l.n; i++) {
      const ci = l.parts ? l.parts[i] : (i < l.k ? c : null);
      g += rect(xb + i * w, y, w, hb, { fond: ci || '#ffffff', opacite: ci ? 0.7 : 1, bord: ENCRE, ep: 2 });
    }
    if (l.frac) g += frac(xb - 50, y + hb / 2 + 2, l.frac[0], l.frac[1], { taille: 18, couleur: c });
    else if (l.gauche) g += texte(xb - 14, y + hb / 2 + 6, l.gauche, { taille: 16, gras: true, couleur: c, ancre: 'end' });
    if (l.droite) g += texte(xb + lb + 14, y + hb / 2 + 6, l.droite, { taille: 16, gras: true, couleur: l.couleurDroite || c, ancre: 'start' });
    y += hb + (l.ecart ?? 18);
    if (l.grads) {
      for (let i = 0; i <= l.n; i++) {
        const t = l.grads[i];
        if (!t) continue;
        if (Array.isArray(t)) g += frac(xb + i * w, y + 18, t[0], t[1], { taille: 15, couleur: ENCRE });
        else g += texte(xb + i * w, y + 16, t, { taille: 16, gras: true });
      }
      y += 50;
    }
  });
  if (ligneV !== null) g += ligne(xb + ligneV * lb, (titre ? 50 : 18) - 8, xb + ligneV * lb, y - 8, { couleur: ROUGE, epaisseur: 2.4, pointilles: true });
  return enveloppe(W, y + 4, g);
}

// ------------------------------------------------- figures planes
function forme(type, cx, cy, s, o = {}) {
  const c = o.couleur || BLEU;
  const st = { couleur: c, fond: pale(c), epaisseur: 2.6 };
  let g = '';
  let pts = null;
  const P = (a, b) => [cx + a * s, cy + b * s];
  const reg = (n, r, rot = -90) => Array.from({ length: n }, (_, i) => [cx + r * s * Math.cos(((rot + (i * 360) / n) * Math.PI) / 180), cy + r * s * Math.sin(((rot + (i * 360) / n) * Math.PI) / 180)]);
  switch (type) {
    case 'carre': pts = [P(-0.4, -0.4), P(0.4, -0.4), P(0.4, 0.4), P(-0.4, 0.4)]; break;
    case 'rectangle': pts = [P(-0.5, -0.28), P(0.5, -0.28), P(0.5, 0.28), P(-0.5, 0.28)]; break;
    case 'triangle': pts = [P(-0.48, 0.33), P(0.45, 0.33), P(-0.25, -0.42)]; break;
    case 'equilateral': { const h = 0.9 * Math.sqrt(3) / 2; pts = [P(-0.45, h / 3), P(0.45, h / 3), P(0, -2 * h / 3)]; break; }
    case 'isocele': pts = [P(-0.27, 0.4), P(0.27, 0.4), P(0, -0.42)]; break;
    case 'triangle-rectangle': pts = [P(-0.38, 0.36), P(0.45, 0.36), P(-0.38, -0.4)]; break;
    case 'losange': pts = [P(0, -0.42), P(0.3, 0), P(0, 0.42), P(-0.3, 0)]; break;
    case 'parallelogramme': pts = [P(-0.5, 0.26), P(0.24, 0.26), P(0.5, -0.26), P(-0.24, -0.26)]; break;
    case 'quadrilatere': pts = [P(-0.46, 0.3), P(0.4, 0.38), P(0.32, -0.36), P(-0.28, -0.3)]; break;
    case 'pentagone': pts = reg(5, 0.45); break;
    case 'hexagone': pts = reg(6, 0.45, 0); break;
    case 'cercle': g += cercle(cx, cy, 0.42 * s, { couleur: c, fond: pale(c), epaisseur: 2.6 }); break;
    default: break;
  }
  if (pts) g += polygone(pts, st);
  // axes de symétrie
  if (o.axes) {
    const ax = (x1, y1, x2, y2) => {
      const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, e = 12;
      return ligne(x1 - ux * e, y1 - uy * e, x2 + ux * e, y2 + uy * e, { couleur: ROUGE, epaisseur: 2, pointilles: true });
    };
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    if (type === 'carre' || type === 'rectangle') {
      const [A, B, C, D] = pts;
      g += ax(...mid(A, B), ...mid(D, C)) + ax(...mid(A, D), ...mid(B, C));
      if (type === 'carre') g += ax(...A, ...C) + ax(...B, ...D);
    } else if (type === 'losange') {
      g += ax(...pts[0], ...pts[2]) + ax(...pts[1], ...pts[3]);
    } else if (type === 'equilateral') {
      for (let i = 0; i < 3; i++) g += ax(...pts[i], ...mid(pts[(i + 1) % 3], pts[(i + 2) % 3]));
    } else if (type === 'isocele') {
      g += ax(...pts[2], ...mid(pts[0], pts[1]));
    } else if (type === 'cercle') {
      for (let i = 0; i < 4; i++) {
        const a = (i * 45 * Math.PI) / 180, r = 0.42 * s;
        g += ax(cx - r * Math.cos(a), cy - r * Math.sin(a), cx + r * Math.cos(a), cy + r * Math.sin(a));
      }
    } else if (type === 'pentagone') {
      for (let i = 0; i < 5; i++) g += ax(...pts[i], ...mid(pts[(i + 2) % 5], pts[(i + 3) % 5]));
    }
  }
  // codages des côtés égaux
  if (o.codes && pts) {
    const n = pts.length;
    const motif = {
      carre: [1, 1, 1, 1], rectangle: [2, 1, 2, 1], losange: [1, 1, 1, 1], equilateral: [1, 1, 1],
      isocele: [0, 1, 1], parallelogramme: [1, 2, 1, 2],
    }[type] || [];
    for (let i = 0; i < n; i++) if (motif[i]) g += codage(...pts[i], ...pts[(i + 1) % n], motif[i], ENCRE);
  }
  // angles droits
  if (o.anglesDroits && pts) {
    const u = (a, b) => { const L = Math.hypot(b[0] - a[0], b[1] - a[1]); return [(b[0] - a[0]) / L, (b[1] - a[1]) / L]; };
    const sommets = type === 'triangle-rectangle' ? [0] : pts.map((_, i) => i);
    sommets.forEach((i) => {
      const n = pts.length;
      g += angleDroit(pts[i][0], pts[i][1], u(pts[i], pts[(i + 1) % n]), u(pts[i], pts[(i + n - 1) % n]), { taille: 12, couleur: ENCRE });
    });
  }
  if (o.sommets && pts) pts.forEach(([x, y]) => { g += `<circle cx="${nb(x)}" cy="${nb(y)}" r="4.5" fill="${ROUGE}"/>`; });
  if (o.barre) g += ligne(cx - 0.5 * s, cy + 0.5 * s, cx + 0.5 * s, cy - 0.5 * s, { couleur: ROUGE, epaisseur: 3 });
  return g;
}
function formes({ liste, s = 110, cw = 150, W: Wmin = 400, parLigne = 4, titre = null }) {
  const n = liste.length;
  const nl = Math.ceil(n / parLigne);
  const ncol = Math.min(n, parLigne);
  const W = Math.max(Wmin, ncol * cw + 20);
  const hL = s + 66;
  const y0 = titre ? 40 : 6;
  let g = titre ? texte(W / 2, 26, titre, { taille: 17, gras: true }) : '';
  liste.forEach((f, i) => {
    const l = Math.floor(i / parLigne), k = i % parLigne;
    const nDansLigne = Math.min(parLigne, n - l * parLigne);
    const x = (W - nDansLigne * cw) / 2 + k * cw + cw / 2;
    const y = y0 + l * hL + s / 2 + 8;
    g += forme(f.type, x, y, s, f);
    if (f.nom) g += texte(x, y + s / 2 + 24, f.nom, { taille: 15, gras: true, couleur: f.couleur || BLEU });
    if (f.info) g += texte(x, y + s / 2 + 44, f.info, { taille: 14, couleur: f.couleurInfo || ATTENUE, gras: true });
  });
  return enveloppe(W, y0 + nl * hL, g);
}

// ------------------------------------------------- quadrillage
const halo = (svgTexte) => svgTexte.replace(/<text /g, '<text paint-order="stroke" stroke="#ffffff" stroke-width="5" stroke-linejoin="round" ');
function quadrillage({ cols, rows, c = 40, cases = [], chemins = [], axe = null, polys = [], points = [], segments = [], textes = [], marge = 30, mg = null, md = null, Hplus = 0, numeros = false }) {
  const g0 = mg ?? marge, d0 = md ?? marge;
  const W = cols * c + g0 + d0;
  const x0 = g0, y0 = marge + (numeros ? 10 : 0);
  const X = (i) => x0 + i * c, Y = (j) => y0 + j * c;
  let g = '';
  cases.forEach((k) => { g += rect(X(k.c), Y(k.r), c, c, { fond: k.couleur || BLEU, opacite: k.opacite ?? 0.55, bord: 'none', ep: 0 }); });
  for (let i = 0; i <= cols; i++) g += ligne(X(i), Y(0), X(i), Y(rows), { couleur: '#9fb0c2', epaisseur: 1.2 });
  for (let j = 0; j <= rows; j++) g += ligne(X(0), Y(j), X(cols), Y(j), { couleur: '#9fb0c2', epaisseur: 1.2 });
  if (numeros) {
    for (let i = 0; i < cols; i++) g += texte(X(i) + c / 2, Y(0) - 10, String.fromCharCode(65 + i), { taille: 15, gras: true, couleur: ATTENUE });
    for (let j = 0; j < rows; j++) g += texte(X(0) - 14, Y(j) + c / 2 + 5, String(j + 1), { taille: 15, gras: true, couleur: ATTENUE });
  }
  if (axe) g += ligne(X(axe.x), Y(0) - 10, X(axe.x), Y(rows) + 10, { couleur: ROUGE, epaisseur: 3, pointilles: true });
  polys.forEach((p) => { g += polygone(p.pts.map(([i, j]) => [X(i), Y(j)]), { couleur: p.couleur || BLEU, fond: p.fond || pale(p.couleur || BLEU), epaisseur: 2.8, opacite: p.opacite ?? 1 }); });
  segments.forEach((s) => { g += ligne(X(s[0]), Y(s[1]), X(s[2]), Y(s[3]), { couleur: s[4] || ENCRE, epaisseur: s[5] || 2.4, pointilles: !!s[6] }); });
  chemins.forEach((ch) => {
    for (let k = 0; k < ch.pts.length - 1; k++) {
      const [i1, j1] = ch.pts[k], [i2, j2] = ch.pts[k + 1];
      g += fleche(X(i1), Y(j1), X(i2), Y(j2), { couleur: ch.couleur || VERT, epaisseur: 3.2, pointe: 13 });
    }
  });
  points.forEach((p) => {
    if (p.disque) g += cercle(X(p.i), Y(p.j), p.r || 7, { couleur: p.couleur || ROUGE, fond: p.couleur || ROUGE });
    else g += `<circle cx="${nb(X(p.i))}" cy="${nb(Y(p.j))}" r="5.5" fill="${p.couleur || ROUGE}"/>`;
    if (p.nom) g += halo(texte(X(p.i) + (p.dx ?? 0), Y(p.j) + (p.dy ?? -12), p.nom, { taille: p.taille || 16, gras: true, couleur: p.couleur || ROUGE }));
  });
  textes.forEach((t) => { g += halo(texte(X(t.i), Y(t.j), t.t, { taille: t.taille || 15, gras: true, couleur: t.couleur || ENCRE, ancre: t.ancre || 'middle' })); });
  return enveloppe(W, Y(rows) + marge + Hplus, g);
}

// ------------------------------------------------- solides
const DX = 0.5, DY = -0.36;
function cube(x, y, s, c = BLEU, o = {}) {
  return pave(x, y, s, s, s, c, o);
}
function pave(x, y, w, h, d, c = BLEU, o = {}) {
  // (x, y) : coin haut-gauche de la face avant
  const ox = DX * d, oy = DY * d;
  const A = [x, y], B = [x + w, y], C = [x + w, y + h], D = [x, y + h];
  const A2 = [x + ox, y + oy], B2 = [x + w + ox, y + oy], C2 = [x + w + ox, y + h + oy], D2 = [x + ox, y + h + oy];
  let g = '';
  g += polygone([A, B, B2, A2], { couleur: c, fond: pale(c), epaisseur: 0.01 });
  g += polygone([B, C, C2, B2], { couleur: c, fond: c, opacite: 0.28, epaisseur: 0.01 });
  g += polygone([A, B, C, D], { couleur: c, fond: c, opacite: 0.12, epaisseur: 0.01 });
  const L = (p, q, pt = false) => ligne(p[0], p[1], q[0], q[1], { couleur: c, epaisseur: pt ? 1.6 : 2.4, pointilles: pt });
  g += L(D2, A2, true) + L(D2, C2, true) + L(D, D2, true);
  g += L(A, B) + L(B, C) + L(C, D) + L(D, A) + L(A, A2) + L(B, B2) + L(C, C2) + L(A2, B2) + L(B2, C2);
  if (o.sommets) [A, B, C, D, A2, B2, C2].forEach(([px, py]) => { g += `<circle cx="${nb(px)}" cy="${nb(py)}" r="4.5" fill="${ROUGE}"/>`; });
  return g;
}
function pyramide(x, y, s, h, c = VERT) {
  // base carrée de côté s (avant-gauche en (x, y)), sommet à la hauteur h au-dessus du centre
  const d = s, ox = DX * d, oy = DY * d;
  const A = [x, y], B = [x + s, y], B2 = [x + s + ox, y + oy], A2 = [x + ox, y + oy];
  const S = [x + s / 2 + ox / 2, y + oy / 2 - h];
  let g = '';
  g += polygone([A, B, S], { couleur: c, fond: c, opacite: 0.14, epaisseur: 0.01 });
  g += polygone([B, B2, S], { couleur: c, fond: c, opacite: 0.3, epaisseur: 0.01 });
  const L = (p, q, pt = false) => ligne(p[0], p[1], q[0], q[1], { couleur: c, epaisseur: pt ? 1.6 : 2.4, pointilles: pt });
  g += L(A, A2, true) + L(A2, B2, true) + L(A2, S, true);
  g += L(A, B) + L(B, B2) + L(A, S) + L(B, S) + L(B2, S);
  return g;
}
function ellipse(cx, cy, rx, ry, { couleur = ENCRE, ep = 2.4, fond = 'none', opacite = 1, moitie = null, pointilles = false } = {}) {
  if (!moitie) return `<ellipse cx="${nb(cx)}" cy="${nb(cy)}" rx="${nb(rx)}" ry="${nb(ry)}" fill="${fond}" fill-opacity="${opacite}" stroke="${couleur}" stroke-width="${ep}"${pointilles ? ' stroke-dasharray="5 4"' : ''}/>`;
  const sweep = moitie === 'bas' ? 0 : 1;
  return `<path d="M ${nb(cx - rx)} ${nb(cy)} A ${nb(rx)} ${nb(ry)} 0 0 ${sweep} ${nb(cx + rx)} ${nb(cy)}" fill="none" stroke="${couleur}" stroke-width="${pointilles ? 1.6 : ep}"${pointilles ? ' stroke-dasharray="5 4"' : ''}/>`;
}
function cylindre(cx, yHaut, r, h, c = ORANGE) {
  const ry = r * 0.32;
  let g = `<path d="M ${nb(cx - r)} ${nb(yHaut)} L ${nb(cx - r)} ${nb(yHaut + h)} A ${nb(r)} ${nb(ry)} 0 0 0 ${nb(cx + r)} ${nb(yHaut + h)} L ${nb(cx + r)} ${nb(yHaut)} Z" fill="${c}" fill-opacity="0.16" stroke="none"/>`;
  g += ellipse(cx, yHaut, r, ry, { couleur: c, fond: pale(c) });
  g += ligne(cx - r, yHaut, cx - r, yHaut + h, { couleur: c, epaisseur: 2.4 }) + ligne(cx + r, yHaut, cx + r, yHaut + h, { couleur: c, epaisseur: 2.4 });
  g += ellipse(cx, yHaut + h, r, ry, { couleur: c, moitie: 'bas' }) + ellipse(cx, yHaut + h, r, ry, { couleur: c, moitie: 'haut', pointilles: true });
  return g;
}
function cone(cx, yBase, r, h, c = VIOLET) {
  const ry = r * 0.32;
  let g = `<path d="M ${nb(cx - r)} ${nb(yBase)} L ${nb(cx)} ${nb(yBase - h)} L ${nb(cx + r)} ${nb(yBase)} A ${nb(r)} ${nb(ry)} 0 0 1 ${nb(cx - r)} ${nb(yBase)} Z" fill="${c}" fill-opacity="0.16" stroke="none"/>`;
  g += ligne(cx - r, yBase, cx, yBase - h, { couleur: c, epaisseur: 2.4 }) + ligne(cx + r, yBase, cx, yBase - h, { couleur: c, epaisseur: 2.4 });
  g += ellipse(cx, yBase, r, ry, { couleur: c, moitie: 'bas' }) + ellipse(cx, yBase, r, ry, { couleur: c, moitie: 'haut', pointilles: true });
  return g;
}
function boule(cx, cy, r, c = ROUGE) {
  return cercle(cx, cy, r, { couleur: c, fond: pale(c), epaisseur: 2.4 }) + ellipse(cx, cy, r, r * 0.3, { couleur: c, moitie: 'bas', ep: 1.6 }) + ellipse(cx, cy, r, r * 0.3, { couleur: c, moitie: 'haut', pointilles: true });
}
function solides({ liste, cw = 150, W: Wmin = 400, parLigne = 3 }) {
  const n = liste.length, ncol = Math.min(n, parLigne), nl = Math.ceil(n / parLigne);
  const W = Math.max(Wmin, ncol * cw + 20);
  const hL = 190;
  let g = '';
  liste.forEach((so, i) => {
    const l = Math.floor(i / parLigne), k = i % parLigne;
    const nd = Math.min(parLigne, n - l * parLigne);
    const cx = (W - nd * cw) / 2 + k * cw + cw / 2;
    const yb = 16 + l * hL + 130; // ligne de base des dessins
    switch (so.type) {
      case 'cube': g += cube(cx - 48, yb - 80, 80, so.couleur || BLEU); break;
      case 'pave': g += pave(cx - 60, yb - 60, 100, 60, 56, so.couleur || VERT); break;
      case 'pyramide': g += pyramide(cx - 52, yb - 4, 86, 100, so.couleur || ORANGE); break;
      case 'cylindre': g += cylindre(cx, yb - 92, 40, 92, so.couleur || VIOLET); break;
      case 'cone': g += cone(cx, yb, 44, 110, so.couleur || ROUGE); break;
      case 'boule': g += boule(cx, yb - 52, 52, so.couleur || BLEU); break;
      default: break;
    }
    g += texte(cx, yb + 30, so.nom, { taille: 15, gras: true, couleur: ENCRE });
    if (so.info) g += texte(cx, yb + 49, so.info, { taille: 13, gras: true, couleur: ATTENUE });
  });
  return enveloppe(W, 16 + nl * hL + 10, g);
}

// ------------------------------------------------- horloge
function horloge(cx, cy, R, h, m, { petites = true } = {}) {
  let g = cercle(cx, cy, R, { couleur: ENCRE, fond: '#fffdf5', epaisseur: 3 });
  for (let i = 0; i < 60; i++) {
    const a = (i * 6 * Math.PI) / 180, l = i % 5 === 0 ? 10 : 5;
    if (!petites && i % 5) continue;
    g += ligne(cx + (R - l) * Math.sin(a), cy - (R - l) * Math.cos(a), cx + R * Math.sin(a), cy - R * Math.cos(a), { couleur: ENCRE, epaisseur: i % 5 === 0 ? 2 : 1 });
  }
  for (let i = 1; i <= 12; i++) {
    const a = (i * 30 * Math.PI) / 180;
    g += texte(cx + (R - 26) * Math.sin(a), cy - (R - 26) * Math.cos(a) + 7, String(i), { taille: 19, gras: true });
  }
  const aH = (((h % 12) + m / 60) * 30 * Math.PI) / 180, aM = (m * 6 * Math.PI) / 180;
  g += ligne(cx, cy, cx + R * 0.5 * Math.sin(aH), cy - R * 0.5 * Math.cos(aH), { couleur: ROUGE, epaisseur: 7 });
  g += ligne(cx, cy, cx + R * 0.7 * Math.sin(aM), cy - R * 0.7 * Math.cos(aM), { couleur: BLEU, epaisseur: 4.5 });
  g += cercle(cx, cy, 6, { couleur: ENCRE, fond: ENCRE });
  return { svg: g, pH: [cx + R * 0.5 * Math.sin(aH), cy - R * 0.5 * Math.cos(aH)], pM: [cx + R * 0.8 * Math.sin(aM), cy - R * 0.8 * Math.cos(aM)] };
}

// ------------------------------------------------- graphiques
function batons({ titre, categories, valeurs, pas, max, couleurs, lecture = null, nomY = '', W = 560, H = 350, larg = 56 }) {
  const ml = 64, mr = 20, mt = 78, mb = 50;
  const X0 = ml, Y0 = H - mb, hp = H - mt - mb, wp = W - ml - mr;
  const Y = (v) => Y0 - (v / max) * hp;
  let g = texte(W / 2, 26, titre, { taille: 17, gras: true });
  for (let v = 0; v <= max + 1e-9; v += pas) {
    g += ligne(X0, Y(v), X0 + wp, Y(v), { couleur: GRILLE, epaisseur: 1 });
    g += texte(X0 - 10, Y(v) + 5, fr(v), { taille: 14, couleur: ATTENUE, ancre: 'end', gras: true });
  }
  g += ligne(X0, Y0, X0 + wp, Y0, { couleur: ENCRE, epaisseur: 2 }) + ligne(X0, Y0, X0, mt - 14, { couleur: ENCRE, epaisseur: 2 });
  if (nomY) g += texte(X0 - 8, mt - 24, nomY, { taille: 13, couleur: ATTENUE, ancre: 'start', gras: true });
  const n = categories.length, pasX = wp / n;
  categories.forEach((c, i) => {
    const xm = X0 + pasX * (i + 0.5);
    const col = couleurs[i % couleurs.length];
    g += rect(xm - larg / 2, Y(valeurs[i]), larg, Y0 - Y(valeurs[i]), { fond: col, opacite: 0.8, bord: col, ep: 1.6 });
    g += texte(xm, Y0 + 22, c, { taille: 15, gras: true });
    if (lecture === i) {
      g += ligne(X0, Y(valeurs[i]), xm - larg / 2, Y(valeurs[i]), { couleur: ROUGE, epaisseur: 2, pointilles: true });
      g += rect(X0 - 50, Y(valeurs[i]) - 12, 42, 22, { fond: '#ffffff', bord: ROUGE, ep: 2, rx: 5 });
      g += texte(X0 - 29, Y(valeurs[i]) + 5, fr(valeurs[i]), { taille: 15, couleur: ROUGE, gras: true });
    }
  });
  return enveloppe(W, H, g);
}

function pomme(x, y, r, moitie = false, id = 'p') {
  const corps = cercle(x, y, r, { couleur: '#a01f1f', fond: '#d93a3a', epaisseur: 1.5 }) + ligne(x, y - r, x + 2, y - r - 6, { couleur: '#6b3e1f', epaisseur: 2.2 }) + `<ellipse cx="${nb(x + 7)}" cy="${nb(y - r - 3)}" rx="6" ry="3" fill="${VERT}" transform="rotate(-25 ${nb(x + 7)} ${nb(y - r - 3)})"/>`;
  if (!moitie) return corps;
  return `<clipPath id="${id}"><rect x="${nb(x - r - 4)}" y="${nb(y - r - 12)}" width="${nb(r + 4)}" height="${nb(2 * r + 16)}"/></clipPath><g clip-path="url(#${id})">${corps}</g>`;
}
function livre(x, y, moitie = false) {
  const w = moitie ? 13 : 26;
  return rect(x - 13, y - 17, w, 34, { fond: '#3d7bd9', bord: '#1d4f9a', ep: 1.5, rx: 2 }) + ligne(x - 9, y - 17, x - 9, y + 17, { couleur: '#ffffff', epaisseur: 2 });
}
function pictogramme({ titre, lignes, icone, legende, W = 560 }) {
  const hL = 46, y0 = 50, xi = 150;
  let g = texte(W / 2, 28, titre, { taille: 17, gras: true });
  lignes.forEach((l, i) => {
    const y = y0 + i * hL + hL / 2;
    g += texte(xi - 16, y + 6, l.nom, { taille: 16, gras: true, ancre: 'end' });
    g += ligne(xi - 6, y + hL / 2, W - 30, y + hL / 2, { couleur: GRILLE, epaisseur: 1 });
    const n = Math.floor(l.n), demi = l.n - n > 0;
    for (let k = 0; k < n + (demi ? 1 : 0); k++) {
      const x = xi + 22 + k * 40;
      const half = demi && k === n;
      g += icone === 'pomme' ? pomme(x, y + 3, 13, half, `clip${i}`) : livre(x, y, half);
    }
    if (l.total) g += texte(W - 34, y + 6, l.total, { taille: 16, gras: true, couleur: ROUGE, ancre: 'end' });
  });
  const yl = y0 + lignes.length * hL + 34;
  g += rect(W / 2 - 150, yl - 26, 300, 40, { fond: '#fff8e6', bord: OR, ep: 1.8, rx: 8 });
  g += (icone === 'pomme' ? pomme(W / 2 - 110, yl - 4, 12) : livre(W / 2 - 110, yl - 6)) + texte(W / 2 - 86, yl + 1, legende, { taille: 16, gras: true, ancre: 'start' });
  return enveloppe(W, yl + 28, g);
}

// ------------------------------------------------- schéma en barres (problèmes)
function barres({ lignes, unite, x0 = 120, W = 600, hb = 44, titre = null }) {
  // lignes : [{ nom, segments: [{ v, texte, couleur, vide }], accolades: [{ de, a, texte, haut, couleur }] }]
  let y = titre ? 50 : 14;
  let g = titre ? texte(W / 2, 28, titre, { taille: 17, gras: true }) : '';
  lignes.forEach((l) => {
    const aH = (l.accolades || []).some((a) => a.haut);
    if (aH) y += 50;
    let x = x0;
    if (l.nom) g += texte(x0 - 12, y + hb / 2 + 6, l.nom, { taille: 15, gras: true, ancre: 'end' });
    l.segments.forEach((s) => {
      const w = s.v * unite;
      const c = s.couleur || BLEU;
      g += rect(x, y, w, hb, { fond: s.vide ? '#ffffff' : c, opacite: s.vide ? 1 : 0.75, bord: s.vide ? c : ENCRE, ep: 2, pointilles: !!s.vide });
      if (s.texte) g += texte(x + w / 2, y + hb / 2 + 6, s.texte, { taille: 15, gras: true, couleur: s.vide ? c : '#ffffff' });
      x += w;
    });
    (l.accolades || []).forEach((a) => {
      const xa = x0 + a.de * unite, xb = x0 + a.a * unite, c = a.couleur || ENCRE;
      if (a.haut) {
        g += accolade(xa, xb, y - 6, { haut: true, couleur: c });
        g += texte((xa + xb) / 2, y - 34, a.texte, { taille: 15, gras: true, couleur: c });
      } else {
        g += accolade(xa, xb, y + hb + 6, { haut: false, couleur: c });
        g += texte((xa + xb) / 2, y + hb + 46, a.texte, { taille: 15, gras: true, couleur: c });
      }
    });
    const aB = (l.accolades || []).some((a) => !a.haut);
    y += hb + (aB ? 56 : 16);
  });
  return enveloppe(W, y + 6, g);
}

// ------------------------------------------------- tableau de proportionnalité
function proportion({ titres, haut, bas, coef = null, fleches = [], cw = 70, W: Wmin = 520 }) {
  const n = haut.length, tw = 170;
  const W = Math.max(Wmin, tw + n * cw + (coef ? 90 : 20) + 20);
  const x0 = (W - tw - n * cw - (coef ? 80 : 0)) / 2;
  const y0 = fleches.some((f) => !f.bas) ? 56 : 20, h = 46;
  let g = '';
  [titres[0], titres[1]].forEach((t, r) => {
    g += rect(x0, y0 + r * h, tw, h, { fond: r ? pale(VERT) : pale(BLEU), bord: ENCRE, ep: 1.6 });
    g += texte(x0 + tw / 2, y0 + r * h + h / 2 + 6, t, { taille: 15, gras: true, couleur: r ? VERT : BLEU });
    (r ? bas : haut).forEach((v, i) => {
      g += rect(x0 + tw + i * cw, y0 + r * h, cw, h, { fond: '#ffffff', bord: ENCRE, ep: 1.6 });
      g += texte(x0 + tw + i * cw + cw / 2, y0 + r * h + h / 2 + 7, v, { taille: 19, gras: true, couleur: r ? VERT : BLEU });
    });
  });
  const xc = (i) => x0 + tw + i * cw + cw / 2;
  fleches.forEach((f) => {
    const x1 = xc(f.de), x2 = xc(f.a), xm = (x1 + x2) / 2;
    const yb = f.bas ? y0 + 2 * h + 4 : y0 - 4, sg = f.bas ? 1 : -1, hh = 18;
    const cy = yb + sg * 2 * hh;
    g += `<path d="M ${nb(x1)} ${nb(yb)} Q ${nb(xm)} ${nb(cy)} ${nb(x2)} ${nb(yb)}" fill="none" stroke="${f.couleur || ORANGE}" stroke-width="2.2"/>` + pointe(x2, yb, x2 - xm, yb - cy, f.couleur || ORANGE, 9);
    g += texte(xm, f.bas ? yb + hh + 22 : yb - hh - 8, f.texte, { taille: 16, gras: true, couleur: f.couleur || ORANGE });
  });
  if (coef) {
    const xr = x0 + tw + n * cw + 14;
    g += `<path d="M ${nb(xr)} ${nb(y0 + h / 2)} Q ${nb(xr + 40)} ${nb(y0 + h)} ${nb(xr)} ${nb(y0 + 1.5 * h)}" fill="none" stroke="${ROUGE}" stroke-width="2.4"/>` + pointe(xr, y0 + 1.5 * h, -40, h / 2, ROUGE, 10);
    g += texte(xr + 30, y0 + h + 6, coef, { taille: 18, gras: true, couleur: ROUGE, ancre: 'start' });
  }
  const H = y0 + 2 * h + (fleches.some((f) => f.bas) ? 62 : 16);
  return enveloppe(W, H, g);
}

// ------------------------------------------------- glissement des chiffres (× ou ÷ par 10)
function glissement({ rangs, couleurs, haut, bas, virguleApres, etiquetteHaut, etiquetteBas, fl, cw = 58, W: Wmin = 560, ajoutes = [] }) {
  // haut, bas : { indexRang: chiffre } ; virguleApres : index du rang des unités
  const n = rangs.length;
  const xl = 130;
  const W = Math.max(Wmin, xl + n * cw + 30);
  const x0 = xl + (W - xl - n * cw - 10) / 2;
  const yT = 16, hT = 30, h = 50;
  const yH = yT + hT, yB = yH + h + 56;
  let g = '';
  const X = (i) => x0 + i * cw;
  rangs.forEach((r, i) => {
    const c = couleurs[i];
    g += rect(X(i), yT, cw, hT, { fond: pale(c), bord: c, ep: 1.4 });
    g += texte(X(i) + cw / 2, yT + 21, r, { taille: 14, couleur: c, gras: true });
    g += rect(X(i), yH, cw, h, { fond: '#ffffff', bord: c, ep: 1.4 });
    g += rect(X(i), yB, cw, h, { fond: '#ffffff', bord: c, ep: 1.4 });
  });
  const virg = (y, obj) => {
    const aDec = Object.keys(obj).some((k) => +k > virguleApres);
    return aDec ? texte(X(virguleApres + 1), y + h / 2 + 18, ',', { taille: 34, gras: true, couleur: ROUGE }) : '';
  };
  Object.entries(haut).forEach(([i, t]) => { g += texte(X(+i) + cw / 2, yH + h / 2 + 10, t, { taille: 28, gras: true, couleur: couleurs[+i] }); });
  Object.entries(bas).forEach(([i, t]) => { g += texte(X(+i) + cw / 2, yB + h / 2 + 10, t, { taille: 28, gras: true, couleur: ajoutes.includes(+i) ? ATTENUE : couleurs[+i] }); });
  g += virg(yH, haut) + virg(yB, bas);
  Object.keys(haut).forEach((i) => {
    const xa = X(+i) + cw / 2, xb = X(+i + fl) + cw / 2;
    g += fleche(xa, yH + h + 4, xb, yB - 4, { couleur: ORANGE, epaisseur: 2.2, pointe: 10 });
  });
  g += texte(X(0) - 14, yH + h / 2 + 8, etiquetteHaut, { taille: 18, gras: true, ancre: 'end' });
  g += texte(X(0) - 14, yB + h / 2 + 8, etiquetteBas, { taille: 18, gras: true, ancre: 'end', couleur: VERT });
  return enveloppe(W, yB + h + 14, g);
}

// ------------------------------------------------- étiquette et flèche (annotation)
function note(x, y, tx, ty, t, couleur = ENCRE, ancre = 'middle', taille = 15) {
  return ligne(tx, ty + (ty < y ? 6 : -18), x, y, { couleur, epaisseur: 1.5 }) + texte(tx, ty, t, { taille, couleur, gras: true, ancre });
}


// =================================================== schémas particuliers
function signes() {
  const W = 520, H = 190;
  let g = '';
  const bloc = (x, a, s, b, phrase) => {
    let t = texte(x - 62, 92, a, { taille: 56, gras: true, couleur: a === '3' ? BLEU : ORANGE });
    t += texte(x, 90, s, { taille: 56, gras: true, couleur: ROUGE });
    t += texte(x + 62, 92, b, { taille: 56, gras: true, couleur: b === '3' ? BLEU : ORANGE });
    t += texte(x, 140, phrase, { taille: 15, gras: true });
    return t;
  };
  g += bloc(135, '3', '<', '8', '3 est plus petit que 8');
  g += bloc(385, '8', '>', '3', '8 est plus grand que 3');
  g += ligne(W / 2, 30, W / 2, 150, { couleur: GRILLE, epaisseur: 2 });
  g += texte(W / 2, 178, 'La pointe du signe montre toujours le plus petit nombre.', { taille: 15, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
}

function comparerRangees({ a = 9, b = 6, nomA = 'Marie', nomB = 'Paul' } = {}) {
  const P = 38, x0 = 110, W = x0 + a * P + 40;
  const yA = 86, yB = 150;
  let g = '';
  g += texte(x0 - 20, yA + 6, nomA, { taille: 16, gras: true, ancre: 'end', couleur: BLEU });
  g += texte(x0 - 20, yB + 6, nomB, { taille: 16, gras: true, ancre: 'end', couleur: VERT });
  for (let i = 0; i < a; i++) {
    const x = x0 + P / 2 + i * P;
    const extra = i >= b;
    g += rect(x - 13, yA - 13, 26, 26, { fond: extra ? ORANGE : BLEU, opacite: 0.85, bord: extra ? ORANGE : BLEU, ep: 1.5, rx: 4 });
    if (i < b) {
      g += ligne(x, yA + 16, x, yB - 16, { couleur: GRIS, epaisseur: 1.5, pointilles: true });
      g += rect(x - 13, yB - 13, 26, 26, { fond: VERT, opacite: 0.85, bord: VERT, ep: 1.5, rx: 4 });
    }
  }
  const xa = x0 + b * P + 4, xb = x0 + a * P - 4;
  g += accolade(xa, xb, yA - 20, { haut: true, couleur: ORANGE });
  g += texte((xa + xb) / 2, yA - 48, `${a - b} de plus`, { taille: 16, gras: true, couleur: ORANGE });
  g += texte(W / 2, yB + 50, `${a} − ${b} = ${a - b}`, { taille: 20, gras: true });
  return enveloppe(W, yB + 64, g);
}

function crayon(x, y, L, c) {
  const h = 22;
  return polygone([[x, y], [x + L - 34, y], [x + L, y + h / 2], [x + L - 34, y + h]], { couleur: ENCRE, fond: '#f2d7a8', epaisseur: 1.5 }) +
    rect(x, y, L - 34, h, { fond: c, bord: ENCRE, ep: 1.5 }) +
    polygone([[x + L - 11, y + h / 2 - 3.6], [x + L, y + h / 2], [x + L - 11, y + h / 2 + 3.6]], { couleur: ENCRE, fond: ENCRE, epaisseur: 1 });
}
function mesureCubes({ a = 8, b = 5 } = {}) {
  const u = 40, x0 = 60, W = x0 + a * u + 140;
  let g = ligne(x0, 14, x0, 228, { couleur: ROUGE, epaisseur: 2.4, pointilles: true });
  g += texte(x0 + 6, 248, 'même départ', { taille: 14, gras: true, couleur: ROUGE, ancre: 'start' });
  [[a, BLEU, 26], [b, VERT, 128]].forEach(([n, c, y]) => {
    g += crayon(x0, y, n * u, c);
    for (let i = 0; i < n; i++) g += rect(x0 + i * u, y + 30, u, u, { fond: pale(ORANGE), bord: ORANGE, ep: 2 });
    g += texte(x0 + n * u + 16, y + 56, `${n} cubes`, { taille: 17, gras: true, couleur: c, ancre: 'start' });
  });
  return enveloppe(W, 260, g);
}

function balance() {
  const W = 500, H = 300, px = 250, py = 80, L = 160, th = (12 * Math.PI) / 180;
  const Lx = px - L * Math.cos(th), Ly = py + L * Math.sin(th);
  const Rx = px + L * Math.cos(th), Ry = py - L * Math.sin(th);
  let g = polygone([[px - 60, 270], [px + 60, 270], [px + 40, 252], [px - 40, 252]], { couleur: ENCRE, fond: '#d9dee4', epaisseur: 2 });
  g += ligne(px, py, px, 252, { couleur: ENCRE, epaisseur: 5 });
  g += ligne(Lx, Ly, Rx, Ry, { couleur: ENCRE, epaisseur: 6 });
  g += cercle(px, py, 7, { couleur: ENCRE, fond: '#ffffff', epaisseur: 3 });
  const plateau = (x, y) => ligne(x, y, x - 46, y + 70, { couleur: ATTENUE, epaisseur: 1.5 }) + ligne(x, y, x + 46, y + 70, { couleur: ATTENUE, epaisseur: 1.5 }) +
    chemin(`M ${nb(x - 56)} ${nb(y + 70)} Q ${nb(x)} ${nb(y + 92)} ${nb(x + 56)} ${nb(y + 70)} Z`, { couleur: ENCRE, fond: '#c9d0d6', ep: 2 });
  g += plateau(Lx, Ly) + plateau(Rx, Ry);
  // caillou (lourd) et plume (légère)
  g += chemin(`M ${nb(Lx - 30)} ${nb(Ly + 70)} Q ${nb(Lx - 34)} ${nb(Ly + 36)} ${nb(Lx - 4)} ${nb(Ly + 38)} Q ${nb(Lx + 30)} ${nb(Ly + 34)} ${nb(Lx + 30)} ${nb(Ly + 70)} Z`, { couleur: '#55606b', fond: '#8b97a3', ep: 2 });
  g += chemin(`M ${nb(Rx - 34)} ${nb(Ry + 66)} Q ${nb(Rx)} ${nb(Ry + 40)} ${nb(Rx + 34)} ${nb(Ry + 52)} Q ${nb(Rx)} ${nb(Ry + 62)} ${nb(Rx - 34)} ${nb(Ry + 66)} Z`, { couleur: VIOLET, fond: pale(VIOLET), ep: 1.8 });
  g += ligne(Rx - 34, Ry + 66, Rx + 30, Ry + 53, { couleur: VIOLET, epaisseur: 1.4 });
  g += fleche(Lx - 80, Ly + 40, Lx - 80, Ly + 90, { couleur: ROUGE, epaisseur: 3, pointe: 12 });
  g += texte(Lx - 2, Ly + 124, 'plus lourd : il descend', { taille: 15, gras: true, couleur: ROUGE });
  g += fleche(Rx + 80, Ry + 90, Rx + 80, Ry + 40, { couleur: BLEU, epaisseur: 3, pointe: 12 });
  g += texte(Rx, Ry + 124, 'plus léger : il monte', { taille: 15, gras: true, couleur: BLEU });
  return enveloppe(W, H, g);
}

function horlogeSchema({ h, m, phrase }) {
  const W = 520, H = 300, cx = 160, cy = 150, R = 124;
  const { svg, pH, pM } = horloge(cx, cy, R, h, m);
  let g = svg;
  g += texte(326, 70, 'grande aiguille :', { taille: 16, gras: true, couleur: BLEU, ancre: 'start' }) + texte(326, 92, 'les minutes', { taille: 16, gras: true, couleur: BLEU, ancre: 'start' });
  g += texte(326, 200, 'petite aiguille :', { taille: 16, gras: true, couleur: ROUGE, ancre: 'start' }) + texte(326, 222, 'les heures', { taille: 16, gras: true, couleur: ROUGE, ancre: 'start' });
  g += texte(326, 142, phrase, { taille: 19, gras: true, ancre: 'start' });
  return enveloppe(W, H, g);
}

function semaine() {
  const W = 460, H = 330, cx = W / 2, cy = 166, R = 124;
  const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  let g = texte(cx, cy - 4, '7 jours', { taille: 20, gras: true, couleur: VIOLET }) + texte(cx, cy + 20, 'dans une semaine', { taille: 14, gras: true, couleur: ATTENUE });
  const ang = (i) => -90 + (i * 360) / 7;
  const P = (a, r) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
  for (let i = 0; i < 7; i++) {
    const a1 = ang(i) + 19, a2 = ang(i + 1) - 19;
    const [x1, y1] = P(a1, R), [x2, y2] = P(a2, R);
    const c = i === 6 ? ROUGE : GRIS;
    g += `<path d="M ${nb(x1)} ${nb(y1)} A ${R} ${R} 0 0 1 ${nb(x2)} ${nb(y2)}" fill="none" stroke="${c}" stroke-width="2.6"/>`;
    const t = ((a2 + 90) * Math.PI) / 180;
    g += pointe(x2, y2, Math.cos(t), Math.sin(t), c, 11);
  }
  jours.forEach((j, i) => {
    const [x, y] = P(ang(i), R);
    g += rect(x - 46, y - 16, 92, 32, { fond: i === 0 ? pale(VERT) : pale(BLEU), bord: i === 0 ? VERT : BLEU, ep: 1.8, rx: 16 });
    g += texte(x, y + 6, j, { taille: 16, gras: true, couleur: i === 0 ? VERT : BLEU });
  });
  return enveloppe(W, H, g);
}

function hierDemain() {
  const W = 560, H = 190;
  let g = fleche(30, 150, W - 30, 150, { couleur: ENCRE, epaisseur: 2.4, pointe: 12 });
  g += texte(36, 178, '← avant', { taille: 15, gras: true, couleur: ATTENUE, ancre: 'start' }) + texte(W - 36, 178, 'après →', { taille: 15, gras: true, couleur: ATTENUE, ancre: 'end' });
  [['hier', 'mardi', GRIS], ["aujourd'hui", 'mercredi', ROUGE], ['demain', 'jeudi', GRIS]].forEach(([a, b, c], i) => {
    const x = 105 + i * 175;
    const fort = i === 1;
    g += rect(x - 74, 26, 148, 86, { fond: fort ? pale(ROUGE) : '#f4f6f8', bord: fort ? ROUGE : GRIS, ep: fort ? 3 : 1.8, rx: 12 });
    g += texte(x, 62, a, { taille: 20, gras: true, couleur: fort ? ROUGE : ENCRE });
    g += texte(x, 92, b, { taille: 16, gras: true, couleur: ATTENUE });
    g += ligne(x, 112, x, 144, { couleur: fort ? ROUGE : GRIS, epaisseur: 2 }) + `<circle cx="${x}" cy="150" r="6" fill="${fort ? ROUGE : ENCRE}"/>`;
  });
  return enveloppe(W, H, g);
}

function piece(x, y, r, type, lib) {
  let g = '';
  if (type === 'cuivre') g += cercle(x, y, r, { couleur: '#8a4a24', fond: CUIVRE, epaisseur: 1.6 });
  else if (type === 'or') g += cercle(x, y, r, { couleur: '#9c7414', fond: OR, epaisseur: 1.6 });
  else if (type === 'un') g += cercle(x, y, r, { couleur: '#9c7414', fond: OR, epaisseur: 1.6 }) + cercle(x, y, r * 0.68, { couleur: '#7d8790', fond: ARGENT, epaisseur: 1.2 });
  else g += cercle(x, y, r, { couleur: '#7d8790', fond: ARGENT, epaisseur: 1.6 }) + cercle(x, y, r * 0.68, { couleur: '#9c7414', fond: OR, epaisseur: 1.2 });
  return g + texte(x, y + 5, lib, { taille: 13, gras: true, couleur: ENCRE });
}
function monnaie() {
  const W = 600, H = 400;
  let g = texte(20, 30, 'Les pièces', { taille: 16, gras: true, ancre: 'start' });
  const pieces = [['1 c', 16.25, 'cuivre'], ['2 c', 18.75, 'cuivre'], ['5 c', 21.25, 'cuivre'], ['10 c', 19.75, 'or'], ['20 c', 22.25, 'or'], ['50 c', 24.25, 'or'], ['1 €', 23.25, 'un'], ['2 €', 25.75, 'deux']];
  let x = 34;
  pieces.forEach(([lib, d, t]) => {
    const r = d * 0.95;
    x += r;
    g += piece(x, 78, r, t, lib);
    x += r + 18;
  });
  g += texte(20, 152, 'Les billets', { taille: 16, gras: true, ancre: 'start' });
  [['5 €', '#8f9a92'], ['10 €', '#c8504a'], ['20 €', '#4f78c4'], ['50 €', '#e08a2e']].forEach(([lib, c], i) => {
    const bx = 24 + i * 140;
    g += rect(bx, 168, 124, 64, { fond: c, bord: ENCRE, ep: 1.6, rx: 6, opacite: 0.85 });
    g += rect(bx + 8, 176, 108, 48, { fond: 'none', bord: '#ffffff', ep: 1.2, rx: 4 });
    g += texte(bx + 62, 210, lib, { taille: 24, gras: true, couleur: '#ffffff' });
  });
  g += texte(20, 278, 'Pour payer 3 € :', { taille: 16, gras: true, ancre: 'start' });
  g += piece(80, 334, 25.75 * 1.2, 'deux', '2 €') + texte(130, 341, '+', { taille: 28, gras: true }) + piece(178, 334, 23.25 * 1.2, 'un', '1 €');
  g += texte(222, 343, '= 3 €', { taille: 26, gras: true, couleur: VERT, ancre: 'start' });
  g += texte(W - 20, 386, '1 € = 100 centimes', { taille: 16, gras: true, couleur: VIOLET, ancre: 'end' });
  return enveloppe(W, H, g);
}

function regle({ a = 10, ech = 50, crayonL = null, zoom = false }) {
  const x0 = 40, W = x0 * 2 + a * ech;
  const yR = crayonL ? 70 : 74;
  let g = '';
  if (crayonL) g += crayon(x0, 30, crayonL * ech, ROUGE) + ligne(x0, 20, x0, yR, { couleur: ROUGE, epaisseur: 1.6, pointilles: true }) + ligne(x0 + crayonL * ech, 20, x0 + crayonL * ech, yR, { couleur: ROUGE, epaisseur: 1.6, pointilles: true });
  g += rect(x0 - 16, yR, a * ech + 32, 64, { fond: '#fff3c4', bord: '#b38f1d', ep: 2, rx: 4 });
  for (let i = 0; i <= a * 10; i++) {
    const x = x0 + (i * ech) / 10;
    const l = i % 10 === 0 ? 24 : i % 5 === 0 ? 16 : 9;
    g += ligne(x, yR, x, yR + l, { couleur: ENCRE, epaisseur: i % 10 === 0 ? 1.8 : 1 });
    if (i % 10 === 0) g += texte(x, yR + 44, String(i / 10), { taille: 16, gras: true });
  }
  g += texte(x0 + a * ech, yR + 58, 'cm', { taille: 13, gras: true, couleur: ATTENUE });
  let H = yR + 80;
  if (zoom) {
    const xa = x0, xb = x0 + ech;
    g += rect(xa, yR + 1, ech, 26, { fond: BLEU, opacite: 0.18, bord: 'none', ep: 0 });
    g += accolade(xa, xb, yR + 66, { haut: false, couleur: BLEU });
    g += texte((xa + xb) / 2 + 30, yR + 108, '1 cm = 10 mm', { taille: 18, gras: true, couleur: BLEU });
    H = yR + 122;
  }
  if (crayonL) g += texte(W / 2, H + 10, `Le crayon mesure ${crayonL} cm.`, { taille: 17, gras: true, couleur: ROUGE }), H += 24;
  return enveloppe(W, H, g);
}

function vocabRectangle() {
  const W = 520, H = 270;
  const A = [150, 70], B = [380, 70], C = [380, 200], D = [150, 200];
  let g = polygone([A, B, C, D], { couleur: BLEU, fond: pale(BLEU), epaisseur: 2.6 });
  g += ligne(A[0], A[1], B[0], B[1], { couleur: VERT, epaisseur: 6 });
  g += angleDroit(D[0], D[1], [1, 0], [0, -1], { taille: 18, couleur: ORANGE });
  g += `<circle cx="${C[0]}" cy="${C[1]}" r="7" fill="${ROUGE}"/>`;
  g += texte(265, 52, 'un côté', { taille: 17, gras: true, couleur: VERT });
  g += note(C[0] + 4, C[1] + 4, 450, 240, 'un sommet', ROUGE);
  g += note(D[0] + 10, D[1] - 10, 80, 250, 'un angle droit', ORANGE);
  return enveloppe(W, H, g);
}

function cercleVocab({ compas = false }) {
  const W = 520, H = compas ? 330 : 310, cx = compas ? 200 : 210, cy = compas ? 200 : 150, r = 105;
  let g = cercle(cx, cy, r, { couleur: BLEU, fond: pale(BLEU), epaisseur: 3 });
  if (compas) {
    const hx = cx + r / 2, hy = cy - 150;
    g += ligne(hx, hy, cx, cy, { couleur: ATTENUE, epaisseur: 5 }) + ligne(hx, hy, cx + r, cy, { couleur: ATTENUE, epaisseur: 5 });
    g += rect(hx - 7, hy - 26, 14, 24, { fond: ATTENUE, bord: ENCRE, ep: 1.5, rx: 3 }) + cercle(hx, hy, 7, { couleur: ENCRE, fond: '#ffffff', epaisseur: 2 });
    g += polygone([[cx + r - 5, cy - 14], [cx + r + 5, cy - 14], [cx + r, cy]], { couleur: ENCRE, fond: '#f2d7a8', epaisseur: 1.5 });
    g += `<circle cx="${cx}" cy="${cy}" r="6" fill="${ROUGE}"/>`;
    g += texte(cx - 30, cy + 34, 'le centre', { taille: 17, gras: true, couleur: ROUGE });
    g += texte(400, 140, 'le compas', { taille: 17, gras: true, couleur: ATTENUE });
    g += texte(400, 260, 'le cercle', { taille: 17, gras: true, couleur: BLEU });
    return enveloppe(W, H, g);
  }
  const a = (35 * Math.PI) / 180;
  g += ligne(cx - r, cy, cx + r, cy, { couleur: VERT, epaisseur: 4 });
  g += ligne(cx, cy, cx + r * Math.cos(a), cy - r * Math.sin(a), { couleur: ROUGE, epaisseur: 4 });
  g += `<circle cx="${cx}" cy="${cy}" r="6" fill="${ENCRE}"/>` + texte(cx, cy + 26, 'centre', { taille: 15, gras: true });
  g += texte(cx + 0.5 * r * Math.cos(a) - 10, cy - 0.5 * r * Math.sin(a) - 12, 'rayon', { taille: 16, gras: true, couleur: ROUGE });
  g += texte(cx - r * 0.55, cy - 12, 'diamètre', { taille: 16, gras: true, couleur: VERT });
  g += texte(cx, cy + r + 36, 'diamètre = 2 × rayon', { taille: 18, gras: true });
  g += texte(420, 140, 'un rayon va du', { taille: 14, gras: true, couleur: ROUGE }) + texte(420, 158, 'centre au cercle', { taille: 14, gras: true, couleur: ROUGE });
  g += texte(420, 196, 'un diamètre passe', { taille: 14, gras: true, couleur: VERT }) + texte(420, 214, 'par le centre', { taille: 14, gras: true, couleur: VERT });
  return enveloppe(W, H, g);
}

function equerre({ noms = ['aigu', 'droit', 'obtus'], infos = ['plus fermé', 'il suit l\'équerre', 'plus ouvert'] }) {
  const W = 640, H = 266;
  let g = '';
  [60, 90, 125].forEach((deg, i) => {
    const x0 = 15 + i * 210;
    const vx = x0 + (deg > 90 ? 78 : 22), vy = 180;
    const c = [BLEU, VERT, ORANGE][i];
    g += polygone([[vx, vy], [vx + 96, vy], [vx, vy - 78]], { couleur: '#9c7414', fond: '#f6dc85', opacite: 0.55, epaisseur: 1.6 });
    g += angleDroit(vx, vy, [1, 0], [0, -1], { taille: 12, couleur: '#9c7414' });
    const a = (deg * Math.PI) / 180, L = 115;
    g += ligne(vx, vy, vx + 120, vy, { couleur: c, epaisseur: 3.4 });
    g += ligne(vx, vy, vx + L * Math.cos(a), vy - L * Math.sin(a), { couleur: c, epaisseur: 3.4 });
    if (deg !== 90) g += arcAngle(vx, vy, 34, 0, deg, { couleur: c, ep: 2.2 });
    g += `<circle cx="${vx}" cy="${vy}" r="4.5" fill="${ENCRE}"/>`;
    const xt = x0 + 95;
    g += texte(xt, 220, noms[i], { taille: 22, gras: true, couleur: c });
    g += texte(xt, 249, infos[i], { taille: 18, gras: true, couleur: ATTENUE });
  });
  return enveloppe(W, H, g);
}

function typesAngles({ mesures = false, niveau = null }) {
  // niveau 'cm1' : sans degrés ; 'cm2' : degrés à partir de l'angle droit ; sans angle plat (6e) dans les deux cas.
  const liste = niveau === 'cm1' ? [
    { nom: 'aigu', deg: 50, info: 'plus petit', c: BLEU },
    { nom: 'droit', deg: 90, info: 'coin de l’équerre', c: VERT },
    { nom: 'obtus', deg: 130, info: 'plus grand', c: ORANGE },
  ] : niveau === 'cm2' ? [
    { nom: 'aigu', deg: 50, info: 'moins de 90°', c: BLEU },
    { nom: 'droit', deg: 90, info: '90°', c: VERT },
    { nom: 'obtus', deg: 130, info: 'plus de 90°', c: ORANGE },
  ] : [
    { nom: 'aigu', deg: 50, info: 'moins de 90°', c: BLEU },
    { nom: 'droit', deg: 90, info: '90°', c: VERT },
    { nom: 'obtus', deg: 130, info: 'entre 90° et 180°', c: ORANGE },
    { nom: 'plat', deg: 180, info: '180°', c: VIOLET },
  ];
  const W = 160 * liste.length, H = 220;
  let g = '';
  liste.forEach((t, i) => {
    const x0 = i * 160;
    const vx = x0 + (t.deg === 180 ? 80 : t.deg > 90 ? 72 : 40), vy = 140;
    const L = t.deg === 180 ? 70 : t.deg > 90 ? 82 : 100;
    const a = (t.deg * Math.PI) / 180;
    g += ligne(vx, vy, vx + L, vy, { couleur: t.c, epaisseur: 3.2 });
    g += ligne(vx, vy, vx + L * Math.cos(a), vy - L * Math.sin(a), { couleur: t.c, epaisseur: 3.2 });
    if (t.deg === 90) g += angleDroit(vx, vy, [1, 0], [0, -1], { taille: 16, couleur: t.c });
    else g += arcAngle(vx, vy, t.deg === 180 ? 30 : 30, 0, t.deg, { couleur: t.c, ep: 2.2, fond: t.c });
    g += `<circle cx="${vx}" cy="${vy}" r="4.5" fill="${ENCRE}"/>`;
    g += texte(x0 + 80, 178, 'angle ' + t.nom, { taille: 16, gras: true, couleur: t.c });
    g += texte(x0 + 80, 200, t.info, { taille: 14, gras: true, couleur: ATTENUE });
  });
  return enveloppe(W, H, g);
}

function ouverture() {
  const W = 560, H = 250, deg = 40, a = (deg * Math.PI) / 180;
  let g = '';
  [[60, 170, 80], [260, 170, 220]].forEach(([vx, vy, L], i) => {
    g += ligne(vx, vy, vx + L, vy, { couleur: BLEU, epaisseur: 3.2 }) + ligne(vx, vy, vx + L * Math.cos(a), vy - L * Math.sin(a), { couleur: BLEU, epaisseur: 3.2 });
    g += arcAngle(vx, vy, 36, 0, deg, { couleur: ROUGE, ep: 2.4, fond: ROUGE });
    g += `<circle cx="${vx}" cy="${vy}" r="4.5" fill="${ENCRE}"/>`;
    g += texte(vx + L / 2, vy + 28, i ? 'côtés longs' : 'côtés courts', { taille: 15, gras: true, couleur: ATTENUE });
  });
  g += texte(W / 2, 236, 'Même ouverture : ces deux angles sont égaux.', { taille: 16, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
}

function rapporteur({ deg = 50 }) {
  const W = 560, H = 330, cx = W / 2, cy = 250, R = 200;
  const P = (a, r) => [cx + r * Math.cos((a * Math.PI) / 180), cy - r * Math.sin((a * Math.PI) / 180)];
  let g = `<path d="M ${cx - R} ${cy} A ${R} ${R} 0 0 1 ${cx + R} ${cy} Z" fill="#eaf2fd" fill-opacity="0.8" stroke="${ATTENUE}" stroke-width="2"/>`;
  for (let a = 0; a <= 180; a++) {
    const l = a % 10 === 0 ? 16 : a % 5 === 0 ? 11 : 6;
    const [x1, y1] = P(a, R), [x2, y2] = P(a, R - l);
    g += ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: a % 10 === 0 ? 1.4 : 0.8 });
  }
  for (let a = 0; a <= 180; a += 10) {
    const da = a === 0 ? 4 : a === 180 ? -4 : 0;
    const [xe, ye] = P(a + da, R - 30), [xi, yi] = P(a + da, R - 54);
    if (a !== 0) g += texte(xe, ye + 5, String(180 - a), { taille: 12, couleur: ATTENUE, gras: true });
    if (a !== 180) g += texte(xi, yi + 5, String(a), { taille: 12, couleur: BLEU, gras: true });
  }
  g += ligne(cx - R, cy, cx + R, cy, { couleur: ATTENUE, epaisseur: 2 });
  g += cercle(cx, cy, 5, { couleur: ENCRE, fond: '#ffffff', epaisseur: 2 });
  const [xb, yb] = P(deg, R + 22);
  g += ligne(cx, cy, cx + R + 30, cy, { couleur: ROUGE, epaisseur: 3.4 });
  g += ligne(cx, cy, xb, yb, { couleur: ROUGE, epaisseur: 3.4 });
  g += arcAngle(cx, cy, 44, 0, deg, { couleur: ROUGE, ep: 2.4, fond: ROUGE });
  const [xl, yl] = P(deg, R - 54);
  g += cercle(xl, yl, 14, { couleur: ROUGE, epaisseur: 2.4 });
  g += texte(cx + 70, cy - 22, `${deg}°`, { taille: 18, gras: true, couleur: ROUGE });
  g += texte(cx, cy + 34, `On part du 0 placé sur un côté de l'angle : on lit ${deg}°.`, { taille: 15, gras: true, couleur: ROUGE });
  g += texte(cx, cy + 58, `L'angle est aigu : ce n'est donc pas ${180 - deg}°.`, { taille: 15, gras: true, couleur: ATTENUE });
  return enveloppe(W, H + 6, g);
}

function sommeAngles() {
  const W = 460, H = 260, vx = 120, vy = 210, L = 170;
  let g = '';
  [0, 45, 90].forEach((d) => { const a = (d * Math.PI) / 180; g += ligne(vx, vy, vx + L * Math.cos(a), vy - L * Math.sin(a), { couleur: ENCRE, epaisseur: 3 }); });
  g += arcAngle(vx, vy, 64, 0, 45, { couleur: BLEU, ep: 2.4, fond: BLEU }) + arcAngle(vx, vy, 64, 45, 90, { couleur: VERT, ep: 2.4, fond: VERT });
  const t = (d, r) => [vx + r * Math.cos((d * Math.PI) / 180), vy - r * Math.sin((d * Math.PI) / 180)];
  g += texte(...t(22.5, 92), '45°', { taille: 16, gras: true, couleur: BLEU }) + texte(...t(67.5, 92), '45°', { taille: 16, gras: true, couleur: VERT });
  g += `<circle cx="${vx}" cy="${vy}" r="4.5" fill="${ENCRE}"/>`;
  g += texte(345, 110, '45° + 45° = 90°', { taille: 19, gras: true }) + texte(345, 136, 'un angle droit', { taille: 16, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
}

function symetriePoint() {
  const W = 540, H = 260, ax = 270;
  let g = ligne(ax, 24, ax, 236, { couleur: ROUGE, epaisseur: 3, pointilles: true }) + texte(ax + 10, 252, 'axe', { taille: 15, gras: true, couleur: ROUGE, ancre: 'start' });
  const y = 100, d = 130;
  g += ligne(ax - d, y, ax + d, y, { couleur: BLEU, epaisseur: 2, pointilles: true });
  g += angleDroit(ax, y, [1, 0], [0, 1], { taille: 14, couleur: ENCRE });
  g += codage(ax - d, y, ax, y, 2, BLEU) + codage(ax, y, ax + d, y, 2, BLEU);
  g += texte(ax - d / 2, y - 20, '3 cm', { taille: 16, gras: true, couleur: BLEU }) + texte(ax + d / 2, y - 20, '3 cm', { taille: 16, gras: true, couleur: BLEU });
  g += `<circle cx="${ax - d}" cy="${y}" r="6" fill="${ENCRE}"/>` + texte(ax - d - 18, y + 6, 'A', { taille: 18, gras: true });
  g += `<circle cx="${ax + d}" cy="${y}" r="6" fill="${VERT}"/>` + texte(ax + d + 20, y + 6, 'A′', { taille: 18, gras: true, couleur: VERT });
  g += `<circle cx="${ax}" cy="190" r="6" fill="${VIOLET}"/>` + texte(ax + 14, 196, 'B est sur l\'axe : il ne bouge pas', { taille: 15, gras: true, couleur: VIOLET, ancre: 'start' });
  return enveloppe(W, H, g);
}

function cubeVocab() {
  const W = 540, H = 330, s = 150, x = 120, y = 110;
  const ox = DX * s, oy = DY * s;
  let g = cube(x, y, s, BLEU);
  g += polygone([[x, y], [x + s, y], [x + s, y + s], [x, y + s]], { couleur: VERT, fond: VERT, opacite: 0.35, epaisseur: 0.01 });
  g += ligne(x + s, y, x + s + ox, y + oy, { couleur: ROUGE, epaisseur: 6 });
  g += `<circle cx="${nb(x + s + ox)}" cy="${nb(y + s + oy)}" r="8" fill="${ORANGE}"/>`;
  g += note(x + s / 2, y + s / 2 + 10, 60, 300, 'une face', VERT);
  g += note(x + s + ox / 2 + 3, y + oy / 2 - 3, 400, 40, 'une arête', ROUGE);
  g += note(x + s + ox + 7, y + s + oy + 4, 440, 200, 'un sommet', ORANGE);
  g += texte(360, 300, '6 faces · 12 arêtes · 8 sommets', { taille: 15, gras: true });
  return enveloppe(W, H, g);
}

function patronCube({ s = 62 } = {}) {
  const cases = [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]];
  const cols = [BLEU, VERT, ORANGE, VIOLET, ROUGE, OR];
  const W = 3 * s + 310, x0 = 50, y0 = 16;
  let g = '';
  cases.forEach(([i, j], k) => {
    g += rect(x0 + i * s, y0 + j * s, s, s, { fond: cols[k], opacite: 0.45, bord: ENCRE, ep: 2.2 });
    g += texte(x0 + i * s + s / 2, y0 + j * s + s / 2 + 8, String(k + 1), { taille: 22, gras: true });
  });
  // cube plié
  g += cube(x0 + 3 * s + 70, y0 + 1.6 * s, 90, BLEU);
  g += fleche(x0 + 3 * s + 14, y0 + 2.2 * s, x0 + 3 * s + 62, y0 + 2.2 * s, { couleur: ATTENUE, epaisseur: 2.4, pointe: 11 });
  g += texte(x0 + 3 * s + 38, y0 + 2.2 * s - 12, 'on plie', { taille: 14, gras: true, couleur: ATTENUE });
  g += texte(x0 + 3 * s + 120, y0 + 4 * s - 4, '6 carrés → 6 faces', { taille: 16, gras: true });
  return enveloppe(W, y0 + 4 * s + 16, g);
}

function patrons() {
  const W = 600, H = 520;
  let g = '';
  // cube
  const s = 36, xc = 70, yc = 30;
  [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]].forEach(([i, j]) => { g += rect(xc + i * s, yc + j * s, s, s, { fond: pale(BLEU), bord: BLEU, ep: 2 }); });
  g += texte(xc + 1.5 * s, yc + 4 * s + 26, 'cube : 6 carrés', { taille: 15, gras: true, couleur: BLEU });
  // pavé droit
  const L = 62, l = 36, h = 24, xp = 390, yp = 24;
  const bandesP = [h, l, h, l];
  let yy = yp;
  bandesP.forEach((hh) => { g += rect(xp, yy, L, hh, { fond: pale(VERT), bord: VERT, ep: 2 }); yy += hh; });
  const yFront = yp + h + l;
  g += rect(xp - l, yFront, l, h, { fond: pale(VERT), bord: VERT, ep: 2 }) + rect(xp + L, yFront, l, h, { fond: pale(VERT), bord: VERT, ep: 2 });
  g += texte(xp + L / 2, yy + 26, 'pavé droit : 6 rectangles', { taille: 15, gras: true, couleur: VERT });
  // pyramide
  const c = 56, ha = 50, xq = 150 - c / 2, yq = 360 - c / 2;
  g += rect(xq, yq, c, c, { fond: pale(ORANGE), bord: ORANGE, ep: 2 });
  g += polygone([[xq, yq], [xq + c, yq], [xq + c / 2, yq - ha]], { couleur: ORANGE, fond: pale(ORANGE), epaisseur: 2 });
  g += polygone([[xq, yq + c], [xq + c, yq + c], [xq + c / 2, yq + c + ha]], { couleur: ORANGE, fond: pale(ORANGE), epaisseur: 2 });
  g += polygone([[xq, yq], [xq, yq + c], [xq - ha, yq + c / 2]], { couleur: ORANGE, fond: pale(ORANGE), epaisseur: 2 });
  g += polygone([[xq + c, yq], [xq + c, yq + c], [xq + c + ha, yq + c / 2]], { couleur: ORANGE, fond: pale(ORANGE), epaisseur: 2 });
  g += texte(150, 470, 'pyramide : 1 carré', { taille: 15, gras: true, couleur: ORANGE }) + texte(150, 490, 'et 4 triangles', { taille: 15, gras: true, couleur: ORANGE });
  // cylindre : rectangle de longueur 2 × π × r
  const r = 20, Lc = 2 * Math.PI * r, hc = 64, xr = 420 - Lc / 2, yr = 330;
  g += rect(xr, yr, Lc, hc, { fond: pale(VIOLET), bord: VIOLET, ep: 2 });
  g += cercle(420, yr - r, r, { couleur: VIOLET, fond: pale(VIOLET), epaisseur: 2 }) + cercle(420, yr + hc + r, r, { couleur: VIOLET, fond: pale(VIOLET), epaisseur: 2 });
  g += texte(420, 470, 'cylindre : 2 disques', { taille: 15, gras: true, couleur: VIOLET }) + texte(420, 490, 'et 1 rectangle', { taille: 15, gras: true, couleur: VIOLET });
  return enveloppe(W, H, g);
}

function perimetreDeroule() {
  const W = 520, H = 290, e = 32;
  const A = [100, 140], B = [100 + 4 * e, 140], C = [100, 140 - 3 * e];
  let g = polygone([A, B, C], { couleur: ENCRE, fond: '#f4f6f8', epaisseur: 0.01 });
  g += ligne(...A, ...B, { couleur: BLEU, epaisseur: 5 }) + ligne(...A, ...C, { couleur: VERT, epaisseur: 5 }) + ligne(...B, ...C, { couleur: ORANGE, epaisseur: 5 });
  g += texte((A[0] + B[0]) / 2, A[1] + 26, '4 cm', { taille: 16, gras: true, couleur: BLEU });
  g += texte(A[0] - 14, (A[1] + C[1]) / 2 + 6, '3 cm', { taille: 16, gras: true, couleur: VERT, ancre: 'end' });
  g += texte((B[0] + C[0]) / 2 + 26, (B[1] + C[1]) / 2 - 8, '5 cm', { taille: 16, gras: true, couleur: ORANGE, ancre: 'start' });
  g += texte(380, 70, 'On fait le tour', { taille: 17, gras: true }) + texte(380, 94, 'et on met les côtés', { taille: 15, gras: true, couleur: ATTENUE }) + texte(380, 114, 'bout à bout :', { taille: 15, gras: true, couleur: ATTENUE });
  const y = 200, x0 = 68;
  [[3, VERT], [4, BLEU], [5, ORANGE]].reduce((x, [n, c]) => { g += ligne(x, y, x + n * e, y, { couleur: c, epaisseur: 7 }); g += texte(x + (n * e) / 2, y - 12, `${n} cm`, { taille: 15, gras: true, couleur: c }); return x + n * e; }, x0);
  g += ligne(x0, y - 10, x0, y + 10, { couleur: ENCRE, epaisseur: 2 }) + ligne(x0 + 12 * e, y - 10, x0 + 12 * e, y + 10, { couleur: ENCRE, epaisseur: 2 });
  g += accolade(x0, x0 + 12 * e, y + 10, { haut: false });
  g += texte(x0 + 6 * e, y + 54, 'Périmètre : 3 + 4 + 5 = 12 cm', { taille: 18, gras: true });
  return enveloppe(W, H, g);
}

function aireGrille({ figures, u = 26, W = 560 }) {
  const tot = figures.reduce((a, f) => a + f.w * u, 0) + (figures.length - 1) * 70;
  let x = (W - tot) / 2;
  const hmax = Math.max(...figures.map((f) => f.h)) * u;
  const y0 = 24;
  let g = '';
  figures.forEach((f) => {
    const c = f.couleur || BLEU;
    const y = y0 + hmax - f.h * u;
    for (let i = 0; i < f.w; i++) for (let j = 0; j < f.h; j++) g += rect(x + i * u, y + j * u, u, u, { fond: pale(c), bord: c, ep: 0.8 });
    g += rect(x, y, f.w * u, f.h * u, { fond: 'none', bord: ROUGE, ep: 3.6 });
    g += texte(x + (f.w * u) / 2, y0 + hmax + 30, `Périmètre : ${2 * (f.w + f.h)} cm`, { taille: 15, gras: true, couleur: ROUGE });
    g += texte(x + (f.w * u) / 2, y0 + hmax + 52, `Aire : ${f.w * f.h} cm²`, { taille: 15, gras: true, couleur: c });
    if (f.nom) g += texte(x + (f.w * u) / 2, y - 8, f.nom, { taille: 14, gras: true, couleur: ATTENUE });
    x += f.w * u + 70;
  });
  return enveloppe(W, y0 + hmax + 66, g);
}

function paveCubes({ L = 4, l = 2, h = 3, u = 40 } = {}) {
  const W = 480, H = 270;
  const x = 90, y = 62, ox = DX * u, oy = DY * u;
  let g = '';
  const P = (i, j, k) => [x + i * u + k * ox, y + (h - j) * u + k * oy]; // i : longueur, j : hauteur, k : profondeur
  g += polygone([P(0, h, 0), P(L, h, 0), P(L, h, l), P(0, h, l)], { couleur: BLEU, fond: pale(BLEU), epaisseur: 0.01 });
  g += polygone([P(L, 0, 0), P(L, h, 0), P(L, h, l), P(L, 0, l)], { couleur: BLEU, fond: BLEU, opacite: 0.32, epaisseur: 0.01 });
  g += polygone([P(0, 0, 0), P(L, 0, 0), P(L, h, 0), P(0, h, 0)], { couleur: BLEU, fond: BLEU, opacite: 0.14, epaisseur: 0.01 });
  const L2 = (a, b, ep = 1.2) => ligne(...a, ...b, { couleur: BLEU, epaisseur: ep });
  for (let i = 0; i <= L; i++) g += L2(P(i, 0, 0), P(i, h, 0)) + L2(P(i, h, 0), P(i, h, l));
  for (let j = 0; j <= h; j++) g += L2(P(0, j, 0), P(L, j, 0)) + L2(P(L, j, 0), P(L, j, l));
  for (let k = 0; k <= l; k++) g += L2(P(0, h, k), P(L, h, k)) + L2(P(L, 0, k), P(L, h, k));
  g += polygone([P(0, 0, 0), P(L, 0, 0), P(L, 0, l), P(L, h, l), P(0, h, l), P(0, h, 0)], { couleur: ENCRE, fond: 'none', epaisseur: 2.4 });
  g += texte(x + (L * u) / 2, y + h * u + 28, `${L} cm`, { taille: 16, gras: true, couleur: ROUGE });
  g += texte(x - 12, y + (h * u) / 2 + 6, `${h} cm`, { taille: 16, gras: true, couleur: VERT, ancre: 'end' });
  const [px, py] = P(L, 0, l / 2);
  g += texte(px + 16, py + 6, `${l} cm`, { taille: 16, gras: true, couleur: ORANGE, ancre: 'start' });
  g += texte(W / 2, H - 16, `${L} × ${l} × ${h} = ${L * l * h} cubes de 1 cm³`, { taille: 18, gras: true });
  return enveloppe(W, H, g);
}

function decompoArbre() {
  const W = 520, H = 250;
  let g = texte(W / 2, 34, '23 + 14', { taille: 24, gras: true });
  const n = (x, y, t, c) => texte(x, y, t, { taille: 22, gras: true, couleur: c });
  g += ligne(232, 44, 150, 84, { couleur: GRIS, epaisseur: 2 }) + ligne(232, 44, 214, 84, { couleur: GRIS, epaisseur: 2 });
  g += ligne(290, 44, 310, 84, { couleur: GRIS, epaisseur: 2 }) + ligne(290, 44, 372, 84, { couleur: GRIS, epaisseur: 2 });
  g += n(150, 108, '20', VERT) + n(214, 108, '3', BLEU) + n(310, 108, '10', VERT) + n(372, 108, '4', BLEU);
  g += rect(40, 136, 210, 44, { fond: pale(VERT), bord: VERT, ep: 2, rx: 10 }) + texte(145, 165, '20 + 10 = 30', { taille: 19, gras: true, couleur: VERT });
  g += rect(270, 136, 210, 44, { fond: pale(BLEU), bord: BLEU, ep: 2, rx: 10 }) + texte(375, 165, '3 + 4 = 7', { taille: 19, gras: true, couleur: BLEU });
  g += texte(145, 200, 'les dizaines', { taille: 14, gras: true, couleur: VERT }) + texte(375, 200, 'les unités', { taille: 14, gras: true, couleur: BLEU });
  g += texte(W / 2, 236, '30 + 7 = 37', { taille: 22, gras: true });
  return enveloppe(W, H, g);
}

function aireDistributivite() {
  const W = 600, H = 250, u = 20, x0 = 60, y0 = 50;
  let g = '';
  for (let i = 0; i < 24; i++) for (let j = 0; j < 5; j++) g += rect(x0 + i * u, y0 + j * u, u, u, { fond: i < 20 ? pale(VERT) : pale(ORANGE), bord: i < 20 ? '#9fd3b6' : '#f0c39a', ep: 0.8 });
  g += rect(x0, y0, 20 * u, 5 * u, { fond: 'none', bord: VERT, ep: 3 }) + rect(x0 + 20 * u, y0, 4 * u, 5 * u, { fond: 'none', bord: ORANGE, ep: 3 });
  g += texte(x0 + 10 * u, y0 - 12, '20', { taille: 17, gras: true, couleur: VERT }) + texte(x0 + 22 * u, y0 - 12, '4', { taille: 17, gras: true, couleur: ORANGE });
  g += texte(x0 - 12, y0 + 2.5 * u + 6, '5', { taille: 17, gras: true, ancre: 'end' });
  g += rect(x0 + 10 * u - 66, y0 + 2.5 * u - 16, 132, 30, { fond: '#ffffff', bord: VERT, ep: 1.5, rx: 6 }) + texte(x0 + 10 * u, y0 + 2.5 * u + 5, '20 × 5 = 100', { taille: 16, gras: true, couleur: VERT });
  g += texte(x0 + 22 * u, y0 + 5 * u + 24, '4 × 5 = 20', { taille: 16, gras: true, couleur: ORANGE });
  g += texte(W / 2, H - 30, '24 × 5 = 100 + 20 = 120', { taille: 20, gras: true });
  return enveloppe(W, H, g);
}

function etapes({ liste }) {
  const W = 460, bh = 48, gap = 26, y0 = 14;
  const cols = [BLEU, VERT, ORANGE, VIOLET];
  let g = '';
  liste.forEach((t, i) => {
    const y = y0 + i * (bh + gap);
    g += rect(70, y, 360, bh, { fond: pale(cols[i % 4]), bord: cols[i % 4], ep: 2, rx: 10 });
    g += cercle(46, y + bh / 2, 18, { couleur: cols[i % 4], fond: cols[i % 4] }) + texte(46, y + bh / 2 + 7, String(i + 1), { taille: 19, gras: true, couleur: '#ffffff' });
    g += texte(250, y + bh / 2 + 6, t, { taille: 16, gras: true });
    if (i < liste.length - 1) g += fleche(250, y + bh + 2, 250, y + bh + gap - 2, { couleur: ATTENUE, epaisseur: 2.2, pointe: 9 });
  });
  return enveloppe(W, y0 + liste.length * (bh + gap) - gap + 14, g);
}

function pourcents() {
  const W = 560, H = 250, c = 12;
  let g = '';
  const grilles = [
    { t: '50 %', s: 'la moitié', f: (i, j) => i < 5, col: BLEU },
    { t: '25 %', s: 'le quart', f: (i, j) => i < 5 && j < 5, col: VERT },
    { t: '10 %', s: 'un dixième', f: (i) => i < 1, col: ORANGE },
  ];
  grilles.forEach((gr, k) => {
    const x0 = 40 + k * 180, y0 = 20;
    for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) g += rect(x0 + i * c, y0 + j * c, c, c, { fond: gr.f(i, j) ? gr.col : '#ffffff', opacite: gr.f(i, j) ? 0.75 : 1, bord: GRIS, ep: 0.8 });
    g += rect(x0, y0, 10 * c, 10 * c, { fond: 'none', bord: ENCRE, ep: 1.8 });
    g += texte(x0 + 5 * c, y0 + 10 * c + 32, gr.t, { taille: 22, gras: true, couleur: gr.col });
    g += texte(x0 + 5 * c, y0 + 10 * c + 56, gr.s, { taille: 16, gras: true, couleur: ATTENUE });
  });
  g += texte(W / 2, H - 16, 'Chaque grille a 100 cases.', { taille: 15, gras: true });
  return enveloppe(W, H, g);
}

function courbeTemperature() {
  const W = 560, H = 320, ml = 60, mr = 24, mt = 50, mb = 50;
  const h = [8, 10, 12, 14, 16, 18], t = [12, 15, 19, 21, 20, 17];
  const X = (v) => ml + ((v - 8) / 10) * (W - ml - mr - 10);
  const Y = (v) => H - mb - ((v - 10) / 12) * (H - mt - mb);
  let g = texte(W / 2, 26, 'Température au fil de la journée', { taille: 17, gras: true });
  for (let v = 10; v <= 22; v += 2) { g += ligne(ml, Y(v), W - mr, Y(v), { couleur: GRILLE, epaisseur: 1 }) + texte(ml - 10, Y(v) + 5, `${v} °C`, { taille: 13, couleur: ATTENUE, ancre: 'end', gras: true }); }
  h.forEach((v) => { g += ligne(X(v), H - mb, X(v), H - mb + 6, { couleur: ENCRE, epaisseur: 1.5 }) + texte(X(v), H - mb + 24, `${v} h`, { taille: 14, gras: true }); });
  g += ligne(ml, H - mb, W - mr, H - mb, { couleur: ENCRE, epaisseur: 2 }) + ligne(ml, H - mb, ml, mt - 10, { couleur: ENCRE, epaisseur: 2 });
  g += `<polyline points="${h.map((v, i) => `${nb(X(v))},${nb(Y(t[i]))}`).join(' ')}" fill="none" stroke="${ROUGE}" stroke-width="3"/>`;
  h.forEach((v, i) => { g += cercle(X(v), Y(t[i]), 5, { couleur: ROUGE, fond: ROUGE }); });
  g += texte((X(8) + X(14)) / 2 - 30, Y(18) - 8, 'elle monte', { taille: 15, gras: true, couleur: VERT });
  g += texte(X(16.3), Y(16.2), 'elle descend', { taille: 15, gras: true, couleur: BLEU });
  return enveloppe(W, H, g);
}

function vocabFraction() {
  const W = 600, H = 230;
  let g = disque(120, 115, 85, 4, 3, ORANGE);
  g += texte(120, 222, 'une tarte en 4 parts égales', { taille: 14, gras: true, couleur: ATTENUE });
  const fx = 290, fy = 118;
  g += texte(fx, fy - 10, '3', { taille: 46, gras: true, couleur: ORANGE }) + ligne(fx - 26, fy, fx + 26, fy, { couleur: ENCRE, epaisseur: 3 }) + texte(fx, fy + 44, '4', { taille: 46, gras: true, couleur: BLEU });
  g += ligne(fx + 30, fy - 26, 352, fy - 52, { couleur: ORANGE, epaisseur: 1.6 }) + texte(358, fy - 62, 'numérateur :', { taille: 16, gras: true, couleur: ORANGE, ancre: 'start' }) + texte(358, fy - 40, 'je prends 3 parts', { taille: 15, gras: true, couleur: ORANGE, ancre: 'start' });
  g += ligne(fx + 30, fy + 30, 352, fy + 56, { couleur: BLEU, epaisseur: 1.6 }) + texte(358, fy + 56, 'dénominateur :', { taille: 16, gras: true, couleur: BLEU, ancre: 'start' }) + texte(358, fy + 78, '4 parts égales', { taille: 15, gras: true, couleur: BLEU, ancre: 'start' });
  return enveloppe(W, H, g);
}

// =================================================== export
export const SCHEMAS = {
  jetons, 'cadres10': cadres10, droite, base10, numeration, pose, potence, bandes, formes, quadrillage, solides, batons, pictogramme, barres, proportion, glissement,
  signes, 'comparer-rangees': comparerRangees, 'mesure-cubes': mesureCubes, balance, horloge: horlogeSchema, semaine, 'hier-demain': hierDemain, monnaie, regle,
  'vocab-rectangle': vocabRectangle, 'cercle-vocab': cercleVocab, equerre, 'types-angles': typesAngles, ouverture, rapporteur, 'somme-angles': sommeAngles,
  'symetrie-point': symetriePoint, 'cube-vocab': cubeVocab, 'patron-cube': patronCube, patrons, 'perimetre-deroule': perimetreDeroule, 'aire-grille': aireGrille,
  'pave-cubes': paveCubes, 'decompo-arbre': decompoArbre, 'aire-distributivite': aireDistributivite, etapes, pourcents, 'courbe-temperature': courbeTemperature,
  'vocab-fraction': vocabFraction,
};

const U = ['unités', BLEU], D = ['dizaines', VERT], C = ['centaines', ORANGE], M = ['milliers', VIOLET];
const col = ([titre, couleur], chiffre, valeur) => ({ titre, couleur, chiffre, valeur });
const g4 = (c, etiquette, n = 4, cols = 2) => ({ g: [[n, c]], cols, etiquette });
const ans = (v) => v; // lisibilité

export const POSES = [
  // ============================== CP
  { fiche: 'cp/maths/addition', cle: 'addition-jetons', schema: 'jetons',
    params: { lignes: [[{ g: [[3, BLEU]], etiquette: '3 billes' }, { s: '+' }, { g: [[2, ORANGE]], etiquette: '2 billes' }, { s: '=' }, { g: [[3, BLEU], [2, ORANGE]], etiquette: '5 billes' }]] },
    legende: 'On met ensemble 3 billes et 2 billes : cela fait 5 billes en tout.', apres: '## Ce que veut dire additionner' },
  { fiche: 'cp/maths/addition', cle: 'addition-bande', schema: 'droite',
    params: { min: 0, max: 10, pas: 1, W: 480, tailleNb: 17, tailleTitre: 20, titre: '3 + 2 = 5', yLigne: 112, sauts: [{ de: 3, a: 4, texte: '+ 1' }, { de: 4, a: 5, texte: '+ 1' }], points: [{ v: 3, couleur: BLEU }, { v: 5, couleur: VERT }], gras: [3, 5] },
    legende: 'Sur la bande des nombres, on part de 3 et on avance de 2 crans vers la droite : on arrive à 5.', apres: '## Compter pour trouver la somme' },

  { fiche: 'cp/maths/soustraction', cle: 'soustraction-jetons', schema: 'jetons',
    params: { titre: '5 − 2 = 3', lignes: [[{ g: [[5, VIOLET]], barres: 2, etiquette: "j'en mange 2" }, { s: '→' }, { g: [[3, VIOLET]], etiquette: 'il en reste 3' }]] },
    legende: "J'ai 5 bonbons et j'en mange 2 : on barre 2 bonbons, il en reste 3.", apres: '## Ce que veut dire soustraire' },
  { fiche: 'cp/maths/soustraction', cle: 'soustraction-reculer', schema: 'droite',
    params: { min: 0, max: 10, pas: 1, W: 480, tailleNb: 17, tailleTitre: 20, titre: '7 − 2 = 5', yLigne: 112, sauts: [{ de: 7, a: 6, texte: '− 1', couleur: ROUGE }, { de: 6, a: 5, texte: '− 1', couleur: ROUGE }], points: [{ v: 7, couleur: BLEU }, { v: 5, couleur: VERT }], gras: [5, 7] },
    legende: 'Pour calculer 7 − 2, on part de 7 et on recule de 2 crans vers la gauche : on arrive à 5.', apres: '## Calculer en reculant' },
  { fiche: 'cp/maths/soustraction', cle: 'soustraction-ecart', schema: 'droite',
    params: { min: 0, max: 10, pas: 1, W: 480, tailleNb: 17, tailleTitre: 20, titre: 'De 6 à 10, il y a 4 pas : 10 − 6 = 4', yLigne: 112, sauts: [6, 7, 8, 9].map((v) => ({ de: v, a: v + 1, texte: '1', couleur: VERT })), points: [{ v: 6, couleur: BLEU }, { v: 10, couleur: VERT }], gras: [6, 10] },
    legende: 'Pour chercher l’écart entre 6 et 10, on avance de 6 jusqu’à 10 en comptant les pas : il y en a 4.', apres: "## Soustraire, c'est aussi chercher l'écart" },

  { fiche: 'cp/maths/calcul-mental', cle: 'complements-10', schema: 'cadres10',
    params: { W: 440, titre: 'Les paires qui font 10', lignes: [9, 8, 7, 6, 5].map((k) => ({ cadres: [[[k, BLEU], [10 - k, ORANGE]]], texte: `${k} + ${10 - k} = 10` })) },
    legende: 'Une boîte de 10 cases bien remplie montre les compléments à 10 : les jetons bleus et les jetons orange font toujours 10.', apres: '## Les compléments à 10' },
  { fiche: 'cp/maths/calcul-mental', cle: 'ajouter-10', schema: 'base10',
    params: { items: [{ type: 'u', n: 5, couleur: BLEU, texte: '5 unités' }, { signe: '+' }, { type: 'd', n: 1, couleur: VERT, texte: '1 dizaine' }], bas: '5 + 10 = 15' },
    legende: 'Ajouter 10, c’est ajouter une barre de 10 : on obtient 1 dizaine et 5 unités, donc 15.', apres: '## Ajouter 10' },

  { fiche: 'cp/maths/comparer-ranger', cle: 'comparer-bande', schema: 'droite',
    params: { min: 0, max: 20, pas: 1, tailleNb: 13, titre: 'Plus on va vers la droite, plus le nombre est grand.', yLigne: 100, points: [{ v: 3, nom: '3', couleur: BLEU }, { v: 8, nom: '8', couleur: ORANGE }], textes: [{ x: 400, y: 160, t: '8 est plus loin à droite que 3.', couleur: ORANGE }], H: 176 },
    legende: 'Sur la bande des nombres, 8 est plus à droite que 3 : 8 est donc plus grand que 3.', apres: "## Comparer, c'est dire lequel est le plus grand" },
  { fiche: 'cp/maths/comparer-ranger', cle: 'trois-signes', schema: 'signes', params: {},
    legende: 'Les deux écritures disent la même chose : la pointe du signe est toujours tournée vers 3, le plus petit nombre.', apres: '## Les trois signes' },

  { fiche: 'cp/maths/dizaines-et-unites', cle: 'dizaine-unites-14', schema: 'base10',
    params: { items: [{ type: 'd', n: 1, couleur: VERT, texte: '1 dizaine', texte2: '10' }, { signe: '+' }, { type: 'u', n: 4, couleur: BLEU, texte: '4 unités', texte2: '4' }], bas: '14 = 10 + 4' },
    legende: 'Le nombre 14 : une barre de 10 (1 dizaine) et 4 cubes tout seuls (4 unités).', apres: '## Dizaines et unités' },
  { fiche: 'cp/maths/dizaines-et-unites', cle: 'paquets-13', schema: 'base10',
    params: { items: [{ type: 'd', n: 1, couleur: VERT, texte: '1 paquet de 10' }, { signe: '+' }, { type: 'u', n: 3, couleur: BLEU, texte: '3 seuls' }], bas: '10 + 3 = 13' },
    legende: '1 paquet de 10 et 3 objets seuls font 13 objets.', apres: '## Compter les paquets' },

  { fiche: 'cp/maths/nombres-jusqu-a-20', cle: 'dix-et-unites-17', schema: 'cadres10',
    params: { lignes: [{ cadres: [[[10, BLEU]], [[7, ORANGE]]], texte: '17 = 10 + 7' }] },
    legende: 'Une boîte pleine de 10 jetons et 7 jetons de plus : 17, c’est 1 dizaine et 7 unités.', apres: '## Dix et des unités' },
  { fiche: 'cp/maths/nombres-jusqu-a-20', cle: 'avant-apres', schema: 'droite',
    params: { min: 8, max: 16, pas: 1, yLigne: 92, H: 170, sauts: [{ de: 12, a: 13, texte: '+ 1', couleur: BLEU }, { de: 12, a: 11, texte: '− 1', couleur: VERT }], points: [{ v: 12, couleur: ROUGE }], gras: [11, 12, 13],
      textes: [{ x: 34 + (3 / 8) * 532, y: 152, t: 'juste avant', couleur: VERT }, { x: 34 + (5 / 8) * 532, y: 152, t: 'juste après', couleur: BLEU }] },
    legende: 'Juste avant 12, il y a 11 (on enlève 1) ; juste après 12, il y a 13 (on ajoute 1).', apres: '## Le nombre juste avant, le nombre juste après' },

  { fiche: 'cp/maths/formes-geometriques', cle: 'formes-plates', schema: 'formes',
    params: { liste: [
      { type: 'carre', nom: 'carré', info: '4 côtés égaux', couleur: BLEU, sommets: true },
      { type: 'rectangle', nom: 'rectangle', info: '2 longs, 2 courts', couleur: VERT, sommets: true },
      { type: 'triangle', nom: 'triangle', info: '3 côtés', couleur: ORANGE, sommets: true },
      { type: 'cercle', nom: 'cercle', info: 'aucun coin', couleur: VIOLET },
    ] },
    legende: 'Les quatre formes plates : les points rouges sont les coins. Le cercle n’a aucun coin.', apres: '## Les formes plates' },
  { fiche: 'cp/maths/formes-geometriques', cle: 'solides-cp', schema: 'solides',
    params: { liste: [{ type: 'cube', nom: 'le cube', info: 'comme un dé' }, { type: 'pave', nom: 'le pavé', info: 'comme une boîte' }, { type: 'boule', nom: 'la boule', info: 'elle roule' }] },
    legende: 'Trois solides : le cube, le pavé et la boule. Les traits en pointillés sont les bords cachés.', apres: '## Les solides (les formes en volume)' },

  { fiche: 'cp/maths/le-temps-qui-passe', cle: 'hier-demain', schema: 'hier-demain', params: {},
    legende: 'Si aujourd’hui c’est mercredi, hier c’était mardi (avant) et demain ce sera jeudi (après).', apres: "## Hier, aujourd'hui, demain" },
  { fiche: 'cp/maths/le-temps-qui-passe', cle: 'jours-semaine', schema: 'semaine', params: {},
    legende: 'Les 7 jours de la semaine, toujours dans le même ordre : après dimanche, on recommence à lundi.', apres: '## Les jours de la semaine' },
  { fiche: 'cp/maths/le-temps-qui-passe', cle: 'horloge-3h', schema: 'horloge', params: { h: 3, m: 0, phrase: 'Il est 3 heures.' },
    legende: 'La grande aiguille est sur le 12 et la petite aiguille sur le 3 : il est 3 heures pile.', apres: "## Lire l'heure" },

  { fiche: 'cp/maths/longueurs-et-masses', cle: 'mesurer-cubes', schema: 'mesure-cubes', params: { a: 8, b: 5 },
    legende: 'Les deux crayons partent du même trait. Le bleu mesure 8 cubes, le vert 5 cubes : le bleu est le plus long.', apres: '## Mesurer une longueur' },
  { fiche: 'cp/maths/longueurs-et-masses', cle: 'balance-plateaux', schema: 'balance', params: {},
    legende: 'Sur la balance, le plateau du caillou descend : il est plus lourd. Le plateau de la plume monte : elle est plus légère.', apres: '## La balance à deux plateaux' },

  { fiche: 'cp/maths/problemes', cle: 'probleme-ajout', schema: 'jetons',
    params: { lignes: [[{ g: [[4, BLEU]], etiquette: 'Tom a 4 billes', wmin: 120 }, { s: '+' }, { g: [[3, VERT]], etiquette: 'il en gagne 3', wmin: 110 }, { s: '=' }, { g: [[4, BLEU], [3, VERT]], etiquette: '7 billes' }]] },
    legende: 'Tom a 4 billes et en gagne 3 : on ajoute, 4 + 3 = 7 billes.', apres: "## Un exemple d'ajout" },
  { fiche: 'cp/maths/problemes', cle: 'combien-de-plus', schema: 'comparer-rangees', params: { a: 9, b: 6 },
    legende: 'On aligne les images de Marie et de Paul : Marie en a 3 de plus, car 9 − 6 = 3.', apres: '## Comparer : combien de plus ?' },

  { fiche: 'cp/maths/se-reperer-et-quadrillage', cle: 'ligne-colonne', schema: 'quadrillage',
    params: { cols: 6, rows: 4, c: 50, numeros: true, md: 130, Hplus: 34,
      cases: [...[0, 1, 2, 4, 5].map((i) => ({ c: i, r: 1, couleur: BLEU, opacite: 0.35 })), ...[0, 2, 3].map((j) => ({ c: 3, r: j, couleur: VERT, opacite: 0.35 })), { c: 3, r: 1, couleur: ORANGE, opacite: 0.8 }],
      textes: [{ i: 6.25, j: 1.6, t: '← une ligne', couleur: BLEU, ancre: 'start' }, { i: 3.5, j: 4.65, t: '↑ une colonne', couleur: VERT }] },
    legende: 'Une ligne va de gauche à droite (en bleu), une colonne va de haut en bas (en vert). La case orange est à la ligne 2, dans la colonne D.', apres: '## Lignes et colonnes' },
  { fiche: 'cp/maths/se-reperer-et-quadrillage', cle: 'coder-deplacement', schema: 'quadrillage',
    params: { cols: 7, rows: 4, c: 60, Hplus: 44,
      chemins: [{ pts: [[1.5, 3.5], [2.5, 3.5], [3.5, 3.5], [3.5, 2.5]], couleur: VERT }],
      points: [{ i: 1.5, j: 3.5, disque: true, r: 9, couleur: BLEU, nom: 'départ', dy: 26 }, { i: 3.5, j: 2.5, disque: true, r: 9, couleur: ROUGE, nom: 'arrivée', dy: -16 }],
      textes: [{ i: 3.5, j: 4.8, t: 'Le code du chemin :  →  →  ↑', taille: 20 }] },
    legende: 'Le chemin → → ↑ : on avance de 2 cases vers la droite, puis d’1 case vers le haut.', apres: '## Coder un déplacement' },
  { fiche: 'cp/maths/se-reperer-et-quadrillage', cle: 'noeud-case', schema: 'quadrillage',
    params: { cols: 5, rows: 3, c: 56, md: 150,
      cases: [{ c: 1, r: 1, couleur: ORANGE, opacite: 0.7 }],
      points: [{ i: 4, j: 1, disque: true, r: 8, couleur: ROUGE }],
      segments: [[1.5, 1.5, 5.6, 2.6, ORANGE, 1.5], [4, 1, 5.6, 0.6, ROUGE, 1.5]],
      textes: [{ i: 5.7, j: 0.68, t: 'un nœud', couleur: ROUGE, ancre: 'start', taille: 17 }, { i: 5.7, j: 2.7, t: 'une case', couleur: ORANGE, ancre: 'start', taille: 17 }] },
    legende: 'Une case est un carreau que l’on peut colorier ; un nœud est un point où deux traits se croisent.', apres: '## Les nœuds et les cases' },

  // ============================== CE1
  { fiche: 'ce1/maths/addition-posee', cle: 'addition-retenue', schema: 'pose',
    params: { cw: 84, colonnes: [{ titre: 'dizaines', couleur: VERT }, { titre: 'unités', couleur: BLEU }], retenues: { 0: '1' },
      lignes: [{ cells: ['2', '7'] }, { signe: '+', cells: ['1', '5'] }], resultat: ['4', '2'],
      notes: [{ ligne: 'retenue', texte: '← la retenue', couleur: ROUGE }, { ligne: 0, texte: 'unités : 7 + 5 = 12', couleur: BLEU }, { ligne: 1, texte: 'dizaines : 1 + 2 + 1 = 4', couleur: VERT }] },
    legende: 'Pour 27 + 15, les unités donnent 12 : on écrit 2 et on retient 1 dizaine, puis 1 + 2 + 1 = 4 dizaines. Le résultat est 42.', apres: '## La retenue' },

  { fiche: 'ce1/maths/calcul-mental', cle: 'ajouter-10-ce1', schema: 'base10',
    params: { items: [{ type: 'd', n: 3, couleur: VERT, texte: '3 dizaines' }, { type: 'u', n: 4, couleur: BLEU, texte: '4 unités' }, { signe: '+' }, { type: 'd', n: 1, couleur: ORANGE, texte: '1 dizaine' }], bas: '34 + 10 = 44 : les unités ne changent pas' },
    legende: 'Ajouter 10 à 34, c’est ajouter une barre de 10 : on a 4 dizaines et toujours 4 unités, donc 44.', apres: '## Ajouter ou enlever 10' },
  { fiche: 'ce1/maths/calcul-mental', cle: 'passer-par-30', schema: 'droite',
    params: { min: 25, max: 33, pas: 1, titre: '28 + 3 = 28 + 2 + 1 = 31', yLigne: 112, sauts: [{ de: 28, a: 30, texte: '+ 2', couleur: BLEU }, { de: 30, a: 31, texte: '+ 1', couleur: VERT }], points: [{ v: 28, couleur: BLEU }, { v: 31, couleur: VERT }], gras: [28, 30, 31] },
    legende: 'Pour 28 + 3, on passe d’abord par la dizaine ronde : 28 + 2 = 30, puis 30 + 1 = 31.', apres: '## Ajouter un petit nombre' },

  { fiche: 'ce1/maths/figures-planes', cle: 'vocabulaire-figure', schema: 'vocab-rectangle', params: {},
    legende: 'Sur ce rectangle : un côté (en vert), un sommet (le point rouge) et un angle droit (marqué par un petit carré).', apres: '## Le vocabulaire' },
  { fiche: 'ce1/maths/figures-planes', cle: 'carre-rectangle-triangle', schema: 'formes',
    params: { cw: 170, liste: [
      { type: 'carre', nom: 'carré', info: '4 côtés égaux', couleur: BLEU, codes: true, anglesDroits: true },
      { type: 'rectangle', nom: 'rectangle', info: '2 longs, 2 courts', couleur: VERT, codes: true, anglesDroits: true },
      { type: 'triangle', nom: 'triangle', info: '3 côtés, 3 sommets', couleur: ORANGE, sommets: true },
    ] },
    legende: 'Le carré et le rectangle ont 4 angles droits ; les petits traits montrent les côtés de même longueur. Le triangle a 3 côtés et 3 sommets.', apres: '## Le triangle' },
  { fiche: 'ce1/maths/figures-planes', cle: 'cercle-compas', schema: 'cercle-vocab', params: { compas: true },
    legende: 'On trace le cercle avec un compas : la pointe reste sur le centre, le crayon tourne autour.', apres: '## Le cercle' },

  { fiche: 'ce1/maths/mesures-et-monnaie', cle: 'regle-crayon', schema: 'regle', params: { a: 10, ech: 52, crayonL: 8 },
    legende: 'On pose le crayon au 0 de la règle et on lit le nombre au bout : il mesure 8 centimètres.', apres: '## Les longueurs' },
  { fiche: 'ce1/maths/mesures-et-monnaie', cle: 'horloge-aiguilles', schema: 'horloge', params: { h: 8, m: 15, phrase: 'Il est 8 h 15.' },
    legende: 'La petite aiguille (rouge) montre les heures : elle a passé le 8. La grande aiguille (bleue) montre les minutes : elle est sur le 3, soit 15 minutes.', apres: '## Le temps' },
  { fiche: 'ce1/maths/mesures-et-monnaie', cle: 'pieces-billets', schema: 'monnaie', params: {},
    legende: 'Les pièces et les billets en euros (dessin simplifié). Pour payer 3 €, on peut donner une pièce de 2 € et une pièce de 1 €.', apres: '## La monnaie' },

  { fiche: 'ce1/maths/moities-et-doubles', cle: 'double-de-7', schema: 'jetons',
    params: { titre: 'double de 7 = 7 + 7 = 14', lignes: [[{ g: [[7, BLEU]], cols: 4, etiquette: '7' }, { s: '+' }, { g: [[7, VERT]], cols: 4, etiquette: '7' }, { s: '=' }, { g: [[7, BLEU], [7, VERT]], cols: 7, etiquette: '14' }]] },
    legende: 'Le double de 7 : on ajoute 7 à lui-même, cela fait 14.', apres: '## Le double' },
  { fiche: 'ce1/maths/moities-et-doubles', cle: 'moitie-de-8', schema: 'jetons',
    params: { titre: 'moitié de 8 = 4', lignes: [[{ g: [[8, ORANGE]], cols: 4, etiquette: '8' }, { s: '→' }, { g: [[4, ORANGE]], cols: 2, etiquette: '4' }, { g: [[4, ORANGE]], cols: 2, etiquette: '4' }]] },
    legende: 'On partage 8 jetons en deux parts égales : chaque part a 4 jetons. La moitié de 8 est 4.', apres: '## La moitié' },
  { fiche: 'ce1/maths/moities-et-doubles', cle: 'pair-impair', schema: 'jetons',
    params: { titre: 'On range les jetons par deux', lignes: [[{ g: [[8, BLEU]], cols: 4, etiquette: '8 : nombre pair', wmin: 150 }, { g: [[3, BLEU], [1, ROUGE], [3, BLEU]], cols: 4, etiquette: '7 : un jeton reste seul', wmin: 190 }]] },
    legende: 'Rangés par deux, les 8 jetons forment des paires : 8 est pair. Avec 7 jetons, un jeton reste seul : 7 est impair.', apres: '## Attention aux nombres impairs' },

  { fiche: 'ce1/maths/nombres-jusqu-a-1000', cle: 'base10-347', schema: 'base10',
    params: { items: [{ type: 'c', n: 3, couleur: ORANGE, texte: '3 centaines', texte2: '300' }, { type: 'd', n: 4, couleur: VERT, texte: '4 dizaines', texte2: '40' }, { type: 'u', n: 7, couleur: BLEU, texte: '7 unités', texte2: '7' }], bas: '347 = 300 + 40 + 7' },
    legende: 'Le nombre 347 avec des plaques de 100, des barres de 10 et des petits cubes : 3 centaines, 4 dizaines et 7 unités.', apres: '## Les paquets : centaines, dizaines, unités' },

  { fiche: 'ce1/maths/problemes', cle: 'barre-addition', schema: 'barres',
    params: { unite: 22, x0: 60, W: 540, lignes: [{ segments: [{ v: 12, texte: '12 billes', couleur: BLEU }, { v: 7, texte: '7 billes', couleur: ORANGE }], accolades: [{ de: 0, a: 19, texte: 'au total : 12 + 7 = 19 billes' }] }] },
    legende: 'On met ensemble les 12 billes de Léa et les 7 billes données : on additionne, 12 + 7 = 19.', apres: '## Quand additionner ?' },
  { fiche: 'ce1/maths/problemes', cle: 'barre-soustraction', schema: 'barres',
    params: { unite: 21, x0: 60, W: 540, lignes: [{ segments: [{ v: 12, texte: 'il reste ?', vide: true, couleur: VERT }, { v: 8, texte: '8 données', couleur: ROUGE }], accolades: [{ de: 0, a: 20, texte: '20 images au départ', haut: true }, { de: 0, a: 12, texte: '20 − 8 = 12 images', couleur: VERT }] }] },
    legende: 'Tom avait 20 images et en donne 8 : on enlève, il lui en reste 20 − 8 = 12.', apres: '## Quand soustraire ?' },
  { fiche: 'ce1/maths/problemes', cle: 'barre-difference', schema: 'barres',
    params: { unite: 26, x0: 100, W: 540, lignes: [
      { nom: 'Sami', segments: [{ v: 15, texte: '15 ans', couleur: BLEU }] },
      { nom: 'sa sœur', segments: [{ v: 9, texte: '9 ans', couleur: VIOLET }, { v: 6, texte: '?', vide: true, couleur: ROUGE }], accolades: [{ de: 9, a: 15, texte: '15 − 9 = 6 ans', couleur: ROUGE }] }] },
    legende: 'On compare les deux âges : la partie qui dépasse est l’écart, 15 − 9 = 6 ans.', apres: '## Chercher une différence' },

  { fiche: 'ce1/maths/solides', cle: 'mots-solides', schema: 'cube-vocab', params: {},
    legende: 'Sur un cube : une face (surface plate), une arête (trait où deux faces se rejoignent) et un sommet (coin pointu).', apres: '## Les mots des solides' },
  { fiche: 'ce1/maths/solides', cle: 'solides-ce1', schema: 'solides',
    params: { cw: 180, liste: [
      { type: 'cube', nom: 'le cube', info: 'un dé' }, { type: 'pave', nom: 'le pavé droit', info: 'une boîte à chaussures' }, { type: 'boule', nom: 'la boule', info: 'un ballon' },
      { type: 'cylindre', nom: 'le cylindre', info: 'une boîte de conserve' }, { type: 'cone', nom: 'le cône', info: 'un cornet de glace' }, { type: 'pyramide', nom: 'la pyramide', info: 'des triangles et une pointe' },
    ] },
    legende: 'Les six solides à connaître, avec un objet de la vie courante. Les pointillés montrent les bords cachés.', apres: '## Les solides à connaître' },

  { fiche: 'ce1/maths/soustraction-posee', cle: 'soustraction-retenue', schema: 'pose',
    params: { cw: 84, colonnes: [{ titre: 'dizaines', couleur: VERT }, { titre: 'unités', couleur: BLEU }], retenues: { 0: '' },
      lignes: [{ cells: [{ t: '5', barre: true, dessus: '4' }, { t: '2', prefixe: '1' }] }, { signe: '−', cells: ['2', '7'] }], resultat: ['2', '5'],
      notes: [{ ligne: 0, texte: 'unités : 12 − 7 = 5', couleur: BLEU }, { ligne: 1, texte: 'dizaines : 4 − 2 = 2', couleur: VERT }] },
    legende: 'Pour 52 − 27, on casse une dizaine : le 2 devient 12 et le 5 devient 4. Puis 12 − 7 = 5 et 4 − 2 = 2. Le résultat est 25.', apres: '## Quand on ne peut pas enlever : la retenue' },

  { fiche: 'ce1/maths/symetrie-et-quadrillage', cle: 'deplacement-ce1', schema: 'quadrillage',
    params: { cols: 7, rows: 5, c: 44, Hplus: 10,
      chemins: [{ pts: [[1, 4], [2, 4], [3, 4], [4, 4]], couleur: BLEU }, { pts: [[4, 4], [4, 3], [4, 2]], couleur: VERT }],
      points: [{ i: 1, j: 4, nom: 'départ', dy: 24, couleur: ENCRE }, { i: 4, j: 2, nom: 'arrivée', dy: -12, couleur: ROUGE }],
      textes: [{ i: 2.5, j: 3.75, t: '3 vers la droite', couleur: BLEU, taille: 14 }, { i: 4.2, j: 3.1, t: '2 vers le haut', couleur: VERT, ancre: 'start', taille: 14 }] },
    legende: 'On avance de 3 cases vers la droite (en bleu), puis de 2 cases vers le haut (en vert), en comptant bien chaque case.', apres: '## Se repérer sur un quadrillage' },
  { fiche: 'ce1/maths/symetrie-et-quadrillage', cle: 'completer-symetrique', schema: 'quadrillage',
    params: { cols: 10, rows: 6, c: 40, axe: { x: 5 },
      polys: [{ pts: [[5, 1], [3, 3], [3, 5], [5, 5]], couleur: BLEU }, { pts: [[5, 1], [7, 3], [7, 5], [5, 5]], couleur: VERT, fond: pale(VERT) }],
      points: [{ i: 3, j: 3, nom: 'P', dx: -14, dy: -6, couleur: BLEU }, { i: 7, j: 3, nom: 'P′', dx: 16, dy: -6, couleur: VERT }],
      textes: [{ i: 4, j: 2.75, t: '2', couleur: BLEU, taille: 16 }, { i: 6, j: 2.75, t: '2', couleur: VERT, taille: 16 }],
      segments: [[3, 3, 7, 3, ROUGE, 1.6, true]] },
    legende: 'On complète la figure par symétrie : le point P est à 2 cases de l’axe rouge, son symétrique P′ est à 2 cases de l’autre côté.', apres: '## Compléter une figure symétrique' },

  { fiche: 'ce1/maths/tables-de-multiplication', cle: 'paquets-3x4', schema: 'jetons',
    params: { lignes: [[g4(ORANGE, '4'), g4(ORANGE, '4'), g4(ORANGE, '4')], [{ t: '4 + 4 + 4 = 12' }], [{ t: '3 × 4 = 12', couleur: BLEU }]] },
    legende: '3 paquets de 4 bonbons : on peut additionner 4 + 4 + 4 ou multiplier 3 × 4. Cela fait 12.', apres: "## Multiplier, c'est additionner en paquets" },
  { fiche: 'ce1/maths/tables-de-multiplication', cle: 'echanger-facteurs', schema: 'jetons',
    params: { ecart: 40, lignes: [[{ g: [[12, BLEU]], cols: 4, etiquette: '3 rangées de 4', wmin: 140 }, { g: [[12, VERT]], cols: 3, etiquette: '4 rangées de 3', wmin: 140 }]], titre: '3 × 4 = 12 et 4 × 3 = 12' },
    legende: 'Les mêmes 12 jetons rangés de deux façons : 3 rangées de 4 ou 4 rangées de 3. Le produit ne change pas.', apres: '## On peut échanger les nombres' },

  // ============================== CE2
  { fiche: 'ce2/maths/angles-et-polygones', cle: 'verifier-equerre', schema: 'equerre',
    params: { noms: ['trop fermé', 'angle droit', 'trop ouvert'], infos: ['pas un angle droit', 'il suit l\'équerre', 'pas un angle droit'] },
    legende: 'On place le coin de l’équerre (en jaune) sur le sommet : seul l’angle du milieu suit exactement l’équerre, c’est un angle droit.', apres: "## L'angle droit" },
  { fiche: 'ce2/maths/angles-et-polygones', cle: 'polygones-ce2', schema: 'formes',
    params: { liste: [
      { type: 'triangle', nom: 'triangle', info: '3 côtés', couleur: ORANGE, sommets: true },
      { type: 'quadrilatere', nom: 'quadrilatère', info: '4 côtés', couleur: VERT, sommets: true },
      { type: 'pentagone', nom: 'pentagone', info: '5 côtés', couleur: BLEU, sommets: true },
      { type: 'cercle', nom: 'cercle', info: 'pas un polygone', couleur: ATTENUE, couleurInfo: ROUGE, barre: true },
    ] },
    legende: 'Trois polygones avec leurs sommets en rouge : autant de sommets que de côtés. Le cercle n’est pas un polygone, son bord est courbe.', apres: '## Les polygones' },

  { fiche: 'ce2/maths/calcul-mental', cle: 'passer-par-10', schema: 'droite',
    params: { min: 6, max: 14, pas: 1, titre: '8 + 5 = 8 + 2 + 3 = 13', yLigne: 112, sauts: [{ de: 8, a: 10, texte: '+ 2', couleur: BLEU }, { de: 10, a: 13, texte: '+ 3', couleur: VERT }], points: [{ v: 8, couleur: BLEU }, { v: 13, couleur: VERT }], gras: [8, 10, 13] },
    legende: 'Pour 8 + 5, on complète d’abord jusqu’à 10 avec 2, puis on ajoute les 3 qui restent : 13.', apres: '## Passer par la dizaine' },
  { fiche: 'ce2/maths/calcul-mental', cle: 'decomposer-23-14', schema: 'decompo-arbre', params: {},
    legende: 'On coupe 23 et 14 en dizaines et unités, on ajoute les dizaines ensemble et les unités ensemble : 30 + 7 = 37.', apres: '## Ajouter en décomposant' },

  { fiche: 'ce2/maths/fractions-simples', cle: 'demi-tiers-quart', schema: 'bandes',
    params: { lignes: [
      { n: 2, k: 1, couleur: BLEU, frac: [1, 2], droite: 'un demi' },
      { n: 3, k: 1, couleur: VERT, frac: [1, 3], droite: 'un tiers' },
      { n: 4, k: 1, couleur: ORANGE, frac: [1, 4], droite: 'un quart' },
    ] },
    legende: 'La même bande partagée en 2, en 3 puis en 4 parts égales : plus il y a de parts, plus chaque part est petite.', apres: '## Les fractions à connaître' },
  { fiche: 'ce2/maths/fractions-simples', cle: 'plusieurs-parts', schema: 'bandes',
    params: { ligneV: 0.5, lignes: [
      { n: 4, k: 3, couleur: ORANGE, frac: [3, 4], droite: 'trois quarts' },
      { n: 4, k: 2, couleur: VERT, frac: [2, 4], droite: 'deux quarts' },
      { n: 2, k: 1, couleur: BLEU, frac: [1, 2], droite: 'un demi' },
    ] },
    legende: 'Trois parts sur quatre font trois quarts. Deux quarts recouvrent exactement un demi : c’est la même quantité.', apres: '## Prendre plusieurs parts' },
  { fiche: 'ce2/maths/fractions-simples', cle: 'bande-graduee', schema: 'bandes',
    params: { lignes: [{ n: 4, k: 3, couleur: ORANGE, ecart: 6, grads: ['0', [1, 4], [2, 4], [3, 4], [4, 4]] }] },
    legende: 'Une bande partagée en 4 parts égales : un quart, deux quarts (le milieu), trois quarts, puis quatre quarts au bout, c’est 1 tout entier.', apres: '## Placer sur une bande' },

  { fiche: 'ce2/maths/multiplication-posee', cle: 'multiplication-retenue', schema: 'pose',
    params: { cw: 50, colonnes: [{ titre: 'c', couleur: ORANGE }, { titre: 'd', couleur: VERT }, { titre: 'u', couleur: BLEU }], retenues: { 1: '3' },
      lignes: [{ cells: ['', '5', '8'] }, { signe: '×', cells: ['', '', '4'] }], resultat: ['2', '3', '2'],
      notes: [{ ligne: 'retenue', texte: '← retenue', couleur: ROUGE }, { ligne: 0, texte: 'u : 4 × 8 = 32', couleur: BLEU }, { ligne: 1, texte: 'd : 4 × 5 + 3 = 23', couleur: VERT }] },
    legende: 'Pour 58 × 4 : 4 × 8 = 32, on écrit 2 et on retient 3 ; puis 4 × 5 = 20, plus la retenue 3, cela fait 23. Le résultat est 232.', apres: '## Quand il y a une retenue' },
  { fiche: 'ce2/maths/multiplication-posee', cle: 'fois-10-ce2', schema: 'glissement',
    params: { rangs: ['centaines', 'dizaines', 'unités'], couleurs: [ORANGE, VERT, BLEU], cw: 84, haut: { 1: '3', 2: '4' }, bas: { 0: '3', 1: '4', 2: '0' }, ajoutes: [2], virguleApres: 2, fl: -1, etiquetteHaut: '34', etiquetteBas: '34 × 10 = 340' },
    legende: 'Quand on multiplie par 10, chaque chiffre avance d’un rang vers la gauche et un zéro vient à la place des unités : 34 × 10 = 340.', apres: '## Multiplier par 10' },

  { fiche: 'ce2/maths/nombres-jusqu-a-10000', cle: 'rangs-3486', schema: 'numeration',
    params: { cw: 96, signes: true, colonnes: [col(M, '3', '3 000'), col(C, '4', '400'), col(D, '8', '80'), col(U, '6', '6')], bas: '3 486 = 3 000 + 400 + 80 + 6' },
    legende: 'Dans 3 486, chaque chiffre a une place : le 3 vaut 3 000, le 4 vaut 400, le 8 vaut 80 et le 6 vaut 6.', apres: '## Les quatre rangs' },
  { fiche: 'ce2/maths/nombres-jusqu-a-10000', cle: 'comparer-4500-4800', schema: 'droite',
    params: { min: 4000, max: 5000, pas: 100, tailleNb: 12, titre: '4 800 est plus à droite : 4 800 > 4 500', yLigne: 108, points: [{ v: 4500, nom: '4 500', couleur: BLEU }, { v: 4800, nom: '4 800', couleur: ORANGE }] },
    legende: 'Sur la droite graduée de 100 en 100, 4 800 est plus loin à droite que 4 500 : 4 800 est le plus grand.', apres: '## Comparer deux nombres' },

  { fiche: 'ce2/maths/perimetre-et-mesures', cle: 'regle-mm', schema: 'regle', params: { a: 5, ech: 96, zoom: true },
    legende: 'Sur la règle, chaque centimètre est partagé en 10 petits traits : 1 cm = 10 mm.', apres: '## Les longueurs' },
  { fiche: 'ce2/maths/perimetre-et-mesures', cle: 'perimetre-triangle', schema: 'perimetre-deroule', params: {},
    legende: 'Le périmètre du triangle, c’est la longueur de son tour : on met les trois côtés bout à bout, 3 + 4 + 5 = 12 cm.', apres: '## Le périmètre' },

  { fiche: 'ce2/maths/problemes', cle: 'probleme-deux-etapes', schema: 'barres',
    params: { unite: 14, x0: 120, W: 600, lignes: [
      { nom: '3 carnets', segments: [{ v: 8, texte: '8 €' }, { v: 8, texte: '8 €' }, { v: 8, texte: '8 €' }], accolades: [{ de: 0, a: 24, texte: '1. 3 × 8 = 24 €', haut: true, couleur: BLEU }] },
      { nom: 'Tom paie', segments: [{ v: 24, texte: '24 €', couleur: BLEU }, { v: 6, texte: '?', vide: true, couleur: VERT }], accolades: [{ de: 0, a: 30, texte: '30 €', haut: true }, { de: 24, a: 30, texte: '2. 30 − 24 = 6 €', couleur: VERT }] }] },
    legende: 'Premier calcul : le prix des 3 carnets, 3 × 8 = 24 €. Deuxième calcul : la monnaie rendue sur 30 €, 30 − 24 = 6 €.', apres: '## Un problème en deux étapes' },

  { fiche: 'ce2/maths/sens-de-la-division', cle: 'partage-12', schema: 'jetons',
    params: { lignes: [[{ g: [[12, BLEU]], cols: 4, etiquette: '12 billes' }, { s: '→' }, g4(BLEU, 'enfant 1'), g4(BLEU, 'enfant 2'), g4(BLEU, 'enfant 3')], [{ t: '12 : 3 = 4' }]] },
    legende: 'On partage 12 billes entre 3 enfants : chacun en reçoit 4, car 3 × 4 = 12.', apres: '## Partager en parts égales' },
  { fiche: 'ce2/maths/sens-de-la-division', cle: 'paquets-de-5', schema: 'jetons',
    params: { lignes: [[1, 2, 3, 4].map((k) => ({ g: [[5, ORANGE]], cols: 3, etiquette: `paquet ${k}` }))].concat([[{ t: '20 : 5 = 4 paquets' }]]) },
    legende: 'Avec 20 gâteaux, on fait des paquets de 5 : on obtient 4 paquets, car 5 × 4 = 20.', apres: '## Faire des paquets égaux' },
  { fiche: 'ce2/maths/sens-de-la-division', cle: 'reste-13', schema: 'jetons',
    params: { lignes: [[1, 2, 3, 4].map((k) => ({ g: [[3, VERT]], cols: 3, etiquette: `enfant ${k}` })).concat([{ s: '+' }, { g: [[1, ROUGE]], etiquette: 'reste 1', couleurEtiquette: ROUGE, wmin: 60 }])].concat([[{ t: '13 = 4 × 3 + 1' }]]) },
    legende: '13 bonbons partagés entre 4 enfants : chacun en reçoit 3 et il reste 1 bonbon, plus petit que le nombre de parts.', apres: '## Quand ça ne tombe pas juste : le reste' },

  { fiche: 'ce2/maths/solides-et-patrons', cle: 'faces-aretes-sommets', schema: 'cube-vocab', params: {},
    legende: 'Sur un cube : une face (surface plate), une arête (trait où deux faces se rencontrent) et un sommet (un coin).', apres: '## Faces, arêtes, sommets' },
  { fiche: 'ce2/maths/solides-et-patrons', cle: 'patron-cube', schema: 'patron-cube', params: {},
    legende: 'Un patron du cube : 6 carrés reliés. Quand on le plie, chaque carré devient une face du cube.', apres: "## Le patron d'un solide" },

  { fiche: 'ce2/maths/symetrie-axiale', cle: 'axes-figures-ce2', schema: 'formes',
    params: { liste: [
      { type: 'carre', nom: 'carré', info: '4 axes', couleur: BLEU, axes: true },
      { type: 'rectangle', nom: 'rectangle', info: '2 axes', couleur: VERT, axes: true },
      { type: 'cercle', nom: 'cercle', info: 'une infinité', couleur: VIOLET, axes: true },
      { type: 'triangle', nom: 'triangle quelconque', info: 'aucun axe', couleur: ORANGE },
    ] },
    legende: 'Les axes de symétrie sont en pointillés rouges. Les diagonales du rectangle ne sont pas des axes ; pour le cercle, on n’en a dessiné que quelques-uns.', apres: '## Des figures et leurs axes' },
  { fiche: 'ce2/maths/symetrie-axiale', cle: 'symetrique-point-ce2', schema: 'quadrillage',
    params: { cols: 10, rows: 4, c: 44, axe: { x: 5 },
      segments: [[2, 2, 8, 2, BLEU, 1.6, true]],
      points: [{ i: 2, j: 2, nom: 'A', dx: -16, dy: 6, couleur: ENCRE }, { i: 8, j: 2, nom: 'A′', dx: 18, dy: 6, couleur: VERT }],
      textes: [{ i: 3.5, j: 1.7, t: '3 carreaux', couleur: BLEU, taille: 15 }, { i: 6.5, j: 1.7, t: '3 carreaux', couleur: BLEU, taille: 15 }] },
    legende: 'Le point A est à 3 carreaux de l’axe rouge : son symétrique A′ est aussi à 3 carreaux, juste en face, de l’autre côté.', apres: "## Le symétrique d'un point" },

  { fiche: 'ce2/maths/tableaux-et-graphiques', cle: 'barres-fruits', schema: 'batons',
    params: { titre: 'Fruits vendus dans la semaine', categories: ['Pommes', 'Bananes', 'Oranges', 'Poires'], valeurs: [12, 8, 5, 10], pas: 2, max: 14, couleurs: [ROUGE, OR, ORANGE, VERT], lecture: 1, nomY: 'nombre vendu' },
    legende: 'Le graphique en barres des fruits vendus : on lit la hauteur de chaque barre sur l’échelle. La barre des bananes s’arrête à 8.', apres: '## Lire un graphique en barres' },

  // ============================== CM1
  { fiche: 'cm1/maths/angles', cle: 'ouverture-longueur', schema: 'ouverture', params: {},
    legende: 'Ces deux angles ont des côtés de longueurs différentes, mais la même ouverture : ils sont égaux.', apres: "## Ce qui compte : l'ouverture, pas la longueur" },
  { fiche: 'cm1/maths/angles', cle: 'quatre-angles', schema: 'types-angles', params: { niveau: 'cm1' },
    legende: 'Les angles à connaître, comparés à l’angle droit : aigu (plus petit), droit (le coin de l’équerre), obtus (plus grand).', apres: '## Les angles à connaître' },
  { fiche: 'cm1/maths/angles', cle: 'equerre-cm1', schema: 'equerre', params: {},
    legende: 'Avec le coin de l’équerre : le 2e côté reste à l’intérieur (angle aigu), suit l’équerre (angle droit) ou dépasse à l’extérieur (angle obtus).', apres: "## Vérifier et comparer avec l'équerre" },

  { fiche: 'cm1/maths/cercle-triangles-perimetre-aire', cle: 'cercle-rayon-diametre', schema: 'cercle-vocab', params: {},
    legende: 'Le centre, un rayon (du centre jusqu’au cercle) et un diamètre (qui traverse le cercle en passant par le centre) : le diamètre vaut deux rayons.', apres: '## Le cercle' },
  { fiche: 'cm1/maths/cercle-triangles-perimetre-aire', cle: 'triangles-particuliers', schema: 'formes',
    params: { cw: 180, liste: [
      { type: 'triangle-rectangle', nom: 'triangle rectangle', info: 'un angle droit', couleur: BLEU, anglesDroits: true },
      { type: 'isocele', nom: 'triangle isocèle', info: '2 côtés égaux', couleur: VERT, codes: true },
      { type: 'equilateral', nom: 'triangle équilatéral', info: '3 côtés égaux', couleur: ORANGE, codes: true },
    ] },
    legende: 'Les triangles particuliers : le petit carré marque l’angle droit, les petits traits marquent les côtés de même longueur.', apres: '## Les triangles particuliers' },
  { fiche: 'cm1/maths/cercle-triangles-perimetre-aire', cle: 'meme-perimetre', schema: 'aire-grille',
    params: { figures: [{ w: 6, h: 2, couleur: BLEU }, { w: 4, h: 4, couleur: VERT }] },
    legende: 'Deux figures sur un quadrillage de carreaux de 1 cm : même périmètre (16 cm, en rouge), mais des aires différentes (12 cm² et 16 cm²).', apres: '## Ne pas confondre périmètre et aire' },

  { fiche: 'cm1/maths/division-euclidienne', cle: 'partage-27', schema: 'jetons',
    params: { lignes: [[1, 2, 3, 4].map((k) => ({ g: [[6, BLEU]], cols: 3, etiquette: `enfant ${k}` })).concat([{ s: '+' }, { g: [[3, ROUGE]], cols: 3, etiquette: 'reste', couleurEtiquette: ROUGE }])].concat([[{ t: '27 = 4 × 6 + 3' }]]) },
    legende: '27 bonbons partagés entre 4 enfants : chacun en reçoit 6 (le quotient) et il en reste 3 (le reste), car 3 est plus petit que 4.', apres: '## Le vocabulaire' },
  { fiche: 'cm1/maths/division-euclidienne', cle: 'potence-86-5', schema: 'potence',
    params: { W: 560, H: 250, x0: 150, y0: 50,
      cellules: [{ r: 0, c: 0, t: '8', couleur: BLEU }, { r: 0, c: 1, t: '6', couleur: BLEU }, { r: 1, c: -0.8, t: '−' }, { r: 1, c: 0, t: '5' }, { r: 2, c: 0, t: '3' }, { r: 2, c: 1, t: '6' }, { r: 3, c: -0.8, t: '−' }, { r: 3, c: 0, t: '3' }, { r: 3, c: 1, t: '5' }, { r: 4, c: 1, t: '1', couleur: ROUGE }],
      traits: [{ r: 1, c1: 0, c2: 0 }, { r: 3, c1: 0, c2: 1 }],
      diviseur: { t: '5', couleur: VERT }, quotient: { t: '17', couleur: ORANGE },
      etiquettes: [
        { x1: 88, y1: 41, x2: 128, y2: 41, t: 'dividende', tx: 82, ty: 46, couleur: BLEU, ancre: 'end' },
        { x1: 300, y1: 41, x2: 240, y2: 41, t: 'diviseur', tx: 306, ty: 46, couleur: VERT, ancre: 'start' },
        { x1: 300, y1: 79, x2: 256, y2: 79, t: 'quotient', tx: 306, ty: 84, couleur: ORANGE, ancre: 'start' },
        { x1: 230, y1: 196, x2: 196, y2: 196, t: 'reste (1 < 5)', tx: 236, ty: 201, couleur: ROUGE, ancre: 'start' },
        { x1: 191, y1: 58, x2: 191, y2: 104, t: '', tx: 0, ty: 0, couleur: ATTENUE },
      ] },
    legende: 'La division de 86 par 5 posée : on abaisse le 6 (flèche grise). Le quotient est 17, le reste est 1, donc 86 = 5 × 17 + 1.', apres: '## Poser une division (diviseur à un chiffre)' },

  { fiche: 'cm1/maths/durees', cle: 'duree-film', schema: 'droite',
    params: { min: 14.5, max: 16.25, W: 620, marge: 50, titre: '30 min + 1 h + 15 min = 1 h 45 min', yLigne: 120, pasFin: 0.25,
      graduations: [{ v: 14.5, texte: '14 h 30' }, { v: 15, texte: '15 h' }, { v: 16, texte: '16 h' }, { v: 16.25, texte: '16 h 15' }], gras: [14.5, 15, 16, 16.25],
      sauts: [{ de: 14.5, a: 15, texte: '30 min', couleur: BLEU }, { de: 15, a: 16, texte: '1 h', couleur: VERT }, { de: 16, a: 16.25, texte: '15 min', couleur: ORANGE }] },
    legende: 'Pour la durée du film, on avance par étapes de 14 h 30 à 16 h 15 : 30 min, puis 1 h, puis 15 min, soit 1 h 45 min.', apres: '## Calculer une durée entre deux moments' },
  { fiche: 'cm1/maths/durees', cle: 'ajouter-duree', schema: 'droite',
    params: { min: 9 + 50 / 60, max: 10.5, W: 600, marge: 50, titre: '9 h 50 + 40 min = 10 h 30', yLigne: 120, pasFin: 1 / 6,
      graduations: [{ v: 9 + 50 / 60, texte: '9 h 50' }, { v: 10, texte: '10 h' }, { v: 10.5, texte: '10 h 30' }], gras: [9 + 50 / 60, 10, 10.5],
      sauts: [{ de: 9 + 50 / 60, a: 10, texte: '10 min', couleur: BLEU }, { de: 10, a: 10.5, texte: '30 min', couleur: VERT }] },
    legende: 'On avance de 10 min pour atteindre 10 h, puis des 30 min qui restent : le cours finit à 10 h 30. Chaque petit trait vaut 10 minutes.', apres: '## Ajouter une durée à une heure' },

  { fiche: 'cm1/maths/fractions', cle: 'numerateur-denominateur', schema: 'vocab-fraction', params: {},
    legende: 'La tarte est partagée en 4 parts égales (le dénominateur) et on en prend 3 (le numérateur) : trois quarts.', apres: '## Écrire une fraction' },
  { fiche: 'cm1/maths/fractions', cle: 'droite-quarts', schema: 'droite',
    params: { min: 0, max: 2, W: 600, yLigne: 110, H: 160, graduations: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((v) => ({ v, texte: Number.isInteger(v) ? String(v) : '' })), gras: [0, 1, 2],
      points: [{ v: 0.75, frac: [3, 4], couleur: ORANGE }, { v: 1.25, frac: [5, 4], couleur: BLEU }] },
    legende: 'Chaque unité est partagée en 4 parts égales. Trois quarts est avant 1 ; cinq quarts est après 1 : c’est 1 et encore un quart.', apres: '## Placer une fraction sur une droite graduée' },

  { fiche: 'cm1/maths/grands-nombres', cle: 'tableau-classes-cm1', schema: 'numeration',
    params: { cw: 54, tailleChiffre: 26, valeurs: false, groupes: [{ titre: 'Classe des mille', n: 3, couleur: ORANGE }, { titre: 'Classe des unités', n: 3, couleur: BLEU }],
      colonnes: [['c', ORANGE, '2'], ['d', ORANGE, '0'], ['u', ORANGE, '5'], ['c', BLEU, '3'], ['d', BLEU, '1'], ['u', BLEU, '7']].map(([titre, couleur, chiffre]) => ({ titre, couleur, chiffre })),
      bas: '205 mille  ·  317' },
    legende: 'Le nombre 205 317 dans le tableau des classes : on lit classe par classe, deux cent cinq mille trois cent dix-sept.', apres: '## Le tableau des classes' },

  { fiche: 'cm1/maths/multiplication-posee', cle: 'fois-10-cm1', schema: 'glissement',
    params: { rangs: ['centaines', 'dizaines', 'unités'], couleurs: [ORANGE, VERT, BLEU], cw: 84, haut: { 1: '3', 2: '6' }, bas: { 0: '3', 1: '6', 2: '0' }, ajoutes: [2], virguleApres: 2, fl: -1, etiquetteHaut: '36', etiquetteBas: '36 × 10 = 360' },
    legende: 'Multiplier par 10 fait avancer chaque chiffre d’un rang vers la gauche ; on écrit un zéro aux unités : 36 × 10 = 360.', apres: '## Multiplier par 10, 100, 1000' },
  { fiche: 'cm1/maths/multiplication-posee', cle: 'multiplication-deux-chiffres', schema: 'pose',
    params: { cw: 50, colonnes: [{ titre: 'c', couleur: ORANGE }, { titre: 'd', couleur: VERT }, { titre: 'u', couleur: BLEU }],
      lignes: [{ cells: ['', '2', '4'] }, { signe: '×', cells: ['', '1', '2'] }, { trait: true }, { cells: ['', '4', '8'], couleur: BLEU }, { signe: '+', cells: ['2', '4', { t: '0', couleur: ROUGE }], couleur: VIOLET }], resultat: ['2', '8', '8'],
      notes: [{ ligne: 3, texte: '24 × 2', couleur: BLEU }, { ligne: 4, texte: '24 × 10 (zéro de décalage)', couleur: VIOLET }, { ligne: 'res', texte: '48 + 240', couleur: VERT }] },
    legende: 'Pour 24 × 12 : on calcule 24 × 2 = 48, puis 24 × 1 dizaine = 240 (avec le zéro de décalage en rouge), et on additionne : 288.', apres: '## Multiplier par un nombre à deux chiffres' },

  { fiche: 'cm1/maths/nombres-decimaux', cle: 'tableau-position-1274', schema: 'numeration',
    params: { cw: 96, signes: true, colonnes: [col(D, '1', '10'), col(U, '2', '2'), { virgule: true, chiffre: ',' }, col(['dixièmes', ROUGE], '7', '7/10'), col(['centièmes', VIOLET], '4', '4/100')], bas: '12,74 = 10 + 2 + 7/10 + 4/100' },
    legende: 'Dans 12,74 : 1 dizaine et 2 unités avant la virgule, 7 dixièmes et 4 centièmes après la virgule.', apres: '## Le tableau de position' },
  { fiche: 'cm1/maths/nombres-decimaux', cle: 'droite-345-35', schema: 'droite',
    params: { min: 3, max: 4, pas: 0.1, pasFin: 0.01, W: 620, tailleNb: 13, titre: '3,5 est plus à droite que 3,45', yLigne: 104, H: 190,
      points: [{ v: 3.45, nom: '3,45', couleur: ORANGE, dessous: true, dy: 62 }, { v: 3.5, nom: '3,5', couleur: BLEU }], gras: [3, 3.4, 3.5, 4] },
    legende: 'Entre 3 et 4, chaque dixième est partagé en 10 centièmes : 3,45 est au milieu entre 3,4 et 3,5. Donc 3,5 est plus grand que 3,45.', apres: '## Comparer deux nombres décimaux' },

  { fiche: 'cm1/maths/operations-decimaux', cle: 'aligner-virgules-cm1', schema: 'pose',
    params: { cw: 58, colonnes: [{ titre: 'd', couleur: VERT }, { titre: 'u', couleur: BLEU }, { virgule: true }, { titre: '1/10', couleur: ROUGE }, { titre: '1/100', couleur: VIOLET }], retenues: { 1: '1' },
      lignes: [{ cells: ['1', '2', ',', '7', '4'] }, { signe: '+', cells: ['', '3', ',', '5', { t: '0', couleur: ATTENUE }] }], resultat: ['1', '6', ',', '2', '4'],
      notes: [{ ligne: 1, texte: '3,5 = 3,50', couleur: ATTENUE }, { ligne: 'res', texte: 'virgule sous virgule', couleur: ROUGE }] },
    legende: 'Pour 12,74 + 3,50, les virgules sont alignées : les unités sont sous les unités, les dixièmes sous les dixièmes. Le résultat est 16,24.', apres: "## La règle d'or : aligner les virgules" },

  { fiche: 'cm1/maths/proportionnalite', cle: 'tableau-stylos', schema: 'proportion',
    params: { titres: ['Nombre de stylos', 'Prix (en €)'], haut: ['1', '2', '3', '5'], bas: ['2', '4', '6', '10'], coef: '× 2' },
    legende: 'Dans ce tableau, on passe toujours de la 1re ligne à la 2e en multipliant par 2 : c’est une situation de proportionnalité.', apres: '## Reconnaître une situation proportionnelle' },
  { fiche: 'cm1/maths/proportionnalite', cle: 'passage-unite-cm1', schema: 'proportion',
    params: { titres: ['Nombre de cahiers', 'Prix (en €)'], haut: ['3', '1', '5'], bas: ['6', '2', '10'], fleches: [{ de: 0, a: 1, texte: '÷ 3' }, { de: 1, a: 2, texte: '× 5' }, { de: 0, a: 1, texte: '÷ 3', bas: true }, { de: 1, a: 2, texte: '× 5', bas: true }] },
    legende: 'On passe par un seul cahier : 6 € ÷ 3 = 2 €, puis 5 cahiers coûtent 5 × 2 = 10 €.', apres: '### En passant par « un seul »' },

  { fiche: 'cm1/maths/symetrie-axiale', cle: 'proprietes-symetrie', schema: 'symetrie-point', params: {},
    legende: 'A et son symétrique A′ sont à la même distance de l’axe ; le segment qui les relie coupe l’axe à angle droit. Le point B, sur l’axe, ne bouge pas.', apres: '## Les propriétés importantes' },
  { fiche: 'cm1/maths/symetrie-axiale', cle: 'axes-figures-cm1', schema: 'formes',
    params: { parLigne: 3, cw: 175, liste: [
      { type: 'carre', nom: 'carré', info: '4 axes', couleur: BLEU, axes: true },
      { type: 'rectangle', nom: 'rectangle', info: '2 axes', couleur: VERT, axes: true },
      { type: 'losange', nom: 'losange', info: '2 axes', couleur: VIOLET, axes: true },
      { type: 'equilateral', nom: 'triangle équilatéral', info: '3 axes', couleur: ORANGE, axes: true },
      { type: 'isocele', nom: 'triangle isocèle', info: '1 axe', couleur: VERT, axes: true },
      { type: 'parallelogramme', nom: 'parallélogramme', info: 'aucun axe', couleur: ATTENUE },
    ] },
    legende: 'Les axes de symétrie de quelques figures, en pointillés rouges. Le parallélogramme quelconque n’en a aucun.', apres: "## Combien d'axes de symétrie ?" },

  { fiche: 'cm1/maths/tableaux-et-graphiques', cle: 'batons-clubs', schema: 'batons',
    params: { titre: 'Élèves inscrits à chaque club', categories: ['Football', 'Danse', 'Échecs'], valeurs: [6, 10, 4], pas: 2, max: 12, couleurs: [VERT, VIOLET, ORANGE], lecture: 0, nomY: "nombre d'élèves" },
    legende: 'L’axe est gradué de 2 en 2 : le bâton du football arrive au 3e trait, il vaut donc 6 élèves.', apres: '## Lire un diagramme en bâtons' },
  { fiche: 'cm1/maths/tableaux-et-graphiques', cle: 'pictogramme-pommes', schema: 'pictogramme',
    params: { titre: 'Élèves qui mangent une pomme au goûter', icone: 'pomme', legende: '= 2 élèves', lignes: [{ nom: 'Lundi', n: 3, total: '6 élèves' }, { nom: 'Mardi', n: 2.5, total: '5 élèves' }, { nom: 'Jeudi', n: 4, total: '8 élèves' }] },
    legende: 'Une pomme représente 2 élèves : 3 pommes font 6 élèves, et une demi-pomme vaut 1 élève.', apres: '## Lire un pictogramme' },

  // ============================== CM2
  { fiche: 'cm2/maths/aires-perimetres-volumes', cle: 'perimetre-ou-aire', schema: 'aire-grille',
    params: { figures: [{ w: 6, h: 2, couleur: BLEU }, { w: 4, h: 4, couleur: VERT }] },
    legende: 'Deux figures de même périmètre (16 cm, contour rouge) mais d’aires différentes : 12 cm² et 16 cm² (un carreau = 1 cm²).', apres: '## 3. Périmètre ou aire ?' },

  { fiche: 'cm2/maths/angles-et-mesures', cle: 'types-angles-cm2', schema: 'types-angles', params: { niveau: 'cm2' },
    legende: 'On compare l’ouverture à l’angle droit : aigu (moins de 90°), droit (90°), obtus (plus de 90°).', apres: "## 1. Les types d'angles" },
  { fiche: 'cm2/maths/angles-et-mesures', cle: 'somme-45-45', schema: 'somme-angles', params: {},
    legende: 'Deux angles de 45° mis côte à côte forment un angle de 90° : un angle droit.', apres: '## 5. Comparer, additionner et partager des angles' },

  { fiche: 'cm2/maths/calcul-mental', cle: 'decomposer-24x5', schema: 'aire-distributivite', params: {},
    legende: 'Un rectangle de 24 carreaux sur 5 coupé en deux morceaux : 20 × 5 = 100 et 4 × 5 = 20, donc 24 × 5 = 120.', apres: '## 6. Décomposer pour multiplier' },

  { fiche: 'cm2/maths/division-posee', cle: 'potence-47-5', schema: 'potence',
    params: { W: 560, H: 180, x0: 150, y0: 50,
      cellules: [{ r: 0, c: 0, t: '4', couleur: BLEU }, { r: 0, c: 1, t: '7', couleur: BLEU }, { r: 1, c: -0.8, t: '−' }, { r: 1, c: 0, t: '4' }, { r: 1, c: 1, t: '5' }, { r: 2, c: 1, t: '2', couleur: ROUGE }],
      traits: [{ r: 1, c1: 0, c2: 1 }],
      diviseur: { t: '5', couleur: VERT }, quotient: { t: '9', couleur: ORANGE },
      etiquettes: [
        { x1: 88, y1: 41, x2: 128, y2: 41, t: 'dividende', tx: 82, ty: 46, couleur: BLEU, ancre: 'end' },
        { x1: 300, y1: 41, x2: 240, y2: 41, t: 'diviseur', tx: 306, ty: 46, couleur: VERT, ancre: 'start' },
        { x1: 300, y1: 79, x2: 246, y2: 79, t: 'quotient', tx: 306, ty: 84, couleur: ORANGE, ancre: 'start' },
        { x1: 230, y1: 120, x2: 196, y2: 120, t: 'reste (2 < 5)', tx: 236, ty: 125, couleur: ROUGE, ancre: 'start' },
      ] },
    legende: 'La division de 47 par 5 : 47 est le dividende, 5 le diviseur, 9 le quotient et 2 le reste, car 5 × 9 + 2 = 47.', apres: '## 1. Le vocabulaire' },

  { fiche: 'cm2/maths/fractions-et-operations', cle: 'trois-quarts-de-20', schema: 'jetons',
    params: { lignes: [[1, 2, 3, 4].map((k) => ({ g: [[5, k < 4 ? ORANGE : GRIS]], cols: 3, etiquette: '5' })), [{ t: '1/4 de 20 = 20 ÷ 4 = 5' }], [{ t: '3/4 de 20 = 3 × 5 = 15', couleur: ORANGE }]] },
    legende: 'On partage 20 jetons en 4 parts égales de 5 : un quart de 20 vaut 5, et trois quarts de 20 valent 3 × 5 = 15.', apres: "## 2. Prendre la fraction d'une quantité" },
  { fiche: 'cm2/maths/fractions-et-operations', cle: 'addition-cinquiemes', schema: 'bandes',
    params: { lignes: [
      { n: 5, k: 1, couleur: BLEU, frac: [1, 5] },
      { n: 5, k: 2, couleur: VERT, frac: [2, 5] },
      { n: 5, k: 3, frac: [3, 5], couleur: VIOLET, parts: [BLEU, VERT, VERT], droite: '1/5 + 2/5 = 3/5', couleurDroite: ENCRE },
    ] },
    legende: 'Un cinquième plus deux cinquièmes font trois cinquièmes : les parts gardent la même taille, le dénominateur ne change pas.', apres: '## 5. Additionner des fractions de même dénominateur' },
  { fiche: 'cm2/maths/fractions-et-operations', cle: 'fractions-egales', schema: 'bandes',
    params: { ligneV: 0.5, lignes: [
      { n: 2, k: 1, couleur: BLEU, frac: [1, 2] },
      { n: 4, k: 2, couleur: VERT, frac: [2, 4] },
      { n: 6, k: 3, couleur: ORANGE, frac: [3, 6] },
    ] },
    legende: 'Un demi, deux quarts et trois sixièmes recouvrent exactement la même longueur : ce sont des fractions égales.', apres: '## 6. Fractions égales' },

  { fiche: 'cm2/maths/grands-nombres', cle: 'tableau-classes-cm2', schema: 'numeration',
    params: { cw: 44, tailleChiffre: 24, tailleTitre: 14, valeurs: false, groupes: [{ titre: 'milliards', n: 3, couleur: ROUGE }, { titre: 'millions', n: 3, couleur: VIOLET }, { titre: 'mille', n: 3, couleur: ORANGE }, { titre: 'unités', n: 3, couleur: BLEU }],
      colonnes: [ROUGE, VIOLET, ORANGE, BLEU].flatMap((c) => ['c', 'd', 'u'].map((t) => ({ titre: t, couleur: c }))).map((cc, i) => ({ ...cc, chiffre: ['', '', '', '', '', '3', '5', '0', '7', '0', '0', '0'][i] })),
      bas: '3 millions  ·  507 mille' },
    legende: 'Le nombre 3 507 000 rangé par classes de trois chiffres : on lit trois millions cinq cent sept mille. La classe des unités, à zéro, ne se dit pas.', apres: '## 1. Les classes et les rangs' },
  { fiche: 'cm2/maths/grands-nombres', cle: 'encadrer-3470', schema: 'droite',
    params: { min: 3400, max: 3500, pas: 10, etiqPas: 5, W: 600, tailleNb: 14, titre: '3 400 < 3 470 < 3 500', yLigne: 116, H: 210,
      points: [{ v: 3470, nom: '3 470', couleur: ROUGE, dessous: true, dy: 54 }], gras: [3400, 3500],
      sauts: [{ de: 3470, a: 3500, texte: '30', couleur: VERT, h: 22 }, { de: 3470, a: 3400, texte: '70', couleur: ATTENUE, h: 30 }],
      textes: [{ x: 300, y: 204, t: 'Arrondi à la centaine : 3 500, la centaine la plus proche.', couleur: VERT }] },
    legende: '3 470 est entre 3 400 et 3 500 ; il est à 30 de 3 500 et à 70 de 3 400, donc on l’arrondit à 3 500.', apres: '## 6. Encadrer et arrondir' },

  { fiche: 'cm2/maths/graphiques-et-donnees', cle: 'batons-fruits-cm2', schema: 'batons',
    params: { titre: 'Fruits préférés de la classe', categories: ['Pommes', 'Bananes', 'Fraises'], valeurs: [8, 5, 10], pas: 1, max: 10, couleurs: [ROUGE, OR, '#d6336c'], nomY: "nombre d'élèves" },
    legende: 'Le bâton des fraises est le plus haut (10) : c’est le fruit préféré. Celui des bananes est le plus bas (5).', apres: '## 2. Le diagramme en bâtons' },
  { fiche: 'cm2/maths/graphiques-et-donnees', cle: 'courbe-temperature', schema: 'courbe-temperature', params: {},
    legende: 'Exemple de relevé : le temps est sur l’axe horizontal, la température sur l’axe vertical. La courbe monte jusqu’à 14 h, puis descend.', apres: '## 3. Le graphique avec une courbe' },
  { fiche: 'cm2/maths/graphiques-et-donnees', cle: 'pictogramme-livres', schema: 'pictogramme',
    params: { titre: 'Livres empruntés à la bibliothèque', icone: 'livre', legende: '= 5 livres', lignes: [{ nom: 'Lundi', n: 4, total: '20 livres' }, { nom: 'Mardi', n: 2, total: '10 livres' }, { nom: 'Mercredi', n: 6, total: '30 livres' }] },
    legende: 'Une image vaut 5 livres : lundi, 4 images représentent 4 × 5 = 20 livres.', apres: '## 4. Le pictogramme' },

  { fiche: 'cm2/maths/operations-sur-les-decimaux', cle: 'aligner-virgules-cm2', schema: 'pose',
    params: { cw: 58, colonnes: [{ titre: 'd', couleur: VERT }, { titre: 'u', couleur: BLEU }, { virgule: true }, { titre: '1/10', couleur: ROUGE }, { titre: '1/100', couleur: VIOLET }], retenues: { 1: '1' },
      lignes: [{ cells: ['1', '2', ',', '4', { t: '0', couleur: ATTENUE }] }, { signe: '+', cells: ['', '3', ',', '7', '5'] }], resultat: ['1', '6', ',', '1', '5'],
      notes: [{ ligne: 0, texte: '12,4 = 12,40', couleur: ATTENUE }, { ligne: 'res', texte: 'virgule sous virgule', couleur: ROUGE }] },
    legende: 'Pour 12,4 + 3,75, on aligne les virgules et on écrit 12,40 ; les dixièmes donnent 11, on retient 1. Le résultat est 16,15.', apres: '## 1. Additionner et soustraire' },
  { fiche: 'cm2/maths/operations-sur-les-decimaux', cle: 'fois-10-decimal', schema: 'glissement',
    params: { rangs: ['centaines', 'dizaines', 'unités', 'dixièmes', 'centièmes'], couleurs: [ORANGE, VERT, BLEU, ROUGE, VIOLET], cw: 78, haut: { 2: '3', 3: '7', 4: '2' }, bas: { 1: '3', 2: '7', 3: '2' }, virguleApres: 2, fl: -1, etiquetteHaut: '3,72', etiquetteBas: '× 10 = 37,2', W: 600 },
    legende: 'Multiplier par 10 : chaque chiffre avance d’un rang vers la gauche, comme si la virgule se déplaçait d’un rang vers la droite. 3,72 × 10 = 37,2.', apres: '## 2. Multiplier par 10, 100, 1000' },
  { fiche: 'cm2/maths/operations-sur-les-decimaux', cle: 'divise-10-decimal', schema: 'glissement',
    params: { rangs: ['centaines', 'dizaines', 'unités', 'dixièmes', 'centièmes'], couleurs: [ORANGE, VERT, BLEU, ROUGE, VIOLET], cw: 78, haut: { 1: '4', 2: '5', 3: '6' }, bas: { 2: '4', 3: '5', 4: '6' }, virguleApres: 2, fl: 1, etiquetteHaut: '45,6', etiquetteBas: '÷ 10 = 4,56', W: 600 },
    legende: 'Diviser par 10 : chaque chiffre recule d’un rang vers la droite, comme si la virgule se déplaçait d’un rang vers la gauche. 45,6 ÷ 10 = 4,56.', apres: '## 3. Diviser par 10, 100, 1000' },

  { fiche: 'cm2/maths/problemes', cle: 'methode-4-etapes', schema: 'etapes',
    params: { liste: ["Je lis l'énoncé en entier.", 'Je repère la question.', "Je choisis l'opération et je calcule.", 'Je vérifie et je réponds par une phrase.'] },
    legende: 'Les quatre étapes pour résoudre un problème, toujours dans le même ordre.', apres: '## 1. La méthode en quatre étapes' },
  { fiche: 'cm2/maths/problemes', cle: 'probleme-plusieurs-etapes', schema: 'barres',
    params: { unite: 34, x0: 110, W: 560, lignes: [
      { nom: '3 cahiers', segments: [{ v: 2, texte: '2 €' }, { v: 2, texte: '2 €' }, { v: 2, texte: '2 €' }], accolades: [{ de: 0, a: 6, texte: '3 × 2 = 6 €', haut: true, couleur: BLEU }] },
      { nom: '2 stylos', segments: [{ v: 3, texte: '3 €', couleur: VERT }, { v: 3, texte: '3 €', couleur: VERT }], accolades: [{ de: 0, a: 6, texte: '2 × 3 = 6 €', haut: true, couleur: VERT }] },
      { nom: 'Total', segments: [{ v: 6, texte: '6 €', couleur: BLEU }, { v: 6, texte: '6 €', couleur: VERT }], accolades: [{ de: 0, a: 12, texte: '6 + 6 = 12 €' }] }] },
    legende: 'On calcule d’abord le prix des cahiers (6 €) et celui des stylos (6 €), puis on additionne les deux résultats : 12 €.', apres: '## 4. Les problèmes à plusieurs étapes' },

  { fiche: 'cm2/maths/proportionnalite-et-pourcentages', cle: 'passage-unite-cm2', schema: 'proportion',
    params: { titres: ['Nombre de cahiers', 'Prix (en €)'], haut: ['4', '1', '6'], bas: ['12', '3', '18'], fleches: [{ de: 0, a: 1, texte: '÷ 4' }, { de: 1, a: 2, texte: '× 6' }, { de: 0, a: 1, texte: '÷ 4', bas: true }, { de: 1, a: 2, texte: '× 6', bas: true }] },
    legende: 'Le passage à l’unité : 4 cahiers coûtent 12 €, donc 1 cahier coûte 12 ÷ 4 = 3 €, et 6 cahiers coûtent 6 × 3 = 18 €.', apres: "## 2. Le passage à l'unité (la règle de trois)" },
  { fiche: 'cm2/maths/proportionnalite-et-pourcentages', cle: 'grilles-pourcentages', schema: 'pourcents', params: {},
    legende: 'Sur une grille de 100 cases : 50 cases colorées font 50 % (la moitié), 25 cases font 25 % (le quart), 10 cases font 10 % (un dixième).', apres: '## 4. Les pourcentages' },
  { fiche: 'cm2/maths/proportionnalite-et-pourcentages', cle: 'reduction-25', schema: 'barres',
    params: { unite: 12, x0: 90, W: 600, lignes: [{ segments: [{ v: 10, texte: '10 €', vide: true, couleur: ROUGE }, { v: 10, texte: '10 €' }, { v: 10, texte: '10 €' }, { v: 10, texte: '10 €' }],
      accolades: [{ de: 0, a: 40, texte: 'prix de départ : 40 €', haut: true }, { de: 0, a: 10, texte: '25 % = 10 €', couleur: ROUGE }, { de: 10, a: 40, texte: 'nouveau prix : 30 €', couleur: VERT }] }] },
    legende: '40 € partagés en 4 quarts de 10 € : la réduction de 25 % enlève un quart, soit 10 €. Le pull coûte alors 30 €.', apres: '## 6. Les réductions' },

  { fiche: 'cm2/maths/solides-et-patrons', cle: 'solides-cm2', schema: 'solides',
    params: { cw: 200, liste: [
      { type: 'cube', nom: 'le cube', info: '6 faces, 12 arêtes, 8 sommets' }, { type: 'pave', nom: 'le pavé droit', info: '6 faces, 12 arêtes, 8 sommets' }, { type: 'pyramide', nom: 'la pyramide', info: '5 faces, 8 arêtes, 5 sommets' },
      { type: 'cylindre', nom: 'le cylindre', info: '2 disques et 1 face courbe' }, { type: 'cone', nom: 'le cône', info: '1 disque, 1 face courbe' }, { type: 'boule', nom: 'la boule', info: '1 face courbe, 0 sommet' },
    ] },
    legende: 'Les six solides à connaître. Les arêtes cachées sont dessinées en pointillés ; la pyramide a une base carrée.', apres: '## 2. Les solides à connaître' },
  { fiche: 'cm2/maths/solides-et-patrons', cle: 'patrons-cm2', schema: 'patrons', params: {},
    legende: 'Des patrons à plat : 6 carrés pour le cube, 6 rectangles pour le pavé, 1 carré et 4 triangles pour la pyramide, 2 disques et 1 rectangle pour le cylindre.', apres: '## 4. Reconnaître un solide par son patron' },

  { fiche: 'cm2/maths/symetrie-axiale', cle: 'axes-figures-cm2', schema: 'formes',
    params: { parLigne: 4, cw: 150, liste: [
      { type: 'carre', nom: 'carré', info: '4 axes', couleur: BLEU, axes: true },
      { type: 'rectangle', nom: 'rectangle', info: '2 axes', couleur: VERT, axes: true },
      { type: 'losange', nom: 'losange', info: '2 axes', couleur: VIOLET, axes: true },
      { type: 'equilateral', nom: 'triangle équilatéral', info: '3 axes', couleur: ORANGE, axes: true },
      { type: 'isocele', nom: 'triangle isocèle', info: '1 axe', couleur: VERT, axes: true },
      { type: 'triangle', nom: 'triangle quelconque', info: 'aucun axe', couleur: ATTENUE },
      { type: 'pentagone', nom: 'pentagone régulier', info: '5 axes', couleur: BLEU, axes: true },
      { type: 'cercle', nom: 'cercle', info: 'une infinité', couleur: VIOLET, axes: true },
    ] },
    legende: 'Les axes de symétrie en pointillés rouges : un polygone régulier a autant d’axes que de côtés ; pour le cercle, seuls quelques axes sont dessinés.', apres: '## 2. Compter les axes de symétrie' },
  { fiche: 'cm2/maths/symetrie-axiale', cle: 'symetrique-quadrillage-cm2', schema: 'quadrillage',
    params: { cols: 12, rows: 6, c: 40, axe: { x: 6 },
      polys: [{ pts: [[2, 1], [4, 5], [1, 5]], couleur: BLEU }, { pts: [[10, 1], [8, 5], [11, 5]], couleur: VERT, fond: pale(VERT) }],
      segments: [[2, 1, 10, 1, ATTENUE, 1.4, true], [4, 5, 8, 5, ATTENUE, 1.4, true]],
      points: [{ i: 2, j: 1, nom: 'A', dx: -14, dy: 0, couleur: BLEU }, { i: 4, j: 5, nom: 'B', dx: 4, dy: 22, couleur: BLEU }, { i: 1, j: 5, nom: 'C', dx: -14, dy: 0, couleur: BLEU },
        { i: 10, j: 1, nom: 'A′', dx: 16, dy: 0, couleur: VERT }, { i: 8, j: 5, nom: 'B′', dx: -4, dy: 22, couleur: VERT }, { i: 11, j: 5, nom: 'C′', dx: 18, dy: 0, couleur: VERT }] },
    legende: 'Chaque sommet est reporté de l’autre côté de l’axe, sur la même ligne et au même nombre de carreaux : A est à 4 carreaux de l’axe, A′ aussi.', apres: '## 4. Construire le symétrique sur un quadrillage' },
];
