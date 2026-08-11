# Kamal Campus — État du contenu

> Mis à jour le 2026-08-10. **Périmètre v1 complet**, extension collège amorcée.

## Couverture

| Bloc | Chapitres | Questions | Programme de référence |
|---|---|---|---|
| Collège **cinquième** maths | 8 | 80 | BO du 2 avril 2026 *(cycle 4)* |
| Première spécialité **maths** | 10 | 100 | BO du 2 avril 2026 *(nouveau)* |
| Première **maths — ens. scientifique** | 4 | 40 | BO du 2 avril 2026 *(nouveau)* |
| Seconde **maths** | 10 | 100 | BO du 2 avril 2026 *(nouveau)* |
| Première **physique-chimie** | 6 | 60 | BO spécial n°1 du 22 janvier 2019 |
| Seconde **physique-chimie** | 5 | 50 | BO spécial n°1 du 22 janvier 2019 |
| Première techno — maths | 5 | 50 | BO du 2 avril 2026 |
| Première STI2D/STL — PC et maths | 6 | 60 | BO spécial n°1 du 22 janvier 2019 |
| **Total** | **54** | **540** | |

La 5e couvre 8 des 16 chapitres de son programme : c'est un début
d'extension au collège, pas un niveau complet. Voir « Extension au collège » plus bas.

Chaque chapitre comporte une `fiche.md` et un `qcm.json` de 10 questions (2 faciles,
5 moyennes, 3 difficiles), avec correction expliquée nommant le piège.

## Contrôles automatiques — au vert sur les 45

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

**Les 54 chapitres sont en `statut: brouillon` avec `relu_par: null`.**
La règle du gabarit interdit le passage en `publie` tant qu'un professeur de la matière n'a
pas relu. Elle n'est pas négociable : une formule fausse fait perdre des points à un élève.

Chaque fiche porte en fin de fichier un **bloc de notes de production** (commentaire HTML,
invisible dans l'application) listant précisément ce qui doit être confronté au programme
officiel.

➡️ **Le dossier de relecture est dans [`docs/relecture.md`](docs/relecture.md)** : il reprend
les sept fiches ci-dessous en y ajoutant, pour chacune, ce que dit le programme officiel
réextrait. Quatre de leurs questions ouvertes y sont tranchées, et deux écarts au programme
apparaissent.

### Les fiches à relire en priorité

| Fiche | Raison |
|---|---|
| `premiere/maths-specialite/variables-aleatoires` | extraction PDF très lacunaire ; espérance et variance reconstituées par déduction |
| `premiere/physique-chimie/mouvement-interactions` | la formulation du principe fondamental attendue en première (vectorielle qualitative vs. deuxième loi de Newton) est à confirmer |
| `seconde/physique-chimie/modelisation-microscopique` | notation des configurations électroniques : sous-couches (1s² 2s²…) ou couches (K)(L) ? |
| `seconde/maths/fonctions-de-reference` | la fonction cube est-elle au programme de seconde dans le nouveau texte ? |
| `premiere/maths-enseignement-scientifique/phenomenes-evolution` | la fonction exponentielle est-elle introduite formellement dans ce parcours, ou seulement via les suites géométriques ? |
| `premiere-techno/pc-maths-sti2d-stl/mesure-incertitudes` | extraction PDF très lacunaire : un seul marqueur lisible dans le texte officiel |
| `premiere-techno/pc-maths-sti2d-stl/ondes-information` | la section « transport de l'information » est la moins adossée au texte |

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

✅ **Les 234 tests ont été exécutés le 2026-08-10 : tous au vert.**

Première exécution depuis la création de la bibliothèque — Node.js manquait jusque-là.
Résultat brut avant correction : **230/234**, ce qui valide la vérification par portage
Perl. Les quatre échecs ont été corrigés : trois défauts de code (valeur `'décroissante'`
accentuée dans un module et pas dans l'autre, `zeros: [-0]` affichable tel quel, remarque
d'unité manquante sur `concentrationMassique`) et un test trop strict (tolérance `1e-9`
sur une valeur arrondie à 6 décimales).

## Application

Coquille **Expo / React Native** complète dans `app/` — voir `app/README.md`.

5 écrans (Accueil, Chapitres, Chapitre, QCM, Outils), thème clair/sombre,
rendu Markdown + LaTeX hors ligne via KaTeX embarqué.

```bash
cd app && npm install && npm start
```

✅ **Elle compile** — vérifié le 2026-08-10 : 842 modules, bundle iOS de 4,48 Mo.
`npm install` puis `npx expo export` passent sans erreur.

⚠️ **Personne ne l'a encore regardée sur un téléphone.** Compiler n'est pas afficher :
le rendu KaTeX, le thème sombre et la navigation restent à contrôler. Les points à
vérifier au premier lancement sont listés dans `app/README.md`.

Deux prérequis machine découverts au premier démarrage :

- `fsevents` doit être installé (`npm install --include=optional`), sinon Metro se rabat
  sur un watcher qui ouvre un descripteur par répertoire et meurt en `EMFILE` ;
- `npm test` exige `node --test lib/*.test.js` — `node --test lib/` échoue sur Node 24,
  qui interprète le répertoire comme un module.

## Extension au collège — le chiffrage

Carte établie à partir des sommaires officiels réextraits (cycle 3 de 2025, cycle 4 du
BO 2026) :

| Niveau | Chapitres au programme | Écrits | Restants |
|---|---|---|---|
| Sixième *(cycle 3)* | 11 | 0 | 11 |
| Cinquième | 16 | 8 | **7** |
| Quatrième | 15 | 0 | 15 |
| Troisième | 14 | 0 | 14 |
| **Total collège** | **56** | **8** | **47** |

Détail de la 5e — 8 chapitres écrits couvrent 9 entrées du programme (`triangles-angles`
en couvre deux). **Restent** : Opérations · Puissances · Repérage sur une droite et dans
le plan · Représentation de l'espace · Transformations · Fonctions · Pensée informatique.

**Coût** : à la demi-journée par chapitre mesurée sur le pilote, relecture comprise,
47 chapitres = **environ 23 jours de travail effectif**, soit un peu moins de 5 semaines.
S'y ajoutent 500 questions de QCM.

⚠️ Le collège relève du **cycle 4**, dont le programme de maths est lui aussi celui du
BO du 2 avril 2026 : même avantage de fraicheur qu'au lycée, et même échéance.

## Ce qui reste à faire

1. **Relecture par un professeur** de chaque matière — le seul verrou réel.
   Dossier prêt : [`docs/relecture.md`](docs/relecture.md)
2. **Regarder l'application sur un téléphone** — elle compile, personne ne l'a vue
3. **Décider du périmètre collège** — 50 chapitres restants, ~25 jours (chiffrage ci-dessus)
4. ✅ Contenu v1 — 54 chapitres, 540 questions
5. ✅ Outils de calcul — 9 modules, 234 tests **exécutés, tous au vert**
6. ✅ Application Expo — écrite **et compilée**
7. ✅ Node.js installé (v24.19.0). La licence Xcode n'est **pas** nécessaire :
   ni Node, ni npm, ni Expo n'en dépendent — c'était une fausse piste.
8. ✅ Programmes officiels réextraits proprement (`app/scripts/extraire-pdf.mjs`)
