import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import { CampaignProvider } from './context/CampaignContext'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import VantagensSection from './components/VantagensSection'
import ServicesCarousel from './components/ServicesCarousel'
import RequisitosFGTS from './components/RequisitosFGTS'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BackToTop from './components/BackToTop'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <CampaignProvider>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <VantagensSection />
        {/* <ServicesCarousel /> */}
        {/* <RequisitosFGTS /> */}
        {/* <HowItWorks /> */}
        <Benefits />
        <Testimonials />
        {/* <Partners /> */}
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </CampaignProvider>
  )
}
