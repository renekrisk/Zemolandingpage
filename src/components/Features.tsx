import React from 'react';
import Section from './Section';
import { LayoutDashboard, Bell, Globe } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        {
            icon: LayoutDashboard,
            title: 'Smart Business Dashboard',
            desc: 'Get a bird\'s eye view of your entire financial health in one place.',
            gradient: 'from-zemoOrange/20 to-amber-500/10',
            iconColor: 'text-zemoOrange'
        },
        {
            icon: Bell,
            title: 'Real-Time Alerts',
            desc: 'Get notified instantly for every transaction and approval request.',
            gradient: 'from-zemoCyan/20 to-zemoBlue/10',
            iconColor: 'text-zemoCyan'
        },
        {
            icon: Globe,
            title: 'Designed for Kenya',
            desc: 'Built specifically for local tax laws, banks, and mobile money.',
            gradient: 'from-zemoBlue/20 to-zemoCyan/10',
            iconColor: 'text-zemoBlue'
        }
    ];

    return (
        <Section className="bg-white">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Built for Your Success
                </h2>
                <p className="text-lg text-gray-600">
                    Powerful features that make financial management effortless
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feat, idx) => (
                    <div
                        key={idx}
                        className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className={`relative w-14 h-14 bg-gradient-to-br ${feat.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}>
                            <feat.icon size={28} className={feat.iconColor} />
                            {/* Subtle glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900">
                            {feat.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {feat.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Decorative connecting elements */}
            <div className="hidden md:flex justify-center items-center gap-2 mt-12">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === 2 ? 'w-12 bg-gradient-to-r from-zemoOrange to-amber-500' : 'w-1.5 bg-gray-200'
                            }`}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Features;
