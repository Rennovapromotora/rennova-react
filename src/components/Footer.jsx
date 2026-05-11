import { Instagram, Facebook, Linkedin } from 'lucide-react'
import LogoMark from './LogoMark'
import { waLink, WA_MESSAGES } from '../config/whatsapp'

const WA_STROKE_1 = 'M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z'
const WA_STROKE_2 = 'M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: 0 }}>
              <LogoMark size={28} />
              <span className="nav-logo-text">RENNOVA <span className="nav-logo-light">PROMOTORA</span></span>
            </div>
            <p className="footer-about">
              A Rennova Promotora não é uma instituição financeira e não realiza operações de crédito diretamente.
            </p>
            <a
              href={waLink(WA_MESSAGES.simularNavbar)}
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 20, alignSelf: 'flex-start' }}
            >
              Simular Valor
              <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d={WA_STROKE_1} />
                <path d={WA_STROKE_2} />
              </svg>
            </a>

            <div className="footer-socials">
              <a className="social-link" href="https://instagram.com/rennovapromotora" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={16} />
                @rennovapromotora
              </a>
              <a className="social-link" href="https://facebook.com/rennovapromotora" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={16} />
                @rennovapromotora
              </a>
              <a className="social-link" href="https://linkedin.com/company/rennovapromotora" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
                @rennovapromotora
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Consignado CLT</a></li>
              <li><a href="#servicos">Antecipação FGTS</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              {/* <li><a href="#">Blog</a></li> */}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Suporte</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="legal-text">
          2026 © Todos os direitos reservados. Rennova Promotora de Crédito.{' '}
          <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Políticas de Privacidade</a>{' '}
          <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Termos de Uso</a>
          <br /><br />
          A Rennova Promotora não é uma instituição financeira e não realiza operações de crédito diretamente.
          A Rennova Promotora é uma plataforma digital que atua como correspondente bancário para facilitar o processo
          de contratação de produtos financeiros. Como correspondente bancário, seguimos as diretrizes do Banco Central
          do Brasil, nos termos da Resolução nº. 3.954, de 24 de fevereiro de 2011. Toda avaliação de crédito será
          realizada conforme a política de crédito da Instituição Financeira escolhida pelo usuário. Antes da contratação
          de qualquer serviço através de nossos parceiros, você receberá todas as condições e informações relativas ao
          produto a ser contratado, de forma completa e transparente. RENNOVA PROMOTORA LTDA -
        </div>

        <div className="footer-bottom">
          <span>CNPJ 37.667.841/0001-67 | Endereço: Rua 8C, Salas 02/3 - QD 90 LT 17 - 74930-150 - Setor Garavelo, Aparecida de Goiânia - GO.</span>
          <span>© 2026 Rennova Promotora — Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
