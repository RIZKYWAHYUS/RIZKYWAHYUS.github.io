'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "83dfc1360e83edcc7e79fcb323fe6b1b",
"index.html": "92d838ddf33e3cfe3c18a01208425019",
"/": "92d838ddf33e3cfe3c18a01208425019",
"main.dart.js": "5958de7293f4b5010559f82763c75154",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon.png": "5840636f02192a22dbc36dfc304d36b2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c5b0e9c4fe85e01dd1a100ca1e69218e",
".git/config": "8f11ad662c155838d5a2ccccfdf92ba8",
".git/objects/3d/d37118afe01a54ecaf64bea2203696eb0febc1": "3417a6c3a344069aa840b2ffcd24b90d",
".git/objects/3d/3854392517e82411892c435d8660210c6afecd": "e556d0f03334ff7ec01aa47d88fcb260",
".git/objects/0b/83fb1f4000ac6a3185f65275f28dc109894fe0": "47b102a9dc0ef01ee812b9679f7eb312",
".git/objects/0b/07b6c4bf150c1e5a17b50aa08aaf85000803c3": "8a8f873ede0c1dcd85a00024c5ad42ab",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/02/703e8ee60b1b17437b8df6681921088bcf3f6e": "f76ddbecadb19888cee27d58d0c5e1fb",
".git/objects/b5/f5f4b41a53a5cdcd42b960e376831a3d9be503": "f4bbfab04e9b7a84696e060bb2498591",
".git/objects/d7/e460ba70c2cb9c4921a926cf8d77f1505c2f28": "3aa2e3320b81ca850b3088d36473a584",
".git/objects/b3/e34a775e9b253bda59f83b2809c1e1e8211c55": "66a57f3dc5a9402b1d292b324cf728b0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/ff4b79527c62b5edf813b7f1ba997949d48bc4": "23c15205d89067d8c79a1daf30738e22",
".git/objects/ee/d3dbf036c68cf08a69ea61ab271d1aba8f7258": "7f753c2686bdf7f6a520ad0c3d2dfdc2",
".git/objects/fe/78d6a421191c9aa8fc2b77bb76632f04f4b432": "98405d3c685cd17b420544916535f1b2",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fb/20adf55d0fc856bb10baaed05d608e8cd9a4dc": "171e6af54b7973be6920da7e2b43d4eb",
".git/objects/4b/3aa38795cc1842dfa4e75b3fc19423adb6d456": "eb3aa515bf9bba95deb391e3d5745fe9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/f85924ac4c63c01cc42bd41c3f1c752f1cf516": "2d572c1b8330b1652fe652cc2e273608",
".git/objects/81/c3360ecbc6ea2f0f35b268a0ee125af2c4624b": "37f089c98bbf6fff35158dbc5c2c6576",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/be2570256d6faf2c0a77b62dabeb83ccf01c37": "5c31dcee6e09f9d2c03002228714a199",
".git/objects/5b/e4554ad79a927fb53520ace75d66b889741ac1": "8d077826ea6789ddada945e6abad9675",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/01/40cdd4b94f873ca92b233032b5c0d9f154930f": "eb7a78c42e930ecc57d838bcb78ae49d",
".git/objects/6c/e14530a2c57673ea58379d2c17622463454d39": "e1aee55604d6a5f05e392417d2393651",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/020acf8c5f31eba94916338f3eb079b61e0e4c": "3fe5a6a1c2750c9c2a9ca6e75e10cadc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/8d64facea45e0cf44401850ef24209b22db8e7": "a242af16f3f7102f55babe5662d6ebac",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/252917c63bca6483b035667ef40476b768a969": "05a4d056a439aa713a342d5da2a5b164",
".git/objects/e8/6c26876a230ee0061d5a7c6d22cf946a8b3e33": "05e77a60daf354ce0ade54aa76b26301",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/24/34670302f329878894d18a22dc36e9b7355556": "7979400fb75031310b43edaa6602ab9d",
".git/objects/23/30334a4c0cb2c038face7272de4acc98d560e6": "0541ec823a82493d0ad82299e74f9d19",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/8b/84868cb8c3a5caf7cb4e96c78b56a636cebf53": "648f3f3782451649e81c2e5eab16dbe2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "275a31354689287a09fd04a2380b0a87",
".git/logs/refs/heads/master": "275a31354689287a09fd04a2380b0a87",
".git/logs/refs/remotes/origin/master": "aecf7ee3c5c33566d58688b0fc278439",
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
".git/refs/heads/master": "5043b1d210c6ce04ede92843d8d190d4",
".git/refs/remotes/origin/master": "5043b1d210c6ce04ede92843d8d190d4",
".git/index": "0d63c319c610ebc78d10737fe74c10a0",
".git/COMMIT_EDITMSG": "3619fc2d1d40305dfa5bcab77ce4c2de",
"favicondeleted.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "c200ba54eb41b274901fbb54ab206b46",
"assets/NOTICES": "0170f85aaa03e246ee7780cbfc6d7760",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/fonts/MaterialIcons-Regular.otf": "27206588da6d3d24f71ec64067b75eb0",
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
