//we will learn abt dom ,how to read and manipulate
//dom is document object model
//it is a tree like structure which represents the html document
//we can access and manipulate the elements of the document using dom
//we can use javascript to access and manipulate the dom

//to access an element we can use document.getElementById() method
//to access an element by class name we can use document.getElementsByClassName() method
//to access an element by tag name we can use document.getElementsByTagName() method
//to access an element by query selector we can use document.querySelector() method
//to access all elements by query selector we can use document.querySelectorAll() method

//to manipulate an element we can use innerHTML property
//to manipulate an element we can use textContent property
//to manipulate an element we can use style property
//to manipulate an element we can use classList property

//example
//html
/*
<div id="myDiv" class="myClass">Hello World</div>
*/

//javascript

let myDiv = document.getElementById("myDiv");//
console.log(myDiv.innerHTML); //Hello World
myDiv.innerHTML = "Hello JavaScript";
console.log(myDiv.innerHTML); //Hello JavaScript

let myClass = document.getElementsByClassName("myClass");
console.log(myClass[0].innerHTML); //Hello JavaScript

let myTag = document.getElementsByTagName("div");
console.log(myTag[0].innerHTML); //Hello JavaScript

let myQuery = document.querySelector("#myDiv");
console.log(myQuery.innerHTML); //Hello JavaScript


// basically we can access and manipulate the dom using javascript
// we can also create new elements and append them to the dom
// to create a new element we can use document.createElement() method
// to append an element we can use appendChild() method
// append means to add an element as a child of another element
//example
let newDiv = document.createElement("div");
newDiv.innerHTML = "This is a new div";
document.body.appendChild(newDiv);