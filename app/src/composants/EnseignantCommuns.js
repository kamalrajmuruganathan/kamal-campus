/**
 * Petits composants partagés par l'espace enseignant (EspaceEnseignant.js)
 * et l'écran de l'élève « Mes classes » (MesClasses.js).
 */
import { View, Text, Pressable, TextInput, Alert, Platform } from 'react-native';

const WEB = Platform.OS === 'web';

export function avertir(titre, message) {
  if (WEB && typeof window !== 'undefined') window.alert(message ? `${titre}\n\n${message}` : titre);
  else Alert.alert(titre, message);
}

export function confirmer(titre, message, libelleOk, action) {
  if (WEB && typeof window !== 'undefined') { if (window.confirm(`${titre}\n\n${message}`)) action(); return; }
  Alert.alert(titre, message, [
    { text: 'Annuler', style: 'cancel' },
    { text: libelleOk, style: 'destructive', onPress: action },
  ]);
}

/** Copie un texte (presse-papiers sur le web). Renvoie vrai si c'est fait. */
export async function copierTexte(texte) {
  if (WEB && typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(texte); return true; } catch { return false; }
  }
  return false;
}

export function CarteE({ t, style, children }) {
  return (
    <View style={[{ padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m, borderWidth: 1, borderColor: t.couleur.trait }, style]}>
      {children}
    </View>
  );
}

export function BoutonE({ t, libelle, onPress, desactive = false, secondaire = false, danger = false, style, accessibilityLabel }) {
  const C = t.couleur;
  const fond = secondaire || danger ? 'transparent' : C.accent;
  const texte = danger ? C.erreur : secondaire ? C.accent : C.accentTexte;
  return (
    <Pressable
      onPress={desactive ? undefined : onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || libelle}
      accessibilityState={{ disabled: desactive }}
      style={({ pressed }) => [{
        paddingVertical: 11, paddingHorizontal: 16, borderRadius: t.rayon.m, backgroundColor: fond,
        borderWidth: secondaire || danger ? 1 : 0, borderColor: danger ? C.erreur : C.accent,
        opacity: desactive ? 0.5 : pressed ? 0.75 : 1, alignItems: 'center', justifyContent: 'center', minHeight: 44,
      }, style]}
    >
      <Text style={{ color: texte, fontWeight: '700', fontSize: t.police.normale, textAlign: 'center' }}>{libelle}</Text>
    </Pressable>
  );
}

export function Puce({ t, libelle, actif, onPress, accessibilityLabel, role = 'radio' }) {
  const C = t.couleur;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole={role}
      accessibilityState={{ checked: !!actif }}
      accessibilityLabel={accessibilityLabel || libelle}
      style={{
        borderWidth: 1, borderColor: actif ? C.accent : C.trait, backgroundColor: actif ? C.accent : 'transparent',
        borderRadius: t.rayon.m, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8, marginBottom: 8,
        minHeight: 40, maxWidth: '100%', justifyContent: 'center',
      }}
    >
      <Text style={{ color: actif ? C.accentTexte : C.texte, fontWeight: '700', fontSize: t.police.petite }}>{libelle}</Text>
    </Pressable>
  );
}

export function Champ({ t, libelle, aide, style, ...props }) {
  const C = t.couleur;
  return (
    <View style={style}>
      {libelle ? <Text style={{ color: C.texte, fontWeight: '700', fontSize: t.police.petite, marginBottom: 6 }}>{libelle}</Text> : null}
      <TextInput
        placeholderTextColor={C.attenue}
        style={{
          borderWidth: 1, borderColor: C.trait, borderRadius: t.rayon.m, backgroundColor: C.fond, color: C.texte,
          paddingHorizontal: 12, paddingVertical: 10, fontSize: t.police.normale, minHeight: 44,
        }}
        accessibilityLabel={libelle}
        {...props}
      />
      {aide ? <Text style={{ color: C.attenue, fontSize: t.police.minuscule, marginTop: 4, lineHeight: 16 }}>{aide}</Text> : null}
    </View>
  );
}

export function Encadre({ t, titre, texte, ton = 'info', style }) {
  const C = t.couleur;
  const fond = ton === 'alerte' ? (C.alerteFond ?? C.surface) : ton === 'succes' ? C.succesFond : C.surface;
  const encre = ton === 'alerte' ? (C.alerte ?? C.texte) : ton === 'succes' ? C.succes : C.texte;
  return (
    <View style={[{ padding: t.espace.m, borderRadius: t.rayon.m, backgroundColor: fond, borderWidth: ton === 'info' ? 1 : 0, borderColor: C.trait }, style]}>
      {titre ? <Text style={{ color: encre, fontWeight: '800', fontSize: t.police.normale }}>{titre}</Text> : null}
      {texte ? <Text style={{ color: C.texte, fontSize: t.police.petite, marginTop: titre ? 6 : 0, lineHeight: 19 }}>{texte}</Text> : null}
    </View>
  );
}

export function TitreSection({ t, children, style }) {
  return (
    <Text style={[{ color: t.couleur.attenue, fontSize: t.police.minuscule, fontWeight: '800', letterSpacing: 0.8, marginTop: t.espace.l, marginBottom: t.espace.s }, style]} accessibilityRole="header">
      {children}
    </Text>
  );
}
