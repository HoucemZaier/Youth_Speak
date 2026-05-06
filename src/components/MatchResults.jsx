import Card from './Card'
import './MatchResults.css'

// Small icon component with fixed size
const Icon = ({ children }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    {children}
  </svg>
)

export default function MatchResults({ matches, needs, skills }) {
  const pageStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px',
  }

  const headerStyle = {
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e5e7eb',
  }

  const projectCardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginBottom: '40px',
  }

  const projectHeaderStyle = {
    background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
    borderBottom: '1px solid #e5e7eb',
    padding: '24px',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
    padding: '24px',
  }

  const infoRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#6b7280',
  }

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    backgroundColor: '#2563eb',
    color: 'white',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: 600,
  }

  const statsBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'white',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  }

  return (
    <div style={pageStyle}>
      
      {/* Page Header */}
      <div style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '24px' }}>🔗</span>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#111827', margin: 0 }}>
            Résultats du Matching
          </h1>
        </div>
        <p style={{ color: '#6b7280', margin: 0 }}>
          Découvrez les talents qui correspondent à vos besoins
        </p>
      </div>

      {matches && matches.length > 0 ? (
        <div>
          {matches.map((match) => (
            <div key={match.id} style={projectCardStyle}>
              
              {/* Project Header */}
              <div style={projectHeaderStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', margin: 0 }}>
                      {match.title}
                    </h2>
                    <span style={badgeStyle}>🎯 Projet Actif</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={infoRowStyle}>
                      <Icon>
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5" />
                      </Icon>
                      <span>{match.author}</span>
                    </div>
                    <div style={infoRowStyle}>
                      <Icon>
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </Icon>
                      <span>{match.region}</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div style={{ marginTop: '16px' }}>
                  <div style={statsBoxStyle}>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: '#2563eb' }}>
                      {match.matches?.length || 0}
                    </span>
                    <span style={{ fontSize: '13px', color: '#6b7280' }}>
                      talent{match.matches?.length > 1 ? 's' : ''}<br/>correspond{match.matches?.length > 1 ? 'ent' : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Talent Cards Grid */}
              <div style={gridStyle}>
                {match.matches && match.matches.length > 0 ? (
                  <>
                    {match.matches.slice(0, 6).map((skill) => (
                      <Card
                        key={skill.id}
                        item={skill}
                        type="skill"
                        score={Math.min(100, Math.round((skill.score / ((match.tags?.length || 1) * 2)) * 100))}
                      />
                    ))}
                  </>
                ) : (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
                    <p style={{ color: '#6b7280', fontSize: '16px' }}>😕 Aucun talent correspondant</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div style={{ textAlign: 'center', padding: '64px 24px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '2px dashed #d1d5db' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤝</div>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
            Aucun matching disponible
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px' }}>
            Commencez par ajouter des compétences et des besoins
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 500, cursor: 'pointer' }}>
              + Ajouter un talent
            </button>
            <button style={{ padding: '10px 20px', backgroundColor: '#059669', color: 'white', borderRadius: '8px', border: 'none', fontWeight: 500, cursor: 'pointer' }}>
              + Ajouter un besoin
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
