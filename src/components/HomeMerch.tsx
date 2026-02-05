import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const HomeMerch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="block py-20 md:py-32 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : { opacity: 1 }}
        className="container mx-auto px-4 md:px-6"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-leaf mb-3 md:mb-4 px-4">
            Bring the Ritual Home
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Curated gift sets and artisan teaware for your private sanctuary.
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Column 1: The Gift */}
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl">
              <img
                src="/images/section/home-section1.webp"
                alt="The Emperor's Gift Set"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-1 md:mb-2">
                  The Emperor's Gift Set
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Hand-crafted ceramic teaware with gold accents.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: The Leaf */}
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl">
              <img
                src="/images/section/home-section2.webp"
                alt="Signature Loose Leaf"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-1 md:mb-2">
                  Signature Loose Leaf
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Selected harvest from the finest highland estates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
