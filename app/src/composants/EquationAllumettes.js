/**
 * EquationAllumettes — affiche une égalité en ALLUMETTES.
 *
 * L'entrée `texte` ne contient QUE les caractères « 0123456789+-= ».
 * Chaque caractère est dessiné avec de petites barres (des View positionnées
 * en absolu) couleur bois : aucune image, aucune dépendance SVG.
 *
 *   - un chiffre = 7 segments (afficheur « 7 segments » classique) ;
 *   - « + » = deux allumettes croisées (une verticale, une horizontale) ;
 *   - « - » = une allumette horizontale ;
 *   - « = » = deux allumettes horizontales.
 *
 * Le rendu est centré, tient dans la largeur, et défile horizontalement
 * (ScrollView) si l'équation est trop longue.
 */

import { View, ScrollView, StyleSheet } from 'react-native';

// Géométrie d'un chiffre. On garde des proportions d'allumette réalistes.
const LARGEUR = 34; // largeur d'un chiffre
const HAUTEUR = 60; // hauteur d'un chiffre
const EP = 6; // épaisseur d'une allumette
const ESPACE = 10; // espace horizontal entre deux caractères

// Table des 7 segments allumés pour chaque chiffre.
// Ordre des segments : [haut, hautGauche, hautDroite, milieu, basGauche, basDroite, bas]
// (soit, en notation afficheur : [a, f, b, g, e, c, d]).
// VÉRIFIÉE : 0 = tout sauf milieu ; 1 = les deux segments de droite ; etc.
const SEGMENTS = {
  '0': [1, 1, 1, 0, 1, 1, 1],
  '1': [0, 0, 1, 0, 0, 1, 0],
  '2': [1, 0, 1, 1, 1, 0, 1],
  '3': [1, 0, 1, 1, 0, 1, 1],
  '4': [0, 1, 1, 1, 0, 1, 0],
  '5': [1, 1, 0, 1, 0, 1, 1],
  '6': [1, 1, 0, 1, 1, 1, 1],
  '7': [1, 0, 1, 0, 0, 1, 0],
  '8': [1, 1, 1, 1, 1, 1, 1],
  '9': [1, 1, 1, 1, 0, 1, 1],
};

// Position (absolue) de chaque segment dans le cadre LARGEUR × HAUTEUR.
// h = allumette horizontale, v = allumette verticale.
const POS_SEGMENTS = [
  { k: 'h', top: 0, left: EP / 2, w: LARGEUR - EP }, // haut (a)
  { k: 'v', top: EP / 2, left: 0, h: HAUTEUR / 2 - EP / 2 }, // haut-gauche (f)
  { k: 'v', top: EP / 2, left: LARGEUR - EP, h: HAUTEUR / 2 - EP / 2 }, // haut-droite (b)
  { k: 'h', top: HAUTEUR / 2 - EP / 2, left: EP / 2, w: LARGEUR - EP }, // milieu (g)
  { k: 'v', top: HAUTEUR / 2 + EP / 2, left: 0, h: HAUTEUR / 2 - EP / 2 }, // bas-gauche (e)
  { k: 'v', top: HAUTEUR / 2 + EP / 2, left: LARGEUR - EP, h: HAUTEUR / 2 - EP / 2 }, // bas-droite (c)
  { k: 'h', top: HAUTEUR - EP, left: EP / 2, w: LARGEUR - EP }, // bas (d)
];

// Une allumette : une petite barre en bois, coins légèrement arrondis.
function Allumette({ couleur, style }) {
  return <View style={[{ position: 'absolute', backgroundColor: couleur, borderRadius: EP / 2 }, style]} />;
}

// Dessine un chiffre 0-9 à partir de sa table de segments.
function Chiffre({ c, couleur }) {
  const segs = SEGMENTS[c];
  return (
    <View style={{ width: LARGEUR, height: HAUTEUR }}>
      {segs.map((allume, i) => {
        if (!allume) return null;
        const p = POS_SEGMENTS[i];
        const style =
          p.k === 'h'
            ? { top: p.top, left: p.left, width: p.w, height: EP }
            : { top: p.top, left: p.left, width: EP, height: p.h };
        return <Allumette key={i} couleur={couleur} style={style} />;
      })}
    </View>
  );
}

// « + » : une verticale et une horizontale croisées au centre.
function Plus({ couleur }) {
  const mid = HAUTEUR / 2;
  return (
    <View style={{ width: LARGEUR, height: HAUTEUR }}>
      <Allumette
        couleur={couleur}
        style={{ top: mid - EP / 2, left: EP / 2, width: LARGEUR - EP, height: EP }}
      />
      <Allumette
        couleur={couleur}
        style={{ top: mid - (LARGEUR - EP) / 2, left: LARGEUR / 2 - EP / 2, width: EP, height: LARGEUR - EP }}
      />
    </View>
  );
}

// « - » : une seule allumette horizontale, au centre.
function Moins({ couleur }) {
  const mid = HAUTEUR / 2;
  return (
    <View style={{ width: LARGEUR, height: HAUTEUR }}>
      <Allumette couleur={couleur} style={{ top: mid - EP / 2, left: EP / 2, width: LARGEUR - EP, height: EP }} />
    </View>
  );
}

// « = » : deux allumettes horizontales, encadrant le centre.
function Egal({ couleur }) {
  const mid = HAUTEUR / 2;
  const ecart = 9;
  return (
    <View style={{ width: LARGEUR, height: HAUTEUR }}>
      <Allumette couleur={couleur} style={{ top: mid - ecart, left: EP / 2, width: LARGEUR - EP, height: EP }} />
      <Allumette couleur={couleur} style={{ top: mid + ecart - EP, left: EP / 2, width: LARGEUR - EP, height: EP }} />
    </View>
  );
}

export default function EquationAllumettes({ texte, t }) {
  // Couleur bois : le jeton de texte du thème en sombre, une teinte chêne en clair.
  const couleur = t?.couleur?.sombre ? t.couleur.texte : '#c8a24a';
  const fond = t?.couleur?.fond ?? '#ffffff';
  const chars = String(texte ?? '').split('');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[st.rangee, { backgroundColor: fond }]}
      style={{ backgroundColor: fond }}
    >
      {chars.map((c, i) => {
        let contenu = null;
        if (c >= '0' && c <= '9') contenu = <Chiffre c={c} couleur={couleur} />;
        else if (c === '+') contenu = <Plus couleur={couleur} />;
        else if (c === '-') contenu = <Moins couleur={couleur} />;
        else if (c === '=') contenu = <Egal couleur={couleur} />;
        else return null; // caractère non supporté : ignoré silencieusement
        return (
          <View key={i} style={{ marginHorizontal: ESPACE / 2 }}>
            {contenu}
          </View>
        );
      })}
    </ScrollView>
  );
}

const st = StyleSheet.create({
  rangee: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ESPACE,
    paddingVertical: ESPACE,
  },
});
