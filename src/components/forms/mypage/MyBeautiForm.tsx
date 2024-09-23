'use client';
import React, { useEffect, useState } from 'react';
import { Modal } from '@/components/icons/common/Modal';
import { beautyInfoCreateDataRequest } from '@/types/mypage/mypageType';
interface MySizeBeautiInfoProps {
  beautyinfo: beautyInfoCreateDataRequest;
}
function MyBeautyForm({ beautyinfo }: MySizeBeautiInfoProps) {
  const MAX_SELECTIONS = 5;
  // beautyinfo에서 초기값 설정
  const [formData, setFormData] = useState({
    skinType: '',
    skinTone: '',
    scalpTone: '',
    beautyKeyword: [] as string[],
  });
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // console.log('form', formData);
  const keywords = [
    { label: '4001', value: '모공/결케어' },
    { label: '4002', value: '주름개선' },
    { label: '4003', value: '탄력/리프팅' },
    { label: '4004', value: '트러블완화' },
    { label: '4005', value: '각질완화' },
    { label: '4006', value: '색소침착' },
    { label: '4007', value: '유분/피지' },
    { label: '4008', value: '수분/보습' },
    { label: '4009', value: '톤업효과' },
    { label: '4010', value: '피부진정' },
    { label: '4011', value: '민감/저자극' },
    { label: '4012', value: '향료무첨가' },
    { label: '4013', value: '세정력' },
    { label: '4014', value: '커버력' },
    { label: '4015', value: '광채효과' },
    { label: '4016', value: '발색력' },
    { label: '4017', value: '흡수력' },
    { label: '4018', value: '지속력' },
    { label: '4019', value: '쿨링효과' },
    { label: '4020', value: '워터프루프' },
    { label: '4021', value: '비듬완화' },
    { label: '4022', value: '탈모완화' },
    { label: '4023', value: '볼륨효과' },
    { label: '4024', value: '손상케어' },
    { label: '4025', value: '컬러케어' },
    { label: '4026', value: '고정력' },
  ];

  useEffect(() => {
    if (beautyinfo) {
      setFormData({
        skinType: beautyinfo.skinType || '',
        skinTone: beautyinfo.skinTone || '',
        scalpTone: beautyinfo.scalpTone || '',
        beautyKeyword: beautyinfo.beautyKeyword || [],
      });
    }
  }, [beautyinfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        beautyKeyword: checked
          ? [...prevData.beautyKeyword, value]
          : prevData.beautyKeyword.filter((keyword) => keyword !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (formData.beautyKeyword.includes(value)) {
      setFormData((prevData) => ({
        ...prevData,
        beautyKeyword: prevData.beautyKeyword.filter(
          (keyword) => keyword !== value
        ),
      }));
    } else if (formData.beautyKeyword.length < MAX_SELECTIONS) {
      setFormData((prevData) => ({
        ...prevData,
        beautyKeyword: [...prevData.beautyKeyword, value],
      }));
    } else {
      setIsModalVisible(true);
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
            { label: '1001', value: '건성' },
            { label: '1002', value: '중성' },
            { label: '1003', value: '지성' },
            { label: '1004', value: '복합성' },
          ].map((item) => (
            <li key={item.label}>
              <label className="block">
                <input
                  type="radio"
                  className="hidden"
                  name="skinType"
                  value={item.value}
                  checked={formData.skinType === item.value}
                  onChange={handleChange}
                />
                <span
                  className={`inline-block w-full text-center p-[11px_14px_10px] border ${
                    formData.skinType === item.value
                      ? 'border-black'
                      : 'border-gray-300'
                  } cursor-pointer hover:border-black`}
                >
                  {item.value}
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
            { label: '2001', value: '쿨톤' },
            { label: '2002', value: '웜톤' },
            { label: '2003', value: '뉴트럴톤' },
          ].map((item) => (
            <li key={item.label} className="">
              <label className="block">
                <input
                  type="radio"
                  className="hidden"
                  name="skinTone"
                  value={item.value}
                  checked={formData.skinTone === item.value}
                  onChange={handleChange}
                />
                <span
                  className={`inline-block w-full text-center p-[11px_14px_10px] border ${
                    formData.skinTone === item.value
                      ? 'border-black'
                      : 'border-gray-300'
                  } cursor-pointer hover:border-black`}
                >
                  {item.value}
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
            { label: '3001', value: '건성' },
            { label: '3002', value: '중성' },
            { label: '3003', value: '지성' },
          ].map((item) => (
            <li key={item.label} className="">
              <label className="block">
                <input
                  type="radio"
                  className="hidden"
                  name="scalpTone"
                  value={item.value}
                  checked={formData.scalpTone === item.value}
                  onChange={handleChange}
                />
                <span
                  className={`inline-block w-full text-center p-[11px_14px_10px] border ${
                    formData.scalpTone === item.value
                      ? 'border-black'
                      : 'border-gray-300'
                  } cursor-pointer hover:border-black`}
                >
                  {item.value}두피
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
            <li key={item.label}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="hidden"
                  name="beautyKeyword"
                  value={item.value}
                  onChange={handleKeywordChange}
                  checked={formData.beautyKeyword.includes(item.value)}
                />
                <span
                  className={`inline-block w-full text-center p-[11px_14px_10px] border ${
                    formData.beautyKeyword.includes(item.value)
                      ? 'border-black'
                      : 'border-gray-300'
                  } cursor-pointer hover:border-black`}
                >
                  {item.value}
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
