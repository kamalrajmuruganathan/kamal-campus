/**
 * Éditeur de planning de révision — composant réutilisable (onboarding + écran
 * Planning). L'utilisateur choisit un jour, une heure et une matière, ajoute le
 * créneau, et voit la liste des créneaux enregistrés (supprimables).
 *
 * Il ne gère PAS la persistance : il appelle `onChange(nouveauPlanning)` et
 * l'écran parent s'occupe d'enregistrer + de (re)programmer les notifications.
 */

import { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

export const JOURS = [
  { v: 1, court: 'Lun', long: 'Lundi' },
  { v: 2, court: 'Mar', long: 'Mardi' },
  { v: 3, court: 'Mer', long: 'Mercredi' },
  { v: 4, court: 'Jeu', long: 'Jeudi' },
  { v: 5, court: 'Ven', long: 'Vendredi' },
  { v: 6, court: 'Sam', long: 'Samedi' },
  { v: 7, court: 'Dim', long: 'Dimanche' },
];

export const MATIERES = [
  { nom: 'Maths', emoji: '🧮' },
  { nom: 'Physique-chimie', emoji: '⚛️' },
  { nom: 'SVT', emoji: '🧬' },
  { nom: 'Sciences', emoji: '🔬' },
  { nom: 'Technologie', emoji: '🛠️' },
  { nom: 'SNT', emoji: '🌐' },
  { nom: 'NSI', emoji: '💻' },
  { nom: 'Sciences de l’ingénieur', emoji: '⚙️' },
  { nom: 'Français', emoji: '📖' },
  { nom: 'Histoire-Géo', emoji: '🗺️' },
  { nom: 'Anglais', emoji: '🇬🇧' },
  { nom: 'Philosophie', emoji: '💭' },
  { nom: 'Révisions', emoji: '📚' },
];

// Heures proposées : de 07:00 à 21:30 par tranches de 30 min.
const HEURES = [];
for (let h = 7; h <= 21; h += 1) {
  HEURES.push(`${String(h).padStart(2, '0')}:00`);
  HEURES.push(`${String(h).padStart(2, '0')}:30`);
}

const emojiDe = (nom) => (MATIERES.find((m) => m.nom === nom) || {}).emoji || '📚';
const courtDe = (v) => (JOURS.find((j) => j.v === v) || {}).court || '?';

function Pilule({ t, actif, onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        st.pilule,
        {
          backgroundColor: actif ? t.couleur.accent : t.couleur.fond,
          borderColor: actif ? t.couleur.accent : t.couleur.trait,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
        {children}
      </Text>
    </Pressable>
  );
}

export default function PlanningEditeur({ t, planning, onChange }) {
  const [jour, setJour] = useState(1);
  const [heure, setHeure] = useState('17:00');
  const [matiere, setMatiere] = useState(MATIERES[0].nom);

  const ajouter = () => {
    const creneau = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      jour,
      heure,
      matiere,
    };
    onChange([...(planning || []), creneau]);
  };

  const retirer = (id) => onChange((planning || []).filter((c) => c.id !== id));

  const tri = [...(planning || [])].sort((a, b) =>
    a.jour - b.jour || String(a.heure).localeCompare(String(b.heure)),
  );

  return (
    <View>
      {/* Choix du jour */}
      <Text style={[st.lbl, { color: t.couleur.attenue }]}>JOUR</Text>
      <View style={st.ligne}>
        {JOURS.map((j) => (
          <Pilule key={j.v} t={t} actif={jour === j.v} onPress={() => setJour(j.v)}>
            {j.court}
          </Pilule>
        ))}
      </View>

      {/* Choix de l'heure */}
      <Text style={[st.lbl, { color: t.couleur.attenue, marginTop: t.espace.m }]}>HEURE</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 6 }}>
        <View style={{ flexDirection: 'row', gap: 8, paddingRight: 8 }}>
          {HEURES.map((h) => (
            <Pilule key={h} t={t} actif={heure === h} onPress={() => setHeure(h)}>
              {h}
            </Pilule>
          ))}
        </View>
      </ScrollView>

      {/* Choix de la matière */}
      <Text style={[st.lbl, { color: t.couleur.attenue, marginTop: t.espace.m }]}>MATIÈRE</Text>
      <View style={st.ligne}>
        {MATIERES.map((m) => (
          <Pilule key={m.nom} t={t} actif={matiere === m.nom} onPress={() => setMatiere(m.nom)}>
            {m.emoji} {m.nom}
          </Pilule>
        ))}
      </View>

      {/* Bouton ajouter */}
      <Pressable
        onPress={ajouter}
        style={({ pressed }) => [
          st.ajout,
          { backgroundColor: t.couleur.accent, borderRadius: t.rayon.m, marginTop: t.espace.m, opacity: pressed ? 0.85 : 1 },
        ]}
      >
        <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.normale, fontWeight: '700' }}>
          ＋ Ajouter {emojiDe(matiere)} {matiere} · {courtDe(jour)} {heure}
        </Text>
      </Pressable>

      {/* Liste des créneaux */}
      <View style={{ marginTop: t.espace.l }}>
        {tri.length === 0 ? (
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, lineHeight: 19 }}>
            Aucun créneau pour l'instant. Ajoute par exemple « Maths · Lundi 17:00 » : tu recevras
            une notification à cette heure-là, chaque semaine.
          </Text>
        ) : (
          tri.map((c) => (
            <View
              key={c.id}
              style={[st.item, { backgroundColor: t.couleur.fond, borderColor: t.couleur.trait, borderRadius: t.rayon.m }]}
            >
              <Text style={{ fontSize: 18, marginRight: t.espace.s }}>{emojiDe(c.matiere)}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>{c.matiere}</Text>
                <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 1 }}>
                  {(JOURS.find((j) => j.v === c.jour) || {}).long} · {c.heure}
                </Text>
              </View>
              <Pressable onPress={() => retirer(c.id)} hitSlop={10} accessibilityLabel={`Supprimer ${c.matiere} ${courtDe(c.jour)} ${c.heure}`}>
                <Text style={{ color: t.couleur.erreur, fontSize: t.police.grande, paddingHorizontal: 6 }}>✕</Text>
              </Pressable>
            </View>
          ))
        )}
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  lbl: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginBottom: 6 },
  ligne: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pilule: { paddingVertical: 8, paddingHorizontal: 13, borderRadius: 999, borderWidth: 1 },
  ajout: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14 },
  item: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 12, marginBottom: 8 },
});
