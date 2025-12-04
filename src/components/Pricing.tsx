import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
    const plans = [
        {
            name: 'LITE',
            price: 'Free',
            desc: 'Forever.',
            features: ['Payroll for up to 5 employees', 'Basic Expense Tracking', 'Standard Reports']
        },
        {
            name: 'GROWTH',
            price: 'KES 2,500',
            period: '/month',
            highlight: true,
            features: ['Payroll for up to 50 employees', 'Advanced Expense Management', 'Smart Reporting', 'Priority Support']
        },
        {
            name: 'ENTERPRISE',
            price: 'Custom',
            desc: 'Contact Sales',
            features: ['Unlimited Payroll', 'Custom Integrations', 'Dedicated Account Manager', 'SLA Support']
        }
    ];

    return (
        <Section id="pricing" className="bg-gray-50/50">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-gray-600">
                    Start for free, upgrade as you grow. No hidden fees.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`
                            relative p-8 rounded-3xl border bg-white flex flex-col
                            ${plan.highlight
                                ? 'border-yellow-300 shadow-lg scale-105 z-10'
                                : 'border-gray-100 shadow-sm'
                            }
                        `}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                {plan.period && <span className="text-gray-500">{plan.period}</span>}
                            </div>
                            {plan.desc && <p className="text-gray-500 mt-2">{plan.desc}</p>}
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`
                                w-full py-3 rounded-full font-semibold transition-all
                                ${plan.highlight
                                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 shadow-sm shadow-yellow-400/20'
                                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                                }
                            `}
                        >
                            Choose {plan.name}
                        </button>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Pricing;
