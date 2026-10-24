// app/src/defisContenu.js
// Pont entre l'ecran Defis et le contenu de l'app (memes sources que Qcm.js).
import { chapitreParId, CHAPITRES, LIBELLES_NIVEAU, LIBELLES_MATIERE, niveaux } from './contenu-index';
import { aGenerateur, genererQuestions } from '../lib/generateurs';
import { melanger, sansDoublons, completerQuestions } from '../lib/quizmix';
import { questionsDuQcm } from './useContenu';

export const NB_QUESTIONS_DEFI = 10;

// Construit UNE serie de questions pour un chapitre, au moment de creer le defi.
// - chapitre a generateur  -> questions fabriquees (reponses calculees)
// - sinon                  -> pioche au hasard dans la banque qcm.json
// Renvoie (promesse) des objets { enonce, choix:[...], reponse, explication, difficulte, notion }.
// La banque qcm.json est chargée à la demande : [] si elle n'a pas pu l'être (pas de réseau).
export async function construireQuestions(chapitreId, n = NB_QUESTIONS_DEFI) {
  const chap = chapitreParId(chapitreId);
  if (!chap) return [];
  // Générateur : questions sans doublon, complétées par la banque écrite s'il n'en offre pas assez.
  const generees = aGenerateur(chapitreId) ? sansDoublons(genererQuestions(chapitreId, n)) : [];
  if (generees.length >= n) return generees.slice(0, n);
  const banque = (await questionsDuQcm(chapitreId)) ?? [];
  return generees.length ? completerQuestions(generees, banque, n) : melanger(banque).slice(0, n);
}

// Libelle lisible d'un chapitre (pour l'affichage dans les cartes de defi).
export function titreChapitre(chapitreId) {
  const chap = chapitreParId(chapitreId);
  return chap?.titre ?? chapitreId;
}

// Liste des chapitres proposables a un defi : ceux qui ont un QCM jouable
// (banque de questions non vide) OU un generateur (questions fabriquees).
// Forme : [{ id, nom, niv }]. Calcule une seule fois (contenu statique).
let _cacheChapitres = null;
export function chapitresJouables() {
  if (_cacheChapitres) return _cacheChapitres;
  _cacheChapitres = CHAPITRES
    .filter((c) => aGenerateur(c.id) || c.nbQuestions > 0)
    .map((c) => ({
      id: c.id, nom: c.titre, niveau: c.niveau, matiere: c.matiere,
      niv: LIBELLES_NIVEAU?.[c.niveau] ?? c.niveau,
      mat: LIBELLES_MATIERE?.[c.matiere] ?? c.matiere,
    }));
  return _cacheChapitres;
}

// Classes dans l'ordre scolaire (CP → Terminale), avec leur libellé.
export function classesJouables() {
  const presentes = new Set(chapitresJouables().map((c) => c.niveau));
  return niveaux().filter((n) => presentes.has(n)).map((n) => ({ id: n, nom: LIBELLES_NIVEAU?.[n] ?? n }));
}
