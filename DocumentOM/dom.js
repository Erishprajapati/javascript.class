//selection of a html element
var a = document.querySelector("h1")
//console.log(a)
var b = document.querySelector("h2")

//changing html 
a.innerHTML = "shreyians coding"
b.innerHTML = "this a test"
document.querySelector("h1").innerHTML = "Pillar of document object model"

//changing css
var a = document.querySelector("h1")
a.style.color = "red"

b.style.color = "blue"
b.style.background="red"
b.style.marginLeft = "10px"


var c = document.querySelector("h5")
c.innerHTML="there should be rule against abusing in futsal"
document.querySelector("h5")
c.style.background = "green"
c.style.textAlign ="center"
c.style.margin = "3 px solid black"
c.style.fontSize = "100px"
c.addEventListener("click", function(){
    c.innerHTML = "but the authority has have been satisfied"
    c.style.background = "blue"

})

a.addEventListener("click", function(){
    a.innerHTML = "all of four has been destroyed"
    a.style.background = "green"
    a.style.textAlign = "center"
    a.style.fontFamily ="Helvetica"
})

var project = document.querySelector("#project")
var btn = document.querySelector("Click")
btn.addEventListener("click", function(){
    project.style.background = "blue"
});