import {
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Bio } from '../../data/constants';
import { optimizedVariants } from '../../utilities/smoothScroll';

const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (EmailJS or other service)
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: Bio.email,
      href: `mailto:${Bio.email}`,
      color: 'text-blue-400'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: null,
      color: 'text-green-400'
    },
    {
      icon: PhoneIcon,
      label: 'Available',
      value: '24/7 for projects',
      href: null,
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: Bio.github,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: Bio.linkedin,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: Bio.twitter,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: Bio.facebook,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-8 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={optimizedVariants.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'm available for freelance work and exciting opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={optimizedVariants.slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] text-white font-semibold rounded-lg hover:from-[#1874CD] hover:to-[#00E6E6] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#1E90FF]/25"
                >
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={optimizedVariants.slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={optimizedVariants.fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.label}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={optimizedVariants.scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              variants={optimizedVariants.fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-white mb-3">
                Ready to Start?
              </h4>
              <p className="text-slate-300 text-sm mb-4">
                I'm available for freelance projects and full-time opportunities. Let's discuss how we can work together.
              </p>
              <a
                href={`mailto:${Bio.email}`}
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Send Direct Email</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
