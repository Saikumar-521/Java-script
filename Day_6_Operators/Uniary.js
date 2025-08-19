/*
Unirary Op
what: perform operation on a single Operand
why Quick Transformation
where:deleting or updating the data
+------->convert to number
(-)------------->convert into negative
++(increment)
1.preincrement--->++value
 First increases the value, then returns it.
2.post increment --->value++
 First print the value,and then increases the value
 
 --(decrement)
 1.pre-decrement------> --value
  first decrement the value,then print the value
 2.post-decrement-----> value--
 first print the value, and then decrement the value
*/

let a=5;
a++;//first print, but there is no console so it increase 1 value,NOw a=6
console.log(a);
console.log(a++);// now print the value then increase the value, NOW a=6 after print it increase a=7
console.log(a);//a=7

//a=7
console.log(++a);//8

--a;//now a will decrease by 1 then print the value
console.log(a);//7
console.log(a--);//now a=7
console.log(a);//6

let s=5;
console.log(s++ + --s + s-- + ++s);//20
