import { useState } from 'react';
import { FaShieldHalved } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#01080f]/80 backdrop-blur-md border-b border-[#1E2D3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <FaShieldHalved className="text-[#00FFFF] text-2xl" />
            <h1 className="flex items-center text-[16px] font-bold select-none">
              <span style={{ color: '#00FFFF' }}>Dev</span>
              <span className="text-white mx-2">|</span>
              <span style={{ color: '#00FFFF' }}>Shamim</span>
            </h1>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Buttons Container */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Github Profile Button */}
            <a
              href="https://github.com/ShamimHosen75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E90FF] border border-[#1E90FF] px-4 py-1.5 rounded hover:bg-[#1E90FF]/10 transition-colors text-sm font-medium"
            >
              Github Profile
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="text-[#1E90FF] border border-[#1E90FF] px-4 py-1.5 rounded hover:bg-[#1E90FF]/10 transition-colors text-sm font-medium"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#01080f] border-t border-[#1E2D3D]">
            {['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-3 py-2">
              <a
                href="https://github.com/ShamimHosen75"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-[#1E90FF] border border-[#1E90FF] px-4 py-2 rounded hover:bg-[#1E90FF]/10 transition-colors text-sm font-medium text-center"
              >
                Github Profile
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-[#1E90FF] border border-[#1E90FF] px-4 py-2 rounded hover:bg-[#1E90FF]/10 transition-colors text-sm font-medium text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;