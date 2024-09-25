import React from 'react';
import Link from 'next/link';

interface PointsAndCouponsProps {
  points: { label: string; value: number; unit: string }[];
}

const ProfilePointsAndCoupon: React.FC<PointsAndCouponsProps> = ({
  points,
}) => {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-1">
      {points.map((point) => (
        <li key={point.label}>
          <Link
            href="#"
            className="flex flex-col justify-between items-center bg-[#F8F8F8] text-gray-700 hover:text-black p-4 rounded"
          >
            <p className="font-bold">
              {point.value}
              <span>{point.unit}</span>
            </p>
            <p className="text-xs">{point.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfilePointsAndCoupon;
