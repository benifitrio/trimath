// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
} else {
    console.log(`Workbox gagal dimuat`);
}

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/manifest.json', revision: '1' }, ,
    { url: '/css/styles.css', revision: '1' },
    { url: '/logo.png', revision: '1' },
    { url: '/icon/android-icon-192x192.png', revision: '1' },
    { url: '/icon/favicon-96x96.png', revision: '1' },
    { url: '/bg.png', revision: '1' },
    { url: 'https://unpkg.com/typewriter-effect@latest/dist/core.js', revision: '1' },
    { url: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js', revision: '1' },
    { url: 'https://polyfill.io/v3/polyfill.min.js?features=es6', revision: '1' },
], {
    ignoreUrlParametersMatching: [/.*/]
});


workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'font-awesome',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
                maxEntries: 30,
            }),
        ],
    })
);