import React from 'react';
import { motion } from 'framer-motion';
import { techStackIcons, additionalSkills } from '../constants';

const MernStackSkillsDisplay: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const techCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full text-white py-20" id='skills'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
            variants={itemVariants}
          >
            Technical Expertise
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            variants={itemVariants}
          >
            MERN Stack Proficiency
          </motion.h2>
          
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Leveraging the power of MongoDB, Express.js, React, and Node.js to build scalable, 
            modern web applications with seamless front-to-back integration.
          </motion.p>
        </motion.div>

        {/* Core Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {techStackIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group"
              variants={techCardVariants}
              whileHover="hover"
            >
              <div className="relative h-full p-1">
                {/* Card Background with Glass Effect */}
                <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300"></div>
                
                {/* Glowing Orb Behind Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full bg-blue-500/5 blur-xl group-hover:bg-blue-500/15 transition-all duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center py-8 px-4 z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 relative">
                    <img 
                      src={tech.img} 
                      alt={`${tech.name} icon`} 
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  
                  {/* Animated Line */}
                  <div className="mt-3 relative">
                    <div className="h-0.5 w-10 bg-gray-700 rounded"></div>
                    <motion.div 
                      className="absolute top-0 left-0 h-0.5 bg-blue-500 rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Competencies</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and practices that enable me to deliver
              end-to-end solutions from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {additionalSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">
                    {category.category}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-800/60 rounded-full text-sm text-gray-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 64, 175, 0.2)" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Skills Chart/Visualization */}
        <motion.div
          className="mt-20 bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white">Expertise Level</h3>
            <p className="text-gray-400 mt-2">Relative proficiency across different technology domains</p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { category: "Frontend Development", percentage: 95 },
              { category: "Backend Architecture", percentage: 85 },
              { category: "Database Management", percentage: 80 },
              { category: "DevOps & Deployment", percentage: 75 },
              { category: "UI/UX Design Implementation", percentage: 90 }
            ].map((item, index) => (
              <div key={item.category} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-blue-400">{item.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MernStackSkillsDisplay;