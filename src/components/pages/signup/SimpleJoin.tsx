import React from "react";
import Link from "next/link";

const SimpleJoin: React.FC = () => (
  <div>
    <div className="my-10">
      <p className="text-lg font-bold mb-2">S.I.VILLAGE 간편회원 가입</p>
      <p className="text-gray-500 mb-4 font-extrabold text-xs">
        본인인증 없이 간편가입하는 방식입니다. <br />
        멤버십회원(본인인증)으로 전환가입 하셔야 더 많은 멤버십 혜택을 받으실 수
        있습니다.
      </p>
      <div className="flex justify-center">
        <Link
          href="/sign-up/join-simple"
          className="btn-line-gray border border-gray-300 text-gray-600 w-full py-3 font-bold text-sm block text-center"
        >
          온라인 간편가입하기
        </Link>
      </div>
    </div>
    <div className="gray-bar bg-gray-200 h-1 w-full my-6"></div>
    <div>
      <p className="text-base font-semibold mb-4">안내사항</p>
      <div className="desc space-y-2 text-gray-500 text-xs">
        <li>
          본인인증 시 사용한 휴대폰 번호와 등록된 정보가 상이할 경우, 본인인증
          시 등록된 휴대폰 번호로 변경될 수 있습니다.
        </li>
        <li>
          회원혜택은 당사의 사정에 따라 변경될 수 있습니다. (구매시 포인트 적립
          포함)
        </li>
        <li>문의 : 신세계인터내셔날 고객센터(유료) 1644-4490</li>
      </div>
    </div>
  </div>
);

export default SimpleJoin;
