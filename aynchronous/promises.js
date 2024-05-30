/**
function fetchData(callback){
    setTimeout(() => {
        const data = { name: "eris", age: 20};
        callback(data);
    }, 3000);
}

function processData(data){
    console.log("Received data: " , data);
}
fetchData(processData);

// lets make a semester fee using callback function 
function semesterFee(callback) {
    setTimeout(() => {
        const fee = "190000"
        callback(fee)
    }, 2000);
}
function totalFee(fee) {
    console.log("you should deposit", fee);
}
semesterFee(totalFee)


function welcomeUser(callback) {
    setTimeout(() => {
        const user = "Eris"
        callback(user)
    }, 2000);
}
    function welcomeMessage(user){
        console.log(user, "welcome to our site");

}
welcomeUser(welcomeMessage);

//nesting
let age = 
if (age< 19 && age>10){
    console.log(" senior child")
}else if(age<10 && age>5) {
    console.log(" middle child")
} else if(age< 5){
    console.log("last child")
}

const payment = "khalti"
console.log("payment is done through ", payment)
function getBill(callback){
    setTimeout(() => {
    
    let Bill = "2000"
    callback(Bill);
}, 2000)
} 
function totalBill(bill){
    console.log("total bill is ",  bill)
}
getBill(totalBill)
let promise = new Promise((resolve, reject) =>{
    console.log(" i am a promise");
    resolve("hi i am here")
})
//pending 
//fulfilled 
//rejected

function getData(dataId,getNextData){
  return new Promise((resolve, reject) =>{

  })
}

//Promise.then
//promise.catch
const fetchData = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const data = "100W"
        callback(data)
    }, 2000);
})
function processData(data) {
    console.log("provided data: " + data);
}
fetchData(processData);


somePromise.then(
    funciton(result){
        console.log("promise resolve with result: " + result);
    },
    function(error){
        console.log("promise reject with error: " + error)
    }
);
  **/
