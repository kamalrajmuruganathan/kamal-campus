/**
 * Outils de calcul — branche l'interface sur les modules de `lib/`.
 *
 * ⚠️ Aucun calcul n'est fait ici : tout passe par les modules déterministes,
 * qui sont testés. Cet écran ne fait que saisir les paramètres et afficher
 * le résultat AVEC SES ÉTAPES — c'est ce qui distingue l'outil d'une
 * calculatrice.
 */

import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Carte } from '../composants/communs';

import { resoudreSecondDegre } from '../../lib/second-degre';
import { suiteArithmetique, suiteGeometrique } from '../../lib/suites';
import { analyserSerie } from '../../lib/statistiques';
import { deriver, variations } from '../../lib/derivation';
import { masseMolaire, dilution } from '../../lib/chimie';
import { energieCinetique, loiOhm } from '../../lib/physique';

/**
 * Déclaration des outils. Chaque entrée décrit ses champs et la fonction à
 * appeler — ajouter un outil ne demande donc pas de toucher au rendu.
 */
const OUTILS = [
  {
    id: 'second-degre',
    titre: 'Second degré',
    resume: 'Discriminant, racines exactes, factorisation, sommet',
    champs: [
      { clef: 'a', libelle: 'a', defaut: '1' },
      { clef: 'b', libelle: 'b', defaut: '-4' },
      { clef: 'c', libelle: 'c', defaut: '1' },
    ],
    executer: (v) => resoudreSecondDegre(v.a, v.b, v.c),
  },
  {
    id: 'suite-arith',
    titre: 'Suite arithmétique',
    resume: 'Terme de rang n, somme, sens de variation',
    champs: [
      { clef: 'u', libelle: 'premier terme', defaut: '5' },
      { clef: 'r', libelle: 'raison r', defaut: '3' },
      { clef: 'n', libelle: 'rang n', defaut: '20' },
      { clef: 'p', libelle: 'indice de départ', defaut: '0' },
    ],
    executer: (v) => suiteArithmetique(v.u, v.r, v.n, v.p),
  },
  {
    id: 'suite-geom',
    titre: 'Suite géométrique',
    resume: 'Terme, somme, limite, variation',
    champs: [
      { clef: 'u', libelle: 'premier terme', defaut: '3' },
      { clef: 'q', libelle: 'raison q', defaut: '2' },
      { clef: 'n', libelle: 'rang n', defaut: '5' },
      { clef: 'p', libelle: 'indice de départ', defaut: '0' },
    ],
    executer: (v) => suiteGeometrique(v.u, v.q, v.n, v.p),
  },
  {
    id: 'stats',
    titre: 'Statistiques',
    resume: 'Moyenne, médiane, quartiles, dispersion',
    champs: [{ clef: 'serie', libelle: 'valeurs séparées par des espaces', defaut: '12 3 8 15 6', texte: true }],
    executer: (v) => analyserSerie(String(v.serie).trim().split(/[\s,;]+/).map(Number)),
  },
  {
    id: 'derivee',
    titre: 'Dérivée et variations',
    resume: 'Polynômes — coefficients du degré 0 au degré n',
    champs: [{ clef: 'coef', libelle: 'coefficients (ex. « 0 -3 0 1 » pour x³−3x)', defaut: '0 -3 0 1', texte: true }],
    executer: (v) => {
      const c = String(v.coef).trim().split(/[\s,;]+/).map(Number);
      const d = deriver(c);
      if (!d.valide) return d;
      const va = variations(c);
      return {
        valide: true,
        etapes: [...d.etapes, ...(va.valide ? va.etapes : [{ titre: 'Variations', detail: va.erreur }])],
      };
    },
  },
  {
    id: 'masse-molaire',
    titre: 'Masse molaire',
    resume: 'À partir d’une formule brute (parenthèses gérées)',
    champs: [{ clef: 'formule', libelle: 'formule, ex. Ca(OH)2', defaut: 'H2SO4', texte: true }],
    executer: (v) => masseMolaire(String(v.formule).trim()),
  },
  {
    id: 'dilution',
    titre: 'Dilution',
    resume: 'c₁V₁ = c₂V₂ — laisse un champ vide',
    champs: [
      { clef: 'c1', libelle: 'c₁ (mol·L⁻¹)', defaut: '0.5' },
      { clef: 'v1', libelle: 'V₁ (mL) — vide pour le calculer', defaut: '' },
      { clef: 'c2', libelle: 'c₂ (mol·L⁻¹)', defaut: '0.1' },
      { clef: 'v2', libelle: 'V₂ (mL)', defaut: '200' },
    ],
    executer: (v) => dilution({ c1: v.c1, v1: v.v1, c2: v.c2, v2: v.v2, unite: 'mL' }),
  },
  {
    id: 'energie-cinetique',
    titre: 'Énergie cinétique',
    resume: 'Ec = ½mv² — vitesse en m·s⁻¹',
    champs: [
      { clef: 'm', libelle: 'masse (kg)', defaut: '1000' },
      { clef: 'v', libelle: 'vitesse (m·s⁻¹)', defaut: '20' },
    ],
    executer: (v) => energieCinetique(v.m, v.v),
  },
  {
    id: 'loi-ohm',
    titre: 'Loi d’Ohm',
    resume: 'U = RI — laisse vide la grandeur cherchée',
    champs: [
      { clef: 'U', libelle: 'U (V)', defaut: '' },
      { clef: 'R', libelle: 'R (Ω)', defaut: '50' },
      { clef: 'I', libelle: 'I (A)', defaut: '0.2' },
    ],
    executer: (v) => loiOhm({ U: v.U, R: v.R, I: v.I }),
  },
];

export default function Outils({ route }) {
  const t = theme(useColorScheme() === 'dark');

  // Outils demandés par un chapitre (via outil.json), s'il y en a.
  const demandes = route?.params?.outils ?? null;
  const titreChap = route?.params?.titre ?? null;
  const pertinents = demandes ? OUTILS.filter((o) => demandes.includes(o.id)) : null;

  // Un chapitre qui pointe vers un seul outil l'ouvre directement.
  const [actif, setActif] = useState(
    pertinents && pertinents.length === 1 ? pertinents[0] : null,
  );
  // Quand on arrive depuis un chapitre, on montre d'abord la liste restreinte.
  const [toutMontrer, setToutMontrer] = useState(!pertinents || pertinents.length === 0);

  if (!actif) {
    const liste = toutMontrer ? OUTILS : pertinents;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
          <Text
            style={{
              color: t.couleur.attenue,
              fontSize: t.police.petite,
              marginBottom: t.espace.m,
              lineHeight: 19,
            }}
          >
            {titreChap && !toutMontrer
              ? `Outils utiles pour « ${titreChap} ». Ils calculent de façon exacte et montrent le détail des étapes.`
              : 'Ces outils calculent de façon exacte et montrent le détail des étapes. Ils servent à vérifier ton travail, pas à le remplacer.'}
          </Text>
          {(liste ?? []).map((o) => (
            <Carte key={o.id} t={t} titre={o.titre} sousTitre={o.resume} onPress={() => setActif(o)} />
          ))}
          {!toutMontrer && (
            <Pressable onPress={() => setToutMontrer(true)} accessibilityRole="button">
              <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, marginTop: t.espace.m }}>
                Voir tous les outils
              </Text>
            </Pressable>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return <PanneauOutil outil={actif} t={t} onRetour={() => setActif(null)} />;
}

function PanneauOutil({ outil, t, onRetour }) {
  const [valeurs, setValeurs] = useState(
    Object.fromEntries(outil.champs.map((c) => [c.clef, c.defaut])),
  );
  const [resultat, setResultat] = useState(null);

  const lancer = () => {
    const converties = {};
    for (const champ of outil.champs) {
      const brut = valeurs[champ.clef];
      if (champ.texte) {
        converties[champ.clef] = brut;
      } else if (brut === '' || brut === null || brut === undefined) {
        converties[champ.clef] = null;      // champ laissé vide = grandeur à calculer
      } else {
        const n = Number(String(brut).replace(',', '.'));
        converties[champ.clef] = Number.isFinite(n) ? n : NaN;
      }
    }
    try {
      setResultat(outil.executer(converties));
    } catch (e) {
      setResultat({ valide: false, erreur: `Erreur inattendue : ${e.message}` });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Pressable onPress={onRetour} accessibilityRole="button">
          <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, marginBottom: t.espace.m }}>
            ‹ Tous les outils
          </Text>
        </Pressable>

        <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '700' }}>
          {outil.titre}
        </Text>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 4 }}>
          {outil.resume}
        </Text>

        <View style={{ marginTop: t.espace.l }}>
          {outil.champs.map((c) => (
            <View key={c.clef} style={{ marginBottom: t.espace.m }}>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: 5 }}>
                {c.libelle}
              </Text>
              <TextInput
                value={String(valeurs[c.clef] ?? '')}
                onChangeText={(v) => setValeurs({ ...valeurs, [c.clef]: v })}
                keyboardType={c.texte ? 'default' : 'numbers-and-punctuation'}
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  backgroundColor: t.couleur.surface,
                  borderColor: t.couleur.trait,
                  borderWidth: 1,
                  borderRadius: t.rayon.s,
                  padding: t.espace.m,
                  color: t.couleur.texte,
                  fontSize: t.police.normale,
                }}
              />
            </View>
          ))}
        </View>

        <Pressable
          onPress={lancer}
          style={({ pressed }) => [
            st.bouton,
            { backgroundColor: t.couleur.accent, borderRadius: t.rayon.m, opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '650' }}>
            Calculer
          </Text>
        </Pressable>

        {resultat && <Resultat resultat={resultat} t={t} />}
      </ScrollView>
    </SafeAreaView>
  );
}

function Resultat({ resultat, t }) {
  if (!resultat.valide) {
    return (
      <View
        style={{
          marginTop: t.espace.l,
          padding: t.espace.m,
          backgroundColor: t.couleur.erreurFond,
          borderRadius: t.rayon.m,
          borderLeftWidth: 3,
          borderLeftColor: t.couleur.erreur,
        }}
      >
        <Text style={{ color: t.couleur.erreur, fontSize: t.police.normale, lineHeight: 21 }}>
          {resultat.erreur}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: t.espace.l }}>
      <Text
        style={{
          color: t.couleur.attenue,
          fontSize: t.police.minuscule,
          fontWeight: '700',
          letterSpacing: 0.8,
          marginBottom: t.espace.s,
        }}
      >
        DÉTAIL DU RAISONNEMENT
      </Text>

      {(resultat.etapes ?? []).map((e, i) => (
        <View
          key={i}
          style={{
            backgroundColor: t.couleur.surface,
            borderRadius: t.rayon.m,
            padding: t.espace.m,
            marginBottom: t.espace.s,
          }}
        >
          <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, fontWeight: '650' }}>
            {e.titre}
          </Text>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, marginTop: 4, lineHeight: 21 }}>
            {e.detail}
          </Text>
          {e.remarque ? (
            <Text
              style={{
                color: t.couleur.alerte,
                fontSize: t.police.petite,
                marginTop: 8,
                lineHeight: 18,
              }}
            >
              {e.remarque}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  );
}

const st = StyleSheet.create({
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14 },
});
