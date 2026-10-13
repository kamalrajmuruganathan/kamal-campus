/**
 * Carnet d'erreurs — refaire les exercices ratés qui sont à revoir aujourd'hui.
 *
 * La liste est figée à l'ouverture (un exercice réussi ne disparaît pas sous le
 * doigt de l'élève). Chaque résultat est noté dans le carnet ; une réussite
 * rapporte aussi l'XP habituelle si l'exercice n'avait jamais été réussi.
 */

import { useTheme } from '../useTheme';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { couleurMatiere } from '../theme';
import { chapitreParId } from '../contenu-index';
import { chargerExercices } from '../contenu-lourd';
import { useProgression } from '../progression/Contexte';
import { aRevoir } from '../../lib/carnet';
import { dateLocale } from '../../lib/serie';
import { CarteExercice, idExo } from './Exercices';

export default function CarnetExercices() {
  const t = useTheme();
  const { profil, enregistrerExercice, noterExerciceCarnet } = useProgression();
  // Liste figée à l'ouverture de l'écran.
  const [entrees] = useState(() => aRevoir(profil?.carnet || [], dateLocale(new Date())).filter((e) => e.type === 'exo'));
  const [items, setItems] = useState(undefined); // [{ e, ex, chapitre }]
  const [resultats, setResultats] = useState({});

  useEffect(() => {
    let vivant = true;
    const chapIds = [...new Set(entrees.map((e) => e.chapitreId))];
    Promise.all(chapIds.map((id) => Promise.resolve(chargerExercices(id)).catch(() => null).then((d) => [id, d])))
      .then((paires) => {
        if (!vivant) return;
        const parChap = new Map(paires);
        const out = [];
        for (const e of entrees) {
          const d = parChap.get(e.chapitreId);
          const exos = (d && d.exercices) || [];
          const i = exos.findIndex((x, k) => idExo(x, k) === String(e.exoId));
          if (i >= 0) out.push({ e, ex: exos[i], chapitre: chapitreParId(e.chapitreId) });
        }
        setItems(out);
      });
    return () => { vivant = false; };
  }, [entrees]);

  if (items === undefined) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond, alignItems: 'center', padding: t.espace.l }}>
        <ActivityIndicator size="large" color={t.couleur.accent} />
      </SafeAreaView>
    );
  }

  const reussis = (profil.exosReussis || {});
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }} keyboardShouldPersistTaps="handled">
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, padding: t.espace.l, paddingBottom: 0, lineHeight: 19 }}>
          {items.length
            ? items.length > 1
              ? `${items.length} exercices à refaire. Réussis-les : ils reviendront plus tard pour vérifier que tu as bien retenu.`
              : '1 exercice à refaire. Réussis-le : il reviendra plus tard pour vérifier que tu as bien retenu.'
            : 'Aucun exercice à refaire pour le moment (ou exercices indisponibles sans connexion).'}
        </Text>
        {items.map(({ e, ex, chapitre }, i) => (
          <View key={e.cle}>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginHorizontal: t.espace.l, marginTop: t.espace.l, marginBottom: -t.espace.s }}>
              {chapitre ? chapitre.titre : e.titre}
            </Text>
            <CarteExercice
              ex={ex}
              index={i}
              t={t}
              accent={couleurMatiere(t, e.matiere || chapitre?.matiere)}
              matiere={e.matiere || chapitre?.matiere}
              dejaReussi={(reussis[e.chapitreId] || []).includes(String(e.exoId))}
              resultat={resultats[e.cle]}
              onResultat={(juste) => {
                setResultats((r) => ({ ...r, [e.cle]: r[e.cle] === true ? true : juste }));
                noterExerciceCarnet({ chapitreId: e.chapitreId, exoId: e.exoId, juste, titre: e.titre, matiere: e.matiere });
                return juste ? enregistrerExercice({ chapitreId: e.chapitreId, exoId: String(e.exoId), matiere: e.matiere }).points : 0;
              }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
