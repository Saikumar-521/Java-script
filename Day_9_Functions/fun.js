/*
function ---------->function are first class objects
function reusable block code { }

types of functions


functionDeclartion
function without parameters & agurments && with params argus
function with return and return
function expression
function ananomymous
arrow function
hiherorder function
callFunction
call Function
methodObjects
async function
IIFE function
function recursion
currying function

By defalut the function is undefined

syntax of function:
function function_name(){
}
->()---------->parathsis ------>parametes
// { }
*/


function userName() {
    console.log("Sai Kumar learning function concept in JS");
}
userName()
console.log("Is it really");
userName()


let username = "sai kumar";
function userdata() {
    console.log(`Hii bro what's going on ${username}`);
}

// with parameter and argmus

function user(a) {
    console.log(`hello ${a}`);
}

user("sai kumar")