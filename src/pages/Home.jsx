import React from 'react';
import SectionLabel from '../components/SectionLabel';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import HeroTechComposition from '../components/HeroTechComposition';
import AnimatedCounter from '../components/AnimatedCounter';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import TechCategory from '../components/TechCategory';
import AccordionItem from '../components/AccordionItem';
import ProcessTimeline from '../components/ProcessTimeline';
import MosaicBlock from '../components/MosaicBlock';

import { servicesData } from '../data/services';
import { industriesData } from '../data/industries';
import { technologyCategories } from '../data/technologies';
import { testimonialsData } from '../data/testimonials';
import { capabilitiesData } from '../data/capabilities';
import { faqData } from '../data/faq';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, CheckCircle2, Cpu, Check } from 'lucide-react';

export default function Home() {
  return (
    <div>

      {/* SECTION 1: HERO SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#F7F8F8', paddingTop: '3.5rem', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="container">
          <div className="mosaic-grid mosaic-grid-12" style={{ alignItems: 'center' }}>

            {/* Left Content Column */}
            <div className="col-span-6">
              <SectionLabel text="DIGITAL SOLUTIONS • PUNE, INDIA" color="teal" />

              <h1
                className="text-hero"
                style={{ marginBottom: '1.5rem', color: '#0B2340' }}
              >
                We Build{' '}
                <span className="text-highlight-teal">Digital Solutions</span>{' '}
                That Move Businesses Forward.
              </h1>

              <p style={{ fontSize: '1.2rem', lineHeight: '1.65', color: '#4A5568', marginBottom: '2rem', maxWidth: '560px' }}>
                MASTER DIAMOND helps businesses turn ideas into powerful digital experiences through web development, mobile applications, software solutions, IoT, AI and digital technologies.
              </p>

              {/* Key Highlights Pill Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.25rem' }}>
                {['React & Web Apps', 'iOS & Android Native', 'Cloud & IoT Telemetry', 'AI Machine Learning'].map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#0B2340',
                      backgroundColor: '#FFFFFF',
                      border: '1.5px solid #DDE2E2',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <CheckCircle2 size={14} color="#2F8FA2" />
                    {item}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Button to="/services" variant="teal" size="lg">
                  Explore Services
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Start a Project
                </Button>
              </div>
            </div>

            {/* Right Interactive Tech Composition */}
            <div className="col-span-6">
              <HeroTechComposition />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK INTRODUCTION (WHO WE ARE) */}
      <section className="section-padding border-thin" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionLabel text="WHO WE ARE" color="navy" />

          <div className="mosaic-grid mosaic-grid-12" style={{ alignItems: 'stretch' }}>
            <div className="col-span-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <SectionHeading
                  title="Technology Built Around Your Business."
                  subtitle="MASTER DIAMOND combines software development, design and emerging technologies to help businesses transform ideas into practical digital experiences."
                />
                <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.65', marginBottom: '2rem' }}>
                  Whether you require an enterprise web portal, a scalable mobile application, or custom IoT telemetry, we bring engineering precision and user-first principles to every line of code.
                </p>
              </div>
              <div>
                <Button to="/about" variant="primary" size="md">
                  Explore MASTER DIAMOND
                </Button>
              </div>
            </div>

            <div className="col-span-7">
              <div className="mosaic-grid mosaic-grid-2">
                <MosaicBlock bg="navy">
                  <div style={{ fontSize: '0.75rem', color: '#59B9B4', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontWeight: '700' }}>
                    ENGINEERING MANDATE
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: '700' }}>
                    Precision Architecture
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: '#FFFFFF', opacity: 0.9, lineHeight: '1.6', marginBottom: '1rem' }}>
                    Every software product is engineered for zero-latency execution, multi-device responsiveness, and cloud scalability.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: '#59B9B4', fontWeight: '600' }}>
                    <li>✓ Clean modular React & Node architecture</li>
                    <li>✓ 99.99% high availability cloud setups</li>
                  </ul>
                </MosaicBlock>

                <MosaicBlock bg="light-gray">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Cpu size={24} color="#2F8FA2" />
                    <h4 style={{ fontSize: '1.2rem', color: '#0B2340', fontWeight: '700' }}>Emerging Tech</h4>
                  </div>
                  <p style={{ fontSize: '0.925rem', color: '#0B2340', lineHeight: '1.6', marginBottom: '1rem' }}>
                    Seamless integration of IoT sensor telemetry, custom AI algorithms, and automated pipeline triggers.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: '#0B2340', fontWeight: '600' }}>
                    <li>✓ Machine learning model integration</li>
                    <li>✓ Hardware telemetry & sensor processing</li>
                  </ul>
                </MosaicBlock>

                <MosaicBlock bg="teal" gridSpan="col-span-2">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.3rem' }}>
                        AGILE EXECUTION
                      </div>
                      <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: '700' }}>
                        Transparent 2-Week Sprint Deliverables
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: '#FFFFFF', opacity: 0.95, marginTop: '0.2rem' }}>
                        Continuous demos, code audits, and milestone tracking for total peace of mind.
                      </p>
                    </div>
                    <Button to="/process" variant="aqua" size="sm">
                      View Process Roadmap
                    </Button>
                  </div>
                </MosaicBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ANIMATED STATISTICS */}
      <section className="section-padding" style={{ backgroundColor: '#F7F8F8' }}>
        <div className="container">
          <div className="mosaic-grid mosaic-grid-4">

            {/* Stat 1: Navy block */}
            <MosaicBlock bg="navy">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '700', color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
                <AnimatedCounter value="10+" />
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#59B9B4' }}>
                Projects Delivered
              </div>
              <p style={{ fontSize: '0.9rem', color: '#FFFFFF', opacity: 0.9, marginTop: '0.5rem', lineHeight: '1.5' }}>
                Web platforms, mobile apps, and enterprise software engineered for business efficiency.
              </p>
            </MosaicBlock>

            {/* Stat 2: Teal block */}
            <MosaicBlock bg="teal">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '700', color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
                <AnimatedCounter value="12+" />
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF' }}>
                Technologies
              </div>
              <p style={{ fontSize: '0.9rem', color: '#FFFFFF', opacity: 0.95, marginTop: '0.5rem', lineHeight: '1.5' }}>
                React, Java, Python, Node.js, AWS, Docker, IoT, and AI frameworks.
              </p>
            </MosaicBlock>

            {/* Stat 3: Aqua block */}
            <MosaicBlock bg="aqua">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '700', color: '#0B2340', lineHeight: 1, marginBottom: '0.5rem' }}>
                <AnimatedCounter value="08" />
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0B2340' }}>
                Digital Services
              </div>
              <p style={{ fontSize: '0.9rem', color: '#0B2340', marginTop: '0.5rem', fontWeight: '500', lineHeight: '1.5' }}>
                Full-spectrum software solutions from UX research to cloud SLA maintenance.
              </p>
            </MosaicBlock>

            {/* Stat 4: White block */}
            <MosaicBlock bg="white">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: '700', color: '#0B2340', lineHeight: 1, marginBottom: '0.5rem' }}>
                <AnimatedCounter value="05+" />
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2F8FA2' }}>
                Industries
              </div>
              <p style={{ fontSize: '0.9rem', color: '#0B2340', marginTop: '0.5rem', lineHeight: '1.5' }}>
                Healthcare, Agriculture, Retail, E-Commerce, Real Estate, and Finance.
              </p>
            </MosaicBlock>

          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES MOSAIC */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionLabel text="WHAT WE DO" color="teal" />
          <SectionHeading
            title="Technology Solutions Built Around Your Goals."
            subtitle="Explore our 10 core technology service capabilities designed to drive business efficiency and digital transformation."
          />

          <div className="mosaic-grid mosaic-grid-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TECHNOLOGY SHOWCASE */}
      <section className="section-padding border-thin" style={{ backgroundColor: '#F7F8F8' }}>
        <div className="container">
          <SectionLabel text="OUR TECH STACK" color="navy" />
          <SectionHeading
            title="Technology We Work With"
            subtitle="We select battle-tested frameworks, robust backend logic, and scalable cloud platforms tailored to project demands."
          />

          {technologyCategories.map((cat, idx) => (
            <TechCategory key={idx} categoryData={cat} categoryIndex={idx} />
          ))}
        </div>
      </section>

      {/* SECTION 6: ABOUT PREVIEW - DEEP NAVY BACKGROUND EXPLICIT */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF' }}>
        <div className="container">
          <div className="mosaic-grid mosaic-grid-12" style={{ alignItems: 'center' }}>
            <div className="col-span-7">
              <SectionLabel text="ABOUT MASTER DIAMOND" color="aqua" />
              <h2 className="text-display" style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>
                We Don't Just Build Software. <br />
                <span className="text-highlight-aqua">We Build Possibilities.</span>
              </h2>

              <p style={{ fontSize: '1.1rem', color: '#FFFFFF', opacity: 0.9, marginBottom: '1.25rem', lineHeight: '1.65' }}>
                MASTER DIAMOND is a technology solutions company focused on helping businesses embrace digital transformation.
              </p>
              <p style={{ fontSize: '1rem', color: '#FFFFFF', opacity: 0.85, marginBottom: '2rem', lineHeight: '1.65' }}>
                We bring together development, design and emerging technologies to create digital products that are easy to use, scalable and aligned with business objectives.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#59B9B4', marginBottom: '0.35rem', fontWeight: '700' }}>Who We Are</h4>
                  <p style={{ fontSize: '0.85rem', color: '#FFFFFF', opacity: 0.85 }}>Tech innovators & software engineers.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#59B9B4', marginBottom: '0.35rem', fontWeight: '700' }}>What We Believe</h4>
                  <p style={{ fontSize: '0.85rem', color: '#FFFFFF', opacity: 0.85 }}>Technology must deliver real value.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#59B9B4', marginBottom: '0.35rem', fontWeight: '700' }}>How We Work</h4>
                  <p style={{ fontSize: '0.85rem', color: '#FFFFFF', opacity: 0.85 }}>Agile, transparent, & goal-oriented.</p>
                </div>
              </div>

              <Button to="/about" variant="aqua" size="lg">
                Discover Our Story
              </Button>
            </div>

            {/* Visual Vector Artwork Beside Text */}
            <div className="col-span-5">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ width: '110px', margin: '0 auto 1.5rem auto' }}>
                  <img
                    src="/logo.png"
                    alt="MASTER DIAMOND"
                    style={{ height: '80px', width: 'auto', margin: '0 auto', filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: '700' }}>
                  MASTER DIAMOND
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#59B9B4', marginBottom: '1.5rem', fontWeight: '700' }}>
                  Expertly Crafted Technology That Shines
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ padding: '0.35rem 0.85rem', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.15)', fontSize: '0.75rem', color: '#FFFFFF', fontWeight: '600' }}>Web Platforms</span>
                  <span style={{ padding: '0.35rem 0.85rem', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.15)', fontSize: '0.75rem', color: '#FFFFFF', fontWeight: '600' }}>Mobile Apps</span>
                  <span style={{ padding: '0.35rem 0.85rem', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.15)', fontSize: '0.75rem', color: '#FFFFFF', fontWeight: '600' }}>AI & IoT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY MASTER DIAMOND */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionLabel text="WHY MASTER DIAMOND" color="teal" />
          <SectionHeading
            title="Technology With a Purpose."
            subtitle="Our four-part execution strategy ensures every digital initiative generates measurable business outcome."
          />

          <div className="mosaic-grid mosaic-grid-4">
            {[
              {
                num: '01',
                title: 'UNDERSTAND',
                desc: 'We understand your business goals, target audience, and workflows before writing code.',
                points: ['Business alignment', 'User requirement audit']
              },
              {
                num: '02',
                title: 'CREATE',
                desc: 'We transform ideas into intuitive digital experiences and high-speed software architectures.',
                points: ['Swiss minimal UX', 'Modular React frontend']
              },
              {
                num: '03',
                title: 'SCALE',
                desc: 'We build resilient cloud solutions designed to scale effortlessly as your business grows.',
                points: ['AWS microservices', 'High-concurrency DB']
              },
              {
                num: '04',
                title: 'SUPPORT',
                desc: 'We stay connected long past launch day to optimize uptime, security, and feature evolution.',
                points: ['24/7 telemetry SLA', 'Continuous security patches']
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F7F8F8',
                  border: '1.5px solid #DDE2E2',
                  padding: '2rem',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: '700', color: '#2F8FA2', marginBottom: '0.75rem' }}>
                    {item.num}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: '#4A5568', lineHeight: '1.55', marginBottom: '1.25rem' }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #DDE2E2', paddingTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} style={{ fontSize: '0.825rem', color: '#0B2340', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Check size={13} color="#2F8FA2" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: INDUSTRIES */}
      <section className="section-padding border-thin" style={{ backgroundColor: '#F7F8F8' }}>
        <div className="container">
          <SectionLabel text="INDUSTRIES" color="navy" />
          <SectionHeading
            title="Digital Solutions Across Industries."
            subtitle="Tailored digital software platforms engineered to address unique operational demands across 10 business sectors."
          />

          <div className="mosaic-grid mosaic-grid-12">
            {industriesData.map((ind, index) => (
              <IndustryCard key={ind.id} industry={ind} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CAPABILITIES (WHAT WE CAN BUILD) */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionLabel text="WHAT WE CAN BUILD" color="teal" />
          <SectionHeading
            title="Comprehensive Digital Capabilities"
            subtitle="From enterprise web portals to connected IoT telemetry, discover what we engineer for ambitious companies."
          />

          <div className="mosaic-grid mosaic-grid-12">
            {capabilitiesData.map((cap, idx) => {
              const IconComp = LucideIcons[cap.iconName] || LucideIcons.Zap;
              return (
                <MosaicBlock key={cap.id} bg="white" gridSpan="col-span-4">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(47, 143, 162, 0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                        <IconComp size={20} color="#2F8FA2" />
                      </div>
                      <h3 style={{ fontSize: '1.2rem', color: '#0B2340', fontWeight: '700' }}>{cap.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#4A5568', marginBottom: '1.25rem', lineHeight: '1.55' }}>
                      {cap.description}
                    </p>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#2F8FA2', fontWeight: '700' }}>
                    <span>Explore capability</span>
                    <ArrowRight size={14} />
                  </div>
                </MosaicBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: PROCESS PREVIEW */}
      <section className="section-padding border-thin" style={{ backgroundColor: '#F7F8F8' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <SectionLabel text="OUR METHODOLOGY" color="navy" />
              <SectionHeading
                title="From Idea to Impact."
                subtitle="A transparent 7-step engineering process designed to take projects smoothly from concept to production release."
              />
            </div>
            <Button to="/process" variant="primary" size="md">
              Explore Our Process
            </Button>
          </div>

          <ProcessTimeline detailed={false} />
        </div>
      </section>

      {/* SECTION 11: CLIENT EXPERIENCE */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionLabel text="CLIENT EXPERIENCE" color="teal" />
          <SectionHeading
            title="Trusted Through Every Step."
            subtitle="Discover feedback from product leaders and executives who partnered with MASTER DIAMOND."
          />

          <div className="mosaic-grid mosaic-grid-12">
            {testimonialsData.map((item, idx) => (
              <MosaicBlock
                key={item.id}
                bg={idx === 0 ? 'navy' : 'white'}
                gridSpan={idx === 0 ? 'col-span-6' : 'col-span-6'}
              >
                <div style={{ fontSize: '0.8rem', color: idx === 0 ? '#59B9B4' : '#2F8FA2', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  {item.highlight}
                </div>
                <p style={{ fontSize: idx === 0 ? '1.25rem' : '1.05rem', fontStyle: 'italic', color: idx === 0 ? '#FFFFFF' : '#0B2340', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  "{item.quote}"
                </p>
                <div style={{ marginTop: 'auto', borderTop: idx === 0 ? '1px solid rgba(255,255,255,0.2)' : '1px solid #DDE2E2', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: '700', color: idx === 0 ? '#FFFFFF' : '#0B2340' }}>
                    {item.author}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: idx === 0 ? 'rgba(255,255,255,0.85)' : '#4A5568' }}>
                    {item.role} • {item.location}
                  </div>
                </div>
              </MosaicBlock>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ SECTION */}
      <section className="section-padding border-thin" style={{ backgroundColor: '#F7F8F8' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <SectionLabel text="FREQUENTLY ASKED QUESTIONS" color="navy" />
          <SectionHeading
            title="Got Questions? We Have Answers."
            subtitle="Clear answers regarding our software development services, tech stack, and client engagement models."
          />

          <div>
            {faqData.map((faq, idx) => (
              <AccordionItem key={faq.id} item={faq} isOpenDefault={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA - DEEP NAVY BACKGROUND EXPLICIT */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(89, 185, 180, 0.18) 0%, transparent 50%)`,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <SectionLabel text="HAVE AN IDEA?" color="aqua" />

          <h2 className="text-display" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Let's Build Something Great Together.
          </h2>

          <p style={{ fontSize: '1.2rem', color: '#FFFFFF', opacity: 0.9, marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Tell us what you're looking to build. We'll help you turn your idea into a digital solution.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
            <Button to="/contact" variant="aqua" size="lg">
              Start Your Project
            </Button>
            <Button to="/contact" variant="outline-white" size="lg">
              Talk to Us
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
