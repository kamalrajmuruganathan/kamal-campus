/**
 * Petit bouton « Écouter 🔊 » : lit un texte à voix haute (synthèse vocale du
 * téléphone, hors ligne). Un second appui arrête la lecture.
 *  - `texte` : lu dans la langue de la matière ;
 *  - `segments` : [{ texte, langue }] lus l'un après l'autre, chacun avec sa voix
 *    (fiche de langue : « hello » en anglais, « bonjour » en français).
 * L'écran décide de l'afficher ou non (voir lib/lecture : lectureActive).
 */

import { useEffect, useRef, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { parlerSequence, arreterParole } from '../parole';
import { segmentsTexte } from '../../lib/lecture';

export default function BoutonEcouter({ t, texte, segments, matiere, libelle = 'Écouter' }) {
  const [enCours, setEnCours] = useState(false);
  const vivant = useRef(true);
  useEffect(() => () => { vivant.current = false; arreterParole(); }, []);

  const basculer = () => {
    if (enCours) {
      arreterParole();
      setEnCours(false);
      return;
    }
    // Texte simple : formules lues en mots, passages en langue étrangère avec leur voix.
    const liste = segments && segments.length ? segments : segmentsTexte(texte, matiere);
    setEnCours(true);
    parlerSequence(liste, matiere, { onFin: () => { if (vivant.current) setEnCours(false); } });
  };

  return (
    <Pressable
      onPress={basculer}
      accessibilityRole="button"
      accessibilityLabel={enCours ? 'Arrêter la lecture' : libelle}
      hitSlop={8}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: t.couleur.trait,
        backgroundColor: pressed ? t.couleur.surfaceHaute ?? t.couleur.surface : t.couleur.surface,
      })}
    >
      <Text style={{ fontSize: 15 }}>{enCours ? '⏹️' : '🔊'}</Text>
      <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, fontWeight: '700' }}>{enCours ? 'Arrêter' : libelle}</Text>
    </Pressable>
  );
}
