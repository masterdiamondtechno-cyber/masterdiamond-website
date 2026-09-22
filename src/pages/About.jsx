import React from 'react';
import SectionLabel from '../components/SectionLabel';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import MosaicBlock from '../components/MosaicBlock';
import { Target, Eye, ShieldCheck, HeartHandshake, Award, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="section-padding bg-navy" style={{ padding: '6rem 0 5rem 0', backgroundColor: 'var(--color-navy)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <SectionLabel text="ABOUT MASTER DIAMOND" color="aqua" />
          <h1
            className="text-hero"
            style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}
          >
            Technology With Purpose. <br />
            <span className="text-highlight-aqua">Innovation With Impact.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#FFFFFF', opacity: 0.9, lineHeight: '1.65', marginBottom: '2rem' }}>
            MASTER DIAMOND is a technology solutions company focused on helping organizations adopt modern digital technologies, software engineering, and clean design.
          </p>
        </div>
      </section>

      {/* WHO WE ARE & OUR APPROACH */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="mosaic-grid mosaic-grid-12" style={{ alignItems: 'stretch' }}>
            <div className="col-span-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <SectionLabel text="WHO WE ARE" color="teal" />
                <h2 className="text-display" style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                  Empowering Digital Transformation.
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '1.25rem', lineHeight: '1.65' }}>
                  At MASTER DIAMOND, we believe technology should be practical, scalable, and built around actual business objectives. We bridge complex software engineering with minimal user experience design.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: '1.65', marginBottom: '2rem' }}>
                  Based in Pune, India, our team partners with founders, executives, and digital leaders to transform ambitious ideas into high-performing web platforms, mobile apps, custom software, IoT systems, and AI models.
                </p>
              </div>
              <div>
                <Button to="/services" variant="teal" size="md">
                  Explore Services
                </Button>
              </div>
            </div>

            <div className="col-span-6">
              <div style={{ backgroundColor: 'var(--color-bg)', border: '1.5px solid var(--color-border)', borderRadius: '12px', padding: '2.25rem', height: '100%' }}>
                <SectionLabel text="OUR APPROACH" color="navy" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                  {[
                    { title: '1. UNDERSTAND', desc: 'Deeply analyze business workflow goals, user requirements, and technical constraints before building.' },
                    { title: '2. PLAN', desc: 'Craft robust architectural blueprints, select optimal technology stacks, and map milestone timelines.' },
                    { title: '3. DESIGN', desc: 'Develop intuitive UI/UX wireframes and component libraries following minimal Swiss design principles.' },
                    { title: '4. BUILD', desc: 'Engineer clean, modular, scalable code backed by comprehensive automated test execution.' },
                    { title: '5. IMPROVE', desc: 'Provide continuous post-launch SLA optimization, security patch releases, and feature evolution.' }
                  ].map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', borderBottom: idx < 4 ? '1px solid var(--color-border)' : 'none', paddingBottom: idx < 4 ? '1rem' : '0' }}>
                      <span style={{ fontWeight: '700', color: 'var(--color-teal)', fontSize: '0.85rem', flexShrink: 0 }}>{step.title}</span>
                      <span style={{ fontSize: '0.925rem', color: 'var(--color-navy)', lineHeight: '1.5', fontWeight: '600' }}>{step.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - EXPLICIT HIGH CONTRAST */}
      <section className="section-padding bg-offwhite border-thin">
        <div className="container">
          <div className="mosaic-grid mosaic-grid-2">
            <MosaicBlock bg="navy">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(89,185,180,0.25)', display: 'grid', placeItems: 'center', marginBottom: '1.5rem', flexShrink: 0 }}>
                <Target size={24} color="var(--color-aqua)" />
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-aqua)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.5rem' }}>
                OUR MISSION
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: '700' }}>
                Empowering Business Value Through Technology
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#FFFFFF', lineHeight: '1.65', opacity: 0.95 }}>
                “To empower businesses with reliable, innovative and accessible technology solutions that create meaningful value.”
              </p>
            </MosaicBlock>

            <MosaicBlock bg="teal">
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.25)', display: 'grid', placeItems: 'center', marginBottom: '1.5rem', flexShrink: 0 }}>
                <Eye size={24} color="#FFFFFF" />
              </div>
              <div style={{ fontSize: '0.8rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.5rem' }}>
                OUR VISION
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem', fontWeight: '700' }}>
                A Trusted Partner in Digital Transformation
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#FFFFFF', lineHeight: '1.65', opacity: 0.95 }}>
                “To become a trusted technology partner for businesses looking to build, transform and scale in the digital world.”
              </p>
            </MosaicBlock>
          </div>
        </div>
      </section>

      {/* COLORFUL VALUES MOSAIC */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionLabel text="OUR VALUES" color="teal" />
          <SectionHeading
            title="The Principles That Guide Us"
            subtitle="Five core pillars defining how we interact, engineer software, and support our partners."
          />

          <div className="mosaic-grid mosaic-grid-12">
            {[
              { title: 'INNOVATION', icon: Lightbulb, desc: 'Continuously adopting modern frameworks, AI integrations, and cloud tools.', bg: 'white', span: 'col-span-4' },
              { title: 'QUALITY', icon: ShieldCheck, desc: 'Zero compromises on code structure, security protocols, or test execution.', bg: 'navy', span: 'col-span-4' },
              { title: 'TRANSPARENCY', icon: Eye, desc: 'Open communication, realistic milestone timelines, and clear project tracking.', bg: 'white', span: 'col-span-4' },
              { title: 'COLLABORATION', icon: HeartHandshake, desc: 'Working as an extension of your internal team rather than a distant vendor.', bg: 'teal', span: 'col-span-6' },
              { title: 'CUSTOMER SUCCESS', icon: Award, desc: 'Measuring our success strictly by the long-term impact delivered to your business.', bg: 'aqua', span: 'col-span-6' }
            ].map((val, idx) => {
              const IconComponent = val.icon;
              const isDark = val.bg === 'navy' || val.bg === 'teal';

              return (
                <MosaicBlock key={idx} bg={val.bg} gridSpan={val.span}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <IconComponent size={24} color={isDark ? '#FFFFFF' : 'var(--color-navy)'} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: isDark ? '#FFFFFF' : 'var(--color-navy)' }}>
                      {val.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: isDark ? '#FFFFFF' : 'var(--color-navy)', opacity: isDark ? 0.95 : 1 }}>
                    {val.desc}
                  </p>
                </MosaicBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE THINK & TECH PHILOSOPHY */}
      <section className="section-padding bg-offwhite border-thin">
        <div className="container">
          <SectionLabel text="HOW WE THINK" color="navy" />
          <SectionHeading
            title="Engineering Philosophy"
            subtitle="Four practical mindset directives guiding our software development projects."
          />

          <div className="mosaic-grid mosaic-grid-4">
            {[
              { title: 'Business First', desc: 'Technology must serve clear commercial objectives and workflow improvements.' },
              { title: 'User First', desc: 'Interfaces should reduce cognitive load and simplify operations for real people.' },
              { title: 'Technology With Purpose', desc: 'No adopting trendy tools for their own sake; only proven, scalable stacks.' },
              { title: 'Continuous Improvement', desc: 'Iterative feedback loops and proactive post-launch product evolution.' }
            ].map((think, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid var(--color-border)', borderRadius: '8px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-teal)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '0.5rem', fontWeight: '700' }}>{think.title}</h4>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-navy)', lineHeight: '1.55' }}>{think.desc}</p>
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-light-gray)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--color-teal)', fontWeight: '700' }}>
                  <CheckCircle2 size={14} /> Core Directive
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="section-padding bg-navy" style={{ textAlign: 'center', backgroundColor: 'var(--color-navy)' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <SectionLabel text="WORK WITH MASTER DIAMOND" color="aqua" />
          <h2 className="text-display" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Ready to Build Your Digital Future?
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#FFFFFF', opacity: 0.9, marginBottom: '2rem' }}>
            Let's discuss how MASTER DIAMOND can partner with your team to deliver exceptional software products.
          </p>
          <Button to="/contact" variant="aqua" size="lg">
            Start a Conversation →
          </Button>
        </div>
      </section>

    </div>
  );
}
