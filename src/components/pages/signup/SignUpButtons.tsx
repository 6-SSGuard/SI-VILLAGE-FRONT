import React from "react";

const SignUpButtons: React.FC = () => (
  <div className="mb-6 flex flex-col gap-4">
    <button className="bg-yellow-400 text-black w-full py-3 text-xs">
      카카오로 가입하기
    </button>
    <button className="bg-gray-200 text-black w-full py-3 text-xs">
      휴대폰 / 아이핀 인증으로 가입하기
    </button>
  </div>
);

export default SignUpButtons;
