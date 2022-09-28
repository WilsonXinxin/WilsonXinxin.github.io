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
    "revision": "901525e70fb24d57924488f17d5d08f7"
  },
  {
    "url": "about/index.html",
    "revision": "bd6f685f3ece5bac4da67502ebde956f"
  },
  {
    "url": "assets/css/0.styles.28ca9d9c.css",
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
    "url": "assets/js/1.0d00fff6.js",
    "revision": "e96c3d2c1ce49bddaf617ba56f653541"
  },
  {
    "url": "assets/js/10.9aabc4ea.js",
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
    "url": "assets/js/16.97c92b06.js",
    "revision": "02a5b49bc6f2336762af679b23a39c80"
  },
  {
    "url": "assets/js/17.0e966b2c.js",
    "revision": "c010f483ca0eccb38d51a9c3c281eddc"
  },
  {
    "url": "assets/js/18.f2d56c5f.js",
    "revision": "841df9c4db39b85846922550f78bd7d6"
  },
  {
    "url": "assets/js/19.15797b28.js",
    "revision": "12baefa47c66d93e0c606de4a50a1604"
  },
  {
    "url": "assets/js/2.e767780f.js",
    "revision": "101480650190d4c581b172455ca21d41"
  },
  {
    "url": "assets/js/20.e4901d8b.js",
    "revision": "b53af6b676a614f0c98972e5f2e37f2a"
  },
  {
    "url": "assets/js/21.51429998.js",
    "revision": "84be7e887f5182d32053ac4f1805dda4"
  },
  {
    "url": "assets/js/22.d37ecd2a.js",
    "revision": "ccd23f015552363dc6da21f705d44217"
  },
  {
    "url": "assets/js/23.e683f171.js",
    "revision": "36a7d2c5d982e8fce3a23068b0bc6d03"
  },
  {
    "url": "assets/js/24.669225b5.js",
    "revision": "b94aee07b94fbb7662a86bfe8b62d9c6"
  },
  {
    "url": "assets/js/25.0ae66812.js",
    "revision": "6c98426f4849616bbd0b35fb51295480"
  },
  {
    "url": "assets/js/26.3ee4cbed.js",
    "revision": "2016e757e3c473ad3f4c2f57a40d0fc4"
  },
  {
    "url": "assets/js/27.4b414203.js",
    "revision": "78a04f6e53fc5c3fb70941590b4e4a3b"
  },
  {
    "url": "assets/js/28.d5f699a0.js",
    "revision": "649d499be736fcc05040bb112ce408ab"
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
    "url": "assets/js/5.c99a47df.js",
    "revision": "64e8051c596932076d184014baa04041"
  },
  {
    "url": "assets/js/6.756e577e.js",
    "revision": "c89782be9c19e98e485aa14203b2c024"
  },
  {
    "url": "assets/js/7.8f922529.js",
    "revision": "d5acfc41a3ffa994a08843b174e6ae6f"
  },
  {
    "url": "assets/js/8.9ebd2112.js",
    "revision": "5a547eab52453ecad118aff315478723"
  },
  {
    "url": "assets/js/9.36930cbf.js",
    "revision": "63155499459ed79a190bf449208c54c7"
  },
  {
    "url": "assets/js/app.18b87737.js",
    "revision": "a56e49501a28df951043613dabf652aa"
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
    "revision": "8a77f370092ecf13f7ffdb6c0bbf29f2"
  },
  {
    "url": "blogs/notes/HTTP/HttpProtocol.html",
    "revision": "e4dab3550f98dc464e8dd8f02f4f67c0"
  },
  {
    "url": "blogs/notes/JS/deepClone.html",
    "revision": "2daba1fa9a4d756254a7a23e7eb25253"
  },
  {
    "url": "blogs/notes/JS/JSnotes.html",
    "revision": "c179279453fcf80fee498df392ad4e07"
  },
  {
    "url": "blogs/notes/React/React.html",
    "revision": "d15e1c7d9983d99427c3e8f0f8a8b6a5"
  },
  {
    "url": "blogs/notes/Router/RouterBasics.html",
    "revision": "3f6b32cc1fb54c3b8f95ea6f8e705862"
  },
  {
    "url": "blogs/notes/TS/TSnotes.html",
    "revision": "23f96aca244e61c422193e44aa69ec00"
  },
  {
    "url": "blogs/notes/Vue/Vue2.html",
    "revision": "606030e572a1eb2e21bb8aeff3be1e8f"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "cc443b3b0da62e0f69e8929ea81d089d"
  },
  {
    "url": "categories/ES5/index.html",
    "revision": "878dd4ee45ab161b56dfdd2ab02e3abc"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "e7a5f40ae423de93e71c05defe8c6b25"
  },
  {
    "url": "categories/index.html",
    "revision": "9f84500476cd929a98810d3791457f6a"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "74e8aaa0534692399ca066098b8b8f09"
  },
  {
    "url": "categories/React/index.html",
    "revision": "8091b4f585bfd3b0882cabc8a7ed9a23"
  },
  {
    "url": "categories/Router/index.html",
    "revision": "017cb1e509bd97983f4cc662fe298091"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "f27c2bb542249c0d7f939f4e340a2df9"
  },
  {
    "url": "categories/Vue2/index.html",
    "revision": "1cb35efd0dfd50cd4e7988911575e8ce"
  },
  {
    "url": "categories/网站搭建相关/index.html",
    "revision": "03f83b3f6560be9913b91cdd78e2b4ba"
  },
  {
    "url": "docs/dailymotto.html",
    "revision": "9a27ec061de2951e3a86623c386c28ca"
  },
  {
    "url": "docs/index.html",
    "revision": "c79c957ba69d1a8e66f4f94a81938cc1"
  },
  {
    "url": "docs/markdown.html",
    "revision": "5f7479ad0ab97063827ac46862f93f75"
  },
  {
    "url": "docs/theme.html",
    "revision": "dd66de8db04fece8812191f6733d08ed"
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
    "revision": "2a8b13487ab88a8b2c4463ffe9911ec7"
  },
  {
    "url": "logo.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "1d62bd9243d92e147f0f7bf401fa6ca7"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "0de467f06b9d8966b3e258eb8c9a9b25"
  },
  {
    "url": "tag/index.html",
    "revision": "6e98db1cf3116941d7edd44822ca07dd"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "fd4f9d4ff6627949b4252b924c9bf4cb"
  },
  {
    "url": "tag/React/index.html",
    "revision": "7fb3beba3d6da3f1e024bbe56622e635"
  },
  {
    "url": "tag/Router/index.html",
    "revision": "4566f16e8f567fe4fcf277d17442ebfd"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "bc33c5a368fdcfe641593b99c101b304"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "a0fcb519b0e7ab863cc0a2fe0be443ca"
  },
  {
    "url": "tag/严格模式/index.html",
    "revision": "a4910f8ae8600d4e0c2f3530a13f0e95"
  },
  {
    "url": "tag/技术笔记/index.html",
    "revision": "e3c1a36aa2f9515fb54c5d8353867ec1"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "6fb386ae515f15aef34473fe35289066"
  },
  {
    "url": "timeline/index.html",
    "revision": "4995d87cb6f5e9d2eacda2fad45c85dc"
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
