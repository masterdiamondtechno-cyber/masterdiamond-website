import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionLabel from '../components/SectionLabel';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        padding: '4rem 1.5rem',
        backgroundColor: 'var(--color-bg)',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <SectionLabel text="ERROR 404" color="teal" />

        {/* Animated Geometric Diamond Network Visual */}
        <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 2rem auto' }}>
          <motion.svg
            viewBox="0 0 100 100"
            style={{ width: '100%', height: '100%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <polygon
              points="50,10 90,35 75,85 25,85 10,35"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="2"
            />
            <polygon
              points="50,10 75,85 10,35"
              fill="none"
              stroke="var(--color-aqua)"
              strokeWidth="1.5"
            />
            <polygon
              points="50,10 90,35 25,85"
              fill="none"
              stroke="var(--color-navy)"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="10" r="4" fill="var(--color-teal)" />
            <circle cx="90" cy="35" r="4" fill="var(--color-aqua)" />
            <circle cx="75" cy="85" r="4" fill="var(--color-navy)" />
            <circle cx="25" cy="85" r="4" fill="var(--color-teal)" />
            <circle cx="10" cy="35" r="4" fill="var(--color-aqua)" />
          </motion.svg>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: ' clamp(3.5rem, 8vw, 6rem)',
            fontWeight: '700',
            color: 'var(--color-navy)',
            lineHeight: '1',
            marginBottom: '0.5rem'
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            color: 'var(--color-navy)',
            marginBottom: '1rem'
          }}
        >
          PAGE NOT FOUND
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--color-text)',
            marginBottom: '2rem'
          }}
        >
          Looks like this digital path doesn't exist.
        </p>

        <Button to="/" variant="teal" size="lg">
          Back to Home →
        </Button>
      </div>
    </div>
  );
}
