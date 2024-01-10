//functions with objects and array 
//just for shopping cart
/*function calculateCartPrice(...num1){
 return num1
}
//console.log(calculateCartPrice(200,400,600,2000,900,9000))
const shoe ={
    shoename:"NIKE",
    price: "Rs 7000"
}
function handleObject(anyobject){
    console.log(`shoename is ${anyobject.shoename} and price is ${anyobject.price}`);

}
handleObject(shoe);

const dress ={
    dressname: "Long white coat",
    price: "Rs 5500"
}
function handleObject(anyobject){
    console.log(`dressname is ${anyobject.dressname} and price is ${anyobject.price}`)
}
handleObject(dress);


const scooter ={
    scootername: "Aprilla SR 125",
    prices: "Rs 3,90,000(Three lakh ninty thousand)"
}
function handleObject(anyobject){
    console.log(`scootername is ${anyobject.scootername} and price is ${anyobject.price}`);
}
handleObject({
 scootername: "Aprilla SR 120",
 price:"rs 50000"
})


const laptop ={
    laptopname: "Macbook Air M2 Pro",
    price: "Rs 3,00,000(Three lakh only)"
}
function handleObject(anyobject){
    console.log(`Laptop is ${anyobject.laptopname} and price is ${anyobject.price}`);
}
handleObject(laptop)


const hdmi={
    hdminame: "cable input",
    price:"Rs 2200",
    location:"jawlakhel,lalitpur"
}
function handleObject(anyobject){
    console.log(` hdmi is ${anyobject.hdminame} and price is ${anyobject.price} and location is ${anyobject.location}`);
}
handleObject(hdmi)

const myNewArray =[200,300,400,500]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));
*/
//apna college (1)
let lecture = 10;
let section = 3;
let tittle = "javascript";
const course={
    lecture: 10,
    section : 3,
    tittle :"javascript",
    notes:{
        introduction : "welcome to JS course"
    },
    enroll(){
        console.log("you are suceessfullyt enrolled here");
    }

}
course.enroll()