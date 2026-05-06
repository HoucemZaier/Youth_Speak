import './ProjectDescription.css'

const IconBox = ({ icon, label }) => (
  <div className="icon-badge">
    <span className="icon-large">{icon}</span>
    <span className="badge-text">{label}</span>
  </div>
)

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
)

const ProblemItem = ({ icon, title, description }) => (
  <div className="problem-item">
    <div className="problem-icon">{icon}</div>
    <div>
      <h4 className="problem-title">{title}</h4>
      <p className="problem-description">{description}</p>
    </div>
  </div>
)

const SolutionTarget = ({ icon, title, description }) => (
  <div className="solution-target">
    <div className="target-icon">{icon}</div>
    <h3 className="target-title">{title}</h3>
    <p className="target-description">{description}</p>
  </div>
)

const ImpactCard = ({ odd, title, description }) => (
  <div className="impact-card">
    <div className="impact-badge">{odd}</div>
    <h3 className="impact-title">{title}</h3>
    <p className="impact-description">{description}</p>
  </div>
)

const TimelineStep = ({ quarter, icon, title, description }) => (
  <div className="timeline-step">
    <div className="timeline-marker">{icon}</div>
    <div className="timeline-badge">{quarter}</div>
    <div className="timeline-content">
      <h4 className="timeline-title">{title}</h4>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
)

export default function ProjectDescription() {
  return (
    <div className="project-description">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-badge">🇹🇳 Innovation Tunisienne</div>
          <h1 className="hero-title">SkillBridge TN</h1>
          <p className="hero-subtitle">
            Connectez les talents aux opportunités
          </p>
          <p className="hero-description">
            Plateforme intelligente de matching talents-entreprises en Tunisie
          </p>
          <div className="hero-tags">
            <IconBox icon="🌍" label="Tunisie" />
            <IconBox icon="🎯" label="ODD 8,9,17" />
            <IconBox icon="🚀" label="Hackathon 2026" />
          </div>
        </div>
      </section>

      {/* Problématique Section */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-icon-large">❌</div>
          <div>
            <h2 className="section-main-title">La Problématique</h2>
            <p className="section-subtitle">En Tunisie, le marché du travail fait face à des défis majeurs</p>
          </div>
        </div>

        <div className="intro-text">
          <p>
            Les PME et startups tunisiennes luttent pour trouver rapidement des talents locaux qualifiés. 
            Le processus de recrutement reste long, coûteux et inefficace.
          </p>
        </div>

        <div className="problems-grid">
          <ProblemItem
            icon="🔴"
            title="Accès limité aux talents"
            description="Pas de plateforme centralisée pour trouver des profils qualifiés (design, dev, marketing)"
          />
          <ProblemItem
            icon="🔴"
            title="Processus informel"
            description="Recrutement via réseaux personnels, annonces dispersées, temps et coûts élevés"
          />
          <ProblemItem
            icon="🔴"
            title="Jeunes talents sous-exploités"
            description="Faible visibilité des opportunités pour diplômés et freelances"
          />
          <ProblemItem
            icon="🔴"
            title="Mismatch compétences/besoins"
            description="Difficulté à exprimer précisément les besoins et trouver les profils adaptés"
          />
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-container solution-section">
        <div className="section-header">
          <div className="section-icon-large">✅</div>
          <div>
            <h2 className="section-main-title">Notre Solution</h2>
            <p className="section-subtitle">Une plateforme SaaS intelligente pour le matching</p>
          </div>
        </div>

        <div className="intro-text">
          <p>
            <strong>SkillBridge TN</strong> digitalise le recrutement et met en relation <strong>talents</strong> 
            et <strong>entreprises tunisiennes</strong> via un système de matching automatisé et transparent.
          </p>
        </div>

        <div className="solution-targets">
          <SolutionTarget
            icon="⭐"
            title="Pour les Talents"
            description="Vitrine professionnelle, portfolio vidéo, accès aux opportunités locales, transparent et sécurisé"
          />
          <SolutionTarget
            icon="🏢"
            title="Pour les Entreprises"
            description="Sourcing rapide et qualifié, matching intelligent, suivi candidats, contrats & paiements sécurisés"
          />
          <SolutionTarget
            icon="🌐"
            title="Pour l'Écosystème"
            description="Partenariats avec incubateurs, écoles, associations, transparence, traçabilité et impact ODD"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-icon-large">✨</div>
          <div>
            <h2 className="section-main-title">Fonctionnalités Clés</h2>
            <p className="section-subtitle">Des outils puissants pour réussir</p>
          </div>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon="🎥"
            title="Preview 60s"
            description="Vidéos courtes (timelapse+voix) pour montrer vos projets clés et compétences réelles"
          />
          <FeatureCard
            icon="⚡"
            title="Speed Match"
            description="Créneaux de 30min avec 3 micro-interviews pour évaluer rapidement les candidats"
          />
          <FeatureCard
            icon="🔐"
            title="Escrow & Contrats"
            description="Paiements sécurisés jusqu'à livraison, templates de contrats, zéro papier"
          />
          <FeatureCard
            icon="🧠"
            title="Matching Intelligent"
            description="Algorithme avancé proposant des candidats basé sur compétences et disponibilités"
          />
          <FeatureCard
            icon="🏅"
            title="Badges Locaux"
            description="Certification par incubateurs & associations partenaires pour crédibilité"
          />
          <FeatureCard
            icon="📊"
            title="Dashboards Avancés"
            description="Suivi candidats, historique missions, KPIs et analyses pour optimiser"
          />
        </div>
      </section>

      {/* Impact ODD */}
      <section className="section-container impact-section">
        <div className="section-header">
          <div className="section-icon-large">🎯</div>
          <div>
            <h2 className="section-main-title">Impact ODD</h2>
            <p className="section-subtitle">Alignés avec les Objectifs de Développement Durable</p>
          </div>
        </div>

        <div className="impact-grid">
          <ImpactCard
            odd="ODD 8"
            title="Travail Décent"
            description="Créer accès à emploi et missions rémunérées pour jeunes et freelances. Augmenter la formalisation du marché."
          />
          <ImpactCard
            odd="ODD 9"
            title="Industrie & Innovation"
            description="Digitaliser le recrutement informel. Soutenir la compétitivité des PME et startups tunisiennes."
          />
          <ImpactCard
            odd="ODD 17"
            title="Partenariats"
            description="Créer un réseau entre talents, entreprises, incubateurs, écoles, associations et gouvernement."
          />
        </div>
      </section>

      {/* Target Users */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-icon-large">👥</div>
          <div>
            <h2 className="section-main-title">Utilisateurs Cibles</h2>
            <p className="section-subtitle">Qui en profite le plus</p>
          </div>
        </div>

        <div className="users-grid">
          <div className="user-card">
            <div className="user-icon">🏢</div>
            <h3 className="user-title">PME & Startups</h3>
            <ul className="user-list">
              <li>✓ Structures avec besoins ponctuels</li>
              <li>✓ Budget RH limité</li>
              <li>✓ Cherchent talents rapides</li>
              <li>✓ Secteurs: IT, Design, Marketing</li>
            </ul>
          </div>

          <div className="user-card">
            <div className="user-icon">⭐</div>
            <h3 className="user-title">Talents & Freelances</h3>
            <ul className="user-list">
              <li>✓ Jeunes diplômés</li>
              <li>✓ Freelances cherchant missions</li>
              <li>✓ Professionnels en transition</li>
              <li>✓ Tous niveaux bienvenue</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Economic Model */}
      <section className="section-container">
        <div className="section-header">
          <div className="section-icon-large">💰</div>
          <div>
            <h2 className="section-main-title">Modèle Économique</h2>
            <p className="section-subtitle">Durable et transparent</p>
          </div>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-icon">🏢</div>
            <h3 className="pricing-title">Abonnement Entreprises</h3>
            <p className="pricing-description">Accès aux profils, matching, Speed Match, contrats et escrow</p>
            <div className="pricing-amount">49-299 DT/mois</div>
          </div>

          <div className="pricing-card">
            <div className="pricing-icon">💸</div>
            <h3 className="pricing-title">Commission Missions</h3>
            <p className="pricing-description">% sur chaque mission finalisée via plateforme</p>
            <div className="pricing-amount">3-8%</div>
          </div>

          <div className="pricing-card">
            <div className="pricing-icon">⭐</div>
            <h3 className="pricing-title">Talents (Gratuit)</h3>
            <p className="pricing-description">Inscription gratuite, accès aux offres et missions</p>
            <div className="pricing-amount">0 DT</div>
          </div>
        </div>
      </section>

      {/* Timeline/Roadmap */}
      <section className="section-container timeline-section">
        <div className="section-header">
          <div className="section-icon-large">🗺️</div>
          <div>
            <h2 className="section-main-title">Roadmap (12 mois)</h2>
            <p className="section-subtitle">Notre plan de déploiement</p>
          </div>
        </div>

        <div className="timeline">
          <TimelineStep
            quarter="Q2 2026"
            icon="🚀"
            title="MVP & Pilot"
            description="Core features, 100 talents, 20 entreprises, Tunis"
          />
          <TimelineStep
            quarter="Q3 2026"
            icon="📈"
            title="Scale & Partenariats"
            description="Intégrations API, 5 villes, partenaires incubateurs"
          />
          <TimelineStep
            quarter="Q4 2026"
            icon="🎯"
            title="Consolidation & Impact"
            description="1000+ utilisateurs, 200+ missions, études d'impact ODD"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Prêt à transformer le marché du travail ?</h2>
          <p className="cta-subtitle">
            Rejoignez SkillBridge et connectez-vous à des opportunités sans limites
          </p>
          <div className="cta-buttons">
            <button className="cta-button cta-primary">
              Je suis un talent 🌟
            </button>
            <button className="cta-button cta-secondary">
              Je suis une entreprise 🏢
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
