import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const BrandStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 20 },
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
    <section ref={ref} className="py-20 md:py-32 bg-mist">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <img
              src="/images/section/ritual-section.webp"
              alt="Ancient Clay Pot"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-leaf">
              The Ancient Ritual
            </h2>
            <div className="h-1 w-24 bg-clay rounded-full" />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-serif font-semibold text-2xl text-leaf">Clay Pot & Charcoal Fire</span>
              {' '}— It's not just a drink. It's a ritual for health and balance. A practice that honors the wisdom of generations.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We brew slowly, with patience and intention. The clay breathes. The charcoal warms. The tea awakens. Each cup is a meditation, a moment of stillness in a chaotic world.
            </p>
            <p className="text-2xl font-serif italic text-serene mt-8">
              "We brew slowly so you can live longer."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
