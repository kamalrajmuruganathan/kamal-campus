import { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator, Alert } from 'react-native';
import { useSombre } from '../useSombre';
import { theme } from '../theme';
import { listerMessages, envoyerMessage, marquerLus, abonnerConversation, monId } from '../cloud/chat';

export default function Discussion({ route }) {
  const { amiId, pseudo } = route.params ?? {};
  const sombre = useSombre();
  const C = theme(sombre).couleur;
  const [messages, setMessages] = useState([]);
  const [texte, setTexte] = useState('');
  const [chargement, setChargement] = useState(true);
  const [moi, setMoi] = useState(null);
  const scrollRef = useRef(null);

  const versLeBas = useCallback(() => {
    requestAnimationFrame(() => scrollRef.current?.scrollToEnd({ animated: true }));
  }, []);

  useEffect(() => {
    let desabonner = () => {};
    (async () => {
      try {
        const id = await monId();
        setMoi(id);
        setMessages(await listerMessages(amiId));
        marquerLus(amiId).catch(() => {});
        desabonner = abonnerConversation(id, amiId, (m) => {
          setMessages((prev) => (prev.some((x) => x.id === m.id) ? prev : [...prev, m]));
          marquerLus(amiId).catch(() => {});
        });
      } catch (e) { Alert.alert('Discussion', e.message ?? 'Erreur.'); }
      finally { setChargement(false); versLeBas(); }
    })();
    return () => desabonner();
  }, [amiId, versLeBas]);

  useEffect(() => { versLeBas(); }, [messages, versLeBas]);

  async function envoyer() {
    const t = texte.trim();
    if (!t) return;
    setTexte('');
    try {
      const m = await envoyerMessage(amiId, t);
      if (m) setMessages((prev) => (prev.some((x) => x.id === m.id) ? prev : [...prev, m]));
    } catch (e) { Alert.alert('Envoi', e.message ?? 'Impossible.'); setTexte(t); }
  }

  if (chargement) {
    return <View style={{ flex: 1, backgroundColor: C.fond, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator color={C.accent} /></View>;
  }

  const bulleRecue = sombre ? '#2a2f3a' : '#e9e6dc';

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: C.fond }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <ScrollView ref={scrollRef} style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        {messages.length === 0 ? (
          <Text style={{ color: C.texte, opacity: 0.5, textAlign: 'center', marginTop: 24 }}>Dis bonjour à {pseudo} 👋</Text>
        ) : messages.map((m) => {
          const amoi = m.expediteur === moi;
          return (
            <View key={m.id} style={{ alignSelf: amoi ? 'flex-end' : 'flex-start', backgroundColor: amoi ? C.accent : bulleRecue, borderRadius: 14, paddingVertical: 8, paddingHorizontal: 12, marginBottom: 8, maxWidth: '80%' }}>
              <Text style={{ color: amoi ? '#fff' : C.texte, fontSize: 15 }}>{m.contenu}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{ flexDirection: 'row', gap: 8, padding: 10, borderTopWidth: 1, borderTopColor: C.trait }}>
        <TextInput value={texte} onChangeText={setTexte} placeholder={`Message à ${pseudo}...`} placeholderTextColor={sombre ? '#888' : '#aaa'} style={{ flex: 1, borderColor: C.trait, borderWidth: 1, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 10, color: C.texte }} onSubmitEditing={envoyer} returnKeyType="send" />
        <Pressable onPress={envoyer} style={{ backgroundColor: C.accent, borderRadius: 20, paddingHorizontal: 18, justifyContent: 'center' }}><Text style={{ color: '#fff', fontWeight: '700' }}>Envoyer</Text></Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
