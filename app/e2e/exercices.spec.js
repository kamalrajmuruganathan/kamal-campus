/**
 * Exercices auto-corrigés : une bonne réponse → ✅, une fausse → ❌.
 * Les réponses attendues sont lues dans les données du site construit (pas recopiées ici).
 */
import { readFileSync } from 'node:fs';
import { test, expect, ouvrirAppli, toucher, texte, visible } from './outils.js';

const FICHIER = new URL('../e2e-site/kamal-campus/app/donnees/troisieme/maths/puissances/exercice.json', import.meta.url);

/** Premiers exercices dont la réponse est un simple nombre (« $0{,}0001$ » → « 0,0001 »). */
function exercicesNumeriques() {
  const { exercices } = JSON.parse(readFileSync(FICHIER, 'utf8'));
  return exercices
    .map((e, i) => ({ numero: i + 1, valeur: /^\$(-?\d+(?:\{,\}\d+)?)\$$/.exec(e.reponse)?.[1]?.replace('{,}', ',') }))
    .filter((e) => e.valeur);
}

test('exercices : bonne réponse ✅, réponse fausse ❌', async ({ page }) => {
  const [bon, faux] = exercicesNumeriques();
  expect(bon && faux, 'deux exercices à réponse numérique dans le chapitre').toBeTruthy();

  await ouvrirAppli(page);
  await toucher(page, 'Troisième');
  await toucher(page, 'Mathématiques');
  await toucher(page, 'Puissances : exposants négatifs et notation scientifique');
  await toucher(page, /^Exercices · \d+$/, {});

  const saisir = async (numero, valeur) => {
    const champ = visible(page.getByLabel(`Réponse à l'exercice ${numero}`, { exact: true }));
    await champ.scrollIntoViewIfNeeded();
    await champ.fill(valeur);
    // Le bouton « Vérifier » qui suit ce champ.
    await champ.locator('xpath=following::*[normalize-space(text())="Vérifier"][1]').click();
  };

  await saisir(bon.numero, bon.valeur);
  await expect(texte(page, /^✅ Bonne réponse !/, {})).toBeVisible();

  const fausse = String(Number(faux.valeur.replace(',', '.')) + 7).replace('.', ',');
  await saisir(faux.numero, fausse);
  await expect(texte(page, '❌ Ce n’est pas la réponse attendue. Regarde le corrigé.')).toBeVisible();
});
