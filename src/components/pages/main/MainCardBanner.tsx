'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

function MainCardBanner() {
  const cardBannerList = [
    {
      id: 1,
      imageSrc: '/images/cardbanner1.png',
    },
    {
      id: 2,
      imageSrc: '/images/cardbanner2.png',
    },
    {
      id: 3,
      imageSrc: '/images/cardbanner3.png',
    },
    {
      id: 4,
      imageSrc: '/images/cardbanner4.png',
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-5'); // 요소가 다시 보일 때 애니메이션 재적용
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-5'); // 요소가 화면에서 벗어날 때 초기 상태로 되돌림
            entry.target.classList.remove('opacity-100', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.1, // 10%가 보일 때 애니메이션 실행
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (cardRefs.current) {
        cardRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 mb-12">
      {cardBannerList.map((card, index) => (
        <div
          key={index}
          className="transform opacity-0 translate-y-5 transition-opacity duration-700 ease-out"
          ref={(el) => {
            cardRefs.current[index] = el; // 반환값이 없도록 수정
          }}
        >
          <Image
            src={card.imageSrc}
            alt={`image-${card.id}`}
            width={172}
            height={86}
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default MainCardBanner;
