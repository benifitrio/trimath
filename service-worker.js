// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

// if (workbox) {
//     console.log(`Workbox berhasil dimuat`);
// } else {
//     console.log(`Workbox gagal dimuat`);
// }

// workbox.precaching.precacheAndRoute([
//     { url: '/index.html', revision: '1' },
//     { url: '/home.html', revision: '1' },
//     { url: '/manifest.json', revision: '1' },
//     { url: '/css/styles.css', revision: '1' },
//     { url: '/css/logout.css', revision: '1' },
//     { url: '/css/main.css', revision: '1' },
//     { url: '/css/animasi.css', revision: '1' },
//     { url: '/scripts/bio.js', revision: '1' },
//     { url: '/scripts/CP.js', revision: '1' },
//     { url: '/scripts/home.js', revision: '1' },
//     { url: '/scripts/main.js', revision: '1' },
//     { url: '/scripts/materi.js', revision: '1' },
//     { url: '/scripts/peta.js', revision: '1' },
//     { url: '/scripts/petunjuk.js', revision: '1' },
//     { url: '/bg.jpg', revision: '1' },
//     { url: '/BG.png', revision: '1' },
//     { url: '/BIOGRAFI.png', revision: '1' },
//     { url: '/KOMPETENSI.png', revision: '1' },
//     { url: '/contact.png', revision: '1' },
//     { url: '/login.png', revision: '1' },
//     { url: '/logo.png', revision: '1' },
//     { url: '/peta.png', revision: '1' },
//     { url: '/petunjuk.png', revision: '1' },
//     { url: '/icon/android-icon-192x192.png', revision: '1' },
//     { url: '/icon/favicon-96x96.png', revision: '1' },
//     // { url: 'https://unpkg.com/typewriter-effect@latest/dist/core.js', revision: '1' },
//     // { url: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js', revision: '1' },
//     { url: 'https://polyfill.io/v3/polyfill.min.js?features=es6', revision: '1' },
// ], {
//     ignoreUrlParametersMatching: [/.*/]
// });


// workbox.routing.registerRoute(
//     new RegExp('https://fonts.googleapis.com/'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'google-fonts-stylesheets',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'font-awesome',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'font-awesome',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'font-awesome',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.min.css'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'font-awesome',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );

// workbox.routing.registerRoute(
//     new RegExp('chrome-extension://fjoaledfpmneenckfbpdfhkmimnjocfa/contentScript.bundle.css'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'font-awesome',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 60 * 60 * 24 * 365, //1 years
//                 maxEntries: 30,
//             }),
//         ],
//     })
// );