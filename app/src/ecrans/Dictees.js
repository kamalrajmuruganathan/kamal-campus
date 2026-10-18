/**
 * Dictées — écouter, écrire, corriger.
 *
 * 1. Choix du niveau (CP → 3e) ou de la langue (anglais, espagnol, allemand, italien), puis de la dictée.
 * 2. Dictée : la voix du téléphone lit le texte morceau par morceau (« ▶️ Écouter la phrase »,
 *    « 🔁 Répéter », « ⏭️ Phrase suivante ») ; lecture lente pour les petits, ponctuation dite
 *    (« virgule », « point ») au primaire ; l'élève tape son texte.
 * 3. Correction : note sur 10 (barème expliqué), texte de l'élève avec les fautes repérées
 *    (couleur + soulignement/barré + numéro), texte juste à côté, fautes classées par type.
 *
 * Logique (alignement mot à mot, classement des fautes, note) : lib/dictee (testée).
 * Textes : dictees/<groupe>.json (src/dictees-donnees : dans l'appli sur téléphone, à la demande sur le web).
 * Suivi : `profil.dictees[id]` = { meilleure, derniere, essais, date } ; XP = progrès sur la meilleure note.
 * Pas d'Alert.alert (sans effet sur le web) : tous les messages sont affichés dans l'écran.
 */

import { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../useTheme';
import { couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import SignalerErreur from '../composants/SignalerErreur';
import { useProgression } from '../progression/Contexte';
import { LIBELLES_NIVEAU } from '../contenu-index';
import { parler, arreterParole } from '../parole';
import { chargerDictees, prechargerDictees } from '../dictees-donnees';
import {
  GROUPES, TYPES, ORDRE_TYPES, BAREME_TEXTE, corriger, segmentsEleve, segmentsCorrection,
  texteALire, estPrimaire, vitesseConseillee, compterMots,
} from '../../lib/dictee';

const NBSP = ' ';
const virgule = (x) => String(x).replace('.', ',');
const LIBELLE_DIFFICULTE = { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile' };
const FRANCAIS = GROUPES.filter((g) => g.matiere === 'francais');
const LANGUES = GROUPES.filter((g) => g.matiere !== 'francais');

function Bouton({ t, libelle, onPress, principal = false, desactive = false, accessibilityLabel }) {
  const C = t.couleur;
  return (
    <Pressable
      onPress={desactive ? undefined : onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? libelle}
      accessibilityState={{ disabled: desactive }}
      style={({ pressed }) => ({
        paddingVertical: 11,
        paddingHorizontal: 14,
        borderRadius: t.rayon.m,
        borderWidth: 1,
        borderColor: principal ? C.accent : C.trait,
        backgroundColor: principal ? C.accent : C.surface,
        opacity: desactive ? 0.45 : pressed ? 0.7 : 1,
        alignItems: 'center',
        flexGrow: 1,
      })}
    >
      <Text style={{ color: principal ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.normale }}>{libelle}</Text>
    </Pressable>
  );
}

function Pastille({ t, libelle, actif, onPress, couleur }) {
  const C = t.couleur;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: actif }}
      style={({ pressed }) => ({
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 999,
        borderWidth: 1.5,
        borderColor: actif ? couleur ?? C.accent : C.trait,
        backgroundColor: actif ? couleur ?? C.accent : C.surface,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text style={{ color: actif ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.petite }}>{libelle}</Text>
    </Pressable>
  );
}

function Interrupteur({ t, libelle, actif, onPress }) {
  const C = t.couleur;
  return (
    <Pressable onPress={onPress} accessibilityRole="switch" accessibilityState={{ checked: actif }} style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 4 }}>
      <View style={{ width: 22, height: 22, borderRadius: 5, borderWidth: 2, borderColor: actif ? C.accent : C.attenue, backgroundColor: actif ? C.accent : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
        {actif ? <Text style={{ color: C.accentTexte, fontSize: 13, fontWeight: '900' }}>✓</Text> : null}
      </View>
      <Text style={{ color: C.texte, fontSize: t.police.petite, flexShrink: 1 }}>{libelle}</Text>
    </Pressable>
  );
}

/** Une faute, en clair : « chante » → « chantent ». */
function descriptionFaute(f) {
  if (f.type === 'manquant') return `« ${f.attendu} » oublié`;
  if (f.type === 'en_trop') return `« ${f.ecrit} » en trop`;
  if (f.ecrit == null) return `« ${f.attendu} » oublié`;
  if (f.attendu == null) return `« ${f.ecrit} » en trop`;
  return `« ${f.ecrit} » au lieu de « ${f.attendu} »`;
}

export default function Dictees() {
  const t = useTheme();
  const C = t.couleur;
  const { profil, enregistrerDictee } = useProgression();

  const niveauDefaut = FRANCAIS.some((g) => g.groupe === profil.niveauParDefaut) ? profil.niveauParDefaut : null;
  const [groupe, setGroupe] = useState(niveauDefaut);
  const [donnees, setDonnees] = useState(null);
  const [chargement, setChargement] = useState(false);
  const [echec, setEchec] = useState(false);
  const [essai, setEssai] = useState(0);

  const [actif, setActif] = useState(null); // dictée en cours
  const [idx, setIdx] = useState(0); // morceau à écouter
  const [ecoute, setEcoute] = useState(false); // le morceau courant a déjà été lu
  const [enLecture, setEnLecture] = useState(false);
  const [vitesse, setVitesse] = useState('normal');
  const [ponctuation, setPonctuation] = useState(false);
  const [saisie, setSaisie] = useState('');
  const [message, setMessage] = useState(null);
  const [resultat, setResultat] = useState(null); // { r, points, meilleureAvant }
  const defilement = useRef(null);

  // Web : on télécharge tous les niveaux une fois (≈ 100 Ko) pour la suite hors connexion.
  useEffect(() => { prechargerDictees(); }, []);
  useEffect(() => () => arreterParole(), []);

  useEffect(() => {
    if (!groupe) { setDonnees(null); return; }
    let vivant = true;
    setChargement(true);
    setEchec(false);
    chargerDictees(groupe).then((d) => {
      if (!vivant) return;
      setDonnees(d);
      setEchec(!d);
      setChargement(false);
    });
    return () => { vivant = false; };
  }, [groupe, essai]);

  const infoGroupe = GROUPES.find((g) => g.groupe === groupe) ?? null;
  const matiere = infoGroupe?.matiere ?? 'francais';
  const estLangue = matiere !== 'francais';

  const commencer = (d) => {
    arreterParole();
    setActif(d);
    setIdx(0);
    setEcoute(false);
    setSaisie('');
    setMessage(null);
    setResultat(null);
    setVitesse(estLangue ? 'lent' : vitesseConseillee(d.niveau));
    setPonctuation(!estLangue && estPrimaire(d.niveau));
  };

  const lire = (texte) => {
    setEnLecture(true);
    parler(texte, matiere, { vitesse, onFin: () => setEnLecture(false) });
  };
  const lireMorceau = (i) => {
    if (!actif) return;
    const phrase = actif.phrases[i];
    lire(texteALire(phrase, { ponctuation: ponctuation && !estLangue, matiere }));
    setEcoute(true);
  };
  const suivant = () => {
    if (!actif || idx >= actif.phrases.length - 1) return;
    const i = idx + 1;
    setIdx(i);
    lireMorceau(i);
  };
  const precedent = () => {
    if (!actif || idx === 0) return;
    const i = idx - 1;
    setIdx(i);
    lireMorceau(i);
  };
  const relireTout = () => {
    if (!actif) return;
    lire(actif.phrases.map((p) => texteALire(p, { ponctuation: ponctuation && !estLangue, matiere })).join(' '));
  };
  const arreter = () => { arreterParole(); setEnLecture(false); };

  const valider = () => {
    if (!actif) return;
    if (!saisie.trim()) {
      setMessage('Écris d’abord ta dictée dans le cadre, puis appuie sur « Corriger ».');
      return;
    }
    arreter();
    const r = corriger(actif.texte, saisie);
    const gain = enregistrerDictee({ id: actif.id, titre: actif.titre, note: r.note, matiere });
    setResultat({ r, points: gain.points, meilleureAvant: gain.meilleureAvant });
    setMessage(null);
    setTimeout(() => defilement.current?.scrollTo?.({ y: 0, animated: true }), 50);
  };

  const recommencer = () => commencer(actif);

  // ─── Résultat ───────────────────────────────────────────────────────────────
  if (actif && resultat) {
    const { r, points, meilleureAvant } = resultat;
    const segE = segmentsEleve(saisie, r);
    const segC = segmentsCorrection(actif.texte, r);
    const parfait = r.fautes.length === 0;
    const couleurNote = r.note >= 8 ? C.succes : r.note >= 5 ? C.alerte : C.erreur;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
        <ScrollView ref={defilement} contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
          <Text style={{ color: C.attenue, fontSize: t.police.petite }}>{infoGroupe?.libelle} · {actif.titre}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10, marginTop: t.espace.s }}>
            <Text accessibilityLabel={`Note : ${virgule(r.note)} sur 10`} style={{ color: couleurNote, fontSize: 40, fontWeight: '800' }}>{virgule(r.note)}<Text style={{ fontSize: t.police.grande, color: C.attenue }}>{NBSP}/{NBSP}10</Text></Text>
            {points > 0 ? <Text style={{ color: C.succes, fontWeight: '700', fontSize: t.police.moyenne }}>+{points}{NBSP}XP</Text> : null}
          </View>
          <Text style={{ color: C.texte, fontSize: t.police.normale, marginTop: 4 }}>
            {parfait
              ? 'Zéro faute : bravo !'
              : `${r.fautes.length} faute${r.fautes.length > 1 ? 's' : ''} (−${virgule(r.retires)} point${r.retires > 1 ? 's' : ''}).`}
            {meilleureAvant != null && points === 0 ? ` Ta meilleure note : ${virgule(Math.max(meilleureAvant, r.note))}/10.` : ''}
          </Text>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 6, lineHeight: 17 }}>Barème : {BAREME_TEXTE} XP gagnés : ta note arrondie, ou ce qui dépasse ta meilleure note quand tu refais une dictée.</Text>

          {/* Texte de l'élève, fautes repérées */}
          <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.moyenne, marginTop: t.espace.l }}>Ton texte</Text>
          {!parfait ? (
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>Souligné : mot faux · barré : mot en trop · ‸ : mot ou signe oublié. Le numéro renvoie à la liste des fautes.</Text>
          ) : null}
          <View style={{ backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, padding: t.espace.m, marginTop: t.espace.s }}>
            <Text style={{ color: C.texte, fontSize: t.police.moyenne, lineHeight: 30 }}>
              {segE.map((s, i) => {
                if (s.faute == null) return <Text key={i}>{s.texte}</Text>;
                const f = r.fautes[s.faute];
                const barre = f.type === 'en_trop' || (f.type === 'ponctuation' && f.attendu == null);
                return (
                  <Text key={i}>
                    <Text
                      accessibilityLabel={s.manquant ? `oubli, faute ${s.n}` : `${s.texte}, faute ${s.n}`}
                      style={{
                        color: C.erreur,
                        backgroundColor: C.erreurFond,
                        fontWeight: '700',
                        textDecorationLine: s.manquant ? 'none' : barre ? 'line-through' : 'underline',
                        textDecorationColor: C.erreur,
                      }}
                    >{s.texte}</Text>
                    <Text style={{ color: C.erreur, fontSize: 11, fontWeight: '800' }}>{s.n}</Text>
                  </Text>
                );
              })}
            </Text>
          </View>

          {/* Texte juste */}
          <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.moyenne, marginTop: t.espace.l }}>La dictée corrigée</Text>
          <View style={{ backgroundColor: C.succesFond, borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, padding: t.espace.m, marginTop: t.espace.s }}>
            <Text style={{ color: C.texte, fontSize: t.police.moyenne, lineHeight: 30 }}>
              {segC.map((s, i) => (s.faute == null
                ? <Text key={i}>{s.texte}</Text>
                : (
                  <Text key={i}>
                    <Text style={{ color: C.succes, fontWeight: '800', textDecorationLine: 'underline', textDecorationColor: C.succes }}>{s.texte}</Text>
                    <Text style={{ color: C.succes, fontSize: 11, fontWeight: '800' }}>{s.n}</Text>
                  </Text>
                )))}
            </Text>
          </View>

          {/* Fautes par type */}
          {!parfait ? (
            <>
              <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.moyenne, marginTop: t.espace.l }}>Tes fautes</Text>
              {ORDRE_TYPES.filter((type) => r.parType[type]).map((type) => (
                <View key={type} style={{ marginTop: t.espace.s }}>
                  <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.normale }}>
                    {TYPES[type].libelle} : {r.parType[type]} × −{virgule(TYPES[type].points)}
                  </Text>
                  {r.fautes.filter((f) => f.type === type).map((f) => (
                    <Text key={f.n} style={{ color: C.texte, fontSize: t.police.petite, marginTop: 3, lineHeight: 19 }}>
                      <Text style={{ color: C.erreur, fontWeight: '800' }}>{f.n}.</Text> {descriptionFaute(f)}
                      {f.detail && f.type !== 'manquant' && f.type !== 'en_trop' ? <Text style={{ color: C.attenue }}> — {f.detail}</Text> : null}
                    </Text>
                  ))}
                </View>
              ))}
            </>
          ) : null}

          {actif.notions?.length ? (
            <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: t.espace.l, lineHeight: 19 }}>
              Notions travaillées : {actif.notions.join(' · ')}
            </Text>
          ) : null}

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.l }}>
            <Bouton t={t} principal libelle="🔁 Refaire cette dictée" onPress={recommencer} />
            <Bouton t={t} libelle="📋 Autre dictée" onPress={() => { setActif(null); setResultat(null); }} />
          </View>
          <SignalerErreur t={t} chapitreId={`dictees/${groupe}`} niveau={actif.niveau} cible="fiche" extrait={`${actif.id} — ${actif.titre}`} style={{ marginTop: t.espace.l }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── Dictée en cours ────────────────────────────────────────────────────────
  if (actif) {
    const n = actif.phrases.length;
    const dernier = idx >= n - 1;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
        <ScrollView ref={defilement} keyboardShouldPersistTaps="handled" contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
          <Pressable onPress={() => { arreter(); setActif(null); }} accessibilityRole="button">
            <Text style={{ color: C.accent, fontSize: t.police.petite }}>‹ Toutes les dictées</Text>
          </Pressable>
          <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '700', marginTop: t.espace.s }}>{actif.titre}</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
            {infoGroupe?.libelle}{estLangue ? ` · ${LIBELLES_NIVEAU[actif.niveau] ?? actif.niveau}` : ''} · {LIBELLE_DIFFICULTE[actif.difficulte] ?? actif.difficulte} · {compterMots(actif.texte)}{NBSP}mots
          </Text>
          {actif.consigne ? (
            <Text style={{ color: C.texte, backgroundColor: C.alerteFond, padding: t.espace.s, borderRadius: t.rayon.s, marginTop: t.espace.s, fontSize: t.police.petite }}>ℹ️ {actif.consigne}</Text>
          ) : null}

          {/* Lecture */}
          <View style={{ backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, padding: t.espace.m, marginTop: t.espace.m }}>
            <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.normale }}>
              Phrase {idx + 1}{NBSP}/{NBSP}{n}{enLecture ? '  🔊' : ''}
            </Text>
            <View accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: n, now: idx + 1 }} style={{ height: 6, backgroundColor: C.trait, borderRadius: 3, marginTop: 6, overflow: 'hidden' }}>
              <View style={{ width: `${Math.round(((idx + 1) / n) * 100)}%`, height: 6, backgroundColor: C.accent }} />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.m }}>
              {!ecoute
                ? <Bouton t={t} principal libelle="▶️ Écouter la phrase" onPress={() => lireMorceau(idx)} />
                : <Bouton t={t} libelle="🔁 Répéter" onPress={() => lireMorceau(idx)} />}
              {ecoute && !dernier ? <Bouton t={t} principal libelle="⏭️ Phrase suivante" onPress={suivant} /> : null}
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.s }}>
              {idx > 0 ? <Bouton t={t} libelle="⏮️ Précédente" onPress={precedent} /> : null}
              {dernier && ecoute ? <Bouton t={t} libelle="🔊 Relire tout le texte" onPress={relireTout} /> : null}
              {enLecture ? <Bouton t={t} libelle="⏹️ Arrêter" onPress={arreter} /> : null}
            </View>
            <View style={{ marginTop: t.espace.m, gap: 2 }}>
              <Interrupteur t={t} libelle="Lecture lente" actif={vitesse === 'lent'} onPress={() => setVitesse(vitesse === 'lent' ? 'normal' : 'lent')} />
              {!estLangue && estPrimaire(actif.niveau) ? (
                <Interrupteur t={t} libelle="Dire la ponctuation (« virgule », « point »…)" actif={ponctuation} onPress={() => setPonctuation(!ponctuation)} />
              ) : null}
            </View>
          </View>

          {/* Saisie */}
          <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.normale, marginTop: t.espace.l }}>Ta dictée</Text>
          <TextInput
            value={saisie}
            onChangeText={(v) => { setSaisie(v); if (message) setMessage(null); }}
            placeholder="Écoute chaque phrase et écris-la ici."
            placeholderTextColor={C.attenue}
            accessibilityLabel="Zone de saisie de la dictée"
            multiline
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            autoComplete="off"
            style={{
              minHeight: 170,
              textAlignVertical: 'top',
              backgroundColor: C.fond,
              borderColor: C.trait,
              borderWidth: 1.5,
              borderRadius: t.rayon.m,
              padding: t.espace.m,
              color: C.texte,
              fontSize: t.police.moyenne,
              lineHeight: 26,
              marginTop: t.espace.s,
            }}
          />
          {matiere === 'espagnol' ? (
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 4 }}>Astuce : ¿ ¡ ñ á é í ó ú se trouvent en appuyant longuement sur ? ! n a e i o u.</Text>
          ) : matiere === 'allemand' ? (
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 4 }}>Astuce : ä ö ü ß s’obtiennent en appuyant longuement sur a o u s.</Text>
          ) : null}
          {message ? <Text accessibilityLiveRegion="polite" style={{ color: C.erreur, marginTop: t.espace.s, fontSize: t.police.petite }}>{message}</Text> : null}
          <View style={{ flexDirection: 'row', marginTop: t.espace.m }}>
            <Bouton t={t} principal libelle="✅ Corriger" onPress={valider} />
          </View>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: t.espace.s, lineHeight: 17 }}>
            Prends le temps de te relire : accords, accents, majuscules et ponctuation comptent.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── Choix du niveau et de la dictée ───────────────────────────────────────────
  const suivi = profil.dictees || {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, lineHeight: 19 }}>
          Écoute le texte phrase par phrase, écris-le, puis corrige : l’appli repère tes fautes (accords, accents, majuscules, ponctuation…) et te donne une note sur 10.
        </Text>

        <Text style={{ color: C.texte, fontWeight: '700', marginTop: t.espace.l, marginBottom: t.espace.s }}>Français</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s }}>
          {FRANCAIS.map((g) => (
            <Pastille key={g.groupe} t={t} libelle={g.libelle} actif={groupe === g.groupe} onPress={() => setGroupe(g.groupe)} couleur={C.francais} />
          ))}
        </View>
        <Text style={{ color: C.texte, fontWeight: '700', marginTop: t.espace.m, marginBottom: t.espace.s }}>Langues (6e → 3e)</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s }}>
          {LANGUES.map((g) => (
            <Pastille key={g.groupe} t={t} libelle={g.libelle} actif={groupe === g.groupe} onPress={() => setGroupe(g.groupe)} couleur={couleurMatiere(t, g.matiere)} />
          ))}
        </View>

        <View style={{ marginTop: t.espace.l }}>
          {!groupe ? (
            <Text style={{ color: C.attenue }}>Choisis ta classe ou une langue.</Text>
          ) : chargement ? (
            <ActivityIndicator color={C.accent} />
          ) : echec ? (
            <View style={{ gap: t.espace.s }}>
              <Text style={{ color: C.erreur }}>Impossible de charger ces dictées. Vérifie ta connexion internet.</Text>
              <View style={{ flexDirection: 'row' }}><Bouton t={t} libelle="Réessayer" onPress={() => setEssai((k) => k + 1)} /></View>
            </View>
          ) : (
            (donnees?.dictees ?? []).map((d) => {
              const s = suivi[d.id];
              const bilan = s ? `Meilleure note : ${virgule(s.meilleure)}/10 · ${s.essais} essai${s.essais > 1 ? 's' : ''}` : d.notions.join(' · ');
              return (
                <Carte
                  key={d.id}
                  t={t}
                  titre={`${s && s.meilleure >= 10 ? '⭐ ' : ''}${d.titre}`}
                  sousTitre={`${estLangue ? `${LIBELLES_NIVEAU[d.niveau] ?? d.niveau} · ` : ''}${LIBELLE_DIFFICULTE[d.difficulte] ?? d.difficulte} · ${compterMots(d.texte)}${NBSP}mots`}
                  detail={bilan}
                  couleur={couleurMatiere(t, matiere)}
                  onPress={() => commencer(d)}
                />
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
