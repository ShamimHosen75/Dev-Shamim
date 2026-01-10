import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiSongoda } from "react-icons/si";
import { Bio } from '../../data/constants';
import { smoothScrollTo } from '../../utilities/smoothScroll';
import { useTheme } from '../../utilities/ThemeContext';

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    smoothScrollTo(href, 100);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'bg-[#020617]/95 backdrop-blur-sm border-b border-slate-800/50 shadow-lg'
              : 'bg-white/95 backdrop-blur-sm border-b border-slate-200/50 shadow-lg'
            : isDark
              ? 'bg-transparent border-b border-transparent'
              : 'bg-white/10 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => scrollToSection('#home')}
                className="flex items-center space-x-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] bg-clip-text text-transparent hover:from-[#1874CD] hover:to-[#00E6E6] transition-all duration-300"
              >
                <SiSongoda className="text-blue-400 text-2xl md:text-3xl" />
                <span>Dev | Shamim</span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="flex items-center">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-blue-400 px-4 py-2 text-lg font-medium transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Resume Button & Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center gap-4"
            >
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {isDark ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
              <a
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
              >
                Hire Me
              </a>
            </motion.div>

            {/* Mobile menu button & Theme Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {isDark ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDark
                    ? 'text-white hover:text-blue-400'
                    : 'text-slate-700 hover:text-blue-400'
                }`}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`lg:hidden overflow-hidden ${
            isDark
              ? 'bg-[#020617]/95 backdrop-blur-sm border-t border-slate-800/50'
              : 'bg-white/95 backdrop-blur-sm border-t border-slate-200/50'
          } ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 text-lg ${
                  isDark
                    ? 'text-white hover:text-blue-400 hover:bg-slate-800/50'
                    : 'text-slate-700 hover:text-blue-400 hover:bg-slate-100/50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-6 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default ModernNavbar;
