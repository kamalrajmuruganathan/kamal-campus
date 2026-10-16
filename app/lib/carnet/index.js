/**
 * Carnet d'erreurs — logique pure, testable, sans dépendance.
 *
 * Toute question de QCM ou tout exercice raté entre dans le carnet. Il revient
 * ensuite à intervalles croissants (répétition espacée) :
 *   raté → à revoir demain ; réussi → dans 3 jours ; réussi → dans 7 jours ;
 *   réussi une 3e fois → « maîtrisé », il sort du carnet.
 * Un nouvel échec le remet au début (demain). Une réussite avant la date prévue
 * ne compte pas (on ne fait avancer que les révisions « dues »).
 *
 * Entrée : { cle, type: 'qcm' | 'exo', matiere, chapitreId, titre,
 *            question (qcm) | exoId (exo), etape, prochaine: 'AAAA-MM-JJ',
 *            echecs, ajoute: 'AAAA-MM-JJ', maj: ISO }
 */

/** Jours d'attente avant la révision suivante, selon le nombre de réussites. */
export const INTERVALLES = [1, 3, 7];
/** Réussites espacées nécessaires pour qu'une erreur soit maîtrisée. */
export const REUSSITES_POUR_MAITRISER = INTERVALLES.length;
/** Taille maximale du carnet (les plus anciennes erreurs partent en premier). */
export const MAX_CARNET = 300;

/** « 2026-10-13 » + n jours. */
export function ajouterJours(jour, n) {
  const [a, m, j] = String(jour).split('-').map(Number);
  const d = new Date(Date.UTC(a, m - 1, j + n));
  return d.toISOString().slice(0, 10);
}

/** Clé d'une question de QCM (son énoncé). */
export function cleQcm(enonce) {
  return 'q:' + String(enonce || '').trim().slice(0, 160);
}

/** Clé d'un exercice (chapitre + identifiant). */
export function cleExo(chapitreId, exoId) {
  return `e:${chapitreId}#${exoId}`;
}

/**
 * Note des résultats dans le carnet.
 * @param {Array} carnet  entrées actuelles
 * @param {Array<{cle:string, juste:boolean, infos:object}>} resultats
 * @param {string} aujourdhui  'AAAA-MM-JJ'
 * @returns {{carnet: Array, maitrisees: number}}
 */
export function noter(carnet, resultats, aujourdhui, maintenant = new Date().toISOString()) {
  const parCle = new Map((Array.isArray(carnet) ? carnet : []).map((e) => [e.cle, e]));
  let maitrisees = 0;
  for (const r of Array.isArray(resultats) ? resultats : []) {
    if (!r || !r.cle || typeof r.juste !== 'boolean') continue;
    const e = parCle.get(r.cle);
    if (r.juste === false) {
      parCle.delete(r.cle); // réinsérée en fin : la plus récente
      parCle.set(r.cle, {
        ...(e || {}),
        ...(r.infos || {}),
        cle: r.cle,
        etape: 0,
        prochaine: ajouterJours(aujourdhui, INTERVALLES[0]),
        echecs: ((e && e.echecs) || 0) + 1,
        ajoute: (e && e.ajoute) || aujourdhui,
        maj: maintenant,
      });
    } else if (e && e.prochaine <= aujourdhui) {
      const etape = (e.etape || 0) + 1;
      if (etape >= REUSSITES_POUR_MAITRISER) {
        parCle.delete(r.cle);
        maitrisees++;
      } else {
        parCle.set(r.cle, { ...e, etape, prochaine: ajouterJours(aujourdhui, INTERVALLES[etape]), maj: maintenant });
      }
    }
  }
  let arr = Array.from(parCle.values());
  if (arr.length > MAX_CARNET) arr = arr.slice(arr.length - MAX_CARNET);
  return { carnet: arr, maitrisees };
}

/** Résultats d'une session de QCM → lignes pour `noter`. */
export function resultatsQcm(questions, reponses, { chapitreId = null, titre = null, matiere = null } = {}) {
  return (Array.isArray(questions) ? questions : []).map((q, i) => {
    const rep = (reponses || [])[i];
    if (!q || !q.enonce || !rep || typeof rep.juste !== 'boolean') return null;
    // Les questions relancées depuis le carnet portent leur chapitre d'origine.
    const { _chap, _titre, _mat, ...question } = q;
    return {
      cle: cleQcm(q.enonce),
      juste: rep.juste,
      infos: { type: 'qcm', question, chapitreId: _chap ?? chapitreId, titre: _titre ?? titre, matiere: _mat ?? matiere },
    };
  }).filter(Boolean);
}

/** Les entrées à revoir aujourd'hui (les plus anciennes d'abord). */
export function aRevoir(carnet, aujourdhui) {
  return (Array.isArray(carnet) ? carnet : [])
    .filter((e) => e && e.prochaine <= aujourdhui)
    .sort((a, b) => (a.prochaine < b.prochaine ? -1 : a.prochaine > b.prochaine ? 1 : 0));
}

/** Résumé pour l'affichage. */
export function resume(carnet, aujourdhui) {
  const tout = Array.isArray(carnet) ? carnet.filter(Boolean) : [];
  const dus = tout.filter((e) => e.prochaine <= aujourdhui);
  const futurs = tout.filter((e) => e.prochaine > aujourdhui).map((e) => e.prochaine).sort();
  return {
    total: tout.length,
    aujourdhui: dus.length,
    qcm: dus.filter((e) => e.type === 'qcm').length,
    exos: dus.filter((e) => e.type === 'exo').length,
    plusTard: futurs.length,
    prochaineDate: futurs[0] || null,
  };
}

/** Regroupe les entrées par chapitre : [{chapitreId, titre, matiere, total, dus}]. */
export function parChapitre(carnet, aujourdhui) {
  const g = new Map();
  for (const e of Array.isArray(carnet) ? carnet : []) {
    if (!e) continue;
    const k = e.chapitreId || '—';
    const x = g.get(k) || { chapitreId: e.chapitreId || null, titre: e.titre || 'Autres questions', matiere: e.matiere || null, total: 0, dus: 0 };
    x.total++;
    if (e.prochaine <= aujourdhui) x.dus++;
    g.set(k, x);
  }
  return [...g.values()].sort((a, b) => b.dus - a.dus || b.total - a.total);
}

/** Ancienne réserve d'erreurs (lib/erreurs) → entrées du carnet, à revoir tout de suite. */
export function depuisAnciennesErreurs(erreurs, aujourdhui) {
  return (Array.isArray(erreurs) ? erreurs : [])
    .filter((e) => e && e.question && e.question.enonce)
    .map((e) => ({
      cle: cleQcm(e.question.enonce),
      type: 'qcm',
      question: e.question,
      matiere: e.matiere || null,
      chapitreId: null,
      titre: null,
      etape: 0,
      prochaine: aujourdhui,
      echecs: 1,
      ajoute: aujourdhui,
      maj: new Date(0).toISOString(),
    }));
}

/** Fusion de deux carnets (appareils différents) : par clé, la plus récente gagne. */
export function fusionnerCarnets(a, b) {
  const m = new Map();
  for (const e of [...(a || []), ...(b || [])]) {
    if (!e || !e.cle) continue;
    const x = m.get(e.cle);
    if (!x || String(e.maj || '') > String(x.maj || '')) m.set(e.cle, e);
  }
  return [...m.values()].slice(-MAX_CARNET);
}

/** « 16/10 » ou « demain » pour l'affichage d'une date de révision. */
export function libelleJour(jour, aujourdhui) {
  if (!jour) return '';
  if (jour <= aujourdhui) return "aujourd'hui";
  if (jour === ajouterJours(aujourdhui, 1)) return 'demain';
  const [, m, j] = jour.split('-');
  return `le ${j}/${m}`;
}
