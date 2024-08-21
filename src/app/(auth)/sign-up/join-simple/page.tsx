"use client";
import SearchIcon from "@/components/icons/SearchIcon";
import AddressSearchDialog from "../../../../components/dialog/AddressDialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import DialogComponent from "@/components/dialog/DialogComponent";
import MarketingPurpose from "@/components/dialog/MarketingPurpose";
import WebsiteTerms from "@/components/dialog/WebsiteTerms";
import MemberTerms from "@/components/dialog/MemberTerms";
import ServiceTerms from "@/components/dialog/ServiceTerms";
import TomboyTerms from "@/components/dialog/TomboyTerms";

type TermKeys = "termAll" | "1" | "2" | "3" | "4";

export default function Page() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleComplete = (data: any) => {
    // 주소 데이터 처리
    setAddress(data.address);
    console.log(data);
  };

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

  const [checkedState, setCheckedState] = useState({
    all: false,
    sms: false,
    email: false,
    dm: false,
    call: false,
  });

  const handlemailCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setCheckedState((prevState) => {
      const newState = { ...prevState, [name]: checked };

      // Check if all individual checkboxes are checked
      const allChecked =
        newState.sms && newState.email && newState.dm && newState.call;

      return {
        ...newState,
        all: allChecked || (name === "all" && checked), // 전체수신이 선택되면 모두 선택, 하나라도 선택되면 전체수신 선택
      };
    });

    if (name === "all") {
      setCheckedState({
        all: checked,
        sms: checked,
        email: checked,
        dm: checked,
        call: checked,
      });
    } else {
      setCheckedState((prevState) => ({
        ...prevState,
        [name]: checked,
        all:
          checked &&
          prevState.sms &&
          prevState.email &&
          prevState.dm &&
          prevState.call,
      }));
    }
  };

  const [checkedTerms, setCheckedTerms] = useState<Record<TermKeys, boolean>>({
    termAll: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const nameTyped = name as TermKeys;

    setCheckedTerms((prev) => {
      const newCheckedTerms = { ...prev, [nameTyped]: checked };

      // If all individual checkboxes are checked, set termAll to true
      const allChecked = (Object.keys(newCheckedTerms) as TermKeys[])
        .filter((key) => key !== "termAll")
        .every((key) => newCheckedTerms[key]);

      return { ...newCheckedTerms, termAll: allChecked };
    });
  };
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setCheckedTerms({
      termAll: checked,
      1: checked,
      2: checked,
      3: checked,
      4: checked,
    });
  };

  const handlePopupOpen = (id: string, title: string) => {
    // 팝업 열기 로직을 여기에 추가
    console.log(`Open popup for ${id} with title ${title}`);
  };

  const years = Array.from(
    { length: 2010 - 1924 + 1 },
    (_, i) => 1924 + i
  ).reverse();

  const [dialogOpen, setDialogOpen] = useState(false);

  const [dialogContent, setDialogContent] = useState<{
    title: string;
    description?: string;
    contentComponent?: React.ReactNode;
  } | null>(null);

  const handleOpenDialog = (
    title: string,
    description?: string,
    contentComponent?: React.ReactNode
  ) => {
    setDialogContent({ title, description, contentComponent });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogContent(null);
  };

  return (
    <div
      className="p-4"
      style={{
        overflowY: "auto", // 내용이 길어지면 스크롤이 생기도록 합니다.
      }}
    >
      <h1 className="text-xl font-bold">필수항목</h1>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
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
      <div className=" gray-bar bg-gray-200 h-1 w-full my-6"></div>
      <h1 className="text-xl font-bold">선택항목</h1>
      <h1 className="text-base font-bold mt-4">생년월일</h1>
      <div className="flex flex-row space-x-2">
        <select
          id="email_address"
          name="emailDomain"
          title="년도"
          aria-placeholder="년도"
          value={formData.emailDomain}
          className="border p-2 flex-grow min-w-[108px]"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          id="email_address"
          name="emailDomain"
          title="월"
          value={formData.emailDomain}
          className="border p-2 flex-grow"
        >
          <option value="custom">월</option>
          <option value="naver.com">naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="daum.net">daum.net</option>
          <option value="hanmail.net">hanmail.net</option>
          <option value="nate.com">nate.com</option>
        </select>
        <select
          id="email_address"
          name="emailDomain"
          title="일"
          value={formData.emailDomain}
          // onChange={handleDomainChange}
          className="border p-2 flex-grow"
        >
          <option value="custom">일</option>
          <option value="naver.com">naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="daum.net">daum.net</option>
          <option value="hanmail.net">hanmail.net</option>
          <option value="nate.com">nate.com</option>
        </select>
      </div>
      <div className="space-y-4">
        <p className="text-base font-bold mt-4">주소</p>
        <div className="flex items-center justify-between space-x-4">
          <p className={`text-gray-600 ${!address ? "" : ""}`}>
            {address || "주소를 선택하세요"}
          </p>
          <button
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
      <div className="p-4 space-y-6">
        {/* Marketing Consent */}
        <div className="space-y-4">
          <p className="text-lg font-semibold">마케팅정보 수신동의</p>

          <div className="flex flex-row space-x-5">
            <label className="flex items-center space-x-2">
              <input
                id="marketing_term_1908000711"
                type="checkbox"
                name="chk-marketing"
                value="40"
                onChange={handlemailCheckboxChange}
                className="form-checkbox h-4 w-4 accent-black"
              />
              <span className="text-xs font-semibold">
                마케팅 목적의 개인정보 수집 및 이용동의
                <span className="text-yellow-500">(선택)</span>
              </span>
            </label>
            <a
              href="#"
              onClick={() =>
                handleOpenDialog(
                  "마케팅 목적의 개인정보 수집 및 이용동의",
                  "",
                  <MarketingPurpose />
                )
              }
              className="text-blue-500 underline"
            >
              <SearchIcon />
            </a>
          </div>

          <p className="text-xs text-gray-600 font-semibold underline underline-offset-4">
            수신 미동의 시 신세계인터내셔날에서 진행하는 이벤트 및 할인,
            인기/신상품 등의 정보를 받아보실 수 없으며, 이벤트 및 추가 혜택 제공
            대상에서 제외될 수 있습니다.
          </p>
          <li className="text-xs text-gray-600 list-disc list-outside">
            회원가입/구매/회사의 주요정책 관련 정보는 수신동의와 관계없이 모든
            회원에게 발송됩니다.
          </li>

          <div className="space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li key="all" className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="all"
                  id="rcvYnAll"
                  onChange={handlemailCheckboxChange}
                  checked={checkedState.all}
                  className="form-checkbox h-4 w-4 accent-black"
                />
                <label htmlFor="rcvYnAll" className="text-gray-700">
                  전체수신
                </label>
              </li>
            </ul>

            <ul className="grid grid-cols-2 gap-4">
              <li key="sms" className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="sms"
                  id="rcvYnSms"
                  onChange={handlemailCheckboxChange}
                  checked={checkedState.sms}
                  className="form-checkbox h-4 w-4 accent-black"
                />
                <label htmlFor="rcvYnSms" className="text-gray-700">
                  SMS
                </label>
              </li>

              <li key="email" className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="email"
                  id="rcvYnEmail"
                  onChange={handlemailCheckboxChange}
                  checked={checkedState.email}
                  className="form-checkbox h-4 w-4 accent-black"
                />
                <label htmlFor="rcvYnEmail" className="text-gray-700">
                  E-mail
                </label>
              </li>

              <li key="dm" className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="dm"
                  id="rcvYnDm"
                  onChange={handlemailCheckboxChange}
                  checked={checkedState.dm}
                  className="form-checkbox h-4 w-4 accent-black"
                />
                <label htmlFor="rcvYnDm" className="text-gray-700">
                  DM(카탈로그)
                </label>
              </li>

              <li key="call" className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="call"
                  id="rcvYnCall"
                  onChange={handlemailCheckboxChange}
                  checked={checkedState.call}
                  className="form-checkbox h-4 w-4 accent-black"
                />
                <label htmlFor="rcvYnCall" className="text-gray-700">
                  CALL
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-200 h-1 my-6"></div>

        {/* Terms of Use */}
        <div className="space-y-4">
          <div className="text-xl font-bold">이용약관</div>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center space-x-2">
                <input
                  id="termAll"
                  type="checkbox"
                  name="termAll"
                  onChange={handleSelectAll}
                  checked={checkedTerms.termAll}
                  className="form-checkbox h-4 w-4 accent-black"
                />
                <label
                  htmlFor="termAll"
                  className="text-sm font-semibold text-gray-700"
                >
                  모두 동의합니다.
                </label>
              </div>
              <p className="text-xs text-gray-600 p-6 mt-[-10px] border-b-[1px]">
                전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                선택항목에 대한 동의를 거부하시는 경우에도 서비스 이용이
                가능합니다.
              </p>
            </li>
            {[
              {
                id: "1",
                title: "신세계인터내셔날 웹사이트 이용약관",
                essential: true,
                components: <WebsiteTerms />,
              },
              {
                id: "2",
                title: "신세계인터내셔날 통합회원 이용약관",
                essential: true,
                components: <MemberTerms />,
              },
              {
                id: "3",
                title: "서비스 제공을 위한 개인정보 수집 및 이용동의",
                essential: true,
                components: <ServiceTerms />,
              },
              {
                id: "4",
                title:
                  "통합 멤버십 서비스 제공을 위한 신세계톰보이 정보 제공 동의",
                essential: false,
                components: <TomboyTerms />,
              },
            ].map((term) => (
              <li
                key={term.id}
                className="flex items-center space-x-1 space-y-4 border-b-[1px]"
              >
                <div className="flex items-center space-x-1 flex-grow ">
                  <input
                    id={`term_${term.id}`}
                    type="checkbox"
                    name={term.id}
                    data-target="agree1"
                    value={term.id}
                    onChange={handleCheckboxChange}
                    checked={checkedTerms[term.id as TermKeys]}
                    className="form-checkbox accent-black"
                  />
                  <label
                    htmlFor={`term_${term.id}`}
                    className="text-sm font-semibold text-gray-700 my-4"
                  >
                    {term.title}{" "}
                    <span className={`text-yellow-500`}>
                      {term.essential ? "(필수)" : "(선택)"}
                    </span>
                  </label>
                </div>
                <a
                  href="#"
                  onClick={() =>
                    handleOpenDialog(term.title, "", term.components)
                  }
                  className="text-blue-500 underline"
                >
                  <SearchIcon />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-6">
            <button
              id="reg_mbr_button"
              className="bg-black text-white px-6 py-3 w-full hover:bg-gray-800 font-semibold text-sm"
            >
              약관동의 및 가입완료
            </button>
          </div>
        </div>
      </div>
      {/* Dialog Component */}
      {dialogContent && (
        <DialogComponent
          title={dialogContent.title}
          description={dialogContent.description}
          open={dialogOpen}
          onClose={handleCloseDialog}
        >
          {dialogContent.contentComponent}
        </DialogComponent>
      )}
    </div>
  );
}
