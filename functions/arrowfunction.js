//normal function 
function greet(){
    console.log("Hi everyone")
}
//greet();

//now writing this same function with arrow function 
greet = () =>  {
    console.log("Hello erish! how are you?");
}

//greet();

//how sending a employee message that salary has been increased

salary = (name) =>{
    console.log("Hi "+ name +  " your salary has been increased");
}

//salary("nakul");

//multiple employees cases
salary = (Name, Branch) => {
    console.log("Dear " + Name + " your " + Branch + " salary has been increased as per intern certificate");
}

//salary("Erish", "computer Science");
//salary("Nakul", "BSC");
//salary("Nabika", "BBA");

// doing multiple calculation using arrow function 
bill = (Essentials, Name, Price) =>{
    console.log("Your purchase of " + Essentials + " costs your " + Price + Name);
}

// bill("macbook", "Erish", "120000");
// bill("desk", "Suman", "12000");
// bill("Dress", "Sahil", "10000");

//function add(a,b){
  //  console.log("your amount is ", a +b);
//}
// add(900,900)


const letter = {
    name: "John",
    message() {
        console.log("Hello, my name is " + this.name);
    }
};
// letter.message();

const email = {
    message(name, Price) {
console.log(name + " your list of praticulars have been finalized as " + Price);
    }
};
// email.message("Erish", "90000");
// email.message("Saugat", "80000");

const waitTwoSeconds = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("3 seconds have passed");
        }, 3000);
    });
};

//waitTwoSeconds().then(message => console.log(message));
// Output (after 2 seconds): 2 seconds have passed
