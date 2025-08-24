/*
while:
in while loop we check  the condition first and than excutes the block of code,if condition is false than exist from outof the block or loop
while loop is used when we don't number of iteration this loop is used
*/
let c=5;
while(c>=0){
    console.log(c);
    c--;
}
// while(console.log("hello") || true){  //in this situation while loop excutes infinte times
//     console.log("hii");
// }


// let a;
// while(console.log(c)==a || false){  this runs infinte time why beacuse console.log(c)------->returns c value and consol.log() in condition it is (undefined) so undesfined==undefined
//  console.log("undefined of a");
// }

let a;
console.log(console.log(c)==a);
console.log(console.log(c)==a && false);

let i = 5;
while(i--);
console.log(i);


let str = "JS";
let i1 = 0;

while(str[i1++]) {
    console.log(str[i1-1]);
}

let num = 5;
while(num = num - "a") { // nothing will display why beacuse condition will become false
    console.log(num);
}

let data = [1, 2, 3, 0, 4];
let index = 0;

while(data[index++]) {
    console.log("Value:", data[index-1]);
}
