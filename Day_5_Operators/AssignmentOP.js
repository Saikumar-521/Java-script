/*
assignment OP is used to assign the values to the variables
=,+=,-=,*=,/=,%=,**=

*/
let a=10;
let b=15;
a=b;
console.log(a);//OP is 15
a+=20; //BE---> in Back-End a=a+20
console.log(a);//OP is 35 a=15+20
b="20";
// a+= b -= 30 *= null; 
a -=a/=2; //a=a-a/2
console.log(a);

let x=10;
x+= x-= x/=2; //x=x+x-x/2
console.log(x);
x="20";
x-= x+=x%=x/=2;//x=x-x+x%x/2; //-180
console.log(x);