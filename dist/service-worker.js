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
    "revision": "1d6aea55664c52702d44112d7c04e9ac"
  },
  {
    "url": "about/index.html",
    "revision": "bfcf9cdba378896a0da26c533437e420"
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
    "url": "assets/js/15.8abe87ec.js",
    "revision": "5fb6a0bf6b1b6ff194431f5e1a7192af"
  },
  {
    "url": "assets/js/16.ca56863c.js",
    "revision": "e0e8b98096e9821c0051a9724b1554d2"
  },
  {
    "url": "assets/js/17.3fd80cdb.js",
    "revision": "39636bc9cfa3b78d110a6ffb3fece22b"
  },
  {
    "url": "assets/js/18.557a8db4.js",
    "revision": "fa3c375d9f089b7350ae25b5404f4b9e"
  },
  {
    "url": "assets/js/19.ecfab433.js",
    "revision": "1ccf734cfe5b4798dbaed38c785eb05e"
  },
  {
    "url": "assets/js/2.86dbd1ee.js",
    "revision": "43a752a4c61bfcf2037bc4d11722ecca"
  },
  {
    "url": "assets/js/20.76026ec0.js",
    "revision": "acdd74add1d27fb02a7b2826db402cd5"
  },
  {
    "url": "assets/js/21.b52db15b.js",
    "revision": "9156364cc42eb1ff5f940e147f6f3318"
  },
  {
    "url": "assets/js/22.c3b35ad2.js",
    "revision": "59a4a95fbe658cb60350e564e499c95b"
  },
  {
    "url": "assets/js/23.57869834.js",
    "revision": "2ec0fcd82835a6368da8e8beb4214900"
  },
  {
    "url": "assets/js/24.ed1059f2.js",
    "revision": "2f655615990b6655ab52a69d252732f1"
  },
  {
    "url": "assets/js/25.c361d20f.js",
    "revision": "06d5bf014df3bac2c2e81bb0b00c1f21"
  },
  {
    "url": "assets/js/26.563b040d.js",
    "revision": "f4d283e3b2cb8b0bea8424aefa9ad9d2"
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
    "url": "assets/js/app.2c780d0f.js",
    "revision": "66e6fbcf92e1289ae762bb64fef6183f"
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
    "revision": "f11ee6639d3db7b888b2885cc58b92a9"
  },
  {
    "url": "blogs/notes/HTTP/HttpProtocol.html",
    "revision": "f0bdb9468425e88963a7a2caee5ad182"
  },
  {
    "url": "blogs/notes/JS/deepClone.html",
    "revision": "4fdfb58d500eca82059e02173be325f4"
  },
  {
    "url": "blogs/notes/JS/JSnotes.html",
    "revision": "017223e3b04632e4bfa0abf1be38d2e4"
  },
  {
    "url": "blogs/notes/React/React.html",
    "revision": "7229c33ac0c1c72ab8392fd60c2e3007"
  },
  {
    "url": "blogs/notes/Router/RouterBasics.html",
    "revision": "d89d5168abcddeab3a7dc6b7c53e6178"
  },
  {
    "url": "blogs/notes/TS/TSnotes.html",
    "revision": "832698157fdc47533ef56bc4c7112ec5"
  },
  {
    "url": "blogs/notes/Vue/Vue2.html",
    "revision": "5c2af03b101fd93bdd1c6d072b3e8506"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "1e9356af07ef60456e5738d9bd74138d"
  },
  {
    "url": "categories/ES5/index.html",
    "revision": "37a8c10c507f589f6de245d14f007383"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "f0c64716ed04a53d30fe332aaed8179e"
  },
  {
    "url": "categories/index.html",
    "revision": "35d1922b250c22678b14a004d775d042"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "1fab5f742ee1357d88ebf0cce11d92a5"
  },
  {
    "url": "categories/React/index.html",
    "revision": "2699dc83edc50c8a3bece63a32f4e87c"
  },
  {
    "url": "categories/Router/index.html",
    "revision": "4343a8c4a49088bb40ce4c6f9583ddac"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "df92cb52d1b3b0b91cab150e2e47ce6a"
  },
  {
    "url": "categories/Vue2/index.html",
    "revision": "da61a6ee0a003084b3183eec26155465"
  },
  {
    "url": "categories/网站搭建相关/index.html",
    "revision": "2ae73ebe30706cb8295426189d145603"
  },
  {
    "url": "docs/dailymotto.html",
    "revision": "15406527f781dc0b00329a734ac59f4d"
  },
  {
    "url": "docs/index.html",
    "revision": "f43b46229264ee6a8b9ea7e637fa36e3"
  },
  {
    "url": "docs/markdown.html",
    "revision": "c8753d3d98e1aba91129312cff9e0669"
  },
  {
    "url": "docs/theme.html",
    "revision": "d177c586a082d1e9609b0f11de4347f7"
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
    "revision": "5b1307fcfa11d1d75477ccc9344496db"
  },
  {
    "url": "logo.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "ed2e1709d5486fb4001390f218fae3cf"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "8310a5bf8ab223b8d820d904f6b15aae"
  },
  {
    "url": "tag/index.html",
    "revision": "1ff5f1e659060c393533942ebf76ea1e"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "e70276cd1fa546d82673a92ce615efaa"
  },
  {
    "url": "tag/React/index.html",
    "revision": "b9f0e629ff5a06e6caf862cb91a09f76"
  },
  {
    "url": "tag/Router/index.html",
    "revision": "65836ab16a31098537a9445dd92d959c"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "0b21f83a49d546f72fe6cae8f2d06a89"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "7e4fede5d004c97de6d1350189dd0baf"
  },
  {
    "url": "tag/严格模式/index.html",
    "revision": "17d8ff9d9c379f56e82fc29dc449ca46"
  },
  {
    "url": "tag/技术笔记/index.html",
    "revision": "63528624c367c5c87a777f5d051ade91"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "e551aec4d01d58dc0c3c07841037de0c"
  },
  {
    "url": "timeline/index.html",
    "revision": "1cbf6f2b19ee5063c2f5b4082f50d4a6"
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
