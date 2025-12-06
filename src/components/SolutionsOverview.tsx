import React from 'react';
import { motion } from 'framer-motion';
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
        <section id="solutions" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything you need to manage business finance
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        A complete suite of tools designed to work together seamlessly.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((sol, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                                {/* Subtle background */}
                                <div className="absolute inset-0 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors" />
                                {/* Icon */}
                                <sol.icon size={28} className="relative z-10 text-gray-900" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{sol.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {sol.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsOverview;
