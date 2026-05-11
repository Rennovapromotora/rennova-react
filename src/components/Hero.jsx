import { useRef, useState, useEffect } from "react";
import { waLink, WA_MESSAGES, simuladorMessage } from "../config/whatsapp";
import { useCampaignContext } from "../context/CampaignContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import SimularAgoraButton from "./SimularAgoraButton";

gsap.registerPlugin(ScrollToPlugin);

const PHRASES = ["Faça o crédito CLT"];

const WA_STROKE_1 = "M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z";
const WA_STROKE_2 = "M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z";

const WA_PATH_1 = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z";
const WA_PATH_2 = "M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.524 5.854L.057 23.888a.5.5 0 00.606.606l6.034-1.467A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.816 9.816 0 01-4.995-1.371l-.357-.213-3.707.901.917-3.607-.232-.37A9.818 9.818 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z";

export default function Hero() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [simValue, setSimValue] = useState("");
  const [simError, setSimError] = useState(false);
  const { campaign } = useCampaignContext();

  const formatBRL = (raw) => {
    const digits = raw.replace(/\D/g, "");
    if (!digits) return "";
    const num = parseInt(digits, 10) / 100;
    return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const handleSimInput = (e) => {
    setSimError(false);
    setSimValue(formatBRL(e.target.value));
  };

  const handleSim = () => {
    const digits = simValue.replace(/\D/g, "");
    if (!digits) {
      setSimError(true);
      return;
    }
    const num = parseInt(digits, 10) / 100;
    const valor = num.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    window.open(waLink(simuladorMessage(campaign, valor)), "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
        setVisible(true);
      }, 650);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.to(".hero-badge", { opacity: 1, duration: 0.6, ease: "power2.out" })
        .to(
          ".hero-title",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )
        .to(
          ".hero-desc",
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        )
        .to(
          ".hero-actions",
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        )
        .to(
          ".hero-visual",
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7",
        );
    },
    { scope: heroRef },
  );

  // Parallax grid on scroll
  useGSAP(() => {
    const onScroll = () => {
      if (gridRef.current) {
        gridRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el)
      gsap.to(window, {
        duration: 1.1,
        scrollTo: { y: el, offsetY: 76 },
        ease: "power3.inOut",
      });
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg" />
      <div className="hero-grid" ref={gridRef} />
      <div className="hero-blob" />
      <div className="hero-bottom-fade" />

      <div className="hero-inner">
        {/* Left column */}
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={15} />
            Aprovação em minutos · 100% Digital
          </div>

          <h1 className="hero-title">
            <span className="hero-phrase-wrapper">
              <span className="hero-phrase-ghost" aria-hidden="true">
                {PHRASES.reduce((a, b) => (a.length > b.length ? a : b))}
              </span>
              <span
                className={`hero-title-phrase${visible ? " hero-title-phrase--visible" : ""}`}
              >
                {PHRASES[phraseIdx]}
              </span>
            </span>
            <span className="hero-title-sub">
              e tenha seu dinheiro liberado
              <br />
              em até 15 minutos.
            </span>
          </h1>

          <p className="hero-desc">
            Empréstimo para trabalhadores CLT com as menores taxas do mercado.
            Aprovação rápida, sem burocracia, dinheiro em até 24h.
          </p>

          <div className="hero-actions">
            <SimularAgoraButton href={waLink(WA_MESSAGES.simularAgora)} />
          </div>
        </div>

        {/* Right column — visual */}
        <div className="hero-visual">
          <div className="hv-scene">
            {/* Atmospheric background orbs */}
            <div className="hv-orb hv-orb-1" />
            <div className="hv-orb hv-orb-2" />
            <div className="hv-orb hv-orb-3" />
            <div className="hv-grid" />

            {/* Top chip */}
            <div className="hv-chip hv-chip-top">
              <span className="hv-chip-dot" />
              100% Digital · Sem Burocracia
            </div>

            {/* Simulation card */}
            <div className="hv-card hv-sim-card">
              <div className="hv-sim-header">
                <p className="hv-sim-title">De quanto você precisa?</p>
                <p className="hv-sim-sub">Simule agora sem compromisso</p>
              </div>

              <div className={`hv-sim-field${simError ? " hv-sim-field--error" : ""}`}>
                <span className="hv-sim-prefix">R$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Digite o valor"
                  value={simValue.replace("R$", "").trim()}
                  onChange={handleSimInput}
                  className="hv-sim-input"
                />
              </div>
              {simError && (
                <p className="hv-sim-error">Preencha o valor desejado para continuar</p>
              )}

              <button className="hv-sim-btn" onClick={handleSim}>
                Simular agora
                <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d={WA_STROKE_1} />
                  <path d={WA_STROKE_2} />
                </svg>
              </button>

              <p className="hv-sim-note">
                Sem consulta ao SPC/Serasa · Resposta em minutos
              </p>
            </div>

            {/* Bottom chip */}
            <div className="hv-chip hv-chip-bot">
              <TrendingUp size={13} strokeWidth={2} />
              +20mil clientes aprovados
            </div>
          </div>

          {/* Floating notification */}
          <div className="hero-svg-notif">
            <div className="hero-notif-icon">
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d={WA_PATH_1} />
                <path d={WA_PATH_2} />
              </svg>
            </div>
            <div className="hero-notif-text">
              <div className="hero-notif-title">Proposta aprovada!</div>
              <div className="hero-notif-sub">Dinheiro em até 24h</div>
            </div>
          </div>

          {/* Badge */}
          <div className="hero-svg-badge">
            <ShieldCheck size={14} color="var(--gold)" />
            +500 milhões liberados em crédito
          </div>
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg
          viewBox="0 260 1936 162"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* preenchimento do arco com a cor clara */}
          <path
            d="M716.348 421 C762.359 421 801.297 388.766 822.413 347.886 C839.719 314.382 865.191 282 899 282 C930.99 282 955.307 313.899 971.962 347.134 C992.679 388.476 1031.73 421 1077.97 421 L1077.97 422 L716.348 422 Z"
            fill="#e5f2ff"
          />
          {/* forma principal da onda */}
          <path
            d="M716.348 421H0L5.94041e-05 0H1936V421H1077.97C1031.73 421 992.679 388.476 971.962 347.134C955.307 313.899 930.99 282 899 282C865.191 282 839.719 314.382 822.413 347.886C801.297 388.766 762.359 421 716.348 421Z"
            fill="#060f1a"
          />
        </svg>
      </div>

      <div className="scroll-indicator" onClick={() => scrollTo("trust")}>
        <span className="scroll-label">Ver mais</span>
        <div className="scroll-mouse">
          <div className="scroll-mouse-dot" />
        </div>
        <div className="scroll-chevrons">
          <ChevronDown size={14} strokeWidth={2.5} />
          <ChevronDown size={14} strokeWidth={2.5} />
        </div>
      </div>
    </section>
  );
}
