/**
 * Écran d'inscription / connexion (portier de l'appli).
 * Mot de passe oublié : code provisoire par e-mail (10 min), voir docs/guide-mot-de-passe-oublie.md.
 * Autonome : ne dépend d'aucun provider de progression. Palette de marque
 * en dur pour rester lisible en clair comme en sombre.
 */

import { useEffect, useRef, useState } from 'react';
import {
  View, Text, TextInput, Pressable, ActivityIndicator,
  useColorScheme, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { useAuth } from '../cloud/AuthContexte';
import {
  nettoyerCode, codeValide, emailPlausible, verifierNouveauMotDePasse, traduireErreurRecuperation,
  VALIDITE_MINUTES, DELAI_RENVOI_S, MDP_MIN,
} from '../../lib/motDePasse';

const PALETTE = {
  clair: { fond: '#f6f4ec', carte: '#fffdf8', encre: '#16243a', doux: '#4a5a70', trait: '#dcd8c9', bleu: '#1d67db', craie: '#ff6b45' },
  sombre: { fond: '#0d1725', carte: '#14243a', encre: '#eaf1fb', doux: '#9fb2cc', trait: '#22344e', bleu: '#4f95ff', craie: '#ff7d5c' },
};

function traduireErreur(msg) {
  const m = String(msg || '').toLowerCase();
  if (m.includes('invalid login')) return 'Email ou mot de passe incorrect.';
  if (m.includes('already') && m.includes('regist')) return 'Un compte existe déjà avec cet email. Connecte-toi.';
  if (m.includes('email not confirmed')) return 'Confirme d’abord ton email (vérifie ta boîte mail).';
  if (m.includes('password')) return 'Mot de passe trop court (6 caractères minimum).';
  if (m.includes('network') || m.includes('fetch')) return 'Problème de réseau. Vérifie ta connexion et réessaie.';
  if (m.includes('rate limit') || m.includes('too many')) return 'Trop de tentatives : attends quelques minutes, puis réessaie.';
  if (m.includes('email') && (m.includes('invalid') || m.includes('valid'))) return 'Adresse email invalide. Vérifie-la.';
  if (m.includes('signup') && m.includes('disabled')) return 'Les inscriptions sont fermées pour le moment.';
  // Message inconnu (souvent en anglais) : on reste en français et on garde le détail entre parenthèses.
  return `La connexion a échoué. Réessaie dans un instant.${msg ? ` (${msg})` : ''}`;
}

export default function Connexion() {
  const { sInscrire, seConnecter, envoyerCodeOubli, reinitialiserMotDePasse } = useAuth();
  const sombre = useColorScheme() === 'dark';
  const c = sombre ? PALETTE.sombre : PALETTE.clair;

  // 'connexion' | 'inscription' | 'oubli' (demander un code) | 'code' (code + nouveau mot de passe)
  const [mode, setMode] = useState('connexion');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [code, setCode] = useState('');
  const [nouveau, setNouveau] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [attente, setAttente] = useState(0); // secondes avant de pouvoir renvoyer un code
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState('');
  const [info, setInfo] = useState('');
  const refMdp = useRef(null);

  const inscription = mode === 'inscription';
  const refNouveau = useRef(null);
  const refConfirmation = useRef(null);

  // Compte à rebours avant « Renvoyer un code » (Supabase refuse un nouvel envoi avant 60 s).
  useEffect(() => {
    if (attente <= 0) return undefined;
    const id = setTimeout(() => setAttente((a) => a - 1), 1000);
    return () => clearTimeout(id);
  }, [attente]);

  function changerMode(m) {
    setErreur(''); setInfo(''); setMode(m);
  }

  async function demanderCode() {
    setErreur(''); setInfo('');
    const mail = email.trim();
    if (!emailPlausible(mail)) { setErreur('Indique l’adresse e-mail de ton compte.'); return; }
    setEnCours(true);
    try {
      const { error } = await envoyerCodeOubli(mail);
      if (error) { setErreur(traduireErreurRecuperation(error.message) || traduireErreur(error.message)); return; }
      setCode(''); setNouveau(''); setConfirmation('');
      setMode('code');
      setAttente(DELAI_RENVOI_S);
      setInfo(`Si un compte existe avec l’adresse ${mail}, un code provisoire vient d’y être envoyé. Il est valable ${VALIDITE_MINUTES} minutes. Pense à regarder dans les courriers indésirables.`);
    } catch {
      setErreur('Problème de réseau. Réessaie.');
    } finally {
      setEnCours(false);
    }
  }

  async function changerMotDePasse() {
    setErreur('');
    const mail = email.trim();
    const c = nettoyerCode(code);
    if (!codeValide(c)) { setErreur('Tape le code à chiffres reçu par e-mail.'); return; }
    const probleme = verifierNouveauMotDePasse(nouveau, confirmation);
    if (probleme) { setErreur(probleme); return; }
    setEnCours(true);
    try {
      const { error } = await reinitialiserMotDePasse(mail, c, nouveau);
      if (error) {
        setErreur(traduireErreurRecuperation(error.message) || traduireErreur(error.message));
        setEnCours(false);
      }
      // Réussite : la session est ouverte et l'appli s'affiche toute seule.
    } catch {
      setErreur('Problème de réseau. Réessaie.');
      setEnCours(false);
    }
  }

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

  const oubli = mode === 'oubli';
  const etapeCode = mode === 'code';
  const recup = oubli || etapeCode;

  const styleChamp = { borderWidth: 1, borderColor: c.trait, borderRadius: 10, padding: 12, color: c.encre, fontSize: 16 };
  const Etiquette = ({ children }) => (
    <Text style={{ fontSize: 12, fontWeight: '700', color: c.doux, marginBottom: 6 }}>{children}</Text>
  );
  const Lien = ({ onPress, children, label, desactive }) => (
    <Pressable
      onPress={onPress}
      disabled={desactive}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={{ minHeight: 44, justifyContent: 'center', alignItems: 'center', opacity: desactive ? 0.55 : 1 }}
    >
      <Text style={{ color: c.bleu, fontWeight: '700', fontSize: 14 }}>{children}</Text>
    </Pressable>
  );

  let sousTitre = inscription
    ? 'Crée ton compte : ta progression sera synchronisée du téléphone au PC.'
    : 'Connecte-toi pour retrouver ta progression sur tous tes écrans.';
  if (oubli) sousTitre = `Indique l’e-mail de ton compte : tu recevras un code provisoire, valable ${VALIDITE_MINUTES} minutes, pour choisir un nouveau mot de passe.`;
  if (etapeCode) sousTitre = 'Tape le code reçu par e-mail, puis choisis ton nouveau mot de passe.';

  let titreBouton = inscription ? 'Créer mon compte' : 'Se connecter';
  let action = valider;
  if (oubli) { titreBouton = 'Recevoir un code'; action = demanderCode; }
  if (etapeCode) { titreBouton = 'Changer mon mot de passe'; action = changerMotDePasse; }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: c.fond }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }} keyboardShouldPersistTaps="handled">
        <View role="main" style={{ alignSelf: 'center', width: '100%', maxWidth: 420 }}>
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <View style={{ width: 56, height: 56, borderRadius: 15, backgroundColor: c.bleu, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <Text aria-hidden style={{ color: '#fff', fontSize: 26, fontWeight: '900' }}>K</Text>
            </View>
            <Text accessibilityRole="header" aria-level={1} style={{ fontSize: 24, fontWeight: '800', color: c.encre, textAlign: 'center' }}>
              {recup ? 'Mot de passe oublié' : 'Révise partout, retrouve tout.'}
            </Text>
            <Text style={{ fontSize: 14, color: c.doux, textAlign: 'center', marginTop: 8, lineHeight: 20 }}>
              {sousTitre}
            </Text>
          </View>

          <View style={{ backgroundColor: c.carte, borderRadius: 18, borderWidth: 1, borderColor: c.trait, padding: 18 }}>
            <Etiquette>EMAIL</Etiquette>
            <TextInput
              value={email}
              accessibilityLabel="Adresse e-mail"
              autoComplete="email"
              onChangeText={setEmail}
              placeholder="ton@email.fr"
              placeholderTextColor={c.doux}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              editable={!etapeCode}
              returnKeyType={oubli ? 'go' : 'next'}
              onSubmitEditing={() => {
                if (oubli) demanderCode();
                else if (refMdp.current) refMdp.current.focus();
              }}
              style={[styleChamp, { marginBottom: 14, opacity: etapeCode ? 0.7 : 1 }]}
            />

            {!recup ? (
              <>
                <Etiquette>MOT DE PASSE</Etiquette>
                <TextInput
                  ref={refMdp}
                  value={mdp}
                  accessibilityLabel="Mot de passe"
                  autoComplete={inscription ? 'new-password' : 'current-password'}
                  onChangeText={setMdp}
                  placeholder="6 caractères minimum"
                  placeholderTextColor={c.doux}
                  secureTextEntry
                  returnKeyType="go"
                  onSubmitEditing={valider}
                  style={styleChamp}
                />
                {!inscription ? (
                  <Pressable
                    onPress={() => changerMode('oubli')}
                    accessibilityRole="button"
                    style={{ alignSelf: 'flex-end', minHeight: 44, justifyContent: 'center' }}
                  >
                    <Text style={{ color: c.bleu, fontSize: 14, fontWeight: '600' }}>Mot de passe oublié ?</Text>
                  </Pressable>
                ) : null}
              </>
            ) : null}

            {etapeCode ? (
              <>
                <Etiquette>CODE REÇU PAR E-MAIL</Etiquette>
                <TextInput
                  value={code}
                  accessibilityLabel="Code reçu par e-mail"
                  autoComplete="one-time-code"
                  textContentType="oneTimeCode"
                  onChangeText={(v) => setCode(nettoyerCode(v))}
                  placeholder="12345678"
                  placeholderTextColor={c.doux}
                  keyboardType="number-pad"
                  maxLength={10}
                  returnKeyType="next"
                  onSubmitEditing={() => { if (refNouveau.current) refNouveau.current.focus(); }}
                  style={[styleChamp, { marginBottom: 14, letterSpacing: 4, fontSize: 20 }]}
                />
                <Etiquette>NOUVEAU MOT DE PASSE</Etiquette>
                <TextInput
                  ref={refNouveau}
                  value={nouveau}
                  accessibilityLabel="Nouveau mot de passe"
                  autoComplete="new-password"
                  onChangeText={setNouveau}
                  placeholder={`${MDP_MIN} caractères minimum`}
                  placeholderTextColor={c.doux}
                  secureTextEntry
                  returnKeyType="next"
                  onSubmitEditing={() => { if (refConfirmation.current) refConfirmation.current.focus(); }}
                  style={[styleChamp, { marginBottom: 14 }]}
                />
                <Etiquette>CONFIRME LE NOUVEAU MOT DE PASSE</Etiquette>
                <TextInput
                  ref={refConfirmation}
                  value={confirmation}
                  accessibilityLabel="Confirmer le nouveau mot de passe"
                  autoComplete="new-password"
                  onChangeText={setConfirmation}
                  placeholder="Le même, une seconde fois"
                  placeholderTextColor={c.doux}
                  secureTextEntry
                  returnKeyType="go"
                  onSubmitEditing={changerMotDePasse}
                  style={styleChamp}
                />
              </>
            ) : null}

            {erreur ? (
              <Text accessibilityLiveRegion="polite" style={{ color: c.craie, marginTop: 12, fontSize: 14 }}>{erreur}</Text>
            ) : null}
            {info ? (
              <Text accessibilityLiveRegion="polite" style={{ color: c.bleu, marginTop: 12, fontSize: 14, lineHeight: 20 }}>{info}</Text>
            ) : null}

            <Pressable
              onPress={action}
              disabled={enCours}
              accessibilityRole="button"
              style={{ backgroundColor: c.bleu, borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 18, opacity: enCours ? 0.6 : 1 }}
            >
              {enCours
                ? <ActivityIndicator color="#fff" />
                : <Text style={{ color: sombre ? '#0d1725' : '#fff', fontWeight: '800', fontSize: 16 }}>{titreBouton}</Text>}
            </Pressable>

            {etapeCode ? (
              <Lien
                onPress={demanderCode}
                desactive={enCours || attente > 0}
                label={attente > 0 ? `Renvoyer un code, possible dans ${attente} secondes` : 'Renvoyer un code'}
              >
                {attente > 0 ? `Renvoyer un code (dans ${attente} s)` : 'Renvoyer un code'}
              </Lien>
            ) : null}
          </View>

          {recup ? (
            <View style={{ marginTop: 8 }}>
              <Lien onPress={() => changerMode('connexion')}>Retour à la connexion</Lien>
            </View>
          ) : (
            <Pressable
              onPress={() => changerMode(inscription ? 'connexion' : 'inscription')}
              style={{ marginTop: 8, minHeight: 44, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ color: c.doux, fontSize: 14 }}>
                {inscription ? 'Déjà un compte ? ' : 'Pas encore de compte ? '}
                <Text style={{ color: c.bleu, fontWeight: '700' }}>
                  {inscription ? 'Se connecter' : 'Créer un compte'}
                </Text>
              </Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
