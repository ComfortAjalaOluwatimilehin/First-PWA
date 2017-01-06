
if("serviceWorker" in navigator){
        navigator.serviceWorker.register("/service.js",{scope:"/"})
        .then(reg=>{
              console.log("Registeration succeeded")
        })
        .catch(error=>{
            console.log("Registeration failed because: ")
        })



}
