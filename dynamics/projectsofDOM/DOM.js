let welcomeBtn = document.querySelector('button');
welcomeBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let text = prompt("Enter Name of user");
    welcomeBtn.textContent = 'You are welcome here ' + name;
}