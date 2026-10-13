/**
 * Lot « techno » : schémas des fiches de technologie (collège), SNT, NSI et SI (lycée).
 *
 * Chaînes d'énergie et d'information, algorigrammes, réseaux, client-serveur,
 * structures de données, graphes, mécanique, résistance des matériaux…
 * Tout ce qui peut être calculé l'est : plus courts chemins (Dijkstra), parcours
 * en largeur et en profondeur, étapes des tris, codage binaire, rendements,
 * courbes (réponse indicielle, complexités, mouvements), angles et longueurs.
 */
import { enveloppe, texte, ligne, fleche, boite, cercle, polygone, nb, esc, ENCRE, GRILLE, AXE, BLEU, ROUGE, VERT, ORANGE, VIOLET, ATTENUE, POLICE } from './base.mjs';

// ───────────────────────────── outils communs ─────────────────────────────

const FONDS = { bleu: '#eef3fb', vert: '#e8f5ee', orange: '#fdf0e3', rouge: '#fbeaea', violet: '#f3ecfa', gris: '#f1f4f7', blanc: '#ffffff' };
const TEINTES = { bleu: BLEU, vert: VERT, orange: ORANGE, rouge: ROUGE, violet: VIOLET, gris: ATTENUE, encre: ENCRE };
const tc = (c) => TEINTES[c] || c || ENCRE;
const fc = (c) => FONDS[c] || '#f1f4f7';
const MONO = 'DejaVu Sans Mono,Menlo,Consolas,monospace';
const milliers = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f');
const virg = (v, d = 2) => String(Math.round(v * 10 ** d) / 10 ** d).replace('.', ',');

function rect(x, y, w, h, { fond = 'none', bord = ENCRE, ep = 1.8, rx = 0, pointilles = false, opacite = 1 } = {}) {
  return `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(w)}" height="${nb(h)}" rx="${rx}" fill="${fond}" fill-opacity="${opacite}" stroke="${bord}" stroke-width="${ep}"${pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
}
function chemin(d, { couleur = ENCRE, ep = 2, fond = 'none', pointilles = false, opacite = 1 } = {}) {
  return `<path d="${d}" fill="${fond}" fill-opacity="${opacite}" stroke="${couleur}" stroke-width="${ep}" stroke-linejoin="round" stroke-linecap="round"${pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
}
function ellipse(cx, cy, rx, ry, { fond = 'none', bord = ENCRE, ep = 1.8 } = {}) {
  return `<ellipse cx="${nb(cx)}" cy="${nb(cy)}" rx="${nb(rx)}" ry="${nb(ry)}" fill="${fond}" stroke="${bord}" stroke-width="${ep}"/>`;
}
/** Texte en police à chasse fixe. */
function mono(x, y, s, { taille = 15, couleur = ENCRE, ancre = 'start', gras = false } = {}) {
  return `<text x="${nb(x)}" y="${nb(y)}" font-size="${taille}" fill="${couleur}" text-anchor="${ancre}" font-family="${MONO}"${gras ? ' font-weight="700"' : ''}>${esc(String(s).replace(/ /g, '\u00a0'))}</text>`;
}
/** Polyligne terminée par une pointe de flèche. */
function flecheChemin(pts, { couleur = ENCRE, epaisseur = 2, pointe = 10, pointilles = false } = {}) {
  let s = '';
  for (let i = 0; i < pts.length - 2; i++) s += ligne(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], { couleur, epaisseur, pointilles });
  const a = pts[pts.length - 2];
  const b = pts[pts.length - 1];
  return s + fleche(a[0], a[1], b[0], b[1], { couleur, epaisseur, pointe, pointilles });
}
/** Boîte avec un titre en gras et un sous-texte (composants, exemples). */
function boite2(x, y, w, h, titre, sous = '', { couleur = 'bleu', tt = 14, ts = 12 } = {}) {
  const lt = String(titre).split('\n');
  const ls = sous ? String(sous).split('\n') : [];
  const hTot = lt.length * tt * 1.2 + (ls.length ? 4 + ls.length * ts * 1.2 : 0);
  const y0 = y + h / 2 - hTot / 2 + tt * 0.85;
  return (
    rect(x, y, w, h, { fond: fc(couleur), bord: tc(couleur), rx: 8 }) +
    texte(x + w / 2, y0, titre, { taille: tt, gras: true, couleur: ENCRE, interligne: 1.2 }) +
    (ls.length ? texte(x + w / 2, y0 + lt.length * tt * 1.2 + 4 - tt * 0.2 + ts * 0.15, sous, { taille: ts, couleur: ATTENUE, interligne: 1.2 }) : '')
  );
}
/** Point du bord d'un rectangle (centre cx, cy) dans la direction de (tx, ty). */
function bordRect(cx, cy, w, h, tx, ty) {
  const dx = tx - cx;
  const dy = ty - cy;
  if (dx === 0 && dy === 0) return [cx, cy];
  const k = Math.min(dx ? w / 2 / Math.abs(dx) : Infinity, dy ? h / 2 / Math.abs(dy) : Infinity);
  return [cx + dx * k, cy + dy * k];
}
/** Point du bord d'un cercle. */
function bordCercle(cx, cy, r, tx, ty) {
  const d = Math.hypot(tx - cx, ty - cy) || 1;
  return [cx + ((tx - cx) * r) / d, cy + ((ty - cy) * r) / d];
}
/** Accolade horizontale sous [x1, x2] à la hauteur y (pointe vers le bas). */
function accolade(x1, x2, y, { couleur = ENCRE, h = 10 } = {}) {
  const m = (x1 + x2) / 2;
  return chemin(`M ${nb(x1)} ${nb(y)} Q ${nb(x1)} ${nb(y + h / 2)} ${nb(x1 + 8)} ${nb(y + h / 2)} L ${nb(m - 6)} ${nb(y + h / 2)} Q ${nb(m)} ${nb(y + h / 2)} ${nb(m)} ${nb(y + h)} Q ${nb(m)} ${nb(y + h / 2)} ${nb(m + 6)} ${nb(y + h / 2)} L ${nb(x2 - 8)} ${nb(y + h / 2)} Q ${nb(x2)} ${nb(y + h / 2)} ${nb(x2)} ${nb(y)}`, { couleur, ep: 1.6 });
}

// ───────────────────────────── schémas génériques ─────────────────────────────

/**
 * Chaîne fonctionnelle (énergie ou information).
 * blocs = [{ f: 'ALIMENTER', c: 'pile, prise' }], flux = libellés entre les blocs (mode vertical),
 * entree / sortie = textes aux extrémités. vertical = true conseillé pour 4 blocs ou plus.
 */
function sChaine({ blocs = [], couleur = 'bleu', entree = '', sortie = '', flux = [], vertical = false, W, hb } = {}) {
  const n = blocs.length;
  let g = '';
  if (!vertical) {
    W = W || 640;
    const m = 12;
    const ea = entree ? 92 : 0;
    const sa = sortie ? 100 : 0;
    const gap = 30;
    const bw = (W - 2 * m - ea - sa - (n - 1) * gap) / n;
    const h = hb || 72;
    const nLignes = Math.max(String(entree).split('\n').length, String(sortie).split('\n').length);
    const y0 = 14 + nLignes * 15 + 8;
    const ym = y0 + h / 2;
    const xs = blocs.map((_, i) => m + ea + i * (bw + gap));
    blocs.forEach((b, i) => {
      g += boite2(xs[i], y0, bw, h, b.f, b.c || '', { couleur: b.couleur || couleur });
      if (i < n - 1) g += fleche(xs[i] + bw + 2, ym, xs[i + 1] - 2, ym, { couleur: tc(couleur) });
    });
    if (entree) {
      g += fleche(m, ym, xs[0] - 2, ym, { couleur: ENCRE });
      g += texte(m + ea / 2 - 4, ym - 10 - (String(entree).split('\n').length - 1) * 15, entree, { taille: 12, couleur: ATTENUE });
    }
    if (sortie) {
      const xd = xs[n - 1] + bw + 2;
      g += fleche(xd, ym, W - m, ym, { couleur: ENCRE });
      g += texte((xd + W - m) / 2 + 2, ym - 10 - (String(sortie).split('\n').length - 1) * 15, sortie, { taille: 12, couleur: ATTENUE });
    }
    return enveloppe(W, y0 + h + 16, g);
  }
  // Vertical
  W = W || 440;
  const bw = 230;
  const h = hb || 58;
  const gap = 46;
  const x0 = flux.some((f) => f) ? 26 : (W - bw) / 2;
  const xc = x0 + bw / 2;
  let y = 14;
  if (entree) {
    const l = String(entree).split('\n').length;
    g += texte(xc, y + 12, entree, { taille: 12, couleur: ATTENUE });
    y += 12 + (l - 1) * 15 + 6;
    g += fleche(xc, y, xc, y + 24, { couleur: ENCRE });
    y += 26;
  }
  blocs.forEach((b, i) => {
    g += boite2(x0, y, bw, h, b.f, b.c || '', { couleur: b.couleur || couleur });
    y += h;
    if (i < n - 1) {
      g += fleche(xc, y + 2, xc, y + gap - 2, { couleur: tc(couleur) });
      if (flux[i]) g += texte(xc + 14, y + gap / 2 + 5 - (String(flux[i]).split('\n').length - 1) * 7, flux[i], { taille: 12, couleur: tc(couleur), ancre: 'start', italique: true });
      y += gap;
    }
  });
  if (sortie) {
    g += fleche(xc, y + 2, xc, y + 28, { couleur: ENCRE });
    y += 30;
    const ls = String(sortie).split('\n');
    g += rect(xc - 105, y, 210, 14 + ls.length * 16, { fond: fc('vert'), bord: VERT, rx: 18 });
    g += texte(xc, y + 19, sortie, { taille: 13, gras: true, couleur: VERT, interligne: 1.2 });
    y += 14 + ls.length * 16;
  }
  return enveloppe(W, y + 14, g);
}

/**
 * Les deux chaînes d'un système automatisé : information (3 blocs) et énergie (4 blocs + action).
 */
function sDeuxChaines({ info, energie, action = 'Action sur la\nmatière d’œuvre', ordres = 'ordres', retour = 'informations mesurées (capteurs)', entreeInfo = '', W = 660 } = {}) {
  const mL = 34;
  const mR = 12;
  const cw = (W - mL - mR) / 5;
  const bw = 116;
  const X = (i) => mL + i * cw + (cw - bw) / 2;
  const C = (i) => mL + i * cw + cw / 2;
  let g = '';
  const yI = 58;
  const hB = 58;
  // Bande « information »
  g += rect(mL - 6, 26, 3 * cw + 10, 102, { fond: '#f6f9fe', bord: BLEU, ep: 1.2, rx: 10, pointilles: true });
  g += texte(mL + 2, 44, 'Chaîne d’information', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  info.forEach((b, i) => {
    g += boite2(X(i), yI, bw, hB, b.f, b.c || '', { couleur: 'bleu', tt: 13 });
    if (i < 2) g += fleche(X(i) + bw + 2, yI + hB / 2, X(i + 1) - 2, yI + hB / 2, { couleur: BLEU });
  });
  // Ordres : de COMMUNIQUER vers DISTRIBUER
  const yE = 190;
  g += flecheChemin([[C(2), yI + hB + 2], [C(2), 154], [C(1), 154], [C(1), yE - 2]], { couleur: VIOLET });
  g += texte((C(1) + C(2)) / 2, 148, ordres, { taille: 13, couleur: VIOLET, gras: true });
  // Bande « énergie »
  g += rect(mL - 6, 166, 5 * cw + 2, 100, { fond: '#fffaf4', bord: ORANGE, ep: 1.2, rx: 10, pointilles: true });
  g += texte(mL + 2, 182, 'Chaîne d’énergie', { taille: 13, gras: true, couleur: ORANGE, ancre: 'start' });
  energie.forEach((b, i) => {
    g += boite2(X(i), yE, bw, hB, b.f, b.c || '', { couleur: 'orange', tt: 13 });
    g += fleche(X(i) + bw + 2, yE + hB / 2, (i < 3 ? X(i + 1) : C(4) - 52) - 2, yE + hB / 2, { couleur: ORANGE });
  });
  g += ellipse(C(4), yE + hB / 2, 54, 32, { fond: fc('vert'), bord: VERT });
  g += texte(C(4), yE + hB / 2 - 3, action, { taille: 12, gras: true, couleur: VERT, interligne: 1.2 });
  let H = 280;
  if (retour) {
    const yb = 288;
    g += flecheChemin([[C(4), yE + hB / 2 + 32], [C(4), yb], [14, yb], [14, yI + hB / 2], [X(0) - 2, yI + hB / 2]], { couleur: ATTENUE, pointilles: true, epaisseur: 1.8 });
    g += texte(W / 2, yb + 18, retour, { taille: 12, couleur: ATTENUE, italique: true });
    H = 316;
  }
  if (entreeInfo) g += texte(C(0), 20, entreeInfo, { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, g);
}

/**
 * Algorigramme générique : noeuds { id: { t: 'debut'|'fin'|'action'|'test'|'es', x, y, w, h, texte } }
 * (x, y = centre), liens [{ de, a, s: 'b'|'t'|'l'|'r', e: 't'|'b'|'l'|'r', via: [[x, y]], label, lx, ly }].
 */
function sAlgorigramme({ W = 520, H = 400, noeuds = {}, liens = [], textes = [] } = {}) {
  let g = '';
  const dims = {};
  for (const [id, n] of Object.entries(noeuds)) {
    const w = n.w || (n.t === 'test' ? 190 : 170);
    const h = n.h || (n.t === 'test' ? 72 : 44);
    dims[id] = { ...n, w, h };
    const lignes = String(n.texte).split('\n');
    const ty = n.y - ((lignes.length - 1) * 14 * 1.2) / 2 + 5;
    if (n.t === 'debut' || n.t === 'fin') {
      g += rect(n.x - w / 2, n.y - h / 2, w, h, { fond: fc('vert'), bord: VERT, rx: h / 2 });
      g += texte(n.x, ty, n.texte, { taille: 14, gras: true, couleur: VERT, interligne: 1.2 });
    } else if (n.t === 'test') {
      g += polygone([[n.x, n.y - h / 2], [n.x + w / 2, n.y], [n.x, n.y + h / 2], [n.x - w / 2, n.y]], { couleur: ORANGE, fond: fc('orange'), opacite: 1, epaisseur: 1.8 });
      g += texte(n.x, ty, n.texte, { taille: 13, couleur: ENCRE, interligne: 1.2 });
    } else if (n.t === 'es') {
      const d = 12;
      g += polygone([[n.x - w / 2 + d, n.y - h / 2], [n.x + w / 2 + d, n.y - h / 2], [n.x + w / 2 - d, n.y + h / 2], [n.x - w / 2 - d, n.y + h / 2]], { couleur: VIOLET, fond: fc('violet'), opacite: 1, epaisseur: 1.8 });
      g += texte(n.x, ty, n.texte, { taille: 13, couleur: ENCRE, interligne: 1.2 });
    } else {
      g += rect(n.x - w / 2, n.y - h / 2, w, h, { fond: fc('bleu'), bord: BLEU, rx: 4 });
      g += texte(n.x, ty, n.texte, { taille: 13, couleur: ENCRE, interligne: 1.2 });
    }
  }
  const ancre = (n, c) => ({ t: [n.x, n.y - n.h / 2], b: [n.x, n.y + n.h / 2], l: [n.x - n.w / 2, n.y], r: [n.x + n.w / 2, n.y] }[c]);
  for (const l of liens) {
    const A = dims[l.de];
    const B = dims[l.a];
    const p0 = ancre(A, l.s || 'b');
    const p1 = ancre(B, l.e || 't');
    const pts = [p0, ...(l.via || []), p1];
    g += flecheChemin(pts, { couleur: ENCRE, epaisseur: 1.8, pointe: 9 });
    if (l.label) {
      const lx = l.lx !== undefined ? l.lx : p0[0] + (l.s === 'r' ? 18 : l.s === 'l' ? -18 : 14);
      const ly = l.ly !== undefined ? l.ly : p0[1] + (l.s === 'b' ? 16 : -6);
      g += texte(lx, ly, l.label, { taille: 13, gras: true, couleur: l.label === 'non' ? ROUGE : VERT, ancre: 'middle' });
    }
  }
  for (const t of textes) g += texte(t.x, t.y, t.s, { taille: t.taille || 12, couleur: tc(t.couleur || 'gris'), ancre: t.ancre || 'middle', italique: !!t.italique, gras: !!t.gras });
  return enveloppe(W, H, g);
}

/** Diagramme « bête à cornes ». */
function sBeteACornes({ qui, quoi, systeme, but, W = 620 } = {}) {
  let g = '';
  const bw = 230;
  const bh = 64;
  const xL = 20;
  const xR = W - 20 - bw;
  g += boite2(xL, 16, bw, bh, 'À qui rend-il service ?', qui, { couleur: 'bleu', tt: 13, ts: 13 });
  g += boite2(xR, 16, bw, bh, 'Sur quoi agit-il ?', quoi, { couleur: 'bleu', tt: 13, ts: 13 });
  const cx = W / 2;
  // Système
  g += rect(cx - 95, 104, 190, 46, { fond: fc('orange'), bord: ORANGE, rx: 23 });
  g += texte(cx, 132, systeme, { taille: 15, gras: true, couleur: ORANGE });
  // Cornes : du système vers chaque boîte
  g += chemin(`M ${nb(cx - 80)} 112 Q ${nb(xL + bw / 2)} 108 ${nb(xL + bw / 2)} ${16 + bh}`, { couleur: ENCRE, ep: 1.8 });
  g += chemin(`M ${nb(cx + 80)} 112 Q ${nb(xR + bw / 2)} 108 ${nb(xR + bw / 2)} ${16 + bh}`, { couleur: ENCRE, ep: 1.8 });
  // Grand arc qui relie les deux boîtes en passant sous le système, puis flèche vers le but
  const yBas = 192;
  g += chemin(`M ${nb(xL + 40)} ${16 + bh} C ${nb(xL + 40)} ${yBas + 10} ${nb(xR + bw - 40)} ${yBas + 10} ${nb(xR + bw - 40)} ${16 + bh}`, { couleur: ENCRE, ep: 1.8 });
  const yArc = 16 + bh + 0.75 * (yBas + 10 - 16 - bh);
  g += fleche(cx, yArc, cx, 226, { couleur: ENCRE });
  g += boite2(cx - 170, 228, 340, 60, 'Dans quel but ?', but, { couleur: 'vert', tt: 13, ts: 13 });
  return enveloppe(W, 302, g);
}

/**
 * Lignes de boîtes reliées par des flèches, avec en-têtes de colonnes.
 * lignes = [['pétrole', 'plastique', 'bouteille'], …], couleurs par colonne.
 */
function sCorrespondances({ entetes = [], lignes = [], couleurs = ['orange', 'bleu', 'vert'], W = 620, hb = 40, gap = 46, fleches = [] } = {}) {
  const nc = lignes[0].length;
  const m = 14;
  const bw = (W - 2 * m - (nc - 1) * gap) / nc;
  let g = '';
  let y = 14;
  if (entetes.length) {
    entetes.forEach((e, j) => (g += texte(m + j * (bw + gap) + bw / 2, y + 14, e, { taille: 13, gras: true, couleur: tc(couleurs[j]) })));
    y += 26;
  }
  lignes.forEach((l) => {
    l.forEach((c, j) => {
      const x = m + j * (bw + gap);
      g += rect(x, y, bw, hb, { fond: fc(couleurs[j]), bord: tc(couleurs[j]), rx: 8 });
      const nl = String(c).split('\n').length;
      g += texte(x + bw / 2, y + hb / 2 + 5 - (nl - 1) * 8, c, { taille: 13, couleur: ENCRE, interligne: 1.2 });
      if (j < nc - 1) {
        g += fleche(x + bw + 3, y + hb / 2, x + bw + gap - 3, y + hb / 2, { couleur: ATTENUE, epaisseur: 1.8, pointe: 8 });
        if (fleches[j]) g += texte(x + bw + gap / 2, y + hb / 2 - 6, fleches[j], { taille: 12, couleur: ATTENUE });
      }
    });
    y += hb + 12;
  });
  return enveloppe(W, y + 4, g);
}

/** Hiérarchie : une boîte racine et ses enfants (avec exemples sous chaque enfant). */
function sFamilles({ racine, enfants = [], W = 640, couleurs = ['orange', 'bleu', 'vert', 'violet', 'rouge'], hEnfant = 46, details = true } = {}) {
  const n = enfants.length;
  const m = 10;
  const gap = 10;
  const bw = (W - 2 * m - (n - 1) * gap) / n;
  let g = '';
  const rw = 220;
  g += rect(W / 2 - rw / 2, 14, rw, 40, { fond: fc('gris'), bord: ENCRE, rx: 20 });
  g += texte(W / 2, 39, racine, { taille: 15, gras: true });
  const yb = 100;
  g += ligne(W / 2, 54, W / 2, 74, { couleur: ATTENUE, epaisseur: 1.6 });
  const cx = (i) => m + i * (bw + gap) + bw / 2;
  g += ligne(cx(0), 74, cx(n - 1), 74, { couleur: ATTENUE, epaisseur: 1.6 });
  let maxL = 0;
  enfants.forEach((e, i) => {
    g += fleche(cx(i), 74, cx(i), yb - 2, { couleur: ATTENUE, epaisseur: 1.6, pointe: 8 });
    const c = couleurs[i % couleurs.length];
    g += rect(cx(i) - bw / 2, yb, bw, hEnfant, { fond: fc(c), bord: tc(c), rx: 8 });
    const nl = String(e.t).split('\n').length;
    g += texte(cx(i), yb + hEnfant / 2 + 5 - (nl - 1) * 8, e.t, { taille: 13, gras: true, couleur: ENCRE, interligne: 1.2 });
    if (details && e.d) {
      const l = String(e.d).split('\n');
      maxL = Math.max(maxL, l.length);
      g += texte(cx(i), yb + hEnfant + 20, e.d, { taille: 12, couleur: ATTENUE, interligne: 1.3 });
    }
  });
  return enveloppe(W, yb + hEnfant + 14 + maxL * 15.6 + 6, g);
}

/** Cycle d'étapes disposées sur une ellipse, reliées par des flèches. */
function sCycle({ etapes = [], couleur = 'bleu', W = 560, H = 330, bw = 150, bh = 44, centre = '', depart = -90, couleurs = null } = {}) {
  const n = etapes.length;
  const cx = W / 2;
  const cy = H / 2;
  const rx = W / 2 - bw / 2 - 12;
  const ry = H / 2 - bh / 2 - 12;
  const P = etapes.map((_, i) => {
    const a = ((depart + (360 * i) / n) * Math.PI) / 180;
    return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)];
  });
  let g = '';
  for (let i = 0; i < n; i++) {
    const [x1, y1] = P[i];
    const [x2, y2] = P[(i + 1) % n];
    const a = bordRect(x1, y1, bw + 10, bh + 10, x2, y2);
    const b = bordRect(x2, y2, bw + 10, bh + 10, x1, y1);
    g += fleche(a[0], a[1], b[0], b[1], { couleur: tc(couleur), epaisseur: 2 });
  }
  etapes.forEach((e, i) => {
    const c = couleurs ? couleurs[i] : couleur;
    g += rect(P[i][0] - bw / 2, P[i][1] - bh / 2, bw, bh, { fond: fc(c), bord: tc(c), rx: 10 });
    const nl = String(e).split('\n').length;
    g += texte(P[i][0], P[i][1] + 5 - (nl - 1) * 8, e, { taille: 13, gras: true, interligne: 1.2 });
  });
  if (centre) g += texte(cx, cy + 5 - (String(centre).split('\n').length - 1) * 8, centre, { taille: 13, couleur: ATTENUE, italique: true, interligne: 1.2 });
  return enveloppe(W, H, g);
}

/** Évolution d'un objet (lignée) : boîtes dans l'ordre chronologique, sans dates. */
function sLignee({ rangees = [], W = 640, axe = 'au fil du temps' } = {}) {
  let g = '';
  let y = 14;
  const m = 12;
  rangees.forEach((r) => {
    g += texte(m, y + 13, r.titre, { taille: 13, gras: true, couleur: tc(r.couleur || 'bleu'), ancre: 'start' });
    y += 22;
    const n = r.items.length;
    const gap = 22;
    const bw = (W - 2 * m - (n - 1) * gap) / n;
    r.items.forEach((it, i) => {
      const x = m + i * (bw + gap);
      g += rect(x, y, bw, 48, { fond: fc(r.couleur || 'bleu'), bord: tc(r.couleur || 'bleu'), rx: 8 });
      const nl = String(it).split('\n').length;
      g += texte(x + bw / 2, y + 29 - (nl - 1) * 8, it, { taille: 13, interligne: 1.2 });
      if (i < n - 1) g += fleche(x + bw + 2, y + 24, x + bw + gap - 2, y + 24, { couleur: ATTENUE, epaisseur: 1.8, pointe: 8 });
    });
    y += 48 + 16;
  });
  g += fleche(m, y + 4, W - m, y + 4, { couleur: ENCRE, epaisseur: 2.2 });
  g += texte(W - m, y + 24, axe, { taille: 12, couleur: ATTENUE, italique: true, ancre: 'end' });
  return enveloppe(W, y + 34, g);
}

/** Petits chronogrammes : signal logique (TOR), analogique, numérique. */
function sSignaux({ panneaux = ['logique', 'analogique'], W = 620 } = {}) {
  const n = panneaux.length;
  const pw = (W - 20 - (n - 1) * 20) / n;
  const H = 210;
  let g = '';
  const f = (t) => 0.5 + 0.32 * Math.sin(2 * Math.PI * t / 0.9) + 0.12 * Math.sin(2 * Math.PI * t / 0.37 + 1);
  panneaux.forEach((p, i) => {
    const x0 = 10 + i * (pw + 20);
    const type = typeof p === 'string' ? p : p.type;
    const titre = (typeof p === 'object' && p.titre) || { logique: 'Signal logique (tout ou rien)', analogique: 'Signal analogique', numerique: 'Signal numérique (0 ou 1)' }[type];
    const ox = x0 + 30;
    const oy = 170;
    const lw = pw - 44;
    const hh = 110;
    g += texte(x0 + pw / 2, 22, titre, { taille: 13, gras: true, couleur: type === 'analogique' ? BLEU : VERT });
    g += fleche(ox, oy, ox + lw + 10, oy, { couleur: AXE, epaisseur: 1.6, pointe: 8 });
    g += fleche(ox, oy, ox, oy - hh - 22, { couleur: AXE, epaisseur: 1.6, pointe: 8 });
    g += texte(ox + lw + 8, oy + 18, 'temps', { taille: 12, couleur: ATTENUE, ancre: 'end' });
    if (type === 'analogique') {
      let d = '';
      for (let k = 0; k <= 200; k++) {
        const t = k / 200;
        d += `${k ? 'L' : 'M'} ${nb(ox + t * lw)} ${nb(oy - f(t * 1.6) * hh)} `;
      }
      g += chemin(d.trim(), { couleur: BLEU, ep: 2.6 });
      g += texte(ox + 10, oy - hh - 12, 'valeur', { taille: 12, couleur: ATTENUE, ancre: 'start' });
      g += texte(x0 + pw / 2 + 10, oy + 34, 'une infinité de valeurs possibles', { taille: 12, couleur: ATTENUE, italique: true });
    } else {
      const bits = [0, 1, 1, 0, 1, 0, 0, 1];
      const yv = (b) => oy - (b ? hh * 0.8 : 8);
      let d = `M ${nb(ox)} ${nb(yv(bits[0]))}`;
      bits.forEach((b, k) => {
        const xa = ox + (k * lw) / bits.length;
        const xb = ox + ((k + 1) * lw) / bits.length;
        d += ` L ${nb(xa)} ${nb(yv(b))} L ${nb(xb)} ${nb(yv(b))}`;
        g += texte((xa + xb) / 2, oy - hh * 0.8 - 12, String(b), { taille: 13, gras: true, couleur: VERT });
      });
      g += chemin(d, { couleur: VERT, ep: 2.6 });
      g += texte(ox - 6, yv(1) + 4, '1', { taille: 12, couleur: ATTENUE, ancre: 'end' });
      g += texte(ox - 6, yv(0) + 4, '0', { taille: 12, couleur: ATTENUE, ancre: 'end' });
      g += texte(x0 + pw / 2 + 10, oy + 34, 'deux valeurs seulement : 0 ou 1', { taille: 12, couleur: ATTENUE, italique: true });
    }
  });
  return enveloppe(W, H + 6, g);
}

/** Diagramme de séquence (client / serveur) : acteurs en colonnes, messages en flèches. */
function sSequence({ acteurs = [], messages = [], W = 600, pas = 54, notes = [] } = {}) {
  const n = acteurs.length;
  const m = 20;
  const cw = (W - 2 * m) / n;
  const X = (i) => m + cw * i + cw / 2;
  let g = '';
  const yHaut = 14;
  const ah = 50;
  const yDeb = yHaut + ah + 30;
  const yFin = yDeb + messages.length * pas;
  acteurs.forEach((a, i) => {
    g += ligne(X(i), yHaut + ah, X(i), yFin, { couleur: AXE, epaisseur: 1.6, pointilles: true });
    g += boite2(X(i) - Math.min(cw - 16, 170) / 2, yHaut, Math.min(cw - 16, 170), ah, a.nom, a.sous || '', { couleur: a.couleur || 'bleu', tt: 14 });
  });
  messages.forEach((ms, k) => {
    const y = yDeb + k * pas + 14;
    const a = X(ms.de);
    const b = X(ms.a);
    const c = tc(ms.couleur || (ms.de < ms.a ? 'bleu' : 'vert'));
    g += fleche(a + Math.sign(b - a) * 4, y, b - Math.sign(b - a) * 4, y, { couleur: c, epaisseur: 2.2, pointilles: !!ms.pointilles });
    const ls = String(ms.texte).split('\n');
    const lmax = Math.max(...ls.map((l) => l.length)) * 7.2 + 10;
    g += rect((a + b) / 2 - lmax / 2, y - 22 - (ls.length - 1) * 15, lmax, ls.length * 15 + 6, { fond: '#ffffff', bord: 'none', ep: 0 });
    g += texte((a + b) / 2, y - 8 - (ls.length - 1) * 15, ms.texte, { taille: 13, couleur: c, gras: false });
  });
  notes.forEach((nt) => (g += texte(nt.x, nt.y, nt.s, { taille: 12, couleur: ATTENUE, italique: true, ancre: nt.ancre || 'middle' })));
  return enveloppe(W, yFin + 12, g);
}

/** Adresse (URL) décomposée en parties, avec accolades et noms. */
function sUrl({ parties = [], taille = 19, W = 620 } = {}) {
  const cw = taille * 0.602;
  const total = parties.reduce((s, p) => s + p.t.length, 0) * cw;
  let x = (W - total) / 2;
  let g = '';
  const y = 44;
  const couleurs = [BLEU, VERT, ORANGE, VIOLET, ROUGE];
  let k = 0;
  parties.forEach((p, i) => {
    const w = p.t.length * cw;
    const c = p.nom ? couleurs[k % couleurs.length] : ATTENUE;
    p.t.split('').forEach((ch, j) => (g += mono(x + j * cw + cw / 2, y, ch, { taille, couleur: c, ancre: 'middle', gras: !!p.nom })));
    if (p.nom) {
      g += accolade(x + 1, x + w - 1, y + 10, { couleur: c, h: 12 });
      const ly = y + 42 + (p.decale ? 34 : 0);
      if (p.decale) g += ligne(x + w / 2, y + 26, x + w / 2, ly - 14, { couleur: c, epaisseur: 1.2 });
      g += texte(x + w / 2, ly, p.nom, { taille: 13, gras: true, couleur: c });
      k++;
    }
    x += w;
  });
  const dec = parties.some((p) => p.decale);
  return enveloppe(W, dec ? 130 : 96, g);
}

/**
 * Graphe non orienté (ou orienté) avec sommets placés, poids éventuels,
 * chemin le plus court calculé (Dijkstra) et surligné.
 */
function dijkstra(sommets, aretes, depart, arrivee, poidsDe = (a) => a[2] ?? 1) {
  const dist = {};
  const prec = {};
  const fait = new Set();
  for (const s of Object.keys(sommets)) dist[s] = Infinity;
  dist[depart] = 0;
  for (;;) {
    let u = null;
    for (const s of Object.keys(sommets)) if (!fait.has(s) && dist[s] < Infinity && (u === null || dist[s] < dist[u])) u = s;
    if (u === null) break;
    fait.add(u);
    for (const a of aretes) {
      const [x, y] = a;
      for (const [p, q] of [[x, y], [y, x]]) {
        if (p !== u) continue;
        const nd = dist[u] + poidsDe(a);
        if (nd < dist[q]) { dist[q] = nd; prec[q] = u; }
      }
    }
  }
  const ch = [arrivee];
  while (ch[0] !== depart) ch.unshift(prec[ch[0]]);
  return { chemin: ch, dist: dist[arrivee], dists: dist };
}
function dessinGraphe({ sommets, aretes, r = 20, chemins = [], oriente = false, poids = true, etiquettes = {}, couleursSommets = {}, tailleNom = 15, decalPoids = {} }) {
  let g = '';
  const surArete = (a) => {
    for (const c of chemins) {
      for (let i = 0; i < c.chemin.length - 1; i++) {
        const [p, q] = [c.chemin[i], c.chemin[i + 1]];
        if ((a[0] === p && a[1] === q) || (a[0] === q && a[1] === p)) return c;
      }
    }
    return null;
  };
  for (const a of aretes) {
    const [x1, y1] = sommets[a[0]];
    const [x2, y2] = sommets[a[1]];
    const c = surArete(a);
    const p = bordCercle(x1, y1, r, x2, y2);
    const q = bordCercle(x2, y2, r + (oriente ? 2 : 0), x1, y1);
    if (c) g += ligne(p[0], p[1], q[0], q[1], { couleur: tc(c.couleur), epaisseur: 7 }).replace('stroke-linecap', 'stroke-opacity="0.3" stroke-linecap');
    g += oriente ? fleche(p[0], p[1], q[0], q[1], { couleur: ENCRE, epaisseur: 2, pointe: 10 }) : ligne(p[0], p[1], q[0], q[1], { couleur: ENCRE, epaisseur: 2 });
    if (poids && a[2] !== undefined) {
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const len = Math.hypot(x2 - x1, y2 - y1);
      const k = decalPoids[a[0] + a[1]] ?? 13;
      const nx = (-(y2 - y1) / len) * k;
      const ny = ((x2 - x1) / len) * k;
      const lab = a[3] !== undefined ? a[3] : String(a[2]);
      g += rect(mx + nx - lab.length * 4.2 - 4, my + ny - 10, lab.length * 8.4 + 8, 19, { fond: '#ffffff', bord: 'none', ep: 0 });
      g += texte(mx + nx, my + ny + 5, lab, { taille: 13, gras: true, couleur: ATTENUE });
    }
  }
  for (const [s, [x, y]] of Object.entries(sommets)) {
    const c = couleursSommets[s] || 'bleu';
    g += cercle(x, y, r, { couleur: tc(c), fond: fc(c), epaisseur: 2.2 });
    g += texte(x, y + tailleNom * 0.36, s, { taille: tailleNom, gras: true });
    if (etiquettes[s]) {
      const e = etiquettes[s];
      g += texte(x + (e.dx || 0), y + (e.dy || -r - 8), e.s, { taille: 12, couleur: tc(e.couleur || 'gris'), gras: !!e.gras, ancre: e.ancre || 'middle', italique: !!e.italique });
    }
  }
  return g;
}

// ───────────────────────────── collège : dessins particuliers ─────────────────────────────

/** Bloc de programme façon Scratch (rectangle à encoche). */
function blocScratch(x, y, w, s, { couleur = BLEU, fond = '#e3eeff', chapeau = false, h = 34 } = {}) {
  let d;
  if (chapeau) {
    d = `M ${x} ${y + 14} Q ${x + 40} ${y - 8} ${x + 80} ${y + 10} L ${x + w} ${y + 10} L ${x + w} ${y + h + 10} L ${x + 34} ${y + h + 10} L ${x + 28} ${y + h + 16} L ${x + 18} ${y + h + 16} L ${x + 12} ${y + h + 10} L ${x} ${y + h + 10} Z`;
    return chemin(d, { couleur, ep: 1.6, fond }) + texte(x + 12, y + 33, s, { taille: 13, ancre: 'start', gras: true });
  }
  d = `M ${x} ${y} L ${x + 12} ${y} L ${x + 18} ${y + 6} L ${x + 28} ${y + 6} L ${x + 34} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x + 34} ${y + h} L ${x + 28} ${y + h + 6} L ${x + 18} ${y + h + 6} L ${x + 12} ${y + h} L ${x} ${y + h} Z`;
  return chemin(d, { couleur, ep: 1.6, fond }) + texte(x + 12, y + h / 2 + 5, s, { taille: 13, ancre: 'start' });
}

/** 6e : boucle « répéter 4 fois » et le carré obtenu. */
function sCarreBoucle() {
  const W = 600;
  let g = '';
  const x = 24;
  const y = 40;
  // Bloc « répéter » en forme de C
  const w = 250;
  const d = `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + 36} L ${x + 30} ${y + 36} L ${x + 30} ${y + 36 + 84} L ${x + w} ${y + 36 + 84} L ${x + w} ${y + 36 + 84 + 26} L ${x} ${y + 36 + 84 + 26} Z`;
  g += chemin(d, { couleur: ORANGE, ep: 1.6, fond: fc('orange') });
  g += texte(x + 12, y + 24, 'répéter 4 fois', { taille: 14, gras: true, ancre: 'start' });
  g += blocScratch(x + 30, y + 40, w - 40, 'avancer de 100 pas');
  g += blocScratch(x + 30, y + 80, w - 40, 'tourner à droite de 90°');
  g += texte(x + w / 2, y + 190, 'la boucle répète 4 fois', { taille: 12, couleur: ATTENUE, italique: true });
  g += texte(x + w / 2, y + 206, 'les deux instructions', { taille: 12, couleur: ATTENUE, italique: true });
  // Carré : départ en haut à gauche, orienté vers la droite, virages à droite
  const cx0 = 360;
  const cy0 = 50;
  const c = 170;
  const P = [[cx0, cy0], [cx0 + c, cy0], [cx0 + c, cy0 + c], [cx0, cy0 + c]];
  for (let i = 0; i < 4; i++) {
    const [a, b] = [P[i], P[(i + 1) % 4]];
    g += fleche(a[0] + (b[0] - a[0]) * 0.06, a[1] + (b[1] - a[1]) * 0.06, a[0] + (b[0] - a[0]) * 0.94, a[1] + (b[1] - a[1]) * 0.94, { couleur: BLEU, epaisseur: 3, pointe: 12 });
    const mx = (a[0] + b[0]) / 2;
    const my = (a[1] + b[1]) / 2;
    const off = [[0, -12], [16, 5], [0, 22], [-16, 5]][i];
    g += texte(mx + off[0], my + off[1], `tour ${i + 1}`, { taille: 12, couleur: ATTENUE, ancre: i === 1 ? 'start' : i === 3 ? 'end' : 'middle' });
  }
  g += `<circle cx="${cx0}" cy="${cy0}" r="6" fill="${VERT}"/>`;
  g += texte(cx0 - 8, cy0 - 12, 'départ', { taille: 12, gras: true, couleur: VERT, ancre: 'end' });
  g += texte(cx0 + c / 2, cy0 + c / 2 + 5, 'côté : 100 pas', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, 260, g);
}

/** 6e : fil électrique, âme conductrice et gaine isolante. */
function sFilElectrique() {
  const W = 600;
  let g = '';
  const y = 70;
  // Vue en long : gaine coupée pour montrer l'âme
  g += rect(40, y - 22, 300, 44, { fond: '#e8eef5', bord: ATTENUE, rx: 10 });
  g += rect(330, y - 9, 120, 18, { fond: '#d9822b', bord: '#8a4a12', rx: 3 });
  for (let i = 0; i < 6; i++) g += ligne(340 + i * 18, y - 8, 350 + i * 18, y + 8, { couleur: '#8a4a12', epaisseur: 1.2 });
  g += texte(190, y + 5, 'gaine en plastique', { taille: 13, gras: true, couleur: ENCRE });
  g += texte(470, y - 30, 'âme en métal (cuivre)', { taille: 13, gras: true, couleur: ORANGE, ancre: 'middle' });
  // Coupe
  const cx = 150;
  const cy = 190;
  g += cercle(cx, cy, 40, { couleur: ATTENUE, fond: '#e8eef5', epaisseur: 2 });
  g += cercle(cx, cy, 18, { couleur: '#8a4a12', fond: '#d9822b', epaisseur: 2 });
  g += texte(cx, cy + 62, 'vue en coupe', { taille: 12, couleur: ATTENUE, italique: true });
  g += boite2(270, 140, 300, 44, 'Âme en métal : conductrice', 'le courant électrique passe', { couleur: 'orange', tt: 13 });
  g += boite2(270, 196, 300, 44, 'Gaine en plastique : isolante', 'elle protège des chocs électriques', { couleur: 'bleu', tt: 13 });
  g += ligne(cx + 18, cy - 6, 268, 162, { couleur: ORANGE, epaisseur: 1.4 });
  g += ligne(cx + 38, cy + 12, 268, 218, { couleur: BLEU, epaisseur: 1.4 });
  return enveloppe(W, 270, g);
}

/**
 * 6e : vues d'un objet (méthode européenne : vue de dessus sous la vue de face,
 * vue de gauche à droite de la vue de face) et perspective.
 * Objet : longueur 60, profondeur 40, hauteur 40 ; une marche de 20 × 20 à l'avant.
 */
function sVues() {
  const W = 600;
  const k = 2.2;
  let g = '';
  const xF = 60;
  const yF = 50;
  const L = 60 * k;
  const P = 40 * k;
  const Hh = 40 * k;
  const h1 = 20 * k;
  const p1 = 20 * k;
  const st = { couleur: ENCRE, epaisseur: 2.4 };
  // Vue de face (x, z) : rectangle L × H, arête visible à z = 20
  g += rect(xF, yF, L, Hh, { fond: '#f6f9fe', bord: ENCRE, ep: 2.4 });
  g += ligne(xF, yF + Hh - h1, xF + L, yF + Hh - h1, st);
  g += texte(xF + L / 2, yF - 10, 'vue de face', { taille: 13, gras: true, couleur: BLEU });
  // Vue de dessus (x, y) placée sous la face ; l'avant de l'objet est en bas
  const yD = yF + Hh + 40;
  g += rect(xF, yD, L, P, { fond: '#f6f9fe', bord: ENCRE, ep: 2.4 });
  g += ligne(xF, yD + (P - p1), xF + L, yD + (P - p1), st);
  g += texte(xF + L / 2, yD + P + 22, 'vue de dessus', { taille: 13, gras: true, couleur: BLEU });
  // Vue de gauche placée à droite de la face ; l'avant de l'objet est à droite
  const xG = xF + L + 40;
  g += polygone([[xG, yF], [xG + (P - p1), yF], [xG + (P - p1), yF + Hh - h1], [xG + P, yF + Hh - h1], [xG + P, yF + Hh], [xG, yF + Hh]], { couleur: ENCRE, fond: '#f6f9fe', opacite: 1, epaisseur: 2.4 });
  g += texte(xG + P / 2, yF - 10, 'vue de gauche', { taille: 13, gras: true, couleur: BLEU });
  // Lignes de rappel
  g += ligne(xF + L + 4, yF + Hh - h1, xG - 4, yF + Hh - h1, { couleur: AXE, epaisseur: 1, pointilles: true });
  g += ligne(xF + L + 4, yF, xG - 4, yF, { couleur: AXE, epaisseur: 1, pointilles: true });
  g += ligne(xF, yF + Hh + 4, xF, yD - 4, { couleur: AXE, epaisseur: 1, pointilles: true });
  g += ligne(xF + L, yF + Hh + 4, xF + L, yD - 4, { couleur: AXE, epaisseur: 1, pointilles: true });
  // Perspective cavalière (fuyantes à 45°, coefficient 0,5)
  const ox = 380;
  const oy = 330;
  const kp = 2.3;
  const Pp = (x, y, z) => [ox + (x + 0.5 * y * Math.SQRT1_2) * kp, oy - (z + 0.5 * y * Math.SQRT1_2) * kp];
  const F = (pts, fond) => polygone(pts.map((p) => Pp(...p)), { couleur: ENCRE, fond, opacite: 1, epaisseur: 2 });
  // faces visibles : dessus de la marche, avant de la marche, avant du bloc arrière (au-dessus), dessus du bloc arrière, côté droit
  g += F([[60, 0, 0], [60, 40, 0], [60, 40, 40], [60, 20, 40], [60, 20, 20], [60, 0, 20]], '#cfdbe8');
  g += F([[0, 0, 0], [60, 0, 0], [60, 0, 20], [0, 0, 20]], '#eef3fb');
  g += F([[0, 0, 20], [60, 0, 20], [60, 20, 20], [0, 20, 20]], '#ffffff');
  g += F([[0, 20, 20], [60, 20, 20], [60, 20, 40], [0, 20, 40]], '#eef3fb');
  g += F([[0, 20, 40], [60, 20, 40], [60, 40, 40], [0, 40, 40]], '#ffffff');
  g += texte(ox + 85, oy - (40 + 20 * Math.SQRT1_2) * kp - 14, 'perspective', { taille: 13, gras: true, couleur: ORANGE });
  const a = Pp(30, -40, 8);
  const b = Pp(30, -6, 8);
  g += fleche(a[0], a[1], b[0], b[1], { couleur: ORANGE, epaisseur: 2 });
  g += texte(a[0] - 4, a[1] + 14, 'regard de face', { taille: 12, couleur: ORANGE, ancre: 'end' });
  return enveloppe(W, 400, g);
}

/** 6e : un même objet dessiné à trois échelles. */
function sEchelle() {
  const W = 620;
  let g = '';
  const u = 26; // 1 cm du dessin = 26 unités
  const items = [
    { e: 'échelle 1 : 2', s: 'réduction', k: 0.5, x: 20 },
    { e: 'échelle 1 : 1', s: 'taille réelle', k: 1, x: 120 },
    { e: 'échelle 2 : 1', s: 'agrandissement', k: 2, x: 300 },
  ];
  const yB = 170;
  items.forEach((it) => {
    const w = 4 * it.k * u;
    const h = 2 * it.k * u;
    const y = yB - h;
    g += rect(it.x, y, w, h, { fond: fc('bleu'), bord: BLEU, ep: 2, rx: 0 });
    g += cercle(it.x + 1 * it.k * u, y + h / 2, 0.5 * it.k * u, { couleur: BLEU, fond: '#ffffff', epaisseur: 2 });
    g += texte(it.x + w / 2, yB + 20, `${virg(4 * it.k)} cm`, { taille: 12, couleur: ATTENUE });
    g += texte(it.x + w + 6, y + h / 2 + 4, `${virg(2 * it.k)} cm`, { taille: 12, couleur: ATTENUE, ancre: 'start' });
    g += texte(it.x + w / 2, y - 26, it.e, { taille: 13, gras: true, couleur: BLEU });
    g += texte(it.x + w / 2, y - 10, it.s, { taille: 12, couleur: ATTENUE, italique: true });
  });
  return enveloppe(W, 200, g);
}

/** 6e : schéma électrique (pile, interrupteur ouvert, lampe). */
function sCircuit() {
  const W = 560;
  let g = '';
  const x1 = 120;
  const x2 = 440;
  const y1 = 60;
  const y2 = 220;
  const st = { couleur: ENCRE, epaisseur: 2.2 };
  // Pile à gauche (verticale) : grand trait fin (+) et petit trait épais (−)
  const yp = (y1 + y2) / 2;
  g += ligne(x1, y1, x1, yp - 8, st) + ligne(x1, yp + 8, x1, y2, st);
  g += ligne(x1 - 26, yp - 8, x1 + 26, yp - 8, { couleur: ENCRE, epaisseur: 2.2 });
  g += ligne(x1 - 13, yp + 8, x1 + 13, yp + 8, { couleur: ENCRE, epaisseur: 6 });
  g += texte(x1 + 34, yp - 12, '+', { taille: 16, gras: true, couleur: ROUGE });
  g += texte(x1 + 22, yp + 22, '−', { taille: 16, gras: true });
  g += texte(x1 - 36, yp + 5, 'pile', { taille: 14, gras: true, couleur: BLEU, ancre: 'end' });
  // Interrupteur ouvert en haut
  const xi = (x1 + x2) / 2;
  g += ligne(x1, y1, xi - 30, y1, st) + ligne(xi + 30, y1, x2, y1, st);
  g += `<circle cx="${xi - 30}" cy="${y1}" r="3.5" fill="${ENCRE}"/><circle cx="${xi + 30}" cy="${y1}" r="3.5" fill="${ENCRE}"/>`;
  g += ligne(xi - 30, y1, xi + 24, y1 - 26, st);
  g += texte(xi, y1 - 36, 'interrupteur (ouvert)', { taille: 14, gras: true, couleur: BLEU });
  // Lampe à droite : cercle avec une croix
  const yl = (y1 + y2) / 2;
  const r = 20;
  g += ligne(x2, y1, x2, yl - r, st) + ligne(x2, yl + r, x2, y2, st);
  g += cercle(x2, yl, r, { couleur: ENCRE, epaisseur: 2.2, fond: '#ffffff' });
  const d = r * Math.SQRT1_2;
  g += ligne(x2 - d, yl - d, x2 + d, yl + d, st) + ligne(x2 - d, yl + d, x2 + d, yl - d, st);
  g += texte(x2 + 32, yl + 5, 'lampe', { taille: 14, gras: true, couleur: BLEU, ancre: 'start' });
  // Fil du bas
  g += ligne(x1, y2, x2, y2, st);
  g += texte(xi, y2 + 26, 'fils de connexion', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 260, g);
}

/** 5e, 1re SI, Tle SI : les sollicitations simples. */
function sSollicitations({ descriptions = {} } = {}) {
  const W = 620;
  const pw = 200;
  const ph = 150;
  const D = { traction: 'on tire : la pièce s’allonge', compression: 'on écrase : elle raccourcit', flexion: 'on plie la pièce', torsion: 'on tord la pièce', cisaillement: 'on tend à la couper', ...descriptions };
  const pos = { traction: [10, 10], compression: [210, 10], flexion: [410, 10], torsion: [110, 170], cisaillement: [310, 170] };
  let g = '';
  const barre = (x, y, w, h) => rect(x, y, w, h, { fond: '#dfe7f1', bord: ENCRE, ep: 2 });
  const R = ROUGE;
  for (const [nom, [x, y]] of Object.entries(pos)) {
    g += rect(x + 4, y + 4, pw - 8, ph - 8, { fond: '#fbfcfe', bord: GRILLE, ep: 1.2, rx: 10 });
    g += texte(x + pw / 2, y + 26, nom[0].toUpperCase() + nom.slice(1), { taille: 14, gras: true, couleur: BLEU });
    g += texte(x + pw / 2, y + ph - 16, D[nom], { taille: 12, couleur: ATTENUE });
    const cx = x + pw / 2;
    const cy = y + 78;
    if (nom === 'traction') {
      g += rect(cx - 56, cy - 8, 112, 16, { fond: 'none', bord: ATTENUE, ep: 1.2, pointilles: true });
      g += barre(cx - 46, cy - 9, 92, 18);
      g += fleche(cx - 48, cy, cx - 84, cy, { couleur: R, epaisseur: 2.6 }) + fleche(cx + 48, cy, cx + 84, cy, { couleur: R, epaisseur: 2.6 });
    } else if (nom === 'compression') {
      g += rect(cx - 38, cy - 11, 76, 22, { fond: 'none', bord: ATTENUE, ep: 1.2, pointilles: true });
      g += barre(cx - 46, cy - 9, 92, 18);
      g += fleche(cx - 86, cy, cx - 50, cy, { couleur: R, epaisseur: 2.6 }) + fleche(cx + 86, cy, cx + 50, cy, { couleur: R, epaisseur: 2.6 });
    } else if (nom === 'flexion') {
      g += chemin(`M ${cx - 70} ${cy - 2} Q ${cx} ${cy + 26} ${cx + 70} ${cy - 2}`, { couleur: ATTENUE, ep: 1.4, pointilles: true });
      g += barre(cx - 76, cy - 14, 152, 12);
      g += polygone([[cx - 66, cy - 2], [cx - 74, cy + 12], [cx - 58, cy + 12]], { couleur: ENCRE, fond: '#ffffff', opacite: 1, epaisseur: 1.8 });
      g += polygone([[cx + 66, cy - 2], [cx + 58, cy + 12], [cx + 74, cy + 12]], { couleur: ENCRE, fond: '#ffffff', opacite: 1, epaisseur: 1.8 });
      g += fleche(cx, cy - 46, cx, cy - 16, { couleur: R, epaisseur: 2.6 });
    } else if (nom === 'torsion') {
      g += rect(cx - 60, cy - 11, 120, 22, { fond: '#dfe7f1', bord: ENCRE, ep: 2 });
      g += ellipse(cx - 60, cy, 5, 11, { fond: '#cfdbe8', bord: ENCRE, ep: 2 });
      g += ellipse(cx + 60, cy, 5, 11, { fond: '#cfdbe8', bord: ENCRE, ep: 2 });
      // Flèches courbes de sens opposés autour de l'axe
      const arc = (x0, sens) => {
        const yA = cy - 22;
        const yB = cy + 22;
        const d = `M ${x0 - 8 * sens} ${yB} Q ${x0 + 18 * sens} ${cy} ${x0 - 4 * sens} ${yA}`;
        const ang = Math.atan2(yA - cy, x0 - 4 * sens - (x0 + 18 * sens));
        return chemin(d, { couleur: R, ep: 2.6 }) + polygone([[x0 - 4 * sens, yA], [x0 - 4 * sens + 9 * Math.cos(ang + 2.6), yA + 9 * Math.sin(ang + 2.6)], [x0 - 4 * sens + 9 * Math.cos(ang - 2.6), yA + 9 * Math.sin(ang - 2.6)]], { couleur: R, fond: R, opacite: 1, epaisseur: 1 });
      };
      g += arc(cx - 76, -1) + arc(cx + 76, 1);
    } else {
      g += barre(cx - 70, cy - 10, 140, 20);
      g += ligne(cx, cy - 22, cx, cy + 22, { couleur: ATTENUE, epaisseur: 1.4, pointilles: true });
      g += fleche(cx - 8, cy - 46, cx - 8, cy - 12, { couleur: R, epaisseur: 2.6 });
      g += fleche(cx + 8, cy + 46, cx + 8, cy + 12, { couleur: R, epaisseur: 2.6 });
    }
  }
  return enveloppe(W, 330, g);
}

/** 5e : un cadre carré se déforme, un cadre triangulé reste indéformable. */
function sTriangulation() {
  const W = 600;
  let g = '';
  const c = 120;
  const art = (x, y) => `<circle cx="${nb(x)}" cy="${nb(y)}" r="5" fill="#ffffff" stroke="${ENCRE}" stroke-width="2"/>`;
  const barre = (a, b, opt = {}) => ligne(a[0], a[1], b[0], b[1], { couleur: opt.couleur || ENCRE, epaisseur: opt.ep || 5, pointilles: !!opt.pp });
  // Carré articulé
  const x0 = 50;
  const y0 = 70;
  const sq = [[x0, y0 + c], [x0 + c, y0 + c], [x0 + c, y0], [x0, y0]];
  const dx = 46;
  const def = [[x0, y0 + c], [x0 + c, y0 + c], [x0 + c + dx, y0 + 9], [x0 + dx, y0 + 9]];
  for (let i = 0; i < 4; i++) g += barre(def[i], def[(i + 1) % 4], { couleur: ATTENUE, ep: 2, pp: true });
  for (let i = 0; i < 4; i++) g += barre(sq[i], sq[(i + 1) % 4], { couleur: BLEU });
  sq.forEach((p) => (g += art(...p)));
  g += fleche(x0 - 50, y0, x0 - 8, y0, { couleur: ROUGE, epaisseur: 2.6 });
  g += texte(x0 + c / 2 + 20, y0 + c + 34, 'carré : il se déforme', { taille: 14, gras: true, couleur: ROUGE });
  g += texte(x0 - 46, y0 - 10, 'poussée', { taille: 12, couleur: ROUGE, ancre: 'start' });
  // Carré triangulé
  const x1 = 360;
  const sq2 = [[x1, y0 + c], [x1 + c, y0 + c], [x1 + c, y0], [x1, y0]];
  for (let i = 0; i < 4; i++) g += barre(sq2[i], sq2[(i + 1) % 4], { couleur: BLEU });
  g += barre(sq2[0], sq2[2], { couleur: VERT });
  sq2.forEach((p) => (g += art(...p)));
  g += fleche(x1 - 50, y0, x1 - 8, y0, { couleur: ROUGE, epaisseur: 2.6 });
  g += texte(x1 + c / 2 + 10, y0 + c + 34, 'triangulé : indéformable', { taille: 14, gras: true, couleur: VERT });
  g += texte(x1 + c + 14, y0 + c / 2 + 4, 'barre en diagonale', { taille: 12, couleur: VERT, ancre: 'start' });
  g += texte(x1 + c + 14, y0 + c / 2 + 20, '→ deux triangles', { taille: 12, couleur: VERT, ancre: 'start' });
  return enveloppe(W, 250, g);
}

/** 5e : stabilité — un objet incliné revient ou bascule selon la position de son centre de gravité. */
function sStabilite() {
  const W = 620;
  let g = '';
  const yS = 250;
  const cas = [
    { x: 210, w: 150, h: 70, ang: 28, ok: true },
    { x: 500, w: 46, h: 160, ang: 28, ok: false },
  ];
  g += ligne(10, yS, W - 10, yS, { couleur: ENCRE, epaisseur: 2.2 });
  for (let i = 0; i < 40; i++) g += ligne(14 + i * 15.2, yS + 2, 6 + i * 15.2, yS + 10, { couleur: AXE, epaisseur: 1 });
  cas.forEach((c) => {
    const t = (c.ang * Math.PI) / 180;
    // Pivot : coin inférieur droit (posé au sol). Rotation horaire de l'angle t (l'objet penche vers la droite).
    const px = c.x;
    const py = yS;
    const R = (u, v) => [px + u * Math.cos(t) + v * Math.sin(t), py - (-u * Math.sin(t) + v * Math.cos(t))];
    const pts = [R(0, 0), R(-c.w, 0), R(-c.w, c.h), R(0, c.h)];
    g += polygone(pts, { couleur: c.ok ? VERT : ROUGE, fond: c.ok ? fc('vert') : fc('rouge'), opacite: 1, epaisseur: 2.2 });
    const G = R(-c.w / 2, c.h / 2);
    g += `<circle cx="${nb(G[0])}" cy="${nb(G[1])}" r="5" fill="${ENCRE}"/>`;
    g += texte(G[0] - 10, G[1] - 8, 'G', { taille: 15, gras: true });
    g += fleche(G[0], G[1], G[0], yS - 2, { couleur: VIOLET, epaisseur: 2, pointilles: true });
    g += `<circle cx="${nb(px)}" cy="${nb(py)}" r="4" fill="${ORANGE}"/>`;
    g += texte(px + 6, py + 26, 'point d’appui', { taille: 12, couleur: ORANGE, ancre: 'start' });
    g += texte(c.x - (c.ok ? 70 : 60), 30, c.ok ? 'Base large, G bas' : 'Base étroite, G haut', { taille: 14, gras: true, couleur: c.ok ? VERT : ROUGE });
    g += texte(c.x - (c.ok ? 70 : 60), 50, c.ok ? 'la verticale de G tombe avant' : 'la verticale de G tombe au-delà', { taille: 12, couleur: ATTENUE });
    g += texte(c.x - (c.ok ? 70 : 60), 66, c.ok ? 'le point d’appui : il retombe' : 'du point d’appui : il bascule', { taille: 12, couleur: ATTENUE });
  });
  return enveloppe(W, 290, g);
}

/** 4e : boucle ouverte et boucle fermée. */
function sBoucles({ ouverte, fermee } = {}) {
  const W = 640;
  let g = '';
  const bw = 150;
  const bh = 52;
  const ligneBlocs = (y, blocs, couleur) => {
    const xs = [16, 16 + bw + 52, 16 + 2 * (bw + 52)];
    blocs.forEach((b, i) => {
      g += boite2(xs[i], y, bw, bh, b.f, b.c || '', { couleur, tt: 13 });
      if (i < 2) g += fleche(xs[i] + bw + 2, y + bh / 2, xs[i + 1] - 2, y + bh / 2, { couleur: tc(couleur) });
    });
    return xs;
  };
  g += texte(16, 26, ouverte.titre, { taille: 14, gras: true, couleur: ORANGE, ancre: 'start' });
  ligneBlocs(38, ouverte.blocs, 'orange');
  g += texte(16, 136, fermee.titre, { taille: 14, gras: true, couleur: VERT, ancre: 'start' });
  const xs = ligneBlocs(148, fermee.blocs, 'vert');
  // Retour par capteur
  const yb = 148 + bh + 46;
  g += rect(xs[1] + 4, yb - 24, bw - 8, 48, { fond: fc('violet'), bord: VIOLET, rx: 8 });
  g += texte(xs[1] + bw / 2, yb + 5 - (String(fermee.capteur).split('\n').length - 1) * 8, fermee.capteur, { taille: 13, gras: true, interligne: 1.2 });
  g += flecheChemin([[xs[2] + bw / 2, 148 + bh + 2], [xs[2] + bw / 2, yb], [xs[1] + bw - 2, yb]], { couleur: VIOLET });
  g += flecheChemin([[xs[1] + 2, yb], [xs[0] + bw / 2, yb], [xs[0] + bw / 2, 148 + bh + 2]], { couleur: VIOLET });
  g += texte((xs[0] + bw / 2 + xs[1]) / 2 + 4, yb + 18, 'retour d’information', { taille: 12, couleur: VIOLET, italique: true });
  return enveloppe(W, yb + 34, g);
}

/** 4e : extrusion et révolution. */
function sExtrusionRevolution() {
  const W = 640;
  let g = '';
  // Extrusion : profil en L puis prisme (perspective cavalière)
  const prof = [[0, 0], [60, 0], [60, 20], [20, 20], [20, 60], [0, 60]];
  const ox = 30;
  const oy = 190;
  g += polygone(prof.map(([x, y]) => [ox + x, oy - y]), { couleur: BLEU, fond: fc('bleu'), opacite: 1, epaisseur: 2.2 });
  g += texte(ox + 30, oy + 24, 'forme plate (2D)', { taille: 12, couleur: ATTENUE });
  g += fleche(ox + 76, oy - 40, ox + 126, oy - 40, { couleur: ORANGE, epaisseur: 2.4 });
  g += texte(ox + 101, oy - 52, 'extrusion', { taille: 13, gras: true, couleur: ORANGE });
  const ex = 180;
  const k = 0.5 * Math.SQRT1_2;
  const ep = 70;
  const Q = ([x, y], z) => [ex + x + z * k, oy - y - z * k];
  // faces arrière/latérales visibles : dessus et côtés droits, puis face avant
  const faces = [];
  for (let i = 0; i < prof.length; i++) {
    const a = prof[i];
    const b = prof[(i + 1) % prof.length];
    faces.push([Q(a, 0), Q(b, 0), Q(b, ep), Q(a, ep)]);
  }
  // On dessine les faces latérales tournées vers le haut ou la droite (visibles)
  const visibles = [1, 2, 3, 4];
  visibles.forEach((i) => (g += polygone(faces[i], { couleur: ENCRE, fond: '#cfdbe8', opacite: 1, epaisseur: 1.8 })));
  g += polygone(prof.map((p) => Q(p, 0)), { couleur: ENCRE, fond: fc('bleu'), opacite: 1, epaisseur: 2.2 });
  g += texte(ex + 50, oy + 24, 'volume (3D)', { taille: 12, couleur: ATTENUE });
  // Révolution : profil trapézoïdal contre un axe, puis tronc de cône
  const ax = 400;
  const yb = 190;
  const hh = 100;
  const r1 = 22;
  const r2 = 36;
  g += ligne(ax, yb + 16, ax, yb - hh - 16, { couleur: VIOLET, epaisseur: 1.6, pointilles: true });
  g += texte(ax - 6, yb - hh - 22, 'axe', { taille: 12, couleur: VIOLET, ancre: 'end' });
  g += polygone([[ax, yb], [ax + r1, yb], [ax + r2, yb - hh], [ax, yb - hh]], { couleur: BLEU, fond: fc('bleu'), opacite: 1, epaisseur: 2.2 });
  g += texte(ax + 18, yb + 24, 'profil', { taille: 12, couleur: ATTENUE });
  g += fleche(ax + 50, yb - 50, ax + 96, yb - 50, { couleur: ORANGE, epaisseur: 2.4 });
  g += texte(ax + 73, yb - 62, 'révolution', { taille: 13, gras: true, couleur: ORANGE });
  const cx = 556;
  const e1 = 0.3;
  g += `<path d="M ${cx - r1} ${yb} A ${r1} ${r1 * e1} 0 0 0 ${cx + r1} ${yb} L ${cx + r2} ${yb - hh} L ${cx - r2} ${yb - hh} Z" fill="#cfdbe8" stroke="${ENCRE}" stroke-width="2"/>`;
  g += ellipse(cx, yb - hh, r2, r2 * e1, { fond: '#eef3fb', bord: ENCRE, ep: 2 });
  g += `<path d="M ${cx - r1} ${yb} A ${r1} ${r1 * e1} 0 0 1 ${cx + r1} ${yb}" fill="none" stroke="${ATTENUE}" stroke-width="1.2" stroke-dasharray="4 4"/>`;
  g += ligne(cx, yb + 16, cx, yb - hh - 16, { couleur: VIOLET, epaisseur: 1.4, pointilles: true });
  g += texte(cx, yb + 24, 'un verre', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, 230, g);
}

/** 4e : rondelle = cylindre − petit cylindre (soustraction). */
function sRondelle() {
  const W = 600;
  let g = '';
  const cyl = (cx, cy, rx, h, fond = '#cfdbe8') => {
    const ry = rx * 0.32;
    return `<path d="M ${cx - rx} ${cy} L ${cx - rx} ${cy + h} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy + h} L ${cx + rx} ${cy} Z" fill="${fond}" stroke="${ENCRE}" stroke-width="2"/>` + ellipse(cx, cy, rx, ry, { fond: '#eef3fb', bord: ENCRE, ep: 2 });
  };
  const y = 90;
  g += cyl(100, y, 70, 26);
  g += texte(100, y + 80, 'cylindre', { taille: 13, gras: true, couleur: BLEU });
  g += texte(205, y + 22, '−', { taille: 34, gras: true, couleur: ROUGE });
  g += cyl(280, y, 22, 26, '#f5d0d0');
  g += texte(280, y + 80, 'petit cylindre', { taille: 13, gras: true, couleur: ROUGE });
  g += texte(355, y + 22, '=', { taille: 34, gras: true, couleur: ENCRE });
  // Rondelle : cylindre percé
  const cx = 480;
  const rx = 70;
  const ry = rx * 0.32;
  const ri = 22;
  const rj = ri * 0.32;
  g += `<path d="M ${cx - rx} ${y} L ${cx - rx} ${y + 26} A ${rx} ${ry} 0 0 0 ${cx + rx} ${y + 26} L ${cx + rx} ${y} Z" fill="#cfdbe8" stroke="${ENCRE}" stroke-width="2"/>`;
  g += ellipse(cx, y, rx, ry, { fond: '#eef3fb', bord: ENCRE, ep: 2 });
  g += ellipse(cx, y, ri, rj, { fond: '#ffffff', bord: ENCRE, ep: 2 });
  g += `<path d="M ${cx - ri} ${y} A ${ri} ${rj} 0 0 0 ${cx + ri} ${y} L ${cx + ri} ${y + 3} A ${ri} ${rj} 0 0 1 ${cx - ri} ${y + 3} Z" fill="#9fb3c8" stroke="none"/>`;
  g += texte(cx, y + 80, 'rondelle (trou)', { taille: 13, gras: true, couleur: VERT });
  return enveloppe(W, 200, g);
}

/** 4e : scripts événementiels façon Scratch (deux colonnes). */
function sScripts({ scripts = [] } = {}) {
  const W = 640;
  let g = '';
  const cw = (W - 20) / 2;
  let yMax = 0;
  let yLigne = 16;
  for (let r = 0; r < scripts.length; r += 2) {
    let hRang = 0;
    scripts.slice(r, r + 2).forEach((s, i) => {
      const x = 10 + i * cw + 8;
      const w = cw - 16;
      g += blocScratch(x, yLigne, w, s.quand, { chapeau: true, couleur: '#b38600', fond: '#fff4cc' });
      let y = yLigne + 50;
      s.faire.forEach((f) => {
        g += blocScratch(x, y, w, f);
        y += 38;
      });
      hRang = Math.max(hRang, y - yLigne);
    });
    yLigne += hRang + 18;
    yMax = yLigne;
  }
  g += texte(W / 2, yMax + 4, 'chaque script attend son événement (QUAND), puis exécute ses actions (FAIRE)', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, yMax + 18, g);
}

/** Icônes simples pour les réseaux. */
function icone(type, x, y, nom = '', { taille = 1 } = {}) {
  let g = '';
  const s = taille;
  if (type === 'pc') {
    g += rect(x - 26 * s, y - 22 * s, 52 * s, 34 * s, { fond: '#eef3fb', bord: ENCRE, ep: 1.8, rx: 3 });
    g += rect(x - 20 * s, y - 17 * s, 40 * s, 24 * s, { fond: '#cfe0f7', bord: 'none', ep: 0 });
    g += ligne(x, y + 12 * s, x, y + 18 * s, { couleur: ENCRE, epaisseur: 2 });
    g += ligne(x - 14 * s, y + 19 * s, x + 14 * s, y + 19 * s, { couleur: ENCRE, epaisseur: 2.4 });
  } else if (type === 'imprimante') {
    g += rect(x - 26 * s, y - 10 * s, 52 * s, 26 * s, { fond: '#eef3fb', bord: ENCRE, ep: 1.8, rx: 4 });
    g += rect(x - 16 * s, y - 22 * s, 32 * s, 12 * s, { fond: '#ffffff', bord: ENCRE, ep: 1.5 });
    g += rect(x - 16 * s, y + 8 * s, 32 * s, 14 * s, { fond: '#ffffff', bord: ENCRE, ep: 1.5 });
  } else if (type === 'telephone') {
    g += rect(x - 12 * s, y - 22 * s, 24 * s, 42 * s, { fond: '#eef3fb', bord: ENCRE, ep: 1.8, rx: 5 });
    g += rect(x - 8 * s, y - 16 * s, 16 * s, 28 * s, { fond: '#cfe0f7', bord: 'none', ep: 0 });
  } else if (type === 'switch') {
    g += rect(x - 40 * s, y - 13 * s, 80 * s, 26 * s, { fond: '#e8f5ee', bord: VERT, ep: 2, rx: 4 });
    for (let i = 0; i < 5; i++) g += rect(x - 32 * s + i * 13 * s, y - 4 * s, 9 * s, 8 * s, { fond: VERT, bord: 'none', ep: 0 });
  } else if (type === 'routeur') {
    g += rect(x - 36 * s, y - 13 * s, 72 * s, 26 * s, { fond: '#fdf0e3', bord: ORANGE, ep: 2, rx: 6 });
    g += ligne(x - 24 * s, y - 13 * s, x - 30 * s, y - 30 * s, { couleur: ORANGE, epaisseur: 2.4 });
    g += ligne(x + 24 * s, y - 13 * s, x + 30 * s, y - 30 * s, { couleur: ORANGE, epaisseur: 2.4 });
    g += `<circle cx="${nb(x - 16 * s)}" cy="${nb(y)}" r="3" fill="${VERT}"/><circle cx="${nb(x - 6 * s)}" cy="${nb(y)}" r="3" fill="${VERT}"/>`;
  } else if (type === 'serveur') {
    g += rect(x - 20 * s, y - 30 * s, 40 * s, 60 * s, { fond: '#f3ecfa', bord: VIOLET, ep: 2, rx: 4 });
    for (let i = 0; i < 4; i++) g += ligne(x - 12 * s, y - 18 * s + i * 12 * s, x + 12 * s, y - 18 * s + i * 12 * s, { couleur: VIOLET, epaisseur: 2 });
  } else if (type === 'nuage') {
    const d = `M ${x - 60 * s} ${y + 18 * s} C ${x - 84 * s} ${y + 18 * s} ${x - 82 * s} ${y - 14 * s} ${x - 58 * s} ${y - 12 * s} C ${x - 56 * s} ${y - 38 * s} ${x - 18 * s} ${y - 42 * s} ${x - 6 * s} ${y - 24 * s} C ${x + 6 * s} ${y - 46 * s} ${x + 50 * s} ${y - 40 * s} ${x + 50 * s} ${y - 14 * s} C ${x + 78 * s} ${y - 16 * s} ${x + 82 * s} ${y + 18 * s} ${x + 56 * s} ${y + 18 * s} Z`;
    g += chemin(d, { couleur: BLEU, ep: 2, fond: '#eef3fb' });
  } else if (type === 'thermometre') {
    g += rect(x - 6 * s, y - 26 * s, 12 * s, 36 * s, { fond: '#ffffff', bord: ENCRE, ep: 1.8, rx: 6 });
    g += cercle(x, y + 14 * s, 9 * s, { couleur: ENCRE, fond: ROUGE, epaisseur: 1.8 });
    g += rect(x - 2.5 * s, y - 10 * s, 5 * s, 20 * s, { fond: ROUGE, bord: 'none', ep: 0 });
  }
  if (nom) g += texte(x, y + (type === 'serveur' ? 48 : type === 'nuage' ? 8 : 40) * s, nom, { taille: 12, gras: true, couleur: ENCRE, interligne: 1.2 });
  return g;
}
/** Ondes radio (arcs) autour d'un point, orientées vers un angle (degrés). */
function ondes(x, y, angle = 0, couleur = BLEU) {
  let g = '';
  for (let i = 1; i <= 3; i++) {
    const r = 6 + i * 6;
    const a1 = ((angle - 35) * Math.PI) / 180;
    const a2 = ((angle + 35) * Math.PI) / 180;
    g += `<path d="M ${nb(x + r * Math.cos(a1))} ${nb(y + r * Math.sin(a1))} A ${r} ${r} 0 0 1 ${nb(x + r * Math.cos(a2))} ${nb(y + r * Math.sin(a2))}" fill="none" stroke="${couleur}" stroke-width="2" stroke-linecap="round"/>`;
  }
  return g;
}

/** 4e : réseau local relié à Internet. */
function sReseauLocal() {
  const W = 660;
  let g = '';
  g += rect(10, 30, 400, 280, { fond: '#fbfcfe', bord: BLEU, ep: 1.4, rx: 12, pointilles: true });
  g += texte(22, 52, 'Réseau local (LAN)', { taille: 14, gras: true, couleur: BLEU, ancre: 'start' });
  const sw = [150, 190];
  const box = [330, 120];
  const pcs = [[60, 110, 'ordinateur'], [60, 260, 'ordinateur'], [180, 270, 'imprimante']];
  pcs.forEach(([x, y]) => (g += ligne(x, y, sw[0], sw[1], { couleur: ENCRE, epaisseur: 2 })));
  g += ligne(sw[0], sw[1], box[0], box[1], { couleur: ENCRE, epaisseur: 2 });
  pcs.forEach(([x, y, n]) => (g += rect(x - 32, y - 28, 64, 74, { fond: '#ffffff', bord: 'none', ep: 0 }) + icone(n === 'imprimante' ? 'imprimante' : 'pc', x, y, n)));
  g += icone('switch', sw[0], sw[1]);
  g += texte(sw[0] + 46, sw[1] + 5, 'switch', { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  g += icone('routeur', box[0], box[1]);
  g += texte(box[0], box[1] - 38, 'box / routeur', { taille: 13, gras: true, couleur: ORANGE });
  // Téléphone en Wi-Fi
  g += icone('telephone', 330, 250, 'smartphone');
  g += ondes(box[0], box[1] + 18, 90, BLEU);
  g += ondes(330, 222, -90, BLEU);
  g += texte(345, 192, 'Wi-Fi', { taille: 12, gras: true, couleur: BLEU, ancre: 'start' });
  g += texte(196, 226, 'câbles Ethernet', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  // Internet et serveur
  g += ligne(box[0] + 36, box[1], 500, 120, { couleur: ENCRE, epaisseur: 2.4 });
  g += icone('nuage', 520, 125);
  g += texte(520, 130, 'Internet', { taille: 14, gras: true, couleur: BLEU });
  g += ligne(560, 150, 600, 220, { couleur: ENCRE, epaisseur: 2.4 });
  g += icone('serveur', 610, 250, 'serveur');
  g += texte(520, 180, 'réseau étendu', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 330, g);
}

// ───────────────────────────── 3e et SNT ─────────────────────────────

/** 3e : étapes de la démarche de projet, avec retour en arrière (itération). */
function sEtapesProjet({ etapes = [], de = 5, vers = 3 } = {}) {
  const W = 520;
  const bw = 300;
  const bh = 36;
  const gap = 14;
  const x0 = 40;
  let g = '';
  etapes.forEach((e, i) => {
    const y = 14 + i * (bh + gap);
    const c = i === de ? 'orange' : 'bleu';
    g += rect(x0, y, bw, bh, { fond: fc(c), bord: tc(c), rx: 8 });
    g += texte(x0 + 14, y + bh / 2 + 5, `${i + 1}. ${e}`, { taille: 13, gras: true, ancre: 'start' });
    if (i < etapes.length - 1) g += fleche(x0 + bw / 2, y + bh + 1, x0 + bw / 2, y + bh + gap - 1, { couleur: BLEU, epaisseur: 1.8, pointe: 8 });
  });
  const yA = 14 + de * (bh + gap) + bh / 2;
  const yB = 14 + vers * (bh + gap) + bh / 2;
  const xr = x0 + bw + 36;
  g += flecheChemin([[x0 + bw + 2, yA], [xr, yA], [xr, yB], [x0 + bw + 4, yB]], { couleur: ORANGE, epaisseur: 2.2, pointilles: true });
  g += texte(xr + 10, (yA + yB) / 2 - 8, 'itération :', { taille: 12, gras: true, couleur: ORANGE, ancre: 'start' });
  g += texte(xr + 10, (yA + yB) / 2 + 8, 'on corrige,', { taille: 12, couleur: ORANGE, ancre: 'start' });
  g += texte(xr + 10, (yA + yB) / 2 + 23, 'on recommence', { taille: 12, couleur: ORANGE, ancre: 'start' });
  return enveloppe(W, 14 + etapes.length * (bh + gap) + 4, g);
}

/** 3e : diagramme de Gantt (exemple). taches = [{ t, debut (semaine, à partir de 0), duree }]. */
function sGantt({ taches = [], semaines = 10, jalon = null } = {}) {
  const W = 660;
  const xL = 190;
  const cw = (W - xL - 14) / semaines;
  const lh = 30;
  let g = '';
  const y0 = 40;
  for (let s = 0; s < semaines; s++) {
    g += rect(xL + s * cw, y0 - 24, cw, 22, { fond: s % 2 ? '#f1f4f7' : '#ffffff', bord: GRILLE, ep: 1 });
    g += texte(xL + s * cw + cw / 2, y0 - 8, `S${s + 1}`, { taille: 12, couleur: ATTENUE });
    g += ligne(xL + s * cw, y0, xL + s * cw, y0 + taches.length * lh, { couleur: GRILLE, epaisseur: 1 });
  }
  g += ligne(xL + semaines * cw, y0, xL + semaines * cw, y0 + taches.length * lh, { couleur: GRILLE, epaisseur: 1 });
  const couleurs = [BLEU, BLEU, VIOLET, ORANGE, ORANGE, VERT, VERT];
  taches.forEach((t, i) => {
    const y = y0 + i * lh;
    g += ligne(10, y + lh, W - 14, y + lh, { couleur: GRILLE, epaisseur: 1 });
    g += texte(xL - 10, y + lh / 2 + 5, t.t, { taille: 13, ancre: 'end' });
    const c = couleurs[i % couleurs.length];
    g += rect(xL + t.debut * cw + 2, y + 6, t.duree * cw - 4, lh - 12, { fond: c, bord: c, ep: 1, rx: 5, opacite: 0.85 });
  });
  const yb = y0 + taches.length * lh;
  if (jalon) {
    const xj = xL + jalon.semaine * cw;
    g += polygone([[xj, yb + 8], [xj + 9, yb + 17], [xj, yb + 26], [xj - 9, yb + 17]], { couleur: ROUGE, fond: ROUGE, opacite: 1, epaisseur: 1 });
    g += texte(xj - 14, yb + 22, jalon.t, { taille: 12, gras: true, couleur: ROUGE, ancre: 'end' });
  }
  g += texte(xL, yb + 50, 'temps (en semaines) →', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  return enveloppe(W, yb + 62, g);
}

/** 3e : lignée (dans le temps) et famille (à une même époque). */
function sFamilleLignee({ lignee = [], famille = [] } = {}) {
  const W = 640;
  let g = '';
  const n = lignee.length;
  const bw = 128;
  const gap = (W - 28 - n * bw) / (n - 1);
  const bh = 44;
  const fh = 34;
  const yL = 16 + famille.length * (fh + 8) + 6;
  const xF = 14 + (n - 1) * (bw + gap);
  // Famille : objets actuels de même fonction, au-dessus du dernier objet de la lignée
  g += rect(xF - 6, 8, bw + 12, yL + bh + 6 - 8, { fond: 'none', bord: VERT, ep: 1.6, rx: 10, pointilles: true });
  famille.forEach((it, i) => {
    const y = 16 + i * (fh + 8);
    g += rect(xF, y, bw, fh, { fond: fc('vert'), bord: VERT, rx: 8 });
    g += texte(xF + bw / 2, y + fh / 2 + 5, it, { taille: 13 });
  });
  lignee.forEach((it, i) => {
    const x = 14 + i * (bw + gap);
    const c = i === n - 1 ? 'vert' : 'bleu';
    g += rect(x, yL, bw, bh, { fond: fc(c), bord: tc(c), rx: 8 });
    const nl = String(it).split('\n').length;
    g += texte(x + bw / 2, yL + bh / 2 + 5 - (nl - 1) * 8, it, { taille: 13, interligne: 1.2 });
    if (i < n - 1) g += fleche(x + bw + 2, yL + bh / 2, x + bw + gap - 2, yL + bh / 2, { couleur: BLEU, epaisseur: 2 });
  });
  g += texte(xF - 16, 60, 'famille :', { taille: 13, gras: true, couleur: VERT, ancre: 'end' });
  g += texte(xF - 16, 77, 'même fonction,', { taille: 12, couleur: VERT, ancre: 'end' });
  g += texte(xF - 16, 92, 'même époque', { taille: 12, couleur: VERT, ancre: 'end' });
  g += texte(xF - 16, 107, '(aujourd’hui)', { taille: 12, couleur: VERT, ancre: 'end' });
  g += fleche(14, yL + bh + 22, W - 14, yL + bh + 22, { couleur: ENCRE, epaisseur: 2.2 });
  g += texte(14, yL + bh + 44, 'lignée : un même type d’objet suivi dans le temps', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  g += texte(W - 14, yL + bh + 44, 'temps', { taille: 12, couleur: ATTENUE, ancre: 'end', italique: true });
  return enveloppe(W, yL + bh + 56, g);
}

/** 3e : cycle de vie d'un produit, avec le recyclage. */
function sCycleVie({ etapes = [], recyclage = 'recyclage' } = {}) {
  const W = 640;
  let g = '';
  const n = etapes.length;
  const gap = 30;
  const bw = (W - 28 - (n - 1) * gap) / n;
  const y = 30;
  const bh = 58;
  const xs = etapes.map((_, i) => 14 + i * (bw + gap));
  const couleurs = ['orange', 'bleu', 'vert', 'violet'];
  etapes.forEach((e, i) => {
    g += boite2(xs[i], y, bw, bh, e.f, e.c || '', { couleur: couleurs[i % 4], tt: 13 });
    if (i < n - 1) g += fleche(xs[i] + bw + 2, y + bh / 2, xs[i + 1] - 2, y + bh / 2, { couleur: ENCRE });
  });
  const yb = y + bh + 34;
  g += flecheChemin([[xs[n - 1] + bw / 2, y + bh + 2], [xs[n - 1] + bw / 2, yb], [xs[1] + bw / 2, yb], [xs[1] + bw / 2, y + bh + 4]], { couleur: VERT, epaisseur: 2.2, pointilles: true });
  g += texte((xs[1] + xs[n - 1]) / 2 + bw / 2, yb + 18, recyclage, { taille: 13, gras: true, couleur: VERT });
  return enveloppe(W, yb + 30, g);
}

/** Commutation de paquets : découpage, chemins différents, remise dans l'ordre. */
function sPaquets() {
  const W = 660;
  let g = '';
  const R = { R1: [190, 150], R2: [300, 70], R3: [300, 230], R4: [420, 150], R5: [420, 290] };
  const liens = [['R1', 'R2'], ['R1', 'R3'], ['R2', 'R4'], ['R3', 'R4'], ['R3', 'R5'], ['R5', 'R4']];
  // Émetteur et récepteur
  g += icone('pc', 60, 150, 'ordinateur A');
  g += icone('pc', 590, 150, 'ordinateur B');
  g += ligne(88, 150, 190 - 22, 150, { couleur: ENCRE, epaisseur: 2 });
  g += ligne(420 + 22, 150, 562, 150, { couleur: ENCRE, epaisseur: 2 });
  for (const [a, b] of liens) g += ligne(R[a][0], R[a][1], R[b][0], R[b][1], { couleur: ENCRE, epaisseur: 2 });
  // Chemins empruntés
  const c1 = [R.R1, R.R2, R.R4];
  const c2 = [R.R1, R.R3, R.R4];
  const trace = (pts, c, dy) => {
    let d = `M ${pts[0][0]} ${pts[0][1] + dy}`;
    pts.slice(1).forEach((p) => (d += ` L ${p[0]} ${p[1] + dy}`));
    return chemin(d, { couleur: c, ep: 6, opacite: 1 }).replace('stroke-width="6"', 'stroke-width="6" stroke-opacity="0.35"');
  };
  g += trace(c1, BLEU, 0) + trace(c2, ORANGE, 0);
  for (const [n, [x, y]] of Object.entries(R)) {
    g += cercle(x, y, 20, { couleur: VERT, fond: fc('vert'), epaisseur: 2 });
    g += texte(x, y + 5, n, { taille: 13, gras: true });
  }
  g += texte(300, 330, 'routeurs', { taille: 12, couleur: VERT, gras: true });
  // Paquets
  const pq = (x, y, num, c) => rect(x, y, 26, 20, { fond: c, bord: c, ep: 1, rx: 3 }) + texte(x + 13, y + 15, String(num), { taille: 13, gras: true, couleur: '#ffffff' });
  g += texte(60, 34, 'message découpé', { taille: 12, gras: true, couleur: ENCRE });
  g += pq(17, 42, 1, BLEU) + pq(47, 42, 2, ORANGE) + pq(77, 42, 3, BLEU);
  g += pq(236, 84, 1, BLEU) + pq(345, 84, 3, BLEU);
  g += pq(222, 196, 2, ORANGE);
  g += texte(590, 34, 'arrivée : 1, 3, 2', { taille: 12, gras: true, couleur: ENCRE });
  g += pq(547, 42, 1, BLEU) + pq(577, 42, 3, BLEU) + pq(607, 42, 2, ORANGE);
  g += texte(590, 228, 'remis dans l’ordre', { taille: 12, gras: true, couleur: VERT });
  g += pq(547, 236, 1, BLEU) + pq(577, 236, 2, ORANGE) + pq(607, 236, 3, BLEU);
  g += fleche(590, 70, 590, 116, { couleur: ATTENUE, epaisseur: 1.4, pointe: 7 });
  g += fleche(590, 192, 590, 212, { couleur: ATTENUE, epaisseur: 1.4, pointe: 7 });
  return enveloppe(W, 344, g);
}

/** Objet connecté : capteur → microcontrôleur → actionneur, et communication à distance. */
function sObjetConnecte({ capteur = 'capteur de\ntempérature', traitement = 'microcontrôleur\n(programme)', actionneur = 'chauffage\n(actionneur)', distant = 'smartphone', liaison = 'Wi-Fi', serveur = 'serveur\n(cloud)' } = {}) {
  const W = 640;
  let g = '';
  const y = 40;
  const bw = 150;
  const bh = 58;
  const xs = [14, 245, 476];
  const roles = [['ACQUÉRIR', 'bleu'], ['TRAITER', 'violet'], ['AGIR', 'orange']];
  [capteur, traitement, actionneur].forEach((t, i) => {
    g += texte(xs[i] + bw / 2, y - 10, roles[i][0], { taille: 12, gras: true, couleur: tc(roles[i][1]) });
    const nl = String(t).split('\n').length;
    g += rect(xs[i], y, bw, bh, { fond: fc(roles[i][1]), bord: tc(roles[i][1]), rx: 8 });
    g += texte(xs[i] + bw / 2, y + bh / 2 + 5 - (nl - 1) * 8, t, { taille: 13, gras: true, interligne: 1.2 });
    if (i < 2) g += fleche(xs[i] + bw + 2, y + bh / 2, xs[i + 1] - 2, y + bh / 2, { couleur: ENCRE });
  });
  // Communication
  const xm = xs[1] + bw / 2;
  g += texte(xm + 14, y + bh + 30, 'COMMUNIQUER', { taille: 12, gras: true, couleur: VERT, ancre: 'start' });
  g += ondes(xm, y + bh + 14, 90, VERT);
  g += texte(xm + 14, y + bh + 46, liaison, { taille: 12, couleur: VERT, ancre: 'start', italique: true });
  g += icone('nuage', xm, y + bh + 110, '', { taille: 0.8 });
  g += texte(xm, y + bh + 108, serveur, { taille: 12, gras: true, couleur: BLEU, interligne: 1.15 });
  g += icone('telephone', xs[2] + bw / 2, y + bh + 112, distant);
  g += ligne(xm, y + bh + 36, xm, y + bh + 82, { couleur: VERT, epaisseur: 2, pointilles: true });
  g += ligne(xm + 66, y + bh + 112, xs[2] + bw / 2 - 18, y + bh + 112, { couleur: VERT, epaisseur: 2, pointilles: true });
  g += texte((xm + 66 + xs[2] + bw / 2 - 18) / 2, y + bh + 104, 'Internet', { taille: 12, couleur: VERT, italique: true });
  return enveloppe(W, y + bh + 176, g);
}

/** Table de données annotée : ligne = objet, colonne = attribut, case = valeur. */
function sTableAnnotee({ entetes = [], lignes = [], ligneObjet = 1, colAttribut = 1, nomObjet = 'objet', nomAttribut = 'attribut', W = 640, larg = null } = {}) {
  const x0 = 180;
  const y0 = 64;
  const lh = 34;
  const cws = larg || entetes.map(() => (W - x0 - 20) / entetes.length);
  const X = (j) => x0 + cws.slice(0, j).reduce((a, b) => a + b, 0);
  const tw = X(entetes.length) - x0;
  let g = '';
  // colonne mise en évidence
  g += rect(X(colAttribut), y0, cws[colAttribut], lh * (lignes.length + 1), { fond: '#e8f5ee', bord: 'none', ep: 0 });
  g += rect(x0, y0 + lh * (ligneObjet + 1), tw, lh, { fond: '#eef3fb', bord: 'none', ep: 0 });
  g += rect(X(colAttribut), y0 + lh * (ligneObjet + 1), cws[colAttribut], lh, { fond: '#fdf0e3', bord: ORANGE, ep: 2.2 });
  g += rect(x0, y0, tw, lh, { fond: '#16232e', bord: 'none', ep: 0, opacite: 0.08 });
  for (let i = 0; i <= lignes.length + 1; i++) g += ligne(x0, y0 + i * lh, x0 + tw, y0 + i * lh, { couleur: i === 1 ? ENCRE : AXE, epaisseur: i === 1 ? 2 : 1.2 });
  for (let j = 0; j <= entetes.length; j++) g += ligne(X(j), y0, X(j), y0 + (lignes.length + 1) * lh, { couleur: AXE, epaisseur: 1.2 });
  entetes.forEach((e, j) => (g += texte(X(j) + cws[j] / 2, y0 + lh / 2 + 5, e, { taille: 13, gras: true })));
  lignes.forEach((l, i) => l.forEach((v, j) => (g += texte(X(j) + cws[j] / 2, y0 + (i + 1) * lh + lh / 2 + 5, v, { taille: 13 }))));
  // Annotations
  const yo = y0 + lh * (ligneObjet + 1) + lh / 2;
  g += fleche(x0 - 40, yo, x0 - 6, yo, { couleur: BLEU, epaisseur: 2 });
  g += texte(x0 - 46, yo - 4, 'une ligne', { taille: 12, gras: true, couleur: BLEU, ancre: 'end' });
  g += texte(x0 - 46, yo + 12, `= un ${nomObjet}`, { taille: 12, gras: true, couleur: BLEU, ancre: 'end' });
  const xa = X(colAttribut) + cws[colAttribut] / 2;
  g += fleche(xa, 20, xa, y0 - 4, { couleur: VERT, epaisseur: 2 });
  g += texte(xa + 10, 26, `une colonne = un ${nomAttribut}`, { taille: 12, gras: true, couleur: VERT, ancre: 'start' });
  const yv = y0 + (lignes.length + 1) * lh;
  g += fleche(xa + 50, yv + 26, xa + 10, y0 + lh * (ligneObjet + 2) + 2, { couleur: ORANGE, epaisseur: 2 });
  g += texte(xa + 54, yv + 32, 'une valeur', { taille: 12, gras: true, couleur: ORANGE, ancre: 'start' });
  return enveloppe(W, yv + 44, g);
}

/** Fichier CSV (texte) et la table qu'il représente. */
function sCsv({ lignes = [], sep = ',', W = 640 } = {}) {
  let g = '';
  const cells = lignes.map((l) => l.split(sep));
  const tx = 14;
  const ty = 40;
  g += texte(tx, 24, 'Fichier CSV (texte)', { taille: 13, gras: true, couleur: VIOLET, ancre: 'start' });
  const cw = 8.6;
  const lmax = Math.max(...lignes.map((l) => l.length));
  g += rect(tx, ty, lmax * cw + 20, lignes.length * 24 + 14, { fond: '#fbf8fe', bord: VIOLET, ep: 1.4, rx: 6 });
  lignes.forEach((l, i) => {
    let x = tx + 10;
    l.split('').forEach((ch) => {
      g += mono(x + cw / 2, ty + 25 + i * 24, ch, { taille: 14, couleur: ch === sep ? ROUGE : ENCRE, ancre: 'middle', gras: ch === sep || i === 0 });
      x += cw;
    });
  });
  const xT = tx + lmax * cw + 76;
  g += fleche(xT - 50, ty + (lignes.length * 24) / 2 + 7, xT - 12, ty + (lignes.length * 24) / 2 + 7, { couleur: ATTENUE, epaisseur: 2 });
  g += texte(xT, 24, 'Table (dans un tableur)', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  const nc = cells[0].length;
  const larg = cells[0].map((_, j) => Math.max(...cells.map((r) => r[j].length)) * 8.4 + 22);
  let x = xT;
  const lh = 24;
  cells.forEach((r, i) => {
    x = xT;
    r.forEach((v, j) => {
      g += rect(x, ty + i * lh, larg[j], lh, { fond: i === 0 ? '#e5ecf5' : '#ffffff', bord: AXE, ep: 1.2 });
      g += texte(x + larg[j] / 2, ty + i * lh + 17, v, { taille: 13, gras: i === 0 });
      x += larg[j];
    });
  });
  g += texte(tx, ty + lignes.length * 24 + 38, `première ligne : les noms des colonnes ; séparateur : « ${sep} »`, { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  return enveloppe(Math.max(W, x + 14), ty + lignes.length * 24 + 50, g);
}

/** Latitude (coupe) et longitude (vue depuis le pôle Nord). */
function sLatLong({ lat = 45, lon = 30 } = {}) {
  const W = 620;
  let g = '';
  const R = 100;
  // Coupe : latitude
  const cx = 150;
  const cy = 160;
  g += cercle(cx, cy, R, { couleur: BLEU, fond: '#eef3fb', epaisseur: 2.2 });
  g += ligne(cx - R - 14, cy, cx + R + 14, cy, { couleur: ROUGE, epaisseur: 2 });
  g += texte(cx - R / 2, cy - 8, 'équateur', { taille: 12, gras: true, couleur: ROUGE, ancre: 'middle' });
  g += ligne(cx, cy - R - 12, cx, cy + R + 12, { couleur: AXE, epaisseur: 1.4, pointilles: true });
  g += texte(cx, cy - R - 18, 'pôle Nord', { taille: 12, couleur: ATTENUE });
  g += texte(cx, cy + R + 28, 'pôle Sud', { taille: 12, couleur: ATTENUE });
  const t = (lat * Math.PI) / 180;
  const M = [cx + R * Math.cos(t), cy - R * Math.sin(t)];
  g += ligne(cx, cy, M[0], M[1], { couleur: VERT, epaisseur: 2.2 });
  g += `<circle cx="${nb(M[0])}" cy="${nb(M[1])}" r="5" fill="${VERT}"/>`;
  g += texte(M[0] + 10, M[1] - 6, 'M', { taille: 15, gras: true, couleur: VERT, ancre: 'start' });
  const ra = 34;
  g += `<path d="M ${cx + ra} ${cy} A ${ra} ${ra} 0 0 0 ${nb(cx + ra * Math.cos(t))} ${nb(cy - ra * Math.sin(t))}" fill="none" stroke="${VERT}" stroke-width="2"/>`;
  g += texte(cx + ra + 26, cy - 12, `${lat}° N`, { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  g += texte(cx, 22, 'Latitude (vue en coupe)', { taille: 14, gras: true, couleur: BLEU });
  // Vue depuis le pôle Nord : longitude
  const cx2 = 460;
  g += cercle(cx2, cy, R, { couleur: BLEU, fond: '#eef3fb', epaisseur: 2.2 });
  g += `<circle cx="${cx2}" cy="${cy}" r="3.5" fill="${ENCRE}"/>`;
  g += texte(cx2 - 8, cy - 8, 'pôle Nord', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  // Méridien de Greenwich vers le bas ; l'Est est dans le sens inverse des aiguilles d'une montre vu du pôle Nord
  const ang0 = Math.PI / 2;
  const G0 = [cx2 + R * Math.cos(ang0), cy + R * Math.sin(ang0)];
  g += ligne(cx2, cy, G0[0], G0[1], { couleur: ROUGE, epaisseur: 2.2 });
  g += texte(G0[0], G0[1] + 18, 'méridien de Greenwich (0°)', { taille: 12, gras: true, couleur: ROUGE });
  const a1 = ang0 - (lon * Math.PI) / 180;
  const P = [cx2 + R * Math.cos(a1), cy + R * Math.sin(a1)];
  g += ligne(cx2, cy, P[0], P[1], { couleur: VERT, epaisseur: 2.2 });
  g += `<circle cx="${nb(P[0])}" cy="${nb(P[1])}" r="5" fill="${VERT}"/>`;
  g += texte(P[0] + 10, P[1] + 4, 'M', { taille: 15, gras: true, couleur: VERT, ancre: 'start' });
  const rb = 36;
  g += `<path d="M ${nb(cx2 + rb * Math.cos(ang0))} ${nb(cy + rb * Math.sin(ang0))} A ${rb} ${rb} 0 0 0 ${nb(cx2 + rb * Math.cos(a1))} ${nb(cy + rb * Math.sin(a1))}" fill="none" stroke="${VERT}" stroke-width="2"/>`;
  const am = (ang0 + a1) / 2;
  g += texte(cx2 + 66 * Math.cos(am), cy + 66 * Math.sin(am) + 5, `${lon}° E`, { taille: 13, gras: true, couleur: VERT });
  g += texte(cx2, 22, 'Longitude (vue du dessus du pôle Nord)', { taille: 14, gras: true, couleur: BLEU });
  return enveloppe(W, 300, g);
}

/** Trilatération schématisée dans un plan : cercles centrés sur les satellites. */
function sTrilateration() {
  const W = 620;
  const H = 380;
  let g = '';
  const P = [330, 240];
  const S = [[200, 140], [470, 120], [480, 330]];
  g += `<defs><clipPath id="cadreTri"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>`;
  const coul = [BLEU, ORANGE, VIOLET];
  S.forEach((s, i) => {
    const r = Math.hypot(P[0] - s[0], P[1] - s[1]);
    g += `<g clip-path="url(#cadreTri)">` + cercle(s[0], s[1], r, { couleur: coul[i], epaisseur: 2, fond: 'none' }) + `</g>`;
    g += ligne(s[0], s[1], P[0], P[1], { couleur: coul[i], epaisseur: 1.2, pointilles: true });
    g += rect(s[0] - 14, s[1] - 8, 28, 16, { fond: fc(i === 0 ? 'bleu' : i === 1 ? 'orange' : 'violet'), bord: coul[i], ep: 2, rx: 2 });
    g += ligne(s[0] - 26, s[1], s[0] - 14, s[1], { couleur: coul[i], epaisseur: 3 }) + ligne(s[0] + 14, s[1], s[0] + 26, s[1], { couleur: coul[i], epaisseur: 3 });
    g += texte(s[0], s[1] - 16, `satellite ${i + 1}`, { taille: 12, gras: true, couleur: coul[i] });
    const m = [(s[0] + P[0]) / 2, (s[1] + P[1]) / 2];
    g += texte(m[0] + (i === 2 ? 0 : 14), m[1] + (i === 2 ? 20 : 0), `d${['₁', '₂', '₃'][i]}`, { taille: 14, gras: true, couleur: coul[i], ancre: 'start', italique: true });
  });
  g += `<circle cx="${P[0]}" cy="${P[1]}" r="7" fill="${VERT}" stroke="#ffffff" stroke-width="2"/>`;
  g += texte(P[0] - 14, P[1] + 26, 'récepteur', { taille: 13, gras: true, couleur: VERT, ancre: 'end' });
  g += texte(14, H - 14, 'schéma dans un plan, non à l’échelle', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  return enveloppe(W, H, g);
}

/** Graphe pondéré avec plus court chemin calculé (Dijkstra). */
function sGrapheChemin({ sommets, aretes, depart, arrivee, W = 600, H = 320, titre = '', unite = '', r = 20, couleursSommets = null, note = '' } = {}) {
  const res = dijkstra(sommets, aretes, depart, arrivee);
  let g = '';
  const cs = couleursSommets || { [depart]: 'vert', [arrivee]: 'rouge' };
  g += dessinGraphe({ sommets, aretes, r, chemins: [{ chemin: res.chemin, couleur: 'orange' }], couleursSommets: cs });
  if (titre) g += texte(14, 22, titre, { taille: 13, gras: true, couleur: ENCRE, ancre: 'start' });
  g += texte(W / 2, H - 14, `plus court chemin : ${res.chemin.join(' → ')} (${virg(res.dist)}${unite ? ' ' + unite : ''})`, { taille: 13, gras: true, couleur: ORANGE });
  if (note) g += texte(W / 2, H - 32, note, { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Image = grille de pixels ; un pixel agrandi avec ses trois valeurs R, V, B. */
function sPixels() {
  const W = 620;
  let g = '';
  // Petite image 10 × 10 : un soleil sur un ciel, au-dessus d'une herbe
  const n = 10;
  const t = 22;
  const x0 = 20;
  const y0 = 30;
  const ciel = [120, 180, 240];
  const herbe = [60, 160, 70];
  const soleil = [250, 210, 40];
  const px = [];
  for (let i = 0; i < n; i++) {
    px.push([]);
    for (let j = 0; j < n; j++) {
      let c = i >= 7 ? herbe : ciel;
      if ((i - 3) ** 2 + (j - 6) ** 2 <= 4) c = soleil;
      px[i].push(c);
      g += `<rect x="${x0 + j * t}" y="${y0 + i * t}" width="${t}" height="${t}" fill="rgb(${c.join(',')})" stroke="#ffffff" stroke-width="1"/>`;
    }
  }
  g += texte(x0 + (n * t) / 2, y0 + n * t + 22, `image de ${n} × ${n} = ${n * n} pixels`, { taille: 13, gras: true });
  // Pixel choisi : ligne 3, colonne 6 (centre du soleil)
  const [pi, pj] = [3, 6];
  const c = px[pi][pj];
  g += rect(x0 + pj * t, y0 + pi * t, t, t, { fond: 'none', bord: ENCRE, ep: 3 });
  const zx = 330;
  const zy = 50;
  const z = 120;
  g += ligne(x0 + pj * t + t, y0 + pi * t, zx, zy, { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  g += ligne(x0 + pj * t + t, y0 + pi * t + t, zx, zy + z, { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  g += `<rect x="${zx}" y="${zy}" width="${z}" height="${z}" fill="rgb(${c.join(',')})" stroke="${ENCRE}" stroke-width="2.4"/>`;
  g += texte(zx + z / 2, zy - 12, 'un pixel = une seule couleur', { taille: 13, gras: true });
  const noms = [['R', ROUGE, 'rouge'], ['V', VERT, 'vert'], ['B', BLEU, 'bleu']];
  noms.forEach(([l, col, nom], k) => {
    const y = zy + 22 + k * 40;
    g += rect(zx + z + 18, y - 18, 110, 30, { fond: '#ffffff', bord: col, ep: 2, rx: 6 });
    g += texte(zx + z + 30, y + 3, `${l} = ${c[k]}`, { taille: 14, gras: true, couleur: col, ancre: 'start' });
  });
  g += texte(zx + z / 2 + 60, zy + z + 30, '3 nombres de 0 à 255', { taille: 12, couleur: ATTENUE, italique: true });
  g += texte(zx + z / 2 + 60, zy + z + 46, '= 3 octets par pixel', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 290, g);
}

/** Synthèse additive RVB : intersections calculées par découpage (clipPath). */
function sRVB() {
  const W = 520;
  const H = 350;
  const r = 90;
  const C = { R: [200, 140], V: [320, 140], B: [260, 244] };
  let g = `<rect x="0" y="0" width="${W}" height="${H}" fill="#111111"/>`;
  g += `<defs><clipPath id="clR"><circle cx="${C.R[0]}" cy="${C.R[1]}" r="${r}"/></clipPath><clipPath id="clV"><circle cx="${C.V[0]}" cy="${C.V[1]}" r="${r}"/></clipPath><clipPath id="clB"><circle cx="${C.B[0]}" cy="${C.B[1]}" r="${r}"/></clipPath></defs>`;
  const disque = (k, coul) => `<circle cx="${C[k][0]}" cy="${C[k][1]}" r="${r}" fill="${coul}"/>`;
  g += disque('R', '#ff0000') + disque('V', '#00ff00') + disque('B', '#0000ff');
  g += `<g clip-path="url(#clR)">${disque('V', '#ffff00')}${disque('B', '#ff00ff')}</g>`;
  g += `<g clip-path="url(#clV)">${disque('B', '#00ffff')}</g>`;
  g += `<g clip-path="url(#clR)"><g clip-path="url(#clV)">${disque('B', '#ffffff')}</g></g>`;
  const lab = (x, y, s, c = '#ffffff') => texte(x, y, s, { taille: 13, gras: true, couleur: c });
  g += lab(150, 110, 'rouge') + lab(372, 110, 'vert') + lab(260, 310, 'bleu');
  g += lab(260, 114, 'jaune', '#111111') + lab(220, 216, 'magenta', '#111111') + lab(302, 216, 'cyan', '#111111') + lab(260, 180, 'blanc', '#111111');
  g += texte(14, 26, 'Synthèse additive de la lumière', { taille: 14, gras: true, couleur: '#ffffff', ancre: 'start' });
  return enveloppe(W, H, g);
}

/** Image matricielle (pixels) et image vectorielle (forme) agrandies. */
function sMatricielVectoriel() {
  const W = 620;
  let g = '';
  const cx = 150;
  const cy = 160;
  const R = 100;
  const t = 20;
  const rr = 4.6; // rayon du disque en pixels
  for (let i = -6; i < 6; i++) {
    for (let j = -6; j < 6; j++) {
      const xc = j + 0.5;
      const yc = i + 0.5;
      const dedans = xc * xc + yc * yc <= rr * rr;
      g += `<rect x="${cx + j * t}" y="${cy + i * t}" width="${t}" height="${t}" fill="${dedans ? BLEU : '#ffffff'}" stroke="${GRILLE}" stroke-width="1"/>`;
    }
  }
  g += texte(cx, 28, 'Image matricielle agrandie', { taille: 14, gras: true, couleur: BLEU });
  g += texte(cx, cy + R + 52, 'les pixels apparaissent', { taille: 12, couleur: ATTENUE, italique: true });
  const cx2 = 460;
  g += cercle(cx2, cy, rr * t, { couleur: BLEU, fond: BLEU, epaisseur: 1 });
  g += texte(cx2, 28, 'Image vectorielle agrandie', { taille: 14, gras: true, couleur: BLEU });
  g += texte(cx2, cy + R + 52, 'le contour reste net', { taille: 12, couleur: ATTENUE, italique: true });
  g += texte(cx2, cy + R + 34, 'décrite par : cercle (centre, rayon)', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, 330, g);
}

/** Réseau social : graphe, degré d'un sommet et distance entre deux membres (calculés). */
function sReseauSocial({ sommets, aretes, degreDe, de, a } = {}) {
  const W = 600;
  const H = 330;
  const res = dijkstra(sommets, aretes.map((x) => [x[0], x[1], 1]), de, a);
  const degre = aretes.filter((x) => x[0] === degreDe || x[1] === degreDe).length;
  let g = '';
  const cs = { [de]: 'vert', [a]: 'rouge', [degreDe]: 'violet' };
  g += dessinGraphe({ sommets, aretes: aretes.map((x) => [x[0], x[1]]), r: 22, chemins: [{ chemin: res.chemin, couleur: 'orange' }], couleursSommets: cs, poids: false });
  g += texte(14, H - 34, `degré de ${degreDe} : ${degre} (${degreDe} a ${degre} relations)`, { taille: 13, gras: true, couleur: VIOLET, ancre: 'start' });
  g += texte(14, H - 14, `distance de ${de} à ${a} : ${res.dist} (chemin ${res.chemin.join(' – ')})`, { taille: 13, gras: true, couleur: ORANGE, ancre: 'start' });
  return enveloppe(W, H, g);
}

// ───────────────────────────── NSI ─────────────────────────────

/** Une rangée de cases (tableau) avec couleurs par case et indices. */
function cases(x, y, valeurs, { t = 40, h = 34, couleurs = [], indices = true, grise = [], taille = 15 } = {}) {
  let g = '';
  valeurs.forEach((v, i) => {
    const c = couleurs[i];
    const f = c ? fc(c) : grise.includes(i) ? '#eceff3' : '#ffffff';
    g += rect(x + i * t, y, t, h, { fond: f, bord: c ? tc(c) : AXE, ep: c ? 2.2 : 1.2 });
    g += texte(x + i * t + t / 2, y + h / 2 + 5.5, String(v), { taille, gras: !!c, couleur: grise.includes(i) && !c ? '#9aa6b2' : ENCRE });
    if (indices) g += texte(x + i * t + t / 2, y - 6, String(i), { taille: 11, couleur: ATTENUE });
  });
  return g;
}

/** Étapes d'un algorithme sur un tableau, simulées : dichotomie, tri par sélection, tri par insertion. */
function sEtapesTableau({ algo, tab, cible } = {}) {
  const t = 40;
  const h = 32;
  const n = tab.length;
  const x0 = 120;
  const W = Math.max(600, x0 + n * t + 20);
  let g = '';
  let y = 34;
  const pas = 58;
  if (algo === 'dichotomie') {
    g += texte(14, 20, `Recherche de ${cible} dans un tableau trié`, { taille: 13, gras: true, ancre: 'start' });
    let gg = 0;
    let d = n - 1;
    let etape = 1;
    while (gg <= d) {
      const m = Math.floor((gg + d) / 2);
      const grise = tab.map((_, i) => i).filter((i) => i < gg || i > d);
      const couleurs = [];
      couleurs[m] = tab[m] === cible ? 'vert' : 'orange';
      y += 14;
      g += texte(14, y + h / 2 + 5, `étape ${etape}`, { taille: 13, gras: true, ancre: 'start', couleur: ATTENUE });
      g += cases(x0, y, tab, { t, h, couleurs, grise });
      const msg = tab[m] === cible ? `tab[${m}] = ${cible} : trouvé !` : tab[m] < cible ? `tab[${m}] = ${tab[m]} < ${cible} : on garde la droite` : `tab[${m}] = ${tab[m]} > ${cible} : on garde la gauche`;
      g += texte(x0, y + h + 18, `g = ${gg}, d = ${d}, m = ${m} → ${msg}`, { taille: 12, couleur: tab[m] === cible ? VERT : ORANGE, ancre: 'start' });
      y += pas + 8;
      if (tab[m] === cible) break;
      if (tab[m] < cible) gg = m + 1;
      else d = m - 1;
      etape++;
    }
    return enveloppe(W, y + 6, g);
  }
  const a = [...tab];
  if (algo === 'selection') {
    g += texte(14, 20, 'Tri par sélection : à chaque tour, le minimum restant prend sa place', { taille: 13, gras: true, ancre: 'start' });
    for (let i = 0; i < n - 1; i++) {
      let im = i;
      for (let j = i + 1; j < n; j++) if (a[j] < a[im]) im = j;
      const couleurs = [];
      for (let k = 0; k < i; k++) couleurs[k] = 'vert';
      couleurs[im] = 'orange';
      if (im !== i) couleurs[i] = 'bleu';
      y += 14;
      g += texte(14, y + h / 2 + 5, `tour i = ${i}`, { taille: 13, gras: true, ancre: 'start', couleur: ATTENUE });
      g += cases(x0, y, a, { t, h, couleurs });
      if (im !== i) {
        const xa = x0 + i * t + t / 2;
        const xb = x0 + im * t + t / 2;
        g += chemin(`M ${xa} ${y + h + 2} Q ${(xa + xb) / 2} ${y + h + 18} ${xb} ${y + h + 2}`, { couleur: ORANGE, ep: 1.8 });
        g += texte(x0 + n * t + 12, y + h / 2 + 5, `échange ${a[i]} et ${a[im]}`, { taille: 12, couleur: ORANGE, ancre: 'start' });
      } else g += texte(x0 + n * t + 12, y + h / 2 + 5, `${a[i]} est déjà à sa place`, { taille: 12, couleur: ORANGE, ancre: 'start' });
      [a[i], a[im]] = [a[im], a[i]];
      y += pas - 6;
    }
    y += 14;
    g += texte(14, y + h / 2 + 5, 'fin', { taille: 13, gras: true, ancre: 'start', couleur: VERT });
    g += cases(x0, y, a, { t, h, couleurs: a.map(() => 'vert') });
    y += h + 10;
    g += texte(14, y + 12, 'vert : partie triée ; orange : minimum trouvé ; bleu : case où il va', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
    return enveloppe(W, y + 22, g);
  }
  // insertion
  g += texte(14, 20, 'Tri par insertion : chaque valeur est insérée à sa place dans la partie triée', { taille: 13, gras: true, ancre: 'start' });
  y += 14;
  g += texte(14, y + h / 2 + 5, 'départ', { taille: 13, gras: true, ancre: 'start', couleur: ATTENUE });
  g += cases(x0, y, a, { t, h, couleurs: ['vert'] });
  y += pas - 6;
  for (let i = 1; i < n; i++) {
    const v = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > v) { a[j + 1] = a[j]; j--; }
    a[j + 1] = v;
    const couleurs = [];
    for (let k = 0; k <= i; k++) couleurs[k] = 'vert';
    couleurs[j + 1] = 'orange';
    y += 14;
    g += texte(14, y + h / 2 + 5, `tour i = ${i}`, { taille: 13, gras: true, ancre: 'start', couleur: ATTENUE });
    g += cases(x0, y, a, { t, h, couleurs });
    g += texte(x0 + n * t + 12, y + h / 2 + 5, i - 1 - j > 0 ? `${v} inséré (${i - 1 - j} décalage${i - 1 - j > 1 ? 's' : ''})` : `${v} reste en place`, { taille: 12, couleur: ORANGE, ancre: 'start' });
    y += pas - 6;
  }
  g += texte(14, y + 18, 'vert : partie triée ; orange : valeur qui vient d’être insérée', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  return enveloppe(W, y + 28, g);
}

/** Modèle de von Neumann. */
function sVonNeumann() {
  const W = 620;
  let g = '';
  g += rect(14, 20, 276, 206, { fond: '#f6f9fe', bord: BLEU, ep: 2, rx: 12 });
  g += texte(152, 44, 'Processeur (CPU)', { taille: 15, gras: true, couleur: BLEU });
  g += boite2(32, 60, 240, 58, 'Unité de commande', 'lit et décode les instructions', { couleur: 'bleu', tt: 14 });
  g += boite2(32, 150, 240, 58, 'UAL', 'effectue les calculs', { couleur: 'violet', tt: 14 });
  g += fleche(152, 120, 152, 148, { couleur: ENCRE, epaisseur: 1.8, pointe: 7 });
  // Bus vertical
  g += rect(318, 30, 26, 190, { fond: '#e9edf2', bord: ATTENUE, ep: 1.4, rx: 13 });
  g += texte(331, 22, 'bus', { taille: 13, gras: true, couleur: ATTENUE });
  g += boite2(372, 30, 230, 84, 'Mémoire', 'programme ET données\nau même endroit', { couleur: 'orange', tt: 15 });
  g += boite2(372, 150, 230, 60, 'Entrées-sorties', 'clavier, écran, disque…', { couleur: 'vert', tt: 14 });
  const dbl = (x1, x2, y) => fleche(x1, y, x2, y, { couleur: ATTENUE, epaisseur: 2.2, pointe: 8 }) + fleche(x2, y, x1, y, { couleur: ATTENUE, epaisseur: 2.2, pointe: 8 });
  g += dbl(292, 316, 125) + dbl(346, 370, 72) + dbl(346, 370, 180);
  g += texte(W / 2, 250, 'les bus transportent les données, les adresses et les commandes', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 262, g);
}

/** Portes logiques NON, ET, OU avec leurs tables de vérité (calculées). */
function sPortes() {
  const W = 640;
  let g = '';
  const portes = [
    { nom: 'NON', f: (a) => 1 - a, n: 1 },
    { nom: 'ET', f: (a, b) => a & b, n: 2 },
    { nom: 'OU', f: (a, b) => a | b, n: 2 },
  ];
  portes.forEach((p, k) => {
    const x = 20 + k * 210;
    const cy = 70;
    g += texte(x + 95, 24, `Porte ${p.nom}`, { taille: 14, gras: true, couleur: BLEU });
    // symbole
    const sx = x + 60;
    if (p.nom === 'NON') {
      g += polygone([[sx, cy - 22], [sx, cy + 22], [sx + 44, cy]], { couleur: ENCRE, fond: '#eef3fb', opacite: 1, epaisseur: 2 });
      g += cercle(sx + 50, cy, 6, { couleur: ENCRE, fond: '#ffffff', epaisseur: 2 });
      g += ligne(sx - 30, cy, sx, cy, { couleur: ENCRE, epaisseur: 2 });
      g += ligne(sx + 56, cy, sx + 86, cy, { couleur: ENCRE, epaisseur: 2 });
      g += texte(sx - 36, cy + 5, 'a', { taille: 14, italique: true, ancre: 'end' });
    } else if (p.nom === 'ET') {
      g += chemin(`M ${sx} ${cy - 24} L ${sx + 26} ${cy - 24} A 24 24 0 0 1 ${sx + 26} ${cy + 24} L ${sx} ${cy + 24} Z`, { couleur: ENCRE, ep: 2, fond: '#eef3fb' });
      g += ligne(sx - 30, cy - 12, sx, cy - 12, { couleur: ENCRE, epaisseur: 2 }) + ligne(sx - 30, cy + 12, sx, cy + 12, { couleur: ENCRE, epaisseur: 2 });
      g += ligne(sx + 50, cy, sx + 86, cy, { couleur: ENCRE, epaisseur: 2 });
    } else {
      g += chemin(`M ${sx - 6} ${cy - 24} Q ${sx + 34} ${cy - 24} ${sx + 54} ${cy} Q ${sx + 34} ${cy + 24} ${sx - 6} ${cy + 24} Q ${sx + 8} ${cy} ${sx - 6} ${cy - 24} Z`, { couleur: ENCRE, ep: 2, fond: '#eef3fb' });
      g += ligne(sx - 30, cy - 12, sx + 2, cy - 12, { couleur: ENCRE, epaisseur: 2 }) + ligne(sx - 30, cy + 12, sx + 2, cy + 12, { couleur: ENCRE, epaisseur: 2 });
      g += ligne(sx + 54, cy, sx + 86, cy, { couleur: ENCRE, epaisseur: 2 });
    }
    if (p.n === 2) {
      g += texte(sx - 36, cy - 8, 'a', { taille: 14, italique: true, ancre: 'end' });
      g += texte(sx - 36, cy + 17, 'b', { taille: 14, italique: true, ancre: 'end' });
    }
    g += texte(sx + 92, cy + 5, 's', { taille: 14, italique: true, ancre: 'start' });
    // table de vérité
    const ty = 118;
    const cw = 44;
    const lignes = p.n === 1 ? [[0], [1]] : [[0, 0], [0, 1], [1, 0], [1, 1]];
    const tete = p.n === 1 ? ['a', 's'] : ['a', 'b', 's'];
    const tx = x + 95 - (tete.length * cw) / 2;
    tete.forEach((e, j) => {
      g += rect(tx + j * cw, ty, cw, 26, { fond: j === tete.length - 1 ? fc('orange') : '#e5ecf5', bord: AXE, ep: 1.2 });
      g += texte(tx + j * cw + cw / 2, ty + 18, e, { taille: 14, gras: true, italique: true });
    });
    lignes.forEach((l, i) => {
      const s = p.f(...l);
      [...l, s].forEach((v, j) => {
        g += rect(tx + j * cw, ty + 26 * (i + 1), cw, 26, { fond: j === tete.length - 1 ? '#fffaf4' : '#ffffff', bord: AXE, ep: 1.2 });
        g += texte(tx + j * cw + cw / 2, ty + 26 * (i + 1) + 18, String(v), { taille: 14, gras: j === tete.length - 1, couleur: j === tete.length - 1 ? ORANGE : ENCRE });
      });
    });
  });
  return enveloppe(W, 260, g);
}

/** Arborescence de fichiers (à partir de la racine /). */
function sArborescence({ arbre, surligne = '' } = {}) {
  const W = 560;
  let g = '';
  let y = 30;
  const dx = 34;
  const lignes = [];
  const parcours = (n, prof, chemin) => {
    const ch = prof === 0 ? '/' : chemin === '/' ? '/' + n.nom : chemin + '/' + n.nom;
    lignes.push({ n, prof, ch });
    (n.enfants || []).forEach((e) => parcours(e, prof + 1, ch));
  };
  parcours(arbre, 0, '');
  const pos = new Map();
  lignes.forEach((l, i) => {
    const x = 30 + l.prof * dx;
    const yy = y + i * 30;
    pos.set(l, [x, yy]);
  });
  // traits
  lignes.forEach((l) => {
    const [x, yy] = pos.get(l);
    const enfants = lignes.filter((m) => m.prof === l.prof + 1 && m.ch.startsWith(l.ch === '/' ? '/' : l.ch + '/') && m.ch.split('/').length === (l.ch === '/' ? 2 : l.ch.split('/').length + 1));
    if (enfants.length) {
      const yl = pos.get(enfants[enfants.length - 1])[1];
      g += ligne(x + 8, yy + 8, x + 8, yl, { couleur: AXE, epaisseur: 1.4 });
      enfants.forEach((e) => {
        const [ex, ey] = pos.get(e);
        g += ligne(x + 8, ey, ex - 4, ey, { couleur: AXE, epaisseur: 1.4 });
      });
    }
  });
  lignes.forEach((l) => {
    const [x, yy] = pos.get(l);
    const dossier = !!l.n.enfants || l.n.dossier;
    if (dossier) {
      g += chemin(`M ${x} ${yy - 7} L ${x + 7} ${yy - 7} L ${x + 9} ${yy - 4} L ${x + 18} ${yy - 4} L ${x + 18} ${yy + 8} L ${x} ${yy + 8} Z`, { couleur: ORANGE, ep: 1.4, fond: '#fbd9a8' });
    } else {
      g += chemin(`M ${x + 2} ${yy - 8} L ${x + 11} ${yy - 8} L ${x + 16} ${yy - 3} L ${x + 16} ${yy + 9} L ${x + 2} ${yy + 9} Z`, { couleur: BLEU, ep: 1.4, fond: '#ffffff' });
    }
    const sur = l.ch === surligne;
    g += texte(x + 26, yy + 5, l.prof === 0 ? '/  (racine)' : l.n.nom, { taille: 14, gras: sur || l.prof === 0, couleur: sur ? VERT : ENCRE, ancre: 'start' });
  });
  const ym = y + lignes.length * 30 + 6;
  if (surligne) g += texte(30, ym, `chemin du fichier en vert : ${surligne}`, { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  return enveloppe(W, ym + 16, g);
}

/** Écriture binaire : poids des positions et somme. */
function sBits({ bits = '1011' } = {}) {
  const n = bits.length;
  const t = 64;
  const W = Math.max(520, n * t + 160);
  const x0 = (W - n * t) / 2 + 30;
  let g = '';
  g += texte(x0 - 14, 46, 'poids', { taille: 13, gras: true, couleur: ATTENUE, ancre: 'end' });
  g += texte(x0 - 14, 92, 'bit', { taille: 13, gras: true, couleur: ATTENUE, ancre: 'end' });
  g += texte(x0 - 14, 140, 'valeur', { taille: 13, gras: true, couleur: ATTENUE, ancre: 'end' });
  let somme = 0;
  const termes = [];
  bits.split('').forEach((b, i) => {
    const p = 2 ** (n - 1 - i);
    const x = x0 + i * t;
    g += texte(x + t / 2, 46, `2${'⁰¹²³⁴⁵⁶⁷'[n - 1 - i]} = ${p}`, { taille: 13, couleur: ATTENUE });
    g += rect(x + 4, 66, t - 8, 38, { fond: b === '1' ? fc('bleu') : '#ffffff', bord: b === '1' ? BLEU : AXE, ep: 2, rx: 4 });
    g += texte(x + t / 2, 92, b, { taille: 20, gras: true, couleur: b === '1' ? BLEU : ATTENUE });
    g += texte(x + t / 2, 140, `${b} × ${p}`, { taille: 13, couleur: b === '1' ? ENCRE : ATTENUE });
    somme += Number(b) * p;
    termes.push(String(Number(b) * p));
  });
  g += texte(W / 2 + 15, 180, `${bits}₂ = ${termes.join(' + ')} = ${somme}₁₀`, { taille: 16, gras: true, couleur: VERT });
  return enveloppe(W, 200, g);
}

/** Divisions successives par 2 ; lecture des restes de bas en haut. */
function sDivisions({ n = 13 } = {}) {
  const W = 520;
  let g = '';
  const etapes = [];
  let q = n;
  while (q > 0) {
    etapes.push([q, Math.floor(q / 2), q % 2]);
    q = Math.floor(q / 2);
  }
  const y0 = 40;
  const lh = 42;
  g += texte(30, 22, `Conversion de ${n} en binaire`, { taille: 14, gras: true, ancre: 'start' });
  etapes.forEach(([a, qq, r], i) => {
    const y = y0 + i * lh;
    g += texte(40, y + 22, `${a} ÷ 2 = ${qq}`, { taille: 16, ancre: 'start' });
    g += texte(180, y + 22, 'reste', { taille: 14, couleur: ATTENUE, ancre: 'start' });
    g += rect(232, y + 2, 34, 30, { fond: fc('orange'), bord: ORANGE, ep: 2, rx: 4 });
    g += texte(249, y + 23, String(r), { taille: 18, gras: true, couleur: ORANGE });
  });
  const yb = y0 + (etapes.length - 1) * lh + 17;
  g += fleche(290, yb, 290, y0 + 17, { couleur: VERT, epaisseur: 2.6 });
  g += texte(304, (yb + y0 + 17) / 2 - 2, 'on lit', { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  g += texte(304, (yb + y0 + 17) / 2 + 15, 'de bas en haut', { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  const bin = n.toString(2);
  g += texte(W / 2, y0 + etapes.length * lh + 22, `${n}₁₀ = ${bin}₂`, { taille: 18, gras: true, couleur: VERT });
  return enveloppe(W, y0 + etapes.length * lh + 40, g);
}

/** Complément à deux sur 8 bits : coder −x. */
function sComplement2({ x = 5 } = {}) {
  const W = 600;
  let g = '';
  const b = x.toString(2).padStart(8, '0');
  const inv = b.split('').map((c) => (c === '0' ? '1' : '0')).join('');
  const res = ((parseInt(inv, 2) + 1) & 255).toString(2).padStart(8, '0');
  const rangee = (y, bits, titre, c, diff = null) => {
    g += texte(20, y + 22, titre, { taille: 13, gras: true, ancre: 'start', couleur: tc(c) });
    bits.split('').forEach((v, i) => {
      const x0 = 250 + i * 40;
      const change = diff && diff[i] !== v;
      g += rect(x0, y, 36, 34, { fond: change ? fc(c) : '#ffffff', bord: change ? tc(c) : AXE, ep: change ? 2.2 : 1.2, rx: 3 });
      g += texte(x0 + 18, y + 24, v, { taille: 18, gras: true, couleur: i === 0 ? ROUGE : ENCRE });
    });
  };
  rangee(30, b, `${x} en binaire`, 'bleu');
  g += texte(250 + 160, 86, '↓ on inverse tous les bits', { taille: 13, couleur: ORANGE, gras: true });
  rangee(96, inv, 'bits inversés', 'orange', b);
  g += texte(250 + 160, 152, '↓ on ajoute 1', { taille: 13, couleur: VERT, gras: true });
  rangee(162, res, `codage de −${x}`, 'vert', inv);
  g += texte(250, 18, 'bit de signe', { taille: 12, couleur: ROUGE, ancre: 'start', gras: true });
  g += texte(W / 2, 226, `vérification : ${res} + ${b} = 1 0000 0000 → sur 8 bits, on garde 0000 0000 = 0`, { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 240, g);
}

/** Table ↔ liste de dictionnaires. */
function sTableDicos({ entetes = [], lignes = [] } = {}) {
  const W = 660;
  let g = '';
  const x0 = 14;
  const y0 = 40;
  const cw = 64;
  const lh = 30;
  g += texte(x0, 24, 'Table', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  entetes.forEach((e, j) => {
    g += rect(x0 + j * cw, y0, cw, lh, { fond: j === 1 ? fc('vert') : '#e5ecf5', bord: AXE, ep: 1.2 });
    g += texte(x0 + j * cw + cw / 2, y0 + 20, e, { taille: 13, gras: true });
  });
  lignes.forEach((l, i) => l.forEach((v, j) => {
    g += rect(x0 + j * cw, y0 + (i + 1) * lh, cw, lh, { fond: i === 0 ? fc('bleu') : '#ffffff', bord: i === 0 ? BLEU : AXE, ep: i === 0 ? 1.8 : 1.2 });
    g += texte(x0 + j * cw + cw / 2, y0 + (i + 1) * lh + 20, String(v), { taille: 13 });
  }));
  // Code Python
  const xc = 236;
  g += texte(xc, 24, 'En Python : une liste de dictionnaires', { taille: 13, gras: true, couleur: VIOLET, ancre: 'start' });
  const fmt = (v) => (typeof v === 'number' ? String(v) : `"${v}"`);
  const code = ['table = ['];
  lignes.forEach((l) => code.push('  {' + l.map((v, j) => `"${entetes[j]}": ${fmt(v)}`).join(', ') + '},'));
  code.push(']');
  g += rect(xc, y0, W - xc - 10, code.length * 24 + 12, { fond: '#fbf8fe', bord: VIOLET, ep: 1.2, rx: 6 });
  code.forEach((c, i) => (g += mono(xc + 10, y0 + 24 + i * 24, c, { taille: 12.5, couleur: i === 1 ? BLEU : ENCRE, gras: i === 1 })));
  g += fleche(x0 + entetes.length * cw + 4, y0 + lh * 1.5, xc - 4, y0 + 24 + 24 - 5, { couleur: BLEU, epaisseur: 1.8, pointe: 8 });
  const yb = y0 + Math.max((lignes.length + 1) * lh, code.length * 24 + 12) + 26;
  g += texte(x0, yb, 'une ligne = un dictionnaire (un enregistrement)', { taille: 12, couleur: BLEU, gras: true, ancre: 'start' });
  g += texte(x0, yb + 18, 'une colonne = une clé (un descripteur)', { taille: 12, couleur: VERT, gras: true, ancre: 'start' });
  return enveloppe(W, yb + 30, g);
}

/** Fusion de deux tables sur un descripteur commun. */
function sFusion({ t1, t2, cle } = {}) {
  const W = 660;
  let g = '';
  const cw = 80;
  const lh = 28;
  const dessine = (x, y, t, titre, cCle) => {
    g += texte(x, y - 10, titre, { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
    t.entetes.forEach((e, j) => {
      g += rect(x + j * cw, y, cw, lh, { fond: e === cle ? fc('orange') : '#e5ecf5', bord: AXE, ep: 1.2 });
      g += texte(x + j * cw + cw / 2, y + 19, e, { taille: 13, gras: true });
    });
    t.lignes.forEach((l, i) => l.forEach((v, j) => {
      g += rect(x + j * cw, y + (i + 1) * lh, cw, lh, { fond: t.entetes[j] === cle ? '#fffaf4' : '#ffffff', bord: AXE, ep: 1.2 });
      g += texte(x + j * cw + cw / 2, y + (i + 1) * lh + 19, String(v), { taille: 13, couleur: t.entetes[j] === cle ? ORANGE : ENCRE, gras: t.entetes[j] === cle });
    }));
  };
  dessine(14, 34, t1, t1.nom);
  dessine(14 + t1.entetes.length * cw + 70, 34, t2, t2.nom);
  // Fusion calculée
  const i1 = t1.entetes.indexOf(cle);
  const i2 = t2.entetes.indexOf(cle);
  const ent = [...t1.entetes, ...t2.entetes.filter((e) => e !== cle)];
  const lig = t1.lignes.map((l) => {
    const m = t2.lignes.find((r) => r[i2] === l[i1]);
    return [...l, ...m.filter((_, j) => j !== i2)];
  });
  const yR = 34 + (Math.max(t1.lignes.length, t2.lignes.length) + 1) * lh + 60;
  const xR = (W - ent.length * cw) / 2;
  g += fleche(W / 2, yR - 44, W / 2, yR - 26, { couleur: VERT, epaisseur: 2.4 });
  g += texte(W / 2 + 12, yR - 30, `fusion sur « ${cle} »`, { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  dessine(xR, yR, { entetes: ent, lignes: lig }, 'résultat');
  return enveloppe(W, yR + (lig.length + 1) * lh + 14, g);
}

/** Liste Python avec ses indices. */
function sListeIndices({ nom = 'notes', valeurs = [], acces = 2 } = {}) {
  const W = 560;
  let g = '';
  const t = 64;
  const x0 = (W - valeurs.length * t) / 2;
  g += mono(W / 2, 28, `${nom} = [${valeurs.join(', ')}]`, { taille: 16, ancre: 'middle' });
  valeurs.forEach((v, i) => {
    const c = i === acces;
    g += rect(x0 + i * t, 60, t, 46, { fond: c ? fc('orange') : fc('bleu'), bord: c ? ORANGE : BLEU, ep: 2 });
    g += texte(x0 + i * t + t / 2, 90, String(v), { taille: 18, gras: true });
    g += texte(x0 + i * t + t / 2, 128, `indice ${i}`, { taille: 13, couleur: c ? ORANGE : ATTENUE, gras: c });
  });
  g += mono(x0 + acces * t + t / 2, 160, `${nom}[${acces}] → ${valeurs[acces]}`, { taille: 15, ancre: 'middle', couleur: ORANGE, gras: true });
  g += texte(W / 2, 190, `len(${nom}) = ${valeurs.length} ; le dernier indice est ${valeurs.length - 1}`, { taille: 13, couleur: ATTENUE });
  return enveloppe(W, 204, g);
}

/** Dictionnaire : clés → valeurs. */
function sDictionnaire({ nom = 'eleve', paires = [] } = {}) {
  const W = 520;
  let g = '';
  g += texte(W / 2, 26, `Dictionnaire « ${nom} »`, { taille: 14, gras: true });
  paires.forEach(([k, v], i) => {
    const y = 44 + i * 50;
    g += rect(60, y, 150, 38, { fond: fc('vert'), bord: VERT, rx: 8 });
    g += mono(135, y + 25, `"${k}"`, { taille: 15, ancre: 'middle', gras: true });
    g += fleche(214, y + 19, 296, y + 19, { couleur: ATTENUE, epaisseur: 2 });
    g += rect(300, y, 160, 38, { fond: fc('bleu'), bord: BLEU, rx: 8 });
    g += mono(380, y + 25, typeof v === 'number' ? String(v) : `"${v}"`, { taille: 15, ancre: 'middle' });
  });
  const yb = 44 + paires.length * 50;
  g += texte(135, yb + 12, 'clés (uniques)', { taille: 13, gras: true, couleur: VERT });
  g += texte(380, yb + 12, 'valeurs', { taille: 13, gras: true, couleur: BLEU });
  g += mono(W / 2, yb + 42, `${nom}["${paires[0][0]}"] → "${paires[0][1]}"`, { taille: 14, ancre: 'middle', couleur: ORANGE, gras: true });
  return enveloppe(W, yb + 58, g);
}

/** Tableau de tableaux (matrice) et accès m[i][j]. */
function sMatrice({ m = [[1, 2, 3], [4, 5, 6]], i = 1, j = 2 } = {}) {
  const W = 540;
  let g = '';
  const t = 76;
  const x0 = 170;
  const y0 = 64;
  g += mono(W / 2, 26, `m = ${JSON.stringify(m).replace(/,/g, ', ')}`, { taille: 15, ancre: 'middle' });
  m[0].forEach((_, c) => (g += texte(x0 + c * t + t / 2, y0 - 10, `colonne ${c}`, { taille: 12, couleur: c === j ? ORANGE : ATTENUE, gras: c === j })));
  m.forEach((row, r) => {
    g += texte(x0 - 12, y0 + r * t + t / 2 + 5, `m[${r}] → ligne ${r}`, { taille: 13, couleur: r === i ? ORANGE : ATTENUE, ancre: 'end', gras: r === i });
    row.forEach((v, c) => {
      const s = r === i && c === j;
      g += rect(x0 + c * t, y0 + r * t, t, t, { fond: s ? fc('orange') : r === i ? '#fffaf4' : '#ffffff', bord: s ? ORANGE : AXE, ep: s ? 2.6 : 1.4 });
      g += texte(x0 + c * t + t / 2, y0 + r * t + t / 2 + 7, String(v), { taille: 19, gras: s });
    });
  });
  g += mono(W / 2, y0 + m.length * t + 34, `m[${i}][${j}] → ${m[i][j]}`, { taille: 16, ancre: 'middle', couleur: ORANGE, gras: true });
  return enveloppe(W, y0 + m.length * t + 50, g);
}

// ───────────────────────────── Terminale NSI ─────────────────────────────

/** Un graphe, sa matrice d'adjacence et ses listes d'adjacence (calculées depuis le dictionnaire). */
function sGrapheRepresentations({ graphe, pos } = {}) {
  const W = 660;
  let g = '';
  const noms = Object.keys(graphe);
  const aretes = [];
  noms.forEach((a) => graphe[a].forEach((b) => { if (a < b) aretes.push([a, b]); }));
  g += texte(110, 24, 'Graphe', { taille: 13, gras: true, couleur: BLEU });
  g += dessinGraphe({ sommets: pos, aretes, r: 20, poids: false });
  // Matrice
  const xm = 260;
  const t = 30;
  g += texte(xm + (noms.length * t) / 2 + 15, 24, 'Matrice d’adjacence', { taille: 13, gras: true, couleur: ORANGE });
  noms.forEach((n, i) => {
    g += texte(xm + 30 + i * t + t / 2, 52, n, { taille: 13, gras: true });
    g += texte(xm + 18, 58 + i * t + t / 2 + 5, n, { taille: 13, gras: true });
    noms.forEach((m, j) => {
      const v = graphe[n].includes(m) ? 1 : 0;
      g += rect(xm + 30 + j * t, 58 + i * t, t, t, { fond: v ? fc('orange') : '#ffffff', bord: AXE, ep: 1.2 });
      g += texte(xm + 30 + j * t + t / 2, 58 + i * t + t / 2 + 5, String(v), { taille: 14, gras: !!v, couleur: v ? ORANGE : ATTENUE });
    });
  });
  // Listes
  const xl = 450;
  g += texte(xl + 90, 24, 'Listes d’adjacence', { taille: 13, gras: true, couleur: VERT });
  noms.forEach((n, i) => {
    g += mono(xl, 76 + i * t, `"${n}": [${graphe[n].map((v) => `"${v}"`).join(', ')}]`, { taille: 13.5, couleur: ENCRE });
  });
  return enveloppe(W, Math.max(58 + noms.length * t + 24, Math.max(...Object.values(pos).map((p) => p[1])) + 34), g);
}

/** Parcours en largeur (niveaux et ordre de visite) ou en profondeur (ordre de visite), calculés. */
function sParcours({ graphe, pos, depart, type = 'largeur' } = {}) {
  const W = 620;
  const H = 360;
  let g = '';
  const noms = Object.keys(graphe);
  const aretes = [];
  noms.forEach((a) => graphe[a].forEach((b) => { if (a < b) aretes.push([a, b]); }));
  let ordre = [];
  const niveau = {};
  const parent = {};
  if (type === 'largeur') {
    const vus = new Set([depart]);
    const file = [depart];
    niveau[depart] = 0;
    while (file.length) {
      const s = file.shift();
      ordre.push(s);
      for (const v of graphe[s]) if (!vus.has(v)) { vus.add(v); niveau[v] = niveau[s] + 1; parent[v] = s; file.push(v); }
    }
  } else {
    const vus = new Set();
    const pp = (s) => {
      vus.add(s);
      ordre.push(s);
      for (const v of graphe[s]) if (!vus.has(v)) { parent[v] = s; pp(v); }
    };
    pp(depart);
  }
  const chemins = Object.entries(parent).map(([v, p]) => ({ chemin: [p, v], couleur: type === 'largeur' ? 'bleu' : 'violet' }));
  const etiq = {};
  ordre.forEach((s, i) => (etiq[s] = { s: type === 'largeur' ? `n° ${i + 1}, distance ${niveau[s]}` : `n° ${i + 1}`, dy: -30, couleur: type === 'largeur' ? 'bleu' : 'violet', gras: true }));
  g += dessinGraphe({ sommets: pos, aretes, r: 20, poids: false, chemins, etiquettes: etiq, couleursSommets: { [depart]: 'vert' } });
  g += texte(14, H - 34, `ordre de visite depuis ${depart} : ${ordre.join(', ')}`, { taille: 13, gras: true, couleur: type === 'largeur' ? BLEU : VIOLET, ancre: 'start' });
  g += texte(14, H - 14, type === 'largeur' ? 'traits épais : arêtes par lesquelles chaque sommet est découvert' : 'traits épais : on s’enfonce, puis on revient en arrière', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  return enveloppe(W, H, g);
}

/** Schéma relationnel : tables, clés primaires (soulignées) et clés étrangères (#). */
function sSchemaRelationnel({ tables = [], liens = [] } = {}) {
  const W = 660;
  let g = '';
  const bw = 180;
  const lh = 26;
  const pos = {};
  tables.forEach((t) => {
    const h = 34 + t.attributs.length * lh;
    pos[t.nom] = { x: t.x, y: t.y, h, attributs: t.attributs };
    g += rect(t.x, t.y, bw, h, { fond: '#ffffff', bord: BLEU, ep: 2, rx: 6 });
    g += rect(t.x, t.y, bw, 32, { fond: fc('bleu'), bord: BLEU, ep: 2, rx: 6 });
    g += texte(t.x + bw / 2, t.y + 22, t.nom, { taille: 15, gras: true, couleur: BLEU });
    t.attributs.forEach((a, i) => {
      const y = t.y + 34 + i * lh + 18;
      const pk = a.startsWith('*');
      const fk = a.startsWith('#');
      const nom = a.replace(/^[*#]/, '');
      g += texte(t.x + 12, y, (fk ? '# ' : '') + nom, { taille: 13, ancre: 'start', gras: pk, couleur: pk ? ROUGE : fk ? VIOLET : ENCRE });
      if (pk) g += ligne(t.x + 12, y + 3, t.x + 12 + nom.length * 8, y + 3, { couleur: ROUGE, epaisseur: 1.4 });
    });
  });
  const yA = (t, a) => {
    const p = pos[t];
    const i = p.attributs.findIndex((x) => x.replace(/^[*#]/, '') === a);
    return p.y + 34 + i * lh + 13;
  };
  liens.forEach(([t1, a1, t2, a2]) => {
    const p1 = pos[t1];
    const p2 = pos[t2];
    const y1 = yA(t1, a1);
    const y2 = yA(t2, a2);
    const versDroite = p2.x > p1.x;
    const xa = versDroite ? p1.x + bw : p1.x;
    const xb = versDroite ? p2.x : p2.x + bw;
    const xm = (xa + xb) / 2;
    g += flecheChemin([[xa, y1], [xm, y1], [xm, y2], [xb, y2]], { couleur: VIOLET, epaisseur: 1.8, pointe: 9 });
  });
  const yb = Math.max(...Object.values(pos).map((p) => p.y + p.h)) + 28;
  g += texte(14, yb, 'souligné : clé primaire', { taille: 12, gras: true, couleur: ROUGE, ancre: 'start' });
  g += texte(200, yb, '# : clé étrangère (flèche vers la clé primaire référencée)', { taille: 12, gras: true, couleur: VIOLET, ancre: 'start' });
  return enveloppe(W, yb + 14, g);
}

/** Jointure de deux tables sur clé primaire = clé étrangère (résultat calculé). */
function sJointure({ t1, t2, on, colonnes } = {}) {
  const W = 660;
  let g = '';
  const lh = 26;
  const dessine = (x, y, t, titre, larg, surl = []) => {
    g += texte(x, y - 8, titre, { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
    let xx = x;
    t.entetes.forEach((e, j) => {
      g += rect(xx, y, larg[j], lh, { fond: surl.includes(e) ? fc('orange') : '#e5ecf5', bord: AXE, ep: 1.2 });
      g += texte(xx + larg[j] / 2, y + 18, e, { taille: 12.5, gras: true });
      t.lignes.forEach((l, i) => {
        g += rect(xx, y + (i + 1) * lh, larg[j], lh, { fond: surl.includes(e) ? '#fffaf4' : '#ffffff', bord: AXE, ep: 1.2 });
        g += texte(xx + larg[j] / 2, y + (i + 1) * lh + 18, String(l[j]), { taille: 12.5, couleur: surl.includes(e) ? ORANGE : ENCRE });
      });
      xx += larg[j];
    });
    return xx;
  };
  const [c1, c2] = on;
  const x2 = dessine(14, 34, t1, t1.nom, t1.larg, [c1]);
  dessine(x2 + 40, 34, t2, t2.nom, t2.larg, [c2]);
  const i1 = t1.entetes.indexOf(c1);
  const i2 = t2.entetes.indexOf(c2);
  const res = [];
  t1.lignes.forEach((l) => t2.lignes.forEach((m) => { if (l[i1] === m[i2]) res.push([...l, ...m]); }));
  const ent = [...t1.entetes.map((e) => `${t1.nom}.${e}`), ...t2.entetes.map((e) => `${t2.nom}.${e}`)];
  const idx = colonnes.map((c) => ent.indexOf(c));
  const yR = 34 + (Math.max(t1.lignes.length, t2.lignes.length) + 1) * lh + 70;
  g += mono(W / 2, yR - 40, `JOIN ... ON ${t1.nom}.${c1} = ${t2.nom}.${c2}`, { taille: 13, ancre: 'middle', couleur: VERT, gras: true });
  g += fleche(W / 2, yR - 32, W / 2, yR - 20, { couleur: VERT, epaisseur: 2, pointe: 8 });
  const larg = colonnes.map((c) => Math.max(c.length * 7.6 + 16, 90));
  const tot = larg.reduce((a, b) => a + b, 0);
  dessine((W - tot) / 2, yR, { entetes: colonnes, lignes: res.map((r) => idx.map((k) => r[k])) }, 'résultat', larg);
  return enveloppe(W, yR + (res.length + 1) * lh + 14, g);
}

/** Croissance des complexités usuelles (courbes exactes). */
function sComplexite() {
  const W = 600;
  const H = 380;
  const m = { g: 56, d: 130, h: 20, b: 46 };
  const nmax = 20;
  const ymax = 100;
  const X = (n) => m.g + (n / nmax) * (W - m.g - m.d);
  const Y = (v) => H - m.b - (v / ymax) * (H - m.h - m.b);
  let g = '';
  for (let v = 0; v <= ymax; v += 20) {
    g += ligne(m.g, Y(v), W - m.d, Y(v), { couleur: GRILLE, epaisseur: 1 });
    g += texte(m.g - 8, Y(v) + 4, String(v), { taille: 11, couleur: ATTENUE, ancre: 'end' });
  }
  for (let n = 0; n <= nmax; n += 5) {
    g += ligne(X(n), m.h, X(n), H - m.b, { couleur: GRILLE, epaisseur: 1 });
    g += texte(X(n), H - m.b + 16, String(n), { taille: 11, couleur: ATTENUE });
  }
  g += fleche(m.g, H - m.b, W - m.d + 10, H - m.b, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += fleche(m.g, H - m.b, m.g, m.h - 6, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += texte(W - m.d + 8, H - m.b + 34, 'taille des données n', { taille: 12, couleur: ATTENUE, ancre: 'end', italique: true });
  g += texte(m.g + 14, m.h + 4, 'nombre d’opérations', { taille: 12, couleur: ATTENUE, ancre: 'start', italique: true });
  g += `<defs><clipPath id="cadreCx"><rect x="${m.g}" y="${m.h}" width="${W - m.g - m.d}" height="${H - m.h - m.b}"/></clipPath></defs>`;
  const fs = [
    { f: () => 1, n: 'O(1)', c: VERT, dy: 9 },
    { f: (n) => Math.log2(n), n: 'O(log n)', c: BLEU, dy: -5 },
    { f: (n) => n, n: 'O(n)', c: VIOLET },
    { f: (n) => n * Math.log2(n), n: 'O(n log n)', c: ORANGE },
    { f: (n) => n * n, n: 'O(n²)', c: ROUGE },
  ];
  fs.forEach((o) => {
    let d = '';
    for (let k = 0; k <= 400; k++) {
      const n = 1 + ((nmax - 1) * k) / 400;
      d += `${k ? 'L' : 'M'} ${nb(X(n))} ${nb(Y(o.f(n)))} `;
    }
    g += `<g clip-path="url(#cadreCx)">${chemin(d.trim(), { couleur: o.c, ep: 2.6 })}</g>`;
    // étiquette au bord droit, ou en haut si la courbe sort du cadre
    const vFin = o.f(nmax);
    let lx;
    let ly;
    if (vFin <= ymax) { lx = X(nmax) + 8; ly = Y(vFin) + 4 + (o.dy || 0); } else {
      let n = 1;
      while (o.f(n) < ymax) n += 0.01;
      lx = X(n) + 6;
      ly = m.h + 14;
    }
    g += texte(lx, ly, o.n, { taille: 13, gras: true, couleur: o.c, ancre: 'start' });
  });
  return enveloppe(W, H, g);
}

/** Pile d'appels de factorielle(n) : empilement puis dépilement. */
function sPileAppels({ n = 3 } = {}) {
  const W = 660;
  let g = '';
  const bh = 34;
  const bw = 284;
  const yBas = 60 + (n + 1) * (bh + 6);
  g += texte(166, 26, 'Empilement des appels', { taille: 14, gras: true, couleur: BLEU });
  g += texte(494, 26, 'Dépilement (calcul des résultats)', { taille: 14, gras: true, couleur: VERT });
  const fact = (k) => (k === 0 ? 1 : k * fact(k - 1));
  for (let k = n; k >= 0; k--) {
    const niveau = n - k;
    const y = yBas - (niveau + 1) * (bh + 6);
    g += rect(24, y, bw, bh, { fond: k === 0 ? fc('orange') : fc('bleu'), bord: k === 0 ? ORANGE : BLEU, rx: 6 });
    g += mono(24 + bw / 2, y + 22, k === 0 ? 'factorielle(0) → 1' : `factorielle(${k}) = ${k} × factorielle(${k - 1})`, { taille: 12.5, ancre: 'middle', gras: k === 0 });
    g += rect(352, y, bw, bh, { fond: fc('vert'), bord: VERT, rx: 6 });
    g += mono(352 + bw / 2, y + 22, k === 0 ? 'renvoie 1' : `renvoie ${k} × ${fact(k - 1)} = ${fact(k)}`, { taille: 12.5, ancre: 'middle', gras: k === n });
  }
  g += fleche(12, yBas - 4, 12, 62, { couleur: BLEU, epaisseur: 2.2 });
  g += fleche(648, 62, 648, yBas - 4, { couleur: VERT, epaisseur: 2.2 });
  g += texte(166, yBas + 22, 'cas de base atteint en haut de la pile', { taille: 12, couleur: ORANGE, italique: true });
  g += texte(494, yBas + 22, `résultat : factorielle(${n}) = ${fact(n)}`, { taille: 13, gras: true, couleur: VERT });
  return enveloppe(W, yBas + 34, g);
}

/** Tri fusion : arbre des découpages puis des fusions (calculé). */
function sTriFusion({ tab = [38, 27, 43, 3, 9, 82, 10, 5] } = {}) {
  const W = 660;
  let g = '';
  const cw = 26;
  const niveaux = [];
  const decoupe = (t, prof) => {
    (niveaux[prof] = niveaux[prof] || []).push(t);
    if (t.length > 1) {
      const mi = Math.floor(t.length / 2);
      decoupe(t.slice(0, mi), prof + 1);
      decoupe(t.slice(mi), prof + 1);
    }
  };
  decoupe(tab, 0);
  const prof = niveaux.length;
  const lh = 46;
  const blocsX = (lst) => {
    const tot = lst.reduce((s, t) => s + t.length * cw, 0) + (lst.length - 1) * 18;
    let x = (W - tot) / 2;
    return lst.map((t) => { const r = x; x += t.length * cw + 18; return r; });
  };
  const rangee = (lst, y, couleur) => {
    const xs = blocsX(lst);
    lst.forEach((t, k) => t.forEach((v, i) => {
      g += rect(xs[k] + i * cw, y, cw, 28, { fond: fc(couleur), bord: tc(couleur), ep: 1.4 });
      g += texte(xs[k] + i * cw + cw / 2, y + 19, String(v), { taille: 12.5, gras: true });
    }));
    return xs;
  };
  // Phase de découpage
  g += texte(14, 22, 'diviser', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  const posD = [];
  for (let p = 0; p < prof; p++) posD.push(rangee(niveaux[p], 30 + p * lh, p === prof - 1 ? 'violet' : 'bleu'));
  // Phase de fusion : on remonte
  const fusion = (a, b) => {
    const r = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) r.push(a[i] <= b[j] ? a[i++] : b[j++]);
    return r.concat(a.slice(i), b.slice(j));
  };
  let courant = niveaux[prof - 1].map((t) => [...t]);
  const y0 = 30 + prof * lh + 10;
  g += texte(14, y0 - 6, 'fusionner', { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  let p = prof - 2;
  let k = 0;
  while (p >= 0) {
    // regrouper selon les blocs du niveau p
    const suivant = [];
    let idx = 0;
    niveaux[p].forEach((t) => {
      if (t.length === 1) { suivant.push(courant[idx++]); return; }
      suivant.push(fusion(courant[idx], courant[idx + 1]));
      idx += 2;
    });
    courant = suivant;
    rangee(courant, y0 + k * lh, p === 0 ? 'vert' : 'orange');
    p--;
    k++;
  }
  return enveloppe(W, y0 + k * lh + 6, g);
}

/** Routage : chemin RIP (moins de sauts) et chemin OSPF (coût = 10⁸ / débit), calculés. */
function sRoutage({ sommets, liens, depart, arrivee } = {}) {
  const W = 640;
  const H = 400;
  let g = '';
  const cout = (d) => 1e8 / d;
  const aretes = liens.map(([a, b, d]) => [a, b, cout(d), d >= 1e9 ? `${d / 1e9} Gbit/s` : `${d / 1e6} Mbit/s`]);
  const rip = dijkstra(sommets, aretes, depart, arrivee, () => 1);
  const ospf = dijkstra(sommets, aretes, depart, arrivee, (a) => a[2]);
  g += dessinGraphe({ sommets, aretes, r: 22, chemins: [{ chemin: rip.chemin, couleur: 'bleu' }, { chemin: ospf.chemin, couleur: 'orange' }], couleursSommets: { [depart]: 'vert', [arrivee]: 'rouge' }, tailleNom: 14 });
  const coutRip = rip.chemin.slice(1).reduce((s, v, i) => s + aretes.find((a) => (a[0] === rip.chemin[i] && a[1] === v) || (a[1] === rip.chemin[i] && a[0] === v))[2], 0);
  g += texte(14, H - 54, `RIP (moins de sauts) : ${rip.chemin.join(' → ')} : ${rip.dist} sauts, coût OSPF ${virg(coutRip)}`, { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  g += texte(14, H - 34, `OSPF (coût minimal) : ${ospf.chemin.join(' → ')} : ${ospf.chemin.length - 1} sauts, coût ${virg(ospf.dist)}`, { taille: 13, gras: true, couleur: ORANGE, ancre: 'start' });
  g += texte(14, H - 14, 'coût d’une liaison = 10⁸ ÷ débit (en bit/s)', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  return enveloppe(W, H, g);
}

/** Adresse IPv4 : partie réseau et partie machine (exemple). */
function sAdresseIP({ ip = '192.168.1.10', nReseau = 3 } = {}) {
  const W = 600;
  let g = '';
  const parts = ip.split('.');
  const t = 92;
  const x0 = (W - parts.length * t - (parts.length - 1) * 16) / 2;
  parts.forEach((p, i) => {
    const x = x0 + i * (t + 16);
    const res = i < nReseau;
    g += rect(x, 40, t, 46, { fond: res ? fc('bleu') : fc('orange'), bord: res ? BLEU : ORANGE, ep: 2, rx: 6 });
    g += mono(x + t / 2, 70, p, { taille: 20, ancre: 'middle', gras: true });
    g += texte(x + t / 2, 108, (+p).toString(2).padStart(8, '0'), { taille: 12, couleur: ATTENUE });
    if (i < parts.length - 1) g += texte(x + t + 8, 74, '.', { taille: 24, gras: true });
  });
  const xr2 = x0 + nReseau * (t + 16) - 16;
  g += accolade(x0, xr2, 118, { couleur: BLEU, h: 14 });
  g += texte((x0 + xr2) / 2, 152, 'partie réseau (commune au réseau local)', { taille: 13, gras: true, couleur: BLEU });
  g += accolade(xr2 + 16, x0 + parts.length * (t + 16) - 16, 118, { couleur: ORANGE, h: 14 });
  g += texte(xr2 + 16 + t / 2, 152, 'partie machine', { taille: 13, gras: true, couleur: ORANGE });
  g += texte(W / 2, 24, 'quatre nombres de 0 à 255 (chacun sur 8 bits)', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 166, g);
}

/** Pile (LIFO) et file (FIFO). */
function sPileFile() {
  const W = 640;
  let g = '';
  // Pile
  const px = 90;
  const elems = ['a', 'b', 'c'];
  g += texte(px + 50, 24, 'Pile (LIFO)', { taille: 15, gras: true, couleur: BLEU });
  g += chemin(`M ${px} 60 L ${px} 230 L ${px + 100} 230 L ${px + 100} 60`, { couleur: ENCRE, ep: 2.4 });
  elems.forEach((e, i) => {
    const y = 230 - (i + 1) * 40;
    g += rect(px + 8, y + 3, 84, 34, { fond: i === elems.length - 1 ? fc('orange') : fc('bleu'), bord: i === elems.length - 1 ? ORANGE : BLEU, ep: 2, rx: 4 });
    g += texte(px + 50, y + 26, e, { taille: 16, gras: true });
  });
  g += fleche(px - 40, 70, px + 30, 104, { couleur: VERT, epaisseur: 2.2 });
  g += texte(px - 44, 60, 'empiler', { taille: 13, gras: true, couleur: VERT, ancre: 'middle' });
  g += fleche(px + 70, 104, px + 140, 70, { couleur: ROUGE, epaisseur: 2.2 });
  g += texte(px + 150, 60, 'dépiler', { taille: 13, gras: true, couleur: ROUGE, ancre: 'middle' });
  g += texte(px + 50, 256, 'on entre et on sort par le sommet', { taille: 12, couleur: ATTENUE, italique: true });
  g += texte(px + 112, 126, '← sommet', { taille: 12, couleur: ORANGE, ancre: 'start', gras: true });
  // File
  const fx = 340;
  const fy = 120;
  g += texte(fx + 140, 24, 'File (FIFO)', { taille: 15, gras: true, couleur: BLEU });
  g += ligne(fx, fy, fx + 260, fy, { couleur: ENCRE, epaisseur: 2.4 }) + ligne(fx, fy + 50, fx + 260, fy + 50, { couleur: ENCRE, epaisseur: 2.4 });
  ['a', 'b', 'c'].forEach((e, i) => {
    const x = fx + 200 - i * 64;
    g += rect(x - 26, fy + 8, 52, 34, { fond: i === 0 ? fc('orange') : fc('bleu'), bord: i === 0 ? ORANGE : BLEU, ep: 2, rx: 4 });
    g += texte(x, fy + 31, e, { taille: 16, gras: true });
  });
  g += fleche(fx - 40, fy + 25, fx + 6, fy + 25, { couleur: VERT, epaisseur: 2.2 });
  g += texte(fx - 20, fy - 10, 'enfiler', { taille: 13, gras: true, couleur: VERT });
  g += texte(fx - 20, fy + 70, '(queue)', { taille: 12, couleur: ATTENUE });
  g += fleche(fx + 254, fy + 25, fx + 296, fy + 25, { couleur: ROUGE, epaisseur: 2.2 });
  g += texte(fx + 276, fy - 10, 'défiler', { taille: 13, gras: true, couleur: ROUGE });
  g += texte(fx + 276, fy + 70, '(tête)', { taille: 12, couleur: ATTENUE });
  g += texte(fx + 130, 256, 'premier entré, premier sorti', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 270, g);
}

/** Liste chaînée : cellules valeur + référence vers la suivante. */
function sListeChainee({ valeurs = [12, 7, 25, 3] } = {}) {
  const W = 640;
  let g = '';
  const cw = 108;
  const gap = 36;
  const x0 = 70;
  const y = 70;
  g += texte(x0 - 50, y + 26, 'tête', { taille: 13, gras: true, couleur: VERT, ancre: 'middle' });
  g += fleche(x0 - 30, y + 22, x0 - 4, y + 22, { couleur: VERT, epaisseur: 2 });
  valeurs.forEach((v, i) => {
    const x = x0 + i * (cw + gap);
    g += rect(x, y, cw * 0.6, 44, { fond: fc('bleu'), bord: BLEU, ep: 2 });
    g += rect(x + cw * 0.6, y, cw * 0.4, 44, { fond: '#ffffff', bord: BLEU, ep: 2 });
    g += texte(x + cw * 0.3, y + 28, String(v), { taille: 17, gras: true });
    const xc = x + cw * 0.8;
    if (i < valeurs.length - 1) {
      g += `<circle cx="${nb(xc)}" cy="${y + 22}" r="4" fill="${ENCRE}"/>`;
      g += fleche(xc, y + 22, x + cw + gap - 3, y + 22, { couleur: ENCRE, epaisseur: 2 });
    } else {
      g += ligne(xc - 12, y + 34, xc + 12, y + 10, { couleur: ROUGE, epaisseur: 2 });
      g += texte(xc, y + 64, 'None', { taille: 12, couleur: ROUGE, gras: true });
    }
  });
  g += texte(x0 + cw * 0.3, y - 14, 'valeur', { taille: 12, couleur: BLEU });
  g += texte(x0 + cw * 0.8, y - 14, 'suivante', { taille: 12, couleur: ENCRE });
  g += texte(W / 2, y + 100, 'une cellule = une valeur + une référence vers la cellule suivante', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, y + 114, g);
}

/** Arbre binaire de recherche construit par insertions successives (vérifié), avec vocabulaire. */
function sABR({ cles = [8, 3, 10, 1, 6, 14, 4, 7, 13] } = {}) {
  const W = 640;
  let racine = null;
  const ins = (n, v) => (n ? (v < n.v ? { ...n, g: ins(n.g, v) } : { ...n, d: ins(n.d, v) }) : { v, g: null, d: null });
  cles.forEach((v) => (racine = ins(racine, v)));
  const pos = [];
  const place = (n, x, y, dx, prof) => {
    if (!n) return;
    pos.push({ n, x, y, prof });
    place(n.g, x - dx, y + 70, dx / 2, prof + 1);
    place(n.d, x + dx, y + 70, dx / 2, prof + 1);
  };
  place(racine, 300, 50, 140, 0);
  const hauteur = Math.max(...pos.map((p) => p.prof));
  let g = '';
  pos.forEach((p) => {
    for (const e of [p.n.g, p.n.d]) {
      if (!e) continue;
      const q = pos.find((r) => r.n === e);
      const a = bordCercle(p.x, p.y, 20, q.x, q.y);
      const b = bordCercle(q.x, q.y, 20, p.x, p.y);
      g += ligne(a[0], a[1], b[0], b[1], { couleur: ENCRE, epaisseur: 2 });
    }
  });
  pos.forEach((p) => {
    const feuille = !p.n.g && !p.n.d;
    const c = p.prof === 0 ? 'orange' : feuille ? 'vert' : 'bleu';
    g += cercle(p.x, p.y, 20, { couleur: tc(c), fond: fc(c), epaisseur: 2.2 });
    g += texte(p.x, p.y + 6, String(p.n.v), { taille: 16, gras: true });
  });
  // Profondeurs
  for (let k = 0; k <= hauteur; k++) g += texte(560, 56 + k * 70, `profondeur ${k}`, { taille: 12, couleur: ATTENUE, ancre: 'start' });
  g += texte(300 + 28, 36, 'racine', { taille: 13, gras: true, couleur: ORANGE, ancre: 'start' });
  const yb = 50 + hauteur * 70 + 44;
  g += texte(14, yb, `vert : feuilles ; hauteur de l’arbre : ${hauteur} ; taille : ${cles.length} nœuds`, { taille: 13, gras: true, couleur: VERT, ancre: 'start' });
  g += texte(14, yb + 20, 'pour chaque nœud : clés plus petites à gauche, plus grandes à droite', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  // Vérification de la propriété d'ABR
  const ok = (n, min, max) => !n || (n.v > min && n.v < max && ok(n.g, min, n.v) && ok(n.d, n.v, max));
  if (!ok(racine, -Infinity, Infinity)) throw new Error('ABR invalide');
  return enveloppe(W, yb + 34, g);
}

// ───────────────────────────── Sciences de l'ingénieur ─────────────────────────────

/** Diagramme pieuvre : système au centre, éléments extérieurs, fonction principale et contraintes. */
function sPieuvre({ systeme, elements = [], fp, fcs = [] } = {}) {
  const W = 660;
  const H = 400;
  const cx = W / 2;
  const cy = 190;
  let g = '';
  const pos = {};
  elements.forEach((e) => (pos[e.id] = e));
  // FP : courbe d'un élément à l'autre en passant par le système
  const [a, b] = fp.entre.map((id) => pos[id]);
  const qy = 2 * cy - (a.y + b.y) / 2;
  g += chemin(`M ${a.x} ${a.y} Q ${cx} ${qy} ${b.x} ${b.y}`, { couleur: ROUGE, ep: 2.6 });
  const tq = 0.25;
  const fx = (1 - tq) ** 2 * a.x + 2 * tq * (1 - tq) * cx + tq * tq * b.x;
  const fy = (1 - tq) ** 2 * a.y + 2 * tq * (1 - tq) * qy + tq * tq * b.y;
  g += texte(fx - 8, fy - 12, fp.nom, { taille: 14, gras: true, couleur: ROUGE, ancre: 'end' });
  fcs.forEach((f) => {
    const e = pos[f.id];
    g += ligne(cx, cy, e.x, e.y, { couleur: BLEU, epaisseur: 2 });
    const t = f.t ?? 0.55;
    g += rect(cx + (e.x - cx) * t - 22, cy + (e.y - cy) * t - 11, 44, 20, { fond: '#ffffff', bord: 'none', ep: 0 });
    g += texte(cx + (e.x - cx) * t, cy + (e.y - cy) * t + 5, f.nom, { taille: 13, gras: true, couleur: BLEU });
  });
  g += ellipse(cx, cy, 82, 32, { fond: fc('orange'), bord: ORANGE, ep: 2.2 });
  g += texte(cx, cy + 5, systeme, { taille: 14, gras: true, couleur: ORANGE });
  elements.forEach((e) => {
    const w = Math.max(96, e.nom.split('\n').reduce((m, l) => Math.max(m, l.length), 0) * 8 + 20);
    const h = 22 + e.nom.split('\n').length * 16;
    g += rect(e.x - w / 2, e.y - h / 2, w, h, { fond: fc('bleu'), bord: BLEU, rx: h / 2 });
    g += texte(e.x, e.y + 5 - (e.nom.split('\n').length - 1) * 8, e.nom, { taille: 13, gras: true, interligne: 1.2 });
  });
  let yl = H + 4;
  g += texte(14, yl, `${fp.nom} : ${fp.texte}`, { taille: 12.5, gras: true, couleur: ROUGE, ancre: 'start' });
  fcs.forEach((f) => { yl += 18; g += texte(14, yl, `${f.nom} : ${f.texte}`, { taille: 12.5, couleur: BLEU, ancre: 'start' }); });
  return enveloppe(W, yl + 14, g);
}

/** Flux de puissance à travers des étages en cascade (largeurs proportionnelles aux puissances). */
function sRendements({ Pabs, etages = [], unite = 'W' } = {}) {
  const W = 660;
  let g = '';
  const k = 110 / Pabs; // épaisseur en unités par watt
  const yH = 60;
  const x0 = 20;
  const bw = 120;
  const gap = 90;
  let P = Pabs;
  let x = x0;
  const fmtP = (v) => `${virg(v, 2)} ${unite}`;
  // entrée
  g += rect(x, yH, 70, P * k, { fond: '#f6c27a', bord: 'none', ep: 0, opacite: 0.9 });
  g += texte(x + 35, yH - 12, `${fmtP(P)}`, { taille: 13, gras: true, couleur: ORANGE });
  g += texte(x + 35, yH - 28, 'absorbée', { taille: 12, couleur: ATTENUE });
  x += 70;
  etages.forEach((e, i) => {
    const Pu = P * e.eta;
    const pertes = P - Pu;
    g += rect(x, yH - 6, bw, P * k + 12, { fond: fc('bleu'), bord: BLEU, ep: 2, rx: 6 });
    g += texte(x + bw / 2, yH + (P * k) / 2 - 2, e.nom, { taille: 14, gras: true });
    g += texte(x + bw / 2, yH + (P * k) / 2 + 16, `η = ${virg(e.eta, 2)}`, { taille: 13, couleur: BLEU, gras: true });
    // sortie utile (en haut) et pertes (en bas, vers le bas)
    const xs = x + bw;
    g += rect(xs, yH, gap, Pu * k, { fond: '#f6c27a', bord: 'none', ep: 0, opacite: 0.9 });
    const yp = yH + Pu * k;
    const tp = pertes * k;
    g += `<path d="M ${xs} ${nb(yp)} L ${xs + 22} ${nb(yp)} Q ${nb(xs + 22 + tp)} ${nb(yp)} ${nb(xs + 22 + tp)} ${nb(yp + 60)} L ${xs + 22} ${nb(yp + 60)} Q ${xs + 22} ${nb(yp + tp)} ${xs} ${nb(yp + tp)} Z" fill="${ROUGE}" fill-opacity="0.35" stroke="none"/>`;
    g += texte(xs + 26 + tp / 2, yp + 80, `pertes ${fmtP(pertes)}`, { taille: 12, gras: true, couleur: ROUGE });
    g += texte(xs + gap / 2 + 10, yH - 12, fmtP(Pu), { taille: 13, gras: true, couleur: ORANGE });
    P = Pu;
    x = xs + gap;
  });
  const etaG = etages.reduce((s, e) => s * e.eta, 1);
  g += texte(x - gap / 2 + 10, yH - 28, 'utile', { taille: 12, couleur: ATTENUE });
  g += texte(W / 2, yH + Pabs * k + 120, `rendement global : η = ${etages.map((e) => virg(e.eta, 2)).join(' × ')} = ${virg(etaG, 4)} = ${virg(etaG * 100, 2)} %`, { taille: 14, gras: true, couleur: VERT });
  g += texte(W / 2, yH + Pabs * k + 140, `vérification : ${virg(Pabs * etaG, 2)} ÷ ${virg(Pabs, 2)} = ${virg(etaG, 4)}`, { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, yH + Pabs * k + 154, g);
}

/** Engrenage réducteur : pignon d'entrée et roue de sortie (rapport k = Z₂ / Z₁). */
function sEngrenages({ z1 = 10, z2 = 30 } = {}) {
  const W = 620;
  let g = '';
  const m = 6; // module (unités de dessin) : rayon primitif = m z / 2
  const r1 = (m * z1) / 2;
  const r2 = (m * z2) / 2;
  const cy = 150;
  const c1 = 130;
  const c2 = c1 + r1 + r2;
  const roue = (cx, r, z, phase, coul) => {
    let d = '';
    const ra = r + m * 0.9;
    const rb = r - m * 1.1;
    for (let i = 0; i < z; i++) {
      const a0 = phase + (2 * Math.PI * i) / z;
      const da = (2 * Math.PI) / z;
      const pts = [[rb, a0], [ra, a0 + da * 0.18], [ra, a0 + da * 0.42], [rb, a0 + da * 0.6]];
      pts.forEach(([rr, a], j) => (d += `${i === 0 && j === 0 ? 'M' : 'L'} ${nb(cx + rr * Math.cos(a))} ${nb(cy + rr * Math.sin(a))} `));
      d += `L ${nb(cx + rb * Math.cos(a0 + da))} ${nb(cy + rb * Math.sin(a0 + da))} `;
    }
    return chemin(d + 'Z', { couleur: coul, ep: 1.6, fond: coul === BLEU ? '#dbe7fb' : '#fde3c8' }) + cercle(cx, cy, 6, { couleur: coul, fond: '#ffffff', epaisseur: 2 });
  };
  g += roue(c1, r1, z1, 0, BLEU);
  g += roue(c2, r2, z2, Math.PI / z2, ORANGE);
  // Sens de rotation : opposés
  const arc = (cx, r, sens, coul) => {
    const a1 = -Math.PI / 2 - 0.7;
    const a2 = -Math.PI / 2 + 0.7;
    const [s, e] = sens > 0 ? [a1, a2] : [a2, a1];
    const R = r + 18;
    const ex = cx + R * Math.cos(e);
    const ey = cy + R * Math.sin(e);
    const tang = e + (sens > 0 ? Math.PI / 2 : -Math.PI / 2);
    return `<path d="M ${nb(cx + R * Math.cos(s))} ${nb(cy + R * Math.sin(s))} A ${R} ${R} 0 0 ${sens > 0 ? 1 : 0} ${nb(ex)} ${nb(ey)}" fill="none" stroke="${coul}" stroke-width="2.4"/>` +
      polygone([[ex + 10 * Math.cos(tang), ey + 10 * Math.sin(tang)], [ex + 6 * Math.cos(tang + 2.2), ey + 6 * Math.sin(tang + 2.2)], [ex + 6 * Math.cos(tang - 2.2), ey + 6 * Math.sin(tang - 2.2)]], { couleur: coul, fond: coul, opacite: 1, epaisseur: 1 });
  };
  g += arc(c1, r1, 1, BLEU) + arc(c2, r2, -1, ORANGE);
  const k = z2 / z1;
  g += texte(c1, cy + r2 + 26, `entrée : pignon, ${z1} dents`, { taille: 13, gras: true, couleur: BLEU });
  g += texte(c1, cy + r2 + 44, 'rapide, faible couple', { taille: 12, couleur: BLEU });
  g += texte(c2 + r2 + 24, cy - 6, `sortie : roue, ${z2} dents`, { taille: 13, gras: true, couleur: ORANGE, ancre: 'start' });
  g += texte(c2 + r2 + 24, cy + 12, 'lente, couple plus grand', { taille: 12, couleur: ORANGE, ancre: 'start' });
  g += texte(W / 2, 22, `rapport de réduction k = ${z2} ÷ ${z1} = ${k}`, { taille: 14, gras: true });
  g += texte(W / 2, cy + r2 + 80, `ω sortie = ω entrée ÷ ${k}   ;   C sortie = C entrée × ${k}   (sans pertes)`, { taille: 13, gras: true, couleur: VERT });
  return enveloppe(W, cy + r2 + 94, g);
}

/** Numérisation : échantillonnage puis quantification sur n bits (calculés). */
function sCAN({ n = 3, plage = 5, nEch = 12 } = {}) {
  const W = 620;
  const H = 360;
  const m = { g: 70, d: 20, h: 30, b: 50 };
  const T = 1;
  const X = (t) => m.g + (t / T) * (W - m.g - m.d);
  const Y = (u) => H - m.b - (u / plage) * (H - m.h - m.b);
  const f = (t) => 2.5 + 1.8 * Math.sin(2 * Math.PI * t * 1.1 + 0.3) + 0.4 * Math.sin(2 * Math.PI * t * 2.7);
  const N = 2 ** n;
  const q = plage / (N - 1);
  let g = '';
  for (let k = 0; k < N; k++) {
    g += ligne(m.g, Y(k * q), W - m.d, Y(k * q), { couleur: GRILLE, epaisseur: 1 });
    g += texte(m.g - 8, Y(k * q) + 4, k.toString(2).padStart(n, '0'), { taille: 11.5, couleur: VIOLET, ancre: 'end', gras: true });
  }
  g += fleche(m.g, H - m.b, W - m.d + 4, H - m.b, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += fleche(m.g, H - m.b, m.g, m.h - 12, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += texte(W - m.d, H - m.b + 18, 'temps', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  g += texte(m.g - 8, m.h - 16, 'code', { taille: 12, couleur: VIOLET, ancre: 'end', gras: true });
  let d = '';
  for (let i = 0; i <= 300; i++) d += `${i ? 'L' : 'M'} ${nb(X((i / 300) * T))} ${nb(Y(f((i / 300) * T)))} `;
  g += chemin(d.trim(), { couleur: BLEU, ep: 2.4 });
  let dq = '';
  for (let i = 0; i < nEch; i++) {
    const t = ((i + 0.5) * T) / nEch;
    const v = f(t);
    const code = Math.round(v / q);
    const vq = code * q;
    g += ligne(X(t), H - m.b, X(t), Y(v), { couleur: AXE, epaisseur: 1, pointilles: true });
    g += `<circle cx="${nb(X(t))}" cy="${nb(Y(v))}" r="3.5" fill="${BLEU}"/>`;
    const xa = X(t - T / nEch / 2);
    const xb = X(t + T / nEch / 2);
    dq += `${i ? 'L' : 'M'} ${nb(xa)} ${nb(Y(vq))} L ${nb(xb)} ${nb(Y(vq))} `;
    g += `<circle cx="${nb(X(t))}" cy="${nb(Y(vq))}" r="3.5" fill="${ORANGE}"/>`;
  }
  g += chemin(dq.trim(), { couleur: ORANGE, ep: 2.2 });
  g += texte(m.g + 6, H - 14, `bleu : signal analogique et ses échantillons ; orange : valeurs quantifiées sur ${n} bits (${N} niveaux)`, { taille: 12, couleur: ATTENUE, ancre: 'start' });
  return enveloppe(W, H, g);
}

/** Transmission série et parallèle d'un octet. */
function sSerieParallele({ octet = '10110010' } = {}) {
  const W = 640;
  let g = '';
  const bits = octet.split('');
  g += texte(14, 24, 'Série : un seul fil, les bits l’un après l’autre', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  g += boite2(14, 40, 90, 40, 'Émetteur', '', { couleur: 'bleu', tt: 13 });
  g += boite2(W - 104, 40, 90, 40, 'Récepteur', '', { couleur: 'vert', tt: 13 });
  g += ligne(104, 60, W - 104, 60, { couleur: ENCRE, epaisseur: 2 });
  bits.forEach((b, i) => {
    const x = 140 + i * 44;
    g += rect(x, 48, 34, 24, { fond: b === '1' ? fc('orange') : '#ffffff', bord: ORANGE, ep: 1.6, rx: 4 });
    g += texte(x + 17, 65, b, { taille: 14, gras: true });
  });
  g += fleche(140, 92, 140 + 7 * 44 + 34, 92, { couleur: ATTENUE, epaisseur: 1.6, pointe: 8 });
  g += texte(140 + (7 * 44 + 34) / 2, 108, 'sens de déplacement', { taille: 12, couleur: ATTENUE, italique: true });
  const y0 = 150;
  g += texte(14, y0 - 12, 'Parallèle : 8 fils, les 8 bits en même temps', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  g += boite2(14, y0, 90, 8 * 22, 'Émetteur', '', { couleur: 'bleu', tt: 13 });
  g += boite2(W - 104, y0, 90, 8 * 22, 'Récepteur', '', { couleur: 'vert', tt: 13 });
  bits.forEach((b, i) => {
    const y = y0 + 11 + i * 22;
    g += ligne(104, y, W - 104, y, { couleur: ENCRE, epaisseur: 1.6 });
    g += rect(W / 2 - 17, y - 9, 34, 18, { fond: b === '1' ? fc('orange') : '#ffffff', bord: ORANGE, ep: 1.4, rx: 3 });
    g += texte(W / 2, y + 5, b, { taille: 13, gras: true });
  });
  return enveloppe(W, y0 + 8 * 22 + 14, g);
}

/** Courbe contrainte–déformation (allure) : matériau ductile et matériau fragile, ou contrainte admissible. */
function sCourbeTraction({ mode = 'ductile', Re = 300, s = 3, points = [] } = {}) {
  const W = 620;
  const H = 360;
  const m = { g: 64, d: 30, h: 30, b: 48 };
  const emax = 1;
  const smax = mode === 'securite' ? 1.45 * Re : 1.25;
  const X = (e) => m.g + (e / emax) * (W - m.g - m.d);
  const Y = (v) => H - m.b - (v / smax) * (H - m.h - m.b);
  let g = '';
  g += fleche(m.g, H - m.b, W - m.d + 6, H - m.b, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += fleche(m.g, H - m.b, m.g, m.h - 14, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += texte(W - m.d, H - m.b + 20, 'déformation ε', { taille: 13, couleur: ATTENUE, ancre: 'end', italique: true });
  g += texte(m.g + 8, m.h - 4, 'contrainte σ', { taille: 13, couleur: ATTENUE, ancre: 'start', italique: true });
  if (mode === 'ductile') {
    // Allure schématique (non à l'échelle) : élastique linéaire, plastique, maximum Rm, striction, rupture.
    const eE = 0.12;
    const re = 0.75;
    const rm = 1.0;
    const pts = [];
    for (let i = 0; i <= 40; i++) pts.push([(eE * i) / 40, (re * i) / 40]);
    for (let i = 1; i <= 60; i++) { const u = i / 60; pts.push([eE + u * (0.6 - eE), re + (rm - re) * Math.sin((u * Math.PI) / 2)]); }
    for (let i = 1; i <= 30; i++) { const u = i / 30; pts.push([0.6 + u * 0.22, rm - 0.18 * u * u]); }
    g += chemin(pts.map(([e, v], i) => `${i ? 'L' : 'M'} ${nb(X(e))} ${nb(Y(v))}`).join(' '), { couleur: BLEU, ep: 2.8 });
    const [eR, vR] = pts[pts.length - 1];
    g += texte(X(eR) + 4, Y(vR) - 10, '× rupture', { taille: 12, couleur: BLEU, ancre: 'start', gras: true });
    g += ligne(m.g, Y(re), X(eE), Y(re), { couleur: ORANGE, epaisseur: 1.2, pointilles: true });
    g += texte(m.g - 6, Y(re) + 4, 'Re', { taille: 13, gras: true, couleur: ORANGE, ancre: 'end' });
    g += ligne(m.g, Y(rm), X(0.6), Y(rm), { couleur: ROUGE, epaisseur: 1.2, pointilles: true });
    g += texte(m.g - 6, Y(rm) + 4, 'Rm', { taille: 13, gras: true, couleur: ROUGE, ancre: 'end' });
    g += ligne(X(eE), H - m.b, X(eE), Y(re), { couleur: AXE, epaisseur: 1, pointilles: true });
    g += texte(X(eE / 2), H - m.b + 16, 'élastique', { taille: 12, gras: true, couleur: VERT });
    g += texte(X(0.36), H - m.b + 16, 'domaine plastique', { taille: 12, gras: true, couleur: VIOLET });
    g += texte(X(0.05) + 30, Y(0.35) + 4, 'pente E', { taille: 12, gras: true, couleur: VERT, ancre: 'start' });
    g += texte(X(0.5), Y(rm) - 12, 'acier doux (ductile)', { taille: 13, gras: true, couleur: BLEU });
    // matériau fragile : droite jusqu'à la rupture
    g += chemin(`M ${X(0)} ${Y(0)} L ${nb(X(0.05))} ${nb(Y(0.62))}`, { couleur: ROUGE, ep: 2.4 });
    g += texte(X(0.05) + 4, Y(0.62) - 8, '× fonte, verre (fragile)', { taille: 12, gras: true, couleur: ROUGE, ancre: 'start' });
    g += texte(W - m.d, H - 10, 'allure des courbes, non à l’échelle', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'end' });
    return enveloppe(W, H, g);
  }
  // mode « securite » : domaine élastique, Re, contrainte admissible Re / s, deux pièces testées
  const eE = 0.5;
  g += chemin(`M ${X(0)} ${Y(0)} L ${nb(X(eE))} ${nb(Y(Re))} Q ${nb(X(0.7))} ${nb(Y(Re * 1.12))} ${nb(X(0.95))} ${nb(Y(Re * 1.2))}`, { couleur: BLEU, ep: 2.6 });
  const adm = Re / s;
  g += `<rect x="${m.g}" y="${nb(Y(adm))}" width="${W - m.g - m.d}" height="${nb(Y(0) - Y(adm))}" fill="${VERT}" fill-opacity="0.08"/>`;
  g += ligne(m.g, Y(Re), W - m.d, Y(Re), { couleur: ORANGE, epaisseur: 1.6, pointilles: true });
  g += texte(m.g - 6, Y(Re) + 4, `${Re}`, { taille: 12, gras: true, couleur: ORANGE, ancre: 'end' });
  g += texte(W - m.d - 4, Y(Re) - 8, `limite élastique Re = ${Re} MPa`, { taille: 12, gras: true, couleur: ORANGE, ancre: 'end' });
  g += ligne(m.g, Y(adm), W - m.d, Y(adm), { couleur: VERT, epaisseur: 2 });
  g += texte(m.g - 6, Y(adm) + 4, `${virg(adm)}`, { taille: 12, gras: true, couleur: VERT, ancre: 'end' });
  g += texte(W - m.d - 4, Y(adm) - 8, `σ admissible = ${Re} ÷ ${s} = ${virg(adm)} MPa`, { taille: 12, gras: true, couleur: VERT, ancre: 'end' });
  points.forEach((p) => {
    const ok = p <= adm;
    const e = (p / Re) * eE;
    g += `<circle cx="${nb(X(e))}" cy="${nb(Y(p))}" r="6" fill="${ok ? VERT : ROUGE}"/>`;
    g += texte(X(e) - 10, Y(p) + 5, `${p} MPa : ${ok ? 'validée' : 'refusée'}`, { taille: 12, gras: true, couleur: ok ? VERT : ROUGE, ancre: 'end' });
  });
  g += texte(m.g + 90, H - m.b - 10, 'zone sûre', { taille: 12, gras: true, couleur: VERT, ancre: 'start' });
  g += texte(W - m.d, H - 10, 'σ en MPa ; allure de la courbe, non à l’échelle au-delà de Re', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'end' });
  return enveloppe(W, H, g);
}

/** Barre en traction : longueur initiale, allongement, force, section. */
function sBarreTraction() {
  const W = 620;
  let g = '';
  const y = 90;
  const L0 = 360;
  const dL = 40;
  const x0 = 110;
  // encastrement à gauche
  g += rect(x0 - 24, y - 50, 24, 100, { fond: '#e9edf2', bord: ENCRE, ep: 2 });
  for (let i = 0; i < 9; i++) g += ligne(x0 - 24, y - 44 + i * 11, x0 - 34, y - 36 + i * 11, { couleur: ENCRE, epaisseur: 1.2 });
  g += rect(x0, y - 14, L0 + dL, 28, { fond: 'none', bord: ATTENUE, ep: 1.2, pointilles: true });
  g += rect(x0, y - 15, L0, 30, { fond: '#dfe7f1', bord: ENCRE, ep: 2 });
  g += fleche(x0 + L0 + dL, y, x0 + L0 + dL + 70, y, { couleur: ROUGE, epaisseur: 3 });
  g += texte(x0 + L0 + dL + 40, y - 12, 'F', { taille: 17, gras: true, couleur: ROUGE, italique: true });
  // cotes
  const cote = (xa, xb, yy, s, c) => fleche(xa + 2, yy, xb, yy, { couleur: c, epaisseur: 1.4, pointe: 7 }) + fleche(xb - 2, yy, xa, yy, { couleur: c, epaisseur: 1.4, pointe: 7 }) + texte((xa + xb) / 2, yy - 6, s, { taille: 14, gras: true, couleur: c, italique: true });
  g += cote(x0, x0 + L0, y + 44, 'L₀', BLEU);
  g += cote(x0 + L0, x0 + L0 + dL, y + 44, 'ΔL', ORANGE);
  g += ligne(x0 + L0, y + 18, x0 + L0, y + 52, { couleur: AXE, epaisseur: 1 }) + ligne(x0 + L0 + dL, y + 18, x0 + L0 + dL, y + 52, { couleur: AXE, epaisseur: 1 });
  // section
  g += ellipse(x0 + 140, y, 7, 15, { fond: '#b9c9dc', bord: ENCRE, ep: 1.4 });
  g += fleche(x0 + 170, y - 52, x0 + 145, y - 14, { couleur: VIOLET, epaisseur: 1.6, pointe: 8 });
  g += texte(x0 + 176, y - 54, 'section S', { taille: 13, gras: true, couleur: VIOLET, ancre: 'start' });
  g += texte(W / 2, y + 96, 'σ = F ÷ S   ;   ε = ΔL ÷ L₀', { taille: 16, gras: true, couleur: ENCRE });
  g += texte(W / 2, y + 118, 'l’allongement est exagéré sur le dessin', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, y + 132, g);
}

/** Moment d'une force sur une clé : M = F × d (dessin à l'échelle). */
function sMoment({ F = 50, d = 0.3 } = {}) {
  const W = 600;
  let g = '';
  const k = 1000; // unités par mètre
  const ax = 110;
  const ay = 110;
  const L = d * k;
  // écrou et clé
  const hex = [];
  for (let i = 0; i < 6; i++) hex.push([ax + 26 * Math.cos((Math.PI / 3) * i), ay + 26 * Math.sin((Math.PI / 3) * i)]);
  g += rect(ax, ay - 12, L + 50, 24, { fond: '#dfe7f1', bord: ENCRE, ep: 2, rx: 12 });
  g += polygone(hex, { couleur: ENCRE, fond: '#c7d3e0', opacite: 1, epaisseur: 2 });
  g += `<circle cx="${ax}" cy="${ay}" r="5" fill="${ENCRE}"/>`;
  g += texte(ax, ay - 40, 'axe de rotation', { taille: 12, gras: true, couleur: ENCRE });
  // force perpendiculaire au bras, vers le bas, à la distance d
  const fx = ax + L;
  const fl = F * 1.6;
  g += fleche(fx, ay - 4, fx, ay + fl, { couleur: ROUGE, epaisseur: 3 });
  g += texte(fx + 12, ay + fl - 6, `F = ${F} N`, { taille: 15, gras: true, couleur: ROUGE, ancre: 'start' });
  // cote d
  const yc = ay + 30 + fl;
  g += ligne(ax, ay + 30, ax, yc + 8, { couleur: AXE, epaisseur: 1 }) + ligne(fx, ay + fl + 6, fx, yc + 8, { couleur: AXE, epaisseur: 1 });
  g += fleche(ax + 2, yc, fx, yc, { couleur: BLEU, epaisseur: 1.6, pointe: 8 }) + fleche(fx - 2, yc, ax, yc, { couleur: BLEU, epaisseur: 1.6, pointe: 8 });
  g += texte((ax + fx) / 2, yc - 8, `d = ${virg(d)} m (bras de levier)`, { taille: 14, gras: true, couleur: BLEU });
  // flèche de rotation
  g += `<path d="M ${ax + 44} ${ay - 34} A 56 56 0 0 1 ${ax + 50} ${ay + 26}" fill="none" stroke="${VIOLET}" stroke-width="2.4"/>`;
  g += polygone([[ax + 50, ay + 34], [ax + 43, ay + 22], [ax + 56, ay + 21]], { couleur: VIOLET, fond: VIOLET, opacite: 1, epaisseur: 1 });
  g += texte(W / 2, yc + 44, `M = F × d = ${F} × ${virg(d)} = ${virg(F * d)} N·m`, { taille: 16, gras: true, couleur: VERT });
  return enveloppe(W, yc + 60, g);
}

/** Levier (balançoire) à l'échelle : F₁ × d₁ = F₂ × d₂. */
function sLevier({ F1 = 300, d1 = 1.2, F2 = 600, d2 = 0.6 } = {}) {
  const W = 620;
  let g = '';
  const k = 200; // unités par mètre
  const cx = 310;
  const y = 150;
  const kf = 0.16; // unités par newton
  g += rect(cx - 1.5 * k, y - 7, 3 * k, 14, { fond: '#e8d3b0', bord: '#8a5a1a', ep: 2, rx: 4 });
  g += polygone([[cx, y + 7], [cx - 22, y + 46], [cx + 22, y + 46]], { couleur: ENCRE, fond: '#c7d3e0', opacite: 1, epaisseur: 2 });
  g += `<circle cx="${cx}" cy="${y}" r="5" fill="${ENCRE}"/>`;
  g += texte(cx + 28, y + 40, 'axe', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  const x1 = cx - d1 * k;
  const x2 = cx + d2 * k;
  g += fleche(x1, y - 6 - F1 * kf, x1, y - 8, { couleur: BLEU, epaisseur: 3 });
  g += texte(x1, y - 16 - F1 * kf, `enfant : F₁ = ${F1} N`, { taille: 13, gras: true, couleur: BLEU });
  g += fleche(x2, y - 6 - F2 * kf, x2, y - 8, { couleur: ORANGE, epaisseur: 3 });
  g += texte(x2, y - 16 - F2 * kf, `adulte : F₂ = ${F2} N`, { taille: 13, gras: true, couleur: ORANGE });
  const yc = y + 64;
  const cote = (xa, xb, s, c) => fleche(xa + 2, yc, xb, yc, { couleur: c, epaisseur: 1.4, pointe: 7 }) + fleche(xb - 2, yc, xa, yc, { couleur: c, epaisseur: 1.4, pointe: 7 }) + texte((xa + xb) / 2, yc + 18, s, { taille: 13, gras: true, couleur: c });
  g += cote(x1, cx, `d₁ = ${virg(d1)} m`, BLEU);
  g += cote(cx, x2, `d₂ = ${virg(d2)} m`, ORANGE);
  g += texte(W / 2, y + 116, `F₁ × d₁ = ${F1} × ${virg(d1)} = ${virg(F1 * d1)}   et   F₂ × d₂ = ${F2} × ${virg(d2)} = ${virg(F2 * d2)}`, { taille: 14, gras: true, couleur: VERT });
  g += texte(W / 2, y + 136, 'les moments se compensent : équilibre (dessin à l’échelle)', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, y + 146, g);
}

/** Projection d'une force inclinée sur deux axes. */
function sProjection({ alpha = 30 } = {}) {
  const W = 560;
  let g = '';
  const ox = 120;
  const oy = 260;
  const L = 260;
  const a = (alpha * Math.PI) / 180;
  const fx = L * Math.cos(a);
  const fy = L * Math.sin(a);
  g += fleche(ox - 20, oy, ox + 340, oy, { couleur: AXE, epaisseur: 1.6, pointe: 8 });
  g += fleche(ox, oy + 20, ox, oy - 200, { couleur: AXE, epaisseur: 1.6, pointe: 8 });
  g += texte(ox + 344, oy + 18, 'x', { taille: 14, italique: true, couleur: ATTENUE });
  g += texte(ox - 14, oy - 196, 'y', { taille: 14, italique: true, couleur: ATTENUE });
  g += ligne(ox + fx, oy, ox + fx, oy - fy, { couleur: AXE, epaisseur: 1.2, pointilles: true });
  g += ligne(ox, oy - fy, ox + fx, oy - fy, { couleur: AXE, epaisseur: 1.2, pointilles: true });
  g += fleche(ox, oy, ox + fx, oy, { couleur: BLEU, epaisseur: 3 });
  g += fleche(ox, oy, ox, oy - fy, { couleur: VERT, epaisseur: 3 });
  g += fleche(ox, oy, ox + fx, oy - fy, { couleur: ROUGE, epaisseur: 3.2 });
  g += texte(ox + fx / 2 + 14, oy - fy / 2 - 16, 'F', { taille: 18, gras: true, couleur: ROUGE, italique: true });
  g += texte(ox + fx / 2, oy + 24, 'Fx = F × cos α', { taille: 14, gras: true, couleur: BLEU });
  g += texte(ox - 10, oy - fy / 2 + 5, 'Fy = F × sin α', { taille: 14, gras: true, couleur: VERT, ancre: 'end' });
  const r = 56;
  g += `<path d="M ${ox + r} ${oy} A ${r} ${r} 0 0 0 ${nb(ox + r * Math.cos(a))} ${nb(oy - r * Math.sin(a))}" fill="none" stroke="${ORANGE}" stroke-width="2"/>`;
  g += texte(ox + (r + 14) * Math.cos(a / 2), oy - (r + 14) * Math.sin(a / 2) + 5, 'α', { taille: 16, gras: true, couleur: ORANGE });
  g += texte(W / 2, 22, `dessin avec α = ${alpha}°`, { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, oy + 40, g);
}

/** Schéma-blocs d'un système asservi (boucle fermée, retour négatif). */
function sBoucleFermee({ correcteur = 'Correcteur', actionneur = 'Actionneur\n+ système', capteur = 'Capteur', perturbation = 'perturbation' } = {}) {
  const W = 660;
  let g = '';
  const y = 90;
  const cxC = 120;
  g += fleche(14, y, cxC - 18, y, { couleur: ENCRE, epaisseur: 2 });
  g += texte(52, y - 10, 'consigne', { taille: 13, gras: true, couleur: BLEU });
  g += cercle(cxC, y, 18, { couleur: ENCRE, fond: '#ffffff', epaisseur: 2 });
  const d = 18 * Math.SQRT1_2;
  g += ligne(cxC - d, y - d, cxC + d, y + d, { couleur: ENCRE, epaisseur: 1.6 }) + ligne(cxC - d, y + d, cxC + d, y - d, { couleur: ENCRE, epaisseur: 1.6 });
  g += texte(cxC - 24, y - 14, '+', { taille: 16, gras: true });
  g += texte(cxC + 12, y + 38, '−', { taille: 18, gras: true });
  g += texte(cxC, y - 28, 'comparateur', { taille: 12, couleur: ATTENUE });
  g += fleche(cxC + 18, y, 210, y, { couleur: ENCRE, epaisseur: 2 });
  g += texte(170, y - 10, 'écart ε', { taille: 13, gras: true, couleur: ROUGE });
  g += boite2(212, y - 28, 118, 56, correcteur, '', { couleur: 'violet', tt: 13 });
  g += fleche(330, y, 410, y, { couleur: ENCRE, epaisseur: 2 });
  g += texte(370, y - 10, 'commande', { taille: 12, couleur: ATTENUE });
  g += boite2(412, y - 30, 128, 60, actionneur, '', { couleur: 'orange', tt: 13 });
  g += fleche(540, y, W - 14, y, { couleur: ENCRE, epaisseur: 2 });
  g += texte(600, y - 10, 'sortie', { taille: 13, gras: true, couleur: VERT });
  // perturbation
  g += fleche(476, 14, 476, y - 32, { couleur: ROUGE, epaisseur: 2, pointilles: true });
  g += texte(486, 24, perturbation, { taille: 12, couleur: ROUGE, ancre: 'start', italique: true });
  // retour
  const yr = 200;
  g += ligne(600, y, 600, yr, { couleur: ENCRE, epaisseur: 2 });
  g += `<circle cx="600" cy="${y}" r="4" fill="${ENCRE}"/>`;
  g += fleche(600, yr, 420, yr, { couleur: ENCRE, epaisseur: 2 });
  g += boite2(290, yr - 24, 130, 48, capteur, '', { couleur: 'bleu', tt: 13 });
  g += flecheChemin([[290, yr], [cxC, yr], [cxC, y + 20]], { couleur: ENCRE, epaisseur: 2 });
  g += texte(205, yr - 10, 'mesure', { taille: 13, gras: true, couleur: BLEU });
  g += texte(W / 2, yr + 46, 'chaîne de retour : la sortie est mesurée puis comparée à la consigne', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, yr + 58, g);
}

/** Réponse à un échelon d'un système du 2ᵉ ordre (calculée) : dépassement, temps de réponse à 5 %, écart statique. */
function sReponseIndicielle({ K = 0.8, xi = 0.5, w0 = 1, tmax = 12 } = {}) {
  const W = 620;
  const H = 360;
  const m = { g: 56, d: 24, h: 24, b: 46 };
  const ymax = 1.2;
  const X = (t) => m.g + (t / tmax) * (W - m.g - m.d);
  const Y = (v) => H - m.b - (v / ymax) * (H - m.h - m.b);
  const wd = w0 * Math.sqrt(1 - xi * xi);
  const phi = Math.acos(xi);
  const s = (t) => K * (1 - (Math.exp(-xi * w0 * t) / Math.sqrt(1 - xi * xi)) * Math.sin(wd * t + phi));
  // dépassement et temps de réponse à 5 % (numériques)
  let maxv = 0;
  let tmaxv = 0;
  let t5 = 0;
  for (let i = 0; i <= 12000; i++) {
    const t = (i / 12000) * 40;
    const v = s(t);
    if (v > maxv) { maxv = v; tmaxv = t; }
    if (Math.abs(v - K) > 0.05 * K) t5 = t;
  }
  const D = (maxv - K) / K;
  let g = '';
  for (let v = 0; v <= 1.2 + 1e-9; v += 0.2) {
    g += ligne(m.g, Y(v), W - m.d, Y(v), { couleur: GRILLE, epaisseur: 1 });
    g += texte(m.g - 6, Y(v) + 4, virg(v, 1), { taille: 11, couleur: ATTENUE, ancre: 'end' });
  }
  g += `<rect x="${m.g}" y="${nb(Y(1.05 * K))}" width="${W - m.g - m.d}" height="${nb(Y(0.95 * K) - Y(1.05 * K))}" fill="${VERT}" fill-opacity="0.12"/>`;
  g += fleche(m.g, H - m.b, W - m.d + 6, H - m.b, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += fleche(m.g, H - m.b, m.g, m.h - 10, { couleur: AXE, epaisseur: 1.8, pointe: 8 });
  g += texte(W - m.d, H - m.b + 20, 'temps', { taille: 12, couleur: ATTENUE, ancre: 'end', italique: true });
  // consigne (échelon)
  g += chemin(`M ${m.g} ${Y(0)} L ${X(0)} ${Y(1)} L ${X(tmax)} ${Y(1)}`, { couleur: BLEU, ep: 2, pointilles: true });
  g += texte(X(tmax) - 4, Y(1) - 8, 'consigne (échelon)', { taille: 12, gras: true, couleur: BLEU, ancre: 'end' });
  let d = '';
  for (let i = 0; i <= 400; i++) { const t = (i / 400) * tmax; d += `${i ? 'L' : 'M'} ${nb(X(t))} ${nb(Y(s(t)))} `; }
  g += chemin(d.trim(), { couleur: ORANGE, ep: 2.8 });
  g += texte(X(1.1) + 10, Y(s(1.1)) + 4, 'sortie', { taille: 12, gras: true, couleur: ORANGE, ancre: 'start' });
  // dépassement
  g += `<circle cx="${nb(X(tmaxv))}" cy="${nb(Y(maxv))}" r="4" fill="${ROUGE}"/>`;
  g += texte(X(tmaxv) + 8, Y(maxv) - 8, `dépassement ≈ ${Math.round(D * 100)} %`, { taille: 12, gras: true, couleur: ROUGE, ancre: 'start' });
  // écart statique
  const xe = X(tmax * 0.86);
  g += fleche(xe, Y(K) - 2, xe, Y(1) + 2, { couleur: VIOLET, epaisseur: 1.6, pointe: 7 }) + fleche(xe, Y(1) + 2, xe, Y(K) - 2, { couleur: VIOLET, epaisseur: 1.6, pointe: 7 });
  g += texte(xe - 6, (Y(1) + Y(K)) / 2 + 5, `écart statique ${virg(1 - K, 2)}`, { taille: 12, gras: true, couleur: VIOLET, ancre: 'end' });
  // temps de réponse à 5 %
  g += ligne(X(t5), Y(s(t5)), X(t5), H - m.b, { couleur: VERT, epaisseur: 1.6, pointilles: true });
  g += texte(X(t5) + 6, H - m.b - 8, 'temps de réponse à 5 %', { taille: 12, gras: true, couleur: VERT, ancre: 'start' });
  g += texte(W - m.d - 4, Y(0.95 * K) + 16, 'bande ± 5 % autour de la valeur finale', { taille: 12, couleur: VERT, ancre: 'end' });
  return enveloppe(W, H, g);
}

/** MRUV : v(t) = a t et x(t) = ½ a t² (exemple du cours), l'aire sous v(t) donne la distance. */
function sMRUV({ a = 2, tf = 3 } = {}) {
  const W = 640;
  const H = 320;
  let g = '';
  const panneau = (x0, titre, f, vmax, pasV, nomY, couleur, aire) => {
    const m = { g: 44, h: 40, b: 46 };
    const pw = 290;
    const X = (t) => x0 + m.g + (t / tf) * (pw - m.g - 16);
    const Y = (v) => H - m.b - (v / vmax) * (H - m.h - m.b);
    for (let v = 0; v <= vmax + 1e-9; v += pasV) {
      g += ligne(X(0), Y(v), X(tf), Y(v), { couleur: GRILLE, epaisseur: 1 });
      g += texte(X(0) - 6, Y(v) + 4, String(v), { taille: 11, couleur: ATTENUE, ancre: 'end' });
    }
    for (let t = 0; t <= tf; t++) {
      g += ligne(X(t), Y(0), X(t), Y(vmax), { couleur: GRILLE, epaisseur: 1 });
      g += texte(X(t), Y(0) + 16, String(t), { taille: 11, couleur: ATTENUE });
    }
    if (aire) g += `<polygon points="${X(0)},${Y(0)} ${X(tf)},${Y(0)} ${X(tf)},${Y(f(tf))}" fill="${couleur}" fill-opacity="0.15"/>`;
    g += fleche(X(0), Y(0), X(tf) + 12, Y(0), { couleur: AXE, epaisseur: 1.6, pointe: 8 });
    g += fleche(X(0), Y(0), X(0), Y(vmax) - 14, { couleur: AXE, epaisseur: 1.6, pointe: 8 });
    g += texte(X(tf) + 10, Y(0) + 32, 't (s)', { taille: 12, couleur: ATTENUE, ancre: 'end' });
    g += texte(X(0) + 6, Y(vmax) - 8, nomY, { taille: 12, couleur: ATTENUE, ancre: 'start' });
    let d = '';
    for (let i = 0; i <= 100; i++) { const t = (i / 100) * tf; d += `${i ? 'L' : 'M'} ${nb(X(t))} ${nb(Y(f(t)))} `; }
    g += chemin(d.trim(), { couleur, ep: 2.8 });
    g += `<circle cx="${nb(X(tf))}" cy="${nb(Y(f(tf)))}" r="4.5" fill="${couleur}"/>`;
    g += texte(x0 + pw / 2 + 10, 22, titre, { taille: 14, gras: true, couleur });
    return { X, Y };
  };
  const vf = a * tf;
  const xf = 0.5 * a * tf * tf;
  const p1 = panneau(10, `v(t) = ${a} t`, (t) => a * t, Math.ceil(vf / 2) * 2 + 2, 2, 'v (m/s)', BLEU, true);
  g += texte(p1.X(tf) - 4, p1.Y(vf) - 10, `${vf} m/s`, { taille: 12, gras: true, couleur: BLEU, ancre: 'end' });
  g += texte(p1.X(tf * 0.66), p1.Y(vf * 0.22) + 4, `aire = ${virg(xf)} m`, { taille: 12, gras: true, couleur: BLEU });
  const p2 = panneau(330, `x(t) = ${virg(a / 2)} × ${a} t²`.replace(`${virg(a / 2)} × ${a} t²`, a === 2 ? 't²' : `${virg(a / 2)} t²`), (t) => 0.5 * a * t * t, Math.ceil(xf / 2) * 2 + 2, 2, 'x (m)', VERT, false);
  g += texte(p2.X(tf) - 6, p2.Y(xf) - 10, `${virg(xf)} m`, { taille: 12, gras: true, couleur: VERT, ancre: 'end' });
  return enveloppe(W, H, g);
}

/** Les 6 degrés de liberté d'un solide et ceux laissés par trois liaisons. */
function sDegresLiberte() {
  const W = 640;
  let g = '';
  const ox = 150;
  const oy = 170;
  const ax = { x: [-Math.SQRT1_2, Math.SQRT1_2], y: [1, 0], z: [0, -1] };
  const L = 110;
  const coul = { x: ROUGE, y: VERT, z: BLEU };
  for (const [n, [dx, dy]] of Object.entries(ax)) {
    g += fleche(ox, oy, ox + dx * L, oy + dy * L, { couleur: coul[n], epaisseur: 2.6 });
    g += texte(ox + dx * (L + 16), oy + dy * (L + 16) + 5, n, { taille: 16, gras: true, italique: true, couleur: coul[n] });
    // flèche de rotation autour de l'axe (ellipse partielle centrée sur l'axe)
    const cx = ox + dx * L * 0.62;
    const cy = oy + dy * L * 0.62;
    const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
    const rx = 7;
    const ry = 17;
    g += `<g transform="translate(${nb(cx)} ${nb(cy)}) rotate(${nb(ang)})"><path d="M 0 ${-ry} A ${rx} ${ry} 0 1 1 ${-rx * 0.6} ${ry * 0.8}" fill="none" stroke="${coul[n]}" stroke-width="2"/><polygon points="${-rx * 0.6 - 6},${ry * 0.8 - 2} ${-rx * 0.6 + 3},${ry * 0.8 - 5} ${-rx * 0.6 + 1},${ry * 0.8 + 6}" fill="${coul[n]}"/></g>`;
  }
  g += `<circle cx="${ox}" cy="${oy}" r="4" fill="${ENCRE}"/>`;
  g += texte(ox, 290, '3 translations (le long de x, y, z)', { taille: 12, couleur: ATTENUE });
  g += texte(ox, 306, '+ 3 rotations (autour de x, y, z)', { taille: 12, couleur: ATTENUE });
  const lig = [
    ['Solide libre', '6 degrés de liberté', 'gris'],
    ['Liaison pivot', '1 rotation', 'bleu'],
    ['Liaison glissière', '1 translation', 'vert'],
    ['Encastrement', '0 degré de liberté', 'rouge'],
  ];
  lig.forEach(([a, b, c], i) => {
    const y = 40 + i * 64;
    g += boite2(340, y, 280, 50, a, b, { couleur: c, tt: 14, ts: 13 });
  });
  return enveloppe(W, 320, g);
}

/** Roue en rotation : v = R × ω (exemple du cours). */
function sRoue({ R = 0.3, w = 10 } = {}) {
  const W = 560;
  let g = '';
  const cx = 200;
  const cy = 170;
  const r = 120;
  g += cercle(cx, cy, r, { couleur: ENCRE, fond: '#eef3fb', epaisseur: 3 });
  g += `<circle cx="${cx}" cy="${cy}" r="5" fill="${ENCRE}"/>`;
  const a = -Math.PI / 4;
  const M = [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  g += ligne(cx, cy, M[0], M[1], { couleur: BLEU, epaisseur: 2 });
  g += texte((cx + M[0]) / 2 - 18, (cy + M[1]) / 2 - 2, `R = ${virg(R)} m`, { taille: 13, gras: true, couleur: BLEU, ancre: 'end' });
  g += `<circle cx="${nb(M[0])}" cy="${nb(M[1])}" r="5" fill="${ROUGE}"/>`;
  // rotation dans le sens trigonométrique (antihoraire à l'écran) : vitesse tangente
  const tv = [Math.sin(a), -Math.cos(a)];
  const lv = 110;
  g += fleche(M[0], M[1], M[0] + tv[0] * lv, M[1] + tv[1] * lv, { couleur: ROUGE, epaisseur: 3 });
  g += texte(M[0] + tv[0] * lv - 8, M[1] + tv[1] * lv - 10, `v = ${virg(R * w)} m/s`, { taille: 14, gras: true, couleur: ROUGE, ancre: 'end' });
  g += angleDroitSVG(M, [-Math.cos(a), -Math.sin(a)], tv);
  {
    const e = -2.4;
    const ex = cx + 40 * Math.cos(e);
    const ey = cy + 40 * Math.sin(e);
    const tg = [Math.sin(e), -Math.cos(e)];
    const no = [Math.cos(e), Math.sin(e)];
    g += `<path d="M ${cx + 40} ${cy} A 40 40 0 0 0 ${nb(ex)} ${nb(ey)}" fill="none" stroke="${VIOLET}" stroke-width="2.2"/>`;
    g += polygone([[ex + tg[0] * 10, ey + tg[1] * 10], [ex + no[0] * 5 - tg[0] * 2, ey + no[1] * 5 - tg[1] * 2], [ex - no[0] * 5 - tg[0] * 2, ey - no[1] * 5 - tg[1] * 2]], { couleur: VIOLET, fond: VIOLET, opacite: 1, epaisseur: 1 });
  }
  g += texte(cx - 8, cy + 62, `ω = ${w} rad/s`, { taille: 13, gras: true, couleur: VIOLET });
  g += texte(W / 2 + 60, 300, `v = R × ω = ${virg(R)} × ${w} = ${virg(R * w)} m/s`, { taille: 15, gras: true, couleur: VERT });
  return enveloppe(W, 318, g);
}
function angleDroitSVG(P, u, v, t = 12) {
  return `<path d="M ${nb(P[0] + u[0] * t)} ${nb(P[1] + u[1] * t)} L ${nb(P[0] + (u[0] + v[0]) * t)} ${nb(P[1] + (u[1] + v[1]) * t)} L ${nb(P[0] + v[0] * t)} ${nb(P[1] + v[1] * t)}" fill="none" stroke="${ENCRE}" stroke-width="1.5"/>`;
}

/** Même effort sur deux sections : la contrainte σ = F / S est divisée par deux quand S double. */
function sContrainteSections({ F = 4000, S1 = 20, S2 = 40 } = {}) {
  const W = 620;
  let g = '';
  const k = 2.2; // largeur dessinée proportionnelle à S (épaisseur constante)
  [[S1, 150], [S2, 450]].forEach(([S, cx]) => {
    const w = S * k;
    g += rect(cx - w / 2, 70, w, 150, { fond: S === S1 ? fc('rouge') : fc('vert'), bord: S === S1 ? ROUGE : VERT, ep: 2 });
    g += fleche(cx, 66, cx, 20, { couleur: ENCRE, epaisseur: 2.6 });
    g += fleche(cx, 224, cx, 270, { couleur: ENCRE, epaisseur: 2.6 });
    g += texte(cx + 10, 36, `F = ${milliers(F)} N`, { taille: 13, gras: true, ancre: 'start' });
    g += texte(cx, 292, `S = ${S} mm²`, { taille: 14, gras: true, couleur: BLEU });
    const s = F / S;
    g += texte(cx, 314, `σ = ${milliers(F)} ÷ ${S} = ${virg(s)} MPa`, { taille: 14, gras: true, couleur: S === S1 ? ROUGE : VERT });
  });
  g += texte(W / 2, 340, 'même force, section double : contrainte divisée par deux', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 352, g);
}

/** Bit de parité paire : ajout à l'émission, contrôle à la réception (calculés). */
function sParite({ donnee = '1011', erreurPos = 1 } = {}) {
  const W = 620;
  let g = '';
  const nb1 = (s) => s.split('').filter((c) => c === '1').length;
  const p = nb1(donnee) % 2;
  const trame = donnee + String(p);
  const recu = trame.split('').map((c, i) => (i === erreurPos ? (c === '1' ? '0' : '1') : c)).join('');
  const rangee = (y, s, titre, sous, mark = -1, coulP = VERT) => {
    g += texte(14, y + 22, titre, { taille: 13, gras: true, ancre: 'start' });
    s.split('').forEach((c, i) => {
      const x = 230 + i * 44;
      const estP = i === donnee.length;
      g += rect(x, y, 38, 34, { fond: i === mark ? fc('rouge') : estP ? fc('vert') : '#ffffff', bord: i === mark ? ROUGE : estP ? coulP : AXE, ep: estP || i === mark ? 2.2 : 1.2, rx: 3 });
      g += texte(x + 19, y + 24, c, { taille: 18, gras: true });
    });
    g += texte(230 + s.length * 44 + 8, y + 22, sous, { taille: 12, couleur: ATTENUE, ancre: 'start' });
  };
  rangee(20, donnee, 'Donnée', `${nb1(donnee)} bits à 1`);
  rangee(80, trame, 'Trame émise', `bit de parité = ${p}`);
  g += texte(230 + donnee.length * 44 + 19, 132, 'parité', { taille: 12, gras: true, couleur: VERT });
  rangee(160, recu, 'Trame reçue', '1 bit faussé', erreurPos, VERT);
  const n = nb1(recu);
  g += texte(W / 2, 226, `${n} bits à 1 : nombre ${n % 2 ? 'impair' : 'pair'} → ${n % 2 ? 'erreur détectée' : 'pas d’erreur détectée'}`, { taille: 14, gras: true, couleur: n % 2 ? ROUGE : VERT });
  return enveloppe(W, 244, g);
}

/** Bruit : signal numérique émis, reçu bruité, puis régénéré par seuil (calculé). */
function sBruit({ bits = '1011001' } = {}) {
  const W = 620;
  const b = bits.split('').map(Number);
  const n = b.length;
  const x0 = 90;
  const lw = W - x0 - 20;
  const bitW = lw / n;
  let g = '';
  // bruit pseudo-aléatoire déterministe
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; };
  const recu = [];
  for (let i = 0; i <= 280; i++) {
    const t = i / 280;
    const k = Math.min(n - 1, Math.floor(t * n));
    // signal atténué et lissé + bruit
    const prev = b[Math.max(0, k - 1)];
    const local = (t * n - k);
    const lis = prev + (b[k] - prev) * Math.min(1, local * 4);
    recu.push([t, 0.15 + 0.7 * lis + 0.22 * rnd()]);
  }
  const pan = (y0, titre, coul, fn) => {
    const hh = 60;
    g += texte(14, y0 + hh / 2 + 5, titre, { taille: 13, gras: true, couleur: coul, ancre: 'start' });
    g += ligne(x0, y0 + hh, x0 + lw, y0 + hh, { couleur: AXE, epaisseur: 1.2 });
    fn(y0, hh);
  };
  const carre = (y0, hh, coul) => {
    let d = '';
    b.forEach((v, i) => { const yy = y0 + hh - (v ? hh * 0.85 : 4); d += `${i ? 'L' : 'M'} ${nb(x0 + i * bitW)} ${nb(yy)} L ${nb(x0 + (i + 1) * bitW)} ${nb(yy)} `; });
    g += chemin(d.trim(), { couleur: coul, ep: 2.6 });
  };
  pan(20, 'Émis', BLEU, (y0, hh) => {
    carre(y0, hh, BLEU);
    b.forEach((v, i) => (g += texte(x0 + (i + 0.5) * bitW, y0 - 2, String(v), { taille: 13, gras: true, couleur: BLEU })));
  });
  pan(120, 'Reçu', ROUGE, (y0, hh) => {
    const seuil = y0 + hh - 0.5 * hh;
    g += ligne(x0, seuil, x0 + lw, seuil, { couleur: VIOLET, epaisseur: 1.4, pointilles: true });
    g += texte(x0 + lw, seuil - 6, 'seuil', { taille: 12, couleur: VIOLET, ancre: 'end', gras: true });
    g += chemin(recu.map(([t, v], i) => `${i ? 'L' : 'M'} ${nb(x0 + t * lw)} ${nb(y0 + hh - v * hh)}`).join(' '), { couleur: ROUGE, ep: 1.8 });
  });
  // régénération : décision au milieu de chaque bit
  const decide = b.map((_, i) => {
    const t = (i + 0.5) / n;
    const pt = recu.reduce((best, p) => (Math.abs(p[0] - t) < Math.abs(best[0] - t) ? p : best));
    return pt[1] > 0.5 ? 1 : 0;
  });
  if (decide.join('') !== bits) throw new Error('régénération incorrecte');
  pan(220, 'Régénéré', VERT, (y0, hh) => {
    carre(y0, hh, VERT);
    decide.forEach((v, i) => (g += texte(x0 + (i + 0.5) * bitW, y0 - 2, String(v), { taille: 13, gras: true, couleur: VERT })));
  });
  g += texte(W / 2, 312, 'tant qu’on distingue 0 et 1, l’information est retrouvée intacte', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, 326, g);
}

/** Ce qui se passe côté client et côté serveur. */
function sDeuxCotes({ gauche, droite, aller = '', retour = '' } = {}) {
  const W = 640;
  let g = '';
  const bw = 230;
  const hItems = Math.max(gauche.items.length, droite.items.length) * 34 + 70;
  const col = (x, c, o) => {
    g += rect(x, 14, bw, hItems, { fond: fc(c), bord: tc(c), ep: 2, rx: 12 });
    g += texte(x + bw / 2, 40, o.titre, { taille: 15, gras: true, couleur: tc(c) });
    g += texte(x + bw / 2, 58, o.sous, { taille: 12, couleur: ATTENUE, italique: true });
    o.items.forEach((it, i) => {
      g += rect(x + 14, 72 + i * 34, bw - 28, 28, { fond: '#ffffff', bord: tc(c), ep: 1.2, rx: 6 });
      g += texte(x + bw / 2, 91 + i * 34, it, { taille: 13 });
    });
  };
  col(14, 'bleu', gauche);
  col(W - 14 - bw, 'violet', droite);
  const ym = 14 + hItems / 2;
  g += fleche(14 + bw + 6, ym - 18, W - 14 - bw - 6, ym - 18, { couleur: BLEU, epaisseur: 2.4 });
  g += texte(W / 2, ym - 26, aller, { taille: 13, gras: true, couleur: BLEU });
  g += fleche(W - 14 - bw - 6, ym + 18, 14 + bw + 6, ym + 18, { couleur: VIOLET, epaisseur: 2.4 });
  g += texte(W / 2, ym + 38, retour, { taille: 13, gras: true, couleur: VIOLET });
  return enveloppe(W, hItems + 28, g);
}

// ───────────────────────────── registre ─────────────────────────────

export const SCHEMAS = {
  chaine: sChaine,
  'deux-chaines': sDeuxChaines,
  algorigramme: sAlgorigramme,
  'bete-a-cornes': sBeteACornes,
  correspondances: sCorrespondances,
  familles: sFamilles,
  cycle: sCycle,
  lignee: sLignee,
  signaux: sSignaux,
  sequence: sSequence,
  url: sUrl,
  'carre-boucle': sCarreBoucle,
  'fil-electrique': sFilElectrique,
  vues: sVues,
  echelle: sEchelle,
  circuit: sCircuit,
  sollicitations: sSollicitations,
  triangulation: sTriangulation,
  stabilite: sStabilite,
  boucles: sBoucles,
  'extrusion-revolution': sExtrusionRevolution,
  rondelle: sRondelle,
  scripts: sScripts,
  'reseau-local': sReseauLocal,
  'etapes-projet': sEtapesProjet,
  gantt: sGantt,
  'famille-lignee': sFamilleLignee,
  'cycle-vie': sCycleVie,
  paquets: sPaquets,
  'objet-connecte': sObjetConnecte,
  'table-annotee': sTableAnnotee,
  csv: sCsv,
  'lat-long': sLatLong,
  trilateration: sTrilateration,
  'graphe-chemin': sGrapheChemin,
  pixels: sPixels,
  rvb: sRVB,
  'matriciel-vectoriel': sMatricielVectoriel,
  'reseau-social': sReseauSocial,
  'etapes-tableau': sEtapesTableau,
  'von-neumann': sVonNeumann,
  portes: sPortes,
  arborescence: sArborescence,
  bits: sBits,
  divisions: sDivisions,
  complement2: sComplement2,
  'table-dicos': sTableDicos,
  fusion: sFusion,
  'liste-indices': sListeIndices,
  dictionnaire: sDictionnaire,
  matrice: sMatrice,
  'graphe-representations': sGrapheRepresentations,
  parcours: sParcours,
  'schema-relationnel': sSchemaRelationnel,
  jointure: sJointure,
  complexite: sComplexite,
  'pile-appels': sPileAppels,
  'tri-fusion': sTriFusion,
  routage: sRoutage,
  'adresse-ip': sAdresseIP,
  'pile-file': sPileFile,
  'liste-chainee': sListeChainee,
  abr: sABR,
  pieuvre: sPieuvre,
  rendements: sRendements,
  engrenages: sEngrenages,
  can: sCAN,
  'serie-parallele': sSerieParallele,
  'courbe-traction': sCourbeTraction,
  'barre-traction': sBarreTraction,
  moment: sMoment,
  levier: sLevier,
  projection: sProjection,
  'boucle-fermee': sBoucleFermee,
  'reponse-indicielle': sReponseIndicielle,
  mruv: sMRUV,
  'degres-liberte': sDegresLiberte,
  roue: sRoue,
  'contrainte-sections': sContrainteSections,
  parite: sParite,
  bruit: sBruit,
  'deux-cotes': sDeuxCotes,
};

// ───────────────────────────── données réutilisées ─────────────────────────────

const CHAINE_INFO_3 = (c1, c2, c3) => [{ f: 'ACQUÉRIR', c: c1 }, { f: 'TRAITER', c: c2 }, { f: 'COMMUNIQUER', c: c3 }];

const ALGO_ECLAIRAGE = {
  W: 540,
  H: 400,
  noeuds: {
    deb: { t: 'debut', x: 280, y: 30, w: 120, h: 40, texte: 'Début' },
    lire: { t: 'es', x: 280, y: 100, w: 210, h: 50, texte: 'Lire le capteur\nde luminosité' },
    test: { t: 'test', x: 280, y: 205, w: 200, h: 84, texte: 'Luminosité\nfaible ?' },
    on: { t: 'action', x: 130, y: 310, w: 170, texte: 'Allumer la lampe' },
    off: { t: 'action', x: 430, y: 310, w: 170, texte: 'Éteindre la lampe' },
  },
  liens: [
    { de: 'deb', a: 'lire' },
    { de: 'lire', a: 'test' },
    { de: 'test', a: 'on', s: 'l', e: 't', via: [[130, 205]], label: 'oui', lx: 160, ly: 197 },
    { de: 'test', a: 'off', s: 'r', e: 't', via: [[430, 205]], label: 'non', lx: 400, ly: 197 },
    { de: 'on', a: 'lire', s: 'b', e: 'l', via: [[130, 365], [24, 365], [24, 100]] },
    { de: 'off', a: 'lire', s: 'b', e: 'l', via: [[430, 365], [24, 365], [24, 100]] },
  ],
  textes: [{ x: 34, y: 250, s: 'on recommence', ancre: 'start', italique: true, couleur: 'violet' }, { x: 34, y: 266, s: 'en permanence', ancre: 'start', italique: true, couleur: 'violet' }],
};

const GRAPHE_BFS = {
  graphe: { A: ['B', 'C'], B: ['A', 'D', 'E'], C: ['A', 'F'], D: ['B', 'G'], E: ['B', 'G'], F: ['C', 'G'], G: ['D', 'E', 'F'] },
  pos: { A: [90, 160], B: [220, 90], C: [220, 240], D: [360, 60], E: [360, 160], F: [360, 270], G: [510, 160] },
};

// ───────────────────────────── poses ─────────────────────────────

export const POSES = [
  // ── 6e : fonctionnement d'un objet ──
  {
    fiche: 'sixieme/techno/fonctionnement-dun-objet', cle: 'fonctions-solutions-velo', schema: 'correspondances', apres: '## Fonction technique et solution technique',
    params: { entetes: ['fonction technique (ce qu’il faut faire)', 'solution technique (avec quoi)'], lignes: [['freiner', 'les freins'], ['faire avancer', 'le pédalier et la chaîne'], ['diriger', 'le guidon']], couleurs: ['bleu', 'vert'], W: 560, gap: 60 },
    legende: "Pour le vélo, chaque fonction technique (ce qu'il faut faire) est réalisée par une solution technique (la pièce ou le mécanisme).",
  },
  {
    fiche: 'sixieme/techno/fonctionnement-dun-objet', cle: 'chaine-energie-lampe', schema: 'chaine', apres: "## La chaîne d'énergie",
    params: { blocs: [{ f: 'Recevoir, stocker', c: 'la pile' }, { f: 'Laisser passer', c: 'l’interrupteur' }, { f: 'Transformer', c: 'l’ampoule' }], couleur: 'orange', sortie: 'action :\néclairer', W: 600 },
    legende: "Chaîne d'énergie d'une lampe de poche : la pile fournit l'électricité, l'interrupteur la laisse passer, l'ampoule la transforme en lumière.",
  },
  {
    fiche: 'sixieme/techno/fonctionnement-dun-objet', cle: 'chaine-information-detecteur', schema: 'chaine', apres: "## La chaîne d'information",
    params: { blocs: [{ f: 'ACQUÉRIR', c: 'le capteur détecte\nquelqu’un' }, { f: 'TRAITER', c: 'l’objet décide' }, { f: 'COMMANDER', c: 'l’ordre est envoyé\nà la lampe' }], couleur: 'bleu', sortie: 'action :\nla lampe\ns’allume', W: 620, hb: 78 },
    legende: "Chaîne d'information d'une lampe à détecteur : le capteur acquiert l'information, l'objet la traite puis commande l'allumage.",
  },
  // ── 6e : initiation à la programmation ──
  {
    fiche: 'sixieme/techno/initiation-programmation', cle: 'boucle-carre', schema: 'carre-boucle', apres: '## La boucle : répéter sans tout réécrire', params: {},
    legende: 'La boucle « répéter 4 fois » exécute quatre fois « avancer puis tourner à droite de 90° » : le lutin trace un carré.',
  },
  {
    fiche: 'sixieme/techno/initiation-programmation', cle: 'condition-bord', schema: 'algorigramme', apres: '## La condition : faire un choix (si… alors…)',
    params: {
      W: 520, H: 300,
      noeuds: {
        test: { t: 'test', x: 260, y: 60, w: 220, h: 84, texte: 'Le lutin touche\nle bord ?' },
        reb: { t: 'action', x: 110, y: 170, w: 150, texte: 'il rebondit' },
        suite: { t: 'action', x: 260, y: 255, w: 190, texte: 'suite du programme' },
      },
      liens: [
        { de: 'test', a: 'reb', s: 'l', e: 't', via: [[110, 60]], label: 'oui', lx: 132, ly: 52 },
        { de: 'test', a: 'suite', s: 'r', e: 'r', via: [[430, 60], [430, 255]], label: 'non', lx: 392, ly: 52 },
        { de: 'reb', a: 'suite', s: 'b', e: 'l', via: [[110, 255]] },
      ],
      textes: [{ x: 420, y: 160, s: 'sinon : rien', ancre: 'end', italique: true }, { x: 420, y: 176, s: '(ou autre chose)', ancre: 'end', italique: true }],
    },
    legende: "La condition « si le lutin touche le bord, alors il rebondit » : la machine teste la condition, puis agit seulement si elle est vraie.",
  },
  // ── 6e : matériaux et familles ──
  {
    fiche: 'sixieme/techno/materiaux-et-familles', cle: 'familles-materiaux', schema: 'familles', apres: '## Les grandes familles de matériaux',
    params: { racine: 'Les matériaux', enfants: [{ t: 'Métaux', d: 'fer, acier,\naluminium,\ncuivre' }, { t: 'Matières\nplastiques', d: 'bouteilles,\njouets,\nstylos' }, { t: 'Verre et\ncéramiques', d: 'vitres,\nporcelaine' }, { t: 'Bois et\ntextiles', d: 'bois, coton,\nlaine\n(origine naturelle)' }], W: 600 },
    legende: 'Les grandes familles de matériaux, avec quelques exemples pour chacune.',
  },
  {
    fiche: 'sixieme/techno/materiaux-et-familles', cle: 'fil-electrique', schema: 'fil-electrique', apres: '## Bien choisir un matériau', params: {},
    legende: "Un fil électrique associe deux matériaux : une âme en métal qui conduit le courant et une gaine en plastique isolante.",
  },
  {
    fiche: 'sixieme/techno/materiaux-et-familles', cle: 'cycle-recyclage', schema: 'cycle', apres: '## Recycler les matériaux',
    params: { etapes: ['Ressources\n(pétrole, minerais, bois)', 'Fabrication\ndes objets', 'Utilisation', 'Tri des déchets', 'Recyclage\ndes matériaux'], couleur: 'vert', W: 600, H: 330, bw: 170, bh: 48, centre: 'trier et recycler\néconomise les\nressources' },
    legende: 'Le tri et le recyclage permettent de réutiliser les matériaux pour fabriquer de nouveaux objets et d’économiser les ressources.',
  },
  // ── 6e : objets techniques et besoins ──
  {
    fiche: 'sixieme/techno/objets-techniques-et-besoins', cle: 'besoins-objets', schema: 'correspondances', apres: "## Un besoin, à l'origine de chaque objet",
    params: { entetes: ['le besoin', 'l’objet technique inventé'], lignes: [['se déplacer plus vite', 'le vélo'], ['écrire', 'le stylo'], ['se protéger de la pluie', 'le parapluie']], couleurs: ['orange', 'bleu'], W: 560, gap: 60 },
    legende: 'Chaque objet technique est inventé pour répondre à un besoin.',
  },
  {
    fiche: 'sixieme/techno/objets-techniques-et-besoins', cle: 'evolution-objets', schema: 'lignee', apres: '## Les objets évoluent dans le temps',
    params: { rangees: [{ titre: 'Le téléphone', items: ['fixe\nà cadran', 'sans fil', 'portable', 'smartphone\ntactile'], couleur: 'bleu' }, { titre: 'Le vélo', items: ['draisienne\n(sans pédales)', 'grand-bi', 'vélo\nmoderne', 'vélo\nélectrique'], couleur: 'vert' }], W: 600 },
    legende: "L'évolution du téléphone et du vélo, dans l'ordre où ces objets sont apparus (sans échelle de temps).",
  },
  // ── 6e : représenter un objet ──
  {
    fiche: 'sixieme/techno/representation-dun-objet', cle: 'schema-electrique', schema: 'circuit', apres: '## Le schéma : expliquer comment ça marche', params: {},
    legende: 'Schéma électrique : la pile, l’interrupteur et la lampe sont représentés par des symboles reliés par des traits.',
  },
  {
    fiche: 'sixieme/techno/representation-dun-objet', cle: 'trois-vues', schema: 'vues', apres: "## Le dessin technique : précis et à l'échelle", params: {},
    legende: 'Un objet en perspective et ses trois vues : la vue de dessus se place sous la vue de face, la vue de gauche à sa droite.',
  },
  {
    fiche: 'sixieme/techno/representation-dun-objet', cle: 'trois-echelles', schema: 'echelle', apres: "## L'échelle : agrandir ou réduire", params: {},
    legende: "Une plaque de 4 cm sur 2 cm dessinée à trois échelles : les mesures notées sont celles du dessin, et les proportions restent les mêmes.",
  },
  // ── 5e : besoin et cahier des charges ──
  {
    fiche: 'cinquieme/techno/besoin-et-cahier-des-charges', cle: 'bete-a-cornes-parapluie', schema: 'bete-a-cornes', apres: '## Le besoin',
    params: { qui: 'au piéton', quoi: 'sur la pluie', systeme: 'Parapluie', but: 'garder la personne au sec' },
    legende: 'Le diagramme « bête à cornes » du parapluie répond aux trois questions qui définissent le besoin.',
  },
  // ── 5e : chaîne d'énergie ──
  {
    fiche: 'cinquieme/techno/chaine-denergie', cle: 'quatre-fonctions', schema: 'chaine', apres: "## Les quatre fonctions de la chaîne d'énergie",
    params: { vertical: true, couleur: 'orange', entree: 'énergie reçue', blocs: [{ f: 'ALIMENTER', c: 'prise, pile, panneau solaire' }, { f: 'STOCKER', c: 'batterie (pas dans tous les objets)', couleur: 'gris' }, { f: 'DISTRIBUER', c: 'interrupteur, bouton, variateur' }, { f: 'CONVERTIR', c: 'moteur, lampe, radiateur' }], sortie: 'action : mouvement,\nlumière ou chaleur', hb: 54 },
    legende: "Les quatre fonctions de la chaîne d'énergie, avec des exemples de composants ; la fonction stocker n'existe pas dans tous les objets.",
  },
  {
    fiche: 'cinquieme/techno/chaine-denergie', cle: 'ventilateur', schema: 'chaine', apres: '## Un exemple : le ventilateur électrique',
    params: { vertical: true, couleur: 'orange', blocs: [{ f: 'ALIMENTER', c: 'la prise' }, { f: 'DISTRIBUER', c: 'l’interrupteur' }, { f: 'CONVERTIR', c: 'le moteur' }], flux: ['énergie électrique', 'énergie électrique'], sortie: 'énergie mécanique : les\npales brassent l’air', hb: 50 },
    legende: "Chaîne d'énergie du ventilateur : l'énergie électrique de la prise est convertie par le moteur en énergie mécanique.",
  },
  {
    fiche: 'cinquieme/techno/chaine-denergie', cle: 'convertisseurs', schema: 'correspondances', apres: "## Les convertisseurs d'énergie",
    params: { entetes: ['énergie reçue', 'convertisseur', 'énergie utile produite'], lignes: [['électrique', 'moteur électrique', 'mécanique'], ['électrique', 'lampe', 'lumineuse'], ['électrique', 'radiateur électrique', 'thermique'], ['lumineuse', 'panneau solaire', 'électrique'], ['électrique', 'haut-parleur', 'sonore']], couleurs: ['orange', 'bleu', 'vert'], W: 600, hb: 36, gap: 40 },
    legende: "Quelques convertisseurs et les formes d'énergie qu'ils transforment ; à chaque conversion, une partie de l'énergie est perdue en chaleur.",
  },
  // ── 5e : programmation et capteurs ──
  {
    fiche: 'cinquieme/techno/programmation-et-capteurs', cle: 'chaine-information', schema: 'chaine', apres: "## La chaîne d'information",
    params: { blocs: [{ f: 'ACQUÉRIR', c: 'capteur' }, { f: 'TRAITER', c: 'programme\n(carte)' }, { f: 'AGIR', c: 'actionneur\n(moteur, lampe)' }], entree: 'grandeur\nphysique', sortie: 'action', W: 620 },
    legende: "La chaîne d'information : le capteur acquiert l'information, le programme la traite, puis une action est commandée.",
  },
  {
    fiche: 'cinquieme/techno/programmation-et-capteurs', cle: 'logique-analogique', schema: 'signaux', apres: '## Les capteurs',
    params: { panneaux: [{ type: 'logique', titre: 'Information logique (0 ou 1)' }, { type: 'analogique', titre: 'Information analogique' }] },
    legende: "Une information logique n'a que deux états (0 ou 1) ; une information analogique varie de façon continue.",
  },
  {
    fiche: 'cinquieme/techno/programmation-et-capteurs', cle: 'algorigramme-eclairage', schema: 'algorigramme', apres: "## Un exemple : l'éclairage automatique", params: ALGO_ECLAIRAGE,
    legende: "Algorigramme de l'éclairage automatique : lecture du capteur, test sur la luminosité, action, puis on recommence en boucle.",
  },
  // ── 5e : propriétés des matériaux ──
  {
    fiche: 'cinquieme/techno/proprietes-des-materiaux', cle: 'matiere-materiau-objet', schema: 'correspondances', apres: '## Objet, matériau et matière première',
    params: { entetes: ['matière première', 'matériau', 'objet'], lignes: [['pétrole', 'plastique', 'bouteille'], ['minerai de fer', 'acier', 'clé'], ['sable', 'verre', 'vitre'], ['arbre', 'bois', 'chaise']], couleurs: ['orange', 'bleu', 'vert'], W: 580 },
    legende: "De la matière première au matériau, puis du matériau à l'objet technique fabriqué.",
  },
  {
    fiche: 'cinquieme/techno/proprietes-des-materiaux', cle: 'familles-materiaux', schema: 'familles', apres: '## Les grandes familles de matériaux',
    params: { racine: 'Les matériaux', enfants: [{ t: 'Métaux', d: 'fer, acier,\naluminium,\ncuivre' }, { t: 'Plastiques', d: 'légers,\nisolants' }, { t: 'Céramiques\net verre', d: 'durs mais\ncassants' }, { t: 'Organiques\nnaturels', d: 'bois, papier,\ncuir' }, { t: 'Composites', d: 'fibre de verre,\nfibre de\ncarbone' }], W: 640 },
    legende: 'Les cinq familles de matériaux étudiées, avec des exemples ou une propriété typique.',
  },
  // ── 5e : structures et stabilité ──
  {
    fiche: 'cinquieme/techno/structures-et-stabilite', cle: 'efforts', schema: 'sollicitations', apres: '## Les efforts sur une structure', params: {},
    legende: 'Les cinq efforts principaux ; les flèches rouges représentent les actions mécaniques, les pointillés la déformation.',
  },
  {
    fiche: 'cinquieme/techno/structures-et-stabilite', cle: 'triangulation', schema: 'triangulation', apres: '## La résistance des formes', params: {},
    legende: "Un cadre carré articulé se déforme sous une poussée ; une barre en diagonale le partage en deux triangles et le rend indéformable.",
  },
  {
    fiche: 'cinquieme/techno/structures-et-stabilite', cle: 'stabilite', schema: 'stabilite', apres: '## La stabilité', params: {},
    legende: "Deux objets inclinés du même angle : le premier retombe sur sa base, le second bascule car la verticale de son centre de gravité G dépasse le point d'appui.",
  },
  // ── 4e : chaîne d'information ──
  {
    fiche: 'quatrieme/techno/chaine-dinformation', cle: 'deux-chaines-portail', schema: 'deux-chaines', apres: '## 1. Deux chaînes dans un objet technique',
    params: { info: CHAINE_INFO_3('télécommande', 'carte\nélectronique', 'envoi de l’ordre'), energie: [{ f: 'ALIMENTER', c: 'secteur' }, { f: 'DISTRIBUER', c: 'relais' }, { f: 'CONVERTIR', c: 'moteur' }, { f: 'TRANSMETTRE', c: 'engrenages' }], action: 'ouvrir le\nportail', retour: '' },
    legende: "Portail automatique : la chaîne d'information décide et envoie un ordre, la chaîne d'énergie fournit la puissance et ouvre le portail.",
  },
  {
    fiche: 'quatrieme/techno/chaine-dinformation', cle: 'analogique-numerique', schema: 'signaux', apres: "## 3. Comment circule l'information : le signal",
    params: { panneaux: ['analogique', 'numerique'] },
    legende: 'Un signal analogique varie de façon continue ; un signal numérique ne prend que des valeurs discrètes, ici 0 ou 1.',
  },
  {
    fiche: 'quatrieme/techno/chaine-dinformation', cle: 'schema-blocs', schema: 'chaine', apres: "## 5. Représenter la chaîne d'information",
    params: { blocs: CHAINE_INFO_3('capteur', 'microcontrôleur', 'écran, DEL'), entree: 'information\nd’entrée', sortie: 'message,\nordre', W: 640 },
    legende: "Schéma en blocs de la chaîne d'information : chaque bloc porte une fonction (un verbe) et, en dessous, le composant qui la réalise.",
  },
  // ── 4e : confort et domotique ──
  {
    fiche: 'quatrieme/techno/confort-et-domotique', cle: 'capteur-programme-actionneur', schema: 'chaine', apres: "## 2. Les trois éléments d'un système automatique",
    params: { blocs: [{ f: 'Capteurs', c: 'mouvement,\nluminosité' }, { f: 'Carte\nprogrammable', c: 'programme' }, { f: 'Actionneur', c: 'lampe' }], entree: 'acquérir', sortie: 'agir :\néclairer', W: 620, hb: 76 },
    legende: "Éclairage automatique d'un couloir : les capteurs acquièrent l'information, la carte programmable décide, l'actionneur agit.",
  },
  {
    fiche: 'quatrieme/techno/confort-et-domotique', cle: 'algorigramme-couloir', schema: 'algorigramme', apres: '## 3. Programme et conditions',
    params: {
      W: 560, H: 330,
      noeuds: {
        deb: { t: 'debut', x: 300, y: 28, w: 120, h: 38, texte: 'Début' },
        test: { t: 'test', x: 300, y: 130, w: 300, h: 110, texte: 'présence détectée\nET luminosité\n< seuil ?' },
        on: { t: 'action', x: 130, y: 250, w: 170, texte: 'allumer la lampe' },
        off: { t: 'action', x: 470, y: 250, w: 170, texte: 'éteindre la lampe' },
      },
      liens: [
        { de: 'deb', a: 'test' },
        { de: 'test', a: 'on', s: 'l', e: 't', via: [[130, 130]], label: 'oui', lx: 128, ly: 120 },
        { de: 'test', a: 'off', s: 'r', e: 't', via: [[470, 130]], label: 'non', lx: 472, ly: 120 },
        { de: 'on', a: 'test', s: 'b', e: 't', via: [[130, 300], [24, 300], [24, 64], [300, 64]] },
        { de: 'off', a: 'test', s: 'b', e: 't', via: [[470, 300], [24, 300], [24, 64], [300, 64]] },
      ],
      textes: [{ x: 300, y: 322, s: 'le programme recommence en permanence', italique: true, couleur: 'violet' }],
    },
    legende: "Le programme compare les mesures des capteurs à un seuil : si les deux conditions sont vraies, il allume la lampe, sinon il l'éteint.",
  },
  {
    fiche: 'quatrieme/techno/confort-et-domotique', cle: 'boucle-ouverte-fermee', schema: 'boucles', apres: '## 4. Boucle ouverte et boucle fermée',
    params: {
      ouverte: { titre: 'Boucle ouverte : arrosage programmé', blocs: [{ f: 'Programme', c: 'tous les jours\nà 20 h' }, { f: 'Électrovanne', c: 'ouvre l’eau' }, { f: 'Arrosage', c: 'même s’il a plu' }] },
      fermee: { titre: 'Boucle fermée : thermostat', blocs: [{ f: 'Programme', c: 'compare à la\nconsigne (19 °C)' }, { f: 'Chauffage', c: 'résistance\nchauffante' }, { f: 'Pièce', c: 'température\nréelle' }], capteur: 'capteur de\ntempérature' },
    },
    legende: "En boucle ouverte, le système agit sans vérifier le résultat ; en boucle fermée, un capteur mesure le résultat et renseigne le programme.",
  },
  // ── 4e : modélisation volumique ──
  {
    fiche: 'quatrieme/techno/modelisation-volumique', cle: 'rondelle-soustraction', schema: 'rondelle', apres: '## 3. Comment construit-on un volume ?', params: {},
    legende: 'Pour modéliser une rondelle, on soustrait un petit cylindre au centre d’un grand cylindre : cela crée le trou.',
  },
  {
    fiche: 'quatrieme/techno/modelisation-volumique', cle: 'extrusion-revolution', schema: 'extrusion-revolution', apres: '## 3. Comment construit-on un volume ?', params: {},
    legende: "L'extrusion donne de l'épaisseur à une forme plate ; la révolution fait tourner un profil autour d'un axe pour créer, par exemple, un verre.",
  },
  {
    fiche: 'quatrieme/techno/modelisation-volumique', cle: 'chaine-numerique', schema: 'chaine', apres: "## 5. Du modèle 3D à l'objet réel",
    params: { vertical: true, couleur: 'violet', blocs: [{ f: 'Idée et croquis', c: 'sur papier, en 2D' }, { f: 'Modèle 3D', c: 'logiciel de CAO' }, { f: 'Fichier exporté', c: 'format STL' }, { f: 'Découpage en couches', c: 'logiciel trancheur' }, { f: 'Fabrication', c: 'imprimante 3D' }], sortie: 'objet réel', hb: 48, W: 420 },
    legende: 'La chaîne numérique : de l’idée au modèle 3D, puis au fichier STL découpé en couches et à la fabrication par une imprimante 3D.',
  },
  // ── 4e : programmation événementielle ──
  {
    fiche: 'quatrieme/techno/programmation-evenementielle', cle: 'scripts-quand-faire', schema: 'scripts', apres: '## 2. Le modèle « QUAND … FAIRE … »',
    params: { scripts: [{ quand: 'quand le drapeau vert est cliqué', faire: ['mettre score à 0'] }, { quand: 'quand la touche → est pressée', faire: ['avancer de 10 pas'] }, { quand: 'quand ce lutin est cliqué', faire: ['jouer un son'] }, { quand: 'quand je reçois [gagné]', faire: ['dire « Bravo ! »'] }] },
    legende: 'Quatre scripts événementiels : chacun commence par un bloc « quand … » et ne s’exécute que lorsque son événement se produit.',
  },
  {
    fiche: 'quatrieme/techno/programmation-evenementielle', cle: 'sequentiel-evenementiel', schema: 'algorigramme', apres: '## 3. Événementiel ≠ séquentiel',
    params: {
      W: 620, H: 380,
      noeuds: {
        d1: { t: 'debut', x: 140, y: 56, w: 110, h: 36, texte: 'Début' },
        i1: { t: 'action', x: 140, y: 126, w: 150, h: 40, texte: 'instruction 1' },
        i2: { t: 'action', x: 140, y: 196, w: 150, h: 40, texte: 'instruction 2' },
        i3: { t: 'action', x: 140, y: 266, w: 150, h: 40, texte: 'instruction 3' },
        f1: { t: 'fin', x: 140, y: 336, w: 110, h: 36, texte: 'Fin' },
        d2: { t: 'debut', x: 440, y: 56, w: 130, h: 36, texte: 'Démarrage' },
        att: { t: 'action', x: 440, y: 130, w: 190, h: 44, texte: 'attendre un événement' },
        ev: { t: 'test', x: 440, y: 226, w: 220, h: 80, texte: 'touche →\npressée ?' },
        act: { t: 'action', x: 440, y: 330, w: 180, h: 40, texte: 'avancer de 10 pas' },
      },
      liens: [
        { de: 'd1', a: 'i1' }, { de: 'i1', a: 'i2' }, { de: 'i2', a: 'i3' }, { de: 'i3', a: 'f1' },
        { de: 'd2', a: 'att' }, { de: 'att', a: 'ev' },
        { de: 'ev', a: 'act', label: 'oui', lx: 456, ly: 282 },
        { de: 'ev', a: 'att', s: 'r', e: 'r', via: [[600, 226], [600, 130]], label: 'non', lx: 574, ly: 218 },
        { de: 'act', a: 'att', s: 'l', e: 'l', via: [[310, 330], [310, 130]] },
      ],
      textes: [{ x: 140, y: 22, s: 'Séquentiel : du début à la fin', gras: true, couleur: 'bleu', taille: 13 }, { x: 440, y: 22, s: 'Événementiel : on attend', gras: true, couleur: 'orange', taille: 13 }],
    },
    legende: 'Un programme séquentiel s’exécute du début à la fin sans attendre ; un programme événementiel attend un événement, réagit, puis attend à nouveau.',
  },
  // ── 4e : réseaux informatiques ──
  {
    fiche: 'quatrieme/techno/reseaux-informatiques', cle: 'reseau-local', schema: 'reseau-local', apres: '## 2. Relier les machines : avec ou sans fil', params: {},
    legende: "Un réseau local : les appareils sont reliés par câble au switch ou en Wi-Fi à la box, qui donne accès à Internet et aux serveurs.",
  },
  {
    fiche: 'quatrieme/techno/reseaux-informatiques', cle: 'client-serveur-paquets', schema: 'sequence', apres: '## 4. Client, serveur et échange de données',
    params: { acteurs: [{ nom: 'Client', sous: 'navigateur' }, { nom: 'Serveur', sous: 'site web', couleur: 'violet' }], messages: [{ de: 0, a: 1, texte: 'requête : « envoie-moi la page »' }, { de: 1, a: 0, texte: 'paquet 1 sur 3' }, { de: 1, a: 0, texte: 'paquet 2 sur 3' }, { de: 1, a: 0, texte: 'paquet 3 sur 3' }], W: 560, pas: 48 },
    legende: 'Le client demande une ressource ; le serveur répond en envoyant les données découpées en paquets, réassemblés dans l’ordre à l’arrivée.',
  },
  // ── 3e : démarche de projet ──
  {
    fiche: 'troisieme/techno/demarche-de-projet', cle: 'etapes-projet', schema: 'etapes-projet', apres: '## Les grandes étapes du projet',
    params: { etapes: ['Analyser le besoin', 'Rechercher des idées', 'Choisir une solution', 'Concevoir et modéliser', 'Prototyper', 'Tester et valider', 'Présenter le projet'], de: 5, vers: 3 },
    legende: 'Les étapes de la démarche de projet ; après un test, on revient souvent en arrière pour améliorer la solution (itération).',
  },
  {
    fiche: 'troisieme/techno/demarche-de-projet', cle: 'gantt', schema: 'gantt', apres: "## Organiser le travail en équipe",
    params: { semaines: 10, taches: [{ t: 'Analyser le besoin', debut: 0, duree: 2 }, { t: 'Rechercher des idées', debut: 1, duree: 2 }, { t: 'Choisir une solution', debut: 3, duree: 1 }, { t: 'Concevoir, modéliser', debut: 4, duree: 2 }, { t: 'Prototyper', debut: 5, duree: 3 }, { t: 'Tester et valider', debut: 7, duree: 2 }, { t: 'Préparer la revue', debut: 9, duree: 1 }], jalon: { semaine: 10, t: 'revue de projet' } },
    legende: "Exemple de diagramme de Gantt : chaque tâche est une barre dans le temps ; certaines se font en parallèle, le losange marque un jalon.",
  },
  // ── 3e : évolution des objets techniques ──
  {
    fiche: 'troisieme/techno/evolution-des-objets-techniques', cle: 'famille-lignee', schema: 'famille-lignee', apres: "## Familles et lignées d'objets",
    params: { lignee: ['draisienne', 'grand-bi', 'vélo\nmoderne', 'vélo à assistance\nélectrique'], famille: ['VTT', 'vélo de route', 'vélo de ville', 'vélo pliant'] },
    legende: "Une lignée suit un même type d'objet dans le temps ; une famille regroupe des objets de même fonction à une même époque.",
  },
  {
    fiche: 'troisieme/techno/evolution-des-objets-techniques', cle: 'lignee-eclairage', schema: 'lignee', apres: "## L'évolution des solutions techniques",
    params: { rangees: [{ titre: 'Fonction « éclairer » : les solutions successives', items: ['bougie', 'lampe à\npétrole', 'ampoule à\nfilament', 'tube\nfluorescent', 'LED'], couleur: 'orange' }], W: 620 },
    legende: "La fonction éclairer ne change pas, mais les solutions techniques se succèdent dans le temps (sans échelle de dates).",
  },
  {
    fiche: 'troisieme/techno/evolution-des-objets-techniques', cle: 'cycle-de-vie', schema: 'cycle-vie', apres: "## Les impacts sur la société et l'environnement",
    params: { etapes: [{ f: 'Extraction', c: 'matières\npremières' }, { f: 'Fabrication', c: 'usine' }, { f: 'Usage', c: 'énergie\nconsommée' }, { f: 'Fin de vie', c: 'déchet, réparation\nou recyclage' }], recyclage: 'recyclage : la matière revient en fabrication' },
    legende: "Le cycle de vie d'un produit, de l'extraction des matières premières à la fin de vie ; le recyclage réduit le besoin de nouvelles ressources.",
  },
  // ── 3e : Internet et réseaux ──
  {
    fiche: 'troisieme/techno/internet-et-reseaux', cle: 'paquets', schema: 'paquets', apres: '## Comment circulent les données : les paquets', params: {},
    legende: 'Le message est découpé en paquets numérotés qui passent par des routeurs, parfois par des chemins différents, puis sont remis dans l’ordre.',
  },
  {
    fiche: 'troisieme/techno/internet-et-reseaux', cle: 'afficher-page-web', schema: 'sequence', apres: '## Un exemple : afficher une page web',
    params: { acteurs: [{ nom: 'Navigateur', sous: 'le client' }, { nom: 'Serveur DNS', sous: 'l’annuaire', couleur: 'orange' }, { nom: 'Serveur web', sous: 'college.fr', couleur: 'violet' }], messages: [{ de: 0, a: 1, texte: '2. adresse IP\nde college.fr ?' }, { de: 1, a: 0, texte: 'voici l’adresse IP' }, { de: 0, a: 2, texte: '3. requête HTTPS : la page' }, { de: 2, a: 0, texte: '4. la page, en paquets' }], W: 640, pas: 58 },
    legende: 'Pour afficher une page, le navigateur demande d’abord au DNS l’adresse IP du serveur, puis envoie sa requête au serveur, qui renvoie la page.',
  },
  // ── 3e : objets connectés ──
  {
    fiche: 'troisieme/techno/objets-connectes', cle: 'thermostat-connecte', schema: 'objet-connecte', apres: '## Un exemple complet : le thermostat connecté', params: {},
    legende: 'Le thermostat connecté mesure la température, décide, commande le chauffage et envoie ses données au smartphone par le Wi-Fi.',
  },
  // ── 3e : programmation et robotique ──
  {
    fiche: 'troisieme/techno/programmation-et-robotique', cle: 'trois-structures', schema: 'algorigramme', apres: '## Les instructions de base',
    params: {
      W: 660, H: 380,
      noeuds: {
        s1: { t: 'action', x: 100, y: 70, w: 150, h: 40, texte: 'instruction 1' },
        s2: { t: 'action', x: 100, y: 150, w: 150, h: 40, texte: 'instruction 2' },
        s3: { t: 'action', x: 100, y: 230, w: 150, h: 40, texte: 'instruction 3' },
        b0: { t: 'action', x: 320, y: 70, w: 150, h: 40, texte: 'compteur ← 0' },
        bt: { t: 'test', x: 320, y: 160, w: 170, h: 74, texte: 'compteur < 4 ?' },
        ba: { t: 'action', x: 320, y: 262, w: 170, h: 52, texte: 'avancer\ncompteur ← compteur + 1' },
        bs: { t: 'action', x: 320, y: 350, w: 110, h: 36, texte: 'suite' },
        ct: { t: 'test', x: 548, y: 100, w: 124, h: 70, texte: 'obstacle ?' },
        co: { t: 'action', x: 478, y: 210, w: 92, h: 40, texte: 'tourner' },
        cn: { t: 'action', x: 618, y: 210, w: 80, h: 40, texte: 'avancer' },
        cs: { t: 'action', x: 548, y: 300, w: 110, h: 36, texte: 'suite' },
      },
      liens: [
        { de: 's1', a: 's2' }, { de: 's2', a: 's3' },
        { de: 'b0', a: 'bt' },
        { de: 'bt', a: 'ba', label: 'oui', lx: 336, ly: 214 },
        { de: 'ba', a: 'bt', s: 'l', e: 'l', via: [[222, 262], [222, 160]] },
        { de: 'bt', a: 'bs', s: 'r', e: 'r', via: [[416, 160], [416, 350]], label: 'non', lx: 418, ly: 150 },
        { de: 'ct', a: 'co', s: 'l', e: 't', via: [[478, 100]], label: 'oui', lx: 470, ly: 90 },
        { de: 'ct', a: 'cn', s: 'r', e: 't', via: [[618, 100]], label: 'non', lx: 626, ly: 90 },
        { de: 'co', a: 'cs', s: 'b', e: 't', via: [[478, 260], [548, 260]] },
        { de: 'cn', a: 'cs', s: 'b', e: 't', via: [[618, 260], [548, 260]] },
      ],
      textes: [{ x: 100, y: 26, s: 'Séquence', gras: true, couleur: 'bleu', taille: 14 }, { x: 320, y: 26, s: 'Boucle : répéter 4 fois', gras: true, couleur: 'orange', taille: 14 }, { x: 548, y: 26, s: 'Condition : si… sinon', gras: true, couleur: 'vert', taille: 14 }],
    },
    legende: "Les trois structures de base d'un programme : la séquence, la boucle (ici répéter 4 fois avec un compteur) et la condition.",
  },
  {
    fiche: 'troisieme/techno/programmation-et-robotique', cle: 'suiveur-de-ligne', schema: 'algorigramme', apres: '## Programmer un robot',
    params: {
      ...ALGO_ECLAIRAGE,
      noeuds: {
        deb: { t: 'debut', x: 280, y: 30, w: 120, h: 40, texte: 'Début' },
        lire: { t: 'es', x: 280, y: 100, w: 210, h: 50, texte: 'Lire le capteur\nde ligne' },
        test: { t: 'test', x: 280, y: 205, w: 220, h: 84, texte: 'Le capteur voit\nla ligne ?' },
        on: { t: 'action', x: 130, y: 310, w: 150, texte: 'avancer' },
        off: { t: 'action', x: 430, y: 310, w: 190, h: 50, texte: 'tourner pour\nla retrouver' },
      },
      textes: [{ x: 34, y: 250, s: 'répété', ancre: 'start', italique: true, couleur: 'violet' }, { x: 34, y: 266, s: 'en boucle', ancre: 'start', italique: true, couleur: 'violet' }],
    },
    legende: "Algorigramme d'un robot suiveur de ligne : il lit son capteur, avance s'il voit la ligne, sinon tourne pour la retrouver, et recommence.",
  },
  // ── 2de SNT : données structurées ──
  {
    fiche: 'seconde/snt/donnees-structurees', cle: 'table-annotee', schema: 'table-annotee', apres: '## Données structurées : la table',
    params: { entetes: ['titre', 'année', 'durée (min)', 'genre'], lignes: [['Film A', '2015', '120', 'aventure'], ['Film B', '2020', '95', 'comédie']], ligneObjet: 1, colAttribut: 1, nomObjet: 'objet (un film)', nomAttribut: 'attribut', larg: [100, 80, 110, 100] },
    legende: "Dans une table, chaque ligne est un objet, chaque colonne un attribut, et chaque case contient une valeur.",
  },
  {
    fiche: 'seconde/snt/donnees-structurees', cle: 'csv-table', schema: 'csv', apres: '## Formats de fichiers pour données structurées',
    params: { lignes: ['titre,année,durée (min),genre', 'Film A,2015,120,aventure', 'Film B,2020,95,comédie'] },
    legende: 'Un fichier CSV est un simple texte : chaque ligne est un objet et les valeurs sont séparées par des virgules ; un tableur l’affiche en table.',
  },
  // ── 2de SNT : informatique embarquée ──
  {
    fiche: 'seconde/snt/informatique-embarquee-objets-connectes', cle: 'boucle-embarquee', schema: 'cycle', apres: '## La boucle : capteurs, traitement, actionneurs',
    params: { etapes: ['Capteurs\n(mesurer)', 'Traitement\n(décider)', 'Actionneurs\n(agir)', 'Monde physique\n(modifié)'], couleurs: ['bleu', 'violet', 'orange', 'vert'], W: 560, H: 300, bw: 160, bh: 50, centre: 'boucle\nen continu' },
    legende: "Un système embarqué fonctionne en boucle : les capteurs mesurent, le programme décide, les actionneurs agissent, et le résultat est mesuré à nouveau.",
  },
  {
    fiche: 'seconde/snt/informatique-embarquee-objets-connectes', cle: 'objet-connecte', schema: 'objet-connecte', apres: '## Les objets connectés (IoT)',
    params: { capteur: 'capteurs', traitement: 'microcontrôleur\n(programme)', actionneur: 'actionneurs', distant: 'téléphone', liaison: 'Wi-Fi, Bluetooth,\nréseau mobile', serveur: 'serveur' },
    legende: "Un objet connecté associe la boucle capteurs, traitement, actionneurs à une connexion réseau qui le relie à un serveur ou à un téléphone.",
  },
  // ── 2de SNT : Internet ──
  {
    fiche: 'seconde/snt/internet', cle: 'commutation-paquets', schema: 'paquets', apres: '## La commutation de paquets', params: {},
    legende: 'Commutation de paquets : les paquets voyagent indépendamment, par des chemins différents, puis sont remis dans le bon ordre grâce à leur numéro.',
  },
  {
    fiche: 'seconde/snt/internet', cle: 'dns', schema: 'sequence', apres: '## Les noms de domaine et le DNS',
    params: { acteurs: [{ nom: 'Ordinateur', sous: 'le client' }, { nom: 'Serveur DNS', sous: 'l’annuaire', couleur: 'orange' }, { nom: 'Serveur du site', sous: 'education.gouv.fr', couleur: 'violet' }], messages: [{ de: 0, a: 1, texte: 'adresse IP de\neducation.gouv.fr ?' }, { de: 1, a: 0, texte: 'voici son adresse IP' }, { de: 0, a: 2, texte: 'paquets envoyés à cette adresse IP' }], W: 640, pas: 60 },
    legende: "Avant de contacter un site, la machine demande à un serveur DNS l'adresse IP qui correspond au nom de domaine.",
  },
  // ── 2de SNT : le Web ──
  {
    fiche: 'seconde/snt/le-web', cle: 'url', schema: 'url', apres: "### 1. L'URL : l'adresse d'une page",
    params: { parties: [{ t: 'https', nom: 'protocole' }, { t: '://' }, { t: 'www.exemple.fr', nom: 'nom de domaine' }, { t: '/cours/index.html', nom: 'chemin' }] },
    legende: "Une URL se décompose en trois parties : le protocole, le nom de domaine du serveur et le chemin vers la ressource.",
  },
  {
    fiche: 'seconde/snt/le-web', cle: 'requete-reponse', schema: 'sequence', apres: "### 2. HTTP : le protocole d'échange",
    params: { acteurs: [{ nom: 'Navigateur', sous: 'le client' }, { nom: 'Serveur', sous: 'héberge les pages', couleur: 'violet' }], messages: [{ de: 0, a: 1, texte: 'requête HTTP : « donne-moi cette page »' }, { de: 1, a: 0, texte: 'réponse HTTP : le code HTML et CSS' }], W: 580, pas: 56 },
    legende: 'Avec le protocole HTTP, le navigateur envoie une requête au serveur, qui renvoie une réponse contenant la page ; le navigateur l’affiche.',
  },
  {
    fiche: 'seconde/snt/le-web', cle: 'moteur-recherche', schema: 'chaine', apres: '## Les moteurs de recherche',
    params: { blocs: [{ f: '1. Parcourir', c: 'des robots suivent\nles liens' }, { f: '2. Indexer', c: 'dans une immense\nbase de données' }, { f: '3. Classer', c: 'par pertinence\n(algorithmes)' }], couleur: 'violet', entree: 'le Web', sortie: 'résultats\naffichés', W: 640, hb: 76 },
    legende: 'Un moteur de recherche parcourt le Web avec des robots, indexe les pages trouvées, puis classe les résultats pour chaque requête.',
  },
  // ── 2de SNT : localisation ──
  {
    fiche: 'seconde/snt/localisation-cartographie-gps', cle: 'latitude-longitude', schema: 'lat-long', apres: '## Se repérer sur la Terre', params: { lat: 45, lon: 40 },
    legende: "La latitude se mesure depuis l'équateur (ici 45° N), la longitude depuis le méridien de Greenwich (ici 40° E) ; schéma non à l'échelle.",
  },
  {
    fiche: 'seconde/snt/localisation-cartographie-gps', cle: 'trilateration', schema: 'trilateration', apres: '### Comment ça marche ?', params: {},
    legende: "Principe de la trilatération dans un plan : le récepteur est sur un cercle autour de chaque satellite, au point commun ; dans l'espace, il faut au moins quatre satellites.",
  },
  {
    fiche: 'seconde/snt/localisation-cartographie-gps', cle: 'itineraire-graphe', schema: 'graphe-chemin', apres: '## Les cartes numériques',
    params: {
      sommets: { A: [60, 160], B: [200, 60], C: [210, 250], D: [360, 150], E: [400, 270], F: [540, 140] },
      aretes: [['A', 'B', 4], ['A', 'C', 2], ['B', 'C', 1], ['B', 'D', 5], ['C', 'D', 8], ['C', 'E', 10], ['D', 'E', 2], ['D', 'F', 6], ['E', 'F', 3]],
      depart: 'A', arrivee: 'F', unite: 'km', W: 600, H: 340, note: 'carrefours = sommets ; routes = arêtes pondérées par la distance (km)',
    },
    legende: "Un réseau routier modélisé par un graphe : le calcul d'itinéraire cherche le chemin de plus petite distance totale, surligné en orange.",
  },
  // ── 2de SNT : photographie numérique ──
  {
    fiche: 'seconde/snt/photographie-numerique', cle: 'pixels-rvb', schema: 'pixels', apres: '## Le pixel, la définition et la résolution', params: {},
    legende: "Une image est une grille de pixels ; chaque pixel a une seule couleur, codée par trois nombres R, V et B compris entre 0 et 255.",
  },
  {
    fiche: 'seconde/snt/photographie-numerique', cle: 'synthese-additive', schema: 'rvb', apres: "## Le codage RVB d'une couleur", params: {},
    legende: 'Synthèse additive : rouge et vert donnent du jaune, vert et bleu du cyan, rouge et bleu du magenta, et les trois ensemble du blanc.',
  },
  {
    fiche: 'seconde/snt/photographie-numerique', cle: 'matriciel-vectoriel', schema: 'matriciel-vectoriel', apres: '## Image matricielle ou image vectorielle', params: {},
    legende: "Agrandie, une image matricielle laisse voir ses pixels ; une image vectorielle, décrite par des formes, garde un contour net.",
  },
  // ── 2de SNT : réseaux sociaux ──
  {
    fiche: 'seconde/snt/reseaux-sociaux', cle: 'graphe-social', schema: 'reseau-social', apres: '## Le vocabulaire des graphes',
    params: {
      sommets: { A: [70, 150], B: [170, 60], C: [190, 200], D: [300, 120], E: [330, 250], F: [430, 70], G: [520, 180] },
      aretes: [['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'D'], ['C', 'D'], ['C', 'E'], ['D', 'F'], ['E', 'G'], ['F', 'G']],
      degreDe: 'C', de: 'A', a: 'G',
    },
    legende: "Un réseau social modélisé par un graphe : les sommets sont les membres, les arêtes leurs relations ; on lit le degré d'un sommet et la distance entre deux membres.",
  },
  // ── 1re NSI : tris et recherche ──
  {
    fiche: 'premiere/nsi/algorithmique-tris-et-recherche', cle: 'dichotomie', schema: 'etapes-tableau', apres: '# 2. Recherche dichotomique',
    params: { algo: 'dichotomie', tab: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91], cible: 23 },
    legende: 'Recherche dichotomique de 23 : à chaque étape, on compare au milieu et on élimine la moitié inutile (en gris) ; trouvé en 3 étapes.',
  },
  {
    fiche: 'premiere/nsi/algorithmique-tris-et-recherche', cle: 'tri-selection', schema: 'etapes-tableau', apres: '# 3. Tri par sélection',
    params: { algo: 'selection', tab: [5, 2, 8, 1, 9, 3] },
    legende: "Tri par sélection : à chaque tour, on cherche le minimum de la partie non triée et on l'échange avec la première case de cette partie.",
  },
  {
    fiche: 'premiere/nsi/algorithmique-tris-et-recherche', cle: 'tri-insertion', schema: 'etapes-tableau', apres: '# 4. Tri par insertion',
    params: { algo: 'insertion', tab: [5, 2, 8, 1, 9, 3] },
    legende: 'Tri par insertion : chaque nouvelle valeur est insérée à sa place dans la partie déjà triée, en décalant les plus grandes vers la droite.',
  },
  // ── 1re NSI : architecture ──
  {
    fiche: 'premiere/nsi/architecture-et-systeme', cle: 'von-neumann', schema: 'von-neumann', apres: '# 1. Le modèle de von Neumann', params: {},
    legende: "Le modèle de von Neumann : le processeur (unité de commande et UAL), la mémoire qui contient programme et données, les entrées-sorties, reliés par des bus.",
  },
  {
    fiche: 'premiere/nsi/architecture-et-systeme', cle: 'portes-logiques', schema: 'portes', apres: '# 3. Des transistors aux portes logiques', params: {},
    legende: 'Les portes logiques NON, ET et OU, avec leurs tables de vérité : la sortie s dépend des entrées a et b.',
  },
  {
    fiche: 'premiere/nsi/architecture-et-systeme', cle: 'arborescence', schema: 'arborescence', apres: '# 5. Dialoguer avec le système : quelques commandes',
    params: { arbre: { nom: '/', enfants: [{ nom: 'bin', dossier: true }, { nom: 'etc', dossier: true }, { nom: 'home', enfants: [{ nom: 'eleve', enfants: [{ nom: 'Documents', enfants: [{ nom: 'nsi.py' }] }, { nom: 'Images', dossier: true }] }] }] }, surligne: '/home/eleve/Documents/nsi.py' },
    legende: 'Une arborescence de fichiers : des dossiers contenant des dossiers et des fichiers, à partir de la racine notée /.',
  },
  // ── 1re NSI : web client-serveur ──
  {
    fiche: 'premiere/nsi/interactions-web-client-serveur', cle: 'url-parametres', schema: 'url', apres: "# 2. L'URL",
    params: { parties: [{ t: 'https', nom: 'protocole' }, { t: '://' }, { t: 'www.exemple.fr', nom: 'serveur' }, { t: '/articles', nom: 'chemin', decale: true }, { t: '?id=42', nom: 'paramètres' }] },
    legende: "Une URL contient le protocole, le nom du serveur, le chemin de la ressource et des paramètres envoyés au serveur.",
  },
  {
    fiche: 'premiere/nsi/interactions-web-client-serveur', cle: 'get-post', schema: 'sequence', apres: '# 4. Les requêtes HTTP : GET et POST',
    params: { acteurs: [{ nom: 'Client', sous: 'navigateur' }, { nom: 'Serveur', sous: 'www.exemple.fr', couleur: 'violet' }], messages: [{ de: 0, a: 1, texte: 'GET /articles?id=42' }, { de: 1, a: 0, texte: '200 OK + la page HTML' }, { de: 0, a: 1, texte: 'POST /connexion (corps : pseudo, mdp)' }, { de: 1, a: 0, texte: 'réponse du serveur' }, { de: 0, a: 1, texte: 'GET /page-inconnue' }, { de: 1, a: 0, texte: '404 : ressource non trouvée', couleur: 'rouge' }], W: 580, pas: 46 },
    legende: 'GET demande une ressource (paramètres visibles dans l’URL), POST envoie des données dans le corps de la requête ; le serveur répond avec un code de statut.',
  },
  {
    fiche: 'premiere/nsi/interactions-web-client-serveur', cle: 'cote-client-serveur', schema: 'deux-cotes', apres: "# 6. Où s'exécute quoi ? (client vs serveur)",
    params: { gauche: { titre: 'Côté client', sous: 'dans le navigateur', items: ['HTML (structure)', 'CSS (présentation)', 'JavaScript (interactivité)'] }, droite: { titre: 'Côté serveur', sous: 'sur la machine distante', items: ['traitement des données', 'accès à la base de données', 'génération des pages', 'vérification des données'] }, aller: 'requête HTTP', retour: 'réponse HTTP' },
    legende: 'Le navigateur interprète HTML, CSS et JavaScript ; le serveur traite les données reçues, qui doivent toujours y être vérifiées.',
  },
  // ── 1re NSI : représentation des données ──
  {
    fiche: 'premiere/nsi/representation-des-donnees', cle: 'poids-binaire', schema: 'bits', apres: '# 1. Bit, octet et binaire', params: { bits: '1011' },
    legende: 'En binaire, chaque position vaut une puissance de 2 : 1011 en base 2 vaut 8 + 0 + 2 + 1 = 11 en base 10.',
  },
  {
    fiche: 'premiere/nsi/representation-des-donnees', cle: 'divisions-successives', schema: 'divisions', apres: '## Convertir décimal → binaire', params: { n: 13 },
    legende: 'Divisions successives de 13 par 2 : on lit les restes de bas en haut, ce qui donne 1101.',
  },
  {
    fiche: 'premiere/nsi/representation-des-donnees', cle: 'complement-a-deux', schema: 'complement2', apres: '# 4. Représenter un entier relatif : le complément à deux', params: { x: 5 },
    legende: 'Codage de −5 sur 8 bits en complément à deux : on inverse tous les bits de 5, puis on ajoute 1 ; le bit de poids fort vaut 1 (négatif).',
  },
  // ── 1re NSI : données en tables ──
  {
    fiche: 'premiere/nsi/traitement-de-donnees-en-tables', cle: 'table-liste-dicos', schema: 'table-dicos', apres: "# 1. Qu'est-ce qu'une table ?",
    params: { entetes: ['nom', 'age', 'ville'], lignes: [['Diallo', 16, 'Lyon'], ['Nguyen', 17, 'Paris']] },
    legende: 'Une table et sa représentation en Python : chaque ligne devient un dictionnaire dont les clés sont les descripteurs.',
  },
  {
    fiche: 'premiere/nsi/traitement-de-donnees-en-tables', cle: 'fusion-tables', schema: 'fusion', apres: '# 5. Fusionner deux tables',
    params: { t1: { nom: 'eleves', entetes: ['nom', 'classe'], lignes: [['Diallo', '1G1'], ['Nguyen', '1G2'], ['Martin', '1G1']] }, t2: { nom: 'classes', entetes: ['classe', 'salle'], lignes: [['1G1', 'B12'], ['1G2', 'C05']] }, cle: 'classe' },
    legende: 'Fusion de deux tables sur le descripteur commun classe : chaque élève est complété par la salle de sa classe (exemple).',
  },
  // ── 1re NSI : types construits ──
  {
    fiche: 'premiere/nsi/types-construits', cle: 'liste-indices', schema: 'liste-indices', apres: '# 2. Les tableaux (listes)', params: { nom: 'notes', valeurs: [12, 15, 9, 18], acces: 2 },
    legende: "Les éléments d'une liste sont repérés par leur indice, qui commence à 0 : l'élément d'indice 2 vaut 9 et le dernier indice est la longueur moins 1.",
  },
  {
    fiche: 'premiere/nsi/types-construits', cle: 'matrice', schema: 'matrice', apres: '## Tableaux de tableaux (matrices)', params: { m: [[1, 2, 3], [4, 5, 6]], i: 1, j: 2 },
    legende: 'Un tableau de tableaux : on choisit d’abord la ligne (indice 1), puis la colonne (indice 2) ; l’élément obtenu vaut 6.',
  },
  {
    fiche: 'premiere/nsi/types-construits', cle: 'dictionnaire', schema: 'dictionnaire', apres: '# 3. Les dictionnaires (p-uplets nommés)', params: { nom: 'eleve', paires: [['nom', 'Diallo'], ['age', 16], ['classe', '1G3']] },
    legende: 'Un dictionnaire associe à chaque clé unique une valeur ; on accède à une valeur par sa clé, et non par un indice.',
  },
  // ── 1re SI : analyse fonctionnelle ──
  {
    fiche: 'premiere/si/analyse-fonctionnelle-des-systemes', cle: 'bete-a-cornes-arrosage', schema: 'bete-a-cornes', apres: "## 1. Qu'est-ce qu'un système ?",
    params: { qui: 'à l’utilisateur (le jardinier)', quoi: 'sur le jardin (les plantes)', systeme: 'Arrosage automatique', but: 'arroser le jardin sans intervention' },
    legende: 'Bête à cornes d’un système d’arrosage automatique : à qui il rend service, sur quoi il agit et dans quel but.',
  },
  {
    fiche: 'premiere/si/analyse-fonctionnelle-des-systemes', cle: 'pieuvre-arrosage', schema: 'pieuvre', apres: '## 2. Frontière et milieux extérieurs',
    params: {
      systeme: 'Arrosage automatique',
      elements: [{ id: 'u', nom: 'Utilisateur', x: 110, y: 80 }, { id: 'j', nom: 'Jardin', x: 550, y: 80 }, { id: 'e', nom: 'Réseau d’eau', x: 110, y: 310 }, { id: 'n', nom: 'Énergie\nélectrique', x: 330, y: 350 }, { id: 'm', nom: 'Pluie, soleil', x: 550, y: 310 }],
      fp: { entre: ['u', 'j'], nom: 'FP', texte: 'permettre à l’utilisateur d’arroser le jardin' },
      fcs: [{ id: 'e', nom: 'FC1', texte: 'être raccordé au réseau d’eau' }, { id: 'n', nom: 'FC2', texte: 'être alimenté en énergie' }, { id: 'm', nom: 'FC3', texte: 'résister aux intempéries' }],
    },
    legende: "Diagramme pieuvre : la fonction principale relie deux éléments extérieurs à travers le système ; chaque fonction de contrainte n'en relie qu'un.",
  },
  {
    fiche: 'premiere/si/analyse-fonctionnelle-des-systemes', cle: 'deux-chaines', schema: 'deux-chaines', apres: "## 5. Chaîne d'énergie et chaîne d'information",
    params: { info: CHAINE_INFO_3('capteurs', 'unité de\ntraitement', 'ordres,\ndonnées'), energie: [{ f: 'ALIMENTER', c: 'batterie,\nsecteur' }, { f: 'DISTRIBUER', c: 'préactionneur' }, { f: 'CONVERTIR', c: 'actionneur' }, { f: 'TRANSMETTRE', c: 'réducteur' }], retour: 'informations mesurées par les capteurs (régulation)' },
    legende: "Un système automatisé : la chaîne d'information pilote la chaîne d'énergie ; en retour, des capteurs renseignent la chaîne d'information.",
  },
  // ── 1re SI : chaîne d'énergie ──
  {
    fiche: 'premiere/si/chaine-denergie', cle: 'quatre-fonctions', schema: 'chaine', apres: "## 1. Les quatre fonctions de la chaîne d'énergie",
    params: { vertical: true, couleur: 'orange', entree: 'source d’énergie', blocs: [{ f: 'ALIMENTER', c: 'batterie, alimentation' }, { f: 'DISTRIBUER', c: 'préactionneur : relais, variateur' }, { f: 'CONVERTIR', c: 'actionneur : moteur, vérin' }, { f: 'TRANSMETTRE', c: 'réducteur, poulies-courroie' }], flux: ['énergie électrique', 'énergie électrique\n(sur ordre)', 'énergie mécanique'], sortie: 'effecteur (roue, pince)\n→ matière d’œuvre', hb: 52 },
    legende: "La chaîne d'énergie d'un système électrique : alimenter, distribuer, convertir, transmettre, jusqu'à l'effecteur qui agit sur la matière d'œuvre.",
  },
  {
    fiche: 'premiere/si/chaine-denergie', cle: 'rendements-cascade', schema: 'rendements', apres: '## 4. Rendements en cascade',
    params: { Pabs: 36, etages: [{ nom: 'Moteur', eta: 0.8 }, { nom: 'Réducteur', eta: 0.9 }] },
    legende: 'Flux de puissance (largeurs proportionnelles) : le moteur perd 7,2 W, le réducteur 2,88 W ; le rendement global est le produit 0,8 × 0,9 = 0,72.',
  },
  {
    fiche: 'premiere/si/chaine-denergie', cle: 'reducteur', schema: 'engrenages', apres: "## 5. Adapter l'énergie : la transmission", params: { z1: 10, z2: 30 },
    legende: 'Un réducteur à engrenages de rapport 3 : la roue de sortie tourne trois fois moins vite que le pignon, mais avec un couple trois fois plus grand.',
  },
  // ── 1re SI : chaîne d'information ──
  {
    fiche: 'premiere/si/chaine-dinformation', cle: 'tor-analogique', schema: 'signaux', apres: '## 2. Acquérir : les capteurs',
    params: { panneaux: [{ type: 'logique', titre: 'Capteur TOR : 0 ou 1' }, { type: 'analogique', titre: 'Capteur analogique' }] },
    legende: "Un capteur tout ou rien (TOR) n'a que deux états ; la sortie d'un capteur analogique varie continûment avec la grandeur mesurée.",
  },
  {
    fiche: 'premiere/si/chaine-dinformation', cle: 'numerisation', schema: 'can', apres: '## 3. Numériser un signal : CAN, quantification', params: { n: 3, plage: 5, nEch: 12 },
    legende: "Numérisation avec un CAN de 3 bits pour la lisibilité : le signal est échantillonné, puis chaque valeur est arrondie à l'un des 2³ = 8 niveaux.",
  },
  {
    fiche: 'premiere/si/chaine-dinformation', cle: 'serie-parallele', schema: 'serie-parallele', apres: "## 5. Communiquer : transmettre l'information", params: { octet: '10110010' },
    legende: "Transmission d'un octet : en série, les 8 bits passent l'un après l'autre sur un fil ; en parallèle, ils passent en même temps sur 8 fils.",
  },
  // ── 1re SI : comportement des matériaux ──
  {
    fiche: 'premiere/si/comportement-des-materiaux', cle: 'sollicitations', schema: 'sollicitations', apres: '## 1. Les sollicitations simples', params: {},
    legende: 'Les cinq sollicitations simples ; les flèches rouges représentent les efforts, les pointillés la déformation de la pièce.',
  },
  {
    fiche: 'premiere/si/comportement-des-materiaux', cle: 'barre-traction', schema: 'barre-traction', apres: '## 2. Contrainte et déformation', params: {},
    legende: 'Une barre de longueur initiale L₀ et de section S, tirée par une force F, s’allonge de ΔL : on calcule la contrainte σ et la déformation ε.',
  },
  {
    fiche: 'premiere/si/comportement-des-materiaux', cle: 'essai-traction', schema: 'courbe-traction', apres: "## 4. L'essai de traction", params: { mode: 'ductile' },
    legende: "Allure de la courbe contrainte-déformation : domaine élastique de pente E jusqu'à Re, domaine plastique, maximum Rm puis rupture ; un matériau fragile casse net.",
  },
  // ── 1re SI : mécanique des solides ──
  {
    fiche: 'premiere/si/mecanique-des-solides', cle: 'moment-cle', schema: 'moment', apres: "## 3. Le moment d'une force", params: { F: 50, d: 0.3 },
    legende: "Une force de 50 N appliquée perpendiculairement à 0,30 m de l'axe crée un moment M = F × d = 15 N·m.",
  },
  {
    fiche: 'premiere/si/mecanique-des-solides', cle: 'levier-balancoire', schema: 'levier', apres: '## 4. Le théorème du levier (bras de balance)', params: { F1: 300, d1: 1.2, F2: 600, d2: 0.6 },
    legende: "La balançoire de l'exemple, à l'échelle : l'enfant (300 N à 1,2 m) équilibre l'adulte (600 N à 0,6 m) car les deux moments valent 360 N·m.",
  },
  {
    fiche: 'premiere/si/mecanique-des-solides', cle: 'projection-force', schema: 'projection', apres: '## 5. Décomposer une force et projeter', params: { alpha: 30 },
    legende: "Une force F inclinée d'un angle α sur l'horizontale se décompose en une composante horizontale Fx et une composante verticale Fy.",
  },
  // ── Tle NSI : graphes ──
  {
    fiche: 'terminale/nsi/algorithmes-de-graphes', cle: 'representations', schema: 'graphe-representations', apres: '## 2. Représenter un graphe en mémoire',
    params: { graphe: { A: ['B', 'C'], B: ['A', 'D'], C: ['A', 'D'], D: ['B', 'C'] }, pos: { A: [50, 130], B: [130, 60], C: [130, 200], D: [210, 130] } },
    legende: 'Le graphe du cours et ses deux représentations : la matrice d’adjacence (1 si une arête existe) et les listes d’adjacence (dictionnaire).',
  },
  {
    fiche: 'terminale/nsi/algorithmes-de-graphes', cle: 'parcours-largeur', schema: 'parcours', apres: '## 3. Le parcours en largeur (BFS)', params: { ...GRAPHE_BFS, depart: 'A', type: 'largeur' },
    legende: "Parcours en largeur depuis A, voisins pris dans l'ordre alphabétique : les sommets sont visités par distance croissante depuis A.",
  },
  {
    fiche: 'terminale/nsi/algorithmes-de-graphes', cle: 'parcours-profondeur', schema: 'parcours', apres: '## 4. Le parcours en profondeur (DFS)', params: { ...GRAPHE_BFS, depart: 'A', type: 'profondeur' },
    legende: "Parcours en profondeur du même graphe depuis A : on s'enfonce le plus loin possible avant de revenir en arrière explorer les autres branches.",
  },
  // ── Tle NSI : bases de données ──
  {
    fiche: 'terminale/nsi/bases-de-donnees-et-sql', cle: 'schema-relationnel', schema: 'schema-relationnel', apres: '## 2. Clés primaires et clés étrangères',
    params: { tables: [{ nom: 'eleve', x: 14, y: 20, attributs: ['*id', 'nom', 'classe', 'ddn'] }, { nom: 'emprunt', x: 240, y: 20, attributs: ['*id', '#id_eleve', '#id_livre', 'date_emprunt'] }, { nom: 'livre', x: 466, y: 20, attributs: ['*id', 'titre', 'auteur'] }], liens: [['emprunt', 'id_eleve', 'eleve', 'id'], ['emprunt', 'id_livre', 'livre', 'id']] },
    legende: "Exemple de schéma relationnel : les deux clés étrangères de la table emprunt référencent les clés primaires des tables eleve et livre.",
  },
  {
    fiche: 'terminale/nsi/bases-de-donnees-et-sql', cle: 'jointure', schema: 'jointure', apres: '## 4. Agréger et joindre',
    params: { t1: { nom: 'eleve', entetes: ['id', 'nom', 'classe'], larg: [50, 90, 70], lignes: [[1, 'Diallo', 'TG1'], [2, 'Nguyen', 'TG2'], [3, 'Martin', 'TG1']] }, t2: { nom: 'emprunt', entetes: ['id_eleve', 'date_emprunt'], larg: [80, 120], lignes: [[1, '2026-09-14'], [3, '2026-09-20'], [1, '2026-10-02']] }, on: ['id', 'id_eleve'], colonnes: ['eleve.nom', 'emprunt.date_emprunt'] },
    legende: "La jointure relie chaque emprunt à l'élève dont la clé primaire correspond à la clé étrangère ; Nguyen, sans emprunt, n'apparaît pas dans le résultat.",
  },
  // ── Tle NSI : complexité ──
  {
    fiche: 'terminale/nsi/programmation-et-complexite', cle: 'courbes-complexite', schema: 'complexite', apres: '## 4. La notion de complexité', params: {},
    legende: "Croissance du nombre d'opérations selon la taille n pour les complexités usuelles (logarithme en base 2) : l'écart se creuse vite quand n grandit.",
  },
  // ── Tle NSI : récursivité ──
  {
    fiche: 'terminale/nsi/recursivite-et-diviser-pour-regner', cle: 'pile-appels', schema: 'pile-appels', apres: '## 1. Définition et fonctionnement', params: { n: 3 },
    legende: 'Calcul de factorielle(3) : les appels s’empilent jusqu’au cas de base, puis se dépilent en calculant 1, 1, 2 et enfin 6.',
  },
  {
    fiche: 'terminale/nsi/recursivite-et-diviser-pour-regner', cle: 'tri-fusion', schema: 'tri-fusion', apres: '## 5. Exemples au programme', params: { tab: [38, 27, 43, 3, 9, 82, 10, 5] },
    legende: 'Tri fusion : on coupe le tableau en deux jusqu’à des cases seules, puis on fusionne les moitiés triées deux à deux jusqu’au tableau trié.',
  },
  // ── Tle NSI : réseaux et routage ──
  {
    fiche: 'terminale/nsi/reseaux-et-routage', cle: 'adresse-ip', schema: 'adresse-ip', apres: '## 2. Adresse IP', params: { ip: '192.168.1.10', nReseau: 3 },
    legende: "L'adresse IPv4 192.168.1.10 : quatre nombres de 0 à 255 ; ici, les trois premiers forment la partie réseau et le dernier la partie machine.",
  },
  {
    fiche: 'terminale/nsi/reseaux-et-routage', cle: 'rip-ospf', schema: 'routage', apres: '## 4. Les protocoles de routage',
    params: {
      sommets: { A: [70, 150], B: [300, 60], C: [200, 262], D: [370, 205], E: [480, 296], F: [570, 140] },
      liens: [['A', 'B', 10e6], ['B', 'F', 10e6], ['A', 'C', 1e9], ['C', 'D', 1e9], ['D', 'F', 100e6], ['C', 'E', 100e6], ['E', 'F', 100e6], ['B', 'D', 10e6]],
      depart: 'A', arrivee: 'F',
    },
    legende: 'De A à F, RIP choisit la route qui compte le moins de sauts (en bleu) ; OSPF choisit la route de plus faible coût, avec des liens plus rapides (en orange).',
  },
  // ── Tle NSI : structures de données ──
  {
    fiche: 'terminale/nsi/structures-de-donnees', cle: 'pile-file', schema: 'pile-file', apres: '## 2. La pile (LIFO)', params: {},
    legende: 'Une pile ressort le dernier élément ajouté (on entre et on sort par le sommet) ; une file ressort le premier (on entre en queue, on sort en tête).',
  },
  {
    fiche: 'terminale/nsi/structures-de-donnees', cle: 'liste-chainee', schema: 'liste-chainee', apres: '## 4. Les listes (et le chaînage)', params: {},
    legende: 'Une liste chaînée : chaque cellule contient une valeur et une référence vers la suivante ; la dernière ne pointe vers rien (None).',
  },
  {
    fiche: 'terminale/nsi/structures-de-donnees', cle: 'abr', schema: 'abr', apres: '## 5. Les arbres', params: { cles: [8, 3, 10, 1, 6, 14, 4, 7, 13] },
    legende: "Arbre binaire de recherche obtenu en insérant 8, 3, 10, 1, 6, 14, 4, 7, 13 : racine en orange, feuilles en vert, profondeurs indiquées à droite.",
  },
  // ── Tle SI : asservissement ──
  {
    fiche: 'terminale/si/asservissement-et-regulation', cle: 'schema-blocs', schema: 'boucle-fermee', apres: '## Boucle fermée (asservissement)', params: {},
    legende: "Schéma-blocs d'un système asservi : le capteur mesure la sortie, le comparateur calcule l'écart avec la consigne, le correcteur commande l'actionneur.",
  },
  {
    fiche: 'terminale/si/asservissement-et-regulation', cle: 'reponse-echelon', schema: 'reponse-indicielle', apres: "# 4. Les performances d'un système asservi", params: { K: 0.8, xi: 0.5 },
    legende: "Réponse à un échelon d'un système de gain 0,8 en boucle fermée (calculée) : dépassement, temps de réponse à 5 % et écart statique de 0,2.",
  },
  // ── Tle SI : énergie ──
  {
    fiche: 'terminale/si/energie-dans-les-systemes', cle: 'chaine-energie', schema: 'chaine', apres: "# 3. La chaîne d'énergie",
    params: { vertical: true, couleur: 'orange', entree: 'source : secteur, batterie…', blocs: [{ f: 'ALIMENTER', c: 'fournir l’énergie utile' }, { f: 'DISTRIBUER', c: 'relais, variateur, distributeur' }, { f: 'CONVERTIR', c: 'moteur, vérin' }, { f: 'TRANSMETTRE', c: 'réducteur, poulies, engrenages' }], flux: ['', '', 'énergie mécanique'], sortie: 'agir sur la\nmatière d’œuvre', hb: 52 },
    legende: "La chaîne d'énergie : alimenter, distribuer, convertir puis transmettre l'énergie jusqu'à l'action sur la matière d'œuvre.",
  },
  {
    fiche: 'terminale/si/energie-dans-les-systemes', cle: 'rendement-chaine', schema: 'rendements', apres: "## Rendement d'une chaîne",
    params: { Pabs: 500, etages: [{ nom: 'Moteur', eta: 0.9 }, { nom: 'Réducteur', eta: 0.8 }] },
    legende: "Exemple avec 500 W absorbés : le moteur fournit 450 W, le réducteur 360 W ; le rendement global vaut 0,9 × 0,8 = 0,72.",
  },
  // ── Tle SI : mouvements ──
  {
    fiche: 'terminale/si/modelisation-des-mouvements', cle: 'degres-liberte', schema: 'degres-liberte', apres: '# 1. Repérer un solide : les liaisons', params: {},
    legende: 'Un solide libre a six degrés de liberté (trois translations, trois rotations) ; une liaison pivot en laisse un, une glissière un, un encastrement aucun.',
  },
  {
    fiche: 'terminale/si/modelisation-des-mouvements', cle: 'mruv-graphes', schema: 'mruv', apres: '## Mouvement rectiligne uniformément varié (MRUV)', params: { a: 2, tf: 3 },
    legende: "Le chariot de l'exemple (a = 2 m/s², départ arrêté) : la vitesse croît linéairement jusqu'à 6 m/s, la position suit une parabole jusqu'à 9 m.",
  },
  {
    fiche: 'terminale/si/modelisation-des-mouvements', cle: 'vitesse-rotation', schema: 'roue', apres: '# 3. Mouvement de rotation', params: { R: 0.3, w: 10 },
    legende: 'Un point de la jante d’une roue de rayon 0,3 m tournant à 10 rad/s a une vitesse tangente à la roue de 3 m/s.',
  },
  // ── Tle SI : résistance des structures ──
  {
    fiche: 'terminale/si/resistance-des-structures', cle: 'sollicitations', schema: 'sollicitations', apres: "# 1. Les sollicitations d'une structure", params: {},
    legende: 'Les cinq sollicitations ; les flèches rouges représentent les efforts, les pointillés la déformation de la pièce.',
  },
  {
    fiche: 'terminale/si/resistance-des-structures', cle: 'contrainte-section', schema: 'contrainte-sections', apres: '# 2. La contrainte', params: { F: 4000, S1: 20, S2: 40 },
    legende: 'Le câble de l’exemple (4 000 N sur 20 mm²) subit 200 MPa ; avec une section double, la contrainte tombe à 100 MPa.',
  },
  {
    fiche: 'terminale/si/resistance-des-structures', cle: 'coefficient-securite', schema: 'courbe-traction', apres: '# 4. Limite élastique et coefficient de sécurité', params: { mode: 'securite', Re: 300, s: 3, points: [80, 120] },
    legende: "Avec Re = 300 MPa et s = 3, la contrainte admissible vaut 100 MPa : une pièce à 80 MPa est validée, une pièce à 120 MPa est refusée.",
  },
  // ── Tle SI : transmission de l'information ──
  {
    fiche: 'terminale/si/transmission-de-linformation', cle: 'numerisation', schema: 'can', apres: '# 2. Signal analogique et signal numérique', params: { n: 3, plage: 5, nEch: 12 },
    legende: "Conversion analogique-numérique, ici sur 3 bits pour la lisibilité : échantillonnage puis quantification sur 2³ = 8 niveaux.",
  },
  {
    fiche: 'terminale/si/transmission-de-linformation', cle: 'bit-parite', schema: 'parite', apres: "# 5. Le bruit et la protection de l'information", params: { donnee: '1011', erreurPos: 1 },
    legende: "Bit de parité paire : 1011 devient 10111 ; si un bit est faussé pendant le transport, le nombre de 1 devient impair et l'erreur est détectée.",
  },
  {
    fiche: 'terminale/si/transmission-de-linformation', cle: 'bruit-regeneration', schema: 'bruit', apres: "# 5. Le bruit et la protection de l'information", params: { bits: '1011001' },
    legende: "Le signal numérique reçu est déformé par le bruit, mais en le comparant à un seuil on retrouve exactement les bits émis : c'est la régénération.",
  },
];
