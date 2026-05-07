import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, FileText, PenLine, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    Icon: Search,
    num: '01',
    title: 'Simule Online',
    desc: 'Preencha o formulário com seus dados e o valor desejado. Rápido, grátis e sem compromisso.',
  },
  {
    Icon: FileText,
    num: '02',
    title: 'Análise de Crédito',
    desc: 'Consultamos sua disponibilidade de margem e encontramos a melhor proposta entre nossos bancos parceiros.',
  },
  {
    Icon: PenLine,
    num: '03',
    title: 'Assinatura Digital',
    desc: 'Receba o link de formalização por WhatsApp. Assine digitalmente, sem precisar sair de casa.',
  },
  {
    Icon: CheckCircle,
    num: '04',
    title: 'Dinheiro na Conta',
    desc: 'Após a aprovação, o valor cai na sua conta em até 24 horas úteis.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.set('.steps-line', { scaleX: 0 })
    gsap.set('.step-card', { opacity: 0, y: 40 })
    gsap.set('.step-num', { scale: 0.5, opacity: 0 })

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.timeline()
          .to('.steps-line', { scaleX: 1, duration: 0.75, ease: 'power2.inOut' })
          .to('.step-card', { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', stagger: 0.13 }, '-=0.4')
          .to('.step-num', { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.8)', stagger: 0.13 }, '-=0.65')
      },
    })

    gsap.from('.how-header', {
      y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
  }, { scope: ref })

  return (
    <section className="how-section" id="como-funciona" ref={ref}>
      <div className="container">
        <div className="how-header">
          <div className="section-tag how-tag">
            Processo Simples
          </div>
          <h2 className="section-title light" style={{ marginTop: 14 }}>
            Como funciona em<br />4 passos fáceis
          </h2>
          <p className="section-desc light">
            Do pedido ao dinheiro na conta, tudo online e sem complicação.
          </p>
        </div>

        <div className="steps-track">
          <div className="steps-line" />
          {steps.map((s, i) => {
            const Icon = s.Icon
            return (
              <div className="step-card" key={i}>
                <div className="step-num">
                  <div className="step-num-icon">
                    <Icon size={18} />
                  </div>
                  <div className="step-num-label">{s.num}</div>
                </div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
