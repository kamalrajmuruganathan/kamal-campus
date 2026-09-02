/**
 * Défi à distance — sans serveur. On crée un défi (chapitre + graine), partagé
 * par QR ou par un court code. L'ami rejoue la MÊME graine → mêmes questions.
 * Chacun obtient un « code résultat » à renvoyer pour se départager.
 */

import { useMemo, useState, useRef } from 'react';
import { View, Text, ScrollView, Pressable, TextInput, StyleSheet, Alert } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { theme, couleurMatiere } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { CHAPITRES, chapitreParId } from '../contenu-index';
import { aGenerateur, genererQuestions } from '../../lib/generateurs';
import {
  rngGraine, graineAleatoire, encoderDefi, decoderDefi, encoderResultat, decoderResultat, verdict,
} from '../../lib/defi';

const N = 10;
const LETTRES = ['A', 'B', 'C', 'D'];

export default function Defi() {
  const t = theme(useSombre());
  const [phase, setPhase] = useState('menu'); // menu | creer | coller | jeu | fin
  const [defi, setDefi] = useState(null); // { chapId, graine, n }
  const [saisie, setSaisie] = useState('');
  const [saisieResultat, setSaisieResultat] = useState('');
  const [verdictTexte, setVerdictTexte] = useState(null);

  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [score, setScore] = useState(0);
  const [permission, demanderPermission] = useCameraPermissions();
  const scanLock = useRef(false);

  const questions = useMemo(() => {
    if (!defi) return [];
    return genererQuestions(defi.chapId, defi.n, rngGraine(defi.graine));
  }, [defi]);

  const chap = defi ? chapitreParId(defi.chapId) : null;
  const accent = chap ? couleurMatiere(t, chap.matiere) : t.couleur.accent;

  const demarrerJeu = () => { setIndex(0); setChoisi(null); setScore(0); setVerdictTexte(null); setSaisieResultat(''); setPhase('jeu'); };

  const creer = () => {
    const gens = CHAPITRES.filter((c) => aGenerateur(c.id));
    const c = gens[Math.floor(Math.random() * gens.length)];
    setDefi({ chapId: c.id, graine: graineAleatoire(), n: N });
    setPhase('creer');
  };

  const rejoindre = (code = saisie) => {
    const d = decoderDefi(code);
    if (!d || !aGenerateur(d.chapId)) { Alert.alert('Code invalide', 'Vérifie le code du défi et réessaie.'); return false; }
    setDefi(d); demarrerJeu(); return true;
  };

  // Ouvre le scanner (demande la permission caméra au besoin).
  const ouvrirScan = async () => {
    scanLock.current = false;
    if (!permission || !permission.granted) {
      const res = await demanderPermission();
      if (!res || !res.granted) { Alert.alert('Caméra refusée', 'Autorise la caméra pour scanner, ou colle le code à la main.'); return; }
    }
    setPhase('scan');
  };

  const surScan = ({ data }) => {
    if (scanLock.current) return;
    scanLock.current = true;
    setSaisie(data || '');
    if (!rejoindre(data || '')) setPhase('coller'); // code non valide → retour à la saisie
  };

  const bouton = (label, onPress, bg, txt) => (
    <Pressable onPress={onPress} style={({ pressed }) => [st.bouton, { backgroundColor: bg, opacity: pressed ? 0.85 : 1 }]}>
      <Text style={{ color: txt, fontWeight: '700', fontSize: t.police.moyenne }}>{label}</Text>
    </Pressable>
  );

  // ── MENU ────────────────────────────────────────────────────────────────────
  if (phase === 'menu') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800' }}>📲 Défi à distance</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
            Crée un défi et envoie le QR (ou le code) à un ami. Vous répondez aux mêmes questions,
            puis vous comparez vos scores. Aucun compte, aucune connexion.
          </Text>
          <View style={{ height: t.espace.l }} />
          {bouton('➕ Créer un défi', creer, accent, t.couleur.accentTexte)}
          <View style={{ height: t.espace.s }} />
          {bouton('🔑 Rejoindre avec un code', () => setPhase('coller'), t.couleur.surface, t.couleur.texte)}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── CRÉER : QR + code ────────────────────────────────────────────────────────
  if (phase === 'creer') {
    const code = encoderDefi(defi);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, alignItems: 'center' }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '700' }}>{chap?.titre}</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2, marginBottom: t.espace.l }}>
            {N} questions · fais scanner ce QR à ton ami
          </Text>
          <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16 }}>
            <QRCode value={code} size={200} />
          </View>
          <Text selectable style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: t.espace.l, textAlign: 'center' }}>
            ou ce code : <Text style={{ fontWeight: '800' }}>{code}</Text>
          </Text>
          <View style={{ height: t.espace.l }} />
          {bouton('▶️ Jouer ma manche', demarrerJeu, accent, t.couleur.accentTexte)}
          <View style={{ height: t.espace.s }} />
          {bouton('Retour', () => setPhase('menu'), t.couleur.surface, t.couleur.texte)}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── REJOINDRE : coller un code ────────────────────────────────────────────────
  if (phase === 'coller') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '700' }}>Rejoindre un défi</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6 }}>Colle le code envoyé par ton ami :</Text>
          <TextInput
            value={saisie}
            onChangeText={setSaisie}
            placeholder="D1~..."
            placeholderTextColor={t.couleur.attenue}
            autoCapitalize="none"
            autoCorrect={false}
            style={{ borderWidth: 1.5, borderColor: accent, borderRadius: t.rayon.m, padding: t.espace.m, color: t.couleur.texte, marginTop: t.espace.m, fontSize: t.police.moyenne }}
          />
          <View style={{ height: t.espace.m }} />
          {bouton('Rejoindre', () => rejoindre(), accent, t.couleur.accentTexte)}
          <View style={{ height: t.espace.s }} />
          {bouton('📷 Scanner le QR', ouvrirScan, t.couleur.surface, t.couleur.texte)}
          <View style={{ height: t.espace.s }} />
          {bouton('Retour', () => setPhase('menu'), t.couleur.surface, t.couleur.texte)}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── SCANNER le QR d'un défi ───────────────────────────────────────────────────
  if (phase === 'scan') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }} edges={['bottom']}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
          onBarcodeScanned={surScan}
        />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: t.espace.l }}>
          <Text style={{ color: '#fff', fontSize: t.police.normale, fontWeight: '700', textAlign: 'center' }}>Vise le QR du défi</Text>
        </View>
        <View style={{ position: 'absolute', bottom: t.espace.l, left: t.espace.l, right: t.espace.l }}>
          {bouton('Annuler', () => setPhase('coller'), t.couleur.surface, t.couleur.texte)}
        </View>
      </SafeAreaView>
    );
  }

  // ── FIN : score + code résultat + comparaison ────────────────────────────────
  if (phase === 'fin') {
    const monCode = encoderResultat({ graine: defi.graine, score, n: defi.n });
    const comparer = () => {
      const r = decoderResultat(saisieResultat);
      if (!r || r.graine !== defi.graine) { Alert.alert('Code résultat invalide', 'Ce code ne correspond pas à ce défi.'); return; }
      const v = verdict(score, r.score);
      setVerdictTexte(v === 'gagne' ? `🏆 Tu gagnes ! ${score} contre ${r.score}` : v === 'perd' ? `😅 Perdu : ${score} contre ${r.score}` : `🤝 Égalité : ${score} partout`);
    };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, alignItems: 'center' }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '800' }}>{score} / {defi.n}</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>ta manche est terminée</Text>
          <Text selectable style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: t.espace.l, textAlign: 'center' }}>
            Renvoie ton code résultat à ton ami :{'\n'}<Text style={{ fontWeight: '800' }}>{monCode}</Text>
          </Text>
          <View style={{ height: t.espace.l }} />
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, alignSelf: 'flex-start' }}>Colle le code résultat de ton ami :</Text>
          <TextInput
            value={saisieResultat}
            onChangeText={setSaisieResultat}
            placeholder="S1~..."
            placeholderTextColor={t.couleur.attenue}
            autoCapitalize="none"
            autoCorrect={false}
            style={{ width: '100%', borderWidth: 1.5, borderColor: accent, borderRadius: t.rayon.m, padding: t.espace.m, color: t.couleur.texte, marginTop: t.espace.s, fontSize: t.police.moyenne }}
          />
          <View style={{ height: t.espace.s }} />
          {bouton('Comparer', comparer, accent, t.couleur.accentTexte)}
          {verdictTexte && (
            <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: t.espace.l, textAlign: 'center' }}>{verdictTexte}</Text>
          )}
          <View style={{ height: t.espace.l }} />
          {bouton('Nouveau défi', () => setPhase('menu'), t.couleur.surface, t.couleur.texte)}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── JEU : quiz sur graine partagée ────────────────────────────────────────────
  const q = questions[index];
  if (!q) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>Défi indisponible.</Text>
      </SafeAreaView>
    );
  }
  const repondu = choisi !== null;
  const valider = (i) => { if (repondu) return; setChoisi(i); if (i === q.reponse) setScore((s) => s + 1); };
  const suivant = () => { if (index + 1 >= questions.length) setPhase('fin'); else { setIndex(index + 1); setChoisi(null); } };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>Défi · {chap?.titre} · {index + 1} / {questions.length}</Text>
        <VisionneuseFiche markdown={q.enonce} style={{ marginTop: t.espace.s }} />
        {q.choix.map((choix, i) => {
          const estBon = i === q.reponse; const estChoisi = i === choisi;
          let fond = t.couleur.surface; let bord = t.couleur.trait;
          if (repondu && estBon) { fond = t.couleur.succesFond; bord = t.couleur.succes; }
          else if (repondu && estChoisi) { fond = t.couleur.erreurFond; bord = t.couleur.erreur; }
          return (
            <Pressable key={i} onPress={() => valider(i)} disabled={repondu} style={({ pressed }) => [st.choix, { backgroundColor: fond, borderColor: bord, borderRadius: t.rayon.m, marginTop: t.espace.s, opacity: pressed && !repondu ? 0.7 : 1 }]}>
              <Text style={{ width: 24, color: t.couleur.attenue, fontWeight: '700' }}>{LETTRES[i]}</Text>
              <View style={{ flex: 1 }}><VisionneuseFiche markdown={choix} /></View>
              {repondu && estBon && <Text style={{ color: t.couleur.succes, fontSize: 18 }}>✓</Text>}
              {repondu && estChoisi && !estBon && <Text style={{ color: t.couleur.erreur, fontSize: 18 }}>✕</Text>}
            </Pressable>
          );
        })}
        {repondu && (
          <Pressable onPress={suivant} style={({ pressed }) => [st.bouton, { backgroundColor: accent, marginTop: t.espace.l, opacity: pressed ? 0.85 : 1 }]}>
            <Text style={{ color: t.couleur.accentTexte, fontWeight: '700' }}>{index + 1 >= questions.length ? 'Voir mon score' : 'Question suivante'}</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12, width: '100%' },
  choix: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, padding: 14 },
});
