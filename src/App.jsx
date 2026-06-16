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
  return (
    <>
      <Navbar />
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
