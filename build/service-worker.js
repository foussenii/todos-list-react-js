"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","3a9f61d43d0420413fe056d911086e6f"],["static/css/main.906fdbf0.css","23642d684524fa97b54ce33fb59ddd93"],["static/js/main.7919c489.js","ded554af871b813324cd6b9b1d6ec3dd"],["static/media/Apple.a22bea92.svg","a22bea92054dc324b1d53bc760a909d7"],["static/media/YouTube.c3356498.png","c33564986ce2e78020306ec04e3d0299"],["static/media/album-03.7269a285.jpg","7269a285b8ae8c5598e1ced1f0793270"],["static/media/facebook.53d9b752.svg","53d9b752fc0e47c1f6e095ab1dc4d0a4"],["static/media/fond.d2637830.jpg","d2637830c116958e6e1d908cab8d5dfa"],["static/media/img1.e3ff5b04.jpg","e3ff5b04c4fc6be19691eaebdf55cfde"],["static/media/img10.7d9d33b2.jpg","7d9d33b2cf3a9bdfc21a4d572cc2b8de"],["static/media/img2.25c847b8.jpg","25c847b8f9e7474bec6938ee354e8786"],["static/media/img3.3aeb5c4c.jpg","3aeb5c4c0ed7932a00fa1b040ea09dd5"],["static/media/img4.c7cf6694.jpg","c7cf6694bb86af364a479cd943b1b922"],["static/media/img5.f8c8b3db.jpg","f8c8b3db9a6b086440969b6dd19039d2"],["static/media/img6.210ddea6.jpg","210ddea6c8fc73a08c14d27731784bb1"],["static/media/img7.2166f0c0.jpg","2166f0c0d89680ce6cbaf7cd68baf0b5"],["static/media/img8.ed93ace1.jpg","ed93ace17f4879dd3668ff2d5c50106a"],["static/media/img9.25c59a5b.jpg","25c59a5b4552dce59ac1a10b0617fbe4"],["static/media/insta.e4ee5d49.svg","e4ee5d496453d60684455636ccd894e3"],["static/media/profil2.62e5b33d.jpg","62e5b33dc04c085290521abdec6fd2ad"],["static/media/rue1.8a506cc1.jpg","8a506cc1e8a1cd7de11c53a96aaac066"],["static/media/soundcloud.12719c78.svg","12719c78651edec73e9d0e7748f34198"],["static/media/twitter.1a25dc59.svg","1a25dc59966dacc1eb063fdad2cf3fec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/projet-OBSIDIAN-REACT/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});