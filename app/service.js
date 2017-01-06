var currentCache = "v6"
this.addEventListener("activate",event=>{
      var cacheWaitList = [currentCache]


      event.waitUntil(

            caches.keys().then(keyList=>{
                  return Promise.all(keyList.map(key=>{
                        if(cacheWaitList.indexOf(key) === -1){
                          console.log(key,caches)
                            return caches.delete(key)
                        }
                  }))
            })
      )
})

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentCache).then(function(cache) {
      return cache.addAll([
        "/index.html",
        "/bundle.js",
        "/img/loader.gif"
      ]);
    })
  );
});


this.addEventListener("fetch",event=>{
        event.respondWith(
          caches.match(event.request).then(response=>{
            return response || fetch(event.request).then(res=>{
                return caches.open(currentCache).then(cache=>{
                  cache.put(event.request,res.clone())
                  return res
                }).catch(error=>{})
            })
          })
        )
})
