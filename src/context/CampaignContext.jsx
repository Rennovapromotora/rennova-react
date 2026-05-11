import { createContext, useContext } from 'react'
import { useCampaign } from '../hooks/useCampaign'
import { waLinkForCampaign, WA_MESSAGES, waLink } from '../config/whatsapp'

const CampaignContext = createContext(null)

export function CampaignProvider({ children }) {
  const campaign = useCampaign()

  // Retorna o link de campanha se houver campanha ativa, senão usa fallbackMessage.
  // Se fallbackMessage for null e não houver campanha, retorna null (componente usa seu próprio href).
  function getCampaignWaLink(fallbackMessage = WA_MESSAGES.simularAgora) {
    if (!campaign) {
      return fallbackMessage ? waLink(fallbackMessage) : null
    }
    return waLinkForCampaign(campaign, fallbackMessage)
  }

  return (
    <CampaignContext.Provider value={{ campaign, getCampaignWaLink }}>
      {children}
    </CampaignContext.Provider>
  )
}

export function useCampaignContext() {
  return useContext(CampaignContext)
}
