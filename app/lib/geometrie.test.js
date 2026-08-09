/**
 * Tests de géométrie vectorielle et repérée.
 * Lancer :  cd app && node --test lib/
 *
 * Vérifiés par portage Perl indépendant ; les valeurs recoupent les QCM
 * `vecteurs`, `droites-du-plan` (Seconde), `produit-scalaire` et
 * `geometrie-reperee` (Première).
 *
 * Repère supposé ORTHONORMÉ partout.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  vecteur, norme, milieu, distance, colineaires, alignes,
  produitScalaire, alKashi,
  droiteParDeuxPoints, analyserDroite, positionRelative, perpendiculaires,
  cercle, reconnaitreCercle, cercleDiametre,
} from './geometrie.js';

// ────────────────────────────── vecteurs ────────────────────────────────────

test('vecteur AB = arrivée − départ', () => {
  const r = vecteur({ x: 2, y: 1 }, { x: 7, y: 4 });
  assert.deepEqual(r.vecteur, { x: 5, y: 3 });
});

test('BA est l’opposé de AB', () => {
  const ab = vecteur({ x: 2, y: 1 }, { x: 7, y: 4 }).vecteur;
  const ba = vecteur({ x: 7, y: 4 }, { x: 2, y: 1 }).vecteur;
  assert.deepEqual(ba, { x: -ab.x, y: -ab.y });
});

test('norme — racine exacte quand c’est un carré parfait', () => {
  const r = norme({ x: 5, y: 12 });
  assert.equal(r.norme, 13);
  assert.equal(r.exact, true);
});

test('norme — valeur approchée signalée sinon', () => {
  const r = norme({ x: 1, y: 1 });
  assert.equal(r.exact, false);
  assert.ok(Math.abs(r.norme - Math.SQRT2) < 1e-6);
});

test('milieu : moyenne des coordonnées', () => {
  assert.deepEqual(milieu({ x: -2, y: 6 }, { x: 8, y: 2 }).milieu, { x: 3, y: 4 });
});

test('distance entre deux points', () => {
  assert.equal(distance({ x: 1, y: 2 }, { x: 4, y: 6 }).distance, 5);
});

// ───────────────────────────── colinéarité ──────────────────────────────────

test('vecteurs colinéaires — déterminant nul', () => {
  const r = colineaires({ x: 3, y: 4 }, { x: 6, y: 8 });
  assert.equal(r.determinant, 0);
  assert.equal(r.colineaires, true);
});

test('vecteurs non colinéaires', () => {
  assert.equal(colineaires({ x: 1, y: 2 }, { x: 2, y: 1 }).colineaires, false);
});

test('alignement : les deux vecteurs partent du MÊME point', () => {
  assert.equal(alignes({ x: 0, y: 0 }, { x: 1, y: 2 }, { x: 3, y: 6 }).alignes, true);
  assert.equal(alignes({ x: 0, y: 0 }, { x: 1, y: 2 }, { x: 3, y: 5 }).alignes, false);
});

// ─────────────────────────── produit scalaire ───────────────────────────────

test('produit scalaire en coordonnées', () => {
  assert.equal(produitScalaire({ x: 2, y: 5 }, { x: 3, y: 1 }).produitScalaire, 11);
});

test('produit scalaire nul : vecteurs orthogonaux', () => {
  const r = produitScalaire({ x: 3, y: -1 }, { x: 2, y: 6 });
  assert.equal(r.produitScalaire, 0);
  assert.equal(r.orthogonaux, true);
  assert.equal(r.nature, 'droit');
});

test('signe du produit scalaire et nature de l’angle', () => {
  assert.equal(produitScalaire({ x: 1, y: 0 }, { x: 1, y: 1 }).nature, 'aigu');
  assert.equal(produitScalaire({ x: 1, y: 0 }, { x: -1, y: 1 }).nature, 'obtus');
});

test('angle calculé — cas du QCM (cos = 1/2 donc 60°)', () => {
  // ‖u‖ = 4, ‖v‖ = 3, u·v = 6  →  cos = 0,5
  const r = produitScalaire({ x: 4, y: 0 }, { x: 1.5, y: 3 * Math.sqrt(3) / 2 });
  assert.ok(Math.abs(r.cosAngle - 0.5) < 1e-6);
  assert.ok(Math.abs(r.angleDegres - 60) < 0.01);
});

// ──────────────────────────────── Al-Kashi ──────────────────────────────────

test('Al-Kashi — b=5, c=8, Â=60° donne a=7', () => {
  const r = alKashi(5, 8, 60);
  assert.ok(Math.abs(r.aCarre - 49) < 1e-6);
  assert.ok(Math.abs(r.a - 7) < 1e-6);
});

test('Al-Kashi avec Â=90° redonne Pythagore', () => {
  const r = alKashi(3, 4, 90);
  assert.ok(Math.abs(r.a - 5) < 1e-6);
  assert.ok(r.etapes.some((e) => /Pythagore/.test(e.detail)));
});

test('angle hors ]0° ; 180°[ refusé', () => {
  assert.equal(alKashi(3, 4, 0).valide, false);
  assert.equal(alKashi(3, 4, 180).valide, false);
});

// ──────────────────────────────── droites ───────────────────────────────────

test('droite par deux points', () => {
  const r = droiteParDeuxPoints({ x: 2, y: 3 }, { x: 6, y: 11 });
  assert.equal(r.coefficientDirecteur, 2);
  assert.equal(r.ordonneeOrigine, -1);
});

test('droite verticale : pas d’équation réduite', () => {
  const r = droiteParDeuxPoints({ x: 5, y: 1 }, { x: 5, y: 9 });
  assert.equal(r.verticale, true);
  assert.equal(r.equation, 'x = 5');
  assert.ok(r.etapes.some((e) => /PAS d’équation réduite/.test(e.detail)));
});

test('points confondus refusés', () => {
  assert.equal(droiteParDeuxPoints({ x: 1, y: 1 }, { x: 1, y: 1 }).valide, false);
});

test('vecteurs normal et directeur d’une droite', () => {
  const r = analyserDroite(4, -3, 1);
  assert.deepEqual(r.vecteurNormal, { x: 4, y: -3 });
  assert.deepEqual(r.vecteurDirecteur, { x: 3, y: 4 });
});

test('a et b nuls simultanément : ce n’est pas une droite', () => {
  assert.equal(analyserDroite(0, 0, 5).valide, false);
});

test('droites sécantes et point d’intersection', () => {
  // y = 3x − 2 et y = −x + 6  →  3x − y − 2 = 0 et x + y − 6 = 0
  const r = positionRelative([3, -1, -2], [1, 1, -6]);
  assert.equal(r.position, 'secantes');
  assert.deepEqual(r.intersection, { x: 2, y: 4 });
});

test('droites strictement parallèles', () => {
  const r = positionRelative([2, 3, -1], [4, 6, 5]);
  assert.equal(r.position, 'strictement paralleles');
  assert.equal(r.intersection, null);
});

test('droites confondues', () => {
  assert.equal(positionRelative([2, 3, -1], [4, 6, -2]).position, 'confondues');
});

test('perpendicularité via les vecteurs normaux', () => {
  assert.equal(perpendiculaires([2, -3, 1], [3, 2, -5]).perpendiculaires, true);
  assert.equal(perpendiculaires([1, 1, 0], [1, 2, 0]).perpendiculaires, false);
});

// ───────────────────────────────── cercles ──────────────────────────────────

test('équation du cercle — signes et R² corrects', () => {
  const r = cercle({ x: 2, y: -3 }, 5);
  assert.equal(r.rayonCarre, 25);
  assert.match(r.equation, /\(x − 2\)² \+ \(y \+ 3\)² = 25/);
});

test('rayon négatif ou nul refusé', () => {
  assert.equal(cercle({ x: 0, y: 0 }, 0).valide, false);
  assert.equal(cercle({ x: 0, y: 0 }, -2).valide, false);
});

test('reconnaître un cercle depuis la forme développée', () => {
  // x² + y² − 4x + 6y − 3 = 0
  const r = reconnaitreCercle(-4, 6, -3);
  assert.equal(r.nature, 'cercle');
  assert.deepEqual(r.centre, { x: 2, y: -3 });
  assert.equal(r.rayon, 4);
});

test('cas dégénéré : un seul point', () => {
  // (x−1)² + (y+2)² = 0
  const r = reconnaitreCercle(-2, 4, 5);
  assert.equal(r.nature, 'point');
  assert.deepEqual(r.centre, { x: 1, y: -2 });
});

test('cas dégénéré : ensemble vide', () => {
  const r = reconnaitreCercle(-2, 4, 9);
  assert.equal(r.nature, 'vide');
  assert.ok(r.etapes.some((e) => /VIDE/.test(e.detail)));
});

test('cercle de diamètre [AB] — le rayon est la MOITIÉ', () => {
  const r = cercleDiametre({ x: 0, y: 0 }, { x: 6, y: 8 });
  assert.deepEqual(r.centre, { x: 3, y: 4 });
  assert.equal(r.rayon, 5, 'AB = 10, donc R = 5');
  assert.ok(r.etapes.some((e) => /MOITIÉ/.test(e.remarque ?? '')));
});
