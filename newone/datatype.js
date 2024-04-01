
/*
let isloggedIn = false;
let accountIdloggedIn = Boolean(isloggedIn);
if (accountIdloggedIn){
    console.log("accountIdloggedIn successfully");
}else{
    console.log("accountIdloggedIn failed")
}
const accountId = 1234321;
const acccountName = "Erish's account";
const accountType = "saving account";
let accountBalance = 30000000;

let accountInformation = {
    acccountName: acccountName,
    accountBalance: accountBalance,
    accountType: accountType
}
console.log(accountInformation);

let isloggedIn = false; // Change this to false for testing

if (isloggedIn) {
    const accountId = 1234321;
    const accountName = "Erish's account";
    const accountType = "saving account";
    let accountBalance = 30000000;

    let accountInformation = {
        accountName: accountName,
        accountBalance: accountBalance,
        accountType: accountType
    };

    console.log(accountInformation);
} else {
    console.log("User is not logged in.");
}

let isloggedIn = false; // Assign boolean false instead of string "false"
if(userLoggedIn) {
    const firstName = "Erish";
    const lastName = "prajapati";
    const gender = "male";
    let username = "scrumbler";
    let location = "sunakothi,lalitpur";
    let education = "bachelor running";
    let number = 98546765649;
    let email = "scrumbler@gmail.com";
    
    let userInformation = {
        firstName: firstName, 
        lastName: lastName,
        gender: gender,
        username: username,
        location: location,
        education: education,
        number: number,
        email: email
    };
    console.log(userInformation);
} else {
    console.log("user not found");
}
*/

let userLoggedIn = 1;
if(userLoggedIn){
    const firstName = "Erish";
    let lastName = "Prajapati";
    let number = 9898999;
    const gender = "male";
    let email = "irish@gmail.com";
    let education = "bachelor";

    let userInformation = {
        firstName: firstName,
        lastName: lastName,
        number: number,
        gender: gender,
        email: email,
        education: education
    };

    console.log(userInformation);
}else{
    console.log("user not found");
}
