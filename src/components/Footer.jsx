import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/process' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'Custom Software', path: '/services' },
    { name: 'AI & ML Solutions', path: '/services' },
    { name: 'IoT Platforms', path: '/services' },
    { name: 'Cloud Solutions', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
    { name: 'Technical SEO', path: '/services' },
  ],
  industries: [
    { name: 'Healthcare', path: '/industries' },
    { name: 'Education', path: '/industries' },
    { name: 'E-Commerce', path: '/industries' },
    { name: 'Finance & Fintech', path: '/industries' },
    { name: 'Agriculture', path: '/industries' },
    { name: 'Manufacturing', path: '/industries' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2340] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Top CTA Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-12 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Build Something Remarkable?
            </h3>
            <p className="text-white/70 text-sm">Turn your idea into a powerful digital product with MASTER DIAMOND.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#2F8FA2] hover:bg-[#59B9B4] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#2F8FA2]/40 whitespace-nowrap"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo.png" alt="MASTER DIAMOND" className="h-20 w-auto brightness-0 invert" />
            </Link>
            <div className="font-bold text-lg text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              MASTER DIAMOND
            </div>
            <div className="text-[#59B9B4] text-xs font-bold uppercase tracking-widest mb-4">
              Technology • Design • Innovation
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-[280px]">
              Helping businesses embrace digital transformation through bespoke web, mobile, AI, and IoT solutions from Pune, India.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter', href: '#' },
                { label: 'Instagram', href: '#' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#2F8FA2] text-xs font-bold transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/15" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/75 hover:text-[#59B9B4] text-sm font-medium transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/15" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/75 hover:text-[#59B9B4] text-sm font-medium transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/15" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#59B9B4] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#2F8FA2] flex-shrink-0" />
                <a href="tel:+917972359869" className="text-white/80 hover:text-[#59B9B4] text-sm transition-colors">+91 79723 59869</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#59B9B4] flex-shrink-0" />
                <a href="mailto:hello@masterdiamond.com" className="text-white/80 hover:text-[#59B9B4] text-sm transition-colors">hello@masterdiamond.com</a>
              </li>
            </ul>

            {/* Industries Quick Links */}
            <div className="mt-8">
              <h5 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Industries
              </h5>
              <div className="flex flex-wrap gap-2">
                {footerLinks.industries.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[0.7rem] bg-white/8 hover:bg-[#2F8FA2]/30 text-white/70 hover:text-white px-2.5 py-1 rounded-md transition-all duration-150 font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} MASTER DIAMOND. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/50 hover:text-white/80 text-sm cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-white/50 hover:text-white/80 text-sm cursor-pointer transition-colors">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
