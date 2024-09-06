import React, { useState } from 'react';

export function Modal({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-3/4 bg-white shadow-lg">
        <p className="p-[32px_20px] text-center text-sm">{message}</p>
        <button
          onClick={onClose}
          className="w-full p-2 bg-[#141A23] text-white"
        >
          확인
        </button>
      </div>
    </div>
  );
}
