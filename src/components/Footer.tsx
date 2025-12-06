import React from 'react';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const footerLinks = {
        product: [
            { label: 'Payroll', href: '#' },
            { label: 'Expenses', href: '#' },
            { label: 'Reporting', href: '#' },
            { label: 'Pricing', href: '#pricing' }
        ],
        company: [
            { label: 'About Us', href: '#about' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Contact', href: '#contact' }
        ],
        legal: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Security', href: '#' }
        ]
    };

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Mail, href: 'mailto:hello@zemo.co.ke', label: 'Email' }
    ];

    return (
        <footer className="relative bg-gray-900 text-gray-400">
            {/* Decorative gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zemoOrange/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-6 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <a href="#" className="inline-block mb-6">
                            <img
                                src="/assets/zemo-logo.png"
                                alt="Zemo"
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </a>
                        <p className="text-sm leading-relaxed mb-6">
                            Zero Effort. Maximum Output. The all-in-one finance platform for Kenyan businesses.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-zemoOrange hover:to-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                >
                                    <social.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-3 text-sm">
                            {footerLinks.product.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-zemoOrange transition-all duration-300" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            {footerLinks.company.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-zemoOrange transition-all duration-300" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            {footerLinks.legal.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-zemoOrange transition-all duration-300" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm mb-4">Get updates on new features</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-zemoOrange focus:ring-0 text-white placeholder-gray-500 text-sm"
                            />
                            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white transition-all">
                                <Mail size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© 2024 Zemocard. All rights reserved.</p>
                    <p className="text-gray-500">
                        Made with <span className="text-red-500">❤</span> in Nairobi, Kenya
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
