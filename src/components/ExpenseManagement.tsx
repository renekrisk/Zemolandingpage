import React from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingDown, Lock, BarChart2 } from 'lucide-react';

const ExpenseManagement: React.FC = () => {
    const features = [
        {
            icon: TrendingDown,
            title: 'Reduce Costs',
            desc: 'Cut unnecessary spending'
        },
        {
            icon: Lock,
            title: 'Spend Controls',
            desc: 'Set limits & rules'
        },
        {
            icon: BarChart2,
            title: 'Analytics',
            desc: 'Track every expense'
        }
    ];

    const benefits = [
        'Real-time expense approvals',
        'Automated categorization',
        'Multi-currency support',
        'Detailed spend analytics'
    ];

    return (
        <section id="expenses" className="relative bg-gradient-to-br from-cyan-500 via-cyan-400 to-blue-500 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image (reversed order) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative lg:order-1 order-2"
                    >
                        <div className="relative max-w-lg lg:max-w-xl mx-auto">
                            <motion.img
                                src="/assets/laptop-expense.png"
                                alt="Expense Dashboard"
                                className="w-full drop-shadow-2xl"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:order-2 order-1"
                    >
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            Smart Spending
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Control every shilling spent
                        </h2>

                        <p className="text-xl md:text-2xl text-cyan-50 mb-10 leading-relaxed">
                            Track and manage all business expenses in one powerful dashboard with real-time insights.
                        </p>

                        {/* Benefits */}
                        <div className="space-y-3 mb-10">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
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
                                    <div className="text-xs text-cyan-100">{feature.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExpenseManagement;
