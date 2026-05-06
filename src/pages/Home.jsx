import { useState, useEffect } from 'react'
import './Home.css'
import Header from '../components/Header'
import SkillForm from '../components/SkillForm'
import NeedForm from '../components/NeedForm'
import MatchResults from '../components/MatchResults'
import { matchSkillsToNeeds } from '../logic/match'
import skillsData from '../data/skills.json'
import needsData from '../data/needs.json'
import Preview60s from '../components/Preview60s'
import SpeedMatch from '../components/SpeedMatch'
import ContractEscrow from '../components/ContractEscrow'
import CompanyForm from '../components/CompanyForm'
import ProjectDescription from '../components/ProjectDescription'

const StatItem = ({ icon, label, value }) => (
  <div className="stat-item">
    <span className="stat-label">{icon} {label}</span>
    <span className="stat-value">{value}</span>
  </div>
)

export default function Home() {
  // Initialize state from localStorage or use default data
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('skills')
    return saved ? JSON.parse(saved) : skillsData
  })
  const [needs, setNeeds] = useState(() => {
    const saved = localStorage.getItem('needs')
    return saved ? JSON.parse(saved) : needsData
  })
  const [matches, setMatches] = useState([])
  const [activeTab, setActiveTab] = useState('skills')

  // Save skills to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills))
  }, [skills])

  // Save needs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('needs', JSON.stringify(needs))
  }, [needs])

  useEffect(() => {
    const result = matchSkillsToNeeds(skills, needs)
    setMatches(result)
  }, [skills, needs])

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill])
  }

  const handleAddNeed = (newNeed) => {
    setNeeds([...needs, newNeed])
  }

  const tabs = [
    { id: 'about', label: '📋 À Propos' },
    { id: 'skills', label: '⭐ Talents' },
    { id: 'companies', label: '🏢 Entreprises' },
    { id: 'needs', label: '🎯 Besoins' },
    { id: 'matches', label: '🔗 Matchings' },
    { id: 'features', label: '✨ Fonctionnalités' },
  ]

  return (
    <div className="page-shell">
      {/* Header */}
      <Header />

      {/* Navigation Tabs */}
      <div className="page-container page-tabs">
        <div className="tabs animate-slideDown">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="page-container page-content">
        <div className="app-layout">
          {/* Content Area */}
          <main>
            {activeTab === 'about' && (
              <section className="card animate-fadeIn">
                <ProjectDescription />
              </section>
            )}

            {activeTab === 'skills' && (
              <section className="card animate-fadeIn">
                <SkillForm onAddSkill={handleAddSkill} />
              </section>
            )}

            {activeTab === 'companies' && (
              <section className="card animate-fadeIn">
                <CompanyForm />
              </section>
            )}

            {activeTab === 'needs' && (
              <section className="card animate-fadeIn">
                <NeedForm onAddNeed={handleAddNeed} />
              </section>
            )}

            {activeTab === 'matches' && (
              <section className="card animate-fadeIn">
                <MatchResults matches={matches} needs={needs} skills={skills} />
              </section>
            )}

            {activeTab === 'features' && (
              <section className="card animate-fadeIn">
                <h2>✨ Fonctionnalités Rapides</h2>
                <div className="grid grid-3" style={{ marginTop: 'var(--spacing-xl)' }}>
                  <Preview60s />
                  <SpeedMatch />
                  <ContractEscrow />
                </div>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside>
            {/* Stats Card */}
            <div className="card animate-fadeIn">
              <h3>📊 Statistiques</h3>
              <div className="flex flex-col gap-md mt-lg">
                <StatItem icon="⭐" label="Talents" value={skills.length} />
                <StatItem icon="🎯" label="Besoins" value={needs.length} />
                <StatItem icon="🔗" label="Matchings" value={matches.length} />
              </div>
            </div>

            {/* Actions Card */}
            <div className="card animate-fadeIn">
              <h3>⚡ Actions Rapides</h3>
              <div className="flex flex-col gap-md mt-lg">
                <button className="btn-primary btn-full" onClick={() => setActiveTab('skills')}>
                  ⭐ Poster Talent
                </button>
                <button className="btn-secondary btn-full" onClick={() => setActiveTab('needs')}>
                  🎯 Poster Besoin
                </button>
                <button className="btn-outline btn-full" onClick={() => setActiveTab('matches')}>
                  🔗 Voir Matchings
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div className="card animate-fadeIn">
              <p style={{ fontSize: 'var(--font-xs)', margin: '0' }}>
                <strong>💡 Conseil:</strong> Utilisez les onglets pour naviguer facilement entre toutes les sections.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="animate-slideUp">
        <p><strong>© 2026 SkillBridge TN</strong> • Connecter les talents aux opportunités</p>
        <p style={{ marginTop: 'var(--spacing-sm)', opacity: '0.7' }}>Made with ❤️ for Tunisia</p>
      </footer>
    </div>
  )
}
