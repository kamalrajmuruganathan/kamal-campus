# Mot de passe oublié : réglages Supabase (à faire une fois)

Dans l'appli, « Mot de passe oublié ? » envoie un **code provisoire** par e-mail. L'élève le tape et choisit un
nouveau mot de passe. Le code est valable 10 minutes et ne sert qu'une fois.

Pour que cela marche, trois réglages sont à faire dans Supabase (projet Kamal Campus).

## 1. Durée du code : 10 minutes

Authentication → Sign In / Providers → **Email** → « Email OTP expiration » : mettre **600** (secondes), puis **Save**.
Ne pas toucher à « Minimum password length » (6).

## 2. Modèle de l'e-mail (en français, avec le code)

Authentication → **Emails** → onglet **Templates** → **Reset Password**.

Sujet :

```
Ton code Kamal Campus pour changer de mot de passe
```

Message (remplacer tout le contenu) :

```html
<h2>Mot de passe oublié</h2>
<p>Bonjour,</p>
<p>Voici ton code provisoire pour choisir un nouveau mot de passe sur Kamal Campus :</p>
<p style="font-size:28px;font-weight:bold;letter-spacing:6px">{{ .Token }}</p>
<p>Ce code est valable <strong>10 minutes</strong> et ne peut servir qu'une fois.
Tape-le dans l'appli, sur l'écran « Mot de passe oublié ».</p>
<p>Si tu n'as rien demandé, ignore ce message : ton mot de passe ne change pas.</p>
<p>L'équipe Kamal Campus</p>
```

Puis **Save**.

## 3. Serveur d'envoi des e-mails (SMTP) : indispensable pour les élèves

Le serveur d'e-mails fourni par Supabase n'envoie qu'aux membres de l'équipe du projet (donc à Kamal),
et seulement quelques e-mails par heure. Les élèves ne recevraient jamais leur code.
Solution gratuite : envoyer depuis la boîte **kamalcampus.contact@gmail.com**.

1. Sur ce compte Google : activer la **validation en deux étapes** (myaccount.google.com → Sécurité).
2. Toujours dans Sécurité : **Mots de passe des applications** → créer un mot de passe nommé « Supabase ».
   Google affiche 16 lettres : les copier (ne les envoyer à personne, pas même dans le chat).
3. Supabase → Authentication → **Emails** → onglet **SMTP Settings** → activer **Enable custom SMTP** :
   - Sender email : `kamalcampus.contact@gmail.com`
   - Sender name : `Kamal Campus`
   - Host : `smtp.gmail.com`
   - Port : `465`
   - Username : `kamalcampus.contact@gmail.com`
   - Password : les 16 lettres du mot de passe d'application
   - **Save**
4. Authentication → **Rate Limits** → « Rate limit for sending emails » : 30 par heure suffit pour commencer.

Gmail accepte environ 500 envois par jour : largement assez pour démarrer.

## 4. Tester

1. Se déconnecter de l'appli (Ma progression → Se déconnecter).
2. « Mot de passe oublié ? » → taper l'e-mail d'un compte → « Recevoir un code ».
3. Ouvrir l'e-mail (regarder aussi les indésirables), taper le code, choisir un nouveau mot de passe.
4. L'appli s'ouvre : c'est réussi.
