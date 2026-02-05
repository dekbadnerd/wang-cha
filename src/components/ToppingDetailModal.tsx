import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import type { Topping } from '../data/teaMenu';
import { teaCategories } from '../data/teaMenu';

interface ToppingDetailModalProps {
  topping: Topping | null;
  onClose: () => void;
}

export const ToppingDetailModal = ({ topping, onClose }: ToppingDetailModalProps) => {
  if (!topping) return null;

  // Get category icons for recommended pairings
  const getPairingInfo = (categoryId: string) => {
    const category = teaCategories.find(cat => cat.id === categoryId);
    return category ? { icon: category.icon, title: category.title } : null;
  };

  return (
    <AnimatePresence>
      {topping && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-3xl shadow-2xl w-[90vw] max-w-4xl max-h-[85vh] overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/95 text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors duration-200 shadow-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content Container */}
              <div className="flex flex-col md:flex-row h-full">
                {/* Left: Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                  <img
                    src={topping.imageUrl}
                    alt={topping.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-sm font-bold text-leaf">{topping.category}</p>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 p-5 md:p-8 overflow-y-auto space-y-3 md:space-y-6">
                  {/* Chinese Name - Large, Serif */}
                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-serif font-bold text-leaf mb-2"
                  >
                    {topping.chineseName}
                  </motion.h1>

                  {/* English Name - Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl text-gray-600 font-medium"
                  >
                    {topping.name}
                  </motion.p>

                  {/* Price & Weight */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 md:gap-6 pb-3 md:pb-6 border-b border-gray-200"
                  >
                    <div>
                      <p className="text-xs md:text-sm text-gray-500 mb-1">Price</p>
                      <div className="flex items-baseline gap-1 md:gap-2">
                        <p className="text-lg md:text-xl font-bold text-leaf">{topping.price}</p>
                        <p className="text-sm text-gray-500">THB</p>
                      </div>
                    </div>
                    <div className="h-10 md:h-12 w-px bg-gray-200" />
                    <div>
                      <p className="text-xs md:text-sm text-gray-500 mb-1">Weight</p>
                      <p className="text-lg md:text-xl font-bold text-gray-800">{topping.weight}</p>
                    </div>
                  </motion.div>

                  {/* Story/Origin */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-lg md:text-xl font-serif font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-pollen" />
                      The Story
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {topping.description}
                    </p>
                  </motion.div>

                  {/* Best Paired With */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-mist to-white rounded-2xl p-3"
                  >
                    <h3 className="text-lg md:text-xl font-serif font-bold text-gray-800 mb-3">
                      Best Paired With
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {topping.recommendedPairings.map((categoryId) => {
                        const pairingInfo = getPairingInfo(categoryId);
                        if (!pairingInfo) return null;
                        
                        return (
                          <div
                            key={categoryId}
                            className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100"
                          >
                            <span className="text-lg md:text-xl">{pairingInfo.icon}</span>
                            <span className="text-xs md:text-sm font-medium text-gray-700">{pairingInfo.title}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Note */}
                    <p className="text-xs md:text-sm text-gray-500 italic mt-3">
                      These pairings are curated by our tea masters, but feel free to explore your own combinations.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
