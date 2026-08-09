# Kamal Campus — État du contenu

> Mis à jour le 2026-08-07. **Périmètre v1 complet.**

## Couverture

| Bloc | Chapitres | Questions | Programme de référence |
|---|---|---|---|
| Première spécialité **maths** | 10 | 100 | BO du 2 avril 2026 *(nouveau)* |
| Seconde **maths** | 10 | 100 | BO du 2 avril 2026 *(nouveau)* |
| Première **physique-chimie** | 5 | 50 | BO spécial n°1 du 22 janvier 2019 |
| Seconde **physique-chimie** | 5 | 50 | BO spécial n°1 du 22 janvier 2019 |
| **Total** | **30** | **300** | |

Chaque chapitre comporte une `fiche.md` et un `qcm.json` de 10 questions (2 faciles,
5 moyennes, 3 difficiles), avec correction expliquée nommant le piège.

## Contrôles automatiques — au vert sur les 30

```bash
for q in contenu/*/*/*/qcm.json; do
  jq empty "$q"                                                          # JSON valide
  jq '.questions|length' "$q"                                            # = 10
  jq '[.questions[]|select(.reponse>=(.choix|length) or .reponse<0)]|length'  # = 0
  jq '[.questions[]|select((.choix|length)!=4)]|length'                   # = 0
  jq '[.questions[]|select(.explication==null or .explication=="")]|length'   # = 0
done
```

## ⚠️ Aucune fiche n'a été relue

**Les 30 chapitres sont en `statut: brouillon` avec `relu_par: null`.**
La règle du gabarit interdit le passage en `publie` tant qu'un professeur de la matière n'a
pas relu. Elle n'est pas négociable : une formule fausse fait perdre des points à un élève.

Chaque fiche porte en fin de fichier un **bloc de notes de production** (commentaire HTML,
invisible dans l'application) listant précisément ce qui doit être confronté au programme
officiel.

### Les fiches à relire en priorité

| Fiche | Raison |
|---|---|
| `premiere/maths-specialite/variables-aleatoires` | extraction PDF très lacunaire ; espérance et variance reconstituées par déduction |
| `premiere/physique-chimie/mouvement-interactions` | la formulation du principe fondamental attendue en première (vectorielle qualitative vs. deuxième loi de Newton) est à confirmer |
| `seconde/physique-chimie/modelisation-microscopique` | notation des configurations électroniques : sous-couches (1s² 2s²…) ou couches (K)(L) ? |
| `seconde/maths/fonctions-de-reference` | la fonction cube est-elle au programme de seconde dans le nouveau texte ? |

## Une différence importante entre les deux matières

Les **mathématiques** suivent les **nouveaux programmes** publiés au BO du 2 avril 2026,
applicables en Seconde et Première dès la rentrée 2026-2027. C'est un avantage : les manuels
existants deviennent périmés en septembre.

La **physique-chimie n'a pas été réformée** : le programme de 2019 reste en vigueur. Ce contenu
est donc stable et n'expirera pas.

⚠️ **La Terminale reste volontairement hors périmètre** : son programme de maths change à la
rentrée 2027-2028. Tout contenu produit maintenant expirerait.

## Outils de calcul

Cinq modules déterministes dans `app/lib/`, **sans aucune dépendance externe** et
**sans IA** — un résultat faux ferait perdre des points à un élève.

| Module | Couvre | Tests écrits |
|---|---|---|
| `second-degre.js` | discriminant, racines exactes, factorisation, signe, sommet | 17 |
| `suites.js` | arithmétiques/géométriques, nature, taux → raison, sommes | 25 |
| `statistiques.js` | moyenne pondérée, médiane, quartiles, dispersion, fréquences | 22 |
| `derivation.js` | dérivée polynomiale, tangente, tableau de variations | 19 |
| `probabilites.js` | équiprobabilité, conditionnelles, arbres, Bernoulli, variables aléatoires | 30 |
| `geometrie.js` | vecteurs, produit scalaire, Al-Kashi, droites, cercles | 31 |
| `trigonometrie.js` | conversions, valeurs exactes, angles associés, équations | 27 |
| `chimie.js` | masse molaire, quantité de matière, concentrations, dilution | 26 |
| `physique.js` | mécanique, énergies, électricité, ondes, optique | 37 |
| **9 modules** | **4 520 lignes** | **234** |

Ces modules couvrent **l'ensemble des chapitres calculatoires** du périmètre v1.

Conventions communes à tous :

- **résultats exacts en fractions réduites** quand c'est possible (`-1/2`, pas `-0.5`) ;
- chaque fonction renvoie un tableau **`etapes`** : l'outil montre le raisonnement,
  sinon ce n'est qu'une calculatrice ;
- les cas invalides sont **refusés en enseignant** (« si a = 0, la fonction est affine ») ;
- quand un résultat exact ne peut être garanti — dérivée d'un quotient quelconque,
  racines d'un polynôme de degré ≥ 3 — l'outil **renvoie la règle ou refuse**
  plutôt que d'inventer.

⚠️ **Les 234 tests sont écrits mais n'ont jamais été exécutés** : Node.js n'est pas
installé sur la machine. La logique de chaque module a été vérifiée par un **portage
Perl indépendant**, et les valeurs recoupent les réponses des QCM correspondants.

## Ce qui reste à faire

1. **Relecture par un professeur** de chaque matière — c'est le goulot d'étranglement
2. ✅ Outils de calcul — terminés (9 modules)
3. Coquille Expo de l'application
4. Node.js et licence Xcode à installer (voir `PASSATION.md`), puis `cd app && npm test`
