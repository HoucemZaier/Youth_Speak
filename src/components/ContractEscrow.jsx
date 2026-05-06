import { useState, useEffect } from 'react'
import './FeatureTools.css'

const sampleTemplate = `Contrat de mission (court)

Objet: Prestation de service
Durée: à définir
Livrable: description
Prix: à négocier

Modalités: 50% bloqué en escrow, 50% à la livraison.
`

export default function ContractEscrow() {
  const [template, setTemplate] = useState(sampleTemplate)
  const [contracts, setContracts] = useState([])
  const [client, setClient] = useState('')
  const [amount, setAmount] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('contracts_sim')
    if (saved) setContracts(JSON.parse(saved))
  }, [])

  const createContract = () => {
    if (!client || !amount) { alert('Remplissez client et montant'); return }
    const c = { id: Date.now(), client, amount, status: 'funds_locked', template, createdAt: Date.now() }
    const next = [c, ...contracts]
    setContracts(next)
    localStorage.setItem('contracts_sim', JSON.stringify(next))
    alert('Contrat créé et fonds simulés en escrow (local).')
  }

  return (
    <div className="feature-tool">
      <h3 className="font-semibold text-lg mb-2">Templates & Escrow (simulé)</h3>
      <p className="text-sm text-gray-500 mb-3">Créer un contrat simple et simuler un paiement bloqué jusqu'à livraison.</p>

      <input value={client} onChange={(e)=>setClient(e.target.value)} placeholder="Nom de l'entreprise / client" className="w-full border rounded px-3 py-2 mb-2" />
      <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Montant (TND)" className="w-full border rounded px-3 py-2 mb-2" />

      <textarea value={template} onChange={(e)=>setTemplate(e.target.value)} className="w-full border rounded px-3 py-2 mb-3 h-28" />

      <div className="feature-actions mb-4">
        <button onClick={createContract} className="px-4 py-2 bg-yellow-600 text-white rounded">Créer + bloquer fonds</button>
        <button onClick={() => { setClient(''); setAmount(''); setTemplate(sampleTemplate) }} className="px-3 py-2 border rounded">Reset</button>
      </div>

      <div className="space-y-3">
        {contracts.length === 0 && <p className="text-sm text-gray-500">Aucun contrat</p>}
        {contracts.map(ct => (
          <div key={ct.id} className="p-3 border rounded">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{ct.client} — {ct.amount} TND</div>
                <div className="text-xs text-gray-500">Status: {ct.status}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">{new Date(ct.createdAt).toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
