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
**/





