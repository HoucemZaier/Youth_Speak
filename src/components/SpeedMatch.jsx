import { useState, useEffect } from 'react'
import './FeatureTools.css'

export default function SpeedMatch() {
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState('Session Speed Match')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('speedmatch_events')
    if (saved) setEvents(JSON.parse(saved))
  }, [])

  const createEvent = () => {
    if (!date || !time) { alert('Choisissez date et heure.'); return }
    const ev = { id: Date.now(), title, datetime: `${date} ${time}`, slots: 3 }
    const next = [ev, ...events]
    setEvents(next)
    localStorage.setItem('speedmatch_events', JSON.stringify(next))
  }

  return (
    <div className="feature-tool">
      <h3 className="font-semibold text-lg mb-2">Speed Match (30 min)</h3>
      <p className="text-sm text-gray-500 mb-3">Créez un créneau de Speed Match : 3 micro-interviews de ~8–10min.</p>

      <input value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full border rounded px-3 py-2 mb-2" />
      <div className="flex gap-2 mb-3">
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="border rounded px-3 py-2" />
        <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="border rounded px-3 py-2" />
      </div>

      <div className="feature-actions mb-4">
        <button onClick={createEvent} className="px-4 py-2 bg-emerald-600 text-white rounded">Créer</button>
        <button onClick={() => { setDate(''); setTime('') }} className="px-3 py-2 border rounded">Annuler</button>
      </div>

      <div className="space-y-3">
        {events.length === 0 && <p className="text-sm text-gray-500">Aucun créneau programmé.</p>}
        {events.map(ev => (
          <div key={ev.id} className="p-3 border rounded">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{ev.title}</div>
                <div className="text-xs text-gray-500">{ev.datetime} • {ev.slots} slots</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => { navigator.clipboard?.writeText(ev.datetime); alert('Date copiée'); }} className="px-3 py-1 border rounded text-sm">Copier</button>
                <button onClick={() => { setEvents(events.filter(x=>x.id!==ev.id)); localStorage.setItem('speedmatch_events', JSON.stringify(events.filter(x=>x.id!==ev.id))) }} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Suppr</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
