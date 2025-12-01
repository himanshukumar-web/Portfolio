import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Let's Create Something <br />
                            <span className="text-gradient">Extraordinary</span>
                        </h2>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Whether you have a question, a project idea, or just want to say hi,
                            I'm always open to discussing new opportunities and innovative ideas.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-purple-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/50">Email Me</div>
                                    <div className="font-medium">hello@portfolio.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-cyan-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/50">Call Me</div>
                                    <div className="font-medium">+1 (555) 123-4567</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-pink-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/50">Location</div>
                                    <div className="font-medium">San Francisco, CA</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    <p>© 2024 Portfolio. Designed with Liquid Glass aesthetics.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
