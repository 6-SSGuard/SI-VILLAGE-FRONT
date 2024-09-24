import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function NecessaryField() {
  const [formData, setFormData] = useState({
    emailId: '',
    emailDomain: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phoneNumber: '',
    selectedDomain: 'direct',
    isCustomDomain: false,
    isAgeConfirmed: false,
  });

  // 공통 Input 스타일
  const inputStyle = 'border p-2 border-[#E0E0E0] placeholder:text-[#E0E0E0]';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (value === 'custom') {
      setFormData((prev) => ({
        ...prev,
        isCustomDomain: true,
        [name]: '',
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        isCustomDomain: false,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold">필수항목</h1>
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className={`${inputStyle} flex-grow`}
              placeholder="이메일 아이디"
            />
            <span className="text-lg">@</span>
            {formData.isCustomDomain && (
              <Input
                type="text"
                name="emailDomain"
                value={formData.emailDomain}
                onChange={handleChange}
                className={`${inputStyle} flex-grow`}
                placeholder="도메인"
              />
            )}

            {/* 이메일 도메인 선택 필드 */}
            <select
              onChange={handleDomainChange}
              name="emailDomain"
              value={formData.isCustomDomain ? '' : formData.emailDomain}
              className={`w-[180px] ${inputStyle}`}
            >
              <option value="custom">직접입력</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="daum.net">daum.net</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="nate.com">nate.com</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            className={`${inputStyle} w-full`}
          />
          <p className="text-xs text-gray-400">숫자, 영문 포함 10자 이상</p>
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className={`${inputStyle} w-full`}
          />
          <p className="text-xs text-gray-400">숫자, 영문 포함 10자 이상</p>
        </div>

        <Input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          className={`${inputStyle} w-full`}
        />

        <div className="flex space-x-2">
          <Input
            type="text"
            name="phoneNumber"
            placeholder="휴대폰번호"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`${inputStyle} flex-grow`}
          />
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isAgeConfirmed"
            checked={formData.isAgeConfirmed}
            onChange={handleChange}
            className="accent-black"
          />
          <span className="text-sm font-semibold">
            만 14세 이상입니다.(필수)
          </span>
        </label>
      </div>
    </>
  );
}
