import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { rituals } from '../data/rituals';

export const TheRitual = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-leaf mb-4">
            Three Ways to Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your path. Each ritual honors the same ancient wisdom.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {rituals.map((ritual) => (
            <motion.div
              key={ritual.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-mist rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform-gpu"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ritual.image}
                  alt={ritual.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="text-4xl lg:text-5xl mb-3">{ritual.icon}</div>
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-leaf mb-2">
                  {ritual.title}
                </h3>
                <p className="text-xs lg:text-sm font-semibold text-serene uppercase tracking-wider mb-3 lg:mb-4">
                  {ritual.subtitle}
                </p>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  {ritual.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
