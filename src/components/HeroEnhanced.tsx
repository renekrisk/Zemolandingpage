import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

// Background circles with YELLOW/ORANGE as primary brand colors
const HeroBackground = () => {
    const AnimatedGrid = () => (
        <motion.div
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
            animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
                duration: 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            }}
        >
            <div className="h-full w-full [background-image:repeating-linear-gradient(100deg,#64748B_0%,#64748B_1px,transparent_1px,transparent_4%)] opacity-20" />
        </motion.div>
    );

    // Yellow/Orange variant (PRIMARY BRAND COLORS)
    const variantStyles = {
        border: [
            "border-yellow-400/50",
            "border-orange-400/40",
            "border-amber-500/30",
        ],
        gradient: "from-yellow-400/25",
    };

    return (
        <>
            <AnimatedGrid />
            <motion.div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[600px] w-[600px]">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className={clsx(
                                "absolute inset-0 rounded-full",
                                "border-2 bg-gradient-to-br to-transparent",
                                variantStyles.border[i],
                                variantStyles.gradient
                            )}
                            animate={{
                                rotate: 360,
                                scale: [1, 1.05 + i * 0.05, 1],
                                opacity: [0.6, 0.8, 0.6],
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <div
                                className={clsx(
                                    "absolute inset-0 rounded-full mix-blend-screen",
                                    `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace(
                                        "from-",
                                        ""
                                    )}/10%,transparent_70%)]`
                                )}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Yellow/Orange gradient overlays */}
            <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#FACC15/20%,transparent_70%)] blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#FB923C/10%,transparent)] blur-[80px]" />
            </div>
        </>
    );
};

const HeroEnhanced: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
            {/* Animated Background Layer */}
            <HeroBackground />

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-32">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            Zero Effort. <br />
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                Maximum Output.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Peace of mind for finance leaders. One platform, three powerful solutions.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {['Free Payroll', 'Expense Management', 'Smart Reporting'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 rounded-full bg-yellow-50 text-amber-800 text-sm font-medium border border-yellow-200/50 shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="What's your work email?"
                                className="flex-1 px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all shadow-sm"
                            />
                            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/30">
                                Get Started <ArrowRight size={18} />
                            </button>
                        </div>

                        <motion.p
                            className="mt-8 text-sm text-gray-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Trusted by over 500 finance teams
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroEnhanced;
