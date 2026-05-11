import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Percent, Smartphone, BadgeCheck, Users, Check, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const timelineItems = [
  {
    Icon: Percent,
    iconBg: '#e3f0fb',
    iconColor: '#31679b',
    title: 'Menor taxa do mercado',
    highlight: 'A partir de 1,29% a.m.',
    text: 'Consultamos múltiplos bancos simultaneamente e negociamos as melhores condições para o seu perfil.',
    bullets: [
      'Comparação automática entre parceiros',
      'Sem custo adicional de corretagem',
      'Taxa travada durante todo o contrato',
    ],
  },
  {
    Icon: Smartphone,
    iconBg: '#e8f5e9',
    iconColor: '#27ae60',
    title: '100% Digital e sem burocracia',
    highlight: 'Tudo pelo celular',
    text: 'Do pedido à assinatura eletrônica, todo o processo acontece online — sem filas, sem papelada.',
    bullets: [
      'Envio de documentos por foto',
      'Assinatura digital segura',
      'Acompanhamento em tempo real',
    ],
  },
  {
    Icon: BadgeCheck,
    iconBg: '#fff8e1',
    iconColor: '#e09d00',
    title: 'Negativado? Sem problema!',
    highlight: 'Sem consulta ao SPC/SERASA',
    text: 'Neste crédito a garantia é o desconto direto no benefício — o seu histórico não é barreira.',
    bullets: [
      'Aprovação independente de restrição',
      'Sem análise de crédito tradicional',
      'Parcelas dentro do limite legal de margem',
    ],
  },
  {
    Icon: Users,
    iconBg: '#fce4ec',
    iconColor: '#c2185b',
    title: 'Atendimento humanizado',
    highlight: 'Consultor dedicado',
    text: 'Cada cliente tem um consultor especializado que acompanha todo o processo, do início ao depósito.',
    bullets: [
      'Suporte via WhatsApp, chat e telefone',
      'Horário estendido de segunda a sábado',
      'Pós-venda ativo e transparente',
    ],
  },
  {
    Icon: Shield,
    iconBg: '#ede7f6',
    iconColor: '#6200ea',
    title: 'Segurança e conformidade',
    highlight: 'LGPD & Banco Central',
    text: 'Operamos dentro das normas do Banco Central e da LGPD, garantindo total proteção dos seus dados.',
    bullets: [
      'Criptografia ponta a ponta',
      'Parceiros 100% regulamentados',
      'Privacidade garantida por lei',
    ],
  },
  {
    Icon: Check,
    iconBg: '#e8f5e9',
    iconColor: '#27ae60',
    title: 'Liberação rápida',
    highlight: 'Dinheiro em até 24h',
    text: 'Após a aprovação e assinatura do contrato, o valor é depositado direto na sua conta em até 24 horas úteis.',
    bullets: [
      'Sem espera de dias ou semanas',
      'Depósito em qualquer banco',
      'Confirmação por SMS e e-mail',
    ],
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stat card animation
      gsap.from('.benefits-stat-card', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.benefits-stat-card', start: 'top 85%' },
      })

      // Each grid card
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: (i % 2) * 0.1,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section-pad benefits-section" id="beneficios" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Sobre Nós</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginTop: 14 }}>
            Por que escolher<br />a Rennova Promotora?
          </h2>
        </div>                                  

        {/* Stat card */}
        <div className="benefits-stat-card">
          <div className="benefits-big-num">+7</div>
          <p className="benefits-stat-label">anos de mercado</p>
          <p className="benefits-stat-desc">
            Empresa de antecipação de FGTS e crédito há mais de 7 anos no mercado.
            Especialistas em consultoria financeira com atendimento de qualidade, transparência e credibilidade.
          </p>
          <div className="benefits-stat-badges">
            <div className="benefits-stat-badge">
              <div className="bsb-icon" style={{ background: '#e8f5e9' }}>
                <Check size={16} color="#27ae60" strokeWidth={2.5} />
              </div>
              <div>
                <div className="bsb-label">Aprovação rápida</div>
                <div className="bsb-value">Em horas</div>
              </div>
            </div>
            <div className="benefits-stat-badge">
              <div className="bsb-icon" style={{ background: '#e3f0fb' }}>
                <Shield size={16} color="#31679b" strokeWidth={2.5} />
              </div>
              <div>
                <div className="bsb-label">Dados seguros</div>
                <div className="bsb-value">LGPD</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="benefits-grid">
          {timelineItems.map((item, i) => {
            const Icon = item.Icon
            return (
              <div
                className="tl-card"
                key={i}
                ref={(el) => { cardRefs.current[i] = el }}
              >
                <div className="tl-icon-wrap" style={{ background: item.iconBg }}>
                  <Icon size={20} color={item.iconColor} strokeWidth={2} />
                </div>
                {item.highlight && (
                  <div className="tl-card-highlight" style={{ color: item.iconColor }}>{item.highlight}</div>
                )}
                <div className="tl-card-title">{item.title}</div>
                <div className="tl-card-text">{item.text}</div>
                {item.bullets && (
                  <ul className="tl-card-bullets">
                    {item.bullets.map((b, j) => (
                      <li key={j}>
                        <span className="tl-bullet-dot" style={{ background: item.iconColor }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
