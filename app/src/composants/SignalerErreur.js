/**
 * « ⚠️ Signaler une erreur » : petit lien discret + fenêtre (Modal React, qui
 * marche aussi sur le web, contrairement à Alert.alert).
 * L'élève choisit le type d'erreur, écrit un message (500 caractères au plus)
 * et l'envoie dans la table Supabase `signalements` (src/cloud/signalements.js).
 * Si l'envoi échoue (table pas encore créée, pas de réseau…), un message
 * s'affiche dans la fenêtre : l'appli ne plante jamais.
 *
 * Props : t, chapitreId, niveau, cible ('fiche' | 'qcm:<id>' | 'exo:<id>'),
 *         extrait (énoncé, facultatif), style (facultatif).
 */

import { useState } from 'react';
import { View, Text, TextInput, Pressable, Modal, ScrollView, ActivityIndicator } from 'react-native';
import { envoyerSignalement } from '../cloud/signalements';
import { TYPES, LONGUEUR_MAX, longueur } from '../../lib/signalement';

export default function SignalerErreur({ t, chapitreId, niveau, cible, extrait, style }) {
  const C = t.couleur;
  const [ouvert, setOuvert] = useState(false);
  const [type, setType] = useState('contenu');
  const [message, setMessage] = useState('');
  const [envoi, setEnvoi] = useState(false);
  const [resultat, setResultat] = useState(null); // { ok, message, raison }

  const ouvrir = () => { setType('contenu'); setMessage(''); setResultat(null); setEnvoi(false); setOuvert(true); };
  const fermer = () => { if (!envoi) setOuvert(false); };

  const envoyer = async () => {
    if (envoi) return;
    setEnvoi(true);
    const r = await envoyerSignalement({ chapitreId, niveau, type, cible, message, extrait });
    setEnvoi(false);
    setResultat(r);
  };

  const n = longueur(message);
  const termine = resultat && resultat.raison !== 'invalide';
  const peutEnvoyer = message.trim().length > 0 && n <= LONGUEUR_MAX && !envoi;

  const puce = (on) => ({
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
  });

  return (
    <>
      <Pressable
        onPress={ouvrir}
        accessibilityRole="button"
        accessibilityLabel="Signaler une erreur"
        style={[{ alignSelf: 'flex-start', minHeight: 36, justifyContent: 'center', paddingVertical: 4 }, style]}
      >
        <Text style={{ color: C.attenue, fontSize: t.police.minuscule, textDecorationLine: 'underline' }}>
          ⚠️ Signaler une erreur
        </Text>
      </Pressable>

      <Modal visible={ouvert} animationType="fade" transparent onRequestClose={fermer}>
        <View style={{ flex: 1, backgroundColor: 'rgba(10,10,30,0.5)', justifyContent: 'center', padding: t.espace.l }}>
          <View
            accessibilityViewIsModal
            style={{ backgroundColor: C.fond, borderRadius: t.rayon.m, padding: t.espace.l, maxHeight: '90%', width: '100%', maxWidth: 520, alignSelf: 'center' }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: t.espace.s }}>
              <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.grande, flex: 1 }}>Signaler une erreur</Text>
              <Pressable onPress={fermer} accessibilityRole="button" accessibilityLabel="Fermer" style={{ padding: 6 }}>
                <Text style={{ color: C.attenue, fontSize: 18 }}>✕</Text>
              </Pressable>
            </View>

            {termine ? (
              <View>
                <Text
                  accessibilityLiveRegion="polite"
                  style={{
                    color: C.texte,
                    fontSize: t.police.normale,
                    lineHeight: 22,
                    padding: t.espace.m,
                    borderRadius: t.rayon.s,
                    backgroundColor: resultat.ok ? C.succesFond : C.surface,
                    marginBottom: t.espace.m,
                  }}
                >
                  {resultat.message}
                </Text>
                <Pressable
                  onPress={fermer}
                  accessibilityRole="button"
                  style={{ backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 12, alignItems: 'center' }}
                >
                  <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne }}>Fermer</Text>
                </Pressable>
              </View>
            ) : (
              <ScrollView keyboardShouldPersistTaps="handled">
                <Text style={{ color: C.attenue, fontSize: t.police.petite, marginBottom: t.espace.m, lineHeight: 19 }}>
                  Tu as repéré une erreur ? Dis-nous laquelle : un professeur relira ce passage.
                </Text>
                <Text style={{ color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginBottom: 6 }}>TYPE</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {TYPES.map((x) => (
                    <Pressable
                      key={x.id}
                      onPress={() => setType(x.id)}
                      accessibilityRole="radio"
                      accessibilityState={{ checked: type === x.id }}
                      style={puce(type === x.id)}
                    >
                      <Text style={{ color: type === x.id ? C.accentTexte : C.texte, fontWeight: '650', fontSize: t.police.petite }}>
                        {x.libelle}
                      </Text>
                    </Pressable>
                  ))}
                </View>
                <Text style={{ color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginTop: 4, marginBottom: 6 }}>TON MESSAGE</Text>
                <TextInput
                  value={message}
                  onChangeText={(v) => { setMessage(v); if (resultat) setResultat(null); }}
                  placeholder="Par exemple : « la réponse B est fausse, c’est 12 et pas 21 »"
                  placeholderTextColor={C.attenue}
                  accessibilityLabel="Décris l’erreur"
                  multiline
                  maxLength={LONGUEUR_MAX}
                  style={{
                    minHeight: 110,
                    textAlignVertical: 'top',
                    backgroundColor: C.surface,
                    borderColor: C.trait,
                    borderWidth: 1,
                    borderRadius: t.rayon.s,
                    padding: t.espace.m,
                    color: C.texte,
                    fontSize: t.police.normale,
                  }}
                />
                <Text style={{ color: n > LONGUEUR_MAX ? C.erreur : C.attenue, fontSize: t.police.minuscule, textAlign: 'right', marginTop: 4 }}>
                  {n} / {LONGUEUR_MAX}
                </Text>
                {resultat?.raison === 'invalide' && (
                  <Text style={{ color: C.erreur, fontSize: t.police.petite, marginTop: 4 }}>{resultat.message}</Text>
                )}
                <Pressable
                  onPress={envoyer}
                  disabled={!peutEnvoyer}
                  accessibilityRole="button"
                  accessibilityState={{ disabled: !peutEnvoyer }}
                  style={{
                    backgroundColor: C.accent,
                    borderRadius: t.rayon.m,
                    paddingVertical: 12,
                    alignItems: 'center',
                    marginTop: t.espace.m,
                    opacity: peutEnvoyer ? 1 : 0.5,
                  }}
                >
                  {envoi ? (
                    <ActivityIndicator color={C.accentTexte} />
                  ) : (
                    <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne }}>Envoyer</Text>
                  )}
                </Pressable>
                <Pressable onPress={fermer} accessibilityRole="button" style={{ paddingVertical: 12, alignItems: 'center' }}>
                  <Text style={{ color: C.attenue, fontSize: t.police.normale }}>Annuler</Text>
                </Pressable>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}
