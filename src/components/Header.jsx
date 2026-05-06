import './Header.css'

export default function Header() {
  return (
    <header className="site-header relative overflow-hidden border-b border-white/10 animate-fadeIn">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.24),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_34%),linear-gradient(135deg,_#09111d_0%,_#11213a_50%,_#183255_100%)]"></div>
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/[0.03]"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/14 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.6s' }}></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="hero-surface flex flex-col gap-6 md:gap-8 rounded-[2rem] border border-white/25 bg-white/90 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm animate-slideDown">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.55)]"></span>
            <span>Plateforme de matching talents & entreprises</span>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight">
              SkillBridge TN
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              Une interface moderne, claire et professionnelle pour connecter les talents aux opportunités et accélérer les recrutements.
            </p>
          </div>

          {/* Features Grid */}
          <div className="hero-features">
            <FeatureCard
              icon="⭐"
              title="Talents"
              description="Profil, vidéo, compétences"
            />
            <FeatureCard
              icon="🏢"
              title="Entreprises"
              description="Besoins, budget, timeline"
            />
            <FeatureCard
              icon="🔗"
              title="Matching"
              description="Speed match, escrow, suivi"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <span className="feature-icon" aria-hidden="true">{icon}</span>
      <p className="feature-title">{title}</p>
      <p className="feature-desc">{description}</p>
    </div>
  )
}
