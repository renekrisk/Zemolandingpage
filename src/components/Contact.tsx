import React from 'react';
import Section from './Section';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <Section id="contact" className="bg-gray-50/50">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Have questions? Our team is here to help you get started.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-zemoBlue mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Visit Us</h4>
                                <p className="text-gray-600">Westlands, Nairobi, Kenya</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-zemoBlue mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Email Us</h4>
                                <p className="text-gray-600">hello@zemo.co.ke</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-zemoBlue mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Call Us</h4>
                                <p className="text-gray-600">+254 700 000 000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-zemoBlue focus:ring-0 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-zemoBlue focus:ring-0 transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-zemoBlue focus:ring-0 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-zemoBlue focus:ring-0 transition-all" />
                        </div>
                        <button className="w-full py-4 bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-bold rounded-xl transition-all shadow-sm shadow-orange-400/25">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
