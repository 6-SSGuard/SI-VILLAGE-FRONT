'use client';
import { useEffect, useState } from 'react';

function useScrollDirection() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsHeaderVisible(false);
        setIsScrollingUp(currentScrollY < lastScrollY);
      } else {
        setIsHeaderVisible(true);
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { isHeaderVisible, isScrollingUp };
}

export default useScrollDirection;
