import React from 'react';

export default function QnaModal({ children }: { children: React.ReactNode }) {
  return (
    <dialog
      open
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center z-50"
    >
      {children}
    </dialog>
  );
}
