/**
 * Mes classes — côté élève.
 *
 * L'élève rejoint la classe de son professeur avec un code de 6 caractères et
 * choisit le pseudo que le professeur verra. Il voit ses devoirs (chapitre, type,
 * date limite, consigne) et ouvre le chapitre d'un toucher. Quand il fait le QCM
 * ou les exercices du chapitre, l'appli envoie son résultat au professeur
 * (cloud/enseignant.js, appelé par progression/Contexte.js) : le devoir est alors coché.
 *
 * Ce que voit le professeur : le pseudo choisi et les résultats aux devoirs de sa
 * classe, rien d'autre. L'élève peut quitter une classe à tout moment.
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../useTheme';
import { couleurMatiere } from '../theme';
import { useAuth } from '../cloud/AuthContexte';
import { lireMesClasses, rejoindreClasse, quitterClasse, changerPseudoClasse } from '../cloud/enseignant';
import { chapitreParId, LIBELLES_MATIERE, LIBELLES_NIVEAU } from '../contenu-index';
import { dateLocale } from '../../lib/serie';
import { devoirsEleve, erreurCode, erreurPseudo, normaliserCode, LIBELLES_STATUT, TYPES_DEVOIR } from '../../lib/enseignant';
import { avertir, confirmer, CarteE, BoutonE, Champ, Encadre, TitreSection } from '../composants/EnseignantCommuns';

export default function MesClasses({ navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { utilisateur } = useAuth();
  const [chargement, setChargement] = useState(true);
  const [nonActive, setNonActive] = useState(false);
  const [erreur, setErreur] = useState(null);
  const [donnees, setDonnees] = useState({ classes: [], devoirs: [] });
  const [voirFaits, setVoirFaits] = useState(false);

  const charger = useCallback(async () => {
    if (!utilisateur) { setChargement(false); return; }
    try {
      setDonnees(await lireMesClasses());
      setErreur(null);
    } catch (e) {
      if (e?.nonActive) setNonActive(true);
      else setErreur(e?.message || 'Erreur inattendue.');
    } finally {
      setChargement(false);
    }
  }, [utilisateur]);

  // Rechargé à chaque retour sur l'écran (après un QCM, le devoir est coché).
  useFocusEffect(useCallback(() => { charger(); }, [charger]));

  const aujourdhui = dateLocale(new Date());
  const { aFaire, faits } = useMemo(() => devoirsEleve(donnees, aujourdhui), [donnees, aujourdhui]);

  if (!utilisateur) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l }}>
          <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>🧑‍🏫 Mes classes</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.normale, marginTop: t.espace.s, lineHeight: 21 }}>
            Pour rejoindre la classe de ton professeur et recevoir ses devoirs, connecte-toi d’abord à ton compte
            Kamal Campus (dans ton profil).
          </Text>
          <BoutonE t={t} libelle="Aller à mon profil" onPress={() => navigation.navigate('Profil')} style={{ marginTop: t.espace.l }} />
          <LienEnseignant t={t} navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }} keyboardShouldPersistTaps="handled">
        <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }} accessibilityRole="header">🧑‍🏫 Mes classes</Text>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4, lineHeight: 19 }}>
          Les devoirs donnés par tes professeurs. Fais le QCM ou les exercices du chapitre : le devoir se coche tout seul.
        </Text>

        {nonActive ? (
          <Encadre
            t={t}
            ton="alerte"
            style={{ marginTop: t.espace.l }}
            titre="Classes pas encore activées"
            texte="Cette fonction sera disponible très bientôt. (Pour l’administrateur : exécuter le script outils/sql/espace_enseignant.sql dans Supabase.)"
          />
        ) : null}
        {nonActive ? <LienEnseignant t={t} navigation={navigation} /> : chargement ? (
          <ActivityIndicator style={{ marginTop: t.espace.xl }} color={C.accent} />
        ) : (
          <>
            {erreur ? <Encadre t={t} ton="alerte" style={{ marginTop: t.espace.m }} titre="Impossible de charger tes classes" texte={erreur} /> : null}

            {donnees.classes.length > 0 ? (
              <>
                <TitreSection t={t}>DEVOIRS À FAIRE ({aFaire.length})</TitreSection>
                {aFaire.length === 0 ? (
                  <Encadre t={t} ton="succes" texte="Aucun devoir à faire pour le moment. 👍" />
                ) : aFaire.map((d) => <CarteDevoir key={d.id} t={t} d={d} navigation={navigation} />)}

                {faits.length > 0 ? (
                  <>
                    <Pressable onPress={() => setVoirFaits(!voirFaits)} accessibilityRole="button" accessibilityState={{ expanded: voirFaits }}>
                      <TitreSection t={t}>{voirFaits ? '▾' : '▸'} DEVOIRS FAITS ({faits.length})</TitreSection>
                    </Pressable>
                    {voirFaits ? faits.map((d) => <CarteDevoir key={d.id} t={t} d={d} navigation={navigation} />) : null}
                  </>
                ) : null}

                <TitreSection t={t}>MES CLASSES</TitreSection>
                {donnees.classes.map((c) => <CarteClasse key={c.id} t={t} c={c} recharger={charger} />)}
              </>
            ) : null}

            <Rejoindre t={t} recharger={charger} premiere={donnees.classes.length === 0} />

            <Encadre
              t={t}
              style={{ marginTop: t.espace.l }}
              titre="🔒 Ce que voit ton professeur"
              texte="Seulement le pseudo que tu choisis et tes résultats aux devoirs de sa classe (score, date). Il ne voit ni ton adresse e-mail, ni ton profil, ni tes XP, ni tes amis, ni tes messages. Tu peux quitter une classe à tout moment : tes résultats y sont alors effacés."
            />
            <LienEnseignant t={t} navigation={navigation} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function LienEnseignant({ t, navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate('EspaceEnseignant')} accessibilityRole="link" style={{ marginTop: t.espace.l, paddingVertical: 8 }}>
      <Text style={{ color: t.couleur.accent, fontWeight: '700', fontSize: t.police.normale }}>
        Vous êtes enseignant ? Ouvrir l’espace enseignant ›
      </Text>
    </Pressable>
  );
}

// ── Un devoir ───────────────────────────────────────────────────────────────

function CarteDevoir({ t, d, navigation }) {
  const C = t.couleur;
  const chap = chapitreParId(d.chapitre_id);
  const fait = d.statut === 'fait' || d.statut === 'fait_retard';
  const retard = d.statut === 'en_retard';
  const couleur = chap ? couleurMatiere(t, chap.matiere) : C.accent;
  const type = TYPES_DEVOIR[d.type] || TYPES_DEVOIR.qcm;

  const ouvrir = () => chap && navigation.navigate('Chapitre', { id: chap.id, titre: chap.titre });
  const faire = () => {
    if (!chap) return;
    if (d.type === 'exercices') navigation.navigate('Exercices', { id: chap.id, titre: chap.titre });
    else if (d.type === 'qcm') navigation.navigate('Qcm', { id: chap.id, titre: chap.titre });
    else navigation.navigate('Chapitre', { id: chap.id, titre: chap.titre });
  };

  return (
    <CarteE t={t} style={{ marginBottom: t.espace.s, borderLeftWidth: 4, borderLeftColor: couleur }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
        <Text style={{ fontSize: 20 }}>{fait ? '✅' : type.icone}</Text>
        <View style={{ flex: 1 }}>
          <Text style={{ color: C.texte, fontWeight: '800', fontSize: t.police.normale }}>
            {chap ? chap.titre : 'Chapitre introuvable'}
          </Text>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
            {chap ? `${LIBELLES_MATIERE[chap.matiere] ?? chap.matiere} · ${LIBELLES_NIVEAU[chap.niveau] ?? chap.niveau} · ` : ''}{d.classeNom}
            {d.enseignantNom ? ` (${d.enseignantNom})` : ''}
          </Text>
          <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 6 }}>{d.libelle}</Text>
          <Text style={{ color: retard ? C.erreur : fait ? C.succes : C.texte, fontSize: t.police.petite, fontWeight: '700', marginTop: 2 }}>
            {fait ? `${LIBELLES_STATUT[d.statut]}${d.score ? ` · ${d.score}` : ''}` : `${d.echeance.charAt(0).toUpperCase()}${d.echeance.slice(1)}`}
            {!fait && d.score ? ` · ${d.score}` : ''}
          </Text>
          {d.consigne ? (
            <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 6, lineHeight: 19, fontStyle: 'italic' }}>« {d.consigne} »</Text>
          ) : null}
        </View>
      </View>
      {chap ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: t.espace.s }}>
          <BoutonE t={t} libelle="Ouvrir le chapitre" secondaire onPress={ouvrir} style={{ flexGrow: 1 }} />
          {d.type !== 'fiche' ? (
            <BoutonE t={t} libelle={d.type === 'exercices' ? 'Faire les exercices' : 'Faire le QCM'} onPress={faire} style={{ flexGrow: 1 }} />
          ) : null}
        </View>
      ) : null}
    </CarteE>
  );
}

// ── Une classe ──────────────────────────────────────────────────────────────

function CarteClasse({ t, c, recharger }) {
  const C = t.couleur;
  const [edition, setEdition] = useState(false);
  const [pseudo, setPseudo] = useState(c.pseudo);
  const [occupe, setOccupe] = useState(false);

  async function enregistrer() {
    const err = erreurPseudo(pseudo);
    if (err) { avertir('Pseudo', err); return; }
    setOccupe(true);
    try { await changerPseudoClasse(c.id, pseudo); setEdition(false); await recharger(); }
    catch (e) { avertir('Pseudo', e?.message); }
    finally { setOccupe(false); }
  }

  function quitter() {
    confirmer('Quitter cette classe ?', `Tu ne recevras plus les devoirs de « ${c.nom} » et tes résultats y seront effacés.`, 'Quitter', async () => {
      try { await quitterClasse(c.id); await recharger(); }
      catch (e) { avertir('Quitter la classe', e?.message); }
    });
  }

  return (
    <CarteE t={t} style={{ marginBottom: t.espace.s }}>
      <Text style={{ color: C.texte, fontWeight: '800', fontSize: t.police.normale }}>{c.nom}</Text>
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
        {[c.enseignant_nom, c.niveau ? LIBELLES_NIVEAU[c.niveau] : null].filter(Boolean).join(' · ') || 'Classe'}
        {c.archivee ? ' · classe fermée par le professeur' : ''}
      </Text>
      {edition ? (
        <View style={{ marginTop: t.espace.s }}>
          <Champ t={t} libelle="Mon pseudo dans cette classe" value={pseudo} onChangeText={setPseudo} maxLength={24} autoCorrect={false} />
          <View style={{ flexDirection: 'row', gap: 8, marginTop: t.espace.s }}>
            <BoutonE t={t} libelle="Annuler" secondaire onPress={() => { setPseudo(c.pseudo); setEdition(false); }} style={{ flex: 1 }} />
            <BoutonE t={t} libelle="Enregistrer" onPress={enregistrer} desactive={occupe} style={{ flex: 1 }} />
          </View>
        </View>
      ) : (
        <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 6 }}>
          Ton pseudo : <Text style={{ fontWeight: '800' }}>{c.pseudo}</Text>
        </Text>
      )}
      {!edition ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: t.espace.s }}>
          <BoutonE t={t} libelle="Changer de pseudo" secondaire onPress={() => setEdition(true)} style={{ flexGrow: 1 }} />
          <BoutonE t={t} libelle="Quitter la classe" danger onPress={quitter} style={{ flexGrow: 1 }} />
        </View>
      ) : null}
    </CarteE>
  );
}

// ── Rejoindre une classe ────────────────────────────────────────────────────

function Rejoindre({ t, recharger, premiere }) {
  const C = t.couleur;
  const [ouvert, setOuvert] = useState(premiere);
  const [code, setCode] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [occupe, setOccupe] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => { if (premiere) setOuvert(true); }, [premiere]);

  async function valider() {
    const err = erreurCode(code) || erreurPseudo(pseudo);
    if (err) { setMessage({ ton: 'alerte', texte: err }); return; }
    setOccupe(true);
    setMessage(null);
    try {
      const r = await rejoindreClasse(code, pseudo);
      setMessage({ ton: 'succes', texte: r.deja ? `Tu fais déjà partie de « ${r.nom} ».` : `Bienvenue dans « ${r.nom} » ! Tes devoirs apparaîtront ici.` });
      setCode('');
      await recharger();
    } catch (e) {
      setMessage({ ton: 'alerte', texte: e?.message || 'Erreur inattendue.' });
    } finally {
      setOccupe(false);
    }
  }

  if (!ouvert) {
    return <BoutonE t={t} libelle="+ Rejoindre une autre classe" secondaire onPress={() => setOuvert(true)} style={{ marginTop: t.espace.l }} />;
  }
  return (
    <CarteE t={t} style={{ marginTop: t.espace.l }}>
      <Text style={{ color: C.texte, fontWeight: '800', fontSize: t.police.moyenne }}>Rejoindre une classe</Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4, lineHeight: 19 }}>
        Ton professeur te donne un code de 6 caractères.
      </Text>
      <Champ
        t={t}
        libelle="Code de la classe"
        value={code}
        onChangeText={(x) => setCode(normaliserCode(x).slice(0, 6))}
        placeholder="Ex. : H8WUV2"
        autoCapitalize="characters"
        autoCorrect={false}
        maxLength={6}
        style={{ marginTop: t.espace.m }}
      />
      <Champ
        t={t}
        libelle="Mon pseudo dans cette classe"
        value={pseudo}
        onChangeText={setPseudo}
        placeholder="Ex. : Léa M."
        autoCorrect={false}
        maxLength={24}
        aide="C’est le seul nom que verra ton professeur : mets ton prénom (et l’initiale de ton nom) pour qu’il te reconnaisse."
        style={{ marginTop: t.espace.m }}
      />
      {message ? <Encadre t={t} ton={message.ton} texte={message.texte} style={{ marginTop: t.espace.m }} /> : null}
      <BoutonE t={t} libelle={occupe ? 'Un instant…' : 'Rejoindre'} onPress={valider} desactive={occupe} style={{ marginTop: t.espace.m }} />
    </CarteE>
  );
}
