if (!self.define) {
  let e,
    n = {};
  const s = (s, a) => (
    (s = new URL(s + '.js', a).href),
    n[s] ||
      new Promise((n) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = n), document.head.appendChild(e);
        } else (e = s), importScripts(s), n();
      }).then(() => {
        let e = n[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, t) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (n[i]) return;
    let c = {};
    const o = (e) => s(e, i),
      r = { module: { uri: i }, exports: c, require: o };
    n[i] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (t(...e), c));
  };
}
define(['./workbox-dd29cd40'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/', revision: 'hN73wzf8njyt2mUoZKnRb' },
        {
          url: '/_next/static/chunks/190-b413ee0ec7bdd18b.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/231-1533c83c4b4d4aa5.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/637-0f083b8bd99706f4.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/998-5b18f1ebb1f637d2.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(auth)/layout-af8c80ad62099d01.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-in/page-eb9f1919f8ac7dbd.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-up/page-9605a67281f4696f.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/cart/page-c8aa3210b3bdf02a.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/category/%5B...category%5D/page-7d61beb8af62ed70.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/categorylist/%5B%5B...category%5D%5D/page-0b51243fccc56ea7.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/event/%5BeventId%5D/page-fc5929b3d35cb916.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/event/page-69b0b64cee70774d.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/layout-2fcd29f78e1033c3.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/loading-f60cc5c4fa845a6c.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/page-f750f9ea02ed2029.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/products/%5BproductName%5D/@modal/(.)reviewdetail/page-25ee3de796c5c3e3.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/products/%5BproductName%5D/@modal/default-9335e213d450d7b9.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/products/%5BproductName%5D/@productinfo/page-d1254d5fc4644bfd.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/products/%5BproductName%5D/@reviews/page-b111e515226863da.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/products/%5BproductName%5D/layout-afc3081f29d22256.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/products/%5BproductName%5D/page-c7329e29608013cf.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/(main)/products/%5BproductName%5D/reviewdetail/page-572aed2c0448bbbf.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-a8627859eb7112d1.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/layout-c045b8d150a58c63.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/app/loading-c2237d2564c8fad1.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/fd9d1056-8d42db6c53771e4c.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/main-2ff9efc1de438fac.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/main-app-7d2e18d6729a47f0.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-653a0787c4442713.js',
          revision: 'hN73wzf8njyt2mUoZKnRb',
        },
        {
          url: '/_next/static/css/59e693f5350dd900.css',
          revision: '59e693f5350dd900',
        },
        {
          url: '/_next/static/hN73wzf8njyt2mUoZKnRb/_buildManifest.js',
          revision: '268434390ac51a389ba047fdbbb0eccc',
        },
        {
          url: '/_next/static/hN73wzf8njyt2mUoZKnRb/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/6d93bde91c0c2823-s.woff2',
          revision: '621a07228c8ccbfd647918f1021b4868',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
          revision: 'd4fe31e6a2aebc06b8d6e558c9141119',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        { url: '/manifest.json', revision: 'bb9df96021bfb8201da181df485740ad' },
        { url: '/sw.js', revision: 'ba3fdd2bdbc7652c6fd09a87d56ba1ae' },
        { url: '/sw.js.map', revision: '747485db55fa23b59c0ca35e5dc8a723' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: n } }) =>
        !(!e || n.startsWith('/api/auth/callback') || !n.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: n }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        s &&
        !n.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: n }, sameOrigin: s }) =>
        '1' === e.headers.get('RSC') && s && !n.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: n }) => n && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
