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


//          properties to get or change values


    //tagname - returns tag for element nodes
    //abcelement.tagname will return the tag name of the abcelement, for example if the element is a paragraph <p>, it will return "P"

    //innerText - returns the text content of
    //  the element and all its children

    //innerHTML - returns the plain text or HTML contents in th element

    //textContent - returns textual content even for hidden elements


    //          parent vs child elements


    // jive html ch <body></body> parent a 
    //and ohde andr likhe jo v <div></div> <p></p> child elements a
    //parent element is the element that contains other elements, while child elements are the elements that are contained within a parent element. 
    //For example, in the HTML structure <div><p></p></div>, the <div> element is the parent element and the <p> element is the child element. 
    //The parent-child relationship can be nested, meaning that a child element can also be a parent element to other child elements.


    //sibling nodes - elements that share the same parent element are called sibling nodes. For example, in the HTML structure 
// <div>   <p></p><span></span>   </div>,
//  the <p> and <span> elements are sibling nodes because they share the same parent element,
//  which is the <div> element. Sibling nodes can be accessed using properties such as nextSibling and previousSibling in JavaScript.


//console ch j likhiye
//document.querySelector("div")
//te ohde andr j elements a oh show krde a
//pr j likhiye
//document.querySelector("div").children
//t ohne html collection deni andr j koi 
//paragraph ya span hunda te oh show krde a


//how to access html in console


//ehde nal div access kr rhe a fruits ala html ch

let div  = document.querySelector("div");
console.log(div);
console.dir(div);


//to Get values
div.innerText//fruits/napple/nmango/nbanana
div.innerHTML//<h3>fruits</h3><ul><li>apple</li><li>mango</li><li>banana</li></ul>
div.textContent//fruits apple mango banana
//to set values
div.innerText = "new text";
div.innerHTML = "<h1>new heading</h1><p>new paragraph</p>";
div.textContent = "new text content";
//j kuj hidden a te oh textcontent vich show ho janda but innertext vich nhi show hunda