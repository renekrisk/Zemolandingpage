import React from 'react';

const TrustStrip: React.FC = () => {
    const companies = [
        'Coca-Cola',
        'M-Pesa',
        'Visa',
        'Absa',
        'Luton Hospital',
        'Enzaribe',
        'Brookside',
        'Bidco',
        'Credit Bank'
    ];

    return (
        <section className="bg-gray-50 py-12 overflow-hidden border-t border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-medium mb-8">
                    <span className="bg-gradient-to-r from-zemoOrange via-zemoCyan to-zemoBlue bg-clip-text text-transparent">
                        Trusted by 500+ businesses across Kenya
                    </span>
                </p>

                <div className="relative">
                    <div className="flex gap-12 animate-marquee">
                        {[...companies, ...companies].map((company, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 px-8 py-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                            >
                                <span className="text-gray-600 font-medium whitespace-nowrap">
                                    {company}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
