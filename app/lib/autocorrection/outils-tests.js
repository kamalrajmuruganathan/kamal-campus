/**
 * Outils pour les tests de l'autocorrection (pas utilisés par l'appli).
 *
 *  - chargerExercices() : tous les exercices de contenu/<niveau>/<parcours>/<chapitre>/,
 *    fusionnés avec attendus.json comme le fait scripts/generer-index.mjs, avec la
 *    matière lue dans l'en-tête de fiche.md (c'est celle que reçoit l'écran Exercices) ;
 *  - commeAffiche(reponse) : la réponse telle qu'un élève la recopierait à partir de
 *    l'affichage (LaTeX rendu : « $\dfrac{9}{7}$ » → « 9/7 », « $\mathrm{Mg}^{2+}$ » → « Mg^2+ »).
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fusionnerAttendus } from './index.js';

export const CONTENU = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'contenu');

const dossiers = (d) => readdirSync(d).filter((x) => !x.startsWith('.') && statSync(join(d, x)).isDirectory()).sort();

function matiereDe(fiche, defaut) {
  try {
    const m = readFileSync(fiche, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const l = m && m[1].match(/^matiere:\s*(.*)$/m);
    return l ? l[1].trim().replace(/^["']|["']$/g, '') : defaut;
  } catch {
    return defaut;
  }
}

/** [{ id: 'niveau/parcours/chapitre#n', chemin, ex, matiere }], plus les lignes d'attendus.json périmées. */
export function chargerExercices() {
  const exercices = [];
  const ecarts = [];
  for (const niveau of dossiers(CONTENU)) {
    for (const parcours of dossiers(join(CONTENU, niveau))) {
      for (const chapitre of dossiers(join(CONTENU, niveau, parcours))) {
        const d = join(CONTENU, niveau, parcours, chapitre);
        const fEx = join(d, 'exercice.json');
        if (!existsSync(fEx)) continue;
        const chemin = `${niveau}/${parcours}/${chapitre}`;
        const matiere = matiereDe(join(d, 'fiche.md'), 'mathematiques');
        let exo = JSON.parse(readFileSync(fEx, 'utf8'));
        const fAtt = join(d, 'attendus.json');
        if (existsSync(fAtt)) {
          const r = fusionnerAttendus(exo, JSON.parse(readFileSync(fAtt, 'utf8')));
          exo = r.exercice;
          for (const e of r.ecarts) ecarts.push(`${chemin}#${e}`);
        }
        for (const ex of exo.exercices || []) exercices.push({ id: `${chemin}#${ex.id}`, chemin, ex, matiere });
      }
    }
  }
  return { exercices, ecarts };
}

/* ─── LaTeX affiché → ce qu'un élève tape ─────────────────────────────── */

function accolade(s, i) {
  let p = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') p++;
    else if (s[j] === '}' && --p === 0) return [s.slice(i + 1, j), j + 1];
  }
  return null;
}

const groupe = (x) => (/^(?:\d+(?:[.,]\d+)?|[A-Za-zπ])$/u.test(x.trim()) ? x.trim() : `(${x})`);

function formule(s) {
  // Noyaux « {}^{14}_{7}\mathrm{N} » → « 14 7 N » (forme annoncée sous le champ de saisie).
  s = s.replace(/\{\}\s*\^\s*\{([^{}]*)\}\s*_\s*\{([^{}]*)\}\s*(?:\\mathrm\s*)?\{?([A-Za-z]{1,2})\}?/g, (_, a, z, x) => (x === 'e' ? ` e${z.startsWith('-') ? '-' : '+'} ` : ` ${a} ${z} ${x} `));
  s = s.replace(/\\(?:left|right|displaystyle|limits|big|Big)\b\s*/g, '')
    .replace(/\\(?:mathrm|text|textrm|mathit|mathcal|mathbf|operatorname|boldsymbol)\s*\{/g, '{')
    .replace(/\\(?:overrightarrow|vec)\s*\{([^{}]*)\}/g, '$1').replace(/\\vec\s*(\w)/g, '$1');
  for (let g = 0; g < 60; g++) {
    const m = s.match(/\\[dt]?frac\s*\{|\\sqrt\s*\{/);
    if (!m) break;
    const a = accolade(s, m.index + m[0].length - 1);
    if (!a) break;
    if (m[0].includes('sqrt')) { s = s.slice(0, m.index) + '√' + groupe(formule(a[0])) + s.slice(a[1]); continue; }
    const j = s.slice(a[1]).search(/\S/) + a[1];
    const b = s[j] === '{' && accolade(s, j);
    if (!b) break;
    s = s.slice(0, m.index) + groupe(formule(a[0])) + '/' + groupe(formule(b[0])) + s.slice(b[1]);
  }
  return s.replace(/\{,\}/g, ',').replace(/\\[,;:!]|\\ |~/g, ' ')
    .replace(/\\times/g, '×').replace(/\\cdot/g, '·').replace(/\\div/g, '÷').replace(/\\approx/g, '≈')
    .replace(/\\(?:leqslant|leq|le)\b/g, '≤').replace(/\\(?:geqslant|geq|ge)\b/g, '≥').replace(/\\neq?\b/g, '≠')
    .replace(/\\infty/g, '∞').replace(/\\pi\b/g, 'π').replace(/\\(?:long)?(?:right)?arrow|\\to\b/g, '→')
    .replace(/\\in\b/g, '∈').replace(/\\cup/g, '∪').replace(/\\cap/g, '∩').replace(/\\pm/g, '±')
    .replace(/\\lbrace|\\\{/g, '{').replace(/\\rbrace|\\\}/g, '}').replace(/\\%/g, '%')
    .replace(/\\degree|\^\s*\\circ|\^\{\\circ\}/g, '°').replace(/\\circ/g, '°')
    .replace(/\\mu/g, 'µ').replace(/\\Omega/g, 'Ω').replace(/\\Delta/g, 'Δ').replace(/\\alpha/g, 'α').replace(/\\theta/g, 'θ')
    .replace(/\\lambda/g, 'λ').replace(/\\omega/g, 'ω').replace(/\\varphi|\\phi/g, 'φ').replace(/\\sigma/g, 'σ').replace(/\\tau\b/g, 'τ')
    .replace(/\\eta\b/g, 'η').replace(/\\ell\b/g, 'ℓ').replace(/\\imath/g, 'i').replace(/\\jmath/g, 'j').replace(/\\widehat\s*/g, '')
    .replace(/\\mathbb\s*\{?(\w)\}?/g, '$1').replace(/\\varnothing|\\emptyset/g, '∅')
    .replace(/\\(ln|log|exp|cos|sin|tan|lim)\b/g, '$1 ')
    .replace(/_\{([^{}]*)\}/g, '$1').replace(/_(\w)/g, '$1')
    .replace(/\^\{(\d*[+-])\}/g, '^$1').replace(/\^\{([^{}]*)\}/g, (_, e) => '^' + (e.length > 1 ? `(${e})` : e))
    .replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
}

export function commeAffiche(reponse) {
  return String(reponse).replace(/\$([^$]*)\$/g, (_, m) => formule(m)).replace(/\s+/g, ' ').trim();
}

/** Formes qu'un élève taperait en recopiant la réponse : telle quelle, sans parenthèse explicative, sans point final. */
export function recopies(reponse) {
  const r = commeAffiche(reponse);
  const sans = r.replace(/(^|\s+)\([^()]*\)/g, '').replace(/[.\s]+$/, '').trim();
  // « grandfather ou grandpa » : l'une des deux.
  const ou = sans.split(/\s+ou\s+/)[0];
  return [...new Set([r, r.replace(/\.$/, ''), sans, ou].filter(Boolean))];
}

/** Générateur pseudo-aléatoire reproductible (graine fixe). */
export function hasard(graine = 1) {
  let s = graine >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}
