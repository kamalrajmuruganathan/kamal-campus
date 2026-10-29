/**
 * « Remets dans l'ordre … » : attendus.json donne les éléments de l'énoncé dans le bon ordre
 *   { "reponse": "…", "ordre": ["on remplit le bac d'eau", "on met le bac au congélateur", …] }
 * (une variante d'un élément s'écrit « (b)¦définir les mots-clés » : lettre ou autre écriture).
 *
 * L'élève recopie les éléments dans l'ordre, séparés par des flèches, des virgules, des « ; »,
 * « puis », « < », des retours à la ligne ; il peut les numéroter (« 1) », « a. »). Comme ce
 * sont les éléments de l'énoncé, il peut les abréger : un morceau est reconnu s'il est égal à
 * un élément, ou si tous ses mots sont dans UN SEUL élément (« les dents broient » pour « les
 * dents broient l'aliment »). Chaque élément doit être cité une fois, à la bonne place.
 */

const sansAccents = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

/** Mots significatifs d'un élément (minuscules, sans accents ni articles ni ponctuation). */
function mots(s, accents) {
  let t = String(s).normalize('NFC').replace(/[’`´]/g, "'").replace(/œ/g, 'oe').replace(/Œ/g, 'OE');
  if (!accents) t = sansAccents(t);
  const tous = t.replace(/\b(?:[lLdDjJsSnN]|[qQ]u)'/g, ' ').replace(/[^\p{L}\p{N}]+/gu, ' ').trim().split(' ').filter(Boolean);
  const sans = tous.filter((w) => !/^(?:le|la|les|un|une|des|du|de|der|die|das|den|dem|the|a|an|el|los|las|il|lo|gli|i)$/i.test(w));
  // « a » seul (lettre d'une étape) reste « a » ; pluriel = singulier (« algues » = « algue »), sauf sigles (HTTPS).
  return (sans.length ? sans : tous).map((w) => (w.length > 3 && /\p{Ll}/u.test(w) ? w.replace(/s$/, '') : w).toLowerCase());
}

/** Découpages possibles de la saisie (séparateurs forts, virgules, phrases). */
export function decoupagesOrdre(saisie) {
  const t = String(saisie || '').normalize('NFC').replace(/[«»“”"]/g, ' ');
  const nettoie = (l) => l.map((x) => x.trim().replace(/^(?:puis|ensuite|enfin|et)\s+/i, '').replace(/^(?:\d{1,2}|[a-hA-H])\s*[).:-]\s*/, '')
    .replace(/^\(([a-hA-H1-9])\)\s*(?=\S)/, '').replace(/[.!?]+$/, '').trim()).filter((x) => /[\p{L}\p{N}]/u.test(x));
  const out = [];
  // Flèches, « ; », retours à la ligne : la virgule reste dans l'élément (« Hier, je lisais. »).
  if (/→|->|=>|⟶|⇒|;|\n/.test(t)) out.push(nettoie(t.split(/\s*(?:→|->|=>|⟶|⇒|;|\n)\s*/)));
  out.push(nettoie(t.split(/\s*(?:→|->|=>|⟶|⇒|;|\n|>|<|,(?!\d)|\s+puis\s+|\s[-–—]\s)\s*/)));
  // Phrases recopiées à la suite (« Prima di tutto, è utile. Inoltre, … »).
  out.push(nettoie(t.split(/(?<=[.!?])\s+(?=[\p{Lu}¿¡])/u)));
  return out;
}

/** Index de l'élément désigné par le morceau, ou -1 (aucun, ou plusieurs possibles). */
function designe(morceau, items, accents, etiquette = false) {
  const m = mots(morceau, accents);
  if (!m.length) return -1;
  const cle = m.join(' ');
  const exact = items.map((alts, i) => (alts.some((a) => mots(a, accents).join(' ') === cle) ? i : -1)).filter((i) => i >= 0);
  if (exact.length === 1) return exact[0];
  if (exact.length > 1) return -1;
  // Abréviation : tous les mots du morceau (dont un d'au moins 4 lettres) dans un seul élément.
  // Étiquette d'un groupe : « style roman » désigne « roman » (l'élève peut écrire plus).
  if (etiquette) {
    const large = items.map((alts, i) => (alts.some((a) => { const ma = mots(a, accents); return ma.length && ma.every((w) => m.includes(w)); }) ? i : -1)).filter((i) => i >= 0);
    if (large.length === 1) return large[0];
  }
  if (!m.some((w) => w.length >= 3 || /\d/.test(w))) return -1;
  const inclus = items.map((alts, i) => (alts.some((a) => { const ma = mots(a, accents); return m.every((w) => ma.includes(w)); }) ? i : -1)).filter((i) => i >= 0);
  return inclus.length === 1 ? inclus[0] : -1;
}

/** La saisie donne-t-elle les éléments dans le bon ordre ? */
export function egalOrdre(saisie, alt, accents = false) {
  return decoupagesOrdre(saisie).some((parts) => parts.length === alt.items.length
    && parts.every((p, k) => designe(p, alt.items, accents) === k));
}

export function analyserOrdre(liste) {
  if (!Array.isArray(liste) || liste.length < 2 || liste.length > 8) return null;
  const items = liste.map((x) => String(x).split('¦').map((y) => y.trim()).filter(Boolean));
  if (items.some((alts) => !alts.length)) return null;
  return { kind: 'ordre', items };
}

export function consigneOrdre(alt) {
  return `les ${alt.items.length} éléments dans l'ordre, séparés par des flèches → ou des virgules`;
}

/* ------------------------------------------------------------------ */
/* « Classe ces mots … », « Associe chaque … » : groupes écrits à la main */
/* ------------------------------------------------------------------ */
//
// attendus.json : { "reponse": "…", "groupes": { "Roman": ["abbatiale de Conques", "abbatiale de Cluny"],
//                                              "Gothique": ["cathédrale de Chartres", "Sainte-Chapelle"] } }
// (étiquette et éléments : ceux de l'énoncé ; variantes « (a)¦diagramme des cas d'utilisation »).
// L'élève écrit « Roman : Conques, Cluny ; Gothique : Chartres, Sainte-Chapelle » (ou avec des
// flèches, des retours à la ligne, « = »). Groupes dans n'importe quel ordre, éléments aussi ;
// chaque morceau doit désigner un seul élément (même tolérance qu'« ordre »).

export function analyserGroupes(groupes) {
  if (!groupes || typeof groupes !== 'object' || Array.isArray(groupes)) return null;
  const entrees = Object.entries(groupes);
  if (entrees.length < 2 || entrees.length > 8) return null;
  if (entrees.some(([, l]) => !Array.isArray(l) || !l.length || l.some((x) => typeof x !== 'string' || !x.trim()))) return null;
  const decoupe = (x) => String(x).split('¦').map((y) => y.trim()).filter(Boolean);
  const labels = entrees.map(([k]) => decoupe(k));
  const items = [];
  const groupe = [];
  entrees.forEach(([, l], g) => l.forEach((x) => { items.push(decoupe(x)); groupe.push(g); }));
  if (items.length > 16) return null;
  return { kind: 'groupes', labels, items, groupe };
}

/** Lectures possibles d'une saisie : [{ label, items: [morceaux] }]. */
function lecturesGroupes(saisie) {
  const t = String(saisie || '').normalize('NFC').replace(/[«»“”"]/g, ' ').trim().replace(/\.$/, '');
  const out = [];
  const nettoie = (x) => x.trim().replace(/[.!?]+$/, '');
  for (const sepG of [/\s*(?:;|\n)\s*/, /\s*(?:;|\n|\.\s+|\s\/\s)\s*/]) {
    const gs = t.split(sepG).map((x) => x.trim()).filter(Boolean);
    // (« 2,0 » : une virgule entre deux chiffres est décimale.)
    for (const sepI of [/\s*(?:,\s+|(?<!\d),|,(?!\d))\s*/, /\s*(?:,\s+|(?<!\d),|,(?!\d))\s*|\s+(?:et|and|und|y|e)\s+/i]) {
      const coupe = (x) => x.split(sepI).map(nettoie).filter(Boolean);
      const sens = (g) => g.match(/^([^:]+?)\s*:\s*(.+)$/) || g.match(/^(.+?)\s*(?:→|->|=>|⟶|\s=\s|=)\s*(.+)$/);
      // « étiquette : éléments » ; « éléments : étiquette » (« Mesurer → acquérir ») ; « a) et c) étiquette ».
      const lectures = [
        gs.map((g) => { const m = sens(g); return m && { label: m[1].trim(), items: coupe(m[2]) }; }),
        gs.map((g) => { const m = sens(g); return m && { label: m[2].trim(), items: coupe(m[1]) }; }),
        gs.map((g) => {
          const m = g.match(/^((?:\(?[a-hA-H1-9]\)\s*(?:,|et)?\s*)+)\s*(\D.*)$/);
          return m && { label: m[2].trim(), items: m[1].match(/[a-hA-H1-9](?=\))/g) };
        }),
      ];
      for (const lu of lectures) if (lu.every(Boolean)) out.push(lu);
    }
  }
  // « went (go), bought (buy) » : un élément et son étiquette entre parenthèses (dans un sens ou dans l'autre).
  const paren = t.split(/\s*[,;\n]\s*/).map((g) => g.match(/^(.+?)\s*\(([^()]+)\)$/));
  if (paren.length >= 2 && paren.every(Boolean)) {
    out.push(paren.map((m) => ({ label: m[2].trim(), items: [nettoie(m[1])] })));
    out.push(paren.map((m) => ({ label: m[1].trim(), items: [nettoie(m[2])] })));
  }
  return out;
}

export function egalGroupes(saisie, alt, accents = false) {
  return lecturesGroupes(saisie).some((lu) => {
    if (lu.length !== alt.labels.length) return false;
    const vus = new Set();
    const pris = new Set();
    for (const g of lu) {
      const l = designe(g.label, alt.labels, accents, true);
      if (l < 0 || vus.has(l)) return false;
      vus.add(l);
      const attendus = alt.groupe.map((x, i) => (x === l ? i : -1)).filter((i) => i >= 0);
      if (g.items.length !== attendus.length) return false;
      for (const it of g.items) {
        const i = designe(it, alt.items, accents);
        if (i < 0 || pris.has(i) || alt.groupe[i] !== l) return false;
        pris.add(i);
      }
    }
    return pris.size === alt.items.length;
  });
}

export function consigneGroupes(alt) {
  // Les étiquettes ne sont pas montrées (elles font parfois partie de ce qu'il faut savoir).
  return `${alt.labels.length} groupes séparés par « ; », par ex. « groupe : élément, élément ; groupe : élément »`;
}
