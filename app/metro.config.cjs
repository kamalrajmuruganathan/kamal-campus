// Metro doit savoir importer les fiches .md comme du TEXTE BRUT et les QCM .json
// comme des objets. Le contenu vit hors du dossier app/, il faut donc aussi
// declarer ce dossier comme racine surveillee.
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.assetExts = config.resolver.assetExts.filter((e) => e !== 'md');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'md'];

config.transformer.babelTransformerPath = require.resolve('./transformer-md.cjs');

// le repertoire contenu/ est un cran au-dessus de app/
config.watchFolders = [
  path.resolve(__dirname, '..', 'contenu'),
  path.resolve(__dirname, '..', 'formulaires'),
];

module.exports = config;
