import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useSombre } from '../useSombre';
import { theme } from '../theme';
import {
  assurerProfilPublic, definirPseudo, chercherParPseudo, envoyerDemande,
  repondreDemande, supprimerAmi, listerAmis, listerDemandesRecues, ecouterAmities,
} from '../cloud/social';

export default function Amis({ navigation }) {
  const sombre = useSombre();
  const C = theme(sombre).couleur;

  const [chargement, setChargement] = useState(true);
  const [pseudoEdit, setPseudoEdit] = useState('');
  const [recherche, setRecherche] = useState('');
  const [resultats, setResultats] = useState([]);
  const [infoRecherche, setInfoRecherche] = useState('');
  const [demandes, setDemandes] = useState([]);
  const [amis, setAmis] = useState([]);
  const [occupe, setOccupe] = useState(false);

  const rafraichir = useCallback(async () => {
    const [d, a] = await Promise.all([listerDemandesRecues(), listerAmis()]);
    setDemandes(d); setAmis(a);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const p = await assurerProfilPublic();
        setPseudoEdit(p?.pseudo ?? '');
        await rafraichir();
      } catch (e) { Alert.alert('Oups', e.message ?? 'Erreur de chargement.'); }
      finally { setChargement(false); }
    })();
  }, [rafraichir]);

  // Demandes et amis mis à jour en direct (temps réel), avec un filet de sécurité toutes les 60 s.
  useEffect(() => {
    const recharger = () => { rafraichir().catch(() => {}); };
    const arreter = ecouterAmities(recharger);
    const minuterie = setInterval(recharger, 60000);
    return () => { arreter(); clearInterval(minuterie); };
  }, [rafraichir]);

  async function enregistrerPseudo() {
    try { setOccupe(true); const p = await definirPseudo(pseudoEdit); setPseudoEdit(p.pseudo); Alert.alert('OK', 'Pseudo enregistré.'); }
    catch (e) { Alert.alert('Pseudo', e.message ?? 'Impossible.'); }
    finally { setOccupe(false); }
  }
  async function lancerRecherche() {
    const terme = recherche.trim();
    if (terme.length < 2) { setResultats([]); setInfoRecherche('Tape au moins 2 lettres du pseudo de ton ami.'); return; }
    try {
      const r = await chercherParPseudo(terme);
      setResultats(r);
      if (r.length > 0) setInfoRecherche('');
      else if (pseudoEdit && pseudoEdit.toLowerCase().includes(terme.toLowerCase())) {
        setInfoRecherche(`Aucun autre élève trouvé : « ${pseudoEdit} », c'est ton propre pseudo. Tape celui de ton ami (il l'a en haut de son écran Amis).`);
      } else {
        setInfoRecherche(`Aucun élève trouvé pour « ${terme} ». Vérifie l'orthographe du pseudo (il est affiché en haut de l'écran Amis de ton ami).`);
      }
    }
    catch (e) { Alert.alert('Recherche', e.message ?? 'Erreur.'); }
  }
  async function ajouter(p) {
    try { await envoyerDemande(p.id); Alert.alert('OK', `Demande envoyée à ${p.pseudo}.`); setResultats((prev) => prev.filter((x) => x.id !== p.id)); }
    catch (e) { Alert.alert('Demande', e.message ?? 'Impossible.'); }
  }
  async function repondre(amitieId, accepter) {
    try { await repondreDemande(amitieId, accepter); await rafraichir(); }
    catch (e) { Alert.alert('Réponse', e.message ?? 'Impossible.'); }
  }
  function confirmerSuppr(a) {
    Alert.alert('Retirer cet ami ?', a.ami.pseudo, [
      { text: 'Annuler', style: 'cancel' },
      { text: 'Retirer', style: 'destructive', onPress: async () => { try { await supprimerAmi(a.amitieId); await rafraichir(); } catch (e) { Alert.alert('Erreur', e.message ?? ''); } } },
    ]);
  }

  if (chargement) {
    return <View style={{ flex: 1, backgroundColor: C.fond, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator color={C.accent} /></View>;
  }

  const carte = { backgroundColor: C.fond, borderColor: C.trait, borderWidth: 1, borderRadius: 14, padding: 14, marginBottom: 12 };
  const titre = { color: C.texte, fontSize: 15, fontWeight: '700', marginBottom: 10 };
  const champ = { borderColor: C.trait, borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, color: C.texte };
  const btn = { backgroundColor: C.accent, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 14, alignItems: 'center' };
  const btnTxt = { color: '#fff', fontWeight: '700' };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.fond }} contentContainerStyle={{ padding: 16 }}>
      <View style={carte}>
        <Text style={titre}>Ton pseudo</Text>
        <Text style={{ color: C.texte, opacity: 0.6, marginBottom: 8, fontSize: 13 }}>C'est ce nom que tes amis utilisent pour te trouver.</Text>
        <TextInput value={pseudoEdit} onChangeText={setPseudoEdit} autoCapitalize="none" placeholder="ton_pseudo" placeholderTextColor={sombre ? '#888' : '#aaa'} style={champ} />
        <Pressable onPress={enregistrerPseudo} disabled={occupe} style={[btn, { marginTop: 10, opacity: occupe ? 0.6 : 1 }]}><Text style={btnTxt}>Enregistrer</Text></Pressable>
      </View>

      <View style={carte}>
        <Text style={titre}>Ajouter un ami</Text>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TextInput value={recherche} onChangeText={setRecherche} autoCapitalize="none" placeholder="Chercher un pseudo..." placeholderTextColor={sombre ? '#888' : '#aaa'} style={[champ, { flex: 1 }]} onSubmitEditing={lancerRecherche} returnKeyType="search" />
          <Pressable onPress={lancerRecherche} style={btn}><Text style={btnTxt}>Chercher</Text></Pressable>
        </View>
        {infoRecherche ? <Text style={{ color: C.texte, opacity: 0.7, fontSize: 13, marginTop: 10 }}>{infoRecherche}</Text> : null}
        {resultats.map((p) => (
          <View key={p.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
            <Text style={{ color: C.texte, fontSize: 15 }}>{p.avatar ?? '🎓'} {p.pseudo}</Text>
            <Pressable onPress={() => ajouter(p)} style={btn}><Text style={btnTxt}>Ajouter</Text></Pressable>
          </View>
        ))}
      </View>

      {demandes.length > 0 && (
        <View style={carte}>
          <Text style={titre}>Demandes reçues ({demandes.length})</Text>
          {demandes.map((d) => (
            <View key={d.amitieId} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
              <Text style={{ color: C.texte, fontSize: 15 }}>{d.de.avatar ?? '🎓'} {d.de.pseudo}</Text>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <Pressable onPress={() => repondre(d.amitieId, true)} style={btn}><Text style={btnTxt}>Accepter</Text></Pressable>
                <Pressable onPress={() => repondre(d.amitieId, false)} style={[btn, { backgroundColor: 'transparent', borderWidth: 1, borderColor: C.trait }]}><Text style={{ color: C.texte, fontWeight: '700' }}>Refuser</Text></Pressable>
              </View>
            </View>
          ))}
        </View>
      )}

      <View style={carte}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Text style={titre}>Mes amis ({amis.length})</Text>
          <Pressable onPress={() => navigation.navigate('Classement')} hitSlop={8}>
            <Text style={{ color: C.accent, fontSize: 13, fontWeight: '700' }}>🏆 Classement ›</Text>
          </Pressable>
        </View>
        {amis.length === 0 ? (
          <Text style={{ color: C.texte, opacity: 0.6, fontSize: 13 }}>Pas encore d'amis. Cherche un pseudo ci-dessus pour envoyer une demande.</Text>
        ) : amis.map((a) => (
          <Pressable key={a.amitieId} onPress={() => navigation.navigate('Discussion', { amiId: a.ami.id, pseudo: a.ami.pseudo })} onLongPress={() => confirmerSuppr(a)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
            <Text style={{ color: C.texte, fontSize: 15, flex: 1 }}>{a.ami.avatar ?? '🎓'} {a.ami.pseudo}</Text>
            <Pressable onPress={() => confirmerSuppr(a)} hitSlop={8} style={{ paddingHorizontal: 10 }}>
              <Text style={{ color: C.texte, opacity: 0.6, fontSize: 13 }}>Retirer</Text>
            </Pressable>
            <Text style={{ color: C.accent, fontSize: 13, fontWeight: '700' }}>Discuter ›</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
