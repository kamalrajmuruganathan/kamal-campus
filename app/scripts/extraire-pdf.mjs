// Extraction du texte d'un PDF via pdfjs-dist.
//
// Remplace le script Perl historique, qui décompressait les flux à la main et
// lisait les opérateurs Tj/TJ. Cette approche-là dépend de la table de
// correspondance des glyphes de la police : quand elle est non standard, on
// obtient « aqx enjeqx » pour « aux enjeux ». pdfjs applique la table ToUnicode
// du PDF, ce qui est précisément le rôle de ce fichier.
//
//   node extraire.mjs <entrée.pdf> <sortie.txt>

import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const [, , pdf, sortie] = process.argv;
if (!pdf || !sortie) {
  console.error('usage : node extraire.mjs <entrée.pdf> <sortie.txt>');
  process.exit(2);
}

const doc = await getDocument({
  data: new Uint8Array(readFileSync(pdf)),
  useSystemFonts: true,
}).promise;

const pages = [];
for (let n = 1; n <= doc.numPages; n++) {
  const contenu = await (await doc.getPage(n)).getTextContent();

  // Un « item » est un fragment de ligne. hasEOL marque une fin de ligne réelle
  // dans le PDF ; sans lui on recolle des mots de colonnes différentes.
  let ligne = '';
  const lignes = [];
  for (const item of contenu.items) {
    if (item.str) ligne += item.str;
    if (item.hasEOL) { lignes.push(ligne); ligne = ''; }
  }
  if (ligne) lignes.push(ligne);

  pages.push(lignes.join('\n'));
}

const texte = pages.join('\n\n')
  .replace(/[ \t]+/g, ' ')       // espaces multiples issus du crénage
  .replace(/\n{3,}/g, '\n\n')    // pas plus d'une ligne vide d'affilée
  .trim();

writeFileSync(sortie, texte + '\n', 'utf8');
console.log(`${doc.numPages} pages → ${sortie} (${texte.length} caractères)`);
