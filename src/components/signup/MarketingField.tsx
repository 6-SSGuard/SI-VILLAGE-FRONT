"use client";
import React, { useState } from "react";
import MarketingPurpose from "../dialog/MarketingPurpose";
import SearchIcon from "../icons/SearchIcon";
import DialogComponent from "../dialog/DialogComponent";

export default function MarketingField() {
  const [checkedState, setCheckedState] = useState({
    all: false,
    sms: false,
    email: false,
    dm: false,
    call: false,
  });
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

  const handlemailCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setCheckedState((prevState) => {
      const newState = { ...prevState, [name]: checked };

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

  return (
    <>
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
    </>
  );
}
