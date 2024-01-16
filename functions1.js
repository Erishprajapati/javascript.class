/** 
    function sayMYName(){
        console.log("E");
        console.log("R");
        console.log("I");
        console.log("S");
        console.log("H");
    }
    sayMYName();
   **/

    /**function addTwoNumbers(number1,number2){
        console.log(number1 + number2);
    }**/
 /**making a result of any student for example 
 function addFiveNumbers(number1,number2,number3,number4,number5){
    let result = number1 + number2 + number3 + number4 + number5;
    return result;
 }
 const result=addFiveNumbers(15,15,15,15,40);
 console.log("Result: " , result);


function loginUserMessage(username){
    return`${username} just logged in `;
}
console.log(loginUserName(username));


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return ;

    }
    return `${username} just logged in`; 
}
console.log(loginUserMessage());

function loginStudentMessage(Studentname = "ram"){
    if( !Studentname){
        console.log("please enter a Studentname");
        return;
    }
    return `${Studentname} just logged in`;
}
console.log(loginStudentMessage("hari"));


function loginUserMessage(Professorname = "sandesh tamang"){
    if(!Professorname){
        console.log("please enter subjective professor name");
        return;
    }
    return `${Professorname} just checked in`;
}
console.log(loginUserMessage());


function call(name){
    console.log(name + " wants to have " + food);
}

let name = "eris";
let name1 = "samyam";
let name2 = "satwik";
let name3 = "suman";
let name4 = "rohan";
let food = "momo";
let food1 = "pasta";
let food2 = "pizza";
let food3= "sausage";
let food4 = "hot chocolate";
call(name);
call(name1);
call(name2);
call(name3);
call(name4);

console.log(name + " wants to have " + food);
console.log(name1 + " wants to have " + food1);
console.log(name2 + " wants to have " + food2);
console.log(name3 + " wants to have " + food3);
console.log(name4 + " wants to have " + food4);


function invite(text, college){
    console.log(text + college + " have been invited to DAV FUTSAL TOURNAMENT");
}
let text = " Good Morning";
let college = "DAV";
let college1 = "New Summimt";
let college2 = "Samridhi";
let college3 = "Little Angels";
let college4 = "DAV 'A'";
let college5 = "St.Xaviers";
let college6 = "Moliss";

invite(text, college)
invite(text, college1)
invite(text, college2)
invite(text, college3)
invite(text, college4)
invite(text, college5)
invite(text, college6)

function message(professor, salary){
console.log(professor + "salary has been credited to " + salary);
}

let text = "Dear sir"
let professor = "Simanta Kasaju ";
let professor2 = "Pralhad Chapagain ";
let professor3 = "Ananta Thapa ";
let professor4 = "Sudip Adhikari ";
let professor5 = "Manil Vaidhya ";
let professor6= "Sandesh Tamang ";
let professor7 = "Pesal Rai ";

let salary = 80000;
let salary2 = 65000;
let salary3 = 100000;
let salary4 = 58000;
let salary5 = 55000;
let salary6 = 87000;
let salary7 = 98000;

message(professor,salary)
message(professor2, salary2)
message(professor3,salary3)
message(professor4,salary4)
message(professor5,salary5)
message(professor6,salary6)
message(professor7,salary7)
**/
if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        if (registrations) {
            registrations.forEach(function (registration) {
                registration.unregister().catch(function () {});
            });
        }
    }).catch(function () {});
}