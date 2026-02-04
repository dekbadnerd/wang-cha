import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ExperiencePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-mist">
      {/* Desktop: Split Screen Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24"
        >
          <div className="max-w-2xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-leaf mb-6">
                The Ancient Ritual
              </h1>
              <div className="h-1 w-24 bg-clay rounded-full mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              <p className="font-serif text-2xl text-serene italic">
                "Clay Pot & Charcoal Fire — A ceremony that honors time itself."
              </p>

              <p>
                In a world that rushes, we choose to slow down. Each tea leaf is carefully selected,
                each pot is lovingly prepared, each fire is tenderly maintained.
              </p>

              <p>
                The clay breathes with the earth. The charcoal whispers with the ancestors.
                The water dances between them, awakening the essence of nature's wisdom.
              </p>

              <p>
                This is not simply brewing tea. This is meditation. This is connection.
                This is the art of being present.
              </p>

              <div className="pt-8 border-t border-clay/30">
                <h2 className="text-2xl font-serif font-bold text-leaf mb-4">
                  The Slow Life Philosophy
                </h2>
                <p>
                  We brew slowly, not because we have time to waste, but because we have life to savor.
                  Every moment spent in ritual is a moment reclaimed from chaos.
                  Every sip is a reminder: health is the foundation of power.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl font-serif font-bold text-leaf mb-4">
                  For Your Health
                </h2>
                <p>
                  The clay pot naturally filters and balances the tea's minerals.
                  The charcoal fire provides gentle, even heat that preserves delicate compounds.
                  The result? A tea that nourishes not just the body, but the spirit.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Video */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen md:sticky md:top-0">
          <div className="relative w-full h-full overflow-hidden">
            {/* Video Placeholder - Replace src with actual video URL */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://placehold.co/1080x1920/7EAD6A/ffffff?text=Clay+Pot+Brewing"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              {/* Fallback for browsers that don't support video */}
              <div className="w-full h-full bg-gradient-to-br from-leaf to-serene flex items-center justify-center">
                <p className="text-white text-2xl font-serif">Ancient Tea Ceremony</p>
              </div>
            </video>

            {/* Overlay gradient for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};
