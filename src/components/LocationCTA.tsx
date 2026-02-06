import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Clock, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';
import grabIcon from '../assets/grab-icon.svg';
import lineManIcon from '../assets/lineman-icon.svg';

export const LocationCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [copied, setCopied] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeInfo.coordinates.lat},${storeInfo.coordinates.lng}&destination_place_id=WANGCHA`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(storeInfo.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

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
    <section ref={ref} className="block py-20 md:py-32 bg-mist">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : { opacity: 1 }}
        className="container mx-auto px-4 md:px-6"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-leaf mb-3 md:mb-4">
            Come Sit With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Experience the ritual in person. Let the clay pot tell its story.
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Clickable Map */}
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            className="order-2 md:order-1 w-full"
          >
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96 cursor-pointer w-full"
            >
              <img
                src="/images/section/map.webp"
                alt="Store Location - Click to open in Google Maps"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                  <MapPin className="w-5 h-5 text-leaf" />
                  <span className="font-medium text-gray-800">Open in Maps</span>
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </a>
          </motion.div>

          {/* Store Details */}
          <motion.div 
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            className="order-1 md:order-2 w-full block"
          >
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-leaf mb-4 md:mb-6">
                {storeInfo.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-leaf/10 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-leaf" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm font-medium text-gray-500 mb-1">Location</p>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg text-gray-800 flex-1 hover:text-leaf underline-offset-4 hover:underline transition-colors duration-200 break-words"
                    >
                      {storeInfo.address}
                    </a>
                    <button
                      onClick={handleCopyAddress}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-leaf/10 hover:bg-leaf/20 text-leaf transition-colors duration-200 group self-start flex-shrink-0"
                      title="Copy address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-serene/10 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-serene" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-500 mb-1">Opening Hours</p>
                  <p className="text-base md:text-lg text-gray-800">{storeInfo.openingHours.weekdays}</p>
                  <p className="text-base md:text-lg text-gray-800">{storeInfo.openingHours.weekend}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-pollen/10 p-2.5 md:p-3 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-pollen" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-500 mb-1">Contact</p>
                  <p className="text-base md:text-lg text-gray-800">{storeInfo.phone}</p>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="pt-6 md:pt-8 border-t border-gray-200">
                <p className="text-base md:text-lg font-semibold text-gray-800 mb-2">Can't make it to the tea house?</p>
                <p className="text-sm text-gray-600 mb-5">Order directly to your door.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                  {/* GrabFood */}
                  <a
                    href="https://www.grab.com/th/en/food/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 h-full group"
                  >
                    <div className="w-10 h-10 flex-shrink-0 mr-3 bg-green-50 rounded-full flex items-center justify-center">
                      <img src={grabIcon} alt="GrabFood" className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-gray-800 text-base leading-tight">GrabFood</span>
                      <span className="text-xs text-gray-500 font-medium">Fast delivery</span>
                    </div>
                  </a>

                  {/* LINE MAN */}
                  <a
                    href="https://lineman.line.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 h-full group"
                  >
                    <div className="w-10 h-10 flex-shrink-0 mr-3 bg-green-50 rounded-full flex items-center justify-center">
                      <img src={lineManIcon} alt="LINE MAN" className="w-20 h-20" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-gray-800 text-base leading-tight">LINE MAN</span>
                      <span className="text-xs text-gray-500 font-medium">Quick & easy</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
