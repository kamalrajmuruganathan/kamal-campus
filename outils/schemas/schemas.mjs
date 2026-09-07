/**
 * Bibliothèque de schémas (SVG) pour les fiches de Kamal Campus.
 *
 * Chaque fonction renvoie une chaîne SVG AUTONOME, dessinée sur un fond
 * « papier » clair avec une encre sombre : le schéma est donc lisible à
 * l'identique en thème clair comme en thème sombre (il ne dépend d'aucune
 * variable de la page ni d'aucune media query). Les schémas sont calculés
 * (coordonnées exactes), donc géométriquement justes par construction.
 *
 * Ces SVG sont ensuite encodés en data-URI et insérés dans les fiches en
 * syntaxe image Markdown par outils/generer-schemas.mjs.
 */

// Palette « papier » (fixe, indépendante du thème de l'appli).
const ENCRE = '#16232e';
const PAPIER = '#ffffff';
const GRILLE = '#dbe3ec';
const AXE = '#8a99a8';
const BLEU = '#1f6feb';
const ROUGE = '#c02a2a';
const VERT = '#1a7f4b';
const ATTENUE = '#5b6b7a';

function enveloppe(w, h, corps) {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" ` +
    `font-family="-apple-system,Segoe UI,Roboto,sans-serif">` +
    `<rect x="0" y="0" width="${w}" height="${h}" fill="${PAPIER}"/>` +
    corps +
    `</svg>`
  );
}

const nb = (x) => Math.round(x * 100) / 100;

/** Triangle rectangle (théorème de Pythagore). Angle droit en bas à gauche. */
export function triangleRectangle({ a = 'a', b = 'b', c = 'c' } = {}) {
  const W = 420;
  const H = 300;
  const A = { x: 90, y: 235 }; // angle droit
  const B = { x: 340, y: 235 }; // droite
  const C = { x: 90, y: 70 }; // haut
  const carre = 16;
  const corps =
    `<polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" ` +
    `fill="${BLEU}" fill-opacity="0.08" stroke="${ENCRE}" stroke-width="2.5" stroke-linejoin="round"/>` +
    // marque de l'angle droit
    `<path d="M ${A.x} ${A.y - carre} L ${A.x + carre} ${A.y - carre} L ${A.x + carre} ${A.y}" ` +
    `fill="none" stroke="${ENCRE}" stroke-width="1.6"/>` +
    // sommets
    `<text x="${A.x - 10}" y="${A.y + 20}" font-size="17" fill="${ENCRE}" text-anchor="middle">A</text>` +
    `<text x="${B.x + 12}" y="${B.y + 20}" font-size="17" fill="${ENCRE}" text-anchor="middle">B</text>` +
    `<text x="${C.x - 14}" y="${C.y}" font-size="17" fill="${ENCRE}" text-anchor="middle">C</text>` +
    // côtés
    `<text x="${(A.x + B.x) / 2}" y="${A.y + 24}" font-size="16" fill="${ROUGE}" text-anchor="middle" font-style="italic">${b}</text>` +
    `<text x="${A.x - 16}" y="${(A.y + C.y) / 2}" font-size="16" fill="${VERT}" text-anchor="middle" font-style="italic">${a}</text>` +
    `<text x="${(B.x + C.x) / 2 + 14}" y="${(B.y + C.y) / 2 - 6}" font-size="16" fill="${BLEU}" text-anchor="middle" font-style="italic">${c}</text>`;
  return enveloppe(W, H, corps);
}

/** Repère orthonormé de base (grille + axes gradués), renvoie aussi la projection. */
function repereBase({ W = 420, H = 320, xmin = -5, xmax = 5, ymin = -4, ymax = 4 } = {}) {
  const marge = 18;
  const ox = (x) => marge + ((x - xmin) / (xmax - xmin)) * (W - 2 * marge);
  const oy = (y) => H - marge - ((y - ymin) / (ymax - ymin)) * (H - 2 * marge);
  let g = '';
  for (let x = Math.ceil(xmin); x <= xmax; x += 1) {
    g += `<line x1="${nb(ox(x))}" y1="${marge}" x2="${nb(ox(x))}" y2="${H - marge}" stroke="${GRILLE}" stroke-width="1"/>`;
  }
  for (let y = Math.ceil(ymin); y <= ymax; y += 1) {
    g += `<line x1="${marge}" y1="${nb(oy(y))}" x2="${W - marge}" y2="${nb(oy(y))}" stroke="${GRILLE}" stroke-width="1"/>`;
  }
  // axes
  g +=
    `<line x1="${marge}" y1="${nb(oy(0))}" x2="${W - marge}" y2="${nb(oy(0))}" stroke="${AXE}" stroke-width="1.8"/>` +
    `<line x1="${nb(ox(0))}" y1="${marge}" x2="${nb(ox(0))}" y2="${H - marge}" stroke="${AXE}" stroke-width="1.8"/>` +
    // flèches
    `<path d="M ${W - marge} ${nb(oy(0))} l -8 -4 v 8 z" fill="${AXE}"/>` +
    `<path d="M ${nb(ox(0))} ${marge} l -4 8 h 8 z" fill="${AXE}"/>` +
    `<text x="${W - marge - 4}" y="${nb(oy(0)) + 16}" font-size="13" fill="${ATTENUE}" text-anchor="end">x</text>` +
    `<text x="${nb(ox(0)) + 8}" y="${marge + 10}" font-size="13" fill="${ATTENUE}">y</text>` +
    `<text x="${nb(ox(0)) - 6}" y="${nb(oy(0)) + 15}" font-size="12" fill="${ATTENUE}" text-anchor="end">O</text>`;
  return { W, H, ox, oy, grille: g };
}

/** Fonction affine y = ax + b tracée dans un repère. */
export function fonctionAffine({ a = 1, b = 1 } = {}) {
  const r = repereBase({});
  const { ox, oy } = r;
  const x1 = -5;
  const x2 = 5;
  const y1 = a * x1 + b;
  const y2 = a * x2 + b;
  const droite =
    `<line x1="${nb(ox(x1))}" y1="${nb(oy(y1))}" x2="${nb(ox(x2))}" y2="${nb(oy(y2))}" ` +
    `stroke="${BLEU}" stroke-width="2.8"/>` +
    // ordonnée à l'origine
    `<circle cx="${nb(ox(0))}" cy="${nb(oy(b))}" r="4.5" fill="${ROUGE}"/>` +
    `<text x="${nb(ox(0)) + 8}" y="${nb(oy(b)) - 8}" font-size="14" fill="${ROUGE}">(0 ; ${b})</text>` +
    // équation, dans un coin dégagé (au-dessus à gauche pour une pente positive)
    `<text x="26" y="30" font-size="16" fill="${BLEU}" font-style="italic">y = ${a === 1 ? '' : a === -1 ? '-' : a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}</text>`;
  return enveloppe(r.W, r.H, r.grille + droite);
}

/** Parabole y = a x² + b x + c (par défaut y = x²), avec sommet et axe. */
export function parabole({ a = 1, b = 0, c = 0 } = {}) {
  const r = repereBase({ ymin: -1, ymax: 8 });
  const { ox, oy } = r;
  let d = '';
  const xs = -5;
  const xe = 5;
  const pas = 0.1;
  let debut = true;
  for (let x = xs; x <= xe + 1e-9; x += pas) {
    const y = a * x * x + b * x + c;
    if (y < -1 || y > 8) { debut = true; continue; }
    d += `${debut ? 'M' : 'L'} ${nb(ox(x))} ${nb(oy(y))} `;
    debut = false;
  }
  const xSommet = a !== 0 ? -b / (2 * a) : 0;
  const ySommet = a * xSommet * xSommet + b * xSommet + c;
  const courbe =
    `<path d="${d.trim()}" fill="none" stroke="${BLEU}" stroke-width="2.8"/>` +
    `<line x1="${nb(ox(xSommet))}" y1="${18}" x2="${nb(ox(xSommet))}" y2="${r.H - 18}" stroke="${ATTENUE}" stroke-width="1.2" stroke-dasharray="5 4"/>` +
    `<circle cx="${nb(ox(xSommet))}" cy="${nb(oy(ySommet))}" r="4.5" fill="${ROUGE}"/>` +
    `<text x="${nb(ox(xSommet)) + 8}" y="${nb(oy(ySommet)) + 18}" font-size="13" fill="${ROUGE}">sommet</text>`;
  return enveloppe(r.W, r.H, r.grille + courbe);
}

/** Cercle trigonométrique : cos = segment sur l'axe des x, sin = segment vertical. */
export function cercleTrigo({ angleDeg = 55 } = {}) {
  const W = 360;
  const H = 340;
  const cx = 175;
  const cy = 175;
  const R = 130;
  const a = (angleDeg * Math.PI) / 180;
  const px = cx + R * Math.cos(a); // abscisse du point M
  const py = cy - R * Math.sin(a); // ordonnée du point M
  const corps =
    // axes
    `<line x1="${cx - R - 20}" y1="${cy}" x2="${cx + R + 20}" y2="${cy}" stroke="${AXE}" stroke-width="1.6"/>` +
    `<line x1="${cx}" y1="${cy + R + 20}" x2="${cx}" y2="${cy - R - 20}" stroke="${AXE}" stroke-width="1.6"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${ENCRE}" stroke-width="2"/>` +
    // guide vertical en pointillés (du point au pied sur l'axe des x)
    `<line x1="${nb(px)}" y1="${nb(py)}" x2="${nb(px)}" y2="${cy}" stroke="${ATTENUE}" stroke-width="1.2" stroke-dasharray="4 4"/>` +
    // cos : segment ROUGE sur l'axe des x, de O au pied H
    `<line x1="${cx}" y1="${cy}" x2="${nb(px)}" y2="${cy}" stroke="${ROUGE}" stroke-width="3.4"/>` +
    // sin : segment VERT vertical, du pied H au point M
    `<line x1="${nb(px)}" y1="${cy}" x2="${nb(px)}" y2="${nb(py)}" stroke="${VERT}" stroke-width="3.4"/>` +
    // rayon (longueur 1) et point M
    `<line x1="${cx}" y1="${cy}" x2="${nb(px)}" y2="${nb(py)}" stroke="${BLEU}" stroke-width="2.6"/>` +
    `<circle cx="${nb(px)}" cy="${nb(py)}" r="4.5" fill="${BLEU}"/>` +
    `<text x="${nb(px) + 8}" y="${nb(py) - 6}" font-size="14" fill="${BLEU}">M</text>` +
    // arc d'angle
    `<path d="M ${cx + 34} ${cy} A 34 34 0 0 0 ${nb(cx + 34 * Math.cos(a))} ${nb(cy - 34 * Math.sin(a))}" fill="none" stroke="${ENCRE}" stroke-width="1.6"/>` +
    `<text x="${cx + 42}" y="${cy - 14}" font-size="14" fill="${ENCRE}">α</text>` +
    // libellés cos / sin
    `<text x="${nb((cx + px) / 2)}" y="${cy + 18}" font-size="14" fill="${ROUGE}" text-anchor="middle">cos α</text>` +
    `<text x="${nb(px) + 8}" y="${nb((cy + py) / 2) + 4}" font-size="14" fill="${VERT}">sin α</text>` +
    // repères d'unité
    `<text x="${cx + R + 6}" y="${cy + 16}" font-size="12" fill="${ATTENUE}">1</text>` +
    `<text x="${cx - 14}" y="${cy - R - 4}" font-size="12" fill="${ATTENUE}">1</text>`;
  return enveloppe(W, H, corps);
}

/** Configuration de Thalès : deux droites sécantes coupées par deux parallèles. */
export function thales() {
  const W = 420;
  const H = 300;
  const S = { x: 60, y: 60 }; // sommet
  const B = { x: 360, y: 120 };
  const C = { x: 300, y: 260 };
  // M sur [SB], N sur [SC], (MN)//(BC) : on prend le même rapport k
  const k = 0.55;
  const M = { x: S.x + k * (B.x - S.x), y: S.y + k * (B.y - S.y) };
  const N = { x: S.x + k * (C.x - S.x), y: S.y + k * (C.y - S.y) };
  const corps =
    `<line x1="${S.x}" y1="${S.y}" x2="${B.x}" y2="${B.y}" stroke="${ENCRE}" stroke-width="2.2"/>` +
    `<line x1="${S.x}" y1="${S.y}" x2="${C.x}" y2="${C.y}" stroke="${ENCRE}" stroke-width="2.2"/>` +
    `<line x1="${B.x}" y1="${B.y}" x2="${C.x}" y2="${C.y}" stroke="${ROUGE}" stroke-width="2.4"/>` +
    `<line x1="${nb(M.x)}" y1="${nb(M.y)}" x2="${nb(N.x)}" y2="${nb(N.y)}" stroke="${BLEU}" stroke-width="2.4"/>` +
    // points
    `<circle cx="${S.x}" cy="${S.y}" r="3.5" fill="${ENCRE}"/>` +
    `<circle cx="${nb(M.x)}" cy="${nb(M.y)}" r="3.5" fill="${BLEU}"/>` +
    `<circle cx="${nb(N.x)}" cy="${nb(N.y)}" r="3.5" fill="${BLEU}"/>` +
    `<circle cx="${B.x}" cy="${B.y}" r="3.5" fill="${ROUGE}"/>` +
    `<circle cx="${C.x}" cy="${C.y}" r="3.5" fill="${ROUGE}"/>` +
    `<text x="${S.x - 14}" y="${S.y}" font-size="16" fill="${ENCRE}">S</text>` +
    `<text x="${nb(M.x) - 6}" y="${nb(M.y) - 10}" font-size="15" fill="${BLEU}">M</text>` +
    `<text x="${nb(N.x) - 18}" y="${nb(N.y) + 6}" font-size="15" fill="${BLEU}">N</text>` +
    `<text x="${B.x + 8}" y="${B.y}" font-size="16" fill="${ROUGE}">B</text>` +
    `<text x="${C.x + 8}" y="${C.y + 8}" font-size="16" fill="${ROUGE}">C</text>` +
    `<text x="${(M.x + N.x) / 2 - 30}" y="${(M.y + N.y) / 2 + 4}" font-size="13" fill="${BLEU}">(MN)</text>` +
    `<text x="${(B.x + C.x) / 2 + 8}" y="${(B.y + C.y) / 2}" font-size="13" fill="${ROUGE}">(BC)</text>`;
  return enveloppe(W, H, corps);
}

/** Repérage d'un point M(x ; y) avec projections en pointillés. */
export function repereCoordonnees({ x = 3, y = 2 } = {}) {
  const r = repereBase({});
  const { ox, oy } = r;
  const corps =
    `<line x1="${nb(ox(x))}" y1="${nb(oy(y))}" x2="${nb(ox(x))}" y2="${nb(oy(0))}" stroke="${ROUGE}" stroke-width="1.6" stroke-dasharray="5 4"/>` +
    `<line x1="${nb(ox(x))}" y1="${nb(oy(y))}" x2="${nb(ox(0))}" y2="${nb(oy(y))}" stroke="${VERT}" stroke-width="1.6" stroke-dasharray="5 4"/>` +
    `<circle cx="${nb(ox(x))}" cy="${nb(oy(y))}" r="4.5" fill="${BLEU}"/>` +
    `<text x="${nb(ox(x)) + 8}" y="${nb(oy(y)) - 8}" font-size="15" fill="${BLEU}">M(${x} ; ${y})</text>` +
    `<text x="${nb(ox(x))}" y="${nb(oy(0)) + 16}" font-size="13" fill="${ROUGE}" text-anchor="middle">${x}</text>` +
    `<text x="${nb(ox(0)) - 8}" y="${nb(oy(y)) + 4}" font-size="13" fill="${VERT}" text-anchor="end">${y}</text>`;
  return enveloppe(r.W, r.H, r.grille + corps);
}

// ── Physique ─────────────────────────────────────────────────────────────────

/** Onde sinusoïdale : amplitude et longueur d'onde (ou période) repérées. */
export function ondeSinusoidale({ lambda = 'λ' } = {}) {
  const W = 440;
  const H = 240;
  const axe = 120;
  const A = 62; // amplitude en pixels
  const x0 = 30;
  const x1 = 410;
  const L = 150; // longueur d'onde en pixels
  let d = '';
  for (let x = x0; x <= x1; x += 2) {
    const y = axe - A * Math.sin((2 * Math.PI * (x - x0)) / L);
    d += `${x === x0 ? 'M' : 'L'} ${x} ${nb(y)} `;
  }
  // crêtes pour repérer λ (première et deuxième crête : à L/4 et L/4 + L)
  const c1 = x0 + L / 4;
  const c2 = c1 + L;
  const corps =
    `<line x1="${x0}" y1="${axe}" x2="${x1}" y2="${axe}" stroke="${AXE}" stroke-width="1.6"/>` +
    `<path d="M ${x0} ${axe} l -0 0" />` +
    `<path d="${d.trim()}" fill="none" stroke="${BLEU}" stroke-width="2.8"/>` +
    // amplitude (de l'axe à la crête)
    `<line x1="${nb(c1)}" y1="${axe}" x2="${nb(c1)}" y2="${axe - A}" stroke="${VERT}" stroke-width="1.6" stroke-dasharray="5 4"/>` +
    `<text x="${nb(c1) + 8}" y="${axe - A / 2}" font-size="15" fill="${VERT}">A</text>` +
    // longueur d'onde (entre deux crêtes)
    `<line x1="${nb(c1)}" y1="${axe - A - 14}" x2="${nb(c2)}" y2="${axe - A - 14}" stroke="${ROUGE}" stroke-width="1.6"/>` +
    `<line x1="${nb(c1)}" y1="${axe - A - 20}" x2="${nb(c1)}" y2="${axe - A - 8}" stroke="${ROUGE}" stroke-width="1.6"/>` +
    `<line x1="${nb(c2)}" y1="${axe - A - 20}" x2="${nb(c2)}" y2="${axe - A - 8}" stroke="${ROUGE}" stroke-width="1.6"/>` +
    `<text x="${nb((c1 + c2) / 2)}" y="${axe - A - 20}" font-size="15" fill="${ROUGE}" text-anchor="middle" font-style="italic">${lambda}</text>`;
  return enveloppe(W, H, corps);
}

/** Lentille convergente : objet à 2F, image réelle inversée à 2F' (3 rayons). */
export function lentilleConvergente() {
  const W = 440;
  const H = 240;
  const cx = 210;
  const axe = 120;
  const f = 70;
  const h = 70;
  const O = { x: cx, y: axe };
  const B = { x: cx - 2 * f, y: axe - h }; // sommet de l'objet
  const Bp = { x: cx + 2 * f, y: axe + h }; // sommet de l'image (inversée)
  const F = { x: cx - f, y: axe };
  const Fp = { x: cx + f, y: axe };
  const fleche = (x1, y1, x2, y2, coul) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${coul}" stroke-width="2.6"/>` +
    `<path d="M ${x2} ${y2} l ${x2 === x1 ? -4 : 0} ${y2 > y1 ? -8 : 8} l ${x2 === x1 ? 8 : 0} 0 z" fill="${coul}"/>`;
  const corps =
    // axe optique
    `<line x1="20" y1="${axe}" x2="420" y2="${axe}" stroke="${AXE}" stroke-width="1.4"/>` +
    // lentille (trait vertical à double flèche)
    `<line x1="${cx}" y1="40" x2="${cx}" y2="200" stroke="${ENCRE}" stroke-width="2"/>` +
    `<path d="M ${cx} 40 l -5 9 h 10 z" fill="${ENCRE}"/>` +
    `<path d="M ${cx} 200 l -5 -9 h 10 z" fill="${ENCRE}"/>` +
    // foyers et centre
    `<circle cx="${F.x}" cy="${F.y}" r="3" fill="${ENCRE}"/><text x="${F.x}" y="${axe + 18}" font-size="13" fill="${ENCRE}" text-anchor="middle">F</text>` +
    `<circle cx="${Fp.x}" cy="${Fp.y}" r="3" fill="${ENCRE}"/><text x="${Fp.x}" y="${axe + 18}" font-size="13" fill="${ENCRE}" text-anchor="middle">F'</text>` +
    `<text x="${O.x + 4}" y="${axe + 18}" font-size="13" fill="${ATTENUE}">O</text>` +
    // rayons
    // 1 : parallèle à l'axe puis passe par F'
    `<polyline points="${B.x},${B.y} ${cx},${B.y} ${Bp.x},${Bp.y}" fill="none" stroke="${BLEU}" stroke-width="1.6"/>` +
    // 2 : par le centre optique, non dévié
    `<line x1="${B.x}" y1="${B.y}" x2="${Bp.x}" y2="${Bp.y}" stroke="${VERT}" stroke-width="1.6"/>` +
    // 3 : par F puis parallèle à l'axe
    `<polyline points="${B.x},${B.y} ${cx},${axe + h} ${Bp.x},${Bp.y}" fill="none" stroke="${ROUGE}" stroke-width="1.6"/>` +
    // objet (droit) et image (inversée)
    fleche(B.x, axe, B.x, B.y, ENCRE) +
    `<text x="${B.x - 12}" y="${B.y + 4}" font-size="14" fill="${ENCRE}">B</text>` +
    fleche(Bp.x, axe, Bp.x, Bp.y, ATTENUE) +
    `<text x="${Bp.x + 6}" y="${Bp.y}" font-size="14" fill="${ATTENUE}">B'</text>`;
  return enveloppe(W, H, corps);
}

/** Circuit électrique en série : générateur, interrupteur, lampe (composants intercalés). */
export function circuitElectrique() {
  const W = 460;
  const H = 260;
  const Lx = 70; // côté gauche
  const Rx = 390; // côté droit
  const Ty = 60; // haut
  const By = 210; // bas
  const cyLampe = (Ty + By) / 2; // 135
  const w = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${ENCRE}" stroke-width="2.4"/>`;
  const corps =
    // — côté gauche : pile intercalée —
    w(Lx, Ty, Lx, 118) +
    `<line x1="${Lx - 13}" y1="122" x2="${Lx + 13}" y2="122" stroke="${ENCRE}" stroke-width="2"/>` + // borne + (long)
    `<line x1="${Lx - 7}" y1="134" x2="${Lx + 7}" y2="134" stroke="${ENCRE}" stroke-width="5"/>` + // borne − (court/épais)
    w(Lx, 138, Lx, By) +
    `<text x="${Lx - 20}" y="132" font-size="13" fill="${ATTENUE}" text-anchor="end">pile</text>` +
    // — bas —
    w(Lx, By, Rx, By) +
    // — côté droit : lampe intercalée —
    w(Rx, By, Rx, cyLampe + 20) +
    `<circle cx="${Rx}" cy="${cyLampe}" r="20" fill="none" stroke="${ROUGE}" stroke-width="2.4"/>` +
    `<line x1="${Rx - 14}" y1="${cyLampe - 14}" x2="${Rx + 14}" y2="${cyLampe + 14}" stroke="${ROUGE}" stroke-width="2"/>` +
    `<line x1="${Rx - 14}" y1="${cyLampe + 14}" x2="${Rx + 14}" y2="${cyLampe - 14}" stroke="${ROUGE}" stroke-width="2"/>` +
    w(Rx, cyLampe - 20, Rx, Ty) +
    `<text x="${Rx + 26}" y="${cyLampe + 4}" font-size="13" fill="${ROUGE}">lampe</text>` +
    // — haut : interrupteur intercalé (ouvert) —
    w(Rx, Ty, 250, Ty) +
    `<circle cx="250" cy="${Ty}" r="2.8" fill="${ENCRE}"/>` +
    `<circle cx="180" cy="${Ty}" r="2.8" fill="${ENCRE}"/>` +
    `<line x1="250" y1="${Ty}" x2="186" y2="${Ty - 22}" stroke="${ENCRE}" stroke-width="2.4"/>` + // lame ouverte
    w(180, Ty, Lx, Ty) +
    `<text x="215" y="26" font-size="13" fill="${ATTENUE}" text-anchor="middle">interrupteur</text>`;
  return enveloppe(W, H, corps);
}

/** Chaîne alimentaire : maillons reliés par « est mangé par ». */
export function chaineAlimentaire({ maillons = ['Herbe', 'Criquet', 'Grenouille', 'Serpent'] } = {}) {
  const W = 460;
  const H = 150;
  const n = maillons.length;
  const bw = 92;
  const bh = 46;
  const gap = (W - 20 - n * bw) / (n - 1);
  const y = 60;
  let corps = '';
  maillons.forEach((m, i) => {
    const x = 10 + i * (bw + gap);
    corps +=
      `<rect x="${nb(x)}" y="${y}" width="${bw}" height="${bh}" rx="8" fill="${BLEU}" fill-opacity="0.10" stroke="${BLEU}" stroke-width="1.8"/>` +
      `<text x="${nb(x + bw / 2)}" y="${y + bh / 2 + 5}" font-size="15" fill="${ENCRE}" text-anchor="middle">${m}</text>`;
    if (i < n - 1) {
      const xa = x + bw + 4;
      const xb = x + bw + gap - 4;
      corps +=
        `<line x1="${nb(xa)}" y1="${y + bh / 2}" x2="${nb(xb)}" y2="${y + bh / 2}" stroke="${VERT}" stroke-width="2.2"/>` +
        `<path d="M ${nb(xb)} ${y + bh / 2} l -9 -5 v 10 z" fill="${VERT}"/>`;
    }
  });
  corps += `<text x="${W / 2}" y="${y + bh + 34}" font-size="13" fill="${VERT}" text-anchor="middle" font-style="italic">→ « est mangé par »</text>`;
  return enveloppe(W, H, corps);
}

/** Rectangle : aire = L × l et périmètre = 2 × (L + l). */
export function rectangleAirePerimetre({ L = 'L', l = 'l' } = {}) {
  const W = 440;
  const H = 250;
  const x = 90;
  const y = 40;
  const rw = 230;
  const rh = 120;
  const corps =
    `<rect x="${x}" y="${y}" width="${rw}" height="${rh}" fill="${BLEU}" fill-opacity="0.08" stroke="${ENCRE}" stroke-width="2.4"/>` +
    // longueur (en bas)
    `<text x="${x + rw / 2}" y="${y + rh + 24}" font-size="16" fill="${ROUGE}" text-anchor="middle" font-style="italic">${L}</text>` +
    // largeur (à gauche)
    `<text x="${x - 16}" y="${y + rh / 2 + 5}" font-size="16" fill="${VERT}" text-anchor="middle" font-style="italic">${l}</text>` +
    // formules
    `<text x="${x}" y="${y + rh + 62}" font-size="15" fill="${ENCRE}">Périmètre = 2 × (${L} + ${l})</text>` +
    `<text x="${x}" y="${y + rh + 86}" font-size="15" fill="${ENCRE}">Aire = ${L} × ${l}</text>`;
  return enveloppe(W, H, corps);
}

// ── Physique : forces et matière ─────────────────────────────────────────────

/** Poids : vecteur force vertical, vers le bas, appliqué au centre de gravité. */
export function poids() {
  const W = 360;
  const H = 260;
  const sol = 210;
  const bx = 130;
  const by = 120;
  const bw = 100;
  const bh = 70;
  const G = { x: bx + bw / 2, y: by + bh / 2 };
  const finFleche = sol - 8; // s'arrête juste au-dessus du sol
  const corps =
    // sol
    `<line x1="40" y1="${sol}" x2="320" y2="${sol}" stroke="${AXE}" stroke-width="2"/>` +
    // hachures du sol
    Array.from({ length: 8 }, (_, i) => `<line x1="${52 + i * 34}" y1="${sol}" x2="${44 + i * 34}" y2="${sol + 12}" stroke="${AXE}" stroke-width="1.2"/>`).join('') +
    // objet
    `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="6" fill="${BLEU}" fill-opacity="0.10" stroke="${ENCRE}" stroke-width="2"/>` +
    // centre de gravité
    `<circle cx="${G.x}" cy="${G.y}" r="3.5" fill="${ENCRE}"/>` +
    `<text x="${G.x + 8}" y="${G.y - 6}" font-size="13" fill="${ENCRE}">G</text>` +
    // vecteur poids (vers le bas)
    `<line x1="${G.x}" y1="${G.y}" x2="${G.x}" y2="${finFleche}" stroke="${ROUGE}" stroke-width="2.8"/>` +
    `<path d="M ${G.x} ${finFleche + 4} l -6 -12 h 12 z" fill="${ROUGE}"/>` +
    `<text x="${G.x + 12}" y="${(G.y + finFleche) / 2 + 4}" font-size="16" fill="${ROUGE}" font-style="italic">P</text>` +
    `<text x="${G.x + 24}" y="${(G.y + finFleche) / 2 + 4}" font-size="13" fill="${ROUGE}">(poids)</text>` +
    // rappel : direction verticale, sens vers le bas
    `<text x="180" y="${sol + 34}" font-size="12" fill="${ATTENUE}" text-anchor="middle">vertical, vers le bas, appliqué en G</text>`;
  return enveloppe(W, H, corps);
}

/** Modèle de l'atome : noyau central et électrons sur des couches. */
export function atome() {
  const W = 360;
  const H = 300;
  const cx = 180;
  const cy = 150;
  const couches = [55, 95];
  const electrons = [
    [0, 180], // couche 1 : 2 électrons
    [40, 130, 250], // couche 2 : 3 électrons (schématique)
  ];
  let corps = '';
  couches.forEach((r, ci) => {
    corps += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${ATTENUE}" stroke-width="1.3" stroke-dasharray="4 4"/>`;
    for (const deg of electrons[ci]) {
      const a = (deg * Math.PI) / 180;
      const ex = cx + r * Math.cos(a);
      const ey = cy + r * Math.sin(a);
      corps += `<circle cx="${nb(ex)}" cy="${nb(ey)}" r="6" fill="${BLEU}"/>`;
    }
  });
  corps +=
    // noyau
    `<circle cx="${cx}" cy="${cy}" r="24" fill="${ROUGE}" fill-opacity="0.15" stroke="${ROUGE}" stroke-width="2"/>` +
    `<text x="${cx}" y="${cy + 5}" font-size="14" fill="${ROUGE}" text-anchor="middle">noyau</text>` +
    // légendes
    `<text x="${cx}" y="${cy + couches[1] + 30}" font-size="13" fill="${BLEU}" text-anchor="middle">● électrons</text>` +
    `<text x="${cx}" y="${cy + couches[1] + 50}" font-size="12" fill="${ATTENUE}" text-anchor="middle">noyau : protons (+) et neutrons</text>`;
  return enveloppe(W, H, corps);
}

/** Cycle de l'eau : évaporation → condensation → précipitation → ruissellement. */
export function cycleEau() {
  const W = 400;
  const H = 320;
  const cx = 200;
  const cy = 160;
  const R = 108;
  const etapes = ['Évaporation', 'Condensation', 'Précipitation', 'Ruissellement'];
  // positions aux 4 points cardinaux (haut, droite, bas, gauche)
  const angles = [-90, 0, 90, 180];
  const pts = angles.map((d) => {
    const a = (d * Math.PI) / 180;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
  });
  let corps = '';
  // flèches d'arc entre étapes (sens horaire)
  for (let i = 0; i < 4; i += 1) {
    const p = pts[i];
    const q = pts[(i + 1) % 4];
    // point de contrôle : légèrement à l'extérieur pour un arc courbe
    const mx = (p.x + q.x) / 2;
    const my = (p.y + q.y) / 2;
    const ox = cx + (mx - cx) * 1.35;
    const oy = cy + (my - cy) * 1.35;
    corps += `<path d="M ${nb(p.x)} ${nb(p.y)} Q ${nb(ox)} ${nb(oy)} ${nb(q.x)} ${nb(q.y)}" fill="none" stroke="${BLEU}" stroke-width="2" marker-end=""/>`;
    // flèche à l'extrémité q
    const ang = Math.atan2(q.y - oy, q.x - ox);
    const a1 = ang + 2.6;
    const a2 = ang - 2.6;
    corps += `<path d="M ${nb(q.x)} ${nb(q.y)} L ${nb(q.x + 10 * Math.cos(a1))} ${nb(q.y + 10 * Math.sin(a1))} L ${nb(q.x + 10 * Math.cos(a2))} ${nb(q.y + 10 * Math.sin(a2))} z" fill="${BLEU}"/>`;
  }
  // pastilles d'étapes
  etapes.forEach((e, i) => {
    const p = pts[i];
    corps +=
      `<rect x="${nb(p.x - 62)}" y="${nb(p.y - 16)}" width="124" height="32" rx="16" fill="${VERT}" fill-opacity="0.12" stroke="${VERT}" stroke-width="1.6"/>` +
      `<text x="${nb(p.x)}" y="${nb(p.y + 5)}" font-size="14" fill="${ENCRE}" text-anchor="middle">${e}</text>`;
  });
  return enveloppe(W, H, corps);
}

/** Pavé droit en perspective cavalière : volume = L × l × h. */
export function paveDroit({ L = 'L', l = 'l', h = 'h' } = {}) {
  const W = 440;
  const H = 295;
  // face avant
  const x = 70;
  const y = 110;
  const fw = 200;
  const fh = 110;
  // décalage de fuite (perspective cavalière ~ 30°, rapport 0,5)
  const dx = 70;
  const dy = -55;
  const A = { x, y: y + fh }; // avant bas gauche
  const B = { x: x + fw, y: y + fh }; // avant bas droit
  const C = { x: x + fw, y }; // avant haut droit
  const D = { x, y }; // avant haut gauche
  const A2 = { x: A.x + dx, y: A.y + dy };
  const B2 = { x: B.x + dx, y: B.y + dy };
  const C2 = { x: C.x + dx, y: C.y + dy };
  const D2 = { x: D.x + dx, y: D.y + dy };
  const seg = (p, q, dash) => `<line x1="${nb(p.x)}" y1="${nb(p.y)}" x2="${nb(q.x)}" y2="${nb(q.y)}" stroke="${ENCRE}" stroke-width="2" ${dash ? 'stroke-dasharray="5 4" opacity="0.55"' : ''}/>`;
  const corps =
    // arêtes cachées (depuis A2)
    seg(A2, B2, true) + seg(A2, D2, true) + seg(A2, A, true) +
    // face arrière visible
    seg(B2, C2) + seg(C2, D2) +
    // face avant
    seg(A, B) + seg(B, C) + seg(C, D) + seg(D, A) +
    // fuyantes visibles
    seg(B, B2) + seg(C, C2) + seg(D, D2) +
    // étiquettes des dimensions
    `<text x="${nb((A.x + B.x) / 2)}" y="${nb(A.y + 19)}" font-size="15" fill="${ROUGE}" text-anchor="middle" font-style="italic">${L}</text>` +
    `<text x="${nb(B.x + 12)}" y="${nb((B.y + C.y) / 2 + 4)}" font-size="15" fill="${VERT}" font-style="italic">${h}</text>` +
    `<text x="${nb((B.x + B2.x) / 2 + 6)}" y="${nb((B.y + B2.y) / 2 + 2)}" font-size="15" fill="${BLEU}" font-style="italic">${l}</text>` +
    `<text x="${x}" y="${H - 18}" font-size="15" fill="${ENCRE}">Volume = ${L} × ${l} × ${h}</text>`;
  return enveloppe(W, H, corps);
}

/** Angle : deux demi-droites de même origine et un arc. */
export function angle({ deg = 52 } = {}) {
  const W = 400;
  const H = 250;
  const O = { x: 90, y: 200 };
  const len = 250;
  const lenB = 175; // plus courte pour rester dans le cadre
  const a = (deg * Math.PI) / 180;
  const A = { x: O.x + len, y: O.y }; // demi-droite horizontale
  const B = { x: O.x + lenB * Math.cos(a), y: O.y - lenB * Math.sin(a) };
  const r = 46;
  const corps =
    `<line x1="${O.x}" y1="${O.y}" x2="${A.x}" y2="${A.y}" stroke="${ENCRE}" stroke-width="2.4"/>` +
    `<line x1="${O.x}" y1="${O.y}" x2="${nb(B.x)}" y2="${nb(B.y)}" stroke="${ENCRE}" stroke-width="2.4"/>` +
    // arc de l'angle
    `<path d="M ${O.x + r} ${O.y} A ${r} ${r} 0 0 0 ${nb(O.x + r * Math.cos(a))} ${nb(O.y - r * Math.sin(a))}" fill="none" stroke="${ROUGE}" stroke-width="2.2"/>` +
    // points
    `<circle cx="${O.x}" cy="${O.y}" r="3.5" fill="${ENCRE}"/>` +
    `<text x="${O.x - 14}" y="${O.y + 6}" font-size="16" fill="${ENCRE}">O</text>` +
    `<text x="${A.x - 6}" y="${A.y + 20}" font-size="15" fill="${ATTENUE}">A</text>` +
    `<text x="${nb(B.x) + 6}" y="${nb(B.y) - 4}" font-size="15" fill="${ATTENUE}">B</text>` +
    `<text x="${O.x + r + 14}" y="${O.y - 16}" font-size="15" fill="${ROUGE}">angle ÂOB</text>`;
  return enveloppe(W, H, corps);
}

/** Droite graduée des nombres relatifs (négatifs, zéro, positifs). */
export function droiteGraduee({ min = -5, max = 5, points = [-3, 2] } = {}) {
  const W = 440;
  const H = 150;
  const y = 80;
  const marge = 30;
  const ox = (v) => marge + ((v - min) / (max - min)) * (W - 2 * marge);
  let corps =
    `<line x1="${marge - 10}" y1="${y}" x2="${W - marge + 10}" y2="${y}" stroke="${ENCRE}" stroke-width="2"/>` +
    `<path d="M ${W - marge + 10} ${y} l -9 -5 v 10 z" fill="${ENCRE}"/>` +
    `<path d="M ${marge - 10} ${y} l 9 -5 v 10 z" fill="${ENCRE}"/>`;
  for (let v = min; v <= max; v += 1) {
    const x = ox(v);
    const grand = v === 0;
    corps += `<line x1="${nb(x)}" y1="${y - (grand ? 10 : 6)}" x2="${nb(x)}" y2="${y + (grand ? 10 : 6)}" stroke="${grand ? ENCRE : AXE}" stroke-width="${grand ? 2.4 : 1.4}"/>`;
    corps += `<text x="${nb(x)}" y="${y + 26}" font-size="13" fill="${grand ? ENCRE : ATTENUE}" text-anchor="middle" font-variant-numeric="tabular-nums">${v > 0 ? '+' + v : v}</text>`;
  }
  const couls = [ROUGE, BLEU, VERT];
  points.forEach((p, i) => {
    const x = ox(p);
    corps += `<circle cx="${nb(x)}" cy="${y}" r="5.5" fill="${couls[i % couls.length]}"/>`;
    corps += `<text x="${nb(x)}" y="${y - 16}" font-size="14" fill="${couls[i % couls.length]}" text-anchor="middle" font-variant-numeric="tabular-nums">${p > 0 ? '+' + p : p}</text>`;
  });
  return enveloppe(W, H, corps);
}

/** Registre : identifiant de schéma → fonction génératrice. */
export const SCHEMAS = {
  'triangle-rectangle': triangleRectangle,
  'fonction-affine': fonctionAffine,
  parabole,
  'cercle-trigo': cercleTrigo,
  thales,
  'repere-coordonnees': repereCoordonnees,
  'onde-sinusoidale': ondeSinusoidale,
  'lentille-convergente': lentilleConvergente,
  'circuit-electrique': circuitElectrique,
  'chaine-alimentaire': chaineAlimentaire,
  'rectangle-aire-perimetre': rectangleAirePerimetre,
  poids,
  atome,
  'cycle-eau': cycleEau,
  'pave-droit': paveDroit,
  angle,
  'droite-graduee': droiteGraduee,
};

/** Encode un SVG en data-URI base64 utilisable en syntaxe image Markdown. */
export function svgVersDataUri(svg) {
  return 'data:image/svg+xml;base64,' + Buffer.from(svg, 'utf8').toString('base64');
}
