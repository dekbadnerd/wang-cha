import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';

export const LocationCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-leaf mb-4">
            Come Sit With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the ritual in person. Let the clay pot tell its story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <img
                src="https://placehold.co/800x600/8EBDC3/ffffff?text=Store+Location+Map"
                alt="Store Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button className="bg-white hover:bg-leaf hover:text-white text-leaf px-8 py-4 rounded-full font-medium shadow-xl transition-all duration-300 hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>

          {/* Store Details */}
          <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-leaf mb-6">
                {storeInfo.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-leaf/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-leaf" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                  <p className="text-lg text-gray-800">{storeInfo.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-serene/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-serene" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Opening Hours</p>
                  <p className="text-lg text-gray-800">{storeInfo.openingHours.weekdays}</p>
                  <p className="text-lg text-gray-800">{storeInfo.openingHours.weekend}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-pollen/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-pollen" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Contact</p>
                  <p className="text-lg text-gray-800">{storeInfo.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
