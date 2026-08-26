---
id: stl-spcl
titre: "Formulaire — Terminale techno STL SPCL (Sciences physiques et chimiques en laboratoire)"
niveau: terminale-techno
matiere: physique-chimie
statut: brouillon
relu_par: null
---

Aide-mémoire — spécialité SPCL, série STL (Première + Terminale). L'essentiel par thème : formules encadrées, unités, valeurs de référence.

## Optique : lentilles et formation d'images

- Vergence : $\boxed{V = \dfrac{1}{f'}}$ ($V$ en dioptries δ, $f'$ en m).
- Relation de conjugaison (Descartes) : $\boxed{\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'} = V}$.
- Grandissement : $\boxed{\gamma = \dfrac{\overline{A'B'}}{\overline{AB}} = \dfrac{\overline{OA'}}{\overline{OA}} = \dfrac{d'}{d}}$ (signe = sens, $|\gamma|$ = taille).

## Photographie et image numérique

- Nombre d'ouverture : $\boxed{N = \dfrac{f'}{D}}$ (sans unité) ; **grand $N$ = petite ouverture**, lumière $\propto 1/N^2$.
- Définition : $\boxed{\text{déf} = L_{px}\times H_{px}}$ (nombre total de pixels, en Mpx).
- Résolution : $\boxed{\text{résolution} = \dfrac{\text{nombre de pixels}}{\text{longueur}}}$ ; taille d'un pixel $= \dfrac{\text{dimension du capteur}}{\text{nb de pixels sur ce côté}}$.
- Poids d'une image : $\boxed{\text{poids} = \text{définition}\times\text{profondeur de couleur}}$ ($1$ Mo $=10^{6}$ o).
- Débit binaire : $\boxed{D = \dfrac{Q}{\Delta t}}$ (bit/s) ; $1$ octet $= 8$ bits.

## Couleur et vision

- Domaine visible : $\boxed{\approx 400\ \text{nm (violet)} \text{ à } 800\ \text{nm (rouge)}}$.
- Synthèse additive (lumières) : $\boxed{\text{Rouge} + \text{Vert} + \text{Bleu} = \text{Blanc}}$.
- Synthèse soustractive (pigments) : $\boxed{\text{Cyan} + \text{Magenta} + \text{Jaune} = \text{Noir}}$.
- Couleur perçue : $\boxed{\text{couleur perçue} = \text{lumière incidente} - \text{lumière absorbée}}$.
- Codage RVB : chaque canal de $\boxed{0 \text{ à } 255}$ ($256 = 2^{8}$ niveaux par canal).

## Instrumentation et chaîne de mesure

- Étendue de mesure : $\boxed{\text{EM} = V_{\max} - V_{\min}}$.
- Sensibilité : $\boxed{S = \dfrac{\Delta(\text{sortie})}{\Delta(\text{entrée})}}$.
- Droite d'étalonnage d'un capteur : $\boxed{U = S\times G + U_0}$.
- Numérisation (CAN) : quantum $\boxed{q = \dfrac{\text{calibre}}{2^{\,n}}}$ ; nombre codé $\boxed{N = \text{partie entière de } \dfrac{U_e}{q}}$.

## Mesure et incertitudes

- Moyenne : $\boxed{\bar{x} = \dfrac{x_1 + \dots + x_n}{n}}$.
- Type A (répétition) : $\boxed{u(\bar{x}) = \dfrac{s}{\sqrt{n}}}$ ($s$ = écart-type).
- Type B (un instrument) : $\boxed{u = \dfrac{\text{graduation}}{\sqrt{3}} \text{ ou } \dfrac{\text{tolérance}}{\sqrt{3}}}$.
- Composition — somme/différence : $\boxed{u(y) = \sqrt{u(a)^2 + u(b)^2}}$.
- Composition — produit/quotient : $\boxed{\dfrac{u(y)}{|y|} = \sqrt{\left(\dfrac{u(a)}{a}\right)^2 + \left(\dfrac{u(b)}{b}\right)^2 + \dots}}$.
- Résultat : $\boxed{x = (\bar{x} \pm u(x))\ \text{unité}}$.

## Synthèses, extraction, purification

- Quantité de matière : $\boxed{n = \dfrac{m}{M}}$, avec $\boxed{m = \rho\times V}$ ($\rho$ = masse volumique).
- Rendement : $\boxed{\eta = \dfrac{n_{\text{obtenu}}}{n_{\text{théorique}}}}$.
- Rapport frontal (CCM) : $\boxed{R_f = \dfrac{h}{H}}$ ($h$ = migration de l'espèce, $H$ = du front).

## Chimie verte

- Économie d'atomes : $\boxed{\text{EA} = \dfrac{M(\text{produit voulu})}{\sum M(\text{réactifs})}\times 100}$ (%).
- Facteur environnemental : $\boxed{E = \dfrac{m_{\text{déchets}}}{m_{\text{produit}}}}$.

## Analyses spectroscopiques et dosages

- Densité : $\boxed{d = \dfrac{\rho}{\rho_{\text{eau}}}}$, $\rho_{\text{eau}} = 1{,}00\times10^{3}$ kg·m⁻³ $= 1{,}00$ g·mL⁻¹.
- Couleur perçue = complémentaire de la couleur absorbée (spectro UV-visible).
- Loi de Beer-Lambert : $\boxed{A = \varepsilon\,\ell\,c}$ ($A$ sans unité, $\ell$ en cm, $c$ en mol·L⁻¹).
- Dosage par étalonnage : $\boxed{c_x = \dfrac{A_x}{k}}$, $k = \varepsilon\ell$ = coefficient directeur de $A = f(c)$.
- Équivalence d'un titrage : $\boxed{\dfrac{n_A}{a} = \dfrac{n_{B,\text{versé}}}{b}}$.

## Ondes mécaniques et électromagnétiques

- Célérité : $\boxed{v = \dfrac{d}{\Delta t}}$ ; période/fréquence $\boxed{f = \dfrac{1}{T}}$ ; longueur d'onde $\boxed{\lambda = v\,T = \dfrac{v}{f}}$.
- Ondes EM dans le vide : $\boxed{c = 3{,}00\times10^{8}\ \text{m·s}^{-1}}$, $\boxed{\lambda = \dfrac{c}{f}}$.
- Mesure de distance (écho/sonar/radar) : $\boxed{d = \dfrac{v\times\Delta t}{2}}$ (aller-retour).
- Effet Doppler (qualitatif) : source qui se rapproche ⟹ fréquence perçue plus élevée.

## Numérisation, transmission et stockage

- Échantillonnage : $\boxed{f_e = \dfrac{1}{T_e}}$ ; condition de Shannon $\boxed{f_e \ge 2\,f_{\max}}$.
- Quantification : $\boxed{N = 2^{n}}$ niveaux ; pas $\boxed{q = \dfrac{U}{2^{n}}}$ (V).
- Débit : $\boxed{D = \dfrac{Q}{\Delta t}}$ (bit/s), aussi $\boxed{D = f_e\times n\times k}$ ; $\boxed{1\ \text{octet} = 8\ \text{bits}}$.
- Atténuation : $\boxed{A_{\text{dB}} = 10\log\!\left(\dfrac{P_e}{P_s}\right)}$ ; le long d'une fibre $\boxed{A_{\text{dB}} = \alpha\times L}$.

## Composition et transformations des systèmes chimiques

- Solubilité : $\boxed{s = \dfrac{n_{\text{dissous max}}}{V_{\text{solution}}}}$ (mol·L⁻¹ ou g·L⁻¹).
- Produit de solubilité : $\boxed{K_s = [A^{n+}]^{a}[B^{m-}]^{b}}$.
- pH : $\boxed{\mathrm{pH} = -\log\!\left(\dfrac{[\mathrm{H_3O^+}]}{c^\circ}\right) \approx -\log[\mathrm{H_3O^+}]}$ ; acide fort de concentration $c$ : $\boxed{\mathrm{pH} = -\log c}$.
- Produit ionique : $\boxed{K_e = [\mathrm{H_3O^+}][\mathrm{HO^-}] = 1{,}0\times10^{-14}}$ à 25 °C, soit $\mathrm{p}K_e = 14{,}0$.
- Titrage à l'équivalence : $\boxed{C_A V_A = C_B V_E}$.
- Conductivité : $\boxed{\sigma = \sum_i \lambda_i\,c_i}$.
- Pile : $\boxed{E_{\text{pile}} = E_{\oplus} - E_{\ominus} > 0}$ (V).

## Synthèses et mécanismes réactionnels

- Rendement : $\boxed{\eta = \dfrac{n_{\text{obtenu}}}{n_{\text{théorique}}}}$.
- Catalyseur : $\boxed{\text{accélère la réaction et n'apparaît pas dans l'équation bilan}}$.
- Mécanisme : $\boxed{\text{flèche courbe = du site donneur (riche) vers le site accepteur (pauvre)}}$.

## Systèmes, procédés et flux d'énergie

- Chaîne d'information : $\boxed{\text{ACQUÉRIR} \to \text{TRAITER} \to \text{COMMUNIQUER}}$ ; écart d'asservissement $\boxed{\varepsilon = \text{consigne} - \text{mesure}}$.
- Chaîne d'énergie : $\boxed{\text{ALIMENTER} \to \text{DISTRIBUER} \to \text{CONVERTIR} \to \text{TRANSMETTRE}}$.
- Puissance : $\boxed{P = \dfrac{E}{\Delta t}}$ (W) ; bilan $\boxed{P_{\text{absorbée}} = P_{\text{utile}} + P_{\text{pertes}}}$ ; rendement $\boxed{\eta = \dfrac{P_{\text{utile}}}{P_{\text{absorbée}}}}$.
- Débits : $\boxed{Q_V = \dfrac{V}{\Delta t}}$ (m³·s⁻¹), $\boxed{Q_m = \dfrac{m}{\Delta t}}$ (kg·s⁻¹), $\boxed{Q_m = \rho\times Q_V}$.
- Conservation de la masse : $\boxed{\sum Q_{m,\text{entrant}} = \sum Q_{m,\text{sortant}}}$.

<!-- notes de production : synthèse des fiche.md de contenu/premiere-techno/spcl-stl/ (image-photographie-lentilles, appareil-photo-image-numerique, image-couleur-vision, instrumentation-chaine-mesure, mesure-incertitudes-labo, syntheses-extraction-purification, securite-chimie-verte, analyses-spectroscopies-dosages) et contenu/terminale-techno/spcl-stl/ (ondes-mecaniques-em-spectres, ondes-transmission-stockage, composition-systemes-chimiques, syntheses-mecanismes, systemes-procedes-flux). Formules extraites des \boxed{}. À confronter : image-photographie-lentilles et lumiere-vision se recoupent (garder la conjugaison de Descartes, hors programme ST2S) ; effet Doppler traité en qualitatif seulement. -->
