---
id: sj-si-06
titre: "Sujet SI — Éolienne domestique : puissance du vent et limite de Betz"
examen: "Bac général — spécialité Sciences de l'ingénieur (entraînement)"
niveau: terminale
matiere: si
statut: brouillon
relu_par: null
---

# Bac général — spécialité Sciences de l'ingénieur (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Étude d'un système pluritechnique : une **éolienne domestique** raccordée à une installation de maison. Le sujet comporte trois parties liées mais pouvant être traitées séparément. La qualité de la rédaction, la clarté des raisonnements et le soin apporté aux applications numériques entreront pour une part importante dans l'appréciation.

## Présentation du système

Une petite éolienne à axe horizontal produit de l'électricité. Le **vent** met en rotation un **rotor** à trois pales ; l'arbre entraîne directement une **génératrice synchrone à aimants permanents**. Un **redresseur** puis un **onduleur** convertissent l'énergie pour la maison. Un **anémomètre**, une **girouette** et un **système d'orientation** (plus un frein) protègent l'éolienne et l'orientent face au vent.

**Données constructeur :**

- Diamètre du rotor : $D = 3{,}0$ m (rayon $R = 1{,}5$ m).
- Masse volumique de l'air : $\rho = 1{,}23$ kg·m⁻³.
- Vitesse du vent étudiée : $V = 8{,}0$ m·s⁻¹.
- Coefficient de puissance du rotor : $C_p = 0{,}40$.
- Rendement de la conversion électrique (génératrice + redresseur + onduleur) : $\eta = 0{,}85$.
- Vitesse spécifique (rapport de vitesse en bout de pale) : $\lambda = \dfrac{\omega R}{V} = 6{,}0$.
- Puissance cinétique du vent traversant le rotor (fournie) : $P_{\text{vent}} = \tfrac{1}{2}\,\rho\,A\,V^3$, avec $A = \pi R^2$.
- Limite de Betz : un rotor ne peut extraire au mieux que $C_{p,\max} = 0{,}593$ de la puissance du vent.

---

## Partie A — Analyse fonctionnelle (5 points)

**Question A.1 (2 points).** Recopier et compléter le diagramme de la **chaîne d'énergie** de l'éolienne, en plaçant un composant à chaque bloc, choisi parmi : *rotor (pales), génératrice synchrone, redresseur + onduleur, installation de la maison*.

```
VENT → [ CAPTER ] → [ CONVERTIR ] → [ ADAPTER / DISTRIBUER ] → ACTION (fournir de l'électricité)
```

**Question A.2 (1 point).** Le vent est ici la **source d'énergie**. Préciser la nature de l'énergie du vent, puis celle de l'énergie disponible en sortie de la génératrice.

**Question A.3 (2 points).** La **chaîne d'information** comporte l'anémomètre, la girouette, le capteur de vitesse du rotor et le système de commande (orientation + frein). Associer chaque élément à *ACQUÉRIR*, *TRAITER* ou *COMMUNIQUER*. Expliquer pourquoi il faut **freiner ou effacer** l'éolienne quand le vent devient trop fort.

---

## Partie B — Puissance du vent et limite de Betz (9 points)

**Question B.1 (2 points).** Calculer l'aire $A$ balayée par le rotor.

**Question B.2 (3 points).** À l'aide de la relation fournie, calculer la **puissance cinétique** $P_{\text{vent}}$ du vent traversant le rotor pour $V = 8{,}0$ m·s⁻¹.

**Question B.3 (2 points).** Le rotor extrait une fraction $C_p = 0{,}40$ de cette puissance. Calculer la **puissance mécanique** $P_{\text{méca}}$ récupérée sur l'arbre.

**Question B.4 (2 points).** Calculer la puissance maximale théorique $P_{\text{Betz}} = C_{p,\max}\,P_{\text{vent}}$ qu'un rotor idéal pourrait extraire. Situer $C_p = 0{,}40$ par rapport à la limite de Betz : quel pourcentage de la limite ce rotor atteint-il ?

---

## Partie C — Grandeurs de rotation et production (6 points)

**Question C.1 (2 points).** À partir de la vitesse spécifique $\lambda = 6{,}0$, calculer la **vitesse de rotation** du rotor $\omega$ (en rad·s⁻¹), puis en tr·min⁻¹.

**Question C.2 (2 points).** En déduire le **couple** développé sur l'arbre : $C = \dfrac{P_{\text{méca}}}{\omega}$.

**Question C.3 (2 points).** Avec le rendement de conversion électrique $\eta = 0{,}85$, calculer la **puissance électrique** $P_{\text{elec}}$ fournie. En supposant ce vent constant pendant 24 h, estimer l'**énergie** produite en une journée (en kW·h) et comparer à la consommation typique d'un foyer ($\approx 10$ kW·h·jour⁻¹).

---

## Corrigé

### Partie A

**A.1.**

```
VENT → [ CAPTER ]      → [ CONVERTIR ]           → [ ADAPTER / DISTRIBUER ] → ACTION
        Rotor (pales)     Génératrice synchrone     Redresseur + onduleur      Fournir de
                                                                                l'électricité
```

**A.2.** Le vent porte une **énergie cinétique** (de l'air en mouvement). En sortie de la génératrice, on dispose d'une **énergie électrique** (courant alternatif, ensuite redressé puis reconverti).

**A.3.** *ACQUÉRIR* : anémomètre, girouette, capteur de vitesse du rotor. *TRAITER* : système de commande. *COMMUNIQUER* : ordres d'orientation et voyants d'état. Par vent fort, la puissance croît comme $V^3$ : les efforts sur les pales et la vitesse de rotation deviennent dangereux (risque de survitesse et de rupture). On **freine** ou on **efface** l'éolienne (mise en drapeau, orientation hors du vent) pour la protéger.

### Partie B

**B.1.** $A = \pi R^2 = \pi \times 1{,}5^2 = 7{,}07$ m².

**B.2.** $P_{\text{vent}} = \tfrac{1}{2}\rho A V^3 = 0{,}5 \times 1{,}23 \times 7{,}069 \times 8{,}0^3$.
Avec $8^3 = 512$ : $P_{\text{vent}} = 0{,}615 \times 7{,}069 \times 512 = 2{,}23 \times 10^{3}$ W $\approx 2{,}23$ kW.

**B.3.** $P_{\text{méca}} = C_p \times P_{\text{vent}} = 0{,}40 \times 2226 = 8{,}9 \times 10^{2}$ W $\approx 890$ W.

**B.4.** $P_{\text{Betz}} = 0{,}593 \times 2226 = 1{,}32 \times 10^{3}$ W $\approx 1320$ W.
Le rotor atteint $\dfrac{C_p}{C_{p,\max}} = \dfrac{0{,}40}{0{,}593} = 0{,}67$, soit **67 %** de la limite de Betz : c'est une bonne performance pour une petite machine (aucun rotor ne peut dépasser 59,3 %).

### Partie C

**C.1.** $\lambda = \dfrac{\omega R}{V}$, donc $\omega = \dfrac{\lambda V}{R} = \dfrac{6{,}0 \times 8{,}0}{1{,}5} = 32$ rad·s⁻¹.
En tr·min⁻¹ : $N = \dfrac{60 \times 32}{2\pi} = 3{,}1 \times 10^{2}$ tr·min⁻¹ $\approx 306$ tr·min⁻¹.

**C.2.** $C = \dfrac{P_{\text{méca}}}{\omega} = \dfrac{890{,}3}{32} = 28$ N·m.

**C.3.** $P_{\text{elec}} = \eta \times P_{\text{méca}} = 0{,}85 \times 890{,}3 = 7{,}6 \times 10^{2}$ W $\approx 757$ W.
Énergie sur 24 h : $E = P_{\text{elec}} \times 24 = 0{,}757 \times 24 = 18$ kW·h·jour⁻¹.
C'est près de **deux fois** la consommation quotidienne moyenne d'un foyer ($\approx 10$ kW·h) — mais seulement si le vent reste à 8 m·s⁻¹ toute la journée, ce qui est rare : en pratique, le vent varie et la production moyenne est bien plus faible.
