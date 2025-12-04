import React from 'react';
import Section from './Section';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FreePayroll: React.FC = () => {
    const features = [
        'Automated Payslips',
        'KRA and NSSF Compliant',
        'Track Benefits',
        'Speed & Efficiency',
        'Secure',
        '100% Compliance Guarantee'
    ];

    return (
        <Section id="payroll" className="bg-gray-50/50">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-zemoBlue text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                        Free Payroll
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Why over 500 Kenyan Businesses Switched to Zemo Payroll—for Free
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Simplify payroll processing, tax compliance and benefits management with our free, all-in-one platform.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {features.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
                        <h4 className="font-bold text-gray-900 mb-4">Easy 3-Step Payroll</h4>
                        <div className="flex flex-col sm:flex-row gap-6 text-sm">
                            {['Sign up', 'Add employees', 'Pay in minutes'].map((step, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-zemoBlue text-white flex items-center justify-center font-bold text-xs">
                                        {i + 1}
                                    </span>
                                    <span className="text-gray-600 font-medium">{step}</span>
                                    {i < 2 && <span className="hidden sm:block text-gray-300">→</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="group flex items-center gap-2 text-zemoBlue font-semibold hover:text-blue-700 transition-colors">
                        Learn more about Payroll
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 flex justify-center"
                >
                    <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-2">
                        <div className="bg-gray-50 rounded-[2rem] overflow-hidden aspect-[4/5] relative">
                            {/* Simple UI Mockup */}
                            <div className="absolute top-0 left-0 w-full p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                    <div className="w-20 h-2 bg-gray-200 rounded-full" />
                                </div>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-50 rounded-full" />
                                                <div className="space-y-1">
                                                    <div className="w-24 h-2 bg-gray-100 rounded-full" />
                                                    <div className="w-16 h-2 bg-gray-50 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="w-12 h-4 bg-green-50 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial Bubble */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-gray-100">
                                <p className="text-sm text-gray-600 italic mb-3">"Zemo has completely transformed how we handle payroll."</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-zemoBlue rounded-full flex items-center justify-center text-[10px] text-white font-bold">JN</div>
                                    <span className="text-xs font-bold text-gray-900">John Njiru</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default FreePayroll;
