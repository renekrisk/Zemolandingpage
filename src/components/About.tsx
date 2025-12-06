import React from 'react';
import Section from './Section';
import { MapPin, Shield, Smartphone, Zap } from 'lucide-react';

const About: React.FC = () => {
    const benefits = [
        { icon: MapPin, text: 'Local Support Team based in Nairobi' },
        { icon: Shield, text: 'Bank-grade Security' },
        { icon: Smartphone, text: 'Seamless M-Pesa Integration' },
        { icon: Zap, text: 'Continuous Updates & Improvements' }
    ];

    return (
        <Section id="about" className="bg-white">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Text Content */}
                <div>
                    <div className="inline-block px-4 py-1.5 bg-zemoOrange/10 text-zemoOrange rounded-full text-sm font-semibold mb-6">
                        About Zemo
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Built for Kenyan Businesses
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                        At Zemo, we believe that managing business finances should be effortless. We are a team of finance and tech experts dedicated to simplifying payroll and expense management for African businesses.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Our mission is to empower finance teams with tools that save time, ensure compliance, and provide actionable insights.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zemoOrange to-amber-500 bg-clip-text text-transparent mb-2">
                                500+
                            </div>
                            <div className="text-sm text-gray-600">Companies</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zemoCyan to-zemoBlue bg-clip-text text-transparent mb-2">
                                99%
                            </div>
                            <div className="text-sm text-gray-600">Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zemoBlue to-purple-600 bg-clip-text text-transparent mb-2">
                                24/7
                            </div>
                            <div className="text-sm text-gray-600">Support</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Benefits Card */}
                <div className="relative">
                    {/* Decorative gradient orb */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-zemoOrange/20 to-zemoCyan/10 rounded-full blur-3xl -z-10" />

                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Why Choose Zemo?
                        </h3>
                        <ul className="space-y-6">
                            {benefits.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-zemoOrange/20 to-amber-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={24} className="text-zemoOrange" />
                                    </div>
                                    <div className="flex-1 pt-2">
                                        <p className="text-base md:text-lg font-medium text-gray-900">
                                            {item.text}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Decorative accent */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-zemoCyan/10 to-transparent rounded-tl-3xl" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
