'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "722884142b3708df274bbeace36ff0e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e9f9151dccef8b899014f50fa0f51683",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3b8c0d31274136ff68cac297126a41d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4717ce302a47341d8758b190f753dafe",
".git/logs/refs/heads/main": "d28ad3afc1ab63f04a889a07c852f4f4",
".git/logs/refs/remotes/origin/main": "7ae44ed4bc9febd17c5ad1871b4e8e8a",
".git/objects/00/5ef954e21acd7357a246e866546067aa5ca515": "1e54097bc326fd4d22ef2db255b480fe",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0e/d07b1d01ce131c385b965f9b2d73309e2df04e": "b0ccbde29bc178f3f0d5c98a9ec20a3a",
".git/objects/13/3579b03e78cacc1994d3fc1544a152988c4dcc": "706ff760579077c4ff3d100dca5f6281",
".git/objects/14/db8e5c143403ba3e6f7696b9ca5ef69265c5c8": "7831422a34e2a1e9a3ed81a0d7f7a16c",
".git/objects/15/c3948a9f5855cf0ca645688a5709b085104100": "14b7822abab9bb020f4a40dd45433b55",
".git/objects/21/1842a29f556648c9e1c395b3b057136cda165a": "8ea3f9d8a3bc356bd5e7fbf15263f99b",
".git/objects/21/3b6b0f519f24f73d925df34adc1124361a2423": "e57010ffc8794996a1092028eb53929a",
".git/objects/22/c259620a57bf1a4127520bf4f8fc0c4a6d52b4": "36f007c796793dd59ef210f4f15234dc",
".git/objects/2d/e69073f127352652fbf08f6308b6f54f8187f6": "83443c9ff12158f3b3ed6921601c30ea",
".git/objects/34/dba5e5c209a6c6132435fdf80136a52d521c69": "31cd4288955aabef5e2fc859a23dc34e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/2e92fb6ebc63d2954dcb0071be6d9db97a9819": "6766aaf9a3b76cc5efb5d973b0bcacd3",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/42/ea91e228111658571ddb8847d3e2764a2aacf9": "a43bf41a18f60cdd9493b2a5410e236c",
".git/objects/46/463b50ae55bdeda3031768ddfff7d8eb8247aa": "dcc83febbf32f5f3e27bcdd21f73f14d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/6539e8c3ed944d9aee90888087df23652b61eb": "384c8d310f2c939f9655a08fd49d8b66",
".git/objects/4d/905a4a55952a157ca1e17fecec365410853b70": "d57d08cc63c68e78b09218f7fec13e35",
".git/objects/50/12e747a20e70b8604c2d9de6c2203655f3ed5b": "f9eba6225bd2bb5f92604d45e35ab276",
".git/objects/50/4ac3b61482ceb6d6d36321db234a36eadff83b": "c0b8493d66f9c005871bf3b8f099fa3e",
".git/objects/52/fa421281e188d82c1281c7bc6a8ef171a6d4f6": "b5f13bb69d7350b4acc6eb3f9119946d",
".git/objects/5a/b9542dcc0c6c00497f5b6f8937b313ae069f49": "dce6838143126f3789f3cb2cf0a3f787",
".git/objects/5d/5d98624b321101b6f571f496879345f9bc2bec": "be67f179ba4665d1cf2d1382c1d59d91",
".git/objects/67/116ab837ccb1484f4d2fcc760d375b849d2204": "58465ae3177f3da7d5f358788951af79",
".git/objects/68/8f43fe43bb561a7af938352423778199691d38": "7fb331b547ea3deba9c4c930fbf3b7cd",
".git/objects/6c/2914894976cfe3908ebcbb5cbeec4db2409004": "b72c0f6f6ca3dca9613d5919770315cc",
".git/objects/70/9719a009019d06dab301656baad63cf72d07d1": "39eba32158d940be657d0ef6c447af96",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/79/d0951963d3dc86687b4828f68cd0503e0ae53e": "2b067048b62940ba3bd7f867d0eee29b",
".git/objects/7a/ae948701cba46fc99ee51fb792ae2ee08def3f": "07ef5756f9f46729ea7bb950b179cdc9",
".git/objects/7a/e3054eb786d7e8408f4b84c98871afe6ad8cba": "dd7c49bb97af2139969dc088886e21ab",
".git/objects/7b/17bb717d1684b30712ef0be0f9b14b8773a20c": "6d3de8cb0bd1167e782522a61ab50633",
".git/objects/7c/80ec89c17b51cbf5054f1f2bd7d682d09f51ab": "ad81d7a4776d86335166ba20ad0b1ece",
".git/objects/80/146f9f55c4d55487396457c176f665c997de6c": "2b4a5edda95eab9ebafd2d7f57006738",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/3fe61f79e97648244e9a191d8a8c1b3ea43a09": "1d7c99ae1e9074b5318c267eeefa5e46",
".git/objects/8b/b8f6ee0e7d3535b724173468277bcd7f7d0436": "64273d1530a7ce432e73938e27babd23",
".git/objects/93/5b330975f86fb55a52369664e97c72b8361549": "5bdb262bc86b5170d84510b98b409820",
".git/objects/98/1258f212602e619a7051495141bdb0a7290b40": "b7d3646326c1863065bd0939fa0d1ee9",
".git/objects/99/72b5f8a0b069c3197289ccf43d93282f309b58": "063c156cd1048b439792ea52483fc9b0",
".git/objects/a2/3b6010e3e0b9d77001e2df10a6c608b7ba0046": "cf456f79a8f3f2ef7e2ec51354143814",
".git/objects/a8/2186bfc8c1657eb0d9318d6a930fef7841a685": "41efc9f533cd5b0ac1301225562b0e3d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ae/6aed1f676d61f0107995376cdb886f204c1507": "73ec29495e4f3647c1b3acf5345695ca",
".git/objects/ae/a709cc2f55ec53388e19c28a93ad6d2e218a11": "38f2a506cd09bf053c3cdfa9b59bb4fc",
".git/objects/b0/4bbddb4bb8c94acaf031516969c0a8861ed077": "a5b012c342051f657f74fdc0510d536e",
".git/objects/b3/49fd4337bd65bfdbcb3ff0f57ed9f749e91842": "960c06bc537248de56d4b65782ad3c0b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c3/0e1b77289bd07d159e4b5acd4758b1f678f016": "8d4f963379d9b774c64a8a9515950483",
".git/objects/c3/e7d8989b59ab77b7182e32e25e98899ed6ae79": "2193b91f8e85a11fbe819b877ea54cf1",
".git/objects/c7/399233c74d257d63d2bd525f3c14d527e82aaf": "fd93ab0164d2b9ad1933dce1ef994dbc",
".git/objects/c8/33e9d0f5285975f2c0d74cfc1a6e9fdd099882": "15a04d2f9e9d00d63790df3043c390f3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/da/a8620ebd9bada24a4d50b64c53c41420df4622": "90a4a8e59c2a432546933c62370ea436",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/de/a22f776b1f8352d1a9ccf897f12d7fa89c855d": "18b6d937c75252056884817cfe6a9bfc",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/f0/f49e5f89b2724d756a5ff600a07106514b46d1": "f0e7ac1c190c2d787b06c00ae80efa80",
".git/objects/f1/a49bd7fdbc5cd9f878c23ed97b579585c9bc89": "97e2435cc44a822e2b7691468e4bfa6d",
".git/objects/f6/c4b2fb7eddd295f16e889d0d2f56ff1172886c": "76678d06fec8a8963125e4f8dd115f86",
".git/objects/fb/fa3e9fba8fb7cc7354abdd4fb18b20cf43f494": "d4b4fd6108a1a6502c270739afa0af42",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/ORIG_HEAD": "6d2ce521fbacf1ec477863779b6904b3",
".git/refs/heads/main": "deb0ae6597791ee3de6ed140b27424d4",
".git/refs/remotes/origin/main": "deb0ae6597791ee3de6ed140b27424d4",
"assets/AssetManifest.bin": "6551c0de10b98140291aeb5f76219571",
"assets/AssetManifest.json": "bc41dbab1f13ef50f862a74ebe6c1ff3",
"assets/assets/animations/clear_night.json": "07ddafebec13743191354075136eb486",
"assets/assets/animations/clouds.json": "edcbcfc02d626a3ae8f2425dab383007",
"assets/assets/animations/clouds_day.json": "adce36b2852c99a46f8a2bd57ab8a2e1",
"assets/assets/animations/clouds_night.json": "518bbb681f422ac221a405b022fc34c2",
"assets/assets/animations/day_rain.json": "aa747542cd178ebb84dd3e1b8b3b83a7",
"assets/assets/animations/night_fog.json": "82985695da2b320f25f9135966844ee5",
"assets/assets/animations/night_rain.json": "9085d5b234bae97fdcc6335525e93b0d",
"assets/assets/animations/snow.json": "7f24b997f38e2cc977fb6a8f1eb516c9",
"assets/assets/animations/sun.json": "aa9dfa7abf78a80ddfae21299cf1d3d5",
"assets/assets/animations/thunderstorm.json": "fe338e32ffc10c1758dbacc188cddce8",
"assets/assets/images/logo.png": "f1fd6c10a907d0958b743347521c746f",
"assets/assets/images/sun.png": "cac90dee854edb59a583cd402474227a",
"assets/assets/images/weather_logo_horizontal.png": "d86cd6c5749e76c29c853b5e20205dff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9b14a40b188e54e0ff213bab2cccd2b9",
"assets/NOTICES": "eaf7f525445dbe77946bb5cbefeb8496",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ee1a38c55964d25a1fb737a1ac896304",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "ae04024f0aaa2b8d3d06311187f21b00",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "058b6e77a9642c255f34d39db18200ae",
"icons/Icon-512.png": "3c79ab6a096a1bf28f331d95c320baf7",
"icons/Icon-maskable-192.png": "058b6e77a9642c255f34d39db18200ae",
"icons/Icon-maskable-512.png": "3c79ab6a096a1bf28f331d95c320baf7",
"index.html": "50b7c9fcb27fed89482f0f001e578e49",
"/": "50b7c9fcb27fed89482f0f001e578e49",
"main.dart.js": "72578a74b1da2ce6ebdea06bd2f273e6",
"manifest.json": "e8c95478b1e82db2548133efa5031fd5",
"README.md": "5489a46dbd83978160d0a073c3ff3771",
"version.json": "23e9d24d5b36279cbfede1d4ebb467c0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
