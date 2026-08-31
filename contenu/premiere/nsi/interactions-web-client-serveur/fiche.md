---
id: 1nsi-interactions-web-client-serveur
titre: "Interactions Web : client et serveur"
voie: generale
niveau: premiere
parcours: nsi
matiere: nsi
programme: "Première — spécialité NSI (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Notion de réseau et d'adresse (collège / SNT seconde)
  - Bases de HTML
statut: brouillon
relu_par: null
---

# Interactions Web : client et serveur

> Le Web repose sur un dialogue entre un **client** (le navigateur) et un
> **serveur**. Ce chapitre décrit ce dialogue (le protocole **HTTP**), les
> langages d'une page (**HTML**, **CSS**, **JavaScript**) et la façon dont un
> formulaire envoie des données.

---

# 1. Le modèle client / serveur

Sur le Web, deux rôles :

- Le **client** : le **navigateur** (Firefox, Chrome…) sur la machine de
  l'utilisateur. Il **demande** des pages.
- Le **serveur** : un ordinateur distant qui **héberge** le site et **répond**
  aux demandes.

Le dialogue suit toujours le même schéma : le client envoie une **requête**, le
serveur renvoie une **réponse**. C'est le protocole **HTTP** (*HyperText Transfer
Protocol*), ou **HTTPS** dans sa version chiffrée (sécurisée).

---

# 2. L'URL

Une page est identifiée par une **URL** (*Uniform Resource Locator*), son adresse.

```
https://www.exemple.fr/articles?id=42
```

- `https` : le **protocole**,
- `www.exemple.fr` : le nom du **serveur** (nom de domaine),
- `/articles` : le **chemin** de la ressource,
- `?id=42` : les **paramètres** envoyés au serveur.

---

# 3. Les langages d'une page Web

Une page Web combine **trois langages** aux rôles distincts :

- **HTML** (*HyperText Markup Language*) : la **structure** et le **contenu** de la
  page (titres, paragraphes, liens, images). Il utilise des **balises**.
- **CSS** (*Cascading Style Sheets*) : la **présentation** (couleurs, polices,
  disposition).
- **JavaScript** : le **comportement** et l'**interactivité**, exécuté par le
  navigateur, **côté client**.

Exemple de HTML :

```html
<h1>Bienvenue</h1>
<p>Voici un <a href="https://exemple.fr">lien</a>.</p>
```

Exemple de JavaScript réagissant à un clic (interaction homme-machine) :

```html
<button onclick="alert('Bonjour !')">Cliquez</button>
```

---

# 4. Les requêtes HTTP : GET et POST

Quand le client demande une ressource ou envoie des données, il utilise une
**méthode HTTP**. Les deux principales :

- **GET** : **demander** une ressource. Les éventuels paramètres sont visibles
  **dans l'URL** (`?id=42`). À utiliser pour une simple lecture, pas pour des
  données sensibles.
- **POST** : **envoyer** des données au serveur (par exemple un formulaire). Les
  données ne figurent **pas dans l'URL** mais dans le **corps** de la requête.

Le serveur répond avec un **code de statut** :

- **200** : OK, la ressource est renvoyée,
- **404** : ressource **non trouvée**,
- **403** : accès **interdit**,
- **500** : erreur du serveur.

---

# 5. Les formulaires

Un **formulaire** HTML (`<form>`) permet à l'utilisateur d'**envoyer des données**
au serveur. On y précise l'adresse de traitement (`action`) et la méthode
(`method`).

```html
<form action="/connexion" method="post">
  <input type="text" name="pseudo">
  <input type="password" name="mdp">
  <button type="submit">Se connecter</button>
</form>
```

Chaque champ a un **name** : c'est sous ce nom que sa valeur est transmise au
serveur. On utilise **POST** (et non GET) pour un mot de passe, afin qu'il
n'apparaisse pas dans l'URL.

---

# 6. Où s'exécute quoi ? (client vs serveur)

C'est une distinction centrale :

- **Côté client** (dans le navigateur) : le **HTML**, le **CSS** et le
  **JavaScript** sont interprétés. L'utilisateur peut voir et modifier ce code.
- **Côté serveur** : le traitement des données reçues, l'accès à une base de
  données, la génération des pages.

**Conséquence de sécurité :** on ne peut **jamais faire confiance** aux données
venant du client ; elles doivent toujours être **vérifiées côté serveur**. Une
vérification faite seulement en JavaScript (côté client) peut être contournée.

---

# Ce qu'il faut retenir

- Le Web fonctionne en **client/serveur** : le client (navigateur) envoie une
  **requête HTTP**, le serveur renvoie une **réponse**.
- Une **URL** contient le protocole, le serveur, le chemin et des paramètres.
- Une page = **HTML** (structure) + **CSS** (présentation) + **JavaScript**
  (interactivité, côté client).
- **GET** demande une ressource (paramètres dans l'URL) ; **POST** envoie des
  données (dans le corps, pas dans l'URL).
- Codes de statut : **200** OK, **404** non trouvé, **403** interdit,
  **500** erreur serveur.
- Un **formulaire** transmet la valeur de chaque champ sous son `name`.
- Les données du client doivent **toujours** être vérifiées **côté serveur**.

# Les erreurs à éviter

- Croire que JavaScript s'exécute sur le serveur : il tourne **dans le navigateur**
  (côté client).
- Envoyer un mot de passe en **GET** : il apparaîtrait dans l'URL.
- Confondre HTML (structure) et CSS (présentation).
- Faire confiance à une validation uniquement **côté client** : elle est
  contournable.
