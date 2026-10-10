/**
 * Exercices d'un chapitre — interactifs.
 *
 * Comme la fiche, chaque énoncé et chaque corrigé est rendu en Markdown + LaTeX
 * dans une WebView (composant VisionneuseFiche). Deux façons de répondre :
 *  - réponse courte et vérifiable (un nombre, un mot…) : l'élève tape sa
 *    réponse, « Vérifier » la compare à la réponse attendue (lib/autocorrection)
 *    puis le corrigé s'affiche ;
 *  - réponse ouverte : « Voir le corrigé », puis auto-évaluation
 *    « J'avais juste » / « Je me suis trompé(e) ».
 * Un exercice réussi rapporte de l'XP une seule fois et reste marqué ✅
 * (profil.exosReussis). Les exercices sont chargés à la demande (contenu-lourd).
 */

import { useTheme } from '../useTheme';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { couleurMatiere } from '../theme';
import { Bandeau, Etiquette } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import BoutonEcouter from '../composants/BoutonEcouter';
import { matiereParlante } from '../parole';
import { chapitreParId } from '../contenu-index';
import { chargerExercices } from '../contenu-lourd';
import { useProgression } from '../progression/Contexte';
import { typeExercice, comparerExercice, uniteExercice, consigneExercice } from '../../lib/autocorrection';

const LIBELLE_DIFFICULTE = {
  decouverte: 'Découverte',
  application: 'Application',
  intermediaire: 'Intermédiaire',
  approfondissement: 'Approfondissement',
  probleme: 'Problème',
  bac: 'Type bac',
  // tolérance aux valeurs du QCM si un chapitre les réutilise
  facile: 'Application',
  moyen: 'Intermédiaire',
  difficile: 'Approfondissement',
};

/** Identifiant stable d'un exercice dans son chapitre. */
const idExo = (ex, i) => String(ex.id ?? `n${i + 1}`);

/** Assemble le corrigé (étapes + réponse) en un seul Markdown. */
function corrigeMarkdown(ex) {
  const etapes = Array.isArray(ex.corrige) ? ex.corrige : [ex.corrige].filter(Boolean);
  let md = '**Corrigé**\n\n';
  md += etapes.map((e, i) => `${i + 1}. ${e}`).join('\n\n');
  if (ex.reponse) md += `\n\n**Réponse.** ${ex.reponse}`;
  return md;
}

/** Bouton d'action accessible (≥ 44 px de haut). */
function Bouton({ libelle, onPress, t, couleur, plein = false, desactive = false, a11y }) {
  return (
    <Pressable
      onPress={desactive ? undefined : onPress}
      accessibilityRole="button"
      accessibilityLabel={a11y ?? libelle}
      accessibilityState={{ disabled: desactive }}
      style={({ pressed }) => ({
        flex: 1,
        minHeight: 44,
        justifyContent: 'center',
        paddingHorizontal: t.espace.s,
        borderRadius: t.rayon.s,
        borderWidth: plein ? 0 : 1,
        borderColor: couleur,
        backgroundColor: plein ? couleur : 'transparent',
        opacity: desactive ? 0.45 : pressed ? 0.7 : 1,
      })}
    >
      <Text
        style={{
          color: plein ? t.couleur.accentTexte : couleur,
          textAlign: 'center',
          fontWeight: '650',
          fontSize: t.police.normale,
        }}
      >
        {libelle}
      </Text>
    </Pressable>
  );
}

/** Message de résultat (✅ / ❌). */
function Verdict({ juste, texte, t }) {
  return (
    <View
      accessibilityLiveRegion="polite"
      style={{
        marginHorizontal: t.espace.m,
        marginBottom: t.espace.s,
        padding: t.espace.s,
        borderRadius: t.rayon.s,
        backgroundColor: juste ? t.couleur.succesFond : t.couleur.erreurFond,
      }}
    >
      <Text style={{ color: juste ? t.couleur.succes : t.couleur.erreur, fontWeight: '650', fontSize: t.police.normale }}>
        {texte}
      </Text>
    </View>
  );
}

function CarteExercice({ ex, index, t, accent, matiere, dejaReussi, resultat, onResultat }) {
  const auto = useMemo(() => typeExercice(ex, matiere) === 'auto', [ex, matiere]);
  const unite = useMemo(() => (auto ? uniteExercice(ex, matiere) : ''), [auto, ex, matiere]);
  const consigne = useMemo(() => (auto ? consigneExercice(ex, matiere) : ''), [auto, ex, matiere]);
  const [saisie, setSaisie] = useState('');
  const [verifie, setVerifie] = useState(null); // null | true | false (dernière vérification)
  const [corrigeVu, setCorrigeVu] = useState(false);
  const [masque, setMasque] = useState(false);
  const [points, setPoints] = useState(0);
  const [parMachine, setParMachine] = useState(false); // verdict donné par la vérification automatique ?

  const enonce = `**Exercice ${index + 1}.** ${ex.enonce}`;

  const verifier = () => {
    if (!saisie.trim()) return;
    const juste = comparerExercice(saisie, ex, matiere);
    setVerifie(juste);
    setParMachine(true);
    setCorrigeVu(true);
    setMasque(false);
    setPoints(onResultat(juste));
  };

  const juger = (juste) => {
    setVerifie(juste);
    setParMachine(false);
    setPoints(onResultat(juste));
  };

  const corrigeAffiche = corrigeVu && !masque;
  let texteVerdict = '';
  if (verifie === true) {
    texteVerdict = (parMachine ? '✅ Bonne réponse !' : auto ? '✅ Compté juste.' : '✅ Bravo !') + (points > 0 ? ` +${points} XP` : '');
  } else if (verifie === false) {
    texteVerdict = parMachine
      ? '❌ Ce n’est pas la réponse attendue. Regarde le corrigé.'
      : '❌ Pas grave : relis le corrigé, puis réessaie plus tard.';
  }

  return (
    <View
      style={{
        marginHorizontal: t.espace.l,
        marginTop: t.espace.l,
        borderRadius: t.rayon.m,
        borderWidth: resultat === true ? 1.5 : StyleSheet.hairlineWidth,
        borderColor: resultat === true ? t.couleur.succes : t.couleur.trait,
        backgroundColor: t.couleur.surface,
        overflow: 'hidden',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: t.espace.s, padding: t.espace.m, paddingBottom: 0 }}>
        <Etiquette
          texte={LIBELLE_DIFFICULTE[ex.difficulte] ?? 'Exercice'}
          couleurFond={accent + '22'}
          couleurTexte={accent}
          t={t}
        />
        {dejaReussi && (
          <Etiquette texte="✅ Déjà réussi" couleurFond={t.couleur.succesFond} couleurTexte={t.couleur.succes} t={t} />
        )}
      </View>

      <VisionneuseFiche markdown={enonce} />

      {matiereParlante(matiere) && (
        <View style={{ paddingHorizontal: t.espace.m, paddingBottom: t.espace.s }}>
          <BoutonEcouter t={t} matiere={matiere} texte={ex.enonce} libelle="Écouter l'énoncé" />
        </View>
      )}

      {auto ? (
        <View style={{ paddingHorizontal: t.espace.m, paddingBottom: t.espace.m }}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: 6 }}>
            {unite ? `Ta réponse (unité : ${unite}, facultative) :` : consigne ? `Ta réponse (${consigne}) :` : 'Ta réponse :'}
          </Text>
          <View style={{ flexDirection: 'row', gap: t.espace.s }}>
            <TextInput
              value={saisie}
              onChangeText={setSaisie}
              onSubmitEditing={verifier}
              placeholder="Écris ta réponse"
              placeholderTextColor={t.couleur.attenue}
              accessibilityLabel={`Réponse à l'exercice ${index + 1}`}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              style={{
                flex: 2,
                minHeight: 44,
                backgroundColor: t.couleur.fond,
                borderColor: verifie === true ? t.couleur.succes : verifie === false ? t.couleur.erreur : t.couleur.trait,
                borderWidth: 1,
                borderRadius: t.rayon.s,
                paddingHorizontal: t.espace.m,
                color: t.couleur.texte,
                fontSize: t.police.normale,
              }}
            />
            <Bouton libelle="Vérifier" onPress={verifier} t={t} couleur={accent} plein desactive={!saisie.trim()} />
          </View>
        </View>
      ) : (
        !corrigeVu && (
          <View style={{ flexDirection: 'row', paddingHorizontal: t.espace.m, paddingBottom: t.espace.m }}>
            <Bouton libelle="Voir le corrigé" onPress={() => setCorrigeVu(true)} t={t} couleur={accent} />
          </View>
        )
      )}

      {verifie !== null && <Verdict juste={verifie} texte={texteVerdict} t={t} />}

      {/* Réponse ouverte : auto-évaluation après lecture du corrigé. */}
      {!auto && corrigeVu && verifie === null && (
        <View style={{ paddingHorizontal: t.espace.m, paddingBottom: t.espace.s }}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: 6 }}>
            Compare avec ta réponse :
          </Text>
          <View style={{ flexDirection: 'row', gap: t.espace.s }}>
            <Bouton libelle="J’avais juste" onPress={() => juger(true)} t={t} couleur={t.couleur.succes} />
            <Bouton libelle="Je me suis trompé(e)" onPress={() => juger(false)} t={t} couleur={t.couleur.erreur} />
          </View>
        </View>
      )}

      {/* Filet de sécurité : la vérification automatique peut se tromper. */}
      {auto && verifie === false && (
        <Pressable
          onPress={() => juger(true)}
          accessibilityRole="button"
          style={{ marginHorizontal: t.espace.m, marginBottom: t.espace.s, minHeight: 44, justifyContent: 'center' }}
        >
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, textDecorationLine: 'underline' }}>
            Ma réponse est correcte mais écrite autrement : la compter juste
          </Text>
        </Pressable>
      )}

      {corrigeVu && (
        <View style={{ flexDirection: 'row', paddingHorizontal: t.espace.m, paddingBottom: corrigeAffiche ? 0 : t.espace.m }}>
          <Bouton
            libelle={masque ? 'Afficher le corrigé' : 'Masquer le corrigé'}
            onPress={() => setMasque((v) => !v)}
            t={t}
            couleur={accent}
          />
        </View>
      )}

      {corrigeAffiche && <VisionneuseFiche markdown={corrigeMarkdown(ex)} />}
    </View>
  );
}

export default function Exercices({ route }) {
  const t = useTheme();
  const chapitre = chapitreParId(route.params.id);
  const { profil, enregistrerExercice } = useProgression();

  // Les exercices ne sont plus dans l'index : on les charge à la demande.
  const [donnees, setDonnees] = useState(chapitre?.exercice ?? undefined); // undefined = en cours
  const [essai, setEssai] = useState(0);
  // Résultats de la session : { [idExo]: true | false }
  const [resultats, setResultats] = useState({});

  useEffect(() => {
    if (!chapitre || chapitre.exercice) return undefined;
    let vivant = true;
    setDonnees(undefined);
    Promise.resolve(chargerExercices(chapitre.id))
      .catch(() => null)
      .then((d) => { if (vivant) setDonnees(d ?? null); });
    return () => { vivant = false; };
  }, [chapitre?.id, essai]);

  const reussisAvant = (profil.exosReussis || {})[chapitre?.id] || [];

  const surResultat = useCallback(
    (id, juste) => {
      // Une fois juste, l'exercice reste juste pour la session.
      setResultats((r) => ({ ...r, [id]: r[id] === true ? true : juste }));
      if (!juste) return 0;
      return enregistrerExercice({ chapitreId: chapitre.id, exoId: id, matiere: chapitre.matiere }).points;
    },
    [chapitre?.id, chapitre?.matiere, enregistrerExercice],
  );

  const pleinEcran = (contenu) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
      <View style={{ padding: t.espace.l, alignItems: 'center' }}>{contenu}</View>
    </SafeAreaView>
  );

  if (!chapitre || (!chapitre.exercice && chapitre.nbExercices === 0)) {
    return pleinEcran(
      <Text style={{ color: t.couleur.texte, fontSize: t.police.normale }}>Pas encore d’exercices pour ce chapitre.</Text>,
    );
  }

  if (donnees === undefined) {
    return pleinEcran(
      <>
        <ActivityIndicator size="large" color={t.couleur.accent} />
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: t.espace.m }}>
          Chargement des exercices…
        </Text>
      </>,
    );
  }

  if (!donnees || !donnees.exercices?.length) {
    return pleinEcran(
      <>
        <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, textAlign: 'center', marginBottom: t.espace.l }}>
          Impossible de charger les exercices. Vérifie ta connexion à Internet.
        </Text>
        <View style={{ flexDirection: 'row', width: 220 }}>
          <Bouton libelle="Réessayer" onPress={() => setEssai((n) => n + 1)} t={t} couleur={t.couleur.accent} plein />
        </View>
      </>,
    );
  }

  const accent = couleurMatiere(t, chapitre.matiere);
  const exos = donnees.exercices;
  const ids = exos.map(idExo);
  const faits = ids.filter((id) => resultats[id] !== undefined).length;
  const justes = ids.filter((id) => resultats[id] === true).length;
  const setReussis = new Set([...reussisAvant, ...ids.filter((id) => resultats[id] === true)]);
  const nbReussis = ids.filter((id) => setReussis.has(id)).length;
  const part = exos.length ? nbReussis / exos.length : 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }} keyboardShouldPersistTaps="handled">
        {!chapitre.reluPar && (
          <View style={{ padding: t.espace.l, paddingBottom: 0 }}>
            <Bandeau
              t={t}
              texte={
                '⚠️ Exercices non relus par un professeur. Ils sont rédigés à partir du ' +
                'programme officiel ; vérifie la méthode avec ton cours.'
              }
            />
          </View>
        )}

        {/* Score et progression du chapitre */}
        <View
          style={{
            marginHorizontal: t.espace.l,
            marginTop: t.espace.l,
            padding: t.espace.m,
            borderRadius: t.rayon.m,
            backgroundColor: t.couleur.surface,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: t.couleur.trait,
          }}
        >
          <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>
            {faits === 0 ? 'Score : aucun exercice fait' : `Score : ${justes} / ${faits} ${faits > 1 ? 'exercices faits' : 'exercice fait'}`}
          </Text>
          <View
            accessibilityRole="progressbar"
            accessibilityLabel={`${nbReussis} exercices réussis sur ${exos.length}`}
            accessibilityValue={{ min: 0, max: exos.length, now: nbReussis }}
            style={{
              height: 10,
              borderRadius: 5,
              backgroundColor: t.couleur.trait,
              marginTop: t.espace.s,
              overflow: 'hidden',
            }}
          >
            <View style={{ width: `${Math.round(part * 100)}%`, height: '100%', backgroundColor: t.couleur.succes }} />
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6 }}>
            ✅ {nbReussis} / {exos.length} réussis dans ce chapitre · +5 XP par nouvel exercice réussi
          </Text>
        </View>

        <Text
          style={{
            color: t.couleur.attenue,
            fontSize: t.police.petite,
            paddingHorizontal: t.espace.l,
            paddingTop: t.espace.l,
          }}
        >
          {exos.length} exercices · cherche d’abord, vérifie ensuite.
        </Text>

        {exos.map((ex, i) => {
          const id = ids[i];
          return (
            <CarteExercice
              key={id}
              ex={ex}
              index={i}
              t={t}
              accent={accent}
              matiere={chapitre.matiere}
              dejaReussi={setReussis.has(id)}
              resultat={resultats[id]}
              onResultat={(juste) => surResultat(id, juste)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
