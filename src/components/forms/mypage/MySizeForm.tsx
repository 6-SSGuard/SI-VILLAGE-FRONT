'use client';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sizeCreateDataRequest } from '@/types/mypage/mypageType';
import React, { useEffect, useState } from 'react';

interface MySizeInfoProps {
  sizeinfo: sizeCreateDataRequest;
}

function MySizeForm({ sizeinfo }: MySizeInfoProps) {
  const [formData, setFormData] = useState({
    height: sizeinfo?.height,
    weight: sizeinfo?.weight,
    topSize: sizeinfo?.topSize,
    bottomSize: sizeinfo?.bottomSize,
    shoeSize: sizeinfo?.shoeSize,
  });

  useEffect(() => {
    setFormData({
      height: sizeinfo?.height,
      weight: sizeinfo?.weight,
      topSize: sizeinfo?.topSize,
      bottomSize: sizeinfo?.bottomSize,
      shoeSize: sizeinfo?.shoeSize,
    });
  }, [sizeinfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // console.log('tts', sizeinfo);
  return (
    <div className="space-y-4 p-[32px_24px_40px]">
      {/* Height and Weight */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label htmlFor="height" className="w-1/3 text-sm">
            키
          </label>
          <div className="w-2/3 flex items-center ring-1 ring-si-text-gray">
            <Input
              type="text"
              name="height"
              id="height"
              placeholder="입력"
              className="flex-grow border-none placeholder:text-si-text-gray"
              value={formData.height}
              onChange={handleInputChange}
            />
            <span className="mr-2 text-sm text-[#333333]">cm</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="weight" className="w-1/3 text-sm">
            몸무게
          </label>
          <div className="w-2/3 flex items-center ring-1 ring-si-text-gray">
            <Input
              type="text"
              name="weight"
              id="weight"
              placeholder="입력"
              className="placeholder:text-si-text-gray"
              value={formData.weight}
              onChange={handleInputChange}
            />
            <span className="mr-2 text-sm text-[#333333]">kg</span>
          </div>
        </div>
      </div>

      {/* Top Size */}
      <div className="flex justify-between items-center">
        <label htmlFor="topSize" className="w-1/3 text-sm">
          평소 상의 사이즈
        </label>
        <select
          name="topSize"
          value={formData.topSize || ''}
          onChange={(e) => handleSelectChange('topSize', e.target.value)}
          className="w-2/3 h-10 border border-si-text-gray hover:border-black"
        >
          <option value="">선택</option>
          <option value="XXS">XXS 이하</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL 이상</option>
        </select>
      </div>

      {/* Bottom Size */}
      <div className="flex justify-between items-center">
        <label htmlFor="bottomSize" className="w-1/3 text-sm">
          평소 하의 사이즈
        </label>
        <select
          name="bottomSize"
          value={formData.bottomSize || ''}
          onChange={(e) => handleSelectChange('bottomSize', e.target.value)}
          className="w-2/3 h-10 border border-si-text-gray hover:border-black"
        >
          <option value="">선택</option>
          <option value="23 이하">23 이하</option>
          {Array.from({ length: 14 }, (_, i) => (
            <option key={i} value={`${24 + i}`}>{`${24 + i}`}</option>
          ))}
          <option value="38 이상">38 이상</option>
        </select>
      </div>

      {/* Shoe Size */}
      <div className="flex justify-between items-center">
        <label htmlFor="shoeSize" className="w-1/3 text-sm">
          평소 신발 사이즈
        </label>
        <select
          name="shoeSize"
          value={formData.shoeSize || ''}
          onChange={(e) => handleSelectChange('shoeSize', e.target.value)}
          className="w-2/3 h-10 border border-si-text-gray hover:border-black"
        >
          <option value="">선택</option>
          <option value="150 이하">150 이하</option>
          {Array.from({ length: 13 }, (_, i) => (
            <option
              key={i}
              value={`${160 + i * 10}`}
            >{`${160 + i * 10}`}</option>
          ))}
          <option value="290 이상">290 이상</option>
        </select>
      </div>

      <div className="text-xs text-si-text-gray">
        입력하신 사이즈는 통계자료, 사이즈 추천받기 및 상품리뷰에 사용됩니다.
      </div>
    </div>
  );
}

export default MySizeForm;
