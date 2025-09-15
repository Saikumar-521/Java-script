/**
 * event:
 * An event in JavaScript is an action or occurrence (like a click, key press, mouse move, or page load) 
 * that the browser can detect, and you can write code to handle it.
 * 
 * The events can applt three ways:
 * 1.Inline event Handling
 * You can directly add the event inside the HTML element using on<event> attributes.
 * <tagname on<event>="functionName()"></tagname>
 * example:
 * <button onclick="sayHello()">Click Me</button>

 *advantages:
 simple and small standarderd
 easy to understand for beginners
 dis-Adv:
 mixing HTML and JS-->not clean
 heard to maintain
 
 2.Event Property:
 You can assign a function to the element’s event property in JavaScript.
 syntax:
 element.onevent = function() {
    // code to run when event occurs
};

advantages:
JS is separated from HTML
cleaner code than inline

dis_Adv:
Can only assign one handler per event property (new assignment overwrites old one).
when attach only one hadle->last one over writes the previous one

3.addEventListner:
You can attach one or more event listeners to an element using addEventListener().
syntax:
element.addEventListener("<event>", function() {
    // code to run when event occurs
});

advantages:
can attach multiple handlers
js is separated from html
cleaner code than inline
used for big projects.
 * 
 */



function SayHello() {
    alert('Heloo!')
}
document.getElementById('cl-btn').onclick = function () {
    console.log("hii iam from event handle property");
}
let btn = document.getElementById("btn-cl");
btn.addEventListener("click", function () {
    alert("hii iam from addevent listerner")
})

function Hello() {
    alert("Hii iam from dblclick of in line event handler")
}
document.getElementById('dblClick').ondblclick = function () {
    // alert("hii iam fom the event property")
    console.log("hii iam from event property");
}
document.getElementById('dbl-click').addEventListener('dblclick', () => {
    alert("hii iam from addEventListener method of dblclick")
})

//mouseover
function fill() {
    document.getElementById("mouseOver").style.backgroundColor = "red";
}
document.getElementById('mouse-Over').onmouseover = function () {
    document.getElementById('mouse-Over').style.backgroundColor = "green";
}

document.getElementById('mouseOVer').addEventListener('mouseover', () => {
    document.getElementById('mouseOVer').style.borderRadius = "50%";
})
document.getElementById('mouseOVer').addEventListener('mouseout', () => {
    document.getElementById('mouseOVer').style.borderRadius = "0";
});


