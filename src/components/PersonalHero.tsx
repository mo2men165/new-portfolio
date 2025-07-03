import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code2, Lightbulb, Layers, FolderOpen } from 'lucide-react';

const PersonalHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const floatingVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.8 }
    }
  };

  // Personal stats that will animate
  const personalStats = [
    { icon: Code2, label: "Lines of Code", value: "50K+", delay: 1.2 },
    { icon: Lightbulb, label: "Problems Solved", value: "100+", delay: 1.4 },
    { icon: Layers, label: "Tech Skills", value: "60+", delay: 1.6 },
    { icon: FolderOpen, label: "Projects Built", value: "50+", delay: 1.8 },
  ];

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-32 right-20 w-80 h-80 rounded-full bg-blue-400/8 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-purple-400/8 blur-3xl" />
      
      <div className="relative container mx-auto px-6 pt-32 pb-20 z-10 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          
          {/* Personal Content (Left Side) */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-gray-800/60 backdrop-blur-md px-4 py-2 rounded-full text-purple-400 font-medium border border-purple-500/20">
                <MapPin size={16} className="text-purple-400" />
                Egypt • Remote Ready
              </span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                The Developer <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                  Behind the Code
                </span>
              </h1>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar size={18} />
                <span>Self-taught since 2023</span>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              Hey there! I'm Mo'men, a passionate full-stack developer who believes in learning by building. 
              Every line of code I write is a step forward in my journey of creating meaningful digital experiences.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white">Quick Facts</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {personalStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-lg p-4 text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: stat.delay, duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual Element (Right Side) */}
          <motion.div 
            className="relative flex justify-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={floatingVariants}
          >
            <div className="relative">
              {/* Main profile card */}
              <div className="relative bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl max-w-sm">
                {/* Avatar placeholder - you can replace with your actual photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
                  M
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-white">Mo'men Abdeltawab</h3>
                  <p className="text-blue-400 font-medium">Full-Stack Developer</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <MapPin size={14} />
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
                
                {/* Status indicator */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Available for opportunities</span>
                </div>
              </div>
              
              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-4 -right-6 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-lg px-3 py-2 text-sm font-medium text-blue-300"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [2, -2, 2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                React Expert
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-4 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-lg px-3 py-2 text-sm font-medium text-purple-300"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                TypeScript Lover
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-8 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-lg px-3 py-2 text-sm font-medium text-green-300"
                animate={{ 
                  x: [0, 6, 0],
                  y: [0, -4, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                Node.js
              </motion.div>
              
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    initial={{ 
                      x: Math.random() * 400 - 200, 
                      y: Math.random() * 400 - 200,
                      opacity: Math.random() * 0.8 + 0.2,
                      scale: Math.random() * 1.2 + 0.3
                    }}
                    animate={{ 
                      y: [
                        Math.random() * 400 - 200, 
                        Math.random() * 400 - 200
                      ],
                      opacity: [
                        Math.random() * 0.4 + 0.2, 
                        Math.random() * 0.8 + 0.2
                      ]
                    }}
                    transition={{ 
                      duration: Math.random() * 10 + 6, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHero;