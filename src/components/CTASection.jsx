import { useRef } from 'react'
import { WA_MESSAGES } from '../config/whatsapp'
import { useCampaignContext } from '../context/CampaignContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const WA_PATH_1 = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z'
const WA_PATH_2 = 'M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.524 5.854L.057 23.888a.5.5 0 00.606.606l6.034-1.467A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.816 9.816 0 01-4.995-1.371l-.357-.213-3.707.901.917-3.607-.232-.37A9.818 9.818 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z'

export default function CTASection() {
  const ref = useRef(null)
  const { getCampaignWaLink } = useCampaignContext()

  useGSAP(() => {
    gsap.from(['.cta-tag', '.cta-title', '.cta-desc', '.cta-actions'], {
      y: 30, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 75%' },
    })
  }, { scope: ref })

  const scrollTo = (target) => {
    const el = document.getElementById(target)
    if (el) gsap.to(window, { duration: 1.1, scrollTo: { y: el, offsetY: 76 }, ease: 'power3.inOut' })
  }

  return (
    <section className="cta-section" id="cta" ref={ref}>
      <div className="cta-inner container">
        <div className="section-tag cta-tag" style={{ justifyContent: 'center' }}>
          Pronto para começar?
        </div>
        <h2 className="cta-title">
          Faça uma simulação hoje
        </h2>
        <p className="cta-desc">
          Descubra como é fácil obter crédito com a Rennova. Sem burocracia, totalmente digital e com as melhores condições do mercado.
        </p>
        <div className="cta-actions">
          <a href={getCampaignWaLink(WA_MESSAGES.simularWhatsApp)} className="btn-ghost" target="_blank" rel="noreferrer">
            Simular pelo WhatsApp
            <svg viewBox="0 0 24 24" width={26} height={26} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z" />
              <path d="M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
