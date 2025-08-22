/*
do while loop;
the do while can excutes the block of code at onces then checks the condtion if the condition is true excutes the block of code until the condition becomes false.
*/

let c=1;
let pin=234;

do{
    if(c==1)
        console.log('welcome to ICICI bank');
    if(c==2)
        console.log("You! have last chance to enter your pin otherwise, Your card is blocked");
    if(c==3)
        console.log("your card is blocked the number of times you attemted has "+c);
    c++;
}while(c<=3 && pin !=1234);

if(pin==1234)
{
    console.log("transcation successful");
}
else{
    console.log("Enter Valid Pin!");
    console.log(`You entered ${c-1} times pin`);
}
