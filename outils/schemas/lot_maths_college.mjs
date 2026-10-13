/**
 * Lot « maths_college » : schémas des fiches de mathématiques de la 6e à la 3e.
 * Toutes les coordonnées sont calculées (angles, longueurs, courbes, échelles).
 */
import { enveloppe, texte, ligne, fleche, boite, cercle, polygone, point, angleDroit, courbe, nb, ENCRE, GRILLE, AXE, BLEU, ROUGE, VERT, ORANGE, VIOLET, ATTENUE } from './base.mjs';

// ---------------------------------------------------------------------------
// Outils locaux
// ---------------------------------------------------------------------------
const HALO = '<text stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke" ';
/** Texte avec un liseré blanc (reste lisible sur un trait ou une grille). */
const tx = (x, y, s, o = {}) => texte(x, y, s, o).replace(/<text /g, HALO);
/** Nombre au format français (virgule, vrai signe moins). */
const fr = (v, d = 3) => {
  const r = Math.round(v * 10 ** d) / 10 ** d;
  return String(r).replace('.', ',').replace('-', '−');
};
const rad = (d) => (d * Math.PI) / 180;
/** Point à la distance r du centre, dans la direction d'angle a (degrés, sens trigonométrique, y vers le haut). */
const P = (cx, cy, r, a) => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];
/** Angle (degrés, sens trigonométrique) de la direction de (x1, y1) vers (x2, y2). */
const dir = (x1, y1, x2, y2) => (Math.atan2(-(y2 - y1), x2 - x1) * 180) / Math.PI;
const mil = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const unit = (a, b) => { const d = dist(a, b); return [(b[0] - a[0]) / d, (b[1] - a[1]) / d]; };

/** Arc d'angle au centre (cx, cy), de a1 à a2 dans le sens trigonométrique, avec secteur coloré. */
function arcAngle(cx, cy, r, a1, a2, { couleur = ENCRE, fond = 'none', opacite = 0.22, epaisseur = 1.8 } = {}) {
  let d = a2 - a1;
  while (d < 0) d += 360;
  while (d > 360) d -= 360;
  const [x1, y1] = P(cx, cy, r, a1);
  const [x2, y2] = P(cx, cy, r, a1 + d);
  const grand = d > 180 ? 1 : 0;
  let s = '';
  if (fond !== 'none') s += `<path d="M ${nb(cx)} ${nb(cy)} L ${nb(x1)} ${nb(y1)} A ${nb(r)} ${nb(r)} 0 ${grand} 0 ${nb(x2)} ${nb(y2)} Z" fill="${fond}" fill-opacity="${opacite}" stroke="none"/>`;
  s += `<path d="M ${nb(x1)} ${nb(y1)} A ${nb(r)} ${nb(r)} 0 ${grand} 0 ${nb(x2)} ${nb(y2)}" fill="none" stroke="${couleur}" stroke-width="${epaisseur}"/>`;
  return s;
}

/** Codage de longueurs égales : n petits traits au milieu du segment. */
function codeEgal(a, b, n = 1, { couleur = ENCRE, taille = 7 } = {}) {
  const [mx, my] = mil(a, b);
  const [ux, uy] = unit(a, b);
  const [px, py] = [-uy, ux];
  let s = '';
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 5;
    const cx = mx + ux * o, cy = my + uy * o;
    s += ligne(cx - px * taille - ux * 2, cy - py * taille - uy * 2, cx + px * taille + ux * 2, cy + py * taille + uy * 2, { couleur, epaisseur: 1.8 });
  }
  return s;
}

/** Codage de parallélisme : n chevrons au milieu du segment, dans le sens de a vers b. */
function chevron(a, b, n = 1, { couleur = ENCRE, taille = 7, t = 0.5 } = {}) {
  const mx = a[0] + (b[0] - a[0]) * t, my = a[1] + (b[1] - a[1]) * t;
  const [ux, uy] = unit(a, b);
  const [px, py] = [-uy, ux];
  let s = '';
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 7;
    const cx = mx + ux * o, cy = my + uy * o;
    s += `<path d="M ${nb(cx - ux * taille + px * taille * 0.8)} ${nb(cy - uy * taille + py * taille * 0.8)} L ${nb(cx)} ${nb(cy)} L ${nb(cx - ux * taille - px * taille * 0.8)} ${nb(cy - uy * taille - py * taille * 0.8)}" fill="none" stroke="${couleur}" stroke-width="1.8"/>`;
  }
  return s;
}

/** Segment entre deux points (tableaux [x, y]). */
const seg = (a, b, o = {}) => ligne(a[0], a[1], b[0], b[1], o);
const flecheAB = (a, b, o = {}) => fleche(a[0], a[1], b[0], b[1], o);
const pointN = (a, nom, o = {}) => point(a[0], a[1], nom, o);

/** Fraction écrite « en étages » si s vaut « a/b » (éventuellement précédée de « − »), sinon texte simple. */
function frac(x, y, s, { taille = 15, couleur = ENCRE, gras = false } = {}) {
  const m = /^(−?)(\d+)\/(\d+)$/.exec(String(s));
  if (!m) return tx(x, y, s, { taille, couleur, gras });
  const larg = Math.max(m[2].length, m[3].length) * taille * 0.62 + 4;
  let g = '';
  const dx = m[1] ? taille * 0.45 : 0;
  if (m[1]) g += tx(x - larg / 2 - 2, y + taille * 0.1, '−', { taille, couleur, gras });
  g += `<rect x="${nb(x + dx - larg / 2 - 2)}" y="${nb(y - taille * 1.15)}" width="${nb(larg + 4)}" height="${nb(taille * 2.3)}" fill="#ffffff" fill-opacity="0.85"/>`;
  g += texte(x + dx, y - taille * 0.3, m[2], { taille, couleur, gras });
  g += ligne(x + dx - larg / 2, y - taille * 0.05, x + dx + larg / 2, y - taille * 0.05, { couleur, epaisseur: 1.4 });
  g += texte(x + dx, y + taille * 0.95, m[3], { taille, couleur, gras });
  return g;
}

/** Accolade horizontale de x1 à x2 à la hauteur y (vers le bas si bas = true). */
function accolade(x1, x2, y, { bas = false, couleur = ENCRE, h = 10 } = {}) {
  const s = bas ? 1 : -1;
  const m = (x1 + x2) / 2;
  return `<path d="M ${nb(x1)} ${nb(y)} Q ${nb(x1)} ${nb(y + s * h)} ${nb(x1 + h)} ${nb(y + s * h)} L ${nb(m - h)} ${nb(y + s * h)} Q ${nb(m)} ${nb(y + s * h)} ${nb(m)} ${nb(y + 2 * s * h)} Q ${nb(m)} ${nb(y + s * h)} ${nb(m + h)} ${nb(y + s * h)} L ${nb(x2 - h)} ${nb(y + s * h)} Q ${nb(x2)} ${nb(y + s * h)} ${nb(x2)} ${nb(y)}" fill="none" stroke="${couleur}" stroke-width="1.6"/>`;
}

/** Saut en arc de cercle au-dessus (ou au-dessous) d'une droite, avec pointe à l'arrivée. */
function saut(x1, x2, y, { couleur = ROUGE, haut = true, h = null, texte: t = '', taille = 13 } = {}) {
  const s = haut ? -1 : 1;
  const hh = h ?? Math.min(46, 12 + Math.abs(x2 - x1) * 0.28);
  const mx = (x1 + x2) / 2, cy = y + s * hh * 2;
  // pointe : tangente à l'arrivée = direction (x2 - mx, y - cy)
  const a = Math.atan2(y - cy, x2 - mx);
  const p = 9;
  const bx = x2 - p * Math.cos(a), by = y - p * Math.sin(a);
  const p1 = [bx + (p / 2) * Math.sin(a), by - (p / 2) * Math.cos(a)];
  const p2 = [bx - (p / 2) * Math.sin(a), by + (p / 2) * Math.cos(a)];
  let g = `<path d="M ${nb(x1)} ${nb(y)} Q ${nb(mx)} ${nb(cy)} ${nb(bx)} ${nb(by)}" fill="none" stroke="${couleur}" stroke-width="2"/>`;
  g += `<polygon points="${nb(x2)},${nb(y)} ${nb(p1[0])},${nb(p1[1])} ${nb(p2[0])},${nb(p2[1])}" fill="${couleur}"/>`;
  if (t) g += tx(mx, y + s * hh + (haut ? -6 : 16), t, { taille, couleur, gras: true });
  return g;
}

/**
 * Droite (ou demi-droite) graduée. min, max : bornes ; sub : nombre de parts par unité ;
 * pas : écart entre deux nombres écrits (en unités) ; etiq(v) : texte d'une graduation principale.
 */
function droite({ x0 = 40, x1 = 600, y = 100, min, max, sub = 1, pas = 1, demi = false, etiq = null, taille = 13, couleurEtiq = ENCRE }) {
  const X = (v) => x0 + ((v - min) / (max - min)) * (x1 - x0);
  let g = '';
  g += fleche(demi ? X(min) : x0 - 18, y, x1 + 22, y, { couleur: ENCRE, epaisseur: 2, pointe: 10 });
  const n = Math.round((max - min) * sub);
  for (let i = 0; i <= n; i++) {
    const v = min + i / sub;
    const principal = Math.abs(v / pas - Math.round(v / pas)) < 1e-9;
    g += ligne(X(v), y - (principal ? 8 : 5), X(v), y + (principal ? 8 : 5), { couleur: ENCRE, epaisseur: principal ? 1.8 : 1.2 });
    if (principal) g += texte(X(v), y + 26, etiq ? etiq(v) : fr(v), { taille, couleur: couleurEtiq });
  }
  return { svg: g, X };
}

/**
 * Repère personnalisable. Renvoie { svg, X, Y }.
 * L'axe horizontal est tracé en y = 0 s'il est visible (sinon en ymin), de même pour l'axe vertical.
 */
function rep({ x0 = 50, x1 = 420, y0 = 300, y1 = 30, xmin, xmax, ymin, ymax, pasX = 1, pasY = 1, etiqX = null, etiqY = null, titreX = '', titreY = '', grille = true, taille = 12, zeroUnique = true }) {
  const X = (x) => x0 + ((x - xmin) / (xmax - xmin)) * (x1 - x0);
  const Y = (y) => y0 - ((y - ymin) / (ymax - ymin)) * (y0 - y1);
  const ax = ymin <= 0 && ymax >= 0 ? 0 : ymin;
  const ay = xmin <= 0 && xmax >= 0 ? 0 : xmin;
  const eX = etiqX ?? pasX, eY = etiqY ?? pasY;
  let g = '';
  const pres = (v, p) => Math.abs(v / p - Math.round(v / p)) < 1e-9;
  if (grille) {
    for (let x = Math.ceil(xmin / pasX - 1e-9) * pasX; x <= xmax + 1e-9; x += pasX) g += ligne(X(x), Y(ymin), X(x), Y(ymax), { couleur: GRILLE, epaisseur: 1 });
    for (let y = Math.ceil(ymin / pasY - 1e-9) * pasY; y <= ymax + 1e-9; y += pasY) g += ligne(X(xmin), Y(y), X(xmax), Y(y), { couleur: GRILLE, epaisseur: 1 });
  }
  g += fleche(X(xmin), Y(ax), X(xmax) + 16, Y(ax), { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  g += fleche(X(ay), Y(ymin), X(ay), Y(ymax) - 16, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  for (let x = Math.ceil(xmin / pasX - 1e-9) * pasX; x <= xmax + 1e-9; x += pasX) {
    if (!pres(x, eX)) continue;
    if (Math.abs(x - ay) < 1e-9 && (zeroUnique || x === 0)) continue;
    g += ligne(X(x), Y(ax) - 4, X(x), Y(ax) + 4, { couleur: AXE, epaisseur: 1.4 });
    g += texte(X(x), Y(ax) + 17, fr(x), { taille, couleur: ATTENUE });
  }
  for (let y = Math.ceil(ymin / pasY - 1e-9) * pasY; y <= ymax + 1e-9; y += pasY) {
    if (!pres(y, eY)) continue;
    if (Math.abs(y - ax) < 1e-9) continue;
    g += ligne(X(ay) - 4, Y(y), X(ay) + 4, Y(y), { couleur: AXE, epaisseur: 1.4 });
    g += texte(X(ay) - 8, Y(y) + 4, fr(y), { taille, couleur: ATTENUE, ancre: 'end' });
  }
  if (ax === 0 && ay === 0) g += texte(X(0) - 8, Y(0) + 17, '0', { taille, couleur: ATTENUE, ancre: 'end' });
  else {
    if (ay !== 0 || ax !== 0) {
      // origine non nulle : on écrit les deux valeurs du coin
      g += texte(X(ay), Y(ax) + 17, fr(ay), { taille, couleur: ATTENUE });
      g += texte(X(ay) - 8, Y(ax) + 4, fr(ax), { taille, couleur: ATTENUE, ancre: 'end' });
    }
  }
  if (titreX) g += texte(X(xmax) + 14, Y(ax) - 10, titreX, { taille: 13, couleur: ENCRE, ancre: 'end', italique: true });
  if (titreY) g += texte(X(ay) + 10, Y(ymax) - 6, titreY, { taille: 13, couleur: ENCRE, ancre: 'start', italique: true });
  return { svg: g, X, Y };
}

/** Perspective cavalière : point (x à droite, y vers le haut, z en profondeur) → écran. */
function cav(ox, oy, s, k = 0.5, angle = 45) {
  return (x, y, z) => [ox + s * (x + k * z * Math.cos(rad(angle))), oy - s * (y + k * z * Math.sin(rad(angle)))];
}

/** Boîte de diagramme (organigramme) : rectangle, losange ou ovale. */
function noeud(x, y, w, h, t, { forme = 'rect', fond = '#eef3fb', bord = BLEU, taille = 14 } = {}) {
  if (forme === 'losange') {
    const pts = [[x + w / 2, y], [x + w, y + h / 2], [x + w / 2, y + h], [x, y + h / 2]];
    return polygone(pts, { couleur: bord, fond, opacite: 1, epaisseur: 1.8 }) + texte(x + w / 2, y + h / 2 + taille * 0.35, t, { taille });
  }
  if (forme === 'ovale') {
    return `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(w)}" height="${nb(h)}" rx="${nb(h / 2)}" fill="${fond}" stroke="${bord}" stroke-width="1.8"/>` + texte(x + w / 2, y + h / 2 + taille * 0.35, t, { taille });
  }
  return boite(x, y, w, h, t, { fond, bord, taille });
}

const SCH = {};

// ---------------------------------------------------------------------------
// Schémas génériques (réutilisés avec des paramètres)
// ---------------------------------------------------------------------------

/**
 * Droite graduée avec points, sauts et accolades.
 * points : [{ v, nom, t, couleur }] ; sauts : [{ de, a, t, couleur, bas }] ; accolades : [{ de, a, t, couleur }]
 */
SCH['droite'] = ({ W = 640, H: H0 = 170, min, max, sub = 1, pas = 1, demi = false, etiq = null, y = 95, points = [], sauts = [], accolades = [], titre = '', notes = [], zones = [] }) => {
  const bas = accolades.some((a) => a.bas) ? 92 : points.some((p) => p.bas) ? 64 : 40;
  const H = Math.max(H0, y + bas + notes.length * 20 + 6);
  const d = droite({ x0: 45, x1: W - 45, y, min, max, sub, pas, demi, etiq: etiq ? (v) => (etiq[fr(v)] ?? etiq['*'] ?? fr(v)) : null });
  let g = '';
  for (const z of zones) {
    const xa = d.X(z.de), xb = z.a === null ? W - 30 : d.X(z.a);
    g += `<rect x="${nb(Math.min(xa, xb))}" y="${y - 7}" width="${nb(Math.abs(xb - xa))}" height="14" fill="${z.couleur || VERT}" fill-opacity="0.25"/>`;
    if (z.crochet) {
      const c = z.crochet; // '[' ou ']' placé en xa
      const sens = c === '[' ? 1 : -1;
      g += `<path d="M ${nb(xa + sens * 9)} ${y - 15} L ${nb(xa)} ${y - 15} L ${nb(xa)} ${y + 15} L ${nb(xa + sens * 9)} ${y + 15}" fill="none" stroke="${z.couleur || VERT}" stroke-width="3"/>`;
    }
  }
  g += d.svg;
  for (const a of accolades) {
    const yA = a.bas ? y + 38 : y - 20;
    g += accolade(d.X(a.de), d.X(a.a), yA, { bas: !!a.bas, couleur: a.couleur || VERT });
    g += tx((d.X(a.de) + d.X(a.a)) / 2, a.bas ? yA + 38 : yA - 26, a.t, { taille: 13, couleur: a.couleur || VERT, gras: true });
  }
  for (const s of sauts) g += saut(d.X(s.de), d.X(s.a), y - (s.bas ? -10 : 10), { couleur: s.couleur || ROUGE, haut: !s.bas, texte: s.t, h: s.h ?? null });
  for (const p of points) {
    const c = p.couleur || BLEU;
    g += `<circle cx="${nb(d.X(p.v))}" cy="${y}" r="5" fill="${c}"/>`;
    const yy = p.bas ? y + 52 : y - (p.haut ?? 22);
    if (p.nom || p.t) g += frac(d.X(p.v), yy, p.t ?? p.nom, { taille: 14, couleur: c, gras: true });
  }
  if (titre) g += texte(W / 2, 24, titre, { taille: 15, gras: true });
  notes.forEach((n, i) => { g += texte(W / 2, y + bas + 4 + i * 20, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, H, g);
};

/**
 * Bandes de fractions. lignes : [{ den, parts: [{ n, couleur }], label, droite }]
 */
SCH['bandes'] = ({ lignes, W = 640, largeur = 420, h = 30, ecart = 20, x0 = 110, titre = '', notes = [] }) => {
  let g = '';
  let y = titre ? 46 : 20;
  if (titre) g += texte(W / 2, 26, titre, { taille: 15, gras: true });
  for (const L of lignes) {
    const w = largeur / L.den;
    let k = 0;
    for (const p of L.parts || []) {
      for (let i = 0; i < p.n; i++, k++) g += `<rect x="${nb(x0 + k * w)}" y="${y}" width="${nb(w)}" height="${h}" fill="${p.couleur || BLEU}" fill-opacity="0.55"/>`;
    }
    for (let i = 0; i <= L.den; i++) g += ligne(x0 + i * w, y, x0 + i * w, y + h, { couleur: ENCRE, epaisseur: i === 0 || i === L.den ? 2 : 1.2 });
    g += ligne(x0, y, x0 + largeur, y, { couleur: ENCRE, epaisseur: 2 }) + ligne(x0, y + h, x0 + largeur, y + h, { couleur: ENCRE, epaisseur: 2 });
    if (L.label) g += frac(x0 / 2, y + h / 2 + 5, L.label, { taille: 15, gras: true, couleur: L.couleurLabel || ENCRE });
    if (L.droite) g += texte(x0 + largeur + 14, y + h / 2 + 5, L.droite, { taille: 14, couleur: L.couleurDroite || ATTENUE, ancre: 'start' });
    y += h + (L.ecart ?? ecart);
  }
  y += 4;
  notes.forEach((n) => { g += texte(W / 2, y + 8, n, { taille: 14, couleur: ATTENUE }); y += 20; });
  return enveloppe(W, y + 6, g);
};

/**
 * Schéma en barres (parts égales). lignes : [{ nom, n, couleur, valeur, parts: texte dans chaque part }]
 * total : { t, lignes } accolade englobant tout, à droite.
 */
SCH['barres-parts'] = ({ lignes, unite = 60, h = 34, W = 640, x0 = 110, titre = '', notes = [], total = null }) => {
  let g = '';
  let y = titre ? 50 : 22;
  if (titre) g += texte(W / 2, 28, titre, { taille: 15, gras: true });
  const yDeb = y;
  for (const L of lignes) {
    for (let i = 0; i < L.n; i++) {
      g += `<rect x="${nb(x0 + i * unite)}" y="${y}" width="${unite}" height="${h}" fill="${L.couleur || BLEU}" fill-opacity="0.35" stroke="${L.couleur || BLEU}" stroke-width="1.8"/>`;
      if (L.parts) g += texte(x0 + i * unite + unite / 2, y + h / 2 + 5, L.parts, { taille: 14, gras: true });
    }
    g += texte(x0 - 12, y + h / 2 + 5, L.nom, { taille: 15, gras: true, ancre: 'end' });
    if (L.valeur) g += texte(x0 + L.n * unite + 12, y + h / 2 + 5, L.valeur, { taille: 14, couleur: L.couleur || BLEU, gras: true, ancre: 'start' });
    y += h + 16;
  }
  if (total) {
    const xr = x0 + Math.max(...lignes.map((L) => L.n)) * unite + (total.dx ?? 100);
    const yA = yDeb, yB = y - 16;
    g += `<path d="M ${xr} ${yA} Q ${xr + 10} ${yA} ${xr + 10} ${yA + 10} L ${xr + 10} ${(yA + yB) / 2 - 10} Q ${xr + 10} ${(yA + yB) / 2} ${xr + 20} ${(yA + yB) / 2} Q ${xr + 10} ${(yA + yB) / 2} ${xr + 10} ${(yA + yB) / 2 + 10} L ${xr + 10} ${yB - 10} Q ${xr + 10} ${yB} ${xr} ${yB}" fill="none" stroke="${VERT}" stroke-width="1.6"/>`;
    g += texte(xr + 28, (yA + yB) / 2 - 3 - ((total.t.split('\n').length - 1) * 9), total.t, { taille: 14, couleur: VERT, gras: true, ancre: 'start' });
  }
  y += 2;
  notes.forEach((n) => { g += texte(W / 2, y + 10, n, { taille: 14, couleur: ATTENUE }); y += 21; });
  return enveloppe(W, y + 8, g);
};

/**
 * Chaînes de calcul : lignes : [{ titre, valeurs, ops, sens (1 = aller, -1 = retour), couleur }]
 */
SCH['chaine'] = ({ lignes, W = 640, bw = 76, bh = 40, gap = 110, x0 = 150, notes = [] }) => {
  let g = '';
  let y = 22;
  for (const L of lignes) {
    const c = L.couleur || BLEU;
    if (L.titre) g += texte(x0 - 18, y + bh / 2 + 5, L.titre, { taille: 14, gras: true, ancre: 'end', couleur: c });
    L.valeurs.forEach((v, i) => {
      const x = x0 + i * (bw + gap);
      g += boite(x, y, bw, bh, v, { fond: L.fonds?.[i] || '#ffffff', bord: c, taille: 16, gras: true });
    });
    (L.ops || []).forEach((o, i) => {
      const xa = x0 + i * (bw + gap) + bw, xb = xa + gap;
      if ((L.sens ?? 1) > 0) g += fleche(xa + 6, y + bh / 2, xb - 6, y + bh / 2, { couleur: c, epaisseur: 2.2 });
      else g += fleche(xb - 6, y + bh / 2, xa + 6, y + bh / 2, { couleur: c, epaisseur: 2.2 });
      g += texte((xa + xb) / 2, y + bh / 2 - 9, o, { taille: 15, couleur: c, gras: true });
    });
    y += bh + (L.ecart ?? 26);
  }
  notes.forEach((n) => { g += texte(W / 2, y + 6, n, { taille: 14, couleur: ATTENUE }); y += 21; });
  return enveloppe(W, y + 4, g);
};

/**
 * Tableau de proportionnalité avec flèches. noms : [ligne1, ligne2] ; cols : [[a, b], …]
 * fleches : [{ de, a, t }] (au-dessus, entre colonnes) ; coef : texte de la flèche verticale (à droite).
 */
SCH['tableau-prop'] = ({ noms, cols, fleches = [], coef = '', W = 640, cw = 80, nw = 190, notes = [], couleurs = {} }) => {
  const x0 = (W - nw - cols.length * cw - (coef ? 70 : 0)) / 2;
  const y0 = 70, h = 40;
  let g = '';
  const xs = (i) => x0 + nw + i * cw;
  // cases
  for (let r = 0; r < 2; r++) {
    g += `<rect x="${nb(x0)}" y="${y0 + r * h}" width="${nw}" height="${h}" fill="#eef3fb" stroke="${ENCRE}" stroke-width="1.5"/>`;
    g += texte(x0 + nw / 2, y0 + r * h + h / 2 + 5, noms[r], { taille: 14, gras: true });
    cols.forEach((c, i) => {
      const fond = couleurs[`${r},${i}`] || '#ffffff';
      g += `<rect x="${nb(xs(i))}" y="${y0 + r * h}" width="${cw}" height="${h}" fill="${fond}" stroke="${ENCRE}" stroke-width="1.5"/>`;
      g += texte(xs(i) + cw / 2, y0 + r * h + h / 2 + 6, c[r], { taille: 16 });
    });
  }
  // flèches entre colonnes (au-dessus du tableau)
  fleches.forEach((f) => {
    const xa = xs(f.de) + cw / 2, xb = xs(f.a) + cw / 2;
    const yb = f.bas ? y0 + 2 * h + 4 : y0 - 4;
    g += saut(xa, xb, yb, { couleur: f.couleur || ORANGE, haut: !f.bas, h: 16, texte: f.t, taille: 14 });
  });
  if (coef) {
    const xr = xs(cols.length) + 18;
    g += `<path d="M ${xr} ${y0 + h / 2} Q ${xr + 34} ${y0 + h} ${xr} ${y0 + 1.5 * h - 8}" fill="none" stroke="${VERT}" stroke-width="2.2"/>`;
    g += `<polygon points="${xr},${y0 + 1.5 * h} ${xr - 2},${y0 + 1.5 * h - 12} ${xr + 8},${y0 + 1.5 * h - 9}" fill="${VERT}"/>`;
    g += texte(xr + 30, y0 + h + 5, coef, { taille: 15, couleur: VERT, gras: true, ancre: 'start' });
  }
  let y = y0 + 2 * h + (fleches.some((f) => f.bas) ? 56 : 30);
  notes.forEach((n) => { g += texte(W / 2, y, n, { taille: 14, couleur: ATTENUE }); y += 21; });
  return enveloppe(W, y, g);
};

/** Diagramme en barres. */
SCH['diagramme-barres'] = ({ cats, vals, W = 560, H = 300, ymin = 0, ymax, pas = 1, etiq = null, titreX = '', titreY = '', couleur = BLEU, valeurs = false, ligneH = null, titre = '' }) => {
  const x0 = 60, x1 = W - 70, y0 = H - 46, y1 = titre ? (ligneH ? 70 : 56) : 34;
  const Y = (v) => y0 - ((v - ymin) / (ymax - ymin)) * (y0 - y1);
  let g = '';
  if (titre) g += texte(W / 2, 24, titre, { taille: 15, gras: true });
  for (let v = ymin; v <= ymax + 1e-9; v += pas) {
    g += ligne(x0, Y(v), x1, Y(v), { couleur: GRILLE, epaisseur: 1 });
    if (Math.abs(v / (etiq ?? pas) - Math.round(v / (etiq ?? pas))) < 1e-9) g += texte(x0 - 8, Y(v) + 4, fr(v), { taille: 12, couleur: ATTENUE, ancre: 'end' });
  }
  const n = cats.length, pasX = (x1 - x0) / n, bw = Math.min(56, pasX * 0.6);
  cats.forEach((c, i) => {
    const cx = x0 + pasX * (i + 0.5);
    const coul = Array.isArray(couleur) ? couleur[i] : couleur;
    g += `<rect x="${nb(cx - bw / 2)}" y="${nb(Y(vals[i]))}" width="${nb(bw)}" height="${nb(Y(ymin) - Y(vals[i]))}" fill="${coul}" fill-opacity="0.75" stroke="${coul}" stroke-width="1.5"/>`;
    g += texte(cx, y0 + 19, c, { taille: 13 });
    if (valeurs) g += tx(cx, Y(vals[i]) - 6, typeof valeurs === 'function' ? valeurs(vals[i], i) : fr(vals[i]), { taille: 13, gras: true, couleur: coul });
  });
  g += fleche(x0, y0, x0, y1 - 14, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  g += ligne(x0, y0, x1 + 8, y0, { couleur: AXE, epaisseur: 1.8 });
  if (ligneH) {
    g += ligne(x0, Y(ligneH.v), x1 + 8, Y(ligneH.v), { couleur: ROUGE, epaisseur: 2, pointilles: true });
    g += ligne(x1 - 250, y1 - 22, x1 - 222, y1 - 22, { couleur: ROUGE, epaisseur: 2, pointilles: true }) + texte(x1 - 216, y1 - 17, ligneH.t, { taille: 13, couleur: ROUGE, ancre: 'start', gras: true });
  }
  if (titreY) g += texte(x0 + 8, y1 - 18, titreY, { taille: 13, italique: true, ancre: 'start' });
  if (titreX) g += texte((x0 + x1) / 2, y0 + 40, titreX, { taille: 13, italique: true });
  return enveloppe(W, H, g);
};

/** Diagramme circulaire : parts [{ t, v, couleur }] ; départ en haut, sens des aiguilles d'une montre. */
SCH['camembert'] = ({ parts, W = 560, H = 300, angles = false, r = 110, cx = 190, titre = '' }) => {
  const tot = parts.reduce((s, p) => s + p.v, 0);
  const cy = titre ? H / 2 + 12 : H / 2;
  let g = '';
  if (titre) g += texte(W / 2, 24, titre, { taille: 15, gras: true });
  let a = 90; // haut
  const coul = [BLEU, ORANGE, VERT, VIOLET, ROUGE, '#8a6d00'];
  parts.forEach((p, i) => {
    const d = (p.v / tot) * 360;
    const c = p.couleur || coul[i % coul.length];
    const a2 = a - d; // sens horaire
    const [x1, y1] = P(cx, cy, r, a), [x2, y2] = P(cx, cy, r, a2);
    g += `<path d="M ${cx} ${cy} L ${nb(x1)} ${nb(y1)} A ${r} ${r} 0 ${d > 180 ? 1 : 0} 1 ${nb(x2)} ${nb(y2)} Z" fill="${c}" fill-opacity="0.7" stroke="#ffffff" stroke-width="2"/>`;
    const am = a - d / 2;
    if (angles) { const [xi, yi] = P(cx, cy, r * 0.62, am); g += tx(xi, yi + 5, fr(d) + '°', { taille: 14, gras: true }); }
    // légende à droite
    const ly = cy - (parts.length * 30) / 2 + i * 30 + 15;
    g += `<rect x="${cx + r + 40}" y="${ly - 12}" width="16" height="16" fill="${c}" fill-opacity="0.7"/>`;
    g += texte(cx + r + 64, ly + 1, p.t, { taille: 14, ancre: 'start' });
    a = a2;
  });
  return enveloppe(W, H, g);
};

/** Fréquences observées (barres) et probabilité (ligne). */
SCH['frequences'] = ({ effectifs, total, W = 600, H = 320, titre = '', nomsFaces = ['1', '2', '3', '4', '5', '6'] }) => {
  const vals = effectifs.map((e) => e / total);
  return SCH['diagramme-barres']({
    cats: nomsFaces.map((f) => 'face ' + f), vals, W, H, ymin: 0, ymax: 0.25, pas: 0.05, titreY: 'fréquence', titre,
    valeurs: (v) => v.toFixed(2).replace('.', ','), ligneH: { v: 1 / 6, t: 'probabilité 1/6 ≈ 0,17' },
  });
};

/** Diagramme de deux ensembles A et B dans un univers. */
SCH['venn'] = ({ W = 560, H = 270, omega = 'Ω', A = 'A', B = 'B', seulA = [], inter = [], seulB = [], dehors = [], couleurA = BLEU, couleurB = ORANGE, notes = [] }) => {
  const cxA = 220, cxB = 340, cy = 130, r = 95;
  let g = `<rect x="20" y="18" width="${W - 40}" height="${H - 36 - notes.length * 20}" rx="10" fill="none" stroke="${ENCRE}" stroke-width="1.8"/>`;
  g += texte(36, H - 30 - notes.length * 20, omega, { taille: 16, gras: true, ancre: 'start' });
  g += cercle(cxA, cy, r, { couleur: couleurA, fond: couleurA, opacite: 0.12, epaisseur: 2.2 });
  g += cercle(cxB, cy, r, { couleur: couleurB, fond: couleurB, opacite: 0.12, epaisseur: 2.2 });
  g += tx(cxA - 70, cy - r + 4, A, { taille: 15, gras: true, couleur: couleurA });
  g += tx(cxB + 70, cy - r + 4, B, { taille: 15, gras: true, couleur: couleurB });
  const pose = (liste, x) => liste.forEach((v, i) => { g += texte(x, cy + 6 + (i - (liste.length - 1) / 2) * 26, v, { taille: 18, gras: true }); });
  pose(seulA, cxA - 50);
  pose(inter, (cxA + cxB) / 2);
  pose(seulB, cxB + 50);
  dehors.forEach((v, i) => { g += texte(W - 60, 60 + i * 28, v, { taille: 18, gras: true }); });
  notes.forEach((n, i) => { g += texte(W / 2, H - 12 - (notes.length - 1 - i) * 20, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, H, g);
};

/** Arbre à deux épreuves. surligne : liste des issues favorables (ex. 'P ; P'). */
SCH['arbre'] = ({ n1 = ['P', 'F'], n2 = ['P', 'F'], titre1 = '1er lancer', titre2 = '2e lancer', surligne = [], W = 560, notes = [] }) => {
  const H0 = 60, feuilles = n1.length * n2.length, pasF = 46;
  const H = H0 + feuilles * pasF + 10 + notes.length * 21;
  let g = texte(150, 26, titre1, { taille: 13, couleur: ATTENUE }) + texte(300, 26, titre2, { taille: 13, couleur: ATTENUE }) + texte(450, 26, 'issue', { taille: 13, couleur: ATTENUE });
  const xr = 40, yr = H0 + (feuilles * pasF) / 2 - pasF / 2;
  g += `<circle cx="${xr}" cy="${yr}" r="5" fill="${ENCRE}"/>`;
  let k = 0;
  n1.forEach((a, i) => {
    const y1 = H0 + (i * n2.length + (n2.length - 1) / 2) * pasF;
    g += ligne(xr, yr, 136, y1, { couleur: ENCRE, epaisseur: 1.8 });
    g += boite(136, y1 - 15, 30, 30, a, { taille: 15, gras: true });
    n2.forEach((b) => {
      const y2 = H0 + k * pasF;
      const issue = `${a} ; ${b}`;
      const ok = surligne.includes(issue);
      g += ligne(166, y1, 286, y2, { couleur: ENCRE, epaisseur: 1.8 });
      g += boite(286, y2 - 15, 30, 30, b, { taille: 15, gras: true });
      g += boite(410, y2 - 16, 84, 32, `(${issue})`, { taille: 15, fond: ok ? '#e3f4ea' : '#ffffff', bord: ok ? VERT : ATTENUE, gras: ok });
      g += ligne(318, y2, 408, y2, { couleur: GRILLE, epaisseur: 1.4, pointilles: true });
      k++;
    });
  });
  notes.forEach((n, i) => { g += texte(W / 2, H0 + feuilles * pasF + 8 + i * 21, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, H, g);
};

/**
 * Points dans un repère, avec le chemin « horizontal puis vertical » depuis l'origine.
 * points : [{ x, y, nom, couleur, chemin }] ; quadrants : écrit les signes dans les quatre coins.
 */
SCH['repere-points'] = ({ xmin = -5, xmax = 5, ymin = -5, ymax = 5, W = 460, H = 400, points = [], quadrants = false, notes = [] }) => {
  const hb = notes.length * 21;
  const r = rep({ x0: 34, x1: W - 34, y0: H - 30 - hb, y1: 30, xmin, xmax, ymin, ymax });
  let g = r.svg;
  if (quadrants) {
    const q = [[1, 1, 'x > 0 et y > 0'], [-1, 1, 'x < 0 et y > 0'], [-1, -1, 'x < 0 et y < 0'], [1, -1, 'x > 0 et y < 0']];
    q.forEach(([sx, sy, t]) => { g += tx(r.X(sx > 0 ? xmax : xmin) - sx * 70, r.Y(sy > 0 ? ymax : ymin) + (sy > 0 ? 18 : -10), t, { taille: 13, couleur: VIOLET, gras: true }); });
  }
  for (const p of points) {
    const c = p.couleur || BLEU;
    if (p.chemin) {
      g += fleche(r.X(0), r.Y(0), r.X(p.x), r.Y(0), { couleur: c, epaisseur: 2.4, pointe: 9, pointilles: true });
      g += fleche(r.X(p.x), r.Y(0), r.X(p.x), r.Y(p.y), { couleur: c, epaisseur: 2.4, pointe: 9, pointilles: true });
    }
    g += `<circle cx="${nb(r.X(p.x))}" cy="${nb(r.Y(p.y))}" r="5" fill="${c}"/>`;
    g += tx(r.X(p.x) + (p.dx ?? 0), r.Y(p.y) + (p.dy ?? -12), `${p.nom}(${fr(p.x)} ; ${fr(p.y)})`, { taille: 15, gras: true, couleur: c });
  }
  notes.forEach((n, i) => { g += texte(W / 2, H - 12 - (notes.length - 1 - i) * 20, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, H, g);
};

/**
 * Rectangle découpé en aires (distributivité). larges / hauts : [{ t, w }] ; cellules[i][j] : texte de la case (ligne i, colonne j).
 */
SCH['rectangle-aires'] = ({ larges, hauts, cellules, W = 560, titre = '', notes = [], couleurs = null }) => {
  const tw = larges.reduce((s, l) => s + l.w, 0), th = hauts.reduce((s, h) => s + h.w, 0);
  const x0 = (W - tw) / 2 + 10, y0 = titre ? 80 : 52;
  let g = '';
  if (titre) g += texte(W / 2, 28, titre, { taille: 16, gras: true });
  const palette = couleurs || [[BLEU, ORANGE], [VERT, VIOLET]];
  let y = y0;
  hauts.forEach((h, i) => {
    let x = x0;
    larges.forEach((l, j) => {
      const c = palette[i % palette.length][j % palette[0].length];
      g += `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(l.w)}" height="${nb(h.w)}" fill="${c}" fill-opacity="0.18" stroke="${ENCRE}" stroke-width="2"/>`;
      g += texte(x + l.w / 2, y + h.w / 2 + 6, cellules[i][j], { taille: 17, gras: true, couleur: c });
      x += l.w;
    });
    g += tx(x0 - 14, y + h.w / 2 + 5, h.t, { taille: 16, gras: true, ancre: 'end', italique: true });
    y += h.w;
  });
  let x = x0;
  larges.forEach((l) => { g += tx(x + l.w / 2, y0 - 12, l.t, { taille: 16, gras: true, italique: true }); x += l.w; });
  let yy = y0 + th + 30;
  notes.forEach((n) => { g += texte(W / 2, yy, n, { taille: 15, couleur: ENCRE, gras: true }); yy += 23; });
  return enveloppe(W, yy, g);
};

/** Empilement de cubes (pavé nx × ny × nz) en perspective cavalière. */
SCH['empilement'] = ({ nx = 4, ny = 2, nz = 3, c = 40, W = 520, legX = '', legY = '', legZ = '', notes = [] }) => {
  const k = 0.5;
  const H = Math.round((ny + nz * k * 0.707) * c + 70 + notes.length * 22);
  const ox = (W - (nx + nz * k * 0.707) * c) / 2 - 20, oy = H - 50 - notes.length * 20;
  const p = cav(ox, oy, c, k, 45);
  let g = '';
  const face = (pts, f) => polygone(pts.map((q) => p(...q)), { couleur: ENCRE, fond: f, opacite: 1, epaisseur: 1.4 });
  for (let z = nz - 1; z >= 0; z--) for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) {
    g += face([[x, y, z], [x + 1, y, z], [x + 1, y + 1, z], [x, y + 1, z]], '#cfe0fb');
    g += face([[x, y + 1, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]], '#eaf2fe');
    g += face([[x + 1, y, z], [x + 1, y, z + 1], [x + 1, y + 1, z + 1], [x + 1, y + 1, z]], '#a9c6f5');
  }
  if (legX) { const [a, b] = [p(0, 0, 0), p(nx, 0, 0)]; g += tx((a[0] + b[0]) / 2, a[1] + 24, legX, { taille: 14, gras: true, couleur: ROUGE }); }
  if (legY) { const [a, b] = [p(0, 0, 0), p(0, ny, 0)]; g += tx(a[0] - 10, (a[1] + b[1]) / 2 + 5, legY, { taille: 14, gras: true, couleur: VERT, ancre: 'end' }); }
  if (legZ) { const [a, b] = [p(nx, 0, 0), p(nx, 0, nz)]; g += tx((a[0] + b[0]) / 2 + 12, (a[1] + b[1]) / 2 + 12, legZ, { taille: 14, gras: true, couleur: ORANGE, ancre: 'start' }); }
  notes.forEach((n, i) => { g += texte(W / 2, H - 14 - (notes.length - 1 - i) * 20, n, { taille: 15, gras: true }); });
  return enveloppe(W, H, g);
};

// ---------------------------------------------------------------------------
// Géométrie plane
// ---------------------------------------------------------------------------

/** Cercle : centre, rayon, diamètre, corde ; cercle et disque. */
SCH['cercle-vocab'] = () => {
  const W = 600, H = 300, cx = 180, cy = 150, r = 115;
  let g = cercle(cx, cy, r, { couleur: BLEU, fond: BLEU, opacite: 0.08, epaisseur: 2.6 });
  const B = P(cx, cy, r, 165), C = P(cx, cy, r, 345), A = P(cx, cy, r, 70), D = P(cx, cy, r, 228), E = P(cx, cy, r, 295);
  g += seg(B, C, { couleur: VERT, epaisseur: 2.4 }) + seg([cx, cy], A, { couleur: ROUGE, epaisseur: 2.4 }) + seg(D, E, { couleur: ORANGE, epaisseur: 2.4 });
  g += pointN([cx, cy], '') + tx(cx - 4, cy + 22, 'O', { taille: 16, gras: true });
  for (const [q, n, dx, dy] of [[A, 'A', 8, -8], [B, 'B', -14, -6], [C, 'C', 14, 14], [D, 'D', -14, 12], [E, 'E', 10, 18]]) g += pointN(q, '') + tx(q[0] + dx, q[1] + dy, n, { taille: 15, gras: true });
  const mA = mil([cx, cy], A);
  g += tx(mA[0] + 34, mA[1] + 4, 'rayon', { taille: 14, couleur: ROUGE, gras: true });
  g += tx(cx - 60, cy + 4 + 26, 'diamètre', { taille: 14, couleur: VERT, gras: true });
  const mD = mil(D, E);
  g += tx(mD[0] + 6, mD[1] - 10, 'corde', { taille: 14, couleur: ORANGE, gras: true });
  // légende à droite
  const xl = 345;
  g += texte(xl, 70, 'centre O', { taille: 14, ancre: 'start' });
  g += texte(xl, 98, 'rayon [OA] : OA = r', { taille: 14, ancre: 'start', couleur: ROUGE });
  g += texte(xl, 126, 'diamètre [BC] : BC = 2 × r', { taille: 14, ancre: 'start', couleur: VERT });
  g += texte(xl, 154, 'corde [DE]', { taille: 14, ancre: 'start', couleur: ORANGE });
  g += texte(xl, 196, 'cercle : le contour seul', { taille: 14, ancre: 'start', couleur: BLEU, gras: true });
  g += texte(xl, 220, 'disque : contour + intérieur', { taille: 14, ancre: 'start', couleur: BLEU, gras: true });
  return enveloppe(W, H, g);
};

/** Médiatrice d'un segment, avec la construction au compas. */
SCH['mediatrice'] = () => {
  const W = 560, H = 330;
  const A = [150, 190], B = [390, 190], I = mil(A, B), r = 150;
  const hgt = Math.sqrt(r * r - 120 * 120);
  let g = '';
  // arcs de compas
  const a0 = (Math.atan2(hgt, 120) * 180) / Math.PI;
  g += arcAngle(A[0], A[1], r, a0 - 9, a0 + 9, { couleur: ATTENUE, epaisseur: 1.4 }) + arcAngle(A[0], A[1], r, -a0 - 9, -a0 + 9, { couleur: ATTENUE, epaisseur: 1.4 });
  g += arcAngle(B[0], B[1], r, 180 - a0 - 9, 180 - a0 + 9, { couleur: ATTENUE, epaisseur: 1.4 }) + arcAngle(B[0], B[1], r, 180 + a0 - 9, 180 + a0 + 9, { couleur: ATTENUE, epaisseur: 1.4 });
  g += ligne(I[0], 22, I[0], H - 14, { couleur: BLEU, epaisseur: 2.4 });
  g += tx(I[0] + 12, 30, '(d) médiatrice de [AB]', { taille: 14, couleur: BLEU, gras: true, ancre: 'start' });
  g += seg(A, B, { epaisseur: 2.6 });
  g += angleDroit(I[0], I[1], [1, 0], [0, -1], { taille: 13 });
  g += codeEgal(A, I, 1, { couleur: ENCRE }) + codeEgal(I, B, 1, { couleur: ENCRE });
  const M = [I[0], 62];
  g += seg(M, A, { couleur: ROUGE, pointilles: true }) + seg(M, B, { couleur: ROUGE, pointilles: true });
  g += codeEgal(M, A, 2, { couleur: ROUGE }) + codeEgal(M, B, 2, { couleur: ROUGE });
  g += pointN(A, '') + tx(A[0] - 14, A[1] + 6, 'A', { taille: 16, gras: true });
  g += pointN(B, '') + tx(B[0] + 14, B[1] + 6, 'B', { taille: 16, gras: true });
  g += pointN(I, '') + tx(I[0] - 14, I[1] + 22, 'I', { taille: 16, gras: true });
  g += pointN(M, '', { couleur: ROUGE }) + tx(M[0] - 16, M[1] - 2, 'M', { taille: 16, gras: true, couleur: ROUGE });
  g += pointN([I[0], I[1] - hgt], '') + pointN([I[0], I[1] + hgt], '');
  g += texte(W - 20, 250, 'IA = IB', { taille: 14, ancre: 'end' });
  g += texte(W - 20, 274, 'MA = MB', { taille: 14, ancre: 'end', couleur: ROUGE, gras: true });
  return enveloppe(W, H, g);
};

/** Les types d'angles : aigu, droit, obtus, plat. */
SCH['types-angles'] = () => {
  const W = 660, H = 210;
  const cas = [
    { nom: 'aigu', mes: 50, txt: 'entre 0° et 90°' },
    { nom: 'droit', mes: 90, txt: '90°' },
    { nom: 'obtus', mes: 130, txt: 'entre 90° et 180°' },
    { nom: 'plat', mes: 180, txt: '180°' },
  ];
  let g = '';
  cas.forEach((c, i) => {
    const x0 = 20 + i * 162;
    const O = c.mes === 180 ? [x0 + 75, 120] : c.mes > 90 ? [x0 + 72, 120] : [x0 + 25, 120];
    const L = c.mes === 180 ? 62 : c.mes > 90 ? 78 : 100;
    g += seg(O, P(O[0], O[1], L, 0), { epaisseur: 2.4 }) + seg(O, P(O[0], O[1], L, c.mes), { epaisseur: 2.4 });
    if (c.mes === 90) g += angleDroit(O[0], O[1], [1, 0], [0, -1], { taille: 16, couleur: BLEU });
    else g += arcAngle(O[0], O[1], 28, 0, c.mes, { couleur: BLEU, fond: BLEU });
    g += pointN(O, '');
    g += texte(x0 + 75, 160, c.nom, { taille: 16, gras: true, couleur: BLEU });
    g += texte(x0 + 75, 182, c.txt, { taille: 13, couleur: ATTENUE });
  });
  return enveloppe(W, H, g);
};

/** Triangles particuliers : isocèle, équilatéral, rectangle (codages). */
SCH['triangles-particuliers'] = () => {
  const W = 660, H = 230;
  let g = '';
  // isocèle en A
  const A1 = [110, 40], B1 = [50, 170], C1 = [170, 170];
  g += polygone([A1, B1, C1], { couleur: ENCRE, fond: BLEU, opacite: 0.08 }) + codeEgal(A1, B1, 1) + codeEgal(A1, C1, 1);
  g += arcAngle(B1[0], B1[1], 22, 0, dir(...B1, ...A1), { couleur: BLEU, fond: BLEU }) + arcAngle(C1[0], C1[1], 22, dir(...C1, ...A1), 180, { couleur: BLEU, fond: BLEU });
  g += texte(110, 200, 'isocèle', { taille: 15, gras: true }) + texte(110, 220, 'deux côtés égaux', { taille: 13, couleur: ATTENUE });
  // équilatéral
  const c = 130, B2 = [265, 170], C2 = [265 + c, 170], A2 = [265 + c / 2, 170 - (c * Math.sqrt(3)) / 2];
  g += polygone([A2, B2, C2], { couleur: ENCRE, fond: VERT, opacite: 0.08 }) + codeEgal(A2, B2, 1) + codeEgal(A2, C2, 1) + codeEgal(B2, C2, 1);
  for (const [S, a1, a2] of [[B2, 0, 60], [C2, 120, 180], [A2, 240, 300]]) g += arcAngle(S[0], S[1], 20, a1, a2, { couleur: VERT, fond: VERT });
  g += tx(B2[0] + 34, B2[1] - 8, '60°', { taille: 12, couleur: VERT }) + tx(C2[0] - 34, C2[1] - 8, '60°', { taille: 12, couleur: VERT }) + tx(A2[0], A2[1] + 38, '60°', { taille: 12, couleur: VERT });
  g += texte(330, 200, 'équilatéral', { taille: 15, gras: true }) + texte(330, 220, 'trois côtés égaux', { taille: 13, couleur: ATTENUE });
  // rectangle
  const A3 = [480, 170], B3 = [620, 170], C3 = [480, 60];
  g += polygone([A3, B3, C3], { couleur: ENCRE, fond: ORANGE, opacite: 0.08 }) + angleDroit(A3[0], A3[1], [1, 0], [0, -1], { taille: 15, couleur: ORANGE });
  g += texte(550, 200, 'rectangle', { taille: 15, gras: true }) + texte(550, 220, 'un angle droit', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Angles opposés par le sommet. */
SCH['angles-opposes'] = () => {
  const W = 520, H = 280, O = [260, 140], L = 140;
  let g = '';
  g += arcAngle(O[0], O[1], 40, 60, 120, { couleur: BLEU, fond: BLEU }) + arcAngle(O[0], O[1], 40, 240, 300, { couleur: BLEU, fond: BLEU });
  g += arcAngle(O[0], O[1], 30, -60, 60, { couleur: ORANGE, fond: ORANGE }) + arcAngle(O[0], O[1], 30, 120, 240, { couleur: ORANGE, fond: ORANGE });
  g += seg(P(O[0], O[1], L, 60), P(O[0], O[1], L, 240), { epaisseur: 2.4 }) + seg(P(O[0], O[1], L, 120), P(O[0], O[1], L, 300), { epaisseur: 2.4 });
  g += pointN(O, '') + tx(O[0] + 2, O[1] + 26, 'O', { taille: 15, gras: true });
  const lab = (a, t, c, rr = 58) => { const q = P(O[0], O[1], rr, a); return tx(q[0], q[1] + 6, t, { taille: 17, gras: true, couleur: c }); };
  g += lab(90, '1', BLEU) + lab(270, '3', BLEU) + lab(0, '2', ORANGE, 50) + lab(180, '4', ORANGE, 50);
  g += texte(20, 250, 'angles 1 et 3 égaux', { taille: 14, ancre: 'start', couleur: BLEU, gras: true });
  g += texte(W - 20, 250, 'angles 2 et 4 égaux', { taille: 14, ancre: 'end', couleur: ORANGE, gras: true });
  return enveloppe(W, H, g);
};

/** Deux parallèles coupées par une sécante : alternes-internes et correspondants. */
SCH['paralleles-secante'] = () => {
  const W = 600, H = 300, y1 = 100, y2 = 210, a = 60;
  const E2 = [250, y2], E1 = [250 + (y2 - y1) / Math.tan(rad(a)), y1];
  let g = '';
  g += arcAngle(E1[0], E1[1], 32, 180, 240, { couleur: BLEU, fond: BLEU });
  g += arcAngle(E2[0], E2[1], 32, 0, 60, { couleur: BLEU, fond: BLEU });
  g += arcAngle(E1[0], E1[1], 32, 0, 60, { couleur: ORANGE, fond: ORANGE });
  g += ligne(40, y1, 560, y1, { epaisseur: 2.4 }) + ligne(40, y2, 560, y2, { epaisseur: 2.4 });
  g += seg(P(E2[0], E2[1], 45, 240), P(E1[0], E1[1], 80, 60), { couleur: ENCRE, epaisseur: 2.4 });
  g += chevron([40, y1], [560, y1], 1, { t: 0.12 }) + chevron([40, y2], [560, y2], 1, { t: 0.12 });
  g += texte(560, y1 - 10, '(d₁)', { taille: 14, ancre: 'end' }) + texte(560, y2 - 10, '(d₂)', { taille: 14, ancre: 'end' });
  const lab = (S, ang, t, c) => { const q = P(S[0], S[1], 48, ang); return tx(q[0], q[1] + 6, t, { taille: 17, gras: true, couleur: c }); };
  g += lab(E1, 210, 'a', BLEU) + lab(E2, 30, 'b', BLEU) + lab(E1, 30, 'c', ORANGE);
  g += texte(W / 2, 262, 'a et b : alternes-internes (égaux)', { taille: 14, couleur: BLEU, gras: true });
  g += texte(W / 2, 284, 'c et b : correspondants (égaux)', { taille: 14, couleur: ORANGE, gras: true });
  g += tx(E1[0] + 60, E1[1] - 70, 'sécante', { taille: 13, couleur: ATTENUE, ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Somme des angles d'un triangle : la parallèle passant par un sommet. */
SCH['somme-angles'] = ({ a = 50, b = 70 } = {}) => {
  const W = 560, H = 300, c = 180 - a - b;
  const A = [130, 250], AB = 230, B = [A[0] + AB, 250];
  const AC = (AB * Math.sin(rad(b))) / Math.sin(rad(c));
  const C = P(A[0], A[1], AC, a);
  let g = '';
  g += arcAngle(A[0], A[1], 34, 0, a, { couleur: BLEU, fond: BLEU }) + arcAngle(B[0], B[1], 34, 180 - b, 180, { couleur: ORANGE, fond: ORANGE });
  g += arcAngle(C[0], C[1], 30, 180 + a, 360 - b, { couleur: VERT, fond: VERT });
  g += arcAngle(C[0], C[1], 34, 180, 180 + a, { couleur: BLEU, fond: BLEU }) + arcAngle(C[0], C[1], 34, 360 - b, 360, { couleur: ORANGE, fond: ORANGE });
  g += ligne(C[0] - 200, C[1], C[0] + 200, C[1], { couleur: ATTENUE, epaisseur: 1.8, pointilles: true });
  g += polygone([A, B, C], { couleur: ENCRE, fond: 'none' });
  const lab = (S, ang, t, col, rr = 56) => { const q = P(S[0], S[1], rr, ang); return tx(q[0], q[1] + 5, t, { taille: 14, gras: true, couleur: col }); };
  g += lab(A, a / 2, `${a}°`, BLEU, 60) + lab(B, 180 - b / 2, `${b}°`, ORANGE, 60);
  g += lab(C, 270 + (a - b) / 2, `${c}°`, VERT, 52) + lab(C, 180 + a / 2, `${a}°`, BLEU, 62) + lab(C, 360 - b / 2, `${b}°`, ORANGE, 62);
  g += tx(A[0] - 14, A[1] + 6, 'A', { taille: 16, gras: true }) + tx(B[0] + 14, B[1] + 6, 'B', { taille: 16, gras: true }) + tx(C[0], C[1] - 12, 'C', { taille: 16, gras: true });
  g += tx(C[0] + 160, C[1] - 10, 'parallèle à (AB)', { taille: 13, couleur: ATTENUE, ancre: 'end' });
  g += texte(W / 2, 286, `${a}° + ${c}° + ${b}° = 180° : un angle plat`, { taille: 15, gras: true });
  return enveloppe(W, H, g);
};

/** Inégalité triangulaire : 2, 2 et 6 cm, les arcs ne se rejoignent pas. */
SCH['inegalite-triangulaire'] = ({ a = 2, b = 2, c = 6, u = 60 } = {}) => {
  const W = 600, H = 230;
  const A = [120, 160], B = [120 + c * u, 160];
  let g = seg(A, B, { epaisseur: 2.6 });
  g += arcAngle(A[0], A[1], a * u, 0, 180, { couleur: BLEU, epaisseur: 2 }) + arcAngle(B[0], B[1], b * u, 0, 180, { couleur: ORANGE, epaisseur: 2 });
  g += pointN(A, '') + tx(A[0] - 6, A[1] + 22, 'A', { taille: 15, gras: true }) + pointN(B, '') + tx(B[0] + 6, B[1] + 22, 'B', { taille: 15, gras: true });
  g += tx(A[0] + a * u * 0.5, A[1] - a * u - 8 + 30, `${a} cm`, { taille: 14, couleur: BLEU, gras: true });
  g += tx(B[0] - b * u * 0.5, B[1] - b * u - 8 + 30, `${b} cm`, { taille: 14, couleur: ORANGE, gras: true });
  g += tx((A[0] + B[0]) / 2, A[1] + 22, `AB = ${c} cm`, { taille: 14, gras: true });
  g += texte(W / 2, 212, `${a} + ${b} = ${a + b} < ${c} : les arcs ne se coupent pas, pas de triangle`, { taille: 14, couleur: ROUGE, gras: true });
  return enveloppe(W, H, g);
};

/** Parallélogramme ABCD : côtés opposés parallèles et égaux, diagonales de même milieu. */
SCH['parallelogramme'] = () => {
  const W = 600, H = 300;
  const A = [110, 250], B = [390, 250], C = [490, 70], D = [A[0] + C[0] - B[0], A[1] + C[1] - B[1]], O = mil(A, C);
  let g = polygone([A, B, C, D], { couleur: ENCRE, fond: BLEU, opacite: 0.06, epaisseur: 2.6 });
  g += seg(A, C, { couleur: ATTENUE, epaisseur: 1.6, pointilles: true }) + seg(B, D, { couleur: ATTENUE, epaisseur: 1.6, pointilles: true });
  g += chevron(A, B, 1, { couleur: BLEU, t: 0.3 }) + chevron(D, C, 1, { couleur: BLEU, t: 0.3 });
  g += chevron(A, D, 2, { couleur: ORANGE, t: 0.3 }) + chevron(B, C, 2, { couleur: ORANGE, t: 0.3 });
  g += codeEgal(A, B, 1, { couleur: BLEU }) + codeEgal(D, C, 1, { couleur: BLEU });
  g += codeEgal(A, D, 2, { couleur: ORANGE }) + codeEgal(B, C, 2, { couleur: ORANGE });
  g += codeEgal(A, O, 1, { couleur: VERT, taille: 5 }) + codeEgal(O, C, 1, { couleur: VERT, taille: 5 });
  g += codeEgal(B, O, 3, { couleur: VIOLET, taille: 5 }) + codeEgal(O, D, 3, { couleur: VIOLET, taille: 5 });
  g += pointN(O, '') + tx(O[0], O[1] + 24, 'O', { taille: 15, gras: true });
  g += tx(A[0] - 14, A[1] + 8, 'A', { taille: 16, gras: true }) + tx(B[0] + 14, B[1] + 8, 'B', { taille: 16, gras: true });
  g += tx(C[0] + 14, C[1], 'C', { taille: 16, gras: true }) + tx(D[0] - 14, D[1], 'D', { taille: 16, gras: true });
  g += texte(W / 2, 288, 'O est le milieu de [AC] et de [BD] : c’est le centre de symétrie', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Rectangle, losange, carré : ce que disent leurs diagonales. */
SCH['quadrilateres-particuliers'] = () => {
  const W = 660, H = 250;
  let g = '';
  const panneau = (cx, cy, pts, nom, t1, t2, opts) => {
    const [A, B, C, D] = pts, O = [cx, cy];
    let s = polygone(pts, { couleur: ENCRE, fond: opts.c, opacite: 0.08, epaisseur: 2.4 });
    s += seg(A, C, { couleur: opts.c, epaisseur: 1.8 }) + seg(B, D, { couleur: opts.c, epaisseur: 1.8 });
    const nMarq = opts.memes ? 1 : 0;
    if (opts.memes) { for (const q of pts) s += codeEgal(O, q, 1, { couleur: opts.c, taille: 5 }); }
    else { s += codeEgal(O, A, 1, { couleur: opts.c, taille: 5 }) + codeEgal(O, C, 1, { couleur: opts.c, taille: 5 }) + codeEgal(O, B, 2, { couleur: opts.c, taille: 5 }) + codeEgal(O, D, 2, { couleur: opts.c, taille: 5 }); }
    if (opts.perp) { const u = unit(O, A), v = unit(O, B); s += angleDroit(O[0], O[1], u, v, { taille: 11, couleur: opts.c }); }
    if (opts.droit) s += angleDroit(D[0], D[1], unit(D, C), unit(D, A), { taille: 12 });
    if (opts.cotes) for (let i = 0; i < 4; i++) s += codeEgal(pts[i], pts[(i + 1) % 4], 1);
    s += texte(cx, 196, nom, { taille: 16, gras: true, couleur: opts.c });
    s += texte(cx, 216, t1, { taille: 13, couleur: ATTENUE }) + texte(cx, 234, t2, { taille: 13, couleur: ATTENUE });
    return s + nMarq * 0;
  };
  // rectangle 150 x 90
  g += panneau(110, 100, [[35, 145], [185, 145], [185, 55], [35, 55]], 'rectangle', 'diagonales de', 'même longueur', { c: BLEU, memes: true, droit: true });
  // losange : demi-diagonales 75 et 45
  g += panneau(330, 100, [[330, 145], [405, 100], [330, 55], [255, 100]], 'losange', 'diagonales', 'perpendiculaires', { c: ORANGE, perp: true, cotes: true });
  // carré
  g += panneau(550, 100, [[550, 165], [615, 100], [550, 35], [485, 100]], 'carré', 'les deux à la fois', '', { c: VERT, memes: true, perp: true, cotes: true });
  return enveloppe(W, H, g);
};

/** Aire du parallélogramme : base × hauteur (8 cm, 5 cm, côté oblique 6 cm), à l'échelle. */
SCH['aire-parallelogramme'] = () => {
  const W = 560, H = 290, u = 30;
  const dx = Math.sqrt(36 - 25) * u;
  const A = [70, 220], B = [70 + 8 * u, 220], D = [70 + dx, 220 - 5 * u], C = [B[0] + dx, D[1]];
  const Hh = [D[0], 220];
  let g = polygone([A, B, C, D], { couleur: ENCRE, fond: BLEU, opacite: 0.08, epaisseur: 2.6 });
  g += seg(D, Hh, { couleur: ROUGE, epaisseur: 2.2, pointilles: true }) + angleDroit(Hh[0], Hh[1], [1, 0], [0, -1], { taille: 12, couleur: ROUGE });
  g += tx((A[0] + B[0]) / 2 + 30, 244, 'base : 8 cm', { taille: 14, gras: true });
  g += tx(D[0] + 8, (D[1] + Hh[1]) / 2 + 4, 'hauteur : 5 cm', { taille: 14, gras: true, couleur: ROUGE, ancre: 'start' });
  const mAD = mil(A, D);
  g += tx(mAD[0] - 12, mAD[1], '6 cm', { taille: 14, couleur: ATTENUE, ancre: 'end' });
  g += texte(W / 2, 276, 'Aire = base × hauteur = 8 × 5 = 40 cm² (le côté de 6 cm ne sert pas)', { taille: 14, gras: true });
  return enveloppe(W, H, g);
};

// --- transformations -------------------------------------------------------

/** Image d'un point par la symétrie d'axe (passant par a, de direction u unitaire). */
const symAxe = (M, a, u) => { const t = (M[0] - a[0]) * u[0] + (M[1] - a[1]) * u[1]; const Hp = [a[0] + t * u[0], a[1] + t * u[1]]; return [2 * Hp[0] - M[0], 2 * Hp[1] - M[1]]; };
const symCentre = (M, O) => [2 * O[0] - M[0], 2 * O[1] - M[1]];
const trans = (M, v) => [M[0] + v[0], M[1] + v[1]];

/** Symétrie axiale : construction du symétrique d'un point et d'un triangle (axe oblique). */
SCH['symetrie-axiale'] = () => {
  const W = 600, H = 320;
  const a = [300, 160], u = unit([0, 0], [Math.cos(rad(70)), -Math.sin(rad(70))]);
  let g = seg([a[0] - u[0] * 140, a[1] - u[1] * 140], [a[0] + u[0] * 140, a[1] + u[1] * 140], { couleur: VERT, epaisseur: 2.4 });
  const ex = [a[0] + u[0] * 130, a[1] + u[1] * 130];
  g += tx(ex[0] + 12, ex[1] + 8, '(d)', { taille: 15, couleur: VERT, gras: true, ancre: 'start' });
  // point M et M'
  const M = [190, 225], Mp = symAxe(M, a, u);
  const Hm = mil(M, Mp);
  g += seg(M, Mp, { couleur: ROUGE, epaisseur: 1.6, pointilles: true });
  g += angleDroit(Hm[0], Hm[1], u, unit(Hm, Mp), { taille: 11, couleur: ROUGE });
  g += codeEgal(M, Hm, 1, { couleur: ROUGE }) + codeEgal(Hm, Mp, 1, { couleur: ROUGE });
  g += pointN(M, '', { couleur: ROUGE }) + tx(M[0] - 14, M[1] + 6, 'M', { taille: 15, gras: true, couleur: ROUGE });
  g += pointN(Mp, '', { couleur: ROUGE }) + tx(Mp[0] + 16, Mp[1] + 6, 'M′', { taille: 15, gras: true, couleur: ROUGE });
  g += tx(Hm[0] - 4, Hm[1] + 22, 'H', { taille: 14, gras: true, couleur: ROUGE });
  // triangle ABC
  const T = [[150, 70], [230, 50], [200, 130]], Tp = T.map((q) => symAxe(q, a, u));
  g += polygone(T, { couleur: BLEU, fond: BLEU, opacite: 0.15 }) + polygone(Tp, { couleur: ORANGE, fond: ORANGE, opacite: 0.15 });
  ['A', 'B', 'C'].forEach((n, i) => { g += tx(T[i][0] + (i === 1 ? 10 : -12), T[i][1] - 8 + (i === 2 ? 22 : 0), n, { taille: 14, gras: true, couleur: BLEU }); });
  ['A′', 'B′', 'C′'].forEach((n, i) => { g += tx(Tp[i][0] + 14, Tp[i][1] - 6 + (i === 2 ? 18 : 0), n, { taille: 14, gras: true, couleur: ORANGE }); });
  g += texte(W / 2, 306, '(d) est la médiatrice de [MM′] : même distance, angle droit', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Demi-tour (symétrie centrale) de centre O. */
SCH['demi-tour'] = () => {
  const W = 600, H = 300, O = [300, 140];
  const M = [170, 200], Mp = symCentre(M, O);
  let g = '';
  const T = [[120, 70], [210, 60], [170, 120]], Tp = T.map((q) => symCentre(q, O));
  T.forEach((q, i) => { g += seg(q, Tp[i], { couleur: GRILLE, epaisseur: 1.4, pointilles: true }); });
  g += polygone(T, { couleur: BLEU, fond: BLEU, opacite: 0.15 }) + polygone(Tp, { couleur: ORANGE, fond: ORANGE, opacite: 0.15 });
  g += seg(M, Mp, { couleur: ROUGE, epaisseur: 1.8, pointilles: true }) + codeEgal(M, O, 1, { couleur: ROUGE }) + codeEgal(O, Mp, 1, { couleur: ROUGE });
  g += pointN(M, '', { couleur: ROUGE }) + tx(M[0] - 14, M[1] + 8, 'M', { taille: 15, gras: true, couleur: ROUGE });
  g += pointN(Mp, '', { couleur: ROUGE }) + tx(Mp[0] + 16, Mp[1] + 4, 'M′', { taille: 15, gras: true, couleur: ROUGE });
  g += pointN(O, '') + tx(O[0] + 4, O[1] + 24, 'O', { taille: 16, gras: true });
  ['A', 'B', 'C'].forEach((n, i) => { g += tx(T[i][0] - 10, T[i][1] - 8 + (i === 2 ? 26 : 0), n, { taille: 14, gras: true, couleur: BLEU }); });
  ['A′', 'B′', 'C′'].forEach((n, i) => { g += tx(Tp[i][0] + 12, Tp[i][1] + 16 - (i === 2 ? 28 : 0), n, { taille: 14, gras: true, couleur: ORANGE }); });
  g += texte(W / 2, 286, 'O est le milieu de [MM′] : un demi-tour (180°) autour de O', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/**
 * Même « drapeau » transformé de plusieurs façons. types : ['axiale', 'centrale', 'translation'] ; segments : tracer [MM'].
 */
SCH['comparaison-transfos'] = ({ types = ['axiale', 'centrale'], segments = false }) => {
  const n = types.length, pw = n === 3 ? 220 : 300, W = pw * n, H = 270;
  let g = '';
  types.forEach((t, k) => {
    const x0 = k * pw;
    // drapeau : mât + fanion
    const base = (dx, dy) => [[dx, dy], [dx, dy - 80], [dx + 44, dy - 66], [dx, dy - 52]];
    const F = base(x0 + 50, 150);
    let Fp, titre, sous, extra = '';
    if (t === 'axiale') {
      const xa = x0 + pw / 2 - 10;
      Fp = F.map((q) => [2 * xa - q[0], q[1]]);
      extra = ligne(xa, 40, xa, 200, { couleur: VERT, epaisseur: 2.2 });
      titre = 'symétrie axiale'; sous = 'figure retournée';
    } else if (t === 'centrale') {
      const O = [x0 + pw / 2 - 10, 120];
      Fp = F.map((q) => symCentre(q, O));
      extra = pointN(O, '', { couleur: VERT }) + tx(O[0] + 12, O[1] - 6, 'O', { taille: 14, gras: true, couleur: VERT });
      titre = 'demi-tour'; sous = 'figure tournée de 180°';
    } else {
      const v = [n === 3 ? 100 : 150, 40];
      Fp = F.map((q) => trans(q, v));
      titre = 'translation'; sous = 'figure glissée';
    }
    const poly = (Q, c) => polygone([Q[1], Q[2], Q[3]], { couleur: c, fond: c, opacite: 0.35 }) + seg(Q[0], Q[1], { couleur: c, epaisseur: 3 });
    if (segments) [0, 2].forEach((i) => { g += seg(F[i], Fp[i], { couleur: ROUGE, epaisseur: 1.6, pointilles: true }); });
    g += extra + poly(F, BLEU) + poly(Fp, ORANGE);
    const bout = (Q) => { const u = unit(Q[1], Q[0]); return [Q[0][0] + u[0] * 16, Q[0][1] + u[1] * 16 + 5]; };
    const bM = bout(F), bMp = bout(Fp);
    g += tx(bM[0], bM[1], 'M', { taille: 13, gras: true, couleur: BLEU }) + tx(bMp[0], bMp[1], 'M′', { taille: 13, gras: true, couleur: ORANGE });
    g += texte(x0 + pw / 2, 236, titre, { taille: 15, gras: true }) + texte(x0 + pw / 2, 256, sous, { taille: 13, couleur: ATTENUE });
    if (k > 0) g += ligne(x0, 20, x0, 250, { couleur: GRILLE, epaisseur: 1.5 });
  });
  return enveloppe(W, H, g);
};

/** Translation sur quadrillage : A → A' (3 carreaux à droite, 2 vers le bas), image d'un triangle. */
SCH['translation-quadrillage'] = () => {
  const c = 38, nx = 14, ny = 6, x0 = 20, y0 = 20, W = x0 * 2 + nx * c, H = y0 + ny * c + 50;
  const Q = (i, j) => [x0 + i * c, y0 + (ny - j) * c];
  let g = '';
  for (let i = 0; i <= nx; i++) g += ligne(x0 + i * c, y0, x0 + i * c, y0 + ny * c, { couleur: GRILLE, epaisseur: 1 });
  for (let j = 0; j <= ny; j++) g += ligne(x0, y0 + j * c, x0 + nx * c, y0 + j * c, { couleur: GRILLE, epaisseur: 1 });
  const v = [3, -2];
  const A = Q(1, 5), Ap = Q(4, 3);
  g += flecheAB(A, Ap, { couleur: ROUGE, epaisseur: 2.6 });
  g += pointN(A, '', { couleur: ROUGE }) + tx(A[0] - 12, A[1] - 6, 'A', { taille: 15, gras: true, couleur: ROUGE });
  g += pointN(Ap, '', { couleur: ROUGE }) + tx(Ap[0] + 6, Ap[1] + 20, 'A′', { taille: 15, gras: true, couleur: ROUGE });
  g += tx(Q(2.5, 5)[0], Q(2.5, 5)[1] - 8, '3 à droite', { taille: 12, couleur: ROUGE }) + tx(Q(4, 4)[0] + 34, Q(4, 4)[1] + 4, '2 en bas', { taille: 12, couleur: ROUGE });
  g += ligne(...A, ...Q(4, 5), { couleur: ROUGE, epaisseur: 1.2, pointilles: true }) + ligne(...Q(4, 5), ...Ap, { couleur: ROUGE, epaisseur: 1.2, pointilles: true });
  const T = [[6, 3], [9, 3], [7, 5]], Tp = T.map(([i, j]) => [i + v[0], j + v[1]]);
  T.forEach((q, k) => { g += flecheAB(Q(...q), Q(...Tp[k]), { couleur: ATTENUE, epaisseur: 1.4, pointilles: true, pointe: 8 }); });
  g += polygone(T.map((q) => Q(...q)), { couleur: BLEU, fond: BLEU, opacite: 0.18 }) + polygone(Tp.map((q) => Q(...q)), { couleur: ORANGE, fond: ORANGE, opacite: 0.18 });
  const nomsT = ['M', 'N', 'P'], dT = [[-12, 6], [12, 6], [-4, -8]];
  T.forEach((q, k) => { const p = Q(...q); g += tx(p[0] + dT[k][0], p[1] + dT[k][1], nomsT[k], { taille: 14, gras: true, couleur: BLEU }); });
  Tp.forEach((q, k) => { const p = Q(...q); g += tx(p[0] + dT[k][0] * 1.4, p[1] + dT[k][1] + (k < 2 ? 12 : 0), nomsT[k] + '′', { taille: 14, gras: true, couleur: ORANGE }); });
  g += texte(W / 2, H - 14, 'Chaque point fait le même trajet que A : 3 carreaux à droite, 2 vers le bas.', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/**
 * Parallélogramme et translation / vecteurs : quatre points P1 → P2, P4 → P3 (P1P2P3P4 parcouru dans l'ordre).
 * noms : [nom de P1, P2, P3, P4] ; fleches : couples d'indices ; diagonales : afficher le milieu commun.
 */
SCH['parallelogramme-translation'] = ({ noms = ['A', 'B', 'D', 'C'], fleches = [[0, 1], [3, 2]], diagonales = false, cotes = true, notes = [] }) => {
  const W = 540, H = 300 + notes.length * 20;
  const P1 = [110, 230], P2 = [350, 200], P4 = [170, 80], P3 = [P4[0] + P2[0] - P1[0], P4[1] + P2[1] - P1[1]];
  const pts = [P1, P2, P3, P4];
  let g = '';
  if (cotes) g += polygone(pts, { couleur: ATTENUE, fond: BLEU, opacite: 0.06, epaisseur: 1.6 });
  if (diagonales) {
    const O = mil(P1, P3);
    g += seg(P1, P3, { couleur: VERT, epaisseur: 1.6, pointilles: true }) + seg(P2, P4, { couleur: VERT, epaisseur: 1.6, pointilles: true });
    g += codeEgal(P1, O, 1, { couleur: VERT, taille: 5 }) + codeEgal(O, P3, 1, { couleur: VERT, taille: 5 }) + codeEgal(P2, O, 2, { couleur: VERT, taille: 5 }) + codeEgal(O, P4, 2, { couleur: VERT, taille: 5 });
    g += pointN(O, '', { couleur: VERT });
  }
  fleches.forEach(([i, j], k) => { g += flecheAB(pts[i], pts[j], { couleur: k === 0 ? ROUGE : ORANGE, epaisseur: 3, pointe: 12 }); });
  const dec = [[-14, 10], [14, 12], [14, -4], [-14, -4]];
  pts.forEach((q, i) => { g += pointN(q, '') + tx(q[0] + dec[i][0], q[1] + dec[i][1], noms[i], { taille: 17, gras: true }); });
  notes.forEach((n, i) => { g += texte(W / 2, 290 + i * 20, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, H, g);
};

/** Relation de Chasles et somme de deux vecteurs de même origine. */
SCH['chasles'] = () => {
  const W = 660, H = 260;
  let g = '';
  // Chasles
  const A = [40, 200], B = [190, 80], C = [300, 190];
  g += flecheAB(A, B, { couleur: BLEU, epaisseur: 3, pointe: 12 }) + flecheAB(B, C, { couleur: ORANGE, epaisseur: 3, pointe: 12 }) + flecheAB(A, C, { couleur: VERT, epaisseur: 3, pointe: 12 });
  g += tx(A[0] - 10, A[1] + 20, 'A', { taille: 16, gras: true }) + tx(B[0], B[1] - 12, 'B', { taille: 16, gras: true }) + tx(C[0] + 14, C[1] + 6, 'C', { taille: 16, gras: true });
  g += vecExpr(170, 246, ['→AB', '+', '→BC', '=', '→AC']);
  g += ligne(340, 20, 340, 250, { couleur: GRILLE, epaisseur: 1.5 });
  // même origine
  const A2 = [380, 200], B2 = [540, 200], D2 = [440, 90], C2 = [B2[0] + D2[0] - A2[0], B2[1] + D2[1] - A2[1]];
  g += seg(B2, C2, { couleur: ATTENUE, pointilles: true, epaisseur: 1.6 }) + seg(D2, C2, { couleur: ATTENUE, pointilles: true, epaisseur: 1.6 });
  g += flecheAB(A2, B2, { couleur: BLEU, epaisseur: 3, pointe: 12 }) + flecheAB(A2, D2, { couleur: ORANGE, epaisseur: 3, pointe: 12 }) + flecheAB(A2, C2, { couleur: VERT, epaisseur: 3, pointe: 12 });
  g += tx(A2[0] - 10, A2[1] + 20, 'A', { taille: 16, gras: true }) + tx(B2[0] + 6, B2[1] + 20, 'B', { taille: 16, gras: true }) + tx(C2[0] + 12, C2[1] - 6, 'C', { taille: 16, gras: true }) + tx(D2[0] - 12, D2[1] - 8, 'D', { taille: 16, gras: true });
  g += vecExpr(500, 246, ['→AB', '+', '→AD', '=', '→AC']);
  return enveloppe(W, H, g);
};

/** Expression avec vecteurs : parts = ['→AB', '+', '→BC', '=', '→AC'] (flèche dessinée au-dessus des noms). */
function vecExpr(cx, y, parts, { taille = 16, couleur = ENCRE } = {}) {
  const lw = (s) => s.length * taille * 0.66;
  const gap = taille * 0.45;
  const tot = parts.reduce((s, p) => s + lw(p.replace(/^→/, '')), 0) + gap * (parts.length - 1);
  let x = cx - tot / 2, g = '';
  for (const p of parts) {
    const v = p.startsWith('→'), t = p.replace(/^→/, ''), w = lw(t);
    g += texte(x + w / 2, y, t, { taille, couleur, gras: true });
    if (v) g += fleche(x + 1, y - taille * 0.98, x + w + 1, y - taille * 0.98, { couleur, epaisseur: 1.4, pointe: 6 });
    x += w + gap;
  }
  return g;
}

// --- triangles (4e, 3e) ---------------------------------------------------

/** Droite des milieux. */
SCH['droite-milieux'] = () => {
  const W = 560, H = 300;
  const A = [230, 40], B = [80, 240], C = [470, 240], I = mil(A, B), J = mil(A, C);
  let g = polygone([A, B, C], { couleur: ENCRE, fond: BLEU, opacite: 0.05 });
  g += seg(I, J, { couleur: ROUGE, epaisseur: 2.8 });
  g += codeEgal(A, I, 1) + codeEgal(I, B, 1) + codeEgal(A, J, 2) + codeEgal(J, C, 2);
  g += chevron(I, J, 1, { couleur: ROUGE }) + chevron(B, C, 1, { couleur: ROUGE });
  g += tx(A[0], A[1] - 10, 'A', { taille: 16, gras: true }) + tx(B[0] - 14, B[1] + 6, 'B', { taille: 16, gras: true }) + tx(C[0] + 14, C[1] + 6, 'C', { taille: 16, gras: true });
  g += pointN(I, '') + tx(I[0] - 14, I[1], 'I', { taille: 16, gras: true }) + pointN(J, '') + tx(J[0] + 14, J[1], 'J', { taille: 16, gras: true });
  g += texte(W / 2, 270, 'I milieu de [AB], J milieu de [AC]', { taille: 14, couleur: ATTENUE });
  g += texte(W / 2, 292, '(IJ) // (BC) et IJ = BC ÷ 2', { taille: 15, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
};

/** Théorème de Pythagore : carrés construits sur les côtés d'un triangle 3-4-5. */
SCH['pythagore-carres'] = () => {
  const W = 470, H = 330, u = 24;
  const A = [170, 210], B = [A[0], A[1] - 3 * u], C = [A[0] + 4 * u, A[1]];
  let g = '';
  const grilleCarre = (O, e1, e2, n, c) => {
    let s = polygone([O, [O[0] + e1[0] * n, O[1] + e1[1] * n], [O[0] + (e1[0] + e2[0]) * n, O[1] + (e1[1] + e2[1]) * n], [O[0] + e2[0] * n, O[1] + e2[1] * n]], { couleur: c, fond: c, opacite: 0.15, epaisseur: 2 });
    for (let i = 1; i < n; i++) {
      s += ligne(O[0] + e1[0] * i, O[1] + e1[1] * i, O[0] + e1[0] * i + e2[0] * n, O[1] + e1[1] * i + e2[1] * n, { couleur: c, epaisseur: 0.8 });
      s += ligne(O[0] + e2[0] * i, O[1] + e2[1] * i, O[0] + e2[0] * i + e1[0] * n, O[1] + e2[1] * i + e1[1] * n, { couleur: c, epaisseur: 0.8 });
    }
    return s;
  };
  g += grilleCarre(A, [-u, 0], [0, -u], 3, BLEU); // carré sur [AB], à gauche
  g += grilleCarre(A, [u, 0], [0, u], 4, ORANGE); // carré sur [AC], en dessous
  const e1 = [(C[0] - B[0]) / 5, (C[1] - B[1]) / 5], e2 = [e1[1], -e1[0]]; // normale extérieure
  g += grilleCarre(B, e1, e2, 5, VERT);
  g += polygone([A, B, C], { couleur: ENCRE, fond: '#ffffff', opacite: 1, epaisseur: 2.6 });
  g += angleDroit(A[0], A[1], [0, -1], [1, 0], { taille: 10 });
  g += tx(A[0] - 6, A[1] - 6, '', {});
  g += tx(A[0] + 16, A[1] - 15, 'A', { taille: 14, gras: true, ancre: 'start' }) + tx(B[0] - 8, B[1] - 6, 'B', { taille: 14, gras: true, ancre: 'end' }) + tx(C[0] + 10, C[1] + 16, 'C', { taille: 14, gras: true, ancre: 'start' });
  g += tx(A[0] - 1.5 * u, A[1] - 1.5 * u + 5, '9', { taille: 18, gras: true, couleur: BLEU });
  g += tx(A[0] + 2 * u, A[1] + 2 * u + 5, '16', { taille: 18, gras: true, couleur: ORANGE });
  const cHyp = [B[0] + 2.5 * (e1[0] + e2[0]), B[1] + 2.5 * (e1[1] + e2[1])];
  g += tx(cHyp[0], cHyp[1] + 6, '25', { taille: 18, gras: true, couleur: VERT });
  g += texte(W - 20, 262, 'AB = 3, AC = 4, BC = 5', { taille: 14, ancre: 'end' });
  g += texte(W - 20, 288, '9 + 16 = 25', { taille: 16, gras: true, ancre: 'end' });
  g += texte(W - 20, 312, 'BC² = AB² + AC²', { taille: 16, gras: true, ancre: 'end', couleur: VERT });
  return enveloppe(W, H, g);
};

/** Triangle rectangle inscrit dans un cercle : l'hypoténuse est un diamètre. */
SCH['triangle-cercle'] = () => {
  const W = 520, H = 300, O = [260, 150], r = 115;
  const B = P(O[0], O[1], r, 180), C = P(O[0], O[1], r, 0), A = P(O[0], O[1], r, 62);
  let g = cercle(O[0], O[1], r, { couleur: BLEU, epaisseur: 2 });
  g += polygone([A, B, C], { couleur: ENCRE, fond: ORANGE, opacite: 0.08, epaisseur: 2.4 });
  g += angleDroit(A[0], A[1], unit(A, B), unit(A, C), { taille: 13 });
  g += seg(O, A, { couleur: ROUGE, epaisseur: 1.8, pointilles: true });
  g += codeEgal(B, O, 1, { couleur: ROUGE }) + codeEgal(O, C, 1, { couleur: ROUGE }) + codeEgal(O, A, 1, { couleur: ROUGE });
  g += pointN(O, '') + tx(O[0], O[1] + 22, 'O', { taille: 16, gras: true });
  g += tx(A[0] + 6, A[1] - 10, 'A', { taille: 16, gras: true }) + tx(B[0] - 14, B[1] + 5, 'B', { taille: 16, gras: true }) + tx(C[0] + 14, C[1] + 5, 'C', { taille: 16, gras: true });
  g += texte(W / 2, 290, 'O milieu de l’hypoténuse [BC] : OA = OB = OC = BC ÷ 2', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Thalès, triangles emboîtés (AM = 3, AB = 5, AC = 10, BC = 8), à l'échelle. */
SCH['thales-emboites'] = () => {
  const W = 560, H = 310, u = 30;
  // B(0,0), C(8,0), A tel que AB = 5 et AC = 10
  const ax = (25 - 100 + 64) / 16, ay = Math.sqrt(25 - ax * ax);
  const B = [150, 260], C = [150 + 8 * u, 260], A = [150 + ax * u, 260 - ay * u];
  const M = [A[0] + 0.6 * (B[0] - A[0]), A[1] + 0.6 * (B[1] - A[1])], N = [A[0] + 0.6 * (C[0] - A[0]), A[1] + 0.6 * (C[1] - A[1])];
  let g = polygone([A, B, C], { couleur: ENCRE, fond: BLEU, opacite: 0.05 });
  g += polygone([A, M, N], { couleur: ORANGE, fond: ORANGE, opacite: 0.18, epaisseur: 2 });
  g += seg(M, N, { couleur: ROUGE, epaisseur: 2.6 }) + seg(B, C, { couleur: ROUGE, epaisseur: 2.6 });
  g += chevron(M, N, 1, { couleur: ROUGE }) + chevron(B, C, 1, { couleur: ROUGE });
  g += tx(A[0], A[1] - 10, 'A', { taille: 16, gras: true }) + tx(B[0] - 14, B[1] + 6, 'B', { taille: 16, gras: true }) + tx(C[0] + 14, C[1] + 6, 'C', { taille: 16, gras: true });
  g += pointN(M, '') + tx(M[0] - 16, M[1] + 4, 'M', { taille: 16, gras: true }) + pointN(N, '') + tx(N[0] + 16, N[1], 'N', { taille: 16, gras: true });
  g += tx((A[0] + M[0]) / 2 - 16, (A[1] + M[1]) / 2, '3', { taille: 14, couleur: ORANGE, gras: true });
  g += tx((M[0] + B[0]) / 2 - 16, (M[1] + B[1]) / 2, '2', { taille: 14, couleur: ATTENUE });
  g += tx((B[0] + C[0]) / 2, B[1] + 22, 'BC = 8', { taille: 14, couleur: ROUGE, gras: true });
  g += tx(A[0] + 0.8 * (C[0] - A[0]) + 16, A[1] + 0.8 * (C[1] - A[1]) - 12, 'AC = 10', { taille: 14, gras: true, ancre: 'start' });
  g += texte(W - 20, 60, 'AM/AB = AN/AC = MN/BC', { taille: 15, gras: true, ancre: 'end' });
  g += texte(W - 20, 86, '3/5 = AN/10 = MN/8', { taille: 15, ancre: 'end', couleur: ORANGE });
  g += texte(W - 20, 112, 'AN = 6 cm ; MN = 4,8 cm', { taille: 15, ancre: 'end', couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Thalès, configuration papillon (OB = 4, OE = 6, OC = 5, OD = 7,5). */
SCH['thales-papillon'] = () => {
  const W = 560, H = 300, O = [250, 150], u = 28;
  const B = P(O[0], O[1], 4 * u, 140), C = P(O[0], O[1], 5 * u, 210);
  const E = [O[0] - 1.5 * (B[0] - O[0]), O[1] - 1.5 * (B[1] - O[1])], D = [O[0] - 1.5 * (C[0] - O[0]), O[1] - 1.5 * (C[1] - O[1])];
  let g = polygone([O, B, C], { couleur: ENCRE, fond: ORANGE, opacite: 0.15, epaisseur: 2 }) + polygone([O, E, D], { couleur: ENCRE, fond: BLEU, opacite: 0.1, epaisseur: 2 });
  g += seg(B, C, { couleur: ROUGE, epaisseur: 2.6 }) + seg(D, E, { couleur: ROUGE, epaisseur: 2.6 });
  g += chevron(C, B, 1, { couleur: ROUGE }) + chevron(E, D, 1, { couleur: ROUGE });
  g += pointN(O, '') + tx(O[0] + 2, O[1] + 24, 'O', { taille: 16, gras: true });
  g += tx(B[0] - 8, B[1] - 10, 'B', { taille: 16, gras: true }) + tx(C[0] - 14, C[1] + 8, 'C', { taille: 16, gras: true });
  g += tx(E[0] + 10, E[1] + 16, 'E', { taille: 16, gras: true }) + tx(D[0] + 12, D[1] - 6, 'D', { taille: 16, gras: true });
  const lab = (a, b, t, c, dx = 0, dy = 0) => { const m = mil(a, b); return tx(m[0] + dx, m[1] + dy, t, { taille: 14, gras: true, couleur: c }); };
  g += lab(O, B, '4', ORANGE, 8, -8) + lab(O, C, '5', ORANGE, 4, 18) + lab(O, E, '6', BLEU, -10, 18) + lab(O, D, 'OD ?', BLEU, -6, -12);
  g += texte(W / 2, 268, 'OB/OE = OC/OD = BC/DE', { taille: 15, gras: true });
  g += texte(W / 2, 290, '4/6 = 5/OD, donc OD = 5 × 6 ÷ 4 = 7,5 cm', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Trigonométrie : hypoténuse, côté opposé, côté adjacent selon l'angle choisi (triangle 3-4-5). */
SCH['trigo-cotes'] = () => {
  const W = 660, H = 290, u = 42;
  let g = '';
  [['B', 0], ['C', 330]].forEach(([ang, x0]) => {
    const A = [x0 + 90, 210], B = [A[0], A[1] - 3 * u], C = [A[0] + 4 * u, A[1]];
    const hyp = seg(B, C, { couleur: BLEU, epaisseur: 4 });
    const AB = seg(A, B, { couleur: ang === 'B' ? VERT : ROUGE, epaisseur: 4 });
    const AC = seg(A, C, { couleur: ang === 'B' ? ROUGE : VERT, epaisseur: 4 });
    g += hyp + AB + AC + angleDroit(A[0], A[1], [0, -1], [1, 0], { taille: 12 });
    if (ang === 'B') g += arcAngle(B[0], B[1], 26, 270, dir(...B, ...C), { couleur: VIOLET, fond: VIOLET, opacite: 0.35 });
    else g += arcAngle(C[0], C[1], 30, dir(...C, ...B), 180, { couleur: VIOLET, fond: VIOLET, opacite: 0.35 });
    g += tx(A[0] - 12, A[1] + 18, 'A', { taille: 15, gras: true }) + tx(B[0] - 12, B[1] - 4, 'B', { taille: 15, gras: true }) + tx(C[0] + 12, C[1] + 16, 'C', { taille: 15, gras: true });
    const mBC = mil(B, C), mAB = mil(A, B), mAC = mil(A, C);
    g += tx(mBC[0] + 18, mBC[1] - 8, 'hypoténuse', { taille: 14, gras: true, couleur: BLEU, ancre: 'start' });
    g += tx(mAB[0] - 10, mAB[1] + 4, ang === 'B' ? 'adjacent' : 'opposé', { taille: 14, gras: true, couleur: ang === 'B' ? VERT : ROUGE, ancre: 'end' });
    g += tx(mAC[0], mAC[1] + 22, ang === 'B' ? 'opposé' : 'adjacent', { taille: 14, gras: true, couleur: ang === 'B' ? ROUGE : VERT });
    g += texte(x0 + 160, 268, `angle de travail : ${ang}`, { taille: 15, gras: true, couleur: VIOLET });
  });
  g += ligne(330, 20, 330, 280, { couleur: GRILLE, epaisseur: 1.5 });
  return enveloppe(W, H, g);
};

// ---------------------------------------------------------------------------
// Espace
// ---------------------------------------------------------------------------

/** Arêtes d'un pavé en perspective cavalière (cachées en pointillés : celles du sommet arrière-bas-gauche). */
function pave(p, L, Hh, Pp, { couleur = ENCRE, fond = BLEU, epaisseur = 2.2 } = {}) {
  const v = (x, y, z) => p(x, y, z);
  let g = '';
  g += polygone([v(0, 0, 0), v(L, 0, 0), v(L, Hh, 0), v(0, Hh, 0)], { couleur: 'none', fond, opacite: 0.1, epaisseur: 0 });
  g += polygone([v(0, Hh, 0), v(L, Hh, 0), v(L, Hh, Pp), v(0, Hh, Pp)], { couleur: 'none', fond, opacite: 0.18, epaisseur: 0 });
  g += polygone([v(L, 0, 0), v(L, 0, Pp), v(L, Hh, Pp), v(L, Hh, 0)], { couleur: 'none', fond, opacite: 0.26, epaisseur: 0 });
  const cach = [[[0, 0, 0], [0, 0, Pp]], [[0, 0, Pp], [L, 0, Pp]], [[0, 0, Pp], [0, Hh, Pp]]];
  const vis = [[[0, 0, 0], [L, 0, 0]], [[L, 0, 0], [L, Hh, 0]], [[L, Hh, 0], [0, Hh, 0]], [[0, Hh, 0], [0, 0, 0]], [[L, 0, 0], [L, 0, Pp]], [[L, Hh, 0], [L, Hh, Pp]], [[0, Hh, 0], [0, Hh, Pp]], [[L, 0, Pp], [L, Hh, Pp]], [[L, Hh, Pp], [0, Hh, Pp]]];
  for (const [a, b] of cach) g += seg(v(...a), v(...b), { couleur, epaisseur: 1.5, pointilles: true });
  for (const [a, b] of vis) g += seg(v(...a), v(...b), { couleur, epaisseur });
  return g;
}

/** Ellipse (disque vu en perspective) : moitié avant pleine, moitié arrière en pointillés si demandé. */
function ellipse(cx, cy, rx, ry, { couleur = ENCRE, arriereCache = true, fond = 'none', opacite = 0.15, epaisseur = 2.2 } = {}) {
  let g = '';
  if (fond !== 'none') g += `<ellipse cx="${nb(cx)}" cy="${nb(cy)}" rx="${nb(rx)}" ry="${nb(ry)}" fill="${fond}" fill-opacity="${opacite}" stroke="none"/>`;
  g += `<path d="M ${nb(cx - rx)} ${nb(cy)} A ${nb(rx)} ${nb(ry)} 0 0 0 ${nb(cx + rx)} ${nb(cy)}" fill="none" stroke="${couleur}" stroke-width="${epaisseur}"/>`;
  g += `<path d="M ${nb(cx - rx)} ${nb(cy)} A ${nb(rx)} ${nb(ry)} 0 0 1 ${nb(cx + rx)} ${nb(cy)}" fill="none" stroke="${couleur}" stroke-width="${arriereCache ? 1.5 : epaisseur}"${arriereCache ? ' stroke-dasharray="6 5"' : ''}/>`;
  return g;
}

/** Les solides de 5e : cube, pavé droit, prisme droit, cylindre. */
SCH['solides-5e'] = () => {
  const W = 680, H = 230;
  let g = '';
  g += pave(cav(30, 170, 26, 0.5), 4, 4, 4);
  g += texte(85, 212, 'cube', { taille: 15, gras: true });
  g += pave(cav(190, 170, 24, 0.5), 5, 3, 3, { fond: ORANGE });
  g += texte(265, 212, 'pavé droit', { taille: 15, gras: true });
  // prisme droit à base triangulaire (base avant = triangle, profondeur)
  {
    const p = cav(370, 170, 25, 0.5);
    const T = [[0, 0], [4, 0], [1.3, 3.2]], d = 4;
    g += polygone(T.map(([x, y]) => p(x, y, 0)), { couleur: 'none', fond: VERT, opacite: 0.15, epaisseur: 0 });
    g += polygone([p(4, 0, 0), p(4, 0, d), p(1.3, 3.2, d), p(1.3, 3.2, 0)], { couleur: 'none', fond: VERT, opacite: 0.28, epaisseur: 0 });
    // arêtes cachées : sommet arrière-bas-gauche
    g += seg(p(0, 0, 0), p(0, 0, d), { epaisseur: 1.5, pointilles: true }) + seg(p(0, 0, d), p(4, 0, d), { epaisseur: 1.5, pointilles: true }) + seg(p(0, 0, d), p(1.3, 3.2, d), { epaisseur: 1.5, pointilles: true });
    g += polygone(T.map(([x, y]) => p(x, y, 0)), { couleur: ENCRE, fond: 'none', epaisseur: 2.2 });
    g += seg(p(4, 0, 0), p(4, 0, d), { epaisseur: 2.2 }) + seg(p(1.3, 3.2, 0), p(1.3, 3.2, d), { epaisseur: 2.2 }) + seg(p(4, 0, d), p(1.3, 3.2, d), { epaisseur: 2.2 });
    g += texte(445, 212, 'prisme droit', { taille: 15, gras: true });
  }
  // cylindre
  {
    const cx = 600, rx = 50, ry = 16, yb = 165, yh = 65;
    g += `<rect x="${cx - rx}" y="${yh}" width="${2 * rx}" height="${yb - yh}" fill="${VIOLET}" fill-opacity="0.1"/>`;
    g += ellipse(cx, yb, rx, ry, { couleur: ENCRE }) + ellipse(cx, yh, rx, ry, { couleur: ENCRE, arriereCache: false, fond: VIOLET, opacite: 0.15 });
    g += ligne(cx - rx, yh, cx - rx, yb, { epaisseur: 2.2 }) + ligne(cx + rx, yh, cx + rx, yb, { epaisseur: 2.2 });
    g += texte(cx, 212, 'cylindre', { taille: 15, gras: true });
  }
  return enveloppe(W, H, g);
};

/** Cube en perspective cavalière : face avant en vraie grandeur, fuyantes à 45° réduites de moitié. */
SCH['cavaliere-cube'] = () => {
  const W = 560, H = 330, s = 40;
  const p = cav(90, 280, s, 0.5);
  let g = pave(p, 4, 4, 4);
  // angle de fuite
  const B = p(4, 0, 0), Bz = p(4, 0, 4);
  g += ligne(B[0], B[1], B[0] + 70, B[1], { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  g += arcAngle(B[0], B[1], 36, 0, 45, { couleur: ROUGE, fond: ROUGE });
  g += tx(B[0] + 76, B[1] + 5, '45°', { taille: 14, couleur: ROUGE, gras: true, ancre: 'start' });
  g += tx(p(2, 0, 0)[0], p(2, 0, 0)[1] + 22, '4 cm', { taille: 14, gras: true });
  g += tx(p(0, 2, 0)[0] - 10, p(0, 2, 0)[1] + 5, '4 cm', { taille: 14, gras: true, ancre: 'end' });
  const mz = mil(p(4, 4, 0), p(4, 4, 4));
  g += tx(mz[0] + 12, mz[1] + 6, '2 cm', { taille: 14, gras: true, couleur: ROUGE, ancre: 'start' });
  g += texte(p(2, 2, 0)[0], p(2, 2, 0)[1] - 6, 'face avant', { taille: 13, couleur: BLEU }) + texte(p(2, 2, 0)[0], p(2, 2, 0)[1] + 12, 'en vraie grandeur', { taille: 13, couleur: BLEU });
  const xl = 370;
  g += texte(xl, 120, 'fuyantes parallèles,', { taille: 14, ancre: 'start' });
  g += texte(xl, 140, 'à 45°, réduites :', { taille: 14, ancre: 'start' });
  g += texte(xl, 160, '4 × 0,5 = 2 cm', { taille: 14, ancre: 'start', couleur: ROUGE, gras: true });
  g += texte(xl, 196, 'arêtes cachées', { taille: 14, ancre: 'start' });
  g += texte(xl, 216, 'en pointillés', { taille: 14, ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Patrons : cube (1-4-1) et cylindre (rayon 5 cm, hauteur 12 cm), à l'échelle. */
SCH['patrons-5e'] = () => {
  const W = 660, H = 300;
  let g = '';
  // cube : ceinture de 4 carrés, un au-dessus du 2e, un au-dessous du 3e
  const c = 44, x0 = 30, y0 = 110;
  const carres = [[0, 0], [1, 0], [2, 0], [3, 0], [1, -1], [2, 1]];
  carres.forEach(([i, j], k) => { g += `<rect x="${x0 + i * c}" y="${y0 + j * c}" width="${c}" height="${c}" fill="${k < 4 ? BLEU : ORANGE}" fill-opacity="0.18" stroke="${ENCRE}" stroke-width="2"/>`; });
  g += texte(x0 + 2 * c, 262, 'patron de cube', { taille: 15, gras: true });
  g += texte(x0 + 2 * c, 282, '4 en ceinture + 1 dessus + 1 dessous', { taille: 13, couleur: ATTENUE });
  // cylindre : u = 6 px par cm
  const u = 6, r = 5 * u, h = 12 * u, L = 2 * Math.PI * 5 * u;
  const xr = 330, yr = 100;
  g += `<rect x="${xr}" y="${yr}" width="${nb(L)}" height="${h}" fill="${VIOLET}" fill-opacity="0.15" stroke="${ENCRE}" stroke-width="2"/>`;
  g += cercle(xr + 60, yr - r, r, { couleur: ENCRE, fond: VIOLET, opacite: 0.15 }) + cercle(xr + 60, yr + h + r, r, { couleur: ENCRE, fond: VIOLET, opacite: 0.15 });
  g += seg([xr + 60, yr - r], [xr + 60 + r, yr - r], { couleur: ROUGE, epaisseur: 1.8 }) + tx(xr + 60 + r / 2, yr - r - 8, '5 cm', { taille: 13, couleur: ROUGE, gras: true });
  g += tx(xr + 100, yr - 10, 'largeur : 2 × π × 5 ≈ 31,4 cm', { taille: 13, gras: true, ancre: 'start' });
  g += tx(xr + L + 8, yr + h / 2 + 5, '12 cm', { taille: 14, gras: true, ancre: 'start' });
  g += texte(xr + L / 2, 262, 'patron de cylindre', { taille: 15, gras: true });
  g += texte(xr + L / 2, 282, 'largeur du rectangle = périmètre du disque', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Pyramide régulière à base carrée (côté 6 cm, hauteur 10 cm) en perspective cavalière. */
SCH['pyramide-cavaliere'] = () => {
  const W = 520, H = 360, s = 26;
  const p = cav(80, 320, s, 0.5);
  const A = p(0, 0, 0), B = p(6, 0, 0), C = p(6, 0, 6), D = p(0, 0, 6), O = p(3, 0, 3), S = p(3, 10, 3);
  let g = polygone([S, A, B], { couleur: 'none', fond: BLEU, opacite: 0.12, epaisseur: 0 }) + polygone([S, B, C], { couleur: 'none', fond: BLEU, opacite: 0.22, epaisseur: 0 });
  g += seg(A, D, { epaisseur: 1.5, pointilles: true }) + seg(D, C, { epaisseur: 1.5, pointilles: true }) + seg(S, D, { epaisseur: 1.5, pointilles: true });
  g += seg(A, C, { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + seg(B, D, { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  g += seg(S, O, { couleur: ROUGE, epaisseur: 2, pointilles: true });
  g += seg(A, B, { epaisseur: 2.4 }) + seg(B, C, { epaisseur: 2.4 }) + seg(S, A, { epaisseur: 2.4 }) + seg(S, B, { epaisseur: 2.4 }) + seg(S, C, { epaisseur: 2.4 });
  g += pointN(O, '') + tx(O[0] + 8, O[1] + 16, 'O', { taille: 15, gras: true, ancre: 'start' });
  g += tx(A[0] - 12, A[1] + 8, 'A', { taille: 15, gras: true }) + tx(B[0] + 4, B[1] + 18, 'B', { taille: 15, gras: true }) + tx(C[0] + 14, C[1] + 4, 'C', { taille: 15, gras: true }) + tx(D[0] - 14, D[1] - 2, 'D', { taille: 15, gras: true });
  g += tx(S[0], S[1] - 10, 'S', { taille: 15, gras: true });
  g += tx(O[0] - 8, (O[1] + S[1]) / 2, 'h = 10 cm', { taille: 14, gras: true, couleur: ROUGE, ancre: 'end' });
  g += tx((A[0] + B[0]) / 2, A[1] + 22, '6 cm', { taille: 14, gras: true });
  const xl = 330;
  g += texte(xl, 120, 'ABCD : un carré,', { taille: 14, ancre: 'start' });
  g += texte(xl, 140, 'dessiné en parallélogramme', { taille: 14, ancre: 'start' });
  g += texte(xl, 176, 'arêtes cachées :', { taille: 14, ancre: 'start' });
  g += texte(xl, 196, '[AD], [DC] et [SD]', { taille: 14, ancre: 'start', gras: true });
  return enveloppe(W, H, g);
};

/** Cône de révolution (rayon 5 cm, hauteur 12 cm) : hauteur, rayon et segment sommet-bord. */
SCH['cone'] = () => {
  const W = 520, H = 330, u = 18;
  const O = [180, 270], rx = 5 * u, ry = 24, S = [O[0], O[1] - 12 * u];
  let g = `<path d="M ${S[0]} ${S[1]} L ${O[0] - rx} ${O[1]} A ${rx} ${ry} 0 0 0 ${O[0] + rx} ${O[1]} Z" fill="${ORANGE}" fill-opacity="0.12" stroke="none"/>`;
  g += ellipse(O[0], O[1], rx, ry, { couleur: ENCRE });
  g += seg(S, [O[0] - rx, O[1]], { epaisseur: 2.4 }) + seg(S, [O[0] + rx, O[1]], { epaisseur: 2.4, couleur: VERT });
  g += seg(S, O, { couleur: ROUGE, epaisseur: 2, pointilles: true }) + seg(O, [O[0] + rx, O[1]], { couleur: BLEU, epaisseur: 2.2 });
  g += angleDroit(O[0], O[1], [1, 0], [0, -1], { taille: 11 });
  g += pointN(O, '') + tx(O[0] - 4, O[1] + 20, 'O', { taille: 15, gras: true }) + tx(S[0], S[1] - 10, 'S', { taille: 15, gras: true });
  g += tx(O[0] - 8, (O[1] + S[1]) / 2, 'h = 12 cm', { taille: 14, gras: true, couleur: ROUGE, ancre: 'end' });
  g += tx(O[0] + rx / 2, O[1] - 8, 'r = 5 cm', { taille: 13, gras: true, couleur: BLEU });
  const m = mil(S, [O[0] + rx, O[1]]);
  g += tx(m[0] + 12, m[1], '13 cm', { taille: 14, gras: true, couleur: VERT, ancre: 'start' });
  const xl = 320;
  g += texte(xl, 110, 'moitié arrière de la', { taille: 14, ancre: 'start' });
  g += texte(xl, 130, 'base en pointillés', { taille: 14, ancre: 'start' });
  g += texte(xl, 170, 'volume : on prend h = 12,', { taille: 14, ancre: 'start', couleur: ROUGE });
  g += texte(xl, 190, 'pas 13 (√(25 + 144) = 13)', { taille: 14, ancre: 'start', couleur: VERT });
  return enveloppe(W, H, g);
};

/** Les trois longueurs d'une pyramide régulière (côté 6, hauteur 4, hauteur de face 5). */
SCH['pyramide-hauteurs'] = () => {
  const W = 560, H = 330, s = 34;
  const p = cav(70, 290, s, 0.5);
  const A = p(0, 0, 0), B = p(6, 0, 0), C = p(6, 0, 6), D = p(0, 0, 6), O = p(3, 0, 3), S = p(3, 4, 3), I = p(6, 0, 3);
  let g = polygone([S, B, C], { couleur: 'none', fond: BLEU, opacite: 0.12, epaisseur: 0 });
  g += polygone([S, O, I], { couleur: 'none', fond: ORANGE, opacite: 0.3, epaisseur: 0 });
  g += seg(A, D, { epaisseur: 1.4, pointilles: true }) + seg(D, C, { epaisseur: 1.4, pointilles: true }) + seg(S, D, { epaisseur: 1.4, pointilles: true });
  g += seg(A, B, { epaisseur: 2.2 }) + seg(B, C, { epaisseur: 2.2 }) + seg(S, A, { epaisseur: 2.2 }) + seg(S, B, { epaisseur: 2.2 }) + seg(S, C, { epaisseur: 2.6, couleur: VIOLET });
  g += seg(S, O, { couleur: ROUGE, epaisseur: 2.6 }) + seg(O, I, { couleur: ORANGE, epaisseur: 2.4 }) + seg(S, I, { couleur: VERT, epaisseur: 2.6 });
  g += angleDroit(O[0], O[1], [1, 0], [0, -1], { taille: 11 });
  g += pointN(O, '') + pointN(I, '');
  g += tx(O[0] - 6, O[1] + 18, 'O', { taille: 15, gras: true }) + tx(I[0] + 14, I[1] + 8, 'I', { taille: 15, gras: true }) + tx(S[0], S[1] - 10, 'S', { taille: 15, gras: true });
  g += tx(O[0] - 8, (O[1] + S[1]) / 2 + 4, '4', { taille: 15, gras: true, couleur: ROUGE, ancre: 'end' });
  g += tx((O[0] + I[0]) / 2, O[1] + 18, '3', { taille: 15, gras: true, couleur: ORANGE });
  g += tx((S[0] + I[0]) / 2 + 10, (S[1] + I[1]) / 2 - 2, '5', { taille: 15, gras: true, couleur: VERT, ancre: 'start' });
  const xl = 360;
  g += texte(xl, 70, 'hauteur SO = 4 cm', { taille: 14, ancre: 'start', couleur: ROUGE, gras: true });
  g += texte(xl, 90, '→ volume', { taille: 14, ancre: 'start', couleur: ROUGE });
  g += texte(xl, 122, 'hauteur de face SI = 5 cm', { taille: 14, ancre: 'start', couleur: VERT, gras: true });
  g += texte(xl, 142, '→ patron', { taille: 14, ancre: 'start', couleur: VERT });
  g += texte(xl, 174, 'arête latérale [SC]', { taille: 14, ancre: 'start', couleur: VIOLET, gras: true });
  g += texte(xl, 194, '→ perspective', { taille: 14, ancre: 'start', couleur: VIOLET });
  g += texte(xl, 232, 'SOI rectangle en O :', { taille: 14, ancre: 'start' });
  g += texte(xl, 252, '4² = 5² − 3²', { taille: 14, ancre: 'start', gras: true });
  return enveloppe(W, H, g);
};

/** Pyramide inscrite dans un cube d'arête 6 cm, de sommet S situé au-dessus du coin A de la base. */
SCH['pyramide-cube'] = () => {
  const W = 560, H = 340, s = 34;
  const p = cav(80, 310, s, 0.5);
  const A = p(0, 0, 0), B = p(6, 0, 0), C = p(6, 0, 6), D = p(0, 0, 6), S = p(0, 6, 0);
  let g = '';
  // cube en gris
  const cube = [[[6, 0, 0], [6, 6, 0]], [[6, 6, 0], [0, 6, 0]], [[6, 6, 0], [6, 6, 6]], [[0, 6, 0], [0, 6, 6]], [[6, 0, 6], [6, 6, 6]], [[6, 6, 6], [0, 6, 6]]];
  for (const [a, b] of cube) g += seg(p(...a), p(...b), { couleur: GRILLE, epaisseur: 1.6 });
  g += seg(p(0, 0, 6), p(0, 6, 6), { couleur: GRILLE, epaisseur: 1.4, pointilles: true });
  g += polygone([S, A, B], { couleur: 'none', fond: BLEU, opacite: 0.15, epaisseur: 0 }) + polygone([S, B, C], { couleur: 'none', fond: BLEU, opacite: 0.25, epaisseur: 0 });
  g += seg(S, D, { epaisseur: 1.5, pointilles: true }) + seg(D, C, { epaisseur: 1.5, pointilles: true }) + seg(A, D, { epaisseur: 1.5, pointilles: true });
  g += seg(A, B, { epaisseur: 2.4 }) + seg(B, C, { epaisseur: 2.4 }) + seg(S, B, { epaisseur: 2.4 }) + seg(S, C, { epaisseur: 2.4 });
  g += seg(S, A, { epaisseur: 2.8, couleur: ROUGE });
  g += tx(A[0] - 12, A[1] + 10, 'A', { taille: 15, gras: true }) + tx(B[0] + 4, B[1] + 18, 'B', { taille: 15, gras: true }) + tx(C[0] + 14, C[1] + 4, 'C', { taille: 15, gras: true }) + tx(D[0] - 14, D[1] - 4, 'D', { taille: 15, gras: true }) + tx(S[0] - 12, S[1] - 6, 'S', { taille: 15, gras: true });
  g += tx(A[0] - 10, (A[1] + S[1]) / 2, 'h = 6 cm', { taille: 14, gras: true, couleur: ROUGE, ancre: 'end' });
  const xl = 400;
  g += texte(xl, 90, 'V = 6 × 6 × 6 ÷ 3', { taille: 14, ancre: 'start', gras: true });
  g += texte(xl, 112, '= 72 cm³', { taille: 14, ancre: 'start', gras: true });
  g += texte(xl, 146, 'cube : 216 cm³', { taille: 14, ancre: 'start' });
  g += texte(xl, 168, '→ le tiers', { taille: 14, ancre: 'start', couleur: ROUGE, gras: true });
  return enveloppe(W, H, g);
};

/** Sphère : centre, rayon, diamètre, grand cercle. */
SCH['sphere'] = () => {
  const W = 540, H = 300, O = [190, 150], R = 115;
  let g = cercle(O[0], O[1], R, { couleur: BLEU, fond: BLEU, opacite: 0.08, epaisseur: 2.4 });
  g += ellipse(O[0], O[1], R, 30, { couleur: VERT, epaisseur: 2.2 });
  const M = P(O[0], O[1], R, 50), N = P(O[0], O[1], R, 230);
  g += seg(N, M, { couleur: ORANGE, epaisseur: 2 }) + seg(O, [O[0] + R, O[1]], { couleur: ROUGE, epaisseur: 2.4 });
  g += pointN(O, '') + tx(O[0] - 6, O[1] - 10, 'O', { taille: 15, gras: true });
  g += tx(O[0] + R / 2 + 6, O[1] + 20, 'R', { taille: 15, gras: true, couleur: ROUGE });
  const xl = 340;
  g += texte(xl, 80, 'rayon R', { taille: 14, ancre: 'start', couleur: ROUGE, gras: true });
  g += texte(xl, 108, 'diamètre : d = 2R', { taille: 14, ancre: 'start', couleur: ORANGE, gras: true });
  g += texte(xl, 136, 'grand cercle :', { taille: 14, ancre: 'start', couleur: VERT, gras: true });
  g += texte(xl, 156, 'centre O, rayon R', { taille: 14, ancre: 'start', couleur: VERT });
  g += texte(xl, 196, 'sphère : la surface', { taille: 14, ancre: 'start' });
  g += texte(xl, 216, 'boule : surface + intérieur', { taille: 14, ancre: 'start' });
  return enveloppe(W, H, g);
};

/** Section d'une boule (R = 5 cm) par un plan à 3 cm du centre : disque de rayon 4 cm (vue de profil). */
SCH['section-boule'] = () => {
  const W = 560, H = 320, u = 26, O = [200, 175], R = 5 * u;
  const yP = O[1] - 3 * u, xM = O[0] + 4 * u, Hh = [O[0], yP], M = [xM, yP];
  let g = cercle(O[0], O[1], R, { couleur: BLEU, fond: BLEU, opacite: 0.08, epaisseur: 2.2 });
  g += ligne(O[0] - R - 40, yP, O[0] + R + 40, yP, { couleur: ATTENUE, epaisseur: 1.6, pointilles: true });
  g += seg([O[0] - 4 * u, yP], M, { couleur: VERT, epaisseur: 4 });
  g += seg(O, Hh, { couleur: ORANGE, epaisseur: 2.4 }) + seg(O, M, { couleur: ROUGE, epaisseur: 2.4 });
  g += angleDroit(Hh[0], Hh[1], [1, 0], [0, 1], { taille: 11 });
  g += pointN(O, '') + tx(O[0] - 4, O[1] + 22, 'O', { taille: 15, gras: true });
  g += pointN(Hh, '') + tx(Hh[0] - 14, Hh[1] - 8, 'H', { taille: 15, gras: true });
  g += pointN(M, '') + tx(M[0] + 10, M[1] - 8, 'M', { taille: 15, gras: true });
  g += tx(O[0] - 10, (O[1] + yP) / 2 + 5, 'd = 3', { taille: 14, gras: true, couleur: ORANGE, ancre: 'end' });
  g += tx((O[0] + xM) / 2 + 22, (O[1] + yP) / 2 + 14, 'R = 5', { taille: 14, gras: true, couleur: ROUGE });
  g += tx((Hh[0] + xM) / 2, yP - 10, 'r = 4', { taille: 14, gras: true, couleur: VERT });
  g += tx(O[0] + R + 36, yP - 8, 'plan', { taille: 13, couleur: ATTENUE, ancre: 'end' });
  const xl = 370;
  g += texte(xl, 200, 'r² = R² − d²', { taille: 15, ancre: 'start', gras: true });
  g += texte(xl, 224, 'r² = 25 − 9 = 16', { taille: 14, ancre: 'start' });
  g += texte(xl, 248, 'r = 4 cm', { taille: 14, ancre: 'start', couleur: VERT, gras: true });
  g += texte(xl, 290, 'vue de profil', { taille: 13, ancre: 'start', couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
};

// ---------------------------------------------------------------------------
// Nombres, grandeurs, durées
// ---------------------------------------------------------------------------

/** Trois cadrans : quart d'heure, demi-heure, trois quarts d'heure. */
SCH['horloges-fractions'] = () => {
  const W = 640, H = 250, r = 72;
  let g = '';
  [[15, 'un quart d’heure', '15 min'], [30, 'une demi-heure', '30 min'], [45, 'trois quarts d’heure', '45 min']].forEach(([m, t1, t2], i) => {
    const cx = 110 + i * 210, cy = 100;
    g += arcAngle(cx, cy, r, 90 - m * 6, 90, { couleur: 'none', fond: BLEU, opacite: 0.3, epaisseur: 0 });
    g += cercle(cx, cy, r, { couleur: ENCRE, epaisseur: 2.4 });
    for (let k = 0; k < 60; k++) {
      const a = 90 - k * 6, long = k % 5 === 0 ? 9 : 4;
      const [x1, y1] = P(cx, cy, r, a), [x2, y2] = P(cx, cy, r - long, a);
      g += ligne(x1, y1, x2, y2, { couleur: ENCRE, epaisseur: k % 5 === 0 ? 1.8 : 0.9 });
    }
    [[12, 90], [3, 0], [6, 270], [9, 180]].forEach(([n, a]) => { const q = P(cx, cy, r - 20, a); g += texte(q[0], q[1] + 5, String(n), { taille: 14, gras: true }); });
    const [hx, hy] = P(cx, cy, r - 32, 90 - m * 6);
    g += ligne(cx, cy, hx, hy, { couleur: ROUGE, epaisseur: 3 }) + ligne(cx, cy, cx, cy - r + 32, { couleur: ATTENUE, epaisseur: 2, pointilles: true });
    g += `<circle cx="${cx}" cy="${cy}" r="4" fill="${ENCRE}"/>`;
    g += texte(cx, 202, t1, { taille: 14, gras: true }) + texte(cx, 224, t2, { taille: 14, couleur: BLEU, gras: true });
  });
  return enveloppe(W, H, g);
};

/** Durée entre deux horaires, par paliers, sur une ligne du temps à l'échelle. */
SCH['ligne-duree'] = ({ horaires, W = 640, notes = [] }) => {
  const m = horaires.map(([h, mi]) => h * 60 + mi);
  const x0 = 60, x1 = W - 60, X = (v) => x0 + ((v - m[0]) / (m[m.length - 1] - m[0])) * (x1 - x0);
  const y = 120;
  let g = fleche(x0 - 30, y, x1 + 30, y, { couleur: ENCRE, epaisseur: 2.2 });
  const hm = (v) => `${Math.floor(v / 60)} h ${String(v % 60).padStart(2, '0')}`;
  m.forEach((v, i) => {
    g += ligne(X(v), y - 9, X(v), y + 9, { epaisseur: 2.2 });
    const procheSuiv = i < m.length - 1 && X(m[i + 1]) - X(v) < 80, procheprec = i > 0 && X(v) - X(m[i - 1]) < 80;
    g += texte(X(v) + (procheSuiv ? 6 : procheprec ? -6 : 0), y + 30, hm(v), { taille: 15, gras: true, ancre: procheSuiv ? 'end' : procheprec ? 'start' : 'middle' });
    if (i > 0) {
      const d = v - m[i - 1];
      g += saut(X(m[i - 1]), X(v), y - 8, { couleur: i % 2 ? BLEU : ORANGE, texte: `+ ${d} min`, h: 30 });
    }
  });
  g += accolade(X(m[0]), X(m[m.length - 1]), y + 44, { bas: true, couleur: VERT });
  g += texte((x0 + x1) / 2, y + 86, `durée : ${m[m.length - 1] - m[0]} min`, { taille: 15, gras: true, couleur: VERT });
  notes.forEach((n, i) => { g += texte(W / 2, y + 110 + i * 20, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, y + 100 + notes.length * 20, g);
};

/** Encadrement : zoom de [3 ; 4] sur [3,7 ; 3,8]. */
SCH['zoom-encadrement'] = () => {
  const W = 640, H = 270;
  const d1 = droite({ x0: 60, x1: 580, y: 70, min: 3, max: 4, sub: 10, pas: 0.1, taille: 12 });
  const d2 = droite({ x0: 60, x1: 580, y: 200, min: 3.7, max: 3.8, sub: 100, pas: 0.01, taille: 12, etiq: (v) => (Math.abs(v - 3.7) < 1e-9 || Math.abs(v - 3.8) < 1e-9 ? fr(v, 2) : '') });
  let g = `<rect x="${nb(d1.X(3.7))}" y="58" width="${nb(d1.X(3.8) - d1.X(3.7))}" height="24" fill="${ORANGE}" fill-opacity="0.2"/>`;
  g += d1.svg + d2.svg;
  g += ligne(d1.X(3.7), 82, d2.X(3.7), 188, { couleur: ORANGE, epaisseur: 1.4, pointilles: true }) + ligne(d1.X(3.8), 82, d2.X(3.8), 188, { couleur: ORANGE, epaisseur: 1.4, pointilles: true });
  g += `<circle cx="${nb(d1.X(3.74))}" cy="70" r="5" fill="${ROUGE}"/>` + `<circle cx="${nb(d2.X(3.74))}" cy="200" r="6" fill="${ROUGE}"/>`;
  g += tx(d2.X(3.74), 180, '3,74', { taille: 15, gras: true, couleur: ROUGE });
  g += texte(W / 2, 26, 'à l’unité : 3 < 3,74 < 4', { taille: 14, gras: true });
  g += texte(W / 2, 254, 'au dixième : 3,7 < 3,74 < 3,8', { taille: 14, gras: true, couleur: ORANGE });
  return enveloppe(W, H, g);
};

/** Périmètre du disque : le tour déroulé mesure π × D, un peu plus de trois diamètres. */
SCH['perimetre-disque'] = () => {
  const W = 620, H = 230, D = 100, r = D / 2;
  const cx = 90, cy = 80;
  let g = cercle(cx, cy, r, { couleur: BLEU, epaisseur: 2.6, fond: BLEU, opacite: 0.08 });
  g += seg([cx - r, cy], [cx + r, cy], { couleur: ROUGE, epaisseur: 2.4 }) + tx(cx, cy - 8, 'D', { taille: 15, gras: true, couleur: ROUGE });
  const x0 = 190, y = 80, L = Math.PI * D;
  g += ligne(x0, y, x0 + L, y, { couleur: BLEU, epaisseur: 4 });
  g += texte(x0 + L / 2, y - 18, 'le tour, déroulé', { taille: 14, couleur: BLEU, gras: true });
  for (let k = 0; k < 3; k++) {
    g += `<rect x="${x0 + k * D}" y="${y + 14}" width="${D}" height="16" fill="${ROUGE}" fill-opacity="${k % 2 ? 0.35 : 0.18}" stroke="${ROUGE}" stroke-width="1.2"/>`;
    g += texte(x0 + k * D + D / 2, y + 48, 'D', { taille: 14, gras: true, couleur: ROUGE });
  }
  g += ligne(x0 + L, y - 8, x0 + L, y + 34, { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  g += texte(W / 2, 178, 'Périmètre = π × D ≈ 3,14 × D', { taille: 16, gras: true });
  g += texte(W / 2, 204, 'un peu plus de 3 diamètres', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Carré quadrillé : n × n carreaux (aire), côté donné. */
SCH['carre-quadrille'] = ({ n = 10, c = 22, cote = '1 dm = 10 cm', aire = '1 dm² = 10 × 10 = 100 cm²', unite = '1 cm²', W = 520 }) => {
  const x0 = 60, y0 = 30, H = y0 + n * c + 46;
  let g = `<rect x="${x0}" y="${y0}" width="${n * c}" height="${n * c}" fill="${BLEU}" fill-opacity="0.08"/>`;
  for (let i = 0; i <= n; i++) g += ligne(x0 + i * c, y0, x0 + i * c, y0 + n * c, { couleur: i % n ? GRILLE : ENCRE, epaisseur: i % n ? 1.2 : 2.4 }) + ligne(x0, y0 + i * c, x0 + n * c, y0 + i * c, { couleur: i % n ? GRILLE : ENCRE, epaisseur: i % n ? 1.2 : 2.4 });
  if (unite) g += `<rect x="${x0}" y="${y0}" width="${c}" height="${c}" fill="${ORANGE}" fill-opacity="0.7"/>` + tx(x0 + c + 6, y0 + c / 2 + 5, unite, { taille: 13, couleur: ORANGE, gras: true, ancre: 'start' });
  g += tx(x0 + (n * c) / 2, y0 + n * c + 24, cote, { taille: 15, gras: true });
  g += texte(x0 + n * c + 20, y0 + (n * c) / 2, aire, { taille: 15, gras: true, ancre: 'start', couleur: BLEU });
  return enveloppe(W, H, g);
};

/** Division euclidienne : 17 = 5 × 3 + 2. */
SCH['division-euclidienne'] = ({ a = 17, b = 5 } = {}) => {
  const q = Math.floor(a / b), r = a % b, W = 620, H = 190;
  let g = '';
  const d = 26, x0 = 30;
  let x = x0;
  for (let k = 0; k < q; k++) {
    g += `<rect x="${x - 6}" y="34" width="${b * d + 12 - 14}" height="42" rx="8" fill="${BLEU}" fill-opacity="0.1" stroke="${BLEU}" stroke-width="1.6"/>`;
    for (let i = 0; i < b; i++) g += `<circle cx="${x + i * (d - 3) + 10}" cy="55" r="9" fill="${BLEU}"/>`;
    g += texte(x + (b * d - 14) / 2, 96, `paquet ${k + 1}`, { taille: 13, couleur: BLEU });
    x += b * d + 12;
  }
  for (let i = 0; i < r; i++) g += `<circle cx="${x + i * (d - 3) + 10}" cy="55" r="9" fill="${ORANGE}"/>`;
  g += texte(x + 20, 96, 'reste', { taille: 13, couleur: ORANGE, gras: true });
  g += texte(W / 2, 140, `${a} = ${b} × ${q} + ${r}`, { taille: 18, gras: true });
  g += texte(W / 2, 168, `diviseur ${b}, quotient ${q}, reste ${r} (et ${r} < ${b})`, { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Échelle des probabilités de 0 à 1. */
SCH['echelle-proba'] = ({ exemples = null } = {}) => {
  const W = 660, H = 210, x0 = 60, x1 = 600, y = 60, X = (v) => x0 + v * (x1 - x0);
  let g = `<defs><linearGradient id="gp" x1="0" x2="1"><stop offset="0" stop-color="${ROUGE}" stop-opacity="0.35"/><stop offset="0.5" stop-color="${ORANGE}" stop-opacity="0.3"/><stop offset="1" stop-color="${VERT}" stop-opacity="0.4"/></linearGradient></defs>`;
  g += `<rect x="${x0}" y="${y - 12}" width="${x1 - x0}" height="24" rx="12" fill="url(#gp)"/>`;
  const reperes = exemples || [[0, 'impossible'], [0.1, 'peu probable'], [0.5, 'une chance\nsur deux'], [0.9, 'très probable'], [1, 'certain']];
  reperes.forEach(([v, t], i) => {
    const exact = v === 0 || v === 0.5 || v === 1;
    g += ligne(X(v), y - 16, X(v), y + 16, { epaisseur: exact ? 2.4 : 1.4, couleur: exact ? ENCRE : ATTENUE });
    if (exact) g += texte(X(v), y - 24, fr(v), { taille: 15, gras: true });
    if (exact) g += texte(X(v), y + 40, t, { taille: 13, gras: true });
    else g += ligne(X(v), y + 16, X(v), y + 60, { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + texte(X(v), y + 78, t, { taille: 13, couleur: ATTENUE });
  });
  g += texte(W / 2, 192, 'Une probabilité est toujours comprise entre 0 et 1.', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Sac de boules : 5 rouges, 3 vertes, 2 bleues. */
SCH['urne'] = () => {
  const W = 560, H = 250;
  let g = `<path d="M 60 50 L 60 200 Q 60 225 85 225 L 255 225 Q 280 225 280 200 L 280 50" fill="#f4f6f8" stroke="${ENCRE}" stroke-width="2.4"/>`;
  const boules = [...Array(5).fill(ROUGE), ...Array(3).fill(VERT), ...Array(2).fill(BLEU)];
  const pos = [[95, 195], [140, 195], [185, 195], [230, 195], [117, 155], [162, 155], [207, 155], [252, 160], [140, 115], [185, 115]];
  const ordre = [0, 7, 1, 5, 2, 3, 8, 4, 6, 9];
  pos.forEach(([x, y], i) => { const c = boules[ordre[i]]; g += `<circle cx="${x}" cy="${y}" r="19" fill="${c}" fill-opacity="${c === VERT ? 0.95 : 0.75}" stroke="${ENCRE}" stroke-width="1.2"/>`; });
  const xl = 320;
  g += texte(xl, 70, '5 rouges + 3 vertes + 2 bleues', { taille: 14, ancre: 'start' });
  g += texte(xl, 92, '= 10 boules en tout', { taille: 14, ancre: 'start', gras: true });
  g += texte(xl, 136, 'tirer une verte :', { taille: 14, ancre: 'start', couleur: VERT, gras: true });
  g += texte(xl, 158, '3 chances sur 10', { taille: 14, ancre: 'start', couleur: VERT });
  g += texte(xl, 192, 'P = 3/10 = 0,3 = 30 %', { taille: 16, ancre: 'start', gras: true });
  return enveloppe(W, H, g);
};

/** Motif évolutif d'allumettes : n carrés côte à côte, 3n + 1 allumettes. */
SCH['allumettes'] = () => {
  const W = 640, H = 200, c = 46;
  let g = '';
  const allu = (x1, y1, x2, y2) => ligne(x1, y1, x2, y2, { couleur: '#b07a3a', epaisseur: 5 }) + `<circle cx="${nb(x2)}" cy="${nb(y2)}" r="4.5" fill="${ROUGE}"/>`;
  let x = 30;
  [1, 2, 3].forEach((n) => {
    const y = 120;
    for (let k = 0; k <= n; k++) g += allu(x + k * c, y - 5, x + k * c, y - c + 9);
    for (let k = 0; k < n; k++) { g += allu(x + k * c + 6, y, x + (k + 1) * c - 9, y); g += allu(x + k * c + 6, y - c, x + (k + 1) * c - 9, y - c); }
    g += texte(x + (n * c) / 2, 152, `étape ${n}`, { taille: 14, gras: true });
    g += texte(x + (n * c) / 2, 174, `${3 * n + 1} allumettes`, { taille: 14, couleur: BLEU, gras: true });
    x += n * c + 80;
  });
  g += texte(W - 20, 40, '+ 3 à chaque étape', { taille: 14, couleur: ORANGE, gras: true, ancre: 'end' });
  g += texte(W - 20, 62, '3 × étape + 1', { taille: 14, couleur: VERT, gras: true, ancre: 'end' });
  return enveloppe(W, H, g);
};

/** Robot sur quadrillage : avancer de 3 cases, tourner à droite, avancer de 2 cases. */
SCH['robot-chemin'] = () => {
  const c = 46, nx = 6, ny = 5, x0 = 30, y0 = 20, W = 620, H = y0 + ny * c + 30;
  const Q = (i, j) => [x0 + (i + 0.5) * c, y0 + (ny - j - 0.5) * c];
  let g = '';
  for (let i = 0; i <= nx; i++) g += ligne(x0 + i * c, y0, x0 + i * c, y0 + ny * c, { couleur: GRILLE, epaisseur: 1.2 });
  for (let j = 0; j <= ny; j++) g += ligne(x0, y0 + j * c, x0 + nx * c, y0 + j * c, { couleur: GRILLE, epaisseur: 1.2 });
  const D = Q(1, 0), T1 = Q(1, 3), F = Q(3, 3);
  g += `<rect x="${D[0] - c / 2}" y="${D[1] - c / 2}" width="${c}" height="${c}" fill="${BLEU}" fill-opacity="0.15"/>`;
  g += `<rect x="${F[0] - c / 2}" y="${F[1] - c / 2}" width="${c}" height="${c}" fill="${ORANGE}" fill-opacity="0.25"/>`;
  g += flecheAB(D, [T1[0], T1[1]], { couleur: ROUGE, epaisseur: 3, pointe: 0.01 }) + flecheAB(T1, F, { couleur: ROUGE, epaisseur: 3, pointe: 12 });
  g += polygone([[D[0], D[1] - 13], [D[0] - 10, D[1] + 9], [D[0] + 10, D[1] + 9]], { couleur: BLEU, fond: BLEU, opacite: 1 });
  g += texte(F[0], F[1] + 6, '★', { taille: 22, couleur: ORANGE });
  g += texte(D[0], D[1] + c / 2 + 18, 'départ', { taille: 13, couleur: BLEU, gras: true });
  g += texte(F[0] + c / 2 + 6, F[1] + 5, 'trésor', { taille: 13, couleur: ORANGE, gras: true, ancre: 'start' });
  const xl = 340;
  g += texte(xl, 70, '1. avancer de 3 cases', { taille: 15, ancre: 'start' });
  g += texte(xl, 98, '2. tourner à droite', { taille: 15, ancre: 'start' });
  g += texte(xl, 126, '3. avancer de 2 cases', { taille: 15, ancre: 'start' });
  g += texte(xl, 176, 'Le robot part vers le haut.', { taille: 13, ancre: 'start', couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Robot qui trace un carré (virages de 90°) et un triangle équilatéral (virages de 120°). */
SCH['robot-polygones'] = () => {
  const W = 640, H = 300;
  let g = '';
  const trace = (pts, ext, c) => {
    let s = '';
    const n = pts.length;
    for (let i = 0; i < n; i++) s += flecheAB(pts[i], pts[(i + 1) % n], { couleur: c, epaisseur: 2.6, pointe: 11 });
    for (let i = 0; i < n; i++) {
      const A = pts[(i + n - 1) % n], S = pts[i], B = pts[(i + 1) % n];
      const din = dir(...A, ...S), dout = dir(...S, ...B);
      const prol = P(S[0], S[1], 46, din);
      s += seg(S, prol, { couleur: ATTENUE, epaisseur: 1.3, pointilles: true });
      s += arcAngle(S[0], S[1], 24, din, dout, { couleur: ORANGE, fond: ORANGE });
      const lab = P(S[0], S[1], 44, din + ext / 2);
      s += tx(lab[0], lab[1] + 5, `${ext}°`, { taille: 13, gras: true, couleur: ORANGE });
    }
    return s;
  };
  // carré parcouru en tournant à gauche (sens trigonométrique)
  const c0 = [80, 200], a = 130;
  g += trace([c0, [c0[0] + a, c0[1]], [c0[0] + a, c0[1] - a], [c0[0], c0[1] - a]], 90, BLEU);
  g += texte(c0[0] + a / 2, 284, 'répéter 4 fois : 4 × 90° = 360°', { taille: 14, gras: true, couleur: BLEU });
  const t0 = [380, 200], b = 150;
  g += trace([t0, [t0[0] + b, t0[1]], [t0[0] + b / 2, t0[1] - (b * Math.sqrt(3)) / 2]], 120, VERT);
  g += texte(t0[0] + b / 2, 284, 'répéter 3 fois : 3 × 120° = 360°', { taille: 14, gras: true, couleur: VERT });
  return enveloppe(W, H, g);
};

/** Produit en croix dans un tableau 2 × 2. */
SCH['produit-croix'] = () => {
  const W = 560, H = 220, x0 = 150, y0 = 40, cw = 100, ch = 46;
  let g = '';
  const noms = ['Stylos', 'Prix (€)'], v = [['3', '7'], ['4,50', 'x']];
  for (let r = 0; r < 2; r++) {
    g += `<rect x="${x0 - 110}" y="${y0 + r * ch}" width="110" height="${ch}" fill="#eef3fb" stroke="${ENCRE}" stroke-width="1.5"/>` + texte(x0 - 55, y0 + r * ch + ch / 2 + 5, noms[r], { taille: 14, gras: true });
    for (let c = 0; c < 2; c++) g += `<rect x="${x0 + c * cw}" y="${y0 + r * ch}" width="${cw}" height="${ch}" fill="#ffffff" stroke="${ENCRE}" stroke-width="1.5"/>` + texte(x0 + c * cw + cw / 2, y0 + r * ch + ch / 2 + 6, v[r][c], { taille: 17, gras: true, couleur: v[r][c] === 'x' ? ROUGE : ENCRE });
  }
  g += ligne(x0 + cw / 2 + 16, y0 + ch / 2 + 8, x0 + 1.5 * cw - 16, y0 + 1.5 * ch - 14, { couleur: BLEU, epaisseur: 2.6 });
  g += ligne(x0 + 1.5 * cw - 16, y0 + ch / 2 + 8, x0 + cw / 2 + 26, y0 + 1.5 * ch - 14, { couleur: ORANGE, epaisseur: 2.6 });
  const xl = 380;
  g += texte(xl, 70, '3 × x', { taille: 16, gras: true, couleur: BLEU, ancre: 'start' });
  g += texte(xl, 96, '= 7 × 4,50', { taille: 16, gras: true, couleur: ORANGE, ancre: 'start' });
  g += texte(W / 2, 180, '3x = 31,50, donc x = 31,50 ÷ 3 = 10,50 €', { taille: 15, gras: true });
  return enveloppe(W, H, g);
};

// ---------------------------------------------------------------------------
// Graphiques, fonctions
// ---------------------------------------------------------------------------

/** Courbe de données reliées (6e : évolution d'une température). */
SCH['courbe-donnees'] = ({ xs, ys, xmin, xmax, ymin, ymax, pasX, pasY, titreX, titreY, notes = [], W = 600, H = 320, etiqX = null, etiqY = null, relier = true, couleur = BLEU, annot = [] }) => {
  const hb = notes.length * 20;
  const r = rep({ x0: 60, x1: W - 60, y0: H - 40 - hb, y1: 40, xmin, xmax, ymin, ymax, pasX, pasY, etiqX, etiqY, titreX, titreY });
  let g = r.svg;
  if (relier) g += `<polyline points="${xs.map((x, i) => `${nb(r.X(x))},${nb(r.Y(ys[i]))}`).join(' ')}" fill="none" stroke="${couleur}" stroke-width="2.6" stroke-linejoin="round"/>`;
  xs.forEach((x, i) => { g += `<circle cx="${nb(r.X(x))}" cy="${nb(r.Y(ys[i]))}" r="4.5" fill="${couleur}"/>`; });
  annot.forEach((a) => { g += tx(r.X(a.x), r.Y(a.y), a.t, { taille: 13, couleur: a.couleur || ORANGE, gras: true }); });
  notes.forEach((n, i) => { g += texte(W / 2, H - 12 - (notes.length - 1 - i) * 20, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, H, g);
};

/** Lecture de valeurs sur une courbe (température de 10 h à 18 h, maximum 24 °C à 14 h). */
SCH['lecture-temperature'] = () => {
  const W = 600, H = 330;
  const r = rep({ x0: 60, x1: W - 50, y0: H - 40, y1: 40, xmin: 8, xmax: 20, ymin: 0, ymax: 28, pasX: 1, pasY: 2, etiqX: 2, etiqY: 4, titreX: 'heure (h)', titreY: 'température (°C)' });
  const f = (x) => (x <= 14 ? 24 - 0.5 * (x - 14) ** 2 : 24 - 0.375 * (x - 14) ** 2);
  let g = r.svg + courbe(f, 10, 18, r.X, r.Y, { couleur: BLEU });
  [[10, 16, ORANGE], [14, 24, ROUGE], [18, 18, VERT]].forEach(([x, y, c]) => {
    g += ligne(r.X(x), r.Y(0), r.X(x), r.Y(y), { couleur: c, epaisseur: 1.6, pointilles: true }) + ligne(r.X(x), r.Y(y), r.X(8), r.Y(y), { couleur: c, epaisseur: 1.6, pointilles: true });
    g += `<circle cx="${nb(r.X(x))}" cy="${nb(r.Y(y))}" r="5" fill="${c}"/>`;
    g += tx(r.X(x) + 8, r.Y(y) + (x === 10 ? 24 : -10), `${y} °C à ${x} h`, { taille: 13, couleur: c, gras: true, ancre: 'start' });
  });
  return enveloppe(W, H, g);
};

/** Trois situations : proportionnelle, alignée mais pas proportionnelle, non alignée. */
SCH['trois-cas-prop'] = () => {
  const W = 680, H = 290, pw = 226;
  let g = '';
  const cas = [
    { f: (x) => 4 * x, t1: 'P = 4 × c', t2: 'droite par l’origine', t3: 'proportionnel', ok: true, droite: true },
    { f: (x) => 5 + 2 * x, t1: 'P = 5 + 2 × n', t2: 'alignés, pas par l’origine', t3: 'non proportionnel', ok: false, droite: true },
    { f: (x) => x * x, t1: 'A = c × c', t2: 'points non alignés', t3: 'non proportionnel', ok: false, droite: false },
  ];
  cas.forEach((k, i) => {
    const x0 = i * pw;
    const r = rep({ x0: x0 + 40, x1: x0 + pw - 30, y0: 200, y1: 40, xmin: 0, xmax: 4, ymin: 0, ymax: 20, pasX: 1, pasY: 4, taille: 11 });
    g += r.svg;
    if (k.droite) g += ligne(r.X(0), r.Y(k.f(0)), r.X(4), r.Y(k.f(4)), { couleur: k.ok ? VERT : ORANGE, epaisseur: 1.6, pointilles: true });
    for (let x = 0; x <= 4; x++) g += `<circle cx="${nb(r.X(x))}" cy="${nb(r.Y(k.f(x)))}" r="4.5" fill="${BLEU}"/>`;
    g += texte(x0 + pw / 2, 30, k.t1, { taille: 14, gras: true });
    g += texte(x0 + pw / 2, 238, k.t2, { taille: 13, couleur: ATTENUE });
    g += texte(x0 + pw / 2, 262, k.t3, { taille: 14, gras: true, couleur: k.ok ? VERT : ROUGE });
    if (i > 0) g += ligne(x0, 20, x0, 272, { couleur: GRILLE, epaisseur: 1.5 });
  });
  return enveloppe(W, H, g);
};

/** Nuage de points (on ne relie pas) et courbe (on relie). */
SCH['nuage-ou-courbe'] = () => {
  const W = 660, H = 300;
  let g = '';
  const r1 = rep({ x0: 50, x1: 300, y0: 230, y1: 40, xmin: 0, xmax: 4, ymin: 0, ymax: 16, pasX: 1, pasY: 2, etiqY: 4, titreX: 'n', titreY: 'P(n) (€)' });
  g += r1.svg;
  for (let n = 0; n <= 4; n++) g += `<circle cx="${nb(r1.X(n))}" cy="${nb(r1.Y(5 + 2 * n))}" r="5" fill="${BLEU}"/>`;
  g += texte(175, 264, 'P(n) = 5 + 2n : on ne relie pas', { taille: 14, gras: true, couleur: BLEU });
  g += texte(175, 284, '(2,5 séances n’existe pas)', { taille: 13, couleur: ATTENUE });
  const r2 = rep({ x0: 380, x1: 630, y0: 230, y1: 40, xmin: 0, xmax: 4, ymin: 0, ymax: 16, pasX: 1, pasY: 2, etiqY: 4, titreX: 'c', titreY: 'A(c) (cm²)' });
  g += r2.svg + courbe((x) => x * x, 0, 4, r2.X, r2.Y, { couleur: ORANGE });
  for (let c = 0; c <= 4; c++) g += `<circle cx="${nb(r2.X(c))}" cy="${nb(r2.Y(c * c))}" r="5" fill="${ORANGE}"/>`;
  g += texte(505, 264, 'A(c) = c × c : on relie', { taille: 14, gras: true, couleur: ORANGE });
  g += texte(505, 284, '(un côté de 2,5 cm a un sens)', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Image et antécédent lus sur la droite de f(x) = 2x + 3. */
SCH['image-antecedent'] = () => {
  const W = 560, H = 380;
  const r = rep({ x0: 60, x1: 420, y0: 340, y1: 30, xmin: -1, xmax: 5, ymin: -1, ymax: 13, pasX: 1, pasY: 1, etiqY: 2 });
  const f = (x) => 2 * x + 3;
  let g = r.svg + courbe(f, -1, 5, r.X, r.Y, { couleur: ENCRE, epaisseur: 2.4 });
  // image de 4
  g += fleche(r.X(4), r.Y(0), r.X(4), r.Y(11) + 6, { couleur: BLEU, epaisseur: 2.2, pointe: 9 }) + fleche(r.X(4), r.Y(11), r.X(0) + 6, r.Y(11), { couleur: BLEU, epaisseur: 2.2, pointe: 9 });
  g += `<circle cx="${nb(r.X(4))}" cy="${nb(r.Y(11))}" r="5" fill="${BLEU}"/>`;
  // antécédent de 7
  g += fleche(r.X(0), r.Y(7), r.X(2) - 6, r.Y(7), { couleur: ORANGE, epaisseur: 2.2, pointe: 9 }) + fleche(r.X(2), r.Y(7), r.X(2), r.Y(0) - 6, { couleur: ORANGE, epaisseur: 2.2, pointe: 9 });
  g += `<circle cx="${nb(r.X(2))}" cy="${nb(r.Y(7))}" r="5" fill="${ORANGE}"/>`;
  g += tx(r.X(0) - 26, r.Y(11) + 5, '11', { taille: 13, gras: true, couleur: BLEU }) + tx(r.X(0) - 26, r.Y(7) + 5, '7', { taille: 13, gras: true, couleur: ORANGE });
  g += tx(r.X(4.6), r.Y(f(4.6)) + 26, 'y = 2x + 3', { taille: 14, gras: true, ancre: 'start' });
  const xl = 432;
  g += texte(xl, 110, 'image de 4 :', { taille: 14, ancre: 'start', couleur: BLEU, gras: true });
  g += texte(xl, 130, 'on part de l’axe', { taille: 13, ancre: 'start', couleur: BLEU });
  g += texte(xl, 148, 'horizontal → 11', { taille: 13, ancre: 'start', couleur: BLEU });
  g += texte(xl, 196, 'antécédent de 7 :', { taille: 14, ancre: 'start', couleur: ORANGE, gras: true });
  g += texte(xl, 216, 'on part de l’axe', { taille: 13, ancre: 'start', couleur: ORANGE });
  g += texte(xl, 234, 'vertical → 2', { taille: 13, ancre: 'start', couleur: ORANGE });
  return enveloppe(W, H, g);
};

/** Fonction affine f(x) = 2x + 1 : b se lit sur l'axe vertical, a sur la pente. */
SCH['affine-coefficients'] = () => {
  const W = 560, H = 340;
  const r = rep({ x0: 60, x1: 380, y0: 310, y1: 30, xmin: -2, xmax: 3, ymin: -3, ymax: 7, pasX: 1, pasY: 1 });
  const f = (x) => 2 * x + 1;
  let g = r.svg + courbe(f, -2, 3, r.X, r.Y, { couleur: BLEU, epaisseur: 2.6 });
  g += ligne(r.X(0), r.Y(1), r.X(1), r.Y(1), { couleur: ORANGE, epaisseur: 2.6 }) + ligne(r.X(1), r.Y(1), r.X(1), r.Y(3), { couleur: VERT, epaisseur: 2.6 });
  g += tx((r.X(0) + r.X(1)) / 2, r.Y(1) + 20, '+1', { taille: 14, gras: true, couleur: ORANGE }) + tx(r.X(1) + 22, r.Y(2) + 5, '+2', { taille: 14, gras: true, couleur: VERT });
  g += `<circle cx="${nb(r.X(0))}" cy="${nb(r.Y(1))}" r="6" fill="${ROUGE}"/>` + `<circle cx="${nb(r.X(2))}" cy="${nb(r.Y(5))}" r="5" fill="${BLEU}"/>`;
  g += tx(r.X(0) - 14, r.Y(1) - 10, 'b = 1', { taille: 14, gras: true, couleur: ROUGE, ancre: 'end' });
  g += tx(r.X(2) + 10, r.Y(5) + 4, '(2 ; 5)', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  const xl = 400;
  g += texte(xl, 100, 'f(x) = ax + b', { taille: 15, ancre: 'start', gras: true });
  g += texte(xl, 136, 'b : là où la droite', { taille: 14, ancre: 'start', couleur: ROUGE });
  g += texte(xl, 156, 'coupe l’axe vertical', { taille: 14, ancre: 'start', couleur: ROUGE });
  g += texte(xl, 192, 'a : on avance de 1,', { taille: 14, ancre: 'start', couleur: VERT });
  g += texte(xl, 212, 'on monte de a = 2', { taille: 14, ancre: 'start', couleur: VERT });
  g += texte(xl, 250, 'f(x) = 2x + 1', { taille: 15, ancre: 'start', gras: true, couleur: BLEU });
  return enveloppe(W, H, g);
};

/** Parabole y = x² et droites horizontales y = a. lignes : [{ a, couleur, t }]. */
SCH['parabole'] = ({ lignes, ymin = -4, ymax = 10, xmin = -4, xmax = 4, W = 600, H = 380, notes = [] }) => {
  const hb = notes.length * 20;
  const r = rep({ x0: 50, x1: 400, y0: H - 30 - hb, y1: 30, xmin, xmax, ymin, ymax, pasX: 1, pasY: 1, etiqY: 2 });
  let g = r.svg + courbe((x) => x * x, xmin, xmax, r.X, r.Y, { couleur: BLEU, ymax, ymin });
  g += tx(r.X(Math.sqrt(ymax)) + 10, r.Y(ymax) + 14, 'y = x²', { taille: 14, gras: true, couleur: BLEU, ancre: 'start' });
  let yl = 70;
  for (const L of lignes) {
    g += ligne(r.X(xmin), r.Y(L.a), r.X(xmax), r.Y(L.a), { couleur: L.couleur, epaisseur: 2, pointilles: L.a < 0 });
    if (L.a > 0) {
      const s = Math.sqrt(L.a);
      [-s, s].forEach((x) => { g += ligne(r.X(x), r.Y(L.a), r.X(x), r.Y(0), { couleur: L.couleur, epaisseur: 1.5, pointilles: true }) + `<circle cx="${nb(r.X(x))}" cy="${nb(r.Y(L.a))}" r="5" fill="${L.couleur}"/>` + `<circle cx="${nb(r.X(x))}" cy="${nb(r.Y(0))}" r="4" fill="${L.couleur}"/>`; });
    } else if (L.a === 0) g += `<circle cx="${nb(r.X(0))}" cy="${nb(r.Y(0))}" r="6" fill="${L.couleur}"/>`;
    g += texte(415, yl, L.t1, { taille: 14, gras: true, couleur: L.couleur, ancre: 'start' });
    g += texte(415, yl + 20, L.t2, { taille: 13, couleur: L.couleur, ancre: 'start' });
    yl += 62;
  }
  notes.forEach((n, i) => { g += texte(W / 2, H - 12 - (notes.length - 1 - i) * 20, n, { taille: 14, couleur: ATTENUE }); });
  return enveloppe(W, H, g);
};

/** Résolution graphique de 2x − 3 ≥ 1 : la droite est au-dessus de y = 1 pour x ≥ 2. */
SCH['resolution-graphique'] = () => {
  const W = 560, H = 360;
  const r = rep({ x0: 50, x1: 380, y0: 320, y1: 30, xmin: -1, xmax: 4, ymin: -5, ymax: 5, pasX: 1, pasY: 1 });
  let g = r.svg;
  g += `<rect x="${nb(r.X(2))}" y="${nb(r.Y(0)) - 7}" width="${nb(r.X(4) - r.X(2))}" height="14" fill="${VERT}" fill-opacity="0.3"/>`;
  g += courbe((x) => 2 * x - 3, -1, 4, r.X, r.Y, { couleur: BLEU, ymin: -5, ymax: 5 }) + courbe(() => 1, -1, 4, r.X, r.Y, { couleur: ORANGE });
  g += courbe((x) => 2 * x - 3, 2, 4, r.X, r.Y, { couleur: VERT, epaisseur: 5, ymax: 5 });
  g += ligne(r.X(2), r.Y(1), r.X(2), r.Y(0), { couleur: VERT, epaisseur: 1.6, pointilles: true }) + `<circle cx="${nb(r.X(2))}" cy="${nb(r.Y(1))}" r="5" fill="${ROUGE}"/>`;
  g += `<path d="M ${nb(r.X(2) + 9)} ${nb(r.Y(0) - 15)} L ${nb(r.X(2))} ${nb(r.Y(0) - 15)} L ${nb(r.X(2))} ${nb(r.Y(0) + 15)} L ${nb(r.X(2) + 9)} ${nb(r.Y(0) + 15)}" fill="none" stroke="${VERT}" stroke-width="3"/>`;
  g += tx(r.X(2) - 10, r.Y(1) - 10, '(2 ; 1)', { taille: 13, gras: true, couleur: ROUGE, ancre: 'end' });
  g += tx(r.X(-0.6), r.Y(1) - 8, 'y = 1', { taille: 13, gras: true, couleur: ORANGE });
  g += tx(r.X(3.3) + 10, r.Y(3.6) + 6, 'y = 2x − 3', { taille: 13, gras: true, couleur: BLEU, ancre: 'start' });
  const xl = 392;
  g += texte(xl, 120, 'y = 2x − 3 est au-dessus', { taille: 14, ancre: 'start' });
  g += texte(xl, 140, 'de y = 1 (ou dessus)', { taille: 14, ancre: 'start' });
  g += texte(xl, 160, 'pour x ≥ 2', { taille: 14, ancre: 'start', gras: true, couleur: VERT });
  g += texte(xl, 200, 'solutions de', { taille: 14, ancre: 'start' });
  g += texte(xl, 220, '2x − 3 ≥ 1 : x ≥ 2', { taille: 14, ancre: 'start', gras: true, couleur: VERT });
  return enveloppe(W, H, g);
};

/** Proportionnalité et Thalès : O, H, M et H', M' sur une droite passant par l'origine. */
SCH['thales-graphique'] = () => {
  const W = 560, H = 360;
  const r = rep({ x0: 50, x1: 400, y0: 320, y1: 30, xmin: 0, xmax: 7, ymin: 0, ymax: 17, pasX: 1, pasY: 1, etiqY: 5, titreX: 'masse (kg)', titreY: 'prix (€)' });
  let g = r.svg;
  g += polygone([[r.X(0), r.Y(0)], [r.X(6), r.Y(0)], [r.X(6), r.Y(15)]], { couleur: 'none', fond: BLEU, opacite: 0.1, epaisseur: 0 });
  g += polygone([[r.X(0), r.Y(0)], [r.X(2), r.Y(0)], [r.X(2), r.Y(5)]], { couleur: 'none', fond: ORANGE, opacite: 0.3, epaisseur: 0 });
  g += courbe((x) => 2.5 * x, 0, 6.6, r.X, r.Y, { couleur: ENCRE, epaisseur: 2.2 });
  g += ligne(r.X(2), r.Y(0), r.X(2), r.Y(5), { couleur: ORANGE, epaisseur: 2.4 }) + ligne(r.X(6), r.Y(0), r.X(6), r.Y(15), { couleur: BLEU, epaisseur: 2.4 });
  g += `<circle cx="${nb(r.X(2))}" cy="${nb(r.Y(5))}" r="5" fill="${ORANGE}"/>` + `<circle cx="${nb(r.X(6))}" cy="${nb(r.Y(15))}" r="5" fill="${BLEU}"/>`;
  g += tx(r.X(2) - 8, r.Y(5) - 10, 'A(2 ; 5)', { taille: 13, gras: true, couleur: ORANGE, ancre: 'end' }) + tx(r.X(6) - 8, r.Y(15) - 10, 'B(6 ; 15)', { taille: 13, gras: true, couleur: BLEU, ancre: 'end' });
  g += tx(r.X(2), r.Y(0) + 32, 'H', { taille: 13, gras: true, couleur: ORANGE }) + tx(r.X(6), r.Y(0) + 32, 'H′', { taille: 13, gras: true, couleur: BLEU });
  g += tx(r.X(0) - 16, r.Y(0) + 32, 'O', { taille: 13, gras: true });
  const xl = 420;
  g += texte(xl, 110, 'OH/OH′ = HA/H′B', { taille: 14, ancre: 'start', gras: true });
  g += texte(xl, 136, '2/6 = 5/15 = 1/3', { taille: 14, ancre: 'start' });
  g += texte(xl, 172, 'prix ÷ masse', { taille: 14, ancre: 'start' });
  g += texte(xl, 192, '= 2,5 €/kg partout', { taille: 14, ancre: 'start', gras: true, couleur: VERT });
  return enveloppe(W, H, g);
};

// ---------------------------------------------------------------------------
// Statistiques
// ---------------------------------------------------------------------------

/** Même données, axe qui part de 0 ou de 80 : l'écart paraît énorme. */
SCH['axe-tronque'] = () => {
  const W = 640, H = 300, vals = [81, 83];
  let g = '';
  [[0, 100, 20, 'axe qui part de 0'], [80, 84, 1, 'axe qui part de 80']].forEach(([m, M, pas, t], i) => {
    const x0 = 60 + i * 320, x1 = x0 + 220, y0 = 230, y1 = 40;
    const Y = (v) => y0 - ((v - m) / (M - m)) * (y0 - y1);
    for (let v = m; v <= M + 1e-9; v += pas) g += ligne(x0, Y(v), x1, Y(v), { couleur: GRILLE, epaisseur: 1 }) + texte(x0 - 8, Y(v) + 4, fr(v), { taille: 12, couleur: ATTENUE, ancre: 'end' });
    vals.forEach((v, k) => {
      const cx = x0 + 60 + k * 100;
      g += `<rect x="${cx - 26}" y="${nb(Y(v))}" width="52" height="${nb(y0 - Y(v))}" fill="${k ? ORANGE : BLEU}" fill-opacity="0.75"/>`;
      g += texte(cx, y0 + 20, k ? 'année 2' : 'année 1', { taille: 13 });
      g += texte(cx, Y(v) - 6, `${v} %`, { taille: 13, gras: true });
    });
    g += ligne(x0, y0, x1, y0, { couleur: AXE, epaisseur: 1.8 }) + ligne(x0, y0, x0, y1 - 6, { couleur: AXE, epaisseur: 1.8 });
    g += texte(x0 + 110, 274, t, { taille: 14, gras: true, couleur: i ? ROUGE : VERT });
  });
  g += texte(W / 2, 22, 'Les mêmes données (81 % puis 83 %), deux impressions très différentes', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Médiane d'une série rangée : effectif impair puis pair. */
SCH['mediane'] = () => {
  const W = 640, H = 260, c = 46, gap = 8;
  let g = '';
  const rangee = (vals, y, mil, x0) => {
    let s = '';
    vals.forEach((v, i) => {
      const x = x0 + i * (c + gap), on = mil.includes(i);
      s += boite(x, y, c, 38, String(v), { taille: 16, gras: on, fond: on ? '#fde7cf' : '#ffffff', bord: on ? ORANGE : ATTENUE });
    });
    return s;
  };
  const a = [8, 8, 9, 11, 12, 14, 15], x0a = (W - (a.length * (c + gap) - gap)) / 2;
  g += texte(20, 30, '7 valeurs (impair)', { taille: 14, gras: true, ancre: 'start' });
  g += rangee(a, 42, [3], x0a);
  g += accolade(x0a, x0a + 3 * (c + gap) - gap, 86, { bas: true, couleur: BLEU }) + accolade(x0a + 4 * (c + gap), x0a + 7 * (c + gap) - gap, 86, { bas: true, couleur: BLEU });
  g += texte(x0a + 1.5 * (c + gap), 124, '3 valeurs', { taille: 13, couleur: BLEU }) + texte(x0a + 5.5 * (c + gap), 124, '3 valeurs', { taille: 13, couleur: BLEU });
  g += texte(x0a + 3.5 * (c + gap) - gap / 2, 124, 'médiane = 11', { taille: 14, gras: true, couleur: ORANGE });
  const b = [6, 8, 8, 9, 11, 12, 14, 15], x0b = (W - (b.length * (c + gap) - gap)) / 2;
  g += texte(20, 160, '8 valeurs (pair)', { taille: 14, gras: true, ancre: 'start' });
  g += rangee(b, 172, [3, 4], x0b);
  const xm = x0b + 4 * (c + gap) - gap / 2;
  g += ligne(xm, 166, xm, 216, { couleur: ROUGE, epaisseur: 2.4 });
  g += texte(xm, 246, 'médiane = (9 + 11) ÷ 2 = 10', { taille: 14, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
};

/** Diagramme en points sur un axe (séries). lignes : [{ nom, vals, moyenne, mediane, couleur }] */
SCH['points-series'] = ({ lignes, min, max, W = 640, etendue = false, notes = [] }) => {
  const x0 = 120, x1 = W - 30, X = (v) => x0 + ((v - min) / (max - min)) * (x1 - x0);
  const hL = lignes.some((L) => L.moyenne !== undefined) ? 132 : 92;
  let g = '';
  lignes.forEach((L, i) => {
    const y = (hL > 100 ? 80 : 70) + i * hL;
    g += ligne(x0, y, x1, y, { couleur: AXE, epaisseur: 1.6 });
    for (let v = min; v <= max; v++) g += ligne(X(v), y - 3, X(v), y + 3, { couleur: AXE, epaisseur: 1 }) + (v % 2 === 0 ? texte(X(v), y + 17, String(v), { taille: 11, couleur: ATTENUE }) : '');
    const comptes = {};
    L.vals.forEach((v) => { comptes[v] = (comptes[v] || 0) + 1; g += `<circle cx="${nb(X(v))}" cy="${y - 10 - (comptes[v] - 1) * 14}" r="6" fill="${L.couleur || BLEU}"/>`; });
    g += texte(x0 - 14, y - 6, L.nom, { taille: 14, gras: true, ancre: 'end' });
    if (L.moyenne !== undefined) g += polygone([[X(L.moyenne), y + 22], [X(L.moyenne) - 7, y + 34], [X(L.moyenne) + 7, y + 34]], { couleur: ROUGE, fond: ROUGE, opacite: 1, epaisseur: 1 }) + texte(X(L.moyenne), y + 50, `moyenne ${Math.abs(L.moyenne * 10 - Math.round(L.moyenne * 10)) > 1e-9 ? '≈ ' : ''}${fr(L.moyenne, 1)}`, { taille: 12, couleur: ROUGE, gras: true });
    if (L.mediane !== undefined) g += ligne(X(L.mediane), y - 40, X(L.mediane), y - 22, { couleur: VERT, epaisseur: 3 }) + tx(X(L.mediane), y - 44, `médiane ${fr(L.mediane, 1)}`, { taille: 12, couleur: VERT, gras: true });
    if (etendue) {
      const a = Math.min(...L.vals), b = Math.max(...L.vals);
      g += `<path d="M ${nb(X(a))} ${y + 28} L ${nb(X(a))} ${y + 34} L ${nb(X(b))} ${y + 34} L ${nb(X(b))} ${y + 28}" fill="none" stroke="${VIOLET}" stroke-width="2"/>`;
      g += texte((X(a) + X(b)) / 2, y + 50, `étendue ${b - a}`, { taille: 12, couleur: VIOLET, gras: true });
    }
  });
  let y = (hL > 100 ? 80 : 70) + lignes.length * hL - (hL > 100 ? 60 : 20);
  notes.forEach((n) => { g += texte(W / 2, y, n, { taille: 14, couleur: ATTENUE }); y += 20; });
  return enveloppe(W, y + 4, g);
};

/** Effectifs cumulés croissants : lecture de Q1, médiane, Q3 par les rangs. */
SCH['cumuls'] = () => {
  const W = 620, H = 330;
  const notes = [6, 8, 10, 12, 14, 16], cum = [2, 7, 13, 20, 23, 25];
  const x0 = 60, x1 = 420, y0 = 280, y1 = 40, Y = (v) => y0 - (v / 26) * (y0 - y1);
  const pasX = (x1 - x0) / notes.length;
  let g = '';
  for (let v = 0; v <= 25; v += 5) g += ligne(x0, Y(v), x1, Y(v), { couleur: GRILLE, epaisseur: 1 }) + texte(x0 - 8, Y(v) + 4, String(v), { taille: 12, couleur: ATTENUE, ancre: 'end' });
  notes.forEach((n, i) => {
    const cx = x0 + pasX * (i + 0.5);
    g += `<rect x="${nb(cx - 22)}" y="${nb(Y(cum[i]))}" width="44" height="${nb(y0 - Y(cum[i]))}" fill="${BLEU}" fill-opacity="0.35" stroke="${BLEU}" stroke-width="1.4"/>`;
    g += texte(cx, y0 + 18, String(n), { taille: 13 }) + texte(cx, Y(cum[i]) - 5, String(cum[i]), { taille: 12, gras: true, couleur: BLEU });
  });
  const lect = [[7, 1, 'rang 7 → Q₁ = 8', VERT], [13, 2, 'rang 13 → médiane = 10', ORANGE], [19, 3, 'rang 19 → Q₃ = 12', ROUGE]];
  lect.forEach(([rg, i, t, c]) => {
    const cx = x0 + pasX * (i + 0.5);
    g += ligne(x0, Y(rg), cx + 22, Y(rg), { couleur: c, epaisseur: 2, pointilles: true });
    g += `<circle cx="${nb(cx)}" cy="${nb(Y(rg))}" r="5" fill="${c}"/>`;
    g += texte(x1 + 14, Y(rg) + 5, t, { taille: 13, gras: true, couleur: c, ancre: 'start' });
  });
  g += ligne(x0, y0, x1, y0, { couleur: AXE, epaisseur: 1.8 }) + ligne(x0, y0, x0, y1 - 8, { couleur: AXE, epaisseur: 1.8 });
  g += texte(x0 + 6, y1 - 14, 'effectif cumulé', { taille: 13, italique: true, ancre: 'start' }) + texte((x0 + x1) / 2, y0 + 40, 'note', { taille: 13, italique: true });
  return enveloppe(W, H, g);
};

/** Boîtes à moustaches. boites : [{ nom, v: [min, Q1, Me, Q3, max], couleur }] */
SCH['boites'] = ({ boites, min = 4, max = 16, W = 620, noms = true }) => {
  const x0 = noms && boites.length > 1 ? 90 : 50, x1 = W - 40, X = (v) => x0 + ((v - min) / (max - min)) * (x1 - x0);
  const hB = 90, yAxe = 40 + boites.length * hB;
  let g = '';
  boites.forEach((b, i) => {
    const y = 60 + i * hB, c = b.couleur || BLEU, [mi, q1, me, q3, ma] = b.v;
    g += ligne(X(mi), y, X(q1), y, { couleur: c, epaisseur: 2.2 }) + ligne(X(q3), y, X(ma), y, { couleur: c, epaisseur: 2.2 });
    g += ligne(X(mi), y - 10, X(mi), y + 10, { couleur: c, epaisseur: 2.2 }) + ligne(X(ma), y - 10, X(ma), y + 10, { couleur: c, epaisseur: 2.2 });
    g += `<rect x="${nb(X(q1))}" y="${y - 20}" width="${nb(X(q3) - X(q1))}" height="40" fill="${c}" fill-opacity="0.18" stroke="${c}" stroke-width="2.2"/>`;
    g += ligne(X(me), y - 20, X(me), y + 20, { couleur: ROUGE, epaisseur: 3 });
    if (boites.length > 1) g += texte(x0 - 20, y + 5, b.nom, { taille: 16, gras: true, ancre: 'end', couleur: c });
    if (b.etiquettes) {
      [['min', mi], ['Q₁', q1], ['médiane', me], ['Q₃', q3], ['max', ma]].forEach(([t, v], k) => { g += tx(X(v), y - 28 - (k === 2 ? 0 : 0), t, { taille: 13, gras: true, couleur: k === 2 ? ROUGE : c }); });
    }
    if (b.largeur) g += texte((X(q1) + X(q3)) / 2, y + 40, `largeur ${q3 - q1}`, { taille: 12, couleur: c, gras: true });
  });
  g += ligne(x0, yAxe, x1, yAxe, { couleur: AXE, epaisseur: 1.8 });
  for (let v = min; v <= max; v++) g += ligne(X(v), yAxe - 4, X(v), yAxe + 4, { couleur: AXE, epaisseur: 1.2 }) + texte(X(v), yAxe + 18, String(v), { taille: 12, couleur: ATTENUE });
  return enveloppe(W, yAxe + 30, g);
};

// ---------------------------------------------------------------------------
// Calcul, algèbre, algorithmique
// ---------------------------------------------------------------------------

/** Fraction d'une fraction : 2/3 de 3/4 = 6/12 = 1/2 (rectangle 3 lignes × 4 colonnes). */
SCH['fraction-de-fraction'] = () => {
  const W = 600, H = 260, c = 56, r = 46, x0 = 70, y0 = 50;
  let g = '';
  for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) {
    const dansBleu = j < 3, dansRouge = j < 3 && i >= 1;
    const f = dansRouge ? ORANGE : dansBleu ? BLEU : '#ffffff';
    g += `<rect x="${x0 + j * c}" y="${y0 + i * r}" width="${c}" height="${r}" fill="${f}" fill-opacity="${dansRouge ? 0.6 : dansBleu ? 0.2 : 0}" stroke="${ENCRE}" stroke-width="1.4"/>`;
  }
  g += `<rect x="${x0}" y="${y0}" width="${4 * c}" height="${3 * r}" fill="none" stroke="${ENCRE}" stroke-width="2.6"/>`;
  g += accolade(x0, x0 + 3 * c, y0 - 6, { couleur: BLEU }) + tx(x0 + 1.5 * c, y0 - 30, '3/4', { taille: 15, gras: true, couleur: BLEU });
  g += `<path d="M ${x0 - 8} ${y0 + r} L ${x0 - 14} ${y0 + r} L ${x0 - 14} ${y0 + 3 * r} L ${x0 - 8} ${y0 + 3 * r}" fill="none" stroke="${ORANGE}" stroke-width="2"/>`;
  g += texte(x0 - 20, y0 + 2 * r + 5, '2/3', { taille: 14, gras: true, couleur: ORANGE, ancre: 'end' });
  const xl = 340;
  g += texte(xl, 80, '3 colonnes sur 4 : 3/4', { taille: 14, ancre: 'start', couleur: BLEU, gras: true });
  g += texte(xl, 106, 'puis 2 lignes sur 3', { taille: 14, ancre: 'start', couleur: ORANGE, gras: true });
  g += texte(xl, 126, 'de cette partie', { taille: 14, ancre: 'start', couleur: ORANGE });
  g += texte(xl, 166, '6 cases sur 12', { taille: 15, ancre: 'start', gras: true });
  g += texte(xl, 192, '2/3 × 3/4 = 6/12 = 1/2', { taille: 15, ancre: 'start', gras: true });
  return enveloppe(W, H, g);
};

/** Équation vue comme une balance : 5x + 3 = 23, puis 5x = 20, puis x = 4. */
SCH['balance'] = () => {
  const W = 680, H = 250, bras = 58, demi = 41;
  let g = '';
  const bal = (cx, gauche, droite, titre) => {
    let s = '';
    const yB = 100;
    s += polygone([[cx, yB], [cx - 13, 182], [cx + 13, 182]], { couleur: ENCRE, fond: '#dfe6ee', opacite: 1, epaisseur: 1.6 });
    s += ligne(cx - bras - 8, yB, cx + bras + 8, yB, { epaisseur: 3 });
    for (const sx of [-1, 1]) {
      const px = cx + sx * bras;
      s += ligne(px, yB, px - demi + 6, yB + 46, { couleur: ATTENUE, epaisseur: 1.2 }) + ligne(px, yB, px + demi - 6, yB + 46, { couleur: ATTENUE, epaisseur: 1.2 });
      s += `<path d="M ${px - demi} ${yB + 46} Q ${px} ${yB + 64} ${px + demi} ${yB + 46} Z" fill="#e8edf3" stroke="${ENCRE}" stroke-width="1.6"/>`;
    }
    const pose = (px, items) => {
      let t = '';
      const w = items.reduce((a, it) => a + it.w + 2, -2);
      let x = px - w / 2;
      items.forEach((it) => { t += `<rect x="${nb(x)}" y="${yB + 46 - it.h}" width="${it.w}" height="${it.h}" rx="2" fill="${it.c}" fill-opacity="0.9"/>` + texte(x + it.w / 2, yB + 46 - it.h / 2 + 4, it.t, { taille: 12, gras: true, couleur: '#ffffff' }); x += it.w + 2; });
      return t;
    };
    s += pose(cx - bras, gauche) + pose(cx + bras, droite);
    s += texte(cx, 216, titre, { taille: 15, gras: true });
    return s;
  };
  const X = (n) => Array.from({ length: n }, () => ({ w: 10, h: 24, c: BLEU, t: 'x' }));
  const xs = [113, 340, 567];
  g += bal(xs[0], [...X(5), { w: 17, h: 17, c: ORANGE, t: '3' }], [{ w: 30, h: 28, c: ORANGE, t: '23' }], '5x + 3 = 23');
  g += fleche(214, 92, 238, 92, { couleur: ROUGE, epaisseur: 2.4, pointe: 8 }) + texte(226, 76, '− 3', { taille: 14, gras: true, couleur: ROUGE });
  g += bal(xs[1], X(5), [{ w: 30, h: 26, c: ORANGE, t: '20' }], '5x = 20');
  g += fleche(441, 92, 465, 92, { couleur: ROUGE, epaisseur: 2.4, pointe: 8 }) + texte(453, 76, '÷ 5', { taille: 14, gras: true, couleur: ROUGE });
  g += bal(xs[2], X(1), [{ w: 20, h: 20, c: ORANGE, t: '4' }], 'x = 4');
  g += texte(W / 2, 30, 'On fait toujours la même chose des deux côtés.', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Trois entiers consécutifs : n + (n + 1) + (n + 2) = 3(n + 1). */
SCH['consecutifs'] = () => {
  const W = 660, H = 230, n = 120, u = 26, h = 26;
  let g = '';
  const barre = (x, y, extra, cExtra, deplace = false) => {
    let s = `<rect x="${x}" y="${y}" width="${n}" height="${h}" fill="${BLEU}" fill-opacity="0.3" stroke="${BLEU}" stroke-width="1.6"/>` + texte(x + n / 2, y + h / 2 + 5, 'n', { taille: 14, gras: true, couleur: BLEU });
    for (let k = 0; k < extra; k++) s += `<rect x="${x + n + k * u}" y="${y}" width="${u}" height="${h}" fill="${cExtra[k] || ORANGE}" fill-opacity="${deplace && k === extra - 1 ? 0.25 : 0.65}" stroke="${cExtra[k] || ORANGE}" stroke-width="1.6"${deplace && k === extra - 1 ? ' stroke-dasharray="4 3"' : ''}/>` + texte(x + n + k * u + u / 2, y + h / 2 + 5, '1', { taille: 13, gras: true });
    return s;
  };
  const x0 = 60;
  g += barre(x0, 40, 0, []) + barre(x0, 80, 1, [ORANGE]) + barre(x0, 120, 2, [ORANGE, VERT], true);
  g += texte(x0 - 10, 58, 'n', { taille: 14, ancre: 'end', gras: true }) + texte(x0 - 10, 98, 'n + 1', { taille: 14, ancre: 'end', gras: true }) + texte(x0 - 10, 138, 'n + 2', { taille: 14, ancre: 'end', gras: true });
  // déplacement de l'unité verte
  g += `<path d="M ${x0 + n + u * 1.5} ${120} C ${x0 + n + u * 3} ${70} ${x0 + n + u * 2.5} ${40} ${x0 + n + u * 1.1} ${46}" fill="none" stroke="${VERT}" stroke-width="2"/>`;
  g += polygone([[x0 + n + u * 1.05, 46], [x0 + n + u * 1.5, 39], [x0 + n + u * 1.45, 52]], { couleur: VERT, fond: VERT, opacite: 1, epaisseur: 1 });
  g += fleche(300, 90, 350, 90, { couleur: ENCRE, epaisseur: 2.4 });
  const x1 = 380;
  for (let k = 0; k < 3; k++) g += barre(x1, 40 + k * 40, 1, [k === 0 ? VERT : ORANGE]);
  g += texte(x1 + n + u + 12, 98, '3 barres', { taille: 14, ancre: 'start', gras: true }) + texte(x1 + n + u + 12, 118, 'identiques', { taille: 14, ancre: 'start', gras: true });
  g += texte(W / 2, 196, 'n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)', { taille: 16, gras: true });
  g += texte(W / 2, 220, 'la somme est un multiple de 3', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Organigramme d'une instruction conditionnelle (si … alors … sinon). */
SCH['organigramme-si'] = () => {
  const W = 560, H = 360;
  let g = '';
  g += noeud(190, 16, 180, 40, 'demander n', { forme: 'ovale' });
  g += fleche(280, 56, 280, 84, { couleur: ENCRE, epaisseur: 2 });
  g += noeud(190, 84, 180, 76, 'n ≥ 0 ?', { forme: 'losange', fond: '#fff4e5', bord: ORANGE, taille: 15 });
  g += ligne(190, 122, 100, 122, { epaisseur: 2 }) + fleche(100, 122, 100, 192, { couleur: ENCRE, epaisseur: 2 });
  g += ligne(370, 122, 460, 122, { epaisseur: 2 }) + fleche(460, 122, 460, 192, { couleur: ENCRE, epaisseur: 2 });
  g += tx(145, 112, 'vrai', { taille: 14, gras: true, couleur: VERT }) + tx(415, 112, 'faux', { taille: 14, gras: true, couleur: ROUGE });
  g += noeud(30, 192, 140, 44, 'afficher n', { fond: '#e3f4ea', bord: VERT });
  g += noeud(390, 192, 140, 44, 'afficher 0 − n', { fond: '#fbe6e6', bord: ROUGE });
  g += ligne(100, 236, 100, 270, { epaisseur: 2 }) + ligne(460, 236, 460, 270, { epaisseur: 2 }) + ligne(100, 270, 460, 270, { epaisseur: 2 });
  g += fleche(280, 270, 280, 296, { couleur: ENCRE, epaisseur: 2 });
  g += noeud(210, 296, 140, 40, 'fin si', { forme: 'ovale' });
  g += texte(W / 2, 354, 'Une seule des deux branches est exécutée.', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H + 8, g);
};

/** Organigramme d'une boucle « tant que » (n part de 1 et double tant que n < 20). */
SCH['organigramme-tantque'] = () => {
  const W = 620, H = 380;
  let g = '';
  g += noeud(120, 16, 180, 40, 'mettre 1 dans n', { forme: 'ovale' });
  g += fleche(210, 56, 210, 90, { couleur: ENCRE, epaisseur: 2 });
  g += noeud(120, 90, 180, 76, 'n < 20 ?', { forme: 'losange', fond: '#fff4e5', bord: ORANGE, taille: 15 });
  g += fleche(210, 166, 210, 206, { couleur: ENCRE, epaisseur: 2 }) + tx(224, 190, 'vrai', { taille: 14, gras: true, couleur: VERT, ancre: 'start' });
  g += noeud(120, 206, 180, 44, 'mettre n × 2 dans n', { fond: '#e3f4ea', bord: VERT });
  // retour au test
  g += ligne(120, 228, 60, 228, { epaisseur: 2 }) + ligne(60, 228, 60, 128, { epaisseur: 2 }) + fleche(60, 128, 120, 128, { couleur: ENCRE, epaisseur: 2 });
  g += tx(68, 192, 'retour au test', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  // sortie
  g += ligne(300, 128, 360, 128, { epaisseur: 2 }) + fleche(360, 128, 360, 292, { couleur: ENCRE, epaisseur: 2 }) + tx(330, 118, 'faux', { taille: 14, gras: true, couleur: ROUGE });
  g += noeud(290, 292, 140, 44, 'afficher n', { forme: 'ovale', fond: '#fbe6e6', bord: ROUGE });
  // déroulé
  const xl = 450;
  g += texte(xl, 60, 'valeurs de n :', { taille: 14, gras: true, ancre: 'start' });
  ['1 < 20 vrai', '2 < 20 vrai', '4 < 20 vrai', '8 < 20 vrai', '16 < 20 vrai', '32 < 20 faux'].forEach((t, i) => { g += texte(xl, 88 + i * 24, t, { taille: 14, ancre: 'start', couleur: i < 5 ? VERT : ROUGE }); });
  g += texte(xl, 250, 'sortie : 32', { taille: 15, gras: true, ancre: 'start' });
  g += texte(W / 2, 366, 'Le test a lieu avant chaque tour : la valeur finale ne le vérifie plus.', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Multiplier des puissances de même base : on compte les facteurs. */
SCH['facteurs-meme-base'] = () => {
  const W = 640, H = 170, r = 18, pas = 54;
  let g = '';
  const x0 = 60;
  for (let i = 0; i < 7; i++) {
    const x = x0 + i * pas + (i >= 3 ? 20 : 0), c = i < 3 ? BLEU : ORANGE;
    g += `<circle cx="${x}" cy="70" r="${r}" fill="${c}" fill-opacity="0.2" stroke="${c}" stroke-width="2"/>` + texte(x, 76, '2', { taille: 17, gras: true, couleur: c });
    if (i < 6) g += texte(x + pas / 2 + (i === 2 ? 10 : 0), 76, '×', { taille: 15, couleur: ATTENUE });
  }
  g += accolade(x0 - r, x0 + 2 * pas + r, 100, { bas: true, couleur: BLEU }) + texte(x0 + pas, 140, '2³ : 3 facteurs', { taille: 14, gras: true, couleur: BLEU });
  g += accolade(x0 + 3 * pas + 20 - r, x0 + 6 * pas + 20 + r, 100, { bas: true, couleur: ORANGE }) + texte(x0 + 4.5 * pas + 20, 140, '2⁴ : 4 facteurs', { taille: 14, gras: true, couleur: ORANGE });
  g += texte(W - 30, 66, '7 facteurs 2', { taille: 15, gras: true, ancre: 'end' }) + texte(W - 30, 92, '2³ × 2⁴ = 2⁷', { taille: 16, gras: true, ancre: 'end', couleur: VERT });
  return enveloppe(W, H, g);
};

/** Multiplier des puissances de même exposant : on apparie les facteurs. */
SCH['facteurs-meme-exposant'] = () => {
  const W = 620, H = 180;
  let g = '';
  for (let k = 0; k < 3; k++) {
    const x = 60 + k * 140;
    g += `<rect x="${x - 10}" y="30" width="116" height="60" rx="12" fill="${VERT}" fill-opacity="0.08" stroke="${VERT}" stroke-width="1.6"/>`;
    g += `<circle cx="${x + 18}" cy="60" r="18" fill="${BLEU}" fill-opacity="0.2" stroke="${BLEU}" stroke-width="2"/>` + texte(x + 18, 66, '2', { taille: 17, gras: true, couleur: BLEU });
    g += texte(x + 48, 66, '×', { taille: 15, couleur: ATTENUE });
    g += `<circle cx="${x + 78}" cy="60" r="18" fill="${ORANGE}" fill-opacity="0.2" stroke="${ORANGE}" stroke-width="2"/>` + texte(x + 78, 66, '5', { taille: 17, gras: true, couleur: ORANGE });
    g += texte(x + 48, 112, '= 10', { taille: 14, gras: true, couleur: VERT });
    if (k < 2) g += texte(x + 123, 66, '×', { taille: 17, couleur: ATTENUE });
  }
  g += texte(W / 2, 156, '2³ × 5³ = (2 × 5) × (2 × 5) × (2 × 5) = 10³ = 1 000', { taille: 15, gras: true });
  return enveloppe(W, H, g);
};

/** Encadrer √50 : 49 < 50 < 64 donc 7 < √50 < 8. */
SCH['encadrement-racine'] = () => {
  const W = 640, H = 230;
  const d1 = droite({ x0: 60, x1: 580, y: 60, min: 45, max: 66, sub: 1, pas: 100, etiq: () => '' });
  const d2 = droite({ x0: 60, x1: 580, y: 170, min: 6.7, max: 8.1, sub: 10, pas: 100, etiq: () => '' });
  let g = d1.svg + d2.svg;
  g += texte(30, 64, 'n', { taille: 15, gras: true, italique: true }) + texte(30, 174, '√n', { taille: 15, gras: true });
  [[49, 7, BLEU, '49', '7'], [50, Math.sqrt(50), ROUGE, '50', '√50'], [64, 8, BLEU, '64', '8']].forEach(([a, b, c, ta, tb]) => {
    g += `<circle cx="${nb(d1.X(a))}" cy="60" r="5" fill="${c}"/>` + `<circle cx="${nb(d2.X(b))}" cy="170" r="5" fill="${c}"/>`;
    g += tx(d1.X(a), 40, ta, { taille: 15, gras: true, couleur: c }) + tx(d2.X(b), 200, tb, { taille: 15, gras: true, couleur: c });
    g += fleche(d1.X(a), 72, d2.X(b), 158, { couleur: c, epaisseur: 1.6, pointilles: true, pointe: 8 });
  });
  g += tx(380, 108, '49 < 50 < 64', { taille: 15, gras: true });
  g += tx(380, 132, 'donc 7 < √50 < 8', { taille: 15, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
};

/** √2 : le carré construit sur la diagonale d'un carré d'aire 1 a une aire 2. */
SCH['racine-deux'] = () => {
  const W = 600, H = 300, u = 110, x0 = 50, y0 = 30;
  let g = '';
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) g += `<rect x="${x0 + i * u}" y="${y0 + j * u}" width="${u}" height="${u}" fill="none" stroke="${GRILLE}" stroke-width="1.6"/>`;
  g += `<rect x="${x0}" y="${y0 + u}" width="${u}" height="${u}" fill="${BLEU}" fill-opacity="0.15" stroke="${BLEU}" stroke-width="2.2"/>`;
  const L = [x0 + u, y0], R = [x0 + 2 * u, y0 + u], B = [x0 + u, y0 + 2 * u], G = [x0, y0 + u];
  g += polygone([L, R, B, G], { couleur: ORANGE, fond: ORANGE, opacite: 0.25, epaisseur: 2.6 });
  g += tx(x0 + u / 2 - 18, y0 + 1.5 * u + 30, 'aire 1', { taille: 14, gras: true, couleur: BLEU });
  g += tx(x0 + u, y0 + u - 22, 'aire 2', { taille: 15, gras: true, couleur: ORANGE });
  g += tx(x0 + u / 2, y0 + 2 * u + 20, '1', { taille: 14, gras: true, couleur: BLEU });
  const m = mil(G, B);
  g += tx(m[0] + 22, m[1] + 2, '√2', { taille: 15, gras: true, couleur: ORANGE, ancre: 'start' });
  const xl = 330;
  g += texte(xl, 80, 'Le carré orange est fait de', { taille: 14, ancre: 'start' });
  g += texte(xl, 100, '4 demi-carrés d’aire 1 : aire 2.', { taille: 14, ancre: 'start' });
  g += texte(xl, 140, 'Son côté est donc √2,', { taille: 14, ancre: 'start', gras: true, couleur: ORANGE });
  g += texte(xl, 160, 'la diagonale du carré de côté 1.', { taille: 14, ancre: 'start' });
  g += texte(xl, 200, '√2 ≈ 1,414…', { taille: 14, ancre: 'start', couleur: ATTENUE });
  return enveloppe(W, H, g);
};

/** Arbre de décomposition en facteurs premiers. */
SCH['arbre-facteurs'] = ({ n = 60 } = {}) => {
  const etapes = [];
  let q = n;
  for (const p of [2, 3, 5, 7, 11, 13]) while (q % p === 0 && q > p) { etapes.push([q, p, q / p]); q /= p; }
  const W = 600, H = 70 + etapes.length * 60 + 30;
  let g = '';
  let x = 140, y = 40;
  g += boite(x - 30, y - 18, 60, 34, String(n), { taille: 17, gras: true });
  etapes.forEach(([a, p, b], i) => {
    const yb = y + 60;
    g += ligne(x - 6, y + 16, x - 50, yb - 16, { epaisseur: 1.8 }) + ligne(x + 6, y + 16, x + 50, yb - 16, { epaisseur: 1.8 });
    g += cercle(x - 56, yb, 17, { couleur: ORANGE, fond: ORANGE, opacite: 0.2 }) + texte(x - 56, yb + 6, String(p), { taille: 16, gras: true, couleur: ORANGE });
    const dernier = i === etapes.length - 1;
    if (dernier) g += cercle(x + 56, yb, 17, { couleur: ORANGE, fond: ORANGE, opacite: 0.2 }) + texte(x + 56, yb + 6, String(b), { taille: 16, gras: true, couleur: ORANGE });
    else g += boite(x + 56 - 28, yb - 17, 56, 34, String(b), { taille: 16, gras: true });
    g += texte(x + 100, y + 36, `${a} ÷ ${p} = ${b}`, { taille: 13, couleur: ATTENUE, ancre: 'start' });
    x += 56; y = yb;
  });
  g += texte(430, 60, 'nombres premiers', { taille: 14, couleur: ORANGE, gras: true });
  g += texte(430, 80, 'entourés', { taille: 14, couleur: ORANGE });
  g += texte(W / 2, H - 16, '60 = 2 × 2 × 3 × 5 = 2² × 3 × 5', { taille: 16, gras: true });
  return enveloppe(W, H, g);
};

/** Facteurs premiers communs à 84 et 126. */
SCH['facteurs-communs'] = () => SCH['venn']({
  W: 560, H: 300, omega: '', A: '84 = 2² × 3 × 7', B: '126 = 2 × 3² × 7', seulA: ['2'], inter: ['2', '3', '7'], seulB: ['3'],
  notes: ['facteurs communs : 2 × 3 × 7 = 42', '84 = 42 × 2 et 126 = 42 × 3, donc 84/126 = 2/3'],
});

/** Ensembles de nombres emboîtés N ⊂ Z ⊂ D ⊂ Q. */
SCH['ensembles-nombres'] = () => {
  const W = 620, H = 330;
  let g = '';
  const cadres = [
    [20, 20, 580, 290, 'Q : rationnels', VIOLET, [[470, 120, '1/3'], [470, 210, '−3/4']]],
    [50, 60, 370, 230, 'D : décimaux', VERT, [[350, 140, '−2,5'], [350, 220, '0,75']]],
    [80, 100, 220, 170, 'Z : entiers relatifs', ORANGE, [[245, 190, '−4']]],
    [110, 140, 110, 110, 'N : naturels', BLEU, [[140, 195, '0'], [185, 195, '7'], [162, 230, '2026']]],
  ];
  cadres.forEach(([x, y, w, h, t, c, ex]) => {
    g += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${c}" fill-opacity="0.07" stroke="${c}" stroke-width="2.2"/>`;
    g += texte(x + 14, y + 24, t, { taille: 14, gras: true, couleur: c, ancre: 'start' });
    ex.forEach(([ex_, ey, v]) => { g += frac(ex_, ey, v, { taille: 15, gras: true }); });
  });
  return enveloppe(W, H, g);
};

/** Notation scientifique : la virgule se déplace de n rangs. */
SCH['virgule'] = () => {
  const W = 640, H = 250, c = 30;
  let g = '';
  const ligneChiffres = (y, chiffres, posDep, posArr, titre, res, coul) => {
    const x0 = 150;
    chiffres.forEach((ch, i) => { g += boite(x0 + i * c, y, c - 4, 34, ch, { taille: 17, fond: '#ffffff', bord: GRILLE }); });
    const X = (p) => x0 + p * c - 2;
    g += texte(X(posDep), y + 50, ',', { taille: 24, gras: true, couleur: ATTENUE });
    g += `<circle cx="${nb(X(posArr))}" cy="${y + 40}" r="5" fill="${coul}"/>`;
    const s = posArr < posDep ? -1 : 1;
    for (let p = posDep; p !== posArr; p += s) g += saut(X(p), X(p + s), y - 4, { couleur: coul, h: 10 });
    g += texte(20, y + 22, titre, { taille: 15, gras: true, ancre: 'start' });
    g += texte(W - 20, y + 22, res, { taille: 16, gras: true, ancre: 'end', couleur: coul });
  };
  ligneChiffres(50, ['3', '2', '0', '0', '0'], 5, 1, '32 000', '= 3,2 × 10⁴', BLEU);
  g += texte(300, 128, 'la virgule recule de 4 rangs → exposant 4', { taille: 13, couleur: BLEU });
  ligneChiffres(160, ['0', '0', '0', '0', '5', '8'], 1, 5, '0,00058', '= 5,8 × 10⁻⁴', ORANGE);
  g += texte(300, 238, 'la virgule avance de 4 rangs → exposant −4', { taille: 13, couleur: ORANGE });
  return enveloppe(W, H, g);
};

/** Préfixes des unités : de nano (10⁻⁹) à giga (10⁹). */
SCH['prefixes'] = () => {
  const W = 660, H = 190, x0 = 50, x1 = 610;
  const pts = [[-9, 'nano (n)', '10⁻⁹'], [-6, 'micro (µ)', '10⁻⁶'], [-3, 'milli (m)', '10⁻³'], [0, 'unité', '10⁰ = 1'], [3, 'kilo (k)', '10³'], [6, 'méga (M)', '10⁶'], [9, 'giga (G)', '10⁹']];
  const X = (e) => x0 + ((e + 9) / 18) * (x1 - x0);
  let g = fleche(x0 - 20, 90, x1 + 30, 90, { couleur: ENCRE, epaisseur: 2.2 });
  for (let e = -9; e <= 9; e++) g += ligne(X(e), 86, X(e), 94, { couleur: ATTENUE, epaisseur: 1 });
  pts.forEach(([e, t, p]) => {
    g += ligne(X(e), 80, X(e), 100, { epaisseur: 2.2 }) + `<circle cx="${nb(X(e))}" cy="90" r="5" fill="${e === 0 ? ENCRE : e < 0 ? BLEU : ORANGE}"/>`;
    g += texte(X(e), 66, p, { taille: 15, gras: true, couleur: e === 0 ? ENCRE : e < 0 ? BLEU : ORANGE });
    g += texte(X(e), 122, t, { taille: 13 });
  });
  g += texte(W / 2, 166, 'D’un préfixe au suivant : × 1 000 = × 10³', { taille: 14, couleur: ATTENUE });
  return enveloppe(W, H, g);
};

export const SCHEMAS = SCH;

// ---------------------------------------------------------------------------
// Poses dans les fiches
// ---------------------------------------------------------------------------
const f6 = (s) => 'sixieme/maths/' + s, f5 = (s) => 'cinquieme/maths/' + s, f4 = (s) => 'quatrieme/maths/' + s, f3 = (s) => 'troisieme/maths/' + s;

const POSES_A = [
  // ======================= 6e =======================
  { fiche: f6('configurations-planes'), cle: 'cercle-vocabulaire', schema: 'cercle-vocab', apres: '## 3. Cercles et disques',
    legende: 'Le centre O, le rayon OA, le diamètre BC et la corde DE : le cercle est le contour, le disque ajoute l’intérieur.' },
  { fiche: f6('configurations-planes'), cle: 'mediatrice', schema: 'mediatrice', apres: '## 4. La médiatrice d’un segment',
    legende: 'La médiatrice du segment AB lui est perpendiculaire en son milieu I ; tout point M de cette droite vérifie MA = MB. Les arcs de compas montrent la construction.' },
  { fiche: f6('configurations-planes'), cle: 'types-angles', schema: 'types-angles', apres: '## 5. Les angles',
    legende: 'Un angle aigu, un angle droit (codé par un petit carré), un angle obtus et un angle plat.' },

  { fiche: f6('durees'), cle: 'fractions-heure', schema: 'horloges-fractions', apres: '## 3. Les fractions d’heure à connaître',
    legende: 'Sur le cadran, un quart d’heure vaut 15 minutes, une demi-heure 30 minutes et trois quarts d’heure 45 minutes.' },
  { fiche: f6('durees'), cle: 'duree-paliers', schema: 'ligne-duree', params: { horaires: [[9, 15], [10, 0], [10, 5]] }, apres: '## 5. Méthode : calculer une durée entre deux horaires',
    legende: 'De 9 h 15 à 10 h 05 par paliers : 45 minutes jusqu’à 10 h 00, puis 5 minutes, soit 50 minutes en tout.' },

  { fiche: f6('fractions'), cle: 'trois-cinquiemes', schema: 'bandes', apres: '## 1. Ce qu’est une fraction',
    params: { lignes: [{ den: 5, parts: [{ n: 3, couleur: BLEU }], label: '3/5', droite: '3 parts sur 5' }] },
    legende: 'Pour 3/5, on partage l’unité en 5 parts égales (le dénominateur) et on en prend 3 (le numérateur).' },
  { fiche: f6('fractions'), cle: 'sept-quarts', schema: 'droite', apres: '## 3. Repérer une fraction sur une demi-droite graduée',
    params: { min: 0, max: 2, sub: 4, demi: true, H: 150, points: [{ v: 1.75, t: '7/4', couleur: ROUGE, haut: 34 }], accolades: [{ de: 0, a: 1, t: '4 quarts = 1', bas: true, couleur: VERT }] },
    legende: 'Chaque unité est partagée en quarts : 7/4 se trouve à la septième graduation, trois crans après 1.' },
  { fiche: f6('fractions'), cle: 'fractions-egales', schema: 'bandes', apres: '## 6. Premières fractions égales',
    params: { lignes: [2, 4, 6, 10].map((d) => ({ den: d, parts: [{ n: d / 2, couleur: VERT }], label: `${d / 2}/${d}` })), ecart: 12 },
    legende: 'Les bandes coloriées ont la même longueur : 1/2 = 2/4 = 3/6 = 5/10.' },

  { fiche: f6('gestion-donnees'), cle: 'barres-sports', schema: 'diagramme-barres', apres: '### Le diagramme en barres',
    params: { cats: ['Football', 'Natation', 'Basket', 'Danse'], vals: [12, 8, 6, 4], ymax: 14, pas: 2, titreY: 'nombre d’élèves', valeurs: true, titre: 'Sport préféré de 30 élèves' },
    legende: 'Diagramme en barres du sport préféré de 30 élèves : la barre du football est la plus haute, celle de la danse la plus basse.' },
  { fiche: f6('gestion-donnees'), cle: 'circulaire-sports', schema: 'camembert', apres: '### Le diagramme circulaire',
    params: { parts: [{ t: 'Football (12)', v: 12 }, { t: 'Natation (8)', v: 8 }, { t: 'Basket (6)', v: 6 }, { t: 'Danse (4)', v: 4 }] },
    legende: 'Les mêmes données en diagramme circulaire : le disque entier représente les 30 élèves, le football occupe un peu moins de la moitié.' },
  { fiche: f6('gestion-donnees'), cle: 'courbe-temperature', schema: 'courbe-donnees', apres: '### La courbe',
    params: { xs: [6, 8, 10, 12, 14, 16, 18, 20], ys: [12, 14, 18, 21, 23, 23, 20, 17], xmin: 6, xmax: 20, ymin: 10, ymax: 25, pasX: 1, etiqX: 2, pasY: 1, etiqY: 5, titreX: 'heure (h)', titreY: 'température (°C)',
      annot: [{ x: 8.6, y: 18.2, t: 'monte' }, { x: 15, y: 24.2, t: 'plate' }, { x: 19.4, y: 20.2, t: 'descend' }] },
    legende: 'Exemple de courbe : la température d’une journée monte le matin, reste stable en début d’après-midi, puis descend le soir.' },

  { fiche: f6('initiation-algebre'), cle: 'motif-allumettes', schema: 'allumettes', apres: '### Un motif évolutif',
    legende: 'Le motif d’allumettes : 4, puis 7, puis 10 allumettes ; on ajoute 3 à chaque étape et le nombre vaut 3 × étape + 1.' },
  { fiche: f6('initiation-algebre'), cle: 'barres-billes', schema: 'barres-parts', apres: '### Stratégie 2 — Résoudre avec un schéma en barres',
    params: { lignes: [{ nom: 'Tom', n: 1, couleur: BLEU, parts: '12', valeur: '12 billes' }, { nom: 'Léa', n: 3, couleur: ORANGE, parts: '12', valeur: '36 billes' }], total: { t: '48 billes\n= 4 parts', dx: 120 }, notes: ['une part : 48 ÷ 4 = 12'] },
    legende: 'Schéma en barres : Tom a 1 part, Léa en a 3 ; les 4 parts font 48 billes, donc une part vaut 12.' },
  { fiche: f6('initiation-algebre'), cle: 'remonter', schema: 'chaine', apres: '### Stratégie 3 — Retrouver un nombre inconnu «&nbsp;en remontant&nbsp;»',
    params: { lignes: [{ titre: 'aller', valeurs: ['?', '?', '17'], ops: ['× 2', '+ 3'], couleur: BLEU }, { titre: 'retour', valeurs: ['7', '14', '17'], ops: ['÷ 2', '− 3'], sens: -1, couleur: ORANGE }] },
    legende: 'Pour remonter, on part de 17 et on fait les opérations inverses dans l’ordre inverse : 17 − 3 = 14, puis 14 ÷ 2 = 7.' },

  { fiche: f6('longueurs-aires-volumes'), cle: 'perimetre-disque', schema: 'perimetre-disque', apres: '### Le périmètre du disque (ou du cercle)',
    legende: 'Déroulé, le tour d’un disque mesure π × D : un peu plus de trois fois son diamètre.' },
  { fiche: f6('longueurs-aires-volumes'), cle: 'dm2-cm2', schema: 'carre-quadrille', apres: '### Les unités d’aire',
    legende: 'Un carré de 1 dm de côté contient 10 × 10 = 100 carrés de 1 cm de côté : 1 dm² = 100 cm².' },
  { fiche: f6('longueurs-aires-volumes'), cle: 'compter-cubes', schema: 'empilement', apres: '### Déterminer un volume',
    params: { nx: 4, ny: 2, nz: 3, legX: '4 cubes', legY: '2', legZ: '3', notes: ['4 × 3 × 2 = 24 cubes, soit 24 cm³'] },
    legende: 'Un empilement de 4 cubes de large, 3 de profondeur et 2 de haut contient 24 cubes d’un centimètre cube.' },

  { fiche: f6('nombres-entiers-decimaux'), cle: 'demi-droite-dixiemes', schema: 'droite', apres: '## 7. La demi-droite graduée',
    params: { min: 2, max: 3, sub: 10, pas: 1, H: 150, points: [{ v: 2.4, t: '2,4', couleur: ROUGE }], sauts: [{ de: 2, a: 2.1, t: '0,1', couleur: ORANGE, h: 12 }] },
    legende: 'Entre 2 et 3, l’unité est partagée en 10 : chaque petit pas vaut 0,1 et le point rouge, au quatrième pas après 2, a pour abscisse 2,4.' },
  { fiche: f6('nombres-entiers-decimaux'), cle: 'zoom-encadrement', schema: 'zoom-encadrement', apres: '## 9. Encadrer et intercaler',
    legende: 'Un zoom sur la droite graduée : 3,74 est entre 3 et 4, et plus précisément entre 3,7 et 3,8.' },

  { fiche: f6('pensee-informatique'), cle: 'ordre-instructions', schema: 'chaine', apres: '### 2.1 La séquence : l’ordre compte',
    params: { lignes: [{ titre: 'Programme A', valeurs: ['3', '5', '25'], ops: ['+ 2', '× 5'], couleur: BLEU }, { titre: 'Programme B', valeurs: ['3', '15', '17'], ops: ['× 5', '+ 2'], couleur: ORANGE }] },
    legende: 'Les mêmes instructions dans un ordre différent : le programme A affiche 25, le programme B affiche 17.' },
  { fiche: f6('pensee-informatique'), cle: 'chemin-robot', schema: 'robot-chemin', apres: '### 2.4 Programmer un chemin',
    legende: 'Sur le quadrillage, le robot part vers le haut, avance de 3 cases, tourne à droite puis avance de 2 cases pour atteindre le trésor.' },

  { fiche: f6('probabilites'), cle: 'echelle', schema: 'echelle-proba', apres: '## 3. L’échelle des probabilités',
    legende: 'L’échelle des probabilités va de 0 (impossible) à 1 (certain) ; 0,5 correspond à une chance sur deux.' },
  { fiche: f6('probabilites'), cle: 'sac-boules', schema: 'urne', apres: '## 5. Écrire la probabilité comme un nombre',
    legende: 'Le sac contient 10 boules dont 3 vertes : tirer une verte a 3 chances sur 10, soit une probabilité de 0,3.' },

  { fiche: f6('proportionnalite'), cle: 'tableau-fleches', schema: 'tableau-prop', apres: '## 5. Représenter une situation : le tableau et les flèches',
    params: { noms: ['Nombre de personnes', 'Farine (g)'], cols: [['4', '300'], ['8', '600'], ['6', '450'], ['1', '75']], fleches: [{ de: 0, a: 1, t: '× 2' }], coef: '× 75' },
    legende: 'Dans le tableau, on passe de 4 à 8 personnes en multipliant par 2, et de la première ligne à la seconde en multipliant toujours par 75.' },

  // ======================= 5e =======================
  { fiche: f5('calcul-litteral'), cle: 'distributivite-aire', schema: 'rectangle-aires', apres: '## 4. Développer',
    params: { larges: [{ t: 'x', w: 170 }, { t: '4', w: 110 }], hauts: [{ t: '3', w: 100 }], cellules: [['3x', '12']], titre: '3(x + 4) = 3x + 12' },
    legende: 'L’aire du grand rectangle, 3 × (x + 4), est la somme des aires des deux petits : 3x et 12.' },

  { fiche: f5('fonctions'), cle: 'lire-graphique', schema: 'lecture-temperature', apres: '## 6. Lire et interpréter un graphique',
    legende: 'On lit 16 °C à 10 h, 24 °C à 14 h et 18 °C à 18 h : la température augmente jusqu’à son maximum, puis diminue.' },
  { fiche: f5('fonctions'), cle: 'trois-cas', schema: 'trois-cas-prop', apres: '## 7. Caractériser graphiquement la proportionnalité',
    legende: 'Seuls les points alignés sur une droite passant par l’origine traduisent la proportionnalité : P = 4 × c oui, P = 5 + 2 × n et A = c × c non.' },

  { fiche: f5('fractions'), cle: 'fractions-egales', schema: 'bandes', apres: '## 2. Fractions égales',
    params: { lignes: [[2, 3], [4, 6], [6, 9]].map(([n, d]) => ({ den: d, parts: [{ n, couleur: VERT }], label: `${n}/${d}` })), ecart: 12 },
    legende: 'Les parties coloriées ont la même longueur : 2/3 = 4/6 = 6/9.' },
  { fiche: f5('fractions'), cle: 'meme-numerateur', schema: 'bandes', apres: '## 3. Comparer des fractions',
    params: { lignes: [{ den: 5, parts: [{ n: 3, couleur: BLEU }], label: '3/5' }, { den: 8, parts: [{ n: 3, couleur: ORANGE }], label: '3/8' }], notes: ['même numérateur : les parts de 1/8 sont plus petites'] },
    legende: 'Trois cinquièmes dépassent trois huitièmes : plus on partage en parts nombreuses, plus chaque part est petite.' },
  { fiche: f5('fractions'), cle: 'addition', schema: 'bandes', apres: '### Dénominateurs différents',
    params: { lignes: [
      { den: 3, parts: [{ n: 1, couleur: BLEU }], label: '1/3', droite: '= 4/12' },
      { den: 4, parts: [{ n: 1, couleur: ORANGE }], label: '1/4', droite: '= 3/12' },
      { den: 12, parts: [{ n: 4, couleur: BLEU }, { n: 3, couleur: ORANGE }], label: '7/12', droite: '= 4/12 + 3/12' }] },
    legende: 'En douzièmes, 1/3 devient 4/12 et 1/4 devient 3/12 : leur somme vaut 7/12.' },

  { fiche: f5('nombres-relatifs'), cle: 'opposes', schema: 'droite', apres: '## 3. Opposé et valeur absolue',
    params: { min: -6, max: 6, H: 160, points: [{ v: -5, t: '−5', couleur: ROUGE }, { v: 5, t: '+5', couleur: BLEU }], accolades: [{ de: -5, a: 0, t: 'distance 5', bas: true, couleur: ROUGE }, { de: 0, a: 5, t: 'distance 5', bas: true, couleur: BLEU }] },
    legende: '−5 et +5 sont opposés : ils sont à la même distance de 0, de part et d’autre. Leur valeur absolue vaut 5.' },
  { fiche: f5('nombres-relatifs'), cle: 'addition-deplacements', schema: 'droite', apres: '### Signes contraires',
    params: { min: -6, max: 4, H: 170, points: [{ v: -4, t: '−4', couleur: VERT, bas: true }], sauts: [{ de: 0, a: 2, t: '+2', couleur: BLEU }, { de: 2, a: -4, t: '−6', couleur: ROUGE, h: 58 }] },
    legende: 'Pour (+2) + (−6), on avance de 2 depuis 0, puis on recule de 6 : on arrive à −4.' },

  { fiche: f5('operations'), cle: 'division-euclidienne', schema: 'division-euclidienne', apres: '## 3. Division euclidienne',
    legende: 'En partageant 17 en paquets de 5, on fait 3 paquets et il reste 2 : 17 = 5 × 3 + 2, avec un reste plus petit que le diviseur.' },

  { fiche: f5('parallelogrammes'), cle: 'proprietes', schema: 'parallelogramme', apres: '## 3. Les propriétés',
    legende: 'Dans le parallélogramme ABCD, les côtés opposés sont parallèles et de même longueur, et les diagonales se coupent en leur milieu O.' },
  { fiche: f5('parallelogrammes'), cle: 'particuliers', schema: 'quadrilateres-particuliers', apres: '## 6. Les parallélogrammes particuliers',
    legende: 'Les diagonales du rectangle ont la même longueur, celles du losange sont perpendiculaires, celles du carré ont les deux propriétés.' },
  { fiche: f5('parallelogrammes'), cle: 'aire', schema: 'aire-parallelogramme', apres: '## 7. Aires',
    legende: 'Parallélogramme de base 8 cm et de hauteur 5 cm, à l’échelle : son aire vaut 40 cm², le côté oblique de 6 cm n’intervient pas.' },

  { fiche: f5('pensee-informatique'), cle: 'ordre-instructions', schema: 'chaine', apres: '### 2.1 La séquence — l’ordre change tout',
    params: { lignes: [{ titre: 'Programme A', valeurs: ['3', '5', '25'], ops: ['+ 2', '× 5'], couleur: BLEU }, { titre: 'Programme B', valeurs: ['3', '15', '17'], ops: ['× 5', '+ 2'], couleur: ORANGE }] },
    legende: 'Les mêmes instructions dans un ordre différent : le programme A affiche 25, le programme B affiche 17.' },
  { fiche: f5('pensee-informatique'), cle: 'robot-polygones', schema: 'robot-polygones', apres: '### Méthode 4 — Analyser un programme et modifier ses paramètres',
    legende: 'Pour revenir à son point de départ, le robot fait un tour complet : 4 virages de 90° pour le carré, 3 virages de 120° pour le triangle équilatéral.' },

  { fiche: f5('probabilites'), cle: 'echelle', schema: 'echelle-proba', apres: '## 2. L’échelle des probabilités',
    params: { exemples: [[0, 'impossible'], [0.1, 'peu probable'], [0.5, 'aussi probable\nque son contraire'], [0.9, 'très probable'], [1, 'certain']] },
    legende: 'L’échelle des probabilités va de 0 (impossible) à 1 (certain) ; 0,5 correspond à un événement aussi probable que son contraire.' },
  { fiche: f5('probabilites'), cle: 'frequences-60', schema: 'frequences', apres: '## 6. Répéter l’expérience : fréquence et probabilité',
    params: { effectifs: [8, 12, 9, 11, 7, 13], total: 60, titre: 'Fréquences observées sur 60 lancers' },
    legende: 'Sur 60 lancers, les fréquences observées s’écartent un peu de la probabilité théorique 1/6 ≈ 0,17 (ligne rouge) : c’est normal.' },

  { fiche: f5('proportionnalite'), cle: 'coefficient', schema: 'tableau-prop', apres: '## 2. Le coefficient de proportionnalité',
    params: { noms: ['Masse (kg)', 'Prix (€)'], cols: [['2', '6'], ['4', '12'], ['5', '15'], ['7', '21']], fleches: [{ de: 0, a: 1, t: '× 2' }], coef: '× 3', nw: 130 },
    legende: 'On passe de la masse au prix en multipliant toujours par 3 : c’est le coefficient de proportionnalité.' },
  { fiche: f5('proportionnalite'), cle: 'produit-croix', schema: 'produit-croix', apres: '## 4. Le produit en croix',
    legende: 'Dans le tableau de proportionnalité, les produits en croix sont égaux : 3 × x = 7 × 4,50, donc x = 10,50 €.' },

  { fiche: f5('puissances'), cle: 'pourquoi-carre', schema: 'carre-quadrille', apres: '### Pourquoi « carré » ?',
    params: { n: 5, c: 36, cote: '5 cm', aire: '5² = 5 × 5 = 25 cm²', unite: '1 cm²', W: 480 },
    legende: 'Un carré de 5 cm de côté contient 5 × 5 = 25 carrés de 1 cm de côté : son aire vaut 5² = 25 cm².' },
  { fiche: f5('puissances'), cle: 'pourquoi-cube', schema: 'empilement', apres: '### Pourquoi « cube » ?',
    params: { nx: 2, ny: 2, nz: 2, c: 60, W: 460, H: 260, legX: '2', legY: '2', legZ: '2', notes: ['2³ = 2 × 2 × 2 = 8 petits cubes'] },
    legende: 'Un cube de 2 unités d’arête est formé de 2 × 2 × 2 = 8 petits cubes : son volume vaut 2³ = 8.' },

  { fiche: f5('reperage'), cle: 'distance', schema: 'droite', apres: '## 4. Écart entre deux points d’une droite graduée',
    params: { min: -4, max: 5, H: 170, points: [{ v: -3, t: 'A', couleur: ROUGE }, { v: 4, t: 'B', couleur: BLEU }], accolades: [{ de: -3, a: 0, t: '3', bas: true, couleur: ORANGE }, { de: 0, a: 4, t: '4', bas: true, couleur: ORANGE }], titre: 'A(−3) et B(4) : AB = 3 + 4 = 7 unités' },
    legende: 'De A(−3) à 0, il y a 3 unités, et de 0 à B(4), il y en a 4 : la distance AB vaut 7 unités.' },
  { fiche: f5('reperage'), cle: 'ordre-coordonnees', schema: 'repere-points', apres: '## 8. Cas particuliers et pièges de lecture',
    params: { xmin: -1, xmax: 4, ymin: -1, ymax: 4, W: 420, H: 400, points: [{ x: 3, y: 2, nom: 'A', couleur: BLEU, chemin: true, dx: 52, dy: 5 }, { x: 2, y: 3, nom: 'B', couleur: ORANGE, chemin: true, dy: -12 }], notes: ['l’abscisse d’abord, l’ordonnée ensuite'] },
    legende: 'A(3 ; 2) et B(2 ; 3) ne sont pas le même point : on avance d’abord horizontalement, puis on monte.' },

  { fiche: f5('representation-espace'), cle: 'quatre-solides', schema: 'solides-5e', apres: '## 1. Les quatre solides du programme',
    legende: 'Les quatre solides de 5e en perspective cavalière : cube, pavé droit, prisme droit à base triangulaire et cylindre de révolution.' },
  { fiche: f5('representation-espace'), cle: 'cavaliere', schema: 'cavaliere-cube', apres: '## 2. La perspective cavalière',
    legende: 'Cube d’arête 4 cm en perspective cavalière : face avant en vraie grandeur, fuyantes à 45° réduites à 2 cm, arêtes cachées en pointillés.' },
  { fiche: f5('representation-espace'), cle: 'patrons', schema: 'patrons-5e', apres: '## 4. Patrons',
    legende: 'Un patron de cube (une ceinture de 4 carrés, un au-dessus, un au-dessous) et le patron d’un cylindre de rayon 5 cm et de hauteur 12 cm, à l’échelle.' },

  { fiche: f5('statistiques'), cle: 'barres-notes', schema: 'diagramme-barres', apres: '## 4. Représenter les données',
    params: { cats: ['8', '10', '12', '15'], vals: [4, 5, 7, 4], ymax: 8, pas: 1, titreY: 'effectif', titreX: 'note', valeurs: true, titre: 'Notes de 20 élèves' },
    legende: 'Diagramme en barres des notes des 20 élèves : la note 12 est la plus fréquente, avec 7 élèves.' },
  { fiche: f5('statistiques'), cle: 'circulaire-notes', schema: 'camembert', apres: '### Calculer les angles d’un diagramme circulaire',
    params: { parts: [{ t: 'note 8', v: 4 }, { t: 'note 10', v: 5 }, { t: 'note 12', v: 7 }, { t: 'note 15', v: 4 }], angles: true },
    legende: 'Diagramme circulaire des notes : les angles 72°, 90°, 126° et 72° sont proportionnels aux effectifs et totalisent 360°.' },
  { fiche: f5('statistiques'), cle: 'axe-tronque', schema: 'axe-tronque', apres: '## 6. Lire un graphique',
    legende: 'Mêmes données, deux graphiques : avec un axe qui part de 80, une hausse de 2 points semble énorme.' },

  { fiche: f5('transformations'), cle: 'symetrie-axiale', schema: 'symetrie-axiale', apres: '## 1. Rappel : la symétrie axiale',
    legende: 'Avec un axe oblique (d) : M′ est le symétrique de M car (d) coupe le segment MM′ perpendiculairement en son milieu H ; le triangle A′B′C′ est l’image de ABC.' },
  { fiche: f5('transformations'), cle: 'demi-tour', schema: 'demi-tour', apres: '## 2. Le demi-tour, ou symétrie centrale',
    legende: 'Par le demi-tour de centre O, M a pour image M′, O étant le milieu du segment MM′ ; le triangle ABC est tourné de 180° autour de O.' },
  { fiche: f5('transformations'), cle: 'retournee-ou-tournee', schema: 'comparaison-transfos', apres: '## 6. Tableau récapitulatif',
    params: { types: ['axiale', 'centrale'] },
    legende: 'La symétrie axiale retourne le drapeau comme un miroir ; le demi-tour le fait tourner de 180° sans le retourner.' },

  { fiche: f5('triangles-angles'), cle: 'opposes-sommet', schema: 'angles-opposes', apres: '## 2. Angles opposés par le sommet',
    legende: 'Deux droites sécantes forment quatre angles : les angles 1 et 3, opposés par le sommet, sont égaux, de même que les angles 2 et 4.' },
  { fiche: f5('triangles-angles'), cle: 'alternes-correspondants', schema: 'paralleles-secante', apres: '## 3. Droites parallèles et angles',
    legende: 'Deux parallèles coupées par une sécante : a et b sont alternes-internes, c et b sont correspondants ; ces angles sont égaux.' },
  { fiche: f5('triangles-angles'), cle: 'somme-180', schema: 'somme-angles', apres: '## 4. Somme des angles d’un triangle',
    legende: 'La parallèle à (AB) passant par C fait apparaître les trois angles du triangle côte à côte : ensemble, ils forment un angle plat de 180°.' },
];

const POSES_B = [
  // ======================= 4e =======================
  { fiche: f4('calcul-litteral'), cle: 'consecutifs', schema: 'consecutifs', apres: '## 5. Démontrer avec le calcul algébrique',
    legende: 'En déplaçant une unité de la troisième barre vers la première, n, n + 1 et n + 2 deviennent trois barres égales à n + 1 : la somme vaut 3(n + 1).' },
  { fiche: f4('calcul-litteral'), cle: 'balance', schema: 'balance', apres: '## 6. Résoudre une équation du premier degré $ax + b = c$',
    legende: 'L’équation 5x + 3 = 23 vue comme une balance : on enlève 3 de chaque côté, puis on divise les deux côtés par 5, et l’on trouve x = 4.' },

  { fiche: f4('fonctions'), cle: 'aller-retour', schema: 'chaine', apres: '## 5. Remonter un programme de calcul',
    params: { lignes: [{ titre: 'aller', valeurs: ['5', '15', '19'], ops: ['× 3', '+ 4'], couleur: BLEU }, { titre: 'retour', valeurs: ['5', '15', '19'], ops: ['÷ 3', '− 4'], sens: -1, couleur: ORANGE }] },
    legende: 'Le programme A fait × 3 puis + 4 ; pour le remonter depuis 19, on fait − 4 puis ÷ 3 et l’on retrouve 5.' },
  { fiche: f4('fonctions'), cle: 'nuage-ou-courbe', schema: 'nuage-ou-courbe', apres: '## 7. Représenter la dépendance par un graphique',
    legende: 'À gauche, le prix de la piscine : des points isolés qu’on ne relie pas. À droite, l’aire du carré : une courbe qui monte de plus en plus vite.' },

  { fiche: f4('nombres-rationnels'), cle: 'fraction-de-fraction', schema: 'fraction-de-fraction', apres: '## 6. La fraction d’une fraction, d’un nombre, d’une quantité',
    legende: 'On colorie 3 colonnes sur 4, puis on garde 2 lignes sur 3 de cette partie : il reste 6 cases sur 12, donc 2/3 de 3/4 = 1/2.' },

  { fiche: f4('operations-nombres-relatifs'), cle: 'addition-repetee', schema: 'droite', apres: '## 2. Multiplier quand un seul facteur est négatif',
    params: { min: -13, max: 1, H: 170, y: 116, points: [{ v: -12, t: '−12', couleur: ROUGE, bas: true }], sauts: [0, 1, 2, 3].map((k) => ({ de: -3 * k, a: -3 * (k + 1), t: '−3', couleur: ORANGE })), titre: '(−3) × 4 = (−3) + (−3) + (−3) + (−3) = −12' },
    legende: 'Ajouter quatre fois −3 en partant de 0, c’est reculer quatre fois de 3 : on arrive à −12.' },

  { fiche: f4('parallelogrammes-translations'), cle: 'abdc', schema: 'parallelogramme-translation', apres: '## 2. Le lien avec le parallélogramme',
    params: { noms: ['A', 'B', 'D', 'C'], fleches: [[0, 1], [3, 2]], notes: ['On parcourt le contour A → B → D → C : c’est ABDC.'] },
    legende: 'La translation qui envoie A sur B envoie C sur D : les flèches ont même direction, même sens et même longueur, et ABDC est un parallélogramme.' },
  { fiche: f4('parallelogrammes-translations'), cle: 'translation-ou-demi-tour', schema: 'comparaison-transfos', apres: '### Translation ou demi-tour ?',
    params: { types: ['translation', 'centrale'], segments: true },
    legende: 'Le test des segments MM′ en pointillés : parallèles et de même longueur pour une translation, tous concourants au centre O pour un demi-tour.' },

  { fiche: f4('pensee-informatique'), cle: 'si-sinon', schema: 'organigramme-si', apres: '### 2.3 Écrire une instruction conditionnelle',
    legende: 'Organigramme du programme : si n ≥ 0 est vrai, on affiche n ; sinon, on affiche 0 − n. Le programme affiche ainsi la distance à zéro.' },

  { fiche: f4('probabilites'), cle: 'ensembles', schema: 'venn', apres: '## 2. Les quatre mots à connaître',
    params: { A: 'A : pair', B: 'B : au moins 5', seulA: ['2', '4'], inter: ['6'], seulB: ['5'], dehors: ['1', '3'], notes: ['A ∩ B = {6}   ;   A ∪ B = {2 ; 4 ; 5 ; 6}'] },
    legende: 'Lancer d’un dé : l’issue 6 est dans A et dans B (intersection) ; la réunion regroupe 2, 4, 5 et 6 ; 1 et 3 ne sont ni dans A ni dans B.' },
  { fiche: f4('probabilites'), cle: 'deux-pieces', schema: 'arbre', apres: '### La méthode : lister toutes les issues',
    params: { surligne: ['P ; F', 'F ; P'], notes: ['exactement un pile : 2 issues sur 4'] },
    legende: 'Avec deux pièces, l’arbre donne quatre couples équiprobables ; « exactement un pile » se réalise de deux façons, d’où la probabilité 2/4 = 1/2.' },
  { fiche: f4('probabilites'), cle: 'frequences-120', schema: 'frequences', apres: '### Comparer les deux distributions',
    params: { effectifs: [18, 23, 17, 21, 19, 22], total: 120, titre: 'Fréquences observées sur 120 lancers' },
    legende: 'Distribution des fréquences observées sur 120 lancers, en dents de scie, comparée à la probabilité 1/6 de chaque face (ligne rouge).' },

  { fiche: f4('proportionnalite'), cle: 'ratio', schema: 'barres-parts', apres: '### Le ratio',
    params: { lignes: [{ nom: 'Salle 1', n: 2, couleur: BLEU, parts: '6', valeur: '12 élèves' }, { nom: 'Salle 2', n: 3, couleur: ORANGE, parts: '6', valeur: '18 élèves' }], notes: ['ratio 12 : 18 = 2 : 3 (parts de 6 élèves)'] },
    legende: 'Avec des parts de 6 élèves, la première salle en compte 2 et la seconde 3 : le ratio 12 : 18 se réduit en 2 : 3.' },
  { fiche: f4('proportionnalite'), cle: 'coefficient-retour', schema: 'chaine', apres: '### Le lire à l’envers, et revenir en arrière',
    params: { lignes: [{ titre: 'remise de 30 %', valeurs: ['80 €', '56 €'], ops: ['× 0,70'], couleur: BLEU }, { titre: 'retour', valeurs: ['80 €', '56 €'], ops: ['÷ 0,70'], sens: -1, couleur: ORANGE }], x0: 200, gap: 140, bw: 86 },
    legende: 'Une remise de 30 % revient à multiplier par 0,70 ; pour retrouver le prix de départ, on divise par 0,70 : 56 ÷ 0,70 = 80 €.' },
  { fiche: f4('proportionnalite'), cle: 'partage', schema: 'barres-parts', apres: '## 8. Le partage proportionnel',
    params: { lignes: [{ nom: 'Léa', n: 3, couleur: BLEU, parts: '12 €', valeur: '36 €' }, { nom: 'Sami', n: 4, couleur: ORANGE, parts: '12 €', valeur: '48 €' }], unite: 56, total: { t: '84 €\n= 7 parts', dx: 80 }, notes: ['une part : 84 ÷ 7 = 12 €'] },
    legende: 'Partage de 84 € proportionnellement à 3 et 4 : 7 parts de 12 €, soit 36 € pour Léa et 48 € pour Sami.' },

  { fiche: f4('puissances'), cle: 'meme-base', schema: 'facteurs-meme-base', apres: '## 3. Multiplier deux puissances d’un même nombre',
    legende: 'Dans 2³ × 2⁴, on compte 3 + 4 = 7 facteurs égaux à 2 : le produit vaut 2⁷.' },
  { fiche: f4('puissances'), cle: 'meme-exposant', schema: 'facteurs-meme-exposant', apres: '## 4. Multiplier deux puissances de même exposant',
    legende: 'Dans 2³ × 5³, chaque 2 s’apparie à un 5 : on obtient 3 paquets égaux à 10, donc 10³ = 1 000.' },

  { fiche: f4('racine-carree'), cle: 'encadrement', schema: 'encadrement-racine', apres: '## 4. Méthode — encadrer $\\sqrt{n}$ par deux entiers consécutifs',
    legende: '50 est entre les carrés parfaits 49 et 64 ; en prenant les racines, √50 est entre 7 et 8.' },
  { fiche: f4('racine-carree'), cle: 'cote-carre', schema: 'carre-quadrille', apres: '## 5. À quoi ça sert — le côté d’un carré',
    params: { n: 9, c: 24, cote: 'côté = √81 = 9 cm', aire: 'Aire = 81 cm²', unite: '1 cm²', W: 500 },
    legende: 'Un carré d’aire 81 cm² contient 9 × 9 carrés de 1 cm² : son côté mesure √81 = 9 cm.' },
  { fiche: f4('racine-carree'), cle: 'racine-de-deux', schema: 'racine-deux', apres: '## 6. Pour aller plus loin — un nombre qui n’est pas décimal',
    legende: 'Le carré orange, fait de quatre demi-carrés d’aire 1, a une aire de 2 : son côté, la diagonale du carré de côté 1, mesure √2.' },

  { fiche: f4('reperage'), cle: 'droite-relatifs', schema: 'droite', apres: '### Le réflexe en trois temps',
    params: { min: -4, max: -1, sub: 5, H: 170, points: [{ v: -2.6, t: '−2,6', couleur: ROUGE, haut: 44 }], sauts: [{ de: -3, a: -2.8, t: '', couleur: ORANGE, h: 12 }, { de: -2.8, a: -2.6, t: '', couleur: ORANGE, h: 12 }], notes: ['1 graduation = 1 ÷ 5 = 0,2 ; deux graduations à droite de −3 : −3 + 0,4 = −2,6'] },
    legende: 'Entre −3 et −2, l’unité est partagée en 5 : une graduation vaut 0,2, et deux graduations à droite de −3 mènent à −2,6.' },
  { fiche: f4('reperage'), cle: 'placer-points', schema: 'repere-points', apres: '### Placer un point',
    params: { xmin: -5, xmax: 5, ymin: -5, ymax: 5, W: 460, H: 430, quadrants: true, points: [{ x: -4, y: 3, nom: 'M', couleur: BLEU, chemin: true }, { x: 3, y: -4, nom: 'N', couleur: ORANGE, chemin: true, dx: -64, dy: 5 }] },
    legende: 'M(−4 ; 3) : 4 vers la gauche puis 3 vers le haut ; N(3 ; −4) : 3 vers la droite puis 4 vers le bas. La position donne les signes des coordonnées.' },
  { fiche: f4('reperage'), cle: 'congelateur', schema: 'courbe-donnees', apres: '## 5. À quoi ça sert en 4e : représenter une grandeur en fonction d’une autre',
    params: { xs: [0, 1, 2, 3], ys: [-18, -14, -10, -6], xmin: 0, xmax: 4, ymin: -20, ymax: 0, pasX: 1, pasY: 2, titreX: 't (h)', titreY: 'T (°C)', W: 520, H: 380 },
    legende: 'La température du congélateur : l’axe vertical, gradué de 2 en 2, descend jusqu’à −20 °C ; les points sont sous l’axe horizontal.' },

  { fiche: f4('representation-espace'), cle: 'pyramide-cavaliere', schema: 'pyramide-cavaliere', apres: '### Pyramide à base carrée — pas à pas',
    legende: 'Pyramide régulière à base carrée de 6 cm de côté et de hauteur 10 cm, en perspective cavalière : la hauteur part du centre O de la base.' },
  { fiche: f4('representation-espace'), cle: 'cone', schema: 'cone', apres: '### Cône de révolution — pas à pas',
    legende: 'Cône de rayon 5 cm et de hauteur 12 cm : la base se dessine en ovale, sa moitié arrière en pointillés ; le segment du sommet au bord mesure 13 cm.' },
  { fiche: f4('representation-espace'), cle: 'trois-longueurs', schema: 'pyramide-hauteurs', apres: '## 7. Le piège n°1 : quelle hauteur ?',
    legende: 'Dans la pyramide de côté 6 cm, la hauteur SO (4 cm) sert au volume, la hauteur de face SI (5 cm) au patron ; le triangle SOI est rectangle en O.' },

  { fiche: f4('statistiques'), cle: 'mediane', schema: 'mediane', apres: '## 4. La médiane',
    legende: 'Avec 7 valeurs rangées, la médiane est la 4e, 11 ; avec 8 valeurs, c’est la demi-somme des deux valeurs centrales, ici 10.' },
  { fiche: f4('statistiques'), cle: 'valeur-extreme', schema: 'points-series', apres: '## 6. Quand on ajoute une valeur extrême',
    params: { min: 6, max: 22, lignes: [{ nom: 'Départ', vals: [8, 9, 10, 11, 12], moyenne: 10, mediane: 10, couleur: BLEU }, { nom: 'Avec 20', vals: [8, 9, 10, 11, 12, 20], moyenne: 70 / 6, mediane: 10.5, couleur: ORANGE }] },
    legende: 'En ajoutant la valeur 20, la moyenne passe de 10 à environ 11,7, alors que la médiane ne passe que de 10 à 10,5.' },
  { fiche: f4('statistiques'), cle: 'comparer-series', schema: 'points-series', apres: '## 7. Comparer deux séries',
    params: { min: 0, max: 20, etendue: true, lignes: [{ nom: 'Classe A', vals: [9, 10, 10, 10, 11], couleur: BLEU }, { nom: 'Classe B', vals: [2, 6, 10, 14, 18], couleur: ORANGE }], notes: ['même moyenne (10), même médiane (10)'] },
    legende: 'Les classes A et B ont la même moyenne et la même médiane, mais pas la même étendue : A est resserrée, B est très dispersée.' },

  { fiche: f4('transformations'), cle: 'quadrillage', schema: 'translation-quadrillage', apres: '### Sur quadrillage',
    legende: 'La translation qui transforme A en A′ fait glisser chaque point de 3 carreaux vers la droite et de 2 vers le bas : le triangle MNP devient M′N′P′.' },
  { fiche: f4('transformations'), cle: 'reconnaitre', schema: 'comparaison-transfos', apres: '## 6. Reconnaître la bonne transformation',
    params: { types: ['axiale', 'centrale', 'translation'], segments: true },
    legende: 'Le même drapeau par une symétrie axiale (retourné), un demi-tour (segments MM′ concourants) et une translation (segments parallèles et de même longueur).' },

  { fiche: f4('triangles'), cle: 'droite-milieux', schema: 'droite-milieux', apres: '## 2. La droite des milieux — trois théorèmes',
    legende: 'I et J sont les milieux des côtés AB et AC : la droite (IJ) est parallèle à (BC) et IJ mesure la moitié de BC.' },
  { fiche: f4('triangles'), cle: 'pythagore-carres', schema: 'pythagore-carres', apres: '### L’hypothèse : un triangle RECTANGLE',
    legende: 'Triangle rectangle en A de côtés 3, 4 et 5 : les carrés construits sur les côtés de l’angle droit (9 et 16) ont la même aire totale que celui construit sur l’hypoténuse (25).' },
  { fiche: f4('triangles'), cle: 'cercle-circonscrit', schema: 'triangle-cercle', apres: '## 7. Triangle rectangle et cercle circonscrit',
    legende: 'Le triangle ABC est rectangle en A : le centre de son cercle circonscrit est le milieu O de l’hypoténuse BC, qui est un diamètre.' },

  // ======================= 3e =======================
  { fiche: f3('calcul-litteral'), cle: 'double-distributivite', schema: 'rectangle-aires', apres: '## 4. La double distributivité',
    params: { larges: [{ t: 'c', w: 180 }, { t: 'd', w: 110 }], hauts: [{ t: 'a', w: 110 }, { t: 'b', w: 70 }], cellules: [['ac', 'ad'], ['bc', 'bd']], titre: '(a + b)(c + d) = ac + ad + bc + bd' },
    legende: 'Le rectangle de côtés a + b et c + d se découpe en quatre rectangles : ac, ad, bc et bd. Quatre produits, jamais moins.' },
  { fiche: f3('calcul-litteral'), cle: 'carre-somme', schema: 'rectangle-aires', apres: '### Le carré d’une somme',
    params: { larges: [{ t: 'a', w: 160 }, { t: 'b', w: 80 }], hauts: [{ t: 'a', w: 160 }, { t: 'b', w: 80 }], cellules: [['a²', 'ab'], ['ab', 'b²']], titre: '(a + b)² = a² + 2ab + b²', couleurs: [[BLEU, ORANGE], [ORANGE, VERT]] },
    legende: 'Le carré de côté a + b se découpe en un carré a², un carré b² et deux rectangles ab : (a + b)² = a² + 2ab + b².' },
  { fiche: f3('calcul-litteral'), cle: 'inequation', schema: 'droite', apres: '## 8. L’inéquation du premier degré $ax \\geqslant b$',
    params: { min: -6, max: 7, H: 150, y: 70, zones: [{ de: 4, a: null, couleur: VERT, crochet: '[' }], points: [{ v: 4, t: '4', couleur: VERT, haut: 26 }], notes: ['3x ≥ 12 donne x ≥ 4 : 4 est solution, ainsi que tout nombre à sa droite'] },
    legende: 'Les solutions de 3x ≥ 12 sur une droite graduée : tous les nombres supérieurs ou égaux à 4, le crochet tourné vers la zone indiquant que 4 est compris.' },

  { fiche: f3('fonctions'), cle: 'image-antecedent', schema: 'image-antecedent', apres: '### Lire une image, lire un antécédent sur la courbe',
    legende: 'Sur la droite de f(x) = 2x + 3 : l’image de 4 se lit en partant de l’axe horizontal (11), l’antécédent de 7 en partant de l’axe vertical (2).' },
  { fiche: f3('fonctions'), cle: 'coefficients-affine', schema: 'affine-coefficients', apres: '### Déterminer graphiquement les deux coefficients',
    legende: 'La droite coupe l’axe vertical en 1, donc b = 1 ; quand on avance de 1, elle monte de 2, donc a = 2 : f(x) = 2x + 1.' },
  { fiche: f3('fonctions'), cle: 'fonction-carre', schema: 'parabole', apres: '## 7. La fonction carré',
    params: { ymin: -5, ymax: 10, lignes: [{ a: 9, couleur: VERT, t1: 'y = 9 : deux', t2: 'antécédents, −3 et 3' }, { a: -4, couleur: ROUGE, t1: 'y = −4 : aucun', t2: 'antécédent' }] },
    legende: 'La parabole de la fonction carré est symétrique : 9 a deux antécédents, −3 et 3, tandis que −4 n’en a aucun car la courbe reste au-dessus de l’axe.' },

  { fiche: f3('multiples-diviseurs'), cle: 'arbre-60', schema: 'arbre-facteurs', apres: '### La méthode',
    legende: 'On divise 60 par les nombres premiers dans l’ordre (2, 2, 3) jusqu’à obtenir un nombre premier : 60 = 2² × 3 × 5.' },
  { fiche: f3('multiples-diviseurs'), cle: 'facteurs-communs', schema: 'facteurs-communs', apres: '### Cas général : par décomposition',
    legende: 'Les facteurs premiers de 84 et de 126 : ils ont en commun 2, 3 et 7, dont le produit 42 permet de simplifier 84/126 en 2/3.' },

  { fiche: f3('nombres-rationnels'), cle: 'ensembles', schema: 'ensembles-nombres', apres: '## 6. Prolongement : la notation des ensembles de nombres',
    legende: 'Chaque ensemble contient le précédent : les naturels sont des entiers relatifs, qui sont des décimaux, qui sont des rationnels ; 1/3 est rationnel mais pas décimal.' },

  { fiche: f3('pensee-informatique'), cle: 'tant-que', schema: 'organigramme-tantque', apres: '### 2.3 La boucle conditionnelle — `tant que`',
    legende: 'Organigramme de la boucle : la condition « n inférieur à 20 » est testée avant chaque tour ; n vaut 1, 2, 4, 8, 16 puis 32, et le programme affiche 32.' },
  { fiche: f3('pensee-informatique'), cle: 'valeur-sautee', schema: 'droite', apres: '### 2.4 La terminaison — la boucle qui ne s’arrête jamais',
    params: { min: -6, max: 11, H: 170, y: 116, points: [{ v: 0, t: '0 jamais atteint', couleur: ROUGE, bas: true }], sauts: [10, 7, 4, 1, -2].map((v) => ({ de: v, a: v - 3, t: '−3', couleur: ORANGE })), titre: 'n vaut 10, 7, 4, 1, −2, −5…' },
    legende: 'Avec « tant que n ≠ 0 », n recule de 3 en 3 depuis 10 et enjambe 0 : la condition ne devient jamais fausse.' },

  { fiche: f3('probabilites'), cle: 'effectifs-30', schema: 'venn', apres: '### Sens 1 — trouver la réunion',
    params: { omega: '30 élèves', A: 'instrument (14)', B: 'sport (19)', seulA: ['6'], inter: ['8'], seulB: ['11'], dehors: ['5'], notes: ['6 + 8 + 11 = 25 élèves pratiquent au moins une activité'] },
    legende: 'Parmi 30 élèves, 8 font les deux activités : 14 + 19 − 8 = 25 élèves en pratiquent au moins une, et 5 n’en pratiquent aucune.' },
  { fiche: f3('probabilites'), cle: 'dalembert', schema: 'arbre', apres: '## 6. L’erreur de D’Alembert',
    params: { surligne: ['P ; P', 'P ; F', 'F ; P'], notes: ['au moins un pile : 3 issues sur 4 équiprobables'] },
    legende: 'Deux lancers d’une pièce donnent quatre issues équiprobables, dont trois contiennent au moins un pile : la probabilité vaut 3/4, et non 2/3.' },

  { fiche: f3('proportionnalite'), cle: 'ratio-3-4', schema: 'barres-parts', apres: '## 1. Partager selon un ratio',
    params: { lignes: [{ nom: '3 parts', n: 3, couleur: BLEU, parts: '50 €', valeur: '150 €' }, { nom: '4 parts', n: 4, couleur: ORANGE, parts: '50 €', valeur: '200 €' }], unite: 56, total: { t: '350 €\n= 7 parts', dx: 80 }, notes: ['une part : 350 ÷ 7 = 50 €'] },
    legende: 'Partage de 350 € selon le ratio 3 : 4 : 7 parts de 50 €, soit 150 € et 200 €.' },
  { fiche: f3('proportionnalite'), cle: 'deux-evolutions', schema: 'chaine', apres: '## 6. Enchaîner deux évolutions, et revenir en arrière',
    params: { lignes: [{ titre: 'étape par étape', valeurs: ['100 €', '120 €', '108 €'], ops: ['× 1,20', '× 0,90'], couleur: BLEU }, { titre: 'en une fois', valeurs: ['100 €', '108 €'], ops: ['× 1,08'], couleur: VERT }], x0: 180, bw: 84, gap: 104, notes: ['+20 % puis −10 % : × 1,20 × 0,90 = × 1,08, soit +8 %'] },
    legende: 'Une hausse de 20 % suivie d’une baisse de 10 % : on multiplie les coefficients, 1,20 × 0,90 = 1,08, soit une hausse globale de 8 %.' },
  { fiche: f3('proportionnalite'), cle: 'thales-graphique', schema: 'thales-graphique', apres: '## 7. Le graphique et le théorème de Thalès',
    legende: 'Les points A(2 ; 5) et B(6 ; 15) sont alignés avec l’origine : les triangles OHA et OH′B sont emboîtés et Thalès donne 2/6 = 5/15.' },

  { fiche: f3('puissances'), cle: 'virgule', schema: 'virgule', apres: '### Méthode — trouver la notation scientifique',
    legende: 'On déplace la virgule pour garder un seul chiffre non nul devant : 32 000 = 3,2 × 10⁴ et 0,00058 = 5,8 × 10⁻⁴.' },
  { fiche: f3('puissances'), cle: 'prefixes', schema: 'prefixes', apres: '### Les préfixes des unités',
    legende: 'Les préfixes des unités sont des puissances de 10 : de nano (10⁻⁹) à giga (10⁹), on multiplie par 1 000 d’un préfixe au suivant.' },

  { fiche: f3('racine-carree'), cle: 'resolution-graphique', schema: 'parabole', apres: '## 3. Résoudre $x^2 = a$ graphiquement',
    params: { ymin: -4, ymax: 10, lignes: [{ a: 4, couleur: VERT, t1: 'a = 4 > 0 : deux', t2: 'solutions, −2 et 2' }, { a: 0, couleur: ORANGE, t1: 'a = 0 : une seule', t2: 'solution, 0' }, { a: -2, couleur: ROUGE, t1: 'a = −2 < 0 :', t2: 'aucune solution' }] },
    legende: 'Pour résoudre x² = a, on coupe la parabole par la droite y = a : deux points si a est positif, un seul si a = 0, aucun si a est négatif.' },

  { fiche: f3('reperage'), cle: 'signes', schema: 'repere-points', apres: '## 3. Les règles qui décident de tout',
    params: { xmin: -6, xmax: 6, ymin: -6, ymax: 6, W: 480, H: 460, quadrants: true, points: [{ x: -2, y: 5, nom: 'M', couleur: BLEU, chemin: true, dx: 56, dy: 5 }, { x: 5, y: -2, nom: 'N', couleur: ORANGE, chemin: true, dy: 24, dx: -20 }] },
    legende: 'M(−2 ; 5) est en haut à gauche, N(5 ; −2) en bas à droite : mêmes chiffres, points différents. La position du point donne les signes de ses coordonnées.' },
  { fiche: f3('reperage'), cle: 'resoudre-graphiquement', schema: 'resolution-graphique', apres: '### Résoudre graphiquement',
    legende: 'La droite de f(x) = 2x − 3 coupe y = 1 au point (2 ; 1) et passe au-dessus à sa droite : les solutions de 2x − 3 ≥ 1 sont les x ≥ 2.' },

  { fiche: f3('representation-espace'), cle: 'pyramide-cube', schema: 'pyramide-cube', apres: '## 2. Patrons de pyramides inscrites dans un cube',
    legende: 'Pyramide inscrite dans un cube de 6 cm : base carrée ABCD et sommet S au-dessus du coin A. Son volume, 72 cm³, est le tiers de celui du cube.' },
  { fiche: f3('representation-espace'), cle: 'sphere', schema: 'sphere', apres: '## 3. Sphère et boule',
    legende: 'Une sphère de centre O et de rayon R : un diamètre mesure 2R, et le grand cercle (en vert) a le même centre et le même rayon que la sphère.' },
  { fiche: f3('representation-espace'), cle: 'section-boule', schema: 'section-boule', apres: '## 4. Sections d’un solide par un plan',
    legende: 'Vue de profil d’une boule de rayon 5 cm coupée par un plan à 3 cm du centre : le triangle OHM est rectangle et la section est un disque de rayon 4 cm.' },

  { fiche: f3('statistiques'), cle: 'cumuls-quartiles', schema: 'cumuls', apres: '## 4. Les quartiles',
    legende: 'Effectifs cumulés des 25 notes : la première barre qui atteint le rang 7 donne Q₁ = 8, le rang 13 la médiane 10, le rang 19 donne Q₃ = 12.' },
  { fiche: f3('statistiques'), cle: 'boite', schema: 'boites', apres: '## 6. Les cinq valeurs de position et la boite à moustaches',
    params: { boites: [{ nom: '', v: [6, 8, 10, 12, 16], couleur: BLEU, etiquettes: true }] },
    legende: 'La boite à moustaches des 25 notes : minimum 6, premier quartile 8, médiane 10, troisième quartile 12 et maximum 16.' },
  { fiche: f3('statistiques'), cle: 'deux-boites', schema: 'boites', apres: '## 7. Utiliser une boite pour comparer et interpréter',
    params: { boites: [{ nom: 'A', v: [4, 9, 10, 11, 16], couleur: BLEU, largeur: true }, { nom: 'B', v: [4, 6, 10, 15, 16], couleur: ORANGE, largeur: true }] },
    legende: 'Même médiane et même étendue, mais la boite de A est étroite (2) et celle de B large (9) : la moitié centrale de A est resserrée autour de 10.' },

  { fiche: f3('translations-vecteurs'), cle: 'definition', schema: 'parallelogramme-translation', apres: '## 1. La translation, enfin définie',
    params: { noms: ['A', 'B', 'M′', 'M'], fleches: [[0, 1], [3, 2]], notes: ['ABM′M est un parallélogramme'] },
    legende: 'L’image de M par la translation qui transforme A en B est le point M′ tel que ABM′M soit un parallélogramme.' },
  { fiche: f3('translations-vecteurs'), cle: 'vecteurs-egaux', schema: 'parallelogramme-translation', apres: '### La traduction géométrique',
    params: { noms: ['A', 'B', 'D', 'C'], fleches: [[0, 1], [3, 2]], diagonales: true, notes: ['les diagonales [AD] et [BC] ont le même milieu'] },
    legende: 'Les vecteurs AB et CD sont égaux : ABDC est un parallélogramme, et ses diagonales AD et BC ont le même milieu.' },
  { fiche: f3('translations-vecteurs'), cle: 'somme', schema: 'chasles', apres: '## 5. Additionner deux vecteurs',
    legende: 'À gauche, la relation de Chasles : aller de A à B puis de B à C revient à aller de A à C. À droite, pour deux vecteurs de même origine, on ferme le parallélogramme ABCD.' },

  { fiche: f3('triangles'), cle: 'emboites', schema: 'thales-emboites', apres: '### Triangles emboités',
    legende: 'Configuration emboîtée, à l’échelle : (MN) est parallèle à (BC), donc le petit triangle AMN est une réduction de ABC.' },
  { fiche: f3('triangles'), cle: 'papillon', schema: 'thales-papillon', apres: '### Papillon',
    legende: 'Configuration papillon : les points sont de part et d’autre de O et (BC) est parallèle à (DE) ; les rapports se lisent depuis le sommet commun O.' },
  { fiche: f3('triangles'), cle: 'cotes-trigo', schema: 'trigo-cotes', apres: '### Nommer les côtés — par rapport à l’angle choisi',
    legende: 'Dans le triangle rectangle en A, l’hypoténuse reste BC ; l’opposé et l’adjacent s’échangent selon que l’on travaille avec l’angle B ou l’angle C.' },
];

export const POSES = [...POSES_A, ...POSES_B].map((p) => ({ ...p, apres: p.apres ? p.apres.replace(/’/g, "'") : p.apres }));
