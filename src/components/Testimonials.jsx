import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    "name": "Vitoria Rodrigues Teixeira",
    "role": "um ano atrás",
    "color": "#31679b",
    "text": "Ótimo atendimento, prático e rápido. Conversei primeiramente com o Pedro, ele me explicou todos os simulados feito e qual seria o melhor pra mim no momento e em seguida finalizei o contrato com a Beatriz, muito atenciosa e querida. Obrigada equipe por terem me ajudado.",
    "initials": "VT"
  },
  {
    "name": "Edilson Santos",
    "role": "7 meses atrás",
    "color": "#27ae60",
    "text": "Muito bom já cobra menos",
    "initials": "ES"
  },
  {
    "name": "EDNILSON MEIRA",
    "role": "3 anos atrás",
    "color": "#e09d00",
    "text": "Ótimo atendimento, deu tudo certo super atenção dá, Cristielly",
    "initials": "EM"
  },
  {
    "name": "Aline Oliveira",
    "role": "um ano atrás",
    "color": "#9b31aa",
    "text": "Excelente atendimento.super indico tive uma ótima experiência trabalha com vocês",
    "initials": "AO"
  },
  {
    "name": "Luiz Fernando Passos",
    "role": "um ano atrás",
    "color": "#c0392b",
    "text": "Estava precisando, com certa urgência de um empréstimo para finalizar uma obra em casa. Pesquisei empréstimos em diversas instituições financeiras, mas nenhuma atrativa, todas com taxas exorbitantes. Então encontrei a Rennova, pesquisei e vi que era uma empresa séria. Recomendo a todos!",
    "initials": "LP"
  },
  {
    "name": "Rayanna Rocha",
    "role": "um ano atrás",
    "color": "#2980b9",
    "text": "Minha experiência foi muito boa , quero agradecer a atendente Raylla por ter me auxiliado fez alguns simulações e me ajudou a escolher a melhor opção, o pagamento foi bem rapidinho e caiu na minha conta ! 🥰❤️❤️🙏",
    "initials": "RR"
  },
  {
    "name": "Camila Silva",
    "role": "10 meses atrás",
    "color": "#31679b",
    "text": "Atendimento excelente, super rápido e prático. Super recomendo!",
    "initials": "CS"
  },
  {
    "name": "Franciney Xavier",
    "role": "3 anos atrás",
    "color": "#27ae60",
    "text": "O dinheiro veio em boa hora,processo feito de forma rápida e segura!!! Eu super indico.",
    "initials": "FX"
  },
  {
    "name": "Daiana Barretos",
    "role": "11 meses atrás",
    "color": "#e09d00",
    "text": "Foi tão rápido que fiquei assustada! Eu fui no banco do Brasil e falei com o GERENTE ele não conseguiu liberar nada. Nem na caixa. Com eles foi menos de 30 min. Chocada.",
    "initials": "DB"
  },
  {
    "name": "Suilan Pereira Santos",
    "role": "2 anos atrás",
    "color": "#9b31aa",
    "text": "Muito boa fui super atendida aa parabéns pelo atendimento atendida pela cristhielly",
    "initials": "SS"
  }
];


function StarRow() {
  return (
    <div className="t-stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={15} fill="var(--gold)" stroke="none" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const autoSpeedRef = useRef(0.6)

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  // Drag + autoplay marquee
  useEffect(() => {
    const marquee = trackRef.current
    if (!marquee) return

    let dragging = false
    let startX = 0
    let scrollStart = 0
    let suppressNextClick = false

    const onMouseDown = (e) => {
      dragging = true
      startX = e.pageX
      scrollStart = marquee.scrollLeft
      marquee.style.cursor = 'grabbing'
    }
    const onMouseMove = (e) => {
      if (!dragging) return
      const dx = e.pageX - startX
      marquee.scrollLeft = scrollStart - dx
      if (Math.abs(dx) > 5) suppressNextClick = true
    }
    const onMouseUp = () => { dragging = false; marquee.style.cursor = 'grab' }

    marquee.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    const baseWidth = marquee.scrollWidth / 2

    const tick = () => {
      if (!dragging && baseWidth > 0) {
        marquee.scrollLeft += autoSpeedRef.current
        if (marquee.scrollLeft >= baseWidth) marquee.scrollLeft -= baseWidth
      }
      raf = requestAnimationFrame(tick)
    }
    let raf = requestAnimationFrame(tick)

    return () => {
      marquee.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="section-pad" id="depoimentos" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 0 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Depoimentos</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            O que nossos clientes<br />estão dizendo
          </h2>
        </div>
      </div>

      <div className="testimonials-marquee" style={{ marginTop: 48 }}>
        <div className="testimonials-track" ref={trackRef} style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {doubled.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="t-author">
                <div className="t-avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
              <StarRow />
              <p className="t-text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
