import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function TechCategory({ categoryData, categoryIndex }) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1.5px solid #DDE2E2',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '1.5rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #E9ECEC', paddingBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2F8FA2' }}>
            CATEGORY {categoryIndex + 1}
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0B2340' }}>
            {categoryData.category}
          </h3>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#4A5568', maxWidth: '400px' }}>
          {categoryData.description}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
        {categoryData.items.map((item, idx) => {
          const IconComponent = LucideIcons[item.icon] || LucideIcons.Code;

          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#F7F8F8',
                border: '1px solid #DDE2E2',
                borderRadius: '6px',
                padding: '1.1rem',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#FFFFFF', display: 'grid', placeItems: 'center', border: '1px solid #DDE2E2', flexShrink: 0 }}>
                  <IconComponent size={16} color="#0B2340" />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0B2340' }}>
                  {item.name}
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#4A5568', lineHeight: '1.4' }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
