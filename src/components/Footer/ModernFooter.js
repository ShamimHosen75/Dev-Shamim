import { SiSongoda } from 'react-icons/si';
import { smoothScrollTo } from '../../utilities/smoothScroll';

const ModernFooter = () => {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: 'f'
    },
    {
      name: 'Twitter', 
      href: '#',
      icon: 't'
    },
    {
      name: 'RSS',
      href: '#',
      icon: 'r'
    },
    {
      name: 'Google+',
      href: '#',
      icon: 'g'
    }
  ];

  const scrollToSection = (href) => {
    smoothScrollTo(href);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <SiSongoda className="text-3xl text-blue-400" />
                <span className="text-2xl font-bold text-white">
                  Dev | Shamim
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wider"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-300 text-xs font-bold"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-800 py-3">
          <div className="text-center">
            <p className="text-white text-sm mb-0 font-medium opacity-90">
              © 2024 Dev Shamim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
