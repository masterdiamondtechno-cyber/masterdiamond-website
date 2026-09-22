import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 1.5 }) {
  const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const isPadded = value.startsWith('0') && value.length === 2;
  const [displayValue, setDisplayValue] = useState(numericTarget); // Default to final value for immediate rendering
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const end = numericTarget;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(easedProgress * end);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(end);
      }
    };

    setDisplayValue(0);
    requestAnimationFrame(updateCounter);
  }, [isInView, numericTarget, duration]);

  const formattedNumber = isPadded && displayValue < 10
    ? `0${displayValue}`
    : `${displayValue}`;

  return (
    <span ref={ref} style={{ display: 'inline-block' }}>
      {formattedNumber}{suffix || value.replace(/[0-9]/g, '')}
    </span>
  );
}
