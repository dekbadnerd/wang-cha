import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { teaCategories } from '../data/teaMenu';

export const MenuShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState(teaCategories[0].id);

  const currentCategory = teaCategories.find(cat => cat.id === selectedCategory) || teaCategories[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-mist">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-leaf mb-4">
            Signature Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Five categories of healing. Each brewed with intention.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {teaCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-leaf text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-clay/30 hover:scale-105'
                }
              `}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Category Info */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-serif font-bold text-serene mb-2">
            {currentCategory.subtitle}
          </h3>
        </motion.div>

        {/* Tea Grid */}
        <motion.div
          key={`grid-${selectedCategory}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {currentCategory.teas.map((tea, index) => (
            <motion.div
              key={`${tea.name}-${index}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-serif font-bold text-gray-800 mb-1">
                  {tea.name}
                </h4>
                <p className="text-sm text-serene font-medium">
                  {tea.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-leaf hover:bg-leaf/90 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-leaf/50"
            >
              View Full Menu
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
