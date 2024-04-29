/** 
let i = 400
if(true){
    let i = 10
    const x = 90
    console.log("INNER: ",i)
}console.log(i)


function facebookUser(){
    const userName = "pralhad"

    function instagramUser(){
        const location = "localhost"
        console.log(userName)
    }
   // console.log(location)
    instagramUser();
}
facebookUser();


// with if else statement 
if(1){
    const username = "erish"
    if(username === "erish"){
        const website = "facebook"
        console.log(username + " uses " + website)
    }
}
**/
//this keyword 
const user = {
    username: "manish",
    price: 1099,
    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomemsg()
user.username = "alwish"
user.welcomemsg();
