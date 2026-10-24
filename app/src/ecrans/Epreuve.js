/**
 * Passer l'épreuve — un sujet type bac / brevet en conditions réelles.
 *
 * 1. Accueil : durée (celle écrite dans le sujet, sinon durée officielle, sinon
 *    l'élève choisit), barème, conseils, historique de ce sujet.
 * 2. Épreuve : énoncé seul (pas de corrigé), compte à rebours, pause (l'énoncé
 *    est masqué pendant la pause), « J'ai fini ». Fin automatique au temps.
 *    L'épreuve en cours est gardée sur l'appareil : on peut fermer l'appli et reprendre.
 * 3. Correction : l'appli ne peut pas corriger une copie rédigée. Elle montre le
 *    corrigé partie par partie (question par question quand c'est possible) et
 *    l'élève coche « Réussi / À moitié / Raté ».
 * 4. Résultat : note sur 20 calculée avec le barème du sujet (ou estimation
 *    annoncée), XP, historique `profil.epreuves` (30 au plus).
 *
 * Logique : lib/epreuve (testée).
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../useTheme';
import { Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { useProgression } from '../progression/Contexte';
import { SUJETS, LIBELLES_NIVEAU, LIBELLES_MATIERE } from '../contenu-index';
import { estRelu } from '../../lib/relecture';
import { useSujet } from '../useContenu';
import EtatChargement from '../composants/EtatChargement';
import { dateLocale } from '../../lib/serie';
import {
  analyserSujet, calculerNote, NIVEAUX, nombreFr,
  demarrerChrono, mettreEnPause, reprendre, tempsEcoule, tempsRestant, enPause,
  formaterChrono, formaterDuree, phaseChrono,
} from '../../lib/epreuve';

const CLE_EN_COURS = 'kamal-campus:epreuve-en-cours';
const DUREES_AU_CHOIX = [30, 60, 90, 120, 180, 210, 240];
const NBSP = ' ';

const MESSAGES_BAREME = {
  sujet: 'Barème : celui du sujet.',
  partiel: 'Barème du sujet pour chaque exercice. Quand le sujet ne détaille pas les points des questions, '
    + 'ceux de l’exercice sont répartis à parts égales entre ses questions : la note est alors une estimation.',
  estime: 'Ce sujet ne donne pas de barème détaillé : chaque partie du corrigé compte autant. '
    + 'La note sur 20 est une estimation.',
};

async function lireEnCours() {
  try {
    const t = await AsyncStorage.getItem(CLE_EN_COURS);
    return t ? JSON.parse(t) : null;
  } catch { return null; }
}
async function ecrireEnCours(v) {
  try {
    if (v) await AsyncStorage.setItem(CLE_EN_COURS, JSON.stringify(v));
    else await AsyncStorage.removeItem(CLE_EN_COURS);
  } catch { /* stockage indisponible : l'épreuve continue sans sauvegarde */ }
}

export default function Epreuve({ route, navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { profil, enregistrerEpreuve } = useProgression();
  const sujetId = route?.params?.id;
  const infoSujet = useMemo(() => (SUJETS || []).find((s) => s.id === sujetId) || null, [sujetId]);
  // Le texte du sujet est chargé à la demande (il n'est pas dans l'index).
  const texteSujet = useSujet(infoSujet ? sujetId : null);
  const sujet = useMemo(
    () => (infoSujet && texteSujet.donnee ? { ...infoSujet, contenu: texteSujet.donnee } : null),
    [infoSujet, texteSujet.donnee],
  );
  const analyse = useMemo(() => (sujet ? analyserSujet(sujet) : null), [sujet]);

  const [phase, setPhase] = useState('accueil'); // accueil | epreuve | correction | resultat
  const [dureeChoisie, setDureeChoisie] = useState(null);
  const [chrono, setChrono] = useState(null);
  const [maintenant, setMaintenant] = useState(Date.now());
  const [reponses, setReponses] = useState({});
  const [raison, setRaison] = useState(null); // 'rendu' | 'temps'
  const [idEpreuve, setIdEpreuve] = useState(null);
  const [page, setPage] = useState(0);
  const [corrigeComplet, setCorrigeComplet] = useState(false);
  const [enonceOuvert, setEnonceOuvert] = useState({});
  const [enCours, setEnCours] = useState(null); // épreuve sauvegardée (pour « Reprendre »)
  const [bilan, setBilan] = useState(null);
  const defilement = useRef(null);

  const dureeMin = analyse?.duree.minutes ?? dureeChoisie;
  const dureeMs = (dureeMin || 0) * 60 * 1000;

  // Épreuve en cours sauvegardée ?
  useEffect(() => {
    let vivant = true;
    lireEnCours().then((v) => { if (vivant) setEnCours(v); });
    return () => { vivant = false; };
  }, []);

  // Sauvegarde continue pendant l'épreuve et la correction.
  useEffect(() => {
    if ((phase === 'epreuve' || phase === 'correction') && idEpreuve) {
      ecrireEnCours({ sujetId, titre: sujet?.titre, id: idEpreuve, phase, chrono, dureeMin, reponses, raison });
    }
  }, [phase, chrono, reponses, raison, idEpreuve, dureeMin, sujetId, sujet]);

  // Tic-tac (l'heure sert de référence : fiable même si l'onglet dort).
  useEffect(() => {
    if (phase !== 'epreuve') return undefined;
    const id = setInterval(() => setMaintenant(Date.now()), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const restant = chrono ? tempsRestant(chrono, dureeMs, maintenant) : dureeMs;
  useEffect(() => {
    if (phase === 'epreuve' && chrono && dureeMs > 0 && restant <= 0) {
      setChrono((c) => mettreEnPause(c, Date.now()));
      setRaison('temps');
      setPhase('correction');
      setPage(0);
    }
  }, [phase, chrono, restant, dureeMs]);

  useEffect(() => { defilement.current?.scrollTo?.({ y: 0, animated: false }); }, [phase, page]);

  if (infoSujet && texteSujet.etat !== 'ok') {
    return <EtatChargement t={t} etat={texteSujet.etat} quoi="le sujet" recharger={texteSujet.recharger} />;
  }

  if (!sujet || !analyse) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }}>
        <Text style={{ color: C.texte, padding: t.espace.l }}>Sujet introuvable.</Text>
      </SafeAreaView>
    );
  }

  const historiqueSujet = (profil?.epreuves || []).filter((e) => e && e.sujetId === sujet.id);
  const parties = analyse.parties;
  const note = calculerNote(analyse.criteres, reponses);

  // ── Actions ────────────────────────────────────────────────────────────────
  const commencer = () => {
    const debut = Date.now();
    setIdEpreuve(`${sujet.id}-${debut}`);
    setChrono(demarrerChrono(debut));
    setMaintenant(debut);
    setReponses({});
    setRaison(null);
    setPage(0);
    setBilan(null);
    setCorrigeComplet(false);
    setPhase('epreuve');
  };

  const reprendreSauvegarde = () => {
    const v = enCours;
    if (!v) return;
    if (!analyse.duree.minutes && v.dureeMin) setDureeChoisie(v.dureeMin);
    setIdEpreuve(v.id);
    setChrono(v.chrono);
    setReponses(v.reponses || {});
    setRaison(v.raison || null);
    setMaintenant(Date.now());
    setPage(0);
    setPhase(v.phase === 'correction' ? 'correction' : 'epreuve');
  };

  const basculerPause = () => {
    const n = Date.now();
    setMaintenant(n);
    setChrono((c) => (enPause(c) ? reprendre(c, n) : mettreEnPause(c, n)));
  };

  const finir = () => {
    Alert.alert(
      'Tu as fini ?',
      'Le chrono s’arrête et le corrigé s’affiche. Tu ne pourras plus revenir à l’épreuve.',
      [
        { text: 'Continuer l’épreuve', style: 'cancel' },
        {
          text: 'J’ai fini',
          onPress: () => {
            setChrono((c) => mettreEnPause(c, Date.now()));
            setRaison('rendu');
            setPage(0);
            setPhase('correction');
          },
        },
      ],
    );
  };

  const abandonner = () => {
    Alert.alert(
      'Abandonner l’épreuve ?',
      'Elle ne sera pas enregistrée.',
      [
        { text: 'Continuer', style: 'cancel' },
        {
          text: 'Abandonner',
          style: 'destructive',
          onPress: () => { ecrireEnCours(null); setEnCours(null); setChrono(null); setPhase('accueil'); },
        },
      ],
    );
  };

  const coter = (id, niveau) => setReponses((r) => ({ ...r, [id]: niveau }));

  const calculer = () => {
    const tempsMs = tempsEcoule(chrono, Date.now());
    const entree = {
      id: idEpreuve,
      sujetId: sujet.id,
      titre: sujet.titre,
      examen: sujet.examen || '',
      matiere: sujet.matiere,
      date: dateLocale(new Date()),
      fin: Date.now(),
      note20: note.note20,
      points: note.points,
      total: note.total,
      bareme: analyse.bareme,
      dureeMin,
      tempsMin: Math.round(tempsMs / 60000),
      raison,
    };
    let res = { points: 0 };
    try { res = enregistrerEpreuve({ entree, tempsMs, dureeMs }) || res; } catch { /* la note s'affiche quand même */ }
    ecrireEnCours(null);
    setEnCours(null);
    setBilan({ ...entree, xp: res.points ?? 0, meilleureAvant: res.meilleureAvant ?? null, tempsMs });
    setPhase('resultat');
  };

  // ── Rendu commun ───────────────────────────────────────────────────────────
  const texte = (s, style) => <Text style={[{ color: C.texte, fontSize: t.police.normale, lineHeight: 22 }, style]}>{s}</Text>;
  const conteneur = (contenu, haut = null) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      {haut}
      <ScrollView ref={defilement} contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {contenu}
      </ScrollView>
    </SafeAreaView>
  );
  const sousTitre = `${sujet.examen || (LIBELLES_NIVEAU[sujet.niveau] ?? sujet.niveau)} · ${LIBELLES_MATIERE[sujet.matiere] ?? sujet.matiere}`;

  // ── 1. Accueil ─────────────────────────────────────────────────────────────
  if (phase === 'accueil') {
    const enCoursIci = enCours && enCours.sujetId === sujet.id;
    const enCoursAilleurs = enCours && enCours.sujetId !== sujet.id;
    return conteneur(
      <>
        <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>{sujet.titre}</Text>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4 }}>{sousTitre}</Text>

        {!estRelu(sujet) && (
          <View style={{ marginTop: t.espace.m }}>
            <Bandeau t={t} texte={'⚠️ Sujet et corrigé non relus par un professeur. À vérifier avant de t’y fier.'} />
          </View>
        )}

        <Bloc t={t} titre="⏱️ Durée">
          {analyse.duree.minutes ? (
            texte(`${formaterDuree(analyse.duree.minutes)}${analyse.duree.source === 'sujet' ? ' (durée indiquée dans le sujet)' : ' (durée officielle de l’épreuve)'}.`)
          ) : (
            <>
              {texte('Le sujet n’indique pas de durée. Choisis-la :')}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                {DUREES_AU_CHOIX.map((m) => (
                  <Puce key={m} t={t} texte={formaterDuree(m)} actif={dureeChoisie === m} onPress={() => setDureeChoisie(m)} />
                ))}
              </View>
            </>
          )}
        </Bloc>

        <Bloc t={t} titre="📊 Notation">
          {analyse.aCorrige ? (
            <>
              {texte(`À la fin, tu compares ta copie au corrigé et tu coches pour chaque ${parties.some((p) => p.questions) ? 'question ou partie' : 'partie'} : Réussi, À moitié ou Raté. L’appli calcule ta note sur 20.`)}
              {texte(MESSAGES_BAREME[analyse.bareme], { color: C.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 })}
              {texte(`${parties.length}${NBSP}partie${parties.length > 1 ? 's' : ''} · ${analyse.criteres.length}${NBSP}élément${analyse.criteres.length > 1 ? 's' : ''} à évaluer · total ${nombreFr(analyse.total, 2)}${NBSP}points`, { color: C.attenue, fontSize: t.police.petite, marginTop: 6 })}
            </>
          ) : (
            texte('⚠️ Ce sujet n’a pas de corrigé : tu peux le passer chronométré, mais l’auto-évaluation et la note sur 20 sont impossibles.')
          )}
        </Bloc>

        <Bloc t={t} titre="✍️ Comme le jour J">
          {texte('Prépare une copie, du brouillon, un stylo (et la calculatrice si le sujet l’autorise). Rédige sur papier : l’appli ne lit pas ta copie. Le corrigé reste caché jusqu’à la fin.', { fontSize: t.police.petite, lineHeight: 20 })}
        </Bloc>

        {enCoursAilleurs && (
          <View style={{ marginTop: t.espace.m }}>
            <Bandeau t={t} texte={`Une autre épreuve est en cours (${enCours.titre || 'autre sujet'}). En commencer une nouvelle l’effacera.`} />
          </View>
        )}

        {enCoursIci && (
          <Bouton
            t={t}
            texte={`▶️ Reprendre mon épreuve (${formaterChrono(tempsEcoule(enCours.chrono, Date.now()))} écoulées)`}
            onPress={reprendreSauvegarde}
            style={{ marginTop: t.espace.l }}
          />
        )}
        <Bouton
          t={t}
          texte={enCoursIci ? 'Recommencer à zéro' : '▶️ Commencer l’épreuve'}
          variante={enCoursIci ? 'contour' : 'plein'}
          desactive={!dureeMin}
          onPress={commencer}
          style={{ marginTop: enCoursIci ? t.espace.s : t.espace.l }}
        />

        <Historique t={t} liste={historiqueSujet} titre="Mes essais sur ce sujet" />
        <Historique t={t} liste={(profil?.epreuves || []).filter((e) => e && e.sujetId !== sujet.id).slice(0, 5)} titre="Mes autres épreuves" avecTitre />
      </>,
    );
  }

  // ── 2. Épreuve ─────────────────────────────────────────────────────────────
  if (phase === 'epreuve') {
    const pause = enPause(chrono);
    const ph = phaseChrono(restant, dureeMs);
    const couleurChrono = ph === 'fin' ? C.erreur : ph === 'bientot' ? '#b7791f' : C.texte;
    const barre = (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: t.espace.l, paddingVertical: 10, borderBottomWidth: 1, borderColor: C.trait, backgroundColor: C.surface }}>
        <View style={{ flex: 1 }} accessibilityLiveRegion="polite">
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>{pause ? 'En pause' : 'Temps restant'}</Text>
          <Text style={{ color: couleurChrono, fontSize: t.police.grande, fontWeight: '800', fontVariant: ['tabular-nums'] }}>{formaterChrono(restant)}</Text>
        </View>
        <Bouton t={t} texte={pause ? '▶️ Reprendre' : '⏸️ Pause'} variante="contour" onPress={basculerPause} />
        <Bouton t={t} texte="✅ J'ai fini" onPress={finir} />
      </View>
    );
    if (pause) {
      return conteneur(
        <View style={{ alignItems: 'center', paddingVertical: t.espace.xl }}>
          <Text style={{ fontSize: 44 }}>⏸️</Text>
          <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: t.espace.s }}>Épreuve en pause</Text>
          {texte('Le chrono est arrêté et le sujet est masqué. Le jour de l’examen, il n’y a pas de pause : garde-la pour un vrai imprévu.', { textAlign: 'center', color: C.attenue, fontSize: t.police.petite, marginTop: t.espace.s })}
          <Bouton t={t} texte="▶️ Reprendre l'épreuve" onPress={basculerPause} style={{ marginTop: t.espace.l, alignSelf: 'stretch' }} />
          <Pressable onPress={abandonner} accessibilityRole="button" style={{ marginTop: t.espace.l, padding: 8 }}>
            <Text style={{ color: C.attenue, fontSize: t.police.petite, textDecorationLine: 'underline' }}>Abandonner l'épreuve</Text>
          </Pressable>
        </View>,
        barre,
      );
    }
    return conteneur(
      <>
        <VisionneuseFiche markdown={analyse.enonce} />
        <Bouton t={t} texte="✅ J'ai fini : voir le corrigé" onPress={finir} style={{ marginTop: t.espace.l }} />
      </>,
      barre,
    );
  }

  // ── 3. Correction (auto-évaluation) ────────────────────────────────────────
  const tempsUtilise = chrono ? tempsEcoule(chrono, maintenant) : 0;
  if (phase === 'correction' || phase === 'relecture') {
    const lecture = phase === 'relecture';
    if (!analyse.aCorrige) {
      return conteneur(
        <>
          {raison === 'temps' && <Bandeau t={t} texte="⏰ Temps écoulé : pose ton stylo." />}
          {texte(`Temps utilisé : ${formaterDuree(tempsUtilise / 60000)} sur ${formaterDuree(dureeMin)}.`, { marginTop: t.espace.m })}
          {texte('Ce sujet n’a pas de corrigé : l’auto-évaluation est impossible. Montre ta copie à ton professeur.', { marginTop: t.espace.m })}
          <Bouton t={t} texte="Terminer" onPress={() => { ecrireEnCours(null); navigation.goBack(); }} style={{ marginTop: t.espace.l }} />
        </>,
      );
    }
    const p = parties[Math.min(page, parties.length - 1)];
    const idsPartie = (pt) => (pt.questions ? pt.questions.map((q) => q.id) : [pt.id]);
    const partieFaite = (pt) => idsPartie(pt).every((id) => reponses[id]);
    const sansCorrigePropre = parties.every((pt) => !pt.corrige && !pt.questions);
    const derniere = page >= parties.length - 1;
    return conteneur(
      <>
        {raison === 'temps' && !lecture && <Bandeau t={t} texte="⏰ Temps écoulé : pose ton stylo." />}
        {texte(`Temps utilisé : ${formaterDuree(tempsUtilise / 60000)} sur ${formaterDuree(dureeMin)}. Compare ta copie au corrigé et coche honnêtement : c’est ta note qui en dépend.`, { fontSize: t.police.petite, color: C.attenue, marginTop: raison === 'temps' ? t.espace.s : 0, lineHeight: 19 })}

        {/* Sommaire des parties */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: t.espace.m }}>
          {parties.map((pt, i) => (
            <Puce key={pt.id} t={t} texte={`${partieFaite(pt) ? '✓ ' : ''}${i + 1}`} actif={i === page} onPress={() => setPage(i)} a11y={`Partie ${i + 1} : ${pt.titre}`} />
          ))}
        </View>

        <Pressable onPress={() => setCorrigeComplet((v) => !v)} accessibilityRole="button" style={{ marginTop: t.espace.m, paddingVertical: 6 }}>
          <Text style={{ color: C.accent, fontWeight: '700' }}>{(corrigeComplet || sansCorrigePropre) ? '▾' : '▸'} Corrigé complet</Text>
        </Pressable>
        {(corrigeComplet || sansCorrigePropre) && (
          <View style={{ borderWidth: 1, borderColor: C.trait, borderRadius: t.rayon.m, marginBottom: t.espace.m }}>
            <VisionneuseFiche markdown={analyse.corrige} />
          </View>
        )}

        <View style={{ marginTop: t.espace.s, padding: t.espace.m, borderRadius: t.rayon.m, backgroundColor: C.surface, borderWidth: 1, borderColor: C.trait }}>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>{p.id.startsWith('c') ? 'Critère' : 'Partie'} {page + 1} / {parties.length}</Text>
          <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '800', marginTop: 2 }}>{p.titre}</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
            {nombreFr(p.points, 2)}{NBSP}point{p.points >= 2 ? 's' : ''}{analyse.bareme === 'estime' ? ' (estimation)' : ''}
            {p.repartitionEstimee ? ' · points des questions estimés (parts égales)' : ''}
          </Text>

          {p.enonce ? (
            <>
              <Pressable onPress={() => setEnonceOuvert((o) => ({ ...o, [p.id]: !o[p.id] }))} accessibilityRole="button" style={{ marginTop: t.espace.s, paddingVertical: 4 }}>
                <Text style={{ color: C.accent, fontSize: t.police.petite, fontWeight: '700' }}>{enonceOuvert[p.id] ? '▾' : '▸'} Revoir l'énoncé de cette partie</Text>
              </Pressable>
              {enonceOuvert[p.id] && <VisionneuseFiche markdown={p.enonce} />}
            </>
          ) : null}
        </View>

        {p.questions ? (
          <>
            {p.introCorrige ? <VisionneuseFiche markdown={p.introCorrige} /> : null}
            {p.questions.map((q) => (
              <View key={q.id} style={{ marginTop: t.espace.m, borderTopWidth: 1, borderColor: C.trait, paddingTop: t.espace.s }}>
                <Text style={{ color: C.texte, fontWeight: '800' }}>{q.libelle} · {nombreFr(q.points, 2)}{NBSP}pt{q.points >= 2 ? 's' : ''}</Text>
                <VisionneuseFiche markdown={q.corrige} />
                <ChoixNiveau t={t} valeur={reponses[q.id]} onChoix={lecture ? null : (n) => coter(q.id, n)} libelle={q.libelle} />
              </View>
            ))}
          </>
        ) : (
          <View style={{ marginTop: t.espace.m }}>
            {p.corrige ? (
              <VisionneuseFiche markdown={p.corrige} />
            ) : (
              texte(sansCorrigePropre
                ? 'Relis le corrigé complet ci-dessus, puis évalue ce critère.'
                : 'Le corrigé ne traite pas cette partie à part : appuie-toi sur le corrigé complet (ci-dessus).', { color: C.attenue, fontSize: t.police.petite })
            )}
            <ChoixNiveau t={t} valeur={reponses[p.id]} onChoix={lecture ? null : (n) => coter(p.id, n)} libelle={p.titre} />
          </View>
        )}

        <View style={{ flexDirection: 'row', gap: 8, marginTop: t.espace.l }}>
          <Bouton t={t} texte="‹ Précédente" variante="contour" desactive={page === 0} onPress={() => setPage((x) => Math.max(0, x - 1))} style={{ flex: 1 }} />
          {!derniere && <Bouton t={t} texte="Suivante ›" onPress={() => setPage((x) => x + 1)} style={{ flex: 1 }} />}
        </View>

        {lecture ? (
          <Bouton t={t} texte="‹ Retour à ma note" onPress={() => setPhase('resultat')} style={{ marginTop: t.espace.l }} />
        ) : (
        <View style={{ marginTop: t.espace.l, padding: t.espace.m, borderRadius: t.rayon.m, backgroundColor: C.surface }}>
          <Text style={{ color: C.texte, fontWeight: '700' }}>
            {note.coches} / {analyse.criteres.length} évalué{analyse.criteres.length > 1 ? 's' : ''}
          </Text>
          {note.complet ? (
            <Bouton t={t} texte="🎯 Calculer ma note" variante="succes" onPress={calculer} style={{ marginTop: t.espace.s }} />
          ) : (
            <>
              {texte(`Il reste ${note.manquants} ${note.manquants > 1 ? 'éléments' : 'élément'} à cocher.`, { color: C.attenue, fontSize: t.police.petite, marginTop: 4 })}
              <Bouton
                t={t}
                texte="Aller au prochain élément à cocher"
                variante="contour"
                onPress={() => {
                  const i = parties.findIndex((pt) => !partieFaite(pt));
                  if (i >= 0) setPage(i);
                }}
                style={{ marginTop: t.espace.s }}
              />
            </>
          )}
        </View>
        )}
      </>,
    );
  }

  // ── 4. Résultat ────────────────────────────────────────────────────────────
  const b = bilan;
  return conteneur(
    <>
      <View style={{ alignItems: 'center', paddingVertical: t.espace.m }}>
        <Text style={{ color: C.attenue, fontSize: t.police.petite }}>{analyse.bareme === 'sujet' ? 'Ta note' : 'Ta note (estimation)'}</Text>
        <Text style={{ color: b.note20 >= 10 ? C.succes : C.erreur, fontSize: 52, fontWeight: '900' }} accessibilityLabel={`${nombreFr(b.note20)} sur 20`}>
          {nombreFr(b.note20)}<Text style={{ fontSize: t.police.grande, color: C.attenue }}> / 20</Text>
        </Text>
        {b.total !== 20 && texte(`${nombreFr(b.points, 2)} / ${nombreFr(b.total, 2)} points au barème du sujet`, { color: C.attenue, fontSize: t.police.petite })}
        {texte(`Temps utilisé : ${formaterDuree(b.tempsMs / 60000)} sur ${formaterDuree(b.dureeMin)}${b.raison === 'temps' ? ' (temps écoulé)' : ''}`, { color: C.attenue, fontSize: t.police.petite, marginTop: 4 })}
        {texte(b.xp > 0 ? `+${b.xp} XP` : (b.tempsMs < dureeMs / 4
          ? 'Pas d’XP : épreuve terminée en moins d’un quart du temps.'
          : (b.meilleureAvant != null ? `Pas d’XP cette fois : ta meilleure note sur ce sujet est ${nombreFr(b.meilleureAvant)}/20.` : '')),
        { color: b.xp > 0 ? C.accent : C.attenue, fontWeight: b.xp > 0 ? '800' : '400', fontSize: b.xp > 0 ? t.police.moyenne : t.police.petite, marginTop: 6, textAlign: 'center' })}
      </View>

      {analyse.bareme !== 'sujet' && <Bandeau t={t} texte={MESSAGES_BAREME[analyse.bareme]} />}

      <Bloc t={t} titre="Détail">
        {parties.map((pt) => {
          const ids = pt.questions ? pt.questions.map((q) => ({ id: q.id, points: q.points })) : [{ id: pt.id, points: pt.points }];
          const obtenu = ids.reduce((s, x) => s + x.points * (NIVEAUX[reponses[x.id]]?.coef ?? 0), 0);
          return (
            <View key={pt.id} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 1, borderColor: C.trait, gap: 8 }}>
              <Text style={{ color: C.texte, flex: 1, fontSize: t.police.petite }}>{pt.titre}</Text>
              <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.petite }}>{nombreFr(obtenu, 2)} / {nombreFr(pt.points, 2)}</Text>
            </View>
          );
        })}
      </Bloc>

      <Bouton t={t} texte="Revoir le corrigé" variante="contour" onPress={() => { setPage(0); setCorrigeComplet(true); setPhase('relecture'); }} style={{ marginTop: t.espace.l }} />
      <Bouton t={t} texte="🔁 Repasser cette épreuve" variante="contour" onPress={() => setPhase('accueil')} style={{ marginTop: t.espace.s }} />
      <Bouton t={t} texte="‹ Retour aux sujets" onPress={() => navigation.goBack()} style={{ marginTop: t.espace.s }} />

      <Historique t={t} liste={(profil?.epreuves || []).slice(0, 8)} titre="Mes dernières épreuves" avecTitre />
    </>,
  );
}

// ── Petits composants ────────────────────────────────────────────────────────

function Bloc({ t, titre, children }) {
  return (
    <View style={{ marginTop: t.espace.m, padding: t.espace.m, borderRadius: t.rayon.m, backgroundColor: t.couleur.surface, borderWidth: 1, borderColor: t.couleur.trait }}>
      <Text style={{ color: t.couleur.texte, fontWeight: '800', marginBottom: 6 }}>{titre}</Text>
      {children}
    </View>
  );
}

function Puce({ t, texte, actif, onPress, a11y }) {
  const C = t.couleur;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={a11y ?? texte}
      accessibilityState={{ selected: !!actif }}
      style={({ pressed }) => ({
        minHeight: 36, minWidth: 40, paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center',
        borderRadius: 18, borderWidth: 1, borderColor: actif ? C.accent : C.trait,
        backgroundColor: actif ? C.accent : C.fond, opacity: pressed ? 0.75 : 1,
      })}
    >
      <Text style={{ color: actif ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.petite }}>{texte}</Text>
    </Pressable>
  );
}

function ChoixNiveau({ t, valeur, onChoix, libelle }) {
  const C = t.couleur;
  const couleurs = {
    reussi: { fond: C.succesFond, trait: C.succes },
    moitie: { fond: C.surface, trait: '#b7791f' },
    rate: { fond: C.erreurFond, trait: C.erreur },
  };
  return (
    <View style={{ flexDirection: 'row', gap: 6, marginTop: t.espace.s }}>
      {Object.entries(NIVEAUX).map(([cle, n]) => {
        const actif = valeur === cle;
        return (
          <Pressable
            key={cle}
            onPress={onChoix ? () => onChoix(cle) : undefined}
            disabled={!onChoix}
            accessibilityRole="radio"
            accessibilityState={{ checked: actif }}
            accessibilityLabel={`${libelle} : ${n.libelle}`}
            style={({ pressed }) => ({
              flex: 1, minHeight: 44, alignItems: 'center', justifyContent: 'center', borderRadius: t.rayon.m,
              borderWidth: actif ? 2 : 1, borderColor: actif ? couleurs[cle].trait : C.trait,
              backgroundColor: actif ? couleurs[cle].fond : C.fond, opacity: pressed ? 0.75 : 1,
            })}
          >
            <Text style={{ color: C.texte, fontWeight: actif ? '800' : '600', fontSize: t.police.petite }}>{n.icone} {n.libelle}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function Bouton({ t, texte, onPress, desactive, variante = 'plein', style }) {
  const C = t.couleur;
  const fond = variante === 'succes' ? C.succes : C.accent;
  return (
    <Pressable
      onPress={desactive ? undefined : onPress}
      disabled={desactive}
      accessibilityRole="button"
      accessibilityLabel={texte}
      accessibilityState={{ disabled: !!desactive }}
      style={({ pressed }) => [{
        minHeight: 44, justifyContent: 'center', alignItems: 'center', borderRadius: t.rayon.m,
        paddingVertical: 10, paddingHorizontal: 12,
        backgroundColor: variante === 'contour' ? 'transparent' : fond,
        borderWidth: variante === 'contour' ? 1 : 0, borderColor: C.accent,
        opacity: desactive ? 0.45 : (pressed ? 0.75 : 1),
      }, style]}
    >
      <Text style={{ color: variante === 'contour' ? C.accent : C.accentTexte, fontWeight: '700', fontSize: t.police.normale, textAlign: 'center' }}>{texte}</Text>
    </Pressable>
  );
}

function Historique({ t, liste, titre, avecTitre = false }) {
  const C = t.couleur;
  if (!liste || !liste.length) return null;
  return (
    <View style={{ marginTop: t.espace.l }}>
      <Text style={{ color: C.attenue, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }}>{titre.toUpperCase()}</Text>
      {liste.map((e) => (
        <View key={e.id} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderColor: C.trait, gap: 8 }}>
          <View style={{ flex: 1 }}>
            {avecTitre && <Text style={{ color: C.texte, fontSize: t.police.petite, fontWeight: '600' }} numberOfLines={1}>{e.titre}</Text>}
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>
              {dateFr(e.date)} · {formaterDuree(e.tempsMin || 0)} sur {formaterDuree(e.dureeMin || 0)}{e.bareme && e.bareme !== 'sujet' ? ' · note estimée' : ''}
            </Text>
          </View>
          <Text style={{ color: e.note20 >= 10 ? C.succes : C.erreur, fontWeight: '800' }}>{nombreFr(e.note20)}/20</Text>
        </View>
      ))}
    </View>
  );
}

function dateFr(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || ''));
  return m ? `${m[3]}/${m[2]}/${m[1]}` : '';
}
