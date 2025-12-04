import React, { useState, useEffect, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            // Debounce for performance
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsScrolled(window.scrollY > 10);
            }, 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Resources', href: '#resources' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 border-b border-gray-100 py-3'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img
                        src="/assets/zemo-logo.png"
                        alt="Zemo"
                        className="h-8 w-auto"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zemoCyan transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                        Get Started
                    </button>
                    <button className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-zemoOrange to-amber-500 rounded-full hover:from-amber-600 hover:to-amber-600 transition-all shadow-sm shadow-orange-400/20">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-gray-900 hover:text-zemoOrange"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <button className="w-full px-5 py-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                                    Get Started
                                </button>
                                <button className="w-full px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-zemoOrange to-amber-500 rounded-full hover:from-amber-600 hover:to-amber-600 transition-all">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default memo(Navbar);
