import React from 'react';
import Section from './Section';
import { Users, Receipt, BarChart3, PieChart } from 'lucide-react';

const SolutionsOverview: React.FC = () => {
    const solutions = [
        {
            icon: Users,
            title: 'Free Payroll',
            desc: 'Automated, compliant, and completely free for Kenyan businesses.'
        },
        {
            icon: Receipt,
            title: 'Expense Management',
            desc: 'Control spend with smart cards and real-time tracking.'
        },
        {
            icon: BarChart3,
            title: 'Smart Reporting',
            desc: 'Deep insights into your financial data instantly.'
        },
        {
            icon: PieChart,
            title: 'Management Reporting',
            desc: 'Customizable reports for better decision making.'
        }
    ];

    return (
        <Section id="solutions">
            <div className="mb-16 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Everything you need to manage business finance.
                </h2>
                <p className="text-lg text-gray-600">
                    A complete suite of tools designed to work together seamlessly.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {solutions.map((sol, idx) => (
                    <div
                        key={idx}
                        className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-sm transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-zemoBlue mb-6 group-hover:scale-110 transition-transform">
                            <sol.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {sol.desc}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default SolutionsOverview;
