import React from 'react';
import { motion } from 'framer-motion';

export default function MosaicBlock({
  children,
  bg = 'white', // 'white' | 'navy' | 'teal' | 'aqua' | 'light-gray'
  className = '',
  gridSpan = 'col-span-4',
  style = {},
  hoverEffect = true
}) {
  const getBackgroundColor = () => {
    switch (bg) {
      case 'navy': return 'var(--color-navy)';
      case 'teal': return 'var(--color-teal)';
      case 'aqua': return 'var(--color-aqua)';
      case 'light-gray': return 'var(--color-light-gray)';
      case 'white':
      default: return 'var(--color-white)';
    }
  };

  const getTextColor = () => {
    switch (bg) {
      case 'navy':
      case 'teal':
        return '#FFFFFF';
      case 'aqua':
      case 'light-gray':
      case 'white':
      default:
        return 'var(--color-navy)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      className={`mosaic-card ${gridSpan} ${className}`}
      style={{
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        boxShadow: hoverEffect ? undefined : 'none',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}
