import React from 'react';

const TrustStrip: React.FC = () => {
    return (
        <section className="py-10 border-b border-gray-100 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <p className="text-sm font-semibold text-gray-500 whitespace-nowrap">
                    Trusted by over 500 finance teams
                </p>

                <div className="flex-1 overflow-hidden relative w-full">
                    <div className="flex gap-12 items-center animate-scroll whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="h-8 w-24 bg-gray-200 rounded flex-shrink-0" />
                        ))}
                        {/* Duplicate for seamless scroll if we added animation, keeping static for now to be safe or simple marquee */}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={`dup-${i}`} className="h-8 w-24 bg-gray-200 rounded flex-shrink-0 md:hidden" />
                        ))}
                    </div>
                    {/* Fade edges */}
                    <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent" />
                    <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
