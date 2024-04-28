// adding an additional information to the object 

let person = {
    name: "erish",
    age: 20,
    qualification: "student"
}
person.name = "sajan";
person.age = 39;
//console.log(person)

function addBills(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4)
}

let result  = addBills(90,000, 10000, 200000, 45000)
//console.log(result)

const addPayments = (pay1, pay2, pay3, pay4) => {
    console.log(pay1 + pay2 + pay3 + pay4);
};

//addPayments(10000, 20000, 92000, 30000);
let card = " you are heartly welcome";

const invitations = (friend1, friend2, friend3, friend4) => {
    console.log(friend1 + friend2 + friend3 + friend4);
};

let i = 0;
//invitations(`${i + 1}`, `${"suman" + card}`, `${"rajendra" + card}`, `${"rabindra" + card}`, `${"heera" + card}`);

//let myArray = ['lokanthali', 'patan','pulchowk', 'sunakothi'];
//for(let a = 0; a < myArray.length; a = a + 1) {
   // console.log(myArray[i]);
//}
let myArray = ['lokanthali', 'patan', 'pulchowk', 'sunakothi'];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

