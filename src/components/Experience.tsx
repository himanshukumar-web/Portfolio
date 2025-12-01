import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: 'Senior Frontend Developer',
        company: 'Tech Giants Inc.',
        period: '2023 - Present',
        description: 'Leading the frontend team in building next-gen web applications using React and WebGL.'
    },
    {
        id: 2,
        role: 'UI/UX Designer',
        company: 'Creative Studio',
        period: '2021 - 2023',
        description: 'Designed immersive user interfaces and design systems for Fortune 500 clients.'
    },
    {
        id: 3,
        role: 'Full Stack Developer',
        company: 'StartUp Hub',
        period: '2019 - 2021',
        description: 'Developed scalable full-stack solutions using Node.js and React.'
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot with Pulse */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 mt-1.5">
                                    <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`glass-card p-6 hover:border-purple-500/50 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <div className={`flex items-center gap-2 text-purple-400 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                            }`}>
                                            <Briefcase className="w-4 h-4" />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2">{exp.role}</h3>

                                        <div className={`flex items-center gap-2 text-white/50 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                            }`}>
                                            <Calendar className="w-3 h-3" />
                                            <span>{exp.period}</span>
                                        </div>

                                        <p className="text-white/70 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
