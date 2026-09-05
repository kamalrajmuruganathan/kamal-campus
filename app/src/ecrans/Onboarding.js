/**
 * Onboarding — au tout premier lancement. Quatre étapes : langue, prénom
 * (optionnel), classe, objectif quotidien. On mémorise le tout, puis l'appli
 * s'ouvre sur l'accueil (et pré-sélectionne le niveau choisi).
 */

import { useTheme } from '../useTheme';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Carte } from '../composants/communs';
import PlanningEditeur from '../composants/PlanningEditeur';
import { useProgression } from '../progression/Contexte';
import { niveaux, LIBELLES_NIVEAU } from '../contenu-index';
import { LANGUES, useLangue } from '../i18n';
import { appliquerNotifications } from '../notifications';

const OBJECTIFS = [
  { xp: 30, titre: 'Tranquille', detail: '≈ 1–2 QCM / jour' },
  { xp: 60, titre: 'Régulier', detail: '≈ 3 QCM / jour' },
  { xp: 120, titre: 'Sérieux', detail: 'Pour progresser vite' },
  { xp: 200, titre: 'Intense', detail: 'Objectif ambitieux' },
];

function Option({ t, actif, onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        st.option,
        {
          backgroundColor: t.couleur.surface,
          borderColor: actif ? t.couleur.accent : t.couleur.trait,
          borderWidth: actif ? 2 : 1,
          borderRadius: t.rayon.m,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      {children}
    </Pressable>
  );
}

export default function Onboarding({ navigation }) {
  const t = useTheme();
  const { profil, terminerOnboarding, definirReglages } = useProgression();
  const { L } = useLangue();

  const [etape, setEtape] = useState(0);
  const [prenom, setPrenom] = useState('');
  const [niveau, setNiveau] = useState(null);
  const [objectif, setObjectif] = useState(60);
  const [planning, setPlanning] = useState([]);

  const listeNiveaux = niveaux();
  const DERNIERE = 4;

  const terminer = async () => {
    terminerOnboarding({ prenom, niveau, objectif, planning });
    if (planning.length > 0) {
      // Programme les créneaux tout de suite (demande la permission au besoin).
      await appliquerNotifications({ ...profil, planning });
    }
    navigation.replace('Accueil');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, fontWeight: '700', letterSpacing: 1 }}>
          KAMAL CAMPUS · {etape + 1} / 5
        </Text>

        {etape === 0 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>{L('onb.langue')}</Text>
            <View style={{ marginTop: t.espace.l }}>
              {LANGUES.map((lg) => (
                <Option key={lg.code} t={t} actif={false} onPress={() => { definirReglages({ langue: lg.code }); setEtape(1); }}>
                  <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '600' }}>
                    {lg.drapeau}  {lg.nom}
                  </Text>
                </Option>
              ))}
            </View>
          </>
        )}

        {etape === 1 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>{L('onb.bienvenue')}</Text>
            <Text style={[st.sous, { color: t.couleur.attenue }]}>{L('onb.prenomQ')}</Text>
            <TextInput
              value={prenom}
              onChangeText={setPrenom}
              placeholder={L('onb.prenom')}
              placeholderTextColor={t.couleur.attenue}
              style={{
                marginTop: t.espace.l,
                borderWidth: 1.5,
                borderColor: t.couleur.accent,
                borderRadius: t.rayon.m,
                padding: t.espace.m,
                color: t.couleur.texte,
                fontSize: t.police.moyenne,
              }}
              returnKeyType="done"
            />
          </>
        )}

        {etape === 2 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>{L('onb.classeQ')}</Text>
            <Text style={[st.sous, { color: t.couleur.attenue }]}>{L('onb.classeAide')}</Text>
            <View style={{ marginTop: t.espace.l }}>
              {listeNiveaux.map((n) => (
                <Option key={n} t={t} actif={niveau === n} onPress={() => setNiveau(n)}>
                  <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '600' }}>
                    {LIBELLES_NIVEAU[n] ?? n}
                  </Text>
                </Option>
              ))}
            </View>
          </>
        )}

        {etape === 3 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>{L('onb.objectifQ')}</Text>
            <Text style={[st.sous, { color: t.couleur.attenue }]}>{L('onb.objectifAide')}</Text>
            <View style={{ marginTop: t.espace.l }}>
              {OBJECTIFS.map((o) => (
                <Option key={o.xp} t={t} actif={objectif === o.xp} onPress={() => setObjectif(o.xp)}>
                  <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '600' }}>
                    {o.titre} — {o.xp} XP/jour
                  </Text>
                  <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>{o.detail}</Text>
                </Option>
              ))}
            </View>
          </>
        )}

        {etape === 4 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>Ton planning de révision</Text>
            <Text style={[st.sous, { color: t.couleur.attenue }]}>
              Choisis des créneaux (ex. Lundi 17:00 Maths) : on t'enverra une notification à
              l'heure pour te lancer. Facultatif — tu peux passer et le régler plus tard.
            </Text>
            <View style={{ marginTop: t.espace.l }}>
              <PlanningEditeur t={t} planning={planning} onChange={setPlanning} />
            </View>
          </>
        )}
      </ScrollView>

      {etape > 0 && (
        <View style={{ padding: t.espace.l, flexDirection: 'row', gap: t.espace.m }}>
          <Pressable
            onPress={() => setEtape((e) => e - 1)}
            style={({ pressed }) => [st.bouton, { flex: 0.5, backgroundColor: t.couleur.surface, opacity: pressed ? 0.8 : 1 }]}
          >
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne }}>{L('onb.retour')}</Text>
          </Pressable>
          <Pressable
            onPress={() => { if (etape < DERNIERE) setEtape((e) => e + 1); else terminer(); }}
            disabled={etape === 2 && !niveau}
            style={({ pressed }) => [
              st.bouton,
              { flex: 1, backgroundColor: etape === 2 && !niveau ? t.couleur.trait : t.couleur.accent, opacity: pressed ? 0.85 : 1 },
            ]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>
              {etape < DERNIERE ? L('onb.continuer') : L('onb.cestParti')}
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  titre: { fontSize: 27, fontWeight: '700', marginTop: 14 },
  sous: { fontSize: 15, marginTop: 6, lineHeight: 21 },
  option: { padding: 16, marginBottom: 10 },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 14 },
});
