module.exports = function (api) {
  // Sur le web, `accessibilityState` est traduit en attributs ARIA (react-native-web l'ignore) :
  // voir scripts/babel-etat-accessible.cjs.
  const web = api.caller((c) => !!c && c.platform === 'web');
  return {
    presets: ['babel-preset-expo'],
    plugins: web ? [require('./scripts/babel-etat-accessible.cjs')] : [],
  };
};
