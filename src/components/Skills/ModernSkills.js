import { motion } from 'framer-motion';
import { skills } from '../../data/constants';
import { optimizedVariants } from '../../utilities/smoothScroll';

const ModernSkills = () => {
  // Get all skills with their images from all categories for the slider
  const allSkillsWithImages = skills.flatMap(category => 
    category.skills.map(skill => ({
      name: skill.name,
      image: skill.image
    }))
  );

  // Duplicate the skills array for seamless looping
  const duplicatedSkills = [...allSkillsWithImages, ...allSkillsWithImages];

  const getCategoryColor = (title) => {
    const colorMap = {
      'Frontend Development': 'from-[#1E90FF] to-[#00FFFF]',
      'Backend Development': 'from-[#1E90FF] to-[#00FFFF]',
      'Database & Cloud': 'from-[#1E90FF] to-[#00FFFF]',
      'Programming Languages': 'from-[#1E90FF] to-[#00FFFF]',
      'CMS & Design': 'from-[#1E90FF] to-[#00FFFF]',
      'Tools & Technologies': 'from-[#1E90FF] to-[#00FFFF]'
    };
    return colorMap[title] || 'from-[#1E90FF] to-[#00FFFF]';
  };

  const containerVariants = optimizedVariants.container;
  const cardVariants = optimizedVariants.item;

  return (
    <section id="skills" className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            My Skills
          </h2>
          <p className="text-slate-300 text-md max-w-xl mx-auto leading-relaxed">
            Passionate front-end developer specializing in React, Tailwind CSS, and JavaScript to build clean, interactive web apps.
          </p>
        </motion.div>

        {/* Animated Skills Slider */}
        <div className="mb-16 overflow-hidden">
          <div className="relative">
            <motion.div
              className="flex space-x-6 whitespace-nowrap"
              animate={{
                x: [0, -120 * allSkillsWithImages.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
              style={{ width: 'fit-content' }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-transparent border border-purple-500/40 rounded-2xl px-5 py-4 backdrop-blur-sm hover:border-purple-500/70 hover:bg-purple-500/10 transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  {/* Skill Icon */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-6 h-6 object-contain filter brightness-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-6 h-6 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-purple-300 font-medium text-sm">
                    {skill.name}
                  </span>
                  
                  {/* Highlight Dot */}
                  <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Category Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full hover:border-slate-600 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(category.title)} rounded-xl flex items-center justify-center text-white`}>
                    {category.title === 'Frontend Development' ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.293 5.293L2.586 11l5.707 5.707 1.414-1.414L5.414 11l4.293-4.293-1.414-1.414zM15.707 5.293l-1.414 1.414L18.586 11l-4.293 4.293 1.414 1.414L21.414 11l-5.707-5.707z"/>
                      </svg>
                    ) : category.title === 'Backend Development' ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                    ) : category.title === 'Database & Cloud' ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 14c0 .55-2.69 2-6 2s-6-1.45-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4.55c-1.61.78-3.72 1.23-6 1.23s-4.39-.45-6-1.23V10c0 .55 2.69 2 6 2s6-1.45 6-2v2.45zM12 10c-3.31 0-6-1.45-6-2s2.69-2 6-2 6 1.45 6 2-2.69 2-6 2z"/>
                      </svg>
                    ) : category.title === 'Programming Languages' ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ) : category.title === 'CMS & Design' ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l.09.01c.485 0 .945.169 1.32.48l.113.095L20 8.5V19c0 1.05-.95 2-2 2H6c-1.05 0-2-.95-2-2V8.5l6.48-5.905c.375-.341.835-.595 1.32-.595L12 2zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group/skill relative"
                    >
                      <div className="bg-transparent border border-purple-500/30 rounded-lg p-6 text-center hover:border-purple-500/60 hover:bg-purple-500/5 transition-all duration-300 group-hover/skill:shadow-lg group-hover/skill:shadow-purple-500/20 h-32 flex flex-col justify-center items-center">
                        {/* Skill Icon */}
                        <div className="relative flex-shrink-0 mb-3">
                          <div className="w-10 h-10 mx-auto flex items-center justify-center">
                            <img
                              src={skill.image}
                              alt={skill.name}
                              className="w-7 h-7 object-contain filter group-hover/skill:brightness-110 transition-all duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-7 h-7 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
                              {skill.name.charAt(0)}
                            </div>
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-purple-300 font-medium text-xs group-hover/skill:text-purple-200 transition-colors duration-300 leading-tight px-1">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 border border-purple-500/30 text-white text-xs rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats/Badge */}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Skills</span>
                    <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(category.title)} text-white text-xs font-semibold rounded-full`}>
                      {category.skills.length}
                    </span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(category.title)} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernSkills;
