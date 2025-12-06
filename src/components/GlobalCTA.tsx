import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/signup" className="px-8 py-4 bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group">
                            Get Started Free
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/book-demo" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-colors border-2 border-gray-200">
                            Schedule Demo
                        </Link>
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
