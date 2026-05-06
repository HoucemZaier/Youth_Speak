# SkillBridge TN - Documentation Technique Complète

## Vue d'ensemble Technique

Cette documentation couvre tous les aspects techniques de la plateforme SkillBridge TN pour développeurs et mainteneurs.

---

## Architecture Logicielle

### Diagramme de Dépendances

```
index.html (Entry Point)
    ↓
main.jsx (React Root)
    ↓
App.jsx (Main Component)
    ├── App.css (Base Styles)
    ├── App-advanced.css (Enhanced Styles)
    └── Home.jsx (Multi-tab Interface)
            ├── Header.jsx
            ├── SkillForm.jsx (Talents)
            ├── NeedForm.jsx (Needs)
            ├── MatchResults.jsx (Matching)
            ├── CompanyForm.jsx (5-section Enterprise)
            ├── ProjectDescription.jsx (About)
            ├── Preview60s.jsx (Video Feature)
            ├── SpeedMatch.jsx (Fast Matching)
            └── ContractEscrow.jsx (Contract Management)
```

### Flux de Données

```
User Input (Form)
    ↓
Component State (useState)
    ↓
Event Handler
    ↓
localStorage.setItem()
    ↓
Persistent Storage
    ↓
Re-render (useState trigger)
```

---

## Configuration Vite

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    hmr: true
  },
  build: {
    outDir: 'dist',
    minify: 'terser'
  }
})
```

### PostCSS Config (postcss.config.js)

```javascript
export default {
  plugins: {
    autoprefixer: {}
    // Note: Tailwind removed due to v4 incompatibility
  }
}
```

---

## Composants Détaillés

### 1. Home.jsx - Hub Central

**Responsabilités:**
- Gestion des 6 onglets
- Rendu conditionnel des sections
- Statistiques en footer

**State:**
```javascript
const [activeTab, setActiveTab] = useState('skills')

const tabs = [
  { id: 'about', label: 'À Propos', ... },
  { id: 'skills', label: 'Talents', ... },
  { id: 'companies', label: 'Entreprises', ... },
  { id: 'needs', label: 'Besoins', ... },
  { id: 'matches', label: 'Matchings', ... },
  { id: 'features', label: 'Fonctionnalités', ... }
]
```

### 2. CompanyForm.jsx - 5 Sections

**Section 1: Informations Entreprise**
```javascript
- companyName: string (required)
- industry: select
- size: select
- location: select
```

**Section 2: Personne de Contact**
```javascript
- contactName: string (required)
- email: string (required, email validation)
- phone: string (optional)
```

**Section 3: Description Projet**
```javascript
- projectDescription: textarea (required, min 50 chars)
```

**Section 4: Compétences Requises**
```javascript
- selectedSkills: array (toggle buttons)
- 8 options: Web Dev, Design, Marketing, PM, Community, Data, SEO, Branding
```

**Section 5: Budget & Timeline**
```javascript
- budget: number (TND range)
- timeline: select (ASAP, 1-2 weeks, 1 month, 2-3 months, long-term)
```

**Validation:**
```javascript
- Required: companyName, contactName, email, projectDescription
- Email regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
- Min length projectDescription: 50 chars
```

**localStorage:**
```javascript
Key: 'company_data'
Type: Array<{
  id: uuid,
  companyName: string,
  industry: string,
  size: string,
  location: string,
  contactName: string,
  email: string,
  phone: string,
  projectDescription: string,
  selectedSkills: array,
  budget: string,
  timeline: string,
  createdAt: timestamp
}>
```

### 3. SkillForm.jsx - Talent Registration

**Fields:**
```javascript
- skillTitle: string (required)
- talentName: string (required)
- description: textarea (required)
- selectedSkills: array (8 options)
- location: select
- whatsapp: string (format validation)
```

**Skills Available:**
- React
- Node.js
- Design
- Marketing
- Vente
- Comptabilité
- SEO
- Développement Web

**localStorage:**
```javascript
Key: 'skills'
Type: Array<{
  id: uuid,
  skillTitle: string,
  talentName: string,
  description: string,
  selectedSkills: array,
  location: string,
  whatsapp: string,
  createdAt: timestamp
}>
```

### 4. SpeedMatch.jsx - Fast Matching Events

**Features:**
- Create event with title, date, time
- Auto-generates 3 micro-interview slots
- Copy event details button
- Delete event button
- Real-time event list display

**Data Structure:**
```javascript
Key: 'speedmatch_events'
Type: Array<{
  id: uuid,
  title: string,
  date: string (YYYY-MM-DD),
  time: string (HH:mm),
  slots: array<{
    slotNumber: 1-3,
    duration: '8-10 min',
    status: 'available'
  }>,
  createdAt: timestamp
}>
```

### 5. Preview60s.jsx - Video Upload

**Features:**
- File input for video selection
- Title text input
- Video preview with HTML5 player
- Save & Reset buttons
- Max 60s recommended

**Data Structure:**
```javascript
Key: 'preview60'
Type: Array<{
  id: uuid,
  title: string,
  videoFile: Blob,
  videoURL: string (via createObjectURL),
  createdAt: timestamp
}>
```

### 6. ContractEscrow.jsx - Contract Management

**Features:**
- Client/company name input
- Amount (TND) input
- Contract template textarea (pre-filled)
- Create & block funds button
- Status tracking ('funds_locked')
- Reset button

**Data Structure:**
```javascript
Key: 'contracts_sim'
Type: Array<{
  id: uuid,
  clientName: string,
  amount: number,
  template: string,
  status: 'funds_locked',
  createdAt: timestamp
}>
```

### 7. ProjectDescription.jsx - About Section

**Sections:**
1. Hero (Title + Badges)
2. La Problématique (4 issues)
3. Notre Solution (3 columns)
4. Fonctionnalités Clés (6 features)
5. Impact ODD (3 columns)
6. Utilisateurs Cibles (2 columns)
7. Modèle Économique (3 columns)
8. Roadmap (4 quarters)
9. Call-to-Action buttons

---

## Système de Styles CSS

### Variable Définition (index.css)

```css
:root {
  /* Colors */
  --primary: #3b82f6;
  --secondary: #10b981;
  --accent: #f59e0b;
  
  /* Fonts */
  --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
  
  /* Transitions */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animations Clés

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Classes Utilitaires

```css
.btn-primary { gradient + hover effects }
.btn-secondary { gradient + hover effects }
.btn-outline { border + transparency }
.card { elevation + shadow on hover }
.badge { inline display + variants }
.grid-2 { 2-column responsive grid }
.grid-3 { 3-column responsive grid }
```

---

## Responsive Breakpoints

```css
Desktop: 1200px+
Tablet: 768px - 1199px
Mobile: 320px - 767px

Media Query Implementation:
- Grid collapse to 1 column on mobile
- Font sizes adjust
- Padding/margins reduce
- Buttons resize
```

---

## localStorage Management

### Utility Functions Pattern

```javascript
// Save to localStorage
const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

// Load from localStorage
const loadData = (key, defaultValue = []) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : defaultValue
}

// Clear specific key
const clearData = (key) => {
  localStorage.removeItem(key)
}
```

### Data Keys Reference

| Key | Type | Purpose |
|-----|------|---------|
| `skills` | Array | Talent profiles |
| `needs` | Array | Resource needs |
| `company_data` | Array | Company profiles |
| `preview60` | Array | Video uploads |
| `speedmatch_events` | Array | Matching events |
| `contracts_sim` | Array | Contracts escrow |

---

## Testing Checklist

### Unit Tests (Manual)
- [ ] Form validation (required fields)
- [ ] Email regex validation
- [ ] localStorage persistence
- [ ] Array manipulation (add/remove items)
- [ ] Tab switching
- [ ] Skill toggle (add/remove)

### Integration Tests
- [ ] Full form submission workflow
- [ ] Data retrieval from localStorage
- [ ] Multi-tab navigation
- [ ] Component communication via props

### UI/UX Tests
- [ ] Responsive layout (mobile/tablet/desktop)
- [ ] CSS animations smooth
- [ ] Button click feedback
- [ ] Form input focus states
- [ ] Error message display

### Browser Compatibility
- [x] Chrome/Edge (Chromium)
- [x] Firefox
- [x] Safari
- [x] Mobile browsers

---

## Optimisations Futures

### Performance
```javascript
- Code splitting (lazy loading components)
- Image optimization (WebP format)
- CSS minification
- Bundle analysis
- Service Worker for offline
```

### Scalability
```javascript
- Move to Backend API (Node.js/Express)
- Database (MongoDB/PostgreSQL)
- Caching layer (Redis)
- CDN distribution
- Load balancing
```

### Security
```javascript
- Input sanitization
- CORS headers
- HTTPS enforcement
- JWT authentication
- Rate limiting
- XSS prevention
```

---

## Troubleshooting

### Issue: Vite Hot Reload Not Working
**Solution:**
```bash
1. Check firewall/ports
2. Restart dev server: npm run dev
3. Clear browser cache
4. Check browser console for errors
```

### Issue: localStorage Data Not Persisting
**Solution:**
```javascript
1. Check browser privacy settings
2. Ensure localStorage isn't disabled
3. Verify data size < 5MB limit
4. Check for localStorage quota errors
```

### Issue: CSS Styles Not Applying
**Solution:**
```bash
1. Check CSS file imports in components
2. Verify class names match
3. Check CSS specificity conflicts
4. Inspect browser DevTools
5. Clear browser cache & hard refresh
```

### Issue: Form Validation Not Working
**Solution:**
```javascript
1. Check regex patterns
2. Verify state updates
3. Check event handlers
4. Inspect form submit preventDefault()
5. Verify required field checks
```

---

## Références & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web Accessibility](https://www.w3.org/WAI/)
- [UN Sustainable Development Goals](https://sustainabledevelopment.un.org/)

---

## Changelog

### Version 1.0.0 (Initial Release)
- [x] 6-tab interface implemented
- [x] CompanyForm with 5 sections
- [x] SkillForm with validation
- [x] Speed Match feature
- [x] Preview 60s video upload
- [x] Escrow contract templates
- [x] Professional CSS design
- [x] localStorage persistence
- [x] Responsive mobile design

---

**Documentation dernière mise à jour**: Mai 2026  
**Statut**: Production Ready (MVP v1.0)
