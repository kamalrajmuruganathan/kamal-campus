/**
 * Épreuve en conditions réelles — logique pure (sans React, testable).
 *
 * Un sujet (sujets/*.md) se passe comme le jour J : chrono à la durée du sujet,
 * pause possible, énoncé seul. À la fin, l'appli ne peut pas corriger une copie
 * rédigée : elle montre le corrigé partie par partie (ou question par question
 * quand c'est possible) et l'élève s'auto-évalue (réussi / à moitié / raté).
 * La note sur 20 est calculée à partir du barème :
 *   - barème du sujet (points écrits dans les titres « (15 points) », dans les
 *     questions « (2 pts) », ou ligne « Barème indicatif. … : 4 pts ; … ») ;
 *   - sinon répartition à parts égales, annoncée comme une ESTIMATION.
 *
 * Ce module contient : découpage du sujet (énoncé / corrigé / parties /
 * questions), lecture de la durée, barème, calcul de la note, chronomètre
 * (pause/reprise calculées à partir de l'horloge), XP et historique.
 */

// ───────────────────────────── outils texte ─────────────────────────────

/** Minuscules, sans accents ni ponctuation superflue (pour comparer des titres). */
export function normaliser(s) {
  return String(s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[*_`$\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const RE_POINTS = /\((?:[^()\d]{0,30}?)(\d+(?:[.,]\d+)?)\s*(?:points?|pts?)\b[^()]*\)/i;

/** Nombre de points écrit dans un texte « (15 points) », « (2 pts) », « (barème : 4 pts) » ; null sinon. */
export function pointsDe(texte) {
  const m = RE_POINTS.exec(String(texte ?? ''));
  return m ? Number(m[1].replace(',', '.')) : null;
}

/** Retire l'en-tête YAML. */
export function sansEntete(md) {
  return String(md ?? '').replace(/^﻿?---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
}

/** Titre lisible : sans « (15 points) », sans gras, sans tiret final. */
export function titrePropre(texte) {
  return String(texte ?? '')
    .replace(RE_POINTS, '')
    .replace(/\*\*/g, '')
    .replace(/\s*[—–-]\s*$/, '')
    .replace(/\s*:\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Lignes du Markdown avec, pour chaque titre hors bloc de code, son niveau.
 * Les « # » des commentaires Python (blocs ```) ne sont pas des titres.
 */
export function lignesAnnotees(md) {
  const lignes = String(md ?? '').split(/\r?\n/);
  let dansCode = false;
  let dansCommentaire = false;
  return lignes.map((texte) => {
    const l = { texte, titre: null, niveau: 0, code: dansCode };
    if (/^\s*(```|~~~)/.test(texte)) { dansCode = !dansCode; l.code = true; return l; }
    if (dansCode) return l;
    if (dansCommentaire) { if (texte.includes('-->')) dansCommentaire = false; l.code = true; return l; }
    if (/^\s*<!--/.test(texte) && !texte.includes('-->')) { dansCommentaire = true; l.code = true; return l; }
    const m = /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(texte);
    if (m) { l.titre = m[2]; l.niveau = m[1].length; }
    return l;
  });
}

const RE_CORRIGE = /^(corrig[ée]|correction|éléments? de corrig[ée])/i;

/**
 * Sépare l'énoncé du corrigé (premier titre « Corrigé… » / « Correction… »).
 * @returns {{enonce: string, corrige: string|null, titreCorrige: string|null}}
 */
export function separerSujet(md) {
  const lignes = lignesAnnotees(sansEntete(md));
  const i = lignes.findIndex((l) => l.titre && RE_CORRIGE.test(l.titre.replace(/\*\*/g, '').trim()));
  if (i < 0) return { enonce: lignes.map((l) => l.texte).join('\n').trim(), corrige: null, titreCorrige: null };
  let enonceLignes = lignes.slice(0, i).map((l) => l.texte);
  // Retire le séparateur « --- » final de l'énoncé.
  while (enonceLignes.length && /^\s*(---+|\*\*\*+)?\s*$/.test(enonceLignes[enonceLignes.length - 1])) enonceLignes.pop();
  const corrige = lignes.slice(i + 1).map((l) => l.texte).join('\n').trim();
  return { enonce: enonceLignes.join('\n').trim(), corrige: corrige || null, titreCorrige: lignes[i].titre };
}

// ───────────────────────────── durée ─────────────────────────────

/** Durées officielles certaines (minutes), utilisées seulement si le sujet n'en écrit aucune. */
const DUREES_OFFICIELLES = [
  { examen: /brevet|dnb/i, matiere: /^mathematiques$/, minutes: 120 },
  { examen: /brevet|dnb/i, matiere: /^francais$/, minutes: 180 },
  { examen: /bac/i, matiere: /^philosophie$/, minutes: 240 },
  { examen: /bac/i, matiere: /^mathematiques$/, minutes: 240 },
  { examen: /bac/i, matiere: /^(physique-chimie|svt)$/, minutes: 210 },
];

/**
 * Durée écrite dans le sujet (ligne « Durée … : 2 h 00 », « 1 h 30 », « 2 heures », « 30 min »).
 * @returns {number|null} minutes
 */
export function lireDuree(texte) {
  const ligne = String(texte ?? '').split(/\r?\n/).find((l) => /dur[ée]e/i.test(l));
  if (!ligne) return null;
  const apres = ligne.slice(ligne.search(/dur[ée]e/i)).slice(0, 90);
  const h = /(\d+)\s*h(?:eures?)?\b\s*(\d{1,2})?/i.exec(apres) || /(\d+)\s*h(?:eures?)?(\d{2})/i.exec(apres);
  if (h) return Number(h[1]) * 60 + (h[2] ? Number(h[2]) : 0);
  const mn = /(\d+)\s*min/i.exec(apres);
  return mn ? Number(mn[1]) : null;
}

/**
 * Durée de l'épreuve : celle du sujet, sinon la durée officielle certaine, sinon null
 * (l'écran demande alors à l'élève).
 * @returns {{minutes: number|null, source: 'sujet'|'officielle'|null}}
 */
export function dureeEpreuve(sujet, enonce) {
  const lue = lireDuree(enonce ?? separerSujet(sujet?.contenu).enonce);
  if (lue && lue > 0) return { minutes: lue, source: 'sujet' };
  const off = DUREES_OFFICIELLES.find((d) => d.examen.test(sujet?.examen || '') && d.matiere.test(sujet?.matiere || ''));
  if (off) return { minutes: off.minutes, source: 'officielle' };
  return { minutes: null, source: null };
}

// ───────────────────────────── sections et questions ─────────────────────────────

/**
 * Sections d'un texte : titres du niveau `niveau` (ou, à défaut, du plus petit niveau présent).
 * @returns {{intro: string, sections: {titre, niveau, corps}[]}}
 */
export function sectionsDe(md, { niveau = null } = {}) {
  const lignes = lignesAnnotees(md);
  const niveaux = lignes.filter((l) => l.titre).map((l) => l.niveau);
  if (!niveaux.length) return { intro: String(md ?? '').trim(), sections: [] };
  const n = niveau ?? Math.min(...niveaux);
  const intro = [];
  const sections = [];
  let cur = null;
  for (const l of lignes) {
    if (l.titre && l.niveau <= n) {
      cur = { titre: l.titre, niveau: l.niveau, lignes: [] };
      sections.push(cur);
      continue;
    }
    (cur ? cur.lignes : intro).push(l.texte);
  }
  return {
    intro: intro.join('\n').trim(),
    sections: sections.map((s) => ({ titre: s.titre, niveau: s.niveau, corps: s.lignes.join('\n').trim() })),
  };
}

/**
 * Sections « notées » de l'énoncé : titres portant des points, non contenus dans un autre titre noté.
 * @returns {{titre, points, corps}[]}
 */
export function sectionsNotees(enonce) {
  const lignes = lignesAnnotees(enonce);
  const res = [];
  let cur = null;
  for (const l of lignes) {
    if (l.titre) {
      if (cur && l.niveau <= cur.niveau) cur = null;
      const p = pointsDe(l.titre);
      if (!cur && p != null) {
        cur = { titre: l.titre, niveau: l.niveau, points: p, lignes: [] };
        res.push(cur);
        continue;
      }
    }
    if (cur) cur.lignes.push(l.texte);
  }
  return res.map((s) => ({ titre: s.titre, points: s.points, corps: s.lignes.join('\n').trim() }));
}

/** Segments d'un corrigé sans titres : lignes qui commencent par un libellé en gras (« **I. …** », « - **Compréhension** : »). */
export function segmentsGras(md) {
  const lignes = lignesAnnotees(md);
  const intro = [];
  const segs = [];
  let cur = null;
  for (const l of lignes) {
    const m = !l.code && /^(?:[-*]\s+)?\*\*([^*]{2,200}?)\*\*/.exec(l.texte);
    if (m && !/^bar[èe]me/i.test(m[1].trim())) {
      cur = { titre: m[1].replace(/[.:]\s*$/, '').trim(), lignes: [l.texte] };
      segs.push(cur);
      continue;
    }
    (cur ? cur.lignes : intro).push(l.texte);
  }
  return { intro: intro.join('\n').trim(), sections: segs.map((s) => ({ titre: s.titre, corps: s.lignes.join('\n').trim() })) };
}

/** Clé de rapprochement d'un titre : « exercice 2 », « partie 1 », « r ii », sinon début du titre normalisé. */
export function cleTitre(titre) {
  const t = normaliser(titrePropre(titre));
  const m = /^(exercice|partie|probleme|question|document|situation)\s*(\d+|[a-h]\b)/.exec(t);
  if (m) return `${m[1]} ${m[2]}`;
  const r = /^([ivx]+)[.)\s—–-]/.exec(t + ' ');
  if (r) return `r ${r[1]}`;
  return t.replace(/[^a-z0-9]/g, '').slice(0, 20);
}

/** Clé d'une sous-partie (« Partie A » → « A »), pour numéroter les questions « A.1 ». */
function prefixeSousPartie(titre) {
  const t = normaliser(titrePropre(titre));
  const m = /^partie\s*([a-z0-9]+)\b/.exec(t);
  return m ? m[1].toUpperCase() : null;
}

/**
 * Découpe un corps de section en questions numérotées :
 *  « 1. … » en début de ligne (liste de premier niveau), « **Question 1.2 (2 points).** », « **1.2 (3 points).** ».
 * Les sous-titres « Partie A » préfixent les numéros (« A.1 »).
 * @returns {{cle, libelle, texte, points}[]}
 */
export function questionsDe(corps) {
  const lignes = lignesAnnotees(corps);
  const qs = [];
  let cur = null;
  let prefixe = null;
  for (const l of lignes) {
    if (l.titre) {
      const p = prefixeSousPartie(l.titre);
      if (p) prefixe = p;
      cur = null;
      // Sous-titre noté (« ### Réécriture (6 pts) ») : une question à part entière.
      if (pointsDe(l.titre) != null) {
        cur = { cle: `T:${cleTitre(l.titre)}`, libelle: titrePropre(l.titre), lignes: [l.texte] };
        qs.push(cur);
      }
      continue;
    }
    if (l.code) { if (cur) cur.lignes.push(l.texte); continue; }
    const liste = /^(\d{1,2})[.)]\s+\S/.exec(l.texte);
    const gras = /^(?:[-*]\s+)?\*\*(?:question\s+)?(\d{1,2}(?:\.\d{1,2})?)[.)]?\s*(?:\(|\.|\*\*|:)/i.exec(l.texte);
    const m = gras || liste;
    if (m) {
      const num = m[1];
      const cle = prefixe && !num.includes('.') ? `${prefixe}.${num}` : num;
      cur = { cle, lignes: [l.texte] };
      qs.push(cur);
      continue;
    }
    if (cur) cur.lignes.push(l.texte);
  }
  return qs.map((q) => {
    const texte = q.lignes.join('\n').trim();
    return { cle: q.cle, libelle: q.libelle ?? `Question ${q.cle}`, texte, points: pointsDe(texte) };
  });
}

/** Lignes « Barème indicatif. A : 4 pts ; B : 10 pts ; … » d'un corrigé. */
export function baremeIndicatif(corrige) {
  const m = /bar[èe]me indicatif\W*\s*([^\n]+)/i.exec(String(corrige ?? ''));
  if (!m) return null;
  const crit = m[1].split(/\s*;\s*/).map((morceau) => {
    const c = /^(.*?)\s*:\s*(\d+(?:[.,]\d+)?)\s*(?:points?|pts?)\b/i.exec(morceau.trim());
    return c ? { titre: c[1].replace(/\*\*/g, '').trim(), points: Number(c[2].replace(',', '.')) } : null;
  });
  if (crit.length < 2 || crit.some((c) => !c || !c.titre)) return null;
  return crit.map((c) => ({ ...c, titre: c.titre.charAt(0).toUpperCase() + c.titre.slice(1) }));
}

const proche = (a, b) => Math.abs(a - b) < 1e-6;

/** Toutes les sections, tous niveaux : chaque titre avec son corps jusqu'au prochain titre de niveau inférieur ou égal. */
export function toutesSections(md) {
  const lignes = lignesAnnotees(md);
  const res = [];
  lignes.forEach((l, i) => {
    if (!l.titre) return;
    const corps = [];
    for (let j = i + 1; j < lignes.length; j++) {
      if (lignes[j].titre && lignes[j].niveau <= l.niveau) break;
      corps.push(lignes[j].texte);
    }
    res.push({ titre: l.titre, niveau: l.niveau, corps: corps.join('\n').trim() });
  });
  return res;
}

/** Deux clés désignent-elles la même partie ? (égales, ou l'une commence l'autre pour les titres en toutes lettres). */
export function memeCle(a, b) {
  if (!a || !b) return false;
  if (a === b) return true;
  if (/\s/.test(a) || /\s/.test(b)) return false; // « exercice 1 » ≠ « exercice 12 »
  return a.length >= 6 && b.length >= 6 && (a.startsWith(b) || b.startsWith(a));
}

/**
 * Rapproche les parties notées de l'énoncé des morceaux du corrigé :
 * par clé (titres de tous niveaux, puis libellés en gras), puis par ordre si les nombres coïncident.
 */
function rapprocher(items, corrige) {
  const candidats = [...toutesSections(corrige), ...segmentsGras(corrige).sections]
    .map((s) => ({ ...s, cle: cleTitre(s.titre), pris: false }));
  const res = items.map((it) => {
    const c = cleTitre(it.titre);
    const s = candidats.find((x) => !x.pris && memeCle(x.cle, c));
    if (s) { s.pris = true; return s; }
    return null;
  });
  if (res.some((r) => !r)) {
    // Même nombre de parties, dans le même ordre (« Comprehension » / « Compréhension », « Written expression » / « Expression »).
    let haut = sectionsDe(corrige).sections;
    if (haut.length !== items.length) haut = segmentsGras(corrige).sections;
    if (haut.length === items.length) return haut.map((s) => ({ ...s }));
  }
  return res;
}

/**
 * Analyse complète d'un sujet pour l'épreuve.
 * @param {{id, titre, examen, matiere, contenu}} sujet
 * @returns {{
 *   enonce, corrige, aCorrige, duree: {minutes, source},
 *   bareme: 'sujet'|'partiel'|'estime', total,
 *   parties: {id, titre, points, enonce, corrige|null, questions: {id, libelle, points, corrige}[]|null}[],
 *   criteres: {id, partieId, libelle, points}[]   // ce que l'élève coche
 * }}
 */
export function analyserSujet(sujet) {
  const { enonce, corrige } = separerSujet(sujet?.contenu);
  const duree = dureeEpreuve(sujet, enonce);
  const base = { enonce, corrige, aCorrige: !!corrige, duree };
  if (!corrige) return { ...base, bareme: null, total: 0, parties: [], criteres: [] };

  let parties = [];
  let bareme = 'sujet';
  const notees = sectionsNotees(enonce);

  if (notees.length) {
    // 1. Parties notées dans l'énoncé, rapprochées des sections du corrigé.
    const paires = rapprocher(notees, corrige);
    const questionsGlobales = new Map(questionsDe(corrige).map((q) => [q.cle, q]));
    parties = notees.map((s, i) => {
      const cs = paires[i];
      const partie = {
        id: `p${i + 1}`,
        titre: titrePropre(s.titre),
        points: s.points,
        enonce: s.corps,
        corrige: cs ? cs.corps : null,
        questions: null,
      };
      // Questions : seulement si toutes les questions de l'énoncé ont leur corrigé
      // (dans la partie correspondante du corrigé, sinon dans tout le corrigé s'il n'est pas découpé).
      const qe = questionsDe(s.corps);
      const cles = new Set(qe.map((q) => q.cle));
      const parCle = new Map(cs ? questionsDe(cs.corps).map((q) => [q.cle, q]) : questionsGlobales);
      // Questions « titrées » (sous-titre noté) : leur corrigé est cherché par titre dans tout le corrigé.
      for (const q of qe) {
        if (!q.cle.startsWith('T:') || parCle.has(q.cle)) continue;
        const c = corrigeParTitre(corrige, q.cle.slice(2));
        if (c) parCle.set(q.cle, { cle: q.cle, texte: c, points: null });
      }
      {
        if (qe.length >= 2 && cles.size === qe.length && qe.every((q) => parCle.has(q.cle))) {
          const pts = qe.map((q) => q.points ?? parCle.get(q.cle).points);
          const somme = pts.reduce((a, b) => a + (b ?? 0), 0);
          const officiels = pts.every((p) => p != null) && proche(somme, s.points);
          if (!officiels) bareme = 'partiel';
          partie.questions = qe.map((q, j) => ({
            id: `${partie.id}q${q.cle}`,
            libelle: q.libelle,
            points: officiels ? pts[j] : s.points / qe.length,
            enonce: q.texte,
            corrige: parCle.get(q.cle).texte,
          }));
          partie.introCorrige = cs ? textAvantPremiereQuestion(cs.corps) : '';
          partie.repartitionEstimee = !officiels;
        }
      }
      return partie;
    });
  } else {
    const crit = baremeIndicatif(corrige);
    if (crit) {
      // 2. Barème indicatif écrit dans le corrigé (critères de dissertation…).
      parties = crit.map((c, i) => ({ id: `c${i + 1}`, titre: c.titre, points: c.points, enonce: null, corrige: null, questions: null }));
    } else {
      // 3. Estimation : chaque partie du corrigé compte autant.
      bareme = 'estime';
      let sc = sectionsDe(corrige).sections;
      if (sc.length < 2) {
        const g = segmentsGras(sc.length === 1 ? sc[0].corps : corrige).sections;
        if (g.length >= 2) sc = g;
      }
      if (!sc.length) sc = [{ titre: 'Ta copie dans son ensemble', corps: corrige }];
      parties = sc.map((s, i) => ({
        id: `e${i + 1}`,
        titre: titrePropre(s.titre),
        points: 20 / sc.length,
        enonce: null,
        corrige: s.corps,
        questions: null,
      }));
    }
  }

  const criteres = [];
  for (const p of parties) {
    if (p.questions) for (const q of p.questions) criteres.push({ id: q.id, partieId: p.id, libelle: q.libelle, points: q.points });
    else criteres.push({ id: p.id, partieId: p.id, libelle: p.titre, points: p.points });
  }
  const total = criteres.reduce((a, c) => a + c.points, 0);
  return { ...base, bareme, total, parties, criteres };
}

/** Morceau du corrigé (titre ou libellé en gras) dont la clé correspond. */
function corrigeParTitre(corrige, cle) {
  const c = [...toutesSections(corrige), ...segmentsGras(corrige).sections].find((x) => memeCle(cleTitre(x.titre), cle));
  return c ? c.corps : null;
}

function textAvantPremiereQuestion(corps) {
  const lignes = String(corps ?? '').split(/\r?\n/);
  const i = lignes.findIndex((l) => /^(\d{1,2})[.)]\s+\S/.test(l) || /^\*\*(?:question\s+)?\d/i.test(l) || /^#{1,6}\s/.test(l));
  return (i < 0 ? '' : lignes.slice(0, i).join('\n')).trim();
}

// ───────────────────────────── note ─────────────────────────────

/** Auto-évaluation : part des points accordée. */
export const NIVEAUX = {
  reussi: { coef: 1, libelle: 'Réussi', icone: '✅' },
  moitie: { coef: 0.5, libelle: 'À moitié', icone: '🌓' },
  rate: { coef: 0, libelle: 'Raté', icone: '❌' },
};

/** Arrondi au demi-point (comme une note de copie). */
export const arrondiDemi = (x) => Math.round(x * 2) / 2;

/**
 * Note à partir des auto-évaluations.
 * @param {{id, points}[]} criteres
 * @param {Record<string, 'reussi'|'moitie'|'rate'>} reponses
 * @returns {{points, total, note20, coches, manquants, complet}}
 */
export function calculerNote(criteres, reponses = {}) {
  let points = 0;
  let total = 0;
  let coches = 0;
  for (const c of criteres || []) {
    total += c.points;
    const n = NIVEAUX[reponses[c.id]];
    if (n) { coches += 1; points += c.points * n.coef; }
  }
  const nb = (criteres || []).length;
  const note20 = total > 0 ? arrondiDemi((points / total) * 20) : 0;
  return { points: Math.round(points * 100) / 100, total: Math.round(total * 100) / 100, note20, coches, manquants: nb - coches, complet: nb > 0 && coches === nb };
}

/** « 12,5 » (virgule décimale, sans zéro inutile). */
export function nombreFr(x, decimales = 1) {
  const r = Math.round(x * 10 ** decimales) / 10 ** decimales;
  return String(r).replace('.', ',');
}

// ───────────────────────────── chronomètre ─────────────────────────────
// État : { ecouleMs, depuis } — `depuis` = horodatage de la dernière reprise (null = en pause).
// Tout est calculé à partir de l'horloge : fiable même si l'onglet dort ou si l'appli est rouverte.

export function demarrerChrono(maintenant) { return { ecouleMs: 0, depuis: maintenant }; }
export function enPause(c) { return !c || c.depuis == null; }
export function tempsEcoule(c, maintenant) {
  if (!c) return 0;
  return c.ecouleMs + (c.depuis == null ? 0 : Math.max(0, maintenant - c.depuis));
}
export function mettreEnPause(c, maintenant) {
  if (enPause(c)) return c;
  return { ecouleMs: tempsEcoule(c, maintenant), depuis: null };
}
export function reprendre(c, maintenant) {
  if (!c) return demarrerChrono(maintenant);
  if (!enPause(c)) return c;
  return { ...c, depuis: maintenant };
}
/** Temps restant en ms (0 au minimum). */
export function tempsRestant(c, dureeMs, maintenant) {
  return Math.max(0, dureeMs - tempsEcoule(c, maintenant));
}

/** « 1:59:07 » ou « 9:07 ». */
export function formaterChrono(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const deux = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${deux(m)}:${deux(sec)}` : `${m}:${deux(sec)}`;
}

/** « 2 h », « 1 h 30 », « 45 min ». */
export function formaterDuree(minutes) {
  const m = Math.round(minutes);
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (!h) return `${r} min`;
  return r ? `${h} h ${String(r).padStart(2, '0')}` : `${h} h`;
}

/** Couleur d'alerte : normal, puis « bientôt » (≤ 10 % ou ≤ 15 min), puis « fin » (≤ 5 min). */
export function phaseChrono(restantMs, dureeMs) {
  if (restantMs <= 5 * 60 * 1000) return 'fin';
  if (restantMs <= Math.max(0.1 * dureeMs, 15 * 60 * 1000)) return 'bientot';
  return 'normal';
}

// ───────────────────────────── XP et historique ─────────────────────────────

export const MAX_EPREUVES = 30;

/**
 * XP d'une épreuve auto-évaluée : 10 de participation + la note arrondie la première fois ;
 * ensuite seulement le progrès par rapport à la meilleure note sur ce sujet.
 * Aucune XP si l'épreuve a duré moins d'un quart du temps prévu (corrigé lu trop tôt).
 */
export function xpEpreuve({ note20, meilleureAvant = null, tempsMs, dureeMs }) {
  if (!(dureeMs > 0) || !(tempsMs >= dureeMs / 4)) return 0;
  const n = Math.round(note20);
  if (meilleureAvant == null) return 10 + n;
  return Math.max(0, n - Math.round(meilleureAvant));
}

/** Meilleure note déjà obtenue sur ce sujet (historique), ou null. */
export function meilleureNote(epreuves, sujetId) {
  const notes = (epreuves || []).filter((e) => e && e.sujetId === sujetId && typeof e.note20 === 'number').map((e) => e.note20);
  return notes.length ? Math.max(...notes) : null;
}

const ordre = (x, y) => (y.fin || 0) - (x.fin || 0) || String(y.date || '').localeCompare(String(x.date || '')) || String(y.id).localeCompare(String(x.id));

/** Ajoute une épreuve à l'historique (plus récente d'abord, 30 au plus). */
export function ajouterEpreuve(liste, entree) {
  const sans = (Array.isArray(liste) ? liste : []).filter((e) => e && e.id !== entree.id);
  return [entree, ...sans].sort(ordre).slice(0, MAX_EPREUVES);
}

/** Fusion de deux historiques (deux appareils) : union par id, plus récentes d'abord, 30 au plus. */
export function fusionnerEpreuves(a, b) {
  const m = new Map();
  for (const e of [...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])]) if (e && e.id) m.set(e.id, e);
  return [...m.values()].sort(ordre).slice(0, MAX_EPREUVES);
}
