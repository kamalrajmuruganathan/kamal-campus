/**
 * Espace enseignant.
 *
 * Un professeur (avec un compte Kamal Campus ordinaire) :
 *  - crée une classe et donne son code de 6 caractères à ses élèves ;
 *  - voit la liste des élèves (le pseudo qu'ils ont choisi, rien d'autre) ;
 *  - donne des devoirs : niveau → matière → chapitre, type (fiche + QCM, QCM,
 *    exercices), date limite, consigne ;
 *  - suit les résultats : taux de devoirs faits, moyenne par devoir, élèves en
 *    retard, chapitres difficiles, tableau élève par élève (copiable en CSV).
 *
 * Données : outils/sql/espace_enseignant.sql (si le script n'a pas encore été
 * exécuté, un message clair s'affiche). Logique : lib/enseignant.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Pressable, Share, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../useTheme';
import { couleurMatiere } from '../theme';
import { useAuth } from '../cloud/AuthContexte';
import {
  creerClasse, listerMesClassesEnseignant, modifierClasse, nouveauCodeClasse, supprimerClasse,
  lireTableauClasse, retirerEleve, creerDevoir, supprimerDevoir,
} from '../cloud/enseignant';
import { CHAPITRES, chapitreParId, LIBELLES_MATIERE, LIBELLES_NIVEAU, LIBELLES_PARCOURS, niveaux } from '../contenu-index';
import { dateLocale } from '../../lib/serie';
import { optionsDates } from '../../lib/controle';
import {
  tableauDeBord, exporterCsv, erreurNomClasse, erreurNomEnseignant, erreurConsigne, erreurDateLimite,
  libelleDevoir, echeanceEnLettres, dateDevoir, pourcent, LIBELLES_STATUT, TYPES_DEVOIR, LIMITES,
} from '../../lib/enseignant';
import { avertir, confirmer, copierTexte, CarteE, BoutonE, Puce, Champ, Encadre, TitreSection } from '../composants/EnseignantCommuns';

const WEB = Platform.OS === 'web';
const nomNiveau = (n) => LIBELLES_NIVEAU[n] ?? n;
const nomMatiere = (m) => LIBELLES_MATIERE[m] ?? m;
const titreChapitre = (id) => chapitreParId(id)?.titre ?? id;
const pluriel = (n, mot, motPluriel = `${mot}s`) => `${n} ${n > 1 ? motPluriel : mot}`;
const majuscule = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

/** « 3 nov. » */
function dateCourte(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

export default function EspaceEnseignant({ navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { utilisateur } = useAuth();
  const [nonActive, setNonActive] = useState(false);
  const [classes, setClasses] = useState(null);
  const [classeId, setClasseId] = useState(null);
  const [creation, setCreation] = useState(false);

  const gererErreur = useCallback((e, titre) => {
    if (e?.nonActive) { setNonActive(true); return; }
    avertir(titre, e?.message || 'Erreur inattendue.');
  }, []);

  const charger = useCallback(async () => {
    if (!utilisateur) return;
    try { setClasses(await listerMesClassesEnseignant()); }
    catch (e) { gererErreur(e, 'Espace enseignant'); setClasses([]); }
  }, [utilisateur, gererErreur]);

  useEffect(() => { charger(); }, [charger]);

  if (!utilisateur) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l }}>
          <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>🧑‍🏫 Espace enseignant</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.normale, marginTop: t.espace.s, lineHeight: 21 }}>
            L’espace enseignant est gratuit. Pour créer une classe, connectez-vous d’abord avec un compte Kamal Campus
            (le même type de compte que celui d’un élève), depuis la page Profil.
          </Text>
          <BoutonE t={t} libelle="Aller au profil" onPress={() => navigation.navigate('Profil')} style={{ marginTop: t.espace.l }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  const classe = classeId ? (classes || []).find((c) => c.id === classeId) : null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }} keyboardShouldPersistTaps="handled">
        {nonActive ? (
          <>
            <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>🧑‍🏫 Espace enseignant</Text>
            <Encadre
              t={t}
              ton="alerte"
              style={{ marginTop: t.espace.l }}
              titre="Espace enseignant pas encore activé"
              texte="Cette fonction sera disponible très bientôt. (Pour l’administrateur : exécuter le script outils/sql/espace_enseignant.sql dans Supabase.)"
            />
          </>
        ) : classes === null ? (
          <ActivityIndicator style={{ marginTop: t.espace.xl }} color={C.accent} />
        ) : classe ? (
          <DetailClasse
            t={t}
            classe={classe}
            retour={() => { setClasseId(null); charger(); }}
            rechargerListe={charger}
            gererErreur={gererErreur}
          />
        ) : creation ? (
          <NouvelleClasse
            t={t}
            annuler={() => setCreation(false)}
            cree={async (id) => { setCreation(false); await charger(); setClasseId(id); }}
            gererErreur={gererErreur}
          />
        ) : (
          <ListeClasses t={t} classes={classes} ouvrir={setClasseId} creer={() => setCreation(true)} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Liste des classes ───────────────────────────────────────────────────────

function ListeClasses({ t, classes, ouvrir, creer }) {
  const C = t.couleur;
  const actives = classes.filter((c) => !c.archivee);
  const archivees = classes.filter((c) => c.archivee);
  return (
    <View>
      <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }} accessibilityRole="header">🧑‍🏫 Espace enseignant</Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 4, lineHeight: 19 }}>
        Créez une classe, donnez le code à vos élèves, puis donnez-leur des devoirs : vous verrez qui les a faits et avec quel score.
      </Text>

      {classes.length === 0 ? (
        <Encadre
          t={t}
          style={{ marginTop: t.espace.l }}
          titre="Comment ça marche ?"
          texte={'1. Créez une classe : vous obtenez un code de 6 caractères.\n2. Vos élèves tapent ce code dans « Mes classes » (avec leur propre compte) et choisissent le pseudo que vous verrez.\n3. Donnez un devoir : un chapitre, un QCM ou des exercices, une date limite.\n4. Les résultats arrivent dès que l’élève fait le QCM ou les exercices du chapitre.'}
        />
      ) : null}

      <BoutonE t={t} libelle="+ Créer une classe" onPress={creer} style={{ marginTop: t.espace.l }} />

      {actives.length ? <TitreSection t={t}>MES CLASSES ({actives.length})</TitreSection> : null}
      {actives.map((c) => <LigneClasse key={c.id} t={t} c={c} ouvrir={ouvrir} />)}
      {archivees.length ? <TitreSection t={t}>CLASSES ARCHIVÉES ({archivees.length})</TitreSection> : null}
      {archivees.map((c) => <LigneClasse key={c.id} t={t} c={c} ouvrir={ouvrir} />)}

      <Encadre
        t={t}
        style={{ marginTop: t.espace.l }}
        titre="🔒 Données des élèves"
        texte="Vous ne voyez que le pseudo choisi par chaque élève et ses résultats aux devoirs de votre classe : ni son adresse e-mail, ni son profil, ni son activité ailleurs dans l’appli. Un élève peut quitter la classe à tout moment ; ses résultats sont alors effacés."
      />
    </View>
  );
}

function LigneClasse({ t, c, ouvrir }) {
  const C = t.couleur;
  return (
    <Pressable
      onPress={() => ouvrir(c.id)}
      accessibilityRole="button"
      accessibilityLabel={`Classe ${c.nom}`}
      style={({ pressed }) => ({ opacity: pressed ? 0.75 : c.archivee ? 0.7 : 1, marginBottom: t.espace.s })}
    >
      <CarteE t={t} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: C.texte, fontWeight: '800', fontSize: t.police.normale }}>{c.nom}</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
            {[c.niveau ? nomNiveau(c.niveau) : null, pluriel(c.nbEleves, 'élève'), pluriel(c.nbDevoirs, 'devoir')].filter(Boolean).join(' · ')}
          </Text>
        </View>
        <Text style={{ color: C.accent, fontWeight: '800', fontSize: t.police.moyenne, letterSpacing: 2, fontVariant: ['tabular-nums'] }}>
          {c.archivee ? 'Archivée' : c.code}
        </Text>
        <Text style={{ color: C.attenue, fontSize: t.police.grande, marginLeft: 8 }}>›</Text>
      </CarteE>
    </Pressable>
  );
}

// ── Nouvelle classe ─────────────────────────────────────────────────────────

function NouvelleClasse({ t, annuler, cree, gererErreur }) {
  const C = t.couleur;
  const [nom, setNom] = useState('');
  const [niveau, setNiveau] = useState(null);
  const [affiche, setAffiche] = useState('');
  const [occupe, setOccupe] = useState(false);
  const liste = useMemo(() => niveaux(), []);

  async function valider() {
    const err = erreurNomClasse(nom) || erreurNomEnseignant(affiche);
    if (err) { avertir('Nouvelle classe', err); return; }
    setOccupe(true);
    try { const r = await creerClasse({ nom, niveau, enseignantNom: affiche }); await cree(r.id); }
    catch (e) { gererErreur(e, 'Nouvelle classe'); }
    finally { setOccupe(false); }
  }

  return (
    <View>
      <Pressable onPress={annuler} accessibilityRole="button" style={{ paddingVertical: 6 }}>
        <Text style={{ color: C.accent, fontWeight: '700' }}>‹ Mes classes</Text>
      </Pressable>
      <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: t.espace.s }}>Nouvelle classe</Text>
      <Champ t={t} libelle="Nom de la classe" value={nom} onChangeText={setNom} placeholder="Ex. : 4e B – mathématiques" maxLength={LIMITES.nomClasse} style={{ marginTop: t.espace.m }} />
      <Champ
        t={t}
        libelle="Votre nom, vu par les élèves (facultatif)"
        value={affiche}
        onChangeText={setAffiche}
        placeholder="Ex. : Mme Martin"
        maxLength={LIMITES.nomEnseignant}
        aide="Il aide les élèves à reconnaître la classe."
        style={{ marginTop: t.espace.m }}
      />
      <TitreSection t={t}>NIVEAU (FACULTATIF)</TitreSection>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {liste.map((n) => <Puce key={n} t={t} libelle={nomNiveau(n)} actif={niveau === n} onPress={() => setNiveau(niveau === n ? null : n)} />)}
      </View>
      <BoutonE t={t} libelle={occupe ? 'Un instant…' : 'Créer la classe'} onPress={valider} desactive={occupe} style={{ marginTop: t.espace.l }} />
    </View>
  );
}

// ── Détail d'une classe ─────────────────────────────────────────────────────

function DetailClasse({ t, classe, retour, rechargerListe, gererErreur }) {
  const C = t.couleur;
  const [onglet, setOnglet] = useState('tableau');
  const [donnees, setDonnees] = useState(null);
  const aujourdhui = dateLocale(new Date());
  const retourRef = useRef(retour);
  retourRef.current = retour;

  const charger = useCallback(async () => {
    try {
      const d = await lireTableauClasse(classe.id);
      if (!d) { avertir('Classe introuvable', 'Cette classe n’existe plus.'); retourRef.current(); return; }
      setDonnees(d);
    } catch (e) { gererErreur(e, 'Tableau de la classe'); }
  }, [classe.id, gererErreur]);

  useEffect(() => { charger(); }, [charger]);

  const tableau = useMemo(() => (donnees ? tableauDeBord(donnees, aujourdhui) : null), [donnees, aujourdhui]);
  const info = donnees?.classe || classe;

  async function partagerCode() {
    const texte = `Rejoins ma classe « ${info.nom} » sur Kamal Campus : ouvre « Mes classes » et tape le code ${info.code}.`;
    if (WEB) {
      if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
        try { await navigator.share({ text: texte }); return; } catch (e) { if (e?.name === 'AbortError') return; }
      }
      if (await copierTexte(texte)) { avertir('Message copié', texte); return; }
      avertir('Message à envoyer', texte);
      return;
    }
    try { await Share.share({ message: texte }); } catch { /* rien */ }
  }

  function changerCode() {
    confirmer('Changer le code ?', 'L’ancien code ne marchera plus. Les élèves déjà inscrits restent dans la classe.', 'Changer', async () => {
      try { await nouveauCodeClasse(classe.id); await charger(); await rechargerListe(); }
      catch (e) { gererErreur(e, 'Nouveau code'); }
    });
  }

  return (
    <View>
      <Pressable onPress={retour} accessibilityRole="button" style={{ paddingVertical: 6 }}>
        <Text style={{ color: C.accent, fontWeight: '700' }}>‹ Mes classes</Text>
      </Pressable>
      <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: t.espace.s }} accessibilityRole="header">{info.nom}</Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
        {[info.niveau ? nomNiveau(info.niveau) : null, info.enseignant_nom ?? info.enseignantNom].filter(Boolean).join(' · ')}
        {info.archivee ? ' · classe archivée' : ''}
      </Text>

      {!info.archivee ? (
        <CarteE t={t} style={{ marginTop: t.espace.m, alignItems: 'center' }}>
          <Text style={{ color: C.attenue, fontSize: t.police.petite }}>Code à donner aux élèves</Text>
          <Text selectable style={{ color: C.texte, fontSize: 34, fontWeight: '800', letterSpacing: 6, marginVertical: 4, fontVariant: ['tabular-nums'] }} accessibilityLabel={`Code : ${info.code.split('').join(' ')}`}>
            {info.code}
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <BoutonE t={t} libelle="Partager le code" onPress={partagerCode} />
            <BoutonE t={t} libelle="Nouveau code" secondaire onPress={changerCode} />
          </View>
        </CarteE>
      ) : null}

      <View style={{ flexDirection: 'row', padding: 4, gap: 4, borderWidth: 1, borderColor: C.trait, backgroundColor: C.surface, borderRadius: t.rayon.m, marginTop: t.espace.m }}>
        {[['tableau', 'Résultats'], ['devoirs', 'Devoirs'], ['eleves', 'Élèves']].map(([cle, libelle]) => {
          const actif = onglet === cle;
          return (
            <Pressable key={cle} onPress={() => setOnglet(cle)} accessibilityRole="tab" accessibilityState={{ selected: actif }}
              style={{ flex: 1, paddingVertical: 10, borderRadius: t.rayon.s, backgroundColor: actif ? C.accent : 'transparent', alignItems: 'center' }}>
              <Text style={{ color: actif ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.normale }}>{libelle}</Text>
            </Pressable>
          );
        })}
      </View>

      {!tableau ? (
        <ActivityIndicator style={{ marginTop: t.espace.xl }} color={C.accent} />
      ) : onglet === 'tableau' ? (
        <Resultats t={t} tableau={tableau} aujourdhui={aujourdhui} recharger={charger} allerDevoirs={() => setOnglet('devoirs')} />
      ) : onglet === 'devoirs' ? (
        <Devoirs t={t} classe={info} donnees={donnees} aujourdhui={aujourdhui} recharger={async () => { await charger(); await rechargerListe(); }} gererErreur={gererErreur} />
      ) : (
        <Eleves t={t} donnees={donnees} recharger={async () => { await charger(); await rechargerListe(); }} gererErreur={gererErreur} />
      )}

      <Reglages t={t} classe={info} retour={retour} recharger={async () => { await charger(); await rechargerListe(); }} gererErreur={gererErreur} />
    </View>
  );
}

// ── Onglet « Résultats » ────────────────────────────────────────────────────

function Resultats({ t, tableau, aujourdhui, recharger, allerDevoirs }) {
  const C = t.couleur;
  const [ouvert, setOuvert] = useState(null);

  if (tableau.nbEleves === 0 || tableau.nbDevoirs === 0) {
    return (
      <View style={{ marginTop: t.espace.m }}>
        <Encadre
          t={t}
          titre={tableau.nbEleves === 0 ? 'Aucun élève pour le moment' : 'Aucun devoir pour le moment'}
          texte={tableau.nbEleves === 0
            ? 'Donnez le code ci-dessus à vos élèves : ils le tapent dans « Mes classes » (accueil de l’appli), avec leur propre compte.'
            : 'Donnez un premier devoir à la classe : les résultats apparaîtront ici dès que les élèves l’auront fait.'}
        />
        {tableau.nbDevoirs === 0 ? <BoutonE t={t} libelle="Donner un devoir" onPress={allerDevoirs} style={{ marginTop: t.espace.m }} /> : null}
        <BoutonE t={t} libelle="Actualiser" secondaire onPress={recharger} style={{ marginTop: t.espace.s }} />
      </View>
    );
  }

  async function copierCsv() {
    const csv = exporterCsv(tableau, titreChapitre);
    if (await copierTexte(csv)) avertir('Résultats copiés', 'Collez-les dans un tableur (séparateur « ; »).');
    else if (!WEB) { try { await Share.share({ message: csv }); } catch { /* rien */ } }
    else avertir('Copie impossible', 'Votre navigateur n’autorise pas la copie.');
  }

  return (
    <View style={{ marginTop: t.espace.m }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        <Chiffre t={t} valeur={pourcent(tableau.tauxFaits)} legende={`devoirs faits (${tableau.faits} sur ${tableau.attendus})`} />
        <Chiffre t={t} valeur={String(tableau.nbEleves)} legende={tableau.nbEleves > 1 ? 'élèves' : 'élève'} />
        <Chiffre t={t} valeur={String(tableau.elevesEnRetard.length)} legende="en retard" couleur={tableau.elevesEnRetard.length ? C.erreur : undefined} />
      </View>

      {tableau.elevesEnRetard.length ? (
        <>
          <TitreSection t={t}>⏰ ÉLÈVES EN RETARD</TitreSection>
          <CarteE t={t}>
            {tableau.elevesEnRetard.map((x) => (
              <Text key={x.eleve.id} style={{ color: C.texte, fontSize: t.police.petite, lineHeight: 21 }}>
                <Text style={{ fontWeight: '800' }}>{x.eleve.pseudo}</Text>
                {' : '}{x.devoirs.map((d) => titreChapitre(d.chapitre_id)).join(', ')}
              </Text>
            ))}
          </CarteE>
        </>
      ) : null}

      {tableau.chapitresDifficiles.length ? (
        <>
          <TitreSection t={t}>🧗 CHAPITRES DIFFICILES</TitreSection>
          <CarteE t={t}>
            {tableau.chapitresDifficiles.map((c) => (
              <Text key={c.chapitreId} style={{ color: C.texte, fontSize: t.police.petite, lineHeight: 21 }}>
                {titreChapitre(c.chapitreId)} : <Text style={{ fontWeight: '800', color: C.erreur }}>{pourcent(c.moyenne)}</Text>
                {` de réussite en moyenne (${pluriel(c.nbResultats, 'résultat')})`}
              </Text>
            ))}
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 6, lineHeight: 16 }}>
              Moyenne inférieure à 60 % : une reprise en classe peut être utile.
            </Text>
          </CarteE>
        </>
      ) : null}

      <TitreSection t={t}>PAR DEVOIR</TitreSection>
      {tableau.devoirs.map((l) => {
        const d = l.devoir;
        const chap = chapitreParId(d.chapitre_id);
        const deplie = ouvert === d.id;
        const echu = d.pour_le < aujourdhui;
        return (
          <CarteE key={d.id} t={t} style={{ marginBottom: t.espace.s, borderLeftWidth: 4, borderLeftColor: chap ? couleurMatiere(t, chap.matiere) : C.accent }}>
            <Pressable onPress={() => setOuvert(deplie ? null : d.id)} accessibilityRole="button" accessibilityState={{ expanded: deplie }}>
              <Text style={{ color: C.texte, fontWeight: '800', fontSize: t.police.normale }}>{titreChapitre(d.chapitre_id)}</Text>
              <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
                {libelleDevoir(d)} · {echu ? `était pour le ${dateDevoir(d.pour_le)}` : majuscule(echeanceEnLettres(d.pour_le, aujourdhui))}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 10 }}>
                <View style={{ flex: 1, height: 8, borderRadius: 4, backgroundColor: C.trait, overflow: 'hidden' }}>
                  <View style={{ width: `${l.concernes ? Math.round((l.faits / l.concernes) * 100) : 0}%`, height: 8, backgroundColor: C.succes }} />
                </View>
                <Text style={{ color: C.texte, fontSize: t.police.petite, fontWeight: '700', fontVariant: ['tabular-nums'] }}>
                  {l.faits}/{l.concernes} fait{l.faits > 1 ? 's' : ''}
                </Text>
              </View>
              <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 4 }}>
                Moyenne : <Text style={{ fontWeight: '800' }}>{pourcent(l.moyenne)}</Text>
                {l.enRetard ? <Text style={{ color: C.erreur }}>{` · ${l.enRetard} en retard`}</Text> : null}
                {l.commences ? ` · ${l.commences} commencé${l.commences > 1 ? 's' : ''}` : ''}
                <Text style={{ color: C.accent }}>{deplie ? '  ▾' : '  ▸ détail'}</Text>
              </Text>
            </Pressable>
            {deplie ? (
              <View style={{ marginTop: t.espace.s, borderTopWidth: 1, borderTopColor: C.trait, paddingTop: t.espace.s }}>
                {tableau.eleves.map((e) => {
                  const c = l.cellules[e.eleve.id];
                  if (!c || c.statut === 'non_concerne') return null;
                  const couleur = c.statut === 'fait' ? C.succes : c.statut === 'en_retard' ? C.erreur : c.statut === 'fait_retard' ? (C.alerte ?? C.texte) : C.attenue;
                  return (
                    <View key={e.eleve.id} style={{ flexDirection: 'row', paddingVertical: 4, gap: 8 }}>
                      <Text style={{ flex: 1, color: C.texte, fontSize: t.police.petite }}>{e.eleve.pseudo}</Text>
                      <Text style={{ color: C.texte, fontSize: t.police.petite, fontVariant: ['tabular-nums'] }}>{c.texte}</Text>
                      <Text style={{ color: couleur, fontSize: t.police.petite, fontWeight: '700', minWidth: 96, textAlign: 'right' }}>{LIBELLES_STATUT[c.statut]}</Text>
                    </View>
                  );
                })}
              </View>
            ) : null}
          </CarteE>
        );
      })}

      <TitreSection t={t}>PAR ÉLÈVE</TitreSection>
      <CarteE t={t}>
        {tableau.eleves.map((e) => (
          <View key={e.eleve.id} style={{ flexDirection: 'row', paddingVertical: 4, gap: 8 }}>
            <Text style={{ flex: 1, color: C.texte, fontSize: t.police.petite, fontWeight: '700' }}>{e.eleve.pseudo}</Text>
            <Text style={{ color: C.texte, fontSize: t.police.petite, fontVariant: ['tabular-nums'] }}>{e.faits} fait{e.faits > 1 ? 's' : ''} sur {e.concernes}</Text>
            <Text style={{ color: C.attenue, fontSize: t.police.petite, minWidth: 56, textAlign: 'right', fontVariant: ['tabular-nums'] }}>{pourcent(e.moyenne)}</Text>
          </View>
        ))}
      </CarteE>

      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: t.espace.m }}>
        <BoutonE t={t} libelle="Actualiser" secondaire onPress={recharger} style={{ flexGrow: 1 }} />
        <BoutonE t={t} libelle="Copier les résultats (CSV)" secondaire onPress={copierCsv} style={{ flexGrow: 1 }} />
      </View>
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: t.espace.s, lineHeight: 16 }}>
        QCM : meilleur score de l’élève. Exercices : exercices réussis sur exercices faits ; le devoir compte comme fait
        quand le nombre d’exercices demandé est atteint.
      </Text>
    </View>
  );
}

function Chiffre({ t, valeur, legende, couleur }) {
  const C = t.couleur;
  return (
    <View style={{ flexGrow: 1, flexBasis: '30%', minWidth: 100, padding: t.espace.m, backgroundColor: C.surface, borderRadius: t.rayon.m, borderWidth: 1, borderColor: C.trait }}>
      <Text style={{ color: couleur || C.texte, fontSize: t.police.grande, fontWeight: '800', fontVariant: ['tabular-nums'] }}>{valeur}</Text>
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2, lineHeight: 16 }}>{legende}</Text>
    </View>
  );
}

// ── Onglet « Devoirs » ──────────────────────────────────────────────────────

function Devoirs({ t, classe, donnees, aujourdhui, recharger, gererErreur }) {
  const C = t.couleur;
  const [creation, setCreation] = useState(false);
  const devoirs = donnees?.devoirs || [];

  function supprimer(d) {
    confirmer('Supprimer ce devoir ?', `« ${titreChapitre(d.chapitre_id)} » et les résultats des élèves à ce devoir seront effacés.`, 'Supprimer', async () => {
      try { await supprimerDevoir(d.id); await recharger(); }
      catch (e) { gererErreur(e, 'Supprimer le devoir'); }
    });
  }

  return (
    <View style={{ marginTop: t.espace.m }}>
      {classe.archivee ? (
        <Encadre t={t} ton="alerte" texte="Classe archivée : rouvrez-la (en bas de la page) pour donner un nouveau devoir." />
      ) : creation ? (
        <NouveauDevoir t={t} classe={classe} aujourdhui={aujourdhui} annuler={() => setCreation(false)}
          cree={async () => { setCreation(false); await recharger(); }} gererErreur={gererErreur} />
      ) : (
        <BoutonE t={t} libelle="+ Donner un devoir" onPress={() => setCreation(true)} />
      )}

      {devoirs.length ? <TitreSection t={t}>DEVOIRS DONNÉS ({devoirs.length})</TitreSection> : null}
      {devoirs.map((d) => (
        <CarteE key={d.id} t={t} style={{ marginBottom: t.espace.s }}>
          <Text style={{ color: C.texte, fontWeight: '800', fontSize: t.police.normale }}>{titreChapitre(d.chapitre_id)}</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
            {(TYPES_DEVOIR[d.type] || TYPES_DEVOIR.qcm).icone} {libelleDevoir(d)} · pour le {dateDevoir(d.pour_le)}
          </Text>
          {d.consigne ? <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: 6, fontStyle: 'italic', lineHeight: 19 }}>« {d.consigne} »</Text> : null}
          <Pressable onPress={() => supprimer(d)} accessibilityRole="button" accessibilityLabel={`Supprimer le devoir ${titreChapitre(d.chapitre_id)}`} style={{ alignSelf: 'flex-start', paddingVertical: 6, marginTop: 4 }}>
            <Text style={{ color: C.erreur, fontWeight: '700', fontSize: t.police.petite }}>Supprimer</Text>
          </Pressable>
        </CarteE>
      ))}
    </View>
  );
}

function NouveauDevoir({ t, classe, aujourdhui, annuler, cree, gererErreur }) {
  const C = t.couleur;
  const listeNiveaux = useMemo(() => niveaux(), []);
  const [niveau, setNiveau] = useState(classe.niveau && listeNiveaux.includes(classe.niveau) ? classe.niveau : null);
  const [matiere, setMatiere] = useState(null);
  const [chapitreId, setChapitreId] = useState(null);
  const [type, setType] = useState('fiche');
  const [nbExos, setNbExos] = useState(5);
  const [pourLe, setPourLe] = useState(null);
  const [consigne, setConsigne] = useState('');
  const [occupe, setOccupe] = useState(false);

  const matieres = useMemo(() => {
    const m = new Map();
    for (const c of CHAPITRES) if (c.niveau === niveau && !m.has(c.matiere)) m.set(c.matiere, nomMatiere(c.matiere));
    return [...m.entries()].map(([id, nom]) => ({ id, nom })).sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
  }, [niveau]);

  const groupes = useMemo(() => {
    const g = new Map();
    for (const c of CHAPITRES) {
      if (c.niveau !== niveau || c.matiere !== matiere) continue;
      if (!g.has(c.parcours)) g.set(c.parcours, []);
      g.get(c.parcours).push(c);
    }
    return [...g.entries()].map(([parcours, chapitres]) => ({ parcours, nom: LIBELLES_PARCOURS[parcours] ?? parcours, chapitres }));
  }, [niveau, matiere]);

  const chapitre = chapitreId ? chapitreParId(chapitreId) : null;
  const typesPossibles = useMemo(() => {
    if (!chapitre) return [];
    const l = [];
    if ((chapitre.nbQuestions ?? 0) > 0) l.push('fiche', 'qcm');
    if ((chapitre.nbExercices ?? 0) > 0) l.push('exercices');
    return l;
  }, [chapitre]);
  useEffect(() => { if (typesPossibles.length && !typesPossibles.includes(type)) setType(typesPossibles[0]); }, [typesPossibles, type]);

  const dates = useMemo(() => optionsDates(aujourdhui, 14), [aujourdhui]);

  async function valider() {
    if (!chapitre) { avertir('Nouveau devoir', 'Choisissez un chapitre.'); return; }
    const err = erreurDateLimite(pourLe, aujourdhui) || erreurConsigne(consigne);
    if (err) { avertir('Nouveau devoir', err); return; }
    setOccupe(true);
    try {
      await creerDevoir({ classeId: classe.id, chapitreId: chapitre.id, type, nbExercices: nbExos, pourLe, consigne: consigne.trim() });
      await cree();
    } catch (e) { gererErreur(e, 'Nouveau devoir'); }
    finally { setOccupe(false); }
  }

  return (
    <CarteE t={t}>
      <Text style={{ color: C.texte, fontWeight: '800', fontSize: t.police.moyenne }}>Nouveau devoir</Text>

      <TitreSection t={t}>1. NIVEAU</TitreSection>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {listeNiveaux.map((n) => <Puce key={n} t={t} libelle={nomNiveau(n)} actif={niveau === n} onPress={() => { setNiveau(n); setMatiere(null); setChapitreId(null); }} />)}
      </View>

      {niveau ? (
        <>
          <TitreSection t={t}>2. MATIÈRE</TitreSection>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {matieres.map((m) => <Puce key={m.id} t={t} libelle={m.nom} actif={matiere === m.id} onPress={() => { setMatiere(m.id); setChapitreId(null); }} />)}
          </View>
        </>
      ) : null}

      {matiere ? (
        <>
          <TitreSection t={t}>3. CHAPITRE</TitreSection>
          {groupes.map((g) => (
            <View key={g.parcours}>
              {groupes.length > 1 ? <Text style={{ color: C.texte, fontSize: t.police.petite, fontWeight: '600', marginBottom: 6 }}>{g.nom}</Text> : null}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {g.chapitres.map((c) => <Puce key={c.id} t={t} libelle={c.titre} actif={chapitreId === c.id} onPress={() => setChapitreId(c.id)} />)}
              </View>
            </View>
          ))}
        </>
      ) : null}

      {chapitre ? (
        <>
          <TitreSection t={t}>4. TRAVAIL DEMANDÉ</TitreSection>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {typesPossibles.map((ty) => <Puce key={ty} t={t} libelle={`${TYPES_DEVOIR[ty].icone} ${TYPES_DEVOIR[ty].libelle}`} actif={type === ty} onPress={() => setType(ty)} />)}
          </View>
          {type === 'exercices' ? (
            <>
              <Text style={{ color: C.texte, fontSize: t.police.petite, fontWeight: '700', marginTop: 4, marginBottom: 6 }}>Nombre d’exercices à faire</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {[3, 5, 8, 10, 15, 20].filter((n) => n <= (chapitre.nbExercices ?? 20)).map((n) => (
                  <Puce key={n} t={t} libelle={String(n)} actif={nbExos === n} onPress={() => setNbExos(n)} />
                ))}
              </View>
            </>
          ) : null}

          <TitreSection t={t}>5. POUR LE</TitreSection>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {dates.map((o) => <Puce key={o.date} t={t} libelle={o.libelle} accessibilityLabel={`${o.libelle}, ${o.detail}`} actif={pourLe === o.date} onPress={() => setPourLe(o.date)} />)}
          </View>
          {pourLe ? <Text style={{ color: C.attenue, fontSize: t.police.minuscule }}>Date limite : {dateDevoir(pourLe)}</Text> : null}

          <Champ
            t={t}
            libelle="Consigne (facultatif)"
            value={consigne}
            onChangeText={setConsigne}
            placeholder="Ex. : Relire la partie 2 avant de faire le QCM."
            multiline
            maxLength={LIMITES.consigne}
            aide={`${consigne.length}/${LIMITES.consigne} caractères`}
            style={{ marginTop: t.espace.m }}
          />
        </>
      ) : null}

      <View style={{ flexDirection: 'row', gap: 8, marginTop: t.espace.l }}>
        <BoutonE t={t} libelle="Annuler" secondaire onPress={annuler} style={{ flex: 1 }} />
        <BoutonE t={t} libelle={occupe ? 'Un instant…' : 'Donner le devoir'} onPress={valider} desactive={occupe || !chapitre || !pourLe} style={{ flex: 1 }} />
      </View>
    </CarteE>
  );
}

// ── Onglet « Élèves » ───────────────────────────────────────────────────────

function Eleves({ t, donnees, recharger, gererErreur }) {
  const C = t.couleur;
  const eleves = donnees?.eleves || [];

  function retirer(e) {
    confirmer('Retirer cet élève ?', `${e.pseudo} ne verra plus les devoirs de la classe et ses résultats seront effacés.`, 'Retirer', async () => {
      try { await retirerEleve(e.id); await recharger(); }
      catch (err) { gererErreur(err, 'Retirer l’élève'); }
    });
  }

  if (!eleves.length) {
    return (
      <Encadre t={t} style={{ marginTop: t.espace.m }} titre="Aucun élève pour le moment"
        texte="Vos élèves ouvrent « Mes classes » depuis l’accueil de l’appli, tapent le code de la classe et choisissent un pseudo." />
    );
  }
  return (
    <View style={{ marginTop: t.espace.m }}>
      <TitreSection t={t} style={{ marginTop: 0 }}>{pluriel(eleves.length, 'ÉLÈVE', 'ÉLÈVES')}</TitreSection>
      {eleves.map((e) => (
        <CarteE key={e.id} t={t} style={{ marginBottom: t.espace.s, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.normale }}>{e.pseudo}</Text>
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>A rejoint la classe le {dateCourte(e.rejoint_le)}</Text>
          </View>
          <Pressable onPress={() => retirer(e)} accessibilityRole="button" accessibilityLabel={`Retirer ${e.pseudo}`} style={{ padding: 8 }}>
            <Text style={{ color: C.erreur, fontWeight: '700', fontSize: t.police.petite }}>Retirer</Text>
          </Pressable>
        </CarteE>
      ))}
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: t.espace.s, lineHeight: 16 }}>
        Vous ne voyez que le pseudo choisi par l’élève. S’il n’est pas reconnaissable, demandez-lui de le changer dans « Mes classes ».
      </Text>
    </View>
  );
}

// ── Réglages de la classe ───────────────────────────────────────────────────

function Reglages({ t, classe, retour, recharger, gererErreur }) {
  const C = t.couleur;
  const [ouvert, setOuvert] = useState(false);
  const [nom, setNom] = useState(classe.nom);
  const [affiche, setAffiche] = useState(classe.enseignant_nom ?? classe.enseignantNom ?? '');

  async function enregistrer() {
    const err = erreurNomClasse(nom) || erreurNomEnseignant(affiche);
    if (err) { avertir('Classe', err); return; }
    try { await modifierClasse(classe.id, { nom, enseignantNom: affiche, archivee: classe.archivee }); await recharger(); setOuvert(false); }
    catch (e) { gererErreur(e, 'Classe'); }
  }

  function archiver() {
    const fermer = !classe.archivee;
    confirmer(fermer ? 'Archiver la classe ?' : 'Rouvrir la classe ?',
      fermer ? 'Les élèves ne pourront plus la rejoindre et ne verront plus ses devoirs. Les résultats sont conservés : vous pourrez la rouvrir.'
        : 'Les élèves verront de nouveau les devoirs de la classe.',
      fermer ? 'Archiver' : 'Rouvrir',
      async () => {
        try { await modifierClasse(classe.id, { nom: classe.nom, enseignantNom: classe.enseignant_nom ?? classe.enseignantNom ?? '', archivee: fermer }); await recharger(); }
        catch (e) { gererErreur(e, 'Classe'); }
      });
  }

  function supprimer() {
    confirmer('Supprimer définitivement la classe ?', 'Les élèves, les devoirs et tous les résultats seront effacés. Cette action est irréversible.', 'Supprimer', async () => {
      try { await supprimerClasse(classe.id); retour(); }
      catch (e) { gererErreur(e, 'Supprimer la classe'); }
    });
  }

  return (
    <View style={{ marginTop: t.espace.xl }}>
      <Pressable onPress={() => setOuvert(!ouvert)} accessibilityRole="button" accessibilityState={{ expanded: ouvert }}>
        <TitreSection t={t}>{ouvert ? '▾' : '▸'} RÉGLAGES DE LA CLASSE</TitreSection>
      </Pressable>
      {ouvert ? (
        <CarteE t={t}>
          <Champ t={t} libelle="Nom de la classe" value={nom} onChangeText={setNom} maxLength={LIMITES.nomClasse} />
          <Champ t={t} libelle="Votre nom, vu par les élèves" value={affiche} onChangeText={setAffiche} maxLength={LIMITES.nomEnseignant} style={{ marginTop: t.espace.m }} />
          <BoutonE t={t} libelle="Enregistrer" onPress={enregistrer} style={{ marginTop: t.espace.m }} />
          <BoutonE t={t} libelle={classe.archivee ? 'Rouvrir la classe' : 'Archiver la classe'} secondaire onPress={archiver} style={{ marginTop: t.espace.s }} />
          <BoutonE t={t} libelle="Supprimer la classe" danger onPress={supprimer} style={{ marginTop: t.espace.s }} />
        </CarteE>
      ) : null}
    </View>
  );
}

