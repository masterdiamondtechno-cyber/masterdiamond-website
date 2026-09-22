import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Cpu, Code2, CheckCircle2 } from 'lucide-react';

export default function HeroTechComposition() {
  const [activeTab, setActiveTab] = useState('metrics');

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--color-white)',
        borderRadius: '12px',
        border: '1.5px solid var(--color-border)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* 1. Header Navigation Bar */}
      <div
        style={{
          backgroundColor: 'var(--color-navy)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.12)',
            borderRadius: '4px',
            padding: '0.25rem 0.85rem',
            color: 'var(--color-white)',
            fontSize: '0.8rem',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Globe size={13} color="var(--color-aqua)" />
          <span>https://masterdiamond.io/core-engine</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--color-aqua)', fontWeight: '700' }}>SYSTEM ONLINE</span>
        </div>
      </div>

      {/* 2. Main Dashboard Interior */}
      <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg)' }}>
        
        {/* Toggle Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal)', fontWeight: '700' }}>
              MASTER DIAMOND ENGINE
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-navy)', fontFamily: 'var(--font-heading)' }}>
              Live Telemetry & Architecture
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', backgroundColor: 'var(--color-white)', padding: '0.2rem', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
            <button
              onClick={() => setActiveTab('metrics')}
              style={{
                padding: '0.35rem 0.85rem',
                fontSize: '0.8rem',
                borderRadius: '4px',
                backgroundColor: activeTab === 'metrics' ? 'var(--color-navy)' : 'transparent',
                color: activeTab === 'metrics' ? 'var(--color-white)' : 'var(--color-navy)',
                fontWeight: '700',
                transition: 'all 0.2s ease'
              }}
            >
              Metrics
            </button>
            <button
              onClick={() => setActiveTab('code')}
              style={{
                padding: '0.35rem 0.85rem',
                fontSize: '0.8rem',
                borderRadius: '4px',
                backgroundColor: activeTab === 'code' ? 'var(--color-navy)' : 'transparent',
                color: activeTab === 'code' ? 'var(--color-white)' : 'var(--color-navy)',
                fontWeight: '700',
                transition: 'all 0.2s ease'
              }}
            >
              Code Stack
            </button>
          </div>
        </div>

        {/* Tab 1: Live Metrics */}
        {activeTab === 'metrics' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Stat Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              <div style={{ backgroundColor: 'var(--color-white)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text)', textTransform: 'uppercase', fontWeight: '700' }}>Uptime SLA</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-navy)' }}>99.99%</div>
              </div>
              <div style={{ backgroundColor: 'var(--color-white)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text)', textTransform: 'uppercase', fontWeight: '700' }}>API Latency</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-teal)' }}>14ms</div>
              </div>
              <div style={{ backgroundColor: 'var(--color-white)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text)', textTransform: 'uppercase', fontWeight: '700' }}>Security</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <ShieldCheck size={16} color="var(--color-teal)" /> Active
                </div>
              </div>
            </div>

            {/* Live Chart Container */}
            <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                <span>Real-Time Data Pipeline Throughput</span>
                <span style={{ color: 'var(--color-teal)' }}>+32.4% Acceleration</span>
              </div>
              <svg viewBox="0 0 400 70" style={{ width: '100%', height: '60px' }}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2F8FA2" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#2F8FA2" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M0,50 Q60,15 120,40 T240,25 T360,45 L400,10 L400,70 L0,70 Z" fill="url(#chartGradient)" />
                <motion.path
                  d="M0,50 Q60,15 120,40 T240,25 T360,45 L400,10"
                  fill="none"
                  stroke="#2F8FA2"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <circle cx="400" cy="10" r="5" fill="#59B9B4" />
              </svg>
            </div>
          </div>
        ) : (
          /* Tab 2: Code Snippet */
          <div style={{ backgroundColor: 'var(--color-navy)', padding: '1.1rem', borderRadius: '8px', color: '#E2E8F0', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6' }}>
            <div><span style={{ color: '#F6AD55' }}>import</span> &#123; MasterDiamondEngine &#125; <span style={{ color: '#F6AD55' }}>from</span> <span style={{ color: 'var(--color-aqua)' }}>'@master-diamond/core'</span>;</div>
            <div style={{ marginTop: '0.4rem' }}><span style={{ color: '#F6AD55' }}>const</span> app = <span style={{ color: 'var(--color-teal)' }}>new</span> MasterDiamondEngine(&#123;</div>
            <div style={{ paddingLeft: '1.25rem' }}>designSystem: <span style={{ color: 'var(--color-aqua)' }}>'Swiss-Minimal-Tech'</span>,</div>
            <div style={{ paddingLeft: '1.25rem' }}>performance: <span style={{ color: '#68D391' }}>'100/100 Core Web Vitals'</span>,</div>
            <div style={{ paddingLeft: '1.25rem' }}>modules: [<span style={{ color: 'var(--color-aqua)' }}>'Web'</span>, <span style={{ color: 'var(--color-aqua)' }}>'Mobile'</span>, <span style={{ color: 'var(--color-aqua)' }}>'AI'</span>, <span style={{ color: 'var(--color-aqua)' }}>'IoT'</span>]</div>
            <div>&#125;);</div>
            <div style={{ marginTop: '0.4rem', color: 'var(--color-aqua)' }}>// Engine deployed successfully</div>
          </div>
        )}

        {/* Bottom Feature Badges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '1rem' }}>
          <div style={{ backgroundColor: 'var(--color-white)', padding: '0.65rem 0.85rem', borderRadius: '6px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={16} color="var(--color-teal)" />
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-navy)' }}>IoT Telemetry Engine</span>
          </div>
          <div style={{ backgroundColor: 'var(--color-white)', padding: '0.65rem 0.85rem', borderRadius: '6px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={16} color="var(--color-teal)" />
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-navy)' }}>High-Concurrency API</span>
          </div>
        </div>

      </div>
    </div>
  );
}
