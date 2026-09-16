/**
 * Écran d'inscription / connexion (portier de l'appli).
 * Autonome : ne dépend d'aucun provider de progression. Palette de marque
 * en dur pour rester lisible en clair comme en sombre.
 */

import { useState } from 'react';
import {
  View, Text, TextInput, Pressable, ActivityIndicator,
  useColorScheme, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { useAuth } from '../cloud/AuthContexte';

const PALETTE = {
  clair: { fond: '#f6f4ec', carte: '#fffdf8', encre: '#16243a', doux: '#4a5a70', trait: '#dcd8c9', bleu: '#1f6feb', craie: '#ff6b45' },
  sombre: { fond: '#0d1725', carte: '#14243a', encre: '#eaf1fb', doux: '#9fb2cc', trait: '#22344e', bleu: '#4f95ff', craie: '#ff7d5c' },
};

function traduireErreur(msg) {
  const m = String(msg || '').toLowerCase();
  if (m.includes('invalid login')) return 'Email ou mot de passe incorrect.';
  if (m.includes('already') && m.includes('regist')) return 'Un compte existe déjà avec cet email. Connecte-toi.';
  if (m.includes('email not confirmed')) return 'Confirme d’abord ton email (vérifie ta boîte mail).';
  if (m.includes('password')) return 'Mot de passe trop court (6 caractères minimum).';
  if (m.includes('network') || m.includes('fetch')) return 'Problème de réseau. Vérifie ta connexion et réessaie.';
  return msg;
}

export default function Connexion() {
  const { sInscrire, seConnecter } = useAuth();
  const sombre = useColorScheme() === 'dark';
  const c = sombre ? PALETTE.sombre : PALETTE.clair;

  const [mode, setMode] = useState('connexion'); // 'connexion' | 'inscription'
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState('');
  const [info, setInfo] = useState('');

  const inscription = mode === 'inscription';

  async function valider() {
    setErreur(''); setInfo('');
    const mail = email.trim();
    if (!mail || !mdp) { setErreur('Renseigne ton email et ton mot de passe.'); return; }
    if (inscription && mdp.length < 6) { setErreur('Le mot de passe doit faire au moins 6 caractères.'); return; }

    setEnCours(true);
    try {
      if (inscription) {
        const { data, error } = await sInscrire(mail, mdp);
        if (error) setErreur(traduireErreur(error.message));
        else if (!data.session) {
          setInfo('Compte créé ! Vérifie ta boîte mail pour confirmer ton adresse, puis connecte-toi.');
          setMode('connexion');
        }
        // Si la confirmation e-mail est désactivée, la session arrive direct
        // et le portier bascule tout seul vers l'appli.
      } else {
        const { error } = await seConnecter(mail, mdp);
        if (error) setErreur(traduireErreur(error.message));
      }
    } catch (e) {
      setErreur('Problème de réseau. Réessaie.');
    } finally {
      setEnCours(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: c.fond }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}>
        <View style={{ alignSelf: 'center', width: '100%', maxWidth: 420 }}>
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <View style={{ width: 56, height: 56, borderRadius: 15, backgroundColor: c.bleu, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <Text style={{ color: '#fff', fontSize: 26, fontWeight: '900' }}>K</Text>
            </View>
            <Text style={{ fontSize: 24, fontWeight: '800', color: c.encre, textAlign: 'center' }}>
              Révise partout, retrouve tout.
            </Text>
            <Text style={{ fontSize: 14, color: c.doux, textAlign: 'center', marginTop: 8, lineHeight: 20 }}>
              {inscription
                ? 'Crée ton compte : ta progression sera synchronisée du téléphone au PC.'
                : 'Connecte-toi pour retrouver ta progression sur tous tes écrans.'}
            </Text>
          </View>

          <View style={{ backgroundColor: c.carte, borderRadius: 18, borderWidth: 1, borderColor: c.trait, padding: 18 }}>
            <Text style={{ fontSize: 12, fontWeight: '700', color: c.doux, marginBottom: 6 }}>EMAIL</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="ton@email.fr"
              placeholderTextColor={c.doux}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={{ borderWidth: 1, borderColor: c.trait, borderRadius: 10, padding: 12, color: c.encre, fontSize: 16, marginBottom: 14 }}
            />

            <Text style={{ fontSize: 12, fontWeight: '700', color: c.doux, marginBottom: 6 }}>MOT DE PASSE</Text>
            <TextInput
              value={mdp}
              onChangeText={setMdp}
              placeholder="6 caractères minimum"
              placeholderTextColor={c.doux}
              secureTextEntry
              style={{ borderWidth: 1, borderColor: c.trait, borderRadius: 10, padding: 12, color: c.encre, fontSize: 16 }}
            />

            {erreur ? (
              <Text style={{ color: c.craie, marginTop: 12, fontSize: 14 }}>{erreur}</Text>
            ) : null}
            {info ? (
              <Text style={{ color: c.bleu, marginTop: 12, fontSize: 14 }}>{info}</Text>
            ) : null}

            <Pressable
              onPress={valider}
              disabled={enCours}
              style={{ backgroundColor: c.bleu, borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 18, opacity: enCours ? 0.6 : 1 }}
            >
              {enCours
                ? <ActivityIndicator color="#fff" />
                : <Text style={{ color: '#fff', fontWeight: '800', fontSize: 16 }}>{inscription ? 'Créer mon compte' : 'Se connecter'}</Text>}
            </Pressable>
          </View>

          <Pressable
            onPress={() => { setErreur(''); setInfo(''); setMode(inscription ? 'connexion' : 'inscription'); }}
            style={{ marginTop: 18, alignItems: 'center' }}
          >
            <Text style={{ color: c.doux, fontSize: 14 }}>
              {inscription ? 'Déjà un compte ? ' : 'Pas encore de compte ? '}
              <Text style={{ color: c.bleu, fontWeight: '700' }}>
                {inscription ? 'Se connecter' : 'Créer un compte'}
              </Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
