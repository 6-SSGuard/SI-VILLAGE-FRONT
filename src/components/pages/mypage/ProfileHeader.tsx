import React from 'react';

interface ProfileHeaderProps {
  userName?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userName }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative w-16 h-16">
          <img
            src="https://cdn-mo.sivillage.com/mo/assets/comm/image/badge_diamond.png"
            alt="Badge"
            className="w-14 h-14"
          />
        </div>
        <div className="ml-4">
          <p className="text-lg font-bold">WELCOME</p>
          <p className="text-sm">
            <span className="font-medium">
              {userName ? `${userName}님` : '회원님'}
            </span>
            <button
              className="text-blue-500 underline ml-2"
              data-di-id="di-id-d446ed98-492f0858"
            >
              다음달 등급
            </button>
          </p>
        </div>
      </div>
      <button
        className="border border-gray-300 py-1 px-4 rounded text-sm"
        data-di-id="di-id-99982d9c-5d9e3814"
      >
        멤버십
      </button>
    </div>
  );
};

export default ProfileHeader;
