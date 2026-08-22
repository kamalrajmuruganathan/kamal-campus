---
id: tale-esc-atmosphere-effet-de-serre-climat
titre: "Atmosphère, effet de serre et climat"
voie: generale
niveau: terminale
parcours: enseignement-scientifique
matiere: physique-chimie
programme: "Enseignement scientifique — terminale générale, BO du 22 janvier 2019 (version aménagée 2023)"
theme: "Science, climat et société"
duree_lecture_min: 16
prerequis:
  - Puissance et énergie ; le watt (Première)
  - Rayonnement électromagnétique, infrarouge et ultraviolet (Première)
  - Température, échelles °C et kelvin (Seconde)
  - Rayonnement du corps humain et loi de Wien (Enseignement scientifique, Première)
statut: brouillon
relu_par: null
---

# Atmosphère, effet de serre et climat

> La Terre est une machine thermique alimentée par un seul carburant : le **rayonnement du
> Soleil**. Elle en reçoit une puissance énorme, en réfléchit une partie, réchauffe le reste,
> puis renvoie tout vers l'espace sous forme de chaleur. Tant que ce qui entre égale ce qui
> sort, la température moyenne reste stable. Comprendre le climat, c'est comprendre ce
> **bilan** — et pourquoi les gaz à effet de serre le déséquilibrent. Un mot d'ordre :
> surveille les **unités** (W/m², °C ou K, ppm) et ne confonds jamais une **puissance par
> mètre carré** avec une température.

---

## 1. La composition de l'atmosphère

### L'atmosphère actuelle

L'air sec actuel est composé, en proportions de volume, de :

- **diazote** $\text{N}_2$ : environ $78\ \%$ ;
- **dioxygène** $\text{O}_2$ : environ $21\ \%$ ;
- **argon** $\text{Ar}$ : environ $1\ \%$ ;
- **dioxyde de carbone** $\text{CO}_2$ : de l'ordre de $0{,}04\ \%$, soit environ $420$ **ppm**.

À cela s'ajoute la **vapeur d'eau** $\text{H}_2\text{O}$, très variable (de $0$ à quelques %).

> **ppm = partie par million.** $1$ ppm $= 1$ molécule sur $10^{6}$. Dire « $\text{CO}_2 = 420$
> ppm » revient à dire $0{,}0420\ \%$ en volume. On préfère les ppm parce que les gaz à effet
> de serre sont présents en très faible proportion.

### De l'atmosphère primitive à l'atmosphère actuelle

L'**atmosphère primitive** (il y a $\sim 4$ milliards d'années) était surtout composée de
**$\text{CO}_2$**, de **diazote** et de **vapeur d'eau**, **sans dioxygène**. Le $\text{O}_2$
est apparu progressivement grâce à la **photosynthèse** des premiers organismes, tandis qu'une
grande partie du $\text{CO}_2$ était piégée (océans, roches carbonatées).

> **Exemple.** La quasi-absence de $\text{O}_2$ à l'origine explique qu'aucune couche d'ozone
> ne protégeait alors la surface : la vie ne pouvait se développer que dans l'eau, à l'abri des
> ultraviolets.

### L'ozone stratosphérique et la protection contre les UV

L'**ozone** $\text{O}_3$ est concentré dans la **stratosphère** (entre $\sim 15$ et $50$ km
d'altitude), où il forme la « couche d'ozone ». Il **absorbe** une grande partie du
rayonnement **ultraviolet (UV)** du Soleil, le plus énergétique et le plus nocif pour le
vivant.

$$\boxed{\text{Ozone stratosphérique} \;\longrightarrow\; \text{absorbe les UV} \;\longrightarrow\; \text{protège la surface}}$$

> **Exemple.** Sans cet écran, les UV atteindraient le sol en bien plus grande quantité :
> brûlures, dommages à l'ADN, cancers de la peau. La couche d'ozone est un **filtre naturel**,
> à ne pas confondre avec l'effet de serre (§ 3), qui est un tout autre mécanisme.

---

## 2. Le bilan radiatif de la Terre

### La puissance solaire reçue

Au sommet de l'atmosphère, face au Soleil, la Terre reçoit une puissance par unité de surface
appelée **constante solaire** :

$$S_0 \approx 1360\ \text{W/m}^2$$

Mais cette valeur correspond à une surface **face au Soleil**. La Terre est une **sphère** : à
chaque instant, seule une moitié est éclairée, et de façon rasante près des pôles. En moyenne
sur toute la surface du globe et sur la journée, la puissance reçue par mètre carré est **quatre
fois plus petite** :

$$\boxed{P_{\text{moy}} = \dfrac{S_0}{4} \approx \dfrac{1360}{4} \approx 340\ \text{W/m}^2}$$

> **D'où vient le facteur 4 ?** Le disque qui intercepte le rayonnement a pour aire $\pi R^2$,
> alors que la sphère qui la répartit a pour aire $4\pi R^2$ : le rapport vaut exactement $4$.

### L'albédo

Une partie de ce rayonnement est **réfléchie** directement vers l'espace (nuages, neige,
glace, surfaces claires) sans réchauffer la Terre. La fraction réfléchie s'appelle l'**albédo**
$A$, un nombre **sans unité** entre $0$ et $1$.

Pour la Terre, en moyenne, $A \approx 0{,}30$ : $30\ \%$ du rayonnement solaire repart aussitôt.
La puissance réellement **absorbée** par mètre carré est donc :

$$\boxed{P_{\text{abs}} = (1 - A)\,\dfrac{S_0}{4} \approx 0{,}70 \times 340 \approx 240\ \text{W/m}^2}$$

> **Exemple.** Une banquise (glace blanche, $A$ proche de $0{,}6$) renvoie beaucoup de lumière ;
> l'océan sombre ($A \approx 0{,}06$) en absorbe presque tout. Remplacer de la glace par de
> l'eau **abaisse l'albédo** et fait absorber davantage d'énergie (on y revient au § 4).

### Le rayonnement thermique de la Terre

Comme tout corps, la Terre **émet** son propre rayonnement, dans le domaine **infrarouge**
(elle est bien plus froide que le Soleil, donc rayonne à plus grande longueur d'onde). Ce
rayonnement évacue l'énergie vers l'espace.

La **loi de Stefan-Boltzmann** relie la puissance rayonnée par unité de surface à la
température **absolue** $T$ (en kelvin) :

$$\boxed{P_{\text{émise}} = \sigma\,T^4} \qquad \sigma = 5{,}67 \times 10^{-8}\ \text{W·m}^{-2}\text{·K}^{-4}$$

L'essentiel est **qualitatif** : la puissance émise croît **très vite** avec la température (à
la puissance $4$). Si un corps se réchauffe, il rayonne beaucoup plus — c'est ce qui permet à
la Terre de retrouver un équilibre.

> ⚠️ La température doit être en **kelvin** : $T(\text{K}) = \theta(\text{°C}) + 273{,}15$.
> Mettre des °C dans $T^4$ donne un résultat totalement faux.

### L'équilibre radiatif

À l'équilibre, la Terre **émet autant qu'elle absorbe** :

$$\boxed{(1 - A)\,\dfrac{S_0}{4} = \sigma\,T^4}$$

En résolvant, on trouve une température moyenne théorique $T \approx 255\ \text{K}$, soit
environ $\boxed{-18\ \text{°C}}$.

> **Le paradoxe.** Cette température d'équilibre « nue » vaut $-18\ \text{°C}$, alors que la
> température moyenne réelle du sol est d'environ $+15\ \text{°C}$. Il manque $33\ \text{°C}$ :
> c'est exactement l'apport de l'**effet de serre**.

---

## 3. L'effet de serre et le forçage radiatif

### Le mécanisme

Certains gaz de l'atmosphère, les **gaz à effet de serre (GES)**, sont **transparents** au
rayonnement solaire (visible) qui arrive, mais **absorbent** le rayonnement **infrarouge**
émis par le sol. Ils le réémettent dans toutes les directions, dont une partie **vers la
surface**. Résultat : le sol reçoit un supplément d'énergie et se réchauffe.

Les principaux GES sont :

| Gaz | Formule | Origine principale |
|---|---|---|
| Vapeur d'eau | $\text{H}_2\text{O}$ | naturelle (le plus abondant) |
| Dioxyde de carbone | $\text{CO}_2$ | combustion des énergies fossiles |
| Méthane | $\text{CH}_4$ | élevage, rizières, fossiles |

$$\boxed{\text{GES} : \text{transparents au visible, absorbent l'infrarouge} \;\Rightarrow\; \text{réchauffent la surface}}$$

> **À comprendre.** L'effet de serre n'est **pas** un défaut : sans lui, la Terre serait à
> $-18\ \text{°C}$, gelée. Le problème est son **renforcement** par les émissions humaines de
> $\text{CO}_2$ et de $\text{CH}_4$.

### Le forçage radiatif

Quand la concentration de GES augmente, l'atmosphère laisse **moins bien** repartir
l'infrarouge : le bilan n'est plus équilibré, il reste chaque seconde un excédent d'énergie.
Ce déséquilibre se mesure par le **forçage radiatif**, une puissance par mètre carré :

$$\text{forçage radiatif} \; \text{en } \text{W/m}^2 \quad (> 0 \Rightarrow \text{réchauffement})$$

Depuis l'ère préindustrielle, l'augmentation des GES représente un forçage de l'ordre de
$+2$ à $+3\ \text{W/m}^2$. La Terre absorbe alors un peu plus qu'elle n'émet, et sa température
**monte** jusqu'à ce qu'un nouvel équilibre (plus chaud) soit atteint.

> **Exemple.** La concentration de $\text{CO}_2$ est passée d'environ $280$ ppm (avant 1850) à
> plus de $420$ ppm aujourd'hui, soit une hausse d'environ $50\ \%$. C'est la cause principale
> du forçage radiatif actuel.

---

## 4. Les rétroactions

Une **rétroaction** (feedback) est un mécanisme par lequel un effet **agit en retour** sur sa
propre cause.

- **Rétroaction positive** : elle **amplifie** la perturbation initiale (emballement).
- **Rétroaction négative** : elle **atténue** la perturbation (stabilisation).

| Type | Exemple | Effet |
|---|---|---|
| **Positive** | fonte des glaces → albédo plus faible → plus d'absorption → plus de fonte | amplifie |
| **Positive** | réchauffement → plus d'évaporation → plus de vapeur d'eau (un GES) → réchauffement | amplifie |
| **Négative** | réchauffement → $T$ plus élevée → $\sigma T^4$ plus grand → plus d'énergie émise | atténue |

> **Exemple (rétroaction glace-albédo).** La banquise blanche renvoie le rayonnement ; quand
> elle fond, elle laisse place à l'océan sombre qui absorbe davantage. La Terre se réchauffe
> encore, la glace fond encore : la cause s'auto-entretient. C'est la rétroaction **positive**
> la plus citée.

> ⚠️ « Positif » ne veut pas dire « bénéfique » : une rétroaction positive **aggrave** le
> réchauffement. Positif/négatif décrit le **sens** (amplifier / freiner), pas une valeur morale.

---

## 5. Le rôle des océans

Les océans jouent un rôle **régulateur** majeur, de deux façons.

### Absorption

- Les océans **absorbent une grande partie de la chaleur** excédentaire (plus de $90\ \%$ de
  l'énergie accumulée par le système climatique), ce qui **ralentit** le réchauffement de
  l'air — mais stocke le problème.
- Ils **absorbent aussi du $\text{CO}_2$** (environ le quart des émissions humaines), ce qui
  limite sa hausse dans l'air, mais **acidifie** l'eau de mer.

### Dilatation thermique

L'eau, en se réchauffant, se **dilate** : son volume augmente. Un océan plus chaud occupe donc
**plus de volume**, ce qui fait **monter le niveau de la mer** — indépendamment de la fonte des
glaces.

$$\boxed{\text{océan plus chaud} \;\Rightarrow\; \text{dilatation} \;\Rightarrow\; \text{hausse du niveau de la mer}}$$

Pour une colonne d'eau de hauteur $h$ qui se réchauffe de $\Delta T$, l'élévation vaut
$\Delta h = h \times \alpha \times \Delta T$, où $\alpha$ est le **coefficient de dilatation**
de l'eau (de l'ordre de $2 \times 10^{-4}\ \text{K}^{-1}$).

> **Exemple.** La dilatation thermique explique une part importante de la hausse observée du
> niveau des mers au XXᵉ siècle, à égalité avec la fonte des glaciers continentaux.

---

## 6. Modèles climatiques et projections

Le climat futur ne se « devine » pas : il se **simule**. Les **modèles climatiques numériques**
découpent l'atmosphère et les océans en cellules et calculent, pas à pas, les échanges
d'énergie (bilan radiatif, effet de serre, rétroactions, océans) à partir des **lois de la
physique**.

- On valide un modèle en vérifiant qu'il **reproduit le climat passé** (indicateurs
  climatiques : température moyenne, concentration de $\text{CO}_2$, niveau des mers,
  extension des glaces…).
- On l'utilise ensuite pour établir des **projections** selon différents **scénarios**
  d'émissions (fortes ou faibles émissions de GES).

> **À retenir.** Une projection n'est pas une prédiction unique : c'est un **éventail** de
> futurs possibles, chacun associé à un scénario d'émissions. Moins on émet de GES, plus le
> réchauffement projeté est faible.

---

## 7. Tableau récapitulatif

| Notion | Relation / valeur clé | Unité |
|---|---|---|
| Constante solaire | $S_0 \approx 1360$ | W/m² |
| Puissance moyenne reçue | $P_{\text{moy}} = S_0/4 \approx 340$ | W/m² |
| Albédo | $A \approx 0{,}30$ (fraction réfléchie) | sans unité |
| Puissance absorbée | $P_{\text{abs}} = (1-A)\,S_0/4 \approx 240$ | W/m² |
| Loi de Stefan-Boltzmann | $P_{\text{émise}} = \sigma T^4$ | W/m² |
| Constante de Stefan-Boltzmann | $\sigma = 5{,}67\times10^{-8}$ | W·m⁻²·K⁻⁴ |
| Équilibre radiatif | $(1-A)\,S_0/4 = \sigma T^4$ | — |
| Température d'équilibre « nue » | $\approx 255$ K $= -18$ °C | K, °C |
| Température réelle du sol | $\approx 288$ K $= +15$ °C | K, °C |
| Apport de l'effet de serre | $\approx +33$ °C | °C |
| Forçage radiatif actuel | $\approx +2$ à $+3$ | W/m² |
| $\text{CO}_2$ : préindustriel → actuel | $\approx 280 \to 420$ | ppm |
| Conversion température | $T(\text{K}) = \theta(\text{°C}) + 273{,}15$ | — |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier le facteur 4.** La puissance moyenne reçue est $S_0/4 \approx 340\ \text{W/m}^2$,
   pas $S_0 = 1360\ \text{W/m}^2$. La constante solaire vaut pour une surface **face au Soleil** ;
   la sphère répartit l'énergie sur une aire $4$ fois plus grande.
2. **Confondre couche d'ozone et effet de serre.** L'**ozone stratosphérique** filtre les
   **UV** ; l'**effet de serre** piège l'**infrarouge**. Deux gaz, deux rayonnements, deux
   mécanismes différents.
3. **Mettre des °C dans la loi de Stefan-Boltzmann.** $P = \sigma T^4$ exige $T$ en **kelvin**.
   Un écart de température se transpose tel quel (°C = K), mais une température **absolue** dans
   $T^4$ doit être convertie : $T(\text{K}) = \theta(\text{°C}) + 273{,}15$.
4. **Croire que « rétroaction positive » = bonne nouvelle.** Positif signifie **amplifier** la
   perturbation : la rétroaction glace-albédo **aggrave** le réchauffement. Rien de bénéfique.
5. **Voir l'effet de serre comme un mal absolu.** Sans lui, la Terre serait à $-18\ \text{°C}$.
   Le problème n'est pas l'effet de serre lui-même mais son **renforcement** par les émissions
   humaines de GES.
6. **Confondre une puissance par mètre carré et une température.** Le forçage radiatif se mesure
   en **W/m²** (un déséquilibre de puissance), pas en °C. Il **provoque** une hausse de
   température, mais n'en est pas une.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel d'ENSEIGNEMENT SCIENTIFIQUE (tronc commun), terminale générale —
BO du 22 janvier 2019, version aménagée (2023). Thème 1 « Science, climat et société »,
sujets 1.1, 1.2, 1.3.
  Programme (PDF) : https://www.education.gouv.fr/media/133235/download
  eduscol : https://eduscol.education.gouv.fr/5790/programmes-et-ressources-en-enseignement-scientifique-voie-g
Section reprise dans docs/programme-terminale-enseignement-scientifique.txt (lignes 21-28) :
composition de l'atmosphère (primitive/actuelle) et ozone stratosphérique (absorption UV) ;
bilan radiatif terrestre, GES et forçage radiatif ; rétroactions positives/négatives et rôle
des océans (absorption, dilatation thermique) ; indicateurs, modèles numériques, projections.
Extraction via WebFetch depuis le PDF officiel. À CONFRONTER AU PDF avant publication.

⚠️ À CONFRONTER AU PDF / À SOUMETTRE AU RELECTEUR :
- Valeurs numériques (ordres de grandeur pédagogiques) : S0 ≈ 1360 W/m² (parfois 1361 ou 1367
  selon les sources), P_moy = S0/4 ≈ 340 W/m², albédo A ≈ 0,30, P_abs ≈ 240 W/m²,
  T_eff ≈ 255 K ≈ -18 °C (calcul : (238/5,67e-8)^0,25 = 254,5 K). Température réelle ≈ 15 °C,
  écart de serre ≈ +33 °C. Toutes à valider par le relecteur ; le programme n'impose pas de
  valeurs chiffrées, il attend surtout la compréhension du bilan.
- Loi de Stefan-Boltzmann : le programme d'ENSEIGNEMENT SCIENTIFIQUE la veut « qualitative /
  simple » (dépendance en T^4). J'ai donné la formule P = σT^4 encadrée mais insisté sur le
  qualitatif. Vérifier que le niveau de calcul demandé dans les exercices (résolution de
  (1-A)S0/4 = σT^4 pour T) reste dans le périmètre attendu du tronc commun — l'exercice 4
  fait ce calcul avec racine 4e ; à trancher (peut être fourni sous forme guidée).
- Forçage radiatif : donné en ordre de grandeur +2 à +3 W/m² depuis le préindustriel
  (GIEC AR6 : ~+2,7 W/m² pour les GES bien mélangés). À confirmer/actualiser.
- Coefficient de dilatation de l'eau de mer α ≈ 2e-4 K⁻¹ (dépend fortement de T et de la
  salinité) : valeur pédagogique pour l'exercice 6 ; l'énoncé fournit la valeur. À valider.
- Concentration CO2 : 280 ppm préindustriel → ~420 ppm (années 2020). À actualiser à la date
  de publication.
- Périmètre : l'atmosphère primitive et la photosynthèse touchent à la SVT ; traitées ici de
  façon minimale (dominante PC : rayonnement, bilan d'énergie). Conforme à la note de
  périmètre en tête du fichier programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
