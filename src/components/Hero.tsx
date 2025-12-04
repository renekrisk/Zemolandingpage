import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
                            Zero Effort. <br />
                            <span className="text-zemoBlue">Maximum Output.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                            Peace of mind for finance leaders. One platform, three powerful solutions.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {['Free Payroll', 'Expense Management', 'Smart Reporting'].map((tag) => (
                                <span key={tag} className="px-4 py-1.5 rounded-full bg-gray-50 text-zemoBlue text-sm font-medium border border-gray-100">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="What's your work email?"
                                className="flex-1 px-6 py-4 rounded-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-zemoBlue focus:ring-1 focus:ring-zemoBlue transition-all"
                            />
                            <button className="px-8 py-4 bg-zemoBlue text-white font-semibold rounded-full hover:bg-blue-900 transition-colors flex items-center justify-center gap-2">
                                Get Started <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Minimal Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] bg-gray-50 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden">
                            {/* Abstract UI representation */}
                            <div className="absolute top-0 left-0 w-full h-full bg-white p-8 flex flex-col">
                                <div className="w-full h-48 bg-blue-50/50 rounded-3xl mb-8 p-6 flex flex-col justify-between">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                                        <div className="w-6 h-6 bg-zemoBlue rounded-full" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-24 h-2 bg-blue-200/50 rounded-full" />
                                        <div className="w-32 h-4 bg-zemoBlue rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-4 flex-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-gray-100" />
                                            <div className="flex-1 space-y-2">
                                                <div className="w-full h-2 bg-gray-100 rounded-full" />
                                                <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Floating Accent */}
                                <div className="absolute bottom-8 right-8 w-16 h-16 bg-zemoYellow rounded-2xl flex items-center justify-center text-zemoBlue font-bold text-xl shadow-lg">
                                    %
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
