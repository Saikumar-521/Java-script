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
callBck Function
methodObjects
async function
IIFE function
function recursion
carrying function

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

// function random(a) {
//   if (a % 3 == 0 && a % 5 == 0)
//     console.log("Bizz Buzz");
//   else if (a % 5 == 0)
//     console.log("BuZZ");
//   else if (a % 3 == 0)
//     console.log("Bizz ");


// }
// random(20)
// random(9)
// random(15)

// greet()
// function greet(name = "Guest") {
//   console.log("welcome to KPHP" + name);
//   console.log("welcome to KPHP" + name);
//   console.log("welcome to KPHP" + name);
// }
// greet("sai")
// greet(" prabhu dev")

// //sai("sai")
// let sai = function (s) {
//   console.log(`hello ${s}`);
// }
// sai("sai")

// const square = num => num * num;
// console.log(square(6));


//Expression function--------->No function name required (anonymous).Stored in a variable.Must be defined before calling it.

let greet = function (a) { //the declared variable name is consider has function name
  console.log(`Hello ${a}`);
}
greet('sai kumar')
greet('kavitha')

/*arrow function:
syntax:
() =>{}

when ever we do use the single parameter no need to use parathisis

num_variable_name => {}

  if we use the two are more parameters we use parathisis ,like (a,b,c)=> {}
*/
let a = (a) => {
  console.log("this is arrow function"); //if we not return any value from this function it return undfined
  return a * 2;
}
console.log(a(2));

/*method object function
A method is simply a function defined inside an object.
When a function belongs to an object, we call it a method.

syntax;
let obj ={
key: value,
message: function(){
}
}

*/

let personData = {
  name: "sai",
  age: "22",
  address: "HYD",
  message: function () {
    console.log("Hello Good Morning");//if we not return any value from this function it return undfined
    return `${this.name}`;
  }
}
console.log(personData.message());

/*HigerOrder Function
higer function a function or method accepts another function argument is known as higerorder
A Higher-Order Function is a function that does any one of the following:
 Takes another function as an argument (callback function)
 Returns another function as a result
 Or does both
*/

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

