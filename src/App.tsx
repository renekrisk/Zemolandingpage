import { lazy, Suspense, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import LoadingLines from './components/ui/loading-lines'
import Hero from './components/HeroEnhanced'
import TrustStrip from './components/TrustStrip'
import SolutionsOverview from './components/SolutionsOverview'

// Lazy load components below the fold for faster initial load
const FreePayroll = lazy(() => import('./components/FreePayroll'))
const ExpenseManagement = lazy(() => import('./components/ExpenseManagement'))
const SmartReporting = lazy(() => import('./components/SmartReporting'))
const Features = lazy(() => import('./components/Features'))
const Pricing = lazy(() => import('./components/Pricing'))
const Contact = lazy(() => import('./components/Contact'))
const GlobalCTA = lazy(() => import('./components/GlobalCTA'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500) // Show for 2.5 seconds

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <LoadingLines />
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
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
                <GlobalCTA />
                <Contact />
                <Footer />
            </Suspense>
        </main>
    )
}

export default App
