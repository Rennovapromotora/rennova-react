export const WA_NUMBER = '556540423199'

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

export function waLink(message = '') {
  const base = `https://wa.me/${WA_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
