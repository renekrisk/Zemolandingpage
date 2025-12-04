import React from 'react';
import Section from './Section';
import { LayoutDashboard, Bell, Globe } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        {
            icon: LayoutDashboard,
            title: 'Smart Business Dashboard',
            desc: 'Get a bird\'s eye view of your entire financial health in one place.'
        },
        {
            icon: Bell,
            title: 'Real-Time Alerts',
            desc: 'Get notified instantly for every transaction and approval request.'
        },
        {
            icon: Globe,
            title: 'Designed for Kenya',
            desc: 'Built specifically for local tax laws, banks, and mobile money.'
        }
    ];

    return (
        <Section className="bg-white">
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feat, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-zemoBlue shadow-sm mb-6">
                            <feat.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
                        <p className="text-gray-600">
                            {feat.desc}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Features;
