/**
 * Demande confirmation avant de quitter un écran où un travail est en cours
 * (examen chronométré, dictée en cours d'écriture) : un appui malencontreux sur
 * « retour » effaçait tout sans prévenir. Sur le web, fermer ou recharger l'onglet
 * déclenche aussi l'avertissement du navigateur.
 *
 * @param navigation  objet navigation de l'écran
 * @param actif       vrai tant qu'il y a quelque chose à perdre
 * @param titre, message  texte de la confirmation
 */
import { useEffect } from 'react';
import { Alert, Platform } from 'react-native';

export function useConfirmerSortie(navigation, actif, titre, message) {
  useEffect(() => {
    if (!actif || !navigation || typeof navigation.addListener !== 'function') return undefined;
    const retirer = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      Alert.alert(titre, message, [
        { text: 'Rester', style: 'cancel' },
        { text: 'Quitter', style: 'destructive', onPress: () => navigation.dispatch(e.data.action) },
      ]);
    });
    let retirerWeb = null;
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const avertir = (ev) => { ev.preventDefault(); ev.returnValue = ''; };
      window.addEventListener('beforeunload', avertir);
      retirerWeb = () => window.removeEventListener('beforeunload', avertir);
    }
    return () => {
      if (typeof retirer === 'function') retirer();
      if (retirerWeb) retirerWeb();
    };
  }, [navigation, actif, titre, message]);
}
