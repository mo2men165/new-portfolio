import React, { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Clock, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser'
import { socialLinks } from '../constants';

const ContactSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isQuestHovered, setIsQuestHovered] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const accentColor = "text-blue-400";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formState.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if(formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
        
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormErrors({ 
        submit: "Failed to submit the form. Please try again or contact me directly via email." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-16 mt-10 relative overflow-hidden rounded-lg">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent" />
      
      {/* Floating code fragments - decorative */}
      <div className="absolute top-10 right-40 text-blue-500/20 text-xs font-mono transform rotate-12">
        const connect = () =&gt; {'{'}return new Promise();{'}'}
      </div>
      <div className="absolute bottom-20 left-1/4 text-purple-500/20 text-xs font-mono transform -rotate-6">
        import {'{'}collaboration{'}'} from 'future';
      </div>
      
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
            Get In Touch
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            variants={itemVariants}
          >
            Let's Create Something Extraordinary
          </motion.h2>
          
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </motion.p>
        </motion.div>
      
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column - Contact form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
              </div>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300 mb-4">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-gray-900/70 border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} focus:border-blue-500 rounded-lg text-white placeholder-gray-500 outline-none transition-colors duration-300`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 bg-gray-900/70 border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} focus:border-blue-500 rounded-lg text-white placeholder-gray-500 outline-none transition-colors duration-300`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject (Optional)</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 focus:border-blue-500 rounded-lg text-white placeholder-gray-500 outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hello, I'm interested in working with you on..."
                      rows={5}
                      className={`w-full px-4 py-3 bg-gray-900/70 border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} focus:border-blue-500 rounded-lg text-white placeholder-gray-500 outline-none transition-colors duration-300 resize-none`}
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                    )}
                  </div>
                  
                  {formErrors.submit && (
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 text-red-500 text-sm">
                      {formErrors.submit}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-700 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  
                  <p className="text-gray-400 text-sm text-center mt-4">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Right column - Contact details and social links */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-white/90 font-light leading-relaxed">
                I'm a passionate developer focused on creating immersive digital experiences 
                that combine cutting-edge technology with stunning visuals. Whether you need a 
                full-scale web application or a striking 3D portfolio, I bring your vision to life.
              </p>
              
              <p className="text-white/80 font-light">
                Based in <span className={accentColor}>Egypt</span>, working globally.
                Available for freelance projects, consulting, and collaborations.
              </p>
            </div>
          
            {/* Quick contact details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/50 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                </div>
                <a href="mailto:contact@moamenabdeltawab.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-[16px]">
                  contact@moamenabdeltawab.com
                </a>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/50 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Response Time</h4>
                </div>
                <p className="text-gray-300">Usually within 2-4 hours</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/50 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white">Delivery Time</h4>
                </div>
                <p className="text-gray-300">Within 1-2 Weeks</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/50 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                </div>
                <p className="text-gray-300">Cairo, Egypt (Remote-friendly)</p>
              </div>
            </div>
            
            {/* Social links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-blue-500/30 shadow-lg ${hovered === index ? 'shadow-blue-500/20' : 'shadow-blue-500/5'} transition-all duration-300 ${hovered === index ? 'transform -translate-y-1' : ''}`}>
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-2 ${hovered === index ? social.color : 'bg-gray-800'} transition-colors duration-300`}>
                        <img src={social.icon} alt={social.name} className="w-5 h-5" />
                      </div>
                      <span className="text-white text-sm font-medium">{social.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Project Questionnaire */}
            <div className="relative mt-8">
              <a
                href="https://forms.gle/ZnLcpmb1NeGBi64e7"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onMouseEnter={() => setIsQuestHovered(true)}
                onMouseLeave={() => setIsQuestHovered(false)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-0.5">
                  {/* Animated border effect */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70 transition-opacity duration-300 ${isQuestHovered ? 'opacity-100' : 'opacity-30'}`} style={{ 
                      transform: 'rotate(0deg)', 
                      filter: 'blur(12px)',
                    }}></div>
                  </div>
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl z-10 overflow-hidden">
                    {/* Decorative shapes */}
                    <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-blue-600/20 blur-xl transition-all duration-500 ${isQuestHovered ? 'scale-125' : 'scale-100'}`}></div>
                    <div className={`absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-purple-600/20 blur-xl transition-all duration-500 ${isQuestHovered ? 'scale-125' : 'scale-100'}`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-5">
                        <div className="relative">
                          {/* Icon background with glow */}
                          <div className={`absolute inset-0 bg-blue-500 rounded-xl blur-lg transition-opacity duration-300 ${isQuestHovered ? 'opacity-100' : 'opacity-50'}`}></div>
                          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2">New Project Questionnaire</h4>
                          <p className="text-white/70 mb-3">
                            Have a project in mind? Fill out my brief questionnaire to help me understand your needs better.
                          </p>
                          <div className="inline-flex items-center gap-2 text-blue-300 font-medium group">
                            <span className="transition-colors duration-300 group-hover:text-white">Complete questionnaire</span>
                            <svg className={`w-5 h-5 transition-transform duration-500 ${isQuestHovered ? 'translate-x-2' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;