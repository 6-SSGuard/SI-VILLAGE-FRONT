import React from 'react';

function WhiteSearchIcon({ isWhite }: { isWhite: boolean }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h32v32H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M14 23.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zM28 28l-7.592-7.592"
          stroke={!isWhite ? 'black' : '#FFFFFF'}
          mask="url(#b)"
        />
      </g>
    </svg>
  );
}

export default WhiteSearchIcon;
