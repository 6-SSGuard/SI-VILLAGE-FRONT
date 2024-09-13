'use client';
import React, { useState } from 'react';
import ArrowTopIcon from '@/components/icons/common/ArrowTopIcon';
import ArrowBottomIcon from '@/components/icons/common/ArrowBottomIcon';
import SiButton from '@/components/icons/common/SiButton';
import MaskedWriter from '@/components/layouts/MaskedWriter';

function ProductQnA({ productname }: { productname: string }) {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (id: number) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="p-6">
      <h2 className="text-lg font-semibold">
        Q&A<span className="text-gray-500">(00)</span>
      </h2>
      <SiButton
        className="w-full border h-10 text-sm"
        buttonTitle="상품 문의하기"
        icon="https://ssgaud-nextjs-image.s3.ap-northeast-2.amazonaws.com/pencil.png"
        iconPosition="left"
        href={`/product/${productname}/qnaform`}
      />
      <div className="mt-4 space-y-4">
        {QnAList.data.map((qna) => (
          <div key={qna.id} className="border-b border-gray-200 py-5">
            <p
              className={`inline-block px-2 py-1 text-[10px] ${
                qna.answerstatus
                  ? 'text-white bg-si-131922'
                  : 'bg-[#c8c8c8] text-white'
              }`}
            >
              {qna.answerstatus ? '답변 완료' : '답변 대기'}
            </p>
            {qna.secret ? (
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">비밀글입니다.</p>
                <div>
                  <ArrowBottomIcon />
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <p
                    className={`text-sm ${expanded[qna.id] ? '' : 'truncate max-w-11/12'}`}
                  >
                    {qna.content}
                  </p>
                  <button
                    className="text-xs text-blue-500 mt-2 flex items-center"
                    onClick={() => handleToggle(qna.id)}
                  >
                    {expanded[qna.id] ? <ArrowTopIcon /> : <ArrowBottomIcon />}
                  </button>
                </div>
              </>
            )}
            <div className="text-xs text-gray-500">
              <MaskedWriter writer={qna.writer} />
              <span className="ml-2">{qna.date}</span>
            </div>
          </div>
        ))}
      </div>
      <SiButton
        className="w-full border h-10 text-sm"
        buttonTitle="상품문의 더보기"
      />
    </section>
  );
}

export default ProductQnA;

const QnAList = {
  data: [
    {
      id: 1,
      content: '제 상품이 제대로 작동하나요?',
      writer: 'vic0000000',
      date: '2021-01-01',
      secret: false,
      answerstatus: false,
    },
    {
      id: 2,
      content: '작동하나요?',
      writer: 'vic0000001',
      date: '2021-01-02',
      secret: true,
      answerstatus: false,
    },
    {
      id: 3,
      content:
        '제 상품이 제대로 작동하나요? 너무 길어서 한번 테스트를 해보려고 하는데 이게 되는지 안되는지 확인을 하고 싶어',
      writer: 'vic0000002',
      date: '2021-01-03',
      secret: false,
      answerstatus: true,
    },
    {
      id: 4,
      content: '작동하나요?',
      writer: 'vic0000003',
      date: '2021-01-04',
      secret: true,
      answerstatus: true,
    },
  ],
};
