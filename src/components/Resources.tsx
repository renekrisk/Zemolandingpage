import React from 'react';
import Section from './Section';
import { ArrowRight, Calendar, BookOpen, TrendingUp } from 'lucide-react';

const Resources: React.FC = () => {
    const posts = [
        {
            title: 'KRA Tax Updates 2024',
            excerpt: 'Everything you need to know about the new tax regulations affecting payroll.',
            date: 'Oct 12, 2024',
            icon: TrendingUp,
            gradient: 'from-zemoOrange to-amber-500'
        },
        {
            title: 'Managing Remote Teams',
            excerpt: 'Best practices for handling expenses and payroll for distributed teams.',
            date: 'Sep 28, 2024',
            icon: BookOpen,
            gradient: 'from-zemoCyan to-zemoBlue'
        },
        {
            title: 'Financial Health Check',
            excerpt: '5 key metrics every finance manager should be tracking weekly.',
            date: 'Sep 15, 2024',
            icon: Calendar,
            gradient: 'from-zemoBlue to-purple-600'
        }
    ];

    return (
        <Section id="resources" className="bg-gradient-to-b from-gray-50/50 to-white">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <div className="inline-block px-4 py-1.5 bg-zemoCyan/10 text-zemoCyan rounded-full text-sm font-semibold mb-4">
                        Resources
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest Insights</h2>
                    <p className="text-lg text-gray-600">Expert advice for finance leaders.</p>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-zemoOrange font-semibold hover:gap-3 transition-all group">
                    View all <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                    <article key={idx} className="group cursor-pointer">
                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl mb-6 overflow-hidden border border-gray-100">
                            {/* Icon overlay instead of image placeholder */}
                            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${post.gradient} bg-opacity-5 group-hover:scale-105 transition-transform duration-500`}>
                                <div className={`w-20 h-20 bg-gradient-to-br ${post.gradient} bg-opacity-10 rounded-2xl flex items-center justify-center`}>
                                    <post.icon size={40} className={`bg-gradient-to-br ${post.gradient} bg-clip-text text-transparent`} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                            <Calendar size={14} />
                            {post.date}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-zemoOrange transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-zemoOrange group-hover:gap-3 transition-all">
                            Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
};

export default Resources;
