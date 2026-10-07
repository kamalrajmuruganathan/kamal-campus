/**
 * « Je révise mon contrôle » — l'élève choisit sa classe, une matière, 1 à 4
 * chapitres et la date de son contrôle ; l'appli fabrique un plan de révision
 * jour par jour (logique dans lib/controle). Chaque tâche ouvre le bon écran
 * (fiche, cartes, QCM, exercices, QCM bilan) et se coche quand elle est faite.
 *
 * Les plans sont enregistrés dans le profil : `profil.controles` (liste).
 */

import { useTheme } from '../useTheme';
import { useMemo, useState } from 'react';
import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { couleurMatiere } from '../theme';
import { Bandeau } from '../composants/communs';
import { useProgression } from '../progression/Contexte';
import { CHAPITRES, LIBELLES_NIVEAU, LIBELLES_MATIERE, LIBELLES_PARCOURS, niveaux } from '../contenu-index';
import { aGenerateur } from '../../lib/generateurs';
import { melanger } from '../../lib/quizmix';
import { dateLocale } from '../../lib/serie';
import { construireQuestions } from '../defisContenu';
import {
  MAX_CHAPITRES, creerPlan, basculerFait, avancement, libelleTache, iconeTache, cibleTache,
  titreControle, optionsDates, dateEnLettres, delaiEnLettres, ecartJours,
} from '../../lib/controle';

const TAILLE_QCM_BILAN = 20;
const NBSP = ' ';
const majuscule = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/** Ce que contient un chapitre (pour adapter le plan). */
function descriptionChapitre(c) {
  return {
    id: c.id,
    titre: c.titre,
    fiche: true,
    flashcards: (c.nbFlashcards ?? c.flashcards?.cartes?.length ?? 0) > 0,
    qcm: aGenerateur(c.id) || (c.nbQuestions ?? c.qcm?.questions?.length ?? 0) > 0,
    exercices: (c.nbExercices ?? 0) > 0,
  };
}

export default function Controle({ navigation, route }) {
  const t = useTheme();
  const C = t.couleur;
  const { profil, definirReglages } = useProgression();
  const aujourdHui = dateLocale(new Date());

  const plans = useMemo(() => {
    const liste = Array.isArray(profil?.controles) ? profil.controles : [];
    return [...liste].sort((a, b) => String(a.dateControle).localeCompare(String(b.dateControle)));
  }, [profil?.controles]);
  const aVenir = plans.filter((p) => p.dateControle >= aujourdHui);
  const passes = plans.filter((p) => p.dateControle < aujourdHui).reverse();

  const [creation, setCreation] = useState(plans.length === 0);
  const [ouvert, setOuvert] = useState(route?.params?.planId ?? aVenir[0]?.id ?? null);

  const enregistrer = (liste) => definirReglages({ controles: liste });

  const ajouterPlan = (plan) => {
    enregistrer([...(profil?.controles || []), plan]);
    setOuvert(plan.id);
    setCreation(false);
  };

  const majPlan = (plan) => {
    enregistrer((profil?.controles || []).map((p) => (p.id === plan.id ? plan : p)));
  };

  const supprimer = (plan) => {
    Alert.alert(
      'Supprimer ce plan ?',
      `Le plan de révision « ${titreControle(plan)} » sera effacé.`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: () => enregistrer((profil?.controles || []).filter((p) => p.id !== plan.id)),
        },
      ],
    );
  };

  const lancerBilan = (plan) => {
    const parChapitre = Math.ceil(TAILLE_QCM_BILAN / Math.max(1, plan.chapitres.length));
    const questions = melanger(plan.chapitres.flatMap((id) => {
      try { return construireQuestions(id, parChapitre); } catch { return []; }
    })).slice(0, TAILLE_QCM_BILAN);
    if (questions.length === 0) {
      Alert.alert('QCM indisponible', 'Ces chapitres n’ont pas encore de questions de QCM.');
      return;
    }
    navigation.navigate('Qcm', {
      questions,
      titre: `QCM bilan — ${titreControle(plan).replace(/^Contrôle/, 'contrôle')}`,
      matiere: plan.matiere ?? null,
    });
  };

  const ouvrir = (plan, tache, chapitreId) => {
    if (tache.type === 'bilan') { lancerBilan(plan); return; }
    const cible = cibleTache(tache, plan, chapitreId);
    if (cible.ecran !== 'Controle') navigation.navigate(cible.ecran, cible.params);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {creation ? (
          <NouveauPlan
            t={t}
            aujourdHui={aujourdHui}
            niveauDefaut={profil?.niveauParDefaut ?? null}
            onCreer={ajouterPlan}
            onAnnuler={plans.length > 0 ? () => setCreation(false) : null}
          />
        ) : (
          <>
            <Text style={{ color: C.attenue, fontSize: t.police.petite, lineHeight: 19, marginBottom: t.espace.m }}>
              Un plan court chaque jour : d’abord les fiches, puis les cartes et le QCM, puis les exercices.
              La veille, un QCM bilan ; le jour J, juste tes cartes.
            </Text>
            <Bouton t={t} texte="+ Préparer un autre contrôle" onPress={() => setCreation(true)} />

            {aVenir.length === 0 && (
              <Text style={{ color: C.attenue, fontSize: t.police.normale, marginTop: t.espace.l }}>
                Aucun contrôle à venir.
              </Text>
            )}

            {aVenir.map((plan) => (
              <CartePlan
                key={plan.id}
                t={t}
                plan={plan}
                aujourdHui={aujourdHui}
                ouvert={ouvert === plan.id}
                onBasculer={() => setOuvert(ouvert === plan.id ? null : plan.id)}
                onCocher={(tache) => majPlan(basculerFait(plan, tache.id))}
                onOuvrir={(tache, chapitreId) => ouvrir(plan, tache, chapitreId)}
                onSupprimer={() => supprimer(plan)}
              />
            ))}

            {passes.length > 0 && (
              <>
                <Text style={{ color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginTop: t.espace.l, marginBottom: t.espace.s }}>
                  CONTRÔLES PASSÉS
                </Text>
                {passes.map((plan) => {
                  const a = avancement(plan);
                  return (
                    <View key={plan.id} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderRadius: t.rayon.m, padding: t.espace.m, marginBottom: t.espace.s }}>
                      <View style={{ flex: 1 }}>
                        <Text style={{ color: C.texte, fontSize: t.police.normale, fontWeight: '600' }}>{titreControle(plan)}</Text>
                        <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
                          {majuscule(dateEnLettres(plan.dateControle))} · {a.faites}/{a.total} tâches faites
                        </Text>
                      </View>
                      <Pressable onPress={() => supprimer(plan)} accessibilityRole="button" accessibilityLabel={`Supprimer le plan ${titreControle(plan)}`} hitSlop={8}>
                        <Text style={{ color: C.erreur, fontSize: t.police.petite, fontWeight: '700' }}>Supprimer</Text>
                      </Pressable>
                    </View>
                  );
                })}
              </>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Un plan : en-tête, tâche du jour mise en avant, puis les jours ─────────────

function CartePlan({ t, plan, aujourdHui, ouvert, onBasculer, onCocher, onOuvrir, onSupprimer }) {
  const C = t.couleur;
  const [voirPasses, setVoirPasses] = useState(false);
  const couleur = couleurMatiere(t, plan.matiere);
  const a = avancement(plan);
  const jours = plan.jours || [];
  const joursPasses = jours.filter((j) => j.date < aujourdHui);
  const nonFaitesPassees = joursPasses.flatMap((j) => j.taches).filter((x) => !plan.faites?.[x.id]).length;
  const joursAffiches = voirPasses ? jours : jours.filter((j) => j.date >= aujourdHui);
  const duJour = jours.find((j) => j.date === aujourdHui);
  const prochaine = duJour?.taches.find((x) => !plan.faites?.[x.id]) ?? null;
  const condense = jours.some((j) => j.taches.some((x) => x.express));

  return (
    <View style={{ backgroundColor: C.surface, borderColor: C.trait, borderWidth: 1, borderLeftWidth: 4, borderLeftColor: couleur, borderRadius: t.rayon.m, marginTop: t.espace.m, overflow: 'hidden' }}>
      <Pressable onPress={onBasculer} accessibilityRole="button" accessibilityState={{ expanded: ouvert }} style={{ padding: t.espace.m, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>{titreControle(plan)}</Text>
          <Text style={{ color: C.attenue, fontSize: t.police.petite, marginTop: 2 }}>
            {majuscule(dateEnLettres(plan.dateControle))} · {delaiEnLettres(aujourdHui, plan.dateControle)}
          </Text>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 4 }}>
            {plan.chapitres.map((id) => plan.titres?.[id] ?? id).join(' · ')}
          </Text>
          <BarreAvancement t={t} faites={a.faites} total={a.total} couleur={couleur} />
        </View>
        <Text style={{ color: C.attenue, fontSize: t.police.grande, marginLeft: t.espace.s }}>{ouvert ? '▾' : '▸'}</Text>
      </Pressable>

      {ouvert && (
        <View style={{ paddingHorizontal: t.espace.m, paddingBottom: t.espace.m }}>
          {/* Mise en avant : la tâche du jour. */}
          {duJour && (
            <View style={{ backgroundColor: prochaine ? C.accent : C.succesFond, borderRadius: t.rayon.m, padding: t.espace.m, marginBottom: t.espace.m }}>
              <Text style={{ color: prochaine ? C.accentTexte : C.succes, fontSize: t.police.minuscule, fontWeight: '800', letterSpacing: 0.5, opacity: 0.9 }}>
                AUJOURD’HUI
              </Text>
              {prochaine ? (
                <>
                  <Text style={{ color: C.accentTexte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: 4 }}>
                    {iconeTache(prochaine.type)} {libelleTache(prochaine, plan.titres)}
                  </Text>
                  {(prochaine.chapitres.length === 1 || prochaine.type === 'bilan') && (
                    <Pressable
                      onPress={() => onOuvrir(prochaine)}
                      accessibilityRole="button"
                      style={({ pressed }) => ({ alignSelf: 'flex-start', backgroundColor: C.accentTexte, borderRadius: t.rayon.s, paddingHorizontal: 14, paddingVertical: 8, marginTop: t.espace.s, opacity: pressed ? 0.7 : 1 })}
                    >
                      <Text style={{ color: C.accent, fontWeight: '700', fontSize: t.police.petite }}>C’est parti ›</Text>
                    </Pressable>
                  )}
                  {prochaine.chapitres.length > 1 && prochaine.type !== 'bilan' && (
                    <Text style={{ color: C.accentTexte, fontSize: t.police.petite, marginTop: 4, opacity: 0.9 }}>
                      Choisis un chapitre ci-dessous.
                    </Text>
                  )}
                </>
              ) : (
                <Text style={{ color: C.succes, fontSize: t.police.normale, fontWeight: '700', marginTop: 4 }}>
                  {duJour.taches.length ? 'Tout est fait pour aujourd’hui, bravo ! 🎉' : 'Rien de prévu aujourd’hui : repose-toi.'}
                </Text>
              )}
            </View>
          )}

          {condense && (
            <Bandeau t={t} texte="⏱️ Il reste peu de temps : le plan va à l’essentiel et certaines journées sont plus longues." />
          )}

          {joursPasses.length > 0 && (
            <Pressable onPress={() => setVoirPasses(!voirPasses)} accessibilityRole="button" style={{ marginBottom: t.espace.s }}>
              <Text style={{ color: C.accent, fontSize: t.police.petite, fontWeight: '700' }}>
                {voirPasses ? 'Masquer les jours passés' : `Voir les jours passés${nonFaitesPassees ? ` (${nonFaitesPassees} tâche${nonFaitesPassees > 1 ? 's' : ''} non faite${nonFaitesPassees > 1 ? 's' : ''})` : ''}`}
              </Text>
            </Pressable>
          )}

          {joursAffiches.map((jour) => (
            <Jour key={jour.date} t={t} jour={jour} plan={plan} aujourdHui={aujourdHui} prochaineId={prochaine?.id} onCocher={onCocher} onOuvrir={onOuvrir} />
          ))}

          <Pressable onPress={onSupprimer} accessibilityRole="button" style={{ alignSelf: 'flex-start', marginTop: t.espace.m }} hitSlop={8}>
            <Text style={{ color: C.erreur, fontSize: t.police.petite, fontWeight: '700' }}>🗑️ Supprimer ce plan</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

function Jour({ t, jour, plan, aujourdHui, prochaineId, onCocher, onOuvrir }) {
  const C = t.couleur;
  const ecart = ecartJours(aujourdHui, jour.date);
  const quand = ecart === 0 ? ' · aujourd’hui' : (ecart === 1 ? ' · demain' : '');
  const role = jour.role === 'veille' ? 'Veille du contrôle' : (jour.role === 'jourJ' ? 'Jour du contrôle' : null);
  return (
    <View style={{ marginTop: t.espace.s, paddingTop: t.espace.s, borderTopWidth: 1, borderTopColor: C.trait, opacity: ecart < 0 ? 0.75 : 1 }}>
      <Text style={{ color: ecart === 0 ? C.accent : C.texte, fontSize: t.police.normale, fontWeight: '700' }}>
        {majuscule(dateEnLettres(jour.date))}{quand}
      </Text>
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginBottom: 4 }}>
        {[role, jour.minutes ? `environ ${jour.minutes}${NBSP}min` : null].filter(Boolean).join(' · ') || ' '}
      </Text>
      {jour.taches.length === 0 && (
        <Text style={{ color: C.attenue, fontSize: t.police.petite }}>Pas de révision : bonne chance pour ton contrôle !</Text>
      )}
      {jour.taches.map((tache) => (
        <LigneTache
          key={tache.id}
          t={t}
          tache={tache}
          plan={plan}
          fait={!!plan.faites?.[tache.id]}
          enAvant={tache.id === prochaineId}
          onCocher={() => onCocher(tache)}
          onOuvrir={(chapitreId) => onOuvrir(tache, chapitreId)}
        />
      ))}
    </View>
  );
}

function LigneTache({ t, tache, plan, fait, enAvant, onCocher, onOuvrir }) {
  const C = t.couleur;
  const libelle = libelleTache(tache, plan.titres);
  const plusieurs = tache.chapitres.length > 1 && tache.type !== 'bilan';
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 6, padding: t.espace.s, borderRadius: t.rayon.s, borderWidth: 1, borderColor: enAvant ? C.accent : 'transparent', backgroundColor: fait ? C.succesFond : C.fond }}>
      <Pressable
        onPress={onCocher}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: fait }}
        accessibilityLabel={`Fait : ${libelle}`}
        hitSlop={8}
        style={{ width: 26, height: 26, borderRadius: 6, borderWidth: 2, borderColor: fait ? C.succes : C.attenue, backgroundColor: fait ? C.succes : 'transparent', alignItems: 'center', justifyContent: 'center', marginRight: t.espace.s, marginTop: 1 }}
      >
        {fait && <Text style={{ color: '#fff', fontWeight: '900', fontSize: 15, lineHeight: 18 }}>✓</Text>}
      </Pressable>
      <View style={{ flex: 1 }}>
        <Pressable
          onPress={plusieurs ? undefined : () => onOuvrir()}
          disabled={plusieurs}
          accessibilityRole="button"
          accessibilityLabel={libelle}
          style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
        >
          <Text style={{ color: C.texte, fontSize: t.police.normale, fontWeight: '600', textDecorationLine: fait ? 'line-through' : 'none' }}>
            {iconeTache(tache.type)} {libelle}{plusieurs ? '' : ' ›'}
          </Text>
          <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
            {tache.revision ? 'Révision · ' : ''}{tache.minutes}{NBSP}min
          </Text>
        </Pressable>
        {plusieurs && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 }}>
            {tache.chapitres.map((id) => (
              <Pressable
                key={id}
                onPress={() => onOuvrir(id)}
                accessibilityRole="button"
                style={({ pressed }) => ({ borderWidth: 1, borderColor: C.accent, borderRadius: t.rayon.s, paddingHorizontal: 10, paddingVertical: 5, marginRight: 6, marginTop: 4, opacity: pressed ? 0.6 : 1 })}
              >
                <Text style={{ color: C.accent, fontSize: t.police.petite, fontWeight: '600' }}>{plan.titres?.[id] ?? id} ›</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

function BarreAvancement({ t, faites, total, couleur }) {
  const C = t.couleur;
  const p = total ? faites / total : 0;
  return (
    <View style={{ marginTop: t.espace.s }}>
      <View style={{ height: 6, backgroundColor: C.trait, borderRadius: 3, overflow: 'hidden' }}>
        <View style={{ width: `${Math.round(p * 100)}%`, height: 6, backgroundColor: couleur }} />
      </View>
      <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 3 }}>
        {faites}/{total} tâche{total > 1 ? 's' : ''} faite{faites > 1 ? 's' : ''}
      </Text>
    </View>
  );
}

function Bouton({ t, texte, onPress, desactive }) {
  const C = t.couleur;
  return (
    <Pressable
      onPress={desactive ? undefined : onPress}
      disabled={desactive}
      accessibilityRole="button"
      style={({ pressed }) => ({ backgroundColor: C.accent, borderRadius: t.rayon.m, paddingVertical: 12, paddingHorizontal: 16, alignItems: 'center', opacity: desactive ? 0.5 : (pressed ? 0.75 : 1) })}
    >
      <Text style={{ color: C.accentTexte, fontWeight: '700', fontSize: t.police.moyenne, textAlign: 'center' }}>{texte}</Text>
    </Pressable>
  );
}

// ── Création d'un plan : classe → matière → chapitres → date ─────────────────

function NouveauPlan({ t, aujourdHui, niveauDefaut, onCreer, onAnnuler }) {
  const C = t.couleur;
  const classes = useMemo(() => niveaux().map((n) => ({ id: n, nom: LIBELLES_NIVEAU[n] ?? n })), []);
  const [classe, setClasse] = useState(classes.some((c) => c.id === niveauDefaut) ? niveauDefaut : null);
  const [matiere, setMatiere] = useState(null);
  const [choisis, setChoisis] = useState([]); // ids des chapitres, dans l'ordre de l'année
  const [date, setDate] = useState(null);
  const dates = useMemo(() => optionsDates(aujourdHui), [aujourdHui]);

  const matieres = useMemo(() => {
    const m = new Map();
    for (const c of CHAPITRES) if (c.niveau === classe && !m.has(c.matiere)) m.set(c.matiere, LIBELLES_MATIERE[c.matiere] ?? c.matiere);
    return [...m.entries()].map(([id, nom]) => ({ id, nom })).sort((x, y) => x.nom.localeCompare(y.nom, 'fr'));
  }, [classe]);

  // Chapitres de la matière, regroupés par parcours (ex. spécialité / complémentaires).
  const groupes = useMemo(() => {
    const g = new Map();
    for (const c of CHAPITRES) {
      if (c.niveau !== classe || c.matiere !== matiere) continue;
      if (!g.has(c.parcours)) g.set(c.parcours, []);
      g.get(c.parcours).push(c);
    }
    return [...g.entries()].map(([parcours, chapitres]) => ({ parcours, nom: LIBELLES_PARCOURS[parcours] ?? parcours, chapitres }));
  }, [classe, matiere]);

  const basculerChapitre = (id) => {
    if (choisis.includes(id)) setChoisis(choisis.filter((x) => x !== id));
    else if (choisis.length < MAX_CHAPITRES) setChoisis([...choisis, id]);
  };

  const pret = classe && matiere && choisis.length >= 1 && date;

  const creer = () => {
    if (!pret) return;
    const chapitres = choisis.map((id) => descriptionChapitre(CHAPITRES.find((c) => c.id === id))).filter(Boolean);
    try {
      onCreer(creerPlan({ niveau: classe, matiere, chapitres, aujourdHui, dateControle: date }));
    } catch (e) {
      Alert.alert('Plan impossible', e?.message || 'Le plan n’a pas pu être créé.');
    }
  };

  const chip = (on) => ({ borderWidth: 1, borderColor: on ? C.accent : C.trait, backgroundColor: on ? C.accent : 'transparent', borderRadius: t.rayon.m, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, marginBottom: 8 });
  const chipTxt = (on) => ({ color: on ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.petite });
  const etape = { color: C.attenue, fontSize: t.police.minuscule, fontWeight: '700', marginTop: t.espace.m, marginBottom: 8 };

  const nomDate = date ? dateEnLettres(date) : null;
  const nbJours = date ? ecartJours(aujourdHui, date) : 0;

  return (
    <View>
      <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '700' }}>Je révise mon contrôle</Text>
      <Text style={{ color: C.attenue, fontSize: t.police.petite, lineHeight: 19, marginTop: 4 }}>
        Indique ce qui tombe et quand : je te prépare un petit programme pour chaque jour.
      </Text>

      <Text style={etape}>1. TA CLASSE</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {classes.map((c) => (
          <Pressable key={c.id} onPress={() => { setClasse(c.id); setMatiere(null); setChoisis([]); }} style={chip(classe === c.id)} accessibilityRole="button" accessibilityState={{ selected: classe === c.id }}>
            <Text style={chipTxt(classe === c.id)}>{c.nom}</Text>
          </Pressable>
        ))}
      </View>

      {classe && (
        <>
          <Text style={etape}>2. LA MATIÈRE</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {matieres.map((m) => (
              <Pressable key={m.id} onPress={() => { setMatiere(m.id); setChoisis([]); }} style={chip(matiere === m.id)} accessibilityRole="button" accessibilityState={{ selected: matiere === m.id }}>
                <Text style={chipTxt(matiere === m.id)}>{m.nom}</Text>
              </Pressable>
            ))}
          </View>
        </>
      )}

      {matiere && (
        <>
          <Text style={etape}>3. LES CHAPITRES DU CONTRÔLE ({choisis.length}/{MAX_CHAPITRES})</Text>
          {groupes.map((g) => (
            <View key={g.parcours}>
              {groupes.length > 1 && (
                <Text style={{ color: C.texte, fontSize: t.police.petite, fontWeight: '600', marginBottom: 6 }}>{g.nom}</Text>
              )}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {g.chapitres.map((c) => {
                  const on = choisis.includes(c.id);
                  const plein = !on && choisis.length >= MAX_CHAPITRES;
                  return (
                    <Pressable key={c.id} onPress={() => basculerChapitre(c.id)} disabled={plein} style={[chip(on), { opacity: plein ? 0.4 : 1 }]} accessibilityRole="checkbox" accessibilityState={{ checked: on, disabled: plein }}>
                      <Text style={chipTxt(on)}>{on ? '✓ ' : ''}{c.titre}</Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          ))}
          {choisis.length >= MAX_CHAPITRES && (
            <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginBottom: 4 }}>
              {`${MAX_CHAPITRES}${NBSP}chapitres au maximum : retire-en un pour en choisir un autre.`}
            </Text>
          )}
        </>
      )}

      {choisis.length > 0 && (
        <>
          <Text style={etape}>4. LA DATE DU CONTRÔLE</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {dates.map((d) => (
              <Pressable key={d.date} onPress={() => setDate(d.date)} style={chip(date === d.date)} accessibilityRole="button" accessibilityState={{ selected: date === d.date }}>
                <Text style={chipTxt(date === d.date)}>{d.libelle}</Text>
                <Text style={{ color: date === d.date ? C.accentTexte : C.attenue, fontSize: t.police.minuscule, opacity: 0.9 }}>{d.detail}</Text>
              </Pressable>
            ))}
          </View>
        </>
      )}

      {pret && (
        <Text style={{ color: C.texte, fontSize: t.police.petite, lineHeight: 19, marginTop: t.espace.s }}>
          {`Contrôle le ${nomDate} : ${nbJours === 1 ? 'il te reste aujourd’hui pour réviser' : `${nbJours}${NBSP}jours pour réviser`} ${choisis.length}${NBSP}chapitre${choisis.length > 1 ? 's' : ''}.`}
        </Text>
      )}

      <View style={{ marginTop: t.espace.m }}>
        <Bouton
          t={t}
          texte={pret ? 'Créer mon plan de révision' : 'Choisis les chapitres et la date'}
          onPress={creer}
          desactive={!pret}
        />
      </View>
      {onAnnuler && (
        <Pressable onPress={onAnnuler} accessibilityRole="button" style={{ alignSelf: 'center', marginTop: t.espace.m }} hitSlop={8}>
          <Text style={{ color: C.attenue, fontSize: t.police.petite, fontWeight: '700' }}>Annuler</Text>
        </Pressable>
      )}
    </View>
  );
}
