/**
 * Kamal Campus — point d'entrée.
 *
 * Au premier lancement, l'onboarding s'affiche (prénom, classe, objectif).
 * Ensuite : Accueil → Chapitres → Chapitre → QCM, plus les accès directs.
 */

import { View, useColorScheme } from 'react-native';
import { useSombre } from './src/useSombre';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './src/theme';
import { ProgressionProvider, useProgression } from './src/progression/Contexte';
import { useLangue } from './src/i18n';
import Onboarding from './src/ecrans/Onboarding';
import Accueil from './src/ecrans/Accueil';
import Chapitres from './src/ecrans/Chapitres';
import Chapitre from './src/ecrans/Chapitre';
import Exercices from './src/ecrans/Exercices';
import Flashcards from './src/ecrans/Flashcards';
import Qcm from './src/ecrans/Qcm';
import Outils from './src/ecrans/Outils';
import Formulaires from './src/ecrans/Formulaires';
import Sujets from './src/ecrans/Sujets';
import BacBlanc from './src/ecrans/BacBlanc';
import Profil from './src/ecrans/Profil';
import Badges from './src/ecrans/Badges';
import Enigmes from './src/ecrans/Enigmes';
import LecteurEnigme from './src/ecrans/LecteurEnigme';
import LecteurAllumettes from './src/ecrans/LecteurAllumettes';
import Resolveur from './src/ecrans/Resolveur';
import Recherche from './src/ecrans/Recherche';
import Favoris from './src/ecrans/Favoris';
import Revision from './src/ecrans/Revision';
import RevisionSRS from './src/ecrans/RevisionSRS';
import Duel from './src/ecrans/Duel';
import Ligue from './src/ecrans/Ligue';
import Defi from './src/ecrans/Defi';
import Podcast from './src/ecrans/Podcast';
import Annales from './src/ecrans/Annales';
import Planning from './src/ecrans/Planning';
import APropos from './src/ecrans/APropos';

const Pile = createNativeStackNavigator();

function Navigation() {
  const sombre = useSombre();
  const t = theme(sombre);
  const { profil, charge } = useProgression();
  const { L } = useLangue();

  const themeNavigation = {
    ...(sombre ? DarkTheme : DefaultTheme),
    colors: {
      ...(sombre ? DarkTheme : DefaultTheme).colors,
      background: t.couleur.fond,
      card: t.couleur.fond,
      text: t.couleur.texte,
      border: t.couleur.trait,
      primary: t.couleur.accent,
    },
  };

  // Tant que le profil n'est pas chargé, on affiche un fond neutre (évite de
  // faire clignoter l'accueil avant de savoir si l'onboarding est à montrer).
  if (!charge) {
    return <View style={{ flex: 1, backgroundColor: t.couleur.fond }} />;
  }

  return (
    <NavigationContainer theme={themeNavigation}>
      <StatusBar style={sombre ? 'light' : 'dark'} />
      <Pile.Navigator
        initialRouteName={profil.onboardingFait ? 'Accueil' : 'Onboarding'}
        screenOptions={{
          headerTitleStyle: { fontSize: 17 },
          headerBackTitleVisible: false,
          contentStyle: { backgroundColor: t.couleur.fond },
        }}
      >
        <Pile.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Pile.Screen name="Accueil" component={Accueil} options={{ headerShown: false }} />
        <Pile.Screen
          name="Chapitres"
          component={Chapitres}
          options={({ route }) => ({ title: route.params?.titre ?? 'Chapitres' })}
        />
        <Pile.Screen
          name="Chapitre"
          component={Chapitre}
          options={({ route }) => ({ title: route.params?.titre ?? 'Chapitre' })}
        />
        <Pile.Screen name="Exercices" component={Exercices} options={{ title: 'Exercices' }} />
        <Pile.Screen name="Flashcards" component={Flashcards} options={{ title: 'Cartes de révision' }} />
        <Pile.Screen
          name="Qcm"
          component={Qcm}
          options={({ route }) => ({ title: route.params?.titre ?? 'QCM' })}
        />
        <Pile.Screen name="Outils" component={Outils} options={{ title: 'Outils de calcul' }} />
        <Pile.Screen name="Formulaires" component={Formulaires} options={{ title: 'Formulaires' }} />
        <Pile.Screen name="Sujets" component={Sujets} options={{ title: 'Sujets type bac / brevet' }} />
        <Pile.Screen name="BacBlanc" component={BacBlanc} options={{ title: 'Bac blanc / brevet blanc' }} />
        <Pile.Screen name="Profil" component={Profil} options={{ title: L('nav.progression') }} />
        <Pile.Screen name="Badges" component={Badges} options={{ title: L('nav.badges') }} />
        <Pile.Screen name="Enigmes" component={Enigmes} options={{ title: L('nav.enigmes') }} />
        <Pile.Screen
          name="LecteurEnigme"
          component={LecteurEnigme}
          options={({ route }) => ({ title: route.params?.titre ?? L('nav.enigmes') })}
        />
        <Pile.Screen name="LecteurAllumettes" component={LecteurAllumettes} options={{ title: 'Allumettes' }} />
        <Pile.Screen name="Resolveur" component={Resolveur} options={{ title: L('nav.resolveur') }} />
        <Pile.Screen name="Recherche" component={Recherche} options={{ title: L('nav.recherche') }} />
        <Pile.Screen name="Favoris" component={Favoris} options={{ title: L('nav.favoris') }} />
        <Pile.Screen name="Revision" component={Revision} options={{ title: L('nav.revision') }} />
        <Pile.Screen name="RevisionSRS" component={RevisionSRS} options={{ title: 'À revoir aujourd’hui' }} />
        <Pile.Screen name="Duel" component={Duel} options={{ title: 'Duel à deux' }} />
        <Pile.Screen name="Ligue" component={Ligue} options={{ title: 'Ligue hebdo' }} />
        <Pile.Screen name="Defi" component={Defi} options={{ title: 'Défi à distance' }} />
        <Pile.Screen name="Podcast" component={Podcast} options={{ title: 'Podcast de révision' }} />
        <Pile.Screen name="Annales" component={Annales} options={{ title: 'Annales — liens' }} />
        <Pile.Screen name="Planning" component={Planning} options={{ title: 'Planning d’étude' }} />
        <Pile.Screen name="APropos" component={APropos} options={{ title: L('nav.apropos') }} />
      </Pile.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ProgressionProvider>
        <Navigation />
      </ProgressionProvider>
    </SafeAreaProvider>
  );
}
