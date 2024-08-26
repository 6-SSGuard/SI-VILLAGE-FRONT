import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NecessaryField() {
  const [formData, setFormData] = useState({
    emailId: "",
    emailDomain: "",
    password: "",
    passwordConfirm: "",
    name: "",
    phoneNumber: "",
    selectedDomain: "direct",
    isCustomDomain: false,
    isAgeConfirmed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDomainChange = (value: string) => {
    if (value === "custom") {
      setFormData({
        ...formData,
        emailDomain: "",
        isCustomDomain: true,
      });
    } else {
      setFormData({
        ...formData,
        emailDomain: value,
        isCustomDomain: false,
      });
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
              className="border p-2 flex-grow"
            />
            <span className="text-lg">@</span>
            <Input
              type="text"
              name="emailId"
              value={formData.emailDomain}
              onChange={handleChange}
              className="border p-2 flex-grow"
            />
            <Select
              onValueChange={handleDomainChange}
              value={formData.emailDomain}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="직접입력" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">직접입력</SelectItem>
                <SelectItem value="naver.com">naver.com</SelectItem>
                <SelectItem value="gmail.com">gmail.com</SelectItem>
                <SelectItem value="daum.net">daum.net</SelectItem>
                <SelectItem value="hanmail.net">hanmail.net</SelectItem>
                <SelectItem value="nate.com">nate.com</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-xs text-gray-400">숫자, 영문 포함 10자 이상</p>
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <p className="text-xs text-gray-400">숫자, 영문 포함 10자 이상</p>
        </div>

        <Input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <div className="flex space-x-2">
          <Input
            type="text"
            name="phoneNumber"
            placeholder="휴대폰번호"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-2 flex-grow"
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
