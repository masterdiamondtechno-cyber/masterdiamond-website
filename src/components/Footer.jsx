import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', paddingTop: '5rem', paddingBottom: '2.5rem', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">

        {/* Top Footer Mosaic Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

          {/* Column 1: Brand Info & Large Official Logo */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img
                src="/logo.png"
                alt="MASTER DIAMOND"
                style={{ height: '96px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-white)', marginBottom: '0.5rem' }}>
              MASTER DIAMOND
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--color-aqua)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '1.25rem' }}>
              Technology • Design • Innovation
            </div>

            <p style={{ fontSize: '0.925rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
              Helping organizations embrace digital transformation through bespoke web, mobile, AI, and IoT software solutions.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.5rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Industries', path: '/industries' },
                { name: 'Process', path: '/process' },
                { name: 'Contact', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: '0.925rem',
                      color: 'rgba(255,255,255,0.85)',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Digital Services */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.5rem' }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Web Development',
                'Mobile Apps',
                'Software Development',
                'UI/UX Design',
                'AI & ML Solutions',
                'IoT Platforms',
                'Technical SEO',
                'Digital Marketing'
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to="/services"
                    style={{
                      fontSize: '0.925rem',
                      color: 'rgba(255,255,255,0.85)',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.5rem' }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.925rem', color: 'rgba(255,255,255,0.9)' }}>
                <MapPin size={18} color="var(--color-aqua)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', color: 'rgba(255,255,255,0.9)' }}>
                <Phone size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                <span>+91 79723 59869</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', color: 'rgba(255,255,255,0.9)' }}>
                <Mail size={18} color="var(--color-aqua)" style={{ flexShrink: 0 }} />
                <span>hello@masterdiamond.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            justify: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.7)'
          }}
        >
          <div>
            © 2026 MASTER DIAMOND. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
