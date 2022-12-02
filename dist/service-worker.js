/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b1556527457956fe6a96b6d6838a65aa"
  },
  {
    "url": "about/index.html",
    "revision": "e2b32c3aae04256e9e3018a946df62fe"
  },
  {
    "url": "assets/css/0.styles.8b1062e5.css",
    "revision": "6ab91789debc0dc7ee77dafaeb016267"
  },
  {
    "url": "assets/fonts/FZZJ-LSSSTJW.0684cdae.woff2",
    "revision": "0684cdaea75587fe4ebc9bc87e830f3f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/fonts/Kalam-Regular.9af695bd.woff2",
    "revision": "9af695bda9f23334112103791163cbb2"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/pika.e4a4d948.gif",
    "revision": "e4a4d948363e7ff0f9fe94758b66f2fd"
  },
  {
    "url": "assets/img/pikachu-running.c05c8686.gif",
    "revision": "c05c868695b8167c0eb12d0d2529a275"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/wait.8c3da546.jpg",
    "revision": "8c3da54686eb7f20967dd1c7603d55bd"
  },
  {
    "url": "assets/js/1.87f141aa.js",
    "revision": "e96c3d2c1ce49bddaf617ba56f653541"
  },
  {
    "url": "assets/js/10.c5e5a085.js",
    "revision": "cf13bb6077974f39297ca2b0b97e10f7"
  },
  {
    "url": "assets/js/11.22659a0c.js",
    "revision": "53b8a61e923b8277f838d0a9113f3bcc"
  },
  {
    "url": "assets/js/12.459aa022.js",
    "revision": "9e4ad7336d97b1b24a39169537b08ebc"
  },
  {
    "url": "assets/js/13.b494e2d8.js",
    "revision": "8a9f6d2cf8680ed5114e0921d7c3272d"
  },
  {
    "url": "assets/js/14.ff13c764.js",
    "revision": "648dc9e4ad9c62bf26524d788289c66c"
  },
  {
    "url": "assets/js/15.ef262d99.js",
    "revision": "29106630d5a237a485b13130fb956eba"
  },
  {
    "url": "assets/js/16.67ab03eb.js",
    "revision": "73e7f80de0041afa42dc8d456db55582"
  },
  {
    "url": "assets/js/17.3fd80cdb.js",
    "revision": "39636bc9cfa3b78d110a6ffb3fece22b"
  },
  {
    "url": "assets/js/18.6803ffc4.js",
    "revision": "c2950feb253ba09e08928e58de378e9d"
  },
  {
    "url": "assets/js/19.19239efa.js",
    "revision": "e0c77eeecd97c554e12f22bff94b2e26"
  },
  {
    "url": "assets/js/2.32183b41.js",
    "revision": "43a752a4c61bfcf2037bc4d11722ecca"
  },
  {
    "url": "assets/js/20.76026ec0.js",
    "revision": "acdd74add1d27fb02a7b2826db402cd5"
  },
  {
    "url": "assets/js/21.c67da420.js",
    "revision": "ad1fca8d468dd08e8440f73817464598"
  },
  {
    "url": "assets/js/22.f831967b.js",
    "revision": "b003ea95e15eb2149211cd0b639311fa"
  },
  {
    "url": "assets/js/23.98b7eb21.js",
    "revision": "60317fded4eb0579e30475acaf4cd7cb"
  },
  {
    "url": "assets/js/24.486ec02f.js",
    "revision": "c798053444a90358eaa3736ab8296be1"
  },
  {
    "url": "assets/js/25.4fee760f.js",
    "revision": "2a34751d07fd1b21a8529d666d68162c"
  },
  {
    "url": "assets/js/26.b444d2f9.js",
    "revision": "1396e019bd9e6bd5285691cf51ee7fbd"
  },
  {
    "url": "assets/js/27.e1b7f0cb.js",
    "revision": "c6a67a1338fa2d1c7da718557ca68377"
  },
  {
    "url": "assets/js/28.21f0c69c.js",
    "revision": "64c86c5d4077b4ef54337c82686f3d9a"
  },
  {
    "url": "assets/js/29.6182ef63.js",
    "revision": "b84ed9792392d96c0c75319b9bf40ef8"
  },
  {
    "url": "assets/js/3.09159d2a.js",
    "revision": "fa796123fa922983d0aafad722c964fa"
  },
  {
    "url": "assets/js/30.88270bcd.js",
    "revision": "5bb3e757b2c42f4ba1e8963d8c6c53c2"
  },
  {
    "url": "assets/js/5.15479ab9.js",
    "revision": "10ddda8362ea325d445eb91145963f7f"
  },
  {
    "url": "assets/js/6.9d1223ac.js",
    "revision": "c89782be9c19e98e485aa14203b2c024"
  },
  {
    "url": "assets/js/7.bf80ae74.js",
    "revision": "d5acfc41a3ffa994a08843b174e6ae6f"
  },
  {
    "url": "assets/js/8.1593daf0.js",
    "revision": "5a547eab52453ecad118aff315478723"
  },
  {
    "url": "assets/js/9.36930cbf.js",
    "revision": "63155499459ed79a190bf449208c54c7"
  },
  {
    "url": "assets/js/app.18db920d.js",
    "revision": "42fd49852eaf5d68575e4c52f26daa83"
  },
  {
    "url": "audio/music/onlyMyRailgun/onlymyrailgunCover.jpg",
    "revision": "585b6a8c21fd4ae423aa547950ea192d"
  },
  {
    "url": "audio/music/sorrow/sorrowCover.jpg",
    "revision": "c11e386409628ed246faccce2f46f133"
  },
  {
    "url": "avatar.png",
    "revision": "dedb60458f720e97935a5621ac5899c5"
  },
  {
    "url": "blogs/notes/ES5/ES5.html",
    "revision": "0a74849d09b5d30ec9e5c91d6d8f086e"
  },
  {
    "url": "blogs/notes/HTTP/HttpProtocol.html",
    "revision": "d8e43f0f2426255909b7bb4753c022f6"
  },
  {
    "url": "blogs/notes/JS/deepClone.html",
    "revision": "0f236b8356385395a99300570aa8562a"
  },
  {
    "url": "blogs/notes/JS/JSnotes.html",
    "revision": "6aee8f113bba6d1a3913bcc7c57794f7"
  },
  {
    "url": "blogs/notes/React/React.html",
    "revision": "7196200169e3c3923f7ef5ae8246755d"
  },
  {
    "url": "blogs/notes/Router/RouterBasics.html",
    "revision": "c3ca07d100cbb0f15ac2377b3ec01669"
  },
  {
    "url": "blogs/notes/TS/TSnotes.html",
    "revision": "5e4dcf96826ab22aab4b46286d863979"
  },
  {
    "url": "blogs/notes/Vue/Vue2.html",
    "revision": "b2fa63a0504a137f9c96e1152c40977c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "ffaed72105fc894b2c8c7e641d3c43ee"
  },
  {
    "url": "categories/ES5/index.html",
    "revision": "3e97bd40d070411e933563d7c96db664"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "5c2195b44f157b6844b42c3d009988e6"
  },
  {
    "url": "categories/index.html",
    "revision": "786216d6e23e5fc3f083b16b52bc24d8"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "cd9a90675be68dd208da9ea6d436e96c"
  },
  {
    "url": "categories/React/index.html",
    "revision": "e4b764c03e0391e18bb84b89e3c04338"
  },
  {
    "url": "categories/Router/index.html",
    "revision": "0cf917b38d33da86aaff95f568680f4a"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "b5279dc98c141577597afd3a0c269f38"
  },
  {
    "url": "categories/Vue2/index.html",
    "revision": "ade3b6b942fd0a5d662dc95e07efad49"
  },
  {
    "url": "categories/网站搭建相关/index.html",
    "revision": "b858fe8304ef696e2a3fe8ade3964cd1"
  },
  {
    "url": "docs/dailymotto.html",
    "revision": "d0153e75864c4229ae23ab3df3fa4b3f"
  },
  {
    "url": "docs/index.html",
    "revision": "0d2e35ac439cfcbdc55cc7b24b736522"
  },
  {
    "url": "docs/markdown.html",
    "revision": "5fff88995e26616783e18aae945d9212"
  },
  {
    "url": "docs/theme.html",
    "revision": "3e371d1971c0804008d456e5c1d4d344"
  },
  {
    "url": "hero.jpg",
    "revision": "3070a09238225ca4ea3a130227a22a17"
  },
  {
    "url": "icons/logo-144.png",
    "revision": "5c7e5b0c590506a67dcc4d8fb6ff27ff"
  },
  {
    "url": "icons/logo-152.png",
    "revision": "1d9e3fb058fbdac3b73b71b6a45c9b3a"
  },
  {
    "url": "images/pika.gif",
    "revision": "56ef7fa34d10a253efae46e85b97f2fe"
  },
  {
    "url": "images/pikachu-running.gif",
    "revision": "c05c868695b8167c0eb12d0d2529a275"
  },
  {
    "url": "index.html",
    "revision": "9fbc2afaa7e203e17a418c5b1fa32147"
  },
  {
    "url": "logo.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "8e55033087e5c2f5f1219c74ef916a5b"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "53f7edc8b04b74b50c8d17ec80f286bc"
  },
  {
    "url": "tag/index.html",
    "revision": "3e3cdece0aace477ede7024ecbbd846d"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "47c9e393da5fb2459645d2a52405eaa7"
  },
  {
    "url": "tag/React/index.html",
    "revision": "3c43082e67ab06d00074025a29cde6a2"
  },
  {
    "url": "tag/Router/index.html",
    "revision": "e37922dffe2e8445091b5425a62f518f"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "2578a63d9ee373976293354df4e97327"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "7fa6a374fd02496c622fee8c4a86d724"
  },
  {
    "url": "tag/严格模式/index.html",
    "revision": "950b26f25f9ac84431d0de185353c31b"
  },
  {
    "url": "tag/技术笔记/index.html",
    "revision": "13520750a99ba967a17b61caddca6711"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "db3b1c23f9b6f11543e4dead3691e197"
  },
  {
    "url": "timeline/index.html",
    "revision": "bbeff71da99c217099696d31b2e705c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
