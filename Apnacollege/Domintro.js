//why we link files when we can everything in one
//file bca to imporve readability
//and it increases modularity - we can reuse the code in other projects as well
//u cann link as much as css or js files as u want in html file
//html structure a, example ghar , bricks vgera
// css style a, color kehda krna ghar ch
//javascript logic a, switch board click kre te lights on off ho rhiya 
//kehde button naal lights chldiya 

            //linking files

//<style>tag connects html with css</style>
//<script> tag connects html with javascript</script>

//jo v changes appa console ja elemetn ch krde a website 
// te inspect dabbke oh temporary hunde page referesh kre te ht jande
//file ch changes krne a permanent krne a te page refresh krke dekhna a 


                    //window object 
// refers to the browser window and provides properties and methods to interact with it.
//  It is the global object in JavaScript, meaning that all global variables and functions are properties of the window object.
//  For example, you can use window.alert() to display an alert message, or window.location to get or set the current URL of the page.

                //why window a global object
// for example if u write console.log.("hello")
//and window.console.log("hello") or things like windows.alert("hello")
//both will work because console is a property of the window object
//so we can access console directly without mentioning window because its a global object

                //Now what is dom
//Document Object Model (DOM) is a programming interface for web documents.
//  It represents the structure of a web page as a tree of objects, 
// where each object corresponds to an element in the HTML document.
//  The DOM allows developers to manipulate the content, structure, and style 
// of a web page dynamically using JavaScript.
//  With the DOM, you can access and modify elements, attributes,
//  and text on a web page, as well as respond to user interactions such as clicks and keyboard events.

//window object de andr ek hor object hundi a document nam di
//document object represents the web page and provides methods and properties to access and manipulate the elements of the page
//document is model or representation of the web page or html in the browser,and we call it dom

//console.log vs console.dir
//console.log() is used to log a message to the console, while console.dir() is used to display an interactive list of the properties of a specified JavaScript object.
// When you use console.log() to log an object, it will display the object as a string representation. 
// However, when you use console.dir() to log an object, it will display the object as an interactive list of its properties and values, 
// allowing you to explore the object's structure and contents in more detail.

//dom tree ,search google for dom tree
//all the elements in the html document are represented as nodes(or called nodes) in the dom tree
//The DOM tree is a hierarchical representation of the elements in an HTML document.

                //accessing or selecting elements
//phla trika - by using their id
//appa html ch elements nu id de skde a
//id den lyi appa # use krde a # id da symbol hunda
//example h1 in css ch appa #heading likh skde a


// example
let heading = document.getElementById("heading"); 
console.log(heading); // <h1 id="heading">Hello World</h1>
console.dir(heading); // will show the properties of the element in the console

//jdo koi id html ch nhi te appa
//print krwayia null aayega
//pr jdo appa koi class jo nhi hegi
//print krwayia ta empty html collection aayega

//example ,calling a class
let heading2 = document.getElementsByClassName("heading");
console.log(heading2); // will show an HTMLCollection of all elements with the class "heading"
console.dir(heading2); // will show the properties of the HTMLCollection in the console

//3rd way using tag name
let parahs = document.getElementsByTagName("p");
console.log(parahs);
console.dir(parahs);

//4th way query selector

//document.queryselector("myId/.myClass/tag")

let elements = document.querySelector("")
//kise element da tagname print kron lyi
//jive element abc a ta
// console.log(element.abc.tagName);

 let firstElement = document.querySelector(".myclass");//first element with class myclass
    console.log(firstElement);
    console.dir(firstElement);
let allElements = document.querySelectorAll("myclass");

//all elements with class myclass
console.log(allElements);
console.dir(allElements);

//if using id then we use # in query selector
let ElementbyId = document.querySelector("#myId");
console.log(ElementbyId);
console.dir(ElementbyId);

//if using tag name then we use tag name in query selector
let ElementbyTag = document.querySelector("p");
console.log(ElementbyTag);
console.dir(ElementbyTag);