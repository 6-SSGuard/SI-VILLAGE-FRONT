if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),p={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>p[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/231-91e4218136d64bf9.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/2967-37ca7498e5e077f0.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/323-ca60be37f4b19e44.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/4020-c850fc008d087297.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/4719-84d9a24535a34b26.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/5045-3109e3789e39c32e.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/5190-2bf0526d16e528bb.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/5678-32938ceee25ec99e.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/5941-dd54bcfe36b81381.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/6888-1b82927a6d89c5e2.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/780-ee974dcbe103f17d.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/8173-cae71c0e4061bb71.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/9385-ee092c3cbcd470bb.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/998-f9dccf40e477581b.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(auth)/errors/page-bd1772601cec2728.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(auth)/layout-80be1e694b8b1178.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(auth)/sign-in/forgotcredential/page-e7baee5383edf887.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(auth)/sign-in/page-cfb9b0ddb999b4cd.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(auth)/sign-up/@modal/default-482b96f5493ec652.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(auth)/sign-up/join-simple/page-120326721bd49244.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(auth)/sign-up/page-aa03f70aca4745e5.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(brand)/layout-236072975b61050f.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(brand)/myfavor/page-2fd39cc859b92420.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(brand)/searchbrand/page-bc99d27c2077c8cb.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(cart)/cartmain/page-fd021485b845a3bc.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(cart)/layout-a1c9629a1416c5be.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(category)/category/layout-550c7dd17005a8c0.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(category)/category/page-3967a013cb13dc1b.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/best/page-99ed8cc6b1e89117.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/deal/page-5b6cfb0ef90ff28c.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/event/layout-a9c04dbb97815565.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/event/page-20cea2505a2bd548.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/layout-54c23ff1972d419f.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/loading-4a844e92988307b6.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/page-2c04295cd17a545c.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/%5Bproductname%5D/@modal/(.)reviewdetail/page-7b0f6051f0db3c7c.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/%5Bproductname%5D/@modal/default-b4372c6ca83cab45.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/%5Bproductname%5D/@productinfo/page-18b59cd2c3051dcc.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/%5Bproductname%5D/@reviews/page-fb5d03e6967e46e8.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/%5Bproductname%5D/layout-9d35ff4f205ad23b.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/%5Bproductname%5D/page-d7f0c2f44e965920.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/%5Bproductname%5D/reviewdetail/page-2a8aa1ac3d5367b4.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(main)/product/page-67788c87d7969a31.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(profile)/mypage/layout-d0c15aacf4112501.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(profile)/mypage/page-2e026d177a5f9939.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(profile)/mypage/sizeagreeinfo/page-c3dbd2524e4d51c1.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(store)/officialstore/layout-ec1b19e0d097dd60.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/(store)/officialstore/page-c4b77960418dc72e.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/_not-found/page-4ad144ff9ab4818c.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/app/layout-e11a0ae0db796150.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/fd9d1056-52bbb5488144c16f.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/main-7c56f773422b0719.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/main-app-d763c308e1bc1f0f.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-03dfc762245850a4.js",revision:"m_OWgw0GhscUpe7NRW982"},{url:"/_next/static/css/ca527683cb03d9a0.css",revision:"ca527683cb03d9a0"},{url:"/_next/static/css/d21c632e724436d7.css",revision:"d21c632e724436d7"},{url:"/_next/static/m_OWgw0GhscUpe7NRW982/_buildManifest.js",revision:"20b783da16790934baf4b458ba900698"},{url:"/_next/static/m_OWgw0GhscUpe7NRW982/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/FacebookIcon.9027f198.png",revision:"04ffbf5f76f75ff2df8597c0bad93458"},{url:"/_next/static/media/InstagramIcon.e86ec1fd.png",revision:"956f8ac9485e8677f984a30003599150"},{url:"/_next/static/media/YoutubeIcon.83132626.png",revision:"c69b9a56980d3a306dbef5e705d764d0"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/close.png",revision:"bbe93ebb8b87c7e4e258d0bb5121d726"},{url:"/down-arrow.png",revision:"69de8d56a8845fcd5d6a0c65dc2b8c52"},{url:"/fonts/RegularBoldCello-Heavy.ttf",revision:"1276c5e239fa86d80bff7b118c302f84"},{url:"/images/JAJU.png",revision:"7226c6093a9ca6e284bcaef8fc529781"},{url:"/images/ad1.png",revision:"56e832a59879875142904e4a0c011e71"},{url:"/images/ad2.png",revision:"1f532ff028db8abc06f4cda024196beb"},{url:"/images/ad3.png",revision:"2c61304a1e90d9188307f8fa6ca22a51"},{url:"/images/ad4.png",revision:"49d251cb468bd04e84146d51b502437b"},{url:"/images/ad5.png",revision:"d6e10c141bb9d73bc48164c0563d77c6"},{url:"/images/ak.png",revision:"a1901cedfc304c215a66351b343da4b2"},{url:"/images/apple.png",revision:"49c5d4b8c264956933e91db1fbd019df"},{url:"/images/bag.png",revision:"a10144e446d25399d13b43cbe25585be"},{url:"/images/beauty.png",revision:"29a749b6926977495f77191ab6189b7a"},{url:"/images/cardbanner1.png",revision:"cd6bd7dffaebf0481fb70699936e011a"},{url:"/images/cardbanner2.png",revision:"807cfe4f91a92414f4e0f519e6a88541"},{url:"/images/cardbanner3.png",revision:"acf51c23c873249f4030d24351a530ff"},{url:"/images/cardbanner4.png",revision:"8c8d03217ebbf669ca309238361df94d"},{url:"/images/heart.png",revision:"bed171f38bc538c188efa49f41318255"},{url:"/images/kakaotalk.png",revision:"a24a1e7f59d4d2e883aa042c57514be6"},{url:"/images/life.png",revision:"0f2ce02c04a46ee3568098ec8beda8d7"},{url:"/images/man.png",revision:"5a44342078b3d26593ca36e3e9c9eb52"},{url:"/images/naver.png",revision:"7788bd03fbc3b24607bf0b254e4bd740"},{url:"/images/pause.png",revision:"cdd6392250caa376c77215c9f1ed8ffb"},{url:"/images/plus.png",revision:"135e5da3792a4e7dd35b24e560b1d445"},{url:"/images/shose.png",revision:"b75c8b9800d43cf5ba646cec77fdef5b"},{url:"/images/siv_logo.png",revision:"bb4859543da16b9476dd5174ec3cad2a"},{url:"/images/smartphone.png",revision:"ee5f9b353b80d514816767fa113c1cc7"},{url:"/images/sport.png",revision:"d8889b6649a891f97766a22101d5376e"},{url:"/images/store.png",revision:"fbf5175780454865a2b61c0b98d7c04e"},{url:"/manifest.json",revision:"e4e6b3564fbfff6ef7c38e102029a932"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"42947fcd83cdaf5ca58d8aab2c05f710"},{url:"/shoppingBagTabCloseWhiteUP.png",revision:"69e45260f5da91ed71e8d11b75923a15"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/whitesmartphone.png",revision:"1568d234cd3c8d6febb1e91402720c8c"},{url:"/woman.png",revision:"13c24876a0f297628d7ab230bf70b8e7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
