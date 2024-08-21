import React from "react";

const MarketingPurpose: React.FC = () => {
  return (
    <div>
      <div className="text-sm text-gray-800">
        <p>
          신세계인터내셔날은 회원에게 마케팅 활용을 위하여 아래와 같이
          개인정보를 수집, 이용합니다.
        </p>
        <ul className="list-disc list-outside">
          <li className="text-sm mt-2 ml-4">
            동의를 거부하시는 경우에도 서비스는 이용하실 수 있습니다. 하지만
            당사가 제공하는 서비스 및 이벤트 정보에 대한 제공이 제한됩니다.
          </li>
        </ul>
      </div>

      <table className="w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="text-xs px-4 py-2 text-center text-gray-700">
              목적
            </th>
            <th className="text-xs px-4 py-2 text-center text-gray-700">
              항목
            </th>
            <th className="text-xs px-4 py-2 text-center text-gray-700">
              보유 및 이용기간
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300 text-center">
            <td className="px-1 py-2">
              <strong className="font-semibold text-gray-900 underline underline-offset-0">
                제휴행사 및 서비스 홍보를 위한 마케팅
              </strong>
            </td>
            <td className="text-xs px-1 py-2">
              생년월일, 휴대폰번호, 이메일주소, 주소, SNS계정
            </td>
            <td className="px-1 py-2">
              <div className="text-gray-900">
                <strong className="font-semibold underline underline-offset-0">
                  회원 탈퇴 및 동의 철회 시까지
                </strong>{" "}
                <p className=" text-xs text-gray-700">
                  ※ 단, 관계법령에 의해 보존할 경우 그 의무기간 동안 별도
                  보관되며 본인확인에 필요한 정보(CI) 및 이메일(ID)는 일정기간
                  재가입 방지를 위해 30일 보관 후 삭제
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MarketingPurpose;
