import React from "react";

export default function ServiceTerms() {
  return (
    <div className="p-4 text-xs">
      <div>
        <p>
          신세계인터내셔날은 회원에게 서비스 제공을 위하여 아래와 같이
          개인정보를 수집, 이용합니다.&nbsp;
        </p>

        <div className="my-4">
          <p>
            * 서비스 제공을 위한 개인정보를 수집 이용하는데 동의를 거부할 권리가
            있습니다. 그러나 동의를 거부할 경우 일부 서비스를&nbsp; 제공 받으실
            수 없습니다.
          </p>
        </div>

        <div className="my-4">
          <p>
            신세계인터내셔날의 개인정보취급에 대한 자세한 사항은
            “개인정보처리방침”을 확인하여 주시기 바랍니다.
          </p>

          <table className="my-4 w-full table-fixed border border-gray-300">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  구분
                </th>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  멤버십회원
                  <br />
                  (온라인 본인인증 가입)
                </th>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  멤버십회원
                  <br />
                  (오프라인 매장 본인인증 가입)
                </th>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  멤버십회원
                  <br />
                  (온라인 간편 가입)
                </th>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  외국인 회원
                  <br />
                  (온라인 간편 가입)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  목적
                </th>
                <td className="p-2 border border-gray-300">
                  이용자 식별 및 본인여부 확인,
                  <br />
                  서비스 이행을 위한 연락
                </td>
                <td className="p-2 border border-gray-300">
                  이용자 식별 및 본인여부 확인,
                  <br />
                  서비스 이행을 위한 연락
                </td>
                <td className="p-2 border border-gray-300">
                  이용자 식별, 서비스 이행을 위한 연락
                </td>
                <td className="p-2 border border-gray-300">
                  이용자 식별, 서비스 이행을 위한 연락
                </td>
              </tr>
              <tr>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  항목
                </th>
                <td className="p-2 border border-gray-300">
                  이메일주소(ID), 비밀번호, 이름, 휴대폰번호, 생년월일, 성별,
                  14세 이상 여부, 연계정보(CI)
                </td>
                <td className="p-2 border border-gray-300">
                  이름, 휴대폰번호, 생년월일, 성별, 14세 이상 여부, 연계정보(CI)
                </td>
                <td className="p-2 border border-gray-300">
                  이메일주소(ID), 비밀번호, 휴대폰번호, 이름, 14세 이상 여부
                </td>
                <td className="p-2 border border-gray-300">
                  이름, 국적, 생년월일, 성별
                </td>
              </tr>
              <tr>
                <th className="p-2 border border-gray-300 bg-gray-200 text-left">
                  보유 및 이용기간
                </th>
                <td
                  className="p-2 border border-gray-300"
                  colSpan={4}
                  rowSpan={1}
                >
                  회원탈퇴 시 까지
                  <b>
                    ※ 단, 관계법령에 의해 보존할 경우 그 의무기간 동안 별도
                    보관되며 본인확인에 필요한 정보(CI) 및 이메일(ID)은 일정기간
                    재가입 방지를 위해 30일 보관 후 삭제
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
