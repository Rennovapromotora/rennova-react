import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { text: 'Nossa solução permite que você tenha acesso a crédito com ', bold: 'taxas reduzidas' },
  { text: 'Aprovação rápida e um processo totalmente ', bold: 'digital' },
  { text: 'Tudo pensado para facilitar sua ', bold: 'vida financeira', suffix: ' e ajudar a realizar seus projetos' },
]

export default function ConsignadoSection() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.consig-badge, .consig-title, .consig-desc, .consig-feature, .consig-cta-btn', {
      y: 32,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
    gsap.from('.consig-img-wrap', {
      x: 56,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
  }, { scope: ref })

  return (
    <section className="consig-section section-pad" ref={ref}>
      <div className="container">
        <div className="consig-grid">

          {/* ── Texto ── */}
          <div className="consig-content">
            <span className="consig-badge">Entenda</span>

            <h2 className="consig-title">
              O crédito feito sob medida para você, {' '}
              <span className="consig-title-highlight">trabalhador CLT</span>
            </h2>

            <p className="consig-desc">
              Desenvolvemos o <strong>melhor crédito </strong> para atender
              as necessidades financeiras dos trabalhadores com{' '}
              <strong>carteira assinada</strong> de todo o Brasil, com{' '}
              <strong>condições especiais e aprovação facilitada</strong>.
            </p>

            <ul className="consig-features">
              {features.map((f, i) => (
                <li key={i} className="consig-feature">
                  <span className="consig-feature-icon">
                    <User size={18} />
                  </span>
                  <span>
                    {f.text}
                    <strong>{f.bold}</strong>
                    {f.suffix || ''}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#simulacao" className="consig-cta-btn">
              Simular agora
            </a>
          </div>

          {/* ── Imagem dentro do SVG blob ── */}
          <div className="consig-img-wrap">
            <div className="consig-img-blob-bg" aria-hidden="true" />
            <svg
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              className="consig-svg"
            >
              <defs>
                <clipPath id="consig-blob-clip">
                  <path d="M480 0A339.4 339.4 0 0 1 0 0a339.4 339.4 0 0 1 0 480 339.4 339.4 0 0 1 480 0 339.4 339.4 0 0 1 0-480Z" />
                </clipPath>
              </defs>
              <image
                href="/img/Gemini_Generated_Image_2novmc2novmc2nov.png"
                x="0"
                y="0"
                width="480"
                height="480"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#consig-blob-clip)"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
