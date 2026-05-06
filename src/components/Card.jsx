import './Card.css'

export default function Card({ item, type, score }) {
  // Score badge color
  const getScoreColor = (s) => {
    if (s >= 80) return '#22c55e'
    if (s >= 50) return '#3b82f6'
    return '#f59e0b'
  }

  // Styles
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  }

  const scoreBadgeStyle = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: score ? getScoreColor(score) : '#6b7280',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: 700,
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  }

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: 500,
  }

  const budgetBadgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 10px',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: 500,
  }

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 10px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 500,
    border: '1px solid #e5e7eb',
  }

  const infoRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#6b7280',
  }

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    backgroundColor: '#22c55e',
    color: 'white',
    fontWeight: 600,
    padding: '12px 18px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(34, 197, 94, 0.25)',
  }

  const smallIcon = { width: '16px', height: '16px', flexShrink: 0 }
  const whatsappIcon = { 
    width: '22px', 
    height: '22px',
    transition: 'transform 0.3s ease'
  }

  return (
    <div style={cardStyle}>
      <div style={{ padding: '20px', position: 'relative' }}>
        
        {/* Score Badge */}
        {score && (
          <div style={scoreBadgeStyle}>
            {score}%
          </div>
        )}

        {/* Title */}
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '8px', marginTop: 0, paddingRight: score ? '60px' : '0' }}>
          {item.title}
        </h3>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span style={badgeStyle}>
            {type === 'skill' ? '💼 Compétence' : '📋 Besoin'}
          </span>
          {item.budget && (
            <span style={budgetBadgeStyle}>
              💰 {item.budget}
            </span>
          )}
        </div>

        {/* Description */}
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px', lineHeight: 1.5, marginTop: 0 }}>
          {item.description}
        </p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px', marginTop: 0, fontWeight: 500 }}>
              Compétences:
            </p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {item.tags.map((tag, i) => (
                <span key={i} style={tagStyle}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #f3f4f6' }}>
          <div style={infoRowStyle}>
            <svg style={smallIcon} viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>{item.region}</span>
          </div>
          <div style={infoRowStyle}>
            <svg style={smallIcon} viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span style={{ fontWeight: 600, color: '#111827' }}>{item.author}</span>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${item.contact.replace(/\s+/g, '')}?text=Bonjour ${item.author}, je suis intéressé par votre ${type === 'skill' ? 'compétence' : 'besoin'}: ${item.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          style={buttonStyle}
        >
          Contacter via WhatsApp
        </a>
      </div>
    </div>
  )
}
