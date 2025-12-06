import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, PieChart, FileText, DollarSign, Percent } from 'lucide-react';
import { Header } from '../components/ui/header';
import Footer from '../components/Footer';

const ToolsPage: React.FC = () => {
    const tools = [
        {
            name: 'Break-even Calculator',
            icon: TrendingUp,
            description: 'Calculate your break-even point and profit margins instantly',
            link: '#breakeven'
        },
        {
            name: 'Cash Flow Calculator',
            icon: DollarSign,
            description: 'Forecast and track your business cash flow with precision',
            link: '#cashflow'
        },
        {
            name: 'Profit Analyzer',
            icon: PieChart,
            description: 'Analyze profitability across products and services',
            link: '#profit'
        },
        {
            name: 'Profit & Loss Analyzer',
            icon: FileText,
            description: 'Generate detailed P&L statements instantly',
            link: '#pl'
        },
        {
            name: 'Expense Analyzer',
            icon: Calculator,
            description: 'Track and categorize all business expenses',
            link: '#expense'
        },
        {
            name: 'Net Pay Calculator',
            icon: Percent,
            description: 'Calculate employee net pay after all deductions',
            link: '#netpay'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
                            Free Tools
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Free Business Calculators
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Essential financial tools to help you make smarter business decisions
                        </p>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool, idx) => (
                            <motion.a
                                key={idx}
                                href={tool.link}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-zemoOrange to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <tool.icon size={28} className="text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {tool.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {tool.description}
                                </p>

                                {/* Arrow */}
                                <div className="flex items-center text-zemoOrange font-semibold text-sm group-hover:gap-2 transition-all">
                                    Try it now
                                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ToolsPage;
