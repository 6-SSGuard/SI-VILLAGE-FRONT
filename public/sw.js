if(!self.define){let e,n={};const a=(a,t)=>(a=new URL(a+".js",t).href,n[a]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=n,document.head.appendChild(e)}else e=a,importScripts(a),n()})).then((()=>{let e=n[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};n[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(s(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/231-91e4218136d64bf9.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/2967-37ca7498e5e077f0.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/323-ca60be37f4b19e44.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/4996-668897e76830932d.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/5190-2bf0526d16e528bb.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/5320-8ea860476d3e3cb5.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/5517-42c72e3697b40092.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/5852-652c53098f966df2.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/5941-dd54bcfe36b81381.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/7397-6a6c751129eb7272.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/8173-cae71c0e4061bb71.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/9385-ee092c3cbcd470bb.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/9393-1298686a41ac5a27.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/9577-2d392a66fb0e439b.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/998-f9dccf40e477581b.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(auth)/errors/page-2ff71a3a0a8a848f.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(auth)/layout-99a3e6e04bad16a0.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(auth)/sign-in/forgotcredential/page-572061bf331b0220.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(auth)/sign-in/page-cf4d441e57f01f81.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(auth)/sign-up/@modal/default-aae0b2c5c7150d2b.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(auth)/sign-up/join-simple/page-d40961873ad4c970.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(auth)/sign-up/page-8aa9e807b0c459a3.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(brand)/layout-ad7ff6b1cde8de41.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(brand)/myfavor/page-843c01f86189fead.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(brand)/searchbrand/page-07230c4380c0a611.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(cart)/cartmain/page-f12ce40c0b5e57ee.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(cart)/layout-048c8be1325dd29a.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(category)/category/layout-d1f886f9ffbe45e4.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(category)/category/page-6f9772c360ddb11c.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/best/gift/page-3510373399fc47f6.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/best/layout-18ae13192bd9ceac.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/best/most/page-14a71d5620e6b382.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/best/page-d41cae4db52b2c46.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/best/popular/page-56ad261b61f0f0a6.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/deal/page-ab56c154ed082c04.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/event/affiliate/page-ae8530fd1f6cdac2.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/event/eventbrand/page-a597e0f4dce582d4.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/event/eventfavor/page-d89e8f7dbd10c41f.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/event/layout-b8b771bd1462da0c.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/event/page-a1d212a95db539db.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/layout-e9c8dd31aaaeba25.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/loading-9cbcb689e8d73c6a.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(main)/page-2dc9a4ba4089cacb.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/@modal/(.)qnaform/page-b04f323edf885c1f.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/@modal/(.)reviewdetail/page-26f5f29149ccd555.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/@modal/default-e5a81dcbc23067f5.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/@productinfo/page-3013b540e7ae13d7.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/@productqna/page-90bfe246b5070f6c.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/@reviews/page-af80e56c2440f5a5.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/layout-faabab0c1ddb34ba.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/page-4615e8556505207b.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/qnaform/page-db7040579b4eb73a.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/qnalist/page-9f9bde8de2e0310d.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/%5Bproductname%5D/reviewdetail/page-21e690f8b8f63779.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(product)/product/page-932f31bc1a90713a.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(profile)/mypage/layout-3e93f35e083a6044.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(profile)/mypage/page-d9d6d25291cd45d7.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(profile)/mypage/sizeagreeinfo/page-86ad677bb03a5f52.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(store)/officialstore/layout-ffd2b0c63ecd214b.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/(store)/officialstore/page-f76b03e7a4c2c35b.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/_not-found/page-4ad144ff9ab4818c.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/app/layout-27f1b49a8e068d3a.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/fd9d1056-52bbb5488144c16f.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/main-9e607c9b96997d07.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/main-app-9863a65da3d46f6e.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-426190547d721a8a.js",revision:"nqe-t2W0IFnJX42m3tHb8"},{url:"/_next/static/css/35edc4ccc8f8ac8e.css",revision:"35edc4ccc8f8ac8e"},{url:"/_next/static/css/46d2f1b70d0e73f2.css",revision:"46d2f1b70d0e73f2"},{url:"/_next/static/css/704c5f02d02c2fe7.css",revision:"704c5f02d02c2fe7"},{url:"/_next/static/css/e6744199c8286892.css",revision:"e6744199c8286892"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/FacebookIcon.9027f198.png",revision:"04ffbf5f76f75ff2df8597c0bad93458"},{url:"/_next/static/media/InstagramIcon.e86ec1fd.png",revision:"956f8ac9485e8677f984a30003599150"},{url:"/_next/static/media/YoutubeIcon.83132626.png",revision:"c69b9a56980d3a306dbef5e705d764d0"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/nqe-t2W0IFnJX42m3tHb8/_buildManifest.js",revision:"d97b4028cd5b791430a561ffc79d6d64"},{url:"/_next/static/nqe-t2W0IFnJX42m3tHb8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/close.png",revision:"bbe93ebb8b87c7e4e258d0bb5121d726"},{url:"/down-arrow.png",revision:"69de8d56a8845fcd5d6a0c65dc2b8c52"},{url:"/five-stars.png",revision:"57a5fbb87d8d6cd46890d631081bd4de"},{url:"/fonts/RegularBoldCello-Heavy.ttf",revision:"1276c5e239fa86d80bff7b118c302f84"},{url:"/images/JAJU.png",revision:"7226c6093a9ca6e284bcaef8fc529781"},{url:"/images/ad1.png",revision:"56e832a59879875142904e4a0c011e71"},{url:"/images/ad2.png",revision:"1f532ff028db8abc06f4cda024196beb"},{url:"/images/ad3.png",revision:"2c61304a1e90d9188307f8fa6ca22a51"},{url:"/images/ad4.png",revision:"49d251cb468bd04e84146d51b502437b"},{url:"/images/ad5.png",revision:"d6e10c141bb9d73bc48164c0563d77c6"},{url:"/images/ak.png",revision:"a1901cedfc304c215a66351b343da4b2"},{url:"/images/apple.png",revision:"49c5d4b8c264956933e91db1fbd019df"},{url:"/images/bag.png",revision:"a10144e446d25399d13b43cbe25585be"},{url:"/images/beauty.png",revision:"29a749b6926977495f77191ab6189b7a"},{url:"/images/cardbanner1.png",revision:"cd6bd7dffaebf0481fb70699936e011a"},{url:"/images/cardbanner2.png",revision:"807cfe4f91a92414f4e0f519e6a88541"},{url:"/images/cardbanner3.png",revision:"acf51c23c873249f4030d24351a530ff"},{url:"/images/cardbanner4.png",revision:"8c8d03217ebbf669ca309238361df94d"},{url:"/images/heart.png",revision:"bed171f38bc538c188efa49f41318255"},{url:"/images/kakaotalk.png",revision:"a24a1e7f59d4d2e883aa042c57514be6"},{url:"/images/life.png",revision:"0f2ce02c04a46ee3568098ec8beda8d7"},{url:"/images/man.png",revision:"5a44342078b3d26593ca36e3e9c9eb52"},{url:"/images/naver.png",revision:"7788bd03fbc3b24607bf0b254e4bd740"},{url:"/images/pause.png",revision:"cdd6392250caa376c77215c9f1ed8ffb"},{url:"/images/plus.png",revision:"135e5da3792a4e7dd35b24e560b1d445"},{url:"/images/shose.png",revision:"b75c8b9800d43cf5ba646cec77fdef5b"},{url:"/images/siv_logo.png",revision:"bb4859543da16b9476dd5174ec3cad2a"},{url:"/images/smartphone.png",revision:"ee5f9b353b80d514816767fa113c1cc7"},{url:"/images/sport.png",revision:"d8889b6649a891f97766a22101d5376e"},{url:"/images/store.png",revision:"fbf5175780454865a2b61c0b98d7c04e"},{url:"/like.png",revision:"193a10dc517a5434d011965a28da2f86"},{url:"/manifest.json",revision:"e4e6b3564fbfff6ef7c38e102029a932"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"42947fcd83cdaf5ca58d8aab2c05f710"},{url:"/shoppingBagTabCloseWhiteUP.png",revision:"69e45260f5da91ed71e8d11b75923a15"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/whitesmartphone.png",revision:"1568d234cd3c8d6febb1e91402720c8c"},{url:"/woman.png",revision:"13c24876a0f297628d7ab230bf70b8e7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:n}})=>!(!e||n.startsWith("/api/auth/callback")||!n.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:n},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!n.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:n},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!n.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:n})=>n&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
