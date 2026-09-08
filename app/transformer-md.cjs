// Transformer Metro : convertit un fichier .md en module exportant son texte.
// Les autres extensions sont déléguées au transformer par défaut d'Expo, dont
// le chemin est fourni par metro.config.cjs (variable MD_UPSTREAM_TRANSFORMER) —
// ainsi aucun chemin n'est figé et ça résiste aux montées de version du SDK.
function chargerUpstream() {
  if (process.env.MD_UPSTREAM_TRANSFORMER) {
    try {
      return require(process.env.MD_UPSTREAM_TRANSFORMER);
    } catch (e) {
      /* repli ci-dessous */
    }
  }
  const candidats = [
    'expo/node_modules/@expo/metro-config/build/babel-transformer',
    '@expo/metro-config/build/babel-transformer',
    '@react-native/metro-babel-transformer',
  ];
  for (const nom of candidats) {
    try {
      return require(nom);
    } catch (e) {
      /* on essaie le suivant */
    }
  }
  throw new Error('transformer-md : transformer babel introuvable');
}

const upstream = chargerUpstream();

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