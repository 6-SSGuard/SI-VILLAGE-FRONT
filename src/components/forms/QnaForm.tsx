'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function QnaForm({ productname }: { productname: string }) {
  const [content, setContent] = useState('');
  const router = useRouter();
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  console.log(productname);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-6">
        <header className="bg-white relative w-[400px] mt-4">
          <h2 className="text-xl font-semibold text-center ">상품 문의 작성</h2>
          <Button
            className="rounded-full absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() => router.back()}
          >
            {'X'}
          </Button>
        </header>
        <form className="flex flex-col w-full">
          {/* 상품 이름 표시 */}
          <div className="bg-[#F8F8F8] p-3 mb-4 rounded-lg text-gray-800">
            {productname}
          </div>

          {/* 비밀글 여부 체크박스 */}
          <div className="mb-4 flex items-center">
            <input className="mr-2" id="secret" type="checkbox" />
            <label
              className="text-gray-700 text-sm font-semibold"
              htmlFor="secret"
            >
              비밀글 여부
            </label>
          </div>

          {/* 문의 내용 입력란 */}
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              placeholder="최소 10글자 이상 입력 가능"
              rows={4}
              maxLength={1000}
              value={content}
              onChange={handleContentChange}
            />
            <span className="text-xs text-gray-500">
              {content.length} / 1000
            </span>
          </div>
        </form>

        {/* 안내사항 */}
        <div className="px-5 py-6 pb-20">
          <ul className="list-disc list-inside text-xs text-si-text-gray">
            <li className="mb-2">
              배송, 결제, 교환/반품에 대한 문의는 고객센터 &gt; 1:1문의를
              이용해주세요.
            </li>
            <li className="mb-2">
              상업성 홍보글, 비방글, 음란/욕설 등 부적절한 내용은 사전 통보 없이
              삭제될 수 있습니다.
            </li>
            <li className="mb-2">
              작성한 상품문의에 답변이 등록되면 회원정보에 등록된 휴대폰 번호로
              안내됩니다.
            </li>
            <li className="mb-2">
              작성한 상품문의는 마이페이지 &gt; 나의활동정보 &gt; 상품문의에서
              확인 가능합니다.
            </li>
            <li className="mb-2">
              작성한 상품문의는 수정이 불가하며, 삭제 후 재작성만 가능합니다.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between p-4 bg-white text-sm">
        <button
          className="bg-gray-500 w-full h-12 text-white font-bold py-2 px-4"
          type="button"
        >
          취소
        </button>
        <button
          className="bg-[#141A23] w-full h-12 text-white font-bold py-2 px-4"
          type="submit"
        >
          제출
        </button>
      </div>
    </div>
  );
}

export default QnaForm;
