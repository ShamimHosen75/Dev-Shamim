import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Bio } from '../../data/constants';
import styles from './ModernHero.module.css';

const GridBackground = () => (
  <div className={styles.gridBackground}>
    <div className={styles.gridOverlay}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className={styles.gridSvg}
      >
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className={styles.gridRect}
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

const codeDisplay = (
  <div className="code-content">
    <div className="code-line">
      <span className={styles.keyword}>const</span>{' '}
      profile{' '}
      <span className={styles.operator}>=</span>{' '}
      <span className={styles.punctuation}>{`{`}</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>name</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.string}>'Billal Hosen Shamim'</span>
      <span className={styles.punctuation}>,</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>title</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.string}>'Aspiring Software Engineer | Frontend Developer | WordPress Expert '</span>
      <span className={styles.punctuation}>,</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>skills</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.punctuation}>[</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'    '}</span>
      <span className={styles.string}>'JavaScript'</span>
      <span className={styles.punctuation}>,</span>{' '}
      <span className={styles.string}>'React JS'</span>
      <span className={styles.punctuation}>,</span>{' '}
      <span className={styles.string}>'TypeScript'</span>
      <span className={styles.punctuation}>,</span>{' '}
      <span className={styles.string}>'WordPress'</span>
      <span className={styles.punctuation}>,</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'    '}</span>
      <span className={styles.string}>'Node JS'</span>
      <span className={styles.punctuation}>,</span>{' '}
      <span className={styles.string}>'MongoDB'</span>
      <span className={styles.punctuation}>,</span>{' '}
      <span className={styles.string}>'Express JS'</span>
      <span className={styles.punctuation}>,</span>{' '}
      <span className={styles.string}>'C/C++'</span>
      <span className={styles.punctuation}>,</span>{' '}
      <span className={styles.string}>'Go/Goland'</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.punctuation}>],</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>hardWorker</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.boolean}>true</span>
      <span className={styles.punctuation}>,</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>quickLearner</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.boolean}>true</span>
      <span className={styles.punctuation}>,</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>problemSolver</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.boolean}>true</span>
      <span className={styles.punctuation}>,</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>yearsOfExperience</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.number}>5</span>
      <span className={styles.punctuation}>,</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.property}>hireable</span>
      <span className={styles.punctuation}>:</span>{' '}
      <span className={styles.keyword}>function</span>
      <span className={styles.punctuation}>()</span>{' '}
      <span className={styles.punctuation}>{`{`}</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'    '}</span>
      <span className={styles.keyword}>return</span>{' '}
      <span className={styles.punctuation}>(</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'      '}</span>
      <span className={styles.keyword}>this</span>
      <span className={styles.punctuation}>.</span>
      <span className={styles.property}>hardWorker</span>{' '}
      <span className={styles.operator}>&&</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'      '}</span>
      <span className={styles.keyword}>this</span>
      <span className={styles.punctuation}>.</span>
      <span className={styles.property}>problemSolver</span>{' '}
      <span className={styles.operator}>&&</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'      '}</span>
      <span className={styles.keyword}>this</span>
      <span className={styles.punctuation}>.</span>
      <span className={styles.property}>skills.length</span>{' '}
      <span className={styles.operator}>{'>='}</span>{' '}
      <span className={styles.number}>5</span>{' '}
      <span className={styles.operator}>&&</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'      '}</span>
      <span className={styles.keyword}>this</span>
      <span className={styles.punctuation}>.</span>
      <span className={styles.property}>yearsOfExperience</span>{' '}
      <span className={styles.operator}>{'>='}</span>{' '}
      <span className={styles.number}>2</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'    '}</span>
      <span className={styles.punctuation}>);</span>
    </div>
    <div className="code-line">
      <span className={styles.indent}>{'  '}</span>
      <span className={styles.punctuation}>{`}`}</span>
    </div>
    <div className="code-line">
      <span className={styles.punctuation}>{`}`}</span>
      <span className={styles.punctuation}>;</span>
    </div>
  </div>
);

const ModernHero = () => {
  const [words] = useState([
    "Aspiring Software Engineer",
    "MERN Stack Developer",
    "Competitive Programmer",
    "WordPress Expert",
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main className="hero bg-[#020617] text-white min-h-screen relative overflow-hidden">
      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <div className="absolute inset-0">
          <GridBackground />
        </div>

        {/* Floating dots animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
            {/* Decorative blurs */}
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Welcome badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my universe
              </span>
            </motion.div>

            {/* Name section */}
            <div className="relative mb-6 sm:mb-8">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hey, I'm
                <span className="relative inline-block">
                  <span className="typing-effect bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] bg-clip-text text-transparent">
                    {" "}
                    {Bio.name}
                  </span>
                </span>
              </motion.h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Role badge */}
            <motion.div 
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1E90FF]/10 to-[#00FFFF]/10 border border-[#1E90FF]/20 mb-6 sm:mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <i className="fas fa-rocket text-blue-400 text-sm sm:text-base"></i>
              <span className="text-lg sm:text-xl text-blue-400 font-medium">
                {words[currentWordIndex]}
              </span>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="relative mb-8 sm:mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                JavaScript lover 🚀 | Creator 🔧 | Crafting frameworks
                and coding the future 💻✨
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Let's Connect Button */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#1E90FF]"
              >
                <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                  <span>Let's Connect</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-800/80"
              >
                <span className="relative flex items-center justify-center gap-2 text-slate-300 font-medium group-hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>View Projects</span>
                </span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* GitHub */}
              <a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-slate-800/80"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-slate-800/80"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${Bio.email}`}
                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-green-500/50 hover:bg-slate-800/80"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>

            {/* Floating badges */}
            <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI Magic
              </div>
            </div>
            <div className="hidden lg:block absolute right-10 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
              </div>
            </div>
            <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
              </div>
            </div>
          </div>

          {/* Right column - Code window */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-full p-[1px] rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500">
              <div className="w-full h-full rounded-lg bg-[#01080f] overflow-hidden">
              {/* Window header */}
              <div className="px-4 py-3 bg-[#011627] border-b border-[#1E2D3D] flex items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border-[0.5px] border-[#E0443E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border-[0.5px] border-[#DEA123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border-[0.5px] border-[#1AAB29]"></div>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-gray-400">
                    profile.js
                  </span>
                </div>
              </div>
              {/* Code content */}
              <div className="bg-[#031321] p-6">
                <pre className="text-[15px] leading-[1.6] font-mono">
                  <code className="text-gray-200">
                    {codeDisplay}
                  </code>
                </pre>
              </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
      </section>
    </main>
  );
};

export default ModernHero;
