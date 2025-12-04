import React from 'react';
import Section from './Section';
import { Check, X } from 'lucide-react';

const SmartReporting: React.FC = () => {
    return (
        <Section id="reporting" dark className="relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6 backdrop-blur-sm">
                        Smart Reporting
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Make Decisions Based on Data, Not Guesswork
                    </h2>
                    <p className="text-lg text-blue-100/80">
                        Real-time financial insights that help you optimize spending and grow your business.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
                    <div className="grid grid-cols-3 p-6 border-b border-white/10 text-sm font-bold text-white/60 uppercase tracking-wider">
                        <div className="col-span-1">Feature</div>
                        <div className="col-span-1 text-center">Traditional Way</div>
                        <div className="col-span-1 text-center text-zemoYellow">Zemo Way</div>
                    </div>

                    {[
                        { feature: 'Data Updates', old: 'Monthly / Quarterly', new: 'Real-Time' },
                        { feature: 'Expense Tracking', old: 'Manual Entry', new: 'Automated' },
                        { feature: 'Error Rate', old: 'High Risk', new: 'Zero Errors' },
                        { feature: 'Report Generation', old: 'Days', new: 'Seconds' },
                    ].map((row, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                            <div className="col-span-1 font-medium text-white">{row.feature}</div>
                            <div className="col-span-1 text-center text-white/60">{row.old}</div>
                            <div className="col-span-1 text-center font-bold text-white flex items-center justify-center gap-2">
                                <Check size={16} className="text-zemoYellow" /> {row.new}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur rounded-full p-2 pr-6">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-zemoBlue font-bold">JO</div>
                        <div className="text-left">
                            <div className="text-sm font-bold text-white">Jack Onyango</div>
                            <div className="text-xs text-blue-200">Director, TechSolutions</div>
                        </div>
                    </div>
                    <p className="mt-4 text-blue-100/80 italic max-w-lg mx-auto">
                        "The reporting feature alone saved us 20 hours a month in reconciliation."
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default SmartReporting;
