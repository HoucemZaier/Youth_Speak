import { useState, useEffect } from 'react'
import './FeatureTools.css'

export default function Preview60s() {
  const [videoFile, setVideoFile] = useState(null)
  const [videoURL, setVideoURL] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('preview60')
    if (saved) {
      const data = JSON.parse(saved)
      setTitle(data.title || '')
      setVideoURL(data.url || '')
    }
  }, [])

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return
    setVideoFile(f)
    const url = URL.createObjectURL(f)
    setVideoURL(url)
  }

  const handleSave = () => {
    const data = { title, url: videoURL, savedAt: Date.now() }
    localStorage.setItem('preview60', JSON.stringify(data))
    alert('Preview enregistrée localement (simulé).')
  }

  return (
    <div className="feature-tool">
      <h3 className="font-semibold text-lg mb-2">Preview 60s</h3>
      <p className="text-sm text-gray-500 mb-3">Téléversez une courte vidéo (timelapse + voix) de 60s max pour montrer un projet clé.</p>

      <input type="file" accept="video/*" onChange={handleFile} className="mb-3" />
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre du projet" className="w-full border rounded px-3 py-2 mb-3" />

      {videoURL && (
        <div className="mb-3">
          <video src={videoURL} controls className="w-full rounded" />
        </div>
      )}

      <div className="feature-actions">
        <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded">Enregistrer</button>
        <button onClick={() => { setVideoFile(null); setVideoURL(''); setTitle('') }} className="px-3 py-2 border rounded">Réinitialiser</button>
      </div>
    </div>
  )
}
