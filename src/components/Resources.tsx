import React from 'react';
import Section from './Section';
import { ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
    const posts = [
        {
            title: 'KRA Tax Updates 2024',
            excerpt: 'Everything you need to know about the new tax regulations affecting payroll.',
            date: 'Oct 12, 2024'
        },
        {
            title: 'Managing Remote Teams',
            excerpt: 'Best practices for handling expenses and payroll for distributed teams.',
            date: 'Sep 28, 2024'
        },
        {
            title: 'Financial Health Check',
            excerpt: '5 key metrics every finance manager should be tracking weekly.',
            date: 'Sep 15, 2024'
        }
    ];

    return (
        <Section id="resources" className="bg-gray-50/50">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Insights</h2>
                    <p className="text-gray-600">Expert advice for finance leaders.</p>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-zemoBlue font-semibold hover:text-blue-700">
                    View all <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                            <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="text-xs text-gray-500 mb-2">{post.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-zemoBlue transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Resources;
