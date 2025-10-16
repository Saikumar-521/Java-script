/* 
what is  variable:
a variable is a name given to a value. itt is a way to tore a value in a program so that it can be used later.varaiable are used to store data in a program
why:
1.store user name/inputs data
2.perform calucations
3.re-use values
4.reduce the repetition

Syntax:
varkeyword varible_Name =value;

example:let age =20;

types of Variable:
1.var
2.let
3.const

1.var
  a.re-declaration is possible in var keyword.
  b.re-assignment is also possible in var
  c.functional scope
  d.hoisting is possible and value is assigned has undefined
2.let
  a.re-declaration is  not possible .
  b.re-assignment is also possible 
  c.block scope
  d.hoisting is possible but value is not assigned

3.const:
  a.re-declaration is not possible
  b.re-assignment is not possible
  c.block scope
  d.hoisting is possible but value is not assinged

var is hoisted and initialized with undefined immediately.
let and const are hoisted but not initialized until their declaration.

Variable name Rules:
1.must  start with a letter, underscore,or dollar sign.
2.cannot start with a number
3.cannot conatin spaces or special charaters.
4.follow the camel case while declaring the variables.
  

*/

let age=19;


let bal=34000;
let witdraw=1000;
bal=bal-witdraw;
console.log(bal);

// var 
var username="sai"; //declaration
var username="pappu"; //re-declaration
var name;
name="jS";
name="CSS"; //resign
username="kumar"; //Assign


var email="sai@gmail.com"; //declaration
console.log(email);
var email= "kumar@gmail.com"; //re-declaration
console.log(email);
email="XYZ@gmail.com";
console.log(email);

var password;
console.log(password);

//let
let num=10;
// let num=20;  //re-declartion is not possible
console.log(num);
num=20;
console.log(num);

{
    let num=30;
    {
        let num=12;
        console.log(num);
        var a=100;
    }
    console.log(num);
    console.log("num value inside the block" + num);
    console.log(a);
}
console.log("num value at outside of block" + num);


var b=20;
console.log(b);
// in back-end it will store like this
// var b;
// b=20;
// console.log(b);output is 20--------------->

console.log(b);
var b=20;
// document.writeln(b);

//in back-end it will store like this
//var b;
//console.log(b); in this situation the out put is undefined
//b=20;
let x=20;
x=30;
console.log(x);

{
  //let x=20;
  //let x=30; throws error
  {
    let x=40;
    console.log(x);
    var y=100;
  }
  console.log(x);
  console.log(y);
}
console.log(x);


let number;
console.log(number);
number=20;


//const
const pi=3.144;
//pi=4.4;
//console.log(pi); //error Assignment to constant variable.
console.log(pi);

//block scope

{
  const a=100;
  {
    const a=200;
    console.log(a);
  }
  console.log(a);
}

let  _cash=300;
// let @cash=300;
let $sai;
// let 1sa