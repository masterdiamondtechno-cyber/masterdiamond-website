import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Header Container - Fixed & Consistent Height */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'var(--color-bg)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1.5px solid var(--color-border)' : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          padding: '0.85rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Official MASTER DIAMOND Logo - Large & Visible */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="MASTER DIAMOND"
              style={{
                height: '88px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? '700' : '600',
                    color: isActive ? 'var(--color-navy)' : 'var(--color-text)',
                    padding: '0.4rem 0',
                    textDecoration: 'none'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        backgroundColor: 'var(--color-teal)',
                        borderRadius: '2px'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="desktop-nav">
              <Button to="/contact" variant="primary" size="md" showArrow={true}>
                Let's Talk
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                padding: '0.6rem',
                color: 'var(--color-navy)',
                borderRadius: '6px',
                border: '1.5px solid var(--color-border)',
                backgroundColor: 'var(--color-white)'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              top: '105px',
              backgroundColor: 'var(--color-white)',
              zIndex: 999,
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    color: location.pathname === link.path ? 'var(--color-teal)' : 'var(--color-navy)',
                    borderBottom: '1px solid var(--color-light-gray)',
                    paddingBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between'
                  }}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={20} color="var(--color-teal)" />
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Button to="/contact" variant="teal" size="lg" className="w-full">
                Let's Talk →
              </Button>
              <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text)', textAlign: 'center' }}>
                Pune, Maharashtra, India • +91 79723 59869
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
