import React from 'react';

function WhiteHome({ isWhite }: { isWhite: boolean }) {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>D9CE7816-32F8-4283-A78A-114E20ED9FA3</title>
      <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="05_Detail_v2_0001_Full"
          transform="translate(-64.000000, -56.000000)"
          stroke={isWhite ? '#FFFFFF' : 'black'}
        >
          <g id="Header" transform="translate(-0.000000, 0.000000)">
            <g
              id="01-Header-/-b.Sub-/-Light_D_Product-Detail"
              transform="translate(0.000000, 44.000000)"
            >
              <g
                id="Button_Back-Copy"
                transform="translate(56.000000, 0.000000)"
              >
                <g
                  id="05-Icon/32px_BX/Home"
                  transform="translate(8.000000, 12.000000)"
                >
                  <polyline
                    id="Path-3"
                    points="7.57142857 14.2857143 10.3964477 26.2857143 21.9544873 26.2857143 24.7142857 14.2857143"
                  ></polyline>
                  <polyline
                    id="Path"
                    points="3 19 15.8571429 5 29.2857143 19"
                  ></polyline>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default WhiteHome;
