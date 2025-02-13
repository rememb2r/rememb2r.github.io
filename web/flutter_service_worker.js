'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dee1d008d22ffcba96f621b7604634b6",
"assets/assets/images/1.jpg": "cdf7c7a5562ba1d8b47b5ec1a5638497",
"assets/assets/images/1.png": "35630e63bbb0108a78da631f1a7499b1",
"assets/assets/images/apple.png": "ad72835b6ce652c5ecfbc541d751c7b2",
"assets/assets/images/bookmark_filled.svg": "4676ca55e2c760eb0e7c41455c35b431",
"assets/assets/images/bookmark_outline.svg": "0e8066cc8c3b4b9fb65ed7edec0881b0",
"assets/assets/images/camera_icon.svg": "64b9ff3a3a9bec0133ab1cfd164bb886",
"assets/assets/images/comment_outline.svg": "126bcfe376b5502a11ae1d455b3fea6b",
"assets/assets/images/confirm_email.svg": "6e95c2bbe85157d3f94126a6c229fe0e",
"assets/assets/images/feed_icon_logo.png": "b4199d5f6c6dad3e0d6a8fd468b8cba6",
"assets/assets/images/feed_icon_logo.svg": "a7c8d1601d5c9ed65e82d829c2f6c643",
"assets/assets/images/feed_icon_logotext.png": "e3c2c1d96ed7682cc1253a651dfaf084",
"assets/assets/images/feed_icon_logotext.svg": "88d3b84c1a0cdae057f86f9abaacca19",
"assets/assets/images/feed_notification.png": "5361538d5eb9f8ddc6e7b98769769890",
"assets/assets/images/google.svg": "6907a65536cc16e4037a753dbd940411",
"assets/assets/images/hotness_empty.png": "e7a0d960607890e4759c5c4a08af48b3",
"assets/assets/images/hotness_full.png": "352f3ff2b3ac6f168ec065acc01b1a32",
"assets/assets/images/icon_blackX.svg": "de951c7b2cd40f8d22480a378fa68c91",
"assets/assets/images/icon_delete0.svg": "dbf361f9b4159222382950870b6f37ef",
"assets/assets/images/icon_number1.svg": "801f25552389786d5faf2f9c4b70d737",
"assets/assets/images/icon_number2.svg": "2212a102328da64ba4cb68abeac67a23",
"assets/assets/images/icon_number3.svg": "782aa9ce443550e72cb8e47f18a88a33",
"assets/assets/images/icon_number4.svg": "ad8fc806d730c31dd5b33918615ea951",
"assets/assets/images/icon_number5.svg": "0ab91d16011c986740d125300c12da48",
"assets/assets/images/icon_number6.svg": "9aaa0cab759645dc58963c1a892852c6",
"assets/assets/images/icon_number7.svg": "d2619c4d1faa1dacf7b23d7b6f576087",
"assets/assets/images/icon_number8.svg": "a286ed9ef1b0fb385ddd4cead383fc58",
"assets/assets/images/icon_number9.svg": "d11c3ef1a8c92e50878935cf8ba990b6",
"assets/assets/images/kakao.png": "86dcbca84a8225c6ae471b17acf7233a",
"assets/assets/images/kakaolink_btn_small.png": "92dbc9a7023befe38080df1fbbfe0828",
"assets/assets/images/like_filled.svg": "97a4dfd44897873058686554021a12c0",
"assets/assets/images/like_outline.svg": "64030ee7bc7060f81a6ae0c872c89ab0",
"assets/assets/images/login_google.svg": "ef42a65348653e75cce27d479406b870",
"assets/assets/images/login_logo.png": "46cd8980affebb8f4eb0e22fca1bb84c",
"assets/assets/images/login_logo_text.png": "e27f832c611e84074554fe05011d54a7",
"assets/assets/images/main_logo.png": "8010a0f6d7f9438ef4af6eaacfd70a14",
"assets/assets/images/mypage_edit_myphoto.svg": "a123983e41bf38ae8ec8be31f4e75d19",
"assets/assets/images/mypage_logout.svg": "2c312c48cb7fb7ac7572170063c2c5d1",
"assets/assets/images/mypage_mybookmark.svg": "3126bcb39be8f2a2831742759f59f825",
"assets/assets/images/mypage_mywriting.svg": "9c6e03b7fb8e458280d7ca46a9643b92",
"assets/assets/images/mypage_setting.svg": "5431305553a24ffd97b3305304ce1a9f",
"assets/assets/images/recipe_add_button.svg": "51f0b711a66ec4075bea12e4ba84d6f1",
"assets/assets/images/recipe_category_selector0.svg": "3bd47401bd5acbd356a93962e2e99591",
"assets/assets/images/recipe_category_selector0_filled.svg": "1ad1510ff1f603bbd0da5e3136d70b52",
"assets/assets/images/recipe_category_selector1.svg": "2353b01f8e8361a014d4d8463aacecf9",
"assets/assets/images/recipe_category_selector1_filled.svg": "5152d45bca115643187b44de9ddb2acc",
"assets/assets/images/recipe_comment.png": "dee5891d7e64e4ca422c84bf46893f80",
"assets/assets/images/recipe_comment2x.png": "153e9f5e4077971e34ae7b2aef29f051",
"assets/assets/images/recipe_filter.svg": "fb98bf762c4d177e4fdc81dfc96731c6",
"assets/assets/images/recipe_like.png": "66f92e3c42a4742aa7cc04f7640db6fc",
"assets/assets/images/recipe_step_photo_upload.svg": "90bb3c0e037947e76e3e3aedcff3af22",
"assets/assets/images/recipe_video_upload.svg": "790d0f1cfdaba9de2c454ac4304b4f92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d11a877786fc97c4a1bc42397332a1dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a7001c32c2bc20a3675879cf5d4f24e5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "e5e9fd578df5397ccdc650248cf5ce84",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/android-icon-144x144.png": "33d009384ace9fd8ef7c35675d0ef6a4",
"icons/android-icon-192x192.png": "a1c3495dba4912ba414870d6fb630ec3",
"icons/android-icon-36x36.png": "d03e9b5ea6adf8e9da2ed8ca783e27ae",
"icons/android-icon-48x48.png": "78dcf4ffc178057fe062cd20aae8b34e",
"icons/android-icon-72x72.png": "8da5720a8e1b6815460f64b1718fcdd5",
"icons/android-icon-96x96.png": "74d2629985fcd29c11545494d3c60eda",
"icons/apple-icon-114x114.png": "0ddfaa0b8ff28d40a909e53188f08d43",
"icons/apple-icon-120x120.png": "d10351e986cddc4bff8aa752019c79a1",
"icons/apple-icon-144x144.png": "33d009384ace9fd8ef7c35675d0ef6a4",
"icons/apple-icon-152x152.png": "6a2c7a76c7733648b73b2c171dfaee82",
"icons/apple-icon-180x180.png": "8ea14b9e7b849493f5e899630c57b091",
"icons/apple-icon-57x57.png": "1ba72d7f93f1c6c0caa8c07ab31bf308",
"icons/apple-icon-60x60.png": "6d198f6f7815477b6d7650339af0cc44",
"icons/apple-icon-72x72.png": "8da5720a8e1b6815460f64b1718fcdd5",
"icons/apple-icon-76x76.png": "44ee36e358cd53305eab3c07db8931ca",
"icons/apple-icon-precomposed.png": "2b87a4cb96ade5f752918f681e580924",
"icons/apple-icon.png": "2b87a4cb96ade5f752918f681e580924",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "8d122d1760ec14d14566d8b3e01877b4",
"icons/favicon-32x32.png": "54494b82832a1cdc8146b0d5584a542c",
"icons/favicon-96x96.png": "74d2629985fcd29c11545494d3c60eda",
"icons/favicon.ico": "2bb4e64c83e10d83aa99aacf86cdaea4",
"icons/Icon-192.png": "053ad6c8b11959129402ee37ae2125b8",
"icons/Icon-512.png": "83503c3bb523a75f0528fae8869c6e51",
"icons/Icon-maskable-192.png": "053ad6c8b11959129402ee37ae2125b8",
"icons/Icon-maskable-512.png": "83503c3bb523a75f0528fae8869c6e51",
"icons/manifest.json": "0da4db1e8b53c0d5754d23bd87a63da1",
"icons/ms-icon-144x144.png": "33d009384ace9fd8ef7c35675d0ef6a4",
"icons/ms-icon-150x150.png": "7c08130e63cc0f1cb4a6e1590f042e84",
"icons/ms-icon-310x310.png": "4feaa7c4ace77f601b4298dc4c61913c",
"icons/ms-icon-70x70.png": "b8a4cb32d0e07700bcb09e5312d32a8e",
"index.html": "096903a2467e13faac4f28bd286b1b1c",
"/": "096903a2467e13faac4f28bd286b1b1c",
"main.dart.js": "ee43b293604bda7a994877d7e871d5e1",
"manifest.json": "fc5a18716876fc4eed0f19a8ed6cb91b",
"version.json": "431b31813484710aa121a144eaf1a7fd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
