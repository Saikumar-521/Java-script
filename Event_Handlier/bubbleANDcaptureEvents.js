/*
When an event happens (like a click), the browser needs to decide which element’s event listener should run first.
This is handled in two phases:

Capturing Phase (Trickling down)
The event starts from the window → document → html → body → ... → target element.
It moves from outer to inner elements.

Bubbling Phase (Bubbling up)
After reaching the target element, the event bubbles back from the target → parent → ancestor → ... → window.
It moves from inner to outer elements.
By default, most events use bubbling.
*/
//bubbling
document.getElementById('grandparent').addEventListener('click', () => {
    console.log("grandparent clicked");
})
document.getElementById('parent').addEventListener('click', () => {
    console.log("parent clicked");
})
document.getElementById('child').addEventListener('click', () => {
    console.log("child clicked");
})