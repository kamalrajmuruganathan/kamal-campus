/**
 * Annonces — petite bannière en haut de l'écran quand l'élève décroche un badge
 * ou réussit un défi de la semaine, quel que soit l'écran où il se trouve.
 *
 * Elle compare le profil à sa version précédente (rien n'est stocké) : au
 * chargement, le profil sert de référence, donc rien n'est annoncé pour ce qui
 * était déjà acquis. Toucher la bannière la ferme ; sinon elle part seule.
 */

import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../useTheme';
import { useProgression } from '../progression/Contexte';
import { badgesNouveaux } from '../../lib/badges';

const DUREE_MS = 4500;

/** Défis récompensés dans `apres` mais pas dans `avant` (même semaine). */
function defisNouveaux(avant, apres) {
  const sa = avant?.semaine;
  const sb = apres?.semaine;
  if (!sb || !Array.isArray(sb.recompenses)) return [];
  const deja = sa && sa.debut === sb.debut ? new Set(sa.recompenses || []) : new Set();
  return sb.recompenses.filter((id) => !deja.has(id));
}

export default function Annonces() {
  const t = useTheme();
  const insets = useSafeAreaInsets();
  const { profil, charge } = useProgression();
  const precedent = useRef(null);
  const [file, setFile] = useState([]);

  useEffect(() => {
    if (!charge) return;
    const avant = precedent.current;
    precedent.current = profil;
    if (!avant) return;
    // Changement de compte ou synchronisation qui fait reculer l'XP : nouvelle référence, rien à annoncer.
    if ((profil.xp || 0) < (avant.xp || 0)) return;
    const badges = badgesNouveaux(avant, profil);
    const defis = defisNouveaux(avant, profil);
    if (badges.length > 4) return; // grosse synchro venue d'un autre appareil : pas d'avalanche
    const messages = [];
    if (defis.length) {
      const gain = (profil.xp || 0) - (avant.xp || 0);
      messages.push({
        cle: `defis-${Date.now()}`,
        icone: '🎯',
        titre: defis.length > 1 ? `${defis.length} défis de la semaine réussis !` : 'Défi de la semaine réussi !',
        texte: gain > 0 ? `Bonus : +${gain} XP` : 'Bravo !',
      });
    }
    for (const b of badges) {
      messages.push({ cle: `badge-${b.id}`, icone: b.icone, titre: 'Nouveau badge !', texte: b.titre });
    }
    if (messages.length) setFile((f) => [...f, ...messages]);
  }, [profil, charge]);

  const actuel = file[0];
  useEffect(() => {
    if (!actuel) return undefined;
    const id = setTimeout(() => setFile((f) => f.slice(1)), DUREE_MS);
    return () => clearTimeout(id);
  }, [actuel]);

  if (!actuel) return null;
  return (
    <View
      pointerEvents="box-none"
      style={{ position: Platform.OS === 'web' ? 'fixed' : 'absolute', top: insets.top + 8, left: 0, right: 0, alignItems: 'center', zIndex: 1000 }}
    >
      <Pressable
        onPress={() => setFile((f) => f.slice(1))}
        accessibilityRole="alert"
        accessibilityLabel={`${actuel.titre} ${actuel.texte}`}
        style={{
          flexDirection: 'row', alignItems: 'center', gap: 10,
          maxWidth: 420, marginHorizontal: 16, paddingVertical: 10, paddingHorizontal: 14,
          backgroundColor: t.couleur.surface, borderColor: t.couleur.succes, borderWidth: 2, borderRadius: t.rayon.l,
          shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 6,
        }}
      >
        <Text style={{ fontSize: 26 }}>{actuel.icone}</Text>
        <View style={{ flexShrink: 1 }}>
          <Text style={{ color: t.couleur.succes, fontWeight: '800', fontSize: t.police.petite }}>{actuel.titre}</Text>
          <Text style={{ color: t.couleur.texte, fontWeight: '600', fontSize: t.police.normale }}>{actuel.texte}</Text>
        </View>
      </Pressable>
    </View>
  );
}
