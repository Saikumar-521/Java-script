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
2.let
  a.re-declaration is  not possible .
  b.re-assignment is also possible 
  c.block scope
  

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