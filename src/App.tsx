import { lazy, Suspense } from 'react'
import { Header } from './components/ui/header'
import Hero from './components/HeroEnhanced'
import TrustStrip from './components/TrustStrip'
import SolutionsOverview from './components/SolutionsOverview'

// Lazy load components below the fold for faster initial load
const FreePayroll = lazy(() => import('./components/FreePayroll'))
const ExpenseManagement = lazy(() => import('./components/ExpenseManagement'))
const SmartReporting = lazy(() => import('./components/SmartReporting'))
const Features = lazy(() => import('./components/Features'))
const Pricing = lazy(() => import('./components/Pricing'))
const About = lazy(() => import('./components/About'))
const Resources = lazy(() => import('./components/Resources'))
const Tools = lazy(() => import('./components/Tools'))
const Contact = lazy(() => import('./components/Contact'))
const GlobalCTA = lazy(() => import('./components/GlobalCTA'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustStrip />
      <SolutionsOverview />

      {/* Lazy loaded sections with loading fallback */}
      <Suspense fallback={<div className="h-screen" />}>
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
      </Suspense>
    </main>
  )
}

export default App
