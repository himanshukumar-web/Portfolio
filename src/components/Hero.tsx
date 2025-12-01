import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full glass-panel mb-6"
                    >
                        <span className="text-sm font-medium text-gradient-accent">
                            Available for Freelance
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Crafting <br />
                        <span className="text-gradient">Digital Experiences</span> <br />
                        That Matter
                    </h1>

                    <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
                        I build pixel-perfect, engaging, and accessible digital experiences.
                        Blending art with code to create the future of the web.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="group relative px-8 py-4 rounded-full bg-white text-black font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95">
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <button className="px-8 py-4 rounded-full glass-panel font-bold hover:bg-white/10 transition-colors">
                            Contact Me
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        {[Github, Linkedin, Twitter].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="p-3 rounded-full glass-panel hover:bg-white/10 transition-all hover:-translate-y-1"
                            >
                                <Icon className="w-5 h-5 text-white/80" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Content - 3D Glass Cards */}
                <motion.div
                    style={{ y: y2 }}
                    className="relative hidden md:block"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-20"
                    >
                        <div className="glass-card p-8 w-full max-w-md mx-auto aspect-square flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <div className="px-3 py-1 rounded-full glass-panel text-xs font-medium">
                                    UI/UX Design
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Modern Aesthetics</h3>
                                <p className="text-white/60 text-sm">
                                    Pushing the boundaries of web design with glassmorphism and fluid animations.
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl" />
                        </div>
                    </motion.div>

                    {/* Floating Elements behind */}
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute top-10 -right-10 z-10 glass-panel p-4 rounded-2xl animate-float-delayed"
                    >
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-2xl">
                            🎨
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            x: [0, -20, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute -bottom-10 -left-10 z-30 glass-panel p-4 rounded-2xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                ✓
                            </div>
                            <div>
                                <div className="text-xs text-white/60">Projects Completed</div>
                                <div className="text-lg font-bold">50+</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
