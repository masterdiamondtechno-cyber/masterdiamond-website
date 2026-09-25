import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, ChevronDown } from 'lucide-react';
import { faqData } from '../data/faq';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B2340] pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F8FA2]/15 rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-5">
              GET IN TOUCH
            </span>
            <h1 className="text-[2.8rem] lg:text-[3.8rem] font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Let's Build Something <span className="text-[#59B9B4]">Great.</span>
            </h1>
            <p className="text-white/85 text-[1.15rem] leading-relaxed max-w-[680px] mx-auto">
              Whether you need a complete enterprise software platform, a mobile app, or a simple consultation — our technical team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION (Form + Info) */}
      <section className="relative -mt-16 pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 bg-white border border-[#DDE2E2] shadow-xl rounded-2xl overflow-hidden sticky top-[96px]"
            >
              <div className="bg-[#2F8FA2] p-8 text-white relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-white/10">
                  <MessageSquare size={120} />
                </div>
                <h3 className="text-2xl font-bold relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact Details</h3>
                <p className="text-white/80 text-sm mt-2 relative z-10">Reach out directly or visit our office.</p>
              </div>

              <div className="p-8 flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7F8F8] flex items-center justify-center flex-shrink-0 text-[#2F8FA2]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider mb-1">Our Office</h4>
                    <p className="text-[0.95rem] text-[#4A5568] leading-relaxed">
                      Pune, Maharashtra,<br />India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7F8F8] flex items-center justify-center flex-shrink-0 text-[#2F8FA2]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider mb-1">Call Us</h4>
                    <a href="tel:+917972359869" className="text-[0.95rem] text-[#4A5568] hover:text-[#2F8FA2] transition-colors">
                      +91 79723 59869
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7F8F8] flex items-center justify-center flex-shrink-0 text-[#2F8FA2]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:hello@masterdiamond.com" className="text-[0.95rem] text-[#4A5568] hover:text-[#2F8FA2] transition-colors">
                      hello@masterdiamond.com
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#DDE2E2]">
                  <h4 className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider mb-4">Connect With Us</h4>
                  <div className="flex flex-wrap gap-3">
                    {['LinkedIn', 'Twitter', 'Instagram'].map((label, i) => (
                      <a key={i} href="#" className="px-4 py-2 rounded-lg bg-[#F7F8F8] hover:bg-[#2F8FA2] text-[#0B2340] hover:text-white text-xs font-bold transition-all duration-300 hover:shadow-md">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-8 bg-white border border-[#DDE2E2] shadow-xl rounded-2xl p-8 lg:p-12"
            >
              <h3 className="text-[1.8rem] font-bold text-[#0B2340] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Send us a message</h3>
              <p className="text-[#4A5568] mb-8">Fill out the form below and our technical team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2F8FA2] focus:bg-white transition-all font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2F8FA2] focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider">Subject / Service Interest *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2F8FA2] focus:bg-white transition-all font-medium appearance-none"
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Custom Software">Custom Software Engineering</option>
                    <option value="AI / Machine Learning">AI / Machine Learning</option>
                    <option value="IoT Platform">IoT Platform</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[0.8rem] font-bold text-[#0B2340] uppercase tracking-wider">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#2F8FA2] focus:bg-white transition-all font-medium resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex items-center justify-center gap-2 bg-[#0B2340] hover:bg-[#2F8FA2] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-semibold flex items-center gap-2"
                    >
                      <CheckCircle2 size={18} />
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#F7F8F8]">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#0B2340] uppercase mb-3">COMMON QUESTIONS</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqData.map((faq, idx) => {
              const isOpen = activeFaq === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-[#2F8FA2] shadow-md' : 'bg-white border-[#DDE2E2] hover:border-[#2F8FA2]/50'}`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`font-bold text-[1.05rem] pr-4 ${isOpen ? 'text-[#0B2340]' : 'text-[#0B2340]'}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#0B2340] text-white' : 'bg-[#F7F8F8] text-[#4A5568]'}`}>
                      <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-[#4A5568] leading-relaxed text-[0.95rem]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
