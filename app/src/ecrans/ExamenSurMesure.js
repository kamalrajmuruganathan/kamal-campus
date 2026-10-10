/**
 * Examen sur mesure — brevet blanc / bac blanc personnalisé.
 *
 * 1. Configuration : classe → matière → chapitres (tous cochés) → format
 *    (Express 10 min, Standard 20 min, Long 40 min).
 * 2. Épreuve : compte à rebours, une question à la fois, AUCUNE correction
 *    pendant l'épreuve ; QCM (choix mélangés, 1 point) et exercices
 *    auto-corrigeables (saisie, 2 points). Fin automatique au temps.
 * 3. Résultat : note sur 20, appréciation, détail par chapitre, chapitres à
 *    revoir, puis le corrigé question par question.
 *
 * Logique (composition, notation, historique) : lib/examen/composer.js (testée).
 * Historique : `profil.examens` (30 derniers).
 */

import { useTheme } from '../useTheme';
import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { couleurMatiere } from '../theme';
import { Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { useProgression } from '../progression/Contexte';
import { CHAPITRES, LIBELLES_NIVEAU, LIBELLES_MATIERE, LIBELLES_PARCOURS, niveaux } from '../contenu-index';
import { chargerExercices } from '../contenu-lourd';
import { aGenerateur, genererQuestions } from '../../lib/generateurs';
import { typeExercice, uniteExercice, consigneExercice } from '../../lib/autocorrection';
import { formaterChrono, tempsRestant, phaseChrono } from '../../lib/examen';
import {
  FORMATS, formatParId, descriptionFormat, creerAlea, composerExamen, noterExamen,
  formaterNote, ajouterHistorique, estRepondu,
} from '../../lib/examen/composer';
import { dateLocale } from '../../lib/serie';
import { dateEnLettres } from '../../lib/controle';

const LETTRES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const NBSP = ' ';
const NB_HISTORIQUE_AFFICHE = 5;
const majuscule = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const pluriel = (n, mot) => `${n}${NBSP}${mot}${n > 1 ? 's' : ''}`;
const nomMatiere = (m) => LIBELLES_MATIERE[m] ?? m;
const nomNiveau = (n) => LIBELLES_NIVEAU[n] ?? n;

/** Le chapitre a-t-il des questions de QCM (banque ou générateur) ? */
const aDesQcm = (c) => aGenerateur(c.id) || (c.qcm?.questions?.length ?? 0) > 0;

/** Questions de QCM d'un chapitre : générées si possible, sinon la banque écrite. */
function questionsDuChapitre(c, n, rand) {
  if (aGenerateur(c.id)) {
    try {
      const qs = genererQuestions(c.id, n, rand);
      if (qs.length) return qs;
    } catch { /* on retombe sur la banque */ }
  }
  return c.qcm?.questions ?? [];
}

/** Exercices auto-corrigeables d'un chapitre (chargés à la demande). */
async function exercicesAutoDu(c) {
  let donnees = c.exercice ?? null;
  if (!donnees && (c.nbExercices ?? 0) > 0) {
    try { donnees = await chargerExercices(c.id); } catch { donnees = null; }
  }
  const exos = donnees?.exercices ?? [];
  return exos
    .map((ex, i) => ({ ...ex, exoId: String(ex.id ?? `n${i + 1}`) }))
    .filter((ex) => {
      try { return typeExercice(ex, c.matiere) === 'auto'; } catch { return false; }
    });
}

/** Chrono lisible par un lecteur d'écran. */
function chronoEnMots(s) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  const parties = [];
  if (m) parties.push(pluriel(m, 'minute'));
  if (r || !m) parties.push(pluriel(r, 'seconde'));
  return `Temps restant : ${parties.join(' et ')}`;
}

export default function ExamenSurMesure({ navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { profil, definirReglages, enregistrerResultat, enregistrerExercice } = useProgression();

  const [phase, setPhase] = useState('config'); // config | chargement | epreuve | resultat
  const [epreuve, setEpreuve] = useState(null);
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState([]);
  const reponsesRef = useRef([]);
  const [ecoule, setEcoule] = useState(0);
  const [bilan, setBilan] = useState(null);
  const finRef = useRef(false);
  const vivantRef = useRef(true);
  useEffect(() => () => { vivantRef.current = false; }, []);

  const historique = Array.isArray(profil?.examens) ? profil.examens : [];
  const duree = epreuve ? epreuve.duree : 0;
  const restant = tempsRestant(duree, ecoule);

  // ── Lancement : charge les exercices, compose le sujet ──────────────────────
  const commencer = async ({ niveau, matiere, chapitres, formatId }) => {
    const format = formatParId(formatId);
    const chaps = chapitres.map((id) => CHAPITRES.find((c) => c.id === id)).filter(Boolean);
    if (!chaps.length) return;
    setPhase('chargement');
    const graine = Date.now();
    const rand = creerAlea(graine);
    const besoin = format.nbQcm + format.nbExos;
    const exos = await Promise.all(chaps.map((c) => exercicesAutoDu(c).catch(() => [])));
    if (!vivantRef.current) return;
    const entree = chaps.map((c, i) => ({
      id: c.id,
      matiere: c.matiere,
      questionsQcm: questionsDuChapitre(c, besoin, rand),
      exercicesAuto: exos[i],
    }));
    const items = composerExamen({ chapitres: entree, nbQcm: format.nbQcm, nbExos: format.nbExos, graine });
    if (!items.length) {
      setPhase('config');
      Alert.alert('Examen impossible', 'Ces chapitres n’ont pas encore de questions.');
      return;
    }
    const nbExos = items.filter((it) => it.type === 'exo').length;
    finRef.current = false;
    reponsesRef.current = new Array(items.length).fill(null);
    setReponses(reponsesRef.current);
    setIndex(0);
    setEcoule(0);
    setBilan(null);
    setEpreuve({
      id: `ex-${graine.toString(36)}`,
      items,
      niveau,
      matiere,
      format,
      chapitres: chaps.map((c) => c.id),
      titres: Object.fromEntries(chaps.map((c) => [c.id, c.titre])),
      duree: format.minutes * 60,
      debut: Date.now(),
      exosRemplaces: format.nbExos - nbExos,
    });
    setPhase('epreuve');
  };

  // ── Fin de l'épreuve : note, XP (une seule fois), historique ────────────────
  const terminer = (raison = 'rendu') => {
    if (finRef.current || !epreuve) return;
    finRef.current = true;
    const { items } = epreuve;
    const reps = reponsesRef.current;
    const note = noterExamen(items, reps);

    let xp = 0;
    try {
      // QCM : circuit habituel (série, ligue, quêtes, réserve d'erreurs).
      const qcm = items.map((it, i) => ({ it, i })).filter((x) => x.it.type === 'qcm');
      if (qcm.length) {
        const res = enregistrerResultat({
          questions: qcm.map((x) => x.it.question),
          reponses: qcm.map((x) => (note.details[x.i].repondu ? { choisi: reps[x.i].choisi, juste: note.details[x.i].juste } : null)),
          titre: `Examen sur mesure — ${nomMatiere(epreuve.matiere)}`,
          matiere: epreuve.matiere,
        });
        xp += res?.points ?? 0;
      }
      // Exercices réussis : +XP la première fois (comme l'écran Exercices).
      items.forEach((it, i) => {
        if (it.type === 'exo' && note.details[i].juste && it.exoId) {
          xp += enregistrerExercice({ chapitreId: it.chapitreId, exoId: it.exoId, matiere: it.matiere }).points ?? 0;
        }
      });
    } catch { /* l'XP ne doit jamais bloquer l'affichage de la note */ }

    definirReglages({
      examens: ajouterHistorique(profil?.examens, {
        id: epreuve.id,
        date: dateLocale(new Date()),
        niveau: epreuve.niveau,
        matiere: epreuve.matiere,
        format: epreuve.format.id,
        note20: note.note20,
        chapitres: epreuve.chapitres,
      }),
    });

    setBilan({ ...note, xp, raison });
    setPhase('resultat');
  };
  const terminerRef = useRef(terminer);
  terminerRef.current = terminer;

  // Chronomètre : calculé depuis l'heure de début (fiable même si l'onglet dort).
  useEffect(() => {
    if (phase !== 'epreuve' || !epreuve) return undefined;
    const maj = () => setEcoule(Math.floor((Date.now() - epreuve.debut) / 1000));
    maj();
    const id = setInterval(maj, 1000);
    return () => clearInterval(id);
  }, [phase, epreuve]);

  useEffect(() => {
    if (phase === 'epreuve' && epreuve && restant <= 0) terminerRef.current('temps');
  }, [phase, epreuve, restant]);

  const repondre = (rep) => {
    const suite = reponsesRef.current.slice();
    suite[index] = rep;
    reponsesRef.current = suite;
    setReponses(suite);
  };

  const rendreCopie = () => {
    const items = epreuve.items;
    const vides = items.filter((it, i) => !estRepondu(it, reponsesRef.current[i])).length;
    Alert.alert(
      'Rendre ta copie ?',
      vides > 0
        ? `${pluriel(vides, 'question')} sans réponse compter${vides > 1 ? 'ont' : 'a'} zéro. Tu ne pourras plus modifier tes réponses.`
        : 'Tu ne pourras plus modifier tes réponses.',
      [
        { text: 'Continuer', style: 'cancel' },
        { text: 'Rendre ma copie', style: 'destructive', onPress: () => terminerRef.current('rendu') },
      ],
    );
  };

  // ── Rendu ───────────────────────────────────────────────────────────────────
  const conteneur = (contenu, opts = {}) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView
        contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}
        keyboardShouldPersistTaps="handled"
        {...opts}
      >
        {contenu}
      </ScrollView>
    </SafeAreaView>
  );

  if (phase === 'chargement') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }}>
        <View style={{ padding: t.espace.l, alignItems: 'center' }} accessibilityLiveRegion="polite">
          <ActivityIndicator size="large" color={C.accent} />
          <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: t.espace.m, textAlign: 'center' }}>
            Préparation de ton sujet…
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (phase === 'epreuve' && epreuve) {
    return conteneur(
      <Epreuve
        t={t}
        epreuve={epreuve}
        index={index}
        setIndex={setIndex}
        reponses={reponses}
        restant={restant}
        onRepondre={repondre}
        onRendre={rendreCopie}
      />,
    );
  }

  if (phase === 'resultat' && epreuve && bilan) {
    return conteneur(
      <Resultat
        t={t}
        epreuve={epreuve}
        bilan={bilan}
        reponses={reponsesRef.current}
        onChapitre={(id) => navigation.navigate('Chapitre', { id, titre: epreuve.titres[id] ?? id })}
        onNouveau={() => { setEpreuve(null); setBilan(null); setPhase('config'); }}
      />,
    );
  }

  return conteneur(
    <Configuration
      t={t}
      niveauDefaut={profil?.niveauParDefaut ?? null}
      historique={historique}
      onCommencer={commencer}
    />,
  );
}

// ── Petits composants ─────────────────────────────────────────────────────────

function Bouton({ t, texte, onPress, desactive, variante = 'plein', a11y, style }) {
  const C = t.couleur;
  const plein = variante === 'plein';
  const fond = variante === 'succes' ? C.succes : C.accent;
  return (
    <Pressable
      onPress={desactive ? undefined : onPress}
      disabled={desactive}
      accessibilityRole="button"
      accessibilityLabel={a11y ?? texte}
      accessibilityState={{ disabled: !!desactive }}
      style={({ pressed }) => [{
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: t.rayon.m,
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: variante === 'contour' ? 'transparent' : (plein || variante === 'succes' ? fond : C.surface),
        borderWidth: variante === 'contour' ? 1 : 0,
        borderColor: C.accent,
        opacity: desactive ? 0.45 : (pressed ? 0.75 : 1),
      }, style]}
    >
      <Text style={{ color: variante === 'contour' ? C.accent : C.accentTexte, fontWeight: '700', fontSize: t.police.normale, textAlign: 'center' }}>
        {texte}
      </Text>
    </Pressable>
  );
}

function styleChip(t, on) {
  const C = t.couleur;
  return {
    borderWidth: 1,
    borderColor: on ? C.accent : C.trait,
    backgroundColor: on ? C.accent : 'transparent',
    borderRadius: t.rayon.m,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
    minHeight: 40,
    justifyContent: 'center',
  };
}
const styleChipTexte = (t, on) => ({ color: on ? t.couleur.accentTexte : t.couleur.texte, fontWeight: '700', fontSize: t.police.petite });

// ── Configuration ─────────────────────────────────────────────────────────────

function Configuration({ t, niveauDefaut, historique, onCommencer }) {
  const C = t.couleur;
  const classes = useMemo(() => niveaux().map((n) => ({ id: n, nom: nomNiveau(n) })), []);
  const [classe, setClasse] = useState(classes.some((c) => c.id === niveauDefaut) ? niveauDefaut : null);
  const [matiere, setMatiere] = useState(null);
  const [choisis, setChoisis] = useState([]);
  const [formatId, setFormatId] = useState('standard');

  const matieres = useMemo(() => {
    const m = new Map();
    for (const c of CHAPITRES) {
      if (c.niveau === classe && !m.has(c.matiere) && aDesQcm(c)) m.set(c.matiere, nomMatiere(c.matiere));
    }
    return [...m.entries()].map(([id, nom]) => ({ id, nom })).sort((x, y) => x.nom.localeCompare(y.nom, 'fr'));
  }, [classe]);

  const groupes = useMemo(() => {
    const g = new Map();
    for (const c of CHAPITRES) {
      if (c.niveau !== classe || c.matiere !== matiere || !aDesQcm(c)) continue;
      if (!g.has(c.parcours)) g.set(c.parcours, []);
      g.get(c.parcours).push(c);
    }
    return [...g.entries()].map(([parcours, chapitres]) => ({ parcours, nom: LIBELLES_PARCOURS[parcours] ?? parcours, chapitres }));
  }, [classe, matiere]);
  const tousLesIds = useMemo(() => groupes.flatMap((g) => g.chapitres.map((c) => c.id)), [groupes]);

  const choisirMatiere = (id) => {
    setMatiere(id);
    const ids = [];
    for (const c of CHAPITRES) if (c.niveau === classe && c.matiere === id && aDesQcm(c)) ids.push(c.id);
    setChoisis(ids); // tous cochés par défaut
  };
  const basculer = (id) => setChoisis(choisis.includes(id) ? choisis.filter((x) => x !== id) : [...choisis, id]);

  const pret = classe && matiere && choisis.length > 0;
  const etape = { color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginTop: t.espace.m, marginBottom: 8 };
  const derniers = historique.slice(0, NB_HISTORIQUE_AFFICHE);

  return (
    <View>
      <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '700' }} accessibilityRole="header">
        Examen sur mesure
      </Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, lineHeight: 19, marginTop: 4 }}>
        Ton brevet blanc ou ton bac blanc, sur les chapitres de ton choix : un chrono, pas de correction
        pendant l’épreuve, une note sur 20 à la fin. QCM : 1 point ; exercice : 2 points.
      </Text>

      <Text style={etape}>1. TA CLASSE</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {classes.map((c) => {
          const on = classe === c.id;
          return (
            <Pressable key={c.id} onPress={() => { setClasse(c.id); setMatiere(null); setChoisis([]); }} style={styleChip(t, on)} accessibilityRole="radio" accessibilityState={{ checked: on }} accessibilityLabel={`Classe : ${c.nom}`}>
              <Text style={styleChipTexte(t, on)}>{c.nom}</Text>
            </Pressable>
          );
        })}
      </View>

      {classe && (
        <>
          <Text style={etape}>2. LA MATIÈRE</Text>
          {matieres.length === 0 && (
            <Text style={{ color: C.attenue, fontSize: t.police.petite }}>Aucune matière disponible pour cette classe.</Text>
          )}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {matieres.map((m) => {
              const on = matiere === m.id;
              return (
                <Pressable key={m.id} onPress={() => choisirMatiere(m.id)} style={styleChip(t, on)} accessibilityRole="radio" accessibilityState={{ checked: on }} accessibilityLabel={`Matière : ${m.nom}`}>
                  <Text style={styleChipTexte(t, on)}>{m.nom}</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}

      {matiere && (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: t.espace.m, marginBottom: 8 }}>
            <Text style={[etape, { marginTop: 0, marginBottom: 0, flex: 1, minWidth: 160 }]}>
              3. LES CHAPITRES ({choisis.length}/{tousLesIds.length})
            </Text>
            <Pressable onPress={() => setChoisis(tousLesIds)} accessibilityRole="button" accessibilityLabel="Cocher tous les chapitres" hitSlop={8} style={{ paddingHorizontal: 8, paddingVertical: 6 }}>
              <Text style={{ color: C.accent, fontWeight: '700', fontSize: t.police.petite }}>Tout</Text>
            </Pressable>
            <Pressable onPress={() => setChoisis([])} accessibilityRole="button" accessibilityLabel="Décocher tous les chapitres" hitSlop={8} style={{ paddingHorizontal: 8, paddingVertical: 6 }}>
              <Text style={{ color: C.accent, fontWeight: '700', fontSize: t.police.petite }}>Aucun</Text>
            </Pressable>
          </View>
          {groupes.map((g) => (
            <View key={g.parcours}>
              {groupes.length > 1 && (
                <Text style={{ color: C.texte, fontSize: t.police.petite, fontWeight: '600', marginBottom: 6 }}>{g.nom}</Text>
              )}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {g.chapitres.map((c) => {
                  const on = choisis.includes(c.id);
                  return (
                    <Pressable key={c.id} onPress={() => basculer(c.id)} style={styleChip(t, on)} accessibilityRole="checkbox" accessibilityState={{ checked: on }} accessibilityLabel={c.titre}>
                      <Text style={styleChipTexte(t, on)}>{on ? '✓ ' : ''}{c.titre}</Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          ))}

          <Text style={etape}>4. LE FORMAT</Text>
          {FORMATS.map((f) => {
            const on = formatId === f.id;
            return (
              <Pressable
                key={f.id}
                onPress={() => setFormatId(f.id)}
                accessibilityRole="radio"
                accessibilityState={{ checked: on }}
                accessibilityLabel={`Format ${f.nom} : ${descriptionFormat(f)}`}
                style={({ pressed }) => ({
                  borderWidth: on ? 2 : 1,
                  borderColor: on ? C.accent : C.trait,
                  backgroundColor: on ? C.surfaceHaute : C.surface,
                  borderRadius: t.rayon.m,
                  padding: t.espace.m,
                  marginBottom: t.espace.s,
                  opacity: pressed ? 0.8 : 1,
                })}
              >
                <Text style={{ color: on ? C.accent : C.texte, fontSize: t.police.normale, fontWeight: '700' }}>{f.nom}</Text>
                <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>{descriptionFormat(f)}</Text>
              </Pressable>
            );
          })}
        </>
      )}

      <View style={{ marginTop: t.espace.m }}>
        <Bouton
          t={t}
          texte={pret ? 'Commencer' : 'Choisis ta classe, ta matière et des chapitres'}
          onPress={() => onCommencer({ niveau: classe, matiere, chapitres: choisis, formatId })}
          desactive={!pret}
        />
      </View>

      {derniers.length > 0 && (
        <>
          <Text style={[etape, { marginTop: t.espace.xl }]}>MES DERNIERS EXAMENS</Text>
          {derniers.map((e) => (
            <View key={e.id} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderLeftWidth: 4, borderLeftColor: couleurMatiere(t, e.matiere), borderRadius: t.rayon.m, padding: t.espace.m, marginBottom: t.espace.s }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: C.texte, fontSize: t.police.normale, fontWeight: '600' }}>
                  {nomMatiere(e.matiere)} · {nomNiveau(e.niveau)}
                </Text>
                <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
                  {majuscule(dateEnLettres(e.date))} · {formatParId(e.format).nom} · {pluriel((e.chapitres || []).length, 'chapitre')}
                </Text>
              </View>
              <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '800', marginLeft: t.espace.s }} accessibilityLabel={`Note : ${formaterNote(e.note20)} sur 20`}>
                {formaterNote(e.note20)}/20
              </Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
}

// ── Épreuve ───────────────────────────────────────────────────────────────────

function Epreuve({ t, epreuve, index, setIndex, reponses, restant, onRepondre, onRendre }) {
  const C = t.couleur;
  const { items, duree } = epreuve;
  const item = items[index];
  const rep = reponses[index];
  const ph = phaseChrono(restant, duree);
  const couleurChrono = ph === 'critique' ? C.erreur : ph === 'attention' ? C.alerte : C.texte;
  const dernier = index + 1 >= items.length;
  const nbRepondu = items.filter((it, i) => estRepondu(it, reponses[i])).length;

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, flex: 1 }}>
          Question {index + 1} / {items.length} · {item.type === 'qcm' ? 'QCM, 1 point' : 'exercice, 2 points'}
        </Text>
        <Text
          accessibilityRole="timer"
          accessibilityLabel={chronoEnMots(restant)}
          style={{ color: couleurChrono, fontSize: t.police.grande, fontWeight: '800', fontVariant: ['tabular-nums'] }}
        >
          {formaterChrono(restant)}
        </Text>
      </View>
      <View style={{ height: 6, borderRadius: 3, backgroundColor: C.trait, overflow: 'hidden', marginTop: 6 }}>
        <View style={{ width: `${duree > 0 ? (restant / duree) * 100 : 0}%`, height: '100%', backgroundColor: couleurChrono }} />
      </View>
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 6 }} numberOfLines={2}>
        {epreuve.titres[item.chapitreId] ?? ''}
      </Text>

      {index === 0 && epreuve.exosRemplaces > 0 && (
        <View style={{ marginTop: t.espace.s }}>
          <Bandeau
            t={t}
            texte={`Pas assez d’exercices corrigés automatiquement dans ces chapitres : ${pluriel(epreuve.exosRemplaces, 'exercice')} remplacé${epreuve.exosRemplaces > 1 ? 's' : ''} par des QCM.`}
          />
        </View>
      )}

      {/* Accès direct aux questions (répondu / non répondu, sans correction). */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: t.espace.s }}>
        {items.map((it, i) => {
          const fait = estRepondu(it, reponses[i]);
          const actif = i === index;
          return (
            <Pressable
              key={i}
              onPress={() => setIndex(i)}
              accessibilityRole="button"
              accessibilityLabel={`Question ${i + 1}${fait ? ', répondue' : ', sans réponse'}`}
              accessibilityState={{ selected: actif }}
              style={{
                width: 32, height: 32, borderRadius: 16, marginRight: 6, marginBottom: 6,
                alignItems: 'center', justifyContent: 'center',
                borderWidth: actif ? 2 : 1,
                borderColor: actif ? C.accent : C.trait,
                backgroundColor: fait ? C.surfaceHaute : 'transparent',
              }}
            >
              <Text style={{ color: actif ? C.accent : (fait ? C.texte : C.attenue), fontSize: t.police.minuscule, fontWeight: '700' }}>{i + 1}</Text>
            </Pressable>
          );
        })}
      </View>

      {item.type === 'qcm'
        ? <QuestionQcm key={index} t={t} question={item.question} choisi={rep?.choisi ?? null} onChoisir={(i) => onRepondre({ choisi: i })} />
        : (
          <QuestionExo
            key={index}
            t={t}
            item={item}
            numero={index + 1}
            saisie={rep?.saisie ?? ''}
            onSaisir={(s) => onRepondre({ saisie: s })}
            onValider={() => (dernier ? null : setIndex(index + 1))}
          />
        )}

      <View style={{ flexDirection: 'row', marginTop: t.espace.l }}>
        <Bouton t={t} texte="Précédent" variante="contour" desactive={index === 0} onPress={() => setIndex(index - 1)} style={{ flex: 1, marginRight: t.espace.s }} />
        <Bouton t={t} texte="Suivant" desactive={dernier} onPress={() => setIndex(index + 1)} style={{ flex: 1 }} />
      </View>
      <Bouton
        t={t}
        texte="Rendre ma copie"
        variante="succes"
        a11y={`Rendre ma copie : ${nbRepondu} réponse${nbRepondu > 1 ? 's' : ''} sur ${items.length}`}
        onPress={onRendre}
        style={{ marginTop: t.espace.m }}
      />
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, textAlign: 'center', marginTop: 6 }}>
        {nbRepondu} / {items.length} réponses données · la copie est ramassée à la fin du temps.
      </Text>
    </View>
  );
}

function QuestionQcm({ t, question, choisi, onChoisir }) {
  const C = t.couleur;
  return (
    <View>
      <VisionneuseFiche markdown={question.enonce} style={{ marginTop: t.espace.s }} />
      {question.choix.map((choix, i) => {
        const on = i === choisi;
        return (
          <Pressable
            key={i}
            onPress={() => onChoisir(i)}
            accessibilityRole="radio"
            accessibilityState={{ checked: on }}
            accessibilityLabel={`Réponse ${LETTRES[i]}`}
            style={({ pressed }) => ({
              flexDirection: 'row',
              alignItems: 'flex-start',
              backgroundColor: on ? C.surfaceHaute : C.surface,
              borderColor: on ? C.accent : C.trait,
              borderWidth: on ? 2 : 1,
              borderRadius: t.rayon.m,
              padding: t.espace.m,
              marginTop: t.espace.s,
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <Text style={{ color: on ? C.accent : C.attenue, fontWeight: '800', fontSize: t.police.moyenne, marginRight: t.espace.s }}>
              {LETTRES[i]}
            </Text>
            <View style={{ flex: 1 }}>
              <VisionneuseFiche markdown={choix} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

function QuestionExo({ t, item, numero, saisie, onSaisir, onValider }) {
  const C = t.couleur;
  const ex = item.exercice;
  const unite = useMemo(() => uniteExercice(ex, item.matiere), [ex, item.matiere]);
  const consigne = useMemo(() => consigneExercice(ex, item.matiere), [ex, item.matiere]);
  return (
    <View style={{ marginTop: t.espace.s, backgroundColor: C.surface, borderRadius: t.rayon.m, borderWidth: 1, borderColor: C.trait, overflow: 'hidden' }}>
      <VisionneuseFiche markdown={`**Exercice.** ${ex.enonce}`} />
      <View style={{ padding: t.espace.m, paddingTop: 0 }}>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginBottom: 6 }}>
          {unite ? `Ta réponse (unité : ${unite}, facultative) :` : consigne ? `Ta réponse (${consigne}) :` : 'Ta réponse :'}
        </Text>
        <TextInput
          value={saisie}
          onChangeText={onSaisir}
          onSubmitEditing={onValider}
          placeholder="Écris ta réponse"
          placeholderTextColor={C.attenue}
          accessibilityLabel={`Réponse à la question ${numero}`}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          style={{
            minHeight: 44,
            backgroundColor: C.fond,
            borderColor: C.trait,
            borderWidth: 1,
            borderRadius: t.rayon.s,
            paddingHorizontal: t.espace.m,
            color: C.texte,
            fontSize: t.police.normale,
          }}
        />
      </View>
    </View>
  );
}

// ── Résultat ──────────────────────────────────────────────────────────────────

/** Corrigé d'une question en Markdown (contenu de l'appli seulement, pas la saisie). */
function corrigeMarkdown(item, rep) {
  if (item.type === 'qcm') {
    const q = item.question;
    let md = `${q.enonce}\n\n`;
    if (Number.isInteger(rep?.choisi)) md += `**Ta réponse :** ${LETTRES[rep.choisi]}. ${q.choix[rep.choisi]}\n\n`;
    md += `**Bonne réponse :** ${LETTRES[q.reponse]}. ${q.choix[q.reponse]}`;
    if (q.explication) md += `\n\n${q.explication}`;
    return md;
  }
  const ex = item.exercice;
  const etapes = Array.isArray(ex.corrige) ? ex.corrige : [ex.corrige].filter(Boolean);
  let md = `${ex.enonce}\n\n**Bonne réponse :** ${ex.reponse}`;
  if (etapes.length) md += `\n\n**Corrigé**\n\n${etapes.map((e, i) => `${i + 1}. ${e}`).join('\n\n')}`;
  return md;
}

function Resultat({ t, epreuve, bilan, reponses, onChapitre, onNouveau }) {
  const C = t.couleur;
  const [ouverts, setOuverts] = useState({});
  const { items } = epreuve;
  const couleurNote = bilan.note20 >= 12 ? C.succes : bilan.note20 >= 10 ? C.alerte : C.erreur;
  const chapitresNotes = epreuve.chapitres.filter((id) => bilan.parChapitre[id]);

  return (
    <View>
      {bilan.raison === 'temps' && <Bandeau t={t} texte="⏱️ Temps écoulé : ta copie a été ramassée." />}

      <View style={{ alignItems: 'center', backgroundColor: C.surface, borderRadius: t.rayon.l, padding: t.espace.l, borderWidth: 1, borderColor: C.trait }}>
        <Text style={{ color: C.attenue, fontSize: t.police.petite }}>
          {nomMatiere(epreuve.matiere)} · {nomNiveau(epreuve.niveau)} · format {epreuve.format.nom}
        </Text>
        <Text
          accessibilityRole="header"
          accessibilityLabel={`Note : ${formaterNote(bilan.note20)} sur 20`}
          style={{ color: couleurNote, fontSize: 56, fontWeight: '900', marginTop: t.espace.s, fontVariant: ['tabular-nums'] }}
        >
          {formaterNote(bilan.note20)}<Text style={{ fontSize: t.police.grande, color: C.attenue }}>/20</Text>
        </Text>
        <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>{bilan.appreciation}</Text>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4, textAlign: 'center' }}>
          {bilan.points} / {pluriel(bilan.total, 'point')}
          {bilan.sansReponse > 0 ? ` · ${pluriel(bilan.sansReponse, 'question')} sans réponse` : ''}
          {bilan.xp > 0 ? ` · +${bilan.xp}${NBSP}XP` : ''}
        </Text>
      </View>

      <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: t.espace.l, marginBottom: t.espace.s }} accessibilityRole="header">
        Détail par chapitre
      </Text>
      {chapitresNotes.map((id) => {
        const p = bilan.parChapitre[id];
        const taux = p.total ? p.juste / p.total : 0;
        const couleur = taux >= 0.6 ? C.succes : C.erreur;
        return (
          <View key={id} style={{ marginBottom: t.espace.s }} accessible accessibilityLabel={`${epreuve.titres[id] ?? id} : ${p.juste} sur ${p.total} points`}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: C.texte, fontSize: t.police.petite, flex: 1, marginRight: t.espace.s }}>{epreuve.titres[id] ?? id}</Text>
              <Text style={{ color: C.attenue, fontSize: t.police.petite, fontVariant: ['tabular-nums'] }}>{p.juste}/{p.total}{NBSP}pt{p.total > 1 ? 's' : ''}</Text>
            </View>
            <View style={{ height: 6, backgroundColor: C.trait, borderRadius: 3, overflow: 'hidden', marginTop: 4 }}>
              <View style={{ width: `${Math.round(taux * 100)}%`, height: 6, backgroundColor: couleur }} />
            </View>
          </View>
        );
      })}
      {epreuve.chapitres.length > chapitresNotes.length && (
        <Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>
          {pluriel(epreuve.chapitres.length - chapitresNotes.length, 'chapitre')} sans question dans ce sujet (format trop court pour tout couvrir).
        </Text>
      )}

      {bilan.aRevoir.length > 0 ? (
        <>
          <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: t.espace.l, marginBottom: t.espace.s }} accessibilityRole="header">
            Chapitres à revoir
          </Text>
          {bilan.aRevoir.map((id) => (
            <Pressable
              key={id}
              onPress={() => onChapitre(id)}
              accessibilityRole="button"
              accessibilityLabel={`Revoir le chapitre ${epreuve.titres[id] ?? id}`}
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', backgroundColor: C.erreurFond, borderRadius: t.rayon.m, padding: t.espace.m, marginBottom: t.espace.s, minHeight: 44, opacity: pressed ? 0.75 : 1 })}
            >
              <Text style={{ color: C.texte, fontSize: t.police.normale, fontWeight: '600', flex: 1 }}>{epreuve.titres[id] ?? id}</Text>
              <Text style={{ color: C.erreur, fontSize: t.police.petite, fontWeight: '700' }}>Revoir ›</Text>
            </Pressable>
          ))}
        </>
      ) : (
        <Text style={{ color: C.succes, fontSize: t.police.normale, fontWeight: '600', marginTop: t.espace.l }}>
          Aucun chapitre sous 60 % : bravo !
        </Text>
      )}

      <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: t.espace.l, marginBottom: 4 }} accessibilityRole="header">
        Corrigé
      </Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, marginBottom: t.espace.s }}>
        Touche une question pour voir ta réponse, la bonne réponse et l’explication.
      </Text>
      {items.map((item, i) => {
        const d = bilan.details[i];
        const ouvert = !!ouverts[i];
        const etat = d.juste ? '✅ Juste' : d.repondu ? '❌ Faux' : '⚪ Sans réponse';
        const couleur = d.juste ? C.succes : d.repondu ? C.erreur : C.attenue;
        const pts = d.juste ? item.points : 0;
        return (
          <View key={i} style={{ backgroundColor: C.surface, borderRadius: t.rayon.m, borderLeftWidth: 3, borderLeftColor: couleur, marginBottom: t.espace.s, overflow: 'hidden' }}>
            <Pressable
              onPress={() => setOuverts({ ...ouverts, [i]: !ouvert })}
              accessibilityRole="button"
              accessibilityState={{ expanded: ouvert }}
              accessibilityLabel={`Question ${i + 1}, ${etat.replace(/^\S+ /, '')}, ${pts} sur ${item.points} point${item.points > 1 ? 's' : ''}`}
              style={{ flexDirection: 'row', alignItems: 'center', padding: t.espace.m, minHeight: 44 }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: C.texte, fontSize: t.police.normale, fontWeight: '600' }}>
                  Question {i + 1} · {item.type === 'qcm' ? 'QCM' : 'exercice'} · {pts}/{item.points}{NBSP}pt{item.points > 1 ? 's' : ''}
                </Text>
                <Text style={{ color: couleur, fontSize: t.police.petite, marginTop: 2 }}>
                  {etat} · <Text style={{ color: C.attenue }}>{epreuve.titres[item.chapitreId] ?? ''}</Text>
                </Text>
              </View>
              <Text style={{ color: C.attenue, fontSize: t.police.grande, marginLeft: t.espace.s }}>{ouvert ? '▾' : '▸'}</Text>
            </Pressable>
            {ouvert && (
              <View style={{ paddingBottom: t.espace.s }}>
                {item.type === 'exo' && (
                  <Text style={{ color: C.texte, fontSize: t.police.petite, paddingHorizontal: t.espace.m }}>
                    <Text style={{ fontWeight: '700' }}>Ta réponse : </Text>
                    {d.repondu ? reponses[i].saisie.trim() : '(aucune)'}
                  </Text>
                )}
                <VisionneuseFiche markdown={corrigeMarkdown(item, reponses[i])} />
              </View>
            )}
          </View>
        );
      })}

      <Bouton t={t} texte="Nouvel examen" onPress={onNouveau} style={{ marginTop: t.espace.l }} />
    </View>
  );
}
