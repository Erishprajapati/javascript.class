/** 
let num = 0
while (num < 10){
    console.log("run code");
    num = num + 1
}
console.log("code ended");

var tries = 0
while (tries < 3){
console.log("you have three attempts left");
tries = tries + 1;
}else if(tries < 2){
    console.log("you have two attempts left");
    tries = tries + 1;
}
console.log("you dont have attempts left");

var foods = 0; 
while( foods < 6){
    if( foods === 0){
        console.log("you have six items left");
    }else if(foods === 1){
        console.log("you have five items left");
    }else if(foods === 2){
        console.log("you have four items left");
    }else if(foods === 3){
        console.log("you have three items left");
    }else if(foods === 4){
        console.log("you have two items left");
    }else if(foods === 5){
        console.log("you have one item left");
    }else if(foods === 6){
        console.log("you dont have items left");
    }
    foods = foods + 1;
}
console.log("sorry your bag is empty");



const myFriends = ["erish", "suman", "jenson", "riken", "sabda"]
let i = 0
while(i<5){
console.log(myFriends[i])
i = i + 1;
}



const ourColleges = ["DAV", "samridhi", "Gems", "Little angels", "pathsala", "Ullens", "Premeir"]
let i = 0 
while ( i < 7){
    console.log(ourColleges[i])
    i = i + 1;
}

*/

// adding numbers at beggining 
const brothers = ['Sofan', 'Aryan', 'Aayan', 'Anuj', 'Rukesh']
let i = 0 
while ( i < brothers.length ){
    console.log(${i + 2}. brothers[i]);
    i++;
}
console.log("program")
