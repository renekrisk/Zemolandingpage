import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Header } from '../components/ui/header';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
    const posts = [
        {
            title: '5 Ways to Reduce Business Expenses in Kenya',
            excerpt: 'Practical tips for Kenyan businesses to cut costs without sacrificing quality.',
            date: 'December 1, 2024',
            category: 'Finance Tips',
            image: '/assets/blog-1.jpg'
        },
        {
            title: 'Understanding Kenyan Payroll Taxes in 2024',
            excerpt: 'A comprehensive guide to PAYE, NSSF, and NHIF deductions for employers.',
            date: 'November 28, 2024',
            category: 'Payroll',
            image: '/assets/blog-2.jpg'
        },
        {
            title: 'Cash Flow Management for Small Businesses',
            excerpt: 'How to maintain healthy cash flow and avoid common pitfalls.',
            date: 'November 25, 2024',
            category: 'Finance Tips',
            image: '/assets/blog-3.jpg'
        },
        {
            title: 'The Benefits of Automated Expense Tracking',
            excerpt: 'Why manual expense tracking is costing your business more than you think.',
            date: 'November 20, 2024',
            category: 'Automation',
            image: '/assets/blog-4.jpg'
        },
        {
            title: 'How to Choose the Right Accounting Software',
            excerpt: 'Key features to look for when selecting financial management tools.',
            date: 'November 15, 2024',
            category: 'Technology',
            image: '/assets/blog-5.jpg'
        },
        {
            title: 'Financial Reporting Best Practices',
            excerpt: 'Create reports that actually help you make better business decisions.',
            date: 'November 10, 2024',
            category: 'Reporting',
            image: '/assets/blog-6.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Zemo Blog
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Financial insights, tips, and guides for Kenyan businesses
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                            >
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Calendar size={48} className="text-gray-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-gray-500">{post.date}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-zemoOrange transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-zemoOrange font-semibold text-sm group-hover:gap-2 transition-all">
                                        Read more
                                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
