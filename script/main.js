/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

/*let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUsername() {
	let myname = prompt('please enter your name');
	localStorage.setItem('name',myname);
	myheading.textContent = 'Mozilla is cool' + myname;
}

if(!localStorage.getItem('name'))
{setUsername();}
else
{myheading.textContent= 'MOzilla is cool' + localStorage.getItem('name');}

mybutton.onclick = function(){setUsername();}
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
     localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}