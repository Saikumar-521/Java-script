/*
Window events are special browser events that occur on the window object.
The window object represents the browser window or tab and provides events for things like:

Page loading

Resizing the window
Scrolling
Printing
Closing / before leaving
*/
window.addEventListener("load", () => {
    console.log("Page fully loaded!");
});
window.addEventListener("resize", () => {
    console.log("Window resized! Width:", window.innerWidth, "Height:", window.innerHeight);
});
window.addEventListener("scroll", () => {
    console.log("Page scrolled! Scroll position:", window.scrollY);
});
window.addEventListener("online", () => {
    console.log("You are back online!");
});

window.addEventListener("offline", () => {
    console.log("You are offline!");
});


