import React from 'react';
import Section from './Section';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
    const plans = [
        {
            name: 'LITE',
            subtitle: 'SUITABLE FOR STARTUPS & SMALL BUSINESSES',
            features: [
                'Up to 3 Employees',
                'Expense management',
                'Analytics & Budgeting'
            ],
        },
        {
            name: 'GROWTH',
            subtitle: 'IDEAL FOR GROWING BUSINESSES',
            highlight: true,
            features: [
                'EVERYTHING IN LITE',
                '&',
                'Up to 100 Employees',
                'Free Payroll',
                'Expense & Payroll reports',
                '24 hour support'
            ],
        },
        {
            name: 'ENTERPRISE',
            subtitle: 'TAILORED SOLUTIONS FOR LARGE ORGANIZATIONS',
            features: [
                'EVERYTHING IN GROWTH',
                '&',
                'Unlimited Employees',
                'ERP Integration',
                'Management Reporting',
                'Forecasting & Scenario Planning'
            ],
        }
    ];

    return (
        <Section id="pricing" className="bg-gray-50/50">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-gray-600">
                    Choose the plan that fits your business size and needs.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`
                            relative p-8 rounded-3xl border bg-white flex flex-col
                            ${plan.highlight
                                ? 'border-orange-300 shadow-xl scale-105 z-10'
                                : 'border-gray-100 shadow-sm hover:shadow-md transition-shadow'
                            }
                        `}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-zemoOrange to-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                                {plan.subtitle}
                            </p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feat, i) => (
                                <li key={i} className={`flex items-start gap-3 text-sm ${feat === '&' || feat.includes('EVERYTHING')
                                    ? 'text-zemoOrange font-bold justify-center'
                                    : 'text-gray-600'
                                    }`}>
                                    {feat !== '&' && !feat.includes('EVERYTHING') && (
                                        <Check size={16} className="text-zemoOrange flex-shrink-0 mt-0.5" />
                                    )}
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`
                                w-full py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2
                                ${plan.highlight
                                    ? 'bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white shadow-md shadow-orange-400/25'
                                    : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-zemoOrange hover:text-zemoOrange'
                                }
                            `}
                        >
                            Get Started <ArrowRight size={16} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-gray-500">
                    All plans include free updates and dedicated support.
                    <a href="#contact" className="text-zemoOrange hover:underline ml-1">Need help choosing?</a>
                </p>
            </div>
        </Section>
    );
};

export default Pricing;
