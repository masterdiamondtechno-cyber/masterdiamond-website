import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, HeartHandshake, Award, Lightbulb, CheckCircle2, ArrowRight, Users, MapPin, Code } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const teamValues = [
  { title: 'INNOVATION', icon: Lightbulb, desc: 'Continuously adopting modern frameworks, AI integrations, and cloud tools.', bg: 'bg-white border border-[#DDE2E2]', textColor: 'text-[#0B2340]' },
  { title: 'QUALITY', icon: ShieldCheck, desc: 'Zero compromises on code structure, security protocols, or test execution.', bg: 'bg-[#0B2340]', textColor: 'text-white' },
  { title: 'TRANSPARENCY', icon: Eye, desc: 'Open communication, realistic milestone timelines, and clear project tracking.', bg: 'bg-white border border-[#DDE2E2]', textColor: 'text-[#0B2340]' },
  { title: 'COLLABORATION', icon: HeartHandshake, desc: 'Working as an extension of your internal team rather than a distant vendor.', bg: 'bg-[#2F8FA2]', textColor: 'text-white', span: 'md:col-span-2' },
  { title: 'CUSTOMER SUCCESS', icon: Award, desc: 'Measuring our success strictly by the long-term impact delivered to your business.', bg: 'bg-[#59B9B4]', textColor: 'text-[#0B2340]', span: 'md:col-span-1' },
];

export default function About() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B2340] py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F8FA2]/15 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#59B9B4]/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-5">
              ABOUT MASTER DIAMOND
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-[2.8rem] lg:text-[3.8rem] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Technology With Purpose.{' '}
              <br />
              <span className="text-[#59B9B4]">Innovation With Impact.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 text-[1.15rem] leading-relaxed max-w-[680px] mx-auto">
              MASTER DIAMOND is a technology solutions company focused on helping organizations adopt modern digital technologies, software engineering, and clean design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase mb-4">
                WHO WE ARE
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340] leading-tight mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Empowering Digital Transformation.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#0B2340] text-[1.05rem] leading-relaxed mb-4">
                At MASTER DIAMOND, we believe technology should be practical, scalable, and built around actual business objectives. We bridge complex software engineering with minimal user experience design.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#4A5568] leading-relaxed mb-8">
                Based in Pune, India, our team partners with founders, executives, and digital leaders to transform ambitious ideas into high-performing web platforms, mobile apps, custom software, IoT systems, and AI models.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm text-[#4A5568] mb-6">
                <MapPin size={16} className="text-[#2F8FA2]" />
                <span>Pune, Maharashtra, India</span>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-[#2F8FA2] hover:bg-[#0B2340] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Explore Our Services <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Approach Steps */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F7F8F8] border border-[#DDE2E2] rounded-2xl p-8"
            >
              <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#0B2340] uppercase mb-6">
                OUR APPROACH
              </span>
              <div className="flex flex-col gap-5">
                {[
                  { num: '1.', title: 'UNDERSTAND', desc: 'Deeply analyze business workflow goals, user requirements, and technical constraints before building.' },
                  { num: '2.', title: 'PLAN', desc: 'Craft robust architectural blueprints, select optimal technology stacks, and map milestone timelines.' },
                  { num: '3.', title: 'DESIGN', desc: 'Develop intuitive UI/UX wireframes and component libraries following minimal Swiss design principles.' },
                  { num: '4.', title: 'BUILD', desc: 'Engineer clean, modular, scalable code backed by comprehensive automated test execution.' },
                  { num: '5.', title: 'IMPROVE', desc: 'Provide continuous post-launch SLA optimization, security patches, and feature evolution.' },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 items-start ${idx < 4 ? 'pb-5 border-b border-[#DDE2E2]' : ''}`}
                  >
                    <span className="font-bold text-[#2F8FA2] text-sm whitespace-nowrap mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {step.num} {step.title}
                    </span>
                    <span className="text-[0.9rem] text-[#0B2340] leading-relaxed">{step.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B2340] rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#59B9B4]/25 flex items-center justify-center mb-6">
                <Target size={24} className="text-[#59B9B4]" />
              </div>
              <div className="text-[0.75rem] font-bold text-[#59B9B4] uppercase tracking-widest mb-3">OUR MISSION</div>
              <h3 className="text-[1.5rem] font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Empowering Business Value Through Technology
              </h3>
              <p className="text-white/85 text-[1.05rem] leading-relaxed italic">
                "To empower businesses with reliable, innovative and accessible technology solutions that create meaningful value."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-[#2F8FA2] rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-white/25 flex items-center justify-center mb-6">
                <Eye size={24} className="text-white" />
              </div>
              <div className="text-[0.75rem] font-bold text-white uppercase tracking-widest mb-3">OUR VISION</div>
              <h3 className="text-[1.5rem] font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                A Trusted Partner in Digital Transformation
              </h3>
              <p className="text-white/90 text-[1.05rem] leading-relaxed italic">
                "To become a trusted technology partner for businesses looking to build, transform and scale in the digital world."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase mb-3">OUR VALUES</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Principles That Guide Us
            </h2>
            <p className="text-[#4A5568] mt-2 max-w-[480px]">Five core pillars defining how we interact, engineer software, and support our partners.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${val.bg} ${val.span || ''} rounded-2xl p-7`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent size={22} className={val.textColor} />
                    <h3 className={`text-[1.05rem] font-bold ${val.textColor}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {val.title}
                    </h3>
                  </div>
                  <p className={`text-sm leading-relaxed ${val.textColor} opacity-90`}>{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING PHILOSOPHY */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#0B2340] uppercase mb-3">HOW WE THINK</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Engineering Philosophy
            </h2>
            <p className="text-[#4A5568] mt-2">Four practical mindset directives guiding our software development projects.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Business First', desc: 'Technology must serve clear commercial objectives and workflow improvements.' },
              { title: 'User First', desc: 'Interfaces should reduce cognitive load and simplify operations for real people.' },
              { title: 'Technology With Purpose', desc: 'No adopting trendy tools for their own sake; only proven, scalable stacks.' },
              { title: 'Continuous Improvement', desc: 'Iterative feedback loops and proactive post-launch product evolution.' },
            ].map((think, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-[#DDE2E2] rounded-2xl p-6 flex flex-col"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#2F8FA2] mb-5" />
                <h4 className="font-bold text-[#0B2340] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{think.title}</h4>
                <p className="text-sm text-[#0B2340] leading-relaxed flex-1">{think.desc}</p>
                <div className="mt-5 pt-4 border-t border-[#DDE2E2] flex items-center gap-1.5 text-[0.78rem] text-[#2F8FA2] font-bold">
                  <CheckCircle2 size={13} /> Core Directive
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B2340] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">
              WORK WITH MASTER DIAMOND
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[2.2rem] lg:text-[2.8rem] font-bold text-white mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to Build Your Digital Future?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-[1.05rem] mb-8">
              Let's discuss how MASTER DIAMOND can partner with your team to deliver exceptional software products.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Start a Conversation <ArrowRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
