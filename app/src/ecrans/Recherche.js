/**
 * Recherche dans le contenu — retrouver un chapitre par son nom, son parcours
 * ou son niveau, toutes classes confondues (comme un moteur de recherche).
 */

import { useTheme } from '../useTheme';
import { useState, useMemo, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, useColorScheme } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import { CHAPITRES, LIBELLES_NIVEAU, LIBELLES_PARCOURS } from '../contenu-index';

const sansAccent = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function Recherche({ navigation }) {
  const t = useTheme();
  const [q, setQ] = useState('');
  // Titres de sections des fiches : chargés à part (morceau séparé sur le web), à l'ouverture.
  const [sections, setSections] = useState({});
  useEffect(() => {
    let vivant = true;
    import('../sections-recherche')
      .then((m) => { if (vivant) setSections(m.SECTIONS || {}); })
      .catch(() => {}); // hors connexion sans copie : on cherche dans les titres seulement
    return () => { vivant = false; };
  }, []);

  const resultats = useMemo(() => {
    const req = sansAccent(q.trim());
    if (req.length < 2) return [];
    const parTitre = [];
    const parSection = [];
    for (const c of CHAPITRES) {
      const foin = sansAccent(
        `${c.titre} ${LIBELLES_NIVEAU[c.niveau] ?? c.niveau} ${LIBELLES_PARCOURS[c.parcours] ?? c.parcours} ${c.programme ?? ''}`,
      );
      if (foin.includes(req)) { parTitre.push({ c }); continue; }
      // Sinon, une section de la fiche (ex. « Le théorème de Pythagore » dans « Triangles »).
      const section = String(sections[c.id] ?? '').split(' · ').find((s) => sansAccent(s).includes(req));
      if (section) parSection.push({ c, section });
    }
    return [...parTitre, ...parSection].slice(0, 40);
  }, [q, sections]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <View style={{ padding: t.espace.l, paddingBottom: 0 }}>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Chercher un chapitre, une notion…"
          placeholderTextColor={t.couleur.attenue}
          autoFocus
          autoCorrect={false}
          style={{
            borderWidth: 1.5,
            borderColor: t.couleur.accent,
            borderRadius: t.rayon.m,
            padding: t.espace.m,
            color: t.couleur.texte,
            fontSize: t.police.moyenne,
          }}
        />
      </View>
      <ScrollView contentContainerStyle={{ padding: t.espace.l }} keyboardShouldPersistTaps="handled">
        {q.trim().length >= 2 && resultats.length === 0 && (
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.normale }}>Aucun chapitre trouvé.</Text>
        )}
        {resultats.map(({ c, section }) => (
          <Carte
            key={c.id}
            t={t}
            titre={c.titre}
            sousTitre={`${LIBELLES_NIVEAU[c.niveau] ?? c.niveau} · ${LIBELLES_PARCOURS[c.parcours] ?? c.parcours}${section ? ` · « ${section} »` : ''}`}
            couleur={couleurMatiere(t, c.matiere)}
            onPress={() => navigation.navigate('Chapitre', { id: c.id, titre: c.titre })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
