/**
 * Bouton « Télécharger pour réviser hors connexion » d'une liste de chapitres (web).
 * Sur téléphone (appli native), tout est déjà disponible : rien n'est affiché.
 */
import { useEffect, useState, useCallback } from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { horsLigneDisponible, compterDisponibles, telechargerHorsLigne, useEnLigne } from '../horsLigne';

export default function HorsLigneParcours({ t, ids, accent }) {
  const enLigne = useEnLigne();
  const [dispo, setDispo] = useState(null);
  const [progres, setProgres] = useState(null); // { fait, total } pendant le téléchargement
  const cle = ids.join('|');

  const recompter = useCallback(() => {
    compterDisponibles(ids).then(setDispo).catch(() => setDispo(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cle]);
  useEffect(() => { recompter(); }, [recompter]);

  if (!horsLigneDisponible() || ids.length === 0) return null;
  const tout = dispo !== null && dispo >= ids.length;

  const telecharger = async () => {
    setProgres({ fait: 0, total: ids.length });
    await telechargerHorsLigne(ids, (fait, total) => setProgres({ fait, total }));
    setProgres(null);
    // Le service worker range les copies juste après : on laisse-lui un instant.
    setTimeout(recompter, 800);
  };

  return (
    <View style={{ marginTop: t.espace.s, marginBottom: t.espace.s, padding: t.espace.m, borderRadius: t.rayon.m, backgroundColor: t.couleur.surface, borderWidth: 1, borderColor: t.couleur.trait }}>
      <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
        {tout ? '✅ Disponible hors connexion' : '📥 Réviser sans internet'}
      </Text>
      <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 4, lineHeight: 17 }}>
        {tout
          ? `Les ${ids.length} chapitres (fiches et exercices) sont gardés sur cet appareil.`
          : dispo
            ? `${dispo} / ${ids.length} chapitres gardés sur cet appareil. Télécharge les autres pour réviser dans le métro ou en avion.`
            : 'Télécharge les fiches et les exercices de ces chapitres pour les ouvrir même sans internet.'}
      </Text>
      {progres ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: t.espace.s, gap: 8 }}>
          <ActivityIndicator color={accent || t.couleur.accent} />
          <Text style={{ color: t.couleur.texte, fontSize: t.police.petite }}>{`Téléchargement : ${progres.fait} / ${progres.total}`}</Text>
        </View>
      ) : !tout && (
        <Pressable
          onPress={telecharger}
          disabled={!enLigne}
          accessibilityRole="button"
          accessibilityLabel="Télécharger ces chapitres pour les réviser hors connexion"
          style={{ marginTop: t.espace.s, alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 14, borderRadius: t.rayon.s, backgroundColor: enLigne ? (accent || t.couleur.accent) : t.couleur.trait }}
        >
          <Text style={{ color: t.couleur.accentTexte, fontWeight: '650', fontSize: t.police.petite }}>
            {enLigne ? `Télécharger ${ids.length - (dispo || 0)} chapitre${ids.length - (dispo || 0) > 1 ? 's' : ''}` : 'Pas de connexion'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
