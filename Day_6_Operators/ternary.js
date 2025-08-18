/*
Ternary Operator
what: short cut of if-else
why consise decision making
where:form validation
synatx:
condition ? VAlue_If_true : Value_If_false;
*/

let age=19;
console.log((age>17)?"eligible for vote":"Not eligible fo vote");
nationality="indian";
if(age>17)
{
    console.log("eligible for vote");
    if(nationality=="indian"){
        console.log("Eligible for indian vote");
    }
    else{
        console.log("NIR voters");
    }
}
else{
    console.log("Not eligible for vote");
}

let result;//= age>=18 ? /*"eligible for vote"*/ ;

result= age>17 ? 
       /* console.log("eligible for vote");*/ nationality=="indian"?"Eligible for indian vote":"NIR voters"
        :"Not eligible for vote";
console.log(result);