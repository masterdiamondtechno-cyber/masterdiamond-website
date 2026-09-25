import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B2340] py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F8FA2]/15 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#59B9B4]/10 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-5">OUR SERVICES</span>
            <h1
              className="text-[2.8rem] lg:text-[3.8rem] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Technology Solutions{' '}
              <br />
              <span className="text-[#59B9B4]">Built Around Your Goals.</span>
            </h1>
            <p className="text-white/85 text-[1.15rem] leading-relaxed max-w-[680px] mx-auto">
              Explore our 10 core digital service capabilities engineered to deliver high performance, clean architecture, and measurable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES NAVIGATION TABS */}
      <div className="bg-white border-b border-[#DDE2E2] sticky top-[72px] z-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {servicesData.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex-shrink-0 text-[0.78rem] font-bold text-[#4A5568] hover:text-[#0B2340] hover:bg-[#F7F8F8] px-3.5 py-2 rounded-lg transition-all whitespace-nowrap"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.number}. {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES LIST */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col gap-16">
            {servicesData.map((service, index) => {
              const IconComponent = LucideIcons[service.iconName] || LucideIcons.Code;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className={`rounded-2xl p-8 lg:p-12 border scroll-mt-28 ${isEven ? 'bg-[#F7F8F8] border-[#DDE2E2]' : 'bg-white border-[#DDE2E2]'}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Details */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-4 mb-6">
                        <span
                          className="text-[2rem] font-bold"
                          style={{ fontFamily: "'Space Grotesk', sans-serif", color: service.accentColor }}
                        >
                          {service.number}
                        </span>
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#DDE2E2] bg-white"
                        >
                          <IconComponent size={22} style={{ color: service.accentColor }} />
                        </div>
                      </div>

                      <h2
                        className="text-[1.75rem] font-bold text-[#0B2340] mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {service.title}
                      </h2>

                      <p className="text-[#4A5568] leading-relaxed mb-6 text-[1.02rem]">
                        {service.overview}
                      </p>

                      {/* Tech Tags */}
                      <div className="mb-7">
                        <h4 className="text-[0.75rem] font-bold text-[#2F8FA2] uppercase tracking-widest mb-3">
                          Technology Examples
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-[0.78rem] font-semibold bg-white border border-[#DDE2E2] text-[#0B2340] px-3 py-1.5 rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#2F8FA2] hover:bg-[#0B2340] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Inquire About Service <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Right: What We Build + Capabilities */}
                    <div className="lg:col-span-7">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-[#DDE2E2] rounded-xl p-6">
                          <h4
                            className="text-sm font-bold text-[#0B2340] uppercase tracking-wider mb-4 pb-3 border-b border-[#DDE2E2]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            What We Build
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {service.whatWeBuild.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                                <CheckCircle2 size={14} className="text-[#2F8FA2] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white border border-[#DDE2E2] rounded-xl p-6">
                          <h4
                            className="text-sm font-bold text-[#0B2340] uppercase tracking-wider mb-4 pb-3 border-b border-[#DDE2E2]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            Capabilities
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {service.capabilities.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-[#4A5568]">
                                <ArrowRight size={14} className="text-[#59B9B4] flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
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
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">
              NEED A CUSTOM SOLUTION?
            </span>
            <h2 className="text-[2.2rem] font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Have a Specific Requirement in Mind?
            </h2>
            <p className="text-white/80 mb-8">
              Reach out to our technical team to discuss tailored software development for your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-8 py-4 rounded-xl font-bold transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Start Your Project <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
