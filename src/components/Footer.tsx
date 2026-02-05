import { motion } from 'framer-motion';
import facebookIcon from '../assets/facebook-icon.svg';
import lineIcon from '../assets/line-icon.svg';
import instragramIcon from '../assets/instagram-icon.svg';

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

          {/* Social Links */}
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
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/wangchaofficial_/"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <img src={instragramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Line"
            >
              <img src={lineIcon} alt="Line" className="w-5 h-5" />
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
