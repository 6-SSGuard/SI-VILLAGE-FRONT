'use client';
import DialogComponent from '@/components/dialog/DialogComponent';
import MemberTerms from '@/components/dialog/MemberTerms';
import ArrowRightIcon from '@/components/icons/common/ArrowRightIcon';
import React, { useState } from 'react';

function InfoAgree() {
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
      <div className="flex flex-col border-t-8 p-[40px_24px_32px] space-y-4">
        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <input
              id="marketing_term"
              type="checkbox"
              name="chk-marketing"
              value="40"
              className="form-checkbox h-5 w-5 accent-black"
            />
            <span className="text-sm font-semibold">
              개인정보 수집 및 이용동의
              <span className="text-yellow-500">(필수)</span>
            </span>
          </label>
          <a
            href="#"
            onClick={() =>
              handleOpenDialog('개인정보 수집 및 이용동의', '', <MemberTerms />)
            }
          >
            <ArrowRightIcon />
          </a>
        </div>
        <div className="border border-t-0"></div>
        <span className="text-xs font-[#333333] pl-1 text-si-text-gray">
          수집하는 개인정보 항목, 수집 및 이용목적, 보유 및 이용기간에
          동의합니다.
        </span>
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

export default InfoAgree;
