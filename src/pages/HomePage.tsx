import { lazy, Suspense, useState, useEffect } from 'react'
import { Header } from '../components/ui/header'
import LoadingLines from '../components/ui/loading-lines'
import Hero from '../components/HeroEnhanced'
import TrustStrip from '../components/TrustStrip'
import SolutionsOverview from '../components/SolutionsOverview'

// Lazy load components below the fold for faster initial load
const FreePayroll = lazy(() => import('../components/FreePayroll'))
const ExpenseManagement = lazy(() => import('../components/ExpenseManagement'))
const SmartReporting = lazy(() => import('../components/SmartReporting'))
const Features = lazy(() => import('../components/Features'))
const SmartReportingHighlight = lazy(() => import('../components/SmartReportingHighlight'))
const Pricing = lazy(() => import('../components/Pricing'))
const GlobalCTA = lazy(() => import('../components/GlobalCTA'))
const Contact = lazy(() => import('../components/Contact'))
const Footer = lazy(() => import('../components/Footer'))

function HomePage() {
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
                <SmartReportingHighlight />
                <Pricing />
                <GlobalCTA />
                <Contact />
                <Footer />
            </Suspense>
        </main>
    )
}

export default HomePage
