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
    "revision": "8b3ed1223b64c86ec4b75e817b4e435a"
  },
  {
    "url": "about/index.html",
    "revision": "5a15dc8c91f4a66d7a56265ecadd26ea"
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
    "url": "assets/js/16.97c92b06.js",
    "revision": "02a5b49bc6f2336762af679b23a39c80"
  },
  {
    "url": "assets/js/17.3fd80cdb.js",
    "revision": "39636bc9cfa3b78d110a6ffb3fece22b"
  },
  {
    "url": "assets/js/18.4fc817b6.js",
    "revision": "54856afeb31cac9deea4f8541c7214db"
  },
  {
    "url": "assets/js/19.15797b28.js",
    "revision": "12baefa47c66d93e0c606de4a50a1604"
  },
  {
    "url": "assets/js/2.86dbd1ee.js",
    "revision": "43a752a4c61bfcf2037bc4d11722ecca"
  },
  {
    "url": "assets/js/20.624bc405.js",
    "revision": "6f58410713ae8d42ea26b39fc4b545bf"
  },
  {
    "url": "assets/js/21.38614b33.js",
    "revision": "aa416d06a89b1de87266d9b3cb512dc7"
  },
  {
    "url": "assets/js/22.d37ecd2a.js",
    "revision": "ccd23f015552363dc6da21f705d44217"
  },
  {
    "url": "assets/js/23.5b531ec7.js",
    "revision": "ae73abffcc1b152f41649d71d3886d3f"
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
    "url": "assets/js/26.e8e748d9.js",
    "revision": "0b59da04880cd00d1980b5521e2999fe"
  },
  {
    "url": "assets/js/27.c89a724e.js",
    "revision": "f5e42dbb780effcf6d9ce78cec6bb2e6"
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
    "url": "assets/js/app.46c1aab3.js",
    "revision": "757098bdce55b3eacd1d1d59133f417a"
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
    "revision": "daf984b78ee634553fa3bb31a42f44a0"
  },
  {
    "url": "blogs/notes/HTTP/HttpProtocol.html",
    "revision": "457840f94d1a6a8b670fe2adc8348f3e"
  },
  {
    "url": "blogs/notes/JS/deepClone.html",
    "revision": "a01fc0743e718908687c5ee0639df4af"
  },
  {
    "url": "blogs/notes/JS/JSnotes.html",
    "revision": "480e66f72f21de5c6df1177ff2ded8c2"
  },
  {
    "url": "blogs/notes/React/React.html",
    "revision": "cdeb765a27d7c251439cec7557424abd"
  },
  {
    "url": "blogs/notes/Router/RouterBasics.html",
    "revision": "f0d19972f70f50ab51d580041297e5de"
  },
  {
    "url": "blogs/notes/TS/TSnotes.html",
    "revision": "2405ffb771f02f447ed0be99fee822f7"
  },
  {
    "url": "blogs/notes/Vue/Vue2.html",
    "revision": "55f14ea0e4f4b2f51f1c0983e98ea66c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "42dac4a023845a0ee4e9f77f2db938ca"
  },
  {
    "url": "categories/ES5/index.html",
    "revision": "a839415b0b2d2020302c4ef470c33543"
  },
  {
    "url": "categories/HTTP/index.html",
    "revision": "610ec73a1848f7bd0a961248be4bd625"
  },
  {
    "url": "categories/index.html",
    "revision": "184631e4057441bf23dbc747b8ce5884"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "6e4b530016810917f6138e69c3cad396"
  },
  {
    "url": "categories/React/index.html",
    "revision": "c53462bbed6af042988e995401853577"
  },
  {
    "url": "categories/Router/index.html",
    "revision": "e22a226ef21493a1fc82a94e71646d7c"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "bae881fe6be476803542e1fedc635f22"
  },
  {
    "url": "categories/Vue2/index.html",
    "revision": "f54e08a7bafb97f3959f0ee8e068d830"
  },
  {
    "url": "categories/网站搭建相关/index.html",
    "revision": "71e1a89ee8d8f03f147c7184cdeb7b5e"
  },
  {
    "url": "docs/dailymotto.html",
    "revision": "c924ca5a6aa87f292fa2d0d672ac71a2"
  },
  {
    "url": "docs/index.html",
    "revision": "bf07b9a16c729c520ff7bde53a0c2aa0"
  },
  {
    "url": "docs/markdown.html",
    "revision": "9a6a6039494711d5a5409449b040219d"
  },
  {
    "url": "docs/theme.html",
    "revision": "d8a6e5f756fa7311d99cbfd0aa11f280"
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
    "revision": "a2c88af4f7a0560b5a4f19151bf91196"
  },
  {
    "url": "logo.png",
    "revision": "7c365893f0158ef262013cc9cf1a1756"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "e0e3ddfde05099001b5749ad347bbe9e"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "03879a4c9e667dde3509f764b8aad832"
  },
  {
    "url": "tag/index.html",
    "revision": "84255c8e60217eea778671461e641bcf"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "c4107708227c734093d981ff4eadb84d"
  },
  {
    "url": "tag/React/index.html",
    "revision": "a2d984fe7b9cb363e3f29ea76a83a744"
  },
  {
    "url": "tag/Router/index.html",
    "revision": "0fce3bebc8a82dfaa9de143b9e2e844a"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "853c73e86a4064c38e907cd85e205fae"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "85c6aa428b4b034b62f3597e9dad001f"
  },
  {
    "url": "tag/严格模式/index.html",
    "revision": "9f585935d8d29d00bc5771bf7eeebf0a"
  },
  {
    "url": "tag/技术笔记/index.html",
    "revision": "86d3c6f4f03918ba8bff3b24e34ba2a4"
  },
  {
    "url": "tag/插件/index.html",
    "revision": "c933f04245c64941e834333e7d032ab4"
  },
  {
    "url": "timeline/index.html",
    "revision": "072513dfb727d6efdc12831a17118ecd"
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
