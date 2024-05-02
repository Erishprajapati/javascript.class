// let pratice some javascript 
//objects and their modifications 
/*making a invitation for bca cup event
var Invitation ="invited to play 3rd BCA Futsal Event";
const colleges={
    collegefirst:"DAV",
    location: "jawlakhel,lalitpur",
    email: "dave@gmail.com",
    contactNumber: 9878764567,
    collegesecond:"Nesfiled Int'l",
    location: "BatukBhairav,lalitpur",
    email: "nesfield@gmail.com",
    contactNumber: 9878764560,
    collegethird:"Thames",
    location: "Thapagaun,kathamandu",
    email: "thames@gmail.com",
    contactNumber: 98787645612,
    collegefourth:"vinayak sidha",
    location: "kalanki,lalitpur",
    email: "vinayaksidha12@gmail.com",
    contactNumber: 9878764523
}

//console.log("Colleges"+ Invitation);
*/

function mycollege(){//this is a simple function 
    console.log("Colleges are located at baneshwor more than jawlakhel"); // this is a message that you want to send when user calls outputs
}
mycollege();// this is how we can call the function 

const ourcollege =() =>{ // this is ho we use arrow function in js 
    console.log("Colleges are growing more and more these days");
}
ourcollege();

//lets make a total bill of any shoppig inventory 
const myBill =(pay1, pay2, pay3,pay4) =>{
    console.log(100+200+900+600);
}
myBill();

let savings = 50000
if(savings>5000 & savings<10000){
    console.log("your available balance is more than Nrs.five thousand")
}else if (savings>10,000 & savings<100000){
    console.log("your available balance is more than Nrs.ten thousand")
}else if(savings>100,000){
    console.log("your have some sufficient amount of balance")
}
