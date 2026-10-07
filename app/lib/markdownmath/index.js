/**
 * Protège les formules LaTeX ($…$ et $$…$$) avant le passage de markdown-it.
 *
 * Sans cela, markdown-it interprète les antislashs comme des échappements :
 * « \\ » (saut de ligne d'une matrice) devient « \ » et « \, » devient « , »,
 * ce qui casse les vecteurs colonnes et les espaces fines (A(x\,;y) → « A(x,;y) »).
 * On remplace chaque formule par un jeton neutre, on rend le Markdown, puis on remet
 * la formule telle quelle (échappée pour le HTML) ; KaTeX la trouve ensuite dans la page.
 * Les blocs de code (``` et `…`) ne sont pas touchés.
 */

const echapperHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** @returns {{ texte: string, formules: string[] }} */
export function protegerFormules(markdown) {
  const formules = [];
  const proteger = (morceau) =>
    morceau.replace(/(?<!\\)\$\$([\s\S]+?)(?<!\\)\$\$|(?<![\\$])\$(?!\$)((?:\\\$|[^$\n])+?)(?<!\\)\$/g, (m) => {
      formules.push(m);
      return `KCMATH${formules.length - 1}KCMATH`;
    });
  // On découpe autour des blocs ``` et des `code` en ligne, qu'on laisse intacts.
  const morceaux = String(markdown ?? '').split(/(```[\s\S]*?```|`[^`\n]*`)/g);
  const texte = morceaux.map((m, i) => (i % 2 === 1 ? m : proteger(m))).join('');
  return { texte, formules };
}

/** Remet les formules dans le HTML produit par markdown-it. */
export function restaurerFormules(html, formules) {
  return html.replace(/KCMATH(\d+)KCMATH/g, (m, n) => (formules[Number(n)] !== undefined ? echapperHtml(formules[Number(n)]) : m));
}

/** Rendu complet : protéger → markdown-it → restaurer. */
export function rendreAvecFormules(md, markdown) {
  const { texte, formules } = protegerFormules(markdown);
  return restaurerFormules(md.render(texte), formules);
}
