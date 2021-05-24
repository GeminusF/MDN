let myVariable = 'Frey';

let iceCream = 'ciyelek';

if (iceCream === 'ciyelek') {
  alert('Welcom to site');
} else {
  alert('Awwww, but  ciyelek ice cream is my favorite');
}

/*document.querySelector('html').onclick = function() {
    alert('I Won’t Kill You, Because You’re Just Too Much Fun.');
}
*/

document.querySelector('h3').onclick = function changeContent() {
  document.querySelector('h3').textContent = ' Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine, Maggie Gyllenhaal, Gary Oldman';
  document.querySelector('h3').style = 'Color:blue';
};

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/joker.png') {
    myImage.setAttribute('src', 'images/jokerInPoliceCar.png');
  } else {
    myImage.setAttribute('src', 'images/joker.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// TODO: Set User Name
function setUserName() {
  let myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}
