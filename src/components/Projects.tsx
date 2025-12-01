import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Aether Dashboard',
        description: 'A futuristic analytics dashboard featuring real-time data visualization and glassmorphic UI components.',
        tags: ['React', 'D3.js', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
    },
    {
        id: 2,
        title: 'Nebula Chat',
        description: 'Real-time messaging platform with end-to-end encryption and fluid message animations.',
        tags: ['TypeScript', 'Socket.io', 'Redis'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80'
    },
    {
        id: 3,
        title: 'Quantum Commerce',
        description: 'Next-generation e-commerce experience with 3D product previews and AR integration.',
        tags: ['Next.js', 'Three.js', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-gradient">Featured Projects</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        A showcase of my technical prowess and creative solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card overflow-hidden group flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
                                        <Github className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-white/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
