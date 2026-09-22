import React from 'react';

export default function SectionHeading({
  title,
  highlightText,
  highlightColor = 'teal',
  subtitle,
  centered = false,
  textColor = 'navy',
  className = ''
}) {
  const parts = highlightText ? title.split(highlightText) : [title];

  return (
    <div style={{ textAlign: centered ? 'center' : 'left', maxWidth: centered ? '800px' : '100%', margin: centered ? '0 auto 3rem auto' : '0 0 2.5rem 0' }} className={className}>
      <h2
        className="text-section-title"
        style={{
          color: textColor === 'white' ? '#FFFFFF' : '#0B2340',
          marginBottom: subtitle ? '1rem' : '0',
          fontWeight: '700'
        }}
      >
        {highlightText && parts.length > 1 ? (
          <>
            {parts[0]}
            <span
              style={{
                color: highlightColor === 'teal' ? '#2F8FA2' : highlightColor === 'aqua' ? '#59B9B4' : '#0B2340'
              }}
            >
              {highlightText}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: '1.125rem',
            color: textColor === 'white' ? 'rgba(255,255,255,0.92)' : '#4A5568',
            maxWidth: '680px',
            margin: centered ? '0 auto' : '0',
            lineHeight: '1.6'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
