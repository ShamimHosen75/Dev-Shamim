import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { experiences } from '../../data/constants';
import { optimizedVariants } from '../../utilities/smoothScroll';

const ModernExperience = () => {
  return (
    <section id="experience" className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey through various companies and roles
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E90FF] via-[#00FFFF] to-[#1E90FF]"></div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={optimizedVariants.slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] rounded-full flex items-center justify-center border-4 border-[#020617] relative z-10 shadow-lg">
                  <BriefcaseIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Experience Card */}
                <div className="ml-6 md:ml-8 flex-1">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {experience.role}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg text-blue-300 font-semibold">
                            {experience.company}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start md:items-end space-y-2 mt-2 md:mt-0">
                        <div className="flex items-center space-x-2 text-slate-400">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">{experience.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-400">
                          <MapPinIcon className="w-4 h-4" />
                          <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium">
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {experience.desc}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium hover:bg-blue-500/30 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-600"></div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">30+</div>
                <div className="text-slate-400 text-sm">Company's Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-slate-600"></div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">75+</div>
                <div className="text-slate-400 text-sm">Freelance Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernExperience;
