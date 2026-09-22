import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/process';
import { CheckCircle2 } from 'lucide-react';

export default function ProcessTimeline({ detailed = false }) {
  return (
    <div style={{ position: 'relative', padding: '1rem 0' }}>
      {/* Central Animated Vertical Progress Line */}
      <div
        style={{
          position: 'absolute',
          left: '24px',
          top: '20px',
          bottom: '20px',
          width: '3px',
          backgroundColor: 'var(--color-border)',
          zIndex: 1
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 2 }}>
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Step Number Badge */}
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: idx % 2 === 0 ? 'var(--color-navy)' : 'var(--color-teal)',
                color: 'var(--color-white)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: '700',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
                border: '2px solid var(--color-white)'
              }}
            >
              {step.step}
            </div>

            {/* Step Content Card */}
            <div
              style={{
                flex: 1,
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '1.5rem 1.75rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                  {step.title}
                </h3>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {step.subtitle}
                </span>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: detailed ? '1.25rem' : '0' }}>
                {step.description}
              </p>

              {detailed && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-light-gray)' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-navy)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Key Activities:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {step.objectives.map((obj, i) => (
                        <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={13} color="var(--color-teal)" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-navy)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Key Deliverables:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {step.deliverables.map((del, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-navy)', fontWeight: '600' }}>
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
