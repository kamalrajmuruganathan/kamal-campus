// Tests complémentaires : toute ligne préparée respecte les contraintes SQL de
// outils/sql/signalements.sql (sinon l'insertion échoue et l'élève voit « n'a pas pu être envoyé »).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LONGUEUR_MAX, LONGUEUR_EXTRAIT, TYPES, cibleQcm, cibleExo, cibleValide, preparerSignalement, longueur, restants, estTableAbsente } from './index.js';

const SQL = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'outils', 'sql', 'signalements.sql'), 'utf8');
const nbCar = (s) => Array.from(s).length; // char_length de Postgres = points de code
const btrim = (s) => s.replace(/^ +| +$/g, ''); // btrim(x) sans 2e argument : espaces seulement

/** Contraintes « check » de la table, réécrites indépendamment. */
function respecteSql(l) {
  const champs = Object.keys(l).sort();
  if (champs.join() !== ['chapitre_id', 'cible', 'extrait', 'message', 'niveau', 'type', 'user_id'].sort().join()) return 'colonnes';
  if (typeof l.chapitre_id !== 'string' || nbCar(l.chapitre_id) < 1 || nbCar(l.chapitre_id) > 200) return 'chapitre_id';
  if (l.niveau !== null && (typeof l.niveau !== 'string' || nbCar(l.niveau) > 40)) return 'niveau';
  if (!['contenu', 'francais', 'autre'].includes(l.type)) return 'type';
  if (!/^(fiche|qcm:[A-Za-z0-9_-]{1,64}|exo:[A-Za-z0-9_-]{1,64})$/.test(l.cible)) return 'cible';
  const m = btrim(l.message);
  if (nbCar(m) < 1 || nbCar(m) > 500) return 'message';
  if (l.extrait !== null && nbCar(l.extrait) > 300) return 'extrait';
  if ([l.chapitre_id, l.niveau, l.message, l.extrait].some((x) => typeof x === 'string' && x.includes('\u0000'))) return 'nul';
  return null;
}

test('le SQL et le module ont les mêmes limites et les mêmes types', () => {
  assert.match(SQL, /char_length\(btrim\(message\)\) between 1 and 500/);
  assert.equal(LONGUEUR_MAX, 500);
  assert.match(SQL, /char_length\(extrait\) <= 300/);
  assert.equal(LONGUEUR_EXTRAIT, 300);
  assert.match(SQL, /char_length\(chapitre_id\) between 1 and 200/);
  assert.match(SQL, /char_length\(niveau\) <= 40/);
  const types = /type in \(([^)]*)\)/.exec(SQL)[1].split(',').map((x) => x.trim().replace(/'/g, ''));
  assert.deepEqual(types, TYPES.map((t) => t.id));
  const re = /cible ~ '([^']+)'/.exec(SQL)[1];
  for (const c of ['fiche', 'qcm:7', 'qcm:gen-3', 'exo:n4', 'qcm:' + 'a'.repeat(64)]) {
    assert.equal(new RegExp(re).test(c), cibleValide(c), c);
  }
  for (const c of ['qcm:' + 'a'.repeat(65), 'exo:é', 'fiche ', 'FICHE']) assert.equal(new RegExp(re).test(c), cibleValide(c), c);
});

test('entrées tirées au hasard (graine fixe) : une ligne préparée respecte toujours le SQL', () => {
  let x = 2026;
  const r = (n) => { x = (Math.imul(x, 1103515245) + 12345) >>> 0; return x % n; };
  const morceaux = ['a', 'é', ' ', ' ', '\n', '\t', '😀', '\u0000', 'é', 'Z', '-', '’', '​', '́'];
  const texte = (max) => Array.from({ length: r(max) }, () => morceaux[r(morceaux.length)]).join('');
  const cibles = ['fiche', 'qcm:1', 'exo:x', '', 'qcm:', 'exo:é', null, undefined, cibleQcm({ id: 'q'.repeat(70) }, { genere: true })];
  let acceptees = 0;
  for (let k = 0; k < 4000; k++) {
    const entree = {
      chapitreId: r(10) ? texte(220) : undefined,
      niveau: r(3) ? texte(50) : null,
      type: ['contenu', 'francais', 'autre', 'spam', undefined][r(5)],
      cible: cibles[r(cibles.length)],
      message: texte(520),
      extrait: r(2) ? texte(400) : undefined,
      userId: r(2) ? '6f1c2a5e-0000-4000-8000-000000000001' : undefined,
    };
    const res = preparerSignalement(entree);
    assert.ok(('ligne' in res) !== ('erreur' in res));
    if (res.ligne) {
      acceptees += 1;
      assert.equal(respecteSql(res.ligne), null, JSON.stringify(entree));
    } else {
      assert.equal(typeof res.erreur, 'string');
      assert.ok(/[.!]$/.test(res.erreur), res.erreur);
    }
  }
  assert.ok(acceptees > 300, `${acceptees} lignes acceptées`);
});

// Bug corrigé : un caractère nul collé dans le message faisait échouer l'insertion (Postgres le refuse).
test('caractère nul retiré du message et de l\'extrait', () => {
  const { ligne } = preparerSignalement({ chapitreId: 'c', type: 'autre', cible: 'fiche', message: 'Faute\u0000 ici', extrait: 'a\u0000b' });
  assert.equal(ligne.message, 'Faute ici');
  assert.equal(ligne.extrait, 'ab');
  assert.match(preparerSignalement({ chapitreId: 'c', type: 'autre', cible: 'fiche', message: '\u0000' }).erreur, /quelques mots/);
});

test('limites exactes : 500 caractères (emojis compris), extrait 300, niveau 40, chapitre 200', () => {
  const ok = (o) => preparerSignalement({ chapitreId: 'c', type: 'contenu', cible: 'fiche', message: 'm', ...o });
  assert.ok(ok({ message: '😀'.repeat(500) }).ligne);
  assert.ok(ok({ message: '😀'.repeat(501) }).erreur);
  assert.ok(ok({ message: `  ${'a'.repeat(500)}  ` }).ligne, 'les espaces autour ne comptent pas');
  assert.equal(nbCar(ok({ extrait: '😀'.repeat(400) }).ligne.extrait), 300);
  assert.equal(ok({ niveau: 'x'.repeat(60) }).ligne.niveau.length, 40);
  assert.equal(ok({ niveau: '' }).ligne.niveau, null);
  assert.ok(ok({ chapitreId: 'c'.repeat(200) }).ligne);
  assert.match(ok({ chapitreId: 'c'.repeat(201) }).erreur, /Chapitre/);
  assert.match(ok({ chapitreId: '   ' }).erreur, /Chapitre/);
  assert.equal(ok({ chapitreId: '  c  ' }).ligne.chapitre_id, 'c');
  assert.equal(ok({ extrait: '   ' }).ligne.extrait, null);
});

test('cibles : identifiants nettoyés, toujours valides pour le SQL', () => {
  assert.equal(cibleQcm({ id: 'q 1;--' }), 'qcm:q1--');
  assert.equal(cibleQcm({ id: 'é' }), 'qcm:inconnu');
  assert.equal(cibleQcm(null), 'qcm:inconnu');
  assert.equal(cibleQcm({ id: 0 }), 'qcm:0');
  assert.ok(cibleValide(cibleQcm({ id: 'x'.repeat(200) }, { genere: true })));
  assert.equal(cibleQcm({ id: 'x'.repeat(200) }, { genere: true }).length, 4 + 4 + 60);
  assert.ok(cibleValide(cibleExo('😀'.repeat(10))));
  assert.equal(cibleExo(undefined), 'exo:inconnu');
  assert.ok(!cibleValide(null));
  assert.ok(!cibleValide('fiche\n'));
});

test('préparation sans argument : message d\'erreur, pas d\'exception', () => {
  assert.match(preparerSignalement().erreur, /quelques mots/);
  assert.match(preparerSignalement({ message: 'x' }).erreur, /type/);
  assert.match(preparerSignalement({ message: 'x', type: 'autre' }).erreur, /Chapitre/);
  assert.match(preparerSignalement({ message: 'x', type: 'autre', chapitreId: 'c' }).erreur, /Cible/);
  assert.equal(longueur(null), 0);
  assert.equal(restants('😀'.repeat(501)), -1);
  assert.equal(estTableAbsente({ message: 'Could not find the table' }), true);
  assert.equal(estTableAbsente({}), false);
});
