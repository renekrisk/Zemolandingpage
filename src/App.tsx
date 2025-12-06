import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ToolsPage from './pages/ToolsPage'
import BookingPage from './pages/BookingPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import SeasonEffects from './components/ui/SeasonEffects'

function App() {
    return (
        <Router>
            {/* To remove Christmas effects, just comment out or remove the line below */}
            <SeasonEffects />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/book-demo" element={<BookingPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    )
}

export default App
