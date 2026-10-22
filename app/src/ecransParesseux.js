/**
 * Écrans chargés à la demande — version TÉLÉPHONE (Expo natif) : import direct,
 * rien ne change. La version web (ecransParesseux.web.js) les met dans des
 * morceaux à part pour que l'appli démarre plus vite.
 */
export { default as Outils } from './ecrans/Outils';
export { default as Formulaires } from './ecrans/Formulaires';
export { default as Sujets } from './ecrans/Sujets';
export { default as Epreuve } from './ecrans/Epreuve';
export { default as BacBlanc } from './ecrans/BacBlanc';
export { default as Profil } from './ecrans/Profil';
export { default as Badges } from './ecrans/Badges';
export { default as Enigmes } from './ecrans/Enigmes';
export { default as LecteurEnigme } from './ecrans/LecteurEnigme';
export { default as LecteurAllumettes } from './ecrans/LecteurAllumettes';
export { default as Resolveur } from './ecrans/Resolveur';
export { default as Duel } from './ecrans/Duel';
export { default as Ligue } from './ecrans/Ligue';
export { default as Defi } from './ecrans/Defi';
export { default as Defis } from './ecrans/Defis';
export { default as Statistiques } from './ecrans/Statistiques';
export { default as RecapHebdo } from './ecrans/RecapHebdo';
export { default as ModeExamen } from './ecrans/ModeExamen';
export { default as ExamenSurMesure } from './ecrans/ExamenSurMesure';
export { default as Podcast } from './ecrans/Podcast';
export { default as Annales } from './ecrans/Annales';
export { default as Planning } from './ecrans/Planning';
export { default as APropos } from './ecrans/APropos';
export { default as Amis } from './ecrans/Amis';
export { default as Discussion } from './ecrans/Discussion';
export { default as Controle } from './ecrans/Controle';
export { default as Classement } from './ecrans/Classement';
export { default as EspaceParent } from './ecrans/EspaceParent';
export { default as Dictees } from './ecrans/Dictees';
export { default as Vacances } from './ecrans/Vacances';
export { default as DefisSemaine } from './ecrans/DefisSemaine';
/** Rien à précharger sur téléphone : tout est déjà dans l'appli. */
export function prechargerEcrans() {}
