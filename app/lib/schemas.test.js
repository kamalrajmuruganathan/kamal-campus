import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SCHEMAS, svgVersDataUri } from '../../outils/schemas/schemas.mjs';

test('chaque schéma produit un SVG bien formé', () => {
  for (const [id, fn] of Object.entries(SCHEMAS)) {
    const svg = fn();
    assert.ok(svg.startsWith('<svg'), `${id} doit commencer par <svg`);
    assert.ok(svg.trimEnd().endsWith('</svg>'), `${id} doit finir par </svg>`);
    assert.ok(svg.includes('viewBox='), `${id} doit avoir un viewBox`);
    // autant de balises ouvrantes que fermantes pour <text>
    const ouv = (svg.match(/<text/g) || []).length;
    const fer = (svg.match(/<\/text>/g) || []).length;
    assert.equal(ouv, fer, `${id} : balises <text> déséquilibrées`);
    // fond « papier » explicite (lisible en clair comme en sombre)
    assert.ok(svg.includes('fill="#ffffff"'), `${id} doit avoir un fond papier`);
  }
});

test('svgVersDataUri produit un data-URI SVG décodable', () => {
  const svg = SCHEMAS['triangle-rectangle']();
  const uri = svgVersDataUri(svg);
  // Le préfixe est exactement celui que la visionneuse autorise (validateLink).
  assert.ok(uri.startsWith('data:image/svg+xml;base64,'), 'préfixe data-URI SVG attendu');
  const b64 = uri.slice('data:image/svg+xml;base64,'.length);
  const decode = Buffer.from(b64, 'base64').toString('utf8');
  assert.equal(decode, svg, 'le décodage doit redonner le SVG d’origine');
});

test('cercle trigonométrique : cos et sin distingués', () => {
  const svg = SCHEMAS['cercle-trigo']();
  assert.ok(svg.includes('cos'), 'doit annoter cos');
  assert.ok(svg.includes('sin'), 'doit annoter sin');
});

test('parabole : la courbe est un tracé non vide', () => {
  const svg = SCHEMAS.parabole();
  const m = svg.match(/<path d="([^"]+)"/);
  assert.ok(m, 'doit contenir un <path>');
  assert.ok(m[1].length > 20, 'le tracé de la parabole ne doit pas être vide');
});

test('triangle rectangle : marque d’angle droit présente', () => {
  const svg = SCHEMAS['triangle-rectangle']();
  // la marque d'angle droit est un petit chemin en L (path fill=none)
  assert.ok(svg.includes('<path'), 'doit contenir la marque d’angle droit');
});

test('onde sinusoïdale : amplitude A et longueur d’onde λ annotées', () => {
  const svg = SCHEMAS['onde-sinusoidale']();
  assert.ok(svg.includes('>A<'), 'doit annoter l’amplitude A');
  assert.ok(svg.includes('λ'), 'doit annoter la longueur d’onde λ');
});

test('lentille convergente : les trois rayons et les foyers sont tracés', () => {
  const svg = SCHEMAS['lentille-convergente']();
  const rayons = (svg.match(/<polyline|<line/g) || []).length;
  assert.ok(rayons >= 3, 'au moins trois tracés de rayons');
  assert.ok(svg.includes('>F<') && svg.includes("F'"), 'doit repérer F et F’');
});

test('circuit électrique : pile, interrupteur et lampe étiquetés', () => {
  const svg = SCHEMAS['circuit-electrique']();
  for (const mot of ['pile', 'interrupteur', 'lampe']) {
    assert.ok(svg.includes(mot), `doit étiqueter « ${mot} »`);
  }
});

test('chaîne alimentaire : autant de flèches que de maillons − 1', () => {
  const maillons = ['Herbe', 'Lapin', 'Renard'];
  const svg = SCHEMAS['chaine-alimentaire']({ maillons });
  const fleches = (svg.match(/<path d="M [^"]*z" fill/g) || []).length;
  assert.equal(fleches, maillons.length - 1, 'une flèche entre chaque maillon');
});

test('rectangle : formules aire et périmètre présentes', () => {
  const svg = SCHEMAS['rectangle-aire-perimetre']();
  assert.ok(svg.includes('Aire'), 'doit afficher la formule de l’aire');
  assert.ok(svg.includes('Périmètre'), 'doit afficher la formule du périmètre');
  assert.ok(svg.includes('<rect'), 'doit dessiner un rectangle');
});

test('poids : vecteur (ligne + pointe) et étiquette', () => {
  const svg = SCHEMAS.poids();
  assert.ok(svg.includes('poids'), 'doit étiqueter le poids');
  assert.ok(svg.includes('>G<'), 'doit repérer le centre de gravité G');
});

test('atome : noyau et électrons', () => {
  const svg = SCHEMAS.atome();
  assert.ok(svg.includes('noyau'), 'doit annoter le noyau');
  assert.ok(svg.includes('électrons'), 'doit annoter les électrons');
  // au moins deux couches (cercles en pointillés)
  assert.ok((svg.match(/stroke-dasharray/g) || []).length >= 2, 'au moins deux couches');
});

test('cycle de l’eau : quatre étapes et quatre flèches', () => {
  const svg = SCHEMAS['cycle-eau']();
  for (const e of ['Évaporation', 'Condensation', 'Précipitation', 'Ruissellement']) {
    assert.ok(svg.includes(e), `doit contenir l’étape ${e}`);
  }
  // quatre arcs (un Q par flèche)
  assert.equal((svg.match(/ Q /g) || []).length, 4, 'quatre arcs de liaison');
});

test('pavé droit : formule du volume et arêtes cachées', () => {
  const svg = SCHEMAS['pave-droit']();
  assert.ok(svg.includes('Volume'), 'doit afficher la formule du volume');
  assert.ok(svg.includes('stroke-dasharray'), 'doit dessiner des arêtes cachées en pointillés');
});

test('angle : sommet O et deux demi-droites', () => {
  const svg = SCHEMAS.angle();
  assert.ok(svg.includes('>O<'), 'doit repérer le sommet O');
  assert.ok((svg.match(/<line/g) || []).length >= 2, 'au moins deux demi-droites');
});

test('droite graduée : le zéro et des valeurs signées', () => {
  const svg = SCHEMAS['droite-graduee']();
  assert.ok(svg.includes('>0<'), 'doit marquer le zéro');
  assert.ok(svg.includes('+2') || svg.includes('+1'), 'doit afficher des valeurs positives signées');
  assert.ok(svg.includes('-3') || svg.includes('-5'), 'doit afficher des valeurs négatives');
});
