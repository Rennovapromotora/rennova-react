import { useCampaignContext } from '../context/CampaignContext'

const WA_STROKE_1 = "M12 .5a11.5 11.5 0 0 0-9.54 17.92L.5 23.5l5.23-1.87A11.5 11.5 0 1 0 12 .5Z";
const WA_STROKE_2 = "M9.5 14.5c1.3 1.3 4.17 3 5.5 3a2.53 2.53 0 0 0 2.5-2v-1s-1.23-.6-2-1-2 1-2 1A6.52 6.52 0 0 1 11 13a6.52 6.52 0 0 1-1.5-2.5s1.4-1.23 1-2-1-2-1-2h-1a2.53 2.53 0 0 0-2 2.5c0 1.33 1.7 4.2 3 5.5Z";

export default function SimularAgoraButton({
  href,
  className = "btn-primary",
  text = "Simular Agora",
}) {
  const { getCampaignWaLink } = useCampaignContext()
  // Se há campanha ativa, usa a mensagem de campanha; senão usa o href passado como prop
  const link = getCampaignWaLink(null) || href

  return (
    <a href={link} className={className} target="_blank" rel="noreferrer">
      {text}
      <svg
        viewBox="0 0 24 24"
        width={26}
        height={26}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d={WA_STROKE_1} />
        <path d={WA_STROKE_2} />
      </svg>
    </a>
  );
}
