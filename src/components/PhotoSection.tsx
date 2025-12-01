import { motion } from 'framer-motion';

const photos = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
        title: 'Neon City',
        category: 'Urban'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80',
        title: 'Cyber Punk',
        category: 'Portrait'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80',
        title: 'Future Tech',
        category: 'Abstract'
    }
];

const PhotoSection: React.FC = () => {
    return (
        <section id="photos" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-gradient">Visual Stories</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Capturing moments through a digital lens.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            {/* Glass Frame Overlay */}
                            <div className="absolute inset-0 border-8 border-white/5 rounded-3xl z-20 pointer-events-none" />

                            {/* Image */}
                            <img
                                src={photo.url}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-8">
                                <span className="text-cyan-400 text-sm font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {photo.category}
                                </span>
                                <h3 className="text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {photo.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;
