import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Bell,
    Globe,
    DollarSign,
    TrendingUp,
    Shield,
    Zap,
    Eye,
    Target,
    Gauge,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        {
            icon: DollarSign,
            title: 'Free Payroll',
            desc: 'Process unlimited employee salaries with zero transaction fees'
        },
        {
            icon: TrendingUp,
            title: 'Expense Management',
            desc: 'Track every shilling spent across your business in real time'
        },
        {
            icon: LayoutDashboard,
            title: 'Smart Reporting',
            desc: 'Auto-generate profit & loss, expense trends, and payroll analytics'
        },
        {
            icon: Bell,
            title: 'Management Reporting',
            desc: 'Executive dashboards with KPIs that matter to your business'
        },
        {
            icon: Shield,
            title: 'Policy Enforcement',
            desc: 'Set spending limits and approval workflows automatically'
        },
        {
            icon: Gauge,
            title: 'Cash Flow Forecasting',
            desc: 'Predict future cash positions and avoid shortfalls'
        },
        {
            icon: Eye,
            title: 'Run Finance with Clarity',
            desc: 'See your complete financial picture in one simple dashboard'
        },
        {
            icon: Zap,
            title: 'Run Finance with Speed',
            desc: 'Automate tedious tasks and close books 10x faster'
        },
        {
            icon: CheckCircle,
            title: 'Run Finance with Confidence',
            desc: 'Accurate data and compliance built into every transaction'
        },
        {
            icon: Target,
            title: 'Real-time Visibility into Spending',
            desc: 'Know exactly where your money is going, as it happens'
        },
        {
            icon: Target,
            title: 'Align Decisions',
            desc: 'Get everyone on the same page with shared financial insights'
        },
        {
            icon: TrendingUp,
            title: 'Keep Business Moving Forward',
            desc: 'Never let slow finance processes hold you back'
        }
    ];

    return (
        <section id="features" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Choose Zemo
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Everything you need to manage business finance with clarity, speed, and confidence
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-gray-300 group-hover:shadow transition-all">
                                    <feat.icon size={24} className="text-gray-900" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {feat.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feat.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="#about"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors group"
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
