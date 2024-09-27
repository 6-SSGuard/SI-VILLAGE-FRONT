'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MotionSectionWithMain({
  component,
}: {
  component: React.ReactNode;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const top = scrollRef.current.getBoundingClientRect().top;
      // console.log('B coordinate:', top, window.innerHeight);
      setIsVisible(top < 800);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, translateY: 50 }}
      animate={
        isVisible
          ? { opacity: 1, translateY: 0 }
          : { opacity: 0, translateY: 50 }
      }
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {component}
    </motion.div>
  );
}
