'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "338278abf0e52ebb13db8677c0b4a334",
"index.html": "467cfa57b7ee4d37905515a53b813581",
"/": "467cfa57b7ee4d37905515a53b813581",
"main.dart.js": "c994aa8ce7944c7f2b21830ebc3d20fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a16d5f72fc89894841aea7456a76477b",
".git/config": "79fd122f31f18682276548bd68114b0a",
".git/objects/59/b360811263e14c11e5e281ed7fea41017081b0": "9016fd9658d361355499f30fba4da28d",
".git/objects/59/1a9e8e518a3b3325887a6fa97c9feb4fc25336": "52b4026bdec8622259a67244322b948a",
".git/objects/59/e91ed387ae6d25eb31386ad42390b389d51e9f": "2bc1f79b25c2b0a24cc3283b7a444ec8",
".git/objects/66/504382b5b053c83e517981d30bce4fba06213d": "8025afc4cf7afed828282cfa36c191d7",
".git/objects/6f/674dd39796e589fdd360df1058b9f0eeaa745e": "1e0de468485fa0e84fe609bf40fc7279",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/b5687ae2d846395102c459c4d8dbc11712618a": "b393317f6c7eace6a9836c8c38699af6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/5af3becf736b6425ff3e18538cac0eb30cdc8f": "b0f042aadb007515ceea30dbf4291d57",
".git/objects/3d/d37118afe01a54ecaf64bea2203696eb0febc1": "3417a6c3a344069aa840b2ffcd24b90d",
".git/objects/3d/3854392517e82411892c435d8660210c6afecd": "e556d0f03334ff7ec01aa47d88fcb260",
".git/objects/0b/83fb1f4000ac6a3185f65275f28dc109894fe0": "47b102a9dc0ef01ee812b9679f7eb312",
".git/objects/0b/07b6c4bf150c1e5a17b50aa08aaf85000803c3": "8a8f873ede0c1dcd85a00024c5ad42ab",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/60/f7b655a8c55648b155ac6b4791eca58a246fdc": "c6df276e9a95cd621cce4b8db2377ff8",
".git/objects/34/57ebe69936e2d1795afb25830e381c06ecf0aa": "8a8bf03295580b5e6ea7ffdeb7dd97ab",
".git/objects/9d/e2b5edc895628842dfc39c0e37b57d09312cea": "21b5ece1aff1971fca86aabd43fd92ec",
".git/objects/02/703e8ee60b1b17437b8df6681921088bcf3f6e": "f76ddbecadb19888cee27d58d0c5e1fb",
".git/objects/a4/2a15ab2ca1a4ea86138c5570d5bf1e0609776f": "84114e02e72bca37fedf67e4818ccacc",
".git/objects/a3/6d40c835ae17c4bf18901ec1c4f8875b24e9bf": "86f12c8e6da7fd46aaa6c5edd5933661",
".git/objects/b5/f5f4b41a53a5cdcd42b960e376831a3d9be503": "f4bbfab04e9b7a84696e060bb2498591",
".git/objects/ac/19f8244cd17079e866b65363f9d0979ea5adf2": "bb85bc2785b841aa45a9ef2ff9ceda80",
".git/objects/d7/e460ba70c2cb9c4921a926cf8d77f1505c2f28": "3aa2e3320b81ca850b3088d36473a584",
".git/objects/b3/e34a775e9b253bda59f83b2809c1e1e8211c55": "66a57f3dc5a9402b1d292b324cf728b0",
".git/objects/d1/72ce9055b540e60c2965b784229efc7f190946": "0bf19e36851c5a5b3c45b730892de370",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/ff4b79527c62b5edf813b7f1ba997949d48bc4": "23c15205d89067d8c79a1daf30738e22",
".git/objects/ee/d3dbf036c68cf08a69ea61ab271d1aba8f7258": "7f753c2686bdf7f6a520ad0c3d2dfdc2",
".git/objects/f2/4d1b2f3e48afa23b43851d291070c258de4b29": "04529791c4ca34b58a10702139cefb4a",
".git/objects/e4/0779f33953694eb95610fbddece5bcfd18294c": "1167cb094e90a7923f3b194a06e64b45",
".git/objects/fe/78d6a421191c9aa8fc2b77bb76632f04f4b432": "98405d3c685cd17b420544916535f1b2",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fb/20adf55d0fc856bb10baaed05d608e8cd9a4dc": "171e6af54b7973be6920da7e2b43d4eb",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/27/69a0c39c6726ca8026db4d5a35f8c348fe1489": "b1bfee31ea39e5e534d0faaa765682a3",
".git/objects/4b/3aa38795cc1842dfa4e75b3fc19423adb6d456": "eb3aa515bf9bba95deb391e3d5745fe9",
".git/objects/29/09b3867a3802118b0bf351f48e9fc79e828897": "4b435c358e4c8ca728abbbaa563129ec",
".git/objects/7c/c193647c4a7c0f92f96502975400f38f973d7c": "f3cffe575c5d9000ff9d1d113ab20bdd",
".git/objects/28/c730ef21eff297477f51dd6d0378979a041ad9": "de0f4bf7708cea6ff535bf603a8bf34c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/f85924ac4c63c01cc42bd41c3f1c752f1cf516": "2d572c1b8330b1652fe652cc2e273608",
".git/objects/81/c3360ecbc6ea2f0f35b268a0ee125af2c4624b": "37f089c98bbf6fff35158dbc5c2c6576",
".git/objects/2f/54fcc43ff89363a156e1e290c232b58c0af6b6": "f305ab6f1b653b41cef0a005c2e4b5ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b193bf530c74451846684c09ae95fc4ef38ec6": "c1d7461179e5446fd4acc06a685ea32e",
".git/objects/07/be2570256d6faf2c0a77b62dabeb83ccf01c37": "5c31dcee6e09f9d2c03002228714a199",
".git/objects/00/67016cc6f0a6f0f6ab2b3c34981b5462fd2289": "c822aee6e74526eb4845b1215023f39f",
".git/objects/62/7780beb3eb4f0de182da10a24651b911df337c": "b25db88f85925cef6c50b63cc5505cc3",
".git/objects/5b/e4554ad79a927fb53520ace75d66b889741ac1": "8d077826ea6789ddada945e6abad9675",
".git/objects/08/48022745d817af20f62bdacf14496832652aac": "843be1426d8aedd80e09fdc99b217316",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/01/40cdd4b94f873ca92b233032b5c0d9f154930f": "eb7a78c42e930ecc57d838bcb78ae49d",
".git/objects/6c/e14530a2c57673ea58379d2c17622463454d39": "e1aee55604d6a5f05e392417d2393651",
".git/objects/52/c0ba0a074951832f876374e529465ebd6e9313": "844d4bf7347b36e516ccea0f6308dd25",
".git/objects/d3/83133bed1452f10737b1a35973ca4a2ac92fbb": "301aec84b9f3f2c14f791be1df98fb0d",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/a9/3839c124ad985f237d731b6443cadb8e79661d": "22ee02dfeabd49b9ea699ea6e35289fc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/710bb851ea6386dd74cfb05305bf65f4b26c4f": "736288df1835c0600608bdaa3cfb540a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/c9a33a9a46d3cb864b58916ff0e655c86ddcc2": "b9adee4da49c4343989394b89a27f604",
".git/objects/a6/020acf8c5f31eba94916338f3eb079b61e0e4c": "3fe5a6a1c2750c9c2a9ca6e75e10cadc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/06669f86615fdada65a49bc46024db045d671b": "a18ce8eebbb84ab4f0510d23f304d342",
".git/objects/ea/8d64facea45e0cf44401850ef24209b22db8e7": "a242af16f3f7102f55babe5662d6ebac",
".git/objects/cd/8223fe1f9b785d1aa02d3689bb1e7ded58c8fe": "cdf71441fcd7dd2dc40ec4f4c92e4668",
".git/objects/cd/6bec94b8175252a4eb18e74bb96216bc9332d0": "da825816607765ef602708778c512a2e",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/252917c63bca6483b035667ef40476b768a969": "05a4d056a439aa713a342d5da2a5b164",
".git/objects/e8/6c26876a230ee0061d5a7c6d22cf946a8b3e33": "05e77a60daf354ce0ade54aa76b26301",
".git/objects/f8/e7948fb7ca5f30d56a6be75f3b5b5d8f53533e": "597851bb870ad363f85cef0052f0d2bd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/b9058eeb59b24a4ee8252504505549522d5e44": "883df415cbe4262e943decee7414bb4f",
".git/objects/24/34670302f329878894d18a22dc36e9b7355556": "7979400fb75031310b43edaa6602ab9d",
".git/objects/23/30334a4c0cb2c038face7272de4acc98d560e6": "0541ec823a82493d0ad82299e74f9d19",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/4eb07fa6f079e8fc6d5f220ee5584ccbe40889": "079a2c118bc54e5e81c50e630f7f235b",
".git/objects/1c/da5a813d0c2019a939cb77771282fb074e9f89": "0b500e61d9422a86837793195cf0e29b",
".git/objects/1c/70ca7202d655a15d77a88282bf6c9d7d53ddf1": "b41b1066356e4b0781b5bd5c8ad27545",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/82/ad4e0a0c0d4b50bf6ffbbab90b2602db5ba83f": "39c5b0047a87594c38ad1aa0a360a9f3",
".git/objects/8b/27b587d57c47df7ee723797677ca9a7839b31d": "4f03a9c4007244f615a4c92f227bd286",
".git/objects/8b/84868cb8c3a5caf7cb4e96c78b56a636cebf53": "648f3f3782451649e81c2e5eab16dbe2",
".git/objects/7f/b0e15dcacd96d5b220b6bcde1bee91e9407b6c": "17f3f34437c245860242fec5861ad00c",
".git/objects/7a/a3319cdd7b6f279704f38f32d5e90130751b68": "e00d9f1161d7155ddc308eb5560c1b98",
".git/objects/14/c00676bd8034e32a5cade93980978042c4e894": "cece54695249435d3039225a2a3d5fa6",
".git/objects/8e/93f9f922550d7dd4bb9a287746056e34f61975": "aaf0507ccc7756d93ddd1825e64b5957",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "99290b6906b803f0d8a3bf2b4a1fef00",
".git/logs/refs/heads/master": "99290b6906b803f0d8a3bf2b4a1fef00",
".git/logs/refs/remotes/origin/HEAD": "e3fcff42a6e2b5d287d1b99a17ecb1a2",
".git/logs/refs/remotes/origin/master": "c73381c2a4a7ead152cdf27f5ff22239",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e1f553aaa136cfd600df94b2394a278d",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e1f553aaa136cfd600df94b2394a278d",
".git/index": "177b2b5cf38cc2221074b1425c7619c9",
".git/packed-refs": "961584792230c51a97434c49f7b77df3",
".git/COMMIT_EDITMSG": "331a12deb94a466fead284626f761178",
"favicondeleted.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "4d5f38604f08cfdbae3d773ac1f2cf34",
"assets/NOTICES": "d6083b74e06149b5c45f45d706545696",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/img/bg2.jpeg": "a6f358ecc1f42d29bf626cdb679be036",
"assets/assets/img/bg1.jpg": "ac10abf52fe3bf019de0d71a536a47b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
