import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: 'UY3',      type: 'Banco Digital',  bg: '#e8f0fb', fill: '#1a3a6b', text: 'UY3',    fontSize: 8 },
  { name: 'Facta',    type: 'Financeira',      bg: '#fff3e0', fill: '#e65100', text: 'FACTA',  fontSize: 5.5 },
  { name: 'Banco BMG',type: 'Banco',           bg: '#e3f2fd', fill: '#1565c0', text: 'BMG',    fontSize: 8 },
  { name: 'C6 Bank',  type: 'Banco Digital',  bg: '#e8f5e9', fill: '#1b5e20', text: 'C6',     fontSize: 8.5 },
  { name: 'Crefisa',  type: 'Financeira',      bg: '#fce4ec', fill: '#ad1457', text: 'CREFISA',fontSize: 5.5 },
]

export default function Partners() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.partner-card', {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section className="partners-section" id="parceiros" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 0 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Parceiros</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Nossos bancos parceiros
          </h2>
          <p className="section-desc" style={{ textAlign: 'center', maxWidth: 540, margin: '14px auto 0' }}>
            Trabalhamos com as maiores instituições financeiras do país para garantir as melhores condições de crédito para você.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((p, i) => (
            <div className="partner-card" key={i}>
              <div className="partner-logo-wrap" style={{ background: p.bg }}>
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width={56} height={56}>
                  <rect width="28" height="28" rx="6" fill={p.fill} />
                  <text
                    x="50%" y="58%"
                    fontSize={p.fontSize}
                    fontFamily="sans-serif"
                    fontWeight="700"
                    fill="#fff"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {p.text}
                  </text>
                </svg>
              </div>
              <div className="partner-name">{p.name}</div>
              <div className="partner-type">{p.type}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
