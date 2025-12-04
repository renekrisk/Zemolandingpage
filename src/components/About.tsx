import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Built for Kenyan Businesses
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        At Zemo, we believe that managing business finances should be effortless. We are a team of finance and tech experts dedicated to simplifying payroll and expense management for African businesses.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our mission is to empower finance teams with tools that save time, ensure compliance, and provide actionable insights.
                    </p>
                </div>
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Zemo?</h3>
                    <ul className="space-y-4">
                        {[
                            'Local Support Team based in Nairobi',
                            'Bank-grade Security',
                            'Seamless M-Pesa Integration',
                            'Continuous Updates & Improvements'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 bg-zemoYellow rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default About;
