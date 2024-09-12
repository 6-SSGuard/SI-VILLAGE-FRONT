import React from 'react';

function WhiteBackIcon({ isWhite }: { isWhite: boolean }) {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>C4F9F823-40D6-4997-A102-48D2DC043B74</title>
      <defs>
        <rect id="path-1" x="0" y="0" width="32" height="32"></rect>
      </defs>
      <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="05_Detail_0001_Full_패션_v2"
          transform="translate(-16.000000, -56.000000)"
        >
          <g
            id="01-Header-/-b.Sub-/-Light_D_Product-Detail"
            transform="translate(0.000000, 44.000000)"
          >
            <g id="Button_Back" transform="translate(8.000000, 0.000000)">
              <g id="1.1" transform="translate(8.000000, 12.000000)">
                <mask id="mask-2" fill="white">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use
                  id="Mask"
                  fill="#FFFFFF"
                  opacity="0"
                  transform="translate(16.000000, 16.000000) scale(-1, 1) rotate(90.000000) translate(-16.000000, -16.000000) "
                  xlinkHref="#path-1"
                ></use>
                <polyline
                  id="Path"
                  stroke={isWhite ? '#FFFFFF' : 'black'}
                  mask="url(#mask-2)"
                  points="21 6 11 16 21 26"
                ></polyline>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default WhiteBackIcon;
