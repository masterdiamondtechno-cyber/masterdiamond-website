import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Server, Smartphone, Database, Cloud, Brain, Cpu, Layout } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const techStack = [
  {
    category: 'Frontend',
    icon: Monitor,
    color: '#2F8FA2',
    bg: 'bg-[#2F8FA2]/10',
    techs: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux']
  },
  {
    category: 'Backend',
    icon: Server,
    color: '#0B2340',
    bg: 'bg-[#0B2340]/10',
    techs: ['Node.js', 'Python', 'Java Spring Boot', 'Express.js', 'FastAPI', 'GraphQL']
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    color: '#59B9B4',
    bg: 'bg-[#59B9B4]/15',
    techs: ['React Native', 'Flutter', 'iOS Native', 'Android Native', 'Firebase', 'Expo']
  },
  {
    category: 'Database',
    icon: Database,
    color: '#2F8FA2',
    bg: 'bg-[#2F8FA2]/10',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'TimescaleDB']
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: '#0B2340',
    bg: 'bg-[#0B2340]/10',
    techs: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Nginx']
  },
  {
    category: 'AI & ML',
    icon: Brain,
    color: '#59B9B4',
    bg: 'bg-[#59B9B4]/15',
    techs: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn', 'LangChain']
  },
  {
    category: 'IoT',
    icon: Cpu,
    color: '#2F8FA2',
    bg: 'bg-[#2F8FA2]/10',
    techs: ['MQTT', 'Raspberry Pi', 'Arduino', 'AWS IoT Core', 'WebSockets', 'InfluxDB']
  },
  {
    category: 'Design & UX',
    icon: Layout,
    color: '#0B2340',
    bg: 'bg-[#0B2340]/10',
    techs: ['Figma', 'Adobe XD', 'Storybook', 'Chromatic', 'Zeplin', 'Lottie']
  },
];

const additionalTools = [
  'Git', 'GitHub', 'JIRA', 'Confluence', 'Slack', 'Notion',
  'Postman', 'Swagger', 'Sentry', 'Datadog', 'Lighthouse',
  'Google Analytics 4', 'HubSpot', 'Stripe', 'Razorpay',
];

export default function Technologies() {
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
              OUR TECHNOLOGY STACK
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-[2.8rem] lg:text-[3.8rem] font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Battle-Tested Technologies{' '}
              <br />
              <span className="text-[#59B9B4]">For Every Challenge.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/85 text-[1.15rem] leading-relaxed max-w-[680px] mx-auto">
              We carefully select proven frameworks, robust backend systems, and scalable cloud platforms — always tailored to your specific project demands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase mb-3">TECHNOLOGIES</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our Complete Technology Stack
            </h2>
            <p className="text-[#4A5568] mt-2 max-w-[520px]">
              From frontend interfaces to AI models and IoT backends — we work with 50+ modern technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((stack, idx) => {
              const IconComp = stack.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  className="bg-white border border-[#DDE2E2] rounded-2xl p-6 transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${stack.bg} flex items-center justify-center mb-4`}>
                    <IconComp size={22} style={{ color: stack.color }} />
                  </div>
                  <h3
                    className="font-bold text-[#0B2340] mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, ti) => (
                      <motion.span
                        key={ti}
                        whileHover={{ scale: 1.05, backgroundColor: stack.color, color: '#fff' }}
                        className="text-[0.75rem] font-semibold bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] px-2.5 py-1 rounded-lg cursor-default transition-all duration-150"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY OUR STACK */}
      <section className="py-20 bg-[#F7F8F8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#0B2340] uppercase mb-3">WHY OUR STACK</span>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              How We Choose Technology
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Proven Technologies',
                desc: 'We only work with battle-tested, production-ready technologies that have proven themselves in real-world enterprise environments at scale.',
                color: 'bg-[#0B2340]',
                textColor: 'text-white',
                num: '01'
              },
              {
                title: 'Scalable Architecture',
                desc: 'Every technology choice is evaluated for its ability to scale — from startup MVPs to enterprise platforms handling millions of concurrent users.',
                color: 'bg-[#2F8FA2]',
                textColor: 'text-white',
                num: '02'
              },
              {
                title: 'Modern Frameworks',
                desc: 'We keep our knowledge current, adopting modern tools like Next.js, LangChain and AWS Lambda when they genuinely offer value over the alternatives.',
                color: 'bg-white border border-[#DDE2E2]',
                textColor: 'text-[#0B2340]',
                num: '03'
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className={`${card.color} rounded-2xl p-8`}
              >
                <div className={`text-[2.5rem] font-bold mb-4 ${card.textColor} opacity-20`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {card.num}
                </div>
                <h3 className={`text-[1.2rem] font-bold ${card.textColor} mb-3`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${card.textColor} opacity-85`}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL TOOLS */}
      <section className="py-16 bg-white border-t border-[#DDE2E2]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#2F8FA2] uppercase mb-3">TOOLS & PLATFORMS</span>
            <h2 className="text-[1.75rem] font-bold text-[#0B2340]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Additional Tools We Use
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {additionalTools.map((tool, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="text-sm font-semibold bg-[#F7F8F8] border border-[#DDE2E2] text-[#0B2340] px-4 py-2 rounded-xl hover:bg-[#2F8FA2] hover:text-white hover:border-[#2F8FA2] transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B2340] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] text-[#59B9B4] uppercase mb-4">LET'S DISCUSS</span>
            <h2 className="text-[2.2rem] font-bold text-white mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              What Technology Fits Your Project?
            </h2>
            <p className="text-white/80 mb-8">
              Let's talk about your project requirements and we'll recommend the best technology stack for your specific goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#59B9B4] hover:bg-white text-[#0B2340] px-8 py-4 rounded-xl font-bold transition-all duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Discuss Your Project <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
