import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-leaf text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif font-bold mb-2">王茶 WANGCHA</h3>
            <p className="text-white/80 italic">
              Health is the Foundation of Power
            </p>
          </motion.div>

          {/* Social Links Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Facebook"
            >
              <span className="text-xl">f</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <span className="text-xl">📷</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Line"
            >
              <span className="text-xl">💬</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-white/20"
          >
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} WANGCHA. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
