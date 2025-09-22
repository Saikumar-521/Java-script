/*
DOM:document object model,
in js and web-development, DOM stands for Document Object Model
1.it is a programming interface that represents the structure of an HTML
or XML documents as a tree of objects.Using the DOM, JS can access,modify
add,or delete elements and content in a webpage dynamically.

key points about DOM:
1.Documenet-->refers to the entire HTML or XML page

2.object->Everything(elements, attribute, text) in the page is represented as a JS object

3.Model-->The page is stuctured like a tree, where each node represents
part of the document.

1.DOM Selectors:
the DoM selectors is a method or function in js
used to select the element in the HTML document
so we can manipulate them. DOM selectors allow you to target elements by their ID,class,tag name,CSS selectors

1.getElementbyId("" or '')-->id-name
  Selects: A single element by its id.
  Returns: A single element object.
  Fastest among all selectors.

2. getElementsByClassName()
Selects: All elements with a specific class.
Returns: An HTMLCollection (array-like object).
To access an element, you use an index.

3. getElementsByTagName()
Selects: All elements with a specific tag name.
Returns: An HTMLCollection.

4. querySelector() (Modern & Recommended)
Selects: The first element that matches a CSS selector.
Returns: A single element.
More flexible than getElementById().

5. querySelectorAll() (Modern & Recommended)
Selects: All elements that match a CSS selector.
Returns: A NodeList (similar to an array, supports forEach()).

*/

// let hello = document.getElementById('hello');
// hello.innerText = 'DOM Updated';


// let info = document.getElementsByClassName('info');
// info[2].style.textDecoration = 'underline';

// let info = document.getElementsByClassName('info');
// info.style.textDecoration = 'underline'; when we apply like para.------> the style was not applied because the para variable is the array and access throug indexes

// let bol = document.getElementsByClassName('bol');
// for (let i = 0; i < bol.length; i++) {
//   bol[i].style.textDecoration = 'underline';
// }

// let it = document.getElementsByTagName('h1');
// it.innerText = 'me from js file into p tag';
// it[1].style.color = 'blue';


// let qs = document.querySelector('.bol');
// qs.innerText = 'hi iam from qs in js';
// qs.style.textDecoration = "underline";

let hello = document.getElementById('hello');
hello.innerText = 'DOM Updated';

let info = document.getElementsByClassName('info');
// Underline ALL <p class="info">
for (let i = 0; i < info.length; i++) {
  info[i].style.textDecoration = 'underline';
}

let bol = document.getElementsByClassName('bol');
for (let i = 0; i < bol.length; i++) {
  bol[i].style.textDecoration = 'underline';
}

let it = document.getElementsByTagName('h1');
it[0].innerText = 'me from js file into p tag';
// only if you add another <h1>
if (it[1]) {
  it[1].style.color = 'blue';
}

let qs = document.querySelector('.bol');
qs.style.color = "blue";

let qsa = document.querySelectorAll('i');
// qsa.style.color = 'red';
for (let i = 0; i < qsa.length; i++) {
  qsa[i].style.color = 'red';
}

/*
2.DOM manipulation:
DOM (Document Object Model)
 manipulation methods are used in JavaScript to interact with and modify HTML elements dynamically.

document.createElement('tag') – Creates a new element.
parent.appendChild(child) – Adds a child element to a parent.
parent.insertBefore(newNode, referenceNode) – Inserts a new node before a reference node.

element.remove() – Removes an element from the DOM.
parent.removeChild(child) – Removes a child from a parent.

replaceChild():In JavaScript DOM manipulation, to replace an element, you use the replaceChild() method:

Use appendChild() for a single node.
Use append() for multiple nodes and/or text, or when you want to append text directly.

difference b/w remove and removechild
Use remove() on the element itself.
Use removeChild() on the parent, passing the child to remove.


*/

// let demo = document.getElementById('demo');

// let newdiv = document.createElement('div');
//newdiv.className('demo1')-------> if we use the className isa property not a method
// newdiv.innerText = 'hi iam from js file and by using createElement method';
// demo.appendChild(newdiv);

// let dem = document.getElementById('demo');
// let parent = document.createElement('p');
// parent.innerText = 'i am from append() method js';

// dem.append('before appending text also written in the append method', parent);

// let parent = document.getElementById('sp');

// let child = document.createElement('p');
// child.innerText = 'I am inserted before the reference node';

// let rNode = parent.firstChild;
// parent.insertBefore(child, rNode);

//info.remove();

// let parent = document.getElementById('demo');
// let newDiv = document.createElement('div');
// newDiv.innerText = 'This is the new element';

// //let oldChild = parent.firstChild; // or any child you want to replace
// parent.replaceChild(newDiv);

// let element = document.getElementById('demo');
// element.remove();


/*
3.Attribute Manipulation:

In JavaScript, attribute manipulation means getting, setting, adding, or removing attributes of an HTML element. 
Attributes are the extra properties you see in HTML tags (like id, class, src, href, alt, etc.).
1.getAttribute()
gets the value of the attribute(href) from the element

2.setAttribute()
Updates/sets a new value to an attribute.
this method takes two parameter first one-->attribute name like (alt,href) and second parameter is value

3.removeAttribute()
Removes the target attribute completely.

4.hasAttribute()
it return true or false if attribute is present otherwise false
*/

let link = document.getElementById("myLink");
let hrefValue = link.getAttribute("href");
console.log(hrefValue);

link.setAttribute("href", "https://www.google.com");

link.removeAttribute("target");
let a = document.getElementById('myImage');
a.removeAttribute('alt');

let hasAttr = link.hasAttribute("href");
console.log(hasAttr); // true or false
console.log(a.hasAttribute('alt'));
console.log(a);
a.remove()



/*
4.class manipulation:
Classes are managed through the classList property of an element. 
This gives you methods to add, remove, toggle, or check CSS classes.

1.add()
Adds a class without removing existing ones.

2.remove()
Removes a specific class from the element.

3.toggle()
If the class exists → remove it.
If it doesn’t → add it.

4.contains()
it will returns true or flase if there is a class name it return true otherwise false

5.replace()
replace the oldclass name with new class name
document.getElementById("myDiv").classList.replace("oldClass", "newClass");


*/
let mydiv = document.getElementById('mydiv');
mydiv.classList.add('highlight') //it will create a class in the mydiv element and class name is highlight

//remove the the class name we use remove method and we pass here class name

mydiv.classList.remove('highlight');

mydiv.classList.toggle("active"); //if there is a active it reomes otherwise create a active class inside mydiv element
//mydiv.classList.toggle("active");

let hasClass = mydiv.classList.contains("active");
console.log(hasClass); // true or false

mydiv.classList.replace("nonactive", "active");





