import React from 'react';
import Section from './Section';
import { Calculator, Sparkles, TrendingUp } from 'lucide-react';

const Tools: React.FC = () => {
    const tools = [
        {
            name: 'Break-Even Calculator',
            icon: TrendingUp,
            desc: 'Calculate when your business will break even',
            gradient: 'from-zemoOrange to-amber-500'
        },
        {
            name: 'PAYE Calculator',
            icon: Calculator,
            desc: 'Compute PAYE tax for employees',
            gradient: 'from-zemoCyan to-zemoBlue'
        },
        {
            name: 'VAT Calculator',
            icon: Sparkles,
            desc: 'Quick VAT calculations for invoices',
            gradient: 'from-zemoBlue to-purple-600'
        }
    ];

    return (
        <Section id="tools" className="bg-white">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 bg-zemoBlue/10 text-zemoBlue rounded-full text-sm font-semibold mb-6">
                    Free Tools
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Free Business Tools
                </h2>
                <p className="text-lg text-gray-600">
                    Handy calculators to help you plan better.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {tools.map((tool, idx) => (
                    <div
                        key={idx}
                        className="group p-6 rounded-2xl border-2 border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                    >
                        <div className={`w-14 h-14 bg-gradient-to-br ${tool.gradient} bg-opacity-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <tool.icon size={28} className={`bg-gradient-to-br ${tool.gradient} bg-clip-text text-transparent`} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{tool.name}</h3>
                        <p className="text-sm text-gray-600">{tool.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Tools;
