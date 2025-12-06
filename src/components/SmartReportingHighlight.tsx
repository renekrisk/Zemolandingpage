import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, TrendingUp, Shield, Users } from 'lucide-react';

const SmartReportingHighlight: React.FC = () => {
    const features = [
        {
            icon: Zap,
            title: 'Instant Reports',
            description: 'Auto-generate profit & loss, expense trends, payroll analytics, and more in real time.'
        },
        {
            icon: Users,
            title: 'Easy Setup',
            description: 'Plug in your M-Pesa, bank, and payroll accounts and go from zero to dashboard in minutes.'
        },
        {
            icon: TrendingUp,
            title: 'AI-Driven Alerts',
            description: 'Automatic insights on overspending, low margins, or unusual activity.'
        },
        {
            icon: Shield,
            title: 'Local Compliance',
            description: 'Designed for Kenyan tax and accounting systems.'
        },
        {
            icon: Check,
            title: 'Export Ready',
            description: 'One-click PDF and Excel exports for boardrooms, clients, and KRA.'
        }
    ];

    const comparisonData = [
        {
            feature: 'Built for African businesses',
            zemo: '✓ Yes',
            traditional: '✗ No',
            excel: '⚠ Heavy customization'
        },
        {
            feature: 'ERP integration',
            zemo: 'Seamless',
            traditional: 'Limited',
            excel: 'Manual inputs'
        },
        {
            feature: 'Cash flow forecasting',
            zemo: 'Real time',
            traditional: 'Available with add-ons',
            excel: 'Not included'
        },
        {
            feature: 'Scenario & budget modeling',
            zemo: 'Built-in',
            traditional: 'Advanced users only',
            excel: 'Manual setup'
        },
        {
            feature: 'Ease of use',
            zemo: 'Designed for non-tech users',
            traditional: 'Requires training',
            excel: 'High learning curve'
        },
        {
            feature: 'Local support',
            zemo: 'Nairobi-based',
            traditional: 'Offshore or email only',
            excel: 'No support'
        },
        {
            feature: 'Time to value',
            zemo: 'Days',
            traditional: 'Months',
            excel: 'Ongoing frustration'
        },
        {
            feature: 'Pricing for SMEs',
            zemo: 'Affordable',
            traditional: 'Enterprise-level',
            excel: 'High hidden time cost'
        }
    ];

    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Simplify your monthly reporting in 10 minutes
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600">
                        Join 500+ Kenyan businesses using Zemo to automate sales, expenses, and payroll reports in real time.
                    </p>
                </motion.div>

                {/* Why Choose Zemo Smart Reporting */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Why Choose Zemo Smart Reporting?
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                    <feature.icon size={24} className="text-gray-900" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Zemo vs Traditional Tools vs Manual Excel
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Feature</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Zemo</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Traditional Tools</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-600">Manual Excel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="border-t border-gray-100">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-green-600">{row.zemo}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{row.traditional}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{row.excel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Trust Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12 py-12 px-8 bg-white rounded-2xl border border-gray-200"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
                        <div className="text-sm text-gray-600">Kenyan Businesses</div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-gray-200" />
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-1">10min</div>
                        <div className="text-sm text-gray-600">Monthly Reporting</div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-gray-200" />
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-1">Real-time</div>
                        <div className="text-sm text-gray-600">Financial Insights</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SmartReportingHighlight;
