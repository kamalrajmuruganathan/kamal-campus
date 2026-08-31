---
id: 2nde-snt-le-web
titre: "Le Web"
voie: generale
niveau: seconde
parcours: snt
matiere: snt
programme: "Seconde — SNT (programme officiel)"
duree_lecture_min: 7
prerequis:
  - Internet (réseau, adresse IP, DNS)
  - Utilisation d'un navigateur
statut: brouillon
relu_par: null
---

# Le Web

## Qu'est-ce que le Web ?

Le **Web** (ou *World Wide Web*, la « toile mondiale ») est un **service d'Internet** qui permet de consulter des **pages** reliées entre elles par des **liens hypertexte**. Il a été inventé en **1989-1990 par Tim Berners-Lee** au CERN.

Il ne faut pas confondre :

- **Internet** = le réseau mondial (l'infrastructure, les « tuyaux »).
- **Le Web** = un service qui *fonctionne grâce à* Internet.

Le Web repose sur trois inventions clés : les **adresses URL**, le protocole **HTTP** et le langage **HTML**.

## Les trois piliers du Web

### 1. L'URL : l'adresse d'une page

Une **URL** (*Uniform Resource Locator*) est l'adresse d'une ressource sur le Web. Exemple : `https://www.exemple.fr/cours/index.html`. On y distingue :

- le **protocole** (`https`),
- le **nom de domaine** (`www.exemple.fr`),
- le **chemin** vers la ressource (`/cours/index.html`).

### 2. HTTP : le protocole d'échange

**HTTP** (*HyperText Transfer Protocol*) est le protocole qui règle le dialogue entre le **navigateur** (le **client**) et le **serveur** :

- le client envoie une **requête** (« donne-moi cette page »),
- le serveur renvoie une **réponse** (le contenu de la page).

**HTTPS** est la version **sécurisée** : les échanges sont **chiffrés**, ce qui protège les données (mots de passe, paiements). Le petit **cadenas** dans la barre d'adresse signale HTTPS.

### 3. HTML : le langage des pages

**HTML** (*HyperText Markup Language*) est le langage qui décrit le **contenu et la structure** d'une page (titres, paragraphes, images, liens). Il utilise des **balises**, par exemple `<h1>` pour un grand titre, `<p>` pour un paragraphe, `<a>` pour un lien.

Le **CSS** est un langage complémentaire qui gère la **mise en forme** (couleurs, polices, disposition).

## Le lien hypertexte

Un **lien hypertexte** (souvent souligné ou coloré) permet, d'un simple clic, de passer d'une page à une autre, y compris vers un autre site. C'est ce maillage de liens qui forme la « toile » et permet de **naviguer** de page en page.

## Client et serveur

- Le **client** est le programme qui demande la page : le **navigateur** (Firefox, Chrome, etc.).
- Le **serveur** est l'ordinateur qui **héberge** les pages et les envoie sur demande.

Le navigateur **interprète** le code HTML et CSS reçu pour **afficher** la page telle qu'on la voit.

## Les moteurs de recherche

Un **moteur de recherche** (comme celui de Qwant, DuckDuckGo, Google…) aide à retrouver des pages à partir de mots-clés. Il fonctionne en trois temps :

1. des programmes automatiques, les **robots** (ou *crawlers*), **parcourent** le Web en suivant les liens ;
2. ils **indexent** les pages trouvées dans une immense base de données ;
3. quand on saisit une requête, le moteur **classe** les résultats par pertinence et les affiche.

Le **classement** dépend d'algorithmes tenant compte, par exemple, du nombre de liens pointant vers une page. Attention : les premiers résultats ne sont pas forcément les plus fiables, et certains sont des **publicités**.

## Enjeux et esprit critique

- **Fiabilité de l'information** : tout le monde peut publier sur le Web ; il faut **vérifier les sources**, croiser les informations et se méfier des fausses nouvelles.
- **Traces et vie privée** : la navigation laisse des **traces** (cookies, historique) qui peuvent être exploitées.
- **Publicité ciblée** : de nombreux sites gratuits se financent par la publicité, adaptée à notre profil.

## Ce qu'il faut retenir

- Le **Web** est un **service** d'Internet permettant de consulter des pages liées par des **liens hypertexte**.
- Il repose sur trois piliers : **URL** (adresse), **HTTP/HTTPS** (protocole d'échange), **HTML** (langage des pages).
- Un **navigateur** (client) demande une page à un **serveur**, qui la lui envoie ; le navigateur l'affiche.
- Un **moteur de recherche** parcourt, indexe et classe les pages.

## Les erreurs à éviter

- « Le Web, c'est Internet » : **non**, le Web est un *service* qui utilise Internet.
- « Le moteur de recherche contient toutes les pages » : il n'en connaît qu'une partie, celle qu'il a **indexée**.
- « Les premiers résultats sont toujours les plus vrais » : le classement mesure une **pertinence** algorithmique, pas la **véracité** ; certains résultats sont des publicités.
- « HTTPS rend un site forcément honnête » : HTTPS garantit le **chiffrement** de la connexion, pas l'honnêteté du contenu.
