---
id: 4e-techno-confort-et-domotique
titre: "Confort et domotique"
voie: generale
niveau: quatrieme
parcours: techno
matiere: techno
programme: "Cycle 4 — Technologie (programme officiel)"
theme: "L'informatique et la programmation / Design, innovation et créativité"
duree_lecture_min: 12
prerequis:
  - Objet technique, fonctions et solutions techniques (5e)
  - Chaîne d'énergie et chaîne d'information (5e)
statut: brouillon
relu_par: null
---

# Confort et domotique

> Une lampe qui s'allume toute seule quand tu entres dans une pièce, un volet qui se
> ferme au coucher du soleil, un chauffage qui baisse la nuit : ce ne sont pas des tours
> de magie, mais de la **domotique**. Derrière chaque « maison intelligente », il y a des
> **capteurs**, un **programme** et des **actionneurs** qui travaillent ensemble pour
> améliorer notre **confort**, notre **sécurité** et nos **économies d'énergie**.

---

## 1. Qu'est-ce que la domotique ?

La **domotique** est l'ensemble des techniques qui permettent d'**automatiser** et de
**contrôler** les équipements d'un logement (éclairage, chauffage, volets, alarme,
arrosage…).

Un système domotique cherche à répondre à trois grands besoins :

| Besoin | Exemple concret |
|---|---|
| **Confort** | Régler la température et la lumière automatiquement |
| **Sécurité** | Détecter une intrusion, une fumée, une fuite d'eau |
| **Économie d'énergie** | Éteindre le chauffage quand une fenêtre est ouverte |

> **À retenir.** La domotique ne consiste pas seulement à commander des appareils à
> distance : elle les rend **automatiques**, c'est-à-dire capables de réagir **tout seuls**
> à leur environnement.

---

## 2. Les trois éléments d'un système automatique

Un système domotique fonctionne toujours selon le même schéma : **acquérir → traiter → agir**.

### a) Les capteurs (acquérir l'information)

Un **capteur** transforme une grandeur physique (lumière, température, présence,
humidité…) en un **signal électrique** utilisable par un programme.

| Capteur | Ce qu'il mesure ou détecte |
|---|---|
| Capteur de température (thermistance) | La chaleur |
| Capteur de luminosité (photorésistance) | La lumière |
| Détecteur de mouvement (infrarouge) | La présence d'une personne |
| Capteur d'humidité | La quantité d'eau dans l'air ou le sol |
| Interrupteur / bouton-poussoir | Une action de l'utilisateur |

### b) L'unité de traitement (décider)

Une **carte programmable** (par exemple un microcontrôleur type Arduino, ou une carte
micro:bit) contient un **programme**. Elle lit les capteurs, **compare** les valeurs à des
conditions (« si… alors… ») et **décide** de la commande à envoyer.

### c) Les actionneurs (agir)

Un **actionneur** transforme un signal électrique en une **action physique**.

| Actionneur | Action produite |
|---|---|
| Lampe / LED | Éclairer |
| Moteur | Ouvrir ou fermer un volet, un portail |
| Résistance chauffante | Chauffer |
| Buzzer / sirène | Émettre un son (alarme) |
| Électrovanne | Ouvrir ou couper l'eau |

> **Exemple complet.** *Éclairage automatique d'un couloir.* Le **détecteur de mouvement**
> (capteur) repère une personne → la **carte programmable** vérifie « fait-il sombre ? »
> grâce au capteur de luminosité → si oui, elle **allume la lampe** (actionneur) pendant
> 30 secondes.

---

## 3. Programme et conditions

Le comportement d'un système domotique est décrit par un **algorithme** fait de
**conditions**. On l'écrit souvent sous la forme :

```
SI (capteur de mouvement = présence) ET (luminosité < seuil)
    ALORS allumer la lampe
SINON
    éteindre la lampe
```

Un **seuil** est une valeur de référence choisie par le concepteur : par exemple, « en
dessous de 100 lux, il fait sombre ». C'est le programme, et non le capteur, qui décide
de l'action.

---

## 4. Boucle ouverte et boucle fermée

- **Système en boucle ouverte** : il agit sans vérifier le résultat. Exemple : un
  arrosage qui se déclenche tous les jours à 20 h, même s'il a plu.
- **Système en boucle fermée (asservi)** : un capteur mesure le résultat et le système se
  **corrige** tout seul. Exemple : un **thermostat** qui mesure la température de la pièce
  et coupe le chauffage dès que la consigne (par exemple 19 °C) est atteinte.

> La boucle fermée utilise un **retour d'information** (le capteur renseigne le programme
> sur l'effet obtenu). C'est ce qui rend le réglage précis et économe.

---

## 5. Domotique et communication

Les objets d'une maison intelligente **communiquent** entre eux et parfois avec un
smartphone. Les informations circulent :

- par des **fils** (bus filaire) ;
- par des **ondes radio** sans fil : Wi-Fi, Bluetooth, Zigbee.

Un objet connecté qui échange des données par un réseau fait partie de ce qu'on appelle
l'**Internet des objets** (IoT, *Internet of Things*).

---

## Ce qu'il faut retenir

- La **domotique** automatise un logement pour le **confort**, la **sécurité** et les
  **économies d'énergie**.
- Tout système automatique suit la chaîne **capteur → unité de traitement (programme) →
  actionneur**.
- Un **capteur** mesure, un **actionneur** agit ; entre les deux, un **programme** décide
  avec des **conditions** et des **seuils**.
- Un système **asservi** (boucle fermée) utilise un capteur pour **vérifier** le résultat
  et se corriger ; en **boucle ouverte**, il n'y a pas de contrôle.

## Les erreurs à éviter

- **Confondre capteur et actionneur.** Le capteur *reçoit* une information (il mesure) ;
  l'actionneur *produit* une action. Une lampe n'est pas un capteur.
- **Croire que le capteur décide.** Le capteur ne fait que mesurer : c'est le **programme**
  qui compare à un seuil et décide.
- **Penser que « connecté » = « automatique ».** Commander une lampe depuis son téléphone
  n'est pas de l'automatisme ; l'automatisme, c'est quand le système réagit **seul**.
- **Oublier le retour d'information.** Sans capteur pour mesurer le résultat, un système ne
  peut pas se corriger : ce n'est pas un asservissement.
