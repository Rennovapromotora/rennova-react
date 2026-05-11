export const WA_NUMBER = import.meta.env.VITE_WA_NUMBER || '556540423199'

// Mensagens padrão (sem campanha)
export const WA_MESSAGES = {
  simulador: (valor) =>
    `Olá! Tenho interesse em simular um crédito no valor de ${valor}. Pode me ajudar?`,
  simularAgora:
    'Olá! Tenho interesse em simular um crédito. Pode me ajudar?',
  simularNavbar:
    'Olá! Vim pelo site e quero simular um empréstimo consignado. Pode me ajudar?',
  anteciparFGTS:
    'Olá! Quero antecipar meu FGTS. Pode me ajudar?',
  simularWhatsApp:
    'Olá! Quero simular um empréstimo pelo WhatsApp. Pode me ajudar?',
  float: '',
}

// Mensagens por campanha (TK1–TK10)
export const CAMPAIGN_MESSAGES = {
  TK1:  '(TK1) Olá gostaria de simular meu crédito trabalhador',
  TK2:  '(TK2) Olá gostaria de simular meu crédito trabalhador',
  TK3:  '(TK3) Olá gostaria de simular meu crédito trabalhador',
  TK4:  '(TK4) Olá gostaria de simular meu crédito trabalhador',
  TK5:  '(TK5) Olá gostaria de simular meu crédito trabalhador',
  TK6:  '(TK6) Olá gostaria de simular meu crédito trabalhador',
  TK7:  '(TK7) Olá gostaria de simular meu crédito trabalhador',
  TK8:  '(TK8) Olá gostaria de simular meu crédito trabalhador',
  TK9:  '(TK9) Olá gostaria de simular meu crédito trabalhador',
  TK10: '(TK10) Olá gostaria de simular meu crédito trabalhador',
}

export function waLink(message = '') {
  const base = `https://wa.me/${WA_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

// Retorna o link com a mensagem da campanha (ou mensagem padrão se não houver campanha)
export function waLinkForCampaign(campaign, fallbackMessage = WA_MESSAGES.simularAgora) {
  const message = CAMPAIGN_MESSAGES[campaign?.toUpperCase()] || fallbackMessage
  return waLink(message)
}

// Mensagem do simulador com valor — inclui prefixo de campanha quando houver
export function simuladorMessage(campaign, valor) {
  const prefix = campaign ? `(${campaign}) ` : ''
  return `${prefix}Olá! Tenho interesse em simular um crédito no valor de ${valor}. Pode me ajudar?`
}
