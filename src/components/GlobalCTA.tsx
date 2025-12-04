import React from 'react';
import Section from './Section';
import { ArrowRight } from 'lucide-react';

const GlobalCTA: React.FC = () => {
    return (
        <Section className="bg-white text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Ready to streamline your finance?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-zemoBlue focus:ring-1 focus:ring-zemoBlue"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-sm shadow-orange-400/25">
                        Get Started <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default GlobalCTA;
