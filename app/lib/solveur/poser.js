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

/**
 * Soustraction posée (a ≥ b), méthode « par compensation » enseignée à l'école :
 * quand le chiffre du haut est trop petit, on lui ajoute 10 et on retient 1,
 * que l'on ajoute au chiffre du bas du rang suivant. Chaque chiffre affiché est
 * celui de l'opération posée (avant : « 9 − 0 » pour 1 000 − 1, où le 9 n'existe pas).
 */
export function poserSoustraction(a, b) {
  const A = chiffres(a);
  const B = chiffres(b);
  const n = A.length;
  let retenue = 0;
  const etapes = [];
  for (let i = 0; i < n; i++) {
    const haut = A[i] || 0;
    const bas = (B[i] || 0) + retenue;
    const basTxt = retenue ? `(${B[i] || 0} + ${retenue} de retenue)` : `${bas}`;
    if (haut < bas) {
      const c = haut + 10 - bas;
      etapes.push(`${cap(rangNom(i))} : ${haut} est plus petit que ${basTxt} : on emprunte 10, ${haut + 10} − ${bas} = ${c}. J'écris ${c} et je retiens 1.`);
      retenue = 1;
    } else {
      const c = haut - bas;
      const tete = c === 0 && i === n - 1 && i > 0;
      etapes.push(`${cap(rangNom(i))} : ${haut} − ${basTxt} = ${c}.${tete ? ' Un 0 à gauche ne s’écrit pas.' : ` J'écris ${c}.`}`);
      retenue = 0;
    }
  }
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
