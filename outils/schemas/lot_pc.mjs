/**
 * Lot « pc » : schémas de physique-chimie (5e → Terminale, voies générale et
 * technologique, enseignement scientifique).
 *
 * Toutes les coordonnées sont calculées : constructions optiques par la relation
 * de conjugaison, courbes tracées à partir des vraies fonctions (exponentielles,
 * sinusoïdes, loi de Planck, courbes de titrage calculées…), valeurs reprises des
 * fiches. Les symboles électriques suivent la norme (pile : grand trait = borne +).
 */

import {
  enveloppe, texte, ligne, fleche, boite, cercle, polygone, point, angleDroit, courbe, nb, esc,
  ENCRE, PAPIER, GRILLE, AXE, BLEU, ROUGE, VERT, ORANGE, VIOLET, ATTENUE,
} from './base.mjs';

// ───────────────────────── Outils communs ─────────────────────────

const FONDS = {
  bleu: ['#eef3fb', BLEU], vert: ['#e8f5ee', VERT], rouge: ['#fbeaea', ROUGE], orange: ['#fdf0e3', ORANGE],
  violet: ['#f3ecfa', VIOLET], gris: ['#f1f4f7', ATTENUE], jaune: ['#fdf6d8', '#9a7400'],
};
const EAU = '#cfe4f7';
const EAU_BORD = '#6aa3d8';

/** Nombre à la française (virgule, signe moins typographique, espace des milliers). */
function fr(x, d = 0) {
  let s = Math.abs(x).toFixed(d);
  let [ent, dec] = s.split('.');
  if (ent.length > 4) ent = ent.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  s = dec ? `${ent},${dec}` : ent;
  return (x < -1e-12 ? '−' : '') + s;
}

/** Rectangle simple. */
function rect(x, y, w, h, { fond = 'none', bord = ENCRE, ep = 2, rx = 0, opacite = 1, pointilles = false } = {}) {
  return `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(w)}" height="${nb(h)}" rx="${rx}" fill="${fond}" fill-opacity="${opacite}" stroke="${bord}" stroke-width="${ep}"${pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
}

/** Chemin SVG brut. */
function chemin(d, { couleur = ENCRE, ep = 2, fond = 'none', opacite = 1, pointilles = false, joint = 'round' } = {}) {
  return `<path d="${d}" fill="${fond}" fill-opacity="${opacite}" stroke="${couleur}" stroke-width="${ep}" stroke-linejoin="${joint}" stroke-linecap="round"${pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
}

/** Polyligne. */
function polyligne(pts, opts = {}) {
  return chemin('M ' + pts.map(([x, y]) => `${nb(x)} ${nb(y)}`).join(' L '), opts);
}

/** Pointe de flèche seule (au point x2,y2, orientée selon la direction (dx,dy)). */
function pointe(x2, y2, dx, dy, { couleur = ENCRE, taille = 10 } = {}) {
  const a = Math.atan2(dy, dx);
  const bx = x2 - taille * Math.cos(a), by = y2 - taille * Math.sin(a);
  const p1 = [bx + (taille / 2) * Math.sin(a), by - (taille / 2) * Math.cos(a)];
  const p2 = [bx - (taille / 2) * Math.sin(a), by + (taille / 2) * Math.cos(a)];
  return `<polygon points="${nb(x2)},${nb(y2)} ${nb(p1[0])},${nb(p1[1])} ${nb(p2[0])},${nb(p2[1])}" fill="${couleur}"/>`;
}

/** Flèche courbe (Bézier quadratique, point de contrôle cx,cy). */
function flecheCourbe(x1, y1, cx, cy, x2, y2, { couleur = ENCRE, ep = 2, taille = 10, pointilles = false } = {}) {
  // on raccourcit légèrement la courbe pour que la pointe ne déborde pas
  const dx = x2 - cx, dy = y2 - cy, l = Math.hypot(dx, dy) || 1;
  const ex = x2 - (dx / l) * taille * 0.8, ey = y2 - (dy / l) * taille * 0.8;
  return chemin(`M ${nb(x1)} ${nb(y1)} Q ${nb(cx)} ${nb(cy)} ${nb(ex)} ${nb(ey)}`, { couleur, ep, pointilles }) + pointe(x2, y2, dx, dy, { couleur, taille });
}

/** Double flèche (cote). */
function cote(x1, y1, x2, y2, t, { couleur = ENCRE, dx = 0, dy = -8, taille = 13, ep = 1.5 } = {}) {
  return fleche(x1, y1, x2, y2, { couleur, epaisseur: ep, pointe: 8 }) + fleche(x2, y2, x1, y1, { couleur, epaisseur: ep, pointe: 8 }) +
    (t ? texte((x1 + x2) / 2 + dx, (y1 + y2) / 2 + dy, t, { taille, couleur }) : '');
}

/** Ellipse. */
function ellipse(cx, cy, rx, ry, { couleur = ENCRE, fond = 'none', ep = 2, opacite = 1, pointilles = false } = {}) {
  return `<ellipse cx="${nb(cx)}" cy="${nb(cy)}" rx="${nb(rx)}" ry="${nb(ry)}" fill="${fond}" fill-opacity="${opacite}" stroke="${couleur}" stroke-width="${ep}"${pointilles ? ' stroke-dasharray="6 5"' : ''}/>`;
}

/** Disque plein (particule, atome…). */
function disque(cx, cy, r, couleur, { bord = ENCRE, ep = 1.2 } = {}) {
  return `<circle cx="${nb(cx)}" cy="${nb(cy)}" r="${nb(r)}" fill="${couleur}" stroke="${bord}" stroke-width="${ep}"/>`;
}

/** Générateur pseudo-aléatoire déterministe (positions de particules reproductibles). */
function alea(graine = 1) {
  let s = graine >>> 0 || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

/**
 * Repère pour graphes de physique : axes en bas et à gauche, grille, graduations (12 px),
 * noms des axes. Renvoie { svg, X, Y }.
 */
function graphe({ W = 620, H = 340, g = 64, d = 26, h = 28, b = 46, xmin = 0, xmax = 10, ymin = 0, ymax = 10,
  pasX = 1, pasY = 1, fmtX, fmtY, nomX = '', nomY = '', grille = true, gradX = true, gradY = true, sousGrilleX = 0 } = {}) {
  const X = (x) => g + ((x - xmin) / (xmax - xmin)) * (W - g - d);
  const Y = (y) => H - b - ((y - ymin) / (ymax - ymin)) * (H - b - h);
  const fx = fmtX || ((v) => fr(v, Math.max(0, -Math.floor(Math.log10(pasX) + 1e-9))));
  const fy = fmtY || ((v) => fr(v, Math.max(0, -Math.floor(Math.log10(pasY) + 1e-9))));
  let s = '';
  const eps = 1e-9;
  if (grille) {
    for (let x = Math.ceil(xmin / pasX - eps) * pasX; x <= xmax + eps; x += pasX) s += ligne(X(x), Y(ymin), X(x), Y(ymax), { couleur: GRILLE, epaisseur: 1 });
    for (let y = Math.ceil(ymin / pasY - eps) * pasY; y <= ymax + eps; y += pasY) s += ligne(X(xmin), Y(y), X(xmax), Y(y), { couleur: GRILLE, epaisseur: 1 });
  }
  s += fleche(X(xmin), Y(ymin), X(xmax) + 14, Y(ymin), { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  s += fleche(X(xmin), Y(ymin), X(xmin), Y(ymax) - 14, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  if (gradX) for (let x = Math.ceil(xmin / pasX - eps) * pasX; x <= xmax + eps; x += pasX) {
    s += ligne(X(x), Y(ymin), X(x), Y(ymin) + 4, { couleur: AXE, epaisseur: 1.4 });
    s += texte(X(x), Y(ymin) + 18, fx(x), { taille: 12, couleur: ATTENUE });
  }
  if (gradY) for (let y = Math.ceil(ymin / pasY - eps) * pasY; y <= ymax + eps; y += pasY) {
    s += ligne(X(xmin) - 4, Y(y), X(xmin), Y(y), { couleur: AXE, epaisseur: 1.4 });
    s += texte(X(xmin) - 8, Y(y) + 4, fy(y), { taille: 12, couleur: ATTENUE, ancre: 'end' });
  }
  if (nomX) s += texte(W - 6, Y(ymin) + 36, nomX, { taille: 13, couleur: ENCRE, ancre: 'end', italique: false });
  if (nomY) s += texte(X(xmin) - 6, Y(ymax) - 18, nomY, { taille: 13, couleur: ENCRE, ancre: 'start' });
  return { svg: s, X, Y };
}

/** Polyligne d'une fonction dans un graphe. */
function trace(f, a, b, X, Y, { couleur = BLEU, ep = 2.6, n = 300, pointilles = false } = {}) {
  const pts = [];
  for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; const y = f(x); if (Number.isFinite(y)) pts.push([X(x), Y(y)]); }
  return polyligne(pts, { couleur, ep, pointilles });
}

/** Étiquette sur fond blanc (lisible par-dessus une grille). */
function etiquette(x, y, t, { taille = 13, couleur = ENCRE, ancre = 'middle', gras = false, fond = PAPIER } = {}) {
  const lignes = String(t).split('\n');
  const larg = Math.max(...lignes.map((l) => l.length)) * taille * 0.56 + 8;
  const haut = lignes.length * taille * 1.25 + 4;
  const x0 = ancre === 'middle' ? x - larg / 2 : ancre === 'end' ? x - larg + 4 : x - 4;
  return `<rect x="${nb(x0)}" y="${nb(y - taille)}" width="${nb(larg)}" height="${nb(haut)}" rx="3" fill="${fond}" fill-opacity="0.92"/>` +
    texte(x, y, t, { taille, couleur, ancre, gras });
}

// ───────────────────────── Diagramme générique (boîtes + flèches) ─────────────────────────

/** Point de sortie d'une boîte dans la direction d'un autre point. */
function bordBoite(bx, cible) {
  const cx = bx.x + bx.w / 2, cy = bx.y + bx.h / 2;
  const dx = cible[0] - cx, dy = cible[1] - cy;
  if (bx.forme === 'ellipse') {
    const k = 1 / Math.sqrt((dx * dx) / ((bx.w / 2) ** 2) + (dy * dy) / ((bx.h / 2) ** 2) || 1);
    return [cx + dx * k, cy + dy * k];
  }
  const kx = dx === 0 ? Infinity : bx.w / 2 / Math.abs(dx);
  const ky = dy === 0 ? Infinity : bx.h / 2 / Math.abs(dy);
  const k = Math.min(kx, ky);
  return [cx + dx * k, cy + dy * k];
}

/**
 * Diagramme : boîtes positionnées + flèches entre boîtes (rognées au bord).
 * boites : [{ id, x, y, w, h, t, style:'bleu'|'vert'|…, forme:'rect'|'ellipse'|'nu', taille, gras }]
 * fleches : [{ de, a, t, couleur, courbe (décalage du point de contrôle), lx, ly (décalage étiquette),
 *              pointilles, ep, double, depuis:[x,y], vers:[x,y] }]
 * textes : [{ x, y, t, taille, couleur, ancre, gras, italique }]
 */
function diagramme({ W = 640, H = 300, boites = [], fleches = [], textes = [], extra = '' } = {}) {
  const parId = Object.fromEntries(boites.map((b) => [b.id, b]));
  const centre = (b) => [b.x + b.w / 2, b.y + b.h / 2];
  let s = '';
  for (const f of fleches) {
    const A = f.de ? parId[f.de] : null, B = f.a ? parId[f.a] : null;
    const pA0 = f.depuis || centre(A), pB0 = f.vers || centre(B);
    const k = f.courbe || 0;
    const mx = (pA0[0] + pB0[0]) / 2, my = (pA0[1] + pB0[1]) / 2;
    const L = Math.hypot(pB0[0] - pA0[0], pB0[1] - pA0[1]) || 1;
    const cx = mx + (k * -(pB0[1] - pA0[1])) / L, cy = my + (k * (pB0[0] - pA0[0])) / L;
    const p1 = A && !f.depuis ? bordBoite(A, k ? [cx, cy] : pB0) : pA0;
    const p2 = B && !f.vers ? bordBoite(B, k ? [cx, cy] : pA0) : pB0;
    const g = 4; // petit jeu entre flèche et boîte
    const u = (p, q) => { const l = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1; return [(q[0] - p[0]) / l, (q[1] - p[1]) / l]; };
    const ua = u(p1, k ? [cx, cy] : p2), ub = u(p2, k ? [cx, cy] : p1);
    const q1 = A && !f.depuis ? [p1[0] + ua[0] * g, p1[1] + ua[1] * g] : p1;
    const q2 = B && !f.vers ? [p2[0] + ub[0] * g, p2[1] + ub[1] * g] : p2;
    const coul = f.couleur || ENCRE;
    if (k) {
      s += flecheCourbe(q1[0], q1[1], cx, cy, q2[0], q2[1], { couleur: coul, ep: f.ep || 2, pointilles: f.pointilles });
      if (f.double) s += pointe(q1[0], q1[1], q1[0] - cx, q1[1] - cy, { couleur: coul });
    } else {
      s += fleche(q1[0], q1[1], q2[0], q2[1], { couleur: coul, epaisseur: f.ep || 2, pointilles: f.pointilles });
      if (f.double) s += pointe(q1[0], q1[1], q1[0] - q2[0], q1[1] - q2[1], { couleur: coul });
    }
    if (f.t) {
      const tx = k ? (mx + cx) / 2 : (q1[0] + q2[0]) / 2, ty = k ? (my + cy) / 2 : (q1[1] + q2[1]) / 2;
      s += texte(tx + (f.lx || 0), ty + (f.ly ?? -7), f.t, { taille: f.taille || 13, couleur: f.couleurTexte || coul, ancre: f.ancre || 'middle', italique: !!f.italique });
    }
  }
  for (const b of boites) {
    const [fond, bord] = FONDS[b.style || 'bleu'] || FONDS.bleu;
    const taille = b.taille || 14;
    if (b.forme === 'nu') { s += texte(b.x + b.w / 2, b.y + b.h / 2 + taille * 0.35 - ((String(b.t).split('\n').length - 1) * taille * 1.25) / 2, b.t, { taille, gras: !!b.gras, couleur: b.couleur || ENCRE }); continue; }
    if (b.forme === 'ellipse') {
      s += ellipse(b.x + b.w / 2, b.y + b.h / 2, b.w / 2, b.h / 2, { couleur: bord, fond, ep: 1.8 });
      s += texte(b.x + b.w / 2, b.y + b.h / 2 + taille * 0.35 - ((String(b.t).split('\n').length - 1) * taille * 1.25) / 2, b.t, { taille, gras: !!b.gras });
      continue;
    }
    s += boite(b.x, b.y, b.w, b.h, b.t, { fond, bord, taille, gras: !!b.gras });
  }
  for (const t of textes) s += texte(t.x, t.y, t.t, { taille: t.taille || 13, couleur: t.couleur || ENCRE, ancre: t.ancre || 'middle', gras: !!t.gras, italique: !!t.italique });
  return enveloppe(W, H, s + extra);
}

// ───────────────────────── Circuits électriques (symboles normalisés) ─────────────────────────

/**
 * Dipôle centré en (x, y), posé sur un fil horizontal ('h') ou vertical ('v').
 * Le fil est tracé avant ; le dipôle masque le fil sur sa longueur.
 * types : lampe, resistance, moteur, amperemetre, voltmetre, pile, interrupteur (ouvert:true/false),
 *         condensateur, del (sens:+1/-1).
 */
function dipole(type, x, y, orient = 'h', o = {}) {
  let g = '';
  const blanc = PAPIER;
  const masque = (a) => `<rect x="${-a}" y="-3" width="${2 * a}" height="6" fill="${blanc}"/>`;
  let lettre = '';
  switch (type) {
    case 'lampe':
      g += masque(15) + `<circle r="13" fill="${blanc}" stroke="${ENCRE}" stroke-width="2"/>` +
        `<line x1="-9.19" y1="-9.19" x2="9.19" y2="9.19" stroke="${ENCRE}" stroke-width="2"/><line x1="-9.19" y1="9.19" x2="9.19" y2="-9.19" stroke="${ENCRE}" stroke-width="2"/>`;
      break;
    case 'resistance':
      g += `<rect x="-21" y="-8" width="42" height="16" fill="${blanc}" stroke="${ENCRE}" stroke-width="2"/>`;
      break;
    case 'moteur': case 'amperemetre': case 'voltmetre': case 'ohmmetre':
      g += masque(16) + `<circle r="14" fill="${blanc}" stroke="${ENCRE}" stroke-width="2"/>`;
      lettre = { moteur: 'M', amperemetre: 'A', voltmetre: 'V', ohmmetre: 'Ω' }[type];
      break;
    case 'pile': {
      const s = o.plus === 'droite' || o.plus === 'bas' ? -1 : 1; // +1 : grand trait du côté u négatif
      g += masque(5) + `<line x1="${-4 * s}" y1="-17" x2="${-4 * s}" y2="17" stroke="${ENCRE}" stroke-width="2"/>` +
        `<line x1="${4 * s}" y1="-8" x2="${4 * s}" y2="8" stroke="${ENCRE}" stroke-width="5"/>`;
      break;
    }
    case 'interrupteur':
      g += masque(15) + `<circle cx="-14" r="2.6" fill="${ENCRE}"/><circle cx="14" r="2.6" fill="${ENCRE}"/>`;
      g += o.ouvert ? `<line x1="-14" y1="0" x2="${nb(-14 + 29 * Math.cos(Math.PI / 6))}" y2="${nb(-29 * Math.sin(Math.PI / 6))}" stroke="${ENCRE}" stroke-width="2.4" stroke-linecap="round"/>`
        : `<line x1="-14" y1="0" x2="14" y2="0" stroke="${ENCRE}" stroke-width="2.4"/>`;
      break;
    case 'condensateur':
      g += masque(5) + `<line x1="-4" y1="-15" x2="-4" y2="15" stroke="${ENCRE}" stroke-width="3"/><line x1="4" y1="-15" x2="4" y2="15" stroke="${ENCRE}" stroke-width="3"/>`;
      break;
    case 'del': {
      const s = o.sens === -1 ? -1 : 1;
      g += masque(10) + `<polygon points="${-9 * s},-10 ${-9 * s},10 ${9 * s},0" fill="${blanc}" stroke="${ENCRE}" stroke-width="2" stroke-linejoin="round"/>` +
        `<line x1="${9 * s}" y1="-10" x2="${9 * s}" y2="10" stroke="${ENCRE}" stroke-width="2"/>`;
      // deux petites flèches de lumière émise
      const fl = (x0, y0) => `<line x1="${x0}" y1="${y0}" x2="${x0 + 7}" y2="${y0 - 7}" stroke="${ORANGE}" stroke-width="1.6"/><polygon points="${x0 + 9},${y0 - 9} ${x0 + 3},${y0 - 7} ${x0 + 7},${y0 - 3}" fill="${ORANGE}"/>`;
      g += fl(-1, -13) + fl(5, -13);
      break;
    }
    default: throw new Error('dipôle inconnu ' + type);
  }
  const rot = orient === 'v' ? ' rotate(90)' : '';
  let s = `<g transform="translate(${nb(x)},${nb(y)})${rot}">${g}</g>`;
  if (lettre) s += texte(x, y + 5.5, lettre, { taille: 15, gras: true });
  if (type === 'pile' && o.signes !== false) {
    // signe + près du grand trait, signe − près du petit
    const sp = o.plus === 'droite' || o.plus === 'bas' ? 1 : -1;
    if (orient === 'h') { s += texte(x + sp * 13, y - 20, '+', { taille: 15, couleur: ROUGE, gras: true }) + texte(x - sp * 13, y - 20, '−', { taille: 15, couleur: BLEU, gras: true }); }
    else { s += texte(x + 24, y + sp * 10 + 5, '+', { taille: 15, couleur: ROUGE, gras: true }) + texte(x + 24, y - sp * 10 + 5, '−', { taille: 15, couleur: BLEU, gras: true }); }
  }
  if (o.allumee) {
    for (let k = 0; k < 8; k++) {
      const a = (k * Math.PI) / 4 + Math.PI / 8;
      s += ligne(x + 17 * Math.cos(a), y + 17 * Math.sin(a), x + 25 * Math.cos(a), y + 25 * Math.sin(a), { couleur: ORANGE, epaisseur: 2 });
    }
  }
  if (o.label) {
    const pos = o.pos || (orient === 'h' ? 'haut' : 'droite');
    const d = o.ecart || (type === 'pile' ? 30 : 26);
    const [lx, ly, an] = pos === 'haut' ? [x, y - d, 'middle'] : pos === 'bas' ? [x, y + d + 10, 'middle'] : pos === 'droite' ? [x + d, y + 5, 'start'] : [x - d, y + 5, 'end'];
    s += texte(lx, ly, o.label, { taille: o.taille || 13, ancre: an, couleur: o.couleurLabel || ENCRE });
  }
  return s;
}

/** Fil (polyligne). */
function fil(pts) { return polyligne(pts, { couleur: ENCRE, ep: 2, joint: 'miter' }); }

/** Nœud de dérivation. */
function noeud(x, y, nom) { return `<circle cx="${nb(x)}" cy="${nb(y)}" r="4" fill="${ENCRE}"/>` + (nom ? texte(x - 10, y - 8, nom, { taille: 13 }) : ''); }

/** Flèche de courant sur un fil : sens 'd','g','h','b'. */
function courant(x, y, sens, t, { couleur = ROUGE, dx = 0, dy = -10 } = {}) {
  const v = { d: [1, 0], g: [-1, 0], h: [0, -1], b: [0, 1] }[sens];
  return pointe(x + v[0] * 6, y + v[1] * 6, v[0], v[1], { couleur, taille: 12 }) + (t ? texte(x + dx, y + dy, t, { taille: 14, couleur, italique: true }) : '');
}

/** Flèche de tension (de (x1,y1) vers (x2,y2)), étiquette à côté. */
function tension(x1, y1, x2, y2, t, { couleur = VERT, lx = 0, ly = 0 } = {}) {
  return fleche(x1, y1, x2, y2, { couleur, epaisseur: 2, pointe: 10 }) + (t ? texte((x1 + x2) / 2 + lx, (y1 + y2) / 2 + ly, t, { taille: 14, couleur, italique: true }) : '');
}

// ───────────────────────── Registre ─────────────────────────
const S = {};
const P = [];
S['diagramme'] = (p) => diagramme(p);
/** Ajoute une pose. */
function pose(fiche, cle, schema, apres, legende, params = {}) { P.push({ fiche, cle, schema, apres, legende, params }); }

// ───────────────────────── Schémas : circuits (collège) ─────────────────────────

/** Boucle rectangulaire : pile à gauche (+ en haut), dipôles en haut et à droite. */
function boucle(ox, oy, w, h, { haut = [], droite = [], bas = [], allumee = false, courantSens = true, titre = '', sousTitre = '' } = {}) {
  const x1 = ox, x2 = ox + w, y1 = oy, y2 = oy + h;
  let s = fil([[x1, y1], [x2, y1], [x2, y2], [x1, y2], [x1, y1]]);
  s += dipole('pile', x1, (y1 + y2) / 2, 'v', { label: '', signes: true });
  haut.forEach((d, i) => { s += dipole(d.type, x1 + (w * (i + 1)) / (haut.length + 1), y1, 'h', d); });
  droite.forEach((d, i) => { s += dipole(d.type, x2, y1 + (h * (i + 1)) / (droite.length + 1), 'v', d); });
  bas.forEach((d, i) => { s += dipole(d.type, x1 + (w * (i + 1)) / (bas.length + 1), y2, 'h', d); });
  if (courantSens) s += courant(x1 + w * 0.82, y1, 'd', 'I') + courant(x1 + w * 0.5, y2, 'g', '', {});
  if (titre) s += texte(ox + w / 2, oy - 34, titre, { taille: 15, gras: true });
  if (sousTitre) s += texte(ox + w / 2, y2 + 34, sousTitre, { taille: 13, couleur: ATTENUE });
  return s;
}

S['circuits-ouvert-ferme'] = () => {
  let s = boucle(60, 80, 200, 140, { haut: [{ type: 'interrupteur', ouvert: false }], droite: [{ type: 'lampe', allumee: true }], titre: 'Circuit fermé', sousTitre: 'boucle complète : la lampe brille' });
  s += boucle(380, 80, 200, 140, { haut: [{ type: 'interrupteur', ouvert: true }], droite: [{ type: 'lampe' }], courantSens: false, titre: 'Circuit ouvert', sousTitre: 'boucle coupée : lampe éteinte' });
  s += texte(320, 284, 'pile : grand trait = borne +', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 296, s);
};

S['serie-derivation'] = () => {
  let s = boucle(50, 80, 210, 150, { haut: [{ type: 'lampe', label: 'L₁', pos: 'bas', ecart: 22 }], droite: [{ type: 'lampe', label: 'L₂' }], titre: 'En série', sousTitre: 'une seule boucle' });
  // dérivation : deux branches entre deux nœuds
  const ox = 380, oy = 80, w = 210, h = 150;
  const xa = ox + 100, xb = ox + w;
  s += fil([[ox, oy], [xb, oy], [xb, oy + h], [ox, oy + h], [ox, oy]]);
  s += fil([[xa, oy], [xa, oy + h]]);
  s += dipole('pile', ox, oy + h / 2, 'v');
  s += dipole('lampe', xa, oy + h / 2, 'v', { label: 'L₁' });
  s += dipole('lampe', xb, oy + h / 2, 'v', { label: 'L₂' });
  s += noeud(xa, oy) + noeud(xa, oy + h);
  s += courant(ox + 55, oy, 'd', 'I') + courant(xa + 50, oy, 'd', 'I₂') + courant(xa, oy + 35, 'b', 'I₁', { dx: -16, dy: 4 });
  s += texte(ox + w / 2, oy - 34, 'En dérivation', { taille: 15, gras: true });
  s += texte(ox + w / 2, oy + h + 34, 'deux branches séparées', { taille: 13, couleur: ATTENUE });
  return enveloppe(640, 290, s);
};

S['mesure-ua'] = () => {
  const ox = 120, oy = 70, w = 300, h = 170;
  let s = fil([[ox, oy], [ox + w, oy], [ox + w, oy + h], [ox, oy + h], [ox, oy]]);
  s += dipole('pile', ox, oy + h / 2, 'v');
  s += dipole('amperemetre', ox + 130, oy, 'h', { label: 'ampèremètre en série', ecart: 26 });
  s += dipole('lampe', ox + w, oy + h / 2, 'v');
  // voltmètre en dérivation aux bornes de la lampe
  const xv = ox + w + 110;
  s += fil([[ox + w, oy + 30], [xv, oy + 30], [xv, oy + h - 30], [ox + w, oy + h - 30]]);
  s += noeud(ox + w, oy + 30) + noeud(ox + w, oy + h - 30);
  s += dipole('voltmetre', xv, oy + h / 2, 'v', { label: 'voltmètre\nen dérivation', pos: 'droite', ecart: 24 });
  s += courant(ox + 240, oy, 'd', 'I');
  s += texte(ox + w - 20, oy + h / 2 + 5, 'lampe', { taille: 13, ancre: 'end' });
  return enveloppe(660, 290, s);
};

// ───────────────────────── Béchers (mélanges, solutions) ─────────────────────────

/** Bécher : coin bas-gauche (x, yb), largeur w, hauteur h ; contenu décrit par c. */
function becher(x, yb, w, h, c = {}) {
  const yt = yb - h;
  const niv = yb - (c.niveau ?? 0.7) * h;
  let s = '';
  const r = alea(c.graine || 7);
  if (c.type === 'deux-couches') {
    const mi = yb - (c.niveau ?? 0.7) * h * 0.55;
    s += rect(x, mi, w, yb - mi, { fond: c.bas || EAU, bord: 'none', ep: 0 });
    s += rect(x, niv, w, mi - niv, { fond: c.haut || '#f3d36b', bord: 'none', ep: 0 });
    s += ligne(x, mi, x + w, mi, { couleur: '#9a7a20', epaisseur: 1.4 });
    s += texte(x + w / 2, (niv + mi) / 2 + 5, c.labelHaut || 'huile', { taille: 13 }) + texte(x + w / 2, (mi + yb) / 2 + 5, c.labelBas || 'eau', { taille: 13 });
  } else if (c.type !== 'vide') {
    s += rect(x, niv, w, yb - niv, { fond: c.couleur || EAU, bord: 'none', ep: 0 });
  }
  if (c.type === 'grains') {
    // mélange hétérogène : grains en suspension et au fond
    for (let i = 0; i < 26; i++) s += disque(x + 8 + r() * (w - 16), yb - 6 - r() * 14, 3.2, c.grains || '#c8a35a', { bord: '#8a6a2a', ep: 0.8 });
    for (let i = 0; i < 8; i++) s += disque(x + 8 + r() * (w - 16), niv + 10 + r() * (yb - niv - 34), 2.6, c.grains || '#c8a35a', { bord: '#8a6a2a', ep: 0.8 });
  }
  if (c.type === 'depot') {
    const pts = [];
    for (let i = 0; i <= 12; i++) pts.push([x + (w * i) / 12, yb - 7 - 5 * Math.sin((i / 12) * Math.PI) - r() * 2]);
    s += polygone([[x, yb], ...pts, [x + w, yb]], { couleur: '#b9b9b9', fond: '#ffffff', epaisseur: 1.2 });
    for (let i = 0; i < 18; i++) s += disque(x + 6 + r() * (w - 12), yb - 3 - r() * 7, 1.6, '#d9d9d9', { bord: '#9a9a9a', ep: 0.6 });
    if (c.labelDepot) s += texte(x + w / 2, yb - 22, c.labelDepot, { taille: 12, couleur: ATTENUE });
  }
  // verre
  s += chemin(`M ${x - 5} ${yt} Q ${x} ${yt} ${x} ${yt + 6} L ${x} ${yb} L ${x + w} ${yb} L ${x + w} ${yt}`, { couleur: ENCRE, ep: 2.2 });
  if (c.titre) s += texte(x + w / 2, yb + 22, c.titre, { taille: 14, gras: true });
  if (c.sous) s += texte(x + w / 2, yb + 40, c.sous, { taille: 13, couleur: ATTENUE });
  if (c.notes) c.notes.forEach((n) => { s += fleche(n.x0, n.y0, n.x1, n.y1, { couleur: ATTENUE, epaisseur: 1.4, pointe: 8 }) + texte(n.x0 + (n.dx || 0), n.y0 + (n.dy || -4), n.t, { taille: 12, couleur: ATTENUE, ancre: n.ancre || 'middle' }); });
  return s;
}

S['bechers'] = ({ items = [], W = 620, H = 270 }) => {
  const n = items.length, w = 120, h = 150, yb = 190;
  const pas = W / n;
  let s = '';
  items.forEach((it, i) => { s += becher(pas * i + (pas - w) / 2, yb, w, h, it); });
  return enveloppe(W, H, s);
};

export const SCHEMAS = S;
export const POSES = P;

// ═════════════════════════ Poses : 5e ═════════════════════════
{
  const F = 'cinquieme/physique-chimie/energie-electricite';
  pose(F, 'circuit-ouvert-ferme', 'circuits-ouvert-ferme', '## 4. Le circuit électrique : ouvert ou fermé',
    'Le même circuit fermé puis ouvert : quand l\'interrupteur est ouvert, la boucle est coupée et le courant ne circule plus.');
  pose(F, 'serie-derivation', 'serie-derivation', '## 5. Montage en série et montage en dérivation',
    'Deux lampes en série sur une seule boucle, puis en dérivation sur deux branches séparées entre deux nœuds.');
  pose(F, 'mesure-tension-intensite', 'mesure-ua', '## 7. L\'intensité du courant (l\'ampère)',
    'L\'ampèremètre se branche en série dans la boucle, le voltmètre en dérivation aux bornes de la lampe.');
}
{
  const F = 'cinquieme/physique-chimie/corps-purs-melanges';
  pose(F, 'homogene-heterogene', 'bechers', '## 3. Mélange homogène et mélange hétérogène',
    'L\'eau salée a un aspect uniforme (mélange homogène) ; dans l\'eau mélangée à du sable, on distingue le sable (mélange hétérogène).',
    { W: 480, items: [{ titre: 'Eau salée', sous: 'mélange homogène', couleur: EAU }, { type: 'grains', titre: 'Eau + sable', sous: 'mélange hétérogène' }] });
  pose(F, 'saturation', 'bechers', '## 5. La solubilité',
    'Tant que la limite de solubilité n\'est pas atteinte, tout le sel se dissout ; au-delà, la solution est saturée et le sel en trop reste au fond.',
    { W: 480, items: [{ titre: 'Non saturée', sous: 'tout le sel est dissous' }, { type: 'depot', titre: 'Saturée', sous: 'du sel reste au fond', labelDepot: 'sel non dissous' }] });
  pose(F, 'miscibilite', 'bechers', '## 6. La miscibilité',
    'L\'eau et le sirop sont miscibles (un seul liquide) ; l\'eau et l\'huile ne le sont pas : l\'huile forme une couche au-dessus de l\'eau.',
    { W: 480, items: [{ titre: 'Eau + sirop', sous: 'miscibles', couleur: '#f2b8c6' }, { type: 'deux-couches', titre: 'Eau + huile', sous: 'non miscibles', notes: [] }] });
}

// ───────────────────────── Mouvements (collège) ─────────────────────────

S['trajectoires'] = () => {
  let s = '';
  // rectiligne
  for (let i = 0; i <= 6; i++) s += point(30 + i * 26, 150 - i * 10, '', { couleur: BLEU });
  s += ligne(30, 150, 186, 90, { couleur: BLEU, epaisseur: 1.2, pointilles: true });
  s += texte(108, 215, 'Rectiligne', { taille: 15, gras: true }) + texte(108, 234, 'une droite', { taille: 13, couleur: ATTENUE });
  // circulaire
  const cx = 320, cy = 120, R = 62;
  s += cercle(cx, cy, R, { couleur: BLEU, epaisseur: 1.2 }).replace('stroke-width="1.2"', 'stroke-width="1.2" stroke-dasharray="6 5"');
  for (let i = 0; i < 12; i++) { const a = (i * Math.PI) / 6; s += point(cx + R * Math.cos(a), cy + R * Math.sin(a), '', { couleur: BLEU }); }
  s += `<circle cx="${cx}" cy="${cy}" r="2.5" fill="${ATTENUE}"/>`;
  s += texte(cx, 215, 'Circulaire', { taille: 15, gras: true }) + texte(cx, 234, 'un cercle', { taille: 13, couleur: ATTENUE });
  // curviligne : ballon lancé (parabole)
  const x0 = 440, y0 = 180;
  for (let i = 0; i <= 8; i++) { const t = i / 8; s += point(x0 + 160 * t, y0 - 230 * t + 230 * t * t, '', { couleur: BLEU }); }
  s += trace((t) => y0 - 230 * t + 230 * t * t, 0, 1, (t) => x0 + 160 * t, (y) => y, { couleur: BLEU, ep: 1.2, pointilles: true });
  s += texte(520, 215, 'Curviligne', { taille: 15, gras: true }) + texte(520, 234, 'une courbe quelconque', { taille: 13, couleur: ATTENUE });
  s += texte(320, 262, 'chaque point : position de l\'objet à intervalles de temps réguliers', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 274, s);
};

S['balle-train'] = () => {
  let s = '';
  const g = 220, v = 150; // échelle arbitraire, mêmes instants dans les deux dessins
  const ts = [0, 0.15, 0.3, 0.45, 0.6, 0.75];
  // panneau 1 : référentiel du train
  s += rect(40, 50, 240, 190, { bord: ATTENUE, ep: 1.5, rx: 8 });
  s += texte(160, 36, 'Vue par un voyageur du train', { taille: 14, gras: true });
  ts.forEach((t) => { s += disque(160, 72 + 0.5 * g * t * t * 2.6, 6, '#f08c2e', { bord: ORANGE }); });
  s += ligne(160, 72, 160, 72 + 0.5 * g * 0.75 * 0.75 * 2.6, { couleur: BLEU, epaisseur: 1.4, pointilles: true });
  s += texte(160, 262, 'trajectoire rectiligne', { taille: 13, couleur: BLEU });
  // panneau 2 : référentiel du quai
  s += texte(470, 36, 'Vue par une personne sur le quai', { taille: 14, gras: true });
  s += ligne(330, 240, 620, 240, { couleur: ATTENUE, epaisseur: 2 });
  ts.forEach((t) => { s += disque(350 + v * t * 1.6, 72 + 0.5 * g * t * t * 2.6, 6, '#f08c2e', { bord: ORANGE }); });
  s += trace((t) => 72 + 0.5 * g * t * t * 2.6, 0, 0.75, (t) => 350 + v * t * 1.6, (y) => y, { couleur: BLEU, ep: 1.4, pointilles: true });
  s += fleche(350, 258, 450, 258, { couleur: ATTENUE, epaisseur: 1.6, pointe: 8 }) + texte(458, 262, 'sens du train', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  s += texte(470, 288, 'trajectoire curviligne', { taille: 13, couleur: BLEU });
  return enveloppe(640, 300, s);
};

// ───────────────────────── Propriétés de la matière ─────────────────────────

/** Œil stylisé (vu de profil, regard vers la droite par défaut). */
function oeilProfil(x, y, { couleur = ENCRE, sens = 1, barre = false } = {}) {
  let s = chemin(`M ${x - 14 * sens} ${y} Q ${x} ${y - 11} ${x + 14 * sens} ${y} Q ${x} ${y + 11} ${x - 14 * sens} ${y} Z`, { couleur, ep: 1.8, fond: PAPIER });
  s += `<circle cx="${nb(x + 5 * sens)}" cy="${y}" r="4" fill="${couleur}"/>`;
  if (barre) s += ligne(x - 12, y - 12, x + 12, y + 12, { couleur: ROUGE, epaisseur: 2.4 }) + ligne(x - 12, y + 12, x + 12, y - 12, { couleur: ROUGE, epaisseur: 2.4 });
  return s;
}

S['lecture-eprouvette'] = () => {
  let s = '';
  const x = 260, w = 70, yb = 260, yt = 30;
  const yl = 150; // niveau lu (bas du ménisque)
  // liquide avec ménisque concave
  s += chemin(`M ${x} ${yl - 10} Q ${x + w / 2} ${yl + 8} ${x + w} ${yl - 10} L ${x + w} ${yb} L ${x} ${yb} Z`, { couleur: 'none', ep: 0, fond: EAU });
  s += chemin(`M ${x} ${yl - 10} Q ${x + w / 2} ${yl + 8} ${x + w} ${yl - 10}`, { couleur: EAU_BORD, ep: 2 });
  // graduations
  for (let k = 0; k <= 10; k++) { const yy = 70 + k * 16; s += ligne(x + w - (k % 5 === 0 ? 26 : 14), yy, x + w, yy, { couleur: ENCRE, epaisseur: 1.3 }); }
  s += texte(x + w + 10, 70 + 5 * 16 + 4, '', { taille: 12 });
  // verre
  s += chemin(`M ${x - 6} ${yt} L ${x} ${yt + 6} L ${x} ${yb} L ${x + w} ${yb} L ${x + w} ${yt}`, { couleur: ENCRE, ep: 2.2 });
  s += rect(x - 22, yb, w + 44, 10, { fond: '#e6ebf0', bord: ENCRE, ep: 1.6, rx: 2 });
  // œil bien placé
  const yv = yl - 1;
  s += oeilProfil(150, yv, { couleur: VERT });
  s += ligne(166, yv, x + w + 40, yv, { couleur: VERT, epaisseur: 1.6, pointilles: true });
  s += texte(150, yv + 34, 'œil en face\ndu bas du ménisque', { taille: 13, couleur: VERT });
  // yeux mal placés
  s += oeilProfil(150, 70, { couleur: ATTENUE, barre: true }) + oeilProfil(150, 235, { couleur: ATTENUE, barre: true });
  s += texte(110, 74, 'trop haut', { taille: 12, couleur: ATTENUE, ancre: 'end' }) + texte(110, 239, 'trop bas', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  s += fleche(470, 120, x + w / 2 + 4, yl - 2, { couleur: BLEU, epaisseur: 1.6, pointe: 9 });
  s += texte(478, 112, 'ménisque :', { taille: 13, couleur: BLEU, ancre: 'start' }) + texte(478, 130, 'on lit le bas', { taille: 13, couleur: BLEU, ancre: 'start' });
  return enveloppe(640, 290, s);
};

/** Triangle des changements d'état (vocabulaire de la fiche). */
S['changements-etat'] = ({ condensation = 'condensation' } = {}) => {
  const b = [
    { id: 'S', x: 40, y: 230, w: 130, h: 50, t: 'SOLIDE', style: 'bleu', gras: true },
    { id: 'L', x: 470, y: 230, w: 130, h: 50, t: 'LIQUIDE', style: 'bleu', gras: true },
    { id: 'G', x: 255, y: 30, w: 130, h: 50, t: 'GAZ', style: 'bleu', gras: true },
  ];
  const f = [
    { de: 'S', a: 'L', t: 'fusion', couleur: ROUGE, courbe: 36, ly: 26 },
    { de: 'L', a: 'S', t: 'solidification', couleur: BLEU, courbe: 36, ly: -12 },
    { de: 'L', a: 'G', t: 'vaporisation', couleur: ROUGE, courbe: 26, lx: 52, ly: 6 },
    { de: 'G', a: 'L', t: 'liquéfaction', couleur: BLEU, courbe: 26, lx: -54, ly: 2 },
    { de: 'S', a: 'G', t: 'sublimation', couleur: ROUGE, courbe: -26, lx: -50, ly: 2 },
    { de: 'G', a: 'S', t: condensation, couleur: BLEU, courbe: -26, lx: 52, ly: 6 },
  ];
  const t = [
    { x: 320, y: 318, t: 'en rouge : changements obtenus en chauffant ; en bleu : en refroidissant', taille: 12, couleur: ATTENUE },
  ];
  return diagramme({ W: 640, H: 330, boites: b, fleches: f, textes: t });
};

S['palier-glace'] = () => {
  // chauffage régulier d'un glaçon pris à −10 °C (puissance constante) : pentes et palier
  // dans les vraies proportions (c glace ≈ 2,1 kJ/kg/K, L fusion ≈ 334 kJ/kg, c eau ≈ 4,18 kJ/kg/K).
  const r = 5; // °C par minute pour la glace (choix d'échelle)
  const t1 = 10 / r, t2 = t1 + 334 / 2.1 / r, t3 = t2 + (40 * 4.18) / 2.1 / r;
  const { svg, X, Y } = graphe({ W: 620, H: 330, xmin: 0, xmax: 52, ymin: -10, ymax: 40, pasX: 10, pasY: 10, nomX: 'durée de chauffage', nomY: 'température (°C)', fmtX: () => '', g: 70 });
  let s = svg;
  s += polyligne([[X(0), Y(-10)], [X(t1), Y(0)], [X(t2), Y(0)], [X(t3), Y(40)]], { couleur: ROUGE, ep: 3 });
  s += ligne(X(t1), Y(0) - 26, X(t1), Y(0) + 26, { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  s += ligne(X(t2), Y(0) - 26, X(t2), Y(0) + 26, { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  s += etiquette((X(t1) + X(t2)) / 2, Y(0) - 14, 'palier à 0 °C : la glace fond', { taille: 13, couleur: ROUGE });
  s += etiquette(X(t1) + 6, Y(-6) + 4, 'glace seule', { taille: 12, ancre: 'start' });
  s += etiquette(X(t2 + (30 * 4.18) / 2.1 / r) - 12, Y(30), 'eau liquide seule', { taille: 12, ancre: 'end' });
  s += etiquette((X(t1) + X(t2)) / 2, Y(0) + 26, 'glace + eau', { taille: 12, couleur: ATTENUE });
  return enveloppe(620, 330, s);
};

// ───────────────────────── Signaux sonores et lumineux ─────────────────────────

S['echelle-frequences'] = ({ exemples = [], W = 640 } = {}) => {
  const nl = Math.max(1, ...exemples.map((e) => String(e.t).split('\n').length));
  const H = 194 + 16 * nl, g = 30, d = 30;
  const lmin = 0, lmax = 6; // de 1 Hz à 1 MHz (échelle logarithmique)
  const X = (f) => g + ((Math.log10(f) - lmin) / (lmax - lmin)) * (W - g - d);
  const y = 90;
  let s = '';
  s += rect(X(1), y - 22, X(20) - X(1), 44, { fond: '#e9e3f5', bord: 'none', ep: 0 });
  s += rect(X(20), y - 22, X(20000) - X(20), 44, { fond: '#e2f2e8', bord: 'none', ep: 0 });
  s += rect(X(20000), y - 22, X(1e6) - X(20000), 44, { fond: '#fbeaea', bord: 'none', ep: 0 });
  s += texte((X(1) + X(20)) / 2, y + 5, 'infrasons', { taille: 14, gras: true, couleur: VIOLET });
  s += texte((X(20) + X(20000)) / 2, y + 5, 'sons audibles par l\'oreille humaine', { taille: 14, gras: true, couleur: VERT });
  s += texte((X(20000) + X(1e6)) / 2, y + 5, 'ultrasons', { taille: 14, gras: true, couleur: ROUGE });
  s += fleche(g, y + 34, W - d + 14, y + 34, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  for (const [f, t] of [[20, '20 Hz'], [20000, '20 000 Hz = 20 kHz']]) {
    s += ligne(X(f), y - 30, X(f), y + 40, { couleur: ENCRE, epaisseur: 2 });
    s += texte(X(f), y + 58, t, { taille: 13, gras: true });
  }
  s += texte(W - d, y + 58, 'fréquence', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  s += texte(g + 4, y - 34, 'plus grave', { taille: 12, couleur: ATTENUE, ancre: 'start' }) + texte(W - d, y - 34, 'plus aigu', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  exemples.forEach((e) => {
    const xc = e.zone === 'infra' ? (X(1) + X(20)) / 2 : e.zone === 'ultra' ? (X(20000) + X(1e6)) / 2 : (X(20) + X(20000)) / 2 + (e.dx || 0);
    s += texte(xc, y + 82 + (e.rang || 0) * 18, e.t, { taille: 13, couleur: ENCRE });
  });
  s += texte(W / 2, H - 8, 'échelle logarithmique : chaque graduation multiplie la fréquence par 10', { taille: 12, couleur: ATTENUE });
  for (let k = 0; k <= 6; k++) s += ligne(X(10 ** k), y + 30, X(10 ** k), y + 38, { couleur: AXE, epaisseur: 1.4 });
  return enveloppe(W, H, s);
};

S['echelle-db'] = ({ reperes = [], danger = 85, douleur = 120, W = 640, intensites = false } = {}) => {
  const H = intensites ? 250 : 220, g = 40, d = 52;
  const X = (L) => g + (L / 140) * (W - g - d);
  const y = 110;
  let s = '';
  // dégradé par zones
  s += rect(X(0), y - 16, X(danger) - X(0), 32, { fond: '#e2f2e8', bord: 'none', ep: 0 });
  s += rect(X(danger), y - 16, X(douleur) - X(danger), 32, { fond: '#fde3c6', bord: 'none', ep: 0 });
  s += rect(X(douleur), y - 16, X(140) - X(douleur), 32, { fond: '#f6c7c7', bord: 'none', ep: 0 });
  s += rect(X(0), y - 16, X(140) - X(0), 32, { bord: ENCRE, ep: 1.4 });
  for (let L = 0; L <= 140; L += 10) { s += ligne(X(L), y + 16, X(L), y + 22, { couleur: ENCRE, epaisseur: 1.3 }); s += texte(X(L), y + 36, String(L), { taille: 12, couleur: ATTENUE }); }
  s += texte(W - d + 12, y + 36, 'dB', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  s += texte((X(danger) + X(douleur)) / 2, y + 5, 'danger', { taille: 13, gras: true, couleur: ORANGE });
  s += texte((X(douleur) + X(140)) / 2, y + 5, 'douleur', { taille: 13, gras: true, couleur: ROUGE });
  reperes.forEach((r, i) => {
    const up = i % 2 === 0;
    const yy = up ? y - 26 - (r.n || 0) * 0 : y + 50;
    if (up) s += ligne(X(r.L), y - 16, X(r.L), y - 30, { couleur: ATTENUE, epaisseur: 1.2 });
    s += texte(X(r.L), up ? y - 50 : y + 56, r.t, { taille: 12, ancre: r.ancre || 'middle' });
    if (intensites && r.I) s += texte(X(r.L), up ? y - 34 : y + 72, r.I, { taille: 12, couleur: VIOLET, ancre: r.ancre || 'middle' });
  });
  if (intensites) s += texte(W / 2, H - 10, 'en violet : intensité sonore I correspondante (W·m⁻²)', { taille: 12, couleur: VIOLET });
  s += texte(X(danger), y - 70, `seuil de danger : ${danger} dB`, { taille: 12, couleur: ORANGE });
  return enveloppe(W, H, s);
};

S['ombre'] = () => {
  const sx = 70, sy = 140; // source ponctuelle
  const ox = 260, oh1 = 105, oh2 = 175; // objet opaque (de y=105 à 175)
  const ex = 560; // écran
  const proj = (y) => sy + ((y - sy) * (ex - sx)) / (ox - sx);
  let s = '';
  // zone d'ombre derrière l'objet
  s += polygone([[ox + 6, oh1], [ex, proj(oh1)], [ex, proj(oh2)], [ox + 6, oh2]], { couleur: 'none', fond: '#9aa6b2', opacite: 0.35, epaisseur: 0 });
  // faisceau éclairé
  for (const y of [97, oh1, oh2, 183]) s += fleche(sx, sy, ex, proj(y), { couleur: ORANGE, epaisseur: 1.6, pointe: 9 });
  s += `<circle cx="${sx}" cy="${sy}" r="9" fill="#ffd34d" stroke="${ORANGE}" stroke-width="2"/>`;
  s += rect(ox, oh1, 12, oh2 - oh1, { fond: ENCRE, bord: ENCRE, ep: 1 });
  s += ligne(ex, 20, ex, 260, { couleur: ENCRE, epaisseur: 4 });
  s += rect(ex - 2, proj(oh1), 4, proj(oh2) - proj(oh1), { fond: '#3b4652', bord: 'none', ep: 0 });
  s += texte(sx, sy + 32, 'source', { taille: 13 }) + texte(ox + 6, oh2 + 22, 'objet opaque', { taille: 13 });
  s += texte(ex - 8, 18, 'écran', { taille: 13, ancre: 'end' });
  s += texte(ex + 12, (proj(oh1) + proj(oh2)) / 2, 'ombre\nportée', { taille: 13, ancre: 'start' });
  s += texte((ox + ex) / 2 + 20, (proj(oh1) + proj(oh2)) / 2 + 6, 'zone d\'ombre', { taille: 13, couleur: ENCRE });
  s += texte(150, 270, 'rayons lumineux : des droites', { taille: 12, couleur: ORANGE });
  return enveloppe(640, 280, s);
};
{
  const F = 'cinquieme/physique-chimie/mouvement-vitesse';
  pose(F, 'trajectoires', 'trajectoires', '## 2. La trajectoire : la forme du déplacement',
    'Les trois formes de trajectoire : rectiligne (une droite), circulaire (un cercle) et curviligne (une courbe quelconque, ici un ballon lancé).');
  pose(F, 'balle-train', 'balle-train', '## 3. La relativité du mouvement',
    'Une balle lâchée dans un train qui roule : le voyageur la voit tomber tout droit, la personne sur le quai la voit suivre une courbe.');
}
{
  const F = 'cinquieme/physique-chimie/proprietes-matiere';
  pose(F, 'lecture-eprouvette', 'lecture-eprouvette', '### Le volume',
    'Pour lire le volume, l\'œil se place en face de la surface du liquide et on lit la graduation au bas du ménisque.');
  pose(F, 'changements-etat', 'changements-etat', '## 3. Les changements d\'état',
    'Les six changements d\'état entre solide, liquide et gaz, avec leurs noms.');
  pose(F, 'palier-glace', 'palier-glace', '### Le palier de température',
    'Température d\'un glaçon chauffé régulièrement : elle monte, reste bloquée à 0 °C tant que la glace fond (palier), puis remonte.');
}
{
  const F = 'cinquieme/physique-chimie/signaux-sonores-lumineux';
  pose(F, 'domaines-frequences', 'echelle-frequences', '## 4. Infrasons, sons audibles, ultrasons',
    'L\'oreille humaine entend de 20 Hz à 20 000 Hz : en dessous ce sont des infrasons, au-dessus des ultrasons.',
    { exemples: [{ zone: 'infra', t: 'éléphant' }, { zone: 'audible', t: 'voix, musique' }, { zone: 'ultra', t: 'chauve-souris, dauphin' }] });
  pose(F, 'niveaux-sonores', 'echelle-db', '## 5. Le niveau sonore (en décibels)',
    'Échelle des niveaux sonores en décibels, avec les repères de la fiche : au-delà de 85 dB pendant longtemps, l\'oreille est en danger.',
    { reperes: [{ L: 0, t: 'seuil de\nl\'audition', ancre: 'start' }, { L: 30, t: 'chambre calme' }, { L: 60, t: 'conversation' }, { L: 90, t: 'rue très bruyante' }, { L: 120, t: 'concert, avion', ancre: 'end' }] });
  pose(F, 'ombre', 'ombre', '## 7. La propagation rectiligne de la lumière',
    'La lumière se propage en ligne droite : l\'objet opaque arrête les rayons et laisse derrière lui une zone d\'ombre, d\'où l\'ombre portée sur l\'écran.');
}
{
  const F = 'cinquieme/physique-chimie/transformation-chimique';
  pose(F, 'reactifs-produits', 'diagramme', '## 4. Réactifs et produits',
    'Combustion du carbone : les réactifs (carbone et dioxygène) disparaissent, un produit nouveau (le dioxyde de carbone) apparaît.',
    { W: 640, H: 200, boites: [
      { id: 'a', x: 30, y: 60, w: 250, h: 80, t: 'carbone + dioxygène', style: 'bleu', taille: 15 },
      { id: 'b', x: 380, y: 60, w: 230, h: 80, t: 'dioxyde de carbone', style: 'vert', taille: 15 }],
      fleches: [{ de: 'a', a: 'b', t: 'donnent', ly: -10 }],
      textes: [{ x: 155, y: 40, t: 'RÉACTIFS (avant)', gras: true, couleur: BLEU }, { x: 495, y: 40, t: 'PRODUIT (après)', gras: true, couleur: VERT },
        { x: 155, y: 166, t: 'ils disparaissent', couleur: ATTENUE }, { x: 495, y: 166, t: 'il apparaît', couleur: ATTENUE }] });
  pose(F, 'methode-physique-chimique', 'diagramme', '## 5. Méthode : chimique ou physique ?',
    'La question à se poser pour classer une transformation : retrouve-t-on les mêmes espèces chimiques à la fin ?',
    { W: 640, H: 250, boites: [
      { id: 'q', x: 150, y: 20, w: 340, h: 60, t: 'Retrouve-t-on les mêmes\nespèces chimiques à la fin ?', style: 'gris' },
      { id: 'p', x: 30, y: 160, w: 250, h: 66, t: 'transformation PHYSIQUE\n(état ou aspect changé)', style: 'bleu' },
      { id: 'c', x: 360, y: 160, w: 250, h: 66, t: 'transformation CHIMIQUE\n(nouvelles espèces)', style: 'rouge' }],
      fleches: [{ de: 'q', a: 'p', t: 'oui', lx: -18, ly: 0 }, { de: 'q', a: 'c', t: 'non', lx: 18, ly: 0 }] });
}

// ───────────────────────── Énergie : bilans en bandes (proportions exactes) ─────────────────────────

/**
 * Bandes d'énergie : départ E0 ; étapes [{ nom, eta }] ; chaque convertisseur garde eta × E,
 * le reste part en pertes (bande vers le bas). Épaisseurs proportionnelles aux énergies.
 */
S['bandes-energie'] = ({ E0 = 100, unite = 'J', etapes = [], entree = 'énergie reçue', sortie = 'énergie utile', perte = 'pertes', W = 640, H = 290, dec = 0 } = {}) => {
  const n = etapes.length;
  const k = 80 / E0; // px par unité d'énergie
  const yh = 92; // haut des bandes
  const x0 = 150, x1 = W - 190;
  const xs = n === 1 ? [W * 0.42] : etapes.map((_, i) => x0 + (i * (x1 - x0)) / (n - 1));
  const bw = 24;
  let s = '';
  let E = E0;
  const BANDE = '#f5c26b', PERTE = '#e7a3a3';
  s += rect(10, yh, xs[0] - 10, E * k, { fond: BANDE, bord: 'none', ep: 0 });
  s += texte(12, yh - 10, entree, { taille: 13, ancre: 'start', gras: true });
  s += texte((10 + xs[0]) / 2, yh + (E * k) / 2 + 5, `${fr(E0, dec)} ${unite}`, { taille: 13, gras: true });
  etapes.forEach((e, i) => {
    const Eu = E * e.eta, Ep = E - Eu;
    const xa = xs[i], xb = i < n - 1 ? xs[i + 1] : W - 10;
    s += rect(xa + bw, yh, xb - xa - bw, Eu * k, { fond: BANDE, bord: 'none', ep: 0 });
    s += texte((xa + bw + xb) / 2, yh + (Eu * k) / 2 + 5, `${fr(Eu, dec)} ${unite}`, { taille: 13, gras: true });
    if (Ep > 1e-9) {
      const wp = Math.max(Ep * k, 3), yp = yh + Eu * k;
      s += rect(xa + bw, yp, wp, H - 62 - yp, { fond: PERTE, bord: 'none', ep: 0 });
      s += pointe(xa + bw + wp / 2, H - 50, 0, 1, { couleur: '#c26b6b', taille: 12 });
      s += texte(xa + bw + wp / 2, H - 30, `${perte} : ${fr(Ep, dec)} ${unite}`, { taille: 12, couleur: ROUGE });
    }
    s += rect(xa, yh - 10, bw, E * k + 20, { fond: '#e9eef4', bord: ENCRE, ep: 1.6, rx: 4 });
    s += texte(xa + bw / 2, yh - 38, e.nom, { taille: 13, gras: true }) + texte(xa + bw / 2, yh - 20, `η = ${fr(e.eta * 100, 0)} %`, { taille: 12, couleur: ATTENUE });
    E = Eu;
  });
  s += texte(W - 12, yh - 10, sortie, { taille: 13, ancre: 'end', gras: true, couleur: '#9a6a00' });
  return enveloppe(W, H, s);
};

/** Barres empilées horizontales (répartition d'une énergie, d'une masse…). */
S['barre-repartition'] = ({ total, unite = '', parts = [], titre = '', W = 640, H = 170, dec = 0 } = {}) => {
  const g = 30, d = 30, y = 70, h = 40;
  const T = total ?? parts.reduce((a, p) => a + p.v, 0);
  const X = (v) => g + (v / T) * (W - g - d);
  let s = '';
  if (titre) s += texte(W / 2, 30, titre, { taille: 14, gras: true });
  let acc = 0;
  parts.forEach((p, i) => {
    const [fond, bord] = FONDS[p.style || ['bleu', 'orange', 'vert', 'rouge', 'violet'][i % 5]];
    s += rect(X(acc), y, X(acc + p.v) - X(acc), h, { fond, bord, ep: 1.6 });
    const xm = (X(acc) + X(acc + p.v)) / 2;
    const etroit = X(acc + p.v) - X(acc) < 90;
    if (!etroit) s += texte(xm, y + h / 2 + 5, `${fr(p.v, dec)} ${unite}`, { taille: 13, gras: true });
    s += texte(xm, y + h + 22 + (etroit ? 0 : 0), p.t, { taille: 13, couleur: bord, ancre: p.ancre || 'middle' });
    if (etroit) s += texte(xm, y - 8, `${fr(p.v, dec)} ${unite}`, { taille: 12, gras: true, ancre: p.ancre || 'middle' });
    acc += p.v;
  });
  return enveloppe(W, H, s);
};

// ───────────────────────── Mesure et incertitudes ─────────────────────────

S['cibles'] = () => {
  const cas = [
    { t: 'juste et fidèle', cx: 0, cy: 0, sd: 5 },
    { t: 'fidèle mais\npas juste', cx: 26, cy: -20, sd: 5 },
    { t: 'juste mais\npas fidèle', cx: 0, cy: 0, sd: 21 },
    { t: 'ni juste\nni fidèle', cx: 24, cy: 18, sd: 21 },
  ];
  let s = '';
  cas.forEach((c, i) => {
    const X0 = 80 + i * 160, Y0 = 100;
    for (const [r, f] of [[62, '#ffffff'], [46, '#eef3fb'], [30, '#dfe9f8'], [14, '#c6d8f3']]) s += cercle(X0, Y0, r, { couleur: ATTENUE, fond: f, epaisseur: 1.2 });
    s += `<circle cx="${X0}" cy="${Y0}" r="2.5" fill="${ENCRE}"/>`;
    const r = alea(11 + i * 7);
    const gauss = () => { let u = 0; for (let k = 0; k < 6; k++) u += r(); return (u - 3) / 0.7071; };
    const pts = Array.from({ length: 9 }, () => [gauss(), gauss()]);
    const mx = pts.reduce((a, p) => a + p[0], 0) / 9, my = pts.reduce((a, p) => a + p[1], 0) / 9;
    pts.forEach(([px, py]) => { s += `<circle cx="${nb(X0 + c.cx + c.sd * (px - mx))}" cy="${nb(Y0 + c.cy + c.sd * (py - my))}" r="4" fill="${ROUGE}"/>`; });
    s += texte(X0, 190, c.t, { taille: 13, gras: true });
  });
  s += texte(320, 250, 'centre de la cible = valeur vraie ; points rouges = mesures répétées', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 262, s);
};

/** Comparaison d'un résultat à une valeur de référence (axe gradué, intervalle ± 2u). */
S['comparaison-reference'] = ({ mes, u, ref, unite = '', dec = 2, nomMes = 'mesure', nomRef = 'référence', W = 640 } = {}) => {
  const H = 210, g = 40, d = 40;
  const a = mes - 3.2 * u, b = mes + 3.2 * u;
  const lo = Math.min(a, ref - 0.6 * u), hi = Math.max(b, ref + 0.6 * u);
  const X = (v) => g + ((v - lo) / (hi - lo)) * (W - g - d);
  const y = 120;
  let s = '';
  s += rect(X(mes - 2 * u), y - 14, X(mes + 2 * u) - X(mes - 2 * u), 28, { fond: '#e2f2e8', bord: VERT, ep: 1.4 });
  s += rect(X(mes - u), y - 14, X(mes + u) - X(mes - u), 28, { fond: '#c3e6cf', bord: 'none', ep: 0 });
  s += fleche(g - 10, y, W - d + 20, y, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  for (let k = -3; k <= 3; k++) { const v = mes + k * u; s += ligne(X(v), y - 4, X(v), y + 4, { couleur: ENCRE, epaisseur: 1.2 }); }
  s += texte(X(mes - 2 * u), y + 34, fr(mes - 2 * u, dec), { taille: 12, couleur: VERT }) + texte(X(mes + 2 * u), y + 34, fr(mes + 2 * u, dec), { taille: 12, couleur: VERT });
  s += `<circle cx="${nb(X(mes))}" cy="${y}" r="6" fill="${BLEU}"/>`;
  s += texte(X(mes), y - 44, `${nomMes} : ${fr(mes, dec)} ${unite}`, { taille: 13, couleur: BLEU, gras: true });
  s += ligne(X(mes), y - 38, X(mes), y - 8, { couleur: BLEU, epaisseur: 1.4 });
  s += `<polygon points="${nb(X(ref))},${y + 6} ${nb(X(ref) - 7)},${y + 18} ${nb(X(ref) + 7)},${y + 18}" fill="${ROUGE}"/>`;
  s += ligne(X(ref), y - 14, X(ref), y + 14, { couleur: ROUGE, epaisseur: 2.4 });
  s += texte(X(ref), y + 58, `${nomRef} : ${fr(ref, dec)} ${unite}`, { taille: 13, couleur: ROUGE, gras: true });
  const z = Math.abs(mes - ref) / u;
  s += texte(W / 2, 32, `bande verte : de mesure − 2u à mesure + 2u (u = ${fr(u, dec)} ${unite})`, { taille: 12, couleur: VERT });
  s += texte(W / 2, H - 14, `écart = ${fr(z, 1)} u  ${z <= 2 ? '≤ 2 u : résultat compatible' : '> 2 u : écart trop grand'}`, { taille: 13, gras: true });
  return enveloppe(W, H, s);
};

// ───────────────────────── Ondes ─────────────────────────

S['longi-transverse'] = () => {
  let s = '';
  // corde : onde transversale (impulsion)
  const y0 = 80;
  s += texte(320, 28, 'Onde transversale (corde)', { taille: 14, gras: true });
  const f = (x) => y0 - 34 * Math.exp(-(((x - 330) / 40) ** 2));
  s += trace(f, 40, 600, (x) => x, (y) => y, { couleur: BLEU, ep: 3 });
  for (let i = 0; i <= 14; i++) { const x = 40 + i * 40; s += `<circle cx="${x}" cy="${nb(f(x))}" r="3" fill="${ENCRE}"/>`; }
  s += fleche(250, 124, 420, 124, { couleur: ROUGE, epaisseur: 2.2 }) + texte(335, 144, 'propagation', { taille: 13, couleur: ROUGE });
  s += fleche(560, 96, 560, 52, { couleur: VERT, epaisseur: 2.2 }) + fleche(560, 52, 560, 96, { couleur: VERT, epaisseur: 2.2 });
  s += texte(548, 50, 'perturbation\nperpendiculaire', { taille: 12, couleur: VERT, ancre: 'end' });
  // ressort : onde longitudinale
  const y1 = 230;
  s += texte(320, 186, 'Onde longitudinale (ressort, son)', { taille: 14, gras: true });
  // positions des spires : déplacement d'une zone de compression
  const xs = [];
  for (let i = 0; i <= 40; i++) { const x = 40 + i * 13; xs.push(x + 8 * Math.sin((2 * Math.PI * (x - 40)) / 180)); }
  xs.forEach((x) => { s += ellipse(x, y1, 4, 18, { couleur: BLEU, ep: 2 }); });
  s += ligne(40, y1, 562, y1, { couleur: BLEU, epaisseur: 1 });
  for (const x of [130, 310, 490]) s += texte(x, y1 + 36, 'compression', { taille: 12, couleur: ATTENUE });
  s += fleche(250, 284, 420, 284, { couleur: ROUGE, epaisseur: 2.2 }) + texte(335, 302, 'propagation', { taille: 13, couleur: ROUGE });
  s += fleche(500, 202, 560, 202, { couleur: VERT, epaisseur: 2.2 }) + fleche(560, 202, 500, 202, { couleur: VERT, epaisseur: 2.2 });
  s += texte(530, 190, 'perturbation parallèle', { taille: 12, couleur: VERT });
  return enveloppe(640, 312, s);
};

/** Mesure de distance par écho (aller-retour). */
S['echo'] = ({ emetteur = 'émetteur-récepteur', obstacle = 'obstacle', milieu = '', vertical = false, formule = 'd = v × Δt / 2' } = {}) => {
  let s = '';
  if (!vertical) {
    s += rect(40, 90, 70, 60, { fond: '#eef3fb', bord: BLEU, ep: 1.8, rx: 6 });
    s += texte(75, 170, emetteur, { taille: 13 });
    s += rect(560, 40, 24, 170, { fond: '#d8dee6', bord: ENCRE, ep: 1.6 });
    for (let k = 0; k < 8; k++) s += ligne(584, 48 + k * 21, 596, 40 + k * 21, { couleur: ENCRE, epaisseur: 1.2 });
    s += texte(572, 228, obstacle, { taille: 13 });
    s += fleche(116, 105, 554, 105, { couleur: ROUGE, epaisseur: 2.4 }) + texte(335, 96, 'aller', { taille: 13, couleur: ROUGE });
    s += fleche(554, 135, 116, 135, { couleur: VERT, epaisseur: 2.4 }) + texte(335, 154, 'retour (écho)', { taille: 13, couleur: VERT });
    s += cote(110, 200, 560, 200, 'd', { dy: -8, taille: 15 });
    if (milieu) s += texte(335, 60, milieu, { taille: 12, couleur: ATTENUE });
    s += texte(335, 244, `durée mesurée Δt : aller + retour ; ${formule}`, { taille: 13, gras: true });
    return enveloppe(640, 258, s);
  }
  // version verticale (sonar, échographie)
  s += rect(0, 70, 640, 230, { fond: '#e3f0fa', bord: 'none', ep: 0 });
  s += chemin('M 230 70 L 250 40 L 390 40 L 410 70 Z', { couleur: ENCRE, ep: 2, fond: '#ffffff' });
  s += texte(320, 28, emetteur, { taille: 13 });
  const fond = 270;
  s += chemin(`M 0 ${fond} Q 160 ${fond - 12} 320 ${fond} T 640 ${fond} L 640 300 L 0 300 Z`, { couleur: '#8a6a2a', ep: 1.6, fond: '#e8d6ae' });
  s += texte(560, 292, obstacle, { taille: 13 });
  s += fleche(300, 76, 300, fond - 6, { couleur: ROUGE, epaisseur: 2.4 }) + texte(290, 170, 'aller', { taille: 13, couleur: ROUGE, ancre: 'end' });
  s += fleche(340, fond - 6, 340, 76, { couleur: VERT, epaisseur: 2.4 }) + texte(350, 170, 'retour (écho)', { taille: 13, couleur: VERT, ancre: 'start' });
  s += cote(470, 72, 470, fond - 2, 'h', { dx: 14, dy: 4, taille: 15 });
  if (milieu) s += texte(120, 110, milieu, { taille: 12, couleur: ATTENUE });
  s += texte(320, 324, `Δt : durée de l'aller-retour ; ${formule}`, { taille: 13, gras: true });
  return enveloppe(640, 336, s);
};

/** Dégradé arc-en-ciel du visible (400 → 800 nm), id unique par SVG. */
function degradeVisible(id) {
  const stops = [[0, '#7a1fd1'], [0.1, '#3b2ff5'], [0.2, '#1f78ff'], [0.27, '#13b5d6'], [0.37, '#26c24a'], [0.45, '#a6d61c'], [0.47, '#ffe21a'], [0.52, '#ffb21a'], [0.6, '#ff6a1a'], [0.7, '#f01818'], [1, '#7a0a0a']];
  return `<defs><linearGradient id="${id}" x1="0" x2="1" y1="0" y2="0">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient></defs>`;
}

S['spectre-em'] = ({ bornes = null, W = 660 } = {}) => {
  const H = bornes ? 290 : 266, g = 20, d = 20;
  const lmin = -13, lmax = 3; // log10(λ en m), γ à gauche
  const X = (l) => g + ((l - lmin) / (lmax - lmin)) * (W - g - d);
  const L = Math.log10;
  const dom = [
    ['γ', lmin, -11, '#d9c7ee'], ['X', -11, -8, '#e6d6f3'], ['UV', -8, L(4e-7), '#efe3f7'], ['', L(4e-7), L(8e-7), 'url(#vis)'],
    ['infrarouge', L(8e-7), -3, '#fde0d6'], ['micro-ondes', -3, 0, '#fdecd2'], ['ondes radio', 0, lmax, '#fdf4d8'],
  ];
  const y = 70, h = 46;
  let s = degradeVisible('vis');
  dom.forEach(([t, a, b, c]) => {
    s += rect(X(a), y, X(b) - X(a), h, { fond: c, bord: ENCRE, ep: 1 });
    if (t) s += texte((X(a) + X(b)) / 2, y + h / 2 + 5, t, { taille: t.length > 3 ? 13 : 15, gras: true });
  });
  const fy = y + h + (bornes ? 44 : 22);
  // zoom sur le visible
  const zx0 = 190, zx1 = 470, zy = fy + 52;
  s += polyligne([[X(L(4e-7)), y + h], [zx0, zy]], { couleur: ATTENUE, ep: 1.2, pointilles: true }) + polyligne([[X(L(8e-7)), y + h], [zx1, zy]], { couleur: ATTENUE, ep: 1.2, pointilles: true });
  s += rect(zx0, zy, zx1 - zx0, 30, { fond: 'url(#vis)', bord: ENCRE, ep: 1 });
  s += etiquette((zx0 + zx1) / 2, zy - 8, 'lumière visible', { taille: 13, gras: true });
  s += texte(zx0, zy + 48, '400 nm (violet)', { taille: 12 }) + texte(zx1, zy + 48, '800 nm (rouge)', { taille: 12 });
  // axes
  s += fleche(g, y - 22, W - d, y - 22, { couleur: ENCRE, epaisseur: 1.6, pointe: 9 });
  s += texte(W - d, y - 30, 'longueur d\'onde λ croissante', { taille: 12, ancre: 'end' });
  s += fleche(W - d, fy, g, fy, { couleur: ENCRE, epaisseur: 1.6, pointe: 9 });
  s += etiquette(W - d, fy + 18, 'fréquence (et énergie) croissante', { taille: 12, ancre: 'end' });
  if (bornes) {
    const pos = [-11, -8, L(4e-7), L(8e-7), -3, 0];
    pos.forEach((l, i) => { if (bornes[i]) { s += ligne(X(l), y + h, X(l), y + h + 8, { couleur: ENCRE, epaisseur: 1.4 }); s += texte(X(l) + (i === 2 ? -3 : i === 3 ? 3 : 0), y + h + 24, bornes[i], { taille: 12, couleur: VIOLET, ancre: i === 2 ? 'end' : i === 3 ? 'start' : 'middle' }); } });
  }
  return enveloppe(W, H, s);
};

// ───────────────────────── Rayonnement thermique (loi de Planck, loi de Wien) ─────────────────────────

S['planck'] = ({ temps = [{ T: 5800, t: '5 800 K (Soleil)' }, { T: 4500, t: '4 500 K' }, { T: 3500, t: '3 500 K' }], xmax = 2.5 } = {}) => {
  const h = 6.626e-34, c = 2.998e8, k = 1.381e-23;
  const B = (lum, T) => { const l = lum * 1e-6; return (2 * h * c * c) / l ** 5 / (Math.exp((h * c) / (l * k * T)) - 1); };
  const Tm = Math.max(...temps.map((o) => o.T));
  const Bmax = B(2.898e-3 / Tm * 1e6, Tm);
  const W = 620, H = 340;
  const { svg, X, Y } = graphe({ W, H, xmin: 0, xmax, ymin: 0, ymax: 1.1, pasX: 0.5, pasY: 0.25, gradY: false, nomX: 'longueur d\'onde λ (µm)', nomY: 'intensité émise', g: 40 });
  let s = degradeVisible('vis2') + svg;
  s += rect(X(0.4), Y(1.1), X(0.8) - X(0.4), Y(0) - Y(1.1), { fond: 'url(#vis2)', bord: 'none', ep: 0, opacite: 0.22 });
  s += texte((X(0.4) + X(0.8)) / 2, Y(1.1) - 4, 'visible', { taille: 12, couleur: ATTENUE });
  const couleurs = [ROUGE, ORANGE, VIOLET, BLEU];
  temps.forEach((o, i) => {
    const col = couleurs[i % 4];
    s += trace((x) => B(x, o.T) / Bmax, 0.05, xmax, X, Y, { couleur: col, ep: 2.6 });
    const lm = (2.898e-3 / o.T) * 1e6;
    const ym = B(lm, o.T) / Bmax;
    s += ligne(X(lm), Y(ym), X(lm), Y(0), { couleur: col, epaisseur: 1.2, pointilles: true });
    s += etiquette(X(lm) + 10, Y(ym) - 8, `${o.t} : λmax ≈ ${fr(Math.round(lm * 1000), 0)} nm`, { taille: 13, couleur: col, ancre: 'start', gras: true });
  });
  s += texte(W - 30, 70, 'λmax × T = 2,9 × 10⁻³ m·K', { taille: 13, ancre: 'end', gras: true });
  s += texte(W - 30, 90, 'plus chaud → maximum à plus courte λ', { taille: 12, ancre: 'end', couleur: ATTENUE });
  return enveloppe(W, H, s);
};

// ───────────────────────── Sécurité routière : distances d'arrêt ─────────────────────────

S['distance-arret'] = ({ cas = [{ v: '50 km/h', dr: 14, df: 12 }, { v: '100 km/h', dr: 28, df: 48 }] } = {}) => {
  const W = 640, H = 230, g = 100, d = 40;
  const max = Math.max(...cas.map((c) => c.dr + c.df));
  const X = (m) => g + (m / (Math.ceil(max / 10) * 10)) * (W - g - d);
  let s = '';
  cas.forEach((c, i) => {
    const y = 50 + i * 70;
    s += texte(g - 10, y + 22, c.v, { taille: 14, gras: true, ancre: 'end' });
    s += rect(X(0), y, X(c.dr) - X(0), 32, { fond: '#fdf0e3', bord: ORANGE, ep: 1.6 });
    s += rect(X(c.dr), y, X(c.dr + c.df) - X(c.dr), 32, { fond: '#fbeaea', bord: ROUGE, ep: 1.6 });
    s += texte((X(0) + X(c.dr)) / 2, y + 21, `${c.dr} m`, { taille: 13, couleur: ORANGE, gras: true });
    s += texte((X(c.dr) + X(c.dr + c.df)) / 2, y + 21, `${c.df} m`, { taille: 13, couleur: ROUGE, gras: true });
    s += texte(X(c.dr + c.df) + 8, y + 21, `${c.dr + c.df} m`, { taille: 13, ancre: 'start', gras: true });
  });
  const ya = 50 + cas.length * 70;
  s += fleche(X(0), ya, W - d + 18, ya, { couleur: AXE, epaisseur: 1.6, pointe: 9 });
  for (let m = 0; m <= Math.ceil(max / 10) * 10; m += 10) { s += ligne(X(m), ya - 4, X(m), ya + 4, { couleur: AXE }); s += texte(X(m), ya + 18, String(m), { taille: 12, couleur: ATTENUE }); }
  s += texte(W - 12, ya + 34, 'distance (m)', { taille: 12, ancre: 'end', couleur: ATTENUE });
  s += rect(110, 18, 14, 14, { fond: '#fdf0e3', bord: ORANGE, ep: 1.4 }) + texte(130, 30, 'distance de réaction', { taille: 13, ancre: 'start' });
  s += rect(320, 18, 14, 14, { fond: '#fbeaea', bord: ROUGE, ep: 1.4 }) + texte(340, 30, 'distance de freinage', { taille: 13, ancre: 'start' });
  return enveloppe(W, H, s);
};

// ───────────────────────── Tension sinusoïdale ─────────────────────────

S['sinus-secteur'] = ({ Ueff = 230, f = 50 } = {}) => {
  const Um = Ueff * Math.SQRT2, T = 1000 / f;
  const { svg, X, Y } = graphe({ W: 640, H: 340, xmin: 0, xmax: 2 * T, ymin: -400, ymax: 400, pasX: 5, pasY: 100, nomX: 't (ms)', nomY: 'u (V)', g: 64, b: 46, h: 30 });
  let s = svg;
  s += ligne(X(0), Y(0), X(2 * T), Y(0), { couleur: ENCRE, epaisseur: 1.4 });
  s += trace((t) => Um * Math.sin((2 * Math.PI * t) / T), 0, 2 * T, X, Y, { couleur: BLEU, ep: 3 });
  s += ligne(X(0), Y(Um), X(2 * T), Y(Um), { couleur: ROUGE, epaisseur: 1.3, pointilles: true });
  s += ligne(X(0), Y(-Um), X(2 * T), Y(-Um), { couleur: ROUGE, epaisseur: 1.3, pointilles: true });
  s += ligne(X(0), Y(Ueff), X(2 * T), Y(Ueff), { couleur: VERT, epaisseur: 1.6, pointilles: true });
  s += etiquette(X(2 * T) - 4, Y(Um) - 6, `Umax ≈ ${fr(Um, 0)} V`, { taille: 13, couleur: ROUGE, ancre: 'end' });
  s += etiquette(X(2 * T) - 4, Y(-Um) + 18, `Umin ≈ −${fr(Um, 0)} V`, { taille: 13, couleur: ROUGE, ancre: 'end' });
  s += etiquette(X(T * 0.62), Y(Ueff) + 18, `valeur efficace U = ${Ueff} V`, { taille: 13, couleur: VERT, ancre: 'start' });
  s += cote(X(T * 0.25), Y(Um) - 14, X(T * 1.25), Y(Um) - 14, `T = ${fr(T, 0)} ms`, { taille: 13, dy: -6 });
  return enveloppe(640, 340, s);
};

// ───────────────────────── Échelles graduées ─────────────────────────

S['echelle-courant'] = () => {
  const W = 640, H = 230, g = 30, d = 30;
  const X = (mA) => g + ((Math.log10(mA) + 0.5) / 3) * (W - g - d); // de ≈ 0,3 mA à ≈ 300 mA
  const y = 70;
  let s = '';
  const zones = [[0.32, 1, '#eef3fb'], [1, 10, '#fdf6d8'], [10, 30, '#fde3c6'], [30, 100, '#f8d0b8'], [100, 316, '#f2b4b4']];
  zones.forEach(([a, b, c]) => { s += rect(X(a), y, X(b) - X(a), 30, { fond: c, bord: 'none', ep: 0 }); });
  s += rect(X(0.32), y, X(316) - X(0.32), 30, { bord: ENCRE, ep: 1.2 });
  const rep = [[1, '1 mA', 'perception\n(picotement)'], [10, '10 mA', 'tétanisation :\non ne lâche plus'], [30, '30 mA', 'asphyxie\npossible'], [100, '100 mA', 'fibrillation\ndu cœur']];
  rep.forEach(([v, t, e]) => {
    s += ligne(X(v), y - 8, X(v), y + 38, { couleur: ENCRE, epaisseur: 2 });
    s += texte(X(v), y - 14, t, { taille: 13, gras: true });
    s += texte(X(v), y + 60, e, { taille: 12 });
  });
  s += texte(X(30), 190, '30 mA : seuil de coupure du disjoncteur différentiel', { taille: 12, couleur: ROUGE });
  s += texte(W - d, 214, 'intensité traversant le corps (échelle logarithmique)', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  return enveloppe(W, H, s);
};

S['echelle-ph'] = ({ exemples = [], concentrations = false, bbt = false, W = 660 } = {}) => {
  const H = 150 + (concentrations ? 40 : 0) + (bbt ? 44 : 0) + (exemples.length ? 30 : 0);
  const g = 30, d = 30;
  const X = (p) => g + (p / 14) * (W - g - d);
  const y = 70;
  let s = `<defs><linearGradient id="ph" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#e03131"/><stop offset="0.25" stop-color="#f59f00"/><stop offset="0.5" stop-color="#40c057"/><stop offset="0.75" stop-color="#228be6"/><stop offset="1" stop-color="#7048e8"/></linearGradient></defs>`;
  s += rect(X(0), y, X(14) - X(0), 26, { fond: 'url(#ph)', bord: ENCRE, ep: 1.2, opacite: 0.8 });
  for (let p = 0; p <= 14; p++) { s += ligne(X(p), y + 26, X(p), y + 32, { couleur: ENCRE, epaisseur: 1.3 }); s += texte(X(p), y + 46, String(p), { taille: 13 }); }
  s += ligne(X(7), y - 8, X(7), y + 34, { couleur: ENCRE, epaisseur: 2.4 });
  s += texte(X(3.5), y - 12, 'ACIDE', { taille: 15, gras: true, couleur: ROUGE }) + texte(X(7), y - 12, 'neutre', { taille: 13, gras: true }) + texte(X(10.5), y - 12, 'BASIQUE', { taille: 15, gras: true, couleur: BLEU });
  s += fleche(X(6.6), y - 34, X(0.4), y - 34, { couleur: ROUGE, epaisseur: 1.6, pointe: 8 }) + texte(X(3.5), y - 40, 'de plus en plus acide', { taille: 12, couleur: ROUGE });
  s += fleche(X(7.4), y - 34, X(13.6), y - 34, { couleur: BLEU, epaisseur: 1.6, pointe: 8 }) + texte(X(10.5), y - 40, 'de plus en plus basique', { taille: 12, couleur: BLEU });
  let yy = y + 64;
  if (exemples.length) {
    exemples.forEach((e, i) => {
      const lev = e.rang || 0;
      s += `<polygon points="${nb(X(e.pH))},${y + 52 + 2} ${nb(X(e.pH) - 5)},${y + 60} ${nb(X(e.pH) + 5)},${y + 60}" fill="${ENCRE}"/>`;
      s += texte(X(e.pH), y + 76 + lev * 17, e.t, { taille: 12, ancre: e.ancre || 'middle' });
    });
    yy += 40;
  }
  if (concentrations) {
    s += texte(g, yy + 6, '[H₃O⁺] (mol/L) :', { taille: 12, ancre: 'start', couleur: VIOLET });
    for (const p of [1, 3, 5, 7, 9, 11, 13]) s += texte(X(p), yy + 26, `10⁻${['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', '¹⁰', '¹¹', '¹²', '¹³', '¹⁴'][p]}`.replace('⁻⁰', '⁰'), { taille: 13, couleur: VIOLET });
    yy += 40;
  }
  if (bbt) {
    s += texte(g, yy + 6, 'bleu de bromothymol (BBT) :', { taille: 12, ancre: 'start' });
    const seg = [[0, 6, '#f2d230', 'jaune'], [6, 7.6, '#59b85a', 'vert'], [7.6, 14, '#2f6fd6', 'bleu']];
    seg.forEach(([a, b, c, t]) => { s += rect(X(a), yy + 14, X(b) - X(a), 20, { fond: c, bord: ENCRE, ep: 1 }); s += texte((X(a) + X(b)) / 2, yy + 29, t, { taille: 12, gras: true, couleur: t === 'jaune' ? ENCRE : PAPIER }); });
    yy += 44;
  }
  return enveloppe(W, H, s);
};

S['exposition-bruit'] = () => {
  const data = [[85, 8], [88, 4], [91, 2], [94, 1]];
  const { svg, X, Y } = graphe({ W: 600, H: 320, xmin: 0, xmax: 4, ymin: 0, ymax: 9, pasX: 1, pasY: 1, gradX: false, nomY: 'durée d\'exposition tolérable (h)', nomX: 'niveau sonore', grille: true, g: 60 });
  let s = svg;
  data.forEach(([L, h], i) => {
    const x0 = X(i + 0.2), x1 = X(i + 0.8);
    s += rect(x0, Y(h), x1 - x0, Y(0) - Y(h), { fond: '#fde3c6', bord: ORANGE, ep: 1.6 });
    s += texte((x0 + x1) / 2, Y(h) - 8, `${h} h`, { taille: 14, gras: true });
    s += texte((x0 + x1) / 2, Y(0) + 20, `${L} dB`, { taille: 13, gras: true });
  });
  s += texte(X(2.6), Y(7.5), '+ 3 dB  →  durée divisée par 2', { taille: 14, couleur: ROUGE, gras: true });
  return enveloppe(600, 320, s);
};

// ───────────────────────── Optique géométrique ─────────────────────────

/** Symbole de lentille mince (convergente : pointes vers l'extérieur ; divergente : vers l'intérieur). */
function lentille(x, yAxe, demiH, { type = 'conv', couleur = ENCRE, nom = '' } = {}) {
  let s = ligne(x, yAxe - demiH, x, yAxe + demiH, { couleur, epaisseur: 2.6 });
  if (type === 'conv') {
    s += pointe(x, yAxe - demiH - 2, 0, -1, { couleur, taille: 12 }) + pointe(x, yAxe + demiH + 2, 0, 1, { couleur, taille: 12 });
  } else {
    s += `<polyline points="${x - 7},${yAxe - demiH - 9} ${x},${yAxe - demiH} ${x + 7},${yAxe - demiH - 9}" fill="none" stroke="${couleur}" stroke-width="2.4"/>`;
    s += `<polyline points="${x - 7},${yAxe + demiH + 9} ${x},${yAxe + demiH} ${x + 7},${yAxe + demiH + 9}" fill="none" stroke="${couleur}" stroke-width="2.4"/>`;
  }
  if (nom) s += texte(x, yAxe - demiH - 18, nom, { taille: 13 });
  return s;
}

/** Prolonge la demi-droite (x0,y0)->(x1,y1) jusqu'au bord du cadre. */
function jusquAuBord(x0, y0, x1, y1, W, H, m = 6) {
  const dx = x1 - x0, dy = y1 - y0;
  let t = Infinity;
  if (dx > 0) t = Math.min(t, (W - m - x0) / dx); else if (dx < 0) t = Math.min(t, (m - x0) / dx);
  if (dy > 0) t = Math.min(t, (H - m - y0) / dy); else if (dy < 0) t = Math.min(t, (m - y0) / dy);
  return [x0 + dx * t, y0 + dy * t];
}

/**
 * Construction de l'image d'un objet AB par une lentille mince convergente.
 * Unités en pixels : f (distance focale > 0), oa (= OA algébrique, < 0), ab (hauteur, > 0).
 * Le calcul de A'B' suit la relation de conjugaison : 1/OA' − 1/OA = 1/f'.
 */
function construction({ W = 640, H = 300, xO = 320, yA = 160, f = 100, oa = -250, ab = 60, rayons = ['par', 'centre', 'foyer'], echelle = null, cotes = true, demiL = 110, extra = '' } = {}) {
  const oa2 = 1 / (1 / f + 1 / oa);
  const g = oa2 / oa;
  const ab2 = g * ab;
  const xA = xO + oa, xA2 = xO + oa2;
  const B = [xA, yA - ab], B2 = [xA2, yA - ab2];
  const virtuelle = oa2 < 0;
  let s = ligne(6, yA, W - 6, yA, { couleur: ATTENUE, epaisseur: 1.2 });
  s += lentille(xO, yA, demiL);
  const marque = (x, t) => ligne(x, yA - 5, x, yA + 5, { couleur: ENCRE, epaisseur: 2 }) + texte(x, yA + 22, t, { taille: 14 });
  s += marque(xO - f, 'F') + marque(xO + f, 'F′') + texte(xO + 10, yA + 20, 'O', { taille: 14, ancre: 'start' });
  const R = ORANGE;
  const seg = (p, q, opt = {}) => ligne(p[0], p[1], q[0], q[1], { couleur: R, epaisseur: 1.8, ...opt });
  const flecheMilieu = (p, q) => { const m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; return pointe(m[0] + (q[0] - p[0]) * 0.02, m[1] + (q[1] - p[1]) * 0.02, q[0] - p[0], q[1] - p[1], { couleur: R, taille: 9 }); };
  for (const r of rayons) {
    let I, dir;
    if (r === 'par') { I = [xO, B[1]]; dir = [f, yA - B[1]]; }
    else if (r === 'centre') { I = [xO, yA]; dir = [xO - B[0], yA - B[1]]; I = null; }
    else { // passe par F (ou semble venir de F)
      const k = (xO - B[0]) / (B[0] - (xO - f));
      I = [xO, B[1] + (B[1] - yA) * k]; dir = [1, 0];
    }
    if (r === 'centre') {
      const fin = jusquAuBord(B[0], B[1], xO, yA, W, H);
      s += seg(B, fin) + flecheMilieu(B, [xO, yA]);
      if (virtuelle) s += seg([xO, yA], B2, { pointilles: true, epaisseur: 1.3 });
      continue;
    }
    if (Math.abs(I[1] - yA) > demiL + 4) continue; // rayon hors de la lentille
    s += seg(B, I) + flecheMilieu(B, I);
    const fin = jusquAuBord(I[0], I[1], I[0] + dir[0], I[1] + dir[1], W, H);
    s += seg(I, fin) + flecheMilieu(I, fin);
    if (virtuelle) s += seg(I, B2, { pointilles: true, epaisseur: 1.3 });
  }
  s += fleche(xA, yA, B[0], B[1], { couleur: BLEU, epaisseur: 3, pointe: 11 }) + texte(xA - 4, yA + 22, 'A', { taille: 14, couleur: BLEU }) + texte(B[0] - 12, B[1] - 4, 'B', { taille: 14, couleur: BLEU });
  if (Number.isFinite(oa2) && Math.abs(xA2) < 5 * W) {
    s += fleche(xA2, yA, B2[0], B2[1], { couleur: ROUGE, epaisseur: 3, pointe: 11, pointilles: virtuelle });
    s += texte(xA2 + (virtuelle ? -10 : 8), yA + (ab2 > 0 ? 22 : -10), 'A′', { taille: 14, couleur: ROUGE }) + texte(B2[0] + 12, B2[1] + (ab2 > 0 ? -4 : 16), 'B′', { taille: 14, couleur: ROUGE });
  }
  if (cotes && echelle) {
    // cotes en unités réelles (echelle = px par unité, unite = 'cm')
    const u = echelle.u, unit = echelle.unite;
    s += etiquette(W / 2, 22, `f′ = ${fr(f / u, 1)} ${unit} ; OA = ${fr(oa / u, 1)} ${unit} → OA′ = ${fr(oa2 / u, 1)} ${unit} ; γ = ${fr(g, 2)}`, { taille: 13, gras: true });
  }
  return { svg: s + extra, oa2, g };
}

S['lentille-image'] = (p) => {
  const { svg } = construction(p);
  return enveloppe(p.W || 640, p.H || 300, svg + (p.legendeHaut ? texte((p.W || 640) / 2, 24, p.legendeHaut, { taille: 13, couleur: ATTENUE }) : ''));
};

/** Faisceau parallèle traversant une lentille convergente puis divergente. */
S['lentilles-conv-div'] = () => {
  let s = '';
  const panneau = (ox, type) => {
    const yA = 140, xO = ox + 150, f = 90;
    let t = ligne(ox + 10, yA, ox + 300, yA, { couleur: ATTENUE, epaisseur: 1.2 }) + lentille(xO, yA, 80, { type });
    for (const h of [-55, -28, 28, 55]) {
      t += fleche(ox + 20, yA + h, xO - 30, yA + h, { couleur: ORANGE, epaisseur: 1.8, pointe: 8 }) + ligne(xO - 32, yA + h, xO, yA + h, { couleur: ORANGE, epaisseur: 1.8 });
      if (type === 'conv') {
        const fin = jusquAuBord(xO, yA + h, xO + f, yA, ox + 300, 244);
        t += ligne(xO, yA + h, fin[0], fin[1], { couleur: ORANGE, epaisseur: 1.8 });
      } else {
        // semble venir de F′ situé avant la lentille
        const fin = jusquAuBord(xO, yA + h, xO + f, yA + 2 * h, ox + 300, 244);
        t += ligne(xO, yA + h, fin[0], fin[1], { couleur: ORANGE, epaisseur: 1.8 });
        t += ligne(xO - f, yA, xO, yA + h, { couleur: ORANGE, epaisseur: 1.1, pointilles: true });
      }
    }
    const xF2 = type === 'conv' ? xO + f : xO - f;
    t += ligne(xF2, yA - 5, xF2, yA + 5, { couleur: ENCRE, epaisseur: 2 }) + texte(xF2, yA + 24, 'F′', { taille: 14 });
    t += texte(ox + 155, 30, type === 'conv' ? 'Lentille convergente' : 'Lentille divergente', { taille: 15, gras: true });
    t += texte(ox + 155, 262, type === 'conv' ? 'les rayons convergent en F′' : 'les rayons s\'écartent (semblent venir de F′)', { taille: 13, couleur: ATTENUE });
    return t;
  };
  s += panneau(0, 'conv') + panneau(330, 'div');
  return enveloppe(660, 280, s);
};

/** Œil en coupe simplifiée (schéma). */
S['oeil-coupe'] = () => {
  const cx = 360, cy = 150, R = 105;
  let s = '';
  s += cercle(cx, cy, R, { couleur: ENCRE, fond: '#fbfbf8', epaisseur: 2.4 });
  // rétine (arc arrière)
  const arc = (r, a0, a1) => `M ${nb(cx + r * Math.cos(a0))} ${nb(cy + r * Math.sin(a0))} A ${r} ${r} 0 0 1 ${nb(cx + r * Math.cos(a1))} ${nb(cy + r * Math.sin(a1))}`;
  s += chemin(arc(R - 5, -Math.PI * 0.38, Math.PI * 0.38), { couleur: ROUGE, ep: 4 });
  // cornée (bombement avant)
  s += chemin(`M ${nb(cx - R * Math.cos(0.5))} ${nb(cy - R * Math.sin(0.5))} Q ${cx - R - 34} ${cy} ${nb(cx - R * Math.cos(0.5))} ${nb(cy + R * Math.sin(0.5))}`, { couleur: BLEU, ep: 2.4, fond: '#e8f2fc' });
  // iris et pupille
  s += ligne(cx - R + 14, cy - 50, cx - R + 14, cy - 15, { couleur: VIOLET, epaisseur: 5 }) + ligne(cx - R + 14, cy + 15, cx - R + 14, cy + 50, { couleur: VIOLET, epaisseur: 5 });
  // cristallin
  s += ellipse(cx - R + 38, cy, 13, 34, { couleur: VERT, fond: '#dff2e6', ep: 2.2 });
  // nerf optique
  s += chemin(`M ${cx + R - 6} ${cy - 12} L ${cx + R + 70} ${cy - 18} M ${cx + R - 6} ${cy + 12} L ${cx + R + 70} ${cy + 18}`, { couleur: ORANGE, ep: 2.4 });
  // rayons venant d'un point lointain situé en haut à gauche : ils passent par la pupille et convergent sous l'axe, sur la rétine
  const yI = cy + 34, xI = cx + Math.sqrt((R - 5) ** 2 - 34 * 34);
  for (const hh of [-11, 0, 11]) {
    const E = [cx - R + 38, cy + hh];
    s += ligne(E[0] - 260, E[1] - 78, E[0], E[1], { couleur: '#e0a030', epaisseur: 1.5 });
    s += ligne(E[0], E[1], xI, yI, { couleur: '#e0a030', epaisseur: 1.5 });
  }
  s += `<circle cx="${nb(xI)}" cy="${yI}" r="4" fill="${ROUGE}"/>`;
  const etq = (x, y, x2, y2, t, c, an = 'middle') => ligne(x, y, x2, y2, { couleur: c, epaisseur: 1.2 }) + texte(x, y + (y < y2 ? -6 : 16), t, { taille: 13, couleur: c, ancre: an });
  s += etq(170, 40, cx - R - 14, cy - 28, 'cornée', BLEU);
  s += etq(260, 30, cx - R + 14, cy - 44, 'iris (pupille au centre)', VIOLET);
  s += etq(250, 280, cx - R + 38, cy + 30, 'cristallin (lentille convergente)', VERT);
  s += etq(520, 40, cx + R - 20, cy - 60, 'rétine', ROUGE);
  s += etq(560, 260, cx + R + 50, cy + 16, 'nerf optique → cerveau', ORANGE);
  s += texte(20, cy - 104, 'lumière venant\nde l\'objet', { taille: 12, couleur: '#b07a10', ancre: 'start' });
  return enveloppe(660, 300, s);
};

/** Défauts de l'œil : œil réduit (lentille + rétine), objet à l'infini. */
S['defauts-oeil'] = () => {
  let s = '';
  const ligneOeil = (oy, titre, dx, correction) => {
    const xL = 220, xR = 400, yA = oy;
    let t = ligne(40, yA, 620, yA, { couleur: GRILLE, epaisseur: 1 });
    t += lentille(xL, yA, 46) + ligne(xR, yA - 52, xR, yA + 52, { couleur: ROUGE, epaisseur: 4 });
    const xf = xR + dx; // point de convergence
    for (const h of [-34, 34]) {
      t += fleche(60, yA + h, xL - 40, yA + h, { couleur: ORANGE, epaisseur: 1.6, pointe: 8 }) + ligne(xL - 42, yA + h, xL, yA + h, { couleur: ORANGE, epaisseur: 1.6 });
      const fin = dx < 0 ? [xR, yA + (h * (xR - xf)) / (xL - xf)] : [xR, yA + (h * (xf - xR)) / (xf - xL)];
      t += ligne(xL, yA + h, Math.min(xf, xR), dx < 0 ? yA : fin[1], { couleur: ORANGE, epaisseur: 1.6 });
      if (dx < 0) t += ligne(xf, yA, xR, fin[1], { couleur: ORANGE, epaisseur: 1.6 });
      else t += ligne(xR, fin[1], xf, yA, { couleur: ORANGE, epaisseur: 1.2, pointilles: true });
    }
    t += `<circle cx="${xf}" cy="${yA}" r="4" fill="${ROUGE}"/>`;
    t += texte(40, oy - 56, titre, { taille: 14, gras: true, ancre: 'start' });
    t += texte(xR + 14, yA - 40, 'rétine', { taille: 12, couleur: ROUGE, ancre: 'start' });
    t += texte(470, oy + 6, correction, { taille: 13, ancre: 'start' });
    return t;
  };
  s += ligneOeil(80, 'Œil myope : image AVANT la rétine', -60, 'corrigé par un\nverre divergent');
  s += ligneOeil(230, 'Œil hypermétrope : image DERRIÈRE la rétine', 60, 'corrigé par un\nverre convergent');
  s += texte(330, 312, 'objet très éloigné : rayons parallèles ; flou dans les deux cas', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 322, s);
};

/** Chambre noire (sténopé) : image renversée, taille par Thalès. */
S['stenope'] = () => {
  const xo = 80, xt = 360, xe = 520, yA = 170;
  const hB = 90, hC = -40; // haut et bas de l'objet (ordonnées relatives à yA, vers le haut)
  const proj = (h) => yA + (h * (xe - xt)) / (xt - xo); // y écran d'un point d'objet à la hauteur h (y écran = yA + h * d'/d)
  let s = '';
  s += rect(xt, 60, xe - xt, 220, { fond: '#2b3440', bord: ENCRE, ep: 2, opacite: 0.12 });
  s += rect(xt - 3, 60, 6, yA - 3 - 60, { fond: ENCRE, bord: ENCRE, ep: 1 }) + rect(xt - 3, yA + 3, 6, 280 - yA - 3, { fond: ENCRE, bord: ENCRE, ep: 1 });
  s += ligne(xe, 60, xe, 280, { couleur: ENCRE, epaisseur: 4 });
  // objet : une bougie stylisée (flèche)
  s += fleche(xo, yA - hC, xo, yA - hB, { couleur: BLEU, epaisseur: 4, pointe: 14 });
  s += texte(xo - 14, yA - hB, 'B', { taille: 14, couleur: BLEU }) + texte(xo - 14, yA - hC + 14, 'A', { taille: 14, couleur: BLEU });
  // rayons par le trou
  for (const [h, c] of [[hB, ORANGE], [hC, '#b07a10']]) {
    const y1 = yA - h, y2 = proj(h);
    s += ligne(xo, y1, xe, y2, { couleur: c, epaisseur: 1.8 });
  }
  const yb2 = proj(hB), ya2 = proj(hC);
  s += fleche(xe - 6, ya2, xe - 6, yb2, { couleur: ROUGE, epaisseur: 4, pointe: 12 });
  s += texte(xe + 14, yb2 + 4, 'B′', { taille: 14, couleur: ROUGE, ancre: 'start' }) + texte(xe + 14, ya2 + 4, 'A′', { taille: 14, couleur: ROUGE, ancre: 'start' });
  s += texte(xt, 50, 'petit trou (sténopé)', { taille: 13, ancre: 'end' });
  s += texte(xe + 12, 36, 'écran :', { taille: 13, ancre: 'start' }) + texte(xe + 12, 54, 'image réelle,', { taille: 13, ancre: 'start' }) + texte(xe + 12, 72, 'renversée', { taille: 13, ancre: 'start' });
  s += cote(xo, 304, xt, 304, 'd', { taille: 14 }) + cote(xt, 304, xe, 304, 'd′', { taille: 14 });
  return enveloppe(640, 320, s);
};

/** Modèle de l'appareil photo : diaphragme + objectif (lentille) + capteur. */
S['appareil-photo'] = () => {
  const xO = 300, yA = 150, f = 110, oa = -350;
  const oa2 = 1 / (1 / f + 1 / oa);
  const xC = xO + oa2; // le capteur est placé là où se forme l'image nette
  let s = rect(xC - 3, 60, 8, 180, { fond: '#9aa6b2', bord: ENCRE, ep: 1, opacite: 0.6 });
  const { svg } = construction({ W: 660, H: 300, xO, yA, f, oa, ab: 40, rayons: ['par', 'centre', 'foyer'], demiL: 100 });
  s += svg;
  s += texte(xC + 12, 76, 'capteur', { taille: 13, ancre: 'start' });
  s += ligne(xO - 14, yA - 100, xO - 14, yA - 70, { couleur: VIOLET, epaisseur: 5 }) + ligne(xO - 14, yA + 70, xO - 14, yA + 100, { couleur: VIOLET, epaisseur: 5 });
  s += texte(xO - 22, yA - 104, 'diaphragme', { taille: 13, couleur: VIOLET, ancre: 'end' });
  s += texte(xO + 20, 286, 'objectif (lentille convergente)', { taille: 13, ancre: 'start' });
  s += texte(40, 30, 'objet', { taille: 13, couleur: BLEU, ancre: 'start' });
  return enveloppe(660, 300, s);
};

S['diaphragmes'] = () => {
  let s = '';
  const disque2 = (cx, r, t1, t2) => {
    let q = cercle(cx, 120, 80, { couleur: ENCRE, fond: '#2b3440', epaisseur: 2 });
    q += cercle(cx, 120, r, { couleur: ENCRE, fond: '#fff5c2', epaisseur: 1.6 });
    q += cote(cx - r, 120, cx + r, 120, t1, { taille: 14, dy: -8 });
    q += texte(cx, 226, t2, { taille: 14, gras: true });
    return q;
  };
  s += disque2(170, 60, 'D = 25 mm', 'N = 50 / 25 = 2,0  (f/2)') + texte(170, 206, 'D = 25 mm', { taille: 13 });
  s += disque2(470, 30, '', 'N = 50 / 12,5 = 4,0  (f/4)') + texte(470, 206, 'D = 12,5 mm', { taille: 13 });
  s += texte(320, 256, 'objectif de focale 50 mm : diamètre divisé par 2, aire et lumière divisées par 4', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 268, s);
};

/** Modèle réduit de l'œil (lentille + écran + diaphragme). */
S['oeil-reduit'] = () => {
  const { svg, oa2 } = construction({ W: 660, H: 280, xO: 380, yA: 140, f: 120, oa: -320, ab: 70, rayons: ['par', 'centre'], demiL: 90 });
  let s = svg;
  const xR = 380 + oa2;
  s += rect(xR - 2, 50, 8, 180, { fond: ROUGE, bord: ROUGE, ep: 1, opacite: 0.85 });
  s += texte(xR - 10, 44, 'rétine = écran', { taille: 13, couleur: ROUGE, ancre: 'end' });
  s += ligne(360, 40, 360, 56, { couleur: VIOLET, epaisseur: 5 }) + ligne(360, 224, 360, 240, { couleur: VIOLET, epaisseur: 5 });
  s += texte(352, 30, 'iris = diaphragme', { taille: 13, couleur: VIOLET, ancre: 'end' });
  s += texte(392, 266, 'cristallin = lentille convergente', { taille: 13, ancre: 'start' });
  return enveloppe(660, 280, s);
};

/** Lunette astronomique afocale (F′1 = F2), faisceau incliné d'un angle α. */
S['lunette'] = ({ f1 = 300, f2 = 60 } = {}) => {
  const W = 680, H = 300, yA = 150, x1 = 70, x2 = x1 + f1 + f2;
  const a = 0.09; // angle d'inclinaison du faisceau incident (rad)
  const yI = yA - 0 - f1 * Math.tan(a); // image intermédiaire : dans le plan focal commun, au-dessus de l'axe ? (rayon par O1 : descend)
  let s = ligne(10, yA, W - 10, yA, { couleur: ATTENUE, epaisseur: 1.2 });
  s += lentille(x1, yA, 90, { nom: 'objectif' }) + lentille(x2, yA, 60, { nom: 'oculaire' });
  const xF = x1 + f1;
  s += ligne(xF, yA - 5, xF, yA + 5, { couleur: ENCRE, epaisseur: 2 }) + texte(xF, yA + 24, 'F′₁ = F₂', { taille: 14 });
  // faisceau incident incliné (descendant vers la droite) : 3 rayons parallèles
  const yImg = yA + f1 * Math.tan(a); // image intermédiaire B1 sous l'axe
  for (const h of [-50, 0, 50]) {
    const yE = yA + h; // point d'entrée sur l'objectif
    const xs = x1 - 60;
    s += ligne(xs, yE - 60 * Math.tan(a), x1, yE, { couleur: ORANGE, epaisseur: 1.8 });
    s += pointe(x1 - 25, yE - 25 * Math.tan(a), 1, Math.tan(a), { couleur: ORANGE, taille: 9 });
    // après l'objectif : tous passent par B1 (plan focal image)
    const pente = (yImg - yE) / f1;
    const yS = yE + pente * (f1 + f2); // arrivée sur l'oculaire
    if (Math.abs(yS - yA) < 60) {
      s += ligne(x1, yE, x2, yS, { couleur: ORANGE, epaisseur: 1.8 });
      // sortie : parallèle à la droite B1-O2
      const pente2 = (yA - yImg) / f2;
      const fin = jusquAuBord(x2, yS, x2 + 100, yS + 100 * pente2, W, H);
      s += ligne(x2, yS, fin[0], fin[1], { couleur: ORANGE, epaisseur: 1.8 });
      s += pointe((x2 + fin[0]) / 2, (yS + fin[1]) / 2, 1, pente2, { couleur: ORANGE, taille: 9 });
    } else {
      s += ligne(x1, yE, x1 + (f1 + f2) * 0.9, yE + pente * (f1 + f2) * 0.9, { couleur: ORANGE, epaisseur: 1.2 });
    }
  }
  s += fleche(xF, yA, xF, yImg, { couleur: ROUGE, epaisseur: 3, pointe: 9 }) + texte(xF + 10, yImg + 14, 'A₁B₁', { taille: 13, couleur: ROUGE, ancre: 'start' });
  s += texte(x1 - 40, yA - 40, 'α', { taille: 16, couleur: VERT, italique: true });
  s += texte(x2 + 70, yA - 26, 'α′ > α', { taille: 16, couleur: VERT, italique: true, ancre: 'start' });
  s += cote(x1, 262, xF, 262, 'f′₁', { taille: 14 }) + cote(xF, 262, x2, 262, 'f′₂', { taille: 14 });
  s += texte(W / 2, 292, `exemple tracé : f′₁ = ${f1 / f2} × f′₂, donc G = f′₁ / f′₂ = ${f1 / f2}`, { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H + 8, s);
};

// ───────────────────────── Couleurs ─────────────────────────

S['synthese-couleurs'] = ({ mode = 'additive' } = {}) => {
  const add = mode === 'additive';
  const W = 640, H = 300, r = 82;
  const c1 = [320, 110], c2 = [272, 192], c3 = [368, 192]; // haut, bas-gauche, bas-droite
  const [col1, col2, col3] = add ? ['#ff2020', '#20d020', '#2040ff'] : ['#ffe21a', '#00c8e6', '#e6198c'];
  const [n1, n2, n3] = add ? ['rouge', 'vert', 'bleu'] : ['jaune', 'cyan', 'magenta'];
  // mélanges deux à deux
  const m12 = add ? ['#ffff20', 'jaune'] : ['#20b030', 'vert'];      // haut + bas-gauche
  const m13 = add ? ['#ff20ff', 'magenta'] : ['#e02020', 'rouge'];   // haut + bas-droite
  const m23 = add ? ['#20e8ff', 'cyan'] : ['#2040e0', 'bleu'];       // bas-gauche + bas-droite
  const m123 = add ? ['#ffffff', 'blanc'] : ['#000000', 'noir'];
  const C = (c, f) => `<circle cx="${c[0]}" cy="${c[1]}" r="${r}" fill="${f}"/>`;
  let s = `<defs><clipPath id="k1">${C(c1, '#000')}</clipPath><clipPath id="k2">${C(c2, '#000')}</clipPath></defs>`;
  s += rect(150, 8, 340, 284, { fond: add ? '#000000' : '#ffffff', bord: add ? '#000000' : GRILLE, ep: 1, rx: 10 });
  s += C(c1, col1) + C(c2, col2) + C(c3, col3);
  s += `<g clip-path="url(#k1)">${C(c2, m12[0])}${C(c3, m13[0])}</g>`;
  s += `<g clip-path="url(#k2)">${C(c3, m23[0])}</g>`;
  s += `<g clip-path="url(#k1)"><g clip-path="url(#k2)">${C(c3, m123[0])}</g></g>`;
  const lab = (x, y, t, fonce) => texte(x, y, t, { taille: 13, gras: true, couleur: fonce ? '#ffffff' : '#111111' });
  s += lab(320, 70, n1, false) + lab(240, 222, n2, !add) + lab(400, 222, n3, !add);
  s += lab(280, 140, m12[1], !add) + lab(360, 140, m13[1], !add) + lab(320, 222, m23[1], !add);
  s += lab(320, 170, m123[1], !add);
  s += texte(20, 40, add ? 'Synthèse\nadditive' : 'Synthèse\nsoustractive', { taille: 15, gras: true, ancre: 'start' });
  s += texte(20, 100, add ? 'superposition\nde lumières\ncolorées\n(écrans)' : 'superposition\nde filtres ou\nde pigments\n(imprimante)', { taille: 13, ancre: 'start', couleur: ATTENUE });
  s += texte(620, 100, add ? 'départ : noir\n(aucune lumière)' : 'départ : blanc\n(papier, lumière\nblanche)', { taille: 13, ancre: 'end', couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['cercle-chromatique'] = () => {
  const cx = 230, cy = 160, R = 110;
  const coul = [['rouge', '#e8222b'], ['jaune', '#f6d31a'], ['vert', '#2bb34a'], ['cyan', '#18c0dc'], ['bleu', '#2a4fd8'], ['magenta', '#d62aa0']];
  let s = '';
  coul.forEach(([n, c], i) => {
    const a0 = ((i * 60 - 30 - 90) * Math.PI) / 180, a1 = ((i * 60 + 30 - 90) * Math.PI) / 180;
    s += `<path d="M ${cx} ${cy} L ${nb(cx + R * Math.cos(a0))} ${nb(cy + R * Math.sin(a0))} A ${R} ${R} 0 0 1 ${nb(cx + R * Math.cos(a1))} ${nb(cy + R * Math.sin(a1))} Z" fill="${c}" stroke="#ffffff" stroke-width="2"/>`;
    const am = ((i * 60 - 90) * Math.PI) / 180;
    s += texte(cx + (R + 26) * Math.cos(am), cy + (R + 26) * Math.sin(am) + 5, n, { taille: 14, gras: true });
  });
  s += fleche(cx, cy, cx, cy - R + 18, { couleur: ENCRE, epaisseur: 2, pointe: 9 }) + fleche(cx, cy, cx, cy + R - 18, { couleur: ENCRE, epaisseur: 2, pointe: 9 });
  s += texte(420, 80, 'Couleurs complémentaires :', { taille: 14, gras: true, ancre: 'start' });
  s += texte(420, 106, 'diamétralement opposées\nsur le cercle.', { taille: 13, ancre: 'start' });
  s += texte(420, 170, 'Une solution qui absorbe\nsurtout le rouge paraît\ncyan (bleu-vert) ;\nqui absorbe le bleu,\nparaît jaune.', { taille: 13, ancre: 'start', couleur: ATTENUE });
  return enveloppe(640, 320, s);
};

// ───────────────────────── La Terre, le Soleil ─────────────────────────

S['eratosthene'] = () => {
  const cx = 330, cy = 330, R = 240, a = (7 * Math.PI) / 180;
  const P = (ang, r = R) => [cx + r * Math.cos(ang), cy + r * Math.sin(ang)];
  const aS = -Math.PI / 2, aA = -Math.PI / 2 - a;
  let s = `<path d="M ${nb(P(-Math.PI * 0.82)[0])} ${nb(P(-Math.PI * 0.82)[1])} A ${R} ${R} 0 0 1 ${nb(P(-Math.PI * 0.18)[0])} ${nb(P(-Math.PI * 0.18)[1])}" fill="#e8f2e4" stroke="${VERT}" stroke-width="2.4"/>`;
  // rayons solaires parallèles (verticaux)
  for (const x of [120, 200, 420, 500]) s += fleche(x, 8, x, Math.min(P(aS)[1] - 4, cy - Math.sqrt(Math.max(R * R - (x - cx) ** 2, 0)) - 4), { couleur: '#e0a030', epaisseur: 1.4, pointe: 8 });
  // rayons terrestres vers les deux villes
  s += ligne(cx, cy, ...P(aS), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true }) + ligne(cx, cy, ...P(aA), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  // bâtons verticaux (radiaux)
  const bS = [P(aS), P(aS, R + 46)], bA = [P(aA), P(aA, R + 46)];
  s += ligne(...bS[0], ...bS[1], { couleur: ENCRE, epaisseur: 3 }) + ligne(...bA[0], ...bA[1], { couleur: ENCRE, epaisseur: 3 });
  // angle au sommet du bâton d'Alexandrie (entre le bâton et le rayon solaire)
  const top = bA[1], rr = 30;
  const angBaton = aA + Math.PI; // direction du sommet vers le pied
  s += `<path d="M ${nb(top[0] + rr * Math.cos(angBaton))} ${nb(top[1] + rr * Math.sin(angBaton))} A ${rr} ${rr} 0 0 1 ${nb(top[0])} ${nb(top[1] + rr)}" fill="none" stroke="${ROUGE}" stroke-width="2"/>`;
  s += texte(top[0] - 34, top[1] + 30, '7°', { taille: 14, couleur: ROUGE, gras: true });
  // angle au centre
  const rc = 70;
  s += `<path d="M ${nb(cx + rc * Math.cos(aA))} ${nb(cy + rc * Math.sin(aA))} A ${rc} ${rc} 0 0 1 ${nb(cx + rc * Math.cos(aS))} ${nb(cy + rc * Math.sin(aS))}" fill="none" stroke="${ROUGE}" stroke-width="2"/>`;
  s += texte(cx - 30, cy - 76, '7°', { taille: 14, couleur: ROUGE, gras: true });
  s += texte(...[P(aS, R + 58)[0] + 8, P(aS, R + 58)[1]], 'Syène', { taille: 13, ancre: 'start' });
  s += texte(P(aA, R + 58)[0] - 8, P(aA, R + 58)[1], 'Alexandrie', { taille: 13, ancre: 'end' });
  s += texte(cx, cy - 8, 'centre de la Terre', { taille: 12, couleur: ATTENUE });
  s += texte(560, 40, 'rayons du Soleil\nparallèles', { taille: 12, couleur: '#b07a10' });
  s += texte(600, 300, 'schéma non à l\'échelle', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  return enveloppe(660, 342, s);
};

S['geo-helio'] = () => {
  let s = '';
  const panneau = (ox, centre, autres, titre) => {
    let t = texte(ox + 150, 26, titre, { taille: 14, gras: true });
    const cx = ox + 150, cy = 160;
    autres.forEach((o, i) => { t += cercle(cx, cy, o.r, { couleur: GRILLE, epaisseur: 1.4 }); });
    t += disque(cx, cy, centre.r, centre.c) + texte(cx, cy + centre.r + 16, centre.t, { taille: 13, gras: true });
    autres.forEach((o) => {
      const x = cx + o.r * Math.cos(o.a), y = cy + o.r * Math.sin(o.a);
      t += disque(x, y, o.taille, o.c) + texte(x, y - o.taille - 6, o.t, { taille: 12 });
    });
    return t;
  };
  s += panneau(0, { r: 16, c: '#4c8be0', t: 'Terre' }, [{ r: 44, a: -2.2, taille: 5, c: '#cfcfcf', t: 'Lune' }, { r: 80, a: -0.5, taille: 6, c: '#e7c46a', t: 'Vénus' }, { r: 116, a: 0.6, taille: 12, c: '#ffcc33', t: 'Soleil' }], 'Modèle géocentrique');
  s += panneau(330, { r: 18, c: '#ffcc33', t: 'Soleil' }, [{ r: 60, a: -2.4, taille: 6, c: '#e7c46a', t: 'Vénus' }, { r: 104, a: -0.7, taille: 8, c: '#4c8be0', t: 'Terre' }], 'Modèle héliocentrique');
  s += texte(330, 300, 'schémas non à l\'échelle', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 310, s);
};

S['refraction'] = ({ i1 = 50, n1 = 1.0, n2 = 1.33, m1 = 'air', m2 = 'eau' } = {}) => {
  const W = 600, H = 320, x0 = 300, y0 = 160, L = 150;
  const r1 = (i1 * Math.PI) / 180, r2 = Math.asin((n1 * Math.sin(r1)) / n2);
  let s = rect(0, y0, W, H - y0, { fond: EAU, bord: 'none', ep: 0, opacite: 0.7 });
  s += ligne(0, y0, W, y0, { couleur: EAU_BORD, epaisseur: 2 });
  s += ligne(x0, 20, x0, H - 20, { couleur: ATTENUE, epaisseur: 1.4, pointilles: true }) + texte(x0 + 6, 30, 'normale', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  const A = [x0 - L * Math.sin(r1), y0 - L * Math.cos(r1)], Bp = [x0 + L * Math.sin(r2), y0 + L * Math.cos(r2)];
  s += fleche(A[0], A[1], x0, y0, { couleur: ROUGE, epaisseur: 2.6 }) + fleche(x0, y0, Bp[0], Bp[1], { couleur: ROUGE, epaisseur: 2.6 });
  const arcA = (r, a0, a1, sens) => `<path d="M ${nb(x0 + r * Math.cos(a0))} ${nb(y0 + r * Math.sin(a0))} A ${r} ${r} 0 0 ${sens} ${nb(x0 + r * Math.cos(a1))} ${nb(y0 + r * Math.sin(a1))}" fill="none" stroke="${VERT}" stroke-width="2"/>`;
  s += arcA(56, -Math.PI / 2, -Math.PI / 2 - r1, 0) + arcA(56, Math.PI / 2, Math.PI / 2 - r2, 0);
  s += texte(x0 - 92 * Math.sin(r1 / 2), y0 - 92 * Math.cos(r1 / 2) + 5, `i₁ = ${i1}°`, { taille: 14, couleur: VERT, gras: true });
  s += texte(x0 + 122 * Math.sin(r2 / 2), y0 + 122 * Math.cos(r2 / 2) + 5, `i₂ ≈ ${fr((r2 * 180) / Math.PI, 0)}°`, { taille: 14, couleur: VERT, gras: true });
  s += texte(20, 40, `${m1} (n₁ = ${fr(n1, 2)})`, { taille: 13, ancre: 'start' }) + texte(20, H - 20, `${m2} (n₂ = ${fr(n2, 2)})`, { taille: 13, ancre: 'start' });
  s += texte(W - 16, 40, `n₁ sin i₁ = n₂ sin i₂`, { taille: 14, ancre: 'end', gras: true });
  s += texte(W - 16, 60, 'les angles se mesurent par rapport à la normale', { taille: 12, ancre: 'end', couleur: ATTENUE });
  return enveloppe(W, H, s);
};

// ───────────────────────── Verrerie de laboratoire ─────────────────────────

const VERRE = { couleur: ENCRE, ep: 2.2 };

/** Fiole jaugée : bas centré en (cx, yb). */
function fioleJaugee(cx, yb, { r = 42, col = 90, niveau = 'trait', couleur = '#e9d8f5', titre = '', bouchon = true } = {}) {
  const yc = yb - r; // centre du ventre
  const w = 9; // demi-largeur du col
  const yTop = yc - r * 0.86 - col;
  const yTrait = yTop + 34;
  let s = '';
  const ventre = `M ${cx - w} ${yc - r * 0.86} L ${cx - w} ${yTop} M ${cx + w} ${yTop} L ${cx + w} ${yc - r * 0.86}`;
  // liquide
  const yliq = niveau === 'trait' ? yTrait : niveau === 'ventre' ? yc - r * 0.2 : niveau === 'fond' ? yc + r * 0.45 : yb;
  if (niveau !== 'vide') {
    s += `<clipPath id="fj${Math.round(cx)}"><rect x="${cx - r - 5}" y="${yliq}" width="${2 * r + 10}" height="${yb - yliq + 2}"/></clipPath>`;
    s += `<g clip-path="url(#fj${Math.round(cx)})"><circle cx="${cx}" cy="${yc}" r="${r - 1}" fill="${couleur}"/><rect x="${cx - w}" y="${yTop}" width="${2 * w}" height="${yc - yTop}" fill="${couleur}"/></g>`;
  }
  s += chemin(`M ${nb(cx - w)} ${nb(yc - r * 0.86)} A ${r} ${r} 0 1 0 ${nb(cx + w)} ${nb(yc - r * 0.86)}`, VERRE);
  s += chemin(ventre, VERRE);
  s += ligne(cx - w - 5, yTrait, cx + w + 5, yTrait, { couleur: ROUGE, epaisseur: 2 });
  if (bouchon) s += rect(cx - w - 2, yTop - 12, 2 * w + 4, 12, { fond: '#d9d9d9', bord: ENCRE, ep: 1.4, rx: 2 });
  if (titre) s += texte(cx, yb + 22, titre, { taille: 13 });
  return { svg: s, yTrait };
}

/** Pipette jaugée verticale (pointe en bas en (cx, ybas)). */
function pipette(cx, ybas, { h = 200, plein = true, couleur = '#e9d8f5' } = {}) {
  const yb = ybas, yt = ybas - h;
  const yRen1 = yt + h * 0.45, yRen2 = yt + h * 0.75; // renflement
  let s = '';
  if (plein) s += rect(cx - 3, yt + 30, 6, yRen1 - yt - 30, { fond: couleur, bord: 'none', ep: 0 }) + ellipse(cx, (yRen1 + yRen2) / 2, 10, (yRen2 - yRen1) / 2, { couleur: 'none', fond: couleur, ep: 0 }) + rect(cx - 2, yRen2, 4, yb - yRen2 - 4, { fond: couleur, bord: 'none', ep: 0 });
  s += chemin(`M ${cx - 3} ${yt} L ${cx - 3} ${yRen1} Q ${cx - 12} ${(yRen1 + yRen2) / 2} ${cx - 3} ${yRen2} L ${cx - 1} ${yb} M ${cx + 1} ${yb} L ${cx + 3} ${yRen2} Q ${cx + 12} ${(yRen1 + yRen2) / 2} ${cx + 3} ${yRen1} L ${cx + 3} ${yt}`, { couleur: ENCRE, ep: 1.8 });
  s += ligne(cx - 7, yt + 30, cx + 7, yt + 30, { couleur: ROUGE, epaisseur: 2 });
  return s;
}

/** Burette graduée sur potence (robinet en bas en (cx, yr)). */
function burette(cx, yr, { h = 210, niveau = 0.85, couleur = '#cfe4f7', titre = 'burette graduée' } = {}) {
  const yt = yr - h;
  let s = rect(cx - 7, yt + h * (1 - niveau), 14, h * niveau - 14, { fond: couleur, bord: 'none', ep: 0 });
  s += chemin(`M ${cx - 7} ${yt} L ${cx - 7} ${yr - 14} L ${cx - 2} ${yr} L ${cx - 2} ${yr + 18} M ${cx + 2} ${yr + 18} L ${cx + 2} ${yr} L ${cx + 7} ${yr - 14} L ${cx + 7} ${yt}`, { couleur: ENCRE, ep: 1.8 });
  for (let k = 0; k < 11; k++) s += ligne(cx - 7, yt + 12 + k * ((h - 30) / 10), cx - 1, yt + 12 + k * ((h - 30) / 10), { couleur: ENCRE, epaisseur: 1 });
  s += rect(cx - 10, yr + 2, 20, 6, { fond: '#3b4652', bord: ENCRE, ep: 1 }); // robinet
  if (titre) s += texte(cx + 16, yt + 30, titre, { taille: 13, ancre: 'start' });
  return s;
}

/** Erlenmeyer (bas centré en cx, yb). */
function erlenmeyer(cx, yb, { w = 90, h = 110, niveau = 0.35, couleur = EAU } = {}) {
  const col = 14;
  const yl = yb - h * niveau;
  const lx = (y) => (w / 2) - ((w / 2 - col) * (yb - y)) / (h - 30);
  let s = '';
  if (niveau > 0) s += polygone([[cx - w / 2, yb], [cx + w / 2, yb], [cx + lx(yl), yl], [cx - lx(yl), yl]], { couleur: 'none', fond: couleur, epaisseur: 0 });
  s += chemin(`M ${cx - col} ${yb - h} L ${cx - col} ${yb - h + 30} L ${cx - w / 2} ${yb} L ${cx + w / 2} ${yb} L ${cx + col} ${yb - h + 30} L ${cx + col} ${yb - h}`, VERRE);
  return s;
}

/** Bécher simple (bas centré). */
function becherC(cx, yb, { w = 90, h = 100, niveau = 0.5, couleur = EAU } = {}) {
  return becher(cx - w / 2, yb, w, h, { niveau, couleur });
}

/** Agitateur magnétique. */
function agitateur(cx, y, w = 150) {
  return rect(cx - w / 2, y, w, 34, { fond: '#e6ebf0', bord: ENCRE, ep: 1.8, rx: 5 }) + cercle(cx + w / 2 - 22, y + 17, 8, { couleur: ENCRE, epaisseur: 1.6 });
}

S['dilution'] = ({ F = null } = {}) => {
  let s = '';
  // 1. bécher de solution mère + pipette
  s += becher(30, 230, 90, 90, { niveau: 0.6, couleur: '#d7bdf0' });
  s += pipette(75, 210, { h: 170 });
  s += texte(75, 254, '1. prélever V₁ de solution', { taille: 13 }) + texte(75, 272, 'mère à la pipette jaugée', { taille: 13 });
  // 2. verser dans la fiole
  const f2 = fioleJaugee(250, 230, { niveau: 'fond', couleur: '#d7bdf0', bouchon: false });
  s += f2.svg + pipette(250, 128, { h: 110, plein: true });
  s += texte(250, 254, '2. verser dans la fiole', { taille: 13 }) + texte(250, 272, 'jaugée de volume V₂', { taille: 13 });
  // 3. compléter à l'eau jusqu'au trait
  const f3 = fioleJaugee(420, 230, { niveau: 'trait', couleur: '#efe3fa', bouchon: false });
  s += f3.svg + texte(420, 254, '3. compléter avec de l\'eau', { taille: 13 }) + texte(420, 272, 'jusqu\'au trait de jauge', { taille: 13 });
  s += fleche(470, f3.yTrait, 440, f3.yTrait, { couleur: ROUGE, epaisseur: 1.6, pointe: 8 }) + texte(474, f3.yTrait + 4, 'trait', { taille: 12, couleur: ROUGE, ancre: 'start' });
  // 4. homogénéiser
  const f4 = fioleJaugee(580, 230, { niveau: 'trait', couleur: '#efe3fa' });
  s += f4.svg + flecheCourbe(540, 120, 580, 70, 620, 120, { couleur: ATTENUE, ep: 1.6 });
  s += texte(580, 254, '4. boucher et', { taille: 13 }) + texte(580, 272, 'retourner', { taille: 13 });
  if (F) s += texte(330, 300, F, { taille: 13, gras: true });
  return enveloppe(660, F ? 312 : 290, s);
};

S['montage-titrage'] = ({ mesure = 'pH-mètre', titrant = 'solution titrante\n(concentration connue)', titre = 'solution à titrer' } = {}) => {
  let s = '';
  // potence
  s += rect(80, 300, 160, 8, { fond: '#9aa6b2', bord: ENCRE, ep: 1.2 }) + ligne(100, 300, 100, 20, { couleur: ENCRE, epaisseur: 4 }) + ligne(100, 60, 205, 60, { couleur: ENCRE, epaisseur: 3 });
  s += burette(210, 210, { h: 180, niveau: 0.8, titre: '' });
  const tt = titrant.split('\n');
  s += texte(232, 70, 'burette graduée', { taille: 13, ancre: 'start', gras: true });
  tt.forEach((l, i) => { s += texte(232, 90 + i * 17, l, { taille: 12, ancre: 'start', couleur: ATTENUE }); });
  s += agitateur(210, 266, 170);
  s += becher(165, 262, 90, 70, { niveau: 0.55, couleur: '#f6e7b8' });
  s += `<rect x="200" y="252" width="18" height="5" rx="2" fill="${ENCRE}"/>`; // barreau aimanté
  s += texte(320, 250, titre, { taille: 13, ancre: 'start' }) + fleche(316, 246, 250, 238, { couleur: ATTENUE, epaisseur: 1.2, pointe: 7 });
  s += texte(330, 294, 'agitateur magnétique', { taille: 12, ancre: 'start', couleur: ATTENUE });
  if (mesure) {
    // sonde + appareil de mesure
    s += ligne(240, 250, 240, 150, { couleur: ENCRE, epaisseur: 5 }) + polyligne([[240, 150], [240, 130], [430, 130], [430, 150]], { couleur: ENCRE, ep: 1.6 });
    s += rect(400, 150, 150, 70, { fond: '#eef3fb', bord: BLEU, ep: 1.8, rx: 6 }) + rect(415, 162, 120, 30, { fond: '#ffffff', bord: ENCRE, ep: 1.2, rx: 3 });
    s += texte(475, 210, mesure, { taille: 13, gras: true });
    s += texte(250, 170, 'sonde', { taille: 12, ancre: 'start', couleur: ATTENUE });
  }
  return enveloppe(600, 316, s);
};

/** Variante colorimétrique (1re spécialité : titrage avec suivi colorimétrique, sans appareil de mesure). */
S['montage-titrage-colorimetrique'] = ({ titrant = 'solution titrante violette\n(ions permanganate,\nconcentration connue)', titre = 'solution à titrer', couleurTitrant = '#b678c9', avant = '#f3f6f8', apres = '#e7c3ec', avantTxt = 'presque incolore', apresTxt = 'violet persistant' } = {}) => {
  let s = '';
  // potence
  s += rect(80, 300, 160, 8, { fond: '#9aa6b2', bord: ENCRE, ep: 1.2 }) + ligne(100, 300, 100, 20, { couleur: ENCRE, epaisseur: 4 }) + ligne(100, 60, 205, 60, { couleur: ENCRE, epaisseur: 3 });
  s += burette(210, 210, { h: 180, niveau: 0.8, titre: '', couleur: couleurTitrant });
  const tt = titrant.split('\n');
  s += texte(232, 50, 'burette graduée', { taille: 13, ancre: 'start', gras: true });
  tt.forEach((l, i) => { s += texte(232, 68 + i * 16, l, { taille: 12, ancre: 'start', couleur: ATTENUE }); });
  s += agitateur(210, 266, 170);
  s += becher(165, 262, 90, 70, { niveau: 0.55, couleur: avant });
  s += `<rect x="200" y="252" width="18" height="5" rx="2" fill="${ENCRE}"/>`; // barreau aimanté
  s += texte(320, 262, titre, { taille: 13, ancre: 'start' }) + fleche(316, 258, 258, 244, { couleur: ATTENUE, epaisseur: 1.2, pointe: 7 });
  s += texte(330, 296, 'agitateur magnétique', { taille: 12, ancre: 'start', couleur: ATTENUE });
  // repérage de l'équivalence par la couleur
  s += texte(478, 132, 'repérage de l\'équivalence', { taille: 13, gras: true });
  s += becher(400, 200, 50, 44, { niveau: 0.6, couleur: avant, graine: 3 });
  s += becher(506, 200, 50, 44, { niveau: 0.6, couleur: apres, graine: 5 });
  s += fleche(458, 180, 498, 180, { couleur: ENCRE, epaisseur: 1.4, pointe: 7 });
  s += texte(425, 218, 'avant', { taille: 12, gras: true }) + texte(425, 234, avantTxt, { taille: 11, couleur: ATTENUE });
  s += texte(531, 218, 'juste après', { taille: 12, gras: true }) + texte(531, 234, apresTxt, { taille: 11, couleur: ATTENUE });
  return enveloppe(600, 316, s);
};

/** Ballon à fond rond (centre du ventre en cx, cy). */
function ballon(cx, cy, { r = 42, col = 40, couleur = '#f6e7b8', niveau = 0.45, grains = false } = {}) {
  const w = 9;
  const a = Math.asin(w / r);
  const yl = cy + r - 2 * r * niveau;
  let s = `<clipPath id="bl${Math.round(cx)}${Math.round(cy)}"><rect x="${cx - r}" y="${yl}" width="${2 * r}" height="${cy + r - yl}"/></clipPath>`;
  s += `<g clip-path="url(#bl${Math.round(cx)}${Math.round(cy)})"><circle cx="${cx}" cy="${cy}" r="${r - 1}" fill="${couleur}"/></g>`;
  s += chemin(`M ${nb(cx - w)} ${nb(cy - r * Math.cos(a))} A ${r} ${r} 0 1 0 ${nb(cx + w)} ${nb(cy - r * Math.cos(a))}`, VERRE);
  s += chemin(`M ${cx - w} ${nb(cy - r * Math.cos(a))} L ${cx - w} ${nb(cy - r - col)} M ${cx + w} ${nb(cy - r - col)} L ${cx + w} ${nb(cy - r * Math.cos(a))}`, VERRE);
  if (grains) { const rr = alea(5); for (let i = 0; i < 4; i++) s += `<ellipse cx="${nb(cx - 18 + rr() * 36)}" cy="${nb(cy + r - 8 - rr() * 6)}" rx="4" ry="2.5" fill="#7a7a7a"/>`; }
  return s;
}

/** Réfrigérant droit entre (x1,y1) et (x2,y2) avec circulation d'eau. */
function refrigerant(x1, y1, x2, y2, { entree = 'bas' } = {}) {
  const L = Math.hypot(x2 - x1, y2 - y1), a = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  let g = `<rect x="0" y="-15" width="${nb(L)}" height="30" rx="6" fill="#e3f0fa" stroke="${ENCRE}" stroke-width="2"/>`;
  g += `<line x1="-12" y1="-6" x2="${nb(L + 12)}" y2="-6" stroke="${ENCRE}" stroke-width="1.8"/><line x1="-12" y1="6" x2="${nb(L + 12)}" y2="6" stroke="${ENCRE}" stroke-width="1.8"/>`;
  g += `<rect x="-12" y="-5" width="${nb(L + 24)}" height="10" fill="#ffffff"/>`;
  g += `<line x1="-12" y1="-6" x2="${nb(L + 12)}" y2="-6" stroke="${ENCRE}" stroke-width="1.8"/><line x1="-12" y1="6" x2="${nb(L + 12)}" y2="6" stroke="${ENCRE}" stroke-width="1.8"/>`;
  return `<g transform="translate(${nb(x1)},${nb(y1)}) rotate(${nb(a)})">${g}</g>`;
}

/** Chauffe-ballon sous un ballon. */
function chauffeBallon(cx, cy, r) {
  return chemin(`M ${cx - r - 18} ${cy - 6} Q ${cx - r - 18} ${cy + r + 22} ${cx} ${cy + r + 22} Q ${cx + r + 18} ${cy + r + 22} ${cx + r + 18} ${cy - 6} Z`, { couleur: ENCRE, ep: 2, fond: '#f3c9a8' }) +
    rect(cx - r - 26, cy + r + 22, 2 * r + 52, 18, { fond: '#9aa6b2', bord: ENCRE, ep: 1.6, rx: 3 });
}

S['reflux'] = () => {
  let s = '';
  const cx = 230, cy = 230, r = 46;
  s += chauffeBallon(cx, cy, r);
  s += ballon(cx, cy, { r, col: 26, grains: true });
  // réfrigérant vertical au-dessus du ballon
  const yb = cy - r - 26, yh = 40;
  s += refrigerant(cx, yb, cx, yh);
  // entrée d'eau en bas, sortie en haut
  s += fleche(cx + 70, yb - 18, cx + 17, yb - 18, { couleur: BLEU, epaisseur: 2, pointe: 9 }) + texte(cx + 76, yb - 14, 'entrée d\'eau froide', { taille: 13, couleur: BLEU, ancre: 'start' });
  s += fleche(cx + 17, yh + 18, cx + 70, yh + 18, { couleur: BLEU, epaisseur: 2, pointe: 9 }) + texte(cx + 76, yh + 22, 'sortie d\'eau', { taille: 13, couleur: BLEU, ancre: 'start' });
  // vapeurs qui montent et retombent
  s += flecheCourbe(cx - 4, cy - r - 10, cx - 30, (yb + yh) / 2 + 30, cx - 4, (yb + yh) / 2, { couleur: ROUGE, ep: 1.6, taille: 8 });
  s += texte(cx - 34, (yb + yh) / 2 + 24, 'les vapeurs\nse condensent\net retombent', { taille: 12, couleur: ROUGE, ancre: 'end' });
  s += texte(cx - r - 30, cy + 12, 'mélange\nréactionnel', { taille: 12, ancre: 'end' });
  s += texte(cx + r + 34, cy + r + 34, 'chauffe-ballon', { taille: 13, ancre: 'start' });
  s += texte(cx - r - 30, cy + 50, 'grains de\npierre ponce', { taille: 12, ancre: 'end', couleur: ATTENUE });
  s += texte(cx + 26, (yb + yh) / 2 + 4, 'réfrigérant', { taille: 13, ancre: 'start', gras: true });
  return enveloppe(560, 330, s);
};

S['ampoule-decanter'] = ({ haut = 'phase aqueuse\n(eau, d = 1,00)', bas = 'phase organique\n(dichlorométhane, d = 1,33)', couleurHaut = EAU, couleurBas = '#f3d36b', note = 'la phase la plus dense est en bas' } = {}) => {
  const cx = 200;
  let s = '';
  // corps en forme de poire
  const corps = `M ${cx - 14} 60 C ${cx - 90} 120 ${cx - 70} 220 ${cx - 8} 262 L ${cx + 8} 262 C ${cx + 70} 220 ${cx + 90} 120 ${cx + 14} 60 Z`;
  s += `<clipPath id="amp"><path d="${corps}"/></clipPath>`;
  s += `<g clip-path="url(#amp)"><rect x="${cx - 100}" y="105" width="200" height="85" fill="${couleurHaut}"/><rect x="${cx - 100}" y="190" width="200" height="80" fill="${couleurBas}"/><line x1="${cx - 100}" y1="190" x2="${cx + 100}" y2="190" stroke="#9a7a20" stroke-width="1.6"/></g>`;
  s += chemin(corps, VERRE);
  s += rect(cx - 10, 42, 20, 18, { fond: '#d9d9d9', bord: ENCRE, ep: 1.4, rx: 3 }); // bouchon
  s += chemin(`M ${cx - 4} 262 L ${cx - 4} 320 M ${cx + 4} 262 L ${cx + 4} 320`, VERRE);
  s += rect(cx - 14, 280, 28, 10, { fond: '#3b4652', bord: ENCRE, ep: 1 }); // robinet
  const h = haut.split('\n'), b = bas.split('\n');
  s += ligne(cx + 70, 150, 300, 150, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(306, 146, h[0], { taille: 13, ancre: 'start', gras: true }) + (h[1] ? texte(306, 164, h[1], { taille: 12, ancre: 'start' }) : '');
  s += ligne(cx + 50, 225, 300, 225, { couleur: ATTENUE, epaisseur: 1.2 }) + texte(306, 221, b[0], { taille: 13, ancre: 'start', gras: true }) + (b[1] ? texte(306, 239, b[1], { taille: 12, ancre: 'start' }) : '');
  s += texte(cx + 22, 300, 'robinet', { taille: 12, ancre: 'start', couleur: ATTENUE });
  if (note) s += texte(330, 300, note, { taille: 13, ancre: 'start', couleur: ROUGE });
  return enveloppe(620, 330, s);
};

S['distillation'] = () => {
  let s = '';
  const cx = 120, cy = 240, r = 44;
  s += chauffeBallon(cx, cy, r) + ballon(cx, cy, { r, col: 20, grains: true });
  // colonne de Vigreux
  const yc0 = cy - r - 20, yc1 = 70;
  s += chemin(`M ${cx - 9} ${yc0} L ${cx - 9} ${yc1} M ${cx + 9} ${yc0} L ${cx + 9} ${yc1}`, VERRE);
  for (let y = yc0 - 14; y > yc1 + 10; y -= 18) s += chemin(`M ${cx - 9} ${y} l 6 -5 M ${cx + 9} ${y - 9} l -6 -5`, { couleur: ENCRE, ep: 1.4 });
  // tête + thermomètre
  s += chemin(`M ${cx - 9} ${yc1} L ${cx - 9} ${yc1 - 20} M ${cx + 9} ${yc1} L ${cx + 9} ${yc1 - 8}`, VERRE);
  s += ligne(cx, yc1 - 50, cx, yc1 + 10, { couleur: ROUGE, epaisseur: 3 }) + `<circle cx="${cx}" cy="${yc1 + 12}" r="4" fill="${ROUGE}"/>`;
  s += texte(cx - 14, yc1 - 40, 'thermomètre', { taille: 12, ancre: 'end', couleur: ROUGE });
  // réfrigérant droit incliné
  s += refrigerant(cx + 9, yc1 - 4, 430, 190);
  s += fleche(410, 236, 404, 200, { couleur: BLEU, epaisseur: 1.8, pointe: 8 }) + texte(414, 250, 'entrée d\'eau', { taille: 12, couleur: BLEU, ancre: 'end' });
  s += fleche(176, 70, 160, 40, { couleur: BLEU, epaisseur: 1.8, pointe: 8 }) + texte(180, 40, 'sortie d\'eau', { taille: 12, couleur: BLEU, ancre: 'start' });
  // erlenmeyer collecteur
  s += erlenmeyer(470, 300, { w: 80, h: 90, niveau: 0.25, couleur: '#f6e7b8' });
  s += texte(520, 280, 'distillat', { taille: 13, ancre: 'start' });
  s += texte(cx + 18, 160, 'colonne\nde Vigreux', { taille: 12, ancre: 'start' });
  s += texte(260, 110, 'réfrigérant', { taille: 13, gras: true });
  s += texte(cx + r + 34, 300, 'chauffe-ballon', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  return enveloppe(620, 330, s);
};

S['ccm'] = ({ h = 3.6, Hf = 4.8 } = {}) => {
  // plaque de CCM après élution (échelle : 40 px par cm)
  const k = 40, x0 = 120, yDep = 260, w = 200;
  const yF = yDep - Hf * k;
  let s = rect(x0, yF - 24, w, yDep - yF + 54, { fond: '#f7f7f2', bord: ENCRE, ep: 2 });
  s += ligne(x0 + 6, yDep, x0 + w - 6, yDep, { couleur: ATTENUE, epaisseur: 1.4 }) + texte(x0 - 8, yDep + 4, 'ligne de dépôt', { taille: 12, ancre: 'end', couleur: ATTENUE });
  s += ligne(x0 + 6, yF, x0 + w - 6, yF, { couleur: BLEU, epaisseur: 1.6, pointilles: true }) + texte(x0 - 8, yF + 4, 'front de l\'éluant', { taille: 12, ancre: 'end', couleur: BLEU });
  // dépôts : produit (1 tache), réactif (référence), mélange (2 taches)
  const xs = [x0 + 45, x0 + 100, x0 + 155];
  const tache = (x, hcm, c) => ellipse(x, yDep - hcm * k, 9, 6, { couleur: c, fond: c, opacite: 0.75, ep: 1 });
  s += tache(xs[0], h, VIOLET) + tache(xs[1], 1.5, ORANGE) + tache(xs[2], h, VIOLET) + tache(xs[2], 1.5, ORANGE);
  xs.forEach((x, i) => { s += `<circle cx="${x}" cy="${yDep}" r="2.5" fill="${ENCRE}"/>`; s += texte(x, yDep + 22, ['P', 'R', 'M'][i], { taille: 13, gras: true }); });
  s += cote(x0 + w + 20, yDep, x0 + w + 20, yDep - h * k, '', {}) + texte(x0 + w + 30, yDep - (h * k) / 2 + 4, `h = ${fr(h, 1)} cm`, { taille: 13, ancre: 'start', couleur: VIOLET });
  s += cote(x0 + w + 110, yDep, x0 + w + 110, yF, '', {}) + texte(x0 + w + 120, yDep - (Hf * k) / 2 + 4, `H = ${fr(Hf, 1)} cm`, { taille: 13, ancre: 'start', couleur: BLEU });
  s += texte(330, 312, `Rf = h / H = ${fr(h, 1)} / ${fr(Hf, 1)} = ${fr(h / Hf, 2)}`, { taille: 14, gras: true });
  s += texte(560, 60, 'P : produit\nR : réactif\nM : mélange', { taille: 12, ancre: 'end', couleur: ATTENUE });
  return enveloppe(600, 322, s);
};

// ───────────────────────── Graphes de mesure ─────────────────────────

/** Droite d'étalonnage A = k c, points de la gamme, lecture de l'inconnue. */
S['etalonnage'] = ({ k = 4.0e3, Ax = 0.52, cmax = 2.5e-4, pas = 5e-5, Amax = 1.0, puissance = -4, nomY = 'absorbance A', etalons = null } = {}) => {
  const u = 10 ** puissance;
  const { svg, X, Y } = graphe({ W: 620, H: 340, xmin: 0, xmax: cmax / u, ymin: 0, ymax: Amax, pasX: pas / u, pasY: Amax / 5, nomX: `c (× 10${puissance === -4 ? '⁻⁴' : '⁻³'} mol·L⁻¹)`, nomY, g: 56 });
  let s = svg;
  s += trace((c) => k * c * u, 0, cmax / u, X, Y, { couleur: BLEU, ep: 2.4 });
  const pts = etalons || [0.4, 0.8, 1.2, 1.6, 2.0].map((c) => [c * 1e-4 / u, k * c * 1e-4]);
  pts.forEach(([c, A]) => { s += `<circle cx="${nb(X(c))}" cy="${nb(Y(A))}" r="4.5" fill="${BLEU}"/>`; });
  const cx = Ax / k;
  s += ligne(X(0), Y(Ax), X(cx / u), Y(Ax), { couleur: ROUGE, epaisseur: 1.6, pointilles: true });
  s += ligne(X(cx / u), Y(Ax), X(cx / u), Y(0), { couleur: ROUGE, epaisseur: 1.6, pointilles: true });
  s += `<circle cx="${nb(X(cx / u))}" cy="${nb(Y(Ax))}" r="5.5" fill="${ROUGE}"/>`;
  s += etiquette(X(0) + 8, Y(Ax) - 8, `Ax = ${fr(Ax, 2)}`, { taille: 13, couleur: ROUGE, ancre: 'start' });
  s += etiquette(X(cx / u) + 8, Y(0) - 10, `cx = ${fr(cx / u, 1)} × 10${puissance === -4 ? '⁻⁴' : '⁻³'} mol·L⁻¹`, { taille: 13, couleur: ROUGE, ancre: 'start' });
  s += etiquette(X(cmax / u * 0.72) + 10, Y(k * cmax * 0.72) + 34, `A = ${fr(k / 1000, 1)} × 10³ × c`, { taille: 13, couleur: BLEU, ancre: 'start' });
  s += texte(380, 70, 'points bleus : solutions étalons', { taille: 12, couleur: ATTENUE });
  return enveloppe(620, 340, s);
};

S['caracteristique-capteur'] = () => {
  const { svg, X, Y } = graphe({ W: 620, H: 340, xmin: 0, xmax: 100, ymin: 0, ymax: 3, pasX: 10, pasY: 0.5, nomX: 'θ (°C)', nomY: 'U (V)', fmtY: (v) => fr(v, 1), g: 56 });
  let s = svg + trace((t) => 0.5 + 0.02 * t, 0, 100, X, Y, { couleur: BLEU, ep: 2.8 });
  s += ligne(X(0), Y(1.3), X(40), Y(1.3), { couleur: ROUGE, epaisseur: 1.6, pointilles: true }) + ligne(X(40), Y(1.3), X(40), Y(0), { couleur: ROUGE, epaisseur: 1.6, pointilles: true });
  s += `<circle cx="${nb(X(40))}" cy="${nb(Y(1.3))}" r="5" fill="${ROUGE}"/>`;
  s += etiquette(X(40) + 8, Y(1.3) + 22, 'U = 1,30 V → θ = 40 °C', { taille: 13, couleur: ROUGE, ancre: 'start' });
  // pente
  s += polyligne([[X(60), Y(1.7)], [X(90), Y(1.7)], [X(90), Y(2.3)]], { couleur: VERT, ep: 1.6, pointilles: true });
  s += texte(X(75), Y(1.7) + 18, '+ 30 °C', { taille: 12, couleur: VERT }) + texte(X(90) + 6, Y(2.0), '+ 0,60 V', { taille: 12, couleur: VERT, ancre: 'start' });
  s += etiquette(X(48), Y(2.62), 'pente = sensibilité S = 0,020 V·°C⁻¹', { taille: 13, couleur: VERT });
  s += etiquette(X(2), Y(0.5) - 10, 'U₀ = 0,50 V', { taille: 12, couleur: BLEU, ancre: 'start' });
  return enveloppe(620, 340, s);
};

S['hysteresis'] = ({ SB = 19, SH = 21 } = {}) => {
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 16, xmax: 24, ymin: 0, ymax: 1.4, pasX: 1, pasY: 1, nomX: 'θ (°C)', nomY: 'chauffage (1 = marche)', gradY: true, fmtY: (v) => (v === 0 ? '0' : '1'), g: 56 });
  let s = svg;
  // en montée : marche jusqu'à SH puis arrêt ; en descente : arrêt jusqu'à SB puis marche
  s += polyligne([[X(16.3), Y(1)], [X(SH), Y(1)], [X(SH), Y(0)], [X(23.7), Y(0)]], { couleur: ROUGE, ep: 2.6 });
  s += polyligne([[X(23.7), Y(0) + 4], [X(SB), Y(0) + 4], [X(SB), Y(1) + 4], [X(16.3), Y(1) + 4]], { couleur: BLEU, ep: 2.6, pointilles: true });
  s += pointe(X(18), Y(1), 1, 0, { couleur: ROUGE }) + pointe(X(SH), Y(0.5), 0, 1, { couleur: ROUGE });
  s += pointe(X(22), Y(0) + 4, -1, 0, { couleur: BLEU }) + pointe(X(SB), Y(0.5) + 4, 0, -1, { couleur: BLEU });
  s += texte(X(SH) + 6, Y(0.6), `seuil haut ${SH} °C :\narrêt`, { taille: 12, couleur: ROUGE, ancre: 'start' });
  s += texte(X(SB) - 6, Y(0.6), `seuil bas ${SB} °C :\nmise en marche`, { taille: 12, couleur: BLEU, ancre: 'end' });
  s += cote(X(SB), Y(1.25), X(SH), Y(1.25), 'hystérésis', { taille: 12, dy: -6 });
  return enveloppe(620, 300, s);
};

/** Série de mesures sur un axe : points, moyenne, intervalle ± u. */
S['serie-mesures'] = ({ valeurs = [20.1, 20.4, 19.8, 20.3, 20.0], unite = 's', dec = 1, u = 0.107, lo = 19.6, hi = 20.6, pas = 0.1 } = {}) => {
  const W = 640, H = 220, g = 40, d = 40;
  const X = (v) => g + ((v - lo) / (hi - lo)) * (W - g - d);
  const y = 120;
  const m = valeurs.reduce((a, b) => a + b, 0) / valeurs.length;
  let s = rect(X(m - u), y - 40, X(m + u) - X(m - u), 60, { fond: '#e2f2e8', bord: VERT, ep: 1.2 });
  s += fleche(g - 10, y, W - d + 20, y, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  for (let v = lo; v <= hi + 1e-9; v += pas) { const big = Math.abs((v * 10) % 2) < 1e-6 || Math.abs((v * 10) % 2 - 2) < 1e-6; s += ligne(X(v), y - 4, X(v), y + 4, { couleur: ENCRE }); s += texte(X(v), y + 22, fr(v, dec), { taille: 12, couleur: ATTENUE }); }
  s += texte(W - d + 26, y + 22, unite, { taille: 12, couleur: ATTENUE, ancre: 'start' });
  const comptes = {};
  valeurs.forEach((v) => { const k = v.toFixed(3); comptes[k] = (comptes[k] || 0) + 1; s += `<circle cx="${nb(X(v))}" cy="${y - 14 * comptes[k]}" r="6" fill="${BLEU}"/>`; });
  s += ligne(X(m), y - 52, X(m), y + 8, { couleur: ROUGE, epaisseur: 2.4 });
  s += texte(X(m), y - 60, `moyenne = ${fr(m, 2)} ${unite}`, { taille: 13, couleur: ROUGE, gras: true });
  s += texte(X(m), y + 52, `bande verte : moyenne ± u, avec u = s / √n ≈ ${fr(u, 2)} ${unite}`, { taille: 13, couleur: VERT });
  s += texte(g, 30, 'points bleus : les mesures', { taille: 12, couleur: BLEU, ancre: 'start' });
  return enveloppe(W, H, s);
};

/** Intervalle d'un résultat x = valeur ± u. */
S['intervalle'] = ({ v = 24.62, u = 0.04, dec = 2, unite = 'g' } = {}) => {
  const W = 620, H = 150, g = 40, d = 40;
  const lo = v - 2.5 * u, hi = v + 2.5 * u;
  const X = (x) => g + ((x - lo) / (hi - lo)) * (W - g - d);
  const y = 80;
  let s = rect(X(v - u), y - 16, X(v + u) - X(v - u), 32, { fond: '#e2f2e8', bord: VERT, ep: 1.6 });
  s += fleche(g - 10, y, W - d + 20, y, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  for (const x of [v - 2 * u, v - u, v, v + u, v + 2 * u]) { s += ligne(X(x), y - 5, X(x), y + 5, { couleur: ENCRE }); }
  s += texte(X(v - u), y + 36, fr(v - u, dec), { taille: 13, couleur: VERT, gras: true }) + texte(X(v + u), y + 36, fr(v + u, dec), { taille: 13, couleur: VERT, gras: true });
  s += `<circle cx="${nb(X(v))}" cy="${y}" r="6" fill="${BLEU}"/>` + texte(X(v), y + 36, fr(v, dec), { taille: 13, couleur: BLEU, gras: true });
  s += texte(W / 2, 32, `m = (${fr(v, dec)} ± ${fr(u, dec)}) ${unite} : la valeur vraie est très probablement dans la bande verte`, { taille: 13 });
  s += texte(W - d + 16, y + 36, unite, { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

/** Composition en quadrature : triangle rectangle de côtés u(a), u(b). */
S['quadrature'] = ({ ua = 0.05, ub = 0.05, unite = 'g' } = {}) => {
  const k = 2400; // px par unité
  const A = [120, 230], B = [120 + ua * k, 230], C = [120, 230 - ub * k];
  let s = polygone([A, B, C], { couleur: ENCRE, fond: '#eef3fb', epaisseur: 2.2 });
  s += angleDroit(A[0], A[1], [1, 0], [0, -1], { taille: 14 });
  s += texte((A[0] + B[0]) / 2, A[1] + 24, `u(a) = ${fr(ua, 2)} ${unite}`, { taille: 13, couleur: BLEU, gras: true });
  s += texte(A[0] - 12, (A[1] + C[1]) / 2, `u(b) = ${fr(ub, 2)} ${unite}`, { taille: 13, couleur: VERT, gras: true, ancre: 'end' });
  const uy = Math.hypot(ua, ub);
  s += texte((B[0] + C[0]) / 2 + 14, (B[1] + C[1]) / 2 - 6, `u(y) ≈ ${fr(uy, 2)} ${unite}`, { taille: 13, couleur: ROUGE, gras: true, ancre: 'start' });
  s += texte(430, 70, 'u(y) = √(u(a)² + u(b)²)', { taille: 15, gras: true });
  s += texte(430, 100, 'l\'hypoténuse est plus courte\nque u(a) + u(b) = ' + fr(ua + ub, 2) + ' ' + unite, { taille: 13, couleur: ATTENUE });
  return enveloppe(620, 270, s);
};

// ═════════════════════════ Poses : 1re technologique ═════════════════════════
{
  const F = 'premiere-techno/pc-maths-sti2d-stl/energie';
  pose(F, 'chaine-moteur', 'diagramme', '## 4. La chaîne énergétique',
    'Chaîne énergétique d\'un moteur : l\'énergie électrique reçue du réseau devient de l\'énergie mécanique utile, et une partie est dissipée en chaleur.',
    { W: 640, H: 230, boites: [
      { id: 'r', x: 20, y: 40, w: 130, h: 56, t: 'Réseau', style: 'jaune', forme: 'ellipse' },
      { id: 'm', x: 255, y: 40, w: 130, h: 56, t: 'Moteur', style: 'bleu', gras: true },
      { id: 'c', x: 490, y: 40, w: 130, h: 56, t: 'Charge', style: 'vert', forme: 'ellipse' },
      { id: 'e', x: 240, y: 160, w: 160, h: 50, t: 'Environnement', style: 'rouge', forme: 'ellipse' }],
      fleches: [{ de: 'r', a: 'm', t: 'électrique' }, { de: 'm', a: 'c', t: 'mécanique' }, { de: 'm', a: 'e', t: 'thermique (pertes)', couleur: ROUGE, lx: 70, ly: 4 }],
      textes: [{ x: 320, y: 224, t: 'ellipses : réservoirs ; rectangle : convertisseur', taille: 12, couleur: ATTENUE }] });
  pose(F, 'rendements-chaine', 'bandes-energie', '### Chaîne de plusieurs convertisseurs',
    'Deux convertisseurs de rendement 80 % à la suite : il reste 0,8 × 0,8 = 64 % de l\'énergie reçue, les pertes s\'accumulent à chaque étape.',
    { E0: 100, unite: 'J', etapes: [{ nom: 'convertisseur 1', eta: 0.8 }, { nom: 'convertisseur 2', eta: 0.8 }], entree: 'énergie reçue', sortie: 'énergie utile', perte: 'pertes' });
}
{
  const F = 'premiere-techno/pc-maths-sti2d-stl/mesure-incertitudes';
  pose(F, 'cibles', 'cibles', '## 4. Justesse et fidélité',
    'L\'image de la cible : la justesse dit si les tirs sont centrés en moyenne, la fidélité s\'ils sont groupés.');
  pose(F, 'validite-g', 'comparaison-reference', '### Méthode',
    'Exemple de la fiche : g mesuré à 9,70 m·s⁻² avec u = 0,08 ; l\'écart à la référence 9,81 vaut environ 1,4 u, donc le résultat est compatible.',
    { mes: 9.70, u: 0.08, ref: 9.81, unite: 'm·s⁻²', dec: 2, nomMes: 'mesure', nomRef: 'référence' });
}
{
  const F = 'premiere-techno/pc-maths-sti2d-stl/ondes-information';
  pose(F, 'longi-transverse', 'longi-transverse', '## 3. Longitudinale ou transversale ?',
    'Dans une onde transversale, la perturbation est perpendiculaire à la propagation (corde) ; dans une onde longitudinale, elle lui est parallèle (ressort, son).');
  pose(F, 'echo', 'echo', '### Mesurer une distance par réflexion',
    'Mesure d\'une distance par écho : l\'onde fait l\'aller et le retour pendant la durée mesurée, d\'où le facteur 2.', { obstacle: 'obstacle' });
  pose(F, 'spectre-em', 'spectre-em', '### Ordonner les domaines',
    'Les domaines des ondes électromagnétiques rangés par longueur d\'onde croissante : la fréquence croît en sens inverse ; le visible va d\'environ 400 à 800 nm.');
}
{
  const F = 'premiere-techno/pc-sante-st2s/infrarouge-securite-routiere';
  pose(F, 'spectre-em', 'spectre-em', '### Le spectre électromagnétique',
    'Le spectre électromagnétique avec les limites de la fiche : l\'infrarouge commence juste au-delà du rouge, vers 0,8 µm.',
    { bornes: ['0,01 nm', '10 nm', '0,4 µm', '0,8 µm', '1 mm', '1 m'] });
  pose(F, 'loi-wien', 'planck', '### La loi de Wien',
    'Rayonnement émis par des corps à trois températures : plus le corps est chaud, plus le maximum d\'émission est à courte longueur d\'onde (loi de Wien).');
  pose(F, 'distances-arret', 'distance-arret', '## 6. Influence de la vitesse',
    'Distances d\'arrêt de l\'exemple de la fiche : en doublant la vitesse, la distance de réaction double mais la distance de freinage quadruple.');
}
{
  const F = 'premiere-techno/pc-sante-st2s/lumiere-vision-lentilles';
  pose(F, 'oeil', 'oeil-coupe', '### Le mécanisme de la vision',
    'Coupe simplifiée de l\'œil : la lumière traverse la cornée, la pupille et le cristallin, puis forme une image renversée sur la rétine.');
  pose(F, 'conv-div', 'lentilles-conv-div', '## 2. Les lentilles minces',
    'Un faisceau parallèle converge en F′ après une lentille convergente ; après une lentille divergente, il s\'écarte comme s\'il venait de F′.');
  pose(F, 'defauts-oeil', 'defauts-oeil', '## 6. Les défauts de l\'œil et leur correction',
    'Pour un objet éloigné, l\'œil myope forme l\'image avant la rétine et l\'œil hypermétrope derrière : on les corrige par un verre divergent ou convergent.');
}
{
  const F = 'premiere-techno/pc-sante-st2s/ondes-sonores-audition';
  pose(F, 'domaines-frequences', 'echelle-frequences', '## 3. Les sons audibles, les infrasons et les ultrasons',
    'Les trois domaines de fréquences : l\'oreille d\'un jeune adulte entend de 20 Hz à 20 kHz ; l\'échographie utilise des ultrasons.',
    { exemples: [{ zone: 'audible', t: 'voix, musique' }, { zone: 'ultra', t: 'échographie, sifflet\npour chien' }] });
  pose(F, 'niveaux-db', 'echelle-db', '### Quelques repères à connaître',
    'Les repères de niveau sonore de la fiche ; en violet, l\'intensité sonore correspondante : chaque fois 10 dB de plus, l\'intensité est multipliée par 10.',
    { intensites: true, reperes: [{ L: 0, t: 'seuil d\'audibilité', I: '10⁻¹²', ancre: 'start' }, { L: 30, t: 'chuchotement', I: '10⁻⁹' }, { L: 60, t: 'conversation', I: '10⁻⁶' }, { L: 85, t: 'seuil de risque', I: '≈ 3 × 10⁻⁴' }, { L: 100, t: 'concert', I: '10⁻²' }, { L: 120, t: 'douleur', I: '1', ancre: 'end' }] });
  pose(F, 'exposition', 'exposition-bruit', '## 6. Les risques auditifs : niveau ET durée',
    'Durée d\'exposition à risque selon le niveau sonore : chaque fois que le niveau augmente de 3 dB, la durée tolérable est divisée par deux.');
}
{
  const F = 'premiere-techno/pc-sante-st2s/oxydoreduction-desinfectants';
  pose(F, 'transfert-electrons', 'diagramme', '## 1. Oxydant, réducteur : une histoire d\'électrons',
    'Réaction entre le cuivre et les ions argent : le cuivre (réducteur) cède deux électrons, captés par deux ions argent (oxydant).',
    { W: 640, H: 260, boites: [
      { id: 'cu', x: 40, y: 30, w: 200, h: 50, t: 'Cu (réducteur)', style: 'orange', gras: true },
      { id: 'cu2', x: 40, y: 190, w: 200, h: 50, t: 'Cu²⁺', style: 'orange' },
      { id: 'ag', x: 400, y: 30, w: 200, h: 50, t: '2 Ag⁺ (oxydant)', style: 'bleu', gras: true },
      { id: 'ag0', x: 400, y: 190, w: 200, h: 50, t: '2 Ag', style: 'bleu' }],
      fleches: [{ de: 'cu', a: 'cu2', t: 'oxydation :\ncède 2 e⁻', lx: -70, ly: -6, couleur: ORANGE },
        { de: 'ag', a: 'ag0', t: 'réduction :\ncapte 2 e⁻', lx: 70, ly: -6, couleur: BLEU },
        { depuis: [250, 120], vers: [390, 120], t: '2 e⁻ transférés', couleur: ROUGE, ep: 2.6 }] });
  pose(F, 'dilution', 'dilution', '### Le geste au laboratoire',
    'Les gestes d\'une dilution : prélever à la pipette jaugée, verser dans la fiole jaugée, compléter avec de l\'eau jusqu\'au trait, puis homogénéiser.');
}
{
  const F = 'premiere-techno/pc-sante-st2s/risques-electriques';
  pose(F, 'tension-secteur', 'sinus-secteur', '### Valeurs maximale, minimale et efficace',
    'Tension du secteur : sinusoïde de période 20 ms (50 Hz) qui varie entre +325 V et −325 V ; le voltmètre affiche la valeur efficace 230 V.');
  pose(F, 'effets-courant', 'echelle-courant', '### Les effets du courant selon son intensité',
    'Effets du courant alternatif qui traverse le corps selon son intensité, du seuil de perception (1 mA) à la fibrillation du cœur (100 mA).');
  pose(F, 'differentiel', 'diagramme', '### Le disjoncteur différentiel : protéger les personnes',
    'Le disjoncteur différentiel compare le courant qui part par la phase et celui qui revient par le neutre ; une fuite de 30 mA ou plus le fait couper.',
    { W: 660, H: 280, boites: [
      { id: 'dd', x: 20, y: 70, w: 190, h: 110, t: 'disjoncteur\ndifférentiel\ncompare I phase\net I neutre', style: 'bleu' },
      { id: 'ap', x: 450, y: 70, w: 190, h: 110, t: 'appareil\n(carcasse\nmétallique)', style: 'gris' },
      { id: 'te', x: 450, y: 220, w: 190, h: 46, t: 'terre (le sol)', style: 'vert' }],
      fleches: [{ depuis: [210, 95], vers: [450, 95], t: 'phase : I phase', couleur: ROUGE },
        { depuis: [450, 155], vers: [210, 155], t: 'neutre : I neutre', couleur: BLEU, ly: 18 },
        { de: 'ap', a: 'te', t: 'fuite (défaut, personne)', couleur: ORANGE, lx: -96, ly: 4, pointilles: true }],
      textes: [{ x: 115, y: 220, t: 'si I phase − I neutre ≥ 30 mA :', taille: 13, gras: true, couleur: ROUGE }, { x: 115, y: 238, t: 'coupure immédiate', taille: 13, gras: true, couleur: ROUGE },
        { x: 330, y: 40, t: 'sans fuite : I phase = I neutre', taille: 13, couleur: ATTENUE }] });
}
{
  const F = 'premiere-techno/pc-sante-st2s/securite-chimique-acide-base';
  pose(F, 'echelle-ph', 'echelle-ph', '### L\'échelle d\'acidité (à 25 °C)',
    'Échelle de pH à 25 °C avec les exemples de la fiche ; quand le pH diminue de 1, la concentration en ions oxonium est multipliée par 10.',
    { concentrations: true, exemples: [{ pH: 2, t: 'suc gastrique' }, { pH: 7, t: 'eau pure', ancre: 'end' }, { pH: 7.4, t: 'sang', ancre: 'start' }, { pH: 12, t: 'déboucheur' }] });
  pose(F, 'transfert-proton', 'diagramme', '### La réaction acido-basique',
    'Réaction entre l\'ammoniac et l\'ion oxonium : l\'acide H₃O⁺ cède un ion H⁺ à la base NH₃ ; il se forme NH₄⁺ et H₂O.',
    { W: 640, H: 250, boites: [
      { id: 'a1', x: 40, y: 30, w: 200, h: 50, t: 'H₃O⁺ (acide)', style: 'rouge', gras: true },
      { id: 'b1', x: 40, y: 180, w: 200, h: 50, t: 'H₂O', style: 'rouge' },
      { id: 'b2', x: 400, y: 30, w: 200, h: 50, t: 'NH₃ (base)', style: 'bleu', gras: true },
      { id: 'a2', x: 400, y: 180, w: 200, h: 50, t: 'NH₄⁺', style: 'bleu' }],
      fleches: [{ de: 'a1', a: 'b1', t: 'cède H⁺', lx: -40, ly: 0, couleur: ROUGE }, { de: 'b2', a: 'a2', t: 'capte H⁺', lx: 42, ly: 0, couleur: BLEU },
        { depuis: [250, 115], vers: [390, 115], t: 'H⁺', couleur: VIOLET, ep: 2.6 }] });
}
{
  const F = 'premiere-techno/spcl-stl/analyses-spectroscopies-dosages';
  pose(F, 'cercle-chromatique', 'cercle-chromatique', '### Couleur et couleur complémentaire',
    'Cercle des couleurs : la couleur perçue d\'une solution est la complémentaire, diamétralement opposée, de la couleur qu\'elle absorbe le plus.');
  pose(F, 'etalonnage', 'etalonnage', '### La méthode, dans l\'ordre',
    'Droite d\'étalonnage de l\'exemple : A = 4,0 × 10³ × c ; l\'absorbance 0,52 de l\'inconnue correspond à c = 1,3 × 10⁻⁴ mol·L⁻¹.',
    { k: 4.0e3, Ax: 0.52, cmax: 2.4e-4, pas: 2e-5, Amax: 1.0 });
  pose(F, 'montage-titrage', 'montage-titrage', '### L\'équivalence',
    'Montage d\'un titrage : la solution titrante est versée à la burette dans la solution à titrer, agitée en permanence ; une sonde suit la transformation.');
}
{
  const F = 'premiere-techno/spcl-stl/appareil-photo-image-numerique';
  pose(F, 'modele-appareil', 'appareil-photo', '## 1. Le modèle de l\'appareil photo',
    'Modèle de l\'appareil photo : l\'objectif (lentille convergente) forme sur le capteur une image réelle, renversée et réduite ; le diaphragme règle la lumière.');
  pose(F, 'nombre-ouverture', 'diaphragmes', '## 2. Le nombre d\'ouverture',
    'Exemple de la fiche, objectif de 50 mm : diaphragme de 25 mm (f/2) puis de 12,5 mm (f/4) ; le diamètre est divisé par 2 et la lumière par 4.');
}
{
  const F = 'premiere-techno/spcl-stl/image-couleur-vision';
  pose(F, 'oeil-modele', 'oeil-reduit', '## 1. Le modèle optique de l\'œil',
    'Modèle optique de l\'œil : le cristallin est une lentille convergente, la rétine un écran, l\'iris un diaphragme ; l\'image est réelle et renversée.');
  pose(F, 'synthese-additive', 'synthese-couleurs', '## 5. Synthèse additive (mélange de lumières)',
    'Synthèse additive : rouge et vert donnent jaune, vert et bleu donnent cyan, rouge et bleu donnent magenta, les trois ensemble donnent du blanc.', { mode: 'additive' });
  pose(F, 'synthese-soustractive', 'synthese-couleurs', '## 6. Synthèse soustractive (filtres et pigments)',
    'Synthèse soustractive : cyan et magenta donnent bleu, magenta et jaune donnent rouge, cyan et jaune donnent vert, les trois ensemble donnent du noir.', { mode: 'soustractive' });
}
{
  const F = 'premiere-techno/spcl-stl/image-photographie-lentilles';
  pose(F, 'stenope', 'stenope', '## 1. La chambre noire et le sténopé',
    'Chambre noire : chaque point de l\'objet envoie un rayon rectiligne à travers le petit trou ; l\'image sur le fond de la boîte est réelle et renversée.');
  pose(F, 'conjugaison-exemple', 'lentille-image', '## 6. La relation de conjugaison de Descartes',
    'Construction de l\'exemple de la fiche (f′ = 10 cm, objet à 30 cm) : l\'image se forme 15 cm après la lentille, renversée et deux fois plus petite.',
    { W: 640, H: 300, xO: 385, yA: 160, f: 120, oa: -360, ab: 48, echelle: { u: 12, unite: 'cm' }, demiL: 100 });
  pose(F, 'loupe', 'lentille-image', '## 9. Le principe de la loupe',
    'Loupe de l\'exemple (f′ = 5 cm, objet à 3 cm) : les rayons sortent en divergeant ; leurs prolongements donnent une image virtuelle, droite, 2,5 fois plus grande.',
    { W: 640, H: 300, xO: 400, yA: 200, f: 150, oa: -90, ab: 30, echelle: { u: 30, unite: 'cm' }, demiL: 90 });
}
{
  const F = 'premiere-techno/spcl-stl/instrumentation-chaine-mesure';
  pose(F, 'chaine-mesure', 'diagramme', '## 2. La chaîne de mesure',
    'Les maillons de la chaîne de mesure : le capteur transforme la grandeur physique en signal électrique, le conditionneur l\'adapte, le CAN le code en nombre.',
    { W: 660, H: 200, boites: [
      { id: 'g', x: 6, y: 60, w: 110, h: 60, t: 'grandeur\nphysique', style: 'gris', forme: 'ellipse' },
      { id: 'c', x: 150, y: 60, w: 100, h: 60, t: 'capteur', style: 'bleu', gras: true },
      { id: 'k', x: 300, y: 60, w: 120, h: 60, t: 'conditionneur', style: 'bleu', gras: true },
      { id: 'n', x: 460, y: 60, w: 70, h: 60, t: 'CAN', style: 'bleu', gras: true },
      { id: 't', x: 560, y: 60, w: 96, h: 60, t: 'traitement,\naffichage', style: 'vert' }],
      fleches: [{ de: 'g', a: 'c' }, { de: 'c', a: 'k', t: 'signal\nélectrique', ly: -48, taille: 12 }, { de: 'k', a: 'n', t: 'tension\nadaptée', ly: -48, taille: 12 }, { de: 'n', a: 't', t: 'nombre', ly: -40, taille: 12 }],
      textes: [{ x: 330, y: 160, t: 'ex. : sonde de température → amplification → codage → « 37,0 °C » affiché', taille: 12, couleur: ATTENUE }] });
  pose(F, 'caracteristique', 'caracteristique-capteur', '### Capteur linéaire',
    'Caractéristique du capteur de l\'exemple : une droite d\'ordonnée à l\'origine 0,50 V et de pente 0,020 V·°C⁻¹ ; une tension de 1,30 V correspond à 40 °C.');
  pose(F, 'hysteresis', 'hysteresis', '### L\'hystérésis',
    'Régulation avec hystérésis de l\'exemple : le chauffage s\'arrête à 21 °C en montée et ne redémarre qu\'à 19 °C en descente.');
}
{
  const F = 'premiere-techno/spcl-stl/mesure-incertitudes-labo';
  pose(F, 'cibles', 'cibles', '## 3. Justesse et fidélité',
    'L\'image de la cible : la justesse dit si les tirs sont centrés en moyenne, la fidélité s\'ils sont groupés.');
  pose(F, 'serie-type-a', 'serie-mesures', '## 5. Incertitude-type de type A — la dispersion d\'une série',
    'Les cinq durées de l\'exemple placées sur un axe : leur moyenne 20,12 s, et la bande moyenne ± u avec u ≈ 0,11 s.');
  pose(F, 'intervalle-resultat', 'intervalle', '## 9. Exprimer le résultat : valeur, incertitude, unité',
    'Lecture du résultat m = (24,62 ± 0,04) g : la valeur vraie est très probablement comprise entre 24,58 g et 24,66 g.');
}
{
  const F = 'premiere-techno/spcl-stl/securite-chimie-verte';
  pose(F, 'economie-atomes', 'barre-repartition', '## 6. L\'économie d\'atomes',
    'Élimination de l\'exemple, pour une mole : sur 149 g de réactifs, seuls 28 g se retrouvent dans l\'éthène voulu (EA ≈ 19 %), le reste est du déchet.',
    { titre: 'C₂H₅Br + NaOH → C₂H₄ + NaBr + H₂O   (masses pour une mole, en g)', unite: 'g', parts: [{ v: 28, t: 'éthène (voulu)', style: 'vert' }, { v: 103, t: 'NaBr (déchet)', style: 'rouge' }, { v: 18, t: 'eau (déchet)', style: 'orange', ancre: 'end' }] });
}
{
  const F = 'premiere-techno/spcl-stl/syntheses-extraction-purification';
  pose(F, 'ampoule', 'ampoule-decanter', '### Repérer les phases — la densité',
    'Extraction au dichlorométhane (d = 1,33) : plus dense que l\'eau, la phase organique qui contient le produit est en bas de l\'ampoule à décanter.');
  pose(F, 'distillation', 'distillation', '## 6. Purifier par distillation',
    'Montage de distillation fractionnée : les vapeurs montent dans la colonne de Vigreux, se condensent dans le réfrigérant et le distillat est recueilli.');
  pose(F, 'ccm', 'ccm', '### Le rapport frontal',
    'Plaque de CCM de l\'exemple : la tache du produit a migré de 3,6 cm et le front de l\'éluant de 4,8 cm, d\'où Rf = 0,75.');
}

// ───────────────────────── Enseignement scientifique (1re) ─────────────────────────

S['echelles-biodiversite'] = () => {
  let s = '';
  s += rect(20, 20, 600, 250, { fond: '#e8f5ee', bord: VERT, ep: 2, rx: 14 });
  s += texte(40, 46, 'Diversité des écosystèmes', { taille: 15, gras: true, couleur: VERT, ancre: 'start' }) + texte(40, 66, 'forêts, océans, prairies…', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  s += rect(60, 86, 520, 170, { fond: '#eef3fb', bord: BLEU, ep: 2, rx: 12 });
  s += texte(80, 112, 'Diversité des espèces (dans un écosystème)', { taille: 15, gras: true, couleur: BLEU, ancre: 'start' });
  s += rect(100, 140, 440, 100, { fond: '#fdf0e3', bord: ORANGE, ep: 2, rx: 10 });
  s += texte(120, 166, 'Diversité génétique (dans une espèce)', { taille: 15, gras: true, couleur: ORANGE, ancre: 'start' });
  s += texte(120, 188, 'les individus d\'une même espèce', { taille: 13, ancre: 'start' }) + texte(120, 206, 'n\'ont pas tous les mêmes allèles', { taille: 13, ancre: 'start' });
  const r = alea(3);
  for (let i = 0; i < 6; i++) s += disque(420 + i * 18, 200 + (i % 2) * 14, 7, ['#c0392b', '#e67e22', '#f1c40f', '#c0392b', '#8e44ad', '#e67e22'][i]);
  return enveloppe(640, 290, s);
};

S['speciation'] = () => diagramme({ W: 660, H: 300, boites: [
  { id: 'p', x: 230, y: 16, w: 200, h: 54, t: 'une population\nd\'une espèce', style: 'bleu' },
  { id: 'a', x: 40, y: 104, w: 200, h: 54, t: 'population A\n(évolue séparément)', style: 'vert' },
  { id: 'b', x: 420, y: 104, w: 200, h: 54, t: 'population B\n(évolue séparément)', style: 'orange' },
  { id: 'A', x: 40, y: 226, w: 200, h: 46, t: 'espèce 1', style: 'vert', gras: true },
  { id: 'B', x: 420, y: 226, w: 200, h: 46, t: 'espèce 2', style: 'orange', gras: true }],
  fleches: [{ de: 'p', a: 'a' }, { de: 'p', a: 'b' }, { de: 'a', a: 'A' }, { de: 'b', a: 'B' }],
  textes: [{ x: 140, y: 196, t: 'nombreuses générations', taille: 12, couleur: ATTENUE, ancre: 'end', }, { x: 530, y: 196, t: 'nombreuses générations', taille: 12, couleur: ATTENUE, ancre: 'start' }],
  extra: rect(318, 90, 24, 110, { fond: '#9aa6b2', bord: ENCRE, ep: 1.4 }) + texte(330, 218, 'barrière', { taille: 12 }) + texte(330, 234, '(mer, montagne)', { taille: 12, couleur: ATTENUE }) + texte(330, 290, 'les deux espèces ne peuvent plus se reproduire entre elles', { taille: 12, couleur: ROUGE }) });

S['bilan-radiatif'] = ({ valeurs = false } = {}) => {
  let s = rect(0, 0, 660, 190, { fond: '#eaf3fb', bord: 'none', ep: 0 });
  s += rect(0, 250, 660, 70, { fond: '#d9c9a4', bord: 'none', ep: 0 });
  s += rect(0, 150, 660, 100, { fond: '#f1f6fb', bord: 'none', ep: 0, opacite: 0.6 });
  s += texte(650, 240, 'atmosphère (gaz à effet de serre)', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  s += texte(650, 300, 'sol', { taille: 13, ancre: 'end' });
  s += `<circle cx="40" cy="30" r="22" fill="#ffd34d" stroke="${ORANGE}" stroke-width="2"/>` + texte(70, 36, 'Soleil', { taille: 13, ancre: 'start' });
  const v = (a, b) => (valeurs ? `${a}\n${b}` : a);
  s += fleche(110, 50, 200, 246, { couleur: '#e0a030', epaisseur: 5 }) + texte(118, 120, valeurs ? 'reçu : 340 W/m²' : 'rayonnement\nsolaire reçu', { taille: 13, couleur: '#b07a10', ancre: 'end' });
  s += fleche(210, 246, 280, 40, { couleur: '#7aa6d6', epaisseur: 3 }) + texte(290, 54, valeurs ? 'réfléchi (albédo 0,30)\n≈ 100 W/m²' : 'réfléchi (albédo)', { taille: 13, couleur: BLEU, ancre: 'start' });
  s += fleche(450, 246, 520, 30, { couleur: ROUGE, epaisseur: 3.4 }) + texte(530, 40, valeurs ? 'infrarouge émis\nvers l\'espace' : 'infrarouge\nvers l\'espace', { taille: 13, couleur: ROUGE, ancre: 'start' });
  s += fleche(380, 246, 400, 160, { couleur: ROUGE, epaisseur: 2.6 }) + flecheCourbe(400, 160, 360, 170, 350, 244, { couleur: VIOLET, ep: 2.6 });
  s += texte(330, 210, 'renvoyé\nvers le sol', { taille: 12, couleur: VIOLET, ancre: 'end' });
  s += texte(240, 270, valeurs ? 'absorbé par la Terre : ≈ 240 W/m²' : 'absorbé : réchauffe le sol', { taille: 13, ancre: 'start' });
  s += etiquette(330, 140, 'effet de serre', { taille: 13, gras: true, couleur: VIOLET, ancre: 'end' });
  return enveloppe(660, 320, s);
};

S['spectre-harmoniques'] = ({ f1 = 440, amps = [1, 0.6, 0.35, 0.2, 0.12], titre = '' } = {}) => {
  const n = amps.length;
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 0, xmax: f1 * (n + 0.6), ymin: 0, ymax: 1.15, pasX: f1, pasY: 0.25, gradY: false, nomX: 'fréquence (Hz)', nomY: 'amplitude', fmtX: (v) => fr(v, 0), g: 40 });
  let s = svg;
  amps.forEach((a, i) => {
    const f = f1 * (i + 1);
    s += ligne(X(f), Y(0), X(f), Y(a), { couleur: i ? ORANGE : BLEU, epaisseur: 6 });
    s += texte(X(f), Y(a) - 10, i ? `rang ${i + 1}` : 'fondamental', { taille: 12, couleur: i ? ORANGE : BLEU, gras: true });
  });
  if (titre) s += texte(400, 50, titre, { taille: 13, couleur: ATTENUE });
  return enveloppe(620, 300, s);
};

S['gamme'] = () => {
  const W = 640, g = 40, d = 40;
  const X = (f) => g + ((f - 400) / 520) * (W - g - d);
  const y = 110;
  let s = fleche(g - 10, y, W - d + 20, y, { couleur: AXE, epaisseur: 1.8, pointe: 9 });
  for (let f = 400; f <= 900; f += 50) { s += ligne(X(f), y - 4, X(f), y + 4, { couleur: AXE }); s += texte(X(f), y + 22, String(f), { taille: 12, couleur: ATTENUE }); }
  s += texte(W - d, y + 40, 'fréquence (Hz)', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  for (const [f, t, c] of [[440, 'la (440 Hz)', BLEU], [660, 'quinte (660 Hz)', VERT], [880, 'la (880 Hz)', BLEU]]) {
    s += `<circle cx="${nb(X(f))}" cy="${y}" r="7" fill="${c}"/>` + texte(X(f), y - 16, t, { taille: 13, gras: true, couleur: c });
  }
  s += flecheCourbe(X(440), y - 34, (X(440) + X(660)) / 2, 30, X(660), y - 34, { couleur: VERT, ep: 1.8 }) + texte((X(440) + X(660)) / 2, 36, '× 3/2 : quinte', { taille: 13, couleur: VERT });
  s += flecheCourbe(X(440), y + 50, (X(440) + X(880)) / 2, 190, X(880), y + 50, { couleur: BLEU, ep: 1.8 }) + texte((X(440) + X(880)) / 2, 170, '× 2 : octave', { taille: 13, couleur: BLEU });
  return enveloppe(W, 200, s);
};

/** Numérisation : échantillonnage (instants réguliers) et quantification (niveaux, ici 3 bits). */
S['numerisation'] = () => {
  const n = 3, N = 2 ** n;
  const f = (t) => 3.7 + 3.0 * Math.sin(2 * Math.PI * t / 10 + 0.3) + 0.5 * Math.sin(2 * Math.PI * t / 4);
  const { svg, X, Y } = graphe({ W: 640, H: 330, xmin: 0, xmax: 20, ymin: 0, ymax: N, pasX: 1, pasY: 1, gradX: false, nomX: 'temps', nomY: 'niveau codé', fmtY: (v) => (v < N ? v.toString(2).padStart(3, '0') : ''), g: 58 });
  let s = svg + trace(f, 0, 20, X, Y, { couleur: BLEU, ep: 2.2 });
  const pts = [];
  for (let k = 0; k < 20; k++) { const q = Math.min(N - 1, Math.max(0, Math.floor(f(k)))); pts.push([X(k), Y(q)], [X(k + 1), Y(q)]); s += ligne(X(k), Y(0), X(k), Y(f(k)), { couleur: GRILLE, epaisseur: 1 }); s += `<circle cx="${nb(X(k))}" cy="${nb(Y(f(k)))}" r="3.5" fill="${BLEU}"/>`; }
  s += polyligne(pts, { couleur: ROUGE, ep: 2.4, joint: 'miter' });
  s += cote(X(4), Y(N) - 4, X(5), Y(N) - 4, 'Tₑ', { taille: 13 });
  s += texte(600, 30, 'en bleu : signal analogique et échantillons', { taille: 12, couleur: BLEU, ancre: 'end' }) + texte(600, 48, 'en rouge : signal numérique (3 bits → 8 niveaux)', { taille: 12, couleur: ROUGE, ancre: 'end' });
  return enveloppe(640, 330, s);
};

/** Maille du chlorure de sodium (cubique à faces centrées), perspective cavalière. */
S['maille-nacl'] = () => {
  const a = 200, ox = 150, oy = 270, k = 0.45, ang = Math.PI / 6;
  const P = (x, y, z) => [ox + x * a + z * a * k * Math.cos(ang), oy - y * a - z * a * k * Math.sin(ang)];
  let s = '';
  const at = [];
  for (let i = 0; i <= 2; i++) for (let j = 0; j <= 2; j++) for (let l = 0; l <= 2; l++) at.push([i / 2, j / 2, l / 2, (i + j + l) % 2 === 0 ? 'Cl' : 'Na']);
  // arêtes
  const ar = [[0, 0, 0, 1, 0, 0], [0, 1, 0, 1, 1, 0], [0, 0, 1, 1, 0, 1], [0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 0], [1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 1, 1], [1, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 1], [0, 1, 0, 0, 1, 1], [1, 1, 0, 1, 1, 1]];
  ar.forEach(([x1, y1, z1, x2, y2, z2]) => { s += ligne(...P(x1, y1, z1), ...P(x2, y2, z2), { couleur: ATTENUE, epaisseur: 1.4 }); });
  at.sort((p, q) => q[2] - p[2]).forEach(([x, y, z, e]) => { const [px, py] = P(x, y, z); s += e === 'Cl' ? disque(px, py, 15, '#4caf50', { bord: '#2e7d32' }) : disque(px, py, 8, '#9c6ade', { bord: '#5e35b1' }); });
  s += disque(480, 80, 15, '#4caf50', { bord: '#2e7d32' }) + texte(504, 85, 'ion chlorure Cl⁻', { taille: 13, ancre: 'start' });
  s += disque(480, 120, 8, '#9c6ade', { bord: '#5e35b1' }) + texte(504, 125, 'ion sodium Na⁺', { taille: 13, ancre: 'start' });
  s += texte(470, 170, 'la maille cubique se\nrépète dans les trois\ndirections de l\'espace', { taille: 12, ancre: 'start', couleur: ATTENUE });
  s += texte(470, 250, 'tailles relatives\nschématiques', { taille: 12, ancre: 'start', couleur: ATTENUE });
  return enveloppe(660, 300, s);
};

S['cristal-amorphe'] = () => {
  let s = '';
  for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) s += disque(50 + i * 34, 50 + j * 34, 13, '#9ec5f0', { bord: BLEU });
  const r = alea(9); let pts = [];
  while (pts.length < 34) { const p = [370 + r() * 200, 40 + r() * 190]; if (pts.every((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) > 27)) pts.push(p); }
  pts.forEach(([x, y]) => { s += disque(x, y, 13, '#f3d2a0', { bord: ORANGE }); });
  s += texte(135, 268, 'cristal : ordonné et périodique', { taille: 13, gras: true }) + texte(135, 286, '(sel, glace, diamant…)', { taille: 12, couleur: ATTENUE });
  s += texte(470, 268, 'solide amorphe : désordonné', { taille: 13, gras: true }) + texte(470, 286, '(verre)', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 296, s);
};

// ───────────────────────── Molécules (formules développées, modèles) ─────────────────────────

/** Formule développée : atomes [x, y, symbole, couleur?] (unités de grille), liaisons [i, j, ordre]. */
function formule(ox, oy, u, atomes, liaisons, { taille = 17, groupe = null, fondGroupe = '#eef3fb' } = {}) {
  const P = (i) => [ox + atomes[i][0] * u, oy + atomes[i][1] * u];
  let s = '';
  if (groupe) {
    const xs = groupe.map((i) => P(i)[0]), ys = groupe.map((i) => P(i)[1]);
    s += rect(Math.min(...xs) - 16, Math.min(...ys) - 16, Math.max(...xs) - Math.min(...xs) + 32, Math.max(...ys) - Math.min(...ys) + 32, { fond: fondGroupe, bord: 'none', ep: 0, rx: 8 });
  }
  for (const [i, j, o = 1] of liaisons) {
    const [x1, y1] = P(i), [x2, y2] = P(j);
    const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L, ny = (x2 - x1) / L;
    const r = 11, ax = x1 + ((x2 - x1) / L) * r, ay = y1 + ((y2 - y1) / L) * r, bx = x2 - ((x2 - x1) / L) * r, by = y2 - ((y2 - y1) / L) * r;
    if (o === 1) s += ligne(ax, ay, bx, by, { couleur: ENCRE, epaisseur: 1.8 });
    else for (const k of [-3, 3]) s += ligne(ax + nx * k, ay + ny * k, bx + nx * k, by + ny * k, { couleur: ENCRE, epaisseur: 1.8 });
  }
  atomes.forEach((a, i) => { const [x, y] = P(i); s += texte(x, y + taille * 0.36, a[2], { taille, gras: a[2] !== 'H', couleur: a[3] || ENCRE }); });
  return s;
}

S['familles-organiques'] = () => {
  const u = 34;
  let s = '';
  const H3 = (i, x, y) => [[x - 1, y, 'H'], [x, y - 1, 'H'], [x, y + 1, 'H']].map((a) => a);
  const cadre = (x, y, w, h, c) => rect(x, y, w, h, { fond: c, bord: 'none', ep: 0, rx: 8, opacite: 0.35 });
  // éthanol
  s += formule(80, 64, u, [[0, 0, 'C'], [1, 0, 'C'], [2, 0, 'O', ROUGE], [3, 0, 'H', ROUGE], [-1, 0, 'H'], [0, -1, 'H'], [0, 1, 'H'], [1, -1, 'H'], [1, 1, 'H']], [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5], [0, 6], [1, 7], [1, 8]], { groupe: [2, 3], fondGroupe: '#f9d6d6' });
  s += texte(130, 136, 'éthanol : alcool (–OH)', { taille: 14, gras: true });
  // éthanal
  s += formule(400, 64, u, [[0, 0, 'C'], [1, 0, 'C', BLEU], [1, -1, 'O', BLEU], [2, 0, 'H', BLEU], [-1, 0, 'H'], [0, -1, 'H'], [0, 1, 'H']], [[0, 1], [1, 2, 2], [1, 3], [0, 4], [0, 5], [0, 6]], { groupe: [1, 2, 3], fondGroupe: '#d6e4f7' });
  s += texte(440, 136, 'éthanal : aldéhyde (–CHO)', { taille: 14, gras: true });
  // propanone
  s += formule(100, 222, u, [[0, 0, 'C'], [1, 0, 'C', VERT], [2, 0, 'C'], [1, -1, 'O', VERT], [-1, 0, 'H'], [0, -1, 'H'], [0, 1, 'H'], [3, 0, 'H'], [2, -1, 'H'], [2, 1, 'H']], [[0, 1], [1, 2], [1, 3, 2], [0, 4], [0, 5], [0, 6], [2, 7], [2, 8], [2, 9]], { groupe: [1, 3], fondGroupe: '#d4eedd' });
  s += texte(135, 294, 'propanone : cétone (C=O entre deux C)', { taille: 14, gras: true });
  // acide éthanoïque
  s += formule(400, 222, u, [[0, 0, 'C'], [1, 0, 'C', VIOLET], [1, -1, 'O', VIOLET], [2, 0, 'O', VIOLET], [3, 0, 'H', VIOLET], [-1, 0, 'H'], [0, -1, 'H'], [0, 1, 'H']], [[0, 1], [1, 2, 2], [1, 3], [3, 4], [0, 5], [0, 6], [0, 7]], { groupe: [1, 2, 3, 4], fondGroupe: '#ebdcf6' });
  s += texte(460, 294, 'acide éthanoïque (–COOH)', { taille: 14, gras: true });
  return enveloppe(660, 310, s);
};

/** Les quatre écritures de l'éthanol. */
S['ecritures-ethanol'] = () => {
  const u = 34;
  let s = texte(90, 40, 'brute', { taille: 13, couleur: ATTENUE }) + texte(90, 80, 'C₂H₆O', { taille: 20, gras: true });
  s += texte(330, 40, 'développée', { taille: 13, couleur: ATTENUE });
  s += formule(262, 98, u, [[0, 0, 'C'], [1, 0, 'C'], [2, 0, 'O'], [3, 0, 'H'], [-1, 0, 'H'], [0, -1, 'H'], [0, 1, 'H'], [1, -1, 'H'], [1, 1, 'H']], [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5], [0, 6], [1, 7], [1, 8]]);
  s += texte(90, 180, 'semi-développée', { taille: 13, couleur: ATTENUE }) + texte(90, 220, 'CH₃–CH₂–OH', { taille: 20, gras: true });
  s += texte(500, 180, 'topologique', { taille: 13, couleur: ATTENUE });
  // zigzag à 120° : deux segments puis OH
  const L = 46, a = Math.PI / 6;
  const p0 = [440, 235], p1 = [p0[0] + L * Math.cos(a), p0[1] - L * Math.sin(a)], p2 = [p1[0] + L * Math.cos(a), p1[1] + L * Math.sin(a)];
  s += polyligne([p0, p1, [p2[0] - 8 * Math.cos(a), p2[1] - 8 * Math.sin(a)]], { couleur: ENCRE, ep: 2.4 }) + texte(p2[0] + 14, p2[1] + 6, 'OH', { taille: 18, gras: true });
  s += texte(500, 268, 'chaque sommet ou extrémité = un C', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 280, s);
};

/** Squelettes en écriture topologique : linéaire, ramifié, cyclique. */
S['squelettes'] = () => {
  const L = 40, a = Math.PI / 6;
  const zig = (x, y, n) => { const p = [[x, y]]; for (let i = 1; i <= n; i++) p.push([x + i * L * Math.cos(a), y + (i % 2 ? -1 : 0) * L * Math.sin(a)]); return p; };
  let s = '';
  const lin = zig(40, 120, 4);
  s += polyligne(lin, { couleur: ENCRE, ep: 2.6 }) + texte(110, 190, 'linéaire : pentane', { taille: 14, gras: true });
  const ram = zig(250, 120, 3);
  s += polyligne(ram, { couleur: ENCRE, ep: 2.6 }) + ligne(ram[1][0], ram[1][1], ram[1][0], ram[1][1] - L, { couleur: ENCRE, epaisseur: 2.6 });
  s += texte(310, 190, 'ramifié : 2-méthylbutane', { taille: 14, gras: true });
  const cx = 540, cy = 105, R = 40; const hex = [];
  for (let i = 0; i < 6; i++) hex.push([cx + R * Math.cos(Math.PI / 6 + (i * Math.PI) / 3), cy + R * Math.sin(Math.PI / 6 + (i * Math.PI) / 3)]);
  s += polygone(hex, { couleur: ENCRE, epaisseur: 2.6 }) + texte(540, 190, 'cyclique : cyclohexane', { taille: 14, gras: true });
  s += texte(330, 226, 'les atomes d\'hydrogène liés aux carbones sont sous-entendus', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 240, s);
};

/** Modèles moléculaires (boules) avec géométrie correcte. */
function modele(type, cx, cy, k = 1) {
  const O = (x, y) => disque(x, y, 17 * k, '#e53935', { bord: '#9b1c1c' });
  const Hh = (x, y) => disque(x, y, 10 * k, '#ffffff', { bord: '#555' });
  const C = (x, y) => disque(x, y, 16 * k, '#333333', { bord: '#000' });
  const N = (x, y) => disque(x, y, 16 * k, '#3b6fd8', { bord: '#1d3f8a' });
  const d = 26 * k;
  switch (type) {
    case 'O2': return O(cx - 13 * k, cy) + O(cx + 13 * k, cy);
    case 'H2': return Hh(cx - 8 * k, cy) + Hh(cx + 8 * k, cy);
    case 'N2': return N(cx - 12 * k, cy) + N(cx + 12 * k, cy);
    case 'CO2': return O(cx - d, cy) + O(cx + d, cy) + C(cx, cy);
    case 'H2O': { const a = (104.5 / 2) * Math.PI / 180; return Hh(cx - 27 * k * Math.sin(a), cy + 27 * k * Math.cos(a)) + Hh(cx + 27 * k * Math.sin(a), cy + 27 * k * Math.cos(a)) + O(cx, cy); }
    case 'CH4': return Hh(cx - 20 * k, cy - 12 * k) + Hh(cx + 20 * k, cy - 12 * k) + Hh(cx - 8 * k, cy + 20 * k) + C(cx, cy) + Hh(cx + 12 * k, cy + 16 * k);
    case 'C': return C(cx, cy);
    default: return '';
  }
}

S['modeles-molecules'] = () => {
  let s = '';
  [['O2', 'dioxygène O₂', '2 atomes O'], ['H2O', 'eau H₂O', '2 H + 1 O'], ['CO2', 'dioxyde de carbone CO₂', '1 C + 2 O']].forEach(([t, n, c], i) => {
    const x = 110 + i * 210;
    s += modele(t, x, 90, 1.4) + texte(x, 170, n, { taille: 14, gras: true }) + texte(x, 190, c, { taille: 13, couleur: ATTENUE });
  });
  s += disque(170, 222, 8, '#ffffff', { bord: '#555' }) + texte(182, 227, 'H', { taille: 13, ancre: 'start' });
  s += disque(250, 222, 10, '#e53935', { bord: '#9b1c1c' }) + texte(264, 227, 'O', { taille: 13, ancre: 'start' });
  s += disque(330, 222, 10, '#333333', { bord: '#000' }) + texte(344, 227, 'C', { taille: 13, ancre: 'start' });
  s += texte(400, 227, '(modèles moléculaires)', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  return enveloppe(640, 240, s);
};

/** Équation de réaction en modèles moléculaires (conservation des atomes). */
S['reaction-modeles'] = ({ reactifs = [['H2', 2], ['O2', 1]], produits = [['H2O', 2]], equation = '2 H₂ + O₂ → 2 H₂O', bilan = '4 H et 2 O de chaque côté', W = 660 } = {}) => {
  let s = '';
  let x = 50;
  const place = (liste) => liste.forEach(([t, n], i) => {
    if (i) { s += texte(x - 6, 104, '+', { taille: 24, gras: true }); x += 20; }
    const large = t === 'CO2' ? 22 : 0;
    for (let k = 0; k < n; k++) { s += modele(t, x + 30 + large, 100 + (k - (n - 1) / 2) * 52, 1.1); }
    x += 82 + 2 * large;
  });
  place(reactifs);
  s += fleche(x - 10, 100, x + 50, 100, { couleur: ENCRE, epaisseur: 2.6 }); x += 80;
  place(produits);
  s += texte(W / 2, 200, equation, { taille: 18, gras: true });
  s += texte(W / 2, 224, bilan, { taille: 13, couleur: VERT });
  s += disque(W - 150, 24, 7, '#ffffff', { bord: '#555' }) + texte(W - 140, 29, 'H', { taille: 12, ancre: 'start' }) + disque(W - 110, 24, 8, '#e53935', { bord: '#9b1c1c' }) + texte(W - 99, 29, 'O', { taille: 12, ancre: 'start' }) + disque(W - 70, 24, 8, '#333333', { bord: '#000' }) + texte(W - 59, 29, 'C', { taille: 12, ancre: 'start' });
  return enveloppe(W, 240, s);
};

S['etats-micro'] = () => {
  let s = '';
  const box = (ox, titre, sous, pts, fl) => {
    let t = rect(ox, 30, 180, 170, { fond: '#f7f9fc', bord: ENCRE, ep: 2 });
    pts.forEach(([x, y]) => { t += disque(ox + x, 30 + y, 10, '#9ec5f0', { bord: BLEU }); });
    if (fl) pts.forEach(([x, y], i) => { if (i % 2 === 0) { const a = i * 1.7; t += fleche(ox + x + 11 * Math.cos(a), 30 + y + 11 * Math.sin(a), ox + x + 28 * Math.cos(a), 30 + y + 28 * Math.sin(a), { couleur: ROUGE, epaisseur: 1.4, pointe: 6 }); } });
    t += texte(ox + 90, 226, titre, { taille: 15, gras: true }) + texte(ox + 90, 246, sous, { taille: 13, couleur: ATTENUE });
    return t;
  };
  const sol = []; for (let i = 0; i < 7; i++) for (let j = 0; j < 4; j++) sol.push([20 + i * 23, 100 + j * 22]);
  const r = alea(21); const liq = [];
  while (liq.length < 26) { const p = [14 + r() * 152, 80 + r() * 80]; if (liq.every((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) > 20.5)) liq.push(p); }
  const gaz = []; while (gaz.length < 7) { const p = [20 + r() * 140, 20 + r() * 130]; if (gaz.every((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) > 46)) gaz.push(p); }
  s += box(20, 'Solide', 'compact et ordonné', sol) + box(230, 'Liquide', 'compact et désordonné', liq) + box(440, 'Gaz', 'dispersé et désordonné', gaz, true);
  return enveloppe(640, 258, s);
};

// ───────────────────────── Électricité (lycée) ─────────────────────────

S['conventions'] = () => {
  const ox = 140, oy = 70, w = 300, h = 160;
  let s = fil([[ox, oy], [ox + w, oy], [ox + w, oy + h], [ox, oy + h], [ox, oy]]);
  s += dipole('pile', ox, oy + h / 2, 'v');
  s += dipole('resistance', ox + w, oy + h / 2, 'v');
  s += courant(ox + w / 2, oy, 'd', 'I');
  // générateur : U et I de même sens (flèche de tension vers la borne +)
  s += tension(ox - 40, oy + h / 2 + 34, ox - 40, oy + h / 2 - 34, 'U', { lx: -16, ly: 5 });
  // récepteur : U opposée à I (I descend dans le résistor, U pointe vers le haut)
  s += courant(ox + w, oy + 28, 'b', 'I', { dx: 14, dy: 4 });
  s += tension(ox + w + 40, oy + h / 2 + 34, ox + w + 40, oy + h / 2 - 34, 'U', { lx: 16, ly: 5 });
  s += texte(ox - 30, oy + h + 36, 'générateur :\nU et I de même sens', { taille: 13, couleur: VERT });
  s += texte(ox + w + 30, oy + h + 36, 'récepteur :\nU et I de sens opposés', { taille: 13, couleur: VERT });
  return enveloppe(620, 300, s);
};

S['caracteristique-generateur'] = () => {
  const E = 6, r = 2;
  const { svg, X, Y } = graphe({ W: 600, H: 320, xmin: 0, xmax: 3, ymin: 0, ymax: 7, pasX: 0.5, pasY: 1, gradX: false, gradY: false, nomX: 'I', nomY: 'U', g: 50 });
  let s = svg + trace((i) => E - r * i, 0, 2.8, X, Y, { couleur: BLEU, ep: 2.8 });
  s += ligne(X(0), Y(E), X(3), Y(E), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  s += texte(X(0) - 8, Y(E) + 5, 'E', { taille: 15, gras: true, ancre: 'end' });
  s += cote(X(1.6), Y(E), X(1.6), Y(E - r * 1.6), 'r I', { dx: 22, dy: 4, taille: 14 });
  s += etiquette(X(2.2), Y(E - r * 2.2) - 20, 'U = E − r I', { taille: 15, gras: true, couleur: BLEU });
  return enveloppe(600, 320, s);
};

// ───────────────────────── Mécanique (lycée) ─────────────────────────

S['travail-angle'] = () => {
  let s = '';
  [[40, 'travail moteur', 'α < 90° : W > 0', VERT], [90, 'travail nul', 'α = 90° : W = 0', ATTENUE], [140, 'travail résistant', 'α > 90° : W < 0', ROUGE]].forEach(([deg, t1, t2, c], i) => {
    const ox = 40 + i * 210, oy = 170;
    const a = (deg * Math.PI) / 180;
    s += fleche(ox, oy, ox + 150, oy, { couleur: ENCRE, epaisseur: 2.4 }) + texte(ox + 150, oy + 20, 'déplacement AB', { taille: 12, ancre: 'end' });
    s += disque(ox + 40, oy, 5, ENCRE);
    s += fleche(ox + 40, oy, ox + 40 + 95 * Math.cos(a), oy - 95 * Math.sin(a), { couleur: c, epaisseur: 3 }) + texte(ox + 40 + 104 * Math.cos(a), oy - 104 * Math.sin(a) - 4, 'F', { taille: 16, gras: true, couleur: c });
    s += `<path d="M ${ox + 70} ${oy} A 30 30 0 ${deg > 180 ? 1 : 0} 0 ${nb(ox + 40 + 30 * Math.cos(a))} ${nb(oy - 30 * Math.sin(a))}" fill="none" stroke="${BLEU}" stroke-width="2"/>`;
    s += texte(ox + 40 + 46 * Math.cos(a / 2), oy - 46 * Math.sin(a / 2) + 5, 'α', { taille: 15, couleur: BLEU });
    s += texte(ox + 80, 220, t1, { taille: 14, gras: true, couleur: c }) + texte(ox + 80, 240, t2, { taille: 13 });
  });
  s += texte(330, 30, 'W = F × AB × cos α', { taille: 16, gras: true });
  return enveloppe(660, 256, s);
};

/** Énergies lors d'une chute libre (sans frottement) depuis une hauteur h. */
S['energies-chute'] = () => {
  // m g h normalisé à 1 ; z(t) = h − g t²/2, durée de chute t_f = √(2h/g) normalisée à 1
  const { svg, X, Y } = graphe({ W: 620, H: 320, xmin: 0, xmax: 1, ymin: 0, ymax: 1.2, pasX: 0.25, pasY: 0.25, gradX: false, gradY: false, nomX: 'temps de chute', nomY: 'énergie', g: 50 });
  let s = svg;
  s += trace((t) => 1 - t * t, 0, 1, X, Y, { couleur: BLEU, ep: 2.8 });
  s += trace((t) => t * t, 0, 1, X, Y, { couleur: ROUGE, ep: 2.8 });
  s += trace(() => 1, 0, 1, X, Y, { couleur: VERT, ep: 2.8 });
  s += etiquette(X(0.2), Y(1) - 12, 'Em = Ec + Epp : constante', { taille: 13, couleur: VERT, gras: true, ancre: 'start' });
  s += etiquette(X(0.18), Y(1 - 0.18 * 0.18) + 22, 'Epp (diminue)', { taille: 13, couleur: BLEU, ancre: 'start' });
  s += etiquette(X(0.8), Y(0.64) + 26, 'Ec (augmente)', { taille: 13, couleur: ROUGE, ancre: 'start' });
  s += texte(X(0), Y(0) + 22, 'lâcher', { taille: 12, couleur: ATTENUE }) + texte(X(1), Y(0) + 22, 'arrivée au sol', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  return enveloppe(620, 320, s);
};

/** Chronophotographie d'une chute parabolique : vecteurs vitesse et variation Δv. */
S['chrono-parabole'] = () => {
  const tau = 0.1, g = 9.8, vx = 3, vy0 = 3.2, k = 230; // m → px
  const pos = (i) => { const t = i * tau; return [60 + k * vx * t, 250 - k * (vy0 * t - (g * t * t) / 2)]; };
  let s = '';
  for (let i = 0; i <= 6; i++) { const [x, y] = pos(i); s += `<circle cx="${nb(x)}" cy="${nb(y)}" r="4" fill="${ENCRE}"/>`; s += texte(x, y - 10, `M${['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈'][i]}`, { taille: 12, couleur: ATTENUE }); }
  const kv = 0.06; // échelle des vitesses : px par (m/s) multiplié par k
  const v = (i) => { const [a, b] = pos(i - 1), [c, d] = pos(i + 1); return [(c - a) / (2 * tau), (d - b) / (2 * tau)]; };
  for (const i of [2, 4]) { const [x, y] = pos(i), [vxp, vyp] = v(i); s += fleche(x, y, x + vxp * kv, y + vyp * kv, { couleur: BLEU, epaisseur: 2.4 }); s += texte(x + vxp * kv + 6, y + vyp * kv - 4, i === 2 ? 'v₂' : 'v₄', { taille: 14, couleur: BLEU, ancre: 'start' }); }
  // construction de Δv en M3 : v4 − v2 reportés depuis M3
  const [x3, y3] = pos(3), v2 = v(2), v4 = v(4);
  s += fleche(x3, y3, x3 + v2[0] * kv, y3 + v2[1] * kv, { couleur: BLEU, epaisseur: 1.6, pointilles: true });
  s += fleche(x3, y3, x3 + v4[0] * kv, y3 + v4[1] * kv, { couleur: BLEU, epaisseur: 1.6, pointilles: true });
  s += fleche(x3 + v2[0] * kv, y3 + v2[1] * kv, x3 + v4[0] * kv, y3 + v4[1] * kv, { couleur: ROUGE, epaisseur: 2.6 });
  s += texte(x3 + v2[0] * kv + 10, y3 + (v2[1] + v4[1]) * kv / 2 + 4, 'Δv', { taille: 15, gras: true, couleur: ROUGE, ancre: 'start' });
  s += fleche(560, 60, 560, 130, { couleur: VERT, epaisseur: 3 }) + texte(574, 100, 'P', { taille: 16, gras: true, couleur: VERT, ancre: 'start' });
  s += texte(560, 160, 'Δv a la direction\net le sens de ΣF\n(ici le seul poids P)', { taille: 12 });
  s += texte(330, 300, 'positions à intervalles de temps égaux τ ; vecteurs vitesse en bleu', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 310, s);
};

S['circulaire-dv'] = ({ dv = true } = {}) => {
  const cx = 230, cy = 160, R = 110, n = 12;
  let s = cercle(cx, cy, R, { couleur: GRILLE, epaisseur: 1.6 }) + `<circle cx="${cx}" cy="${cy}" r="3" fill="${ENCRE}"/>` + texte(cx + 8, cy + 18, 'centre', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  const P = (a) => [cx + R * Math.cos(a), cy - R * Math.sin(a)];
  const L = 70;
  const T = (a) => [-Math.sin(a), -Math.cos(a)]; // tangente (sens trigonométrique)
  for (let i = 0; i < n; i++) s += `<circle cx="${nb(P((i * 2 * Math.PI) / n)[0])}" cy="${nb(P((i * 2 * Math.PI) / n)[1])}" r="3.5" fill="${ENCRE}"/>`;
  for (const a of [0.3, 1.6, 2.9, 4.2, 5.4]) { const [x, y] = P(a), [tx, ty] = T(a); s += fleche(x, y, x + tx * L, y + ty * L, { couleur: BLEU, epaisseur: 2.4 }); }
  s += texte(P(1.6)[0] - 30, P(1.6)[1] - 24, 'v', { taille: 16, couleur: BLEU, gras: true });
  if (dv) {
    const a1 = 0.3, a2 = 0.3 + (2 * Math.PI) / n * 2, am = 0.3 + (2 * Math.PI) / n;
    const [xm, ym] = P(am), t1 = T(a1), t2 = T(a2);
    s += fleche(520, 160, 520 + t1[0] * L, 160 + t1[1] * L, { couleur: BLEU, epaisseur: 2 }) + fleche(520, 160, 520 + t2[0] * L, 160 + t2[1] * L, { couleur: BLEU, epaisseur: 2 });
    s += fleche(520 + t1[0] * L, 160 + t1[1] * L, 520 + t2[0] * L, 160 + t2[1] * L, { couleur: ROUGE, epaisseur: 2.6 });
    s += texte(520, 260, 'Δv (en rouge) est dirigé\nvers le centre du cercle', { taille: 13, couleur: ROUGE });
    s += fleche(xm, ym, xm + (cx - xm) * 0.4, ym + (cy - ym) * 0.4, { couleur: ROUGE, epaisseur: 2.6 }) + texte(xm - 30, ym + 30, 'ΣF', { taille: 15, gras: true, couleur: ROUGE });
  } else {
    s += texte(520, 150, 'valeur de v constante,\nmais direction qui change :\nv est toujours tangent\nau cercle', { taille: 13 });
  }
  return enveloppe(660, 300, s);
};

S['retard'] = () => {
  let s = '';
  const imp = (c, y) => trace((x) => y - 40 * Math.exp(-(((x - c) / 26) ** 2)), 20, 640, (x) => x, (yy) => yy, { couleur: BLEU, ep: 2.6 });
  s += texte(14, 58, 'instant t', { taille: 13, ancre: 'start', gras: true }) + imp(140, 110);
  s += texte(14, 188, 'instant t + τ', { taille: 13, ancre: 'start', gras: true }) + imp(470, 240);
  s += `<circle cx="140" cy="110" r="5" fill="${ROUGE}"/>` + texte(140, 132, 'S', { taille: 14, couleur: ROUGE });
  s += `<circle cx="470" cy="240" r="5" fill="${ROUGE}"/>` + texte(470, 262, 'M', { taille: 14, couleur: ROUGE });
  s += ligne(140, 70, 140, 250, { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + ligne(470, 70, 470, 250, { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  s += cote(140, 160, 470, 160, 'd = v × τ', { taille: 14 });
  s += texte(330, 290, 'le point M reproduit le mouvement de la source avec un retard τ = d / v', { taille: 13 });
  return enveloppe(660, 300, s);
};

/** Quantités de matière des réactifs en fonction de l'avancement : réactif limitant. */
S['avancement-limitant'] = ({ nA = 0.10, nB = 0.15, a = 1, b = 2 } = {}) => {
  const xmax = Math.min(nA / a, nB / b);
  const { svg, X, Y } = graphe({ W: 620, H: 320, xmin: 0, xmax: 0.1, ymin: 0, ymax: 0.16, pasX: 0.02, pasY: 0.04, nomX: 'avancement x (mol)', nomY: 'n (mol)', fmtX: (v) => fr(v, 2), fmtY: (v) => fr(v, 2), g: 60 });
  let s = svg;
  s += trace((x) => nA - a * x, 0, 0.1, X, Y, { couleur: BLEU, ep: 2.6 }) + trace((x) => nB - b * x, 0, nB / b, X, Y, { couleur: ORANGE, ep: 2.6 });
  s += ligne(X(xmax), Y(0), X(xmax), Y(0.16), { couleur: ROUGE, epaisseur: 1.6, pointilles: true });
  s += etiquette(X(xmax) + 6, Y(0.15), `xmax = ${fr(xmax, 3)} mol`, { taille: 13, couleur: ROUGE, ancre: 'start' });
  s += etiquette(X(0.01), Y(nA - 0.01 * a) - 12, `n(A) = ${fr(nA, 2)} − x`, { taille: 13, couleur: BLEU, ancre: 'start' });
  s += etiquette(X(0.04), Y(nB - 0.04 * b) + 26, `n(B) = ${fr(nB, 2)} − 2x`, { taille: 13, couleur: ORANGE, ancre: 'start' });
  s += texte(430, 60, 'B s\'épuise le premier :\nB est le réactif limitant', { taille: 13, gras: true });
  s += texte(430, 104, `(exemple : A + 2 B → C)`, { taille: 12, couleur: ATTENUE });
  return enveloppe(620, 320, s);
};

// ═════════════════════════ Poses : 1re (enseignement scientifique et physique-chimie) ═════════════════════════
{
  const F = 'premiere/enseignement-scientifique/la-biodiversite-et-son-evolution';
  pose(F, 'trois-echelles', 'echelles-biodiversite', '## 1. Les trois échelles de la biodiversité',
    'Les trois niveaux emboîtés de la biodiversité : les écosystèmes, les espèces de chaque écosystème et la diversité génétique au sein de chaque espèce.');
  pose(F, 'speciation', 'speciation', '### De l\'évolution à de nouvelles espèces',
    'Spéciation : deux populations séparées par une barrière évoluent chacune de leur côté jusqu\'à ne plus pouvoir se reproduire entre elles.');
}
{
  const F = 'premiere/enseignement-scientifique/la-terre-un-astre-singulier';
  pose(F, 'eratosthene', 'eratosthene', '## 1. La forme et les dimensions de la Terre',
    'Le raisonnement d\'Ératosthène : les rayons du Soleil étant parallèles, l\'angle de 7° mesuré à Alexandrie est aussi l\'angle au centre de la Terre entre les deux villes.');
  pose(F, 'geo-helio', 'geo-helio', '## 3. La Terre dans l\'Univers : du géocentrisme à l\'héliocentrisme',
    'Deux modèles du système solaire : la Terre au centre (géocentrisme) ou le Soleil au centre (héliocentrisme), retenu aujourd\'hui.');
}
{
  const F = 'premiere/enseignement-scientifique/le-soleil-notre-source-denergie';
  pose(F, 'wien-soleil', 'planck', '### Le Soleil comme corps chaud qui rayonne',
    'Rayonnement de corps chauds à trois températures : à 5 800 K (le Soleil), le maximum tombe dans le visible ; plus le corps est froid, plus le maximum se décale vers l\'infrarouge.');
  pose(F, 'bilan-radiatif', 'bilan-radiatif', '## 2. Le bilan radiatif terrestre',
    'Bilan radiatif simplifié : une partie du rayonnement solaire est réfléchie, le reste réchauffe le sol, qui émet de l\'infrarouge en partie renvoyé vers le sol par l\'atmosphère.');
}
{
  const F = 'premiere/enseignement-scientifique/son-et-musique';
  pose(F, 'harmoniques', 'spectre-harmoniques', '### Ce que l\'oreille perçoit',
    'Exemple de spectre d\'un son composé de fondamental 440 Hz : les harmoniques sont aux fréquences multiples 880, 1 320, 1 760 Hz… ; leurs amplitudes font le timbre.',
    { f1: 440, amps: [1, 0.6, 0.35, 0.2], titre: 'exemple de son composé (la à 440 Hz)' });
  pose(F, 'octave-quinte', 'gamme', '## 2. La musique ou l\'art de faire entendre les nombres',
    'Les rapports simples de la fiche : multiplier la fréquence du la (440 Hz) par 3/2 donne la quinte (660 Hz), par 2 l\'octave (880 Hz).');
  pose(F, 'numerisation', 'numerisation', '## 3. Le son, une information à coder : la numérisation',
    'Numérisation : le signal est mesuré à intervalles réguliers (échantillonnage), puis chaque valeur est arrondie à un niveau codé en binaire (ici 3 bits, soit 8 niveaux).');
}
{
  const F = 'premiere/enseignement-scientifique/une-longue-histoire-de-la-matiere';
  pose(F, 'maille-nacl', 'maille-nacl', '## 2. Des édifices ordonnés : les cristaux',
    'Maille du chlorure de sodium : les ions chlorure et sodium alternent aux sommets, aux milieux des arêtes, aux centres des faces et au centre du cube.');
  pose(F, 'cristal-amorphe', 'cristal-amorphe', '## Ce qu\'il faut retenir',
    'Dans un cristal, les entités sont rangées de façon ordonnée et périodique ; dans un solide amorphe comme le verre, elles sont désordonnées.');
}
{
  const F = 'premiere/physique-chimie/chimie-organique';
  pose(F, 'familles', 'familles-organiques', '## 2. Les quatre familles au programme',
    'Formules développées d\'un exemple de chaque famille, avec le groupe caractéristique coloré : alcool, aldéhyde, cétone et acide carboxylique.');
  pose(F, 'lecture-ir', 'diagramme', '### La méthode de lecture',
    'Lire un spectre infrarouge en deux questions : y a-t-il une bande C=O vers 1 700 cm⁻¹ ? y a-t-il une bande O–H ?',
    { W: 660, H: 280, boites: [
      { id: 'q1', x: 210, y: 16, w: 240, h: 50, t: 'Bande C=O vers 1 700 cm⁻¹ ?', style: 'gris' },
      { id: 'q2', x: 20, y: 110, w: 250, h: 50, t: 'Bande O–H large\nvers 3 300 cm⁻¹ ?', style: 'gris' },
      { id: 'q3', x: 390, y: 110, w: 250, h: 50, t: 'Bande O–H très large\nentre 2 500 et 3 200 cm⁻¹ ?', style: 'gris' },
      { id: 'al', x: 20, y: 210, w: 120, h: 50, t: 'alcool', style: 'rouge', gras: true },
      { id: 'ac', x: 380, y: 210, w: 130, h: 50, t: 'acide\ncarboxylique', style: 'violet', gras: true },
      { id: 'ak', x: 520, y: 210, w: 130, h: 50, t: 'aldéhyde\nou cétone', style: 'bleu', gras: true }],
      fleches: [{ de: 'q1', a: 'q2', t: 'non', lx: -20, ly: 0 }, { de: 'q1', a: 'q3', t: 'oui', lx: 20, ly: 0 }, { de: 'q2', a: 'al', t: 'oui', lx: -18, ly: 0 }, { de: 'q3', a: 'ac', t: 'oui', lx: -18, ly: 0 }, { de: 'q3', a: 'ak', t: 'non', lx: 18, ly: 0 }] });
  pose(F, 'reflux', 'reflux', '## 5. Synthétiser une espèce chimique',
    'Montage de chauffage à reflux : le mélange est chauffé, les vapeurs se condensent dans le réfrigérant et retombent dans le ballon, sans perte de matière.');
}
{
  const F = 'premiere/physique-chimie/energie-phenomenes-electriques';
  pose(F, 'conventions', 'conventions', '## 2. Générateurs et récepteurs',
    'Conventions : pour le générateur, la flèche de tension U et le courant I sont de même sens ; pour le récepteur, ils sont de sens opposés.');
  pose(F, 'generateur-reel', 'caracteristique-generateur', '### Modèle du générateur réel',
    'Caractéristique d\'un générateur réel : la tension à ses bornes vaut E à vide, puis diminue de r × I quand l\'intensité débitée augmente.');
  pose(F, 'bilan-moteur', 'bandes-energie', '## 4. Rendement',
    'Bilan du moteur de l\'exemple : sur 500 J reçus, 400 J deviennent du travail mécanique (rendement 80 %) et 100 J sont dissipés.',
    { E0: 500, unite: 'J', etapes: [{ nom: 'moteur', eta: 0.8 }], entree: 'énergie électrique reçue', sortie: 'travail mécanique', perte: 'effet Joule et frottements' });
}
{
  const F = 'premiere/physique-chimie/energie-phenomenes-mecaniques';
  pose(F, 'travail-angle', 'travail-angle', '## 1. Travail d\'une force',
    'Le signe du travail dépend de l\'angle α entre la force et le déplacement : moteur si α est aigu, nul si α vaut 90°, résistant si α est obtus.');
  pose(F, 'energies-chute', 'energies-chute', '### Sans frottements',
    'Chute libre sans frottement d\'un objet lâché : l\'énergie potentielle se convertit en énergie cinétique et l\'énergie mécanique reste constante.');
}
{
  const F = 'premiere/physique-chimie/mouvement-interactions';
  pose(F, 'chrono-dv', 'chrono-parabole', '### Variation du vecteur vitesse',
    'Chronophotographie d\'un objet lancé : la variation Δv du vecteur vitesse, construite en M₃, est verticale vers le bas, comme le poids.');
  pose(F, 'circulaire', 'circulaire-dv', '## 3. Mouvement circulaire uniforme',
    'Mouvement circulaire uniforme : les vecteurs vitesse gardent la même valeur mais tournent ; leur variation Δv, comme la somme des forces, est dirigée vers le centre.');
}
{
  const F = 'premiere/physique-chimie/ondes-signaux';
  pose(F, 'retard', 'retard', '### Retard',
    'Une perturbation créée en S atteint le point M, situé à la distance d, avec un retard τ = d / v.');
  pose(F, 'longi-transverse', 'longi-transverse', '### Ondes transversales et longitudinales',
    'Onde transversale : perturbation perpendiculaire à la propagation (corde) ; onde longitudinale : perturbation parallèle (ressort, son).');
  pose(F, 'conjugaison-exemple', 'lentille-image', '### Lire le résultat',
    'Construction de l\'exemple (f′ = 10 cm, objet à 30 cm) : l\'image est réelle, renversée, deux fois plus petite, à 15 cm après la lentille.',
    { W: 640, H: 300, xO: 385, yA: 160, f: 120, oa: -360, ab: 48, echelle: { u: 12, unite: 'cm' }, demiL: 100 });
}
{
  const F = 'premiere/physique-chimie/transformations-matiere';
  pose(F, 'limitant', 'avancement-limitant', '### Trouver le réactif limitant',
    'Exemple A + 2 B → C avec 0,10 mol de A et 0,15 mol de B : B s\'annule pour x = 0,075 mol, avant A ; B est le réactif limitant.');
  pose(F, 'montage-titrage', 'montage-titrage-colorimetrique', '## 3. Le titrage',
    'Titrage avec suivi colorimétrique : la solution titrante est versée à la burette dans la solution à titrer, agitée ; l\'équivalence est repérée quand la teinte violette du permanganate persiste.');
}

// ───────────────────────── Collège : forces, mouvements, matière ─────────────────────────

S['force-caisse'] = () => {
  let s = rect(0, 230, 640, 14, { fond: '#d9d0bd', bord: 'none', ep: 0 });
  s += rect(120, 130, 140, 100, { fond: '#e8c99a', bord: '#8a6a2a', ep: 2, rx: 4 });
  s += texte(190, 186, 'caisse', { taille: 14 });
  const cm = 40; // 1 cm du dessin = 40 px ; échelle 1 cm → 10 N
  s += `<circle cx="260" cy="180" r="5" fill="${ROUGE}"/>`;
  s += fleche(260, 180, 260 + 3 * cm, 180, { couleur: ROUGE, epaisseur: 3.4, pointe: 13 }) + texte(320, 168, 'F', { taille: 17, gras: true, couleur: ROUGE });
  s += cote(260, 214, 380, 214, '3 cm → 30 N', { taille: 13, dy: 18 });
  const lab = (y, t1, t2) => texte(420, y, t1, { taille: 13, gras: true, ancre: 'start' }) + texte(420, y + 17, t2, { taille: 12, ancre: 'start', couleur: ATTENUE });
  s += lab(30, 'point d\'application :', 'la main sur la caisse (point rouge)') + lab(70, 'direction : horizontale', 'la droite qui porte la flèche') + lab(110, 'sens : vers la droite', 'indiqué par la pointe');
  s += texte(330, 290, 'valeur : 30 N, avec l\'échelle 1 cm → 10 N', { taille: 13, gras: true });
  s += rect(20, 20, 120, 40, { fond: '#f7f9fc', bord: GRILLE, ep: 1, rx: 4 }) + ligne(28, 40, 68, 40, { couleur: ENCRE, epaisseur: 2 }) + texte(74, 45, '1 cm ↔ 10 N', { taille: 12, ancre: 'start' });
  return enveloppe(640, 300, s);
};

S['aimants'] = () => {
  const aimant = (x, y, gauche) => { const [cg, cd, tg, td] = gauche === 'N' ? ['#d33', '#3b6fd8', 'N', 'S'] : ['#3b6fd8', '#d33', 'S', 'N']; return rect(x, y, 70, 34, { fond: cg, bord: ENCRE, ep: 1.6 }) + rect(x + 70, y, 70, 34, { fond: cd, bord: ENCRE, ep: 1.6 }) + texte(x + 35, y + 23, tg, { taille: 16, gras: true, couleur: PAPIER }) + texte(x + 105, y + 23, td, { taille: 16, gras: true, couleur: PAPIER }); };
  let s = '';
  s += texte(320, 30, 'Pôles différents face à face : attraction', { taille: 14, gras: true, couleur: VERT });
  s += aimant(110, 50, 'N') + aimant(350, 50, 'N');
  s += fleche(254, 67, 294, 67, { couleur: VERT, epaisseur: 3 }) + fleche(346, 67, 306, 67, { couleur: VERT, epaisseur: 3 });
  s += texte(320, 140, 'Pôles identiques face à face : répulsion', { taille: 14, gras: true, couleur: ROUGE });
  s += aimant(130, 160, 'N') + aimant(370, 160, 'S');
  s += fleche(124, 177, 80, 177, { couleur: ROUGE, epaisseur: 3 });
  s += fleche(516, 177, 560, 177, { couleur: ROUGE, epaisseur: 3 });
  s += texte(320, 250, 'en rouge : pôle Nord ; en bleu : pôle Sud', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 262, s);
};

S['triangle-dvt'] = () => {
  let s = polygone([[320, 30], [180, 230], [460, 230]], { couleur: ENCRE, fond: '#eef3fb', epaisseur: 2.4 });
  s += ligne(232, 155, 408, 155, { couleur: ENCRE, epaisseur: 2.4 }) + ligne(320, 155, 320, 230, { couleur: ENCRE, epaisseur: 2.4 });
  s += texte(320, 125, 'd', { taille: 30, gras: true, couleur: ROUGE }) + texte(265, 205, 'v', { taille: 30, gras: true, couleur: BLEU }) + texte(375, 205, 't', { taille: 30, gras: true, couleur: VERT });
  s += texte(490, 70, 'on cache la grandeur\ncherchée :', { taille: 13, ancre: 'start' });
  s += texte(500, 120, 'v = d / t', { taille: 15, gras: true, ancre: 'start', couleur: BLEU }) + texte(500, 146, 'd = v × t', { taille: 15, gras: true, ancre: 'start', couleur: ROUGE }) + texte(500, 172, 't = d / v', { taille: 15, gras: true, ancre: 'start', couleur: VERT });
  return enveloppe(660, 250, s);
};

S['chronophotos'] = () => {
  let s = '';
  const ligneMv = (y, xs, t1, t2) => {
    let q = ligne(30, y, 600, y, { couleur: GRILLE, epaisseur: 1.2 });
    xs.forEach((x) => { q += `<circle cx="${nb(x)}" cy="${y}" r="6" fill="${BLEU}"/>`; });
    q += texte(30, y - 18, t1, { taille: 14, gras: true, ancre: 'start' }) + texte(600, y - 18, t2, { taille: 12, ancre: 'end', couleur: ATTENUE });
    return q;
  };
  s += ligneMv(60, [40, 110, 180, 250, 320, 390, 460, 530], 'uniforme', 'espacements égaux : vitesse constante');
  s += ligneMv(150, [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => 40 + 16 * i + 5 * i * i), 'accéléré', 'espacements croissants : la vitesse augmente');
  s += ligneMv(240, [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => 40 + 16 * 8 + 5 * 64 - (16 * (8 - i) + 5 * (8 - i) * (8 - i))), 'ralenti', 'espacements décroissants : la vitesse diminue');
  s += fleche(250, 280, 400, 280, { couleur: ATTENUE, epaisseur: 1.6, pointe: 8 }) + texte(410, 284, 'sens du mouvement', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  s += texte(320, 306, 'positions d\'un objet à intervalles de temps égaux, sur une trajectoire rectiligne', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 316, s);
};

S['bouchon'] = () => {
  let s = '';
  const vague = (c, y0) => (x) => y0 - 26 * Math.exp(-(((x - c) / 48) ** 2));
  [[150, 60, 't₁'], [300, 160, 't₂'], [450, 260, 't₃']].forEach(([c, y0, t]) => {
    const f = vague(c, y0);
    s += rect(20, y0, 600, 30, { fond: EAU, bord: 'none', ep: 0, opacite: 0.6 });
    s += trace(f, 20, 620, (x) => x, (y) => y, { couleur: BLEU, ep: 2.4 });
    s += ellipse(300, f(300) - 5, 12, 7, { couleur: ENCRE, fond: '#f0b25a', ep: 1.4 });
    s += texte(14, y0 - 26, t, { taille: 13, gras: true, ancre: 'start' });
  });
  s += ligne(300, 20, 300, 290, { couleur: ROUGE, epaisseur: 1.2, pointilles: true });
  s += texte(316, 30, 'le bouchon monte puis redescend sur place', { taille: 13, couleur: ROUGE, ancre: 'start' });
  s += fleche(420, 300, 560, 300, { couleur: BLEU, epaisseur: 2.2 }) + texte(560, 290, 'la vague avance', { taille: 13, couleur: BLEU, ancre: 'end' });
  return enveloppe(640, 312, s);
};

S['circuit-puissances'] = () => {
  const ox = 120, oy = 60, w = 320, h = 170;
  const xa = ox + 170;
  let s = fil([[ox, oy], [ox + w, oy], [ox + w, oy + h], [ox, oy + h], [ox, oy]]) + fil([[xa, oy], [xa, oy + h]]);
  s += dipole('pile', ox, oy + h / 2, 'v', { label: 'générateur\n65 W', pos: 'gauche', ecart: 30 });
  s += dipole('lampe', xa, oy + h / 2, 'v', { label: 'lampe\n40 W', pos: 'gauche', ecart: 24 });
  s += dipole('moteur', ox + w, oy + h / 2, 'v', { label: 'moteur\n25 W', pos: 'droite', ecart: 24 });
  s += noeud(xa, oy) + noeud(xa, oy + h);
  s += texte(330, 280, 'P générateur = P lampe + P moteur = 40 W + 25 W = 65 W', { taille: 14, gras: true });
  return enveloppe(640, 296, s);
};

/** Balance : réaction qui dégage un gaz, en flacon ouvert puis fermé. */
S['balance-ouvert-ferme'] = () => {
  let s = '';
  const balance = (ox, affiche, ferme, titre) => {
    let q = rect(ox, 220, 220, 40, { fond: '#e6ebf0', bord: ENCRE, ep: 1.8, rx: 6 }) + rect(ox + 60, 228, 100, 24, { fond: '#1f2a33', bord: ENCRE, ep: 1, rx: 3 });
    q += texte(ox + 110, 246, affiche, { taille: 15, gras: true, couleur: '#7cf29a' });
    q += becher(ox + 70, 220, 80, 90, { niveau: 0.6, couleur: EAU });
    for (let i = 0; i < 7; i++) q += cercle(ox + 90 + (i % 3) * 18, 200 - i * 9, 3.5, { couleur: BLEU, epaisseur: 1.2 });
    if (ferme) q += rect(ox + 64, 124, 92, 8, { fond: '#9aa6b2', bord: ENCRE, ep: 1.4, rx: 2 });
    else q += flecheCourbe(ox + 110, 120, ox + 130, 90, ox + 160, 76, { couleur: ATTENUE, ep: 1.6 }) + texte(ox + 166, 76, 'le gaz s\'échappe', { taille: 12, couleur: ATTENUE, ancre: 'start' });
    q += texte(ox + 110, 290, titre, { taille: 14, gras: true });
    return q;
  };
  s += balance(40, 'm diminue', false, 'récipient ouvert : la masse lue diminue');
  s += balance(370, 'm constante', true, 'récipient fermé : la masse ne change pas');
  s += texte(320, 26, 'comprimé effervescent dans l\'eau : il se forme du dioxyde de carbone', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 300, s);
};

S['separations'] = () => {
  let s = '';
  // décantation : bécher avec dépôt au fond
  s += becher(60, 230, 110, 130, { type: 'depot', niveau: 0.75, couleur: '#dbe9d5' });
  s += texte(115, 256, 'décantation', { taille: 14, gras: true }) + texte(115, 274, 'le solide le plus dense se dépose', { taille: 12, couleur: ATTENUE });
  // filtration : entonnoir + filtre + bécher
  const cx = 470;
  s += polygone([[cx - 60, 60], [cx + 60, 60], [cx + 6, 140], [cx - 6, 140]], { couleur: ENCRE, fond: '#ffffff', epaisseur: 2 });
  s += polygone([[cx - 52, 64], [cx + 52, 64], [cx, 134]], { couleur: ATTENUE, fond: '#f4efe2', epaisseur: 1.2 });
  const r = alea(4); for (let i = 0; i < 14; i++) s += disque(cx - 22 + r() * 44, 100 + r() * 22, 3, '#a07a3a', { bord: '#6a4a1a', ep: 0.6 });
  s += chemin(`M ${cx - 6} 140 L ${cx - 6} 180 M ${cx + 6} 140 L ${cx + 6} 180`, VERRE);
  s += becher(cx - 45, 260, 90, 80, { niveau: 0.35, couleur: '#e6f0fa' });
  s += texte(cx + 70, 110, 'papier filtre :\nrésidu solide', { taille: 12, ancre: 'start' }) + texte(cx + 60, 236, 'filtrat', { taille: 12, ancre: 'start' });
  s += texte(cx, 282, 'filtration', { taille: 14, gras: true });
  return enveloppe(660, 292, s);
};

// ───────────────────────── Atomes, ions, tableau périodique ─────────────────────────

S['notation-noyau'] = ({ A = 23, Z = 11, X = 'Na', nom = 'sodium' } = {}) => {
  let s = texte(250, 160, X, { taille: 90, gras: true, ancre: 'start' });
  s += texte(240, 100, String(A), { taille: 36, gras: true, couleur: ROUGE, ancre: 'end' }) + texte(240, 186, String(Z), { taille: 36, gras: true, couleur: BLEU, ancre: 'end' });
  s += fleche(120, 70, 190, 86, { couleur: ROUGE, epaisseur: 1.8 }) + texte(110, 58, 'A = nombre de nucléons', { taille: 14, couleur: ROUGE, ancre: 'start' }) + texte(110, 40, '', {});
  s += fleche(120, 230, 190, 186, { couleur: BLEU, epaisseur: 1.8 }) + texte(40, 250, 'Z = numéro atomique = nombre de protons', { taille: 14, couleur: BLEU, ancre: 'start' });
  s += texte(420, 90, `${nom} :`, { taille: 15, gras: true, ancre: 'start' });
  s += texte(420, 116, `${Z} protons`, { taille: 14, ancre: 'start', couleur: BLEU }) + texte(420, 140, `${A} − ${Z} = ${A - Z} neutrons`, { taille: 14, ancre: 'start' }) + texte(420, 164, `${Z} électrons (atome neutre)`, { taille: 14, ancre: 'start' });
  return enveloppe(640, 270, s);
};

S['remplissage'] = () => {
  const sc = [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6]];
  let s = '';
  const ligneAt = (y, nomAt, Z) => {
    let q = texte(20, y + 24, nomAt, { taille: 14, gras: true, ancre: 'start' });
    let x = 170, reste = Z;
    sc.forEach(([n, cap]) => {
      const w = cap * 14 + 10;
      const e = Math.min(cap, reste); reste -= e;
      q += rect(x, y, w, 34, { fond: e ? '#eef3fb' : '#ffffff', bord: e ? BLEU : GRILLE, ep: 1.6, rx: 4 });
      for (let k = 0; k < cap; k++) q += `<circle cx="${x + 12 + k * 14}" cy="${y + 17}" r="5" fill="${k < e ? BLEU : 'none'}" stroke="${k < e ? BLEU : GRILLE}" stroke-width="1.2"/>`;
      q += texte(x + w / 2, y - 6, n, { taille: 12, couleur: ATTENUE });
      x += w + 10;
    });
    return q;
  };
  s += ligneAt(40, 'oxygène (Z = 8)', 8) + texte(330, 104, '1s² 2s² 2p⁴ : 6 électrons de valence', { taille: 14, couleur: BLEU });
  s += ligneAt(150, 'sodium (Z = 11)', 11) + texte(330, 214, '1s² 2s² 2p⁶ 3s¹ : 1 électron de valence', { taille: 14, couleur: BLEU });
  s += texte(330, 250, 'capacités : s → 2 électrons, p → 6 électrons ; remplissage dans l\'ordre', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 262, s);
};

S['tableau-periodique'] = () => {
  const el = [[1, 'H', 1, 1], [2, 'He', 1, 18], [3, 'Li', 2, 1], [4, 'Be', 2, 2], [5, 'B', 2, 13], [6, 'C', 2, 14], [7, 'N', 2, 15], [8, 'O', 2, 16], [9, 'F', 2, 17], [10, 'Ne', 2, 18],
    [11, 'Na', 3, 1], [12, 'Mg', 3, 2], [13, 'Al', 3, 13], [14, 'Si', 3, 14], [15, 'P', 3, 15], [16, 'S', 3, 16], [17, 'Cl', 3, 17], [18, 'Ar', 3, 18]];
  const col = (c) => (c <= 2 ? c - 1 : c - 11); // colonnes 1, 2, 13…18 → 0…7
  const W = 660, x0 = 40, y0 = 50, cw = 72, ch = 58;
  let s = '';
  for (const [Z, X, p, c] of el) {
    const x = x0 + col(c) * cw, y = y0 + (p - 1) * ch;
    const st = c === 1 && Z !== 1 ? FONDS.rouge : c === 17 ? FONDS.vert : c === 18 ? FONDS.violet : FONDS.gris;
    s += rect(x, y, cw - 6, ch - 6, { fond: st[0], bord: st[1], ep: 1.6, rx: 4 });
    s += texte(x + 6, y + 15, String(Z), { taille: 12, ancre: 'start', couleur: ATTENUE }) + texte(x + (cw - 6) / 2, y + 40, X, { taille: 18, gras: true });
  }
  ['1', '2', '13', '14', '15', '16', '17', '18'].forEach((c, i) => { s += texte(x0 + i * cw + (cw - 6) / 2, y0 - 10, `col. ${c}`, { taille: 12, couleur: ATTENUE }); });
  [1, 2, 3].forEach((p) => { s += texte(x0 - 10, y0 + (p - 1) * ch + 32, String(p), { taille: 13, couleur: ATTENUE, ancre: 'end' }); });
  s += rect(40, 238, 14, 14, { fond: FONDS.rouge[0], bord: ROUGE, ep: 1.2 }) + texte(60, 250, 'alcalins', { taille: 13, ancre: 'start' });
  s += rect(170, 238, 14, 14, { fond: FONDS.vert[0], bord: VERT, ep: 1.2 }) + texte(190, 250, 'halogènes', { taille: 13, ancre: 'start' });
  s += rect(310, 238, 14, 14, { fond: FONDS.violet[0], bord: VIOLET, ep: 1.2 }) + texte(330, 250, 'gaz nobles', { taille: 13, ancre: 'start' });
  s += texte(620, 250, 'les 18 premiers éléments', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  return enveloppe(W, 264, s);
};

S['ions-formation'] = () => {
  let s = '';
  const at = (ox, titre, p, e, charge, c) => {
    let q = texte(ox + 90, 30, titre, { taille: 15, gras: true, couleur: c });
    q += disque(ox + 90, 110, 22, '#f2c4c4', { bord: ROUGE }) + texte(ox + 90, 115, `${p} +`, { taille: 13, gras: true });
    q += cercle(ox + 90, 110, 60, { couleur: GRILLE, epaisseur: 1.2 });
    for (let k = 0; k < Math.min(e, 18); k++) { const a = (k * 2 * Math.PI) / Math.min(e, 18); q += `<circle cx="${nb(ox + 90 + 60 * Math.cos(a))}" cy="${nb(110 + 60 * Math.sin(a))}" r="4" fill="${BLEU}"/>`; }
    q += texte(ox + 90, 196, `${p} protons, ${e} électrons`, { taille: 13 }) + texte(ox + 90, 216, charge, { taille: 13, gras: true, couleur: c });
    return q;
  };
  s += at(0, 'atome Na', 11, 11, 'neutre', ENCRE);
  s += fleche(196, 110, 256, 110, { couleur: ROUGE, epaisseur: 2.4 }) + texte(226, 98, 'perd 1 e⁻', { taille: 12, couleur: ROUGE });
  s += at(240, 'ion Na⁺ (cation)', 11, 10, 'une charge positive', ROUGE);
  s += texte(560, 80, 'Cl gagne 1 e⁻ :', { taille: 13, gras: true });
  s += texte(560, 104, 'ion Cl⁻ (anion)', { taille: 13, couleur: BLEU });
  s += texte(560, 128, '17 protons,\n18 électrons', { taille: 13 });
  s += texte(330, 246, 'seuls les électrons partent ou arrivent : le noyau ne change pas', { taille: 12, couleur: ATTENUE });
  return enveloppe(660, 256, s);
};

/** Tubes à essai : tests caractéristiques. */
S['tubes-tests'] = ({ tubes = [], W = 660, note = '' } = {}) => {
  let s = '';
  const n = tubes.length, pas = W / n;
  tubes.forEach((t, i) => {
    const cx = pas * i + pas / 2, yb = 200, w = 34, h = 150;
    s += rect(cx - w / 2 + 2, yb - h * 0.55, w - 4, h * 0.55 - 14, { fond: t.liquide || '#eef4fa', bord: 'none', ep: 0 });
    if (t.precipite) { const r = alea(i + 3); for (let k = 0; k < 22; k++) s += disque(cx - 12 + r() * 24, yb - 18 - r() * 34, 3, t.precipite, { bord: t.bordP || t.precipite, ep: 0.6 }); }
    s += chemin(`M ${cx - w / 2} ${yb - h} L ${cx - w / 2} ${yb - 17} A 17 17 0 0 0 ${cx + w / 2} ${yb - 17} L ${cx + w / 2} ${yb - h}`, VERRE);
    s += texte(cx, 222, t.t, { taille: 13, gras: true }) + texte(cx, 240, t.r || '', { taille: 12, couleur: ATTENUE });
    if (t.r2) s += texte(cx, 256, t.r2, { taille: 12, couleur: ATTENUE });
  });
  if (note) s += texte(W / 2, 30, note, { taille: 13 });
  return enveloppe(W, 268, s);
};

S['deplacement-eau'] = () => {
  let s = '';
  const ep = (cx, V, avecCaillou, titre) => {
    const yb = 250, w = 60, h = 200, k = h / 125; // 125 mL sur 200 px
    const yl = yb - V * k;
    let q = rect(cx - w / 2, yl, w, yb - yl, { fond: EAU, bord: 'none', ep: 0 });
    for (let v = 10; v <= 120; v += 10) q += ligne(cx + w / 2 - (v % 50 === 0 ? 22 : 12), yb - v * k, cx + w / 2, yb - v * k, { couleur: ENCRE, epaisseur: 1.1 }) + (v % 20 === 0 ? texte(cx + w / 2 + 6, yb - v * k + 4, String(v), { taille: 12, ancre: 'start', couleur: ATTENUE }) : '');
    if (avecCaillou) q += polygone([[cx - 18, yb - 6], [cx - 8, yb - 34], [cx + 14, yb - 30], [cx + 20, yb - 8]], { couleur: '#555', fond: '#8d8d8d', epaisseur: 1.4 });
    q += chemin(`M ${cx - w / 2} ${yb - h} L ${cx - w / 2} ${yb} L ${cx + w / 2} ${yb} L ${cx + w / 2} ${yb - h}`, VERRE) + rect(cx - 46, yb, 92, 8, { fond: '#e6ebf0', bord: ENCRE, ep: 1.4 });
    q += ligne(cx - w / 2 - 30, yl, cx - w / 2 - 4, yl, { couleur: ROUGE, epaisseur: 1.6 }) + texte(cx - w / 2 - 34, yl + 5, `${V} mL`, { taille: 14, gras: true, couleur: ROUGE, ancre: 'end' });
    q += texte(cx, 282, titre, { taille: 13, gras: true });
    return q;
  };
  s += ep(170, 50, false, 'V₁ = 50 mL d\'eau');
  s += ep(450, 90, true, 'V₂ = 90 mL avec le caillou');
  s += fleche(260, 150, 340, 150, { couleur: ENCRE, epaisseur: 2.2 });
  s += texte(320, 30, 'volume du caillou : V₂ − V₁ = 90 − 50 = 40 mL = 40 cm³', { taille: 14, gras: true });
  return enveloppe(640, 296, s);
};

S['flotte-coule'] = () => {
  const d = [['liège', 0.24], ['glace', 0.92], ['huile', 0.92], ['eau', 1.0], ['aluminium', 2.7], ['fer', 7.9], ['or', 19.3]];
  const W = 640, H = 300, g = 110, dd = 60;
  const X = (r) => g + (Math.log10(r / 0.1) / Math.log10(30 / 0.1)) * (W - g - dd);
  let s = '';
  d.forEach(([n, r], i) => {
    const y = 40 + i * 32;
    const c = r < 1 ? VERT : r > 1 ? ROUGE : BLEU;
    s += texte(g - 10, y + 14, n, { taille: 13, ancre: 'end', gras: n === 'eau' });
    s += rect(g, y, X(r) - g, 20, { fond: r < 1 ? '#e2f2e8' : r > 1 ? '#fbeaea' : '#eef3fb', bord: c, ep: 1.4 });
    s += texte(Math.max(X(r), r < 1.5 ? X(1) : 0) + 8, y + 15, `${fr(r, r < 1 ? 2 : 1)} g/cm³`, { taille: 12, ancre: 'start', couleur: c });
  });
  s += ligne(X(1), 30, X(1), 270, { couleur: BLEU, epaisseur: 2, pointilles: true });
  s += texte(X(1) - 8, 290, '← flottent sur l\'eau', { taille: 13, couleur: VERT, ancre: 'end', gras: true }) + texte(X(1) + 8, 290, 'coulent dans l\'eau →', { taille: 13, couleur: ROUGE, ancre: 'start', gras: true });
  return enveloppe(W, H + 4, s);
};

S['poids-astres'] = () => {
  const d = [['Lune', 1.6], ['Mars', 3.7], ['Terre', 9.8], ['Jupiter', 25]];
  const { svg, X, Y } = graphe({ W: 620, H: 320, xmin: 0, xmax: 4, ymin: 0, ymax: 2200, pasX: 1, pasY: 500, gradX: false, nomY: 'poids (N)', nomX: '', fmtY: (v) => fr(v, 0), g: 66 });
  let s = svg;
  d.forEach(([n, g], i) => {
    const P = 80 * g, x0 = X(i + 0.22), x1 = X(i + 0.78);
    s += rect(x0, Y(P), x1 - x0, Y(0) - Y(P), { fond: '#eef3fb', bord: BLEU, ep: 1.6 });
    s += texte((x0 + x1) / 2, Y(P) - 8, `${fr(P, 0)} N`, { taille: 13, gras: true });
    s += texte((x0 + x1) / 2, Y(0) + 18, n, { taille: 13, gras: true }) + texte((x0 + x1) / 2, Y(0) + 34, `g = ${fr(g, g < 10 ? 1 : 0)} N/kg`, { taille: 12, couleur: ATTENUE });
  });
  s += texte(X(1.1), Y(1900), 'astronaute de masse 80 kg :\nla masse est la même partout,\nle poids P = m × g change', { taille: 13, ancre: 'start' });
  return enveloppe(620, 330, s);
};

S['lustre'] = () => {
  let s = rect(120, 20, 400, 14, { fond: '#d9d0bd', bord: ENCRE, ep: 1.4 }) + texte(540, 32, 'plafond', { taille: 12, ancre: 'start', couleur: ATTENUE });
  s += ligne(320, 34, 320, 140, { couleur: ENCRE, epaisseur: 2 });
  s += chemin('M 270 140 L 370 140 L 350 190 L 290 190 Z', { couleur: ENCRE, ep: 2, fond: '#f5e3a8' });
  const G = [320, 165], k = 4; // 1 N → 4 px (19,6 N → 78 px)
  s += `<circle cx="${G[0]}" cy="${G[1]}" r="4" fill="${ENCRE}"/>` + texte(334, 170, 'G', { taille: 13, ancre: 'start' });
  s += fleche(320, 140, 320, 140 - 19.6 * k, { couleur: VERT, epaisseur: 3.2 }) + texte(330, 92, 'T (tension du fil) = 19,6 N', { taille: 14, couleur: VERT, gras: true, ancre: 'start' });
  s += fleche(G[0], G[1], G[0], G[1] + 19.6 * k, { couleur: ROUGE, epaisseur: 3.2 }) + texte(330, 230, 'P (poids) = 19,6 N', { taille: 14, couleur: ROUGE, gras: true, ancre: 'start' });
  s += texte(160, 160, 'lustre\nde 2,0 kg', { taille: 13, ancre: 'end' });
  s += texte(320, 284, 'même direction, même valeur, sens opposés : les forces se compensent', { taille: 13 });
  return enveloppe(640, 296, s);
};

S['gravitation'] = () => {
  let s = disque(150, 150, 60, '#4c8be0', { bord: '#1d4f9a' }) + texte(150, 236, 'corps A', { taille: 15, gras: true });
  s += disque(500, 150, 26, '#cfcfcf', { bord: '#777' }) + texte(500, 200, 'corps B', { taille: 15, gras: true });
  s += fleche(500, 150, 410, 150, { couleur: ROUGE, epaisseur: 3.2 }) + texte(452, 136, 'F A/B', { taille: 14, couleur: ROUGE, gras: true });
  s += fleche(150, 150, 240, 150, { couleur: ROUGE, epaisseur: 3.2 }) + texte(250, 176, 'F B/A', { taille: 14, couleur: ROUGE, gras: true });
  s += cote(150, 268, 500, 268, 'd (entre les centres)', { taille: 13 });
  s += texte(330, 40, 'F = G × mA × mB / d²', { taille: 16, gras: true });
  s += texte(330, 64, 'forces attractives, de même valeur et de sens opposés', { taille: 13, couleur: ATTENUE });
  return enveloppe(660, 300, s);
};

S['parachutiste'] = () => {
  let s = chemin('M 220 90 Q 320 10 420 90 Z', { couleur: ENCRE, ep: 2, fond: '#f08c2e' });
  s += ligne(230, 90, 315, 170, { couleur: ENCRE, epaisseur: 1.2 }) + ligne(410, 90, 325, 170, { couleur: ENCRE, epaisseur: 1.2 });
  s += `<circle cx="320" cy="180" r="10" fill="#3b4652"/>` + rect(312, 190, 16, 30, { fond: '#3b4652', bord: 'none', ep: 0, rx: 4 });
  s += `<circle cx="320" cy="205" r="4" fill="${ENCRE}"/>`;
  s += fleche(320, 205, 320, 290, { couleur: ROUGE, epaisseur: 3.2 }) + texte(332, 280, 'poids P', { taille: 14, couleur: ROUGE, gras: true, ancre: 'start' });
  s += fleche(320, 205, 320, 120, { couleur: VERT, epaisseur: 3.2 }) + texte(432, 130, 'force de frottement\nde l\'air f', { taille: 13, couleur: VERT, gras: true, ancre: 'start' }) + ligne(428, 128, 326, 128, { couleur: VERT, epaisseur: 1 });
  s += texte(140, 220, 'vitesse constante :\nP et f se compensent', { taille: 13, ancre: 'middle' });
  return enveloppe(660, 300, s);
};

S['lois-circuits'] = () => {
  let s = '';
  const ox = 40, oy = 70, w = 230, h = 150;
  s += fil([[ox, oy], [ox + w, oy], [ox + w, oy + h], [ox, oy + h], [ox, oy]]) + dipole('pile', ox, oy + h / 2, 'v');
  s += dipole('resistance', ox + w / 2, oy, 'h') + dipole('lampe', ox + w, oy + h / 2, 'v');
  s += tension(ox + w / 2 + 24, oy - 22, ox + w / 2 - 24, oy - 22, 'U₁', { ly: -8 }) + tension(ox + w + 26, oy + h / 2 + 24, ox + w + 26, oy + h / 2 - 24, 'U₂', { lx: 18, ly: 4 });
  s += courant(ox + 40, oy + h, 'g', 'I', { dy: 20 });
  s += texte(ox + w / 2, oy - 50, 'Série : U = U₁ + U₂ ; I identique', { taille: 14, gras: true });
  const qx = 380, qy = 70, qw = 240;
  const xa = qx + 120;
  s += fil([[qx, qy], [qx + qw, qy], [qx + qw, qy + h], [qx, qy + h], [qx, qy]]) + fil([[xa, qy], [xa, qy + h]]);
  s += dipole('pile', qx, qy + h / 2, 'v') + dipole('resistance', xa, qy + h / 2, 'v') + dipole('lampe', qx + qw, qy + h / 2, 'v');
  s += noeud(xa, qy) + noeud(xa, qy + h);
  s += courant(qx + 60, qy, 'd', 'I') + courant(xa, qy + 32, 'b', 'I₁', { dx: -16, dy: 4 }) + courant(xa + 60, qy, 'd', 'I₂');
  s += texte(qx + qw / 2, qy - 50, 'Dérivation : I = I₁ + I₂ ; U identique', { taille: 14, gras: true });
  return enveloppe(660, 260, s);
};

// ═════════════════════════ Poses : 4e ═════════════════════════
{
  const F = 'quatrieme/physique-chimie/interactions-forces';
  pose(F, 'force-caisse', 'force-caisse', '## 3. Représenter une force par une flèche',
    'La force exercée par la main sur la caisse : origine au point d\'application, direction horizontale, sens vers la droite, longueur de 3 cm pour 30 N.');
  pose(F, 'aimants', 'aimants', '### La règle d\'attraction et de répulsion',
    'Deux aimants s\'attirent quand des pôles différents sont face à face et se repoussent quand ce sont des pôles identiques.');
}
{
  const F = 'quatrieme/physique-chimie/mouvement-vitesse';
  pose(F, 'triangle', 'triangle-dvt', '## 2. Les trois formes de la relation',
    'Le triangle pour retrouver les trois formes de la relation : on cache la grandeur cherchée et on lit ce qui reste.');
  pose(F, 'chronophotos', 'chronophotos', '## 5. L\'évolution de la vitesse',
    'Positions d\'un objet à intervalles de temps égaux : espacements égaux pour un mouvement uniforme, croissants s\'il est accéléré, décroissants s\'il est ralenti.');
}
{
  const F = 'quatrieme/physique-chimie/organisation-matiere';
  pose(F, 'modeles-molecules', 'modeles-molecules', '## 3. Symboles et formules chimiques',
    'Modèles moléculaires du dioxygène O₂, de l\'eau H₂O (molécule coudée) et du dioxyde de carbone CO₂ (molécule linéaire).');
  pose(F, 'etats-micro', 'etats-micro', '## 4. Les trois états physiques vus de l\'intérieur',
    'Modèle microscopique des trois états : solide compact et ordonné, liquide compact et désordonné, gaz dispersé et désordonné, aux particules très agitées.');
}
{
  const F = 'quatrieme/physique-chimie/propagation-signal';
  pose(F, 'chaine-transmission', 'diagramme', '## 1. Un signal transporte une information',
    'Une chaîne de transmission : l\'émetteur fabrique le signal, qui se propage dans un milieu jusqu\'au récepteur.',
    { W: 640, H: 170, boites: [
      { id: 'e', x: 20, y: 50, w: 160, h: 60, t: 'émetteur\n(voix, lampe)', style: 'orange' },
      { id: 'm', x: 240, y: 50, w: 160, h: 60, t: 'milieu\n(air, eau, vide…)', style: 'gris' },
      { id: 'r', x: 460, y: 50, w: 160, h: 60, t: 'récepteur\n(oreille, œil)', style: 'vert' }],
      fleches: [{ de: 'e', a: 'm', t: 'signal' }, { de: 'm', a: 'r', t: 'signal' }],
      textes: [{ x: 320, y: 150, t: 'une information est transmise, aucun objet ne voyage', taille: 12, couleur: ATTENUE }] });
  pose(F, 'bouchon', 'bouchon', '## 2. La propagation : une onde sans transport de matière',
    'Une vague passe sous un bouchon à trois instants successifs : le bouchon monte puis redescend sur place, seule la perturbation avance.');
}
{
  const F = 'quatrieme/physique-chimie/puissance-energie';
  pose(F, 'modes-lampe', 'diagramme', '## 1. Les modes de transfert d\'énergie',
    'La lampe reçoit de l\'énergie par transfert électrique et la cède à la pièce par rayonnement (lumière) et par transfert thermique.',
    { W: 640, H: 210, boites: [
      { id: 'p', x: 20, y: 70, w: 120, h: 56, t: 'pile', style: 'jaune', forme: 'ellipse' },
      { id: 'l', x: 250, y: 70, w: 130, h: 56, t: 'lampe', style: 'bleu', gras: true },
      { id: 'a', x: 480, y: 20, w: 140, h: 56, t: 'pièce\n(lumière)', style: 'orange', forme: 'ellipse' },
      { id: 'b', x: 480, y: 130, w: 140, h: 56, t: 'pièce\n(chaleur)', style: 'rouge', forme: 'ellipse' }],
      fleches: [{ de: 'p', a: 'l', t: 'électrique' }, { de: 'l', a: 'a', t: 'rayonnement', ly: -10 }, { de: 'l', a: 'b', t: 'thermique', ly: 20 }] });
  pose(F, 'puissance-generateur', 'circuit-puissances', '## 5. La puissance du générateur',
    'Exemple de la fiche : le générateur fournit la somme des puissances reçues par la lampe (40 W) et par le moteur (25 W), soit 65 W.');
}
{
  const F = 'quatrieme/physique-chimie/transformation-conservation-masse';
  pose(F, 'formation-eau', 'reaction-modeles', '### Ajuster une équation',
    'Formation de l\'eau en modèles moléculaires : deux molécules de dihydrogène et une de dioxygène donnent deux molécules d\'eau ; les atomes sont conservés.');
  pose(F, 'systeme-ouvert', 'balance-ouvert-ferme', '### Le piège du système ouvert',
    'Un comprimé effervescent dans l\'eau : en récipient ouvert, le gaz formé s\'échappe et la balance indique moins ; en récipient fermé, la masse ne change pas.');
}

// ═════════════════════════ Poses : 2de ═════════════════════════
{
  const F = 'seconde/physique-chimie/description-matiere';
  pose(F, 'separations', 'separations', '### Techniques de séparation',
    'Deux techniques de séparation : la décantation, où le solide plus dense se dépose au fond, et la filtration, où le papier filtre retient le solide.');
  pose(F, 'dilution', 'dilution', '## 5. Protocole de dilution',
    'Protocole de dilution : prélever V₁ à la pipette jaugée, verser dans la fiole jaugée, compléter jusqu\'au trait de jauge, puis homogénéiser.');
}
{
  const F = 'seconde/physique-chimie/modelisation-microscopique';
  pose(F, 'notation', 'notation-noyau', '### Notation symbolique',
    'Lecture de la notation symbolique du sodium : A = 23 nucléons, Z = 11 protons, donc 12 neutrons, et 11 électrons pour l\'atome neutre.');
  pose(F, 'remplissage', 'remplissage', '## 2. Configuration électronique',
    'Remplissage des sous-couches pour l\'oxygène (Z = 8) et le sodium (Z = 11) : chaque disque bleu est un électron.');
  pose(F, 'tableau', 'tableau-periodique', '## 3. Le tableau périodique',
    'Les trois premières lignes du tableau périodique : les éléments d\'une même colonne ont le même nombre d\'électrons de valence.');
}
{
  const F = 'seconde/physique-chimie/mouvement-interactions';
  pose(F, 'gravitation', 'gravitation', '### Force d\'interaction gravitationnelle',
    'Interaction gravitationnelle entre deux corps : forces attractives, de même valeur et de sens opposés, qui varient comme 1 / d².');
  pose(F, 'parachutiste', 'parachutiste', '## 4. Le principe d\'inertie',
    'Un parachutiste qui descend à vitesse constante : son poids est exactement compensé par la force de frottement de l\'air.');
}
{
  const F = 'seconde/physique-chimie/ondes-signaux';
  pose(F, 'refraction', 'refraction', '### Lois de Snell-Descartes',
    'Réfraction d\'un rayon passant de l\'air dans l\'eau sous 50° : il se rapproche de la normale (environ 35°), les angles étant mesurés depuis la normale.');
  pose(F, 'lois-circuits', 'lois-circuits', '### Lois des circuits',
    'Lois des circuits : en série, les tensions s\'ajoutent et l\'intensité est la même partout ; en dérivation, les intensités s\'ajoutent et la tension est la même.');
}
{
  const F = 'seconde/physique-chimie/transformations-matiere';
  pose(F, 'types', 'diagramme', '## 1. Les trois types de transformations',
    'La question à se poser pour classer une transformation : les molécules changent-elles ? et si oui, le noyau des atomes est-il touché ?',
    { W: 660, H: 250, boites: [
      { id: 'q1', x: 30, y: 20, w: 250, h: 54, t: 'Les molécules sont-elles\nles mêmes avant et après ?', style: 'gris' },
      { id: 'p', x: 30, y: 170, w: 180, h: 54, t: 'PHYSIQUE\n(l\'état change)', style: 'bleu', gras: true },
      { id: 'q2', x: 360, y: 20, w: 270, h: 54, t: 'Le noyau des atomes\nest-il modifié ?', style: 'gris' },
      { id: 'c', x: 260, y: 170, w: 180, h: 54, t: 'CHIMIQUE\n(les espèces changent)', style: 'vert', gras: true },
      { id: 'n', x: 470, y: 170, w: 170, h: 54, t: 'NUCLÉAIRE\n(l\'élément change)', style: 'rouge', gras: true }],
      fleches: [{ de: 'q1', a: 'p', t: 'oui', lx: -18, ly: 0 }, { de: 'q1', a: 'q2', t: 'non' }, { de: 'q2', a: 'c', t: 'non', lx: -20, ly: 0 }, { de: 'q2', a: 'n', t: 'oui', lx: 18, ly: 0 }] });
  pose(F, 'changements-etat', 'changements-etat', '## 2. Transformations physiques',
    'Les six changements d\'état d\'un corps pur entre solide, liquide et gaz.');
}

// ═════════════════════════ Poses : 3e ═════════════════════════
{
  const F = 'troisieme/physique-chimie/atomes-ions-ph';
  pose(F, 'ions', 'ions-formation', '### Cations et anions',
    'L\'atome de sodium perd un électron et devient l\'ion Na⁺ ; l\'atome de chlore en gagne un et devient l\'ion Cl⁻. Le noyau ne change pas.');
  pose(F, 'tests-ions', 'tubes-tests', '## 4. Les tests caractéristiques d\'ions',
    'Couleur des précipités obtenus : à la soude pour les ions cuivre II, fer II, fer III et zinc, au nitrate d\'argent pour les ions chlorure.',
    { tubes: [{ t: 'Cu²⁺', r: 'soude', r2: 'bleu', precipite: '#2f6fd6' }, { t: 'Fe²⁺', r: 'soude', r2: 'vert', precipite: '#4f8a3a' }, { t: 'Fe³⁺', r: 'soude', r2: 'rouille', precipite: '#b5541d' }, { t: 'Zn²⁺', r: 'soude', r2: 'blanc', precipite: '#ffffff', bordP: '#999' }, { t: 'Cl⁻', r: 'nitrate d\'argent', r2: 'blanc', precipite: '#ffffff', bordP: '#999' }] });
  pose(F, 'echelle-ph', 'echelle-ph', '### L\'échelle de pH',
    'Échelle de pH de 0 à 14 avec les exemples de la fiche, et les couleurs du bleu de bromothymol : jaune en milieu acide, vert au neutre, bleu en milieu basique.',
    { bbt: true, exemples: [{ pH: 2.2, t: 'jus de citron' }, { pH: 7, t: 'eau pure' }, { pH: 12.5, t: 'déboucheur' }] });
}
{
  const F = 'troisieme/physique-chimie/conversions-energie-signaux';
  pose(F, 'chaine-barrage', 'diagramme', '## 2. La chaîne d\'énergie',
    'Chaîne d\'énergie d\'un barrage : l\'eau du lac fait tourner la turbine, qui entraîne l\'alternateur ; une partie de l\'énergie est perdue en chaleur.',
    { W: 660, H: 230, boites: [
      { id: 'l', x: 4, y: 50, w: 100, h: 56, t: 'eau du lac', style: 'bleu', forme: 'ellipse' },
      { id: 't', x: 182, y: 50, w: 100, h: 56, t: 'turbine', style: 'gris', gras: true },
      { id: 'a', x: 370, y: 50, w: 116, h: 56, t: 'alternateur', style: 'gris', gras: true },
      { id: 'm', x: 564, y: 50, w: 92, h: 56, t: 'maisons', style: 'vert', forme: 'ellipse' },
      { id: 'p', x: 230, y: 160, w: 200, h: 50, t: 'pertes (chaleur)', style: 'rouge', forme: 'ellipse' }],
      fleches: [{ de: 'l', a: 't', t: 'mécanique', taille: 12 }, { de: 't', a: 'a', t: 'mécanique', taille: 12 }, { de: 'a', a: 'm', t: 'électrique', taille: 12 }, { de: 't', a: 'p', couleur: ROUGE }, { de: 'a', a: 'p', couleur: ROUGE }] });
  pose(F, 'bilan-lampe', 'bandes-energie', '## 5. Le rendement',
    'Bilan de la lampe de l\'exemple : sur 100 J d\'énergie électrique reçue, seuls 5 J deviennent de la lumière ; 95 J partent en chaleur (rendement 5 %).',
    { E0: 100, unite: 'J', etapes: [{ nom: 'lampe', eta: 0.05 }], entree: 'énergie électrique reçue', sortie: 'lumière', perte: 'chaleur' });
  pose(F, 'sonar', 'echo', '### Mesurer une distance : la télémétrie',
    'Sonar de l\'exemple : l\'ultrason fait l\'aller-retour jusqu\'au fond en 0,2 s ; la profondeur vaut la moitié du trajet, soit 150 m.',
    { vertical: true, emetteur: 'bateau (émetteur-récepteur)', obstacle: 'fond marin', milieu: 'eau de mer : v ≈ 1 500 m/s', formule: 'h = v × Δt / 2' });
}
{
  const F = 'troisieme/physique-chimie/masse-volumique';
  pose(F, 'deplacement-eau', 'deplacement-eau', '### Le volume d\'un solide',
    'Méthode par déplacement d\'eau de l\'exemple : le niveau passe de 50 mL à 90 mL quand on plonge le caillou ; son volume est donc 40 cm³.');
  pose(F, 'flotte-coule', 'flotte-coule', '## 6. Flotte ou coule ? La comparaison avec l\'eau',
    'Masses volumiques de la fiche comparées à celle de l\'eau : les matériaux moins denses que l\'eau flottent, les autres coulent (échelle logarithmique).');
}
{
  const F = 'troisieme/physique-chimie/poids-gravitation-forces';
  pose(F, 'poids-astres', 'poids-astres', '## 4. Le poids sur d\'autres astres',
    'Poids d\'un astronaute de 80 kg sur quatre astres, avec les valeurs de g de la fiche : sa masse ne change pas, son poids si.');
  pose(F, 'vitesse-circulaire', 'circulaire-dv', '### Deux mouvements uniformes',
    'Mouvement circulaire uniforme : le vecteur vitesse garde la même valeur mais sa direction, toujours tangente au cercle, change sans cesse.', { dv: false });
  pose(F, 'lustre', 'lustre', '### La condition d\'équilibre',
    'Le lustre de 2,0 kg de l\'exemple est en équilibre : la tension du fil et le poids, de même valeur 19,6 N, se compensent.');
}
{
  const F = 'troisieme/physique-chimie/transformations-chimiques';
  pose(F, 'combustion-methane', 'reaction-modeles', '## 2. La redistribution des atomes',
    'Combustion du méthane en modèles moléculaires : les atomes des réactifs se réorganisent en dioxyde de carbone et en eau, sans qu\'aucun ne disparaisse.',
    { reactifs: [['CH4', 1], ['O2', 2]], produits: [['CO2', 1], ['H2O', 2]], equation: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O', bilan: '1 C, 4 H et 4 O de chaque côté de la flèche' });
  pose(F, 'tests-produits', 'tubes-tests', '## 6. Les combustions',
    'Tests des produits : le dioxyde de carbone trouble l\'eau de chaux, l\'eau fait bleuir le sulfate de cuivre anhydre, le dihydrogène détone (« pop ») à la flamme.',
    { W: 600, tubes: [{ t: 'CO₂', r: 'eau de chaux', r2: 'se trouble', liquide: '#e9ecef', precipite: '#ffffff', bordP: '#bbb' }, { t: 'eau', r: 'sulfate de cuivre', r2: 'anhydre → bleu', liquide: '#ffffff', precipite: '#2f8fe0' }, { t: 'H₂', r: 'flamme', r2: 'détonation « pop »', liquide: '#ffffff' }] });
}

// ═════════════════════════ Terminale technologique STI2D / STL ═════════════════════════

S['dephasage'] = ({ T = 20, dt = 2.5 } = {}) => {
  const { svg, X, Y } = graphe({ W: 640, H: 300, xmin: 0, xmax: 40, ymin: -1.7, ymax: 1.5, pasX: 5, pasY: 0.5, gradY: false, nomX: 't (ms)', nomY: '', fmtX: (v) => fr(v, 0), g: 40, grille: false });
  let s = svg + ligne(X(0), Y(0), X(40), Y(0), { couleur: AXE, epaisseur: 1.2 });
  const w = (2 * Math.PI) / T;
  s += trace((t) => Math.cos(w * t), 0, 40, X, Y, { couleur: BLEU });
  s += trace((t) => 0.6 * Math.cos(w * (t - dt)), 0, 40, X, Y, { couleur: ROUGE });
  s += texte(X(9), Y(1.0) - 6, 'u(t)', { taille: 14, couleur: BLEU, gras: true }) + texte(X(10.2), Y(0.6) + 2, 'i(t)', { taille: 14, couleur: ROUGE, gras: true, ancre: 'start' });
  s += ligne(X(T), Y(1), X(T), Y(1.32), { couleur: BLEU, epaisseur: 1, pointilles: true }) + ligne(X(T + dt), Y(0.6), X(T + dt), Y(1.32), { couleur: ROUGE, epaisseur: 1, pointilles: true });
  s += cote(X(T), Y(1.25), X(T + dt), Y(1.25), '', {}) + texte(X(T + dt) + 8, Y(1.25) + 5, `Δt = ${fr(dt, 1)} ms`, { taille: 13, gras: true, ancre: 'start' });
  s += ligne(X(0), Y(1), X(0), Y(-1.3), { couleur: BLEU, epaisseur: 1, pointilles: true }) + ligne(X(T), Y(-1.3), X(T), Y(1), { couleur: BLEU, epaisseur: 1, pointilles: true });
  s += cote(X(0), Y(-1.3), X(T), Y(-1.3), `T = ${T} ms`, { dy: 16 });
  return enveloppe(640, 300, s);
};

S['paroi'] = () => {
  const W = 620, H = 290, x1 = 270, x2 = 350, y1 = 40, y2 = 230;
  let s = rect(0, y1, x1, y2 - y1, { fond: '#fbe3dc', bord: 'none', ep: 0 }) + rect(x2, y1, W - x2, y2 - y1, { fond: '#dceaf8', bord: 'none', ep: 0 });
  s += rect(x1, y1, x2 - x1, y2 - y1, { fond: '#f6e7b8', bord: ENCRE, ep: 2 });
  for (let k = 0; k < 9; k++) { const y = y1 + 12 + k * 21; s += chemin(`M ${x1 + 6} ${y} q 17 -8 34 0 t 34 0`, { couleur: '#c9a227', ep: 1.4 }); }
  s += texte(120, 70, 'intérieur', { taille: 14, gras: true, couleur: ROUGE }) + texte(120, 92, 'θ = 20 °C', { taille: 14, couleur: ROUGE });
  s += texte(490, 70, 'extérieur', { taille: 14, gras: true, couleur: BLEU }) + texte(490, 92, 'θ = 0 °C', { taille: 14, couleur: BLEU });
  s += fleche(150, 160, 470, 160, { couleur: ORANGE, epaisseur: 5, pointe: 16 });
  s += etiquette(440, 190, 'flux thermique Φ', { taille: 14, couleur: ORANGE, gras: true });
  s += texte(120, 190, 'du chaud\nvers le froid', { taille: 13, couleur: ATTENUE });
  s += cote(x1, y2 + 18, x2, y2 + 18, 'e = 20 cm', { dy: 20 });
  s += texte(x1 + 40, 28, 'laine de verre', { taille: 13, gras: true });
  s += texte(W - 10, H - 12, 'R = e / (λ S) = 0,50 K/W  ;  Φ = ΔT / R = 40 W', { taille: 13, ancre: 'end', gras: true });
  return enveloppe(W, H, s);
};

S['moment-cle'] = () => {
  const W = 620, H = 280, ox = 130, oy = 170, L = 320;
  let s = '';
  const hexa = [...Array(6)].map((_, k) => [ox + 30 * Math.cos((k * Math.PI) / 3 + Math.PI / 6), oy + 30 * Math.sin((k * Math.PI) / 3 + Math.PI / 6)]);
  s += polygone(hexa, { fond: '#cfd6de', couleur: ENCRE, epaisseur: 2 });
  s += rect(ox + 26, oy - 12, L - 26, 24, { fond: '#9aa5b1', bord: ENCRE, ep: 2, rx: 10 });
  s += `<circle cx="${ox}" cy="${oy}" r="5" fill="${ENCRE}"/>` + texte(ox - 14, oy + 52, 'axe de rotation (écrou)', { taille: 12, couleur: ATTENUE });
  s += fleche(ox + L - 10, oy, ox + L - 10, oy - 120, { couleur: ROUGE, epaisseur: 3.4, pointe: 14 }) + texte(ox + L + 2, oy - 100, 'F = 200 N', { taille: 14, couleur: ROUGE, gras: true, ancre: 'start' });
  s += angleDroit(ox + L - 10, oy - 12, [0, -1], [-1, 0], { taille: 12 });
  s += cote(ox, oy + 30, ox + L - 10, oy + 30, '', {}) + texte(ox + (L - 10) / 2 + 20, oy + 52, 'bras de levier d = 25 cm', { taille: 13, gras: true });
  s += flecheCourbe(ox - 46, oy + 20, ox - 56, oy - 40, ox - 6, oy - 52, { couleur: VERT, ep: 2 }) + texte(ox - 60, oy - 62, 'rotation', { taille: 12, couleur: VERT });
  s += texte(W / 2, 34, 'M = F × d = 200 × 0,25 = 50 N·m', { taille: 15, gras: true });
  return enveloppe(W, H, s);
};

S['hydrostatique'] = () => {
  const W = 620, H = 310, y0 = 60, k = 8; // 8 px par mètre
  let s = rect(40, y0, 300, 25 * k, { fond: EAU, bord: 'none', ep: 0 }) + ligne(40, y0, 340, y0, { couleur: EAU_BORD, epaisseur: 2 });
  s += polyligne([[40, y0 - 20], [40, y0 + 25 * k], [340, y0 + 25 * k], [340, y0 - 20]], { couleur: ENCRE, ep: 2.4 });
  s += texte(190, y0 - 10, 'air : p atm ≈ 1,0 bar', { taille: 12, couleur: ATTENUE });
  [[0, '1,0'], [10, '2,0'], [20, '3,0']].forEach(([z, p]) => {
    const y = y0 + z * k;
    s += `<circle cx="190" cy="${nb(y)}" r="5" fill="${BLEU}"/>`;
    s += ligne(340, y, 360, y, { couleur: ATTENUE, epaisseur: 1 }) + texte(366, y + 5, `${z} m`, { taille: 13, ancre: 'start' });
    s += texte(430, y + 5, `p ≈ ${p} bar`, { taille: 14, ancre: 'start', gras: true, couleur: BLEU });
  });
  s += fleche(70, y0 + 6, 70, y0 + 22 * k, { couleur: ENCRE, epaisseur: 1.6 }) + texte(80, y0 + 12 * k, 'profondeur', { taille: 12, ancre: 'start', couleur: ATTENUE });
  s += texte(W / 2, H - 12, 'p = p atm + ρ g h : environ 1 bar de plus tous les 10 m d\'eau', { taille: 13, gras: true });
  return enveloppe(W, H, s);
};

S['presse'] = () => {
  const W = 620, H = 300, yb = 250;
  const xa = 110, wa = 30, xb = 380, wb = 150, ya = 120, yB = 150;
  let s = '';
  s += chemin(`M ${xa} ${ya} L ${xa} ${yb} L ${xb + wb} ${yb} L ${xb + wb} ${yB} L ${xb} ${yB} L ${xb} ${yb - 40} L ${xa + wa} ${yb - 40} L ${xa + wa} ${ya} Z`, { couleur: 'none', ep: 0, fond: '#f3d36b' });
  s += polyligne([[xa, 60], [xa, yb], [xb + wb, yb], [xb + wb, 90]], { couleur: ENCRE, ep: 2.6 });
  s += polyligne([[xa + wa, 60], [xa + wa, yb - 40], [xb, yb - 40], [xb, 90]], { couleur: ENCRE, ep: 2.6 });
  s += rect(xa, ya - 12, wa, 12, { fond: '#7d8794', bord: ENCRE, ep: 1.6 }) + rect(xb, yB - 14, wb, 14, { fond: '#7d8794', bord: ENCRE, ep: 1.6 });
  s += fleche(xa + wa / 2, 30, xa + wa / 2, ya - 14, { couleur: ROUGE, epaisseur: 3 }) + texte(xa + wa + 10, 46, 'F₁ = 100 N', { taille: 14, couleur: ROUGE, gras: true, ancre: 'start' });
  s += texte(xa + wa / 2, yb + 22, 'S₁ = 2 cm²', { taille: 13 });
  s += fleche(xb + wb / 2, yB - 16, xb + wb / 2, 40, { couleur: VERT, epaisseur: 4.5, pointe: 14 }) + texte(xb + wb / 2 + 12, 56, 'F₂ = 2 500 N', { taille: 14, couleur: VERT, gras: true, ancre: 'start' });
  s += texte(xb + wb / 2, yb + 22, 'S₂ = 50 cm²', { taille: 13 });
  s += texte(260, 236, 'liquide : même pression partout', { taille: 12, couleur: ENCRE });
  s += texte(W / 2, H - 10, 'F₁ / S₁ = F₂ / S₂ = 5,0 × 10⁵ Pa : la force est multipliée par 25', { taille: 13, gras: true });
  return enveloppe(W, H, s);
};

S['penetration'] = () => {
  const W = 640, H = 270;
  let s = rect(20, 60, 50, 170, { fond: '#e6e9ee', bord: ENCRE, ep: 2, rx: 6 }) + texte(45, 50, 'source', { taille: 13 });
  const xs = [200, 330, 470];
  s += rect(xs[0], 40, 6, 200, { fond: '#ffffff', bord: ENCRE, ep: 1.4 }) + texte(xs[0] + 3, 258, 'papier', { taille: 12 });
  s += rect(xs[1], 40, 14, 200, { fond: '#c9d1da', bord: ENCRE, ep: 1.4 }) + texte(xs[1] + 7, 258, 'aluminium (mm)', { taille: 12 });
  s += rect(xs[2], 40, 60, 200, { fond: '#6b7480', bord: ENCRE, ep: 1.4 }) + texte(xs[2] + 30, 258, 'plomb épais', { taille: 12 });
  const r = [['α', 90, xs[0] - 2, ROUGE], ['β', 140, xs[1] - 2, BLEU], ['γ', 190, xs[2] - 2, VIOLET]];
  r.forEach(([n, y, x, c]) => {
    if (n === 'γ') { let d = `M 72 ${y}`; for (let xx = 72; xx < x; xx += 2) d += ` L ${xx} ${nb(y + 6 * Math.sin((xx - 72) / 4))}`; s += chemin(d, { couleur: c, ep: 2.2 }); s += pointe(x, y, 1, 0, { couleur: c }); }
    else s += fleche(72, y, x, y, { couleur: c, epaisseur: 3 });
    s += texte(110, y - 10, n, { taille: 16, gras: true, couleur: c });
  });
  s += texte(560, 30, 'pouvoir de pénétration :', { taille: 12, couleur: ATTENUE, ancre: 'middle' });
  s += texte(590, 95, 'α très faible', { taille: 12, couleur: ROUGE }) + texte(590, 145, 'β moyen', { taille: 12, couleur: BLEU }) + texte(590, 195, 'γ très grand', { taille: 12, couleur: VIOLET });
  return enveloppe(W, H, s);
};

S['decroissance'] = ({ nomY = 'N(t)', unite = 't½', titre = '' } = {}) => {
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 0, xmax: 4.4, ymin: 0, ymax: 1.12, pasX: 1, pasY: 0.25, gradY: false, nomX: 'temps', nomY, g: 60, fmtX: (v) => (v === 0 ? '0' : v === 1 ? unite : `${v} ${unite}`) });
  let s = svg + trace((t) => Math.pow(0.5, t), 0, 4.3, X, Y, { couleur: ROUGE });
  [[0, 'N₀'], [1, 'N₀/2'], [2, 'N₀/4'], [3, 'N₀/8']].forEach(([n, t]) => {
    const v = Math.pow(0.5, n);
    s += ligne(X(0), Y(v), X(n), Y(v), { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + ligne(X(n), Y(v), X(n), Y(0), { couleur: ATTENUE, epaisseur: 1, pointilles: true });
    s += `<circle cx="${nb(X(n))}" cy="${nb(Y(v))}" r="4.5" fill="${ROUGE}"/>` + texte(X(0) - 8, Y(v) + 4, t, { taille: 12, ancre: 'end' });
  });
  if (titre) s += texte(400, 70, titre, { taille: 13, couleur: ATTENUE });
  return enveloppe(620, 300, s);
};

S['triangle-feu'] = () => {
  const W = 560, H = 290, A = [280, 50], B = [110, 240], C = [450, 240];
  let s = polygone([A, B, C], { couleur: ROUGE, fond: '#fde3c6', epaisseur: 3 });
  s += texte(160, 135, 'combustible', { taille: 14, gras: true, ancre: 'end' }) + texte(160, 153, '(gaz, essence, bois)', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  s += texte(400, 135, 'comburant', { taille: 14, gras: true, ancre: 'start' }) + texte(400, 153, '(dioxygène de l\'air)', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  s += texte(280, 266, 'source d\'énergie (étincelle, flamme)', { taille: 14, gras: true });
  s += texte(280, 180, 'FEU', { taille: 22, gras: true, couleur: ROUGE });
  s += texte(280, 206, 'supprimer un côté éteint le feu', { taille: 12, couleur: ENCRE });
  return enveloppe(W, H, s);
};

S['signal-spectre'] = () => {
  const g1 = graphe({ W: 340, H: 280, xmin: 0, xmax: 20, ymin: -7, ymax: 7.5, pasX: 5, pasY: 5, nomX: 't (ms)', nomY: 'u (V)', g: 44, grille: false, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  let a = g1.svg + ligne(g1.X(0), g1.Y(0), g1.X(20), g1.Y(0), { couleur: AXE, epaisseur: 1.2 });
  a += trace((t) => 5 * Math.cos(2 * Math.PI * 0.1 * t) + 1.5 * Math.cos(2 * Math.PI * 0.3 * t), 0, 20, g1.X, g1.Y, { couleur: BLEU });
  const g2 = graphe({ W: 320, H: 280, xmin: 0, xmax: 450, ymin: 0, ymax: 6.5, pasX: 100, pasY: 1, nomX: 'f (Hz)', nomY: 'amplitude (V)', g: 40, d: 24, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  let b = g2.svg + ligne(g2.X(100), g2.Y(0), g2.X(100), g2.Y(5), { couleur: BLEU, epaisseur: 6 }) + ligne(g2.X(300), g2.Y(0), g2.X(300), g2.Y(1.5), { couleur: ORANGE, epaisseur: 6 });
  b += texte(g2.X(100) + 8, g2.Y(5) + 4, '5,0 V', { taille: 12, gras: true, couleur: BLEU, ancre: 'start' }) + texte(g2.X(300), g2.Y(1.5) - 10, '1,5 V (rang 3)', { taille: 12, gras: true, couleur: ORANGE });
  return enveloppe(670, 280, a + `<g transform="translate(350,0)">${b}</g>`);
};

// ═════════════════════════ Poses : Terminale technologique ═════════════════════════
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/energie-electrique-thermique';
  pose(F, 'dephasage', 'dephasage', '### Notion de déphasage',
    'Exemple de la fiche : les maxima de i arrivent 2,5 ms après ceux de u, pour une période de 20 ms, d\'où un déphasage de π/4 rad.');
  pose(F, 'reseau', 'diagramme', '### La parade : la haute tension',
    'Le réseau électrique : on élève la tension à la sortie de la centrale, on transporte sous 400 kV pour réduire les pertes, puis on l\'abaisse jusqu\'à 230 V.',
    { W: 680, H: 200, boites: [
      { id: 'c', x: 4, y: 60, w: 100, h: 56, t: 'centrale', style: 'jaune', gras: true },
      { id: 'e', x: 150, y: 60, w: 112, h: 56, t: 'transformateur\nélévateur', style: 'gris', taille: 12 },
      { id: 'l', x: 312, y: 60, w: 110, h: 56, t: 'ligne\n400 kV', style: 'rouge', gras: true },
      { id: 'a', x: 470, y: 60, w: 112, h: 56, t: 'transformateur\nabaisseur', style: 'gris', taille: 12 },
      { id: 'm', x: 616, y: 60, w: 60, h: 56, t: 'prise\n230 V', style: 'vert', taille: 12 }],
      fleches: [{ de: 'c', a: 'e' }, { de: 'e', a: 'l' }, { de: 'l', a: 'a' }, { de: 'a', a: 'm' }],
      textes: [{ x: 367, y: 150, t: 'haute tension : intensité faible, pertes R I² très réduites', taille: 13, couleur: ROUGE }, { x: 340, y: 30, t: 'même puissance P = U I transportée', taille: 12, couleur: ATTENUE }] });
  pose(F, 'paroi', 'paroi', '## 4. Flux thermique et résistance thermique',
    'Exemple de la fiche : 10 m² de laine de verre de 20 cm, avec 20 °C dedans et 0 °C dehors ; la résistance thermique vaut 0,50 K/W et le flux 40 W.');
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/energie-mecanique-fluides';
  pose(F, 'moment-cle', 'moment-cle', '## 3. Le moment d\'une force : faire tourner',
    'Clé de 25 cm poussée perpendiculairement au bout du manche avec 200 N : le moment par rapport à l\'axe de l\'écrou vaut 50 N·m.');
  pose(F, 'hydrostatique', 'hydrostatique', '## 6. Le principe fondamental de l\'hydrostatique',
    'Dans l\'eau, la pression augmente d\'environ 1 bar tous les 10 m de profondeur, en partant de la pression atmosphérique à la surface.');
  pose(F, 'presse', 'presse', '### La presse hydraulique : multiplier la force',
    'Presse hydraulique de l\'exemple : 100 N sur le piston de 2 cm² donnent 2 500 N sur celui de 50 cm², car la pression est la même dans tout le liquide.');
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/matiere-materiaux';
  pose(F, 'penetration', 'penetration', '### Noyaux et isotopes',
    'Pouvoir de pénétration des rayonnements : α est arrêté par une feuille de papier, β par quelques millimètres d\'aluminium, γ par une forte épaisseur de plomb.');
  pose(F, 'demi-vie', 'decroissance', '### La demi-vie',
    'Décroissance radioactive : à chaque demi-vie, le nombre de noyaux restants est divisé par deux ; il en reste la moitié, puis le quart, puis le huitième.');
  pose(F, 'triangle-feu', 'triangle-feu', '### Ce qu\'est une combustion',
    'Le triangle du feu : un combustible, un comburant et une source d\'énergie sont nécessaires ; en supprimer un seul suffit à éteindre le feu.');
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/mesure-incertitudes';
  pose(F, 'quadrature', 'quadrature', '### Somme ou différence : les incertitudes absolues s\'ajoutent « au carré »',
    'Masse par différence : les incertitudes de 0,05 g se combinent comme les côtés d\'un triangle rectangle et donnent environ 0,07 g, moins que leur somme.');
  pose(F, 'compatibilite', 'comparaison-reference', '### La démarche',
    'Vitesse du son mesurée 347 ± 4 m/s, référence 343 m/s : l\'écart vaut une incertitude-type, donc le résultat est compatible.',
    { mes: 347, u: 4, ref: 343, unite: 'm/s', dec: 0 });
}
{
  const F = 'terminale-techno/pc-maths-sti2d-stl/ondes-signaux';
  pose(F, 'signal-spectre', 'signal-spectre', '### Le spectre d\'amplitude',
    'Exemple de la fiche : le signal somme de deux sinusoïdes, 5,0 V à 100 Hz et 1,5 V à 300 Hz, et son spectre d\'amplitude à deux raies.');
  pose(F, 'niveaux-db', 'echelle-db', '### Ordres de grandeur à connaître pour situer',
    'Les ordres de grandeur de la fiche sur l\'échelle des décibels : risque auditif dès 85 dB en exposition prolongée, douleur vers 120 dB.',
    { reperes: [{ L: 0, t: 'seuil\nd\'audibilité', ancre: 'start' }, { L: 60, t: 'conversation' }, { L: 100, t: 'concert' }] });
}

// ───────────────────────── Terminale ST2S ─────────────────────────

S['modes-transfert-corps'] = () => {
  const W = 640, H = 320, cx = 320;
  let s = rect(0, 268, W, 52, { fond: '#d9dee5', bord: 'none', ep: 0 }) + texte(560, 300, 'sol froid', { taille: 12, couleur: ATTENUE });
  s += `<circle cx="${cx}" cy="70" r="24" fill="#f2c9a9" stroke="${ENCRE}" stroke-width="2"/>`;
  s += rect(cx - 34, 98, 68, 110, { fond: '#f2c9a9', bord: ENCRE, ep: 2, rx: 18 });
  s += rect(cx - 30, 206, 24, 62, { fond: '#f2c9a9', bord: ENCRE, ep: 2, rx: 8 }) + rect(cx + 6, 206, 24, 62, { fond: '#f2c9a9', bord: ENCRE, ep: 2, rx: 8 });
  s += texte(cx, 160, '37 °C', { taille: 15, gras: true, couleur: ROUGE });
  // conduction : pieds → sol
  s += fleche(cx - 18, 262, cx - 18, 292, { couleur: ROUGE, epaisseur: 3 }) + fleche(cx + 18, 262, cx + 18, 292, { couleur: ROUGE, epaisseur: 3 });
  s += texte(cx - 46, 300, 'conduction (contact)', { taille: 13, gras: true, couleur: ROUGE, ancre: 'end' });
  // convection : air qui monte en emportant l'énergie
  s += flecheCourbe(cx - 44, 200, cx - 90, 140, cx - 60, 60, { couleur: BLEU, ep: 2.4 }) + flecheCourbe(cx - 60, 220, cx - 120, 150, cx - 100, 70, { couleur: BLEU, ep: 2.4 });
  s += texte(cx - 130, 42, 'convection (air en mouvement)', { taille: 13, gras: true, couleur: BLEU });
  // rayonnement : ondes infrarouges
  [110, 150].forEach((y) => { let d = `M ${cx + 44} ${y}`; for (let x = cx + 44; x <= cx + 140; x += 2) d += ` L ${x} ${nb(y + 6 * Math.sin((x - cx - 44) / 5))}`; s += chemin(d, { couleur: ORANGE, ep: 2.2 }) + pointe(cx + 142, y, 1, 0, { couleur: ORANGE }); });
  s += texte(cx + 156, 128, 'rayonnement\n(infrarouge)', { taille: 13, gras: true, couleur: ORANGE, ancre: 'start' });
  // évaporation de la sueur
  [[cx + 40, 196], [cx + 54, 214], [cx + 44, 232]].forEach(([x, y]) => { s += chemin(`M ${x} ${y - 7} Q ${x + 5} ${y} ${x} ${y + 3} Q ${x - 5} ${y} ${x} ${y - 7} Z`, { couleur: BLEU, ep: 1.2, fond: '#9ec5f0' }); });
  s += fleche(cx + 64, 214, cx + 120, 196, { couleur: VIOLET, epaisseur: 2, pointilles: true }) + texte(cx + 128, 204, 'évaporation de la sueur', { taille: 13, gras: true, couleur: VIOLET, ancre: 'start' });
  return enveloppe(W, H, s);
};

S['liaisons-hydrogene'] = () => {
  const W = 640, H = 300, d = 46, dh = 70, ang = (104.5 * Math.PI) / 180;
  const mol = (O, a) => [O, [O[0] + d * Math.cos(a), O[1] + d * Math.sin(a)], [O[0] + d * Math.cos(a + ang), O[1] + d * Math.sin(a + ang)]];
  const suite = (H1, a) => [H1[0] + dh * Math.cos(a), H1[1] + dh * Math.sin(a)];
  const A = mol([80, 150], 0);
  const aB = (-40 * Math.PI) / 180;
  const B = mol(suite(A[1], 0), aB);
  const C = mol(suite(B[1], aB), (100 * Math.PI) / 180);
  const D = mol(suite(B[2], aB + ang), (-150 * Math.PI) / 180);
  let s = '';
  const hb = (Hx, O) => ligne(Hx[0], Hx[1], O[0], O[1], { couleur: VERT, epaisseur: 2.4, pointilles: true });
  s += hb(A[1], B[0]) + hb(B[1], C[0]) + hb(B[2], D[0]);
  for (const M of [A, B, C, D]) {
    s += ligne(M[0][0], M[0][1], M[1][0], M[1][1], { couleur: ENCRE, epaisseur: 3 }) + ligne(M[0][0], M[0][1], M[2][0], M[2][1], { couleur: ENCRE, epaisseur: 3 });
    s += disque(M[0][0], M[0][1], 15, '#e53935', { bord: '#9b1c1c' }) + texte(M[0][0], M[0][1] + 5, 'O', { taille: 13, gras: true, couleur: PAPIER });
    for (const h of [M[1], M[2]]) s += disque(h[0], h[1], 10, '#ffffff', { bord: '#555' }) + texte(h[0], h[1] + 4, 'H', { taille: 12, gras: true });
  }
  s += texte(A[0][0] - 4, A[0][1] - 22, 'δ−', { taille: 14, gras: true, couleur: ROUGE }) + texte(A[1][0] + 2, A[1][1] - 16, 'δ+', { taille: 14, gras: true, couleur: BLEU });
  s += texte(A[2][0] - 18, A[2][1] + 6, 'δ+', { taille: 14, gras: true, couleur: BLEU, ancre: 'end' });
  s += ligne(450, 90, 490, 90, { couleur: ENCRE, epaisseur: 3 }) + texte(500, 95, 'liaison covalente O–H', { taille: 13, ancre: 'start' });
  s += ligne(450, 120, 490, 120, { couleur: VERT, epaisseur: 2.4, pointilles: true }) + texte(500, 125, 'liaison hydrogène', { taille: 13, ancre: 'start', couleur: VERT, gras: true });
  s += texte(450, 160, 'le H (δ+) d\'une molécule attire\nle O (δ−) d\'une molécule voisine', { taille: 12, ancre: 'start', couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['liaison-peptidique'] = () => {
  const W = 660, H = 250;
  const t = (x, y, contenu, taille = 16) => `<text x="${x}" y="${y}" font-size="${taille}" text-anchor="middle" fill="${ENCRE}" font-weight="bold">${contenu}</text>`;
  const r = (c) => `<tspan fill="${ROUGE}">${c}</tspan>`, v = (c) => `<tspan fill="${VERT}">${c}</tspan>`;
  let s = texte(W / 2, 30, 'deux acides aminés', { taille: 13, couleur: ATTENUE });
  s += t(170, 70, `H₂N–CHR₁–CO${r('OH')}`) + t(330, 70, '+') + t(490, 70, `${r('H')}–NH–CHR₂–COOH`);
  s += fleche(W / 2, 92, W / 2, 140, { couleur: ENCRE, epaisseur: 2.4 }) + texte(W / 2 + 12, 122, 'condensation', { taille: 13, ancre: 'start', couleur: ATTENUE });
  s += t(260, 180, `H₂N–CHR₁–${v('CO–NH')}–CHR₂–COOH`) + t(500, 180, `+ ${r('H₂O')}`);
  s += texte(260, 214, 'liaison peptidique (fonction amide)', { taille: 13, gras: true, couleur: VERT });
  s += texte(500, 214, 'une molécule d\'eau part', { taille: 13, couleur: ROUGE });
  return enveloppe(W, H, s);
};

S['amphiphile'] = () => {
  const W = 640, H = 300;
  const molecule = (x, y, a, L = 70) => {
    const ux = Math.cos(a), uy = Math.sin(a), nx = -uy, ny = ux;
    let d = `M ${nb(x + 9 * ux)} ${nb(y + 9 * uy)}`;
    for (let k = 1; k <= 6; k++) { const t = 9 + (k * (L - 9)) / 6, e = k % 2 ? 5 : -5; d += ` L ${nb(x + t * ux + e * nx)} ${nb(y + t * uy + e * ny)}`; }
    return chemin(d, { couleur: ORANGE, ep: 2.4 }) + disque(x, y, 9, '#5b9bd5', { bord: BLEU });
  };
  let s = rect(0, 0, W, H, { fond: '#e8f2fb', bord: 'none', ep: 0 });
  s += molecule(60, 90, 0, 110);
  s += texte(60, 70, 'tête hydrophile', { taille: 13, gras: true, couleur: BLEU }) + texte(120, 124, 'queue hydrophobe (chaîne carbonée)', { taille: 13, gras: true, couleur: ORANGE, ancre: 'start' });
  const cx = 450, cy = 170, R = 48;
  s += disque(cx, cy, R, '#f3d36b', { bord: '#b8901a', ep: 1.4 }) + texte(cx, cy + 5, 'graisse', { taille: 13, gras: true });
  for (let k = 0; k < 12; k++) { const a = (k * 2 * Math.PI) / 12; s += molecule(cx + (R + 40) * Math.cos(a), cy + (R + 40) * Math.sin(a), a + Math.PI, 46); }
  s += texte(160, 250, 'dans l\'eau, les queues s\'accrochent à la graisse\net les têtes restent tournées vers l\'eau', { taille: 13, couleur: ENCRE });
  s += texte(600, 30, 'eau', { taille: 14, gras: true, couleur: BLEU, ancre: 'end' });
  return enveloppe(W, H, s);
};

S['retrecissement'] = () => {
  const W = 640, H = 260, yc = 120, h1 = 60, h2 = 30, xa = 270, xb = 340;
  let s = chemin(`M 20 ${yc - h1} L ${xa} ${yc - h1} L ${xb} ${yc - h2} L 620 ${yc - h2} L 620 ${yc + h2} L ${xb} ${yc + h2} L ${xa} ${yc + h1} L 20 ${yc + h1} Z`, { couleur: 'none', ep: 0, fond: '#f6caca' });
  s += polyligne([[20, yc - h1], [xa, yc - h1], [xb, yc - h2], [620, yc - h2]], { couleur: ENCRE, ep: 2.4 }) + polyligne([[20, yc + h1], [xa, yc + h1], [xb, yc + h2], [620, yc + h2]], { couleur: ENCRE, ep: 2.4 });
  s += fleche(100, yc, 160, yc, { couleur: ROUGE, epaisseur: 3.4 }) + fleche(430, yc, 570, yc, { couleur: ROUGE, epaisseur: 3.4 });
  s += texte(130, yc - 12, 'v₁', { taille: 15, gras: true, couleur: ROUGE }) + texte(500, yc - 10, 'v₂', { taille: 15, gras: true, couleur: ROUGE });
  s += texte(145, 210, 'grande section S₁', { taille: 13, gras: true }) + texte(145, 230, 'le fluide va lentement', { taille: 13, couleur: ATTENUE });
  s += texte(480, 190, 'petite section S₂', { taille: 13, gras: true }) + texte(480, 210, 'le fluide va vite', { taille: 13, couleur: ATTENUE });
  s += texte(W / 2, 30 - 6, 'même débit partout : D = v₁ × S₁ = v₂ × S₂', { taille: 14, gras: true });
  return enveloppe(W, H, s);
};

S['tension-arterielle'] = () => {
  const { svg, X, Y } = graphe({ W: 640, H: 320, xmin: 0, xmax: 20, ymin: 50, ymax: 160, pasX: 5, pasY: 20, gradX: false, nomX: 'temps', nomY: 'pression (mmHg)', g: 56, fmtY: (v) => fr(v, 0) });
  let s = svg;
  const sang = (t) => { const ph = t % 1; return 80 + 40 * (ph < 0.15 ? Math.sin((ph / 0.15) * (Math.PI / 2)) : Math.pow((1 - ph) / 0.85, 1.5)); };
  s += trace(sang, 0, 20, X, Y, { couleur: ROUGE, ep: 1.8, n: 800 });
  const br = (t) => 150 - 4.5 * t;
  s += trace(br, 0, 20, X, Y, { couleur: BLEU, ep: 3 });
  const t1 = (150 - 120) / 4.5, t2 = (150 - 80) / 4.5;
  s += ligne(X(t1), Y(50), X(t1), Y(158), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true }) + ligne(X(t2), Y(50), X(t2), Y(158), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  s += texte(X(t1 / 2), Y(54), 'aucun bruit', { taille: 12, couleur: ATTENUE }) + texte(X((t1 + t2) / 2), Y(54), 'bruits par à-coups', { taille: 12, gras: true }) + texte(X((t2 + 20) / 2), Y(54), 'plus de bruit', { taille: 12, couleur: ATTENUE });
  s += etiquette(X(t1) + 6, Y(126), 'systolique 120', { taille: 12, couleur: ROUGE, ancre: 'start', gras: true }) + etiquette(X(t2) + 6, Y(86) - 0, 'diastolique 80', { taille: 12, couleur: ROUGE, ancre: 'start', gras: true });
  s += etiquette(X(3), Y(150), 'pression du brassard', { taille: 13, couleur: BLEU, gras: true, ancre: 'start' }) + etiquette(X(17.5), Y(130), 'pression du sang', { taille: 13, couleur: ROUGE, gras: true });
  return enveloppe(640, 320, s);
};

S['hydrolyse-condensation'] = () => {
  const W = 660, H = 270;
  const hexa = (cx, cy, t) => {
    const pts = [...Array(6)].map((_, k) => [cx + 30 * Math.cos((k * Math.PI) / 3), cy + 30 * Math.sin((k * Math.PI) / 3)]);
    return polygone(pts, { couleur: BLEU, fond: '#dbe8f8', epaisseur: 2 }) + texte(cx, cy + 5, t, { taille: 12, gras: true });
  };
  let s = texte(130, 40, 'maltose (diholoside)', { taille: 13, gras: true });
  s += hexa(80, 110, 'ose') + hexa(180, 110, 'ose') + ligne(110, 110, 150, 110, { couleur: ENCRE, epaisseur: 2.4 }) + texte(130, 102, 'O', { taille: 12, gras: true, couleur: ROUGE });
  s += texte(530, 40, '2 glucose (oses)', { taille: 13, gras: true });
  s += hexa(480, 110, 'ose') + hexa(580, 110, 'ose');
  s += fleche(240, 90, 410, 90, { couleur: VERT, epaisseur: 2.6 }) + texte(325, 78, 'hydrolyse : + H₂O, on coupe', { taille: 13, couleur: VERT, gras: true });
  s += fleche(410, 134, 240, 134, { couleur: VIOLET, epaisseur: 2.6 }) + texte(325, 156, 'condensation : − H₂O, on assemble', { taille: 13, couleur: VIOLET, gras: true });
  s += texte(W / 2, 210, 'C₁₂H₂₂O₁₁ + H₂O ⇄ 2 C₆H₁₂O₆', { taille: 16, gras: true });
  s += texte(W / 2, 238, 'hydrolyse : digestion, déstockage du glycogène ; condensation : mise en réserve', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['argilo-humique'] = () => {
  const W = 640, H = 300;
  let s = rect(0, 0, W, H, { fond: '#f3ead9', bord: 'none', ep: 0 });
  s += ellipse(220, 130, 140, 70, { couleur: '#7a5a2e', fond: '#b98d55', ep: 2 }) + texte(220, 128, 'complexe argilo-humique', { taille: 13, gras: true, couleur: PAPIER }) + texte(220, 146, '(chargé négativement)', { taille: 12, couleur: PAPIER });
  for (let k = 0; k < 10; k++) { const a = (k * 2 * Math.PI) / 10 + 0.2; s += texte(220 + 122 * Math.cos(a), 130 + 56 * Math.sin(a) + 5, '−', { taille: 18, gras: true, couleur: PAPIER }); }
  [['K⁺', -0.3], ['Ca²⁺', 0.9], ['Mg²⁺', 2.3], ['NH₄⁺', 3.6], ['K⁺', 4.6]].forEach(([c, a]) => {
    const x = 220 + 170 * Math.cos(a), y = 130 + 92 * Math.sin(a);
    s += disque(x, y, 19, '#fbd7d7', { bord: ROUGE }) + texte(x, y + 5, c, { taille: 12, gras: true, couleur: ROUGE });
  });
  s += texte(560, 60, 'cations retenus', { taille: 13, gras: true, couleur: ROUGE }) + texte(560, 78, '(attraction électrique)', { taille: 12, couleur: ATTENUE });
  [[470, 150], [520, 190], [455, 220]].forEach(([x, y]) => { s += disque(x, y, 20, '#dbe8f8', { bord: BLEU }) + texte(x, y + 5, 'NO₃⁻', { taille: 12, gras: true, couleur: BLEU }); });
  s += fleche(500, 244, 500, 290, { couleur: BLEU, epaisseur: 2.6 }) + texte(490, 280, 'anions lessivés vers la nappe', { taille: 12, couleur: BLEU, gras: true, ancre: 'end' });
  return enveloppe(W, H, s);
};
{
  const F = 'terminale-techno/pc-sante-st2s/besoins-energetiques-alimentation';
  pose(F, 'modes-transfert', 'modes-transfert-corps', '### Définition',
    'Le corps à 37 °C cède de l\'énergie au milieu plus froid par conduction, convection et rayonnement, et se refroidit aussi par évaporation de la sueur.');
  pose(F, 'muscle', 'bandes-energie', '### Le rendement du muscle',
    'Exemple de la fiche : sur 2 000 J d\'énergie chimique, le muscle fournit environ 500 J de travail mécanique et dissipe 1 500 J en chaleur.',
    { E0: 2000, unite: 'J', etapes: [{ nom: 'muscle', eta: 0.25 }], entree: 'énergie chimique', sortie: 'travail mécanique', perte: 'chaleur' });
  pose(F, 'barre-portion', 'barre-repartition', '### Calculer l\'énergie d\'une portion',
    'Énergie de la barre de l\'exemple : 306 kJ apportés par les glucides, 342 kJ par les lipides et 51 kJ par les protides, soit 699 kJ en tout.',
    { unite: 'kJ', titre: 'énergie de la barre : 699 kJ', parts: [{ v: 306, t: 'glucides (18 g)', style: 'bleu' }, { v: 342, t: 'lipides (9 g)', style: 'orange' }, { v: 51, t: 'protides (3 g)', style: 'vert', ancre: 'end' }] });
}
{
  const F = 'terminale-techno/pc-sante-st2s/biomolecules-eau';
  pose(F, 'liaison-peptidique', 'liaison-peptidique', '### La liaison peptidique',
    'Formation de la liaison peptidique : le groupe –COOH d\'un acide aminé réagit avec le –NH₂ du suivant, une fonction amide se forme et une molécule d\'eau part.');
  pose(F, 'liaisons-hydrogene', 'liaisons-hydrogene', '### La liaison hydrogène',
    'Des molécules d\'eau reliées par des liaisons hydrogène : l\'hydrogène chargé δ+ d\'une molécule attire l\'oxygène chargé δ− d\'une molécule voisine.');
  pose(F, 'amphiphile', 'amphiphile', '### Les molécules amphiphiles',
    'Une molécule amphiphile, comme le savon, a une tête hydrophile et une queue hydrophobe ; dans l\'eau, les queues entourent la graisse et les têtes restent côté eau.');
}
{
  const F = 'terminale-techno/pc-sante-st2s/fluides-pression-sanguine';
  pose(F, 'retrecissement', 'retrecissement', '### Conséquence : vitesse et section varient en sens inverse',
    'Le débit se conserve : là où la section du tuyau diminue, la vitesse du fluide augmente, et inversement.');
  pose(F, 'tensiometre', 'tension-arterielle', '### Le principe de la mesure (tensiomètre)',
    'Pendant le dégonflage du brassard, les bruits apparaissent quand sa pression passe sous 120 mmHg (systolique) et disparaissent sous 80 mmHg (diastolique).');
}
{
  const F = 'terminale-techno/pc-sante-st2s/glucides-ressources-naturelles';
  pose(F, 'hydrolyse-condensation', 'hydrolyse-condensation', '### Deux voies pour la même coupure',
    'Hydrolyse et condensation sont deux réactions inverses : l\'hydrolyse coupe la liaison osidique en fixant de l\'eau, la condensation la forme en éliminant de l\'eau.');
  pose(F, 'eutrophisation', 'diagramme', '### L\'eutrophisation',
    'L\'eutrophisation : un excès de nitrates et de phosphates fait proliférer les algues, dont la décomposition consomme le dioxygène de l\'eau.',
    { W: 660, H: 150, boites: [
      { id: 'a', x: 4, y: 40, w: 140, h: 64, t: 'excès de\nnitrates (N) et\nphosphates (P)', style: 'orange', taille: 13 },
      { id: 'b', x: 178, y: 40, w: 132, h: 64, t: 'les algues\nprolifèrent', style: 'vert', taille: 13 },
      { id: 'c', x: 344, y: 40, w: 140, h: 64, t: 'elles meurent et\nse décomposent :\nO₂ consommé', style: 'gris', taille: 13 },
      { id: 'd', x: 518, y: 40, w: 138, h: 64, t: 'asphyxie\ndes poissons', style: 'rouge', taille: 13, gras: true }],
      fleches: [{ de: 'a', a: 'b' }, { de: 'b', a: 'c' }, { de: 'c', a: 'd' }] });
  pose(F, 'argilo-humique', 'argilo-humique', '### Le complexe argilo-humique',
    'Le complexe argilo-humique, chargé négativement, retient les cations utiles à la plante, tandis que les anions comme les nitrates sont lessivés vers les nappes.');
}
{
  const F = 'terminale-techno/pc-sante-st2s/molecules-organiques';
  pose(F, 'ecritures-ethanol', 'ecritures-ethanol', '## 2. Les quatre façons d\'écrire une molécule',
    'Les quatre écritures de l\'éthanol : formule brute, formule développée, formule semi-développée et formule topologique.');
  pose(F, 'squelettes', 'squelettes', '### Chaîne linéaire, ramifiée, cyclique',
    'Les trois types de squelettes carbonés de la fiche en écriture topologique : pentane linéaire, 2-méthylbutane ramifié et cyclohexane cyclique.');
}

// ───────────────────────── Terminale STL et Terminale PC : chimie des solutions ─────────────────────────

/** pH d'un mélange acide (CA, VA, pKa ; fort si pKa absent) + base forte (CB, V), par bilan des charges. */
function phTitrage(CA, VA, CB, V, pKa = null) {
  const Vt = VA + V, ca = (CA * VA) / Vt, na = (CB * V) / Vt, Kw = 1e-14;
  const g = (h) => {
    const aMoins = pKa == null ? ca : (ca * Math.pow(10, -pKa)) / (Math.pow(10, -pKa) + h);
    return h + na - aMoins - Kw / h;
  };
  let lo = -14, hi = 0; // en log10(h)
  for (let k = 0; k < 80; k++) { const m = (lo + hi) / 2; if (g(Math.pow(10, m)) > 0) hi = m; else lo = m; }
  return -(lo + hi) / 2;
}

S['courbe-ph'] = ({ CA = 0.075, VA = 20, CB = 0.10, pKa = null, Vmax = 30, ph7 = true, demi = false } = {}) => {
  const VE = (CA * VA) / CB;
  const { svg, X, Y } = graphe({ W: 640, H: 330, xmin: 0, xmax: Vmax, ymin: 0, ymax: 14, pasX: 5, pasY: 2, nomX: 'V versé (mL)', nomY: 'pH', g: 50, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  let s = svg + trace((v) => phTitrage(CA, VA, CB, v, pKa), 0, Vmax, X, Y, { couleur: BLEU, n: 600 });
  const pE = phTitrage(CA, VA, CB, VE, pKa);
  s += ligne(X(VE), Y(0), X(VE), Y(pE), { couleur: ROUGE, epaisseur: 1.4, pointilles: true }) + ligne(X(0), Y(pE), X(VE), Y(pE), { couleur: ROUGE, epaisseur: 1.4, pointilles: true });
  s += `<circle cx="${nb(X(VE))}" cy="${nb(Y(pE))}" r="5" fill="${ROUGE}"/>`;
  s += etiquette(X(VE) + 10, Y(pE) + 5, `équivalence : VE = ${fr(VE, 1)} mL, pH ≈ ${fr(pE, 1)}`, { taille: 13, couleur: ROUGE, ancre: 'start', gras: true });
  if (demi && pKa != null) {
    const pd = phTitrage(CA, VA, CB, VE / 2, pKa);
    s += ligne(X(VE / 2), Y(0), X(VE / 2), Y(pd), { couleur: VERT, epaisseur: 1.4, pointilles: true }) + ligne(X(0), Y(pd), X(VE / 2), Y(pd), { couleur: VERT, epaisseur: 1.4, pointilles: true });
    s += `<circle cx="${nb(X(VE / 2))}" cy="${nb(Y(pd))}" r="4.5" fill="${VERT}"/>` + etiquette(X(VE / 2) - 6, Y(pd) - 12, `VE / 2 : pH = pKa = ${fr(pKa, 1)}`, { taille: 12, couleur: VERT, ancre: 'end', gras: true });
  }
  return enveloppe(640, 330, s);
};

S['courbe-conducti'] = ({ VE = 15, Vmax = 30 } = {}) => {
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 0, xmax: Vmax, ymin: 0, ymax: 10, pasX: 5, pasY: 2, gradY: false, nomX: 'V versé (mL)', nomY: 'conductivité σ (allure)', g: 40, fmtX: (v) => fr(v, 0) });
  const sig = (v) => (v <= VE ? 8.5 - (6 / VE) * v : 2.5 + ((6 * 24.9) / 30 / VE) * (v - VE)); // pentes dans le rapport (λNa⁺ − λH₃O⁺) / (λNa⁺ + λHO⁻)
  let s = svg;
  s += trace(sig, 0, Vmax, X, Y, { couleur: BLEU });
  for (let v = 0; v <= Vmax; v += 2.5) if (Math.abs(v - VE) > 0.1) s += `<circle cx="${nb(X(v))}" cy="${nb(Y(sig(v)))}" r="4" fill="${BLEU}"/>`;
  s += ligne(X(VE), Y(0), X(VE), Y(2.5), { couleur: ROUGE, epaisseur: 1.4, pointilles: true }) + texte(X(VE), Y(0) - 8, '', {});
  s += etiquette(X(VE), Y(1.2), `VE = ${fr(VE, 0)} mL`, { taille: 13, couleur: ROUGE, gras: true });
  s += etiquette(X(VE * 0.5) + 10, Y(7.6), 'H₃O⁺ remplacés par Na⁺ :\nσ diminue', { taille: 12, ancre: 'start' });
  s += etiquette(X(VE * 1.35), Y(6.4), 'HO⁻ en excès :\nσ augmente', { taille: 12, ancre: 'start' });
  return enveloppe(620, 300, s);
};

S['pile-daniell'] = () => {
  const W = 640, H = 360;
  let s = '';
  s += becher(90, 290, 150, 130, { niveau: 0.7, couleur: '#e7e7ee' }) + becher(400, 290, 150, 130, { niveau: 0.7, couleur: '#cfe4f7' });
  s += rect(150, 120, 24, 150, { fond: '#a9b2bd', bord: ENCRE, ep: 1.6 }) + texte(162, 288 + 22, 'Zn²⁺ + SO₄²⁻', { taille: 12 });
  s += rect(466, 120, 24, 150, { fond: '#c8793a', bord: ENCRE, ep: 1.6 }) + texte(478, 288 + 22, 'Cu²⁺ + SO₄²⁻', { taille: 12 });
  s += chemin('M 210 236 L 210 150 Q 210 130 230 130 L 410 130 Q 430 130 430 150 L 430 236', { couleur: ENCRE, ep: 16, fond: 'none' }) + chemin('M 210 236 L 210 150 Q 210 130 230 130 L 410 130 Q 430 130 430 150 L 430 236', { couleur: '#f7f1df', ep: 11, fond: 'none' });
  s += texte(320, 120, 'pont salin', { taille: 12, couleur: ATTENUE });
  s += fil([[162, 120], [162, 50], [478, 50], [478, 120]]) + dipole('resistance', 320, 50, 'h');
  s += texte(140, 112, 'Zn', { taille: 14, gras: true, ancre: 'end' }) + texte(500, 112, 'Cu', { taille: 14, gras: true, ancre: 'start' });
  s += texte(120, 78, '⊖ anode', { taille: 14, gras: true, couleur: BLEU }) + texte(530, 78, '⊕ cathode', { taille: 14, gras: true, couleur: ROUGE });
  s += fleche(200, 34, 270, 34, { couleur: VIOLET, epaisseur: 2.4 }) + texte(235, 26, 'électrons', { taille: 12, couleur: VIOLET, gras: true });
  s += fleche(440, 34, 370, 34, { couleur: ROUGE, epaisseur: 2.4 }) + texte(405, 26, 'courant I', { taille: 12, couleur: ROUGE, gras: true });
  s += texte(165, 336, 'oxydation : Zn → Zn²⁺ + 2 e⁻', { taille: 12, couleur: BLEU });
  s += texte(478, 336, 'réduction : Cu²⁺ + 2 e⁻ → Cu', { taille: 12, couleur: ROUGE });
  s += texte(W / 2, 86, 'f.é.m. = 0,34 − (−0,76) = 1,10 V', { taille: 13, gras: true });
  return enveloppe(W, H, s);
};

S['doppler'] = () => {
  const W = 640, H = 300, cy = 145, xs = 330, c = 26, v = 10;
  let s = '';
  for (let k = 1; k <= 5; k++) s += cercle(xs - k * v, cy, k * c, { couleur: BLEU, epaisseur: 1.6 });
  s += disque(xs, cy, 9, ROUGE, { bord: '#8b1a1a' }) + fleche(xs + 12, cy, xs + 60, cy, { couleur: ROUGE, epaisseur: 2.6 }) + texte(xs + 40, cy - 10, 'v', { taille: 14, gras: true, couleur: ROUGE });
  s += texte(W - 20, 40, 'devant la source :', { taille: 13, gras: true, ancre: 'end' }) + etiquette(W - 20, 58, 'fronts resserrés, λ plus petite,', { taille: 12, ancre: 'end' }) + etiquette(W - 20, 74, 'son plus aigu', { taille: 12, ancre: 'end', couleur: ROUGE, gras: true });
  s += texte(20, 40, 'derrière la source :', { taille: 13, gras: true, ancre: 'start' }) + etiquette(20, 58, 'fronts espacés, λ plus grande,', { taille: 12, ancre: 'start' }) + etiquette(20, 74, 'son plus grave', { taille: 12, ancre: 'start', couleur: BLEU, gras: true });
  s += texte(W / 2, H - 12, 'source qui se déplace vers la droite : chaque front est émis d\'un point plus avancé', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

/** Couleur approximative d'une radiation visible. */
function couleurLambda(l) {
  let r = 0, g = 0, b = 0;
  if (l < 440) { r = (440 - l) / 60; b = 1; } else if (l < 490) { g = (l - 440) / 50; b = 1; } else if (l < 510) { g = 1; b = (510 - l) / 20; }
  else if (l < 580) { r = (l - 510) / 70; g = 1; } else if (l < 645) { r = 1; g = (645 - l) / 65; } else r = 1;
  const f = l < 420 ? 0.3 + (0.7 * (l - 380)) / 40 : l > 700 ? 0.3 + (0.7 * (780 - l)) / 80 : 1;
  const h = (x) => Math.round(255 * Math.pow(Math.max(0, Math.min(1, x * f)), 0.8)).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

S['raies'] = ({ raies = [410, 434, 486, 656], element = 'hydrogène' } = {}) => {
  const W = 640, H = 270, g = 40, d = 40, X = (l) => g + ((l - 380) / (780 - 380)) * (W - g - d);
  let s = `<defs><linearGradient id="raies-continu" x1="0" x2="1" y1="0" y2="0">${[...Array(41)].map((_, i) => `<stop offset="${nb(i / 40)}" stop-color="${couleurLambda(380 + i * 10)}"/>`).join('')}</linearGradient></defs>`;
  // spectre continu
  s += rect(X(380), 40, X(780) - X(380), 50, { fond: 'url(#raies-continu)', bord: 'none', ep: 0 });
  s += texte(g, 30, 'spectre continu (corps dense chaud)', { taille: 12, ancre: 'start', gras: true });
  // émission
  s += rect(X(380), 120, X(780) - X(380), 50, { fond: '#111111', bord: 'none', ep: 0 });
  raies.forEach((l) => { s += rect(X(l) - 2, 120, 4, 50, { fond: couleurLambda(l), bord: 'none', ep: 0 }); });
  s += texte(g, 112, `raies d'émission (${element} chaud)`, { taille: 12, ancre: 'start', gras: true });
  // absorption
  s += rect(X(380), 200, X(780) - X(380), 50, { fond: 'url(#raies-continu)', bord: 'none', ep: 0 });
  raies.forEach((l) => { s += rect(X(l) - 2, 200, 4, 50, { fond: '#000000', bord: 'none', ep: 0 }); });
  s += texte(g, 192, `raies d'absorption (${element} froid devant une lumière blanche)`, { taille: 12, ancre: 'start', gras: true });
  raies.forEach((l) => { s += ligne(X(l), 172, X(l), 198, { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + texte(X(l), 266, `${l}`, { taille: 12, couleur: ATTENUE }); });
  s += texte(W - 6, 266, 'λ (nm)', { taille: 12, ancre: 'end', couleur: ATTENUE });
  return enveloppe(W, H + 6, s);
};

S['fibre'] = () => {
  const W = 640, H = 230, y1 = 80, y2 = 150;
  let s = rect(20, y1 - 26, 600, y2 - y1 + 52, { fond: '#e6edf5', bord: ENCRE, ep: 1.6 }) + rect(20, y1, 600, y2 - y1, { fond: '#fff6dd', bord: ENCRE, ep: 1.4 });
  const a = Math.atan2(y2 - y1, 80);
  let x = 30, y = y1 + 10, pts = [[x, y]], haut = false;
  pts.push([x + ((y2 - y) / (y2 - y1)) * 80, y2]); x = pts[1][0];
  while (x + 80 < 600) { x += 80; pts.push([x, haut ? y2 : y1]); haut = !haut; }
  s += polyligne(pts, { couleur: ROUGE, ep: 2.4 });
  const [xa, ya] = pts[pts.length - 1], [xb, yb2] = pts[pts.length - 2];
  s += pointe(xa, ya, xa - xb, ya - yb2, { couleur: ROUGE });
  s += texte(330, 36, 'gaine', { taille: 13, couleur: ATTENUE }) + texte(330, (y1 + y2) / 2 + 5, '', {});
  s += texte(600, y2 + 46, 'cœur', { taille: 13, couleur: '#9a7a20', ancre: 'end' }) + ligne(560, y2 + 34, 540, y2 - 6, { couleur: ATTENUE, epaisseur: 1 });
  s += texte(W / 2, H - 14, 'la lumière reste piégée dans le cœur par réflexion totale à chaque rebond', { taille: 13, gras: true });
  void a;
  return enveloppe(W, H, s);
};

S['profil-catalyse'] = () => {
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 0, xmax: 10, ymin: 0, ymax: 10, gradX: false, gradY: false, grille: false, nomX: 'avancement de la réaction', nomY: 'énergie', g: 40 });
  const bosse = (x, h) => { const top = 6 + h; if (x < 2) return 6; if (x < 5) return 6 + ((top - 6) * (1 - Math.cos((Math.PI * (x - 2)) / 3))) / 2; if (x < 8) return top + ((2.5 - top) * (1 - Math.cos((Math.PI * (x - 5)) / 3))) / 2; return 2.5; };
  let s = svg + trace((x) => bosse(x, 3.2), 0.3, 9.7, X, Y, { couleur: ROUGE }) + trace((x) => bosse(x, 1.4), 0.3, 9.7, X, Y, { couleur: VERT, pointilles: true });
  s += texte(X(1), Y(6) - 10, 'réactifs', { taille: 13, gras: true }) + texte(X(9), Y(2.5) - 10, 'produits', { taille: 13, gras: true });
  const top = bosse(5, 3.2), top2 = bosse(5, 1.4);
  s += etiquette(X(5) + 14, Y(top) + 4, 'sans catalyseur', { taille: 13, couleur: ROUGE, gras: true, ancre: 'start' }) + etiquette(X(5) + 30, Y(top2) + 14, 'avec catalyseur', { taille: 13, couleur: VERT, gras: true, ancre: 'start' });
  s += cote(X(2.2), Y(6), X(2.2), Y(top), '', {}) + texte(X(2.2) - 8, (Y(6) + Y(top)) / 2 + 4, 'Ea', { taille: 13, ancre: 'end', couleur: ROUGE, gras: true });
  s += cote(X(3.2), Y(6), X(3.2), Y(top2), '', { couleur: VERT }) + texte(X(3.2) + 8, (Y(6) + Y(top2)) / 2 + 4, 'Ea\'', { taille: 13, ancre: 'start', couleur: VERT, gras: true });
  s += ligne(X(1.6), Y(6), X(4.2), Y(6), { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  s += ligne(X(2.2), Y(top), X(5), Y(top), { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + ligne(X(3.2), Y(top2), X(5), Y(top2), { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  return enveloppe(620, 300, s);
};

S['demi-reaction'] = ({ cf = 0.40, nomY = '[produit] (mol/L)' } = {}) => {
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 0, xmax: 10, ymin: 0, ymax: 0.5, pasX: 1, pasY: 0.1, gradX: false, nomX: 'temps', nomY, g: 56, fmtY: (v) => fr(v, 2) });
  const c = (t) => cf * (1 - Math.exp(-t / 1.6));
  const th = 1.6 * Math.log(2);
  let s = svg + trace(c, 0, 10, X, Y, { couleur: BLEU });
  s += ligne(X(0), Y(cf), X(10), Y(cf), { couleur: ATTENUE, epaisseur: 1.4, pointilles: true }) + etiquette(X(9.8), Y(cf) - 8, `valeur finale ${fr(cf, 2)}`, { taille: 12, ancre: 'end', couleur: ATTENUE });
  s += ligne(X(0), Y(cf / 2), X(th), Y(cf / 2), { couleur: ROUGE, epaisseur: 1.4, pointilles: true }) + ligne(X(th), Y(cf / 2), X(th), Y(0), { couleur: ROUGE, epaisseur: 1.4, pointilles: true });
  s += `<circle cx="${nb(X(th))}" cy="${nb(Y(cf / 2))}" r="5" fill="${ROUGE}"/>` + texte(X(th), Y(0) + 18, 't½', { taille: 14, gras: true, couleur: ROUGE });
  s += etiquette(X(th) + 12, Y(cf / 2) + 18, `moitié de la valeur finale : ${fr(cf / 2, 2)}`, { taille: 12, couleur: ROUGE, ancre: 'start' });
  return enveloppe(620, 300, s);
};

S['mecanisme-sn'] = () => {
  const W = 660, H = 250, y = 150;
  let s = texte(100, y + 6, 'HO', { taille: 22, gras: true }) + `<circle cx="130" cy="${y - 7}" r="2.6" fill="${ENCRE}"/><circle cx="130" cy="${y + 3}" r="2.6" fill="${ENCRE}"/>`;
  s += texte(126, y - 18, '⊖', { taille: 14, couleur: BLEU });
  s += texte(240, y + 6, 'R', { taille: 22, gras: true }) + ligne(254, y, 286, y, { couleur: ENCRE, epaisseur: 2.4 }) + texte(300, y + 6, 'C', { taille: 22, gras: true }) + ligne(314, y, 358, y, { couleur: ENCRE, epaisseur: 2.4 }) + texte(378, y + 6, 'Cl', { taille: 22, gras: true });
  s += texte(300, y + 32, 'δ+', { taille: 14, couleur: ROUGE, gras: true }) + texte(380, y + 32, 'δ−', { taille: 14, couleur: BLEU, gras: true });
  s += flecheCourbe(134, y - 14, 210, y - 90, 294, y - 18, { couleur: ROUGE, ep: 2.4 });
  s += flecheCourbe(336, y - 4, 350, y - 50, 376, y - 18, { couleur: ROUGE, ep: 2.4 });
  s += texte(110, y + 52, 'site donneur\n(doublet non liant)', { taille: 12, couleur: BLEU });
  s += texte(300, y + 60, 'site accepteur', { taille: 12, couleur: ROUGE });
  s += fleche(420, y, 470, y, { couleur: ENCRE, epaisseur: 2.4 }) + texte(560, y + 6, 'R–OH + Cl⁻', { taille: 20, gras: true });
  s += texte(W / 2, 34, 'chaque flèche courbe part d\'un doublet (site donneur) et va vers le site accepteur', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['boucle-regulation'] = () => {
  const W = 680, H = 250, y = 90;
  let s = '';
  s += texte(40, y - 22, 'consigne', { taille: 13, gras: true }) + texte(40, y - 6, '37,0 °C', { taille: 12, couleur: ATTENUE });
  s += fleche(10, y + 10, 104, y + 10, { couleur: ENCRE, epaisseur: 2 });
  s += cercle(120, y + 10, 15, { couleur: ENCRE, fond: PAPIER, epaisseur: 2 }) + texte(120, y + 15, '−', { taille: 16, gras: true }) + texte(98, y - 2, '+', { taille: 14, gras: true }) + texte(132, y + 46, '−', { taille: 16, gras: true });
  s += fleche(136, y + 10, 190, y + 10, { couleur: ENCRE, epaisseur: 2 }) + texte(163, y, 'ε', { taille: 15, gras: true, couleur: ROUGE });
  s += boite(190, y - 16, 110, 52, 'correcteur', { fond: FONDS.bleu[0], bord: FONDS.bleu[1], gras: true });
  s += fleche(300, y + 10, 340, y + 10, { couleur: ENCRE, epaisseur: 2 });
  s += boite(340, y - 16, 110, 52, 'actionneur\n(résistance)', { fond: FONDS.orange[0], bord: FONDS.orange[1], taille: 13 });
  s += fleche(450, y + 10, 490, y + 10, { couleur: ENCRE, epaisseur: 2 });
  s += boite(490, y - 16, 110, 52, 'système\n(bain)', { fond: FONDS.vert[0], bord: FONDS.vert[1], taille: 13 });
  s += fleche(600, y + 10, 672, y + 10, { couleur: ENCRE, epaisseur: 2 }) + texte(640, y - 6, 'mesure réelle', { taille: 12, couleur: ATTENUE });
  s += fil([[640, y + 10], [640, 190], [436, 190]]) + boite(326, 166, 110, 48, 'capteur', { fond: FONDS.violet[0], bord: FONDS.violet[1], gras: true });
  s += fleche(326, 190, 120, 190, { couleur: ENCRE, epaisseur: 2 }) + fleche(120, 190, 120, y + 26, { couleur: ENCRE, epaisseur: 2 });
  s += texte(220, 182, 'retour : la mesure revient', { taille: 12, couleur: VIOLET });
  s += texte(W / 2, 238, 'ε = consigne − mesure : tant que ε ≠ 0, le correcteur agit', { taille: 13, gras: true });
  return enveloppe(W, H, s);
};
{
  const F = 'terminale-techno/spcl-stl/composition-systemes-chimiques';
  pose(F, 'courbe-ph', 'courbe-ph', '## 3. Dosage acide-base',
    'Courbe calculée pour l\'exemple : 20,0 mL d\'acide fort à 0,075 mol/L dosés par une base forte à 0,10 mol/L ; le saut de pH est centré sur 15,0 mL, à pH 7.',
    { CA: 0.075, VA: 20, CB: 0.10 });
  pose(F, 'courbe-conducti', 'courbe-conducti', '### Dosage conductimétrique',
    'Dosage conductimétrique de l\'acide chlorhydrique par la soude : deux segments de droite dont l\'intersection donne le volume à l\'équivalence (allure qualitative).');
  pose(F, 'pile-daniell', 'pile-daniell', '### Potentiel et force électromotrice',
    'Pile Daniell : le zinc s\'oxyde à l\'anode (borne −), les ions cuivre II se réduisent à la cathode (borne +) ; les électrons vont du zinc vers le cuivre, f.é.m. 1,10 V.');
}
{
  const F = 'terminale-techno/spcl-stl/ondes-mecaniques-em-spectres';
  pose(F, 'doppler', 'doppler', '### Mesure de vitesse : l\'effet Doppler (qualitatif)',
    'Effet Doppler : les fronts d\'onde sont resserrés devant une source en mouvement, le son y est plus aigu ; derrière elle ils sont espacés, le son est plus grave.');
  pose(F, 'raies', 'raies', '### Spectre d\'absorption',
    'Exemple de l\'hydrogène : ses raies d\'émission colorées et ses raies d\'absorption noires sont aux mêmes longueurs d\'onde, 410, 434, 486 et 656 nm.');
}
{
  const F = 'terminale-techno/spcl-stl/ondes-transmission-stockage';
  pose(F, 'numerisation', 'numerisation', '### Échantillonnage',
    'Numérisation d\'un signal : on l\'échantillonne tous les Tₑ, puis chaque échantillon est quantifié sur un nombre fini de niveaux, ici 8 niveaux pour 3 bits.');
  pose(F, 'fibre', 'fibre', '### Canal guidé (transmission filaire)',
    'Dans une fibre optique, la lumière se réfléchit totalement à la frontière entre le cœur et la gaine, ce qui la guide sur de grandes distances.');
}
{
  const F = 'terminale-techno/spcl-stl/syntheses-mecanismes';
  pose(F, 'profil-catalyse', 'profil-catalyse', '## 3. La catalyse',
    'Un catalyseur ouvre un autre chemin réactionnel, d\'énergie d\'activation plus faible : réactifs et produits sont les mêmes, mais la réaction est plus rapide.');
  pose(F, 'demi-reaction', 'demi-reaction', '### Suivi de l\'avancement et temps de demi-réaction',
    'Exemple de la fiche : la concentration finale du produit vaut 0,40 mol/L ; le temps de demi-réaction est la date où elle atteint 0,20 mol/L.');
  pose(F, 'mecanisme', 'mecanisme-sn', '### La flèche courbe',
    'Exemple de la fiche : une flèche courbe va du doublet non liant de HO⁻ vers le carbone δ+, une autre de la liaison C–Cl vers le chlore, qui part en ion Cl⁻.');
}
{
  const F = 'terminale-techno/spcl-stl/systemes-procedes-flux';
  pose(F, 'boucle', 'boucle-regulation', '### La régulation en boucle fermée',
    'Boucle de régulation du bain thermostaté : le capteur renvoie la mesure, le correcteur calcule l\'écart avec la consigne et commande l\'actionneur.');
  pose(F, 'chaines', 'diagramme', '### Définition',
    'La chaîne d\'information (acquérir, traiter, communiquer) commande la chaîne d\'énergie (alimenter, distribuer, convertir, transmettre).',
    { W: 680, H: 250, boites: [
      { id: 'a', x: 70, y: 30, w: 140, h: 50, t: 'ACQUÉRIR\n(capteur)', style: 'violet', taille: 13 },
      { id: 't', x: 270, y: 30, w: 140, h: 50, t: 'TRAITER\n(correcteur)', style: 'violet', taille: 13 },
      { id: 'c', x: 470, y: 30, w: 140, h: 50, t: 'COMMUNIQUER\n(ordres, affichage)', style: 'violet', taille: 13 },
      { id: 'al', x: 4, y: 170, w: 150, h: 50, t: 'ALIMENTER\n(réseau, batterie)', style: 'orange', taille: 13 },
      { id: 'di', x: 178, y: 170, w: 150, h: 50, t: 'DISTRIBUER\n(relais, variateur)', style: 'orange', taille: 13 },
      { id: 'co', x: 352, y: 170, w: 150, h: 50, t: 'CONVERTIR\n(moteur, résistance)', style: 'orange', taille: 13 },
      { id: 'tr', x: 526, y: 170, w: 150, h: 50, t: 'TRANSMETTRE\n(engrenages)', style: 'orange', taille: 13 }],
      fleches: [{ de: 'a', a: 't' }, { de: 't', a: 'c' }, { de: 'al', a: 'di' }, { de: 'di', a: 'co' }, { de: 'co', a: 'tr' },
        { depuis: [540, 84], vers: [253, 166], couleur: ROUGE, t: 'ordres', lx: 30, ly: 16 }],
      textes: [{ x: 340, y: 110, t: 'chaîne d\'information', taille: 13, couleur: VIOLET, gras: true }, { x: 340, y: 240, t: 'chaîne d\'énergie', taille: 13, couleur: ORANGE, gras: true }] });
  pose(F, 'melangeur', 'diagramme', '### Bilan de matière et conservation',
    'Mélangeur de l\'exemple en régime permanent : les débits massiques entrants, 3,0 et 1,5 kg/s, se retrouvent en sortie, soit 4,5 kg/s.',
    { W: 620, H: 200, boites: [
      { id: 'q1', x: 10, y: 30, w: 150, h: 44, t: 'Q₁ = 3,0 kg/s', style: 'bleu', forme: 'nu', gras: true },
      { id: 'q2', x: 10, y: 130, w: 150, h: 44, t: 'Q₂ = 1,5 kg/s', style: 'bleu', forme: 'nu', gras: true },
      { id: 'm', x: 230, y: 60, w: 160, h: 84, t: 'mélangeur\n(régime permanent)', style: 'gris', gras: true },
      { id: 's', x: 450, y: 80, w: 166, h: 44, t: 'Qₛ = 4,5 kg/s', style: 'vert', forme: 'nu', gras: true }],
      fleches: [{ depuis: [150, 52], vers: [226, 86], couleur: BLEU }, { depuis: [150, 152], vers: [226, 118], couleur: BLEU }, { depuis: [394, 102], vers: [460, 102], couleur: VERT }],
      textes: [{ x: 310, y: 186, t: 'entrées = sorties : 3,0 + 1,5 = 4,5 kg/s', taille: 13, gras: true }] });
}

// ───────────────────────── Terminale : enseignement scientifique ─────────────────────────

S['facteur4'] = () => {
  const W = 640, H = 270, cx = 400, cy = 135, R = 80;
  let s = '';
  for (let k = -3; k <= 3; k++) { const y = cy + (k * R) / 3.2; s += fleche(30, y, cx - Math.sqrt(Math.max(0, R * R - (y - cy) ** 2)) - 4, y, { couleur: '#e0a030', epaisseur: 2, pointe: 8 }); }
  s += ellipse(250, cy, 14, R, { couleur: ORANGE, fond: '#fdf0e3', ep: 2, pointilles: true });
  s += disque(cx, cy, R, '#9ec5f0', { bord: BLEU, ep: 2 });
  s += chemin(`M ${cx} ${cy - R} A ${R} ${R} 0 0 1 ${cx} ${cy + R} A 26 ${R} 0 0 0 ${cx} ${cy - R} Z`, { couleur: 'none', ep: 0, fond: '#1d3557', opacite: 0.35 });
  s += texte(250, 34, 'disque intercepté : πR²', { taille: 13, gras: true, couleur: ORANGE });
  s += texte(cx, cy + 5, 'Terre', { taille: 14, gras: true });
  s += texte(560, 70, 'surface de la sphère :', { taille: 13, ancre: 'middle' }) + texte(560, 90, '4πR²', { taille: 15, gras: true, couleur: BLEU });
  s += texte(560, 190, 'S₀ / 4 ≈ 340 W/m²', { taille: 14, gras: true }) + texte(560, 210, 'en moyenne', { taille: 12, couleur: ATTENUE });
  s += texte(90, 250, 'rayonnement solaire : S₀ ≈ 1 360 W/m²', { taille: 13, couleur: '#b07a10', ancre: 'start' });
  return enveloppe(W, H, s);
};

/** Cycle de boîtes reliées par des flèches courbes. */
function cycle({ W = 640, H = 300, items = [], titre = '', couleur = ROUGE, centre = '' } = {}) {
  const cx = W / 2, cy = H / 2 + 6, rx = W / 2 - 110, ry = H / 2 - 50, n = items.length;
  const pos = items.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  let s = '';
  for (let i = 0; i < n; i++) {
    const a0 = -Math.PI / 2 + ((i + 0.3) * 2 * Math.PI) / n, a1 = -Math.PI / 2 + ((i + 0.7) * 2 * Math.PI) / n, am = (a0 + a1) / 2;
    s += flecheCourbe(cx + rx * Math.cos(a0), cy + ry * Math.sin(a0), cx + 1.18 * rx * Math.cos(am), cy + 1.18 * ry * Math.sin(am), cx + rx * Math.cos(a1), cy + ry * Math.sin(a1), { couleur, ep: 2.4 });
  }
  items.forEach((t, i) => { s += boite(pos[i][0] - 95, pos[i][1] - 24, 190, 48, t, { fond: FONDS.gris[0], bord: ENCRE, taille: 13 }); });
  if (centre) s += texte(cx, cy + 5, centre, { taille: 15, gras: true, couleur });
  if (titre) s += texte(cx, 20, titre, { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, s);
}
S['cycle'] = (p) => cycle(p);

S['cycle-carbone'] = () => diagramme({ W: 660, H: 320, boites: [
  { id: 'atm', x: 230, y: 14, w: 200, h: 56, t: 'atmosphère\n≈ 870 Gt C', style: 'bleu', gras: true },
  { id: 'bio', x: 4, y: 150, w: 166, h: 56, t: 'biosphère\n≈ 2 000 à 3 000 Gt C', style: 'vert', gras: true, taille: 13 },
  { id: 'oc', x: 480, y: 150, w: 170, h: 56, t: 'océans\n≈ 38 000 Gt C', style: 'bleu', gras: true, taille: 13 },
  { id: 'li', x: 200, y: 250, w: 260, h: 56, t: 'lithosphère (roches, fossiles)\n10⁷ à 10⁸ Gt C', style: 'gris', gras: true, taille: 13 }],
  fleches: [
    { de: 'atm', a: 'bio', t: 'photosynthèse', couleur: VERT, courbe: -26, lx: 34, ly: 14, taille: 12 },
    { de: 'bio', a: 'atm', t: 'respiration', couleur: ENCRE, courbe: -26, lx: -36, ly: -6, taille: 12 },
    { de: 'atm', a: 'oc', t: 'dissolution / dégazage', double: true, couleur: BLEU, lx: 66, ly: 0, taille: 12 },
    { depuis: [330, 246], vers: [330, 74], t: 'combustion des fossiles\n≈ 10 Gt C / an', couleur: ROUGE, ep: 3.4, lx: -8, ly: 4, ancre: 'end', taille: 12 }] });

S['selection-antibio'] = () => {
  const W = 660, H = 270;
  let s = '';
  const r = alea(5);
  const pts = [...Array(26)].map(() => [14 + r() * 152, 50 + r() * 140]);
  const res = new Set([3, 11, 19]);
  const bact = (x, y, c, barre) => {
    let t = `<rect x="${nb(x - 9)}" y="${nb(y - 5)}" width="18" height="10" rx="5" fill="${c}" stroke="${ENCRE}" stroke-width="1"/>`;
    if (barre) t += ligne(x - 9, y - 7, x + 9, y + 7, { couleur: ENCRE, epaisseur: 1.6 });
    return t;
  };
  [0, 230, 460].forEach((ox, p) => {
    s += rect(ox + 6, 40, 180, 160, { fond: p === 1 ? '#fdf0e3' : '#f7f9fc', bord: ENCRE, ep: 1.6, rx: 10 });
    if (p < 2) pts.forEach(([x, y], i) => { s += bact(ox + x + 6, y, res.has(i) ? '#e57373' : '#90caf9', p === 1 && !res.has(i)); });
    else { const r2 = alea(9); for (let i = 0; i < 24; i++) s += bact(ox + 20 + r2() * 150, 54 + r2() * 134, '#e57373', false); }
  });
  s += fleche(192, 120, 232, 120, { couleur: ENCRE, epaisseur: 2.4 }) + fleche(422, 120, 462, 120, { couleur: ENCRE, epaisseur: 2.4 });
  s += texte(96, 222, 'avant : quelques bactéries', { taille: 12 }) + texte(96, 238, 'résistantes (en rouge)', { taille: 12 });
  s += texte(326, 222, 'antibiotique : les sensibles', { taille: 12 }) + texte(326, 238, 'meurent, les résistantes survivent', { taille: 12 });
  s += texte(556, 222, 'après : la population', { taille: 12 }) + texte(556, 238, 'est devenue résistante', { taille: 12 });
  s += texte(W / 2, 24, 'la sélection trie des allèles qui existaient déjà', { taille: 13, gras: true });
  return enveloppe(W, H + 4, s);
};

S['derive'] = () => {
  const G = 40;
  const { svg, X, Y } = graphe({ W: 640, H: 320, xmin: 0, xmax: G, ymin: 0, ymax: 1, pasX: 10, pasY: 0.25, nomX: 'générations', nomY: 'fréquence de l\'allèle', g: 56, fmtY: (v) => fr(v, 2), fmtX: (v) => fr(v, 0) });
  let s = svg;
  const simule = (N, graine) => {
    const r = alea(graine); let p = 0.5; const pts = [[X(0), Y(p)]];
    for (let g = 1; g <= G; g++) { let k = 0; for (let i = 0; i < 2 * N; i++) if (r() < p) k++; p = k / (2 * N); pts.push([X(g), Y(p)]); }
    return pts;
  };
  [11, 23, 37, 41].forEach((gr) => { s += polyligne(simule(10, gr), { couleur: ORANGE, ep: 2 }); });
  [5, 17, 29, 43].forEach((gr) => { s += polyligne(simule(500, gr), { couleur: BLEU, ep: 2 }); });
  s += etiquette(X(G) - 4, Y(0.5) - 34, 'grande population (500 individus)', { taille: 12, couleur: BLEU, gras: true, ancre: 'end' });
  s += etiquette(X(1), Y(0.97), 'petite population (10 individus)', { taille: 12, couleur: ORANGE, gras: true, ancre: 'start' });
  return enveloppe(640, 320, s);
};

S['induction'] = () => {
  const W = 640, H = 260, y = 110;
  let s = '';
  // bobine (spires vues de côté)
  for (let k = 0; k < 8; k++) s += ellipse(320 + k * 16, y, 8, 40, { couleur: '#b8792d', ep: 2.4 });
  s += ligne(320, y + 40, 320, 200, { couleur: ENCRE, epaisseur: 2 }) + ligne(432, y + 40, 432, 200, { couleur: ENCRE, epaisseur: 2 });
  s += fil([[320, 200], [320, 220], [432, 220], [432, 200]]) + dipole('voltmetre', 376, 220, 'h');
  s += rect(110, y - 18, 70, 36, { fond: '#e53935', bord: ENCRE, ep: 1.6 }) + rect(180, y - 18, 70, 36, { fond: '#1e63c6', bord: ENCRE, ep: 1.6 });
  s += texte(145, y + 6, 'N', { taille: 16, gras: true, couleur: PAPIER }) + texte(215, y + 6, 'S', { taille: 16, gras: true, couleur: PAPIER });
  s += fleche(120, y - 40, 250, y - 40, { couleur: VERT, epaisseur: 2.6 }) + texte(185, y - 50, 'aimant en mouvement', { taille: 13, couleur: VERT, gras: true });
  s += texte(376, 50, 'bobine', { taille: 13, gras: true });
  s += texte(500, 214, 'tension induite', { taille: 13, ancre: 'start' });
  s += texte(W / 2, 252, 'aimant immobile : aucune tension ; le champ doit varier', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['arbre-vivant'] = () => {
  const W = 640, H = 300, yb = 250, yt = 50;
  const esp = ['poisson', 'amphibien', 'oiseau', 'chimpanzé', 'humain'];
  const x = (i) => 110 + i * 120;
  // nœuds : (chimpanzé, humain) récent ; puis oiseau ; puis amphibien ; puis poisson
  const n1 = [(x(3) + x(4)) / 2, 90], n2 = [(x(2) + n1[0]) / 2, 135], n3 = [(x(1) + n2[0]) / 2, 180], n4 = [(x(0) + n3[0]) / 2, 225];
  let s = '';
  const br = (a, b) => ligne(a[0], a[1], b[0], b[1], { couleur: VERT, epaisseur: 3 });
  s += br(n1, [x(3), yt]) + br(n1, [x(4), yt]) + br(n2, [x(2), yt]) + br(n2, n1) + br(n3, [x(1), yt]) + br(n3, n2) + br(n4, [x(0), yt]) + br(n4, n3) + br([n4[0], yb], n4);
  [n1, n2, n3, n4].forEach((n) => { s += `<circle cx="${nb(n[0])}" cy="${nb(n[1])}" r="6" fill="${ROUGE}"/>`; });
  esp.forEach((e, i) => { s += texte(x(i), yt - 12, e, { taille: 14, gras: true }); });
  s += etiquette(n1[0] + 12, n1[1] + 16, 'ancêtre commun récent', { taille: 12, couleur: ROUGE, ancre: 'start' });
  s += etiquette(n4[0] + 12, n4[1] + 16, 'ancêtre commun plus ancien', { taille: 12, couleur: ROUGE, ancre: 'start' });
  s += fleche(24, yb, 24, yt + 10, { couleur: ATTENUE, epaisseur: 1.6 }) + texte(30, yb + 18, 'passé', { taille: 12, couleur: ATTENUE }) + texte(30, yt - 12, 'présent', { taille: 12, couleur: ATTENUE });
  s += texte(W / 2, H - 14, 'chaque point rouge (nœud) représente un ancêtre commun', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['calendrier'] = () => {
  const W = 660, H = 290, g = 30, d = 30, y = 110;
  const X = (j) => g + (j / 365) * (W - g - d);
  const mois = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const debut = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  let s = '';
  mois.forEach((m, i) => { s += rect(X(debut[i]), y - 14, X(debut[i + 1]) - X(debut[i]), 28, { fond: i % 2 ? '#eef3fb' : '#dbe8f8', bord: ATTENUE, ep: 0.8 }) + texte((X(debut[i]) + X(debut[i + 1])) / 2, y + 5, m, { taille: 12 }); });
  const j = (age) => 365 * (1 - age / 4600); // âge en millions d'années
  const rep = [[4600, 'formation de\nla Terre', 'haut', 'start'], [3500, 'premières traces de vie\n(fin mars)', 'bas', 'middle'], [600, 'premiers animaux\n(mi-novembre)', 'bas', 'middle'], [66, 'fin des dinosaures\n(26 décembre)', 'bas2', 'end'], [2.5, 'genre Homo :\n31 déc. vers 19 h', 'haut', 'end']];
  rep.forEach(([a, t, pos, an]) => {
    const xx = X(j(a));
    s += `<circle cx="${nb(xx)}" cy="${y}" r="5" fill="${ROUGE}"/>`;
    if (pos === 'haut') s += ligne(xx, y - 14, xx, y - 34, { couleur: ROUGE, epaisseur: 1.2 }) + texte(xx, y - 56, t, { taille: 12, ancre: an });
    else if (pos === 'bas') s += ligne(xx, y + 14, xx, y + 34, { couleur: ROUGE, epaisseur: 1.2 }) + texte(xx, y + 50, t, { taille: 12, ancre: an });
    else s += ligne(xx, y + 14, xx, y + 80, { couleur: ROUGE, epaisseur: 1.2 }) + texte(xx, y + 96, t, { taille: 12, ancre: an });
  });
  s += texte(W / 2, H - 14, 'toute l\'histoire de la Terre (4,6 milliards d\'années) ramenée à une année', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

// ═════════════════════════ Poses : Terminale, enseignement scientifique ═════════════════════════
{
  const F = 'terminale/enseignement-scientifique/atmosphere-effet-de-serre-climat';
  pose(F, 'facteur4', 'facteur4', '### La puissance solaire reçue',
    'D\'où vient le facteur 4 : le rayonnement solaire est intercepté par un disque d\'aire πR² mais réparti sur une sphère d\'aire 4πR², d\'où S₀/4 ≈ 340 W/m² en moyenne.');
  pose(F, 'bilan-radiatif', 'bilan-radiatif', '### L\'équilibre radiatif',
    'Bilan radiatif simplifié : sur 340 W/m² reçus en moyenne, environ 100 W/m² sont réfléchis (albédo 0,30) et 240 W/m² absorbés ; l\'effet de serre renvoie de l\'infrarouge vers le sol.',
    { valeurs: true });
  pose(F, 'glace-albedo', 'cycle', '## 4. Les rétroactions',
    'La rétroaction glace-albédo est positive : la fonte de la banquise découvre l\'océan sombre, qui absorbe davantage, ce qui amplifie le réchauffement.',
    { W: 640, H: 300, couleur: ROUGE, centre: 'rétroaction\npositive', items: ['réchauffement', 'fonte de la banquise', 'albédo plus faible\n(océan sombre)', 'plus d\'énergie absorbée'] });
}
{
  const F = 'terminale/enseignement-scientifique/du-genotype-au-phenotype';
  pose(F, 'trois-echelles', 'diagramme', '## 2. Le phénotype se lit à trois échelles',
    'La drépanocytose aux trois échelles : un acide aminé modifié dans l\'hémoglobine déforme les globules rouges, ce qui provoque anémie et crises chez la personne.',
    { W: 640, H: 300, boites: [
      { id: 'm', x: 20, y: 20, w: 210, h: 64, t: 'échelle moléculaire', style: 'violet', gras: true },
      { id: 'c', x: 20, y: 118, w: 210, h: 64, t: 'échelle cellulaire', style: 'bleu', gras: true },
      { id: 'o', x: 20, y: 216, w: 210, h: 64, t: 'échelle de l\'organisme', style: 'vert', gras: true },
      { id: 'mt', x: 290, y: 20, w: 340, h: 64, t: 'hémoglobine anormale\n(un acide aminé modifié)', style: 'violet', forme: 'nu', taille: 13 },
      { id: 'ct', x: 290, y: 118, w: 340, h: 64, t: 'globules rouges déformés\n« en faucille »', style: 'bleu', forme: 'nu', taille: 13 },
      { id: 'ot', x: 290, y: 216, w: 340, h: 64, t: 'fatigue, anémie,\ncrises douloureuses', style: 'vert', forme: 'nu', taille: 13 }],
      fleches: [{ de: 'm', a: 'c', t: 'explique', lx: 40, ly: 4, taille: 12 }, { de: 'c', a: 'o', t: 'explique', lx: 40, ly: 4, taille: 12 }] });
  pose(F, 'adn-proteine', 'diagramme', '## 3. De l\'ADN à la protéine : la chaîne de fabrication',
    'De l\'ADN à la protéine : le gène est transcrit en ARN messager, qui est traduit en protéine selon le code génétique ; la protéine détermine le caractère.',
    { W: 700, H: 150, boites: [
      { id: 'g', x: 4, y: 40, w: 110, h: 56, t: 'gène\n(ADN)', style: 'bleu', gras: true },
      { id: 'a', x: 200, y: 40, w: 110, h: 56, t: 'ARN\nmessager', style: 'violet', gras: true },
      { id: 'p', x: 396, y: 40, w: 110, h: 56, t: 'protéine', style: 'orange', gras: true },
      { id: 'c', x: 586, y: 40, w: 110, h: 56, t: 'caractère\n(phénotype)', style: 'vert', gras: true }],
      fleches: [{ de: 'g', a: 'a', t: 'transcription', taille: 12, ly: -10 }, { de: 'a', a: 'p', t: 'traduction', taille: 12, ly: -10 }, { de: 'p', a: 'c' }],
      textes: [{ x: 350, y: 130, t: 'la séquence de l\'ADN détermine la séquence de la protéine', taille: 12, couleur: ATTENUE }] });
}
{
  const F = 'terminale/enseignement-scientifique/energie-carbone-transition';
  pose(F, 'stocks-flux', 'diagramme', '### Définition',
    'Les deux familles de sources d\'énergie primaire : les stocks, non renouvelables, et les flux, renouvelables à l\'échelle humaine.',
    { W: 640, H: 230, boites: [
      { id: 's', x: 20, y: 16, w: 270, h: 48, t: 'STOCKS : non renouvelables', style: 'rouge', gras: true },
      { id: 'f', x: 350, y: 16, w: 270, h: 48, t: 'FLUX : renouvelables', style: 'vert', gras: true },
      { id: 's1', x: 20, y: 90, w: 270, h: 54, t: 'fossiles :\ncharbon, pétrole, gaz naturel', style: 'rouge', taille: 13 },
      { id: 's2', x: 20, y: 160, w: 270, h: 54, t: 'fissiles :\nuranium (et thorium)', style: 'rouge', taille: 13 },
      { id: 'f1', x: 350, y: 90, w: 270, h: 124, t: 'solaire\néolien\nhydraulique\nbiomasse\ngéothermie', style: 'vert', taille: 13 }],
      fleches: [] });
  pose(F, 'cycle-carbone', 'cycle-carbone', '### La perturbation anthropique',
    'Les quatre réservoirs du carbone et leurs échanges ; la combustion des fossiles transfère environ 10 Gt de carbone par an de la lithosphère vers l\'atmosphère.');
}
{
  const F = 'terminale/enseignement-scientifique/evolution-et-biodiversite';
  pose(F, 'antibiotiques', 'selection-antibio', '## 3. La sélection naturelle',
    'Sélection par un antibiotique : seules les bactéries portant déjà l\'allèle de résistance survivent et se multiplient, et la population devient résistante.');
  pose(F, 'derive', 'derive', '## 4. La dérive génétique',
    'Simulation de dérive génétique à partir d\'une fréquence de 0,5 : dans une petite population, la fréquence fluctue fortement et l\'allèle peut disparaître ou s\'imposer.');
  pose(F, 'speciation', 'speciation', '## 5. La naissance de nouvelles espèces : la spéciation',
    'Spéciation : deux populations séparées par une barrière évoluent chacune de son côté jusqu\'à ne plus pouvoir se reproduire entre elles.');
}
{
  const F = 'terminale/enseignement-scientifique/production-conversion-energie-electrique';
  pose(F, 'induction', 'induction', '### Définition',
    'Induction : un aimant qu\'on déplace près d\'une bobine fait varier le champ qui la traverse, et une tension apparaît aux bornes de la bobine.');
  pose(F, 'rendement-global', 'bandes-energie', '### La propriété',
    'Chaîne de l\'exemple : turbine (0,90), alternateur (0,95) et ligne (0,92) ; sur 100 J fournis par l\'eau, environ 79 J arrivent à l\'utilisateur.',
    { E0: 100, unite: 'J', dec: 1, etapes: [{ nom: 'turbine', eta: 0.90 }, { nom: 'alternateur', eta: 0.95 }, { nom: 'ligne', eta: 0.92 }], entree: 'énergie de l\'eau', sortie: 'utilisateur', perte: 'pertes' });
}
{
  const F = 'terminale/enseignement-scientifique/une-histoire-du-vivant';
  pose(F, 'arbre', 'arbre-vivant', '## 4. La parenté des êtres vivants : l\'arbre du vivant',
    'Arbre du vivant simplifié : l\'humain et le chimpanzé partagent un ancêtre commun récent, l\'humain et le poisson un ancêtre commun bien plus ancien.');
  pose(F, 'calendrier', 'calendrier', '## 6. Mesurer le temps de la vie',
    'L\'histoire de la Terre ramenée à une année : la vie apparaît fin mars, les dinosaures disparaissent le 26 décembre et le genre Homo arrive le 31 décembre vers 19 h.');
}

// ───────────────────────── Terminale physique-chimie ─────────────────────────

S['ordre1'] = ({ R0 = 0.80, k = 0.046, tmax = 70 } = {}) => {
  const { svg, X, Y } = graphe({ W: 640, H: 320, xmin: 0, xmax: tmax, ymin: 0, ymax: 0.9, pasX: 10, pasY: 0.1, nomX: 't (s)', nomY: '[R] (mol/L)', g: 56, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 1) });
  let s = svg + trace((t) => R0 * Math.exp(-k * t), 0, tmax, X, Y, { couleur: BLEU });
  const th = Math.log(2) / k;
  for (let n = 1; n <= 3; n++) {
    const t = n * th, c = R0 / 2 ** n;
    s += ligne(X(0), Y(c), X(t), Y(c), { couleur: ROUGE, epaisseur: 1.2, pointilles: true }) + ligne(X(t), Y(c), X(t), Y(0), { couleur: ROUGE, epaisseur: 1.2, pointilles: true });
    s += `<circle cx="${nb(X(t))}" cy="${nb(Y(c))}" r="4.5" fill="${ROUGE}"/>`;
  }
  s += etiquette(X(th) + 8, Y(R0 / 2) - 8, 't½ ≈ 15 s : 0,40', { taille: 12, couleur: ROUGE, ancre: 'start' }) + etiquette(X(2 * th) + 8, Y(R0 / 4) - 8, '30 s : 0,20', { taille: 12, couleur: ROUGE, ancre: 'start' }) + etiquette(X(3 * th) + 8, Y(R0 / 8) - 8, '45 s : 0,10', { taille: 12, couleur: ROUGE, ancre: 'start' });
  s += ligne(X(0), Y(R0), X(1 / k), Y(0), { couleur: VERT, epaisseur: 2, pointilles: true });
  s += etiquette(X(1 / k) + 6, Y(0.06), 'tangente à t = 0', { taille: 12, couleur: VERT, ancre: 'start', gras: true });
  return enveloppe(640, 320, s);
};

S['linearisation'] = ({ R0 = 0.80, k = 0.046 } = {}) => {
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 0, xmax: 60, ymin: -3.2, ymax: 0.4, pasX: 10, pasY: 0.5, nomX: 't (s)', nomY: 'ln [R]', g: 56, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 1) });
  let s = svg + ligne(X(0), Y(0), X(60), Y(0), { couleur: AXE, epaisseur: 1 });
  s += trace((t) => Math.log(R0) - k * t, 0, 60, X, Y, { couleur: BLEU });
  for (let t = 0; t <= 60; t += 10) s += `<circle cx="${nb(X(t))}" cy="${nb(Y(Math.log(R0) - k * t))}" r="4.5" fill="${BLEU}"/>`;
  s += etiquette(X(30), Y(-0.9), 'une droite : ordre 1', { taille: 13, gras: true, couleur: BLEU });
  s += etiquette(X(30), Y(-0.9) + 22, 'pente = −k = −0,046 s⁻¹', { taille: 13, couleur: ROUGE, gras: true });
  return enveloppe(620, 300, s);
};

S['trajectoire-xy'] = () => {
  const { svg, X, Y } = graphe({ W: 640, H: 330, xmin: 0, xmax: 17, ymin: 0, ymax: 8, pasX: 1, pasY: 1, nomX: 'x (m)', nomY: 'y (m)', g: 50, fmtX: (v) => (v % 3 === 0 ? fr(v, 0) : ''), fmtY: (v) => fr(v, 0) });
  let s = svg + trace((x) => (5 * x) / 3 - (x * x) / 9, 0, 15, X, Y, { couleur: ATTENUE, ep: 1.6 });
  const kx = X(1) - X(0), ky = Y(0) - Y(1), e = 0.75;
  for (let t = 0; t <= 5; t++) { const x = 3 * t, y = 5 * t - t * t; s += `<circle cx="${nb(X(x))}" cy="${nb(Y(y))}" r="4" fill="${ENCRE}"/>` + (t > 0 && t < 5 ? texte(X(x) + 4, Y(y) + 18, `t = ${t} s`, { taille: 12, couleur: ATTENUE, ancre: 'start' }) : ''); }
  [1, 4].forEach((t) => {
    const x = 3 * t, y = 5 * t - t * t, vx = 3, vy = 5 - 2 * t;
    s += fleche(X(x), Y(y), X(x) + e * vx * kx, Y(y) - e * vy * ky, { couleur: BLEU, epaisseur: 2.6 });
    s += fleche(X(x), Y(y), X(x), Y(y) + e * 2 * ky, { couleur: ROUGE, epaisseur: 2.6 });
    s += texte(X(x) + e * vx * kx + 6, Y(y) - e * vy * ky - 4, `v (3 ; ${fr(5 - 2 * t, 0)})`, { taille: 12, couleur: BLEU, gras: true, ancre: 'start' });
  });
  s += texte(X(3) - 8, Y(4) + 40, 'a (0 ; −2)', { taille: 12, couleur: ROUGE, gras: true, ancre: 'end' });
  s += texte(X(16.8), Y(7.3), 'x = 3t ; y = 5t − t²', { taille: 14, gras: true, ancre: 'end' });
  return enveloppe(640, 330, s);
};

S['frenet'] = () => {
  const W = 620, H = 320, cx = 200, cy = 170, R = 120;
  const a = (-35 * Math.PI) / 180, M = [cx + R * Math.cos(a), cy + R * Math.sin(a)];
  const ut = [-Math.sin(a), Math.cos(a)].map((v) => -v), un = [cx - M[0], cy - M[1]].map((v) => v / R);
  let s = cercle(cx, cy, R, { couleur: ATTENUE, epaisseur: 1.6 }) + `<circle cx="${cx}" cy="${cy}" r="3.5" fill="${ENCRE}"/>` + texte(cx - 6, cy + 18, 'O (centre)', { taille: 12, couleur: ATTENUE });
  s += ligne(cx, cy, M[0], M[1], { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + texte((cx + M[0]) / 2 + 4, (cy + M[1]) / 2 - 8, 'R', { taille: 13, couleur: ATTENUE });
  s += `<circle cx="${nb(M[0])}" cy="${nb(M[1])}" r="5" fill="${ENCRE}"/>` + texte(M[0] + 10, M[1] + 16, 'M', { taille: 14, gras: true, ancre: 'start' });
  s += fleche(M[0], M[1], M[0] + 46 * ut[0], M[1] + 46 * ut[1], { couleur: BLEU, epaisseur: 2.4 }) + texte(M[0] + 50 * ut[0] + 8, M[1] + 50 * ut[1], 'uₜ', { taille: 13, couleur: BLEU, gras: true, ancre: 'start' });
  s += fleche(M[0], M[1], M[0] + 46 * un[0], M[1] + 46 * un[1], { couleur: VERT, epaisseur: 2.4 }) + texte(M[0] + 46 * un[0] - 6, M[1] + 46 * un[1] + 16, 'uₙ', { taille: 13, couleur: VERT, gras: true, ancre: 'end' });
  const at = 40, an = 80, A = [M[0] + at * ut[0] + an * un[0], M[1] + at * ut[1] + an * un[1]];
  s += ligne(M[0] + at * ut[0], M[1] + at * ut[1], A[0], A[1], { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + ligne(M[0] + an * un[0], M[1] + an * un[1], A[0], A[1], { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  s += fleche(M[0], M[1], A[0], A[1], { couleur: ROUGE, epaisseur: 3 }) + texte(A[0] - 8, A[1] - 6, 'a', { taille: 15, couleur: ROUGE, gras: true, ancre: 'end' });
  const b0 = (150 * Math.PI) / 180, b1 = (120 * Math.PI) / 180, bm = (b0 + b1) / 2;
  s += flecheCourbe(cx + R * Math.cos(b0), cy + R * Math.sin(b0), cx + (R + 34) * Math.cos(bm), cy + (R + 34) * Math.sin(bm), cx + R * Math.cos(b1), cy + R * Math.sin(b1), { couleur: ATTENUE, ep: 1.6 }) + texte(cx - 120, cy + 120, 'sens du mouvement', { taille: 12, couleur: ATTENUE });
  s += texte(400, 70, 'uₜ : tangent, sens du mouvement', { taille: 13, couleur: BLEU, ancre: 'start' }) + texte(400, 94, 'uₙ : normal, vers le centre', { taille: 13, couleur: VERT, ancre: 'start' });
  s += texte(400, 140, 'a = aₜ uₜ + aₙ uₙ', { taille: 14, gras: true, ancre: 'start' }) + texte(400, 166, 'aₜ = dv/dt', { taille: 13, ancre: 'start' }) + texte(400, 190, 'aₙ = v² / R (toujours > 0)', { taille: 13, ancre: 'start' });
  return enveloppe(W, H, s);
};

S['circuit-rc'] = () => {
  const W = 640, H = 300, xg = 90, yh = 60, yb = 250;
  let s = '';
  // générateur à gauche
  s += fil([[xg, 40], [xg, yb], [520, yb]]) + dipole('pile', xg, 150, 'v', { label: '' });
  s += fil([[xg, 40], [210, 40]]) + fil([[210, 80], [180, 80], [180, yb]]) + noeud(180, yb);
  s += `<circle cx="210" cy="40" r="3" fill="${ENCRE}"/><circle cx="210" cy="80" r="3" fill="${ENCRE}"/><circle cx="262" cy="${yh}" r="3" fill="${ENCRE}"/>`;
  s += ligne(262, yh, 212, 42, { couleur: ENCRE, epaisseur: 2.4 }) + texte(204, 30, '1', { taille: 13, gras: true, ancre: 'end' }) + texte(204, 98, '2', { taille: 13, gras: true, ancre: 'end' }) + texte(262, yh - 14, 'K', { taille: 14, gras: true });
  s += fil([[262, yh], [520, yh], [520, yb]]) + dipole('resistance', 390, yh, 'h') + dipole('condensateur', 520, 155, 'v');
  s += texte(390, yh - 18, 'R', { taille: 14, gras: true }) + texte(500, 160, 'C', { taille: 14, gras: true, ancre: 'end' });
  s += tension(xg - 26, 190, xg - 26, 110, 'E', { lx: -14 }) + tension(415, yh + 24, 365, yh + 24, 'uR', { ly: 18 }) + tension(556, 190, 556, 120, 'uC', { lx: 22 });
  s += courant(320, yh, 'd', 'i');
  s += texte(330, 160, 'K en 1 : charge (générateur dans le circuit)', { taille: 12, couleur: ATTENUE }) + texte(330, 180, 'K en 2 : décharge dans R seule', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['charge-rc'] = ({ E = 6, tau = 2, mode = 'charge' } = {}) => {
  const charge = mode === 'charge';
  const { svg, X, Y } = graphe({ W: 640, H: 310, xmin: 0, xmax: 6 * tau, ymin: 0, ymax: E * 1.15, pasX: tau, pasY: 1, nomX: 't (ms)', nomY: 'uC (V)', g: 50, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  const f = charge ? (t) => E * (1 - Math.exp(-t / tau)) : (t) => E * Math.exp(-t / tau);
  let s = svg + trace(f, 0, 6 * tau, X, Y, { couleur: BLEU });
  s += ligne(X(0), Y(E), X(6 * tau), Y(E), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true }) + etiquette(X(6 * tau) - 4, Y(E) - 8, `E = ${fr(E, 1)} V`, { taille: 12, ancre: 'end', couleur: ATTENUE });
  const v = f(tau);
  s += ligne(X(0), Y(v), X(tau), Y(v), { couleur: ROUGE, epaisseur: 1.3, pointilles: true }) + ligne(X(tau), Y(v), X(tau), Y(0), { couleur: ROUGE, epaisseur: 1.3, pointilles: true });
  s += `<circle cx="${nb(X(tau))}" cy="${nb(Y(v))}" r="5" fill="${ROUGE}"/>`;
  s += etiquette(X(tau) + 10, Y(v) + (charge ? 18 : -10), `à t = τ : ${charge ? '63' : '37'} % de E ≈ ${fr(v, 1)} V`, { taille: 12, couleur: ROUGE, ancre: 'start', gras: true });
  s += ligne(X(0), Y(charge ? 0 : E), X(tau), Y(charge ? E : 0), { couleur: VERT, epaisseur: 2, pointilles: true });
  s += etiquette(X(tau) + 6, Y(charge ? E : 0) + (charge ? 18 : -10), 'tangente à l\'origine', { taille: 12, couleur: VERT, ancre: 'start' });
  s += texte(X(tau), Y(0) + 32, 'τ', { taille: 14, gras: true, couleur: ROUGE });
  return enveloppe(640, 310, s);
};

S['archimede'] = () => {
  const W = 600, H = 300;
  let s = rect(60, 60, 340, 220, { fond: EAU, bord: 'none', ep: 0 }) + ligne(60, 60, 400, 60, { couleur: EAU_BORD, epaisseur: 2 });
  s += polyligne([[60, 30], [60, 280], [400, 280], [400, 30]], { couleur: ENCRE, ep: 2.4 });
  s += rect(180, 120, 100, 100, { fond: '#b8c2cc', bord: ENCRE, ep: 2 }) + `<circle cx="230" cy="170" r="4" fill="${ENCRE}"/>`;
  s += fleche(230, 170, 230, 60, { couleur: VERT, epaisseur: 3.2 }) + texte(240, 82, 'poussée F = 9,8 N', { taille: 14, gras: true, couleur: VERT, ancre: 'start' });
  s += fleche(230, 170, 230, 262, { couleur: ROUGE, epaisseur: 3.2, pointilles: true }) + texte(240, 258, 'P = m g', { taille: 14, gras: true, couleur: ROUGE, ancre: 'start' });
  s += cote(166, 120, 166, 220, '', {}) + texte(158, 175, '10 cm', { taille: 12, ancre: 'end' });
  s += texte(420, 110, 'F = ρ(eau) × V × g', { taille: 14, gras: true, ancre: 'start' }) + texte(420, 134, '= 1 000 × 1,0 × 10⁻³ × 9,81', { taille: 12, ancre: 'start' }) + texte(420, 154, '≈ 9,8 N, vers le haut', { taille: 12, ancre: 'start' });
  s += texte(420, 200, 'le poids dépend du matériau,', { taille: 12, ancre: 'start', couleur: ATTENUE }) + texte(420, 218, 'la poussée seulement du', { taille: 12, ancre: 'start', couleur: ATTENUE }) + texte(420, 236, 'volume immergé et du fluide', { taille: 12, ancre: 'start', couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['venturi'] = () => {
  const W = 640, H = 300, yc = 210, h1 = 40, h2 = 20, xa = 260, xb = 330, xc = 420, xd = 490;
  let s = chemin(`M 20 ${yc - h1} L ${xa} ${yc - h1} L ${xb} ${yc - h2} L ${xc} ${yc - h2} L ${xd} ${yc - h1} L 620 ${yc - h1} L 620 ${yc + h1} L ${xd} ${yc + h1} L ${xc} ${yc + h2} L ${xb} ${yc + h2} L ${xa} ${yc + h1} L 20 ${yc + h1} Z`, { couleur: ENCRE, ep: 2.2, fond: EAU });
  const tube = (x, hh, nom) => rect(x - 7, yc - (x > xb && x < xc ? h2 : h1) - hh, 14, hh, { fond: EAU, bord: 'none', ep: 0 }) + ligne(x - 7, yc - (x > xb && x < xc ? h2 : h1), x - 7, 30, { couleur: ENCRE, epaisseur: 2 }) + ligne(x + 7, yc - (x > xb && x < xc ? h2 : h1), x + 7, 30, { couleur: ENCRE, epaisseur: 2 }) + texte(x + 14, yc - (x > xb && x < xc ? h2 : h1) - hh + 5, nom, { taille: 13, gras: true, ancre: 'start' });
  s += tube(140, 130, 'P₁') + tube(375, 50, 'P₂');
  s += fleche(60, yc, 110, yc, { couleur: ROUGE, epaisseur: 3 }) + texte(85, yc + 26, 'v₁ = 1,0 m/s', { taille: 12, couleur: ROUGE, gras: true });
  s += fleche(345, yc, 430, yc, { couleur: ROUGE, epaisseur: 3 }) + texte(390, yc + 42, 'v₂ = 4,0 m/s', { taille: 12, couleur: ROUGE, gras: true });
  s += texte(560, 60, 'section ↘ : vitesse ↗', { taille: 13, gras: true, ancre: 'middle' }) + texte(560, 82, 'et pression ↘', { taille: 13, gras: true });
  s += texte(560, 120, 'P₁ − P₂ = ½ ρ (v₂² − v₁²)', { taille: 12 }) + texte(560, 140, '= 7,5 × 10³ Pa', { taille: 12, gras: true });
  return enveloppe(W, H, s);
};

S['electrolyseur'] = () => {
  const W = 640, H = 320;
  let s = becher(170, 290, 300, 160, { niveau: 0.78, couleur: '#9ec5f0' });
  s += rect(222, 110, 22, 150, { fond: '#c8793a', bord: ENCRE, ep: 1.6 }) + rect(396, 110, 22, 150, { fond: '#c8793a', bord: ENCRE, ep: 1.6 });
  s += fil([[233, 110], [233, 60], [407, 60], [407, 110]]) + dipole('pile', 320, 60, 'h');
  s += texte(320, 26, 'générateur', { taille: 12, couleur: ATTENUE });
  s += fleche(233, 100, 233, 70, { couleur: VIOLET, epaisseur: 2.2 }) + fleche(407, 70, 407, 100, { couleur: VIOLET, epaisseur: 2.2 }) + texte(196, 88, 'e⁻', { taille: 14, couleur: VIOLET, gras: true }) + texte(444, 88, 'e⁻', { taille: 14, couleur: VIOLET, gras: true });
  s += texte(120, 150, 'anode (+)', { taille: 14, gras: true, couleur: ROUGE }) + texte(120, 170, 'oxydation :', { taille: 12 }) + texte(120, 188, 'Cu → Cu²⁺ + 2 e⁻', { taille: 12 });
  s += texte(530, 150, 'cathode (−)', { taille: 14, gras: true, couleur: BLEU }) + texte(530, 170, 'réduction :', { taille: 12 }) + texte(530, 188, 'Cu²⁺ + 2 e⁻ → Cu', { taille: 12 });
  s += texte(320, 312, 'solution de sulfate de cuivre (Cu²⁺ + SO₄²⁻)', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H + 6, s);
};

S['axe-qr'] = ({ K = 10, Q = 2 } = {}) => {
  const W = 640, H = 200, X = (v) => 40 + (v / 20) * 560, y = 110;
  let s = fleche(30, y, 620, y, { couleur: AXE, epaisseur: 1.8 }) + texte(620, y - 12, 'Qr', { taille: 14, gras: true, ancre: 'end' });
  [0, 5, 10, 15, 20].forEach((v) => { s += ligne(X(v), y - 4, X(v), y + 4, { couleur: AXE, epaisseur: 1.4 }) + (v === K ? '' : texte(X(v), y + 22, String(v), { taille: 12, couleur: ATTENUE })); });
  s += ligne(X(K), y - 30, X(K), y + 30, { couleur: ENCRE, epaisseur: 3 }) + texte(X(K), y - 38, `K = ${K}`, { taille: 15, gras: true });
  s += `<circle cx="${X(Q)}" cy="${y}" r="6" fill="${BLEU}"/>` + texte(X(Q), y - 18, `Qr,i = ${Q}`, { taille: 13, gras: true, couleur: BLEU });
  s += fleche(X(Q) + 10, y + 50, X(K) - 10, y + 50, { couleur: VERT, epaisseur: 2.6 }) + texte((X(Q) + X(K)) / 2, y + 72, 'Qr,i < K : sens direct', { taille: 13, gras: true, couleur: VERT });
  s += fleche(X(18), y + 50, X(K) + 10, y + 50, { couleur: ROUGE, epaisseur: 2.6 }) + texte(X(14), y + 72, 'Qr,i > K : sens indirect', { taille: 13, gras: true, couleur: ROUGE });
  s += texte(W / 2, 26, 'le système évolue toujours de façon à rapprocher Qr de K', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['taux-avancement'] = () => {
  const W = 640, H = 220, g = 200, L = 400;
  let s = '';
  const barre = (y, t, tau, c) => rect(g, y, L, 30, { fond: '#f1f4f7', bord: ENCRE, ep: 1.4 }) + rect(g, y, L * tau, 30, { fond: c, bord: 'none', ep: 0 }) + texte(g - 10, y + 20, t, { taille: 13, ancre: 'end', gras: true });
  s += barre(50, 'acide chlorhydrique', 1, '#e57373') + texte(g + L / 2, 70, 'τ ≈ 1 : transformation totale', { taille: 13, gras: true, couleur: PAPIER });
  s += barre(120, 'acide éthanoïque', 0.04, '#5b9bd5') + texte(g + L * 0.04 + 10, 140, 'τ = 4,0 % : équilibre, il reste de l\'acide', { taille: 13, gras: true, ancre: 'start', couleur: BLEU });
  s += texte(g, 186, '0', { taille: 12, couleur: ATTENUE }) + texte(g + L, 186, 'xmax', { taille: 12, couleur: ATTENUE });
  s += texte(W / 2, 30, 'taux d\'avancement final τ = xf / xmax', { taille: 14, gras: true });
  s += texte(W / 2, 210, 'solutions à 1,0 × 10⁻² mol/L', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H + 6, s);
};

S['chocs'] = () => {
  const W = 640, H = 270;
  let s = '';
  const boiteGaz = (ox, w, titre, sous, graine) => {
    let t = rect(ox, 50, w, 160, { fond: '#f7f9fc', bord: ENCRE, ep: 2.4 });
    const r = alea(graine);
    for (let i = 0; i < 14; i++) {
      const x = ox + 14 + r() * (w - 28), y = 64 + r() * 132, a = r() * 2 * Math.PI;
      t += disque(x, y, 6, '#9ec5f0', { bord: BLEU }) + fleche(x + 7 * Math.cos(a), y + 7 * Math.sin(a), x + 24 * Math.cos(a), y + 24 * Math.sin(a), { couleur: ROUGE, epaisseur: 1.4, pointe: 6 });
    }
    t += texte(ox + w / 2, 232, titre, { taille: 14, gras: true }) + texte(ox + w / 2, 252, sous, { taille: 12, couleur: ATTENUE });
    return t;
  };
  s += boiteGaz(40, 260, 'volume V : pression P', 'chocs sur les parois', 3) + boiteGaz(420, 130, 'volume V/2 : pression 2P', 'deux fois plus de chocs', 3);
  s += fleche(320, 130, 400, 130, { couleur: ENCRE, epaisseur: 2.4 }) + texte(360, 118, 'on comprime', { taille: 12 }) + texte(360, 152, '(T constante)', { taille: 12, couleur: ATTENUE });
  s += texte(W / 2, 28, 'même quantité de gaz : la pression vient des chocs des particules sur les parois', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H + 4, s);
};

S['isotherme'] = () => {
  const n = 0.2, T = 300, R = 8.314;
  const P = (VL) => (n * R * T) / (VL * 1e-3) / 1e5;
  const { svg, X, Y } = graphe({ W: 620, H: 320, xmin: 0, xmax: 10, ymin: 0, ymax: 5.5, pasX: 1, pasY: 1, nomX: 'V (L)', nomY: 'P (10⁵ Pa)', g: 50, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  let s = svg + trace(P, 0.9, 10, X, Y, { couleur: BLEU });
  [[5, 'A'], [2.5, 'B']].forEach(([v, nom]) => {
    const p = P(v);
    s += ligne(X(0), Y(p), X(v), Y(p), { couleur: ROUGE, epaisseur: 1.2, pointilles: true }) + ligne(X(v), Y(p), X(v), Y(0), { couleur: ROUGE, epaisseur: 1.2, pointilles: true });
    s += `<circle cx="${nb(X(v))}" cy="${nb(Y(p))}" r="5" fill="${ROUGE}"/>` + etiquette(X(v) + 10, Y(p) - 8, `${nom} : ${fr(v, 1)} L ; ${fr(p, 1)} × 10⁵ Pa`, { taille: 12, couleur: ROUGE, ancre: 'start', gras: true });
  });
  s += etiquette(X(6), Y(4), 'n = 0,20 mol ; T = 300 K', { taille: 13, gras: true });
  s += etiquette(X(6), Y(4) + 22, 'volume divisé par 2 : pression doublée', { taille: 12, couleur: ATTENUE });
  return enveloppe(620, 320, s);
};

S['projectile'] = ({ v0 = 20, alpha = 30, g = 9.8 } = {}) => {
  const a = (alpha * Math.PI) / 180, vx = v0 * Math.cos(a), vy = v0 * Math.sin(a), tf = (2 * vy) / g, xf = vx * tf, hm = (vy * vy) / (2 * g);
  const { svg, X, Y } = graphe({ W: 640, H: 300, xmin: 0, xmax: 40, ymin: 0, ymax: 8, pasX: 5, pasY: 1, nomX: 'x (m)', nomY: 'y (m)', g: 46, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  let s = svg + trace((x) => -(g / (2 * vx * vx)) * x * x + Math.tan(a) * x, 0, xf, X, Y, { couleur: BLEU });
  for (let k = 0; k <= 10; k++) { const t = (k * tf) / 10; s += `<circle cx="${nb(X(vx * t))}" cy="${nb(Y(vy * t - 0.5 * g * t * t))}" r="3.5" fill="${BLEU}"/>`; }
  const kx = (X(1) - X(0)) * 0.55, ky = (Y(0) - Y(1)) * 0.12;
  s += fleche(X(0), Y(0), X(0.3 * vx), Y(0.3 * vy), { couleur: VERT, epaisseur: 2.8 });
  void kx; void ky;
  s += texte(X(0) + 6, Y(3.6), 'v₀ = 20 m/s', { taille: 13, gras: true, couleur: VERT, ancre: 'start' }) + texte(X(0) + 60, Y(0) - 10, 'α = 30°', { taille: 12, couleur: VERT, ancre: 'start' });
  s += fleche(X(vx * tf / 2), Y(hm), X(vx * tf / 2) + 60, Y(hm), { couleur: VERT, epaisseur: 2.4 }) + texte(X(vx * tf / 2) + 66, Y(hm) + 4, 'v horizontale (vy = 0)', { taille: 12, couleur: VERT, ancre: 'start' });
  s += fleche(X(31), Y(7), X(31), Y(5.2), { couleur: ROUGE, epaisseur: 2.6 }) + texte(X(31) + 8, Y(6.2), 'g', { taille: 14, gras: true, couleur: ROUGE, ancre: 'start' });
  s += ligne(X(vx * tf / 2), Y(hm), X(vx * tf / 2), Y(0), { couleur: ATTENUE, epaisseur: 1, pointilles: true }) + texte(X(vx * tf / 2), Y(0) + 34, `flèche ${fr(hm, 1)} m à t ≈ ${fr(tf / 2, 1)} s`, { taille: 12, couleur: ATTENUE });
  s += etiquette(X(xf) - 4, Y(0) - 10, `portée ≈ ${fr(xf, 0)} m`, { taille: 12, couleur: BLEU, ancre: 'end', gras: true });
  return enveloppe(640, 300, s);
};

S['condensateur-plan'] = () => {
  const W = 640, H = 300, y1 = 60, y2 = 220, x1 = 150, x2 = 470;
  let s = rect(x1, y1 - 10, x2 - x1, 10, { fond: '#f6c7c7', bord: ROUGE, ep: 1.6 }) + rect(x1, y2, x2 - x1, 10, { fond: '#c7d9f6', bord: BLEU, ep: 1.6 });
  s += texte(x2 + 14, y1, '+ + + plaque positive', { taille: 13, couleur: ROUGE, ancre: 'start', gras: true }) + texte(x2 + 14, y2 + 10, '− − − plaque négative', { taille: 13, couleur: BLEU, ancre: 'start', gras: true });
  for (let x = x1 + 30; x < x2; x += 60) s += fleche(x, y1 + 6, x, y2 - 6, { couleur: '#c9a227', epaisseur: 1.6, pointe: 8 });
  s += texte(x1 + 44, y1 + 40, 'E', { taille: 15, gras: true, couleur: '#9a7400' });
  // électron entrant horizontalement, dévié vers la plaque +
  const ye = 170, k = 0.0011;
  let d = `M 40 ${ye} L ${x1} ${ye}`;
  for (let x = x1; x <= x2; x += 4) d += ` L ${x} ${nb(ye - k * (x - x1) ** 2)}`;
  s += chemin(d, { couleur: VIOLET, ep: 2.4 });
  s += disque(70, ye, 7, VIOLET, { bord: '#5a2d82' }) + texte(70, ye + 24, 'électron', { taille: 12, couleur: VIOLET });
  s += fleche(84, ye, 130, ye, { couleur: VERT, epaisseur: 2.2 }) + texte(108, ye - 10, 'v₀', { taille: 13, gras: true, couleur: VERT });
  const xm = 300, ym = ye - k * (xm - x1) ** 2;
  s += fleche(xm, ym, xm, ym - 52, { couleur: ROUGE, epaisseur: 3 }) + texte(xm + 8, ym - 40, 'F = qE (q < 0)', { taille: 13, gras: true, couleur: ROUGE, ancre: 'start' });
  s += cote(x2 + 40, y1, x2 + 40, y2, '', {}) + texte(x2 + 50, (y1 + y2) / 2 + 5, 'd', { taille: 14, gras: true, ancre: 'start' });
  s += texte(W / 2, H - 20, 'E = U / d, dirigé de + vers − ; l\'électron est dévié vers la plaque +', { taille: 13, gras: true });
  return enveloppe(W, H, s);
};

S['loi-aires'] = () => {
  const W = 640, H = 300, a = 160, e = 0.6, b = a * Math.sqrt(1 - e * e), fx = 30 + a * (1 + e), fy = 145;
  const pos = (M) => { let E = M; for (let i = 0; i < 30; i++) E -= (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E)); return [fx + a * (Math.cos(E) - e), fy - b * Math.sin(E)]; };
  let s = ellipse(fx - a * e, fy, a, b, { couleur: ENCRE, ep: 1.8 });
  const secteur = (m0, m1, c) => { let d = `M ${fx} ${fy}`; for (let k = 0; k <= 30; k++) { const p = pos(m0 + ((m1 - m0) * k) / 30); d += ` L ${nb(p[0])} ${nb(p[1])}`; } return chemin(d + ' Z', { couleur: c, ep: 1.4, fond: c, opacite: 0.35 }); };
  s += secteur(-0.4, 0.4, ROUGE) + secteur(Math.PI - 0.4, Math.PI + 0.4, BLEU);
  s += disque(fx, fy, 12, '#ffd34d', { bord: ORANGE }) + texte(fx, fy + 32, 'Soleil (foyer)', { taille: 12 });
  s += texte(fx + a * (1 - e) + 14, fy - 60, 'près du Soleil :', { taille: 12, ancre: 'start', couleur: ROUGE }) + texte(fx + a * (1 - e) + 14, fy - 44, 'arc long, planète rapide', { taille: 12, ancre: 'start', couleur: ROUGE });
  s += texte(fx - a * (1 + e) + 6, fy + b + 4, '', {}) + texte(fx + a * (1 - e) + 14, fy + 50, 'loin du Soleil :', { taille: 12, ancre: 'start', couleur: BLEU }) + texte(fx + a * (1 - e) + 14, fy + 66, 'arc court, planète lente', { taille: 12, ancre: 'start', couleur: BLEU });
  s += texte(W / 2, H - 12, 'les deux secteurs, parcourus en des durées égales, ont la même aire (orbite très aplatie pour la lisibilité)', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['bilan-photo'] = () => {
  const W = 620, H = 260, k = 120, x0 = 120;
  let s = rect(x0, 50, 3.1 * k, 40, { fond: '#dbe8f8', bord: BLEU, ep: 1.6 }) + texte(x0 + 1.55 * k, 76, 'énergie du photon : hν = 3,1 eV (λ = 400 nm)', { taille: 13, gras: true });
  s += rect(x0, 130, 2.3 * k, 40, { fond: '#f1f4f7', bord: ENCRE, ep: 1.6 }) + texte(x0 + 1.15 * k, 156, 'extraction W = 2,3 eV', { taille: 13, gras: true });
  s += rect(x0 + 2.3 * k, 130, 0.8 * k, 40, { fond: '#e8f5ee', bord: VERT, ep: 1.6 }) + texte(x0 + 2.7 * k, 156, 'Ec', { taille: 13, gras: true, couleur: VERT });
  s += texte(x0 + 2.7 * k, 196, '0,8 eV', { taille: 13, gras: true, couleur: VERT });
  s += texte(W / 2, 236, 'Ec = hν − W = 3,1 − 2,3 = 0,8 eV', { taille: 14, gras: true });
  return enveloppe(W, H, s);
};

S['niveaux'] = () => {
  const W = 620, H = 330, E = [[-13.6, 'E₁ = −13,6 eV'], [-3.40, 'E₂ = −3,40 eV'], [-1.51, 'E₃ = −1,51 eV'], [-0.85, 'E₄ = −0,85 eV']];
  const Yv = (e) => (e >= -4 ? 40 + -e * 50 : 290); // échelle coupée sous −4 eV
  let s = ligne(80, Yv(0), 330, Yv(0), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true }) + texte(340, Yv(0) + 4, '0 eV (électron libre)', { taille: 12, ancre: 'start', couleur: ATTENUE });
  E.forEach(([e, t]) => { s += ligne(80, Yv(e), 330, Yv(e), { couleur: ENCRE, epaisseur: 2.4 }) + texte(340, Yv(e) + 4, t, { taille: 13, ancre: 'start' }); });
  s += ligne(56, 244, 72, 236, { couleur: ATTENUE, epaisseur: 1.4 }) + ligne(56, 252, 72, 244, { couleur: ATTENUE, epaisseur: 1.4 }) + texte(64, 270, 'échelle\ncoupée', { taille: 12, couleur: ATTENUE });
  s += fleche(140, Yv(-3.4), 140, Yv(-1.51), { couleur: BLEU, epaisseur: 2.4 }) + texte(134, (Yv(-3.4) + Yv(-1.51)) / 2 + 5, 'absorption', { taille: 12, couleur: BLEU, ancre: 'end' });
  s += fleche(230, Yv(-1.51), 230, Yv(-3.4), { couleur: ROUGE, epaisseur: 2.4 });
  s += chemin(`M 236 ${nb((Yv(-3.4) + Yv(-1.51)) / 2)} q 8 -8 16 0 t 16 0 t 16 0`, { couleur: ROUGE, ep: 2 }) + texte(240, (Yv(-3.4) + Yv(-1.51)) / 2 + 24, 'émission d\'un photon', { taille: 12, couleur: ROUGE, ancre: 'start' });
  s += texte(500, 230, 'ΔE = 1,89 eV', { taille: 14, gras: true }) + texte(500, 252, 'λ = hc / ΔE ≈ 656 nm (rouge)', { taille: 12 });
  s += texte(500, 316, 'exemple : atome d\'hydrogène', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['spectre-ir'] = () => {
  const { svg, X, Y } = graphe({ W: 640, H: 300, xmin: 0, xmax: 3500, ymin: 0, ymax: 105, pasX: 500, pasY: 25, gradY: false, grille: false, nomX: 'nombre d\'onde σ (cm⁻¹)', nomY: 'transmittance (%)', g: 40, fmtX: (v) => fr(4000 - v, 0) });
  const bande = (sig, c, l, p) => p * Math.exp(-(((sig - c) / l) ** 2));
  const T = (x) => { const sg = 4000 - x; return 95 - bande(sg, 3000, 300, 55) - bande(sg, 2950, 40, 15) - bande(sg, 1710, 25, 80) - bande(sg, 1410, 20, 30) - bande(sg, 1290, 25, 45) - bande(sg, 940, 30, 30); };
  let s = svg + trace(T, 0, 3500, X, Y, { couleur: BLEU, n: 900, ep: 2 });
  s += etiquette(X(1000), Y(28), 'O–H acide : bande très large', { taille: 12, couleur: ROUGE, gras: true });
  s += etiquette(X(2290) + 8, Y(10), 'C=O vers 1 710 : forte et fine', { taille: 12, couleur: ROUGE, gras: true, ancre: 'start' });
  s += texte(560, 30, 'allure schématique', { taille: 12, couleur: ATTENUE }) + texte(560, 46, 'd\'un acide carboxylique', { taille: 12, couleur: ATTENUE });
  return enveloppe(640, 300, s);
};

S['diffraction'] = () => {
  const W = 660, H = 290, yc = 140, xf = 200, xe = 560;
  let s = rect(20, yc - 12, 60, 24, { fond: '#e57373', bord: ENCRE, ep: 1.6 }) + texte(50, yc + 32, 'laser', { taille: 12 });
  s += ligne(80, yc, xf, yc, { couleur: ROUGE, epaisseur: 3 });
  s += rect(xf - 4, 30, 8, yc - 8 - 30, { fond: ENCRE, bord: 'none', ep: 0 }) + rect(xf - 4, yc + 8, 8, 250 - yc - 8, { fond: ENCRE, bord: 'none', ep: 0 });
  s += texte(xf, 270, 'fente de largeur a', { taille: 12 });
  const half = 60;
  s += polygone([[xf, yc - 6], [xe, yc - half], [xe, yc + half], [xf, yc + 6]], { couleur: 'none', fond: '#f6c7c7', opacite: 0.6, epaisseur: 0 });
  s += ligne(xf, yc, xe, yc - half, { couleur: ROUGE, epaisseur: 1.2, pointilles: true }) + ligne(xf, yc, xe, yc, { couleur: ATTENUE, epaisseur: 1, pointilles: true });
  s += chemin(`M ${xf + 110} ${yc} A 110 110 0 0 0 ${nb(xf + 110 * Math.cos(Math.atan(half / (xe - xf))))} ${nb(yc - 110 * Math.sin(Math.atan(half / (xe - xf))))}`, { couleur: VERT, ep: 2 }) + texte(xf + 124, yc - 8, 'θ', { taille: 15, gras: true, couleur: VERT, ancre: 'start' });
  s += ligne(xe, 30, xe, 250, { couleur: ENCRE, epaisseur: 3 }) + texte(xe, 270, 'écran', { taille: 12 });
  // profil d'intensité sur l'écran
  let d = '';
  for (let y = 30; y <= 250; y += 1) { const u = ((y - yc) / half) * Math.PI; const I = u === 0 ? 1 : (Math.sin(u) / u) ** 2; d += `${d ? ' L' : 'M'} ${nb(xe + 6 + 70 * I)} ${y}`; }
  s += chemin(d, { couleur: ROUGE, ep: 2 });
  s += cote(xe - 22, yc - half, xe - 22, yc + half, '', {}) + texte(xe - 28, yc + 5, 'ℓ', { taille: 15, gras: true, ancre: 'end' });
  s += cote(xf, 24, xe, 24, 'D', { dy: -6 });
  s += texte(330, 280, 'θ = λ / a ; ℓ = 2 λ D / a', { taille: 13, gras: true });
  return enveloppe(W, H + 4, s);
};

S['superposition'] = () => {
  const W = 640, H = 300;
  let s = '';
  const panneau = (ox, titre, phase, c) => {
    let t = texte(ox + 140, 26, titre, { taille: 13, gras: true, couleur: c });
    const onde = (y0, A, ph, col, ep = 2) => { let d = ''; for (let x = 0; x <= 260; x += 2) d += `${d ? ' L' : 'M'} ${ox + 10 + x} ${nb(y0 - A * Math.sin((x / 260) * 4 * Math.PI + ph))}`; return chemin(d, { couleur: col, ep }); };
    t += onde(70, 20, 0, BLEU) + onde(140, 20, phase, VERT);
    t += texte(ox + 140, 108, '+', { taille: 18, gras: true });
    const somme = phase === 0 ? 40 : 0;
    t += ligne(ox + 10, 230, ox + 270, 230, { couleur: GRILLE, epaisseur: 1 });
    t += somme ? onde(230, somme, 0, c, 3) : ligne(ox + 10, 230, ox + 270, 230, { couleur: c, epaisseur: 3 });
    t += texte(ox + 140, 184, '=', { taille: 18, gras: true });
    t += texte(ox + 140, 290, phase === 0 ? 'δ = k λ : amplitudes qui s\'ajoutent' : 'δ = (k + ½) λ : amplitudes qui s\'annulent', { taille: 12 });
    return t;
  };
  s += panneau(20, 'interférences constructives', 0, ROUGE) + panneau(340, 'interférences destructives', Math.PI, VIOLET);
  return enveloppe(W, H + 4, s);
};

S['signes-thermo'] = () => {
  const W = 620, H = 260;
  let s = rect(200, 60, 220, 140, { fond: '#eef3fb', bord: BLEU, ep: 2, rx: 14, pointilles: true }) + texte(310, 124, 'système', { taille: 15, gras: true }) + texte(310, 146, 'ΔU = W + Q', { taille: 14, gras: true, couleur: BLEU });
  s += fleche(40, 100, 196, 100, { couleur: ROUGE, epaisseur: 3 }) + texte(110, 88, 'Q reçu : Q > 0', { taille: 13, gras: true, couleur: ROUGE });
  s += fleche(424, 100, 580, 100, { couleur: VERT, epaisseur: 3 }) + texte(500, 88, 'W cédé : W < 0', { taille: 13, gras: true, couleur: VERT });
  s += fleche(424, 170, 580, 170, { couleur: ORANGE, epaisseur: 3 }) + texte(500, 158, 'Q cédé : Q < 0', { taille: 13, gras: true, couleur: ORANGE });
  s += texte(W / 2, 236, 'on raisonne toujours du point de vue du système : reçu > 0, cédé < 0', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['refroidissement'] = () => {
  const { svg, X, Y } = graphe({ W: 620, H: 300, xmin: 0, xmax: 10, ymin: 0, ymax: 10, gradX: false, gradY: false, nomX: 'temps', nomY: 'température', g: 40 });
  const T = (t) => 2.5 + 6.5 * Math.exp(-t / 2.2);
  let s = svg + trace(T, 0, 10, X, Y, { couleur: ROUGE });
  s += ligne(X(0), Y(2.5), X(10), Y(2.5), { couleur: BLEU, epaisseur: 1.4, pointilles: true }) + etiquette(X(9.8), Y(2.5) + 18, 'température de la pièce T ext', { taille: 12, ancre: 'end', couleur: BLEU });
  s += ligne(X(0), Y(9), X(1.6), Y(9 - (6.5 / 2.2) * 1.6), { couleur: VERT, epaisseur: 2, pointilles: true });
  s += etiquette(X(1.8), Y(8.8), 'au début : refroidissement rapide', { taille: 12, couleur: VERT, ancre: 'start' });
  s += etiquette(X(6), Y(4.6), 'près de T ext : de plus en plus lent', { taille: 12, couleur: ROUGE, ancre: 'start' });
  s += texte(X(0) + 8, Y(9) - 8, 'café chaud', { taille: 12, ancre: 'start', gras: true });
  return enveloppe(620, 300, s);
};

S['addition-elimination'] = () => {
  const W = 660, H = 270, u = 34;
  let s = formule(70, 120, u, [[0, 0, 'C'], [1, 0, 'C'], [-0.8, -0.8, 'H'], [-0.8, 0.8, 'H'], [1.8, -0.8, 'H'], [1.8, 0.8, 'H']], [[0, 1, 2], [0, 2], [0, 3], [1, 4], [1, 5]]);
  s += texte(87, 200, 'éthène (C=C)', { taille: 13, gras: true });
  s += texte(190, 126, '+ H₂O', { taille: 16, gras: true });
  s += formule(400, 120, u, [[0, 0, 'C'], [1, 0, 'C'], [2, 0, 'O', ROUGE], [3, 0, 'H', ROUGE], [-1, 0, 'H'], [0, -1, 'H'], [0, 1, 'H'], [1, -1, 'H'], [1, 1, 'H']], [[0, 1], [1, 2], [2, 3], [0, 4], [0, 5], [0, 6], [1, 7], [1, 8]]);
  s += texte(450, 200, 'éthanol', { taille: 13, gras: true });
  s += fleche(250, 100, 340, 100, { couleur: VERT, epaisseur: 2.6 }) + texte(295, 88, 'addition', { taille: 13, gras: true, couleur: VERT });
  s += fleche(340, 146, 250, 146, { couleur: VIOLET, epaisseur: 2.6 }) + texte(295, 166, 'élimination', { taille: 13, gras: true, couleur: VIOLET }) + texte(295, 182, '(− H₂O)', { taille: 12, couleur: VIOLET });
  s += texte(W / 2, 236, 'addition : la liaison double s\'ouvre ; élimination : une liaison double apparaît', { taille: 12, couleur: ATTENUE });
  return enveloppe(W, H, s);
};

S['courbes-ph-deux'] = ({ CA = 0.075, VA = 20, CB = 0.10, pKa = 4.8 } = {}) => {
  const VE = (CA * VA) / CB;
  const { svg, X, Y } = graphe({ W: 640, H: 330, xmin: 0, xmax: 30, ymin: 0, ymax: 14, pasX: 5, pasY: 2, nomX: 'V versé (mL)', nomY: 'pH', g: 50, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  let s = svg + trace((v) => phTitrage(CA, VA, CB, v), 0, 30, X, Y, { couleur: BLEU, n: 600 }) + trace((v) => phTitrage(CA, VA, CB, v, pKa), 0, 30, X, Y, { couleur: ROUGE, n: 600 });
  const p1 = phTitrage(CA, VA, CB, VE), p2 = phTitrage(CA, VA, CB, VE, pKa);
  s += `<circle cx="${nb(X(VE))}" cy="${nb(Y(p1))}" r="5" fill="${BLEU}"/><circle cx="${nb(X(VE))}" cy="${nb(Y(p2))}" r="5" fill="${ROUGE}"/>`;
  s += ligne(X(VE), Y(0), X(VE), Y(p2), { couleur: ATTENUE, epaisseur: 1.2, pointilles: true });
  s += etiquette(X(VE) + 10, Y(p1) + 5, `acide fort : pH = ${fr(p1, 1)} à l'équivalence`, { taille: 12, couleur: BLEU, ancre: 'start', gras: true });
  s += etiquette(X(VE) + 10, Y(p2) + 5, `acide faible : pH ≈ ${fr(p2, 1)}`, { taille: 12, couleur: ROUGE, ancre: 'start', gras: true });
  s += etiquette(X(1), Y(1.6), 'fort', { taille: 12, couleur: BLEU, ancre: 'start' }) + etiquette(X(1), Y(4.4), 'faible', { taille: 12, couleur: ROUGE, ancre: 'start' });
  s += texte(X(VE), Y(0) + 32, `Véq = ${fr(VE, 1)} mL`, { taille: 12, gras: true });
  return enveloppe(640, 330, s);
};

S['vallee'] = () => {
  const { svg, X, Y } = graphe({ W: 640, H: 340, xmin: 0, xmax: 100, ymin: 0, ymax: 150, pasX: 20, pasY: 25, nomX: 'Z (protons)', nomY: 'N (neutrons)', g: 50, fmtX: (v) => fr(v, 0), fmtY: (v) => fr(v, 0) });
  const Astable = (Z) => { let A = 2 * Z; for (let i = 0; i < 40; i++) A = Z * (1.98 + 0.0155 * Math.pow(A, 2 / 3)); return A; };
  const Nst = (Z) => Astable(Z) - Z;
  let s = svg + ligne(X(0), Y(0), X(100), Y(100), { couleur: ATTENUE, epaisseur: 1.4, pointilles: true }) + etiquette(X(92), Y(92) + 18, 'N = Z', { taille: 12, couleur: ATTENUE });
  const haut = [], bas = [];
  for (let Z = 1; Z <= 82; Z += 1) { const w = 1 + 0.06 * Z; haut.push([X(Z), Y(Nst(Z) + w)]); bas.unshift([X(Z), Y(Math.max(0, Nst(Z) - w))]); }
  s += polygone([...haut, ...bas], { couleur: VERT, fond: '#cdeccf', epaisseur: 1.4 });
  s += ligne(X(82), Y(0), X(82), Y(150), { couleur: VIOLET, epaisseur: 1.4, pointilles: true }) + texte(X(82) + 6, Y(140), 'Z = 82', { taille: 12, couleur: VIOLET, ancre: 'start' });
  s += etiquette(X(30), Y(70), 'trop de neutrons : β⁻', { taille: 13, couleur: ROUGE, gras: true }) + etiquette(X(62), Y(40), 'trop de protons : β⁺', { taille: 13, couleur: BLEU, gras: true });
  s += etiquette(X(91), Y(100), 'noyaux lourds : α', { taille: 13, couleur: VIOLET, gras: true });
  s += etiquette(X(45), Y(Nst(45) + 22), 'vallée de stabilité', { taille: 13, couleur: VERT, gras: true });
  return enveloppe(640, 340, s);
};

S['deplacements'] = () => {
  const W = 620, H = 320, c = 46, ox = 80, oy = 270; // case (Z, N) ; origine en bas à gauche
  const P = (z, n) => [ox + z * c, oy - n * c];
  let s = '';
  for (let i = 0; i <= 5; i++) { s += ligne(ox, oy - i * c, ox + 5 * c, oy - i * c, { couleur: GRILLE, epaisseur: 1 }) + ligne(ox + i * c, oy, ox + i * c, oy - 5 * c, { couleur: GRILLE, epaisseur: 1 }); }
  s += fleche(ox, oy, ox + 5 * c + 20, oy, { couleur: AXE, epaisseur: 1.6 }) + fleche(ox, oy, ox, oy - 5 * c - 20, { couleur: AXE, epaisseur: 1.6 });
  s += texte(ox + 5 * c + 20, oy + 20, 'Z', { taille: 14, gras: true }) + texte(ox - 14, oy - 5 * c - 14, 'N', { taille: 14, gras: true });
  const p = P(3, 3);
  s += disque(p[0], p[1], 12, '#555', { bord: ENCRE }) + texte(p[0] + 4, p[1] + 30, 'noyau père', { taille: 12, gras: true, ancre: 'start' });
  const vers = (dz, dn, t, col, lx, ly) => { const q = P(3 + dz, 3 + dn); return fleche(p[0], p[1], q[0], q[1], { couleur: col, epaisseur: 2.8 }) + disque(q[0], q[1], 8, col, { bord: col }) + texte(q[0] + lx, q[1] + ly, t, { taille: 13, gras: true, couleur: col, ancre: lx < 0 ? 'end' : 'start' }); };
  s += vers(-2, -2, 'α : Z − 2, N − 2', VIOLET, -14, 4) + vers(1, -1, 'β⁻ : Z + 1, N − 1', ROUGE, 14, 18) + vers(-1, 1, 'β⁺ : Z − 1, N + 1', BLEU, -14, -6);
  s += texte(440, 70, 'A = Z + N', { taille: 14, gras: true, ancre: 'start' }) + texte(440, 96, 'α : A diminue de 4', { taille: 12, ancre: 'start' }) + texte(440, 116, 'β⁻ et β⁺ : A inchangé', { taille: 12, ancre: 'start' }) + texte(440, 136, 'γ : ni Z ni N ne changent', { taille: 12, ancre: 'start' });
  return enveloppe(W, H, s);
};

// ═════════════════════════ Poses : Terminale physique-chimie ═════════════════════════
{
  const F = 'terminale/physique-chimie/acide-base-ph';
  pose(F, 'transfert-proton', 'diagramme', '## 3. Réaction acide-base',
    'Exemple de la fiche : l\'acide éthanoïque cède un ion H⁺ à l\'eau, qui joue le rôle de base ; il se forme l\'ion éthanoate et l\'ion oxonium.',
    { W: 640, H: 250, boites: [
      { id: 'a1', x: 30, y: 30, w: 220, h: 50, t: 'CH₃COOH (acide 1)', style: 'rouge', gras: true },
      { id: 'b1', x: 30, y: 180, w: 220, h: 50, t: 'CH₃COO⁻ (base 1)', style: 'rouge' },
      { id: 'b2', x: 390, y: 30, w: 220, h: 50, t: 'H₂O (base 2)', style: 'bleu', gras: true },
      { id: 'a2', x: 390, y: 180, w: 220, h: 50, t: 'H₃O⁺ (acide 2)', style: 'bleu' }],
      fleches: [{ de: 'a1', a: 'b1', t: 'cède H⁺', lx: -40, ly: 0, couleur: ROUGE }, { de: 'b2', a: 'a2', t: 'capte H⁺', lx: 42, ly: 0, couleur: BLEU },
        { depuis: [260, 115], vers: [380, 115], t: 'H⁺', couleur: VIOLET, ep: 2.6 }] });
  pose(F, 'amphotere', 'diagramme', '## 5. Espèce amphotère (ampholyte)',
    'L\'eau est amphotère : base du couple H₃O⁺/H₂O quand elle capte un ion H⁺, acide du couple H₂O/HO⁻ quand elle en cède un.',
    { W: 600, H: 280, boites: [
      { id: 'h3o', x: 200, y: 14, w: 200, h: 50, t: 'H₃O⁺', style: 'rouge', gras: true },
      { id: 'eau', x: 200, y: 114, w: 200, h: 50, t: 'H₂O', style: 'violet', gras: true },
      { id: 'ho', x: 200, y: 214, w: 200, h: 50, t: 'HO⁻', style: 'bleu', gras: true }],
      fleches: [{ de: 'eau', a: 'h3o', t: 'capte H⁺ : l\'eau est une base', lx: 20, ly: 4, ancre: 'start' }, { de: 'eau', a: 'ho', t: 'cède H⁺ : l\'eau est un acide', lx: 20, ly: 4, ancre: 'start' }] });
  pose(F, 'echelle-ph', 'echelle-ph', '### Échelle des pH à 25 °C',
    'Échelle des pH à 25 °C : chaque unité de pH en moins correspond à une concentration en ions oxonium dix fois plus grande.',
    { concentrations: true, exemples: [{ pH: 2.4, t: 'jus de citron' }, { pH: 7, t: 'eau pure' }] });
}
{
  const F = 'terminale/physique-chimie/cinetique-chimique';
  pose(F, 'ordre1', 'ordre1', '### Solution : décroissance exponentielle',
    'Exemple de la fiche : concentration initiale 0,80 mol/L et k = 0,046 s⁻¹ ; la concentration est divisée par deux toutes les 15 s environ, et la tangente à l\'origine donne la vitesse initiale.');
  pose(F, 'linearisation', 'linearisation', '### Tester expérimentalement l\'ordre 1',
    'Linéarisation : pour une loi d\'ordre 1, le logarithme de la concentration en fonction du temps est une droite de pente −k, ici −0,046 s⁻¹.');
}
{
  const F = 'terminale/physique-chimie/decrire-mouvement';
  pose(F, 'trajectoire', 'trajectoire-xy', '## 4. Méthode : des coordonnées à tout le reste',
    'Exemple de la fiche : x = 3t et y = 5t − t² ; le vecteur vitesse est tangent à la trajectoire et l\'accélération (0 ; −2) reste la même en tout point.');
  pose(F, 'frenet', 'frenet', '## 5. Le repère de Frenet (mouvement circulaire)',
    'Repère de Frenet en un point M d\'un cercle : uₜ est tangent dans le sens du mouvement, uₙ dirigé vers le centre ; l\'accélération a une composante normale v²/R.');
}
{
  const F = 'terminale/physique-chimie/dipole-rc';
  pose(F, 'circuit-rc', 'circuit-rc', '## 2. Le circuit RC série',
    'Circuit RC série : interrupteur en position 1, le générateur charge le condensateur à travers R ; en position 2, le condensateur se décharge dans R.');
  pose(F, 'decharge', 'charge-rc', '### La décharge',
    'Décharge de l\'exemple : E = 6,0 V et τ = RC = 2,0 ms ; à t = τ, la tension ne vaut plus que 37 % de E, soit 2,2 V.',
    { E: 6, tau: 2, mode: 'decharge' });
  pose(F, 'charge', 'charge-rc', '### Trois façons de déterminer τ sur une courbe expérimentale',
    'Charge sous E = 6,0 V avec τ = 2,0 ms : à t = τ, la tension atteint 63 % de E, et la tangente à l\'origine coupe l\'asymptote u = E à t = τ.',
    { E: 6, tau: 2, mode: 'charge' });
}
{
  const F = 'terminale/physique-chimie/ecoulement-fluide';
  pose(F, 'archimede', 'archimede', '### Expression',
    'Cube de 10 cm d\'arête entièrement immergé dans l\'eau : la poussée d\'Archimède, verticale vers le haut, vaut 9,8 N quel que soit le matériau du cube.');
  pose(F, 'venturi', 'venturi', '## 5. L\'effet Venturi',
    'Effet Venturi : dans le rétrécissement, la vitesse passe de 1,0 à 4,0 m/s et la pression baisse de 7,5 × 10³ Pa, comme le montrent les deux tubes.');
}
{
  const F = 'terminale/physique-chimie/electrolyse';
  pose(F, 'electrolyseur', 'electrolyseur', '### Les signes, eux, changent',
    'Électrolyse d\'une solution de sulfate de cuivre : l\'anode, reliée à la borne +, est le siège de l\'oxydation ; la cathode, reliée à la borne −, celui de la réduction.');
  pose(F, 'chaine-faraday', 'diagramme', '## 6. Méthode : quantité de matière transformée',
    'Exemple de la fiche : 0,50 A pendant 30 min donnent 900 C, soit 9,3 × 10⁻³ mol d\'électrons, 4,7 × 10⁻³ mol de cuivre et environ 0,30 g déposés.',
    { W: 680, H: 170, boites: [
      { id: 'q', x: 4, y: 40, w: 150, h: 70, t: 'Q = I Δt\n= 0,50 × 1 800\n= 900 C', style: 'bleu', taille: 13 },
      { id: 'e', x: 178, y: 40, w: 150, h: 70, t: 'n(e⁻) = Q / F\n= 9,3 × 10⁻³ mol', style: 'violet', taille: 13 },
      { id: 'c', x: 352, y: 40, w: 150, h: 70, t: 'n(Cu) = n(e⁻) / 2\n= 4,7 × 10⁻³ mol', style: 'orange', taille: 13 },
      { id: 'm', x: 526, y: 40, w: 150, h: 70, t: 'm = n × M\n≈ 0,30 g', style: 'vert', taille: 13, gras: true }],
      fleches: [{ de: 'q', a: 'e' }, { de: 'e', a: 'c' }, { de: 'c', a: 'm' }],
      textes: [{ x: 340, y: 150, t: 'Cu²⁺ + 2 e⁻ → Cu : deux électrons par atome de cuivre', taille: 12, couleur: ATTENUE }] });
}
{
  const F = 'terminale/physique-chimie/equilibre-sens-evolution';
  pose(F, 'axe-qr', 'axe-qr', '## 4. Le critère d\'évolution spontanée',
    'Exemple de la fiche : K = 10 et Qr,i = 2 ; comme Qr,i est inférieur à K, le système évolue dans le sens direct jusqu\'à ce que Qr atteigne K.');
  pose(F, 'taux', 'taux-avancement', '### La règle',
    'Taux d\'avancement final : environ 1 pour l\'acide chlorhydrique (transformation totale), 4,0 % pour l\'acide éthanoïque de l\'exemple (équilibre).');
}
{
  const F = 'terminale/physique-chimie/gaz-parfait';
  pose(F, 'chocs', 'chocs', '### La pression vient des chocs',
    'À température constante, comprimer un gaz dans un volume deux fois plus petit double le nombre de chocs sur les parois, donc la pression.');
  pose(F, 'isotherme', 'isotherme', '### Transformations à quantité de matière constante',
    'Isotherme de 0,20 mol de gaz à 300 K : 5,0 L sous 1,0 × 10⁵ Pa, comme dans l\'exemple ; à volume divisé par deux, la pression double.');
}
{
  const F = 'terminale/physique-chimie/lois-newton-champs';
  pose(F, 'projectile', 'projectile', '### Équation de la trajectoire',
    'Ballon de l\'exemple lancé à 20 m/s sous 30° : la flèche, environ 5,1 m, est atteinte vers 1,0 s, et la portée vaut environ 35 m (frottements négligés).');
  pose(F, 'condensateur-plan', 'condensateur-plan', '### Force et accélération',
    'Électron dans un condensateur plan : le champ va de la plaque + vers la plaque −, la force est opposée au champ, et l\'électron décrit une parabole vers la plaque +.');
  pose(F, 'loi-aires', 'loi-aires', '### Les trois lois de Kepler',
    'Loi des aires : en des durées égales, le segment Soleil-planète balaie des aires égales, donc la planète va plus vite près du Soleil.');
}
{
  const F = 'terminale/physique-chimie/lunette-photons';
  pose(F, 'lunette', 'lunette', '### Définition « afocale »',
    'Lunette afocale : le foyer image de l\'objectif est confondu avec le foyer objet de l\'oculaire, et un faisceau parallèle ressort parallèle, plus incliné.');
  pose(F, 'bilan-photo', 'bilan-photo', '## 6. Le bilan d\'énergie',
    'Exemple de la fiche : un photon de 3,1 eV fournit 2,3 eV pour extraire l\'électron ; les 0,8 eV restants deviennent son énergie cinétique.');
  pose(F, 'niveaux', 'niveaux', '## 7. Absorption et émission de photons',
    'Niveaux d\'énergie de l\'atome d\'hydrogène : le passage du niveau 3 au niveau 2 émet un photon de 1,89 eV, soit la raie rouge à 656 nm.');
}
{
  const F = 'terminale/physique-chimie/methodes-physiques-analyse';
  pose(F, 'etalonnage', 'etalonnage', '### Courbe d\'étalonnage',
    'Droite d\'étalonnage de l\'exemple : A = 5,0 × 10³ × c ; l\'absorbance 0,75 de l\'inconnue donne c = 1,5 × 10⁻⁴ mol·L⁻¹.',
    { k: 5.0e3, Ax: 0.75, cmax: 2.0e-4, pas: 2e-5, Amax: 1.0 });
  pose(F, 'spectre-ir', 'spectre-ir', '### Table des groupes caractéristiques (IR)',
    'Allure d\'un spectre IR d\'acide carboxylique : bande très large de la liaison O–H entre 2 500 et 3 200 cm⁻¹ et bande forte de C=O vers 1 700 cm⁻¹.');
}
{
  const F = 'terminale/physique-chimie/phenomenes-ondulatoires';
  pose(F, 'diffraction', 'diffraction', '### Mesure sur un écran',
    'Diffraction d\'un laser par une fente de largeur a : la tache centrale, de largeur ℓ = 2λD/a sur l\'écran, est vue sous le demi-angle θ = λ/a.');
  pose(F, 'superposition', 'superposition', '### Interférences destructives',
    'Deux ondes de même fréquence s\'ajoutent si elles arrivent en phase (δ = kλ) et s\'annulent si elles arrivent en opposition de phase (δ = (k + ½)λ).');
  pose(F, 'doppler', 'doppler', '### Établir le décalage (observateur fixe, source mobile)',
    'Source en mouvement : les fronts d\'onde sont resserrés devant elle, la longueur d\'onde perçue y est plus petite et la fréquence plus grande.');
}
{
  const F = 'terminale/physique-chimie/premier-principe-thermique';
  pose(F, 'signes', 'signes-thermo', '### La convention de signe (le cœur du chapitre)',
    'Convention de signe : un transfert reçu par le système est compté positivement, un transfert cédé négativement ; ΔU = W + Q.');
  pose(F, 'refroidissement', 'refroidissement', '## 8. Loi de Newton du refroidissement',
    'Refroidissement d\'un café : rapide au début, puis de plus en plus lent ; la température tend vers celle de la pièce sans jamais descendre en dessous.');
}
{
  const F = 'terminale/physique-chimie/synthese-organique';
  pose(F, 'protection', 'diagramme', '## 4. Protection / déprotection',
    'Stratégie de protection : on protège le groupe à préserver, on fait réagir l\'autre groupe, puis on régénère le groupe protégé.',
    { W: 680, H: 170, boites: [
      { id: 'a', x: 4, y: 40, w: 150, h: 70, t: 'molécule\navec deux groupes\nréactifs', style: 'gris', taille: 13 },
      { id: 'b', x: 178, y: 40, w: 150, h: 70, t: '1. protéger\nle groupe\nà préserver', style: 'violet', taille: 13 },
      { id: 'c', x: 352, y: 40, w: 150, h: 70, t: '2. faire réagir\nl\'autre groupe', style: 'orange', taille: 13 },
      { id: 'd', x: 526, y: 40, w: 150, h: 70, t: '3. déprotéger :\nproduit voulu', style: 'vert', taille: 13, gras: true }],
      fleches: [{ de: 'a', a: 'b' }, { de: 'b', a: 'c' }, { de: 'c', a: 'd' }],
      textes: [{ x: 340, y: 150, t: 'deux étapes de plus : un coût en rendement, justifié par la sélectivité', taille: 12, couleur: ATTENUE }] });
  pose(F, 'addition-elimination', 'addition-elimination', '### Élimination',
    'Addition et élimination sont inverses : l\'hydratation de l\'éthène ouvre la double liaison C=C, la déshydratation de l\'éthanol la recrée en libérant de l\'eau.');
  pose(F, 'mecanisme', 'mecanisme-sn', '## 7. Le mécanisme réactionnel : les flèches courbes',
    'Exemple de la fiche : une flèche courbe va du doublet de HO⁻ vers le carbone δ+, une autre de la liaison C–Cl vers le chlore, qui part avec le doublet.');
}
{
  const F = 'terminale/physique-chimie/titrages';
  pose(F, 'montage', 'montage-titrage', '## 1. La réaction de titrage',
    'Montage de titrage : la solution titrante de concentration connue est dans la burette, l\'espèce titrée dans le bécher, sous agitation, avec une sonde de mesure.',
    { mesure: 'pH-mètre' });
  pose(F, 'courbes-ph', 'courbes-ph-deux', '### Ce que vaut le pH à l\'équivalence',
    'Courbes calculées pour 20,0 mL d\'acide à 0,075 mol/L titrés par la soude à 0,10 mol/L : équivalence à pH 7 pour l\'acide chlorhydrique, basique pour l\'acide éthanoïque.');
  pose(F, 'conducti', 'courbe-conducti', '### Pourquoi une rupture de pente ?',
    'Titrage conductimétrique de H₃O⁺ par la soude : la conductivité diminue puis augmente, et l\'équivalence est à l\'intersection des deux droites.');
}
{
  const F = 'terminale/physique-chimie/transformations-nucleaires';
  pose(F, 'vallee', 'vallee', '## 2. Stabilité des noyaux : le diagramme (N, Z)',
    'Diagramme (N, Z) schématique : les noyaux stables suivent la vallée de stabilité, qui s\'écarte de N = Z pour les noyaux lourds ; au-delà de Z = 82, aucun noyau n\'est stable.');
  pose(F, 'deplacements', 'deplacements', '## 4. Les lois de conservation (lois de Soddy)',
    'Déplacement dans le diagramme (N, Z) : α retire 2 protons et 2 neutrons, β⁻ change un neutron en proton, β⁺ un proton en neutron.');
  pose(F, 'decroissance', 'decroissance', '## 6. Temps de demi-vie',
    'Décroissance radioactive : après chaque demi-vie, il reste la moitié des noyaux, soit N₀/2, puis N₀/4, puis N₀/8.');
}
