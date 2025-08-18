/*
Logical Operators
performs LOgical Operation and reverse a boolean result
to make decision
form validation
&&,||,!,&&=,||=,!=
&&-------->if both conditions are true it returns true,otherwise it returns false
||-----> any one or two conditions are true than it returns true,if both condition false it returns false
Back-End Pocess in AND&&, OR || operator
Rule of &&:
  If the first operand is falsy, return it immediately.
  If the first operand is truthy, then return the second operand.




a || b
If a is truthy → return a.
Else → return b.

a && b
If a is falsy → return a.
Else → return b.

!-->flip truty/falsey value
!!-->double flip or same meaning without performin not operator



*/

let userName="admin";
let psd=12345;
if(userName=="admin" && psd==12344)
{
 console.log("Wel come!");
}
else{
  console.log("Invalid User Credintials");
}

//LOgical OPerator
let a=10;
console.log(a && null);//null<---------false
console.log(null && undefined);//null<---------false
console.log(20>a && 2<1);//true
console.log("hello" && true);//true
console.log("10"&& 10);//false
console.log(null && false); //null

//OR Operator ||
console.log(1||0);//0
console.log(0|| false);//false
console.log(0 || true);//true
console.log(null || true);//true
console.log(null || false);//null

console.log(0 || "Hello" || false);//Hello
console.log("JS" && 0 && true);//first the JS convert into true
console.log(null || undefined || NaN || 5);//5
console.log(false || null);//null
console.log(null || false);//false------>IN OR operator first check JS starts evaluating left → right.
// null → falsy. OR (||) says,If left is truthy → return it immediately.
// If left is falsy → check the right side.Right side = false → also falsy.Since both are falsy → return the last value (false).
console.log(null && false);//null && (AND) works differently:
//If the left is falsy → stop immediately and return it.Left side = null → falsy.
//JS stops evaluation → returns null (doesn’t even check false). Output → null
console.log(null && true);//null
console.log(true && null);//null
console.log(null || true);//true
console.log(!!(10 && "Hi"));//true
console.log(!(undefined || "JS"));//true
console.log(!false && (0 || "done"));//done
console.log(!null && 10);//10




// not !
console.log(!true);//false
console.log(!false);//true
