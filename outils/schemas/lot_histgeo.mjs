/**
 * Lot « histgeo » : schémas des fiches d'histoire-géographie-EMC (CP → Terminale) et d'HGGSP.
 *
 * - Frises chronologiques À L'ÉCHELLE (frise2 : périodes sur plusieurs rangs, événements
 *   ponctuels ou étendus, années décimales pour placer les mois : 1914.58 = début août 1914).
 * - Organigrammes (institutions, liens féodaux, chaînes de causes…) : orga().
 * - Schémas géographiques de principe (aire urbaine, zones maritimes…), présentés comme schémas,
 *   jamais comme des cartes.
 */
import {
  enveloppe, texte, ligne, fleche, cercle, polygone, nb, esc,
  ENCRE, BLEU, ROUGE, VERT, ORANGE, VIOLET, ATTENUE, AXE, GRILLE,
} from './base.mjs';

// ---------------------------------------------------------------------------
// Couleurs
// ---------------------------------------------------------------------------
const COUL = { bleu: BLEU, rouge: ROUGE, vert: VERT, orange: ORANGE, violet: VIOLET, gris: ATTENUE, encre: ENCRE };
const FOND = { bleu: '#eef3fb', rouge: '#fbeeee', vert: '#e9f6ee', orange: '#fdf0e3', violet: '#f3ecfa', gris: '#f1f3f5', encre: '#f1f3f5' };
const c = (n) => COUL[n] || n || BLEU;
const f = (n) => FOND[n] || '#eef3fb';

/** Largeur approximative d'un texte (police sans empattement). */
const larg = (s, t) => Math.max(...String(s).split('\n').map((l) => l.length)) * t * 0.56;

/** Texte sur fond blanc (étiquette de flèche). */
function etiquette(x, y, s, { taille = 12, couleur = ENCRE, gras = false, ancre = 'middle', fond = '#ffffff' } = {}) {
  const lignes = String(s).split('\n');
  const w = larg(s, taille) + 8;
  const h = lignes.length * taille * 1.25 + 4;
  const x0 = ancre === 'middle' ? x - w / 2 : ancre === 'end' ? x - w + 4 : x - 4;
  const y0 = y - taille * 0.95 - ((lignes.length - 1) * taille * 1.25) / 2;
  return (
    `<rect x="${nb(x0)}" y="${nb(y0)}" width="${nb(w)}" height="${nb(h)}" rx="4" fill="${fond}" fill-opacity="0.92"/>` +
    texte(x, y - ((lignes.length - 1) * taille * 1.25) / 2, s, { taille, couleur, gras, ancre })
  );
}

/** Boîte arrondie (texte centré, plusieurs lignes). */
function boite2(x, y, w, h, s, { coul = 'bleu', taille = 13, gras = false, couleurTexte = ENCRE, plein = false, rx = 8, pointilles = false } = {}) {
  const lignes = String(s).split('\n');
  const y0 = y + h / 2 - ((lignes.length - 1) * taille * 1.25) / 2 + taille * 0.35;
  return (
    `<rect x="${nb(x)}" y="${nb(y)}" width="${nb(w)}" height="${nb(h)}" rx="${rx}" fill="${plein ? c(coul) : f(coul)}" stroke="${c(coul)}" stroke-width="1.8"${pointilles ? ' stroke-dasharray="6 4"' : ''}/>` +
    texte(x + w / 2, y0, s, { taille, couleur: plein ? '#ffffff' : couleurTexte, gras })
  );
}

// ---------------------------------------------------------------------------
// Organigramme générique
// ---------------------------------------------------------------------------
/**
 * boites : [{ id, x, y, w, h, t, coul, taille, gras, plein, pointilles }]
 * liens  : [{ de, a, t, coul, double, pointilles, sa, sb ('h','b','g','d'), oa, ob (décalage le long du côté),
 *             lx, ly (décalage de l'étiquette), taille }]
 * notes  : [{ x, y, t, taille, couleur, ancre, italique, gras }]
 */
function orga(W, H, { boites = [], liens = [], notes = [], avant = '', apres = '' } = {}) {
  const B = Object.fromEntries(boites.map((b) => [b.id, b]));
  const cote = (b, autre) => {
    const dx = autre.x + autre.w / 2 - (b.x + b.w / 2);
    const dy = autre.y + autre.h / 2 - (b.y + b.h / 2);
    if (Math.abs(dy) * b.w > Math.abs(dx) * b.h) return dy > 0 ? 'b' : 'h';
    return dx > 0 ? 'd' : 'g';
  };
  const pt = (b, s, o = 0) => {
    const cx = b.x + b.w / 2, cy = b.y + b.h / 2;
    if (s === 'h') return [cx + o, b.y];
    if (s === 'b') return [cx + o, b.y + b.h];
    if (s === 'g') return [b.x, cy + o];
    return [b.x + b.w, cy + o];
  };
  let g = avant;
  let etiq = '';
  for (const l of liens) {
    const A = B[l.de], Z = B[l.a];
    const [x1, y1] = l.p1 || pt(A, l.sa || cote(A, Z), l.oa || 0);
    const [x2, y2] = l.p2 || pt(Z, l.sb || cote(Z, A), l.ob || 0);
    const col = c(l.coul || 'encre');
    g += fleche(x1, y1, x2, y2, { couleur: col, epaisseur: 2, pointe: 10, pointilles: l.pointilles });
    if (l.double) g += fleche(x2, y2, x1, y1, { couleur: col, epaisseur: 2, pointe: 10, pointilles: l.pointilles });
    if (l.t) etiq += etiquette((x1 + x2) / 2 + (l.lx || 0), (y1 + y2) / 2 + (l.ly || 0) + 4, l.t, { taille: l.taille || 12, couleur: col, ancre: l.ancre || 'middle' });
  }
  for (const b of boites) g += boite2(b.x, b.y, b.w, b.h, b.t, b);
  g += etiq;
  for (const n of notes) g += texte(n.x, n.y, n.t, { taille: n.taille || 12, couleur: n.couleur || ATTENUE, ancre: n.ancre || 'middle', italique: n.italique, gras: n.gras });
  return enveloppe(W, H, g + apres);
}

// ---------------------------------------------------------------------------
// Frise chronologique à l'échelle
// ---------------------------------------------------------------------------
const milliers = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const LIB = {
  avjc: (a) => (a < 0 ? `${milliers(-a)} av. J.-C.` : a === 1 ? 'an 1' : String(a)),
  moins: (a) => (a < 0 ? `−${milliers(-a)}` : a === 1 ? 'an 1' : milliers(a)),
  annee: (a) => String(a),
  age: (a) => `${a} ans`,
};
let gradN = 0;

/**
 * debut, fin : bornes de l'axe (années décimales).
 * ticks : liste des graduations (sinon de pas en pas). lib : 'avjc' | 'moins' | 'annee' | 'age'.
 * periodes : [{ debut, fin, t, coul, rang, ouvertG, ouvertD }]
 * evenements : [{ annee, fin?, t, niv, ancre, coul }]
 */
function frise2({ debut, fin, pas = 10, ticks, lib = 'annee', periodes = [], evenements = [], W = 680, tailleEv = 12.5, hNiv = 34, m = 34, titre = '' }) {
  const X = (a) => m + ((a - debut) / (fin - debut)) * (W - 2 * m - 14);
  const fmt = LIB[lib] || LIB.annee;
  const nRangs = periodes.length ? Math.max(...periodes.map((p) => p.rang || 0)) + 1 : 0;
  const haut = titre ? 30 : 10;
  const rowH = 44;
  const yAxe = haut + nRangs * rowH + 18;
  let g = '';
  if (titre) g += texte(W / 2, 20, titre, { taille: 13, couleur: ATTENUE, italique: true });
  // Périodes
  for (const p of periodes) {
    const r = p.rang || 0;
    const y = haut + (nRangs - 1 - r) * rowH + 20;
    const x1 = X(Math.max(p.debut, debut)), x2 = X(Math.min(p.fin, fin));
    const col = c(p.coul || 'bleu');
    let fill = f(p.coul || 'bleu');
    if (p.ouvertG || p.ouvertD) {
      const id = `gr${++gradN}`;
      g += `<defs><linearGradient id="${id}" x1="0" x2="1" y1="0" y2="0">` +
        `<stop offset="0" stop-color="${col}" stop-opacity="${p.ouvertG ? 0 : 0.2}"/>` +
        `<stop offset="${p.ouvertG ? 0.25 : 0}" stop-color="${col}" stop-opacity="0.2"/>` +
        `<stop offset="${p.ouvertD ? 0.75 : 1}" stop-color="${col}" stop-opacity="0.2"/>` +
        `<stop offset="1" stop-color="${col}" stop-opacity="${p.ouvertD ? 0 : 0.2}"/></linearGradient></defs>`;
      fill = `url(#${id})`;
      g += `<rect x="${nb(x1)}" y="${y}" width="${nb(x2 - x1)}" height="20" fill="${fill}"/>`;
      g += ligne(x1, y, x2, y, { couleur: col, epaisseur: 1.2 }) + ligne(x1, y + 20, x2, y + 20, { couleur: col, epaisseur: 1.2 });
      if (!p.ouvertG) g += ligne(x1, y, x1, y + 20, { couleur: col, epaisseur: 1.2 });
      if (!p.ouvertD) g += ligne(x2, y, x2, y + 20, { couleur: col, epaisseur: 1.2 });
    } else {
      g += `<rect x="${nb(x1)}" y="${y}" width="${nb(x2 - x1)}" height="20" fill="${fill}" stroke="${col}" stroke-width="1.2"/>`;
    }
    const tw = larg(p.t, 12.5);
    let tx = (x1 + x2) / 2;
    if (p.tx !== undefined) tx = X(p.tx);
    if (tw + 10 < x2 - x1 && !p.dessus) {
      g += texte(tx, y + 14.5, p.t, { taille: 12.5, couleur: col, gras: true });
    } else {
      tx = Math.min(Math.max(tx, 6 + tw / 2), W - 6 - tw / 2);
      g += texte(tx, y - 6, p.t, { taille: 12.5, couleur: col, gras: true });
    }
  }
  // Axe
  g += fleche(m - 12, yAxe, W - m + 10, yAxe, { couleur: ENCRE, epaisseur: 2.2, pointe: 11 });
  const tk = ticks || (() => { const t = []; for (let a = Math.ceil(debut / pas) * pas; a <= fin + 1e-9; a += pas) t.push(a); return t; })();
  for (const a of tk) {
    g += ligne(X(a), yAxe - 5, X(a), yAxe + 5, { couleur: ENCRE, epaisseur: 1.5 });
    const lt = fmt(a), wl = larg(lt, 12);
    const xa = Math.min(Math.max(X(a), 4 + wl / 2), W - 4 - wl / 2);
    g += texte(xa, yAxe + 20, lt, { taille: 12, couleur: ATTENUE });
  }
  // Événements
  let bas = yAxe + 30;
  const ev = evenements.map((e, i) => ({ ...e, niv: e.niv ?? i % 3 }));
  for (const e of ev) {
    const col = c(e.coul || 'rouge');
    const xa = X(e.annee);
    const xb = e.fin !== undefined ? X(e.fin) : xa;
    const xm = (xa + xb) / 2;
    const yT = yAxe + 52 + e.niv * hNiv;
    if (e.fin !== undefined) g += `<rect x="${nb(xa)}" y="${yAxe - 4}" width="${nb(Math.max(xb - xa, 3))}" height="8" rx="3" fill="${col}"/>`;
    else g += `<circle cx="${nb(xa)}" cy="${yAxe}" r="5" fill="${col}"/>`;
    g += ligne(xm, yAxe + 27, xm, yT - 14, { couleur: col, epaisseur: 1.4 });
    const w = larg(e.t, tailleEv);
    let ancre = e.ancre;
    if (!ancre) ancre = xm - w / 2 < 4 ? 'start' : xm + w / 2 > W - 4 ? 'end' : 'middle';
    const tx = ancre === 'start' ? xm - 6 : ancre === 'end' ? xm + 6 : xm;
    const nl0 = String(e.t).split('\n').length;
    g += etiquette(tx, yT + ((nl0 - 1) * tailleEv * 1.25) / 2, e.t, { taille: tailleEv, couleur: ENCRE, ancre });
    const nl = String(e.t).split('\n').length;
    bas = Math.max(bas, yT + (nl - 1) * tailleEv * 1.25 + 8);
  }
  return enveloppe(W, Math.ceil(bas + 6), g);
}

// ---------------------------------------------------------------------------
// Dessins spécifiques
// ---------------------------------------------------------------------------
const arc = (cx, cy, r, a1, a2) => {
  // angles en degrés, 0 = haut, sens des aiguilles d'une montre
  const p = (a) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)];
  const [x1, y1] = p(a1), [x2, y2] = p(a2);
  return { x1, y1, x2, y2, large: a2 - a1 > 180 ? 1 : 0 };
};
const secteur = (cx, cy, r1, r2, a1, a2, fill, stroke = '#ffffff') => {
  const A = arc(cx, cy, r2, a1, a2), B = arc(cx, cy, r1, a1, a2);
  return `<path d="M ${nb(A.x1)} ${nb(A.y1)} A ${r2} ${r2} 0 ${A.large} 1 ${nb(A.x2)} ${nb(A.y2)} L ${nb(B.x2)} ${nb(B.y2)} A ${r1} ${r1} 0 ${B.large} 0 ${nb(B.x1)} ${nb(B.y1)} Z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
};
const polar = (cx, cy, r, a) => [cx + r * Math.sin((a * Math.PI) / 180), cy - r * Math.cos((a * Math.PI) / 180)];

/** Les 12 mois en cercle (proportionnels au nombre de jours) et les 4 saisons. */
function moisSaisons() {
  const W = 560, H = 540, cx = 280, cy = 272;
  const jours = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const noms = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const A = (j) => (j / 365) * 360;
  let g = '';
  let cum = 0;
  jours.forEach((d, i) => {
    g += secteur(cx, cy, 72, 172, A(cum), A(cum + d), i % 2 ? '#e6edf5' : '#f4f7fb', '#ffffff');
    const [x, y] = polar(cx, cy, 128, A(cum + d / 2));
    g += texte(x, y + 5, noms[i], { taille: 13.5, gras: i === 0 || i === 11 });
    const [nx, ny] = polar(cx, cy, 90, A(cum + d / 2));
    g += texte(nx, ny + 4, String(i + 1), { taille: 12, couleur: ATTENUE });
    cum += d;
  });
  // Saisons (hémisphère Nord) : début vers le 20 mars, 21 juin, 22 septembre, 21 décembre.
  const sais = [
    { t: 'printemps', d: 78, f: 171, coul: VERT },
    { t: 'été', d: 171, f: 264, coul: ORANGE },
    { t: 'automne', d: 264, f: 354, coul: ROUGE },
    { t: 'hiver', d: 354, f: 365 + 78, coul: BLEU },
  ];
  for (const s of sais) {
    g += secteur(cx, cy, 178, 200, A(s.d), A(s.f), s.coul, '#ffffff');
    const [x, y] = polar(cx, cy, 210, A((s.d + s.f) / 2));
    const an = x > cx + 30 ? 'start' : x < cx - 30 ? 'end' : 'middle';
    g += texte(x, y + (y > cy ? 16 : 0), s.t, { taille: 16, couleur: s.coul, gras: true, ancre: an });
  }
  g += texte(cx, cy - 6, '1 année', { taille: 15, gras: true }) + texte(cx, cy + 14, '= 12 mois', { taille: 13 });
  // Sens de lecture
  const p1 = polar(cx, cy, 58, 20), p2 = polar(cx, cy, 58, 70);
  g += `<path d="M ${nb(p1[0])} ${nb(p1[1])} A 58 58 0 0 1 ${nb(p2[0])} ${nb(p2[1])}" fill="none" stroke="${ATTENUE}" stroke-width="2"/>`;
  g += `<polygon points="${nb(p2[0] + 2)},${nb(p2[1] + 9)} ${nb(p2[0] - 8)},${nb(p2[1] - 2)} ${nb(p2[0] + 6)},${nb(p2[1] - 5)}" fill="${ATTENUE}"/>`;
  return enveloppe(W, H, g);
}

/** Les 7 jours de la semaine en boucle. */
function semaine() {
  const W = 480, H = 400, cx = 240, cy = 200, R = 140;
  const j = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  let g = '';
  const pts = j.map((_, i) => polar(cx, cy, R, (i * 360) / 7));
  pts.forEach(([x, y], i) => {
    const [x2, y2] = pts[(i + 1) % 7];
    const a = Math.atan2(y2 - y, x2 - x);
    const r = 46;
    g += fleche(x + r * Math.cos(a), y + r * Math.sin(a), x2 - r * Math.cos(a), y2 - r * Math.sin(a), { couleur: i === 6 ? ROUGE : AXE, epaisseur: 2, pointe: 9 });
  });
  pts.forEach(([x, y], i) => { g += boite2(x - 44, y - 16, 88, 32, j[i], { coul: i >= 5 ? 'orange' : 'bleu', taille: 14, gras: i === 0 }); });
  g += texte(cx, cy - 4, '1 semaine', { taille: 16, gras: true }) + texte(cx, cy + 18, '= 7 jours', { taille: 14 });
  g += etiquette((pts[6][0] + pts[0][0]) / 2 - 8, (pts[6][1] + pts[0][1]) / 2 - 8, 'et on recommence', { taille: 12, couleur: ROUGE, ancre: 'end' });
  return enveloppe(W, H, g);
}

/** Les moments de la journée. */
function journee() {
  const W = 660, H = 190;
  const m = ['le matin', 'le midi', "l'après-midi", 'le soir', 'la nuit'];
  const fonds = ['#fff4d6', '#ffe9a8', '#ffdca0', '#f3c6a5', '#2d3d5c'];
  let g = '';
  const w = 112, gap = 18, x0 = 20, y = 84;
  m.forEach((t, i) => {
    const x = x0 + i * (w + gap);
    g += `<rect x="${x}" y="${y}" width="${w}" height="46" rx="8" fill="${fonds[i]}" stroke="${i === 4 ? '#2d3d5c' : ORANGE}" stroke-width="1.6"/>`;
    g += texte(x + w / 2, y + 28, t, { taille: 15, couleur: i === 4 ? '#ffffff' : ENCRE, gras: true });
    if (i < 4) g += fleche(x + w + 2, y + 23, x + w + gap - 2, y + 23, { couleur: ATTENUE, epaisseur: 1.8, pointe: 7 });
    // Soleil ou lune, plus haut à midi
    const sx = x + w / 2, sy = [52, 34, 46, 62, 48][i];
    if (i < 4) {
      g += cercle(sx, sy, 13, { couleur: ORANGE, fond: '#ffc83d', epaisseur: 1.5 });
      for (let k = 0; k < 8; k++) { const a = (k * Math.PI) / 4; g += ligne(sx + 17 * Math.cos(a), sy + 17 * Math.sin(a), sx + 23 * Math.cos(a), sy + 23 * Math.sin(a), { couleur: ORANGE, epaisseur: 1.6 }); }
    } else {
      g += `<circle cx="${sx}" cy="${sy}" r="15" fill="#f2d16b" stroke="#b58b00" stroke-width="1.2"/><circle cx="${sx + 9}" cy="${sy - 5}" r="13" fill="#ffffff"/>`;
    }
  });
  g += texte(x0 + 2 * (w + gap) - gap / 2 + 2 - 65, 168, 'le jour (il fait clair)', { taille: 13, couleur: ORANGE, gras: true });
  g += ligne(x0, 150, x0 + 4 * w + 3 * gap, 150, { couleur: ORANGE, epaisseur: 2 });
  g += texte(x0 + 4 * (w + gap) + w / 2, 168, 'il fait noir', { taille: 13, couleur: '#2d3d5c', gras: true });
  g += ligne(x0 + 4 * (w + gap), 150, x0 + 4 * (w + gap) + w, 150, { couleur: '#2d3d5c', epaisseur: 2 });
  return enveloppe(W, H, g);
}

/** Frise passé / présent / futur avec hier, aujourd'hui, demain. */
function hierDemain() {
  const W = 660, H = 200;
  let g = '';
  const y = 100;
  g += `<rect x="30" y="${y - 16}" width="270" height="32" fill="#eef3fb"/>`;
  g += `<rect x="360" y="${y - 16}" width="270" height="32" fill="#e9f6ee"/>`;
  g += fleche(24, y, 640, y, { couleur: ENCRE, epaisseur: 2.6, pointe: 13 });
  g += texte(150, 60, 'le PASSÉ', { taille: 17, couleur: BLEU, gras: true }) + texte(150, 78, 'ce qui est déjà arrivé', { taille: 12.5, couleur: ATTENUE });
  g += texte(330, 52, 'le PRÉSENT', { taille: 17, couleur: ROUGE, gras: true }) + texte(330, 70, 'maintenant', { taille: 12.5, couleur: ATTENUE });
  g += texte(500, 60, 'le FUTUR', { taille: 17, couleur: VERT, gras: true }) + texte(500, 78, "ce qui n'est pas encore arrivé", { taille: 12.5, couleur: ATTENUE });
  const pts = [[230, 'hier', BLEU], [330, "aujourd'hui", ROUGE], [430, 'demain', VERT]];
  for (const [x, t, col] of pts) {
    g += `<circle cx="${x}" cy="${y}" r="7" fill="${col}"/>`;
    g += texte(x, y + 36, t, { taille: 15, couleur: col, gras: true });
  }
  g += texte(30, 172, '← gauche', { taille: 13, couleur: ATTENUE, ancre: 'start' }) + texte(630, 172, 'droite →', { taille: 13, couleur: ATTENUE, ancre: 'end' });
  g += texte(330, 172, 'le temps avance toujours dans le même sens', { taille: 13, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Plan d'une classe vu de dessus ; avec légende (CE1) ou étiquettes directes (CP). */
function planClasse({ legende = false } = {}) {
  const W = legende ? 640 : 520, H = 420;
  const x0 = 40, y0 = 50, w = 380, h = 330;
  let g = texte(x0 + w / 2, 30, 'Plan de la classe (vu de dessus)', { taille: 14, couleur: ATTENUE, italique: true });
  // Murs
  g += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="#fbfaf6" stroke="${ENCRE}" stroke-width="4"/>`;
  // Tableau (mur du haut)
  g += `<rect x="${x0 + 110}" y="${y0 - 3}" width="160" height="10" fill="#1d5c3a"/>`;
  // Fenêtres (mur de gauche)
  for (const yy of [y0 + 60, y0 + 190]) g += `<rect x="${x0 - 4}" y="${yy}" width="8" height="80" fill="#9fd3f5" stroke="${BLEU}" stroke-width="1.5"/>`;
  // Porte (mur de droite) : ouverture + battant
  const py = y0 + h - 90;
  g += `<rect x="${x0 + w - 3}" y="${py}" width="7" height="60" fill="#ffffff"/>`;
  g += `<path d="M ${x0 + w} ${py} L ${x0 + w - 56} ${py}" stroke="#8a5a2b" stroke-width="3"/>`;
  g += `<path d="M ${x0 + w - 56} ${py} A 56 56 0 0 0 ${x0 + w} ${py + 56}" fill="none" stroke="#8a5a2b" stroke-width="1.2" stroke-dasharray="4 4"/>`;
  // Bureau
  g += `<rect x="${x0 + 270}" y="${y0 + 32}" width="70" height="36" fill="#d9a66b" stroke="#8a5a2b" stroke-width="1.5"/>`;
  // Tables des élèves : 3 rangées de 3
  for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) {
    const tx = x0 + 50 + k * 105, ty = y0 + 120 + r * 70;
    g += `<rect x="${tx}" y="${ty}" width="70" height="30" fill="#f0c98f" stroke="#8a5a2b" stroke-width="1.4"/>`;
    g += `<circle cx="${tx + 20}" cy="${ty + 42}" r="7" fill="#c7d3df"/><circle cx="${tx + 50}" cy="${ty + 42}" r="7" fill="#c7d3df"/>`;
  }
  if (!legende) {
    g += etiquette(x0 + 190, y0 + 26, 'le tableau', { taille: 14, couleur: '#1d5c3a', gras: true });
    g += etiquette(x0 + 305, y0 + 88, 'le bureau', { taille: 14, couleur: '#8a5a2b', gras: true });
    g += etiquette(x0 + 85, y0 + 104, 'les tables', { taille: 14, couleur: '#8a5a2b', gras: true });
    g += texte(x0 + 14, y0 + 30, 'les fenêtres', { taille: 14, couleur: BLEU, gras: true, ancre: 'start' });
    g += fleche(x0 + 40, y0 + 36, x0 + 10, y0 + 62, { couleur: BLEU, epaisseur: 1.5, pointe: 7 });
    g += texte(x0 + w + 14, py + 34, 'la porte', { taille: 14, couleur: '#8a5a2b', gras: true, ancre: 'start' });
  } else {
    const lx = 450;
    g += `<rect x="${lx}" y="${y0}" width="176" height="250" rx="8" fill="#ffffff" stroke="${AXE}" stroke-width="1.5"/>`;
    g += texte(lx + 88, y0 + 24, 'LÉGENDE', { taille: 14, gras: true });
    const it = [
      [`<rect x="${lx + 14}" y="${y0 + 46}" width="34" height="9" fill="#1d5c3a"/>`, 'tableau'],
      [`<rect x="${lx + 14}" y="${y0 + 78}" width="34" height="18" fill="#d9a66b" stroke="#8a5a2b"/>`, 'bureau'],
      [`<rect x="${lx + 14}" y="${y0 + 114}" width="34" height="16" fill="#f0c98f" stroke="#8a5a2b"/>`, 'table'],
      [`<circle cx="${lx + 31}" cy="${y0 + 158}" r="7" fill="#c7d3df"/>`, 'chaise'],
      [`<rect x="${lx + 14}" y="${y0 + 186}" width="34" height="8" fill="#9fd3f5" stroke="${BLEU}"/>`, 'fenêtre'],
      [`<path d="M ${lx + 14} ${y0 + 222} L ${lx + 48} ${y0 + 222}" stroke="#8a5a2b" stroke-width="3"/>`, 'porte'],
    ];
    it.forEach(([s, t], i) => { g += s + texte(lx + 60, y0 + 56 + i * 34, t, { taille: 14, ancre: 'start' }); });
  }
  return enveloppe(W, H, g);
}

/** Rose des vents simple. */
function roseVents() {
  const W = 440, H = 380, cx = 220, cy = 190;
  let g = '';
  const pointe = (a, L, col) => {
    const [x, y] = polar(cx, cy, L, a), [x1, y1] = polar(cx, cy, 22, a - 45), [x2, y2] = polar(cx, cy, 22, a + 45);
    return polygone([[cx, cy], [x1, y1], [x, y]], { couleur: col, fond: col, epaisseur: 1 }) + polygone([[cx, cy], [x2, y2], [x, y]], { couleur: col, fond: '#ffffff', epaisseur: 1.5 });
  };
  for (const a of [45, 135, 225, 315]) g += pointe(a, 60, AXE);
  g += pointe(0, 120, ROUGE) + pointe(90, 120, ENCRE) + pointe(180, 120, ENCRE) + pointe(270, 120, ENCRE);
  g += texte(cx, cy - 150, 'N', { taille: 24, couleur: ROUGE, gras: true }) + texte(cx + 50, cy - 152, 'Nord (en haut)', { taille: 13, couleur: ROUGE, ancre: 'start' });
  g += texte(cx, cy + 166, 'S', { taille: 24, gras: true }) + texte(cx + 50, cy + 164, 'Sud (en bas)', { taille: 13, couleur: ATTENUE, ancre: 'start' });
  g += texte(cx + 146, cy + 9, 'E', { taille: 24, gras: true }) + texte(cx + 146, cy + 32, 'Est', { taille: 13, couleur: ATTENUE }) + texte(cx + 146, cy + 48, '(à droite)', { taille: 13, couleur: ATTENUE });
  g += texte(cx - 146, cy + 9, 'O', { taille: 24, gras: true }) + texte(cx - 146, cy + 32, 'Ouest', { taille: 13, couleur: ATTENUE }) + texte(cx - 146, cy + 48, '(à gauche)', { taille: 13, couleur: ATTENUE });
  return enveloppe(W, H, g);
}

/** Globe : équateur, pôles, hémisphères (sans continents). */
function globe() {
  const W = 520, H = 400, cx = 220, cy = 200, R = 150;
  let g = cercle(cx, cy, R, { couleur: BLEU, fond: '#dcecfb', epaisseur: 2.5 });
  g += `<path d="M ${cx - R} ${cy} A ${R} 26 0 0 1 ${cx + R} ${cy}" fill="none" stroke="${ROUGE}" stroke-width="2" stroke-dasharray="6 5"/>`;
  g += `<path d="M ${cx - R} ${cy} A ${R} 26 0 0 0 ${cx + R} ${cy}" fill="none" stroke="${ROUGE}" stroke-width="3"/>`;
  g += `<circle cx="${cx}" cy="${cy - R}" r="5" fill="${ENCRE}"/><circle cx="${cx}" cy="${cy + R}" r="5" fill="${ENCRE}"/>`;
  g += texte(cx, cy - R - 14, 'pôle Nord', { taille: 15, gras: true }) + texte(cx, cy + R + 26, 'pôle Sud', { taille: 15, gras: true });
  g += texte(cx, cy - 66, 'hémisphère Nord', { taille: 15, couleur: BLEU, gras: true });
  g += texte(cx, cy + 82, 'hémisphère Sud', { taille: 15, couleur: BLEU, gras: true });
  g += fleche(cx + R + 52, cy - 30, cx + R - 6, cy + 14, { couleur: ROUGE, epaisseur: 1.8, pointe: 8 });
  g += texte(cx + R + 30, cy - 38, "l'équateur", { taille: 15, couleur: ROUGE, gras: true, ancre: 'start' });
  g += texte(cx + R + 30, cy - 56, 'ligne imaginaire', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  return enveloppe(W, H, g);
}

/** Drapeau tricolore (proportions 2:3). */
function drapeau() {
  const W = 440, H = 300, x = 80, y = 30, w = 300, h = 200;
  let g = `<rect x="${x - 10}" y="${y - 6}" width="7" height="${h + 60}" rx="2" fill="#8a99a8"/>`;
  g += `<rect x="${x}" y="${y}" width="${w / 3}" height="${h}" fill="#000091"/>`;
  g += `<rect x="${x + w / 3}" y="${y}" width="${w / 3}" height="${h}" fill="#ffffff"/>`;
  g += `<rect x="${x + (2 * w) / 3}" y="${y}" width="${w / 3}" height="${h}" fill="#e1000f"/>`;
  g += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${ENCRE}" stroke-width="1.5"/>`;
  ['bleu', 'blanc', 'rouge'].forEach((t, i) => { g += texte(x + w / 6 + (i * w) / 3, y + h + 28, t, { taille: 17, gras: true, couleur: i === 0 ? '#000091' : i === 2 ? '#c00010' : ENCRE }); });
  g += texte(x + w / 2, y + h + 56, 'les bandes sont verticales, côte à côte', { taille: 13, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Quatre paysages (vignettes très simples). */
function paysages() {
  const W = 680, H = 230;
  let g = '';
  const pw = 155, y0 = 20, ph = 160;
  const cadre = (i) => `<rect x="${10 + i * (pw + 12)}" y="${y0}" width="${pw}" height="${ph}" rx="8" fill="#eaf4fd" stroke="${AXE}" stroke-width="1.5"/>`;
  const X0 = (i) => 10 + i * (pw + 12);
  // Montagne
  let x = X0(0);
  g += cadre(0) + polygone([[x + 4, y0 + ph - 4], [x + 60, y0 + 34], [x + 104, y0 + ph - 4]], { couleur: '#6b5b4b', fond: '#9c8b78', epaisseur: 1.2 });
  g += polygone([[x + 60, y0 + ph - 4], [x + 112, y0 + 58], [x + pw - 4, y0 + ph - 4]], { couleur: '#6b5b4b', fond: '#8a7a68', epaisseur: 1.2 });
  g += polygone([[x + 60, y0 + 34], [x + 48, y0 + 58], [x + 72, y0 + 58]], { couleur: '#ffffff', fond: '#ffffff', epaisseur: 1 });
  g += polygone([[x + 112, y0 + 58], [x + 102, y0 + 76], [x + 122, y0 + 76]], { couleur: '#ffffff', fond: '#ffffff', epaisseur: 1 });
  // Bord de mer
  x = X0(1);
  g += cadre(1) + `<rect x="${x + 2}" y="${y0 + 80}" width="${pw - 4}" height="${ph - 82}" fill="#5aa9e6"/>`;
  g += polygone([[x + 2, y0 + ph - 2], [x + 2, y0 + 118], [x + pw - 2, y0 + 140], [x + pw - 2, y0 + ph - 2]], { couleur: '#d8b46a', fond: '#f3dc9b', epaisseur: 1 });
  for (let k = 0; k < 3; k++) g += `<path d="M ${x + 20 + k * 40} ${y0 + 98} q 8 -6 16 0 t 16 0" fill="none" stroke="#ffffff" stroke-width="2"/>`;
  g += cercle(x + 120, y0 + 40, 14, { couleur: ORANGE, fond: '#ffc83d', epaisseur: 1.2 });
  // Ville
  x = X0(2);
  g += cadre(2);
  const imm = [[8, 70, 30], [42, 40, 34], [80, 86, 26], [110, 54, 38]];
  for (const [dx, hh, ww] of imm) {
    g += `<rect x="${x + dx}" y="${y0 + ph - 4 - (ph - hh)}" width="${ww}" height="${ph - hh - 4}" fill="#9aa7b4" stroke="#5b6b7a" stroke-width="1"/>`;
    for (let yy = y0 + hh + 8; yy < y0 + ph - 14; yy += 16) for (let xx = x + dx + 5; xx < x + dx + ww - 6; xx += 10) g += `<rect x="${xx}" y="${yy}" width="5" height="7" fill="#fff6c9"/>`;
  }
  // Campagne
  x = X0(3);
  g += cadre(3) + `<rect x="${x + 2}" y="${y0 + 90}" width="${pw - 4}" height="${ph - 92}" fill="#a8d08d"/>`;
  for (let k = 0; k < 5; k++) g += ligne(x + 6, y0 + 104 + k * 12, x + pw - 6, y0 + 100 + k * 12, { couleur: '#7aa95c', epaisseur: 2 });
  g += `<rect x="${x + 22}" y="${y0 + 62}" width="44" height="30" fill="#e9d3b0" stroke="#8a5a2b"/>` + polygone([[x + 18, y0 + 64], [x + 44, y0 + 44], [x + 70, y0 + 64]], { couleur: '#8a5a2b', fond: '#c0392b', epaisseur: 1 });
  g += `<rect x="${x + 116}" y="${y0 + 62}" width="6" height="28" fill="#7a5230"/>` + cercle(x + 119, y0 + 54, 18, { couleur: '#2f7a3a', fond: '#4caf50', epaisseur: 1 });
  ['la montagne', 'le bord de mer', 'la ville', 'la campagne'].forEach((t, i) => { g += texte(X0(i) + pw / 2, y0 + ph + 26, t, { taille: 15, gras: true }); });
  return enveloppe(W, H, g);
}

/** Château fort (vue de face, schéma simplifié) avec ses parties. */
function chateau() {
  const W = 660, H = 400;
  const sol = 300;
  let g = '';
  const pierre = '#d9cfbf', trait = '#6b5b4b';
  const creneaux = (x1, x2, y) => { let s = ''; for (let x = x1; x < x2 - 8; x += 20) s += `<rect x="${x}" y="${y - 12}" width="11" height="12" fill="${pierre}" stroke="${trait}" stroke-width="1.2"/>`; return s; };
  // Donjon (derrière)
  g += `<rect x="285" y="70" width="90" height="${sol - 70}" fill="#cfc3b0" stroke="${trait}" stroke-width="1.6"/>` + creneaux(287, 377, 70);
  g += `<rect x="326" y="110" width="8" height="26" fill="${trait}"/>`;
  // Rempart (courtine)
  g += `<rect x="150" y="180" width="360" height="${sol - 180}" fill="${pierre}" stroke="${trait}" stroke-width="1.6"/>` + creneaux(152, 510, 180);
  // Tours d'angle
  for (const tx of [100, 500]) {
    g += `<rect x="${tx}" y="150" width="60" height="${sol - 150}" fill="${pierre}" stroke="${trait}" stroke-width="1.6"/>` + creneaux(tx + 2, tx + 62, 150);
    g += `<rect x="${tx + 27}" y="190" width="6" height="26" fill="${trait}"/>`;
  }
  // Porte et pont-levis (levé)
  g += `<path d="M 300 ${sol} L 300 236 A 30 30 0 0 1 360 236 L 360 ${sol} Z" fill="#3b2f25"/>`;
  g += `<rect x="296" y="222" width="68" height="${sol - 222}" fill="#a0703f" stroke="#5a3a1a" stroke-width="1.5"/>`;
  for (let k = 0; k < 4; k++) g += ligne(296, 236 + k * 18, 364, 236 + k * 18, { couleur: '#5a3a1a', epaisseur: 1 });
  g += ligne(300, 222, 286, 196, { couleur: ENCRE, epaisseur: 1.6 }) + ligne(360, 222, 374, 196, { couleur: ENCRE, epaisseur: 1.6 });
  // Douves
  g += `<rect x="40" y="${sol}" width="580" height="26" fill="#5aa9e6"/>`;
  g += `<rect x="40" y="${sol + 26}" width="580" height="10" fill="#b9a57f"/>`;
  // Étiquettes
  const lab = (x, y, tx, ty, t, ancre = 'start') => fleche(tx, ty + (y > ty ? 9 : -14), x, y, { couleur: ROUGE, epaisseur: 1.4, pointe: 7 }) + texte(tx + (ancre === 'start' ? 4 : -4), ty + 5, t, { taille: 14, gras: true, ancre });
  g += lab(375, 100, 430, 64, 'le donjon');
  g += lab(470, 172, 548, 116, 'les créneaux');
  g += fleche(222, 136, 240, 236, { couleur: ROUGE, epaisseur: 1.4, pointe: 7 }) + texte(222, 128, 'le rempart', { taille: 14, gras: true });
  g += lab(130, 205, 60, 120, 'une meurtrière', 'start');
  g += lab(364, 262, 440, 372, 'le pont-levis (levé)');
  g += lab(90, 312, 50, 372, 'les douves', 'start');
  g += texte(330, 30, 'Schéma simplifié d\'un château fort (vu de face)', { taille: 13, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Société en trois ordres (pyramide). */
function troisOrdres({ ordres = [['ceux qui prient', 'le clergé'], ['ceux qui combattent', 'la noblesse'], ['ceux qui travaillent', 'les paysans (la grande majorité)']], note = '' } = {}) {
  const W = 620, H = note ? 330 : 300;
  const cx = 310, y0 = 30, hT = 80;
  const cols = ['violet', 'rouge', 'vert'];
  let g = '';
  const lg = (y) => 60 + ((y - y0) / (3 * hT)) * 440; // largeur à la hauteur y
  for (let i = 0; i < 3; i++) {
    const ya = y0 + i * hT, yb = ya + hT;
    const a = lg(ya) / 2, b = lg(yb) / 2;
    g += polygone([[cx - a, ya], [cx + a, ya], [cx + b, yb], [cx - b, yb]], { couleur: c(cols[i]), fond: f(cols[i]), epaisseur: 2 });
    g += texte(cx, ya + 34, ordres[i][1], { taille: 15, gras: true, couleur: c(cols[i]) });
    g += texte(cx, ya + 54, ordres[i][0], { taille: 13.5, italique: true });
  }
  if (note) g += texte(cx, y0 + 3 * hT + 34, note, { taille: 12.5, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Barre proportionnelle : la société d'ordres en 1789. */
function ordresBarre() {
  const W = 660, H = 230;
  const x0 = 40, w = 580, y = 80, h = 50;
  const wt = w * 0.97;
  let g = texte(W / 2, 30, 'Population du royaume en 1789 (environ)', { taille: 14, gras: true });
  g += `<rect x="${x0}" y="${y}" width="${nb(wt)}" height="${h}" fill="${f('vert')}" stroke="${VERT}" stroke-width="1.8"/>`;
  g += `<rect x="${nb(x0 + wt)}" y="${y}" width="${nb(w - wt)}" height="${h}" fill="${ROUGE}" stroke="${ROUGE}" stroke-width="1.8"/>`;
  g += texte(x0 + wt / 2, y + 22, 'le tiers état : environ 97 %', { taille: 16, gras: true, couleur: VERT });
  g += texte(x0 + wt / 2, y + 41, 'paysans, artisans, bourgeois', { taille: 13 });
  g += fleche(x0 + w - 60, y - 22, x0 + wt + (w - wt) / 2, y - 2, { couleur: ROUGE, epaisseur: 1.5, pointe: 7 });
  g += texte(x0 + w - 64, y - 26, 'clergé + noblesse : environ 3 %', { taille: 13, couleur: ROUGE, gras: true, ancre: 'end' });
  g += texte(x0 + wt / 2, y + h + 30, '→ paie les impôts', { taille: 14, couleur: VERT, gras: true });
  g += texte(x0 + w - 4, y + h + 30, 'ne paient presque pas', { taille: 13, couleur: ROUGE, ancre: 'end' });
  g += texte(x0 + w - 4, y + h + 47, "d'impôts (privilèges)", { taille: 13, couleur: ROUGE, ancre: 'end' });
  return enveloppe(W, H, g);
}

/** Organisation d'une ville / d'une aire urbaine (schéma de principe, cercles concentriques). */
function aireUrbaine({ anneaux, exterieur = 'espace rural', trajets = '', note = 'Schéma de principe (non à l\'échelle)' } = {}) {
  const W = 660, H = 400, cx = 210, cy = 205;
  const R = [52, 104, 166];
  let g = `<rect x="10" y="20" width="400" height="370" rx="10" fill="#f3f8ec"/>`;
  g += texte(20, 40, exterieur.replace(' : ', ' :\n'), { taille: 13.5, couleur: VERT, gras: true, ancre: 'start' });
  const cols = ['rouge', 'orange', 'vert'];
  for (let i = 2; i >= 0; i--) g += cercle(cx, cy, R[i], { couleur: c(cols[i]), fond: f(cols[i]), epaisseur: 2 });
  // petites maisons dans le périurbain, immeubles au centre
  for (const a of [20, 70, 120, 160, 200, 250, 300, 340]) {
    const [x, y] = polar(cx, cy, 138, a);
    g += `<rect x="${nb(x - 5)}" y="${nb(y - 4)}" width="10" height="8" fill="#c8a36a"/>` + polygone([[x - 7, y - 4], [x, y - 10], [x + 7, y - 4]], { couleur: '#8a5a2b', fond: '#8a5a2b', epaisseur: 1 });
  }
  for (const [dx, hh] of [[-22, 34], [-8, 50], [6, 42], [18, 30]]) g += `<rect x="${cx + dx}" y="${cy + 18 - hh}" width="11" height="${hh}" fill="#9aa7b4" stroke="#5b6b7a" stroke-width="0.8"/>`;
  // Étiquettes à droite
  const ys = [80, 170, 270];
  anneaux.forEach((t, i) => {
    const r = i === 0 ? R[0] * 0.6 : (R[i - 1] + R[i]) / 2;
    const a = [35, 60, 100][i];
    const [px, py] = polar(cx, cy, r, a);
    g += ligne(px, py, 430, ys[i], { couleur: c(cols[i]), epaisseur: 1.4 }) + `<circle cx="${nb(px)}" cy="${nb(py)}" r="3" fill="${c(cols[i])}"/>`;
    g += texte(436, ys[i] + 5, t, { taille: 13.5, couleur: c(cols[i]), gras: true, ancre: 'start' });
  });
  if (trajets) {
    const [x1, y1] = polar(cx, cy, 150, 225), [x2, y2] = polar(cx, cy, 40, 225);
    g += fleche(x1, y1, x2, y2, { couleur: VIOLET, epaisseur: 2.4, pointe: 10 }) + fleche(x2 + 10, y2 + 6, x1 + 10, y1 + 6, { couleur: VIOLET, epaisseur: 2.4, pointe: 10 });
    g += texte(436, 350, trajets, { taille: 13, couleur: VIOLET, gras: true, ancre: 'start' });
  }
  g += texte(210, 384, note, { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Zones maritimes (coupe schématique, distances à l'échelle). */
function zonesMaritimes({ zone = false } = {}) {
  const W = 680, H = zone ? 380 : 350;
  const xc = 90, x200 = 560, ys = 140;
  const X = (mi) => xc + (mi / 200) * (x200 - xc);
  let g = '';
  // Terre
  g += polygone([[10, ys - 30], [xc, ys - 8], [xc, ys], [xc + 10, ys + 30], [10, ys + 120]], { couleur: '#6b5b4b', fond: '#d6c4a1', epaisseur: 1.5 });
  g += texte(46, ys - 40, 'TERRE', { taille: 13, gras: true, couleur: '#6b5b4b' });
  // Mer et fond
  g += `<rect x="${xc}" y="${ys}" width="${W - 10 - xc}" height="${zone ? 150 : 120}" fill="#dcecfb"/>`;
  const fond = zone ? [[xc + 10, ys + 30], [X(60), ys + 50], [X(110), ys + 110], [W - 10, ys + 130], [W - 10, ys + 170], [xc + 10, ys + 170]] : [[xc + 10, ys + 30], [X(60), ys + 50], [X(110), ys + 100], [W - 10, ys + 112], [W - 10, ys + 130], [xc + 10, ys + 130]];
  g += polygone(fond, { couleur: '#6b5b4b', fond: '#b9a57f', epaisseur: 1.2 });
  g += ligne(xc, ys, W - 10, ys, { couleur: BLEU, epaisseur: 2 });
  // Bandes de zones au-dessus de la mer
  const yb = ys - 26;
  g += `<rect x="${xc}" y="${yb}" width="${nb(X(12) - xc)}" height="18" fill="${ROUGE}" fill-opacity="0.75"/>`;
  g += `<rect x="${nb(X(12))}" y="${yb}" width="${nb(x200 - X(12))}" height="18" fill="${ORANGE}" fill-opacity="0.3" stroke="${ORANGE}"/>`;
  g += `<rect x="${x200}" y="${yb}" width="${W - 10 - x200}" height="18" fill="${VERT}" fill-opacity="0.18" stroke="${VERT}"/>`;
  g += ligne(X(12), yb - 4, X(12), ys + 10, { couleur: ROUGE, epaisseur: 1.5, pointilles: true });
  g += ligne(x200, yb - 4, x200, ys + 10, { couleur: ORANGE, epaisseur: 1.5, pointilles: true });
  // Étiquettes
  g += fleche(X(6), yb - 50, X(6), yb - 2, { couleur: ROUGE, epaisseur: 1.4, pointe: 7 });
  g += texte(X(6) - 6, yb - 72, 'eaux territoriales : 12 milles', { taille: 13, couleur: ROUGE, gras: true, ancre: 'start' });
  g += texte(X(6) - 6, yb - 56, 'souveraineté pleine', { taille: 12, couleur: ROUGE, ancre: 'start' });
  g += texte((X(12) + x200) / 2 + 30, yb + 14, 'ZEE : jusqu\'à 200 milles (≈ 370 km)', { taille: 13, couleur: ORANGE, gras: true });
  g += texte((X(12) + x200) / 2 + 30, yb - 10, 'droits d\'exploitation des ressources', { taille: 12, couleur: ORANGE });
  g += texte((x200 + W - 10) / 2, yb + 14, 'haute mer', { taille: 13, couleur: VERT, gras: true });
  g += texte((x200 + W - 10) / 2, yb - 10, 'liberté des mers', { taille: 12, couleur: VERT });
  // Graduation des distances
  const yg = ys + (zone ? 176 : 146);
  g += ligne(xc, yg, x200, yg, { couleur: ATTENUE, epaisseur: 1.2 });
  for (const mi of [0, 12, 50, 100, 150, 200]) {
    g += ligne(X(mi), yg - 4, X(mi), yg + 4, { couleur: ATTENUE, epaisseur: 1.2 });
    g += texte(X(mi), yg + 18, String(mi), { taille: 12, couleur: ATTENUE });
  }
  g += texte(x200 + 14, yg + 4, 'milles marins', { taille: 12, couleur: ATTENUE, ancre: 'start' });
  g += texte(xc - 6, yg + 4, 'côte', { taille: 12, couleur: ATTENUE, ancre: 'end' });
  if (zone) g += texte(X(150), ys + 150, 'grands fonds (la « Zone ») : patrimoine commun de l\'humanité', { taille: 12.5, couleur: '#4a3b2b', gras: true });
  g += texte(W / 2, H - 6, 'Coupe schématique : les distances sont à l\'échelle, pas les profondeurs.', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Effet de serre (schéma simplifié). */
function effetSerre() {
  const W = 660, H = 400;
  let g = '';
  g += `<rect x="0" y="0" width="${W}" height="300" fill="#f4f7fb"/>`;
  g += `<rect x="0" y="110" width="${W}" height="70" fill="#cfe3f7"/>`;
  for (let k = 0; k < 30; k++) { const x = 20 + ((k * 89) % 450), y = 118 + ((k * 37) % 54); if (Math.abs(x - 380) < 10 || Math.abs(x - 480) < 10 || Math.abs(x - 135) < 14) continue; g += `<circle cx="${x}" cy="${y}" r="2.6" fill="${BLEU}" fill-opacity="0.55"/>`; }
  g += texte(542, 132, 'atmosphère :', { taille: 13, couleur: BLEU, gras: true, ancre: 'start' });
  g += texte(542, 149, 'gaz à effet de serre', { taille: 12.5, couleur: BLEU, ancre: 'start' });
  g += texte(542, 166, '(CO₂, méthane…)', { taille: 12.5, couleur: BLEU, ancre: 'start' });
  g += `<rect x="0" y="300" width="${W}" height="50" fill="#c9b48b"/>` + texte(W / 2, 331, 'la Terre (le sol et les océans)', { taille: 14, gras: true, couleur: '#4a3b2b' });
  // Soleil et rayonnement solaire
  g += cercle(46, 46, 26, { couleur: ORANGE, fond: '#ffc83d', epaisseur: 1.5 }) + texte(46, 90, 'Soleil', { taille: 13, gras: true, couleur: ORANGE });
  g += fleche(80, 70, 250, 296, { couleur: ORANGE, epaisseur: 3.5, pointe: 13 });
  g += texte(96, 30, '① le rayonnement du Soleil traverse', { taille: 13, couleur: ORANGE, gras: true, ancre: 'start' });
  g += texte(96, 47, 'l\'atmosphère et chauffe le sol', { taille: 12.5, couleur: ORANGE, ancre: 'start' });
  // Chaleur renvoyée par la Terre (ondulée)
  const vague = (x, y1, y2) => { let d = `M ${x} ${y1}`; for (let y = y1; y > y2 + 6; y -= 12) d += ' q 6 -3 0 -6 q -6 -3 0 -6'; return `<path d="${d}" fill="none" stroke="${ROUGE}" stroke-width="2.6"/>`; };
  g += vague(380, 296, 22) + `<polygon points="380,10 372,24 388,24" fill="${ROUGE}"/>`;
  g += texte(396, 30, '② la Terre renvoie de la chaleur', { taille: 13, couleur: ROUGE, gras: true, ancre: 'start' });
  g += texte(396, 47, '(infrarouge) : une partie', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += texte(396, 63, 'repart vers l\'espace', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += vague(480, 296, 150) + `<path d="M 480 150 q 0 -16 22 -16 q 22 0 22 20 L 524 282" fill="none" stroke="${ROUGE}" stroke-width="2.6"/>` + `<polygon points="524,296 516,280 532,280" fill="${ROUGE}"/>`;
  g += etiquette(540, 216, '③ une partie est\nretenue et renvoyée\nvers le sol', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
  g += texte(W / 2, 374, 'Plus il y a de gaz à effet de serre, plus la chaleur est retenue :', { taille: 13, couleur: ENCRE, italique: true });
  g += texte(W / 2, 392, 'la planète se réchauffe.', { taille: 13, couleur: ENCRE, italique: true });
  return enveloppe(W, H, g);
}

/** Géocentrisme / héliocentrisme. */
function geoHelio() {
  const W = 680, H = 320;
  let g = '';
  const panneau = (x0, titre, sousTitre, centre, orbite) => {
    let s = `<rect x="${x0}" y="10" width="320" height="300" rx="10" fill="#f6f8fb" stroke="${AXE}"/>`;
    s += texte(x0 + 160, 36, titre, { taille: 15, gras: true }) + texte(x0 + 160, 54, sousTitre, { taille: 12.5, couleur: ATTENUE, italique: true });
    const cx = x0 + 160, cy = 180;
    s += cercle(cx, cy, 100, { couleur: AXE, epaisseur: 1.5 });
    s += `<path d="M ${cx + 100} ${cy} l -6 -12 l 12 0 Z" fill="${AXE}" transform="rotate(0)"/>`;
    s += centre(cx, cy) + orbite(cx + 70.7, cy - 70.7);
    return s;
  };
  const terre = (x, y, r = 14) => cercle(x, y, r, { couleur: BLEU, fond: '#5aa9e6', epaisseur: 1.5 }) + texte(x, y + r + 16, 'Terre', { taille: 13, gras: true, couleur: BLEU });
  const soleil = (x, y, r = 22) => cercle(x, y, r, { couleur: ORANGE, fond: '#ffc83d', epaisseur: 1.5 }) + texte(x, y + r + 16, 'Soleil', { taille: 13, gras: true, couleur: ORANGE });
  g += panneau(10, 'Géocentrisme', 'vision ancienne : la Terre au centre', (x, y) => terre(x, y), (x, y) => soleil(x, y, 16));
  g += panneau(350, 'Héliocentrisme', 'Copernic, puis Galilée : le Soleil au centre', (x, y) => soleil(x, y), (x, y) => terre(x, y, 11));
  return enveloppe(W, H, g);
}

/** L'eau sur la planète : eau salée / eau douce, et où se trouve l'eau douce. */
function eauPlanete() {
  const W = 660, H = 290;
  const x0 = 30, w = 600;
  let g = texte(W / 2, 26, 'Toute l\'eau de la planète', { taille: 14, gras: true });
  const ws = w * 0.975;
  g += `<rect x="${x0}" y="40" width="${nb(ws)}" height="44" fill="#5aa9e6"/>`;
  g += `<rect x="${nb(x0 + ws)}" y="40" width="${nb(w - ws)}" height="44" fill="${VERT}"/>`;
  g += texte(x0 + ws / 2, 68, 'eau salée (mers et océans) : environ 97,5 %', { taille: 15, gras: true, couleur: '#ffffff' });
  // Zoom
  const yz = 170;
  g += `<path d="M ${nb(x0 + ws)} 84 L ${x0} ${yz} M ${x0 + w} 84 L ${x0 + w} ${yz}" stroke="${VERT}" stroke-width="1.2" stroke-dasharray="5 4" fill="none"/>`;
  g += texte(W / 2 + 40, yz - 12, 'Zoom sur l\'eau douce : environ 2,5 % de toute l\'eau', { taille: 14, couleur: VERT, gras: true });
  const parts = [[0.69, '#e8f1f8', 'glaces et neiges : environ 69 %', ENCRE], [0.30, '#7fb6d9', 'souterraine : environ 30 %', ENCRE], [0.01, VERT, '', ENCRE]];
  let x = x0;
  for (const [p, col, t, tc] of parts) {
    g += `<rect x="${nb(x)}" y="${yz}" width="${nb(w * p)}" height="44" fill="${col}" stroke="${AXE}" stroke-width="1"/>`;
    if (t) g += texte(x + (w * p) / 2, yz + 27, t, { taille: 13.5, gras: true, couleur: tc });
    x += w * p;
  }
  g += fleche(x0 + w - 40, yz + 80, x0 + w - 3, yz + 46, { couleur: VERT, epaisseur: 1.5, pointe: 7 });
  g += texte(x0 + w - 44, yz + 88, 'lacs et rivières : environ 1 % de l\'eau douce', { taille: 13, couleur: VERT, gras: true, ancre: 'end' });
  return enveloppe(W, H, g);
}

/** Développement durable : trois piliers (diagramme de Venn). */
function ddVenn() {
  const W = 560, H = 420;
  const r = 110;
  const C = [[205, 160, 'économique', 'orange'], [355, 160, 'social', 'violet'], [280, 280, 'environnemental', 'vert']];
  let g = '';
  for (const [x, y, , col] of C) g += cercle(x, y, r, { couleur: c(col), fond: c(col), opacite: 0.13, epaisseur: 2.2 });
  g += texte(165, 125, 'économique', { taille: 16, gras: true, couleur: ORANGE }) + texte(165, 145, 'produire,', { taille: 12.5 }) + texte(165, 161, 'créer des richesses', { taille: 12.5 });
  g += texte(395, 125, 'social', { taille: 16, gras: true, couleur: VIOLET }) + texte(395, 145, 'santé, éducation,', { taille: 12.5 }) + texte(395, 161, 'égalité', { taille: 12.5 });
  g += texte(280, 338, 'environnemental', { taille: 16, gras: true, couleur: VERT }) + texte(280, 358, 'protéger la nature', { taille: 12.5 }) + texte(280, 374, 'et les ressources', { taille: 12.5 });
  g += `<circle cx="280" cy="203" r="48" fill="#ffffff" stroke="${ENCRE}" stroke-width="1.5"/>`;
  g += texte(280, 199, 'développement', { taille: 12, gras: true }) + texte(280, 215, 'durable', { taille: 12, gras: true });
  g += texte(W / 2, 30, 'Les trois piliers du développement durable', { taille: 14, gras: true });
  return enveloppe(W, H, g);
}

/** Coupe schématique d'une vallée de montagne. */
function montagne() {
  const W = 660, H = 340;
  let g = `<rect x="0" y="0" width="${W}" height="${H}" fill="#f4f8fc"/>`;
  const prof = [[0, 300], [20, 300], [90, 90], [140, 40], [190, 120], [250, 250], [410, 250], [460, 140], [520, 60], [570, 30], [630, 140], [660, 200], [660, 340], [0, 340]];
  g += polygone(prof, { couleur: '#6b5b4b', fond: '#b8a68a', epaisseur: 1.6 });
  // Neige
  g += polygone([[119, 60], [140, 40], [162, 78], [148, 70], [132, 76]], { couleur: '#ffffff', fond: '#ffffff', epaisseur: 1 });
  g += polygone([[541, 48], [570, 30], [598, 82], [580, 72], [560, 80]], { couleur: '#ffffff', fond: '#ffffff', epaisseur: 1 });
  // Fond de vallée : village + route + rivière
  for (const x of [270, 296, 322, 360, 384]) g += `<rect x="${x}" y="232" width="14" height="12" fill="#e9d3b0" stroke="#8a5a2b"/>` + polygone([[x - 2, 232], [x + 7, 224], [x + 16, 232]], { couleur: '#8a5a2b', fond: '#c0392b', epaisseur: 1 });
  g += ligne(250, 248, 411, 248, { couleur: '#555', epaisseur: 3 });
  // Tunnel (pointillés) sous le massif de droite
  g += ligne(411, 248, 650, 248, { couleur: '#555', epaisseur: 2.5, pointilles: true });
  // Station de ski : remontée mécanique sur la pente
  g += ligne(440, 180, 515, 72, { couleur: ENCRE, epaisseur: 1.5 });
  for (const t of [0.25, 0.5, 0.75]) g += `<rect x="${nb(440 + 75 * t - 4)}" y="${nb(180 - 108 * t)}" width="8" height="8" fill="${ROUGE}"/>`;
  g += `<rect x="430" y="176" width="20" height="12" fill="#e9d3b0" stroke="#8a5a2b"/>`;
  const lab = (x, y, tx, ty, t, ancre = 'start', col = ENCRE) => fleche(tx, ancre === 'middle' ? (y < ty ? ty - 13 : ty + 9) : ty, x, y, { couleur: ROUGE, epaisseur: 1.3, pointe: 7 }) + texte(tx + (ancre === 'start' ? 4 : ancre === 'end' ? -4 : 0), ty + 4, t, { taille: 13.5, gras: true, ancre, couleur: col });
  g += lab(140, 44, 196, 30, 'sommets : froid, neige, fortes pentes');
  g += lab(330, 228, 300, 168, 'la vallée : on y habite (abritée)', 'middle');
  g += lab(280, 252, 220, 300, 'route', 'end');
  g += lab(600, 252, 560, 300, 'tunnel', 'end');
  g += lab(455, 158, 360, 126, 'station de ski', 'end');
  g += texte(W / 2, H - 8, 'Coupe schématique (non à l\'échelle)', { taille: 12, couleur: ATTENUE, italique: true });
  return enveloppe(W, H, g);
}

/** Oasis dans un désert chaud (schéma). */
function oasis() {
  const W = 660, H = 320;
  let g = `<rect x="0" y="0" width="${W}" height="${H}" fill="#fbf1d8"/>`;
  for (const [x, y] of [[60, 60], [180, 40], [560, 50], [600, 250], [80, 260]]) g += `<path d="M ${x - 40} ${y + 10} q 40 -26 80 0" fill="none" stroke="#d4a64a" stroke-width="2"/>`;
  // Point d'eau
  g += `<ellipse cx="330" cy="170" rx="46" ry="24" fill="#5aa9e6" stroke="${BLEU}" stroke-width="1.5"/>`;
  // Jardins
  g += `<ellipse cx="330" cy="170" rx="150" ry="95" fill="#a8d08d" fill-opacity="0.75" stroke="${VERT}" stroke-width="1.5"/>`;
  g += `<ellipse cx="330" cy="170" rx="46" ry="24" fill="#5aa9e6" stroke="${BLEU}" stroke-width="1.5"/>`;
  const palmier = (x, y) => `<rect x="${x - 2}" y="${y}" width="4" height="26" fill="#7a5230"/>` + [-60, -20, 20, 60].map((a) => `<path d="M ${x} ${y} q ${nb(14 * Math.sin((a * Math.PI) / 180))} -10 ${nb(22 * Math.sin((a * Math.PI) / 180))} 2" fill="none" stroke="#2f7a3a" stroke-width="4" stroke-linecap="round"/>`).join('');
  for (const [x, y] of [[230, 120], [260, 200], [420, 125], [400, 205], [330, 92], [330, 222]]) g += palmier(x, y);
  // Village
  for (const x of [470, 492, 514]) g += `<rect x="${x}" y="168" width="18" height="14" fill="#e3c08a" stroke="#8a5a2b"/>`;
  // Tentes de nomades
  for (const x of [80, 120]) g += polygone([[x, 150], [x + 18, 128], [x + 36, 150]], { couleur: '#5a3a1a', fond: '#7a5230', epaisseur: 1.2 });
  for (const x of [90, 112, 134]) g += `<ellipse cx="${x}" cy="172" rx="8" ry="4" fill="#8a7a68"/>`;
  const lab = (x, y, tx, ty, t, ancre = 'start') => fleche(tx, ancre === 'middle' ? (y < ty ? ty - 13 : ty + 9) : ty, x, y, { couleur: ROUGE, epaisseur: 1.3, pointe: 7 }) + texte(tx + (ancre === 'start' ? 4 : ancre === 'end' ? -4 : 0), ty + 4, t, { taille: 13.5, gras: true, ancre });
  g += lab(330, 176, 372, 296, "le point d'eau", 'start');
  g += lab(250, 150, 210, 40, 'palmiers et cultures', 'middle');
  g += lab(500, 166, 560, 120, 'village', 'start');
  g += lab(110, 154, 120, 220, 'nomades et troupeaux', 'middle');
  g += texte(W - 14, 30, 'désert : chaleur et sécheresse', { taille: 13, couleur: '#a5741d', gras: true, ancre: 'end' });
  g += texte(14, H - 8, 'Schéma (non à l\'échelle)', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
  return enveloppe(W, H, g);
}

/** Seigneurie (plan schématique). */
function seigneurie() {
  const W = 660, H = 400;
  let g = `<rect x="10" y="10" width="640" height="300" rx="10" fill="#eef6e6" stroke="${AXE}"/>`;
  // Forêt
  for (let k = 0; k < 9; k++) g += cercle(40 + (k % 3) * 26, 40 + Math.floor(k / 3) * 24, 13, { couleur: '#2f7a3a', fond: '#4caf50', epaisseur: 1 });
  g += texte(70, 120, 'forêt', { taille: 13, gras: true, couleur: VERT });
  // Château sur une butte
  g += `<ellipse cx="330" cy="88" rx="80" ry="26" fill="#cbb994"/>`;
  g += `<rect x="300" y="40" width="60" height="44" fill="#d9cfbf" stroke="#6b5b4b" stroke-width="1.5"/>`;
  for (let x = 300; x < 360; x += 15) g += `<rect x="${x}" y="32" width="9" height="8" fill="#d9cfbf" stroke="#6b5b4b"/>`;
  g += texte(330, 130, 'château du seigneur', { taille: 13.5, gras: true });
  // Réserve (gauche)
  g += `<rect x="40" y="150" width="250" height="140" fill="#f3dc9b" stroke="${ORANGE}" stroke-width="2"/>`;
  for (let k = 0; k < 9; k++) g += ligne(50, 162 + k * 14, 280, 162 + k * 14, { couleur: '#d4a64a', epaisseur: 1.5 });
  g += etiquette(165, 222, 'la RÉSERVE\ncultivée pour le seigneur', { taille: 13.5, couleur: ORANGE, gras: true, fond: '#f3dc9b' });
  // Tenures (droite) : petites parcelles
  for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) g += `<rect x="${380 + k * 52}" y="${170 + r * 40}" width="46" height="34" fill="#d7ecc5" stroke="${VERT}" stroke-width="1.4"/>`;
  g += etiquette(482, 152, 'les TENURES, exploitées\npar les paysans', { taille: 13.5, couleur: VERT, gras: true });
  // Village : église, four, moulin
  g += `<rect x="440" y="58" width="22" height="28" fill="#e9d3b0" stroke="#8a5a2b"/>` + polygone([[436, 58], [451, 40], [466, 58]], { couleur: '#8a5a2b', fond: '#a0522d', epaisseur: 1 }) + ligne(451, 26, 451, 40, { couleur: ENCRE, epaisseur: 1.5 }) + ligne(445, 31, 457, 31, { couleur: ENCRE, epaisseur: 1.5 });
  g += texte(451, 104, 'église', { taille: 12.5 });
  g += `<rect x="500" y="66" width="20" height="18" fill="#e9d3b0" stroke="#8a5a2b"/>` + texte(510, 104, 'four', { taille: 12.5 });
  g += cercle(590, 70, 16, { couleur: '#8a5a2b', fond: '#e9d3b0', epaisseur: 1.4 }) + ligne(578, 58, 602, 82, { couleur: '#8a5a2b', epaisseur: 2 }) + ligne(602, 58, 578, 82, { couleur: '#8a5a2b', epaisseur: 2 });
  g += texte(590, 104, 'moulin', { taille: 12.5 });
  g += `<path d="M 625 10 Q 610 150 640 310" fill="none" stroke="#5aa9e6" stroke-width="6"/>`;
  // Obligations
  g += texte(330, 336, 'En échange de leur terre, les paysans doivent au seigneur :', { taille: 13.5, gras: true });
  g += texte(330, 358, 'des redevances (argent ou récoltes) • des corvées (travail gratuit)', { taille: 13 });
  g += texte(330, 378, 'des banalités (taxes pour utiliser le four, le moulin, le pressoir)', { taille: 13 });
  g += texte(596, 300, 'plan schématique', { taille: 11.5, couleur: ATTENUE, italique: true, ancre: 'end' });
  return enveloppe(W, H, g);
}

// ---------------------------------------------------------------------------
// Organigrammes et schémas fléchés
// ---------------------------------------------------------------------------
const ORGAS = {
  vassalite: () => orga(620, 300, {
    boites: [
      { id: 's', x: 210, y: 24, w: 200, h: 58, t: 'le SUZERAIN\nseigneur plus puissant', coul: 'rouge', taille: 14 },
      { id: 'v', x: 210, y: 218, w: 200, h: 58, t: 'le VASSAL\nse met à son service', coul: 'bleu', taille: 14 },
    ],
    liens: [
      { de: 's', a: 'v', oa: -60, ob: -60, t: 'lui confie un FIEF (une terre)\net le protège', coul: 'rouge', lx: -120 },
      { de: 'v', a: 's', oa: 60, ob: 60, t: "lui prête HOMMAGE :\nil lui jure fidélité", coul: 'bleu', lx: 110 },
    ],
    notes: [{ x: 310, y: 154, t: 'cérémonie\nde l\'hommage', taille: 12, italique: true }],
  }),
  romeRepublique: () => orga(640, 300, {
    boites: [
      { id: 'sen', x: 30, y: 30, w: 230, h: 66, t: 'le SÉNAT\nconseille et oriente\nla politique', coul: 'violet', taille: 13.5 },
      { id: 'con', x: 380, y: 30, w: 230, h: 66, t: 'deux CONSULS\ndirigent la cité\net l\'armée', coul: 'rouge', taille: 13.5 },
      { id: 'cit', x: 260, y: 220, w: 200, h: 50, t: 'les citoyens romains', coul: 'bleu', taille: 14, gras: true },
    ],
    liens: [
      { de: 'sen', a: 'con', t: 'conseille', coul: 'violet' },
      { de: 'cit', a: 'con', t: 'élisent\n(pour un an)', coul: 'bleu', lx: 40 },
    ],
  }),
  college: () => orga(640, 330, {
    boites: [
      { id: 'cc', x: 30, y: 24, w: 240, h: 50, t: 'le CONSEIL DE CLASSE', coul: 'violet', taille: 14 },
      { id: 'del', x: 30, y: 140, w: 240, h: 50, t: '2 DÉLÉGUÉS de classe', coul: 'orange', taille: 14 },
      { id: 'el', x: 30, y: 256, w: 240, h: 50, t: 'les élèves de la classe', coul: 'bleu', taille: 14 },
      { id: 'pr', x: 370, y: 24, w: 240, h: 60, t: 'le PRINCIPAL\nchef d\'établissement', coul: 'rouge', taille: 14 },
      { id: 'reg', x: 370, y: 200, w: 240, h: 76, t: 'le RÈGLEMENT INTÉRIEUR\nfixe les règles de vie\nque chacun respecte', coul: 'gris', taille: 13.5 },
    ],
    liens: [
      { de: 'el', a: 'del', t: 'élisent', coul: 'bleu' },
      { de: 'del', a: 'cc', t: 'représentent\nla classe au', coul: 'orange' },
    ],
    notes: [{ x: 490, y: 112, t: 'dirige le collège', taille: 13.5, couleur: ROUGE }],
  }),
  loi: () => orga(680, 330, {
    boites: [
      { id: 'parl', x: 240, y: 16, w: 260, h: 140, t: '', coul: 'violet' },
      { id: 'an', x: 252, y: 58, w: 114, h: 84, t: 'Assemblée\nnationale\n(députés)', coul: 'violet', taille: 13 },
      { id: 'sen', x: 376, y: 58, w: 112, h: 84, t: 'Sénat', coul: 'violet', taille: 13.5 },
      { id: 'cit', x: 12, y: 74, w: 150, h: 50, t: 'les citoyens', coul: 'bleu', taille: 14, gras: true },
      { id: 'loi', x: 270, y: 236, w: 200, h: 64, t: 'la LOI\nla même pour tous', coul: 'rouge', taille: 14 },
      { id: 'lib', x: 520, y: 236, w: 150, h: 64, t: 'les LIBERTÉS\nindividuelles\net collectives', coul: 'vert', taille: 13 },
      { id: 'jus', x: 530, y: 60, w: 140, h: 60, t: 'la JUSTICE', coul: 'orange', taille: 14 },
    ],
    liens: [
      { de: 'cit', a: 'an', sb: 'g', t: 'élisent', coul: 'bleu', ly: -16 },
      { de: 'parl', a: 'loi', t: 'vote', coul: 'violet', lx: 26 },
      { de: 'loi', a: 'lib', t: 'encadre\net protège', coul: 'vert', ly: -26 },
      { de: 'jus', a: 'loi', t: 'la fait respecter,\nsanctionne', coul: 'orange', lx: 20 },
    ],
    notes: [{ x: 370, y: 40, t: 'le PARLEMENT', taille: 14, couleur: VIOLET, gras: true }],
  }),
  separation: ({ exemples = ['le Parlement', 'le gouvernement', 'les tribunaux (juges)'], titreEx = 'Exemple : en France' } = {}) => orga(660, 290, {
    boites: [
      { id: 'l', x: 14, y: 70, w: 200, h: 92, t: 'pouvoir\nLÉGISLATIF\nfait (vote) les lois', coul: 'violet', taille: 14 },
      { id: 'e', x: 230, y: 70, w: 200, h: 92, t: 'pouvoir\nEXÉCUTIF\napplique les lois', coul: 'rouge', taille: 14 },
      { id: 'j', x: 446, y: 70, w: 200, h: 92, t: 'pouvoir\nJUDICIAIRE\njuge', coul: 'orange', taille: 14 },
      { id: 'l2', x: 34, y: 210, w: 160, h: 40, t: exemples[0], coul: 'gris', taille: 13 },
      { id: 'e2', x: 250, y: 210, w: 160, h: 40, t: exemples[1], coul: 'gris', taille: 13 },
      { id: 'j2', x: 466, y: 210, w: 160, h: 40, t: exemples[2], coul: 'gris', taille: 13 },
    ],
    liens: [{ de: 'l2', a: 'l' }, { de: 'e2', a: 'e' }, { de: 'j2', a: 'j' }],
    notes: [
      { x: 330, y: 30, t: 'Séparer les trois pouvoirs pour éviter les abus', taille: 15, couleur: ENCRE, gras: true },
      { x: 330, y: 52, t: 'idée de Montesquieu, De l\'esprit des lois (1748)', taille: 12.5, italique: true },
      { x: 330, y: 278, t: titreEx, taille: 12.5, italique: true },
    ],
  }),
  regimes: () => orga(680, 360, {
    avant: `<rect x="6" y="6" width="330" height="348" rx="10" fill="#f7f9fc" stroke="${AXE}"/><rect x="344" y="6" width="330" height="348" rx="10" fill="#f7f9fc" stroke="${AXE}"/>`,
    boites: [
      { id: 'p1', x: 18, y: 112, w: 112, h: 56, t: 'PARLEMENT', coul: 'violet', taille: 13.5 },
      { id: 'g1', x: 212, y: 112, w: 112, h: 56, t: 'GOUVER-\nNEMENT', coul: 'rouge', taille: 13.5 },
      { id: 'e1', x: 96, y: 290, w: 150, h: 46, t: 'les électeurs', coul: 'bleu', taille: 13.5 },
      { id: 'p2', x: 356, y: 112, w: 120, h: 56, t: 'CONGRÈS', coul: 'violet', taille: 13.5 },
      { id: 'g2', x: 544, y: 112, w: 120, h: 56, t: 'PRÉSIDENT', coul: 'rouge', taille: 13.5 },
      { id: 'e2', x: 434, y: 290, w: 150, h: 46, t: 'les électeurs', coul: 'bleu', taille: 13.5 },
    ],
    liens: [
      { de: 'e1', a: 'p1', t: 'élisent', coul: 'bleu' },
      { de: 'p1', a: 'g1', oa: -12, ob: -12, t: 'peut le renverser', coul: 'violet', ly: -26 },
      { de: 'g1', a: 'p1', oa: 12, ob: 12, t: 'responsable\ndevant lui', coul: 'rouge', ly: 34 },
      { de: 'e2', a: 'p2', t: 'élisent', coul: 'bleu' },
      { de: 'e2', a: 'g2', t: 'élisent', coul: 'bleu' },
    ],
    notes: [
      { x: 171, y: 32, t: 'Régime parlementaire', taille: 15, couleur: ENCRE, gras: true },
      { x: 171, y: 50, t: 'exemple : le Royaume-Uni', taille: 12.5, italique: true },
      { x: 509, y: 32, t: 'Régime présidentiel', taille: 15, couleur: ENCRE, gras: true },
      { x: 509, y: 50, t: 'exemple : les États-Unis', taille: 12.5, italique: true },
      { x: 510, y: 78, t: 'séparation stricte :', taille: 12.5, couleur: ROUGE, gras: true },
      { x: 510, y: 94, t: 'aucun ne peut renverser l\'autre', taille: 12.5, couleur: ROUGE },
    ],
    apres: ligne(510, 114, 510, 166, { couleur: ROUGE, epaisseur: 3 }),
  }),
  hardSoft: ({ smart = false, nye = false } = {}) => orga(660, smart ? 340 : 270, {
    boites: [
      { id: 'p', x: 190, y: 16, w: 280, h: 62, t: 'la PUISSANCE\nimposer sa volonté, influencer', coul: 'gris', taille: 14 },
      { id: 'h', x: 16, y: 130, w: 300, h: 100, t: 'puissance DURE (hard power)\nCONTRAINDRE\narmée, pression économique,\nsanctions', coul: 'rouge', taille: 13.5 },
      { id: 's', x: 344, y: 130, w: 300, h: 100, t: 'puissance DOUCE (soft power)\nSÉDUIRE, CONVAINCRE\nculture, langue, valeurs,\ndiplomatie, universités', coul: 'bleu', taille: 13.5 },
      ...(smart ? [{ id: 'i', x: 160, y: 276, w: 340, h: 50, t: 'puissance intelligente (smart power)\n= combiner les deux', coul: 'violet', taille: 13.5 }] : []),
    ],
    liens: [{ de: 'p', a: 'h' }, { de: 'p', a: 's' }, ...(smart ? [{ de: 'h', a: 'i', coul: 'violet' }, { de: 's', a: 'i', coul: 'violet' }] : [])],
    notes: nye ? [{ x: 16, y: 40, t: 'distinction du\npolitologue\nJoseph Nye', taille: 12.5, italique: true, ancre: 'start' }] : [],
  }),
  laicite: ({ athee = false } = {}) => orga(660, athee ? 300 : 270, {
    boites: [
      { id: 's', x: 20, y: 20, w: 290, h: 74, t: 'SÉPARATION\ndes Églises et de l\'État\n(loi de 1905)', coul: 'violet', taille: 14 },
      { id: 'n', x: 350, y: 20, w: 290, h: 74, t: 'NEUTRALITÉ de l\'État\nil ne reconnaît ni ne finance\naucun culte', coul: 'bleu', taille: 14 },
      { id: 'l', x: 150, y: 170, w: 360, h: 74, t: 'la LIBERTÉ DE CONSCIENCE\ncroire, ne pas croire,\nchanger de religion', coul: 'vert', taille: 14 },
    ],
    liens: [{ de: 's', a: 'l', t: 'garantissent', coul: 'vert', lx: 70, ly: -4 }, { de: 'n', a: 'l', coul: 'vert' }],
    notes: athee ? [{ x: 330, y: 284, t: 'La laïcité n\'est pas l\'athéisme : l\'État reste neutre, il ne combat pas les religions.', taille: 12.5, italique: true }] : [],
  }),
  modelesReligion: () => orga(680, 250, {
    boites: [
      { id: 't', x: 12, y: 40, w: 200, h: 92, t: 'THÉOCRATIE\npouvoir exercé\nau nom de la religion', coul: 'rouge', taille: 13.5 },
      { id: 'r', x: 240, y: 40, w: 200, h: 92, t: 'RELIGION D\'ÉTAT\nreligion officielle,\nÉtat non dirigé\npar le clergé', coul: 'orange', taille: 13 },
      { id: 'l', x: 468, y: 40, w: 200, h: 92, t: 'ÉTAT LAÏQUE\nneutre et séparé\ndes religions', coul: 'bleu', taille: 13.5 },
    ],
    notes: [
      { x: 112, y: 160, t: 'ex. : Vatican, Iran', taille: 13, couleur: ENCRE },
      { x: 340, y: 160, t: 'ex. : Royaume-Uni', taille: 13, couleur: ENCRE },
      { x: 568, y: 160, t: 'ex. : France', taille: 13, couleur: ENCRE },
      { x: 340, y: 228, t: 'du pouvoir confondu avec la religion… à la séparation', taille: 13, italique: true },
    ],
    apres: fleche(30, 196, 650, 196, { couleur: ATTENUE, epaisseur: 2.5, pointe: 12 }),
  }),
  triangulaire: () => orga(660, 400, {
    boites: [
      { id: 'eu', x: 410, y: 20, w: 200, h: 58, t: 'EUROPE\nports : Nantes, Bordeaux…', coul: 'bleu', taille: 13.5 },
      { id: 'af', x: 410, y: 282, w: 200, h: 50, t: 'AFRIQUE', coul: 'orange', taille: 14, gras: true },
      { id: 'am', x: 20, y: 150, w: 200, h: 60, t: 'AMÉRIQUE\nplantations, Antilles', coul: 'vert', taille: 13.5 },
    ],
    liens: [
      { de: 'eu', a: 'af', oa: 60, ob: 60, t: '① armes,\ntissus,\nalcool', coul: 'bleu', lx: 0 },
      { de: 'af', a: 'am', t: '② captifs africains\ndéportés et réduits\nen esclavage', coul: 'orange', lx: 30, ly: 26 },
      { de: 'am', a: 'eu', t: '③ sucre, café,\ncoton, tabac', coul: 'vert', lx: -10, ly: -22 },
    ],
    notes: [{ x: 330, y: 386, t: 'Schéma (ce n\'est pas une carte) : le commerce triangulaire au XVIIIe siècle', taille: 12.5, italique: true }],
  }),
  colonie: () => orga(660, 290, {
    boites: [
      { id: 'm', x: 16, y: 70, w: 200, h: 80, t: 'la MÉTROPOLE\npays colonisateur\n(ex. : France)', coul: 'bleu', taille: 14 },
      { id: 'c', x: 444, y: 70, w: 200, h: 80, t: 'la COLONIE\nterritoire conquis\net dominé', coul: 'orange', taille: 14 },
    ],
    liens: [
      { de: 'm', a: 'c', oa: -24, ob: -24, t: 'administre et domine ;\nvend ses produits industriels', coul: 'bleu', ly: -24 },
      { de: 'c', a: 'm', oa: 24, ob: 24, t: 'matières premières\n(mines, plantations)', coul: 'orange', ly: 26 },
    ],
    notes: [
      { x: 544, y: 180, t: 'routes, ports, chemins de fer', taille: 12.5, couleur: ORANGE },
      { x: 544, y: 196, t: 'au service du colonisateur', taille: 12.5, couleur: ORANGE },
      { x: 544, y: 222, t: 'populations privées', taille: 12.5, couleur: ORANGE },
      { x: 544, y: 238, t: 'des mêmes droits', taille: 12.5, couleur: ORANGE },
    ],
  }),
  migrations: () => orga(660, 300, {
    boites: [
      { id: 'd', x: 16, y: 90, w: 210, h: 70, t: 'PAYS DE DÉPART\non émigre', coul: 'orange', taille: 14 },
      { id: 'a', x: 434, y: 90, w: 210, h: 70, t: 'PAYS D\'ACCUEIL\non immigre', coul: 'bleu', taille: 14 },
    ],
    liens: [
      { de: 'd', a: 'a', oa: -16, ob: -16, t: 'migrants', coul: 'violet', ly: -18 },
      { de: 'a', a: 'd', oa: 16, ob: 16, t: 'envois d\'argent aux familles', coul: 'vert', ly: 20 },
    ],
    notes: [
      { x: 121, y: 30, t: 'pourquoi partir ? travail, meilleure vie,', taille: 12.5, couleur: ENCRE },
      { x: 121, y: 47, t: 'ou fuir un danger (réfugiés)', taille: 12.5, couleur: ENCRE },
      { x: 121, y: 190, t: 'départ de jeunes actifs', taille: 12.5, couleur: ORANGE },
      { x: 539, y: 190, t: 'main-d\'œuvre,', taille: 12.5, couleur: BLEU },
      { x: 539, y: 206, t: 'diversité culturelle', taille: 12.5, couleur: BLEU },
      { x: 330, y: 270, t: 'Les transports et la mondialisation facilitent ces mobilités.', taille: 12.5, italique: true },
    ],
  }),
  alimentation: () => orga(680, 210, {
    boites: [
      { id: 'a', x: 6, y: 40, w: 118, h: 64, t: 'agriculture\net pêche', coul: 'vert', taille: 13.5 },
      { id: 'b', x: 145, y: 40, w: 118, h: 64, t: 'transfor-\nmation', coul: 'orange', taille: 13.5 },
      { id: 'c', x: 284, y: 40, w: 118, h: 64, t: 'transport', coul: 'gris', taille: 13.5 },
      { id: 'd', x: 423, y: 40, w: 118, h: 64, t: 'vente\n(marchés,\nsupermarchés)', coul: 'bleu', taille: 13 },
      { id: 'e', x: 562, y: 40, w: 112, h: 64, t: 'notre\nassiette', coul: 'rouge', taille: 13.5 },
    ],
    liens: [{ de: 'a', a: 'b' }, { de: 'b', a: 'c' }, { de: 'c', a: 'd' }, { de: 'd', a: 'e' }],
    notes: [
      { x: 340, y: 22, t: 'De la production à l\'assiette', taille: 13.5, couleur: ENCRE, gras: true },
      { x: 340, y: 150, t: 'Manger local et de saison : moins de transport,', taille: 13.5, couleur: VERT, gras: true },
      { x: 340, y: 170, t: 'donc moins de pollution.', taille: 13.5, couleur: VERT, gras: true },
    ],
  }),
  industrie: ({ capitalisme = false } = {}) => orga(680, 360, {
    boites: [
      { id: 'ch', x: 14, y: 24, w: 130, h: 56, t: 'le CHARBON', coul: 'gris', taille: 14 },
      { id: 'mv', x: 186, y: 24, w: 160, h: 56, t: 'la MACHINE\nÀ VAPEUR', coul: 'orange', taille: 14 },
      { id: 'us', x: 390, y: 24, w: 276, h: 56, t: 'les USINES\nproduction de masse', coul: 'rouge', taille: 14 },
      { id: 'cf', x: 186, y: 138, w: 160, h: 56, t: 'le CHEMIN DE FER\n(et le bateau à vapeur)', coul: 'bleu', taille: 13 },
      { id: 'ex', x: 390, y: 138, w: 276, h: 56, t: 'EXODE RURAL\nles villes industrielles grandissent', coul: 'violet', taille: 13.5 },
      { id: 'bo', x: 390, y: 268, w: 132, h: 76, t: 'BOURGEOISIE\npatrons,\nbanquiers', coul: 'vert', taille: 13 },
      { id: 'ou', x: 534, y: 268, w: 132, h: 76, t: 'OUVRIERS\nsyndicats,\ngrèves', coul: 'orange', taille: 13 },
      ...(capitalisme ? [{ id: 'ca', x: 14, y: 268, w: 300, h: 76, t: 'CAPITALISME : banques et\nsociétés par actions investissent\ndes capitaux dans les usines', coul: 'gris', taille: 13 }] : []),
    ],
    liens: [
      { de: 'ch', a: 'mv', t: 'alimente', coul: 'gris', ly: -18 },
      { de: 'mv', a: 'us', t: 'fait tourner', coul: 'orange', ly: -18 },
      { de: 'mv', a: 'cf', coul: 'orange' },
      { de: 'us', a: 'ex', t: 'attirent les travailleurs', coul: 'rouge', lx: 0 },
      ...(capitalisme ? [{ de: 'ca', a: 'us', p1: [300, 268], p2: [392, 82], t: 'financent', coul: 'gris', lx: -26, ly: 30 }] : []),
    ],
    notes: [{ x: 528, y: 254, t: 'une nouvelle société', taille: 13.5, couleur: ENCRE, gras: true }],
    apres: fleche(528, 196, 528, 238, { couleur: VIOLET, epaisseur: 2, pointe: 9 }),
  }),
  accroissement: () => {
    const W = 640, H = 300;
    const y0 = 250, k = 9; // 9 px par naissance pour 1 000 habitants
    let g = texte(W / 2, 26, 'Exemple : pour 1 000 habitants, en un an', { taille: 14, gras: true });
    g += `<rect x="90" y="${y0 - 20 * k}" width="110" height="${20 * k}" fill="${f('vert')}" stroke="${VERT}" stroke-width="2"/>`;
    g += `<rect x="260" y="${y0 - 8 * k}" width="110" height="${8 * k}" fill="${f('rouge')}" stroke="${ROUGE}" stroke-width="2"/>`;
    g += texte(145, y0 - 20 * k + 26, '20', { taille: 22, gras: true, couleur: VERT }) + texte(145, y0 + 22, 'naissances', { taille: 14, gras: true, couleur: VERT }) + texte(145, y0 + 40, '(natalité)', { taille: 12.5 });
    g += texte(315, y0 - 8 * k + 26, '8', { taille: 22, gras: true, couleur: ROUGE }) + texte(315, y0 + 22, 'décès', { taille: 14, gras: true, couleur: ROUGE }) + texte(315, y0 + 40, '(mortalité)', { taille: 12.5 });
    g += ligne(200, y0 - 8 * k, 400, y0 - 8 * k, { couleur: AXE, epaisseur: 1.2, pointilles: true });
    g += ligne(200, y0 - 20 * k, 400, y0 - 20 * k, { couleur: AXE, epaisseur: 1.2, pointilles: true });
    g += fleche(400, y0 - 8 * k, 400, y0 - 20 * k + 2, { couleur: BLEU, epaisseur: 2.4, pointe: 9 }) + fleche(400, y0 - 20 * k, 400, y0 - 8 * k - 2, { couleur: BLEU, epaisseur: 2.4, pointe: 9 });
    g += texte(414, y0 - 14 * k - 10, 'accroissement naturel', { taille: 14, gras: true, couleur: BLEU, ancre: 'start' });
    g += texte(414, y0 - 14 * k + 10, '= 20 − 8 = + 12', { taille: 14, couleur: BLEU, ancre: 'start' });
    g += texte(414, y0 - 14 * k + 30, 'la population augmente', { taille: 12.5, ancre: 'start', italique: true });
    g += ligne(60, y0, 420, y0, { couleur: ENCRE, epaisseur: 1.5 });
    return enveloppe(W, H, g);
  },
  idh: () => {
    const W = 660, H = 290;
    let g = '';
    const crit = [['espérance de vie', 'santé'], ['niveau d\'éducation', 'école'], ['niveau de revenu', 'richesse']];
    crit.forEach(([t, s], i) => { g += boite2(14 + i * 216, 20, 200, 56, `${t}\n(${s})`, { coul: ['vert', 'violet', 'orange'][i], taille: 13.5 }); g += fleche(114 + i * 216, 78, 330, 122, { couleur: AXE, epaisseur: 1.8, pointe: 8 }); });
    g += boite2(230, 124, 200, 46, 'IDH (calculé par l\'ONU)', { coul: 'bleu', taille: 14, gras: true });
    const x0 = 60, w = 540, y = 210;
    g += `<defs><linearGradient id="gidh" x1="0" x2="1"><stop offset="0" stop-color="${ROUGE}"/><stop offset="0.5" stop-color="#e3b341"/><stop offset="1" stop-color="${VERT}"/></linearGradient></defs>`;
    g += `<rect x="${x0}" y="${y}" width="${w}" height="20" rx="4" fill="url(#gidh)"/>`;
    g += texte(x0, y + 40, '0', { taille: 15, gras: true }) + texte(x0 + w, y + 40, '1', { taille: 15, gras: true });
    g += texte(x0 + 4, y - 8, 'conditions de vie difficiles', { taille: 12.5, couleur: ROUGE, ancre: 'start' });
    g += texte(x0 + w - 4, y - 8, 'pays très développé', { taille: 12.5, couleur: VERT, ancre: 'end' });
    g += texte(W / 2, y + 62, 'Plus l\'IDH est proche de 1, plus le pays est développé.', { taille: 13, italique: true });
    return enveloppe(W, H, g);
  },
  science: () => {
    const W = 600, H = 400, cx = 300, cy = 205, R = 140;
    const et = ['des hypothèses', 'des expériences', 'la vérification', 'la publication', 'le débat\nentre pairs'];
    const cols = ['bleu', 'orange', 'vert', 'violet', 'rouge'];
    let g = '';
    const pts = et.map((_, i) => polar(cx, cy, R, (i * 360) / 5));
    pts.forEach(([x, y], i) => {
      const [x2, y2] = pts[(i + 1) % 5];
      const a = Math.atan2(y2 - y, x2 - x);
      g += fleche(x + 70 * Math.cos(a), y + 34 * Math.sin(a), x2 - 70 * Math.cos(a), y2 - 34 * Math.sin(a), { couleur: AXE, epaisseur: 2, pointe: 9 });
    });
    pts.forEach(([x, y], i) => { g += boite2(x - 66, y - 24, 132, 48, et[i], { coul: cols[i], taille: 13.5, gras: true }); });
    g += texte(cx, cy - 8, 'une connaissance', { taille: 13.5, couleur: ATTENUE }) + texte(cx, cy + 10, 'collective', { taille: 13.5, couleur: ATTENUE }) + texte(cx, cy + 28, 'et critique', { taille: 13.5, couleur: ATTENUE });
    return enveloppe(W, H, g);
  },
  sources: () => orga(680, 290, {
    boites: [
      { id: 'ev', x: 10, y: 30, w: 150, h: 56, t: 'un ÉVÉNEMENT', coul: 'gris', taille: 14 },
      { id: 'p', x: 196, y: 20, w: 210, h: 76, t: 'SOURCE PRIMAIRE\ntémoignage direct,\ndocument d\'époque', coul: 'orange', taille: 13.5 },
      { id: 's', x: 444, y: 20, w: 226, h: 76, t: 'SOURCE SECONDAIRE\nanalyse ou commente :\narticle, manuel, étude', coul: 'bleu', taille: 13.5 },
      { id: 'r', x: 150, y: 170, w: 380, h: 96, t: 'Réflexes pour s\'informer\nQui parle ? Quand ? D\'où vient l\'information ?\nCroiser plusieurs sources fiables\net indépendantes.', coul: 'vert', taille: 13.5 },
    ],
    liens: [{ de: 'ev', a: 'p' }, { de: 'p', a: 's' }, { de: 's', a: 'r', coul: 'vert' }],
  }),
  libertes: () => {
    const W = 660, H = 270;
    let g = `<rect x="20" y="40" width="290" height="120" rx="10" fill="${f('bleu')}" stroke="${BLEU}" stroke-width="1.8"/>`;
    g += `<rect x="350" y="40" width="290" height="120" rx="10" fill="${f('vert')}" stroke="${VERT}" stroke-width="1.8"/>`;
    g += texte(165, 92, 'MA LIBERTÉ', { taille: 17, gras: true, couleur: BLEU }) + texte(165, 116, 'agir, penser, m\'exprimer', { taille: 13 });
    g += texte(495, 92, 'LA LIBERTÉ', { taille: 17, gras: true, couleur: VERT }) + texte(495, 112, 'DES AUTRES', { taille: 17, gras: true, couleur: VERT });
    g += `<rect x="318" y="20" width="24" height="160" rx="4" fill="${ROUGE}"/>`;
    g += texte(330, 205, 'la LOI fixe la limite', { taille: 15, gras: true, couleur: ROUGE });
    g += texte(330, 230, 'ex. : la liberté d\'expression ne permet pas l\'injure,', { taille: 13 });
    g += texte(330, 248, 'la diffamation ou l\'incitation à la haine', { taille: 13 });
    return enveloppe(W, H, g);
  },
  athenes: ({ etrangers = 'les métèques\n(étrangers)', citoyens = 'CITOYENS\nhommes adultes nés de père\net de mère athéniens', vote = 'votent les lois à l\'Ecclésia' } = {}) => orga(660, 330, {
    boites: [
      { id: 'h', x: 200, y: 14, w: 260, h: 44, t: 'les habitants d\'Athènes', coul: 'gris', taille: 14, gras: true },
      { id: 'c', x: 14, y: 110, w: 250, h: 76, t: citoyens, coul: 'vert', taille: 13 },
      { id: 'x', x: 330, y: 110, w: 316, h: 40, t: 'EXCLUS de la citoyenneté', coul: 'rouge', taille: 14 },
      { id: 'x1', x: 330, y: 200, w: 96, h: 50, t: 'les femmes', coul: 'rouge', taille: 13 },
      { id: 'x2', x: 440, y: 200, w: 96, h: 50, t: etrangers, coul: 'rouge', taille: 12.5 },
      { id: 'x3', x: 550, y: 200, w: 96, h: 50, t: 'les esclaves', coul: 'rouge', taille: 13 },
    ],
    liens: [{ de: 'h', a: 'c' }, { de: 'h', a: 'x' }, { de: 'x', a: 'x1', coul: 'rouge' }, { de: 'x', a: 'x2', coul: 'rouge' }, { de: 'x', a: 'x3', coul: 'rouge' }],
    notes: [{ x: 139, y: 212, t: `→ ${vote}`, taille: 13, couleur: VERT, gras: true }, { x: 330, y: 300, t: 'Seule une minorité d\'habitants participe à la démocratie athénienne.', taille: 12.5, italique: true }],
  }),
  schisme: () => orga(640, 280, {
    boites: [
      { id: 'c', x: 200, y: 14, w: 240, h: 50, t: 'la chrétienté', coul: 'gris', taille: 15, gras: true },
      { id: 'l', x: 14, y: 170, w: 280, h: 76, t: 'Église CATHOLIQUE (latine)\nà l\'ouest\nRome, autorité du pape', coul: 'bleu', taille: 13.5 },
      { id: 'o', x: 346, y: 170, w: 280, h: 76, t: 'Église ORTHODOXE (byzantine)\nà l\'est\nConstantinople', coul: 'violet', taille: 13.5 },
    ],
    liens: [{ de: 'c', a: 'l', coul: 'bleu' }, { de: 'c', a: 'o', coul: 'violet' }],
    notes: [{ x: 320, y: 120, t: '1054 : le schisme', taille: 15, couleur: ROUGE, gras: true }],
  }),
  totalitarisme: () => {
    const W = 660, H = 360, cx = 330, cy = 180;
    const t = ['un PARTI UNIQUE', 'un CHEF tout-puissant\n(culte de la personnalité)', 'une PROPAGANDE\nomniprésente', 'une POLICE\nPOLITIQUE', 'la TERREUR contre\nles opposants', 'l\'EMBRIGADEMENT\ndès l\'enfance'];
    let g = '';
    const pos = [[cx, 40], [cx + 225, 100], [cx + 225, 262], [cx, 322], [cx - 225, 262], [cx - 225, 100]];
    pos.forEach(([x, y]) => { g += ligne(cx, cy, x, y, { couleur: AXE, epaisseur: 1.8 }); });
    g += boite2(cx - 95, cy - 32, 190, 64, 'RÉGIME\nTOTALITAIRE', { coul: 'rouge', taille: 15, gras: true, plein: true });
    pos.forEach(([x, y], i) => { g += boite2(x - 95, y - 26, 190, 52, t[i], { coul: 'gris', taille: 12.5, gras: true }); });
    return enveloppe(W, H, g);
  },
  // Disposition verticale : sur un téléphone, le schéma garde un texte lisible.
  parcours: () => orga(400, 408, {
    boites: [
      { id: 'a', x: 50, y: 44, w: 300, h: 66, t: '16 ANS\nrecensement en mairie', coul: 'bleu', taille: 16 },
      { id: 'b', x: 50, y: 144, w: 300, h: 86, t: 'ENSUITE\nJournée défense\net citoyenneté (JDC)', coul: 'violet', taille: 16 },
      { id: 'c', x: 50, y: 264, w: 300, h: 66, t: '18 ANS\ndroit de vote', coul: 'vert', taille: 16 },
    ],
    liens: [{ de: 'a', a: 'b' }, { de: 'b', a: 'c' }],
    notes: [
      { x: 200, y: 26, t: 'Le parcours de citoyenneté', taille: 17, couleur: ENCRE, gras: true },
      { x: 200, y: 358, t: 'L\'attestation de la JDC est demandée pour', taille: 14, italique: true },
      { x: 200, y: 378, t: 'certains examens (comme le baccalauréat),', taille: 14, italique: true },
      { x: 200, y: 398, t: 'jusqu\'à 25 ans.', taille: 14, italique: true },
    ],
  }),
  institutionsVe: () => orga(680, 420, {
    boites: [
      { id: 'pr', x: 230, y: 20, w: 220, h: 58, t: 'le PRÉSIDENT\nde la République', coul: 'rouge', taille: 14 },
      { id: 'go', x: 14, y: 168, w: 190, h: 62, t: 'le PREMIER MINISTRE\net le GOUVERNEMENT', coul: 'orange', taille: 12.5 },
      { id: 'pa', x: 420, y: 130, w: 250, h: 172, t: '', coul: 'violet' },
      { id: 'an', x: 430, y: 170, w: 112, h: 74, t: 'Assemblée\nnationale\n(députés)', coul: 'violet', taille: 12.5 },
      { id: 'se', x: 552, y: 170, w: 108, h: 74, t: 'Sénat\n(sénateurs)', coul: 'violet', taille: 12.5 },
      { id: 'ci', x: 200, y: 362, w: 280, h: 46, t: 'les CITOYENS (électeurs)', coul: 'bleu', taille: 14, gras: true },
    ],
    liens: [
      { de: 'ci', a: 'pr', p1: [255, 362], p2: [255, 80], t: 'élisent au suffrage\nuniversel direct\n(depuis 1962)', coul: 'bleu', ly: 70 },
      { de: 'ci', a: 'an', p1: [440, 362], p2: [486, 246], t: 'élisent\nles députés', coul: 'bleu', lx: 52, ly: 26 },
      { de: 'pr', a: 'go', p1: [230, 49], p2: [130, 166], t: 'nomme', coul: 'rouge', lx: -30 },
      { de: 'pr', a: 'an', p1: [440, 80], p2: [480, 168], t: 'peut dissoudre', coul: 'rouge', pointilles: true, lx: 68, ly: -26 },
      { de: 'an', a: 'go', p1: [430, 207], p2: [206, 207], t: 'peut le renverser\n(motion de censure)', coul: 'violet', lx: 30, ly: -26 },
    ],
    notes: [
      { x: 545, y: 154, t: 'le PARLEMENT', taille: 14, couleur: VIOLET, gras: true },
      { x: 545, y: 268, t: 'vote les lois', taille: 13.5, couleur: VIOLET, gras: true },
      { x: 600, y: 292, t: 'Sénat : suffrage indirect', taille: 11.5, couleur: VIOLET, italique: true },
    ],
  }),
  ruraux: () => {
    const W = 680, H = 250;
    let g = boite2(10, 70, 100, 70, 'la VILLE', { coul: 'rouge', taille: 15, gras: true });
    const z = [
      ['campagnes proches\ndes villes', 'périurbanisation :\nnouveaux habitants', 'orange'],
      ['campagnes\nagricoles', 'agriculture modernisée,\ntourisme vert', 'vert'],
      ['campagnes isolées', 'déprise : perte\nd\'habitants et d\'activités', 'gris'],
    ];
    z.forEach(([t, s], i) => {
      const x = 130 + i * 182;
      g += boite2(x, 50, 170, 110, '', { coul: z[i][2] });
      g += texte(x + 85, 80, t, { taille: 14, gras: true, couleur: c(z[i][2]) });
      g += texte(x + 85, 126, s, { taille: 12.5 });
    });
    g += fleche(130, 196, 670, 196, { couleur: ATTENUE, epaisseur: 2.2, pointe: 11 });
    g += texte(400, 222, 'de plus en plus loin de la ville', { taille: 13, couleur: ATTENUE, italique: true });
    g += texte(400, 30, 'Les espaces ruraux : schéma de principe', { taille: 14, gras: true });
    return enveloppe(W, H, g);
  },
  mondialisation: () => {
    const W = 680, H = 400;
    let g = `<rect x="10" y="10" width="440" height="380" rx="12" fill="#f6f9fc" stroke="${AXE}"/>`;
    g += `<path d="M 10 300 Q 160 270 300 320 T 450 300 L 450 390 L 10 390 Z" fill="#dcecfb"/>`;
    g += texte(330, 372, 'océan', { taille: 12.5, couleur: BLEU, italique: true });
    const V = [[90, 90], [360, 80], [230, 250]];
    const M = [[200, 50], [60, 200], [390, 200], [330, 290], [120, 290]];
    // Flux entre villes mondiales
    const flux = (a, b, ep, col) => { const d = Math.hypot(b[0] - a[0], b[1] - a[1]); const ux = (b[0] - a[0]) / d, uy = (b[1] - a[1]) / d; return fleche(a[0] + ux * 30, a[1] + uy * 30, b[0] - ux * 30, b[1] - uy * 30, { couleur: col, epaisseur: ep, pointe: 12 }) + fleche(b[0] - ux * 30, b[1] - uy * 30, a[0] + ux * 30, a[1] + uy * 30, { couleur: col, epaisseur: ep, pointe: 12 }); };
    g += flux(V[0], V[1], 5, ROUGE) + flux(V[1], V[2], 5, ROUGE) + flux(V[2], V[0], 5, ROUGE);
    for (const [x, y] of M) {
      let best = V[0], dm = 1e9;
      for (const v of V) { const d = Math.hypot(v[0] - x, v[1] - y); if (d < dm) { dm = d; best = v; } }
      const ux = (best[0] - x) / dm, uy = (best[1] - y) / dm;
      g += fleche(x + ux * 14, y + uy * 14, best[0] - ux * 30, best[1] - uy * 30, { couleur: ORANGE, epaisseur: 2.2, pointe: 9 });
    }
    for (const [x, y] of V) g += cercle(x, y, 24, { couleur: ROUGE, fond: ROUGE, epaisseur: 1 });
    for (const [x, y] of M) g += cercle(x, y, 11, { couleur: ORANGE, fond: ORANGE, epaisseur: 1 });
    // Espace à l'écart
    g += cercle(250, 160, 30, { couleur: ATTENUE, fond: '#e6e9ed', epaisseur: 1.5 });
    g += texte(250, 165, 'à l\'écart', { taille: 11.5, couleur: ATTENUE, gras: true });
    // Légende
    const lx = 466;
    g += texte(lx, 34, 'Légende', { taille: 14, gras: true, ancre: 'start' });
    g += cercle(lx + 12, 64, 12, { couleur: ROUGE, fond: ROUGE }) + texte(lx + 32, 60, 'ville mondiale', { taille: 13, ancre: 'start' }) + texte(lx + 32, 76, '(commandement)', { taille: 12, couleur: ATTENUE, ancre: 'start' });
    g += cercle(lx + 12, 104, 7, { couleur: ORANGE, fond: ORANGE }) + texte(lx + 32, 109, 'autre métropole', { taille: 13, ancre: 'start' });
    g += fleche(lx, 138, lx + 28, 138, { couleur: ROUGE, epaisseur: 4, pointe: 10 }) + texte(lx + 36, 134, 'flux majeurs', { taille: 13, ancre: 'start' });
    g += texte(lx + 36, 150, 'entre villes mondiales', { taille: 12, couleur: ATTENUE, ancre: 'start' });
    g += fleche(lx, 176, lx + 28, 176, { couleur: ORANGE, epaisseur: 2, pointe: 8 }) + texte(lx + 36, 180, 'flux secondaires', { taille: 13, ancre: 'start' });
    g += cercle(lx + 12, 210, 10, { couleur: ATTENUE, fond: '#e6e9ed', epaisseur: 1.5 }) + texte(lx + 32, 206, 'espace à l\'écart', { taille: 13, ancre: 'start' }) + texte(lx + 32, 222, '(enclavé, rural isolé)', { taille: 12, couleur: ATTENUE, ancre: 'start' });
    g += texte(lx, 262, 'Les flux : marchandises,', { taille: 12.5, ancre: 'start' }) + texte(lx, 279, 'capitaux, informations,', { taille: 12.5, ancre: 'start' }) + texte(lx, 296, 'personnes.', { taille: 12.5, ancre: 'start' });
    g += texte(lx, 330, 'Schéma de principe', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' }) + texte(lx, 346, '(ce n\'est pas une carte)', { taille: 12, couleur: ATTENUE, italique: true, ancre: 'start' });
    return enveloppe(W, H, g);
  },
};

// ---------------------------------------------------------------------------
// Frises (dates tirées des fiches ; d(a, m, j) place un jour précis sur l'axe)
// ---------------------------------------------------------------------------
const CUM = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const d = (a, m = 1, j = 1) => Math.round((a + (CUM[m - 1] + j - 1) / 365) * 1000) / 1000;

const FRISES = {
  gaulois: {
    debut: -300, fin: 300, ticks: [-300, -200, -100, 1, 100, 200, 300], lib: 'moins',
    periodes: [
      { debut: -300, fin: -52, t: 'la Gaule indépendante (les Gaulois)', coul: 'vert', ouvertG: true },
      { debut: -52, fin: 300, t: 'la Gaule romaine (les Gallo-Romains)', coul: 'rouge', ouvertD: true },
    ],
    evenements: [{ annee: -52, t: '−52 : Jules César bat\nVercingétorix à Alésia', niv: 0 }],
  },
  prehistoire: {
    debut: -20000, fin: 2026, ticks: [-20000, -15000, -10000, -5000, 1], lib: 'moins',
    periodes: [
      { debut: -20000, fin: -10000, t: 'Paléolithique', coul: 'vert', ouvertG: true },
      { debut: -10000, fin: -3300, t: 'Néolithique', coul: 'orange' },
      { debut: -3300, fin: 2026, t: 'Histoire', coul: 'bleu' },
    ],
    evenements: [
      { annee: -15000, t: 'Lascaux : peintures\n(il y a environ 17 000 ans)', niv: 0 },
      { annee: -10000, t: 'vers −10 000 : agriculture\net élevage', niv: 1 },
      { annee: -3300, t: 'vers −3300 :\ninvention de l\'écriture', niv: 0 },
      { annee: 2026, t: 'aujourd\'hui', niv: 1, coul: 'gris' },
    ],
  },
  moyenAge: {
    debut: 200, fin: 1700, pas: 100, lib: 'annee',
    periodes: [
      { debut: 200, fin: 476, t: 'Antiquité', coul: 'orange', ouvertG: true },
      { debut: 476, fin: 1492, t: 'le Moyen Âge (environ 1 000 ans)', coul: 'violet' },
      { debut: 1492, fin: 1700, t: 'Temps modernes', coul: 'vert', ouvertD: true },
    ],
    evenements: [
      { annee: 476, t: 'vers 476 : fin de l\'Empire\nromain d\'Occident', niv: 0 },
      { annee: 1492, t: '1492 : Christophe Colomb\natteint l\'Amérique', niv: 0 },
    ],
  },
  decouvertes: {
    debut: 1440, fin: 1530, pas: 10, lib: 'annee',
    evenements: [
      { annee: 1450, t: 'vers 1450 : imprimerie\nde Gutenberg', niv: 0 },
      { annee: d(1492, 10, 12), t: '1492 : Christophe Colomb\natteint l\'Amérique', niv: 0, ancre: 'end' },
      { annee: d(1498, 5, 20), t: '1498 : Vasco de Gama\natteint l\'Inde', niv: 1, ancre: 'start' },
      { annee: d(1519, 9, 20), fin: d(1522, 9, 6), t: '1519-1522 : premier tour du\nmonde (expédition de Magellan)', niv: 2, ancre: 'end' },
    ],
  },
  republiqueCM2: {
    debut: 1780, fin: 1970, pas: 20, lib: 'annee',
    periodes: [{ debut: d(1958, 10, 4), fin: 1970, t: 'Ve République', coul: 'bleu', ouvertD: true }],
    evenements: [
      { annee: d(1792, 9, 21), t: '1792 : Ire République', niv: 0 },
      { annee: 1848, t: '1848 : suffrage\nuniversel masculin', niv: 0 },
      { annee: d(1881, 6, 16), fin: d(1882, 3, 28), t: '1881-1882 : école gratuite,\nlaïque et obligatoire', niv: 1, ancre: 'end' },
      { annee: d(1905, 12, 9), t: '1905 : séparation des\nÉglises et de l\'État', niv: 2 },
      { annee: d(1944, 4, 21), t: '1944 : vote\ndes femmes', niv: 0, ancre: 'end' },
      { annee: d(1958, 10, 4), t: '1958 : Ve République', niv: 1, ancre: 'end' },
    ],
  },
  revolutionCM2: {
    debut: 1785, fin: 1818, pas: 5, lib: 'annee',
    periodes: [
      { debut: 1785, fin: d(1792, 9, 21), t: 'royauté', coul: 'violet', ouvertG: true },
      { debut: d(1792, 9, 21), fin: d(1804, 5, 18), t: 'la République', coul: 'vert' },
      { debut: d(1804, 5, 18), fin: d(1815, 6, 18), t: 'l\'Empire', coul: 'rouge' },
    ],
    evenements: [
      { annee: d(1789, 7, 14), t: '1789 : prise de la Bastille,\nDéclaration des droits', niv: 1 },
      { annee: d(1792, 9, 21), fin: d(1793, 1, 21), t: '1792 : Ire République ;\n1793 : mort de Louis XVI', niv: 0, ancre: 'start' },
      { annee: d(1804, 12, 2), t: '1804 : Napoléon\nsacré empereur', niv: 0 },
      { annee: d(1815, 6, 18), t: '1815 : Waterloo', niv: 0 },
    ],
  },
  revolution4e: {
    debut: 1787, fin: 1817, pas: 2, lib: 'annee',
    periodes: [
      { debut: d(1792, 9, 21), fin: d(1804, 5, 18), t: 'Ire République', coul: 'vert' },
      { debut: d(1804, 5, 18), fin: d(1815, 6, 18), t: 'Empire (Napoléon Ier)', coul: 'rouge' },
      { debut: d(1791, 9, 3), fin: d(1792, 9, 21), t: 'monarchie constitutionnelle', coul: 'orange', rang: 1, tx: 1793.2 },
      { debut: d(1799, 11, 9), fin: d(1804, 5, 18), t: 'Consulat', coul: 'bleu', rang: 1 },
      { debut: 1787, fin: d(1789, 7, 14), t: 'monarchie absolue', coul: 'violet', ouvertG: true, rang: 2, dessus: true },
      { debut: d(1793, 9, 5), fin: d(1794, 7, 27), t: 'la Terreur', coul: 'gris', rang: 2, tx: 1795.6 },
    ],
    evenements: [
      { annee: d(1789, 7, 14), fin: d(1789, 8, 26), t: '1789 : Bastille (14 juillet), fin des\nprivilèges (4 août), DDHC (26 août)', niv: 2, ancre: 'start' },
      { annee: d(1792, 9, 21), fin: d(1793, 1, 21), t: '1792 : Ire République ;\n1793 : exécution de Louis XVI', niv: 1, ancre: 'start' },
      { annee: d(1799, 11, 9), t: '1799 : coup\nd\'État', niv: 0, ancre: 'start' },
      { annee: d(1804, 12, 2), t: '1804 : Napoléon Ier\nempereur', niv: 0, ancre: 'start' },
      { annee: d(1815, 6, 18), t: '1815 : Waterloo', niv: 0 },
    ],
  },
  revolution1re: {
    debut: 1787, fin: 1817, pas: 2, lib: 'annee',
    periodes: [
      { debut: d(1792, 9, 21), fin: d(1804, 5, 18), t: 'Ire République', coul: 'vert' },
      { debut: d(1804, 5, 18), fin: d(1815, 6, 18), t: 'Empire (Napoléon Ier)', coul: 'rouge' },
      { debut: d(1791, 9, 3), fin: d(1792, 9, 21), t: 'monarchie constitutionnelle', coul: 'orange', rang: 1, tx: 1793.2 },
      { debut: d(1799, 11, 9), fin: d(1804, 5, 18), t: 'Consulat', coul: 'bleu', rang: 1 },
      { debut: 1787, fin: d(1789, 7, 14), t: 'monarchie absolue', coul: 'violet', ouvertG: true, rang: 2, dessus: true },
      { debut: d(1793, 9, 5), fin: d(1794, 7, 27), t: 'la Terreur', coul: 'gris', rang: 2, tx: 1795.6 },
    ],
    evenements: [
      { annee: d(1789, 5, 5), fin: d(1789, 8, 26), t: '1789 : États généraux (5 mai), Bastille\n(14 juillet), DDHC (26 août)', niv: 2, ancre: 'start' },
      { annee: d(1792, 9, 21), fin: d(1793, 1, 21), t: '1792 : Ire République ;\n1793 : exécution de Louis XVI', niv: 1, ancre: 'start' },
      { annee: d(1799, 11, 9), t: '18 Brumaire\n(1799)', niv: 0, ancre: 'start' },
      { annee: d(1804, 12, 2), t: '1804 : Napoléon\nsacré empereur', niv: 0, ancre: 'start' },
      { annee: d(1815, 6, 18), t: '1815 : Waterloo', niv: 0 },
    ],
  },
  islam: {
    debut: 600, fin: 760, pas: 20, lib: 'annee',
    periodes: [
      { debut: 601, fin: 700, t: 'VIIe siècle : naissance de l\'islam', coul: 'vert', rang: 1 },
      { debut: 632, fin: 760, t: 'conquêtes (VIIe-VIIIe siècles)', coul: 'orange', ouvertD: true },
    ],
    evenements: [
      { annee: 622, t: '622 : l\'Hégire\n(début du calendrier musulman)', niv: 1 },
      { annee: 632, t: '632 : mort de Mahomet', niv: 0, ancre: 'start' },
      { annee: 732, t: '732 : bataille de Poitiers', niv: 0 },
    ],
  },
  roiVille: {
    debut: 950, fin: 1350, pas: 50, lib: 'annee',
    periodes: [
      { debut: 987, fin: 1350, t: 'les rois capétiens', coul: 'bleu', ouvertD: true },
      { debut: 1001, fin: 1300, t: 'essor des villes et du commerce (XIe-XIIIe s.)', coul: 'vert', rang: 1 },
      { debut: 1101, fin: 1300, t: 'cathédrales gothiques (XIIe-XIIIe s.)', coul: 'violet', rang: 2 },
    ],
    evenements: [
      { annee: 987, t: '987 : Hugues Capet roi', niv: 0 },
      { annee: d(1214, 7, 27), t: '1214 : victoire de Philippe\nAuguste à Bouvines', niv: 1 },
    ],
  },
  renaissance: {
    debut: 1400, fin: 1600, pas: 25, lib: 'annee',
    periodes: [{ debut: 1401, fin: 1600, t: 'Renaissance et humanisme (XVe-XVIe siècles)', coul: 'violet' }],
    evenements: [
      { annee: 1450, t: 'vers 1450 : imprimerie\n(Gutenberg)', niv: 0 },
      { annee: d(1492, 10, 12), t: '1492 : Colomb\natteint l\'Amérique', niv: 1 },
      { annee: d(1517, 10, 31), t: '1517 : Luther lance la\nRéforme protestante', niv: 0 },
    ],
  },
  esclavage: {
    debut: 1680, fin: 1860, pas: 20, lib: 'annee',
    periodes: [{ debut: 1701, fin: 1800, t: 'XVIIIe siècle : essor du commerce triangulaire, Lumières', coul: 'violet' }],
    evenements: [
      { annee: 1685, t: '1685 : Code noir', niv: 0 },
      { annee: d(1794, 2, 4), t: '1794 : première\nabolition', niv: 0, ancre: 'end' },
      { annee: d(1802, 5, 20), t: '1802 : esclavage\nrétabli', niv: 1, ancre: 'start' },
      { annee: d(1848, 4, 27), t: '1848 : abolition\ndéfinitive', niv: 0 },
    ],
  },
  christianisme: {
    debut: 1, fin: 450, ticks: [1, 100, 200, 300, 400], lib: 'avjc',
    periodes: [{ debut: 1, fin: 100, t: 'Ier siècle : naissance du christianisme en Judée', coul: 'violet' }],
    evenements: [
      { annee: 313, t: '313 : Constantin autorise\nle christianisme', niv: 0 },
      { annee: 375, fin: 400, t: 'fin du IVe siècle : religion\nofficielle de l\'Empire romain', niv: 1 },
    ],
  },
  ecriture: {
    debut: -4000, fin: 1, ticks: [-4000, -3000, -2000, -1000, 1], lib: 'avjc',
    periodes: [
      { debut: -4000, fin: -3300, t: 'Préhistoire', coul: 'vert', ouvertG: true },
      { debut: -3300, fin: 1, t: 'Histoire (l\'Antiquité)', coul: 'bleu', ouvertD: true },
    ],
    evenements: [{ annee: -3300, t: 'vers 3300 av. J.-C. : premières cités\net invention de l\'écriture', niv: 0 }],
  },
  rome: {
    debut: -800, fin: 50, ticks: [-800, -600, -400, -200, 1], lib: 'avjc',
    periodes: [
      { debut: -753, fin: -509, t: 'les rois', coul: 'violet' },
      { debut: -509, fin: -27, t: 'la République', coul: 'vert' },
      { debut: -27, fin: 50, t: 'l\'Empire', coul: 'rouge', ouvertD: true },
    ],
    evenements: [
      { annee: -753, t: '753 av. J.-C. : fondation\nlégendaire de Rome', niv: 0 },
      { annee: -509, t: '509 av. J.-C. : début\nde la République', niv: 1 },
      { annee: -52, t: '52 av. J.-C. : Alésia', niv: 0, ancre: 'end' },
      { annee: -27, t: '27 av. J.-C. : Auguste,\npremier empereur', niv: 1, ancre: 'end' },
    ],
  },
  antique: {
    debut: -800, fin: 300, ticks: [-800, -600, -400, -200, 1, 200], lib: 'avjc',
    periodes: [
      { debut: -509, fin: -27, t: 'République romaine', coul: 'vert' },
      { debut: -27, fin: 300, t: 'Empire romain', coul: 'rouge', ouvertD: true },
      { debut: -500, fin: -401, t: 'Ve s. av. J.-C. : apogée d\'Athènes', coul: 'bleu', rang: 1 },
    ],
    evenements: [
      { annee: -753, t: '753 av. J.-C. : fondation\ntraditionnelle de Rome', niv: 0 },
      { annee: -508, fin: -507, t: '508-507 av. J.-C. :\nréformes de Clisthène', niv: 1 },
      { annee: -27, t: '27 av. J.-C. : Auguste,\npremier empereur', niv: 0 },
      { annee: 212, t: '212 : édit\nde Caracalla', niv: 1 },
    ],
  },
  croisades: {
    debut: 1000, fin: 1150, pas: 25, lib: 'annee',
    periodes: [{ debut: d(1095, 11, 27), fin: 1150, t: 'les croisades', coul: 'orange', ouvertD: true }],
    evenements: [
      { annee: 1054, t: '1054 : schisme entre\ncatholiques et orthodoxes', niv: 0 },
      { annee: d(1095, 11, 27), t: '1095 : le pape lance\nles croisades', niv: 1, ancre: 'end' },
      { annee: d(1099, 7, 15), t: '1099 : prise\nde Jérusalem', niv: 2, ancre: 'start' },
    ],
  },
  revolutions2de: {
    debut: 1680, fin: 1800, pas: 20, lib: 'annee',
    periodes: [{ debut: 1701, fin: 1800, t: 'les Lumières (XVIIIe siècle)', coul: 'violet' }],
    evenements: [
      { annee: 1689, t: '1689 : Bill of Rights', niv: 0 },
      { annee: d(1776, 7, 4), t: '4 juillet 1776 : indépendance\ndes États-Unis', niv: 0, ancre: 'end' },
      { annee: d(1787, 9, 17), t: '1787 : Constitution\ndes États-Unis', niv: 1, ancre: 'end' },
      { annee: d(1789, 7, 14), t: '1789 : Révolution\nfrançaise', niv: 2, ancre: 'start' },
    ],
  },
  religions1re: {
    debut: 1540, fin: 1920, ticks: [1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900], lib: 'annee',
    periodes: [{ debut: d(1598, 4, 30), fin: d(1685, 10, 18), t: 'édit de Nantes', coul: 'vert' }],
    evenements: [
      { annee: d(1555, 9, 25), t: '1555 : paix\nd\'Augsbourg', niv: 0 },
      { annee: d(1598, 4, 30), t: '1598 : édit\nde Nantes', niv: 1 },
      { annee: d(1685, 10, 18), t: '1685 : révocation\nde l\'édit', niv: 0 },
      { annee: d(1801, 7, 15), t: '1801 : Concordat', niv: 0 },
      { annee: d(1905, 12, 9), t: '1905 : loi de\nséparation', niv: 1 },
    ],
  },
  puissances: {
    debut: 1940, fin: 2030, pas: 10, lib: 'annee',
    periodes: [
      { debut: 1947, fin: d(1991, 12, 26), t: 'guerre froide : monde bipolaire', coul: 'rouge' },
      { debut: d(1991, 12, 26), fin: 2030, t: 'hyperpuissance, puis multipolarité', coul: 'bleu', ouvertD: true },
    ],
    evenements: [
      { annee: d(1945, 5, 8), t: '1945 : fin de la Seconde\nGuerre mondiale', niv: 1, ancre: 'start' },
      { annee: 1947, t: '1947 : début de la\nguerre froide', niv: 0, ancre: 'start' },
      { annee: d(1991, 12, 26), t: '1991 : disparition\nde l\'URSS', niv: 0 },
      { annee: 2024, t: '2024 : BRICS élargis', niv: 1 },
    ],
  },
  information: {
    debut: 1400, fin: 2030, pas: 100, lib: 'annee',
    periodes: [
      { debut: 1601, fin: 1900, t: 'presse écrite (XVIIe-XIXe s.)', coul: 'violet' },
      { debut: 1801, fin: 2000, t: 'télégraphe puis radio (XIXe-XXe s.)', coul: 'orange', rang: 1 },
      { debut: 1950, fin: 2030, t: 'télévision (milieu du XXe s.)', coul: 'vert', rang: 2, ouvertD: true },
    ],
    evenements: [
      { annee: 1450, t: 'vers 1450 : imprimerie\n(Gutenberg)', niv: 0 },
      { annee: d(1881, 7, 29), t: '1881 : loi sur la\nliberté de la presse', niv: 0 },
      { annee: 1990, fin: 2026, t: 'depuis les années 1990 :\nInternet, réseaux sociaux', niv: 1 },
    ],
  },
  nations: {
    debut: 1845, fin: 1875, pas: 5, lib: 'annee',
    evenements: [
      { annee: 1848.15, t: '1848 : « printemps\ndes peuples »', niv: 0 },
      { annee: d(1861, 3, 17), t: '1861 : royaume\nd\'Italie proclamé', niv: 0 },
      { annee: d(1871, 1, 18), t: '1871 : Empire allemand proclamé ;\nRome capitale de l\'Italie unifiée', niv: 1 },
    ],
  },
  gm1_3e: {
    debut: 1914, fin: 1919.7, ticks: [1914, 1915, 1916, 1917, 1918, 1919], lib: 'annee', hNiv: 36,
    periodes: [
      { debut: d(1914, 8, 3), fin: d(1914, 11, 15), t: 'mouvement', coul: 'orange' },
      { debut: d(1914, 11, 15), fin: d(1918, 3, 21), t: 'guerre de position (tranchées)', coul: 'gris' },
      { debut: d(1918, 3, 21), fin: d(1918, 11, 11), t: 'mouvement', coul: 'orange' },
      { debut: d(1916, 2, 21), fin: d(1916, 12, 18), t: 'Verdun', coul: 'rouge', rang: 1 },
      { debut: d(1917, 3, 8), fin: d(1917, 11, 7), t: 'révolutions russes', coul: 'violet', rang: 1 },
      { debut: d(1916, 7, 1), fin: d(1916, 11, 18), t: 'la Somme', coul: 'rouge', rang: 2 },
    ],
    evenements: [
      { annee: d(1914, 6, 28), fin: d(1914, 8, 3), t: '28 juin 1914 : attentat de Sarajevo ;\naoût 1914 : entrée en guerre', niv: 2, ancre: 'start' },
      { annee: d(1914, 9, 6), t: 'sept. 1914 :\nla Marne', niv: 1, ancre: 'start' },
      { annee: d(1915, 4, 24), t: '1915 : début du\ngénocide des Arméniens', niv: 0, ancre: 'start' },
      { annee: d(1917, 4, 6), t: 'avril 1917 : entrée en\nguerre des États-Unis', niv: 0, ancre: 'start' },
      { annee: d(1918, 11, 11), t: '11 nov. 1918 :\narmistice', niv: 0 },
      { annee: d(1919, 6, 28), t: '28 juin 1919 : traité\nde Versailles', niv: 1, ancre: 'end' },
    ],
  },
  gm1_1re: {
    debut: 1914, fin: 1919.7, ticks: [1914, 1915, 1916, 1917, 1918, 1919], lib: 'annee',
    periodes: [
      { debut: d(1914, 8, 3), fin: d(1918, 11, 11), t: 'la Première Guerre mondiale', coul: 'gris' },
      { debut: d(1916, 2, 21), fin: d(1916, 12, 18), t: 'Verdun (1916)', coul: 'rouge', rang: 1 },
    ],
    evenements: [
      { annee: d(1914, 8, 3), t: '1914 : début\nde la guerre', niv: 0 },
      { annee: d(1917, 4, 6), t: '1917 : entrée en guerre\ndes États-Unis', niv: 1 },
      { annee: d(1918, 11, 11), t: '11 novembre 1918 :\narmistice', niv: 0, ancre: 'end' },
      { annee: d(1919, 6, 28), t: '28 juin 1919 : traité\nde Versailles', niv: 1, ancre: 'end' },
    ],
  },
  sgm3e: {
    debut: 1939.4, fin: 1946, ticks: [1940, 1941, 1942, 1943, 1944, 1945], lib: 'annee', hNiv: 36,
    periodes: [
      { debut: d(1939, 9, 1), fin: d(1942, 11, 8), t: 'victoires de l\'Axe', coul: 'gris' },
      { debut: d(1943, 2, 2), fin: d(1945, 9, 2), t: 'reculs de l\'Axe, victoire des Alliés', coul: 'bleu' },
      { debut: d(1942, 7, 17), fin: d(1943, 2, 2), t: 'Stalingrad', coul: 'rouge', rang: 1 },
    ],
    evenements: [
      { annee: d(1939, 9, 1), t: '1er sept. 1939 :\ninvasion de la Pologne', niv: 1, ancre: 'start' },
      { annee: d(1940, 6, 18), t: 'juin 1940 : défaite,\nappel du 18 juin', niv: 0 },
      { annee: d(1941, 6, 22), fin: d(1941, 12, 7), t: '1941 : invasion de l\'URSS (juin),\nPearl Harbor (décembre)', niv: 1, ancre: 'start' },
      { annee: d(1942, 7, 16), t: 'juillet 1942 : rafle\ndu Vél d\'Hiv', niv: 0, ancre: 'start' },
      { annee: d(1944, 6, 6), t: '6 juin 1944 :\ndébarquement', niv: 0, ancre: 'start' },
      { annee: d(1945, 5, 8), t: '8 mai 1945 :\ncapitulation\nallemande', niv: 1, ancre: 'end' },
      { annee: d(1945, 8, 6), fin: d(1945, 9, 2), t: 'août 1945 : bombes atomiques ;\n2 sept. : capitulation du Japon', niv: 3, ancre: 'end' },
    ],
  },
  sgmTle: {
    debut: 1939.4, fin: 1946, ticks: [1940, 1941, 1942, 1943, 1944, 1945], lib: 'annee', hNiv: 36,
    periodes: [
      { debut: d(1939, 9, 1), fin: d(1942, 11, 8), t: 'victoires de l\'Axe', coul: 'gris' },
      { debut: d(1943, 2, 2), fin: d(1945, 9, 2), t: 'reculs de l\'Axe, victoire des Alliés', coul: 'bleu' },
    ],
    evenements: [
      { annee: d(1939, 9, 1), t: '1er sept. 1939 :\ninvasion de la Pologne', niv: 1, ancre: 'start' },
      { annee: d(1940, 6, 18), t: 'juin 1940 : appel du\n18 juin, armistice', niv: 0 },
      { annee: d(1941, 6, 22), t: '22 juin 1941 :\ninvasion de l\'URSS', niv: 2, ancre: 'start' },
      { annee: d(1941, 12, 7), t: '7 déc. 1941 :\nPearl Harbor', niv: 0, ancre: 'start' },
      { annee: d(1943, 2, 2), t: 'févr. 1943 :\nStalingrad', niv: 1, ancre: 'end' },
      { annee: d(1943, 5, 27), t: '1943 :\nCNR', niv: 0, ancre: 'start' },
      { annee: d(1944, 6, 6), t: '6 juin 1944 :\ndébarquement', niv: 0, ancre: 'start' },
      { annee: d(1945, 5, 8), t: '8 mai 1945 :\ncapitulation\nallemande', niv: 1, ancre: 'end' },
      { annee: d(1945, 8, 6), fin: d(1945, 9, 2), t: '6 et 9 août 1945 : Hiroshima, Nagasaki ;\n2 sept. : capitulation du Japon', niv: 3, ancre: 'end' },
    ],
  },
  totalitarismes: {
    debut: 1917, fin: 1940, pas: 2, lib: 'annee',
    periodes: [
      { debut: d(1922, 10, 28), fin: 1940, t: 'Italie : Mussolini au pouvoir', coul: 'vert', ouvertD: true },
      { debut: 1926, fin: 1940, t: 'URSS : Staline au pouvoir (fin des années 1920)', coul: 'rouge', ouvertG: true, ouvertD: true, rang: 1, tx: 1932 },
      { debut: d(1933, 1, 30), fin: 1940, t: 'Allemagne : Hitler', coul: 'encre', ouvertD: true, rang: 2 },
    ],
    evenements: [
      { annee: d(1922, 10, 28), t: 'oct. 1922 : marche\nsur Rome', niv: 0 },
      { annee: d(1933, 1, 30), t: 'janv. 1933 : Hitler\nchancelier', niv: 0 },
      { annee: d(1935, 9, 15), t: '1935 : lois\nde Nuremberg', niv: 1 },
    ],
  },
  france1945: {
    debut: 1940, fin: 1990, pas: 10, lib: 'annee',
    periodes: [
      { debut: d(1946, 10, 27), fin: d(1958, 10, 4), t: 'IVe République', coul: 'violet' },
      { debut: d(1958, 10, 4), fin: 1990, t: 'Ve République', coul: 'bleu', ouvertD: true },
      { debut: 1945, fin: 1977, t: 'Trente Glorieuses (de 1945 aux années 1970)', coul: 'vert', ouvertD: true, rang: 1 },
    ],
    evenements: [
      { annee: d(1944, 4, 21), t: '1944 : droit de vote\ndes femmes', niv: 0 },
      { annee: d(1958, 10, 4), t: '1958 : Ve République\n(de Gaulle)', niv: 1, ancre: 'end' },
      { annee: d(1962, 3, 18), fin: d(1962, 10, 28), t: '1962 : fin de la guerre d\'Algérie ;\nprésident élu au suffrage universel', niv: 2, ancre: 'start' },
      { annee: d(1968, 5, 15), t: 'mai 1968', niv: 0 },
      { annee: d(1981, 5, 10), t: '1981 : première\nalternance (Mitterrand)', niv: 0 },
    ],
  },
  europe: {
    debut: 1950, fin: 2025, pas: 10, lib: 'annee',
    periodes: [
      { debut: d(1957, 3, 25), fin: d(1992, 2, 7), t: 'CEE (Communauté économique européenne)', coul: 'violet' },
      { debut: d(1992, 2, 7), fin: 2025, t: 'Union européenne', coul: 'bleu', ouvertD: true },
    ],
    evenements: [
      { annee: d(1957, 3, 25), t: '1957 : traité de Rome', niv: 0 },
      { annee: d(1992, 2, 7), t: '1992 : traité\nde Maastricht', niv: 0 },
      { annee: d(2002, 1, 1), t: '2002 : l\'euro\nen circulation', niv: 1 },
      { annee: d(2020, 1, 31), t: '2020 : Brexit\n(27 États membres)', niv: 0 },
    ],
  },
  monde1990: {
    debut: 1955, fin: 2010, pas: 5, lib: 'annee',
    periodes: [
      { debut: 1955, fin: d(1991, 12, 26), t: 'guerre froide : monde bipolaire', coul: 'rouge', ouvertG: true },
      { debut: d(1991, 12, 26), fin: 2010, t: 'vers un monde multipolaire', coul: 'vert', ouvertD: true },
      { debut: d(1958, 10, 4), fin: 2010, t: 'en France : la Ve République', coul: 'bleu', ouvertD: true, rang: 1 },
    ],
    evenements: [
      { annee: d(1958, 10, 4), t: '1958 : Ve République', niv: 0 },
      { annee: d(1962, 10, 28), t: '1962 : président élu au\nsuffrage universel direct', niv: 1 },
      { annee: d(1991, 12, 26), fin: d(1992, 2, 7), t: '1991 : fin de l\'URSS ;\n1992 : traité de Maastricht (UE)', niv: 0, ancre: 'end' },
      { annee: d(2000, 9, 24), t: '2000 : quinquennat', niv: 1, ancre: 'end' },
      { annee: d(2002, 1, 1), t: '2002 : l\'euro', niv: 0, ancre: 'start' },
    ],
  },
  decolonisation: {
    debut: 1944, fin: 1966, pas: 2, lib: 'annee',
    periodes: [{ debut: d(1954, 11, 1), fin: d(1962, 3, 18), t: 'guerre d\'Algérie', coul: 'rouge' }],
    evenements: [
      { annee: d(1947, 8, 15), t: '1947 : indépendance\nde l\'Inde', niv: 0 },
      { annee: d(1955, 4, 18), t: '1955 : conférence\nde Bandung', niv: 1 },
      { annee: 1960.5, t: '1960 : « année\nde l\'Afrique »', niv: 0 },
      { annee: d(1962, 7, 5), t: '1962 : indépendance\nde l\'Algérie', niv: 2 },
    ],
  },
  vote: {
    debut: 1840, fin: 1980, pas: 20, lib: 'annee',
    evenements: [
      { annee: 1848.2, t: '1848 : suffrage\nuniversel masculin', niv: 0 },
      { annee: d(1944, 4, 21), t: '1944 : droit de vote\ndes femmes', niv: 0 },
      { annee: d(1974, 7, 5), t: '1974 : majorité\nà 18 ans', niv: 1 },
    ],
  },
  guerreFroide: {
    debut: 1945, fin: 1993, pas: 5, lib: 'annee',
    periodes: [
      { debut: 1947, fin: d(1991, 12, 26), t: 'la guerre froide', coul: 'rouge' },
      { debut: d(1948, 6, 24), fin: d(1949, 5, 12), t: 'blocus de Berlin', coul: 'violet', rang: 1, tx: 1951 },
      { debut: d(1961, 8, 13), fin: d(1989, 11, 9), t: 'le mur de Berlin', coul: 'violet', rang: 1 },
      { debut: d(1950, 6, 25), fin: d(1953, 7, 27), t: 'guerre de Corée', coul: 'orange', rang: 2, tx: 1954 },
    ],
    evenements: [
      { annee: d(1947, 6, 5), t: '1947 : plan\nMarshall', niv: 1 },
      { annee: d(1949, 4, 4), t: '1949 : OTAN', niv: 0, ancre: 'start' },
      { annee: d(1955, 5, 14), t: '1955 : pacte\nde Varsovie', niv: 2 },
      { annee: d(1962, 10, 15), t: 'oct. 1962 :\ncrise de Cuba', niv: 0 },
      { annee: d(1985, 3, 11), t: 'milieu des années 1980 :\nréformes de Gorbatchev', niv: 0, ancre: 'end' },
      { annee: d(1989, 11, 9), t: '9 nov. 1989 :\nchute du mur', niv: 1, ancre: 'end' },
      { annee: d(1991, 12, 26), t: '1991 : fin\nde l\'URSS', niv: 2, ancre: 'end' },
    ],
  },
  environnement: {
    debut: 1970, fin: 2020, pas: 5, lib: 'annee',
    evenements: [
      { annee: d(1972, 6, 5), t: '1972 :\nStockholm', niv: 0 },
      { annee: 1987.3, t: '1987 : rapport\nBrundtland', niv: 0, ancre: 'end' },
      { annee: 1988.9, t: '1988 :\nGIEC', niv: 1, ancre: 'start' },
      { annee: d(1992, 6, 3), t: '1992 : Rio', niv: 2, ancre: 'end' },
      { annee: d(1995, 3, 28), t: '1995 : première COP', niv: 3, ancre: 'start' },
      { annee: d(1997, 12, 11), t: '1997 : Kyoto', niv: 0, ancre: 'start' },
      { annee: d(2015, 12, 12), t: '2015 : accord de\nParis (COP21)', niv: 0 },
    ],
  },
  guerrePaix: {
    debut: 1600, fin: 2030, pas: 50, lib: 'annee',
    periodes: [{ debut: 1948, fin: 2030, t: 'Moyen-Orient : conflits depuis 1948', coul: 'orange', ouvertD: true, dessus: true }],
    evenements: [
      { annee: 1648.8, t: '1648 : paix\nde Westphalie', niv: 0 },
      { annee: 1780, fin: 1831, t: 'Clausewitz\n(1780-1831)', niv: 0 },
      { annee: d(1919, 6, 28), t: '1919 : traité de\nVersailles, SDN', niv: 0, ancre: 'end' },
      { annee: d(1945, 6, 26), t: '1945 : ONU', niv: 1, ancre: 'start' },
      { annee: d(2002, 7, 1), t: '2002 : Cour pénale\ninternationale', niv: 2, ancre: 'end' },
    ],
  },
  memoires: {
    debut: 1940, fin: 2002, pas: 10, lib: 'annee',
    periodes: [
      { debut: 1945, fin: 1973, t: 'mémoire « résistancialiste »', coul: 'bleu', ouvertD: true },
      { debut: 1968, fin: 2002, t: 'remise en question, place de la Shoah', coul: 'rouge', ouvertG: true, ouvertD: true, rang: 1 },
      { debut: 1980, fin: 2000, t: 'procès en France (années 1980-1990)', coul: 'violet', rang: 2, ouvertG: true, ouvertD: true },
    ],
    evenements: [
      { annee: d(1945, 11, 20), fin: d(1946, 10, 1), t: '1945-1946 :\nprocès de Nuremberg', niv: 0 },
      { annee: 1973, t: '1973 : livre de Paxton\nsur la France de Vichy', niv: 0 },
      { annee: d(1995, 7, 16), t: '1995 : Jacques Chirac reconnaît\nla responsabilité de l\'État', niv: 1 },
    ],
  },
  espace: {
    debut: 1955, fin: 1985, pas: 5, lib: 'annee',
    periodes: [{ debut: 1955, fin: 1985, t: 'guerre froide : la course à l\'espace', coul: 'rouge', ouvertG: true, ouvertD: true }],
    evenements: [
      { annee: d(1957, 10, 4), t: '1957 :\nSpoutnik', niv: 0 },
      { annee: d(1961, 4, 12), t: '1961 :\nGagarine', niv: 1 },
      { annee: d(1967, 1, 27), t: '1967 : traité\nde l\'espace', niv: 0 },
      { annee: d(1969, 7, 20), t: '1969 : Apollo 11,\nl\'homme sur la Lune', niv: 1 },
      { annee: d(1982, 12, 10), t: '1982 : convention\nde Montego Bay', niv: 0 },
    ],
  },
  patrimoine: {
    debut: 1880, fin: 2030, pas: 20, lib: 'annee',
    evenements: [
      { annee: d(1887, 3, 30), t: '1887 : première\nloi de classement', niv: 0 },
      { annee: d(1913, 12, 31), t: '1913 : loi sur les\nmonuments historiques', niv: 1 },
      { annee: d(1972, 11, 16), t: '1972 : convention\ndu patrimoine mondial', niv: 0 },
      { annee: d(2003, 10, 17), t: '2003 : patrimoine\nimmatériel (UNESCO)', niv: 1, ancre: 'end' },
      { annee: 2015.6, t: '2015 : destructions\nà Palmyre', niv: 2, ancre: 'end' },
      { annee: d(2019, 4, 15), t: '2019 : incendie de\nNotre-Dame de Paris', niv: 3, ancre: 'end' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Table des schémas
// ---------------------------------------------------------------------------
export const SCHEMAS = {
  frise: ({ nom }) => frise2(FRISES[nom]),
  'mois-saisons': moisSaisons,
  semaine,
  journee,
  'hier-demain': hierDemain,
  'plan-classe': planClasse,
  'rose-vents': roseVents,
  globe,
  drapeau,
  paysages,
  chateau,
  'trois-ordres': troisOrdres,
  'ordres-barre': ordresBarre,
  'aire-urbaine': aireUrbaine,
  'zones-maritimes': zonesMaritimes,
  'effet-serre': effetSerre,
  'geo-helio': geoHelio,
  'eau-planete': eauPlanete,
  'dd-venn': ddVenn,
  montagne,
  oasis,
  seigneurie,
  ...Object.fromEntries(Object.entries(ORGAS).map(([k, fn]) => [`o-${k}`, fn])),
};

// ---------------------------------------------------------------------------
// Poses dans les fiches
// ---------------------------------------------------------------------------
const P = (fiche, cle, schema, params, legende, apres) => ({ fiche, cle, schema, params, legende, apres });
const F = (fiche, cle, nom, legende, apres) => P(fiche, cle, 'frise', { nom }, legende, apres);

export const POSES = [
  // CP
  P('cp/hist-geo/le-temps-qui-passe', 'journee', 'journee', {}, 'Les moments de la journée se suivent toujours dans le même ordre : le matin, le midi, l\'après-midi, le soir, puis la nuit.', '## 1. La journée : le jour et la nuit'),
  P('cp/hist-geo/le-temps-qui-passe', 'semaine', 'semaine', {}, 'Les 7 jours de la semaine se suivent toujours dans le même ordre ; après dimanche, une nouvelle semaine recommence par lundi.', '## 2. La semaine : 7 jours'),
  P('cp/hist-geo/le-temps-qui-passe', 'mois-saisons', 'mois-saisons', {}, 'Les 12 mois de l\'année forment un cercle qui recommence chaque année ; autour, les 4 saisons reviennent toujours dans le même ordre.', '## 4. Les quatre saisons'),
  P('cp/hist-geo/se-reperer-espace', 'plan-classe', 'plan-classe', {}, 'Le plan d\'une classe : un dessin vu de dessus qui montre où sont le tableau, le bureau, les tables, la porte et les fenêtres.', '## 2. La classe'),
  // CE1
  P('ce1/hist-geo/calendrier-frise', 'mois-saisons', 'mois-saisons', {}, 'Les 12 mois de l\'année, de janvier à décembre, et les 4 saisons qui reviennent toujours dans le même ordre : printemps, été, automne, hiver.', '## 3. Les quatre saisons'),
  P('ce1/hist-geo/calendrier-frise', 'frise-temps', 'hier-demain', {}, 'Sur une frise, le temps va de gauche à droite : hier est dans le passé, aujourd\'hui est le présent, demain est dans le futur.', '## 4. La frise du temps'),
  P('ce1/hist-geo/la-france-paysages', 'paysages', 'paysages', {}, 'Quatre grandes sortes de paysages en France : la montagne, le bord de mer, la ville et la campagne.', '## 2. Qu\'est-ce qu\'un paysage ?'),
  P('ce1/hist-geo/plans-et-cartes', 'plan-legende', 'plan-classe', { legende: true }, 'Le plan d\'une classe vu d\'en haut : la légende explique ce que représente chaque dessin et chaque couleur.', '## 3. La légende'),
  P('ce1/hist-geo/plans-et-cartes', 'rose-vents', 'rose-vents', {}, 'La rose des vents montre les 4 points cardinaux : le Nord en haut, le Sud en bas, l\'Est à droite et l\'Ouest à gauche.', '## 4. Les points cardinaux'),
  // CE2
  F('ce2/hist-geo/gaulois-romains', 'frise-gaule', 'gaulois', 'Frise à l\'échelle : en −52, Jules César bat Vercingétorix à Alésia ; la Gaule devient romaine et ses habitants deviennent des Gallo-Romains.', '## 2. La conquête de la Gaule par les Romains'),
  F('ce2/hist-geo/prehistoire', 'frise-prehistoire', 'prehistoire', 'Frise à l\'échelle des 20 000 dernières années : le Paléolithique (qui avait commencé bien plus tôt), le Néolithique vers −10 000, puis l\'Histoire à partir de l\'écriture vers −3300.', '## 1. Deux grandes périodes'),
  P('ce2/hist-geo/symboles-republique', 'drapeau', 'drapeau', {}, 'Le drapeau tricolore : trois bandes verticales côte à côte, bleu, blanc et rouge.', '## 1. Le drapeau tricolore'),
  P('ce2/hist-geo/terre-continents-oceans', 'globe', 'globe', {}, 'Le globe terrestre : l\'équateur partage la Terre en hémisphère Nord et hémisphère Sud ; le pôle Nord est en haut, le pôle Sud en bas.', '## 1. Le globe et le planisphère'),
  // CM1
  P('cm1/hist-geo/habiter-ville-campagne', 'ville-campagne', 'aire-urbaine', { anneaux: ['la ville : densité forte', 'la banlieue', 'les espaces périurbains'], exterieur: 'la campagne : densité faible', trajets: 'trajets vers la ville\npour travailler' }, 'Schéma : autour de la ville, les habitations s\'étendent sur la campagne (étalement urbain) ; les habitants des espaces périurbains vont souvent travailler en ville.', '## 3. Entre la ville et la campagne'),
  F('cm1/hist-geo/moyen-age', 'frise-moyen-age', 'moyenAge', 'Frise à l\'échelle : le Moyen Âge dure environ mille ans, de 476 à 1492, entre l\'Antiquité et les Temps modernes.', '## 1. Une longue période après l\'Antiquité'),
  P('cm1/hist-geo/moyen-age', 'chateau', 'chateau', {}, 'Schéma d\'un château fort : le donjon, les remparts et leurs créneaux, les tours percées de meurtrières, le pont-levis et les douves remplies d\'eau.', '## 2. Le château fort et le seigneur'),
  P('cm1/hist-geo/moyen-age', 'trois-groupes', 'trois-ordres', {}, 'La société du Moyen Âge vue en trois groupes : ceux qui prient (le clergé), ceux qui combattent (les seigneurs et chevaliers) et ceux qui travaillent (les paysans).', '## 3. Les paysans et la seigneurie'),
  F('cm1/hist-geo/temps-modernes', 'frise-decouvertes', 'decouvertes', 'Frise à l\'échelle : l\'imprimerie vers 1450, puis les grandes découvertes avec Colomb (1492), Vasco de Gama (1498) et le tour du monde de Magellan (1519-1522).', '## 2. Les grandes découvertes'),
  // CM2
  F('cm2/hist-geo/republique-democratie', 'frise-republique', 'republiqueCM2', 'Frise à l\'échelle des grandes dates de la République, de la Ire République en 1792 à la Ve République en 1958.', '## 2. Les grandes dates de la République'),
  P('cm2/hist-geo/revolution-empire', 'ordres-1789', 'ordres-barre', {}, 'En 1789, le tiers état représente environ 97 % de la population et paie les impôts ; le clergé et la noblesse, environ 3 %, n\'en paient presque pas.', '## 1. La France avant 1789 : la monarchie absolue'),
  F('cm2/hist-geo/revolution-empire', 'frise-revolution', 'revolutionCM2', 'Frise à l\'échelle de 1789 à 1815 : la Révolution, la Ire République proclamée en 1792, puis l\'Empire de Napoléon, qui s\'achève après Waterloo.', '## 3. De la royauté à la République, puis à l\'Empire'),
  P('cm2/hist-geo/se-deplacer-communiquer', 'chaine-alimentaire', 'o-alimentation', {}, 'Le chemin d\'un aliment, de la production à notre assiette : produire, transformer, transporter, vendre.', '## 2. Se nourrir : de la production à l\'assiette'),
  // 6e
  P('sixieme/hist-geo/emc-college-droits', 'organisation-college', 'o-college', {}, 'Le fonctionnement du collège : le principal le dirige ; les élèves de chaque classe élisent deux délégués qui les représentent au conseil de classe.', '## 4. Le fonctionnement du collège'),
  P('sixieme/hist-geo/habiter-espaces-contraintes', 'oasis', 'oasis', {}, 'Schéma d\'une oasis : autour du point d\'eau, on cultive des palmiers et on habite ; plus loin, des nomades se déplacent avec leurs troupeaux.', '## 2. S\'adapter aux déserts'),
  P('sixieme/hist-geo/habiter-espaces-contraintes', 'vallee', 'montagne', {}, 'Coupe schématique d\'une haute montagne : les habitants vivent surtout dans la vallée abritée, reliée par des routes et des tunnels ; les pentes accueillent des stations de ski.', '## 3. S\'adapter à la montagne et au froid'),
  P('sixieme/hist-geo/habiter-metropole', 'organisation-metropole', 'aire-urbaine', { anneaux: ['le centre et le quartier\ndes affaires', 'les quartiers d\'habitation\net les banlieues', 'la périphérie\n(étalement urbain)'], exterieur: 'campagne' }, 'Schéma de l\'organisation d\'une métropole : un centre avec le quartier des affaires, des banlieues autour, puis une périphérie qui s\'étend.', '## 2. L\'organisation d\'une métropole'),
  F('sixieme/hist-geo/judaisme-christianisme', 'frise-christianisme', 'christianisme', 'Frise à l\'échelle : le christianisme naît au Ier siècle, Constantin l\'autorise en 313, et il devient la religion officielle de l\'Empire romain à la fin du IVe siècle.', '## 4. La diffusion dans l\'Empire romain'),
  P('sixieme/hist-geo/monde-grec', 'citoyens-athenes', 'o-athenes', { etrangers: 'les étrangers', citoyens: 'les CITOYENS\nhommes adultes', vote: 'ils votent les lois' }, 'À Athènes, seuls les citoyens votent les lois : les femmes, les étrangers et les esclaves ne sont pas citoyens.', '## 3. Athènes et la démocratie'),
  F('sixieme/hist-geo/premiers-etats-ecritures', 'frise-ecriture', 'ecriture', 'Frise à l\'échelle : vers 3300 av. J.-C., l\'invention de l\'écriture marque le passage de la Préhistoire à l\'Histoire.', '## 3. L\'invention de l\'écriture'),
  P('sixieme/hist-geo/rome-republique-empire', 'republique-romaine', 'o-romeRepublique', {}, 'Le pouvoir sous la République romaine : les citoyens élisent chaque année deux consuls, qui dirigent la cité et l\'armée ; le Sénat les conseille.', '## 2. La République romaine'),
  F('sixieme/hist-geo/rome-republique-empire', 'frise-rome', 'rome', 'Frise à l\'échelle : fondation légendaire de Rome en 753 av. J.-C., République en 509 av. J.-C., Empire en 27 av. J.-C. avec Auguste.', '## 3. De la République à l\'Empire'),
  // 5e
  P('cinquieme/hist-geo/demographie-developpement', 'accroissement', 'o-accroissement', {}, 'Exemple : quand il y a 20 naissances et 8 décès pour 1 000 habitants en un an, l\'accroissement naturel est de 12 pour 1 000 et la population augmente.', '## 1. Une population mondiale en forte croissance'),
  P('cinquieme/hist-geo/demographie-developpement', 'idh', 'o-idh', {}, 'L\'IDH combine l\'espérance de vie, le niveau d\'éducation et le niveau de revenu ; il va de 0 à 1, et plus il est proche de 1, plus le pays est développé.', '## 3. Développement et inégalités'),
  P('cinquieme/hist-geo/emc-egalite-developpement-durable', 'piliers-dd', 'dd-venn', {}, 'Le développement durable concilie trois piliers : l\'économique, le social et l\'environnemental.', '## 3. Le développement durable et l\'écocitoyenneté'),
  F('cinquieme/hist-geo/islam-debuts-expansion', 'frise-islam', 'islam', 'Frise à l\'échelle : l\'Hégire en 622, la mort de Mahomet en 632, puis les conquêtes des VIIe et VIIIe siècles ; la bataille de Poitiers a lieu en 732.', '## 1. La naissance de l\'islam au VIIe siècle'),
  P('cinquieme/hist-geo/occident-feodal', 'vassalite', 'o-vassalite', {}, 'Le lien féodal : le vassal prête hommage à son suzerain et lui jure fidélité ; en échange, le suzerain lui confie un fief et le protège.', '## 1. Les liens féodaux : seigneurs et vassaux'),
  P('cinquieme/hist-geo/occident-feodal', 'seigneurie', 'seigneurie', {}, 'Plan schématique d\'une seigneurie : la réserve cultivée pour le seigneur, les tenures des paysans, le château, l\'église, le four et le moulin.', '## 2. La seigneurie : le monde des paysans'),
  P('cinquieme/hist-geo/occident-feodal', 'trois-ordres', 'trois-ordres', { ordres: [['ceux qui prient', 'le clergé'], ['ceux qui combattent', 'la noblesse'], ['ceux qui travaillent', 'les paysans (la grande majorité)']] }, 'La société médiévale vue en trois ordres : le clergé (ceux qui prient), la noblesse (ceux qui combattent) et les paysans (ceux qui travaillent).', '## 3. Une société de trois ordres et le rôle de l\'Église'),
  F('cinquieme/hist-geo/renaissance-humanisme-reformes', 'frise-renaissance', 'renaissance', 'Frise à l\'échelle des XVe et XVIe siècles : l\'imprimerie vers 1450, Colomb en Amérique en 1492, la Réforme de Luther en 1517.', '## 1. L\'humanisme et la Renaissance'),
  P('cinquieme/hist-geo/ressources-eau-alimentation-energie', 'eau-douce', 'eau-planete', {}, 'L\'eau douce ne représente qu\'environ 2,5 % de l\'eau de la planète, et elle est surtout gelée ou souterraine : l\'eau des lacs et des rivières est très rare.', '## 1. L\'eau : une ressource vitale et fragile'),
  F('cinquieme/hist-geo/roi-et-ville-moyen-age', 'frise-capetiens', 'roiVille', 'Frise à l\'échelle : les Capétiens règnent à partir de 987 ; Philippe Auguste gagne à Bouvines en 1214 ; les villes grandissent du XIe au XIIIe siècle.', '## 1. Les rois capétiens renforcent leur pouvoir'),
  // 4e
  P('quatrieme/hist-geo/commerce-traite-lumieres', 'commerce-triangulaire', 'o-triangulaire', {}, 'Schéma du commerce triangulaire : des marchandises européennes échangées en Afrique contre des captifs, déportés en Amérique, d\'où reviennent sucre, café, coton et tabac.', '## 1. Le grand commerce et le commerce triangulaire'),
  F('quatrieme/hist-geo/commerce-traite-lumieres', 'frise-esclavage', 'esclavage', 'Frise à l\'échelle : le Code noir en 1685, une première abolition de l\'esclavage en 1794, son rétablissement en 1802 et l\'abolition définitive en 1848.', '## 2. La traite négrière atlantique et l\'esclavage'),
  P('quatrieme/hist-geo/conquetes-colonisation', 'metropole-colonie', 'o-colonie', {}, 'Les relations entre une métropole et sa colonie : la métropole administre et domine la colonie, qui lui fournit des matières premières.', '## 3. La colonie et ses effets'),
  P('quatrieme/hist-geo/emc-libertes-et-loi', 'loi', 'o-loi', {}, 'Les citoyens élisent les députés ; le Parlement vote la loi, la même pour tous, qui encadre et protège les libertés ; la justice la fait respecter.', '## 2. La loi encadre et protège les libertés'),
  P('quatrieme/hist-geo/mobilites-humaines', 'migrations', 'o-migrations', {}, 'Une migration relie un pays de départ et un pays d\'accueil : les migrants partent, et des envois d\'argent reviennent vers les familles restées au pays.', '## 3. Des mobilités qui relient le monde'),
  F('quatrieme/hist-geo/revolution-francaise-empire', 'frise-revolution', 'revolution4e', 'Frise à l\'échelle de 1789 à 1815 : la fin de l\'Ancien Régime, la monarchie constitutionnelle, la Ire République, le Consulat, puis l\'Empire de Napoléon Ier.', '## 2. De la monarchie à la République'),
  P('quatrieme/hist-geo/revolution-industrielle', 'chaine-industrielle', 'o-industrie', {}, 'Le charbon alimente la machine à vapeur, qui fait tourner les usines et les trains ; les usines attirent les ruraux en ville, et une nouvelle société apparaît.', '## 2. L\'usine, le chemin de fer et les villes'),
  P('quatrieme/hist-geo/urbanisation-du-monde', 'etalement-urbain', 'aire-urbaine', { anneaux: ['le centre-ville', 'les banlieues', 'les périphéries\n(étalement urbain)'], exterieur: 'espace rural' }, 'Schéma d\'une grande ville qui s\'étale : le centre-ville, puis les banlieues et les périphéries où vit une grande partie de la population.', '## 3. Des villes qui s\'étalent'),
  // 3e
  P('troisieme/hist-geo/aires-urbaines-espaces-productifs', 'aire-urbaine', 'aire-urbaine', { anneaux: ['la ville-centre', 'la banlieue', 'la couronne périurbaine'], exterieur: 'espace rural', trajets: 'trajets domicile-travail\nvers la ville-centre' }, 'Schéma d\'une aire urbaine : la ville-centre, sa banlieue et sa couronne périurbaine, dont les habitants travaillent surtout dans la ville-centre.', '## 1. Qu\'est-ce qu\'une aire urbaine ?'),
  P('troisieme/hist-geo/emc-defense-citoyennete', 'parcours-citoyennete', 'o-parcours', {}, 'Le parcours de citoyenneté : recensement en mairie à 16 ans, puis Journée défense et citoyenneté, puis droit de vote à 18 ans.', '## 2. Le parcours de citoyenneté et la défense'),
  F('troisieme/hist-geo/france-depuis-1945-ve-republique', 'frise-1945', 'france1945', 'Frise à l\'échelle de la France depuis 1944 : vote des femmes, IVe puis Ve République, Trente Glorieuses, élection du président au suffrage universel et alternance de 1981.', '## 1. De la Libération à la IVe République'),
  P('troisieme/hist-geo/france-depuis-1945-ve-republique', 'institutions', 'o-institutionsVe', {}, 'Schéma simplifié des institutions de la Ve République : les citoyens élisent le président et les députés ; le Parlement vote les lois ; l\'Assemblée peut renverser le gouvernement.', '## 2. La naissance de la Ve République (1958)'),
  F('troisieme/hist-geo/france-union-europeenne-monde', 'frise-europe', 'europe', 'Frise à l\'échelle de la construction européenne : traité de Rome en 1957, traité de Maastricht en 1992, euro en 2002, Brexit en 2020.', '## 1. La France dans l\'Union européenne'),
  F('troisieme/hist-geo/premiere-guerre-mondiale', 'frise-1914', 'gm1_3e', 'Frise à l\'échelle de la Première Guerre mondiale : mouvement en 1914, longue guerre de position dans les tranchées, Verdun et la Somme en 1916, armistice le 11 novembre 1918.', '## 1. Contexte et repères'),
  F('troisieme/hist-geo/seconde-guerre-mondiale', 'frise-1939', 'sgm3e', 'Frise à l\'échelle de la Seconde Guerre mondiale, du 1er septembre 1939 à la capitulation du Japon le 2 septembre 1945 ; Stalingrad marque le tournant.', '## 1. Contexte et repères'),
  F('troisieme/hist-geo/totalitarismes', 'frise-totalitarismes', 'totalitarismes', 'Frise à l\'échelle : Mussolini au pouvoir dès 1922, Staline à partir de la fin des années 1920, Hitler chancelier en janvier 1933.', '## 1. Contexte et repères'),
  P('troisieme/hist-geo/totalitarismes', 'points-communs', 'o-totalitarisme', {}, 'Les points communs des régimes totalitaires : un parti unique, un chef tout-puissant, la propagande, une police politique, la terreur et l\'embrigadement.', '## 5. Des points communs'),
  // 2de
  P('seconde/hist-geo/emc-la-liberte', 'liberte-loi', 'o-libertes', {}, 'La liberté des uns s\'arrête là où commence celle des autres : c\'est la loi qui fixe cette limite.', '## 3. La liberté et la loi'),
  P('seconde/hist-geo/environnement-developpement-durable', 'effet-serre', 'effet-serre', {}, 'Schéma simplifié de l\'effet de serre : les gaz à effet de serre retiennent une partie de la chaleur émise par la Terre ; s\'ils augmentent, la planète se réchauffe.', '## 2. Le changement climatique'),
  P('seconde/hist-geo/environnement-developpement-durable', 'piliers-dd', 'dd-venn', {}, 'Le développement durable repose sur trois piliers : économique, social et environnemental.', '## 3. Le développement durable'),
  F('seconde/hist-geo/humanisme-renaissance', 'frise-decouvertes', 'decouvertes', 'Frise à l\'échelle : l\'imprimerie vers 1450, Colomb en Amérique en 1492, Vasco de Gama en Inde en 1498, le tour du monde de Magellan de 1519 à 1522.', '## 3. Les grandes découvertes'),
  P('seconde/hist-geo/humanisme-renaissance', 'geo-helio', 'geo-helio', {}, 'Deux visions du monde : dans le géocentrisme, la Terre est au centre ; dans l\'héliocentrisme de Copernic, défendu par Galilée, la Terre tourne autour du Soleil.', '## 4. Une nouvelle vision du monde : l\'héliocentrisme'),
  F('seconde/hist-geo/mediterranee-antique', 'frise-antiquite', 'antique', 'Frise à l\'échelle : fondation de Rome en 753 av. J.-C., réformes de Clisthène en 508-507 av. J.-C., Empire romain en 27 av. J.-C., édit de Caracalla en 212.', '## 1. Repères chronologiques'),
  P('seconde/hist-geo/mediterranee-antique', 'citoyens-athenes', 'o-athenes', {}, 'À Athènes, la citoyenneté est très restreinte : seuls les hommes adultes nés de père et de mère athéniens sont citoyens ; femmes, métèques et esclaves en sont exclus.', '## 2. Athènes et la démocratie (Ve siècle av. J.-C.)'),
  P('seconde/hist-geo/mediterranee-medievale', 'schisme', 'o-schisme', {}, 'Le schisme de 1054 sépare l\'Église catholique, latine, autour du pape à Rome, et l\'Église orthodoxe, byzantine, autour de Constantinople.', '## 2. La chrétienté latine et l\'Empire byzantin'),
  F('seconde/hist-geo/mediterranee-medievale', 'frise-croisades', 'croisades', 'Frise à l\'échelle : le schisme de 1054, l\'appel à la croisade en 1095 et la prise de Jérusalem par les croisés en 1099.', '## 4. Les croisades'),
  P('seconde/hist-geo/revolutions-angleterre-amerique', 'separation-pouvoirs', 'o-separation', { exemples: ['le Congrès', 'le Président', 'la Cour suprême'], titreEx: 'Exemple : la Constitution des États-Unis (1787)' }, 'La séparation des pouvoirs défendue par les Lumières : législatif, exécutif et judiciaire, ici avec l\'exemple de la Constitution américaine de 1787.', '## 2. Les Lumières'),
  F('seconde/hist-geo/revolutions-angleterre-amerique', 'frise-revolutions', 'revolutions2de', 'Frise à l\'échelle : Bill of Rights en 1689, indépendance des États-Unis le 4 juillet 1776, Constitution américaine en 1787, Révolution française en 1789.', '## 3. L\'indépendance des États-Unis (1776)'),
  P('seconde/hist-geo/territoires-villes-mondialisation', 'flux-mondialisation', 'o-mondialisation', {}, 'Schéma de principe : les villes mondiales sont reliées par des flux majeurs, les autres métropoles par des flux secondaires, tandis que certains espaces restent à l\'écart.', '## 4. Des territoires inégalement intégrés'),
  // 1re
  P('premiere/hggsp/democratie', 'separation-pouvoirs', 'o-separation', {}, 'Les trois pouvoirs distingués par Montesquieu en 1748 : législatif, exécutif et judiciaire, avec l\'exemple de la France.', '## 4. Les principes d\'une démocratie'),
  P('premiere/hggsp/democratie', 'regimes', 'o-regimes', {}, 'Régime parlementaire : le gouvernement est responsable devant le Parlement, qui peut le renverser. Régime présidentiel : séparation stricte entre le Président et le Congrès.', '## 4. Les principes d\'une démocratie'),
  P('premiere/hggsp/etats-et-religions', 'modeles', 'o-modelesReligion', {}, 'Trois modèles de relations entre États et religions, de la théocratie à l\'État laïque, avec des exemples tirés de la fiche.', '## 1. Différents modèles de relations'),
  F('premiere/hggsp/etats-et-religions', 'frise-religions', 'religions1re', 'Frise à l\'échelle : paix d\'Augsbourg en 1555, édit de Nantes de 1598 jusqu\'à sa révocation en 1685, Concordat en 1801, loi de séparation en 1905.', '## 3. Des repères historiques en France'),
  P('premiere/hggsp/frontieres', 'zones-maritimes', 'zones-maritimes', {}, 'Coupe schématique du droit de la mer (Montego Bay, 1982) : eaux territoriales jusqu\'à 12 milles, zone économique exclusive jusqu\'à 200 milles, puis la haute mer.', '## 4. Les frontières maritimes'),
  P('premiere/hggsp/puissances-internationales', 'hard-soft', 'o-hardSoft', { smart: true, nye: true }, 'Les deux formes de puissance selon Joseph Nye : la puissance dure, qui contraint, et la puissance douce, qui séduit ; les combiner donne la puissance intelligente.', '## 2. Puissance dure et puissance douce'),
  F('premiere/hggsp/puissances-internationales', 'frise-puissances', 'puissances', 'Frise à l\'échelle : un monde bipolaire pendant la guerre froide (1947-1991), puis l\'hyperpuissance américaine et une tendance à la multipolarité.', '## 3. Des configurations qui évoluent'),
  F('premiere/hggsp/s-informer', 'frise-information', 'information', 'Frise à l\'échelle des moyens d\'information : imprimerie vers 1450, presse écrite, télégraphe puis radio, télévision, Internet depuis les années 1990.', '## 1. Une longue histoire des moyens d\'information'),
  P('premiere/hggsp/s-informer', 'sources', 'o-sources', {}, 'Une source primaire est un document de première main ; une source secondaire l\'analyse. Pour s\'informer, on vérifie qui parle, quand, d\'où vient l\'information, et on croise les sources.', '## 2. Distinguer les types de sources'),
  P('premiere/hist-geo/emc-republique-laicite', 'laicite', 'o-laicite', {}, 'Les deux principes de la laïcité, la séparation des Églises et de l\'État et la neutralité de l\'État, garantissent la liberté de conscience.', '## 2. La laïcité'),
  P('premiere/hist-geo/espaces-productifs-et-ruraux', 'espaces-ruraux', 'o-ruraux', {}, 'Schéma de principe : près des villes, les campagnes accueillent de nouveaux habitants ; plus loin, l\'agriculture et le tourisme vert ; les campagnes isolées connaissent la déprise.', '## 2. Les espaces agricoles et ruraux'),
  P('premiere/hist-geo/industrialisation-19e', 'chaine-industrielle', 'o-industrie', { capitalisme: true }, 'L\'industrialisation au XIXe siècle : charbon, machine à vapeur, usines et chemin de fer, financés par le capitalisme ; l\'exode rural et une nouvelle société en découlent.', '## 1. Une révolution technique et énergétique'),
  P('premiere/hist-geo/metropolisation-france', 'aire-urbaine', 'aire-urbaine', { anneaux: ['la ville-centre', 'les banlieues', 'les couronnes\npériurbaines'], exterieur: 'espace rural', trajets: 'trajets domicile-travail' }, 'Schéma d\'une aire urbaine : une ville-centre, ses banlieues et ses couronnes périurbaines, où s\'installent des habitants qui travaillent en ville.', '## 2. Une France de plus en plus urbaine'),
  F('premiere/hist-geo/nations-nationalites-europe', 'frise-nations', 'nations', 'Frise à l\'échelle : le printemps des peuples en 1848, le royaume d\'Italie en 1861, puis en 1871 l\'unité italienne achevée et l\'Empire allemand proclamé.', '## 3. Les unités italienne et allemande'),
  F('premiere/hist-geo/premiere-guerre-et-consequences', 'frise-1914', 'gm1_1re', 'Frise à l\'échelle : la guerre de 1914 à l\'armistice du 11 novembre 1918, Verdun en 1916, l\'entrée en guerre des États-Unis en 1917 et le traité de Versailles en 1919.', '## 1. Repères de la Première Guerre mondiale'),
  F('premiere/hist-geo/revolution-francaise-empire', 'frise-revolution', 'revolution1re', 'Frise à l\'échelle de 1789 à 1815 : de la monarchie absolue à la monarchie constitutionnelle, à la Ire République, au Consulat, puis à l\'Empire.', '## 1. Repères et grandes étapes'),
  // Terminale
  P('terminale/hggsp/enjeu-de-la-connaissance', 'methode', 'o-science', {}, 'La méthode scientifique : hypothèses, expériences, vérification, publication et débat entre pairs, qui rendent la connaissance collective et critique.', '## 1. Produire et diffuser la connaissance'),
  F('terminale/hggsp/environnement', 'frise-environnement', 'environnement', 'Frise à l\'échelle de la préoccupation environnementale : Stockholm en 1972, rapport Brundtland en 1987, GIEC en 1988, Rio en 1992, Kyoto en 1997, accord de Paris en 2015.', '## 2. La construction d\'une préoccupation environnementale'),
  F('terminale/hggsp/faire-la-guerre-faire-la-paix', 'frise-paix', 'guerrePaix', 'Frise à l\'échelle : paix de Westphalie en 1648, Clausewitz, traité de Versailles et SDN en 1919, ONU en 1945, Cour pénale internationale en 2002.', '## 3. Faire la paix : du traité au maintien de la paix'),
  F('terminale/hggsp/histoire-et-memoires', 'frise-memoires', 'memoires', 'Frise à l\'échelle : après 1945, une mémoire résistancialiste ; à partir des années 1970, sa remise en question ; en 1995, Jacques Chirac reconnaît la responsabilité de l\'État français.', '## 2. Les mémoires de la Seconde Guerre mondiale en France'),
  F('terminale/hggsp/nouveaux-espaces-conquete', 'frise-espace', 'espace', 'Frise à l\'échelle : Spoutnik en 1957, Gagarine en 1961, traité de l\'espace en 1967, Apollo 11 en 1969, convention de Montego Bay en 1982.', '## 1. Océans et espace : des enjeux de connaissance et de puissance'),
  P('terminale/hggsp/nouveaux-espaces-conquete', 'zones-maritimes', 'zones-maritimes', { zone: true }, 'Coupe schématique des espaces maritimes : eaux territoriales, ZEE jusqu\'à 200 milles marins, haute mer libre, et grands fonds déclarés patrimoine commun de l\'humanité.', '## 2. Un cadre juridique pour des espaces communs'),
  F('terminale/hggsp/patrimoine', 'frise-patrimoine', 'patrimoine', 'Frise à l\'échelle de la protection du patrimoine : lois de 1887 et 1913 en France, convention de l\'UNESCO en 1972, patrimoine immatériel en 2003, Palmyre en 2015, Notre-Dame en 2019.', '## 1. Qu\'est-ce que le patrimoine ?'),
  F('terminale/hist-geo/decolonisation', 'frise-decolonisation', 'decolonisation', 'Frise à l\'échelle : indépendance de l\'Inde en 1947, conférence de Bandung en 1955, année de l\'Afrique en 1960, guerre d\'Algérie de 1954 à 1962.', '## 2. Deux exemples majeurs'),
  P('terminale/hist-geo/emc-democratie-engagement', 'separation-pouvoirs', 'o-separation', {}, 'La séparation des pouvoirs, principe de la démocratie : le législatif fait les lois, l\'exécutif les applique, le judiciaire juge.', '## 1. Qu\'est-ce que la démocratie ?'),
  F('terminale/hist-geo/emc-democratie-engagement', 'frise-vote', 'vote', 'Frise à l\'échelle : suffrage universel masculin en 1848, droit de vote des femmes en 1944, majorité électorale à 18 ans en 1974.', '## 2. Le vote, socle de la participation'),
  F('terminale/hist-geo/guerre-froide', 'frise-guerre-froide', 'guerreFroide', 'Frise à l\'échelle de la guerre froide (1947-1991) : plan Marshall, OTAN, pacte de Varsovie, Corée, mur de Berlin de 1961 à 1989, crise de Cuba, fin de l\'URSS.', null),
  P('terminale/hist-geo/mers-oceans-mondialisation', 'zones-maritimes', 'zones-maritimes', {}, 'Coupe schématique : la ZEE s\'étend jusqu\'à 200 milles marins des côtes (convention de Montego Bay, 1982) ; au-delà commence la haute mer.', '## 2. Des réserves de ressources'),
  F('terminale/hist-geo/monde-depuis-1990', 'frise-1990', 'monde1990', 'Frise à l\'échelle : Ve République en 1958, élection du président au suffrage universel direct en 1962, fin de l\'URSS en 1991, Maastricht en 1992, quinquennat en 2000, euro en 2002.', null),
  P('terminale/hist-geo/monde-depuis-1990', 'institutions', 'o-institutionsVe', {}, 'Schéma simplifié des institutions de la Ve République : le président, élu au suffrage universel direct depuis 1962, nomme le Premier ministre ; le Parlement vote les lois.', '## 3. La France sous la Ve République'),
  P('terminale/hist-geo/puissances-et-france-dans-le-monde', 'hard-soft', 'o-hardSoft', {}, 'La puissance combine le hard power, qui contraint par l\'armée et l\'économie, et le soft power, qui attire par la culture, la langue et la diplomatie.', '## 1. Qu\'est-ce que la puissance ?'),
  F('terminale/hist-geo/seconde-guerre-mondiale-genocides', 'frise-1939', 'sgmTle', 'Frise à l\'échelle de la Seconde Guerre mondiale, de l\'invasion de la Pologne le 1er septembre 1939 à la capitulation du Japon le 2 septembre 1945.', '## 1. Une guerre mondiale et d\'anéantissement'),
];
