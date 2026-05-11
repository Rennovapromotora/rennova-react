import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'Quem pode contratar o Crédito?',
    a: 'Podem contratar trabalhadores com carteira assinada (CLT) de empresas privadas e empresas conveniadas com a nossa plataforma. O empréstimo é ideal para quem busca taxas mais baixas e prazos mais longos para pagamento.',
  },
  {
    q: 'Quais documentos são necessários para contratar?',
    a: (
      <>
        Para contratar o Crédito Privado, você precisará dos seguintes documentos:
        <ul style={{ marginTop: 10, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <li>RG e CPF ou CNH válida</li>
          <li>Comprovante de residência atualizado (até 90 dias)</li>
          <li>Carteira de trabalho ou holerite recente</li>
          <li>Dados da conta bancária de sua titularidade</li>
        </ul>
        <span style={{ display: 'block', marginTop: 10 }}>
          O processo é 100% digital, então você pode enviar os documentos pelo celular ou computador, sem precisar sair de casa.
        </span>
      </>
    ),
  },
  {
    q: 'Quanto tempo demora para o dinheiro cair na conta?',
    a: 'Após a aprovação, que ocorre em até 2 horas, o dinheiro é liberado em até 24 horas úteis diretamente na sua conta bancária. Todo o processo é ágil e você pode acompanhar o status da sua solicitação pelo nosso site ou aplicativo.',
  },
  {
    q: 'E se eu for demitido durante o pagamento do empréstimo?',
    a: (
      <>
        Em caso de demissão, existem algumas possibilidades:
        <ul style={{ marginTop: 10, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <li>O valor restante do empréstimo pode ser descontado das suas verbas rescisórias, como 40% do FGTS, caso seja suficiente</li>
          <li>Se as verbas rescisórias não forem suficientes, você receberá boletos para continuar pagando o empréstimo</li>
          <li>Em alguns casos, existe um seguro opcional que pode cobrir o pagamento em situações de desemprego involuntário</li>
        </ul>
        <span style={{ display: 'block', marginTop: 10 }}>
          Recomendamos que você entre em contato conosco imediatamente caso seja demitido, para avaliarmos a melhor solução para o seu caso.
        </span>
      </>
    ),
  },
  {
    q: 'Posso quitar meu empréstimo antes do prazo?',
    a: 'Sim, você pode quitar seu empréstimo antecipadamente e ter desconto nos juros proporcionais ao tempo restante. Para isso, basta entrar em contato com nossa central de atendimento e solicitar a antecipação da quitação. Você receberá um boleto com o valor atualizado e os descontos aplicáveis.',
  },
  {
    q: 'Qual o valor máximo que posso solicitar?',
    a: 'O valor máximo que você pode solicitar depende da sua margem consignável, que é calculada com base no seu salário. Por lei, você pode comprometer até 30% do seu salário com prestações de empréstimos. Nossa equipe fará essa análise para oferecer o melhor valor possível dentro da sua capacidade de pagamento.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.faq-item', {
      y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section className="section-pad faq-section" id="faq" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Dúvidas Frequentes</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Perguntas Frequentes</h2>
          <p className="section-desc" style={{ textAlign: 'center', margin: '14px auto 0' }}>
            Ainda tem dúvidas? Nossa equipe está disponível no WhatsApp.
          </p>
        </div>

        <div className="faq-wrap">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button
                className={`faq-q${open === i ? ' open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className={`faq-arrow${open === i ? ' open' : ''}`}>
                  <ChevronDown size={14} strokeWidth={2.5} />
                </span>
              </button>
              <div className={`faq-a${open === i ? ' open' : ''}`}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
