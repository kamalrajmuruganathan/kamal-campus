/**
 * Ecran "Defis a distance" — duel 1v1 asynchrone sur le QCM d'un chapitre.
 * A joue tout de suite ; B rejoue EXACTEMENT les memes questions (figees a la
 * creation) ; meilleur score gagne, a egalite le plus rapide l'emporte.
 * Les enonces/choix contiennent du LaTeX -> rendus par VisionneuseFiche.
 */
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, ActivityIndicator, Modal, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../useTheme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { listerAmis } from '../cloud/social';
import {
  monId, listerMesDefis, creerDefi, repondreDefi, refuserDefi, issueDefi, ecouterDefis,
} from '../cloud/defis';
import { construireQuestions, chapitresJouables, titreChapitre, NB_QUESTIONS_DEFI } from '../defisContenu';

const LETTRES = ['A', 'B', 'C', 'D', 'E', 'F'];
const WEB = Platform.OS === 'web';

// Sur le web, Alert.alert de React Native ne fait rien : on passe par le navigateur.
function avertir(titre, message) {
  if (WEB) window.alert(message ? `${titre}\n\n${message}` : titre);
  else Alert.alert(titre, message);
}
function confirmer(titre, message, libelleOk, action) {
  if (WEB) { if (window.confirm(`${titre}\n\n${message}`)) action(); return; }
  Alert.alert(titre, message, [
    { text: 'Annuler', style: 'cancel' },
    { text: libelleOk, style: 'destructive', onPress: action },
  ]);
}

// Melange les options d'une question pour l'affichage (garde la bonne reponse).
function prepareAffichage(questions) {
  return questions.map((q) => {
    const opts = (q.choix || []).map((txt, i) => ({ txt, ok: i === q.reponse }));
    for (let i = opts.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [opts[i], opts[j]] = [opts[j], opts[i]]; }
    return { enonce: q.enonce, opts };
  });
}

export default function Defis({ navigation }) {
  const t = useTheme();
  const C = t.couleur;

  const [chargement, setChargement] = useState(true);
  const [moi, setMoi] = useState(null);
  const [amis, setAmis] = useState([]);          // [{ id, nom, avatar }]
  const [defis, setDefis] = useState([]);
  const [onglet, setOnglet] = useState('jouer');
  const [nouveau, setNouveau] = useState(false);
  const [jeu, setJeu] = useState(null);
  // Partie en cours, lisible hors rendu, et verrou d'envoi : le résultat ne part qu'une fois.
  const jeuRef = useRef(null);
  const envoiRef = useRef(false);
  useEffect(() => { jeuRef.current = jeu; }, [jeu]);

  const mapAmi = useMemo(() => new Map(amis.map((a) => [a.id, a])), [amis]);
  const nomDe = useCallback((id) => mapAmi.get(id)?.nom ?? 'Joueur', [mapAmi]);
  const avatarDe = useCallback((id) => mapAmi.get(id)?.avatar ?? '🎓', [mapAmi]);

  const rafraichir = useCallback(async () => { setDefis(await listerMesDefis()); }, []);

  useEffect(() => {
    let off = null;
    (async () => {
      try {
        const id = await monId();
        setMoi(id);
        const bruts = await listerAmis();
        setAmis(bruts.map((a) => ({ id: a.ami.id, nom: a.ami.pseudo, avatar: a.ami.avatar ?? '🎓' })));
        await rafraichir();
        off = ecouterDefis(id, () => { rafraichir(); });
      } catch (e) { avertir('Oups', e.message ?? 'Erreur de chargement.'); }
      finally { setChargement(false); }
    })();
    return () => { if (off) off(); };
  }, [rafraichir]);

  const groupe = useCallback((d) => {
    if (d.statut === 'en_attente' && d.adversaire === moi) return 'jouer';
    if (d.statut === 'en_attente' && d.createur === moi) return 'envoyes';
    return 'termines';
  }, [moi]);

  const resultats = useCallback((d) => {
    const createur = d.createur === moi;
    return {
      moi: createur ? { score: d.score_createur, t: d.temps_createur, total: d.total_createur }
                    : { score: d.score_adversaire, t: d.temps_adversaire, total: d.total_adversaire },
      adv: createur ? { score: d.score_adversaire, t: d.temps_adversaire, total: d.total_adversaire }
                    : { score: d.score_createur, t: d.temps_createur, total: d.total_createur },
      advId: createur ? d.adversaire : d.createur,
    };
  }, [moi]);

  const parGroupe = useMemo(() => {
    const g = { jouer: [], envoyes: [], termines: [] };
    for (const d of defis) g[groupe(d)].push(d);
    return g;
  }, [defis, groupe]);

  // --- Demarrer une partie ---
  //  mode 'creer'    : raw = questions fraiches (a stocker) ; amiId defini
  //  mode 'repondre' : raw = defi.questions (les memes) ; defiId defini
  function demarrer({ mode, chapId, raw, defiId, amiId }) {
    if (!raw || !raw.length) { avertir('Chapitre', 'Aucune question disponible pour ce chapitre.'); return; }
    envoiRef.current = false;
    setJeu({
      phase: 'question', mode, chapId, defiId, amiId,
      raw, questions: prepareAffichage(raw),
      idx: 0, score: 0, t0: Date.now(), choisi: null, resultat: null,
    });
  }
  function relever(d) { demarrer({ mode: 'repondre', chapId: d.chapitre, raw: d.questions || [], defiId: d.id }); }

  function repondreQuestion(iOpt) {
    setJeu((j) => {
      if (!j || j.choisi != null) return j;
      const bon = j.questions[j.idx].opts[iOpt].ok;
      return { ...j, choisi: iOpt, score: j.score + (bon ? 1 : 0) };
    });
    setTimeout(() => {
      // Pas d'appel réseau dans un « updater » de setJeu : React peut l'exécuter deux fois.
      const j = jeuRef.current;
      if (!j) return;
      if (j.idx + 1 < j.questions.length) { setJeu((s) => s && { ...s, idx: s.idx + 1, choisi: null }); return; }
      if (envoiRef.current) return;
      envoiRef.current = true;
      finaliser(j);
    }, 800);
  }

  async function finaliser(j) {
    const tempsSec = Math.max(1, Math.round((Date.now() - j.t0) / 1000));
    const total = j.questions.length;
    try {
      if (j.mode === 'creer') {
        await creerDefi({ chapitre: j.chapId, adversaireId: j.amiId, questions: j.raw, score: j.score, total, tempsSec });
        setJeu((s) => s && { ...s, phase: 'fait', resultat: { mode: 'creer', score: s.score, total, tempsSec, amiId: j.amiId } });
      } else {
        const maj = await repondreDefi({ defiId: j.defiId, score: j.score, total, tempsSec });
        setJeu((s) => s && { ...s, phase: 'fait', resultat: { mode: 'repondre', defi: maj } });
      }
      await rafraichir();
    } catch (e) { avertir('Erreur', e.message ?? 'Envoi impossible.'); setJeu(null); }
  }

  function confirmerRefus(d) {
    confirmer('Refuser ce défi ?', `De ${nomDe(resultats(d).advId)}`, 'Refuser', async () => {
      try { await refuserDefi(d.id); await rafraichir(); } catch (e) { avertir('Erreur', e.message ?? ''); }
    });
  }

  // --- Styles ---
  const carte = { backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, padding: t.espace.m, marginTop: t.espace.m };
  const btn = { backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 12, alignItems: 'center' };
  const btnTxt = { color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne };
  const ghost = { backgroundColor: C.surface, borderWidth: 1, borderColor: C.trait };

  if (chargement) {
    return <View style={{ flex: 1, backgroundColor: C.fond, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator color={C.accent} /></View>;
  }

  const items = parGroupe[onglet];
  const cpt = { jouer: parGroupe.jouer.length, envoyes: parGroupe.envoyes.length, termines: parGroupe.termines.length };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: WEB ? 144 : 96 }}>
        <Text style={{ color: C.texte, fontSize: t.police.titre, fontWeight: '700' }}>Défis</Text>
        <Text style={{ color: C.attenue, fontSize: t.police.normale, marginTop: 2 }}>Provoque tes amis sur un chapitre 💪</Text>

        <View style={{ flexDirection: 'row', gap: 6, backgroundColor: C.surface, padding: 5, borderRadius: t.rayon.m, marginTop: t.espace.m }}>
          {[['jouer', 'À jouer'], ['envoyes', 'Envoyés'], ['termines', 'Terminés']].map(([k, lab]) => (
            <Pressable key={k} onPress={() => setOnglet(k)} style={{ flex: 1, paddingVertical: 9, borderRadius: t.rayon.m - 4, alignItems: 'center', backgroundColor: onglet === k ? C.fond : 'transparent' }}>
              <Text style={{ color: onglet === k ? C.texte : C.attenue, fontWeight: '700', fontSize: t.police.petite }}>{lab} ({cpt[k]})</Text>
            </Pressable>
          ))}
        </View>

        {items.length === 0 ? (
          <Text style={{ color: C.attenue, textAlign: 'center', marginTop: 40, fontSize: t.police.normale }}>
            Rien ici pour l'instant.{'\n'}Lance un défi avec le bouton ci-dessous.
          </Text>
        ) : items.map((d) => {
          const r = resultats(d); const nom = nomDe(r.advId); const av = avatarDe(r.advId);
          if (groupe(d) === 'jouer') {
            return (
              <View key={d.id} style={carte}>
                <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>{av} {nom} te défie</Text>
                <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 3 }}>{titreChapitre(d.chapitre)}</Text>
                <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 10 }}>{nom} a fait {r.adv.score}/{r.adv.total} en {r.adv.t}s.</Text>
                <Pressable onPress={() => relever(d)} style={[btn, { marginTop: 12 }]}><Text style={btnTxt}>Relever le défi</Text></Pressable>
                <Pressable onPress={() => confirmerRefus(d)} style={[btn, ghost, { marginTop: 8 }]}><Text style={[btnTxt, { color: C.texte }]}>Refuser</Text></Pressable>
              </View>
            );
          }
          if (groupe(d) === 'envoyes') {
            return (
              <View key={d.id} style={carte}>
                <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>{av} Défi envoyé à {nom}</Text>
                <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 3 }}>{titreChapitre(d.chapitre)}</Text>
                <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 10 }}>Ton score : {r.moi.score}/{r.moi.total} · {r.moi.t}s. En attente de sa réponse…</Text>
              </View>
            );
          }
          // Un défi qui n'est ni en attente ni terminé a été refusé : il n'a pas de résultat.
          const refuse = d.statut !== 'termine';
          if (refuse) {
            const jAiRefuse = d.adversaire === moi;
            return (
              <View key={d.id} style={carte}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>{av} Duel vs {nom}</Text>
                  <Text style={{ color: '#fff', backgroundColor: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', paddingHorizontal: 9, paddingVertical: 4, borderRadius: 20, overflow: 'hidden' }}>Refusé</Text>
                </View>
                <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 3 }}>{titreChapitre(d.chapitre)}</Text>
                <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 10 }}>
                  {jAiRefuse ? `Tu as refusé ce défi de ${nom}.` : `${nom} a refusé ton défi (ton score : ${r.moi.score}/${r.moi.total}).`}
                </Text>
              </View>
            );
          }
          const iss = issueDefi(d, moi) || 'egalite';
          const coul = iss === 'gagne' ? C.succes : iss === 'perdu' ? C.erreur : C.accent;
          const lab = iss === 'gagne' ? 'Gagné 🎉' : iss === 'perdu' ? 'Perdu' : 'Égalité';
          return (
            <View key={d.id} style={carte}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>{av} Duel vs {nom}</Text>
                <Text style={{ color: '#fff', backgroundColor: coul, fontSize: t.police.minuscule, fontWeight: '700', paddingHorizontal: 9, paddingVertical: 4, borderRadius: 20, overflow: 'hidden' }}>{lab}</Text>
              </View>
              <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 3 }}>{titreChapitre(d.chapitre)}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: C.trait }}>
                <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '700' }}>{r.moi.score}/{r.moi.total}</Text><Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>Toi · {r.moi.t}s</Text></View>
                <Text style={{ color: C.attenue, fontWeight: '700' }}>VS</Text>
                <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '700' }}>{r.adv.score}/{r.adv.total}</Text><Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>{nom} · {r.adv.t}s</Text></View>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <Pressable onPress={() => setNouveau(true)} style={{ position: 'absolute', left: t.espace.l, right: t.espace.l, bottom: WEB ? 64 : t.espace.l, backgroundColor: C.accent, borderRadius: 30, paddingVertical: 14, alignItems: 'center' }}>
        <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne }}>＋ Nouveau défi</Text>
      </Pressable>

      <ModalNouveau visible={nouveau} onClose={() => setNouveau(false)} t={t} amis={amis}
        onLancer={(amiId, chap) => {
          setNouveau(false);
          const raw = construireQuestions(chap.id, NB_QUESTIONS_DEFI);
          demarrer({ mode: 'creer', chapId: chap.id, raw, amiId });
        }} />

      <Modal visible={!!jeu} animationType="slide" transparent onRequestClose={() => setJeu(null)}>
        <View style={{ flex: 1, backgroundColor: 'rgba(10,10,30,0.5)', justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: C.fond, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: t.espace.l, maxHeight: '92%' }}>
            {jeu && jeu.phase === 'question' && <VueQuestion jeu={jeu} t={t} onRep={repondreQuestion} onClose={() => setJeu(null)} />}
            {jeu && jeu.phase === 'fait' && jeu.resultat?.mode === 'creer' &&
              <ResultatCreateur res={jeu.resultat} nom={nomDe(jeu.resultat.amiId)} t={t} onOk={() => { setJeu(null); setOnglet('envoyes'); }} />}
            {jeu && jeu.phase === 'fait' && jeu.resultat?.mode === 'repondre' &&
              <ResultatDuel d={jeu.resultat.defi} moi={moi} nomDe={nomDe} t={t} onOk={() => { setJeu(null); setOnglet('termines'); }} />}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function VueQuestion({ jeu, t, onRep, onClose }) {
  const C = t.couleur;
  const cur = jeu.questions[jeu.idx];
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, flex: 1 }}>Question {jeu.idx + 1} / {jeu.questions.length}</Text>
        <Pressable onPress={onClose}><Text style={{ color: C.attenue, fontSize: 18 }}>✕</Text></Pressable>
      </View>
      <View style={{ height: 4, backgroundColor: C.trait, borderRadius: 2, overflow: 'hidden', marginBottom: t.espace.m }}>
        <View style={{ width: `${(jeu.idx / jeu.questions.length) * 100}%`, height: '100%', backgroundColor: C.accent }} />
      </View>
      <VisionneuseFiche markdown={cur.enonce} />
      <View style={{ marginTop: t.espace.s, gap: 8 }}>
        {cur.opts.map((o, i) => {
          let fond = C.surface, bord = C.trait;
          if (jeu.choisi != null) {
            if (o.ok) { fond = C.succesFond; bord = C.succes; }
            else if (i === jeu.choisi) { fond = C.erreurFond; bord = C.erreur; }
          }
          return (
            <Pressable key={i} onPress={() => onRep(i)} disabled={jeu.choisi != null}
              style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: bord, backgroundColor: fond, borderRadius: t.rayon.m, paddingHorizontal: 12, paddingVertical: 4 }}>
              <Text style={{ color: C.attenue, fontWeight: '700', width: 24 }}>{LETTRES[i]}</Text>
              <View style={{ flex: 1 }}><VisionneuseFiche markdown={o.txt} /></View>
              {jeu.choisi != null && o.ok && <Text style={{ color: C.succes, fontSize: 18 }}>✓</Text>}
              {jeu.choisi != null && i === jeu.choisi && !o.ok && <Text style={{ color: C.erreur, fontSize: 18 }}>✕</Text>}
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

function ResultatCreateur({ res, nom, t, onOk }) {
  const C = t.couleur;
  return (
    <View>
      <View style={{ alignItems: 'center', paddingVertical: 8 }}>
        <Text style={{ fontSize: 50 }}>🚀</Text>
        <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.titre }}>{res.score}/{res.total}</Text>
        <Text style={{ color: C.attenue, marginTop: 6, fontSize: t.police.petite }}>Défi envoyé à {nom} · {res.tempsSec}s</Text>
      </View>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, textAlign: 'center', marginTop: t.espace.m }}>
        {nom} jouera les mêmes questions. Tu verras le résultat ici dès qu'il/elle aura fini.
      </Text>
      <Pressable onPress={onOk} style={{ backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 12, alignItems: 'center', marginTop: t.espace.l }}>
        <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne }}>Voir mes défis</Text>
      </Pressable>
    </View>
  );
}

function ResultatDuel({ d, moi, nomDe, t, onOk }) {
  const C = t.couleur;
  const createur = d.createur === moi;
  const rm = createur ? { s: d.score_createur, tt: d.temps_createur } : { s: d.score_adversaire, tt: d.temps_adversaire };
  const ra = createur ? { s: d.score_adversaire, tt: d.temps_adversaire } : { s: d.score_createur, tt: d.temps_createur };
  const advId = createur ? d.adversaire : d.createur;
  const iss = issueDefi(d, moi) || 'egalite';
  const tro = iss === 'gagne' ? '🏆' : iss === 'perdu' ? '😅' : '🤝';
  const tit = iss === 'gagne' ? 'Gagné !' : iss === 'perdu' ? 'Perdu' : 'Égalité';
  return (
    <View>
      <View style={{ alignItems: 'center', paddingVertical: 8 }}>
        <Text style={{ fontSize: 50 }}>{tro}</Text>
        <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.titre }}>{tit}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: C.trait }}>
        <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '700' }}>{rm.s}</Text><Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>Toi · {rm.tt}s</Text></View>
        <Text style={{ color: C.attenue, fontWeight: '700' }}>VS</Text>
        <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '700' }}>{ra.s}</Text><Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>{nomDe(advId)} · {ra.tt}s</Text></View>
      </View>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, textAlign: 'center', marginTop: t.espace.m }}>À égalité de score, c'est le plus rapide qui gagne.</Text>
      <Pressable onPress={onOk} style={{ backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 12, alignItems: 'center', marginTop: t.espace.l }}>
        <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne }}>Terminé</Text>
      </Pressable>
    </View>
  );
}

function ModalNouveau({ visible, onClose, t, amis, onLancer }) {
  const C = t.couleur;
  const [amiId, setAmiId] = useState(null);
  const [chap, setChap] = useState(null);
  const [filtre, setFiltre] = useState('');
  const chaps = useMemo(() => {
    let l = [];
    try { l = chapitresJouables() || []; } catch { l = []; }
    const f = filtre.trim().toLowerCase();
    return (f ? l.filter((c) => `${c.niv} ${c.nom}`.toLowerCase().includes(f)) : l).slice(0, 40);
  }, [filtre]);

  const champ = { borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, paddingHorizontal: 12, paddingVertical: 10, color: C.texte, marginBottom: 8 };
  const chip = (on) => ({ borderWidth: 1, borderColor: on ? C.accent : C.trait, backgroundColor: on ? C.accent : 'transparent', borderRadius: t.rayon.m, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, marginBottom: 8 });
  const chipTxt = (on) => ({ color: on ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.petite });

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: 'rgba(10,10,30,0.5)', justifyContent: 'flex-end' }}>
        <View style={{ backgroundColor: C.fond, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: t.espace.l, maxHeight: '92%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
            <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.grande, flex: 1 }}>Nouveau défi</Text>
            <Pressable onPress={onClose}><Text style={{ color: C.attenue, fontSize: 18 }}>✕</Text></Pressable>
          </View>
          <Text style={{ color: C.attenue, fontSize: t.police.petite, marginBottom: t.espace.m }}>Choisis un ami, puis un chapitre. Vous répondrez aux mêmes questions.</Text>
          <ScrollView>
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginBottom: 8 }}>AMI</Text>
            {amis.length === 0 ? (
              <Text style={{ color: C.attenue, fontSize: t.police.petite }}>Ajoute d'abord des amis pour les défier.</Text>
            ) : (
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {amis.map((a) => (
                  <Pressable key={a.id} onPress={() => setAmiId(a.id)} style={chip(amiId === a.id)}>
                    <Text style={chipTxt(amiId === a.id)}>{a.avatar} {a.nom}</Text>
                  </Pressable>
                ))}
              </View>
            )}
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginTop: t.espace.m, marginBottom: 8 }}>CHAPITRE</Text>
            <TextInput value={filtre} onChangeText={setFiltre} placeholder="Filtrer un chapitre…" placeholderTextColor={C.attenue} style={champ} autoCapitalize="none" />
            {chaps.length === 0 ? (
              <Text style={{ color: C.attenue, fontSize: t.police.petite }}>Liste des chapitres à brancher (voir defisContenu.js).</Text>
            ) : (
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {chaps.map((c) => (
                  <Pressable key={c.id} onPress={() => setChap(c)} style={chip(chap?.id === c.id)}>
                    <Text style={chipTxt(chap?.id === c.id)}>{c.niv} · {c.nom}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </ScrollView>
          <Pressable disabled={!(amiId && chap)} onPress={() => onLancer(amiId, chap)}
            style={{ backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 12, alignItems: 'center', marginTop: t.espace.m, opacity: amiId && chap ? 1 : 0.5 }}>
            <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne }}>{amiId && chap ? 'Commencer à jouer' : 'Choisis un ami et un chapitre'}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
