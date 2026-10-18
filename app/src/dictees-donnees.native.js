/**
 * Dictées (téléphone) : les textes de dictees/*.json sont dans l'appli, donc
 * disponibles hors connexion. Même interface que dictees-donnees.web.js.
 */
import cp from '../../dictees/cp.json';
import ce1 from '../../dictees/ce1.json';
import ce2 from '../../dictees/ce2.json';
import cm1 from '../../dictees/cm1.json';
import cm2 from '../../dictees/cm2.json';
import sixieme from '../../dictees/sixieme.json';
import cinquieme from '../../dictees/cinquieme.json';
import quatrieme from '../../dictees/quatrieme.json';
import troisieme from '../../dictees/troisieme.json';
import anglais from '../../dictees/anglais.json';
import espagnol from '../../dictees/espagnol.json';
import allemand from '../../dictees/allemand.json';
import italien from '../../dictees/italien.json';

const GROUPES = { cp, ce1, ce2, cm1, cm2, sixieme, cinquieme, quatrieme, troisieme, anglais, espagnol, allemand, italien };

/** Dictées d'un groupe (« ce1 », « anglais »…) : promesse de { groupe, libelle, matiere, dictees } ou null. */
export async function chargerDictees(groupe) {
  return GROUPES[groupe] ?? null;
}

/** Rien à faire sur téléphone : tout est déjà dans l'appli. */
export function prechargerDictees() {}
