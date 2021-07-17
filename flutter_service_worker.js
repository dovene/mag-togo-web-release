'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6db3a25054f9bd2f943eb1381bfe7323",
"index.html": "fa8214ef450be4bc59f0cee1582a9402",
"/": "fa8214ef450be4bc59f0cee1582a9402",
"main.dart.js": "20dbbfff97661ed0e6393e0176242fa5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82d4c74e955e503463eea35535e72cfe",
"assets/AssetManifest.json": "fc366c43eca7025f1f11b03d929171db",
"assets/NOTICES": "3fe5addc4608d9b5eabe90ecbae21c78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/news.png": "4bab0fff4b3a150b68ee690c6c726bf7",
"assets/assets/images/ic_help_outline_white_24dp.png": "9af4fe273d24b9c279f4f3f44a2d3c01",
"assets/assets/images/happy.png": "02dcc4644f7e78cf86da48b3564ac0e4",
"assets/assets/images/ic_info_outline_white_24dp.png": "2cc111212cb3a807a3f92331192de1bf",
"assets/assets/images/ic_lock_white_24dp.png": "080d311e02441d4284a5473b2425244c",
"assets/assets/images/ic_favorite_white_48dp.png": "1ad0cc6d9c249581e3879bf7d2646b0a",
"assets/assets/images/game_img.png": "c9df981ea44f3593d0010b9d7daa2a2f",
"assets/assets/images/ic_search_black_24dp.png": "2b6c859b5b3344bc725ca9cbf9e42b1f",
"assets/assets/images/ic_email_white_24dp.png": "d3f61b335035e6cd4a2e06307db7bba0",
"assets/assets/images/announce.png": "443dd6e2928737859e08192119852eb2",
"assets/assets/images/progress_image.png": "4cc852a32e58c1e5f834c4eafc71059f",
"assets/assets/images/ic_more_horiz_white_24dp.png": "1ed78e68f7b184f83d9a6bffe9b10edd",
"assets/assets/images/ic_bookmark_black_24dp.png": "19d73659838fde5233668e77619a0d69",
"assets/assets/images/music.png": "e6a5703577e6e2038e15389ec0a74b1a",
"assets/assets/images/ic_info.png": "7136cb555d70a9b63f7520aa97c1b184",
"assets/assets/images/home.png": "4569d67dd5c7b6dfebf472033f3f4bfa",
"assets/assets/images/shop.png": "7687b08b89aa19b4c12faf1532b62f19",
"assets/assets/images/ic_call_black_24dp.png": "e4cf4f3a60e97a40ec27a57927ac37b9",
"assets/assets/images/ic_notifications_active_white_24dp.png": "13e3221979d2c0664e864c8aec261652",
"assets/assets/images/concert.png": "e29e3e976d16861324aad3f25d66a3a3",
"assets/assets/images/ic_navigate_next_black_24dp.png": "7bb9e0efc1ada1a245b1353d3468b60c",
"assets/assets/images/ic_import_contacts_black_24dp.png": "37da046227876e96f731235e370cb756",
"assets/assets/images/weather.png": "6a6a7798543db00f3e9a1072042012f1",
"assets/assets/images/history.png": "ce9192bff60d74e4431a8b2de2e32d68",
"assets/assets/images/ic_share_white_24dp.png": "3fb8b9801e354cc27c237bffe5cf8f62",
"assets/assets/images/menu.png": "ffddd1d4a285e0cc493e47d84714eecb",
"assets/assets/images/ic_photo_album_black_24dp.png": "af7ed93569601b661d9fa8ff8e8e7801",
"assets/assets/images/ic_search_white_24dp.png": "48149fbb1d1a20153153bb8be3edb866",
"assets/assets/images/ic_person_white_24dp.png": "8813b686f98178f7230df518fd958018",
"assets/assets/images/ic_favorite_white_24dp.png": "6b771ca4f6c6afd66569cfb2c9a04c4c",
"assets/assets/images/album.png": "fc4f25116807af6a0b4e61cf58b0c7ee",
"assets/assets/images/ic_stat_ic_notification.png": "c175fe14e7bad52b558c5015bba7a5f0",
"assets/assets/images/ic_refresh_white_24dp.png": "2a54f9061a941af88c88dda2510717bb",
"assets/assets/images/star.png": "e78afd425d5576293ed997f2d27deaae",
"assets/assets/images/ic_create_white_24dp.png": "d593828bd4b3a035a83fe5b422b04570",
"assets/assets/images/ic_insert_emoticon_black_24dp.png": "9d016813938c6f8a474318eb226874b4",
"assets/assets/images/ic_archive_black_24dp.png": "9c50a59affabdca0c456672d0e3c48fb",
"assets/assets/images/ic_app_launcher.png": "66207db2ecaf7ebc76723cb10976c065"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
