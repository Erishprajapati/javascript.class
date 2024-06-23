const promiseOne = new Promise(function(resolve, reject) {
//do aync task 
//DB calls , cryptography. network calls
setTimeout(function(){
    console.log("async task completed");
    resolve()
}, 2000);
})

promiseOne.then(function(){
console.log("promise consumed");
})