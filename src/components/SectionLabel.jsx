import React from 'react';

export default function SectionLabel({ text, color = 'navy' }) {
  const dotColor = color === 'teal' ? '#2F8FA2' : color === 'aqua' ? '#59B9B4' : '#0B2340';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.35rem 0.85rem',
        backgroundColor: '#E9ECEC',
        borderRadius: '2rem',
        fontSize: '0.75rem',
        fontWeight: '700',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#0B2340',
        marginBottom: '1rem',
        border: '1px solid #DDE2E2'
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: dotColor,
          display: 'inline-block'
        }}
      />
      {text}
    </div>
  );
}
