/**
 * Composition d'un QCM « par parcours » — logique pure.
 *
 * Un QCM de parcours mélange les questions de tous les chapitres d'un même
 * niveau + parcours, puis en garde un échantillon. Aucune dépendance à React :
 * le hasard est injecté (`rand`) pour rester testable de façon déterministe.
 */

/** Mélange (Fisher-Yates) une copie de la liste. `rand` doit renvoyer [0, 1[. */
export function melanger(liste, rand = Math.random) {
  const a = liste.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

/** Toutes les questions de QCM d'une liste de chapitres, à plat. */
export function poolQuestions(chapitres) {
  const pool = [];
  for (const c of chapitres || []) {
    const qs = c?.qcm?.questions ?? [];
    for (const q of qs) pool.push(q);
  }
  return pool;
}

/**
 * Compose un QCM de parcours : mélange le pool et en garde au plus `n`.
 * @param {Array} chapitres  chapitres du niveau+parcours
 * @param {number} n         nombre de questions visé (défaut 15)
 * @param {() => number} rand
 */
export function composerQcm(chapitres, n = 15, rand = Math.random) {
  return melanger(poolQuestions(chapitres), rand).slice(0, Math.max(0, n));
}

const CITE_UNE_LETTRE = /\b(choix|réponses?|propositions?|options?)\s+\(?[A-F]\b/i;

/**
 * Mélange les choix d'une question de QCM et recalcule l'indice de la bonne
 * réponse. Renvoie une copie ; une question mal formée est rendue telle quelle.
 * (Les banques écrites placent souvent la bonne réponse en A ou B : sans ce
 * mélange, répondre « A » à tout suffisait dans une centaine de chapitres.)
 */
export function melangerChoix(q, rand = Math.random) {
  if (!q || !Array.isArray(q.choix) || q.choix.length < 2) return q;
  if (!Number.isInteger(q.reponse) || q.reponse < 0 || q.reponse >= q.choix.length) return q;
  // Explication qui cite une lettre (« le piège du choix B ») : l'ordre doit rester celui écrit.
  if (CITE_UNE_LETTRE.test(String(q.explication ?? ''))) return q;
  const ordre = melanger(q.choix.map((_, i) => i), rand);
  return { ...q, choix: ordre.map((i) => q.choix[i]), reponse: ordre.indexOf(q.reponse) };
}

/** Garde la première question de chaque énoncé (les doublons sont retirés). */
export function sansDoublons(questions) {
  const vus = new Set();
  const res = [];
  for (const q of Array.isArray(questions) ? questions : []) {
    const cle = String(q?.enonce ?? '').trim();
    if (!q || vus.has(cle)) continue;
    vus.add(cle);
    res.push(q);
  }
  return res;
}

/**
 * Complète une liste de questions (générées) avec des questions d'une réserve
 * (banque écrite), tirées au hasard et sans énoncé en double, jusqu'à `n`.
 * Le résultat est mélangé quand la réserve a servi.
 */
export function completerQuestions(base, reserve, n, rand = Math.random) {
  const debut = sansDoublons(base).slice(0, Math.max(0, n));
  if (debut.length >= n) return debut;
  const vus = new Set(debut.map((q) => String(q.enonce ?? '').trim()));
  const ajout = [];
  for (const q of melanger(Array.isArray(reserve) ? reserve : [], rand)) {
    if (debut.length + ajout.length >= n) break;
    const cle = String(q?.enonce ?? '').trim();
    if (!q || vus.has(cle)) continue;
    vus.add(cle);
    ajout.push(q);
  }
  return ajout.length ? melanger([...debut, ...ajout], rand) : debut;
}

/**
 * Chapitres d'un niveau donné quand il y en a assez (au moins `min`), sinon
 * toute la liste : un élève de 4e ne doit pas tomber sur des questions de CP
 * ou de Terminale dans un jeu « au hasard ».
 */
export function preferNiveau(chapitres, niveau, min = 2) {
  const liste = Array.isArray(chapitres) ? chapitres : [];
  if (!niveau) return liste;
  const du = liste.filter((c) => c && c.niveau === niveau);
  return du.length >= min ? du : liste;
}
