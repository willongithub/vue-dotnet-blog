// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
let mySrc = myImage.getAttribute('src');
let myFlag = 0;
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Dog and Cat are properties of ' + storedName;
// }

myImage.onclick = function() {
    if(myFlag%2 === 0) {
        myImage.setAttribute('src','images/feli.jpg');
    } else {
        myImage.setAttribute('src','images/fran.jpg');
    }
    myFlag = myFlag + 1;
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    while (!myName) {
        myName = prompt('Name cannot be Null!');
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Grumpy is properties of ' + myName;
}

myButton.onclick = function() {
    setUserName();
}
