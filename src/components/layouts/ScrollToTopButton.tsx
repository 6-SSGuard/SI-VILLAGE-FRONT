import React, { useEffect, useState } from 'react';
import ScrollToTopBtn from '@/components/icons/common/ScrollToTopBtn';

function ScrollToTopButton() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // 스크롤 위치에 따라 "맨 위로 가기" 버튼 표시 여부 결정
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // "맨 위로 가기" 버튼 클릭 시 페이지 최상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4  transition z-10"
        >
          <ScrollToTopBtn />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
