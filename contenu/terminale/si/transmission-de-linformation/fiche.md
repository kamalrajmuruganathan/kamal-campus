---
id: tale-si-transmission-de-linformation
titre: "Transmission de l'information"
voie: generale
niveau: terminale
parcours: si
matiere: si
programme: "Terminale — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Grandeurs numériques et binaire (Première SI)
  - Chaîne d'information (acquérir, traiter, communiquer)
  - Notions de signal
statut: brouillon
relu_par: null
---

# Transmission de l'information

> Dans un système, la **chaîne d'information** capte des grandeurs, les traite et
> les **communique** — à un autre système, à un opérateur, à un réseau. Pour que
> l'information circule sans erreur, il faut la **coder**, la **transporter** sur
> un support, et se protéger du **bruit**. C'est le rôle de la transmission de
> l'information.

---

# 1. La chaîne d'information

Le programme décrit la chaîne d'information par trois fonctions, en miroir de la
chaîne d'énergie :

```
grandeur physique → ACQUÉRIR → TRAITER → COMMUNIQUER → vers l'utilisateur / réseau
                    (capteurs)  (calculateur)  (interfaces,
                                               liaisons)
```

- **Acquérir** : capter une grandeur (température, position, lumière…) grâce à un
  **capteur** et la convertir en signal exploitable.
- **Traiter** : exécuter un programme, décider, calculer (microcontrôleur,
  automate).
- **Communiquer** : transmettre l'information vers un afficheur, un autre système
  ou un réseau.

---

# 2. Signal analogique et signal numérique

- Un **signal analogique** varie de façon **continue** : il peut prendre une
  infinité de valeurs (ex. la tension d'un microphone).
- Un **signal numérique** ne prend qu'un nombre **fini** de valeurs, codées en
  **binaire** (0 et 1). Il est plus robuste au bruit et facile à traiter par un
  ordinateur.

Le passage de l'un à l'autre :

- **Conversion analogique → numérique (CAN)** : réalisée par un **échantillonnage**
  (on relève la valeur à intervalles réguliers) puis une **quantification**.
- **Conversion numérique → analogique (CNA)** : opération inverse.

**À retenir** : plus le nombre de bits de codage est grand, plus la
**résolution** (finesse) du signal numérique est grande.

---

# 3. Coder l'information : le binaire

Un **bit** vaut 0 ou 1. Avec $n$ bits, on code
$$2^n \text{ valeurs différentes (de } 0 \text{ à } 2^n - 1).$$

| $n$ bits | Nombre de valeurs |
|---------|--------------------|
| 1       | 2                  |
| 4       | 16                 |
| 8 (octet) | 256              |
| 10      | 1024               |

**Exemple de calcul.** Un capteur codé sur **8 bits** distingue
$2^8 = 256$ niveaux (de 0 à 255).

**Résolution d'un capteur.** Si un capteur mesure de 0 à 10 V sur 8 bits, le plus
petit écart mesurable (le « pas ») vaut
$$\frac{10\ \mathrm{V}}{2^8} = \frac{10}{256} \approx 0{,}039\ \mathrm{V} \approx
39\ \mathrm{mV}.$$

---

# 4. Le débit et le support de transmission

Le **débit binaire** $D$ est la quantité d'information transmise par seconde, en
**bits par seconde** ($\mathrm{bit/s}$ ou $\mathrm{bps}$) :
$$D = \frac{\text{nombre de bits}}{\text{durée}}, \qquad
t = \frac{\text{nombre de bits}}{D}.$$

**Exemple.** Transmettre un fichier de $2\ \mathrm{Mbit}$ à un débit de
$500\ \mathrm{kbit/s}$ prend
$$t = \frac{2 \times 10^6}{500 \times 10^3} = 4\ \mathrm{s}.$$

Les **supports** de transmission :

- **Filaire** : câble cuivre (paires torsadées, coaxial). Simple, mais sensible
  aux perturbations et de portée limitée.
- **Fibre optique** : très haut débit, faibles pertes, insensible aux parasites
  électromagnétiques.
- **Sans fil (radio)** : Wi-Fi, Bluetooth, 4G/5G. Mobilité, mais sensible aux
  obstacles et au partage de la bande.

---

# 5. Le bruit et la protection de l'information

Pendant le transport, le signal se dégrade : c'est le **bruit** (parasites,
atténuation). Pour fiabiliser la transmission :

- Le **numérique** résiste mieux : tant que l'on distingue le 0 du 1, l'information
  est intacte (on peut la **régénérer**).
- On ajoute des **bits de contrôle** pour **détecter** (voire corriger) les
  erreurs : le plus simple est le **bit de parité** (on complète pour que le
  nombre de 1 soit pair).

**Exemple.** Pour la donnée `1011` (trois 1, nombre impair), le bit de parité
paire vaut **1**, ce qui donne `10111` : le total de 1 est alors pair. Si, à la
réception, la parité est fausse, une erreur est détectée.

Autres notions du programme :

- **Modulation** : adapter le signal au support (ex. moduler une onde porteuse
  pour la radio).
- **Protocole** : ensemble de règles communes qui permettent à deux systèmes de
  se comprendre (trame, adresse, contrôle d'erreur).

---

# Ce qu'il faut retenir

- Chaîne d'information : **acquérir → traiter → communiquer**.
- **Analogique** = continu (infinité de valeurs) ; **numérique** = discret
  (valeurs finies codées en binaire), plus robuste au bruit.
- Avec $n$ bits on code $2^n$ valeurs ; 1 octet = 8 bits = 256 valeurs.
- **Débit** $D$ en bit/s ; $t = \dfrac{\text{nombre de bits}}{D}$.
- **CAN** = échantillonnage + quantification ; plus de bits ⇒ meilleure
  résolution.
- Le **bruit** dégrade le signal ; **bit de parité** et protocoles permettent de
  détecter les erreurs.

# Les erreurs à éviter

- Confondre **analogique** (continu) et **numérique** (discret, binaire).
- Croire qu'avec $n$ bits on code $n$ valeurs : c'est $2^n$.
- Confondre **débit** (bit/s) et **quantité d'information** (bits).
- Penser que le bruit détruit toujours l'information numérique : tant qu'on
  distingue 0 et 1, elle est régénérée.
