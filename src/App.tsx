import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ToolsPage from './pages/ToolsPage'
import BookingPage from './pages/BookingPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/book-demo" element={<BookingPage />} />
            </Routes>
        </Router>
    )
}

export default App
