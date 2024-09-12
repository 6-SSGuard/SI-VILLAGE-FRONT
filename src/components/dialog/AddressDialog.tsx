'use client';
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';

// Daum Postcode API의 타입을 정의합니다.
interface IAddr {
  address: string;
  zonecode: string;
}

// Daum Postcode API의 설정과 메서드를 정의합니다.
interface DaumPostcodeOptions {
  oncomplete: (data: IAddr) => void;
  width?: string;
  height?: string;
  maxSuggestItems?: number;
}

interface DaumPostcode {
  new (options: DaumPostcodeOptions): {
    open: () => void;
    embed: (element: HTMLElement) => void;
  };
}

declare global {
  interface Window {
    daum: {
      Postcode: DaumPostcode;
    };
  }
}

interface AddressSearchModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: (data: IAddr) => void;
}

const AddressSearchModal: React.FC<AddressSearchModalProps> = ({
  open,
  onClose,
  onComplete,
}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded && open) {
      // Daum Postcode API 초기화
      handlePostcodeSearch();
    }
  }, [scriptLoaded, open]);

  const handlePostcodeSearch = () => {
    if (window.daum && window.daum.Postcode) {
      const elementLayer = document.getElementById('postcode-layer');

      if (elementLayer) {
        new window.daum.Postcode({
          oncomplete: function (data: IAddr) {
            onComplete(data);
            onClose();
          },
          width: '100%',
          height: '100%',
        }).embed(elementLayer);

        // iframe을 보이게 하고 중앙에 배치
        elementLayer.style.display = 'block';
        initLayerPosition();
      }
    }
  };

  const initLayerPosition = () => {
    const elementLayer = document.getElementById('postcode-layer');
    if (elementLayer) {
      const width = 350; // iframe의 너비
      const height = 500; // iframe의 높이
      const borderWidth = 2; // 테두리 두께

      elementLayer.style.width = `${width}px`;
      elementLayer.style.height = `${height}px`;
      elementLayer.style.border = `${borderWidth}px solid`;
      elementLayer.style.left = `${
        ((window.innerWidth || document.documentElement.clientWidth) - width) /
          2 -
        borderWidth
      }px`;
      elementLayer.style.top = `${
        ((window.innerHeight || document.documentElement.clientHeight) -
          height) /
          2 -
        borderWidth
      }px`;
    }
  };

  return (
    <>
      {/* Daum Postcode API 스크립트 로드 */}
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />

      {open && (
        <div
          id="postcode-layer"
          style={{
            display: 'none',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: 1000,
          }}
        >
          <Image
            src="//t1.daumcdn.net/postcode/resource/images/close.png"
            id="btnCloseLayer"
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: '-3px',
              top: '-3px',
              zIndex: 1001,
            }}
            onClick={onClose}
            alt="닫기 버튼"
            width={10}
            height={10}
          />
        </div>
      )}
    </>
  );
};

export default AddressSearchModal;
