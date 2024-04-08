var istatus = document.querySelector("h5")

var add = document.querySelector("#follow")
var remove = document.querySelector("#remove")

add.addEventListener("click", function(){
    istatus.innerHTML ="friends"
    istatus.style.color = "green"
});

remove.addEventListener("click",function(){
    istatus.innerHTML ="removed friend"
    istatus.style.color = "red"
})