import React from 'react';
import { motion } from 'framer-motion';
import { Check, BarChart3, TrendingUp, PieChart } from 'lucide-react';

const SmartReporting: React.FC = () => {
    const features = [
        {
            icon: BarChart3,
            title: 'Custom Dashboards',
            desc: 'Build your own views'
        },
        {
            icon: TrendingUp,
            title: 'Trend Analysis',
            desc: 'Spot patterns early'
        },
        {
            icon: PieChart,
            title: 'Budget Tracking',
            desc: 'Stay on target'
        }
    ];

    const benefits = [
        'Automated report generation',
        'Export to Excel & PDF',
        'Real-time data sync',
        'Customizable metrics'
    ];

    return (
        <section id="reporting" className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            Powerful Insights
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            See your financial story unfold
                        </h2>

                        <p className="text-xl md:text-2xl text-orange-50 mb-10 leading-relaxed">
                            Deep analytics and beautiful reports that help you make smarter business decisions.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-3 mb-10">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                        <Check size={14} className="text-white" />
                                    </div>
                                    <span className="text-lg text-white/90">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <feature.icon size={24} className="text-white" />
                                    </div>
                                    <div className="text-sm font-semibold mb-1">{feature.title}</div>
                                    <div className="text-xs text-orange-100">{feature.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative max-w-md lg:max-w-lg mx-auto">
                            <motion.img
                                src="/assets/reports-mockup.png"
                                alt="Reports Dashboard"
                                className="w-full drop-shadow-2xl"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SmartReporting;
