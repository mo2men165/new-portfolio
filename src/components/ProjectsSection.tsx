import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { myProjects } from '../constants';

const SimpleProjectShowcase: React.FC = () => {
  // Only show the first 3 projects in this simple showcase
  const featuredProjects = myProjects.slice(0, 4);
  
  return (
    <div className="w-[90%] mx-auto text-white py-20" id='work'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A selection of my recent work. These projects showcase my expertise in building modern, responsive web applications.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/about" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 md:mt-0">
              <span>View all projects</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
        
        {/* Projects Grid - Changed to 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Background */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src={project.texture} 
                  alt={`${project.title} background`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden"
                      style={project.logoStyle}
                    >
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      {tag.path && (
                        <img 
                          src={tag.path} 
                          alt={`${tag.name} icon`} 
                          className="w-4 h-4 object-contain"
                        />
                      )}
                      <span className="text-gray-300 text-xs">{tag.name}</span>
                    </div>
                  ))}
                  {project.tags.length > 3 && (
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <span className="text-gray-300 text-xs">+{project.tags.length - 3} more</span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm bg-blue-600/80 hover:bg-blue-500 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>View Site</span>
                  </a>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm bg-gray-700/80 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300"
          >
            <span>See more of my work</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export { SimpleProjectShowcase };