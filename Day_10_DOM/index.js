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

1.DOM Selectors
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

let hello = document.getElementById('hello');
hello.innerText = 'DOM Updated';


let info = document.getElementsByClassName('info');
info[2].style.textDecoration = 'underline';

// let info = document.getElementsByClassName('info');
info.style.textDecoration = 'underline'; //when we apply like para.------> the style was not applied because the para variable is the array and access throug indexes

let bol = document.getElementsByClassName('bol');
for (let i = 0; i < bol.length; i++) {
    bol[i].style.textDecoration = 'underline';
}