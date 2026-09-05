/**
 * Planning d'étude — l'élève compose son emploi du temps de révision
 * (ex. « Lundi 17:00 Maths », « Mardi 13:00 Physique-chimie »). Chaque créneau
 * déclenche une notification hebdomadaire « c'est l'heure de réviser ».
 *
 * On enregistre le planning dans le profil et on (re)programme les notifications
 * à chaque changement.
 */

import { useTheme } from '../useTheme';
import { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Bandeau } from '../composants/communs';
import PlanningEditeur from '../composants/PlanningEditeur';
import { useProgression } from '../progression/Contexte';
import { appliquerNotifications } from '../notifications';

export default function Planning() {
  const t = useTheme();
  const { profil, definirReglages } = useProgression();
  const [avert, setAvert] = useState(false);

  const changer = async (planning) => {
    definirReglages({ planning });
    const ok = await appliquerNotifications({ ...profil, planning });
    // On n'alerte que si l'utilisateur vient d'AJOUTER un créneau sans permission.
    if (!ok && planning.length > 0 && !avert) {
      setAvert(true);
      Alert.alert(
        'Notifications non autorisées',
        "Ton planning est enregistré, mais pour recevoir les rappels à l'heure, autorise les "
        + "notifications dans les réglages de ton téléphone (ou depuis une vraie installation de l'app).",
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Bandeau
          t={t}
          texte={'🗓️ Compose ton emploi du temps de révision. À chaque créneau, tu reçois une '
            + 'notification « c\'est l\'heure de réviser » — chaque semaine, même hors ligne.'}
        />
        <View style={{ marginTop: t.espace.m }}>
          <PlanningEditeur t={t} planning={profil.planning || []} onChange={changer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
