// message = () =>{
//     console.log("Namaste from vianet");
// }
// setTimeout(message, 1000);

// notification = (name, code) =>{
// console.log("Dear " + name + " respected vianet user your login code is " + code);
// }
// // notification("Erish","1234")
// // notification("Suman","1222");
// setTimeout(() => {
//     notification("Suman Maharjan","1234");
// }, 2000);
//  notification("erish","1222");

// var message = () =>{
//     console.log("hello world");
// }
// setTimeout(message, 2000);

//making a weather notification using arrow function and callback (using array too)
weather = (day, condition) =>{
    console.log("The weather on " + day + " is " + condition);
}
//define the weather day and the conditions in the particular day 
// const weekWeather = [
//     {day: "Sunday", condition: "Sunny"},
//     {day: "Monday", condition: "Cloudy"},
//     {day: "Tuesday", condition: "Rainy"},
//     {day: "Wednesday", condition: "Sunny"},
//     {day: "Thursday", condition: "Storm"},
//     {day: "Friday", condition: "Rainy"},
//     {day: "Saturday", condition: "Cloudy"}
// ];

// weekWeather.forEach((weatherData,index) => {
//     setTimeout(() => {
//         weather(weatherData.day, weatherData.condition);
        
//     }, 1000 * (index+1));
// });

//making a payment notification system using the settimeout and array
// payment = (particular, amount) =>{
//     console.log("Payment has been finalized as " + amount + " of " + particular);
// }

// const paymentDetails = [
//     {particular: " macbook ",amount:"90000"},
//     {particular: " tablet ",amount:"8000"},
//     {particular: " furniture ",amount:"10000"},
//     {particular: " desk ",amount:"70000"}
// ];

// paymentDetails.forEach((paymentData, index) => {
//     setTimeout(() => {
//         payment(paymentData.particular,paymentData.amount);
//     }, 1000 * (index + 1));
// });
 
// charge = (name, details, amount) =>{
// console.log(name + " has been charged for " + details + " Rs " + amount);
// }

// const chargeInformation =[
//     {name: " Erish Prajapati", details: "absent in yoga classes", amount:"900"},
//     {name: "Suman Banjade", details: "Alcohol in classes", amount:"10000"},
//     {name: "Ritika Shrestha", details: "Failing reexamination", amount:"5000"},
//     {name: "Saras Samal", details: "Absent in regular classes", amount:"700"}
// ];

// chargeInformation.forEach((chargedata,index) => {
//     setTimeout(() => {
//         charge(chargedata.name,chargedata.details,chargedata.amount);
//     }, 2000 * (index + 1),);
// });

//making a payment message using the settimeout with 4 purposes 
// payment = (topic, amount, method, name) => {
//     console.log("For " + topic + " Rs " + amount + " has been paid " +  "through " + method +  " for " + name);
// }
// const paymentDetails =[
//     {topic: "internet renewal", amount: "19,000", method: "online payment", name: "Nabika maharjan"},
//     {topic: "bike servicing", amount: "10000", method: "cash", name:" shree motorcars"},
//     {topic: "Savings", amount: "9000", method: "khalti app", name:"Rameshwor"},
//     {topic: "Expenses", amount: "12000", method: "cash and online payment", name:"Lists are hand written"},
//     {topic: "shopping", amount: "19000", method: "cash", name: " erish prajapati"}
// ];

// paymentDetails.forEach((paymentData,index)=>{
//     setTimeout(() => {
//        payment(paymentData.topic, paymentData.amount, paymentData.method, paymentData.name) 
//     }, 2000 * (index + 1));
// });
