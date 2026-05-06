import { useState } from 'react'
import './SkillForm.css'

export default function SkillForm({ onAddSkill }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: [],
    region: 'Tunis',
    author: '',
    contact: ''
  })

  const [currentTag, setCurrentTag] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  const regions = ['Tunis', 'Sfax', 'Sousse', 'Kairouan', 'Gabès', 'Gafsa', 'Tozeur', 'Kasserine']
  const skillTags = ['React', 'Node.js', 'Design', 'Marketing', 'Vente', 'Comptabilité', 'SEO', 'Développement Web']

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const addTag = (tag) => {
    if (!formData.tags.includes(tag)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, tag] }))
    }
  }

  const removeTag = (tag) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.description && formData.author) {
      onAddSkill({ ...formData, id: Date.now() })
      setFormData({ title: '', description: '', tags: [], region: 'Tunis', author: '', contact: '' })
      alert('Compétence ajoutée avec succès!')
    } else {
      alert('Veuillez remplir tous les champs obligatoires')
    }
  }

  return (
    <div className="form-shell skill-form">
      <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-2 flex items-center gap-3">
            <h2 className="text-3xl md:text-4xl font-bold">Poster une Compétence</h2>
          </div>
          <p className="text-gray-600 mb-8 text-sm md:text-base">Partagez vos talents et connectez-vous avec des opportunités</p>
          
          {/* Title & Author Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative group">
              <input
                type="text"
                name="title"
                placeholder="Titre de la compétence"
                value={formData.title}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('title')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur text-gray-800 placeholder-gray-400"
              />
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>

            <div className="relative group">
              <input
                type="text"
                name="author"
                placeholder="Votre nom"
                value={formData.author}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('author')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur text-gray-800 placeholder-gray-400"
              />
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 relative group">
            <textarea
              name="description"
              placeholder="Décrivez votre compétence en détail..."
              value={formData.description}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 md:px-6 py-3 md:py-4 h-24 md:h-28 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur text-gray-800 placeholder-gray-400 resize-none"
            />
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left`}></div>
          </div>

          {/* Tags Section */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-4 text-sm md:text-base">Sélectionnez vos compétences:</label>
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
              {skillTags.map((tag, idx) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => addTag(tag)}
                  className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    formData.tags.includes(tag)
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-200/70 text-gray-700 hover:bg-gray-300/70 border border-gray-300/50'
                  }`}
                  style={{animationDelay: `${idx * 0.05}s`}}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            {/* Selected Tags */}
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 p-4 bg-blue-50/80 rounded-xl border border-blue-200/50">
                {formData.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium animate-slideUp"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200 px-2 py-0.5"
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Region & Contact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative group">
              <select
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur text-gray-800 appearance-none"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>

            <div className="relative group">
              <input
                type="text"
                name="contact"
                placeholder="Numéro WhatsApp (+216 XX XXX XXX)"
                value={formData.contact}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('contact')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur text-gray-800 placeholder-gray-400"
              />
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 md:py-4 px-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform active:scale-95 text-base md:text-lg flex items-center justify-center gap-2 group"
          >
            <span className="text-xl group-hover:scale-125 transition-transform duration-300"></span>
            Poster la Compétence
          </button>
      </form>
    </div>
  )
}
