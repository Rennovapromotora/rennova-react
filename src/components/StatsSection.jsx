import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Banknote,
  Zap,
  Smartphone,
  BadgePercent,
  CircleCheckBig,
  Wallet,
  Clock,
  Calculator,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: ShieldCheck, text: "Aprovação garantida mesmo para negativados" },
  { icon: Banknote, text: "Parcelas descontadas direto na folha de pagamento" },
  { icon: Zap, text: "Crédito liberado em minutos na sua conta" },
  { icon: Smartphone, text: "Contratação 100% pelo celular, sem burocracia" },
  { icon: BadgePercent, text: "As menores taxas de juros do mercado" },
];

const stats = [
  {
    icon: CircleCheckBig,
    num: "100%",
    pre: null,
    label: "de aprovação para negativados",
  },
  {
    icon: Wallet,
    num: "60",
    pre: 'dias',
    label: "Até 60 dias para pagar a primeira parcela",
  },
  {
    icon: Clock,
    num: "10",
    pre: "minutos",
    label: "para ter o seu dinheiro liberado",
  },
  {
    icon: Calculator,
    num: "100%",
    pre: "digital",
    label: "aquisição feita pelo celular",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const statsRowRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".trust-item", {
        x: -30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".trust-badge-svg", {
        scale: 0.8,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".trust-heading", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });

      const cards = gsap.utils.toArray(".stat-card", statsRowRef.current);
      gsap.set(cards, { y: 40, opacity: 0 });
      ScrollTrigger.create({
        trigger: statsRowRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.13,
            ease: "power3.out",
          });
        },
        once: true,
      });
    },
    { scope: ref },
  );

  return (
    <section className="trust-section" id="trust" ref={ref}>
      <div className="container">
        <div className="trust-layout">
          <div className="trust-content">
            <h2 className="trust-heading">
              O crédito feito sob medida para você,{" "}
              <span className="trust-highlight">trabalhador CLT</span>
            </h2>
            <p className="trust-subheading">
              Desenvolvemos o melhor crédito para atender as necessidades financeiras dos trabalhadores com carteira assinada de todo o Brasil, com condições especiais e aprovação facilitada.
            </p>
            <ul className="trust-list">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li className="trust-item" key={i}>
                    <div className="trust-item-icon">
                      <Icon size={20} />
                    </div>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="trust-visual">
            <svg
              className="trust-badge-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
            >
              <defs>
                <clipPath id="badge-clip">
                  <path d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z" />
                </clipPath>
              </defs>
              <image
                href="https://lp.rennovapromotora.com.br/wp-content/uploads/2025/06/trablhadores-clt.jpeg"
                x="0"
                y="0"
                width="480"
                height="480"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#badge-clip)"
              />
              <path
                d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z"
                fill="none"
                stroke="#0AAFF3"
                strokeWidth="6"
              />
            </svg>
          </div>
        </div>

        <div className="trust-stats-row" ref={statsRowRef}>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="stat-card" key={i}>
                <div className="stat-icon-wrap">
                  <Icon size={22} />
                </div>
                <div className="stat-num-wrap">
                  <div className="stat-num">{s.num}</div>
                  {s.pre && <span className="stat-pre">{s.pre}</span>}
                </div>
                <div className="stat-divider" />
                <div className="stat-label">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
