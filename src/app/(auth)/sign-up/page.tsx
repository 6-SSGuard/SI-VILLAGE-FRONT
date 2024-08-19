"use client";
import React, { useState } from "react";
import DialogComponent from "@/components/layouts/DialogComponent";
import MembershipRankList from "@/components/layouts/MembershipRankList";
import MembershipPoint from "@/components/layouts/MembershipPoint";

export default function page() {
  const [dialogContent, setDialogContent] = useState<{
    title: string;
    description?: string;
    contentComponent?: React.ReactNode;
  } | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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
    <div className="join-container-membership px-4 py-6">
      <div className="join-container-inner mb-8">
        <p className="text-lg font-semibold mb-4">
          신세계인터내셔날 통합 멤버십 가입
        </p>
        <div className="btn-wrap join__btn-1 mb-6 flex flex-col gap-4">
          <button className="btn-wide btn-kakao bg-yellow-400 text-black w-full py-3 text-xs">
            카카오로 가입하기
          </button>
          <button className="btn-wide btn-verification bg-gray-200 text-black w-full py-3 text-xs">
            휴대폰 / 아이핀 인증으로 가입하기
          </button>
        </div>
        <div className="bg-gray-100 p-4">
          <ul className="join-container-membership-info space-y-4">
            <li>
              <p className="text-base font-bold">S.I 포인트 적립</p>
              <p className="text-gray-500 text-xs my-1">
                온/오프라인에서 제품 구매시 적립가능한 포인트 혜택
              </p>
            </li>
            <li>
              <p className="text-base font-bold">회원 등급별 혜택</p>
              <p className="text-gray-500 text-xs my-1">
                포인트 추가 적립, 할인, 생일혜택 등 다양한 등급혜택
              </p>
            </li>
            <li>
              <p className="text-base font-bold">다양한 이벤트</p>
              <p className="text-gray-500 text-xs my-1">
                다양한 이벤트와 쇼핑혜택 소식 제공
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-md mt-2">
          <div className="flex gap-2 py-1">
            <button
              className="btn-wide sml btn-line-gray border border-gray-300 text-gray-600 w-48 py-2 font-semibold text-xs"
              onClick={() =>
                handleOpenDialog(
                  "멤버십 회원 등급 안내",
                  "신세계인터내셔날 회원등급 및 혜택",
                  <MembershipRankList />
                )
              }
            >
              회원등급 혜택 자세히보기
            </button>
            <button
              className="btn-wide sml btn-line-gray border border-gray-300 text-gray-600 w-48 py-2 font-semibold text-xs"
              onClick={() =>
                handleOpenDialog(
                  "통합 멤버십 포인트 안내",
                  "신세계인터내셔날 통합 멤버십 포인트 안내",
                  <MembershipPoint />
                )
              }
            >
              통합 멤버십 포인트 자세히보기
            </button>
          </div>
        </div>
      </div>
      <div className="join-container-inner mb-8">
        <p className="text-lg font-bold mb-2">S.I.VILLAGE 간편회원 가입</p>
        <p className="text-gray-500 mb-4 font-extrabold text-xs">
          본인인증 없이 간편가입하는 방식입니다. <br />
          멤버십회원(본인인증)으로 전환가입 하셔야 더 많은 멤버십 혜택을 받으실
          수 있습니다.
        </p>
        <div className="btn-wrap join__btn-3 flex justify-center">
          <button className="btn-wide btn-line-gray border border-gray-300 text-gray-600 w-full py-3 font-bold text-sm">
            온라인 간편가입하기
          </button>
        </div>
      </div>
      <div className=" gray-bar bg-gray-200 h-1 w-full my-6"></div>
      <div className="join-container-guide">
        <p className="join-container-guide-title text-base font-semibold mb-4">
          안내사항
        </p>
        <div className="desc join-container-guide-info space-y-2 text-gray-500 text-xs">
          <li>
            본인인증 시 사용한 휴대폰 번호와 등록된 정보가 상이할 경우, 본인인증
            시 등록된 휴대폰 번호로 변경될 수 있습니다.
          </li>
          <li>
            회원혜택은 당사의 사정에 따라 변경될 수 있습니다. (구매시 포인트
            적립 포함)
          </li>
          <li>문의 : 신세계인터내셔날 고객센터(유료) 1644-4490</li>
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
