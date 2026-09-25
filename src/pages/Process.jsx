import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target, PenTool, Code, Rocket, Activity, Zap, RefreshCw, Eye, ShieldCheck } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const timelineSteps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    icon: Target,
    color: '#0B2340',
    desc: 'We start by understanding your business goals, target audience, and technical constraints. This ensures our software aligns perfectly with your commercial objectives.',
    deliverables: ['Business Requirements Document', 'Technical Architecture Plan', 'Project Milestone Timeline']
  },
  {
    num: '02',
    title: 'UI/UX Design',
    icon: PenTool,
    color: '#2F8FA2',
    desc: 'Our design team creates intuitive wireframes and interactive prototypes. We focus on minimal, user-first interfaces that reduce cognitive load.',
    deliverables: ['Interactive Figma Prototype', 'Design System & Component Library', 'User Journey Maps']
  },
  {
    num: '03',
    title: 'Agile Development',
    icon: Code,
    color: '#59B9B4',
    desc: 'We write clean, modular code using modern frameworks. Our 2-week agile sprints provide complete transparency and continuous delivery of working features.',
    deliverables: ['Bi-weekly Sprint Demos', 'Clean, Documented Code', 'Automated Unit Tests']
  },
  {
    num: '04',
    title: 'QA & Testing',
    icon: Activity,
    color: '#0B2340',
    desc: 'Rigorous testing guarantees zero-defect performance. We test across devices, browsers, and simulated heavy loads to ensure complete reliability.',
    deliverables: ['QA Test Reports', 'Performance & Load Metrics', 'Security Vulnerability Audit']
  },
  {
    num: '05',
    title: 'Deployment & Launch',
    icon: Rocket,
    color: '#2F8FA2',
    desc: 'We configure scalable cloud hosting (AWS/Azure) and set up CI/CD pipelines for seamless deployment with zero downtime during the launch.',
    deliverables: ['Cloud Infrastructure Setup', 'CI/CD Pipeline Configuration', 'Live Production Release']
  },
  {
    num: '06',
    title: 'Post-Launch SLA & Evolution',
    icon: RefreshCw,
    color: '#59B9B4',
    desc: 'Our partnership continues after launch. We provide 24/7 uptime monitoring, proactive security patches, and iterative feature development based on user feedback.',
    deliverables: ['24/7 Uptime Monitoring', 'Security Patches', 'Iterative Feature Upgrades']
  }
];

export default function Process() {
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
              OUR METHODOLOGY
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-[2.8rem] lg:text-[3.8rem] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              From Idea to Impact:{' '}
              <br />
              <span className="text-[#59B9B4]">Our 6-Step Process.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 text-[1.15rem] leading-relaxed max-w-[680px] mx-auto">
              We follow a structured, transparent software engineering methodology to ensure every product is delivered on time, within scope, and aligned with your business targets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase mb-3">THE DELIVERY ROADMAP</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Step-by-Step Software Engineering
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-[#DDE2E2] -translate-x-[1px]" />

            <div className="flex flex-col gap-12 lg:gap-16">
              {timelineSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                const Icon = step.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Half */}
                    <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                      <div className="bg-[#F7F8F8] border border-[#DDE2E2] rounded-2xl p-7 w-full hover:shadow-lg transition-shadow duration-300">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {!isEven && <span className="text-[2rem] font-bold" style={{ color: step.color, fontFamily: "'Space Grotesk', sans-serif" }}>{step.num}</span>}
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${step.color}15` }}>
                            <Icon size={20} style={{ color: step.color }} />
                          </div>
                          {isEven && <span className="text-[2rem] font-bold" style={{ color: step.color, fontFamily: "'Space Grotesk', sans-serif" }}>{step.num}</span>}
                        </div>

                        <h3 className="text-[1.25rem] font-bold text-[#0B2340] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {step.title}
                        </h3>
                        <p className="text-[0.95rem] text-[#4A5568] leading-relaxed mb-5">
                          {step.desc}
                        </p>

                        <div className={`flex flex-col gap-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          <div className="text-[0.75rem] font-bold text-[#2F8FA2] uppercase tracking-wider mb-1">Key Deliverables:</div>
                          {step.deliverables.map((del, di) => (
                            <div key={di} className={`flex items-center gap-2 text-[0.85rem] font-semibold text-[#0B2340] bg-white border border-[#DDE2E2] px-3 py-1.5 rounded-lg ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                              <CheckCircle2 size={14} className="text-[#59B9B4]" />
                              {del}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="hidden md:flex absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-[50%] w-12 h-12 bg-white border-[3px] border-[#2F8FA2] rounded-full items-center justify-center z-10 shadow-sm">
                      <div className="w-3 h-3 bg-[#0B2340] rounded-full" />
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#0B2340] uppercase mb-3">WHY OUR PROCESS WORKS</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Designed for Transparency & Speed
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Continuous Visibility', icon: Eye, color: '#0B2340', desc: 'Regular sprint demos and transparent status reports ensure you have complete control over product progress at every milestone.' },
              { title: 'Zero-Defect Standard', icon: ShieldCheck, color: '#2F8FA2', desc: 'Rigorous testing across browsers, screen sizes, and backend loads guarantees a flawless launch experience.' },
              { title: 'Long-Term Partnership', icon: Zap, color: '#59B9B4', desc: 'We don\'t disappear after deployment. Our team provides continuous uptime monitoring, security patches, and feature additions.' },
            ].map((ben, idx) => {
              const IconComp = ben.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-[#DDE2E2] rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${ben.color}15` }}>
                    <IconComp size={24} style={{ color: ben.color }} />
                  </div>
                  <h4 className="text-[1.25rem] font-bold text-[#0B2340] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{ben.title}</h4>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{ben.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B2340] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">START A PROJECT</span>
            <h2 className="text-[2.2rem] font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Begin Step 01?
            </h2>
            <p className="text-white/80 mb-8">
              Schedule an initial discovery call to map out your software architecture roadmap with MASTER DIAMOND.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-8 py-4 rounded-xl font-bold transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Schedule Discovery Call <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
