# 🌟 SkillBridge TN - Plateforme de Matching Talents & Entreprises

> Une plateforme moderne et responsive pour connecter les talents aux opportunités en Tunisie et accélérer les recrutements.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19.2.5-61dafb)
![Vite](https://img.shields.io/badge/Vite-8.0.10-646cff)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4.2.4-06b6d4)

---

## 📋 Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure des Fichiers](#structure-des-fichiers)
- [Technologies](#technologies)
- [Améliorations UI](#améliorations-ui)
- [Gestion des Données](#gestion-des-données)
- [Patterns et Conventions](#patterns-et-conventions)
- [Contribution](#contribution)

---

## 🎯 Aperçu

**SkillBridge TN** est une solution complète de matching entre talents et entreprises. Elle permet aux:
- **Talents** de poster leurs compétences et trouver des opportunités
- **Entreprises** de décrire leurs besoins et trouver les talents parfaits
- **Utilisateurs** d'utiliser le speed matching et l'escrow pour sécuriser les transactions

### Points Clés
✅ Interface moderne et responsive  
✅ Système de matching intelligent  
✅ Stockage persistant avec localStorage  
✅ Animations fluides et UX optimisée  
✅ Design en tons clairs (light theme)  
✅ Conforme aux standards web modernes  

---

## ✨ Fonctionnalités

### 1. **Poster une Compétence** (Talents)
- Formulaire multi-étapes intuitive
- Sélection de compétences prédéfinies
- Localisation par région
- Contact WhatsApp
- Affichage en temps réel

### 2. **Poster un Besoin** (Entreprises)
- Informations entreprise détaillées
- Description du projet avec validation
- Budget et timeline
- Compétences requises
- Personne de contact

### 3. **Résultats du Matching**
- Algorithme de matching basé sur les compétences
- Score de compatibilité en pourcentage
- Affichage en grille responsive
- Cartes détaillées avec infos de contact

### 4. **Fonctionnalités Avancées**
- 🎬 Prévisualisations 60s
- ⚡ Speed Match rapide
- 🔒 Escrow sécurisé pour les transactions
- 📊 Page À Propos complète

---

## 🏗️ Architecture

### Structure Composants

```
src/
├── pages/
│   ├── Home.jsx              # Page principale avec état global
│   └── Home.css              # Styles de layout
├── components/
│   ├── Header.jsx            # En-tête avec infos projet
│   ├── Header.css
│   ├── SkillForm.jsx         # Formulaire talents
│   ├── SkillForm.css
│   ├── NeedForm.jsx          # Formulaire entreprises
│   ├── NeedForm.css
│   ├── Card.jsx              # Carte réutilisable
│   ├── Card.css              # Styles cartes avec boutons WhatsApp
│   ├── MatchResults.jsx      # Grille de résultats
│   ├── MatchResults.css
│   ├── ProjectDescription.jsx # Page À Propos
│   ├── ProjectDescription.css
│   ├── CompanyForm.jsx       # Formulaire entreprises avancé
│   ├── CompanyForm.css
│   ├── Preview60s.jsx        # Prévisualisation vidéo
│   ├── SpeedMatch.jsx        # Matching rapide
│   └── ContractEscrow.jsx    # Escrow sécurisé
├── data/
│   ├── skills.json           # Données talents initiales
│   └── needs.json            # Données besoins initiales
├── logic/
│   └── match.js              # Algorithme de matching
├── App.jsx                   # Composant principal
├── App.css                   # Styles globaux
├── main.jsx                  # Point d'entrée
└── index.css                 # Design tokens + styles globaux
```

### Flux de Données

```
Home.jsx (état global)
    ├── skills[] → SkillForm, Card, MatchResults
    ├── needs[] → NeedForm, Card, MatchResults
    └── matches[] → MatchResults
        ↓
    localStorage (persistance)
```

---

## 🚀 Installation

### Prérequis
- **Node.js** 16+ 
- **npm** ou **yarn**

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/your-repo/skillbridge-tn.git
cd skillbridge-tn
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```
Le serveur démarre sur `http://localhost:5174`

4. **Build pour la production**
```bash
npm run build
```

5. **Prévisualiser la build**
```bash
npm run preview
```

---

## 💻 Utilisation

### Ajouter une Compétence
1. Cliquez sur l'onglet **⭐ Talents**
2. Remplissez le formulaire:
   - Titre de la compétence
   - Votre nom
   - Description détaillée
   - Sélectionnez vos compétences
   - Régions disponibles
   - Numéro WhatsApp
3. Cliquez **"Poster la Compétence"**
4. La compétence s'ajoute immédiatement et persiste

### Ajouter un Besoin
1. Cliquez sur l'onglet **🎯 Besoins**
2. Remplissez le formulaire:
   - Type de besoin
   - Budget et timeline
   - Localisation
   - Compétences requises
3. Cliquez **"Enregistrer le besoin"**
4. Consultez les matchings en onglet **🔗 Matchings**

### Voir les Matchings
1. Allez à **🔗 Matchings**
2. Visualisez les talents correspondant à vos besoins
3. Cliquez **"Contacter via WhatsApp"** pour initier la discussion

---

## 📁 Structure des Fichiers Détaillée

### Pages
- **Home.jsx**: Conteneur principal avec gestion d'état, onglets, statistiques sidebar
- Tabs système: À Propos, Talents, Entreprises, Besoins, Matchings, Fonctionnalités

### Composants Clés
- **Card.jsx**: Affiche talents/besoins avec score, description, infos de contact
- **MatchResults.jsx**: Grille responsive de matchings avec headers de projet
- **ProjectDescription.jsx**: Page À Propos avec 8+ sections (hero, problèmes, solutions, features, etc.)
- **Header.jsx**: Banner avec titre gradient, description, feature cards

### Styles & Design
- **index.css**: Design tokens (couleurs, spacing, typography, shadows, animations)
- **App.css**: Composants globaux (modal, alerts, spinners, overlays) + 11 animations
- **Card.css**: Boutons WhatsApp avec gradient, hover effects, animations

### Données
- **skills.json**: Array de talents avec titre, auteur, description, compétences, région, contact
- **needs.json**: Array de besoins avec titre, description, budget, compétences requises, auteur

### Logique
- **match.js**: Calcule compatibilité entre compétences et besoins

---

## 🛠️ Technologies

### Frontend
| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 19.2.5 | Framework UI |
| Vite | 8.0.10 | Build tool & dev server |
| Tailwind CSS | 4.2.4 | Styling principal |
| PostCSS | 8.4.47 | CSS processing |
| AutoPrefixer | 10.4.20 | Compatibilité navigateurs |
| ESLint | 9.16.0 | Code quality |

### CSS Custom Properties (Design Tokens)
- **Couleurs**: Primary (#0b6ef6), Secondary (#10b981), Warning, Error, Success
- **Spacing**: 8 niveaux (2px-48px)
- **Typography**: 11 tailles de police
- **Radius**: 4 niveaux (rounded corners)
- **Shadows**: 5 niveaux
- **Animations**: 11+ keyframes (fadeIn, slideUp, slideDown, etc.)

---

## 🎨 Améliorations UI

### Modernisation Complète
✅ **Design System Cohérent**
- Palette de couleurs unifiée (bleu primaire #0b6ef6, vert #10b981)
- Typographie professionnelle (Inter, 11 tailles)
- Espacements harmonisés (8 niveaux)
- Ombres subtiles et profondeur

✅ **Responsivité Mobile-First**
- Breakpoints: 480px, 768px, 1024px
- Grilles auto-fit pour adaptation automatique
- Layouts fluides et flexibles

✅ **Animations Fluides**
- 11+ animations réutilisables
- Transitions smooth sur tous les éléments
- Effects de hover attractifs

✅ **Composants UI Améliorés**
- Cartes modernes avec gradient et ombres
- Boutons WhatsApp verts avec effet de brillance
- Badges colorés par type/score
- Formulaires avec validation visuelle

### Bouton WhatsApp
- Design: Gradient vert (#22c55e → #16a34a)
- Padding amélioré (12px 18px)
- Ombre prononcée (0 2px 8px rgba(34, 197, 94, 0.25))
- Hover effect: Translatey(-2px) + augmente ombre
- Texte seul (icône supprimée)

---

## 💾 Gestion des Données

### localStorage
Les données sont automatiquement persistées dans le navigateur:

```javascript
// Clés:
localStorage.getItem('skills')   // Array de talents
localStorage.getItem('needs')    // Array de besoins

// Restauration au démarrage:
const [skills, setSkills] = useState(() => {
  const saved = localStorage.getItem('skills')
  return saved ? JSON.parse(saved) : skillsData
})
```

### Cycle de Vie
1. **Au démarrage**: Charge depuis localStorage ou utilise les données JSON
2. **En ajoutant**: Met à jour l'état et localStorage automatiquement
3. **Au refresh**: Restaure les données depuis localStorage
4. **Data Structure**: JSON stringifié puis parsé

---

## 📐 Patterns et Conventions

### Composants Fonctionnels
- Tous les composants utilisent **React Hooks** (useState, useEffect)
- Props destructurées pour clarté
- Inline styles pour composants réutilisables

### État Global
- Gestion centralisée dans **Home.jsx**
- Lifting state up pour props drilling
- localStorage comme base de données locale

### CSS
- **Inline styles** pour styles dynamiques
- **CSS modules/fichiers** pour styles spécifiques aux composants
- **Design tokens** (CSS variables) pour cohérence

### Naming Conventions
- Composants: PascalCase (Button, SkillForm)
- Fonctions/variables: camelCase (handleAddSkill, buttonStyle)
- Constantes: UPPER_CASE (DATA_LIMIT)
- Classes CSS: kebab-case (whatsapp-button)

### Formulaires
- Validation au niveau du formulaire
- Messages d'erreur visuels
- Boutons désactivés pendant submission
- Réinitialisation après soumission

---

## 🤝 Contribution

### Process

1. Fork le repository
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Guidelines

- Respectez le style de code existant
- Testez sur mobile et desktop
- Mettez à jour la documentation
- Écrivez des messages de commit clairs

---


**© 2026 SkillBridge TN** • Connecter les talents aux opportunités 🚀

