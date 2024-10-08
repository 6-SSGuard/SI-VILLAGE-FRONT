import React from 'react';

function ScrollToTopBtn() {
  return (
    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h20v20H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle
          strokeOpacity=".1"
          stroke="#000"
          fill="#FFF"
          opacity=".95"
          cx="24"
          cy="24"
          r="23.5"
        />
        <g transform="translate(14 14)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            stroke="#000"
            mask="url(#b)"
            transform="matrix(0 1 1 0 0 0)"
            d="M13.125 3.75 6.875 10l6.25 6.25"
          />
        </g>
      </g>
    </svg>
  );
}

export default ScrollToTopBtn;
