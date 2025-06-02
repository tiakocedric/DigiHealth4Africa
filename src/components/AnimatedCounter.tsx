import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2, suffix = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isAnimating, setIsAnimating] = useState(false);
  
  const count = useSpring(0, {
    duration: duration * 1000,
    onComplete: () => setIsAnimating(false),
  });

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      count.set(end);
    }
  }, [inView, end, count, isAnimating]);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span ref={ref} className="font-bold">
      {rounded.get()}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;