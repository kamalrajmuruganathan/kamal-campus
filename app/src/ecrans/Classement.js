/**
 * Classement de la semaine entre amis.
 *
 * Compare les XP gagnés depuis lundi par l'élève et ses amis (table Supabase
 * « profils_publics », colonnes xp_semaine / semaine). Tant que le SQL
 * outils/sql/classement_amis.sql n'a pas été exécuté, l'écran compare les XP totaux.
 * L'écran publie aussi mes XP (au plus une fois toutes les 5 minutes).
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../useTheme';
import { useProgression } from '../progression/Contexte';
import { useAuth } from '../cloud/AuthContexte';
import { classementAmis, publierScoreSiBesoin } from '../cloud/social';
import { etatSemaine } from '../../lib/classement';
import { dateLocale } from '../../lib/serie';

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août',
  'septembre', 'octobre', 'novembre', 'décembre'];
const MEDAILLES = ['🥇', '🥈', '🥉'];

/** « 2026-10-05 » → « lundi 5 octobre » (« 1er » pour le premier du mois). */
function libelleLundi(iso) {
  const [, m, j] = String(iso).split('-').map(Number);
  if (!m || !j) return '';
  return `lundi ${j === 1 ? '1er' : j} ${MOIS[m - 1]}`;
}
function libelleRang(r) {
  return r === 1 ? '1ʳᵉ place' : `${r}ᵉ place`;
}
function nombre(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // espace fine insécable des milliers
}

export default function Classement({ navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { profil, definirReglages } = useProgression();
  const { utilisateur } = useAuth();
  const connecte = !!utilisateur?.id;

  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState('');
  const [donnees, setDonnees] = useState(null); // { lignes, avecSemaine, semaine, nbAmis }

  // Point de départ de la semaine gardé dans le profil (remis à jour chaque lundi).
  const etat = etatSemaine(profil, dateLocale(new Date()));
  useEffect(() => {
    if (etat.change) definirReglages({ semaineXp: etat.semaineXp, xpDebutSemaine: etat.xpDebutSemaine });
  }, [etat.change, etat.semaineXp, etat.xpDebutSemaine]); // eslint-disable-line react-hooks/exhaustive-deps

  // Le profil le plus récent, sans relancer le chargement à chaque petite modification.
  const profilRef = useRef(profil);
  profilRef.current = profil;

  const charger = useCallback(async () => {
    if (!connecte) { setChargement(false); return; }
    setErreur('');
    try {
      await publierScoreSiBesoin(profilRef.current);
      setDonnees(await classementAmis(profilRef.current));
    } catch (e) {
      setErreur(e?.message || 'Impossible de charger le classement.');
    } finally {
      setChargement(false);
    }
  }, [connecte]);

  // Recharge à chaque fois que l'écran redevient visible.
  useFocusEffect(useCallback(() => { charger(); }, [charger]));

  const carte = {
    backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1,
    borderRadius: t.rayon.l, padding: t.espace.m, marginBottom: t.espace.m,
  };
  const bouton = { backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 10, paddingHorizontal: 16, alignItems: 'center', alignSelf: 'flex-start', marginTop: t.espace.m };
  const boutonTexte = { color: C.accentTexte ?? '#fff', fontWeight: '700' };

  if (!connecte) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
        <View style={{ padding: t.espace.l }}>
          <View style={carte}>
            <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>Classement entre amis</Text>
            <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
              Connecte-toi pour retrouver tes amis et comparer vos XP de la semaine.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (chargement && !donnees) {
    return (
      <View style={{ flex: 1, backgroundColor: C.fond, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={C.accent} />
      </View>
    );
  }

  const lignes = donnees?.lignes ?? [];
  const avecSemaine = donnees ? donnees.avecSemaine : true;
  const valeur = (l) => (avecSemaine ? l.xpSemaine : l.xp);
  const moi = lignes.find((l) => l.moi);
  const aucunAmi = donnees && donnees.nbAmis === 0;
  const podium = lignes.length >= 2 ? lignes.slice(0, 3) : [];
  // Ordre visuel du podium : 2ᵉ, 1ᵉʳ, 3ᵉ.
  const ordrePodium = podium.length === 3 ? [podium[1], podium[0], podium[2]] : podium.length === 2 ? [podium[1], podium[0]] : [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {/* En-tête : ma place */}
        <View style={[carte, { alignItems: 'center', borderColor: C.accent, borderWidth: 2 }]}>
          <Text style={{ fontSize: 40 }}>🏆</Text>
          <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: 4 }}>
            {avecSemaine ? 'Classement de la semaine' : 'Classement entre amis'}
          </Text>
          {avecSemaine && donnees?.semaine ? (
            <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
              Depuis le {libelleLundi(donnees.semaine)}
            </Text>
          ) : null}
          {moi && lignes.length > 1 ? (
            <Text style={{ color: C.accent, fontSize: t.police.normale, fontWeight: '700', marginTop: 8 }}>
              Tu es à la {libelleRang(moi.rang)} sur {lignes.length} · {nombre(valeur(moi))} XP
            </Text>
          ) : moi ? (
            <Text style={{ color: C.accent, fontSize: t.police.normale, fontWeight: '700', marginTop: 8 }}>
              {nombre(valeur(moi))} XP {avecSemaine ? 'cette semaine' : 'au total'}
            </Text>
          ) : null}
        </View>

        {/* SQL pas encore exécuté */}
        {donnees && !avecSemaine ? (
          <View style={[carte, { backgroundColor: C.erreurFond ?? C.surface }]}>
            <Text style={{ color: C.texte, fontSize: t.police.petite, lineHeight: 19 }}>
              Le classement de la semaine n’est pas encore activé : pour l’instant, on compare les XP totaux.
            </Text>
          </View>
        ) : null}

        {erreur ? (
          <View style={carte}>
            <Text style={{ color: C.erreur, fontSize: t.police.petite }}>{erreur}</Text>
            <Pressable onPress={() => { setChargement(true); charger(); }} style={bouton}>
              <Text style={boutonTexte}>Réessayer</Text>
            </Pressable>
          </View>
        ) : null}

        {/* Aucun ami */}
        {aucunAmi ? (
          <View style={carte}>
            <Text style={{ color: C.texte, fontSize: t.police.normale, fontWeight: '700' }}>Ajoute des amis pour vous comparer</Text>
            <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
              Cherche le pseudo d’un camarade et envoie-lui une demande : dès qu’il l’accepte, vous apparaissez ici tous les deux.
            </Text>
            <Pressable onPress={() => navigation.navigate('Amis')} style={bouton}>
              <Text style={boutonTexte}>👥 Trouver des amis</Text>
            </Pressable>
          </View>
        ) : null}

        {/* Podium */}
        {ordrePodium.length > 0 ? (
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', gap: t.espace.s, marginBottom: t.espace.m }}>
            {ordrePodium.map((l) => {
              const hauteur = l.rang === 1 ? 96 : l.rang === 2 ? 72 : 56;
              return (
                <View key={l.id} style={{ flex: 1, maxWidth: 130, alignItems: 'center' }}>
                  <Text style={{ fontSize: 30 }}>{l.avatar ?? '🎓'}</Text>
                  <Text numberOfLines={1} style={{ color: C.texte, fontWeight: l.moi ? '800' : '600', fontSize: t.police.petite, marginTop: 2, maxWidth: '100%' }}>
                    {l.moi ? 'Toi' : l.pseudo}
                  </Text>
                  <Text style={{ color: C.attenue, fontSize: t.police.minuscule, fontVariant: ['tabular-nums'] }}>{nombre(valeur(l))} XP</Text>
                  <View style={{
                    width: '100%', height: hauteur, marginTop: 4, borderTopLeftRadius: t.rayon.m, borderTopRightRadius: t.rayon.m,
                    backgroundColor: l.moi ? C.accent : C.surface, borderWidth: 1, borderColor: l.moi ? C.accent : C.trait,
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Text style={{ fontSize: 26 }}>{MEDAILLES[l.rang - 1] ?? l.rang}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}

        {/* Liste complète */}
        {lignes.length > 1 ? (
          <Text style={{ color: C.attenue, fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginBottom: 2 }}>
            {avecSemaine ? 'XP GAGNÉS DEPUIS LUNDI' : 'XP TOTAUX'}
          </Text>
        ) : null}
        {lignes.length > 1 && lignes.map((l) => (
          <View
            key={l.id}
            style={{
              flexDirection: 'row', alignItems: 'center', padding: t.espace.m, marginTop: t.espace.s,
              borderRadius: t.rayon.m,
              backgroundColor: l.moi ? C.accent + '22' : C.surface,
              borderWidth: l.moi ? 1.5 : 1, borderColor: l.moi ? C.accent : C.trait,
            }}
          >
            <Text style={{ width: 30, color: C.attenue, fontWeight: '800' }}>{l.rang}</Text>
            <Text style={{ fontSize: 20, marginRight: 8 }}>{l.avatar ?? '🎓'}</Text>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={1} style={{ color: C.texte, fontWeight: l.moi ? '800' : '600' }}>
                {l.pseudo}{l.moi ? ' (toi)' : ''}
              </Text>
              {avecSemaine ? (
                <Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>{nombre(l.xp)} XP au total</Text>
              ) : null}
            </View>
            <Text style={{ color: C.texte, fontWeight: '700', fontVariant: ['tabular-nums'] }}>{nombre(valeur(l))} XP</Text>
          </View>
        ))}

        <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: t.espace.l, lineHeight: 17 }}>
          {avecSemaine
            ? 'Le classement repart de zéro chaque lundi. Tes XP sont envoyés à tes amis quand tu ouvres cet écran (au plus toutes les 5 minutes) : un ami qui n’a pas encore ouvert son classement cette semaine apparaît avec 0 XP.'
            : 'Tes XP sont envoyés à tes amis quand tu ouvres cet écran (au plus toutes les 5 minutes).'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
