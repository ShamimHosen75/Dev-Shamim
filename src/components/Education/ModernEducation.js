import { AcademicCapIcon, CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { education } from '../../data/constants';
import { optimizedVariants } from '../../utilities/smoothScroll';

const ModernEducation = () => {
  const certifications = [
    {
      title: "Asset Skills Competition 2023 - 1st Place",
      issuer: "Asset Institute",
      date: "2023",
      description: "Won first place in national programming competition focusing on web development and problem-solving skills.",
    },
    {
      title: "Complete Web Development By Jhankar Mahbub",
      issuer: "Programming Hero",
      date: "2022",
      description: "Comprehensive certification in advanced Web development. Specially MERN Stack focused, Such as HTML5, CSS3, JavaScript, React, Node.js, and MongoDB. Firebase, Netlify, Vercel etc",
    },
    {
      title: "Advanced WordPress Development",
      issuer: "Online Certification",
      date: "2021",
      description: "Comprehensive certification in advanced WordPress development, custom themes, and plugin development.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
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
            My Academic Journey
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            My academic background and continuous learning journey in technology and software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Cards */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center space-x-3"
            >
              <AcademicCapIcon className="w-8 h-8 text-green-400" />
              <span>Education</span>
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={optimizedVariants.item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                {/* Degree and School */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-400 font-medium text-lg">
                    {edu.school}
                  </p>
                </div>

                {/* Year, Location, CGPA - Styled Badges */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  {/* Year Badge */}
                  <div className="flex items-center space-x-1 bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2">
                    <CalendarIcon className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm font-medium">{edu.date}</span>
                  </div>

                  {/* Location Badge */}
                  <div className="flex items-center space-x-1 bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2">
                    <MapPinIcon className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm">{edu.Location}</span>
                  </div>

                  {/* CGPA Badge */}
                  {edu.grade && (
                    <div className="flex items-center space-x-1 bg-blue-500/10 border border-green-500/50 rounded-lg px-3 py-2">
                      <TrophyIcon className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold text-sm">
                        CGPA : {edu.grade} 
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {edu.desc}
                </p>

                {/* Optional: Add subjects/skills learned */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {index === 0 && (
                    <>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                        Data Structures
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                        Algorithms
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                        OOP
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                        DBMS
                      </span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                        General Mechanics
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                        Technical Studies
                      </span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center space-x-3"
            >
              <TrophyIcon className="w-8 h-8 text-blue-400" />
              <span>Certifications & Achievements</span>
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrophyIcon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                          {cert.date}
                        </span>
                      </div>
                      
                      <p className="text-blue-300 text-lg mb-3">{cert.issuer}</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">
                Continuous Learning
              </h4>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Always staying updated with the latest technologies and industry trends through online courses, workshops, and hands-on projects.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {['Problem Solving', 'Leadership', 'Team Work', 'Innovation'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEducation;
