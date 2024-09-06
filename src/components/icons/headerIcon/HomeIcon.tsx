import React from 'react';

function HomeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_60_2223"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="27"
      >
        <path d="M0 0H32V27H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_60_2223)">
        <path
          d="M7.57104 14.2859L10.396 26.2859H21.954L24.714 14.2859"
          stroke="black"
        />
      </g>
      <mask
        id="mask1_60_2223"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="27"
      >
        <path d="M0 0H32V27H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask1_60_2223)">
        <path d="M3 19L15.857 5L29.286 19" stroke="black" />
      </g>
    </svg>
  );
}

export default HomeIcon;
