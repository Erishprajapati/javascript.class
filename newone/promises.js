//promises 1
/**const promiseOne = new Promise(function (resolve, reject) {
    //do asynchronous task 
    //db calls, network call
    setTimeout(function (){
        console.log("async task is started and ended successfully");
        resolve()
    },100)
});
promiseOne.then(function(){
    console.log("promise consumed");
})

const bankDetail = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Your account detail has been archeived");
        resolve();
    },1000);
    
});
bankDetail.then(function(){
    console.log("You cant use your accounts for payment integration");
});


const fbUser = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("If you are redirected here, try logging in again");
        resolve(); // Resolve the promise after the timeout
    }, 1000);
});

fbUser.then(function() {
    console.log("ID deactivation key: [123]");
});

**/
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("asynchronous task 2");
        resolve();

    },1000);
}).then(function() {
    console.log("asynchronous task 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){

resolve({username: "Erish",
Email:"irish@gmail.com",
})
    },1000)

})
promiseThree.then(function(user){
    console.log(user)

})