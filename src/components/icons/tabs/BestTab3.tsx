import React from 'react';

export default function BestIconNo3({
  width = 44,
  height = 44,
  color = '#131922',
  className,
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ''}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 14.438H38.5L36.266 21.312H7.734L5.5 14.438Z"
        stroke={color}
      />
      <path
        d="M34.375 20.797L30.708 38.328H13.292L9.625 20.797M22 14.438V38.5M17.188 5.5L22.146 11L26.812 5.5"
        stroke={color}
      />
    </svg>
  );
}
