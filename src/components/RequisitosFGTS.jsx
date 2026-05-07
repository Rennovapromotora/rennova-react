import { useRef } from 'react'
import { waLink, WA_MESSAGES } from '../config/whatsapp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UserCheck,
  Landmark,
  ShieldCheck,
  FileCheck2,
  CalendarCheck,
  BadgeCheck,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const WA_STROKE_1 = 'M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z'
const WA_STROKE_2 = 'M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z'

const requisitos = [
  {
    num: '01',
    Icon: UserCheck,
    title: 'Maior de 18 anos',
    desc: 'Ser maior de 18 anos ou legalmente emancipado.',
  },
  {
    num: '02',
    Icon: Landmark,
    title: 'Conta bancária',
    desc: 'Ter conta-corrente ou poupança ativa em seu nome.',
  },
  {
    num: '03',
    Icon: ShieldCheck,
    title: 'Autorização de acesso',
    desc: 'Autorizar o banco a acessar seus dados e saldo do FGTS.',
  },
  {
    num: '04',
    Icon: FileCheck2,
    title: 'CPF válido',
    desc: 'CPF em situação Regular ou Irregular na Receita Federal.',
  },
  {
    num: '05',
    Icon: CalendarCheck,
    title: 'Saque-Aniversário',
    desc: 'Ter optado pela modalidade de Saque-Aniversário do FGTS.',
  },
  {
    num: '06',
    Icon: BadgeCheck,
    title: 'Simulação aprovada',
    desc: 'Realizar e ter a aprovação da simulação de crédito.',
  },
]

export default function RequisitosFGTS() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.req-header', {
      y: 28, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%' },
    })
    gsap.from('.req-card', {
      y: 40, opacity: 0, duration: 0.55, ease: 'power3.out', stagger: 0.1,
      scrollTrigger: { trigger: ref.current, start: 'top 75%' },
    })
    gsap.from('.req-cta', {
      y: 24, opacity: 0, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: '.req-cta', start: 'top 90%' },
    })
  }, { scope: ref })

  return (
    <section className="req-section section-pad" ref={ref}>
      <div className="container">
        <div className="req-header">
          <div className="section-tag">
            Antecipação FGTS
          </div>
          <h2 className="section-title" style={{ textAlign: 'center', marginTop: 14 }}>
            Como obter a antecipação<br />do seu FGTS?
          </h2>
          <p className="section-desc" style={{ textAlign: 'center' }}>
            Veja os requisitos simples para liberar seu crédito em minutos.
          </p>
        </div>

        <div className="req-cta">
          <a
            href={waLink(WA_MESSAGES.anteciparFGTS)}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Quero antecipar meu FGTS
            <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d={WA_STROKE_1} />
              <path d={WA_STROKE_2} />
            </svg>
          </a>
          <p className="req-cta-note" style={{ margin: '16px 0 0' }}>
            Sem consulta ao SPC/Serasa · Resposta em minutos
          </p>
        </div>

        <div className="req-grid">
          {requisitos.map((r, i) => {
            const Icon = r.Icon
            return (
              <div className="req-card" key={i}>
                <div className="req-card-left">
                  <div className="req-icon-wrap">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span className="req-num">{r.num}</span>
                </div>
                <div className="req-card-body">
                  <div className="req-card-title">{r.title}</div>
                  <div className="req-card-desc">{r.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
