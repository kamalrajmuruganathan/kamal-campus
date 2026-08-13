---
id: tale-techno-math-suites-arithmetiques-geometriques
titre: "Suites arithmétiques et géométriques"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Suites numériques (Première technologique)
  - Pourcentages et évolutions successives (automatismes)
  - Puissances d'un nombre (Seconde)
statut: brouillon
relu_par: null
---

# Suites arithmétiques et géométriques

> En Première, tu as appris à **reconnaître** les deux modèles et à calculer un terme.
> En Terminale, tu vas plus loin : prouver que trois nombres sont des termes
> consécutifs, retrouver une raison à partir de deux termes quelconques, et surtout
> **additionner** les termes — car dans la vraie vie (salaires cumulés, production
> totale, épargne), c'est le **total** qui intéresse tout le monde.

---

## 1. Ce que tu sais déjà (rappels de Première)

| | Arithmétique | Géométrique (termes $> 0$) |
|---|---|---|
| Relation | $u_{n+1} = u_n + r$ | $u_{n+1} = q \times u_n$ |
| On… | **ajoute** toujours $r$ | **multiplie** toujours par $q$ |
| Terme général | $u_n = u_0 + n\,r$ | $u_n = u_0 \times q^n$ |
| Reconnaissance | différences $u_{n+1} - u_n$ constantes | quotients $\dfrac{u_{n+1}}{u_n}$ constants |
| Évolution de $t\,\%$ répétée | — | $q = 1 + \dfrac{t}{100}$ |

> **Exemple.** Un loyer de $600$ € augmente de $2\,\%$ par an : suite géométrique de
> raison $q = 1{,}02$. Un abonnement de $600$ € augmente de $12$ € par an : suite
> arithmétique de raison $r = 12$. Le mot **pourcentage** fait basculer en géométrique.

⚠️ Cette année, les suites géométriques du programme sont à **termes strictement
positifs** : $u_0 > 0$ et $q > 0$. Pas de termes qui alternent de signe.

---

## 2. Moyennes arithmétique et géométrique de deux nombres

### Définitions

Pour deux nombres $a$ et $b$ :

$$\boxed{m = \frac{a+b}{2}} \quad \text{est la \textbf{moyenne arithmétique} de } a \text{ et } b$$

Pour deux nombres **positifs** $a$ et $b$ :

$$\boxed{g = \sqrt{a \times b}} \quad \text{est la \textbf{moyenne géométrique} de } a \text{ et } b$$

> **Exemple.** Pour $a = 4$ et $b = 9$ :
> moyenne arithmétique $m = \dfrac{4+9}{2} = 6{,}5$ ;
> moyenne géométrique $g = \sqrt{4 \times 9} = \sqrt{36} = 6$.
> Les deux moyennes sont **différentes** en général.

### À quoi sert la moyenne géométrique ?

Elle répond à la question : « quel coefficient **identique**, appliqué deux fois,
produit le même effet que ces deux coefficients ? »

> **Exemple (économie).** Un prix subit $+20\,\%$ une année puis $+80\,\%$ la
> suivante. Coefficients : $1{,}2$ puis $1{,}8$, soit $1{,}2 \times 1{,}8 = 2{,}16$
> au total. Le coefficient annuel « moyen » est la moyenne **géométrique**
> $\sqrt{1{,}2 \times 1{,}8} = \sqrt{2{,}16} \approx 1{,}47$, soit environ
> $+47\,\%$ par an — et **pas** $+50\,\%$, la moyenne arithmétique des taux.

---

## 3. Prouver que trois nombres sont des termes consécutifs

C'est une capacité **explicitement attendue** au bac. Trois nombres $a$, $b$, $c$
(dans cet ordre) sont des termes consécutifs :

### … d'une suite arithmétique

quand on passe de l'un au suivant en ajoutant toujours la même chose :

$$b - a = c - b \quad \Longleftrightarrow \quad \boxed{2b = a + c \quad \text{i.e. } b = \frac{a+c}{2}}$$

**Le terme du milieu est la moyenne arithmétique des deux autres.**

> **Exemple.** $7$ ; $12$ ; $17$ : on calcule $12 - 7 = 5$ et $17 - 12 = 5$.
> Les différences sont égales, donc ce sont trois termes consécutifs d'une suite
> arithmétique de raison $r = 5$. Vérification : $2 \times 12 = 24 = 7 + 17$. ✓

### … d'une suite géométrique (termes strictement positifs)

quand on passe de l'un au suivant en multipliant toujours par la même chose :

$$\frac{b}{a} = \frac{c}{b} \quad \Longleftrightarrow \quad \boxed{b^2 = a \times c \quad \text{i.e. } b = \sqrt{a c}}$$

**Le terme du milieu est la moyenne géométrique des deux autres.**

> **Exemple.** $4$ ; $6$ ; $9$ : on calcule $6^2 = 36$ et $4 \times 9 = 36$.
> Comme $b^2 = ac$, ce sont trois termes consécutifs d'une suite géométrique, de
> raison $q = \dfrac{6}{4} = 1{,}5$.

> **Contre-exemple.** $2$ ; $6$ ; $12$ : les différences valent $4$ puis $6$ (pas
> arithmétique) et $6^2 = 36 \neq 2 \times 12 = 24$ (pas géométrique). Ces trois
> nombres ne sont termes consécutifs **d'aucun** des deux modèles.

### Méthode rédigée type bac

1. Écris la condition : $2b = a + c$ (arithmétique) ou $b^2 = ac$ (géométrique).
2. Calcule **séparément** les deux membres.
3. Conclus : égaux → oui, avec la raison ($r = b - a$ ou $q = b/a$) ; différents → non.

---

## 4. Terme de rang $n$ et raison

### Exprimer le terme général

$$\boxed{u_n = u_0 + n\,r \text{ (arithmétique)} \qquad u_n = u_0 \times q^n \text{ (géométrique)}}$$

Et si le premier terme connu est $u_p$ (rang $p$ quelconque) :

$$u_n = u_p + (n-p)\,r \qquad \qquad u_n = u_p \times q^{\,n-p}$$

⚠️ De $u_p$ à $u_n$, il y a $n - p$ **pas** (et non $n - p + 1$) : de $u_4$ à $u_9$,
on ajoute $5$ fois la raison.

### Déterminer la raison à partir de deux termes

> **Exemple (arithmétique).** $u_4 = 23$ et $u_9 = 43$. De $u_4$ à $u_9$, on ajoute
> $5$ fois $r$ : $43 = 23 + 5r$, donc $r = \dfrac{43-23}{5} = 4$.
> Puis $u_0 = u_4 - 4r = 23 - 16 = 7$, d'où $u_n = 7 + 4n$.

> **Exemple (géométrique).** $u_2 = 6$ et $u_5 = 48$. De $u_2$ à $u_5$, on multiplie
> $3$ fois par $q$ : $48 = 6 \times q^3$, donc $q^3 = 8$ et $q = 2$
> (raison positive). D'où $u_n = u_2 \times 2^{\,n-2} = 6 \times 2^{\,n-2}$.

---

## 5. Somme des $n$ premiers termes — suite arithmétique

Les $n$ premiers termes d'une suite qui commence à $u_0$ sont
$u_0,\ u_1,\ \ldots,\ u_{n-1}$ : le dernier est $u_{n-1}$, pas $u_n$.

$$\boxed{S = u_0 + u_1 + \cdots + u_{n-1} = n \times \frac{u_0 + u_{n-1}}{2} = \text{nombre de termes} \times \frac{\text{premier} + \text{dernier}}{2}}$$

La forme en toutes lettres est la plus sûre : elle marche quel que soit le rang de
départ. Cas particulier célèbre :

$$1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$$

> **Exemple.** $1 + 2 + \cdots + 100 = \dfrac{100 \times 101}{2} = 5\,050$.

> **Exemple (épargne).** Chaque mois, tu verses $10$ € de plus que le mois
> précédent : $50$ € le premier mois, $60$ € le deuxième, etc. Sur $12$ mois, le
> dernier versement vaut $50 + 11 \times 10 = 160$ € et le total versé :
> $$S = 12 \times \frac{50 + 160}{2} = 12 \times 105 = 1\,260 \text{ €}.$$

---

## 6. Somme des $n$ premiers termes — suite géométrique

Pour une suite géométrique de raison $q \neq 1$ :

$$\boxed{S = u_0 + u_1 + \cdots + u_{n-1} = u_0 \times \frac{1 - q^n}{1 - q}}$$

L'exposant de $q$ est le **nombre de termes** additionnés. (Si $q = 1$, tous les
termes sont égaux et $S = n \times u_0$ — la formule est inutile.)

> **Exemple.** $1 + 2 + 4 + 8 + \cdots + 2^9$ : c'est la somme des $10$ premiers
> termes de la suite géométrique $u_0 = 1$, $q = 2$ :
> $$S = 1 \times \frac{1 - 2^{10}}{1 - 2} = \frac{1 - 1024}{-1} = 1\,023.$$

> **Exemple (économie).** Le chiffre d'affaires d'une entreprise vaut $10\,000$ €
> la première année et augmente de $10\,\%$ par an. Chiffre d'affaires **cumulé**
> sur les $4$ premières années ($u_0 = 10\,000$, $q = 1{,}1$, $4$ termes) :
> $$S = 10\,000 \times \frac{1 - 1{,}1^4}{1 - 1{,}1} = 10\,000 \times \frac{1 - 1{,}4641}{-0{,}1} = 46\,410 \text{ €}.$$

Astuce de calcul quand $q > 1$ : $\dfrac{1-q^n}{1-q} = \dfrac{q^n-1}{q-1}$, deux
signes moins se compensent.

---

## 7. Reconnaître une situation de somme

Autre capacité **explicitement attendue** : face à un énoncé, décider si la question
porte sur **un terme** ou sur **une somme de termes**.

| La question demande… | Objet | Outil |
|---|---|---|
| « le salaire de la 10e année », « la production en 2032 » | **un terme** $u_n$ | terme général |
| « le total perçu **sur** 10 ans », « la production **cumulée** », « **en tout** » | **une somme** $S$ | formules de somme |

**Les mots qui signalent une somme : au total, en tout, cumulé, somme des
versements, sur les $n$ premières années.**

> **Exemple.** Un salarié touche $1\,800$ € le premier mois, avec $+2\,\%$ chaque
> mois.
> - « Quel est son salaire le $12^{\text{e}}$ mois ? » → un **terme** :
>   $u_{11} = 1800 \times 1{,}02^{11}$ (le $12^{\text{e}}$ mois est le rang $11$
>   si le premier est $u_0$).
> - « Combien a-t-il perçu en tout sur l'année ? » → une **somme** de $12$ termes :
>   $S = 1800 \times \dfrac{1 - 1{,}02^{12}}{1 - 1{,}02} \approx 24\,143$ €.

⚠️ Avant toute formule, **compte les termes** : de $u_0$ à $u_{n}$ inclus, il y a
$n + 1$ termes ; de $u_1$ à $u_n$ inclus, il y en a $n$.

---

## 8. Tableau récapitulatif

| | Arithmétique | Géométrique ($u_0 > 0$, $q > 0$) |
|---|---|---|
| Relation | $u_{n+1} = u_n + r$ | $u_{n+1} = q\,u_n$ |
| Terme général | $u_n = u_0 + nr$ | $u_n = u_0\,q^n$ |
| Depuis le rang $p$ | $u_n = u_p + (n-p)r$ | $u_n = u_p\,q^{\,n-p}$ |
| Moyenne de $a$ et $b$ | $\dfrac{a+b}{2}$ | $\sqrt{ab}$ ($a, b > 0$) |
| $a$, $b$, $c$ consécutifs | $2b = a + c$ | $b^2 = ac$ |
| Somme de $n$ termes | $n \times \dfrac{\text{premier} + \text{dernier}}{2}$ | $u_0 \times \dfrac{1-q^n}{1-q}$ ($q \neq 1$) |
| Cas fétiche | $1 + \cdots + n = \dfrac{n(n+1)}{2}$ | $1 + q + \cdots + q^{n-1} = \dfrac{1-q^n}{1-q}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Se tromper dans le nombre de termes.** De $u_0$ à $u_{12}$, il y a $13$
   termes ; de $u_1$ à $u_{12}$, il y en a $12$. Compte **avant** d'appliquer une
   formule — c'est l'exposant de $q$ et le facteur $n$.
2. **Confondre les deux conditions de termes consécutifs** : $2b = a+c$ pour
   l'arithmétique, $b^2 = ac$ pour la géométrique. Écrire $b^2 = a + c$ ne teste
   rien du tout.
3. **Confondre terme et somme.** $u_0 \times q^n$ est **un** nombre de la liste,
   $u_0 \times \frac{1-q^n}{1-q}$ est le **total**. Relis la question : « la 10e
   année » ou « sur 10 ans » ?
4. **Prendre la moyenne arithmétique des taux d'évolution.** Deux hausses de
   $+20\,\%$ puis $+80\,\%$ ne font pas $+50\,\%$ par an en moyenne : on multiplie
   les coefficients et on prend la moyenne **géométrique** ($\approx +47\,\%$).
5. **Traduire une baisse de $t\,\%$ par une raison négative.** $-15\,\%$ donne
   $q = 0{,}85$, jamais $q = -0{,}15$ — d'autant que les suites géométriques du
   programme sont à termes strictement positifs.
6. **Oublier le facteur $u_0$ dans la somme géométrique**, ou oublier de diviser
   par $2$ dans la somme arithmétique. Vérifie l'ordre de grandeur : la somme doit
   dépasser le plus grand terme.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — SUITES ARITHMÉTIQUES ET GÉOMÉTRIQUES » (lignes 40-50).

Couverture, calée sur le texte officiel :
- Contenus : moyenne arithmétique de deux nombres (§2), expression du terme de
  rang n (§4), somme des n premiers termes d'une suite arithmétique (§5) ;
  suites géométriques à termes strictement positifs : moyenne géométrique de deux
  nombres positifs (§2), terme de rang n (§4), somme des n premiers termes (§6).
- Capacités : prouver que trois nombres sont (ou non) des termes consécutifs (§3) ;
  déterminer la raison, exprimer le terme général (§4) ; calculer la somme des n
  premiers termes et reconnaître une situation de somme (§5-7).

Prérequis : chapitre « Suites numériques » de Première technologique
(contenu/premiere-techno/maths/suites-numeriques/), qui pose définitions, terme
général, reconnaissance des deux modèles et lien pourcentages/raison. Les sommes
n'y figurent pas (point de périmètre noté dans ses notes de production) : elles
sont bien du ressort de la Terminale d'après ce programme — cohérent.

Choix de rédaction : contextes voie techno (loyer, épargne, chiffre d'affaires,
salaires) ; restriction aux suites géométriques à termes strictement positifs,
conformément au texte (pas de raison négative) ; convention « n premiers termes »
= u_0 à u_{n-1}, avec l'avertissement systématique de compter les termes.

Vérifications numériques faites : √2,16 ≈ 1,4697 ; 1+…+100 = 5050 ;
12×(50+160)/2 = 1260 ; 2^10−1 = 1023 ; 1,1^4 = 1,4641 → 46 410 ;
1800×(1,02^12−1)/0,02 = 24 143,4 → ≈ 24 143 €.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La convention « n premiers termes » (u_0 à u_{n-1} vs u_1 à u_n) : le PDF donne
  peut-être une écriture de référence, à aligner.
- L'exemple « taux moyen » via moyenne géométrique : le calcul du taux moyen
  équivalent est officiellement dans la section FONCTIONS EXPONENTIELLES
  (exposant 1/n) — ici il n'illustre que la moyenne géométrique de deux
  coefficients, sans exposant fractionnaire. Vérifier que ce n'est pas prématuré.
- La formule 1+2+…+n = n(n+1)/2 n'est pas citée explicitement dans l'extraction :
  gardée comme cas particulier classique de la somme arithmétique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
