// Selecting the <div> element
var divElement = document.querySelector('h1');

// Updating the content of the <div> element
divElement.innerHTML = "welcome to pinterest";

// Function to add dynamic text
function addDynamicText() {
    var dynamicText = "Welcome to my website!";
    var dynamicTextElement = document.getElementById('dynamicText');
    dynamicTextElement.textContent = dynamicText;
}

// Function to add dynamic array
function addDynamicArray() {
    var dynamicArray = ["Apple", "Banana", "Orange", "Grapes"];
    var dynamicArrayElement = document.getElementById('dynamicArray');
    dynamicArrayElement.textContent = "Dynamic Array: " + dynamicArray.join(", ");
}

// Call functions to add dynamic content
addDynamicText();
addDynamicArray();
