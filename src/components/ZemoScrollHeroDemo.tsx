import { ZemoScrollHero } from './ui/scroll-expansion-hero';
import { ArrowRight } from 'lucide-react';

export const ZemoScrollHeroDemo = () => {
    return (
        <ZemoScrollHero>
            {/* Content that appears after scroll expansion */}
            <div className='max-w-4xl mx-auto text-center space-y-8'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-zemoOrange to-amber-500 bg-clip-text text-transparent'>
                    Transform Your Business with Zemo
                </h2>

                <p className='text-lg text-gray-700 leading-relaxed'>
                    Experience the power of seamless expense management and payroll automation.
                    Zemo brings enterprise-grade financial tools to businesses of all sizes.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'>
                    <button className='px-8 py-4 bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-zemoOrange/30'>
                        Get Started <ArrowRight size={20} />
                    </button>
                    <button className='px-8 py-4 border-2 border-gray-300 hover:border-zemoOrange hover:bg-zemoOrange/5 text-gray-900 font-semibold rounded-xl transition-all'>
                        Learn More
                    </button>
                </div>

                {/* Feature Cards */}
                <div className='grid md:grid-cols-3 gap-6 pt-12'>
                    <div className='p-6 bg-white rounded-2xl border border-gray-200 hover:border-zemoOrange/50 hover:shadow-xl transition-all'>
                        <div className='w-12 h-12 bg-gradient-to-br from-zemoOrange/20 to-amber-500/10 rounded-lg mb-4 flex items-center justify-center'>
                            <span className='text-2xl'>💳</span>
                        </div>
                        <h3 className='font-bold text-xl mb-2'>Smart Expense Tracking</h3>
                        <p className='text-gray-600'>Automated expense categorization and real-time reporting</p>
                    </div>

                    <div className='p-6 bg-white rounded-2xl border border-gray-200 hover:border-zemoCyan/50 hover:shadow-xl transition-all'>
                        <div className='w-12 h-12 bg-gradient-to-br from-zemoCyan/20 to-zemoBlue/10 rounded-lg mb-4 flex items-center justify-center'>
                            <span className='text-2xl'>📊</span>
                        </div>
                        <h3 className='font-bold text-xl mb-2'>Instant Analytics</h3>
                        <p className='text-gray-600'>Real-time insights and financial forecasting powered by AI</p>
                    </div>

                    <div className='p-6 bg-white rounded-2xl border border-gray-200 hover:border-zemoOrange/50 hover:shadow-xl transition-all'>
                        <div className='w-12 h-12 bg-gradient-to-br from-zemoBlue/20 to-zemoCyan/10 rounded-lg mb-4 flex items-center justify-center'>
                            <span className='text-2xl'>⚡</span>
                        </div>
                        <h3 className='font-bold text-xl mb-2'>Automated Payroll</h3>
                        <p className='text-gray-600'>Effortless payroll processing with zero manual work</p>
                    </div>
                </div>
            </div>
        </ZemoScrollHero>
    );
};
