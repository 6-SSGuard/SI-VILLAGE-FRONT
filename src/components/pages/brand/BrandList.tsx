'use client';
import React, { useState, useRef, useEffect } from 'react';

function BrandList({ searchQuery }: { searchQuery: string }) {
  const buttons = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const stickyHeaderHeight = 56;

  const [selectedButton, setSelectedButton] = useState('A');
  // ref 객체의 타입을 명시적으로 설정
  const brandRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToBrand = (letter: string) => {
    if (brandRefs.current[letter]) {
      setSelectedButton(letter);
      window.scrollTo({
        top: brandRefs.current[letter]!.offsetTop - stickyHeaderHeight,
        behavior: 'smooth',
      });
    }
  };
  const filteredBrands = buttons.filter((letter) =>
    brands[letter].toLowerCase().includes(searchQuery)
  );

  // 스크롤 위치에 따라 "맨 위로 가기" 버튼 표시 여부 결정
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // 스크롤 위치 기준 (200px)
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
    <div>
      <div className="flex overflow-x-auto scrollbar-hide ml-4">
        {buttons.map((letter) => (
          <button
            key={letter}
            onClick={() => scrollToBrand(letter)}
            className={`px-2 py-1 mx-[1.5px] text-xs mt-4 ${
              selectedButton === letter
                ? 'border-2 border-black text-black bg-white'
                : 'border-2 border-gray-300 text-gray-700 bg-white'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {filteredBrands.map((letter) => (
          <div
            key={letter}
            ref={(el) => {
              brandRefs.current[letter] = el;
            }}
            className="mb-8 mx-4"
          >
            <div className="border-b-2 w-full mx-auto">
              <h3 className="text-xl font-bold">{letter}</h3>
            </div>
            <div className="flex justify-between p-4 font-semibold">
              <p>{brands[letter]}</p>
              <img src="heart.png" alt="heart" className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
      {/* "맨 위로 가기" 버튼 */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-white p-2 rounded-full shadow-lg transition z-10"
        >
          ↑
        </button>
      )}
    </div>
  );
}

const brands: { [key: string]: string } = {
  A: 'Apple',
  B: 'Boeing',
  C: 'Coca-Cola',
  D: 'Disney',
  E: 'eBay',
  F: 'Ford',
  G: 'Google',
  H: 'Honda',
  I: 'IBM',
  J: 'Johnson & Johnson',
  K: 'Kelloggs',
  L: 'Lego',
  M: 'Microsoft',
  N: 'Nike',
  O: 'Oracle',
  P: 'Pepsi',
  Q: 'Qualcomm',
  R: 'Rolex',
  S: 'Samsung',
  T: 'Tesla',
  U: 'Uber',
  V: 'Visa',
  W: 'Walmart',
  X: 'Xerox',
  Y: 'Yahoo',
  Z: 'Zara',
};

export default BrandList;
