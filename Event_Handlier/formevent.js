/*
Form event handlers are JavaScript functions that respond to user actions (events) on HTML form elements (like input, textarea, select, form itself). 
They let you validate data, submit forms, reset forms, or provide live feedback

onsubmit → Triggered when a form is submitted.

onreset → Triggered when the form is reset.

oninput → Fires when the user types or changes input value.

onchange → Fires when an element loses focus and its value has changed.

onfocus → When an input gets focus (clicked or tabbed into).

onblur → When an input loses focus.


*/
document.getElementById('myform').addEventListener('submit', (e) => {
    let name = document.getElementById('name').value;
    let color = document.getElementById('selectColor').value;
    if (name === "") {
        alert('pls fill name field');
        e.preventDefault();
    }
    else {
        alert("Form submitted successfully " + name + color);
    }

    // console.log("Form submited successfully");
})
//reset
document.getElementById('myform').addEventListener('reset', () => {
    alert('reseted all');
})
//onfocus
document.getElementById('name').addEventListener('focus', function (e) {
    e.target.style.backgroundColor = 'tomato';
})
//blur
document.getElementById('name').addEventListener('blur', function (e) {
    e.target.style.backgroundColor = 'white';
})
//input
document.getElementById('myform').addEventListener('input', () => {
    let a = document.getElementById('name');
    a.textContent = "you are typing";
})
