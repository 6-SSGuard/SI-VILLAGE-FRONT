import React from 'react';

export default function ReviewModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <dialog
      open
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center z-50"
    >
      {children}
    </dialog>
  );
}
