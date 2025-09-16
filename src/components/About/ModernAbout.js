import { motion } from 'framer-motion';
import profileImage from '../../images/Billal-Hosen-Shamim.png';
import { optimizedVariants } from '../../utilities/smoothScroll';

const ModernAbout = () => {
  const technologies = [
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      link: 'https://react.dev/learn'
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      link: 'https://tailwindui.com/documentation'
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      link: 'https://firebase.google.com/'
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      link: 'https://www.mongodb.com/'
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      link: 'https://nodejs.org/en'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={optimizedVariants.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={optimizedVariants.slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {/* Main Heading with Sparkles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                <span className="text-yellow-400"></span> I build high-quality website that grow your business & interactive web solutions <span className="text-yellow-400"></span>
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm an enthusiastic programmer working on web application development for more than 5 year. I'm passionate about coding to make people's daily life more easier and always eager to take on new challenges. With a passion for learning I'm dedicated to delivering high-quality results. My core skills are based on JavaScript, React JS, and WordPress I love to do most things.
              </p>
            </motion.div>

            {/* Technology Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.a
                    key={index}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.a>
                ))}
              </div> */}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-white font-semibold rounded-lg hover:from-[#1874CD] hover:to-[#00E6E6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Check Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Let's Work Together
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Single Image Section */}
          <motion.div
            variants={optimizedVariants.slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Billal Hosen Shamim - Full Stack Developer"
                    className="w-80 h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                animate={{ 
                  y: [0, -15, 0],
                  transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                }}
                className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] rounded-2xl flex items-center justify-center shadow-lg rotate-12"
              >
                <span className="text-white text-2xl">💻</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                animate={{ 
                  y: [0, 12, 0],
                  transition: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                }}
                className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg -rotate-12"
              >
                <span className="text-white text-xl">⚡</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                animate={{ 
                  x: [0, -8, 0],
                  transition: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                }}
                className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-lg">🚀</span>
              </motion.div>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF]/20 to-[#00FFFF]/20 rounded-3xl filter blur-3xl -z-10 scale-110"></div>
              
              {/* Border Accent */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-[#1E90FF]/30 to-[#00FFFF]/30 -z-5"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
