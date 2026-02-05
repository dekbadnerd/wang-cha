import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { storeInfo } from '../data/storeInfo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeInfo.coordinates.lat},${storeInfo.coordinates.lng}&destination_place_id=WANGCHA`;

  useEffect(() => {
    const updateScrolled = (latest: number) => {
      setScrolled(latest > 50);
    };

    const unsubscribe = scrollY.on('change', updateScrolled);
    return () => unsubscribe();
  }, [scrollY]);

  const handleNavClick = (targetPath: string, targetHash: string) => {
    setIsMobileMenuOpen(false);

    // If we're already on the target path
    if (location.pathname === targetPath) {
      if (targetHash) {
        // Scroll to section
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // No hash, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to different path
      navigate(targetPath + (targetHash ? `#${targetHash}` : ''));
    }
  };

  const navItems = [
    { name: 'Story', path: '/', hash: 'story' },
    { name: 'Ritual', path: '/experience', hash: '' },
    { name: 'Menu', path: '/menu', hash: '' },
    { name: 'Location', path: '/', hash: 'location' },
  ];

  // Force scrolled appearance on non-home pages
  const shouldShowScrolledStyle = scrolled || !isHomePage;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        shouldShowScrolledStyle
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Brand */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <h1
                className={`text-2xl md:text-3xl font-serif font-bold transition-colors duration-300 ${
                  shouldShowScrolledStyle ? 'text-leaf' : 'text-white drop-shadow-lg'
                }`}
              >
                WANGCHA
              </h1>
            </motion.div>
          </Link>

          {/* Center: Navigation Links - Desktop Only */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.hash)}
                className={`font-sans font-medium transition-all duration-300 hover:scale-105 relative group ${
                  shouldShowScrolledStyle ? 'text-gray-700 hover:text-leaf' : 'text-white hover:text-pollen'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    shouldShowScrolledStyle ? 'bg-leaf' : 'bg-pollen'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: CTA Button - Desktop Only */}
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:block px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              shouldShowScrolledStyle
                ? 'bg-leaf text-white hover:bg-leaf/90 shadow-md'
                : 'bg-white/90 text-leaf hover:bg-white shadow-lg'
            }`}
          >
            Get Directions
          </motion.a>

          {/* Mobile: Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              shouldShowScrolledStyle ? 'text-leaf hover:bg-leaf/10' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 p-6"
            >
              <div className="flex flex-col gap-4 items-center">
                {/* Navigation Links */}
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path, item.hash)}
                    className="w-full text-center font-sans font-medium text-gray-700 hover:text-leaf py-3 px-4 rounded-lg hover:bg-leaf/10 transition-all duration-300"
                  >
                    {item.name}
                  </button>
                ))}

                {/* CTA Button */}
                <motion.a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full block text-center bg-leaf text-white hover:bg-leaf/90 py-3 px-6 rounded-full font-medium shadow-md transition-all duration-300 mt-2"
                >
                  Get Directions
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
