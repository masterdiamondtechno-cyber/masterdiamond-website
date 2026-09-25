import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Code2, Smartphone, Brain, Cpu, Globe, Database, Zap, Users, Award, Star } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const categories = ['All', 'Web Dev', 'Mobile', 'AI & ML', 'IoT', 'Custom Software'];

const projects = [
  {
    id: 1,
    name: 'AgriSense IoT Dashboard',
    category: 'IoT',
    description: 'Real-time soil moisture, temperature, and weather telemetry platform for 500+ smart farm sensors across Maharashtra.',
    tech: ['React.js', 'Node.js', 'MQTT', 'AWS IoT Core', 'TimescaleDB'],
    icon: Cpu,
    color: '#59B9B4',
    impact: '40% reduction in irrigation costs',
    client: 'AgriSense Technologies',
  },
  {
    id: 2,
    name: 'HealthBridge Patient Portal',
    category: 'Web Dev',
    description: 'HIPAA-compliant patient appointment, telemedicine, and medical records management platform for a chain of clinics.',
    tech: ['React.js', 'Python', 'PostgreSQL', 'AWS', 'WebRTC'],
    icon: Globe,
    color: '#2F8FA2',
    impact: '60% improvement in patient booking efficiency',
    client: 'HealthBridge Clinic',
  },
  {
    id: 3,
    name: 'RetailEdge Mobile App',
    category: 'Mobile',
    description: 'Cross-platform loyalty & inventory tracking app with real-time POS integration for a retail chain with 50+ locations.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
    icon: Smartphone,
    color: '#0B2340',
    impact: '35% increase in repeat customer purchases',
    client: 'RetailEdge India',
  },
  {
    id: 4,
    name: 'FinSight AI Analytics',
    category: 'AI & ML',
    description: 'Predictive credit scoring and loan approval engine using machine learning to automate decisions for an NBFC.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'PostgreSQL', 'Docker'],
    icon: Brain,
    color: '#2F8FA2',
    impact: '70% faster loan approval decisions',
    client: 'FinSight NBFC',
  },
  {
    id: 5,
    name: 'BuildTrack ERP System',
    category: 'Custom Software',
    description: 'End-to-end construction project management ERP — from material procurement to labor tracking and milestone billing.',
    tech: ['React.js', 'Java Spring Boot', 'MySQL', 'AWS', 'Docker'],
    icon: Database,
    color: '#59B9B4',
    impact: '50% reduction in project management overhead',
    client: 'BuildTrack Infra',
  },
  {
    id: 6,
    name: 'EduLearn LMS Platform',
    category: 'Web Dev',
    description: 'Feature-rich Learning Management System with live classes, auto-grading, progress analytics, and mobile app.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebRTC'],
    icon: Globe,
    color: '#0B2340',
    impact: '10,000+ students onboarded in 3 months',
    client: 'EduLearn Academy',
  },
  {
    id: 7,
    name: 'FleetSense GPS Tracker',
    category: 'IoT',
    description: 'Real-time GPS fleet management system with geofencing, driver behavior monitoring, and fuel consumption analytics.',
    tech: ['React.js', 'Node.js', 'MQTT', 'MongoDB', 'Google Maps API'],
    icon: Cpu,
    color: '#2F8FA2',
    impact: '25% fuel savings for 200+ vehicle fleet',
    client: 'FleetSense Logistics',
  },
  {
    id: 8,
    name: 'NexaChat AI Assistant',
    category: 'AI & ML',
    description: 'Custom conversational AI assistant for e-commerce customer support, integrated with product catalog and order systems.',
    tech: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'React.js'],
    icon: Brain,
    color: '#59B9B4',
    impact: '80% reduction in support ticket volume',
    client: 'NexaShop E-Commerce',
  },
  {
    id: 9,
    name: 'PropVista Real Estate App',
    category: 'Mobile',
    description: 'Property search, virtual tour, and lead management mobile app for a real estate developer with 1000+ listings.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS S3', 'Mapbox'],
    icon: Smartphone,
    color: '#0B2340',
    impact: '3x increase in qualified property leads',
    client: 'PropVista Realty',
  },
];

const stats = [
  { value: '10+', label: 'Projects Delivered', icon: Zap },
  { value: '100%', label: 'Client Satisfaction', icon: Star },
  { value: '5+', label: 'Industries Served', icon: Award },
  { value: '12+', label: 'Technologies Used', icon: Code2 },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B2340] py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F8FA2]/15 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#59B9B4]/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-5">
              OUR WORK
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-[2.8rem] lg:text-[3.8rem] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Projects That Drive{' '}
              <br />
              <span className="text-[#59B9B4]">Real Business Results.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 text-[1.15rem] leading-relaxed max-w-[680px] mx-auto">
              Explore our portfolio of digital solutions — from IoT platforms to AI-powered applications — each built to solve real business challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-12 bg-white border-b border-[#DDE2E2]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2F8FA2]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-[#2F8FA2]" />
                  </div>
                  <div className="text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#4A5568]">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#0B2340] text-white shadow-lg'
                    : 'bg-white border border-[#DDE2E2] text-[#4A5568] hover:border-[#2F8FA2] hover:text-[#0B2340]'
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, idx) => {
                const IconComp = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    whileHover={{ y: -6, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                    className="group bg-white border border-[#DDE2E2] rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    {/* Card Header */}
                    <div
                      className="p-6 flex items-start justify-between"
                      style={{ backgroundColor: `${project.color}12` }}
                    >
                      <div>
                        <span
                          className="inline-block text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 text-white"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.category}
                        </span>
                        <h3
                          className="text-[1.1rem] font-bold text-[#0B2340]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {project.name}
                        </h3>
                      </div>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ml-3"
                        style={{ backgroundColor: project.color }}
                      >
                        <IconComp size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-sm text-[#4A5568] leading-relaxed mb-4">{project.description}</p>

                      {/* Impact Badge */}
                      <div className="flex items-center gap-2 mb-5 bg-[#F7F8F8] rounded-lg px-3 py-2">
                        <Zap size={13} className="text-[#2F8FA2] flex-shrink-0" />
                        <span className="text-[0.78rem] font-semibold text-[#0B2340]">{project.impact}</span>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((t, ti) => (
                          <span
                            key={ti}
                            className="text-[0.7rem] font-semibold bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] px-2 py-0.5 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Client & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#DDE2E2]">
                        <span className="text-xs text-[#4A5568] font-medium">{project.client}</span>
                        <Link
                          to="/contact"
                          className="flex items-center gap-1 text-[0.78rem] font-bold text-[#2F8FA2] group-hover:text-[#0B2340] transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Similar Project <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B2340] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">START YOUR PROJECT</span>
            <h2 className="text-[2.2rem] font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Build Something Like This?
            </h2>
            <p className="text-white/80 mb-8">
              Share your idea with us and we'll craft a solution that delivers real results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-8 py-4 rounded-xl font-bold transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Start Your Project <ArrowRight size={17} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
