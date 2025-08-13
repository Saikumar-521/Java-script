/*
comparsion OP is used compare the values and datatype of variables

3. Comparison Operators
What: compare the values, returns true or false
why: to make decisions
where: if statements(logic control or access controls)
==,!=,>,<,>=,<=,===,!==
==    : check only values
===    : checks value and data type
!=   :  check value
!==   :strictly not equal
*/
let a=10;
let b="10";
console.log(a==b); //OP is true
console.log(0 == ''); //true
console.log(false == '0'); //true 
console.log(null == undefined);  //true
console.log(' \t\n' == 0);

console.log(0===''); //false
console.log(0===false);//false
//object vs primmitive
console.log([1]==1);  
console.log([1]=='1');  
console.log([]==0);  
console.log([]==![]);  

console.log(null>0); //false
console.log(null>=0); //true
console.log(null==0);
console.log(undefined==0);