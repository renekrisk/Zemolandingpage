import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Header } from '../components/ui/header';
import Footer from '../components/Footer';

const BookingPage: React.FC = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        company: '',
        question: '',
        frustration: '',
        source: ''
    });

    const frustrations = [
        'We rely on Excel or paper-based approvals',
        'I can\'t track spending in real time',
        'We often go over budget'
    ];

    const sources = [
        'Google search',
        'LinkedIn',
        'Facebook',
        'Twitter',
        'Referral',
        'Webinar',
        'Event',
        'Other'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Demo booking:', formData);
        // TODO: Integrate with actual booking system
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Stop losing track of business expenses
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Empower your team with a better way to control spending from petty cash to payroll. Book a 30-minute demo to see the platform in action.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left - Calendar Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 flex items-center justify-center"
                        >
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                                    <Calendar size={64} className="text-zemoOrange" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Schedule Your Demo
                                </h3>
                                <p className="text-gray-600">
                                    Pick a time that works for you
                                </p>
                            </div>
                        </motion.div>

                        {/* Right - Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Your Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Your Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                                        placeholder="Acme Inc."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Biggest expense frustration *
                                    </label>
                                    <select
                                        required
                                        value={formData.frustration}
                                        onChange={(e) => setFormData({ ...formData, frustration: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors bg-white"
                                    >
                                        <option value="">Select an option</option>
                                        {frustrations.map((frustration, idx) => (
                                            <option key={idx} value={frustration}>
                                                {frustration}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        How did you hear about us? *
                                    </label>
                                    <select
                                        required
                                        value={formData.source}
                                        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors bg-white"
                                    >
                                        <option value="">Select an option</option>
                                        {sources.map((source, idx) => (
                                            <option key={idx} value={source}>
                                                {source}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Any questions for us?
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={formData.question}
                                        onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors resize-none"
                                        placeholder="Tell us what you'd like to learn about..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-zemoOrange to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-500/20"
                                >
                                    Book Your Demo
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BookingPage;
