/*
what is loops:
iterarion purpose
to excute the block of code multiple times until a condition is false
why:
use to reduce the code
to automate the tasks
performance increment more efficient and readiable
use case:
1.iterating over arrays and accessing the elements in a array
2.reapetedly asking for user login
countdown..etc

for-loop;to known the exact no.of times to excute the code
*/

for(let i=0;i<6;i++)
{
    console.log(i);
}
let cardNo=123;
    for(let i=1;i<=3;i++){
    let c=1;
       if(cardNo==1234){
        console.log("next step");
        break;
       }
       else{
        if(c==3)
        console.log("your card is block");
        else{
            console.log("Enter valid pin");
        break;
        }
       }
       c++;
    }

    // let i=0;
    // for(console.log("hello..");i<2;console.log("hello"))
    // {
    //     console.log(i);
    //     break;
    // }