/**
 * Révisions de vacances — l'élève choisit la classe à revoir, les matières, la
 * durée et le rythme ; l'appli fabrique un programme d'environ 20 minutes par
 * jour (logique dans lib/vacances). Chaque séance ouvre le bon écran et se coche
 * toute seule quand le QCM (ou 3 exercices) est fait, ou à la main.
 *
 * Le programme est rangé dans `profil.vacances` (un seul à la fois).
 */

import { useTheme } from '../useTheme';
import { useMemo, useState } from 'react';
import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { couleurMatiere } from '../theme';
import { useProgression } from '../progression/Contexte';
import { CHAPITRES, LIBELLES_NIVEAU, LIBELLES_PARCOURS, niveaux, parcoursDe } from '../contenu-index';
import { aGenerateur } from '../../lib/generateurs';
import { melanger } from '../../lib/quizmix';
import { dateLocale } from '../../lib/serie';
import { dateEnLettres, ajouterJours } from '../../lib/controle';
import { construireQuestions } from '../defisContenu';
import {
  DUREES, RYTHMES, MATIERES_PRINCIPALES, niveauPrecedent, creerPlanVacances, planActif, abandonner,
  basculerSeance, etatDuJour, libelleSeance, iconeSeance, datesSeances, estSeanceBilan,
} from '../../lib/vacances';

const NBSP = ' ';
const TAILLE_BILAN = 20;
const majuscule = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const PREFERENCE_MATHS = ['maths', 'maths-specialite', 'tronc-commun'];

/** Parcours cochés par défaut : un par matière principale (maths de spécialité au lycée). */
function parcoursParDefaut(niveau) {
  const ps = [...parcoursDe(niveau)].sort((a, b) => {
    const ra = PREFERENCE_MATHS.indexOf(a.parcours);
    const rb = PREFERENCE_MATHS.indexOf(b.parcours);
    return (ra < 0 ? 99 : ra) - (rb < 0 ? 99 : rb);
  });
  const vues = new Set();
  const res = [];
  for (const p of ps) {
    if (!MATIERES_PRINCIPALES.includes(p.matiere) || vues.has(p.matiere)) continue;
    vues.add(p.matiere);
    res.push(p.parcours);
  }
  return res;
}

function descriptionChapitre(c) {
  return {
    id: c.id,
    titre: c.titre,
    parcours: c.parcours,
    matiere: c.matiere,
    qcm: aGenerateur(c.id) || (c.nbQuestions ?? c.qcm?.questions?.length ?? 0) > 0,
    exercices: (c.nbExercices ?? 0) > 0,
  };
}

export default function Vacances({ navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { profil, definirReglages } = useProgression();
  const aujourdHui = dateLocale(new Date());
  const plan = planActif(profil?.vacances);

  const enregistrer = (v) => definirReglages({ vacances: v });

  const abandonnerPlan = () => {
    Alert.alert(
      'Arrêter ce programme ?',
      'Ton programme de révisions de vacances et les séances cochées seront effacés.',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Arrêter', style: 'destructive', onPress: () => enregistrer(abandonner(plan)) },
      ],
    );
  };

  const lancerBilan = (s) => {
    const ids = s.chapitres || [];
    const parChapitre = Math.max(2, Math.ceil(TAILLE_BILAN / Math.max(1, ids.length)));
    const questions = melanger(ids.flatMap((id) => {
      try { return construireQuestions(id, parChapitre); } catch { return []; }
    })).slice(0, TAILLE_BILAN);
    if (!questions.length) {
      Alert.alert('QCM indisponible', 'Ces chapitres n’ont pas de questions de QCM : coche la séance quand tu as relu tes fiches.');
      return;
    }
    navigation.navigate('Qcm', { questions, titre: s.titreBilan, matiere: null });
  };

  const ouvrir = (s, ecran) => {
    if (s.type === 'bilan') { lancerBilan(s); return; }
    navigation.navigate(ecran, { id: s.chapitreId, titre: s.titre });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {plan ? (
          <Programme
            t={t}
            plan={plan}
            aujourdHui={aujourdHui}
            onCocher={(s) => enregistrer(basculerSeance(plan, s.id))}
            onOuvrir={ouvrir}
            onAbandonner={abandonnerPlan}
          />
        ) : (
          <NouveauProgramme t={t} profil={profil} aujourdHui={aujourdHui} onCreer={enregistrer} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Le programme en cours ─────────────────────────────────────────────────────

function Programme({ t, plan, aujourdHui, onCocher, onOuvrir, onAbandonner }) {
  const C = t.couleur;
  const etat = etatDuJour(plan, aujourdHui);
  const [voirTout, setVoirTout] = useState(false);
  const semaines = useMemo(() => {
    const m = new Map();
    for (const s of plan.seances) {
      if (!m.has(s.semaine)) m.set(s.semaine, []);
      m.get(s.semaine).push(s);
    }
    return [...m.entries()];
  }, [plan.seances]);
  const p = etat.total ? etat.faites / etat.total : 0;
  const s = etat.aFaire;
  const semaineCourante = (plan.seances.find((x) => x.date >= aujourdHui) ?? plan.seances[plan.seances.length - 1])?.semaine ?? 1;

  return (
    <View>
      <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>
        🏖️ Révision de {LIBELLES_NIVEAU[plan.niveau] ?? plan.niveau ?? 'l’année'}
      </Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4 }}>
        {plan.semaines}{NBSP}semaines · {plan.joursParSemaine}{NBSP}jours par semaine · environ 20{NBSP}min par jour
      </Text>
      <View style={{ height: 8, backgroundColor: C.trait, borderRadius: 4, overflow: 'hidden', marginTop: t.espace.m }}>
        <View style={{ width: `${Math.round(p * 100)}%`, height: '100%', backgroundColor: C.succes }} />
      </View>
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 4 }}>
        Séances faites{NBSP}: {etat.faites}/{etat.total}
      </Text>

      {/* Mise en avant : ce qu'il y a à faire maintenant. */}
      <View style={{ backgroundColor: s ? C.accent : C.succesFond, borderRadius: t.rayon.m, padding: t.espace.m, marginTop: t.espace.m }}>
        {s ? (
          <>
            <Text style={{ color: C.accentTexte, fontSize: t.police.minuscule, fontWeight: '800', letterSpacing: 0.5, opacity: 0.9 }}>
              {s.date === aujourdHui ? 'AUJOURD’HUI' : `EN RETARD · ${dateEnLettres(s.date).toUpperCase()}`}
            </Text>
            <Text style={{ color: C.accentTexte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: 4 }}>
              {iconeSeance(s)} {libelleSeance(s)}
            </Text>
            <BoutonsSeance t={t} s={s} inverse onOuvrir={onOuvrir} />
            {etat.retard > 1 && (
              <Text style={{ color: C.accentTexte, fontSize: t.police.minuscule, marginTop: t.espace.s, opacity: 0.9 }}>
                {etat.retard}{NBSP}séances en retard : rattrape-les à ton rythme, une par jour suffit.
              </Text>
            )}
          </>
        ) : (
          <Text style={{ color: C.succes, fontSize: t.police.normale, fontWeight: '700' }}>
            {etat.termine
              ? 'Programme terminé, bravo ! Bonne rentrée ! 🎉'
              : etat.pasCommence
                ? `Ton programme commence ${dateEnLettres(plan.seances[0].date)}.`
                : etat.duJourFaite
                  ? 'Séance du jour faite, bravo ! 🎉'
                  : `Pas de séance aujourd’hui : repose-toi.${etat.prochaine ? ` Prochaine séance ${dateEnLettres(etat.prochaine.date)}.` : ''}`}
          </Text>
        )}
      </View>

      <Pressable onPress={() => setVoirTout(!voirTout)} accessibilityRole="button" style={{ marginTop: t.espace.m }}>
        <Text style={{ color: C.accent, fontSize: t.police.petite, fontWeight: '700' }}>
          {voirTout ? 'Ne montrer que la semaine en cours' : 'Voir tout le programme'}
        </Text>
      </Pressable>

      {semaines.filter(([n]) => voirTout || n === semaineCourante).map(([n, liste]) => (
        <View key={n} style={{ marginTop: t.espace.m }}>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, fontWeight: '800', letterSpacing: 0.5 }}>
            SEMAINE {n}
          </Text>
          {liste.map((x) => (
            <LigneSeance key={x.id} t={t} s={x} fait={!!plan.faites?.[x.id]} progres={plan.progres?.[x.id] || 0} aujourdHui={aujourdHui} onCocher={() => onCocher(x)} onOuvrir={onOuvrir} />
          ))}
        </View>
      ))}

      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, lineHeight: 17, marginTop: t.espace.l }}>
        Une séance se coche toute seule quand tu termines le QCM du chapitre (ou du bilan), ou après 3{NBSP}exercices réussis les jours « exercices ». Tu peux aussi la cocher toi-même.
      </Text>
      <Pressable onPress={onAbandonner} accessibilityRole="button" style={{ alignSelf: 'flex-start', marginTop: t.espace.l }} hitSlop={8}>
        <Text style={{ color: C.erreur, fontSize: t.police.petite, fontWeight: '700' }}>🗑️ Arrêter ce programme</Text>
      </Pressable>
    </View>
  );
}

function BoutonsSeance({ t, s, inverse, onOuvrir }) {
  const C = t.couleur;
  const boutons = s.type === 'bilan'
    ? [['Lancer le bilan', null]]
    : s.activite === 'exercices'
      ? [[s.revision ? null : 'Fiche', 'Chapitre'], ['Exercices', 'Exercices']]
      : s.activite === 'qcm'
        ? [[s.revision ? null : 'Fiche', 'Chapitre'], ['QCM', 'Qcm']]
        : [['Fiche', 'Chapitre'], ['Cartes', 'Flashcards']];
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: t.espace.s }}>
      {boutons.filter(([l]) => l).map(([libelle, ecran]) => (
        <Pressable
          key={libelle}
          onPress={() => onOuvrir(s, ecran)}
          accessibilityRole="button"
          style={({ pressed }) => ({
            backgroundColor: inverse ? C.accentTexte : 'transparent', borderWidth: inverse ? 0 : 1, borderColor: C.accent,
            borderRadius: t.rayon.s, paddingHorizontal: 14, paddingVertical: 7, opacity: pressed ? 0.7 : 1,
          })}
        >
          <Text style={{ color: C.accent, fontWeight: '700', fontSize: t.police.petite }}>{libelle} ›</Text>
        </Pressable>
      ))}
    </View>
  );
}

function LigneSeance({ t, s, fait, progres, aujourdHui, onCocher, onOuvrir }) {
  const C = t.couleur;
  const libelle = libelleSeance(s);
  const duJour = s.date === aujourdHui;
  const couleur = s.type === 'bilan' ? C.accent : couleurMatiere(t, s.matiere);
  return (
    <View style={{
      flexDirection: 'row', alignItems: 'flex-start', marginTop: 6, padding: t.espace.s, borderRadius: t.rayon.s,
      borderWidth: 1, borderColor: duJour ? C.accent : C.trait, borderLeftWidth: 4, borderLeftColor: couleur,
      backgroundColor: fait ? C.succesFond : C.surface, opacity: s.date < aujourdHui && !fait ? 0.85 : 1,
    }}>
      <Pressable
        onPress={onCocher}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: fait }}
        accessibilityLabel={`Fait : ${libelle}`}
        hitSlop={8}
        style={{ width: 26, height: 26, borderRadius: 6, borderWidth: 2, borderColor: fait ? C.succes : C.attenue, backgroundColor: fait ? C.succes : 'transparent', alignItems: 'center', justifyContent: 'center', marginRight: t.espace.s, marginTop: 1 }}
      >
        {fait && <Text style={{ color: '#fff', fontWeight: '900', fontSize: 15, lineHeight: 18 }}>✓</Text>}
      </Pressable>
      <View style={{ flex: 1 }}>
        <Text style={{ color: duJour ? C.accent : C.attenue, fontSize: t.police.minuscule, fontWeight: '700' }}>
          {majuscule(dateEnLettres(s.date))}{duJour ? ' · aujourd’hui' : ''} · {s.minutes}{NBSP}min
          {s.activite === 'exercices' && !fait && progres > 0 ? ` · ${progres}/3 exercices` : ''}
        </Text>
        <Text style={{ color: C.texte, fontSize: t.police.normale, fontWeight: '600', marginTop: 2, textDecorationLine: fait ? 'line-through' : 'none' }}>
          {iconeSeance(s)} {libelle}
        </Text>
        {!fait && <BoutonsSeance t={t} s={s} onOuvrir={onOuvrir} />}
      </View>
    </View>
  );
}

// ── Création : classe → matières → durée → rythme → début ─────────────────────

function NouveauProgramme({ t, profil, aujourdHui, onCreer }) {
  const C = t.couleur;
  const classes = useMemo(() => niveaux().map((n) => ({ id: n, nom: LIBELLES_NIVEAU[n] ?? n })), []);
  const actuel = profil?.niveauParDefaut ?? null;
  const propose = niveauPrecedent(actuel) ?? (classes.some((c) => c.id === actuel) ? actuel : null);
  const [classe, setClasse] = useState(propose);
  const [choix, setChoix] = useState(() => (propose ? parcoursParDefaut(propose) : []));
  const [semaines, setSemaines] = useState(4);
  const [rythme, setRythme] = useState(5);
  const debuts = useMemo(() => {
    const d = new Date(`${aujourdHui}T12:00:00Z`);
    const versLundi = ((8 - d.getUTCDay()) % 7) || 7;
    const lundi = ajouterJours(aujourdHui, versLundi);
    const liste = [{ date: aujourdHui, libelle: 'Aujourd’hui' }, { date: ajouterJours(aujourdHui, 1), libelle: 'Demain' }];
    if (versLundi > 1) liste.push({ date: lundi, libelle: majuscule(dateEnLettres(lundi)) });
    return liste;
  }, [aujourdHui]);
  const [debut, setDebut] = useState(aujourdHui);

  const parcours = useMemo(() => (classe ? parcoursDe(classe) : []), [classe]);
  const choisirClasse = (n) => { setClasse(n); setChoix(parcoursParDefaut(n)); };
  const basculer = (p) => setChoix(choix.includes(p) ? choix.filter((x) => x !== p) : [...choix, p]);

  const nbSeances = semaines * rythme;
  const nbBilans = datesSeances(aujourdHui, semaines, rythme).filter((d) => estSeanceBilan(d, semaines, rythme)).length;
  const pret = classe && choix.length > 0;

  const creer = () => {
    if (!pret) return;
    const chapitres = CHAPITRES.filter((c) => c.niveau === classe && choix.includes(c.parcours)).map(descriptionChapitre);
    try {
      onCreer(creerPlanVacances({ niveau: classe, semaines, joursParSemaine: rythme, chapitres, debut }));
    } catch (e) {
      Alert.alert('Programme impossible', e?.message || 'Le programme n’a pas pu être créé.');
    }
  };

  const chip = (on) => ({ borderWidth: 1, borderColor: on ? C.accent : C.trait, backgroundColor: on ? C.accent : 'transparent', borderRadius: t.rayon.m, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, marginBottom: 8 });
  const chipTxt = (on) => ({ color: on ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.petite });
  const etape = { color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginTop: t.espace.m, marginBottom: 8 };

  return (
    <View>
      <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>🏖️ Révisions de vacances</Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, lineHeight: 19, marginTop: 4 }}>
        Revois l’année passée en douceur : environ 20{NBSP}minutes par jour, un chapitre à la fois, et un bilan régulier.
      </Text>

      <Text style={etape}>1. LA CLASSE À REVOIR</Text>
      {actuel && propose && propose !== actuel && (
        <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginBottom: 8 }}>
          Ton profil indique {LIBELLES_NIVEAU[actuel] ?? actuel} : on te propose de revoir la classe d’avant. Change si besoin.
        </Text>
      )}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {classes.map((c) => (
          <Pressable key={c.id} onPress={() => choisirClasse(c.id)} style={chip(classe === c.id)} accessibilityRole="button" accessibilityState={{ selected: classe === c.id }}>
            <Text style={chipTxt(classe === c.id)}>{c.nom}</Text>
          </Pressable>
        ))}
      </View>

      {classe && (
        <>
          <Text style={etape}>2. LES MATIÈRES ({choix.length})</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginBottom: 8 }}>
            Les matières principales sont cochées ; les maths et le français ont le plus de séances.
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {parcours.map((p) => {
              const on = choix.includes(p.parcours);
              return (
                <Pressable key={p.parcours} onPress={() => basculer(p.parcours)} style={chip(on)} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
                  <Text style={chipTxt(on)}>{on ? '✓ ' : ''}{LIBELLES_PARCOURS[p.parcours] ?? p.parcours}</Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={etape}>3. LA DURÉE</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {DUREES.map((d) => (
              <Pressable key={d} onPress={() => setSemaines(d)} style={chip(semaines === d)} accessibilityRole="button" accessibilityState={{ selected: semaines === d }}>
                <Text style={chipTxt(semaines === d)}>{d}{NBSP}semaines</Text>
              </Pressable>
            ))}
          </View>

          <Text style={etape}>4. JOURS DE RÉVISION PAR SEMAINE</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {RYTHMES.map((r) => (
              <Pressable key={r} onPress={() => setRythme(r)} style={chip(rythme === r)} accessibilityRole="button" accessibilityState={{ selected: rythme === r }}>
                <Text style={chipTxt(rythme === r)}>{r === 7 ? 'Tous les jours' : `${r}${NBSP}jours`}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={etape}>5. LE DÉBUT</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {debuts.map((d) => (
              <Pressable key={d.libelle} onPress={() => setDebut(d.date)} style={chip(debut === d.date)} accessibilityRole="button" accessibilityState={{ selected: debut === d.date }}>
                <Text style={chipTxt(debut === d.date)}>{d.libelle}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={{ color: C.texte, fontSize: t.police.petite, lineHeight: 19, marginTop: t.espace.s }}>
            {`${nbSeances}${NBSP}séances d’environ 20${NBSP}minutes : ${nbSeances - nbBilans}${NBSP}chapitres et ${nbBilans}${NBSP}bilan${nbBilans > 1 ? 's' : ''}.`}
          </Text>
        </>
      )}

      <Pressable
        onPress={creer}
        disabled={!pret}
        accessibilityRole="button"
        style={({ pressed }) => ({ backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 12, paddingHorizontal: 16, alignItems: 'center', marginTop: t.espace.m, opacity: !pret ? 0.5 : (pressed ? 0.75 : 1) })}
      >
        <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne }}>
          {pret ? 'Créer mon programme' : (classe ? 'Choisis au moins une matière' : 'Choisis la classe à revoir')}
        </Text>
      </Pressable>
    </View>
  );
}
