import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function AccordionItem({ item, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1.5px solid #DDE2E2',
        borderRadius: '6px',
        marginBottom: '1rem',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'left',
          backgroundColor: isOpen ? '#F7F8F8' : '#FFFFFF',
          cursor: 'pointer',
          transition: 'background-color 0.25s ease'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#0B2340'
          }}
        >
          {item.question}
        </span>

        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: isOpen ? '#2F8FA2' : '#E9ECEC',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            transition: 'all 0.25s ease'
          }}
        >
          {isOpen ? (
            <Minus size={16} color="#FFFFFF" />
          ) : (
            <Plus size={16} color="#0B2340" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid #DDE2E2',
                color: '#4A5568',
                fontSize: '1rem',
                lineHeight: '1.65',
                backgroundColor: '#FFFFFF'
              }}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
