import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface Promotion {
  badge: string;
  title: string;
  description: string;
  validity: string;
  image: string;
}

const promotions: Promotion[] = [
  {
    badge: 'HAPPY HOUR 14:00 - 16:00',
    title: 'Afternoon Delight',
    description: 'Special prices on tea! Collect 10 points via LINE OA to redeem 1 FREE cup immediately.',
    validity: 'Daily 2 PM - 4 PM',
    image: '/images/section/promotion2.webp',
  },
  {
    badge: 'NEW EXPERIENCE',
    title: 'Brew It Yourself',
    description: 'Try our Hybrid Experience. Get 1 FREE Premium Topping for your first try. Post on TikTok/Reels for 10% OFF! #Wangchachacha',
    validity: 'First-time experience only',
    image: '/images/section/promotion1.webp',
  },
];

export const SeasonalSpecial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const currentPromotion = promotions[currentSlide];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-pollen/20 via-mist to-pollen/10"
    >
      <div className="container mx-auto px-6">
        {/* Flexbox Container with Arrows Outside */}
        <div className="flex items-center justify-center gap-6">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="hidden md:block bg-white/90 backdrop-blur-md hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group flex-shrink-0"
            aria-label="Previous promotion"
          >
            <ChevronLeft className="w-6 h-6 text-leaf group-hover:text-serene transition-colors" />
          </button>

          {/* Promotion Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative bg-gradient-to-r from-white to-pollen/10 rounded-3xl overflow-hidden shadow-2xl flex-1 w-full max-w-6xl min-h-[500px] md:min-h-[550px]"
          >
            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pollen/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-serene/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row gap-8 items-center p-8 md:p-12">
              {/* Left: Content (50%) */}
              <div className="w-full md:w-1/2 space-y-6 z-10">
                <AnimatePresence mode="wait" custom={1}>
                  <motion.div
                    key={currentSlide}
                    custom={1}
                    variants={contentVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="space-y-6"
                  >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-pollen/30 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Sparkles className="w-4 h-4 text-leaf" />
                      <span className="text-sm font-medium text-gray-800 uppercase tracking-wide">
                        {currentPromotion.badge}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-leaf leading-tight">
                      {currentPromotion.title.split(':')[0]}:
                      <br />
                      <span className="text-serene">{currentPromotion.title.split(':')[1]}</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                      {currentPromotion.description}
                    </p>

                    {/* Countdown/Validity */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-serene" />
                      <span className="text-sm font-medium">{currentPromotion.validity}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Image (50%) */}
              <div className="w-full md:w-1/2 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]"
                  >
                    <img
                      src={currentPromotion.image}
                      alt={currentPromotion.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay for Aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pollen/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Badge on Image */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4 bg-leaf text-white px-6 py-3 rounded-full shadow-xl font-serif font-bold text-xl z-20"
                >
                  {currentSlide === 0 ? 'Free Cup' : '10% Off'}
                </motion.div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-8 h-2 bg-leaf'
                      : 'w-2 h-2 bg-leaf/30 hover:bg-leaf/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="hidden md:block bg-white/90 backdrop-blur-md hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group flex-shrink-0"
            aria-label="Next promotion"
          >
            <ChevronRight className="w-6 h-6 text-leaf group-hover:text-serene transition-colors" />
          </button>
        </div>

        {/* Mobile Navigation - Show at Bottom on Small Screens */}
        <div className="md:hidden flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="bg-white/90 backdrop-blur-md hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Previous promotion"
          >
            <ChevronLeft className="w-5 h-5 text-leaf group-hover:text-serene transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/90 backdrop-blur-md hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Next promotion"
          >
            <ChevronRight className="w-5 h-5 text-leaf group-hover:text-serene transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};
