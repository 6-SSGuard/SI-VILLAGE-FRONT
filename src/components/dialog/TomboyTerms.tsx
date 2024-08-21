import React from "react";

export default function TomboyTerms() {
  return (
    <div className="p-4 text-sm">
      <div>
        <p>
          신세계인터내셔날은 회원에게 서비스 제공을 위하여 아래와 같이 제3자
          제공을 하고 있습니다.
        </p>

        <div className="mt-4">
          * 동의를 거부하시는 경우에도 서비스는 이용하실 수 있습니다. 하지만
          멤버십 서비스 이용의 제약이 있을 수 있습니다.
        </div>

        <div className="mt-4">
          <table className="w-full table-fixed border border-gray-300">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300 bg-gray-200 text-center">
                  제공받는 자
                </th>
                <th className="p-2 border border-gray-300 bg-gray-200 text-center">
                  제공하는 항목
                </th>
                <th className="p-2 border border-gray-300 bg-gray-200 text-center">
                  이용목적
                </th>
                <th className="p-2 border border-gray-300 bg-gray-200 text-center">
                  보유 및 이용기간
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className="p-2 border border-gray-300 text-center font-bold text-lg"
                  rowSpan={3}
                >
                  신세계톰보이
                </td>
                <td className="p-2 border border-gray-300">
                  <p className="text-gray-700">
                    이름, 성별, 휴대폰 번호, 생년월일, 이메일주소, 주소, 14세
                    이상 동의여부, 구매내역, 적립금, 포인트누적 및 사용내역,
                    멤버십등급
                  </p>
                </td>
                <td className="p-2 border border-gray-300 text-center font-bold text-lg">
                  고객관리
                </td>
                <td className="p-2 border border-gray-300 text-center font-bold text-lg">
                  회원 탈퇴시까지
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
