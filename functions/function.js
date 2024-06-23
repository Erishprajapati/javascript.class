function sayMyName(){
    console.log("erish");
}
//sayMyName();

function personInformation() {
    return {
        name: "Erish",
        age: 20,
        address: "Lokanthali"
    };
}

const person = personInformation();
//console.log(person);

//suppose we need to create a salary of senior developer with his information using function 
function srDeveloper(){
    return{
        name: 'Nihal shrestha',
        age: 29,
        location: 'patan',
        gender: 'male',
        id: 11,
    }
}

//const developer = srDeveloper();
//console.log(developer);
function message (){
console.log("erish");
}
//message("you are nice person")

function nice(name){
    console.log("Hi " + name + ", you are a nice person");
}
//nice("erish");
//nice("shuvam");
//nice("rohan");

function notification(name){
    console.log("dear " + name + " salary has been credited RS 20000");
}

//notification("erish")
//notification("shuvam")
//notification("rohan")
//notification("ashay")

function notification(name,salary, ID){
    console.log("Mr." + name + " salary has been credited of Rs" + salary+ " in your account " + ID);
}

//notification("erish", 50000, 123456789)
//notification("rahul", 10000, 987654321)
//notification("sambhav", 90000, 9090909090)
//notification("sandhya", 80000, 98989989989)

//lets make a function to send the message of bill details 
function billDetails(ID, Batch, Name, Bill){
    console.log(ID + Name + " have pending due of " + Bill + " as of " + Batch);
}
//billDetails(12, "semester5", "Erish", 55000)
//billDetails(13, "semester5", "Krish", 155000)
//billDetails(14, "semester5", "Suman", 95000)
//billDetails(15, "semester7", "Arish", 85000)

//make a greet message

function greet(name, Class){
    console.log(name + " you are welcome to " + Class);
}
//greet("erish", "5thsemester")
//greet("bipasha", "semester7")

//calculating the two numbers
function addTwoNumbers(a, b){
      console.log("your total amount is ",a + b);
}
//addTwoNumbers(150, 200);

//making a huge calculation with more complexity 
function totalAmount(a,b,c){
    console.log("your amount of credit card limit is ", a + b + c);
}
//totalAmount(150000, 200000, 10000);

var dress = 10000;
var games = 90000;
var petrol = 1500;
var drinks = 5000;

function totalAmount(dress,games,petrol,drinks) {
console.log("You total balance is ", dress + games + petrol + drinks);
}
//totalAmount(10000, 90000,1500, 5000);

const totalIncome = (salary, shares, revenue, rent) =>{
    console.log("your balance of the asar month is ", salary + shares + revenue + rent);
}
//totalIncome(90000, 25000, 1000, 25000)