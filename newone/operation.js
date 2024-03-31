let value = '10'

console.log(typeof value);
console.log(value);

const firstName = "Erish";
const lastName = "prajapati";

let fullName = firstName + lastName;
console.log(fullName);

the information of someone 
const firstName = "ayush";
const lastName = "bajimaya";
let number = 1234567;
let location = "sankhamul";
const gender = "male";
let education = "bachelor";

// Creating an object using the variables
let information = {
  firstName: firstName,
  lastName: lastName,
  gender: gender,
  education: education,
  number: number
};

console.log(information);


const firstName = "bishal";
const lastName = "prajapati";
const gender = "male";
const location = "lokanthali";
let number = 1234590;
let education = "bachelor";

let information = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    location: location,
    education: education,
    number: number
}
console.log(information);


//displaying information
const firstName = "Satwik";
const lastName = "tripathi";
const gender = "male";
const location = "sanepa,lalitpur";
let education = "bachelor";
let status = "single";
let number = 98288907382
let information = {
  firstName: firstName,
  lastName: lastName,
  gender: gender,
  number: number,
  education: education,
  status: status,
  location: location
}
let isloggedin = false;
let userLoggedIn = Boolean(isloggedin);
if (userLoggedIn){
  console.log(information);
}else{
  console.log("information not found");
}


//displaying any other informations
// implementing all 
const firstName = "erish";
const lastName = "Prajapati";
const gender = "male";
let status = "single";
let education = "bachelor";
let location = "bhaktapur";

let information = {
  firstName: firstName,
  lastName: lastName,
  gender: gender,
  status: status,
  education: education,
  location: location
};

let age = 18;
if (age < 16) {
  console.log("Your access is denied");
} else if (age > 19) {
  console.log("You have been granted access");
}

let isloggedIn = 1;
let erisloggedin = Boolean(isloggedIn);
if (erisloggedin) {
  console.log("You can view information");
} else {
  console.log("Your permission is denied");
}

console.log(information);

let gameKill = 100
++gameKill;
console.log(gameKill);