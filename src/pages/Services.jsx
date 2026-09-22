import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { servicesData } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', padding: '6rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <SectionLabel text="OUR SERVICES" color="aqua" />
          <h1
            className="text-hero"
            style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}
          >
            Technology Solutions <br />
            <span className="text-highlight-aqua">Built Around Your Goals.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#FFFFFF', opacity: 0.9, lineHeight: '1.65' }}>
            Explore our 10 core digital service capabilities engineered to deliver high performance, clean architecture, and measurable business growth.
          </p>
        </div>
      </section>

      {/* DETAILED 10 SERVICES LIST */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {servicesData.map((service, index) => {
              const IconComponent = LucideIcons[service.iconName] || LucideIcons.Code;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  style={{
                    backgroundColor: isEven ? '#F7F8F8' : '#FFFFFF',
                    border: '1.5px solid #DDE2E2',
                    borderRadius: '12px',
                    padding: '3rem',
                    scrollMarginTop: '100px'
                  }}
                >
                  <div className="mosaic-grid mosaic-grid-12" style={{ alignItems: 'flex-start' }}>

                    {/* Left Column: Number, Title, Overview */}
                    <div className="col-span-5">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '2rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: service.accentColor || '#2F8FA2' }}>
                          {service.number}
                        </span>
                        <div style={{ width: '44px', height: '44px', borderRadius: '8px', backgroundColor: '#FFFFFF', display: 'grid', placeItems: 'center', border: '1px solid #DDE2E2' }}>
                          <IconComponent size={22} color="#0B2340" />
                        </div>
                      </div>

                      <h2 style={{ fontSize: '1.85rem', color: '#0B2340', marginBottom: '1rem' }}>
                        {service.title}
                      </h2>

                      <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                        {service.overview}
                      </p>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2F8FA2', marginBottom: '0.5rem', fontWeight: '700' }}>
                          Technology Examples
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {service.technologies.map((tech, i) => (
                            <span key={i} style={{ fontSize: '0.8rem', padding: '0.25rem 0.65rem', backgroundColor: '#FFFFFF', border: '1px solid #DDE2E2', borderRadius: '4px', color: '#0B2340', fontWeight: '600' }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button to="/contact" variant="teal" size="md">
                        Inquire About Service
                      </Button>
                    </div>

                    {/* Right Column: What We Build & Capabilities */}
                    <div className="col-span-7">
                      <div className="mosaic-grid mosaic-grid-2">

                        <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '8px', border: '1px solid #DDE2E2' }}>
                          <h4 style={{ fontSize: '1rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #E9ECEC', paddingBottom: '0.5rem' }}>
                            What We Build
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {service.whatWeBuild.map((item, i) => (
                              <li key={i} style={{ fontSize: '0.9rem', color: '#4A5568', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <CheckCircle2 size={14} color="#2F8FA2" style={{ flexShrink: 0, marginTop: '3px' }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: '8px', border: '1px solid #DDE2E2' }}>
                          <h4 style={{ fontSize: '1rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #E9ECEC', paddingBottom: '0.5rem' }}>
                            Capabilities
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {service.capabilities.map((item, i) => (
                              <li key={i} style={{ fontSize: '0.9rem', color: '#4A5568', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <ArrowRight size={14} color="#59B9B4" style={{ flexShrink: 0, marginTop: '3px' }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL SERVICES CTA */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <SectionLabel text="NEED A CUSTOM SOLUTION?" color="aqua" />
          <h2 className="text-display" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Have a Specific Requirement in Mind?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#FFFFFF', opacity: 0.9, marginBottom: '2rem' }}>
            Reach out to our technical team to discuss tailored software development for your business goals.
          </p>
          <Button to="/contact" variant="aqua" size="lg">
            Start Your Project →
          </Button>
        </div>
      </section>

    </div>
  );
}
