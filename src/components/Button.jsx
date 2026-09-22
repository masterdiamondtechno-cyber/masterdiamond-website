import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary', // 'primary' | 'teal' | 'aqua' | 'outline' | 'text'
  showArrow = true,
  size = 'md', // 'sm' | 'md' | 'lg'
  type = 'button',
  className = '',
  disabled = false
}) {
  const getStyles = () => {
    const base = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.65rem',
      fontWeight: '600',
      borderRadius: '4px',
      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      textDecoration: 'none',
      letterSpacing: '0.01em',
      fontFamily: 'var(--font-heading)'
    };

    const sizeStyles = {
      sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
      md: { padding: '0.85rem 1.75rem', fontSize: '1rem' },
      lg: { padding: '1.1rem 2.25rem', fontSize: '1.1rem' }
    }[size];

    const variantStyles = {
      primary: {
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-white)',
        border: '1px solid var(--color-navy)',
        boxShadow: 'var(--shadow-sm)'
      },
      teal: {
        backgroundColor: 'var(--color-teal)',
        color: 'var(--color-white)',
        border: '1px solid var(--color-teal)',
        boxShadow: 'var(--shadow-sm)'
      },
      aqua: {
        backgroundColor: 'var(--color-aqua)',
        color: 'var(--color-navy)',
        border: '1px solid var(--color-aqua)',
        boxShadow: 'var(--shadow-sm)'
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--color-navy)',
        border: '1.5px solid var(--color-navy)'
      },
      'outline-white': {
        backgroundColor: 'transparent',
        color: 'var(--color-white)',
        border: '1.5px solid var(--color-white)'
      },
      text: {
        backgroundColor: 'transparent',
        color: 'var(--color-teal)',
        border: 'none',
        padding: '0.5rem 0'
      }
    }[variant];

    return { ...base, ...sizeStyles, ...variantStyles };
  };

  const Content = (
    <motion.span
      whileHover="hover"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}
    >
      <span>{children}</span>
      {showArrow && (
        <motion.span
          variants={{
            hover: { x: 5 }
          }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-flex' }}
        >
          <ArrowRight size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
        </motion.span>
      )}
    </motion.span>
  );

  if (to) {
    return (
      <motion.div
        whileHover={!disabled ? { y: -2 } : {}}
        whileTap={!disabled ? { y: 0 } : {}}
        style={{ display: 'inline-block' }}
      >
        <Link to={to} style={getStyles()} className={className}>
          {Content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { y: 0 } : {}}
      style={getStyles()}
      className={className}
    >
      {Content}
    </motion.button>
  );
}
