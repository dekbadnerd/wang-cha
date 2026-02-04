import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';
import { teaCategories, herbalJewels } from '../data/teaMenu';
import type { Topping } from '../data/teaMenu';
import { ToppingsShowcase } from '../components/ToppingsShowcase';

interface Tea {
  name: string;
  benefit: string;
  image: string;
}

interface SelectedTea {
  name: string;
  benefit: string;
  image: string;
  category: string;
  categoryId: string;
  price: string;
  description: string;
}

export const FullMenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(teaCategories[0].id);
  const [selectedTea, setSelectedTea] = useState<SelectedTea | null>(null);
  const [selectedTopping, setSelectedTopping] = useState<Topping | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Intersection Observer for auto-updating active tab on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    // Handle scroll to ensure last section (toppings) activates when near bottom
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page, activate toppings tab
      if (documentHeight - scrollPosition < 100) {
        setActiveCategory('toppings');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const section = sectionRefs.current[categoryId];
    if (section) {
      const offset = 150; // Account for sticky header
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const openModal = (tea: Tea, categoryName: string, categoryId: string) => {
    setSelectedTea({
      ...tea,
      category: categoryName,
      categoryId: categoryId,
      price: '120 THB',
      description: `A carefully crafted blend that embodies the essence of ${tea.name.toLowerCase()}. 
        Brewed in our signature clay pot over charcoal fire, this tea offers a journey of flavors 
        that awakens your senses and nurtures your well-being. Each cup is a meditation, 
        a moment of tranquility in your day.`,
    });
    setSelectedTopping(null); // Reset topping when opening new tea
  };

  const toggleTopping = (topping: Topping) => {
    setSelectedTopping(selectedTopping?.id === topping.id ? null : topping);
  };

  const calculateTotal = () => {
    const basePrice = 120;
    const toppingPrice = selectedTopping ? selectedTopping.price : 0;
    return basePrice + toppingPrice;
  };

  return (
    <div className="min-h-screen bg-mist pt-20">
      {/* Header */}
      <div className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-leaf text-center mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            A curated selection of teas, each with its own story and purpose.
          </p>
        </div>
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {teaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeCategory === category.id
                    ? 'bg-leaf text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-clay/30 hover:scale-105'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
            
            {/* Toppings Tab */}
            <button
              onClick={() => scrollToCategory('toppings')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeCategory === 'toppings'
                  ? 'bg-leaf text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-clay/30 hover:scale-105'
              }`}
            >
              <span className="mr-2">✨</span>
              Toppings
            </button>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-6 py-16">
        {teaCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el; }}
            className="mb-20 scroll-mt-32"
          >
            {/* Category Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{category.icon}</span>
                <div>
                  <h2 className="text-4xl font-serif font-bold text-leaf">
                    {category.title}
                  </h2>
                  <p className="text-xl text-serene font-medium">{category.subtitle}</p>
                </div>
              </div>
              <div className="h-1 w-32 bg-clay rounded-full" />
            </div>

            {/* Tea Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.teas.map((tea, index) => (
                <motion.button
                  key={`${tea.name}-${index}`}
                  onClick={() => openModal(tea, category.title, category.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 text-left"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={tea.image}
                      alt={tea.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-serif font-bold text-gray-800 mb-1">
                      {tea.name}
                    </h3>
                    <p className="text-sm text-serene font-medium mb-2">{tea.benefit}</p>
                    <p className="text-sm font-medium text-leaf">120 THB</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Toppings Showcase Section */}
      <div 
        id="toppings"
        ref={(el) => { sectionRefs.current['toppings'] = el; }}
        className="scroll-mt-32"
      >
        <ToppingsShowcase />
      </div>

      {/* Tea Detail Modal */}
      <AnimatePresence>
        {selectedTea && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTea(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTea(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                {/* Image */}
                <div className="h-64 md:h-96 overflow-hidden relative">
                  <img
                    src={selectedTea.image}
                    alt={selectedTea.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-serene uppercase tracking-wide mb-2">
                      {selectedTea.category}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-leaf mb-4">
                      {selectedTea.name}
                    </h2>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold text-gray-800">{selectedTea.price}</p>
                      <span className="px-4 py-1 bg-serene/10 text-serene rounded-full text-sm font-medium">
                        {selectedTea.benefit}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                        The Story
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {selectedTea.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">
                        Health Benefits
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-leaf mt-1">✓</span>
                          <span className="text-gray-700">Rich in antioxidants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-leaf mt-1">✓</span>
                          <span className="text-gray-700">Supports {selectedTea.benefit.toLowerCase()}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-leaf mt-1">✓</span>
                          <span className="text-gray-700">Naturally caffeine-free</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-leaf mt-1">✓</span>
                          <span className="text-gray-700">Brewed with ancient techniques</span>
                        </li>
                      </ul>
                    </div>

                    {/* Enhance Your Ritual - Toppings Section */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border-t border-gray-200 pt-6"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-6 h-6 text-pollen" />
                          <h3 className="text-xl font-serif font-bold text-gray-800">
                            Enhance Your Ritual
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Add a handcrafted topping to complete your experience
                        </p>

                        {/* Toppings Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {herbalJewels.map((topping) => {
                            const isPerfectMatch = topping.recommendedPairings.includes(selectedTea.categoryId);
                            const isSelected = selectedTopping?.id === topping.id;

                            return (
                              <motion.button
                                key={topping.id}
                                onClick={() => toggleTopping(topping)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                  isSelected
                                    ? 'border-leaf bg-leaf/5 shadow-lg'
                                    : 'border-gray-200 bg-white hover:border-clay'
                                }`}
                              >
                                {/* Perfect Match Badge */}
                                {isPerfectMatch && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-2 -right-2 bg-gradient-to-r from-pollen to-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
                                  >
                                    <Sparkles className="w-3 h-3 animate-pulse" />
                                    Perfect Match
                                  </motion.div>
                                )}

                                {/* Topping Image */}
                                <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                                  <img
                                    src={topping.imageUrl}
                                    alt={topping.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                {/* Topping Info */}
                                <div>
                                  <p className="font-serif font-bold text-gray-800 text-sm mb-1">
                                    {topping.name}
                                  </p>
                                  <p className="text-xs text-gray-500 mb-2">
                                    {topping.chineseName} • {topping.weight}
                                  </p>
                                  <p className="text-leaf font-bold text-sm">
                                    +{topping.price} THB
                                  </p>
                                </div>

                                {/* Selected Indicator */}
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-3 left-3 bg-leaf text-white rounded-full p-1"
                                  >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </motion.div>
                                )}
                              </motion.button>
                            );
                          })}
                        </div>

                        {/* Total Price */}
                        <motion.div
                          layout
                          className="mt-6 p-4 bg-gray-50 rounded-lg flex items-center justify-between"
                        >
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Total Price</p>
                            <div className="flex items-baseline gap-2">
                              <p className="text-3xl font-bold text-leaf">
                                {calculateTotal()}
                              </p>
                              <p className="text-gray-500">THB</p>
                            </div>
                            {selectedTopping && (
                              <p className="text-xs text-gray-500 mt-1">
                                Base: 120 THB + {selectedTopping.name}: {selectedTopping.price} THB
                              </p>
                            )}
                          </div>
                          {selectedTopping && (
                            <Sparkles className="w-8 h-8 text-pollen animate-pulse" />
                          )}
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
