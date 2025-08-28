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


// function userName() {
//     console.log("Sai Kumar learning function concept in JS");
// }
// userName()
// console.log("Is it really");
// userName()


// let username = "sai kumar";
// function userdata() {
//     console.log(`Hii bro what's going on ${username}`);
// }

// // with parameter and argmus

// function user(a) {
//     console.log(`hello ${a}`);
// }

// user("sai kumar")

//function with return


//push random number
//divisile by 3 bizz
//divisible by 3 buzz
//divisible by both bizz buzz

//function expression 

// function color(a) {
//   document.body.style.backgroundColor = `${a}`;
//   document.body.style.div.boxShadow = 20;
// }

function random(a) {
  if (a % 3 == 0)
    console.log("Bizz");
  if (a % 5 == 0)
    console.log("BuZZ");
  if (a % 3 == 0 && a % 5 == 0)
    console.log("Bizz Buzz");


}
random(20)
random(9)
random(15)