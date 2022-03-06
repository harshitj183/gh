
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
            '//www.googletagmanager.com/gtm.js?id=GTM-KV9XRN2',


'//cdn.statically.io/css/fonts.gstatic.com/s/chewy/v12/uK_94ruUb-k-wn52KjI9OPec.woff2',


'//cdn.statically.io/js/jsc.mgid.com/o/r/orquidea.harshitj183.blogspot.com.1245606.es5.js',

'//cdn.statically.io/js/platform.foremedia.net/code/11128/analytics',

'//optiads.org/lib-autoads-js?key=6309-01000006',

'//cdn.statically.io/js/jsc.adskeeper.co.uk/h/a/harshitj183.eu.org.1269498.es5.js',


'//platform.foremedia.net/getcode/11128/analytics',

'//harshitj183.sirv.com/Favicon/ezgif-1-91947727acdd.webp',

'//1.bp.blogspot.com/-0t0VmaCkMM0/YV-JfHvaPdI/AAAAAAAAACw/xuJlXGWGoJoUkdXWYmWvLPDVnl_w2F5cACLcBGAsYHQ/rw-/download_3_50%2B%25283%2529.webp',

'//cdn.statically.io/js/rawgit.com/AkewAvriyans/script/master/adsprotect.js',

'//securepubads.g.doubleclick.net/tag/js/gpt.js',

'//res.cloudinary.com/harshit-jaiswal/raw/upload/v1641712330/browserconfig_1_id9opy_qykqr8.xml',

'//resources.blogblog.com/img/blank.gif',

'//harshitj183.sirv.com/ezgif-2-c184a5e89fd5.webp',


'//cdn.statically.io/js/cdnjs.cloudflare.com/ajax/libs/quicklink/2.2.0/quicklink.umd.js',


'//harshitj183.disqus.com/blogger_item.js',
 '//cdn.statically.io/js/MomentJS.com/downloads/moment.min.js',

'//cdn.purpleads.io/agent.js?publisherId=7fb5e7d10c9713a7380726f152132456:f49cf1a79792daefa00236ea55c9b7aaf5f6461d7d5c272934da9e0ecab2ed7af1ed83aadf37879f8f74547a66a7057a635b1fbd7e38e18c44059aee9ddc7426',

'//cdn.statically.io/gh/harshitj183/Pwa/main/manifest.min.json',


'//404.harshitj183.eu.org/cdn-cgi/apps/head/ktetAGybxiAEsVMxIF9WGX7bVVg.js',

            '//cdn.statically.io/css/cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css',

          '//cdn.statically.io/js/res.cloudinary.com/harshit-jaiswal/raw/upload/v1625978655/Theme_fi9xws.js',
         '/feeds/posts/default',
                       '/feeds/posts/full',
          '//cdn.statically.io/js/res.cloudinary.com/harshit-jaiswal/raw/upload/v1639274918/jquery.min_lbxuro.js',
          '//cdn.statically.io/css/res.cloudinary.com/harshit-jaiswal/raw/upload/v1639203245/Themestylesheet_flnooq_ztgcir_3_ldwifk_xbld3p_jvptlc_nlrlny.css',
          '/sw.js',
          '/offline.html',
'//cdn.statically.io/js/instant.page/5.1.0',
'/',
'',
        ]
      );
    })
  );
});

