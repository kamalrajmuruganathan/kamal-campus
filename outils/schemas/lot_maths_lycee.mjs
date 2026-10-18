/**
 * Lot « maths_lycee » : schémas des fiches de mathématiques du lycée
 * (2de → Terminale, voies générale et technologique).
 *
 * Tous les dessins sont CALCULÉS : les courbes sont celles des vraies
 * fonctions, les points sont placés à leurs coordonnées exactes, les
 * probabilités des diagrammes en bâtons sont calculées.
 */
import { enveloppe, texte, ligne, fleche, boite, cercle, polygone, point, repere, nb, esc, ENCRE, GRILLE, AXE, BLEU, ROUGE, VERT, ORANGE, VIOLET, ATTENUE } from './base.mjs';

const NOMS = { bleu: BLEU, rouge: ROUGE, vert: VERT, orange: ORANGE, violet: VIOLET, encre: ENCRE, gris: ATTENUE, axe: AXE };
const col = (c, def = BLEU) => NOMS[c] || c || def;
const fmt = (v) => String(Math.round(v * 1000) / 1000).replace('.', ',').replace('-', '−');

/**
 * Texte « riche » : `!X` met une barre au-dessus du caractère X (événement contraire,
 * conjugué) ; `_x` met x en indice. Le reste est échappé.
 */
function texteRiche(x, y, s, { taille = 15, couleur = ENCRE, ancre = 'middle', gras = false, italique = false, halo = true } = {}) {
  const t = String(s);
  // Analyse : !c (barre), _c ou _{…} (indice), ^c ou ^{…} (exposant).
  const groupe = (u, i) => {
    if (u[i] === '{') { const j = u.indexOf('}', i); return [u.slice(i + 1, j), j + 1]; }
    return [u[i], i + 1];
  };
  const rendre = (u, tl) => {
    let out = '';
    for (let i = 0; i < u.length; ) {
      const c = u[i];
      if (c === '!' && i + 1 < u.length && /\p{L}/u.test(u[i + 1]) && !(i > 0 && /[\p{L}\p{N})]/u.test(u[i - 1]))) { out += `<tspan text-decoration="overline">${esc(u[i + 1])}</tspan>`; i += 2; }
      else if ((c === '_' || c === '^') && i + 1 < u.length) {
        const [g, j] = groupe(u, i + 1);
        const d = c === '_' ? tl * 0.3 : -tl * 0.42;
        out += `<tspan font-size="${nb(tl * 0.72)}" dy="${nb(d)}">${rendre(g, tl * 0.72)}</tspan><tspan dy="${nb(-d)}">\u200b</tspan>`;
        i = j;
      } else { out += esc(c); i++; }
    }
    return out;
  };
  const corps = rendre(t, taille);
  return (
    `<text x="${nb(x)}" y="${nb(y)}" font-size="${taille}" fill="${couleur}" text-anchor="${ancre}"` +
    `${halo ? ' stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke"' : ''}` +
    `${gras ? ' font-weight="700"' : ''}${italique ? ' font-style="italic"' : ''}>${corps}</text>`
  );
}

/** Nom de vecteur avec sa flèche au-dessus (centré en x). */
function vec(x, y, nom, { taille = 16, couleur = ENCRE, italique = true } = {}) {
  const larg = [...nom].reduce((s, c) => s + (/[A-Z]/.test(c) ? 0.66 : /[0-9₀-₉']/.test(c) ? 0.5 : 0.52), 0) * taille;
  const ya = y - taille * 0.92;
  return texte(x, y, nom, { taille, couleur, italique }) + fleche(x - larg / 2 - 1, ya, x + larg / 2 + 3, ya, { couleur, epaisseur: 1.3, pointe: 5 });
}

/** Arc de cercle en pixels (angles en degrés, sens trigonométrique à l'écran). */
function arcPx(cx, cy, r, a1, a2, { couleur = ORANGE, epaisseur = 1.8, pointe = false } = {}) {
  const n = 40;
  const pts = [];
  for (let i = 0; i <= n; i++) { const t = ((a1 + ((a2 - a1) * i) / n) * Math.PI) / 180; pts.push([cx + r * Math.cos(t), cy - r * Math.sin(t)]); }
  let g = `<path d="M ${pts.map(([u, v]) => `${nb(u)} ${nb(v)}`).join(' L ')}" fill="none" stroke="${couleur}" stroke-width="${epaisseur}"/>`;
  if (pointe) g += fleche(pts[n - 3][0], pts[n - 3][1], pts[n][0], pts[n][1], { couleur, epaisseur, pointe: 8 });
  return g;
}

/** Chemin d’une courbe (coupé aux valeurs non finies et aux sauts), à découper par un clipPath. */
function chemin(f, a, b, X, Y, { n = 200, ymin = -1e6, ymax = 1e6 } = {}) {
  const r1 = (v) => Math.round(v * 10) / 10;
  let d = '';
  let enCours = false;
  let prec = null;
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    const y = f(x);
    if (!Number.isFinite(y) || y < ymin || y > ymax) { enCours = false; prec = null; continue; }
    if (prec !== null && Math.abs(Y(y) - Y(prec)) > 2000) enCours = false;
    d += `${enCours ? 'L' : 'M'}${r1(X(x))} ${r1(Y(y))}`;
    enCours = true;
    prec = y;
  }
  return d.trim();
}

/**
 * Graphique générique dans un repère (toutes les coordonnées sont mathématiques,
 * sauf `textesPx`). Voir l’en-tête du fichier pour la liste des éléments.
 */
function graphe(p = {}) {
  if (p.orthonorme) { const m = p.marge ?? 28, w = p.W ?? 560; p = { ...p, H: Math.round(2 * m + ((p.ymax - p.ymin) * (w - 2 * m)) / (p.xmax - p.xmin)) }; }
  const { W = 560, H = 380, xmin = -5, xmax = 5, ymin = -4, ymax = 4, pasX = 1, pasY = 1, marge = 28, graduer = true, nomX = 'x', nomY = 'y' } = p;
  const r = repere({ W, H, xmin, xmax, ymin, ymax, pasX, pasY, marge, graduer: false, nomX, nomY });
  const { X, Y } = r;
  const ech = Math.abs(Y(1) - Y(0)) / Math.abs(X(1) - X(0)); // pour les angles droits / arcs
  let g = r.svg;
  const yAxe = Y(Math.min(Math.max(0, ymin), ymax));
  const xAxe = X(Math.min(Math.max(0, xmin), xmax));
  // Graduations automatiques (sans celles qui toucheraient les flèches des axes)
  if (graduer && !p.gradX && !p.gradY) {
    const fx = p.formatX || fmt, fy = p.formatY || fmt;
    for (let x = Math.ceil(xmin / pasX - 1e-9) * pasX; x <= xmax + 1e-9; x += pasX) if (Math.abs(x) > 1e-9 && X(x) < W - marge - 12 && X(x) > marge + 4) g += texteRiche(X(x), yAxe + 16, fx(x), { taille: 11, couleur: ATTENUE });
    for (let y = Math.ceil(ymin / pasY - 1e-9) * pasY; y <= ymax + 1e-9; y += pasY) if (Math.abs(y) > 1e-9 && Y(y) > marge + 12 && Y(y) < H - marge - 4) g += texteRiche(xAxe - 6, Y(y) + 4, fy(y), { taille: 11, couleur: ATTENUE, ancre: 'end' });
    if (xmin <= 0 && xmax >= 0 && ymin <= 0 && ymax >= 0) g += texte(xAxe - 8, yAxe + 16, '0', { taille: 11, couleur: ATTENUE });
  }
  if (p.gradX) for (const q of p.gradX) { g += ligne(X(q.x), yAxe - 4, X(q.x), yAxe + 4, { couleur: AXE, epaisseur: 1.5 }); g += texteRiche(X(q.x) + (q.dx || 0), yAxe + 17 + (q.dy || 0), q.t ?? fmt(q.x), { taille: q.taille || 12, couleur: q.couleur ? col(q.couleur) : ATTENUE }); }
  if (p.gradY) for (const q of p.gradY) { g += ligne(xAxe - 4, Y(q.y), xAxe + 4, Y(q.y), { couleur: AXE, epaisseur: 1.5 }); g += texteRiche(xAxe - 7 + (q.dx || 0), Y(q.y) + 4 + (q.dy || 0), q.t ?? fmt(q.y), { taille: q.taille || 12, couleur: q.couleur ? col(q.couleur) : ATTENUE, ancre: 'end' }); }
  if (p.origine && (p.gradX || p.gradY)) g += texte(xAxe - 8, yAxe + 16, '0', { taille: 11, couleur: ATTENUE });
  // Zone de tracé (clip)
  const id = p.idZone || 'zone';
  g += `<clipPath id="${id}"><rect x="${marge}" y="${marge}" width="${W - 2 * marge}" height="${H - 2 * marge}"/></clipPath>`;
  let dedans = '';
  for (const a of p.aires || []) {
    const n = 200;
    const f = a.f;
    const h = a.g || (() => 0);
    const pts = [];
    for (let i = 0; i <= n; i++) { const x = a.a + ((a.b - a.a) * i) / n; pts.push([X(x), Y(f(x))]); }
    for (let i = n; i >= 0; i--) { const x = a.a + ((a.b - a.a) * i) / n; pts.push([X(x), Y(h(x))]); }
    dedans += `<polygon points="${pts.map(([u, v]) => `${nb(u)},${nb(v)}`).join(' ')}" fill="${col(a.couleur)}" fill-opacity="${a.opacite ?? 0.18}" stroke="none"/>`;
  }
  for (const q of p.rects || []) {
    const x1 = X(Math.min(q.x1, q.x2)), x2 = X(Math.max(q.x1, q.x2)), y1 = Y(Math.max(q.y1, q.y2)), y2 = Y(Math.min(q.y1, q.y2));
    dedans += `<rect x="${nb(x1)}" y="${nb(y1)}" width="${nb(x2 - x1)}" height="${nb(y2 - y1)}" fill="${col(q.couleur, ORANGE)}" fill-opacity="${q.opacite ?? 0.2}" stroke="${col(q.couleur, ORANGE)}" stroke-width="${q.epaisseur ?? 1.4}"/>`;
  }
  for (const s of p.segments || []) dedans += ligne(X(s.x1), Y(s.y1), X(s.x2), Y(s.y2), { couleur: col(s.couleur, ATTENUE), epaisseur: s.epaisseur ?? 1.6, pointilles: s.pointilles ?? true });
  for (const c of p.courbes || []) {
    const d = chemin(c.f, c.a ?? xmin, c.b ?? xmax, X, Y, { n: c.n || 200 });
    dedans += `<path d="${d}" fill="none" stroke="${col(c.couleur)}" stroke-width="${c.epaisseur ?? 2.6}"${c.pointilles ? ' stroke-dasharray="7 5"' : ''} stroke-linejoin="round" stroke-linecap="round"/>`;
  }
  for (const s of p.traits || []) dedans += ligne(X(s.x1), Y(s.y1), X(s.x2), Y(s.y2), { couleur: col(s.couleur, ENCRE), epaisseur: s.epaisseur ?? 2.2, pointilles: s.pointilles ?? false });
  for (const pl of p.polygones || []) dedans += polygone(pl.points.map(([u, v]) => [X(u), Y(v)]), { couleur: col(pl.couleur, ENCRE), fond: pl.fond ? col(pl.fond) : 'none', opacite: pl.opacite ?? 0.15, epaisseur: pl.epaisseur ?? 2 });
  for (const c of p.cercles || []) dedans += `<ellipse cx="${nb(X(c.x))}" cy="${nb(Y(c.y))}" rx="${nb(Math.abs(X(c.r) - X(0)))}" ry="${nb(Math.abs(Y(c.r) - Y(0)))}" fill="${c.fond ? col(c.fond) : 'none'}" fill-opacity="${c.opacite ?? 0.12}" stroke="${col(c.couleur, ENCRE)}" stroke-width="${c.epaisseur ?? 2.2}"${c.pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
  g += `<g clip-path="url(#${id})">${dedans}</g>`;
  for (const a of p.arcs || []) {
    // centre en coordonnées math, rayon en px, angles en radians (sens trigonométrique)
    const cx = X(a.x), cy = Y(a.y);
    const pts = [];
    const n = 40;
    for (let i = 0; i <= n; i++) { const t = a.a1 + ((a.a2 - a.a1) * i) / n; pts.push([cx + a.r * Math.cos(t), cy - a.r * Math.sin(t)]); }
    g += `<path d="M ${pts.map(([u, v]) => `${nb(u)} ${nb(v)}`).join(' L ')}" fill="none" stroke="${col(a.couleur, ORANGE)}" stroke-width="${a.epaisseur ?? 1.8}"/>`;
    if (a.fleche) { const [u1, v1] = pts[n - 2]; const [u2, v2] = pts[n]; g += fleche(u1, v1, u2, v2, { couleur: col(a.couleur, ORANGE), epaisseur: 1.8, pointe: 9 }); }
  }
  for (const q of p.droits || []) {
    // angle droit au point (x, y) entre les directions u et v (math) ; taille en px
    const t = q.taille || 12;
    const nu = Math.hypot(q.u[0], q.u[1] * ech), nv = Math.hypot(q.v[0], q.v[1] * ech);
    const u = [q.u[0] / nu, -(q.u[1] * ech) / nu], v = [q.v[0] / nv, -(q.v[1] * ech) / nv];
    const x0 = X(q.x), y0 = Y(q.y);
    g += `<path d="M ${nb(x0 + u[0] * t)} ${nb(y0 + u[1] * t)} L ${nb(x0 + (u[0] + v[0]) * t)} ${nb(y0 + (u[1] + v[1]) * t)} L ${nb(x0 + v[0] * t)} ${nb(y0 + v[1] * t)}" fill="none" stroke="${col(q.couleur, ENCRE)}" stroke-width="1.5"/>`;
  }
  for (const f of p.fleches || []) g += fleche(X(f.x1), Y(f.y1), X(f.x2), Y(f.y2), { couleur: col(f.couleur, ENCRE), epaisseur: f.epaisseur ?? 2.4, pointe: f.pointe ?? 11, pointilles: f.pointilles ?? false });
  for (const c of p.courbes || []) if (c.nom) { const x = c.nx ?? (c.b ?? xmax); g += texteRiche(X(x) + (c.ndx || 0), Y(c.f(x)) + (c.ndy || 0), c.nom, { taille: c.taille || 15, couleur: col(c.couleur), italique: c.italique ?? false, gras: c.gras ?? false, ancre: c.ancre || 'middle' }); }
  for (const q of p.points || []) {
    g += `<circle cx="${nb(X(q.x))}" cy="${nb(Y(q.y))}" r="${q.r ?? 4}" fill="${q.creux ? '#ffffff' : col(q.couleur, ENCRE)}" stroke="${col(q.couleur, ENCRE)}" stroke-width="${q.creux ? 2 : 0}"/>`;
    if (q.nom) g += texteRiche(X(q.x) + (q.dx ?? 10), Y(q.y) + (q.dy ?? -9), q.nom, { taille: q.taille || 14, couleur: col(q.couleurNom || q.couleur, ENCRE), ancre: q.ancre || 'middle' });
  }
  for (const v of p.vecs || []) g += vec(X(v.x), Y(v.y), v.t, { taille: v.taille || 16, couleur: col(v.couleur, ENCRE) });
  for (const t of p.textes || []) g += texteRiche(X(t.x), Y(t.y), t.t, { taille: t.taille || 14, couleur: col(t.couleur, ENCRE), ancre: t.ancre || 'middle', gras: t.gras, italique: t.italique });
  for (const t of p.textesPx || []) g += texteRiche(t.x, t.y, t.t, { taille: t.taille || 14, couleur: col(t.couleur, ENCRE), ancre: t.ancre || 'middle', gras: t.gras, italique: t.italique });
  return enveloppe(W, H, g);
}

/**
 * Arbre pondéré (de gauche à droite). branches = [{ nom, p, enfants: [...], fin }].
 * `nom` accepte `!A` (barre). `fin` : texte écrit au bout de la feuille.
 */
function arbre({ W = 600, H = 340, branches = [], pasX = 150, x0 = 30, racine = '', tailleP = 13, finX = null } = {}) {
  const feuilles = [];
  const prof = (n) => (n.enfants && n.enfants.length ? 1 + Math.max(...n.enfants.map(prof)) : 0);
  const compte = (n) => (n.enfants && n.enfants.length ? n.enfants.reduce((s, e) => s + compte(e), 0) : 1);
  const total = branches.reduce((s, e) => s + compte(e), 0);
  const m = 22;
  const pas = (H - 2 * m) / total;
  let k = 0;
  let g = '';
  const place = (n, d) => {
    n.x = x0 + d * pasX;
    if (n.enfants && n.enfants.length) { n.enfants.forEach((e) => place(e, d + 1)); n.y = n.enfants.reduce((s, e) => s + e.y, 0) / n.enfants.length; }
    else { n.y = m + pas * (k + 0.5); k++; feuilles.push(n); }
  };
  branches.forEach((b) => place(b, 1));
  const rac = { x: x0, y: branches.reduce((s, e) => s + e.y, 0) / branches.length };
  if (racine) g += texte(rac.x - 4, rac.y + 5, racine, { taille: 14, ancre: 'end' });
  const dessine = (parent, n) => {
    const xa = parent.x + (parent === rac ? 4 : 16), ya = parent.y, xb = n.x - 16, yb = n.y;
    g += ligne(xa, ya, xb, yb, { couleur: n.couleur ? col(n.couleur) : ENCRE, epaisseur: n.couleur ? 2.6 : 1.8 });
    if (n.p !== undefined && n.p !== '') {
      const mx = (xa + xb) / 2, my = (ya + yb) / 2;
      const dy = yb < ya - 1 ? -8 : yb > ya + 1 ? 17 : -7;
      g += texteRiche(mx, my + dy, n.p, { taille: tailleP, couleur: n.couleurP ? col(n.couleurP) : BLEU, gras: false });
    }
    g += texteRiche(n.x, n.y + 5, n.nom, { taille: 15, gras: true, couleur: n.couleur ? col(n.couleur) : ENCRE });
    (n.enfants || []).forEach((e) => dessine(n, e));
    if (n.fin) g += texteRiche(finX ?? n.x + 26, n.y + 5, n.fin, { taille: 13, ancre: 'start', couleur: n.couleurFin ? col(n.couleurFin) : ATTENUE });
  };
  branches.forEach((b) => dessine(rac, b));
  return enveloppe(W, H, g);
}

/** Diagramme en bâtons d’une loi : valeurs [{x, p}] (ou loi binomiale n, p). */
function batons({ W = 560, H = 320, loi = null, n = 10, p = 0.5, enValeur = null, pasY = 0.05, ymax = null, titre = '', esperance = false, etiquettes = null, couleurV = ORANGE, ecart = false } = {}) {
  let vals = loi;
  if (!vals) {
    vals = [];
    let c = 1;
    for (let k = 0; k <= n; k++) { vals.push({ x: k, p: c * p ** k * (1 - p) ** (n - k) }); c = (c * (n - k)) / (k + 1); }
  }
  const pm = ymax ?? Math.ceil((Math.max(...vals.map((v) => v.p)) + 0.005) / pasY) * pasY;
  const mg = 46, mb = 36, mh = titre ? 34 : 18;
  const xs = vals.map((v) => v.x);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const X = (x) => mg + 30 + ((x - x0) / (x1 - x0 || 1)) * (W - mg - 60);
  const Y = (y) => H - mb - (y / pm) * (H - mb - mh);
  let g = '';
  for (let y = 0; y <= pm + 1e-9; y += pasY) { g += ligne(mg, Y(y), W - 12, Y(y), { couleur: GRILLE, epaisseur: 1 }); g += texte(mg - 6, Y(y) + 4, fmt(Math.round(y * 1000) / 1000), { taille: 11, couleur: ATTENUE, ancre: 'end' }); }
  g += ligne(mg, H - mb, W - 12, H - mb, { couleur: AXE, epaisseur: 1.8 });
  g += ligne(mg, H - mb, mg, mh - 6, { couleur: AXE, epaisseur: 1.8 });
  const larg = Math.max(1.5, Math.min(26, ((W - mg - 60) / Math.max(1, vals.length - 1)) * 0.55));
  for (const v of vals) {
    const enV = enValeur && enValeur(v.x);
    g += `<rect x="${nb(X(v.x) - larg / 2)}" y="${nb(Y(v.p))}" width="${nb(larg)}" height="${nb(Y(0) - Y(v.p))}" fill="${enV ? couleurV : BLEU}" fill-opacity="${enV ? 0.85 : 0.7}"/>`;
    g += texte(X(v.x), H - mb + 17, etiquettes ? etiquettes(v.x) : fmt(v.x), { taille: 12, couleur: ATTENUE });
  }
  if (esperance !== false) {
    const e = esperance === true ? vals.reduce((s, v) => s + v.x * v.p, 0) : esperance;
    g += ligne(X(e), H - mb, X(e), mh, { couleur: ROUGE, epaisseur: 2, pointilles: true });
    g += texte(X(e) + 6, mh + 10, `E(X) = ${fmt(Math.round(e * 100) / 100)}`, { taille: 13, couleur: ROUGE, ancre: 'start', gras: true });
  }
  if (ecart) {
    const e = vals.reduce((s, v) => s + v.x * v.p, 0);
    const sg = Math.sqrt(vals.reduce((s, v) => s + v.p * (v.x - e) ** 2, 0));
    const yE = mh + 34;
    g += fleche(X(e), yE, X(e - sg), yE, { couleur: VERT, epaisseur: 2, pointe: 8 }) + fleche(X(e), yE, X(e + sg), yE, { couleur: VERT, epaisseur: 2, pointe: 8 });
    g += texte(X(e + sg) + 8, yE + 5, `σ ≈ ${fmt(Math.round(sg * 100) / 100)}`, { taille: 13, couleur: VERT, ancre: 'start', gras: true });
  }
  if (titre) g += texte(W / 2, 20, titre, { taille: 14, gras: true });
  return enveloppe(W, H, g);
}

/** Diagramme en barres avec un axe vertical qui peut ne pas partir de 0. */
function barres({ W = 300, H = 280, valeurs = [], ymin = 0, ymax = 100, pas = 10, titre = '' } = {}) {
  const mg = 44, mb = 32, mh = 40;
  const Y = (y) => H - mb - ((y - ymin) / (ymax - ymin)) * (H - mb - mh);
  let g = '';
  for (let y = ymin; y <= ymax + 1e-9; y += pas) { g += ligne(mg, Y(y), W - 10, Y(y), { couleur: GRILLE, epaisseur: 1 }); g += texte(mg - 6, Y(y) + 4, fmt(y), { taille: 11, couleur: ATTENUE, ancre: 'end' }); }
  const lw = (W - mg - 10) / valeurs.length;
  valeurs.forEach((v, i) => {
    const x = mg + lw * i + lw * 0.2;
    g += `<rect x="${nb(x)}" y="${nb(Y(v.v))}" width="${nb(lw * 0.6)}" height="${nb(Y(ymin) - Y(v.v))}" fill="${col(v.couleur)}" fill-opacity="0.8"/>`;
    g += texte(x + lw * 0.3, H - mb + 18, v.t, { taille: 12, couleur: ENCRE });
  });
  g += ligne(mg, H - mb, W - 10, H - mb, { couleur: AXE, epaisseur: 1.8 }) + ligne(mg, H - mb, mg, mh - 8, { couleur: AXE, epaisseur: 1.8 });
  if (titre) g += texte(W / 2, 22, titre, { taille: 14, gras: true });
  return enveloppe(W, H, g);
}

/** Dessin libre en pixels : boîtes, flèches, textes, lignes, cercles, polygones. */
function libre({ W = 560, H = 300, elements = [] } = {}) {
  let g = '';
  for (const e of elements) {
    if (e.type === 'boite') g += boite(e.x, e.y, e.w, e.h, e.t, { fond: e.fond || '#eef3fb', bord: col(e.bord, BLEU), taille: e.taille || 14, gras: e.gras || false });
    else if (e.type === 'fleche') g += fleche(e.x1, e.y1, e.x2, e.y2, { couleur: col(e.couleur, ENCRE), epaisseur: e.epaisseur ?? 2, pointe: e.pointe ?? 10, pointilles: e.pointilles ?? false });
    else if (e.type === 'ligne') g += ligne(e.x1, e.y1, e.x2, e.y2, { couleur: col(e.couleur, ENCRE), epaisseur: e.epaisseur ?? 2, pointilles: e.pointilles ?? false });
    else if (e.type === 'texte') g += texteRiche(e.x, e.y, e.t, { taille: e.taille || 14, couleur: col(e.couleur, ENCRE), ancre: e.ancre || 'middle', gras: e.gras, italique: e.italique });
    else if (e.type === 'cercle') g += cercle(e.x, e.y, e.r, { couleur: col(e.couleur, ENCRE), fond: e.fond ? col(e.fond) : 'none', opacite: e.opacite ?? 0.15, epaisseur: e.epaisseur ?? 2 });
    else if (e.type === 'poly') g += polygone(e.points, { couleur: col(e.couleur, ENCRE), fond: e.fond ? col(e.fond) : 'none', opacite: e.opacite ?? 0.15, epaisseur: e.epaisseur ?? 2 });
    else if (e.type === 'rect') g += `<rect x="${nb(e.x)}" y="${nb(e.y)}" width="${nb(e.w)}" height="${nb(e.h)}" rx="${e.rx ?? 0}" fill="${e.fond ? col(e.fond) : 'none'}" fill-opacity="${e.opacite ?? 1}" stroke="${e.bord ? col(e.bord) : 'none'}" stroke-width="${e.epaisseur ?? 1.6}"/>`;
    else if (e.type === 'chemin') g += `<path d="${e.d}" fill="${e.fond ? col(e.fond) : 'none'}" fill-opacity="${e.opacite ?? 0.15}" stroke="${col(e.couleur, ENCRE)}" stroke-width="${e.epaisseur ?? 2}"${e.pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
    else if (e.type === 'point') g += point(e.x, e.y, e.nom || '', { couleur: col(e.couleur, ENCRE), dx: e.dx ?? 10, dy: e.dy ?? -8, taille: e.taille || 15 });
    else if (e.type === 'vec') g += vec(e.x, e.y, e.t, { taille: e.taille || 16, couleur: col(e.couleur, ENCRE) });
    else if (e.type === 'arc') g += arcPx(e.x, e.y, e.r, e.a1, e.a2, { couleur: col(e.couleur, ORANGE), pointe: e.pointe || false, epaisseur: e.epaisseur ?? 1.8 });
    else if (e.type === 'droit') g += `<path d="M ${nb(e.x + e.u[0] * 12)} ${nb(e.y + e.u[1] * 12)} L ${nb(e.x + (e.u[0] + e.v[0]) * 12)} ${nb(e.y + (e.u[1] + e.v[1]) * 12)} L ${nb(e.x + e.v[0] * 12)} ${nb(e.y + e.v[1] * 12)}" fill="none" stroke="${ENCRE}" stroke-width="1.5"/>`;
    else if (e.type === 'brut') g += e.svg;
  }
  return enveloppe(W, H, g);
}

/** Plusieurs panneaux côte à côte : panneaux = [{ schema, params, x, y, w, h, titre }]. */
function panneaux({ W = 640, H = 300, panneaux: liste = [] } = {}) {
  let g = '';
  liste.forEach((q, i) => {
    const svg = SCHEMAS[q.schema]({ ...q.params, idZone: 'zone' + i });
    g += svg.replace('<svg ', `<svg x="${q.x}" y="${q.y}" width="${q.w}" height="${q.h}" `);
    if (q.titre) g += texteRiche(q.x + q.w / 2, q.y - 8, q.titre, { taille: 14, gras: true, couleur: q.couleurTitre ? col(q.couleurTitre) : ENCRE });
  });
  return enveloppe(W, H, g);
}

/** Droite des moindres carrés de y en x. */
function moindresCarres(pts) {
  const n = pts.length;
  const mx = pts.reduce((s, q) => s + q[0], 0) / n;
  const my = pts.reduce((s, q) => s + q[1], 0) / n;
  const sxy = pts.reduce((s, q) => s + (q[0] - mx) * (q[1] - my), 0);
  const sxx = pts.reduce((s, q) => s + (q[0] - mx) ** 2, 0);
  const a = sxy / sxx;
  return { a, b: my - a * mx, mx, my };
}

export const SCHEMAS = { graphe, arbre, batons, libre, panneaux, barres };
export const POSES = [];
const pose = (fiche, cle, schema, params, legende, apres) => POSES.push({ fiche, cle, schema, params, legende, apres: apres && apres.replace(/’/g, "'") });
const PI = Math.PI;

// Figures communes à plusieurs fiches
  const A = [90, 240], B = [460, 240], C = [200, 70];
  const angAC = (Math.atan2(A[1] - C[1], C[0] - A[0]) * 180) / Math.PI;
const ALKASHI = {
    W: 520, H: 300, elements: [
      { type: 'poly', points: [A, B, C], couleur: 'encre', fond: 'bleu', opacite: 0.07 },
      { type: 'arc', x: A[0], y: A[1], r: 40, a1: 0, a2: angAC },
      { type: 'texte', x: A[0] - 14, y: A[1] + 22, t: 'A', gras: true, taille: 16 },
      { type: 'texte', x: B[0] + 14, y: B[1] + 20, t: 'B', gras: true, taille: 16 },
      { type: 'texte', x: C[0], y: C[1] - 12, t: 'C', gras: true, taille: 16 },
      { type: 'texte', x: (A[0] + B[0]) / 2, y: A[1] + 26, t: 'c = AB', couleur: 'bleu', taille: 15 },
      { type: 'texte', x: (A[0] + C[0]) / 2 - 18, y: (A[1] + C[1]) / 2, t: 'b = AC', couleur: 'vert', taille: 15, ancre: 'end' },
      { type: 'texte', x: (B[0] + C[0]) / 2 + 16, y: (B[1] + C[1]) / 2, t: 'a = BC', couleur: 'rouge', taille: 15, ancre: 'start' },
      { type: 'texte', x: A[0] + 50, y: A[1] - 14, t: 'Â', couleur: 'orange', taille: 15 },
      { type: 'texte', x: 260, y: 30, t: 'a² = b² + c² − 2bc cos Â', taille: 15, gras: true },
    ],
};

// ───────────────────────── Première technologique ─────────────────────────
{
  const F = 'premiere-techno/maths/derivation';
  const f = (x) => x * x;
  const sec = (m) => (x) => 1 + ((m * m - 1) / (m - 1)) * (x - 1);
  pose(F, 'secantes-tangente', 'graphe', {
    W: 520, H: 400, xmin: -1, xmax: 3.6, ymin: -1, ymax: 10, pasX: 1, pasY: 1,
    courbes: [
      { f, couleur: 'bleu', nom: '𝒞', nx: -0.7, ndx: 0, ndy: -12 },
      { f: sec(3), couleur: 'orange', epaisseur: 1.6, pointilles: true },
      { f: sec(2), couleur: 'orange', epaisseur: 1.6, pointilles: true },
      { f: sec(1.5), couleur: 'orange', epaisseur: 1.6, pointilles: true },
      { f: (x) => 2 * x - 1, couleur: 'rouge', epaisseur: 2.6, nom: 'tangente en A', nx: 3.0, ndx: 0, ndy: 26 },
    ],
    points: [
      { x: 1, y: 1, nom: 'A', dx: 14, dy: 14 },
      { x: 3, y: 9, nom: 'M₁', couleur: 'orange', dx: -18, dy: -4 },
      { x: 2, y: 4, nom: 'M₂', couleur: 'orange', dx: -18, dy: -4 },
      { x: 1.5, y: 2.25, nom: 'M₃', couleur: 'orange', dx: -18, dy: -6 },
    ],
  }, 'Quand le point M se rapproche de A sur la courbe, les sécantes (AM) pivotent et se rapprochent de la tangente en A, en rouge.', '## 1. Des sécantes à la tangente');
  pose(F, 'tangente-x2-en-3', 'graphe', {
    W: 520, H: 400, xmin: -1, xmax: 5, ymin: -4, ymax: 16, pasX: 1, pasY: 2,
    courbes: [
      { f, couleur: 'bleu', nom: 'y = x²', nx: 3.9, ndx: -36, ndy: 0 },
      { f: (x) => 6 * x - 9, couleur: 'rouge', nom: 'y = 6x − 9', nx: 2.2, ndx: 50, ndy: 16 },
    ],
    segments: [{ x1: 3, y1: 0, x2: 3, y2: 9 }, { x1: 0, y1: 9, x2: 3, y2: 9 }],
    points: [{ x: 3, y: 9, nom: 'A(3 ; 9)', dx: -42, dy: -8 }],
  }, 'La tangente à la courbe de x² au point d’abscisse 3 a pour pente f′(3) = 6 et passe par le point A(3 ; 9) : son équation est y = 6x − 9.', '## 3. Équation réduite de la tangente');
  const g3 = (x) => x ** 3 - 3 * x;
  pose(F, 'extremum-et-contre-exemple', 'panneaux', {
    W: 640, H: 300,
    panneaux: [
      { schema: 'graphe', x: 0, y: 30, w: 320, h: 270, titre: 'x³ − 3x : deux extrémums', params: {
        W: 320, H: 270, xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 3,
        courbes: [{ f: g3, couleur: 'bleu' }],
        traits: [{ x1: -1.8, y1: 2, x2: -0.2, y2: 2, couleur: 'rouge' }, { x1: 0.2, y1: -2, x2: 1.8, y2: -2, couleur: 'rouge' }],
        points: [{ x: -1, y: 2, nom: 'max', dy: -10, dx: 0 }, { x: 1, y: -2, nom: 'min', dy: 22, dx: 0 }],
      } },
      { schema: 'graphe', x: 320, y: 30, w: 320, h: 270, titre: 'x³ : f′(0) = 0, pas d’extrémum', params: {
        W: 320, H: 270, xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 3,
        courbes: [{ f: (x) => x ** 3, couleur: 'bleu' }],
        traits: [{ x1: -1.2, y1: 0, x2: 1.2, y2: 0, couleur: 'rouge' }],
        points: [{ x: 0, y: 0 }],
      } },
    ],
  }, 'À gauche, la tangente est horizontale en chaque extrémum, car f′ change de signe. À droite, la tangente est horizontale en 0 mais x³ reste croissante : aucun extrémum.', '## 6. Extrémums');
}
{
  const F = 'premiere-techno/maths/fonctions-variable-reelle';
  pose(F, 'taux-variation-secante', 'graphe', {
    W: 520, H: 400, xmin: -1, xmax: 5, ymin: -2, ymax: 18, pasX: 1, pasY: 2,
    courbes: [
      { f: (x) => x * x, couleur: 'bleu', nom: 'y = x²', nx: 3.2, ndx: 34, ndy: 10 },
      { f: (x) => 1 + 5 * (x - 1), couleur: 'rouge', epaisseur: 2, nom: 'sécante : pente 5', nx: 2.4, ndx: -66, ndy: -6 },
    ],
    traits: [{ x1: 1, y1: 1, x2: 4, y2: 1, couleur: 'vert', pointilles: true }, { x1: 4, y1: 1, x2: 4, y2: 16, couleur: 'vert', pointilles: true }],
    textes: [{ x: 2.5, y: 1.5, t: 'b − a = 3', couleur: 'vert' }, { x: 4.12, y: 8.5, t: 'f(b) − f(a) = 15', couleur: 'vert', ancre: 'start' }],
    points: [{ x: 1, y: 1, nom: 'A', dx: -12, dy: -8 }, { x: 4, y: 16, nom: 'B', dx: -14, dy: -2 }],
  }, 'Entre 1 et 4, la fonction carré passe de 1 à 16 : le taux de variation 15 ÷ 3 = 5 est la pente de la sécante (AB).', '### Définition');
  const p = (x) => x * x - 4 * x + 3;
  pose(F, 'parabole-elements', 'graphe', {
    W: 520, H: 380, xmin: -1.5, xmax: 5.5, ymin: -2, ymax: 6,
    courbes: [{ f: p, couleur: 'bleu', nom: 'y = x² − 4x + 3', nx: 4.85, ndx: -70, ndy: -4 }],
    segments: [{ x1: 2, y1: -2, x2: 2, y2: 6, couleur: 'violet' }, { x1: 0, y1: 3, x2: 4, y2: 3 }],
    points: [
      { x: 2, y: -1, nom: 'S(2 ; −1)', couleur: 'rouge', dx: 44, dy: 6 },
      { x: 1, y: 0, couleur: 'vert' }, { x: 3, y: 0, couleur: 'vert' },
      { x: 0, y: 3, nom: '', couleur: 'orange' }, { x: 4, y: 3, nom: '', couleur: 'orange' },
    ],
    textes: [{ x: 2.1, y: 5.4, t: 'axe x = 2', couleur: 'violet', ancre: 'start' }, { x: 2, y: 3.25, t: 'même image', couleur: 'orange', taille: 13 }],
  }, 'Parabole de f(x) = x² − 4x + 3 : sommet S(2 ; −1), axe de symétrie x = 2, racines 1 et 3 ; les points d’abscisses 0 et 4, symétriques par rapport à 2, ont la même image.', '### Éléments caractéristiques de la parabole');
  pose(F, 'resolution-graphique', 'graphe', {
    W: 520, H: 380, xmin: -1.5, xmax: 5.5, ymin: -2, ymax: 6,
    courbes: [{ f: p, couleur: 'bleu', nom: '𝒞_f', nx: 5, ndx: 18, ndy: 10 }, { f: () => 3, couleur: 'orange', epaisseur: 2, nom: 'y = 3', nx: 1.9, ndy: -8 }],
    segments: [{ x1: 0, y1: 0, x2: 0, y2: 3 }, { x1: 4, y1: 0, x2: 4, y2: 3 }],
    traits: [{ x1: -1.5, y1: 0, x2: 0, y2: 0, couleur: 'rouge', epaisseur: 5 }, { x1: 4, y1: 0, x2: 5.5, y2: 0, couleur: 'rouge', epaisseur: 5 }],
    points: [{ x: 0, y: 3, couleur: 'orange' }, { x: 4, y: 3, couleur: 'orange' }],
    textes: [{ x: -0.75, y: -1.4, t: 'f(x) > 3', couleur: 'rouge' }, { x: 4.75, y: -1.4, t: 'f(x) > 3', couleur: 'rouge' }],
  }, 'Pour f(x) = x² − 4x + 3, f(x) = 3 pour x = 0 et x = 4 ; la courbe est au-dessus de la droite y = 3 à gauche de 0 et à droite de 4 : ces abscisses sont les solutions de l’inéquation.', '## 5. Résoudre graphiquement');
}
{
  const F = 'premiere-techno/maths/probabilites-variables-aleatoires';
  const n = (nom, p, enfants, fin) => ({ nom, p, enfants, fin });
  const un = (s) => (s.split('S').length - 1 === 1);
  const feuille = (chemin) => {
    const valeurs = chemin.split('').map((c) => (c === 'S' ? '0,2' : '0,8'));
    return { nom: chemin[2], p: chemin[2] === 'S' ? '0,2' : '0,8', fin: un(chemin) ? `${chemin} : ${valeurs.join(' × ')} = 0,128` : chemin, couleurFin: un(chemin) ? 'orange' : undefined };
  };
  const niveau2 = (a) => ['S', 'É'].map((b) => n(b, b === 'S' ? '0,2' : '0,8', ['S', 'É'].map((c) => feuille(a + b + c))));
  pose(F, 'arbre-trois-epreuves', 'arbre', {
    W: 600, H: 400, pasX: 120, x0: 24, finX: 400,
    branches: ['S', 'É'].map((a) => n(a, a === 'S' ? '0,2' : '0,8', niveau2(a))),
  }, 'Arbre de trois épreuves de Bernoulli avec p = 0,2 : trois chemins donnent exactement un succès, chacun de probabilité 0,128, d’où P = 3 × 0,128 = 0,384.', '### Méthode');
  pose(F, 'loi-nombre-succes', 'batons', {
    W: 520, H: 300, n: 3, p: 0.2, pasY: 0.1, ymax: 0.6, titre: 'Nombre de succès pour n = 3 et p = 0,2',
  }, 'Loi du nombre de succès sur trois épreuves (p = 0,2) : 0,512 ; 0,384 ; 0,096 ; 0,008. Les hauteurs des bâtons ont pour somme 1.', '## 4. Loi de probabilité');
}
{
  const F = 'premiere-techno/maths/statistiques-deux-variables';
  const pts = [[1, 3], [2, 5], [3, 8], [4, 10]];
  const r = moindresCarres(pts); // y = 2,4x + 0,5
  const nuage = [[1, 2], [2, 4.5], [3, 3.5], [4, 6], [5, 5.5], [6, 8]];
  const q = moindresCarres(nuage);
  pose(F, 'moindres-carres', 'graphe', {
    W: 520, H: 360, xmin: -0.5, xmax: 7.3, ymin: -0.8, ymax: 9.4,
    courbes: [{ f: (x) => q.a * x + q.b, couleur: 'bleu', nom: 'droite d’ajustement', nx: 6.2, ndx: -10, ndy: 34 }],
    segments: nuage.map(([x, y]) => ({ x1: x, y1: y, x2: x, y2: q.a * x + q.b, couleur: 'orange', pointilles: false, epaisseur: 2.6 })),
    points: [...nuage.map(([x, y]) => ({ x, y })), { x: q.mx, y: q.my, nom: 'G', couleur: 'rouge', dx: -12, dy: -8 }],
    textes: [{ x: 2.2, y: 6.6, t: 'écarts verticaux', couleur: 'orange' }],
  }, 'Un nuage de points et sa droite des moindres carrés : elle passe par le point moyen G et rend minimale la somme des carrés des écarts verticaux, en orange.', '### La méthode des moindres carrés');
  pose(F, 'interpoler-extrapoler', 'graphe', {
    W: 520, H: 360, xmin: -0.5, xmax: 8, ymin: -1, ymax: 20, pasY: 2,
    rects: [{ x1: 1, y1: -1, x2: 4, y2: 20, couleur: 'vert', opacite: 0.1, epaisseur: 0 }],
    courbes: [{ f: (x) => r.a * x + r.b, a: 0, b: 4, couleur: 'bleu' }, { f: (x) => r.a * x + r.b, a: 4, b: 8, couleur: 'bleu', pointilles: true }],
    points: pts.map(([x, y]) => ({ x, y })),
    textes: [{ x: 2.5, y: 17.5, t: 'interpoler', couleur: 'vert', gras: true }, { x: 6.3, y: 17.5, t: 'extrapoler ⚠', couleur: 'rouge', gras: true }],
  }, 'Entre la plus petite et la plus grande valeur observée de x (zone verte), on interpole ; au-delà, on extrapole, en supposant que la tendance se prolonge.', '## 4. Utiliser l’ajustement');
}
{
  const F = 'premiere-techno/maths/suites-numeriques';
  pose(F, 'suite-arithmetique-points', 'graphe', {
    W: 520, H: 360, xmin: -0.5, xmax: 7.5, ymin: -2, ymax: 24, pasY: 2, nomX: 'n', nomY: 'uₙ',
    courbes: [{ f: (x) => 3 * x + 2, couleur: '#9fb6d6', epaisseur: 1.4, pointilles: true }],
    points: [0, 1, 2, 3, 4, 5, 6, 7].map((k) => ({ x: k, y: 3 * k + 2, couleur: 'bleu', r: 5 })),
    textes: [{ x: 5.4, y: 10, t: 'uₙ = 3n + 2', couleur: 'bleu', gras: true }, { x: 2.5, y: 6.6, t: '+1', couleur: 'vert', gras: true }, { x: 3.25, y: 9.1, t: '+3', couleur: 'vert', gras: true }],
    traits: [{ x1: 2, y1: 8, x2: 3, y2: 8, couleur: 'vert', epaisseur: 2 }, { x1: 3, y1: 8, x2: 3, y2: 11, couleur: 'vert', epaisseur: 2 }],
    textesPx: [],
  }, 'Points (n ; uₙ) de la suite arithmétique uₙ = 3n + 2 : ils sont alignés, car on ajoute toujours 3 quand n augmente de 1.', '### Représentation');
  pose(F, 'capital-geometrique', 'graphe', {
    W: 540, H: 360, xmin: -1.5, xmax: 32, ymin: -1000, ymax: 18500, pasX: 5, pasY: 2000, marge: 34, nomX: 'n', nomY: 'uₙ (€)',
    formatY: (y) => String(y).replace(/(\d)(\d{3})$/, '$1 $2'),
    points: Array.from({ length: 31 }, (_, k) => ({ x: k, y: 5000 * 1.04 ** k, couleur: k === 10 ? 'rouge' : 'bleu', r: k === 10 ? 5 : 3.6 })),
    textes: [{ x: 10, y: 7401 + 1500, t: 'u₁₀ ≈ 7 401 €', couleur: 'rouge', gras: true }, { x: 12, y: 15500, t: 'uₙ = 5 000 × 1,04^n', couleur: 'bleu', gras: true }],
}, 'Capital de 5 000 € placé à 4 % par an, sur 30 ans : chaque année, on multiplie par 1,04. Les points ne sont pas alignés, la croissance s’accélère ; u₁₀ ≈ 7 401 €.', '## 4. Le lien avec les pourcentages — le cœur des applications');
}
{
  const F = 'premiere-techno/pc-maths-sti2d-stl/nombres-complexes';
  const base = { W: 520, H: 340, xmin: -1, xmax: 4.6, ymin: -3, ymax: 3.4, nomX: '', nomY: '' };
  pose(F, 'plan-complexe-image', 'graphe', {
    ...base, ymin: -1, ymax: 3.4, H: 300,
    segments: [{ x1: 3, y1: 0, x2: 3, y2: 2 }, { x1: 0, y1: 2, x2: 3, y2: 2 }],
    fleches: [{ x1: 0, y1: 0, x2: 3, y2: 2, couleur: 'bleu' }],
    points: [{ x: 3, y: 2, nom: 'M(3 ; 2)', dx: 36, dy: -6 }, { x: 3, y: 0, nom: 'a = 3', couleur: 'rouge', dx: 4, dy: 30 }, { x: 0, y: 2, nom: 'b = 2', couleur: 'vert', dx: 30, dy: -9 }],
    textesPx: [{ x: 500, y: 250, t: 'axe des réels', ancre: 'end', couleur: 'gris', taille: 13 }, { x: 140, y: 34, t: 'axe des imaginaires purs', ancre: 'start', couleur: 'gris', taille: 13 }],
    textes: [{ x: 1.5, y: 1.35, t: 'z = 3 + 2i', couleur: 'bleu', gras: true }],
  }, 'Le point M(3 ; 2) est l’image du nombre complexe z = 3 + 2i : la partie réelle se lit en abscisse, la partie imaginaire en ordonnée.', '## 3. Représentation géométrique');
  pose(F, 'conjugue-symetrie', 'graphe', {
    ...base,
    segments: [{ x1: 3, y1: 2, x2: 3, y2: -2, couleur: 'violet' }],
    points: [{ x: 3, y: 2, nom: 'M : z = 3 + 2i', dx: 0, dy: -12, couleur: 'bleu' }, { x: 3, y: -2, nom: 'M′ : z̄ = 3 − 2i', dx: 0, dy: 24, couleur: 'rouge' }],
    textes: [{ x: 3.15, y: 0.9, t: 'symétrie', couleur: 'violet', ancre: 'start' }],
  }, 'Le conjugué z̄ = 3 − 2i a pour image M′, symétrique de M par rapport à l’axe des abscisses (axe des réels).', '## 4. Conjugué');
  pose(F, 'module-argument', 'graphe', {
    W: 460, orthonorme: true, xmin: -0.4, xmax: 1.8, ymin: -0.3, ymax: 1.4, pasX: 0.5, pasY: 0.5, nomX: '', nomY: '',
    segments: [{ x1: 1, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 1, x2: 1, y2: 1 }],
    fleches: [{ x1: 0, y1: 0, x2: 1, y2: 1, couleur: 'bleu' }],
    arcs: [{ x: 0, y: 0, r: 60, a1: 0, a2: PI / 4, couleur: 'orange', fleche: true }],
    points: [{ x: 1, y: 1, nom: 'M(1 ; 1)', dx: 38, dy: -4 }],
    textes: [{ x: 0.36, y: 0.12, t: 'θ = π/4', couleur: 'orange', ancre: 'start' }, { x: 0.38, y: 0.62, t: 'r = √2', couleur: 'bleu', gras: true, ancre: 'end' }],
  }, 'Pour z = 1 + i : le module r = √2 est la distance OM et l’argument θ = π/4 est l’angle entre l’axe des abscisses et le vecteur OM.', '## 7. Argument et forme trigonométrique');
}
{
  const F = 'premiere-techno/pc-maths-sti2d-stl/produit-scalaire';
  pose(F, 'projection-orthogonale', 'libre', {
    W: 520, H: 280, elements: [
      { type: 'fleche', x1: 70, y1: 220, x2: 450, y2: 220, couleur: 'bleu', epaisseur: 2.6 },
      { type: 'fleche', x1: 70, y1: 220, x2: 310, y2: 60, couleur: 'rouge', epaisseur: 2.6 },
      { type: 'ligne', x1: 310, y1: 60, x2: 310, y2: 220, couleur: 'gris', epaisseur: 1.6, pointilles: true },
      { type: 'fleche', x1: 70, y1: 236, x2: 310, y2: 236, couleur: 'vert', epaisseur: 3 },
      { type: 'droit', x: 310, y: 220, u: [-1, 0], v: [0, -1] },
      { type: 'arc', x: 70, y: 220, r: 50, a1: 0, a2: 33.69 },
      { type: 'texte', x: 132, y: 205, t: 'θ', couleur: 'orange', taille: 16 },
      { type: 'vec', x: 470, y: 226, t: 'u', couleur: 'bleu' },
      { type: 'vec', x: 196, y: 128, t: 'v', couleur: 'rouge' },
      { type: 'vec', x: 190, y: 268, t: "v'", couleur: 'vert' },
      { type: 'texte', x: 330, y: 150, t: 'projection', couleur: 'gris', ancre: 'start', taille: 13 },
    ],
  }, 'Le vecteur v′, en vert, est le projeté orthogonal de v sur la direction de u : le produit scalaire u · v est égal à ‖u‖ × ‖v′‖ lorsque v′ et u sont de même sens.', '### c. Par projection orthogonale');
  pose(F, 'al-kashi', 'libre', ALKASHI, 'Dans le triangle ABC, le côté a = BC est opposé à l’angle Â : c’est cet angle qu’on utilise dans la formule d’Al-Kashi.', '### Théorème d\'Al-Kashi');
  pose(F, 'travail-force', 'libre', {
    W: 540, H: 250, elements: [
      { type: 'ligne', x1: 20, y1: 200, x2: 520, y2: 200, couleur: 'gris', epaisseur: 2 },
      { type: 'rect', x: 60, y: 150, w: 70, h: 50, rx: 4, fond: '#eef3fb', bord: 'bleu' },
      { type: 'rect', x: 400, y: 150, w: 70, h: 50, rx: 4, fond: 'none', bord: '#9fb6d6' },
      { type: 'fleche', x1: 95, y1: 225, x2: 435, y2: 225, couleur: 'encre', epaisseur: 2.2 },
      { type: 'texte', x: 95, y: 244, t: 'A', gras: true }, { type: 'texte', x: 435, y: 244, t: 'B', gras: true },
      { type: 'fleche', x1: 130, y1: 175, x2: 130 + 150 * Math.cos(PI / 6), y2: 175 - 150 * Math.sin(PI / 6), couleur: 'rouge', epaisseur: 3 },
      { type: 'ligne', x1: 130, y1: 175, x2: 300, y2: 175, couleur: 'gris', epaisseur: 1.4, pointilles: true },
      { type: 'arc', x: 130, y: 175, r: 55, a1: 0, a2: 30 },
      { type: 'texte', x: 196, y: 166, t: 'α', couleur: 'orange', taille: 16 },
      { type: 'vec', x: 270, y: 92, t: 'F', couleur: 'rouge' },
      { type: 'texte', x: 265, y: 30, t: 'W = F × AB × cos α', taille: 15, gras: true },
    ],
  }, 'Une force F qui fait un angle α avec le déplacement AB effectue le travail W = F × AB × cos α : seule sa composante dans la direction du déplacement travaille.', '## 7. Le lien avec la physique — le travail d\'une force');
}
{
  const F = 'premiere-techno/pc-maths-sti2d-stl/trigonometrie';
  const gx = [[-2, '−2π'], [-1.5, '−3π/2'], [-1, '−π'], [-0.5, '−π/2'], [0.5, 'π/2'], [1, 'π'], [1.5, '3π/2'], [2, '2π']].map(([k, t]) => ({ x: k * PI, t }));
  pose(F, 'courbes-cos-sin', 'graphe', {
    W: 620, H: 260, xmin: -2.2 * PI, xmax: 2.25 * PI, ymin: -1.5, ymax: 1.6, pasX: PI / 2, pasY: 1, gradX: gx, gradY: [{ y: 1, t: '1' }, { y: -1, t: '−1' }], origine: true,
    courbes: [{ f: Math.cos, couleur: 'bleu', nom: 'cos', nx: 2 * PI, ndx: 0, ndy: -10, gras: true }, { f: Math.sin, couleur: 'rouge', nom: 'sin', nx: 0.5 * PI, ndx: 0, ndy: -10, gras: true }],
  }, 'Courbes de cosinus (en bleu) et de sinus (en rouge) : elles sont périodiques de période 2π, et leurs valeurs restent entre −1 et 1.', '## 3. Les fonctions cosinus et sinus');
  const u = (t) => 325 * Math.cos(100 * PI * t);
  pose(F, 'sinusoide-secteur', 'graphe', {
    W: 600, H: 320, xmin: -0.002, xmax: 0.046, ymin: -420, ymax: 470, pasX: 0.01, pasY: 100, marge: 34, nomX: 't (s)', nomY: 'u (V)',
    gradX: [0.01, 0.02, 0.03, 0.04].map((x) => ({ x, t: fmt(x) })), gradY: [{ y: 325, t: '325' }, { y: -325, t: '−325' }], origine: true,
    courbes: [{ f: u, a: 0, b: 0.045, couleur: 'bleu' }],
    fleches: [{ x1: 0.0005, y1: 400, x2: 0.02, y2: 400, couleur: 'vert', epaisseur: 2, pointe: 9 }, { x1: 0.0195, y1: 400, x2: 0, y2: 400, couleur: 'vert', epaisseur: 2, pointe: 9 },
      { x1: 0.03, y1: 0, x2: 0.03, y2: -325, couleur: 'rouge', epaisseur: 2, pointe: 9 }],
    segments: [{ x1: 0.02, y1: 325, x2: 0.02, y2: 400 }, { x1: 0, y1: -325, x2: 0.045, y2: -325 }],
    textes: [{ x: 0.01, y: 420, t: 'T = 0,02 s', couleur: 'vert', gras: true }, { x: 0.0312, y: -150, t: 'A = 325 V', couleur: 'rouge', gras: true, ancre: 'start' }],
  }, 'Tension du secteur u(t) = 325 cos(100πt) : elle oscille entre −325 V et 325 V (amplitude A = 325 V) et se répète toutes les 0,02 s (période T), soit 50 Hz.', '### Période et fréquence');
}

// ───────────────────────── Première, enseignement scientifique ─────────────────────────
{
  const F = 'premiere/maths-enseignement-scientifique/information-chiffree';
  const chaine = (valeurs, ops, bas, couleurs) => {
    const el = [];
    const n = valeurs.length;
    const w = 110, h = 52, esp = (560 - 40 - n * w) / (n - 1);
    valeurs.forEach((v, i) => el.push({ type: 'boite', x: 20 + i * (w + esp), y: 70, w, h, t: v, taille: 17, gras: true }));
    ops.forEach((o, i) => {
      const x1 = 20 + i * (w + esp) + w + 6, x2 = 20 + (i + 1) * (w + esp) - 6;
      el.push({ type: 'fleche', x1, y1: 96, x2, y2: 96, couleur: couleurs[i] });
      el.push({ type: 'texte', x: (x1 + x2) / 2, y: 86, t: o, couleur: couleurs[i], gras: true, taille: 15 });
      el.push({ type: 'texte', x: (x1 + x2) / 2, y: 118, t: bas[i], couleur: couleurs[i], taille: 13 });
    });
    return el;
  };
  pose(F, 'evolutions-successives', 'libre', {
    W: 560, H: 200, elements: [
      ...chaine(['100 €', '150 €', '75 €'], ['× 1,5', '× 0,5'], ['+50 %', '−50 %'], ['vert', 'rouge']),
      { type: 'chemin', d: 'M 75 126 Q 280 200 485 126', couleur: 'violet', epaisseur: 2 },
      { type: 'fleche', x1: 470, y1: 133, x2: 485, y2: 126, couleur: 'violet', pointe: 9 },
      { type: 'texte', x: 280, y: 186, t: 'global : × 0,75, soit −25 % (et non 0 %)', couleur: 'violet', gras: true, taille: 14 },
      { type: 'texte', x: 280, y: 36, t: 'Pour un prix de départ de 100 €', couleur: 'gris', taille: 13 },
    ],
  }, 'Une hausse de 50 % puis une baisse de 50 % : on multiplie les coefficients, 1,5 × 0,5 = 0,75. Le prix final vaut 75 % du prix de départ, soit une baisse de 25 %.', '## 3. Évolutions successives — le piège central du chapitre');
  pose(F, 'evolution-reciproque', 'libre', {
    W: 560, H: 150, elements: [
      ...chaine(['100 €', '80 €', '100 €'], ['× 0,8', '× 1,25'], ['−20 %', '+25 %'], ['rouge', 'vert']).map((e) => ({ ...e, y: e.y !== undefined ? e.y - 40 : e.y, y1: e.y1 !== undefined ? e.y1 - 40 : e.y1, y2: e.y2 !== undefined ? e.y2 - 40 : e.y2 })),
      { type: 'texte', x: 280, y: 125, t: '1,25 = 1 ÷ 0,8 : pour revenir au prix initial, il faut +25 %', couleur: 'violet', gras: true, taille: 14 },
    ],
  }, 'Après une baisse de 20 % (× 0,8), il faut multiplier par 1 ÷ 0,8 = 1,25, c’est-à-dire augmenter de 25 %, pour revenir au prix initial.', '## 4. Évolution réciproque');
  const donnees = [{ t: 'Année 1', v: 50, couleur: 'bleu' }, { t: 'Année 2', v: 52, couleur: 'orange' }];
  pose(F, 'axe-tronque', 'panneaux', {
    W: 620, H: 300, panneaux: [
      { schema: 'barres', x: 0, y: 0, w: 300, h: 300, params: { W: 300, H: 300, valeurs: donnees, ymin: 0, ymax: 60, pas: 10, titre: 'Axe partant de 0' } },
      { schema: 'barres', x: 320, y: 0, w: 300, h: 300, params: { W: 300, H: 300, valeurs: donnees, ymin: 49, ymax: 52.5, pas: 0.5, titre: 'Axe tronqué (à partir de 49)' } },
    ],
  }, 'Les mêmes données, 50 puis 52 : avec un axe qui part de 0, la hausse paraît modeste ; avec un axe tronqué, elle semble énorme, alors qu’elle n’est que de 4 %.', '## 7. Lire un graphique d’un œil critique');
}
{
  const F = 'premiere/maths-enseignement-scientifique/phenomenes-aleatoires';
  pose(F, 'arbre-depistage', 'arbre', {
    W: 600, H: 280, pasX: 150, finX: 360,
    branches: [
      { nom: 'M', p: '0,1', enfants: [{ nom: 'T', p: '0,95', fin: 'P(M ∩ T) = 0,1 × 0,95 = 0,095', couleurFin: 'orange' }, { nom: '!T', p: '0,05', fin: 'P(M ∩ !T) = 0,005' }] },
      { nom: '!M', p: '0,9', enfants: [{ nom: 'T', p: '0,1', fin: 'P(!M ∩ T) = 0,9 × 0,1 = 0,09', couleurFin: 'orange' }, { nom: '!T', p: '0,9', fin: 'P(!M ∩ !T) = 0,81' }] },
    ],
  }, 'Arbre du dépistage (M : malade, T : test positif). Les deux chemins qui mènent à T donnent P(T) = 0,095 + 0,09 = 0,185, comme dans le tableau croisé.', '## 3. L’arbre pondéré');
}
{
  const F = 'premiere/maths-enseignement-scientifique/phenomenes-evolution';
  const P = (n) => 100 * 1.1 ** n, R = (n) => 200 + 10 * n;
  pose(F, 'malthus', 'graphe', {
    W: 560, H: 360, xmin: -1, xmax: 21, ymin: -40, ymax: 720, pasX: 2, pasY: 100, marge: 34, nomX: '', nomY: '',
    courbes: [{ f: P, a: 0, b: 20, couleur: 'rouge', nom: 'population (exponentielle)', nx: 17.2, ndx: -86, ndy: -8 }, { f: R, a: 0, b: 20, couleur: 'vert', nom: 'ressources (affine)', nx: 5, ndx: 0, ndy: -14 }],
    textesPx: [{ x: 300, y: 30, t: 'Schéma, unités arbitraires', couleur: 'gris', taille: 13 }, { x: 526, y: 352, t: 'temps (années)', couleur: 'gris', taille: 12, ancre: 'end' }],
  }, 'Modèle de Malthus : des ressources qui croissent de façon affine finissent toujours par être dépassées par une population qui croît de façon exponentielle, même si elles partent avec une avance.', '### Modèle de Malthus — population et ressources');
  const T = 5730;
  pose(F, 'demi-vie-carbone', 'graphe', {
    W: 580, H: 330, xmin: -1500, xmax: 25000, ymin: -8, ymax: 112, pasX: 5730, pasY: 12.5, marge: 34, nomX: 't (ans)', nomY: 'N (%)',
    gradX: [1, 2, 3, 4].map((k) => ({ x: k * T, t: (k * T).toLocaleString('fr-FR').replace(/\s/g, ' ') })),
    gradY: [{ y: 100, t: '100 %' }, { y: 50, t: '50 %' }, { y: 25, t: '25 %' }, { y: 12.5, t: '12,5 %' }], origine: true,
    courbes: [{ f: (t) => 100 * 0.5 ** (t / T), a: 0, b: 24500, couleur: 'bleu' }],
    segments: [1, 2, 3].flatMap((k) => [{ x1: k * T, y1: 0, x2: k * T, y2: 100 / 2 ** k }, { x1: 0, y1: 100 / 2 ** k, x2: k * T, y2: 100 / 2 ** k }]),
    points: [1, 2, 3].map((k) => ({ x: k * T, y: 100 / 2 ** k, couleur: 'rouge' })),
    textes: [{ x: 15000, y: 80, t: 'carbone 14 : demi-vie ≈ 5 730 ans', couleur: 'bleu' }],
  }, 'Décroissance du carbone 14 : à chaque demi-vie (environ 5 730 ans), la quantité restante est divisée par deux, 50 %, 25 %, 12,5 %… sans jamais atteindre zéro.', '### Décroissance radioactive et demi-vie');
}
{
  const F = 'premiere/maths-enseignement-scientifique/statistiques-bivariees';
  const nuage = [[1, 2], [2, 4.5], [3, 3.5], [4, 6], [5, 5.5], [6, 8]];
  const moy = (t) => [t.reduce((s, q) => s + q[0], 0) / t.length, t.reduce((s, q) => s + q[1], 0) / t.length];
  const G1 = moy(nuage.slice(0, 3)), G2 = moy(nuage.slice(3)), G = moy(nuage);
  const pente = (G2[1] - G1[1]) / (G2[0] - G1[0]);
  pose(F, 'droite-mayer', 'graphe', {
    W: 520, H: 360, xmin: -0.5, xmax: 7.3, ymin: -0.8, ymax: 9.4,
    rects: [{ x1: 0.6, y1: 0.8, x2: 3.4, y2: 7.2, couleur: 'vert', opacite: 0.06 }, { x1: 3.6, y1: 0.8, x2: 6.4, y2: 9, couleur: 'violet', opacite: 0.06 }],
    courbes: [{ f: (x) => G1[1] + pente * (x - G1[0]), couleur: 'bleu', nom: 'droite de Mayer', nx: 6.5, ndx: -14, ndy: 40 }],
    points: [...nuage.map(([x, y]) => ({ x, y, couleur: 'gris' })), { x: G1[0], y: G1[1], nom: 'G₁', couleur: 'vert', dx: -14, dy: -10 }, { x: G2[0], y: G2[1], nom: 'G₂', couleur: 'violet', dx: -14, dy: -10 }, { x: G[0], y: G[1], nom: 'G', couleur: 'rouge', dx: 12, dy: 18 }],
    textes: [{ x: 2, y: 7.6, t: '1er groupe', couleur: 'vert' }, { x: 5, y: 8.4, t: '2e groupe', couleur: 'violet' }],
  }, 'Droite de Mayer : on coupe le nuage en deux groupes de même effectif, on relie leurs points moyens G₁ et G₂ ; la droite passe aussi par le point moyen G du nuage entier.', '## 4. Ajustement affine');
  const r = moindresCarres(nuage);
  pose(F, 'interpoler-extrapoler', 'graphe', {
    W: 520, H: 340, xmin: -0.5, xmax: 12, ymin: -1, ymax: 14, pasY: 2,
    rects: [{ x1: 1, y1: -1, x2: 6, y2: 14, couleur: 'vert', opacite: 0.1, epaisseur: 0 }],
    courbes: [{ f: (x) => r.a * x + r.b, a: 0, b: 6, couleur: 'bleu' }, { f: (x) => r.a * x + r.b, a: 6, b: 12, couleur: 'bleu', pointilles: true }],
    points: nuage.map(([x, y]) => ({ x, y })),
    textes: [{ x: 3.5, y: 12.5, t: 'interpoler', couleur: 'vert', gras: true }, { x: 9.2, y: 12.5, t: 'extrapoler ⚠', couleur: 'rouge', gras: true }],
  }, 'À l’intérieur de l’intervalle des données observées (zone verte), on interpole ; au-delà, on extrapole : rien ne garantit que la tendance se prolonge.', '## 5. Interpoler et extrapoler');
}

// ───────────────────────── Première, spécialité ─────────────────────────
const TANGENTE_X2 = {
  W: 520, H: 400, xmin: -1, xmax: 5, ymin: -4, ymax: 16, pasX: 1, pasY: 2,
  courbes: [
    { f: (x) => x * x, couleur: 'bleu', nom: 'y = x²', nx: 3.9, ndx: -36, ndy: 0 },
    { f: (x) => 6 * x - 9, couleur: 'rouge', nom: 'y = 6x − 9', nx: 2.2, ndx: 50, ndy: 16 },
  ],
  segments: [{ x1: 3, y1: 0, x2: 3, y2: 9 }, { x1: 0, y1: 9, x2: 3, y2: 9 }],
  points: [{ x: 3, y: 9, nom: 'A(3 ; 9)', dx: -42, dy: -8 }],
};
const g3 = (x) => x ** 3 - 3 * x;
const EXTREMUMS = {
  W: 640, H: 300,
  panneaux: [
    { schema: 'graphe', x: 0, y: 30, w: 320, h: 270, titre: 'x³ − 3x : deux extrémums', params: {
      W: 320, H: 270, xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 3,
      courbes: [{ f: g3, couleur: 'bleu' }],
      traits: [{ x1: -1.8, y1: 2, x2: -0.2, y2: 2, couleur: 'rouge' }, { x1: 0.2, y1: -2, x2: 1.8, y2: -2, couleur: 'rouge' }],
      points: [{ x: -1, y: 2, nom: 'max', dy: -10, dx: 0 }, { x: 1, y: -2, nom: 'min', dy: 22, dx: 0 }],
    } },
    { schema: 'graphe', x: 320, y: 30, w: 320, h: 270, titre: 'x³ : f′(0) = 0, pas d’extrémum', params: {
      W: 320, H: 270, xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 3,
      courbes: [{ f: (x) => x ** 3, couleur: 'bleu' }],
      traits: [{ x1: -1.2, y1: 0, x2: 1.2, y2: 0, couleur: 'rouge' }],
      points: [{ x: 0, y: 0 }],
    } },
  ],
};
/** Cercle trigonométrique (repère orthonormé) avec des points M(t). */
function cercleTrigo({ W = 460, points: pts = [], projections = [], bissectrice = false, liens = [], textes = [] } = {}) {
  const P = (t) => [Math.cos(t), Math.sin(t)];
  return graphe({
    W, orthonorme: true, xmin: -1.45, xmax: 1.45, ymin: -1.3, ymax: 1.3, pasX: 0.5, pasY: 0.5, graduer: false, nomX: '', nomY: '',
    gradX: [{ x: 1, t: '1', dx: 8 }, { x: -1, t: '−1', dx: -10 }], gradY: [{ y: 1, t: '1', dy: -6 }, { y: -1, t: '−1', dy: 14 }], origine: true,
    cercles: [{ x: 0, y: 0, r: 1, couleur: 'encre', epaisseur: 2 }],
    courbes: bissectrice ? [{ f: (x) => x, a: -1.3, b: 1.3, couleur: 'gris', epaisseur: 1.2, pointilles: true }] : [],
    segments: [
      ...projections.flatMap((t) => [{ x1: P(t)[0], y1: 0, x2: P(t)[0], y2: P(t)[1] }, { x1: 0, y1: P(t)[1], x2: P(t)[0], y2: P(t)[1] }]),
      ...liens.map(([a, b, c]) => ({ x1: P(a)[0], y1: P(a)[1], x2: P(b)[0], y2: P(b)[1], couleur: c || 'violet' })),
    ],
    traits: pts.filter((q) => q.rayon).map((q) => ({ x1: 0, y1: 0, x2: P(q.t)[0], y2: P(q.t)[1], couleur: q.couleur || 'bleu', epaisseur: 1.8 })),
    points: pts.map((q) => ({ x: P(q.t)[0], y: P(q.t)[1], nom: q.nom, couleur: q.couleur || 'bleu', dx: q.dx ?? 14 * Math.cos(q.t) + 10 * Math.sign(Math.cos(q.t)), dy: q.dy ?? -14 * Math.sin(q.t) + 5, ancre: q.ancre || (Math.cos(q.t) >= 0 ? 'start' : 'end'), taille: q.taille || 14 })),
    textes,
  });
}
SCHEMAS.cercleTrigo = cercleTrigo;
{
  const F = 'premiere/maths-specialite/derivation';
  const sec = (m) => (x) => 9 + ((m * m - 9) / (m - 3)) * (x - 3);
  pose(F, 'secantes-vers-tangente', 'graphe', {
    W: 520, H: 420, xmin: -0.5, xmax: 5.6, ymin: -6, ymax: 31, pasX: 1, pasY: 5,
    courbes: [
      { f: (x) => x * x, couleur: 'bleu', nom: 'y = x²', nx: 1.2, ndx: -10, ndy: -14 },
      ...[5, 4, 3.5].map((m) => ({ f: sec(m), couleur: 'orange', epaisseur: 1.6, pointilles: true })),
      { f: (x) => 6 * x - 9, couleur: 'rouge', nom: 'tangente : pente 6', nx: 5.0, ndx: 0, ndy: 44 },
    ],
    points: [
      { x: 3, y: 9, nom: 'A', dx: 14, dy: 16 },
      { x: 5, y: 25, nom: 'h = 2 : pente 8', couleur: 'orange', dx: -12, dy: -2, ancre: 'end' },
      { x: 4, y: 16, nom: 'h = 1 : pente 7', couleur: 'orange', dx: -12, dy: -2, ancre: 'end' },
      { x: 3.5, y: 12.25, nom: 'h = 0,5 : pente 6,5', couleur: 'orange', dx: -12, dy: -4, ancre: 'end' },
    ],
  }, 'Pour f(x) = x² en a = 3, la sécante passant par A et par le point d’abscisse 3 + h a pour pente 6 + h : quand h tend vers 0, elle se rapproche de la tangente, de pente f′(3) = 6.', '## 2. Nombre dérivé — la limite des sécantes');
  pose(F, 'tangente-x2-en-3', 'graphe', TANGENTE_X2, 'La tangente à la courbe de x² au point d’abscisse 3 a pour pente f′(3) = 6 et passe par le point A(3 ; 9) : son équation est y = 6x − 9.', '## 3. Tangente');
  pose(F, 'approximation-affine-racine', 'graphe', {
    W: 540, H: 340, xmin: 95.5, xmax: 106.5, ymin: 9.74, ymax: 10.34, pasX: 1, pasY: 0.1, marge: 36, nomX: 'x', nomY: 'y',
    courbes: [{ f: Math.sqrt, couleur: 'bleu', epaisseur: 3.4, nom: 'y = √x', nx: 97, ndx: 0, ndy: 26 }, { f: (x) => 10 + 0.05 * (x - 100), couleur: 'rouge', epaisseur: 1.8 }],
    textesPx: [{ x: 60, y: 52, t: 'tangente en 100 : y = 10 + 0,05(x − 100)', couleur: 'rouge', ancre: 'start' }],
    segments: [{ x1: 101, y1: 9.74, x2: 101, y2: 10.05 }, { x1: 100, y1: 9.74, x2: 100, y2: 10 }],
    points: [{ x: 100, y: 10, nom: '(100 ; 10)', dx: -12, dy: -12, ancre: 'end' }, { x: 101, y: 10.05, couleur: 'rouge', nom: '√101 ≈ 10,05', dx: 12, dy: 22, ancre: 'start', couleurNom: 'rouge' }],
  }, 'Près de x = 100, la courbe de la racine carrée et sa tangente se confondent presque : on lit √101 ≈ 10 + 0,05 = 10,05 (valeur exacte 10,0499…).', '## 4. Approximation affine');
}
{
  const F = 'premiere/maths-specialite/fonction-exponentielle';
  pose(F, 'courbe-exp-tangente', 'graphe', {
    W: 520, H: 400, xmin: -4.2, xmax: 2.6, ymin: -1.6, ymax: 8.6,
    courbes: [{ f: Math.exp, couleur: 'bleu', nom: 'y = eˣ', nx: 2.0, ndx: -30, ndy: 0 }, { f: (x) => x + 1, couleur: 'rouge', nom: 'y = x + 1', nx: 2.2, ndx: 8, ndy: 26 }],
    points: [{ x: 0, y: 1, nom: '(0 ; 1)', dx: -30, dy: -10 }, { x: 1, y: Math.E, nom: '(1 ; e)', dx: -12, dy: -10, couleur: 'bleu', ancre: 'end' }],
    segments: [{ x1: 1, y1: 0, x2: 1, y2: Math.E }, { x1: 0, y1: Math.E, x2: 1, y2: Math.E }],
  }, 'Courbe de la fonction exponentielle : elle passe par (0 ; 1) et par (1 ; e), reste au-dessus de l’axe des abscisses et admet en 0 la tangente y = x + 1.', '## 4. Courbe représentative');
  pose(F, 'suite-geometrique-exp', 'graphe', {
    W: 520, H: 340, xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 9.6,
    courbes: [{ f: (x) => Math.exp(0.3 * x), couleur: '#9fb6d6', epaisseur: 2, nom: 'y = e^{0,3x}', nx: 6.2, ndx: -40, ndy: -6 }],
    points: [0, 1, 2, 3, 4, 5, 6, 7].map((n) => ({ x: n, y: Math.exp(0.3 * n), couleur: 'bleu', r: 4.6 })),
    textesPx: [{ x: 120, y: 60, t: 'uₙ = e^{0,3n} : à chaque pas, × e^{0,3} ≈ 1,35', couleur: 'bleu', ancre: 'start', gras: true }],
  }, 'Les points (n ; uₙ) avec uₙ = exp(0,3n) sont sur la courbe de x ↦ exp(0,3x) : ils forment une suite géométrique de raison exp(0,3) ≈ 1,35.', '## 6. Lien avec les suites géométriques');
}
{
  const F = 'premiere/maths-specialite/geometrie-reperee';
  pose(F, 'vecteur-normal', 'graphe', {
    W: 480, orthonorme: true, xmin: -1.5, xmax: 5.5, ymin: -1.2, ymax: 5.2,
    courbes: [{ f: (x) => 4 - 2 * x, couleur: 'encre', epaisseur: 2.2, nom: 'd : 2x + y − 4 = 0', nx: 2.6, ndx: 12, ndy: 0, ancre: 'start' }],
    fleches: [{ x1: 1, y1: 2, x2: 3, y2: 3, couleur: 'rouge', epaisseur: 2.8 }, { x1: 1, y1: 2, x2: 0, y2: 4, couleur: 'bleu', epaisseur: 2.8 }],
    droits: [{ x: 1, y: 2, u: [2, 1], v: [-1, 2], taille: 13 }],
    points: [{ x: 1, y: 2, nom: 'A(1 ; 2)', dx: -14, dy: 5, ancre: 'end' }],
    vecs: [{ x: 3.25, y: 3.2, t: 'n', couleur: 'rouge' }, { x: -0.75, y: 3.75, t: 'u', couleur: 'bleu' }],
    textes: [{ x: 3.4, y: 3.15, t: '(2 ; 1)', couleur: 'rouge', ancre: 'start' }, { x: -0.15, y: 3.3, t: '(−1 ; 2)', couleur: 'bleu', ancre: 'end' }],
  }, 'Pour la droite d d’équation 2x + y − 4 = 0, le vecteur n(2 ; 1) est normal : il est orthogonal au vecteur directeur u(−1 ; 2).', '### Définition');
  pose(F, 'cercle-centre-rayon', 'graphe', {
    W: 460, orthonorme: true, xmin: -4, xmax: 8.6, ymin: -9, ymax: 3.4, pasX: 1, pasY: 1,
    formatX: (x) => (x % 2 === 0 ? fmt(x) : ''), formatY: (y) => (y % 2 === 0 ? fmt(y) : ''),
    cercles: [{ x: 2, y: -3, r: 5, couleur: 'bleu', fond: 'bleu', opacite: 0.06 }],
    traits: [{ x1: 2, y1: -3, x2: 5, y2: 1, couleur: 'rouge' }],
    points: [{ x: 2, y: -3, nom: 'Ω(2 ; −3)', dx: -8, dy: 20, ancre: 'end' }, { x: 5, y: 1, nom: 'M', dx: 12, dy: -6 }],
    textes: [{ x: 3.75, y: -1.2, t: 'R = 5', couleur: 'rouge', gras: true, ancre: 'start' }, { x: 6.2, y: -8.4, t: '(x − 2)² + (y + 3)² = 25', couleur: 'bleu', gras: true }],
  }, 'Le cercle de centre Ω(2 ; −3) et de rayon 5 a pour équation (x − 2)² + (y + 3)² = 25 : un point M est sur le cercle exactement quand ΩM = 5.', '### Forme centrée');
}
{
  const F = 'premiere/maths-specialite/probabilites-conditionnelles';
  pose(F, 'arbre-general', 'arbre', {
    W: 600, H: 270, pasX: 150, finX: 360,
    branches: [
      { nom: 'A', p: 'P(A)', enfants: [{ nom: 'B', p: 'P_A(B)', fin: 'P(A ∩ B) = P(A) × P_A(B)' }, { nom: '!B', p: 'P_A(!B)', fin: 'P(A ∩ !B)' }] },
      { nom: '!A', p: 'P(!A)', enfants: [{ nom: 'B', p: 'P_{!A}(B)', fin: 'P(!A ∩ B) = P(!A) × P_{!A}(B)' }, { nom: '!B', p: 'P_{!A}(!B)', fin: 'P(!A ∩ !B)' }] },
    ],
  }, 'Arbre pondéré : sur chaque branche, une probabilité (conditionnelle au second niveau) ; la probabilité d’un chemin est le produit des branches parcourues.', '## 2. L’arbre pondéré');
  pose(F, 'arbre-machines', 'arbre', {
    W: 600, H: 260, pasX: 150, finX: 360,
    branches: [
      { nom: 'M₁', p: '0,6', enfants: [{ nom: 'D', p: '0,02', fin: '0,6 × 0,02 = 0,012', couleurFin: 'orange' }, { nom: '!D', p: '0,98' }] },
      { nom: 'M₂', p: '0,4', enfants: [{ nom: 'D', p: '0,05', fin: '0,4 × 0,05 = 0,020', couleurFin: 'orange' }, { nom: '!D', p: '0,95' }] },
    ],
  }, 'Les deux chemins qui mènent à D (pièce défectueuse) donnent P(D) = 0,012 + 0,020 = 0,032 : c’est la formule des probabilités totales.', '## 3. Formule des probabilités totales');
}
{
  const F = 'premiere/maths-specialite/produit-scalaire';
  const ang = 50;
  const O = [90, 230];
  const V = [O[0] + 250 * Math.cos((ang * PI) / 180), O[1] - 250 * Math.sin((ang * PI) / 180)];
  pose(F, 'angle-deux-vecteurs', 'libre', {
    W: 520, H: 270, elements: [
      { type: 'fleche', x1: O[0], y1: O[1], x2: 460, y2: O[1], couleur: 'bleu', epaisseur: 2.6 },
      { type: 'fleche', x1: O[0], y1: O[1], x2: V[0], y2: V[1], couleur: 'rouge', epaisseur: 2.6 },
      { type: 'arc', x: O[0], y: O[1], r: 55, a1: 0, a2: ang },
      { type: 'texte', x: O[0] + 72, y: O[1] - 22, t: 'θ', couleur: 'orange', taille: 17 },
      { type: 'vec', x: 470, y: O[1] + 26, t: 'u', couleur: 'bleu' },
      { type: 'vec', x: V[0] + 14, y: V[1] - 4, t: 'v', couleur: 'rouge' },
      { type: 'texte', x: 380, y: 60, t: 'u · v = ‖u‖ × ‖v‖ × cos θ', gras: true, taille: 15 },
    ],
  }, 'Deux vecteurs u et v issus d’un même point font un angle θ : leur produit scalaire vaut ‖u‖ × ‖v‖ × cos θ.', '### a. Avec les normes et l\'angle');
  pose(F, 'al-kashi', 'libre', ALKASHI, 'Dans le triangle ABC, le côté a = BC est opposé à l’angle Â : c’est cet angle qu’on utilise dans la formule d’Al-Kashi.', '## 6. Théorème d\'Al-Kashi');
  const c = [260, 175], r = 135;
  const A = [c[0] - r, c[1]], B = [c[0] + r, c[1]];
  const M = [c[0] + r * Math.cos(PI / 3), c[1] - r * Math.sin(PI / 3)];
  const un = (p, q) => { const d = Math.hypot(q[0] - p[0], q[1] - p[1]); return [(q[0] - p[0]) / d, (q[1] - p[1]) / d]; };
  pose(F, 'cercle-diametre', 'libre', {
    W: 520, H: 330, elements: [
      { type: 'cercle', x: c[0], y: c[1], r, couleur: 'bleu', epaisseur: 2.2 },
      { type: 'ligne', x1: A[0], y1: A[1], x2: B[0], y2: B[1], couleur: 'gris', epaisseur: 1.6, pointilles: true },
      { type: 'fleche', x1: M[0], y1: M[1], x2: A[0], y2: A[1], couleur: 'rouge', epaisseur: 2.4 },
      { type: 'fleche', x1: M[0], y1: M[1], x2: B[0], y2: B[1], couleur: 'vert', epaisseur: 2.4 },
      { type: 'droit', x: M[0], y: M[1], u: un(M, A), v: un(M, B) },
      { type: 'point', x: A[0], y: A[1], nom: 'A', dx: -14, dy: 6 }, { type: 'point', x: B[0], y: B[1], nom: 'B', dx: 14, dy: 6 },
      { type: 'point', x: c[0], y: c[1], nom: 'I', dx: 0, dy: 20 }, { type: 'point', x: M[0], y: M[1], nom: 'M', dx: 6, dy: -12 },
      { type: 'texte', x: 260, y: 26, t: 'MA · MB = 0  ⟺  M est sur le cercle de diamètre [AB]', taille: 14, gras: true },
    ],
  }, 'Un point M du cercle de diamètre AB voit le segment AB sous un angle droit : les vecteurs MA et MB sont orthogonaux, donc leur produit scalaire est nul.', '## 7. Ensemble des points $\\mathrm{M}$ tels que $\\overrightarrow{\\mathrm{MA}} \\cdot \\overrightarrow{\\mathrm{MB}} = 0$');
}
{
  const F = 'premiere/maths-specialite/second-degre';
  const panneau = (f, racines, titre, x) => ({
    schema: 'graphe', x, y: 30, w: 213, h: 250, titre, params: {
      W: 213, H: 250, xmin: -0.6, xmax: 5.4, ymin: -1.8, ymax: 4.2, graduer: false, nomX: 'x', nomY: '',
      courbes: [{ f, couleur: 'bleu' }],
      traits: (() => {
        const t = [];
        const bornes = [-0.6, ...racines, 5.4];
        for (let i = 0; i < bornes.length - 1; i++) {
          const m = (bornes[i] + bornes[i + 1]) / 2;
          t.push({ x1: bornes[i], y1: 0, x2: bornes[i + 1], y2: 0, couleur: f(m) > 0 ? 'vert' : 'rouge', epaisseur: 5 });
        }
        return t;
      })(),
      points: racines.map((r0, i) => ({ x: r0, y: 0, nom: racines.length === 1 ? 'x₀' : i === 0 ? 'x₁' : 'x₂', dx: 0, dy: 20 })),
      textes: (() => {
        const t = [];
        const bornes = [-0.6, ...racines, 5.4];
        for (let i = 0; i < bornes.length - 1; i++) { const m = (bornes[i] + bornes[i + 1]) / 2; t.push({ x: m, y: f(m) > 0 ? 0.35 : -0.75, t: f(m) > 0 ? '+' : '−', couleur: f(m) > 0 ? 'vert' : 'rouge', gras: true, taille: 18 }); }
        return t;
      })(),
    },
  });
  pose(F, 'signe-trinome', 'panneaux', {
    W: 640, H: 280, panneaux: [
      panneau((x) => 0.6 * (x - 1) * (x - 4), [1, 4], 'Δ > 0', 0),
      panneau((x) => 0.6 * (x - 2.4) ** 2, [2.4], 'Δ = 0', 213),
      panneau((x) => 0.6 * (x - 2.4) ** 2 + 0.8, [], 'Δ < 0', 426),
    ],
  }, 'Signe d’un trinôme dont le coefficient a est positif : il est positif (en vert) à l’extérieur des racines et négatif (en rouge) entre elles ; si Δ ≤ 0, il garde le signe de a.', '## 5. Signe du trinôme');
}
{
  const F = 'premiere/maths-specialite/suites-numeriques';
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 213, h: 240, titre, params: { W: 213, H: 240, nomX: 'n', nomY: '', marge: 24, ...params } });
  pose(F, 'trois-comportements', 'panneaux', {
    W: 640, H: 270, panneaux: [
      pan('1/n → 0', 0, { xmin: -0.5, xmax: 12.5, ymin: -0.15, ymax: 1.15, pasX: 2, pasY: 0.5, points: Array.from({ length: 12 }, (_, k) => ({ x: k + 1, y: 1 / (k + 1), couleur: 'bleu', r: 3.5 })) }),
      pan('n² → +∞', 213, { xmin: -0.5, xmax: 10.5, ymin: -8, ymax: 108, pasX: 2, pasY: 20, points: Array.from({ length: 11 }, (_, k) => ({ x: k, y: k * k, couleur: 'rouge', r: 3.5 })) }),
      pan('(−1)ⁿ : pas de limite', 426, { xmin: -0.5, xmax: 10.5, ymin: -1.5, ymax: 1.5, pasX: 2, pasY: 1, points: Array.from({ length: 11 }, (_, k) => ({ x: k, y: (-1) ** k, couleur: 'violet', r: 3.5 })) }),
    ],
  }, 'Trois comportements : les termes de 1/n se rapprochent de 0, ceux de n² dépassent toute valeur, ceux de (−1)ⁿ oscillent entre −1 et 1 sans se rapprocher d’un nombre.', '## 6. Approche intuitive de la limite');
  const geo = (q) => Array.from({ length: 9 }, (_, k) => ({ x: k, y: 2 * q ** k, couleur: 'bleu', r: 3.5 }));
  pose(F, 'geometriques-sens', 'panneaux', {
    W: 640, H: 270, panneaux: [
      pan('q = 1,3 : croissante', 0, { xmin: -0.5, xmax: 8.5, ymin: -1.5, ymax: 17.5, pasX: 2, pasY: 4, points: geo(1.3) }),
      pan('q = 0,6 : décroissante', 213, { xmin: -0.5, xmax: 8.5, ymin: -0.25, ymax: 2.3, pasX: 2, pasY: 0.5, points: geo(0.6) }),
      pan('q = −0,8 : alterne', 426, { xmin: -0.5, xmax: 8.5, ymin: -2.3, ymax: 2.3, pasX: 2, pasY: 1, points: geo(-0.8) }),
    ],
  }, 'Suites géométriques de premier terme u₀ = 2 : croissante si q = 1,3, décroissante si q = 0,6, et de signe alterné si q = −0,8.', '### Sens de variation (cas $u_0 > 0$)');
}
{
  const F = 'premiere/maths-specialite/trigonometrie';
  const x = PI / 6;
  pose(F, 'angles-associes', 'cercleTrigo', {
    W: 480,
    points: [
      { t: x, nom: 'x', couleur: 'bleu', rayon: true },
      { t: -x, nom: '−x', couleur: 'rouge' },
      { t: PI - x, nom: 'π − x', couleur: 'vert' },
      { t: PI + x, nom: 'π + x', couleur: 'violet' },
      { t: PI / 2 - x, nom: 'π/2 − x', couleur: 'orange' },
    ],
    liens: [[x, -x, 'rouge'], [x, PI - x, 'vert'], [x, PI + x, 'violet']],
    bissectrice: true,
  }, 'Sur le cercle trigonométrique, les points associés à −x, π − x, π + x et π/2 − x s’obtiennent à partir de celui de x par symétrie (axe des abscisses, axe des ordonnées, centre O, première bissectrice).', '## 5. Angles associés');
  pose(F, 'valeurs-remarquables', 'graphe', {
    W: 460, orthonorme: true, xmin: -0.25, xmax: 1.35, ymin: -0.25, ymax: 1.3, graduer: false, nomX: '', nomY: '',
    gradX: [{ x: 0.5, t: '1/2' }, { x: Math.SQRT2 / 2, t: '√2/2', dx: 2 }, { x: Math.sqrt(3) / 2, t: '√3/2', dx: 6 }, { x: 1, t: '1', dx: 4 }],
    gradY: [{ y: 0.5, t: '1/2' }, { y: Math.SQRT2 / 2, t: '√2/2' }, { y: Math.sqrt(3) / 2, t: '√3/2', dy: 2 }, { y: 1, t: '1' }], origine: true,
    courbes: [{ f: (u) => Math.sqrt(Math.max(0, 1 - u * u)), a: 0, b: 1, couleur: 'encre', epaisseur: 2 }],
    segments: [PI / 6, PI / 4, PI / 3].flatMap((t) => [{ x1: Math.cos(t), y1: 0, x2: Math.cos(t), y2: Math.sin(t) }, { x1: 0, y1: Math.sin(t), x2: Math.cos(t), y2: Math.sin(t) }]),
    traits: [PI / 6, PI / 4, PI / 3].map((t, i) => ({ x1: 0, y1: 0, x2: Math.cos(t), y2: Math.sin(t), couleur: ['bleu', 'vert', 'rouge'][i], epaisseur: 1.8 })),
    points: [[PI / 6, 'π/6', 'bleu'], [PI / 4, 'π/4', 'vert'], [PI / 3, 'π/3', 'rouge']].map(([t, n, c]) => ({ x: Math.cos(t), y: Math.sin(t), nom: n, couleur: c, dx: 12, dy: -8, ancre: 'start', taille: 15 })),
  }, 'Points du cercle trigonométrique pour π/6, π/4 et π/3 : leur abscisse est le cosinus, leur ordonnée le sinus (par exemple cos(π/3) = 1/2 et sin(π/3) = √3/2).', '## 4. Valeurs remarquables');
}
{
  const F = 'premiere/maths-specialite/variables-aleatoires';
  pose(F, 'loi-esperance-ecart', 'batons', {
    W: 520, H: 320, loi: [{ x: 0, p: 0.5 }, { x: 1, p: 0.3 }, { x: 2, p: 0.2 }], pasY: 0.1, ymax: 0.7, esperance: true, ecart: true,
    titre: 'Loi de X : P(X = 0) = 0,5 ; P(X = 1) = 0,3 ; P(X = 2) = 0,2',
  }, 'Diagramme de la loi de X : l’espérance E(X) = 0,7 est la moyenne pondérée des valeurs, et l’écart-type σ ≈ 0,78 mesure la dispersion autour d’elle.', '## 4. Variance et écart-type');
}
{
  const F = 'premiere/maths-specialite/variations-courbes';
  pose(F, 'extremum-et-contre-exemple', 'panneaux', EXTREMUMS, 'À gauche, la tangente est horizontale en chaque extrémum, car f′ change de signe. À droite, f′(0) = 0 mais x³ reste croissante : la courbe traverse sa tangente, aucun extrémum.', '### ⚠️ La réciproque est fausse');
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 320, h: 280, titre, params: { W: 320, H: 280, xmin: -2.6, xmax: 2.6, ymin: -3.2, ymax: 3.2, ...params } });
  pose(F, 'paire-impaire', 'panneaux', {
    W: 640, H: 310, panneaux: [
      pan('x² : paire', 0, {
        courbes: [{ f: (x) => x * x, couleur: 'bleu' }],
        segments: [{ x1: -1.5, y1: 2.25, x2: 1.5, y2: 2.25, couleur: 'violet' }],
        points: [{ x: -1.5, y: 2.25, nom: 'f(−x)', dx: -10, dy: -8, ancre: 'end', couleur: 'violet' }, { x: 1.5, y: 2.25, nom: 'f(x)', dx: 10, dy: -8, ancre: 'start', couleur: 'violet' }],
      }),
      pan('x³ : impaire', 320, {
        courbes: [{ f: (x) => x ** 3, couleur: 'bleu' }],
        segments: [{ x1: -1.2, y1: -1.728, x2: 1.2, y2: 1.728, couleur: 'violet' }],
        points: [{ x: 1.2, y: 1.728, nom: 'f(x)', dx: 12, dy: 6, ancre: 'start', couleur: 'violet' }, { x: -1.2, y: -1.728, nom: 'f(−x) = −f(x)', dx: -12, dy: 4, ancre: 'end', couleur: 'violet' }, { x: 0, y: 0, nom: 'O', dx: 12, dy: 16 }],
      }),
    ],
  }, 'La courbe d’une fonction paire (x²) est symétrique par rapport à l’axe des ordonnées ; celle d’une fonction impaire (x³) est symétrique par rapport à l’origine O.', '## 4. Fonctions paires et impaires');
}

// ───────────────────────── Seconde ─────────────────────────
/** Racines de f sur [a ; b] (balayage + dichotomie). */
function racines(f, a, b, n = 2000) {
  const r = [];
  let x0 = a, y0 = f(a);
  for (let i = 1; i <= n; i++) {
    const x1 = a + ((b - a) * i) / n, y1 = f(x1);
    if (y0 === 0) r.push(x0);
    else if (y0 * y1 < 0) { let u = x0, v = x1; for (let k = 0; k < 60; k++) { const m = (u + v) / 2; if (f(u) * f(m) <= 0) v = m; else u = m; } r.push((u + v) / 2); }
    x0 = x1; y0 = y1;
  }
  return r;
}
/** Diagramme de Venn : mode = 'inter' | 'union' | 'contraire' | 'incompatibles' | 'inclusion'. */
function venn({ W = 210, H = 170, mode = 'inter', titre = '', noms = ['A', 'B'], univers = 'Ω', couleur = BLEU } = {}) {
  const cx1 = mode === 'incompatibles' ? W / 2 - 50 : W / 2 - 26, cx2 = mode === 'incompatibles' ? W / 2 + 50 : W / 2 + 26, cy = H / 2 + 12, r = mode === 'incompatibles' ? 38 : 46;
  const id = 'v' + mode;
  let g = `<rect x="8" y="${titre ? 30 : 8}" width="${W - 16}" height="${H - (titre ? 38 : 16)}" rx="6" fill="${mode === 'contraire' ? couleur : 'none'}" fill-opacity="${mode === 'contraire' ? 0.25 : 0}" stroke="${ENCRE}" stroke-width="1.6"/>`;
  if (mode === 'inclusion') {
    g += `<circle cx="${W / 2}" cy="${cy}" r="58" fill="${couleur}" fill-opacity="0.12" stroke="${ENCRE}" stroke-width="2"/>`;
    g += `<circle cx="${W / 2 - 12}" cy="${cy + 10}" r="28" fill="${couleur}" fill-opacity="0.3" stroke="${ENCRE}" stroke-width="2"/>`;
    g += texte(W / 2 - 12, cy + 16, noms[0], { taille: 16, gras: true }) + texte(W / 2 + 30, cy - 30, noms[1], { taille: 16, gras: true });
  } else {
    if (mode === 'contraire') g += `<circle cx="${cx1}" cy="${cy}" r="${r}" fill="#ffffff" stroke="none"/>`;
    if (mode === 'union') g += `<circle cx="${cx1}" cy="${cy}" r="${r}" fill="${couleur}" fill-opacity="0.3"/><circle cx="${cx2}" cy="${cy}" r="${r}" fill="${couleur}" fill-opacity="0.3"/><clipPath id="${id}"><circle cx="${cx1}" cy="${cy}" r="${r}"/></clipPath><circle cx="${cx2}" cy="${cy}" r="${r}" fill="#ffffff" clip-path="url(#${id})"/><circle cx="${cx2}" cy="${cy}" r="${r}" fill="${couleur}" fill-opacity="0.3" clip-path="url(#${id})"/>`;
    if (mode === 'inter') g += `<clipPath id="${id}"><circle cx="${cx1}" cy="${cy}" r="${r}"/></clipPath><circle cx="${cx2}" cy="${cy}" r="${r}" fill="${couleur}" fill-opacity="0.45" clip-path="url(#${id})"/>`;
    if (mode === 'incompatibles') g += `<circle cx="${cx1}" cy="${cy}" r="${r}" fill="${couleur}" fill-opacity="0.3"/><circle cx="${cx2}" cy="${cy}" r="${r}" fill="${couleur}" fill-opacity="0.3"/>`;
    g += `<circle cx="${cx1}" cy="${cy}" r="${r}" fill="none" stroke="${ENCRE}" stroke-width="2"/>`;
    if (mode !== 'contraire') g += `<circle cx="${cx2}" cy="${cy}" r="${r}" fill="none" stroke="${ENCRE}" stroke-width="2"/>`;
    g += texte(cx1 - (mode === 'incompatibles' ? 0 : 18), cy + 6, noms[0], { taille: 16, gras: true });
    if (mode !== 'contraire') g += texte(cx2 + (mode === 'incompatibles' ? 0 : 18), cy + 6, noms[1], { taille: 16, gras: true });
  }
  g += texte(W - 16, H - 14, univers, { taille: 14, ancre: 'end', couleur: ATTENUE });
  if (titre) g += texteRiche(W / 2, 22, titre, { taille: 15, gras: true });
  return enveloppe(W, H, g);
}
SCHEMAS.venn = venn;
/** Organigramme vertical simple : etapes = [{ t, forme: 'boite'|'test'|'fin' }] + boucle éventuelle. */
{
  const F = 'seconde/maths/algorithmique';
  const el = [
    { type: 'boite', x: 190, y: 14, w: 160, h: 38, t: 'n = 1', taille: 15 },
    { type: 'fleche', x1: 270, y1: 52, x2: 270, y2: 80 },
    { type: 'poly', points: [[270, 80], [370, 120], [270, 160], [170, 120]], couleur: 'orange', fond: '#fff4e6', opacite: 1 },
    { type: 'texte', x: 270, y: 125, t: '2^n < 1000 ?', taille: 15, gras: true },
    { type: 'fleche', x1: 370, y1: 120, x2: 420, y2: 120, couleur: 'vert' },
    { type: 'texte', x: 395, y: 112, t: 'oui', couleur: 'vert', taille: 13 },
    { type: 'boite', x: 420, y: 100, w: 110, h: 40, t: 'n = n + 1', fond: '#e9f6ee', bord: 'vert', taille: 15 },
    { type: 'ligne', x1: 475, y1: 100, x2: 475, y2: 66, couleur: 'vert' },
    { type: 'fleche', x1: 475, y1: 66, x2: 273, y2: 66, couleur: 'vert', pointe: 9 },
    { type: 'fleche', x1: 270, y1: 160, x2: 270, y2: 196, couleur: 'rouge' },
    { type: 'texte', x: 288, y: 184, t: 'non', couleur: 'rouge', taille: 13, ancre: 'start' },
    { type: 'boite', x: 190, y: 196, w: 160, h: 38, t: 'afficher n', fond: '#fbeaea', bord: 'rouge', taille: 15 },
    { type: 'texte', x: 20, y: 120, t: 'boucle while :', taille: 13, ancre: 'start', couleur: 'gris' },
    { type: 'texte', x: 20, y: 138, t: 'on recommence', taille: 13, ancre: 'start', couleur: 'gris' },
    { type: 'texte', x: 20, y: 156, t: 'tant que le test', taille: 13, ancre: 'start', couleur: 'gris' },
    { type: 'texte', x: 20, y: 174, t: 'est vrai', taille: 13, ancre: 'start', couleur: 'gris' },
  ];
  pose(F, 'organigramme-while', 'libre', { W: 560, H: 250, elements: el }, 'Organigramme de la boucle while : tant que 2ⁿ est inférieur à 1 000, on ajoute 1 à n ; dès que le test est faux, on sort de la boucle et on affiche n, ici 10.', '## 4. Boucle non bornée — `while`');
}
{
  const F = 'seconde/maths/arithmetique';
  pose(F, 'n-inclus-dans-z', 'libre', {
    W: 480, H: 230, elements: [
      { type: 'rect', x: 20, y: 20, w: 440, h: 190, rx: 90, fond: 'bleu', opacite: 0.06, bord: 'bleu' },
      { type: 'rect', x: 170, y: 55, w: 260, h: 120, rx: 58, fond: 'vert', opacite: 0.1, bord: 'vert' },
      { type: 'texte', x: 60, y: 120, t: 'ℤ', taille: 26, gras: true, couleur: 'bleu' },
      { type: 'texte', x: 205, y: 122, t: 'ℕ', taille: 26, gras: true, couleur: 'vert' },
      { type: 'texte', x: 320, y: 105, t: '0   1   2', taille: 17 },
      { type: 'texte', x: 320, y: 140, t: '3   152 …', taille: 17 },
      { type: 'texte', x: 110, y: 75, t: '−1', taille: 17 }, { type: 'texte', x: 120, y: 175, t: '−2', taille: 17 }, { type: 'texte', x: 440, y: 120, t: '…', taille: 17, ancre: 'end' }, { type: 'texte', x: 95, y: 125, t: '−35', taille: 17 },
    ],
  }, 'Les entiers naturels (ℕ) font partie des entiers relatifs (ℤ) : ℕ est inclus dans ℤ. Les entiers négatifs comme −1 ou −35 sont dans ℤ mais pas dans ℕ.', '## 1. Les ensembles de nombres entiers');
}
{
  const F = 'seconde/maths/calcul-numerique-algebrique';
  const cadres = [['ℝ', 'bleu', ['√2 ; π']], ['ℚ', 'violet', ['2/3 ; −7/5']], ['𝔻', 'orange', ['2,75 ; −0,5']], ['ℤ', 'rouge', ['−5']], ['ℕ', 'vert', ['0 ; 7 ; 152']]];
  const el = [];
  cadres.forEach(([n, c, ex], i) => {
    const x = 16 + i * 56, y = 16 + i * 26, w = 600 - 32 - i * 112 + (i === 4 ? 60 : 0), h = 268 - i * 52;
    el.push({ type: 'rect', x, y, w: i === 4 ? 600 - 32 - 4 * 112 + 60 - 60 : w, h, rx: 16, fond: c, opacite: 0.07, bord: c });
    el.push({ type: 'texte', x: x + 14, y: y + 26, t: n, taille: 20, gras: true, couleur: c, ancre: 'start' });
    if (i < 4) el.push({ type: 'texte', x: x + 30, y: y + h - 12, t: ex.join('   '), taille: 15, ancre: 'start' });
    else el.push({ type: 'texte', x: x + w / 2 - 30 + 18, y: y + h / 2 + 12, t: ex[0], taille: 15 });
  });
  pose(F, 'ensembles-emboites', 'libre', { W: 600, H: 300, elements: el }, 'Les ensembles de nombres sont emboîtés : ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ. Chaque nombre appartient à son ensemble et à tous ceux qui le contiennent ; √2 et π sont réels mais pas rationnels.', '## 1. Les ensembles de nombres');
  const a = 200, b = 110, o = [140, 30];
  pose(F, 'carre-a-plus-b', 'libre', {
    W: 520, H: 380, elements: [
      { type: 'rect', x: o[0], y: o[1], w: a, h: a, fond: 'bleu', opacite: 0.25, bord: 'encre' },
      { type: 'rect', x: o[0] + a, y: o[1], w: b, h: a, fond: 'vert', opacite: 0.22, bord: 'encre' },
      { type: 'rect', x: o[0], y: o[1] + a, w: a, h: b, fond: 'vert', opacite: 0.22, bord: 'encre' },
      { type: 'rect', x: o[0] + a, y: o[1] + a, w: b, h: b, fond: 'orange', opacite: 0.28, bord: 'encre' },
      { type: 'texte', x: o[0] + a / 2, y: o[1] + a / 2 + 8, t: 'a²', taille: 24, gras: true },
      { type: 'texte', x: o[0] + a + b / 2, y: o[1] + a / 2 + 8, t: 'ab', taille: 20, gras: true },
      { type: 'texte', x: o[0] + a / 2, y: o[1] + a + b / 2 + 8, t: 'ab', taille: 20, gras: true },
      { type: 'texte', x: o[0] + a + b / 2, y: o[1] + a + b / 2 + 8, t: 'b²', taille: 20, gras: true },
      { type: 'texte', x: o[0] - 14, y: o[1] + a / 2 + 6, t: 'a', taille: 18, italique: true, ancre: 'end' },
      { type: 'texte', x: o[0] - 14, y: o[1] + a + b / 2 + 6, t: 'b', taille: 18, italique: true, ancre: 'end' },
      { type: 'texte', x: o[0] + a / 2, y: o[1] - 8 + 0, t: '', taille: 18 },
      { type: 'texte', x: o[0] + a / 2, y: o[1] + a + b + 22, t: 'a', taille: 18, italique: true },
      { type: 'texte', x: o[0] + a + b / 2, y: o[1] + a + b + 22, t: 'b', taille: 18, italique: true },
      { type: 'texte', x: 30, y: 30, t: '', taille: 14 },
    ],
  }, 'Le carré de côté a + b se découpe en un carré a², un carré b² et deux rectangles ab : son aire vaut (a + b)² = a² + 2ab + b².', '## 4. Identités remarquables');
  const ligneNb = (y, t, g, d, fg, fd, couleur) => {
    const X = (v) => 70 + v * 70;
    const el = [{ type: 'fleche', x1: 30, y1: y, x2: 560, y2: y, couleur: 'gris', epaisseur: 1.6, pointe: 9 }];
    el.push({ type: 'ligne', x1: X(g), y1: y, x2: d === null ? 505 : X(d), y2: y, couleur, epaisseur: 6 });
    const crochet = (x, ouvert, cote) => {
      const s = (cote === 'g') === ouvert ? -1 : 1; // sens des « pattes »
      return [{ type: 'ligne', x1: x, y1: y - 12, x2: x, y2: y + 12, couleur, epaisseur: 2.6 }, { type: 'ligne', x1: x, y1: y - 12, x2: x + 7 * s, y2: y - 12, couleur, epaisseur: 2.6 }, { type: 'ligne', x1: x, y1: y + 12, x2: x + 7 * s, y2: y + 12, couleur, epaisseur: 2.6 }];
    };
    el.push(...crochet(X(g), fg, 'g'));
    el.push({ type: 'texte', x: X(g), y: y + 30, t: 'a', italique: true, taille: 15 });
    if (d !== null) { el.push(...crochet(X(d), fd, 'd')); el.push({ type: 'texte', x: X(d), y: y + 30, t: 'b', italique: true, taille: 15 }); }
    el.push({ type: 'texte', x: 600, y: y + 6, t, taille: 16, gras: true, ancre: 'end', couleur });
    return el;
  };
  pose(F, 'intervalles', 'libre', {
    W: 610, H: 220, elements: [
      ...ligneNb(40, '', 1, 5, false, false, 'bleu'), { type: 'texte', x: 600, y: 46, t: '[a ; b]', taille: 16, gras: true, ancre: 'end', couleur: 'bleu' },
      ...ligneNb(110, '', 1, 5, true, true, 'rouge'), { type: 'texte', x: 600, y: 116, t: ']a ; b[', taille: 16, gras: true, ancre: 'end', couleur: 'rouge' },
      ...ligneNb(180, '', 1, null, false, false, 'vert'), { type: 'texte', x: 600, y: 186, t: '[a ; +∞[', taille: 16, gras: true, ancre: 'end', couleur: 'vert' },
    ].map((e) => (e.type === 'fleche' ? { ...e, x2: 520 } : e)),
  }, 'Sur la droite des réels : l’intervalle fermé contient ses bornes a et b, l’intervalle ouvert les exclut (crochets tournés vers l’extérieur) ; vers +∞, le crochet est toujours ouvert.', '## 7. Intervalles et valeur absolue');
}
{
  const F = 'seconde/maths/droites-du-plan';
  pose(F, 'coefficient-directeur', 'graphe', {
    W: 480, H: 420, xmin: -0.8, xmax: 5.4, ymin: -2.5, ymax: 14, pasY: 2,
    courbes: [{ f: (x) => 3 * x - 1, couleur: 'bleu', nom: 'y = 3x − 1', nx: 4.6, ndx: -48, ndy: 0 }],
    traits: [{ x1: 1, y1: 2, x2: 4, y2: 2, couleur: 'vert', pointilles: true }, { x1: 4, y1: 2, x2: 4, y2: 11, couleur: 'rouge', pointilles: true }],
    textes: [{ x: 2.5, y: 0.9, t: 'x_B − x_A = 3', couleur: 'vert' }, { x: 4.12, y: 6.3, t: 'y_B − y_A = 9', couleur: 'rouge', ancre: 'start' }],
    points: [{ x: 1, y: 2, nom: 'A(1 ; 2)', dx: -12, dy: -6, ancre: 'end' }, { x: 4, y: 11, nom: 'B(4 ; 11)', dx: -12, dy: -4, ancre: 'end' }],
  }, 'Pour A(1 ; 2) et B(4 ; 11) : quand x augmente de 3, y augmente de 9, donc le coefficient directeur vaut m = 9 ÷ 3 = 3 et la droite a pour équation y = 3x − 1.', '## 2. Coefficient directeur');
  pose(F, 'vecteur-directeur', 'graphe', {
    W: 460, orthonorme: true, xmin: -1.6, xmax: 5.2, ymin: -1.4, ymax: 4,
    courbes: [{ f: (x) => (6 - 2 * x) / 3, couleur: 'encre', epaisseur: 2.2, nom: '2x + 3y − 6 = 0', nx: -1.0, ndx: 4, ndy: -14, ancre: 'start' }],
    fleches: [{ x1: 3, y1: 0, x2: 0, y2: 2, couleur: 'rouge', epaisseur: 3 }],
    points: [{ x: 3, y: 0, nom: '(3 ; 0)', dx: 12, dy: -12, ancre: 'start' }, { x: 0, y: 2, nom: '(0 ; 2)', dx: 12, dy: -12, ancre: 'start' }],
    vecs: [{ x: 1.75, y: 1.45, t: 'u', couleur: 'rouge' }],
    textes: [{ x: 2.0, y: 1.35, t: '(−3 ; 2)', couleur: 'rouge', ancre: 'start' }],
  }, 'Le vecteur u(−3 ; 2), qui va du point (3 ; 0) au point (0 ; 2), est un vecteur directeur de la droite d’équation 2x + 3y − 6 = 0.', '## 3. Vecteur directeur');
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 213, h: 230, titre, params: { W: 213, H: 230, xmin: -1, xmax: 6, ymin: -1, ymax: 9, graduer: false, nomX: '', nomY: '', ...params } });
  pose(F, 'positions-relatives', 'panneaux', {
    W: 640, H: 265, panneaux: [
      pan('sécantes : 1 solution', 0, { courbes: [{ f: (x) => 2 * x + 1, couleur: 'bleu' }, { f: (x) => -x + 7, couleur: 'rouge' }], points: [{ x: 2, y: 5, nom: '(2 ; 5)', dx: 8, dy: -10, ancre: 'start' }] }),
      pan('parallèles : aucune', 213, { courbes: [{ f: (x) => x + 1, couleur: 'bleu' }, { f: (x) => x + 4, couleur: 'rouge' }] }),
      pan('confondues : une infinité', 426, { courbes: [{ f: (x) => 0.5 * x + 2, couleur: 'rouge', epaisseur: 6 }, { f: (x) => 0.5 * x + 2, couleur: 'bleu', epaisseur: 2.4, pointilles: true }] }),
    ],
  }, 'Un système de deux équations de droites a une seule solution si les droites sont sécantes (ici y = 2x + 1 et y = −x + 7 se coupent en (2 ; 5)), aucune si elles sont parallèles, une infinité si elles sont confondues.', '### Interprétation géométrique');
}
{
  const F = 'seconde/maths/equations-inequations';
  pose(F, 'signe-ax-plus-b', 'graphe', {
    W: 500, H: 320, xmin: -2.5, xmax: 6, ymin: -5, ymax: 5, graduer: false,
    courbes: [{ f: (x) => 2 * x - 4, couleur: 'bleu', nom: 'y = 2x − 4', nx: 4.2, ndx: 46, ndy: 4 }],
    traits: [{ x1: -2.5, y1: 0, x2: 2, y2: 0, couleur: 'rouge', epaisseur: 5 }, { x1: 2, y1: 0, x2: 6, y2: 0, couleur: 'vert', epaisseur: 5 }],
    points: [{ x: 2, y: 0, nom: '−b/a = 2', dx: 8, dy: 24, ancre: 'start' }],
    textes: [{ x: -0.5, y: 0.6, t: 'négatif', couleur: 'rouge', gras: true }, { x: 4.4, y: -1.0, t: 'positif', couleur: 'vert', gras: true }],
  }, 'Signe de 2x − 4 (ici a = 2 est positif) : l’expression s’annule en −b/a = 2, elle est négative avant cette valeur et du signe de a, donc positive, après.', '### Signe de $ax + b$');
}
{
  const F = 'seconde/maths/fonctions-de-reference';
  pose(F, 'droites-affines', 'graphe', {
    W: 480, H: 340, xmin: -3.5, xmax: 3.5, ymin: -3.5, ymax: 4.5,
    courbes: [{ f: (x) => x + 1, couleur: 'vert', nom: 'a > 0 : croissante', nx: 2.6, ndx: -6, ndy: -12, ancre: 'end' }, { f: () => 2, couleur: 'orange', nom: 'a = 0 : constante', nx: -3.3, ndx: 0, ndy: -10, ancre: 'start' }, { f: (x) => -1.5 * x + 1, couleur: 'rouge', nom: 'a < 0 : décroissante', nx: 2.0, ndx: -14, ndy: 4, ancre: 'end' }],
    points: [{ x: 0, y: 1, nom: 'b = 1', dx: 14, dy: 5, ancre: 'start' }],
  }, 'Droites de fonctions affines : le coefficient directeur a fixe le sens de variation (croissante si a est positif, décroissante s’il est négatif, constante s’il est nul).', '## 1. Fonctions affines');
  const pan = (titre, x, y, params) => ({ schema: 'graphe', x, y, w: 320, h: 240, titre, params: { W: 320, H: 240, xmin: -3.2, xmax: 3.2, ymin: -3.2, ymax: 3.2, ...params } });
  pose(F, 'synthese-quatre-fonctions', 'panneaux', {
    W: 640, H: 540, panneaux: [
      pan('carré : x²', 0, 30, { courbes: [{ f: (x) => x * x, couleur: 'bleu' }] }),
      pan('inverse : 1/x', 320, 30, { courbes: [{ f: (x) => 1 / x, a: -3.2, b: -0.01, couleur: 'rouge' }, { f: (x) => 1 / x, a: 0.01, b: 3.2, couleur: 'rouge' }] }),
      pan('racine carrée : √x', 0, 300, { courbes: [{ f: (x) => Math.sqrt(x), a: 0, b: 3.2, couleur: 'vert' }], points: [{ x: 0, y: 0 }] }),
      pan('cube : x³', 320, 300, { courbes: [{ f: (x) => x ** 3, couleur: 'violet' }] }),
    ],
  }, 'Les quatre courbes de référence : parabole de x², hyperbole de 1/x en deux branches, demi-parabole couchée de √x partant de l’origine, courbe de x³ croissante sur tout ℝ.', '## 6. Tableau de synthèse');
  pose(F, 'comparaison-racine-x-carre', 'graphe', {
    W: 480, orthonorme: true, xmin: -0.3, xmax: 2.3, ymin: -0.3, ymax: 2.3, pasX: 0.5, pasY: 0.5,
    courbes: [{ f: (x) => x * x, a: 0, couleur: 'bleu', nom: 'x²', nx: 1.45, ndx: -16, ndy: 0 }, { f: (x) => x, a: 0, couleur: 'orange', nom: 'x', nx: 2.05, ndx: 0, ndy: -10 }, { f: Math.sqrt, a: 0, couleur: 'vert', nom: '√x', nx: 2.1, ndx: 0, ndy: -10 }],
    segments: [{ x1: 1, y1: 0, x2: 1, y2: 1 }],
    rects: [{ x1: 0, y1: -0.3, x2: 1, y2: 2.3, couleur: 'vert', opacite: 0.06, epaisseur: 0 }],
    points: [{ x: 1, y: 1, nom: '(1 ; 1)', dx: 12, dy: 16, ancre: 'start' }],
    textes: [{ x: 0.5, y: 1.9, t: '√x ≥ x ≥ x²', couleur: 'vert', gras: true }, { x: 1.6, y: 0.35, t: 'x² ≥ x ≥ √x', couleur: 'bleu', gras: true }],
  }, 'Sur l’intervalle de 0 à 1, √x est au-dessus de x, lui-même au-dessus de x² ; après 1, l’ordre s’inverse. Les trois courbes se croisent en (1 ; 1).', '## 4. Fonction racine carrée');
}
{
  const F = 'seconde/maths/notion-de-fonction';
  const f = (x) => 0.25 * x ** 3 - 1.5 * x * x + 2 * x + 2;
  pose(F, 'image-antecedents', 'graphe', {
    W: 520, H: 380, xmin: -1.4, xmax: 5.4, ymin: -1.5, ymax: 5,
    courbes: [{ f, a: -1.2, b: 5.1, couleur: 'bleu', nom: '𝒞_f', nx: 4.6, ndx: -22, ndy: 0 }, { f: () => 2, couleur: 'rouge', epaisseur: 1.6, pointilles: true }],
    fleches: [{ x1: 3, y1: 0, x2: 3, y2: 1.25, couleur: 'vert', epaisseur: 2, pointe: 9 }, { x1: 3, y1: 1.25, x2: 0.04, y2: 1.25, couleur: 'vert', epaisseur: 2, pointe: 9 }],
    segments: [0, 2, 4].map((x) => ({ x1: x, y1: 2, x2: x, y2: 0, couleur: 'rouge' })),
    points: [{ x: 3, y: 1.25, couleur: 'vert' }, ...[0, 2, 4].map((x) => ({ x, y: 2, couleur: 'rouge' }))],
    textes: [{ x: 1.0, y: 0.6, t: 'image de 3 : f(3) = 1,25', couleur: 'vert', gras: true }, { x: 5.3, y: 2.25, t: 'y = 2', couleur: 'rouge', ancre: 'end' }, { x: 2, y: 4.3, t: 'antécédents de 2 : 0, 2 et 4', couleur: 'rouge', gras: true }],
  }, 'Pour f(x) = 0,25x³ − 1,5x² + 2x + 2 : l’image de 3 se lit en montant jusqu’à la courbe (f(3) = 1,25) ; les antécédents de 2 sont les abscisses des points où la courbe coupe la droite y = 2.', '### Image et antécédents');
  pose(F, 'test-verticale', 'panneaux', {
    W: 600, H: 290, panneaux: [
      { schema: 'graphe', x: 0, y: 30, w: 300, h: 260, titre: 'courbe d’une fonction', couleurTitre: 'vert', params: { W: 300, H: 260, xmin: -3, xmax: 3, ymin: -2.5, ymax: 3.5, graduer: false, nomX: '', nomY: '', courbes: [{ f: (x) => 0.5 * x * x - 1, couleur: 'bleu' }], segments: [{ x1: 1.2, y1: -2.5, x2: 1.2, y2: 3.5, couleur: 'orange', pointilles: false, epaisseur: 2 }], points: [{ x: 1.2, y: 0.5 * 1.44 - 1, couleur: 'orange' }] } },
      { schema: 'graphe', x: 300, y: 30, w: 300, h: 260, titre: 'cercle : pas une fonction', couleurTitre: 'rouge', params: { W: 300, H: 260, xmin: -3, xmax: 3, ymin: -2.5, ymax: 3.5, graduer: false, nomX: '', nomY: '', cercles: [{ x: 0, y: 0.5, r: 1.8, couleur: 'bleu' }], segments: [{ x1: 0.9, y1: -2.5, x2: 0.9, y2: 3.5, couleur: 'orange', pointilles: false, epaisseur: 2 }], points: [{ x: 0.9, y: 0.5 + Math.sqrt(1.8 ** 2 - 0.81), couleur: 'orange' }, { x: 0.9, y: 0.5 - Math.sqrt(1.8 ** 2 - 0.81), couleur: 'orange' }] } },
    ],
  }, 'Test de la verticale : une droite verticale coupe la courbe d’une fonction en un point au plus ; elle peut couper un cercle en deux points, donc un cercle n’est pas la courbe d’une fonction.', '### Le test de la verticale');
  const g = (x) => 0.25 * x ** 3 - 1.5 * x * x + 2.25 * x + 1;
  pose(F, 'extremums', 'graphe', {
    W: 500, H: 330, xmin: -0.4, xmax: 4, ymin: -0.4, ymax: 2.7, pasX: 0.5, pasY: 0.5,
    courbes: [{ f: g, a: 0.2, b: 3.6, couleur: 'bleu' }],
    segments: [{ x1: 1, y1: 0, x2: 1, y2: 2 }, { x1: 0, y1: 2, x2: 1, y2: 2 }, { x1: 3, y1: 0, x2: 3, y2: 1 }, { x1: 0, y1: 1, x2: 3, y2: 1 }],
    points: [{ x: 1, y: 2, nom: 'maximum : 2, atteint en x = 1', couleur: 'rouge', dx: 10, dy: -12, ancre: 'start' }, { x: 3, y: 1, nom: 'minimum : 1, atteint en x = 3', couleur: 'vert', dx: 0, dy: 26 }, { x: 0.2, y: g(0.2), r: 3 }, { x: 3.6, y: g(3.6), r: 3 }],
  }, 'Sur l’intervalle représenté (de 0,2 à 3,6), le maximum de cette fonction est 2, atteint en x = 1, et son minimum est 1, atteint en x = 3 : un extrémum est une valeur de f(x).', '### Extrémums');
}
{
  const F = 'seconde/maths/probabilites';
  pose(F, 'operations-evenements', 'panneaux', {
    W: 440, H: 360, panneaux: [
      { schema: 'venn', x: 0, y: 0, w: 220, h: 180, params: { W: 220, H: 180, mode: 'inter', titre: 'A ∩ B : A et B' } },
      { schema: 'venn', x: 220, y: 0, w: 220, h: 180, params: { W: 220, H: 180, mode: 'union', titre: 'A ∪ B : A ou B' } },
      { schema: 'venn', x: 0, y: 180, w: 220, h: 180, params: { W: 220, H: 180, mode: 'contraire', titre: '!A : contraire de A' } },
      { schema: 'venn', x: 220, y: 180, w: 220, h: 180, params: { W: 220, H: 180, mode: 'incompatibles', titre: 'A et B incompatibles' } },
    ],
  }, 'En couleur : l’intersection A ∩ B (A et B), la réunion A ∪ B (A ou B), l’événement contraire de A, et deux événements incompatibles, qui n’ont aucune issue commune.', '## 4. Opérations sur les événements');
  const el = [];
  const x0 = 90, y0 = 50, c = 44;
  for (let i = 1; i <= 6; i++) {
    el.push({ type: 'texte', x: x0 + (i - 0.5) * c, y: y0 - 10, t: String(i), gras: true, taille: 15, couleur: 'bleu' });
    el.push({ type: 'texte', x: x0 - 14, y: y0 + (i - 0.5) * c + 5, t: String(i), gras: true, taille: 15, couleur: 'rouge' });
    for (let j = 1; j <= 6; j++) {
      const sept = i + j === 7;
      el.push({ type: 'rect', x: x0 + (j - 1) * c, y: y0 + (i - 1) * c, w: c, h: c, fond: sept ? 'orange' : 'none', opacite: 0.3, bord: 'gris', epaisseur: 1 });
      el.push({ type: 'texte', x: x0 + (j - 0.5) * c, y: y0 + (i - 0.5) * c + 5, t: String(i + j), taille: 14, gras: sept, couleur: sept ? 'encre' : 'gris' });
    }
  }
  el.push({ type: 'texte', x: x0 + 3 * c, y: 20, t: '2e dé', couleur: 'bleu', taille: 13 });
  el.push({ type: 'texte', x: 30, y: y0 + 3 * c, t: '1er dé', couleur: 'rouge', taille: 13 });
  el.push({ type: 'texte', x: x0 + 6 * c + 22, y: y0 + 2.5 * c, t: 'somme 7 :', couleur: 'orange', taille: 14, gras: true, ancre: 'start' });
  el.push({ type: 'texte', x: x0 + 6 * c + 22, y: y0 + 2.5 * c + 22, t: '6 cases sur 36', couleur: 'orange', taille: 14, gras: true, ancre: 'start' });
  pose(F, 'tableau-deux-des', 'libre', { W: 500, H: 330, elements: el }, 'Tableau à double entrée des sommes de deux dés : 36 issues équiprobables, dont 6 donnent une somme de 7 (cases orange), d’où une probabilité de 6/36 = 1/6.', '## 5. Dénombrer avec un arbre ou un tableau');
}
{
  const F = 'seconde/maths/statistiques';
  const serie = [4, 6, 7, 8, 9, 10, 11, 12, 12, 14, 16, 19];
  const X = (v) => 40 + v * 26;
  const yb = 150;
  const el = [{ type: 'fleche', x1: 30, y1: 255, x2: 580, y2: 255, couleur: 'gris', epaisseur: 1.6, pointe: 9 }];
  for (let v = 0; v <= 20; v += 2) { el.push({ type: 'ligne', x1: X(v), y1: 251, x2: X(v), y2: 259, couleur: 'gris', epaisseur: 1.2 }); el.push({ type: 'texte', x: X(v), y: 279, t: String(v), taille: 16, couleur: 'gris' }); }
  const vus = {};
  serie.forEach((v) => { vus[v] = (vus[v] || 0) + 1; el.push({ type: 'cercle', x: X(v), y: 66 - (vus[v] - 1) * 14, r: 5, couleur: 'encre', fond: 'encre', opacite: 0.8, epaisseur: 1 }); });
  const [mi, q1, me, q3, ma] = [4, 7, 10.5, 12, 19];
  el.push({ type: 'ligne', x1: X(mi), y1: yb, x2: X(q1), y2: yb, epaisseur: 2 }, { type: 'ligne', x1: X(q3), y1: yb, x2: X(ma), y2: yb, epaisseur: 2 });
  el.push({ type: 'ligne', x1: X(mi), y1: yb - 12, x2: X(mi), y2: yb + 12, epaisseur: 2 }, { type: 'ligne', x1: X(ma), y1: yb - 12, x2: X(ma), y2: yb + 12, epaisseur: 2 });
  el.push({ type: 'rect', x: X(q1), y: yb - 26, w: X(q3) - X(q1), h: 52, fond: 'bleu', opacite: 0.15, bord: 'bleu', epaisseur: 2 });
  el.push({ type: 'ligne', x1: X(me), y1: yb - 26, x2: X(me), y2: yb + 26, couleur: 'rouge', epaisseur: 3 });
  [[mi, 'min = 4'], [q1, 'Q₁ = 7'], [me, 'Me = 10,5'], [q3, 'Q₃ = 12'], [ma, 'max = 19']].forEach(([v, t], i) => el.push({ type: 'texte', x: X(v), y: i % 2 ? yb + 48 : yb - 36, t, taille: 17, couleur: v === me ? 'rouge' : 'encre', gras: v !== mi && v !== ma }));
  el.push({ type: 'ligne', x1: X(q1), y1: 210, x2: X(q3), y2: 210, couleur: 'violet', epaisseur: 2 });
  el.push({ type: 'texte', x: (X(q1) + X(q3)) / 2, y: 234, t: 'écart interquartile : 12 − 7 = 5', couleur: 'violet', taille: 17, gras: true });
  el.push({ type: 'texte', x: 40, y: 22, t: 'Série de 12 valeurs : 4 6 7 8 9 10 11 12 12 14 16 19', taille: 17, ancre: 'start', couleur: 'gris' });
  pose(F, 'boite-moustaches', 'libre', { W: 600, H: 292, elements: el }, 'Série de 12 valeurs résumée par ses indicateurs : Q₁ = 7 (rang 3), médiane 10,5, Q₃ = 12 (rang 9). La boîte, de Q₁ à Q₃, contient la moitié centrale des valeurs.', '### Écart interquartile');
}
{
  const F = 'seconde/maths/vecteurs';
  const u = 62, O = [70, 290];
  const P = (x, y) => [O[0] + x * u, O[1] - y * u];
  const A = P(0, 0), B = P(4, 1), C = P(1, 3), D = P(5, 4), I = P(2.5, 2);
  pose(F, 'parallelogramme-abdc', 'libre', {
    W: 480, H: 320, elements: [
      { type: 'poly', points: [A, B, D, C], couleur: 'gris', fond: 'bleu', opacite: 0.05, epaisseur: 1.2 },
      { type: 'ligne', x1: A[0], y1: A[1], x2: D[0], y2: D[1], couleur: 'gris', epaisseur: 1.4, pointilles: true },
      { type: 'ligne', x1: B[0], y1: B[1], x2: C[0], y2: C[1], couleur: 'gris', epaisseur: 1.4, pointilles: true },
      { type: 'fleche', x1: A[0], y1: A[1], x2: B[0], y2: B[1], couleur: 'bleu', epaisseur: 3 },
      { type: 'fleche', x1: C[0], y1: C[1], x2: D[0], y2: D[1], couleur: 'bleu', epaisseur: 3 },
      { type: 'point', x: A[0], y: A[1], nom: 'A', dx: -12, dy: 8 }, { type: 'point', x: B[0], y: B[1], nom: 'B', dx: 12, dy: 12 },
      { type: 'point', x: C[0], y: C[1], nom: 'C', dx: -12, dy: -6 }, { type: 'point', x: D[0], y: D[1], nom: 'D', dx: 12, dy: -6 },
      { type: 'point', x: I[0], y: I[1], nom: 'I', couleur: 'rouge', dx: 0, dy: -12 },
      { type: 'vec', x: (A[0] + B[0]) / 2 + 6, y: (A[1] + B[1]) / 2 + 30, t: 'AB', couleur: 'bleu' },
      { type: 'vec', x: (C[0] + D[0]) / 2 - 4, y: (C[1] + D[1]) / 2 - 14, t: 'CD', couleur: 'bleu' },
    ],
  }, 'Les vecteurs AB et CD sont égaux : ABDC est un parallélogramme (attention à l’ordre des lettres), et ses diagonales AD et BC ont le même milieu I.', '### Égalité de vecteurs');
  const A2 = [70, 250], B2 = [300, 200], C2 = [400, 60];
  pose(F, 'relation-chasles', 'libre', {
    W: 480, H: 290, elements: [
      { type: 'fleche', x1: A2[0], y1: A2[1], x2: B2[0], y2: B2[1], couleur: 'bleu', epaisseur: 3 },
      { type: 'fleche', x1: B2[0], y1: B2[1], x2: C2[0], y2: C2[1], couleur: 'vert', epaisseur: 3 },
      { type: 'fleche', x1: A2[0], y1: A2[1], x2: C2[0], y2: C2[1], couleur: 'rouge', epaisseur: 3 },
      { type: 'point', x: A2[0], y: A2[1], nom: 'A', dx: -12, dy: 12 }, { type: 'point', x: B2[0], y: B2[1], nom: 'B', dx: 14, dy: 14 }, { type: 'point', x: C2[0], y: C2[1], nom: 'C', dx: 12, dy: -6 },
      { type: 'vec', x: 190, y: 252, t: 'AB', couleur: 'bleu' }, { type: 'vec', x: 378, y: 142, t: 'BC', couleur: 'vert' }, { type: 'vec', x: 196, y: 128, t: 'AC', couleur: 'rouge' },
      { type: 'texte', x: 240, y: 284, t: 'AB + BC = AC (en vecteurs)', taille: 14, gras: true },
    ],
  }, 'Relation de Chasles : enchaîner le vecteur AB puis le vecteur BC revient à aller directement de A à C ; le point B, arrivée du premier et départ du second, disparaît.', '### Somme — la relation de Chasles');
  const d = [120, -50];
  const fl = (o, k, c) => ({ type: 'fleche', x1: o[0], y1: o[1], x2: o[0] + k * d[0], y2: o[1] + k * d[1], couleur: c, epaisseur: 3 });
  pose(F, 'multiplication-reel', 'libre', {
    W: 520, H: 280, elements: [
      fl([40, 100], 1, 'bleu'), fl([190, 130], 2, 'vert'), fl([480, 190], -1.5, 'rouge'),
      { type: 'vec', x: 92, y: 64, t: 'u', couleur: 'bleu' },
      { type: 'vec', x: 290, y: 64, t: '2u', couleur: 'vert' },
      { type: 'vec', x: 430, y: 255, t: '−1,5u', couleur: 'rouge' },
    ],
  }, 'Les vecteurs 2u et −1,5u ont la même direction que u : 2u a le même sens et une longueur doublée, −1,5u est de sens opposé et 1,5 fois plus long.', '### Multiplication par un réel');
}

// ───────────────────────── Terminale technologique ─────────────────────────
/** Coupe de profil d'un cône de révolution à deux nappes (demi-angle alpha) par un plan (trace rouge). */
function coneProfil({ W = 210, H = 250, type = 'cercle', titre = '', vocabulaire = false } = {}) {
  const a = (30 * PI) / 180;
  const S = [W / 2, H / 2 + 12];
  const L = 115;
  const P = (x, y) => [S[0] + x, S[1] - y];
  let g = '';
  const haut = [P(-L * Math.tan(a), L), P(L * Math.tan(a), L)], bas = [P(-L * Math.tan(a), -L), P(L * Math.tan(a), -L)];
  g += polygone([P(0, 0), ...haut], { couleur: 'none', fond: BLEU, opacite: 0.1, epaisseur: 0 }) + polygone([P(0, 0), ...bas], { couleur: 'none', fond: BLEU, opacite: 0.1, epaisseur: 0 });
  g += ligne(...haut[0], ...bas[1], { couleur: ENCRE, epaisseur: 2 }) + ligne(...haut[1], ...bas[0], { couleur: ENCRE, epaisseur: 2 });
  g += ligne(S[0], S[1] - L - 8, S[0], S[1] + L + 8, { couleur: ATTENUE, epaisseur: 1.3, pointilles: true });
  // Intersection d'une droite (point p, direction u) avec les deux génératrices x = ± y tan(a)
  const inter = (p, u, s) => { const t = (s * Math.tan(a) * p[1] - p[0]) / (u[0] - s * Math.tan(a) * u[1]); return [p[0] + t * u[0], p[1] + t * u[1]]; };
  let p, u;
  if (type === 'cercle') { p = [0, -70]; u = [1, 0]; }
  if (type === 'ellipse') { p = [0, -70]; u = [Math.cos((25 * PI) / 180), Math.sin((25 * PI) / 180)]; }
  if (type === 'parabole') { p = [0, -70]; u = [Math.sin(a), Math.cos(a)]; }
  if (type === 'hyperbole') { p = [30, 0]; u = [0, 1]; }
  if (p) {
    // Trace du plan, limitée à la bande |y| <= L + 6 et à la largeur du panneau
    const borne = (t) => { const q = [p[0] + t * u[0], p[1] + t * u[1]]; return Math.abs(q[1]) <= L + 6 && Math.abs(q[0]) <= W / 2 - 4; };
    let t1 = 0, t2 = 0;
    while (borne(t1 - 1)) t1 -= 1;
    while (borne(t2 + 1)) t2 += 1;
    g += ligne(...P(p[0] + t1 * u[0], p[1] + t1 * u[1]), ...P(p[0] + t2 * u[0], p[1] + t2 * u[1]), { couleur: ROUGE, epaisseur: 1.6 });
    const i1 = inter(p, u, 1), i2 = inter(p, u, -1);
    const dans = (q) => Math.abs(q[1]) <= L + 1;
    if (type === 'parabole') { const q = Number.isFinite(i1[0]) && dans(i1) ? i1 : i2; const fin = [q[0] + 200 * u[0], q[1] + 200 * u[1]]; g += ligne(...P(...q), ...P(...(Math.abs(fin[1]) > L ? [q[0] + ((-L - q[1]) / u[1]) * u[0], -L] : fin)), { couleur: ROUGE, epaisseur: 4.5 }); g += point(...P(...q), '', { couleur: ROUGE }); }
    else if (type === 'hyperbole') { g += point(...P(...i1), '', { couleur: ROUGE }) + point(...P(...i2), '', { couleur: ROUGE }); g += ligne(...P(...i1), ...P(p[0], L), { couleur: ROUGE, epaisseur: 4.5 }) + ligne(...P(...i2), ...P(p[0], -L), { couleur: ROUGE, epaisseur: 4.5 }); }
    else { g += ligne(...P(...i1), ...P(...i2), { couleur: ROUGE, epaisseur: 4.5 }); g += point(...P(...i1), '', { couleur: ROUGE }) + point(...P(...i2), '', { couleur: ROUGE }); }
  }
  g += point(...S, '', { couleur: ENCRE }) + texte(S[0] - 12, S[1] + 5, 'S', { taille: 14, gras: true, ancre: 'end' });
  if (vocabulaire) {
    g += arcPx(S[0], S[1], 46, 90, 90 + 30, { couleur: ORANGE });
    g += texte(S[0] - 14, S[1] - 54, 'α', { taille: 15, couleur: ORANGE });
    g += texte(S[0] + 5, S[1] + L - 2, 'axe', { taille: 13, couleur: ATTENUE, ancre: 'start' });
    g += texte(haut[0][0] + 4, haut[0][1] - 6, 'génératrice', { taille: 13, couleur: ENCRE, ancre: 'start' });
  }
  if (titre) g += texte(W / 2, 20, titre, { taille: 15, gras: true, couleur: ROUGE });
  return enveloppe(W, H, g);
}
SCHEMAS.coneProfil = coneProfil;
{
  const F = 'terminale-techno/maths/activites-geometriques-std2a';
  pose(F, 'sections-cone-profil', 'panneaux', {
    W: 640, H: 300, panneaux: [
      { schema: 'coneProfil', x: 0, y: 0, w: 160, h: 300, params: { W: 160, H: 300, type: 'cercle', titre: 'cercle', vocabulaire: true } },
      { schema: 'coneProfil', x: 160, y: 0, w: 160, h: 300, params: { W: 160, H: 300, type: 'ellipse', titre: 'ellipse' } },
      { schema: 'coneProfil', x: 320, y: 0, w: 160, h: 300, params: { W: 160, H: 300, type: 'parabole', titre: 'parabole' } },
      { schema: 'coneProfil', x: 480, y: 0, w: 160, h: 300, params: { W: 160, H: 300, type: 'hyperbole', titre: 'hyperbole' } },
    ],
  }, 'Le cône à deux nappes vu de profil (schéma) et la trace du plan de coupe en rouge : perpendiculaire à l’axe (cercle), incliné (ellipse), parallèle à une génératrice (parabole), coupant les deux nappes (hyperbole).', '## 2. Sections planes d\'un cône : la famille des coniques');
  const pan = (titre, x, y, params) => ({ schema: 'graphe', x, y, w: 320, h: 230, titre, params: { W: 320, H: 230, xmin: -4.6, xmax: 4.6, ymin: -3.1, ymax: 3.1, graduer: false, nomX: '', nomY: '', ...params } });
  const ell = (x) => 2 * Math.sqrt(Math.max(0, 1 - (x * x) / 9));
  const hyp = (x) => (Math.abs(x) >= 2 ? Math.sqrt((x * x) / 4 - 1) : NaN);
  pose(F, 'portraits-coniques', 'panneaux', {
    W: 640, H: 520, panneaux: [
      pan('cercle', 0, 30, { cercles: [{ x: 0, y: 0, r: 2.2, couleur: 'bleu' }], traits: [{ x1: 0, y1: 0, x2: 2.2 * Math.cos(0.6), y2: 2.2 * Math.sin(0.6), couleur: 'rouge', epaisseur: 2 }], points: [{ x: 0, y: 0, nom: 'O', dx: -10, dy: 16 }], textes: [{ x: 1.25, y: 1.15, t: 'r', couleur: 'rouge', gras: true }] }),
      pan('ellipse', 320, 30, {
        rects: [{ x1: -3, y1: -2, x2: 3, y2: 2, couleur: 'gris', opacite: 0, epaisseur: 1.2 }],
        courbes: [{ f: ell, a: -3, b: 3, couleur: 'bleu', n: 300 }, { f: (x) => -ell(x), a: -3, b: 3, couleur: 'bleu', n: 300 }],
        segments: [{ x1: -3, y1: 0, x2: 3, y2: 0, couleur: 'rouge', pointilles: false, epaisseur: 2 }, { x1: 0, y1: -2, x2: 0, y2: 2, couleur: 'vert', pointilles: false, epaisseur: 2 }],
        points: [{ x: -3, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 2 }, { x: 0, y: -2 }, { x: 0, y: 0, nom: 'O', dx: 10, dy: 16 }],
        textes: [{ x: 1.7, y: 0.25, t: 'grand axe 2a', couleur: 'rouge', taille: 12 }, { x: -0.15, y: 1.2, t: 'petit axe 2b', couleur: 'vert', taille: 12, ancre: 'end' }],
      }),
      pan('parabole', 0, 290, { courbes: [{ f: (x) => 0.45 * x * x - 2.2, couleur: 'bleu' }], segments: [{ x1: 0, y1: -3.1, x2: 0, y2: 3.1, couleur: 'violet' }], points: [{ x: 0, y: -2.2, nom: 'sommet', dx: 12, dy: 18, ancre: 'start' }], textes: [{ x: 0.15, y: 2.6, t: 'axe', couleur: 'violet', ancre: 'start', taille: 12 }] }),
      pan('hyperbole', 320, 290, {
        courbes: [{ f: hyp, couleur: 'bleu', n: 600 }, { f: (x) => -hyp(x), couleur: 'bleu', n: 600 }, { f: (x) => x / 2, couleur: 'gris', epaisseur: 1.3, pointilles: true }, { f: (x) => -x / 2, couleur: 'gris', epaisseur: 1.3, pointilles: true }],
        points: [{ x: 2, y: 0, nom: 'sommet', dx: 6, dy: 18, ancre: 'start' }, { x: -2, y: 0 }, { x: 0, y: 0, nom: 'O', dx: 0, dy: -10 }],
        textes: [{ x: 3.4, y: 2.2, t: 'asymptotes', couleur: 'gris', taille: 12, ancre: 'end' }],
      }),
    ],
  }, 'Portraits des coniques : le cercle (centre, rayon), l’ellipse dans son rectangle encadrant (grand axe, petit axe), la parabole (sommet, axe) et l’hyperbole à deux branches guidées par ses asymptotes.', '## 3. Portrait de chaque conique — le vocabulaire du dessinateur');
  // Perspective centrale d'une voie ferrée : X = xc + s·x·d/(d+z), Y = yh + s·h·d/(d+z)
  const xc = 300, yh = 70, s = 110, d = 2, h = 1.5;
  const Pp = (x, z) => [xc + (s * x * d) / (d + z), yh + (s * h * d) / (d + z)];
  const el = [
    { type: 'ligne', x1: 20, y1: yh, x2: 580, y2: yh, couleur: 'violet', epaisseur: 1.6 },
    { type: 'texte', x: 24, y: yh - 8, t: 'ligne d’horizon', couleur: 'violet', taille: 13, ancre: 'start' },
    { type: 'point', x: xc, y: yh, nom: 'F', couleur: 'rouge', dx: 0, dy: -10 },
  ];
  for (const x of [-1, 1]) { const [x1, y1] = Pp(x, -0.55); el.push({ type: 'ligne', x1, y1, x2: xc, y2: yh, couleur: 'rouge', epaisseur: 1.2, pointilles: true }); const [x2, y2] = Pp(x, 40); el.push({ type: 'ligne', x1, y1, x2, y2, couleur: 'encre', epaisseur: 3 }); }
  for (let z = 0; z <= 14; z++) { const [x1, y1] = Pp(-1.35, z), [x2, y2] = Pp(1.35, z); el.push({ type: 'ligne', x1, y1, x2, y2, couleur: 'orange', epaisseur: z < 6 ? 3 : 2 }); }
  el.push({ type: 'texte', x: 520, y: 250, t: 'traverses (frontales) :', couleur: 'orange', taille: 13 });
  el.push({ type: 'texte', x: 520, y: 268, t: 'restent horizontales', couleur: 'orange', taille: 13 });
  el.push({ type: 'texte', x: 80, y: 250, t: 'rails parallèles :', couleur: 'encre', taille: 13 });
  el.push({ type: 'texte', x: 80, y: 268, t: 'ils fuient vers F', couleur: 'encre', taille: 13 });
  pose(F, 'perspective-voie-ferree', 'libre', { W: 600, H: 290, elements: el }, 'Voie ferrée en perspective centrale : les rails, perpendiculaires au tableau, fuient vers le point de fuite principal F sur l’horizon ; les traverses, frontales, restent horizontales et se resserrent au loin.', '### Les trois règles des droites');
}
{
  const F = 'terminale-techno/maths/algorithmique-programmation';
  const notes = [12, 15, 8, 17, 9];
  const el = [];
  const case_ = (x, y, v, garde, i) => {
    el.push({ type: 'rect', x, y, w: 64, h: 44, fond: garde === null ? '#eef3fb' : garde ? 'vert' : 'rouge', opacite: garde === null ? 1 : 0.15, bord: garde === null ? 'bleu' : garde ? 'vert' : 'rouge', epaisseur: 1.8 });
    el.push({ type: 'texte', x: x + 32, y: y + 28, t: String(v), taille: 18, gras: true });
    if (i !== undefined) el.push({ type: 'texte', x: x + 32, y: y - 8, t: String(i), taille: 12, couleur: 'gris' });
  };
  notes.forEach((v, i) => case_(130 + i * 72, 40, v, null, i));
  el.push({ type: 'texte', x: 118, y: 68, t: 'notes', taille: 15, ancre: 'end', gras: true });
  el.push({ type: 'texte', x: 118, y: 30, t: 'indices', taille: 12, ancre: 'end', couleur: 'gris' });
  notes.forEach((v, i) => {
    const ok = v >= 10;
    el.push({ type: 'texte', x: 162 + i * 72, y: 118, t: ok ? '≥ 10 ✓' : '< 10 ✗', taille: 13, couleur: ok ? 'vert' : 'rouge', gras: true });
  });
  let k = 0;
  notes.forEach((v, i) => { if (v >= 10) { el.push({ type: 'fleche', x1: 162 + i * 72, y1: 126, x2: 202 + k * 72 - 8, y2: 168, couleur: 'vert', epaisseur: 1.6, pointe: 8 }); k++; } });
  [12, 15, 17].forEach((v, j) => case_(170 + j * 72, 170, v, true, j));
  el.push({ type: 'texte', x: 158, y: 198, t: 'bonnes', taille: 15, ancre: 'end', gras: true });
  el.push({ type: 'texte', x: 410, y: 198, t: '← append', taille: 14, ancre: 'start', couleur: 'vert' });
  pose(F, 'filtrer-liste', 'libre', { W: 520, H: 230, elements: el }, 'Filtrer une liste : on parcourt notes, on teste chaque valeur, et seules celles qui vérifient la condition (au moins 10) sont ajoutées à la liste bonnes par append.', '## 5. Sélection de données : filtrer une liste');
}
{
  const F = 'terminale-techno/maths/fonction-inverse';
  pose(F, 'hyperbole-inverse', 'graphe', {
    W: 480, orthonorme: true, xmin: -4.2, xmax: 4.2, ymin: -3.2, ymax: 3.2,
    courbes: [{ f: (x) => 1 / x, a: -4.2, b: -0.05, couleur: 'bleu' }, { f: (x) => 1 / x, a: 0.05, b: 4.2, couleur: 'bleu', nom: 'y = 1/x', nx: 2.6, ndx: 0, ndy: -14 }],
    points: [-2, -1, -0.5, 0.5, 1, 2].map((x) => ({ x, y: 1 / x, couleur: 'rouge', r: 4.5 })),
    segments: [{ x1: -1, y1: -1, x2: 1, y2: 1, couleur: 'violet' }],
    textes: [{ x: 1.1, y: 1.25, t: '(1 ; 1)', couleur: 'rouge', ancre: 'start', taille: 13 }, { x: -1.1, y: -1.45, t: '(−1 ; −1)', couleur: 'rouge', ancre: 'end', taille: 13 }],
  }, 'L’hyperbole de la fonction inverse : deux branches, symétriques par rapport à l’origine, qui se rapprochent des deux axes sans les toucher. Points repères en rouge.', '## 4. La courbe : une hyperbole');
  const f = (x) => 2 * x + 1 + 8 / x;
  pose(F, 'exemple-ax-b-c-sur-x', 'graphe', {
    W: 520, H: 380, xmin: -0.6, xmax: 8.4, ymin: -2, ymax: 30, pasX: 1, pasY: 5,
    courbes: [{ f, a: 0.25, b: 8.4, couleur: 'bleu', nom: 'y = 2x + 1 + 8/x', nx: 7.2, ndx: -30, ndy: -22 }, { f: (x) => 2 * x + 1, couleur: 'orange', epaisseur: 1.8, pointilles: true, nom: 'y = 2x + 1', nx: 7.6, ndx: 6, ndy: 26 }],
    segments: [{ x1: 2, y1: 0, x2: 2, y2: 9 }, { x1: 0, y1: 9, x2: 2, y2: 9 }],
    points: [{ x: 2, y: 9, nom: 'minimum (2 ; 9)', couleur: 'rouge', dx: 12, dy: 20, ancre: 'start' }],
  }, 'Courbe de f(x) = 2x + 1 + 8/x sur les réels strictement positifs : elle longe l’axe des ordonnées près de 0, atteint son minimum 9 en x = 2, puis se rapproche de la droite y = 2x + 1.', '### Exemple complet');
}
{
  const F = 'terminale-techno/maths/fonctions-exponentielles';
  pose(F, 'croissance-decroissance', 'graphe', {
    W: 540, H: 340, xmin: -6, xmax: 21, ymin: -0.4, ymax: 3.2, pasX: 5, pasY: 0.5,
    courbes: [{ f: (x) => 1.05 ** x, couleur: 'vert', nom: 'y = 1,05^x', nx: 19, ndx: -10, ndy: -14 }, { f: (x) => 0.85 ** x, couleur: 'rouge', nom: 'y = 0,85^x', nx: 9, ndx: 10, ndy: -12, ancre: 'start' }],
    points: [{ x: 0, y: 1 }],
  }, 'Les deux courbes passent par (0 ; 1) : 1,05ˣ est croissante (base plus grande que 1, capital à 5 %), 0,85ˣ est décroissante (base entre 0 et 1, perte de 15 % par an) et reste positive.', '## 2. Sens de variation et allure de la courbe selon $a$');
}
{
  const F = 'terminale-techno/maths/logarithme-decimal';
  pose(F, 'courbe-log', 'graphe', {
    W: 540, H: 320, xmin: -0.8, xmax: 12.5, ymin: -1.6, ymax: 1.6, pasX: 1, pasY: 0.5,
    courbes: [{ f: Math.log10, a: 0.02, b: 12.5, couleur: 'bleu', nom: 'y = log x', nx: 11, ndx: 0, ndy: -12 }],
    segments: [{ x1: 10, y1: 0, x2: 10, y2: 1 }, { x1: 0, y1: 1, x2: 10, y2: 1 }, { x1: 0.1, y1: 0, x2: 0.1, y2: -1 }, { x1: 0, y1: -1, x2: 0.1, y2: -1 }],
    points: [{ x: 1, y: 0, nom: 'log 1 = 0', couleur: 'rouge', dx: 10, dy: 36, ancre: 'start' }, { x: 10, y: 1, nom: 'log 10 = 1', couleur: 'rouge', dx: -10, dy: -10, ancre: 'end' }, { x: 0.1, y: -1, nom: 'log 0,1 = −1', couleur: 'rouge', dx: 12, dy: 5, ancre: 'start' }],
    rects: [{ x1: 0, y1: -1.6, x2: 1, y2: 0, couleur: 'rouge', opacite: 0.07, epaisseur: 0 }],
  }, 'Courbe de la fonction log, définie pour x strictement positif et croissante : log x est négatif entre 0 et 1, nul en 1, positif après ; log 10 = 1 et log 0,1 = −1.', '## 2. Sens de variation');
  pose(F, 'doublement-capital', 'graphe', {
    W: 540, H: 320, xmin: -1.5, xmax: 26, ymin: -0.2, ymax: 2.9, pasX: 2, pasY: 0.5,
    courbes: [{ f: (x) => 1.04 ** x, a: 0, couleur: 'bleu', nom: 'y = 1,04^x', nx: 23, ndx: 4, ndy: 30 }, { f: () => 2, couleur: 'orange', epaisseur: 1.6, pointilles: true, nom: 'y = 2', nx: 3, ndx: 0, ndy: -8 }],
    segments: [{ x1: Math.log10(2) / Math.log10(1.04), y1: 0, x2: Math.log10(2) / Math.log10(1.04), y2: 2, couleur: 'rouge' }],
    points: [{ x: Math.log10(2) / Math.log10(1.04), y: 2, couleur: 'rouge', nom: 'x ≈ 17,7', dx: -12, dy: -10, ancre: 'end' }, { x: 17, y: 1.04 ** 17, r: 3, couleur: 'gris' }, { x: 18, y: 1.04 ** 18, r: 3, couleur: 'gris' }],
  }, 'Un capital placé à 4 % est multiplié par 1,04ˣ au bout de x années : il double quand 1,04ˣ = 2, soit x = log 2 ÷ log 1,04 ≈ 17,7, donc au cours de la 18e année.', '### Application phare : au bout de combien d\'années le capital double-t-il ?');
}
{
  const F = 'terminale-techno/maths/logique-ensembles';
  pose(F, 'venn-elements', 'libre', {
    W: 520, H: 270, elements: [
      { type: 'rect', x: 20, y: 30, w: 480, h: 200, rx: 8, bord: 'encre', fond: 'none' },
      { type: 'texte', x: 488, y: 220, t: 'E', taille: 16, gras: true, ancre: 'end', couleur: 'gris' },
      { type: 'cercle', x: 200, y: 130, r: 90, couleur: 'bleu', fond: 'bleu', opacite: 0.1 },
      { type: 'cercle', x: 320, y: 130, r: 90, couleur: 'rouge', fond: 'rouge', opacite: 0.1 },
      { type: 'texte', x: 140, y: 64, t: 'A', taille: 18, gras: true, couleur: 'bleu' }, { type: 'texte', x: 380, y: 64, t: 'B', taille: 18, gras: true, couleur: 'rouge' },
      { type: 'texte', x: 150, y: 120, t: '1', taille: 20 }, { type: 'texte', x: 170, y: 170, t: '2', taille: 20 },
      { type: 'texte', x: 260, y: 120, t: '3', taille: 20, gras: true, couleur: 'violet' }, { type: 'texte', x: 260, y: 165, t: '4', taille: 20, gras: true, couleur: 'violet' },
      { type: 'texte', x: 360, y: 145, t: '5', taille: 20 },
      { type: 'texte', x: 130, y: 258, t: 'A ∩ B = {3 ; 4}', taille: 14, gras: true, couleur: 'violet' }, { type: 'texte', x: 360, y: 258, t: 'A ∪ B = {1 ; 2 ; 3 ; 4 ; 5}', taille: 14, gras: true },
    ],
  }, 'A = {1 ; 2 ; 3 ; 4} et B = {3 ; 4 ; 5} : la partie commune aux deux disques est l’intersection {3 ; 4}, et la réunion regroupe tous les éléments, 3 et 4 comptés une seule fois.', '## 3. Réunion, intersection, complémentaire');
  const plats = ['pizza', 'burger'], boissons = ['eau', 'jus', 'soda'];
  const el = [];
  boissons.forEach((b, j) => el.push({ type: 'texte', x: 210 + j * 110, y: 40, t: b, gras: true, couleur: 'rouge', taille: 15 }));
  plats.forEach((p, i) => {
    el.push({ type: 'texte', x: 140, y: 90 + i * 60, t: p, gras: true, couleur: 'bleu', taille: 15, ancre: 'end' });
    boissons.forEach((b, j) => { el.push({ type: 'rect', x: 158 + j * 110, y: 58 + i * 60, w: 104, h: 52, fond: '#eef3fb', bord: 'gris', epaisseur: 1 }); el.push({ type: 'texte', x: 210 + j * 110, y: 90 + i * 60, t: `(${p} ; ${b})`, taille: 13 }); });
  });
  el.push({ type: 'texte', x: 140, y: 40, t: 'A \\ B', taille: 13, ancre: 'end', couleur: 'gris' });
  el.push({ type: 'texte', x: 290, y: 205, t: '2 × 3 = 6 couples', taille: 15, gras: true, couleur: 'violet' });
  pose(F, 'produit-cartesien-menu', 'libre', { W: 520, H: 220, elements: el }, 'Produit cartésien A × B en tableau à double entrée : une ligne par plat, une colonne par boisson, une case par couple ; 2 × 3 = 6 formules possibles.', '## 4. Couple et produit cartésien');
  pose(F, 'condition-necessaire-suffisante', 'libre', {
    W: 520, H: 250, elements: [
      { type: 'rect', x: 40, y: 30, w: 440, h: 190, rx: 95, fond: 'vert', opacite: 0.08, bord: 'vert' },
      { type: 'rect', x: 250, y: 75, w: 190, h: 100, rx: 50, fond: 'bleu', opacite: 0.12, bord: 'bleu' },
      { type: 'texte', x: 150, y: 110, t: 'x² = 9', taille: 18, gras: true, couleur: 'vert' },
      { type: 'texte', x: 150, y: 140, t: '(nécessaire)', taille: 13, couleur: 'vert' },
      { type: 'texte', x: 150, y: 180, t: 'x = −3', taille: 16 },
      { type: 'texte', x: 345, y: 118, t: 'x = 3', taille: 18, gras: true, couleur: 'bleu' },
      { type: 'texte', x: 345, y: 146, t: '(suffisant)', taille: 13, couleur: 'bleu' },
      { type: 'texte', x: 260, y: 245, t: 'si x = 3, alors x² = 9 : la réciproque est fausse', taille: 13, couleur: 'gris' },
    ],
  }, 'Les valeurs vérifiant x = 3 sont incluses dans celles vérifiant x² = 9 : x = 3 suffit pour avoir x² = 9, mais x² = 9 n’est que nécessaire, car x = −3 convient aussi.', '## 9. Condition nécessaire, condition suffisante');
}
{
  const F = 'terminale-techno/maths/probabilites-conditionnelles';
  pose(F, 'arbre-machines', 'arbre', {
    W: 600, H: 260, pasX: 150, finX: 360,
    branches: [
      { nom: 'M₁', p: '0,6', enfants: [{ nom: 'D', p: '0,02', fin: 'P(M₁ ∩ D) = 0,012' }, { nom: '!D', p: '0,98' }] },
      { nom: 'M₂', p: '0,4', enfants: [{ nom: 'D', p: '0,05', fin: 'P(M₂ ∩ D) = 0,4 × 0,05 = 0,02', couleurFin: 'orange' }, { nom: '!D', p: '0,95' }] },
    ],
  }, 'Arbre du contrôle qualité : la branche de M₂ vers D porte la probabilité conditionnelle 0,05 ; le chemin M₂ puis D a pour probabilité 0,4 × 0,05 = 0,02.', '## 3. L\'arbre pondéré');
  pose(F, 'arbre-trois-fournisseurs', 'arbre', {
    W: 600, H: 330, pasX: 150, finX: 360,
    branches: [['A', '0,5', '0,04', '0,96', '0,5 × 0,04 = 0,02'], ['B', '0,3', '0,10', '0,90', '0,3 × 0,10 = 0,03'], ['C', '0,2', '0,05', '0,95', '0,2 × 0,05 = 0,01']].map(([n, p, r, nr, fin]) => ({ nom: n, p, enfants: [{ nom: 'R', p: r, fin, couleurFin: 'orange' }, { nom: '!R', p: nr }] })),
  }, 'Partition en trois fournisseurs : on additionne les trois chemins qui mènent à R (retard), P(R) = 0,02 + 0,03 + 0,01 = 0,06.', '### Formule des probabilités totales');
}
{
  const F = 'terminale-techno/maths/statistiques-deux-variables';
  const xs = [0, 1, 2, 3, 4], ys = [2000, 3000, 4400, 6700, 10100];
  const zs = ys.map((y) => Math.log10(y));
  const r = moindresCarres(xs.map((x, i) => [x, zs[i]]));
  pose(F, 'changement-variable-log', 'panneaux', {
    W: 640, H: 300, panneaux: [
      { schema: 'graphe', x: 0, y: 30, w: 320, h: 270, titre: 'nuage (x ; y) : courbe', params: { W: 320, H: 270, marge: 34, xmin: -0.6, xmax: 4.7, ymin: -800, ymax: 11500, pasX: 1, pasY: 2000, nomX: 'x', nomY: 'y', formatY: (y) => String(y).replace(/(\d)(\d{3})$/, '$1 $2'), courbes: [{ f: (x) => 10 ** (r.b + r.a * x), a: 0, b: 4.4, couleur: 'orange', epaisseur: 1.6, pointilles: true }], points: xs.map((x, i) => ({ x, y: ys[i], couleur: 'bleu', r: 4.5 })) } },
      { schema: 'graphe', x: 320, y: 30, w: 320, h: 270, titre: 'nuage (x ; z = log y) : droite', params: { W: 320, H: 270, marge: 34, xmin: -0.6, xmax: 4.7, ymin: 3.1, ymax: 4.15, pasX: 1, pasY: 0.2, nomX: 'x', nomY: 'z', courbes: [{ f: (x) => r.a * x + r.b, couleur: 'orange', epaisseur: 2 }], points: xs.map((x, i) => ({ x, y: zs[i], couleur: 'bleu', r: 4.5 })), textesPx: [{ x: 150, y: 70, t: 'z = 0,175x + 3,30', couleur: 'orange', gras: true }] } },
    ],
  }, 'Abonnés d’une chaîne : le nuage (x ; y) monte de plus en plus vite, mais le nuage (x ; log y) est presque aligné sur la droite z = 0,175x + 3,30, d’où y ≈ 1 995 × 1,50ˣ.', '## 4. Le changement $z = \\log(y)$ — croissances exponentielles');
}
{
  const F = 'terminale-techno/maths/suites-arithmetiques-geometriques';
  const n = 6, c = 34, o = [120, 30];
  const el = [];
  for (let i = 1; i <= n; i++) for (let k = 0; k < n + 1; k++) {
    const bleu = k < i;
    el.push({ type: 'rect', x: o[0] + k * c, y: o[1] + (i - 1) * c, w: c, h: c, fond: bleu ? 'bleu' : 'orange', opacite: bleu ? 0.35 : 0.3, bord: '#ffffff', epaisseur: 2 });
  }
  for (let i = 1; i <= n; i++) el.push({ type: 'texte', x: o[0] - 12, y: o[1] + (i - 0.5) * c + 5, t: String(i), ancre: 'end', taille: 14, couleur: 'bleu', gras: true });
  el.push({ type: 'texte', x: o[0] + (n + 1) * c + 16, y: o[1] + 60, t: 'bleu : 1 + 2 + … + 6', ancre: 'start', taille: 14, couleur: 'bleu', gras: true });
  el.push({ type: 'texte', x: o[0] + (n + 1) * c + 16, y: o[1] + 88, t: 'orange : la même somme,', ancre: 'start', taille: 14, couleur: 'orange', gras: true });
  el.push({ type: 'texte', x: o[0] + (n + 1) * c + 16, y: o[1] + 108, t: 'retournée', ancre: 'start', taille: 14, couleur: 'orange', gras: true });
  el.push({ type: 'texte', x: o[0] + (n + 1) * c + 16, y: o[1] + 150, t: 'rectangle 6 × 7 = 42', ancre: 'start', taille: 14 });
  el.push({ type: 'texte', x: o[0] + (n + 1) * c + 16, y: o[1] + 176, t: 'somme = 42 ÷ 2 = 21', ancre: 'start', taille: 15, gras: true });
  el.push({ type: 'texte', x: o[0] + 3.5 * c, y: o[1] + n * c + 22, t: 'n + 1 = 7 colonnes', taille: 13, couleur: 'gris' });
  pose(F, 'somme-entiers-rectangle', 'libre', { W: 560, H: 270, elements: el }, 'Deux escaliers 1 + 2 + … + 6 forment un rectangle 6 × 7 : la somme vaut donc 6 × 7 ÷ 2 = 21. En général, 1 + 2 + … + n = n(n + 1) ÷ 2.', '## 5. Somme des $n$ premiers termes — suite arithmétique');
}
{
  const F = 'terminale-techno/maths/variables-aleatoires-binomiale';
  const el = [];
  const c = 44, o = [80, 50];
  const C = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = (r * (n - i + 1)) / i; return Math.round(r); };
  for (let k = 0; k <= 8; k++) el.push({ type: 'texte', x: o[0] + (k + 0.5) * c, y: o[1] - 10, t: String(k), taille: 13, couleur: 'gris', gras: true });
  el.push({ type: 'texte', x: o[0] - 10, y: o[1] - 10, t: 'n \\ k', taille: 12, couleur: 'gris', ancre: 'end' });
  for (let n = 0; n <= 8; n++) {
    el.push({ type: 'texte', x: o[0] - 12, y: o[1] + (n + 0.5) * c * 0.72 + 5, t: String(n), taille: 13, couleur: 'gris', gras: true, ancre: 'end' });
    for (let k = 0; k <= n; k++) {
      const hl = (n === 4 && (k === 1 || k === 2)) ? 'vert' : n === 5 && k === 2 ? 'orange' : null;
      el.push({ type: 'rect', x: o[0] + k * c, y: o[1] + n * c * 0.72, w: c, h: c * 0.72, fond: hl || '#eef3fb', opacite: hl ? 0.3 : 1, bord: 'gris', epaisseur: 0.8 });
      el.push({ type: 'texte', x: o[0] + (k + 0.5) * c, y: o[1] + (n + 0.5) * c * 0.72 + 5, t: String(C(n, k)), taille: 14, gras: !!hl });
    }
  }
  el.push({ type: 'fleche', x1: o[0] + 1.5 * c, y1: o[1] + 4.75 * c * 0.72, x2: o[0] + 2.3 * c, y2: o[1] + 5.3 * c * 0.72, couleur: 'vert', epaisseur: 1.8, pointe: 7 });
  el.push({ type: 'fleche', x1: o[0] + 2.5 * c, y1: o[1] + 4.85 * c * 0.72, x2: o[0] + 2.5 * c, y2: o[1] + 5.2 * c * 0.72, couleur: 'vert', epaisseur: 1.8, pointe: 7 });
  el.push({ type: 'texte', x: 520, y: 150, t: '4 + 6 = 10', taille: 16, gras: true, couleur: 'orange', ancre: 'start' });
  el.push({ type: 'texte', x: 520, y: 174, t: '(5 parmi… k = 2)', taille: 13, couleur: 'gris', ancre: 'start' });
  pose(F, 'triangle-pascal', 'libre', { W: 640, H: 356, elements: el.filter((e) => !(e.t && e.t.startsWith('(5 parmi'))) }, 'Triangle de Pascal jusqu’à n = 8 : chaque nombre est la somme des deux nombres situés au-dessus de lui (ligne précédente, même colonne et colonne de gauche), par exemple 4 + 6 = 10, coefficient de la ligne 5, colonne 2.', '### Le triangle de Pascal — l\'outil de calcul du programme');
  pose(F, 'loi-binomiale-4-06', 'batons', {
    W: 520, H: 300, n: 4, p: 0.6, pasY: 0.1, ymax: 0.4, esperance: true, titre: 'Loi binomiale B(4 ; 0,6)',
  }, 'Loi de X qui suit B(4 ; 0,6), nombre de lancers francs réussis sur 4 : l’espérance E(X) = 4 × 0,6 = 2,4 n’est pas une valeur possible de X, c’est une moyenne.', '## 6. Espérance de la loi binomiale');
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/complexes-exponentielle';
  const r2 = Math.SQRT2;
  pose(F, 'forme-exponentielle-oppose', 'graphe', {
    W: 460, orthonorme: true, xmin: -2.6, xmax: 2.6, ymin: -2.3, ymax: 2.3, nomX: '', nomY: '',
    cercles: [{ x: 0, y: 0, r: 2, couleur: 'gris', epaisseur: 1.4, pointilles: true }],
    fleches: [{ x1: 0, y1: 0, x2: r2, y2: r2, couleur: 'bleu' }, { x1: 0, y1: 0, x2: -r2, y2: -r2, couleur: 'rouge' }],
    arcs: [{ x: 0, y: 0, r: 34, a1: 0, a2: PI / 4, couleur: 'bleu', fleche: true }, { x: 0, y: 0, r: 50, a1: 0, a2: (5 * PI) / 4, couleur: 'rouge', fleche: true }],
    points: [{ x: r2, y: r2, nom: '2e^{iπ/4}', couleur: 'bleu', dx: 12, dy: -6, ancre: 'start' }, { x: -r2, y: -r2, nom: '2e^{i5π/4}', couleur: 'rouge', dx: -12, dy: 18, ancre: 'end' }],
    textes: [{ x: 0.6, y: 0.12, t: 'π/4', couleur: 'bleu', taille: 13, ancre: 'start' }, { x: -0.75, y: 0.62, t: '5π/4', couleur: 'rouge', taille: 13, ancre: 'end' }, { x: 2.05, y: -0.3, t: 'r = 2', couleur: 'gris', taille: 13, ancre: 'start' }],
  }, 'Les points d’affixes 2e^(iπ/4) et 2e^(i5π/4) sont sur le cercle de rayon 2 et symétriques par rapport à O : multiplier par −1 ajoute π à l’argument, d’où −2e^(iπ/4) = 2e^(i5π/4).', '## 2. Forme exponentielle');
  const gx = [1, 2, 3, 4].map((k) => ({ x: k * PI, t: k === 1 ? 'π' : `${k}π` })).concat([{ x: PI / 3, t: 'π/3', couleur: 'rouge' }]);
  pose(F, 'somme-sinusoides', 'graphe', {
    W: 620, H: 300, xmin: -0.4, xmax: 4.3 * PI, ymin: -2.5, ymax: 2.6, nomX: 'ωt', nomY: '', gradX: gx, gradY: [{ y: 2, t: '2' }, { y: 1, t: '1' }, { y: -1, t: '−1' }, { y: -2, t: '−2' }], origine: true,
    courbes: [
      { f: Math.cos, a: 0, couleur: 'vert', epaisseur: 1.6, pointilles: true },
      { f: (t) => Math.sqrt(3) * Math.sin(t), a: 0, couleur: 'orange', epaisseur: 1.6, pointilles: true },
      { f: (t) => 2 * Math.cos(t - PI / 3), a: 0, couleur: 'bleu', epaisseur: 3 },
    ],
    segments: [{ x1: PI / 3, y1: 0, x2: PI / 3, y2: 2, couleur: 'rouge' }],
    textesPx: [{ x: 600, y: 24, t: 'cos(ωt) + √3 sin(ωt) = 2 cos(ωt − π/3)', couleur: 'bleu', gras: true, ancre: 'end' }, { x: 600, y: 290, t: 'pointillés : cos(ωt) en vert, √3 sin(ωt) en orange', couleur: 'gris', taille: 12, ancre: 'end' }],
  }, 'La somme cos(ωt) + √3 sin(ωt) (en bleu) est une seule sinusoïde : amplitude A = 2, maximum atteint pour ωt = π/3, d’où 2 cos(ωt − π/3).', '## 7. Le cœur du chapitre en STI2D : $a\\cos(\\omega t) + b\\sin(\\omega t)$');
  pose(F, 'rotation-iz', 'graphe', {
    W: 440, orthonorme: true, xmin: -2.2, xmax: 2.2, ymin: -0.6, ymax: 2.1, nomX: '', nomY: '',
    fleches: [{ x1: 0, y1: 0, x2: 1, y2: 1, couleur: 'bleu' }, { x1: 0, y1: 0, x2: -1, y2: 1, couleur: 'rouge' }],
    arcs: [{ x: 0, y: 0, r: 60, a1: PI / 4, a2: (3 * PI) / 4, couleur: 'orange', fleche: true }],
    droits: [{ x: 0, y: 0, u: [1, 1], v: [-1, 1], taille: 12 }],
    points: [{ x: 1, y: 1, nom: 'M : 1 + i', couleur: 'bleu', dx: 12, dy: -6, ancre: 'start' }, { x: -1, y: 1, nom: 'M′ : −1 + i', couleur: 'rouge', dx: -12, dy: -6, ancre: 'end' }],
    textes: [{ x: 0, y: 1.45, t: 'quart de tour', couleur: 'orange', taille: 13 }],
  }, 'Multiplier par i, c’est faire tourner d’un quart de tour direct autour de O : le point M d’affixe 1 + i a pour image M′ d’affixe i(1 + i) = −1 + i.', '### $z \\mapsto az$ (avec $a = r\\,\\mathrm{e}^{\\mathrm{i}\\theta} \\neq 0$)');
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/equations-differentielles';
  pose(F, 'famille-condition-initiale', 'graphe', {
    W: 520, H: 340, xmin: -0.3, xmax: 2.6, ymin: -0.5, ymax: 10, pasX: 0.5, pasY: 1,
    courbes: [...[-5, -3, -2, 2, 3, 4].map((C) => ({ f: (x) => C * Math.exp(-2 * x) + 5, a: 0, couleur: '#9fb6d6', epaisseur: 1.5 })), { f: (x) => 5 - 4 * Math.exp(-2 * x), a: 0, couleur: 'rouge', epaisseur: 3, nom: 'y = 5 − 4e^{−2x}', nx: 0.55, ndx: 14, ndy: 18, ancre: 'start' }, { f: () => 5, couleur: 'vert', epaisseur: 1.6, pointilles: true, nom: 'équilibre y = 5', nx: 2.2, ndx: 0, ndy: -8 }],
    points: [{ x: 0, y: 1, nom: '(0 ; 1)', couleur: 'rouge', dx: 12, dy: 6, ancre: 'start' }],
  }, 'Les solutions de y′ = −2y + 10 forment une famille de courbes qui tendent toutes vers 5 ; la condition initiale y(0) = 1 n’en retient qu’une, y = 5 − 4e^(−2x), en rouge.', '## 5. La condition initiale : une seule courbe passe par le point donné');
  const u = (t) => 6 * (1 - Math.exp(-t));
  pose(F, 'charge-condensateur', 'graphe', {
    W: 540, H: 320, xmin: -0.3, xmax: 6.3, ymin: -0.5, ymax: 7.2, pasX: 1, pasY: 1, marge: 32, nomX: 't (s)', nomY: 'u (V)',
    courbes: [{ f: u, a: 0, couleur: 'bleu' }, { f: () => 6, couleur: 'vert', epaisseur: 1.6, pointilles: true, nom: 'E = 6 V', nx: 0.6, ndx: 0, ndy: -8 }],
    segments: [{ x1: 1, y1: 0, x2: 1, y2: u(1) }, { x1: 0, y1: u(1), x2: 1, y2: u(1) }, { x1: 5, y1: 0, x2: 5, y2: u(5) }],
    points: [{ x: 1, y: u(1), nom: 'τ = 1 s : 63 % de E, ≈ 3,8 V', couleur: 'rouge', dx: 12, dy: 18, ancre: 'start' }, { x: 5, y: u(5), nom: '5τ : plus de 99 %', couleur: 'rouge', dx: 0, dy: 24 }],
  }, 'Charge d’un condensateur initialement déchargé (E = 6 V, τ = RC = 1 s) : u(t) = 6(1 − e^(−t)) atteint 63 % de E à t = τ et dépasse 99 % à t = 5τ.', '## 6. Application 1 — charge d\'un condensateur (circuit RC)');
  const th = (t) => 20 + 360 * Math.exp(-0.05 * t);
  const t60 = 20 * Math.log(9);
  pose(F, 'refroidissement-newton', 'graphe', {
    W: 540, H: 330, xmin: -5, xmax: 125, ymin: -20, ymax: 410, pasX: 20, pasY: 50, marge: 34, nomX: 't (min)', nomY: 'θ (°C)',
    courbes: [{ f: th, a: 0, couleur: 'rouge' }, { f: () => 20, couleur: 'vert', epaisseur: 1.6, pointilles: true, nom: 'θ ambiante = 20 °C', nx: 95, ndx: 0, ndy: -8 }],
    segments: [{ x1: t60, y1: 0, x2: t60, y2: 60 }, { x1: 0, y1: 60, x2: t60, y2: 60 }],
    points: [{ x: 0, y: 380, nom: '380 °C', dx: 12, dy: 4, ancre: 'start' }, { x: t60, y: 60, nom: '60 °C après ≈ 44 min', couleur: 'bleu', dx: 10, dy: -12, ancre: 'start' }],
  }, 'Refroidissement de Newton : θ(t) = 20 + 360e^(−0,05t) décroît de 380 °C vers la température ambiante 20 °C ; la pièce descend à 60 °C au bout de 20 ln 9 ≈ 44 minutes.', '## 7. Application 2 — refroidissement de Newton');
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/exponentielle-logarithme';
  pose(F, 'signe-de-k', 'graphe', {
    W: 500, H: 320, xmin: -4.2, xmax: 4.2, ymin: -0.4, ymax: 5.2,
    courbes: [{ f: (x) => Math.exp(0.5 * x), couleur: 'vert', nom: 'k = 0,5 : croissante', nx: 3.0, ndx: -10, ndy: -10, ancre: 'end' }, { f: (x) => Math.exp(-0.5 * x), couleur: 'rouge', nom: 'k = −0,5 : décroissante', nx: -3.0, ndx: 10, ndy: -10, ancre: 'start' }],
    points: [{ x: 0, y: 1, nom: '(0 ; 1)', dx: 0, dy: 22 }],
  }, 'Courbes de x ↦ e^(kx) : croissante quand k est positif, décroissante quand k est négatif ; toutes passent par (0 ; 1) et restent au-dessus de l’axe des abscisses.', '### Le signe de $k$ pilote le sens de variation');
  pose(F, 'exp-ln-symetrie', 'graphe', {
    W: 480, orthonorme: true, xmin: -3.2, xmax: 4.8, ymin: -3.2, ymax: 4.8,
    courbes: [{ f: Math.exp, couleur: 'bleu', nom: 'y = eˣ', nx: 1.35, ndx: -14, ndy: 0, ancre: 'end' }, { f: Math.log, a: 0.01, couleur: 'rouge', nom: 'y = ln x', nx: 4.3, ndx: 0, ndy: -12 }, { f: (x) => x, couleur: 'gris', epaisseur: 1.3, pointilles: true, nom: 'y = x', nx: 4.2, ndx: -8, ndy: 22 }],
    points: [{ x: 0, y: 1, couleur: 'bleu', nom: '(0 ; 1)', dx: -8, dy: -8, ancre: 'end' }, { x: 1, y: 0, couleur: 'rouge', nom: '(1 ; 0)', dx: 8, dy: 20, ancre: 'start' }, { x: Math.E, y: 1, couleur: 'rouge', nom: '(e ; 1)', dx: 8, dy: 20, ancre: 'start' }, { x: 1, y: Math.E, couleur: 'bleu', nom: '(1 ; e)', dx: 10, dy: 4, ancre: 'start' }],
  }, 'Les courbes de exp et de ln sont symétriques par rapport à la droite y = x : (0 ; 1) correspond à (1 ; 0) et (1 ; e) à (e ; 1). La courbe de ln a pour asymptote l’axe des ordonnées.', '### Valeurs et variations');
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/integration-composition';
  const sq = (x) => x * x;
  pose(F, 'methode-rectangles', 'graphe', {
    W: 480, orthonorme: true, xmin: -0.12, xmax: 1.2, ymin: -0.12, ymax: 1.12, pasX: 0.2, pasY: 0.2,
    rects: [0, 1, 2, 3, 4].flatMap((i) => [{ x1: i * 0.2, y1: 0, x2: (i + 1) * 0.2, y2: sq((i + 1) * 0.2), couleur: 'orange', opacite: 0.12, epaisseur: 1.4 }, { x1: i * 0.2, y1: 0, x2: (i + 1) * 0.2, y2: sq(i * 0.2), couleur: 'vert', opacite: 0.35, epaisseur: 1.4 }]),
    courbes: [{ f: sq, a: 0, b: 1.1, couleur: 'bleu', nom: 'y = x²', nx: 1.05, ndx: 14, ndy: 10, ancre: 'start' }],
    textesPx: [{ x: 70, y: 40, t: 'rectangles bas : 0,24', couleur: 'vert', gras: true, ancre: 'start' }, { x: 70, y: 62, t: 'rectangles hauts : 0,44', couleur: 'orange', gras: true, ancre: 'start' }],
  }, 'Méthode des rectangles pour x² entre 0 et 1 avec 5 tranches : les rectangles sous la courbe (aire 0,24) et ceux qui la dépassent (aire 0,44) encadrent l’intégrale, qui vaut 1/3.', '### La méthode des rectangles');
  pose(F, 'signe-quelconque-sinus', 'graphe', {
    W: 540, H: 260, xmin: -0.4, xmax: 2.25 * PI, ymin: -1.4, ymax: 1.5, nomX: 't', nomY: '',
    gradX: [{ x: PI, t: 'π' }, { x: 2 * PI, t: '2π' }], gradY: [{ y: 1, t: '1' }, { y: -1, t: '−1' }], origine: true,
    aires: [{ f: Math.sin, a: 0, b: PI, couleur: 'bleu', opacite: 0.25 }, { f: Math.sin, a: PI, b: 2 * PI, couleur: 'rouge', opacite: 0.25 }],
    courbes: [{ f: Math.sin, a: 0, b: 2.2 * PI, couleur: 'encre', epaisseur: 2.4 }],
    textes: [{ x: PI / 2, y: 0.4, t: '+2', couleur: 'bleu', gras: true, taille: 18 }, { x: 1.5 * PI, y: -0.5, t: '−2', couleur: 'rouge', gras: true, taille: 18 }],
  }, 'Sur une période, l’aire au-dessus de l’axe (comptée +2) compense exactement celle en dessous (comptée −2) : l’intégrale de sin de 0 à 2π est nulle, alors que les aires ne le sont pas.', '### Fonctions de signe quelconque');
  const f = (x) => 4 - x * x, g = (x) => x * x - 2 * x;
  pose(F, 'aire-entre-courbes', 'graphe', {
    W: 480, H: 340, xmin: -2.2, xmax: 3.2, ymin: -2.2, ymax: 5,
    aires: [{ f, g, a: -1, b: 2, couleur: 'violet', opacite: 0.22 }],
    courbes: [{ f, couleur: 'bleu', nom: 'f (en haut)', nx: 0.9, ndx: 10, ndy: -14, ancre: 'start' }, { f: g, couleur: 'rouge', nom: 'g (en bas)', nx: 2.75, ndx: -12, ndy: 4, ancre: 'end' }],
    segments: [{ x1: -1, y1: 0, x2: -1, y2: 3 }, { x1: 2, y1: 0, x2: 2, y2: 0 }],
    points: [{ x: -1, y: 3, r: 3.5 }, { x: 2, y: 0, r: 3.5 }],
    textes: [{ x: 0.5, y: 1.2, t: 'aire = ∫ (f − g)', couleur: 'violet', gras: true }],
  }, 'Aire entre deux courbes : là où f est au-dessus de g, l’aire du domaine coloré est l’intégrale de f − g, la courbe du haut moins celle du bas.', '### Aire entre deux courbes');
}

// ───────────────────────── Terminale, enseignement scientifique ─────────────────────────
{
  const F = 'terminale/enseignement-scientifique/modeles-demographiques';
  const P = (n) => 1000 * 1.03 ** n, R = (n) => 5000 + 100 * n;
  const nx = racines((n) => P(n) - R(n), 1, 150)[0];
  pose(F, 'malthus-exemple', 'graphe', {
    W: 560, H: 340, xmin: -6, xmax: 125, ymin: -1500, ymax: 34000, pasX: 20, pasY: 5000, marge: 36, nomX: 'n (ans)', nomY: '',
    formatY: (y) => String(y).replace(/(\d)(\d{3})$/, '$1 $2'),
    courbes: [{ f: P, a: 0, b: 120, couleur: 'rouge', nom: 'population 1 000 × 1,03^n', nx: 112, ndx: -10, ndy: -6, ancre: 'end' }, { f: R, a: 0, b: 120, couleur: 'vert', nom: 'ressources 5 000 + 100n', nx: 30, ndx: 0, ndy: -12 }],
    segments: [{ x1: nx, y1: 0, x2: nx, y2: R(nx), couleur: 'gris' }],
    points: [{ x: nx, y: R(nx), couleur: 'encre', nom: `n ≈ ${Math.round(nx)}`, dx: 12, dy: 22, ancre: 'start' }],
  }, 'Exemple de Malthus : la population 1 000 × 1,03ⁿ part loin derrière les ressources 5 000 + 100n, mais l’exponentielle finit par dépasser la droite, ici après environ 89 ans.', '## 5. Le modèle de Malthus');
  pose(F, 'temps-doublement', 'graphe', {
    W: 560, H: 330, xmin: -5, xmax: 112, ymin: -0.4, ymax: 9.6, pasX: 10, pasY: 1, marge: 32, nomX: 't (ans)', nomY: '',
    courbes: [{ f: (t) => 1.02 ** t, a: 0, b: 110, couleur: 'bleu' }],
    textesPx: [{ x: 90, y: 60, t: 'effectif multiplié par 1,02^t', couleur: 'bleu', ancre: 'start', gras: true }],
    segments: [35, 70, 105].flatMap((t, i) => [{ x1: t, y1: 0, x2: t, y2: 2 ** (i + 1) }, { x1: 0, y1: 2 ** (i + 1), x2: t, y2: 2 ** (i + 1) }]),
    points: [0, 35, 70, 105].map((t, i) => ({ x: t, y: 2 ** i, couleur: 'rouge', nom: ['× 1', '× 2', '× 4', '× 8'][i], dx: -10, dy: -8, ancre: 'end', couleurNom: 'rouge' })),
    textes: [{ x: 17.5, y: 0.35, t: '35 ans', couleur: 'vert', gras: true }, { x: 52.5, y: 0.35, t: '35 ans', couleur: 'vert', gras: true }, { x: 87.5, y: 0.35, t: '35 ans', couleur: 'vert', gras: true }],
  }, 'Avec une croissance de 2 % par an, l’effectif double tous les 35 ans environ (1,02³⁵ ≈ 2) : × 2, puis × 4, puis × 8, quel que soit l’effectif de départ.', '## 6. Le temps de doublement');
}
{
  const F = 'terminale/enseignement-scientifique/probabilites-bayes-ia';
  pose(F, 'arbre-test-rare', 'arbre', {
    W: 620, H: 280, pasX: 150, finX: 360,
    branches: [
      { nom: 'M', p: '0,01', enfants: [{ nom: 'T+', p: 'Se = 0,99', fin: 'vrais positifs : 0,0099', couleurFin: 'vert' }, { nom: 'T−', p: '0,01', fin: 'faux négatifs : 0,0001' }] },
      { nom: '!M', p: '0,99', enfants: [{ nom: 'T+', p: '0,02', fin: 'faux positifs : 0,0198', couleurFin: 'rouge' }, { nom: 'T−', p: 'Sp = 0,98', fin: 'vrais négatifs : 0,9702' }] },
    ],
  }, 'Test d’une maladie rare : les faux positifs (0,0198) sont deux fois plus nombreux que les vrais positifs (0,0099), donc la valeur prédictive positive n’est que 0,0099 ÷ 0,0297 = 1/3.', '### Le paradoxe des tests rares');
  const X = (v) => 40 + ((v - 0.44) / 0.16) * 520;
  pose(F, 'intervalle-confiance', 'libre', {
    W: 600, H: 170, elements: [
      { type: 'fleche', x1: 30, y1: 110, x2: 580, y2: 110, couleur: 'gris', epaisseur: 1.6, pointe: 9 },
      ...[0.45, 0.48, 0.5, 0.52, 0.55, 0.58].flatMap((v) => [{ type: 'ligne', x1: X(v), y1: 104, x2: X(v), y2: 116, couleur: 'gris', epaisseur: 1.2 }, { type: 'texte', x: X(v), y: 136, t: fmt(v), taille: 12, couleur: 'gris' }]),
      { type: 'ligne', x1: X(0.488), y1: 110, x2: X(0.552), y2: 110, couleur: 'bleu', epaisseur: 8 },
      { type: 'ligne', x1: X(0.5), y1: 60, x2: X(0.5), y2: 150, couleur: 'rouge', epaisseur: 2, pointilles: true },
      { type: 'texte', x: X(0.5), y: 52, t: '50 %', couleur: 'rouge', gras: true },
      { type: 'point', x: X(0.52), y: 110, nom: '', couleur: 'encre' },
      { type: 'texte', x: X(0.52), y: 92, t: 'f = 0,52', taille: 13 },
      { type: 'texte', x: X(0.488), y: 160, t: '0,488', couleur: 'bleu', gras: true, taille: 13 }, { type: 'texte', x: X(0.552), y: 160, t: '0,552', couleur: 'bleu', gras: true, taille: 13 },
      { type: 'texte', x: 300, y: 24, t: 'intervalle de confiance à 95 % : f ± 1/√1000', couleur: 'bleu', gras: true, taille: 14 },
    ],
  }, 'Sondage sur 1 000 personnes avec f = 0,52 : l’intervalle de confiance va de 0,488 à 0,552 et contient 0,50, donc on ne peut pas conclure à une majorité.', '## 8. Estimation par intervalle de confiance');
}

// ───────────────────────── Terminale, maths complémentaires (et figures réutilisées en spécialité) ─────────────────────────
const tg = (f, df, a) => (x) => f(a) + df(a) * (x - a);
const CONVEXE_CONCAVE = (() => {
  const f1 = (x) => 0.5 * x * x, d1 = (x) => x;
  const f2 = (x) => -0.5 * x * x + 3, d2 = (x) => -x;
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 320, h: 270, titre, params: { W: 320, H: 270, xmin: -2.8, xmax: 2.8, ymin: -0.8, ymax: 3.6, graduer: false, nomX: '', nomY: '', ...params } });
  return {
    W: 640, H: 300, panneaux: [
      pan('convexe : courbe au-dessus des tangentes', 0, { courbes: [{ f: f1, couleur: 'bleu' }, { f: tg(f1, d1, -1.2), couleur: 'vert', epaisseur: 1.6 }, { f: tg(f1, d1, 1), couleur: 'vert', epaisseur: 1.6 }, { f: (x) => f1(-2) + ((f1(1.5) - f1(-2)) / 3.5) * (x + 2), a: -2, b: 1.5, couleur: 'orange', epaisseur: 2 }], points: [{ x: -1.2, y: f1(-1.2), couleur: 'vert', r: 3.5 }, { x: 1, y: f1(1), couleur: 'vert', r: 3.5 }, { x: -2, y: 2, couleur: 'orange', r: 3.5 }, { x: 1.5, y: f1(1.5), couleur: 'orange', r: 3.5 }], textes: [{ x: -0.3, y: 2.3, t: 'corde au-dessus', couleur: 'orange', taille: 12 }] }),
      pan('concave : courbe sous les tangentes', 320, { courbes: [{ f: f2, couleur: 'bleu' }, { f: tg(f2, d2, -1.2), couleur: 'vert', epaisseur: 1.6 }, { f: tg(f2, d2, 1), couleur: 'vert', epaisseur: 1.6 }, { f: (x) => f2(-2) + ((f2(1.5) - f2(-2)) / 3.5) * (x + 2), a: -2, b: 1.5, couleur: 'orange', epaisseur: 2 }], points: [{ x: -1.2, y: f2(-1.2), couleur: 'vert', r: 3.5 }, { x: 1, y: f2(1), couleur: 'vert', r: 3.5 }, { x: -2, y: f2(-2), couleur: 'orange', r: 3.5 }, { x: 1.5, y: f2(1.5), couleur: 'orange', r: 3.5 }], textes: [{ x: -0.2, y: 0.75, t: 'corde en dessous', couleur: 'orange', taille: 12 }] }),
    ],
  };
})();
const INFLEXION = (() => {
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 320, h: 270, titre, params: { W: 320, H: 270, xmin: -2, xmax: 2, ymin: -2.2, ymax: 2.2, graduer: false, ...params } });
  return {
    W: 640, H: 300, panneaux: [
      pan('x³ : point d’inflexion en O', 0, { courbes: [{ f: (x) => x ** 3, couleur: 'bleu' }, { f: () => 0, couleur: 'rouge', epaisseur: 2 }], points: [{ x: 0, y: 0, nom: 'O', couleur: 'rouge', dx: 10, dy: -10 }], textes: [{ x: -1.1, y: -1.8, t: 'concave', couleur: 'violet', gras: true }, { x: 1.1, y: 1.6, t: 'convexe', couleur: 'vert', gras: true }] }),
      pan('x⁴ : f″(0) = 0, pas d’inflexion', 320, { courbes: [{ f: (x) => x ** 4, couleur: 'bleu' }, { f: () => 0, couleur: 'rouge', epaisseur: 2 }], points: [{ x: 0, y: 0, couleur: 'rouge' }], textes: [{ x: 0, y: 1.6, t: 'convexe partout', couleur: 'vert', gras: true }] }),
    ],
  };
})();
const EXP_TANGENTE = {
  W: 480, H: 340, xmin: -3.2, xmax: 2.2, ymin: -2.2, ymax: 6,
  courbes: [{ f: Math.exp, couleur: 'bleu', nom: 'y = eˣ', nx: 1.7, ndx: -14, ndy: 0, ancre: 'end' }, { f: (x) => 1 + x, couleur: 'rouge', nom: 'y = 1 + x', nx: 1.1, ndx: 4, ndy: 28, ancre: 'start' }],
  points: [{ x: 0, y: 1, nom: '(0 ; 1)', dx: -10, dy: -10, ancre: 'end' }],
  textes: [{ x: -1.6, y: 3.0, t: 'convexe : eˣ ≥ 1 + x', couleur: 'bleu', gras: true }],
};
const AIRE_DEF = (() => {
  const f = (x) => 0.15 * x * x - 0.6 * x + 2.2;
  return {
    W: 500, H: 320, xmin: -0.5, xmax: 5.4, ymin: -0.5, ymax: 3.4, graduer: false,
    gradX: [{ x: 0.8, t: 'a', taille: 15 }, { x: 4.6, t: 'b', taille: 15 }],
    aires: [{ f, a: 0.8, b: 4.6, couleur: 'bleu', opacite: 0.22 }],
    courbes: [{ f, couleur: 'bleu', nom: '𝒞_f', nx: 5.1, ndx: 0, ndy: -12 }],
    segments: [{ x1: 0.8, y1: 0, x2: 0.8, y2: f(0.8), couleur: 'encre', pointilles: false }, { x1: 4.6, y1: 0, x2: 4.6, y2: f(4.6), couleur: 'encre', pointilles: false }],
    textes: [{ x: 2.7, y: 0.6, t: 'aire = ∫ f(x) dx', couleur: 'bleu', gras: true, taille: 15 }],
  };
})();
{
  const F = 'terminale/maths-complementaires/calcul-integral';
  pose(F, 'integrale-aire', 'graphe', AIRE_DEF, 'Pour f continue et positive, l’intégrale de a à b est l’aire du domaine coloré, limité par la courbe, l’axe des abscisses et les droites x = a et x = b.', '## 1. Définition : l\'intégrale comme aire');
  pose(F, 'valeur-moyenne', 'graphe', {
    W: 480, orthonorme: true, xmin: -0.4, xmax: 2.8, ymin: -0.3, ymax: 2.3, pasX: 0.5, pasY: 0.5,
    rects: [{ x1: 0, y1: 0, x2: 2, y2: 1, couleur: 'orange', opacite: 0.18, epaisseur: 1.6 }],
    aires: [{ f: (x) => x, a: 0, b: 2, couleur: 'bleu', opacite: 0.2 }],
    courbes: [{ f: (x) => x, a: 0, b: 2.5, couleur: 'bleu', nom: 'y = x', nx: 2.3, ndx: 18, ndy: 4 }, { f: () => 1, a: 0, b: 2, couleur: 'orange', epaisseur: 2.4, nom: 'μ = 1', nx: 2, ndx: 26, ndy: 5 }],
    textes: [{ x: 1.45, y: 0.4, t: 'aires égales : 2', couleur: 'violet', gras: true, taille: 13 }],
  }, 'Valeur moyenne de f(x) = x sur l’intervalle de 0 à 2 : μ = 1 est la hauteur du rectangle de même base dont l’aire (2) égale l’aire sous la courbe.', '## 5. Valeur moyenne');
  pose(F, 'aire-x-x2', 'graphe', {
    W: 460, orthonorme: true, xmin: -0.25, xmax: 1.35, ymin: -0.2, ymax: 1.3, pasX: 0.5, pasY: 0.5,
    aires: [{ f: (x) => x, g: (x) => x * x, a: 0, b: 1, couleur: 'violet', opacite: 0.28 }],
    courbes: [{ f: (x) => x, couleur: 'bleu', nom: 'y = x', nx: 0.6, ndx: -10, ndy: -8, ancre: 'end' }, { f: (x) => x * x, couleur: 'rouge', nom: 'y = x²', nx: 1.12, ndx: 10, ndy: 4, ancre: 'start' }],
    textes: [{ x: 0.52, y: 0.36, t: '1/6', couleur: 'violet', gras: true, taille: 18 }],
  }, 'Entre les courbes de x (au-dessus) et de x² (en dessous) sur l’intervalle de 0 à 1, l’aire vaut l’intégrale de x − x², soit 1/2 − 1/3 = 1/6.', '### Méthode 3 — Aire entre deux courbes');
}
const TVI_EXEMPLE = (() => {
  const f = (x) => x ** 3 + x - 1;
  const c = racines(f, 0, 1)[0];
  return {
    W: 480, H: 340, xmin: -0.5, xmax: 1.5, ymin: -1.5, ymax: 2, pasX: 0.5, pasY: 0.5,
    courbes: [{ f, couleur: 'bleu', nom: 'y = x³ + x − 1', nx: 1.15, ndx: 10, ndy: 6, ancre: 'start' }],
    segments: [{ x1: 1, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 1, x2: 1, y2: 1 }],
    traits: [{ x1: 0, y1: -1.45, x2: 0, y2: 1.95, couleur: 'gris', epaisseur: 1 }],
    points: [{ x: 0, y: -1, nom: 'f(0) = −1', couleur: 'rouge', dx: 10, dy: 16, ancre: 'start' }, { x: 1, y: 1, nom: 'f(1) = 1', couleur: 'vert', dx: 10, dy: -8, ancre: 'start' }, { x: c, y: 0, nom: 'c ≈ 0,68', couleur: 'violet', dx: -8, dy: -12, ancre: 'end' }],
  };
})();
{
  const F = 'terminale/maths-complementaires/continuite-tvi';
  const fl = Math.floor;
  pose(F, 'partie-entiere', 'graphe', {
    W: 480, H: 320, xmin: -1.6, xmax: 3.6, ymin: -1.6, ymax: 3.4,
    traits: [-1, 0, 1, 2, 3].map((k) => ({ x1: k, y1: k, x2: Math.min(k + 1, 3.6), y2: k, couleur: 'bleu', epaisseur: 3 })),
    points: [-1, 0, 1, 2, 3].flatMap((k) => [{ x: k, y: k, couleur: 'bleu', r: 4.5 }, ...(k + 1 <= 3.5 ? [{ x: k + 1, y: k, couleur: 'bleu', r: 4.5, creux: true }] : [])]),
    textes: [{ x: 1.15, y: 0.5, t: 'saut', couleur: 'rouge', gras: true, ancre: 'start' }],
    fleches: [{ x1: 1, y1: 0.1, x2: 1, y2: 0.9, couleur: 'rouge', epaisseur: 1.8, pointe: 8 }],
  }, 'La fonction partie entière fait un saut à chaque entier (point plein : valeur prise ; point creux : valeur exclue) ; elle n’est pas continue en ces points, et le TVI ne s’applique pas.', '### Une fonction qui n\'est pas continue');
  pose(F, 'tvi-exemple', 'graphe', TVI_EXEMPLE, 'f(x) = x³ + x − 1 est continue sur l’intervalle de 0 à 1, avec f(0) = −1 et f(1) = 1 : la courbe franchit forcément la hauteur 0, en un réel c (c ≈ 0,68).', '### Le théorème');
  const g = (x) => x ** 3 - 3 * x;
  const sols = racines((x) => g(x) - 1, -2, 2);
  pose(F, 'compter-solutions', 'graphe', {
    W: 480, H: 320, xmin: -2.4, xmax: 2.4, ymin: -2.6, ymax: 2.6,
    courbes: [{ f: g, a: -2, b: 2, couleur: 'bleu', nom: 'x³ − 3x', nx: 2, ndx: 8, ndy: 4, ancre: 'start' }, { f: () => 1, couleur: 'orange', epaisseur: 1.8, nom: 'y = 1', nx: -2.25, ndx: 0, ndy: -8, ancre: 'start' }],
    segments: [{ x1: -1, y1: -2.6, x2: -1, y2: 2.6, couleur: 'gris' }, { x1: 1, y1: -2.6, x2: 1, y2: 2.6, couleur: 'gris' }],
    points: sols.map((x) => ({ x, y: 1, couleur: 'rouge', r: 4.5 })),
    textes: [{ x: -1.5, y: -2.25, t: 'croissante', couleur: 'gris', taille: 12 }, { x: 0, y: -2.25, t: 'décroissante', couleur: 'gris', taille: 12 }, { x: 1.5, y: -2.25, t: 'croissante', couleur: 'gris', taille: 12 }],
  }, 'Pour x³ − 3x sur l’intervalle de −2 à 2, on découpe en trois morceaux monotones ; la droite y = 1 coupe la courbe une fois sur chacun : l’équation x³ − 3x = 1 a trois solutions.', '### 4.2 Compter les solutions quand $f$ n\'est pas monotone');
}
{
  const F = 'terminale/maths-complementaires/derivation-convexite';
  pose(F, 'convexe-concave', 'panneaux', CONVEXE_CONCAVE, 'Une fonction convexe a sa courbe au-dessus de ses tangentes (en vert) et sous ses cordes (en orange) ; une fonction concave, c’est l’inverse.', '### Définition : convexe, concave');
  pose(F, 'inflexion', 'panneaux', INFLEXION, 'En O, la courbe de x³ change de convexité et traverse sa tangente : c’est un point d’inflexion. Pour x⁴, f″(0) = 0 mais f″ ne change pas de signe : pas d’inflexion.', '### Comment le repérer');
  pose(F, 'exp-au-dessus-tangente', 'graphe', EXP_TANGENTE, 'La fonction exponentielle est convexe, donc sa courbe est au-dessus de sa tangente en 0, la droite y = 1 + x : pour tout réel x, eˣ ≥ 1 + x.', '## 6. Méthode : démontrer une inégalité par la convexité');
}
const EXP_LN = {
  W: 480, orthonorme: true, xmin: -3.2, xmax: 4.8, ymin: -3.2, ymax: 4.8,
  courbes: [{ f: Math.exp, couleur: 'bleu', nom: 'y = eˣ', nx: 1.35, ndx: -14, ndy: 0, ancre: 'end' }, { f: Math.log, a: 0.01, couleur: 'rouge', nom: 'y = ln x', nx: 4.3, ndx: 0, ndy: -12 }, { f: (x) => x, couleur: 'gris', epaisseur: 1.3, pointilles: true, nom: 'y = x', nx: 4.2, ndx: -8, ndy: 22 }],
  points: [{ x: 0, y: 1, couleur: 'bleu', nom: '(0 ; 1)', dx: -8, dy: -8, ancre: 'end' }, { x: 1, y: 0, couleur: 'rouge', nom: '(1 ; 0)', dx: 8, dy: 20, ancre: 'start' }, { x: Math.E, y: 1, couleur: 'rouge', nom: '(e ; 1)', dx: 8, dy: 20, ancre: 'start' }, { x: 1, y: Math.E, couleur: 'bleu', nom: '(1 ; e)', dx: 10, dy: 4, ancre: 'start' }],
};
{
  const F = 'terminale/maths-complementaires/exponentielle-logarithme';
  pose(F, 'exp-ln-symetrie', 'graphe', EXP_LN, 'Courbes de exp et de ln, symétriques par rapport à la droite y = x : ln est définie pour x strictement positif, croissante, avec l’axe des ordonnées pour asymptote ; ln 1 = 0 et ln e = 1.', '## 4. Dérivée, variations et limites du logarithme');
}
{
  const F = 'terminale/maths-complementaires/lois-densite-temps-attente';
  pose(F, 'densite-2x', 'graphe', {
    W: 440, H: 330, xmin: -0.2, xmax: 1.3, ymin: -0.2, ymax: 2.3, pasX: 0.5, pasY: 0.5,
    aires: [{ f: (x) => 2 * x, a: 0, b: 1, couleur: 'bleu', opacite: 0.1 }, { f: (x) => 2 * x, a: 0, b: 0.5, couleur: 'orange', opacite: 0.45 }],
    courbes: [{ f: (x) => 2 * x, a: 0, b: 1, couleur: 'bleu', nom: 'f(x) = 2x', nx: 1, ndx: -10, ndy: -10, ancre: 'end' }],
    segments: [{ x1: 1, y1: 0, x2: 1, y2: 2, couleur: 'bleu', pointilles: false }],
    textes: [{ x: 0.36, y: 0.13, t: '0,25', couleur: 'orange', gras: true, taille: 13 }, { x: 0.78, y: 0.55, t: 'aire totale 1', couleur: 'bleu', gras: true, taille: 13 }],
  }, 'Densité f(x) = 2x sur l’intervalle de 0 à 1 : l’aire totale sous la courbe vaut 1, et P(0 ≤ X ≤ 0,5) est l’aire orange, égale à 0,25.', '## 1. Définition : loi à densité');
  pose(F, 'densite-uniforme-bus', 'graphe', {
    W: 520, H: 260, xmin: -2, xmax: 23, ymin: -0.012, ymax: 0.075, pasX: 5, pasY: 0.05, nomX: 'x (min)', nomY: '', graduer: false,
    gradX: [5, 10, 15, 20].map((x) => ({ x, t: String(x) })), gradY: [{ y: 0.05, t: '1/20' }], origine: true,
    aires: [{ f: () => 0.05, a: 0, b: 20, couleur: 'bleu', opacite: 0.1 }, { f: () => 0.05, a: 5, b: 10, couleur: 'orange', opacite: 0.45 }],
    traits: [{ x1: 0, y1: 0.05, x2: 20, y2: 0.05, couleur: 'bleu', epaisseur: 2.6 }],
    textes: [{ x: 7.5, y: 0.02, t: '0,25', couleur: 'orange', gras: true, taille: 14 }],
  }, 'Loi uniforme sur l’intervalle de 0 à 20 minutes : la densité vaut 1/20, et la probabilité d’attendre entre 5 et 10 min est l’aire orange, 5 ÷ 20 = 0,25.', '### Probabilité');
  const l = 0.01;
  pose(F, 'densite-exponentielle', 'graphe', {
    W: 540, H: 280, xmin: -15, xmax: 420, ymin: -0.0012, ymax: 0.0115, pasX: 100, pasY: 0.005, marge: 40, nomX: 't (h)', nomY: '',
    formatY: (y) => fmt(Math.round(y * 1000) / 1000),
    aires: [{ f: (t) => l * Math.exp(-l * t), a: 100, b: 420, couleur: 'orange', opacite: 0.4 }],
    courbes: [{ f: (t) => l * Math.exp(-l * t), a: 0, couleur: 'bleu', nom: 'f(t) = 0,01e^{−0,01t}', nx: 40, ndx: 12, ndy: -10, ancre: 'start' }],
    textes: [{ x: 190, y: 0.0016, t: 'P(X > 100) = e^{−1} ≈ 0,368', couleur: 'orange', gras: true, taille: 13, ancre: 'start' }],
  }, 'Loi exponentielle de paramètre 0,01 : la probabilité qu’un composant dure plus de 100 heures est l’aire orange sous la densité au-delà de 100, soit e^(−1) ≈ 0,368.', '## 4. La loi exponentielle');
}
const PRIMITIVES_X2 = {
  W: 480, H: 380, xmin: -2.6, xmax: 2.6, ymin: -8.5, ymax: 13, pasY: 2,
  courbes: [...[-7, -3, 0, 7].map((C) => ({ f: (x) => x * x + C, couleur: '#7f9cc4', epaisseur: 1.8, nom: C === 0 ? 'x²' : C > 0 ? `x² + ${C}` : `x² − ${-C}`, nx: 2.0, ndx: 8, ndy: 4, ancre: 'start', taille: 12 })), { f: (x) => x * x + 4, couleur: 'rouge', epaisseur: 2.8 }],
  points: [{ x: 1, y: 5, couleur: 'rouge' }],
  textes: [{ x: -1.2, y: 11.6, t: 'F(1) = 5 : F(x) = x² + 4', couleur: 'rouge', gras: true }],
};
{
  const F = 'terminale/maths-complementaires/primitives-equations-differentielles';
  pose(F, 'famille-primitives', 'graphe', PRIMITIVES_X2, 'Les primitives de 2x sont les x² + C : leurs courbes se déduisent les unes des autres par translation verticale. La condition F(1) = 5 en retient une seule, x² + 4.', '## 2. Deux primitives diffèrent d\'une constante');
  pose(F, 'solutions-2y-plus-6', 'graphe', {
    W: 480, H: 340, xmin: -2.2, xmax: 1.2, ymin: -9, ymax: 4, pasX: 0.5, pasY: 1,
    courbes: [...[-2, -1, -0.5, 0.5, 1, 2].map((C) => ({ f: (x) => C * Math.exp(2 * x) - 3, couleur: C > 0 ? 'bleu' : 'violet', epaisseur: 1.8 })), { f: () => -3, couleur: 'rouge', epaisseur: 2.6 }],
    textes: [{ x: -2.1, y: -7.6, t: 'en rouge : solution constante y = −3', couleur: 'rouge', ancre: 'start', taille: 14 }],
  }, 'Solutions de y′ = 2y + 6 : y = Ce^(2x) − 3. Elles partent de la solution constante −3 (C = 0, en rouge) et s’en éloignent vers +∞ si C est positif, vers −∞ s’il est négatif.', '### 5.3 — $y\'=ay+b$ (avec $a\\neq 0$)');
  pose(F, 'refroidissement-100', 'graphe', {
    W: 520, H: 300, xmin: -1, xmax: 26, ymin: -8, ymax: 112, pasX: 5, pasY: 20, marge: 32, nomX: 't', nomY: 'θ (°C)',
    courbes: [{ f: (t) => 80 * Math.exp(-0.2 * t) + 20, a: 0, couleur: 'rouge', nom: 'θ(t) = 80e^{−0,2t} + 20', nx: 6, ndx: 10, ndy: -10, ancre: 'start' }, { f: () => 20, couleur: 'vert', epaisseur: 1.6, pointilles: true, nom: 'limite : 20 °C', nx: 20, ndx: 0, ndy: -8 }],
    points: [{ x: 0, y: 100, nom: '100 °C', dx: 12, dy: 4, ancre: 'start' }],
  }, 'Refroidissement : θ(t) = 80e^(−0,2t) + 20 part de 100 °C et tend vers la solution constante 20 °C, la température de la pièce.', '## 6. Modéliser avec $y\'=ay+b$');
}
{
  const F = 'terminale/maths-complementaires/probabilites-bayes-binomiale';
  pose(F, 'arbre-machines-70-30', 'arbre', {
    W: 600, H: 260, pasX: 150, finX: 360,
    branches: [
      { nom: 'A', p: '0,70', enfants: [{ nom: 'D', p: '0,02', fin: 'P(A ∩ D) = 0,70 × 0,02 = 0,014', couleurFin: 'orange' }, { nom: '!D', p: '0,98' }] },
      { nom: 'B', p: '0,30', enfants: [{ nom: 'D', p: '0,05', fin: 'P(B ∩ D) = 0,30 × 0,05 = 0,015', couleurFin: 'orange' }, { nom: '!D', p: '0,95' }] },
    ],
  }, 'Arbre des deux machines : le chemin « machine A puis défaut » vaut 0,70 × 0,02 = 0,014 ; avec le chemin par B (0,015), on obtient P(D) = 0,029.', '## 2. Arbre pondéré');
  const L = 440, x0 = 60, pA = 0.014 / 0.029;
  pose(F, 'bayes-inverser', 'libre', {
    W: 560, H: 170, elements: [
      { type: 'texte', x: 280, y: 26, t: 'Parmi les pièces défectueuses (P(D) = 0,029) :', taille: 14, gras: true },
      { type: 'rect', x: x0, y: 50, w: L * pA, h: 54, fond: 'bleu', opacite: 0.3, bord: 'bleu' },
      { type: 'rect', x: x0 + L * pA, y: 50, w: L * (1 - pA), h: 54, fond: 'rouge', opacite: 0.25, bord: 'rouge' },
      { type: 'texte', x: x0 + (L * pA) / 2, y: 74, t: 'venant de A', taille: 14, gras: true, couleur: 'bleu' },
      { type: 'texte', x: x0 + (L * pA) / 2, y: 94, t: '0,014', taille: 13, couleur: 'bleu' },
      { type: 'texte', x: x0 + L * pA + (L * (1 - pA)) / 2, y: 74, t: 'venant de B', taille: 14, gras: true, couleur: 'rouge' },
      { type: 'texte', x: x0 + L * pA + (L * (1 - pA)) / 2, y: 94, t: '0,015', taille: 13, couleur: 'rouge' },
      { type: 'texte', x: 280, y: 140, t: 'P_D(A) = 0,014 ÷ 0,029 ≈ 0,48', taille: 16, gras: true, couleur: 'bleu' },
    ],
  }, 'Formule de Bayes : sachant qu’une pièce est défectueuse, elle vient de A avec la probabilité 0,014 ÷ 0,029 ≈ 0,48, alors que A produit 70 % des pièces.', '### Le problème : « inverser » le conditionnement');
  pose(F, 'binomiale-cumulee', 'batons', {
    W: 560, H: 300, n: 12, p: 0.3, pasY: 0.05, ymax: 0.3, enValeur: (k) => k <= 3, titre: 'B(12 ; 0,3) : P(X ≤ 3) = somme des bâtons orange',
  }, 'Loi binomiale de paramètres 12 et 0,3 : la probabilité cumulée P(X ≤ 3) est la somme des bâtons orange, de k = 0 à k = 3 (environ 0,49).', '### b) Une probabilité cumulée : $P(X \\leqslant k)$');
}
{
  const F = 'terminale/maths-complementaires/suites-evolution';
  const u = [10]; for (let i = 0; i < 6; i++) u.push(0.5 * u[i] + 3);
  const esc_ = [];
  for (let i = 0; i < 5; i++) { esc_.push({ x1: u[i], y1: i === 0 ? 0 : u[i], x2: u[i], y2: u[i + 1], couleur: 'rouge', pointilles: false, epaisseur: 1.8 }); esc_.push({ x1: u[i], y1: u[i + 1], x2: u[i + 1], y2: u[i + 1], couleur: 'rouge', pointilles: false, epaisseur: 1.8 }); }
  pose(F, 'escalier-point-fixe', 'graphe', {
    W: 480, orthonorme: true, xmin: -0.6, xmax: 11.4, ymin: -0.6, ymax: 10.4, pasX: 1, pasY: 1,
    courbes: [{ f: (x) => 0.5 * x + 3, couleur: 'bleu', nom: 'y = 0,5x + 3', nx: 9.8, ndx: 0, ndy: -12, ancre: 'end' }, { f: (x) => x, couleur: 'gris', epaisseur: 1.4, pointilles: true, nom: 'y = x', nx: 9.6, ndx: -6, ndy: -6, ancre: 'end' }],
    segments: esc_,
    points: [{ x: 6, y: 6, couleur: 'vert', nom: 'ℓ = 6', dx: -10, dy: -12, ancre: 'end', couleurNom: 'vert' }, { x: 10, y: 0, nom: 'u₀ = 10', couleur: 'rouge', dx: 0, dy: -10 }],
  }, 'Pour u₀ = 10 et uₙ₊₁ = 0,5uₙ + 3, l’escalier rouge construit les termes successifs : ils se rapprochent du point fixe ℓ = 6, intersection de la droite y = 0,5x + 3 avec y = x.', '### La méthode du point fixe');
  const v = [200]; for (let i = 0; i < 20; i++) v.push(0.8 * v[i] + 50);
  pose(F, 'lac-poissons', 'graphe', {
    W: 520, H: 300, xmin: -1, xmax: 21, ymin: 185, ymax: 262, pasX: 2, pasY: 10, marge: 34, nomX: 'n', nomY: 'uₙ',
    courbes: [{ f: () => 250, couleur: 'vert', epaisseur: 1.6, pointilles: true, nom: 'limite : 250 poissons', nx: 14, ndx: 0, ndy: -8 }],
    points: v.map((y, n) => ({ x: n, y, couleur: 'bleu', r: 4 })),
    textesPx: [{ x: 500, y: 22, t: 'attention : axe vertical à partir de 190', taille: 12, couleur: 'gris', ancre: 'end' }],
  }, 'Le lac : uₙ₊₁ = 0,8uₙ + 50 avec u₀ = 200. Les effectifs augmentent (210, 218, 224,4…) et se rapprochent de 250 poissons, sans jamais l’atteindre.', '## 5. Modéliser une évolution');
}

// ───────────────────────── Terminale, maths expertes ─────────────────────────
{
  const F = 'terminale/maths-expertes/arithmetique';
  const X = (v) => 300 + v * 14;
  const el = [{ type: 'fleche', x1: 20, y1: 80, x2: 590, y2: 80, couleur: 'gris', epaisseur: 1.6, pointe: 9 }, { type: 'fleche', x1: 20, y1: 190, x2: 590, y2: 190, couleur: 'gris', epaisseur: 1.6, pointe: 9 }];
  for (let v = -20; v <= 20; v += 5) for (const y of [80, 190]) { el.push({ type: 'ligne', x1: X(v), y1: y - 5, x2: X(v), y2: y + 5, couleur: 'gris', epaisseur: 1.2 }); el.push({ type: 'texte', x: X(v), y: y + 20, t: String(v).replace('-', '−'), taille: 11, couleur: 'gris' }); }
  for (let i = 0; i < 3; i++) el.push({ type: 'chemin', d: `M ${X(5 * i)} 76 Q ${X(5 * i + 2.5)} 50 ${X(5 * i + 5)} 76`, couleur: 'bleu', epaisseur: 2.2 });
  el.push({ type: 'chemin', d: `M ${X(15)} 76 Q ${X(16)} 60 ${X(17)} 76`, couleur: 'rouge', epaisseur: 2.6 });
  el.push({ type: 'texte', x: X(7.5), y: 42, t: '3 fois 5', couleur: 'bleu', gras: true, taille: 13 }, { type: 'texte', x: X(16), y: 54, t: '+2', couleur: 'rouge', gras: true, taille: 13 });
  el.push({ type: 'texte', x: 20, y: 30, t: '17 = 5 × 3 + 2', gras: true, taille: 15, ancre: 'start' });
  for (let i = 0; i < 4; i++) el.push({ type: 'chemin', d: `M ${X(-5 * i)} 186 Q ${X(-5 * i - 2.5)} 160 ${X(-5 * i - 5)} 186`, couleur: 'bleu', epaisseur: 2.2 });
  el.push({ type: 'chemin', d: `M ${X(-20)} 186 Q ${X(-18.5)} 170 ${X(-17)} 186`, couleur: 'rouge', epaisseur: 2.6 });
  el.push({ type: 'texte', x: X(-10), y: 152, t: '4 fois −5', couleur: 'bleu', gras: true, taille: 13 }, { type: 'texte', x: X(-18.5), y: 164, t: '+3', couleur: 'rouge', gras: true, taille: 13 });
  el.push({ type: 'texte', x: 590, y: 140, t: '−17 = 5 × (−4) + 3', gras: true, taille: 15, ancre: 'end' });
  el.push({ type: 'point', x: X(17), y: 80, nom: '', couleur: 'rouge' }, { type: 'point', x: X(-17), y: 190, nom: '', couleur: 'rouge' });
  pose(F, 'division-euclidienne', 'libre', { W: 600, H: 225, elements: el }, 'Division euclidienne par 5 sur la droite graduée : 17 = 5 × 3 + 2 ; pour −17, on descend jusqu’à −20 = 5 × (−4) puis on remonte de 3, car le reste doit être positif.', '## 2. Division euclidienne');
  const c = [280, 165], R = 95;
  const el2 = [{ type: 'cercle', x: c[0], y: c[1], r: R, couleur: 'gris', epaisseur: 1.6 }];
  const listes = ['…, −10, −5, 0, 5, 10, 15, …', '…, −9, −4, 1, 6, 11, 16, …', '…, −8, −3, 2, 7, 12, 17, …', '…, −17, −7, −2, 3, 8, 13, …', '…, −6, −1, 4, 9, 14, …'];
  for (let r = 0; r < 5; r++) {
    const a = PI / 2 - (2 * PI * r) / 5;
    const x = c[0] + R * Math.cos(a), y = c[1] - R * Math.sin(a);
    el2.push({ type: 'cercle', x, y, r: 19, couleur: r === 2 || r === 3 ? 'rouge' : 'bleu', fond: '#ffffff', opacite: 1, epaisseur: 2 });
    el2.push({ type: 'texte', x, y: y + 6, t: String(r), taille: 17, gras: true, couleur: r === 2 || r === 3 ? 'rouge' : 'bleu' });
    const xt = c[0] + (R + 32) * Math.cos(a), yt = c[1] - (R + 32) * Math.sin(a) + 5;
    el2.push({ type: 'texte', x: xt, y: r === 0 ? yt - 4 : yt, t: listes[r], taille: 12, ancre: Math.abs(Math.cos(a)) < 0.2 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end', couleur: 'encre' });
  }
  el2.push({ type: 'texte', x: c[0], y: c[1] + 5, t: 'restes modulo 5', taille: 13, couleur: 'gris' });
  pose(F, 'congruences-modulo-5', 'libre', { W: 560, H: 320, elements: el2 }, 'Modulo 5, chaque entier est rangé selon son reste 0, 1, 2, 3 ou 4 : 17 et 2 sont dans la même classe (17 ≡ 2 modulo 5), et −17 est dans celle de 3.', '## 3. Congruences dans $\\mathbb{Z}$');
  const k = 2, o = [30, 40];
  const el3 = [];
  const carre = (x, y, s, coul, t) => { el3.push({ type: 'rect', x: o[0] + x * k, y: o[1] + y * k, w: s * k, h: s * k, fond: coul, opacite: 0.25, bord: coul, epaisseur: 1.6 }); el3.push({ type: 'texte', x: o[0] + (x + s / 2) * k, y: o[1] + (y + s / 2) * k + 5, t, taille: s > 50 ? 15 : 12, gras: true }); };
  carre(0, 0, 105, 'bleu', '105'); carre(105, 0, 105, 'bleu', '105');
  carre(210, 0, 42, 'vert', '42'); carre(210, 42, 42, 'vert', '42');
  carre(210, 84, 21, 'rouge', '21'); carre(231, 84, 21, 'rouge', '21');
  el3.push({ type: 'texte', x: o[0] + 126 * k, y: o[1] - 12, t: '252', taille: 14, couleur: 'gris' });
  el3.push({ type: 'texte', x: o[0] - 6, y: o[1] + 52.5 * k + 5, t: '105', taille: 14, couleur: 'gris', ancre: 'end' });
  pose(F, 'euclide-rectangle', 'libre', { W: 560, H: 285, elements: el3.map((e) => (e.type === 'texte' && e.ancre === 'end' ? { ...e, x: o[0] - 4 } : e)).concat([{ type: 'texte', x: 280, y: 274, t: '252 = 105 × 2 + 42 ; 105 = 42 × 2 + 21 ; 42 = 21 × 2', taille: 13, gras: true }]).map((e) => (e.x !== undefined && e.y !== 274 ? { ...e, x: e.x + 14 } : e)) }, 'Algorithme d’Euclide en image : on découpe le rectangle 252 × 105 en carrés de plus en plus petits ; le dernier carré, de côté 21, pave exactement ce qui reste : pgcd(252, 105) = 21.', '## 4. PGCD et algorithme d\'Euclide');
}
{
  const F = 'terminale/maths-expertes/complexes-algebrique';
  const base = { W: 480, H: 330, xmin: -1.2, xmax: 4.2, ymin: -3.8, ymax: 3.8, nomX: '', nomY: '' };
  pose(F, 'conjugue', 'graphe', {
    ...base,
    segments: [{ x1: 2, y1: 3, x2: 2, y2: -3, couleur: 'violet' }],
    points: [{ x: 2, y: 3, nom: 'z = 2 + 3i', couleur: 'bleu', dx: 12, dy: 4, ancre: 'start' }, { x: 2, y: -3, nom: 'z̄ = 2 − 3i', couleur: 'rouge', dx: 12, dy: 4, ancre: 'start' }],
    textes: [{ x: 2.15, y: 1.2, t: 'symétrie d’axe (Ox)', couleur: 'violet', ancre: 'start', taille: 13 }],
  }, 'Le conjugué de z = 2 + 3i est 2 − 3i : son image est la symétrique de celle de z par rapport à l’axe des réels, et z × z̄ = 2² + 3² = 13.', '## 3. Conjugué et ses propriétés');
  pose(F, 'racines-conjuguees', 'graphe', {
    ...base, xmin: -1.5, xmax: 3.5, ymin: -2.8, ymax: 2.8,
    segments: [{ x1: 1, y1: 2, x2: 1, y2: -2, couleur: 'violet' }],
    points: [{ x: 1, y: 2, nom: '1 + 2i', couleur: 'bleu', dx: 12, dy: 4, ancre: 'start' }, { x: 1, y: -2, nom: '1 − 2i', couleur: 'rouge', dx: 12, dy: 4, ancre: 'start' }],
    textesPx: [{ x: 460, y: 24, t: 'z² − 2z + 5 = 0 : Δ = −16', couleur: 'gris', taille: 13, ancre: 'end' }],
  }, 'Les deux solutions de z² − 2z + 5 = 0, 1 + 2i et 1 − 2i, sont conjuguées : leurs images sont symétriques par rapport à l’axe des réels.', '## 6. Équation du second degré à coefficients réels dans $\\mathbb{C}$');
}
{
  const F = 'terminale/maths-expertes/complexes-geometrique';
  pose(F, 'affixe-vecteur', 'graphe', {
    W: 480, orthonorme: true, xmin: -0.8, xmax: 5, ymin: -0.7, ymax: 3.8, nomX: '', nomY: '',
    fleches: [{ x1: 1, y1: 1, x2: 4, y2: 3, couleur: 'bleu' }, { x1: 0, y1: 0, x2: 3, y2: 2, couleur: 'vert', pointilles: true }],
    points: [{ x: 1, y: 1, nom: 'A : 1 + i', dx: -8, dy: -10, ancre: 'end' }, { x: 4, y: 3, nom: 'B : 4 + 3i', dx: 0, dy: -12 }, { x: 3, y: 2, nom: '3 + 2i', couleur: 'vert', dx: 10, dy: 16, ancre: 'start' }],
    textes: [{ x: 2.4, y: 2.45, t: 'AB = |z_B − z_A| = √13', couleur: 'bleu', gras: true, ancre: 'end', taille: 14 }],
  }, 'Le vecteur AB a pour affixe z_B − z_A = 3 + 2i, comme le vecteur qui va de O au point d’affixe 3 + 2i (en vert) ; sa longueur est AB = |3 + 2i| = √13.'.replace(/_/g, ''), '## 1. Image et affixe : le plan complexe');
  const t = 2.3;
  pose(F, 'ensemble-u', 'graphe', {
    W: 440, orthonorme: true, xmin: -1.6, xmax: 1.6, ymin: -1.45, ymax: 1.45, nomX: '', nomY: '', graduer: false,
    cercles: [{ x: 0, y: 0, r: 1, couleur: 'bleu', epaisseur: 2.6 }],
    traits: [{ x1: 0, y1: 0, x2: Math.cos(t), y2: Math.sin(t), couleur: 'violet', epaisseur: 1.8 }],
    arcs: [{ x: 0, y: 0, r: 26, a1: 0, a2: t, couleur: 'violet', fleche: true }],
    points: [{ x: 1, y: 0, nom: '1', dx: 10, dy: -8, ancre: 'start' }, { x: -1, y: 0, nom: '−1', dx: -10, dy: -8, ancre: 'end' }, { x: 0, y: 1, nom: 'i', dx: 10, dy: -8, ancre: 'start' }, { x: 0, y: -1, nom: '−i', dx: 10, dy: 16, ancre: 'start' }, { x: Math.cos(t), y: Math.sin(t), nom: 'e^{iθ}', couleur: 'violet', dx: -10, dy: -8, ancre: 'end' }],
    textes: [{ x: 0.25, y: 0.2, t: 'θ', couleur: 'violet', taille: 15 }, { x: 0.9, y: 1.12, t: '𝕌 : |z| = 1', couleur: 'bleu', gras: true }],
  }, 'L’ensemble 𝕌 des complexes de module 1 est le cercle de centre O et de rayon 1 : il contient 1, i, −1, −i et tous les e^(iθ).', '## 3. L\'ensemble 𝕌 des complexes de module 1');
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 320, h: 270, titre, params: { W: 320, H: 270, xmin: -1.5, xmax: 5, ymin: -1.2, ymax: 4.2, graduer: false, nomX: '', nomY: '', ...params } });
  pose(F, 'cercle-mediatrice', 'panneaux', {
    W: 640, H: 300, panneaux: [
      pan('|z − z_A| = 2 : cercle', 0, { cercles: [{ x: 1.5, y: 1.5, r: 2, couleur: 'bleu' }], traits: [{ x1: 1.5, y1: 1.5, x2: 1.5 + 2 * Math.cos(0.7), y2: 1.5 + 2 * Math.sin(0.7), couleur: 'rouge', epaisseur: 2 }], points: [{ x: 1.5, y: 1.5, nom: 'A', dx: -10, dy: 16 }, { x: 1.5 + 2 * Math.cos(0.7), y: 1.5 + 2 * Math.sin(0.7), nom: 'M', dx: 10, dy: -6 }], textes: [{ x: 2.45, y: 1.95, t: '2', couleur: 'rouge', gras: true }] }),
      pan('|z − z_A| = |z − z_B| : médiatrice', 320, { courbes: [{ f: (x) => 2 - (x - 1.75), couleur: 'bleu' }], segments: [{ x1: 0.5, y1: 0.75, x2: 3, y2: 3.25, couleur: 'gris' }], points: [{ x: 0.5, y: 0.75, nom: 'A', dx: -10, dy: 16 }, { x: 3, y: 3.25, nom: 'B', dx: 10, dy: -6 }, { x: 3.4, y: 2 - (3.4 - 1.75), nom: 'M', dx: 10, dy: 4, ancre: 'start' }], droits: [{ x: 1.75, y: 2, u: [1, 1], v: [1, -1], taille: 10 }] }),
    ],
  }, 'À gauche, les points M tels que |z − z_A| = 2 forment le cercle de centre A et de rayon 2 ; à droite, ceux tels que |z − z_A| = |z − z_B| forment la médiatrice du segment AB.'.replace(/_/g, ''), '## 7. Interprétations géométriques');
}
{
  const F = 'terminale/maths-expertes/graphes-matrices';
  const S = { A: [110, 70], B: [110, 220], C: [290, 145], D: [460, 145] };
  const el = [];
  [['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'D']].forEach(([u, v]) => el.push({ type: 'ligne', x1: S[u][0], y1: S[u][1], x2: S[v][0], y2: S[v][1], couleur: u === 'C' || (u === 'A' && v === 'C') ? 'orange' : 'encre', epaisseur: u === 'C' || (u === 'A' && v === 'C') ? 4 : 2.4 }));
  const deg = { A: 2, B: 2, C: 3, D: 1 };
  for (const [n, [x, y]] of Object.entries(S)) {
    el.push({ type: 'cercle', x, y, r: 20, couleur: 'bleu', fond: '#ffffff', opacite: 1, epaisseur: 2.2 });
    el.push({ type: 'texte', x, y: y + 6, t: n, gras: true, taille: 17 });
    el.push({ type: 'texte', x: x + (n === 'D' ? 0 : n === 'C' ? 0 : -50), y: y + (n === 'C' || n === 'D' ? -30 : 6), t: `deg = ${deg[n]}`, taille: 13, couleur: 'violet' });
  }
  el.push({ type: 'texte', x: 280, y: 250, t: 'chaîne A − C − D (orange) : longueur 2', couleur: 'orange', taille: 13, gras: true });
  el.push({ type: 'texte', x: 280, y: 24, t: 'somme des degrés : 2 + 2 + 3 + 1 = 8 = 2 × 4 arêtes', taille: 13, gras: true });
  pose(F, 'graphe-abcd', 'libre', { W: 560, H: 265, elements: el }, 'Le graphe d’ordre 4 de l’exemple, avec le degré de chaque sommet ; la somme des degrés vaut deux fois le nombre d’arêtes, et la chaîne A − C − D a pour longueur 2.', '## 1. Graphes : le vocabulaire');
  const A = [150, 130], B = [410, 130], r = 34;
  const el2 = [
    { type: 'chemin', d: `M ${A[0] + 30} ${A[1] - 18} Q 280 40 ${B[0] - 30} ${B[1] - 18}`, couleur: 'bleu', epaisseur: 2.2 },
    { type: 'chemin', d: `M ${B[0] - 30} ${B[1] + 18} Q 280 220 ${A[0] + 30} ${A[1] + 18}`, couleur: 'rouge', epaisseur: 2.2 },
    { type: 'chemin', d: `M ${A[0] - 24} ${A[1] - 24} C ${A[0] - 110} ${A[1] - 80} ${A[0] - 110} ${A[1] + 80} ${A[0] - 24} ${A[1] + 24}`, couleur: 'bleu', epaisseur: 2.2 },
    { type: 'chemin', d: `M ${B[0] + 24} ${B[1] + 24} C ${B[0] + 110} ${B[1] + 80} ${B[0] + 110} ${B[1] - 80} ${B[0] + 24} ${B[1] - 24}`, couleur: 'rouge', epaisseur: 2.2 },
  ];
  // pointes de flèche (orientées par la tangente en fin de courbe)
  el2.push({ type: 'fleche', x1: B[0] - 50, y1: B[1] - 30, x2: B[0] - 30, y2: B[1] - 18, couleur: 'bleu', pointe: 11 });
  el2.push({ type: 'fleche', x1: A[0] + 50, y1: A[1] + 30, x2: A[0] + 30, y2: A[1] + 18, couleur: 'rouge', pointe: 11 });
  el2.push({ type: 'fleche', x1: A[0] - 40, y1: A[1] + 36, x2: A[0] - 24, y2: A[1] + 24, couleur: 'bleu', pointe: 11 });
  el2.push({ type: 'fleche', x1: B[0] + 40, y1: B[1] - 36, x2: B[0] + 24, y2: B[1] - 24, couleur: 'rouge', pointe: 11 });
  el2.push({ type: 'cercle', x: A[0], y: A[1], r, couleur: 'bleu', fond: '#eef3fb', opacite: 1, epaisseur: 2.4 }, { type: 'cercle', x: B[0], y: B[1], r, couleur: 'rouge', fond: '#fbeaea', opacite: 1, epaisseur: 2.4 });
  el2.push({ type: 'texte', x: A[0], y: A[1] + 7, t: 'A', gras: true, taille: 20 }, { type: 'texte', x: B[0], y: B[1] + 7, t: 'B', gras: true, taille: 20 });
  el2.push({ type: 'texte', x: 280, y: 62, t: '0,3', couleur: 'bleu', gras: true, taille: 15 }, { type: 'texte', x: 280, y: 214, t: '0,4', couleur: 'rouge', gras: true, taille: 15 });
  el2.push({ type: 'texte', x: A[0] - 92, y: A[1] + 6, t: '0,7', couleur: 'bleu', gras: true, taille: 15, ancre: 'end' }, { type: 'texte', x: B[0] + 92, y: B[1] + 6, t: '0,6', couleur: 'rouge', gras: true, taille: 15, ancre: 'start' });
  pose(F, 'markov-deux-etats', 'libre', { W: 560, H: 250, elements: el2 }, 'Graphe probabiliste de la chaîne de Markov à deux états : de A, on reste en A avec 0,7 et on passe en B avec 0,3 ; de B, on revient en A avec 0,4 et on reste en B avec 0,6.', '## 5. Chaîne de Markov à 2 ou 3 états');
}

// ───────────────────────── Terminale, spécialité ─────────────────────────
/** Perspective cavalière : x vers la droite, y en profondeur (45°, coefficient 0,5), z vers le haut. */
const cav = (o, s) => (x, y, z) => [o[0] + s * (x + 0.6 * Math.cos(PI / 6) * y), o[1] - s * (z + 0.6 * Math.sin(PI / 6) * y)];
/** Cube ABCDEFGH (A origine, B = (1,0,0), D = (0,1,0), E = (0,0,1)) avec arêtes cachées en pointillés. */
function cube({ W = 420, H = 330, o = [100, 290], s = 170, vecs = [], lignes = [], faces = [], textes = [], noms = true } = {}) {
  const P = cav(o, s);
  const S = { A: [0, 0, 0], B: [1, 0, 0], C: [1, 1, 0], D: [0, 1, 0], E: [0, 0, 1], F: [1, 0, 1], G: [1, 1, 1], H: [0, 1, 1] };
  const p = (n) => P(...S[n]);
  let g = '';
  for (const f of faces) g += polygone(f.sommets.map(p), { couleur: 'none', fond: col(f.couleur), opacite: f.opacite ?? 0.15, epaisseur: 0 });
  const aretes = ['AB', 'BC', 'CD', 'DA', 'EF', 'FG', 'GH', 'HE', 'AE', 'BF', 'CG', 'DH'];
  for (const a of aretes) { const cachee = a.includes('D'); g += ligne(...p(a[0]), ...p(a[1]), { couleur: cachee ? ATTENUE : ENCRE, epaisseur: cachee ? 1.4 : 2, pointilles: cachee }); }
  for (const l of lignes) { const [a, b] = [p(l.de), p(l.a)]; const k = l.prolonge ?? 0; const dx = b[0] - a[0], dy = b[1] - a[1]; g += ligne(a[0] - k * dx, a[1] - k * dy, b[0] + k * dx, b[1] + k * dy, { couleur: col(l.couleur), epaisseur: l.epaisseur ?? 3.2, pointilles: l.pointilles ?? false }); }
  for (const v of vecs) { const [a, b] = [p(v.de), p(v.a)]; g += fleche(...a, ...b, { couleur: col(v.couleur), epaisseur: 3, pointe: 12 }); }
  const dec = { A: [-14, 18], B: [14, 18], C: [16, 8], D: [-18, -2], E: [-16, 6], F: [16, 8], G: [12, -8], H: [-12, -8] };
  if (noms) for (const n of Object.keys(S)) { const q = p(n); g += texte(q[0] + dec[n][0], q[1] + dec[n][1], n, { taille: 16, gras: true, couleur: n === 'D' ? ATTENUE : ENCRE }); }
  for (const t of textes) g += texteRiche(t.x, t.y, t.t, { taille: t.taille || 14, couleur: col(t.couleur, ENCRE), ancre: t.ancre || 'middle', gras: t.gras });
  return enveloppe(W, H, g);
}
SCHEMAS.cube = cube;
{
  const F = 'terminale/maths-specialite/vecteurs-droites-plans-espace';
  pose(F, 'cube-vecteurs-egaux', 'cube', {
    W: 520, H: 330,
    vecs: [{ de: 'A', a: 'B', couleur: 'bleu' }, { de: 'D', a: 'C', couleur: 'bleu' }, { de: 'E', a: 'F', couleur: 'bleu' }, { de: 'H', a: 'G', couleur: 'bleu' }],
    textes: [{ x: 16, y: 30, t: 'AB = DC = EF = HG', couleur: 'bleu', gras: true, ancre: 'start' }, { x: 16, y: 52, t: '(en vecteurs)', couleur: 'gris', ancre: 'start', taille: 13 }],
  }, 'Sur le cube ABCDEFGH, les quatre arêtes parallèles à AB, parcourues dans le même sens, portent le même vecteur : AB = DC = EF = HG (en vecteurs).', '## 1. Vecteurs de l\'espace et translations');
  pose(F, 'cube-repere', 'cube', {
    W: 520, H: 330,
    vecs: [{ de: 'A', a: 'B', couleur: 'rouge' }, { de: 'A', a: 'D', couleur: 'vert' }, { de: 'A', a: 'E', couleur: 'bleu' }, { de: 'A', a: 'G', couleur: 'violet' }],
    textes: [{ x: 500, y: 60, t: 'G(1 ; 1 ; 1)', couleur: 'violet', gras: true, ancre: 'end' }, { x: 500, y: 84, t: 'AG = AB + AD + AE', couleur: 'violet', ancre: 'end', taille: 13 }],
  }, 'Dans le repère (A ; AB, AD, AE), en rouge, vert et bleu, le sommet G a pour coordonnées (1 ; 1 ; 1) : le vecteur AG est la somme AB + AD + AE.', '## 6. Bases et repères de l\'espace');
  pose(F, 'cube-positions', 'cube', {
    W: 560, H: 330,
    lignes: [{ de: 'A', a: 'B', couleur: 'rouge', prolonge: 0.25 }, { de: 'E', a: 'F', couleur: 'orange', prolonge: 0 }, { de: 'C', a: 'G', couleur: 'violet', prolonge: 0.25 }],
    textes: [{ x: 550, y: 140, t: '(AB) et (EF) : parallèles', couleur: 'orange', ancre: 'end', gras: true, taille: 13 }, { x: 550, y: 164, t: '(AB) et (CG) : non coplanaires', couleur: 'violet', ancre: 'end', gras: true, taille: 13 }],
  }, 'Sur le cube : les droites (AB) et (EF) sont parallèles ; les droites (AB) et (CG) ne sont ni parallèles ni sécantes, elles sont non coplanaires, une situation propre à l’espace.', '## 8. Positions relatives');
}
/** Plan (parallélogramme) avec vecteur normal, en perspective. */
function planNormal({ W = 520, H = 320, projete = false, directeurs = true } = {}) {
  const P = cav([140, 250], 1);
  const q = (x, y, z) => P(x, y, z);
  let g = polygone([q(-60, -80, 0), q(230, -80, 0), q(230, 240, 0), q(-60, 240, 0)], { couleur: ATTENUE, fond: BLEU, opacite: 0.1, epaisseur: 1.4 });
  const A = q(120, 90, 0);
  if (directeurs) {
    g += fleche(...A, ...q(215, 90, 0), { couleur: VERT, epaisseur: 2.8 }) + fleche(...A, ...q(120, 225, 0), { couleur: ORANGE, epaisseur: 2.8 });
    g += fleche(...A, ...q(120, 90, 170), { couleur: ROUGE, epaisseur: 3 });
    g += vec(q(215, 90, 0)[0] + 4, q(215, 90, 0)[1] + 22, 'u', { couleur: VERT }) + vec(q(120, 225, 0)[0] + 18, q(120, 225, 0)[1] + 2, 'v', { couleur: ORANGE }) + vec(A[0] + 18, q(120, 90, 170)[1] + 8, 'n', { couleur: ROUGE });
    // angles droits (en perspective : petits parallélogrammes)
    const ad = (d) => `<path d="M ${nb(q(...d.a)[0])} ${nb(q(...d.a)[1])} L ${nb(q(...d.b)[0])} ${nb(q(...d.b)[1])} L ${nb(q(...d.c)[0])} ${nb(q(...d.c)[1])}" fill="none" stroke="${ENCRE}" stroke-width="1.5"/>`;
    g += ad({ a: [138, 90, 0], b: [138, 90, 18], c: [120, 90, 18] }) + ad({ a: [120, 112, 0], b: [120, 112, 18], c: [120, 90, 18] });
    g += point(...A, 'A', { dx: -14, dy: 16 });
    g += texte(W - 20, 30, 'n · u = 0 et n · v = 0', { taille: 15, gras: true, ancre: 'end' });
  }
  if (projete) {
    const M = q(110, 60, 160), Hh = q(110, 60, 0), K = q(200, 170, 0);
    g += ligne(...M, ...Hh, { couleur: ROUGE, epaisseur: 2.6 }) + ligne(...M, ...K, { couleur: ATTENUE, epaisseur: 2, pointilles: true }) + ligne(...Hh, ...K, { couleur: ATTENUE, epaisseur: 2, pointilles: true });
    g += `<path d="M ${nb(q(110, 60, 16)[0])} ${nb(q(110, 60, 16)[1])} L ${nb(q(126, 60, 16)[0])} ${nb(q(126, 60, 16)[1])} L ${nb(q(126, 60, 0)[0])} ${nb(q(126, 60, 0)[1])}" fill="none" stroke="${ENCRE}" stroke-width="1.5"/>`;
    g += point(...M, 'M', { dx: -14, dy: -6 }) + point(...Hh, 'H', { dx: -14, dy: 14, couleur: ROUGE }) + point(...K, 'K', { dx: 14, dy: 14 });
    g += texte(M[0] - 14, (M[1] + Hh[1]) / 2 + 5, 'MH', { taille: 14, couleur: ROUGE, gras: true, ancre: 'end' });
    g += texte(W - 20, 30, 'MK² = MH² + HK² ≥ MH²', { taille: 15, gras: true, ancre: 'end' });
  }
  g += texte(q(205, -55, 0)[0] - 4, q(205, -55, 0)[1] + 4, '𝒫', { taille: 20, couleur: BLEU, ancre: 'end' });
  return enveloppe(W, H, g);
}
SCHEMAS.planNormal = planNormal;
{
  const F = 'terminale/maths-specialite/produit-scalaire-espace';
  pose(F, 'vecteur-normal-plan', 'planNormal', { W: 520, H: 320 }, 'Un vecteur n est normal au plan 𝒫 dès qu’il est orthogonal à deux vecteurs directeurs non colinéaires u et v de ce plan (schéma en perspective).', '### Propriété-clé (à mémoriser)');
  pose(F, 'projete-distance', 'planNormal', { W: 520, H: 320, projete: true, directeurs: false }, 'H est le projeté orthogonal de M sur le plan 𝒫 : pour tout autre point K du plan, le triangle MHK est rectangle en H, donc MK est plus grand que MH, la distance de M au plan.', '### Propriété : le projeté réalise la distance minimale');
  // Droite paramétrée : A(1 ; 2 ; 0), u(2 ; −1 ; 3), dans un repère en perspective cavalière
  const P = cav([200, 260], 40);
  const el = [
    { type: 'fleche', x1: P(0, 0, 0)[0], y1: P(0, 0, 0)[1], x2: P(6.2, 0, 0)[0], y2: P(6.2, 0, 0)[1], couleur: 'gris', epaisseur: 1.6, pointe: 9 },
    { type: 'fleche', x1: P(0, 0, 0)[0], y1: P(0, 0, 0)[1], x2: P(0, 5, 0)[0], y2: P(0, 5, 0)[1], couleur: 'gris', epaisseur: 1.6, pointe: 9 },
    { type: 'fleche', x1: P(0, 0, 0)[0], y1: P(0, 0, 0)[1], x2: P(0, 0, 5.6)[0], y2: P(0, 0, 5.6)[1], couleur: 'gris', epaisseur: 1.6, pointe: 9 },
    { type: 'texte', x: P(6.2, 0, 0)[0] + 4, y: P(6.2, 0, 0)[1] + 18, t: 'x', couleur: 'gris', italique: true },
    { type: 'texte', x: P(0, 5, 0)[0] + 10, y: P(0, 5, 0)[1], t: 'y', couleur: 'gris', italique: true },
    { type: 'texte', x: P(0, 0, 5.6)[0] - 12, y: P(0, 0, 5.6)[1] + 4, t: 'z', couleur: 'gris', italique: true },
    { type: 'texte', x: P(0, 0, 0)[0] - 10, y: P(0, 0, 0)[1] + 16, t: 'O', couleur: 'gris' },
  ];
  const M = (t) => P(1 + 2 * t, 2 - t, 3 * t);
  el.push({ type: 'ligne', x1: M(-0.6)[0], y1: M(-0.6)[1], x2: M(1.7)[0], y2: M(1.7)[1], couleur: 'bleu', epaisseur: 2.4 });
  // pointillés de repérage de A (dans le plan z = 0)
  el.push({ type: 'ligne', x1: P(1, 0, 0)[0], y1: P(1, 0, 0)[1], x2: P(1, 2, 0)[0], y2: P(1, 2, 0)[1], couleur: 'gris', epaisseur: 1.2, pointilles: true }, { type: 'ligne', x1: P(0, 2, 0)[0], y1: P(0, 2, 0)[1], x2: P(1, 2, 0)[0], y2: P(1, 2, 0)[1], couleur: 'gris', epaisseur: 1.2, pointilles: true });
  el.push({ type: 'fleche', x1: M(0)[0], y1: M(0)[1], x2: M(1)[0], y2: M(1)[1], couleur: 'rouge', epaisseur: 3 });
  [[-0.5, 't = −0,5'], [0, 'A : t = 0'], [1, '(3 ; 1 ; 3) : t = 1'], [1.5, 't = 1,5']].forEach(([t, n]) => el.push({ type: 'point', x: M(t)[0], y: M(t)[1], nom: '', couleur: t === 0 ? 'encre' : 'bleu' }, { type: 'texte', x: M(t)[0] + 12, y: M(t)[1] + 5, t: n, taille: 13, ancre: 'start', couleur: t === 0 ? 'encre' : 'bleu' }));
  el.push({ type: 'vec', x: (M(0)[0] + M(1)[0]) / 2 + 22, y: (M(0)[1] + M(1)[1]) / 2 + 14, t: 'u', couleur: 'rouge' });
  pose(F, 'droite-parametree', 'libre', { W: 520, H: 330, elements: el }, 'Droite passant par A(1 ; 2 ; 0) et dirigée par u(2 ; −1 ; 3) : chaque valeur du paramètre t donne un point, par exemple t = 1 donne (3 ; 1 ; 3) (perspective cavalière).', '## 9. Représentation paramétrique d\'une droite');
}
{
  const F = 'terminale/maths-specialite/calcul-integral';
  pose(F, 'integrale-aire', 'graphe', AIRE_DEF, 'Pour f continue et positive, l’intégrale de a à b est l’aire du domaine coloré, limité par la courbe, l’axe des abscisses et les droites x = a et x = b.', '## 1. Définition : l\'intégrale comme aire');
  const g = (x) => 0.5 * x * x - 2;
  pose(F, 'integrale-negative', 'graphe', {
    W: 480, H: 300, xmin: -3, xmax: 3, ymin: -2.6, ymax: 2.6,
    aires: [{ f: g, a: -2, b: 2, couleur: 'rouge', opacite: 0.25 }],
    courbes: [{ f: g, couleur: 'bleu' }],
    textes: [{ x: -1.0, y: 2.2, t: 'y = 0,5x² − 2', couleur: 'bleu' }, { x: 0.95, y: -1.0, t: '∫ = −16/3', couleur: 'rouge', gras: true }, { x: 0, y: 1.2, t: 'aire = 16/3', couleur: 'encre', gras: true }],
  }, 'Sur l’intervalle de −2 à 2, la fonction 0,5x² − 2 est négative : son intégrale vaut −16/3, alors que l’aire du domaine coloré vaut 16/3.', '### Une fonction négative : aire ≠ intégrale');
  pose(F, 'suite-integrales-xn', 'graphe', {
    W: 460, orthonorme: true, xmin: -0.15, xmax: 1.3, ymin: -0.15, ymax: 1.15, pasX: 0.5, pasY: 0.5,
    aires: [{ f: (x) => x ** 8, a: 0, b: 1, couleur: 'violet', opacite: 0.25 }],
    courbes: [1, 2, 4, 8].map((n, i) => ({ f: (x) => x ** n, a: 0, b: 1, couleur: ['bleu', 'vert', 'orange', 'violet'][i], nom: `x^${n}`, nx: 0.55 + i * 0.1, ndx: -4, ndy: -6, ancre: 'end', taille: 13 })),
    segments: [{ x1: 1, y1: 0, x2: 1, y2: 1 }],
    textes: [{ x: 1.05, y: 0.45, t: 'Iₙ = 1/(n + 1)', couleur: 'encre', gras: true, ancre: 'start', taille: 13 }],
  }, 'Courbes de xⁿ sur l’intervalle de 0 à 1 pour n = 1, 2, 4, 8 : l’aire sous la courbe, Iₙ = 1/(n + 1), diminue et tend vers 0 (en violet, I₈ = 1/9).', '### Méthode 4 — Étudier une suite d\'intégrales');
}
{
  const F = 'terminale/maths-specialite/combinatoire-denombrement';
  const el = [];
  const c = 46, o = [100, 50];
  const C = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = (r * (n - i + 1)) / i; return Math.round(r); };
  for (let k = 0; k <= 5; k++) el.push({ type: 'texte', x: o[0] + (k + 0.5) * c, y: o[1] - 10, t: String(k), taille: 13, couleur: 'gris', gras: true });
  for (let n = 0; n <= 5; n++) {
    el.push({ type: 'texte', x: o[0] - 12, y: o[1] + (n + 0.5) * 34 + 5, t: String(n), taille: 13, couleur: 'gris', gras: true, ancre: 'end' });
    for (let k = 0; k <= n; k++) {
      const hl = n === 4 && (k === 1 || k === 2) ? 'vert' : n === 5 && k === 2 ? 'orange' : null;
      el.push({ type: 'rect', x: o[0] + k * c, y: o[1] + n * 34, w: c, h: 34, fond: hl || '#eef3fb', opacite: hl ? 0.3 : 1, bord: 'gris', epaisseur: 0.8 });
      el.push({ type: 'texte', x: o[0] + (k + 0.5) * c, y: o[1] + (n + 0.5) * 34 + 5, t: String(C(n, k)), taille: 15, gras: !!hl });
    }
  }
  el.push({ type: 'texte', x: o[0] - 12, y: o[1] - 10, t: 'n \\ p', taille: 12, couleur: 'gris', ancre: 'end' });
  el.push({ type: 'texte', x: 430, y: 150, t: '4 + 6 = 10', taille: 17, gras: true, couleur: 'orange' });
  el.push({ type: 'texte', x: 430, y: 175, t: '« 2 parmi 5 » = 10', taille: 14, couleur: 'gris' });
  pose(F, 'triangle-pascal', 'libre', { W: 540, H: 265, elements: el }, 'Triangle de Pascal jusqu’à n = 5 : chaque nombre est la somme des deux nombres situés juste au-dessus, par exemple 4 + 6 = 10, le coefficient « 2 parmi 5 ».', '### Le triangle de Pascal');
  const el2 = [
    { type: 'boite', x: 200, y: 14, w: 180, h: 42, t: 'L’ordre compte-t-il ?', taille: 14, gras: true },
    { type: 'fleche', x1: 240, y1: 56, x2: 130, y2: 96, couleur: 'vert' }, { type: 'texte', x: 168, y: 70, t: 'oui', couleur: 'vert', taille: 13 },
    { type: 'fleche', x1: 340, y1: 56, x2: 450, y2: 96, couleur: 'rouge' }, { type: 'texte', x: 412, y: 70, t: 'non', couleur: 'rouge', taille: 13 },
    { type: 'boite', x: 30, y: 96, w: 200, h: 42, t: 'Répétition possible ?', taille: 14, gras: true },
    { type: 'boite', x: 370, y: 96, w: 180, h: 54, t: 'combinaison\n« p parmi n »', taille: 14, fond: '#fff4e6', bord: 'orange' },
    { type: 'fleche', x1: 80, y1: 138, x2: 70, y2: 180, couleur: 'vert' }, { type: 'texte', x: 58, y: 162, t: 'oui', couleur: 'vert', taille: 13, ancre: 'end' },
    { type: 'fleche', x1: 180, y1: 138, x2: 250, y2: 180, couleur: 'rouge' }, { type: 'texte', x: 226, y: 156, t: 'non', couleur: 'rouge', taille: 13, ancre: 'start' },
    { type: 'boite', x: 10, y: 180, w: 130, h: 54, t: 'p-liste\nnᵖ', taille: 14, fond: '#e9f6ee', bord: 'vert' },
    { type: 'boite', x: 160, y: 180, w: 200, h: 54, t: 'arrangement n!/(n − p)!\n(permutation si p = n : n!)', taille: 13, fond: '#e9f6ee', bord: 'vert' },
    { type: 'texte', x: 460, y: 182, t: 'n!/(p! (n − p)!)', taille: 14, couleur: 'orange' },
  ];
  pose(F, 'choisir-le-modele', 'libre', { W: 570, H: 250, elements: el2 }, 'Pour choisir le modèle de dénombrement, on se demande d’abord si l’ordre compte, puis si les répétitions sont possibles : p-liste, arrangement (ou permutation) ou combinaison.', '## 6. La méthode : reconnaître le bon modèle');
}
{
  const F = 'terminale/maths-specialite/continuite';
  pose(F, 'partie-entiere', 'graphe', {
    W: 480, H: 320, xmin: -1.6, xmax: 3.6, ymin: -1.6, ymax: 3.4,
    traits: [-1, 0, 1, 2, 3].map((k) => ({ x1: k, y1: k, x2: Math.min(k + 1, 3.6), y2: k, couleur: 'bleu', epaisseur: 3 })),
    points: [-1, 0, 1, 2, 3].flatMap((k) => [{ x: k, y: k, couleur: 'bleu', r: 4.5 }, ...(k + 1 <= 3.5 ? [{ x: k + 1, y: k, couleur: 'bleu', r: 4.5, creux: true }] : [])]),
    textes: [{ x: 1.15, y: 0.5, t: 'saut', couleur: 'rouge', gras: true, ancre: 'start' }],
    fleches: [{ x1: 1, y1: 0.1, x2: 1, y2: 0.9, couleur: 'rouge', epaisseur: 1.8, pointe: 8 }],
  }, 'La fonction partie entière fait un saut à chaque entier (point plein : valeur prise ; point creux : valeur exclue) : elle n’est pas continue en ces points.', '### Ce que la continuité interdit');
  pose(F, 'valeur-absolue', 'graphe', {
    W: 460, H: 300, xmin: -2.6, xmax: 2.6, ymin: -0.6, ymax: 2.6,
    courbes: [{ f: Math.abs, couleur: 'bleu', nom: 'y = |x|', nx: 2.1, ndx: -10, ndy: -8, ancre: 'end' }],
    points: [{ x: 0, y: 0, nom: 'point anguleux', couleur: 'rouge', dx: 12, dy: 20, ancre: 'start' }],
    textes: [{ x: -1.3, y: 0.55, t: 'pente −1', couleur: 'vert', gras: true }, { x: 1.3, y: 0.55, t: 'pente +1', couleur: 'vert', gras: true }],
  }, 'La valeur absolue est continue en 0 (pas de saut), mais pas dérivable en 0 : la pente vaut −1 à gauche et +1 à droite, la courbe forme un point anguleux.', '### 2.2 Le contre-exemple à connaître : la valeur absolue');
  pose(F, 'tvi-exemple', 'graphe', TVI_EXEMPLE, 'f(x) = x³ + x − 1 est continue sur l’intervalle de 0 à 1, avec f(0) = −1 et f(1) = 1 : la courbe franchit forcément la hauteur 0, en un réel c (c ≈ 0,68).', '### 2.4 Théorème des valeurs intermédiaires (TVI)');
}
{
  const F = 'terminale/maths-specialite/derivation-convexite';
  pose(F, 'convexe-concave', 'panneaux', CONVEXE_CONCAVE, 'Une fonction convexe a sa courbe sous ses sécantes (en orange) et au-dessus de ses tangentes (en vert) ; une fonction concave, c’est l’inverse.', '### Définition : par la position des sécantes');
  pose(F, 'inflexion', 'panneaux', INFLEXION, 'En O, la courbe de x³ change de convexité et traverse sa tangente : c’est un point d’inflexion. Pour x⁴, f″(0) = 0 mais f″ ne change pas de signe : pas d’inflexion.', '### Comment le trouver');
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 320, h: 270, titre, params: { W: 320, H: 270, ...params } });
  pose(F, 'inegalites-tangente', 'panneaux', {
    W: 640, H: 300, panneaux: [
      pan('eˣ ≥ 1 + x (convexe)', 0, { xmin: -3, xmax: 2, ymin: -2, ymax: 4.5, courbes: [{ f: Math.exp, couleur: 'bleu' }, { f: (x) => 1 + x, couleur: 'rouge' }], points: [{ x: 0, y: 1 }] }),
      pan('ln x ≤ x − 1 (concave)', 320, { xmin: -0.5, xmax: 4.5, ymin: -2.5, ymax: 3, courbes: [{ f: Math.log, a: 0.02, couleur: 'bleu' }, { f: (x) => x - 1, couleur: 'rouge' }], points: [{ x: 1, y: 0 }] }),
    ],
  }, 'Inégalités de la tangente : l’exponentielle, convexe, est au-dessus de sa tangente y = 1 + x ; le logarithme, concave, est en dessous de sa tangente y = x − 1.', '## 5. Méthode : démontrer une inégalité par la convexité');
}
{
  const F = 'terminale/maths-specialite/fonction-logarithme';
  pose(F, 'exp-ln-symetrie', 'graphe', EXP_LN, 'Les courbes de exp et de ln sont symétriques par rapport à la droite y = x : (0 ; 1) correspond à (1 ; 0) et (1 ; e) à (e ; 1).', '### Courbe et symétrie avec l\'exponentielle');
  pose(F, 'croissances-comparees', 'graphe', {
    W: 520, H: 300, xmin: -1, xmax: 21, ymin: -1.5, ymax: 8, pasX: 2, pasY: 1,
    courbes: [{ f: Math.log, a: 0.05, couleur: 'rouge', nom: 'y = ln x', nx: 19, ndx: 0, ndy: -10 }, { f: Math.sqrt, a: 0, couleur: 'vert', nom: 'y = √x', nx: 19, ndx: 0, ndy: -10 }, { f: (x) => x, a: 0, couleur: 'bleu', nom: 'y = x', nx: 6.5, ndx: -10, ndy: 0, ancre: 'end' }],
  }, 'Au voisinage de +∞, ln x croît beaucoup plus lentement que √x, et encore plus lentement que x : la puissance l’emporte sur le logarithme, d’où ln x / x qui tend vers 0.', '### Croissances comparées');
}
{
  const F = 'terminale/maths-specialite/fonctions-trigonometriques';
  const gx = [[-2, '−2π'], [-1, '−π'], [1, 'π'], [2, '2π'], [3, '3π']].map(([k, t]) => ({ x: k * PI, t }));
  pose(F, 'periodicite', 'graphe', {
    W: 620, H: 270, xmin: -2.2 * PI, xmax: 3.3 * PI, ymin: -1.5, ymax: 2, gradX: gx, gradY: [{ y: 1, t: '1' }, { y: -1, t: '−1' }], origine: true,
    courbes: [{ f: Math.cos, couleur: 'bleu', nom: 'cos', nx: -2 * PI, ndx: 14, ndy: -10, gras: true }, { f: Math.sin, couleur: 'rouge', nom: 'sin', nx: 2.5 * PI, ndx: 0, ndy: -10, gras: true }],
    fleches: [{ x1: 0.05, y1: 1.5, x2: 2 * PI, y2: 1.5, couleur: 'vert', epaisseur: 2, pointe: 9 }, { x1: 2 * PI - 0.05, y1: 1.5, x2: 0, y2: 1.5, couleur: 'vert', epaisseur: 2, pointe: 9 }],
    segments: [{ x1: 2 * PI, y1: 1, x2: 2 * PI, y2: 1.5 }],
    textes: [{ x: PI, y: 1.63, t: 'période 2π', couleur: 'vert', gras: true }],
  }, 'Les courbes de cos (en bleu) et de sin (en rouge) se répètent à l’identique tous les 2π ; celle de sin est celle de cos décalée de π/2 vers la droite.', '## 3. Périodicité');
  pose(F, 'limite-sinx-sur-x', 'graphe', {
    W: 460, orthonorme: true, xmin: -2.4, xmax: 2.4, ymin: -1.5, ymax: 1.5, pasX: 1, pasY: 1,
    courbes: [{ f: Math.sin, couleur: 'rouge', nom: 'y = sin x', nx: 1.9, ndx: 0, ndy: 24 }, { f: (x) => x, couleur: 'gris', epaisseur: 1.6, pointilles: true, nom: 'y = x', nx: 1.3, ndx: -10, ndy: 0, ancre: 'end' }],
    points: [{ x: 0, y: 0 }],
  }, 'Près de 0, la courbe de sin se confond presque avec la droite y = x, sa tangente en 0 : sin x ≈ x, ce qui traduit que sin x / x tend vers 1.', '## 4. Limites en 0 (le cœur des dérivées)');
  const g2 = [[-1, '−π'], [-1 / 3, '−π/3'], [1 / 3, 'π/3'], [1, 'π']].map(([k, t]) => ({ x: k * PI, t, couleur: Math.abs(k) === 1 / 3 ? 'rouge' : undefined }));
  pose(F, 'inequation-cos', 'graphe', {
    W: 540, H: 280, xmin: -1.15 * PI, xmax: 1.2 * PI, ymin: -1.4, ymax: 1.4, gradX: g2, gradY: [{ y: 1, t: '1' }, { y: 0.5, t: '1/2' }, { y: -1, t: '−1' }], origine: true, nomX: 'x',
    courbes: [{ f: Math.cos, a: -PI, b: PI, couleur: 'bleu' }, { f: () => 0.5, a: -PI, b: PI, couleur: 'orange', epaisseur: 1.6, pointilles: true }],
    traits: [{ x1: -PI, y1: 0, x2: -PI / 3, y2: 0, couleur: 'vert', epaisseur: 6 }, { x1: PI / 3, y1: 0, x2: PI, y2: 0, couleur: 'vert', epaisseur: 6 }],
    segments: [{ x1: -PI / 3, y1: 0, x2: -PI / 3, y2: 0.5 }, { x1: PI / 3, y1: 0, x2: PI / 3, y2: 0.5 }],
    textes: [{ x: 0, y: 1.15, t: 'cos x ≤ 1/2 en vert', couleur: 'vert', gras: true }],
  }, 'Sur l’intervalle de −π à π, cos x ≤ 1/2 quand la courbe est sous la droite y = 1/2, c’est-à-dire de −π à −π/3 et de π/3 à π (en vert).', '### Résoudre l\'inéquation $\\cos(x) \\leqslant a$ sur $[-\\pi\\,;\\,\\pi]$');
}
{
  const F = 'terminale/maths-specialite/limites-fonctions';
  pose(F, 'asymptote-horizontale', 'graphe', {
    W: 480, H: 300, xmin: -0.5, xmax: 10, ymin: -0.5, ymax: 5,
    courbes: [{ f: (x) => 2 + 1 / x, a: 0.05, couleur: 'bleu', nom: 'y = 2 + 1/x', nx: 1, ndx: 10, ndy: -6, ancre: 'start' }, { f: () => 2, couleur: 'rouge', epaisseur: 1.8, pointilles: true, nom: 'asymptote y = 2', nx: 8, ndx: 0, ndy: 20 }],
  }, 'Quand x tend vers +∞, 2 + 1/x tend vers 2 : la courbe se rapproche de la droite y = 2, asymptote horizontale.', '### Asymptote horizontale');
  pose(F, 'asymptote-verticale', 'graphe', {
    W: 480, H: 320, xmin: -1, xmax: 7, ymin: -5, ymax: 5,
    courbes: [{ f: (x) => 1 / (x - 3), a: -1, b: 2.98, couleur: 'bleu' }, { f: (x) => 1 / (x - 3), a: 3.02, b: 7, couleur: 'bleu', nom: 'y = 1/(x − 3)', nx: 4.2, ndx: 10, ndy: -6, ancre: 'start' }],
    segments: [{ x1: 3, y1: -5, x2: 3, y2: 5, couleur: 'rouge' }],
    textes: [{ x: 3.15, y: 4.3, t: 'x = 3', couleur: 'rouge', gras: true, ancre: 'start' }],
  }, 'Quand x s’approche de 3, 1/(x − 3) tend vers −∞ à gauche et vers +∞ à droite : la droite x = 3 est asymptote verticale.', '### Asymptote verticale');
  pose(F, 'comparaison', 'graphe', {
    W: 500, H: 300, xmin: -0.5, xmax: 12, ymin: -1.5, ymax: 12,
    courbes: [{ f: (x) => x + Math.sin(x), couleur: 'bleu', nom: 'x + sin x', nx: 9.5, ndx: -10, ndy: -10, ancre: 'end' }, { f: (x) => x - 1, couleur: 'rouge', epaisseur: 1.8, nom: 'x − 1', nx: 11, ndx: 6, ndy: 20, ancre: 'start' }],
  }, 'La courbe de x + sin x reste au-dessus de la droite y = x − 1, qui tend vers +∞ : par comparaison, x + sin x tend aussi vers +∞.', '### Méthode 4 — Utiliser une comparaison');
}
{
  const F = 'terminale/maths-specialite/listes';
  const L = [10, 20, 30, 40];
  const el = [];
  L.forEach((v, i) => {
    el.push({ type: 'rect', x: 120 + i * 80, y: 60, w: 76, h: 50, fond: '#eef3fb', bord: 'bleu', epaisseur: 2 });
    el.push({ type: 'texte', x: 158 + i * 80, y: 92, t: String(v), taille: 20, gras: true });
    el.push({ type: 'texte', x: 158 + i * 80, y: 46, t: `L[${i}]`, taille: 14, couleur: 'vert', gras: true });
    el.push({ type: 'texte', x: 158 + i * 80, y: 134, t: `L[${i - 4}]`.replace('-', '−'), taille: 14, couleur: 'violet' });
  });
  el.push({ type: 'rect', x: 440, y: 60, w: 76, h: 50, fond: 'none', bord: 'rouge', epaisseur: 1.6, rx: 0 });
  el.push({ type: 'texte', x: 478, y: 92, t: '✗', taille: 20, couleur: 'rouge' });
  el.push({ type: 'texte', x: 478, y: 46, t: 'L[4]', taille: 14, couleur: 'rouge', gras: true });
  el.push({ type: 'texte', x: 478, y: 134, t: 'IndexError', taille: 13, couleur: 'rouge' });
  el.push({ type: 'texte', x: 110, y: 92, t: 'L =', taille: 18, gras: true, ancre: 'end' });
  el.push({ type: 'texte', x: 280, y: 170, t: 'len(L) = 4 : indices de 0 à 3 (dernier : len(L) − 1)', taille: 14, gras: true });
  pose(F, 'indices-liste', 'libre', { W: 560, H: 190, elements: el }, 'La liste L = [10, 20, 30, 40] : les indices vont de 0 à 3 (en vert) ; les indices négatifs partent de la fin (en violet) ; L[4] n’existe pas.'.replace(/\[/g, '(').replace(/\]/g, ')').replace('L = (10, 20, 30, 40)', 'L de valeurs 10, 20, 30, 40').replace('L(4)', 'l’indice 4'), '## 4. Les indices : lire un élément');
  const rangee = (y, titre, vals, max) => {
    const X = (v) => 190 + v * 34;
    const e = [{ type: 'texte', x: 175, y: y + 5, t: titre, taille: 14, gras: true, ancre: 'end' }, { type: 'ligne', x1: X(0) - 10, y1: y, x2: X(max) + 10, y2: y, couleur: 'gris', epaisseur: 1.2 }];
    for (let v = 0; v <= max; v++) { const dedans = vals.includes(v); e.push({ type: 'cercle', x: X(v), y, r: 12, couleur: dedans ? 'bleu' : '#c7d0da', fond: dedans ? '#cfe0fb' : '#ffffff', opacite: 1, epaisseur: dedans ? 2.2 : 1.4 }); e.push({ type: 'texte', x: X(v), y: y + 5, t: String(v), taille: 12, couleur: dedans ? 'bleu' : 'gris', gras: dedans }); }
    return e;
  };
  pose(F, 'range', 'libre', {
    W: 600, H: 170, elements: [...rangee(35, 'range(5)', [0, 1, 2, 3, 4], 11), ...rangee(85, 'range(1, 5)', [1, 2, 3, 4], 11), ...rangee(135, 'range(2, 11, 2)', [2, 4, 6, 8, 10], 11)],
  }, 'Les entiers produits par range (en bleu) : range(5) va de 0 à 4, range(1, 5) de 1 à 4, range(2, 11, 2) de 2 à 10 de 2 en 2 ; la borne de droite est toujours exclue.', '## 3. Comprendre `range`');
}
{
  const F = 'terminale/maths-specialite/logique-ensembles';
  const cadres = [['ℝ', 'bleu', '√2 ; π'], ['ℚ', 'violet', '2/3'], ['ℤ', 'rouge', '−5'], ['ℕ', 'vert', '0 ; 7']];
  const el = [];
  cadres.forEach(([n, c, ex], i) => {
    const x = 16 + i * 60, y = 16 + i * 30, w = 520 - 32 - i * 120, h = 220 - i * 60;
    el.push({ type: 'rect', x, y, w, h, rx: 16, fond: c, opacite: 0.07, bord: c });
    el.push({ type: 'texte', x: x + 14, y: y + 26, t: n, taille: 20, gras: true, couleur: c, ancre: 'start' });
    el.push({ type: 'texte', x: i < 3 ? x + 30 : x + w / 2, y: i < 3 ? y + h - 10 : y + h / 2 + 10, t: ex, taille: 15, ancre: i < 3 ? 'start' : 'middle' });
  });
  pose(F, 'inclusions-nombres', 'libre', { W: 520, H: 250, elements: el }, 'La chaîne d’inclusions ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ : tout élément d’un ensemble appartient aussi à tous ceux qui le contiennent.', '### Inclusion et sous-ensemble');
  pose(F, 'implication-contraposee', 'libre', {
    W: 540, H: 260, elements: [
      { type: 'rect', x: 20, y: 20, w: 500, h: 220, rx: 10, fond: 'none', bord: 'gris' },
      { type: 'rect', x: 140, y: 45, w: 360, h: 170, rx: 85, fond: 'vert', opacite: 0.1, bord: 'vert' },
      { type: 'rect', x: 300, y: 85, w: 170, h: 90, rx: 45, fond: 'bleu', opacite: 0.15, bord: 'bleu' },
      { type: 'texte', x: 385, y: 128, t: 'P vraie', taille: 16, gras: true, couleur: 'bleu' },
      { type: 'texte', x: 385, y: 150, t: '(n pair)', taille: 13, couleur: 'bleu' },
      { type: 'texte', x: 215, y: 120, t: 'Q vraie', taille: 16, gras: true, couleur: 'vert' },
      { type: 'texte', x: 215, y: 142, t: '(n² pair)', taille: 13, couleur: 'vert' },
      { type: 'texte', x: 80, y: 120, t: 'non Q', taille: 16, gras: true, couleur: 'rouge' },
      { type: 'texte', x: 80, y: 142, t: 'donc non P', taille: 13, couleur: 'rouge' },
      { type: 'texte', x: 270, y: 255, t: 'P ⇒ Q : la zone de P est dans celle de Q ; hors de Q, on est hors de P', taille: 13, couleur: 'gris' },
    ],
  }, 'Si P implique Q, l’ensemble où P est vraie est inclus dans celui où Q est vraie ; donc, hors de Q, on est forcément hors de P : c’est la contraposée, non Q implique non P.', '### Implication');
}
{
  const F = 'terminale/maths-specialite/loi-binomiale';
  const n3 = ['S', 'E'];
  const lettre = (c) => (c === 'S' ? 'S' : '!S');
  const prob = (c) => (c === 'S' ? 'p' : '1 − p');
  const branches = n3.map((a) => ({ nom: lettre(a), p: prob(a), enfants: n3.map((b) => ({ nom: lettre(b), p: prob(b), enfants: n3.map((c) => { const k = [a, b, c].filter((x) => x === 'S').length; return { nom: lettre(c), p: prob(c), fin: `${k} succès : ${k === 0 ? '(1 − p)³' : k === 3 ? 'p³' : k === 1 ? 'p(1 − p)²' : 'p²(1 − p)'}`, couleurFin: k === 2 ? 'orange' : undefined }; }) })) }));
  pose(F, 'arbre-trois-epreuves', 'arbre', { W: 600, H: 400, pasX: 115, x0: 24, finX: 390, branches }, 'Schéma de Bernoulli à trois épreuves (S : succès de probabilité p) : un chemin à k succès a pour probabilité pᵏ(1 − p)³⁻ᵏ ; les trois chemins à 2 succès sont en orange.', '### Représentation par un arbre');
  pose(F, 'binomiale-4-demi', 'batons', { W: 500, H: 290, n: 4, p: 0.5, pasY: 0.1, ymax: 0.4, enValeur: (k) => k === 2, titre: 'B(4 ; 0,5) : P(X = 2) = 6/16 = 3/8' }, 'Loi binomiale de paramètres 4 et 1/2 : P(X = 2) = 6 × (1/2)⁴ = 3/8, car 6 chemins de l’arbre comportent exactement deux succès.', '### Propriété — expression de $P(X = k)$');
  let cum = 0, s = -1, c = 1;
  const n = 50, p = 0.1;
  for (let k = 0; k <= n; k++) { cum += c * p ** k * (1 - p) ** (n - k); if (s < 0 && cum >= 0.95) s = k; c = (c * (n - k)) / (k + 1); }
  const loi50 = []; { let cc = 1; for (let k = 0; k <= 20; k++) { loi50.push({ x: k, p: cc * p ** k * (1 - p) ** (n - k) }); cc = (cc * (n - k)) / (k + 1); } }
  pose(F, 'probleme-seuil', 'batons', { W: 560, H: 300, loi: loi50, pasY: 0.05, ymax: 0.2, enValeur: (k) => k <= s, etiquettes: (k) => (k % 2 === 0 ? String(k) : ''), titre: `B(50 ; 0,1) : P(X ≤ ${s}) ≥ 0,95 pour la première fois en ${s}` }, `Loi binomiale de paramètres 50 et 0,1 : en cumulant les bâtons depuis 0, on dépasse 0,95 pour la première fois en ${s} (bâtons orange), d’où s = ${s}.`, '### d) Problèmes de seuil');
}
{
  const F = 'terminale/maths-specialite/primitives-equations-differentielles';
  pose(F, 'famille-primitives', 'graphe', PRIMITIVES_X2, 'Les primitives de 2x sont les x² + C : leurs courbes se déduisent les unes des autres par translation verticale. La condition F(1) = 5 en retient une seule, x² + 4.', '## 2. Deux primitives diffèrent d\'une constante');
  pose(F, 'solutions-y-egal-moins-y', 'graphe', {
    W: 480, H: 320, xmin: -0.6, xmax: 4.2, ymin: -3.5, ymax: 6, pasX: 1, pasY: 1,
    courbes: [...[-3, -1, 1, 3].map((C) => ({ f: (x) => C * Math.exp(-x), couleur: '#7f9cc4', epaisseur: 1.8 })), { f: (x) => 5 * Math.exp(-x), couleur: 'rouge', epaisseur: 2.8, nom: 'y = 5e^{−x}', nx: 0.8, ndx: 10, ndy: -6, ancre: 'start' }],
    points: [{ x: 0, y: 5, couleur: 'rouge', nom: 'y(0) = 5', dx: -18, dy: 4, ancre: 'end' }],
  }, 'Les solutions de y′ = −y sont les Ce^(−x) : toutes tendent vers 0. La condition initiale y(0) = 5 sélectionne la seule solution 5e^(−x), en rouge.', '### 5.2 — $y\'=ay$ (avec $a$ réel)');
}
{
  const F = 'terminale/maths-specialite/sommes-variables-concentration';
  const n = 25, p = 0.8;
  let c = 1; const loi = [];
  for (let k = 0; k <= n; k++) { loi.push({ x: k, p: c * p ** k * (1 - p) ** (n - k) }); c = (c * (n - k)) / (k + 1); }
  const vraie = loi.filter((v) => Math.abs(v.x - 20) >= 5).reduce((s, v) => s + v.p, 0);
  pose(F, 'bienayme-tchebychev', 'batons', { W: 560, H: 300, loi: loi.filter((v) => v.x >= 10), pasY: 0.05, ymax: 0.25, enValeur: (k) => Math.abs(k - 20) >= 5, titre: `μ = 20, V = 4 : P(|X − 20| ≥ 5) ≈ ${fmt(Math.round(vraie * 1000) / 1000)}, majorant 0,16`, esperance: 20 }, `Exemple avec une loi d’espérance 20 et de variance 4 (ici binomiale, n = 25, p = 0,8) : les bâtons orange, à distance au moins 5 de 20, totalisent environ ${fmt(Math.round(vraie * 1000) / 1000)}, bien moins que le majorant 0,16.`, '## 6. Inégalité de Bienaymé-Tchebychev');
  const freq = (N) => { const L = []; let cc = 1; for (let k = 0; k <= N; k++) { L.push({ x: k / N, p: cc * 0.5 ** N }); cc = (cc * (N - k)) / (k + 1); } return L; };
  pose(F, 'loi-grands-nombres', 'panneaux', {
    W: 640, H: 280, panneaux: [
      { schema: 'batons', x: 0, y: 0, w: 320, h: 280, params: { W: 320, H: 280, loi: freq(10), pasY: 0.1, ymax: 0.3, titre: 'Mₙ pour n = 10', etiquettes: (x) => (Math.round(x * 10) % 5 === 0 ? fmt(x) : ''), enValeur: (x) => Math.abs(x - 0.5) < 0.101 } },
      { schema: 'batons', x: 320, y: 0, w: 320, h: 280, params: { W: 320, H: 280, loi: freq(100), pasY: 0.1, ymax: 0.3, titre: 'Mₙ pour n = 100', etiquettes: (x) => (Math.round(x * 100) % 25 === 0 ? fmt(x) : ''), enValeur: (x) => Math.abs(x - 0.5) < 0.101 } },
    ],
  }, 'Fréquence de Pile sur n lancers d’une pièce équilibrée : avec n = 100, la loi de la moyenne Mₙ est bien plus concentrée autour de 0,5 qu’avec n = 10 (en orange : écart d’au plus 0,1).', '## 8. Loi des grands nombres');
}
{
  const F = 'terminale/maths-specialite/suites';
  pose(F, 'convergence-bande', 'graphe', {
    W: 520, H: 300, xmin: -0.5, xmax: 25, ymin: 2.6, ymax: 4.15, pasX: 5, pasY: 0.2, marge: 34, nomX: 'n', nomY: 'uₙ',
    rects: [{ x1: -0.5, y1: 2.9, x2: 25, y2: 3.1, couleur: 'vert', opacite: 0.15, epaisseur: 0 }],
    courbes: [{ f: () => 3, couleur: 'vert', epaisseur: 1.6, pointilles: true }],
    points: Array.from({ length: 24 }, (_, i) => ({ x: i + 1, y: 3 + 1 / (i + 1), couleur: i + 1 > 10 ? 'vert' : 'bleu', r: 4 })),
    textes: [{ x: 18, y: 3.5, t: 'uₙ = 3 + 1/n', couleur: 'bleu', gras: true }, { x: 18, y: 2.8, t: 'fenêtre de 2,9 à 3,1', couleur: 'vert' }],
  }, 'Pour uₙ = 3 + 1/n et la fenêtre de 2,9 à 3,1 autour de 3 : à partir du rang 11, tous les termes sont dans la fenêtre (en vert) et n’en sortent plus.', '## 2. Limite finie : la convergence');
  pose(F, 'gendarmes', 'graphe', {
    W: 520, H: 300, xmin: -0.5, xmax: 30.5, ymin: -1.1, ymax: 1.1, pasX: 5, pasY: 0.5, marge: 32, nomX: 'n', nomY: '',
    courbes: [{ f: (x) => 1 / x, a: 0.9, couleur: 'rouge', epaisseur: 1.6, pointilles: true, nom: '1/n', nx: 3, ndx: 4, ndy: -6, ancre: 'start' }, { f: (x) => -1 / x, a: 0.9, couleur: 'rouge', epaisseur: 1.6, pointilles: true, nom: '−1/n', nx: 3, ndx: 4, ndy: 18, ancre: 'start' }],
    points: Array.from({ length: 30 }, (_, i) => ({ x: i + 1, y: Math.sin(i + 1) / (i + 1), couleur: 'bleu', r: 3.5 })),
    textes: [{ x: 20, y: 0.6, t: 'vₙ = sin(n)/n', couleur: 'bleu', gras: true }],
  }, 'Théorème des gendarmes : les termes de sin(n)/n restent entre −1/n et 1/n, qui tendent tous deux vers 0 ; ils sont donc forcés de tendre vers 0.', '### Théorème des gendarmes');
  const pan = (titre, x, params) => ({ schema: 'graphe', x, y: 30, w: 213, h: 230, titre, params: { W: 213, H: 230, nomX: 'n', nomY: '', marge: 24, graduer: false, ...params } });
  pose(F, 'comportement-qn', 'panneaux', {
    W: 640, H: 265, panneaux: [
      pan('1,5ⁿ → +∞', 0, { pasY: 5, xmin: -0.5, xmax: 8.5, ymin: -2, ymax: 27, points: Array.from({ length: 9 }, (_, n) => ({ x: n, y: 1.5 ** n, couleur: 'rouge', r: 3.5 })) }),
      pan('0,8ⁿ → 0', 213, { pasY: 0.2, xmin: -0.5, xmax: 12.5, ymin: -0.1, ymax: 1.1, points: Array.from({ length: 13 }, (_, n) => ({ x: n, y: 0.8 ** n, couleur: 'vert', r: 3.5 })) }),
      pan('(−2)ⁿ : pas de limite', 426, { pasY: 10, xmin: -0.5, xmax: 6.5, ymin: -36, ymax: 68, points: Array.from({ length: 7 }, (_, n) => ({ x: n, y: (-2) ** n, couleur: 'violet', r: 3.5 })) }),
    ],
  }, 'Comportement de qⁿ : il tend vers +∞ si q = 1,5, vers 0 si q = 0,8, et n’a pas de limite si q = −2, car les termes grandissent en changeant de signe.', '## 5. Comportement de $(q^n)$');
}
