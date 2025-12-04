import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

// Optimized background - removed floating shapes, reduced animations
const HeroBackground = memo(() => {
    return (
        <>
            {/* Static grid - no animation */}
            <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[repeating-linear-gradient(100deg,#64748B_0%,#64748B_1px,transparent_1px,transparent_4%)]" />
            </div>

            {/* Responsive circles - smaller on desktop, proportional to text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[760px] w-[760px] md:h-[650px] md:w-[650px] lg:h-[700px] lg:w-[700px]">
                    {[0, 1].map((i) => (
                        <motion.div
                            key={i}
                            className={clsx(
                                "absolute inset-0 rounded-full border-2 will-change-transform",
                                i === 0
                                    ? "border-zemoOrange/40 bg-gradient-to-br from-zemoOrange/15 to-transparent"
                                    : "border-zemoCyan/30 bg-gradient-to-br from-zemoCyan/10 to-transparent"
                            )}
                            animate={{
                                rotate: i === 0 ? 360 : -360,
                            }}
                            transition={{
                                duration: 25, // Very slow rotation
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Static gradient overlays - no animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-radial from-zemoOrange/8 via-transparent to-transparent" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-zemoCyan/6 via-transparent to-transparent" />
            </div>
        </>
    );
});

HeroBackground.displayName = 'HeroBackground';

const HeroEnhanced: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
            {/* Animated Background Layer */}
            <HeroBackground />

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-32">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main Content - removed animations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            Zero Effort. <br />
                            Maximum <span className="text-zemoBlue">Output.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Peace of mind for finance leaders. One platform, three powerful solutions.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {['Free Payroll', 'Expense Management', 'Smart Reporting'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 text-sm font-medium border border-orange-200/50 shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 px-5 py-3.5 rounded-xl bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-zemoOrange focus:ring-0 transition-all text-sm"
                            />
                            <button className="sm:px-6 px-8 py-3.5 bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-400/25 whitespace-nowrap text-sm">
                                Get Started <ArrowRight size={16} />
                            </button>
                        </div>

                        <p className="mt-8 text-sm text-gray-500">
                            Trusted by over 500 finance teams
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroEnhanced;
