/*
coversion--->emplict conversion
typeconversion---->implict conversion
 */
console.log(!"");//""--->empty string consider as 0 false and here not operator convert into true and output is true
console.log(!" ");//
console.log("sai">"SAI");
console.log("a">"p");

for(var i=0;i<5;i++){
    console.log(i);
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 5000);
}
for (let i = 0; i < 5; i++);
{
  console.log("Hello");
}

setTimeout(()=> {
    console.log("Hello After 5 seconds");
},5000);
function function2(){
 //var name="sai";
 let name="sai";
 console.log(name);
}
function2();
//console.log(name); //througs not defined


{
  var blocks=20;
  console.log(blocks);
}
console.log(blocks);//when the variable type is let not give access

let paymentmode="Cash";
switch(paymentmode){
  case "Cash":
    console.log("payment Process via Cash");
    break;
  case "Paytem":
    console.log("payment process via Paytem");
    break;
  case "Credit card":
    console.log("payment Process  via credit card ");
    break;
  case "Debit card":
    console.log("paymrnt Process via Debit card");
    break;
  case "Net Banking":
    console.log("payment Process  via Net banking");
    break;
  default:
    console.log("select payment process");
}