'use client';
import React from 'react';

function ProductQnA() {
  return (
    <>
      <h2 className="text-lg font-semibold">
        Q&A<span className="text-gray-500">(00)</span>
      </h2>
      <div className="mt-4 space-y-4">
        {QnAList.data.map((qna) => (
          <div key={qna.id} className="border-b border-gray-200 pb-4">
            <p
              className={`inline-block px-2 py-1 text-[10px] ${qna.answerstatus ? 'text-white bg-[#131922]' : 'bg-[#c8c8c8] text-white'}`}
            >
              {qna.answerstatus ? '답변 완료' : '답변 대기'}
            </p>
            {qna.secret ? (
              <p className="text-sm text-gray-400">
                비밀글입니다. <span>🔒</span>
              </p>
            ) : (
              <p className="text-sm truncate max-w-[200px]">{qna.content}</p>
            )}
            <div className="text-xs text-gray-500">
              <span>{maskWriter(qna.writer)}</span>
              <span className="ml-2">{qna.date}</span>
            </div>
            {qna.secret && (
              <button
                className="text-xs text-blue-500 mt-2"
                onClick={() => handleToggle(qna.id)}
              >
                보이기/숨기기
              </button>
            )}
          </div>
        ))}
      </div>
    </>
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
      content: '제 상품이 제대로 작동하나요?',
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

// Helper function to mask the writer's name after 4 characters
function maskWriter(writer: string) {
  return writer.slice(0, 4) + '******';
}

function handleToggle(id: number) {
  console.log('Toggle QnA ID:', id);
}
