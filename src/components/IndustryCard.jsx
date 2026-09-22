import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Check } from 'lucide-react';

export default function IndustryCard({ industry }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = LucideIcons[industry.iconName] || LucideIcons.Building;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`mosaic-card ${industry.gridSpan}`}
      style={{
        backgroundColor: isHovered ? '#2F8FA2' : '#FFFFFF',
        color: isHovered ? '#FFFFFF' : '#0B2340',
        transition: 'all 0.3s ease',
        border: '1.5px solid #DDE2E2',
        borderRadius: '8px'
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              backgroundColor: isHovered ? 'rgba(255,255,255,0.25)' : '#E9ECEC',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0
            }}
          >
            <IconComponent size={22} color={isHovered ? '#FFFFFF' : '#0B2340'} />
          </div>

          <div style={{ transform: isHovered ? 'translateX(4px)' : 'none', transition: 'transform 0.2s ease' }}>
            <ArrowRight size={18} color={isHovered ? '#FFFFFF' : '#2F8FA2'} />
          </div>
        </div>

        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: '700',
            marginBottom: '0.65rem',
            color: isHovered ? '#FFFFFF' : '#0B2340',
            lineHeight: '1.2'
          }}
        >
          {industry.title}
        </h3>

        <p
          style={{
            fontSize: '0.925rem',
            lineHeight: '1.55',
            color: isHovered ? 'rgba(255,255,255,0.95)' : '#4A5568',
            marginBottom: '1.25rem'
          }}
        >
          {industry.shortDescription}
        </p>

        {industry.solutions && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {industry.solutions.slice(0, 4).map((sol, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem' }}>
                <Check size={12} color={isHovered ? '#59B9B4' : '#2F8FA2'} style={{ flexShrink: 0 }} />
                <span style={{ color: isHovered ? '#FFFFFF' : '#0B2340', fontWeight: '600' }}>
                  {sol}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link
        to={`/industries#${industry.id}`}
        style={{
          fontSize: '0.8rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: isHovered ? '#FFFFFF' : '#0B2340',
          marginTop: 'auto',
          paddingTop: '0.85rem',
          borderTop: isHovered ? '1px solid rgba(255,255,255,0.25)' : '1px solid #E9ECEC'
        }}
      >
        View Sector Details →
      </Link>
    </div>
  );
}
