import { Instagram, Facebook, Linkedin } from 'lucide-react'
import LogoMark from './LogoMark'

const WA_PATH_1 = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z'
const WA_PATH_2 = 'M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.524 5.854L.057 23.888a.5.5 0 00.606.606l6.034-1.467A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.816 9.816 0 01-4.995-1.371l-.357-.213-3.707.901.917-3.607-.232-.37A9.818 9.818 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z'

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
              <li><a href="#">Blog</a></li>
              <li><a href="#">Parceiros</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Suporte</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Reclame Aqui</a></li>
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
