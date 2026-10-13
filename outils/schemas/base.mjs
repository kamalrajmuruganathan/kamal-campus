/**
 * Outils communs aux schémas des fiches (lots outils/schemas/lot_*.mjs).
 *
 * Style « papier » : fond blanc, encre sombre, quelques couleurs franches.
 * Le schéma est lisible à l'identique en thème clair comme en thème sombre.
 * Les coordonnées sont CALCULÉES : un schéma doit être juste par construction
 * (angles, longueurs, proportions, dates sur une frise…).
 */

export const ENCRE = '#16232e';
export const PAPIER = '#ffffff';
export const GRILLE = '#dbe3ec';
export const AXE = '#8a99a8';
export const BLEU = '#1f6feb';
export const ROUGE = '#c02a2a';
export const VERT = '#1a7f4b';
export const ORANGE = '#c25e00';
export const VIOLET = '#7a3fb0';
export const ATTENUE = '#5b6b7a';
export const POLICE = '-apple-system,Segoe UI,Roboto,sans-serif';

/** Arrondi à 2 décimales (SVG compact). */
export const nb = (x) => Math.round(x * 100) / 100;

/** Échappe le texte pour le SVG. */
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Enveloppe SVG autonome (fond papier). */
export function enveloppe(w, h, corps) {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${POLICE}">` +
    `<rect x="0" y="0" width="${w}" height="${h}" fill="${PAPIER}"/>` +
    corps +
    `</svg>`
  );
}

/** Texte (une ou plusieurs lignes séparées par \n). */
export function texte(x, y, s, { taille = 15, couleur = ENCRE, ancre = 'middle', gras = false, italique = false, interligne = 1.25 } = {}) {
  const lignes = String(s).split('\n');
  return lignes
    .map(
      (l, i) =>
        `<text x="${nb(x)}" y="${nb(y + i * taille * interligne)}" font-size="${taille}" fill="${couleur}" text-anchor="${ancre}"` +
        `${gras ? ' font-weight="700"' : ''}${italique ? ' font-style="italic"' : ''}>${esc(l)}</text>`,
    )
    .join('');
}

/** Segment. */
export function ligne(x1, y1, x2, y2, { couleur = ENCRE, epaisseur = 2, pointilles = false } = {}) {
  return `<line x1="${nb(x1)}" y1="${nb(y1)}" x2="${nb(x2)}" y2="${nb(y2)}" stroke="${couleur}" stroke-width="${epaisseur}"${pointilles ? ' stroke-dasharray="6 5"' : ''} stroke-linecap="round"/>`;
}

/** Flèche (segment + pointe triangulaire à l'arrivée). */
export function fleche(x1, y1, x2, y2, { couleur = ENCRE, epaisseur = 2, pointe = 10, pointilles = false } = {}) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const bx = x2 - pointe * Math.cos(a);
  const by = y2 - pointe * Math.sin(a);
  const p1 = [bx + (pointe / 2) * Math.sin(a), by - (pointe / 2) * Math.cos(a)];
  const p2 = [bx - (pointe / 2) * Math.sin(a), by + (pointe / 2) * Math.cos(a)];
  return (
    ligne(x1, y1, bx, by, { couleur, epaisseur, pointilles }) +
    `<polygon points="${nb(x2)},${nb(y2)} ${nb(p1[0])},${nb(p1[1])} ${nb(p2[0])},${nb(p2[1])}" fill="${couleur}"/>`
  );
}

/** Rectangle à coins arrondis avec texte centré (boîte de schéma fléché). */
export function boite(x, y, w, h, s, { fond = '#eef3fb', bord = BLEU, couleur = ENCRE, taille = 14, gras = false } = {}) {
  const lignes = String(s).split('\n');
  const y0 = y + h / 2 - ((lignes.length - 1) * taille * 1.25) / 2 + taille * 0.35;
  return (
    `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(w)}" height="${nb(h)}" rx="8" fill="${fond}" stroke="${bord}" stroke-width="1.8"/>` +
    texte(x + w / 2, y0, s, { taille, couleur, gras })
  );
}

/** Cercle. */
export function cercle(cx, cy, r, { couleur = ENCRE, fond = 'none', epaisseur = 2, opacite = 1 } = {}) {
  return `<circle cx="${nb(cx)}" cy="${nb(cy)}" r="${nb(r)}" fill="${fond}" fill-opacity="${opacite}" stroke="${couleur}" stroke-width="${epaisseur}"/>`;
}

/** Polygone. */
export function polygone(points, { couleur = ENCRE, fond = 'none', opacite = 1, epaisseur = 2.2 } = {}) {
  return `<polygon points="${points.map(([x, y]) => `${nb(x)},${nb(y)}`).join(' ')}" fill="${fond}" fill-opacity="${opacite}" stroke="${couleur}" stroke-width="${epaisseur}" stroke-linejoin="round"/>`;
}

/** Point marqué (petite croix ou disque) avec son nom. */
export function point(x, y, nom = '', { couleur = ENCRE, dx = 10, dy = -8, taille = 15 } = {}) {
  return `<circle cx="${nb(x)}" cy="${nb(y)}" r="3.2" fill="${couleur}"/>` + (nom ? texte(x + dx, y + dy, nom, { taille, couleur, ancre: 'middle' }) : '');
}

/** Marque d'angle droit au sommet (x, y) entre les directions u et v (vecteurs unitaires). */
export function angleDroit(x, y, u, v, { taille = 14, couleur = ENCRE } = {}) {
  const p1 = [x + u[0] * taille, y + u[1] * taille];
  const p2 = [x + (u[0] + v[0]) * taille, y + (u[1] + v[1]) * taille];
  const p3 = [x + v[0] * taille, y + v[1] * taille];
  return `<path d="M ${nb(p1[0])} ${nb(p1[1])} L ${nb(p2[0])} ${nb(p2[1])} L ${nb(p3[0])} ${nb(p3[1])}" fill="none" stroke="${couleur}" stroke-width="1.6"/>`;
}

/**
 * Repère : renvoie { svg, X, Y } avec X(x), Y(y) les projections.
 * Grille aux entiers (ou au pas donné), axes fléchés, graduations.
 */
export function repere({ W = 440, H = 320, xmin = -5, xmax = 5, ymin = -4, ymax = 4, pasX = 1, pasY = 1, marge = 24, graduer = true, nomX = 'x', nomY = 'y' } = {}) {
  const X = (x) => marge + ((x - xmin) / (xmax - xmin)) * (W - 2 * marge);
  const Y = (y) => H - marge - ((y - ymin) / (ymax - ymin)) * (H - 2 * marge);
  let g = '';
  for (let x = Math.ceil(xmin / pasX) * pasX; x <= xmax + 1e-9; x += pasX) g += ligne(X(x), marge, X(x), H - marge, { couleur: GRILLE, epaisseur: 1 });
  for (let y = Math.ceil(ymin / pasY) * pasY; y <= ymax + 1e-9; y += pasY) g += ligne(marge, Y(y), W - marge, Y(y), { couleur: GRILLE, epaisseur: 1 });
  const y0 = Math.min(Math.max(0, ymin), ymax);
  const x0 = Math.min(Math.max(0, xmin), xmax);
  g += fleche(marge, Y(y0), W - marge + 8, Y(y0), { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  g += fleche(X(x0), H - marge, X(x0), marge - 8, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  g += texte(W - marge + 4, Y(y0) + 18, nomX, { taille: 13, couleur: ATTENUE, italique: true });
  g += texte(X(x0) - 12, marge - 4, nomY, { taille: 13, couleur: ATTENUE, italique: true });
  if (graduer) {
    const fmt = (v) => String(Math.round(v * 100) / 100).replace('.', ',').replace('-', '−');
    for (let x = Math.ceil(xmin / pasX) * pasX; x <= xmax + 1e-9; x += pasX) if (Math.abs(x) > 1e-9) g += texte(X(x), Y(y0) + 16, fmt(x), { taille: 11, couleur: ATTENUE });
    for (let y = Math.ceil(ymin / pasY) * pasY; y <= ymax + 1e-9; y += pasY) if (Math.abs(y) > 1e-9) g += texte(X(x0) - 6, Y(y) + 4, fmt(y), { taille: 11, couleur: ATTENUE, ancre: 'end' });
    g += texte(X(x0) - 8, Y(y0) + 16, '0', { taille: 11, couleur: ATTENUE });
  }
  return { svg: g, X, Y };
}

/** Courbe d'une fonction f sur [a ; b] dans un repère (polyligne de n points ; s'interrompt hors cadre). */
export function courbe(f, a, b, X, Y, { couleur = BLEU, epaisseur = 2.6, n = 240, ymin = -1e9, ymax = 1e9 } = {}) {
  let d = '';
  let enCours = false;
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    const y = f(x);
    if (!Number.isFinite(y) || y < ymin || y > ymax) { enCours = false; continue; }
    d += `${enCours ? 'L' : 'M'} ${nb(X(x))} ${nb(Y(y))} `;
    enCours = true;
  }
  return `<path d="${d.trim()}" fill="none" stroke="${couleur}" stroke-width="${epaisseur}" stroke-linejoin="round"/>`;
}

/**
 * Frise chronologique : evenements = [{ annee, texte }] (années négatives = av. J.-C.),
 * periodes = [{ debut, fin, texte, couleur }]. L'échelle est exacte.
 */
export function frise({ debut, fin, pas, evenements = [], periodes = [], W = 680, H = 250, libelleAnnee } = {}) {
  const m = 40;
  const X = (a) => m + ((a - debut) / (fin - debut)) * (W - 2 * m);
  const yAxe = 130;
  const lib = libelleAnnee || ((a) => (a < 0 ? `${-a} av. J.-C.` : String(a)));
  let g = '';
  periodes.forEach((p, i) => {
    const y = yAxe - 22;
    g += `<rect x="${nb(X(p.debut))}" y="${y}" width="${nb(X(p.fin) - X(p.debut))}" height="18" fill="${p.couleur || BLEU}" fill-opacity="0.18" stroke="${p.couleur || BLEU}" stroke-width="1.2"/>`;
    g += texte((X(p.debut) + X(p.fin)) / 2, y - 6 - (i % 2) * 0, p.texte, { taille: 12, couleur: p.couleur || BLEU, gras: true });
  });
  g += fleche(m - 10, yAxe, W - m + 18, yAxe, { couleur: ENCRE, epaisseur: 2.2, pointe: 10 });
  for (let a = Math.ceil(debut / pas) * pas; a <= fin; a += pas) {
    g += ligne(X(a), yAxe - 5, X(a), yAxe + 5, { couleur: ENCRE, epaisseur: 1.5 });
    g += texte(X(a), yAxe + 20, lib(a), { taille: 11, couleur: ATTENUE });
  }
  evenements.forEach((e, i) => {
    // Trois niveaux d'étiquettes, pour éviter les chevauchements.
    const y2 = yAxe + 48 + (i % 3) * 26;
    g += ligne(X(e.annee), yAxe + 26, X(e.annee), y2 - 13, { couleur: ROUGE, epaisseur: 1.4 });
    g += `<circle cx="${nb(X(e.annee))}" cy="${yAxe}" r="4.5" fill="${ROUGE}"/>`;
    g += texte(X(e.annee), y2, e.texte, { taille: 12, couleur: ENCRE });
  });
  return enveloppe(W, H, g);
}

/** Encode un SVG en data-URI base64 utilisable en syntaxe image Markdown. */
export function svgVersDataUri(svg) {
  return 'data:image/svg+xml;base64,' + Buffer.from(svg, 'utf8').toString('base64');
}
