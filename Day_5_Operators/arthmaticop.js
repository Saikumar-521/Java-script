/*
operators:
Operators are the  symbol used to perfome the oprations on operands
1.Arthmatic operators.
+(addition)----------->if the both operands are in number data type than performs addition operation.
          ------------>if the both operands are in string data type than performs concat operation
          ------------->if the one operand is number and other one is string than it impliclty convert into the string and performs concat operation
    In (+) addition only number convert into string and concat the values.
 if some keywords like false and true null is consider as string than it excutes and consider has string in (+),

       But coming to another operators like -,*,/,%,**, the string operand are consider to number when values is in number,
-(subsitution)--------->if the both operands are in number data type than performs subsitution operation. 

*/

let a=10;
let b=20;
console.log(a+b); //OP is 30

console.log(a+"hello"); //OP is 10hello
console.log("true"+1);


//subsituion
let s="10";
let sub=s-a;
console.log(sub); //OP is 0, here it is convert into string
console.log(typeof sub);

console.log(2+sub+b+a+"20"+"4000"+sub+a+b);
console.log(true + false+null);//OP is 1 if undefined is added than it is NaN not a number
console.log({} + []);
console.log([1, 2] + [3, 4]);

console.log("false"-null);//here the false is string and not convert into number so OP is 
console.log("10"*3);

//multiplication
console.log(false*30);
console.log(true*2+null);//OP is 2
console.log(true*2+null+undefined); //OP is NaN
console.log("10"*3); //OP is 30
console.log("a"*3); //OP is NaN

//division gives as output is coffieint
console.log("Division Operator");
console.log(10/5); //OPis 2
console.log(10/0); //OP is infinity
console.log("10"/"2"); //OP is 5
a="10";
b="5";
let c=a/b;
console.log(c); //OP is 2
console.log(typeof c);// op is number

console.log(a/6); //OP is 1.66666666666667

// modulos operator

console.log(a%2);// OP is 0
console.log(a/null); //infinity
console.log(a%null); //NaN

//exponet operator

console.log(2**3**2); //right to left preference so 3**2----->9 and 2**9 is 512
console.log(a**2);
console.log(null**2);
console.log(undefined**2); //OP is NaN
console.log(["2"]**2); //OP is 4
console.log(["apple"]**2); // if number inside the array than expoent operation is done other wise string is available than it returns NaN
