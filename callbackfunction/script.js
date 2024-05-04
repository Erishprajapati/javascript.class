/** 
//left side contains function expression 
//right side contains arrow function concept
const greet = (count)=>{
    for(let i=0; i<count; i++)
    console.log("namaste");
}
//greet(7);

//with parameters
const myFunction = (param1, param2) =>{
    //function body 
    console.log(param1,param2);
}

//calling the function 
//myFunction("namaste", "erish");

//callback function
function welcome(name, callback) {
    console.log("Hi" + " " + name);
    callback()
}
//callback function 
function callMe(){
    console.log(" I am callback function");
}
//passing the function as arguements 
//welcome("erish", callMe)

function totalBill(name, callback) {
    console.log("Hello" + " " + name);
    callback()
}

function callMe(){
    console.log(" your total amount is 18000");
}
//totalBill("sahil", callMe)


function location(name, callback) {
    console.log("Welcome " + name);
    callback(); // Call the callback function
}

// Callback function
function callMe() {
    console.log("Your location is Bhaktapur");
}

// Passing the function as arguments
location("Vianet", callMe);


const calculate = (a, b, operation) =>{
    return operation(a, b);
}

const result = calculate(8 , 2, function(num1, num2){
    return num1 + num2;
})
console.log(result)

//performing certain operations with some examples 
const bill = (a, b, c, d, operation) => {
    return operation(a, b, c, d);
}

const total = bill(100, 200, 250, 450, function(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
});

console.log(total);


//more about callback function 
const semesterFee = (a, b, c, operation) =>{
    return operation(a, b, c);
}
const totalFee = semesterFee(70000,  25000,  9000, function(num1, num2, num3){
    return num1 + num2 + num3;
});
console.log(totalFee);

const myExpenses = (a, b, c, d, operations) =>{
    return operations(a, b, c, d);
}
const totalExpenses = myExpenses(9000, 8000, 7000,6000, function(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
});
console.log(totalExpenses);


//asynchronous code 
// the code which will be executed later 
//setTimeout function 
// setTimeout (function, milliseconds)
console.log("hello world");
setTimeout(() => {
    console.log("this will print abit later");
}, 4000);
console.log("hello namaste");
console.log("hi how are you");

const testResult = (a, b, c, operation) => {
    return operation(a, b, c);
}

const marks = testResult(80, 90, 100, function(num1, num2, num3) {
    console.log(num1 + num2 + num3);
    setTimeout(() => {
        console.log("You have obtained total marks.");
    }, 2000);
});

function getCheese(callback){
    setTimeout(() => {
        let cheese = "🫶🏻"
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}
getCheese ((cheese) => {
    console.log("got the cheese", cheese);

})
**/
let welcomeMessage = " Hi sir/madam"
console.log("welcomeMessage")
function greetingMessage(callback){
    let Message = "❤️"
    setTimeout(() => {
        console.log("welcome to linkedIN server", Message);
        callback(greetingMessage);
    }, 3000)
}
greetingMessage(()=>{
    console.log("Welcome to linkedIN server", Message);
})