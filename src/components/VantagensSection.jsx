import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BadgeCheck, Zap, Wallet } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    icon: BadgeCheck,
    title: 'Crédito Pré Aprovado',
    desc: 'Basta ter o vínculo empregatício CLT ativo na sua empresa atual há mais de 6 meses.',
  },
  {
    icon: Zap,
    title: 'Aprovação rápida',
    desc: 'Seu dinheiro na conta em até 24 horas após a aprovação do seu cadastro.',
  },
  {
    icon: Wallet,
    title: 'Até 60 dias para pagar',
    desc: 'A primeira parcela só começa a ser descontada após 60 dias da contratação.',
  },
]

export default function VantagensSection() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.vantagens-left', {
      x: -50,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })

    const cards = gsap.utils.toArray('.vantagens-card')
    gsap.set(cards, { x: 120, opacity: 0 })
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 78%',
      onEnter: () => {
        gsap.to(cards, {
          x: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.16,
          ease: 'power3.out',
        })
      },
      once: true,
    })
  }, { scope: ref })

  return (
    <section className="vantagens-section" ref={ref}>
      <div className="container">
        <div className="vantagens-layout">

          <div className="vantagens-left">
            <span className="vantagens-eyebrow">Consignado na sua conta de forma rápida e fácil</span>
            <h2 className="vantagens-heading">
              Vantagens de contratar o{' '}
              <strong>Consignado Privado</strong> com a{' '}
              <strong>Rennova promotora</strong>
            </h2>
            <p className="vantagens-sub">
              Saiba qual tipo de empréstimo é ideal para o seu momento atual.
              Contrate de forma 100% online.
            </p>
            <a href="#contato" className="vantagens-cta">
              Quero saber mais
            </a>
          </div>

          <div className="vantagens-right">
            {cards.map((card, i) => {
              const Icon = card.icon
              return (
                <div className="vantagens-card" key={i}>
                  <div className="vantagens-card-icon">
                    <Icon size={22} />
                  </div>
                  <div className="vantagens-card-text">
                    <strong>{card.title}</strong>
                    <p>{card.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
