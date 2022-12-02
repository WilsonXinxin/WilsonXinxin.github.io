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
    "revision": "0f3efa5aa1ac0e6b08eef58ccf858c12"
  },
  {
    "url": "about/index.html",
    "revision": "36e4bd1e7790a60aba939fb73e6c686d"
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
    "url": "assets/js/1.61821a59.js",
    "revision": "e96c3d2c1ce49bddaf617ba56f653541"
  },
  {
    "url": "assets/js/10.325810bd.js",
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
    "url": "assets/js/16.e9c115a6.js",
    "revision": "0021a650d05031c417bf467e785fe73a"
  },
  {
    "url": "assets/js/17.3fd80cdb.js",
    "revision": "39636bc9cfa3b78d110a6ffb3fece22b"
  },
  {
    "url": "assets/js/18.40f99f2b.js",
    "revision": "7f8e9c1f95efee164be69e898cbe26ba"
  },
  {
    "url": "assets/js/19.5edd142c.js",
    "revision": "678ffe0b96ec00f48616373d884dd9a7"
  },
  {
    "url": "assets/js/2.86dbd1ee.js",
    "revision": "43a752a4c61bfcf2037bc4d11722ecca"
  },
  {
    "url": "assets/js/20.d27ed92d.js",
    "revision": "123921797b90cb57c82b144cdea87c8f"
  },
  {
    "url": "assets/js/21.c67da420.js",
    "revision": "ad1fca8d468dd08e8440f73817464598"
  },
  {
    "url": "assets/js/22.cd3e51e9.js",
    "revision": "7bb181ff7bd517443a3aedc3839594ee"
  },
  {
    "url": "assets/js/23.2278b277.js",
    "revision": "198109e00049c810acbcdf4430fb59f3"
  },
  {
    "url": "assets/js/24.0bc7defe.js",
    "revision": "c0c625f80890e01817170627d3c5982a"
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
    "url": "assets/js/5.ec1fd0c7.js",
    "revision": "10ddda8362ea325d445eb91145963f7f"
  },
  {
    "url": "assets/js/6.6756dbdc.js",
    "revision": "c89782be9c19e98e485aa14203b2c024"
  },
  {
    "url": "assets/js/7.aae7c03e.js",
    "revision": "d5acfc41a3ffa994a08843b174e6ae6f"
  },
  {
    "url": "assets/js/8.d56fb251.js",
    "revision": "5a547eab52453ecad118aff315478723"
  },
  {
    "url": "assets/js/9.36930cbf.js",
    "revision": "63155499459ed79a190bf449208c54c7"
  },
  {
    "url": "assets/js/app.2fcc48a8.js",
    "revision": "e188512f8525acc71ab579a2376ea68e"
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
    "revision": "addddcbf65d166d89a15520515ca3aa3"
  },
  {
    "url": "blogs/notes/HTTP/HttpProtocol.html",
    "revision": "4afbce1a1d77ed6b883f4dfc63d31576"
  },
  {
    "url": "blogs/notes/JS/deepClone.html",
    "revision": "bdab04482dddeab43235807439ec1b05"
  },
  {
    "url": "blogs/notes/JS/JSnotes.html",
    "revision": "85bdc0d6158edc08a4f5626da46a8d80"
  },
  {
    "url": "blogs/notes/React/React.html",
    "revision": "3602cce92bb16847ec2f17d26f1c0834"
  },
  {
    "url": "blogs/notes/Router/RouterBasics.html",
    "revision": "7d813b3970a93f972640ec6d1f536286"
  },
  {
    "url": "blogs/notes/TS/TSnotes.html",
    "revision": "8f1f629e710bece5a2bac4df658cbe64"
  },
  {
    "url": "blogs/notes/Vue/Vue2.html",
    "revision": "2ef6c90f4afa2479b743e009eb92ff3c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "b4ed6fa0fc5db06dd1aae2daf055d0e2"
  },
  {
    "url": "categories/ES5/index.html",
    "revision": "996fb0b426140389a8864b3b77b856f8"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "28f89be880432c24788649be615a4c4e"
  },
  {
    "url": "categories/index.html",
    "revision": "c47162be4c54071f1347c9d69a0c8fe2"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "4244bc9f25e4578dd633a8e63a902a2c"
  },
  {
    "url": "categories/React/index.html",
    "revision": "84db7e642e64946567520e49e2b394a6"
  },
  {
    "url": "categories/Router/index.html",
    "revision": "20d61157629dd544c36f9f188f1bfb05"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "be08f7b7e5e3988d697f7a502116afdd"
  },
  {
    "url": "categories/Vue2/index.html",
    "revision": "b8c2fd8705d21b950acdc5908119d50f"
  },
  {
    "url": "categories/网站搭建相关/index.html",
    "revision": "647db41d3822a639aa40097ad78ee310"
  },
  {
    "url": "docs/dailymotto.html",
    "revision": "bbc9f3c39e725f021e7ca5e085a790e4"
  },
  {
    "url": "docs/index.html",
    "revision": "91361445da4892c3f7490526909d352a"
  },
  {
    "url": "docs/markdown.html",
    "revision": "49074b57fa568f9b7fb8aeced945b305"
  },
  {
    "url": "docs/theme.html",
    "revision": "476790041cdd16d4a9802ef76577b623"
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
    "revision": "1442328d882f11e19c983f72ec326763"
  },
  {
    "url": "logo.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "3818a50393e129f9722484cdaa32b6a8"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "48b7799e386dc54c5d8ee00e5657328e"
  },
  {
    "url": "tag/index.html",
    "revision": "994c54dc9a909a075aa342a9cd7149ae"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "1aebdd00b67a7d6a591f0aee67dbc2ac"
  },
  {
    "url": "tag/React/index.html",
    "revision": "426a6202c648f1cba1c65e4342054c57"
  },
  {
    "url": "tag/Router/index.html",
    "revision": "1671394d6564fa38e63badac272c7bc8"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "0650a77623b1e853bb6ff5a573e61432"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "558ca7c75552999a645c8d43e2b8b14c"
  },
  {
    "url": "tag/严格模式/index.html",
    "revision": "5a0d64ed2d1c028a09e87fb5c295583a"
  },
  {
    "url": "tag/技术笔记/index.html",
    "revision": "7a8a0debb6d00058fd7eef551310d71b"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "b93ed6297fdce2266d3d72caa2c432b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c12cbb68ca1f569e5c7f1d6e563327a"
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
