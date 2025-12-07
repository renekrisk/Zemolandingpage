import React from 'react';
import { Marquee } from './ui/marquee';

const TrustStrip: React.FC = () => {
    // Partner logos displayed in the marquee
    const partnerLogos = [
        '/assets/truststrip/bidco.png',
        '/assets/truststrip/brookside.png',
        '/assets/truststrip/cocacola.png',
        '/assets/truststrip/mpesa.png',
        '/assets/truststrip/tours.png',
        '/assets/truststrip/visa.png',
        '/assets/truststrip/zaribee.png'
    ];

    return (
        <section className="bg-white border-b border-gray-100">
            {/* Scrolling marquee that pauses on hover */}
            <Marquee pauseOnHover speed={40} className="py-4">
                {partnerLogos.map((logoPath, index) => (
                    <div
                        key={index}
                        className="relative h-16 w-32 mx-6 flex items-center justify-center"
                    >
                        <img
                            src={logoPath}
                            alt={`Partner ${index + 1}`}
                            className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default TrustStrip;
