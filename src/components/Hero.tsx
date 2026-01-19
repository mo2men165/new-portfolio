import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] as const }
    }
  };

  const sphereVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" as const }
    }
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden mt-24 xl:mt-0">
      {/* Background elements - only the blur gradients, no background color */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
      
      <div className="relative container mx-auto px-6 py-16 z-10 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row w-full lg:w-[90%] justify-between gap-8 lg:gap-16 items-center">
          {/* Text Content (Left Side) */}
          <motion.div 
            className="w-full lg:flex-1"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-3">
              <span className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-md px-4 py-2 rounded-full text-blue-400 font-medium border border-blue-500/20">
                <Github size={16} className="text-blue-400" />
                Full-Stack Developer
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Mo'men Abdeltawab
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              I craft responsive and performant web experiences with modern technologies. Specializing in React, TypeScript, and Node.js to build elegant solutions for complex problems.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="/about" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition-colors duration-300">
                View My Work
                <ArrowRight size={18} />
              </a>
              
              <a href="#contact" className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-md px-6 py-3 rounded-lg text-gray-300 hover:text-white border border-gray-700/50 transition-all duration-300">
                Contact Me
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex items-center gap-8"
            >
              <a href="https://github.com/mo2men165" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/moamenn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:contact@moamenabdeltawab.com" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Visual Element (Right Side) */}
          <motion.div 
            className="w-full lg:flex-1 h-[400px] lg:h-[500px] relative flex justify-center lg:justify-end"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={sphereVariants}
          >
            <div className="absolute inset-0 flex items-center lg:justify-end">
              {/* Code editor visualization */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:mr-8">
                {/* Editor window */}
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  {/* Window header */}
                  <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-xs text-gray-400">portfolio.tsx</div>
                  </div>
                  
                  {/* Code content */}
                  <div className="bg-gray-900 border border-gray-700 p-4 font-mono text-sm">
                    <div className="grid grid-cols-12 gap-4">
                      {/* Line numbers */}
                      <div className="col-span-1 text-right text-gray-600">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                      </div>
                      
                      {/* Code */}
                      <div className="col-span-11">
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> <span className="text-white">=</span> <span className="text-orange-400">{`{`}</span></div>
                        <div className="pl-4"><span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-yellow-300">'Mo'men Abdeltawab'</span><span className="text-white">,</span></div>
                        <div className="pl-4"><span className="text-green-400">title</span><span className="text-white">:</span> <span className="text-yellow-300">'Full-Stack Developer'</span><span className="text-white">,</span></div>
                        <div className="pl-4"><span className="text-green-400">skills</span><span className="text-white">:</span> <span className="text-orange-400">[</span><span className="text-yellow-300">'React'</span><span className="text-white">,</span> <span className="text-yellow-300">'TypeScript'</span><span className="text-white">,</span> <span className="text-yellow-300">'Node.js'</span><span className="text-orange-400">]</span><span className="text-white">,</span></div>
                        <div className="pl-4"><span className="text-green-400">projects</span><span className="text-white">:</span> <span className="text-orange-400">{'() => '}</span><span className="text-purple-400">import</span><span className="text-orange-400">(</span><span className="text-yellow-300">'./projects'</span><span className="text-orange-400">)</span><span className="text-white">,</span></div>
                        <div className="pl-4"><span className="text-green-400">contact</span><span className="text-white">:</span> <span className="text-yellow-300">'contact@moamenabdeltawab.com'</span></div>
                        <div><span className="text-orange-400">{'}'}</span><span className="text-white">;</span></div>
                        <div></div>
                        <div><span className="text-purple-400">export default</span> <span className="text-blue-400">Developer</span><span className="text-white">;</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements around the code editor */}
                <motion.div
                  className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/40 rounded-lg flex items-center justify-center shadow-lg transform rotate-12"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [12, 5, 12]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <img src="/images/react.svg" alt="React" className="w-10 h-10" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-blue-600/40 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [-12, -5, -12]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <img src="/images/typescript.png" alt="TypeScript" className="w-8 h-8" />
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -right-10 w-12 h-12 bg-green-600/40 rounded-lg flex items-center justify-center shadow-lg"
                  animate={{ 
                    x: [0, 5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <img src="/images/node.svg" alt="Node.js" className="w-8 h-8" />
                </motion.div>
                
                {/* Particle effects */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    initial={{ 
                      x: Math.random() * 500 - 250, 
                      y: Math.random() * 500 - 250,
                      opacity: Math.random() * 0.7 + 0.3,
                      scale: Math.random() * 1.5 + 0.5
                    }}
                    animate={{ 
                      y: [
                        Math.random() * 500 - 250, 
                        Math.random() * 500 - 250
                      ],
                      opacity: [
                        Math.random() * 0.5 + 0.3, 
                        Math.random() * 0.7 + 0.3
                      ]
                    }}
                    transition={{ 
                      duration: Math.random() * 8 + 8, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;