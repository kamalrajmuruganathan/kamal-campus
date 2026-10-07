/**
 * Espace parent — un parent suit la progression de son enfant.
 *
 * Deux parties :
 *  - « Je suis l'élève » : obtenir un code (6 caractères, valable 24 h) à donner
 *    à son parent, et voir / retirer les parents qui le suivent ;
 *  - « Je suis le parent » : saisir le code de son enfant, puis consulter une
 *    fiche de suivi (chiffres clés, semaine, matières, dernières sessions).
 *
 * Chacun utilise SON propre compte. Données : outils/sql/espace_parent.sql
 * (si le script n'a pas encore été exécuté, un message clair s'affiche).
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  View, Text, TextInput, Pressable, ScrollView, ActivityIndicator, Alert, Platform, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../useTheme';
import { couleurMatiere } from '../theme';
import { useAuth } from '../cloud/AuthContexte';
import {
  creerCodeParent, monCodeParent, listerMesParents, retirerParent,
  lierEnfant, listerMesEnfants, lireSuiviEnfant, delierEnfant,
} from '../cloud/parents';
import { chapitreParId, LIBELLES_MATIERE } from '../contenu-index';
import { dateLocale } from '../../lib/serie';
import { resumeEnfant, pourcentage, texteDerniereActivite } from '../../lib/parent';

const WEB = Platform.OS === 'web';
const JOURS_COURTS = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];

function avertir(titre, message) {
  if (WEB && typeof window !== 'undefined') window.alert(message ? `${titre}\n\n${message}` : titre);
  else Alert.alert(titre, message);
}
function confirmer(titre, message, libelleOk, action) {
  if (WEB && typeof window !== 'undefined') { if (window.confirm(`${titre}\n\n${message}`)) action(); return; }
  Alert.alert(titre, message, [
    { text: 'Annuler', style: 'cancel' },
    { text: libelleOk, style: 'destructive', onPress: action },
  ]);
}

/** « mercredi 8 octobre à 18 h 05 » */
function dateHeure(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const jour = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  return `${jour} à ${d.getHours()} h ${String(d.getMinutes()).padStart(2, '0')}`;
}
/** « 8 oct. » */
function dateCourte(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}
function jourSemaine(aaaammjj) {
  const [a, m, j] = aaaammjj.split('-').map(Number);
  return JOURS_COURTS[new Date(Date.UTC(a, m - 1, j)).getUTCDay()];
}
const pluriel = (n, mot, motPluriel = `${mot}s`) => `${n} ${n > 1 ? motPluriel : mot}`;

export default function EspaceParent({ navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { utilisateur } = useAuth();
  const [onglet, setOnglet] = useState('eleve');
  const [nonActive, setNonActive] = useState(false);

  // Une erreur « non activé » bascule tout l'écran sur le message d'explication.
  const gererErreur = useCallback((e, titre) => {
    if (e?.nonActive) { setNonActive(true); return; }
    avertir(titre, e?.message || 'Erreur inattendue.');
  }, []);

  if (!utilisateur) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
        <View style={{ padding: t.espace.l }}>
          <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>Connexion nécessaire</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.normale, marginTop: t.espace.s, lineHeight: 21 }}>
            L’espace parent relie deux comptes Kamal Campus : celui de l’élève et celui du parent.
            Connecte-toi d’abord pour l’utiliser.
          </Text>
          <Bouton t={t} libelle="Retour" onPress={() => navigation?.goBack?.()} style={{ marginTop: t.espace.l }} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }} keyboardShouldPersistTaps="handled">
        <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>👨‍👩‍👧 Espace parent</Text>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4, lineHeight: 19 }}>
          Un parent peut suivre la progression de son enfant. Chacun utilise son propre compte.
        </Text>

        {/* Onglets */}
        <View style={[st.onglets, { backgroundColor: C.surface, borderColor: C.trait, borderRadius: t.rayon.m, marginTop: t.espace.m }]}>
          {[['eleve', 'Je suis l’élève'], ['parent', 'Je suis le parent']].map(([cle, libelle]) => {
            const actif = onglet === cle;
            return (
              <Pressable
                key={cle}
                onPress={() => setOnglet(cle)}
                accessibilityRole="tab"
                accessibilityState={{ selected: actif }}
                style={{ flex: 1, paddingVertical: 10, borderRadius: t.rayon.s, backgroundColor: actif ? C.accent : 'transparent', alignItems: 'center' }}
              >
                <Text style={{ color: actif ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.normale }}>{libelle}</Text>
              </Pressable>
            );
          })}
        </View>

        {nonActive ? (
          <View style={{ marginTop: t.espace.l, padding: t.espace.m, borderRadius: t.rayon.m, backgroundColor: C.alerteFond ?? C.surface }}>
            <Text style={{ color: C.alerte ?? C.texte, fontWeight: '800', fontSize: t.police.normale }}>Espace parent pas encore activé</Text>
            <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
              Cette fonction sera disponible très bientôt. (Pour l’administrateur : exécuter le script
              outils/sql/espace_parent.sql dans Supabase.)
            </Text>
          </View>
        ) : onglet === 'eleve' ? (
          <PartieEleve t={t} gererErreur={gererErreur} />
        ) : (
          <PartieParent t={t} gererErreur={gererErreur} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── « Je suis l'élève » ─────────────────────────────────────────────────────

function PartieEleve({ t, gererErreur }) {
  const C = t.couleur;
  const [chargement, setChargement] = useState(true);
  const [code, setCode] = useState(null);
  const [parents, setParents] = useState([]);
  const [occupe, setOccupe] = useState(false);

  const charger = useCallback(async () => {
    try {
      const [c, p] = await Promise.all([monCodeParent(), listerMesParents()]);
      setCode(c); setParents(p);
    } catch (e) { gererErreur(e, 'Espace parent'); }
    finally { setChargement(false); }
  }, [gererErreur]);

  useEffect(() => { charger(); }, [charger]);

  async function nouveauCode() {
    setOccupe(true);
    try { setCode(await creerCodeParent()); }
    catch (e) { gererErreur(e, 'Code'); }
    finally { setOccupe(false); }
  }

  function retirer(p) {
    confirmer('Retirer ce parent ?', `${p.pseudo} ne pourra plus voir ta progression.`, 'Retirer', async () => {
      try { await retirerParent(p.id); await charger(); }
      catch (e) { gererErreur(e, 'Retirer'); }
    });
  }

  if (chargement) return <ActivityIndicator style={{ marginTop: t.espace.xl }} color={C.accent} />;

  return (
    <View style={{ marginTop: t.espace.l }}>
      <Carte t={t}>
        <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>Mon code pour un parent</Text>
        {code ? (
          <>
            <Text
              selectable
              accessibilityLabel={`Code : ${code.code.split('').join(' ')}`}
              style={{ color: C.accent, fontSize: 38, fontWeight: '800', letterSpacing: 8, textAlign: 'center', marginTop: t.espace.m, fontVariant: ['tabular-nums'] }}
            >
              {code.code}
            </Text>
            <Text style={{ color: C.attenue, fontSize: t.police.petite, textAlign: 'center', marginTop: 4 }}>
              Valable jusqu’au {dateHeure(code.expireLe)}, pour un seul parent.
            </Text>
          </>
        ) : (
          <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 6 }}>Aucun code en cours.</Text>
        )}
        <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: t.espace.m, lineHeight: 20 }}>
          Donne ce code à ton parent. Sur son téléphone, il se connecte à Kamal Campus avec son propre
          compte, ouvre « Espace parent », choisit « Je suis le parent » et tape le code.
        </Text>
        <Bouton
          t={t}
          libelle={occupe ? 'Patiente…' : (code ? 'Obtenir un nouveau code' : 'Obtenir un code')}
          onPress={nouveauCode}
          desactive={occupe}
          style={{ marginTop: t.espace.m }}
        />
      </Carte>

      <Text style={[st.section, { color: C.attenue, marginTop: t.espace.l }]}>PARENTS QUI ME SUIVENT</Text>
      {parents.length === 0 ? (
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: t.espace.s }}>Personne ne suit ta progression pour l’instant.</Text>
      ) : parents.map((p) => (
        <View key={p.id} style={[st.ligne, { backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, marginTop: t.espace.s, padding: t.espace.m }]}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.normale }}>{p.pseudo}</Text>
            {p.creeLe ? <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>Depuis le {dateCourte(p.creeLe)}</Text> : null}
          </View>
          <Pressable onPress={() => retirer(p)} accessibilityRole="button" style={{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: t.rayon.s, backgroundColor: C.erreurFond }}>
            <Text style={{ color: C.erreur, fontWeight: '700', fontSize: t.police.petite }}>Retirer</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

// ── « Je suis le parent » ───────────────────────────────────────────────────

function PartieParent({ t, gererErreur }) {
  const C = t.couleur;
  const [chargement, setChargement] = useState(true);
  const [enfants, setEnfants] = useState([]);
  const [choisi, setChoisi] = useState(null);
  const [saisie, setSaisie] = useState('');
  const [occupe, setOccupe] = useState(false);

  const charger = useCallback(async (selection) => {
    try {
      const liste = await listerMesEnfants();
      setEnfants(liste);
      setChoisi((avant) => {
        const voulu = selection ?? avant;
        return liste.some((e) => e.id === voulu) ? voulu : (liste[0]?.id ?? null);
      });
    } catch (e) { gererErreur(e, 'Espace parent'); }
    finally { setChargement(false); }
  }, [gererErreur]);

  useEffect(() => { charger(); }, [charger]);

  async function valider() {
    setOccupe(true);
    try {
      const id = await lierEnfant(saisie);
      setSaisie('');
      await charger(id);
    } catch (e) { gererErreur(e, 'Code'); }
    finally { setOccupe(false); }
  }

  function arreter(enfant) {
    confirmer('Ne plus suivre cet enfant ?', `Vous ne verrez plus la progression de ${enfant.nom}. Il faudra un nouveau code pour la suivre de nouveau.`, 'Ne plus suivre', async () => {
      try { await delierEnfant(enfant.id); await charger(); }
      catch (e) { gererErreur(e, 'Ne plus suivre'); }
    });
  }

  if (chargement) return <ActivityIndicator style={{ marginTop: t.espace.xl }} color={C.accent} />;

  const enfant = enfants.find((e) => e.id === choisi) || null;
  const codeOk = saisie.replace(/[^A-Za-z0-9]/g, '').length === 6;

  return (
    <View style={{ marginTop: t.espace.l }}>
      <Carte t={t}>
        <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>Suivre un enfant</Text>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4, lineHeight: 19 }}>
          Sur le compte de votre enfant : Espace parent → « Je suis l’élève » → « Obtenir un code ».
          Tapez ici les 6 caractères affichés.
        </Text>
        <View style={{ flexDirection: 'row', marginTop: t.espace.m, gap: t.espace.s }}>
          <TextInput
            value={saisie}
            onChangeText={(v) => setSaisie(v.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6))}
            placeholder="ex. K7PM3Q"
            placeholderTextColor={C.attenue}
            autoCapitalize="characters"
            autoCorrect={false}
            autoComplete="off"
            maxLength={6}
            onSubmitEditing={() => { if (codeOk && !occupe) valider(); }}
            accessibilityLabel="Code de l’enfant"
            style={{
              flex: 1, minWidth: 0, borderWidth: 1, borderColor: C.trait, borderRadius: t.rayon.s, backgroundColor: C.fond,
              color: C.texte, fontSize: t.police.moyenne, letterSpacing: 4, paddingHorizontal: 12, paddingVertical: 10, fontWeight: '700',
            }}
          />
          <Bouton t={t} libelle={occupe ? '…' : 'Suivre'} onPress={valider} desactive={!codeOk || occupe} />
        </View>
      </Carte>

      <Text style={[st.section, { color: C.attenue, marginTop: t.espace.l }]}>ENFANTS SUIVIS</Text>
      {enfants.length === 0 ? (
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: t.espace.s }}>Aucun enfant suivi pour l’instant.</Text>
      ) : (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.s }}>
          {enfants.map((e) => {
            const actif = e.id === choisi;
            return (
              <Pressable
                key={e.id}
                onPress={() => setChoisi(e.id)}
                accessibilityRole="button"
                accessibilityState={{ selected: actif }}
                style={{ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 999, borderWidth: 1.5, borderColor: actif ? C.accent : C.trait, backgroundColor: actif ? C.accent + '22' : C.surface }}
              >
                <Text style={{ color: C.texte, fontWeight: actif ? '800' : '600' }}>{e.nom}</Text>
              </Pressable>
            );
          })}
        </View>
      )}

      {enfant ? <FicheSuivi key={enfant.id} t={t} enfant={enfant} gererErreur={gererErreur} onArreter={() => arreter(enfant)} /> : null}
    </View>
  );
}

// ── Fiche de suivi d'un enfant ──────────────────────────────────────────────

function FicheSuivi({ t, enfant, gererErreur, onArreter }) {
  const C = t.couleur;
  const [chargement, setChargement] = useState(true);
  const [data, setData] = useState(null);

  const charger = useCallback(async () => {
    setChargement(true);
    try { setData(await lireSuiviEnfant(enfant.id)); }
    catch (e) { gererErreur(e, 'Suivi'); }
    finally { setChargement(false); }
  }, [enfant.id, gererErreur]);

  useEffect(() => { charger(); }, [charger]);

  const aujourdhui = dateLocale(new Date());
  const r = useMemo(() => resumeEnfant(data, {
    aujourdhui,
    matiereDeChapitre: (id) => chapitreParId(id)?.matiere ?? null,
    libelleMatiere: (m) => LIBELLES_MATIERE[m] ?? m,
  }), [data, aujourdhui]);

  if (chargement) return <ActivityIndicator style={{ marginTop: t.espace.xl }} color={C.accent} />;

  const nom = r.prenom || enfant.nom;
  const maxJour = Math.max(1, ...(r.semaine?.jours || []).map((j) => j.xp));
  const maxMat = Math.max(1, ...r.matieres.map((m) => m.xp));

  return (
    <View style={{ marginTop: t.espace.l }}>
      <View style={[st.ligne, { alignItems: 'flex-start' }]}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>{nom}</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
            Dernière activité : {texteDerniereActivite(r.joursDepuisDerniereActivite)}
            {enfant.pseudo && enfant.pseudo !== nom ? ` · pseudo « ${enfant.pseudo} »` : ''}
          </Text>
        </View>
        <Pressable onPress={charger} accessibilityRole="button" accessibilityLabel="Actualiser" style={{ padding: 8 }}>
          <Text style={{ color: C.accent, fontWeight: '700', fontSize: t.police.petite }}>↻ Actualiser</Text>
        </Pressable>
      </View>

      {r.vide ? (
        <Carte t={t} style={{ marginTop: t.espace.m }}>
          <Text style={{ color: C.texte, fontSize: t.police.normale, lineHeight: 21 }}>
            Aucune progression enregistrée pour l’instant. Elle apparaîtra ici dès la première session
            (QCM, cartes de révision ou énigme) faite avec ce compte.
          </Text>
        </Carte>
      ) : (
        <>
          {/* Chiffres clés */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.m }}>
            <Chiffre t={t} valeur={`Niveau ${r.niveau}`} legende={r.rang} />
            <Chiffre t={t} valeur={`${r.xp} XP`} legende="points gagnés" />
            <Chiffre t={t} valeur={`🔥 ${r.serieJours}`} legende={`${r.serieJours > 1 ? 'jours de suite' : 'jour de suite'} (record : ${r.meilleureSerieJours})`} />
            <Chiffre t={t} valeur={String(r.qcmTermines)} legende={r.qcmTermines > 1 ? 'QCM terminés' : 'QCM terminé'} />
            <Chiffre t={t} valeur={pourcentage(r.tauxReussite)} legende={r.reponsesTotal ? `de bonnes réponses (${r.reponsesJustes} sur ${r.reponsesTotal})` : 'de bonnes réponses'} />
            {r.exercicesReussis > 0 ? (
              <Chiffre t={t} valeur={String(r.exercicesReussis)} legende={r.exercicesReussis > 1 ? 'exercices réussis' : 'exercice réussi'} />
            ) : null}
            <Chiffre t={t} valeur={String(r.chapitresTravailles)} legende={`${r.chapitresTravailles > 1 ? 'chapitres travaillés' : 'chapitre travaillé'}, dont ${r.chapitresMaitrises} ${r.chapitresMaitrises > 1 ? 'maîtrisés' : 'maîtrisé'}`} />
          </View>

          {/* Objectif du jour */}
          <Carte t={t} style={{ marginTop: t.espace.m }}>
            <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.normale }}>Objectif du jour</Text>
            <View style={[st.piste, { backgroundColor: C.trait, marginTop: t.espace.s }]}>
              <View style={{ width: `${Math.round(Math.min(1, r.xpAujourdhui / r.objectifQuotidien) * 100)}%`, height: '100%', backgroundColor: r.objectifAtteint ? C.succes : C.accent, borderRadius: 4 }} />
            </View>
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 6 }}>
              {r.xpAujourdhui} / {r.objectifQuotidien} XP aujourd’hui{r.objectifAtteint ? ' · objectif atteint ✓' : ''}
            </Text>
          </Carte>

          {/* 7 derniers jours */}
          {r.semaine ? (
            <Carte t={t} style={{ marginTop: t.espace.m }}>
              <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.normale }}>Les 7 derniers jours</Text>
              <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
                {pluriel(r.semaine.sessions, 'session')} · {r.semaine.xp} XP · {r.semaine.joursActifs > 1 ? `${r.semaine.joursActifs} jours actifs` : `${r.semaine.joursActifs} jour actif`} sur 7
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 90, marginTop: t.espace.m, gap: 6 }}>
                {r.semaine.jours.map((j) => (
                  <View key={j.date} style={{ flex: 1, alignItems: 'center' }} accessibilityLabel={`${jourSemaine(j.date)} : ${j.xp} XP, ${pluriel(j.sessions, 'session')}`}>
                    <Text style={{ color: C.attenue, fontSize: 10, marginBottom: 2 }}>{j.xp || ''}</Text>
                    <View style={{ width: '100%', height: Math.max(3, Math.round((j.xp / maxJour) * 56)), borderRadius: 4, backgroundColor: j.sessions ? C.accent : C.trait }} />
                    <Text style={{ color: j.date === aujourdhui ? C.texte : C.attenue, fontSize: 11, marginTop: 4, fontWeight: j.date === aujourdhui ? '800' : '500' }}>{jourSemaine(j.date)}</Text>
                  </View>
                ))}
              </View>
              {r.semaine.partielle ? (
                <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: t.espace.s }}>
                  Seules les 30 dernières sessions sont conservées : l’activité réelle peut être un peu plus élevée.
                </Text>
              ) : null}
            </Carte>
          ) : null}

          {/* Matières */}
          {r.matieres.length > 0 ? (
            <>
              <Text style={[st.section, { color: C.attenue, marginTop: t.espace.l }]}>MATIÈRES LES PLUS TRAVAILLÉES</Text>
              {r.matieres.map((m) => {
                const coul = couleurMatiere(t, m.matiere) || C.accent;
                const details = [m.xp ? `${m.xp} XP` : null, m.chapitres ? pluriel(m.chapitres, 'chapitre') : null].filter(Boolean).join(' · ');
                return (
                  <View key={m.matiere} style={{ marginTop: t.espace.s }}>
                    <View style={st.ligne}>
                      <Text style={{ flex: 1, color: C.texte, fontWeight: '600', fontSize: t.police.petite }}>{m.libelle}</Text>
                      <Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>{details}</Text>
                    </View>
                    <View style={[st.piste, { backgroundColor: C.trait, marginTop: 4 }]}>
                      <View style={{ width: `${Math.max(4, Math.round((m.xp / maxMat) * 100))}%`, height: '100%', backgroundColor: coul, borderRadius: 4 }} />
                    </View>
                  </View>
                );
              })}
            </>
          ) : null}

          {/* Dernières sessions */}
          {r.recents.length > 0 ? (
            <>
              <Text style={[st.section, { color: C.attenue, marginTop: t.espace.l }]}>DERNIÈRES SESSIONS</Text>
              {r.recents.map((s, i) => (
                <View key={`${s.date}-${i}`} style={[st.ligne, { backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, marginTop: t.espace.s, padding: t.espace.m }]}>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <Text style={{ color: C.texte, fontWeight: '600', fontSize: t.police.petite }} numberOfLines={2}>{s.titre}</Text>
                    <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
                      {s.date ? dateCourte(s.date) : ''}{s.libelleMatiere ? ` · ${s.libelleMatiere}` : ''}
                    </Text>
                  </View>
                  {s.total > 0 ? (
                    <Text style={{ color: s.justes / s.total >= 0.8 ? C.succes : (s.justes / s.total < 0.5 ? C.erreur : C.texte), fontWeight: '800', fontVariant: ['tabular-nums'] }}>
                      {s.justes}/{s.total}
                    </Text>
                  ) : null}
                </View>
              ))}
            </>
          ) : null}

          {/* À revoir */}
          {r.aRevoir.length > 0 ? (
            <>
              <Text style={[st.section, { color: C.attenue, marginTop: t.espace.l }]}>CHAPITRES À REVOIR</Text>
              <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 4 }}>Meilleur score inférieur à 50 %.</Text>
              {r.aRevoir.map((c) => (
                <View key={c.id} style={[st.ligne, { marginTop: t.espace.s }]}>
                  <Text style={{ flex: 1, color: C.texte, fontSize: t.police.petite }} numberOfLines={2}>{chapitreParId(c.id)?.titre || c.titre}</Text>
                  <Text style={{ color: C.erreur, fontWeight: '700', fontSize: t.police.petite }}>{pourcentage(c.score)}</Text>
                </View>
              ))}
            </>
          ) : null}
        </>
      )}

      <Pressable onPress={onArreter} accessibilityRole="button" style={{ marginTop: t.espace.xl, alignSelf: 'center', padding: 10 }}>
        <Text style={{ color: C.erreur, fontWeight: '700', fontSize: t.police.petite }}>Ne plus suivre {nom}</Text>
      </Pressable>
    </View>
  );
}

// ── Petits composants ───────────────────────────────────────────────────────

function Carte({ t, style, children }) {
  return (
    <View style={[{ padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m, borderWidth: 1, borderColor: t.couleur.trait }, style]}>
      {children}
    </View>
  );
}

function Chiffre({ t, valeur, legende }) {
  return (
    <View style={{ flexGrow: 1, flexBasis: '45%', minWidth: 140, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m, borderWidth: 1, borderColor: t.couleur.trait }}>
      <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800', fontVariant: ['tabular-nums'] }}>{valeur}</Text>
      <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2, lineHeight: 16 }}>{legende}</Text>
    </View>
  );
}

function Bouton({ t, libelle, onPress, desactive = false, style }) {
  return (
    <Pressable
      onPress={desactive ? undefined : onPress}
      accessibilityRole="button"
      accessibilityState={{ disabled: desactive }}
      style={[{ paddingVertical: 12, paddingHorizontal: 18, borderRadius: t.rayon.m, backgroundColor: t.couleur.accent, opacity: desactive ? 0.5 : 1, alignItems: 'center', justifyContent: 'center' }, style]}
    >
      <Text style={{ color: t.couleur.accentTexte, fontWeight: '700', fontSize: t.police.normale }}>{libelle}</Text>
    </Pressable>
  );
}

const st = StyleSheet.create({
  onglets: { flexDirection: 'row', padding: 4, borderWidth: 1, gap: 4 },
  ligne: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  piste: { height: 8, borderRadius: 4, overflow: 'hidden' },
  section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8 },
});
