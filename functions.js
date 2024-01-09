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
**/

function loginUserMessage(Professorname = "sandesh tamang"){
    if(!Professorname){
        console.log("please enter subjective professor name");
        return;
    }
    return `${Professorname} just checked in`;
}
console.log(loginUserMessage());