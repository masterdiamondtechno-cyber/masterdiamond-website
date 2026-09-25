import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, Lightbulb, CheckCircle2 } from 'lucide-react';
import { industriesData } from '../data/industries';
import * as LucideIcons from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Industries() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B2340] py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F8FA2]/15 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#59B9B4]/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-5">SECTOR EXPERTISE</span>
            <h1 className="text-[2.8rem] lg:text-[3.8rem] font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Technology For Businesses{' '}
              <br />
              <span className="text-[#59B9B4]">Across Industries.</span>
            </h1>
            <p className="text-white/85 text-[1.15rem] leading-relaxed max-w-[680px] mx-auto">
              We engineer tailored digital software solutions addressing unique operational challenges and market opportunities across 10 core business sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY QUICK NAV */}
      <div className="bg-white border-b border-[#DDE2E2] py-4">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {industriesData.map((ind) => {
              const IconComp = LucideIcons[ind.iconName] || LucideIcons.Building;
              return (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="flex items-center gap-1.5 text-[0.78rem] font-bold text-[#4A5568] hover:text-[#0B2340] hover:bg-[#F7F8F8] px-3.5 py-2 rounded-lg transition-all border border-[#DDE2E2] hover:border-[#2F8FA2]/40"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <IconComp size={13} className="text-[#2F8FA2]" />
                  {ind.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* INDUSTRIES LIST */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col gap-14">
            {industriesData.map((ind, index) => {
              const IconComponent = LucideIcons[ind.iconName] || LucideIcons.Building;

              return (
                <motion.div
                  key={ind.id}
                  id={ind.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#F7F8F8] border border-[#DDE2E2] rounded-2xl p-8 lg:p-12 scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#2F8FA2] flex items-center justify-center flex-shrink-0">
                          <IconComponent size={22} className="text-white" />
                        </div>
                        <h2 className="text-[1.75rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {ind.title}
                        </h2>
                      </div>

                      <p className="text-[#4A5568] leading-relaxed mb-6 text-[1rem]">
                        {ind.overview}
                      </p>

                      {/* Visual Flow */}
                      <div className="bg-white border border-[#DDE2E2] rounded-xl p-4 flex items-center gap-3 mb-6">
                        {['Data Node', 'Cloud Hub', 'User App'].map((node, ni) => (
                          <React.Fragment key={ni}>
                            <div className="text-center">
                              <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-1 text-[0.72rem] font-bold ${
                                  ni === 0 ? 'bg-[#2F8FA2]/15 text-[#2F8FA2]' :
                                  ni === 1 ? 'bg-[#59B9B4]/20 text-[#0B2340]' :
                                  'bg-[#0B2340] text-white'
                                }`}
                              >
                                {`0${ni+1}`}
                              </div>
                              <span className="text-[0.72rem] font-semibold text-[#0B2340]">{node}</span>
                            </div>
                            {ni < 2 && <div className="flex-1 h-[2px] bg-[#59B9B4]" />}
                          </React.Fragment>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#2F8FA2] hover:bg-[#0B2340] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Inquire for {ind.title} <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Right: Challenges, Opportunities, Solutions */}
                    <div className="lg:col-span-8 flex flex-col gap-4">

                      <div className="bg-white border border-[#DDE2E2] rounded-xl p-5">
                        <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <AlertCircle size={14} /> Industry Challenges
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {ind.challenges.map((item, i) => (
                            <li key={i} className="text-sm text-[#4A5568]">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white border border-[#DDE2E2] rounded-xl p-5">
                        <h4 className="text-sm font-bold text-[#2F8FA2] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Lightbulb size={14} /> Digital Opportunities
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {ind.opportunities.map((item, i) => (
                            <li key={i} className="text-sm text-[#4A5568]">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white border border-[#DDE2E2] rounded-xl p-5">
                        <h4 className="text-sm font-bold text-[#0B2340] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-[#2F8FA2]" /> Digital Solutions We Build
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {ind.solutions.map((item, i) => (
                            <span
                              key={i}
                              className="text-[0.78rem] font-semibold bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] px-3 py-1.5 rounded-lg"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">ENTERPRISE CONSULTING</span>
            <h2 className="text-[2.2rem] font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Transforming Your Industry Sector
            </h2>
            <p className="text-white/80 mb-8">
              Partner with MASTER DIAMOND to engineer custom digital platforms engineered for your domain.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-8 py-4 rounded-xl font-bold transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Discuss Sector Goals <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
