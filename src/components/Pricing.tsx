import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for small teams',
            cta: 'Start Free',
            features: [
                'Up to 3 employees',
                'Basic payroll',
                'Expense tracking',
                'Email support'
            ]
        },
        {
            name: 'Growth',
            description: 'For growing businesses',
            popular: true,
            cta: 'Get Started',
            features: [
                'Up to 100 employees',
                'Full payroll suite',
                'Advanced expense management',
                'Smart reporting & analytics',
                'Priority support',
                'API access'
            ]
        },
        {
            name: 'Enterprise',
            description: 'For large organizations',
            cta: 'Get Started',
            features: [
                'Unlimited employees',
                'Custom integrations',
                'Dedicated account manager',
                'SLA guarantees',
                'Custom contracts'
            ]
        }
    ];

    return (
        <section id="pricing" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Simple pricing
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Choose the plan that fits your business
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative p-8 rounded-2xl border-2 ${plan.popular
                                ? 'border-gray-900 shadow-lg'
                                : 'border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 text-white text-sm font-semibold rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-600">{plan.description}</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mt-0.5">
                                            <Check size={12} className="text-white" />
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/signup" className="w-full block">
                                <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.popular
                                    ? 'bg-gray-900 hover:bg-gray-800 text-white'
                                    : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200'
                                    }`}>
                                    {plan.cta}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
