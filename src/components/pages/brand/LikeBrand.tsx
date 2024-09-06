import React from 'react';

function LikeBrand() {
  return (
    <div className="mt-5">
      <img
        src="https://ssgaud-nextjs-image.s3.ap-northeast-2.amazonaws.com/blackheart.png"
        alt="찜하트"
        className="h-5 w-5 ml-5 mb-3"
      />
      <div className="border-b-2 w-11/12 mx-auto"></div>

      <p className="text-sm font-bold ml-5 mt-10 mb-3">추천 Brand</p>
      <div className="border-b-2 w-11/12 mx-auto"></div>
    </div>
  );
}

export default LikeBrand;
