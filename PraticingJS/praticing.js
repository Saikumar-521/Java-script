/*
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
