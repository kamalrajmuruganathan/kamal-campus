/**
 * Nombres rationnels exacts — pour résoudre sans erreur d'arrondi.
 *
 * Un rationnel est une fraction n/d toujours réduite, le signe porté au
 * numérateur. Sert à toute l'arithmétique du résolveur (fractions, équations).
 */

function pgcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { const r = a % b; a = b; b = r; }
  return a || 1;
}

export class Rationnel {
  constructor(n, d = 1) {
    if (d === 0) throw new Error('division par zéro');
    if (d < 0) { n = -n; d = -d; }
    const g = pgcd(n, d);
    this.n = n / g;
    this.d = d / g;
  }

  static de(n) { return new Rationnel(Math.round(n), 1); }

  plus(r) { return new Rationnel(this.n * r.d + r.n * this.d, this.d * r.d); }
  moins(r) { return new Rationnel(this.n * r.d - r.n * this.d, this.d * r.d); }
  fois(r) { return new Rationnel(this.n * r.n, this.d * r.d); }
  sur(r) { if (r.n === 0) throw new Error('division par zéro'); return new Rationnel(this.n * r.d, this.d * r.n); }
  oppose() { return new Rationnel(-this.n, this.d); }

  estNul() { return this.n === 0; }
  estEntier() { return this.d === 1; }
  estNegatif() { return this.n < 0; }
  egal(r) { return this.n === r.n && this.d === r.d; }
  versNombre() { return this.n / this.d; }

  /** "3" ou "3/4" ; un négatif garde son signe : "-3/4". */
  texte() {
    return this.d === 1 ? `${this.n}` : `${this.n}/${this.d}`;
  }
}

export const ZERO = new Rationnel(0);
export const UN = new Rationnel(1);
