/**
 * Écrans chargés à la demande — version WEB.
 *
 * Les écrans moins fréquents (épreuves, défis, espace parent, profil…) sont mis
 * par Metro dans des morceaux de code à part (import()) : l'accueil s'affiche
 * sans les attendre. Chaque écran est téléchargé à sa première ouverture
 * (« Chargement… » pendant ce temps), et tous sont préchargés quelques secondes
 * après le démarrage pour que le service worker les garde (hors connexion).
 * Même liste que ecransParesseux.js (téléphone).
 */
import { lazy, Suspense, Component } from 'react';
import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import { useTheme } from './useTheme';

function Attente() {
  const t = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: t.couleur.fond }}>
      <ActivityIndicator size="large" color={t.couleur.accent} />
    </View>
  );
}

function Erreur({ onReessayer }) {
  const t = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: t.espace.xl, backgroundColor: t.couleur.fond }}>
      <Text style={{ color: t.couleur.texte, textAlign: 'center', fontSize: t.police.normale }}>
        Impossible d’ouvrir cet écran. Vérifie ta connexion à Internet.
      </Text>
      <Pressable onPress={onReessayer} accessibilityRole="button" style={{ marginTop: t.espace.m, padding: t.espace.m }}>
        <Text style={{ color: t.couleur.accent, fontWeight: '700' }}>Réessayer</Text>
      </Pressable>
    </View>
  );
}

// Si le morceau ne se télécharge pas (réseau coupé), on propose de réessayer.
class Garde extends Component {
  constructor(props) { super(props); this.state = { erreur: false }; }
  static getDerivedStateFromError() { return { erreur: true }; }
  render() {
    if (this.state.erreur) return <Erreur onReessayer={() => { this.props.onReessayer(); this.setState({ erreur: false }); }} />;
    return this.props.children;
  }
}

const chargeurs = [];

function paresseux(charger) {
  chargeurs.push(charger);
  let Ecran = lazy(charger);
  function EcranParesseux(props) {
    return (
      <Garde onReessayer={() => { Ecran = lazy(charger); }}>
        <Suspense fallback={<Attente />}>
          <Ecran {...props} />
        </Suspense>
      </Garde>
    );
  }
  return EcranParesseux;
}

export const Outils = paresseux(() => import('./ecrans/Outils'));
export const Formulaires = paresseux(() => import('./ecrans/Formulaires'));
export const Sujets = paresseux(() => import('./ecrans/Sujets'));
export const Epreuve = paresseux(() => import('./ecrans/Epreuve'));
export const BacBlanc = paresseux(() => import('./ecrans/BacBlanc'));
export const Profil = paresseux(() => import('./ecrans/Profil'));
export const Badges = paresseux(() => import('./ecrans/Badges'));
export const Enigmes = paresseux(() => import('./ecrans/Enigmes'));
export const LecteurEnigme = paresseux(() => import('./ecrans/LecteurEnigme'));
export const LecteurAllumettes = paresseux(() => import('./ecrans/LecteurAllumettes'));
export const Resolveur = paresseux(() => import('./ecrans/Resolveur'));
export const Duel = paresseux(() => import('./ecrans/Duel'));
export const Ligue = paresseux(() => import('./ecrans/Ligue'));
export const Defi = paresseux(() => import('./ecrans/Defi'));
export const Defis = paresseux(() => import('./ecrans/Defis'));
export const Statistiques = paresseux(() => import('./ecrans/Statistiques'));
export const RecapHebdo = paresseux(() => import('./ecrans/RecapHebdo'));
export const ModeExamen = paresseux(() => import('./ecrans/ModeExamen'));
export const ExamenSurMesure = paresseux(() => import('./ecrans/ExamenSurMesure'));
export const Podcast = paresseux(() => import('./ecrans/Podcast'));
export const Annales = paresseux(() => import('./ecrans/Annales'));
export const Planning = paresseux(() => import('./ecrans/Planning'));
export const APropos = paresseux(() => import('./ecrans/APropos'));
export const Amis = paresseux(() => import('./ecrans/Amis'));
export const Discussion = paresseux(() => import('./ecrans/Discussion'));
export const Controle = paresseux(() => import('./ecrans/Controle'));
export const Classement = paresseux(() => import('./ecrans/Classement'));
export const EspaceParent = paresseux(() => import('./ecrans/EspaceParent'));
export const Dictees = paresseux(() => import('./ecrans/Dictees'));
export const Vacances = paresseux(() => import('./ecrans/Vacances'));
export const DefisSemaine = paresseux(() => import('./ecrans/DefisSemaine'));

// Capture d'image pour « Partager » (src/partage.js) : morceau à part lui aussi.
chargeurs.push(() => import('react-native-view-shot'));

/** Télécharge tous ces écrans en arrière-plan (une fois), pour le hors-connexion. */
let fait = false;
export function prechargerEcrans() {
  if (fait) return;
  fait = true;
  for (const charger of chargeurs) charger().catch(() => {});
}

// Préchargement automatique, 5 s après le chargement de la page (l'accueil est déjà affiché).
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const lancer = () => setTimeout(prechargerEcrans, 5000);
  if (document.readyState === 'complete') lancer();
  else window.addEventListener('load', lancer, { once: true });
}
