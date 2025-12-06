import React from 'react';
import { motion } from 'framer-motion';
import {
    DollarSign,
    TrendingUp,
    LayoutDashboard,
    Shield,
    Gauge,
    Eye,
    Zap,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

const Features: React.FC = () => {
    // Group features into main and supporting
    const mainFeatures = [
        {
            icon: DollarSign,
            title: 'Free Payroll',
            desc: 'Process unlimited employee salaries with zero transaction fees',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: TrendingUp,
            title: 'Expense Management',
            desc: 'Track every shilling spent across your business in real time',
            color: 'from-cyan-500 to-cyan-600'
        },
        {
            icon: LayoutDashboard,
            title: 'Smart Reporting',
            desc: 'Auto-generate profit & loss, expense trends, and payroll analytics',
            color: 'from-orange-500 to-orange-600'
        }
    ];

    const capabilities = [
        { icon: Shield, text: 'Policy Enforcement' },
        { icon: Gauge, text: 'Cash Flow Forecasting' },
        { icon: Eye, text: 'Real-time Visibility' },
        { icon: Zap, text: 'Lightning Fast' },
        { icon: CheckCircle, text: 'Always Accurate' },
        { icon: TrendingUp, text: 'Keep Moving Forward' }
    ];

    return (
        <section id="features" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose Zemo
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-zemoOrange via-zemoCyan to-zemoBlue rounded-full mx-auto mb-6" />
                    <p className="text-lg md:text-xl text-gray-600">
                        Run finance with clarity, speed, and confidence
                    </p>
                </div>

                {/* Main Features - Large Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {mainFeatures.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                            {/* Icon */}
                            <div className={`relative w-16 h-16 bg-gradient-to-br ${feat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                <feat.icon size={32} className="text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="relative text-2xl font-bold text-gray-900 mb-3">
                                {feat.title}
                            </h3>
                            <p className="relative text-gray-600 leading-relaxed">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Capabilities - Compact Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-3xl p-8 mb-12"
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                        Everything you need included
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {capabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
                            >
                                <cap.icon size={18} className="text-gray-700 group-hover:text-gray-900 transition-colors" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                                    {cap.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="#about"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/20 group"
                    >
                        Explore More Solutions
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
