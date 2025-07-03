import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { testimonials } from '../constants';

// Define the Testimonial interface

const TestimonialsMasonryGrid: React.FC = () => {
  // Testimonials data

  // Get a different height for each testimonial to create masonry effect
  const getCardHeight = (index: number): string => {
    // Base the height on the content length, with some variation
    const review = testimonials[index].review;
    if (review === "To be added" || review.length < 50) return "auto";
    return review.length > 100 ? "auto" : "auto";
  };

  // Get a different primary color for each testimonial to provide visual variety
  const getCardAccentColor = (index: number): string => {
    const colors = [
      "from-blue-500 to-purple-500",
      "from-purple-500 to-pink-500",
      "from-emerald-500 to-blue-500",
      "from-amber-500 to-rose-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="w-full text-white py-20" id='testimonials'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Client Feedback
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Clients Are Saying
          </motion.h2>
          
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Don't just take my word for it — here's what clients have to say about their experiences working with me.
          </motion.p>
        </motion.div>

        {/* Masonry Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            // Skip empty testimonials
            if (testimonial.review === "To be added") return null;
            
            return (
              <motion.div
                key={testimonial.name}
                className={`relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : 
                  index === 1 ? 'lg:col-span-2' : ''
                }`}
                style={{ height: getCardHeight(index) }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Decorative Elements */}
                <div
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                  className={`absolute top-0 left-0 w-full h-1 opacity-80 rounded-t bg-gradient-to-r ${getCardAccentColor(index)}`}
                />
                
                <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10">
                  <svg viewBox="0 0 24 24" width="96" height="96" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                
                <div className="p-8">
                  {/* Review Content */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-lg italic">"{testimonial.review}"</p>
                  </div>
                  
                  {/* Divider */}
                  <div
                    className={`w-12 h-0.5 bg-gradient-to-r ${getCardAccentColor(index)} rounded mb-4`}
                  />
                  
                  {/* Client Info */}
                  <div>
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                
                {/* Quote Icon */}
                <div className="absolute bottom-4 right-4 text-gray-700">
                  <QuoteIcon size={28} />
                </div>
              </motion.div>
            );
          })}
          
          {/* Decorative Empty Card */}
          <motion.div
            className="hidden lg:block relative bg-blue-500/5 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-8 h-full flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-4"
              >
                <QuoteIcon size={36} className="text-blue-400" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Ready to collaborate?</h3>
              <p className="text-gray-400 mb-6">Let's build something amazing together.</p>
              
              <a 
                href="#contact" 
                className="px-5 py-2 bg-blue-600/70 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMasonryGrid;