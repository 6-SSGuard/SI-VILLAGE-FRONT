import React from 'react';

function page() {
  const productInfo = `
  <div class="detail__tab-info detail__tab " data-iframe-height="" style="transform-origin: 0px 0px; transform: translate(0px, 0px) scale(1, 1);">
<div class="detail__tab-info-guide"><div class="detail__tab-info-guide-size">
  <p class="detail__tab-info-guide-title">실측조견표</p>
  <div class="detail__tab-info-guide-size-btns">
<button class="size-46 on" value="42|96|65|74|82|93|54|114|36" onclick="size_change()"> 46</button>
<button class="size-48" value="43|99|65|75|87|96|57|115|36" onclick="size_change()"> 48</button>
<button class="size-50" value="44.5|103|66|76|90|100|58|116|37" onclick="size_change()"> 50</button>
<button class="size-52" value="46|106|67|77.5|93|103|61|117|38" onclick="size_change()"> 52</button>
<button class="size-54" value="47|111|68|79|97|106|62|117|39" onclick="size_change()"> 54</button>
  </div>  <div class="detail__tab-info-guide-size-info">
<!-- 남성-수트(세트) -->
<div class="measuringWrap">
<div class="measuringImg"><style>img[through=m2fx][loading=lazy][src][onload][onerror] {width: 100vw !important; max-width: 100%;}</style><picture through="m2fx" style="line-height: 0px; vertical-align: top;" m2-pagefx-hint="70800012"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/design/image/sizetable/img_measure_a_30.jpg/dims/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/design/image/sizetable/img_measure_a_30.jpg/dims/format/webp/optimize" type="image/webp"><img alt="남성-상의세트" src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/design/image/sizetable/img_measure_a_30.jpg/dims/optimize" through="m2fx" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;" width="376" height="350" style="max-width: 100%; height: auto;"></picture></div>

<ol class="measuringinfo">
<li>
<p class="typeA">A</p>

<dl class="miCont">
	<dt>어깨너비</dt>
	<dd>어깨 양 끝 사이의 길이<span>42</span></dd>
</dl>
</li>
<li>
<p class="typeA">B</p>

<dl class="miCont">
	<dt>가슴둘레</dt>
	<dd>가슴에서 가장 넓은 부분의 둘레<span>96</span></dd>
</dl>
</li>
<li>
<p class="typeA">C</p>

<dl class="miCont">
	<dt>소매길이</dt>
	<dd>어깨선에서 소매끝까지의 길이<span>65</span></dd>
</dl>
</li>
<li>
<p class="typeA">D</p>

<dl class="miCont">
	<dt>(상의)총장</dt>
	<dd>옆목점부터 하단까지의 길이<span>74</span></dd>
</dl>
</li>
</ol>
</div>

<div class="measuringWrap">
<div class="measuringImg"><picture through="m2fx" style="line-height: 0px; vertical-align: top;" m2-pagefx-hint="70800012"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/design/image/sizetable/img_measure_k_20.jpg/dims/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/design/image/sizetable/img_measure_k_20.jpg/dims/format/webp/optimize" type="image/webp"><img alt="남성-하의세트" src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/design/image/sizetable/img_measure_k_20.jpg/dims/optimize" through="m2fx" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;" width="376" height="350" style="max-width: 100%; height: auto;"></picture></div>

<ol class="measuringinfo">
<li>
<p class="typeA">E</p>

<dl class="miCont">
	<dt>허리둘레</dt>
	<dd>허리에서 가장 잘록하게 들어간 부분의 둘레<span>82</span></dd>
</dl>
</li>
<li>
<p class="typeA">F</p>

<dl class="miCont">
	<dt>엉덩이둘레</dt>
	<dd>엉덩이에서 가장 넓은 부분의 둘레<span>93</span></dd>
</dl>
</li>
<li>
<p class="typeA">G</p>

<dl class="miCont">
	<dt>허벅지둘레</dt>
	<dd>허벅지 제일 윗 부분의 둘레<span>54</span></dd>
</dl>
</li>
<li>
<p class="typeA">H</p>

<dl class="miCont">
	<dt>(하의)총장</dt>
	<dd>허리라인 제일 위에서부터 하단까지의 길이<span>114</span></dd>
</dl>
</li>
<li>
<p class="typeA">I</p>

<dl class="miCont">
	<dt>밑단둘레</dt>
	<dd>바지 밑단 둘레<span>36</span></dd>
</dl>
</li>
</ol>
</div>
<!-- //남성-수트(세트) -->
</div>
  <div class="detail__tab-info-guide-size-btn">
      <button class="btn-size-guide btn-line-gray sizeReck" data-reck_type="RECK" data-cmps_divi_cd="10" data-req_goods_no="2407641473" data-sel_goods_no="2407641473" data-title="사이즈가이드">사이즈가이드</button>
      <button class="btn-line-gray sizeReck" data-reck_type="RECK_MEASURE" data-cmps_divi_cd="10" data-req_goods_no="2407641473" data-sel_goods_no="2407641473" data-title="실측방법">실측방법</button>
  </div></div><div class="detail__tab-info-notice notice-2">
 <div class="notice_inner">
  <p>셔츠와 구두 등의 아이템을 매치하여 포멀한 스타일링을 할 수 있음</p>
 </div>
</div>
<div class="detail__tab-info-notice notice-2">
 <div class="notice_inner">
  <p>- 울 소재 싱글 수트<br>- 노치트 라펠 디자인<br>- 패치/웰트 포켓 특징<br>- 사이드 벤트 포인트<br>- 언발 버튼 클로저 팬츠<br>- 크리스 라인 디테일<br>-  부토니에(부속품)의 경우 이미지內 컬러/소재 등 상이한 부토니에가 발송될 수 있습니다.</p>
 </div>
</div>
</div><div class="detail__tab-info-vi"><!-- SVG-5245 상품상세 템플릿 -->
<div class="goods-detail goods-detail--A">
<!-- 텍스트 -->

<!-- 이미지 -->
<div class="goods-detail-inner">
<ul class="goods-detail-image">
<li class="goods-detail-item"><div style="display: inline-block; vertical-align: top; margin: 0px; padding: 0px;" through="m2fx"><picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x1200+0+0/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x1200+0+0/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x1200+0+0/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-bottom-width: 0px; margin-bottom: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x1200+0+1200/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x1200+0+1200/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x1200+0+1200/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; border-bottom-width: 0px; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x0+0+2400/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x0+0+2400/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/709/240725025304709.jpg/dims/crop/0x0+0+2400/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="600" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; margin-top: 0px; padding-top: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
</div></li>
<li class="goods-detail-item"><div style="display: inline-block; vertical-align: top; margin: 0px; padding: 0px;" through="m2fx"><picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x1200+0+0/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x1200+0+0/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x1200+0+0/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-bottom-width: 0px; margin-bottom: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x1200+0+1200/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x1200+0+1200/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x1200+0+1200/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; border-bottom-width: 0px; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x0+0+2400/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x0+0+2400/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/710/240725025304710.jpg/dims/crop/0x0+0+2400/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="600" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; margin-top: 0px; padding-top: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
</div></li>
<li class="goods-detail-item"><div style="display: inline-block; vertical-align: top; margin: 0px; padding: 0px;" through="m2fx"><picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x1200+0+0/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x1200+0+0/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x1200+0+0/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-bottom-width: 0px; margin-bottom: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x1200+0+1200/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x1200+0+1200/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x1200+0+1200/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; border-bottom-width: 0px; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x0+0+2400/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x0+0+2400/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/711/240725025304711.jpg/dims/crop/0x0+0+2400/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="600" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; margin-top: 0px; padding-top: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
</div></li>
<li class="goods-detail-item"><div style="display: inline-block; vertical-align: top; margin: 0px; padding: 0px;" through="m2fx"><picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x1200+0+0/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x1200+0+0/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x1200+0+0/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-bottom-width: 0px; margin-bottom: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x1200+0+1200/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x1200+0+1200/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x1200+0+1200/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; border-bottom-width: 0px; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x0+0+2400/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x0+0+2400/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/712/240725025304712.jpg/dims/crop/0x0+0+2400/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="600" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; margin-top: 0px; padding-top: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
</div></li>
<li class="goods-detail-item"><div style="display: inline-block; vertical-align: top; margin: 0px; padding: 0px;" through="m2fx"><picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x1200+0+0/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x1200+0+0/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x1200+0+0/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-bottom-width: 0px; margin-bottom: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x1200+0+1200/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x1200+0+1200/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x1200+0+1200/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; border-bottom-width: 0px; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x0+0+2400/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x0+0+2400/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/713/240725025304713.jpg/dims/crop/0x0+0+2400/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="600" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; margin-top: 0px; padding-top: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
</div></li>
<li class="goods-detail-item"><div style="display: inline-block; vertical-align: top; margin: 0px; padding: 0px;" through="m2fx"><picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x1200+0+0/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x1200+0+0/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x1200+0+0/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-bottom-width: 0px; margin-bottom: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x1200+0+1200/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x1200+0+1200/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x1200+0+1200/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="1200" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; border-bottom-width: 0px; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
<picture through="m2fx" style="line-height: 0px; vertical-align: top;"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x0+0+2400/format/avif/optimize" type="image/avif"><source through="m2fx" srcset="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x0+0+2400/format/webp/optimize" type="image/webp"><img src="https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=2407641473/proxy/src/https://image.sivillage.com/upload/C00001/s3/goods/org/714/240725025304714.jpg/dims/crop/0x0+0+2400/optimize" alt="베이직 울 싱글 수트" through="m2fx" width="2000" height="600" style="max-width: 100%; height: auto; vertical-align: top; border-top-width: 0px; margin-top: 0px; padding-top: 0px;" loading="" onerror="this.loading='';this.style.setProperty('width', '0px', 'important');" onload="this.loading='';this.style.aspectRatio=null;"></picture>
</div></li>
</ul>
</div>
</div>
<!-- //SVG-5245 상품상세 템플릿 -->
</div></div>`;
  return <div dangerouslySetInnerHTML={{ __html: productInfo }}></div>;
}

export default page;
