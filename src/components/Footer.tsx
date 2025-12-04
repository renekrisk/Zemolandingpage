import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="inline-block mb-6">
                            <img
                                src="/assets/zemo-logo.png"
                                alt="Zemo"
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </a>
                        <p className="text-sm leading-relaxed">
                            Zero Effort. Maximum Output. The all-in-one finance platform for Kenyan businesses.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Payroll</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Expenses</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Reporting</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2024 Zemocard. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                        <a href="#" className="hover:text-white">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
