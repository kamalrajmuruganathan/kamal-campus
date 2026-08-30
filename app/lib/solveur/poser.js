/**
 * Opérations posées, expliquées colonne par colonne (avec les retenues et
 * les emprunts). Sert au résolveur : quand on tape « 47 + 85 », on montre le
 * calcul « comme à l'école », rang par rang.
 */

const RANGS = ['unités', 'dizaines', 'centaines', 'milliers', 'dizaines de mille', 'centaines de mille', 'millions'];
const rangNom = (i) => RANGS[i] || `rang ${i + 1}`;
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const chiffres = (n) => String(n).split('').reverse().map(Number);

/** Addition posée : retenues expliquées. */
export function poserAddition(a, b) {
  const A = chiffres(a);
  const B = chiffres(b);
  const n = Math.max(A.length, B.length);
  let retenue = 0;
  let res = '';
  const etapes = [];
  for (let i = 0; i < n; i++) {
    const da = A[i] || 0;
    const db = B[i] || 0;
    const s = da + db + retenue;
    const c = s % 10;
    const nc = Math.floor(s / 10);
    let txt = `${cap(rangNom(i))} : ${da} + ${db}${retenue ? ` + ${retenue} (retenue)` : ''} = ${s}. J'écris ${c}`;
    txt += nc ? ` et je retiens ${nc}.` : '.';
    etapes.push(txt);
    res = c + res;
    retenue = nc;
  }
  if (retenue) { etapes.push(`Il reste la retenue ${retenue} à écrire à gauche.`); res = retenue + res; }
  etapes.push(`Résultat : ${a} + ${b} = ${a + b}.`);
  return { resultat: a + b, etapes };
}

/** Soustraction posée (a ≥ b) : emprunts expliqués. */
export function poserSoustraction(a, b) {
  const A = chiffres(a);
  const B = chiffres(b);
  const n = A.length;
  let emprunt = 0;
  let res = '';
  const etapes = [];
  for (let i = 0; i < n; i++) {
    let da = (A[i] || 0) - emprunt;
    const db = B[i] || 0;
    let empruntTxt = '';
    if (da < db) {
      da += 10;
      empruntTxt = ' (on emprunte 10 au rang suivant)';
      emprunt = 1;
    } else {
      emprunt = 0;
    }
    const c = da - db;
    etapes.push(`${cap(rangNom(i))} : ${da} − ${db} = ${c}${empruntTxt}.`);
    res = c + res;
  }
  res = String(Number(res)); // retire les zéros de gauche
  etapes.push(`Résultat : ${a} − ${b} = ${a - b}.`);
  return { resultat: a - b, etapes };
}

/** Multiplication posée : produits partiels puis somme. */
export function poserMultiplication(a, b) {
  const B = chiffres(b);
  const partiels = [];
  const etapes = [];
  B.forEach((d, k) => {
    const pp = a * d * 10 ** k;
    const rang = k === 0 ? '' : ` (× ${10 ** k}, rang des ${rangNom(k)})`;
    etapes.push(`${a} × ${d}${rang} = ${pp}.`);
    partiels.push(pp);
  });
  if (partiels.length > 1) {
    etapes.push(`On additionne les produits partiels : ${partiels.join(' + ')} = ${a * b}.`);
  }
  etapes.push(`Résultat : ${a} × ${b} = ${a * b}.`);
  return { resultat: a * b, etapes };
}

/**
 * À partir d'une saisie NORMALISÉE (× → *, − → -, ÷ → /), renvoie les étapes de
 * l'opération posée si c'est « entier op entier » avec + − ×, sinon null.
 */
export function poserDepuisTexte(brut) {
  const m = /^(\d+)([+\-*])(\d+)$/.exec(brut);
  if (!m) return null;
  const a = Number(m[1]);
  const b = Number(m[3]);
  if (m[2] === '+') return poserAddition(a, b).etapes;
  if (m[2] === '*') return poserMultiplication(a, b).etapes;
  if (m[2] === '-') return a >= b ? poserSoustraction(a, b).etapes : null;
  return null;
}
