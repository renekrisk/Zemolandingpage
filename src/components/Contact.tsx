import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-gray-50 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Let's talk
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-10">
                            Have questions? Our team is here to help you get started.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <Mail size={20} className="text-gray-900" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                                    <a href="mailto:hello@zemo.co.ke" className="text-gray-600 hover:text-gray-900">
                                        hello@zemo.co.ke
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <Phone size={20} className="text-gray-900" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                                    <a href="tel:+254700000000" className="text-gray-600 hover:text-gray-900">
                                        +254 700 000 000
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <MapPin size={20} className="text-gray-900" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 mb-1">Office</div>
                                    <p className="text-gray-600">
                                        Westlands, Nairobi<br />
                                        Kenya
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className="bg-white p-8 rounded-2xl border border-gray-200">
                            <div className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
