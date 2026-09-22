import React from 'react';
import SectionLabel from '../components/SectionLabel';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ProcessTimeline from '../components/ProcessTimeline';

export default function Process() {
  return (
    <div>

      {/* HERO SECTION - EXPLICIT DEEP NAVY BACKGROUND & WHITE TEXT */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', padding: '6rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <SectionLabel text="OUR METHODOLOGY" color="aqua" />
          <h1
            className="text-hero"
            style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}
          >
            From Idea to Impact: <br />
            <span className="text-highlight-aqua">Our 7-Step Engineering Process.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#FFFFFF', opacity: 0.9, lineHeight: '1.65' }}>
            We follow a structured, transparent software engineering methodology to ensure every product is delivered on time, within scope, and aligned with your business targets.
          </p>
        </div>
      </section>

      {/* DETAILED 7-STEP TIMELINE SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <SectionLabel text="THE 7-STEP TIMELINE" color="teal" />
          <SectionHeading
            title="Step-by-Step Software Delivery Roadmap"
            subtitle="Explore how we take project ideas from early research to cloud deployment and ongoing SLA support."
          />

          <ProcessTimeline detailed={true} />
        </div>
      </section>

      {/* METHODOLOGY BENEFITS MOSAIC */}
      <section className="section-padding border-thin" style={{ backgroundColor: '#F7F8F8' }}>
        <div className="container">
          <SectionLabel text="WHY OUR PROCESS WORKS" color="navy" />
          <SectionHeading
            title="Designed for Transparency & Speed"
            subtitle="Key advantages of partnering with MASTER DIAMOND's engineering process."
          />

          <div className="mosaic-grid mosaic-grid-3">
            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #DDE2E2', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2F8FA2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                AGILE SPRINTS
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#0B2340', marginBottom: '0.75rem', fontWeight: '700' }}>
                Continuous Visibility
              </h4>
              <p style={{ fontSize: '0.925rem', color: '#4A5568', lineHeight: '1.5' }}>
                Regular sprint demos and transparent status reports ensure you have complete control over product progress at every milestone.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #DDE2E2', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2F8FA2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                QUALITY ASSURANCE
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#0B2340', marginBottom: '0.75rem', fontWeight: '700' }}>
                Zero-Defect Standard
              </h4>
              <p style={{ fontSize: '0.925rem', color: '#4A5568', lineHeight: '1.5' }}>
                Rigorous testing across browsers, screen sizes, and backend loads guarantees a flawless launch experience.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #DDE2E2', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#2F8FA2', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                SLA SUPPORT
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#0B2340', marginBottom: '0.75rem', fontWeight: '700' }}>
                Long-Term Partnership
              </h4>
              <p style={{ fontSize: '0.925rem', color: '#4A5568', lineHeight: '1.5' }}>
                We don't disappear after deployment. Our team provides continuous uptime monitoring, security patches, and feature additions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL PROCESS CTA */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <SectionLabel text="START A PROJECT" color="aqua" />
          <h2 className="text-display" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Ready to Begin Step 01?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#FFFFFF', opacity: 0.9, marginBottom: '2rem' }}>
            Schedule an initial discovery call to map out your software architecture roadmap with MASTER DIAMOND.
          </p>
          <Button to="/contact" variant="aqua" size="lg">
            Schedule Discovery Call →
          </Button>
        </div>
      </section>

    </div>
  );
}
