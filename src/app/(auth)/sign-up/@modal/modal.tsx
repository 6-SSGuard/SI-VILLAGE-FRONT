'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ReviewModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <dialog
      open
      className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center"
    >
      <Button
        className=" rounded-full absolute top-5 right-5 z-50"
        onClick={() => router.back()}
      >
        {'X'}
      </Button>
      {children}
    </dialog>
  );
}
