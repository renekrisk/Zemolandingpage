import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GlobalCTA: React.FC = () => {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Ready to streamline your finances?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10">
                        Join 500+ Kenyan businesses already using Zemo
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 group">
                            Get Started Free
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-colors border-2 border-gray-200">
                            Schedule Demo
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        No credit card required • Setup in 5 minutes
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalCTA;
