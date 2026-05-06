import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import StatsBar from './components/StatsBar'
import ParallaxBand from './components/ParallaxBand'
import Destinations from './components/Destinations'
import Experiences from './components/Experiences'
import StatementSection from './components/StatementSection'
import Seasons from './components/Seasons'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { BANDS } from './data/siteData'

export default function App() {
  return (
    <>
      {/* Custom cursor — hidden on touch devices via CSS */}
      <Cursor />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections in order */}
      <main>
        <Hero />
        <IntroSection />
        <StatsBar />
        <ParallaxBand band={BANDS[0]} />
        <Destinations />
        <ParallaxBand band={BANDS[1]} />
        <Experiences />
        <StatementSection />
        <Seasons />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
