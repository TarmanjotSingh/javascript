Basics level 2 from chatgpt


//these are to just slect elements from the DOM, not to create or modify them

document.getElementById("id")              // single element
//ehndi id html ch eda hoyugi
//ehde ch id di jga te id da name aayega
// id da name html ch unique hona chahida hai
//ehde print karan te id wala element print hovega


document.getElementsByClassName("class")  // HTMLCollection

document.getElementsByTagName("p")        // HTMLCollection

//query selecytors
//query selector vich tusi CSS selectors use kar sakde ho
// method vich tusi CSS selectors use kar sakde ho, jive ki class, id, tag name, attribute selectors, etc.
document.querySelector(".class")          // first match
document.querySelectorAll("p")            // NodeList




// these are for modifying the DOM, creating elements, changing text, etc.


//thorha advance level takk


            document.createElement("tag")            // creates a new element
            // jive ki document.createElement("div") ek nava div element create karega

            element.textContent = "text"             // changes the text content of an element
            // jive ki element.textContent = "Hello World" element de text nu "Hello World" kar dega

            element.innerHTML = "<p>HTML</p>"       // changes the HTML content of an element
            // jive ki element.innerHTML = "<p>Hello World</p>" element de andar ek nava p tag create karega jisme "Hello World" hovega

            element.setAttribute("attribute", "value") // sets an attribute of an element
            // jive ki element.setAttribute("class", "myClass") element de class attribute nu "myClass" kar dega

            element.appendChild(child)              // appends a child element to a parent element
            // jive ki parent.appendChild(child) child element nu parent element de andar add karega

            element.removeChild(child)              // removes a child element from a parent element
            // jive ki parent.removeChild(child) child element nu parent element de andar se remove karega

            element.style.property = "value"         // changes the style of an element
            // jive ki element.style.color = "red" element de text da color red kar dega

            element.classList.add("class")          // adds a class to an element
            // jive ki element.classList.add("myClass") element de class list vich "myClass" add karega

            element.classList.remove("class")       // removes a class from an element
            // jive ki element.classList.remove("myClass") element de class list vich se "myClass" remove karega

            element.classList.toggle("class")       // toggles a class on an element
            // jive ki element.classList.toggle("myClass") element de class list vich "myClass" hove te remove karega, nahi hove te add karega

            element.classList.contains("class")     // checks if an element has a class
            // jive ki element.classList.contains("myClass") element de class list vich "myClass" hove te true return karega, nahi hove te false return karega

            element.classList.replace("oldClass", "newClass") // replaces a class on an element
            // jive ki element.classList.replace("oldClass", "newClass") element de class list vich "oldClass" hove te "newClass" kar dega, nahi hove te kuch nahi karega

            element.classList.item(index)          // returns the class at a specific index
            // jive ki element.classList.item(0) element de class list vich pehli class return karega

            element.classList.length              // returns the number of classes on an element
            // jive ki element.classList.length element de class list vich classes di ginti return karega

            element.classList.value               // returns the class list as a string
            // jive ki element.classList.value element de class list vich classes nu space separated string vich return karega

            element.classList.toString()          // returns the class list as a string
            // jive ki element.classList.toString() element de class list vich classes nu space separated string vich return karega

            element.classList.forEach(function(className) {
                // do something with each class name
            });
            // jive ki element.classList.forEach(function(className) { console.log(className); }) element de class list vich har class name nu console te print karega

