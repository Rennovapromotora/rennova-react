import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ChevronUp } from 'lucide-react'

gsap.registerPlugin(ScrollToPlugin)

function isLightBackground(el) {
  let node = el
  while (node && node !== document.body) {
    const bg = getComputedStyle(node).backgroundColor
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
      if (match) {
        const [, r, g, b] = match.map(Number)
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5
      }
    }
    node = node.parentElement
  }
  return false
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [onLight, setOnLight] = useState(false)
  const btnRef = useRef(null)

  const checkBg = useCallback(() => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.visibility = 'hidden'
    const rect = btn.getBoundingClientRect()
    const el = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)
    btn.style.visibility = ''
    if (el) setOnLight(isLightBackground(el))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320)
      checkBg()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [checkBg])

  const handleClick = () => {
    gsap.to(window, { duration: 1.0, scrollTo: 0, ease: 'power3.inOut' })
  }

  const cls = ['back-to-top', visible && 'visible', onLight && 'on-light']
    .filter(Boolean).join(' ')

  return (
    <button ref={btnRef} className={cls} onClick={handleClick} aria-label="Voltar ao topo">
      <div className="btt-chevrons">
        <ChevronUp size={14} strokeWidth={2.5} />
        <ChevronUp size={14} strokeWidth={2.5} />
      </div>
      <div className="btt-mouse">
        <div className="btt-mouse-dot" />
      </div>
      <span className="btt-label">Topo</span>
    </button>
  )
}
