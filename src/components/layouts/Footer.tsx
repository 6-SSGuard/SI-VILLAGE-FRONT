"use client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowBottomIcon from "../icons/ArrowBottomIcon";
import ArrowTopIcon from "../icons/ArrowTopIcon";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  // 버튼 클릭 시 토글 상태 변경
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white w-full flex justify-around text-sm p-2 border-t-8">
        <Link href="#">ABOUT</Link>
        <Link href="http://www.sikorea.co.kr" passHref>
          회사소개
        </Link>
        <Link href="#">매장안내</Link>
        <Link href="#">고객센터</Link>
        <Link href="#">채팅상담</Link>
      </nav>
      <div className="p-4">
        <div className="flex justify-between mt-4 border-b border-gray-200">
          <p className="font-semibold ">㈜신세계인터내셔날 사업자 정보</p>
          <button onClick={toggleInfo}>
            {isOpen ? <ArrowBottomIcon /> : <ArrowTopIcon />}
          </button>
        </div>

        {isOpen && (
          <div className="text-xs mt-4 ">
            서울특별시 강남구 도산대로 449 (청담동)
            <br />
            대표이사 : 윌리엄김
            <br />
            사업자등록번호 : 201-81-53657
            <br />
            통신판매업 신고번호 : 강남-13797
            <br />
            개인정보보호책임자 : 임홍철
            <br />
            호스팅사업자 : ㈜신세계아이앤씨
            <br />
            고객센터(유료) : 1644-4490
            <br />
            이메일 :{" "}
            <a href="mailto:siv_cs@sikorea.co.kr">siv_cs@sikorea.co.kr</a>
            <div className="my-4">
              <Link
                href="https://www.ftc.go.kr/info/bizinfo/communicationView.jsp?wrkr_no=2018153657&amp;apv_perm_no=2007322008330213797"
                className="mr-6"
              >
                사업자정보확인
              </Link>
              <Link href="https://pg.nicepay.co.kr/issue/IssueEscrow.jsp?CoNo=2018153657">
                에스크로서비스가입확인
              </Link>
            </div>
          </div>
        )}

        <div />

        <ul className="flex divide-x divide-gray-300 space-x-2 text-xs mt-4">
          <li>
            <Link href="#">
              <b>개인정보처리방침</b>
            </Link>
          </li>
          <li>
            <Link href="#">이용약관</Link>
          </li>
          <li>
            <Link href="#">PC 버전보기</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
