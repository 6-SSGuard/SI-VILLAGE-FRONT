'use client';
import React, { useState } from 'react';
import { TermKeys } from '@/components/forms/signup/SignUpForm';
import WebsiteTerms from '@/components/dialog/WebsiteTerms';
import MemberTerms from '@/components/dialog/MemberTerms';
import ServiceTerms from '@/components/dialog/ServiceTerms';
import TomboyTerms from '@/components/dialog/TomboyTerms';
import DialogComponent from '@/components/dialog/DialogComponent';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';

export default function TermsOfUseField() {
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
        .filter((key) => key !== 'termAll')
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
    <>
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
              id: '1',
              title: '신세계인터내셔날 웹사이트 이용약관',
              essential: true,
              components: <WebsiteTerms />,
            },
            {
              id: '2',
              title: '신세계인터내셔날 통합회원 이용약관',
              essential: true,
              components: <MemberTerms />,
            },
            {
              id: '3',
              title: '서비스 제공을 위한 개인정보 수집 및 이용동의',
              essential: true,
              components: <ServiceTerms />,
            },
            {
              id: '4',
              title:
                '통합 멤버십 서비스 제공을 위한 신세계톰보이 정보 제공 동의',
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
                  {term.title}{' '}
                  <span className={'text-yellow-500'}>
                    {term.essential ? '(필수)' : '(선택)'}
                  </span>
                </label>
              </div>
              <a
                href="#"
                onClick={() =>
                  handleOpenDialog(term.title, '', term.components)
                }
              >
                <ArrowRightIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
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
