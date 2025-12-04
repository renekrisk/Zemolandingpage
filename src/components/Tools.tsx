import React from 'react';
import Section from './Section';
import { Calculator } from 'lucide-react';

const Tools: React.FC = () => {
    return (
        <Section id="tools">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Business Tools</h2>
                <p className="text-gray-600">
                    Handy calculators to help you plan better.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {['Break-Even Calculator', 'PAYE Calculator', 'VAT Calculator'].map((tool, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-sm transition-all cursor-pointer flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-zemoBlue">
                            <Calculator size={20} />
                        </div>
                        <span className="font-bold text-gray-900">{tool}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Tools;
