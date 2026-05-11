import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import LogoMark from './LogoMark'
import { WA_MESSAGES } from '../config/whatsapp'
import { useCampaignContext } from '../context/CampaignContext'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const WA_STROKE_1 = 'M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z'
const WA_STROKE_2 = 'M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z'

const navLinks = [
  { label: 'Início', target: 'hero' },
  { label: 'Como Funciona', target: 'trust' },
  { label: 'Sobre Nós', target: 'beneficios' },
  { label: 'Fale Conosco', target: 'cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { getCampaignWaLink } = useCampaignContext()

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => setScrolled(self.progress > 0),
    })
    return () => trigger.kill()
  }, [])

  const scrollTo = (target) => {
    const el = document.getElementById(target)
    if (!el) return
    setMenuOpen(false)
    gsap.to(window, {
      duration: 1.1,
      scrollTo: { y: el, offsetY: 76 },
      ease: 'power3.inOut',
    })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo">
            <LogoMark size={28} />
            <span className="nav-logo-text">RENNOVA <span className="nav-logo-light">PROMOTORA</span></span>
          </div>

          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.target} href={`#${l.target}`} onClick={(e) => { e.preventDefault(); scrollTo(l.target) }}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              href={getCampaignWaLink(WA_MESSAGES.simularNavbar)}
              className="nav-cta"
              target="_blank"
              rel="noreferrer"
            >
              Simular Valor
              <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d={WA_STROKE_1} />
                <path d={WA_STROKE_2} />
              </svg>
            </a>
            <button
              className={`nav-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        {navLinks.map((l) => (
          <a key={l.target} href={`#${l.target}`} onClick={(e) => { e.preventDefault(); scrollTo(l.target) }}>
            {l.label}
          </a>
        ))}
        <a
          href="#servicos"
          className="nav-cta"
          style={{ marginTop: 8 }}
          onClick={(e) => { e.preventDefault(); scrollTo('servicos') }}
        >
          Simular Valor
          <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d={WA_STROKE_1} />
            <path d={WA_STROKE_2} />
          </svg>
        </a>
      </div>
    </>
  )
}
