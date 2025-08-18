/*
LOgical Operator:

*/
let a="10";
let b="10";
console.log(a==10); //true
console.log(a===10); //false
console.log(a==b); //true
console.log(a===b);//true
console.log([b]==a); //true
console.log([10]==a);//true
console.log([10]===a);//false
console.log([10]===10); //false

console.log(20!=a); //true
console.log(a!=b);//false
console.log(a!==b);//false
console.log([]!=={});//true
console.log(a!==10);//true

console.log("ab"=="ab");//true
console.log("ab"!="ab");//false
console.log("abcd">"abbb");//true
console.log("a">1); //false
console.log("a">"1");//true
console.log("5">3);//true