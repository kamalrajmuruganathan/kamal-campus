// Transformer Metro : convertit un fichier .md en module exportant son texte.
// Les autres extensions sont deleguees au transformer standard d'Expo.
const upstream = require('@expo/metro-config/babel-transformer');

module.exports.transform = function ({ src, filename, options }) {
  if (filename.endsWith('.md')) {
    return upstream.transform({
      src: `module.exports = ${JSON.stringify(src)};`,
      filename,
      options,
    });
  }
  return upstream.transform({ src, filename, options });
};
