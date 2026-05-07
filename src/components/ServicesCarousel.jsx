import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Zap, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    Icon: Briefcase,
    imgClass: 'svc-img-2',
    title: 'Consignado CLT',
    desc: 'Para trabalhadores de carteira assinada. Taxas muito menores que o mercado, aprovação facilitada mesmo para negativados, sem burocracia.',
  },
  {
    Icon: Zap,
    imgClass: 'svc-img-3',
    title: 'Antecipação FGTS',
    desc: 'Antecipe até 10 anos do seu saque-aniversário com as melhores taxas e sem comprometer sua margem consignável. Dinheiro rápido no bolso.',
  },
]

export default function ServicesCarousel() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.service-card', {
      y: 30, opacity: 0, stagger: 0.15, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
  }, { scope: sectionRef })

  const scrollTo = (target) => {
    const el = document.getElementById(target)
    if (el) gsap.to(window, { duration: 1.1, scrollTo: { y: el, offsetY: 76 }, ease: 'power3.inOut' })
  }

  return (
    <section className="services-section section-pad" id="servicos" ref={sectionRef}>
      <div className="container">
        <div className="svc-header">
          <div className="svc-header-text">
            <div className="section-tag">Nossos Serviços</div>
            <h2 className="section-title">Soluções financeiras<br />para cada perfil</h2>
            <p className="section-desc">
              Do consignado ao antecipado de FGTS, temos a linha de crédito ideal para a sua necessidade.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {cards.map((c, i) => {
            const Icon = c.Icon
            return (
              <div className="service-card" key={i}>
                <div className={`service-img-wrap ${c.imgClass}`}>
                  <div className="svc-img-pattern" />
                  <div className="svc-img-icon-wrap">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="service-body">
                  <div className="service-title">{c.title}</div>
                  <p className="service-desc">{c.desc}</p>
                  <div className="service-footer">
                    <a
                      href="#como-funciona"
                      className="service-cta"
                      onClick={(e) => { e.preventDefault(); scrollTo('como-funciona') }}
                    >
                      Saiba mais <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
