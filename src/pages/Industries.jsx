import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { industriesData } from '../data/industries';
import * as LucideIcons from 'lucide-react';
import { AlertCircle, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function Industries() {
  return (
    <div>

      {/* HERO SECTION - EXPLICIT DEEP NAVY BACKGROUND & WHITE TEXT */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', padding: '6rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <SectionLabel text="SECTOR EXPERTISE" color="aqua" />
          <h1
            className="text-hero"
            style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}
          >
            Technology For Businesses <br />
            <span className="text-highlight-aqua">Across Industries.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#FFFFFF', opacity: 0.9, lineHeight: '1.65' }}>
            We engineer tailored digital software solutions addressing unique operational challenges and market opportunities across 10 core business sectors.
          </p>
        </div>
      </section>

      {/* DETAILED 10 INDUSTRIES LIST */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            {industriesData.map((ind, index) => {
              const IconComponent = LucideIcons[ind.iconName] || LucideIcons.Building;

              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  style={{
                    backgroundColor: '#F7F8F8',
                    border: '1.5px solid #DDE2E2',
                    borderRadius: '12px',
                    padding: '3rem',
                    scrollMarginTop: '100px'
                  }}
                >
                  <div className="mosaic-grid mosaic-grid-12" style={{ alignItems: 'flex-start' }}>

                    {/* Left Side: Header & CSS Abstract Sector Illustration */}
                    <div className="col-span-5">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#2F8FA2', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                          <IconComponent size={24} color="#FFFFFF" />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#0B2340' }}>
                          {ind.title}
                        </h2>
                      </div>

                      <p style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                        {ind.overview}
                      </p>

                      {/* Custom Vector CSS Diagram Representation */}
                      <div
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #DDE2E2',
                          borderRadius: '8px',
                          padding: '1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justify: 'space-around',
                          marginBottom: '1.5rem'
                        }}
                      >
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(47,143,162,0.1)', display: 'grid', placeItems: 'center', margin: '0 auto 0.4rem auto' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2F8FA2' }}>01</span>
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#0B2340' }}>Data Node</span>
                        </div>
                        <div style={{ height: '2px', width: '40px', backgroundColor: '#59B9B4' }} />
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(89,185,180,0.2)', display: 'grid', placeItems: 'center', margin: '0 auto 0.4rem auto' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#0B2340' }}>02</span>
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#0B2340' }}>Cloud Hub</span>
                        </div>
                        <div style={{ height: '2px', width: '40px', backgroundColor: '#59B9B4' }} />
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0B2340', display: 'grid', placeItems: 'center', margin: '0 auto 0.4rem auto' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#FFFFFF' }}>03</span>
                          </div>
                          <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#0B2340' }}>User App</span>
                        </div>
                      </div>

                      <Button to="/contact" variant="teal" size="md">
                        Inquire For {ind.title}
                      </Button>
                    </div>

                    {/* Right Side: Challenges, Opportunities, Solutions */}
                    <div className="col-span-7">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Challenges */}
                        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #DDE2E2' }}>
                          <h4 style={{ fontSize: '0.95rem', color: '#C53030', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                            <AlertCircle size={16} /> Industry Challenges
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {ind.challenges.map((item, i) => (
                              <li key={i} style={{ fontSize: '0.875rem', color: '#4A5568' }}>• {item}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Opportunities */}
                        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #DDE2E2' }}>
                          <h4 style={{ fontSize: '0.95rem', color: '#2F8FA2', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                            <Lightbulb size={16} /> Digital Opportunities
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {ind.opportunities.map((item, i) => (
                              <li key={i} style={{ fontSize: '0.875rem', color: '#4A5568' }}>• {item}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: '1px solid #DDE2E2' }}>
                          <h4 style={{ fontSize: '0.95rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                            <CheckCircle2 size={16} color="#2F8FA2" /> Digital Solutions We Build
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {ind.solutions.map((item, i) => (
                              <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem', backgroundColor: '#F7F8F8', border: '1px solid #DDE2E2', borderRadius: '4px', color: '#0B2340', fontWeight: '600' }}>
                                {item}
                              </span>
                            ))}
                          </div>
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

      {/* FINAL INDUSTRIES CTA */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <SectionLabel text="ENTERPRISE CONSULTING" color="aqua" />
          <h2 className="text-display" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Transforming Your Industry Sector
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#FFFFFF', opacity: 0.9, marginBottom: '2rem' }}>
            Partner with MASTER DIAMOND to engineer custom digital platforms engineered for your domain.
          </p>
          <Button to="/contact" variant="aqua" size="lg">
            Discuss Sector Goals →
          </Button>
        </div>
      </section>

    </div>
  );
}
