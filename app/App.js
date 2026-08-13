/**
 * Kamal Campus — point d'entrée.
 *
 * Navigation par pile : Accueil → Chapitres → Chapitre → QCM, plus un accès
 * direct aux Outils depuis l'accueil.
 */

import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './src/theme';
import Accueil from './src/ecrans/Accueil';
import Chapitres from './src/ecrans/Chapitres';
import Chapitre from './src/ecrans/Chapitre';
import Exercices from './src/ecrans/Exercices';
import Qcm from './src/ecrans/Qcm';
import Outils from './src/ecrans/Outils';

const Pile = createNativeStackNavigator();

export default function App() {
  const sombre = useColorScheme() === 'dark';
  const t = theme(sombre);

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

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={themeNavigation}>
        <StatusBar style={sombre ? 'light' : 'dark'} />
        <Pile.Navigator
          screenOptions={{
            headerTitleStyle: { fontSize: 17 },
            headerBackTitleVisible: false,
            contentStyle: { backgroundColor: t.couleur.fond },
          }}
        >
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
          <Pile.Screen
            name="Exercices"
            component={Exercices}
            options={{ title: 'Exercices' }}
          />
          <Pile.Screen
            name="Qcm"
            component={Qcm}
            options={({ route }) => ({ title: route.params?.titre ?? 'QCM' })}
          />
          <Pile.Screen name="Outils" component={Outils} options={{ title: 'Outils de calcul' }} />
        </Pile.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
