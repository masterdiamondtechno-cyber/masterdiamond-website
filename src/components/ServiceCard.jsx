import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const IconComponent = LucideIcons[service.iconName] || LucideIcons.Code;

  return (
    <div
      className={`mosaic-card ${service.gridSpan}`}
      style={{
        backgroundColor: '#FFFFFF',
        color: '#0B2340',
        border: '1.5px solid #DDE2E2',
        borderRadius: '8px'
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: '700',
              color: service.accentColor || '#2F8FA2'
            }}
          >
            {service.number}
          </span>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: '#E9ECEC',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0
            }}
          >
            <IconComponent size={20} color="#0B2340" />
          </div>
        </div>

        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: '700',
            marginBottom: '0.75rem',
            color: '#0B2340',
            lineHeight: '1.2'
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: '0.95rem',
            color: '#4A5568',
            marginBottom: '1.25rem',
            lineHeight: '1.55'
          }}
        >
          {service.shortDescription}
        </p>

        {service.capabilities && service.capabilities.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {service.capabilities.slice(0, 5).map((cap, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
                  backgroundColor: '#F7F8F8',
                  border: '1px solid #DDE2E2',
                  borderRadius: '4px',
                  color: '#0B2340',
                  fontWeight: '600'
                }}
              >
                {cap}
              </span>
            ))}
          </div>
        )}
      </div>

      <Link
        to={`/services#${service.id}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '700',
          color: '#0B2340',
          marginTop: 'auto',
          paddingTop: '1rem',
          borderTop: '1px solid #E9ECEC'
        }}
      >
        <span style={{ color: '#0B2340' }}>Explore Service</span>
        <ArrowRight size={14} color="#2F8FA2" />
      </Link>
    </div>
  );
}
