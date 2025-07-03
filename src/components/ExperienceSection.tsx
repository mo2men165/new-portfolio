import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { expCards } from '../constants';

const ExperienceTimeline: React.FC= () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  return (
    <section className="text-white py-20" id='experience'>
      <div className="w-[90%] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A chronicle of my professional journey, highlighting key roles and responsibilities 
            that have shaped my expertise in web development and team leadership.
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Timeline Navigation (Left Side) */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              {expCards.map((exp, index) => (
                <motion.div 
                  key={index}
                  className={`relative cursor-pointer group transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gray-800/40 border-l-4 border-blue-500 shadow-lg' 
                      : 'bg-gray-800/20 border-l-4 border-transparent hover:border-blue-500/50'
                  } backdrop-blur-md rounded-lg p-4`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {/* Indicator */}
                  {activeIndex === index && (
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg -z-10"
                      layoutId="activeExperience"
                    />
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full overflow-hidden ${exp.nodeBG}`}>
                          <img 
                            src={exp.logoPath} 
                            alt={exp.title}
                            className={`object-contain ${exp.logoClass || 'w-6 h-6'}`}
                          />
                        </div>
                        <h3 className={`font-medium transition-colors duration-300 ${
                          activeIndex === index ? 'text-white' : 'text-gray-400'
                        }`}>
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.date}
                      </p>
                    </div>
                    
                    <ChevronRight 
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeIndex === index ? 'text-blue-400 translate-x-0' : 'text-gray-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`} 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Experience Details (Right Side) */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {expCards.map((exp, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                  {/* Company Logo & Job Title */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className={`flex items-center justify-center rounded-lg overflow-hidden ${exp.nodeBG} p-3`}>
                        <img 
                          src={exp.imgPath} 
                          alt={exp.title}
                          className={`object-contain ${exp.imgClass}`}
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 flex items-center gap-1 mt-1">
                          <Calendar size={14} />
                          {exp.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Quote */}
                  <div className="mb-8">
                    <blockquote className="relative border-l-4 border-blue-500 pl-6 py-2 italic text-gray-300">
                      <div className="absolute top-0 left-0 text-blue-500 text-4xl -mt-5 ml-2">
                        &ldquo;
                      </div>
                      {exp.review}
                      <div className="absolute bottom-0 right-0 text-blue-500 text-4xl -mb-5">
                        &rdquo;
                      </div>
                    </blockquote>
                  </div>
                  
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                          <div className="min-w-6 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                          </div>
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { ExperienceTimeline };