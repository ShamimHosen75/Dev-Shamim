import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../../data/constants';
import { optimizedVariants } from '../../utilities/smoothScroll';

const ModernProjects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  
  const categories = ['all', 'Web App', 'WordPress', 'Vibe Coding'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Limit to 6 projects initially, show all when showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const containerVariants = optimizedVariants.container;
  const itemVariants = optimizedVariants.item;

  return (
    <section id="projects" className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
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
            My Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web applications, WordPress solutions, and AI-powered projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setShowAll(false); // Reset showAll when filter changes
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-white shadow-lg shadow-[#1E90FF]/25'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={`${filter}-${showAll}`} // Force re-render when filter or showAll changes
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <EyeIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-blue-300 text-xs font-medium rounded-full border border-blue-500/30 capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{project.date}</p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded-md border border-slate-700">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show All Button */}
        {!showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-white font-semibold rounded-lg hover:from-[#1874CD] hover:to-[#00E6E6] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1E90FF]/25"
            >
              Show All Projects ({filteredProjects.length})
            </button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAll && filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-4 bg-slate-700 text-white font-semibold rounded-full hover:bg-slate-600 transition-all duration-300 hover:scale-105"
            >
              Show Less
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-700 rounded-full flex items-center justify-center">
              <CodeBracketIcon className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">
              No projects found
            </h3>
            <p className="text-slate-400">
              Try selecting a different category filter.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-16 max-w-8xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-slate-400 mb-6">
              Let's collaborate and bring your ideas to life with modern technology and creative solutions.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-white font-semibold rounded-lg hover:from-[#1874CD] hover:to-[#00E6E6] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1E90FF]/25">
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjects;
