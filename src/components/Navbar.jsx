import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Web Development', path: '/services#web-development' },
      { name: 'Mobile Apps', path: '/services#mobile-app-development' },
      { name: 'Custom Software', path: '/services#custom-software' },
      { name: 'AI & Machine Learning', path: '/services#ai-machine-learning' },
      { name: 'IoT Solutions', path: '/services#iot-solutions' },
      { name: 'Cloud Solutions', path: '/services#cloud-solutions' },
    ]
  },
  { name: 'Industries', path: '/industries' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#2F8FA2] z-[9999] origin-left transition-transform duration-100"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header
        className={`sticky top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-[#DDE2E2]'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img src="/logo.png" alt="MASTER DIAMOND" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.path}
                    className={`relative flex items-center gap-1 px-3 py-2 rounded-lg text-[0.9rem] font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-[#0B2340] bg-[#F7F8F8]'
                        : 'text-[#4A5568] hover:text-[#0B2340] hover:bg-[#F7F8F8]'
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#2F8FA2] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#DDE2E2] rounded-xl shadow-xl overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2.5 text-sm font-semibold text-[#4A5568] hover:text-[#0B2340] hover:bg-[#F7F8F8] transition-colors"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 bg-[#0B2340] hover:bg-[#2F8FA2] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#2F8FA2]/30"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let's Talk
              <ArrowRight size={15} />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0B2340] border border-[#DDE2E2] rounded-lg bg-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bg-white z-[999] border-b border-[#DDE2E2] shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-[1rem] font-bold transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#2F8FA2] bg-[#F7F8F8]'
                      : 'text-[#0B2340] hover:bg-[#F7F8F8]'
                  }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.name}
                  <ArrowRight size={16} className="text-[#2F8FA2]" />
                </Link>
              ))}
              <div className="pt-3 border-t border-[#DDE2E2] mt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#0B2340] hover:bg-[#2F8FA2] text-white py-3 rounded-xl font-bold text-sm transition-all"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Let's Talk →
                </Link>
                <p className="text-center text-sm text-[#4A5568] mt-3">Pune, India • +91 79723 59869</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
