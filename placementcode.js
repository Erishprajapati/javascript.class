// 4 pillars of DOM 
// 1. selection of an element 
// document.querySelector to select the query of html element
 /**var a = document.querySelector("h1") 
 console.log(a)
 **/

 /**2. changing html
 var a = document.querySelector("h1")
 a.innerHTML = "Hello"
 
document.querySelector("h1").innerHTML = "Hello"

//3.changing CSS
 var a = document.querySelector("h1")
 a.innerHTML = "Helloo"
a.style.textAlign = "right"
a.style.backgroundColor = "red"


//1. selection of a element 
 var a = document.querySelector("h1")
console.log(a)

document.querySelector("h1").innerHTML ="you have been redirected again"
document.querySelector("h1")
a.style.textAlign = "center"
a.style.border = "3px solid black"
a.style.padding = "5px 10px 11px 20px"
a.style.color = "purple"

//4. event listener 
 var a = document.querySelector("h1")
 a.innerHTML = "Semester 4th is going on"
a.style.color ="purple"
a.style.backgroundColor = "white"
a.style.border="3px solid black"
a.style.textAlign="center"
a.addEventListener("click",function(){
    console.log("Terminal exams are happenning soon")
})

var a = document.querySelector("h1")
a.addEventListener("click",function(){
a.innerHTML = "user name and email are required"
a.style.textAlign = "right"
a.style.border = "1px solid black"
});

var a = document.querySelector("h1");
a.addEventListener("click", function() {
    a.innerHTML= "Eris have been logged in successfully";
    a.style.position="absolute";
    a.style.textAlign="center";
    a.style.border="3px solid black";
    a.style.backgroundColor="black";
    a.style.color="white";
});

var a = document.querySelector("h2");
a.addEventListener("click", function(){
    a.innerHTML = "Server Diasbled from admin";
    a.style.border="3px solid black";
    a.style.backgroundColor="red";
})

 var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
    bulb.style.backgroundColor="purple";
});

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flash = 0
btn.addEventListener("click", function(){
    if(flash == 0){
    bulb.style.backgroundColor="magenta";
});

 var a = document.querySelectorAll("h1")
 console.log(a)
 a.forEach(function(e){
console.log(e)
 });

var college = document.querySelectorAll("h1")
console.log(college)
college.forEach(function(e){
console.log(e)
});
 **/
