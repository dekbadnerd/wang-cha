import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/section/hero-section.webp"
          alt="Clay Pot Tea Brewing"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-leaf/40" />
      </motion.div>

      {/* Steam/Smoke Placeholder Animation Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-64 h-96"
        >
          <div className="w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
              WANGCHA
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="text-2xl md:text-4xl font-serif text-white mb-4 drop-shadow-xl"
            >
              Health is the Foundation of Power
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg"
            >
              Ancient Clay Pot Brewing. Charcoal Fire. The Taste of Royalty.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            className="mt-12"
          >
            <Link to="/experience">
              <button className="bg-leaf hover:bg-leaf/90 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-leaf/50 hover:scale-105">
                Experience the Ritual
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};
