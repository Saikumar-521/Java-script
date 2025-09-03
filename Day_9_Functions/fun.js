/*
function ---------->function are first class objects
function reusable block code { }
first-class-objects means
In JavaScript, functions are called "first-class objects" (or first-class citizens) because they are treated just like any other value.
This means we can store functions in variables, pass them as arguments, return them from other functions, and even attach properties to them — just like we do with objects.
1.functions can be assigned to variables
2.functions can be passed as arguments
3.functions can be returned from other functions
4.functions can have properties
5.functions can be stored in data structures

types of functions


functionDeclartion

function without parameters & agurments && with params argus
function with return and without return
function expression
function ananomymous
arrow function
higerorder function
callFunction
callBack Function
methodObjects
IIFE function(Immediately invoked function expression)
function recursion

async function
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



//function declaration--------->function name required (not anonymous).Can be called before defining it.
// function greet() {
//   console.log("Hello World");
// }
// greet()
// greet()
// greet()
// greet()


//Expression function--------->No function name required (anonymous).Stored in a variable.Must be defined before calling it.
//drawbacks of function expression
//1. Not hoisted: Function expressions are not hoisted, meaning they cannot be called before they are defined in the code. This can lead to errors if you try to call the function before its declaration.
//2. Anonymous functions: Function expressions often use anonymous functions, which can make debugging more difficult since the function does not have a name to reference in error messages or stack traces.


let greet = function (a) { //the declared variable name is consider has function name
  console.log(`Hello ${a}`);
}
greet('sai kumar')
greet('kavitha')

//anonymous function--------->No function name required (anonymous).Stored in a variable.Must be defined before calling it.
let add = function (a, b) {
  return a + b;
}
console.log(add(2, 3));

//arrow function--------->No function name required (anonymous).Stored in a variable.Must be defined before calling it.
//arrow function does not have its own this ,arguments and super keywords
//arrow function cannot be used as constructors
//arrow function do not have prototype property
//arrow function are not suitable for methods in objects
//arrow function are not suitable for event handlers
//arrow function are not suitable for call,apply and bind methods
//arrow function are not suitable for generator functions
//arrow function are not suitable for async functions
//example
// let multiply = (a, b) => a * b;
// console.log(multiply(2, 3));
//drawbacks of arrow function
//1. No own 'this' context: Arrow functions do not have their own 'this' context, which can lead to unexpected behavior when used as methods in objects or event handlers.
//2. Cannot be used as constructors: Arrow functions cannot be used as constructors and will throw an error if you try to use them with the 'new' keyword.
//3. No 'arguments' object: Arrow functions do not have their own 'arguments' object, which can be limiting in certain scenarios where you need to access all passed arguments.
//advantages of arrow function
//1. Concise syntax: Arrow functions have a shorter and more concise syntax compared to traditional function expressions, making the code cleaner and easier to read.
//2. Lexical 'this' binding: Arrow functions inherit the 'this' value from their surrounding lexical context, which can be beneficial in certain situations, such as when working with callbacks or nested functions.
//3. Implicit return: For single-expression arrow functions, the return value is implicit, allowing for more concise code without the need for explicit 'return' statements.
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

//difference between function declaration ,function expression and arrow function
//1. Syntax: Function declarations use the "function" keyword followed by the function name, while function expressions and arrow functions are assigned to variables.
//2. Hoisting: Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions and arrow functions are not hoisted and must be defined before they are called.
//3. 'this' context: Function declarations and function expressions have their own 'this' context, while arrow functions inherit the 'this' value from their surrounding lexical context.
//4. Use cases: Function declarations are typically used for defining named functions that can be reused throughout the code. 
// Function expressions are often used for creating anonymous functions or passing functions as arguments.
//  Arrow functions are commonly used for concise syntax and when working with callbacks or nested functions.

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
// Example 1: A function that takes another function as an argument


function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15



//IIFE function(Immediately invoked function expression)
//to prevent the global scope pollution
//to create a private scope
//to avoid variable collisions
//to execute code immediately
//A self-executing anonymous function is a function that runs as soon as it is defined.
//syntax:
// (function(){
//code
// })();
(function () {
  console.log("this is IIFE function");
})();