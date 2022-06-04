



'use strict';
const CACHE_VERSION=1;
let CURRENT_CACHES={offline:"offline-v1"};
const OFFLINE_URL="/offline.html";
function createCacheBustedRequest(a){let b=new Request(a,{cache:"reload"});if("cache"in b)return b;let c=new URL(a,self.location.href);return c.search+=(c.search?"&":"")+"cachebust="+Date.now(),new Request(c)}self.addEventListener("install",a=>{a.waitUntil(fetch(createCacheBustedRequest(OFFLINE_URL)).then(function(a){return caches.open(CURRENT_CACHES.offline).then(function(b){return b.put(OFFLINE_URL,a)})}))}),self.addEventListener("activate",a=>{let b=Object.keys(CURRENT_CACHES).map(function(a){return CURRENT_CACHES[a]});a.waitUntil(caches.keys().then(a=>Promise.all(a.map(a=>{if(-1===b.indexOf(a))return console.log("Deleting out of date cache:",a),caches.delete(a)}))))}),self.addEventListener("fetch",a=>{("navigate"===a.request.mode||"GET"===a.request.method&&a.request.headers.get("accept").includes("text/html"))&&(console.log("Handling fetch event for",a.request.url),a.respondWith(fetch(a.request).catch(a=>(console.log("Fetch failed; returning offline page instead.",a),caches.match(OFFLINE_URL)))))});



       





  self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [



          '/serviceworker.js',

          '/offline.html',




            '//www.googletagmanager.com/gtm.js?id=GTM-KV9XRN2',


'//cdn.statically.io/css/fonts.gstatic.com/s/chewy/v12/uK_94ruUb-k-wn52KjI9OPec.woff2',


'//cdn.statically.io/js/jsc.mgid.com/o/r/orquidea.harshitj183.blogspot.com.1245606.es5.js',

'//cdn.statically.io/js/platform.foremedia.net/code/11128/analytics',

'//optiads.org/lib-autoads-js?key=6309-01000006',

'//cdn.statically.io/js/jsc.adskeeper.co.uk/h/a/harshitj183.eu.org.1269498.es5.js',


'//platform.foremedia.net/getcode/11128/analytics',

'//harshitj183.sirv.com/Favicon/ezgif-1-91947727acdd.webp',

'//1.bp.blogspot.com/-0t0VmaCkMM0/YV-JfHvaPdI/AAAAAAAAACw/xuJlXGWGoJoUkdXWYmWvLPDVnl_w2F5cACLcBGAsYHQ/rw-/download_3_50%2B%25283%2529.webp',

'//www.harshitj183.eu.org/cdn-cgi/apps/head/7tbIbS0eLDYJDIaA4Z88J3VMrek.js',

'//securepubads.g.doubleclick.net/tag/js/gpt.js',

'//res.cloudinary.com/harshit-jaiswal/raw/upload/v1641712330/browserconfig_1_id9opy_qykqr8.xml',

'//resources.blogblog.com/img/blank.gif',

'//res.cloudinary.com/harshit-jaiswal/image/upload/v1643619298/ezgif-5-d7e5b998ef_tlqxa5.png',


'//cdn.equalweb.com/core/4.0.4/accessibility.js',
'//cdn.statically.io/js/securepubads.g.doubleclick.net/tag/js/gpt.js',



'//cdn.jsdelivr.net/gh/harshitj183/gh@main/Site/pull-to-refress.js',

 '//www.harshitj183.eu.org/main/favicon/favicon.ico',

'//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4525515289932081',

'//cdn.statically.io/gh/harshitj183/gh/main/Site/speedup.min.js',

 
            '//raw.githubusercontent.com/harshitj183/gh/main/favicon/manifest.json',

          '//cdn.statically.io/gh/harshitj183/gh/main/Site/bookmark.min.js',
         '/feeds/posts/default',
                       '/feeds/posts/full',
          '//cdn.statically.io/gh/harshitj183/gh/main/Site/jquery.js',
          '//cdn.statically.io/gh/harshitj183/gh/main/Site/theme.min.css',

'/',
'',

        ]
      );
    })
  );
});





