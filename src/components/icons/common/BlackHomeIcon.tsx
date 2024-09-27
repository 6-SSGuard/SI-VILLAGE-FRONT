import React from 'react';

function BlackHomeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h32v27H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          stroke="#000"
          mask="url(#b)"
          d="m7.571 14.286 2.825 12h11.558l2.76-12"
        />
        <path stroke="#000" mask="url(#b)" d="M3 19 15.857 5l13.429 14" />
      </g>
    </svg>
  );
}

export default BlackHomeIcon;
