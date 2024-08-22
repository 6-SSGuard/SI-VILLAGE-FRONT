"use client";
import React, { useEffect, useState } from "react";
import AddressSearchDialog from "../../components/dialog/AddressDialog";

export default function SelectField() {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [days, setDays] = useState<number[]>([]); // 일자 리스트 관리
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 년도 리스트 생성
  const years = Array.from(
    { length: 2010 - 1924 + 1 },
    (_, i) => 1924 + i
  ).reverse();

  // 월 리스트 생성
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  // 사용자가 년도나 월을 변경할 때 일자 계산
  useEffect(() => {
    const daysInMonth = (year: number, month: number) => {
      return new Date(year, month, 0).getDate();
    };

    if (formData.year && formData.month) {
      const maxDays = daysInMonth(
        parseInt(formData.year),
        parseInt(formData.month)
      );
      setDays(Array.from({ length: maxDays }, (_, i) => i + 1));
    }
  }, [formData.year, formData.month]);

  // 입력 필드 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleComplete = (data: any) => {
    // 주소 데이터 처리
    setAddress(data.address);
    console.log(data);
  };

  return (
    <>
      <h1 className="text-xl font-bold">선택항목</h1>
      <h1 className="text-base font-bold mt-4">생년월일</h1>
      <div className="flex flex-row space-x-2">
        <select
          id="year"
          name="year"
          title="년도"
          aria-placeholder="년도"
          value={formData.year}
          onChange={handleChange}
          className="border p-2 flex-grow min-w-[108px]"
        >
          <option value="">년도</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          id="month"
          name="month"
          title="월"
          value={formData.month}
          onChange={handleChange}
          className="border p-2 flex-grow"
        >
          <option value="">월</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          id="day"
          name="day"
          title="일"
          value={formData.day}
          onChange={handleChange}
          className="border p-2 flex-grow"
          disabled={!formData.year || !formData.month} // 년도와 월이 선택되지 않으면 비활성화
        >
          <option value="">일</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-4">
        <p className="text-base font-bold mt-4">주소</p>
        <div className="flex items-center justify-between space-x-4">
          <p className={`text-gray-600 ${!address ? "" : ""}`}>
            {address || "주소를 선택하세요"}
          </p>
          <button
            type="button"
            onClick={handleOpenModal}
            className="border border-gray-300 p-2 text-sm font-semibold"
          >
            주소 검색
          </button>
          <AddressSearchDialog
            open={isModalOpen}
            onClose={handleCloseModal}
            onComplete={handleComplete}
          />
        </div>
        <p className="text-sm text-gray-600">
          회원 및 배송지 주소로 설정됩니다.
        </p>
      </div>
      <div className="p-4 space-y-6"></div>
    </>
  );
}
