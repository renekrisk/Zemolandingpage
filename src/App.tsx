import { StrictMode } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/HeroEnhanced'
import TrustStrip from './components/TrustStrip'
import SolutionsOverview from './components/SolutionsOverview'
import FreePayroll from './components/FreePayroll'
import ExpenseManagement from './components/ExpenseManagement'
import SmartReporting from './components/SmartReporting'
import Features from './components/Features'
import Pricing from './components/Pricing'
import About from './components/About'
import Resources from './components/Resources'
import Tools from './components/Tools'
import Contact from './components/Contact'
import GlobalCTA from './components/GlobalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <SolutionsOverview />
      <FreePayroll />
      <ExpenseManagement />
      <SmartReporting />
      <Features />
      <Pricing />
      <About />
      <Resources />
      <Tools />
      <Contact />
      <GlobalCTA />
      <Footer />
    </main>
  )
}

export default App
