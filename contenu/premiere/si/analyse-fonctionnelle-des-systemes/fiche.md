---
id: 1si-analyse-fonctionnelle-des-systemes
titre: "Analyse fonctionnelle des systèmes"
voie: generale
niveau: premiere
parcours: si
matiere: si
programme: "Première — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Notion de système et d'objet technique (collège, technologie)
  - Lecture d'un schéma et d'un tableau
statut: brouillon
relu_par: null
---

# Analyse fonctionnelle des systèmes

> Avant de concevoir ou de comprendre un système, l'ingénieur répond d'abord à
> une question simple : **à quoi sert-il, et pour qui ?** L'analyse fonctionnelle
> est la démarche qui décrit un système par ce qu'il **fait** (ses fonctions),
> avant de décrire comment il le fait (ses solutions techniques).

---

## 1. Qu'est-ce qu'un système ?

Un **système** est un ensemble organisé de composants qui interagissent pour
**rendre un service** à un utilisateur. Un vélo à assistance électrique, un
portail automatique, un drone, une station météo sont des systèmes.

On distingue :

- le **besoin** : ce qui a motivé la création du système (se déplacer sans effort) ;
- la **fonction globale** (ou fonction d'usage) : le service rendu ;
- la **matière d'œuvre** : ce sur quoi le système agit (une personne à déplacer,
  une information à transmettre, une énergie à convertir) ;
- la **valeur ajoutée** : ce que le système apporte à cette matière d'œuvre.

On modélise cela par le diagramme **« bête à cornes »** (analyse du besoin), qui
répond à trois questions : *À qui rend-il service ? Sur quoi agit-il ? Dans quel but ?*

---

## 2. Frontière et milieux extérieurs

Pour étudier un système, on trace sa **frontière d'étude** : ce qui est *dedans*
(le système) et ce qui est *dehors* (les **éléments du milieu extérieur** :
utilisateur, énergie, réseau, environnement…).

Le diagramme **« pieuvre »** place le système au centre et relie chaque élément
extérieur. Les liaisons entre éléments extérieurs, *en passant par le système*,
définissent les **fonctions de service** :

- **fonction principale (FP)** : elle relie **deux** éléments extérieurs et
  justifie l'existence du système (« permettre à l'utilisateur d'arroser le jardin ») ;
- **fonction de contrainte (FC)** : elle relie le système à **un seul** élément
  extérieur (« résister à la pluie », « respecter le budget »).

---

## 3. Caractériser une fonction : le cahier des charges

Une fonction seule ne suffit pas : il faut la **quantifier**. Le **cahier des
charges fonctionnel (CdCF)** associe à chaque fonction :

| Élément | Rôle |
|---|---|
| **Critère** | grandeur mesurable (masse, vitesse, autonomie…) |
| **Niveau** | valeur attendue avec son unité (≤ 25 kg ; 30 km) |
| **Flexibilité** | tolérance acceptée (± 5 %, mini, maxi) |

Exemple : *FC « être transportable »* → critère : masse → niveau : ≤ 25 kg →
flexibilité : maxi. Le CdCF est le **contrat** entre le client et le concepteur :
un système est validé s'il respecte tous les niveaux.

---

## 4. Décomposer les fonctions : les fonctions techniques

La fonction de service décrit le **quoi**. Pour comprendre le **comment**, on la
décompose en **fonctions techniques** : *acquérir, traiter, communiquer* (côté
information) et *alimenter, distribuer, convertir, transmettre* (côté énergie).

L'outil de description est le **diagramme SADT / FAST** ou, plus courant en SI,
le **diagramme des blocs internes** issu du langage **SysML** :

- le **diagramme des cas d'utilisation** décrit les services attendus par les
  acteurs ;
- le **diagramme des exigences** (requirements) liste et hiérarchise les
  exigences du cahier des charges ;
- le **diagramme de définition de blocs (bdd)** et le **diagramme de blocs
  internes (ibd)** décrivent l'architecture matérielle et les flux échangés.

---

## 5. Chaîne d'énergie et chaîne d'information

Un système automatisé est structuré en **deux chaînes** qui coopèrent :

- la **chaîne d'information** : elle *acquiert* des grandeurs (capteurs), les
  *traite* (unité de traitement) et *communique* des ordres ou des données ;
- la **chaîne d'énergie** : elle *alimente*, *distribue*, *convertit* et
  *transmet* l'énergie jusqu'à l'action finale sur la matière d'œuvre.

La chaîne d'information **pilote** la chaîne d'énergie ; en retour, des capteurs
renseignent la chaîne d'information : c'est le principe de la **régulation**.
Ces deux chaînes font l'objet des chapitres suivants.

---

## Ce qu'il faut retenir

- Un **système** rend un **service** à un utilisateur en apportant une **valeur
  ajoutée** à une **matière d'œuvre**.
- La **fonction principale** relie **deux** éléments du milieu extérieur ; une
  **fonction de contrainte** n'en relie **qu'un**.
- Le **cahier des charges fonctionnel** quantifie chaque fonction par un
  **critère**, un **niveau** et une **flexibilité**.
- SysML fournit les diagrammes (cas d'utilisation, exigences, bdd, ibd) pour
  décrire besoin et architecture.
- Un système automatisé se lit comme deux chaînes couplées : **information** et
  **énergie**.

## Les erreurs à éviter

- **Confondre fonction et solution** : « moteur électrique » est une solution ;
  la fonction est « convertir l'énergie électrique en énergie mécanique ».
- **Oublier de quantifier** : une fonction sans critère ni niveau n'est pas
  vérifiable.
- **Croire qu'une FP relie le système à un élément** : non, elle relie **deux
  éléments extérieurs** entre eux à travers le système.
