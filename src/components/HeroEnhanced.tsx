import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

// Minimal background
const HeroBackground = memo(() => {
    return (
        <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[repeating-linear-gradient(0deg,#000_0px,#000_1px,transparent_1px,transparent_60px),repeating-linear-gradient(90deg,#000_0px,#000_1px,transparent_1px,transparent_60px)]" />
        </div>
    );
});

HeroBackground.displayName = 'HeroBackground';

const HeroEnhanced: React.FC = () => {
    const benefits = [
        'Free payroll for all employees',
        'Real-time expense tracking',
        'Automated tax compliance',
        'Smart financial insights'
    ];

    return (
        <section id="home" className="relative h-screen max-h-[100vh] flex items-center bg-white overflow-hidden">
            <HeroBackground />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Main headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-4">
                            One app, all things{' '}
                            <span className="bg-gradient-to-r from-zemoOrange to-amber-500 bg-clip-text text-transparent">
                                money
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                            Manage payroll, expenses, and finances in one beautiful platform. Built for modern Kenyan businesses.
                        </p>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                                        <Check size={12} className="text-white" />
                                    </div>
                                    <span className="text-sm text-gray-700">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-gray-900/10"
                            >
                                Get Started Free
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-colors border-2 border-gray-200"
                            >
                                Watch Demo
                            </motion.button>
                        </div>

                        {/* Social proof */}
                        <p className="mt-4 text-xs text-gray-500">
                            No credit card required • Free forever for up to 3 employees
                        </p>
                    </motion.div>

                    {/* Right - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Phone mockup */}
                        <div className="relative">
                            <motion.img
                                src="/assets/hero-dashboard.png"
                                alt="Zemo Dashboard"
                                className="w-full max-w-sm xl:max-w-md mx-auto drop-shadow-2xl"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>

                        {/* Floating stat cards - minimal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="absolute top-8 -left-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                        >
                            <div className="text-xs text-gray-500">Saved</div>
                            <div className="text-lg font-bold text-gray-900">KES 2.4M</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="absolute bottom-16 -right-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                        >
                            <div className="text-xs text-gray-500">Today</div>
                            <div className="text-lg font-bold text-gray-900">1,234</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroEnhanced;
