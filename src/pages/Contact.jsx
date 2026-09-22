import React, { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import { Phone, Mail, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: 'Not Sure',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Project message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div>

      {/* HERO SECTION - EXPLICIT DEEP NAVY BACKGROUND & WHITE TEXT */}
      <section className="section-padding" style={{ backgroundColor: '#0B2340', color: '#FFFFFF', padding: '6rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <SectionLabel text="GET IN TOUCH" color="aqua" />
          <h1
            className="text-hero"
            style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}
          >
            Let's Build Something <br />
            <span className="text-highlight-aqua">Great Together.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#FFFFFF', opacity: 0.9, lineHeight: '1.65' }}>
            Tell us about your project goals. We'll help you turn your idea into a digital solution.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT LAYOUT */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="mosaic-grid mosaic-grid-12">

            {/* LEFT COLUMN: Discussion Areas & Direct Contact */}
            <div className="col-span-5">
              <div style={{ backgroundColor: '#F7F8F8', border: '1.5px solid #DDE2E2', borderRadius: '12px', padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <SectionLabel text="START A CONVERSATION" color="teal" />
                  <h3 style={{ fontSize: '1.75rem', color: '#0B2340', marginBottom: '1rem', fontWeight: '700' }}>
                    Let's talk about:
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                    {[
                      'Website & Web Applications',
                      'Mobile App Development (iOS/Android)',
                      'Custom Software & Workflow ERPs',
                      'AI & Machine Learning Solutions',
                      'IoT Telemetry & Smart Platforms',
                      'Digital Transformation Strategy'
                    ].map((topic, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '1rem', color: '#0B2340', fontWeight: '600' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2F8FA2', flexShrink: 0 }} />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid #DDE2E2', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h4 style={{ fontSize: '1rem', color: '#0B2340', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>
                      Contact Details
                    </h4>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#FFFFFF', display: 'grid', placeItems: 'center', border: '1px solid #DDE2E2', flexShrink: 0 }}>
                        <Phone size={18} color="#2F8FA2" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#4A5568' }}>Call Us</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0B2340' }}>+91 79723 59869</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#FFFFFF', display: 'grid', placeItems: 'center', border: '1px solid #DDE2E2', flexShrink: 0 }}>
                        <Mail size={18} color="#2F8FA2" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#4A5568' }}>Email Us</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0B2340' }}>hello@masterdiamond.com</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#FFFFFF', display: 'grid', placeItems: 'center', border: '1px solid #DDE2E2', flexShrink: 0 }}>
                        <MapPin size={18} color="#2F8FA2" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#4A5568' }}>Location</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0B2340' }}>Pune, Maharashtra, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2.5rem', backgroundColor: '#FFFFFF', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #DDE2E2', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Sparkles size={20} color="#2F8FA2" />
                  <div style={{ fontSize: '0.8rem', color: '#4A5568' }}>
                    Response Time: <span style={{ color: '#0B2340', fontWeight: '700' }}>Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Frontend Contact Form */}
            <div className="col-span-7">
              <div style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #DDE2E2', borderRadius: '12px', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(89,185,180,0.2)', display: 'grid', placeItems: 'center', margin: '0 auto 1.5rem auto' }}>
                      <CheckCircle2 size={36} color="#2F8FA2" />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', color: '#0B2340', marginBottom: '0.75rem', fontWeight: '700' }}>
                      Thank You! Inquiry Received.
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#4A5568', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                      We have received your project details for <strong style={{ color: '#0B2340' }}>{formData.service}</strong>. Our technical team will review your requirements and reply to <strong style={{ color: '#0B2340' }}>{formData.email}</strong> within 24 hours.
                    </p>
                    <div style={{ backgroundColor: '#F7F8F8', border: '1px solid #DDE2E2', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#4A5568', marginBottom: '2rem', display: 'inline-block' }}>
                      ℹ Note: This is a frontend demo form. No data was transmitted to an external server.
                    </div>
                    <div>
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="md">
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#0B2340', marginBottom: '0.5rem', fontWeight: '700' }}>
                      Project Inquiry Form
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                      {/* Name */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.4rem' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=""
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '6px',
                            border: errors.name ? '1px solid #E53E3E' : '1px solid #DDE2E2',
                            backgroundColor: '#F7F8F8',
                            fontSize: '0.95rem',
                            color: '#0B2340',
                            outline: 'none'
                          }}
                        />
                        {errors.name && <span style={{ fontSize: '0.75rem', color: '#E53E3E', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.4rem' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=""
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '6px',
                            border: errors.email ? '1px solid #E53E3E' : '1px solid #DDE2E2',
                            backgroundColor: '#F7F8F8',
                            fontSize: '0.95rem',
                            color: '#0B2340',
                            outline: 'none'
                          }}
                        />
                        {errors.email && <span style={{ fontSize: '0.75rem', color: '#E53E3E', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                      {/* Phone */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.4rem' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder=""
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid #DDE2E2',
                            backgroundColor: '#F7F8F8',
                            fontSize: '0.95rem',
                            color: '#0B2340',
                            outline: 'none'
                          }}
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.4rem' }}>
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder=""
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid #DDE2E2',
                            backgroundColor: '#F7F8F8',
                            fontSize: '0.95rem',
                            color: '#0B2340',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                      {/* Service Dropdown */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.4rem' }}>
                          Service Required
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid #DDE2E2',
                            backgroundColor: '#F7F8F8',
                            fontSize: '0.95rem',
                            color: '#0B2340',
                            outline: 'none'
                          }}
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile App">Mobile App Development</option>
                          <option value="Custom Software">Custom Software</option>
                          <option value="UI/UX">UI/UX Design</option>
                          <option value="AI & ML">AI & Machine Learning</option>
                          <option value="IoT">IoT Solutions</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="SEO">Technical SEO</option>
                          <option value="Cloud">Cloud Solutions</option>
                          <option value="Other">Other Requirement</option>
                        </select>
                      </div>

                      {/* Budget Dropdown */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.4rem' }}>
                          Estimated Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '0.85rem 1rem',
                            borderRadius: '6px',
                            border: '1px solid #DDE2E2',
                            backgroundColor: '#F7F8F8',
                            fontSize: '0.95rem',
                            color: '#0B2340',
                            outline: 'none'
                          }}
                        >
                          <option value="Not Sure">Not Sure</option>
                          <option value="Under ₹50K">Under ₹50K</option>
                          <option value="₹50K–₹1L">₹50K – ₹1L</option>
                          <option value="₹1L–₹5L">₹1L – ₹5L</option>
                          <option value="₹5L+">₹5L+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#0B2340', marginBottom: '0.4rem' }}>
                        Project Details / Message *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals, timelines, and specific requirements..."
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem',
                          borderRadius: '6px',
                          border: errors.message ? '1px solid #E53E3E' : '1px solid #DDE2E2',
                          backgroundColor: '#F7F8F8',
                          fontSize: '0.95rem',
                          color: '#0B2340',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                      {errors.message && <span style={{ fontSize: '0.75rem', color: '#E53E3E', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                    </div>

                    <div style={{ marginTop: '0.5rem' }}>
                      <Button type="submit" variant="teal" size="lg" className="w-full">
                        Submit Project Inquiry →
                      </Button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
