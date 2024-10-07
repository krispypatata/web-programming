// document.getElementsByName
// document.getElementsByTagName
// document.getElementsByClassName
// document.getElementById 

// access and modify text inside an element
const title = document.getElementById('title');
title.innerText = 'Online Games';

const getList = document.getElementsByClassName("games");
console.log(getList);

const getTitle = document.getElementById("subtitle");
getTitle.innerHTML = "This is the list of games";

console.log(getTitle);

// Modify elements inside an element
const games = document.getElementsByTagName("li");
games[0].innerHTML = "<h3>" + games[0].innerText +"</h3>";
console.log(games[0].innerHTML);
console.log(games);

// Get the value of an attribute
console.log(games[0].getAttribute('id'));

// Modify the value of an attribute
games[1].style="color: green";
// games[a].style.color= "green" // this also works

// Remove an attribute from an element
games[1].removeAttribute("style");

// Remove an element
const gameList = document.getElementById("games-list");
gameList.removeChild(games[0]);
// OR
const apex = document.getElementById("apex");
apex.parentNode.removeChild(apex);

// Append element to a list of elements inside an element
gameList.appendChild(apex);

// Create entirely new element
const superMario = document.createElement('li');
superMario.innerText = 'Super Mario!';
// gameList.appendChild(superMario);
document.getElementsByTagName('ol')[0].appendChild(superMario);
