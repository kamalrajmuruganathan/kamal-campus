/**
 * Lot « svt » : schémas des fiches de sciences (CP → CM2) et de SVT (6e → Terminale).
 * Posés par : node outils/poser-schemas.mjs lot_svt.mjs
 *
 * Schémas de principe : les organes sont SIMPLIFIÉS (pas de dessin anatomique),
 * les coupes géologiques ne sont pas à l'échelle sauf mention contraire.
 */
import {
  enveloppe, texte, ligne, fleche, boite, cercle, polygone, nb, esc,
  ENCRE, PAPIER, GRILLE, AXE, BLEU, ROUGE, VERT, ORANGE, VIOLET, ATTENUE,
} from './base.mjs';

// ───────────────────────── Outils communs ─────────────────────────

/** Couleurs de boîtes : fond pâle + bord franc. */
const TEINTES = {
  b: { fond: '#eef3fb', bord: BLEU },
  v: { fond: '#e8f5ee', bord: VERT },
  r: { fond: '#fbecec', bord: ROUGE },
  o: { fond: '#fdf1e4', bord: ORANGE },
  vi: { fond: '#f3ecfa', bord: VIOLET },
  g: { fond: '#f2f4f7', bord: ATTENUE },
  j: { fond: '#fff8d6', bord: '#a07a00' },
};
const COUL = { b: BLEU, v: VERT, r: ROUGE, o: ORANGE, vi: VIOLET, g: ATTENUE, e: ENCRE, j: '#a07a00' };
const coul = (c) => COUL[c] || c || ENCRE;

/** Largeur approximative d'un texte (police sans empattement). */
const largeur = (s, taille = 14) => Math.max(...String(s).split('\n').map((l) => l.length)) * taille * 0.56;

/** Texte sur un petit fond blanc (reste lisible sur un trait). */
function etiq(x, y, s, { taille = 13, couleur = ENCRE, ancre = 'middle', gras = false, italique = false, fond = PAPIER } = {}) {
  const lignes = String(s).split('\n');
  const w = largeur(s, taille) + 6;
  const h = lignes.length * taille * 1.22 + 3;
  const x0 = ancre === 'middle' ? x - w / 2 : ancre === 'end' ? x - w + 3 : x - 3;
  return (
    `<rect x="${nb(x0)}" y="${nb(y - taille * 0.98)}" width="${nb(w)}" height="${nb(h)}" rx="3" fill="${fond}" fill-opacity="0.94"/>` +
    texte(x, y, s, { taille, couleur, ancre, gras, italique, interligne: 1.22 })
  );
}

/** Point de sortie d'un rectangle (centre cx, cy, demi-tailles hw, hh) dans la direction (dx, dy). */
function bord(cx, cy, hw, hh, dx, dy, marge = 3) {
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const t = Math.min(ux ? (hw + marge) / Math.abs(ux) : Infinity, uy ? (hh + marge) / Math.abs(uy) : Infinity);
  return [cx + ux * t, cy + uy * t];
}

/** Flèche courbe (Bézier quadratique) de (x1, y1) à (x2, y2), bombée de k (en px, côté gauche du trajet). */
function flecheCourbe(x1, y1, x2, y2, k, { couleur = ENCRE, epaisseur = 2, pointe = 10, pointilles = false } = {}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const L = Math.hypot(x2 - x1, y2 - y1) || 1;
  const nx = (y2 - y1) / L;
  const ny = -(x2 - x1) / L;
  const cx = mx + nx * k * 2;
  const cy = my + ny * k * 2;
  const a = Math.atan2(y2 - cy, x2 - cx);
  const bx = x2 - pointe * Math.cos(a);
  const by = y2 - pointe * Math.sin(a);
  const p1 = [bx + (pointe / 2) * Math.sin(a), by - (pointe / 2) * Math.cos(a)];
  const p2 = [bx - (pointe / 2) * Math.sin(a), by + (pointe / 2) * Math.cos(a)];
  return (
    `<path d="M ${nb(x1)} ${nb(y1)} Q ${nb(cx)} ${nb(cy)} ${nb(bx)} ${nb(by)}" fill="none" stroke="${couleur}" stroke-width="${epaisseur}"${pointilles ? ' stroke-dasharray="6 5"' : ''} stroke-linecap="round"/>` +
    `<polygon points="${nb(x2)},${nb(y2)} ${nb(p1[0])},${nb(p1[1])} ${nb(p2[0])},${nb(p2[1])}" fill="${couleur}"/>`
  );
}

/** Titre en haut d'un schéma. */
const titre = (W, s, y = 24, taille = 16) => (s ? texte(W / 2, y, s, { taille, gras: true }) : '');

/**
 * Diagramme de boîtes reliées par des flèches (outil principal).
 * noeuds : [{ id, x, y (centre), w?, h?, t, c ('b','v','r','o','vi','g','j'), forme: 'boite'|'texte'|'rond', taille, gras }]
 * liens  : [{ de, a, t?, c?, k? (courbure), dx?, dy? (décalage de l'étiquette), double?, pointilles?, ep? }]
 */
function diagramme({ W = 600, H = 400, titre: ti = '', noeuds = [], liens = [], extra = '' }) {
  const N = {};
  let g = titre(W, ti);
  for (const n of noeuds) {
    const taille = n.taille || 14;
    const lignes = String(n.t).split('\n').length;
    const w = n.w || largeur(n.t, taille) + 22;
    const h = n.h || lignes * taille * 1.25 + 16;
    N[n.id] = { ...n, w, h, taille };
  }
  for (const l of liens) {
    const A = N[l.de];
    const B = N[l.a];
    if (!A || !B) throw new Error(`lien ${l.de} → ${l.a} : nœud inconnu`);
    const c = coul(l.c || 'e');
    const k = l.k || 0;
    // direction de départ / arrivée (tient compte de la courbure)
    const L = Math.hypot(B.x - A.x, B.y - A.y) || 1;
    const nx = (B.y - A.y) / L;
    const ny = -(B.x - A.x) / L;
    const cx = (A.x + B.x) / 2 + nx * k * 2;
    const cy = (A.y + B.y) / 2 + ny * k * 2;
    const ax = l.ax ?? A.x;
    const ay = l.ay ?? A.y;
    const bx = l.bx ?? B.x;
    const by = l.by ?? B.y;
    if (A.forme === 'losange') { A.bw = A.w; }
    const [x1, y1] = A.forme === 'texte' && !l.ax ? bord(ax, ay, A.w / 2 - 6, A.h / 2 - 4, (k ? cx : bx) - ax, (k ? cy : by) - ay) : bord(ax, ay, A.w / 2, A.h / 2, (k ? cx : bx) - ax, (k ? cy : by) - ay);
    const [x2, y2] = bord(bx, by, B.w / 2, B.h / 2, (k ? cx : ax) - bx, (k ? cy : ay) - by, 4);
    const opt = { couleur: c, epaisseur: l.ep || 2, pointilles: l.pointilles };
    if (l.via) {
      const v = l.via;
      const [p1x, p1y] = bord(ax, ay, A.w / 2, A.h / 2, v[0][0] - ax, v[0][1] - ay, 0);
      const [p2x, p2y] = bord(bx, by, B.w / 2, B.h / 2, v[v.length - 1][0] - bx, v[v.length - 1][1] - by, 4);
      const pts = [[p1x, p1y], ...v];
      g += `<polyline points="${pts.map((p) => p.map(nb).join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="${l.ep || 2}" stroke-linejoin="round"/>`;
      g += fleche(v[v.length - 1][0], v[v.length - 1][1], p2x, p2y, opt);
      if (l.t) g += etiq(v[0][0] + (l.dx || 0), v[0][1] + (l.dy ?? -6), l.t, { taille: l.taille || 12.5, couleur: c, ancre: l.ancre || 'middle' });
      continue;
    }
    if (k) g += flecheCourbe(x1, y1, x2, y2, k, opt);
    else {
      g += fleche(x1, y1, x2, y2, opt);
      if (l.double) g += fleche(x2, y2, x1, y1, opt);
    }
    if (l.t) {
      const mx = k ? (x1 + x2) / 4 + cx / 2 : (x1 + x2) / 2;
      const my = k ? (y1 + y2) / 4 + cy / 2 : (y1 + y2) / 2;
      g += etiq(mx + (l.dx || 0), my + (l.dy ?? -6), l.t, { taille: l.taille || 12.5, couleur: c, ancre: l.ancre || 'middle', italique: l.italique });
    }
  }
  for (const id in N) {
    const n = N[id];
    const te = TEINTES[n.c || 'b'];
    if (n.forme === 'texte') {
      const lignes = String(n.t).split('\n').length;
      g += texte(n.x, n.y - ((lignes - 1) * n.taille * 1.25) / 2 + n.taille * 0.35, n.t, { taille: n.taille, couleur: coul(n.c || 'e'), gras: n.gras });
    } else if (n.forme === 'losange') {
      g += polygone([[n.x, n.y - n.h / 2], [n.x + n.w / 2, n.y], [n.x, n.y + n.h / 2], [n.x - n.w / 2, n.y]], { couleur: te.bord, fond: te.fond, epaisseur: 1.8 });
      const lignes = String(n.t).split('\n').length;
      g += texte(n.x, n.y - ((lignes - 1) * n.taille * 1.25) / 2 + n.taille * 0.35, n.t, { taille: n.taille, gras: n.gras });
    } else if (n.forme === 'rond') {
      g += `<ellipse cx="${nb(n.x)}" cy="${nb(n.y)}" rx="${nb(n.w / 2)}" ry="${nb(n.h / 2)}" fill="${te.fond}" stroke="${te.bord}" stroke-width="1.8"/>`;
      const lignes = String(n.t).split('\n').length;
      g += texte(n.x, n.y - ((lignes - 1) * n.taille * 1.25) / 2 + n.taille * 0.35, n.t, { taille: n.taille, gras: n.gras });
    } else {
      g += boite(n.x - n.w / 2, n.y - n.h / 2, n.w, n.h, n.t, { ...te, taille: n.taille, gras: n.gras });
    }
  }
  return enveloppe(W, H, g + extra);
}

/** Chaîne de boîtes reliées par des flèches (une ligne, ou plusieurs lignes en « S »). */
function chaine({ W = 640, titre: ti = '', etapes = [], fleches = [], parLigne = 0, taille = 14, couleurs = [], ecartMin = 40, vertical = false }) {
  const n = etapes.length;
  const pl = parLigne || n;
  const lignesN = Math.ceil(n / pl);
  const maxL = Math.max(...etapes.map((e) => String(e).split('\n').length));
  const bh = maxL * taille * 1.25 + 16;
  const lab = Math.max(0, ...fleches.map((f) => (f ? largeur(f, 12.5) : 0)));
  const labH = Math.max(1, ...fleches.map((f) => (f ? String(f).split('\n').length : 1)));
  const y0 = (ti ? 44 : 14) + (lab ? labH * 15 : 0);
  const pasY = bh + 56 + (lab ? labH * 15 : 0);
  const noeuds = [];
  const liens = [];
  const wsTous = etapes.map((e) => largeur(e, taille) + 22);
  const trop = !parLigne && wsTous.reduce((a, b) => a + b, 0) + (n - 1) * Math.max(ecartMin, lab + 18) > W - 16;
  if (vertical || trop) {
    const pas = bh + 40 + (labH - 1) * 8;
    const yv = ti ? 46 : 14;
    const xc = lab ? Math.min(W / 2, W - lab - 40 - Math.max(...wsTous) / 2) : W / 2;
    etapes.forEach((t, i) => noeuds.push({ id: 'n' + i, x: xc, y: yv + bh / 2 + i * pas, w: wsTous[i], h: bh, t, c: couleurs[i] || 'b', taille }));
    for (let i = 1; i < n; i++) liens.push({ de: 'n' + (i - 1), a: 'n' + i, t: fleches[i - 1] || '', c: 'e', dx: 14, dy: 5 - (labH - 1) * 7, ancre: 'start' });
    return diagramme({ W, H: yv + (n - 1) * pas + bh + 16, titre: ti, noeuds, liens });
  }
  for (let li = 0; li < lignesN; li++) {
    const idx = [];
    for (let i = li * pl; i < Math.min(n, (li + 1) * pl); i++) idx.push(i);
    if (li % 2 === 1) idx.reverse();
    const ws = idx.map((i) => largeur(etapes[i], taille) + 22);
    const k = idx.length;
    const gap = k > 1 ? Math.max(ecartMin, lab + 18, (W - 24 - ws.reduce((a, b) => a + b, 0)) / (k - 1)) : 0;
    const tot = ws.reduce((a, b) => a + b, 0) + gap * (k - 1);
    let x = (W - tot) / 2;
    const xs = ws.map((w) => { const c = x + w / 2; x += w + gap; return c; });
    idx.forEach((i, j) => noeuds.push({ id: 'n' + i, x: xs[j], y: y0 + bh / 2 + li * pasY, w: ws[j], h: bh, t: etapes[i], c: couleurs[i] || 'b', taille }));
  }
  for (let i = 1; i < n; i++) {
    const memeLigne = Math.floor(i / pl) === Math.floor((i - 1) / pl);
    liens.push({ de: 'n' + (i - 1), a: 'n' + i, t: fleches[i - 1] || '', c: 'e', dy: memeLigne ? -8 - (labH - 1) * 15 : 4, dx: memeLigne ? 0 : 12, ancre: memeLigne ? 'middle' : 'start' });
  }
  const H = y0 + (lignesN - 1) * pasY + bh + 18;
  return diagramme({ W, H, titre: ti, noeuds, liens });
}

/** Cycle : boîtes réparties sur une ellipse, flèches qui suivent l'ellipse (sens horaire). */
function cycle({ W = 600, H = 420, titre: ti = '', etapes = [], couleurs = [], rx = 0, ry = 0, fleches = [], centre = '', taille = 14, depart = -90, couleurCentre = 'g', cy: cyP = 0 }) {
  const cx = W / 2;
  const cy = cyP || (ti ? H / 2 + 16 : H / 2);
  const RX = rx || W / 2 - 110;
  const RY = ry || H / 2 - 60;
  const n = etapes.length;
  const ang = (i) => ((depart + (360 * i) / n) * Math.PI) / 180;
  const B = etapes.map((t, i) => {
    const lignes = String(t).split('\n').length;
    return { x: cx + RX * Math.cos(ang(i)), y: cy + RY * Math.sin(ang(i)), w: largeur(t, taille) + 22, h: lignes * taille * 1.25 + 16, t, c: couleurs[i] || 'b' };
  });
  const dedans = (b, x, y, m = 7) => Math.abs(x - b.x) < b.w / 2 + m && Math.abs(y - b.y) < b.h / 2 + m;
  let g = titre(W, ti);
  B.forEach((b, i) => {
    const b2 = B[(i + 1) % n];
    const a1 = ang(i);
    const a2 = ang(i + 1);
    const pts = [];
    for (let k = 0; k <= 200; k++) {
      const a = a1 + ((a2 - a1) * k) / 200;
      const x = cx + RX * Math.cos(a), y = cy + RY * Math.sin(a);
      if (!dedans(b, x, y) && !dedans(b2, x, y)) pts.push([x, y]);
    }
    if (pts.length < 3) return;
    const [xa, ya] = pts[pts.length - 2];
    const [xb, yb] = pts[pts.length - 1];
    const d = pts.slice(0, -1).map((p, j) => `${j ? 'L' : 'M'} ${nb(p[0])} ${nb(p[1])}`).join(' ');
    g += `<path d="${d}" fill="none" stroke="${ENCRE}" stroke-width="2" stroke-linecap="round"/>`;
    // pointe orientée selon la tangente
    const a = Math.atan2(yb - ya, xb - xa);
    const P = 10;
    const bx = xb - P * Math.cos(a), by = yb - P * Math.sin(a);
    g += `<polygon points="${nb(xb + 2 * Math.cos(a))},${nb(yb + 2 * Math.sin(a))} ${nb(bx + (P / 2) * Math.sin(a))},${nb(by - (P / 2) * Math.cos(a))} ${nb(bx - (P / 2) * Math.sin(a))},${nb(by + (P / 2) * Math.cos(a))}" fill="${ENCRE}"/>`;
    if (fleches[i]) {
      const m = pts[Math.floor(pts.length / 2)];
      const am = Math.atan2(m[1] - cy, m[0] - cx);
      const ex = Math.cos(am), ey = Math.sin(am);
      const lw = largeur(fleches[i], 12.5);
      g += etiq(m[0] + ex * (lw / 2 + 8), m[1] + ey * 16 + 4, fleches[i], { taille: 12.5, couleur: ATTENUE, italique: true });
    }
  });
  B.forEach((b) => { g += boite(b.x - b.w / 2, b.y - b.h / 2, b.w, b.h, b.t, { ...TEINTES[b.c], taille }); });
  if (centre) {
    const lignes = String(centre).split('\n').length;
    g += texte(cx, cy - ((lignes - 1) * 14 * 1.25) / 2 + 5, centre, { taille: 14, couleur: coul(couleurCentre), gras: true });
  }
  return enveloppe(W, H, g);
}

/** Arbre (organigramme de haut en bas). racine = { t, c, enfants: [...] }. */
function arbre({ W = 640, titre: ti = '', racine, taille = 13.5, pasY = 84, feuilleW = 0, liensTexte = true }) {
  const noeuds = [];
  const liens = [];
  let feuilles = 0;
  const compter = (n) => (n.enfants && n.enfants.length ? n.enfants.reduce((s, e) => s + compter(e), 0) : 1);
  const total = compter(racine);
  const marge = 10;
  const fw = (W - 2 * marge) / total;
  let prof = 0;
  let id = 0;
  const y0 = ti ? 56 : 30;
  const placer = (n, d) => {
    prof = Math.max(prof, d);
    const monId = 'a' + id++;
    let x;
    if (n.enfants && n.enfants.length) {
      const ids = n.enfants.map((e) => placer(e, d + 1));
      const xs = ids.map((i) => noeuds.find((q) => q.id === i).x);
      x = (Math.min(...xs) + Math.max(...xs)) / 2;
      ids.forEach((i, j) => liens.push({ de: monId, a: i, t: liensTexte ? n.enfants[j].lien || '' : '', c: 'g', dy: -2, ep: 1.6, taille: 12 }));
    } else {
      x = marge + fw * (feuilles + 0.5);
      feuilles++;
    }
    const wMax = n.enfants && n.enfants.length ? undefined : Math.min(fw - 8, largeur(n.t, n.taille || taille) + 18);
    noeuds.push({ id: monId, x, y: y0 + d * pasY + (n.dy || 0), t: n.t, c: n.c || 'b', taille: n.taille || taille, w: n.w || (feuilleW && !(n.enfants && n.enfants.length) ? feuilleW : wMax), gras: n.gras });
    return monId;
  };
  placer(racine, 0);
  const maxL = Math.max(...noeuds.map((n) => String(n.t).split('\n').length));
  return diagramme({ W, H: y0 + prof * pasY + maxL * taille * 0.7 + 30, titre: ti, noeuds, liens });
}

/** Grille de cartes (titre + contenu), pour comparer des cas. cartes = [{ t, s, c }] */
function cartes({ W = 640, titre: ti = '', cartes: cs = [], parLigne = 3, h = 96, taille = 13 }) {
  const marge = 12;
  const y0 = ti ? 44 : 12;
  const w = (W - 2 * marge - (parLigne - 1) * 10) / parLigne;
  let g = titre(W, ti);
  cs.forEach((c, i) => {
    const x = marge + (i % parLigne) * (w + 10);
    const y = y0 + Math.floor(i / parLigne) * (h + 10);
    const te = TEINTES[c.c || 'b'];
    g += `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(w)}" height="${h}" rx="9" fill="${te.fond}" stroke="${te.bord}" stroke-width="1.8"/>`;
    g += texte(x + w / 2, y + 22, c.t, { taille: taille + 2, gras: true, couleur: te.bord });
    g += texte(x + w / 2, y + 44, c.s, { taille, couleur: ENCRE });
  });
  const lignes = Math.ceil(cs.length / parLigne);
  return enveloppe(W, y0 + lignes * (h + 10) + 4, g);
}

// Petits dessins réutilisables ------------------------------------------------

/** Soleil (disque jaune + rayons). */
function soleil(x, y, r = 22) {
  let g = '';
  for (let i = 0; i < 12; i++) {
    const a = (i * Math.PI) / 6;
    g += ligne(x + Math.cos(a) * (r + 5), y + Math.sin(a) * (r + 5), x + Math.cos(a) * (r + 13), y + Math.sin(a) * (r + 13), { couleur: '#e0a400', epaisseur: 2.4 });
  }
  return g + cercle(x, y, r, { couleur: '#d18f00', fond: '#ffd23f', epaisseur: 2 });
}

/** Disque à moitié éclairé : partie éclairée tournée vers l'angle « versDeg » (0 = droite). */
function demiEclaire(x, y, r, versDeg = 180, { jour = '#ffe680', nuit = '#2f3e5c', bordure = ENCRE } = {}) {
  const a = (versDeg * Math.PI) / 180;
  const p1 = [x + r * Math.cos(a + Math.PI / 2), y - r * Math.sin(a + Math.PI / 2)];
  const p2 = [x + r * Math.cos(a - Math.PI / 2), y - r * Math.sin(a - Math.PI / 2)];
  return (
    cercle(x, y, r, { couleur: bordure, fond: nuit, epaisseur: 1.8 }) +
    `<path d="M ${nb(p1[0])} ${nb(p1[1])} A ${r} ${r} 0 0 1 ${nb(p2[0])} ${nb(p2[1])} Z" fill="${jour}"/>` +
    cercle(x, y, r, { couleur: bordure, epaisseur: 1.8 })
  );
}

/** Ligne de rayons lumineux parallèles (flèches) de x1 à x2 entre y1 et y2. */
function rayons(x1, x2, ys, couleur = '#d18f00') {
  return ys.map((y) => fleche(x1, y, x2, y, { couleur, epaisseur: 1.6, pointe: 8 })).join('');
}

export const SCHEMAS = {};
export const POSES = [];

// ───────────────────────── Schémas génériques ─────────────────────────
Object.assign(SCHEMAS, { diagramme, chaine, cycle, arbre, cartes });

// ───────────────────────── École primaire ─────────────────────────

/** Le corps humain (silhouette simplifiée) et ses grandes parties. */
SCHEMAS['corps'] = () => {
  const W = 480, H = 400, cx = 240;
  const peau = '#f6d7b8', trait = '#8a5a35';
  let g = '';
  // jambes
  g += `<path d="M ${cx - 22} 236 L ${cx - 30} 352 M ${cx + 22} 236 L ${cx + 30} 352" stroke="${peau}" stroke-width="26" stroke-linecap="round" fill="none"/>`;
  g += `<path d="M ${cx - 22} 236 L ${cx - 30} 352 M ${cx + 22} 236 L ${cx + 30} 352" stroke="${trait}" stroke-width="1.4" fill="none" opacity="0"/>`;
  // pieds
  g += `<ellipse cx="${cx - 40}" cy="362" rx="22" ry="9" fill="${peau}" stroke="${trait}" stroke-width="1.5"/>`;
  g += `<ellipse cx="${cx + 40}" cy="362" rx="22" ry="9" fill="${peau}" stroke="${trait}" stroke-width="1.5"/>`;
  // bras
  g += `<path d="M ${cx - 40} 128 L ${cx - 82} 226 M ${cx + 40} 128 L ${cx + 82} 226" stroke="${peau}" stroke-width="22" stroke-linecap="round" fill="none"/>`;
  // mains
  g += cercle(cx - 86, 238, 13, { couleur: trait, fond: peau, epaisseur: 1.5 }) + cercle(cx + 86, 238, 13, { couleur: trait, fond: peau, epaisseur: 1.5 });
  // tronc (t-shirt)
  g += `<rect x="${cx - 46}" y="112" width="92" height="132" rx="22" fill="#9cc3f5" stroke="${BLEU}" stroke-width="2"/>`;
  // cou + tête
  g += `<rect x="${cx - 10}" y="96" width="20" height="20" fill="${peau}"/>`;
  g += cercle(cx, 66, 38, { couleur: trait, fond: peau, epaisseur: 1.8 });
  g += cercle(cx - 13, 60, 4, { fond: ENCRE, couleur: ENCRE, epaisseur: 1 }) + cercle(cx + 13, 60, 4, { fond: ENCRE, couleur: ENCRE, epaisseur: 1 });
  g += `<path d="M ${cx - 12} 82 Q ${cx} 92 ${cx + 12} 82" fill="none" stroke="${trait}" stroke-width="2"/>`;
  g += `<path d="M ${cx} 64 L ${cx - 4} 74 L ${cx + 3} 74" fill="none" stroke="${trait}" stroke-width="1.6"/>`;
  g += `<ellipse cx="${cx - 39}" cy="66" rx="5" ry="9" fill="${peau}" stroke="${trait}" stroke-width="1.5"/><ellipse cx="${cx + 39}" cy="66" rx="5" ry="9" fill="${peau}" stroke="${trait}" stroke-width="1.5"/>`;
  // étiquettes
  const lab = (x1, y1, x2, y2, t, ancre) => ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: 1.3 }) + texte(x2 + (ancre === 'end' ? -6 : 6), y2 + 5, t, { taille: 16, ancre, gras: true });
  g += lab(cx + 36, 46, 360, 40, 'la tête', 'start');
  g += lab(cx + 40, 170, 360, 160, 'le tronc', 'start');
  g += lab(cx - 66, 186, 110, 160, 'un bras', 'end');
  g += lab(cx - 98, 242, 110, 262, 'une main', 'end');
  g += lab(cx + 30, 300, 360, 296, 'une jambe', 'start');
  g += lab(cx - 58, 364, 110, 360, 'un pied', 'end');
  return enveloppe(W, H, g);
};

/** Montre une horloge à aiguilles (h : heures, m : minutes). */
SCHEMAS['horloge'] = ({ h = 3, m = 0, legende = '' } = {}) => {
  const W = 520, H = 330, cx = 160, cy = 165, R = 140;
  let g = cercle(cx, cy, R, { couleur: ENCRE, fond: '#fbfbf7', epaisseur: 4 });
  for (let i = 0; i < 60; i++) {
    const a = (i * 6 - 90) * Math.PI / 180;
    const r1 = i % 5 === 0 ? R - 14 : R - 7;
    g += ligne(cx + r1 * Math.cos(a), cy + r1 * Math.sin(a), cx + (R - 3) * Math.cos(a), cy + (R - 3) * Math.sin(a), { couleur: ENCRE, epaisseur: i % 5 === 0 ? 2.4 : 1 });
  }
  for (let i = 1; i <= 12; i++) {
    const a = (i * 30 - 90) * Math.PI / 180;
    g += texte(cx + (R - 30) * Math.cos(a), cy + (R - 30) * Math.sin(a) + 7, String(i), { taille: 20, gras: true });
  }
  const aH = ((h % 12) * 30 + m * 0.5 - 90) * Math.PI / 180;
  const aM = (m * 6 - 90) * Math.PI / 180;
  g += ligne(cx, cy, cx + 62 * Math.cos(aH), cy + 62 * Math.sin(aH), { couleur: ROUGE, epaisseur: 7 });
  g += ligne(cx, cy, cx + 96 * Math.cos(aM), cy + 96 * Math.sin(aM), { couleur: BLEU, epaisseur: 4 });
  g += cercle(cx, cy, 6, { fond: ENCRE, couleur: ENCRE });
  g += `<rect x="326" y="96" width="20" height="8" rx="3" fill="${ROUGE}"/>` + texte(354, 106, 'petite aiguille :', { taille: 14, ancre: 'start', couleur: ROUGE, gras: true }) + texte(354, 124, 'les heures', { taille: 14, ancre: 'start' });
  g += `<rect x="326" y="160" width="20" height="5" rx="2" fill="${BLEU}"/>` + texte(354, 168, 'grande aiguille :', { taille: 14, ancre: 'start', couleur: BLEU, gras: true }) + texte(354, 186, 'les minutes', { taille: 14, ancre: 'start' });
  if (legende) g += texte(420, 250, legende, { taille: 18, gras: true });
  return enveloppe(W, H, g);
};

/** Le jour et la nuit : la Terre éclairée par le Soleil (non à l'échelle). */
SCHEMAS['jour-nuit'] = () => {
  const W = 600, H = 300, ex = 400, ey = 150, R = 90;
  let g = soleil(70, 150, 40);
  g += rayons(130, 300, [90, 120, 150, 180, 210]);
  g += demiEclaire(ex, ey, R, 180, { jour: '#bfe3ff', nuit: '#253858' });
  g += ligne(ex, ey - R - 18, ex, ey + R + 18, { couleur: ATTENUE, epaisseur: 1.5, pointilles: true });
  g += texte(ex - 44, ey + 6, 'JOUR', { taille: 18, gras: true, couleur: '#0b3d91' });
  g += texte(ex + 44, ey + 6, 'NUIT', { taille: 18, gras: true, couleur: '#ffffff' });
  // flèche de rotation
  g += flecheCourbe(ex - 60, ey - R - 6, ex + 60, ey - R - 6, 16, { couleur: ROUGE, epaisseur: 2.4 });
  g += texte(ex, ey - R - 34, 'la Terre tourne sur elle-même en 24 h', { taille: 13, couleur: ROUGE });
  g += texte(70, 222, 'Soleil', { taille: 15, gras: true });
  g += texte(ex, ey + R + 34, 'Terre', { taille: 15, gras: true });
  g += texte(215, 270, 'lumière du Soleil', { taille: 13, couleur: '#a26a00' });
  return enveloppe(W, H, g);
};

/** Les quatre principales phases de la Lune vues depuis la France (hémisphère Nord). */
SCHEMAS['phases-lune'] = () => {
  const W = 620, H = 190, r = 46;
  const noms = ['nouvelle lune', 'premier quartier', 'pleine lune', 'dernier quartier'];
  let g = '';
  noms.forEach((n, i) => {
    const x = 85 + i * 150, y = 80;
    const clair = '#f3e9b5', sombre = '#3a4458';
    if (i === 0) g += cercle(x, y, r, { couleur: '#7a8599', fond: sombre, epaisseur: 1.6 });
    if (i === 2) g += cercle(x, y, r, { couleur: '#b8a95a', fond: clair, epaisseur: 1.6 });
    if (i === 1) g += demiEclaire(x, y, r, 0, { jour: clair, nuit: sombre, bordure: '#7a8599' });
    if (i === 3) g += demiEclaire(x, y, r, 180, { jour: clair, nuit: sombre, bordure: '#7a8599' });
    g += texte(x, y + r + 28, n, { taille: 14, gras: true });
    if (i < 3) g += fleche(x + r + 10, y, x + 150 - r - 10, y, { couleur: ATTENUE, epaisseur: 1.6, pointe: 8 });
  });
  g += texte(W / 2, 178, 'environ une semaine entre deux phases ; le cycle complet dure environ un mois', { taille: 12.5, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Ombre d'un bâton : Soleil bas (ombre longue) et Soleil haut (ombre courte). Angles réels. */
SCHEMAS['ombres'] = () => {
  const W = 640, H = 280, sol = 230, hb = 70;
  let g = '';
  const panneau = (x0, angle, titreP, legendeOmbre) => {
    const a = angle * Math.PI / 180;
    const L = hb / Math.tan(a);
    const piedX = x0 + (angle < 45 ? 120 : 110);
    let s = ligne(x0, sol, x0 + 290, sol, { couleur: '#7a5a2a', epaisseur: 3 });
    // rayon passant par le haut du bâton
    let dist = 150;
    while (piedX - dist * Math.cos(a) < x0 + 26 || sol - hb - dist * Math.sin(a) < 66) dist -= 2;
    const sx = piedX - dist * Math.cos(a), sy = sol - hb - dist * Math.sin(a);
    s += soleil(sx, sy, 16);
    s += ligne(sx + 20 * Math.cos(a), sy + 20 * Math.sin(a), piedX + L, sol, { couleur: '#d18f00', epaisseur: 1.4, pointilles: true });
    s += `<rect x="${nb(piedX)}" y="${sol - 3}" width="${nb(L)}" height="6" fill="#555" opacity="0.75"/>`;
    s += ligne(piedX, sol, piedX, sol - hb, { couleur: '#7a4a1a', epaisseur: 6 });
    s += texte(x0 + 145, 32, titreP, { taille: 15, gras: true });
    s += texte(piedX + L / 2, sol + 24, legendeOmbre, { taille: 13, couleur: '#333' });
    return s;
  };
  g += panneau(10, 25, 'Matin ou soir : Soleil bas', 'ombre longue');
  g += panneau(340, 62, 'Midi : Soleil haut', 'ombre courte');
  return enveloppe(W, H, g);
};

/** Un solide garde sa forme ; un liquide prend la forme du récipient (surface plane et horizontale). */
SCHEMAS['solide-liquide'] = () => {
  const W = 640, H = 300;
  let g = '';
  g += texte(160, 26, 'Un solide garde sa forme', { taille: 15, gras: true, couleur: ORANGE });
  g += texte(480, 26, 'Un liquide prend la forme du récipient', { taille: 15, gras: true, couleur: BLEU });
  // solide : un cube posé, puis dans un bol, même forme
  const cube = (x, y, s) => polygone([[x, y], [x + s, y], [x + s, y - s], [x, y - s]], { couleur: '#8a4b00', fond: '#f0b066', epaisseur: 2 }) + polygone([[x, y - s], [x + s, y - s], [x + s + 14, y - s - 12], [x + 14, y - s - 12]], { couleur: '#8a4b00', fond: '#f6c88e', epaisseur: 2 }) + polygone([[x + s, y], [x + s + 14, y - 12], [x + s + 14, y - s - 12], [x + s, y - s]], { couleur: '#8a4b00', fond: '#d9954a', epaisseur: 2 });
  g += cube(60, 200, 50) + ligne(30, 200, 140, 200, { couleur: ATTENUE, epaisseur: 2 });
  g += `<path d="M 170 150 Q 172 214 228 216 Q 284 214 286 150" fill="none" stroke="${ENCRE}" stroke-width="2.4"/>`;
  g += cube(200, 208, 50);
  g += texte(160, 262, 'sur la table ou dans un bol :', { taille: 13 }) + texte(160, 280, 'la même forme', { taille: 13, gras: true });
  // liquide : trois récipients, même eau, surface horizontale
  const eau = '#9fd0ff';
  // verre droit
  g += `<path d="M 352 120 L 352 222 L 402 222 L 402 120" fill="none" stroke="${ENCRE}" stroke-width="2.4"/>`;
  g += `<rect x="353.5" y="170" width="47" height="50.5" fill="${eau}"/>` + ligne(353, 170, 401, 170, { couleur: BLEU, epaisseur: 2 });
  // bouteille
  g += `<path d="M 462 100 L 462 124 Q 446 132 446 150 L 446 222 L 498 222 L 498 150 Q 498 132 482 124 L 482 100" fill="none" stroke="${ENCRE}" stroke-width="2.4"/>`;
  g += `<path d="M 447.5 186 L 496.5 186 L 496.5 220.5 L 447.5 220.5 Z" fill="${eau}"/>` + ligne(447, 186, 497, 186, { couleur: BLEU, epaisseur: 2 });
  // bol évasé
  g += `<path d="M 540 160 L 556 222 L 604 222 L 620 160" fill="none" stroke="${ENCRE}" stroke-width="2.4"/>`;
  g += `<path d="M ${540 + 16 * (40 / 62)} ${200} L ${620 - 16 * (40 / 62)} 200 L 603.5 220.5 L 556.5 220.5 Z" fill="${eau}"/>` + ligne(540 + 16 * (40 / 62), 200, 620 - 16 * (40 / 62), 200, { couleur: BLEU, epaisseur: 2 });
  g += ligne(330, 222, 630, 222, { couleur: ATTENUE, epaisseur: 2 });
  g += texte(480, 262, 'la surface du liquide reste', { taille: 13 }) + texte(480, 280, 'plate et horizontale', { taille: 13, gras: true });
  return enveloppe(W, H, g);
};

/** Circuit ouvert / circuit fermé (pile, interrupteur, lampe). */
function circuit(x0, y0, ferme, { w = 230, h = 150 } = {}) {
  let g = '';
  const fil = (pts) => `<polyline points="${pts.map((p) => p.map(nb).join(',')).join(' ')}" fill="none" stroke="${ENCRE}" stroke-width="2.6" stroke-linejoin="round"/>`;
  const L = x0, R = x0 + w, T = y0, B = y0 + h;
  // pile à gauche (symbole : grand trait + petit trait)
  const py = (T + B) / 2;
  g += fil([[L, py - 10], [L, T], [x0 + w / 2 - 34, T]]);
  g += fil([[x0 + w / 2 + 34, T], [R, T], [R, B], [L, B], [L, py + 10]]);
  g += ligne(L - 18, py - 10, L + 18, py - 10, { epaisseur: 3 }) + ligne(L - 9, py + 10, L + 9, py + 10, { epaisseur: 6 });
  g += texte(L - 22, py - 12, '+', { taille: 14, ancre: 'end' });
  g += texte(L + 26, py + 5, 'pile', { taille: 13, ancre: 'start', couleur: ATTENUE });
  // interrupteur en haut
  const ix = x0 + w / 2 - 34;
  g += cercle(ix, T, 3.5, { fond: ENCRE }) + cercle(ix + 68, T, 3.5, { fond: ENCRE });
  if (ferme) g += ligne(ix, T, ix + 68, T, { epaisseur: 2.6 });
  else g += ligne(ix, T, ix + 60, T - 28, { epaisseur: 2.6 });
  g += texte(x0 + w / 2, T + 24, 'interrupteur', { taille: 13, couleur: ATTENUE });
  // lampe à droite (cercle + croix), allumée ou non
  const lx = R, ly = (T + B) / 2;
  if (ferme) for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; g += ligne(lx + 20 * Math.cos(a), ly + 20 * Math.sin(a), lx + 30 * Math.cos(a), ly + 30 * Math.sin(a), { couleur: '#e0a400', epaisseur: 2.4 }); }
  g += cercle(lx, ly, 14, { fond: ferme ? '#ffe680' : '#ffffff', epaisseur: 2.4 });
  g += ligne(lx - 10, ly - 10, lx + 10, ly + 10, { epaisseur: 2 }) + ligne(lx - 10, ly + 10, lx + 10, ly - 10, { epaisseur: 2 });
  g += texte(lx - 36, ly + 5, 'lampe', { taille: 13, ancre: 'end', couleur: ATTENUE });
  return g;
}
SCHEMAS['circuits-ouvert-ferme'] = () => {
  const W = 680, H = 290;
  let g = '';
  g += circuit(60, 80, true) + circuit(390, 80, false);
  g += texte(175, 30, 'Circuit FERMÉ', { taille: 16, gras: true, couleur: VERT });
  g += texte(175, 262, 'la boucle est complète : la lampe brille', { taille: 13 });
  g += texte(505, 30, 'Circuit OUVERT', { taille: 16, gras: true, couleur: ROUGE });
  g += texte(505, 262, 'la boucle est coupée : la lampe est éteinte', { taille: 13 });
  return enveloppe(W, H, g);
};

/** Trois mélanges avec de l'eau : sucre dissous, sable, huile. */
SCHEMAS['melanges-eau'] = () => {
  const W = 640, H = 290;
  let g = '';
  const verre = (x, contenu, nom, res, coulRes) => {
    let s = contenu;
    s += `<path d="M ${x} 70 L ${x + 8} 210 L ${x + 112} 210 L ${x + 120} 70" fill="none" stroke="${ENCRE}" stroke-width="2.6"/>`;
    s += texte(x + 60, 42, nom, { taille: 15, gras: true });
    s += texte(x + 60, 240, res[0], { taille: 13.5, gras: true, couleur: coulRes });
    s += texte(x + 60, 260, res[1], { taille: 13 });
    return s;
  };
  const eauPath = (x, y) => `<path d="M ${x + 1.6 + (y - 70) * 8 / 140} ${y} L ${x + 9.5} 208.5 L ${x + 110.5} 208.5 L ${x + 118.4 - (y - 70) * 8 / 140} ${y} Z"`;
  // 1. eau + sucre : solution transparente
  g += verre(40, `${eauPath(40, 100)} fill="#d6ecff"/>`, 'eau + sucre', ['le sucre se dissout', 'liquide transparent'], VERT);
  // 2. eau + sable : trouble puis dépôt
  let sable = `${eauPath(260, 100)} fill="#cdbb95"/>`;
  sable += `<path d="M 268.5 196 L 371.5 196 L 370.5 208.5 L 269.5 208.5 Z" fill="#a8875a"/>`;
  for (let i = 0; i < 40; i++) sable += `<circle cx="${nb(272 + ((i * 37) % 96))}" cy="${nb(110 + ((i * 53) % 82))}" r="1.8" fill="#7d6236"/>`;
  g += verre(260, sable, 'eau + sable', ['le sable ne se dissout pas', 'liquide trouble'], ROUGE);
  // 3. eau + huile : deux couches
  let huile = `${eauPath(480, 100)} fill="#d6ecff"/>`;
  huile += `<path d="M ${480 + 1.6 + 30 * 8 / 140} 100 L ${480 + 118.4 - 30 * 8 / 140} 100 L ${480 + 118.4 - 62 * 8 / 140} 132 L ${480 + 1.6 + 62 * 8 / 140} 132 Z" fill="#f5d34a"/>`;
  huile += texte(540, 122, 'huile', { taille: 12.5, couleur: '#6b5200' }) + texte(540, 175, 'eau', { taille: 12.5, couleur: '#1f4f8a' });
  g += verre(480, huile, 'eau + huile', ['l\'huile flotte', 'au-dessus de l\'eau'], ROUGE);
  return enveloppe(W, H, g);
};

/** Filtration : entonnoir, filtre, récipient. Le sable reste dans le filtre, l'eau passe. */
SCHEMAS['filtration'] = ({ sel = false } = {}) => {
  const W = 560, H = 330, cx = 200;
  let g = '';
  // entonnoir
  g += `<path d="M ${cx - 80} 60 L ${cx - 10} 150 L ${cx - 10} 200 M ${cx + 80} 60 L ${cx + 10} 150 L ${cx + 10} 200" fill="none" stroke="${ENCRE}" stroke-width="2.6"/>`;
  // filtre (papier)
  g += `<path d="M ${cx - 70} 62 L ${cx} 146 L ${cx + 70} 62" fill="#ffffff" stroke="${ATTENUE}" stroke-width="2" stroke-dasharray="5 3"/>`;
  // boue retenue
  g += `<path d="M ${cx - 38} 100 L ${cx} 146 L ${cx + 38} 100 Z" fill="#a8875a"/>`;
  // gouttes
  g += `<path d="M ${cx} 214 q -5 9 0 12 q 5 -3 0 -12 Z" fill="${BLEU}"/>` + `<path d="M ${cx} 234 q -5 9 0 12 q 5 -3 0 -12 Z" fill="${BLEU}"/>`;
  // bécher
  g += `<path d="M ${cx - 60} 200 L ${cx - 60} 310 L ${cx + 60} 310 L ${cx + 60} 200" fill="none" stroke="${ENCRE}" stroke-width="2.6"/>`;
  g += `<rect x="${cx - 58.5}" y="268" width="117" height="40.5" fill="#d6ecff"/>`;
  // étiquettes
  const lab = (x1, y1, x2, y2, t, c = ENCRE) => ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(x2 + 8, y2 + 5, t, { taille: 14, ancre: 'start', couleur: c });
  g += texte(cx, 36, 'eau boueuse versée', { taille: 14, gras: true });
  g += lab(cx + 64, 70, 330, 76, 'filtre (papier)');
  g += lab(cx + 22, 120, 330, 120, sel ? 'la boue reste sur le filtre' : 'la boue (ou le sable) reste', ROUGE);
  g += lab(cx + 12, 180, 330, 178, 'entonnoir');
  g += lab(cx + 50, 286, 330, 280, 'l\'eau passe, plus claire', BLEU);
  return enveloppe(W, H, g);
};

/** Une plante à fleurs : ses parties, leur rôle, ou ses besoins (nutrition). */
SCHEMAS['plante'] = ({ mode = 'parties' } = {}) => {
  const W = 620, H = mode === 'parties' ? 400 : 420, cx = 300, sol = 290;
  let g = '';
  // sol
  g += `<rect x="0" y="${sol}" width="${W}" height="${H - sol}" fill="#ead8bd"/>` + ligne(0, sol, W, sol, { couleur: '#8a6a3a', epaisseur: 2 });
  // racines
  const rac = `M ${cx} ${sol} L ${cx} ${sol + 60} M ${cx} ${sol + 14} Q ${cx - 30} ${sol + 30} ${cx - 50} ${sol + 66} M ${cx} ${sol + 18} Q ${cx + 30} ${sol + 36} ${cx + 52} ${sol + 70} M ${cx} ${sol + 36} Q ${cx - 16} ${sol + 56} ${cx - 22} ${sol + 88} M ${cx} ${sol + 40} Q ${cx + 16} ${sol + 60} ${cx + 20} ${sol + 92}`;
  g += `<path d="${rac}" fill="none" stroke="#9a6b2e" stroke-width="3" stroke-linecap="round"/>`;
  // tige
  g += `<path d="M ${cx} ${sol} L ${cx} 96" stroke="#3b8a3a" stroke-width="7" stroke-linecap="round"/>`;
  // feuilles
  const feuille = (x, y, ang) => `<ellipse cx="${x}" cy="${y}" rx="44" ry="15" transform="rotate(${ang} ${x} ${y})" fill="#6cc06a" stroke="#2e7d32" stroke-width="2"/>`;
  g += feuille(cx - 42, 218, -25) + feuille(cx + 42, 180, 25) + feuille(cx - 40, 150, -30);
  // fleur
  for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; g += `<ellipse cx="${nb(cx + 22 * Math.cos(a))}" cy="${nb(76 + 22 * Math.sin(a))}" rx="17" ry="11" transform="rotate(${i * 60} ${nb(cx + 22 * Math.cos(a))} ${nb(76 + 22 * Math.sin(a))})" fill="#f6a5c0" stroke="#c2185b" stroke-width="1.6"/>`; }
  g += cercle(cx, 76, 11, { fond: '#ffd23f', couleur: '#c28a00' });
  if (mode !== 'besoins') {
    // fruit sur un rameau
    g += `<path d="M ${cx} 250 Q ${cx + 40} 246 ${cx + 62} 262" stroke="#3b8a3a" stroke-width="4" fill="none"/>`;
    g += cercle(cx + 70, 268, 13, { fond: '#e8553b', couleur: '#9c2a17' });
  }
  const lab = (x1, y1, x2, y2, t, c = ENCRE, ancre = 'start') => ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: 1.3 }) + texte(x2 + (ancre === 'end' ? -8 : 8), y2 + 5, t, { taille: 14, ancre, couleur: c, gras: false });
  if (mode === 'parties') {
    g += lab(cx + 30, 70, 420, 50, 'la fleur', '#c2185b');
    g += lab(cx + 76, 176, 420, 160, 'une feuille', VERT);
    g += lab(cx + 4, 200, 420, 216, 'la tige', '#2e6b2d');
    g += lab(cx + 82, 270, 420, 262, 'un fruit (avec des graines)', '#9c2a17');
    g += lab(cx + 40, sol + 60, 420, sol + 54, 'les racines', '#7a4a10');
  } else if (mode === 'roles') {
    g += lab(cx + 30, 70, 380, 44, 'fleur : reproduction', '#c2185b');
    g += texte(388, 66, '(puis fruit et graines)', { taille: 13, ancre: 'start', couleur: ATTENUE });
    g += lab(cx + 76, 176, 380, 150, 'feuilles : captent la lumière', VERT);
    g += lab(cx + 4, 200, 380, 208, 'tige : porte la plante,', '#2e6b2d');
    g += texte(388, 226, 'fait monter l\'eau', { taille: 14, ancre: 'start', couleur: '#2e6b2d' });
    g += lab(cx + 40, sol + 60, 380, sol + 46, 'racines : fixent la plante', '#7a4a10');
    g += texte(388, sol + 66, 'et puisent l\'eau du sol', { taille: 14, ancre: 'start', couleur: '#7a4a10' });
    g += fleche(cx - 14, sol - 10, cx - 14, 120, { couleur: BLEU, epaisseur: 2, pointe: 9 });
    g += texte(cx - 22, 250, 'eau', { taille: 13, couleur: BLEU, ancre: 'end' });
  } else {
    // besoins / nutrition : flèches d'entrée
    g += soleil(80, 70, 26);
    g += fleche(118, 92, cx - 60, 140, { couleur: '#d18f00', epaisseur: 2.6 });
    g += texte(150, 150, 'lumière', { taille: 15, gras: true, couleur: '#a26a00' });
    g += fleche(520, 160, cx + 90, 178, { couleur: VIOLET, epaisseur: 2.6 });
    g += texte(520, 132, 'dioxyde de carbone', { taille: 15, gras: true, couleur: VIOLET });
    g += texte(520, 150, '(un gaz de l\'air)', { taille: 13, couleur: VIOLET });
    g += fleche(150, sol + 100, cx - 46, sol + 64, { couleur: BLEU, epaisseur: 2.6 });
    g += fleche(450, sol + 100, cx + 50, sol + 70, { couleur: BLEU, epaisseur: 2.6 });
    g += texte(150, sol + 120, 'eau', { taille: 15, gras: true, couleur: BLEU });
    g += texte(450, sol + 120, 'sels minéraux', { taille: 15, gras: true, couleur: BLEU });
    g += texte(470, 250, 'les feuilles fabriquent', { taille: 13.5, couleur: VERT, gras: true });
    g += texte(470, 268, 'la matière de la plante', { taille: 13.5, couleur: VERT, gras: true });
    g += texte(140, sol - 12, 'air', { taille: 13, couleur: ATTENUE }) + texte(140, sol + 22, 'sol', { taille: 13, couleur: '#7a4a10' });
  }
  return enveloppe(W, H, g);
};

// ───────────────────────── Poses : CP, CE1, CE2 ─────────────────────────
const pose = (fiche, cle, schema, params, legende, apres = null) => POSES.push({ fiche, cle, schema, params, legende, apres });

const SAISONS = { W: 520, H: 320, etapes: ['printemps', 'été', 'automne', 'hiver'], couleurs: ['v', 'o', 'r', 'b'], depart: -90, rx: 170, ry: 110, centre: 'une année', taille: 16 };
const SEMAINE = { W: 560, H: 380, etapes: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'], couleurs: ['b', 'b', 'b', 'b', 'b', 'o', 'o'], rx: 200, ry: 135, centre: '7 jours\npuis on recommence', taille: 15 };

// CP — Le corps et les cinq sens
pose('cp/sciences/le-corps-et-les-cinq-sens', 'parties-du-corps', 'corps', {}, 'Les parties du corps : la tête, le tronc et les quatre membres, deux bras et deux jambes, avec les mains et les pieds.', '## Les parties du corps');
pose('cp/sciences/le-corps-et-les-cinq-sens', 'cinq-sens', 'diagramme', {
  W: 560, H: 330,
  noeuds: [
    ...[['les yeux', 'la vue : je vois'], ['les oreilles', 'l\'ouïe : j\'entends'], ['le nez', 'l\'odorat : je sens les odeurs'], ['la langue', 'le goût : je goûte'], ['la peau', 'le toucher : je touche']]
      .flatMap(([o, s], i) => [
        { id: 'o' + i, x: 110, y: 40 + i * 62, w: 160, h: 44, t: o, c: 'o', taille: 16, gras: true },
        { id: 's' + i, x: 380, y: 40 + i * 62, w: 300, h: 44, t: s, c: 'b', taille: 16 },
      ]),
  ],
  liens: [0, 1, 2, 3, 4].map((i) => ({ de: 'o' + i, a: 's' + i })),
}, 'Les cinq sens : chaque organe des sens donne une information sur ce qui m\'entoure.', '## Les cinq sens');

// CP — Le temps et les saisons
pose('cp/sciences/le-temps-et-les-saisons', 'jour-nuit', 'jour-nuit', {}, 'La Terre tourne sur elle-même : le côté tourné vers le Soleil est dans le jour, l\'autre côté est dans la nuit (schéma non à l\'échelle).', '## Le jour et la nuit');
pose('cp/sciences/le-temps-et-les-saisons', 'semaine', 'cycle', SEMAINE, 'Les sept jours de la semaine reviennent toujours dans le même ordre : après dimanche, on recommence à lundi.', '## Les jours de la semaine');
pose('cp/sciences/le-temps-et-les-saisons', 'saisons', 'cycle', SAISONS, 'Les quatre saisons se suivent toujours dans le même ordre : printemps, été, automne, hiver, puis de nouveau le printemps.', '## Les quatre saisons');

// CP — Le vivant
pose('cp/sciences/le-vivant-animaux-et-vegetaux', 'parties-plante', 'plante', { mode: 'parties' }, 'Les parties d\'une plante à fleurs : les racines dans la terre, la tige, les feuilles, la fleur et le fruit qui contient les graines.', '## Les végétaux');
pose('cp/sciences/le-vivant-animaux-et-vegetaux', 'vivant-ou-non', 'cartes', {
  W: 600, parLigne: 2, h: 112, taille: 14,
  cartes: [
    { t: 'Vivant', s: 'naît, grandit, se nourrit,\npeut avoir des petits, meurt\nchat, coccinelle, arbre, fleur', c: 'v' },
    { t: 'Pas vivant', s: 'ne grandit pas,\nne se nourrit pas\ncaillou, eau, vélo, table', c: 'g' },
  ],
}, 'Pour savoir si quelque chose est vivant, on se demande s\'il naît, grandit, se nourrit et peut avoir des petits.', '## Ce qui est vivant');

// CP — Objets du quotidien
pose('cp/sciences/les-objets-du-quotidien', 'matieres', 'cartes', {
  W: 640, parLigne: 3, h: 80, taille: 14,
  cartes: [
    { t: 'bois', s: 'une chaise, un crayon', c: 'o' },
    { t: 'métal', s: 'une cuillère, une clé', c: 'g' },
    { t: 'plastique', s: 'un seau, une bouteille', c: 'b' },
    { t: 'verre', s: 'un verre, une vitre', c: 'vi' },
    { t: 'papier, carton', s: 'un livre, une boîte', c: 'j' },
    { t: 'tissu', s: 'un vêtement', c: 'r' },
  ],
}, 'Les objets sont faits de différentes matières : bois, métal, plastique, verre, papier ou carton, tissu.', '## Les matières');

// CP — Solides et liquides
pose('cp/sciences/solides-et-liquides', 'forme', 'solide-liquide', {}, 'Le solide garde sa forme partout ; le liquide prend la forme de chaque récipient et sa surface reste plate et horizontale.', '## Comment reconnaître ?');
pose('cp/sciences/solides-et-liquides', 'eau-glace', 'diagramme', {
  W: 560, H: 190,
  noeuds: [
    { id: 'l', x: 110, y: 96, w: 170, h: 56, t: 'eau liquide', c: 'b', taille: 17, gras: true },
    { id: 's', x: 450, y: 96, w: 170, h: 56, t: 'glace (solide)', c: 'vi', taille: 17, gras: true },
  ],
  liens: [
    { de: 'l', a: 's', k: 24, t: 'froid : l\'eau gèle', c: 'b', dy: -10 },
    { de: 's', a: 'l', k: 24, t: 'chaleur : la glace fond', c: 'r', dy: 22 },
  ],
}, 'Avec le froid, l\'eau liquide gèle et devient de la glace ; avec la chaleur, la glace fond et redevient de l\'eau.', '## L\'eau peut changer');

// CE1 — Alimentation
pose('ce1/sciences/alimentation-et-hygiene', 'familles', 'cartes', {
  W: 640, parLigne: 3, h: 88, taille: 13,
  cartes: [
    { t: 'fruits et légumes', s: 'pomme, carotte, salade\npleins de vitamines', c: 'v' },
    { t: 'féculents', s: 'pain, pâtes, riz\ndonnent de l\'énergie', c: 'o' },
    { t: 'produits laitiers', s: 'lait, fromage, yaourt\nbons pour les os', c: 'b' },
    { t: 'viande, poisson, œufs', s: 'aident à grandir', c: 'r' },
    { t: 'eau', s: 'la seule boisson\nindispensable', c: 'b' },
    { t: 'sucre et gras', s: 'bonbons, gâteaux, sodas\npas trop !', c: 'g' },
  ],
}, 'Les familles d\'aliments : manger équilibré, c\'est manger un peu de chaque famille chaque jour, avec peu de sucre et de gras.', '## Manger de tout, mais équilibré');
pose('ce1/sciences/alimentation-et-hygiene', 'repas', 'chaine', {
  W: 640, etapes: ['petit-déjeuner\nle matin', 'déjeuner\nle midi', 'goûter\nl\'après-midi', 'dîner\nle soir'], couleurs: ['j', 'o', 'v', 'b'], taille: 14,
}, 'Les repas de la journée, dans l\'ordre : le petit-déjeuner, le déjeuner, le goûter et le dîner.', '## L\'importance des repas');

// CE1 — Cycles de vie
pose('ce1/sciences/cycles-de-vie-des-etres-vivants', 'etapes', 'chaine', {
  W: 640, etapes: ['naissance', 'croissance', 'âge adulte', 'mort'], couleurs: ['v', 'b', 'o', 'g'], taille: 15,
}, 'Les étapes de la vie, toujours dans le même ordre : la naissance, la croissance, l\'âge adulte, puis la mort.', '## Naître, grandir, devenir adulte');
pose('ce1/sciences/cycles-de-vie-des-etres-vivants', 'papillon', 'cycle', {
  W: 520, H: 320, titre: 'Le cycle de vie du papillon', etapes: ['œuf', 'chenille', 'chrysalide', 'papillon'], couleurs: ['j', 'v', 'o', 'vi'], rx: 165, ry: 95, taille: 16, k: 20,
}, 'Le cycle de vie du papillon : l\'œuf donne une chenille, qui devient une chrysalide, puis un papillon qui pondra de nouveaux œufs.', '## Des cycles à connaître');
pose('ce1/sciences/cycles-de-vie-des-etres-vivants', 'grenouille', 'cycle', {
  W: 560, H: 300, titre: 'Le cycle de vie de la grenouille', etapes: ['œufs', 'têtard\n(dans l\'eau, avec une queue)', 'grenouille adulte'], couleurs: ['j', 'b', 'v'], rx: 150, ry: 86, taille: 15, depart: -90,
}, 'Le cycle de vie de la grenouille : les œufs donnent des têtards, qui deviennent des grenouilles adultes, qui pondent à leur tour.', '## Des cycles à connaître');
pose('ce1/sciences/cycles-de-vie-des-etres-vivants', 'plante', 'cycle', {
  W: 560, H: 360, etapes: ['graine', 'germination', 'plante qui pousse', 'fleurs', 'fruits\navec des graines'], couleurs: ['o', 'v', 'v', 'vi', 'r'], rx: 185, ry: 125, taille: 15, k: 16,
}, 'Le cycle de vie d\'une plante à fleurs : la graine germe, la plante pousse, fait des fleurs, puis des fruits avec de nouvelles graines.', '## Le cycle de vie d\'une plante');

// CE1 — États de l'eau
pose('ce1/sciences/les-etats-de-leau', 'trois-etats', 'diagramme', {
  W: 680, H: 220,
  noeuds: [
    { id: 's', x: 95, y: 112, w: 140, h: 62, t: 'SOLIDE\nla glace', c: 'vi', taille: 15, gras: true },
    { id: 'l', x: 340, y: 112, w: 140, h: 62, t: 'LIQUIDE\nl\'eau', c: 'b', taille: 15, gras: true },
    { id: 'g', x: 585, y: 112, w: 140, h: 62, t: 'GAZEUX\nla vapeur', c: 'g', taille: 15, gras: true },
  ],
  liens: [
    { de: 's', a: 'l', k: 24, t: 'chaleur : elle fond', c: 'r', dy: -10 },
    { de: 'l', a: 's', k: 24, t: 'froid : elle gèle', c: 'b', dy: 22 },
    { de: 'l', a: 'g', k: 24, t: 'beaucoup de chaleur', c: 'r', dy: -10 },
    { de: 'g', a: 'l', k: 24, t: 'elle se refroidit', c: 'b', dy: 22 },
  ],
}, 'Les trois états de l\'eau : c\'est la chaleur ou le froid qui la fait passer d\'un état à l\'autre.', '## Le froid et le chaud : ce qui fait changer l\'eau');

// CE1 — Matériaux
pose('ce1/sciences/materiaux-et-objets-techniques', 'choisir', 'diagramme', {
  W: 640, H: 250,
  noeuds: [
    { id: 't1', x: 100, y: 26, t: 'objet', forme: 'texte', c: 'g', gras: true },
    { id: 't2', x: 300, y: 26, t: 'matériau', forme: 'texte', c: 'g', gras: true },
    { id: 't3', x: 520, y: 26, t: 'pourquoi ?', forme: 'texte', c: 'g', gras: true },
    ...[['une vitre', 'verre', 'on voit à travers'], ['un imperméable', 'plastique', 'ne laisse pas passer l\'eau'], ['une casserole', 'métal', 'va sur le feu']].flatMap(([o, m, p], i) => [
      { id: 'o' + i, x: 100, y: 76 + i * 62, w: 160, h: 42, t: o, c: 'o', taille: 15 },
      { id: 'm' + i, x: 300, y: 76 + i * 62, w: 130, h: 42, t: m, c: 'b', taille: 15, gras: true },
      { id: 'p' + i, x: 520, y: 76 + i * 62, w: 210, h: 42, t: p, c: 'v', taille: 14 },
    ]),
  ],
  liens: [0, 1, 2].flatMap((i) => [{ de: 'o' + i, a: 'm' + i }, { de: 'm' + i, a: 'p' + i }]),
}, 'On choisit le matériau d\'un objet selon ce qu\'il doit faire : sa propriété répond à l\'usage de l\'objet.', '## Choisir le bon matériau');

// CE1 — Se repérer dans le temps
pose('ce1/sciences/se-reperer-dans-le-temps', 'hier-demain', 'chaine', {
  W: 600, etapes: ['hier\nle jour d\'avant', 'aujourd\'hui\nle jour où on est', 'demain\nle jour d\'après'], couleurs: ['g', 'o', 'b'], taille: 15,
}, 'Hier, aujourd\'hui, demain : les jours se suivent dans l\'ordre, du passé vers l\'avenir.', '## Hier, aujourd\'hui, demain');
pose('ce1/sciences/se-reperer-dans-le-temps', 'semaine', 'cycle', SEMAINE, 'Les sept jours de la semaine, toujours dans le même ordre : après dimanche, on recommence à lundi.', '## La semaine et les jours');
pose('ce1/sciences/se-reperer-dans-le-temps', 'saisons', 'cycle', SAISONS, 'Les quatre saisons de l\'année se suivent toujours dans le même ordre, puis recommencent.', '## Les saisons');
pose('ce1/sciences/se-reperer-dans-le-temps', 'horloge', 'horloge', { h: 3, m: 0, legende: '3 heures' }, 'Sur l\'horloge, la petite aiguille montre les heures et la grande les minutes : ici, il est 3 heures.', '## Les outils pour mesurer le temps');

// CE2 — Circuits
pose('ce2/sciences/circuits-electriques-simples', 'ouvert-ferme', 'circuits-ouvert-ferme', {}, 'L\'interrupteur fermé complète la boucle et la lampe s\'allume ; ouvert, il coupe la boucle et la lampe reste éteinte.', '## Le circuit doit être fermé');
pose('ce2/sciences/circuits-electriques-simples', 'conducteurs', 'cartes', {
  W: 600, parLigne: 2, h: 100, taille: 14,
  cartes: [
    { t: 'Conducteurs', s: 'laissent passer le courant\nles métaux : fer, cuivre,\naluminium', c: 'v' },
    { t: 'Isolants', s: 'ne laissent pas passer le courant\nplastique, bois, verre', c: 'r' },
  ],
}, 'Les métaux conduisent le courant ; le plastique, le bois et le verre sont des isolants.', '## Ce qui laisse passer le courant');

// CE2 — Classer les animaux
pose('ce2/sciences/classer-les-animaux', 'vertebres', 'arbre', {
  W: 680, taille: 13, pasY: 92,
  racine: { t: 'Les animaux', c: 'g', gras: true, taille: 15, enfants: [
    { t: 'Vertébrés\n(colonne vertébrale)', c: 'b', enfants: [
      { t: 'mammifères\npoils\nallaitent', c: 'o' },
      { t: 'oiseaux\nplumes\nbec', c: 'b' },
      { t: 'poissons\nécailles\nnageoires', c: 'b' },
      { t: 'reptiles\nécailles\nsèches', c: 'v' },
      { t: 'amphibiens\npeau nue\net humide', c: 'v' },
    ] },
    { t: 'Invertébrés\n(pas de colonne)', c: 'vi', enfants: [
      { t: 'escargot\nver de terre\naraignée\ninsectes', c: 'vi' },
    ] },
  ] },
}, 'On sépare d\'abord les vertébrés des invertébrés, puis on classe les vertébrés en cinq groupes selon ce qui recouvre leur corps.', '## Les grands groupes de vertébrés');
pose('ce2/sciences/classer-les-animaux', 'regimes', 'cartes', {
  W: 640, parLigne: 3, h: 92, taille: 13.5,
  cartes: [
    { t: 'herbivore', s: 'mange des plantes\nvache, lapin', c: 'v' },
    { t: 'carnivore', s: 'mange d\'autres animaux\nrenard, chat', c: 'r' },
    { t: 'omnivore', s: 'plantes et animaux\nsanglier, humain', c: 'o' },
  ],
}, 'On peut aussi classer les animaux selon ce qu\'ils mangent : herbivores, carnivores et omnivores.', '## Que mange l\'animal ?');

// CE2 — Terre, Soleil, Lune
pose('ce2/sciences/la-terre-le-soleil-la-lune', 'jour-nuit', 'jour-nuit', {}, 'Le côté de la Terre tourné vers le Soleil est éclairé, c\'est le jour ; l\'autre côté est dans l\'ombre, c\'est la nuit (schéma non à l\'échelle).', '## Le jour et la nuit');
pose('ce2/sciences/la-terre-le-soleil-la-lune', 'ombres', 'ombres', {}, 'Quand le Soleil est bas, le matin ou le soir, l\'ombre d\'un bâton est longue ; à midi, le Soleil est haut et l\'ombre est courte.', '## La course du Soleil dans la journée');
pose('ce2/sciences/la-terre-le-soleil-la-lune', 'phases', 'phases-lune', {}, 'Les principales phases de la Lune, telles qu\'on les voit depuis la France : la partie éclairée que l\'on voit change au fil du mois.', '## Les phases de la Lune');

// CE2 — Mélanges
pose('ce2/sciences/melanges-et-solutions', 'trois-melanges', 'melanges-eau', {}, 'Le sucre se dissout dans l\'eau et le liquide reste transparent ; le sable rend l\'eau trouble puis tombe au fond ; l\'huile flotte.', '## Deux sortes de mélanges');
pose('ce2/sciences/melanges-et-solutions', 'filtration', 'filtration', {}, 'La filtration : le filtre retient la boue, l\'eau qui passe à travers est plus claire. Le sel dissous, lui, traverserait le filtre.', '## Séparer un mélange');

// CE2 — Plantes
pose('ce2/sciences/plantes-et-milieux-de-vie', 'parties-roles', 'plante', { mode: 'roles' }, 'Les parties d\'une plante à fleurs et leur rôle : les racines puisent l\'eau, la tige la fait monter, les feuilles captent la lumière.', '## Les parties d\'une plante');
pose('ce2/sciences/plantes-et-milieux-de-vie', 'germination', 'chaine', {
  W: 640, etapes: ['graine', 'germe\n(plantule)', 'plante adulte\nqui refait des graines'], fleches: ['eau, chaleur\net air', 'pour grandir :\n+ lumière'], couleurs: ['o', 'v', 'vi'], taille: 14,
}, 'De la graine à la plante : pour germer, la graine a besoin d\'eau, de chaleur et d\'air ; pour grandir, la plante a aussi besoin de lumière.', '## De la graine à la plante');

// ───────────────────────── Dessins CM1, CM2 ─────────────────────────

/** Les huit planètes dans l'ordre (tailles et distances non à l'échelle). */
SCHEMAS['planetes'] = ({ familles = 'rocheuses' } = {}) => {
  const W = 680, H = 250;
  const P = [
    ['Mercure', 10, '#9e9e9e'], ['Vénus', 15, '#e3c07a'], ['Terre', 16, '#4f8fe0'], ['Mars', 12, '#d0653a'],
    ['Jupiter', 38, '#d8a873'], ['Saturne', 32, '#e6cf8f'], ['Uranus', 22, '#8fd3dc'], ['Neptune', 22, '#4a6fd8'],
  ];
  let g = `<path d="M 0 40 Q 40 125 0 210" fill="#ffd23f" stroke="#d18f00" stroke-width="2"/>` + texte(10, 232, 'Soleil', { taille: 13, ancre: 'start', gras: true });
  const xs = [80, 132, 190, 244, 338, 436, 528, 610];
  P.forEach(([n, r, c], i) => {
    if (n === 'Saturne') g += `<ellipse cx="${xs[i]}" cy="125" rx="${r + 14}" ry="7" fill="none" stroke="#b39a52" stroke-width="3"/>`;
    g += cercle(xs[i], 125, r, { fond: c, couleur: '#555', epaisseur: 1.2 });
    g += texte(xs[i], i % 2 ? 190 : 72, n, { taille: 13, gras: n === 'Terre' });
    g += texte(xs[i], i % 2 ? 206 : 56, `${i + 1}`, { taille: 11, couleur: ATTENUE });
  });
  const mil = (xs[3] + xs[4]) / 2;
  g += ligne(mil, 30, mil, 230, { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  g += texte((xs[0] + xs[3]) / 2, 24, familles === 'telluriques' ? 'planètes telluriques (rocheuses)' : 'planètes rocheuses', { taille: 13.5, gras: true, couleur: '#8a4b00' });
  g += texte((xs[4] + xs[7]) / 2, 24, 'planètes gazeuses (géantes)', { taille: 13.5, gras: true, couleur: BLEU });
  return enveloppe(W, H, g);
};

/** Appareil respiratoire simplifié : trajet de l'air jusqu'aux poumons. */
SCHEMAS['respiratoire'] = () => {
  const W = 600, H = 400, cx = 250;
  let g = '';
  // poumons
  g += `<path d="M ${cx - 22} 150 C ${cx - 70} 140 ${cx - 120} 190 ${cx - 125} 270 C ${cx - 128} 330 ${cx - 100} 350 ${cx - 60} 345 C ${cx - 30} 340 ${cx - 18} 320 ${cx - 18} 290 Z" fill="#f7c7cf" stroke="#b03a52" stroke-width="2"/>`;
  g += `<path d="M ${cx + 22} 150 C ${cx + 70} 140 ${cx + 120} 190 ${cx + 125} 270 C ${cx + 128} 330 ${cx + 100} 350 ${cx + 60} 345 C ${cx + 30} 340 ${cx + 18} 320 ${cx + 18} 290 Z" fill="#f7c7cf" stroke="#b03a52" stroke-width="2"/>`;
  // trachée
  g += `<rect x="${cx - 8}" y="50" width="16" height="110" fill="#dfe8f2" stroke="${ENCRE}" stroke-width="1.6"/>`;
  for (let y = 60; y < 158; y += 10) g += ligne(cx - 8, y, cx + 8, y, { couleur: ATTENUE, epaisseur: 1 });
  // bronches et ramifications
  const br = (sx) => {
    let s = `<path d="M ${cx} 160 Q ${cx + sx * 20} 170 ${cx + sx * 50} 200" fill="none" stroke="${ENCRE}" stroke-width="7" stroke-linecap="round"/>`;
    s += `<path d="M ${cx + sx * 50} 200 L ${cx + sx * 70} 250 M ${cx + sx * 50} 200 L ${cx + sx * 90} 220 M ${cx + sx * 70} 250 L ${cx + sx * 64} 300 M ${cx + sx * 70} 250 L ${cx + sx * 98} 285 M ${cx + sx * 90} 220 L ${cx + sx * 108} 245" fill="none" stroke="${ENCRE}" stroke-width="3" stroke-linecap="round"/>`;
    return s;
  };
  g += br(-1) + br(1);
  // nez ou bouche (entrée de l'air)
  g += `<rect x="${cx - 62}" y="16" width="124" height="34" rx="12" fill="#fde7d6" stroke="#b5651d" stroke-width="1.8"/>` + texte(cx, 38, 'nez ou bouche', { taille: 14, gras: true });
  g += fleche(cx - 150, 26, cx - 66, 26, { couleur: BLEU, epaisseur: 2.6 });
  g += fleche(cx + 66, 40, cx + 150, 40, { couleur: VIOLET, epaisseur: 2.6 });
  g += texte(cx - 108, 18, 'air inspiré', { taille: 13, couleur: BLEU });
  g += texte(cx + 108, 60, 'air expiré', { taille: 13, couleur: VIOLET });
  const lab = (x1, y1, x2, y2, t) => ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(x2 + 8, y2 + 5, t, { taille: 15, ancre: 'start' });
  g += lab(cx + 10, 110, 420, 110, 'trachée');
  g += lab(cx + 52, 202, 420, 176, 'bronches');
  g += lab(cx + 116, 300, 420, 300, 'poumons');
  g += texte(cx, 386, 'schéma simplifié', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Trajectoires : positions successives d'un objet à intervalles de temps égaux. */
SCHEMAS['trajectoires'] = () => {
  const W = 660, H = 250;
  let g = '';
  const pt = (x, y) => cercle(x, y, 5, { fond: ROUGE, couleur: '#7a1010', epaisseur: 1 });
  // rectiligne
  for (let i = 0; i < 7; i++) g += pt(30 + i * 28, 130);
  g += ligne(24, 150, 210, 150, { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  g += texte(115, 40, 'rectiligne', { taille: 15, gras: true }) + texte(115, 200, 'une voiture sur une', { taille: 12.5, couleur: ATTENUE }) + texte(115, 216, 'route droite', { taille: 12.5, couleur: ATTENUE });
  // courbe (balle lancée) : y = parabole
  for (let i = 0; i < 9; i++) { const t = i / 8; g += pt(240 + 170 * t, 170 - 440 * t * (1 - t)); }
  g += texte(325, 40, 'courbe', { taille: 15, gras: true }) + texte(325, 200, 'une balle lancée', { taille: 12.5, couleur: ATTENUE });
  // circulaire
  g += cercle(550, 125, 55, { couleur: ATTENUE, epaisseur: 1, }).replace('stroke-width="1"', 'stroke-width="1" stroke-dasharray="4 4"');
  for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5; g += pt(550 + 55 * Math.cos(a), 125 + 55 * Math.sin(a)); }
  g += point(550, 125);
  g += texte(550, 40, 'circulaire', { taille: 15, gras: true }) + texte(550, 216, 'un manège', { taille: 12.5, couleur: ATTENUE });
  return enveloppe(W, H, g);
};
function point(x, y) { return `<circle cx="${x}" cy="${y}" r="2.5" fill="${ENCRE}"/>`; }

/** Fleur coupée en deux (schéma simplifié) : organes reproducteurs. */
SCHEMAS['fleur'] = () => {
  const W = 620, H = 380, cx = 240;
  let g = '';
  // tige et réceptacle
  g += `<path d="M ${cx} 360 L ${cx} 270" stroke="#3b8a3a" stroke-width="10"/>`;
  g += `<path d="M ${cx - 46} 262 Q ${cx} 300 ${cx + 46} 262 Z" fill="#7cc47a" stroke="#2e7d32" stroke-width="2"/>`;
  // sépales
  g += `<path d="M ${cx - 40} 262 Q ${cx - 80} 250 ${cx - 96} 222 Q ${cx - 60} 236 ${cx - 30} 256 Z" fill="#7cc47a" stroke="#2e7d32" stroke-width="2"/>`;
  g += `<path d="M ${cx + 40} 262 Q ${cx + 80} 250 ${cx + 96} 222 Q ${cx + 60} 236 ${cx + 30} 256 Z" fill="#7cc47a" stroke="#2e7d32" stroke-width="2"/>`;
  // pétales
  g += `<path d="M ${cx - 34} 258 C ${cx - 150} 220 ${cx - 150} 90 ${cx - 110} 70 C ${cx - 80} 110 ${cx - 50} 180 ${cx - 28} 250 Z" fill="#f6a5c0" stroke="#c2185b" stroke-width="2"/>`;
  g += `<path d="M ${cx + 34} 258 C ${cx + 150} 220 ${cx + 150} 90 ${cx + 110} 70 C ${cx + 80} 110 ${cx + 50} 180 ${cx + 28} 250 Z" fill="#f6a5c0" stroke="#c2185b" stroke-width="2"/>`;
  // pistil : ovaire + style + stigmate
  g += `<ellipse cx="${cx}" cy="238" rx="24" ry="26" fill="#cfe9a8" stroke="#4a7d1a" stroke-width="2"/>`;
  g += cercle(cx - 8, 236, 5, { fond: '#fff4c2', couleur: '#8a6d00', epaisseur: 1.4 }) + cercle(cx + 8, 236, 5, { fond: '#fff4c2', couleur: '#8a6d00', epaisseur: 1.4 }) + cercle(cx, 250, 5, { fond: '#fff4c2', couleur: '#8a6d00', epaisseur: 1.4 });
  g += `<rect x="${cx - 4}" y="140" width="8" height="74" fill="#cfe9a8" stroke="#4a7d1a" stroke-width="1.6"/>`;
  g += `<ellipse cx="${cx}" cy="136" rx="16" ry="7" fill="#9ccc65" stroke="#4a7d1a" stroke-width="1.6"/>`;
  // étamines
  const et = (sx) => `<path d="M ${cx + sx * 22} 256 Q ${cx + sx * 32} 200 ${cx + sx * 34} 166" fill="none" stroke="#8a6d00" stroke-width="2.4"/><ellipse cx="${cx + sx * 35}" cy="154" rx="8" ry="13" fill="#ffd23f" stroke="#a07a00" stroke-width="1.6"/>`;
  g += et(-1) + et(1);
  // grains de pollen
  [[cx + 46, 132], [cx + 52, 142], [cx + 42, 120]].forEach(([x, y]) => { g += cercle(x, y, 2.6, { fond: '#ffb300', couleur: '#a07a00', epaisseur: 0.8 }); });
  const lab = (x1, y1, x2, y2, t, c = ENCRE) => ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(x2 + 8, y2 + 5, t, { taille: 14, ancre: 'start', couleur: c });
  g += lab(cx + 42, 150, 400, 96, 'étamine : produit le pollen', '#8a6d00');
  g += texte(408, 116, '(élément reproducteur mâle)', { taille: 12.5, ancre: 'start', couleur: ATTENUE });
  g += lab(cx + 16, 132, 400, 150, 'pistil', '#4a7d1a');
  g += lab(cx + 13, 252, 400, 226, 'ovules, dans l\'ovaire', '#8a6d00');
  g += texte(408, 246, '(élément reproducteur femelle)', { taille: 12.5, ancre: 'start', couleur: ATTENUE });
  g += lab(cx + 120, 170, 400, 190, 'pétale', '#c2185b');
  g += lab(cx + 80, 240, 400, 282, 'sépale', '#2e7d32');
  g += texte(cx, 26, 'Fleur coupée en deux (schéma simplifié)', { taille: 14, gras: true });
  return enveloppe(W, H, g);
};

// ───────────────────────── Poses : CM1, CM2 ─────────────────────────
const RESEAU = {
  W: 620, H: 330,
  noeuds: [
    { id: 'h', x: 310, y: 296, t: 'herbe', c: 'v', taille: 15, gras: true },
    { id: 's', x: 170, y: 214, t: 'sauterelle', c: 'o' },
    { id: 'l', x: 450, y: 214, t: 'lapin', c: 'o' },
    { id: 'g', x: 170, y: 132, t: 'grenouille', c: 'r' },
    { id: 'c', x: 170, y: 46, t: 'couleuvre', c: 'r' },
    { id: 'r', x: 540, y: 120, t: 'renard', c: 'r' },
    { id: 'b', x: 380, y: 46, t: 'buse', c: 'r' },
  ],
  liens: [
    { de: 'h', a: 's' }, { de: 'h', a: 'l' }, { de: 's', a: 'g' }, { de: 'g', a: 'c' },
    { de: 'c', a: 'b' }, { de: 'l', a: 'b' }, { de: 'l', a: 'r' },
  ],
  extra: texte(460, 300, 'flèche = « est mangé par »', { taille: 13, couleur: ATTENUE, italique: true }),
};
const RECYCLAGE = (mots) => ({
  W: 640, H: 400, rx: 215, ry: 135, taille: 14,
  etapes: mots.etapes, couleurs: ['v', 'o', 'g', 'vi', 'b'], fleches: mots.fleches || [], centre: mots.centre || '',
});

// CM1 — Chaînes alimentaires
pose('cm1/sciences/chaines-alimentaires-et-ecosystemes', 'reseau', 'diagramme', RESEAU, 'Un réseau alimentaire : plusieurs chaînes reliées entre elles. Le lapin, par exemple, peut être mangé par le renard ou par la buse.', '## Un réseau alimentaire');
pose('cm1/sciences/chaines-alimentaires-et-ecosystemes', 'recyclage', 'cycle', RECYCLAGE({
  etapes: ['végétaux verts\n(producteurs)', 'animaux\n(consommateurs)', 'feuilles mortes,\nêtres morts, restes', 'décomposeurs\n(champignons,\nbactéries, vers)', 'sels minéraux\ndu sol'],
  centre: 'la matière\ntourne en boucle',
}), 'Les décomposeurs transforment les restes et les êtres morts en sels minéraux, que les plantes utilisent à nouveau : la matière tourne en boucle.', '## Le rôle des décomposeurs');

// CM1 — Énergie et circuits
pose('cm1/sciences/energie-et-circuits-electriques', 'sources', 'cartes', {
  W: 620, parLigne: 2, h: 104, taille: 13.5,
  cartes: [
    { t: 'Sources renouvelables', s: 'ne s\'épuisent pas\nle Soleil, le vent,\nl\'eau qui coule', c: 'v' },
    { t: 'Sources non renouvelables', s: 'finissent par manquer\nle pétrole, le charbon,\nle gaz', c: 'r' },
  ],
}, 'Les sources d\'énergie renouvelables ne s\'épuisent pas ; les sources non renouvelables, comme le pétrole, finissent par manquer.', '## Les sources d\'énergie');
pose('cm1/sciences/energie-et-circuits-electriques', 'ouvert-ferme', 'circuits-ouvert-ferme', {}, 'Circuit fermé : la boucle est complète, le courant circule et la lampe s\'allume. Circuit ouvert : la boucle est coupée, la lampe s\'éteint.', '## Circuit ouvert, circuit fermé');

// CM1 — La matière
pose('cm1/sciences/la-matiere-et-ses-transformations', 'changements-etat', 'diagramme', {
  W: 680, H: 236,
  noeuds: [
    { id: 's', x: 95, y: 118, w: 140, h: 62, t: 'SOLIDE\nla glace', c: 'vi', taille: 15, gras: true },
    { id: 'l', x: 340, y: 118, w: 140, h: 62, t: 'LIQUIDE\nl\'eau', c: 'b', taille: 15, gras: true },
    { id: 'g', x: 585, y: 118, w: 140, h: 62, t: 'GAZ\nla vapeur', c: 'g', taille: 15, gras: true },
  ],
  liens: [
    { de: 's', a: 'l', k: 26, t: 'fusion (on chauffe)', c: 'r', dy: -10 },
    { de: 'l', a: 's', k: 26, t: 'solidification (on refroidit)', c: 'b', dy: 22 },
    { de: 'l', a: 'g', k: 26, t: 'vaporisation (on chauffe)', c: 'r', dy: -10 },
    { de: 'g', a: 'l', k: 26, t: 'condensation (on refroidit)', c: 'b', dy: 22 },
  ],
  extra: texte(217, 228, 'l\'eau gèle à 0 °C', { taille: 12.5, couleur: ATTENUE }) + texte(462, 228, 'l\'eau bout à 100 °C', { taille: 12.5, couleur: ATTENUE }),
}, 'Les changements d\'état de l\'eau : en chauffant ou en refroidissant, l\'eau change d\'état, mais sa masse reste la même.', '## Les changements d\'état de l\'eau');
pose('cm1/sciences/la-matiere-et-ses-transformations', 'filtration', 'filtration', {}, 'Filtrer un mélange d\'eau et de sable : le sable reste dans le filtre, l\'eau passe. Un sel dissous, lui, passerait à travers le filtre.', '## Mélanges et solutions');

// CM1 — Système solaire
pose('cm1/sciences/le-systeme-solaire', 'huit-planetes', 'planetes', {}, 'Les huit planètes dans l\'ordre à partir du Soleil : quatre planètes rocheuses, puis quatre planètes gazeuses (tailles et distances non à l\'échelle).', '## Les huit planètes');
pose('cm1/sciences/le-systeme-solaire', 'jour-nuit', 'jour-nuit', {}, 'La Terre tourne sur elle-même en 24 heures : le côté tourné vers le Soleil est dans le jour, l\'autre dans la nuit (schéma non à l\'échelle).', '## Les mouvements de la Terre');
pose('cm1/sciences/le-systeme-solaire', 'phases', 'phases-lune', {}, 'Les principales phases de la Lune vues depuis la France : la Lune renvoie la lumière du Soleil et la partie éclairée visible change.', '## La Lune, satellite de la Terre');

// CM1 — Nutrition
pose('cm1/sciences/les-fonctions-du-vivant-la-nutrition', 'nutrition-plante', 'plante', { mode: 'besoins' }, 'La plante verte fabrique sa matière grâce à la lumière, au dioxyde de carbone de l\'air, à l\'eau et aux sels minéraux puisés par les racines.', '## Comment les végétaux se nourrissent');
pose('cm1/sciences/les-fonctions-du-vivant-la-nutrition', 'organes-respiratoires', 'cartes', {
  W: 640, parLigne: 3, h: 84, taille: 13.5,
  cartes: [
    { t: 'poumons', s: 'l\'humain', c: 'r' },
    { t: 'branchies', s: 'le poisson', c: 'b' },
    { t: 'trachées', s: 'l\'insecte\n(par de petits trous)', c: 'o' },
  ],
}, 'Selon l\'animal, l\'organe de la respiration change : poumons chez l\'humain, branchies chez le poisson, trachées chez l\'insecte.', '## Respirer : une partie de la nutrition');

// CM2 — Digestion et respiration
pose('cm2/sciences/corps-humain-digestion-et-respiration', 'appareil-respiratoire', 'respiratoire', {}, 'Le trajet de l\'air : il entre par le nez ou la bouche, descend dans la trachée, puis les bronches, jusqu\'aux poumons (schéma simplifié).', '## 2. La respiration');
pose('cm2/sciences/corps-humain-digestion-et-respiration', 'ensemble', 'diagramme', {
  W: 640, H: 290,
  noeuds: [
    { id: 'd', x: 120, y: 60, t: 'digestion\n(intestin grêle)', c: 'o' },
    { id: 'r', x: 540, y: 60, t: 'respiration\n(poumons)', c: 'b' },
    { id: 's', x: 320, y: 150, w: 120, t: 'sang', c: 'r', taille: 16, gras: true },
    { id: 'o', x: 320, y: 254, t: 'organes : énergie pour bouger,\nse réchauffer et grandir', c: 'v' },
  ],
  liens: [
    { de: 'd', a: 's', t: 'nutriments', c: 'o', dy: -10, dx: -46 },
    { de: 'r', a: 's', t: 'dioxygène', c: 'b', dy: 18, dx: 40 },
    { de: 's', a: 'o', t: 'nutriments + dioxygène', c: 'r', dx: 90, dy: 4 },
    { de: 's', a: 'r', via: [[560, 150]], t: 'dioxyde de carbone', c: 'vi', dy: 24, dx: -10 },
  ],
}, 'La digestion et la respiration travaillent ensemble : le sang apporte aux organes les nutriments et le dioxygène, et emporte le dioxyde de carbone.', '## 3. Deux fonctions qui travaillent ensemble');

// CM2 — Environnement
pose('cm2/sciences/environnement-et-developpement-durable', 'chaine', 'chaine', {
  W: 600, titre: 'Chaque flèche se lit « est mangé par »', etapes: ['herbe', 'sauterelle', 'grenouille', 'héron'], couleurs: ['v', 'o', 'r', 'r'], taille: 15,
}, 'Une chaîne alimentaire : elle commence par une plante, et chaque flèche se lit « est mangé par ».', '## 1. Un milieu de vie : l\'écosystème');
pose('cm2/sciences/environnement-et-developpement-durable', 'trois-r', 'chaine', {
  W: 640, etapes: ['1. Réduire\njeter moins', '2. Réutiliser\ndonner une 2e vie', '3. Recycler\ntrier ses déchets'], couleurs: ['v', 'b', 'o'], taille: 15,
}, 'La règle des 3 R, dans l\'ordre d\'importance : d\'abord réduire ses déchets, puis réutiliser les objets, enfin trier pour recycler.', '## 4. Des gestes concrets');

// CM2 — Mouvements et forces
pose('cm2/sciences/mouvements-et-forces', 'trajectoires', 'trajectoires', {}, 'Trois trajectoires : chaque point montre la position de l\'objet à intervalles de temps réguliers.', '## 1. Décrire un mouvement');
pose('cm2/sciences/mouvements-et-forces', 'effets-force', 'cartes', {
  W: 640, parLigne: 2, h: 78, taille: 13.5,
  cartes: [
    { t: 'mettre en mouvement', s: 'pousser une bille', c: 'b' },
    { t: 'arrêter', s: 'attraper un ballon', c: 'r' },
    { t: 'changer la direction', s: 'dévier une balle', c: 'o' },
    { t: 'déformer', s: 'écraser une pâte à modeler', c: 'vi' },
  ],
}, 'Les quatre effets possibles d\'une force : mettre en mouvement, arrêter, changer la direction ou déformer un objet.', '## 4. Les forces');

// CM2 — Objets programmés
pose('cm2/sciences/objets-programmes-et-informatique', 'capteur-action', 'chaine', {
  W: 640, etapes: ['capteur\ndétecte qu\'il fait nuit', 'programme\ndécide', 'action\nla lampe s\'allume'], couleurs: ['o', 'vi', 'v'], taille: 14,
}, 'Une lampe automatique : le capteur donne une information, le programme décide, puis l\'objet réalise une action.', '## 4. Capteurs et actions');
pose('cm2/sciences/objets-programmes-et-informatique', 'algorithme', 'diagramme', {
  W: 600, H: 400,
  noeuds: [
    { id: 'd', x: 240, y: 34, t: 'Début', c: 'g', forme: 'rond', w: 110, h: 40, gras: true },
    { id: 'c', x: 240, y: 110, t: 'lire le capteur de lumière', c: 'o' },
    { id: 't', x: 240, y: 210, w: 210, h: 84, t: 'Il fait nuit ?', c: 'vi', forme: 'losange', gras: true },
    { id: 'a', x: 90, y: 318, t: 'allumer la lampe', c: 'v' },
    { id: 'e', x: 390, y: 318, t: 'éteindre la lampe', c: 'b' },
  ],
  liens: [
    { de: 'd', a: 'c' }, { de: 'c', a: 't' },
    { de: 't', a: 'a', via: [[90, 210]], t: 'oui', c: 'v', dy: -8, dx: 30 },
    { de: 't', a: 'e', via: [[390, 210]], t: 'non', c: 'b', dy: -8, dx: -30 },
    { de: 'a', a: 'c', via: [[90, 370], [560, 370], [560, 110]], c: 'g' },
    { de: 'e', a: 'c', via: [[390, 370], [560, 370], [560, 110]], c: 'g' },
  ],
  extra: texte(566, 250, 'on recommence', { taille: 12.5, couleur: ATTENUE, ancre: 'end', italique: true }) + texte(566, 266, '(boucle)', { taille: 12.5, couleur: ATTENUE, ancre: 'end', italique: true }),
}, 'L\'algorithme de la lampe automatique : un test (il fait nuit ?) choisit l\'action, puis une boucle fait tout recommencer.', '## 3. Des instructions particulières');

// CM2 — Reproduction
pose('cm2/sciences/reproduction-des-etres-vivants', 'fecondation', 'diagramme', {
  W: 620, H: 170,
  noeuds: [
    { id: 'm', x: 110, y: 50, t: 'spermatozoïde\n(cellule mâle)', c: 'b' },
    { id: 'f', x: 110, y: 130, t: 'ovule\n(cellule femelle)', c: 'r' },
    { id: 'o', x: 330, y: 90, t: 'cellule-œuf', c: 'vi', gras: true },
    { id: 'i', x: 520, y: 90, t: 'nouvel\nindividu', c: 'v' },
  ],
  liens: [{ de: 'm', a: 'o' }, { de: 'f', a: 'o' }, { de: 'o', a: 'i', t: 'se développe' }],
  extra: texte(232, 96, 'fécondation', { taille: 13, couleur: VIOLET, italique: true, ancre: 'middle' }),
}, 'La reproduction sexuée : à la fécondation, un spermatozoïde et un ovule s\'unissent et forment une cellule-œuf, qui se développe en nouvel individu.', '## 1. La reproduction sexuée');
pose('cm2/sciences/reproduction-des-etres-vivants', 'fleur', 'fleur', {}, 'Une fleur coupée en deux : les étamines produisent le pollen, l\'ovaire du pistil contient les ovules qui deviendront les graines.', '## 3. La reproduction des plantes à fleurs');

// ───────────────────────── Dessins collège (6e, 5e) ─────────────────────────

/** Cellules (schémas simplifiés, non à l'échelle). type : 'simple' | 'animale-vegetale' | 'eu-procaryote'. */
SCHEMAS['cellules'] = ({ type = 'simple' } = {}) => {
  const lab = (x1, y1, x2, y2, t, c = ENCRE, ancre = 'start') => ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(x2 + (ancre === 'end' ? -6 : 6), y2 + 5, t, { taille: 13.5, ancre, couleur: c });
  const animale = (cx, cy, s = 1, details = true) => {
    let g = `<path d="M ${cx - 100 * s} ${cy} C ${cx - 104 * s} ${cy - 70 * s} ${cx - 30 * s} ${cy - 92 * s} ${cx + 30 * s} ${cy - 82 * s} C ${cx + 96 * s} ${cy - 72 * s} ${cx + 108 * s} ${cy - 10 * s} ${cx + 96 * s} ${cy + 40 * s} C ${cx + 84 * s} ${cy + 88 * s} ${cx + 10 * s} ${cy + 96 * s} ${cx - 44 * s} ${cy + 80 * s} C ${cx - 90 * s} ${cy + 66 * s} ${cx - 98 * s} ${cy + 40 * s} ${cx - 100 * s} ${cy} Z" fill="#fdeedd" stroke="#b5651d" stroke-width="2.4"/>`;
    g += cercle(cx + 6 * s, cy - 4 * s, 28 * s, { fond: '#d9c3f0', couleur: VIOLET, epaisseur: 2 });
    if (details) for (const [dx, dy, a] of [[-60, 30, 20], [50, 42, -30], [-40, -46, 60]]) g += `<ellipse cx="${cx + dx * s}" cy="${cy + dy * s}" rx="${13 * s}" ry="${6 * s}" transform="rotate(${a} ${cx + dx * s} ${cy + dy * s})" fill="#f6b8a2" stroke="#c0503a" stroke-width="1.4"/>`;
    return g;
  };
  const vegetale = (cx, cy) => {
    let g = `<rect x="${cx - 104}" y="${cy - 84}" width="208" height="168" rx="6" fill="#e8f5e9" stroke="#4a7d1a" stroke-width="6"/>`;
    g += `<rect x="${cx - 98}" y="${cy - 78}" width="196" height="156" rx="4" fill="#f1fbe9" stroke="#2e7d32" stroke-width="1.6"/>`;
    g += `<rect x="${cx - 40}" y="${cy - 52}" width="120" height="104" rx="30" fill="#d6ecff" stroke="${BLEU}" stroke-width="1.6"/>`;
    g += cercle(cx - 66, cy - 40, 20, { fond: '#d9c3f0', couleur: VIOLET, epaisseur: 2 });
    for (const [dx, dy] of [[-76, 20], [-60, 56], [-20, 64], [90 - 4, -60], [-20, -66]]) g += `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="11" ry="6.5" fill="#5cb85c" stroke="#1e6b1e" stroke-width="1.2"/>`;
    g += `<ellipse cx="${cx + 88}" cy="${cy + 62}" rx="9" ry="5" transform="rotate(-30 ${cx + 88} ${cy + 62})" fill="#f6b8a2" stroke="#c0503a" stroke-width="1.2"/>`;
    return g;
  };
  if (type === 'simple') {
    const W = 560, H = 260, cx = 190, cy = 132;
    let g = animale(cx, cy, 1, false);
    g += lab(cx + 98, cy + 10, 340, cy + 64, 'membrane (enveloppe)', '#b5651d');
    g += lab(cx - 40, cy + 40, 340, cy + 100, 'cytoplasme', '#8a4b00');
    g += lab(cx + 20, cy - 20, 340, cy - 50, 'noyau (commande la cellule)', VIOLET);
    g += texte(W / 2, 22, 'Une cellule vue au microscope (schéma simplifié)', { taille: 14, gras: true });
    return enveloppe(W, H, g);
  }
  if (type === 'animale-vegetale') {
    const W = 680, H = 330;
    let g = animale(150, 160, 1, true) + vegetale(510, 160);
    g += texte(150, 28, 'Cellule animale', { taille: 15, gras: true, couleur: '#b5651d' });
    g += texte(510, 28, 'Cellule végétale chlorophyllienne', { taille: 15, gras: true, couleur: VERT });
    g += lab(140, 154, 70, 104, 'noyau', VIOLET, 'end');
    g += lab(244, 196, 300, 220, 'membrane', '#b5651d');
    g += lab(96, 196, 40, 286, 'cytoplasme', '#8a4b00', 'start');
    g += lab(200, 202, 300, 262, 'mitochondrie', '#c0503a');
    g += lab(410, 100, 340, 72, 'paroi', '#4a7d1a', 'end');
    g += lab(536, 160, 600, 296, 'grande vacuole', BLEU, 'end');
    g += lab(438, 202, 446, 292, 'chloroplaste', VERT, 'end');
    g += lab(444, 120, 340, 130, 'noyau', VIOLET, 'end');
    g += texte(W / 2, 320, 'schémas simplifiés, non à l\'échelle', { taille: 12, couleur: ATTENUE, italique: true });
    return enveloppe(W, H, g);
  }
  // eucaryote / procaryote
  const W = 660, H = 290;
  let g = animale(160, 150, 0.95, false);
  g += texte(160, 28, 'Eucaryote : ADN dans un noyau', { taille: 14.5, gras: true, couleur: VIOLET });
  g += lab(170, 140, 290, 80, 'noyau (contient l\'ADN)', VIOLET);
  // bactérie : bâtonnet avec ADN dans le cytoplasme
  const bx = 500, by = 150;
  g += `<rect x="${bx - 110}" y="${by - 52}" width="220" height="104" rx="52" fill="#e8f5e9" stroke="#4a7d1a" stroke-width="5"/>`;
  g += `<rect x="${bx - 104}" y="${by - 46}" width="208" height="92" rx="46" fill="#fdeedd" stroke="#b5651d" stroke-width="1.6"/>`;
  g += `<path d="M ${bx - 50} ${by} C ${bx - 40} ${by - 30} ${bx - 10} ${by + 30} ${bx} ${by} S ${bx + 40} ${by - 26} ${bx + 50} ${by + 4} S ${bx + 20} ${by + 30} ${bx - 6} ${by + 14} S ${bx - 46} ${by + 26} ${bx - 50} ${by}" fill="none" stroke="${VIOLET}" stroke-width="2.4"/>`;
  g += texte(bx, 28, 'Procaryote (bactérie) : pas de noyau', { taille: 14.5, gras: true, couleur: VERT });
  g += lab(bx + 30, by - 10, bx + 40, 240, 'ADN libre dans le cytoplasme', VIOLET, 'end');
  g += lab(bx + 100, by - 30, 640, 84, 'paroi', '#4a7d1a', 'end');
  g += texte(W / 2, 280, 'schémas simplifiés, non à l\'échelle (une bactérie est bien plus petite)', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Groupes emboîtés (classification) : chaque boîte est définie par un caractère partagé. */
SCHEMAS['emboites'] = () => {
  const W = 640, H = 330;
  let g = '';
  const bx = (x, y, w, h, c, t, sous) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${TEINTES[c].fond}" stroke="${TEINTES[c].bord}" stroke-width="2.2"/>` + texte(x + 14, y + 24, t, { taille: 14.5, ancre: 'start', gras: true, couleur: TEINTES[c].bord }) + (sous ? texte(x + 14, y + 42, sous, { taille: 12.5, ancre: 'start', couleur: ATTENUE }) : '');
  g += bx(10, 10, 620, 310, 'b', 'Squelette interne (vertébrés)', 'colonne vertébrale');
  g += bx(160, 64, 460, 246, 'v', 'Quatre membres', '');
  g += bx(330, 116, 280, 184, 'o', 'Poils et mamelles (mammifères)', '');
  g += texte(85, 170, 'truite', { taille: 15 }) + texte(85, 194, 'requin', { taille: 15 });
  g += texte(245, 190, 'grenouille', { taille: 15 }) + texte(245, 214, 'lézard', { taille: 15 }) + texte(245, 238, 'oiseau', { taille: 15 });
  g += texte(470, 190, 'chat', { taille: 15 }) + texte(470, 214, 'souris', { taille: 15 }) + texte(470, 238, 'humain', { taille: 15 }) + texte(470, 262, 'dauphin', { taille: 15 });
  return enveloppe(W, H, g);
};

/** Circulation : le cœur, les artères, les capillaires d'un organe, les veines (schéma simplifié). */
SCHEMAS['circulation'] = () => {
  const W = 660, H = 340;
  let g = '';
  // cœur
  g += `<path d="M 110 120 C 110 80 60 76 54 112 C 48 150 90 180 110 214 C 130 180 172 150 166 112 C 160 76 110 80 110 120 Z" fill="#e57373" stroke="#9c2a2a" stroke-width="2.4"/>`;
  g += texte(110, 150, 'cœur', { taille: 15, gras: true, couleur: '#ffffff' });
  // organe
  g += `<rect x="400" y="70" width="210" height="200" rx="20" fill="#fdf1e4" stroke="${ORANGE}" stroke-width="2"/>`;
  g += texte(505, 96, 'un organe (muscle…)', { taille: 13.5, gras: true, couleur: ORANGE });
  // artère (haut) et veine (bas)
  g += `<path d="M 150 104 C 220 60 330 70 420 120" fill="none" stroke="${ROUGE}" stroke-width="9" stroke-linecap="round"/>`;
  g += `<path d="M 420 230 C 330 290 200 280 140 196" fill="none" stroke="${BLEU}" stroke-width="9" stroke-linecap="round"/>`;
  g += fleche(270, 74, 300, 78, { couleur: ROUGE, epaisseur: 0.1, pointe: 16 });
  g += fleche(270, 278, 240, 276, { couleur: BLEU, epaisseur: 0.1, pointe: 16 });
  // capillaires : petits vaisseaux qui relient l'artère et la veine dans l'organe
  g += `<path d="M 418 120 L 590 120" stroke="${ROUGE}" stroke-width="5" stroke-linecap="round"/>`;
  g += `<path d="M 590 230 L 418 230" stroke="${BLEU}" stroke-width="5" stroke-linecap="round"/>`;
  for (let x = 440; x <= 590; x += 25) g += `<path d="M ${x} 122 C ${x - 10} 150 ${x + 10} 180 ${x} 228" fill="none" stroke="#a5527a" stroke-width="2"/>`;
  g += etiq(515, 180, 'capillaires', { taille: 13, couleur: '#a5527a', gras: true });
  g += texte(285, 56, 'artère : part du cœur', { taille: 14, couleur: ROUGE, gras: true });
  g += texte(285, 312, 'veine : revient au cœur', { taille: 14, couleur: BLEU, gras: true });
  g += texte(110, 250, 'le sang tourne toujours', { taille: 12.5, couleur: ATTENUE }) + texte(110, 266, 'dans le même sens', { taille: 12.5, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Échanges au niveau des capillaires (zoom). */
SCHEMAS['echanges-capillaire'] = () => {
  const W = 620, H = 230;
  let g = '';
  g += `<rect x="40" y="96" width="540" height="40" rx="20" fill="#f7c7cf" stroke="#9c2a2a" stroke-width="2"/>`;
  g += texte(310, 122, 'sang dans un capillaire', { taille: 14, gras: true, couleur: '#7a1f1f' });
  g += fleche(60, 116, 110, 116, { couleur: '#7a1f1f', epaisseur: 2 });
  g += `<rect x="40" y="176" width="540" height="40" rx="8" fill="#fdf1e4" stroke="${ORANGE}" stroke-width="2"/>`;
  g += texte(310, 202, 'cellules de l\'organe', { taille: 14, gras: true, couleur: ORANGE });
  g += `<rect x="40" y="16" width="540" height="40" rx="8" fill="#fdf1e4" stroke="${ORANGE}" stroke-width="2"/>`;
  g += texte(310, 42, 'cellules de l\'organe', { taille: 14, gras: true, couleur: ORANGE });
  g += fleche(230, 140, 230, 172, { couleur: VERT, epaisseur: 2.6 }) + etiq(222, 162, 'dioxygène, nutriments', { taille: 13, couleur: VERT, ancre: 'end' });
  g += fleche(390, 172, 390, 140, { couleur: VIOLET, epaisseur: 2.6 }) + etiq(398, 162, 'dioxyde de carbone, déchets', { taille: 13, couleur: VIOLET, ancre: 'start' });
  g += fleche(230, 92, 230, 60, { couleur: VERT, epaisseur: 2.6 }) + etiq(222, 82, 'dioxygène, nutriments', { taille: 13, couleur: VERT, ancre: 'end' });
  g += fleche(390, 60, 390, 92, { couleur: VIOLET, epaisseur: 2.6 }) + etiq(398, 82, 'dioxyde de carbone, déchets', { taille: 13, couleur: VIOLET, ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Paroi de l'intestin grêle repliée en villosités : absorption des nutriments (schéma simplifié). */
SCHEMAS['villosites'] = () => {
  const W = 640, H = 300;
  let g = '';
  // intérieur de l'intestin (en haut), paroi en bas
  g += `<rect x="0" y="0" width="${W}" height="${H}" fill="#fffaf0"/>`;
  let d = 'M 20 250';
  for (let i = 0; i < 6; i++) { const x = 40 + i * 92; d += ` L ${x} 250 L ${x} 130 Q ${x + 26} 92 ${x + 52} 130 L ${x + 52} 250`; }
  d += ' L 620 250 L 620 290 L 20 290 Z';
  g += `<path d="${d}" fill="#f6c2a4" stroke="#b5651d" stroke-width="2"/>`;
  // vaisseaux sanguins dans les villosités
  for (let i = 0; i < 6; i++) { const x = 40 + i * 92; g += `<path d="M ${x + 18} 262 L ${x + 18} 140 Q ${x + 26} 128 ${x + 34} 140 L ${x + 34} 262" fill="none" stroke="${ROUGE}" stroke-width="2.6"/>`; }
  g += ligne(20, 270, 620, 270, { couleur: ROUGE, epaisseur: 4 });
  // nutriments
  for (let i = 0; i < 14; i++) g += cercle(56 + ((i * 41) % 540), 46 + ((i * 29) % 50), 4, { fond: ORANGE, couleur: '#8a4b00', epaisseur: 1 });
  g += fleche(270, 96, 255, 136, { couleur: ORANGE, epaisseur: 2.4 }) + fleche(362, 96, 347, 136, { couleur: ORANGE, epaisseur: 2.4 });
  g += texte(W / 2, 22, 'intérieur de l\'intestin grêle : les nutriments', { taille: 14, gras: true, couleur: '#8a4b00' });
  g += etiq(470, 200, 'villosité', { taille: 13.5, couleur: '#8a4b00', gras: true });
  g += etiq(560, 288, 'vers le sang', { taille: 13, couleur: ROUGE, gras: true });
  return enveloppe(W, H, g);
};

/** Cycle féminin d'environ 28 jours (schéma simplifié, durée variable). */
SCHEMAS['cycle-feminin'] = () => {
  const W = 660, H = 270, x0 = 50, x1 = 620;
  const X = (j) => x0 + ((j - 1) / 28) * (x1 - x0);
  let g = '';
  // épaisseur de la paroi de l'utérus (qualitative)
  const ep = (j) => (j <= 5 ? 50 - (j - 1) * 9 : j <= 14 ? 14 + ((j - 5) / 9) * 52 : 66 + ((j - 14) / 14) * 18);
  let d = `M ${X(1)} 200`;
  for (let j = 1; j <= 29; j += 0.25) d += ` L ${nb(X(j))} ${nb(200 - ep(Math.min(j, 28.99)))}`;
  d += ` L ${X(29)} 200 Z`;
  g += `<path d="${d}" fill="#f7c7cf" stroke="#b03a52" stroke-width="2"/>`;
  g += `<rect x="${X(1)}" y="200" width="${X(6) - X(1)}" height="16" fill="${ROUGE}" opacity="0.85"/>`;
  g += texte((X(1) + X(6)) / 2, 236, 'règles', { taille: 13.5, gras: true, couleur: ROUGE });
  g += fleche(x0 - 10, 216, x1 + 26, 216, { couleur: ENCRE, epaisseur: 1.8 });
  [1, 7, 14, 21, 28].forEach((j) => { g += ligne(X(j), 212, X(j), 220, { epaisseur: 1.4 }) + texte(X(j), 256, `jour ${j}`, { taille: 12, couleur: ATTENUE }); });
  // ovulation
  g += ligne(X(14), 40, X(14), 212, { couleur: VIOLET, epaisseur: 2, pointilles: true });
  g += cercle(X(14), 52, 8, { fond: '#f3e9b5', couleur: '#8a6d00', epaisseur: 1.6 });
  g += texte(X(14) + 14, 46, 'ovulation (vers le 14e jour) :', { taille: 13.5, couleur: VIOLET, gras: true, ancre: 'start' });
  g += texte(X(14) + 14, 64, 'un ovaire libère un ovule', { taille: 13, couleur: VIOLET, ancre: 'start' });
  g += etiq(X(22), 92, 'la paroi de l\'utérus\ns\'épaissit', { taille: 13, couleur: '#b03a52' });
  g += texte(X(1), 22, 'Un cycle d\'environ 28 jours (durée variable)', { taille: 14, gras: true, ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Paysage en coupe : altération en montagne, transport par la rivière, dépôt en plaine et en mer. */
SCHEMAS['erosion'] = () => {
  const W = 680, H = 300;
  let g = '';
  g += `<rect x="0" y="0" width="${W}" height="${H}" fill="#f4f9ff"/>`;
  // relief
  g += `<path d="M 0 250 L 0 120 L 60 60 L 120 110 L 170 70 L 240 170 L 330 210 L 470 226 L 520 230 L 680 230 L 680 300 L 0 300 Z" fill="#c9b38f" stroke="#7a5a2a" stroke-width="2"/>`;
  // mer
  g += `<path d="M 540 231 L 680 231 L 680 290 L 600 290 Z" fill="#9fd0ff" opacity="0.9"/>`;
  // rivière (trait bleu le long du relief)
  g += `<path d="M 175 82 L 240 172 L 330 212 L 470 228 L 545 232" fill="none" stroke="${BLEU}" stroke-width="4"/>`;
  // fragments : anguleux en haut, galets arrondis, sable, argile
  g += polygone([[118, 116], [128, 108], [134, 120]], { fond: '#7a5a2a', couleur: '#5a3a10', epaisseur: 1 }) + polygone([[150, 96], [160, 90], [162, 104]], { fond: '#7a5a2a', couleur: '#5a3a10', epaisseur: 1 });
  for (const x of [258, 280, 300]) g += `<ellipse cx="${x}" cy="${nb(186 + (x - 240) * 0.44)}" rx="6" ry="4" fill="#8f7a55" stroke="#5a3a10" stroke-width="1"/>`;
  for (let i = 0; i < 18; i++) g += cercle(380 + i * 6, 224 + (i % 2), 1.6, { fond: '#a07a3a', couleur: '#a07a3a', epaisseur: 0.5 });
  g += `<path d="M 556 280 L 680 280 L 680 290 L 600 290 Z" fill="#9c8c76"/>`;
  // étiquettes
  g += etiq(110, 34, '1. altération', { taille: 14, gras: true, couleur: '#7a1f1f' });
  g += etiq(110, 52, 'la roche se casse', { taille: 12.5, couleur: '#7a1f1f' });
  g += etiq(300, 140, '2. transport (érosion)', { taille: 14, gras: true, couleur: BLEU });
  g += etiq(300, 158, 'les galets s\'usent et s\'arrondissent', { taille: 12.5, couleur: BLEU });
  g += etiq(570, 190, '3. dépôt', { taille: 14, gras: true, couleur: VERT });
  g += etiq(570, 208, 'l\'eau ralentit : sédiments', { taille: 12.5, couleur: VERT });
  g += texte(610, 270, 'mer', { taille: 12.5, couleur: '#1f4f8a' });
  g += texte(W / 2, 294, 'schéma non à l\'échelle', { taille: 11.5, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Strates de roches sédimentaires : la plus ancienne en bas (fossiles éventuels). */
SCHEMAS['strates'] = ({ fossiles = false } = {}) => {
  const W = 560, H = 300;
  const couches = [['#d9c8a0', 'grès'], ['#e8e2d0', 'calcaire'], ['#b9a98a', 'argile'], ['#cdb78f', 'grès']];
  let g = '';
  couches.forEach(([c, n], i) => {
    const y = 40 + i * 56;
    g += `<rect x="60" y="${y}" width="260" height="56" fill="${c}" stroke="#6b5a3a" stroke-width="1.6"/>`;
    g += texte(190, y + 33, fossiles ? `couche ${4 - i}` : n, { taille: 14, couleur: '#3d2f14' });
  });
  if (fossiles) {
    // ammonite (couche 3), trilobite (couche 1)
    g += `<path d="M 268 120 a 14 14 0 1 1 -1 0 M 268 120 a 8 8 0 1 1 -1 0" fill="none" stroke="#5a3a10" stroke-width="2"/>`;
    g += `<ellipse cx="270" cy="236" rx="16" ry="11" fill="none" stroke="#5a3a10" stroke-width="2"/>` + ligne(270, 225, 270, 247, { couleur: '#5a3a10', epaisseur: 1.5 });
    g += `<path d="M 270 178 q 8 -12 16 0 q 8 12 16 0" fill="none" stroke="#5a3a10" stroke-width="2"/>`;
  }
  g += fleche(360, 250, 360, 50, { couleur: VIOLET, epaisseur: 2.6 });
  g += texte(374, 60, 'plus récente', { taille: 14, ancre: 'start', couleur: VIOLET, gras: true });
  g += texte(374, 252, 'plus ancienne', { taille: 14, ancre: 'start', couleur: VIOLET, gras: true });
  g += texte(374, 150, fossiles ? 'les couches du bas' : 'les couches se sont', { taille: 13, ancre: 'start' });
  g += texte(374, 168, fossiles ? 'se sont déposées en premier' : 'déposées les unes', { taille: 13, ancre: 'start' });
  if (!fossiles) g += texte(374, 186, 'sur les autres', { taille: 13, ancre: 'start' });
  g += texte(190, 28, fossiles ? 'Coupe de terrain avec fossiles (schéma)' : 'Couches (strates) de roches', { taille: 14, gras: true });
  return enveloppe(W, H, g);
};

/** Expérience : deux plantes identiques, une seule différence (la lumière). */
SCHEMAS['experience-lumiere'] = () => {
  const W = 620, H = 300;
  let g = '';
  const pot = (x, verte) => {
    let s = `<path d="M ${x - 40} 210 L ${x - 32} 260 L ${x + 32} 260 L ${x + 40} 210 Z" fill="#c8794a" stroke="#7a3f1a" stroke-width="2"/>`;
    const c = verte ? '#5cb85c' : '#d9cf6a';
    const b = verte ? '#1e6b1e' : '#8a7d10';
    s += `<path d="M ${x} 210 L ${x} ${verte ? 100 : 150}" stroke="${b}" stroke-width="5"/>`;
    s += `<ellipse cx="${x - 22}" cy="${verte ? 140 : 180}" rx="24" ry="9" transform="rotate(${verte ? -25 : 25} ${x - 22} ${verte ? 140 : 180})" fill="${c}" stroke="${b}" stroke-width="1.6"/>`;
    s += `<ellipse cx="${x + 22}" cy="${verte ? 118 : 172}" rx="24" ry="9" transform="rotate(${verte ? 25 : -25} ${x + 22} ${verte ? 118 : 172})" fill="${c}" stroke="${b}" stroke-width="1.6"/>`;
    return s;
  };
  g += soleil(70, 70, 22);
  g += pot(170, true);
  g += `<rect x="370" y="60" width="200" height="210" fill="#2f3e5c" opacity="0.92" rx="6"/>`;
  g += pot(470, false);
  g += texte(170, 290, 'à la lumière : la plante pousse', { taille: 13.5, couleur: VERT, gras: true });
  g += texte(470, 290, 'dans le noir : elle jaunit', { taille: 13.5, couleur: '#8a7d10', gras: true });
  g += texte(470, 84, 'boîte fermée', { taille: 12.5, couleur: '#ffffff' });
  g += texte(W / 2, 24, 'Même plante, même eau, même sol : seule la lumière change', { taille: 14, gras: true });
  return enveloppe(W, H, g);
};

// ───────────────────────── Poses : 6e, 5e ─────────────────────────

// 6e — Besoins des végétaux
pose('sixieme/svt/besoins-des-vegetaux', 'besoins', 'plante', { mode: 'besoins' }, 'Les besoins d\'une plante verte : les racines absorbent l\'eau et les sels minéraux, les feuilles captent la lumière et le dioxyde de carbone de l\'air.', '## Le rôle de chaque organe');
pose('sixieme/svt/besoins-des-vegetaux', 'experience', 'experience-lumiere', {}, 'Une expérience juste : on ne change qu\'un seul élément, ici la lumière. Privée de lumière, la plante jaunit : la lumière est nécessaire.', '## Comprendre par des expériences');

// 6e — Caractéristiques du vivant
pose('sixieme/svt/caracteristiques-du-vivant', 'cellule', 'cellules', { type: 'simple' }, 'Une cellule vue au microscope : une membrane l\'entoure, le cytoplasme la remplit et, le plus souvent, un noyau la commande (schéma simplifié).', '## Tous faits de cellules');
pose('sixieme/svt/caracteristiques-du-vivant', 'trois-cas', 'cartes', {
  W: 660, parLigne: 3, h: 96, taille: 13,
  cartes: [
    { t: 'vivant', s: 'réalise les fonctions\ndu vivant\npoisson, fougère', c: 'v' },
    { t: 'provient du vivant', s: 'produit par un être vivant,\nmais plus vivant\nfeuille morte, bois, laine', c: 'o' },
    { t: 'non-vivant', s: 'n\'a jamais été vivant\ngalet, sable, eau', c: 'g' },
  ],
}, 'Trois cas à distinguer : ce qui est vivant, ce qui provient du vivant mais n\'est plus vivant, et ce qui n\'a jamais été vivant.', '## Vivant, non-vivant et… ce qui a déjà vécu');

// 6e — Classification
pose('sixieme/svt/classification-des-etres-vivants', 'emboites', 'emboites', {}, 'Des groupes emboîtés : chaque boîte est définie par un caractère que possèdent tous ses membres. Le dauphin est avec les mammifères, le requin avec les autres vertébrés.', '## Des groupes emboîtés');

// 6e — Origine de la matière organique
pose('sixieme/svt/origine-de-la-matiere-organique', 'cycle-matiere', 'cycle', RECYCLAGE({
  etapes: ['végétaux verts\nproducteurs', 'animaux\nconsommateurs', 'restes et cadavres\n(matière organique)', 'décomposeurs\n(champignons, bactéries,\nvers de terre)', 'matière minérale\neau, CO₂, sels minéraux'],
  fleches: ['mangés par', '', '', '', 'lumière'],
  centre: 'la matière\ncircule en boucle',
}), 'Le cycle de la matière : grâce à la lumière, les végétaux fabriquent la matière organique ; les décomposeurs la retransforment en matière minérale.', '## Le recyclage par les décomposeurs');

// 6e — Peuplement des milieux
pose('sixieme/svt/peuplement-des-milieux', 'strategies', 'arbre', {
  W: 680, taille: 12.5, pasY: 88,
  racine: { t: 'Passer la mauvaise saison', c: 'g', gras: true, taille: 14, enfants: [
    { t: 'Animaux', c: 'o', enfants: [
      { t: 'migration\nl\'hirondelle', c: 'o' },
      { t: 'hibernation\nla marmotte,\nle hérisson', c: 'o' },
      { t: 'rester actif\nle renard', c: 'o' },
      { t: 'œuf ou larve\nbeaucoup\nd\'insectes', c: 'o' },
    ] },
    { t: 'Végétaux', c: 'v', enfants: [
      { t: 'perdre ses\nfeuilles\nle chêne', c: 'v' },
      { t: 'graines', c: 'v' },
      { t: 'organe\nsouterrain\nbulbe, racine', c: 'v' },
    ] },
  ] },
}, 'Les stratégies des êtres vivants pour passer la mauvaise saison : partir, ralentir, rester actif ou survivre sous une forme résistante.', '## Comment les animaux occupent le milieu au fil des saisons');

// 5e — Circulation
pose('cinquieme/svt/circulation-et-sang', 'boucle', 'circulation', {}, 'Le cœur pompe le sang dans les artères ; dans l\'organe, le sang passe dans les capillaires, puis revient au cœur par les veines (schéma simplifié).', '## 2. Les vaisseaux sanguins');
pose('cinquieme/svt/circulation-et-sang', 'echanges', 'echanges-capillaire', {}, 'Au niveau des capillaires, le sang cède aux cellules le dioxygène et les nutriments, et récupère le dioxyde de carbone et les déchets.', '## 3. Les échanges avec les organes');

// 5e — Digestion
pose('cinquieme/svt/nutrition-et-systeme-digestif', 'deux-actions', 'chaine', {
  W: 660, etapes: ['aliments', 'bouillie', 'nutriments', 'sang'], fleches: ['action mécanique\n(dents, estomac)', 'action chimique\n(sucs, enzymes)', 'absorption\n(intestin grêle)'], couleurs: ['o', 'j', 'v', 'r'], taille: 15,
}, 'La digestion combine une action mécanique et une action chimique ; les nutriments obtenus passent dans le sang au niveau de l\'intestin grêle.', '## 2. Deux actions : mécanique et chimique');
pose('cinquieme/svt/nutrition-et-systeme-digestif', 'villosites', 'villosites', {}, 'La paroi de l\'intestin grêle est repliée en villosités riches en vaisseaux sanguins : les nutriments la traversent et passent dans le sang (schéma simplifié).', '## 4. L\'absorption intestinale');

// 5e — Reproduction et puberté
pose('cinquieme/svt/reproduction-et-puberte', 'cycle', 'cycle-feminin', {}, 'Le cycle féminin, d\'environ 28 jours : la paroi de l\'utérus s\'épaissit, un ovule est libéré vers le milieu du cycle ; sans fécondation, ce sont les règles.', '## 3. Le cycle et les règles');
pose('cinquieme/svt/reproduction-et-puberte', 'grossesse', 'chaine', {
  W: 660, etapes: ['fécondation\nspermatozoïde + ovule', 'cellule-œuf', 'embryon\ndans l\'utérus', 'fœtus\nnourri par le placenta', 'naissance'], couleurs: ['vi', 'vi', 'r', 'r', 'v'], parLigne: 3, taille: 14,
}, 'De la fécondation à la naissance : la cellule-œuf devient un embryon puis un fœtus, qui grandit dans l\'utérus pendant environ 9 mois.', '## 4. Fécondation, grossesse, naissance');

// 5e — Respiration
pose('cinquieme/svt/respiration-et-milieux-de-vie', 'echanges', 'diagramme', {
  W: 620, H: 210,
  noeuds: [
    { id: 'm', x: 110, y: 105, w: 170, h: 70, t: 'milieu\n(air ou eau)', c: 'b', taille: 15, gras: true },
    { id: 'o', x: 330, y: 105, w: 150, h: 70, t: 'organe\nrespiratoire', c: 'r', taille: 15, gras: true },
    { id: 's', x: 530, y: 105, w: 110, h: 70, t: 'sang', c: 'r', taille: 15, gras: true },
  ],
  liens: [
    { de: 'm', a: 'o', k: 18, t: 'dioxygène', c: 'v', dy: -10 },
    { de: 'o', a: 'm', k: 18, t: 'dioxyde de carbone', c: 'vi', dy: 22 },
    { de: 'o', a: 's', k: 18, t: 'O₂', c: 'v', dy: -10 },
    { de: 's', a: 'o', k: 18, t: 'CO₂', c: 'vi', dy: 22 },
  ],
}, 'Respirer, c\'est échanger des gaz : l\'animal prélève du dioxygène dans l\'air ou l\'eau et y rejette du dioxyde de carbone, par un organe très irrigué.', '## 1. Respirer, c\'est échanger des gaz');
pose('cinquieme/svt/respiration-et-milieux-de-vie', 'organes', 'cartes', {
  W: 660, parLigne: 2, h: 76, taille: 13,
  cartes: [
    { t: 'poumons', s: 'mammifères, oiseaux, reptiles,\namphibiens adultes', c: 'r' },
    { t: 'branchies', s: 'poissons, crevettes, moules\n(dioxygène dissous dans l\'eau)', c: 'b' },
    { t: 'trachées', s: 'insectes\n(l\'air entre par les stigmates)', c: 'o' },
    { t: 'peau', s: 'ver de terre\n(peau fine et humide)', c: 'vi' },
  ],
}, 'Des organes respiratoires variés : poumons, branchies, trachées ou peau, selon l\'animal et son milieu.', '## 2. Des organes respiratoires variés');

// 5e — Roches et érosion
pose('cinquieme/svt/roches-erosion-et-paysages', 'erosion', 'erosion', {}, 'Du sommet à la mer : les roches sont altérées, les fragments sont transportés par la rivière et s\'arrondissent, puis se déposent quand l\'eau ralentit.', '## 3. Le transport par l\'érosion');
pose('cinquieme/svt/roches-erosion-et-paysages', 'strates', 'strates', {}, 'Les sédiments déposés en couches forment des roches sédimentaires : sauf bouleversement, la couche la plus ancienne est en bas.', '## 4. Le dépôt et les roches sédimentaires');

// ───────────────────────── Dessins 4e, 3e (et réutilisés au lycée) ─────────────────────────

/** Coupe du globe. mode 'simple' (4e) ou 'deux-decoupages' (1re). Rayons du noyau à l'échelle ; lithosphère exagérée. */
SCHEMAS['globe'] = ({ mode = 'simple' } = {}) => {
  const W = 680, H = 360, cx = 340, cy = 330, R = 290;
  const r = (km) => (R * (6371 - km)) / 6371;
  const rN = r(2900); // limite manteau / noyau (≈ 2 900 km)
  let g = '';
  const disque = (rr, fond, a1 = 180, a2 = 360) => {
    const p = (a) => [cx + rr * Math.cos(a * Math.PI / 180), cy + rr * Math.sin(a * Math.PI / 180)];
    const [x1, y1] = p(a1), [x2, y2] = p(a2);
    return `<path d="M ${cx} ${cy} L ${nb(x1)} ${nb(y1)} A ${rr} ${rr} 0 0 1 ${nb(x2)} ${nb(y2)} Z" fill="${fond}" stroke="#555" stroke-width="1.2"/>`;
  };
  const lith = 16, asth = 26; // épaisseurs dessinées (exagérées)
  if (mode === 'simple') {
    g += disque(R, '#7a5a2a') + disque(R - 5, '#f0a35e') + disque(rN, '#f6d36b');
    g += `<path d="M ${cx - R + lith / 2} ${cy} A ${R - lith / 2} ${R - lith / 2} 0 0 1 ${cx + R - lith / 2} ${cy}" fill="none" stroke="${ROUGE}" stroke-width="${lith}" stroke-opacity="0.35"/>`;
    g += texte(cx, cy - rN / 2 - 10, 'noyau', { taille: 17, gras: true, couleur: '#7a5a00' });
    g += texte(cx, cy - (R + rN) / 2 - 8, 'manteau', { taille: 16, gras: true, couleur: '#8a3f00' });
    g += texte(cx, cy - (R + rN) / 2 + 12, '(solide, se déforme très lentement)', { taille: 13, couleur: '#8a3f00' });
    g += etiq(cx - R + 40, cy - 236, 'croûte', { taille: 14, gras: true, couleur: '#5a3a10' });
    g += ligne(cx - R + 66, cy - 230, cx - R + 112, cy - 212, { couleur: '#5a3a10', epaisseur: 1.2 });
    g += etiq(cx + R - 56, cy - 266, 'lithosphère :', { taille: 14, gras: true, couleur: ROUGE });
    g += etiq(cx + R - 56, cy - 248, 'croûte + sommet du manteau', { taille: 12.5, couleur: ROUGE });
    g += ligne(cx + R - 80, cy - 240, cx + 208, cy - 196, { couleur: ROUGE, epaisseur: 1.2 });
    g += ligne(cx + rN, cy, cx + rN, cy + 8, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(cx + rN, cy + 22, '2 900 km', { taille: 12, couleur: ATTENUE });
    g += texte(cx + R - 10, cy + 22, 'surface', { taille: 12, couleur: ATTENUE });
    g += texte(cx, cy + 22, 'centre (6 370 km)', { taille: 12, couleur: ATTENUE });
    g += texte(W / 2, cy + 46, 'noyau et manteau à l\'échelle ; croûte et lithosphère dessinées plus épaisses', { taille: 11.5, couleur: ATTENUE, italique: true });
    return enveloppe(W, cy + 56, g);
  }
  // deux découpages : à gauche chimique, à droite mécanique
  g += disque(R, '#f0a35e', 180, 270) + disque(R, '#f0a35e', 270, 360);
  g += disque(R, '#7a5a2a', 180, 270) + disque(R - 6, '#f0a35e', 180, 270);
  g += disque(R, '#c0392b', 270, 360) + disque(R - lith, '#f5c48a', 270, 360) + disque(R - lith - asth, '#f0a35e', 270, 360);
  g += disque(rN, '#f6d36b', 180, 270) + disque(rN, '#f6d36b', 270, 360);
  g += ligne(cx, cy, cx, cy - R - 6, { couleur: ENCRE, epaisseur: 2 });
  g += texte(cx - R / 2 - 10, 26, 'Découpage chimique', { taille: 15, gras: true, couleur: '#5a3a10' });
  g += texte(cx + R / 2 + 10, 26, 'Découpage mécanique', { taille: 15, gras: true, couleur: ROUGE });
  g += etiq(cx - 150, cy - 150, 'manteau\n(péridotite)', { taille: 14, gras: true, couleur: '#8a3f00' });
  g += etiq(cx - 70, cy - 50, 'noyau\n(fer, nickel)', { taille: 14, gras: true, couleur: '#7a5a00' });
  g += etiq(cx + 70, cy - 50, 'noyau', { taille: 14, gras: true, couleur: '#7a5a00' });
  g += etiq(40, cy - 268, 'croûte', { taille: 13.5, gras: true, couleur: '#5a3a10', ancre: 'start' });
  g += ligne(92, cy - 262, cx - R * Math.cos(Math.PI / 3.3) + 4, cy - R * Math.sin(Math.PI / 3.3) + 4, { couleur: '#5a3a10', epaisseur: 1.2 });
  const pr = (rr, a) => [cx + rr * Math.cos(-a * Math.PI / 180), cy + rr * Math.sin(-a * Math.PI / 180)];
  const [lx, ly] = pr(R - lith / 2, 40), [ax, ay] = pr(R - lith - asth / 2, 22);
  g += ligne(lx, ly, 560, 70, { couleur: ROUGE, epaisseur: 1.2 }) + etiq(566, 66, 'lithosphère\nrigide', { taille: 13.5, gras: true, couleur: ROUGE, ancre: 'start' });
  g += ligne(ax, ay, 600, 200, { couleur: '#b5651d', epaisseur: 1.2 }) + etiq(604, 186, 'asthéno-\nsphère\nductile', { taille: 13.5, gras: true, couleur: '#b5651d', ancre: 'start' });
  g += etiq(cx + 130, cy - 110, 'reste du\nmanteau', { taille: 13, couleur: '#8a3f00' });
  g += texte(W / 2, 352, 'épaisseurs de la croûte, de la lithosphère et de l\'asthénosphère exagérées', { taille: 11.5, couleur: ATTENUE, italique: true });
  return enveloppe(W, H + 4, g);
};

/** Les trois types de frontières de plaques (schémas de principe). */
SCHEMAS['frontieres'] = ({ niveau = '4e' } = {}) => {
  const W = 680, H = 270;
  let g = '';
  const panneau = (x0, titreP, sous) => texte(x0 + 108, 26, titreP, { taille: 14.5, gras: true }) + texte(x0 + 108, 44, sous, { taille: 12.5, couleur: ATTENUE });
  const lithC = '#b07a4a', manteauC = '#f6d0a0';
  // 1. écartement (dorsale)
  let x0 = 6;
  g += `<rect x="${x0}" y="120" width="216" height="110" fill="${manteauC}"/>`;
  g += `<path d="M ${x0} 120 L ${x0 + 100} 104 L ${x0 + 100} 124 L ${x0} 150 Z" fill="${lithC}" stroke="#5a3a10" stroke-width="1.4"/>`;
  g += `<path d="M ${x0 + 216} 120 L ${x0 + 116} 104 L ${x0 + 116} 124 L ${x0 + 216} 150 Z" fill="${lithC}" stroke="#5a3a10" stroke-width="1.4"/>`;
  g += `<path d="M ${x0 + 108} 104 L ${x0 + 108} 200" stroke="${ROUGE}" stroke-width="6" stroke-opacity="0.75"/>`;
  g += fleche(x0 + 108, 214, x0 + 108, 132, { couleur: ROUGE, epaisseur: 2.4 });
  g += fleche(x0 + 80, 90, x0 + 30, 98, { couleur: ENCRE, epaisseur: 2.4 }) + fleche(x0 + 136, 90, x0 + 186, 98, { couleur: ENCRE, epaisseur: 2.4 });
  g += texte(x0 + 108, 250, 'dorsale : du magma remonte', { taille: 12.5, couleur: ROUGE });
  g += panneau(x0, niveau === '1re' ? 'Divergence' : 'Écartement', 'les plaques s\'éloignent');
  // 2. rapprochement (subduction)
  x0 = 232;
  g += `<rect x="${x0}" y="120" width="216" height="110" fill="${manteauC}"/>`;
  g += `<path d="M ${x0} 118 L ${x0 + 120} 118 L ${x0 + 196} 220 L ${x0 + 172} 228 L ${x0 + 108} 142 L ${x0} 142 Z" fill="${lithC}" stroke="#5a3a10" stroke-width="1.4"/>`;
  g += `<path d="M ${x0 + 114} 112 L ${x0 + 216} 100 L ${x0 + 216} 150 L ${x0 + 146} 150 Z" fill="#c9a06a" stroke="#5a3a10" stroke-width="1.4"/>`;
  g += `<path d="M ${x0 + 168} 105 L ${x0 + 180} 86 L ${x0 + 192} 103 Z" fill="#8a3a1a" stroke="#5a2a10" stroke-width="1.2"/>`;
  g += fleche(x0 + 20, 106, x0 + 80, 106, { couleur: ENCRE, epaisseur: 2.4 }) + fleche(x0 + 214, 70, x0 + 184, 72, { couleur: ENCRE, epaisseur: 2.4 });
  g += texte(x0 + 108, 250, 'subduction : une plaque plonge', { taille: 12.5, couleur: '#5a3a10' });
  g += panneau(x0, niveau === '1re' ? 'Convergence' : 'Rapprochement', 'les plaques se rapprochent');
  // 3. coulissement (vue de dessus)
  x0 = 458;
  g += `<rect x="${x0}" y="70" width="216" height="80" fill="#d9c3a0" stroke="#5a3a10" stroke-width="1.4"/>`;
  g += `<rect x="${x0}" y="150" width="216" height="80" fill="#cbb08a" stroke="#5a3a10" stroke-width="1.4"/>`;
  g += ligne(x0, 150, x0 + 216, 150, { couleur: ROUGE, epaisseur: 3 });
  g += fleche(x0 + 140, 110, x0 + 60, 110, { couleur: ENCRE, epaisseur: 2.6 }) + fleche(x0 + 76, 190, x0 + 156, 190, { couleur: ENCRE, epaisseur: 2.6 });
  g += texte(x0 + 108, 250, 'faille (vue de dessus)', { taille: 12.5, couleur: ROUGE });
  g += panneau(x0, niveau === '1re' ? 'Transformante' : 'Coulissement', 'les plaques glissent');
  return enveloppe(W, H, g);
};

/** Séisme : faille, foyer, épicentre, ondes sismiques (coupe, schéma de principe). */
SCHEMAS['seisme'] = () => {
  const W = 620, H = 320;
  let g = `<rect x="20" y="80" width="580" height="220" fill="#e6d3b3" stroke="#7a5a2a" stroke-width="1.6"/>`;
  g += ligne(20, 80, 600, 80, { couleur: '#3b8a3a', epaisseur: 4 });
  g += ligne(250, 300, 360, 80, { couleur: '#5a3a10', epaisseur: 2.6, pointilles: true });
  const fx = 310, fy = 180, ex = fx, ey = 80;
  for (const rr of [30, 60, 90]) g += cercle(fx, fy, rr, { couleur: ROUGE, epaisseur: 1.4 }).replace('stroke-width="1.4"', 'stroke-width="1.4" stroke-dasharray="5 4"');
  g += `<polygon points="${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => { const a = -Math.PI / 2 + i * Math.PI / 5; const rr = i % 2 ? 6 : 14; return `${nb(fx + rr * Math.cos(a))},${nb(fy + rr * Math.sin(a))}`; }).join(' ')}" fill="${ROUGE}"/>`;
  g += ligne(ex, ey, fx, fy - 14, { couleur: ATTENUE, epaisseur: 1.2 });
  g += cercle(ex, ey, 6, { fond: ORANGE, couleur: '#7a3a00' });
  g += texte(ex, 54, 'épicentre', { taille: 15, gras: true, couleur: ORANGE }) + texte(ex, 70, '(en surface, à la verticale du foyer)', { taille: 12, couleur: ORANGE });
  g += etiq(fx + 104, fy + 4, 'foyer : rupture', { taille: 14, gras: true, couleur: ROUGE, ancre: 'start' });
  g += etiq(fx + 104, fy + 22, 'des roches en profondeur', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += etiq(120, 250, 'ondes sismiques', { taille: 13.5, gras: true, couleur: ROUGE });
  g += etiq(272, 288, 'faille', { taille: 13, couleur: '#5a3a10' });
  g += texte(40, 30, 'surface du sol', { taille: 12, couleur: '#2e6b2d', ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Volcans : éruption effusive (lave fluide) et explosive (lave visqueuse), schémas de principe. */
SCHEMAS['volcans'] = () => {
  const W = 680, H = 380;
  let d = `<rect x="0" y="250" width="${W}" height="80" fill="#e6d3b3"/>`;
  // effusif : cône large et bas, coulées
  d += `<path d="M 30 250 L 150 170 L 190 170 L 310 250 Z" fill="#8d7b68" stroke="#4a3a2a" stroke-width="1.6"/>`;
  d += `<path d="M 160 172 Q 150 200 120 226 Q 100 244 80 250 L 96 250 Q 130 236 150 210 Q 166 190 172 172 Z" fill="#f05a28" stroke="#b33a10" stroke-width="1.2"/>`;
  d += `<path d="M 182 172 Q 200 206 240 238 L 256 250 L 238 250 Q 200 220 176 176 Z" fill="#f05a28" stroke="#b33a10" stroke-width="1.2"/>`;
  d += `<path d="M 160 170 Q 170 150 180 170" fill="#ff9a3c"/>`;
  d += `<rect x="166" y="170" width="8" height="100" fill="#f05a28"/>` + `<ellipse cx="170" cy="290" rx="70" ry="20" fill="#f05a28" stroke="#b33a10" stroke-width="1.4"/>`;
  d += etiq(64, 206, 'coulée\nde lave', { taille: 12.5, couleur: '#b33a10' });
  // explosif : cône raide, panache
  d += `<path d="M 400 250 L 490 120 L 530 120 L 620 250 Z" fill="#8d7b68" stroke="#4a3a2a" stroke-width="1.6"/>`;
  d += `<path d="M 500 118 C 470 90 470 60 490 54 C 470 30 510 10 530 30 C 560 10 590 40 570 60 C 600 70 590 110 520 118 Z" fill="#9a9a9a" stroke="#555" stroke-width="1.4"/>`;
  for (const [x, y] of [[470, 100], [560, 96], [452, 120], [578, 120]]) d += cercle(x, y, 3, { fond: '#555', couleur: '#333', epaisseur: 0.8 });
  d += `<rect x="506" y="120" width="8" height="150" fill="#c0392b"/>` + `<ellipse cx="510" cy="290" rx="70" ry="20" fill="#c0392b" stroke="#7a1f1f" stroke-width="1.4"/>`;
  d += etiq(608, 40, 'cendres', { taille: 12.5, couleur: '#555', ancre: 'start' });
  // légendes communes
  d += etiq(340, 296, 'chambre magmatique', { taille: 13, couleur: '#7a1f1f', gras: true });
  d += ligne(400, 292, 438, 290, { couleur: ATTENUE, epaisseur: 1.2 }) + ligne(280, 292, 242, 290, { couleur: ATTENUE, epaisseur: 1.2 });
  d += etiq(340, 204, 'cheminée', { taille: 13, couleur: '#7a1f1f' }) + ligne(368, 200, 504, 196, { couleur: ATTENUE, epaisseur: 1.2 }) + ligne(312, 200, 176, 220, { couleur: ATTENUE, epaisseur: 1.2 });
  let g = `<g transform="translate(0 50)">${d}</g>`;
  g += texte(170, 26, 'Éruption effusive', { taille: 15, gras: true, couleur: '#b33a10' }) + texte(170, 44, 'magma fluide : la lave coule', { taille: 12.5, couleur: ATTENUE });
  g += texte(510, 26, 'Éruption explosive', { taille: 15, gras: true, couleur: '#555' }) + texte(510, 44, 'magma visqueux : explosions, cendres', { taille: 12.5, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Risque = rencontre d'un aléa et d'enjeux humains. */
SCHEMAS['risque'] = () => {
  const W = 560, H = 250;
  let g = '';
  g += cercle(210, 125, 100, { fond: '#f4b183', couleur: ORANGE, opacite: 0.55, epaisseur: 2 });
  g += cercle(350, 125, 100, { fond: '#9fc5f8', couleur: BLEU, opacite: 0.55, epaisseur: 2 });
  g += texte(160, 118, 'ALÉA', { taille: 16, gras: true, couleur: '#8a3f00' }) + texte(160, 138, 'séisme, éruption', { taille: 12.5, couleur: '#8a3f00' });
  g += texte(400, 118, 'ENJEUX', { taille: 16, gras: true, couleur: '#0b3d91' }) + texte(400, 138, 'habitants,', { taille: 12.5, couleur: '#0b3d91' }) + texte(400, 154, 'bâtiments, activités', { taille: 12.5, couleur: '#0b3d91' });
  g += texte(280, 120, 'RISQUE', { taille: 16, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
};

/** Effet de serre (schéma de principe). */
SCHEMAS['effet-serre'] = () => {
  const W = 680, H = 330;
  let g = `<rect x="0" y="0" width="${W}" height="${H}" fill="#f4f9ff"/>`;
  g += `<rect x="0" y="270" width="${W}" height="60" fill="#9ccc65"/>` + texte(630, 304, 'sol', { taille: 13, couleur: '#2e5a1a' });
  g += `<rect x="0" y="96" width="${W}" height="34" fill="#c9b3e6" opacity="0.55"/>`;
  g += texte(672, 118, 'gaz à effet de serre (CO₂…)', { taille: 13, couleur: VIOLET, gras: true, ancre: 'end' });
  g += soleil(60, 46, 24);
  g += fleche(96, 64, 220, 268, { couleur: '#d18f00', epaisseur: 3 });
  g += etiq(150, 196, 'lumière\ndu Soleil', { taille: 13, couleur: '#a26a00', gras: true, ancre: 'end' });
  const onde = (x1, y1, x2, y2, c) => {
    const n = 7, L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
    let d = `M ${x1} ${y1}`;
    for (let i = 1; i <= n * 4; i++) { const t = (i / (n * 4)) * (L - 10); const a = Math.sin((i * Math.PI) / 2) * 6; d += ` L ${nb(x1 + ux * t - uy * a)} ${nb(y1 + uy * t + ux * a)}`; }
    return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.2"/>` + fleche(x1 + ux * (L - 12), y1 + uy * (L - 12), x2, y2, { couleur: c, epaisseur: 2.2 });
  };
  g += onde(300, 266, 350, 20, ROUGE);
  g += onde(400, 266, 430, 134, ROUGE);
  g += onde(450, 128, 490, 262, ROUGE);
  g += etiq(364, 40, 'une partie s\'échappe vers l\'espace', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += etiq(292, 206, 'le sol chauffé\német des\ninfrarouges', { taille: 12.5, couleur: ROUGE, ancre: 'end' });
  g += etiq(506, 180, 'une partie est\nrenvoyée vers le sol :\nla surface se réchauffe', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Arbre de parenté (cladogramme) de quelques vertébrés : caractères partagés sur les branches. */
SCHEMAS['cladogramme'] = () => {
  const W = 660, H = 330;
  const taxons = ['truite', 'grenouille', 'lézard', 'chat', 'humain'];
  const yT = 60, yB = 290;
  const xs = taxons.map((_, i) => 80 + i * 120);
  let g = '';
  // nœuds : racine à gauche en bas ; chaque nœud regroupe les taxons à sa droite
  // tronc : diagonale de la racine vers l'humain
  const rx = 40, ry = yB;
  g += ligne(rx, ry, xs[4], yT, { couleur: ENCRE, epaisseur: 2.6 });
  // branches vers chaque taxon depuis la diagonale
  const surDiag = (x) => ry + ((yT - ry) * (x - rx)) / (xs[4] - rx);
  const departs = [xs[0] - 20, xs[1] - 30, xs[2] - 30, xs[3] - 20];
  taxons.slice(0, 4).forEach((t, i) => { const x = departs[i] + 60; g += ligne(x, surDiag(x), xs[i], yT, { couleur: ENCRE, epaisseur: 2.6 }); });
  taxons.forEach((t, i) => { g += texte(xs[i], yT - 14, t, { taille: 15, gras: true }); });
  // caractères (barres sur le tronc entre deux départs)
  const car = [
    ['squelette interne,', 'colonne vertébrale', 70],
    ['quatre membres', '', 196],
    ['amnios (œuf', 'à enveloppes protectrices)', 312],
    ['poils, mamelles', '', 440],
  ];
  car.forEach(([a, b, x]) => {
    const y = surDiag(x);
    g += ligne(x - 8, y - 6, x + 8, y + 6, { couleur: ROUGE, epaisseur: 4 });
    g += etiq(x + 12, y + 22, a, { taille: 12.5, couleur: ROUGE, ancre: 'start' });
    if (b) g += etiq(x + 12, y + 37, b, { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  });
  g += etiq(rx - 30, yB + 52, 'ancêtre commun (à la racine)', { taille: 12.5, couleur: ATTENUE, ancre: 'start', italique: true });
  return enveloppe(W, H + 34, g);
};

/** Sélection naturelle (exemple de la fiche) : la proportion d'animaux clairs augmente au fil des générations. */
SCHEMAS['selection'] = ({ mode = 'pelage' } = {}) => {
  const W = 640, H = 280;
  const props = mode === 'pelage' ? [3, 6, 9] : [1, 6, 10];
  let g = '';
  const noms = mode === 'pelage' ? ['génération 1', 'génération 5', 'génération 10'] : ['avant l\'antibiotique', 'pendant le traitement', 'après le traitement'];
  props.forEach((n, li) => {
    const y = 60 + li * 76;
    g += texte(20, y + 6, noms[li], { taille: 13.5, ancre: 'start', gras: true });
    const total = mode === 'pelage' ? 10 : li === 1 ? 6 : 10;
    for (let i = 0; i < total; i++) {
      const x = 200 + i * 42;
      const clair = i < n;
      if (mode === 'pelage') g += `<ellipse cx="${x}" cy="${y}" rx="16" ry="12" fill="${clair ? '#ffffff' : '#7a5230'}" stroke="#4a3018" stroke-width="1.6"/>` + cercle(x + 14, y - 9, 6, { fond: clair ? '#ffffff' : '#7a5230', couleur: '#4a3018', epaisseur: 1.4 });
      else g += `<rect x="${x - 16}" y="${y - 8}" width="32" height="16" rx="8" fill="${clair ? ROUGE : '#9fc5f8'}" stroke="${clair ? '#7a1f1f' : BLEU}" stroke-width="1.6"/>`;
    }
    if (li < 2) g += fleche(150, y + 18, 150, y + 56, { couleur: ATTENUE, epaisseur: 1.8 });
  });
  if (mode === 'pelage') {
    g += texte(W / 2, 24, 'Dans un milieu enneigé, les animaux clairs survivent et se reproduisent davantage', { taille: 13.5, gras: true });
    g += `<ellipse cx="216" cy="270" rx="12" ry="8" fill="#ffffff" stroke="#4a3018" stroke-width="1.4"/>` + texte(234, 275, 'pelage clair', { taille: 12.5, ancre: 'start' });
    g += `<ellipse cx="356" cy="270" rx="12" ry="8" fill="#7a5230" stroke="#4a3018" stroke-width="1.4"/>` + texte(374, 275, 'pelage foncé', { taille: 12.5, ancre: 'start' });
  } else {
    g += texte(W / 2, 24, 'Une mutation rend par hasard quelques bactéries résistantes', { taille: 13.5, gras: true });
    g += `<rect x="200" y="262" width="26" height="14" rx="7" fill="${ROUGE}"/>` + texte(234, 274, 'résistante', { taille: 12.5, ancre: 'start' });
    g += `<rect x="350" y="262" width="26" height="14" rx="7" fill="#9fc5f8" stroke="${BLEU}"/>` + texte(384, 274, 'sensible', { taille: 12.5, ancre: 'start' });
  }
  return enveloppe(W, H + 6, g);
};

/** Du corps à l'ADN : cellule, noyau, chromosome, ADN (zoom successif, non à l'échelle). */
SCHEMAS['zoom-adn'] = ({ gene = true } = {}) => {
  const W = 680, H = 250;
  let g = '';
  // cellule
  g += cercle(80, 120, 60, { fond: '#fdeedd', couleur: '#b5651d', epaisseur: 2 }) + cercle(90, 116, 22, { fond: '#d9c3f0', couleur: VIOLET, epaisseur: 2 });
  g += texte(80, 214, 'cellule', { taille: 14, gras: true });
  // zoom vers le noyau
  g += ligne(102, 98, 210, 60, { couleur: ATTENUE, epaisseur: 1 }) + ligne(102, 134, 210, 180, { couleur: ATTENUE, epaisseur: 1 });
  g += cercle(270, 120, 60, { fond: '#efe4fa', couleur: VIOLET, epaisseur: 2 });
  for (const [x, y, a] of [[250, 100, 30], [290, 130, -20], [262, 146, 70], [292, 96, 100]]) g += `<g transform="rotate(${a} ${x} ${y})"><rect x="${x - 3}" y="${y - 16}" width="6" height="32" rx="3" fill="#7a3fb0"/><rect x="${x + 3}" y="${y - 16}" width="6" height="32" rx="3" fill="#a77bd6"/></g>`;
  g += texte(270, 214, 'noyau : chromosomes', { taille: 14, gras: true });
  // chromosome
  g += ligne(300, 90, 400, 50, { couleur: ATTENUE, epaisseur: 1 }) + ligne(300, 148, 400, 190, { couleur: ATTENUE, epaisseur: 1 });
  g += `<path d="M 423 50 Q 459 120 423 190" stroke="#7a3fb0" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M 463 50 Q 427 120 463 190" stroke="#a77bd6" stroke-width="16" fill="none" stroke-linecap="round"/>`;
  if (gene) g += `<rect x="424" y="80" width="18" height="14" fill="#ffd23f"/>` + etiq(398, 92, 'gène', { taille: 13, gras: true, couleur: '#8a6d00', ancre: 'end' });
  g += texte(443, 214, 'chromosome', { taille: 14, gras: true });
  // ADN
  g += ligne(452, 80, 540, 40, { couleur: ATTENUE, epaisseur: 1 }) + ligne(452, 100, 540, 200, { couleur: ATTENUE, epaisseur: 1 });
  let h1 = '', h2 = '', bar = '';
  for (let i = 0; i <= 80; i++) {
    const y = 40 + i * 2;
    const x1 = 600 + 34 * Math.sin(i * Math.PI / 20);
    const x2 = 600 - 34 * Math.sin(i * Math.PI / 20);
    h1 += `${i ? 'L' : 'M'} ${nb(x1)} ${y} `;
    h2 += `${i ? 'L' : 'M'} ${nb(x2)} ${y} `;
    if (i % 5 === 2) bar += ligne(x1, y, x2, y, { couleur: i % 10 === 2 ? VERT : ORANGE, epaisseur: 2.4 });
  }
  g += bar + `<path d="${h1}" fill="none" stroke="${BLEU}" stroke-width="3"/><path d="${h2}" fill="none" stroke="${ROUGE}" stroke-width="3"/>`;
  g += texte(600, 214, 'ADN (double hélice)', { taille: 14, gras: true });
  g += texte(W / 2, 244, 'zooms successifs, non à l\'échelle', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Phagocytose en trois étapes (schéma de principe). */
SCHEMAS['phagocytose'] = () => {
  const W = 660, H = 230;
  let g = '';
  const bact = (x, y, c = '#5cb85c') => `<rect x="${x - 12}" y="${y - 6}" width="24" height="12" rx="6" fill="${c}" stroke="#1e6b1e" stroke-width="1.4"/>`;
  const cell = (x, d) => `<path d="${d}" fill="#d6ecff" stroke="${BLEU}" stroke-width="2.2"/>` + cercle(x, 120, 16, { fond: '#b9a3e0', couleur: VIOLET, epaisseur: 1.6 });
  // 1. adhésion
  g += cell(110, 'M 50 120 C 50 70 170 70 170 120 C 170 170 50 170 50 120 Z') + bact(110, 77);
  g += texte(110, 30, '1. il touche le microbe', { taille: 13.5, gras: true }) + texte(110, 196, 'le phagocyte reconnaît', { taille: 12.5, couleur: ATTENUE }) + texte(110, 212, 'le microbe', { taille: 12.5, couleur: ATTENUE });
  // 2. ingestion (pseudopodes)
  g += cell(330, 'M 270 130 C 262 90 290 60 304 52 C 310 64 312 76 320 80 C 330 72 340 72 344 80 C 350 74 352 62 358 52 C 372 62 398 92 390 130 C 384 172 278 172 270 130 Z') + bact(332, 64);
  g += texte(330, 30, '2. il l\'englobe', { taille: 13.5, gras: true }) + texte(330, 196, 'il entoure le microbe', { taille: 12.5, couleur: ATTENUE });
  // 3. digestion
  g += cell(550, 'M 490 120 C 490 70 610 70 610 120 C 610 170 490 170 490 120 Z');
  g += cercle(572, 96, 14, { fond: '#fff3c2', couleur: '#a07a00', epaisseur: 1.4 }) + `<rect x="564" y="93" width="14" height="7" rx="3" fill="#9ccc65" opacity="0.6"/>`;
  g += texte(550, 30, '3. il le digère', { taille: 13.5, gras: true }) + texte(550, 196, 'le microbe est détruit', { taille: 12.5, couleur: ATTENUE });
  g += fleche(184, 120, 252, 120, { couleur: ATTENUE, epaisseur: 2 }) + fleche(404, 120, 474, 120, { couleur: ATTENUE, epaisseur: 2 });
  return enveloppe(W, H, g);
};

/** Réponse immunitaire : premier contact puis second contact avec le même microbe (allure des courbes). */
SCHEMAS['memoire-immunitaire'] = () => {
  const W = 640, H = 300, x0 = 60, x1 = 610, yb = 250, yt = 40;
  const X = (j) => x0 + (j / 80) * (x1 - x0);
  const Y = (q) => yb - q * (yb - yt);
  // allure : 1er contact à j = 0 (pic modeste vers j ≈ 14) ; 2e contact à j = 45 (montée rapide, pic plus haut)
  const f = (j) => {
    let q = 0;
    if (j > 5) q += 0.28 * Math.exp(-((j - 14) ** 2) / 30) * (j < 14 ? 1 : 1) + (j > 14 ? 0.06 * Math.min(1, (j - 14) / 10) : 0);
    if (j > 48) q += 0.86 * (1 - Math.exp(-(j - 48) / 2.6)) * Math.exp(-Math.max(0, j - 57) / 30);
    return q;
  };
  let d = '';
  for (let j = 0; j <= 80; j += 0.25) d += `${j ? 'L' : 'M'} ${nb(X(j))} ${nb(Y(f(j)))} `;
  let g = fleche(x0, yb, x1 + 16, yb, { couleur: AXE, epaisseur: 1.8 }) + fleche(x0, yb, x0, yt - 18, { couleur: AXE, epaisseur: 1.8 });
  g += `<path d="${d}" fill="none" stroke="${BLEU}" stroke-width="3"/>`;
  g += texte(x0 + 6, yt - 20, 'quantité d\'anticorps dans le sang', { taille: 13, ancre: 'start', couleur: ATTENUE });
  g += texte(x1 + 8, yb + 22, 'temps', { taille: 13, ancre: 'end', couleur: ATTENUE });
  for (const [j, t] of [[0, '1er contact'], [45, '2e contact']]) {
    g += fleche(X(j), yb + 34, X(j), yb + 6, { couleur: ROUGE, epaisseur: 2 });
    g += texte(X(j) + (j ? 0 : 30), yb + 48, t, { taille: 13, couleur: ROUGE, gras: true });
  }
  g += etiq(X(16), Y(0.36) - 6, 'réponse lente\net faible', { taille: 12.5, couleur: BLEU });
  g += etiq(X(66), Y(0.92) - 8, 'réponse rapide et forte', { taille: 12.5, couleur: BLEU });
  g += etiq(X(30), Y(0.16) - 4, 'lymphocytes\nmémoire conservés', { taille: 12, couleur: VIOLET });
  return enveloppe(W, H, g);
};

/** Reproduction sexuée (deux parents, descendants tous différents) et asexuée (clones). */
SCHEMAS['sexuee-asexuee'] = () => {
  const W = 660, H = 280;
  let g = '';
  const indiv = (x, y, c1, c2) => `<circle cx="${x}" cy="${y}" r="18" fill="${c1}" stroke="#333" stroke-width="1.4"/><path d="M ${x} ${y - 18} A 18 18 0 0 1 ${x} ${y + 18} Z" fill="${c2}" stroke="#333" stroke-width="1.4"/>`;
  const A = '#5b8def', B = '#f0a35e', Cc = '#7cc47a';
  // sexuée
  g += texte(165, 26, 'Reproduction sexuée', { taille: 15, gras: true, couleur: VIOLET });
  g += indiv(110, 74, A, A) + indiv(220, 74, B, B);
  g += texte(165, 80, '+', { taille: 22, gras: true });
  g += fleche(165, 100, 165, 140, { couleur: ATTENUE, epaisseur: 2 });
  g += texte(176, 126, 'fécondation', { taille: 12.5, couleur: ATTENUE, ancre: 'start' });
  g += indiv(80, 180, A, B) + indiv(140, 180, B, A) + indiv(200, 180, '#3f6fc4', '#f6c08a') + indiv(260, 180, '#d9822b', '#8fb3f5');
  g += texte(165, 230, 'descendants tous différents', { taille: 13, gras: true });
  g += texte(165, 248, '(mélange des deux parents)', { taille: 12.5, couleur: ATTENUE });
  // asexuée
  g += texte(495, 26, 'Reproduction asexuée', { taille: 15, gras: true, couleur: VERT });
  g += indiv(495, 74, Cc, Cc);
  g += fleche(495, 100, 495, 140, { couleur: ATTENUE, epaisseur: 2 });
  g += texte(506, 126, 'un seul parent', { taille: 12.5, couleur: ATTENUE, ancre: 'start' });
  g += indiv(405, 180, Cc, Cc) + indiv(465, 180, Cc, Cc) + indiv(525, 180, Cc, Cc) + indiv(585, 180, Cc, Cc);
  g += texte(495, 230, 'descendants identiques', { taille: 13, gras: true });
  g += texte(495, 248, '(des clones du parent)', { taille: 12.5, couleur: ATTENUE });
  g += ligne(330, 40, 330, 260, { couleur: GRILLE, epaisseur: 2 });
  return enveloppe(W, H, g);
};

// ───────────────────────── Poses : 4e, 3e ─────────────────────────
const APPRO = (titreCellule) => ({
  W: 660, H: 330,
  noeuds: [
    { id: 'd', x: 110, y: 56, t: 'appareil digestif\n(intestin grêle)', c: 'o' },
    { id: 'r', x: 550, y: 56, t: 'appareil respiratoire\n(poumons)', c: 'b' },
    { id: 's', x: 330, y: 150, t: 'sang\n(cœur, vaisseaux)', c: 'r', gras: true },
    { id: 'c', x: 330, y: 272, w: 400, t: titreCellule, c: 'v' },
  ],
  liens: [
    { de: 'd', a: 's', t: 'nutriments (glucose)', c: 'o', dx: -70, dy: -2 },
    { de: 'r', a: 's', t: 'dioxygène', c: 'b', dx: 40, dy: -12 },
    { de: 's', a: 'c', t: 'glucose + dioxygène', c: 'r', dx: 86, dy: 2 },
    { de: 's', a: 'r', via: [[600, 150]], t: 'dioxyde de carbone', c: 'vi', dx: -36, dy: 24 },
  ],
});

// 4e — Énergie dans l'organisme
pose('quatrieme/svt/energie-dans-lorganisme', 'respiration-cellulaire', 'diagramme', {
  W: 640, H: 200,
  noeuds: [
    { id: 'g', x: 90, y: 60, t: 'glucose\n(nutriment)', c: 'o' },
    { id: 'o', x: 90, y: 146, t: 'dioxygène', c: 'b' },
    { id: 'c', x: 320, y: 103, w: 150, h: 80, t: 'cellule\nrespiration\ncellulaire', c: 'v', gras: true },
    { id: 'e', x: 540, y: 34, t: 'énergie\n(dont chaleur)', c: 'j' },
    { id: 'co', x: 540, y: 110, t: 'dioxyde de carbone', c: 'vi' },
    { id: 'h', x: 540, y: 172, t: 'eau', c: 'b' },
  ],
  liens: [{ de: 'g', a: 'c' }, { de: 'o', a: 'c' }, { de: 'c', a: 'e' }, { de: 'c', a: 'co' }, { de: 'c', a: 'h' }],
}, 'La respiration cellulaire : chaque cellule consomme du glucose et du dioxygène, et produit de l\'énergie, du dioxyde de carbone et de l\'eau.', '## D\'où vient l\'énergie des cellules ?');
pose('quatrieme/svt/energie-dans-lorganisme', 'approvisionnement', 'diagramme', APPRO('toutes les cellules :\nglucose + dioxygène → énergie + CO₂ + eau'), 'Trois appareils coopèrent : le digestif fournit le glucose, le respiratoire le dioxygène, et le sang transporte tout jusqu\'aux cellules.', '## Comment les cellules sont-elles approvisionnées ?');

// 4e — Reproduction et transmission de la vie
pose('quatrieme/svt/reproduction-et-transmission-de-la-vie', 'fecondation', 'diagramme', {
  W: 640, H: 180,
  noeuds: [
    { id: 'm', x: 100, y: 50, t: 'spermatozoïde\ngamète mâle', c: 'b' },
    { id: 'f', x: 100, y: 134, t: 'ovule\ngamète femelle', c: 'r' },
    { id: 'o', x: 340, y: 92, t: 'cellule-œuf\n1re cellule', c: 'vi', gras: true },
    { id: 'e', x: 550, y: 92, t: 'embryon\npuis organisme', c: 'v' },
  ],
  liens: [{ de: 'm', a: 'o' }, { de: 'f', a: 'o' }, { de: 'o', a: 'e', t: 'divisions' }],
  extra: texte(238, 98, 'fécondation', { taille: 13, couleur: VIOLET, italique: true }),
}, 'La fécondation : un seul spermatozoïde s\'unit à un seul ovule ; la cellule-œuf formée se divise ensuite pour donner un embryon.', '## La reproduction sexuée');
pose('quatrieme/svt/reproduction-et-transmission-de-la-vie', 'sexuee-asexuee', 'sexuee-asexuee', {}, 'La reproduction sexuée mélange les informations des deux parents : les descendants sont tous différents. La reproduction asexuée donne des clones.', '## La reproduction asexuée');

// 4e — Séismes et volcans
pose('quatrieme/svt/seismes-et-volcans', 'seisme', 'seisme', {}, 'Un séisme : la rupture des roches se produit au foyer, en profondeur ; les ondes sismiques partent dans toutes les directions ; l\'épicentre est en surface.', '## Les séismes');
pose('quatrieme/svt/seismes-et-volcans', 'volcans', 'volcans', {}, 'Deux types d\'éruptions : un magma fluide donne des coulées de lave, un magma visqueux donne des explosions et des cendres (schémas de principe).', '## Les volcans');
pose('quatrieme/svt/seismes-et-volcans', 'risque', 'risque', {}, 'Le risque naît de la rencontre d\'un aléa naturel et d\'enjeux humains : sans habitants ni constructions, un séisme ne présente pas de risque.', '## Aléa, risque et prévention');

// 4e — Système nerveux
pose('quatrieme/svt/systeme-nerveux-et-comportement', 'trajet', 'chaine', {
  W: 660, etapes: ['stimulus\nla balle', 'récepteur\nl\'œil', 'centre nerveux\nle cerveau', 'effecteur\nun muscle', 'réponse\nle mouvement'], fleches: ['', 'nerf sensitif', 'nerf moteur', ''], couleurs: ['g', 'o', 'vi', 'r', 'v'], vertical: true, taille: 14,
}, 'Le trajet du message nerveux : le récepteur détecte le stimulus, le nerf sensitif va vers le centre nerveux, le nerf moteur en part vers le muscle.', '## Le trajet d\'un message nerveux');

// 4e — Tectonique
pose('quatrieme/svt/tectonique-des-plaques', 'globe', 'globe', { mode: 'simple' }, 'La structure de la Terre : croûte, manteau et noyau. La lithosphère rigide, découpée en plaques, comprend la croûte et le sommet du manteau.', '## La structure de la Terre');
pose('quatrieme/svt/tectonique-des-plaques', 'frontieres', 'frontieres', { niveau: '4e' }, 'Les trois types de frontières : écartement au niveau des dorsales, rapprochement avec subduction, coulissement le long d\'une faille (schémas de principe).', '## Des plaques mobiles');

// 3e — Activités humaines
pose('troisieme/svt/activites-humaines-et-environnement', 'effet-serre', 'effet-serre', {}, 'L\'effet de serre : les gaz à effet de serre renvoient vers le sol une partie de la chaleur qu\'il émet. Plus de CO₂ renforce ce phénomène naturel.', '## Le réchauffement climatique');
pose('troisieme/svt/activites-humaines-et-environnement', 'chaine-causes', 'chaine', {
  W: 640, etapes: ['combustion du charbon,\ndu pétrole et du gaz', 'plus de CO₂\ndans l\'atmosphère', 'effet de serre\nrenforcé', 'réchauffement\nclimatique', 'fonte des glaces,\nmontée des mers,\nmétéo extrême'], couleurs: ['g', 'vi', 'o', 'r', 'b'], vertical: true, taille: 14,
}, 'De la combustion des énergies fossiles au réchauffement climatique et à ses conséquences.', '## Le réchauffement climatique');

// 3e — Évolution
pose('troisieme/svt/evolution-des-especes', 'fossiles', 'strates', { fossiles: true }, 'Dans une série de couches non bouleversée, les plus profondes sont les plus anciennes : les fossiles qu\'elles contiennent sont donc plus anciens.', '## Des preuves du passé : les fossiles');
pose('troisieme/svt/evolution-des-especes', 'arbre', 'cladogramme', {}, 'Un arbre de parenté : chaque trait rouge marque un caractère partagé par toutes les espèces situées au-dessus. Le chat et l\'humain ont l\'ancêtre commun le plus récent.', '## Des parentés entre les êtres vivants');
pose('troisieme/svt/evolution-des-especes', 'selection', 'selection', { mode: 'pelage' }, 'L\'exemple de la fiche : dans un milieu enneigé, les animaux clairs survivent mieux ; de génération en génération, l\'allèle « pelage clair » devient majoritaire.', '## La sélection naturelle');

// 3e — Génétique
pose('troisieme/svt/genetique-et-heredite', 'zoom', 'zoom-adn', {}, 'De la cellule à l\'ADN : le noyau contient les chromosomes, chaque chromosome est un long filament d\'ADN, et un gène est une portion de cet ADN.', '## Chromosomes, gènes et allèles');
pose('troisieme/svt/genetique-et-heredite', 'transmission', 'diagramme', {
  W: 640, H: 260,
  noeuds: [
    { id: 'p', x: 120, y: 40, t: 'père : 46 chromosomes', c: 'b' },
    { id: 'm', x: 520, y: 40, t: 'mère : 46 chromosomes', c: 'r' },
    { id: 's', x: 120, y: 134, t: 'spermatozoïde\n23 chromosomes', c: 'b' },
    { id: 'o', x: 520, y: 134, t: 'ovule\n23 chromosomes', c: 'r' },
    { id: 'c', x: 320, y: 222, t: 'cellule-œuf : 46 chromosomes (23 paires)', c: 'vi', gras: true },
  ],
  liens: [
    { de: 'p', a: 's', t: 'un chromosome\nde chaque paire', c: 'g', dx: 10, dy: -2, ancre: 'start' },
    { de: 'm', a: 'o', t: 'un chromosome\nde chaque paire', c: 'g', dx: -10, dy: -2, ancre: 'end' },
    { de: 's', a: 'c', c: 'vi' }, { de: 'o', a: 'c', c: 'vi' },
  ],
  extra: texte(320, 166, 'fécondation', { taille: 13, couleur: VIOLET, italique: true }),
}, 'Les cellules reproductrices n\'ont que 23 chromosomes, un de chaque paire ; à la fécondation, la cellule-œuf retrouve 46 chromosomes.', '## La transmission de l\'information');

// 3e — Hormones
pose('troisieme/svt/hormones-et-reproduction', 'hormone', 'chaine', {
  W: 640, etapes: ['glande\n(ex. : testicule)', 'hormone dans le sang\n(ex. : testostérone)', 'organe cible'], fleches: ['libère', 'agit à distance'], couleurs: ['o', 'r', 'v'], taille: 14,
}, 'Une hormone est un message chimique : fabriquée par une glande, elle est transportée par le sang et agit à distance sur des organes cibles.', '## Qu\'est-ce qu\'une hormone ?');
pose('troisieme/svt/hormones-et-reproduction', 'cycle', 'cycle-feminin', {}, 'Le cycle féminin d\'environ 28 jours : ovulation vers le 14e jour, épaississement de la paroi de l\'utérus, puis règles s\'il n\'y a pas de fécondation.', '## Le fonctionnement chez la femme : le cycle');

// 3e — Immunité
pose('troisieme/svt/immunite-et-defenses', 'lignes', 'chaine', {
  W: 640, etapes: ['barrières naturelles\npeau, muqueuses', 'immunité innée\nrapide, contre tous les microbes\nphagocytose, inflammation', 'immunité adaptative\nlente mais ciblée\nlymphocytes B et T'], couleurs: ['g', 'o', 'vi'], fleches: ['si le microbe entre', 'si l\'infection persiste'], vertical: true, taille: 14,
}, 'Les défenses de l\'organisme s\'enchaînent : barrières naturelles, puis immunité innée rapide, puis immunité adaptative ciblée si l\'infection persiste.', '## La première ligne de défense : les barrières naturelles');
pose('troisieme/svt/immunite-et-defenses', 'phagocytose', 'phagocytose', {}, 'La phagocytose : le phagocyte, un globule blanc, entoure le microbe, l\'englobe puis le digère (schéma de principe).', '## L\'immunité innée : la réaction rapide');
pose('troisieme/svt/immunite-et-defenses', 'memoire', 'memoire-immunitaire', {}, 'Allure de la réponse immunitaire : lors d\'un second contact avec le même microbe, les anticorps sont produits plus vite et en plus grande quantité.', '## La mémoire immunitaire');

// ───────────────────────── Dessins seconde ─────────────────────────

/** ADN « déroulé » : deux brins complémentaires (A–T, C–G). */
SCHEMAS['adn-echelle'] = ({ seq = 'ATGCCTAG' } = {}) => {
  const W = 640, H = 270;
  const comp = { A: 'T', T: 'A', C: 'G', G: 'C' };
  const col = { A: '#e0703a', T: '#3a8fd6', C: '#3aa65a', G: '#b04ad0' };
  const n = seq.length, pas = 62, x0 = (W - (n - 1) * pas) / 2;
  let g = '';
  g += ligne(x0 - 30, 70, x0 + (n - 1) * pas + 30, 70, { couleur: ENCRE, epaisseur: 5 });
  g += ligne(x0 - 30, 190, x0 + (n - 1) * pas + 30, 190, { couleur: ENCRE, epaisseur: 5 });
  [...seq].forEach((b, i) => {
    const x = x0 + i * pas, c = comp[b];
    g += `<rect x="${x - 13}" y="74" width="26" height="54" rx="4" fill="${col[b]}"/>` + texte(x, 108, b, { taille: 18, gras: true, couleur: '#ffffff' });
    g += `<rect x="${x - 13}" y="132" width="26" height="54" rx="4" fill="${col[c]}"/>` + texte(x, 166, c, { taille: 18, gras: true, couleur: '#ffffff' });
  });
  g += texte(x0 - 34, 75, 'brin 1', { taille: 13, ancre: 'end', gras: true }) + texte(x0 - 34, 195, 'brin 2', { taille: 13, ancre: 'end', gras: true });
  g += `<rect x="${x0 - 22}" y="60" width="44" height="140" rx="8" fill="none" stroke="${ROUGE}" stroke-width="2" stroke-dasharray="5 4"/>`;
  g += texte(x0, 220, 'une paire de nucléotides', { taille: 12.5, couleur: ROUGE });
  g += texte(W / 2, 36, 'A en face de T, C en face de G : les deux brins sont complémentaires', { taille: 14, gras: true });
  g += texte(W / 2, 256, 'molécule représentée déroulée (en réalité, les brins forment une double hélice)', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Zone habitable : distances au Soleil à l'échelle (unité astronomique, UA). */
SCHEMAS['zone-habitable'] = () => {
  const W = 660, H = 220, x0 = 40, x1 = 620;
  const X = (ua) => x0 + (ua / 1.7) * (x1 - x0);
  let g = '';
  g += `<rect x="${nb(X(0.95))}" y="56" width="${nb(X(1.37) - X(0.95))}" height="94" fill="#cdeccf" stroke="${VERT}" stroke-width="1.4" stroke-dasharray="5 4"/>`;
  g += texte((X(0.95) + X(1.37)) / 2, 46, 'zone habitable', { taille: 14, gras: true, couleur: VERT });
  g += texte((X(0.95) + X(1.37)) / 2, 170, '(limites approximatives)', { taille: 12, couleur: VERT });
  g += `<path d="M ${x0 - 40} 40 Q ${x0 + 8} 105 ${x0 - 40} 170 Z" fill="#ffd23f" stroke="#d18f00" stroke-width="2"/>`;
  g += fleche(x0, 105, x1 + 20, 105, { couleur: AXE, epaisseur: 1.5 });
  for (const ua of [0, 0.5, 1, 1.5]) g += ligne(X(ua), 100, X(ua), 110, { couleur: AXE, epaisseur: 1.4 }) + texte(X(ua), 196, `${String(ua).replace('.', ',')} UA`, { taille: 11.5, couleur: ATTENUE });
  for (const [n, ua, r, c] of [['Mercure', 0.39, 7, '#9e9e9e'], ['Vénus', 0.72, 11, '#e3c07a'], ['Terre', 1.0, 11.5, '#4f8fe0'], ['Mars', 1.52, 8, '#d0653a']]) {
    g += cercle(X(ua), 105, r, { fond: c, couleur: '#444', epaisseur: 1.2 }) + texte(X(ua), 84 - r + 6, n, { taille: 13, gras: n === 'Terre' });
  }
  g += texte(X(0.3), 150, 'trop chaud', { taille: 12.5, couleur: ROUGE }) + texte(X(1.58), 150, 'trop froid', { taille: 12.5, couleur: BLEU });
  g += texte(W - 10, 20, 'distances au Soleil à l\'échelle ; tailles non à l\'échelle', { taille: 11.5, couleur: ATTENUE, italique: true, ancre: 'end' });
  return enveloppe(W, H, g);
};

/** Muscles antagonistes du bras (flexion du coude), schéma simplifié. */
SCHEMAS['antagonistes'] = () => {
  const W = 620, H = 330;
  let g = '';
  const os = '#f3ead2', osB = '#8a7a5a';
  // os du bras (humérus) vertical, os de l'avant-bras horizontal
  g += `<rect x="190" y="40" width="22" height="200" rx="10" fill="${os}" stroke="${osB}" stroke-width="2"/>`;
  g += `<rect x="186" y="232" width="250" height="20" rx="10" fill="${os}" stroke="${osB}" stroke-width="2"/>`;
  g += cercle(201, 242, 16, { fond: os, couleur: osB, epaisseur: 2 });
  // biceps (devant, contracté : court et gonflé)
  g += `<path d="M 214 66 C 290 90 300 190 246 230" fill="#e57373" stroke="#9c2a2a" stroke-width="2"/>`;
  g += `<path d="M 214 66 C 250 120 250 190 246 230" fill="#e57373" stroke="#9c2a2a" stroke-width="2"/>`;
  g += ligne(246, 228, 250, 236, { couleur: '#f5f5f5', epaisseur: 5 }) + ligne(246, 228, 250, 236, { couleur: '#999', epaisseur: 1 });
  // triceps (derrière, relâché : long et fin), attaché derrière le coude
  g += `<path d="M 188 60 C 160 100 160 200 182 252" fill="none" stroke="#c98a8a" stroke-width="14" stroke-linecap="round"/>`;
  // tendons
  // flèche du mouvement
  g += flecheCourbe(420, 226, 360, 120, 18, { couleur: VERT, epaisseur: 2.6 });
  g += texte(450, 160, 'flexion', { taille: 14, gras: true, couleur: VERT, ancre: 'start' });
  const lab = (x1, y1, x2, y2, t, c = ENCRE, ancre = 'start') => ligne(x1, y1, x2, y2, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(x2 + (ancre === 'end' ? -6 : 6), y2 + 5, t, { taille: 13.5, ancre, couleur: c });
  g += lab(272, 140, 340, 70, 'biceps : se contracte', '#9c2a2a');
  g += lab(163, 150, 100, 120, 'triceps :', '#9c5a5a', 'end');
  g += texte(94, 143, 'se relâche', { taille: 13.5, ancre: 'end', couleur: '#9c5a5a' });
  g += lab(201, 100, 100, 60, 'os du bras', osB, 'end');
  g += lab(320, 252, 330, 290, 'os de l\'avant-bras', osB);
  g += lab(248, 232, 300, 300, '', ATTENUE);
  g += texte(306, 318, 'tendon (relie le muscle à l\'os)', { taille: 12.5, couleur: ATTENUE, ancre: 'start' });
  g += texte(W / 2, 22, 'Schéma simplifié du bras', { taille: 13, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

// ───────────────────────── Poses : seconde ─────────────────────────
pose('seconde/svt/adn-et-information-genetique', 'zoom', 'zoom-adn', {}, 'Chez les eucaryotes, l\'ADN est dans le noyau, sous forme de chromosomes ; un gène est une portion d\'ADN (zooms successifs, non à l\'échelle).', '## Où trouve-t-on l\'ADN ?');
pose('seconde/svt/adn-et-information-genetique', 'complementarite', 'adn-echelle', { seq: 'ATGCCTAG' }, 'Les deux brins d\'ADN sont complémentaires : en face de A se trouve T, en face de C se trouve G. Connaître un brin permet de déduire l\'autre.', '## La structure de l\'ADN');

pose('seconde/svt/biodiversite-et-evolution', 'niveaux', 'cartes', {
  W: 660, parLigne: 3, h: 100, taille: 13,
  cartes: [
    { t: 'écosystèmes', s: 'forêts, océans,\nprairies, récifs…', c: 'v' },
    { t: 'espèces', s: 'nombre et variété\ndes espèces', c: 'b' },
    { t: 'gènes', s: 'allèles différents\nau sein d\'une espèce', c: 'vi' },
  ],
}, 'Les trois niveaux de la biodiversité : la diversité des écosystèmes, celle des espèces et la diversité génétique au sein de chaque espèce.', '## Les trois niveaux de biodiversité');
pose('seconde/svt/biodiversite-et-evolution', 'selection', 'selection', { mode: 'antibiotique' }, 'La sélection naturelle par un antibiotique : les bactéries sensibles meurent, les résistantes survivent et se multiplient. La résistance existait avant le traitement.', '## Les forces qui font évoluer les populations');

pose('seconde/svt/corps-humain-et-effort-physique', 'antagonistes', 'antagonistes', {}, 'Muscles antagonistes : pour plier le coude, le biceps se contracte et tire sur l\'avant-bras pendant que le triceps se relâche (schéma simplifié).', '## Le muscle, moteur du mouvement');
pose('seconde/svt/corps-humain-et-effort-physique', 'coordination', 'diagramme', APPRO('cellules musculaires (mitochondries) :\nglucose + dioxygène → énergie + CO₂'), 'Pendant l\'effort, trois systèmes coopèrent pour approvisionner les muscles en glucose et en dioxygène et évacuer le dioxyde de carbone.', '## La coordination des systèmes');

pose('seconde/svt/la-cellule-unite-du-vivant', 'eu-procaryote', 'cellules', { type: 'eu-procaryote' }, 'Cellule eucaryote et cellule procaryote : toutes deux ont une membrane, un cytoplasme et de l\'ADN, mais seule l\'eucaryote a un noyau (schémas simplifiés).', '## Cellules avec ou sans noyau');
pose('seconde/svt/la-cellule-unite-du-vivant', 'animale-vegetale', 'cellules', { type: 'animale-vegetale' }, 'Cellule animale et cellule végétale chlorophyllienne : la cellule végétale a en plus une paroi, des chloroplastes et une grande vacuole (schémas simplifiés).', '## Cellule animale et cellule végétale');

pose('seconde/svt/la-terre-dans-le-systeme-solaire', 'familles', 'planetes', { familles: 'telluriques' }, 'Les huit planètes : quatre planètes telluriques, rocheuses et denses, puis quatre planètes gazeuses géantes (tailles et distances non à l\'échelle).', '## Le système solaire');
pose('seconde/svt/la-terre-dans-le-systeme-solaire', 'zone-habitable', 'zone-habitable', {}, 'Les planètes telluriques placées à leur vraie distance du Soleil : seule la Terre se trouve dans la zone où l\'eau peut rester liquide en surface.', '## Pourquoi la vie est-elle possible sur Terre ?');

pose('seconde/svt/metabolisme-des-cellules', 'cellule-chloro', 'diagramme', {
  W: 680, H: 300,
  noeuds: [
    { id: 'l', x: 80, y: 40, t: 'lumière', c: 'j', gras: true },
    { id: 'in', x: 80, y: 150, t: 'eau\n+ CO₂', c: 'b' },
    { id: 'ch', x: 290, y: 100, w: 190, h: 74, t: 'chloroplaste\nphotosynthèse\n(à la lumière)', c: 'v', gras: true },
    { id: 'o2', x: 520, y: 40, t: 'dioxygène', c: 'b' },
    { id: 'mi', x: 290, y: 236, w: 190, h: 74, t: 'mitochondrie\nrespiration\n(en permanence)', c: 'o', gras: true },
    { id: 'out', x: 560, y: 236, t: 'CO₂ + eau\n+ énergie utilisable', c: 'g' },
    { id: 'o2b', x: 80, y: 252, t: 'dioxygène', c: 'b' },
  ],
  liens: [
    { de: 'l', a: 'ch' }, { de: 'in', a: 'ch' }, { de: 'ch', a: 'o2' },
    { de: 'ch', a: 'mi', t: 'matière organique (glucose)', c: 'v', dx: 92, dy: 4 },
    { de: 'o2b', a: 'mi' }, { de: 'mi', a: 'out' },
  ],
}, 'Dans une cellule chlorophyllienne : la photosynthèse, dans les chloroplastes, fabrique de la matière organique ; la respiration, dans les mitochondries, en libère l\'énergie.', '## La respiration cellulaire');
pose('seconde/svt/metabolisme-des-cellules', 'auto-hetero', 'cartes', {
  W: 640, parLigne: 2, h: 100, taille: 13,
  cartes: [
    { t: 'Autotrophe', s: 'fabrique sa matière organique\nà partir de matière minérale\ncellules chlorophylliennes', c: 'v' },
    { t: 'Hétérotrophe', s: 'prélève de la matière organique\ndéjà formée\ncellules animales, champignons', c: 'o' },
  ],
}, 'Deux grands métabolismes : les cellules autotrophes fabriquent leur matière organique, les cellules hétérotrophes la prélèvent dans leur milieu.', '## Deux grands métabolismes cellulaires');

// ───────────────────────── Dessins première ─────────────────────────

/** Coupe dorsale → subduction (schéma de principe, non à l'échelle). */
SCHEMAS['dorsale-subduction'] = ({ ages = true, flux = true, transferts = false } = {}) => {
  const W = 680, H = 360, mer = 60, xr = 200, xf = 470;
  const fond = (x) => 88 + 2 * Math.sqrt(Math.abs(x - xr));
  const base = (x) => 96 + 6.2 * Math.sqrt(Math.abs(x - xr));
  let g = `<rect x="0" y="0" width="${W}" height="${H}" fill="#f6d0a0"/>`;
  g += `<rect x="0" y="0" width="${W}" height="${mer}" fill="#f4f9ff"/>`;
  // eau de mer
  let eau = `M 0 ${mer}`;
  for (let x = 0; x <= xf; x += 5) eau += ` L ${x} ${nb(fond(x))}`;
  eau += ` L ${xf} ${mer} Z`;
  g += `<path d="${eau}" fill="#9fd0ff"/>`;
  // lithosphère océanique (gauche et droite de la dorsale)
  let li = `M 0 ${nb(fond(0))}`;
  for (let x = 0; x <= xf; x += 5) li += ` L ${x} ${nb(fond(x))}`;
  const ang = (40 * Math.PI) / 180, L = 240;
  const tx = xf + L * Math.cos(ang), ty = fond(xf) + L * Math.sin(ang);
  const ep = base(xf) - fond(xf);
  const tB = (ep - ep * Math.cos(ang)) / Math.sin(ang);
  li += ` L ${nb(tx)} ${nb(ty)} L ${nb(tx - ep * Math.sin(ang))} ${nb(ty + ep * Math.cos(ang))} L ${nb(xf - ep * Math.sin(ang) + tB * Math.cos(ang))} ${nb(fond(xf) + ep)}`;
  for (let x = xf - 5; x >= 0; x -= 5) li += ` L ${x} ${nb(base(x))}`;
  li += ' Z';
  g += `<path d="${li}" fill="#8d6e4a" stroke="#4a3a2a" stroke-width="1.4"/>`;
  // lithosphère continentale (chevauche la plaque plongeante)
  const sur = (x) => fond(xf) + (x - xf) * Math.tan(ang);
  let co = `M ${xf - 6} ${mer} L 520 34 L 560 22 L 600 34 L 680 40 L 680 230`;
  for (let x = 680; x >= xf; x -= 10) co += ` L ${x} ${nb(Math.min(230, sur(x) - 2))}`;
  co += ' Z';
  g += `<path d="${co}" fill="#c9a06a" stroke="#4a3a2a" stroke-width="1.4"/>`;
  g += `<path d="M 548 26 L 560 6 L 572 24 Z" fill="#8a3a1a"/>`;
  // remontée à la dorsale
  g += `<path d="M ${xr - 8} ${H} L ${xr - 3} ${fond(xr) + 2} L ${xr + 3} ${fond(xr) + 2} L ${xr + 8} ${H} Z" fill="#e8553b" opacity="0.55"/>`;
  // mouvements des plaques
  g += fleche(xr - 30, mer + 10, xr - 110, mer + 10, { couleur: ENCRE, epaisseur: 2.4 }) + fleche(xr + 30, mer + 10, xr + 110, mer + 10, { couleur: ENCRE, epaisseur: 2.4 });
  // convection dans le manteau
  g += flecheCourbe(xf - 20, 300, xr + 24, 336, 22, { couleur: ROUGE, epaisseur: 2, pointilles: true });
  g += flecheCourbe(30, 300, xr - 24, 336, -22, { couleur: ROUGE, epaisseur: 2, pointilles: true });
  g += fleche(xr, 340, xr, 250, { couleur: ROUGE, epaisseur: 2.4 });
  // étiquettes
  g += etiq(xr, 22, 'dorsale', { taille: 14, gras: true });
  g += etiq(xf - 10, 22, 'fosse', { taille: 13, gras: true, couleur: '#1f4f8a' });
  g += etiq(100, 170, 'lithosphère océanique', { taille: 13, couleur: '#ffffff', fond: '#8d6e4a' });
  g += etiq(610, 120, 'lithosphère\ncontinentale', { taille: 13, couleur: '#3d2f14', fond: '#c9a06a' });
  g += etiq(560, 300, 'subduction', { taille: 13.5, gras: true, couleur: '#3d2f14', fond: '#f6d0a0' });
  g += etiq(330, 300, transferts ? 'manteau : convection\n(la matière se déplace)' : 'asthénosphère (ductile)', { taille: 13, couleur: '#8a3f00', fond: '#f6d0a0' });
  if (ages) {
    g += etiq(xr - 50, 112, 'jeune', { taille: 12, couleur: '#ffffff', fond: '#8d6e4a' }) + etiq(xr + 50, 112, 'jeune', { taille: 12, couleur: '#ffffff', fond: '#8d6e4a' });
    g += etiq(400, 150, 'plus ancienne,\nplus froide et dense', { taille: 12, couleur: '#ffffff', fond: '#8d6e4a' });
  }
  if (flux) {
    g += etiq(xr + 4, 48, 'flux de chaleur élevé', { taille: 12, couleur: ROUGE, ancre: 'start' });
    g += etiq(xf - 4, 48, 'flux faible', { taille: 12, couleur: BLEU, ancre: 'end' });
  }
  if (transferts) g += etiq(330, 128, 'lithosphère : conduction', { taille: 12, couleur: '#ffffff', fond: '#8d6e4a' });
  g += texte(W - 6, H - 8, 'schéma non à l\'échelle', { taille: 11.5, couleur: ATTENUE, italique: true, ancre: 'end' });
  return enveloppe(W, H, g);
};

/** Expression d'un gène : transcription dans le noyau, traduction dans le cytoplasme. */
SCHEMAS['expression'] = () => {
  const W = 680, H = 330;
  let g = `<rect x="10" y="10" width="660" height="310" rx="40" fill="#fdeedd" stroke="#b5651d" stroke-width="2"/>`;
  g += texte(560, 40, 'cytoplasme', { taille: 13, couleur: '#8a4b00', gras: true });
  g += `<ellipse cx="200" cy="170" rx="160" ry="120" fill="#efe4fa" stroke="${VIOLET}" stroke-width="2.4"/>`;
  g += `<rect x="352" y="150" width="16" height="18" fill="#fdeedd"/>`;
  g += texte(200, 74, 'noyau', { taille: 14, gras: true, couleur: VIOLET });
  // ADN avec un gène
  g += ligne(70, 120, 330, 120, { couleur: BLEU, epaisseur: 3 }) + ligne(70, 130, 330, 130, { couleur: ROUGE, epaisseur: 3 });
  g += `<rect x="150" y="114" width="110" height="22" fill="#ffd23f" opacity="0.6"/>`;
  g += texte(205, 108, 'gène (ADN)', { taille: 13, gras: true, couleur: '#8a6d00' });
  // transcription → ARNm
  g += fleche(205, 140, 205, 176, { couleur: VIOLET, epaisseur: 2.4 });
  g += etiq(215, 162, 'transcription', { taille: 13, couleur: VIOLET, italique: true, ancre: 'start' });
  g += `<path d="M 150 196 q 10 -8 20 0 t 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="${VERT}" stroke-width="3"/>`;
  g += texte(205, 222, 'ARNm', { taille: 13.5, gras: true, couleur: VERT });
  // sortie par un pore
  g += `<path d="M 262 196 C 320 196 330 160 370 160 L 420 160" fill="none" stroke="${VERT}" stroke-width="2" stroke-dasharray="5 4"/>`;
  g += etiq(360, 140, 'pore nucléaire', { taille: 12, couleur: VIOLET });
  // ARNm dans le cytoplasme + ribosome + protéine
  g += `<path d="M 420 200 q 10 -8 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="${VERT}" stroke-width="3"/>`;
  g += `<ellipse cx="520" cy="188" rx="26" ry="18" fill="#9ccc65" stroke="#2e7d32" stroke-width="1.6" opacity="0.9"/>` + `<ellipse cx="520" cy="210" rx="30" ry="12" fill="#7cb342" stroke="#2e7d32" stroke-width="1.6" opacity="0.9"/>`;
  g += etiq(520, 246, 'ribosome', { taille: 13, couleur: '#2e7d32', gras: true });
  const perles = [[520, 166], [508, 148], [500, 128], [504, 108], [518, 92], [536, 82]];
  perles.forEach(([x, y], i) => { g += cercle(x, y, 8, { fond: ['#e57373', '#64b5f6', '#ffb74d', '#ba68c8', '#4db6ac', '#f06292'][i], couleur: '#555', epaisseur: 1 }); });
  g += etiq(552, 112, 'protéine\n(chaîne\nd\'acides aminés)', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += etiq(450, 286, 'traduction : lecture codon par codon', { taille: 13, couleur: '#2e7d32', italique: true });
  return enveloppe(W, H, g);
};

/** Transcription puis lecture des codons (code génétique réel). */
SCHEMAS['codons'] = () => {
  const W = 680, H = 280;
  const arnm = ['AUG', 'GCU', 'UUU', 'GGC', 'UAA'];
  const comp = { A: 'T', U: 'A', G: 'C', C: 'G' };
  const aa = ['méthionine', 'alanine', 'phénylalanine', 'glycine', 'stop'];
  const x0 = 70, pas = 116;
  let g = '';
  g += texte(14, 64, 'ADN', { taille: 12.5, ancre: 'start', gras: true, couleur: BLEU }) + texte(14, 80, '(brin transcrit)', { taille: 11.5, ancre: 'start', couleur: BLEU });
  g += texte(14, 140, 'ARNm', { taille: 12.5, ancre: 'start', gras: true, couleur: VERT });
  g += texte(14, 224, 'protéine', { taille: 12.5, ancre: 'start', gras: true, couleur: ROUGE });
  arnm.forEach((c, i) => {
    const x = x0 + 60 + i * pas;
    const adn = [...c].map((b) => comp[b]).join(' ');
    g += texte(x, 72, adn, { taille: 17, couleur: BLEU, gras: true });
    g += `<rect x="${x - 46}" y="116" width="92" height="34" rx="6" fill="#e8f5ee" stroke="${VERT}" stroke-width="1.8"/>` + texte(x, 139, c.split('').join(' '), { taille: 17, gras: true, couleur: '#1a5c38' });
    g += fleche(x, 84, x, 112, { couleur: ATTENUE, epaisseur: 1.4, pointe: 7 });
    g += fleche(x, 154, x, 196, { couleur: ATTENUE, epaisseur: 1.4, pointe: 7 });
    if (i < 4) g += `<ellipse cx="${x}" cy="220" rx="50" ry="16" fill="#fbecec" stroke="${ROUGE}" stroke-width="1.6"/>` + texte(x, 225, aa[i], { taille: 13, couleur: '#7a1f1f' });
    else g += texte(x, 225, 'codon-stop : fin', { taille: 13, gras: true, couleur: ROUGE });
  });
  g += texte(x0 + 60, 172, 'codon-start', { taille: 11.5, couleur: VERT, italique: true });
  g += texte(W / 2, 26, 'Transcription (A→U, T→A, G→C, C→G), puis lecture de l\'ARNm par codons de 3 bases', { taille: 13.5, gras: true });
  g += texte(W / 2, 266, 'chaque codon désigne un acide aminé (ou l\'arrêt), d\'après le code génétique', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Les trois types de mutations, sur l'exemple de la fiche (…GATTACA…). */
SCHEMAS['types-mutations'] = () => {
  const W = 660, H = 300;
  const lignes = [
    ['séquence de départ', 'GATTACA', []],
    ['substitution', 'GACTACA', [2]],
    ['délétion', 'GA-TACA', [2]],
    ['insertion', 'GATTTACA', [4]],
  ];
  let g = '';
  lignes.forEach(([nom, seq, chg], li) => {
    const y = 50 + li * 64;
    g += texte(170, y + 6, nom, { taille: 14.5, gras: true, ancre: 'end', couleur: li ? VIOLET : ENCRE });
    [...seq].forEach((b, i) => {
      const x = 210 + i * 46;
      const change = chg.includes(i);
      if (b === '-') { g += `<rect x="${x - 18}" y="${y - 18}" width="36" height="36" rx="5" fill="none" stroke="${ROUGE}" stroke-width="2" stroke-dasharray="4 3"/>`; return; }
      g += `<rect x="${x - 18}" y="${y - 18}" width="36" height="36" rx="5" fill="${change ? '#fbecec' : '#eef3fb'}" stroke="${change ? ROUGE : BLEU}" stroke-width="${change ? 2.6 : 1.4}"/>`;
      g += texte(x, y + 7, b, { taille: 18, gras: true, couleur: change ? ROUGE : ENCRE });
    });
  });
  g += texte(W / 2, 290, 'en rouge : la base modifiée, supprimée ou ajoutée', { taille: 12.5, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Échiquier de croisement : deux parents porteurs sains (maladie récessive). */
SCHEMAS['echiquier'] = () => {
  const W = 600, H = 352, x0 = 230, y0 = 90, c = 110;
  let g = '';
  g += texte(W / 2, 26, 'Deux parents porteurs sains (A : allèle normal, a : allèle muté récessif)', { taille: 13.5, gras: true });
  g += texte(x0 + c, 66, 'gamètes du père', { taille: 13, couleur: BLEU, gras: true });
  g += texte(x0 - 24, y0 + c, 'gamètes de la mère', { taille: 13, couleur: ROUGE, gras: true, ancre: 'end' });
  ['A', 'a'].forEach((a, i) => {
    g += texte(x0 + c / 2 + i * c, y0 - 6, a, { taille: 18, gras: true, couleur: BLEU });
    g += texte(x0 - 12, y0 + c / 2 + 6 + i * c, a, { taille: 18, gras: true, couleur: ROUGE, ancre: 'end' });
  });
  const cases = [['AA', 'non porteur', 'v'], ['Aa', 'porteur sain', 'j'], ['Aa', 'porteur sain', 'j'], ['aa', 'malade', 'r']];
  cases.forEach(([geno, nom, col], k) => {
    const i = k % 2, j = Math.floor(k / 2);
    const x = x0 + i * c, y = y0 + j * c;
    g += `<rect x="${x}" y="${y}" width="${c}" height="${c}" fill="${TEINTES[col].fond}" stroke="${TEINTES[col].bord}" stroke-width="2"/>`;
    g += texte(x + c / 2, y + 50, geno, { taille: 22, gras: true });
    g += texte(x + c / 2, y + 76, nom, { taille: 13 });
  });
  g += texte(W / 2, 340, 'à chaque naissance : 1 risque sur 4 d\'être malade (aa)', { taille: 13.5, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
};

// ───────────────────────── Dessins terminale ─────────────────────────

/** Un chromosome dessiné (1 ou 2 chromatides) : segments colorés [{c, t}] de haut en bas. */
function chromosome(x, y, h, couleurs, { chromatides = 2, l = 9, alleles = null } = {}) {
  let g = '';
  const cs = Array.isArray(couleurs[0]) ? couleurs : [couleurs, couleurs];
  for (let k = 0; k < chromatides; k++) {
    const xx = x + (chromatides === 2 ? (k ? l / 2 + 1 : -l / 2 - 1) : 0);
    const segs = cs[k];
    segs.forEach((c, i) => {
      const y1 = y + (i * h) / segs.length, y2 = y + ((i + 1) * h) / segs.length;
      g += `<rect x="${nb(xx - l / 2)}" y="${nb(y1)}" width="${l}" height="${nb(y2 - y1)}" fill="${c}"/>`;
    });
    g += `<rect x="${nb(xx - l / 2)}" y="${y}" width="${l}" height="${h}" rx="${l / 2}" fill="none" stroke="#333" stroke-width="1"/>`;
  }
  if (chromatides === 2) g += cercle(x, y + h * 0.42, 3.2, { fond: '#333', couleur: '#333', epaisseur: 0.5 });
  if (alleles) alleles.forEach(([t, yy, cote]) => { g += texte(x + cote * 16, y + yy * h + 5, t, { taille: 13, gras: true, ancre: cote < 0 ? 'end' : 'start' }); });
  return g;
}

/** Méiose d'une cellule à 2n = 4 (deux paires) : une seule disposition possible représentée. */
SCHEMAS['meiose'] = () => {
  const W = 680, H = 340;
  const P = '#5b8def', M = '#e57373';
  let g = '';
  const cell = (x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#f7f3ea" stroke="#8a7a5a" stroke-width="2"/>`;
  // cellule de départ (après réplication)
  g += cell(100, 170, 80, 80);
  g += chromosome(66, 120, 70, [P]) + chromosome(96, 120, 70, [M]) + chromosome(122, 180, 40, [P]) + chromosome(150, 180, 40, [M]);
  g += texte(100, 276, 'cellule 2n = 4', { taille: 13, gras: true }) + texte(100, 292, 'chromosomes répliqués', { taille: 12, couleur: ATTENUE }) + texte(100, 308, '(2 chromatides)', { taille: 12, couleur: ATTENUE });
  g += fleche(186, 170, 236, 110, { couleur: ATTENUE, epaisseur: 2 }) + fleche(186, 170, 236, 230, { couleur: ATTENUE, epaisseur: 2 });
  g += etiq(222, 172, 'division I', { taille: 13, gras: true, couleur: VIOLET });
  // division I : les homologues se séparent
  g += cell(290, 100, 50, 56) + chromosome(276, 66, 70, [P]) + chromosome(304, 80, 40, [M]);
  g += cell(290, 240, 50, 56) + chromosome(276, 206, 70, [M]) + chromosome(304, 220, 40, [P]);
  g += texte(290, 316, 'n = 2 (2 chromatides)', { taille: 12.5, couleur: ATTENUE });
  // division II : les chromatides se séparent
  g += fleche(344, 100, 400, 60, { couleur: ATTENUE, epaisseur: 2 }) + fleche(344, 100, 400, 130, { couleur: ATTENUE, epaisseur: 2 });
  g += fleche(344, 240, 400, 210, { couleur: ATTENUE, epaisseur: 2 }) + fleche(344, 240, 400, 280, { couleur: ATTENUE, epaisseur: 2 });
  g += etiq(372, 172, 'division II', { taille: 13, gras: true, couleur: VIOLET });
  [[440, 56, P, M], [440, 134, P, M], [440, 206, M, P], [440, 284, M, P]].forEach(([x, y, c1, c2]) => {
    g += cell(x, y, 30, 34) + chromosome(x - 8, y - 22, 40, [c1], { chromatides: 1 }) + chromosome(x + 10, y - 12, 24, [c2], { chromatides: 1 });
  });
  g += texte(560, 150, '4 gamètes', { taille: 14, gras: true }) + texte(560, 168, 'haploïdes (n = 2)', { taille: 13 });
  g += `<rect x="500" y="250" width="14" height="14" fill="${P}"/>` + texte(520, 262, 'origine paternelle', { taille: 12, ancre: 'start' });
  g += `<rect x="500" y="274" width="14" height="14" fill="${M}"/>` + texte(520, 286, 'origine maternelle', { taille: 12, ancre: 'start' });
  g += texte(W / 2, 24, 'Une seule réplication, puis deux divisions (une des dispositions possibles)', { taille: 13.5, gras: true });
  return enveloppe(W, H, g);
};

/** Crossing-over entre chromatides de deux chromosomes homologues (gènes liés A/a et B/b). */
SCHEMAS['crossing-over'] = () => {
  const W = 660, H = 300;
  const P = '#5b8def', M = '#e57373';
  let g = '';
  // avant : paire d'homologues
  g += chromosome(80, 60, 170, [P, P], { alleles: [['A', 0.15, -1], ['B', 0.8, -1]] }) + chromosome(126, 60, 170, [M, M], { alleles: [['a', 0.15, 1], ['b', 0.8, 1]] });
  // zone de croisement
  g += `<path d="M 86 150 L 120 150" stroke="#333" stroke-width="2"/>`;
  g += texte(103, 262, 'paire d\'homologues', { taille: 12.5, couleur: ATTENUE }) + texte(103, 278, 'appariés (prophase I)', { taille: 12.5, couleur: ATTENUE });
  g += `<path d="M 84 140 C 96 150 112 150 122 140 M 84 160 C 96 150 112 150 122 160" stroke="${VIOLET}" stroke-width="2.4" fill="none"/>`;
  g += etiq(103, 44, 'crossing-over', { taille: 13, gras: true, couleur: VIOLET });
  g += fleche(180, 145, 250, 145, { couleur: ATTENUE, epaisseur: 2 });
  // après : 4 chromatides
  const res = [
    [[P, P], 'A', 'B', 'parentale'],
    [[P, M], 'A', 'b', 'recombinée'],
    [[M, P], 'a', 'B', 'recombinée'],
    [[M, M], 'a', 'b', 'parentale'],
  ];
  res.forEach(([cs, a1, a2, nom], i) => {
    const x = 300 + i * 92;
    const segs = [cs[0], cs[0], cs[0], cs[0], cs[0], cs[1], cs[1], cs[1], cs[1], cs[1]];
    g += chromosome(x, 60, 170, segs, { chromatides: 1, l: 12 });
    g += texte(x - 14, 60 + 0.15 * 170 + 5, a1, { taille: 14, gras: true, ancre: 'end' }) + texte(x - 14, 60 + 0.8 * 170 + 5, a2, { taille: 14, gras: true, ancre: 'end' });
    g += texte(x, 262, nom, { taille: 12.5, couleur: nom === 'parentale' ? ENCRE : VIOLET, gras: nom !== 'parentale' });
  });
  g += texte(438, 30, 'Après la méiose : 2 chromatides parentales, 2 recombinées', { taille: 13.5, gras: true });
  return enveloppe(W, H, g);
};

/** Gradient géothermique : température en fonction de la profondeur (25 et 30 °C/km, 15 °C en surface). */
SCHEMAS['gradient'] = () => {
  const W = 560, H = 330, x0 = 80, x1 = 520, y0 = 50, y1 = 290;
  const X = (t) => x0 + (t / 180) * (x1 - x0);
  const Y = (km) => y0 + (km / 5) * (y1 - y0);
  let g = '';
  for (let t = 0; t <= 180; t += 20) g += ligne(X(t), y0, X(t), y1, { couleur: GRILLE, epaisseur: 1 }) + (t % 40 === 0 ? texte(X(t), y0 - 8, `${t}`, { taille: 11.5, couleur: ATTENUE }) : '');
  for (let km = 0; km <= 5; km++) g += ligne(x0, Y(km), x1, Y(km), { couleur: GRILLE, epaisseur: 1 }) + texte(x0 - 8, Y(km) + 4, `${km} km`, { taille: 11.5, couleur: ATTENUE, ancre: 'end' });
  g += ligne(x0, y0, x1, y0, { couleur: AXE, epaisseur: 1.8 }) + ligne(x0, y0, x0, y1, { couleur: AXE, epaisseur: 1.8 });
  g += texte((x0 + x1) / 2, 22, 'température (°C)', { taille: 13, couleur: ATTENUE });
  g += texte(20, (y0 + y1) / 2, 'profondeur', { taille: 13, couleur: ATTENUE }).replace('<text ', `<text transform="rotate(-90 20 ${(y0 + y1) / 2})" `);
  g += ligne(X(15), Y(0), X(15 + 25 * 5), Y(5), { couleur: BLEU, epaisseur: 2.6 });
  g += ligne(X(15), Y(0), X(15 + 30 * 5), Y(5), { couleur: ROUGE, epaisseur: 2.6 });
  g += etiq(X(15 + 25 * 4) - 8, Y(4) + 4, '25 °C/km', { taille: 12.5, couleur: BLEU, ancre: 'end' });
  g += etiq(X(15 + 30 * 4.4) + 10, Y(4.4), '30 °C/km', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += point(X(15), Y(0)) + etiq(X(15) + 6, Y(0) + 18, '15 °C en surface', { taille: 12, couleur: ENCRE, ancre: 'start' });
  // repère : à 3 km
  g += ligne(x0, Y(3), X(105), Y(3), { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  g += point(X(90), Y(3)) + point(X(105), Y(3));
  g += etiq(X(105) + 8, Y(3) + 18, 'à 3 km : de 90 à 105 °C', { taille: 12, couleur: ENCRE, ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Pointe de flèche posée sur une courbe de Bézier cubique, au paramètre t, orientée selon la tangente. */
function teteBezier(P0, P1, P2, P3, t, couleur) {
  const b = (i) => (1 - t) ** 3 * P0[i] + 3 * (1 - t) ** 2 * t * P1[i] + 3 * (1 - t) * t ** 2 * P2[i] + t ** 3 * P3[i];
  const d = (i) => 3 * (1 - t) ** 2 * (P1[i] - P0[i]) + 6 * (1 - t) * t * (P2[i] - P1[i]) + 3 * t ** 2 * (P3[i] - P2[i]);
  const x = b(0), y = b(1), a = Math.atan2(d(1), d(0)), P = 14;
  const bx = x - P * Math.cos(a), by = y - P * Math.sin(a);
  return `<polygon points="${nb(x)},${nb(y)} ${nb(bx + (P / 2) * Math.sin(a))},${nb(by - (P / 2) * Math.cos(a))} ${nb(bx - (P / 2) * Math.sin(a))},${nb(by + (P / 2) * Math.cos(a))}" fill="${couleur}"/>`;
}

/** Arc réflexe myotatique (schéma simplifié). */
SCHEMAS['arc-reflexe'] = () => {
  const W = 680, H = 340;
  let g = '';
  // moelle épinière en coupe
  const mx = 520, my = 110;
  g += `<ellipse cx="${mx}" cy="${my}" rx="80" ry="62" fill="#f3ead2" stroke="#8a7a5a" stroke-width="2"/>`;
  g += `<path d="M ${mx - 46} ${my - 38} C ${mx - 16} ${my - 30} ${mx - 14} ${my - 6} ${mx} ${my} C ${mx + 14} ${my - 6} ${mx + 16} ${my - 30} ${mx + 46} ${my - 38} C ${mx + 30} ${my - 6} ${mx + 30} ${my + 8} ${mx + 44} ${my + 34} C ${mx + 16} ${my + 34} ${mx + 10} ${my + 14} ${mx} ${my + 10} C ${mx - 10} ${my + 14} ${mx - 16} ${my + 34} ${mx - 44} ${my + 34} C ${mx - 30} ${my + 8} ${mx - 30} ${my - 6} ${mx - 46} ${my - 38} Z" fill="#c9bfae" stroke="#8a7a5a" stroke-width="1.4"/>`;
  g += texte(mx, 24, 'moelle épinière (coupe)', { taille: 13.5, gras: true });
  // ganglion de la racine dorsale (en haut, côté dos)
  g += `<ellipse cx="${mx - 120}" cy="${my - 50}" rx="22" ry="14" fill="#f3ead2" stroke="#8a7a5a" stroke-width="1.6"/>`;
  g += cercle(mx - 120, my - 50, 6, { fond: BLEU, couleur: BLEU });
  // muscle (cuisse) avec fuseau
  g += `<path d="M 40 250 C 80 210 260 210 300 250 C 260 290 80 290 40 250 Z" fill="#e57373" stroke="#9c2a2a" stroke-width="2"/>`;
  g += `<ellipse cx="140" cy="250" rx="30" ry="8" fill="#ffd23f" stroke="#a07a00" stroke-width="1.4"/>`;
  g += texte(170, 306, 'muscle (effecteur)', { taille: 13.5, gras: true, couleur: '#9c2a2a' });
  // neurone sensitif : fuseau → ganglion → corne dorsale
  g += `<path d="M 160 246 C 220 150 300 60 ${mx - 142} ${my - 50}" fill="none" stroke="${BLEU}" stroke-width="3"/>`;
  g += `<path d="M ${mx - 114} ${my - 50} C ${mx - 70} ${my - 50} ${mx - 40} ${my - 30} ${mx - 20} ${my + 8}" fill="none" stroke="${BLEU}" stroke-width="3"/>`;
  g += teteBezier([160, 246], [220, 150], [300, 60], [mx - 142, my - 50], 0.45, BLEU);
  // synapse + motoneurone (corne ventrale) → muscle
  g += cercle(mx - 22, my + 22, 9, { fond: VERT, couleur: '#1e6b1e' });
  g += `<path d="M ${mx - 22} ${my + 30} C ${mx - 60} ${my + 120} 360 230 260 254" fill="none" stroke="${VERT}" stroke-width="3"/>`;
  g += teteBezier([mx - 22, my + 30], [mx - 60, my + 120], [360, 230], [260, 254], 0.55, VERT);
  g += `<path d="M 262 254 l -8 -8 m 8 8 l -10 4 m 10 -4 l -2 10" stroke="${VERT}" stroke-width="2.4" fill="none"/>`;
  // étiquettes
  g += etiq(108, 222, 'fuseau neuromusculaire', { taille: 12.5, couleur: '#8a6d00', gras: true });
  g += etiq(108, 238, '(récepteur)', { taille: 12, couleur: '#8a6d00' });
  g += etiq(230, 92, 'neurone sensitif', { taille: 13, couleur: BLEU, gras: true });
  g += etiq(mx - 120, my - 74, 'ganglion', { taille: 12.5, couleur: '#5a4a2a' });
  g += etiq(mx + 50, my + 82, 'synapse dans la moelle', { taille: 12.5, couleur: '#1e6b1e' });
  g += etiq(470, 260, 'motoneurone', { taille: 13, couleur: VERT, gras: true });
  g += texte(W / 2, H - 8, 'schéma simplifié, non à l\'échelle', { taille: 11.5, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

/** Synapse chimique (schéma de principe). */
SCHEMAS['synapse'] = () => {
  const W = 620, H = 290;
  let g = '';
  g += `<path d="M 40 60 L 200 60 C 300 60 320 90 320 145 C 320 200 300 230 200 230 L 40 230" fill="#d6ecff" stroke="${BLEU}" stroke-width="2.4"/>`;
  g += `<path d="M 600 40 L 360 40 L 360 250 L 600 250" fill="#e8f5ee" stroke="${VERT}" stroke-width="2.4"/>`;
  for (const [x, y] of [[250, 110], [270, 150], [240, 180], [290, 120], [285, 185]]) g += cercle(x, y, 13, { fond: '#ffffff', couleur: VIOLET, epaisseur: 1.6 }) + cercle(x - 4, y - 3, 2.2, { fond: VIOLET, couleur: VIOLET }) + cercle(x + 4, y + 3, 2.2, { fond: VIOLET, couleur: VIOLET });
  for (const y of [110, 135, 160, 185]) g += cercle(340, y + 4, 2.4, { fond: VIOLET, couleur: VIOLET });
  for (const y of [100, 130, 160, 190]) g += `<rect x="360" y="${y}" width="10" height="16" fill="${ORANGE}"/>`;
  g += fleche(60, 145, 150, 145, { couleur: BLEU, epaisseur: 2.6 });
  g += etiq(104, 128, 'potentiels d\'action', { taille: 12.5, couleur: BLEU });
  g += etiq(180, 260, 'neurone émetteur (bouton synaptique)', { taille: 13, couleur: BLEU, gras: true });
  g += etiq(480, 274, 'élément récepteur', { taille: 13, couleur: VERT, gras: true });
  g += etiq(340, 30, 'fente synaptique', { taille: 12.5, couleur: ENCRE });
  g += ligne(340, 36, 340, 96, { couleur: ATTENUE, epaisseur: 1 });
  g += etiq(160, 82, 'vésicules de\nneurotransmetteurs', { taille: 12, couleur: VIOLET }) + ligne(214, 90, 236, 104, { couleur: ATTENUE, epaisseur: 1 });
  g += etiq(470, 120, 'récepteurs', { taille: 12.5, couleur: ORANGE, gras: true }) + ligne(432, 120, 372, 136, { couleur: ATTENUE, epaisseur: 1 });
  g += fleche(380, 210, 540, 210, { couleur: VERT, epaisseur: 2.6 });
  g += etiq(470, 196, 'nouveau message', { taille: 12.5, couleur: VERT });
  return enveloppe(W, H, g);
};

/** Codage en fréquence : même amplitude, fréquence des potentiels d'action selon l'intensité du stimulus. */
SCHEMAS['codage-frequence'] = () => {
  const W = 640, H = 260;
  let g = '';
  const trace = (y, n, nom) => {
    let d = `M 160 ${y}`;
    const x0 = 170, L = 440;
    for (let i = 0; i < n; i++) {
      const x = x0 + ((i + 0.5) * L) / n;
      d += ` L ${nb(x - 4)} ${y} L ${nb(x)} ${y - 56} L ${nb(x + 4)} ${y + 8} L ${nb(x + 9)} ${y}`;
    }
    d += ` L 620 ${y}`;
    return `<path d="${d}" fill="none" stroke="${BLEU}" stroke-width="2"/>` + texte(150, y - 18, nom, { taille: 13.5, gras: true, ancre: 'end' });
  };
  g += trace(100, 3, 'stimulus faible');
  g += trace(220, 9, 'stimulus fort');
  g += texte(150, 120, 'peu de potentiels', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  g += texte(150, 240, 'beaucoup de potentiels', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  g += texte(W / 2 + 70, 28, 'même amplitude, fréquence différente', { taille: 13.5, gras: true, couleur: BLEU });
  return enveloppe(W, H, g);
};

/** Paramètres orbitaux (schémas de principe). */
SCHEMAS['milankovitch'] = () => {
  const W = 680, H = 270;
  let g = '';
  // excentricité
  g += `<ellipse cx="115" cy="140" rx="90" ry="62" fill="none" stroke="${BLEU}" stroke-width="2"/>` + `<ellipse cx="115" cy="140" rx="80" ry="76" fill="none" stroke="${ATTENUE}" stroke-width="1.4" stroke-dasharray="5 4"/>`;
  g += soleil(nb(115 + Math.sqrt(90 * 90 - 62 * 62)), 140, 9).replace(/stroke-width="2.4"/g, 'stroke-width="1.6"');
  g += texte(115, 34, 'excentricité', { taille: 14.5, gras: true }) + texte(115, 236, 'forme de l\'orbite', { taille: 12.5, couleur: ATTENUE }) + texte(115, 252, '(plus ou moins allongée)', { taille: 12.5, couleur: ATTENUE });
  // obliquité : axe incliné de 23,4° (valeur actuelle)
  const cx = 340, cy = 140, a = (23.4 * Math.PI) / 180;
  g += ligne(cx, cy - 80, cx, cy + 80, { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  g += cercle(cx, cy, 52, { fond: '#bfe3ff', couleur: '#1f4f8a', epaisseur: 2 });
  g += ligne(cx - 76 * Math.sin(a), cy + 76 * Math.cos(a), cx + 76 * Math.sin(a), cy - 76 * Math.cos(a), { couleur: ROUGE, epaisseur: 2.6 });
  g += `<path d="M ${cx} ${cy - 62} A 62 62 0 0 1 ${nb(cx + 62 * Math.sin(a))} ${nb(cy - 62 * Math.cos(a))}" fill="none" stroke="${ROUGE}" stroke-width="1.6"/>`;
  g += texte(cx + 30, cy - 66, '23,4°', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += texte(cx, 34, 'obliquité', { taille: 14.5, gras: true }) + texte(cx, 236, 'inclinaison de l\'axe', { taille: 12.5, couleur: ATTENUE }) + texte(cx, 252, '(23,4° aujourd\'hui ; elle varie)', { taille: 12.5, couleur: ATTENUE });
  // précession : l'axe décrit un cône
  const px = 565, py = 150;
  g += `<ellipse cx="${px}" cy="${py - 74}" rx="34" ry="9" fill="none" stroke="${VIOLET}" stroke-width="1.6" stroke-dasharray="4 3"/>`;
  g += ligne(px, py + 20, px - 34, py - 74, { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + ligne(px, py + 20, px + 34, py - 74, { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  g += cercle(px, py + 20, 34, { fond: '#bfe3ff', couleur: '#1f4f8a', epaisseur: 2 });
  g += ligne(px, py + 20, px + 30, py - 72, { couleur: ROUGE, epaisseur: 2.6 });
  g += flecheCourbe(px - 30, py - 66, px + 10, py - 64, 6, { couleur: VIOLET, epaisseur: 1.8, pointe: 8 });
  g += texte(px, 34, 'précession', { taille: 14.5, gras: true }) + texte(px, 236, 'l\'axe change lentement', { taille: 12.5, couleur: ATTENUE }) + texte(px, 252, 'de direction (cône)', { taille: 12.5, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

// ───────────────────────── Poses : première ─────────────────────────
pose('premiere/svt/dynamique-interne-de-la-terre', 'deux-decoupages', 'globe', { mode: 'deux-decoupages' }, 'Deux découpages du globe : chimique (croûte, manteau, noyau) et mécanique (lithosphère rigide sur une asthénosphère ductile). La lithosphère n\'est pas la croûte.', '## 1. La structure du globe : deux découpages à ne pas confondre');
pose('premiere/svt/dynamique-interne-de-la-terre', 'frontieres', 'frontieres', { niveau: '1re' }, 'Les trois types de frontières de plaques : divergente (dorsale), convergente (subduction ou collision) et transformante (schémas de principe).', '## 2. Les plaques lithosphériques');
pose('premiere/svt/dynamique-interne-de-la-terre', 'dorsale-subduction', 'dorsale-subduction', { ages: true, flux: true }, 'La lithosphère océanique naît à la dorsale, vieillit, se refroidit et s\'épaissit en s\'éloignant, puis plonge en subduction. Le flux de chaleur est fort à la dorsale.', '## 3. Naissance et disparition de la lithosphère océanique');

pose('premiere/svt/ecosystemes-et-services', 'ecosysteme', 'diagramme', {
  W: 640, H: 210,
  noeuds: [
    { id: 'bc', x: 140, y: 80, w: 220, h: 80, t: 'BIOCÉNOSE\nles êtres vivants', c: 'v', taille: 15, gras: true },
    { id: 'bt', x: 500, y: 80, w: 220, h: 80, t: 'BIOTOPE\nsol, eau, lumière,\ntempérature', c: 'o', taille: 14, gras: true },
    { id: 'e', x: 320, y: 180, w: 380, t: 'écosystème = biocénose + biotope + interactions', c: 'b', gras: true },
  ],
  liens: [{ de: 'bc', a: 'bt', double: true, t: 'interactions', c: 'vi' }],
}, 'Un écosystème réunit la biocénose, le biotope et l\'ensemble de leurs interactions : ce n\'est pas une simple liste d\'espèces.', '## 1. Qu\'est-ce qu\'un écosystème ?');
pose('premiere/svt/ecosystemes-et-services', 'energie-matiere', 'diagramme', {
  W: 680, H: 340,
  noeuds: [
    { id: 's', x: 70, y: 60, t: 'Soleil', c: 'j', gras: true },
    { id: 'p', x: 200, y: 160, t: 'producteurs\n(photosynthèse)', c: 'v' },
    { id: 'c1', x: 380, y: 160, t: 'herbivores', c: 'o' },
    { id: 'c2', x: 560, y: 160, t: 'carnivores', c: 'r' },
    { id: 'd', x: 380, y: 290, t: 'décomposeurs\n(bactéries, champignons)', c: 'vi' },
    { id: 'h1', x: 200, y: 52, t: 'chaleur', c: 'r', forme: 'texte' },
    { id: 'h2', x: 380, y: 52, t: 'chaleur', c: 'r', forme: 'texte' },
    { id: 'h3', x: 560, y: 52, t: 'chaleur', c: 'r', forme: 'texte' },
  ],
  liens: [
    { de: 's', a: 'p', t: 'énergie lumineuse', c: 'j', dx: -10 },
    { de: 'p', a: 'c1' }, { de: 'c1', a: 'c2' },
    { de: 'p', a: 'h1', c: 'r', pointilles: true }, { de: 'c1', a: 'h2', c: 'r', pointilles: true }, { de: 'c2', a: 'h3', c: 'r', pointilles: true },
    { de: 'c2', a: 'd', t: 'matière morte', c: 'g', dx: 40 }, { de: 'c1', a: 'd', c: 'g' }, { de: 'p', a: 'd', c: 'g' },
    { de: 'd', a: 'p', via: [[110, 290]], t: 'éléments minéraux recyclés', c: 'v', dx: 60, dy: 24 },
  ],
}, 'L\'énergie venue du Soleil traverse l\'écosystème et se dissipe en chaleur à chaque niveau ; la matière, elle, est recyclée par les décomposeurs.', '## 3. Matière et énergie circulent');

pose('premiere/svt/expression-du-patrimoine-genetique', 'expression', 'expression', {}, 'L\'expression d\'un gène : dans le noyau, le gène est transcrit en ARNm ; l\'ARNm sort par un pore et est traduit en protéine par un ribosome (schéma simplifié).', '## 1. Du gène à la protéine : le problème à résoudre');
pose('premiere/svt/expression-du-patrimoine-genetique', 'codons', 'codons', {}, 'Du brin transcrit de l\'ADN à l\'ARNm, puis à la protéine : l\'ARNm est lu par codons de trois bases, du codon-start AUG au codon-stop.', '## 4. Le code génétique : la clé de traduction');

pose('premiere/svt/mutations-et-variabilite', 'types', 'types-mutations', {}, 'Les trois types de mutations sur l\'exemple de la fiche : une base remplacée (substitution), supprimée (délétion) ou ajoutée (insertion).', '## 1. Qu\'est-ce qu\'une mutation ?');
pose('premiere/svt/mutations-et-variabilite', 'reparation', 'diagramme', {
  W: 660, H: 300,
  noeuds: [
    { id: 'e', x: 320, y: 36, t: 'erreur de réplication ou dommage (UV, tabac…)', c: 'o' },
    { id: 't', x: 320, y: 132, w: 260, h: 90, t: 'réparée avant\nla réplication ?', c: 'vi', forme: 'losange', gras: true },
    { id: 'o', x: 110, y: 250, t: 'pas de mutation\ntransmise', c: 'v' },
    { id: 'n', x: 520, y: 250, t: 'mutation fixée,\ntransmise aux cellules filles', c: 'r' },
  ],
  liens: [
    { de: 'e', a: 't' },
    { de: 't', a: 'o', via: [[110, 132]], t: 'oui', c: 'v', dx: 40, dy: -8 },
    { de: 't', a: 'n', via: [[520, 132]], t: 'non', c: 'r', dx: -40, dy: -8 },
  ],
}, 'Les systèmes de réparation corrigent la plupart des erreurs ; une erreur non réparée avant la réplication devient une mutation transmise aux cellules filles.', '## 3. La réparation de l\'ADN : une défense cellulaire');
pose('premiere/svt/mutations-et-variabilite', 'somatique-germinale', 'cartes', {
  W: 640, parLigne: 2, h: 104, taille: 13,
  cartes: [
    { t: 'Mutation somatique', s: 'cellule du corps (peau, foie…)\ntransmise aux cellules filles\nde l\'individu seulement', c: 'o' },
    { t: 'Mutation germinale', s: 'cellule reproductrice\n(ou qui la produit)\npeut passer à la descendance', c: 'vi' },
  ],
}, 'Le devenir d\'une mutation dépend de la cellule touchée : seule une mutation germinale peut être transmise aux enfants.', '## 5. Cellules somatiques ou germinales : qui hérite ?');

pose('premiere/svt/variation-genetique-et-sante', 'echiquier', 'echiquier', {}, 'Deux parents porteurs sains d\'une maladie récessive : chaque enfant a un risque sur quatre d\'être malade et deux sur quatre d\'être porteur sain.', '## 2. Les maladies génétiques héréditaires');
pose('premiere/svt/variation-genetique-et-sante', 'cancer', 'chaine', {
  W: 640, etapes: ['cellule\nsomatique normale', 'mutations\naccumulées', 'divisions\nsans contrôle', 'tumeur'], fleches: ['tabac, UV…', '', ''], couleurs: ['v', 'o', 'r', 'r'], taille: 14,
}, 'Un cancer résulte de mutations accumulées dans une cellule somatique, favorisées par des facteurs de risque : la cellule se divise sans limite et forme une tumeur.', '## 3. Le cancer : une maladie du génome des cellules');
pose('premiere/svt/variation-genetique-et-sante', 'antibiotique', 'selection', { mode: 'antibiotique' }, 'La résistance aux antibiotiques : la mutation existe avant le traitement ; l\'antibiotique tue les bactéries sensibles et sélectionne les résistantes.', '## 4. La résistance des bactéries aux antibiotiques');

// ───────────────────────── Poses : terminale ─────────────────────────
pose('terminale/svt/brassage-genetique-et-meiose', 'meiose', 'meiose', {}, 'La méiose d\'une cellule à deux paires de chromosomes : la division I sépare les homologues, la division II sépare les chromatides ; on obtient quatre cellules haploïdes.', '## 1. La méiose : de la cellule diploïde aux gamètes haploïdes');
pose('terminale/svt/brassage-genetique-et-meiose', 'crossing-over', 'crossing-over', {}, 'Un crossing-over entre deux chromosomes homologues échange des portions de chromatides : il crée de nouvelles combinaisons d\'allèles de gènes liés.', '## 3. Le brassage intrachromosomique (crossing-over)');

pose('terminale/svt/climats-passes-et-actuels', 'milankovitch', 'milankovitch', {}, 'Les trois paramètres orbitaux qui rythment les cycles glaciaires : forme de l\'orbite, inclinaison de l\'axe et changement de direction de l\'axe (schémas exagérés).', '### a) Les paramètres orbitaux (paramètres de Milankovitch)');
pose('terminale/svt/climats-passes-et-actuels', 'albedo', 'cycle', {
  W: 600, H: 340, rx: 190, ry: 112, taille: 14,
  etapes: ['baisse de la\ntempérature', 'extension\ndes glaces', 'albédo plus fort :\nplus de lumière réfléchie', 'moins d\'énergie\nabsorbée'],
  couleurs: ['b', 'g', 'j', 'o'], centre: 'rétroaction\npositive', couleurCentre: 'r',
}, 'Une rétroaction positive : le refroidissement étend les glaces, qui réfléchissent davantage la lumière, ce qui refroidit encore. Elle amplifie le changement.', '### b) Le cycle du carbone et les rétroactions');

pose('terminale/svt/evolution-et-speciation', 'speciation', 'chaine', {
  W: 660, etapes: ['une population\n(échanges de gènes)', 'barrière géographique\n(montagne, mer, glacier)', 'deux populations isolées :\nmutations, sélection et\ndérive différentes', 'isolement reproducteur :\ndeux espèces distinctes'], couleurs: ['b', 'g', 'o', 'vi'], vertical: true, fleches: ['', '', 'au bout d\'un long temps'], taille: 14,
}, 'La spéciation allopatrique : une barrière sépare deux populations, qui évoluent chacune de leur côté jusqu\'à ne plus pouvoir se reproduire ensemble.', '## 4. La spéciation : naissance d\'une nouvelle espèce');

pose('terminale/svt/geothermie-et-flux-de-chaleur', 'gradient', 'gradient', {}, 'Le gradient géothermique dans la croûte continentale moyenne : la température augmente de 25 à 30 °C par kilomètre de profondeur.', '## 1. La Terre libère de la chaleur');
pose('terminale/svt/geothermie-et-flux-de-chaleur', 'transferts', 'dorsale-subduction', { ages: false, flux: true, transferts: true }, 'Conduction dans la lithosphère rigide, convection dans le manteau ductile ; le flux géothermique est élevé aux dorsales et faible aux zones de subduction.', '## 3. Deux modes de transfert de la chaleur');

pose('terminale/svt/glycemie-et-diabete', 'regulation', 'diagramme', {
  W: 680, H: 330,
  noeuds: [
    { id: 'n', x: 340, y: 165, w: 170, h: 56, t: 'glycémie\n≈ 1 g/L', c: 'g', taille: 15, gras: true },
    { id: 'h', x: 120, y: 50, t: 'glycémie trop haute\n(après un repas)', c: 'r' },
    { id: 'b', x: 120, y: 280, t: 'glycémie trop basse\n(à jeun, effort)', c: 'b' },
    { id: 'pi', x: 560, y: 50, t: 'pancréas, cellules β :\ninsuline', c: 'o', gras: true },
    { id: 'pg', x: 560, y: 280, t: 'pancréas, cellules α :\nglucagon', c: 'vi', gras: true },
  ],
  liens: [
    { de: 'n', a: 'h', c: 'g', pointilles: true }, { de: 'n', a: 'b', c: 'g', pointilles: true },
    { de: 'h', a: 'pi', t: 'détectée par', c: 'r' },
    { de: 'b', a: 'pg', t: 'détectée par', c: 'b', dy: 18 },
    { de: 'pi', a: 'n', t: 'stockage du glucose (glycogène)\npar le foie et les muscles', c: 'o', dx: 118, dy: 4, ancre: 'middle' },
    { de: 'pg', a: 'n', t: 'le foie libère\ndu glucose', c: 'vi', dx: 90, dy: 4 },
  ],
}, 'La régulation de la glycémie : l\'insuline fait baisser la glycémie, le glucagon la fait monter. Ces deux hormones antagonistes la ramènent vers 1 g/L.', '## 3. Un système régulé par rétroaction');
pose('terminale/svt/glycemie-et-diabete', 'diabetes', 'cartes', {
  W: 660, parLigne: 2, h: 112, taille: 13,
  cartes: [
    { t: 'Diabète de type 1', s: 'cellules β détruites (auto-immun)\nmanque d\'insuline\ntraitement : injections d\'insuline', c: 'r' },
    { t: 'Diabète de type 2', s: 'insuline produite mais mal utilisée\n(insulino-résistance)\nd\'abord hygiène de vie', c: 'o' },
  ],
}, 'Deux diabètes, deux mécanismes : le type 1 est un manque d\'insuline, le type 2 une mauvaise réponse des cellules à l\'insuline.', '## 4. Le diabète : une glycémie mal régulée');

pose('terminale/svt/reflexe-et-motricite', 'arc', 'arc-reflexe', {}, 'L\'arc réflexe myotatique : le fuseau détecte l\'étirement, le neurone sensitif conduit le message à la moelle épinière, le motoneurone commande la contraction du muscle.', '## 2. L\'arc réflexe : le trajet du message');
pose('terminale/svt/reflexe-et-motricite', 'frequence', 'codage-frequence', {}, 'Le codage du message nerveux : les potentiels d\'action ont tous la même amplitude ; un stimulus plus fort en déclenche davantage par seconde.', '## 3. Le message nerveux : nature et propagation');
pose('terminale/svt/reflexe-et-motricite', 'synapse', 'synapse', {}, 'La synapse : le message électrique déclenche la libération de neurotransmetteurs, qui se fixent sur les récepteurs de l\'élément suivant. Le passage est à sens unique.', '## 4. La synapse : le passage d\'un neurone à l\'autre');
