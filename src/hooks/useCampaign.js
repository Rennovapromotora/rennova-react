import { useMemo } from 'react'
import { CAMPAIGN_MESSAGES } from '../config/whatsapp'

const VALID_CAMPAIGNS = Object.keys(CAMPAIGN_MESSAGES)

// Lê a campanha do pathname (ex: /TK1 → "TK1") ou do query param ?campaign=TK1
function detectCampaign() {
  const pathname = window.location.pathname
  // Remove a barra inicial e converte para maiúsculo
  const segment = pathname.replace(/^\//, '').split('/')[0].toUpperCase()

  if (VALID_CAMPAIGNS.includes(segment)) return segment

  // Fallback: query param ?campaign=TK1
  const params = new URLSearchParams(window.location.search)
  const queryParam = params.get('campaign')?.toUpperCase()
  if (queryParam && VALID_CAMPAIGNS.includes(queryParam)) return queryParam

  return null
}

export function useCampaign() {
  const campaign = useMemo(() => detectCampaign(), [])
  return campaign
}
