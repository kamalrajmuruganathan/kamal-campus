/**
 * Plugin Babel (web seulement) : traduit `accessibilityState` en attributs ARIA.
 *
 * react-native-web 0.21 ignore `accessibilityState` : sur le web, les lecteurs d'écran
 * ne savaient donc pas qu'un bouton était sélectionné, une case cochée, un bouton
 * désactivé ou une section dépliée. Pour chaque
 *   <X accessibilityRole="…" accessibilityState={{ selected: a, checked: b, … }} />
 * on ajoute les attributs correspondants (sauf s'ils sont déjà écrits) :
 *   disabled → aria-disabled, expanded → aria-expanded, busy → aria-busy,
 *   checked  → aria-checked,
 *   selected → aria-selected (onglet, option), aria-checked (radio, case, interrupteur),
 *              aria-pressed (bouton : bouton à bascule).
 * De plus, un <Pressable> ou <TouchableOpacity> sans rôle reçoit accessibilityRole="button" :
 * sans cela, react-native-web en fait un simple <div> focalisable, annoncé sans rôle.
 * Seuls les fichiers de app/src (et App.js) sont concernés. Testé dans
 * lib/accessibilite/babel-etat.test.js.
 */

const CLES_SIMPLES = { disabled: 'aria-disabled', expanded: 'aria-expanded', busy: 'aria-busy', checked: 'aria-checked' };
const ROLES_SELECTED = new Set(['tab', 'option', 'row', 'gridcell', 'columnheader', 'rowheader', 'treeitem']);
const ROLES_COCHES = new Set(['radio', 'checkbox', 'switch', 'menuitemradio', 'menuitemcheckbox']);

module.exports = function etatAccessible({ types: t }) {
  const nom = (attr) => (t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name) ? attr.name.name : null);
  return {
    name: 'etat-accessible',
    visitor: {
      JSXOpeningElement(chemin, etat) {
        const fichier = String(etat.filename || '').replace(/\\/g, '/');
        if (fichier.includes('/node_modules/') || !(/\/src\//.test(fichier) || /\/App\.js$/.test(fichier))) return;
        const attrs = chemin.node.attributes;
        const balise = t.isJSXIdentifier(chemin.node.name) ? chemin.node.name.name : '';
        if ((balise === 'Pressable' || balise === 'TouchableOpacity')
          && !attrs.some((a) => t.isJSXSpreadAttribute(a) || ['accessibilityRole', 'role', 'accessible'].includes(nom(a)))) {
          attrs.push(t.jsxAttribute(t.jsxIdentifier('accessibilityRole'), t.stringLiteral('button')));
        }
        const etatAttr = attrs.find((a) => nom(a) === 'accessibilityState');
        if (!etatAttr || !t.isJSXExpressionContainer(etatAttr.value) || !t.isObjectExpression(etatAttr.value.expression)) return;
        const roleAttr = attrs.find((a) => nom(a) === 'accessibilityRole' || nom(a) === 'role');
        const role = roleAttr && t.isStringLiteral(roleAttr.value) ? roleAttr.value.value : '';
        const presents = new Set(attrs.map(nom).filter(Boolean));
        const ajouts = [];
        for (const prop of etatAttr.value.expression.properties) {
          if (!t.isObjectProperty(prop) || prop.computed) continue;
          const cle = t.isIdentifier(prop.key) ? prop.key.name : t.isStringLiteral(prop.key) ? prop.key.value : null;
          let aria = CLES_SIMPLES[cle];
          if (cle === 'selected') aria = ROLES_SELECTED.has(role) ? 'aria-selected' : ROLES_COCHES.has(role) ? 'aria-checked' : 'aria-pressed';
          if (!aria || presents.has(aria)) continue;
          presents.add(aria);
          const valeur = t.unaryExpression('!', t.unaryExpression('!', t.cloneNode(prop.value, true)));
          ajouts.push(t.jsxAttribute(t.jsxIdentifier(aria), t.jsxExpressionContainer(valeur)));
        }
        if (ajouts.length) attrs.splice(attrs.indexOf(etatAttr) + 1, 0, ...ajouts);
      },
    },
  };
};
