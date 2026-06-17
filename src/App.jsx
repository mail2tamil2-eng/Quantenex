import { useState, useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import WhySection from './components/WhySection'
import Platform   from './components/Platform'
import Solutions  from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import SDKSection from './components/SDKSection'
import Team       from './components/Team'
import CTABanner  from './components/CTABanner'
import Footer     from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('qn-theme') === 'dark')

  useEffect(() => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      localStorage.setItem('qn-theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('qn-theme', 'light')
    }
  }, [dark])

  return (
    <>
      <Navbar dark={dark} onToggleDark={() => setDark(d => !d)} />
      <Hero />
      <WhySection />
      <Team />
      <Platform />
      <Solutions />
      <HowItWorks />
      <SDKSection />
      <CTABanner />
      <Footer />
    </>
  )
}
