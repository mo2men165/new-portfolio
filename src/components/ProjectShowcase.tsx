import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { myProjects, portfolioProjects } from '../constants';

const ProjectsShowcase: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const }
    }
  };

  return (
    <div className="w-full text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Featured Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Featured Live Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real-world applications built for clients, showcasing enterprise-level development with modern technologies and best practices.
            </p>
          </motion.div>

          <div className="space-y-12">
            {myProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Visual */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500">
                    {/* Background Image */}
                    <div className="aspect-video relative">
                      <img
                        src={project.texture}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                      
                      {/* Floating Logo */}
                      <div 
                        className="absolute top-6 left-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-2xl"
                        style={project.logoStyle}
                      >
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>

                      {/* Action Buttons Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                        <div className="flex gap-4">
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600/90 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-colors duration-300 backdrop-blur-md"
                          >
                            <ExternalLink size={18} />
                            <span>View Live</span>
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-700/90 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 backdrop-blur-md"
                          >
                            <Github size={18} />
                            <span>Source</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {project.subdesc}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-md border border-gray-700/50 px-4 py-2 rounded-lg"
                        >
                          {tag.path && (
                            <img
                              src={tag.path}
                              alt={`${tag.name} icon`}
                              className="w-5 h-5 object-contain"
                            />
                          )}
                          <span className="text-gray-300 text-sm font-medium">{tag.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>View Live Project</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400">
              Portfolio Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A collection of personal projects and clones demonstrating various technologies, design patterns, and development approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] p-6"
              >
                {/* Header with Logo and Actions */}
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                    style={project.logoStyle}
                  >
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600/80 hover:bg-blue-500 rounded-lg transition-colors duration-300"
                      title="View Live"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700/80 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                      title="View Source"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="flex items-center gap-2 bg-gray-900/60 backdrop-blur-md border border-gray-700/40 px-3 py-1.5 rounded-lg"
                        >
                          {/* {tag.path && (
                            <img
                              src={tag.path}
                              alt={`${tag.name} icon`}
                              className="w-4 h-4 object-contain"
                            />
                          )} */}
                          <span className="text-gray-300 text-xs font-medium">{tag.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 flex gap-3">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg transition-colors duration-300 text-sm flex-1 justify-center"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/30 text-gray-300 px-4 py-2 rounded-lg transition-colors duration-300 text-sm flex-1 justify-center"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;