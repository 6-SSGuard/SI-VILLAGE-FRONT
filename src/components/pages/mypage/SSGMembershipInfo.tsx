'use client';
import ArrowBigRight from '@/components/icons/common/ArrowBigRight';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

function SSGMembershipInfo() {
  return (
    <div className="bg-white px-6">
      <strong className="block text-sm font-bold mb-1 border-b border-black leading-10">
        <a href="#" className="flex justify-between items-center">
          <span>신세계인터내셔날 멤버십 안내</span>
          <ArrowBigRight />
        </a>
      </strong>

      <Button
        type="button"
        className="w-full text-sm items justify-start"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        로그아웃
      </Button>
    </div>
  );
}

export default SSGMembershipInfo;
