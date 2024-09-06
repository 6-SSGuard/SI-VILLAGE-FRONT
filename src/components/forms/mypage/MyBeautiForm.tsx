'use client';
import React, { useState } from 'react';
import { Modal } from '@/components/icons/common/Modal';

function MyBeautyForm() {
  const MAX_SELECTIONS = 5;
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const keywords = [
    { value: '4001', label: '모공/결케어' },
    { value: '4002', label: '주름개선' },
    { value: '4003', label: '탄력/리프팅' },
    { value: '4004', label: '트러블완화' },
    { value: '4005', label: '각질완화' },
    { value: '4006', label: '색소침착' },
    { value: '4007', label: '유분/피지' },
    { value: '4008', label: '수분/보습' },
    { value: '4009', label: '톤업효과' },
    { value: '4010', label: '피부진정' },
    { value: '4011', label: '민감/저자극' },
    { value: '4012', label: '향료무첨가' },
    { value: '4013', label: '세정력' },
    { value: '4014', label: '커버력' },
    { value: '4015', label: '광채효과' },
    { value: '4016', label: '발색력' },
    { value: '4017', label: '흡수력' },
    { value: '4018', label: '지속력' },
    { value: '4019', label: '쿨링효과' },
    { value: '4020', label: '워터프루프' },
    { value: '4021', label: '비듬완화' },
    { value: '4022', label: '탈모완화' },
    { value: '4023', label: '볼륨효과' },
    { value: '4024', label: '손상케어' },
    { value: '4025', label: '컬러케어' },
    { value: '4026', label: '고정력' },
  ];

  const handleKeywordChange = (value: string) => {
    if (selectedKeywords.includes(value)) {
      // 이미 선택된 경우 선택 해제
      setSelectedKeywords(
        selectedKeywords.filter((keyword) => keyword !== value)
      );
    } else {
      // 최대 선택 개수를 넘지 않는 경우에만 추가
      if (selectedKeywords.length < MAX_SELECTIONS) {
        setSelectedKeywords([...selectedKeywords, value]);
      } else {
        // 최대 개수에 도달한 경우 모달을 표시
        setIsModalVisible(true);
      }
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      {/* 피부타입 섹션 */}
      <section className="p-6">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-semibold">피부타입</h3>
          <span className="text-sm text-[#D99C63]">(1개)</span>
        </div>
        <ul className="flex gap-2">
          {[
            { value: '1001', label: '건성' },
            { value: '1002', label: '중성' },
            { value: '1003', label: '지성' },
            { value: '1004', label: '복합성' },
          ].map((item) => (
            <li key={item.value} className="">
              <label className="block">
                <input
                  type="radio"
                  className="hidden"
                  name="skinType"
                  value={item.value}
                />
                <span className="inline-block w-full text-center p-[11px_14px_10px] border border-gray-300 cursor-pointer hover:border-black">
                  {item.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* 피부톤 섹션 */}
      <section className="p-6">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-semibold">피부톤</h3>
          <span className="text-sm text-[#D99C63]">(1개)</span>
        </div>
        <ul className="flex gap-2">
          {[
            { value: '2001', label: '쿨톤' },
            { value: '2002', label: '웜톤' },
            { value: '2003', label: '뉴트럴톤' },
          ].map((item) => (
            <li key={item.value} className="">
              <label className="block">
                <input
                  type="radio"
                  className="hidden"
                  name="skinTone"
                  value={item.value}
                />
                <span className="inline-block w-full text-center p-[11px_14px_10px] border border-gray-300 cursor-pointer hover:border-black">
                  {item.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* 두피타입 섹션 */}
      <section className="p-6">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-semibold">두피타입</h3>
          <span className="text-sm text-[#D99C63]">(1개)</span>
        </div>
        <ul className="flex gap-2">
          {[
            { value: '3001', label: '건성두피' },
            { value: '3002', label: '중성두피' },
            { value: '3003', label: '지성두피' },
          ].map((item) => (
            <li key={item.value} className="">
              <label className="block">
                <input
                  type="radio"
                  className="hidden"
                  name="scalpType"
                  value={item.value}
                />
                <span className="inline-block w-full text-center p-[11px_14px_10px] border border-gray-300 cursor-pointer hover:border-black">
                  {item.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* 뷰티 키워드 섹션 */}
      <section className="p-6">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-semibold">뷰티키워드</h3>
          <span className="text-sm text-[#D99C63]">(3~5개)</span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {keywords.map((item) => (
            <li key={item.value} className="">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="hidden"
                  name="beautyKeyword"
                  value={item.value}
                  onChange={() => handleKeywordChange(item.value)}
                  checked={selectedKeywords.includes(item.value)}
                />
                <span
                  className={`inline-block w-full text-center p-[11px_14px_10px] border ${
                    selectedKeywords.includes(item.value)
                      ? 'border-black'
                      : 'border-gray-300'
                  } cursor-pointer hover:border-black`}
                >
                  {item.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-xs text-si-text-gray p-6">
        입력하신 뷰티정보는 통계자료, 상품 추천 및 상품리뷰에 사용됩니다.
      </p>

      {/* 모달 표시 */}
      {isModalVisible && (
        <Modal message="최대 5개까지 선택 가능합니다" onClose={closeModal} />
      )}
    </div>
  );
}

export default MyBeautyForm;
