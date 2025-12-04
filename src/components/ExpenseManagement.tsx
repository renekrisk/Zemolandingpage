import React from 'react';
import Section from './Section';
import { ShieldCheck, Zap, Receipt, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const ExpenseManagement: React.FC = () => {
    return (
        <Section id="expenses">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-2">
                        <div className="bg-zemoBlue rounded-[2rem] overflow-hidden aspect-[4/5] relative text-white p-8">
                            <div className="mb-8">
                                <div className="text-white/60 text-sm mb-1">Total Spend</div>
                                <div className="text-4xl font-bold">KES 450k</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                                    <div className="text-white/60 text-xs mb-1">Limit</div>
                                    <div className="font-semibold">500k</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                                    <div className="text-white/60 text-xs mb-1">Available</div>
                                    <div className="font-semibold">50k</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Recent</div>
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                                <Receipt size={14} />
                                            </div>
                                            <div className="w-20 h-2 bg-white/20 rounded-full" />
                                        </div>
                                        <div className="w-12 h-2 bg-white/20 rounded-full" />
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial Bubble */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white text-gray-900 p-4 rounded-2xl shadow-lg">
                                <p className="text-sm italic mb-3">"We've cut our expense processing time by 80%."</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-zemoYellow text-zemoBlue rounded-full flex items-center justify-center text-[10px] font-bold">CS</div>
                                    <span className="text-xs font-bold">Chris Sang</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <div>
                    <div className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                        Expense Management
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Stop Losing Track of Business Expenses
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Empower your team with spend limits, real-time tracking, and instant approvals – from petty cash to payroll, all in one Kenyan platform.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        {[
                            'Smart Corporate Cards',
                            'Petty Cash Controls',
                            'One Dashboard, All Expenses',
                            'Auto-Reconciliation',
                            'Fraud Protection'
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-zemoYellow" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-6">Why Top Brands use Zemo</h4>
                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                            {[
                                { icon: ShieldCheck, text: 'Total Spend Control' },
                                { icon: Zap, text: 'Instant Approvals' },
                                { icon: Receipt, text: 'Snap & Auto-Match' },
                                { icon: CreditCard, text: 'Works with M-Pesa' }
                            ].map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                    <feat.icon size={18} className="text-zemoBlue" />
                                    {feat.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ExpenseManagement;
