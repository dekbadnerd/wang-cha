import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { herbalJewels, type Topping } from '../data/teaMenu';
import { Sparkles } from 'lucide-react';
import { ToppingDetailModal } from './ToppingDetailModal';

export const ToppingsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedTopping, setSelectedTopping] = useState<Topping | null>(null);

  // Group toppings by category
  const categories = [
    { id: 'Herbal', title: 'Chinese Herbal Jelly', icon: '🌿' },
    { id: 'Fruit', title: 'Fruit Jelly', icon: '🍊' },
    { id: 'Flower', title: 'Chinese Floral Jelly', icon: '🌸' }
  ];

  const getToppingsByCategory = (categoryId: string) => {
    return herbalJewels.filter(t => t.category === categoryId);
  };

  return (
    <section ref={ref} className="w-full block py-20 bg-gradient-to-b from-white to-mist">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-pollen" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-leaf">
              Crafted Toppings
            </h2>
            <Sparkles className="w-8 h-8 text-pollen" />
          </div>
          <p className="text-xl md:text-2xl font-serif text-serene italic">
            Nature's Jewels
          </p>
          <div className="h-1 w-32 bg-clay rounded-full mx-auto mt-6" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg px-4">
            Handcrafted jellies that transform your tea into a complete sensory experience.
            Each jewel is a work of art, designed to complement and enhance the natural flavors.
          </p>
        </motion.div>

        {/* Categorized Toppings */}
        {categories.map((category, categoryIndex) => {
          const toppings = getToppingsByCategory(category.id);
          if (toppings.length === 0) return null;

          return (
            <div key={category.id} className="mb-16 last:mb-0">
              {/* Category Sub-header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-3xl font-serif font-bold text-leaf">
                  {category.title}
                </h3>
              </motion.div>

              {/* Toppings Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {toppings.map((topping, index) => (
                  <motion.button
                    key={topping.id}
                    onClick={() => setSelectedTopping(topping)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden text-left cursor-pointer w-full"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={topping.imageUrl}
                        alt={topping.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Weight Badge */}
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-leaf shadow-sm">
                        {topping.weight}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5">
                      {/* Name */}
                      <div className="mb-3">
                        <h4 className="text-base md:text-lg font-serif font-bold text-leaf mb-1.5 line-clamp-1">
                          {topping.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500 font-medium">
                          {topping.chineseName}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                        {topping.description}
                      </p>

                      {/* Price & Pairing Info */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl md:text-2xl font-bold text-leaf">
                            {topping.price}
                          </span>
                          <span className="text-xs text-gray-500">THB</span>
                        </div>
                        
                        {/* Pairing Hint */}
                        <div className="flex items-center gap-1.5 text-xs text-serene">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="font-medium hidden sm:inline">
                            {topping.recommendedPairings.length} Pairs
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          );
        })}

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 px-4"
        >
          <p className="text-gray-500 italic max-w-2xl mx-auto">
            "Each topping is prepared fresh daily using traditional methods. 
            We believe in honest ingredients and careful craftsmanship."
          </p>
        </motion.div>
      </div>

      {/* Topping Detail Modal */}
      <ToppingDetailModal 
        topping={selectedTopping}
        onClose={() => setSelectedTopping(null)}
      />
    </section>
  );
};
