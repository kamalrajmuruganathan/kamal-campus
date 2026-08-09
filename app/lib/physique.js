/**
 * Kamal Campus — Physique : mouvement, énergie, ondes, électricité
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Comme pour la chimie, ce module traque les UNITÉS : les conversions sont
 * explicites et apparaissent dans les étapes. En physique, un nombre sans
 * unité est faux.
 */

const arrondi = (x, d = 6) => (Number.isInteger(x) ? x : Number(x.toFixed(d)));
const estNombre = (v) => typeof v === 'number' && Number.isFinite(v);
const estPositif = (v) => estNombre(v) && v > 0;

// ───────────────────────────── constantes ───────────────────────────────────

export const CONSTANTES = {
  g: 9.8,          // N·kg⁻¹, intensité de pesanteur terrestre
  g_lune: 1.6,     // N·kg⁻¹
  c: 3.0e8,        // m·s⁻¹, célérité de la lumière dans le vide
  v_son: 340,      // m·s⁻¹, célérité du son dans l'air
  G: 6.67e-11,     // N·m²·kg⁻², constante de gravitation
};

// ──────────────────────────── conversions ───────────────────────────────────

/** km·h⁻¹ → m·s⁻¹ (on DIVISE par 3,6). */
export function kmhVersMs(kmh) {
  if (!estNombre(kmh)) return { valide: false, erreur: 'La vitesse doit être un nombre.' };
  const ms = kmh / 3.6;
  return {
    valide: true,
    valeur: arrondi(ms),
    unite: 'm·s⁻¹',
    etapes: [
      { titre: 'Conversion', detail: `${kmh} / 3,6 = ${arrondi(ms)} m·s⁻¹` },
      { titre: '⚠️ Sens', detail: 'On DIVISE par 3,6 pour aller des km·h⁻¹ aux m·s⁻¹. Multiplier donnerait une valeur absurde.' },
    ],
  };
}

export function msVersKmh(ms) {
  if (!estNombre(ms)) return { valide: false, erreur: 'La vitesse doit être un nombre.' };
  return { valide: true, valeur: arrondi(ms * 3.6), unite: 'km·h⁻¹' };
}

// ─────────────────────────────── mécanique ──────────────────────────────────

/** Poids : P = m × g. */
export function poids(masse_kg, g = CONSTANTES.g) {
  if (!estNombre(masse_kg) || masse_kg < 0) return { valide: false, erreur: 'La masse doit être un nombre positif.' };
  if (!estPositif(g)) return { valide: false, erreur: 'L’intensité de pesanteur doit être strictement positive.' };
  const P = masse_kg * g;
  return {
    valide: true,
    poids: arrondi(P),
    unite: 'N',
    etapes: [
      { titre: 'Formule', detail: 'P = m × g' },
      { titre: 'Calcul', detail: `P = ${masse_kg} × ${g} = ${arrondi(P)} N` },
      {
        titre: '⚠️ Masse ≠ poids',
        detail: `La masse (${masse_kg} kg) est la même partout ; le poids (${arrondi(P)} N) dépend du lieu. `
          + `Sur la Lune (g = ${CONSTANTES.g_lune}), le même objet pèserait ${arrondi(masse_kg * CONSTANTES.g_lune)} N.`,
      },
    ],
  };
}

/** Force d'interaction gravitationnelle. */
export function gravitation(m1, m2, d) {
  if (![m1, m2].every(estPositif)) return { valide: false, erreur: 'Les masses doivent être strictement positives.' };
  if (!estPositif(d)) return { valide: false, erreur: 'La distance doit être strictement positive.' };
  const F = (CONSTANTES.G * m1 * m2) / (d * d);
  return {
    valide: true,
    force: Number(F.toPrecision(6)),
    unite: 'N',
    etapes: [
      { titre: 'Formule', detail: 'F = G × m₁ × m₂ / d²' },
      { titre: 'Calcul', detail: `F = ${CONSTANTES.G} × ${m1} × ${m2} / ${d}² = ${F.toExponential(3)} N` },
      {
        titre: '⚠️ Dépendance en d²',
        detail: `Doubler la distance divise la force par 4, pas par 2. À ${2 * d} m, elle vaudrait ${(F / 4).toExponential(3)} N.`,
      },
      { titre: 'Réciprocité', detail: 'Les deux corps subissent cette force avec la même valeur, en sens opposés.' },
    ],
  };
}

/** Vitesse moyenne v = d / Δt. */
export function vitesseMoyenne(distance_m, duree_s) {
  if (!estNombre(distance_m) || distance_m < 0) return { valide: false, erreur: 'La distance doit être positive.' };
  if (!estPositif(duree_s)) return { valide: false, erreur: 'La durée doit être strictement positive.' };
  const v = distance_m / duree_s;
  return {
    valide: true,
    vitesse: arrondi(v),
    unite: 'm·s⁻¹',
    vitesseKmh: arrondi(v * 3.6),
    etapes: [
      { titre: 'Formule', detail: 'v = d / Δt' },
      { titre: 'Calcul', detail: `v = ${distance_m} / ${duree_s} = ${arrondi(v)} m·s⁻¹ (soit ${arrondi(v * 3.6)} km·h⁻¹)` },
    ],
  };
}

// ──────────────────────────────── énergies ──────────────────────────────────

/** Énergie cinétique Ec = ½mv². */
export function energieCinetique(masse_kg, vitesse_ms) {
  if (!estNombre(masse_kg) || masse_kg < 0) return { valide: false, erreur: 'La masse doit être positive.' };
  if (!estNombre(vitesse_ms)) return { valide: false, erreur: 'La vitesse doit être un nombre.' };
  const Ec = 0.5 * masse_kg * vitesse_ms * vitesse_ms;
  return {
    valide: true,
    energie: arrondi(Ec),
    unite: 'J',
    etapes: [
      { titre: 'Formule', detail: 'Ec = ½ × m × v²' },
      { titre: 'Calcul', detail: `Ec = 0,5 × ${masse_kg} × ${vitesse_ms}² = ${arrondi(Ec)} J` },
      {
        titre: '⚠️ Dépendance en v²',
        detail: `Doubler la vitesse QUADRUPLE l'énergie : à ${2 * vitesse_ms} m·s⁻¹, elle vaudrait ${arrondi(4 * Ec)} J. `
          + 'C’est l’argument physique de la sécurité routière.',
      },
      { titre: 'Unité', detail: 'La vitesse doit être en m·s⁻¹, jamais en km·h⁻¹.' },
    ],
  };
}

/** Énergie potentielle de pesanteur Epp = mgz. */
export function energiePotentielle(masse_kg, altitude_m, g = CONSTANTES.g) {
  if (!estNombre(masse_kg) || masse_kg < 0) return { valide: false, erreur: 'La masse doit être positive.' };
  if (!estNombre(altitude_m)) return { valide: false, erreur: 'L’altitude doit être un nombre.' };
  const E = masse_kg * g * altitude_m;
  return {
    valide: true,
    energie: arrondi(E),
    unite: 'J',
    etapes: [
      { titre: 'Formule', detail: 'Epp = m × g × z' },
      { titre: 'Calcul', detail: `Epp = ${masse_kg} × ${g} × ${altitude_m} = ${arrondi(E)} J` },
      { titre: 'Origine des altitudes', detail: 'z se mesure depuis une origine choisie librement : seules les VARIATIONS ont un sens physique.' },
    ],
  };
}

/** Énergie mécanique et conservation. */
export function energieMecanique(masse_kg, vitesse_ms, altitude_m, g = CONSTANTES.g) {
  const ec = energieCinetique(masse_kg, vitesse_ms);
  if (!ec.valide) return ec;
  const ep = energiePotentielle(masse_kg, altitude_m, g);
  if (!ep.valide) return ep;
  const Em = ec.energie + ep.energie;
  return {
    valide: true,
    energieCinetique: ec.energie,
    energiePotentielle: ep.energie,
    energieMecanique: arrondi(Em),
    unite: 'J',
    etapes: [
      { titre: 'Énergie cinétique', detail: `${ec.energie} J` },
      { titre: 'Énergie potentielle', detail: `${ep.energie} J` },
      { titre: 'Énergie mécanique', detail: `Em = Ec + Epp = ${arrondi(Em)} J` },
      { titre: 'Conservation', detail: 'Sans frottements, Em reste CONSTANTE : l’énergie se convertit d’une forme à l’autre.' },
    ],
  };
}

/**
 * Vitesse au sol après une chute libre d'une hauteur h : v = √(2gh).
 * La masse se simplifie — c'est l'expérience de Galilée.
 */
export function chuteLibre(hauteur_m, g = CONSTANTES.g) {
  if (!estNombre(hauteur_m) || hauteur_m < 0) return { valide: false, erreur: 'La hauteur doit être positive.' };
  const v = Math.sqrt(2 * g * hauteur_m);
  return {
    valide: true,
    vitesse: arrondi(v),
    unite: 'm·s⁻¹',
    vitesseKmh: arrondi(v * 3.6),
    etapes: [
      { titre: 'Conservation', detail: 'mgh = ½mv² (sans frottements)' },
      { titre: 'Simplification', detail: 'La MASSE SE SIMPLIFIE : v = √(2gh). Tous les corps arrivent à la même vitesse.' },
      { titre: 'Calcul', detail: `v = √(2 × ${g} × ${hauteur_m}) = ${arrondi(v)} m·s⁻¹` },
    ],
  };
}

/** Travail d'une force : W = F·d·cos α. */
export function travail(force_N, deplacement_m, angleDegres = 0) {
  if (!estNombre(force_N) || force_N < 0) return { valide: false, erreur: 'La force doit être positive.' };
  if (!estNombre(deplacement_m) || deplacement_m < 0) return { valide: false, erreur: 'Le déplacement doit être positif.' };
  if (!estNombre(angleDegres)) return { valide: false, erreur: 'L’angle doit être un nombre.' };

  const cos = Math.cos((angleDegres * Math.PI) / 180);
  const W = force_N * deplacement_m * cos;
  const nul = Math.abs(W) < 1e-12;

  return {
    valide: true,
    travail: arrondi(W),
    unite: 'J',
    nature: nul ? 'nul' : W > 0 ? 'moteur' : 'résistant',
    etapes: [
      { titre: 'Formule', detail: 'W = F × d × cos α' },
      { titre: 'Calcul', detail: `W = ${force_N} × ${deplacement_m} × cos(${angleDegres}°) = ${arrondi(W)} J` },
      {
        titre: 'Nature',
        detail: nul
          ? 'Travail NUL : la force est perpendiculaire au déplacement, elle ne travaille pas.'
          : W > 0 ? 'Travail MOTEUR : la force accélère le mouvement.' : 'Travail RÉSISTANT : la force freine le mouvement.',
      },
    ],
  };
}

// ─────────────────────────────── électricité ────────────────────────────────

/** Loi d'Ohm : U = RI. */
export function loiOhm({ U = null, R = null, I = null }) {
  const fournis = [U, R, I].filter((x) => x !== null && x !== undefined).length;
  if (fournis !== 2) return { valide: false, erreur: `Il faut fournir exactement deux des trois grandeurs (U, R, I). Reçu : ${fournis}.` };

  let manquant, valeur, unite;
  if (U === null) { manquant = 'U'; valeur = R * I; unite = 'V'; }
  else if (R === null) {
    if (I === 0) return { valide: false, erreur: 'I = 0 : la résistance ne peut pas être déterminée.' };
    manquant = 'R'; valeur = U / I; unite = 'Ω';
  } else {
    if (R === 0) return { valide: false, erreur: 'R = 0 : l’intensité serait infinie.' };
    manquant = 'I'; valeur = U / R; unite = 'A';
  }

  return {
    valide: true,
    manquant,
    valeur: arrondi(valeur),
    unite,
    etapes: [
      { titre: 'Loi d’Ohm', detail: 'U = R × I' },
      { titre: 'Calcul', detail: `${manquant} = ${arrondi(valeur)} ${unite}` },
      { titre: 'Contrôle par les unités', detail: 'Ω × A = V ✓' },
    ],
  };
}

/** Puissance et énergie électriques. */
export function puissanceElectrique(U_V, I_A) {
  if (![U_V, I_A].every(estNombre)) return { valide: false, erreur: 'U et I doivent être des nombres.' };
  const P = U_V * I_A;
  return {
    valide: true,
    puissance: arrondi(P),
    unite: 'W',
    etapes: [
      { titre: 'Formule', detail: 'P = U × I' },
      { titre: 'Calcul', detail: `P = ${U_V} × ${I_A} = ${arrondi(P)} W` },
      { titre: '⚠️ Unité', detail: 'Le watt est une PUISSANCE. Le joule et le kWh sont des ÉNERGIES.' },
    ],
  };
}

/**
 * Énergie électrique E = P × Δt.
 * @param {number} puissance_W
 * @param {number} duree  valeur
 * @param {'s'|'min'|'h'} unite
 */
export function energieElectrique(puissance_W, duree, unite = 's') {
  const FACTEURS = { s: 1, min: 60, h: 3600 };
  const f = FACTEURS[unite];
  if (f === undefined) return { valide: false, erreur: `Unité de durée inconnue : « ${unite} ». Utilise s, min ou h.` };
  if (!estNombre(puissance_W) || puissance_W < 0) return { valide: false, erreur: 'La puissance doit être positive.' };
  if (!estNombre(duree) || duree < 0) return { valide: false, erreur: 'La durée doit être positive.' };

  const secondes = duree * f;
  const E = puissance_W * secondes;
  const kWh = E / 3.6e6;

  return {
    valide: true,
    energie: Number(E.toPrecision(6)),
    unite: 'J',
    energieKWh: Number(kWh.toPrecision(6)),
    dureeSecondes: secondes,
    etapes: [
      { titre: 'Conversion', detail: `${duree} ${unite} = ${secondes} s`, remarque: '⚠️ La durée doit être en SECONDES pour obtenir des joules.' },
      { titre: 'Formule', detail: 'E = P × Δt' },
      { titre: 'Calcul', detail: `E = ${puissance_W} × ${secondes} = ${E.toExponential(3)} J` },
      { titre: 'En kWh', detail: `${Number(kWh.toPrecision(4))} kWh (1 kWh = 3,6 × 10⁶ J)` },
    ],
  };
}

/** Effet Joule : PJ = RI². */
export function effetJoule(R_ohm, I_A) {
  if (!estNombre(R_ohm) || R_ohm < 0) return { valide: false, erreur: 'La résistance doit être positive.' };
  if (!estNombre(I_A)) return { valide: false, erreur: 'L’intensité doit être un nombre.' };
  const P = R_ohm * I_A * I_A;
  return {
    valide: true,
    puissance: arrondi(P),
    unite: 'W',
    etapes: [
      { titre: 'Formule', detail: 'PJ = R × I²' },
      { titre: 'Calcul', detail: `PJ = ${R_ohm} × ${I_A}² = ${arrondi(P)} W` },
      {
        titre: '⚠️ Dépendance en I²',
        detail: `Doubler l'intensité QUADRUPLE les pertes : à ${2 * I_A} A, on aurait ${arrondi(4 * P)} W. `
          + 'C’est pourquoi l’électricité est transportée à très haute tension.',
      },
    ],
  };
}

/** Générateur réel : U = E − rI. */
export function generateurReel(E_V, r_ohm, I_A) {
  if (![E_V, r_ohm, I_A].every(estNombre)) return { valide: false, erreur: 'Toutes les grandeurs doivent être des nombres.' };
  if (r_ohm < 0) return { valide: false, erreur: 'La résistance interne doit être positive.' };
  const U = E_V - r_ohm * I_A;
  return {
    valide: true,
    tension: arrondi(U),
    unite: 'V',
    chute: arrondi(r_ohm * I_A),
    etapes: [
      { titre: 'Modèle', detail: 'U = E − r × I' },
      { titre: 'Calcul', detail: `U = ${E_V} − ${r_ohm} × ${I_A} = ${arrondi(U)} V` },
      { titre: 'Chute interne', detail: `${arrondi(r_ohm * I_A)} V sont perdus dans le générateur, dissipés par effet Joule.` },
      { titre: 'Conséquence', detail: 'Plus le générateur débite, plus la tension à ses bornes CHUTE.' },
    ],
  };
}

/** Rendement η = utile / fournie, borné à 1. */
export function rendement(utile, fournie) {
  if (![utile, fournie].every(estNombre) || utile < 0 || fournie <= 0) {
    return { valide: false, erreur: 'Les énergies doivent être positives, et l’énergie fournie non nulle.' };
  }
  const eta = utile / fournie;
  const dissipee = fournie - utile;

  if (eta > 1) {
    return {
      valide: false,
      erreur: `Le rendement vaudrait ${arrondi(eta)} > 1 : c’est IMPOSSIBLE. `
        + 'On ne peut pas récupérer plus d’énergie qu’on n’en fournit. Vérifie l’identification de l’énergie utile.',
      rendementCalcule: arrondi(eta),
    };
  }

  return {
    valide: true,
    rendement: arrondi(eta),
    pourcentage: arrondi(eta * 100, 2),
    energieDissipee: arrondi(dissipee),
    etapes: [
      { titre: 'Formule', detail: 'η = E_utile / E_fournie' },
      { titre: 'Calcul', detail: `η = ${utile} / ${fournie} = ${arrondi(eta)} soit ${arrondi(eta * 100, 2)} %` },
      { titre: 'Énergie dissipée', detail: `${arrondi(dissipee)} J partent en chaleur (effet Joule, frottements).` },
      { titre: 'Conservation', detail: 'E_fournie = E_utile + E_dissipée — rien ne disparaît.' },
    ],
  };
}

// ──────────────────────────────── ondes ─────────────────────────────────────

/** Relation fondamentale des ondes : λ = v/f = v×T. */
export function onde({ lambda = null, v = null, f = null, T = null }) {
  // T et f sont liés
  let freq = f;
  if (freq === null && T !== null) {
    if (!estPositif(T)) return { valide: false, erreur: 'La période doit être strictement positive.' };
    freq = 1 / T;
  }

  const connus = [lambda, v, freq].filter((x) => x !== null && x !== undefined).length;
  if (connus !== 2) {
    return { valide: false, erreur: `Il faut connaître exactement deux grandeurs parmi λ, v et f (ou T). Reçu : ${connus}.` };
  }

  let manquant, valeur, unite;
  if (lambda === null) { manquant = 'λ'; valeur = v / freq; unite = 'm'; }
  else if (v === null) { manquant = 'v'; valeur = lambda * freq; unite = 'm·s⁻¹'; }
  else { manquant = 'f'; valeur = v / lambda; unite = 'Hz'; }

  const L = lambda ?? valeur, V = v ?? valeur, F = freq ?? valeur;

  return {
    valide: true,
    manquant,
    valeur: arrondi(valeur),
    unite,
    lambda: arrondi(L),
    celerite: arrondi(V),
    frequence: arrondi(F),
    periode: arrondi(1 / F),
    etapes: [
      { titre: 'Relation fondamentale', detail: 'λ = v × T = v / f' },
      { titre: 'Calcul', detail: `${manquant} = ${arrondi(valeur)} ${unite}` },
      { titre: 'Signification de λ', detail: 'La longueur d’onde est la DISTANCE parcourue pendant une période — une période SPATIALE.' },
      {
        titre: '⚠️ Changement de milieu',
        detail: 'La fréquence est imposée par la source et NE CHANGE PAS. Ce sont v et λ qui changent.',
      },
    ],
  };
}

/** Retard de propagation τ = d/v. */
export function retard(distance_m, celerite_ms) {
  if (!estNombre(distance_m) || distance_m < 0) return { valide: false, erreur: 'La distance doit être positive.' };
  if (!estPositif(celerite_ms)) return { valide: false, erreur: 'La célérité doit être strictement positive.' };
  const tau = distance_m / celerite_ms;
  return {
    valide: true,
    retard: arrondi(tau),
    unite: 's',
    etapes: [
      { titre: 'Formule', detail: 'τ = d / v' },
      { titre: 'Calcul', detail: `τ = ${distance_m} / ${celerite_ms} = ${arrondi(tau)} s` },
    ],
  };
}

/** Grossissement d'une lunette afocale : G = f′₁/f′₂. */
export function lunette(focaleObjectif_m, focaleOculaire_m) {
  if (![focaleObjectif_m, focaleOculaire_m].every(estPositif)) {
    return { valide: false, erreur: 'Les distances focales doivent être strictement positives, EN MÈTRES.' };
  }
  const G = focaleObjectif_m / focaleOculaire_m;
  return {
    valide: true,
    grossissement: arrondi(G),
    distanceEntreLentilles: arrondi(focaleObjectif_m + focaleOculaire_m),
    etapes: [
      { titre: 'Formule', detail: 'G = f′₁ / f′₂ (objectif au numérateur)' },
      { titre: 'Calcul', detail: `G = ${focaleObjectif_m} / ${focaleOculaire_m} = ${arrondi(G)}` },
      { titre: 'Configuration afocale', detail: `Distance entre les lentilles = f′₁ + f′₂ = ${arrondi(focaleObjectif_m + focaleOculaire_m)} m` },
      { titre: '⚠️ Unités', detail: 'Les deux focales doivent être dans la MÊME unité — convertis les millimètres en mètres.' },
    ],
  };
}

/** Vergence d'une lentille : C = 1/f′. */
export function vergence(focale_m) {
  if (!estNombre(focale_m) || focale_m === 0) return { valide: false, erreur: 'La distance focale doit être un nombre non nul, EN MÈTRES.' };
  const C = 1 / focale_m;
  return {
    valide: true,
    vergence: arrondi(C),
    unite: 'δ',
    etapes: [
      { titre: 'Formule', detail: 'C = 1 / f′' },
      { titre: 'Calcul', detail: `C = 1 / ${focale_m} = ${arrondi(C)} δ` },
      { titre: '⚠️ Unité', detail: 'f′ doit être en MÈTRES. Une focale de 20 cm s’écrit 0,20 m.' },
    ],
  };
}
