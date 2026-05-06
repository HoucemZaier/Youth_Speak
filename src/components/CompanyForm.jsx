import { useState, useEffect } from 'react'
import './CompanyForm.css'

export default function CompanyForm({ onAddCompany }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: 'IT',
    companySize: 'SME',
    location: 'Tunis',
    description: '',
    requirements: [],
    budget: '',
    timeline: '',
  })

  const industries = ['IT', 'Design', 'Marketing', 'E-commerce', 'Finance', 'Santé', 'Education', 'Autre']
  const companySizes = ['Startup', 'PME', 'ETI', 'Grande Entreprise']
  const locations = ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Gabès', 'Gafsa', 'Tozeur', 'Kasserine', 'Otra']

  const requirementOptions = ['Développement Web', 'Design UX/UI', 'Marketing Digital', 'Gestion de Projet', 'Community Manager', 'Data Analysis', 'SEO/SEM', 'Branding']

  useEffect(() => {
    const saved = localStorage.getItem('company_data')
    if (saved) setFormData(JSON.parse(saved))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleRequirement = (req) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter(r => r !== req)
        : [...prev.requirements, req]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.companyName || !formData.email) {
      alert('Veuillez remplir les champs obligatoires')
      return
    }
    localStorage.setItem('company_data', JSON.stringify(formData))
    if (onAddCompany) onAddCompany(formData)
    alert('Profil entreprise enregistré avec succès !')
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      industry: 'IT',
      companySize: 'SME',
      location: 'Tunis',
      description: '',
      requirements: [],
      budget: '',
      timeline: '',
    })
  }

  return (
    <div className="company-form">
      <div className="company-form-card">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Espace Entreprises</h2>
          <p className="text-gray-600">Décrivez vos besoins et trouvez les talents parfaits pour vos projets</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Informations Entreprise */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-semibold">1</span>
              Informations Entreprise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom de l'entreprise *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Ex: TechTunisie SARL"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Secteur d'activité</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                >
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Taille de l'entreprise</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                >
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Localisation</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Personne de Contact */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-semibold">2</span>
              Personne de Contact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom et Prénom *</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Ex: Ahmed Ben Ali"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@company.tn"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+216 XX XXX XXX"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Description du Projet */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-semibold">3</span>
              Description du Projet
            </h3>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Détail du projet et objectives *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez votre projet en détail: contexte, objectifs, périmètre, livrables attendus..."
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                required
              />
              <p className="text-sm text-gray-500 mt-2">Minimum 50 caractères recommandé pour une meilleure correspondance</p>
            </div>
          </div>

          {/* Section 4: Compétences Requises */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-semibold">4</span>
              Compétences Requises
            </h3>

            <div className="company-requirements">
              {requirementOptions.map(req => (
                <button
                  key={req}
                  type="button"
                  onClick={() => toggleRequirement(req)}
                  className={`requirement-chip ${formData.requirements.includes(req) ? 'is-selected' : ''}`}
                  aria-pressed={formData.requirements.includes(req)}
                >
                  {req}
                </button>
              ))}
            </div>
          </div>

          {/* Section 5: Budget & Timeline */}
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 font-semibold">5</span>
              Budget & Timeline
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget estimé (TND)</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Ex: 2000 - 5000"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-8 focus:outline-none focus:border-blue-500 transition"
                >
                  <option value="">Sélectionner...</option>
                  <option value="ASAP">ASAP - moins d\x27une semaine</option>
                  <option value="1-2 weeks">1-2 semaines</option>
                  <option value="1-month">1 mois</option>
                  <option value="2-3 months">2-3 mois</option>
                  <option value="long-term">Long terme</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="border-t pt-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 rounded-8 hover:from-blue-600 hover:to-blue-700 transition transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Enregistrer mon profil entreprise
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
