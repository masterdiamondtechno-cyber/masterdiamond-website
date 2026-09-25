import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Globe, Smartphone, Code, Brain, Cpu, Cloud,
  TrendingUp, Search, ShieldCheck, Layout, Star, Quote, ChevronDown,
  Zap, Target, Users, Award
} from 'lucide-react';
import { servicesData } from '../data/services';
import { industriesData } from '../data/industries';
import * as LucideIcons from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 10, suffix: '+', label: 'Projects Delivered', desc: 'Web, mobile & enterprise solutions', icon: Zap, color: 'bg-[#0B2340] text-white' },
  { value: 12, suffix: '+', label: 'Technologies', desc: 'React, Node, Python, AWS & more', icon: Code, color: 'bg-[#2F8FA2] text-white' },
  { value: 8, suffix: '', label: 'Digital Services', desc: 'Full-spectrum software solutions', icon: Target, color: 'bg-[#59B9B4] text-[#0B2340]' },
  { value: 5, suffix: '+', label: 'Industries Served', desc: 'Healthcare to Fintech & beyond', icon: Award, color: 'bg-[#F7F8F8] text-[#0B2340] border border-[#DDE2E2]' },
];

const serviceHighlights = servicesData.slice(0, 6);

const testimonials = [
  {
    quote: "MASTER DIAMOND delivered a full-stack IoT telemetry platform for our smart agriculture network ahead of schedule. The code quality and documentation were exceptional.",
    author: "Rajesh Kulkarni",
    role: "CTO",
    company: "AgriSense Technologies",
    rating: 5
  },
  {
    quote: "Their React web app for our clinic improved patient booking efficiency by 60%. Professional team, great communication throughout.",
    author: "Dr. Priya Mehta",
    role: "Director",
    company: "HealthBridge Clinic",
    rating: 5
  },
  {
    quote: "We needed a cross-platform mobile app fast. MASTER DIAMOND delivered a polished React Native solution in 8 weeks that users absolutely love.",
    author: "Sunil Pawar",
    role: "Founder",
    company: "RetailEdge India",
    rating: 5
  }
];

const whyUs = [
  { num: '01', title: 'UNDERSTAND', desc: 'Deep-dive into your business goals, user needs, and technical requirements before writing a single line of code.', points: ['Business alignment sessions', 'User requirement audit'] },
  { num: '02', title: 'CREATE', desc: 'Transform ideas into intuitive digital experiences with clean, modular architecture and minimal UX design principles.', points: ['Swiss minimal UI/UX', 'Modular React frontend'] },
  { num: '03', title: 'SCALE', desc: 'Build resilient cloud solutions designed to scale effortlessly as your business grows and user numbers increase.', points: ['AWS microservices', 'High-concurrency DB'] },
  { num: '04', title: 'SUPPORT', desc: 'Stay connected long past launch with proactive monitoring, security patches, and continuous feature evolution.', points: ['24/7 telemetry SLA', 'Continuous security patches'] },
];

const quickIndustries = industriesData.slice(0, 6);

export default function Home() {
  return (
    <div className="bg-white">

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#F7F8F8] overflow-hidden py-20 lg:py-28">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#2F8FA2]/10 to-transparent rounded-full translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#59B9B4]/8 to-transparent rounded-full -translate-x-1/3 translate-y-1/4" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase bg-[#2F8FA2]/10 px-3.5 py-1.5 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 bg-[#2F8FA2] rounded-full animate-pulse" />
                  DIGITAL SOLUTIONS • PUNE, INDIA
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.12] text-[#0B2340] mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
              >
                We Build{' '}
                <span className="relative">
                  <span className="text-[#2F8FA2]">Digital Solutions</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8C50 4 100 2 150 6C200 10 250 4 298 6" stroke="#59B9B4" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}That Move Businesses Forwardd.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-[1.1rem] text-[#4A5568] leading-relaxed mb-8 max-w-[520px]">
                MASTER DIAMOND helps businesses turn ideas into powerful digital experiences — through web development, mobile apps, custom software, IoT, AI and cloud technologies.
              </motion.p>

              {/* Tech Pills */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-9">
                {['React & Web Apps', 'iOS & Android', 'Cloud & IoT', 'AI & Machine Learning'].map((item, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#0B2340] bg-white border border-[#DDE2E2] px-3.5 py-2 rounded-md shadow-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <CheckCircle2 size={13} className="text-[#2F8FA2]" />
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-[#0B2340] hover:bg-[#2F8FA2] text-white px-7 py-3.5 rounded-xl font-bold text-[0.95rem] transition-all duration-200 hover:shadow-xl hover:shadow-[#2F8FA2]/30 hover:-translate-y-0.5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Explore Services
                  <ArrowRight size={17} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#0B2340] text-[#0B2340] hover:bg-[#0B2340] hover:text-white px-7 py-3.5 rounded-xl font-bold text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Start a Project
                </Link>
              </motion.div>

              {/* Trust signals */}
              <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10 pt-8 border-t border-[#DDE2E2]">
                <div className="flex -space-x-2.5">
                  {['A', 'B', 'C', 'D'].map((l, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
                      style={{ backgroundColor: ['#0B2340','#2F8FA2','#59B9B4','#4A5568'][i] }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-xs text-[#4A5568] font-medium">Trusted by businesses across India</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating tech composition */}
              <div className="relative bg-white rounded-3xl border border-[#DDE2E2] shadow-2xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-[#2F8FA2]/10 to-transparent rounded-full translate-x-1/4 -translate-y-1/4" />

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-mono text-[#4A5568]">masterdiamond.io</span>
                </div>

                {/* Service Cards Mini */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Web Development', icon: Globe, color: '#2F8FA2' },
                    { label: 'Mobile Apps', icon: Smartphone, color: '#0B2340' },
                    { label: 'AI & Machine Learning', icon: Brain, color: '#59B9B4' },
                    { label: 'IoT Solutions', icon: Cpu, color: '#2F8FA2' },
                  ].map(({ label, icon: Icon, color }, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-[#DDE2E2] bg-[#F7F8F8] hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
                        <Icon size={16} color={color} />
                      </div>
                      <span className="text-[0.78rem] font-semibold text-[#0B2340]" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Mini */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-3"
                >
                  <div className="flex-1 bg-[#0B2340] rounded-xl p-3.5 text-center">
                    <div className="text-xl font-bold text-[#59B9B4]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>10+</div>
                    <div className="text-[0.7rem] text-white/80 font-medium">Projects</div>
                  </div>
                  <div className="flex-1 bg-[#2F8FA2] rounded-xl p-3.5 text-center">
                    <div className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>12+</div>
                    <div className="text-[0.7rem] text-white/80 font-medium">Technologies</div>
                  </div>
                  <div className="flex-1 bg-[#F7F8F8] border border-[#DDE2E2] rounded-xl p-3.5 text-center">
                    <div className="text-xl font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>08</div>
                    <div className="text-[0.7rem] text-[#4A5568] font-medium">Services</div>
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-[#2F8FA2] text-white px-4 py-2 rounded-xl shadow-xl text-xs font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ✓ Trusted IT Partner
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white border border-[#DDE2E2] text-[#0B2340] px-4 py-2 rounded-xl shadow-xl text-xs font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                🚀 Pune, India
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-white border-b border-[#DDE2E2]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`${stat.color} rounded-2xl p-6 lg:p-8`}
                >
                  <div className="flex items-center gap-2 mb-3 opacity-70">
                    <Icon size={18} />
                  </div>
                  <div
                    className="text-[2.8rem] lg:text-[3.5rem] font-bold leading-none mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-bold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.label}
                  </div>
                  <p className="text-[0.8rem] opacity-80 leading-relaxed">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase mb-3">
                WHAT WE DO
              </span>
              <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340] leading-tight max-w-[480px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Technology Solutions Built Around Your Goals
              </h2>
            </motion.div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-[#2F8FA2] font-bold hover:text-[#0B2340] transition-colors text-sm whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceHighlights.map((service, idx) => {
              const IconComp = LucideIcons[service.iconName] || LucideIcons.Code;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  className="group bg-white border border-[#DDE2E2] rounded-2xl p-7 hover:border-[#2F8FA2]/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${service.accentColor}18` }}
                    >
                      <IconComp size={22} color={service.accentColor} />
                    </div>
                    <span className="text-[0.75rem] font-bold text-[#4A5568] opacity-60" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-[1.05rem] font-bold text-[#0B2340] mb-2.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-5">{service.shortDescription}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <span key={i} className="text-[0.72rem] font-semibold bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] px-2.5 py-1 rounded-md">
                        {cap}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 text-[0.82rem] font-bold text-[#2F8FA2] group-hover:text-[#0B2340] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Learn More <ArrowRight size={13} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#0B2340] text-[#0B2340] hover:bg-[#0B2340] hover:text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore All 10 Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW (DARK) ===== */}
      <section className="py-20 bg-[#0B2340] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F8FA2]/10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#59B9B4]/8 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">
                ABOUT MASTER DIAMOND
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-[2rem] lg:text-[2.8rem] font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                We Don't Just Build Software.{' '}
                <span className="text-[#59B9B4]">We Build Possibilities.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/85 text-[1.05rem] leading-relaxed mb-4">
                MASTER DIAMOND is a technology solutions company focused on helping businesses embrace digital transformation.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/75 leading-relaxed mb-8">
                We bring together development, design, and emerging technologies to create digital products that are easy to use, scalable, and aligned with business objectives.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/15">
                {[
                  { title: 'Who We Are', desc: 'Tech innovators & software engineers.' },
                  { title: 'What We Believe', desc: 'Technology must deliver real value.' },
                  { title: 'How We Work', desc: 'Agile, transparent & goal-oriented.' },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-bold text-[#59B9B4] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h4>
                    <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Discover Our Story <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Why Us Cards */}
            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-2xl p-5 border ${idx % 2 === 0 ? 'bg-white/8 border-white/15' : 'bg-[#2F8FA2]/20 border-[#2F8FA2]/30'}`}
                >
                  <div className="text-[1.5rem] font-bold text-[#59B9B4] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.num}
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h4>
                  <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                  <div className="mt-3 flex flex-col gap-1">
                    {item.points.map((pt, pi) => (
                      <div key={pi} className="flex items-center gap-1.5 text-[0.72rem] text-[#59B9B4] font-semibold">
                        <CheckCircle2 size={11} />
                        {pt}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES PREVIEW ===== */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#0B2340] uppercase mb-3">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340] leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Digital Solutions Across Industries
              </h2>
            </motion.div>
            <Link
              to="/industries"
              className="flex items-center gap-2 text-[#2F8FA2] font-bold hover:text-[#0B2340] transition-colors text-sm whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              All Industries <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickIndustries.map((ind, idx) => {
              const IconComp = LucideIcons[ind.iconName] || LucideIcons.Building;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-[#DDE2E2] rounded-2xl p-5 text-center hover:border-[#2F8FA2]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2F8FA2]/10 flex items-center justify-center mx-auto mb-3">
                    <IconComp size={22} className="text-[#2F8FA2]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{ind.title}</h3>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 border-2 border-[#0B2340] text-[#0B2340] hover:bg-[#0B2340] hover:text-white px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore All 10 Industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase mb-3">
              CLIENT EXPERIENCE
            </span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Trusted Through Every Step
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={`rounded-2xl p-7 border flex flex-col ${idx === 0 ? 'bg-[#0B2340] border-[#0B2340]' : 'bg-white border-[#DDE2E2]'}`}
              >
                <Quote size={28} className={`mb-4 ${idx === 0 ? 'text-[#59B9B4]' : 'text-[#2F8FA2]'}`} />
                <p className={`text-[0.95rem] italic leading-relaxed mb-6 flex-1 ${idx === 0 ? 'text-white' : 'text-[#0B2340]'}`}>
                  "{item.quote}"
                </p>
                <div className={`pt-4 border-t ${idx === 0 ? 'border-white/20' : 'border-[#DDE2E2]'}`}>
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className={`font-bold text-sm ${idx === 0 ? 'text-white' : 'text-[#0B2340]'}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.author}
                  </div>
                  <div className={`text-xs ${idx === 0 ? 'text-white/70' : 'text-[#4A5568]'}`}>
                    {item.role} • {item.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS PREVIEW ===== */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#0B2340] uppercase mb-3">
                OUR METHODOLOGY
              </span>
              <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340] leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                From Idea to Impact
              </h2>
              <p className="text-[#4A5568] mt-2 max-w-[480px]">A transparent 7-step engineering process from concept to production release.</p>
            </motion.div>
            <Link
              to="/process"
              className="flex items-center gap-2 text-[#2F8FA2] font-bold hover:text-[#0B2340] transition-colors text-sm whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore Full Process <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Discovery', desc: 'Business goals, requirements, and architecture planning.' },
              { num: '02', title: 'Design', desc: 'UI/UX wireframes, prototypes, and design system creation.' },
              { num: '03', title: 'Build', desc: 'Clean, modular code with agile 2-week sprint deliveries.' },
              { num: '04', title: 'Launch & Support', desc: 'QA testing, deployment, monitoring, and SLA support.' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-[#DDE2E2] rounded-2xl p-6 relative"
              >
                <div className="text-[2rem] font-bold text-[#2F8FA2]/25 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.num}</div>
                <h4 className="font-bold text-[#0B2340] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h4>
                <p className="text-sm text-[#4A5568] leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-5 bg-white border-r border-t border-[#DDE2E2] rotate-45 transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-[#0B2340] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F8FA2]/15 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#59B9B4]/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">
              HAVE AN IDEA?
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[2.5rem] lg:text-[3.2rem] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let's Build Something Great Together.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-[1.1rem] leading-relaxed mb-10">
              Tell us what you're looking to build. We'll help turn your idea into a powerful digital solution.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Start Your Project <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:-translate-y-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Talk to Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
