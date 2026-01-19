import React from 'react';
import { motion } from 'framer-motion';
import { techStackIcons, additionalSkills } from '../constants';

const SimplifiedSkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const techCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <div className="w-full text-white py-20" id='skills'>
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable web applications from frontend to backend.
          </motion.p>
        </motion.div>

        {/* Core Tech Stack */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-12 text-white"
          >
            Core Technologies
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStackIcons.map((tech) => (
              <motion.div
                key={tech.name}
                variants={techCardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group flex flex-col items-center"
              >
                <div className="relative p-6 bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  
                  <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <img 
                      src={tech.img} 
                      alt={`${tech.name} icon`} 
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <h4 className="mt-4 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-12 text-white"
          >
            Expertise Areas
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  {category.category}
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="text-gray-300 text-sm py-2 px-3 bg-gray-900/40 rounded-lg border border-gray-700/30 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >

        </motion.div>
      </div>
    </div>
  );
};

export default SimplifiedSkillsSection;