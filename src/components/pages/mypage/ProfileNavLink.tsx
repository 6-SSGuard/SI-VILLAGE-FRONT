import React from 'react';
import Link from 'next/link';

const ProfileNavLink: React.FC = () => {
  return (
    <ul className="flex items-center justify-around h-11 mt-6 mb-5 border border-gray-300 rounded-md box-border divide-x divide-gray-300">
      <li className="flex-1 text-center">
        <Link
          href="#"
          className="flex items-center justify-center h-full text-gray-700 hover:text-black"
        >
          찜
        </Link>
      </li>
      <li className="flex-1 text-center">
        <Link
          href="#"
          className="flex items-center justify-center h-full text-gray-700 hover:text-black"
        >
          배송지 관리
        </Link>
      </li>
      <li className="flex-1 text-center">
        <Link
          href="#"
          className="flex items-center justify-center h-full text-gray-700 hover:text-black"
        >
          채팅상담
        </Link>
      </li>
    </ul>
  );
};

export default ProfileNavLink;
